/* Warning UI (isolated world): big, plain-language warnings written for older users.
 *   level "high"   → full-screen card over the page (fake sites, password reuse, fake CAPTCHA)
 *   level "medium" → banner at the top (scam requests, suspicious look-alikes)
 * Rendered in a closed shadow root so the page can't restyle or read it. */
// eslint-disable-next-line no-var
var BlkWarn = (() => {
  "use strict";
  let hostEl = null;
  let root = null;
  const shown = new Set();

  const CSS = `
    :host { all: initial; }
    * { box-sizing: border-box; }
    .wrap { font: 17px/1.5 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif; color: #111827; }
    .backdrop { position: fixed; inset: 0; background: rgb(17 24 39 / .72); display: grid; place-items: center;
                padding: 16px; pointer-events: auto; }
    .card { background: #fff; max-width: 560px; width: 100%; border-radius: 16px; padding: 28px 26px 22px;
            box-shadow: 0 20px 60px rgb(0 0 0 / .4); text-align: center; }
    .icon { width: 64px; height: 64px; margin: 0 auto 12px; border-radius: 18px; display: grid; place-items: center;
            font: 700 38px/1 system-ui, sans-serif; color: #fff; background: #dc2626; }
    h2 { margin: 0 0 10px; font-size: 23px; line-height: 1.3; }
    p { margin: 0 0 10px; }
    .site { font-weight: 700; overflow-wrap: anywhere; }
    .actions { display: flex; flex-direction: column; gap: 8px; margin-top: 16px; }
    button { font: inherit; font-size: 16px; border: 0; border-radius: 10px; padding: 12px 16px; cursor: pointer;
             background: #f3f4f6; color: #111827; }
    button.primary { background: #4f46e5; color: #fff; font-weight: 600; }
    button.link { background: none; color: #6b7280; font-size: 14px; padding: 6px; text-decoration: underline; }
    button:focus-visible { outline: 3px solid #4f46e5; outline-offset: 2px; }
    .brand { margin-top: 14px; font-size: 12px; color: #6b7280; }
    .banner { position: fixed; top: 0; left: 0; right: 0; pointer-events: auto; background: #fef3c7; color: #78350f;
              border-bottom: 3px solid #f59e0b; padding: 12px 16px; display: flex; gap: 14px; align-items: center;
              flex-wrap: wrap; box-shadow: 0 6px 20px rgb(0 0 0 / .15); }
    .banner .text { flex: 1 1 320px; }
    .banner b { display: block; font-size: 18px; }
    .banner .actions { flex-direction: row; margin: 0; flex-wrap: wrap; }
    .banner button { padding: 8px 14px; font-size: 15px; }
    @media (prefers-color-scheme: dark) {
      .card { background: #1b1e25; color: #e5e7eb; }
      button { background: #2a2e37; color: #e5e7eb; }
      .banner { background: #3a2a07; color: #fde68a; }
    }`;

  function ensure() {
    if (root && hostEl.isConnected) return root;
    hostEl = document.createElement("kinguard-warning");
    hostEl.style.cssText = "all:initial;position:fixed;inset:0;z-index:2147483647;pointer-events:none;";
    root = hostEl.attachShadow({ mode: "closed" });
    const style = document.createElement("style");
    style.textContent = CSS;
    const wrap = document.createElement("div");
    wrap.className = "wrap";
    root.append(style, wrap);
    document.documentElement.appendChild(hostEl);
    return root;
  }

  const make = (tag, props = {}, ...kids) => {
    const n = Object.assign(document.createElement(tag), props);
    n.append(...kids);
    return n;
  };

  /**
   * show({ id, level, title, lines: [string | {site}], actions: [{ label, kind, run }] })
   * kind: "primary" | "secondary" | "link". Each action closes the warning unless run() returns false.
   */
  function show({ id, level = "high", title, lines = [], actions = [] }) {
    if (shown.has(id)) return;
    shown.add(id);
    const r = ensure();
    const wrap = r.querySelector(".wrap");
    const paragraph = (line) =>
      typeof line === "string" ? make("p", { textContent: line }) : make("p", { className: "site", textContent: line.site });
    let el;
    const close = () => el.remove();
    const buttons = actions.map((a) =>
      make("button", {
        className: a.kind || "secondary",
        textContent: a.label,
        onclick: async () => {
          const keep = a.run ? await a.run() : undefined;
          if (keep !== false) close();
        },
      })
    );

    if (level === "high") {
      el = make("div", { className: "backdrop", role: "alertdialog", ariaModal: "true", ariaLabel: title },
        make("div", { className: "card" },
          make("div", { className: "icon", textContent: "!" }),
          make("h2", { textContent: title }),
          ...lines.map(paragraph),
          make("div", { className: "actions" }, ...buttons),
          make("div", { className: "brand", textContent: "Warning from KinGuard" })));
    } else {
      el = make("div", { className: "banner", role: "alert" },
        make("div", { className: "text" }, make("b", { textContent: "⚠ " + title }), ...lines.map((l) => (typeof l === "string" ? l + " " : l.site + " "))),
        make("div", { className: "actions" }, ...buttons));
    }
    wrap.appendChild(el);
    const first = el.querySelector("button.primary") || el.querySelector("button");
    if (first && level === "high") first.focus();
  }

  return { show };
})();
