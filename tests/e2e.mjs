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

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  if (req.url.startsWith("/frame")) return res.end("<body style='margin:0;background:#fc0'>ad creative</body>");
  res.end(PAGE.replace("PORT", String(server.address().port)));
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
  args: ["--no-first-run"], protocolTimeout: 30000,
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
      await blockify.learn({ url: site }, null, ["ads.unknown-network.test"]);
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
