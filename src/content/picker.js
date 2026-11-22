/* Element picker: injected on demand from the popup ("Hide something on this page").
 * Hover to highlight, click to choose, confirm to hide it on this site for good. */
(() => {
  "use strict";
  if (window.__kinguardPickerActive) return;
  window.__kinguardPickerActive = true;

  const api = globalThis.browser ?? globalThis.chrome;

  /* ---------- UI (shadow DOM so page CSS can't touch it) ---------- */
  const host = document.createElement("kinguard-picker");
  host.style.cssText = "all:initial;position:fixed;inset:0;z-index:2147483647;pointer-events:none;";
  const root = host.attachShadow({ mode: "closed" });
  root.innerHTML = `
    <style>
      :host { all: initial; }
      .box { position: fixed; pointer-events: none; border: 2px solid #6366f1; background: rgb(99 102 241 / .18);
             border-radius: 3px; transition: all .06s ease-out; display: none; }
      .bar { position: fixed; left: 50%; bottom: 20px; transform: translateX(-50%); pointer-events: auto;
             font: 14px/1.4 system-ui, -apple-system, "Segoe UI", sans-serif; color: #f9fafb; background: #1f2937;
             border-radius: 12px; padding: 10px 12px; display: flex; gap: 8px; align-items: center;
             box-shadow: 0 10px 30px rgb(0 0 0 / .35); max-width: calc(100vw - 32px); }
      .msg { padding: 0 6px; }
      button { font: inherit; border: 0; border-radius: 8px; padding: 6px 12px; cursor: pointer;
               background: #374151; color: #f9fafb; }
      button:hover { background: #4b5563; }
      button.primary { background: #6366f1; }
      button.primary:hover { background: #4f46e5; }
      button:disabled { opacity: .45; cursor: default; }
    </style>
    <div class="box"></div>
    <div class="bar">
      <span class="msg">Click the ad or banner you want gone</span>
      <button data-act="larger" hidden>Select larger</button>
      <button data-act="hide" class="primary" hidden>Hide it</button>
      <button data-act="cancel">Cancel</button>
    </div>`;
  const box = root.querySelector(".box");
  const bar = root.querySelector(".bar");
  const msg = root.querySelector(".msg");
  const btn = (a) => root.querySelector(`[data-act="${a}"]`);
  document.documentElement.appendChild(host);

  let hovered = null;
  let chosen = null;

  const show = (el) => {
    if (!el) {
      box.style.display = "none";
      return;
    }
    const r = el.getBoundingClientRect();
    Object.assign(box.style, {
      display: "block",
      left: `${r.left}px`,
      top: `${r.top}px`,
      width: `${r.width}px`,
      height: `${r.height}px`,
    });
  };

  const pick = (x, y) => {
    host.style.display = "none";
    const el = document.elementFromPoint(x, y);
    host.style.display = "";
    return el && el !== document.documentElement && el !== document.body ? el : null;
  };

  /* ---------- selector generation ---------- */
  const RANDOM = /\d{4,}|[a-z]+[A-Z][a-z]+\d|^[a-f0-9-]{10,}$|^(css|sc|jsx|svelte|emotion)-/;
  const matchesOnly = (sel, el) => {
    try {
      const m = document.querySelectorAll(sel);
      return m.length === 1 && m[0] === el;
    } catch {
      return false;
    }
  };
  const segment = (el) => {
    const classes = [...el.classList]
      .filter((c) => c.length < 40 && !RANDOM.test(c) && !/^(is-|has-|js-)|hover|active|focus|visible/.test(c))
      .slice(0, 3);
    return el.localName + classes.map((c) => "." + CSS.escape(c)).join("");
  };
  function selectorFor(el) {
    const parts = [];
    for (let n = el; n && n !== document.documentElement; n = n.parentElement) {
      if (n.id && !RANDOM.test(n.id) && document.querySelectorAll("#" + CSS.escape(n.id)).length === 1) {
        parts.unshift("#" + CSS.escape(n.id));
        return parts.join(" > ");
      }
      const seg = segment(n);
      parts.unshift(seg);
      if (matchesOnly(parts.join(" > "), el)) return parts.join(" > ");
      const parent = n.parentElement;
      if (parent) {
        const same = [...parent.children].filter((c) => c.localName === n.localName);
        if (same.length > 1) {
          parts[0] = `${seg}:nth-of-type(${same.indexOf(n) + 1})`;
          if (matchesOnly(parts.join(" > "), el)) return parts.join(" > ");
        }
      }
      if (n === document.body) break;
    }
    return parts.join(" > ");
  }

  /* ---------- interaction ---------- */
  const choose = (el) => {
    chosen = el;
    show(el);
    const r = el.getBoundingClientRect();
    msg.textContent = `Hide this ${Math.round(r.width)}×${Math.round(r.height)} area on every visit?`;
    btn("hide").hidden = false;
    btn("larger").hidden = false;
    btn("larger").disabled = !el.parentElement || el.parentElement === document.body;
  };

  const onMove = (e) => {
    if (chosen) return;
    const el = pick(e.clientX, e.clientY);
    if (el !== hovered) show((hovered = el));
  };
  const onClick = (e) => {
    if (e.composedPath().includes(host)) return;
    e.preventDefault();
    e.stopImmediatePropagation();
    const el = pick(e.clientX, e.clientY);
    if (el) choose(el);
  };
  const swallow = (e) => {
    if (!e.composedPath().includes(host)) {
      e.preventDefault();
      e.stopImmediatePropagation();
    }
  };
  const onKey = (e) => {
    if (e.key === "Escape") {
      e.preventDefault();
      if (chosen) {
        chosen = null;
        btn("hide").hidden = btn("larger").hidden = true;
        msg.textContent = "Click the ad or banner you want gone";
      } else stop();
    }
  };
  const onScroll = () => show(chosen || hovered);

  function stop() {
    removeEventListener("mousemove", onMove, true);
    removeEventListener("click", onClick, true);
    for (const t of ["mousedown", "mouseup", "pointerdown", "pointerup", "auxclick"]) removeEventListener(t, swallow, true);
    removeEventListener("keydown", onKey, true);
    removeEventListener("scroll", onScroll, true);
    host.remove();
    window.__kinguardPickerActive = false;
  }

  addEventListener("mousemove", onMove, true);
  addEventListener("click", onClick, true);
  for (const t of ["mousedown", "mouseup", "pointerdown", "pointerup", "auxclick"]) addEventListener(t, swallow, true);
  addEventListener("keydown", onKey, true);
  addEventListener("scroll", onScroll, true);

  bar.addEventListener("click", async (e) => {
    const act = e.target.closest("button")?.dataset.act;
    if (act === "cancel") return stop();
    if (act === "larger" && chosen?.parentElement && chosen.parentElement !== document.body) {
      return choose(chosen.parentElement);
    }
    if (act === "hide" && chosen) {
      const selector = selectorFor(chosen);
      chosen.style.setProperty("display", "none", "important");
      box.style.display = "none";
      btn("hide").hidden = btn("larger").hidden = true;
      btn("cancel").textContent = "Done";
      try {
        const res = await api.runtime.sendMessage({ cmd: "hideElement", selector });
        msg.textContent = res?.ok ? "Hidden. You can undo this in Kinguard settings." : "Couldn't save – try again.";
      } catch {
        msg.textContent = "Couldn't save – try again.";
      }
      setTimeout(stop, 2500);
    }
  });
})();
