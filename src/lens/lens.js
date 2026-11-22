/* Google Lens upload page: takes the captured frame from session storage and posts it to Lens. */
"use strict";

(function () {
  const FALLBACK_DELAY_MS = 8000;

  function showFallback() {
    try {
      const fallback = document.getElementById("fallback");
      if (fallback) fallback.hidden = false;
      const status = document.getElementById("status");
      if (status) status.hidden = true;
    } catch (_) { /* ignore */ }
  }

  async function takeLensImage() {
    try {
      const data = await api.storage.session.get("lensImage");
      const image = data ? data.lensImage : undefined;
      await api.storage.session.remove("lensImage");
      return image;
    } catch (_) {
      return undefined;
    }
  }

  async function run() {
    const lensImage = await takeLensImage();
    if (typeof lensImage !== "string" || !lensImage.startsWith("data:image/")) {
      showFallback();
      return;
    }

    const blob = await fetch(lensImage).then((r) => r.blob());
    const file = new File([blob], "frame.png", { type: "image/png" });

    const dt = new DataTransfer();
    dt.items.add(file);

    const input = document.createElement("input");
    input.type = "file";
    input.name = "encoded_image";
    input.files = dt.files;

    const form = document.createElement("form");
    form.method = "POST";
    form.enctype = "multipart/form-data";
    form.action = "https://lens.google.com/v3/upload?ep=ccm&s=&st=" + Date.now();
    form.hidden = true;
    form.append(input);
    document.body.append(form);
    form.submit();
  }

  // Any failure shows the fallback text; a successful submit navigates away.
  run().catch(showFallback);
  setTimeout(showFallback, FALLBACK_DELAY_MS);
})();
