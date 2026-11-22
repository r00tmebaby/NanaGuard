// Counts blocked items for the toolbar badge and closes popunder tabs
// that a page opens without the user clicking anything.
const api = globalThis.browser ?? globalThis.chrome;

async function bump(kind) {
  const { stats = {} } = await api.storage.local.get("stats");
  stats[kind] = (stats[kind] || 0) + 1;
  stats.total = (stats.total || 0) + 1;
  await api.storage.local.set({ stats });
  api.action.setBadgeText({ text: String(stats.total) });
  api.action.setBadgeBackgroundColor({ color: "#c0392b" });
}

api.runtime.onMessage.addListener((msg) => {
  if (msg?.type) bump(msg.type);
});

// Popunder heuristic: a new tab opened by another tab that immediately loses
// focus back to its opener, or lands on a known-bad URL, gets closed.
const BAD_URL = /(popads|popcash|propeller|adsterra|onclick|clickadu|push-?notif|\/afu\.php|\/redirect\?.*(zone|campaign)id=)/i;

api.tabs.onUpdated.addListener((tabId, info, tab) => {
  if (info.url && tab.openerTabId !== undefined && BAD_URL.test(info.url)) {
    api.tabs.remove(tabId).catch(() => {});
    bump("closed-popunder-tab");
  }
});
