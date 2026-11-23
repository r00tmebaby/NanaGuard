"use strict";
(async () => {
  const $ = (id) => document.getElementById(id);
  const url = location.hash.slice(1);
  const host = BLK.hostFromUrl(url);
  $("host").textContent = host || "";

  const res = await api.runtime.sendMessage({ cmd: "blockedInfo", url }).catch(() => null);
  const info = res && res.ok ? res.value : { reason: "danger" };

  if (info.reason === "user") {
    document.body.classList.add("user");
    document.title = "Blocked by you – NanaGuard";
    $("title").textContent = "You blocked this site";
    $("lead").textContent = "This website is on your Blocked sites list, so NanaGuard won't open it.";
    $("advText").textContent = "To open it again, remove it from Blocked sites in Settings.";
    $("proceed").hidden = true;
    $("settings").hidden = false;
  }

  $("back").addEventListener("click", () => {
    if (history.length > 1) history.back();
    else location.href = "about:blank";
  });
  $("proceed").addEventListener("click", async () => {
    if (!host) return;
    await api.runtime.sendMessage({ cmd: "proceed", url });
  });
  $("settings").addEventListener("click", (e) => {
    e.preventDefault();
    api.runtime.openOptionsPage();
  });
})();
