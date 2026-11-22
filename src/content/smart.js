/* Smart ad detection (isolated world, top frame). Finds ads no filter list knows about,
 * using the same cues a person uses, scored together:
 *   +3  an "Ad" / "Sponsored" / "Anzeige" / … label inside the box
 *   +3  AdChoices marker, ad-click link (doubleclick, /aclk?, …) or ad-iframe id
 *   +2  third-party iframe, ad-ish id/class token (ad-slot, sponsor, dfp, taboola …)
 *   +1  standard ad size (300×250, 728×90, 160×600 …)
 * Score ≥ 5 → hidden. Hits are reported so the extension can remember the element for
 * this site and learn which ad networks served it (cross-site learning in background.js). */
// eslint-disable-next-line no-var
var BlkSmart = (() => {
  "use strict";

  const SIZES = [
    [300, 250], [728, 90], [160, 600], [320, 50], [300, 600], [970, 250], [336, 280], [468, 60], [120, 600],
    [320, 100], [970, 90], [300, 100], [250, 250], [200, 200], [180, 150], [234, 60], [120, 240], [300, 50],
    [320, 480], [300, 1050], [240, 400], [750, 200], [750, 300], [980, 120], [930, 180], [728, 250], [1024, 90],
  ];
  const isAdSize = (w, h) => SIZES.some(([a, b]) => Math.abs(w - a) <= 8 && Math.abs(h - b) <= 8);

  const LABELS = new Set([
    "ad", "ads", "advertisement", "advertisements", "advertising", "advertorial", "sponsored", "sponsored content",
    "sponsored links", "sponsored by", "promoted", "promoted content", "paid content", "paid partnership", "partner content",
    "anzeige", "werbung", "publicité", "publicite", "publicidad", "anuncio", "anúncio", "pubblicità", "pubblicita",
    "реклама", "reklama", "reklam", "advertentie", "annonse", "annons", "mainos", "διαφήμιση", "广告", "廣告",
    "広告", "광고", "إعلان", "اعلان", "quảng cáo", "iklan", "โฆษณา", "hirdetés", "inzerce", "reclamă", "реклама ·",
  ]);
  const AD_TOKEN =
    /(?:^|[\s_-])(?:ads?|adv|adverts?|advertisements?|advertising|adslot|adunit|adbox|adzone|adspace|adwrap(?:per)?|adcontainer|ad(?:[-_](?:slot|unit|box|container|wrapper|banner|zone|space|frame|placement|block|area|holder|label))|sponsor(?:ed)?|dfp|gpt[-_]?ad|adsense|taboola|outbrain|mgid|revcontent|banner[-_]?ad|google[-_]?ads?)(?:[\s_-]|\d|$)/i;
  const AD_IFRAME = /^(google_ads_iframe|aswift_|ad_?iframe|ads?[-_]iframe|div-gpt-ad|gpt_unit_|safeframe)/i;
  const AD_URL =
    /(doubleclick\.net|googleadservices\.com|googlesyndication\.com|\/aclk\?|[./]adclick|clickserve|adservice\.|\/pagead\/|amazon-adsystem\.com|taboola\.com|outbrain\.com|criteo\.(com|net)|adnxs\.com|adform\.net|smartadserver\.com|pubmatic\.com|rubiconproject\.com|openx\.net|media\.net|yieldmo|teads\.tv|sharethrough|adsrvr\.org|zemanta|revcontent|mgid\.com)/i;
  const ADCHOICES = /adchoices|youradchoices|aboutads\.info|optout\.(networkadvertising|aboutads)|\/adinfo|privacy\.?ads/i;
  const NEVER = "html,body,main,header,nav,footer,form,dialog,[role=main],[role=navigation],[contenteditable]";

  const pageHost = location.hostname.replace(/^www\./, "");
  const thirdParty = (url) => {
    try {
      const h = new URL(url, location.href).hostname.replace(/^www\./, "");
      return h && h !== pageHost && !h.endsWith("." + pageHost) && !pageHost.endsWith("." + h) ? h : "";
    } catch { return ""; }
  };
  const area = (r) => r.width * r.height;
  const tokenText = (el) => `${el.id || ""} ${typeof el.className === "string" ? el.className : ""}`;

  /** Climb from a signal element to the box that holds the whole ad. */
  function containerFor(el, minArea = 0) {
    const vpArea = innerWidth * innerHeight;
    let best = null;
    for (let n = el, depth = 0; n && depth < 6; n = n.parentElement, depth++) {
      if (n.matches(NEVER)) break;
      const r = n.getBoundingClientRect();
      const a = area(r);
      if (a > vpArea * 0.45 || r.width > innerWidth * 0.98) break;
      if (a >= minArea && a > 0) {
        best = n;
        if (isAdSize(r.width, r.height) || n.querySelector("iframe,img,video")) {
          if (a >= minArea * 4 || isAdSize(r.width, r.height)) return n;
        }
      }
    }
    return best;
  }

  function safeToHide(el) {
    if (!el || el.matches(NEVER)) return false;
    const r = el.getBoundingClientRect();
    if (area(r) < 1500 || area(r) > innerWidth * innerHeight * 0.45) return false;
    // Never hide real content or controls.
    if (el.querySelector("h1, article, main, input:not([type=hidden]), textarea, select, [contenteditable]")) return false;
    if ((el.textContent || "").length > 1500) return false;
    return true;
  }

  function scan() {
    const scores = new Map();
    const add = (el, pts, network) => {
      if (!el) return;
      const s = scores.get(el) || { score: 0, networks: new Set() };
      s.score += pts;
      if (network) s.networks.add(network);
      scores.set(el, s);
    };

    // 1. iframes
    for (const f of document.querySelectorAll("iframe")) {
      const r = f.getBoundingClientRect();
      if (area(r) < 1500) continue;
      const src = f.src || "";
      const host = thirdParty(src);
      let pts = 0;
      if (host) pts += 2;
      if (AD_IFRAME.test(f.id) || AD_IFRAME.test(f.name)) pts += 3;
      if (AD_URL.test(src)) pts += 3;
      if (isAdSize(r.width, r.height)) pts += 1;
      if (pts >= 2) add(containerFor(f, area(r)), pts, host);
    }

    // 2. visible "Ad" / "Sponsored" labels
    for (const el of document.querySelectorAll("span,div,p,small,b,strong,label,em,i,h2,h3,h4,h5,h6,figcaption,a,abbr")) {
      if (el.childElementCount > 1) continue;
      const t = (el.textContent || "").trim();
      if (!t || t.length > 22) continue;
      if (LABELS.has(t.toLowerCase().replace(/[:·|•\s]+$/, ""))) {
        const r = el.getBoundingClientRect();
        // A big element whose only text is "Advertisement" is the ad box itself;
        // a small label sits inside a bigger box we climb to.
        add(area(r) >= 3000 ? el : containerFor(el, area(r) * 6), 3);
      }
    }

    // 3. AdChoices markers and ad-click links
    for (const a of document.querySelectorAll("a[href]")) {
      const href = a.href;
      if (ADCHOICES.test(href) || /adchoices/i.test(a.getAttribute("aria-label") || a.title || "")) {
        add(containerFor(a, area(a.getBoundingClientRect()) * 6), 3);
      } else if (AD_URL.test(href)) {
        add(containerFor(a, area(a.getBoundingClientRect())), 3, thirdParty(href));
      }
    }

    // 4. ad-ish ids/classes
    for (const el of document.querySelectorAll("[id*=ad i],[class*=ad i],[id*=sponsor i],[class*=sponsor i],[id*=banner i],[class*=banner i],[id*=gpt i],[class*=taboola i],[class*=outbrain i]")) {
      if (AD_TOKEN.test(tokenText(el))) add(el, 2);
    }

    // Merge nested candidates into their outermost scored box, then size bonus.
    const hits = [];
    for (const [el, s] of scores) {
      let score = s.score;
      for (const [other, o] of scores) {
        if (other !== el && el.contains(other)) {
          score += o.score;
          o.networks.forEach((n) => s.networks.add(n));
        }
      }
      const r = el.getBoundingClientRect();
      if (isAdSize(r.width, r.height)) score += 1;
      if (score >= 5 && safeToHide(el)) hits.push({ el, score, networks: s.networks });
    }
    // Keep only outermost hits.
    return hits.filter((h) => !hits.some((o) => o !== h && o.el.contains(h.el)));
  }

  /** Runs detection now and on page changes; onHit(el, networks) is called once per new ad. */
  function start(onHit) {
    const seen = new WeakSet();
    let timer = 0;
    let runs = 0;
    const pass = () => {
      if (++runs > 40) return; // cap work on endlessly changing pages
      for (const { el, networks } of scan()) {
        if (seen.has(el)) continue;
        seen.add(el);
        el.style.setProperty("display", "none", "important");
        onHit(el, [...networks].filter(Boolean));
      }
    };
    const schedule = () => { if (!timer) timer = setTimeout(() => { timer = 0; pass(); }, 1200); };
    const begin = () => {
      setTimeout(pass, 600); // let ads render so sizes are known
      new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
    };
    if (document.readyState === "complete") begin();
    else addEventListener("load", begin, { once: true });
  }

  return { start, scan };
})();
