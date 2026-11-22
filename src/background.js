/* KinGuard background: wires settings to scripts, CSS and network rules, serves per-site
 * cosmetic filters, learns ads/ad networks, keeps counters, closes popunder tabs and
 * routes dangerous sites to the warning page. */
"use strict";

// Chrome service worker loads shared code here; Firefox lists it in manifest.background.scripts.
if (typeof importScripts === "function") importScripts("/src/common.js");
if (typeof importScripts === "function") importScripts("/src/content/ai-signals.js");

const ID = { main: "blk-main", generic: "blk-generic", youtube: "blk-youtube", scriptlet: "blk-sl-" };
const RULE = { allow: 1, userBlock: 2, userBlockPage: 3, learned: 4, securityBase: 1000 };
const COSMETIC_CATS = ["ads", "privacy", "annoyances"];
const YOUTUBE_MATCHES = ["*://*.youtube.com/*", "*://youtube.com/*", "*://*.youtube-nocookie.com/*"];
const ICON_ON = { 16: "/icons/icon-16.png", 32: "/icons/icon-32.png" };
const ICON_OFF = { 16: "/icons/off-16.png", 32: "/icons/off-32.png" };
const SUB_TYPES = ["sub_frame", "stylesheet", "script", "image", "font", "object", "xmlhttprequest", "ping", "media", "websocket", "other"];
const BLOCKED_PAGE = () => api.runtime.getURL("src/blocked/blocked.html");

// Fallback popunder patterns in addition to $popup hosts from the lists.
const POPUNDER_URL =
  /(popads\.net|popcash\.net|propellerads|adsterra|clickadu|onclickads|hilltopads|\/afu\.php\?|[?&](zoneid|zone_id)=\d+.*[?&]campaign)/i;

// Never auto-learn these as ad networks (embeds, CDNs, logins, payments, captchas).
const SAFE_NETWORKS = [
  "youtube.com", "youtube-nocookie.com", "ytimg.com", "google.com", "gstatic.com", "googleapis.com", "googleusercontent.com",
  "vimeo.com", "vimeocdn.com", "dailymotion.com", "twitch.tv", "facebook.com", "fbcdn.net", "twitter.com", "x.com",
  "twimg.com", "instagram.com", "tiktok.com", "spotify.com", "soundcloud.com", "recaptcha.net", "hcaptcha.com",
  "cloudflare.com", "jsdelivr.net", "unpkg.com", "paypal.com", "stripe.com", "disqus.com", "apple.com", "microsoft.com",
  "live.com", "linkedin.com", "wikipedia.org", "wikimedia.org", "amazon.com", "openstreetmap.org", "reddit.com",
  "redditmedia.com", "pinterest.com", "github.com", "githubusercontent.com", "akamaihd.net", "cloudfront.net",
  // Shared hosting / CDN / widget / payment providers: never learned as ad networks.
  "amazonaws.com", "azureedge.net", "azurewebsites.net", "windows.net", "herokuapp.com", "github.io", "netlify.app",
  "vercel.app", "pages.dev", "web.app", "firebaseapp.com", "workers.dev", "appspot.com", "blogspot.com", "wordpress.com",
  "wp.com", "googletagmanager.com", "bootstrapcdn.com", "fontawesome.com", "typekit.net", "jquery.com", "adyen.com",
  "klarna.com", "braintreegateway.com", "worldpay.com", "zendesk.com", "zdassets.com", "intercom.io", "trustpilot.com",
  "bing.com", "yahoo.com", "office.com", "sharepoint.com", "salesforce.com", "shopify.com", "myshopify.com",
  "squarespace.com", "wixstatic.com", "typeform.com",
];
const LEARN_THRESHOLD = 3; // distinct sites before a network is blocked everywhere

/* ---------------- bundled data (lazy, cached per worker lifetime) ---------------- */

const cache = new Map();
const loadJson = (file) => {
  if (!cache.has(file)) cache.set(file, fetch(api.runtime.getURL(file)).then((r) => r.json()).catch(() => null));
  return cache.get(file);
};
const getMeta = () => loadJson("rules/meta.json");
const getCosmetic = (cat) => loadJson(`rules/${cat}-cosmetic.json`);
const getPopupHosts = async () => new Set((await loadJson("rules/popup-hosts.json")) || []);

/** Registrable-ish domain: last two labels (three for co.uk-style). */
const baseDomain = (host) => BLK.baseDomain(host);

/* ---------------- apply settings ---------------- */

let chain = Promise.resolve();
const queue = (fn) => (chain = chain.then(fn, fn).catch((e) => console.error("KinGuard:", e)));
// Network rules first (fast, immediate effect), then content scripts (slower).
const applySettings = () => queue(async () => {
  await updateDynamicRules();
  await updateRulesets();
  await updateIcon();
  await registerScripts();
});
const applyDynamic = () => queue(updateDynamicRules);

// "*://*.example.com/*" already matches example.com itself, so one pattern per domain
// (two only for IP addresses). Halves the pattern count Chrome has to process.
const excludesFor = (domains) =>
  domains.flatMap((d) => (/^\d{1,3}(\.\d{1,3}){3}$/.test(d) ? [`*://${d}/*`] : [`*://*.${d}/*`]));

async function register(scripts) {
  for (const s of scripts) if (s.excludeMatches && !s.excludeMatches.length) delete s.excludeMatches;
  try {
    await api.scripting.registerContentScripts(scripts);
  } catch (err) {
    // Browsers without persistAcrossSessions support: drop the flag and retry as a batch.
    if (/persistAcrossSessions/i.test(String(err && err.message))) {
      for (const s of scripts) delete s.persistAcrossSessions;
      return register(scripts);
    }
    // Register one by one so a single bad script/pattern can't disable the rest.
    for (const s of scripts) {
      try {
        await api.scripting.registerContentScripts([s]);
      } catch (e) {
        console.warn(`KinGuard: ${s.id} failed (${e.message}); retrying without excludes`);
        delete s.excludeMatches;
        await api.scripting.registerContentScripts([s]).catch(() => {});
      }
    }
  }
}

async function registerScripts() {
  const { enabled, lists, allowlist, guards } = await BLK.getSettings();
  // Skip the (slow) re-registration when nothing that affects scripts changed.
  const sig = JSON.stringify([enabled, lists, allowlist, guards.clickfix, api.runtime.getManifest().version]);
  const existing = await api.scripting.getRegisteredContentScripts();
  const { scriptsSig } = await api.storage.session.get("scriptsSig");
  if (scriptsSig === sig && (existing.length > 0) === enabled) return;
  if (existing.length) await api.scripting.unregisterContentScripts({ ids: existing.map((s) => s.id) });
  await api.storage.session.set({ scriptsSig: sig });
  if (!enabled) return;

  const exclude = excludesFor(allowlist);
  const mainJs = guards.clickfix ? ["src/content/main-world.js"] : ["src/content/flags-clickfix-off.js", "src/content/main-world.js"];
  const scripts = [{
    id: ID.main, js: mainJs, matches: ["<all_urls>"], excludeMatches: exclude,
    runAt: "document_start", allFrames: true, world: "MAIN",
  }];

  const cssFiles = [];
  const noGeneric = new Set();
  for (const cat of COSMETIC_CATS) {
    if (!lists[cat]) continue;
    cssFiles.push(`rules/${cat}-generic.css`);
    ((await getCosmetic(cat))?.noGenericHide || []).forEach((d) => noGeneric.add(d));
  }
  if (cssFiles.length) {
    scripts.push({
      id: ID.generic, css: cssFiles, matches: ["<all_urls>"], excludeMatches: excludesFor([...allowlist, ...noGeneric]),
      runAt: "document_start", allFrames: true,
    });
  }

  if (lists.ads && !["youtube.com", "youtube-nocookie.com"].some((d) => BLK.isAllowlisted(d, allowlist))) {
    scripts.push({
      id: ID.youtube, js: ["src/content/youtube.js"], css: ["src/content/youtube.css"], matches: YOUTUBE_MATCHES,
      runAt: "document_start", allFrames: true, world: "MAIN",
    });
  }

  // Core protection first: active immediately.
  await register(scripts);

  // Then site fixes lazily, in small batches with a pause between them, so the browser never
  // processes one big block (it once froze for ~6 s). Not persisted: saving ~30k patterns to
  // Chrome's preferences was the freeze; in-memory registration is redone at each browser start.
  const shardScripts = [];
  for (const cat of COSMETIC_CATS) {
    if (!lists[cat]) continue;
    const shards = (await loadJson(`rules/${cat}-scriptlets.json`)) || [];
    shards.forEach((shard, i) => {
      shardScripts.push({
        id: `${ID.scriptlet}${cat}-${i}`, js: [shard.file], matches: excludesFor(shard.hosts), excludeMatches: exclude,
        runAt: "document_start", allFrames: true, world: "MAIN", persistAcrossSessions: false,
      });
    });
  }
  for (let i = 0; i < shardScripts.length; i += 8) {
    await register(shardScripts.slice(i, i + 8));
    await new Promise((r) => setTimeout(r, 30));
  }
}

async function updateRulesets() {
  const { enabled, lists } = await BLK.getSettings();
  const order = ["blocklist", "security", "ads", "privacy", "annoyances"];
  const want = (id) => enabled && (id === "blocklist" || lists[id]);
  await api.declarativeNetRequest.updateEnabledRulesets({ disableRulesetIds: order.filter((id) => !want(id)) });
  // Enable one at a time: if the browser's shared rule budget runs out, the most
  // important sets (security, ads) are already on.
  for (const id of order.filter(want)) {
    try {
      await api.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds: [id] });
    } catch (e) {
      console.warn(`KinGuard: could not enable ${id}: ${e.message}`);
    }
  }
}

async function updateDynamicRules() {
  const { enabled, lists, allowlist, blocklist } = await BLK.getSettings();
  const learned = await BLK.getLocal("learnedNetworks", {});
  const rules = [];
  if (enabled) {
    if (allowlist.length) {
      rules.push({ id: RULE.allow, priority: 100, action: { type: "allowAllRequests" },
        condition: { requestDomains: allowlist, resourceTypes: ["main_frame", "sub_frame"] } });
    }
    if (blocklist.length) {
      rules.push({ id: RULE.userBlock, priority: 200, action: { type: "block" },
        condition: { requestDomains: blocklist, resourceTypes: SUB_TYPES } });
      rules.push({ id: RULE.userBlockPage, priority: 200,
        action: { type: "redirect", redirect: { regexSubstitution: BLOCKED_PAGE() + "#\\0" } },
        condition: { regexFilter: "^https?://.*", requestDomains: blocklist, resourceTypes: ["main_frame"] } });
    }
    const learnedBlocked = Object.entries(learned).filter(([, v]) => v.blocked && !v.ignored).map(([d]) => d);
    if (learnedBlocked.length) {
      rules.push({ id: RULE.learned, priority: 1, action: { type: "block" },
        condition: { requestDomains: learnedBlocked, domainType: "thirdParty", resourceTypes: SUB_TYPES } });
    }
    if (lists.security) {
      const hosts = (await loadJson("rules/security-hosts.json")) || [];
      for (let i = 0; i < hosts.length; i += 2000) {
        rules.push({ id: RULE.securityBase + i / 2000, priority: 5,
          action: { type: "redirect", redirect: { regexSubstitution: BLOCKED_PAGE() + "#\\0" } },
          condition: { regexFilter: "^https?://.*", requestDomains: hosts.slice(i, i + 2000), resourceTypes: ["main_frame"] } });
      }
    }
  }
  const current = await api.declarativeNetRequest.getDynamicRules();
  try {
    await api.declarativeNetRequest.updateDynamicRules({ removeRuleIds: current.map((r) => r.id), addRules: rules });
  } catch (e) {
    // Browsers without regex redirects: fall back to plain blocking.
    console.warn("KinGuard: dynamic rules fallback", e.message);
    const plain = rules.map((r) => r.action.type === "redirect" ? { ...r, action: { type: "block" },
      condition: { requestDomains: r.condition.requestDomains, resourceTypes: ["main_frame"] } } : r);
    await api.declarativeNetRequest.updateDynamicRules({ removeRuleIds: current.map((r) => r.id), addRules: plain });
  }
}

async function updateIcon() {
  const { enabled } = await BLK.getSettings();
  await api.action.setIcon({ path: enabled ? ICON_ON : ICON_OFF });
  await api.action.setTitle({ title: enabled ? "KinGuard – protecting you" : "KinGuard – paused" });
}

/* ---------------- per-site cosmetics ---------------- */

async function cosmeticFor(host) {
  const { enabled, lists, allowlist } = await BLK.getSettings();
  const out = { css: [], hideSelectors: [], procedural: [] };
  if (!enabled || !host || BLK.isAllowlisted(host, allowlist)) return out;
  const chain = BLK.hostAndParents(host);
  const add = (kind, text) => {
    if (kind === 0) { out.css.push(`${text}{display:none!important}`); out.hideSelectors.push(text); }
    else if (kind === 1) out.css.push(text);
    else out.procedural.push(text);
  };
  for (const cat of COSMETIC_CATS) {
    if (!lists[cat]) continue;
    const data = await getCosmetic(cat);
    if (!data) continue;
    for (const d of chain) {
      for (const [kind, text, excludes] of data.sites[d] || []) {
        if (!excludes || !excludes.some((x) => chain.includes(x))) add(kind, text);
      }
    }
    if (!chain.some((d) => data.noGenericHide.includes(d))) {
      for (const [kind, text, except] of data.genericExceptions) {
        if (!except.some((x) => chain.includes(x))) add(kind, text);
      }
    }
  }
  const hidden = await BLK.getLocal("hidden", {});
  const learnedSites = await BLK.getLocal("learnedSites", {});
  for (const d of chain) for (const sel of [...(hidden[d] || []), ...(learnedSites[d] || [])]) add(0, sel);
  return out;
}

function injectCss(tabId, frameId, rules) {
  if (!rules.length) return Promise.resolve();
  // One rule per line: an invalid selector only invalidates itself.
  return api.scripting
    .insertCSS({ target: { tabId, frameIds: [frameId] }, css: rules.join("\n"), origin: "USER" })
    .catch((e) => console.warn("KinGuard: insertCSS failed", e.message));
}

async function hideElement(tab, frameId, selector) {
  const host = BLK.normalizeDomain(BLK.hostFromUrl(tab.url));
  if (!host || typeof selector !== "string" || !selector || selector.length > 1000) return false;
  const hidden = await BLK.getLocal("hidden", {});
  hidden[host] = [...new Set([...(hidden[host] || []), selector])];
  await api.storage.local.set({ hidden });
  await injectCss(tab.id, frameId, [`${selector}{display:none!important}`]);
  return true;
}

/* ---------------- learning ---------------- */

let learnChain = Promise.resolve();
function learn(tab, selector, networks) {
  learnChain = learnChain.then(async () => {
    const host = BLK.normalizeDomain(BLK.hostFromUrl(tab.url));
    if (!host) return;
    const { enabled, smart, allowlist, smartOff } = await BLK.getSettings();
    if (!enabled || !smart || BLK.isAllowlisted(host, allowlist) || BLK.matchesList(host, smartOff)) return;

    if (typeof selector === "string" && selector && selector.length <= 500) {
      const sites = await BLK.getLocal("learnedSites", {});
      const list = sites[host] || [];
      if (!list.includes(selector) && list.length < 30) {
        sites[host] = [...list, selector];
        await api.storage.local.set({ learnedSites: sites });
      }
    }

    const nets = await BLK.getLocal("learnedNetworks", {});
    let changed = false;
    let newlyBlocked = false;
    const site = baseDomain(host);
    for (const raw of Array.isArray(networks) ? networks.slice(0, 5) : []) {
      const d = baseDomain(BLK.normalizeDomain(raw) || "");
      if (!d || d === site || BLK.matchesList(d, SAFE_NETWORKS) || BLK.matchesList(d, allowlist)) continue;
      const entry = nets[d] || { sites: [], blocked: false, ignored: false, first: Date.now() };
      if (!entry.sites.includes(site)) {
        entry.sites = [...entry.sites, site].slice(-10);
        changed = true;
      }
      if (!entry.blocked && !entry.ignored && entry.sites.length >= LEARN_THRESHOLD) {
        entry.blocked = true;
        entry.blockedAt = Date.now();
        newlyBlocked = true;
        changed = true;
      }
      nets[d] = entry;
    }
    if (changed) await api.storage.local.set({ learnedNetworks: nets });
    if (newlyBlocked) applyDynamic();
  }).catch((e) => console.error("KinGuard learn:", e));
  return learnChain;
}

/* ---------------- counters ---------------- */

let nativeCount = null;
async function enableActionCount() {
  try {
    await api.declarativeNetRequest.setExtensionActionOptions({ displayActionCountAsBadgeText: true });
    nativeCount = true;
  } catch {
    nativeCount = false;
  }
  return nativeCount;
}
const hasNativeCount = () => (nativeCount === null ? enableActionCount() : nativeCount);

async function bumpBadge(tabId, total) {
  if (await hasNativeCount()) {
    await api.declarativeNetRequest.setExtensionActionOptions({ tabUpdate: { tabId, increment: 1 } }).catch(() => {});
  } else {
    await api.action.setBadgeText({ tabId, text: total > 999 ? "999+" : String(total) }).catch(() => {});
  }
}

let genericSelectors = null;
async function countHidden(tabId) {
  const tab = await api.tabs.get(tabId);
  const host = BLK.hostFromUrl(tab.url);
  const { enabled, lists, allowlist } = await BLK.getSettings();
  if (!enabled || !host || BLK.isAllowlisted(host, allowlist)) return 0;
  const { hideSelectors } = await cosmeticFor(host);
  const selectors = [...hideSelectors];
  genericSelectors ||= Promise.all(COSMETIC_CATS.map(async (cat) => {
    const css = await fetch(api.runtime.getURL(`rules/${cat}-generic.css`)).then((r) => r.text()).catch(() => "");
    return [cat, [...css.matchAll(/^(.+)\{display:none!important\}$/gm)].map((m) => m[1])];
  })).then(Object.fromEntries);
  const generic = await genericSelectors;
  for (const cat of COSMETIC_CATS) if (lists[cat]) selectors.push(...generic[cat]);

  const [{ result }] = await api.scripting.executeScript({
    target: { tabId },
    args: [selectors],
    func: (sels) => {
      const found = new Set();
      const add = (list) => list.forEach((el) => found.add(el));
      for (let i = 0; i < sels.length; i += 400) {
        const chunk = sels.slice(i, i + 400);
        try { add(document.querySelectorAll(chunk.join(","))); } catch {
          for (const s of chunk) { try { add(document.querySelectorAll(s)); } catch { /* skip */ } }
        }
      }
      let n = 0;
      for (const el of found) {
        let p = el.parentElement;
        while (p && !found.has(p)) p = p.parentElement;
        if (!p) n++;
      }
      return n;
    },
  });
  return result || 0;
}

let statChain = Promise.resolve();
const serialize = (fn) => (statChain = statChain.then(fn).catch((e) => console.error("KinGuard:", e)));

function record(kind, tabId) {
  if (!(kind in BLK.STAT_LABELS)) return;
  serialize(async () => {
    const stats = await BLK.getLocal("stats", {});
    stats[kind] = (stats[kind] || 0) + 1;
    stats.total = (stats.total || 0) + 1;
    await api.storage.local.set({ stats });
    if (typeof tabId !== "number" || tabId < 0) return;
    const key = `tab:${tabId}`;
    const tabStats = (await api.storage.session.get(key))[key] || {};
    tabStats[kind] = (tabStats[kind] || 0) + 1;
    tabStats.total = (tabStats.total || 0) + 1;
    await api.storage.session.set({ [key]: tabStats });
    await bumpBadge(tabId, tabStats.total);
  });
}

function resetTab(tabId) {
  serialize(async () => {
    await api.storage.session.remove(`tab:${tabId}`);
    if (!(await hasNativeCount())) await api.action.setBadgeText({ tabId, text: "" }).catch(() => {});
  });
}

/* ---------------- dangerous / blocked site page ---------------- */

async function blockedInfo(url) {
  const host = BLK.hostFromUrl(url);
  if (!host) return { reason: "unknown" };
  const { blocklist } = await BLK.getSettings();
  if (BLK.matchesList(host, blocklist)) return { reason: "user", host };
  return { reason: "danger", host };
}

let sessionRuleId = 1;
async function proceed(tabId, url) {
  const host = BLK.hostFromUrl(url);
  if (!host) return false;
  const { blocklist } = await BLK.getSettings();
  if (BLK.matchesList(host, blocklist)) return false; // user-blocked: unblock in Settings instead
  const existing = await api.declarativeNetRequest.getSessionRules();
  sessionRuleId = Math.max(sessionRuleId, ...existing.map((r) => r.id + 1));
  await api.declarativeNetRequest.updateSessionRules({
    addRules: [{ id: sessionRuleId++, priority: 1000, action: { type: "allowAllRequests" },
      condition: { requestDomains: [host], resourceTypes: ["main_frame", "sub_frame"] } }],
  });
  await api.tabs.update(tabId, { url });
  return true;
}

/* ---------------- official websites (Wikidata) ---------------- */

// Asked only for login pages whose title names an organisation we don't know; sends just
// that name to Wikidata. Results are cached locally for 30 days.
async function officialSite(name) {
  const clean = String(name || "").trim().slice(0, 60);
  if (clean.length < 2) return [];
  const key = clean.toLowerCase();
  const cache = await BLK.getLocal("wdCache", {});
  if (cache[key] && Date.now() - cache[key].t < 30 * 864e5) return cache[key].d;
  const headers = { "Api-User-Agent": `KinGuard/${api.runtime.getManifest().version} (https://github.com/r00tmebaby/KinGuard)` };
  let domains = [];
  try {
    const search = await fetch(`https://www.wikidata.org/w/api.php?action=wbsearchentities&format=json&language=en&type=item&limit=10&search=${encodeURIComponent(clean)}`, { headers }).then((r) => r.json());
    // Exact label/alias matches only ("Acme" must not resolve to "Acme Brick Company"),
    // ranked so organisations win over games, films, people and places with the same name.
    const ORG = /\b(bank|banking|company|corporation|business|service|services|website|platform|organi[sz]ation|brand|retailer|financial|fintech|provider|app|airline|insurer|insurance|telecom|operator|marketplace|exchange|payment|carrier|courier|agency|government|store|shop|network|software|subsidiary|conglomerate)\b/i;
    const NOT_ORG = /\b(family name|given name|surname|video game|film|album|song|single|novel|episode|television series|village|town|parish|municipality|commune|river|mountain|species|genus|painting|character|human|footballer|musician|band)\b/i;
    const candidates = (search.search || [])
      .filter((s) => s.match && String(s.match.text).toLowerCase() === key && !NOT_ORG.test(s.description || ""))
      .sort((a, b) => ORG.test(b.description || "") - ORG.test(a.description || ""))
      .slice(0, 5);
    if (candidates.length) {
      const ids = candidates.map((c) => c.id).join("|");
      const ent = await fetch(`https://www.wikidata.org/w/api.php?action=wbgetentities&format=json&props=claims&ids=${ids}`, { headers }).then((r) => r.json());
      for (const c of candidates) {
        const claims = (ent.entities && ent.entities[c.id] && ent.entities[c.id].claims && ent.entities[c.id].claims.P856) || [];
        domains = [...new Set(claims.map((x) => x.mainsnak && x.mainsnak.datavalue && x.mainsnak.datavalue.value)
          .map((u) => BLK.hostFromUrl(u)).filter(Boolean).map((h) => BLK.baseDomain(h)))];
        if (domains.length) break;
      }
    }
  } catch {
    return []; // offline or rate-limited: no opinion
  }
  cache[key] = { d: domains, t: Date.now() };
  const keys = Object.keys(cache);
  if (keys.length > 500) for (const k of keys.slice(0, keys.length - 500)) delete cache[k];
  await api.storage.local.set({ wdCache: cache });
  return domains;
}

/* ---------------- "Check facts" ---------------- */

const menus = api.contextMenus || api.menus;
const MENU_CONTEXTS = ["selection", "page", "link", "video", "image"];

// Rebuilds run one after another so overlapping calls cannot interleave removeAll/create.
let menuChain = Promise.resolve();

async function rebuildMenus() {
  if (!menus) return;
  await menus.removeAll();
  const { enabled, guards } = await BLK.getSettings();
  if (enabled && guards.ai) {
    menus.create({ id: "kg-img-check", title: "Is this image real or AI? (KinGuard)", contexts: ["image"] });
    menus.create({ id: "kg-img-lens", title: "Find where this image came from (Google Lens)", contexts: ["image"] });
  }
  if (!enabled || !guards.factcheck) return;
  menus.create({ id: "blk", title: "Check facts with KinGuard", contexts: MENU_CONTEXTS });
  for (const [engine, title] of Object.entries(BLK.FACT_ENGINES)) {
    menus.create({ id: `blk-${engine}`, parentId: "blk", title, contexts: MENU_CONTEXTS });
  }
}

async function updateMenus() {
  return (menuChain = menuChain.then(rebuildMenus).catch((e) => console.error("KinGuard menus:", e)));
}

function openCheck(engine, text, pageUrl, tab) {
  if (!(engine in BLK.FACT_ENGINES) || !String(text || "").trim()) return Promise.resolve(false);
  const props = { url: BLK.factCheckUrl(engine, text, pageUrl) };
  if (tab) {
    props.index = tab.index + 1;
    props.openerTabId = tab.id;
  }
  return api.tabs.create(props).then(() => true);
}

menus?.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "kg-img-check" || info.menuItemId === "kg-img-lens") {
    handleImageMenu(info, tab);
    return;
  }
  const engine = String(info.menuItemId).replace(/^blk-/, "");
  // Selected text first, then link text / image alt (Firefox), then the page title.
  const text = info.selectionText || info.linkText || (tab && tab.title) || "";
  openCheck(engine, text, info.pageUrl, tab);
});

/* ---------------- video frames: local OCR and Google Lens ---------------- */

const OCR_MIN_PX = 40;
const OCR_EVERY_MS = 8000;
const ocrLast = new Map(); // tabId -> time the last OCR started
// Fractions of the captured video frame: [x, y, width, height]. Corners plus a bottom strip,
// where AI tools usually put their watermark.
const OCR_REGIONS = [
  [0, 0, 0.32, 0.24],
  [0.68, 0, 0.32, 0.24],
  [0, 0.76, 0.32, 0.24],
  [0.68, 0.76, 0.32, 0.24],
  [0.3, 0.82, 0.4, 0.18],
];

// Screenshot of the visible tab, cropped to the video rect (CSS px, relative to the viewport).
// Only the active tab can be captured; returns null when not active or too small.
async function captureVideo(tabId, windowId, rect, dpr, vw) {
  const tab = await api.tabs.get(tabId);
  if (!tab.active) return null;
  const shot = await api.tabs.captureVisibleTab(windowId, { format: "png" });
  const bitmap = await createImageBitmap(await (await fetch(shot)).blob());
  try {
    const r = rect || {};
    // Prefer the real ratio screenshot-width / page-viewport-width: devicePixelRatio can disagree
    // with the captured image (browser zoom, emulation), which would crop the wrong area.
    const scale = Number(vw) > 0 ? bitmap.width / Number(vw) : Number(dpr) > 0 ? Number(dpr) : 1;
    const fit = (v, max) => Math.max(0, Math.min(max, Math.round(Number(v) || 0)));
    const x = fit(Number(r.x) * scale, bitmap.width);
    const y = fit(Number(r.y) * scale, bitmap.height);
    const w = fit(Number(r.width) * scale, bitmap.width - x);
    const h = fit(Number(r.height) * scale, bitmap.height - y);
    if (w < OCR_MIN_PX || h < OCR_MIN_PX) return null;
    const canvas = new OffscreenCanvas(w, h);
    canvas.getContext("2d").drawImage(bitmap, x, y, w, h, 0, 0, w, h);
    return canvas;
  } finally {
    bitmap.close?.();
  }
}

async function canvasToDataUrl(canvas) {
  const blob = await canvas.convertToBlob({ type: "image/png" });
  const bytes = new Uint8Array(await blob.arrayBuffer());
  let binary = "";
  for (let i = 0; i < bytes.length; i += 8192) {
    binary += String.fromCharCode.apply(null, bytes.subarray(i, i + 8192));
  }
  return "data:image/png;base64," + btoa(binary);
}

// Crops a fractional region of the frame and doubles it for better OCR.
function upscaledRegion(src, fx, fy, fw, fh) {
  const sx = Math.round(fx * src.width);
  const sy = Math.round(fy * src.height);
  const sw = Math.max(1, Math.round(fw * src.width));
  const sh = Math.max(1, Math.round(fh * src.height));
  const out = new OffscreenCanvas(sw * 2, sh * 2);
  const ctx = out.getContext("2d");
  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(src, sx, sy, sw, sh, 0, 0, sw * 2, sh * 2);
  return out;
}

// OCR runs in an offscreen document (Chrome) or a hidden iframe on the background page (Firefox).
async function ensureOcrPage() {
  if (api.offscreen) {
    try {
      if (!(await api.offscreen.hasDocument?.())) {
        await api.offscreen.createDocument({
          url: "src/ocr/ocr.html",
          reasons: ["WORKERS"],
          justification: "Read AI watermarks in video frames locally",
        });
      }
    } catch (e) {
      if (!/single offscreen/i.test(String(e && e.message))) throw e;
    }
    return;
  }
  if (typeof document === "undefined") return;
  if (document.getElementById("kg-ocr")) return;
  const frame = document.createElement("iframe");
  frame.id = "kg-ocr";
  const loaded = new Promise((resolve) => frame.addEventListener("load", resolve, { once: true }));
  frame.src = api.runtime.getURL("src/ocr/ocr.html");
  document.body.appendChild(frame);
  await loaded;
}

async function runOcr(dataUrls) {
  try {
    await ensureOcrPage();
    const r = await api.runtime.sendMessage({ target: "kinguard-ocr", images: dataUrls });
    return r && r.ok ? String(r.text || "") : "";
  } catch {
    return "";
  }
}

async function ocrVideo(tabId, rect, dpr, vw) {
  const { enabled, guards } = await BLK.getSettings();
  if (!enabled || !guards.ai) return { text: "" };
  if (Date.now() - (ocrLast.get(tabId) || 0) < OCR_EVERY_MS) return { text: "" };
  ocrLast.set(tabId, Date.now());
  const tab = await api.tabs.get(tabId);
  const frame = await captureVideo(tabId, tab.windowId, rect, dpr, vw);
  if (!frame) return { text: "" };
  const urls = [];
  for (const [fx, fy, fw, fh] of OCR_REGIONS) {
    urls.push(await canvasToDataUrl(upscaledRegion(frame, fx, fy, fw, fh)));
  }
  return { text: await runOcr(urls) };
}

async function lensFrame(tabId, rect, dpr, vw) {
  const tab = await api.tabs.get(tabId);
  const frame = await captureVideo(tabId, tab.windowId, rect, dpr, vw);
  if (!frame) return false;
  await api.storage.session.set({ lensImage: await canvasToDataUrl(frame) });
  await api.tabs.create({
    url: api.runtime.getURL("src/lens/lens.html"),
    index: tab.index + 1,
    openerTabId: tab.id,
  });
  return true;
}

/* ---------------- image context menu: AI check and Google Lens ---------------- */

const IMG_MAX_BYTES = 15 * 1024 * 1024;
const IMG_TIMEOUT_MS = 15000;
const IMAGE_VERDICTS = {
  labelled: "This image says it was made with AI",
  likely: "This image is probably AI-made",
  possible: "This image may be AI-made",
};

async function fetchImageBytes(src) {
  if (!/^(https?:|data:)/i.test(src)) return null;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), IMG_TIMEOUT_MS);
  try {
    const res = await fetch(src, { signal: ctrl.signal, credentials: "omit" });
    if (!res.ok) return null;
    if (Number(res.headers.get("content-length")) > IMG_MAX_BYTES) return null;
    const buf = await res.arrayBuffer();
    return buf.byteLength <= IMG_MAX_BYTES ? buf : null;
  } catch {
    return null;
  } finally {
    clearTimeout(timer);
  }
}

async function checkImage(info, tab) {
  if (!tab) return;
  const showCard = (card) => api.tabs
    .sendMessage(tab.id, { cmd: "showInfo", id: "img-" + Date.now(), ...card }, { frameId: 0 })
    .catch(() => {});
  const buf = await fetchImageBytes(String(info.srcUrl || ""));
  if (!buf) {
    return showCard({
      level: "medium",
      title: "Couldn't check this image",
      lines: ["The website did not allow KinGuard to read the image file."],
    });
  }
  const result = BlkAI.scanImageBytes(new Uint8Array(buf));
  const level = result && result.level ? result.level : "none";
  if (level === "none") {
    return showCard({
      level: "medium",
      title: "No AI marks found in this image",
      lines: [
        "The file has no AI labels or generator data. That does not prove it is real: many AI images have this information removed.",
        "Tip: right-click the image again and choose \"Find where this image came from\".",
      ],
    });
  }
  record("ailabel", tab.id);
  const reasons = Array.isArray(result.reasons) && result.reasons.length
    ? result.reasons
    : ["KinGuard found AI signals in this image."];
  return showCard({
    level: "high",
    title: IMAGE_VERDICTS[level] || IMAGE_VERDICTS.possible,
    lines: reasons,
  });
}

async function openImageLens(info, tab) {
  const src = String(info.srcUrl || "");
  const props = {};
  if (tab) {
    props.index = tab.index + 1;
    props.openerTabId = tab.id;
  }
  if (/^https?:\/\//i.test(src)) {
    await api.tabs.create({ ...props, url: "https://lens.google.com/uploadbyurl?url=" + encodeURIComponent(src) });
  } else if (/^data:/i.test(src)) {
    await api.storage.session.set({ lensImage: src });
    await api.tabs.create({ ...props, url: api.runtime.getURL("src/lens/lens.html") });
  }
}

function handleImageMenu(info, tab) {
  const run = info.menuItemId === "kg-img-lens" ? openImageLens : checkImage;
  return run(info, tab).catch((e) => console.error("KinGuard image:", e));
}

/* ---------------- update notice (manual installs only) ---------------- */

// Store installs are updated by the browser. Manually loaded copies (unpacked / temporary add-on)
// can't update themselves, so at most once a day KinGuard asks GitHub for the latest release and
// shows "new version available" in the popup and Settings. Nothing about the user is sent.
const RELEASES_API = "https://api.github.com/repos/r00tmebaby/KinGuard/releases/latest";
const UPDATE_EVERY_MS = 20 * 60 * 60 * 1000;

function isNewer(latest, current) {
  const a = String(latest).split(".").map((n) => parseInt(n, 10) || 0);
  const b = String(current).split(".").map((n) => parseInt(n, 10) || 0);
  for (let i = 0; i < Math.max(a.length, b.length); i++) {
    if ((a[i] || 0) !== (b[i] || 0)) return (a[i] || 0) > (b[i] || 0);
  }
  return false;
}

async function isManualInstall() {
  try {
    const self = api.management && api.management.getSelf ? await api.management.getSelf() : null;
    return !self || self.installType !== "normal";
  } catch {
    return true;
  }
}

async function checkForUpdate(force = false) {
  try {
    if (!(await isManualInstall())) return null;
    const { updateCheckedAt = 0, updateInfo = null } = await api.storage.local.get(["updateCheckedAt", "updateInfo"]);
    const current = api.runtime.getManifest().version;
    if (!force && Date.now() - updateCheckedAt < UPDATE_EVERY_MS) {
      return updateInfo && isNewer(updateInfo.version, current) ? updateInfo : null;
    }
    await api.storage.local.set({ updateCheckedAt: Date.now() });
    const res = await fetch(RELEASES_API, { headers: { Accept: "application/vnd.github+json" }, cache: "no-store", credentials: "omit" });
    if (!res.ok) return null; // e.g. 404 while the repository is private
    const rel = await res.json();
    const version = String(rel.tag_name || "").replace(/^v/i, "");
    const asset = (re) => ((rel.assets || []).find((a) => re.test(a.name)) || {}).browser_download_url || "";
    const info = isNewer(version, current)
      ? { version, page: String(rel.html_url || ""), chromeZip: asset(/chrome/i), firefoxZip: asset(/firefox/i) }
      : null;
    await api.storage.local.set({ updateInfo: info });
    await api.action.setTitle({ title: info ? `KinGuard – version ${version} available` : "KinGuard – protecting you" });
    return info;
  } catch {
    return null;
  }
}

/* ---------------- events ---------------- */

api.runtime.onInstalled.addListener(async ({ reason }) => {
  await applySettings();
  await updateMenus();
  await enableActionCount();
  api.action.setBadgeBackgroundColor({ color: "#4f46e5" });
  api.action.setBadgeTextColor?.({ color: "#ffffff" });
  if (reason === "install") {
    const granted = await api.permissions.contains({ origins: ["<all_urls>"] });
    if (!granted) api.runtime.openOptionsPage();
  }
});

api.runtime.onStartup.addListener(() => {
  applySettings();
  updateMenus();
  enableActionCount();
  checkForUpdate();
});

api.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && (changes.enabled || changes.lists || changes.ads || changes.allowlist || changes.blocklist || changes.guards)) {
    applySettings();
  }
  if (area === "sync" && (changes.enabled || changes.guards)) updateMenus();
  if (area === "local" && changes.learnedNetworks) {
    const was = Object.entries(changes.learnedNetworks.oldValue || {}).filter(([, v]) => v.blocked && !v.ignored).length;
    const now = Object.entries(changes.learnedNetworks.newValue || {}).filter(([, v]) => v.blocked && !v.ignored).length;
    if (was !== now) applyDynamic();
  }
});

api.permissions.onAdded?.addListener(() => applySettings());

api.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (sender.id !== api.runtime.id || !msg) return false;
  const reply = (p) => {
    Promise.resolve(p).then(
      (value) => sendResponse({ ok: true, value }),
      (e) => sendResponse({ ok: false, error: String(e) })
    );
    return true;
  };
  const fromPage = !!sender.tab && !String(sender.url || "").startsWith(api.runtime.getURL(""));

  switch (msg.cmd) {
    case "apply":
      return reply(applySettings());
    case "blocked":
      if (sender.tab) record(msg.kind, sender.tab.id);
      return false;
    case "cosmetic":
      if (!fromPage) return false;
      return reply(cosmeticFor(BLK.hostFromUrl(sender.url || sender.tab.url)).then(async (c) => {
        await injectCss(sender.tab.id, sender.frameId || 0, c.css);
        return { procedural: c.procedural };
      }));
    case "learn":
      if (!fromPage) return false;
      return reply(learn(sender.tab, msg.selector, msg.networks));
    case "hideElement":
      if (!fromPage) return false;
      return reply(hideElement(sender.tab, sender.frameId || 0, msg.selector));
    case "countHidden":
      if (fromPage || typeof msg.tabId !== "number") return false;
      return reply(countHidden(msg.tabId));
    case "blockedInfo":
      return reply(blockedInfo(msg.url).then((info) => {
        if (info.reason === "danger" && sender.tab) record("danger", sender.tab.id);
        return info;
      }));
    case "proceed":
      if (!sender.tab || fromPage) return false;
      return reply(proceed(sender.tab.id, msg.url));
    case "officialSite":
      if (!fromPage) return false;
      return reply(officialSite(msg.name));
    case "checkUpdate":
      // From the popup / Settings (extension pages only).
      if (fromPage) return false;
      return reply(checkForUpdate(!!msg.force));
    case "factCheck":
      // From the YouTube button (page) or the popup; only builds our own search URLs.
      return reply(openCheck(msg.engine, msg.text, msg.url, sender.tab));
    case "ocrVideo": {
      // Content scripts pass their own tab; extension pages (popup) pass msg.tabId.
      const tabId = sender.tab ? sender.tab.id : msg.tabId;
      if (typeof tabId !== "number") return false;
      return reply(ocrVideo(tabId, msg.rect, msg.dpr, msg.vw).catch(() => ({ text: "" })));
    }
    case "lensFrame": {
      const tabId = sender.tab ? sender.tab.id : msg.tabId;
      if (typeof tabId !== "number") return false;
      return reply(lensFrame(tabId, msg.rect, msg.dpr, msg.vw));
    }
    case "closeTab":
      if (!sender.tab) return false;
      return reply(api.tabs.remove(sender.tab.id));
    case "warn":
      // A frame (maybe an iframe) detected something; show the warning in the top frame.
      if (!fromPage || typeof msg.kind !== "string") return false;
      api.tabs.sendMessage(sender.tab.id, { cmd: "showWarning", kind: msg.kind }, { frameId: 0 }).catch(() => {});
      return false;
    default:
      return false;
  }
});

// Popunders: a tab opened by another tab that lands on an ad host within seconds.
const freshTabs = new Map(); // tabId -> { opener, at }
const spawns = new Map(); // openerTabId -> { child, at, openerBase }

api.tabs.onCreated.addListener((tab) => {
  if (tab.openerTabId !== undefined) freshTabs.set(tab.id, { opener: tab.openerTabId, at: Date.now() });
  if (tab.openerTabId !== undefined) {
    api.tabs.get(tab.openerTabId).then((o) => {
      const h = BLK.hostFromUrl(o.url);
      if (h) spawns.set(tab.openerTabId, { child: tab.id, at: Date.now(), openerBase: baseDomain(h) });
    }).catch(() => {});
  }
});

api.tabs.onUpdated.addListener(async (tabId, info) => {
  if (info.status === "loading" && info.url) resetTab(tabId);
  const fresh = freshTabs.get(tabId);
  if (!info.url || !fresh) return;
  if (Date.now() - fresh.at > 15000) {
    freshTabs.delete(tabId);
    return;
  }
  const host = BLK.hostFromUrl(info.url);
  if (!host) return;
  const { enabled, lists, allowlist } = await BLK.getSettings();
  if (!enabled || !lists.ads) return;
  const popupHosts = await getPopupHosts();
  if (!POPUNDER_URL.test(info.url) && !BLK.hostAndParents(host).some((d) => popupHosts.has(d))) return;
  try {
    const opener = await api.tabs.get(fresh.opener);
    if (BLK.isAllowlisted(BLK.hostFromUrl(opener.url), allowlist)) return;
  } catch {
    /* opener already closed */
  }
  freshTabs.delete(tabId);
  await api.tabs.remove(tabId).catch(() => {});
  record("tab", fresh.opener);
});

// Tab-under: the opener opened the real page in a new tab, then navigated itself to another site.
api.tabs.onUpdated.addListener(async (tabId, info) => {
  const s = spawns.get(tabId);
  if (!s || !info.url) return;
  if (Date.now() - s.at > 4000) { spawns.delete(tabId); return; }
  const newHost = BLK.hostFromUrl(info.url);
  if (!newHost || baseDomain(newHost) === s.openerBase) return; // same site: normal navigation
  const child = await api.tabs.get(s.child).catch(() => null);
  const childHost = child && BLK.hostFromUrl(child.pendingUrl || child.url);
  if (!childHost || baseDomain(childHost) !== s.openerBase) return; // new tab isn't the site's own page
  const { enabled, lists, allowlist } = await BLK.getSettings();
  if (!enabled || !lists.ads || BLK.isAllowlisted(newHost, allowlist) || BLK.isAllowlisted(childHost, allowlist)) return;
  spawns.delete(tabId);
  await api.tabs.update(child.id, { active: true }).catch(() => {});
  await api.tabs.remove(tabId).catch(() => {});
  record("tab", child.id);
});

api.tabs.onRemoved.addListener((tabId) => {
  freshTabs.delete(tabId);
  spawns.delete(tabId);
  serialize(() => api.storage.session.remove(`tab:${tabId}`));
});

// Expose for tests/debugging in the service worker console.
globalThis.kinguard = { applySettings, cosmeticFor, learn, getMeta, officialSite, updateMenus, openCheck, ocrVideo, lensFrame, checkImage };
