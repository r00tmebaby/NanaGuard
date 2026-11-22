/* Stand-in for Amazon Publisher Services (apstag): bid requests return no bids. */
(function () {
  "use strict";
  const noop = function () {};
  const q = window.apstag && Array.isArray(window.apstag._Q) ? window.apstag._Q : [];
  window.apstag = {
    _Q: [],
    init: noop,
    fetchBids(cfg, cb) { if (typeof cb === "function") setTimeout(() => cb([]), 1); },
    setDisplayBids: noop,
    targetingKeys() { return []; },
    renderImp: noop,
    punt: noop,
  };
  q.forEach(([method, args]) => { try { if (method === "f") window.apstag.fetchBids(...args); } catch (e) { /* ignore */ } });
})();
