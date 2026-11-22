#!/usr/bin/env node
/**
 * Downloads EasyList and converts it into:
 *   rules/easylist.json        declarativeNetRequest static ruleset (network blocking)
 *   rules/cosmetic-generic.css generic element-hiding CSS (injected on every page)
 *   rules/cosmetic.json        site-specific hiding + generic rules with exceptions
 *   rules/popup-hosts.json     hosts from $popup filters (tabs auto-closed by background)
 *   rules/meta.json            list version + counts (shown in Settings)
 *
 * Only the well-defined subset of Adblock Plus syntax that maps 1:1 onto DNR/CSS
 * is converted; anything else (regex, $csp, $redirect, scriptlets, :-abp-…) is skipped.
 * No dependencies. Usage: node scripts/update-filters.mjs [path-or-url]
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE = process.argv[2] || "https://easylist.to/easylist/easylist.txt";
const MAX_RULES = 29000; // Chrome guarantees 30k static rules per extension; keep headroom for blocklist.json

const TYPE_MAP = {
  script: "script",
  image: "image",
  stylesheet: "stylesheet",
  subdocument: "sub_frame",
  xmlhttprequest: "xmlhttprequest",
  media: "media",
  font: "font",
  object: "object",
  ping: "ping",
  websocket: "websocket",
  other: "other",
  webrtc: null, // unsupported → ignore the type, not the filter
};
const IGNORED_OPTIONS = new Set(["match-case"]); // handled separately
const DOMAIN_RE = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z0-9-]{2,63}$/;
const ASCII = /^[\x20-\x7e]+$/;

/* ------------------------------------------------------------------ */

async function load(src) {
  if (/^https?:/.test(src)) {
    const res = await fetch(src, { headers: { "user-agent": "hush-filter-builder" } });
    if (!res.ok) throw new Error(`Download failed: ${res.status} ${src}`);
    return res.text();
  }
  return readFile(src, "utf8");
}

function parseDomains(list, sep) {
  const include = [];
  const exclude = [];
  for (let d of list.split(sep)) {
    d = d.trim().toLowerCase();
    if (!d) continue;
    const neg = d.startsWith("~");
    if (neg) d = d.slice(1);
    if (!DOMAIN_RE.test(d)) continue; // drops wildcard TLDs like example.*
    (neg ? exclude : include).push(d);
  }
  return { include, exclude };
}

/** Converts one network filter to a DNR rule (without id), or returns null. */
function convertNetwork(line) {
  let text = line;
  const isException = text.startsWith("@@");
  if (isException) text = text.slice(2);

  let optionsText = "";
  const dollar = text.lastIndexOf("$");
  if (dollar > 0 && !/^\/.*\/$/.test(text)) {
    optionsText = text.slice(dollar + 1);
    text = text.slice(0, dollar);
  }
  if (!text || (text.startsWith("/") && text.endsWith("/") && text.length > 1)) return null; // regex
  if (!ASCII.test(text) || text.startsWith("||*")) return null;

  const condition = {};
  const types = new Set();
  const notTypes = new Set();
  let documentOpt = false;
  let popup = false;
  let caseSensitive = false;

  for (const raw of optionsText ? optionsText.split(",") : []) {
    const opt = raw.trim().toLowerCase();
    const neg = opt.startsWith("~");
    const name = (neg ? opt.slice(1) : opt).split("=")[0];
    if (name === "third-party") condition.domainType = neg ? "firstParty" : "thirdParty";
    else if (name === "domain") {
      const { include, exclude } = parseDomains(opt.slice("domain=".length), "|");
      if (include.length) condition.initiatorDomains = include;
      if (exclude.length) condition.excludedInitiatorDomains = exclude;
      if (!include.length && !exclude.length) return null;
      if (!include.length && opt.slice(7).split("|").some((d) => !d.startsWith("~"))) return null;
    } else if (name in TYPE_MAP) {
      if (TYPE_MAP[name]) (neg ? notTypes : types).add(TYPE_MAP[name]);
    } else if (name === "document" && !neg) documentOpt = true;
    else if (name === "popup" && !neg) popup = true;
    else if (name === "match-case") caseSensitive = true;
    else if (IGNORED_OPTIONS.has(name)) continue;
    else return null; // csp, redirect, rewrite, generichide, sitekey, ...
  }

  if (popup) return { popup: true, isException, text };

  condition.urlFilter = text;
  if (caseSensitive) condition.isUrlFilterCaseSensitive = true;

  if (documentOpt) {
    if (!isException) {
      types.add("main_frame");
    } else {
      return {
        priority: 3,
        action: { type: "allowAllRequests" },
        condition: { ...condition, resourceTypes: ["main_frame", "sub_frame"] },
      };
    }
  }
  if (types.size) condition.resourceTypes = [...types];
  else if (notTypes.size) condition.excludedResourceTypes = [...notTypes];

  return {
    priority: isException ? 2 : 1,
    action: { type: isException ? "allow" : "block" },
    condition,
  };
}

const UNSUPPORTED_SELECTOR = /:-abp-|:has-text|:contains|:xpath|:matches-|:upward|:remove|:style\(|:watch-attr|:min-text|\{/;

/* ------------------------------------------------------------------ */

const raw = await load(SOURCE);
const lines = raw.split(/\r?\n/);
const version = (raw.match(/^! Version:\s*(\S+)/m) || [])[1] || "unknown";

const rules = [];
const seen = new Set();
const popupHosts = new Set();
const noGenericHide = new Set(); // @@||host^$generichide / $elemhide
const generic = new Set();
const genericExceptions = new Map(); // selector -> Set(domains)
const siteRules = []; // { selector, include[], exclude[] }
const siteExceptions = new Map(); // `${domain}\n${selector}` -> true
let skipped = 0;

for (let line of lines) {
  line = line.trim();
  if (!line || line.startsWith("!") || line.startsWith("[")) continue;

  // ---- cosmetic ----
  const cos = line.match(/^([^#]*)(##|#@#|#\?#|#\$#|#%#|#@\?#|#@\$#)(.+)$/);
  if (cos) {
    const [, domainsText, sep, selector] = cos;
    if ((sep !== "##" && sep !== "#@#") || UNSUPPORTED_SELECTOR.test(selector)) {
      skipped++;
      continue;
    }
    const { include, exclude } = parseDomains(domainsText, ",");
    if (domainsText && !include.length && !exclude.length) {
      skipped++;
      continue;
    }
    if (sep === "#@#") {
      if (!include.length) continue;
      for (const d of include) {
        if (!genericExceptions.has(selector)) genericExceptions.set(selector, new Set());
        genericExceptions.get(selector).add(d);
        siteExceptions.set(`${d}\n${selector}`, true);
      }
    } else if (!include.length) {
      if (exclude.length) {
        if (!genericExceptions.has(selector)) genericExceptions.set(selector, new Set());
        exclude.forEach((d) => genericExceptions.get(selector).add(d));
      } else generic.add(selector);
    } else {
      siteRules.push({ selector, include, exclude });
    }
    continue;
  }

  // ---- $generichide / $elemhide host exceptions ----
  const hide = line.match(/^@@\|\|([a-z0-9.-]+)\^\$(generichide|elemhide|ghide|ehide)$/i);
  if (hide) {
    if (DOMAIN_RE.test(hide[1].toLowerCase())) noGenericHide.add(hide[1].toLowerCase());
    continue;
  }

  // ---- network ----
  const rule = convertNetwork(line);
  if (!rule) {
    skipped++;
    continue;
  }
  if (rule.popup) {
    const host = rule.text.match(/^\|\|([a-z0-9.-]+)\^?$/i);
    if (!rule.isException && host && DOMAIN_RE.test(host[1].toLowerCase())) popupHosts.add(host[1].toLowerCase());
    else skipped++;
    continue;
  }
  const key = JSON.stringify(rule);
  if (seen.has(key)) continue;
  seen.add(key);
  rules.push(rule);
}

// Compact: plain "||host^" filters with identical options become one rule with a
// requestDomains list (same semantics: host + all subdomains). Cuts rule count a lot.
{
  const HOST_ONLY = /^\|\|([a-z0-9.-]+)\^?$/;
  const groups = new Map();
  const rest = [];
  for (const r of rules) {
    const m = !r.condition.isUrlFilterCaseSensitive && r.condition.urlFilter.match(HOST_ONLY);
    if (!m || !DOMAIN_RE.test(m[1])) {
      rest.push(r);
      continue;
    }
    const { urlFilter, ...cond } = r.condition;
    const key = JSON.stringify([r.priority, r.action, cond]);
    if (!groups.has(key)) groups.set(key, { priority: r.priority, action: r.action, condition: cond, domains: new Set() });
    groups.get(key).domains.add(m[1]);
  }
  rules.length = 0;
  for (const g of groups.values()) {
    const domains = [...g.domains].sort();
    for (let i = 0; i < domains.length; i += 1000) {
      rules.push({
        priority: g.priority,
        action: g.action,
        condition: { requestDomains: domains.slice(i, i + 1000), ...g.condition },
      });
    }
  }
  rules.push(...rest);
}

// Exceptions first so they are never cut by the cap; then block rules.
rules.sort((a, b) => b.priority - a.priority);
if (rules.length > MAX_RULES) {
  console.warn(`Capping network rules: ${rules.length} -> ${MAX_RULES}`);
  rules.length = MAX_RULES;
}
rules.forEach((r, i) => (r.id = i + 1));
const ordered = rules.map(({ id, priority, action, condition }) => ({ id, priority, action, condition }));

// Generic selectors that have exceptions must be applied per-site by the background.
for (const sel of genericExceptions.keys()) generic.delete(sel);

// Site-specific: domain -> [[selector, excludes[]]]
const sites = {};
for (const { selector, include, exclude } of siteRules) {
  for (const d of include) {
    if (siteExceptions.has(`${d}\n${selector}`)) continue;
    (sites[d] ||= []).push(exclude.length ? [selector, exclude] : [selector]);
  }
}
const genericExc = [...genericExceptions].map(([sel, ds]) => [sel, [...ds].sort()]);

// One rule per selector: an invalid selector then only invalidates itself.
const css =
  `/* Generated from EasyList ${version} by scripts/update-filters.mjs - do not edit */\n` +
  [...generic].map((s) => `${s}{display:none!important}`).join("\n") +
  "\n";

const meta = {
  list: "EasyList",
  source: SOURCE.startsWith("http") ? SOURCE : path.basename(SOURCE),
  version,
  generated: new Date().toISOString(),
  networkRules: ordered.length,
  genericSelectors: generic.size,
  siteSelectors: siteRules.length,
  popupHosts: popupHosts.size,
  skipped,
};

const out = (f) => path.join(ROOT, "rules", f);
await writeFile(out("easylist.json"), JSON.stringify(ordered) + "\n");
await writeFile(out("cosmetic-generic.css"), css);
await writeFile(
  out("cosmetic.json"),
  JSON.stringify({ genericExceptions: genericExc, sites, noGenericHide: [...noGenericHide].sort() }) + "\n"
);
await writeFile(out("popup-hosts.json"), JSON.stringify([...popupHosts].sort()) + "\n");
await writeFile(out("meta.json"), JSON.stringify(meta, null, 2) + "\n");
console.log(meta);
