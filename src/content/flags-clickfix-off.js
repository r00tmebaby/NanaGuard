/* Injected right before main-world.js (and before any page script) only when the user
 * turned the fake-CAPTCHA guard off in Settings. main-world.js reads and deletes it. */
window.__kinguardFlags = { clickfix: false };
