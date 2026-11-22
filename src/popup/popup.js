"use strict";
(async () => {
  const $ = (id) => document.getElementById(id);
  const ALL_SITES = { origins: ["<all_urls>"] };
  const [tab] = await api.tabs.query({ active: true, currentWindow: true });
  const host = tab ? BLK.hostFromUrl(tab.url) : null;
  const meta = await fetch(api.runtime.getURL("rules/meta.json")).then((r) => r.json()).catch(() => null);
  const fmt = (n) => (n == null ? "–" : n.toLocaleString());

  $("version").textContent = "v" + api.runtime.getManifest().version;

  const applyAndReload = async () => {
    await api.runtime.sendMessage({ cmd: "apply" });
    if (tab && host) api.tabs.reload(tab.id);
  };

  // Ads/trackers blocked on this tab: matched network rules (activeTab grants access on popup open).
  async function countNetwork() {
    if (!tab || !host) return null;
    try {
      const { rulesMatchedInfo } = await api.declarativeNetRequest.getMatchedRules({ tabId: tab.id });
      const cats = meta ? meta.categories : {};
      return rulesMatchedInfo.filter(({ rule }) => {
        if (rule.rulesetId === "blocklist") return true;
        if (rule.rulesetId === "_dynamic") return rule.ruleId !== 1;
        const c = cats[rule.rulesetId];
        return c ? rule.ruleId >= c.firstBlockId && rule.ruleId < c.firstParamId : false;
      }).length;
    } catch {
      return null; // unsupported or rate-limited
    }
  }

  async function renderPageCounts(tabStats) {
    const [net, hidden] = await Promise.all([
      countNetwork(),
      host ? api.runtime.sendMessage({ cmd: "countHidden", tabId: tab.id }).then((r) => (r?.ok ? r.value : null), () => null) : null,
    ]);
    $("adsCount").textContent = fmt(net);
    $("hiddenCount").textContent = fmt(hidden == null ? null : hidden + (tabStats.smart || 0));
  }

  async function render() {
    const settings = await BLK.getSettings();
    const stats = await BLK.getLocal("stats", {});
    const key = tab ? `tab:${tab.id}` : "";
    const tabStats = (key && (await api.storage.session.get(key))[key]) || {};

    $("perm").hidden = await api.permissions.contains(ALL_SITES);
    $("global").checked = settings.enabled;
    document.body.classList.toggle("paused", !settings.enabled);

    const toggle = $("siteToggle");
    const allowed = host && BLK.isAllowlisted(host, settings.allowlist);
    if (host) {
      $("host").textContent = host.replace(/^www\./, "");
      toggle.checked = settings.enabled && !allowed;
      toggle.disabled = !settings.enabled;
      document.body.classList.toggle("off", !settings.enabled || allowed);
      $("siteStatus").textContent = !settings.enabled
        ? "Protection is paused everywhere."
        : allowed
          ? "Protection is off for this site."
          : "Ads, trackers, popups and scam tricks are blocked here.";
    } else {
      $("host").textContent = "Browser page";
      toggle.checked = false;
      toggle.disabled = true;
      document.body.classList.add("off");
      $("siteStatus").textContent = "Blockify doesn't run on built-in browser pages.";
    }
    $("pick").disabled = !host || !settings.enabled || allowed;
    $("blockSite").disabled = !host;

    const tricks = Object.entries(tabStats).filter(([k]) => k !== "total" && k !== "smart").reduce((n, [, v]) => n + v, 0);
    $("tabCount").textContent = fmt(tricks);
    $("smartRow").hidden = !tabStats.smart;
    $("smartCount").textContent = fmt(tabStats.smart || 0);

    $("totalCount").textContent = fmt(stats.total || 0);
    $("breakdown").replaceChildren(
      ...Object.entries(BLK.STAT_LABELS).map(([k, label]) => {
        const li = document.createElement("li");
        const name = document.createElement("span");
        const value = document.createElement("b");
        name.textContent = label;
        value.textContent = fmt(stats[k] || 0);
        li.append(name, value);
        return li;
      })
    );
    renderPageCounts(tabStats);
  }

  $("global").addEventListener("change", async (e) => {
    await api.storage.sync.set({ enabled: e.target.checked });
    await applyAndReload();
    render();
  });

  $("siteToggle").addEventListener("change", async (e) => {
    if (!host) return;
    await BLK.setSiteAllowed(host, !e.target.checked);
    await applyAndReload();
    render();
  });

  $("pick").addEventListener("click", async () => {
    await api.scripting.executeScript({ target: { tabId: tab.id }, files: ["src/content/picker.js"] });
    window.close();
  });

  $("blockSite").addEventListener("click", async () => {
    const domain = BLK.normalizeDomain(host);
    if (!domain || !confirm(`Block ${domain}? It won't open again until you remove it in Settings.`)) return;
    await BLK.setSiteBlocked(domain, true);
    await applyAndReload();
    window.close();
  });

  $("smartUndo").addEventListener("click", async () => {
    const domain = BLK.normalizeDomain(host);
    if (!domain) return;
    const { smartOff } = await BLK.getSettings();
    await api.storage.sync.set({ smartOff: [...new Set([...smartOff, domain])] });
    const learned = await BLK.getLocal("learnedSites", {});
    delete learned[domain];
    await api.storage.local.set({ learnedSites: learned });
    api.tabs.reload(tab.id);
    window.close();
  });

  // "Is this true?": selected text on the page, otherwise the page title.
  (async () => {
    const { enabled, guards } = await BLK.getSettings();
    if (!enabled || !guards.factcheck || !host) return;
    let text = "";
    try {
      const [{ result }] = await api.scripting.executeScript({ target: { tabId: tab.id }, func: () => String(getSelection()).trim() });
      text = result || "";
    } catch { /* restricted page */ }
    const subject = text || (tab.title || "").replace(/\s[-|–—]\s[^-|–—]+$/, "");
    if (!subject) return;
    $("checkText").textContent = (text ? "Selected: " : "This page: ") + `“${subject.slice(0, 160)}”`;
    $("checkCard").hidden = false;
    for (const b of document.querySelectorAll("[data-engine]")) {
      b.addEventListener("click", async () => {
        await api.runtime.sendMessage({ cmd: "factCheck", engine: b.dataset.engine, text: subject, url: tab.url });
        window.close();
      });
    }
  })();

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
})();
