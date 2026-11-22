/* Background: registers page scripts/CSS, maintains network rules, injects
 * per-site element hiding, keeps counters and closes popunder tabs. */
"use strict";

// Chrome service worker loads shared code here; Firefox lists it in manifest.background.scripts.
if (typeof importScripts === "function") importScripts("/src/common.js");

const MAIN_SCRIPT_ID = "hush-main";
const COSMETIC_SCRIPT_ID = "hush-cosmetic";
const YOUTUBE_SCRIPT_ID = "hush-youtube";
const YOUTUBE_MATCHES = [
  "*://*.youtube.com/*",
  "*://youtube.com/*",
  "*://*.youtube-nocookie.com/*",
];
const ALLOW_RULE_ID = 1;
const USER_BLOCK_RULE_ID = 2;
const ICON_ON = { 16: "/icons/icon-16.png", 32: "/icons/icon-32.png" };
const ICON_OFF = { 16: "/icons/off-16.png", 32: "/icons/off-32.png" };
const ALL_TYPES = [
  "main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object",
  "xmlhttprequest", "ping", "media", "websocket", "other",
];

// Fallback popunder patterns in addition to EasyList's $popup hosts.
const POPUNDER_URL =
  /(popads\.net|popcash\.net|propellerads|adsterra|clickadu|onclickads|hilltopads|\/afu\.php\?|[?&](zoneid|zone_id)=\d+.*[?&]campaign)/i;

/* ---------------- bundled filter data (lazy, cached per worker lifetime) ---------------- */

const loadJson = (file) => fetch(api.runtime.getURL(file)).then((r) => r.json());
let cosmeticData = null;
let popupHostData = null;
const getCosmetic = () => (cosmeticData ||= loadJson("rules/cosmetic.json"));
const getPopupHosts = () => (popupHostData ||= loadJson("rules/popup-hosts.json").then((a) => new Set(a)));

/* ---------------- settings → scripts, CSS, network rules ---------------- */

let applyChain = Promise.resolve();
function applySettings() {
  applyChain = applyChain.then(doApply, doApply);
  return applyChain;
}

const excludesFor = (domains) => domains.flatMap((d) => [`*://${d}/*`, `*://*.${d}/*`]);

async function register(script) {
  if (script.excludeMatches && !script.excludeMatches.length) delete script.excludeMatches;
  try {
    await api.scripting.registerContentScripts([script]);
  } catch (err) {
    // Never leave the user unprotected because of one bad exclude pattern.
    console.error(`Hush: registering ${script.id} failed, retrying without excludes`, err);
    delete script.excludeMatches;
    await api.scripting.registerContentScripts([script]);
  }
}

async function doApply() {
  const { enabled, ads, allowlist, blocklist } = await HUSH.getSettings();

  const ids = [MAIN_SCRIPT_ID, COSMETIC_SCRIPT_ID, YOUTUBE_SCRIPT_ID];
  const existing = await api.scripting.getRegisteredContentScripts({ ids });
  if (existing.length) await api.scripting.unregisterContentScripts({ ids: existing.map((s) => s.id) });

  if (enabled) {
    await register({
      id: MAIN_SCRIPT_ID,
      js: ["src/content/main-world.js"],
      matches: ["<all_urls>"],
      excludeMatches: excludesFor(allowlist),
      runAt: "document_start",
      allFrames: true,
      world: "MAIN",
    });
  }
  if (enabled && ads) {
    const { noGenericHide } = await getCosmetic();
    await register({
      id: COSMETIC_SCRIPT_ID,
      css: ["rules/cosmetic-generic.css"],
      matches: ["<all_urls>"],
      excludeMatches: excludesFor([...allowlist, ...noGenericHide]),
      runAt: "document_start",
      allFrames: true,
    });
    const ytAllowed = ["youtube.com", "youtube-nocookie.com"].some((d) => HUSH.isAllowlisted(d, allowlist));
    if (!ytAllowed) {
      await register({
        id: YOUTUBE_SCRIPT_ID,
        js: ["src/content/youtube.js"],
        css: ["src/content/youtube.css"],
        matches: YOUTUBE_MATCHES,
        runAt: "document_start",
        allFrames: true,
        world: "MAIN",
      });
    }
  }

  const on = [];
  const off = [];
  (enabled ? on : off).push("blocklist");
  (enabled && ads ? on : off).push("easylist");
  await api.declarativeNetRequest.updateEnabledRulesets({ enableRulesetIds: on, disableRulesetIds: off });

  const addRules = [];
  if (enabled && allowlist.length) {
    addRules.push({
      id: ALLOW_RULE_ID,
      priority: 100,
      action: { type: "allowAllRequests" },
      condition: { requestDomains: allowlist, resourceTypes: ["main_frame", "sub_frame"] },
    });
  }
  if (enabled && blocklist.length) {
    addRules.push({
      id: USER_BLOCK_RULE_ID,
      priority: 200,
      action: { type: "block" },
      condition: { requestDomains: blocklist, resourceTypes: ALL_TYPES },
    });
  }
  await api.declarativeNetRequest.updateDynamicRules({
    removeRuleIds: [ALLOW_RULE_ID, USER_BLOCK_RULE_ID],
    addRules,
  });

  await api.action.setIcon({ path: enabled ? ICON_ON : ICON_OFF });
  await api.action.setTitle({ title: enabled ? "Hush – protecting you" : "Hush – paused" });
}

/* ---------------- per-site element hiding ---------------- */

async function selectorsFor(host) {
  const { enabled, ads, allowlist } = await HUSH.getSettings();
  if (!enabled || !host || HUSH.isAllowlisted(host, allowlist)) return [];
  const chain = HUSH.hostAndParents(host);
  const selectors = new Set();

  if (ads) {
    const { sites, genericExceptions, noGenericHide } = await getCosmetic();
    for (const d of chain) {
      for (const [sel, excludes] of sites[d] || []) {
        if (!excludes || !excludes.some((x) => chain.includes(x))) selectors.add(sel);
      }
    }
    if (!chain.some((d) => noGenericHide.includes(d))) {
      for (const [sel, except] of genericExceptions) {
        if (!except.some((x) => chain.includes(x))) selectors.add(sel);
      }
    }
  }
  const hidden = await HUSH.getHidden();
  for (const d of chain) for (const sel of hidden[d] || []) selectors.add(sel);
  return [...selectors];
}

function injectHiding(tabId, frameId, selectors) {
  if (!selectors.length) return Promise.resolve();
  // One rule per selector: an invalid selector only invalidates itself.
  const css = selectors.map((s) => `${s}{display:none!important}`).join("\n");
  return api.scripting
    .insertCSS({ target: { tabId, frameIds: [frameId] }, css, origin: "USER" })
    .catch((e) => console.warn("Hush: insertCSS failed", e));
}

async function hideElement(tab, frameId, selector) {
  const host = HUSH.normalizeDomain(HUSH.hostFromUrl(tab.url));
  if (!host || typeof selector !== "string" || !selector || selector.length > 1000) return false;
  const hidden = await HUSH.getHidden();
  const list = new Set(hidden[host] || []);
  list.add(selector);
  hidden[host] = [...list];
  await api.storage.local.set({ hidden });
  await injectHiding(tab.id, frameId, [selector]);
  return true;
}

/* ---------------- counters ---------------- */

// Preferred badge: the browser's own per-tab count of blocked requests (ads), to which we
// add our own events via tabUpdate. Falls back to a plain badge where unsupported.
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
    await api.declarativeNetRequest
      .setExtensionActionOptions({ tabUpdate: { tabId, increment: 1 } })
      .catch(() => {});
  } else {
    const text = total > 999 ? "999+" : String(total);
    await api.action.setBadgeText({ tabId, text }).catch(() => {});
  }
}

/** Counts elements on the page hidden by EasyList / the user's own hiding rules. */
let genericSelectors = null;
async function countHidden(tabId) {
  const tab = await api.tabs.get(tabId);
  const { enabled, ads, allowlist } = await HUSH.getSettings();
  const host = HUSH.hostFromUrl(tab.url);
  if (!enabled || !host || HUSH.isAllowlisted(host, allowlist)) return 0;
  const selectors = await selectorsFor(host);
  if (ads) {
    const { noGenericHide } = await getCosmetic();
    if (!HUSH.hostAndParents(host).some((d) => noGenericHide.includes(d))) {
      genericSelectors ||= fetch(api.runtime.getURL("rules/cosmetic-generic.css"))
        .then((r) => r.text())
        .then((css) => [...css.matchAll(/^(.+)\{display:none!important\}$/gm)].map((m) => m[1]));
      selectors.push(...(await genericSelectors));
    }
  }
  const [{ result }] = await api.scripting.executeScript({
    target: { tabId },
    args: [selectors],
    func: (sels) => {
      const found = new Set();
      const add = (list) => list.forEach((el) => found.add(el));
      for (let i = 0; i < sels.length; i += 400) {
        const chunk = sels.slice(i, i + 400);
        try {
          add(document.querySelectorAll(chunk.join(",")));
        } catch {
          // One invalid selector breaks the whole list; retry one by one.
          for (const s of chunk) {
            try { add(document.querySelectorAll(s)); } catch { /* skip */ }
          }
        }
      }
      // Count only outermost hidden elements, not their hidden children.
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
function serialize(fn) {
  statChain = statChain.then(fn).catch((e) => console.error("Hush:", e));
  return statChain;
}

function record(kind, tabId) {
  if (!(kind in HUSH.STAT_LABELS)) return;
  serialize(async () => {
    const { stats = {} } = await api.storage.local.get("stats");
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
    // The native action count resets itself on navigation.
    if (!(await hasNativeCount())) await api.action.setBadgeText({ tabId, text: "" }).catch(() => {});
  });
}

/* ---------------- events ---------------- */

api.runtime.onInstalled.addListener(async ({ reason }) => {
  await applySettings();
  await enableActionCount();
  api.action.setBadgeBackgroundColor({ color: "#4f46e5" });
  api.action.setBadgeTextColor?.({ color: "#ffffff" });
  if (reason === "install") {
    // Firefox makes host access opt-in; send the user to the page that requests it.
    const granted = await api.permissions.contains({ origins: ["<all_urls>"] });
    if (!granted) api.runtime.openOptionsPage();
  }
});

api.runtime.onStartup.addListener(() => {
  applySettings();
  enableActionCount();
});

api.storage.onChanged.addListener((changes, area) => {
  if (area === "sync" && (changes.enabled || changes.ads || changes.allowlist || changes.blocklist)) {
    applySettings();
  }
});

api.permissions.onAdded?.addListener(() => applySettings());

api.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (sender.id !== api.runtime.id || !msg) return false;
  const reply = (p) => {
    p.then(
      (value) => sendResponse({ ok: true, value }),
      (e) => sendResponse({ ok: false, error: String(e) })
    );
    return true;
  };

  switch (msg.cmd) {
    case "apply":
      return reply(applySettings());
    case "blocked":
      if (sender.tab) record(msg.kind, sender.tab.id);
      return false;
    case "cosmetic":
      if (!sender.tab) return false;
      return reply(
        selectorsFor(HUSH.hostFromUrl(sender.url || sender.tab.url)).then((sels) =>
          injectHiding(sender.tab.id, sender.frameId || 0, sels)
        )
      );
    case "countHidden":
      if (sender.tab || typeof msg.tabId !== "number") return false; // extension pages only
      return reply(countHidden(msg.tabId));
    case "hideElement":
      if (!sender.tab) return false;
      return reply(hideElement(sender.tab, sender.frameId || 0, msg.selector));
    default:
      return false;
  }
});

// Popunders: a tab opened by another tab that lands on an ad host within seconds.
const freshTabs = new Map(); // tabId -> { opener, at }

api.tabs.onCreated.addListener((tab) => {
  if (tab.openerTabId !== undefined) freshTabs.set(tab.id, { opener: tab.openerTabId, at: Date.now() });
});

api.tabs.onUpdated.addListener(async (tabId, info) => {
  if (info.status === "loading" && info.url) resetTab(tabId);
  const fresh = freshTabs.get(tabId);
  if (!info.url || !fresh) return;
  if (Date.now() - fresh.at > 15000) {
    freshTabs.delete(tabId);
    return;
  }
  const host = HUSH.hostFromUrl(info.url);
  if (!host) return;
  const popupHosts = await getPopupHosts();
  const isAd = POPUNDER_URL.test(info.url) || HUSH.hostAndParents(host).some((d) => popupHosts.has(d));
  if (!isAd) return;

  const { enabled, allowlist } = await HUSH.getSettings();
  if (!enabled) return;
  try {
    const opener = await api.tabs.get(fresh.opener);
    if (HUSH.isAllowlisted(HUSH.hostFromUrl(opener.url), allowlist)) return;
  } catch {
    /* opener already closed */
  }
  freshTabs.delete(tabId);
  await api.tabs.remove(tabId).catch(() => {});
  record("tab", fresh.opener);
});

api.tabs.onRemoved.addListener((tabId) => {
  freshTabs.delete(tabId);
  serialize(() => api.storage.session.remove(`tab:${tabId}`));
});
