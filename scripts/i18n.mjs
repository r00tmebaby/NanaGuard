#!/usr/bin/env node
/** Interface translations.
 *   node scripts/i18n.mjs          check src/i18n/*.json against the strings in the code
 *   node scripts/i18n.mjs --write  regenerate src/i18n/en.json (the English reference) from the code
 *
 * English lives in the code: BLK.t("key", "English") in scripts, data-i18n="key" (and data-i18n-title,
 * -aria-label, -placeholder, -alt) in HTML, and the text tables in common.js (BLK.tt). Each language file
 * src/i18n/<code>.json maps the same keys to translated text, keeping {placeholders} and **bold** marks. */
import { readFile, readdir, writeFile, stat } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import vm from "node:vm";

const ROOT_DEFAULT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const KEY = /^[a-z][a-z0-9_]*(\.[A-Za-z0-9_-]+)+$/;
const ATTRS = ["title", "aria-label", "placeholder", "alt"];

async function walk(root, dir) {
  const out = [];
  for (const e of await readdir(path.join(root, dir), { withFileTypes: true })) {
    const p = path.posix.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(root, p)));
    else out.push(p);
  }
  return out;
}

const decode = (s) => s.replace(/&nbsp;/g, " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"')
  .replace(/&#39;/g, "'").replace(/&hellip;/g, "…").replace(/&middot;/g, "·").replace(/&amp;/g, "&");
const placeholders = (s) => [...String(s).matchAll(/\{(\w+)\}/g)].map((m) => m[1]).sort().join(",");

/** English strings from the code: { key: text }, plus problems found while reading. */
export async function collect(root = ROOT_DEFAULT) {
  const en = {};
  const errors = [];
  const add = (key, text, where) => {
    if (!KEY.test(key)) errors.push(`${where}: bad key "${key}" (use area.name, lowercase)`);
    if (typeof text !== "string" || !text.trim()) errors.push(`${where}: empty English for "${key}"`);
    else if (key in en && en[key] !== text) errors.push(`${where}: key "${key}" used with different English texts`);
    else en[key] = text;
  };
  const files = (await walk(root, "src")).filter((f) => !f.startsWith("src/vendor/"));

  for (const f of files.filter((f) => f.endsWith(".js"))) {
    const src = await readFile(path.join(root, f), "utf8");
    const total = (src.match(/BLK\.t\(/g) || []).length - (src.match(/BLK\.t\(`tbl\./g) || []).length;
    let found = 0;
    for (const m of src.matchAll(/BLK\.t\(\s*"([^"]+)"\s*,\s*("(?:[^"\\\n]|\\.)*")\s*[,)]/g)) {
      found++;
      let text;
      try {
        text = vm.runInNewContext(m[2]);
      } catch {
        errors.push(`${f}: unreadable English for "${m[1]}"`);
        continue;
      }
      add(m[1], text, f);
    }
    if (found !== total) errors.push(`${f}: ${total - found} BLK.t() call(s) without a literal "key" and "English" string`);
  }

  for (const f of files.filter((f) => f.endsWith(".html"))) {
    const src = await readFile(path.join(root, f), "utf8");
    for (const m of src.matchAll(/<([a-z0-9]+)\b[^>]*?\sdata-i18n="([^"]+)"[^>]*>([\s\S]*?)<\/\1>/gi)) {
      const inner = m[3].replace(/<b>([\s\S]*?)<\/b>/gi, "**$1**");
      if (/<[a-z/!]/i.test(inner)) errors.push(`${f}: data-i18n="${m[2]}" contains markup other than <b>`);
      add(m[2], decode(inner.replace(/\s+/g, " ").trim()), f);
    }
    for (const [tag] of src.matchAll(/<[a-z0-9]+\b[^>]*>/gi)) {
      for (const attr of ATTRS) {
        const k = new RegExp(`\\sdata-i18n-${attr}="([^"]+)"`).exec(tag);
        if (!k) continue;
        const v = new RegExp(`\\s${attr}="([^"]*)"`).exec(tag);
        if (!v) errors.push(`${f}: data-i18n-${attr}="${k[1]}" without a ${attr}="..." English value`);
        else add(k[1], decode(v[1]), f);
      }
    }
  }

  // Text tables in common.js (translated with BLK.tt).
  const ctx = { globalThis: {} };
  vm.runInNewContext(await readFile(path.join(root, "src/common.js"), "utf8") + "\n;globalThis.BLK = BLK;", ctx);
  const BLK = ctx.globalThis.BLK;
  for (const table of BLK.TEXT_TABLES) {
    for (const [k, v] of Object.entries(BLK[table])) {
      if (typeof v === "string") add(`tbl.${table}.${k}`, v, `common.js ${table}`);
      else for (const [field, text] of Object.entries(v)) add(`tbl.${table}.${k}.${field}`, text, `common.js ${table}`);
    }
  }
  return { en, errors, uiLangs: [...BLK.UI_LANGS] };
}

const sorted = (obj) => Object.fromEntries(Object.keys(obj).sort().map((k) => [k, obj[k]]));

/** All translation problems (empty array = fine). */
export async function validate(root = ROOT_DEFAULT) {
  const { en, errors, uiLangs } = await collect(root);
  const exists = (p) => stat(path.join(root, p)).then(() => true, () => false);
  let ref = null;
  try {
    ref = JSON.parse(await readFile(path.join(root, "src/i18n/en.json"), "utf8"));
  } catch {
    errors.push("src/i18n/en.json missing or invalid: run node scripts/i18n.mjs --write");
  }
  if (ref && JSON.stringify(sorted(ref)) !== JSON.stringify(sorted(en))) {
    const changed = Object.keys({ ...ref, ...en }).filter((k) => ref[k] !== en[k]);
    errors.push(`src/i18n/en.json is out of date (${changed.slice(0, 5).join(", ")}${changed.length > 5 ? ", …" : ""}): run node scripts/i18n.mjs --write`);
  }
  for (const f of (await readdir(path.join(root, "src/i18n"))).filter((f) => f.endsWith(".json"))) {
    const code = f.replace(/\.json$/, "");
    if (code !== "en" && !uiLangs.includes(code)) errors.push(`src/i18n/${f}: language not listed in BLK.UI_LANGS`);
  }
  for (const code of uiLangs) {
    if (!(await exists(`_locales/${code}/messages.json`)) && code !== "en") errors.push(`_locales/${code}/messages.json missing`);
    else {
      try {
        const msgs = JSON.parse(await readFile(path.join(root, `_locales/${code}/messages.json`), "utf8"));
        if (!msgs.extName?.message || msgs.extName.message.length > 75) errors.push(`_locales/${code}: extName missing or over 75 characters`);
        if (!msgs.extDescription?.message || msgs.extDescription.message.length > 132) errors.push(`_locales/${code}: extDescription missing or over 132 characters`);
      } catch (e) {
        errors.push(`_locales/${code}/messages.json: ${e.message}`);
      }
    }
    if (code === "en") continue;
    let tr;
    try {
      tr = JSON.parse(await readFile(path.join(root, `src/i18n/${code}.json`), "utf8"));
    } catch (e) {
      errors.push(`src/i18n/${code}.json: ${e.code === "ENOENT" ? "missing" : e.message}`);
      continue;
    }
    const missing = Object.keys(en).filter((k) => !(k in tr));
    const extra = Object.keys(tr).filter((k) => !(k in en));
    if (missing.length) errors.push(`src/i18n/${code}.json: ${missing.length} missing (${missing.slice(0, 4).join(", ")}${missing.length > 4 ? ", …" : ""})`);
    if (extra.length) errors.push(`src/i18n/${code}.json: ${extra.length} unknown key(s) (${extra.slice(0, 4).join(", ")})`);
    for (const [k, v] of Object.entries(tr)) {
      if (!(k in en)) continue;
      if (typeof v !== "string" || !v.trim()) errors.push(`src/i18n/${code}.json: "${k}" is empty`);
      else if (placeholders(v) !== placeholders(en[k])) errors.push(`src/i18n/${code}.json: "${k}" placeholders {${placeholders(v)}} ≠ {${placeholders(en[k])}}`);
      else if ((v.match(/\*\*/g) || []).length !== (en[k].match(/\*\*/g) || []).length) errors.push(`src/i18n/${code}.json: "${k}" **bold** marks differ from English`);
    }
  }
  return errors;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  if (process.argv.includes("--write")) {
    const { en, errors } = await collect();
    if (errors.length) {
      console.error(errors.join("\n"));
      process.exit(1);
    }
    await writeFile(path.join(ROOT_DEFAULT, "src/i18n/en.json"), JSON.stringify(sorted(en), null, 2) + "\n");
    console.log(`wrote src/i18n/en.json (${Object.keys(en).length} strings)`);
  } else {
    const errors = await validate();
    if (errors.length) {
      console.error(errors.join("\n"));
      process.exit(1);
    }
    console.log("translations OK");
  }
}
