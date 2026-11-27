/* Shared helpers for background, popup, options and isolated content scripts. */
"use strict";

// eslint-disable-next-line no-var
var api = globalThis.browser ?? globalThis.chrome;

// eslint-disable-next-line no-var
var BLK = Object.freeze({
  NAME: "NanaGuard",
  MAX_LIST: 300,
  CATEGORIES: Object.freeze(["ads", "privacy", "security", "annoyances"]),

  CATEGORY_INFO: Object.freeze({
    ads: { title: "Ads & banners", desc: "EasyList, uBlock filters and Peter Lowe's list." },
    privacy: { title: "Trackers", desc: "EasyPrivacy and uBlock privacy. Also strips tracking tags (utm_…) from links." },
    security: { title: "Malware & phishing", desc: "URLhaus and phishing lists. Dangerous sites show a warning page." },
    annoyances: { title: "Cookie banners & annoyances", desc: "Fanboy cookie & annoyance lists and uBlock annoyances. Also auto-closes 'Subscribe / special offer / No thanks' popups." },
  }),

  GUARD_INFO: Object.freeze({
    phishing: { title: "Fake website warnings", desc: "Warns on look-alike sites (paypa1.com, paypal-login.top, letters swapped for foreign look-alikes) and pages pretending to be your bank, email or a shop." },
    password: { title: "Password alert", desc: "Warns if you type the password of an important site (bank, email, PayPal…) on a different website. Only a scrambled fingerprint is stored, never the password." },
    clickfix: { title: "Fake 'verify you're human' guard", desc: "Blocks pages that secretly copy a virus command and tell you to press Windows + R and paste it." },
    scam: { title: "Scam request warnings", desc: "Warns when a page asks you to install remote-access apps, pay with gift cards or Bitcoin, or call a 'support' number." },
    ai: { title: "Real or AI? checks", desc: "Flags AI-made and deepfake videos and images using platform labels, AI tool names, viewer comments, AI watermarks in the picture (read on your computer) and image Content Credentials. Warns about deepfake scam videos." },
    factcheck: { title: "'Check facts' buttons", desc: "Right-click any text → Check facts, plus a button under YouTube videos. Opens Google, fact-checkers or ChatGPT in a new tab." },
  }),

  // Order = button order everywhere (popup, YouTube, right-click menu).
  FACT_ENGINES: Object.freeze({
    google: "Search Google",
    chatgpt: "Ask ChatGPT",
    news: "Other news sources",
    factcheck: "Search fact-checkers",
  }),

  FACT_SHORT: Object.freeze({ google: "Google", chatgpt: "ChatGPT", news: "News", factcheck: "Fact-check" }),

  /* ---------------- languages ---------------- */

  // Interface languages: English is built into the code, the others live in src/i18n/<code>.json.
  UI_LANGS: Object.freeze(["en", "bg", "de", "el", "es", "fr", "it", "nl", "pl", "pt", "ro", "ru", "tr", "uk"]),
  // Fact-check answer/search languages: the ones Chrome's built-in translator supports.
  FACT_LANGS: Object.freeze(["ar", "bg", "bn", "cs", "da", "de", "el", "en", "es", "fi", "fr", "he", "hi", "hr", "hu", "id", "it",
    "ja", "kn", "ko", "lt", "mr", "nl", "no", "pl", "pt", "ro", "ru", "sk", "sl", "sv", "ta", "te", "th", "tr", "uk", "vi", "zh", "zh-Hant"]),
  // Text tables above that are translated entry by entry (key "tbl.<TABLE>.<entry>[.<field>]").
  TEXT_TABLES: Object.freeze(["CATEGORY_INFO", "GUARD_INFO", "FACT_ENGINES", "FACT_SHORT", "STAT_LABELS"]),

  // Active translation. BLK is frozen only one level deep, so this object stays writable.
  I18N: { lang: "en", table: {} },

  /** Translated text for `key`, or the English given at the call site. "{name}" is replaced from vars.
   *  Call it when the text is shown, never at script load: translations arrive asynchronously. */
  t(key, en, vars) {
    const own = BLK.I18N.table[key];
    const s = typeof own === "string" && own ? own : String(en ?? key);
    return vars ? s.replace(/\{(\w+)\}/g, (m, k) => (vars[k] != null ? String(vars[k]) : m)) : s;
  },

  /** Translated entry of a text table, e.g. tt("GUARD_INFO", "phishing", "title"). */
  tt(table, key, field) {
    const entry = BLK.TEXT_TABLES.includes(table) ? BLK[table][key] : undefined;
    const en = field ? entry && entry[field] : entry;
    return BLK.t(`tbl.${table}.${key}${field ? "." + field : ""}`, typeof en === "string" ? en : String(key));
  },

  /** Loads the active translation (written to storage.local by the background). Returns its language. */
  async loadI18n() {
    try {
      const { i18n } = await api.storage.local.get("i18n");
      if (i18n && typeof i18n.m === "object" && i18n.m && BLK.UI_LANGS.includes(i18n.lang)) {
        BLK.I18N.lang = i18n.lang;
        BLK.I18N.table = i18n.m;
      }
    } catch { /* keep English */ }
    return BLK.I18N.lang;
  },

  /** Translates static page text: data-i18n (text, **bold** allowed) and data-i18n-title / -aria-label /
   *  -placeholder / -alt (attributes). English stays in the HTML and is kept when there is no translation. */
  localize(root = document) {
    const table = BLK.I18N.table;
    const doc = root.ownerDocument || root;
    if (doc.documentElement) doc.documentElement.lang = BLK.I18N.lang;
    for (const el of root.querySelectorAll("[data-i18n]")) {
      const s = table[el.dataset.i18n];
      if (typeof s !== "string" || !s) continue;
      el.replaceChildren(...s.split(/\*\*(.+?)\*\*/).map((part, i) => {
        if (i % 2 === 0) return doc.createTextNode(part);
        const b = doc.createElement("b");
        b.textContent = part;
        return b;
      }));
    }
    for (const attr of ["title", "aria-label", "placeholder", "alt"]) {
      for (const el of root.querySelectorAll(`[data-i18n-${attr}]`)) {
        const s = table[el.getAttribute(`data-i18n-${attr}`)];
        if (typeof s === "string" && s) el.setAttribute(attr, s);
      }
    }
  },

  /** Normalises a browser/BCP 47 code to ours: "en-GB" → "en", "zh-TW" → "zh-Hant", "nb" → "no", "iw" → "he". */
  normLang(code) {
    const c = String(code || "").replace(/_/g, "-").toLowerCase();
    if (/^zh-(tw|hk|mo|hant)/.test(c)) return "zh-Hant";
    const base = c.split("-")[0];
    return { nb: "no", nn: "no", iw: "he" }[base] || base;
  },

  browserLang() {
    try {
      return BLK.normLang(api.i18n.getUILanguage()) || "en";
    } catch {
      return "en";
    }
  },

  browserRegion() {
    try {
      const m = /^[a-z]{2,3}[-_]([a-z]{2})\b/i.exec(api.i18n.getUILanguage());
      return m ? m[1].toUpperCase() : "";
    } catch {
      return "";
    }
  },

  /** Interface language for a setting ("" = automatic: the browser's language if we have it). */
  uiLangFor(setting) {
    if (BLK.UI_LANGS.includes(setting)) return setting;
    const browser = BLK.browserLang();
    return BLK.UI_LANGS.includes(browser) ? browser : "en";
  },

  /** Fact-check languages: answer (ChatGPT reply, Google interface) and search ("" = the text's own). */
  factLangs(settings = {}) {
    const ok = (c) => BLK.FACT_LANGS.includes(c);
    const browser = BLK.browserLang();
    const answer = ok(settings.factLang) ? settings.factLang : ok(settings.uiLang) ? settings.uiLang : ok(browser) ? browser : "en";
    return { answer, search: ok(settings.factSearchLang) ? settings.factSearchLang : "" };
  },

  /** Language name, e.g. langName("bg", "en") → "Bulgarian", langName("bg", "bg") → "Български".
   *  inSentence keeps the language's own casing ("английски"), for use inside a sentence. */
  langName(code, inLang, inSentence = false) {
    const where = inLang || BLK.I18N.lang || "en";
    try {
      const n = new Intl.DisplayNames([where], { type: "language" }).of(code);
      if (!n || inSentence) return n || code;
      return n.charAt(0).toLocaleUpperCase(where) + n.slice(1);
    } catch {
      return code;
    }
  },

  /** Rough language of a text from its alphabet and special letters (when no language detector is
   *  available). Only steers which Google News edition and fact-check filter a search uses. */
  guessLang(text, fallback = "en") {
    const s = String(text || "");
    const pick = (list, other) => (list.includes(fallback) ? fallback : other);
    const SCRIPTS = [[/[぀-ヿ]/, "ja"], [/[가-힯]/, "ko"], [/[一-鿿]/, "zh"], [/[฀-๿]/, "th"],
      [/[֐-׿]/, "he"], [/[؀-ۿ]/, "ar"], [/[ঀ-৿]/, "bn"], [/[஀-௿]/, "ta"],
      [/[ఀ-౿]/, "te"], [/[ಀ-೿]/, "kn"], [/[Ͱ-Ͽ]/, "el"]];
    for (const [re, code] of SCRIPTS) if (re.test(s)) return code;
    if (/[ऀ-ॿ]/.test(s)) return pick(["mr"], "hi");
    if (/[Ѐ-ӿ]/.test(s)) {
      if (/[іїєґ]/i.test(s)) return "uk";
      if (/[ыэё]/i.test(s)) return "ru";
      if (/ъ/i.test(s)) return "bg";
      return pick(["bg", "ru", "uk"], "ru");
    }
    const LATIN = [[/[ơưđạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]/i, "vi"], [/[ğı]/, "tr"], [/[ąęłśźż]/i, "pl"],
      [/[ășțşţ]/i, "ro"], [/[ěřů]/i, "cs"], [/[ľĺŕ]/i, "sk"], [/[őű]/i, "hu"], [/[ėįųū]/i, "lt"], [/[ćđ]/i, "hr"],
      [/[ñ¿¡]/i, "es"], [/[ãõ]/i, "pt"], [/[åæø]/i, () => pick(["da", "no", "sv"], "sv")], [/[ßü]/i, "de"],
      [/[äö]/i, () => pick(["de", "fi", "sv"], "de")], [/[çèêëàùûœ]/i, "fr"], [/[ìò]/i, "it"],
      [/[čšž]/i, () => pick(["cs", "sk", "sl", "hr", "lt"], "cs")], [/[áéíóú]/i, () => pick(["es", "pt", "it", "fr", "hu", "cs", "sk"], "es")]];
    for (const [re, code] of LATIN) if (re.test(s)) return typeof code === "function" ? code() : code;
    return pick(["id", "nl"], "en"); // plain ASCII
  },

  // Google News editions: language → [hl, gl, ceid language]. Others get just hl= and Google picks.
  NEWS_EDITIONS: Object.freeze({
    ar: ["ar", "EG", "ar"], bg: ["bg", "BG", "bg"], bn: ["bn", "BD", "bn"], cs: ["cs", "CZ", "cs"], de: ["de", "DE", "de"],
    el: ["el", "GR", "el"], es: ["es", "ES", "es"], fr: ["fr", "FR", "fr"], he: ["he", "IL", "he"], hi: ["hi", "IN", "hi"],
    hu: ["hu", "HU", "hu"], id: ["id", "ID", "id"], it: ["it", "IT", "it"], ja: ["ja", "JP", "ja"], ko: ["ko", "KR", "ko"],
    lt: ["lt", "LT", "lt"], mr: ["mr", "IN", "mr"], nl: ["nl", "NL", "nl"], no: ["no", "NO", "no"], pl: ["pl", "PL", "pl"],
    pt: ["pt-BR", "BR", "pt-419"], ro: ["ro", "RO", "ro"], ru: ["ru", "RU", "ru"], sk: ["sk", "SK", "sk"], sl: ["sl", "SI", "sl"],
    sv: ["sv", "SE", "sv"], ta: ["ta", "IN", "ta"], te: ["te", "IN", "te"], th: ["th", "TH", "th"], tr: ["tr", "TR", "tr"],
    uk: ["uk", "UA", "uk"], vi: ["vi", "VN", "vi"], zh: ["zh-CN", "CN", "zh-Hans"], "zh-Hant": ["zh-TW", "TW", "zh-Hant"],
  }),

  newsParams(lang) {
    const region = BLK.browserRegion();
    let ed = BLK.NEWS_EDITIONS[lang];
    if (lang === "en") {
      const gl = ["US", "GB", "AU", "CA", "IN", "IE", "NZ", "ZA"].includes(region) ? region : "US";
      ed = [`en-${gl}`, gl, "en"];
    } else if (lang === "pt" && region === "PT") ed = ["pt-PT", "PT", "pt-150"];
    return ed ? `hl=${ed[0]}&gl=${ed[1]}&ceid=${ed[1]}:${ed[2]}` : `hl=${encodeURIComponent(lang)}`;
  },

  // Words added to a Google search so fact-check articles rank first.
  FACT_PHRASES: Object.freeze({
    en: "fact check", bg: "проверка на факти", cs: "ověřování faktů", de: "Faktencheck", el: "έλεγχος γεγονότων",
    es: "verificación de datos", fr: "vérification des faits", it: "verifica dei fatti", nl: "factcheck", pl: "sprawdzanie faktów",
    pt: "checagem de fatos", ro: "verificarea faptelor", ru: "проверка фактов", tr: "doğruluk kontrolü", uk: "перевірка фактів",
  }),

  /** Google's code for a language (hl=). */
  googleLang(code) {
    return code === "zh" ? "zh-CN" : code === "zh-Hant" ? "zh-TW" : code;
  },

  // Simple outline icons (24×24, stroke = currentColor), built with DOM APIs (no innerHTML).
  ICONS: Object.freeze({
    news: [["path", "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"], ["path", "M18 14h-8"], ["path", "M15 18h-5"], ["path", "M10 6h8v4h-8z"]],
    factcheck: [["path", "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"], ["path", "m9 12 2 2 4-4"]],
    chatgpt: [["path", "M7.9 20A9 9 0 1 0 4 16.1L2 22Z"], ["path", "M8 12h.01"], ["path", "M12 12h.01"], ["path", "M16 12h.01"]],
    google: [["circle", { cx: 11, cy: 11, r: 8 }], ["path", "m21 21-4.3-4.3"]],
  }),

  icon(name, size = 16, doc = document) {
    const NS = "http://www.w3.org/2000/svg";
    const svg = doc.createElementNS(NS, "svg");
    const attrs = { viewBox: "0 0 24 24", width: size, height: size, fill: "none", stroke: "currentColor",
      "stroke-width": 2, "stroke-linecap": "round", "stroke-linejoin": "round", "aria-hidden": "true" };
    for (const [k, v] of Object.entries(attrs)) svg.setAttribute(k, v);
    for (const [tag, d] of BLK.ICONS[name] || []) {
      const el = doc.createElementNS(NS, tag);
      if (typeof d === "string") el.setAttribute("d", d);
      else for (const [k, v] of Object.entries(d)) el.setAttribute(k, v);
      svg.append(el);
    }
    return svg;
  },

  /** Short keyword query from a headline/claim: drops filler words, keeps names and numbers.
   *  "Deutsche Bank Leak Reveals $582 Million In Epstein Payments, …" → "Deutsche Bank $582 Epstein Payments" */
  keywords(text, max = 5, numbers = true) {
    const FILLER = new Set(("a an the and or but nor of in on at to for from by with as is are was were be been being this that these " +
      "those it its into onto over under after before about than then so such not no you your we our they their he she his her i " +
      "me my us how why what when who whom which will would could should may might can just more most very new says said say " +
      "reveals revealed reveal report reports reported leak leaks leaked claims claim breaking exclusive update live video watch " +
      "photos million billion thousand trillion accidental shocking amid finally now here there get gets got true " +
      "false fake real really confirms confirmed confirm does did do has have had").split(" "));
    const firstClause = String(text || "").split(/[,:;|–—]|\s-\s/)[0];
    const words = firstClause.replace(/[“”"'’‘()[\]?!]/g, "").split(/[^\p{L}\p{N}$%.£€]+/u)
      .map((w) => w.replace(/^\.+|\.+$/g, ""))
      .filter((w) => w.length > 1 && !FILLER.has(w.toLowerCase()) && (numbers || !/\d/.test(w)));
    return (words.length ? words : String(text || "").split(/\s+/)).slice(0, max).join(" ");
  },

  /** Builds the new-tab URL for a fact check. Nothing is sent until the user clicks.
   *  langs: { answer, search, textLang } from factLangs(); textLang = language the text is in (guessed if absent). */
  factCheckUrl(engine, text, pageUrl, langs = {}) {
    const t = String(text || "").replace(/\s+/g, " ").trim().slice(0, 300);
    const answer = BLK.FACT_LANGS.includes(langs.answer) ? langs.answer : "en";
    const search = BLK.FACT_LANGS.includes(langs.search) ? langs.search : "";
    const textLang = langs.textLang || BLK.guessLang(t, answer);
    // News edition and fact-checker language filter follow the language the search text is in.
    if (engine === "news") return `https://news.google.com/search?q=${encodeURIComponent(BLK.keywords(t, 6))}&${BLK.newsParams(textLang)}`;
    // Fact-checker search matches reviewed claims by keyword: short, no figures. Its hl= is the claim-language filter.
    if (engine === "factcheck") {
      return `https://toolbox.google.com/factcheck/explorer/search/${encodeURIComponent(BLK.keywords(t, 5, false))};hl=${BLK.googleLang(textLang)}`;
    }
    if (engine === "chatgpt") {
      const where = pageUrl ? ` (I saw it here: ${pageUrl})` : "";
      const sources = search ? ` Also look for sources in ${BLK.langName(search, "en")}.` : "";
      const reply = ` Answer in ${BLK.langName(answer, "en")}.`;
      return `https://chatgpt.com/?q=${encodeURIComponent(`Is this true, misleading or a scam? Check reliable sources and fact-checkers, then explain simply for a non-technical reader: "${t}"${where}${sources}${reply}`)}`;
    }
    const phrase = BLK.FACT_PHRASES[textLang] || BLK.FACT_PHRASES.en;
    return `https://www.google.com/search?q=${encodeURIComponent(`${t} ${phrase}`)}&hl=${BLK.googleLang(answer)}`;
  },

  async setGuard(key, on) {
    const { guards } = await BLK.getSettings();
    await api.storage.sync.set({ guards: { ...guards, [key]: !!on } });
  },

  STAT_LABELS: Object.freeze({
    phishing: "Fake websites warned",
    password: "Password-reuse alerts",
    clickfix: "Fake 'verify' commands blocked",
    scam: "Scam requests flagged",
    nag: "Subscription popups closed",
    deepfake: "Deepfake scam videos flagged",
    ailabel: "AI-labelled videos shown",
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
      allowlist: [], blocklist: [], smartOff: [], trusted: [], uiLang: "", factLang: "", factSearchLang: "",
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
      uiLang: BLK.UI_LANGS.includes(s.uiLang) ? s.uiLang : "",
      factLang: BLK.FACT_LANGS.includes(s.factLang) ? s.factLang : "",
      factSearchLang: BLK.FACT_LANGS.includes(s.factSearchLang) ? s.factSearchLang : "",
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
