/* Subscription / newsletter popup closer (isolated world, top frame).
 * Sites like news publishers throw "CYBER SALE – Subscribe for $1/week – No thanks" boxes
 * at you. When such a box appears on its own (not right after you clicked something), we
 * press its own "No thanks"/close button, so the site remembers the dismissal. If it has
 * no such button, we remove the box and its dark backdrop and unlock scrolling.
 * Login boxes and hard paywalls (no dismiss option) are left alone. */
// eslint-disable-next-line no-var
var BlkNag = (() => {
  "use strict";

  const PITCH = [
    /\bsubscri(be|ption|ber)s?\b/i, /\bnewsletter\b/i, /\bsign ?up\b/i, /\bjoin (now|free|us|today)\b/i,
    /\b(special|exclusive|limited[- ]time) offer\b/i, /\d+\s?% off\b/i, /\b(sale|deal|discount|promo)\b/i,
    /\bredeem\b/i, /\bfirst (year|month|\d+ (weeks|months))\b/i, /(per|a|\/)\s?(week|wk|month|mo|year|yr)\b/i,
    /\bunlimited (access|reading)\b/i, /\bfree trial\b/i, /\bpremium\b/i, /\bunlock\b/i,
    /\bdon'?t miss\b/i, /\bstay (informed|updated|in the loop)\b/i, /[$£€]\s?\d/,
  ];
  const DISMISS_TEXT = /^(no,?\s*thanks?|no thank you|not now|maybe later|later|close|dismiss|skip|i'?m not interested|not interested|continue (reading|to (the )?(site|article|website))|×|✕|✖|x)$/i;
  const DISMISS_LABEL = /\b(close|dismiss|no thanks)\b/i;

  let lastClick = -Infinity;
  addEventListener("pointerdown", (e) => { if (e.isTrusted) lastClick = performance.now(); }, true);
  addEventListener("keydown", (e) => { if (e.isTrusted && (e.key === "Enter" || e.key === " ")) lastClick = performance.now(); }, true);

  const isFixed = (el) => {
    const pos = getComputedStyle(el).position;
    return pos === "fixed" || pos === "sticky";
  };
  const visible = (el) => {
    const r = el.getBoundingClientRect();
    const s = getComputedStyle(el);
    return r.width > 40 && r.height > 30 && s.visibility !== "hidden" && s.display !== "none" && Number(s.opacity) > 0.05;
  };

  /** The outermost fixed layer containing el (the modal or its wrapper). */
  function fixedLayer(el) {
    let best = null;
    for (let n = el; n && n !== document.body && n !== document.documentElement; n = n.parentElement) {
      if (isFixed(n)) best = n;
    }
    return best;
  }

  function candidates() {
    const set = new Set();
    for (const el of document.querySelectorAll("[role=dialog],[aria-modal=true],dialog[open],[class*=modal i],[class*=popup i],[class*=overlay i],[id*=modal i],[id*=popup i]")) {
      const layer = isFixed(el) ? el : fixedLayer(el);
      if (layer && visible(layer)) set.add(layer);
    }
    // Whatever sits in the middle or at the bottom of the screen on a fixed layer.
    for (const [fx, fy] of [[0.5, 0.5], [0.5, 0.85]]) {
      const hit = document.elementFromPoint(innerWidth * fx, innerHeight * fy);
      const layer = hit && fixedLayer(hit);
      if (layer && visible(layer)) set.add(layer);
    }
    return [...set];
  }

  function isNag(layer) {
    const text = (layer.innerText || "").trim();
    if (text.length < 15 || text.length > 2500) return false;
    if (layer.querySelector("input[type=password]")) return false; // login
    if (/\b(cookie|consent|gdpr|privacy choices)\b/i.test(text) && !/\bsubscri/i.test(text)) return false; // cookie lists handle these
    return PITCH.filter((re) => re.test(text)).length >= 2;
  }

  function dismissButton(layer) {
    const els = layer.querySelectorAll("button, a, [role=button], span, div, svg");
    let best = null;
    for (const el of els) {
      if (el.childElementCount > 2) continue;
      const label = (el.getAttribute && (el.getAttribute("aria-label") || el.getAttribute("title"))) || "";
      const t = (el.textContent || "").trim();
      if (DISMISS_TEXT.test(t) || (t.length <= 2 && DISMISS_LABEL.test(label)) || (!t && DISMISS_LABEL.test(label))) {
        // Prefer explicit "No thanks" over a generic ×.
        if (!best || /no|not|later|skip/i.test(t)) best = el.closest("button, a, [role=button]") || el;
        if (/no|not|later|skip/i.test(t)) break;
      }
    }
    return best;
  }

  function unlockScroll() {
    for (const root of [document.documentElement, document.body]) {
      if (!root) continue;
      const s = getComputedStyle(root);
      if (s.overflow === "hidden" || s.overflowY === "hidden") root.style.setProperty("overflow", "auto", "important");
      if (s.position === "fixed") root.style.setProperty("position", "static", "important");
    }
  }

  function removeBackdrops() {
    for (const el of document.querySelectorAll("body > *, body > * > *")) {
      if (!isFixed(el)) continue;
      const r = el.getBoundingClientRect();
      const text = (el.innerText || "").trim();
      if (r.width >= innerWidth * 0.9 && r.height >= innerHeight * 0.9 && text.length < 5) el.remove();
    }
  }

  function start(onClosed) {
    const handled = new WeakSet();
    let closed = 0;
    const pass = () => {
      if (closed >= 5) return; // safety valve
      if (performance.now() - lastClick < 1500) return; // user just opened something themselves
      for (const layer of candidates()) {
        if (handled.has(layer) || !isNag(layer)) continue;
        handled.add(layer);
        const btn = dismissButton(layer);
        if (btn) btn.click();
        setTimeout(() => {
          if (layer.isConnected && visible(layer)) layer.remove();
          removeBackdrops();
          unlockScroll();
        }, 400);
        closed++;
        onClosed();
      }
    };
    let timer = 0;
    const schedule = () => { if (!timer) timer = setTimeout(() => { timer = 0; pass(); }, 600); };
    const begin = () => {
      pass();
      new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true, attributes: true, attributeFilter: ["class", "style", "open"] });
    };
    // Start after the page's own load so layout reads never delay its first render.
    if (document.readyState === "complete") begin();
    else addEventListener("load", begin, { once: true });
  }

  return { start, isNag };
})();
