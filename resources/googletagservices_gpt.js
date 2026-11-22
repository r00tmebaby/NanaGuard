/* Stand-in for Google Publisher Tag (gpt.js): keeps pages that call googletag working. */
(function () {
  "use strict";
  const noop = function () {};
  const self = function () { return this; };
  const none = function () { return null; };
  const list = function () { return []; };
  const str = function () { return ""; };

  function Slot() {}
  Object.assign(Slot.prototype, {
    addService: self, clearCategoryExclusions: self, clearTargeting: self, defineSizeMapping: self,
    get: none, getAdUnitPath: str, getAttributeKeys: list, getCategoryExclusions: list, getDomId: str,
    getResponseInformation: none, getSlotElementId: str, getSlotId: self, getTargeting: list,
    getTargetingKeys: list, set: self, setCategoryExclusion: self, setClickUrl: self,
    setCollapseEmptyDiv: self, setConfig: self, setTargeting: self, updateTargetingFromMap: self,
  });
  function SizeMapping() {}
  SizeMapping.prototype.addSize = self;
  SizeMapping.prototype.build = none;

  const pubads = {
    addEventListener: self, clear: noop, clearCategoryExclusions: self, clearTagForChildDirectedTreatment: self,
    clearTargeting: self, collapseEmptyDivs: noop, defineOutOfPagePassback() { return new Slot(); },
    definePassback() { return new Slot(); }, disableInitialLoad: noop, display: noop, enableAsyncRendering: noop,
    enableLazyLoad: noop, enableSingleRequest: noop, enableSyncRendering: noop, enableVideoAds: noop,
    get: none, getAttributeKeys: list, getSlots: list, getTargeting: list, getTargetingKeys: list,
    isInitialLoadDisabled() { return true; }, refresh: noop, removeEventListener: noop, set: self,
    setCategoryExclusion: self, setCentering: noop, setCookieOptions: self, setForceSafeFrame: self,
    setLocation: self, setPrivacySettings: self, setPublisherProvidedId: self, setRequestNonPersonalizedAds: self,
    setSafeFrameConfig: self, setTagForChildDirectedTreatment: self, setTargeting: self, setVideoContent: self,
    updateCorrelator: noop,
  };
  const service = { addEventListener: self, removeEventListener: self, setContent: noop, enableSyncLoading: noop, setRefreshUnfilledSlots: noop };

  const gt = window.googletag || {};
  const queued = Array.isArray(gt.cmd) ? gt.cmd.slice() : [];
  Object.assign(gt, {
    apiReady: true, pubadsReady: true,
    cmd: [],
    companionAds() { return service; }, content() { return service; },
    defineOutOfPageSlot() { return new Slot(); }, defineSlot() { return new Slot(); },
    destroySlots: noop, disablePublisherConsole: noop, display: noop, enableServices: noop,
    getVersion: str, pubads() { return pubads; }, setAdIframeTitle: noop, setConfig: noop,
    sizeMapping() { return new SizeMapping(); },
  });
  gt.cmd.push = function (fn) { try { if (typeof fn === "function") fn(); } catch (e) { /* ignore */ } return 1; };
  window.googletag = gt;
  queued.forEach((fn) => gt.cmd.push(fn));
})();
