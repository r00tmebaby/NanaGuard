/*
 * KinGuard AI-content signal detector (BlkAI).
 *
 * This module reads TEXT that uploaders and platforms leave behind:
 * titles, descriptions, keywords, channel names, hashtags, platform labels
 * such as YouTube's "Altered or synthetic content" badge, viewer comments,
 * OCR text of watermarks in a video corner, and metadata inside image files.
 * It does NOT analyse pixels, audio or frames, so it can say "the text names
 * an AI generator / the platform labels this / the file metadata says AI"
 * but never "this frame is a deepfake".
 *
 * Usage: BlkAI.analyze({ title, description, keywords, channel, platformText, host,
 *                        comments: string[], watermarkText: string })
 *   -> { level: "none" | "possible" | "likely" | "labelled", reasons: string[], tools: string[] }
 *
 *      BlkAI.watermarkHits(text) -> string[]   (AI tool names visibly watermarked in OCR text)
 *
 *      BlkAI.scanImageBytes(bytes) -> { level, reasons: string[], generator: string }
 *        (Uint8Array or ArrayBuffer; checks AI metadata and Content Credentials)
 *
 * Dependency-free, never throws, no innerHTML.
 */
// eslint-disable-next-line no-var
var BlkAI = (() => {
  "use strict";

  // AI generator tools. "ambiguous" tools are also ordinary words or names, so
  // they only count with a version number ("Veo 3"), as an AI-style hashtag
  // ("#veo3"), or when the text also contains the standalone word "AI".
  const TOOLS = [
    { name: "Sora", re: /\bSora\b/i, ambiguous: true },
    { name: "Veo", re: /\bVeo\b/i, ambiguous: true },
    { name: "Seedance", re: /\bSeedance\b/i, ambiguous: false },
    { name: "Kling", re: /\bKling\b/i, ambiguous: true },
    { name: "Runway", re: /\bRunway(?:\s*ML)?\b/i, ambiguous: true },
    { name: "Pika", re: /\bPika(?:\s*Labs)?\b/i, ambiguous: true },
    { name: "Luma", re: /\bLuma(?:\s+(?:Dream\s+Machine|Ray\d?))?\b/i, ambiguous: true },
    { name: "Hailuo", re: /\bHailuo(?:\s*AI)?\b/i, ambiguous: false },
    { name: "MiniMax", re: /\bMini\s?Max\b/i, ambiguous: false },
    { name: "Midjourney", re: /\bMid\s?journey\b/i, ambiguous: false },
    { name: "Stable Diffusion", re: /\bStable\s+Diffusion\b/i, ambiguous: false },
    { name: "Stable Video", re: /\bStable\s+Video(?:\s+Diffusion)?\b/i, ambiguous: false },
    { name: "DALL-E", re: /\bDALL[-\s]?E\b/i, ambiguous: false },
    { name: "Flux", re: /\bFlux\b/i, ambiguous: true },
    { name: "Firefly", re: /\bAdobe\s+Firefly\b|\bFirefly\s+(?:AI|Image|Video)\b/i, ambiguous: false },
    { name: "Ideogram", re: /\bIdeogram\b/i, ambiguous: false },
    { name: "Leonardo AI", re: /\bLeonardo\s*(?:\.ai|AI)\b/i, ambiguous: false },
    { name: "Hedra", re: /\bHedra\b/i, ambiguous: false },
    { name: "HeyGen", re: /\bHey\s?Gen\b/i, ambiguous: false },
    { name: "Synthesia", re: /\bSynthesia\b/i, ambiguous: false },
    { name: "D-ID", re: /\bD-ID\b/i, ambiguous: false },
    { name: "ElevenLabs", re: /\bEleven\s?Labs\b/i, ambiguous: false },
    { name: "Suno", re: /\bSuno\b/i, ambiguous: false },
    { name: "Udio", re: /\bUdio\b/i, ambiguous: false },
    { name: "Wan", re: /\bWan\b/i, ambiguous: true },
    { name: "Hunyuan Video", re: /\bHunyuan\s*Video\b/i, ambiguous: false },
    { name: "LTX Video", re: /\bLTX[-\s]?Video\b/i, ambiguous: false },
    { name: "PixVerse", re: /\bPix\s?Verse\b/i, ambiguous: false },
    { name: "Vidu", re: /\bVidu\b/i, ambiguous: false },
    { name: "Higgsfield", re: /\bHiggsfield\b/i, ambiguous: false },
    { name: "Krea", re: /\bKrea\b/i, ambiguous: true },
    { name: "Grok Imagine", re: /\bGrok\s+Imagine\b/i, ambiguous: false },
    { name: "Nano Banana", re: /\bNano\s+Banana\b/i, ambiguous: false },
    { name: "Imagen", re: /\bImagen\b/i, ambiguous: true },
    { name: "Dreamina", re: /\bDreamina\b/i, ambiguous: false },
    { name: "Viggle", re: /\bViggle\b/i, ambiguous: false },
    { name: "Kaiber", re: /\bKaiber\b/i, ambiguous: false }
  ];

  // Phrases that say the content is AI-made. Strong when in the title, weak
  // when only in the description.
  const PHRASES = [
    /\bAI[-\s]?generated\b/i,
    /\bmade\s+with\s+AI\b/i,
    /\bgenerated\s+(?:with|by|using)\s+AI\b/i,
    /\bAI\s+(?:video|film|movie|animation|art|artwork|music|song|cover|voice|clip|short|trailer|actor|influencer|model|girl|fight|scene)s?\b/i,
    /\bgenerative\s+AI\b/i,
    /\btext[-\s]to[-\s]video\b/i,
    /\bimage[-\s]to[-\s]video\b/i,
    /\bdeep\s?fake\b/i,
    /\bfully\s+AI\b/i,
    /\b100%\s+AI\b/i,
    /\bAI\s+filmmaking\b/i
  ];

  // Hashtags that signal AI-made content.
  const AI_TAG_RE = /^#(ai|aivideo|aiart|aiartwork|aifilm|aifilmmaking|aianimation|aimovie|aigenerated|generativeai|genai|aimusic|aicover|aivoice|deepfake|sora|sora2|veo|veo3|kling|klingai|runway|runwayml|seedance\w*|midjourney|stablediffusion|hailuo|pika|lumaai|aishorts|aiedit|aigirl|aiinfluencer)$/i;

  // Viewer comments that say the video looks AI-made or fake.
  const AI_COMMENT = /\b(ai[- ]?(generated|made|slop|video|garbage|crap|fake|voice)|made (with|by|using) ai|generated (with|by) ai|this is ai|this (video )?is (fake|ai)|it'?s ai|its ai|is this ai|is this real|looks (like )?ai|obviously ai|clearly ai|deep ?fake|ai fake|fake ai|not real)\b/i;

  // AI tools and labels that a video can visibly watermark in a corner.
  const WATERMARKS = [
    { name: "Sora", re: /\bSora\b/i },
    { name: "Veo", re: /\bVeo\b/i },
    { name: "Kling", re: /\bKling\b/i },
    { name: "Hailuo", re: /\bHailuo\b/i },
    { name: "MiniMax", re: /\bMini\s?Max\b/i },
    { name: "Pika", re: /\bPika\b/i },
    { name: "Runway", re: /\bRunway\b/i },
    { name: "Luma", re: /\bLuma\b/i },
    { name: "Vidu", re: /\bVidu\b/i },
    { name: "PixVerse", re: /\bPix\s?Verse\b/i },
    { name: "Higgsfield", re: /\bHiggsfield\b/i },
    { name: "Hedra", re: /\bHedra\b/i },
    { name: "Seedance", re: /\bSeedance\b/i },
    { name: "Dreamina", re: /\bDreamina\b/i },
    { name: "Jimeng", re: /\bJimeng\b/i },
    { name: "Gemini", re: /\bGemini\b/i },
    { name: "Grok", re: /\bGrok\b/i },
    { name: "Meta AI", re: /\bMeta\s+AI\b/i },
    { name: "Imagined with AI", re: /\bImagined\s+with\s+AI\b/i },
    { name: "Made with AI", re: /\bMade\s+with\s+AI\b/i },
    { name: "AI-generated", re: /\bAI[-\s]generated\b/i },
    { name: "Generated by AI", re: /\bGenerated\s+by\s+AI\b/i }
  ];

  // Generator names that Content Credentials or file metadata may carry.
  const GENERATORS = [
    { name: "OpenAI", re: /\bOpenAI\b/i },
    { name: "DALL-E", re: /\bDALL[-\s\W]{0,3}E\b/i },
    { name: "ChatGPT", re: /\bChatGPT\b/i },
    { name: "Adobe Firefly", re: /\bAdobe\s+Firefly\b/i },
    { name: "Firefly", re: /\bFirefly\b/i },
    { name: "Microsoft Designer", re: /\bMicrosoft\s+Designer\b/i },
    { name: "Bing Image Creator", re: /\bBing\s+Image\s+Creator\b/i },
    { name: "Imagen", re: /\bImagen\b/i },
    { name: "Gemini", re: /\bGemini\b/i },
    { name: "Midjourney", re: /\bMid\s?journey\b/i },
    { name: "Stable Diffusion", re: /\bStable\s+Diffusion\b/i },
    { name: "Meta AI", re: /\bMeta\s+AI\b/i },
    { name: "Grok", re: /\bGrok\b/i },
    { name: "Ideogram", re: /\bIdeogram\b/i },
    { name: "Leonardo", re: /\bLeonardo\b/i }
  ];

  // Platform labels (exact wording, case-insensitive) that the platform itself
  // attaches to a video.
  const STRICT_LABELS = [
    "Altered or synthetic content",
    "Sound or visuals were significantly edited or digitally generated",
    "Creator labeled as AI-generated",
    "AI info",
    "Made with AI",
    "Contains AI-generated media"
  ];

  const IMAGE_HEAD_BYTES = 2 * 1024 * 1024;
  const IMAGE_TAIL_BYTES = 256 * 1024;

  const LEVEL_RANK = { none: 0, possible: 1, likely: 2, labelled: 3 };
  const RANK_LEVEL = ["none", "possible", "likely", "labelled"];

  function str(v) {
    if (v == null) return "";
    if (Array.isArray(v)) {
      return v.filter((x) => x != null).map((x) => String(x)).join(" ");
    }
    return String(v);
  }

  function esc(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  function hasLabel(platformText) {
    const plat = platformText;
    for (const label of STRICT_LABELS) {
      const re = new RegExp("(?<![A-Za-z])" + esc(label) + "(?![A-Za-z])", "i");
      if (re.test(plat)) return true;
    }
    // "AI-generated content" is common in ordinary descriptions, so it only
    // counts as a label when the platform text is short or carries a label cue.
    if (/AI-generated content/i.test(plat)) {
      if (plat.length < 200 || /AI info|Made with AI|Creator labeled/i.test(plat)) {
        return true;
      }
    }
    return false;
  }

  // Ambiguous tools count only with a version number, an AI-style hashtag, or
  // the standalone word "AI" somewhere in the same text.
  function ambiguousHit(tool, text, tags) {
    const versionRe = new RegExp(
      "\\b" + esc(tool.name) + "(?:\\s*ML)?\\s*(?:gen[-\\s]?|ray\\s?)?v?\\d",
      "i"
    );
    if (versionRe.test(text)) return true;

    if (tagHit(tool, tags)) return true;

    return /\bAI\b/.test(text);
  }

  function tagHit(tool, tags) {
    const body = esc(tool.name.toLowerCase());
    const tagRe = new RegExp("^" + body + "(?:\\d+|ai|ml|gen\\d*|video)?$");
    for (const tag of tags) {
      if (tagRe.test(tag.slice(1).toLowerCase())) return true;
    }
    return false;
  }

  // Collapse whitespace and fix OCR "0" for "o" inside words of letters.
  function normalizeOcr(s) {
    return s
      .replace(/\s+/g, " ")
      .replace(/(?<=[A-Za-z])0+(?=[A-Za-z])/g, (m) => "o".repeat(m.length))
      .trim();
  }

  function watermarkHits(text) {
    try {
      const t = normalizeOcr(str(text));
      const out = [];
      for (const w of WATERMARKS) {
        if (w.re.test(t) && !out.includes(w.name)) out.push(w.name);
      }
      return out;
    } catch (e) {
      return [];
    }
  }

  function analyze(input) {
    try {
      const o = input && typeof input === "object" ? input : {};
      const title = str(o.title);
      const description = str(o.description);
      const keywords = str(o.keywords);
      const channel = str(o.channel);
      const platformText = str(o.platformText);

      const combined = [title, description, keywords, channel].join(" ");

      // Hashtags, unique, original casing kept.
      const allTags = [];
      const seenTags = new Set();
      for (const tag of combined.match(/#\w+/g) || []) {
        const key = tag.toLowerCase();
        if (!seenTags.has(key)) {
          seenTags.add(key);
          allTags.push(tag);
        }
      }
      const aiTags = allTags.filter((tag) => AI_TAG_RE.test(tag));

      // Tools.
      const toolNames = [];
      for (const tool of TOOLS) {
        const tagged = tool.ambiguous && tagHit(tool, allTags);
        if (!tagged && !tool.re.test(combined)) continue;
        if (tool.ambiguous && !tagged && !ambiguousHit(tool, combined, allTags)) continue;
        toolNames.push(tool.name);
      }

      // Visible AI watermarks read from the video corners.
      const watermarks = watermarkHits(o.watermarkText);
      for (const w of watermarks) {
        if (!toolNames.includes(w)) toolNames.push(w);
      }

      // Viewer comments.
      const comments = Array.isArray(o.comments) ? o.comments : [];
      let n = 0;
      let m = 0;
      for (const c of comments) {
        if (n >= 200) break;
        if (typeof c !== "string" || !c.trim()) continue;
        n++;
        if (AI_COMMENT.test(c)) m++;
      }
      const strongViewer = n >= 6 && (m >= 6 || m / n >= 0.25);
      const weakViewer = !strongViewer && m >= 3 && n > 0 && m / n >= 0.10;

      const titlePhrase = PHRASES.some((re) => re.test(title));
      const descPhrase = PHRASES.some((re) => re.test(description));
      const labelHit = hasLabel(platformText);

      // Level, by priority.
      let level = "none";
      if (labelHit) {
        level = "labelled";
      } else if (toolNames.length || titlePhrase || aiTags.length >= 2) {
        level = "likely";
      } else if (aiTags.length || descPhrase) {
        level = "possible";
      }

      // Viewer and watermark signals can raise the level, never lower it.
      let rank = LEVEL_RANK[level];
      const otherPossible = aiTags.length > 0 || descPhrase;
      if (strongViewer) {
        rank = Math.max(rank, LEVEL_RANK.likely);
      } else if (weakViewer) {
        rank = Math.max(rank, otherPossible ? LEVEL_RANK.likely : LEVEL_RANK.possible);
      }
      if (watermarks.length) rank = Math.max(rank, LEVEL_RANK.likely);
      level = RANK_LEVEL[rank];

      // Reasons, unique, max 4.
      const reasons = [];
      const addReason = (r) => {
        if (r && !reasons.includes(r)) reasons.push(r);
      };
      if (labelHit) addReason("The platform labels this as AI-generated or altered");
      if (watermarks.length) addReason("AI watermark visible in the video: " + watermarks.join(", "));
      if (toolNames.length) addReason("Names an AI generator: " + toolNames.join(", "));
      if (strongViewer || weakViewer) {
        addReason("Viewers say it looks AI-made or fake (" + m + " of " + n + " comments)");
      }
      if (titlePhrase) addReason("Title says it is AI-made");
      if (aiTags.length) addReason("AI hashtags: " + aiTags.slice(0, 4).join(", "));
      if (!titlePhrase && descPhrase) addReason("Description mentions AI-made content");

      return {
        level,
        reasons: reasons.slice(0, 4),
        tools: Array.from(new Set(toolNames))
      };
    } catch (e) {
      return { level: "none", reasons: [], tools: [] };
    }
  }

  // Convert a Uint8Array or ArrayBuffer to a Uint8Array, or null.
  function toBytes(b) {
    if (b instanceof Uint8Array) return b;
    if (b instanceof ArrayBuffer || Object.prototype.toString.call(b) === "[object ArrayBuffer]") {
      return new Uint8Array(b);
    }
    if (ArrayBuffer.isView(b)) return new Uint8Array(b.buffer, b.byteOffset, b.byteLength);
    return null;
  }

  // Latin1 decode, in chunks to stay under argument-count limits.
  function latin1(u8) {
    const parts = [];
    for (let i = 0; i < u8.length; i += 8192) {
      parts.push(String.fromCharCode.apply(null, u8.subarray(i, Math.min(i + 8192, u8.length))));
    }
    return parts.join("");
  }

  function findGenerator(text) {
    for (const g of GENERATORS) {
      if (g.re.test(text)) return g.name;
    }
    return "";
  }

  function scanImageBytes(bytes) {
    const none = () => ({ level: "none", reasons: [], generator: "" });
    try {
      const u8 = toBytes(bytes);
      if (!u8 || u8.length === 0) return none();

      // Only the start and the end of the file are read.
      let text = latin1(u8.subarray(0, Math.min(u8.length, IMAGE_HEAD_BYTES)));
      if (u8.length > IMAGE_HEAD_BYTES) {
        const start = Math.max(IMAGE_HEAD_BYTES, u8.length - IMAGE_TAIL_BYTES);
        text += "\n" + latin1(u8.subarray(start));
      }

      // Deterministic AI source markers (IPTC digital source type).
      if (text.includes("trainedAlgorithmicMedia") || text.includes("compositeWithTrainedAlgorithmicMedia")) {
        return {
          level: "labelled",
          reasons: ["The file says it was made with AI (IPTC digital source type)"],
          generator: findGenerator(text)
        };
      }

      // Stable Diffusion / ComfyUI generator settings.
      if (
        (text.includes("Negative prompt:") && text.includes("Steps:") && text.includes("Sampler:")) ||
        (text.includes('"class_type"') && text.includes("KSampler"))
      ) {
        return {
          level: "labelled",
          reasons: ["The file contains AI image generator settings"],
          generator: text.includes('"class_type"') ? "ComfyUI" : "Stable Diffusion"
        };
      }

      const gen = findGenerator(text);
      const c2pa = text.includes("c2pa") && (text.includes("jumb") || text.includes("jumd"));
      const reasons = [];
      let level = "none";
      let generator = "";

      if (c2pa) {
        reasons.push("Has Content Credentials (C2PA)");
        if (gen) {
          level = "likely";
          generator = gen;
          reasons.push("Content Credentials name an AI generator: " + gen);
        }
      } else if (gen) {
        level = "possible";
        generator = gen;
        reasons.push("Metadata names an AI generator: " + gen);
      }

      return { level, reasons: reasons.slice(0, 4), generator };
    } catch (e) {
      return none();
    }
  }

  return { analyze, TOOLS, watermarkHits, scanImageBytes };
})();
