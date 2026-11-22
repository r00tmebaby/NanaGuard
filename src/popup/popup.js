"use strict";
(async () => {
  const $ = (id) => document.getElementById(id);
  const ALL_SITES = { origins: ["<all_urls>"] };
  const [tab] = await api.tabs.query({ active: true, currentWindow: true });
  const host = tab ? HUSH.hostFromUrl(tab.url) : null;
  const meta = await fetch(api.runtime.getURL("rules/meta.json")).then((r) => r.json()).catch(() => null);

  $("version").textContent = "v" + api.runtime.getManifest().version;

  const applyAndReload = async () => {
    await api.runtime.sendMessage({ cmd: "apply" });
    if (tab && host) api.tabs.reload(tab.id);
  };

  // Ads blocked on this tab: network rules that matched (activeTab grants access when the popup opens).
  async function countAds() {
    if (!tab || !host) return null;
    try {
      const { rulesMatchedInfo } = await api.declarativeNetRequest.getMatchedRules({ tabId: tab.id });
      const firstBlock = meta?.firstBlockId ?? 1;
      return rulesMatchedInfo.filter(({ rule }) =>
        rule.rulesetId === "blocklist" ||
        (rule.rulesetId === "easylist" && rule.ruleId >= firstBlock) ||
        (rule.rulesetId === "_dynamic" && rule.ruleId === 2)
      ).length;
    } catch {
      return null; // unsupported or rate-limited
    }
  }

  async function renderPageCounts() {
    const fmt = (n) => (n == null ? "–" : n.toLocaleString());
    const [ads, hidden] = await Promise.all([
      countAds(),
      host
        ? api.runtime.sendMessage({ cmd: "countHidden", tabId: tab.id }).then((r) => (r?.ok ? r.value : null), () => null)
        : null,
    ]);
    $("adsCount").textContent = fmt(ads);
    $("hiddenCount").textContent = fmt(hidden);
  }

  async function render() {
    const settings = await HUSH.getSettings();
    const { stats = {} } = await api.storage.local.get("stats");
    const key = tab ? `tab:${tab.id}` : "";
    const tabStats = (key && (await api.storage.session.get(key))[key]) || {};

    $("perm").hidden = await api.permissions.contains(ALL_SITES);
    $("global").checked = settings.enabled;
    $("ads").checked = settings.ads;
    $("ads").disabled = !settings.enabled;
    $("adsInfo").textContent = meta
      ? `${meta.list} · ${(meta.networkRules + meta.genericSelectors + meta.siteSelectors).toLocaleString()} rules`
      : "";
    document.body.classList.toggle("paused", !settings.enabled);

    const toggle = $("siteToggle");
    const allowed = host && HUSH.isAllowlisted(host, settings.allowlist);
    if (host) {
      $("host").textContent = host.replace(/^www\./, "");
      toggle.checked = settings.enabled && !allowed;
      toggle.disabled = !settings.enabled;
      document.body.classList.toggle("off", !settings.enabled || allowed);
      $("siteStatus").textContent = !settings.enabled
        ? "Protection is paused everywhere."
        : allowed
          ? "Protection is off for this site."
          : "Ads, popups and scam tricks are blocked here.";
    } else {
      $("host").textContent = "Browser page";
      toggle.checked = false;
      toggle.disabled = true;
      document.body.classList.add("off");
      $("siteStatus").textContent = "Hush doesn't run on built-in browser pages.";
    }
    $("pick").disabled = !host || !settings.enabled || allowed;
    $("blockSite").disabled = !host;

    $("tabCount").textContent = (tabStats.total || 0).toLocaleString();
    $("totalCount").textContent = (stats.total || 0).toLocaleString();
    $("breakdown").replaceChildren(
      ...Object.entries(HUSH.STAT_LABELS).map(([k, label]) => {
        const li = document.createElement("li");
        const name = document.createElement("span");
        const value = document.createElement("b");
        name.textContent = label;
        value.textContent = (stats[k] || 0).toLocaleString();
        li.append(name, value);
        return li;
      })
    );
  }

  $("global").addEventListener("change", async (e) => {
    await api.storage.sync.set({ enabled: e.target.checked });
    await applyAndReload();
    render();
  });

  $("ads").addEventListener("change", async (e) => {
    await api.storage.sync.set({ ads: e.target.checked });
    await applyAndReload();
    render();
  });

  $("siteToggle").addEventListener("change", async (e) => {
    if (!host) return;
    await HUSH.setSiteAllowed(host, !e.target.checked);
    await applyAndReload();
    render();
  });

  $("pick").addEventListener("click", async () => {
    await api.scripting.executeScript({ target: { tabId: tab.id }, files: ["src/content/picker.js"] });
    window.close();
  });

  $("blockSite").addEventListener("click", async () => {
    const domain = HUSH.normalizeDomain(host);
    if (!domain || !confirm(`Block ${domain}? It won't open again until you remove it in Settings.`)) return;
    await HUSH.setSiteBlocked(domain, true);
    await applyAndReload();
    window.close();
  });

  $("grant").addEventListener("click", async () => {
    if (await api.permissions.request(ALL_SITES)) await applyAndReload();
    render();
  });

  $("openOptions").addEventListener("click", (e) => {
    e.preventDefault();
    api.runtime.openOptionsPage();
    window.close();
  });

  render();
  renderPageCounts();
})();
