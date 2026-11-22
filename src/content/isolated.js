/* Isolated-world content script (all frames):
 *  - relays block events from the page-context scripts to the background counter
 *  - top frame: applies site cosmetic + procedural filters, runs smart ad detection,
 *    removes fake "virus warning" overlays */
(() => {
  "use strict";

  const host = BLK.hostFromUrl(location.href);
  const isTop = window === window.top;
  let active = null; // null = settings still loading
  const queued = [];

  const message = (msg) => {
    try {
      const p = api.runtime.sendMessage(msg);
      return p && p.catch ? p.catch(() => null) : Promise.resolve(null);
    } catch {
      return Promise.resolve(null); // extension reloaded
    }
  };
  const send = (kind) => message({ cmd: "blocked", kind });

  document.addEventListener("kinguard:blocked", (e) => {
    const kind = String(e.detail);
    if (!(kind in BLK.STAT_LABELS)) return;
    if (active === null) queued.push(kind);
    else if (active) send(kind);
  });

  // Warnings raised in the page context (e.g. fake-CAPTCHA clipboard trick), possibly in an
  // iframe: route through the background so the top frame shows them.
  document.addEventListener("kinguard:warn", (e) => message({ cmd: "warn", kind: String(e.detail) }));

  const WARNINGS = {
    clickfix: {
      id: "clickfix",
      level: "high",
      title: "Stop! Don't paste anything",
      lines: [
        "This page secretly tried to copy a dangerous command. It wants you to press Windows + R (or open Terminal) and paste it. That would install a virus.",
        "Real websites never ask you to do this. Kinguard replaced the command with a harmless message.",
      ],
      actions: [
        { label: "Close this page", kind: "primary", run: () => message({ cmd: "closeTab" }) },
        { label: "OK, I won't paste anything", kind: "secondary" },
      ],
    },
  };
  if (isTop) {
    api.runtime.onMessage.addListener((msg) => {
      if (msg && msg.cmd === "showWarning" && WARNINGS[msg.kind]) BlkWarn.show(WARNINGS[msg.kind]);
    });
  }

  BLK.getSettings().then(async (settings) => {
    active = settings.enabled && !!host && !BLK.isAllowlisted(host, settings.allowlist);
    queued.splice(0).forEach((k) => active && send(k));
    if (!active || !isTop) return;

    if (Object.values(settings.guards).some(Boolean)) {
      BlkGuard.start({ host: host.toLowerCase(), settings, send, message, warn: BlkWarn.show });
    }
    if (settings.lists.annoyances) BlkNag.start(() => send("nag"));
    if (/(^|\.)youtube\.com$/.test(host) && (settings.guards.ai || settings.guards.factcheck)) {
      BlkYouTube.start({ settings, send, message, warn: BlkWarn.show });
    }

    // Background injects CSS (site hiding, learned + user-hidden elements) and returns
    // the procedural filters that need JavaScript.
    const res = await message({ cmd: "cosmetic" });
    const procedural = res && res.ok && res.value ? res.value.procedural : [];
    if (procedural.length) BlkProcedural.start(procedural);

    if (settings.smart && !BLK.matchesList(host, settings.smartOff)) {
      BlkSmart.start((el, networks) => {
        send("smart");
        const selector = BLK.selectorFor(el, { allowPositional: false });
        message({ cmd: "learn", selector, networks });
      });
    }
    startOverlayWatch();
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
    for (let n = el; n && n !== document.body && n !== document.documentElement; n = n.parentElement) {
      const pos = getComputedStyle(n).position;
      if (pos !== "fixed" && pos !== "absolute" && pos !== "sticky") continue;
      const r = n.getBoundingClientRect();
      if (r.width >= innerWidth * 0.85 && r.height >= innerHeight * 0.85) best = n;
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
        childList: true, subtree: true, attributes: true, attributeFilter: ["style", "class"],
      });
      addEventListener("resize", schedule, { passive: true });
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", begin, { once: true });
    else begin();
  }
})();
