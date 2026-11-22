/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"13newsnow.com":[["acs","document.getElementsByTagName",".pubads"]],"5newsonline.com":[["acs","document.getElementsByTagName",".pubads"]],"9news.com":[["acs","document.getElementsByTagName",".pubads"]],"adaptive.marketing":[["rmnt","script","/join\\(\\'\\'\\)/"]],"adhs-zentrum.de":[["no-xhr-if","method:POST body:/\"track\"|adblock/"]],"adria.gg":[["rmnt","script","api.dataunlocker.com"]],"advocate-news.com":[["set-session-storage-item","nxt_is_incognito","false"]],"aiskillsnavigator.microsoft.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"aliexpress.ru":[["set","OfflineAudioContext","undefined"],["set","navigator.bluetooth","undefined"]],"aniroleplay.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"ark-unity.com":[["nostif","error-report.com"]],"awkward.com":[["rmnt","script","\"v4ac1eiZr0\""]],"awkwardmom.com":[["rmnt","script","\"v4ac1eiZr0\""]],"babla.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"babla.com.br":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"babla.es":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"babla.it":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"babla.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"babla.org":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"babla.pl":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"babla.ru":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"badmouth1.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"bananamovies.org":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"barstoolsports.com":[["no-fetch-if","method:HEAD"]],"billboard.com":[["acs","document.getElementsByTagName",".pubads"]],"bleepingcomputer.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"bocopreps.com":[["set-session-storage-item","nxt_is_incognito","false"]],"boston.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"bostonscally.com":[["remove-cookie","/__ta_|_shopify_y/","when","scroll keydown"]],"burlington-record.com":[["set-session-storage-item","nxt_is_incognito","false"]],"businessinsider.jp":[["remove-cookie","/ppid$/"]],"camhub.cc":[["remove-cookie","kt_ips"]],"chaptercheats.com":[["rmnt","script","\"v4ac1eiZr0\""]],"choco0202.work":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"collider.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"comingsoon.net":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"coomer.st":[["set-local-storage-item","plausible_ignore","true"]],"courant.com":[["set-session-storage-item","nxt_is_incognito","false"]],"crafty.house":[["rmnt","script","\"v4ac1eiZr0\""]],"cruciverba.it":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"crunchyroll.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"ctinsider.com":[["remove-cookie","realm.cookiesAndJavascript"]],"dailybreeze.com":[["set-session-storage-item","nxt_is_incognito","false"]],"dailybulletin.com":[["set-session-storage-item","nxt_is_incognito","false"]],"danseisama.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"dataunlocker.com":[["set","_hjSettings","undefined"],["set","google_tag_manager","undefined"],["rmnt","script","/^Function\\(\\\"/"]],"dealabs.com":[["href-sanitizer","a[href*=\"https://www.dealabs.com/visit/\"][title^=\"https://\"]","[title]"]],"deviantart.com":[["aost","Math.sqrt","update"]],"didyouknowfacts.com":[["rmnt","script","\"v4ac1eiZr0\""]],"disqus.com":[["href-sanitizer","a[href^=\"https://disq.us/url?url=\"][title^=\"http\"]","[title]"],["href-sanitizer","a[href^=\"https://disq.us/?url=http\"]","?url"],["remove-cookie","disqus_unique","when","scroll keydown"]],"dolldivine.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"donbalon.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"dualshockers.com":[["rmnt","script","\"v4ac1eiZr0\""]],"duolingo.com":[["no-xhr-if","excess.duolingo.com/batch"]],"dustyoldthing.com":[["rmnt","script","\"v4ac1eiZr0\""]],"dziennik.pl":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"eastbaytimes.com":[["set-session-storage-item","nxt_is_incognito","false"]],"economictimes.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"elconfidencial.com":[["remove-cookie","/_pcid|_pctx|amp_|cX|incap/","when","scroll keydown"],["set-local-storage-item","/amplitude|lastUtms|gaAccount|cX|_ls_ttl/","$remove$"],["set-session-storage-item","_cX_S","$remove$"]],"eptrail.com":[["set-session-storage-item","nxt_is_incognito","false"]],"ericdraken.com":[["aopr","dataLayer"]],"erogamescape.dyndns.org":[["href-sanitizer","a[href^=\"https://dlaf.jp/home/dlaf/=/aid/\"][href*=\"/url/http\"]","/\\/url\\/(http.+)/ -uricomponent"]],"eventbrite.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"f6s.com":[["aeld","","redirect"]],"familyhandyman.com":[["acs","document.getElementsByTagName",".pubads"]],"fandom.com":[["set-cookie","Geo","OK"]],"femestella.com":[["rmnt","script","\"v4ac1eiZr0\""]],"financialpost.com":[["acs","document.getElementsByTagName",".pubads"]],"flatpanelshd.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"footwearnews.com":[["rmnt","script","\"v4ac1eiZr0\""]],"formula1.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"forsal.pl":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"fortmorgantimes.com":[["set-session-storage-item","nxt_is_incognito","false"]],"fox61.com":[["acs","document.getElementsByTagName",".pubads"]],"freemcserver.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"freep.com":[["acs","document.createElement","admiral"]],"fxstreet.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"fxstreet.com.br":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"fxstreet.es":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"fxstreet.pl":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"gala.com":[["set-local-storage-item","_gal1","$remove$"]],"gamerant.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"gamerjournalist.com":[["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"gfinityesports.com":[["rmnt","script","\"v4ac1eiZr0\""]],"giornalone.it":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"globalrph.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"gundamlog.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"heavyfetish.com":[["set","flashvars.event_reporting",""],["remove-cookie","kt_qparams"],["remove-cookie","kt_referer"],["remove-cookie","kt_ips"]],"helloflo.com":[["rmnt","script","\"v4ac1eiZr0\""]],"hemmings.com":[["acs","document.createElement","admiral"]],"homeglowdesign.com":[["rmnt","script","\"v4ac1eiZr0\""]],"humbot.ai":[["set-local-storage-item","/__anon_id|browserId/","$remove$"]],"ici.radio-canada.ca":[["set-local-storage-item","RC_PLAYER_USER_ID","$remove$"]],"ijr.com":[["acs","document.createElement","admiral"]],"insurancejournal.com":[["rmnt","script","\"v4ac1eiZr0\""]],"isthereanydeal.com":[["href-sanitizer","a[href^=\"http://www.jdoqocy.com/click-\"][href*=\"?URL=http\"]","?URL"],["href-sanitizer","a[href^=\"https://track.adtraction.com/t/t?\"][href*=\"&url=http\"]","?url"]],"jablickar.cz":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"jnews1.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"judgehype.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"keyakizaka46matomemory.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kick.com":[["nostif","_startBeaconSending"],["no-fetch-if","litix.io"]],"kijoden.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kimbino.ro":[["remove-cookie","kim-tracker-uid"]],"king5.com":[["acs","document.getElementsByTagName",".pubads"]],"kirarafan.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kissjav.co.uk":[["remove-cookie","kt_ips"]],"kissjav.it":[["remove-cookie","kt_ips"]],"kissjav.org":[["remove-cookie","kt_ips"]],"kissjav.pl":[["remove-cookie","kt_ips"]],"kitimama-matome.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kitizawa.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"knowyourmeme.com":[["acs","document.createElement","admiral"],["nosiif","blogherads"]],"komonews.com":[["acs","document.getElementsByTagName",".pubads"]],"kompasiana.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kvue.com":[["acs","document.getElementsByTagName",".pubads"]],"lakeshowlife.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"lamire.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"ldoceonline.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"leckerschmecker.me":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"lenscrafters.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"lgbtqnation.com":[["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"liblo.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"lifehacker.com":[["remove-cookie","gtagSessionId"]],"linklog.tiagorangel.com":[["set","data","true"]],"lit.link":[["href-sanitizer","a[href^=\"/redirects/link-ad?redirectUrl=aHR0c\"]","?redirectUrl -base64"]],"localmemphis.com":[["acs","document.getElementsByTagName",".pubads"]],"localnews8.com":[["rmnt","script","\"v4ac1eiZr0\""]],"losporn.org":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"lowellsun.com":[["set-session-storage-item","nxt_is_incognito","false"]],"m.economictimes.com":[["nosiif","_grx"]],"mail.yahoo.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"makeuseof.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""],["remove-cookie","/articlesRead|previousPage/"]],"mamastar.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"manta.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"],["rmnt","script","error-report.com"]],"matomeblade.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"matometemitatta.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"mediamarkt.de":[["aopw","ftr__startScriptLoad"]],"mendocinobeacon.com":[["set-session-storage-item","nxt_is_incognito","false"]],"metager.org":[["href-sanitizer","a[href^=\"https://metager.org/partner/r?link=http\"]","?link"]],"microsoft.com":[["remove-cookie","MicrosoftApplicationsTelemetryDeviceId","when","scroll keydown"]],"middletownpress.com":[["remove-cookie","realm.cookiesAndJavascript"]],"mindbodygreen.com":[["set-local-storage-item","segmentDeviceId","$remove$"]],"mlbpark.donga.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"morningjournal.com":[["set-session-storage-item","nxt_is_incognito","false"]],"muddybootsanddiamonds.com":[["rmnt","script","\"v4ac1eiZr0\""]],"mumuplayer.com":[["set-local-storage-item","/_user_id$/","$remove$"]],"musescore.com":[["href-sanitizer","a[href^=\"https://deeplink.musescore.com/redirect?to=http\"]","?to"],["set-local-storage-item","/^rt_/","$remove$"]],"musicfeeds.com.au":[["rmnt","script","\"v4ac1eiZr0\""]],"mwed.jp":[["acs","document.createElement","keen-tracking"]],"nationalpost.com":[["acs","document.getElementsByTagName",".pubads"]],"ncbi.nlm.nih.gov":[["set","ncbi.sg","{}"],["set","ncbi.sg.ping","noopFunc"]],"news8000.com":[["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"notebookcheck.net":[["href-sanitizer","body a[href*=\"?\"][href*=\"u=http\"]:is([href*=\".com/c/\"],[href*=\".io/c/\"],[href*=\".net/c/\"],[href*=\"?subId1=\"],[href^=\"https://affportal.bhphoto.com/dl/redventures/?\"])","?u"]],"nowinstock.net":[["href-sanitizer","a[href^=\"https://click.linksynergy.com/deeplink?id=\"][href*=\"&murl=\"]","?murl"],["href-sanitizer","a[href*=\"?\"][href*=\"&url=http\"]","?url"],["href-sanitizer","a[href*=\"?\"][href*=\"&u=http\"]","?u"]],"nydailynews.com":[["acs","document.getElementsByTagName",".pubads"],["set-session-storage-item","nxt_is_incognito","false"]],"oilprice.com":[["remove-cookie","ga_store_user_id"]],"oklivetv.com":[["no-fetch-if","method:POST body:tracker"]],"okusama-kijyo.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"olympics.com":[["no-fetch-if","event-router.olympics.com"]],"ondemandkorea.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"onlineradiobox.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"onual.com":[["href-sanitizer","a.btn[href^=\"https://zxro.com/u/?url=http\"]","?url"]],"optionsprofitcalculator.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"otakomu.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"ottawacitizen.com":[["acs","document.getElementsByTagName",".pubads"]],"ozlosleep.com":[["remove-cookie","/_shopify_(y|sa_)/","when","scroll keydown"]],"palabr.as":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"pandamovie.in":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"pepper.pl":[["href-sanitizer","a[href*=\"https://www.pepper.pl/visit/\"][title^=\"https://\"]","[title]"]],"perplexity.ai":[["aost","window.screen.height","setTimeout"]],"picksandparlays.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"ping.gg":[["rmnt","script","/join\\(\\'\\'\\)/"]],"play.discoveryplus.com":[["no-xhr-if","brightline.tv"],["no-fetch-if","litix.io"]],"powerpyx.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"predic.ro":[["rmnt","script","\"v4ac1eiZr0\""]],"preisjaeger.at":[["href-sanitizer","a[href*=\"https://www.preisjaeger.at/visit/\"][title^=\"https://\"]","[title]"]],"pressandguide.com":[["set-session-storage-item","nxt_is_incognito","false"]],"primagames.com":[["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"profitline.hu":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"puckermom.com":[["rmnt","script","\"v4ac1eiZr0\""]],"qobuz.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"qtoptens.com":[["rmnt","script","\"v4ac1eiZr0\""]],"registercitizen.com":[["remove-cookie","realm.cookiesAndJavascript"]],"roleplayer.me":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"savvytime.com":[["acs","document.createElement","admiral"]],"search.rakuten.co.jp":[["aeld","mouseup","sendClickEvent"]],"secure-signup.net":[["rmnt","script","error-report.com"]],"shemale6.com":[["remove-cookie","kt_ips"]],"shrink-service.it":[["aopr","WebAssembly"]],"shutupandtakemyyen.com":[["href-sanitizer","body a[href*=\"awin1.com/\"][href*=\".php?\"][href*=\"ued=http\"]","?ued"],["href-sanitizer","body a[href*=\"awin1.com/\"][href*=\".php?\"][href*=\"p=http\"]","?p"]],"sidereel.com":[["acs","document.getElementsByTagName",".pubads"],["rmnt","script","\"v4ac1eiZr0\""]],"siliconera.com":[["acs","document.createElement","admiral"],["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"siliconvalley.com":[["set-session-storage-item","nxt_is_incognito","false"]],"simpleflying.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"ske48matome.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"smallpdf.com":[["no-fetch-if","pluto.smallpdf.com"]],"southplattesentinel.com":[["set-session-storage-item","nxt_is_incognito","false"]],"spacenews.com":[["rmnt","script","\"v4ac1eiZr0\""]],"spankbang.org":[["set","send_gravity_event","noopFunc"],["set","send_recommendation_event","noopFunc"]],"sportanalytic.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"sportico.com":[["acs","document.getElementsByTagName",".pubads"]],"sportsrec.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"starstyle.com":[["href-sanitizer","a[href^=\"https://go.skimresources.com/\"][href*=\"&url=http\"]","?url"]],"steamplay.co.uk":[["aopw","CoinNebula"]],"steamplay.com":[["aopw","CoinNebula"]],"steamplay.net":[["aopw","CoinNebula"]],"steamplay.nl":[["aopw","CoinNebula"]],"steamplay.org":[["aopw","CoinNebula"]],"subway.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"techcrunch.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"],["acs","document.getElementsByTagName",".pubads"],["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"technicpack.net":[["acs","document.createElement","admiral"]],"techradar.com":[["href-sanitizer","body a[href*=\"/Proxy.ashx?\"][href*=\"GR_URL=http\"]","?GR_URL"]],"thebeenews.com":[["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"thegamer.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"thehealthy.com":[["acs","document.getElementsByTagName",".pubads"]],"thehindu.com":[["remove-cookie","_pc_private"]],"thenewsherald.com":[["set-session-storage-item","nxt_is_incognito","false"]],"thereporteronline.com":[["set-session-storage-item","nxt_is_incognito","false"]],"thethings.com":[["rmnt","script","\"v4ac1eiZr0\""]],"thv11.com":[["acs","document.getElementsByTagName",".pubads"]],"ticketmaster.es":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"ticketmaster.it":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"ticketmaster.pl":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"times-standard.com":[["set-session-storage-item","nxt_is_incognito","false"]],"timesnews.net":[["rmnt","script","\"v4ac1eiZr0\""]],"tip.etip-staging.etip.io":[["rmnt","script","/join\\(\\'\\'\\)/"]],"tirerack.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"topspeed.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"touchgal.ink":[["href-sanitizer","body a[href^=\"/redirect?url=http\"]","?url"]],"tportal.hr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"],["rmnt","script","error-report.com"]],"tweaktown.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"uber.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"upmedia.mg":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"usatoday.com":[["set","admiral","noopFunc"],["set","gnt.x.adm",""]],"uwakitaiken.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"variety.com":[["acs","document.getElementsByTagName",".pubads"],["href-sanitizer","a[href^=\"https://clicks.trx-hub.com/\"][href*=\"bn5x.net\"]","?q?u"]],"vaughn.live":[["no-fetch-if","method:POST body:zaraz"]],"voicenews.com":[["set-session-storage-item","nxt_is_incognito","false"]],"watchpornfree.info":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"wbir.com":[["acs","document.getElementsByTagName",".pubads"]],"welt.de":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"wfaa.com":[["acs","document.getElementsByTagName",".pubads"]],"wfmynews2.com":[["acs","document.getElementsByTagName",".pubads"]],"willitsnews.com":[["set-session-storage-item","nxt_is_incognito","false"]],"winclassic.net":[["rmnt","script","vglnk"]],"woxikon.de":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"wpde.com":[["remove-cookie","/bitmovin_analytics_uuid|sbgtvNonce|SUID/","when","scroll keydown"]],"wrestlinginc.com":[["acs","document.createElement","admiral"]],"wthr.com":[["acs","document.getElementsByTagName",".pubads"]],"wwd.com":[["acs","document.getElementsByTagName",".pubads"]],"www.google.es":[["set","rwt","noopFunc"],["set-attr","c-wiz[data-p] [data-query] a[target=\"_blank\"][role=\"link\"]","rlhc","1"]],"www.google.pl":[["set","rwt","noopFunc"],["set-attr","c-wiz[data-p] [data-query] a[target=\"_blank\"][role=\"link\"]","rlhc","1"]],"www.google.ru":[["set","rwt","noopFunc"],["set-attr","c-wiz[data-p] [data-query] a[target=\"_blank\"][role=\"link\"]","rlhc","1"]],"xxxparodyhd.net":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"xxxscenes.net":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"youwatchporn.com":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]]},"off":{}};
  if (!DATA) return;

  /* ---------- pick calls for this host ---------- */
  const host = location.hostname.replace(/^www\./, "");
  const parts = host.split(".");
  const chain = [host];
  for (let i = 1; i < parts.length - 1; i++) chain.push(parts.slice(i).join("."));
  const off = new Set();
  for (const d of chain) for (const o of DATA.off[d] || []) off.add(o);
  if (off.has("*")) return;
  const calls = [];
  const seen = new Set();
  for (const d of chain) {
    for (const c of DATA.calls[d] || []) {
      const k = JSON.stringify(c);
      if (!seen.has(k) && !off.has(k)) { seen.add(k); calls.push(c); }
    }
  }
  if (!calls.length) return;

  /* ---------- helpers ---------- */
  const MAGIC = "blk" + Math.random().toString(36).slice(2, 9);
  const noop = () => {};
  const toRegex = (s, flags = "") => {
    if (s === undefined || s === null || s === "" || s === "*") return /^/;
    const m = /^\/(.+)\/([gimsuy]*)$/.exec(s);
    if (m) { try { return new RegExp(m[1], m[2] || flags); } catch { return /^\b$/; } }
    return new RegExp(String(s).replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), flags);
  };
  /** needle with optional leading "!" negation → (text) => boolean */
  const matcher = (needle) => {
    if (!needle) return () => true;
    const neg = needle.startsWith("!");
    const re = toRegex(neg ? needle.slice(1) : needle);
    return (text) => re.test(String(text)) !== neg;
  };
  const fnText = (fn) => { try { return typeof fn === "function" ? Function.prototype.toString.call(fn) : String(fn); } catch { return ""; } };

  const natives = new WeakMap();
  const nativeToString = Function.prototype.toString;
  const toStringProxy = function toString() { return nativeToString.call(natives.get(this) || this); };
  natives.set(toStringProxy, nativeToString);
  try { Object.defineProperty(Function.prototype, "toString", { value: toStringProxy, writable: true, configurable: true }); } catch { /* ignore */ }
  const wrap = (obj, key, factory) => {
    if (!obj || typeof obj[key] !== "function") return;
    const orig = obj[key];
    const fn = factory(orig);
    natives.set(fn, orig);
    try { Object.defineProperty(obj, key, { value: fn, writable: true, configurable: true }); } catch { obj[key] = fn; }
  };

  // Swallow errors thrown by abort-* scriptlets so the page console stays clean.
  window.addEventListener("error", (e) => {
    if (String(e.message).includes(MAGIC)) e.preventDefault();
  }, true);

  const parseValue = (raw) => {
    const map = {
      undefined: undefined, false: false, true: true, null: null,
      noopFunc: () => {}, trueFunc: () => true, falseFunc: () => false,
      throwFunc: () => { throw new Error(MAGIC); },
      emptyObj: {}, emptyArr: [], emptyStr: "", "''": "", '""': "", "[]": [], "{}": {},
      yes: "yes", no: "no", "-1": -1, NaN: NaN, Infinity: Infinity,
    };
    if (raw in map) return { ok: true, v: map[raw] };
    if (/^-?\d+(\.\d+)?$/.test(raw) && Math.abs(Number(raw)) <= 0x7fff) return { ok: true, v: Number(raw) };
    if (raw === "noopCallbackFunc") return { ok: true, v: () => noop };
    return { ok: false };
  };

  /** Installs `handler` on the last property of a dotted chain, even before the chain exists. */
  function trapChain(chain, handler, owner = window) {
    const dot = chain.indexOf(".");
    if (dot === -1) { handler(owner, chain); return; }
    const prop = chain.slice(0, dot);
    const rest = chain.slice(dot + 1);
    let v = owner[prop];
    if (v !== undefined && v !== null && (typeof v === "object" || typeof v === "function")) {
      trapChain(rest, handler, v);
      return;
    }
    const d = Object.getOwnPropertyDescriptor(owner, prop);
    if (d && !d.configurable) return;
    try {
      Object.defineProperty(owner, prop, {
        configurable: true,
        get: () => v,
        set: (a) => {
          v = a;
          if (a !== null && (typeof a === "object" || typeof a === "function")) trapChain(rest, handler, a);
        },
      });
    } catch { /* ignore */ }
  }
  const defineSafe = (owner, prop, desc) => {
    const d = Object.getOwnPropertyDescriptor(owner, prop);
    if (d && !d.configurable) return;
    try { Object.defineProperty(owner, prop, { configurable: true, ...desc }); } catch { /* ignore */ }
  };
  const whenReady = (fn) => {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fn, { once: true });
    else fn();
  };
  const observe = (fn) => {
    fn();
    let t = 0;
    const mo = new MutationObserver(() => { if (!t) t = setTimeout(() => { t = 0; fn(); }, 50); });
    const start = () => mo.observe(document.documentElement, { childList: true, subtree: true, attributes: true });
    if (document.documentElement) start(); else whenReady(start);
  };

  /* JSON pruning: paths like "a.b", "a.[].c", "[].x" */
  function prunePath(obj, segs) {
    if (!obj || typeof obj !== "object") return false;
    const [head, ...rest] = segs;
    if (head === "[]" || head === "*") {
      let hit = false;
      for (const k of Object.keys(obj)) hit = (rest.length ? prunePath(obj[k], rest) : (delete obj[k], true)) || hit;
      return hit;
    }
    if (!(head in obj)) return false;
    if (!rest.length) { delete obj[head]; return true; }
    return prunePath(obj[head], rest);
  }
  function hasPath(obj, segs) {
    if (!obj || typeof obj !== "object") return false;
    const [head, ...rest] = segs;
    if (head === "[]" || head === "*") return Object.keys(obj).some((k) => (rest.length ? hasPath(obj[k], rest) : true));
    if (!(head in obj)) return false;
    return rest.length ? hasPath(obj[head], rest) : true;
  }
  const splitPath = (p) => p.replace(/\.\[\]/g, ".[]").split(".").filter(Boolean);
  function pruner(rawPrune, rawNeedles) {
    const prune = String(rawPrune || "").split(/\s+/).filter(Boolean).map(splitPath);
    const needles = String(rawNeedles || "").split(/\s+/).filter(Boolean).map(splitPath);
    return (obj) => {
      if (!prune.length || !obj || typeof obj !== "object") return obj;
      if (needles.length && !needles.every((n) => hasPath(obj, n))) return obj;
      for (const p of prune) prunePath(obj, p);
      return obj;
    };
  }

  /* ---------- scriptlets ---------- */
  const S = {
    set(chain, raw) {
      if (!chain) return;
      const p = parseValue(raw);
      if (!p.ok) return;
      trapChain(chain, (owner, prop) => defineSafe(owner, prop, { get: () => p.v, set: noop }));
    },
    aopr(chain) {
      if (!chain) return;
      trapChain(chain, (owner, prop) => defineSafe(owner, prop, {
        get() { throw new ReferenceError(MAGIC); }, set: noop,
      }));
    },
    aopw(chain) {
      if (!chain) return;
      trapChain(chain, (owner, prop) => {
        let v = owner[prop];
        defineSafe(owner, prop, { get: () => v, set() { throw new ReferenceError(MAGIC); } });
      });
    },
    acs(chain, needle, context) {
      if (!chain) return;
      const test = matcher(needle);
      const ctx = context ? toRegex(context) : null;
      trapChain(chain, (owner, prop) => {
        let v = owner[prop];
        const check = () => {
          const s = document.currentScript;
          if (!s) return;
          const text = s.src ? s.src + "\n" + s.textContent : s.textContent;
          if (ctx && !ctx.test(text)) return;
          if (test(text)) throw new ReferenceError(MAGIC);
        };
        defineSafe(owner, prop, { get() { check(); return v; }, set(a) { check(); v = a; } });
      });
    },
    aost(chain, needle) {
      if (!chain) return;
      const test = matcher(needle);
      trapChain(chain, (owner, prop) => {
        let v = owner[prop];
        const check = () => { if (test(new Error().stack || "")) throw new ReferenceError(MAGIC); };
        defineSafe(owner, prop, { get() { check(); return v; }, set(a) { check(); v = a; } });
      });
    },
    aeld(type, needle) {
      const typeRe = matcher(type);
      const test = matcher(needle);
      wrap(EventTarget.prototype, "addEventListener", (orig) => function addEventListener(t, fn) {
        if (typeRe(t) && test(fnText(fn && fn.handleEvent ? fn.handleEvent : fn))) return undefined;
        return orig.apply(this, arguments);
      });
    },
    nostif(needle, delay) { timerDefuser("setTimeout", needle, delay); },
    nosiif(needle, delay) { timerDefuser("setInterval", needle, delay); },
    "nano-stb"(needle, delay, boost) { timerBooster("setTimeout", needle, delay, boost); },
    "nano-sib"(needle, delay, boost) { timerBooster("setInterval", needle, delay, boost); },
    nowoif(needle) {
      const test = matcher(needle);
      wrap(window, "open", (orig) => function open(url) {
        if (!test(url || "")) return orig.apply(this, arguments);
        const fake = { closed: false, close() { this.closed = true; }, focus: noop, blur: noop, postMessage: noop,
          document: { write: noop, writeln: noop, close: noop, open: noop }, location: { href: String(url || "") } };
        return fake;
      });
    },
    "no-fetch-if"(props, response) {
      const tests = propTests(props);
      wrap(window, "fetch", (orig) => function fetch(input, init) {
        const details = {
          url: typeof input === "string" ? input : (input && input.url) || String(input),
          method: (init && init.method) || (input && input.method) || "GET",
          body: init && typeof init.body === "string" ? init.body : "",
        };
        if (!tests(details)) return orig.apply(this, arguments);
        const body = response === "emptyArr" ? "[]" : response === "emptyObj" ? "{}" : "";
        return Promise.resolve(new Response(body, { status: 200, statusText: "OK" }));
      });
    },
    "no-xhr-if"(props) {
      const tests = propTests(props);
      const XHR = XMLHttpRequest.prototype;
      const blocked = new WeakSet();
      wrap(XHR, "open", (orig) => function open(method, url) {
        if (tests({ url: String(url), method: String(method) })) blocked.add(this); else blocked.delete(this);
        return orig.apply(this, arguments);
      });
      wrap(XHR, "send", (orig) => function send() {
        if (!blocked.has(this)) return orig.apply(this, arguments);
        const xhr = this;
        for (const [k, v] of [["readyState", 4], ["status", 200], ["statusText", "OK"], ["response", ""], ["responseText", ""]]) {
          defineSafe(xhr, k, { value: v });
        }
        setTimeout(() => {
          for (const t of ["readystatechange", "load", "loadend"]) xhr.dispatchEvent(new Event(t));
        }, 1);
        return undefined;
      });
    },
    "json-prune"(rawPrune, rawNeedles) {
      const prune = pruner(rawPrune, rawNeedles);
      wrap(JSON, "parse", (orig) => function parse() { return prune(orig.apply(this, arguments)); });
      wrap(Response.prototype, "json", (orig) => function json() { return orig.apply(this, arguments).then(prune); });
    },
    ra(attrs, selector) {
      const list = String(attrs || "").split(/\s*\|\s*/).filter(Boolean);
      if (!list.length) return;
      const sel = selector || list.map((a) => `[${CSS.escape(a)}]`).join(",");
      observe(() => {
        try { for (const el of document.querySelectorAll(sel)) for (const a of list) el.removeAttribute(a); } catch { /* bad selector */ }
      });
    },
    rc(classes, selector) {
      const list = String(classes || "").split(/\s*\|\s*/).filter(Boolean);
      if (!list.length) return;
      const sel = selector || list.map((c) => "." + CSS.escape(c)).join(",");
      observe(() => {
        try { for (const el of document.querySelectorAll(sel)) el.classList.remove(...list); } catch { /* bad selector */ }
      });
    },
    "set-attr"(selector, attr, value = "") {
      if (!selector || !attr || /^on/i.test(attr)) return;
      if (!/^(?:\d+|true|false|)$/.test(value) && !/^\[.+\]$/.test(value)) return;
      observe(() => {
        try {
          for (const el of document.querySelectorAll(selector)) {
            const v = /^\[.+\]$/.test(value) ? el.getAttribute(value.slice(1, -1)) || "" : value;
            if (el.getAttribute(attr) !== v) el.setAttribute(attr, v);
          }
        } catch { /* ignore */ }
      });
    },
    rmnt(nodeName, needle) {
      if (!nodeName) return;
      const name = nodeName.toUpperCase();
      const test = matcher(needle);
      const check = (n) => {
        if (n.nodeName === name && test(n.textContent || "")) n.remove();
      };
      const mo = new MutationObserver((muts) => {
        for (const m of muts) for (const n of m.addedNodes) check(n);
      });
      const start = () => mo.observe(document.documentElement, { childList: true, subtree: true });
      if (document.documentElement) start(); else whenReady(start);
      whenReady(() => {
        const it = document.createNodeIterator(document.documentElement, NodeFilter.SHOW_ALL);
        for (let n = it.nextNode(); n; n = it.nextNode()) check(n);
      });
    },
    "set-local-storage-item"(key, value) { setStorage(localStorage, key, value); },
    "set-session-storage-item"(key, value) { setStorage(sessionStorage, key, value); },
    "set-cookie"(name, value, path = "/") {
      const allowed = /^(?:true|false|yes|no|y|n|on|off|ok|accept|accepted|reject|rejected|allow|allowed|deny|denied|necessary|required|hide|hidden|dismiss|dismissed|essential|nonessential|-?\d{1,5}|)$/i;
      if (!name || !allowed.test(value)) return;
      const cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      if (!document.cookie.split(/;\s*/).includes(cookie)) {
        document.cookie = `${cookie}; path=${path === "none" ? "/" : path}; max-age=31536000`;
      }
    },
    "remove-cookie"(needle) {
      const test = matcher(needle);
      const remove = () => {
        for (const c of document.cookie.split(";")) {
          const name = c.split("=")[0].trim();
          if (!name || !test(name)) continue;
          for (const domain of ["", location.hostname, "." + location.hostname.split(".").slice(-2).join(".")]) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain ? "; domain=" + domain : ""}`;
          }
        }
      };
      remove();
      window.addEventListener("beforeunload", remove);
      document.addEventListener("visibilitychange", remove);
    },
    noeval() { wrap(window, "eval", () => function () { return undefined; }); },
    "noeval-if"(needle) {
      const test = matcher(needle);
      wrap(window, "eval", (orig) => function (code) { return test(code) ? undefined : orig.apply(this, arguments); });
    },
    nowebrtc() {
      for (const k of ["RTCPeerConnection", "webkitRTCPeerConnection"]) {
        if (!window[k]) continue;
        const Fake = function () {
          return { close: noop, createDataChannel: () => ({}), createOffer: () => Promise.resolve({}),
            setLocalDescription: () => Promise.resolve(), addEventListener: noop, removeEventListener: noop };
        };
        natives.set(Fake, window[k]);
        window[k] = Fake;
      }
    },
    nofab() {
      const Fab = function () {};
      Fab.prototype = { check: noop, clearEvent: noop, emitEvent: noop, on() { return this; }, onDetected() { return this; },
        onNotDetected(fn) { if (typeof fn === "function") fn(); return this; }, setOption: noop };
      for (const k of ["FuckAdBlock", "BlockAdBlock", "SniffAdBlock"]) defineSafe(window, k, { value: Fab });
      for (const k of ["fuckAdBlock", "blockAdBlock", "sniffAdBlock"]) defineSafe(window, k, { value: new Fab() });
    },
    "popads-dummy"() {
      for (const k of ["PopAds", "popns"]) defineSafe(window, k, { get() { throw new ReferenceError(MAGIC); }, set: noop });
    },
    "href-sanitizer"(selector, source = "text") {
      if (!selector) return;
      const valid = (u) => { try { const x = new URL(u, location.href); return /^https?:$/.test(x.protocol) ? x.href : ""; } catch { return ""; } };
      observe(() => {
        try {
          for (const a of document.querySelectorAll(selector)) {
            let target = "";
            if (source === "text") target = valid(a.textContent.trim());
            else if (/^\[.+\]$/.test(source)) target = valid(a.getAttribute(source.slice(1, -1)) || "");
            else if (source.startsWith("?")) {
              try { target = valid(new URL(a.href).searchParams.get(source.slice(1)) || ""); } catch { /* ignore */ }
            }
            if (target && a.href !== target) a.href = target;
          }
        } catch { /* ignore */ }
      });
    },
  };

  function timerDefuser(kind, needle, delay) {
    const test = matcher(needle);
    let delayTest = () => true;
    if (delay) {
      const neg = delay.startsWith("!");
      const n = Number(neg ? delay.slice(1) : delay);
      if (!Number.isNaN(n)) delayTest = (d) => (Number(d) === n) !== neg;
    }
    wrap(window, kind, (orig) => function (fn, d) {
      if (test(fnText(fn)) && delayTest(d)) return orig.call(this, noop, d);
      return orig.apply(this, arguments);
    });
  }
  function timerBooster(kind, needle, delay = "1000", boost = "0.05") {
    const test = matcher(needle);
    const target = delay === "*" ? null : Number(delay);
    let factor = Number(boost);
    if (!(factor >= 0.001 && factor <= 50)) factor = 0.05;
    wrap(window, kind, (orig) => function (fn, d) {
      if ((target === null || Number(d) === target) && test(fnText(fn))) {
        const args = Array.from(arguments);
        args[1] = Number(d) * factor;
        return orig.apply(this, args);
      }
      return orig.apply(this, arguments);
    });
  }
  function propTests(props) {
    const s = String(props || "").trim();
    if (!s || s === "*") return () => true;
    const pairs = [];
    for (const token of s.split(/\s+/)) {
      const m = /^(url|method|body|mode|headers|credentials|cache|redirect|referrer|integrity):(.*)$/.exec(token);
      if (m) pairs.push([m[1], matcher(m[2])]);
      else pairs.push(["url", matcher(token)]);
    }
    return (details) => pairs.every(([k, t]) => t(details[k] === undefined ? "" : details[k]));
  }
  function setStorage(store, key, value) {
    if (!key) return;
    try {
      if (value === "$remove$") { store.removeItem(key); return; }
      const allowed = { undefined: "undefined", false: "false", true: "true", null: "null", emptyArr: "[]", emptyObj: "{}", "": "",
        yes: "yes", no: "no", on: "on", off: "off", accept: "accept", accepted: "accepted", reject: "reject", rejected: "rejected" };
      let v;
      if (value in allowed) v = allowed[value];
      else if (/^-?\d{1,5}$/.test(value)) v = value;
      else return;
      store.setItem(key, v);
    } catch { /* storage blocked */ }
  }

  for (const [name, ...args] of calls) {
    const fn = S[name];
    if (fn) { try { fn(...args); } catch { /* one broken call must not stop the rest */ } }
  }
})();
