# Grandma Shield 🛡️

A small Manifest V3 browser extension that stops the stuff that tricks non-technical users:

| Threat | What the extension does |
|---|---|
| Popups / popunders | `window.open` only works right after a real click, one window per click |
| "Click Allow to continue" notification spam | Notification permission always reports `denied` |
| Fake "YOUR PC IS INFECTED" alert loops | After 2 dialogs, further `alert/confirm/prompt` are swallowed |
| "Are you sure you want to leave?" traps | `beforeunload` handlers are ignored |
| Fullscreen fake-antivirus screens | `requestFullscreen` is blocked |
| Full-page scam overlays | Fixed overlays containing scam wording are removed |
| Known popunder ad networks | Blocked at network level (`rules/blocklist.json`) |

## Browsers

Works on **Chrome, Edge, Brave, Opera** (Chromium 121+) and **Firefox 128+** from the same folder.

### Install for testing
- **Chrome / Edge / Brave:** open `chrome://extensions` (or `edge://extensions`), enable *Developer mode*, click *Load unpacked*, pick this folder.
- **Firefox:** open `about:debugging#/runtime/this-firefox` → *Load Temporary Add-on* → pick `manifest.json`.
  For a permanent install, sign it for free at addons.mozilla.org ("unlisted" distribution).

## Project layout
```
manifest.json         extension config (cross-browser)
src/inject.js         page-context overrides (popups, notifications, dialogs)
src/overlay.js        removes scam overlays, relays events
src/background.js     badge counter, closes popunder tabs
src/popup.html/.js    toolbar popup with stats
rules/blocklist.json  network block rules
```

## Honest limits
This blocks browser nuisances; it is **not antivirus**. For grandma's laptop also:
1. Install **uBlock Origin** (Firefox) or **uBlock Origin Lite** (Chrome/Edge) alongside this.
2. Keep **Windows Security / Defender** on and Windows Update current.
3. In browser settings → Site settings → Notifications, set **"Don't allow sites to send notifications"** and remove any sites already allowed — this is the #1 source of "virus" popups.
4. Make her Windows account a **standard (non-admin) user**.

## Ideas / TODO
- Options page with a per-site allowlist (online banking etc.)
- Import EasyList / uBlock popup filters into DNR rules
- "Big red button" to close the current tab and reset the browser
