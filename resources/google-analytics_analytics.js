/* Stand-in for Google Analytics (analytics.js / ga.js): calls hitCallbacks so links and forms keep working. */
(function () {
  "use strict";
  const noop = function () {};
  function Tracker() {}
  Tracker.prototype.get = noop;
  Tracker.prototype.set = noop;
  Tracker.prototype.send = noop;

  const name = window.GoogleAnalyticsObject || "ga";
  const queue = window[name];
  const ga = function () {
    const args = Array.from(arguments);
    const last = args[args.length - 1];
    let fn = null;
    if (last && typeof last === "object" && typeof last.hitCallback === "function") fn = last.hitCallback;
    else if (typeof last === "function") fn = () => last(ga.create());
    else {
      const i = args.indexOf("hitCallback");
      if (i !== -1 && typeof args[i + 1] === "function") fn = args[i + 1];
    }
    if (fn) { try { fn(); } catch (e) { /* ignore */ } }
  };
  ga.create = () => new Tracker();
  ga.getByName = () => new Tracker();
  ga.getAll = () => [new Tracker()];
  ga.remove = noop;
  ga.loaded = true;
  window[name] = ga;
  window._gaq = window._gaq || { push: noop };

  const dl = window.dataLayer;
  if (dl && dl.hide && typeof dl.hide.end === "function") dl.hide.end();
  if (typeof queue === "function" && Array.isArray(queue.q)) {
    const q = queue.q.slice();
    queue.q.length = 0;
    q.forEach((entry) => ga(...entry));
  }
})();
