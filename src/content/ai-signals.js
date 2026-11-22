/*
 * KinGuard AI-content signal detector (BlkAI).
 *
 * This module only reads TEXT that uploaders and platforms leave behind:
 * titles, descriptions, keywords, channel names, hashtags, and platform
 * labels such as YouTube's "Altered or synthetic content" badge. It does NOT
 * analyse pixels, audio or frames, so it can say "the text names an AI
 * generator / the platform labels this" but never "this frame is a deepfake".
 *
 * Usage: BlkAI.analyze({ title, description, keywords, channel, platformText, host })
 *   -> { level: "none" | "possible" | "likely" | "labelled", reasons: string[], tools: string[] }
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

      // Reasons, unique, max 4.
      const reasons = [];
      const addReason = (r) => {
        if (r && !reasons.includes(r)) reasons.push(r);
      };
      if (labelHit) addReason("The platform labels this as AI-generated or altered");
      if (toolNames.length) addReason("Names an AI generator: " + toolNames.join(", "));
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

  return { analyze, TOOLS };
})();
