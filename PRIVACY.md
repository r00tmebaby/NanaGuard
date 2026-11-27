# Privacy Policy – NanaGuard

_Last updated: 22 November 2026_

NanaGuard does **not** collect, transmit, sell or share any personal data.

- **No tracking, analytics or telemetry.** Filter lists ship inside the extension and are updated through normal extension updates. The only request NanaGuard ever makes itself is the Wikidata lookup described below.
- **Browsing data stays on your device.** NanaGuard inspects pages only inside your browser to block ads, trackers, popups and scam tricks. Page content and addresses are never sent anywhere.
- **Smart detection learns locally.** When NanaGuard spots an ad, it stores that element's CSS selector for the site, plus the ad company's domain and the sites it was seen on (at most 10 per company), in local extension storage. This never leaves your computer. You can review or erase it under Settings → Smart.
- **Password alert keeps no passwords.** On important official sites (banks, email, PayPal…), NanaGuard stores only a salted, truncated SHA-256 *fingerprint* and the length of the password you type, locally. That's enough to recognise the same password typed on a different site, but not to recover it. Fingerprints are never exported or synced.
- **Official-website lookups.** When a login page names an organisation NanaGuard doesn't know, it sends only that **name** (e.g. "Monzo") to Wikidata to find the organisation's official website, and caches the answer for 30 days. It never sends the page address or your data.
- **"Real or AI?" checks run on your computer.** To look for AI watermarks, NanaGuard takes a screenshot of the video area of the active tab and reads its corners with a text-recognition engine bundled inside the extension. Screenshots are never stored or sent anywhere. To check an image you right-click, NanaGuard downloads that image from its own address and reads its metadata locally.
- **"Find where this came from" only acts when you click.** It sends the current video frame (or the image address you right-clicked) to Google Lens in a new tab, so you can see where else it appears.
- **Update check (manual installs only).** If you installed NanaGuard yourself rather than from a browser store, it asks GitHub (api.github.com) at most once a day which version is the latest, so it can tell you when a new one is available. No information about you or your browsing is included. Store installs never do this; the store updates them.
- **"Check facts" only acts when you click.** It opens a new tab at Google, Google News, Google Fact Check Explorer or ChatGPT with the selected text or page title (and, for ChatGPT, the page address) as the question. Nothing is sent before you click.
- **Translating a fact check stays on your computer.** If you choose a "Search sources in" language, Chrome's built-in translator translates the text on your device before the search opens; NanaGuard sends the text to no translation service. The first time, Chrome downloads a language pack from Google after you click "Download and search".
- **What is stored, and where:**
  - Settings (on/off, filter lists, allowed/blocked sites) are kept in browser extension storage and may sync between *your own* devices through your browser account (Chrome Sync / Firefox Sync).
  - Block counters, hidden elements and learned data are kept in local extension storage only.
- **Permissions:** "Access to all websites" lets NanaGuard protect every page. `declarativeNetRequest` blocks ads, trackers and dangerous sites, `scripting` injects the protection and element-hiding code, `tabs` closes popup-ad tabs and shows per-tab counts, `activeTab` lets the toolbar popup count blocked requests on the current tab, `contextMenus` adds the right-click "Check facts" menu, and `storage` saves your settings.

Uninstalling NanaGuard deletes all of its stored data.
