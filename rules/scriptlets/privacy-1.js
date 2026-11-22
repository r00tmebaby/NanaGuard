/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"10tv.com":[["acs","document.getElementsByTagName",".pubads"]],"11alive.com":[["acs","document.getElementsByTagName",".pubads"]],"2chblog.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"373news.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"4game.ru":[["set-local-storage-item","/fingerprint|trackingEvents/","$remove$"]],"accuretawealth.com":[["rmnt","script","/join\\(\\'\\'\\)/"]],"accuweather.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"acmemarkets.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"akronnewsreporter.com":[["set-session-storage-item","nxt_is_incognito","false"]],"al.com":[["acs","document.createElement","admiral"],["acs","document.getElementsByTagName",".pubads"],["aost","decodeURI","/(?=^(?!.*\\.js))/"],["rmnt","script","\"v4ac1eiZr0\""]],"aol.com":[["acs","document.getElementsByTagName",".pubads"]],"archive.li":[["nosiif","fetch"]],"archive.md":[["nosiif","fetch"]],"archive.today":[["nosiif","fetch"]],"arstechnica.com":[["acs","document.createElement","admiral"]],"as-web.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"attackofthefanboy.com":[["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"aucfree.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"autoby.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"automobile-catalog.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"bab.la":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"babla.fr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"bethcakes.com":[["rmnt","script","\"v4ac1eiZr0\""]],"bien.hu":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"blogo.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"bluegraygal.com":[["rmnt","script","\"v4ac1eiZr0\""]],"brandbrief.co.kr":[["noeval-if","/07c225f3\\.online|content-loader\\.com|css-load\\.com|html-load\\.com/"],["rmnt","script","KCgpPT57bGV0IGU"]],"briefly.co.za":[["set-local-storage-item","/^recommendation_uuid/","$remove$"]],"brillen.de":[["acs","document.createElement","script"]],"businessinsider.de":[["remove-cookie","/^(_pc|cX_)/","when","scroll keydown"]],"calgarysun.com":[["acs","document.getElementsByTagName",".pubads"]],"carparts.com":[["set-local-storage-item","optimizely-vuid","$remove$"]],"cattime.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"chatgpt.com":[["no-fetch-if","method:/post/i url:/\\/\\/chatgpt\\.com\\/ces\\/v1\\/[a-z]$/"],["no-fetch-if","method:/post/i url:ab.chatgpt.com/v1/rgstr"]],"chattanoogacw.com":[["acs","document.getElementsByTagName",".pubads"]],"chollometro.com":[["href-sanitizer","a[href*=\"https://www.chollometro.com/visit/\"][title^=\"https://\"]","[title]"]],"cinetrafic.fr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"colab.research.google.com":[["href-sanitizer","a[href^=\"https://colab.research.google.com/corgiredirector?site=http\"]","?site"]],"coloradohometownweekly.com":[["set-session-storage-item","nxt_is_incognito","false"]],"commercialobserver.com":[["rmnt","script","\"v4ac1eiZr0\""]],"computerbild.de":[["remove-cookie","/^(_pc|cX_)/","when","scroll keydown"]],"crosswordsolver.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"ctpost.com":[["remove-cookie","realm.cookiesAndJavascript"]],"daily.co.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"dailydemocrat.com":[["set-session-storage-item","nxt_is_incognito","false"]],"dailyfreeman.com":[["set-session-storage-item","nxt_is_incognito","false"]],"dandanzan.top":[["nowebrtc"]],"decider.com":[["rmnt","script","\"v4ac1eiZr0\""]],"delta.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"denverpost.com":[["set-session-storage-item","nxt_is_incognito","false"]],"dk.pcpartpicker.com":[["href-sanitizer","a[href^=\"https://online.adservicemedia.dk/\"][href*=\"deeplink=http\"]","?deeplink"]],"dnb.co.uk":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"dnevno.hr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"docs.google.com":[["no-xhr-if","method:POST url:/logImpressions"]],"dogdrip.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"],["href-sanitizer","body a[href^=\"/link.php?url=http\"]","?url"]],"douban.com":[["href-sanitizer","body a[href^=\"https://www.douban.com/link2/?url=http\"]","?url"]],"dpreview.com":[["acs","document.getElementsByTagName",".pubads"]],"edaily.co.kr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"edmontonjournal.com":[["acs","document.getElementsByTagName",".pubads"]],"edmontonsun.com":[["acs","document.getElementsByTagName",".pubads"]],"elotrolado.net":[["href-sanitizer","a[href^=\"https://go.redirectingat.com?url=http\"]","?url"]],"espn.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"ev-times.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"excelsiorcalifornia.com":[["set-session-storage-item","nxt_is_incognito","false"]],"expressnews.com":[["remove-cookie","realm.cookiesAndJavascript"]],"fingerprint.com":[["no-xhr-if","method:POST"]],"fiveslot777.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"forums.redflagdeals.com":[["href-sanitizer","a.autolinker_link[href*=\".com/t/\"][href*=\"url=http\"]","?url"]],"freelancer.taxmachine.be":[["rmnt","script","api.dataunlocker.com"]],"fullxxxmovies.me":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"fxstreet-vn.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"fxstreet.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"fxstreet.nl":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"galaxus.de":[["remove-cookie","/^\\.(b|s|xp|ub\\.)id/","when","scroll keydown"]],"gamejksokuhou.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"gamepur.com":[["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"gloria.hr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"grabify.link":[["acs","document.createElement","admiral"]],"greeleytribune.com":[["set-session-storage-item","nxt_is_incognito","false"]],"hb-nippon.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"healf.com":[["remove-cookie","/^ig-|ph_phc_/","when","scroll keydown"],["set-local-storage-item","/^ph_phc_/","$remove$"],["set-session-storage-item","/^ph_phc_/","$remove$"]],"heartlife-matome.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"hotcopper.com.au":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"hotukdeals.com":[["href-sanitizer","a[href*=\"https://www.hotukdeals.com/visit/\"][title^=\"https://\"]","[title]"]],"idnes.cz":[["aeld","","/(ping|score)Url"]],"imgur.com":[["set","Object.prototype.has_opted_out_tracking","trueFunc"]],"iphoneincanada.ca":[["acs","document.createElement","__apNoHold"]],"isplus.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"itaishinja.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"jin115.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"jisaka.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"journaldemontreal.com":[["remove-cookie","/_pcid|_pctx|amp_|cX|incap/","when","scroll keydown"],["set-local-storage-item","/amplitude|lastUtms|gaAccount|cX|_ls_ttl/","$remove$"],["set-session-storage-item","_cX_S","$remove$"]],"kemono.cr":[["set-local-storage-item","plausible_ignore","true"]],"kgw.com":[["acs","document.getElementsByTagName",".pubads"]],"kijyokatu.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kijyomatome-ch.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kijyomatome.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kijyomita.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kissjav.nl":[["remove-cookie","kt_ips"]],"kobe-journal.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kotaro269.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"krem.com":[["acs","document.getElementsByTagName",".pubads"]],"laleggepertutti.it":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"landian.news":[["href-sanitizer","body a[href^=\"https://www.landian.news/go?url=http\"]","?url"]],"ldblog.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"liquipedia.net":[["remove-cookie","/^_pk_/"]],"liveandletsfly.com":[["rmnt","script","\"v4ac1eiZr0\""]],"livedoor.biz":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"livenewschat.eu":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"macombdaily.com":[["set-session-storage-item","nxt_is_incognito","false"]],"magesypro.pro":[["acs","document.createElement","admiral"]],"mainlinemedianews.com":[["set-session-storage-item","nxt_is_incognito","false"]],"mais.sbt.com.br":[["set-local-storage-item","youbora.youboraDeviceUUID","$remove$"]],"maketecheasier.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"mardomreport.net":[["rmnt","script","\"v4ac1eiZr0\""]],"marinij.com":[["set-session-storage-item","nxt_is_incognito","false"]],"masslive.com":[["acs","document.getElementsByTagName",".pubads"],["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"matacoco.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"mathplayzone.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"mediaindonesia.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"midhudsonnews.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"milestomemories.com":[["rmnt","script","\"v4ac1eiZr0\""]],"minesweeperquest.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"modernmom.com":[["rmnt","script","\"v4ac1eiZr0\""]],"mostlymorgan.com":[["rmnt","script","\"v4ac1eiZr0\""]],"motorbiscuit.com":[["acs","document.createElement","admiral"]],"myanimelist.net":[["no-fetch-if","method:POST body:/content_view|impression|page_view/"]],"myfoxzone.com":[["acs","document.getElementsByTagName",".pubads"]],"mykitsch.com":[["remove-cookie","_shopify_y","when","scroll keydown"],["set-local-storage-item","/lc_anon_user_id|_constructorio_search_client_id/","$remove$"]],"nationaltoday.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"netatama.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"netflix.com":[["no-fetch-if","logs.netflix.com"]],"news-buzz1.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"news-herald.com":[["set-session-storage-item","nxt_is_incognito","false"]],"news30over.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"newsinlevels.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"nicovideo.jp":[["no-fetch-if","stella"],["no-xhr-if","stella"]],"niice-woker.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"niketalk.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"nofilmschool.com":[["acs","document.createElement","admiral"]],"nookgaming.com":[["rmnt","script","/join\\(\\'\\'\\)/"]],"nouvelobs.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"ocregister.com":[["set-session-storage-item","nxt_is_incognito","false"]],"okteve.com":[["no-fetch-if","method:POST body:tracker"]],"onihimechan.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"pagesix.com":[["rmnt","script","\"data-adm-url\""],["rmnt","script","\"v4ac1eiZr0\""],["json-prune","dataLayer.trackingId user.trackingId"],["remove-cookie","/^blaize_/","when","scroll keydown"]],"pandamovie.info":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"pashplus.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"pixabay.com":[["remove-cookie","anonymous_user_id"]],"popularmechanics.com":[["href-sanitizer","body a[href*=\"?\"][href*=\"u=http\"]:is([href*=\".com/c/\"],[href*=\".io/c/\"],[href*=\".net/c/\"],[href*=\"?subId1=\"],[href^=\"https://affportal.bhphoto.com/dl/redventures/?\"])","?u"],["href-sanitizer","body a[href*=\"?\"][href*=\"url=http\"]:is([href^=\"https://cc.\"][href*=\".com/v1/otc/\"],[href^=\"https://go.skimresources.com\"],[href^=\"https://go.redirectingat.com\"],[href^=\"https://invol.co/aff_m?\"],[href^=\"https://shop-links.co/link\"],[href^=\"https://track.effiliation.com/servlet/effi.redir?\"],[href^=\"https://atmedia.link/product?url=http\"],[href^=\"https://track.flexlinks\"],[href^=\"https://www.\"][href*=\".com/t/\"],[href*=\".prsm1.com/r?\"],[href*=\".com/click-\"],[href*=\".net/click-\"],a[href*=\".com/t/t?a=\"],[href*=\".com/a.ashx?\"],a[href*=\".dk/t/t?a=\"])","?url"],["remove-cookie","/_HFID|mosb/"]],"porsche.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"portlandtribune.com":[["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"pottsmerc.com":[["set-session-storage-item","nxt_is_incognito","false"]],"pravda.com.ua":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"pressenterprise.com":[["set-session-storage-item","nxt_is_incognito","false"]],"promodescuentos.com":[["href-sanitizer","a[href*=\"https://www.promodescuentos.com/visit/\"][title^=\"https://\"]","[title]"]],"queerty.com":[["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"radio-australia.org":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"raenonx.cc":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"realgm.com":[["rmnt","script","\"v4ac1eiZr0\""]],"record-bee.com":[["set-session-storage-item","nxt_is_incognito","false"]],"redbluffdailynews.com":[["set-session-storage-item","nxt_is_incognito","false"]],"relevantmagazine.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"reuters.com":[["aost","admiral",".js?"]],"rivals.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"roblox.com":[["href-sanitizer","a[href^=\"https://cts.businesswire.com/ct/CT?\"][href*=\"url=http\"]","?url"]],"scribens.fr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"sentinelandenterprise.com":[["set-session-storage-item","nxt_is_incognito","false"]],"severeporn.com":[["remove-cookie","kt_ips"]],"sgvtribune.com":[["set-session-storage-item","nxt_is_incognito","false"]],"shuraba-matome.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"silive.com":[["acs","document.getElementsByTagName",".pubads"],["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"smarturl.it":[["set","linkfire.tracking","{}"]],"smsonline.cloud":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"soccerdigestweb.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"solitairehut.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"soundcloud.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"],["href-sanitizer","body a[href^=\"https://gate.sc\"][href*=\"?url=http\"]","?url"],["remove-cookie","/sc_anonymous_id|sc_tracking_anonymous_id/","when","scroll keydown"],["set-local-storage-item","/sc_tracking_anonymous_id|statsig/","$remove$"]],"southhemitv.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"spankbang.net":[["set","send_gravity_event","noopFunc"],["set","send_recommendation_event","noopFunc"]],"spankbang.nl":[["set","send_gravity_event","noopFunc"],["set","send_recommendation_event","noopFunc"]],"speedporn.pw":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"sportsgamblingpodcast.com":[["rmnt","script","\"v4ac1eiZr0\""]],"ssnewstelegram.com":[["rmnt","script","\"v4ac1eiZr0\""]],"steamcommunity.com":[["href-sanitizer","a[href^=\"https://steamcommunity.com/linkfilter/?url=http\"]","?url"],["href-sanitizer","a[href^=\"https://steamcommunity.com/linkfilter/?u=http\"]","?u"]],"steamplay.es":[["aopw","CoinNebula"]],"steamplay.it":[["aopw","CoinNebula"]],"steamplay.pl":[["aopw","CoinNebula"]],"steamplay.ru":[["aopw","CoinNebula"]],"store.steampowered.com":[["href-sanitizer","a[href^=\"https://steamcommunity.com/linkfilter/?url=http\"]","?url"],["href-sanitizer","a[href^=\"https://steamcommunity.com/linkfilter/?u=http\"]","?u"]],"streamporn.li":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"streamporn.pw":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"sun-sentinel.com":[["set-session-storage-item","nxt_is_incognito","false"]],"swissotel.com":[["remove-cookie","/incap_|s_fid/","when","scroll keydown"]],"szamoldki.hu":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"tasma.ru":[["aopw","decodeURIComponent"]],"thebeautysection.com":[["rmnt","script","\"v4ac1eiZr0\""]],"thecelticblog.com":[["rmnt","script","\"v4ac1eiZr0\""]],"thecurvyfashionista.com":[["rmnt","script","\"v4ac1eiZr0\""]],"thefashionspot.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"threads.com":[["json-prune","require.0.3.0.__bbox.define.[].2.is_linkshim_supported"]],"tiktok.com":[["set","AppLogBridge.hasStarted","trueFunc"],["set","AppLogBridge.onEventV3","noopFunc"],["set","AppLogBridge.profileSet","noopFunc"],["set","AppLogBridge.profileSetOnce","noopFunc"],["set","AppLogBridge.profileIncrement","noopFunc"],["set","AppLogBridge.profileUnset","noopFunc"],["set","AppLogBridge.profileAppend","noopFunc"],["set-local-storage-item","/__tea_cache_events_.*/","$remove$"]],"timesherald.com":[["set-session-storage-item","nxt_is_incognito","false"]],"timesunion.com":[["remove-cookie","realm.cookiesAndJavascript"]],"torontosun.com":[["acs","document.getElementsByTagName",".pubads"]],"toyotaklub.org.pl":[["rmnt","script","\"v4ac1eiZr0\""]],"tracktheta.com":[["rmnt","script","/join\\(\\'\\'\\)/"]],"transparentnevada.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"trendyol.com":[["set","process","{}"],["set","process.env","{}"]],"tz.de":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"uwakich.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"v.qq.com":[["nowebrtc"]],"vancouversun.com":[["acs","document.getElementsByTagName",".pubads"]],"vault76.info":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"vid123.net":[["href-sanitizer","a[href^=\"/vp/player/to/?u=http\"], a[href^=\"/vp/download/goto/?u=http\"]","?u"]],"view.ceros.com":[["no-xhr-if","ceros.com/a?data"]],"watarukiti.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"watchpornx.com":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"wayfair.com":[["no-xhr-if","t.wayfair.com/b.php?"],["set","navigator.sendBeacon","noopFunc"]],"weareiowa.com":[["acs","document.getElementsByTagName",".pubads"]],"weartv.com":[["aost","admiral",".js?"]],"weather.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"],["acs","document.getElementsByTagName",".pubads"]],"web.skype.com":[["remove-cookie","MicrosoftApplicationsTelemetryDeviceId","when","scroll keydown"],["remove-cookie","MicrosoftApplicationsTelemetryFirstLaunchTime"]],"webex.com":[["no-xhr-if","svc.webex.com/metrics"]],"wgrz.com":[["acs","document.getElementsByTagName",".pubads"]],"windowscentral.com":[["href-sanitizer","body a[href^=\"https://go.redirectingat.com/\"][href*=\"&url=http\"]","?url"]],"winfuture.de":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"wkyc.com":[["acs","document.getElementsByTagName",".pubads"]],"worldpopulationreview.com":[["acs","document.createElement","admiral"]],"wowhead.com":[["acs","document.getElementsByTagName",".pubads"]],"woxikon.fr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"woxikon.org":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"woxikon.ru":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"wral.com":[["acs","document.createElement","admiral"]],"wrestlezone.com":[["acs","document.createElement","admiral"]],"www.google.com":[["set","rwt","noopFunc"],["set-attr","c-wiz[data-p] [data-query] a[target=\"_blank\"][role=\"link\"]","rlhc","1"]],"www.google.fr":[["set","rwt","noopFunc"],["set-attr","c-wiz[data-p] [data-query] a[target=\"_blank\"][role=\"link\"]","rlhc","1"]],"www.google.it":[["set","rwt","noopFunc"],["set-attr","c-wiz[data-p] [data-query] a[target=\"_blank\"][role=\"link\"]","rlhc","1"]],"www.google.net":[["set","rwt","noopFunc"],["set-attr","c-wiz[data-p] [data-query] a[target=\"_blank\"][role=\"link\"]","rlhc","1"]],"www.google.org":[["set","rwt","noopFunc"],["set-attr","c-wiz[data-p] [data-query] a[target=\"_blank\"][role=\"link\"]","rlhc","1"]],"www.hoyolab.com":[["remove-cookie","/^DEVICEFP/"]],"www.reddit.com":[["json-prune","data.*.elements.edges.[].node.outboundLink"],["json-prune","data.children.[].data.outbound_link"]],"www.yahoo.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"xopenload.me":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"zagreb.info":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"zakuzaku911.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"zakzak.co.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"zorroplay.xyz":[["rmnt","script","sendFakeRequest"]]},"off":{}};
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
