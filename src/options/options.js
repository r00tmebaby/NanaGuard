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

  /* ---------- tabs ---------- */
  const tabs = [...document.querySelectorAll("[role=tab]")];
  const select = (name) => {
    for (const t of tabs) t.setAttribute("aria-selected", String(t.dataset.tab === name));
    for (const p of document.querySelectorAll("[data-panel]")) p.hidden = p.dataset.panel !== name;
    history.replaceState(null, "", "#" + name);
  };
  tabs.forEach((t) => t.addEventListener("click", () => select(t.dataset.tab)));
  if (location.hash && tabs.some((t) => t.dataset.tab === location.hash.slice(1))) select(location.hash.slice(1));

  /* ---------- render ---------- */
  const chip = (text, label, onRemove) =>
    el("li", {}, el("span", { textContent: text }),
      el("button", { className: "btn", textContent: label, onclick: onRemove, ariaLabel: `${label} ${text}` }));

  async function render() {
    const { enabled, ads, allowlist, blocklist } = await HUSH.getSettings();
    const { stats = {} } = await api.storage.local.get("stats");
    const hidden = await HUSH.getHidden();

    $("perm").hidden = await api.permissions.contains(ALL_SITES);
    $("global").checked = enabled;
    $("ads").checked = ads;

    $("allowEmpty").hidden = allowlist.length > 0;
    $("allowlist").replaceChildren(
      ...allowlist.map((d) =>
        chip(d, "Remove", async () => {
          await HUSH.setSiteAllowed(d, false);
          await apply();
        })
      )
    );

    $("blockEmpty").hidden = blocklist.length > 0;
    $("blocklist").replaceChildren(
      ...blocklist.map((d) =>
        chip(d, "Unblock", async () => {
          await HUSH.setSiteBlocked(d, false);
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
                    const h = await HUSH.getHidden();
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
      ...Object.entries(HUSH.STAT_LABELS).map(([k, label]) =>
        el("li", {}, el("span", { textContent: label }), el("b", { textContent: (stats[k] || 0).toLocaleString() }))
      ),
      el("li", {}, el("b", { textContent: "Total" }), el("b", { textContent: (stats.total || 0).toLocaleString() }))
    );
  }

  fetch(api.runtime.getURL("rules/meta.json"))
    .then((r) => r.json())
    .then((m) => {
      const v = m.version.match(/^(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})$/);
      const rows = [
        ["Filter list", m.list],
        ["List version", v ? `${v[1]}-${v[2]}-${v[3]} ${v[4]}:${v[5]} UTC` : m.version],
        ["Network rules", m.networkRules.toLocaleString() + " (compacted)"],
        ["Banner-hiding rules", (m.genericSelectors + m.siteSelectors).toLocaleString()],
        ["Popup ad hosts", m.popupHosts.toLocaleString()],
      ];
      $("meta").replaceChildren(...rows.flatMap(([k, v2]) => [el("dt", { textContent: k }), el("dd", { textContent: v2 })]));
    })
    .catch(() => {});

  /* ---------- forms ---------- */
  function domainForm(formId, inputId, errorId, save) {
    $(formId).addEventListener("submit", async (e) => {
      e.preventDefault();
      $(errorId).textContent = "";
      const domain = HUSH.normalizeDomain($(inputId).value);
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
  domainForm("allowForm", "allowDomain", "allowError", (d) => HUSH.setSiteAllowed(d, true));
  domainForm("blockForm", "blockDomain", "blockError", (d) => HUSH.setSiteBlocked(d, true));

  $("global").addEventListener("change", async (e) => {
    await api.storage.sync.set({ enabled: e.target.checked });
    await apply();
  });
  $("ads").addEventListener("change", async (e) => {
    await api.storage.sync.set({ ads: e.target.checked });
    await apply();
  });

  $("grant").addEventListener("click", async () => {
    if (await api.permissions.request(ALL_SITES)) await apply();
    render();
  });

  $("reset").addEventListener("click", async () => {
    if (!confirm("Reset all Hush statistics?")) return;
    await api.storage.local.set({ stats: {} });
  });

  /* ---------- backup ---------- */
  $("export").addEventListener("click", async () => {
    const { allowlist, blocklist } = await HUSH.getSettings();
    const hidden = await HUSH.getHidden();
    const blob = new Blob([JSON.stringify({ hush: 1, allowlist, blocklist, hidden }, null, 2)], { type: "application/json" });
    const a = el("a", { href: URL.createObjectURL(blob), download: "hush-backup.json" });
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  $("import").addEventListener("change", async (e) => {
    const file = e.target.files[0];
    e.target.value = "";
    if (!file) return;
    try {
      const data = JSON.parse(await file.text());
      if (data.hush !== 1) throw new Error("not a Hush backup");
      const clean = (list) =>
        [...new Set((Array.isArray(list) ? list : []).map(HUSH.normalizeDomain).filter(Boolean))]
          .sort()
          .slice(0, HUSH.MAX_ALLOWLIST);
      const hidden = {};
      for (const [site, sels] of Object.entries(data.hidden || {})) {
        const d = HUSH.normalizeDomain(site);
        const list = (Array.isArray(sels) ? sels : []).filter((s) => typeof s === "string" && s.length <= 1000);
        if (d && list.length) hidden[d] = list;
      }
      await api.storage.sync.set({ allowlist: clean(data.allowlist), blocklist: clean(data.blocklist) });
      await api.storage.local.set({ hidden });
      await apply();
      $("backupMsg").textContent = "Backup loaded.";
    } catch (err) {
      $("backupMsg").textContent = `Couldn't load that file (${err.message}).`;
    }
  });

  api.storage.onChanged.addListener(render);
  render();
})();
