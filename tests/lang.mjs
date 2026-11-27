#!/usr/bin/env node
// Fact-check language tests (no browser): language guessing, search words and every fact-check URL,
// for every text in tests/lang-corpus.mjs × every engine × all 39 answer languages × every search option.
// Run: node tests/lang.mjs   (exits 1 on any failure)
import vm from "node:vm";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { CORPUS, EXTRA, EDGE, KINDS, HOLDOUT } from "./lang-corpus.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ctx = { chrome: { i18n: { getUILanguage: () => process.env.UI_LANG || "en-GB" } }, Intl, console, URL };
ctx.globalThis = ctx;
vm.createContext(ctx);
vm.runInContext(readFileSync(path.join(ROOT, "src/common.js"), "utf8"), ctx);
const BLK = ctx.BLK;

const sections = [];
let current = null;
const section = (name) => { current = { name, pass: 0, fail: [] }; sections.push(current); };
const expect = (ok, what) => { if (ok) current.pass++; else current.fail.push(what); };
const ENGINES = Object.keys(BLK.FACT_ENGINES);
const SEARCH = ["", "text", "en", "bg", "de"];
const norm = (s) => String(s || "").replace(/\s+/g, " ").trim().slice(0, 300);
const filler = (lang) => new Set(`${BLK.FILLER_WORDS.en} ${BLK.FILLER_WORDS[lang] || ""}`.split(" ").filter(Boolean));

/* 1. Language guessing */
section("language guess: 14 interface languages × 8 kinds of text");
for (const [lang, texts] of Object.entries(CORPUS)) {
  texts.forEach((t, i) => {
    const g = BLK.guessLang(t, "en");
    // Very short claims may be "unknown" (Chrome's detector then decides); a wrong language never.
    expect(g === lang || (KINDS[i] === "short" && g === ""), `${lang}/${KINDS[i]}: guessed "${g}" for "${t.slice(0, 50)}"`);
  });
}
section("language guess: held-out texts on other topics (never used for tuning)");
for (const [lang, texts] of Object.entries(HOLDOUT)) {
  for (const t of texts) {
    const g = BLK.guessLang(t, "en");
    expect(g === lang || g === "", `${lang}: guessed "${g}" for "${t.slice(0, 50)}"`);
  }
}
section("language guess: other languages and scripts");
for (const [lang, t] of Object.entries(EXTRA)) {
  const g = BLK.guessLang(t, "en");
  // A guess may be "" (unknown): the check page then asks Chrome's detector. A wrong language is a failure.
  expect(g === lang || g === "", `${lang}: guessed "${g}" for "${t.slice(0, 50)}"`);
}
section("language guess: the answer language breaks ties (short texts)");
for (const [lang, texts] of Object.entries(CORPUS)) {
  const g = BLK.guessLang(texts[7], lang);
  expect(g === lang || g === "", `${lang}/short with answer ${lang}: guessed "${g}"`);
}

/* 2. Search words */
section("search words: no small words, no junk, names kept");
for (const [lang, texts] of Object.entries(CORPUS)) {
  const small = filler(lang);
  texts.forEach((t, i) => {
    for (const [max, numbers] of [[5, false], [6, true]]) {
      const kw = BLK.keywords(t, max, numbers, lang);
      const words = kw.split(" ").filter(Boolean);
      const where = `${lang}/${KINDS[i]} (max ${max}): "${kw}"`;
      expect(words.length >= 1 && words.length <= max, `${where}: ${words.length} words`);
      expect(words.every((w) => !small.has(w.toLowerCase())), `${where}: contains a small word`);
      expect(words.every((w) => w.length > 1), `${where}: single-letter word`);
      expect(words.every((w) => !(lang === "uk" ? /[#"“”„«»‚‘’!?¿¡()[\]:;,]/ : /[#"“”„«»‚‘’'!?¿¡()[\]:;,]/).test(w)), `${where}: punctuation left in a word`);
      expect(numbers || words.every((w) => !/\d/.test(w)), `${where}: number in a fact-checker search`);
      if (KINDS[i] !== "short") expect(words.length >= 2, `${where}: fewer than 2 words`);
    }
  });
}
section("search words: whole words only, in every script (no broken Hindi/Tamil words)");
for (const [lang, t] of Object.entries(EXTRA)) {
  if (["ja", "zh", "th"].includes(lang)) continue; // written without spaces: the clause is one "word"
  const kw = BLK.keywords(t, 5, false, lang);
  const whole = new Set(t.split(/[\s,.:;!?"“”«»()]+/u));
  expect(kw && kw.split(" ").every((w) => whole.has(w)), `${lang}: "${kw}" has words not in the text`);
  expect(kw.split(" ").every((w) => !(BLK.FILLER_WORDS[lang] || "").split(" ").includes(w.toLowerCase())), `${lang}: "${kw}" has a small word`);
}
section("search words: brand and place names survive");
for (const [lang, name, idx] of [["en", "TrueSource", 4], ["bg", "ДСК", 4], ["ru", "Сбербанк", 4], ["uk", "ПриватБанк", 4],
  ["pl", "PKO", 4], ["nl", "ING", 4], ["es", "Santander", 4], ["it", "Intesa", 4], ["pt", "Itaú", 4], ["ro", "BCR", 4], ["tr", "Ziraat", 4]]) {
  const kw = BLK.keywords(CORPUS[lang][idx], 6, true, lang);
  expect(kw.split(" ").includes(name), `${lang}: "${name}" missing from "${kw}"`);
}

/* 3. Every URL: engines × 39 answer languages × search options × text language known/guessed */
section("URLs: every text × engine × 39 answer languages × 5 search options");
const allTexts = [...Object.entries(CORPUS).flatMap(([lang, ts]) => ts.map((t) => [lang, t])), ...Object.entries(EXTRA)];
for (const [lang, raw] of allTexts) {
  const t = norm(raw);
  for (const answer of BLK.FACT_LANGS) {
    for (const search of SEARCH) {
      for (const known of [true, false]) {
        const langs = { answer, search, ...(known ? { textLang: lang } : {}) };
        const textLang = known ? lang : BLK.guessLang(t, answer) || answer;
        for (const engine of ENGINES) {
          const where = `${engine} ${lang}→answer ${answer}/search "${search}"${known ? "" : " (guessed)"}`;
          let u;
          try {
            u = new URL(BLK.factCheckUrl(engine, raw, "https://example.com/page", langs));
          } catch (e) {
            expect(false, `${where}: bad URL (${e.message})`);
            continue;
          }
          expect(u.href.length < 8000, `${where}: URL too long`);
          if (engine === "google") {
            const q = u.searchParams.get("q");
            expect(u.host === "www.google.com" && q.startsWith(t) && q.endsWith(BLK.FACT_PHRASES[textLang] || BLK.FACT_PHRASES.en), `${where}: query "${q.slice(-40)}"`);
            expect(u.searchParams.get("hl") === BLK.googleLang(answer), `${where}: hl=${u.searchParams.get("hl")}`);
          } else if (engine === "news") {
            expect(u.host === "news.google.com" && u.searchParams.get("q") === BLK.keywords(t, 6, true, textLang), `${where}: q=${u.searchParams.get("q")}`);
            expect(!!u.searchParams.get("hl"), `${where}: no hl`);
          } else if (engine === "factcheck") {
            const [, kw, hl] = /\/search\/([^;]*);hl=(.*)$/.exec(u.pathname) || [];
            expect(u.host === "toolbox.google.com" && decodeURIComponent(kw || "") === BLK.keywords(t, 5, false, textLang), `${where}: ${u.pathname.slice(0, 80)}`);
            expect(hl === BLK.googleLang(textLang), `${where}: hl=${hl}`);
          } else {
            const q = u.searchParams.get("q");
            expect(u.host === "chatgpt.com" && q.includes(`"${t}"`) && q.endsWith(` Answer in ${BLK.langName(answer, "en")}.`), `${where}: prompt end "${q.slice(-50)}"`);
            expect(BLK.FACT_LANGS.includes(search) === q.includes("Also look for sources in"), `${where}: sources sentence wrong for search "${search}"`);
          }
        }
      }
    }
  }
}

/* 4. When the check page translates first */
section("translation decision: every text × engine × answer language × search option");
// A needed translation must never be skipped. When the language is unclear ("unknown"), going through
// the check page is fine: Chrome's detector decides there.
for (const [lang, texts] of Object.entries(CORPUS)) {
  texts.forEach((t, i) => {
    for (const answer of BLK.UI_LANGS) {
      const unsure = BLK.guessLang(t, answer) === "";
      for (const search of SEARCH) {
        for (const engine of ENGINES) {
          const target = engine === "chatgpt" ? "" : engine === "google" ? answer : search === "text" ? "" : search || answer;
          const got = BLK.needsTranslation(engine, t, { answer, search });
          const where = `${engine}: ${lang}/${KINDS[i]}, answer ${answer}, search "${search}" → ${got}`;
          if (!target) expect(got === false, `${where}, expected no translation`);
          else if (lang !== target) expect(got === true, `${where}, translation needed but skipped`);
          else expect(got === false || unsure, `${where}, translated although already in ${target}`);
        }
      }
    }
  });
}

/* 5. Awkward input */
section("awkward input never breaks a URL");
for (const raw of EDGE) {
  for (const engine of ENGINES) {
    for (const langs of [{ answer: "en", search: "" }, { answer: "bg", search: "text" }, { answer: "el", search: "en" }]) {
      try {
        const u = new URL(BLK.factCheckUrl(engine, raw, "", langs));
        expect(u.protocol === "https:" && !/[<>"\s]/.test(u.href), `${engine} "${raw.slice(0, 20)}": unsafe characters in ${u.href.slice(0, 80)}`);
        expect(u.href.length < 8000, `${engine} "${raw.slice(0, 20)}": too long`);
      } catch (e) {
        expect(false, `${engine} "${raw.slice(0, 20)}": ${e.message}`);
      }
    }
    expect(typeof BLK.keywords(raw, 5, false, "en") === "string", `keywords("${raw.slice(0, 20)}")`);
    expect(typeof BLK.guessLang(raw) === "string", `guessLang("${raw.slice(0, 20)}")`);
  }
}

/* 6. Per-language data */
section("per-language data: News editions, Google phrases, small-word lists, names");
for (const code of BLK.FACT_LANGS) {
  const p = BLK.newsParams(code);
  expect(/^hl=[A-Za-z-]+(&gl=[A-Z]{2}&ceid=[A-Z]{2}:[A-Za-z0-9-]+)?$/.test(p), `newsParams(${code}) = ${p}`);
  expect(BLK.langName(code, "en") !== code, `langName(${code})`);
}
for (const code of BLK.UI_LANGS) {
  expect(!!BLK.FACT_PHRASES[code], `no Google "fact check" phrase for ${code}`);
  expect((BLK.FILLER_WORDS[code] || "").split(" ").length >= 40, `small-word list for ${code} has fewer than 40 words`);
  expect(BLK.uiLangFor(code) === code, `uiLangFor(${code})`);
}
expect(BLK.factLangs({ factLang: "xx", uiLang: "bg" }).answer === "bg", "invalid answer setting falls back to the interface language");
expect(BLK.validSearchLang("text") === "text" && BLK.validSearchLang("zz") === "", "validSearchLang");

/* report */
let failed = 0;
for (const s of sections) {
  failed += s.fail.length;
  console.log(`${s.fail.length ? "FAIL" : "PASS"}  ${s.name}: ${s.pass} passed${s.fail.length ? `, ${s.fail.length} failed` : ""}`);
  for (const f of s.fail.slice(0, 12)) console.log(`        ${f}`);
  if (s.fail.length > 12) console.log(`        … ${s.fail.length - 12} more`);
}
const total = sections.reduce((n, s) => n + s.pass + s.fail.length, 0);
console.log(`\n${total - failed}/${total} checks passed`);
process.exit(failed ? 1 : 0);
