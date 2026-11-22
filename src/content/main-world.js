/* Runs inside the page's own JavaScript context (MAIN world) before any page
 * script. Neutralises the APIs that ad networks and scam pages abuse.
 * Registered dynamically by background.js, so allowlisted sites never get it. */
(() => {
  "use strict";

  // Capture natives before the page can tamper with them.
  const nativeDispatch = EventTarget.prototype.dispatchEvent;
  const NativeCustomEvent = CustomEvent;
  const now = () => performance.now();

  const report = (kind) => {
    try {
      nativeDispatch.call(
        document,
        new NativeCustomEvent("hush:blocked", { detail: String(kind) })
      );
    } catch {
      /* document not ready / detached */
    }
  };

  /* ---------- user-gesture tracking (shared by every realm we patch) ---------- */

  const INTERACTIVE =
    "a[href],button,input,select,textarea,label,summary,option," +
    "[role=button],[role=link],[role=menuitem],[role=tab],[role=option],[contenteditable=true]";
  const GESTURE_MS = 1000;
  const gesture = { at: -Infinity, kind: "", interactive: false, used: false };

  function isInteractive(target, win) {
    if (!target || typeof target.closest !== "function") return false;
    const el = target.closest(INTERACTIVE);
    if (!el) return false;
    const doc = el.ownerDocument;
    if (el === doc.body || el === doc.documentElement) return false;
    // Invisible full-page links are a popunder trick, not a real control.
    const r = el.getBoundingClientRect();
    return r.width * r.height < win.innerWidth * win.innerHeight * 0.5;
  }

  function onGesture(e, win) {
    if (!e.isTrusted) return;
    if (e.type === "keydown" && e.key !== "Enter" && e.key !== " ") return;
    const t = now();
    const target = e.composedPath ? e.composedPath()[0] : e.target;
    // pointerdown + click of the same press count as one gesture.
    if (e.type === "click" && gesture.kind === "pointerdown" && t - gesture.at < GESTURE_MS) {
      gesture.at = t;
      gesture.interactive = gesture.interactive || isInteractive(target, win);
      return;
    }
    gesture.at = t;
    gesture.kind = e.type;
    gesture.used = false;
    gesture.interactive = e.type === "keydown" || isInteractive(target, win);
  }

  /** One new window per genuine click on a real control. */
  function allowNewWindow() {
    if (now() - gesture.at > GESTURE_MS || !gesture.interactive || gesture.used) return false;
    gesture.used = true;
    return true;
  }

  function opensNewWindow(el) {
    let t = el.getAttribute && el.getAttribute("target");
    if (t == null) {
      const base = el.ownerDocument && el.ownerDocument.querySelector("base[target]");
      t = base ? base.getAttribute("target") : "";
    }
    t = String(t || "").toLowerCase();
    return t !== "" && t !== "_self" && t !== "_top" && t !== "_parent";
  }

  /* ---------- dialog loops ---------- */

  const dialog = { lastEnd: -Infinity, streak: 0, blocked: false };
  function guardDialog(orig, self, args, fallback) {
    if (dialog.blocked) {
      report("dialog");
      return fallback;
    }
    dialog.streak = now() - dialog.lastEnd < 1500 ? dialog.streak + 1 : 0;
    if (dialog.streak >= 2) {
      dialog.blocked = true;
      report("dialog");
      return fallback;
    }
    try {
      return orig.apply(self, args);
    } finally {
      dialog.lastEnd = now();
    }
  }

  /* ---------- history flooding ---------- */

  const pushes = [];
  function historyFlood() {
    const t = now();
    pushes.push(t);
    while (pushes.length && t - pushes[0] > 2000) pushes.shift();
    // No gesture exemption: scam pages flood history right on the user's first click.
    return pushes.length > 10;
  }

  /* ---------- realm hardening ---------- */

  const hardened = new WeakSet();

  function harden(W) {
    try {
      if (!W || hardened.has(W)) return;
      void W.document; // throws for cross-origin windows
      hardened.add(W);
    } catch {
      return;
    }

    // Make wrapped functions look native to fingerprinting scripts.
    const natives = new WeakMap();
    const FnProto = W.Function.prototype;
    const fnToString = FnProto.toString;
    const toString = {
      toString() {
        return fnToString.call(natives.get(this) || this);
      },
    }.toString;
    natives.set(toString, fnToString);
    Object.defineProperty(FnProto, "toString", { value: toString, writable: true, configurable: true });

    const owner = (obj, key) => {
      let o = obj;
      while (o && !Object.prototype.hasOwnProperty.call(o, key)) o = Object.getPrototypeOf(o);
      return o;
    };
    const wrap = (obj, key, factory) => {
      const o = obj && owner(obj, key);
      if (!o) return;
      const desc = Object.getOwnPropertyDescriptor(o, key);
      if (!desc || typeof desc.value !== "function") return;
      const fn = factory(desc.value);
      natives.set(fn, desc.value);
      Object.defineProperty(o, key, { ...desc, value: fn });
    };
    const wrapAccessor = (obj, key, factory) => {
      const o = obj && owner(obj, key);
      if (!o) return;
      const desc = Object.getOwnPropertyDescriptor(o, key);
      if (!desc || (!desc.get && !desc.set)) return;
      const next = factory(desc);
      if (next.get) natives.set(next.get, desc.get);
      if (next.set) natives.set(next.set, desc.set);
      Object.defineProperty(o, key, { ...desc, ...next });
    };
    const blockedPromise = (msg) =>
      W.Promise.reject(new W.DOMException(msg || "Blocked by Hush", "NotAllowedError"));

    // Gesture listeners for this realm.
    for (const type of ["pointerdown", "click", "keydown"]) {
      W.addEventListener(type, (e) => onGesture(e, W), true);
    }

    /* Popups ------------------------------------------------------------ */
    wrap(W, "open", (orig) =>
      function open() {
        if (allowNewWindow()) return orig.apply(this, arguments);
        report("popup");
        return null;
      }
    );

    const guardNav = (orig) =>
      function () {
        if (opensNewWindow(this) && !allowNewWindow()) {
          report("popup");
          return undefined;
        }
        return orig.apply(this, arguments);
      };
    wrap(W.HTMLAnchorElement && W.HTMLAnchorElement.prototype, "click", guardNav);
    wrap(W.HTMLFormElement && W.HTMLFormElement.prototype, "submit", guardNav);
    wrap(W.HTMLFormElement && W.HTMLFormElement.prototype, "requestSubmit", guardNav);

    wrap(W.EventTarget.prototype, "dispatchEvent", (orig) =>
      function dispatchEvent(ev) {
        if (
          ev && ev.type === "click" && this && this.nodeName === "A" &&
          opensNewWindow(this) && !allowNewWindow()
        ) {
          report("popup");
          return false;
        }
        return orig.apply(this, arguments);
      }
    );

    // Real clicks on invisible full-page links that open a new window.
    W.addEventListener(
      "click",
      (e) => {
        if (!e.isTrusted) return;
        const a = e.target && e.target.closest && e.target.closest("a[href]");
        if (!a || !opensNewWindow(a)) return;
        const r = a.getBoundingClientRect();
        if (r.width * r.height >= W.innerWidth * W.innerHeight * 0.5) {
          e.preventDefault();
          report("popup");
        }
      },
      true
    );

    // Popunder scripts open windows through fresh about:blank iframes to get
    // an unpatched window.open — patch child realms as soon as they appear.
    const hardenFrame = (el, getWin) => {
      try {
        if (el && (el.nodeName === "IFRAME" || el.nodeName === "FRAME")) harden(getWin(el));
        if (el && el.querySelectorAll && el.firstElementChild) {
          for (const f of el.querySelectorAll("iframe,frame")) harden(getWin(f));
        }
      } catch {
        /* ignore */
      }
    };
    const cwDesc = Object.getOwnPropertyDescriptor(W.HTMLIFrameElement.prototype, "contentWindow");
    const getWin = (f) => (cwDesc ? cwDesc.get.call(f) : f.contentWindow);

    for (const proto of [W.HTMLIFrameElement.prototype, W.HTMLFrameElement && W.HTMLFrameElement.prototype]) {
      wrapAccessor(proto, "contentWindow", (d) => ({
        get() {
          const w = d.get.call(this);
          harden(w);
          return w;
        },
      }));
      wrapAccessor(proto, "contentDocument", (d) => ({
        get() {
          const doc = d.get.call(this);
          if (doc) harden(doc.defaultView);
          return doc;
        },
      }));
    }
    const afterInsert = (orig) =>
      function () {
        const result = orig.apply(this, arguments);
        for (const n of arguments) hardenFrame(n, getWin);
        return result;
      };
    for (const key of ["appendChild", "insertBefore", "replaceChild"]) wrap(W.Node.prototype, key, afterInsert);
    for (const key of ["append", "prepend", "after", "before", "replaceWith"]) {
      wrap(W.Element.prototype, key, afterInsert);
    }
    wrap(W.Element.prototype, "insertAdjacentHTML", (orig) =>
      function () {
        const r = orig.apply(this, arguments);
        hardenFrame(this.parentNode || this, getWin);
        return r;
      }
    );
    wrapAccessor(W.Element.prototype, "innerHTML", (d) => ({
      set(v) {
        d.set.call(this, v);
        hardenFrame(this, getWin);
      },
    }));

    /* Notification spam ------------------------------------------------- */
    if (W.Notification) {
      const permDesc = Object.getOwnPropertyDescriptor(W.Notification, "permission");
      const realPermission = () => (permDesc && permDesc.get ? permDesc.get.call(W.Notification) : "default");
      wrapAccessor(W.Notification, "permission", (d) => ({
        get() {
          const p = d.get.call(this);
          return p === "granted" ? p : "denied";
        },
      }));
      wrap(W.Notification, "requestPermission", (orig) =>
        function requestPermission(cb) {
          if (realPermission() === "granted") return orig.apply(this, arguments);
          report("notification");
          if (typeof cb === "function") cb("denied");
          return W.Promise.resolve("denied");
        }
      );
      wrap(W.PushManager && W.PushManager.prototype, "subscribe", (orig) =>
        function subscribe() {
          if (realPermission() === "granted") return orig.apply(this, arguments);
          report("notification");
          return blockedPromise("Push subscription blocked by Hush");
        }
      );
    }
    wrap(W.Permissions && W.Permissions.prototype, "query", (orig) =>
      function query(desc) {
        const p = orig.apply(this, arguments);
        if (!desc || (desc.name !== "notifications" && desc.name !== "push")) return p;
        return p.then((status) => {
          if (status.state === "prompt") Object.defineProperty(status, "state", { value: "denied" });
          return status;
        });
      }
    );

    /* Alert / confirm / print loops -------------------------------------- */
    wrap(W, "alert", (orig) => function alert() { return guardDialog(orig, this, arguments, undefined); });
    wrap(W, "confirm", (orig) => function confirm() { return guardDialog(orig, this, arguments, false); });
    wrap(W, "prompt", (orig) => function prompt() { return guardDialog(orig, this, arguments, null); });
    wrap(W, "print", (orig) => function print() { return guardDialog(orig, this, arguments, undefined); });

    /* Fullscreen / keyboard / pointer lock hijacks ----------------------- */
    const isMedia = (el) =>
      !!el && typeof el.matches === "function" &&
      (el.matches("video,canvas") || !!el.querySelector("video,canvas"));
    wrap(W.Element.prototype, "requestFullscreen", (orig) =>
      function requestFullscreen() {
        if (isMedia(this)) return orig.apply(this, arguments);
        report("fullscreen");
        return blockedPromise("Fullscreen blocked by Hush");
      }
    );
    for (const key of ["webkitRequestFullscreen", "webkitRequestFullScreen", "mozRequestFullScreen"]) {
      wrap(W.Element.prototype, key, (orig) =>
        function () {
          if (isMedia(this)) return orig.apply(this, arguments);
          report("fullscreen");
          return undefined;
        }
      );
    }
    wrap(W.Element.prototype, "requestPointerLock", (orig) =>
      function requestPointerLock() {
        if (this.nodeName === "CANVAS") return orig.apply(this, arguments);
        report("fullscreen");
        return blockedPromise();
      }
    );
    wrap(W.Keyboard && W.Keyboard.prototype, "lock", () =>
      function lock() {
        report("fullscreen");
        return blockedPromise();
      }
    );

    /* Back-button traps -------------------------------------------------- */
    for (const key of ["pushState", "replaceState"]) {
      wrap(W.History.prototype, key, (orig) =>
        function () {
          if (key === "pushState" && historyFlood()) {
            report("history");
            return undefined;
          }
          return orig.apply(this, arguments);
        }
      );
    }
  }

  harden(window);

  /* "Are you sure you want to leave?" traps: only honour them when the user
   * actually typed something on the page (real unsaved work). Registered first,
   * so stopImmediatePropagation silences every handler added by the page. */
  let typed = false;
  window.addEventListener("input", (e) => { if (e.isTrusted) typed = true; }, true);
  window.addEventListener("beforeunload", (e) => { if (!typed) e.stopImmediatePropagation(); }, true);
})();
