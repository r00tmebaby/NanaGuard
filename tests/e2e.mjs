// End-to-end test in a real Chrome. Run: npm install && npm run test:e2e
// Set CHROME_PATH to the Chrome binary on macOS/Linux.
import puppeteer from "puppeteer-core";
import http from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const EXT = process.argv[2] || path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CHROME = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const results = [];
const check = (name, ok, info = "") => {
  results.push({ name, ok });
  console.log(`${ok ? "PASS" : "FAIL"}  ${name}${info ? "  — " + info : ""}`);
};

const PAGE = `<!doctype html><html><head><title>t</title></head><body>
<div id="AD_300" style="width:300px;height:250px;background:red">generic ad</div>
<div class="sidebar-promo" id="promo" style="width:200px;height:50px">my banner</div>
<button id="btn">Open</button>
<p id="text">plain text</p>
</body></html>`;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end(PAGE);
}).listen(0);
const port = server.address().port;
const URL1 = `http://localhost:${port}/`;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: true,
  pipe: true,
  enableExtensions: true,
  args: ["--no-first-run"],
  protocolTimeout: 20000,
});
const extId = await browser.installExtension(EXT);
check("extension installs", !!extId, extId);

const sw = await browser.waitForTarget((t) => t.type() === "service_worker" && t.url().includes(extId));
const worker = await sw.worker();
const swErrors = [];
worker.on("console", (m) => m.type() === "error" && swErrors.push(m.text()));
await new Promise((r) => setTimeout(r, 1500));

const registered = await worker.evaluate(async () =>
  (await chrome.scripting.getRegisteredContentScripts()).map((s) => s.id)
);
check("page + cosmetic scripts registered", registered.includes("hush-main") && registered.includes("hush-cosmetic"), registered.join(","));
const rulesets = await worker.evaluate(() => chrome.declarativeNetRequest.getEnabledRulesets());
check("rulesets enabled", rulesets.includes("blocklist") && rulesets.includes("easylist"), rulesets.join(","));

const page = await browser.newPage();
let dialogs = 0;
page.on("dialog", async (d) => { dialogs++; await d.dismiss(); });
await page.goto(URL1, { waitUntil: "load" });
await new Promise((r) => setTimeout(r, 800));

// Popups
check("window.open without click is blocked", (await page.evaluate(() => window.open("https://example.com") === null)));
const iframeBypass = await page.evaluate(() => {
  const f = document.createElement("iframe");
  document.body.appendChild(f);
  return f.contentWindow.open("https://example.com") === null;
});
check("about:blank iframe bypass is blocked", iframeBypass);
await page.evaluate(() => {
  const a = document.createElement("a");
  a.href = "https://example.com"; a.target = "_blank";
  document.body.appendChild(a);
  a.click();
});
await new Promise((r) => setTimeout(r, 500));
const pagesAfterSynthetic = (await browser.pages()).length;
check("synthetic target=_blank click opens nothing", pagesAfterSynthetic === 2, `${pagesAfterSynthetic} pages`);

await page.evaluate(() => {
  document.getElementById("btn").onclick = () => { window.__opened = window.open("about:blank") !== null; window.__second = window.open("about:blank") !== null; };
});
await page.click("#btn");
const [opened, second] = await page.evaluate(() => [window.__opened, window.__second]);
check("real button click may open ONE window", opened === true && second === false, `first=${opened} second=${second}`);
for (const p of await browser.pages()) if (p !== page) await p.close();
await page.bringToFront();

await page.evaluate(() => { document.body.onclick = () => { window.__bodyOpen = window.open("about:blank") !== null; }; });
await page.click("#text");
check("click on plain text can't open a window", (await page.evaluate(() => window.__bodyOpen)) === false);

// toString disguise
check("window.open looks native", await page.evaluate(() => /\[native code\]/.test(window.open.toString())));

// Notifications
check("notification prompt denied", (await page.evaluate(() => Notification.requestPermission())) === "denied");

// Dialog loop
await page.evaluate(() => { for (let i = 0; i < 6; i++) alert("YOUR PC IS INFECTED " + i); });
check("alert loop stopped after 2", dialogs === 2, `${dialogs} dialogs shown`);

// Fullscreen
const fs = await page.evaluate(() => document.body.requestFullscreen().then(() => "allowed", (e) => e.name));
check("fullscreen hijack blocked", fs === "NotAllowedError", fs);

// History flood
const histLen = await page.evaluate(() => { const s = history.length; for (let i = 0; i < 40; i++) history.pushState({}, "", "#" + i); return history.length - s; });
check("back-button trap limited", histLen <= 11, `${histLen} entries added`);

// Cosmetic generic
check("EasyList generic banner hidden", (await page.$eval("#AD_300", (e) => getComputedStyle(e).display)) === "none");
check("normal content still visible", (await page.$eval("#text", (e) => getComputedStyle(e).display)) === "block");

// Network blocking (needs internet)
const net = await page.evaluate(() =>
  fetch("https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", { mode: "no-cors" }).then(() => "loaded", () => "blocked")
);
check("ad script blocked at network level", net === "blocked", net);

// Popup counters for the current page
await page.bringToFront();
await worker.evaluate(() => chrome.action.openPopup());
const popupTarget = await browser.waitForTarget((t) => t.url().endsWith("popup/popup.html"), { timeout: 5000 }).catch(() => null);
if (popupTarget) {
  const popup = await popupTarget.asPage();
  await new Promise((r) => setTimeout(r, 1500));
  const counts = await popup.evaluate(() => ({
    ads: document.getElementById("adsCount").textContent,
    hidden: document.getElementById("hiddenCount").textContent,
    tricks: document.getElementById("tabCount").textContent,
  }));
  check("popup shows banners hidden", Number(counts.hidden) >= 1, JSON.stringify(counts));
  check("popup shows tricks stopped", Number(counts.tricks) >= 5, JSON.stringify(counts));
  await popup.close();
} else {
  check("popup opens", false, "openPopup failed");
}
const native = await worker.evaluate(async () => {
  try { await chrome.declarativeNetRequest.setExtensionActionOptions({ displayActionCountAsBadgeText: true }); return true; } catch { return false; }
});
check("native badge counter supported", native);

// Hidden element (what the picker saves) persists across reloads
await worker.evaluate(async (url) => {
  const host = new URL(url).hostname;
  await chrome.storage.local.set({ hidden: { [host]: [".sidebar-promo"] } });
}, URL1);
await page.reload({ waitUntil: "load" });
await new Promise((r) => setTimeout(r, 800));
check("user-hidden element stays hidden after reload", (await page.$eval("#promo", (e) => getComputedStyle(e).display)) === "none");

// Allowlist turns everything off
await worker.evaluate(async () => {
  await chrome.storage.sync.set({ allowlist: ["localhost"] });
});
await worker.evaluate(() => new Promise((r) => setTimeout(r, 1000)));
await page.reload({ waitUntil: "load" });
await new Promise((r) => setTimeout(r, 800));
check("allowlisted site: popups allowed", await page.evaluate(() => { const w = window.open("about:blank"); if (w) w.close(); return w !== null; }));
check("allowlisted site: generic CSS not applied", (await page.$eval("#AD_300", (e) => getComputedStyle(e).display)) === "block");

// Blocklist
await worker.evaluate(async () => { await chrome.storage.sync.set({ allowlist: [], blocklist: ["example.com"] }); });
await worker.evaluate(() => new Promise((r) => setTimeout(r, 1000)));
const dyn = await worker.evaluate(() => chrome.declarativeNetRequest.getDynamicRules());
check("user blocklist rule installed", dyn.some((r) => r.id === 2 && r.condition.requestDomains.includes("example.com")));
const p2 = await browser.newPage();
let blockedNav = false;
try { await p2.goto("https://example.com/", { waitUntil: "load", timeout: 8000 }); } catch (e) { blockedNav = /ERR_BLOCKED_BY_CLIENT/.test(e.message); }
check("blocked site can't be opened", blockedNav);

// Popup + options pages render without errors
for (const pth of ["src/popup/popup.html", "src/options/options.html"]) {
  const p = await browser.newPage();
  const errs = [];
  p.on("pageerror", (e) => errs.push(e.message));
  p.on("console", (m) => m.type() === "error" && errs.push(m.text()));
  await p.goto(`chrome-extension://${extId}/${pth}`, { waitUntil: "load" });
  await new Promise((r) => setTimeout(r, 700));
  check(`${pth} renders cleanly`, errs.length === 0, errs.join(" | "));
}

check("no service worker errors", swErrors.length === 0, swErrors.join(" | "));

await browser.close();
server.close();
const failed = results.filter((r) => !r.ok).length;
console.log(`\n${results.length - failed}/${results.length} passed`);
process.exit(failed ? 1 : 0);
