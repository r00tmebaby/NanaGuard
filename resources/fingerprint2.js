/* Stand-in for fingerprintjs2/3: returns an empty, non-identifying result. */
(function () {
  "use strict";
  function Fingerprint2() {}
  Fingerprint2.get = function (opts, cb) {
    if (typeof opts === "function") cb = opts;
    if (typeof cb === "function") setTimeout(() => cb([]), 1);
  };
  Fingerprint2.getPromise = () => Promise.resolve([]);
  Fingerprint2.getV18 = (opts, cb) => Fingerprint2.get(opts, (c) => (cb || opts)("", c));
  Fingerprint2.x64hash128 = () => "";
  Fingerprint2.prototype.get = function (cb) { setTimeout(() => cb("", []), 1); };
  window.Fingerprint2 = Fingerprint2;
  window.Fingerprint = Fingerprint2;
})();
