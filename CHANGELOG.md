# Changelog

All notable changes to KinGuard. Filter-list refreshes published by the weekly CI job bump the patch version and are not listed individually.

## 2.7.0: Is it real or AI?
New free checks that run on your own computer (no paid services):
- **AI watermarks in videos:** reads the corners of the video you're watching for AI generator watermarks (Sora, Veo, Kling, Hailuo, Meta AI, Gemini…) with a text-recognition engine bundled in the extension (Tesseract, Apache-2.0). Nothing is uploaded.
- **What viewers say:** many comments saying "AI" or "fake" now count as a signal.
- **Images:** right-click → *Is this image real or AI?* reads Content Credentials / IPTC "made with AI" metadata and AI-generator settings.
- **Where did this come from?** One click sends the current video frame (or a right-clicked image) to Google Lens in a new tab.
- The AI check works on YouTube (chip under the video) and on any site with video (toolbar popup).
- Frame capture uses the real screenshot scale, so it works with browser zoom and high-resolution screens.
- README and store texts now lead with "Is it real or AI?".

## 2.6.1
- **Genuine bank and sign-in popups work again.** A real click may now open one window within 5 seconds (same as Chrome's own popup blocker), so bank 3-D Secure checks and "Sign in with…" windows that open after a server round-trip aren't blocked.
- "Pay with bank" / "Sign in" links that don't navigate anywhere (`href="#"`, `javascript:`) are treated as buttons, so their window is no longer mistaken for a popunder.

## 2.6.0
- **AI-content detection beyond platform labels.** KinGuard now reads the signals uploaders leave: AI generator names (Sora, Veo, Seedance, Kling, Runway, Midjourney, HeyGen, ElevenLabs, Suno … 35+ tools, with care for everyday words like "runway" or "Sora the cat"), phrases such as "AI-generated" or "made with AI", AI hashtags, and platform labels (YouTube, TikTok, Meta).
- **YouTube chip only when there is a signal:** "AI-generated (labelled)", "Likely AI-generated", "Possibly AI" or "Possible deepfake scam", with the reasons in its tooltip. The meaningless "none declared" chip is gone.
- **Popup "AI check" on any site with video** (YouTube, TikTok, Instagram, Facebook, news sites): shows why a video is probably AI-made.
- Fewer page functions wrapped (`appendChild`/`append…`, `dispatchEvent` now only on links), so websites' own console warnings aren't attributed to KinGuard.
- Repaired a text-encoding corruption in the scam-shield script, and CI now fails on any garbled encoding.

## 2.5.1
- **AI status chip under every YouTube video:** grey "AI label: none declared", amber "AI-generated (creator says)" or red "Possible deepfake scam", so you can always see the check ran.
- AI disclosure is now also read from YouTube's page data when you click from video to video, and from the on-player label used for photorealistic AI.
- Fixed a regression where the "How this content was made" section in the description was skipped.

## 2.5.0
- **Popunders on link clicks blocked:** clicking a normal link no longer lets the page open an ad site in a new tab as well. The link itself works as usual.
- **Tab-unders fixed:** when a site opens the page you wanted in a new tab and turns your current tab into an ad, KinGuard closes the ad tab and switches you to the real page.
- **Site-family filter rules:** uBlock rules written for every version of a site (`youporn.*`, `pornhub.*`, …) are now used instead of skipped. Fixes for ~18,000 more sites, including anti-adblock detectors ("ADBLOCK DETECTED" messages).

## 2.4.4
- Name is now written **KinGuard** everywhere; repository renamed to `r00tmebaby/KinGuard` and tagged with topics so it is easier to find.

## 2.4.3
- **Fixed a ~6 second browser freeze when KinGuard was installed, updated or reloaded.** Chrome was saving ~59,000 site-fix address patterns to its preferences file. Site fixes are now registered in memory (redone in ~0.1 s at each browser start) and use half as many patterns. Core protection registers first, then site fixes load lazily in small batches. Setup went from 6.6 s to 0.6 s; the worst freeze of an open tab from 6 s to 12 ms.

## 2.4.2
- No longer hooks `innerHTML`/`insertAdjacentHTML`. Websites' own console warnings (e.g. Google's "speculation rule set … will be ignored") were being shown as coming from KinGuard. Protection is unchanged: hidden-iframe popup tricks are still caught via `contentWindow`.
- Reading `contentWindow` / `contentDocument` / `Notification.permission` on the wrong kind of object (common in sites' feature detection) no longer throws "Illegal invocation" inside KinGuard's code, which Chrome listed as a KinGuard error.

## 2.4.1
Hardening pass by the agent team (2 senior reviewers, 10 file-scoped fixes, each reviewed).
- Fewer false alarms: no "fake Binance" on `finance.*` logins, no "fake Microsoft" on company Outlook webmail or `*.co.uk` subdomains, higher bar for scam banners on shop checkout pages.
- Navigation in the same tab (`window.open(url, "_self")`, used by bank/payment redirects) is no longer blocked. Fullscreen works after a real click (galleries, readers).
- "Unsaved changes" prompts are kept when you typed in webmail/editor iframes or pasted text.
- The fake-virus-screen remover no longer removes whole legitimate pages.
- Smart learning never learns shared CDNs/hosting as ad networks.
- Warning page no longer breaks on URLs containing `%`.
- Password alert: fixed a first-run race that could make it miss reused passwords.
- Procedural filters: `:matches-css()` works, descendant selectors are kept, re-runs are bounded.
- YouTube: no repeated scans of multi-MB page scripts; news videos *about* scams aren't flagged.
- Filter compiler: aborts instead of overwriting rules when a list download fails; fixed `$`-pattern corruption in site-fix bundles.
- Settings page: no render races; site lists capped at 300 entries to fit browser sync limits.

## 2.4.0
- Renamed to **KinGuard** (previously Blockify / Hush).
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
