# Chrome Web Store listing: copy and paste

Upload: `kinguard-chrome-<version>.zip` from the latest GitHub Release.

## Store listing tab

**Name:** KinGuard – Ad, Popup & Scam Blocker *(comes from the manifest)*

**Summary** (max 132 characters):
> Blocks ads, popups and trackers, and warns about fake websites, deepfake videos and online scams. Free, private, no account.

**Category:** Privacy & Security (alternative: Productivity)
**Language:** English

**Description:**
```
KinGuard keeps the internet calm and safe, especially for people who aren't tech-savvy, like parents and grandparents. Install it once and it works on its own.

BLOCKS ADS, TRACKERS AND POPUPS
• Ads, banners, trackers and popup windows (EasyList, uBlock filters, EasyPrivacy and more)
• YouTube ads, cookie banners and "Subscribe now / No thanks" popups
• Popunders and "tab-unders" that open ad tabs when you click a link

STOPS SCAMS BEFORE THEY HAPPEN
• Warns you on fake websites pretending to be PayPal, your bank, Amazon and more
• Warns if you type your bank or email password on the wrong website
• Blocks fake "I'm not a robot – press Windows + R" tricks that install viruses
• Flags pages asking for gift cards, Bitcoin, remote access or "support" phone calls
• Shows a clear warning before opening 18,000+ known malware and phishing sites
• Stops fake "Your PC is infected" screens, alert loops and notification spam

SPOTS AI FAKES AND CHECKS FACTS
• Flags AI-generated and deepfake scam videos (fake celebrity giveaways, miracle cures)
• "Check facts" in one click: Google, ChatGPT, other news sources or fact-checkers

LEARNS AS YOU BROWSE
• Spots ads no list knows about and remembers them
• Blocks an ad company everywhere once it shows up on 3 different sites

PRIVATE BY DESIGN
• No account, no tracking, no data collection. Everything stays on your computer.
• Every protection can be switched on or off in Settings.

KinGuard is a safety layer, not antivirus: keep Windows Security turned on.
```

**Graphics** (all in this folder):
- Store icon 128×128: `icons/icon-128.png` (repo root)
- Screenshots 1280×800: `screenshot-1.png` … `screenshot-5.png`
- Small promo tile 440×280: `promo-small-440x280.png`
- Marquee 1400×560 (optional): `marquee-1400x560.png`

## Privacy practices tab

**Single purpose:**
> Protect users while browsing by blocking ads, popups and trackers, and warning them about fraudulent websites and online scams.

**Permission justifications:**
| Permission | Justification |
|---|---|
| Host permission (all sites) | Needed to block ads and popups and to detect fake websites and scam pages on every site the user visits. |
| declarativeNetRequest | Blocks ad, tracker, malware and phishing requests using the browser's built-in rule engine. |
| scripting | Injects the page protection (popup/scam blocking) and element-hiding code into web pages. |
| tabs | Closes popup-ad tabs, keeps the real page when an ad replaces it, and shows per-tab block counts. |
| activeTab | Lets the toolbar popup read the current page (blocked counts, selected text for "Check facts", AI check). |
| contextMenus | Adds the right-click "Check facts with KinGuard" menu. |
| storage | Saves the user's settings, lists and counters locally. |

**Remote code:** No, I am not using remote code. *(Filter lists are bundled in the package. The only network request is a Wikidata lookup that returns data, not code.)*

**Data usage:** tick **none** of the data types. Then certify all three statements:
- I do not sell or transfer user data to third parties…
- I do not use or transfer user data for purposes unrelated to the item's single purpose
- I do not use or transfer user data to determine creditworthiness or for lending purposes

**Privacy policy URL:** must be a **public** web page with the contents of `PRIVACY.md`. The GitHub repo is private, so use a public link (see README "Publishing").

## Distribution tab
- Visibility: **Public** (or *Unlisted* to share only by link while testing)
- Regions: All regions
