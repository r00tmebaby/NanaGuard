# Blockify

**Ads, trackers, popups and scams, blocked automatically. Blockify also learns new ads as you browse.**

Blockify is a privacy-first browser extension for **Chrome, Edge, Brave, Opera** (Chromium 116+) and **Firefox 128+**, built on a single Manifest V3 codebase. It combines the community's best filter lists, a uBlock-compatible rule engine, and a smart detector that recognises ads the way a person does.

---

## How it blocks

Blockify works in layers. Each one catches what the one before it missed.

| Layer | What it does | Powered by |
|---|---|---|
| **1. Network** | Stops ads, trackers and malware before they download. | ~21k compiled browser rules from EasyList, uBlock filters, EasyPrivacy, Peter Lowe, URLhaus, phishing and cookie lists |
| **2. Stand-ins** | Replaces ad scripts that sites depend on (Google GPT, AdSense, Analytics, Tag Manager, Amazon…) with harmless stand-ins, so pages don't break. | `resources/` |
| **3. Banner hiding** | Hides ad boxes, cookie banners and "sponsored" blocks with ~54k element rules, including smart rules like *"hide cards that contain the text Sponsored"*. | CSS + procedural engine (`:has-text`, `:upward`, `:xpath`, `:matches-css`…) |
| **4. Site fixes** | Defuses anti-adblock walls and ad loaders on ~29k sites with targeted page fixes. | Scriptlet engine (uBlock/ABP compatible: `set-constant`, `abort-on-property-read`, `json-prune`, `no-fetch-if`…) |
| **5. Smart detection** | Finds ads **no list knows about** and learns from them (see below). | `src/content/smart.js` |
| **6. Scam shield** | Stops popups and popunders, "click Allow" notification spam, alert loops, fake virus screens, fullscreen lock screens and back-button traps. | `src/content/main-world.js` |
| **7. Danger page** | Known malware and phishing sites show a clear warning instead of loading (18k+ hosts). | `src/blocked/` |
| **8. Clean links** | Strips tracking tags (`utm_*`, `fbclid`, `gclid`, …) from addresses. | URL rewrite rules |
| **YouTube** | Removes ad slots from the player data, auto-skips anything that slips through, and hides feed ads. | `src/content/youtube.js` |

## 🧠 Learns as you go

People spot ads instantly: an **"Ad"** or **"Sponsored"** label, the little **AdChoices ⓘ** icon, a box at a **standard banner size** (300×250, 728×90…), or content served by **another company's server**. Blockify scores every page on those same cues:

| Cue | Points |
|---|---|
| "Ad" / "Sponsored" / "Anzeige" / "Publicidad" / "Реклама" … label (30+ languages) | +3 |
| AdChoices marker, ad-click link (doubleclick, `/aclk?` …) or ad-iframe id | +3 |
| Third-party iframe, ad-ish id/class (`ad-slot`, `sponsor`, `dfp`, `taboola` …) | +2 |
| Standard ad size | +1 |

A box scoring **5 or more** is hidden, as long as it isn't real content (headlines, articles, forms and videos are never touched). Then Blockify **learns**:

1. **Per site:** the ad's position is remembered, so next visit it's hidden instantly, before it even renders.
2. **Across the web:** Blockify records which ad company served it. When the **same company shows up on 3 different sites**, its domain is blocked **everywhere**, with no list update needed.
3. **You stay in control:** *Settings → Smart* lists every learned network (with **Allow** / **Forget**). The popup's **Undo** turns smart detection off for a site and forgets what it learned there.
4. **Private:** everything learned stays on your computer.

The filter lists themselves also update every week. CI recompiles them and publishes a new release automatically.

## You decide

- **Hide an ad on this page:** click the toolbar icon, click the banner, and confirm. It stays gone on that site.
- **Block site:** never open a website again. You get a friendly "You blocked this site" page instead.
- **Per-site switch:** turn Blockify off for a site that breaks, such as a bank's payment window.
- **Per-list switches:** Ads, Trackers, Malware & phishing, and Cookie banners & annoyances.
- **Backup:** export and import all your lists and learned data.

## Install

**Chrome / Edge / Brave / Opera:** go to `chrome://extensions`, turn on **Developer mode**, click **Load unpacked**, then select this folder.
**Firefox:** go to `about:debugging#/runtime/this-firefox`, click **Load Temporary Add-on**, then select `manifest.json`.

Then open [`tests/playground.html`](tests/playground.html) to watch each protection work. (For `file://` in Chrome, enable *Allow access to file URLs* in the extension's details.)

### Other browsers
| Browser | Status |
|---|---|
| Chrome, Edge, Brave, Opera, Vivaldi | ✅ Supported (same build) |
| Firefox (desktop & Android) | ✅ Supported (firefox build) |
| Safari (macOS / iOS) | 🟡 Possible. Safari supports MV3 web extensions, but it needs a Mac with Xcode (`xcrun safari-web-extension-converter`) and an Apple Developer account to ship. Not built yet. |
| Internet Explorer | ❌ Retired by Microsoft in 2022, with no extension support. Use Edge, which runs the Chrome build. |

## Development

```bash
npm run filters      # download & compile all lists → rules/
npm run check        # syntax, file refs, rule validation, scriptlet shards
npm install && npm run test:e2e   # 43 end-to-end checks in real Chrome (CHROME_PATH on mac/linux)
npm run build        # dist/blockify-chrome-<v>.zip, dist/blockify-firefox-<v>.zip
```

### How the lists are compiled (`scripts/update-filters.mjs`)
- Follows `!#include` and evaluates `!#if` directives the way uBlock Origin Lite does.
- Network filters become `declarativeNetRequest` rules: options like `$3p`, `$domain`, `$to`, `$denyallow`, `$important`, `$redirect`, `$removeparam` and `$badfilter` are supported. Plain-domain filters are packed into `requestDomains` rules (e.g. 51k EasyList filters → 3.8k rules).
- Element-hiding, `:style()` and procedural filters are split into generic CSS, per-site data and JS-evaluated filters.
- Scriptlets (`##+js(...)`, ABP `#$#`) are bundled with the runtime and **sharded by host** (~80 KB each), so each page parses only what can apply to it.
- Anything that can't be expressed safely is skipped and counted in `rules/meta.json`.

### CI (`.github/workflows/release.yml`)
Every push runs the checks, builds both packages and lints Firefox with `web-ext`. **Every Monday**, CI downloads all the lists. If anything changed, it bumps the version, commits, tags and publishes a GitHub Release with the store zips.

### Publishing
Chrome Web Store (one-time $5) · Edge Add-ons (free, same zip) · Firefox AMO (free). Use [`PRIVACY.md`](PRIVACY.md) as the privacy policy.

## Architecture

```
manifest.json                   cross-browser MV3 manifest
src/background.js               rules, script registration, cosmetics, learning, counters
src/common.js                   shared settings + helpers (BLK)
src/content/main-world.js       scam shield (page context)
src/content/isolated.js         event relay, cosmetics, overlay remover
src/content/procedural.js       :has-text / :upward / :xpath … engine
src/content/smart.js            smart ad detector
src/content/scriptlets-runtime.js   scriptlet engine (bundled into rules/scriptlets/*)
src/content/youtube.js/.css     YouTube ad removal
src/content/picker.js           "Hide an ad on this page"
src/popup, src/options, src/blocked   UI
resources/                      harmless stand-ins for blocked ad scripts
rules/                          generated (do not edit)
scripts/                        update-filters, check, build, make-icons
tests/                          e2e suite + manual playground
```

## Limits

Blockify is a browser protection layer, **not antivirus**. Keep Windows Security / Defender and updates on. Also clear any sites you already allowed under *Site settings → Notifications*, because those were granted before Blockify was installed.
