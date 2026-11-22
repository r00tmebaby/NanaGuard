# Changelog

All notable changes to Kinguard. Filter-list refreshes published by the weekly CI job bump the patch version and are not listed individually.

## 2.4.0
- Renamed to **Kinguard** (previously Blockify / Hush).
- "Check facts" buttons now have icons and sit in one row, ordered Google, ChatGPT, News, Fact-check.
- YouTube "Check facts" buttons open their tab directly, so they keep working even if the extension is updated while the tab is open.
- README badges, MIT license and this changelog.

## 2.3.0
- Auto-closes "Subscribe / special offer / No thanks" popups (presses the site's own *No thanks*, or removes the box and unlocks scrolling). Boxes you open yourself are left alone.
- Added Fanboy's Annoyance list.
- Fact-check searches use short keywords instead of whole headlines; new **Other news sources** option (Google News).
- Page scans wait until the page has loaded and the browser is idle.

## 2.2.0
- YouTube: shows the creator's "altered or synthetic content" (AI) label clearly.
- Warns about deepfake scam videos: celebrity crypto giveaways, investment platforms, miracle cures.
- **Check facts**: right-click menu, buttons under YouTube videos, and an "Is this true?" card in the popup.

## 2.1.0
- Scam & fraud protection with per-feature switches: fake-website warnings (look-alike domains, homographs, Wikidata official-site check), password-reuse alert, fake "I'm not a robot / Win+R" clipboard guard, scam-request warnings (gift cards, crypto, remote access, fake support numbers).
- Trusted-sites list.
- Automatic GitHub Releases on every version bump.

## 2.0.0
- New engine: EasyList, uBlock filters, EasyPrivacy, Peter Lowe, URLhaus, phishing and cookie lists compiled to native browser rules (uBlock/ABP syntax, scriptlets, procedural filters, stand-in scripts, tracking-tag stripping).
- Smart ad detection that learns per site and blocks ad networks seen on 3+ sites.
- Warning page for malware and phishing sites.

## 1.x
- Popup and scam-trick shield, EasyList ad blocking, element picker, blocked/allowed sites, YouTube ad removal, counters.
