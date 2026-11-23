#!/usr/bin/env node
/**
 * Downloads filter lists and compiles them into browser-native data, per category:
 *
 *   rules/net-<cat>.json          declarativeNetRequest static ruleset
 *   rules/<cat>-generic.css       generic element hiding (injected everywhere)
 *   rules/<cat>-cosmetic.json     site-specific hiding / styling / procedural filters
 *   rules/<cat>-scriptlets.js     scriptlet runtime + per-site calls (MAIN world)
 *   rules/<cat>-scriptlet-hosts.json   hosts the scriptlet file is registered on
 *   rules/security-hosts.json     malware/phishing hosts → "dangerous site" page
 *   rules/popup-hosts.json        hosts from $popup filters → tab auto-close
 *   rules/meta.json               versions + counts (Settings / popup)
 *
 * Understands Adblock Plus and uBlock Origin syntax: network options incl. $redirect,
 * $removeparam, $important, $badfilter, $denyallow, $to; !#if / !#include directives;
 * cosmetic, :style(), procedural (:has-text, :upward, :xpath…) and scriptlets (##+js,
 * ABP #$# snippets). Anything that cannot be expressed safely is skipped and counted.
 * No dependencies.  Usage: node scripts/update-filters.mjs
 */
import { readFile, writeFile, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const UBO = "https://raw.githubusercontent.com/uBlockOrigin/uAssets/master/filters/";

const SOURCES = [
  { id: "easylist", cat: "ads", title: "EasyList", url: "https://easylist.to/easylist/easylist.txt" },
  { id: "ubo", cat: "ads", title: "uBlock filters", url: UBO + "filters.txt" },
  { id: "ubo-quick", cat: "ads", title: "uBlock quick fixes", url: UBO + "quick-fixes.txt" },
  { id: "ubo-unbreak", cat: "ads", title: "uBlock unbreak", url: UBO + "unbreak.txt" },
  { id: "pgl", cat: "ads", title: "Peter Lowe's list", url: "https://pgl.yoyo.org/adservers/serverlist.php?hostformat=adblockplus&mimetype=plaintext" },
  { id: "easyprivacy", cat: "privacy", title: "EasyPrivacy", url: "https://easylist.to/easylist/easyprivacy.txt" },
  { id: "ubo-privacy", cat: "privacy", title: "uBlock privacy", url: UBO + "privacy.txt" },
  // Domain-only variants: whole hosts dedicated to malware/phishing (shared hosts excluded).
  { id: "urlhaus", cat: "security", title: "URLhaus malware", url: "https://malware-filter.gitlab.io/malware-filter/urlhaus-filter-domains-online.txt" },
  { id: "phishing", cat: "security", title: "Phishing filter", url: "https://malware-filter.gitlab.io/malware-filter/phishing-filter-domains.txt" },
  { id: "cookies", cat: "annoyances", title: "Fanboy cookie banners", url: "https://secure.fanboy.co.nz/fanboy-cookiemonster.txt" },
  { id: "fanboy-annoyance", cat: "annoyances", title: "Fanboy annoyances", url: "https://secure.fanboy.co.nz/fanboy-annoyance.txt" },
  { id: "ubo-annoyances", cat: "annoyances", title: "uBlock annoyances", url: UBO + "annoyances-others.txt" },
];
const CATEGORIES = ["ads", "privacy", "security", "annoyances"];
const MAX_RULES_PER_SET = 29000;

/* ---------------- preprocessor (!#if / !#include) ---------------- */

const ENV = {
  ext_ubol: true, env_mv3: true, env_chromium: true, cap_user_stylesheet: true,
  env_firefox: false, env_mobile: false, env_safari: false, cap_html_filtering: false,
  cap_ipaddress: false, env_edge: false, ext_devbuild: false, adguard: false, false: false,
};
function evalCondition(expr) {
  const js = expr.replace(/[A-Za-z_][\w]*/g, (id) => String(ENV[id] === true));
  if (!/^[\s!&|()truefals]*$/.test(js)) return false;
  try {
    return Boolean(new Function(`return (${js});`)());
  } catch {
    return false;
  }
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { "user-agent": "nanaguard-filter-builder" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

async function loadList(url, depth = 0) {
  const text = await fetchText(url);
  const out = [];
  const stack = [];
  const active = () => stack.every(Boolean);
  for (const raw of text.split(/\r?\n/)) {
    const line = raw.trim();
    if (line.startsWith("!#if ")) { stack.push(evalCondition(line.slice(5))); continue; }
    if (line.startsWith("!#else")) { stack.push(!stack.pop()); continue; }
    if (line.startsWith("!#endif")) { stack.pop(); continue; }
    if (!active()) continue;
    if (line.startsWith("!#include ") && depth < 3) {
      const inc = line.slice(10).trim();
      if (/^[\w./-]+$/.test(inc) && !inc.includes("..")) {
        out.push(...(await loadList(new URL(inc, url).href, depth + 1)).lines);
      }
      continue;
    }
    out.push(line);
  }
  const version = (text.match(/^! (?:Version|Last modified):\s*(.+)$/m) || [])[1]?.trim() || "";
  return { lines: out, version };
}

/* ---------------- helpers ---------------- */

const DOMAIN_RE = /^(?:[a-z0-9_](?:[a-z0-9_-]{0,61}[a-z0-9])?\.)+[a-z0-9-]{2,63}$/;
const IP_RE = /^\d{1,3}(\.\d{1,3}){3}$/;
const validHost = (d) => DOMAIN_RE.test(d) || IP_RE.test(d);
const ENTITY_TLDS = ["com", "net", "org", "de", "fr", "es", "it", "nl", "co.uk", "pl", "ru", "com.br"];
const ENTITY_RE = /^([a-z0-9](?:[a-z0-9-]*[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)*)\.\*$/;
const ASCII = /^[\x20-\x7e]+$/;

function parseDomains(list, sep) {
  const include = [];
  const exclude = [];
  let dropped = 0;
  for (let d of list.split(sep)) {
    d = d.trim().toLowerCase();
    if (!d) continue;
    const neg = d.startsWith("~");
    if (neg) d = d.slice(1);
    const ent = d.match(ENTITY_RE);
    if (ent) { for (const tld of ENTITY_TLDS) { const h = ent[1] + "." + tld; if (validHost(h)) (neg ? exclude : include).push(h); } continue; }
    if (!validHost(d)) { dropped++; continue; } // regex domains and other invalid entries
    (neg ? exclude : include).push(d);
  }
  return { include: [...new Set(include)], exclude: [...new Set(exclude)], dropped };
}

const TYPE_MAP = {
  script: "script", image: "image", stylesheet: "stylesheet", css: "stylesheet",
  subdocument: "sub_frame", frame: "sub_frame", xmlhttprequest: "xmlhttprequest", xhr: "xmlhttprequest",
  media: "media", font: "font", object: "object", "object-subrequest": "object", ping: "ping",
  beacon: "ping", websocket: "websocket", other: "other", webrtc: null,
};
const ALL_TYPES = ["main_frame", "sub_frame", "stylesheet", "script", "image", "font", "object",
  "xmlhttprequest", "ping", "media", "websocket", "other"];

const REDIRECTS = {
  "noopjs": "noop.js", "noop.js": "noop.js",
  "noopframe": "noop.html", "noop.html": "noop.html",
  "nooptext": "noop.txt", "noop.txt": "noop.txt", "empty": "noop.txt",
  "noopcss": "noop.css", "noop.css": "noop.css",
  "1x1.gif": "1x1.gif", "1x1-transparent.gif": "1x1.gif",
  "2x2.png": "2x2.png", "2x2-transparent.png": "2x2.png",
  "3x2.png": "3x2.png", "3x2-transparent.png": "3x2.png",
  "32x32.png": "32x32.png", "32x32-transparent.png": "32x32.png",
  "googletagservices_gpt.js": "googletagservices_gpt.js", "googletagservices.com/gpt.js": "googletagservices_gpt.js",
  "googletagmanager_gtm.js": "googletagmanager_gtm.js", "googletagmanager.com/gtm.js": "googletagmanager_gtm.js",
  "google-analytics_analytics.js": "google-analytics_analytics.js", "google-analytics.com/analytics.js": "google-analytics_analytics.js",
  "google-analytics_ga.js": "google-analytics_analytics.js", "google-analytics.com/ga.js": "google-analytics_analytics.js",
  "googlesyndication_adsbygoogle.js": "googlesyndication_adsbygoogle.js", "googlesyndication.com/adsbygoogle.js": "googlesyndication_adsbygoogle.js",
  "amazon_apstag.js": "amazon_apstag.js", "amazon-adsystem.com/aax2/amzn_ads.js": "amazon_apstag.js",
  "scorecardresearch_beacon.js": "scorecardresearch_beacon.js", "scorecardresearch.com/beacon.js": "scorecardresearch_beacon.js",
  "fingerprint2.js": "fingerprint2.js", "fingerprint3.js": "fingerprint2.js",
};

/* ---------------- network filters ---------------- */

let stats = { skippedNetwork: 0, skippedCosmetic: 0, skippedScriptlets: 0 };

/** Returns { kind, rule } or null. kind: rule | popup | genericHide */
function convertNetwork(line) {
  let text = line;
  const isException = text.startsWith("@@");
  if (isException) text = text.slice(2);

  let optionsText = "";
  const dollar = text.lastIndexOf("$");
  if (dollar >= 0 && !/^\/.*\/$/.test(text) && !text.slice(dollar).includes("/")) {
    optionsText = text.slice(dollar + 1);
    text = text.slice(0, dollar);
  } else if (dollar >= 0 && /\$[a-z~1-3_-]+(=|,|$)/i.test(text.slice(dollar))) {
    optionsText = text.slice(dollar + 1);
    text = text.slice(0, dollar);
  }
  if (text.startsWith("/") && text.endsWith("/") && text.length > 2) return null; // regex filters
  if (text === "*") text = "";
  if (text && (!ASCII.test(text) || text.startsWith("||*"))) return null;

  const cond = {};
  const types = new Set();
  const notTypes = new Set();
  let doc = false, popup = false, important = false, redirect = null, removeparam = null, genericHide = false;

  for (const raw of optionsText ? optionsText.split(",") : []) {
    const opt = raw.trim();
    const lower = opt.toLowerCase();
    const neg = lower.startsWith("~");
    const [name, ...rest] = (neg ? lower.slice(1) : lower).split("=");
    const value = opt.slice(opt.indexOf("=") + 1);
    switch (name) {
      case "third-party": case "3p": case "strict3p":
        cond.domainType = neg ? "firstParty" : "thirdParty"; break;
      case "first-party": case "1p": case "strict1p":
        cond.domainType = neg ? "thirdParty" : "firstParty"; break;
      case "domain": case "from": {
        const { include, exclude, dropped } = parseDomains(value, "|");
        if (dropped && !include.length && !value.split("|").every((d) => d.trim().startsWith("~"))) return null;
        if (include.length) cond.initiatorDomains = include;
        if (exclude.length) cond.excludedInitiatorDomains = exclude;
        if (!include.length && !exclude.length) return null;
        break;
      }
      case "to": {
        const { include, exclude, dropped } = parseDomains(value, "|");
        if (dropped) return null;
        if (include.length) cond.requestDomains = include;
        if (exclude.length) cond.excludedRequestDomains = exclude;
        break;
      }
      case "denyallow": {
        const { include, dropped } = parseDomains(value, "|");
        if (dropped || !include.length) return null;
        cond.excludedRequestDomains = include;
        break;
      }
      case "method": {
        const methods = value.toLowerCase().split("|");
        if (methods.some((m) => m.startsWith("~"))) return null;
        cond.requestMethods = methods;
        break;
      }
      case "document": case "doc": if (!neg) doc = true; break;
      case "popup": case "popunder": if (!neg) popup = true; break;
      case "all": ALL_TYPES.forEach((t) => types.add(t)); popup = !isException && popup; break;
      case "important": important = true; break;
      case "match-case": cond.isUrlFilterCaseSensitive = true; break;
      case "redirect": case "redirect-rule": {
        const res = REDIRECTS[value.split(":")[0]];
        if (!res || isException) return null; // unknown resource → let other rules handle it
        redirect = res;
        break;
      }
      case "removeparam": case "queryprune": {
        if (isException || !value || /[\/|~^*]/.test(value) || !ASCII.test(value)) return null;
        removeparam = value;
        break;
      }
      case "generichide": case "ghide": case "elemhide": case "ehide":
        if (isException) genericHide = true; else return null;
        break;
      case "_": case "reason": break;
      default:
        if (name in TYPE_MAP) {
          if (TYPE_MAP[name]) (neg ? notTypes : types).add(TYPE_MAP[name]);
          break;
        }
        return null; // csp, header, permissions, replace, urltransform, inline-script, specifichide, …
    }
  }

  if (genericHide) {
    const m = text.match(/^\|\|([a-z0-9.-]+)\^?$/i);
    return m ? { kind: "genericHide", host: m[1].toLowerCase() } : null;
  }
  if (popup && !types.size) {
    const m = text.match(/^\|\|([a-z0-9.-]+)\^?$/i);
    return !isException && m ? { kind: "popup", host: m[1].toLowerCase() } : null;
  }

  if (text) cond.urlFilter = text;
  if (doc) {
    if (isException) {
      return { kind: "rule", rule: { priority: 3, action: { type: "allowAllRequests" },
        condition: { ...cond, resourceTypes: ["main_frame", "sub_frame"] } } };
    }
    types.add("main_frame");
  }
  if (types.size) cond.resourceTypes = [...types];
  else if (notTypes.size) cond.excludedResourceTypes = [...notTypes];
  if (!cond.urlFilter && !cond.requestDomains && !cond.initiatorDomains && !removeparam) return null; // too broad

  if (removeparam) {
    if (!cond.resourceTypes) cond.resourceTypes = ["main_frame", "sub_frame"];
    return { kind: "rule", rule: { priority: 1, action: { type: "redirect",
      redirect: { transform: { queryTransform: { removeParams: [removeparam] } } } }, condition: cond, removeparam: true } };
  }
  if (redirect) {
    if (!cond.resourceTypes) return null;
    return { kind: "rule", rule: { priority: important ? 4 : 2, action: { type: "redirect",
      redirect: { extensionPath: "/resources/" + redirect } }, condition: cond } };
  }
  return {
    kind: "rule",
    rule: {
      priority: isException ? 2 : important ? 4 : 1,
      action: { type: isException ? "allow" : "block" },
      condition: cond,
    },
  };
}

/* ---------------- cosmetic / procedural / scriptlets ---------------- */

const PROCEDURAL = /:(has-text|upward|xpath|matches-css(?:-before|-after)?|min-text-length|matches-path|matches-attr|remove-attr|remove-class|watch-attr|others|matches-media|-abp-has|-abp-contains|contains)\(/;
const UNSUPPORTED = /:(-abp-properties|matches-prop|shadow|watch-attr|others|matches-media)\(|\{|^\^|##\^/;

/** Classifies a cosmetic body into { kind: hide|style|procedural, text } or null. */
function classifyCosmetic(body) {
  let sel = body.trim();
  if (UNSUPPORTED.test(sel)) return null;
  // ABP aliases
  sel = sel.replace(/:-abp-has\(/g, ":has(").replace(/:-abp-contains\(/g, ":has-text(").replace(/:contains\(/g, ":has-text(");
  const style = sel.match(/^(.*):style\((.+)\)$/);
  if (style) {
    const [, base, decls] = style;
    if (/url\(|expression|\\|@import|[{}]/i.test(decls) || PROCEDURAL.test(base)) return null;
    return { kind: "style", text: `${base}{${decls}}` };
  }
  const remove = sel.match(/^(.*):remove\(\)$/);
  if (remove) sel = remove[1];
  if (PROCEDURAL.test(sel) || /:remove\(\)/.test(sel)) return { kind: "procedural", text: body.trim() };
  return { kind: "hide", text: sel };
}

/** Splits scriptlet args "a, b\, c, 'd'" → ["a", "b, c", "d"]. */
function splitArgs(s) {
  const out = [];
  let cur = "";
  let quote = "";
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "\\" && s[i + 1] === ",") { cur += ","; i++; continue; }
    if (!quote && (c === "'" || c === '"') && !cur.trim()) { quote = c; continue; }
    if (quote && c === quote) { quote = ""; continue; }
    if (!quote && c === ",") { out.push(cur.trim()); cur = ""; continue; }
    cur += c;
  }
  if (cur.trim() || out.length) out.push(cur.trim());
  return out;
}

const SCRIPTLET_ALIASES = {
  "set-constant": "set", set: "set",
  "abort-on-property-read": "aopr", aopr: "aopr",
  "abort-on-property-write": "aopw", aopw: "aopw",
  "abort-current-script": "acs", acs: "acs", "abort-current-inline-script": "acs", acis: "acs",
  "abort-on-stack-trace": "aost", aost: "aost",
  "addEventListener-defuser": "aeld", "prevent-addEventListener": "aeld", aeld: "aeld",
  "no-setTimeout-if": "nostif", "prevent-setTimeout": "nostif", nostif: "nostif", "setTimeout-defuser": "nostif",
  "no-setInterval-if": "nosiif", "prevent-setInterval": "nosiif", nosiif: "nosiif", "setInterval-defuser": "nosiif",
  "adjust-setTimeout": "nano-stb", "nano-setTimeout-booster": "nano-stb", "nano-stb": "nano-stb",
  "adjust-setInterval": "nano-sib", "nano-setInterval-booster": "nano-sib", "nano-sib": "nano-sib",
  "window.open-defuser": "nowoif", "no-window-open-if": "nowoif", "prevent-window-open": "nowoif", nowoif: "nowoif",
  "no-fetch-if": "no-fetch-if", "prevent-fetch": "no-fetch-if",
  "no-xhr-if": "no-xhr-if", "prevent-xhr": "no-xhr-if",
  "json-prune": "json-prune",
  "remove-attr": "ra", ra: "ra",
  "remove-class": "rc", rc: "rc",
  "remove-node-text": "rmnt", rmnt: "rmnt",
  "set-local-storage-item": "set-local-storage-item",
  "set-session-storage-item": "set-session-storage-item",
  "set-cookie": "set-cookie",
  "remove-cookie": "remove-cookie", "cookie-remover": "remove-cookie",
  "noeval": "noeval", "noeval-silent": "noeval", "silent-noeval": "noeval",
  "noeval-if": "noeval-if", "prevent-eval-if": "noeval-if",
  "nowebrtc": "nowebrtc",
  "nofab": "nofab", "fuckadblock.js-3.2.0": "nofab",
  "popads-dummy": "popads-dummy", "popads.net": "popads-dummy",
  "href-sanitizer": "href-sanitizer",
  "set-attr": "set-attr",
};
const ABP_SNIPPETS = {
  "abort-on-property-read": "aopr", "abort-on-property-write": "aopw",
  "abort-current-inline-script": "acs", "abort-current-script": "acs",
  "json-prune": "json-prune", "override-property-read": "set",
  "prevent-listener": "aeld", "cookie-remover": "remove-cookie",
};

function parseScriptlet(body) {
  const m = body.match(/^\+js\((.*)\)$/);
  if (!m) return null;
  if (!m[1].trim()) return { all: true };
  const [rawName, ...args] = splitArgs(m[1]);
  const name = SCRIPTLET_ALIASES[rawName.replace(/\.js$/, "")];
  return name ? { call: [name, ...args] } : null;
}

function parseAbpSnippets(body) {
  const calls = [];
  for (const part of body.split(";")) {
    const tokens = (part.trim().match(/'[^']*'|"[^"]*"|\S+/g) || []).map((t) => t.replace(/^['"]|['"]$/g, ""));
    if (!tokens.length) continue;
    const name = ABP_SNIPPETS[tokens[0]];
    if (!name) return null;
    calls.push([name, ...tokens.slice(1)]);
  }
  return calls.length ? calls : null;
}

/* ---------------- compile ---------------- */

const lists = await Promise.all(
  SOURCES.map(async (s) => {
    try {
      const { lines, version } = await loadList(s.url);
      console.log(`fetched ${s.id}: ${lines.length} lines`);
      return { ...s, lines, version };
    } catch (e) {
      console.warn(`! failed ${s.id}: ${e.message}`);
      return { ...s, lines: [], version: "", failed: true };
    }
  })
);

// Refuse to build from partial data: a failed list would silently drop protections.
const failedLists = lists.filter((l) => l.failed);
if (failedLists.length && !process.env.NANAGUARD_ALLOW_PARTIAL) {
  console.error("Aborting, lists failed to download: " + failedLists.map((l) => l.id).join(", ") + " (set NANAGUARD_ALLOW_PARTIAL=1 to build anyway)");
  process.exit(1);
}

// $badfilter disables the identical filter in any list.
const badfilters = new Set();
for (const { lines } of lists) {
  for (const l of lines) {
    if (/\$(.*,)?badfilter(,|$)/.test(l)) badfilters.add(l.replace(/,badfilter|badfilter,|\$badfilter$/, ""));
  }
}

const cats = Object.fromEntries(CATEGORIES.map((c) => [c, {
  rules: [], seen: new Set(), generic: new Map(), genericExceptions: new Map(),
  siteRules: [], siteExceptions: new Set(), noGenericHide: new Set(),
  scriptlets: new Map(), scriptletOff: new Map(), securityHosts: new Set(), popupHosts: new Set(),
}]));

for (const list of lists) {
  const C = cats[list.cat];
  for (const line of list.lines) {
    if (!line || line.startsWith("!") || line.startsWith("[") || line.startsWith("#") && !line.startsWith("##") && !line.startsWith("#@#")) continue;
    if (badfilters.has(line) || line.includes("badfilter")) continue;
    if (list.cat === "security") {
      // Plain "host" lines (hosts-file style lists).
      const h = line.toLowerCase().replace(/^(0\.0\.0\.0|127\.0\.0\.1)\s+/, "");
      if (validHost(h)) { C.securityHosts.add(h); continue; }
    }

    // ----- cosmetic family -----
    const cos = line.match(/^([^#$]*?)(##|#@#|#\?#|#@\?#|#\$#|#@\$#|#%#|#@%#|\$\$|\$@\$)(.+)$/);
    if (cos) {
      const [, domainsText, sep, body] = cos;
      const { include, exclude, dropped } = parseDomains(domainsText, ",");
      if (domainsText && !include.length && !exclude.length) { stats.skippedCosmetic++; continue; }
      if (dropped && !include.length && !exclude.length) { stats.skippedCosmetic++; continue; }

      // scriptlets
      if (body.startsWith("+js(") && (sep === "##" || sep === "#@#")) {
        const s = parseScriptlet(body);
        if (!s) { stats.skippedScriptlets++; continue; }
        if (sep === "#@#") {
          for (const d of include) {
            if (!C.scriptletOff.has(d)) C.scriptletOff.set(d, new Set());
            C.scriptletOff.get(d).add(s.all ? "*" : JSON.stringify(s.call));
          }
          continue;
        }
        if (!include.length) { stats.skippedScriptlets++; continue; } // generic scriptlets: skipped
        for (const d of include) {
          if (!C.scriptlets.has(d)) C.scriptlets.set(d, []);
          C.scriptlets.get(d).push(s.call);
        }
        continue;
      }
      if (sep === "#$#") {
        const calls = parseAbpSnippets(body);
        if (!calls || !include.length) { stats.skippedScriptlets++; continue; }
        for (const d of include) {
          if (!C.scriptlets.has(d)) C.scriptlets.set(d, []);
          C.scriptlets.get(d).push(...calls);
        }
        continue;
      }
      if (sep !== "##" && sep !== "#@#" && sep !== "#?#" && sep !== "#@?#") { stats.skippedCosmetic++; continue; }

      const c = classifyCosmetic(body);
      if (!c) { stats.skippedCosmetic++; continue; }
      const exception = sep === "#@#" || sep === "#@?#";
      if (exception) {
        if (!include.length) continue;
        for (const d of include) {
          C.siteExceptions.add(`${d}\n${c.text}`);
          if (!C.genericExceptions.has(c.text)) C.genericExceptions.set(c.text, new Set());
          C.genericExceptions.get(c.text).add(d);
        }
      } else if (!include.length) {
        if (c.kind === "procedural") { stats.skippedCosmetic++; continue; } // too costly site-wide
        if (exclude.length) {
          if (!C.genericExceptions.has(c.text)) C.genericExceptions.set(c.text, new Set());
          exclude.forEach((d) => C.genericExceptions.get(c.text).add(d));
          C.generic.set(c.text, c.kind);
        } else C.generic.set(c.text, c.kind);
      } else {
        C.siteRules.push({ ...c, include, exclude });
      }
      continue;
    }

    // ----- network -----
    const r = convertNetwork(line);
    if (!r) { stats.skippedNetwork++; continue; }
    if (r.kind === "genericHide") { C.noGenericHide.add(r.host); continue; }
    if (r.kind === "popup") {
      if (validHost(r.host)) cats.ads.popupHosts.add(r.host);
      continue;
    }
    const rule = r.rule;
    // Security: plain host blocks go to the "dangerous site" page (handled at runtime).
    if (list.cat === "security" && rule.action.type === "block") {
      const m = rule.condition.urlFilter?.match(/^\|\|([a-z0-9.-]+)\^?$/);
      const onlyUrl = Object.keys(rule.condition).every((k) => k === "urlFilter" || k === "resourceTypes");
      if (m && validHost(m[1]) && onlyUrl) {
        C.securityHosts.add(m[1]);
        continue;
      }
      if (!rule.condition.resourceTypes) rule.condition.resourceTypes = ALL_TYPES;
    }
    const key = JSON.stringify(rule);
    if (C.seen.has(key)) continue;
    C.seen.add(key);
    C.rules.push(rule);
  }
}

// Built-in: strip the most common click/campaign tracking tags from page URLs.
cats.privacy.rules.push({
  priority: 1, removeparam: true,
  action: { type: "redirect", redirect: { transform: { queryTransform: { removeParams: [
    "utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "utm_id", "utm_name", "utm_cid",
    "utm_reader", "utm_referrer", "utm_social", "utm_brand", "fbclid", "gclid", "gclsrc", "dclid", "gbraid", "wbraid",
    "msclkid", "yclid", "ttclid", "twclid", "igshid", "li_fat_id", "mc_cid", "mc_eid", "mkt_tok", "oly_anon_id",
    "oly_enc_id", "vero_id", "vero_conv", "_hsenc", "_hsmi", "srsltid", "epik", "s_kwcid", "ef_id",
  ] } } } },
  condition: { resourceTypes: ["main_frame"] },
});

/* ---------------- compaction + output ---------------- */

const KIND_ORDER = (r) =>
  r.action.type === "allowAllRequests" ? 0 :
  r.action.type === "allow" ? 1 :
  r.removeparam ? 3 : 2;

function compact(rules) {
  const HOST_ONLY = /^\|\|([a-z0-9.-]+)\^?$/;
  const groups = new Map();
  const paramGroups = new Map();
  const rest = [];
  for (const r of rules) {
    if (r.removeparam) {
      // The browser applies only ONE query transform per request, so all generic
      // (site-independent) removeparam filters must live in a single rule.
      const generic = Object.keys(r.condition).every((k) => k === "resourceTypes");
      const key = generic ? "generic" : JSON.stringify([r.priority, r.condition]);
      if (!paramGroups.has(key)) paramGroups.set(key, { ...r, condition: { ...r.condition }, params: new Set(), generic });
      const g = paramGroups.get(key);
      if (generic) g.condition.resourceTypes = [...new Set([...(g.condition.resourceTypes || []), ...(r.condition.resourceTypes || [])])];
      r.action.redirect.transform.queryTransform.removeParams.forEach((p) => g.params.add(p));
      continue;
    }
    const m = !r.condition.isUrlFilterCaseSensitive && !r.condition.requestDomains && r.condition.urlFilter?.match(HOST_ONLY);
    if (!m || !validHost(m[1])) { rest.push(r); continue; }
    const { urlFilter, ...cond } = r.condition;
    const key = JSON.stringify([r.priority, r.action, cond]);
    if (!groups.has(key)) groups.set(key, { priority: r.priority, action: r.action, condition: cond, domains: new Set() });
    groups.get(key).domains.add(m[1]);
  }
  const out = [];
  for (const g of groups.values()) {
    const domains = [...g.domains].sort();
    for (let i = 0; i < domains.length; i += 1000) {
      out.push({ priority: g.priority, action: g.action, condition: { requestDomains: domains.slice(i, i + 1000), ...g.condition } });
    }
  }
  // Site-specific transforms also strip the generic params, so whichever rule wins does both.
  const genericParams = paramGroups.get("generic")?.params || new Set();
  for (const g of paramGroups.values()) {
    if (!g.generic) genericParams.forEach((p) => g.params.add(p));
    out.push({ priority: g.priority, removeparam: true,
      action: { type: "redirect", redirect: { transform: { queryTransform: { removeParams: [...g.params].sort() } } } },
      condition: g.condition });
  }
  return [...out, ...rest];
}

const out = (f) => path.join(ROOT, "rules", f);
await rm(path.join(ROOT, "rules", "scriptlets"), { recursive: true, force: true });
const runtime =await readFile(path.join(ROOT, "src/content/scriptlets-runtime.js"), "utf8");
const meta = { generated: new Date().toISOString(), sources: [], categories: {}, ...{} };

for (const s of lists) meta.sources.push({ id: s.id, cat: s.cat, title: s.title, version: s.version, ok: !s.failed });

for (const cat of CATEGORIES) {
  const C = cats[cat];

  if (cat === "security") {
    // Subresources from dangerous hosts are blocked statically; top-level visits are
    // redirected to the warning page by a dynamic rule (needs the runtime extension URL).
    const sub = ALL_TYPES.filter((t) => t !== "main_frame");
    for (const h of C.securityHosts) {
      C.rules.push({ priority: 5, action: { type: "block" }, condition: { urlFilter: `||${h}^`, resourceTypes: sub } });
    }
  }

  let rules = compact(C.rules);
  rules.sort((a, b) => KIND_ORDER(a) - KIND_ORDER(b));
  if (rules.length > MAX_RULES_PER_SET) {
    console.warn(`${cat}: capping ${rules.length} → ${MAX_RULES_PER_SET} rules`);
    // Keep exceptions and removeparam; drop the tail of plain blocks.
    const keep = rules.filter((r) => KIND_ORDER(r) !== 2);
    const blocks = rules.filter((r) => KIND_ORDER(r) === 2).slice(0, MAX_RULES_PER_SET - keep.length);
    rules = [...keep.filter((r) => KIND_ORDER(r) < 2), ...blocks, ...keep.filter((r) => KIND_ORDER(r) === 3)];
  }
  rules.forEach((r, i) => (r.id = i + 1));
  const firstBlockId = (rules.find((r) => KIND_ORDER(r) === 2) || { id: rules.length + 1 }).id;
  const firstParamId = (rules.find((r) => KIND_ORDER(r) === 3) || { id: rules.length + 1 }).id;
  await writeFile(out(`net-${cat}.json`),
    JSON.stringify(rules.map(({ id, priority, action, condition }) => ({ id, priority, action, condition }))) + "\n");

  // generic CSS (minus selectors with exceptions → applied per site by background)
  const genericExc = [];
  for (const [text, domains] of C.genericExceptions) {
    if (C.generic.has(text)) genericExc.push([C.generic.get(text) === "style" ? 1 : 0, text, [...domains].sort()]);
    C.generic.delete(text);
  }
  const css = [`/* Generated by scripts/update-filters.mjs (${cat}) - do not edit */`];
  for (const [text, kind] of C.generic) css.push(kind === "style" ? text : `${text}{display:none!important}`);
  await writeFile(out(`${cat}-generic.css`), css.join("\n") + "\n");

  // site-specific: domain -> [[kind(0 hide,1 style,2 procedural), text, excludes?]]
  const sites = {};
  const KIND = { hide: 0, style: 1, procedural: 2 };
  for (const { kind, text, include, exclude } of C.siteRules) {
    for (const d of include) {
      if (C.siteExceptions.has(`${d}\n${text}`)) continue;
      (sites[d] ||= []).push(exclude.length ? [KIND[kind], text, exclude] : [KIND[kind], text]);
    }
  }
  await writeFile(out(`${cat}-cosmetic.json`),
    JSON.stringify({ sites, genericExceptions: genericExc, noGenericHide: [...C.noGenericHide].sort() }) + "\n");

  // scriptlets
  const data = {};
  for (const [d, calls] of C.scriptlets) {
    const seen = new Set();
    data[d] = calls.filter((c) => { const k = JSON.stringify(c); return seen.has(k) ? false : seen.add(k); });
  }
  const off = {};
  for (const [d, set] of C.scriptletOff) off[d] = [...set];
  const hosts = Object.keys(data).sort();

  // Shard by host so each page only parses the slice that can apply to it (~60 KB each).
  const size = JSON.stringify(data).length;
  const shardCount = Math.max(1, Math.ceil(size / 60000));
  const hash = (s) => { let h = 2166136261; for (const ch of s) h = Math.imul(h ^ ch.charCodeAt(0), 16777619); return (h >>> 0) % shardCount; };
  const shards = Array.from({ length: shardCount }, () => ({ calls: {}, hosts: [] }));
  for (const d of hosts) {
    const s = shards[hash(d)];
    s.calls[d] = data[d];
    s.hosts.push(d);
  }
  await mkdir(path.join(ROOT, "rules", "scriptlets"), { recursive: true });
  const shardIndex = [];
  for (let i = 0; i < shardCount; i++) {
    if (!shards[i].hosts.length) continue;
    const file = `rules/scriptlets/${cat}-${i}.js`;
    const json = JSON.stringify({ calls: shards[i].calls, off });
    const bundle = runtime.replace("/*__BLK_DATA__*/null", () => json);
    await writeFile(path.join(ROOT, file), bundle);
    shardIndex.push({ file, hosts: shards[i].hosts });
  }
  await writeFile(out(`${cat}-scriptlets.json`), JSON.stringify(shardIndex) + "\n");

  if (cat === "security") await writeFile(out("security-hosts.json"), JSON.stringify([...C.securityHosts].sort()) + "\n");
  if (cat === "ads") await writeFile(out("popup-hosts.json"), JSON.stringify([...C.popupHosts].sort()) + "\n");

  meta.categories[cat] = {
    networkRules: rules.length,
    firstBlockId,
    firstParamId,
    genericSelectors: C.generic.size,
    siteSelectors: C.siteRules.length,
    proceduralSelectors: C.siteRules.filter((r) => r.kind === "procedural").length,
    scriptletHosts: hosts.length,
    scriptletCalls: Object.values(data).reduce((n, c) => n + c.length, 0),
    ...(cat === "security" ? { dangerousHosts: C.securityHosts.size } : {}),
    ...(cat === "ads" ? { popupHosts: C.popupHosts.size } : {}),
  };
}
// Security has no cosmetic/scriptlet data.
for (const f of ["security-generic.css", "security-cosmetic.json", "security-scriptlets.json"]) await rm(out(f), { force: true });
meta.skipped = stats;
await writeFile(out("meta.json"), JSON.stringify(meta, null, 2) + "\n");
console.log(JSON.stringify(meta.categories, null, 2), stats);
