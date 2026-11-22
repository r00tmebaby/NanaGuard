# Privacy Policy – Blockify

_Last updated: 22 November 2026_

Blockify does **not** collect, transmit, sell or share any personal data.

- **No tracking, analytics or telemetry.** Filter lists ship inside the extension and are updated through normal extension updates. The only request Blockify ever makes itself is the Wikidata lookup described below.
- **Browsing data stays on your device.** Blockify inspects pages only inside your browser to block ads, trackers, popups and scam tricks. Page content and addresses are never sent anywhere.
- **Smart detection learns locally.** When Blockify spots an ad, it stores that element's CSS selector for the site, plus the ad company's domain and the sites it was seen on (at most 10 per company), in local extension storage. This never leaves your computer. You can review or erase it under Settings → Smart.
- **Password alert keeps no passwords.** On important official sites (banks, email, PayPal…), Blockify stores only a salted, truncated SHA-256 *fingerprint* and the length of the password you type, locally. That's enough to recognise the same password typed on a different site, but not to recover it. Fingerprints are never exported or synced.
- **Official-website lookups.** When a login page names an organisation Blockify doesn't know, it sends only that **name** (e.g. "Monzo") to Wikidata to find the organisation's official website, and caches the answer for 30 days. It never sends the page address or your data.
- **"Check facts" only acts when you click.** It opens a new tab at Google, Google Fact Check Explorer or ChatGPT with the selected text or page title (and, for ChatGPT, the page address) as the question. Nothing is sent before you click.
- **What is stored, and where:**
  - Settings (on/off, filter lists, allowed/blocked sites) are kept in browser extension storage and may sync between *your own* devices through your browser account (Chrome Sync / Firefox Sync).
  - Block counters, hidden elements and learned data are kept in local extension storage only.
- **Permissions:** "Access to all websites" lets Blockify protect every page. `declarativeNetRequest` blocks ads, trackers and dangerous sites, `scripting` injects the protection and element-hiding code, `tabs` closes popup-ad tabs and shows per-tab counts, `activeTab` lets the toolbar popup count blocked requests on the current tab, and `storage` saves your settings.

Uninstalling Blockify deletes all of its stored data.
