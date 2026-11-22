// Runs in the page's own JS context (MAIN world) before any page script.
// Neutralises the tricks scam/ad sites use to spawn windows and nag the user.
(() => {
  "use strict";
  const send = (type, detail) =>
    window.postMessage({ __grandmaShield: true, type, detail }, "*");

  // --- 1. Popups / popunders -------------------------------------------------
  // Allow window.open only right after a real click/keypress, max one per gesture.
  let lastGesture = 0;
  let usedThisGesture = false;
  const markGesture = (e) => {
    if (!e.isTrusted) return;
    lastGesture = Date.now();
    usedThisGesture = false;
  };
  ["click", "keydown", "pointerup"].forEach((t) =>
    window.addEventListener(t, markGesture, true)
  );

  const realOpen = window.open;
  window.open = function (url, ...rest) {
    const fresh = Date.now() - lastGesture < 1000;
    if (!fresh || usedThisGesture) {
      send("blocked-popup", String(url || ""));
      return null;
    }
    usedThisGesture = true;
    return realOpen.call(this, url, ...rest);
  };

  // --- 2. "Click Allow to prove you're not a robot" notification spam -------
  if (window.Notification) {
    try {
      Object.defineProperty(Notification, "permission", { get: () => "denied" });
    } catch {}
    Notification.requestPermission = () => {
      send("blocked-notification", location.hostname);
      return Promise.resolve("denied");
    };
  }
  if (navigator.permissions?.query) {
    const realQuery = navigator.permissions.query.bind(navigator.permissions);
    navigator.permissions.query = (desc) =>
      desc?.name === "notifications"
        ? Promise.resolve({ state: "denied", onchange: null })
        : realQuery(desc);
  }

  // --- 3. Tech-support-scam alert loops ("YOUR PC IS INFECTED") -------------
  let dialogs = 0;
  const limit = (fn, fallback) =>
    function (...args) {
      if (++dialogs > 2) {
        send("blocked-dialog", String(args[0] || "").slice(0, 200));
        return fallback;
      }
      return fn.apply(this, args);
    };
  window.alert = limit(window.alert, undefined);
  window.confirm = limit(window.confirm, false);
  window.prompt = limit(window.prompt, null);

  // --- 4. "Are you sure you want to leave?" traps ---------------------------
  const realAdd = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function (type, ...rest) {
    if (type === "beforeunload") return;
    return realAdd.call(this, type, ...rest);
  };
  Object.defineProperty(window, "onbeforeunload", { set() {}, get: () => null });

  // --- 5. Fullscreen hijack (fake "Windows Defender" screens) ---------------
  Element.prototype.requestFullscreen = function () {
    send("blocked-fullscreen", location.hostname);
    return Promise.reject(new Error("Blocked by Grandma Shield"));
  };
})();
