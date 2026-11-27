#!/usr/bin/env node
/** Static checks run locally and in CI: JS syntax, JSON validity, manifest file
 * references, and DNR ruleset sanity. Exits non-zero on any problem. */
import { readFile, readdir, stat } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { validate as validateI18n } from "./i18n.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const fail = (m) => errors.push(m);
const exists = (p) => stat(path.join(ROOT, p)).then(() => true, () => false);
const json = async (p) => JSON.parse(await readFile(path.join(ROOT, p), "utf8"));

async function walk(dir) {
  const out = [];
  for (const e of await readdir(path.join(ROOT, dir), { withFileTypes: true })) {
    const p = path.posix.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

// 1. JS syntax
// Third-party bundles (src/vendor) are minified/binary-ish: skip syntax and encoding checks there.
const OWN = (f) => !f.startsWith("src/vendor/");
for (const f of (await walk("src")).filter((f) => f.endsWith(".js") && OWN(f))) {
  try {
    execFileSync(process.execPath, ["--check", path.join(ROOT, f)], { stdio: "pipe" });
  } catch (e) {
    fail(`${f}: ${e.stderr}`);
  }
}

// 1b. Encoding: UTF-8 text mis-saved as Windows-1252 (an em dash shows up as three odd characters) silently breaks
// regexes containing non-ASCII characters. Fail loudly.
for (const f of [...(await walk("src")).filter(OWN), ...(await walk("scripts")), "README.md", "CHANGELOG.md", "PRIVACY.md"]) {
  if (!/\.(js|mjs|html|css|json|md)$/.test(f)) continue;
  const text = await readFile(path.join(ROOT, f), "utf8");
  // Escaped (U+00E2 U+20AC etc.) so this file doesn't match itself.
  if (/\u00e2\u20ac|\u00e2\u0153|\u00e2\u0160|\u00c3[\u0080-\u00bf]|\u00c2[\u00b7\u00a9\u00ae\u00b0]/.test(text)) {
    fail(`${f}: garbled text encoding (UTF-8 saved as Windows-1252)`);
  }
}

// 2. JSON + manifest references
const manifest = await json("manifest.json");
const refs = [
  manifest.background.service_worker,
  ...manifest.background.scripts,
  manifest.action.default_popup,
  manifest.options_ui.page,
  ...Object.values(manifest.icons),
  ...Object.values(manifest.action.default_icon),
  ...manifest.content_scripts.flatMap((c) => c.js || []),
  ...manifest.declarative_net_request.rule_resources.map((r) => r.path),
  "src/content/main-world.js",
  "src/content/flags-clickfix-off.js",
  "src/content/youtube-guard.js",
  "src/ocr/ocr.html",
  "src/ocr/ocr.js",
  "src/lens/lens.html",
  "src/lens/lens.js",
  "src/check/check.html",
  "src/check/check.js",
  "src/i18n/en.json",
  "src/vendor/tesseract/tesseract.min.js",
  "src/vendor/tesseract/worker.min.js",
  "src/vendor/tesseract/tesseract-core-simd-lstm.wasm.js",
  "src/vendor/tesseract/eng.traineddata.gz",
  "src/content/picker.js",
  "src/content/youtube.js",
  "src/content/youtube.css",
  "src/blocked/blocked.html",
  "rules/popup-hosts.json",
  "rules/security-hosts.json",
  "rules/meta.json",
  "_locales/en/messages.json",
  ...["ads", "privacy", "annoyances"].flatMap((c) => [`rules/${c}-generic.css`, `rules/${c}-cosmetic.json`, `rules/${c}-scriptlets.json`]),
];
// Scriptlet shards + their syntax
for (const c of ["ads", "privacy", "annoyances"]) {
  for (const { file } of await json(`rules/${c}-scriptlets.json`)) {
    refs.push(file);
    try {
      execFileSync(process.execPath, ["--check", path.join(ROOT, file)], { stdio: "pipe" });
    } catch (e) {
      fail(`${file}: ${e.stderr}`);
    }
  }
}
// Redirect targets must exist
for (const { path: p } of manifest.declarative_net_request.rule_resources) {
  for (const r of await json(p)) {
    const target = r.action.redirect?.extensionPath;
    if (target && !refs.includes(target.slice(1))) refs.push(target.slice(1));
  }
}
for (const r of refs) if (!(await exists(r))) fail(`missing file referenced by extension: ${r}`);

// 3. DNR rulesets
const VALID_TYPES = new Set(["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object",
  "xmlhttprequest", "ping", "csp_report", "media", "websocket", "webtransport", "webbundle", "other"]);
let total = 0;
for (const { id, path: p } of manifest.declarative_net_request.rule_resources) {
  const rules = await json(p);
  const ids = new Set();
  total += rules.length;
  for (const r of rules) {
    const where = `${id}#${r.id}`;
    if (!Number.isInteger(r.id) || r.id < 1 || ids.has(r.id)) fail(`${where}: bad or duplicate id`);
    ids.add(r.id);
    if (!r.action || !["block", "allow", "allowAllRequests", "redirect"].includes(r.action.type)) fail(`${where}: bad action`);
    const c = r.condition || {};
    const isParam = !!r.action.redirect?.transform;
    if (!isParam && !c.urlFilter && !c.requestDomains && !c.initiatorDomains) fail(`${where}: no urlFilter/requestDomains`);
    if (r.action.type === "redirect" && !c.resourceTypes) fail(`${where}: redirect without resourceTypes`);
    if (c.urlFilter && (!/^[\x20-\x7e]+$/.test(c.urlFilter) || c.urlFilter.startsWith("||*"))) fail(`${where}: bad urlFilter`);
    for (const t of [...(c.resourceTypes || []), ...(c.excludedResourceTypes || [])]) {
      if (!VALID_TYPES.has(t)) fail(`${where}: bad resource type ${t}`);
    }
    if (c.resourceTypes && c.excludedResourceTypes) fail(`${where}: both resourceTypes and excludedResourceTypes`);
    if (r.action.type === "allowAllRequests" && (c.resourceTypes || []).some((t) => t !== "main_frame" && t !== "sub_frame")) {
      fail(`${where}: allowAllRequests only supports frame types`);
    }
    for (const k of ["initiatorDomains", "excludedInitiatorDomains", "requestDomains"]) {
      if (c[k] && (!Array.isArray(c[k]) || !c[k].length)) fail(`${where}: empty ${k}`);
    }
  }
}
if (total > 30000) console.warn(`note: ${total} static rules exceed Chrome's guaranteed 30,000 (rest uses the shared pool)`);

// 4. Interface translations: every language file complete, placeholders intact, English reference current.
for (const e of await validateI18n(ROOT)) fail(`i18n: ${e}`);

// 5. Fact-check languages: language guessing, search words and every fact-check URL (tests/lang.mjs).
try {
  execFileSync(process.execPath, [path.join(ROOT, "tests/lang.mjs")], { stdio: "pipe", encoding: "utf8" });
} catch (e) {
  fail(`fact-check language tests failed:\n${String(e.stdout || e.message).split("\n").filter((l) => /FAIL|^\s{8}/.test(l)).slice(0, 15).join("\n")}`);
}

if (errors.length) {
  console.error(errors.slice(0, 50).join("\n"));
  console.error(`\n${errors.length} problem(s)`);
  process.exit(1);
}
console.log(`OK – ${refs.length} file refs, ${total} static DNR rules`);
