// Isolated-world content script: relays block events to the background
// and removes giant fixed-position overlays that cover the whole page.
(() => {
  "use strict";
  window.addEventListener("message", (e) => {
    if (e.source !== window || !e.data?.__grandmaShield) return;
    chrome.runtime.sendMessage({ type: e.data.type, detail: e.data.detail });
  });

  const SCAM_WORDS =
    /(virus|infected|call (microsoft|support|now)|your (computer|pc) (is|has been)|toll.?free|do not (close|restart))/i;

  const sweep = () => {
    for (const el of document.querySelectorAll("body *")) {
      const s = getComputedStyle(el);
      if (s.position !== "fixed" || Number(s.zIndex) < 1000) continue;
      const r = el.getBoundingClientRect();
      const coversScreen =
        r.width >= innerWidth * 0.9 && r.height >= innerHeight * 0.9;
      if (coversScreen && SCAM_WORDS.test(el.innerText || "")) {
        el.remove();
        chrome.runtime.sendMessage({ type: "removed-overlay", detail: location.hostname });
      }
    }
  };
  sweep();
  new MutationObserver(() => {
    clearTimeout(sweep.t);
    sweep.t = setTimeout(sweep, 500);
  }).observe(document.documentElement, { childList: true, subtree: true });
})();
