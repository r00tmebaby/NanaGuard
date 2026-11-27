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
  const target = BLK.factTarget(engine, langs); // the answer language, or the search language for News/fact-checkers

  let done = false;
  const go = (query, textLang) => {
    if (done) return;
    done = true;
    location.replace(BLK.factCheckUrl(engine, query, "", { ...langs, textLang }));
  };

  // Language of the text: NanaGuard's guess; when unsure, Chrome's AI detector if it is ready to use (no
  // download: that would use up the click Chrome requires for the translator), then the browser's CLD.
  let source = BLK.guessLang(text, langs.answer);
  if (!source) {
    try {
      if ("LanguageDetector" in self && (await LanguageDetector.availability()) === "available") {
        const detector = await LanguageDetector.create();
        const [top] = await detector.detect(text);
        detector.destroy?.();
        if (top && top.confidence >= 0.5 && top.detectedLanguage && top.detectedLanguage !== "und") source = BLK.normLang(top.detectedLanguage);
      }
    } catch { /* try the next detector */ }
  }
  if (!source) source = await BLK.detectLang(text, langs.answer);
  // Still unknown but in Latin letters (a three-word claim): English is the likeliest foreign language. If it
  // isn't English, the translator gives the text back unchanged and it is searched as it is.
  const assumed = !source && /\p{L}/u.test(text) && /^[\p{Script=Latin}\P{L}]*$/u.test(text);
  if (assumed) source = "en";
  if (!target || !source || source === target || !("Translator" in self)) return go(text, assumed ? "" : source);

  const options = () => ({ sourceLanguage: source, targetLanguage: target });
  let state = "unavailable";
  try {
    state = await Translator.availability(options());
  } catch { /* unsupported pair */ }
  const original = () => go(text, assumed ? "" : source);
  if (state === "unavailable") return original();

  const translate = async (monitor) => {
    try {
      const translator = await Translator.create(monitor ? { ...options(), monitor } : options());
      const out = String((await translator.translate(text)) || "").replace(/\s+/g, " ").trim();
      translator.destroy?.();
      // Nothing came back, or the text came back unchanged (wrong source language): search the original.
      return out && out.toLowerCase() !== text.toLowerCase() ? go(out, target) : original();
    } catch {
      return original();
    }
  };

  if (state === "available") {
    setTimeout(original, 10000); // never leave the user on this page
    return translate();
  }

  // The language pack must be downloaded first, and Chrome only allows that after a click.
  const name = BLK.langName(target, BLK.I18N.lang, true);
  $("status").hidden = true;
  $("askText").textContent = BLK.t("check.ask",
    "To search in {lang}, Chrome needs to download a free {lang} language pack once. It stays on this computer.", { lang: name });
  $("ask").hidden = false;
  $("download").focus();
  $("skip").addEventListener("click", original);
  $("download").addEventListener("click", async () => {
    $("download").disabled = true;
    $("skip").disabled = true;
    $("progress").hidden = false;
    return translate((m) => m.addEventListener("downloadprogress", (e) => {
      $("progress").value = Number(e.loaded) || 0;
    }));
  });
})();
