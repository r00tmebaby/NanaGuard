"use strict";
(() => {
  const $ = (id) => document.getElementById(id);
  const ALL_SITES = { origins: ["<all_urls>"] };
  const apply = () => api.runtime.sendMessage({ cmd: "apply" });
  const el = (tag, props = {}, ...children) => {
    const node = Object.assign(document.createElement(tag), props);
    node.append(...children);
    return node;
  };

  $("version").textContent = "Version " + api.runtime.getManifest().version;

  /* ---------- updates (manual installs only; store installs update themselves) ---------- */
  async function showUpdate(force) {
    let manual = true;
    try {
      const self = api.management && api.management.getSelf ? await api.management.getSelf() : null;
      manual = !self || self.installType !== "normal";
    } catch { /* assume manual */ }
    if (!manual) { $("updateCard").hidden = true; return; }
    $("updateStatus").textContent = "Checking for a new version…";
    const res = await api.runtime.sendMessage({ cmd: "checkUpdate", force }).catch(() => null);
    const info = res && res.ok ? res.value : null;
    const current = api.runtime.getManifest().version;
    if (info && info.version) {
      $("updateStatus").textContent = `NanaGuard ${info.version} is available (you have ${current}).`;
      $("dlChrome").href = info.chromeZip || info.page;
      $("dlFirefox").href = info.firefoxZip || info.page;
      $("dlPage").href = info.page || "https://github.com/r00tmebaby/NanaGuard/releases/latest";
      $("updateHow").hidden = false;
    } else {
      $("updateStatus").textContent = `You have the latest version (${current}).`;
      $("updateHow").hidden = true;
    }
  }
  $("checkUpdate").addEventListener("click", () => showUpdate(true));
  showUpdate(false);
  if (location.hash === "#update") $("updateCard").scrollIntoView();

  /* ---------- tabs ---------- */
  const tabs = [...document.querySelectorAll("[role=tab]")];
  const select = (name) => {
    for (const t of tabs) t.setAttribute("aria-selected", String(t.dataset.tab === name));
    for (const p of document.querySelectorAll("[data-panel]")) p.hidden = p.dataset.panel !== name;
    history.replaceState(null, "", "#" + name);
  };
  tabs.forEach((t) => t.addEventListener("click", () => select(t.dataset.tab)));
  const fromHash = () => {
    if (location.hash && tabs.some((t) => t.dataset.tab === location.hash.slice(1))) select(location.hash.slice(1));
  };
  fromHash();
  addEventListener("hashchange", fromHash);

  /* ---------- render ---------- */
  const chip = (text, label, onRemove) =>
    el("li", {}, el("span", { textContent: text }),
      el("button", { className: "btn", textContent: label, onclick: onRemove, ariaLabel: `${label} ${text}` }));

  let meta = null;
  let renderGen = 0;

  async function render() {
    const gen = ++renderGen;
    const { enabled, lists, smart, allowlist, blocklist, smartOff, guards, trusted } = await BLK.getSettings();
    const stats = await BLK.getLocal("stats", {});
    const hidden = await BLK.getLocal("hidden", {});
    const networks = await BLK.getLocal("learnedNetworks", {});
    const learnedSites = await BLK.getLocal("learnedSites", {});
    if (gen !== renderGen) return;

    const hasPerm = await api.permissions.contains(ALL_SITES);
    if (gen !== renderGen) return;
    $("perm").hidden = hasPerm;
    $("global").checked = enabled;
    $("smart").checked = smart;

    /* filter lists */
    $("lists").replaceChildren(
      ...BLK.CATEGORIES.map((cat) => {
        const info = BLK.CATEGORY_INFO[cat];
        const m = meta && meta.categories[cat];
        const counts = m
          ? [
              m.networkRules && `${m.networkRules.toLocaleString()} network rules`,
              m.dangerousHosts && `${m.dangerousHosts.toLocaleString()} dangerous sites`,
              (m.genericSelectors + m.siteSelectors) && `${(m.genericSelectors + m.siteSelectors).toLocaleString()} hiding rules`,
              m.scriptletHosts && `fixes for ${m.scriptletHosts.toLocaleString()} sites`,
            ].filter(Boolean).join(" · ")
          : "";
        const input = el("input", { type: "checkbox", checked: lists[cat], ariaLabel: info.title });
        input.addEventListener("change", async () => {
          await BLK.setList(cat, input.checked);
          await apply();
        });
        return el("div", { className: "list-row" },
          el("div", {}, el("b", { textContent: info.title }), el("div", { className: "muted small", textContent: info.desc }),
            el("div", { className: "muted small", textContent: counts })),
          el("label", { className: "switch" }, input, el("span")));
      })
    );

    /* scam & fraud guards */
    $("guards").replaceChildren(
      ...Object.entries(BLK.GUARD_INFO).map(([key, info]) => {
        const input = el("input", { type: "checkbox", checked: guards[key], ariaLabel: info.title });
        input.addEventListener("change", () => BLK.setGuard(key, input.checked));
        return el("div", { className: "list-row" },
          el("div", {}, el("b", { textContent: info.title }), el("div", { className: "muted small", textContent: info.desc })),
          el("label", { className: "switch" }, input, el("span")));
      })
    );
    $("trustedEmpty").hidden = trusted.length > 0;
    $("trusted").replaceChildren(
      ...trusted.map((d) =>
        chip(d, "Remove", async () => {
          const s = await BLK.getSettings();
          await api.storage.sync.set({ trusted: s.trusted.filter((x) => x !== d) });
        })
      )
    );

    /* smart */
    const netEntries = Object.entries(networks).sort((a, b) => (b[1].blocked - a[1].blocked) || b[1].sites.length - a[1].sites.length);
    $("networksEmpty").hidden = netEntries.length > 0;
    $("networks").replaceChildren(
      ...netEntries.slice(0, 200).map(([d, v]) => {
        const status = v.ignored ? "allowed by you" : v.blocked ? "blocked everywhere" : `seen on ${v.sites.length} of ${3} sites`;
        const btn = el("button", {
          className: "btn",
          textContent: v.blocked && !v.ignored ? "Allow" : v.ignored ? "Block" : "Forget",
          onclick: async () => {
            const n = await BLK.getLocal("learnedNetworks", {});
            if (!n[d]) return;
            if (v.blocked && !v.ignored) n[d].ignored = true;
            else if (v.ignored) n[d].ignored = false;
            else delete n[d];
            await api.storage.local.set({ learnedNetworks: n });
          },
        });
        return el("li", {}, el("span", {}, el("b", { textContent: d }), el("span", { className: "muted small", textContent: `  ${status}` })), btn);
      })
    );
    const nSites = Object.keys(learnedSites).length;
    $("learnedSitesCount").textContent = `${nSites} ${nSites === 1 ? "site" : "sites"}`;
    $("smartOffInfo").textContent = smartOff.length ? "Smart detection is off on:" : "";
    $("smartOff").replaceChildren(
      ...smartOff.map((d) =>
        chip(d, "Turn back on", async () => {
          const s = await BLK.getSettings();
          await api.storage.sync.set({ smartOff: s.smartOff.filter((x) => x !== d) });
        })
      )
    );

    $("allowEmpty").hidden = allowlist.length > 0;
    $("allowlist").replaceChildren(
      ...allowlist.map((d) =>
        chip(d, "Remove", async () => {
          await BLK.setSiteAllowed(d, false);
          await apply();
        })
      )
    );

    $("blockEmpty").hidden = blocklist.length > 0;
    $("blocklist").replaceChildren(
      ...blocklist.map((d) =>
        chip(d, "Unblock", async () => {
          await BLK.setSiteBlocked(d, false);
          await apply();
        })
      )
    );

    const sites = Object.keys(hidden).filter((h) => hidden[h].length).sort();
    $("hiddenEmpty").hidden = sites.length > 0;
    $("hidden").replaceChildren(
      ...sites.map((site) =>
        el("div", {},
          el("h3", { textContent: site }),
          el("div", { className: "list" },
            ...hidden[site].map((sel) =>
              el("div", { className: "item" },
                el("code", { textContent: sel }),
                el("button", {
                  className: "btn",
                  textContent: "Show again",
                  onclick: async () => {
                    const h = await BLK.getLocal("hidden", {});
                    h[site] = (h[site] || []).filter((s) => s !== sel);
                    if (!h[site].length) delete h[site];
                    await api.storage.local.set({ hidden: h });
                  },
                })
              )
            )
          )
        )
      )
    );

    $("stats").replaceChildren(
      ...Object.entries(BLK.STAT_LABELS).map(([k, label]) =>
        el("li", {}, el("span", { textContent: label }), el("b", { textContent: (stats[k] || 0).toLocaleString() }))
      ),
      el("li", {}, el("b", { textContent: "Total" }), el("b", { textContent: (stats.total || 0).toLocaleString() }))
    );
  }

  fetch(api.runtime.getURL("rules/meta.json"))
    .then((r) => r.json())
    .then((m) => {
      meta = m;
      const ok = m.sources.filter((s) => s.ok).map((s) => s.title);
      $("listsUpdated").textContent = `Lists compiled ${new Date(m.generated).toLocaleString()} from: ${ok.join(", ")}.`;
      render();
    })
    .catch(() => {});

  $("smart").addEventListener("change", async (e) => {
    await api.storage.sync.set({ smart: e.target.checked });
  });
  $("forget").addEventListener("click", async () => {
    if (!confirm("Forget everything smart detection has learned?")) return;
    await api.storage.local.set({ learnedSites: {}, learnedNetworks: {} });
    await api.storage.sync.set({ smartOff: [] });
  });

  /* ---------- forms ---------- */
  function domainForm(formId, inputId, errorId, save) {
    $(formId).addEventListener("submit", async (e) => {
      e.preventDefault();
      $(errorId).textContent = "";
      const domain = BLK.normalizeDomain($(inputId).value);
      if (!domain) {
        $(errorId).textContent = "That doesn't look like a website address.";
        return;
      }
      try {
        await save(domain);
      } catch (err) {
        $(errorId).textContent = err.message;
        return;
      }
      $(inputId).value = "";
      await apply();
    });
  }
  domainForm("allowForm", "allowDomain", "allowError", (d) => BLK.setSiteAllowed(d, true));
  domainForm("blockForm", "blockDomain", "blockError", (d) => BLK.setSiteBlocked(d, true));

  $("global").addEventListener("change", async (e) => {
    await api.storage.sync.set({ enabled: e.target.checked });
    await apply();
  });

  $("grant").addEventListener("click", async () => {
    if (await api.permissions.request(ALL_SITES)) await apply();
    render();
  });

  $("reset").addEventListener("click", async () => {
    if (!confirm("Reset all NanaGuard statistics?")) return;
    await api.storage.local.set({ stats: {} });
  });

  /* ---------- backup ---------- */
  $("export").addEventListener("click", async () => {
    const { allowlist, blocklist, lists, smart, smartOff, guards, trusted } = await BLK.getSettings();
    const hidden = await BLK.getLocal("hidden", {});
    const learnedSites = await BLK.getLocal("learnedSites", {});
    const learnedNetworks = await BLK.getLocal("learnedNetworks", {});
    // Password fingerprints are deliberately NOT exported.
    const data = { nanaguard: 1, allowlist, blocklist, lists, smart, smartOff, guards, trusted, hidden, learnedSites, learnedNetworks };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const a = el("a", { href: URL.createObjectURL(blob), download: "nanaguard-backup.json" });
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  $("import").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    e.target.value = "";
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (data.nanaguard !== 1 && data.kinguard !== 1) throw new Error("not a NanaGuard backup");
      const clean = (list) =>
        [...new Set((Array.isArray(list) ? list : []).map(BLK.normalizeDomain).filter(Boolean))]
          .sort()
          .slice(0, BLK.MAX_LIST);
      const selectorMap = (obj) => {
        const out = {};
        for (const [site, sels] of Object.entries(obj || {})) {
          const d = BLK.normalizeDomain(site);
          const list = (Array.isArray(sels) ? sels : []).filter((s) => typeof s === "string" && s.length <= 1000).slice(0, 100);
          if (d && list.length) out[d] = list;
        }
        return out;
      };
      const networks = {};
      for (const [d, v] of Object.entries(data.learnedNetworks || {})) {
        const host = BLK.normalizeDomain(d);
        if (!host || !v || !Array.isArray(v.sites)) continue;
        networks[host] = { sites: v.sites.map(BLK.normalizeDomain).filter(Boolean).slice(0, 10),
          blocked: !!v.blocked, ignored: !!v.ignored, first: Number(v.first) || Date.now() };
      }
      const lists = {};
      for (const c of BLK.CATEGORIES) lists[c] = data.lists ? data.lists[c] !== false : true;
      await api.storage.sync.set({
        allowlist: clean(data.allowlist), blocklist: clean(data.blocklist), smartOff: clean(data.smartOff),
        trusted: clean(data.trusted), lists, smart: data.smart !== false,
        guards: Object.fromEntries(Object.keys(BLK.GUARD_INFO).map((g) => [g, !data.guards || data.guards[g] !== false])),
      });
      await api.storage.local.set({ hidden: selectorMap(data.hidden), learnedSites: selectorMap(data.learnedSites), learnedNetworks: networks });
      await apply();
      $("backupMsg").textContent = "Backup loaded.";
    } catch (err) {
      $("backupMsg").textContent = `Couldn't load that file (${err.message}).`;
    }
  });

  let t;
  api.storage.onChanged.addListener(() => { clearTimeout(t); t = setTimeout(render, 250); });
  render();
})();
