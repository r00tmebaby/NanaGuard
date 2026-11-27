/* YouTube guard (isolated world, youtube.com top frame):
 *  1. AI label spotlight – YouTube requires creators to disclose realistic AI/altered
 *     content ("Altered or synthetic content"), but hides it in the description. We show it.
 *  2. Deepfake scam videos – famous name + crypto giveaway / "double your coins" / miracle
 *     cure patterns (the AI fakes that actually cost people money) get a warning.
 *  3. "Check facts" button under the title → Google / fact-checkers / ChatGPT in a new tab.
 *     Also "Find source" (Google Lens on the current frame, via the background) and watermark
 *     OCR + viewer comments fed into the AI signals.
 * Pixel-level deepfake detection is not attempted: it isn't reliable enough to show users. */
// eslint-disable-next-line no-var
var BlkYouTube = (() => {
  "use strict";

  const CELEBS = [
    "Elon Musk", "Musk", "Bill Gates", "Jeff Bezos", "Warren Buffett", "Mark Zuckerberg", "Martin Lewis", "Michael Saylor",
    "Cathie Wood", "Brad Garlinghouse", "Vitalik Buterin", "Changpeng Zhao", "CZ Binance", "MrBeast", "Mr Beast", "Dr\\.? Oz",
    "Sanjay Gupta", "Ben Carson", "Tom Hanks", "Taylor Swift", "Oprah", "Keanu Reeves", "Jordan Peterson", "Andrew Tate",
    "Richard Branson", "Tim Cook", "Sundar Pichai", "Satya Nadella", "Jensen Huang", "Sam Altman", "Michael Mosley",
    "Barbara O'Neill", "Gordon Ramsay", "Dolly Parton", "Ryan Garcia", "Cristiano Ronaldo", "Lionel Messi",
  ];
  const CELEB = new RegExp(`\\b(${CELEBS.join("|")})\\b`, "i");
  const CRYPTO = /\b(crypto|bitcoin|btc|ethereum|eth|xrp|ripple|doge|dogecoin|solana|sol|usdt|tether|shiba|pepe)\b/i;
  const SIGNALS = [
    { pts: 3, kind: "crypto", re: /\b(double|2x|x2|triple)\b.{0,30}\b(btc|bitcoin|eth|ethereum|xrp|crypto|coins?|money|usdt|sol|doge)\b/i },
    { pts: 3, kind: "crypto", re: /\bsend\b.{0,40}\b(btc|bitcoin|eth|xrp|usdt|crypto|sol|doge)\b/i },
    { pts: 2, kind: "crypto", re: /\b(giveaway|give ?away|airdrop|free (btc|bitcoin|eth|crypto|xrp|money))\b/i },
    { pts: 2, kind: "crypto", re: CRYPTO },
    { pts: 1, kind: "crypto", re: /\b(qr ?code|scan (the|this)|claim (your|now)|official (event|website)|limited time|only today|last chance)\b/i },
    // Known scam "platforms" pushed by fake celebrity videos, and the money promises they make.
    { pts: 3, kind: "invest", re: /\b(quantum ai|immediate (edge|connect|matrix|momentum|fortune)|bitcoin (era|code|prime|superstar)|trading (bot|platform|ai|app)|investment platform)\b/i },
    { pts: 2, kind: "invest", re: /\b(guaranteed (profits?|returns?|income)|passive income|earn (£|\$|€)?\d[\d,]* (a|per) (day|week)|investment opportunity|get rich|financial freedom)\b/i },
    { pts: 4, kind: "health", re: /\b(cures?|cured|reverses?|miracle|doctors (hate|are shocked)|one (simple |weird )?trick|eliminates?|melts? away|big pharma)\b.{0,60}\b(diabetes|arthritis|blood (sugar|pressure)|belly fat|joint pain|dementia|alzheimer'?s|tinnitus|neuropathy|weight|cancer|eyesight)\b/i },
  ];

  /** Scores a video's metadata; flagged only when a famous name is used to sell something. */
  function assess({ title = "", description = "", channel = "", live = false }) {
    const text = `${title}\n${description.slice(0, 3000)}`;
    const celeb = CELEB.exec(text) || CELEB.exec(channel);
    if (!celeb) return { flagged: false, score: 0 };
    // Anti-scam coverage (video is about the scam, not promoting it) is not flagged.
    if (/\b(scam|scams|scammers?|fraud|fake|deepfake|beware|warning|debunk(ed)?|hoax|exposed)\b/i.test(title)) return { flagged: false, score: 0 };
    let score = 2;
    const kinds = {};
    for (const s of SIGNALS) {
      if (s.re.test(text)) {
        score += s.pts;
        kinds[s.kind] = (kinds[s.kind] || 0) + s.pts;
      }
    }
    if (live) score += 1;
    if (CELEB.test(channel)) score += 1; // channel named after the celebrity
    const kind = Object.entries(kinds).sort((a, b) => b[1] - a[1])[0];
    return { flagged: score >= 6, score, celeb: celeb[1], kind: kind ? kind[0] : "" };
  }

  const AI_LABEL = /(Altered or synthetic content|Sound or visuals were significantly edited or digitally generated)/i;
  const hasAiLabel = (text) => AI_LABEL.test(text || "");
  const aiLabelReason = () => BLK.t("yt.reason_label", "YouTube's label: \"Altered or synthetic content\"");
  const scamReason = (kind, celeb) => kind === "health"
    ? BLK.t("yt.reason_scam_health", "Uses {celeb}'s name to promote a miracle cure or health product", { celeb })
    : kind === "invest"
      ? BLK.t("yt.reason_scam_invest", "Uses {celeb}'s name to promote an investment platform", { celeb })
      : BLK.t("yt.reason_scam_crypto", "Uses {celeb}'s name to promote a crypto giveaway", { celeb });
  const scamLine = (kind, celeb) => kind === "health"
    ? BLK.t("yt.scam_line_health", "It uses {celeb}'s name to promote a miracle cure or health product. Scammers use AI to fake famous people's faces and voices.", { celeb })
    : kind === "invest"
      ? BLK.t("yt.scam_line_invest", "It uses {celeb}'s name to promote an investment platform. Scammers use AI to fake famous people's faces and voices.", { celeb })
      : BLK.t("yt.scam_line_crypto", "It uses {celeb}'s name to promote a crypto giveaway. Scammers use AI to fake famous people's faces and voices.", { celeb });

  /* Heuristic AI signals from ai-signals.js (optional global; the chip and banner degrade to
   * "no signal" if it failed to load). forcedLabel = YouTube's own label was found in page data. */
  function analyzeAi(ctx, forcedLabel, watermarkText = "") {
    let res = { level: "none", reasons: [], tools: [] };
    if (typeof BlkAI !== "undefined" && BlkAI && typeof BlkAI.analyze === "function") {
      try {
        const out = BlkAI.analyze({
          title: ctx.title, description: ctx.description, keywords: [], channel: ctx.channel,
          platformText: ctx.labelText, host: location.hostname,
          comments: ctx.comments || [], watermarkText: watermarkText || "",
        });
        if (out && typeof out === "object") {
          res = {
            level: typeof out.level === "string" ? out.level : "none",
            reasons: Array.isArray(out.reasons) ? out.reasons : [],
            tools: Array.isArray(out.tools) ? out.tools : [],
          };
        }
      } catch { /* signals are best-effort */ }
    }
    if (forcedLabel && res.level !== "labelled") res = { level: "labelled", reasons: [aiLabelReason()], tools: [] };
    return res;
  }

  /* ---------------- page reading ---------------- */
  const videoId = () => {
    const u = new URL(location.href);
    return u.searchParams.get("v") || (u.pathname.match(/^\/shorts\/([\w-]+)/) || [])[1] || "";
  };
  function context() {
    const meta = document.querySelector("ytd-watch-metadata");
    const title = (meta && meta.querySelector("h1") ? meta.querySelector("h1").textContent : document.title.replace(/ - YouTube$/, "")).trim();
    const description = meta && meta.querySelector("#description") ? meta.querySelector("#description").textContent : "";
    const channel = meta && meta.querySelector("ytd-channel-name") ? meta.querySelector("ytd-channel-name").textContent.trim() : "";
    const live = !!document.querySelector(".ytp-live-badge:not([disabled]), .ytp-live") || /\bLIVE\b/.test(title);
    // Label text: the whole metadata area INCLUDING the description (YouTube's "How this content
    // was made" section lives inside it), the player (photorealistic AI gets an on-player label)
    // and the active Short. Not comments. The label regex is YouTube's exact wording, so a normal
    // description can't trigger it by accident.
    let labelText = meta ? meta.textContent : "";
    const player = document.querySelector("#movie_player");
    if (player) labelText += "\n" + player.textContent;
    const reel = document.querySelector("ytd-reel-video-renderer[is-active]");
    if (reel) labelText += "\n" + reel.textContent;
    // Viewer comments (YouTube loads them only after scrolling; the throttled re-check picks them up).
    const comments = [];
    for (const el of document.querySelectorAll("ytd-comment-thread-renderer #content-text")) {
      if (comments.length >= 150) break;
      const t = (el.textContent || "").trim().slice(0, 300);
      if (t) comments.push(t);
    }
    return { title, description, channel, live, labelText, comments };
  }
  function initialDataHasLabel(id) {
    for (const s of document.scripts) {
      const t = s.textContent;
      if (t.length > 1000 && t.includes("ytInitialData") && t.includes(id) && hasAiLabel(t)) return true;
    }
    return false;
  }

  /* ---------------- status chip + fact-check buttons under the title ---------------- */
  const status = () => ({
    labelled: { cls: "ai", text: BLK.t("yt.status_labelled", "AI-generated (labelled)") },
    likely: { cls: "ai", text: BLK.t("yt.status_likely", "Likely AI-generated") },
    possible: { cls: "maybe", text: BLK.t("yt.status_possible", "Possibly AI") },
    scam: { cls: "scam", text: BLK.t("yt.status_scam", "Possible deepfake scam") },
  });
  let statusEl = null;
  let factSettings = {}; // language choices for the fact-check buttons (set in start())
  // Any kind not in STATUS (none, hidden, ...) hides the chip. Only real signals are shown.
  function setStatus(kind, reasons = []) {
    if (!statusEl) return;
    const s = status()[kind];
    if (!s) {
      statusEl.hidden = true;
      statusEl.textContent = "";
      statusEl.title = "";
      return;
    }
    const why = reasons.length ? reasons.join(" · ") : BLK.t("yt.status_fallback", "NanaGuard found an AI signal");
    statusEl.hidden = false;
    statusEl.className = "s " + s.cls;
    statusEl.textContent = s.text;
    statusEl.title = BLK.t("yt.status_title", "{reasons} (based on the video's title, description, labels, viewer comments and watermark text — not a pixel scan)", { reasons: why });
  }

  function addCheckButton(showStatus = false, showButtons = true) {
    const host = document.querySelector("ytd-watch-metadata #title");
    if (!host || host.querySelector("nanaguard-check")) return;
    const el = document.createElement("nanaguard-check");
    el.style.cssText = "all:initial;display:inline-block;margin:6px 0 2px;";
    const root = el.attachShadow({ mode: "closed" });
    const style = document.createElement("style");
    style.textContent = `.row{display:flex;gap:6px;flex-wrap:nowrap;align-items:center}
      .t{font:600 12px/1 system-ui,Roboto,sans-serif;color:#6b7280;margin-right:2px;white-space:nowrap}
      button{display:inline-flex;align-items:center;gap:6px;font:500 13px/1 system-ui,Roboto,sans-serif;border:1px solid #c7d2fe;
      background:#eef2ff;color:#3730a3;border-radius:999px;padding:6px 12px;cursor:pointer;white-space:nowrap}
      button:hover{background:#e0e7ff}
      .s{font:600 12px/1 system-ui,Roboto,sans-serif;border-radius:999px;padding:7px 10px;white-space:nowrap;margin-right:6px;cursor:help}
      .s[hidden]{display:none}
      .sep{width:1px;align-self:stretch;min-height:20px;background:#c7d2fe;margin:0 4px}
      .ai{background:#fef3c7;color:#92400e}.maybe{background:#fff7ed;color:#9a3412}.scam{background:#fee2e2;color:#991b1b}
      @media (prefers-color-scheme: dark){button{background:#1e1b4b;color:#c7d2fe;border-color:#3730a3}.t{color:#9ca3af}
        .sep{background:#3730a3}
        .ai{background:#3a2a07;color:#fcd34d}.maybe{background:#2a1a05;color:#fdba74}.scam{background:#450a0a;color:#fca5a5}}`;
    const row = document.createElement("div");
    row.className = "row";
    root.append(style, row);
    if (showStatus) {
      statusEl = document.createElement("span");
      row.append(statusEl);
      setStatus("hidden");
    }
    if (!showButtons) { host.append(el); return; }
    const lead = document.createElement("span");
    lead.className = "t";
    lead.textContent = BLK.t("yt.check_facts", "Check facts:");
    row.append(lead);
    for (const engine of Object.keys(BLK.FACT_ENGINES)) {
      const b = document.createElement("button");
      b.append(BLK.icon(engine, 15), BLK.tt("FACT_SHORT", engine));
      b.title = BLK.t("yt.check_title", "{engine} about this video (opens a new tab)", { engine: BLK.tt("FACT_ENGINES", engine) });
      b.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        const { title } = context();
        const langs = BLK.factLangs(factSettings);
        const direct = () => window.open(BLK.factCheckUrl(engine, title, location.href, langs), "_blank", "noopener");
        // A search language may need the translator, which runs in NanaGuard's own check page:
        // the background opens it. Otherwise open directly from the click, which also works if the
        // extension was reloaded while this tab stayed open (messaging would silently fail then).
        if (BLK.needsTranslation(engine, title, langs) && api.runtime && api.runtime.id) {
          api.runtime.sendMessage({ cmd: "factCheck", engine, text: title, url: location.href })
            .then((res) => { if (!res || !res.ok || !res.value) direct(); }, direct);
          return;
        }
        direct();
      });
      row.append(b);
    }
    // "Find source": only the background can capture the video frame, so this goes through it.
    const sep = document.createElement("span");
    sep.className = "sep";
    row.append(sep);
    const find = document.createElement("button");
    const findLabel = document.createTextNode(BLK.t("yt.find_source", "Find source"));
    find.append(BLK.icon("google", 15), findLabel);
    find.title = BLK.t("yt.find_source_title", "Search Google Lens for where this video frame comes from (opens a new tab)");
    let busy = false;
    const say = (text, ms = 2500) => {
      findLabel.textContent = text;
      setTimeout(() => { findLabel.textContent = BLK.t("yt.find_source", "Find source"); }, ms);
    };
    // Fallback that needs neither a screenshot nor the extension background: YouTube's own
    // thumbnail of this video, sent to Lens by URL. Used when capture is impossible (extension
    // updated while this tab stayed open, or site access limited to "on click").
    const openThumbnailInLens = () => {
      const id = videoId();
      if (!id) return false;
      const thumb = `https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;
      window.open("https://lens.google.com/uploadbyurl?url=" + encodeURIComponent(thumb), "_blank", "noopener");
      return true;
    };
    find.addEventListener("click", async (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (busy) return;
      busy = true;
      say(BLK.t("yt.opening_lens", "Opening Google Lens…"), 4000);
      let opened = false;
      try {
        const v = document.querySelector("#movie_player video");
        if (v && api.runtime && api.runtime.id) {
          const r = v.getBoundingClientRect();
          const res = await api.runtime.sendMessage({
            cmd: "lensFrame",
            rect: { x: r.x, y: r.y, width: r.width, height: r.height },
            dpr: window.devicePixelRatio,
            vw: window.innerWidth,
          });
          opened = !!(res && res.ok && res.value);
        }
      } catch { /* extension reloaded, capture refused, or frame unavailable */ }
      if (!opened && !openThumbnailInLens()) say(BLK.t("yt.lens_failed", "Couldn't open Google Lens"));
      busy = false;
    });
    row.append(find);
    host.append(el);
  }

  /* ---------------- start ---------------- */
  function start({ settings, warn, send, message }) {
    const { guards } = settings;
    factSettings = settings;
    const done = new Set();
    const memo = new Map();
    const initCache = new Map();
    const pause = () => { const v = document.querySelector("#movie_player video"); if (v && !v.paused) v.pause(); };
    // Labels found in YouTube's own page data (first load and next-video navigation), from youtube.js.
    const labelled = new Set();
    document.addEventListener("nanaguard:ailabel", (e) => { labelled.add(String(e.detail || videoId())); setTimeout(check, 0); });
    let shownFor = "";
    // Watermark OCR per video: text read from the frame corners (AI tool watermarks such as Sora/Veo logos).
    const ocr = new Map();
    const ocrEntry = (id) => {
      let entry = ocr.get(id);
      if (!entry) { entry = { text: "", tries: 0, at: 0 }; ocr.set(id, entry); }
      return entry;
    };
    // Runs OCR only while the tab is visible, the video plays past its first seconds and no ad shows.
    const maybeOcr = (id) => {
      try {
        const entry = ocrEntry(id);
        if (document.visibilityState !== "visible") return;
        if (document.querySelector("#movie_player.ad-showing")) return;
        const v = document.querySelector("#movie_player video");
        if (!v || !(v.currentTime > 3) || v.paused) return;
        if (entry.tries >= 2 || Date.now() - entry.at <= 12000) return;
        entry.tries++;
        entry.at = Date.now();
        const r = v.getBoundingClientRect();
        api.runtime.sendMessage({
          cmd: "ocrVideo",
          rect: { x: r.x, y: r.y, width: r.width, height: r.height },
          dpr: window.devicePixelRatio,
          vw: window.innerWidth,
        }).then((res) => {
          if (res && res.ok && res.value && res.value.text) {
            entry.text += "\n" + res.value.text;
            memo.delete(id);
            setTimeout(check, 0);
          }
        }).catch(() => {});
      } catch { /* OCR is best-effort */ }
    };

    const check = () => {
      if (guards.factcheck || guards.ai) addCheckButton(guards.ai, guards.factcheck);
      if (!guards.ai) return;
      const id = videoId();
      if (!id) return;
      const ctx = context();
      if (!ctx.title) return;
      maybeOcr(id);
      const watermarkText = ocrEntry(id).text;
      const key = id + "|" + ctx.title + "|" + ctx.channel + "|" + ctx.description.length + "|" + ctx.labelText.length + "|" + ctx.live + "|" + labelled.has(id)
        + "|c" + ctx.comments.length + "|w" + watermarkText.length;
      if (memo.get(id) === key && shownFor === id) return;
      memo.set(id, key);
      shownFor = id;

      const verdict = assess(ctx);
      const initLabel = initCache.has(id) ? initCache.get(id) : (initCache.set(id, initialDataHasLabel(id)), initCache.get(id));
      const ai = analyzeAi(ctx, labelled.has(id) || hasAiLabel(ctx.labelText) || initLabel, watermarkText);
      if (verdict.flagged) setStatus("scam", [scamReason(verdict.kind, verdict.celeb)]);
      else setStatus(ai.level, ai.reasons);

      if (!done.has("scam:" + id)) {
        const a = verdict;
        if (a.flagged) {
          done.add("scam:" + id);
          send("deepfake");
          pause();
          warn({
            id: "deepfake-" + id,
            level: "high",
            title: BLK.t("yt.deepfake_title", "This video looks like a deepfake scam"),
            lines: [
              scamLine(a.kind, a.celeb),
              BLK.t("yt.deepfake_advice", "Real celebrities never ask you to send money or crypto, scan a QR code, or buy a cure. Don't send anything."),
            ],
            actions: [
              { label: BLK.t("yt.leave_video", "Leave this video"), kind: "primary", run: () => history.back() },
              { label: BLK.t("yt.watch_anyway", "Watch anyway"), kind: "secondary" },
            ],
          });
        }
      }
      if (!done.has("ai:" + id) && (ai.level === "labelled" || ai.level === "likely")) {
        done.add("ai:" + id);
        send("ailabel");
        const isLabel = ai.level === "labelled";
        const why = ai.reasons.length ? ai.reasons.join(". ").replace(/\.+$/, "") + "." : BLK.t("yt.ai_why_fallback", "Signals in the title or description point to AI generation.");
        warn({
          id: "ai-" + id,
          level: "medium",
          title: isLabel ? BLK.t("yt.ai_title_labelled", "The creator says this video is AI-generated or altered") : BLK.t("yt.ai_title_likely", "This video is probably AI-generated"),
          lines: isLabel
            ? [BLK.t("yt.ai_line_labelled", "YouTube's label: \"Altered or synthetic content\". What you see or hear may not be real.")]
            : [why, BLK.t("yt.ai_line_unreal", "What you see or hear may not be real.")],
          actions: [{ label: BLK.t("yt.ok", "OK"), kind: "secondary" }],
        });
      }
    };

    // Throttle (not debounce): YouTube mutates the DOM non-stop, so a debounce would never fire.
    let timer = 0;
    const schedule = () => { if (!timer) timer = setTimeout(() => { timer = 0; check(); }, 1500); };
    document.addEventListener("yt-navigate-finish", () => { setTimeout(check, 1500); setTimeout(check, 5000); });
    new MutationObserver(schedule).observe(document.documentElement, { childList: true, subtree: true });
    setTimeout(check, 1000);
  }

  return { start, assess, hasAiLabel };
})();
