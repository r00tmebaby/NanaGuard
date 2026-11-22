/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"11alive.com":[["acs","document.getElementsByTagName",".pubads"]],"2monkeys.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"46matome.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"5newsonline.com":[["acs","document.getElementsByTagName",".pubads"]],"abc17news.com":[["rmnt","script","\"v4ac1eiZr0\""]],"acmemarkets.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"advocate-news.com":[["set-session-storage-item","nxt_is_incognito","false"]],"aiskillsnavigator.microsoft.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"al.com":[["acs","document.createElement","admiral"],["acs","document.getElementsByTagName",".pubads"],["aost","decodeURI","/(?=^(?!.*\\.js))/"],["rmnt","script","\"v4ac1eiZr0\""]],"aqua2ch.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"awkward.com":[["rmnt","script","\"v4ac1eiZr0\""]],"bab.la":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"beavertonvalleytimes.com":[["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"becomingpeculiar.com":[["rmnt","script","\"v4ac1eiZr0\""]],"beeg.porn":[["href-sanitizer","a[href^=\"/vp/player/to/?u=http\"], a[href^=\"/vp/download/goto/?u=http\"]","?u"]],"bellinghamherald.com":[["acs","document.getElementsByTagName",".pubads"]],"bg-mania.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"billboard.com":[["acs","document.getElementsByTagName",".pubads"]],"birdsandblooms.com":[["acs","document.getElementsByTagName",".pubads"]],"bitdomain.biz":[["rmnt","script","/join\\(\\'\\'\\)/"]],"bleepingcomputer.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"blog.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"blogher.com":[["rmnt","script","\"v4ac1eiZr0\""]],"bocopreps.com":[["set-session-storage-item","nxt_is_incognito","false"]],"boston.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"bostonscally.com":[["remove-cookie","/__ta_|_shopify_y/","when","scroll keydown"]],"briefly.co.za":[["set-local-storage-item","/^recommendation_uuid/","$remove$"]],"buildtheearth.net":[["remove-cookie","/^_pk_id./","when","scroll keydown"]],"buzzfeed.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"calgaryherald.com":[["acs","document.getElementsByTagName",".pubads"]],"calgarysun.com":[["acs","document.getElementsByTagName",".pubads"]],"capezio.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"chaos2ch.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"chatgpt.com":[["no-fetch-if","method:/post/i url:/\\/\\/chatgpt\\.com\\/ces\\/v1\\/[a-z]$/"],["no-fetch-if","method:/post/i url:ab.chatgpt.com/v1/rgstr"]],"chicagotribune.com":[["set-session-storage-item","nxt_is_incognito","false"]],"chicoer.com":[["set-session-storage-item","nxt_is_incognito","false"]],"cinema.com.my":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"clickorlando.com":[["set-cookie","bitmovin_analytics_uuid","OK"]],"crosswordsolver.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"crunchyroll.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"ctinsider.com":[["remove-cookie","realm.cookiesAndJavascript"]],"ctpost.com":[["remove-cookie","realm.cookiesAndJavascript"]],"dailyfreeman.com":[["set-session-storage-item","nxt_is_incognito","false"]],"dailyvoice.com":[["rmnt","script","\"v4ac1eiZr0\""]],"dev.to":[["remove-cookie","ahoy_visitor"],["remove-cookie","ahoy_visit"]],"dk.pcpartpicker.com":[["href-sanitizer","a[href^=\"https://online.adservicemedia.dk/\"][href*=\"deeplink=http\"]","?deeplink"]],"dogdrip.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"],["href-sanitizer","body a[href^=\"/link.php?url=http\"]","?url"]],"dogtime.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"donbalon.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"doorblog.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"douban.com":[["href-sanitizer","body a[href^=\"https://www.douban.com/link2/?url=http\"]","?url"]],"duolingo.com":[["no-xhr-if","excess.duolingo.com/batch"]],"economist.co.kr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"electricteeth.com":[["href-sanitizer","body a[href*=\"?\"][href*=\"url=http\"]:is([href^=\"https://cc.\"][href*=\".com/v1/otc/\"],[href^=\"https://go.skimresources.com\"],[href^=\"https://go.redirectingat.com\"],[href^=\"https://invol.co/aff_m?\"],[href^=\"https://shop-links.co/link\"],[href^=\"https://track.effiliation.com/servlet/effi.redir?\"],[href^=\"https://atmedia.link/product?url=http\"],[href^=\"https://track.flexlinks\"],[href^=\"https://www.\"][href*=\".com/t/\"],[href*=\".prsm1.com/r?\"],[href*=\".com/click-\"],[href*=\".net/click-\"],a[href*=\".com/t/t?a=\"],[href*=\".com/a.ashx?\"],a[href*=\".dk/t/t?a=\"])","?url"],["href-sanitizer","body a[href*=\"awin1.com/\"][href*=\".php?\"][href*=\"ued=http\"]","?ued"],["href-sanitizer","body a[href*=\"awin1.com/\"][href*=\".php?\"][href*=\"p=http\"]","?p"]],"elotrolado.net":[["href-sanitizer","a[href^=\"https://go.redirectingat.com?url=http\"]","?url"]],"eptrail.com":[["set-session-storage-item","nxt_is_incognito","false"]],"erogamescape.dyndns.org":[["href-sanitizer","a[href^=\"https://dlaf.jp/home/dlaf/=/aid/\"][href*=\"/url/http\"]","/\\/url\\/(http.+)/ -uricomponent"]],"esportstales.com":[["acs","document.createElement","admiral"]],"etoland.co.kr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"eurointegration.com.ua":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"evropa2.cz":[["set-local-storage-item","/cnc_alien_invasion_code|pixelsLastFired/","$remove$"]],"expressnews.com":[["remove-cookie","realm.cookiesAndJavascript"]],"faithhub.net":[["rmnt","script","\"v4ac1eiZr0\""]],"fesoku.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"filson.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"fiveslot777.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"fjlaboratories.com":[["rmnt","script","api.dataunlocker.com"]],"football-2ch.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"formula1.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"forum.blu-ray.com":[["ra","onclick|oncontextmenu|onmouseover","a[href][onclick*=\"this.href\"]","stay"]],"forums.hfboards.com":[["acs","document.createElement","admiral"]],"foxbusiness.com":[["aeld","/load|error/",",G=null),clearTimeout(K),!"],["nostif",",G=null),clearTimeout(K),!"]],"freelancer.taxmachine.be":[["rmnt","script","api.dataunlocker.com"]],"fsm-media.com":[["rmnt","script","\"v4ac1eiZr0\""]],"fullxxxmovies.me":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"funtasticlife.com":[["rmnt","script","\"v4ac1eiZr0\""]],"galaxus.de":[["remove-cookie","/^\\.(b|s|xp|ub\\.)id/","when","scroll keydown"]],"gamer.com.tw":[["href-sanitizer","body a[href^=\"https://ref.gamer.com.tw/redir.php?url=http\"]","?url"]],"gamerant.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"girlsreport.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"givemesport.com":[["rmnt","script","\"v4ac1eiZr0\""]],"globalrph.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"gloria.hr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"grabify.link":[["acs","document.createElement","admiral"]],"heureka.cz":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"honkailab.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"honyaku-channel.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"horairesdouverture24.fr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"howtogeek.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"hpplus.jp":[["set-local-storage-item","/^fw_/","$remove$"]],"html.duckduckgo.com":[["href-sanitizer","a[href^=\"//duckduckgo.com/l/?uddg=\"]","?uddg"]],"ijr.com":[["acs","document.createElement","admiral"]],"intellischool.id":[["no-xhr-if","fingerprintjs-pro-react"]],"israelnationalnews.com":[["rmnt","script","loadTaboola"]],"jablickar.cz":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"jasminemaria.com":[["rmnt","script","\"v4ac1eiZr0\""]],"jdsports.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"jisaka.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"judgehype.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"jxoplay.xyz":[["rmnt","script","sendFakeRequest"]],"kgw.com":[["acs","document.getElementsByTagName",".pubads"]],"kijyomatome-ch.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kijyomatome.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kijyomita.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kimbino.bg":[["remove-cookie","kim-tracker-uid"]],"kimbino.ro":[["remove-cookie","kim-tracker-uid"]],"kobe-journal.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"komonews.com":[["acs","document.getElementsByTagName",".pubads"]],"konoyubitomare.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"kyoteibiyori.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"lamire.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"ldblog.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"liblo.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"lifehacker.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"lifeinleggings.com":[["rmnt","script","\"v4ac1eiZr0\""]],"linklog.tiagorangel.com":[["set","data","true"]],"liquipedia.net":[["remove-cookie","/^_pk_/"]],"listentotaxman.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"livedoor.blog":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"lizzieinlace.com":[["rmnt","script","\"v4ac1eiZr0\""]],"madewell.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"],["remove-cookie","dns_cookie"]],"magesypro.pro":[["acs","document.createElement","admiral"]],"mail.yahoo.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"majikichi.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"malaymail.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"mamastar.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"manta.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"],["rmnt","script","error-report.com"]],"mashable.com":[["href-sanitizer","a[href^=\"https://zdcs.link/\"]","?u"]],"matacoco.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"matomelotte.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"mcall.com":[["set-session-storage-item","nxt_is_incognito","false"]],"mediamarkt.de":[["aopw","ftr__startScriptLoad"]],"meteo60.fr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"mindbodygreen.com":[["set-local-storage-item","segmentDeviceId","$remove$"]],"miro.com":[["remove-cookie","ajs_anonymous_id","when","scroll keydown"],["no-xhr-if","/eventhub\\.\\w+\\.miro\\.com\\/api\\/stream/"]],"moin.de":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"momtastic.com":[["rmnt","script","\"v4ac1eiZr0\""]],"montereyherald.com":[["set-session-storage-item","nxt_is_incognito","false"]],"mumuplayer.com":[["set-local-storage-item","/_user_id$/","$remove$"]],"nashobavalleyvoice.com":[["set-session-storage-item","nxt_is_incognito","false"]],"nationaltoday.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"ncbi.nlm.nih.gov":[["set","ncbi.sg","{}"],["set","ncbi.sg.ping","noopFunc"]],"netatama.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"netzwelt.de":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"news.com.au":[["acs","document.getElementsByTagName",".pubads"],["set","admiral","noopFunc"]],"newstimes.com":[["remove-cookie","realm.cookiesAndJavascript"]],"newswest9.com":[["acs","document.getElementsByTagName",".pubads"]],"nicovideo.jp":[["no-fetch-if","stella"],["no-xhr-if","stella"]],"nofilmschool.com":[["acs","document.createElement","admiral"]],"nowinstock.net":[["href-sanitizer","a[href^=\"https://click.linksynergy.com/deeplink?id=\"][href*=\"&murl=\"]","?murl"],["href-sanitizer","a[href*=\"?\"][href*=\"&url=http\"]","?url"],["href-sanitizer","a[href*=\"?\"][href*=\"&u=http\"]","?u"]],"oilprice.com":[["remove-cookie","ga_store_user_id"]],"orovillemr.com":[["set-session-storage-item","nxt_is_incognito","false"]],"otakomu.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"otoko-honne.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"oumaga-times.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"ozlosleep.com":[["remove-cookie","/_shopify_(y|sa_)/","when","scroll keydown"]],"pandora.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"paranormal-ch.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"pashplus.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"payment.nba.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"pcworld.com":[["acs","document.getElementsByTagName",".pubads"],["set","admiral","noopFunc"]],"pelando.com.br":[["href-sanitizer","a[href*=\"https://www.pelando.com.br/api/redirect?url=\"]","?url"]],"pennlive.com":[["acs","document.createElement","admiral"],["acs","document.getElementsByTagName",".pubads"],["aost","decodeURI","/(?=^(?!.*\\.js))/"],["rmnt","script","\"data-adm-url\""],["rmnt","script","\"v4ac1eiZr0\""]],"picksandparlays.net":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"ping.gg":[["rmnt","script","/join\\(\\'\\'\\)/"]],"play.hbomax.com":[["no-xhr-if","brightline.tv"],["no-fetch-if","litix.io"]],"pornwish.org":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"portlandtribune.com":[["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"pottsmerc.com":[["set-session-storage-item","nxt_is_incognito","false"]],"predic.ro":[["rmnt","script","\"v4ac1eiZr0\""]],"preisjaeger.at":[["href-sanitizer","a[href*=\"https://www.preisjaeger.at/visit/\"][title^=\"https://\"]","[title]"]],"pressian.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"puzzlegarage.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"radio-australia.org":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"raetsel-hilfe.de":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"ranker.com":[["aost","HTMLElement.prototype.insertBefore","/[A-Z] .+chunks\\/\\d{4}\\./"]],"recosoku.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"registercitizen.com":[["remove-cookie","realm.cookiesAndJavascript"]],"rivals.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"robbreport.com":[["acs","document.getElementsByTagName",".pubads"],["rmnt","script","\"v4ac1eiZr0\""]],"royalmailchat.co.uk":[["rmnt","script","\"v4ac1eiZr0\""]],"saikyo-jump.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"samsungmagazine.eu":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"santacruzsentinel.com":[["set-session-storage-item","nxt_is_incognito","false"]],"scribens.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"search.rakuten.co.jp":[["aeld","mouseup","sendClickEvent"]],"severeporn.com":[["remove-cookie","kt_ips"]],"sgvtribune.com":[["set-session-storage-item","nxt_is_incognito","false"]],"shoebacca.com":[["remove-cookie","/swym-|yotpo_/","when","scroll keydown"],["set-local-storage-item","/^boostSD/","$remove$"]],"shutterstock.com":[["remove-cookie","/sstk_anonymous_id|htjs_anonymous_id/","when","scroll keydown"],["set-local-storage-item","/htjs_|stck_|statsig/","$remove$"]],"siliconera.com":[["acs","document.createElement","admiral"],["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"simpleflying.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"sky.pro":[["set-local-storage-item","/sales-ninja|snj/","$remove$"]],"slickdeals.net":[["href-sanitizer","a[href*=\"go.redirectingat.com\"][href*=\"url=http\"]","?url"],["href-sanitizer","a[href^=\"https://slickdeals.net/?\"][href*=\"u2=http\"]","?u2"]],"slobodnadalmacija.hr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"soccerdigestweb.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"solitairehut.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"southplattesentinel.com":[["set-session-storage-item","nxt_is_incognito","false"]],"sportsrec.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"spreaker.com":[["href-sanitizer","body a[href^=\"https://spreaker.onelink.me/\"][href*=\"&af_web_dp=http\"]","?af_web_dp"]],"stamfordadvocate.com":[["remove-cookie","realm.cookiesAndJavascript"]],"stealthoptional.com":[["acs","document.createElement","admiral"]],"steamcommunity.com":[["href-sanitizer","a[href^=\"https://steamcommunity.com/linkfilter/?url=http\"]","?url"],["href-sanitizer","a[href^=\"https://steamcommunity.com/linkfilter/?u=http\"]","?u"]],"store.steampowered.com":[["href-sanitizer","a[href^=\"https://steamcommunity.com/linkfilter/?url=http\"]","?url"],["href-sanitizer","a[href^=\"https://steamcommunity.com/linkfilter/?u=http\"]","?u"]],"streamporn.pw":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"streetinsider.com":[["href-sanitizer","body a[href*=\"?\"][href*=\"u=http\"]:is([href*=\".com/c/\"],[href*=\".io/c/\"],[href*=\".net/c/\"],[href*=\"?subId1=\"],[href^=\"https://affportal.bhphoto.com/dl/redventures/?\"])","?u"]],"subway.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"sun-sentinel.com":[["set-session-storage-item","nxt_is_incognito","false"]],"superherohype.com":[["acs","document.getElementsByTagName",".pubads"],["rmnt","script","\"v4ac1eiZr0\""]],"sutekinakijo.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"syracuse.com":[["acs","document.getElementsByTagName",".pubads"]],"techcrunch.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"],["acs","document.getElementsByTagName",".pubads"],["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"text-compare.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"thecelticblog.com":[["rmnt","script","\"v4ac1eiZr0\""]],"thefashionspot.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"thegamer.com":[["acs","document.createElement","admiral"],["rmnt","script","\"v4ac1eiZr0\""]],"thehindu.com":[["remove-cookie","_pc_private"]],"thenerdstash.com":[["acs","document.createElement","admiral"]],"thenerdyme.com":[["rmnt","script","\"v4ac1eiZr0\""]],"theoutlookonline.com":[["aost","decodeURI","/(?=^(?!.*\\.js))/"]],"theprovince.com":[["acs","document.createElement","admiral"]],"thisiswhyimbroke.com":[["href-sanitizer","body a[href*=\"awin1.com/\"][href*=\".php?\"][href*=\"ued=http\"]","?ued"],["href-sanitizer","body a[href*=\"awin1.com/\"][href*=\".php?\"][href*=\"p=http\"]","?p"]],"threads.net":[["json-prune","require.0.3.0.__bbox.define.[].2.is_linkshim_supported"]],"timesheraldonline.com":[["set-session-storage-item","nxt_is_incognito","false"]],"timesnews.net":[["rmnt","script","\"v4ac1eiZr0\""]],"timesofindia.indiatimes.com":[["no-fetch-if","tvid.in/log/"]],"timesunion.com":[["remove-cookie","realm.cookiesAndJavascript"]],"tirerack.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"tomshardware.com":[["href-sanitizer","a[href^=\"https://click.linksynergy.com/\"][href*=\"link?id=\"][href*=\"&murl=http\"]","?murl"],["href-sanitizer","a[href^=\"https://click.linksynergy.com/deeplink?id=\"][href*=\"&murl=http\"]","?murl"],["href-sanitizer","body a[href*=\"?\"][href*=\"u=http\"]:is([href*=\".com/c/\"],[href*=\".io/c/\"],[href*=\".net/c/\"],[href*=\"?subId1=\"],[href^=\"https://affportal.bhphoto.com/dl/redventures/?\"])","?u"],["href-sanitizer","body a[href*=\"?\"][href*=\"url=http\"]:is([href^=\"https://cc.\"][href*=\".com/v1/otc/\"],[href^=\"https://go.skimresources.com\"],[href^=\"https://go.redirectingat.com\"],[href^=\"https://invol.co/aff_m?\"],[href^=\"https://shop-links.co/link\"],[href^=\"https://track.effiliation.com/servlet/effi.redir?\"],[href^=\"https://atmedia.link/product?url=http\"],[href^=\"https://track.flexlinks\"],[href^=\"https://www.\"][href*=\".com/t/\"],[href*=\".prsm1.com/r?\"],[href*=\".com/click-\"],[href*=\".net/click-\"],a[href*=\".com/t/t?a=\"],[href*=\".com/a.ashx?\"],a[href*=\".dk/t/t?a=\"])","?url"],["href-sanitizer","body a[href*=\"/Proxy.ashx?\"][href*=\"GR_URL=http\"]","?GR_URL"]],"torontosun.com":[["acs","document.getElementsByTagName",".pubads"]],"toyotaklub.org.pl":[["rmnt","script","\"v4ac1eiZr0\""]],"tportal.hr":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"],["rmnt","script","error-report.com"]],"tracktheta.com":[["rmnt","script","/join\\(\\'\\'\\)/"]],"travelingformiles.com":[["rmnt","script","\"v4ac1eiZr0\""]],"trendyol-milla.com":[["set","process","{}"],["set","process.env","{}"]],"trendyol.com":[["set","process","{}"],["set","process.env","{}"]],"twincities.com":[["set-session-storage-item","nxt_is_incognito","false"]],"twitter.com":[["set","Navigator.prototype.globalPrivacyControl","false"],["set","navigator.globalPrivacyControl","false"]],"twn.hu":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"ufret.jp":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"uwakitaiken.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"verkaufsoffener-sonntag.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"videogamer.com":[["acs","document.createElement","admiral"]],"w.grapps.me":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"watarukiti.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"watchfreexxx.net":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"watchpornfree.info":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"wcnc.com":[["acs","document.getElementsByTagName",".pubads"]],"weartv.com":[["aost","admiral",".js?"]],"webex.com":[["no-xhr-if","svc.webex.com/metrics"]],"whas11.com":[["acs","document.getElementsByTagName",".pubads"]],"winfuture.de":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]],"wnd.com":[["acs","document.createElement","admiral"]],"worldpopulationreview.com":[["acs","document.createElement","admiral"]],"wqad.com":[["acs","document.getElementsByTagName",".pubads"]],"wrestlinginc.com":[["acs","document.createElement","admiral"]],"wthr.com":[["acs","document.getElementsByTagName",".pubads"]],"wusa9.com":[["acs","document.getElementsByTagName",".pubads"]],"www.hoyoverse.com":[["remove-cookie","/^DEVICEFP/"]],"xda-developers.com":[["acs","document.createElement","admiral"],["href-sanitizer","a[href^=\"https://shop-links.co/link/?\"][href*=\"&url=http\"]","?url"],["href-sanitizer","a[href^=\"https://redirect.viglink.com/?\"][href*=\"ourl=http\"]","?ourl"],["href-sanitizer","body a[href*=\"awin1.com/\"][href*=\".php?\"][href*=\"ued=http\"]","?ued"],["href-sanitizer","body a[href*=\"awin1.com/\"][href*=\".php?\"][href*=\"p=http\"]","?p"],["remove-cookie","/articlesRead|previousPage/"]],"xxxmom.net":[["href-sanitizer","a[href^=\"/vp/player/to/?u=http\"], a[href^=\"/vp/download/goto/?u=http\"]","?u"]],"xxxscenes.net":[["href-sanitizer","a[href^=\"https://drivevideo.xyz/link?link=http\"]","?link"]],"zch-vip.com":[["set-local-storage-item","adshield-analytics-uuid","$remove$"],["set-local-storage-item","/_fa_bGFzdF9iZmFfYXQ=$/","$remove$"],["set-local-storage-item","/_fa_dXVpZA==$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWNjZXB0YWJsZV9hZHM=$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfaXNfYmxvY2tpbmdfYWRz$/","$remove$"],["set-local-storage-item","/_fa_Y2FjaGVfYWRibG9ja19jaXJjdW12ZW50X3Njb3Jl$/","$remove$"]]},"off":{}};
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
