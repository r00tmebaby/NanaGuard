/* KinGuard OCR page: reads text from video-frame images with one local Tesseract worker. */
"use strict";

const OCR_IDLE_MS = 90000;
const OCR_MAX_IMAGES = 8;

let workerPromise = null; // shared by concurrent requests; null = no worker alive
let idleTimer = null;
let chain = Promise.resolve(); // serialises recognition requests
let pending = 0; // requests queued or running

function getWorker() {
  if (!workerPromise) {
    workerPromise = (async () => {
      const base = api.runtime.getURL("src/vendor/tesseract/");
      const w = await Tesseract.createWorker("eng", 1, {
        workerPath: base + "worker.min.js",
        corePath: base + "tesseract-core-simd-lstm.wasm.js",
        langPath: base.replace(/\/$/, ""),
        gzip: true,
        workerBlobURL: false,
        cacheMethod: "none",
        logger: () => {},
      });
      try {
        await w.setParameters({ tessedit_pageseg_mode: "11" }); // sparse text
      } catch (_) { /* default segmentation still works */ }
      return w;
    })();
    // Allow a retry on the next request if creation failed.
    workerPromise.catch(() => { workerPromise = null; });
  }
  return workerPromise;
}

function touchIdle() {
  if (idleTimer) clearTimeout(idleTimer);
  idleTimer = setTimeout(stopWorker, OCR_IDLE_MS);
}

function stopWorker() {
  idleTimer = null;
  if (pending > 0) { touchIdle(); return; } // still busy, check again later
  const p = workerPromise;
  workerPromise = null;
  if (p) {
    p.then((w) => w.terminate()).catch(() => {});
  }
}

async function recognizeImages(images) {
  if (!images.length) return "";
  const w = await getWorker();
  const texts = [];
  for (const img of images) {
    const { data } = await w.recognize(img);
    texts.push(String((data && data.text) || ""));
  }
  return texts.join("\n");
}

function enqueueRecognition(images) {
  pending++;
  touchIdle();
  const run = chain.then(() => recognizeImages(images));
  chain = run.then(() => {}, () => {});
  return run.finally(() => {
    pending--;
    touchIdle();
  });
}

try {
  api.runtime.onMessage.addListener((msg, sender, sendResponse) => {
    try {
      if (!msg || msg.target !== "kinguard-ocr") return false;
      if (!sender || sender.id !== api.runtime.id) return false;

      const images = Array.isArray(msg.images)
        ? msg.images.filter((s) => typeof s === "string").slice(0, OCR_MAX_IMAGES)
        : [];

      enqueueRecognition(images).then(
        (text) => {
          try { sendResponse({ ok: true, text }); } catch (_) {}
        },
        (e) => {
          try { sendResponse({ ok: false, error: String(e) }); } catch (_) {}
        },
      );
      return true;
    } catch (e) {
      try { sendResponse({ ok: false, error: String(e) }); } catch (_) {}
      return false;
    }
  });
} catch (_) { /* runtime messaging unavailable */ }
