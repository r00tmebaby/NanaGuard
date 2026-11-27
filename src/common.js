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

  /** Fact-check languages: answer (ChatGPT and Google answer in it) and search, for News/fact-checkers:
   *  "" = same as the answer, "text" = the text's own language (no translation), or a language code. */
  factLangs(settings = {}) {
    const ok = (c) => BLK.FACT_LANGS.includes(c);
    const browser = BLK.browserLang();
    const answer = ok(settings.factLang) ? settings.factLang : ok(settings.uiLang) ? settings.uiLang : ok(browser) ? browser : "en";
    return { answer, search: BLK.validSearchLang(settings.factSearchLang) };
  },

  /** A stored "Search sources in" value, or "" if invalid. */
  validSearchLang(v) {
    return v === "text" || BLK.FACT_LANGS.includes(v) ? v : "";
  },

  /** Language a fact-check search must be in ("" = leave the text as it is): the answer language (Google
   *  writes its AI answer in the language of the question), except News and fact-checkers when another
   *  search language, or the text's own ("text"), is chosen. ChatGPT is told the languages in words. */
  factTarget(engine, langs) {
    if (engine === "chatgpt") return "";
    if (engine === "google") return langs.answer;
    return langs.search === "text" ? "" : langs.search || langs.answer;
  },

  /** True when the text probably isn't in factTarget's language, so the check page should translate it. */
  needsTranslation(engine, text, langs) {
    const target = BLK.factTarget(engine, langs);
    return !!target && BLK.guessLang(text, langs.answer) !== target;
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

  // Scratch space (BLK is frozen one level deep): cached word sets for guessLang.
  CACHE: {},

  // Languages guessLang scores by their small words and letters (Latin script).
  LATIN_LANGS: Object.freeze(["en", "de", "nl", "fr", "es", "it", "pt", "ro", "pl", "cs", "sk", "tr", "hu", "sv", "da", "no", "fi",
    "hr", "sl", "lt", "id", "vi"]),

  /** Language of a text, guessed from its alphabet, special letters, word endings and small words
   *  ("" when it can't tell). Used before Chrome's own detector runs, or when there is none.
   *  fallback (the answer language) wins ties. scoresOut (tests) receives each language's score. */
  guessLang(text, fallback = "en", scoresOut = null) {
    // Hashtags, @names and links are often in another language than the text: leave them out.
    const s = String(text || "").replace(/https?:\/\/\S+|[#@][\p{L}\p{N}_]+/gu, " ");
    const pick = (list, other) => (list.includes(fallback) ? fallback : other);
    const SCRIPTS = [[/[぀-ヿ]/, "ja"], [/[가-힯]/, "ko"], [/[一-鿿]/, "zh"], [/[฀-๿]/, "th"],
      [/[֐-׿]/, "he"], [/[؀-ۿ]/, "ar"], [/[ঀ-৿]/, "bn"], [/[஀-௿]/, "ta"],
      [/[ఀ-౿]/, "te"], [/[ಀ-೿]/, "kn"], [/[Ͱ-Ͽ]/, "el"]];
    for (const [re, code] of SCRIPTS) if (re.test(s)) return code;
    const words = s.toLowerCase().split(/[^\p{L}\p{M}]+/u).filter(Boolean);
    const scores = {};
    const add = (code, n) => { scores[code] = (scores[code] || 0) + n; };
    // Small words count by how distinctive they are: one only Spanish uses weighs 3, one five languages share 0.6.
    const countWords = (codes) => {
      const sets = codes.map((code) => (BLK.CACHE["w:" + code] ||= new Set((BLK.FILLER_WORDS[code] || "").split(" ").filter(Boolean))));
      for (const w of words) {
        const hits = codes.filter((code, i) => sets[i].has(w));
        for (const code of hits) add(code, 3 / hits.length);
      }
    };
    const best = () => {
      if (scoresOut) Object.assign(scoresOut, scores);
      let top = 0;
      let winners = [];
      for (const [code, n] of Object.entries(scores)) {
        if (n > top) { top = n; winners = [code]; } else if (n === top && n > 0) winners.push(code);
      }
      return !top ? "" : winners.includes(fallback) ? fallback : winners[0];
    };
    if (/[ऀ-ॿ]/.test(s)) {
      countWords(["hi", "mr"]);
      return best() || pick(["mr"], "hi");
    }
    if (/[Ѐ-ӿ]/.test(s)) {
      const n = (re) => (s.match(re) || []).length;
      add("uk", 4 * n(/[іїєґ]/gi));
      add("ru", 4 * n(/[ыэё]/gi));
      for (const w of words) {
        if (w.length > 3 && /(ът|ят|ата|ото|ите|ето|ият|ията|ват)$/.test(w)) add("bg", 2);
        if (w.length > 5 && /(та|то|те)$/.test(w)) add("bg", 1);
        if (w.length > 3 && /(ння|ться|ють|ий|ої|ів|ив|ала|ути)$/.test(w)) add("uk", 1);
        if (w.length > 3 && /(ый|ой|ая|ое|ые|ого|его|ему|ют|ут|ние|ется|ются|ает|яет|ил)$/.test(w)) add("ru", 1);
      }
      countWords(["bg", "ru", "uk"]);
      return best() || pick(["bg", "ru", "uk"], ""); // no evidence: unsure rather than "Russian"
    }
    // Latin script: letters that point to a language (weights), then each language's small words.
    const HINTS = [
      [/[ơưđạảấầẩẫậắằẳẵặẹẻẽếềểễệỉịọỏốồổỗộớờởỡợụủứừửữựỳỵỷỹ]/gi, { vi: 10 }], [/[ğı]/g, { tr: 5 }], [/ş/gi, { tr: 3, ro: 2 }],
      [/[ășțţ]/gi, { ro: 5 }], [/[łśźż]/gi, { pl: 5 }], [/cz|prz|ów(?![\p{L}])/giu, { pl: 1.5 }], [/[ąę]/gi, { pl: 3, lt: 2 }], [/ń/gi, { pl: 3 }], [/ć/gi, { pl: 2, hr: 2 }],
      [/đ/gi, { hr: 5 }], [/[ěřů]/gi, { cs: 5 }], [/[ľĺŕ]/gi, { sk: 5 }], [/ô/gi, { sk: 2, fr: 2, pt: 2 }], [/[őű]/gi, { hu: 5 }],
      [/[ėįųū]/gi, { lt: 5 }], [/[čšž]/gi, { cs: 1, sk: 1, sl: 1, hr: 1, lt: 1 }], [/[ňý]/gi, { cs: 1, sk: 1 }], [/[ñ¿¡]/gi, { es: 5 }],
      [/[ãõ]/gi, { pt: 5 }], [/ç/gi, { fr: 2, pt: 2, tr: 2 }], [/[èêëùûœ]/gi, { fr: 3 }], [/à/gi, { fr: 1, it: 1, pt: 1 }],
      [/[ìò]/gi, { it: 3 }], [/[îâ]/gi, { ro: 1, fr: 1, pt: 1 }], [/ß/gi, { de: 5 }], [/ü/gi, { de: 2, tr: 1, hu: 1 }],
      [/ä/gi, { de: 1, sv: 1, fi: 1, sk: 1 }], [/ö/gi, { de: 1, sv: 1, fi: 1, tr: 1, hu: 1 }], [/[æø]/gi, { da: 3, no: 3 }],
      // Spellings that tell even a three-word claim apart: "vaccinazioni", "verificación", "informação".
      [/zion[ei](?![\p{L}])/giu, { it: 3 }], [/ci[óo]n(es)?(?![\p{L}])/giu, { es: 2 }], [/ção|ções/giu, { pt: 3 }],
      [/å/gi, { sv: 2, da: 1, no: 1 }], [/é/gi, { fr: 1, pt: 0.5, hu: 0.5, es: 0.3, it: 0.3, cs: 0.3, sk: 0.3 }],
      [/[áíóú]/gi, { es: 0.5, pt: 0.5, hu: 0.5, cs: 0.3, sk: 0.3, it: 0.2 }],
    ];
    for (const [re, weights] of HINTS) {
      const n = (s.match(re) || []).length;
      if (n) for (const [code, w] of Object.entries(weights)) add(code, n * w);
    }
    countWords(BLK.LATIN_LANGS);
    return best();
  },

  /** Language of a text, also asking the browser's own detector (chrome.i18n.detectLanguage, Chrome's CLD;
   *  Firefox has it too) when guessLang is unsure. Our guess goes first: it was more accurate on our tests,
   *  CLD fills the gaps (very short claims). Returns "" when neither knows. */
  async detectLang(text, fallback = "en") {
    const guess = BLK.guessLang(text, fallback);
    if (guess) return guess;
    try {
      const t = String(text || "").slice(0, 1000);
      const r = await new Promise((resolve) => {
        const p = api.i18n.detectLanguage(t, resolve);
        if (p && typeof p.then === "function") p.then(resolve, () => resolve(null));
      });
      const top = r && r.languages && r.languages[0];
      const code = top ? BLK.normLang(top.language) : "";
      if (BLK.FACT_LANGS.includes(code)) return code;
    } catch { /* no detector */ }
    return "";
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

  // English headline words that say nothing about the story: dropped from searches, but not used to
  // detect English (a Spanish "Real Madrid" headline isn't English).
  NEWS_WORDS: "says said say reveals revealed reveal report reports reported leak leaks leaked claims claim breaking exclusive update " +
    "live video watch photos million billion thousand trillion accidental shocking amid finally get gets got true false fake real " +
    "really confirms confirmed confirm",

  // Small words that carry no meaning in a search, per language (English is always applied too).
  FILLER_WORDS: Object.freeze({
    en: "a an the and or but nor of in on at to for from by with as is are was were be been being this that these those it its into " +
      "onto over under after before about than then so such not no you your we our they their he she his her i me my us how why what " +
      "when who whom which will would could should may might can just more most very new now here there does did do has have had " +
      "don doesn didn isn aren wasn weren won wouldn couldn shouldn all every each",
    bg: "и или но а е са съм си сме сте ли бе беше бил била било били ще да не ни на в във за от до с със по при към през след преди над под " +
      "между без че как какво кой коя кое кои който която което които защо кога къде тук там това този тази тези то той тя те ние вие аз " +
      "ти му я ги го им й се също още само вече много най нов нова ново нови казва каза според един една едно всички всеки всяка всяко ето трябва има няма върху",
    ru: "и или но а же ли не ни на в во за от до с со по при к ко из у о об про через после перед над под между без что как какой какая " +
      "какое какие кто где когда почему это этот эта эти то тот та те он она оно они мы вы я ты его её их ему ей им был была было были " +
      "будет есть быть также ещё уже очень новый новая новое новые сказал заявил для все всех весь вся всё каждый новом новой новых новым нового",
    uk: "і й та або але а не ні на в у до за від з із зі по при через після перед над під між без що як який яка яке які хто де коли " +
      "чому це цей ця ці те той ті він вона воно вони ми ви я ти його її їх йому їй їм був була було були буде є бути також ще вже дуже " +
      "новий нова нове нові сказав заявив про для всі всіх весь вся все кожен нового новому новій нових новим",
    pl: "i oraz lub albo ale a nie na w we do za od z ze po przy przez o u dla jak że co który która które którzy kto gdzie kiedy " +
      "dlaczego to ten ta te tego tej jest są był była było były będzie być się też już bardzo nowy nowa nowe nowi powiedział według wszyscy wszystkich wszystko każdy nowego nowej nowych nowym",
    cs: "a i nebo ale ne na v ve do za od z ze po při přes o u pro jak že co který která které kdo kde kdy proč to ten ta ty je jsou byl " +
      "byla bylo byly bude být se také už velmi nový nová nové řekl podle všichni všech vše každý nového nových",
    de: "der die das den dem des ein eine einen einem einer eines und oder aber nicht kein keine ist sind war waren wird werden wurde " +
      "wurden sein hat haben hatte in im ins an am auf aus bei mit nach von vom zu zum zur für über unter vor durch um als wie dass was " +
      "wer wo wann warum dies diese dieser dieses es er sie wir ihr ich du auch noch schon sehr neu neue neuer sagt sagte laut alle allen jeder jede jedes neuen neuem",
    nl: "de het een en of maar niet geen is zijn was waren wordt worden werd werden heeft hebben had in op aan bij met naar van voor " +
      "over onder door om als hoe dat wat wie waar wanneer waarom dit deze die er hij zij ze wij we jij ik ook nog al zeer erg nieuw " +
      "nieuwe zegt zei volgens alle elke ieder",
    fr: "le la les l d j n s un une des du de et ou mais ne pas plus a été est sont était étaient sera être ont avait avoir dans en au aux sur sous avec " +
      "par pour sans chez entre vers comme que qu qui quoi quel quelle quels quelles où quand pourquoi ce cet cette ces il elle ils elles " +
      "nous vous je tu on se sa son ses leur leurs aussi encore déjà très nouveau nouvelle nouveaux dit selon tous toutes tout chaque",
    es: "el la los las lo un una unos unas y e o u a tras fue hoy hay pero no ni es son era eran fue fueron será ser ha han había haber está están en al del " +
      "de con por para sin sobre bajo entre hacia como que qué quien quién cual cuál donde dónde cuando cuándo porque este esta estos " +
      "estas ese esa eso esto se su sus le les nos también ya muy más nuevo nueva nuevos dice dijo según todos todas todo cada nuevas",
    it: "il lo la i l e gli le un uno una ed oppure ma non né è sono era erano sarà essere ha hanno aveva avere in al allo alla ai agli alle " +
      "del dello della dei degli delle di da dal dalla con su sul sulla per tra fra senza come che chi cosa quale dove quando perché " +
      "questo questa questi queste quello quella si suo sua suoi loro anche già molto più nuovo nuova nuovi dice detto secondo tutti tutte tutto ogni nuove",
    pt: "o os as um uma uns umas e ou após até mas não nem é são era eram foi foram será ser tem têm tinha ter está estão em no na nos nas ao aos " +
      "à às do da dos das de com por pelo pela para sem sobre entre como que quem qual onde quando porque este esta estes estas esse " +
      "essa isso isto se seu sua seus suas lhe também já muito mais novo nova novos diz disse segundo todos todas todo cada novas",
    ro: "și sau dar nu este sunt era erau va fi au avea în la pe cu din de pentru fără despre sub între ca că ce cine care unde când " +
      "acest această aceste acel acea el ea ei ele noi voi eu tu se său sa săi lui lor deja foarte mai nou nouă spune spus potrivit un " +
      "unei unui toți toate tot fiecare",
    el: "ο η το οι τα του της των τον την ένας μία ένα και ή αλλά δεν μη είναι ήταν θα να σε στο στη στην στον στα στους στις από με " +
      "για χωρίς πάνω κάτω μεταξύ ως όπως ότι πως τι ποιος ποια ποιο πού πότε γιατί αυτό αυτός αυτή αυτά αυτοί επίσης ήδη πολύ πιο νέο " +
      "νέα νέος λέει είπε σύμφωνα όλους όλοι όλα όλες όλη κάθε νέες νέους",
    tr: "ve veya ya da ama fakat değil bir bu şu de ile için gibi kadar göre ne kim hangi nerede zaman neden niçin çok daha en yeni " +
      "olan oldu olarak var yok ise mi mı mu mü ki diye dedi söyledi tüm bütün her",
    sk: "a aj alebo ale nie na v vo do za od z zo po pri cez o u pre ako že čo ktorý ktorá ktoré kto kde kedy prečo to ten tá tí je " +
      "sú bol bola bolo boli bude byť sa si tiež už veľmi nový nová nové všetkých všetci každý",
    hu: "a az egy és vagy de nem is van volt lesz hogy mint ez azt ezt meg már még csak minden új szerint után előtt alatt között " +
      "nélkül számára miatt mert ha amely aki amit akik kell lehet fog be ki el",
    sv: "och eller men inte är var blir blev har hade en ett den det de att som för från till med på i av om under över efter före " +
      "utan mellan också redan mycket ny nya nytt alla säger sa enligt vi ni jag han hon man sig nästa",
    da: "og eller men ikke er var bliver blev har havde en et den det de at som for fra til med på i af om under over efter før uden " +
      "mellem også allerede meget ny nye nyt alle siger sagde ifølge vi jeg han hun man sig næste hvad mig dig",
    no: "og eller men ikke er var blir ble har hadde en et ei den det de at som for fra til med på i av om under over etter før uten " +
      "mellom også allerede veldig ny nye nytt alle sier sa ifølge vi jeg han hun man seg neste hva meg deg",
    fi: "ja tai mutta ei on oli ovat olivat se ne että kun jos kuin myös jo hyvin uusi uuden uusia kaikki kaikille joka jotka mikä " +
      "mitä miten miksi missä tämä tämän nämä hän he me te minä sinä mukaan alkaen ensi",
    hr: "i ili ali ne je su bio bila bilo bili će biti u na za od do s sa po pri kroz o iz prema kao da što koji koja koje tko gdje " +
      "kada zašto to taj ta ti se si također već vrlo novi nova novo sve svi sljedećeg",
    sl: "in ali ampak ne je so bil bila bilo bili bo biti v na za od do s z po pri skozi o iz proti kot da kaj ki kateri katera kdo " +
      "kje kdaj zakaj to ta te se si tudi že zelo nov nova novo vse vsi",
    lt: "ir ar bet ne yra buvo bus būti į iš su be per po prie apie nuo iki kad kaip kas kuris kuri kurie kur kada kodėl tai šis ši " +
      "tas ta jis ji jie mes jūs taip pat jau labai naujas nauja nauji visi visiems",
    id: "dan atau tetapi tidak bukan adalah ini itu yang di ke dari untuk dengan pada dalam oleh sebagai juga sudah akan telah bisa " +
      "dapat ada para semua baru mulai karena jika saat tersebut kami kita mereka dia",
    vi: "và hoặc nhưng không là của có cho các những được trong một này với người đã từ sẽ đang tại theo về khi thì cũng rất mới " +
      "tất cả tới",
    hi: "और या लेकिन नहीं है हैं था थी थे होगा के की का में से ने को पर लिए यह वह इस उस एक भी तो ही सभी नए नई कहा",
    mr: "आणि किंवा पण नाही आहे आहेत होता होती होते च्या चा ची चे ने ला साठी मध्ये पासून हा ही हे तो ती ते एक सर्व नवीन केला केली केले",
  }),

  /** Short keyword query from a headline/claim: drops filler words, keeps names and numbers.
   *  "Deutsche Bank Leak Reveals $582 Million In Epstein Payments, …" → "Deutsche Bank $582 Epstein Payments"
   *  lang: the text's language, so its own small words are dropped too. */
  keywords(text, max = 5, numbers = true, lang = "en") {
    const FILLER = new Set(`${BLK.FILLER_WORDS.en} ${BLK.NEWS_WORDS} ${lang !== "en" ? BLK.FILLER_WORDS[lang] || "" : ""}`.split(" "));
    // Apostrophes split words ("l'artiste", "Trump's"; the single letters left are dropped below), except in
    // Ukrainian, where they are part of the word ("прем'єр"). \p{M} keeps vowel signs (Hindi, Tamil…) in words.
    const uk = lang === "uk";
    const clean = (clause) => clause.replace(/[“”"()[\]?!¿¡«»„]/g, "").replace(/['’‘]/g, uk ? "'" : " ")
      .split(uk ? /[^\p{L}\p{M}\p{N}'$%.£€]+/u : /[^\p{L}\p{M}\p{N}$%.£€]+/u)
      .map((w) => w.replace(/^\.+|\.+$/g, ""))
      .filter((w) => w.length > 1 && !FILLER.has(w.toLowerCase()) && (numbers || !/\d/.test(w)));
    // The main clause of a headline comes first; if it is too short ("Правителството обяви, че …"),
    // the following clauses fill up the search.
    const clauses = String(text || "").split(/[,:;|–—]|\s-\s/);
    let words = clean(clauses[0]);
    for (let i = 1; i < clauses.length && words.length < Math.min(3, max); i++) words = words.concat(clean(clauses[i]));
    return (words.length ? words : String(text || "").split(/\s+/)).slice(0, max).join(" ");
  },

  /** Builds the new-tab URL for a fact check. Nothing is sent until the user clicks.
   *  langs: { answer, search, textLang } from factLangs(); textLang = language the text is in (guessed if absent). */
  factCheckUrl(engine, text, pageUrl, langs = {}) {
    const t = String(text || "").replace(/\s+/g, " ").trim().slice(0, 300);
    const answer = BLK.FACT_LANGS.includes(langs.answer) ? langs.answer : "en";
    const search = BLK.FACT_LANGS.includes(langs.search) ? langs.search : "";
    const textLang = langs.textLang || BLK.guessLang(t, answer) || answer;
    // News edition and fact-checker language filter follow the language the search text is in.
    if (engine === "news") return `https://news.google.com/search?q=${encodeURIComponent(BLK.keywords(t, 6, true, textLang))}&${BLK.newsParams(textLang)}`;
    // Fact-checker search matches reviewed claims by keyword: short, no figures. Its hl= is the claim-language filter.
    if (engine === "factcheck") {
      return `https://toolbox.google.com/factcheck/explorer/search/${encodeURIComponent(BLK.keywords(t, 5, false, textLang))};hl=${BLK.googleLang(textLang)}`;
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
      factSearchLang: BLK.validSearchLang(s.factSearchLang),
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
