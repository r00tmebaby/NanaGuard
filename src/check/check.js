/* Fact check in another language: translates the text with Chrome's built-in translator (on this
 * computer), then opens the search. Without a translator (Firefox, older Chrome) the text is searched
 * as it is. Only ever opens NanaGuard's own search URLs. */
"use strict";

(async () => {
  const $ = (id) => document.getElementById(id);
  const params = new URLSearchParams(location.search);
  const engine = params.get("e");
  const text = String(params.get("q") || "").replace(/\s+/g, " ").trim().slice(0, 300);
  if (!(engine in BLK.FACT_ENGINES) || engine === "chatgpt" || !text) return;

  await BLK.loadI18n();
  BLK.localize();
  const langs = BLK.factLangs(await BLK.getSettings());
  const target = langs.search;

  let done = false;
  const go = (query, textLang) => {
    if (done) return;
    done = true;
    location.replace(BLK.factCheckUrl(engine, query, "", { ...langs, textLang }));
  };

  // Language of the text: Chrome's detector when it is ready to use, otherwise a guess from the letters.
  let source = BLK.guessLang(text, langs.answer);
  // (Only when no download is needed: a download would use up the click Chrome requires for the translator.)
  try {
    if ("LanguageDetector" in self && (await LanguageDetector.availability()) === "available") {
      const detector = await LanguageDetector.create();
      const [top] = await detector.detect(text);
      detector.destroy?.();
      if (top && top.confidence >= 0.5 && top.detectedLanguage && top.detectedLanguage !== "und") source = BLK.normLang(top.detectedLanguage);
    }
  } catch { /* keep the guess */ }
  if (!target || source === target || !("Translator" in self)) return go(text, source);

  const options = () => ({ sourceLanguage: source, targetLanguage: target });
  let state = "unavailable";
  try {
    state = await Translator.availability(options());
  } catch { /* unsupported pair */ }
  if (state === "unavailable") return go(text, source);

  const translate = async (monitor) => {
    try {
      const translator = await Translator.create(monitor ? { ...options(), monitor } : options());
      const out = String((await translator.translate(text)) || "").replace(/\s+/g, " ").trim();
      translator.destroy?.();
      return out ? go(out, target) : go(text, source);
    } catch {
      return go(text, source);
    }
  };

  if (state === "available") {
    setTimeout(() => go(text, source), 10000); // never leave the user on this page
    return translate();
  }

  // The language pack must be downloaded first, and Chrome only allows that after a click.
  const name = BLK.langName(target, BLK.I18N.lang, true);
  $("status").hidden = true;
  $("askText").textContent = BLK.t("check.ask",
    "To search in {lang}, Chrome needs to download a free {lang} language pack once. It stays on this computer.", { lang: name });
  $("ask").hidden = false;
  $("download").focus();
  $("skip").addEventListener("click", () => go(text, source));
  $("download").addEventListener("click", async () => {
    $("download").disabled = true;
    $("skip").disabled = true;
    $("progress").hidden = false;
    return translate((m) => m.addEventListener("downloadprogress", (e) => {
      $("progress").value = Number(e.loaded) || 0;
    }));
  });
})();
