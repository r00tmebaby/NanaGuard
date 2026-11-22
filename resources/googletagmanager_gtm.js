/* Stand-in for Google Tag Manager: fires queued eventCallbacks so pages don't hang. */
(function () {
  "use strict";
  const noop = function () {};
  window.ga = window.ga || noop;
  const dl = window.dataLayer;
  if (!dl || typeof dl !== "object") return;
  if (dl.hide && typeof dl.hide.end === "function") { dl.hide.end(); dl.hide.end = noop; }
  const callback = (item) => {
    if (!item || typeof item !== "object" || typeof item.eventCallback !== "function") return;
    setTimeout(item.eventCallback, 1);
    item.eventCallback = noop;
  };
  if (typeof dl.push === "function") {
    dl.push = new Proxy(dl.push, { apply(target, thisArg, args) { callback(args[0]); return Reflect.apply(target, thisArg, args); } });
  }
  if (Array.isArray(dl)) dl.slice().forEach(callback);
})();
