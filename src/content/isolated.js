/* Isolated-world content script (all frames):
 *  - relays block events from main-world.js to the background counter
 *  - top frame: requests element hiding, removes fake "virus warning" overlays */
(() => {
  "use strict";

  const host = HUSH.hostFromUrl(location.href);
  let active = null; // null = settings still loading
  const queued = [];

  const send = (kind) => {
    try {
      const p = api.runtime.sendMessage({ cmd: "blocked", kind });
      if (p && p.catch) p.catch(() => {});
    } catch {
      /* extension reloaded */
    }
  };

  document.addEventListener("hush:blocked", (e) => {
    const kind = String(e.detail);
    if (!(kind in HUSH.STAT_LABELS)) return;
    if (active === null) queued.push(kind);
    else if (active) send(kind);
  });

  const isTop = window === window.top;

  HUSH.getSettings().then(({ enabled, allowlist }) => {
    active = enabled && !!host && !HUSH.isAllowlisted(host, allowlist);
    if (active) {
      queued.forEach(send);
      if (isTop) {
        // Background injects site-specific ad hiding + the user's hidden elements.
        api.runtime.sendMessage({ cmd: "cosmetic" }).catch(() => {});
        startOverlayWatch();
      }
    }
    queued.length = 0;
  });

  /* ---------- fake warning overlays ---------- */

  // A page must match at least two of these to be treated as a scam screen.
  const SIGNALS = [
    /\b(virus(es)?|trojan|malware|spyware|ransomware)\b/i,
    /\b(computer|pc|device|windows|system|mac|iphone)\b.{0,20}\b(is|has been|was|are)\b.{0,10}\b(infected|blocked|locked|compromised|hacked|damaged)\b/i,
    /\bcall\b.{0,25}\b(microsoft|apple|windows|support|technician|helpline|immediately|now)\b/i,
    /\b(toll[\s-]?free|help ?line|tech(nical)? support)\b/i,
    /\bdo not\b.{0,10}\b(close|restart|shut ?down|turn off|ignore)\b/i,
    /\b(windows defender|microsoft security|apple security|security center)\b.{0,20}\b(alert|warning|scan)\b/i,
    /(\+?1[\s.-]*)?\(?8(00|33|44|55|66|77|88)\)?[\s.-]*\d{3}[\s.-]*\d{4}/,
    /\b(license|subscription|access|account)\b.{0,15}\b(suspended|expired|blocked|disabled)\b/i,
  ];
  const isScamText = (text) => SIGNALS.reduce((n, re) => n + (re.test(text) ? 1 : 0), 0) >= 2;

  const handled = new WeakSet();

  function coveringAncestor(el) {
    let best = null;
    const vw = innerWidth;
    const vh = innerHeight;
    for (let n = el; n && n !== document.body && n !== document.documentElement; n = n.parentElement) {
      const pos = getComputedStyle(n).position;
      if (pos !== "fixed" && pos !== "absolute" && pos !== "sticky") continue;
      const r = n.getBoundingClientRect();
      if (r.width >= vw * 0.85 && r.height >= vh * 0.85) best = n;
    }
    return best;
  }

  function scan() {
    if (!document.body || !innerWidth || !innerHeight) return;
    const found = new Set();
    for (const [fx, fy] of [[0.5, 0.5], [0.2, 0.2], [0.8, 0.8], [0.2, 0.8], [0.8, 0.2]]) {
      const el = document.elementFromPoint(innerWidth * fx, innerHeight * fy);
      const cover = el && coveringAncestor(el);
      if (cover && !handled.has(cover)) found.add(cover);
    }
    for (const el of found) {
      handled.add(el);
      if (!isScamText((el.innerText || "").slice(0, 6000))) continue;
      el.remove();
      for (const root of [document.documentElement, document.body]) {
        if (getComputedStyle(root).overflow === "hidden") root.style.setProperty("overflow", "auto", "important");
      }
      send("overlay");
    }
  }

  function startOverlayWatch() {
    let timer = 0;
    const schedule = () => {
      if (!timer) timer = setTimeout(() => { timer = 0; scan(); }, 750);
    };
    const begin = () => {
      scan();
      new MutationObserver(schedule).observe(document.documentElement, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: ["style", "class"],
      });
      addEventListener("resize", schedule, { passive: true });
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", begin, { once: true });
    else begin();
  }
})();
