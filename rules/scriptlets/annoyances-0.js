/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"20demidistance9elongations.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"26.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"270towin.com":[["set-session-storage-item","fs.adb.dis","1"]],"30edu.com.cn":[["ra","oncontextmenu|oncopy|onselectstart"]],"30sensualizeexpression.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"3landesmuseen-braunschweig.de":[["set-cookie","3LM-Cookie","false"]],"48.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"50plusmatch.fi":[["set-cookie","cookieconsent","no"]],"53.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"aa.com":[["set-cookie","cookie_banner","closed"]],"abril.com.br":[["aeld","copy"]],"abs-cbn.com":[["set-local-storage-item","uninavIsAgreeCookie","true"]],"accace.cz":[["set","realCookieBanner","undefined"]],"adbypass.org":[["no-fetch-if","/googlesyndication|googletag/"],["nowoif"]],"adidas.com.br":[["set-cookie","notice_preferences","2"]],"adidas.com.vn":[["set-cookie","notice_preferences","2"]],"adidas.gr":[["set-cookie","notice_preferences","2"]],"adult-tv-channels.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"aeromexico.com":[["set-cookie","AgreeCookies","true"],["set-cookie","AreCookiesSet","true"]],"affordablemobiles.co.uk":[["set-cookie","cookie_accept","true"],["set-cookie","__a1cns","true"],["set-cookie","__a1cp","false"]],"aida64russia.com":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"airfrance.co.jp":[["aopw","gdpr_popin_path"]],"akaanseutu.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"allen.in":[["json-prune","data.page_content.slot_widgets"]],"alltechnerd.com":[["aopw","document.oncontextmenu"]],"ally.com":[["set-cookie","allyccb","OK"]],"alte-sennerei.com":[["set-cookie","Consent","0"]],"amai.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"amd.by":[["set-cookie","cookie_consent","1","","reload","1"]],"amnesty.nl":[["set-cookie","amnesty-cookies","000"]],"anauk.net":[["ra","oncontextmenu|onselectstart|onselect|ondragstart|ondrag","body"]],"animaldiversity.org":[["set-cookie","cookie-settings","reject"]],"animalwebcams.net":[["set","realCookieBanner","undefined"]],"animaze.us":[["set-cookie","amcookie_allowed","1"]],"animecruzers.com":[["set","Object.prototype.preroll","[]"]],"ankersolix.com":[["set-cookie","accept_cookies","accepted"]],"aphorisma.de":[["set-cookie","alertCookie","true"]],"apogeeagency.com":[["set-cookie","cmplz_banner-status","dismissed"]],"app.argos.education":[["set-cookie","_cky_opt_in","false"],["set-cookie","_cky_opt_in_dismiss","true"]],"app.bionic-reading.com":[["set-local-storage-item","accept_all_cookies","false"]],"app.filen.io":[["set-cookie","cookieConsent","accept","","domain","app.filen.io"]],"apply.opentech.fund":[["set-local-storage-item","cookieconsent","decline"]],"apps.stratford.gov.uk":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"arbeitsagentur.de":[["set-cookie","cookie_consent","denied"],["set-cookie","marketing_consent","denied"],["set-cookie","personalization_consent","denied"]],"arcanescans.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"arenavalceana.ro":[["acs","jQuery","contextmenu"],["acs","document.oncontextmenu"]],"ark-unity.com":[["no-fetch-if","/adsbygoogle|ad-manager/"]],"arsdigita.de":[["set","realCookieBanner","undefined"]],"articlesmania.me":[["ra","oncontextmenu"],["acs","document.onkeydown"]],"as-eweb.com":[["set-cookie","allowGetPrivacyInfo","true"]],"ascension.gg":[["set-local-storage-item","CookieConsent_v2","false"]],"asko.com":[["set-cookie","cookieconsent_status_ESSENTIAL","ALLOW"]],"atombank.co.uk":[["set-cookie","acknowledgeCookieBanner","true"],["set-cookie","enableAnalyticsCookies","denied"],["set-cookie","enableTargetingAdvertisingCookies","denied"]],"audioreview.m1001.coreserver.jp":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"]],"autoalkatreszek24.hu":[["aeld","mousedown","function(t)"]],"autohaus-diefenbach-waldbrunn.de":[["set-cookie","hide-gdpr-bar","true"]],"autohaus-reitermayer.de":[["set-cookie","hide-gdpr-bar","true"]],"autos.suzuki.com.mx":[["set-cookie","suzuki-accept-cookie","true"]],"ayudatpymes.com":[["set-cookie","cookie_consent","1"]],"azertyfactor.be":[["set-cookie","consent-cookie","1"]],"b757.info":[["set","realCookieBanner","undefined"]],"b98.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"babiceurican.cz":[["set","realCookieBanner","undefined"]],"bajuwarenhof.de":[["set-cookie","cookie-consent","declined","","reload","1"]],"baldauf-oberstdorf.de":[["set-cookie","Consent","0"]],"bamf.de":[["set-cookie","cookiebanner","0"]],"bcorporation.net":[["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"beautycon.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"beenverified.com":[["set-session-storage-item","privacyPopupShown","true"]],"belisse-beauty.de":[["set-cookie","cookie-preference","1"]],"beratungskompass-verschwoerungsdenken.de":[["set-cookie","cookieconsent_status","allow"]],"beta-accounts.paradoxinteractive.com":[["set-cookie","cookies_accepted","true"]],"betterhumans.pub":[["set-local-storage-item","201805-policy|accepted","1"]],"bettermarketing.pub":[["set-local-storage-item","201805-policy|accepted","1"]],"bien.no":[["set-cookie","eika_consent_marketing","false"],["set-cookie","eika_consent_set","true"]],"binsoft.pl":[["set-cookie","allowcookies","1","","reload","1"]],"bio-hoflieferant.de":[["set-cookie","accept_cookies","yes","","reload","1"]],"biona-shop.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"bittimittari.fi":[["set-local-storage-item","storagePermission","true"]],"blablacar.com.ua":[["set-cookie","_cookies_v2","1"]],"blackbit.sh":[["set-cookie","bb_consent","rejected"]],"blitzrechner.de":[["aeld","copy"]],"blockchain.com":[["set-session-storage-item","dismissedTrackingBanner","true"]],"blog.csdn.net":[["aeld","copy","preventDefault"]],"blog.whatsapp.com":[["rc","hasCookieBanner","body","stay"]],"bloomberglinea.com":[["aeld","copy"]],"bns.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"boeser-chinese.de":[["set","realCookieBanner","undefined"]],"bolist.se":[["set-cookie","cookies_marketing_ok","false"],["set-cookie","cookies_ok","true"]],"bongdaplus.vn":[["aeld","mousedown","undefined","elements","body"],["set","document.oncontextmenu","trueFunc"]],"boogschietshop.nl":[["set-cookie","cookie_preference","functional"]],"book.zhulang.com":[["aeld","/contextmenu|selectstart/"]],"booking.weisse-flotte.de":[["set-cookie","functionality","false"],["set-cookie","performance","false"],["set-cookie","targeting","false"]],"booking2.reederei-hiddensee.de":[["set-cookie","functionality","false"],["set-cookie","performance","false"],["set-cookie","targeting","false"]],"bookings.hermesairports.com":[["set-cookie","cookie_choice_made","decline"]],"bricksforge.io":[["set","realCookieBanner","undefined"]],"britishbarbers.com":[["set-cookie","cookies_accepted","true","","reload","1"]],"bronze-bravery.com":[["nostif","()","2000"]],"brunozimmer.de":[["set","realCookieBanner","undefined"]],"btvnovinite.bg":[["aeld","contextmenu"]],"bucyrustelegraphforum.com":[["nostif","gnt_mol_oy"]],"buienradar.nl":[["set","hideBannerBlockedMessage","true"]],"bulder.no":[["set-cookie","marketing","false"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"cabinetexpert.ro":[["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"cachecrawler.com":[["set-session-storage-item","hasConsent","1"],["set-session-storage-item","hasDsg","1"]],"calorielijst.nl":[["aopw","clickIE"]],"cambridgebs.co.uk":[["set-cookie","cookieStatus","true"]],"camcaps.to":[["acs","RegExp","debugger"]],"careers.cloud.com":[["set-cookie","ctc_rejected","1"]],"carsales.com.au":[["set-cookie","csnGDPR","true"]],"casellimoveis.com.br":[["set-cookie","cookieMold","true"]],"caucasus-naturefund.org":[["set","realCookieBanner","undefined"]],"ccn.com":[["aopr","__cmpGdprAppliesGlobally"]],"ccsaltosciliar.it":[["set-cookie","ris_cookie_setting","1"]],"cda-hd.cc":[["set","document.oncontextmenu","null"]],"cdn.gamemonetize.com":[["ra","oncontextmenu","body"]],"centrumher.eu":[["acs","jQuery","undefined"]],"cesky-sport.cz":[["set-cookie","DmCookiesAccepted","true"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"cetaf.org":[["set-cookie","surbma-gpga","no"]],"chatfuel.com":[["set-cookie","__cf_gdpr_accepted","false"]],"chillicothegazette.com":[["nostif","gnt_mol_oy"]],"chimica-online.it":[["aopr","disableselect"]],"chipcitycookies.com":[["set-local-storage-item","cookie_consent","false"]],"chipsaway.co.uk":[["set-cookie","cookies-configured","1"]],"chiusa.eu":[["set-cookie","ris_cookie_setting","1"]],"chronologia.pl":[["set","document.onselectstart","null"],["set","document.oncontextmenu","null"]],"cincinnati.com":[["nostif","gnt_mol_oy"]],"cirrusassessment.com":[["rc","wcc-popup-overflow","body","stay"]],"ciss.de":[["set","realCookieBanner","undefined"]],"cleantechnica.com":[["set-cookie","ccpaconsent","1"]],"cocomanga.com":[["aeld","contextmenu"]],"coinsparty.com":[["aeld","contextmenu"]],"column.com":[["set-local-storage-item","cookieAllowed","false"]],"comune.falzes.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.perca.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.predoi.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sanpancrazio.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.senales.bz.it":[["set-cookie","ris_cookie_setting","1"]],"contaspoupanca.pt":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"cookhero.gr":[["acs","document.oncontextmenu"]],"cool-tv.net":[["rmnt","script",".preventDefault()","includes","contextmenu"]],"cpc2r.ch":[["set-local-storage-item","CPCCookies","true"]],"crealitycloud.com":[["set-local-storage-item","cookies","true"]],"crearunapaginaweb.cat":[["set-cookie","promptCookies","1"]],"criticalthinking.org":[["nostif","donation-modal"]],"crushwineco.com":[["set-cookie","acceptcookietermCookieBanner","true"]],"cualesmiip.com":[["set-cookie","promptCookies","1"]],"cuisin-studio.com":[["rc","unreadable-display","","stay"]],"cvwarehouse.com":[["set-cookie","0_required","accepted","","","reload","1"]],"d.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"d000d.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dacsa.com":[["set","realCookieBanner","undefined"]],"dajanarodriguez.cz":[["set-cookie","popup-hide-cookie-consent","true"]],"daraz.com":[["set-local-storage-item","has-dismissed","1"]],"dassen-azara4.com":[["acs","document.oncontextmenu"]],"daya-jewelry.com":[["acs","RegExp","disableRightClick"]],"de-sjove-jokes.dk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"debeste.de":[["ra","oncontextmenu"]],"dedicatedteacher.cambridge.org":[["set-cookie","ubcc","0"]],"degruyterbrill.com":[["set-cookie","acceptcookies","false"]],"delawareonline.com":[["nostif","gnt_mol_oy"]],"demolandia.net":[["aopr","document.oncontextmenu"]],"der-schweighofer.de":[["set-cookie","cookie-preference","1"]],"der-windows-papst.de":[["set","realCookieBanner","undefined"]],"derklassiker.de":[["set","realCookieBanner","undefined"]],"dev.near.org":[["set-local-storage-item","cookiesAcknowledged","1"]],"developer.ing.com":[["set-cookie","cookiepref","true"]],"devowl.io":[["set","realCookieBanner","undefined"]],"dirtbikexpress.co.uk":[["set-cookie","_dbe_cookies_accepted","1"]],"diylifetech.com":[["set-local-storage-item","201805-policy|accepted","1"]],"dnb.no":[["set-cookie","consent_level","2"]],"dnj.com":[["nostif","gnt_mol_oy"]],"do0od.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"do7go.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doctors.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"dodge-forum.eu":[["acs","$","offsetHeight"]],"dollenberg-isolierung.de":[["set","realCookieBanner","undefined"]],"donauauen.at":[["set-cookie","cookies_accepted","false"]],"donostiroller.com":[["set","realCookieBanner","undefined"]],"dotwatcher.cc":[["set-cookie","accept_cookie_policy","true"]],"download.mokeedev.com":[["acs","document.createElement","admiral"]],"doz.pl":[["set-cookie","consent-granted","1","","reload","1"],["set-cookie","consent-granted-version","23"]],"dragshop.com":[["set-cookie","enabled_cookie_accept_cookies","0","","reload","1"]],"drewag.de":[["set-cookie","allowAnalyticalCookies","false"],["set-cookie","allowMarketingCookies","false"],["set-cookie","cookiesAccepted","true"]],"duck.ai":[["set-local-storage-item","duckaiHasAgreedToTerms","true"]],"duckduckgo.com":[["set-local-storage-item","duckaiHasAgreedToTerms","true"]],"duffelblog.com":[["aopr","__cmpGdprAppliesGlobally"]],"dukeofdevonshireeastbourne.co.uk":[["set-cookie","ce-cookie","N"]],"duracell.de":[["aeld","contextmenu"]],"dvag.de":[["set-cookie","dvag_cookies2023","1"]],"dynmcyou.com":[["set-cookie","_pandectes_gdpr","1"]],"e-dojus.lv":[["set-cookie","pc234978122321234","1"]],"e-hilltop.com":[["set-cookie","allowGetPrivacyInfo","true"]],"earlystage.pl":[["set-cookie","ad_storage","false"],["set-cookie","analytics_storage","false"],["set-cookie","functionality_storage","false"],["set-cookie","personalization_storage","false"],["set-cookie","security_storage","false"]],"earth.com":[["aopr","HTMLIFrameElement"]],"ebilet.pl":[["set-cookie","eb_cookie_agree_0124","1"]],"eca-anime.net":[["acs","document.getElementById","advert-tester"]],"ecaytrade.com":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"economictimes.indiatimes.com":[["aopr","intsFequencyCap"],["aeld","contextmenu"]],"edostavka.by":[["set-local-storage-item","isAcceptCookiesNew","true"]],"efmdglobal.org":[["rc","wcc-popup-overflow","body","stay"]],"elektrotechnik-schabus.de":[["set","realCookieBanner","undefined"]],"elevator.de":[["set-cookie","amcookie_allowed","1"]],"elpicazo.org":[["set-cookie","cookies_aceptadas","true","","reload","1"]],"elsate.com":[["set-cookie","phpbb3_4zn6j_ca","true"]],"emergetools.com":[["set-local-storage-item","cookie-consent","false"]],"emmi-pur.ch":[["set-cookie","jogurt-pur-che-cookie-categories","essential"]],"emmidessert.it":[["set-cookie","dessert-italia-ita-cookie-categories","essential"]],"emmilangnau.ch":[["set-cookie","emmi-che-cookie-categories","essential"]],"emondo.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"empregoestagios.com":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"emr.ch":[["set-cookie","EMR-CookieConsent-Advertising","0"],["set-cookie","EMR-CookieConsent-Analytical","0","","reload","1"]],"encurtandourl.com":[["aopw","mensagem"]],"endlesspools.fr":[["rc","wcc-popup-overflow","body","stay"]],"endlesstools.io":[["set-cookie","et_cookie_consent","true"]],"enescofrance.com":[["set-cookie","acceptCookieCookie","true"],["set-cookie","enableNonEssentialCookies","false"]],"engeldirekt.de":[["set-local-storage-item","consent","[]"]],"engl.it":[["set","realCookieBanner","undefined"]],"epn.bz":[["set","ab","false"]],"epp.eu":[["set-cookie","eppcookie","1","","reload","1"],["set-cookie","performancecookie","0"]],"equalexchange.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"equifab.es":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"equisud.com":[["rc","unreadable-display","","stay"]],"erbsenprinzessin.com":[["set","realCookieBanner","undefined"]],"espadrij.com":[["set-local-storage-item","cookiePreference","required"]],"espn.com":[["aeld","contextmenu"]],"esto.eu":[["set-local-storage-item","cookie_accepted","true"]],"etbygg.com":[["set-cookie","cmplz_banner-status","dismissed"]],"etelecinema.hu":[["set-local-storage-item","cok","true"]],"ethiopianairlines.com":[["set-cookie","sf-tracking-consent","true","","","reload","1"]],"europace.de":[["set","realCookieBanner","undefined"]],"ev.io":[["rmnt","script","reviveScroll","excludes","self.__next"]],"eveningsun.com":[["nostif","gnt_mol_oy"]],"event.educathai.com":[["set-cookie","educathai_educa2024_cookie_accepted","accept"]],"everjump.fit":[["set-cookie","_pandectes_gdpr","1"]],"evocsports.com":[["set-cookie","cookie-preference","1"]],"evreporter.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"exitroom.berlin":[["set","realCookieBanner","undefined"]],"expert.cz":[["set-cookie","HideCookieConsentComponentV2","1"]],"eyeletic.com":[["set-local-storage-item","cookieInfoDismissed","true"]],"fantasytagtree.com":[["aost","document.getElementById","nouplaod"],["ra","oncontextmenu","img[oncontextmenu=\"return false;\"]","stay"]],"farmer.pl":[["aopw","FrodoPV"]],"feature.fm":[["set-cookie","featureConsent","false","","reload","1"]],"fertagus.pt":[["set-cookie","FTCookieCompliance","1"]],"fhr.biz":[["set-cookie","privacyPolicyAccept","1","","reload","1"]],"figshare.arts.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"figshare.manchester.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"fijiairways.com":[["set-local-storage-item","acceptedCookies","true"]],"fileditchvids.st":[["aeld","contextmenu"]],"filefox.cc":[["aeld","blur"]],"fimfiction.net":[["set","config.requireCookieConsent","false"],["aeld","load","adLazy"]],"flagma.by":[["set-cookie","privacyLevel","flagmajob_ads_shown","1","","reload","1"]],"flamantonlineshop.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"flamecontrol.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"flashplayer.org.ua":[["aopr","document.oncontextmenu"],["aopr","document.onkeydown"],["aopr","disableSelection"]],"flixclassic.pl":[["set-cookie","rgp-gdpr-policy","1"]],"floodlit.org":[["set-cookie","pum-937","true"]],"floridatoday.com":[["nostif","gnt_mol_oy"]],"flugschule-hochries.de":[["set","realCookieBanner","undefined"]],"fluidmaster.it":[["set-cookie","cookie-preference","1"]],"fluidtopics.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"flyertalk.com":[["acs","jQuery","AdBlock"]],"fnbrjp.com":[["nostif","広告"]],"foodie.com":[["aeld","copy"]],"foodvessel.com":[["set-local-storage-item","cookieConsent","false"]],"ford-besico-nuernberg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-kestel-marktzeuln.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-reinicke-muecheln.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-schankola-dudweiler.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-wieland-hasbergen.de":[["set-cookie","hide-gdpr-bar","true"]],"foreignaffairs.com":[["nostif","noscroll","3000"]],"forums.sherdog.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"fosshub.com":[["set","checkAds","trueFunc"]],"fosters.com":[["nostif","gnt_mol_oy"]],"fotor.com":[["nostif","offsetHeight"]],"foxtrail.fjallraven.com":[["set-cookie","fjallravenCookie","1"]],"fritzens.gv.at":[["set-cookie","ris_cookie_setting","1"]],"fromsmash.com":[["set-cookie","_sucs","true"]],"ft.com":[["aeld","copy","clipboardData"]],"gadsdentimes.com":[["nostif","gnt_mol_oy"]],"gaestehaus-schlegel.de":[["set-cookie","Consent","0"]],"gallmeister.fr":[["set-cookie","eg_asked","1"]],"gamesgames.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"gaz.com.br":[["aopw","document.onkeydown"]],"geeksoncoffee.com":[["aopr","disableEnterKey"],["acs","document.oncontextmenu"]],"gemeinde.natz-schabs.bz.it":[["set-cookie","ris_cookie_setting","1"]],"genesiscinema.co.uk":[["set-cookie","a1wcc","all"]],"genomicpress.kglmeridian.com":[["set-cookie","pf-cookie-banner-accepted","true"]],"geomiq.com":[["set-local-storage-item","gtag_enabled","1"]],"geurwolkje.nl":[["set-cookie","_pandectes_gdpr","1"]],"giromarilia.com.br":[["ra","oncontextmenu|ondragstart|onselectstart"]],"global-messer.shop":[["set-cookie","youtube-video","1"]],"glose.com":[["set-local-storage-item","hasAcceptedCookies","true"]],"gourmetfoodstore.com":[["set-cookie","AnalyticsAcceptancePopOver","false"]],"gq-magazine.co.uk":[["set","ads_not_blocked","true"]],"grandoldteam.com":[["acs","eval","replace"]],"greenpandagames.com":[["set-cookie","accept_cookie_policy","true"]],"grillrost.com":[["set-cookie","cookie-preference","1","","reload","1"]],"grizly.sk":[["set-cookie","mCs-chk","1"]],"grunge.com":[["aeld","copy"]],"gs1.se":[["set-local-storage-item","allowFunctionalCookies","false"],["set-local-storage-item","cookiesAccepted","true"]],"guidingliterature.com":[["aopw","disableEnterKey"],["acs","document.ondragstart"],["acs","document.oncontextmenu"]],"guildhalldental.com":[["rc","wcc-popup-overflow","body","stay"]],"gymnasium-hochdahl.de":[["set","realCookieBanner","undefined"]],"hamis.romponalis.st":[["rmnt","script","'contextmenu'"]],"hampshireimplantcentre.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"hanse-haus-greifswald.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"healthdigest.com":[["aeld","copy"]],"helium.com":[["set-local-storage-item","acceptedCookies","false"]],"hellokpop.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"hentaihaven.xxx":[["aeld","contextmenu"]],"hidemywp.co":[["acs","jQuery","userAgent"]],"highliferoleplay.net":[["set-cookie","HighLife-cookie-accept","true"]],"hodalump-ratschkatl.de":[["set-cookie","_pandectes_gdpr","1"]],"hotspring.be":[["rc","wcc-popup-overflow","body","stay"]],"hs-soft.com":[["set","realCookieBanner","undefined"]],"huellendirekt.de":[["set-cookie","consent","denied"]],"ibps.in":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"ichbindochnichthierumbeliebtzusein.com":[["set","realCookieBanner","undefined"]],"ickonic.com":[["set-local-storage-item","consentMode","1"]],"ieltsliz.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"ifortuna.cz":[["set-cookie","cookie_layer","1","","domain",".ifortuna.cz"],["set-cookie","necessary","true","","domain",".ifortuna.cz"]],"ilyabiz.com":[["set","realCookieBanner","undefined"]],"inceptionlabs.ai":[["set-local-storage-item","framerCookiesDismissed","true"]],"indigo.uic.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"inmuebles24.com":[["set-cookie","allowCookies","true"]],"intunedhq.com":[["set-local-storage-item","cookie-consent","rejected"]],"iqueen.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"it-koehler.com":[["set","realCookieBanner","undefined"]],"itvnextra.pl":[["aeld","contextmenu","a"]],"jafekri.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"janvissersweer.nl":[["aopw","stopPrntScr"]],"japanesewithtomo.com":[["rmnt","script","contextmenu"]],"javjavhd.com":[["acs","$","contextmenu"]],"javx357.com":[["rmnt","script","disableRightClick"]],"jbjbgame.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"jobsbotswana.info":[["acs","jQuery","restriction"],["aopw","document.oncontextmenu"]],"johannische-kirche.org":[["set-cookie","cookie-manager","1","","reload","1"],["set-cookie","vimeo","1"]],"jornaldoalgarve.pt":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"joska.com":[["set-cookie","cookie-consent","1","","reload","1"]],"jove.com":[["set-local-storage-item","accept-jove-cookie","1"]],"jpnn.com":[["aopr","document.oncopy"]],"jpost.com":[["rmnt","script","stopRefreshSite"]],"justtrucks.com.au":[["set","Drupal.behaviors.detectAdblockers","noopFunc"]],"kangmartho.com":[["acs","document.onselectstart"]],"kapiert.de":[["aeld","contextmenu"]],"kapitalis.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"karlknauer.de":[["set-cookie","cookieconsent_status","allow"]],"karls-shop.de":[["set-cookie","cookie-preference-v3","1"]],"karriere-hamburg.de":[["set-cookie","banner","2","","reload","1"]],"kashiland.jp":[["rmnt","script","onselectstart"]],"kastner-oehler.at":[["set-cookie","consentAll","0"]],"katerionews.com":[["set","console.clear","undefined"]],"keb-automation.com":[["set-cookie","privacy-statement-accepted","true","","reload","1"]],"keh.com":[["set-cookie","gdpr-cookie-notice","1"]],"kentucky.com":[["aeld","copy","linkPrefixMessage"]],"kick.com":[["set-local-storage-item","cookies_accepted","true"]],"kitchennovel.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"kjell.com":[["set-cookie","ccValues","1"]],"klicks-kaufen.de":[["set","realCookieBanner","undefined"]],"klinger.fi":[["rc","wcc-popup-overflow","body","stay"]],"klsys.com":[["set","realCookieBanner","undefined"]],"kmsw.de":[["set","realCookieBanner","undefined"]],"konicaminolta.ca":[["set-cookie","konicaminolta.us","1"]],"kovopolotovary.cz":[["set-cookie","web-cookies","2"]],"kpopjjang.com":[["aopw","stopPrntScr"]],"kryolan.com":[["set-cookie","allowCookie","1"]],"kubikum.com":[["set-cookie","CookiePolicyAll","1","","reload","1"],["set-cookie","CookiePolicyComf","no"]],"kuchniaplus.pl":[["aeld","contextmenu","a"]],"kyoceradocumentsolutions.es":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.us":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"la-becanerie.com":[["set-cookie","cookieconsent2_dismissed","yes"]],"lansingstatejournal.com":[["nostif","gnt_mol_oy"]],"larsbengtsson.se":[["set-cookie","cookie_consent_v2_0_functional_third_party","1"],["set-cookie","cookie_consent_v2_0_marketing_third_party","0"],["set-cookie","cookie_consent_v2_0_required","1"]],"lasestrellas.tv":[["set-cookie","_tvsPrivacy","true"]],"lassociation.fr":[["set-cookie","rgpdLassoCheck","1"]],"lazytranslations.com":[["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"leeb-milch.at":[["set-cookie","leeb-aut-cookie-categories","essential"]],"leeyiding.com":[["ra","oncontextmenu|onkeydown|onselectstart"]],"legalteam.hu":[["set-cookie","gaCookies","false"]],"lemarit.com":[["set","realCookieBanner","undefined"]],"lenovocampus.de":[["set","realCookieBanner","undefined"]],"les-anges-gardiens.fr":[["rc","unreadable-display","","stay"]],"licensekeys.org":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"lichtempfindlich.org":[["set","realCookieBanner","undefined"]],"lifo.gr":[["nostif","slideout"]],"liftshare.com":[["rc","show--consent","body","stay"]],"lincolncourier.com":[["nostif","gnt_mol_oy"]],"livingstondaily.com":[["nostif","gnt_mol_oy"]],"login.ingbank.pl":[["set-cookie","sat_track","false"]],"logo.pt":[["set-cookie","LG_COOKIE_CONSENT","0"],["set-cookie","cookieMessageDismissed","1"]],"logonews.cn":[["set","document.oncopy","null"]],"louisreynier.com":[["set","realCookieBanner","undefined"]],"louwman.nl":[["set-cookie","marketing_cookie_akkoord","0"],["set-cookie","site_cookie_akkoord","1"]],"ludeya.com":[["set-cookie","allowGetPrivacyInfo","true"]],"ludlowbrewery.co.uk":[["set-cookie","cookie_consent","all","","reload","1"]],"lumieresdelaville.net":[["set-local-storage-item","analytics_gdpr_accept","yes"],["set-local-storage-item","youtube_gdpr_accept","yes"]],"m.youtube.com":[["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"],["aeld","visibilitychange","/bgmobile|\\{\\w\\.\\w+\\(\\)\\}|\\.getVisibilityState\\(\\)/"]],"majorgeeks.com":[["aopr","googletag"],["acs","document.getElementById","undefined"]],"makeuseof.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"malcorentacar.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"mall.hu":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"manianomikata.com":[["acs","document.oncontextmenu"],["aopw","disableSelection"]],"marchtrenk.gv.at":[["set-cookie","ris_cookie_setting","1"]],"marketing-strategen.com":[["set","realCookieBanner","undefined"]],"massivart.de":[["set-cookie","cookie-preference","1"]],"maximumtest.ru":[["set-local-storage-item","cookieRead","1"]],"mediafire.com":[["nostif","scan","500"]],"megasport.co.il":[["set-cookie","YourCoockieName","true"]],"meity.gov.in":[["set-cookie","CookieConsent","false"]],"mikrocop.com":[["set-cookie","AcceptedCookies","true"]],"milesofmusik.com":[["aeld","mousedown","","elements",".fancybox-container"]],"missinfogeek.net":[["set","realCookieBanner","undefined"]],"mixingmonster.com":[["set","realCookieBanner","undefined"]],"mobiflip.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"mobilelegends.com":[["set-local-storage-item","SITE_2609202-COOKIE-BANNER","1"]],"mobiltbredband.se":[["rc","wcc-popup-overflow","body","stay"]],"modellbau-jung.de":[["rc","disable","div","stay"]],"modellbau-vordermaier.de":[["rc","disable","div","stay"]],"moebel-mahler-siebenlehn.de":[["set-cookie","optOutAccepted","true"],["set-cookie","optOutsTouched","true"]],"moidom.citylink.pro":[["set-cookie","md-cookies-dialog","1"]],"moneydigest.com":[["aeld","copy"]],"moneyweek.com":[["set-cookie","FTR_Article_PageView","2"]],"monitoruldevrancea.ro":[["rmnt","script","stopPrntScr"],["rmnt","style","selection"]],"moovly.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"movies2watch.ru":[["aost","console.clear"]],"movieweb.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"msa-berlin.de":[["set-cookie","ckies_cookielaw","allow"]],"musicmap.info":[["set-cookie","privacy-policy-2023","accept"]],"my-rise.com":[["set-cookie","cb-enabled","accepted"]],"my2n.com":[["set-cookie","consent_panel","1"]],"myriad.social":[["set-cookie","cookie-consent","true"]],"myriadicity.net":[["set-cookie","confirm_cookies","1"]],"mythical.market":[["set-cookie","cookie-preferences-mythical","1"]],"mytime.mk":[["set-cookie","site_cookie_info","2","","reload","1"]],"mywot.com":[["set-cookie","cookies_consent_disclaimer","false"]],"n.exchange":[["set-local-storage-item","isUserAcceptCookiesPolicy","true"]],"nahima.be":[["rc","cookieconsent-active","body","stay"]],"nakedcapitalism.com":[["aopw","ABD"]],"nanuko.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"naplesnews.com":[["nostif","gnt_mol_oy"]],"nationalrail.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"nationalreview.com":[["acs","document.createElement","admiral"],["rmnt","script","reviveScroll","excludes","self.__next"]],"natureatblog.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"ndtvprofit.com":[["aopr","document.oncopy"]],"negrasport.pl":[["set-local-storage-item","show_consent_modal","1"]],"neilpatel.com":[["no-xhr-if","/hotjar|googletagmanager/"]],"netgem.com":[["set-cookie","consent-cookie-popup","1"],["set-cookie","consent-cookie-vimeo","1"],["set-cookie","consent-cookie-youtube","1"]],"netrix.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"neuhauschocolates.com":[["set-cookie","consentTrackingVerified","true"]],"newpharma.nl":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"news-journalonline.com":[["nostif","gnt_mol_oy"]],"news.dwango.jp":[["ra","oncontextmenu","body"]],"news.ntv.co.jp":[["set","document.oncontextmenu","trueFunc"]],"newschief.com":[["nostif","gnt_mol_oy"]],"nloto.ru":[["set-local-storage-item","isCookies","1"]],"nmmn.com":[["set","realCookieBanner","undefined"]],"notaire.be":[["set-cookie","cookie-bar","hide"],["set-cookie","cookie-settings-social","false"],["set-cookie","cookie-settings-statistics","false"]],"notaris.be":[["set-cookie","cookie-bar","hide"],["set-cookie","cookie-settings-social","false"],["set-cookie","cookie-settings-statistics","false"]],"novelism.jp":[["ra","oncontextmenu|ondragstart|oncopy|oncut",".select-none","stay"]],"oeko-tex.com":[["set-cookie","cookieconsent_status","allow"]],"ofertecatalog.ro":[["rmnt","script","/contextmenu|oncopy/"],["ra","onselectstart","","stay"]],"oklahoman.com":[["nostif","gnt_mol_oy"]],"omniwood.be":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"oncosur.org":[["set-cookie","ONCOSURCOOK","2"]],"onlinecarparts.co.uk":[["aeld","mousedown","function(t)"]],"onlinegiftools.com":[["nano-sib","Clipboard","1000","0.001"]],"onna.kr":[["aeld","copy"],["aopw","document.oncontextmenu"],["aopw","document.ondragstart"],["aopw","document.onselectstart"]],"openfiler.com":[["set-cookie","cookie-agreed","0"]],"openfoam.org":[["set-cookie","cmplz_banner-status","dismissed"]],"orange.ro":[["aeld","/^(?:pointerdown|mousedown)$/","","elements",".js-pachete-online-internet2"]],"osmc.de":[["set","realCookieBanner","undefined"]],"ouasafat.com":[["acs","document.onselectstart"]],"ourworldofpixels.com":[["set-cookie","nagAccepted","true"]],"ownit.se":[["set-cookie","ownit_cookie_data_permissions","1"]],"p2p.land":[["set-local-storage-item","cookiesAccepted","true"]],"paapiidesign.com":[["set-local-storage-item","cookieConsent","true"]],"palemoon.org":[["set","abd","false"]],"pancernik.eu":[["set-local-storage-item","df-cookies-allowed","true"],["set-local-storage-item","show_consent_modal","1"]],"pandore-gendarmerie.org":[["set","realCookieBanner","undefined"]],"panwybierak.pl":[["rc","show--consent","body","stay"]],"patientimages.yarraradiology.com.au":[["set-cookie","gdpr_consent","true"]],"paychex.com":[["set-cookie","ccpaaccept","true"]],"perlentaucher.de":[["set","window.SteadyWidgetSettings.adblockActive","false"],["set","adblockerIsEnabled","false"]],"perpedale.de":[["rc","disable","div","stay"]],"personality-database.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"petdesk.com":[["set-cookie","allowCookies","true"]],"photopea.com":[["set","console.clear","noopFunc"]],"photospecialist.co.uk":[["set-cookie","cookie_accepted","false","","reload","1"]],"physikinstrumente.de":[["set-cookie","cookieconsent_status","allow"]],"pigu.lt":[["set-cookie","CA_DT_V2","0","","reload","1"],["set-cookie","CA_DT_V3","0"]],"pixiv.net":[["set-cookie","privacy_policy_agreement","7","","reload","1"]],"pixnet.net":[["ra","oncontextmenu|onDragStart|onselectstart"]],"plantasjen.no":[["set-cookie","_ca","false"],["set-cookie","_ftu","false"]],"pling.com":[["rmnt","script","btnHtml"],["nano-stb","count"]],"plural.jor.br":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"polar.sh":[["set-local-storage-item","cookie_consent","no"]],"polskacanada.com":[["acs","jQuery","contextmenu"]],"polymtl.ca":[["set-cookie","cookie-agreed","2"]],"pomelo.la":[["set-cookie","POMELO_COOKIES","1"]],"ponal.de":[["set-cookie","ponal_cookie_consent","1","","reload","1"]],"pontiacdailyleader.com":[["nostif","gnt_mol_oy"]],"popp.eu":[["set","realCookieBanner","undefined"]],"postcourier.com.pg":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["aopw","stopPrntScr"],["aopw","ondragstart"],["aeld","/contextmenu|keydown|keypress|copy/"],["aopr","document.oncontextmenu"]],"poughkeepsiejournal.com":[["nostif","gnt_mol_oy"]],"poum-tchak-drum.ch":[["set-cookie","cookieConsentAgree","01","","reload","1"]],"powerball.com":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"poyabuy.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"prague-catering.cz":[["set-cookie","euc","1"]],"praxisplan.at":[["set-cookie","complianceCookie","on"],["set-cookie","trackingCookies","off"]],"prenatal.nl":[["set-cookie","marketingCookies","false"]],"progress-index.com":[["nostif","gnt_mol_oy"]],"proofing.de":[["set","realCookieBanner","undefined"]],"prosciutteriasandaniele.it":[["set-session-storage-item","DS_COOKIENOTIFY_CLOSED","true"]],"pubgesports.com":[["set-cookie","analytics","N"],["set-cookie","essential","Y"],["set-cookie","functional","N"]],"pumatools.hu":[["set-cookie","cookie_level","2"]],"punto-informatico.it":[["aopr","blazemedia_adBlock"]],"pureinfotech.com":[["acs","jQuery","ai_adb"]],"puzzle-aquarium.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-hitori.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-jigsaw-sudoku.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-kakuro.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-killer-sudoku.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.ie":[["set-cookie","puzzleyou-ie_cookies_consent_allowlist","0","","reload","1"]],"pvcvoordeel.nl":[["set-cookie","cookiebar","1"]],"pwsweather.com":[["set-cookie","pws_gdrp_accept","1"]],"qidian.com":[["aeld","/contextmenu|copy/"]],"radartest.com":[["acs","document.onmousedown","disableclick"]],"radurlaub.com":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"ras.bz.it":[["rc","dp--cookie-consent","body","stay"]],"realme.com":[["set-local-storage-item","hadAccept","1"]],"realpython.com":[["aeld","DOMContentLoaded","rprw"],["set-local-storage-item","rprw","$remove$"]],"recordnet.com":[["nostif","gnt_mol_oy"]],"recordonline.com":[["nostif","gnt_mol_oy"]],"reforge.com":[["set-cookie","accept_cookies","accepted"],["set-local-storage-item","framerCookiesDismissed","true"]],"refurbishedstore.de":[["set-cookie","COOKIE_CONSENT","1","","reload","1"],["set-cookie","COOKIE_MARKETING","false"],["set-cookie","COOKIE_STATIC","false"]],"remanga.org":[["set-cookie","cookie-accepted","true"],["set-local-storage-item","cookieConsent","true"]],"remington-europe.com":[["set-session-storage-item","cookies_dismissed","1"]],"renault-autocenterprignitz-pritzwalk.de":[["set-cookie","hide-gdpr-bar","true"]],"repack-games.com":[["acs","jQuery","contextmenu"]],"reporter-times.com":[["nostif","gnt_mol_oy"]],"reporternews.com":[["nostif","gnt_mol_oy"]],"resolution.de":[["set-cookie","hasSeenCookiePopUp","yes"]],"restaurant-stmichael.com":[["set-cookie","tincx_cookie_notice_accepted","true"]],"restaurantsbrighton.co.uk":[["set","realCookieBanner","undefined"]],"retailmarketingpartner.nl":[["set-cookie","consent-cookies","1"]],"rig-flip.com":[["set-local-storage-item","cookie_consent","declined"]],"rittmeisterdestille.de":[["rmnt","script","realCookieBanner"]],"rjtkauto.com":[["set-cookie","cookieAccepted","1","","reload","1"]],"royal-oak.org":[["set-cookie","royaloakTermsCookie","1"]],"ruidosonews.com":[["nostif","gnt_mol_oy"]],"runmods.com":[["noeval-if","oncontextmenu"]],"rvsq.gouv.qc.ca":[["set-cookie","_ck_o","1"]],"s-court.me":[["set-cookie","cookie_accept","true"]],"sachisushi.dk":[["set-cookie","flexkcookie","1"],["set-cookie","wp_consent_functional","deny"],["set-cookie","wp_consent_marketing","deny"],["set-cookie","wp_consent_statistics","deny"]],"salina.com":[["nostif","gnt_mol_oy"]],"samplerite.cn":[["set-cookie","consented","false"]],"samsungtechwin.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"santander.rewardgateway.co.uk":[["set-cookie","cookie_consent_status","allow"],["set-cookie","cookie_preferences","10"]],"scarysymptoms.com":[["acs","document.oncontextmenu"],["acs","wccp_pro_iscontenteditable"]],"scholardata.sun.ac.za":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"scholpp.es":[["rc","with-featherlight","","stay"]],"scholpp.pl":[["rc","with-featherlight","","stay"]],"schoolpetrov.ru":[["set-cookie","confirm-use-cookie","1","","reload","1"]],"schoonmaakgroothandelemmen.nl":[["set-cookie","epCookieConsent","0","","reload","1"]],"schulze-immobilien.de":[["set-cookie","privacyPolicyAccept","0","","reload","1"]],"scitechdaily.com":[["set-cookie","ezgwcc","1"]],"script-stack.com":[["aeld","","mdp"],["aeld","contextmenu"]],"scrolller.com":[["aeld","contextmenu"]],"sdewery.me":[["aopw","document.ondragstart"],["aopw","disableEnterKey"]],"secfi.com":[["set-cookie","CookieConsent","true"]],"secondlifetranslations.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"],["aost","encodeURIComponent","inlineScript"]],"senda.pl":[["set-cookie","cookieConsent3","true"]],"settings.gg":[["set-local-storage-item","COOKIE_CONSENT","1"]],"sfn.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop-naturstrom.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"shop.euyansang.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.hicksnurseries.com":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"shop.kky.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.kurhessen-therme.de":[["set-cookie","cookies_mandatory","true"]],"shopbuddies.de":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shopbuilder.co.nl":[["set-cookie","cookie_consent","1","","reload","1"]],"shortform.com":[["aeld","/contextmenu|mousedown/","return\"undefined\""]],"simsherpa.com":[["set-cookie","acceptadvertising","no"],["set-cookie","acceptanalytics","no"],["set-cookie","acceptfunctional","yes"]],"sinhasannews.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"sinparty.com":[["set-cookie","gdrp_popup_showed","1"]],"sizyreelingly.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"sj-r.com":[["nostif","gnt_mol_oy"]],"skynet.certik.com":[["set-local-storage-item","cookie-consent-v2","false"]],"smiley.blue":[["set","realCookieBanner","undefined"]],"smorfianapoletanaweb.it":[["set","realCookieBanner","undefined"]],"sodimac.cl":[["set-cookie","isCookieLegalBannerSelected","true"]],"soell.gv.at":[["set-cookie","ris_cookie_setting","-1"]],"solarmagazine.nl":[["no-xhr-if","ads"]],"solidaris-wallonie.be":[["set-cookie","hide-cookie-banner","true"]],"solo.io":[["set-cookie","solo_opt_in","false"]],"spela.se":[["set-cookie","OptanonAlertBoxClosed","true"]],"spielen.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"spline.design":[["set-cookie","CookieConsent","false"]],"spuntinoheathrow.com":[["set-cookie","essential_cookies_enabled","true"],["set-cookie","google_cookies_enabled","false"]],"ssga.com":[["set-session-storage-item","cookieConfirmed","true"]],"ssuathletics.com":[["acs","document.querySelector","adblock"]],"standard.sk":[["set-cookie","standard_gdpr_consent","true"]],"starbene.it":[["acs","document.oncontextmenu"],["aeld","/copy|contextmenu/"]],"starofservice.com":[["set-cookie","cookieNotification","true"]],"starwalk.space":[["set-local-storage-item","SWCOOKIESACC","1"]],"staugustine.com":[["nostif","gnt_mol_oy"]],"stefke-heilbronn.de":[["set","realCookieBanner","undefined"]],"stickypassword.com":[["set-cookie","ad_storage","denied"],["set-cookie","analytics_storage","denied"],["set-cookie","stickyCookiesSet","true"]],"stiegeler.com":[["set-cookie","cookie_consent_user_accepted","false"]],"stonehouserestaurants.co.uk":[["set-cookie","ce-cookie","N"]],"store.junesjourney.com":[["set-cookie","analyticsConsent","false"]],"stream.hownetwork.xyz":[["rmnt","script","debugger"]],"strefabiznesu.pl":[["set","Didomi","noopFunc"]],"studentapan.se":[["set-cookie","accepted_cookie_policy","true"]],"studiestoday.com":[["aeld","/select|copy|contextmenu/"]],"supabase.com":[["set-local-storage-item","supabase-consent-ph","false"]],"supercamps.co.uk":[["set-cookie","SuperCamps.CookieConsent","True","","reload","1"]],"swtimes.com":[["nostif","gnt_mol_oy"]],"tailorit.de":[["set-cookie","pr1Cookie","true"]],"taste-market.de":[["set-cookie","cookie-preference","1"]],"techgyd.com":[["acs","document.oncontextmenu","nocontextmenu"]],"techlearning.com":[["set-cookie","FTR_Article_PageView","2"]],"technologyreview.com":[["set","webkitRequestFileSystem","undefined"]],"techradar.com":[["set-cookie","FTR_Article_PageView","2"]],"techsupportall.com":[["aeld","/^(?:contextmenu|copy|keydown)$/"]],"tekniikkaosat.fi":[["set-cookie","__consent","1"]],"teknokutu.com":[["set-session-storage-item","cookieDeclined","true"]],"texte.work":[["ra","onkeydown|oncontextmenu","body"],["aopw","document.oncontextmenu"],["aopr","disableselect"]],"the-albany.co.uk":[["set-cookie","ce-cookie","N"]],"the-scorpions.com":[["aopr","b2a"]],"theadelphileeds.co.uk":[["set-cookie","ce-cookie","N"]],"theanchorinnirby.co.uk":[["set-cookie","ce-cookie","N"]],"theblueschronicles.com":[["set-cookie","complianceCookie","true"],["set-cookie","gaconsent","true"]],"thebootmappleboroughgreen.co.uk":[["set-cookie","ce-cookie","N"]],"thebullislington.co.uk":[["set-cookie","ce-cookie","N"]],"thedraftnetwork.com":[["acs","document.createElement","admiral"]],"themeslide.com":[["rmnt","script","preventDefault"]],"themosvagas.com.br":[["acs","addEventListener","keydown"],["acs","onload"],["set","document.onkeydown","null"]],"thenewsstar.com":[["nostif","gnt_mol_oy"]],"thenorthface.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"therocketeustonroad.co.uk":[["set-cookie","ce-cookie","N"]],"thesunclapham.co.uk":[["set-cookie","ce-cookie","N"]],"theswanbroadway.co.uk":[["set-cookie","ce-cookie","N"]],"thezealots.org":[["acs","document.oncontextmenu"]],"thiele-tee.de":[["set-cookie","cookie-preference","1"]],"throttleman.com":[["set-cookie","c_aceitaAnaliticos","false"],["set-cookie","c_aceitaFuncionais","false"],["set-cookie","c_aceitaNecessarios","true"],["set-cookie","c_aceitaPublicitarios","false"]],"ticketingcine.fr":[["set-cookie","alertCookie","1","","reload","1"]],"tieku.fi":[["set","cicc.cookie_cat_statistic","true"],["set","cicc.cookie_cat_functional","true"],["set","cicc.cookie_cat_marketing","true"]],"tips97tech.blogspot.com":[["rmnt","script","debugger"]],"titan.co.in":[["set-local-storage-item","cookiesModule","true"]],"titulky.com":[["acs","$","\"input\""]],"tkm-systemtechnik.de":[["set","realCookieBanner","undefined"]],"tnt2-cricstreaming.pages.dev":[["set","confirm","noopFunc"]],"tobroco-giant.com":[["set-cookie","cookieWall","1"],["set-cookie","cookieWallOptIn","0"]],"tohkaishimpo.com":[["ra","oncontextmenu|onselectstart"]],"toomeymotorgroup.co.uk":[["set-cookie","cookieAccepted","1","","reload","1"]],"touristik.at":[["set-cookie","cookieconsent_status","allow"]],"tpsgarage.com":[["set-cookie","cookies_accepted","1","","reload","1"]],"trixonline.be":[["set-cookie","_cookies-consent","yes"]],"tuffaloy.com":[["set-cookie","cookieConsent","accepted"]],"tuhlteim.de":[["set","realCookieBanner","undefined"]],"tui.dk":[["rc","no-scroll","body","stay"]],"tui.fi":[["rc","no-scroll","body","stay"]],"tutoganga.blogspot.com":[["aopw","disableselect"]],"tutonaut.de":[["set","realCookieBanner","undefined"]],"tv-tokyo.co.jp":[["set","document.oncontextmenu","null"]],"typeform.com":[["set-local-storage-item","CustomCookieBannerAcceptIntent","true"]],"u.gg":[["rmnt","script","reviveScroll","excludes","self.__next"]],"uk2.net":[["set-cookie","cb-enabled","accepted"]],"ukrinform.ua":[["set-local-storage-item","cookie_consent","granted"]],"ulevapronohy.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"umk.co.jp":[["ra","oncontextmenu","body"]],"underconsideration.com":[["nostif","test.remove"]],"unijet-systems.com":[["set-cookie","cookieSettings","11","","reload","1"]],"unixhow.com":[["acs","eval","isNaN"]],"urbanbrush.net":[["acs","document.oncontextmenu"]],"utamap.com":[["ra","oncontextmenu"]],"vacanceo.com":[["set-cookie","cookie_consent","0"]],"vahrn.eu":[["set-cookie","ris_cookie_setting","1"]],"valostore.se":[["set-local-storage-item","cookieConsent","necessary"]],"vanlifecampers.com":[["rc","body","cmplz-banner-active"]],"varaderey.es":[["set-cookie","cookies_aceptadas","true","","reload","1"]],"vater-it.de":[["set-cookie","pz_cookie_consent","true"]],"vezess.hu":[["aeld","mouseleave","showFbPopup"],["nostif","FbExit","3000"],["rc","blurry","body > :not(.m-fbPopup)","stay"]],"vgembed.com":[["nosiif","detect"],["set","console.clear","noopFunc"],["set","DD","trueFunc"]],"viajesatodotren.com":[["set-cookie","NTCookies","0"]],"vide0.net":[["set","console.clear","undefined"],["aeld","contextmenu"]],"videohelp.com":[["acs","document.getElementById","block"]],"vilgain.com":[["set-cookie","consent","0","","reload","1"]],"visnos.com":[["set-local-storage-item","2020-04-05","1"]],"viu.com":[["set-cookie","cookie_consent_accept","true"]],"voe-un-block.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"vogelsbergkreis.de":[["set-local-storage-item","PrivacyPolicy[][core]","forbidden"],["set-local-storage-item","PrivacyPolicy[][maps]","forbidden"],["set-local-storage-item","PrivacyPolicy[][readSpeaker]","forbidden"],["set-local-storage-item","PrivacyPolicy[][videos]","forever"]],"von-zinsen-leben.de":[["set","realCookieBanner","undefined"]],"voxweb.nl":[["set-cookie","cookie_settings","1"]],"vyos.io":[["set-cookie","VyosCookies","Accepted"]],"waitrose.com":[["set-cookie","wtr_cookie_consent","1"],["set-cookie","wtr_cookies_functional","1"]],"wallpaperaccess.com":[["aeld","mousedown","dispatch"]],"walmart.com":[["set-session-storage-item","va-notice-seen","1"]],"watch.lonelil.com":[["set","navigator.userAgent",""]],"weatherbug.com":[["set-cookie","WB_CookieNotification","1"]],"web2.0calc.fr":[["set-cookie","precmp","1","","reload","1"]],"webtrack.dhlecs.com":[["set-cookie","dhl-webapp-track","allowed"]],"webwereld.nl":[["set","adsAreShown","true"]],"weetabix.es":[["rc","wcc-popup-overflow","body","stay"]],"weetabix.pt":[["rc","wcc-popup-overflow","body","stay"]],"weimar-touristinformation.de":[["set","realCookieBanner","undefined"]],"wevolver.com":[["set-cookie","cookiesConsent","false"]],"wewantjusticedao.org":[["set-cookie","gdpr-analytics-enabled","false"]],"whatculture.com":[["set-cookie","FTR_Article_PageView","2"]],"wide-angle.nl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"wind-craft.eu":[["set","realCookieBanner","undefined"]],"winerack.com":[["set-local-storage-item","dnt_preference","true"]],"wisebuy.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"withpersona.com":[["set-local-storage-item","Do-not-share","true"],["set-local-storage-item","allow-cookies","false"]],"wohlleben-sports.de":[["set-cookie","cookie-preference","1"]],"works-hellas.com":[["set-cookie","cookieSettings","11","","reload","1"]],"workwide.de":[["set-session-storage-item","cookieModal2","1"]],"wpb.shueisha.co.jp":[["aeld","contextmenu","preventDefault"]],"wrestling-point.de":[["set","realCookieBanner","undefined"]],"wrosinski.pl":[["aeld","rocket-DOMContentLoaded","bind(document)"]],"wt-onlineakademie.de":[["set","realCookieBanner","undefined"]],"wwnorton.com":[["set-cookie","privacyPolicyAccepted","true"]],"www-leeds--live-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www-liverpoolecho-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www.watermarkremover.io":[["set-local-storage-item","WkdGcGJIbEpiV0ZuWlVSaGRHRT0=","$remove$"]],"wzl-zwickau.de":[["set","realCookieBanner","undefined"]],"x-team.com":[["set-cookie","google-tagmanager","false"]],"xhmoon5.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xv-ru.com":[["set","xv.disclaimer.displayCookiePopup","noopFunc"]],"yambits.co.uk":[["set-cookie","acceptcookies","no","","reload","1"]],"ymovies.vip":[["set","devtoolsDetector.launch","noopFunc"]],"yogainspires.co.uk":[["set","realCookieBanner","undefined"]],"zapcars.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"zave.it":[["set-local-storage-item","framerCookiesDismissed","true"]],"zhdcdn1.li":[["aeld","contextmenu"]],"zipfer.at":[["set","realCookieBanner","undefined"]],"zipjob.com":[["set-cookie","cookie_consent","1"]],"zoho.com":[["set-local-storage-item","zglobal_Acookie_optOut","3"]],"zoommer.ge":[["set-cookie","zoommer-cookie_agreed","true"]],"zouboulis.com":[["set","realCookieBanner","undefined"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
