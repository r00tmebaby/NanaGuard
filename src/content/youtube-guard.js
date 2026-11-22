/* YouTube guard (isolated world, youtube.com top frame):
 *  1. AI label spotlight – YouTube requires creators to disclose realistic AI/altered
 *     content ("Altered or synthetic content"), but hides it in the description. We show it.
 *  2. Deepfake scam videos – famous name + crypto giveaway / "double your coins" / miracle
 *     cure patterns (the AI fakes that actually cost people money) get a warning.
 *  3. "Check facts" button under the title → Google / fact-checkers / ChatGPT in a new tab.
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
    // Label text: metadata area (incl. "How this content was made") + first-load page data. Not comments.
    let labelText = meta ? meta.textContent : "";
    const reel = document.querySelector("ytd-reel-video-renderer[is-active]");
    if (reel) labelText += reel.textContent;
    return { title, description, channel, live, labelText };
  }
  function initialDataHasLabel(id) {
    for (const s of document.scripts) {
      const t = s.textContent;
      if (t.length > 1000 && t.includes("ytInitialData") && t.includes(id) && hasAiLabel(t)) return true;
    }
    return false;
  }

  /* ---------------- fact-check button ---------------- */
  function addCheckButton(message) {
    const host = document.querySelector("ytd-watch-metadata #title");
    if (!host || host.querySelector("blockify-check")) return;
    const el = document.createElement("blockify-check");
    el.style.cssText = "all:initial;display:inline-block;margin:6px 0 2px;";
    const root = el.attachShadow({ mode: "closed" });
    const style = document.createElement("style");
    style.textContent = `button{font:500 13px/1 system-ui,Roboto,sans-serif;border:1px solid #c7d2fe;background:#eef2ff;color:#3730a3;
      border-radius:999px;padding:7px 12px;cursor:pointer;margin-right:6px}button:hover{background:#e0e7ff}
      @media (prefers-color-scheme: dark){button{background:#1e1b4b;color:#c7d2fe;border-color:#3730a3}}`;
    root.append(style);
    for (const [engine, label] of [["google", "🔎 Check facts"], ["factcheck", "Fact-checkers"], ["chatgpt", "Ask ChatGPT"]]) {
      const b = document.createElement("button");
      b.textContent = label;
      b.title = `${BLK.FACT_ENGINES[engine]} about this video (opens a new tab)`;
      b.addEventListener("click", () => {
        const { title } = context();
        message({ cmd: "factCheck", engine, text: title, url: location.href });
      });
      root.append(b);
    }
    host.append(el);
  }

  /* ---------------- start ---------------- */
  function start({ settings, warn, send, message }) {
    const { guards } = settings;
    const done = new Set();
    const pause = () => { const v = document.querySelector("#movie_player video"); if (v && !v.paused) v.pause(); };

    const check = () => {
      if (guards.factcheck) addCheckButton(message);
      if (!guards.ai) return;
      const id = videoId();
      if (!id) return;
      const ctx = context();
      if (!ctx.title) return;

      if (!done.has("scam:" + id)) {
        const a = assess(ctx);
        if (a.flagged) {
          done.add("scam:" + id);
          send("deepfake");
          pause();
          const what = a.kind === "health" ? "a miracle cure or health product" : a.kind === "invest" ? "an investment platform" : "a crypto giveaway";
          warn({
            id: "deepfake-" + id,
            level: "high",
            title: "This video looks like a deepfake scam",
            lines: [
              `It uses ${a.celeb}'s name to promote ${what}. Scammers use AI to fake famous people's faces and voices.`,
              "Real celebrities never ask you to send money or crypto, scan a QR code, or buy a cure. Don't send anything.",
            ],
            actions: [
              { label: "Leave this video", kind: "primary", run: () => history.back() },
              { label: "Watch anyway", kind: "secondary" },
            ],
          });
        }
      }
      if (!done.has("ai:" + id) && (hasAiLabel(ctx.labelText) || initialDataHasLabel(id))) {
        done.add("ai:" + id);
        send("ailabel");
        warn({
          id: "ai-" + id,
          level: "medium",
          title: "The creator says this video is AI-generated or altered",
          lines: ["YouTube's label: \"Altered or synthetic content\". What you see or hear may not be real."],
          actions: [{ label: "OK", kind: "secondary" }],
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
