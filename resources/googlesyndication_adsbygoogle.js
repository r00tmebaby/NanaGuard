/* Stand-in for AdSense (adsbygoogle.js): accepts pushes and fills slots with nothing. */
(function () {
  "use strict";
  const fill = () => {
    for (const ins of document.querySelectorAll("ins.adsbygoogle:not([data-adsbygoogle-status])")) {
      ins.setAttribute("data-adsbygoogle-status", "done");
      ins.setAttribute("data-ad-status", "unfilled");
      ins.style.setProperty("display", "none", "important");
    }
  };
  const existing = window.adsbygoogle;
  const shim = { loaded: true, push() { fill(); return 1; } };
  window.adsbygoogle = shim;
  if (Array.isArray(existing)) existing.forEach(() => fill());
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fill, { once: true });
  else fill();
})();
