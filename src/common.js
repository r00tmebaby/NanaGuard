/* Shared helpers for background, popup, options and the isolated content script. */
"use strict";

// eslint-disable-next-line no-var
var api = globalThis.browser ?? globalThis.chrome;

// eslint-disable-next-line no-var
var HUSH = Object.freeze({
  MAX_ALLOWLIST: 500,

  STAT_LABELS: Object.freeze({
    popup: "Popups & popunders",
    notification: "Notification prompts",
    dialog: "Scam alert loops",
    fullscreen: "Fullscreen hijacks",
    history: "Back-button traps",
    overlay: "Fake warning screens",
    tab: "Ad tabs closed",
  }),

  /** Hidden-element store: { "example.com": ["selector", ...] } in storage.local */
  async getHidden() {
    const { hidden = {} } = await api.storage.local.get("hidden");
    return hidden;
  },

  async getSettings() {
    const s = await api.storage.sync.get({ enabled: true, ads: true, allowlist: [], blocklist: [] });
    const list = (v) => (Array.isArray(v) ? v.filter(Boolean) : []);
    return {
      enabled: s.enabled !== false,
      ads: s.ads !== false,
      allowlist: list(s.allowlist),
      blocklist: list(s.blocklist),
    };
  },

  /** "a.b.example.com" -> ["a.b.example.com", "b.example.com", "example.com"] */
  hostAndParents(host) {
    const clean = String(host || "").replace(/^www\./, "");
    if (!clean) return [];
    const parts = clean.split(".");
    const out = [clean];
    for (let i = 1; i < parts.length - 1; i++) out.push(parts.slice(i).join("."));
    return out;
  },

  /** Adds or removes a domain in the user's "Blocked sites" list. */
  async setSiteBlocked(input, blocked) {
    const domain = HUSH.normalizeDomain(input);
    if (!domain) throw new Error("That doesn't look like a website address.");
    const { blocklist } = await HUSH.getSettings();
    if (blocked && blocklist.length >= HUSH.MAX_ALLOWLIST) throw new Error("Blocked-sites list is full");
    const next = blocked
      ? [...new Set([...blocklist, domain])].sort()
      : blocklist.filter((d) => d !== domain);
    await api.storage.sync.set({ blocklist: next });
    return next;
  },

  /** Turns "https://www.Example.com/path" into "example.com", or null if invalid. */
  normalizeDomain(input) {
    let s = String(input ?? "").trim().toLowerCase();
    if (!s) return null;
    if (!/^[a-z][a-z0-9+.-]*:\/\//.test(s)) s = "http://" + s;
    let host;
    try {
      host = new URL(s).hostname;
    } catch {
      return null;
    }
    host = host.replace(/\.$/, "").replace(/^www\./, "");
    const isIp = /^\d{1,3}(\.\d{1,3}){3}$/.test(host);
    const isName =
      /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9-]{2,63}$/.test(host);
    return isIp || isName || host === "localhost" ? host : null;
  },

  /** Hostname of an http(s) URL, otherwise null (internal pages, files, etc.). */
  hostFromUrl(url) {
    try {
      const u = new URL(url);
      return u.protocol === "http:" || u.protocol === "https:" ? u.hostname : null;
    } catch {
      return null;
    }
  },

  isAllowlisted(host, list) {
    if (!host) return false;
    return list.some((d) => host === d || host.endsWith("." + d));
  },

  async setSiteAllowed(host, allowed) {
    const { allowlist } = await HUSH.getSettings();
    let next;
    if (allowed) {
      const domain = HUSH.normalizeDomain(host);
      if (!domain || allowlist.includes(domain)) return allowlist;
      if (allowlist.length >= HUSH.MAX_ALLOWLIST) throw new Error("Allowed-sites list is full");
      next = [...allowlist, domain].sort();
    } else {
      next = allowlist.filter((d) => !(host === d || host.endsWith("." + d)));
    }
    await api.storage.sync.set({ allowlist: next });
    return next;
  },
});
