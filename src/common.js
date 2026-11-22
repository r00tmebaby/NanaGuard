/* Shared helpers for background, popup, options and isolated content scripts. */
"use strict";

// eslint-disable-next-line no-var
var api = globalThis.browser ?? globalThis.chrome;

// eslint-disable-next-line no-var
var BLK = Object.freeze({
  NAME: "Blockify",
  MAX_LIST: 500,
  CATEGORIES: Object.freeze(["ads", "privacy", "security", "annoyances"]),

  CATEGORY_INFO: Object.freeze({
    ads: { title: "Ads & banners", desc: "EasyList, uBlock filters and Peter Lowe's list." },
    privacy: { title: "Trackers", desc: "EasyPrivacy and uBlock privacy. Also strips tracking tags (utm_…) from links." },
    security: { title: "Malware & phishing", desc: "URLhaus and phishing lists. Dangerous sites show a warning page." },
    annoyances: { title: "Cookie banners & annoyances", desc: "Fanboy cookie list and uBlock annoyances." },
  }),

  GUARD_INFO: Object.freeze({
    phishing: { title: "Fake website warnings", desc: "Warns on look-alike sites (paypa1.com, paypal-login.top, letters swapped for foreign look-alikes) and pages pretending to be your bank, email or a shop." },
    password: { title: "Password alert", desc: "Warns if you type the password of an important site (bank, email, PayPal…) on a different website. Only a scrambled fingerprint is stored, never the password." },
    clickfix: { title: "Fake 'verify you're human' guard", desc: "Blocks pages that secretly copy a virus command and tell you to press Windows + R and paste it." },
    scam: { title: "Scam request warnings", desc: "Warns when a page asks you to install remote-access apps, pay with gift cards or Bitcoin, or call a 'support' number." },
  }),

  async setGuard(key, on) {
    const { guards } = await BLK.getSettings();
    await api.storage.sync.set({ guards: { ...guards, [key]: !!on } });
  },

  STAT_LABELS: Object.freeze({
    phishing: "Fake websites warned",
    password: "Password-reuse alerts",
    clickfix: "Fake 'verify' commands blocked",
    scam: "Scam requests flagged",
    smart: "Ads auto-detected",
    popup: "Popups & popunders",
    notification: "Notification prompts",
    dialog: "Scam alert loops",
    fullscreen: "Fullscreen hijacks",
    history: "Back-button traps",
    overlay: "Fake warning screens",
    tab: "Ad tabs closed",
    video: "YouTube ads removed",
    danger: "Dangerous sites stopped",
  }),

  async getSettings() {
    const s = await api.storage.sync.get({
      enabled: true, ads: true, lists: {}, smart: true, guards: {},
      allowlist: [], blocklist: [], smartOff: [], trusted: [],
    });
    const guards = {};
    for (const g of Object.keys(BLK.GUARD_INFO)) guards[g] = s.guards?.[g] !== false;
    const list = (v) => (Array.isArray(v) ? v.filter(Boolean) : []);
    const lists = {};
    for (const c of BLK.CATEGORIES) lists[c] = s.lists?.[c] ?? (c === "ads" ? s.ads !== false : true);
    return {
      enabled: s.enabled !== false,
      lists,
      smart: s.smart !== false,
      guards,
      allowlist: list(s.allowlist),
      blocklist: list(s.blocklist),
      smartOff: list(s.smartOff),
      trusted: list(s.trusted),
    };
  },

  /** Registrable-ish domain: last two labels (three for co.uk-style); IPs unchanged. */
  baseDomain(host) {
    const h = String(host || "").toLowerCase().replace(/^www\./, "").replace(/\.$/, "");
    if (/^\d{1,3}(\.\d{1,3}){3}$/.test(h)) return h;
    const p = h.split(".");
    if (p.length <= 2) return p.join(".");
    const sld = p[p.length - 2];
    return (p[p.length - 1].length === 2 && /^(co|com|net|org|gov|ac|edu|ne|or|go)$/.test(sld) ? p.slice(-3) : p.slice(-2)).join(".");
  },

  async trustSite(host) {
    const domain = BLK.normalizeDomain(host);
    if (!domain) return;
    const { trusted } = await BLK.getSettings();
    await api.storage.sync.set({ trusted: [...new Set([...trusted, domain])].sort().slice(0, BLK.MAX_LIST) });
  },

  async setList(cat, on) {
    const { lists } = await BLK.getSettings();
    await api.storage.sync.set({ lists: { ...lists, [cat]: !!on } });
  },

  async getLocal(key, fallback) {
    const r = await api.storage.local.get(key);
    return r[key] ?? fallback;
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
    const isName = /^(?=.{1,253}$)(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9-]{2,63}$/.test(host);
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

  matchesList(host, list) {
    if (!host) return false;
    host = host.replace(/^www\./, "");
    return list.some((d) => host === d || host.endsWith("." + d));
  },
  isAllowlisted(host, list) {
    return BLK.matchesList(host, list);
  },

  async setSiteAllowed(host, allowed) {
    const { allowlist } = await BLK.getSettings();
    let next;
    if (allowed) {
      const domain = BLK.normalizeDomain(host);
      if (!domain || allowlist.includes(domain)) return allowlist;
      if (allowlist.length >= BLK.MAX_LIST) throw new Error("Allowed-sites list is full");
      next = [...allowlist, domain].sort();
    } else {
      next = allowlist.filter((d) => !BLK.matchesList(host, [d]));
    }
    await api.storage.sync.set({ allowlist: next });
    return next;
  },

  async setSiteBlocked(input, blocked) {
    const domain = BLK.normalizeDomain(input);
    if (!domain) throw new Error("That doesn't look like a website address.");
    const { blocklist } = await BLK.getSettings();
    if (blocked && blocklist.length >= BLK.MAX_LIST) throw new Error("Blocked-sites list is full");
    const next = blocked ? [...new Set([...blocklist, domain])].sort() : blocklist.filter((d) => d !== domain);
    await api.storage.sync.set({ blocklist: next });
    return next;
  },

  /** Stable CSS selector for an element (used by the picker and smart learning).
   *  Returns null when only a fragile position-based path is possible. */
  selectorFor(el, { allowPositional = true } = {}) {
    const doc = el.ownerDocument;
    const RANDOM = /\d{4,}|[a-z]+[A-Z][a-z]+\d|^[a-f0-9-]{10,}$|^(css|sc|jsx|svelte|emotion)-|__[a-zA-Z0-9]{5,}$/;
    const unique = (sel) => {
      try {
        const m = doc.querySelectorAll(sel);
        return m.length === 1 && m[0] === el;
      } catch {
        return false;
      }
    };
    const segment = (n) => {
      const classes = [...n.classList]
        .filter((c) => c.length < 40 && !RANDOM.test(c) && !/^(is-|has-|js-)|hover|active|focus|visible|loaded/.test(c))
        .slice(0, 3);
      return n.localName + classes.map((c) => "." + CSS.escape(c)).join("");
    };
    const parts = [];
    let anchored = false;
    for (let n = el; n && n !== doc.documentElement; n = n.parentElement) {
      if (n.id && !RANDOM.test(n.id) && doc.querySelectorAll("#" + CSS.escape(n.id)).length === 1) {
        parts.unshift("#" + CSS.escape(n.id));
        return parts.join(" > ");
      }
      const seg = segment(n);
      if (seg.includes(".")) anchored = true;
      parts.unshift(seg);
      if (unique(parts.join(" > "))) return parts.join(" > ");
      const parent = n.parentElement;
      if (parent) {
        const same = [...parent.children].filter((c) => c.localName === n.localName);
        if (same.length > 1) {
          parts[0] = `${seg}:nth-of-type(${same.indexOf(n) + 1})`;
          if (unique(parts.join(" > "))) return anchored || allowPositional ? parts.join(" > ") : null;
        }
      }
      if (n === doc.body) break;
    }
    return anchored || allowPositional ? parts.join(" > ") : null;
  },
});
