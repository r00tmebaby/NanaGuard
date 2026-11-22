/* Procedural cosmetic filters (isolated world): rules plain CSS can't express, e.g.
 *   div.card:has-text(Sponsored)      hide cards containing "Sponsored"
 *   a[href*="ad"]:upward(2)           hide the link's grandparent
 *   .post:xpath(...) / :matches-css(position: fixed) / :remove() / :style(...)
 * Compiled once per page, re-applied (throttled) as the page changes. */
// eslint-disable-next-line no-var
var BlkProcedural = (() => {
  "use strict";

  const OPS = new Set([
    "has", "has-text", "matches-css", "matches-css-before", "matches-css-after", "min-text-length",
    "not", "upward", "xpath", "matches-path", "matches-attr", "remove", "remove-attr", "remove-class", "style", "if", "if-not",
  ]);
  const ACTIONS = new Set(["remove", "remove-attr", "remove-class", "style"]);

  const toRegex = (s) => {
    const m = /^\/(.+)\/([imsu]*)$/.exec(s);
    if (m) { try { return new RegExp(m[1], m[2]); } catch { return null; } }
    return new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  };

  /** Finds the argument end for "(" at index i, honouring nesting and quotes. */
  function closeParen(s, i) {
    let depth = 0;
    let quote = "";
    for (let j = i; j < s.length; j++) {
      const c = s[j];
      if (quote) { if (c === "\\") j++; else if (c === quote) quote = ""; continue; }
      if (c === '"' || c === "'") quote = c;
      else if (c === "(") depth++;
      else if (c === ")" && --depth === 0) return j;
    }
    return -1;
  }

  const hasProcedural = (s) => /:(has-text|upward|xpath|matches-css|min-text-length|matches-path|matches-attr|remove|remove-attr|remove-class|style|if|if-not)\(/.test(s);

  /** Compiles a selector into { css, tasks: [[op, arg]], action }. */
  function compile(src) {
    const s = src.trim();
    let css = "";
    const tasks = [];
    let action = null;
    let i = 0;
    let depthBracket = 0;
    let quote = "";
    let chunkStart = 0;
    const pushCss = (text) => {
      const first = !tasks.length && !css;
      if (!text.trim()) return;
      if (first) css = text.trim();
      else tasks.push(["spath", text]);
    };
    while (i < s.length) {
      const c = s[i];
      if (quote) { if (c === "\\") i++; else if (c === quote) quote = ""; i++; continue; }
      if (c === '"' || c === "'") { quote = c; i++; continue; }
      if (c === "[") depthBracket++;
      if (c === "]") depthBracket--;
      if (c === "(") { const end = closeParen(s, i); if (end < 0) return null; i = end + 1; continue; }
      if (c === ":" && depthBracket === 0 && s[i + 1] !== ":") {
        const m = /^:([a-z-]+)\(/.exec(s.slice(i));
        if (m && OPS.has(m[1])) {
          const name = m[1];
          const open = i + m[0].length - 1;
          const end = closeParen(s, open);
          if (end < 0) return null;
          const arg = s.slice(open + 1, end);
          // Native CSS :has()/:not() stay in the CSS part unless they contain procedural ops.
          if ((name === "has" || name === "not") && !hasProcedural(arg)) { i = end + 1; continue; }
          pushCss(s.slice(chunkStart, i).trimEnd());
          if (ACTIONS.has(name)) action = [name, arg];
          else if (name === "has" || name === "if") tasks.push(["has", compile(arg.trim().replace(/^>/, ":scope >"))]);
          else if (name === "not" || name === "if-not") tasks.push(["not", compile(arg)]);
          else tasks.push([name, arg]);
          i = end + 1;
          chunkStart = i;
          continue;
        }
      }
      i++;
    }
    pushCss(s.slice(chunkStart).trimEnd());
    if (!css && !tasks.length) return null;
    return { css: css || "*", tasks, action };
  }

  function run(compiled, roots, filterMode = false) {
    let nodes;
    if (filterMode) {
      nodes = roots.filter((el) => { try { return compiled.css === "*" || el.matches(compiled.css); } catch { return false; } });
    } else {
      nodes = [];
      for (const r of roots) {
        try {
          const sel = r === document ? compiled.css : (/^\s*[>+~]/.test(compiled.css) ? ":scope " + compiled.css : compiled.css);
          nodes.push(...r.querySelectorAll(sel));
        } catch { return []; }
      }
    }
    for (const [op, arg] of compiled.tasks) {
      if (!nodes.length) break;
      nodes = apply(op, arg, nodes);
    }
    return [...new Set(nodes)];
  }

  function apply(op, arg, nodes) {
    switch (op) {
      case "spath": {
        const out = [];
        const a = arg.trim();
        const comb = a[0];
        for (const n of nodes) {
          try {
            if (comb === "+" || comb === "~") {
              // Sibling combinators: walk following siblings (simple selector only).
              const sel = a.slice(1).trim();
              for (let sib = n.nextElementSibling; sib; sib = sib.nextElementSibling) {
                if (sib.matches(sel)) out.push(sib);
                if (comb === "+") break;
              }
            } else if (comb === ">" || /^\s/.test(arg)) {
              out.push(...n.querySelectorAll(":scope " + a));
            } else if (n.matches(a)) out.push(n);
          } catch { /* invalid selector */ }
        }
        return out;
      }
      case "has-text": {
        const re = toRegex(arg);
        return re ? nodes.filter((n) => re.test(n.textContent || "")) : [];
      }
      case "min-text-length": {
        const min = Number(arg) || 0;
        return nodes.filter((n) => (n.textContent || "").length >= min);
      }
      case "has":
        return arg ? nodes.filter((n) => run(arg, [n]).length > 0) : [];
      case "not":
        return arg ? nodes.filter((n) => run(arg, [n], true).length === 0) : nodes;
      case "upward": {
        const out = [];
        const n = Number(arg);
        for (const node of nodes) {
          if (Number.isInteger(n) && n > 0 && n < 256) {
            let p = node;
            for (let k = 0; k < n && p; k++) p = p.parentElement;
            if (p && p !== document.body && p !== document.documentElement) out.push(p);
          } else {
            try { const p = node.parentElement && node.parentElement.closest(arg); if (p) out.push(p); } catch { /* bad selector */ }
          }
        }
        return out;
      }
      case "xpath": {
        const out = [];
        for (const node of nodes) {
          try {
            const r = document.evaluate(arg, node, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
            for (let k = 0; k < r.snapshotLength; k++) if (r.snapshotItem(k).nodeType === 1) out.push(r.snapshotItem(k));
          } catch { /* bad xpath */ }
        }
        return out;
      }
      case "matches-css":
      case "matches-css-before":
      case "matches-css-after": {
        const pseudo = op === "matches-css-before" ? "::before" : op === "matches-css-after" ? "::after" : null;
        const i = arg.indexOf(":");
        if (i < 0) return [];
        const prop = arg.slice(0, i).trim();
        const raw = arg.slice(i + 1).trim();
        let re = null;
        if (/^\/.+\/[imsu]*$/.test(raw)) re = toRegex(raw);
        else {
          try { re = new RegExp("^" + raw.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*") + "$"); } catch { re = null; }
        }
        return re ? nodes.filter((n) => re.test(getComputedStyle(n, pseudo).getPropertyValue(prop))) : [];
      }
      case "matches-path": {
        const re = toRegex(arg);
        return re && re.test(location.pathname + location.search) ? nodes : [];
      }
      case "matches-attr": {
        const m = /^"?([^"=]+)"?(?:="?(.*?)"?)?$/.exec(arg);
        if (!m) return [];
        const nameRe = toRegex(m[1]);
        const valRe = m[2] !== undefined ? toRegex(m[2]) : null;
        return nodes.filter((n) => [...n.attributes].some((a) => nameRe.test(a.name) && (!valRe || valRe.test(a.value))));
      }
      default:
        return [];
    }
  }

  function act(compiled, el) {
    const [name, arg] = compiled.action || ["hide"];
    if (name === "remove") el.remove();
    else if (name === "remove-attr") {
      const re = toRegex(arg);
      for (const a of [...el.attributes]) if (re && re.test(a.name)) el.removeAttribute(a.name);
    } else if (name === "remove-class") {
      const re = toRegex(arg);
      for (const c of [...el.classList]) if (re && re.test(c)) el.classList.remove(c);
    } else if (name === "style") {
      if (/url\(|expression/i.test(arg)) return;
      for (const decl of arg.split(";")) {
        const i = decl.indexOf(":");
        if (i > 0) el.style.setProperty(decl.slice(0, i).trim(), decl.slice(i + 1).replace(/!important/, "").trim(), "important");
      }
    } else el.style.setProperty("display", "none", "important");
  }

  /** Starts applying a list of procedural selectors; returns a function that counts hits. */
  function start(selectors) {
    const compiled = selectors.map(compile).filter(Boolean);
    if (!compiled.length) return () => 0;
    const done = new WeakSet();
    let hits = 0;
    let lastCost = 0;
    const pass = () => {
      const t0 = performance.now();
      for (const c of compiled) {
        for (const el of run(c, [document])) {
          if (done.has(el) && !c.action) continue;
          done.add(el);
          act(c, el);
          hits++;
        }
      }
      lastCost = performance.now() - t0;
    };
    let timer = 0;
    const schedule = () => { if (!timer) timer = setTimeout(() => { timer = 0; pass(); }, Math.max(300, Math.min(5000, lastCost * 10))); };
    const begin = () => {
      pass();
      new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", begin, { once: true });
    else begin();
    return () => hits;
  }

  return { compile, run, start };
})();
