// Real-Chrome translation test (needs Chrome 138+, internet, and opens a visible Chrome window):
//  1. Every interface language's test texts translated into every other interface language with Chrome's
//     built-in Translator; each result checked for the right language (NanaGuard's guess, plus Chrome's
//     detector when this Chrome has one) and for clean fact-check searches.
//  2. The real click flow: openCheck → check page → translated search, from many languages into several
//     answer languages, for Google, News and fact-checkers.
// Language packs stay in a reusable profile, so later runs are fast.
// Run: node tests/translate-real.mjs [maxPairs]
import puppeteer from "puppeteer-core";
import path from "node:path";
import os from "node:os";
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { CORPUS, KINDS } from "./lang-corpus.mjs";

const EXT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CHROME = process.env.CHROME_PATH || "C:/Program Files/Google/Chrome/Application/chrome.exe";
const PROFILE = path.join(os.tmpdir(), "nanaguard-translate-profile");
const REPORT = path.join(os.tmpdir(), "nanaguard-translate-report.json");
const MAX_PAIRS = Number(process.argv[2]) || Infinity;
const FLOW_ANSWERS = ["bg", "en", "de", "el", "tr"];
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const LANGS = Object.keys(CORPUS);

const browser = await puppeteer.launch({
  executablePath: CHROME, headless: false, pipe: true, enableExtensions: true, userDataDir: PROFILE,
  args: ["--no-first-run", "--window-size=900,700"], protocolTimeout: 600000,
});
const report = { api: null, pairs: [], flows: [] };
try {
  const extId = await browser.installExtension(EXT);
  const sw = await browser.waitForTarget((t) => t.type() === "service_worker" && t.url().includes(extId));
  const worker = await sw.worker();
  await sleep(2000);

  // A NanaGuard page to run the translator in. Chrome only downloads a language pack after a click, so
  // each translator is created from a real click on this button.
  const page = await browser.newPage();
  await page.goto(`chrome-extension://${extId}/src/check/check.html`, { waitUntil: "load" });
  await page.evaluate(() => {
    const b = document.createElement("button");
    b.id = "go";
    b.textContent = "go";
    b.style.cssText = "position:fixed;top:0;left:0;width:300px;height:120px;z-index:99";
    b.onclick = () => { window.__p = window.__task ? window.__task() : null; };
    document.body.append(b);
  });
  const clickResult = async () => {
    await page.click("#go");
    return page.evaluate(() => Promise.resolve(window.__p).then((v) => v, (e) => "error: " + e.message));
  };
  report.api = await page.evaluate(async () => ({
    translator: "Translator" in self,
    detector: "LanguageDetector" in self ? await LanguageDetector.availability() : "missing",
  }));
  console.log("Chrome built-in APIs:", JSON.stringify(report.api));
  if (!report.api.translator) throw new Error("This Chrome has no Translator API");
  if (report.api.detector !== "unavailable" && report.api.detector !== "missing") {
    await page.evaluate(() => { window.__task = () => LanguageDetector.create().then((d) => { window.__det = d; return "ok"; }); });
    console.log("language detector:", await clickResult());
  }

  /* 1. translation matrix */
  let pairs = 0;
  const t0 = Date.now();
  for (const source of LANGS) {
    for (const target of LANGS) {
      if (source === target || pairs >= MAX_PAIRS) continue;
      pairs++;
      await page.evaluate((s, t) => {
        window.__task = () => Translator.create({ sourceLanguage: s, targetLanguage: t }).then((tr) => { window.__tr = tr; return "ok"; });
      }, source, target);
      const made = await clickResult();
      if (made !== "ok") {
        report.pairs.push({ source, target, error: String(made) });
        console.log(`${source}→${target}: ${made}`);
        continue;
      }
      const results = await page.evaluate(async (texts, target) => {
        const out = [];
        for (const text of texts) {
          const t = String(await window.__tr.translate(text)).replace(/\s+/g, " ").trim();
          const top = window.__det ? (await window.__det.detect(t))[0] : null;
          const kwNews = BLK.keywords(t, 6, true, target);
          const kwFact = BLK.keywords(t, 5, false, target);
          const small = new Set(`${BLK.FILLER_WORDS.en} ${BLK.FILLER_WORDS[target] || ""}`.split(" "));
          const urls = ["google", "news", "factcheck"].map((e) => BLK.factCheckUrl(e, t, "", { answer: target, search: "", textLang: target }));
          out.push({
            text, t, changed: t !== text,
            detected: top ? BLK.normLang(top.detectedLanguage) : "",
            guessed: BLK.guessLang(t, "en"), // no hint: the answer language doesn't help the guess here
            withBrowser: await BLK.detectLang(t, "en"), // guess, then the browser's own detector (CLD) when unsure
            kwNews, kwFact,
            smallLeft: [...kwNews.split(" "), ...kwFact.split(" ")].filter((w) => small.has(w.toLowerCase())),
            urlsOk: urls.every((u) => { try { return !!new URL(u); } catch { return false; } }),
          });
        }
        window.__tr.destroy?.();
        return out;
      }, CORPUS[source], target);
      results.forEach((r, i) => { r.kind = KINDS[i]; });
      report.pairs.push({ source, target, results });
      const bad = results.filter((r) => !r.changed || (r.detected && r.detected !== target) || (r.guessed && r.guessed !== target) || r.smallLeft.length || !r.urlsOk);
      console.log(`${source}→${target}: ${results.length - bad.length}/${results.length} ok` +
        (bad.length ? `  e.g. [${bad[0].kind}] ${JSON.stringify(bad[0].t.slice(0, 70))} guess=${bad[0].guessed || "?"}${bad[0].smallLeft.length ? " small=" + bad[0].smallLeft : ""}` : ""));
    }
  }
  console.log(`matrix: ${pairs} pairs in ${Math.round((Date.now() - t0) / 1000)} s`);

  /* 2. the real click flow */
  const PREFIX = { google: "https://www.google.com/search", news: "https://news.google.com/search", factcheck: "https://toolbox.google.com/factcheck" };
  // Google may show a consent or "unusual traffic" page first: the search it was going to is in ?continue=.
  const unwrap = (u) => {
    try {
      const url = new URL(u);
      if (/\/sorry\/|consent\./.test(url.href)) return url.searchParams.get("continue") || "";
    } catch { /* not a URL */ }
    return u;
  };
  const flow = async (engine, text, answer, search = "") => {
    await worker.evaluate((a, s) => chrome.storage.sync.set({ factLang: a, factSearchLang: s }), answer, search);
    await sleep(100);
    const known = new Set(browser.targets());
    const created = browser.waitForTarget((t) => t.type() === "page" && !known.has(t), { timeout: 15000 }).catch(() => null);
    await worker.evaluate((e, t) => nanaguard.openCheck(e, t, null, null), engine, text);
    const target = await created;
    if (!target) return { url: "", via: "" };
    let via = "";
    let found = "";
    for (let i = 0; i < 600 && !found; i++) { // up to 3 min (first use downloads a language pack)
      const u = unwrap(target.url());
      if (u.includes("/src/check/check.html")) {
        via = "check page";
        const p = await target.page().catch(() => null);
        if (p && await p.evaluate(() => { const a = document.getElementById("ask"); return !!a && !a.hidden; }).catch(() => false)) {
          await p.click("#download").catch(() => {});
        }
      }
      if (u.startsWith(PREFIX[engine])) found = u;
      else await sleep(300);
    }
    const p = await target.page().catch(() => null);
    if (p) await p.close().catch(() => {});
    return { url: found, via: via || "direct" };
  };
  for (const source of LANGS) {
    for (const answer of FLOW_ANSWERS) {
      if (answer === source) continue;
      for (const engine of ["google", "news", "factcheck"]) {
        if (engine !== "google" && answer !== "bg" && answer !== "en") continue;
        const text = CORPUS[source][engine === "google" ? 1 : 0];
        const { url, via } = await flow(engine, text, answer);
        let query = "";
        try {
          const u = new URL(url);
          query = engine === "factcheck" ? decodeURIComponent(u.pathname.split("/search/")[1] || "").split(";hl=")[0] : u.searchParams.get("q") || "";
        } catch { /* no url */ }
        const checks = await page.evaluate((q, a, engine) => {
          const phrase = BLK.FACT_PHRASES[a] || BLK.FACT_PHRASES.en;
          const plain = engine === "google" && q.endsWith(phrase) ? q.slice(0, -phrase.length).trim() : q;
          return { plain, guessed: BLK.guessLang(plain, "en"), phrase: engine !== "google" || q.endsWith(phrase) };
        }, query, answer, engine);
        // Google: the question must be in the answer language. News/fact-checkers: a non-empty search
        // (their keywords are often names, so their language can't always be told).
        const ok = !!url && via === "check page" && checks.phrase && (engine !== "google" || checks.guessed === answer || checks.guessed === "");
        report.flows.push({ engine, source, answer, via, url, query, guessed: checks.guessed, ok });
        console.log(`flow ${engine.padEnd(9)} ${source}→${answer}: ${ok ? "ok  " : "FAIL"} [${via}] ${query.slice(0, 80)}`);
      }
    }
  }
  // The hardest case: three-word claims ("Vaccines cause autism") with nothing to recognise the language by.
  for (const source of LANGS) {
    const answer = source === "bg" ? "en" : "bg";
    const text = CORPUS[source][KINDS.indexOf("short")];
    const { url, via } = await flow("google", text, answer);
    let query = "";
    try { query = new URL(url).searchParams.get("q") || ""; } catch { /* no url */ }
    const res = await page.evaluate((q, a, original) => {
      const phrase = BLK.FACT_PHRASES[a] || BLK.FACT_PHRASES.en;
      const plain = q.endsWith(phrase) ? q.slice(0, -phrase.length).trim() : q;
      return { plain, guessed: BLK.guessLang(plain, a), translated: !!plain && plain.toLowerCase() !== original.toLowerCase() };
    }, query, answer, text);
    const ok = res.translated && (res.guessed === answer || res.guessed === "");
    report.flows.push({ engine: "google (3-word claim)", source, answer, via, url, query, guessed: res.guessed, ok });
    console.log(`flow 3-word   ${source}→${answer}: ${ok ? "ok  " : "FAIL"} [${via}] "${text}" → ${res.plain.slice(0, 60)}`);
  }
  await worker.evaluate(() => chrome.storage.sync.set({ factLang: "", factSearchLang: "" }));
} finally {
  writeFileSync(REPORT, JSON.stringify(report, null, 1));
  await browser.close().catch(() => {});
}

/* summary */
const byTarget = {};
for (const p of report.pairs) {
  for (const r of p.results || []) {
    const s = (byTarget[p.target] ||= { n: 0, changed: 0, guess: 0, unsure: 0, wrong: [], small: 0, urls: 0, browser: 0 });
    s.n++;
    if (r.withBrowser === p.target) s.browser++;
    if (r.changed) s.changed++;
    if (r.guessed === p.target) s.guess++;
    else if (r.guessed === "") s.unsure++;
    else s.wrong.push(`${p.source}:${r.kind}→${r.guessed}`);
    if (r.smallLeft.length) s.small++;
    if (r.urlsOk) s.urls++;
  }
}
console.log("\ninto | translations | translated | guess right | guess unsure | guess WRONG | + browser detector right | searches w/ small words | URLs ok");
let tot = { n: 0, guess: 0, unsure: 0, wrong: 0, small: 0, browser: 0 };
for (const [t, s] of Object.entries(byTarget)) {
  console.log(`${t.padEnd(4)} | ${String(s.n).padStart(3)} | ${String(s.changed).padStart(3)} | ${String(s.guess).padStart(3)} | ${String(s.unsure).padStart(3)} | ${String(s.wrong.length).padStart(3)}${s.wrong.length ? " (" + s.wrong.slice(0, 4).join(", ") + ")" : ""} | ${String(s.browser).padStart(3)} | ${s.small} | ${s.urls}`);
  tot = { n: tot.n + s.n, guess: tot.guess + s.guess, unsure: tot.unsure + s.unsure, wrong: tot.wrong + s.wrong.length, small: tot.small + s.small, browser: tot.browser + s.browser };
}
console.log(`total: ${tot.n} translations, guess right ${tot.guess}, unsure ${tot.unsure}, wrong ${tot.wrong}; with the browser detector right ${tot.browser}; searches with small words ${tot.small}`);
const errors = report.pairs.filter((p) => p.error);
console.log(`language pairs that failed to load: ${errors.length}${errors.length ? " — " + errors.map((e) => `${e.source}→${e.target} (${e.error})`).slice(0, 6).join(", ") : ""}`);
console.log(`click flows: ${report.flows.filter((f) => f.ok).length}/${report.flows.length} ok`);
for (const f of report.flows.filter((x) => !x.ok).slice(0, 10)) console.log(`  FAIL ${f.engine} ${f.source}→${f.answer} [${f.via}] guess=${f.guessed} ${f.query.slice(0, 60) || f.url.slice(0, 60)}`);
console.log(`details: ${REPORT}`);
