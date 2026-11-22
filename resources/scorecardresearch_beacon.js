/* Stand-in for comScore beacon. */
(function () {
  "use strict";
  window.COMSCORE = { purge() { window._comscore = []; }, beacon() {} };
})();
