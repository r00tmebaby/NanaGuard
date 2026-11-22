/* YouTube ad removal. Runs in the page's MAIN world on youtube.com at document_start.
 * 1. Strips ad slots from player data before the player reads it
 *    (initial page data, JSON.parse, fetch().json()).
 * 2. Fallback: if an ad still plays, mute it, jump to its end and press "Skip".
 * Registered by background.js only when protection + ad blocking are on. */
(() => {
  "use strict";

  const AD_KEYS = ["adPlacements", "adSlots", "playerAds", "adBreakHeartbeatParams"];
  const nativeDispatch = EventTarget.prototype.dispatchEvent;
  const report = () => {
    try {
      nativeDispatch.call(document, new CustomEvent("kinguard:blocked", { detail: "video" }));
    } catch {
      /* ignore */
    }
  };

  /** Removes ad fields from a player response (or an object wrapping one). Returns it. */
  function strip(obj) {
    if (!obj || typeof obj !== "object") return obj;
    let removed = false;
    for (const target of [obj, obj.playerResponse, obj.response && obj.response.playerResponse]) {
      if (!target || typeof target !== "object") continue;
      for (const k of AD_KEYS) {
        if (k in target) {
          if (Array.isArray(target[k]) && target[k].length) removed = true;
          try {
            delete target[k];
          } catch {
            /* frozen */
          }
        }
      }
    }
    if (removed) report();
    return obj;
  }
  const looksLikePlayer = (o) =>
    o && typeof o === "object" && (AD_KEYS.some((k) => k in o) || "playerResponse" in o || "playabilityStatus" in o);

  // Initial page data: YouTube assigns window.ytInitialPlayerResponse = {...}
  for (const name of ["ytInitialPlayerResponse", "playerResponse"]) {
    let value;
    try {
      Object.defineProperty(window, name, {
        configurable: true,
        get: () => value,
        set: (v) => {
          value = strip(v);
        },
      });
    } catch {
      /* already defined */
    }
  }

  // Data parsed later (SPA navigation, embeds).
  const natives = new WeakMap();
  const wrap = (obj, key, factory) => {
    const orig = obj[key];
    const fn = factory(orig);
    natives.set(fn, orig);
    Object.defineProperty(obj, key, { value: fn, writable: true, configurable: true });
  };
  const fnToString = Function.prototype.toString;
  wrap(Function.prototype, "toString", () =>
    function toString() {
      return fnToString.call(natives.get(this) || this);
    }
  );
  natives.set(Function.prototype.toString, fnToString);

  /* AI disclosure: when YouTube loads a video's page data (first load or clicking to the next
   * video), look for its "Altered or synthetic content" label and tell the isolated script. */
  const AI_LABEL = /Altered or synthetic content|Sound or visuals were significantly edited or digitally generated/i;
  function inspectWatchData(o) {
    try {
      if (!o || typeof o !== "object") return;
      const r = o.response && o.response.contents ? o.response : o;
      if (!r.contents || !(r.contents.twoColumnWatchNextResults || r.contents.singleColumnWatchNextResults)) return;
      const id = (r.currentVideoEndpoint && r.currentVideoEndpoint.watchEndpoint && r.currentVideoEndpoint.watchEndpoint.videoId) || "";
      if (AI_LABEL.test(JSON.stringify(r.contents))) {
        nativeDispatch.call(document, new CustomEvent("kinguard:ailabel", { detail: String(id) }));
      }
    } catch {
      /* never break YouTube */
    }
  }
  let initialData;
  try {
    Object.defineProperty(window, "ytInitialData", {
      configurable: true,
      get: () => initialData,
      set: (v) => { initialData = v; setTimeout(() => inspectWatchData(v), 0); },
    });
  } catch {
    /* already defined */
  }

  wrap(JSON, "parse", (orig) =>
    function parse() {
      const result = orig.apply(this, arguments);
      if (result && typeof result === "object" && result.contents) setTimeout(() => inspectWatchData(result), 0);
      return looksLikePlayer(result) ? strip(result) : result;
    }
  );
  wrap(Response.prototype, "json", (orig) =>
    function json() {
      return orig.apply(this, arguments).then((r) => {
        if (r && typeof r === "object" && (r.contents || (r.response && r.response.contents))) setTimeout(() => inspectWatchData(r), 0);
        return looksLikePlayer(r) ? strip(r) : r;
      });
    }
  );

  /* ---------- fallback: skip anything that still gets through ---------- */
  const SKIP = ".ytp-skip-ad-button, .ytp-ad-skip-button, .ytp-ad-skip-button-modern, .ytp-ad-overlay-close-button";
  let inAd = false;

  function tick() {
    const player = document.querySelector("#movie_player, .html5-video-player");
    const adShowing = !!player && (player.classList.contains("ad-showing") || player.classList.contains("ad-interrupting"));
    if (adShowing) {
      if (!inAd) report();
      inAd = true;
      const video = player.querySelector("video");
      if (video) {
        video.muted = true;
        if (Number.isFinite(video.duration) && video.duration > 0 && video.currentTime < video.duration - 0.1) {
          video.currentTime = video.duration;
        }
      }
      const skip = document.querySelector(SKIP);
      if (skip) skip.click();
    } else if (inAd) {
      inAd = false;
      const video = player && player.querySelector("video");
      if (video) video.muted = false;
    }

    // "Ad blockers are not allowed" wall: remove it and resume playback.
    const wall = document.querySelector("ytd-enforcement-message-view-model");
    if (wall) {
      const dialog = wall.closest("tp-yt-paper-dialog") || wall;
      dialog.remove();
      document.querySelectorAll("tp-yt-iron-overlay-backdrop").forEach((b) => b.remove());
      const video = document.querySelector("#movie_player video");
      if (video && video.paused) video.play().catch(() => {});
    }
  }
  setInterval(tick, 250);
})();
