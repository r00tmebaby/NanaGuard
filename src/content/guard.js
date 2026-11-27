/* Scam guard (isolated world, top frame). Three protections, each switchable in Settings:
 *  1. Fake websites  – look-alike domains (paypa1, аpple via punycode, paypal-secure-login.top)
 *                      and login pages that claim a brand but aren't on its official domain
 *                      (built-in brand list + Wikidata "official website" lookup).
 *  2. Password alert – remembers a salted fingerprint of passwords typed on important
 *                      official sites and warns if the same password is typed elsewhere.
 *  3. Scam requests  – pages asking for remote-access apps, gift cards, crypto, "support" calls.
 * Warnings are plain language with a "this site is safe" escape (Settings → Sites → Trusted). */
// eslint-disable-next-line no-var
var BlkGuard = (() => {
  "use strict";

  /* ---------------- brands: [name, official domains, extra tokens, common-word?] ---------------- */
  const BRANDS = [
    ["PayPal", ["paypal.com", "paypal.me", "paypalobjects.com"]],
    ["Apple", ["apple.com", "icloud.com", "me.com"], ["appleid", "icloud", "itunes"], true],
    ["Microsoft", ["microsoft.com", "live.com", "outlook.com", "office.com", "microsoftonline.com", "office365.com",
      "xbox.com", "bing.com", "msn.com", "windows.com", "azure.com", "sharepoint.com", "onedrive.com", "skype.com", "hotmail.com"],
      ["office365", "outlook", "onedrive", "hotmail", "sharepoint", "msoffice", "microsoft365"]],
    ["Google", ["google.*", "gmail.com", "youtube.com", "googleusercontent.com", "withgoogle.com", "googleapis.com", "gstatic.com"], ["gmail"]],
    ["Amazon", ["amazon.*", "amazonaws.com", "a2z.com", "primevideo.com", "audible.*", "amazon.co.uk", "amazon.com.au"]],
    ["Netflix", ["netflix.com", "nflxext.com"]],
    ["Facebook", ["facebook.com", "fb.com", "messenger.com", "meta.com"]],
    ["Instagram", ["instagram.com"]],
    ["WhatsApp", ["whatsapp.com", "whatsapp.net"]],
    ["eBay", ["ebay.*", "ebay.co.uk", "ebay.com.au"]],
    ["Chase", ["chase.com", "jpmorganchase.com", "jpmorgan.com"], [], true],
    ["Bank of America", ["bankofamerica.com", "bofa.com"], ["bankofamerica", "bofa"]],
    ["Wells Fargo", ["wellsfargo.com", "wf.com"], ["wellsfargo"]],
    ["Citibank", ["citi.com", "citibank.com", "citigroup.com"], ["citibank"]],
    ["HSBC", ["hsbc.*", "hsbc.co.uk", "hsbc.com.hk"]],
    ["Barclays", ["barclays.*", "barclays.co.uk", "barclaycard.co.uk"]],
    ["Lloyds Bank", ["lloydsbank.com", "lloydsbankinggroup.com", "lloyds.com"], ["lloydsbank", "lloyds"]],
    ["NatWest", ["natwest.com"]],
    ["Santander", ["santander.*", "santander.co.uk"]],
    ["Revolut", ["revolut.com"]],
    ["Coinbase", ["coinbase.com"]],
    ["Binance", ["binance.com"]],
    ["DHL", ["dhl.*", "dhl.co.uk"], [], true],
    ["FedEx", ["fedex.com"]],
    ["USPS", ["usps.com"]],
    ["Royal Mail", ["royalmail.com"], ["royalmail"]],
    ["DocuSign", ["docusign.com", "docusign.net"]],
    ["Dropbox", ["dropbox.com"]],
    ["Adobe", ["adobe.com"]],
    ["LinkedIn", ["linkedin.com"]],
    ["Yahoo", ["yahoo.*", "yahoo.co.uk", "yahoo.co.jp"]],
    ["Steam", ["steampowered.com", "steamcommunity.com"], ["steampowered", "steamcommunity"], true],
    ["Roblox", ["roblox.com"]],
    ["Spotify", ["spotify.com"]],
    ["Norton", ["norton.com", "nortonlifelock.com", "gen.com"], [], true],
    ["McAfee", ["mcafee.com"]],
    ["Venmo", ["venmo.com"]],
    ["Cash App", ["cash.app", "squareup.com", "block.xyz"], ["cashapp"]],
    ["Zelle", ["zellepay.com"]],
    ["Verizon", ["verizon.com", "verizonwireless.com"]],
    ["Disney+", ["disneyplus.com", "disney.com"], ["disneyplus"]],
    ["IRS", ["irs.gov"], [], true],
    ["HMRC", ["gov.uk"], [], true],
  ].map(([name, official, tokens = [], common = false]) => ({
    name,
    official,
    common,
    tokens: [...new Set([name.toLowerCase().replace(/[^a-z0-9]/g, ""), ...tokens])],
  }));

  // Identity providers that legitimately host other companies' logins.
  const SSO = ["okta.com", "oktapreview.com", "auth0.com", "onelogin.com", "microsoftonline.com", "b2clogin.com",
    "pingone.com", "duosecurity.com", "force.com", "salesforce.com", "login.gov", "id.me", "my.site.com", "cloudflareaccess.com"];
  const RISKY_TLD = /\.(top|xyz|icu|buzz|click|link|rest|cyou|sbs|cfd|quest|online|site|website|support|help|cc|tk|ml|ga|cf|gq|pw|ws|monster|lol|mom|bond|live|info|biz|vip|shop|store|club|work|today|app)$/;
  const PHISH_WORDS = /^(login|log|signin|sign|secure|security|verify|verification|account|accounts|update|support|billing|wallet|auth|recovery|unlock|refund|confirm|service|services|help|id|online|web|portal|customer|alert|notice|center|centre|safe|protect|limited|suspended|resolution|appeal)$/;
  // Real words that sit one letter away from a brand name; never a typo on their own.
  const TYPO_IGNORE = new Set(["finance", "paypay", "barclay", "revolt"]);

  const baseOf = (h) => BLK.baseDomain(h);
  function isOfficial(host, brand) {
    const base = baseOf(host);
    return brand.official.some((o) => {
      if (o.endsWith(".*")) {
        const prefix = o.slice(0, -1);
        return base.startsWith(prefix) && /^[a-z]{2,3}(\.[a-z]{2})?$/.test(base.slice(prefix.length));
      }
      return base === o || host === o || host.endsWith("." + o);
    });
  }
  const realSite = (brand) => brand.official[0].replace(".*", ".com");

  /* ---------------- punycode + confusables ---------------- */
  function punyDecode(input) {
    const base = 36, tMin = 1, tMax = 26, skew = 38, damp = 700;
    const out = [];
    let n = 128, i = 0, bias = 72;
    let basic = input.lastIndexOf("-");
    if (basic < 0) basic = 0;
    for (let j = 0; j < basic; j++) out.push(input.charCodeAt(j));
    const adapt = (delta, num, first) => {
      let k = 0;
      delta = first ? Math.floor(delta / damp) : delta >> 1;
      delta += Math.floor(delta / num);
      for (; delta > ((base - tMin) * tMax) >> 1; k += base) delta = Math.floor(delta / (base - tMin));
      return Math.floor(k + ((base - tMin + 1) * delta) / (delta + skew));
    };
    for (let idx = basic > 0 ? basic + 1 : 0; idx < input.length;) {
      const oldi = i;
      let w = 1;
      for (let k = base; ; k += base) {
        if (idx >= input.length) return input;
        const c = input.charCodeAt(idx++);
        const digit = c - 48 < 10 ? c - 22 : c - 65 < 26 ? c - 65 : c - 97 < 26 ? c - 97 : base;
        if (digit >= base) return input;
        i += digit * w;
        const t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
        if (digit < t) break;
        w *= base - t;
      }
      const len = out.length + 1;
      bias = adapt(i - oldi, len, oldi === 0);
      n += Math.floor(i / len);
      i %= len;
      out.splice(i++, 0, n);
    }
    return String.fromCodePoint(...out);
  }
  const toUnicode = (host) => host.split(".").map((l) => (l.startsWith("xn--") ? punyDecode(l.slice(4)) : l)).join(".");
  const CONFUSABLE = {
    "а": "a", "е": "e", "о": "o", "р": "p", "с": "c", "у": "y", "х": "x", "і": "i", "ј": "j", "ӏ": "l", "ԁ": "d",
    "ɡ": "g", "һ": "h", "ԛ": "q", "ѕ": "s", "ԝ": "w", "ν": "v", "ο": "o", "α": "a", "ρ": "p", "τ": "t", "κ": "k",
    "ι": "i", "ӓ": "a", "ё": "e", "ł": "l", "ı": "i", "ʏ": "y", "ɑ": "a", "ǀ": "l", "ꞵ": "b", "ь": "b", "ո": "n",
    "ս": "u", "ⅼ": "l", "ⅰ": "i", "ｏ": "o", "ｅ": "e",
  };
  const skeleton = (s) => [...s.normalize("NFKD").replace(/[̀-ͯ]/g, "")].map((c) => CONFUSABLE[c] || c).join("");
  const unDigit = (s) => s.replace(/rn/g, "m").replace(/vv/g, "w").replace(/[0134578]/g, (d) => ({ 0: "o", 1: "l", 3: "e", 4: "a", 5: "s", 7: "t", 8: "b" })[d]);

  function editDistance1(a, b) {
    if (a === b || Math.abs(a.length - b.length) > 1) return false;
    let i = 0;
    while (i < a.length && i < b.length && a[i] === b[i]) i++;
    if (a.length === b.length) {
      if (a.slice(i + 1) === b.slice(i + 1)) return true; // substitution
      return a[i] === b[i + 1] && a[i + 1] === b[i] && a.slice(i + 2) === b.slice(i + 2); // swap
    }
    const [s, l] = a.length < b.length ? [a, b] : [b, a];
    return s.slice(i) === l.slice(i + 1); // insertion/deletion
  }

  const tokenIn = (parts, t, common) =>
    parts.some((p) => p === t || (!common && t.length >= 6 && (p.startsWith(t) || p.endsWith(t))));

  /** Look-alike analysis of a hostname → { brand, level, why } or null. */
  function analyzeHost(host, hasPassword = false) {
    const unicode = toUnicode(host);
    const isIdn = unicode !== host;
    const skel = skeleton(unicode);
    const rawParts = host.split(/[.-]/);
    const skelParts = skel.split(/[.-]/);
    const digitParts = rawParts.map(unDigit);
    const label = baseOf(host).split(".")[0];
    const keyword = rawParts.some((p) => PHISH_WORDS.test(p));
    const riskyTld = RISKY_TLD.test(host);

    for (const brand of BRANDS) {
      if (isOfficial(host, brand)) return null; // on a real brand site
    }
    for (const brand of BRANDS) {
      for (const t of brand.tokens) {
        if (t.length < 3) continue;
        if (isIdn && tokenIn(skelParts, t, brand.common)) return { brand, level: "high", why: "homograph" };
        if (!tokenIn(rawParts, t, brand.common) && tokenIn(digitParts, t, brand.common)) return { brand, level: "high", why: "digits" };
        // One-letter typos (amazom, paypai) — real words like "finance"/"revolt" are close to
        // brands too, so a typo only counts together with another phishing sign.
        const typo = t.length >= 6 && [label, ...rawParts].some((p) => p !== t && p.length >= 5 && !TYPO_IGNORE.has(p) && editDistance1(p, t));
        if (typo && (hasPassword || keyword || riskyTld)) return { brand, level: "high", why: "typo" };
        // Two or more labels above the registrable domain: paypal.com.account.verify.top,
        // but not outlook.mycompany.co.uk.
        const deepSubdomain = host.split(".").length - baseOf(host).split(".").length >= 2;
        if (tokenIn(rawParts, t, brand.common) && (keyword || riskyTld || deepSubdomain)) {
          return { brand, level: "medium", why: "brand-in-domain" };
        }
      }
    }
    return null;
  }

  /* ---------------- page helpers ---------------- */
  const visiblePassword = () =>
    [...document.querySelectorAll("input[type=password]")].find((i) => i.offsetParent !== null || i.getClientRects().length);
  const GENERIC = /^(log ?in|sign ?in|sign ?on|login page|account|my account|home|welcome|secure|verification|verify|portal|online banking|banking|dashboard|error|page|loading|redirecting|untitled|password|reset password|forgot password)$/i;
  function brandNamesOnPage() {
    const title = (document.title || "").trim();
    const parts = title.split(/\s[|\-–—:·•]\s|\s?[|–—·•]\s?/).map((s) => s.trim()).filter(Boolean);
    const h1 = document.querySelector("h1");
    if (h1 && h1.textContent.trim().length < 40) parts.push(h1.textContent.trim());
    return parts.filter((p) => p.length >= 2 && p.length <= 40 && p.split(/\s+/).length <= 4 && !GENERIC.test(p));
  }

  /* ---------------- 1. fake websites ---------------- */
  async function checkSite(ctx) {
    const { host, warn, send, message } = ctx;
    const pw = !!visiblePassword();
    const hit = analyzeHost(host, pw);
    if (hit) {
      const level = pw ? "high" : hit.level;
      return warnFake(ctx, hit.brand.name, realSite(hit.brand), level);
    }
    if (!pw || SSO.some((d) => host === d || host.endsWith("." + d))) return false;

    // Login page that names a brand in its title/heading but lives elsewhere.
    const names = brandNamesOnPage();
    for (const name of names) {
      const key = name.toLowerCase().replace(/[^a-z0-9]/g, "");
      const brand = BRANDS.find((b) => b.tokens.includes(key) || b.name.toLowerCase() === name.toLowerCase());
      if (brand) {
        if (host.split(".").some((p) => p === key)) return false; // outlook.company.com: analyzeHost handles look-alikes
        if (!isOfficial(host, brand)) return warnFake(ctx, brand.name, realSite(brand), "high");
        return false;
      }
    }
    for (const name of names.slice(0, 2)) {
      const squashed = name.toLowerCase().replace(/[^a-z0-9]/g, "");
      // The site's own name (acme.com titled "Acme") needs no lookup; "acme-account.top" does.
      if (squashed.length < 3 || baseOf(host).split(".")[0].replace(/[^a-z0-9]/g, "") === squashed) continue;
      const res = await message({ cmd: "officialSite", name });
      const domains = res && res.ok ? res.value : [];
      if (domains.length && !domains.some((d) => baseOf(host) === d || host.endsWith("." + d))) {
        return warnFake(ctx, name, domains[0], "medium");
      }
    }
    void send;
    void warn;
    return false;
  }

  function warnFake({ host, warn, send, message }, brandName, official, level) {
    send("phishing");
    warn({
      id: "phishing",
      level,
      title: level === "high" ? BLK.t("guard.fake_site_title", "This is not the real {brand} website", { brand: brandName }) : BLK.t("guard.fake_site_title_careful", "Careful: this website is not {brand}", { brand: brandName }),
      lines: level === "high"
        ? [BLK.t("guard.you_are_on", "You are on:"), { site: host }, BLK.t("guard.fake_site_body", "The real {brand} website is {official}. Fake websites like this one steal passwords and card details. Please don't type anything here.", { brand: brandName, official })]
        : [BLK.t("guard.fake_site_short", "You are on {host}. The real {brand} website is {official}.", { host, brand: brandName, official })],
      actions: [
        { label: BLK.t("guard.go_to_real", "Go to the real {brand}", { brand: brandName }), kind: "primary", run: () => { location.href = `https://www.${official.replace(/^www\./, "")}/`; } },
        { label: BLK.t("guard.leave_site", "Leave this website"), kind: "secondary", run: () => message({ cmd: "closeTab" }) },
        { label: BLK.t("guard.sure_safe", "I'm sure this website is safe"), kind: "link", run: () => BLK.trustSite(host) },
      ],
    });
    return true;
  }

  /* ---------------- 2. password alert ---------------- */
  // Pure-JS SHA-256: crypto.subtle is missing on plain-http pages, which is exactly where
  // many phishing pages live.
  function sha256(bytes) {
    const K = new Uint32Array([
      0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
      0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174, 0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc,
      0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147,
      0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
      0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08,
      0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208,
      0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2]);
    const H = new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]);
    const len = bytes.length;
    const padded = new Uint8Array(((len + 9 + 63) >> 6) << 6);
    padded.set(bytes);
    padded[len] = 0x80;
    const view = new DataView(padded.buffer);
    view.setUint32(padded.length - 4, len * 8);
    view.setUint32(padded.length - 8, Math.floor(len / 0x20000000));
    const W = new Uint32Array(64);
    const rotr = (x, n) => (x >>> n) | (x << (32 - n));
    for (let off = 0; off < padded.length; off += 64) {
      for (let i = 0; i < 16; i++) W[i] = view.getUint32(off + i * 4);
      for (let i = 16; i < 64; i++) {
        const s0 = rotr(W[i - 15], 7) ^ rotr(W[i - 15], 18) ^ (W[i - 15] >>> 3);
        const s1 = rotr(W[i - 2], 17) ^ rotr(W[i - 2], 19) ^ (W[i - 2] >>> 10);
        W[i] = (W[i - 16] + s0 + W[i - 7] + s1) >>> 0;
      }
      let [a, b, c, d, e, f, g, h] = H;
      for (let i = 0; i < 64; i++) {
        const t1 = (h + (rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25)) + ((e & f) ^ (~e & g)) + K[i] + W[i]) >>> 0;
        const t2 = ((rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22)) + ((a & b) ^ (a & c) ^ (b & c))) >>> 0;
        h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
      }
      H[0] += a; H[1] += b; H[2] += c; H[3] += d; H[4] += e; H[5] += f; H[6] += g; H[7] += h;
    }
    const out = new Uint8Array(32);
    const ov = new DataView(out.buffer);
    H.forEach((v, i) => ov.setUint32(i * 4, v));
    return out;
  }
  async function digest(salt, text) {
    const data = new TextEncoder().encode(salt + "\u0000" + text);
    const bytes = globalThis.crypto && crypto.subtle ? new Uint8Array(await crypto.subtle.digest("SHA-256", data)) : sha256(data);
    return [...bytes].slice(0, 12).map((b) => b.toString(16).padStart(2, "0")).join("");
  }
  // Memoised so two concurrent first-time calls share one salt (otherwise the last write wins
  // and the fingerprint saved with the discarded salt never matches again).
  let saltPromise = null;
  function salt() {
    return saltPromise || (saltPromise = (async () => {
      try {
        let s = await BLK.getLocal("pwSalt", "");
        if (!s) {
          // crypto.getRandomValues works on http pages too (unlike crypto.subtle).
          s = [...crypto.getRandomValues(new Uint8Array(16))].map((b) => b.toString(16).padStart(2, "0")).join("");
          await api.storage.local.set({ pwSalt: s });
        }
        return s;
      } catch (e) {
        saltPromise = null;
        throw e;
      }
    })());
  }

  function watchPasswords(ctx) {
    const { host, warn, send } = ctx;
    const brand = BRANDS.find((b) => isOfficial(host, b));
    let alerted = false;
    let timer = 0;

    const remember = async (value) => {
      if (!brand || value.length < 6) return;
      const fingerprint = await digest(await salt(), value);
      const store = await BLK.getLocal("pwPrints", {});
      store[brand.name] = { f: fingerprint, n: value.length, site: realSite(brand) };
      await api.storage.local.set({ pwPrints: store });
    };
    const compare = async (input) => {
      const value = input.value;
      if (alerted || value.length < 6) return;
      const store = await BLK.getLocal("pwPrints", {});
      const candidates = Object.entries(store).filter(([, v]) => v.n === value.length);
      if (!candidates.length) return;
      const fingerprint = await digest(await salt(), value);
      const match = candidates.find(([, v]) => v.f === fingerprint);
      if (!match) return;
      alerted = true;
      const [name, info] = match;
      send("password");
      warn({
        id: "password",
        level: "high",
        title: BLK.t("guard.pw_reuse_title", "You just typed your {name} password on a different website", { name }),
        lines: [BLK.t("guard.pw_reuse_site_is", "This website is:"), { site: host }, BLK.t("guard.pw_reuse_body", "It is not {name}. If a message or call sent you here, it may be a fake page trying to steal your password. To be safe, change your {name} password at {site}.", { name, site: info.site })],
        actions: [
          { label: BLK.t("guard.pw_clear", "Clear what I typed"), kind: "primary", run: () => { input.value = ""; input.dispatchEvent(new Event("input", { bubbles: true })); } },
          { label: BLK.t("guard.leave_site", "Leave this website"), kind: "secondary", run: () => ctx.message({ cmd: "closeTab" }) },
          { label: BLK.t("guard.pw_site_safe", "This website is safe"), kind: "link", run: () => BLK.trustSite(host) },
        ],
      });
    };

    document.addEventListener("input", (e) => {
      const el = e.target;
      if (!e.isTrusted || !(el instanceof HTMLInputElement) || el.type !== "password") return;
      clearTimeout(timer);
      timer = setTimeout(() => (brand ? null : compare(el)), 250);
    }, true);
    // Remember on official sites when the user submits / leaves the field.
    const save = (el) => { if (brand && el instanceof HTMLInputElement && el.type === "password") remember(el.value); };
    document.addEventListener("change", (e) => e.isTrusted && save(e.target), true);
    document.addEventListener("submit", (e) => {
      if (e.isTrusted) e.target.querySelectorAll?.("input[type=password]").forEach(save);
    }, true);
  }

  /* ---------------- 3. scam requests ---------------- */
  const PHONE = /(\+?1[\s.-]*)?\(?8(00|33|44|55|66|77|88)\)?[\s.-]*\d{3}[\s.-]*\d{4}/;
  const SCAMS = [
    {
      id: "remote",
      needs: /\b(any ?desk|team ?viewer|ultra ?viewer|screen ?connect|connectwise|logmein|rust ?desk|supremo|quick ?support|zoho assist|splashtop|ammyy|getscreen)\b/i,
      plus: [/\b(download|install|run|open)\b/i, /\b(technician|agent|refund|help ?desk|customer (care|service)|session (id|code)|connection code|access code)\b/i, /\b(call|phone|toll[- ]?free|support team)\b/i],
      official: ["anydesk.com", "teamviewer.com", "ultraviewer.net", "screenconnect.com", "connectwise.com", "logmein.com", "rustdesk.com", "supremocontrol.com", "zoho.com", "splashtop.com", "getscreen.me"],
    },
    {
      id: "giftcard",
      needs: /\bgift ?cards?\b/i,
      plus: [/\b(pay|payment|fee|fine|bill|tax(es)?|refund|bail|settle|clear)\b.{0,50}\bgift ?cards?\b|\bgift ?cards?\b.{0,50}\b(pay|payment|fee|fine|tax|settle)\b/i,
        /\b(scratch|send|share|read|give|tell)\b.{0,40}\b(code|pin|numbers?|card number|back of the card)\b/i,
        /\b(immediately|urgent|within \d+ (hours|minutes)|today|arrest|police|warrant|suspended)\b/i],
    },
    {
      id: "crypto",
      needs: /\b(bitcoin|btc|crypto(currency)?|usdt|tether|ethereum|eth)\b/i,
      plus: [/\b(bitcoin|crypto) (atm|machine)\b/i, /\bsend\b.{0,30}\b(btc|bitcoin|usdt|eth|crypto)\b.{0,40}\b(to|address)\b/i,
        /\b(double|2x|triple|multiply)\b.{0,25}\b(your )?(btc|bitcoin|eth|crypto|coins|money|investment)\b/i,
        /\b(giveaway|fine|unlock|release (your )?funds|withdrawal fee|tax on (your )?profits?)\b/i, /\b(qr code|wallet address)\b/i],
    },
    {
      id: "support",
      needs: PHONE,
      plus: [/\b(support|helpline|technician|toll[- ]?free|call (now|immediately|us|this number))\b/i,
        /\b(virus|infected|malware|suspended|locked|unauthori[sz]ed|hacked|compromised|security alert|error code)\b/i,
        /\b(do not (close|restart|shut ?down)|immediately|urgent)\b/i],
      brandCheck: true,
    },
    {
      id: "refund",
      needs: /\b(refund|over ?pa(id|yment)|excess (amount|refund))\b/i,
      plus: [/\b(over[- ]?refund(ed)?|refunded too much|sent (you )?too much|extra (money|amount)|wrong amount)\b/i,
        /\b(return|send back|pay back|transfer back)\b.{0,40}\b(difference|extra|excess|amount)\b/i, /\b(any ?desk|team ?viewer|gift ?card|bitcoin|wire)\b/i],
    },
  ];
  // Warning texts per scam id; a function so the translation is read when the warning is shown.
  const scamTexts = () => ({
    remote: {
      title: BLK.t("guard.scam_remote_title", "Never let a stranger connect to your computer"),
      body: BLK.t("guard.scam_remote_body", "This page asks you to install a remote-access app (like AnyDesk or TeamViewer). Scammers use these apps to take over computers and bank accounts. Real companies don't ask for this out of the blue."),
    },
    giftcard: {
      title: BLK.t("guard.scam_giftcard_title", "No real company or government asks to be paid in gift cards"),
      body: BLK.t("guard.scam_giftcard_body", "This page asks for payment with gift cards. That is always a scam: once you share the card numbers, the money is gone for good."),
    },
    crypto: {
      title: BLK.t("guard.scam_crypto_title", "Be careful: this page asks you to send cryptocurrency"),
      body: BLK.t("guard.scam_crypto_body", "Asking for Bitcoin or crypto payments, 'doubling' your coins, or paying a fee to unlock money are classic scams. Crypto payments can't be reversed."),
    },
    support: {
      title: BLK.t("guard.scam_support_title", "This looks like a fake tech-support page"),
      body: BLK.t("guard.scam_support_body", "Microsoft, Apple and your bank never show warnings with a phone number to call. Don't call the number and don't let anyone connect to your computer."),
    },
    refund: {
      title: BLK.t("guard.scam_refund_title", "This looks like a refund scam"),
      body: BLK.t("guard.scam_refund_body", "Scammers pretend they 'refunded too much' and ask you to send the difference back, often by gift card, wire or crypto. Real companies fix refunds themselves."),
    },
  });
  const SAFE_HOSTS =/(\.gov|\.gov\.uk|\.gov\.au|\.gc\.ca|\.edu|(^|\.)wikipedia\.org|(^|\.)bbb\.org|ftc\.gov|actionfraud\.police\.uk|(^|\.)ageuk\.org\.uk|(^|\.)aarp\.org)$/;

  function checkScams(ctx) {
    const { host, warn, send } = ctx;
    if (SAFE_HOSTS.test(host)) return;
    const text = (document.body ? document.body.innerText : "").slice(0, 60000);
    if (!/\b(you|your)\b/i.test(text)) return;
    const articleLike = text.length > 15000 || document.querySelectorAll("article p, main p").length > 12;
    // Shops mention gift cards, "today", "support" etc. in ordinary checkout text: need more evidence there.
    const shop = !!document.querySelector('input[autocomplete^="cc-"],form[action*="cart" i],form[action*="checkout" i],[class*="add-to-cart" i],[id*="add-to-cart" i]');
    for (const scam of SCAMS) {
      if (!scam.needs.test(text)) continue;
      if (scam.official && scam.official.some((d) => host === d || host.endsWith("." + d))) continue;
      if (scam.brandCheck) {
        const named = BRANDS.filter((b) => new RegExp(`\\b${b.name.replace(/[^a-z0-9 ]/gi, "")}\\b`, "i").test(text));
        if (!named.length || named.some((b) => isOfficial(host, b))) continue;
      }
      const score = scam.plus.filter((re) => re.test(text)).length;
      if (score < (articleLike || shop ? 3 : 2)) continue;
      send("scam");
      warn({
        id: "scam-" + scam.id,
        level: "medium",
        title: scamTexts()[scam.id].title,
        lines: [scamTexts()[scam.id].body],
        actions: [
          { label: BLK.t("guard.leave_site", "Leave this website"), kind: "primary", run: () => ctx.message({ cmd: "closeTab" }) },
          { label: BLK.t("guard.dismiss", "Dismiss"), kind: "secondary" },
          { label: BLK.t("guard.dont_warn_site", "Don't warn on this site"), kind: "link", run: () => BLK.trustSite(host) },
        ],
      });
      return; // one scam banner per page is enough
    }
  }

  /* ---------------- start ---------------- */
  function start(ctx) {
    const { guards, trusted } = ctx.settings;
    if (BLK.matchesList(ctx.host, trusted)) {
      if (guards.password) watchPasswords(ctx); // still learn passwords on trusted official sites
      return;
    }
    if (guards.password) watchPasswords(ctx);

    let siteWarned = false;
    let scamRuns = 0;
    let phishRuns = 0;
    let mo = null;
    const run = async () => {
      if (guards.phishing && !siteWarned && phishRuns++ < 5) siteWarned = await checkSite(ctx);
      if (guards.scam && scamRuns++ < 5) checkScams(ctx);
      // Stop watching the DOM once both guards are finished or capped.
      if (mo && (!guards.phishing || siteWarned || phishRuns >= 5) && (!guards.scam || scamRuns >= 5)) mo.disconnect();
    };
    // Reading page text (innerText) forces layout, so wait until the page has fully loaded
    // and the browser is idle: never compete with the page's own first render.
    const idle = (fn) => (globalThis.requestIdleCallback ? requestIdleCallback(fn, { timeout: 2000 }) : setTimeout(fn, 200));
    let timer = 0;
    const schedule = () => { if (!timer) timer = setTimeout(() => { timer = 0; idle(run); }, 1500); };
    const begin = () => {
      idle(run);
      mo = new MutationObserver(schedule);
      mo.observe(document.documentElement, { childList: true, subtree: true });
    };
    if (document.readyState === "complete") begin();
    else addEventListener("load", begin, { once: true });
  }

  return { start, analyzeHost, toUnicode, isOfficial, BRANDS, sha256 };
})();
