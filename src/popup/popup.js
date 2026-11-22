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
      $("siteStatus").textContent = "KinGuard doesn't run on built-in browser pages.";
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
    for (const [engine, longLabel] of Object.entries(BLK.FACT_ENGINES)) {
      const b = document.createElement("button");
      b.className = "btn";
      b.title = longLabel;
      b.setAttribute("aria-label", longLabel);
      b.append(BLK.icon(engine, 18), BLK.FACT_SHORT[engine]);
      b.addEventListener("click", async () => {
        await api.runtime.sendMessage({ cmd: "factCheck", engine, text: subject, url: tab.url });
        window.close();
      });
      $("checkBtns").append(b);
    }
  })();

  // AI-content check: platform AI labels, AI tool names and AI wording in the page's title/description.
  // Runs on any site with video, plus the known video platforms. Self-contained: it runs in the page.
  function collectAiSignals() {
    try {
      const LIMIT = 3000;
      const content = (sel) => document.querySelector(sel)?.content || "";
      const hostName = location.hostname.replace(/^www\./, "");
      const isYouTube = /(^|\.)youtube\.com$/.test(hostName);
      const isTikTok = /(^|\.)tiktok\.com$/.test(hostName);
      const isMeta = /(^|\.)(facebook|instagram)\.com$/.test(hostName);
      const parts = [];
      if (isYouTube) {
        for (const el of document.querySelectorAll("ytd-watch-metadata, #movie_player")) parts.push(el.innerText || "");
      } else if (isTikTok) {
        for (const el of document.querySelectorAll('[data-e2e*="label"], [class*="AIGC" i], [class*="ai-label" i]')) parts.push(el.innerText || "");
      } else if (isMeta) {
        const LABEL_RE = /AI info|Made with AI|AI-generated|Creator labeled/i;
        for (const el of document.querySelectorAll("span")) {
          const t = (el.textContent || "").trim();
          if (t.length > 0 && t.length < 60 && LABEL_RE.test(t)) parts.push(t);
        }
      }
      const platformText = parts.join(" ").slice(0, LIMIT);
      const descriptionExtra = isYouTube
        ? (document.querySelector("ytd-watch-metadata #description")?.innerText || "").slice(0, LIMIT)
        : "";
      const comments = isYouTube
        ? Array.from(document.querySelectorAll("ytd-comment-thread-renderer #content-text"))
            .slice(0, 150)
            .map((el) => (el.innerText || "").trim())
            .filter(Boolean)
        : [];
      // Largest visible <video> on the page, if it is big enough to be worth checking.
      let videoRect = null;
      let bestArea = 0;
      for (const v of document.querySelectorAll("video")) {
        const r = v.getBoundingClientRect();
        const visible = r.width > 0 && r.height > 0 && r.bottom > 0 && r.right > 0 && r.top < innerHeight && r.left < innerWidth;
        const area = r.width * r.height;
        if (visible && area > bestArea) {
          bestArea = area;
          videoRect = { x: r.x, y: r.y, width: r.width, height: r.height };
        }
      }
      if (bestArea <= 40000) videoRect = null;
      return {
        hasVideo: !!document.querySelector("video"),
        title: document.title || "",
        description: (content('meta[name="description"]') || content('meta[property="og:description"]')) + " " + content('meta[property="og:title"]'),
        keywords: content('meta[name="keywords"]'),
        platformText,
        descriptionExtra,
        comments,
        videoRect,
        dpr: window.devicePixelRatio || 1,
        vw: window.innerWidth,
      };
    } catch {
      return {};
    }
  }

  const AI_TITLES = {
    labelled: "AI-generated (labelled by the platform)",
    likely: "This video is probably AI-generated",
    possible: "This may contain AI-generated content",
  };

  // Shows the AI card. checking=true keeps it visible (with a "Checking..." line) while the watermark OCR runs.
  function renderAi(result, checking) {
    const card = $("aiCard");
    const level = result && result.level && result.level !== "none" ? result.level : "none";
    card.classList.remove("level-labelled", "level-likely", "level-possible");
    if (level === "none" && !checking) {
      card.hidden = true;
      return;
    }
    if (level !== "none") card.classList.add("level-" + level);
    $("aiTitle").textContent = level === "none" ? "Checking this video..." : (AI_TITLES[level] || AI_TITLES.possible);
    const reasons = level === "none" ? [] : (result.reasons || []);
    $("aiReasons").replaceChildren(
      ...reasons.map((text) => {
        const li = document.createElement("li");
        li.textContent = text;
        return li;
      })
    );
    $("aiChecking").hidden = !checking;
    card.hidden = false;
  }

  // Page viewport width (CSS px) from the collector; lets the background compute the exact capture scale.
  let viewportWidth = 0;

  // "Find where this video came from": captures the video frame and opens Google Lens with it.
  function showLens(rect, dpr) {
    const btn = $("lensBtn");
    btn.prepend(BLK.icon("google", 16));
    btn.addEventListener("click", async () => {
      try {
        await api.runtime.sendMessage({ cmd: "lensFrame", tabId: tab.id, rect, dpr, vw: viewportWidth });
      } catch {
        /* ignore, the popup closes either way */
      }
      window.close();
    });
    btn.hidden = false;
  }

  async function runAiCheck(data, videoRect, dpr) {
    const { enabled, guards } = await BLK.getSettings();
    if (!enabled || !guards.ai || typeof BlkAI === "undefined") return;
    const isVideoPlatform = /(^|\.)(youtube|tiktok|instagram|facebook)\.com$/.test(host);
    if (!data.hasVideo && !isVideoPlatform) return;

    const input = {
      title: data.title || "",
      description: (data.description || "") + " " + (data.descriptionExtra || ""),
      keywords: data.keywords ? [data.keywords] : [],
      platformText: data.platformText || "",
      comments: Array.isArray(data.comments) ? data.comments : [],
      host,
    };
    const result = BlkAI.analyze(input);
    if (!videoRect) {
      renderAi(result, false);
      return;
    }

    renderAi(result, true);
    let text = "";
    try {
      const reply = await api.runtime.sendMessage({ cmd: "ocrVideo", tabId: tab.id, rect: videoRect, dpr, vw: viewportWidth });
      if (reply && reply.ok && reply.value && typeof reply.value.text === "string") text = reply.value.text;
    } catch {
      /* OCR unavailable: keep the page-only result */
    }
    const final = text.trim() ? BlkAI.analyze({ ...input, watermarkText: text }) : result;
    renderAi(final, false);
  }

  (async () => {
    try {
      if (!tab || !host || !/^https?:/.test(tab.url || "")) return;
      let data;
      try {
        const [injection] = await api.scripting.executeScript({ target: { tabId: tab.id }, func: collectAiSignals });
        data = injection?.result;
      } catch {
        return; // restricted page
      }
      if (!data) return;
      const videoRect = data.videoRect || null;
      const dpr = data.dpr || 1;
      viewportWidth = Number(data.vw) || 0;
      if (videoRect) showLens(videoRect, dpr);
      await runAiCheck(data, videoRect, dpr);
    } catch {
      /* never break the popup */
    }
  })();

  // New version notice (manual installs only; store installs update themselves).
  api.runtime.sendMessage({ cmd: "checkUpdate" }).then((res) => {
    const info = res && res.ok ? res.value : null;
    if (!info || !info.version) return;
    $("updateVersion").textContent = info.version;
    $("updateBanner").hidden = false;
    $("updateBtn").addEventListener("click", () => {
      api.tabs.create({ url: api.runtime.getURL("src/options/options.html#update") });
      window.close();
    });
  }).catch(() => {});

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
