const api = globalThis.browser ?? globalThis.chrome;
const LABELS = {
  "blocked-popup": "Popups blocked",
  "blocked-notification": "Notification prompts blocked",
  "blocked-dialog": "Scam alert loops stopped",
  "blocked-fullscreen": "Fullscreen hijacks blocked",
  "removed-overlay": "Fake warning screens removed",
  "closed-popunder-tab": "Popunder tabs closed",
};

async function render() {
  const { stats = {} } = await api.storage.local.get("stats");
  document.getElementById("stats").innerHTML = Object.entries(LABELS)
    .map(([k, label]) => `<li>${label}: <b>${stats[k] || 0}</b></li>`)
    .join("");
}

document.getElementById("reset").onclick = async () => {
  await api.storage.local.set({ stats: {} });
  api.action.setBadgeText({ text: "" });
  render();
};
render();
