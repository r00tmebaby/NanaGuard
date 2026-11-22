/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"101internet.ru":[["set-cookie","closeNotificationAboutCookie","true"]],"1028loveu.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"107liquor.com":[["set-cookie","age_verification","1"]],"116.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"123movies.org":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"],["nostif","_0x"],["set","console.clear","noopFunc"]],"12news.com":[["aeld","/^(mouseout|mouseleave)$/"]],"161.97.70.5":[["rmnt","script","isadb"]],"178.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"26.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"4kfilme.de":[["rmnt","script","realCookieBanner"],["set","realCookieBanner","undefined"]],"50plusmatch.fi":[["set-cookie","cookieconsent","no"]],"59northwheels.se":[["set-cookie","cookie_accepted","1"]],"5newsonline.com":[["aeld","/^(mouseout|mouseleave)$/"]],"7745.by":[["set-cookie","cookies_accepted","0"],["set-cookie","stat_cookies_accepted","0"],["set-cookie","visual_cookies_accepted","0"]],"9tsu.vip":[["set","devtoolsDetector","{}"]],"abc10.com":[["aeld","/^(mouseout|mouseleave)$/"]],"accace.sk":[["set","realCookieBanner","undefined"]],"acupoffrench.com":[["acs","stopPrntScr"]],"adevarul.ro":[["aopr","addLink"]],"adfilteringdevsummit.com":[["set-local-storage-item","acceptCookies","no"]],"adidas.co":[["set-cookie","notice_preferences","2"]],"adidas.com.my":[["set-cookie","notice_preferences","2"]],"adidas.fr":[["set-cookie","notice_preferences","2"]],"adidas.mx":[["set-cookie","notice_preferences","2"]],"aepos.ap.gov.in":[["ra","oncontextmenu"],["acs","$","contextmenu"]],"afrikmag.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"agenziavista.it":[["set-cookie","gdpr","1"]],"aida64.it":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"aida64russia.com":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"airchina.com.br":[["set-cookie","EnableABTest","false"],["set-cookie","EnableFacebook","false"],["set-cookie","EnableGA","false"]],"airnewzealand.co.nz":[["set-cookie","airTRFX_cookies","accepted"]],"alensat.com":[["aeld","contextmenu","preventDefault"]],"all3do.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"all4running.com":[["set-cookie","cookieConsent","necessary","","reload","1"]],"all4running.org":[["set-cookie","cookieConsent","necessary","","reload","1"]],"allegro.com.br":[["set-cookie","gdpr_permission_given","0"]],"alphabottleshop.co.uk":[["set-cookie","isAnAdult","true"]],"alsina.com":[["rc","wcc-popup-overflow","body","stay"]],"ambrook.com":[["set-cookie","ar-newsletter-promo-dismissed","1"]],"amestrib.com":[["nostif","gnt_mol_oy"]],"amzs.si":[["set-cookie","cookie_gdpr","true","","reload","1"]],"angelifybeauty.com":[["set-cookie","cookies_modal","true"]],"anikoto.co.uk":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"anikoto.com.br":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"anikoto.es":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"anikoto.net":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"anikoto.nl":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"anikoto.ru":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"animedao.co.uk":[["aopr","devtoolsDetector"]],"animedao.nl":[["aopr","devtoolsDetector"]],"animefire.plus":[["ra","oncontextmenu|ondragstart","","complete"]],"animeunity.it":[["ra","oncontextmenu"]],"anisubindo.co.uk":[["aeld","keydown","preventDefault"],["aopr","document.onkeydown"],["aopr","document.oncontextmenu"],["aopw","disableSelection"]],"anix.com.br":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"anix.net":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"app.midpage.ai":[["set-local-storage-item","cookieConsent","denied"]],"app.standards.site":[["set-local-storage-item","accepted-cookies","true"]],"appd.at":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"apps.stratford.gov.uk":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"argusleader.com":[["nostif","gnt_mol_oy"]],"asiatv.it":[["aeld","contextmenu"]],"ask4movie.es":[["ra","oncontextmenu","html"],["set","console.dir","noopFunc"],["set","navigator.userAgent",""]],"asko.fi":[["set-cookie","rc_given_consent_closed","1"]],"atlanticcouncil.org":[["set-cookie","cookieNotify","dismissed"]],"atribuna.com.br":[["ra","oncontextmenu|onkeydown"]],"audioreview.m1001.coreserver.jp":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"]],"audiovision.de":[["set","realCookieBanner","undefined"]],"auto-doc.org":[["aeld","mousedown","function(t)"]],"autobedrijfnaessens.be":[["set-cookie","cookie_analytics","0"],["set-cookie","cookie_functional","1"],["set-cookie","cookie_pref_saved","1"]],"autodude.no":[["set-local-storage-item","cookieConsent","necessary"]],"automationafrica.co.za":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"autopareri.com":[["no-fetch-if","googlesyndication"]],"autotrader.ca":[["set-cookie","cbnr","1"]],"autoverwertung-berk.de":[["set","realCookieBanner","undefined"]],"aventurainromania.ro":[["rmnt","script","document.oncontextmenu"]],"backmarket.fr":[["set-cookie","BM_Advertising","false","","reload","1"],["set-cookie","BM_Analytics","false"],["set-cookie","BM_User_Experience","true"]],"badzjeszczelepszy.pl":[["aopr","document.onmousedown"],["aopr","document.onselectstart"],["aopr","ga_ExitPopup3339"]],"bafin.de":[["set-cookie","cookiebanner","0"]],"baseball-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"bayernportal.de":[["set-cookie","comfortConsent","true"],["set-cookie","cookieConsent","true","","reload","1"],["set-cookie","videoConsent","true"]],"beershop.cz":[["set-cookie","acheck","1","","reload","1"]],"beershophq.uk":[["set-cookie","age-checked","1"]],"benejamrefrigeracion.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"bere.co.uk":[["set-cookie","CookieConsent","Necessary","","reload","1"]],"beta-accounts.paradoxinteractive.com":[["set-cookie","cookies_accepted","true"]],"betec.de":[["set","realCookieBanner","undefined"]],"bettermarketing.pub":[["set-local-storage-item","201805-policy|accepted","1"]],"betterprogramming.pub":[["set-local-storage-item","201805-policy|accepted","1"]],"betway.it":[["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Marketing","0"],["set-cookie","betway-cookie-policy","true"],["set-cookie","bwui_cookieToastDismissed","true"]],"bg-gledai.com.br":[["rmnt","script","document.oncontextmenu"],["aeld","contextmenu"],["nosiif","debugger"]],"bgs-shop.de":[["set-cookie","cookieconsent_state","2"]],"bhoomtv.com.br":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"bhoomtv.org":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"bien.no":[["set-cookie","eika_consent_marketing","false"],["set-cookie","eika_consent_set","true"]],"bigcheese.software":[["set-cookie","consent-cookies","1"]],"bitscrunch.com":[["set-cookie","rcl_consent_given","true"],["set-cookie","rcl_marketing_consent","false"],["set-cookie","rcl_preferences_consent","true"]],"bka.de":[["set-cookie","gsbbanner","0"]],"blackbit.sh":[["set-cookie","bb_consent","rejected"]],"blaze.com":[["set-cookie","accept_policy_regulation","1"]],"blaze.nl":[["set-cookie","accept_policy_regulation","1"]],"blog.ipc-computer.de":[["set","realCookieBanner","undefined"]],"blu-ray-rezensionen.net":[["set","realCookieBanner","undefined"]],"bluemediafile.es":[["set","Time_Start","0"],["nano-sib","i--","","0.02"]],"bluemediafile.org":[["set","Time_Start","0"],["nano-sib","i--","","0.02"]],"blueoceangaming.com":[["set","realCookieBanner","undefined"]],"bmleh.de":[["set-cookie","gsbbanner","0"]],"bmovies.com.br":[["aeld","devtoolschange"]],"bo.de":[["set-cookie","_reiff-consent-cookie","yes"]],"boards.net":[["aeld","scroll"]],"boeser-chinese.de":[["set","realCookieBanner","undefined"]],"boston.com":[["acs","document.createElement","admiral"]],"bottlenbrew.com":[["set-cookie","age_verification","1"]],"brainly.pl":[["set","jsData.hasVideoMeteringUnlogEnabled","undefined"],["set-local-storage-item","social-qa/machineId","$remove$"],["set-local-storage-item","simple-funnel-name","$remove$"]],"bremerhaven.de":[["set-cookie","GDPRp","no"]],"bricksrus.com":[["aopr","document.oncontextmenu"]],"brodbeck-dd.de":[["set","realCookieBanner","undefined"]],"brusselshealthnetwork.be":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"brusselstimes.com":[["remove-cookie","xbc"]],"bsh-group.com":[["set-cookie","cookiepolicy","decline"]],"bsk-consulting.de":[["set","realCookieBanner","undefined"]],"budgetair.it":[["set-cookie","cookieConsentLevel","functional"]],"buf.build":[["set-cookie","allowCookies","yes"]],"bulder.no":[["set-cookie","marketing","false"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"burlingtoncountytimes.com":[["nostif","gnt_mol_oy"]],"businessemailetiquette.com":[["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"buttersc.one":[["json-prune","ads.[].imageUrl"]],"byfood.com":[["set-local-storage-item","byFoodCookiePolicyRequire","false"]],"byseum.de":[["set-cookie","cookiehinweisnew","2","","reload","1"]],"calvinklein.ru":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"camere-live.ro":[["rmnt","script","'contextmenu'"]],"camereliveromania.ro":[["rmnt","script","/wpcp|contextmenu/"]],"canalplus.com":[["set-cookie","cp_cc_ads","0"],["set-cookie","cp_cc_required","1"],["set-cookie","cp_cc_stats","0"]],"carsupermarket.com":[["set-cookie","ce-cookie","N"]],"carwyncellars.com.au":[["set-local-storage-item","of-age","true"]],"case-score.com":[["set-cookie","cookieConfirm","true"],["set-cookie","trackingConfirm","false"]],"cateringvandenberg.nl":[["rc","wcc-popup-overflow","body","stay"]],"cattime.com":[["acs","document.createElement","admiral"]],"ccoo.es":[["set-cookie","config","0000","","reload","1"]],"ceratrends.com":[["rc","wcc-popup-overflow","body","stay"]],"cheaptickets.co.uk":[["set-cookie","cookieConsentLevel","functional"]],"cheaptickets.com":[["set-cookie","cookieConsentLevel","functional"]],"cheaptickets.com.br":[["set-cookie","cookieConsentLevel","functional"]],"chicagotribune.com":[["rc","modal-open","","stay"]],"chipsliquor.com":[["set-cookie","age_consent","true"]],"chita.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"cine.to":[["aopr","oncontextmenu"]],"cinkciarz.pl":[["set-cookie","acceptedCookiesRemarketing","required"]],"cittadinanza.biz":[["set","disableSelection","noopFunc"],["aopw","document.oncontextmenu"]],"clarionledger.com":[["nostif","gnt_mol_oy"]],"clausnehring.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"cleanthinking.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"cleverbot.com":[["set-cookie","note","1"]],"cleverpush.com":[["set","realCookieBanner","undefined"]],"clickbank.com":[["set-cookie","cbgwc_cookie_consent","reject"]],"clk.sh":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"clutchpoints.com":[["set-local-storage-item","nbaSIBWidgetSeen","true"]],"cnblogs.com":[["aeld","copy","clipboardData"]],"cnki.net":[["aeld","contextmenu"]],"cocktailsworld.net":[["set","realCookieBanner","undefined"]],"cocomanga.com":[["aeld","contextmenu"]],"column.com":[["set-local-storage-item","cookieAllowed","false"]],"commandlinux.com":[["aopr","copy_div_id"]],"comun.sanmartindetor.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.gais.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.naturno.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.predoi.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.rasunanterselva.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.renon.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sanmartinoinpassiria.bz.it":[["set-cookie","ris_cookie_setting","1"]],"confused.com":[["set-cookie","CookieConsentV4","false"]],"cool-tv.net":[["rmnt","script",".preventDefault()","includes","contextmenu"]],"coolermaster.com":[["set-cookie","cookie-policy-agree","true"]],"cottonon.com":[["set-cookie","gdprPolicyAccepted","true"]],"crazy-factory.com":[["set-cookie","seen_cookie_dialog","1"]],"crewbase.net":[["aeld","contextmenu"],["acs","document.onkeydown"]],"crichype.com.br":[["set","confirm","noopFunc"]],"crichype.it":[["set","confirm","noopFunc"]],"cualesmiip.com":[["set-cookie","promptCookies","1"]],"culturealberta.com":[["set-session-storage-item","newsletter_shown","true"]],"cyclingnews.com":[["set-cookie","FTR_Article_PageView","2"]],"daily-tohoku.news":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"dailyamerican.com":[["nostif","gnt_mol_oy"]],"dake.es":[["set-cookie","cmplz_banner-status","dismissed"]],"daotranslate.net":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aeld","","undefined"]],"data.carbonmapper.org":[["set-local-storage-item","termsOfUseAccepted","true"]],"daya-jewelry.com":[["acs","RegExp","disableRightClick"]],"dbs.si":[["set-cookie","AcceptedCookies","true"]],"debijenkorf.nl":[["set-cookie","dbk_cookie_acceptance","declined"]],"deccanherald.com":[["aopr","document.oncopy"]],"degruyterbrill.com":[["set-cookie","acceptcookies","false"]],"demingheadlight.com":[["nostif","gnt_mol_oy"]],"democratandchronicle.com":[["nostif","gnt_mol_oy"]],"depedlps.com":[["acs","document.oncontextmenu"]],"derklassiker.de":[["set","realCookieBanner","undefined"]],"descarga-animex.es":[["aeld","/^(?:contextmenu|keydown)$/"]],"descopera.ro":[["acs","document.oncontextmenu"]],"destatis.de":[["set-cookie","gsbbanner","0"]],"devagroup.pl":[["set-cookie","deva_accepted","yes"]],"developer-blog.net":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"dgb.de":[["rc","js-show-newsletter-popup","","stay"]],"dhbbank.nl":[["set-cookie","UserCookieLevel","1"],["set-cookie","cookiePreference","1"]],"dialectsarchive.com":[["aopr","disableSelection"],["aopw","nocontext"]],"diastixo.gr":[["set-cookie","the_cookie719","true"]],"diffchecker.com":[["nostif","adStillHere"]],"digibest.pt":[["set-cookie","digibestCookieInfo","true"]],"dilynakotle.cz":[["set-cookie","cookie-bar","0"]],"dollenberg-isolierung.de":[["set","realCookieBanner","undefined"]],"doods.fr":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doods.org":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doodstream.nl":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dooood.net":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dopesnow.com":[["set-local-storage-item","cookieBannerShown","true"]],"dotwatcher.cc":[["set-cookie","accept_cookie_policy","true"]],"dramacute.es":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"dramacute.fr":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"dramaqu.co.uk":[["acs","$","contextmenu"]],"drinksking.sk":[["set-cookie","coookieaccept","ok"],["set-cookie","coookieage","ok"]],"drs.britishmuseum.org":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"dzwignice.info":[["aeld","contextmenu"]],"e-hilltop.com":[["set-cookie","allowGetPrivacyInfo","true"]],"eapvic.org":[["set-cookie","CookienatorConsent","false"]],"earnload.com":[["set","blurred","false"]],"earnload.de":[["set","blurred","false"]],"earnload.es":[["set","blurred","false"]],"earnload.fr":[["set","blurred","false"]],"earnload.it":[["set","blurred","false"]],"easyticket.de":[["set-cookie","consent","functional"]],"economictimes.indiatimes.com":[["aopr","intsFequencyCap"],["aeld","contextmenu"]],"ecuavisa.com":[["set-cookie","user_cookie_consent","1"]],"eduardo-monica.com":[["acs","document.oncontextmenu"]],"efortuna.ro":[["set-cookie","cookie_layer","1"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"eggelsberg.at":[["set-cookie","ris_cookie_setting","1"]],"eif.org":[["set-cookie","cookie-policy","true"]],"elektrotechnik-schabus.de":[["set","realCookieBanner","undefined"]],"elementvape.com":[["set-cookie","ageVerified","1"]],"elstonandson.co.uk":[["set-cookie","over18","yes"]],"emmi-pur.ch":[["set-cookie","jogurt-pur-che-cookie-categories","essential"]],"encurtandourl.com":[["aopw","mensagem"]],"endlesstools.io":[["set-cookie","et_cookie_consent","true"]],"epp.eu":[["set-cookie","eppcookie","1","","reload","1"],["set-cookie","performancecookie","0"]],"erlus.com":[["set-local-storage-item","pc-cookie-accepted","true"],["set-local-storage-item","pc-cookie-technical-accepted","true"]],"esologs.com":[["acs","attachToDom","ad-fallback"]],"essencestudios.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"eujuicers.org":[["set-cookie","wsp_cc","1","","reload","1"]],"europixhd.it":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"europixhd.org":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"evz.ro":[["acs","$","contextmenu"]],"fairlady.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"falabella.com.pe":[["set-cookie","isCookieLegalBannerSelected","true"]],"fantasyfootballscout.co.uk":[["rmnt","script","reviveScroll","excludes","self.__next"]],"fantecshop.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"faroshopping.it":[["set-cookie","tincx_cookie_notice_accepted","true"]],"feature.fm":[["set-cookie","featureConsent","false","","reload","1"]],"fidlock.com":[["set-cookie","cookie-preference","1"]],"filefox.cc":[["aeld","blur"]],"filmpornoitaliano.org":[["aopr","document.oncontextmenu"],["aopr","document.onmousedown"],["aopr","document.onselectstart"]],"firestream.co.uk":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"firestream.nl":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"fish.shimano.com":[["set-cookie","cookiePrefAnalytics","0"],["set-cookie","cookiePrefMarketing","0"],["set-cookie","cookiePrefThirdPartyApplications","0"]],"fitandwell.com":[["set-cookie","FTR_Article_PageView","2"]],"flamecomics.xyz":[["set-cookie","cookieConsent","true"]],"flanagansappleliverpool.co.uk":[["set-cookie","ce-cookie","N"]],"flashdumpfiles.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"flightconnections.com":[["nostif","premiumShown"]],"flixhq.com.br":[["nostif","||null"],["aost","console.clear"]],"flixhq.net":[["nostif","||null"],["aost","console.clear"]],"flixrave.to":[["nostif","||null"],["set","DisDevTool","undefined"]],"floraluxbree.be":[["set-cookie","cookie-consent-status","0"]],"flyingpapers.com":[["set-local-storage-item","FP_cookiesAccepted","true"]],"forbesafrica.com":[["set-cookie","forbesConsentCookie","true"]],"ford-geberzahn-koeln.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hessengarage-frankfurt.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-jungmann-wuppertal.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-kestel-marktzeuln.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-klaiber-bad-friedrichshall.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-ludewig-delligsen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.no":[["set-cookie","cookieAcknowledged","true"]],"forkingpaths.co":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"fossil.com":[["set-cookie","banner_interaction","1"],["set-cookie","privacy_allow_advertising","0"],["set-cookie","privacy_allow_performance","0"],["set-cookie","privacy_allow_social","0"]],"francetvpub.fr":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"freecam.ro":[["aeld","contextmenu"]],"freep.com":[["acs","document.createElement","admiral"],["nostif","gnt_mol_oy"]],"freereadnovel.online":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"freewaysintl.com":[["aeld","contextmenu"]],"fugglesbottleshop.co.uk":[["set-cookie","isAnAdult","true"]],"funko.com":[["set-cookie","welcome_modal_email_ts","1"]],"futbollatam.com":[["aeld","contextmenu"]],"futspo.de":[["rc","disable","div","stay"]],"fwd.com":[["set-local-storage-item","cookieBannerRead","true"],["set-local-storage-item","cookieBannerReadDate","1"]],"gadis.es":[["set-cookie","analyticsAccepted","false"],["set-cookie","cookieAccepted","true"]],"gagetmatome.com":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"gaming-grounds.de":[["set","realCookieBanner","undefined"]],"gardenmediaguild.co.uk":[["set-cookie","AllowCookies","false","","reload","1"]],"gavelo.com":[["set-cookie","_pandectes_gdpr","1"]],"gaypornvideos.xxx":[["set-cookie","kt_tcookie","1"],["set-cookie","splash_Page_Accepted","true"]],"gdplayertv.net":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"gdplayertv.nl":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"gearside.com":[["set","nebula.session.flags.adblock","undefined"]],"gemeinde.natz-schabs.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.neumarkt.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.olang.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.schenna.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.stpankraz.bz.it":[["set-cookie","ris_cookie_setting","1"]],"generali.at":[["set-cookie","CST_COOKIE_CONSENT","1"],["set-cookie","cookieMessageDismissed","1"]],"gigasport.ch":[["set-cookie","consentAll","1"]],"globalairportconcierge.com":[["no-fetch-if","method:HEAD"]],"gmx.co.uk":[["aeld","mouseout","openLayer"]],"goerie.com":[["nostif","gnt_mol_oy"]],"goesser.at":[["set","realCookieBanner","undefined"]],"golfmonthly.com":[["set-cookie","FTR_Article_PageView","2"]],"gomovies.es":[["acs","document.oncontextmenu"]],"gomovies.net":[["acs","document.oncontextmenu"]],"grandoldteam.com":[["acs","eval","replace"]],"grandprixradio.nl":[["set-cookie","advertisement-age-show-alcohol","false"],["set-cookie","advertisement-age-show-gamble","false"],["set-cookie","analytics_cookies","0"],["set-cookie","cookies_accepted","1","","reload","1"],["set-cookie","tracking_cookies","0"]],"graybar.com":[["set-cookie","cookie-notification","ACCEPTED","","reload","1"]],"graziellawicki.com":[["rc","gdpr-cookie-notice-center-loaded","","stay"]],"greenocktelegraph.co.uk":[["aopr","_sp_._networkListenerData"]],"grid.de":[["set","realCookieBanner","undefined"]],"grizly.hu":[["set-cookie","mCs-chk","1"]],"guard.io":[["set-cookie","cookie_consent_seen","1"]],"guljaj.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"gvcc.net":[["set-cookie","ris_cookie_setting","1"]],"hainaut-caravaning.be":[["set-cookie","cookie-ok","1","","reload","1"]],"hair-body-24.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"hanerix.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hanse-haus-greifswald.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"harry-gerlach.de":[["set-cookie","privacyPolicyAccept","0","","reload","1"]],"hartfordbusiness.com":[["set-cookie","Drupal.visitor.WEBSITECOOKIEALLOWED","yes"],["remove-cookie","meter_haystack"]],"hartsboatyard.co.uk":[["set-cookie","ce-cookie","N"]],"haustier-berater.de":[["set-cookie","CookieConsent","1"]],"hawkers.beer":[["set-cookie","age-checked","1"]],"hdrez.com":[["aopw","document.oncontextmenu"]],"headout.com":[["set-cookie","consent-state","true"]],"heatstore.eu":[["set-cookie","consent","true"]],"hello-rezka.fr":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hello-rezka.nl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hello.one":[["set-cookie","acknowledged","true"]],"helloatmos.app":[["set-local-storage-item","analytics-consent","denied"]],"hellokpop.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"helmut-fischer.com":[["set-cookie","cookie-level-v4","0"]],"hifitest.de":[["set-cookie","cookie-set-popup","0","","reload","1"]],"hiking.biji.co":[["set-cookie","cookieConsent","true","","reload","1"]],"hindipix.co.uk":[["set","console.debug","trueFunc"],["set","console.clear","trueFunc"]],"hindipix.ru":[["set","console.debug","trueFunc"],["set","console.clear","trueFunc"]],"historianet.fi":[["set","cicc.cookie_cat_statistic","true"],["set","cicc.cookie_cat_functional","true"],["set","cicc.cookie_cat_marketing","true"]],"hitech-gamer.com":[["set-cookie","htg_consent","0"]],"horecaworld.be":[["set-cookie","consent","1"],["set-cookie","cookies_consent","1"]],"hotelborgia.com":[["set-cookie","cookie","1","","reload","1"],["set-cookie","cookie-analytics","0"]],"hscollective.org":[["set-cookie","CookieConsent","Necessary","","reload","1"]],"hukmatpro.co.uk":[["aopw","hidekeep"]],"hundewelpe.de":[["set","realCookieBanner","undefined"]],"i-fundusze.pl":[["set-local-storage-item","cookiePolicy","true"]],"ickonic.com":[["set-local-storage-item","consentMode","1"]],"icy-veins.com":[["rmnt","script","reviveScroll","excludes","self.__next"],["nostif","premium"]],"ihrlabor.befundpost.at":[["set-cookie","consent","1","","reload","1"]],"ikorektor.pl":[["nostif","ad"]],"ilife97.com":[["aopw","document.oncontextmenu"],["aopw","document.ondragstart"]],"ilovefreesoftware.com":[["aost","getSelection","quoty-public"]],"imkershoperzgebirge.de":[["rc","disable","div","stay"]],"immobiliaremia.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"imooc.com":[["aopr","addCopyright"]],"independent.co.uk":[["rc","jw-flag-floating","","stay"],["rc","sticky","","stay"]],"infokik.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"infoplease.com":[["nostif","show"]],"infotrucker.ro":[["rmnt","script","oncontextmenu"]],"ing.nl":[["set-cookie","cookiepref","1"]],"inmuebles24.com":[["set-cookie","allowCookies","true"]],"insidermonkey.com":[["aopr","ABD"]],"internetpasoapaso.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"isolarcloud.eu":[["set-local-storage-item","ISOLAR_COOKIE_VISIT","1"]],"ithacajournal.com":[["nostif","gnt_mol_oy"]],"itvnextra.pl":[["aeld","contextmenu","a"]],"ivfp.de":[["set","realCookieBanner","undefined"]],"jagledam.net":[["aeld","contextmenu"],["set","document.oncontextmenu","null"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"jagledam.ru":[["aeld","contextmenu"],["set","document.oncontextmenu","null"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"jdnews.com":[["nostif","gnt_mol_oy"]],"jetv.xyz":[["nosiif","devtoolsDetector"]],"jgl.hr":[["set-cookie","ng-cc-accepted","accepted"]],"jobs2work.net":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"jobs2work.org":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"jobs2work.pl":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"jobs2work.ru":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"jpgames.de":[["set","realCookieBanner","undefined"]],"kaeserei-studer.ch":[["set-cookie","studer-che-cookie-categories","essential"]],"kafijasdraugs.lv":[["set-cookie","lvFunctionalCookies","true"]],"kallidus.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"karver-systems.com":[["set","realCookieBanner","undefined"]],"kenastonwine.com":[["set-local-storage-item","agecheck","yes"]],"kika.pl":[["set-cookie","cookie_accepted","1"],["set-cookie","functional_cookies","1","","reload","1"]],"kirklees.gov.uk":[["set-cookie","cookiesacceptedGDPR","false"]],"kivikangas.fi":[["set-cookie","cookies-required","1","","reload","1"]],"klartext-ne.de":[["rmnt","script","contextmenu"]],"kletterkogel.de":[["set-cookie","cookie-preference","1"]],"klosterneuburg.at":[["set-cookie","ris_cookie_setting","1"]],"knshow.com":[["aopr","document.oncontextmenu"],["aeld","/^(?:contextmenu|copy|selectstart)$/"]],"kornau.de":[["set-cookie","Consent","0"]],"korodrogerie.de":[["set-cookie","cookie-preference","1"],["set-cookie","cookie-preference","1","","reload","1"]],"kovopolotovary.sk":[["set-cookie","web-cookies","2"]],"krefindo.de":[["set","realCookieBanner","undefined"]],"kritichno.bg":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"kryolan.com":[["set-cookie","allowCookie","1"]],"ktchng.com":[["set-cookie","cb-enabled","accepted"]],"kto.co.uk":[["set-cookie","caccept","on"]],"kto.pl":[["set-cookie","caccept","on"]],"kymppikatsastus.fi":[["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","viewed_cookie_policy","yes"],["set-cookie","cookielawinfo-checkbox-toiminnalliset-evasteet","yes"]],"kytary.co.uk":[["set-cookie","CookieConsent","0","","reload","1"]],"lagundo.eu":[["set-cookie","ris_cookie_setting","1"]],"lamparasherrero.com":[["set-cookie","promptCookies","1"]],"latoken.com":[["set-cookie","CookieConsent","true"]],"lattinepersonalizzate.it":[["set","realCookieBanner","undefined"]],"lazyadmin.nl":[["nostif","AdBlocker"],["set","admiral","noopFunc"]],"leafly.com":[["set-cookie","acceptsAdvertisingCookies","false"],["set-local-storage-item","viewedCookieConsent","true"]],"legalteam.hu":[["set-cookie","gaCookies","false"]],"legionprogramas.org":[["acs","document.oncontextmenu"],["aopw","document.onselectstart"]],"leibniz.com":[["set-cookie","consent","1"]],"leiternprofi24.de":[["set-cookie","cookie-preference","1"]],"lendagames.com":[["acs","document.onkeydown"]],"lesbianstate.com":[["set-cookie","Age","1"],["set-cookie","Cookie","1"]],"libgen.de":[["nostif","appendMessage"]],"libraries.kingston.gov.uk":[["set-cookie","luci_CC_21d2ab3d-5676-4eb9-aec5-7703f1e15058","true"],["set-cookie","luci_gaConsent_21d2ab3d-5676-4eb9-aec5-7703f1e15058","false"]],"lifestory.hu":[["ra","oncontextmenu"]],"linkmate.xyz":[["aeld","","key"]],"linztourismus.at":[["set-cookie","privacy-manager-settings","functional","","reload","1"]],"liquorjunction.com":[["set-cookie","age_verification","1"]],"listatv.pl":[["ra","oncontextmenu"]],"livingstondaily.com":[["nostif","gnt_mol_oy"]],"lobetalarbeit.de":[["set","realCookieBanner","undefined"]],"locateyoursound.com":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"londonwomenscentre.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"ludlowbrewery.co.uk":[["set-cookie","cookie_consent","all","","reload","1"]],"lugarcerto.com.br":[["aeld","mouseout","pop"]],"magdeleyns.be":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"magnolia.com":[["set-local-storage-item","BRANCH_BANNER_PAGE_LOAD","1"],["set-local-storage-item","EMAIL_CAPTURE_MODAL_STOP","1"]],"magyarorszag.hu":[["set-cookie","szuf_consent","0"]],"mangaku.org":[["acs","$","contextmenu"],["aeld","contextmenu"]],"manhwahentai.me":[["acs","document.oncontextmenu"]],"mannschaft.com":[["set","realCookieBanner","undefined"]],"manutd.com":[["set-cookie","userConsentCookiePolicy","off"]],"markets.com":[["set-cookie","cookies_configured","1"],["set-cookie","cookies_func","true"],["set-cookie","cookies_tracking","false"]],"max.co.nz":[["set-cookie","user_allowed_save_cookie","1"]],"maximumtest.ru":[["set-local-storage-item","cookieRead","1"]],"mcdonaldsneighbourhood.co.nz":[["set-cookie","ks_cookie_consent","1","","reload","1"]],"mcloud.to":[["aost","console.clear"]],"mediaite.com":[["set-cookie","am-sub","1"]],"mediately.co":[["set-cookie","cookiesApproved20231","true"]],"medmerabank.se":[["set-cookie","cookieConsent","necessary"]],"megawypas.com":[["ra","oncontextmenu"]],"meinlcoffee.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"messer-lagerverkauf.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"metroasis.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"metrowestdailynews.com":[["nostif","gnt_mol_oy"]],"mfu-pilotenclub.at":[["set","realCookieBanner","undefined"]],"mifcom.org":[["set-cookie","cookie_accepted","1","","reload","1"],["set-cookie","cookie_closed","1"]],"min.io":[["set-local-storage-item","cookieConsent","accepted"]],"minhaconexao.com.br":[["set-cookie","show_cookies_banner","false"]],"mobire.ee":[["set-cookie","ws-cookiebar-mobire","7"]],"monkey47.com":[["set-cookie","dgtlconsent","essential","","reload","1"]],"movies2watch.ru":[["aost","console.clear"]],"mt07-forum.de":[["acs","$","offsetHeight"]],"mtbtutoriales.com":[["aopw","reEnable"],["acs","document.oncontextmenu"]],"musicallyvideos.com":[["acs","document.oncontextmenu"]],"musicmap.info":[["set-cookie","privacy-policy-2023","accept"]],"mydigi.digi.pt":[["set-cookie","adsConsent","false"],["set-cookie","analyticsConsent","false"]],"myflixerz.to":[["set-cookie","show_share","true"],["nosiif","_0x"]],"mylove-mylife.at":[["set-cookie","my-love-my-life-aut-cookie-categories","essential"]],"myloview.fr":[["set-cookie","cookieConsent","necessary","","reload","1"]],"myloview.nl":[["set-cookie","cookieConsent","necessary","","reload","1"]],"myloview.org":[["set-cookie","cookieConsent","necessary","","reload","1"]],"myloview.ru":[["set-cookie","cookieConsent","necessary","","reload","1"]],"myoffers.smartbuy.hdfcbank.com":[["set-local-storage-item","cookies_enabled","true"]],"mypenndentist.org":[["set-cookie","undefinedpopup-pdfpcouponoffer","1"]],"myru.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"naijagists.com":[["aopr","disableSelection"]],"najlacnejsialkohol.sk":[["set-cookie","vstup-popUp","1"]],"nautil.us":[["remove-cookie","arc"]],"nbcconnecticut.com":[["aeld","scroll"]],"nbcnews.com":[["rc","styles_stuck__gtILi","","stay"]],"nbcphiladelphia.com":[["aeld","scroll"]],"ncert-solutions.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"ncertsolutions.guru":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"neilpatel.com":[["rc","mfp-popup-exit-quiz-v2","","stay"],["no-xhr-if","/hotjar|googletagmanager/"]],"news-press.com":[["nostif","gnt_mol_oy"]],"nicekkk.com":[["rmnt","script","debugger"]],"nijimiss.moe":[["json-prune","ads.[].imageUrl"]],"northwestfirearms.com":[["set","samDetected","true"]],"novagenics.com":[["set-cookie","cookie-preference","1"]],"novayagazeta.eu":[["set-cookie","cookies-informer-close","true"]],"nsfwzone.xyz":[["acs","console.clear","contextmenu"]],"nydailyquote.com":[["acs","document.onselectstart"]],"ofertecatalog.ro":[["rmnt","script","/contextmenu|oncopy/"],["ra","onselectstart","","stay"]],"ofuxico.com.br":[["aeld","copy"]],"ogladajanime.pl":[["set-cookie","accepted","true","","reload","1"]],"okimono.nl":[["set-cookie","_pandectes_gdpr","1"]],"oklo.com":[["set-cookie","cookiemonster-gdpr","1"]],"omroepflevoland.nl":[["set-local-storage-item","of_cookies_consent","YES"],["set-local-storage-item","of_cookiewall_banner_seen","YES"]],"oncosur.org":[["set-cookie","ONCOSURCOOK","2"]],"onlineradiobox.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"onlinetexttools.com":[["nano-sib","Clipboard","1000","0.001"]],"onlyoffice.com":[["set-cookie","cookie_preferences","1"]],"ontuscia.it":[["set","realCookieBanner","undefined"]],"opengraph.xyz":[["set-cookie","cookie_consent","rejected"]],"openreach.com":[["set-cookie","EssentialCookie","true"]],"oponeo.net":[["set-cookie","_cookieConsents","1"]],"oponeo.pl":[["set-cookie","_cookieConsents","1"]],"orangespotlight.com":[["aeld","/contextmenu|select|copy/"]],"oreilly.com":[["aeld","mouseout","cookie"]],"otakudesu.it":[["acs","document.oncontextmenu"]],"ourgames.ru":[["set-cookie","OptanonAlertBoxClosed","true"]],"palladiumboots.org":[["set-cookie","cookieconsent_status1","deny"]],"palmbeachdailynews.com":[["nostif","gnt_mol_oy"]],"parking.praha.eu":[["set-cookie","cookies_and_content_security_policy","false"]],"patchbox.com":[["set","realCookieBanner","undefined"]],"patriotledger.com":[["nostif","gnt_mol_oy"]],"pawastreams.pro":[["nostif","debugger"]],"pelispedia.net":[["aopw","document.oncontextmenu"],["ra","oncontextmenu"]],"permainan.co.id":[["set-cookie","OptanonAlertBoxClosed","true"]],"petsradar.com":[["set-cookie","FTR_Article_PageView","2"]],"pettenbach.at":[["set-cookie","ris_cookie_setting","1"]],"pflegepitztal.at":[["set-cookie","ris_cookie_setting","1"]],"philips-hue.com":[["set","cockieConsentManagement","noopFunc"]],"photofloh.de":[["set","realCookieBanner","undefined"]],"phpconference.com":[["set","realCookieBanner","undefined"]],"phrasemix.com":[["acs","$","showEmailNewsletterModal"]],"piecesauto.fr":[["aeld","mousedown","function(t)"]],"pinel.de":[["set","realCookieBanner","undefined"]],"pixieset.com":[["set-cookie","pixieset_analytics","denied"],["set-cookie","pixieset_marketing","denied"]],"pixnet.net":[["ra","oncontextmenu|onDragStart|onselectstart"]],"pixwox.com":[["nostif","length","3000"]],"placementstore.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"plural.jor.br":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"pobre.it":[["aeld","","blockFuckingEverything"],["aeld","contextmenu","preventDefault"],["aost","eval","build.js"]],"pocketgamer.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"polsatboxgo.pl":[["set-cookie","rodo-modal-displayed","1"],["set-cookie","rodo-reminder-displayed","1"]],"pornermates.com":[["set-cookie","mayor_edad","1"]],"pornhub.it":[["rc","hasAdAlert","header"]],"portea.fr":[["rc","wcc-popup-overflow","body","stay"]],"postcourier.com.pg":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["aopw","stopPrntScr"],["aopw","ondragstart"],["aeld","/contextmenu|keydown|keypress|copy/"],["aopr","document.oncontextmenu"]],"posterstore.ae":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.eu":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.nl":[["set-cookie","synapse-cookie-preferences-set","true"]],"postype.com":[["aeld","contextmenu"],["rc","disable-selection","body"]],"privatekeys.pw":[["set-cookie","cookie_consent_closed","1"]],"proex2000.cz":[["set-cookie","cookie-bar","hidden"]],"progress-index.com":[["nostif","gnt_mol_oy"]],"protan-elmark.es":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","rodopolicy","true"]],"protan-elmark.net":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","rodopolicy","true"]],"psychiatryadvisor.com":[["remove-cookie","hmmet"]],"pureness.se":[["set-cookie","_pandectes_gdpr","1"]],"puzzle-aquarium.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-binairo.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-kakuro.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-minesweeper.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-yin-yang.com":[["rmnt","script","ab927c49cf1b"]],"raccontivietati.com":[["aopr","disableSelection"]],"radbeer.com":[["set-cookie","age-checked","1"]],"railsnotes.xyz":[["set-cookie","exit-intent","true"]],"railtech.com":[["set-cookie","gdpr","accept"]],"ramotavla.se":[["rc","wcc-popup-overflow","body","stay"]],"raoul-follereau.org":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"rapid-cloud.co":[["set","devtoolsDetector.launch","noopFunc"]],"raspberrypi.dk":[["set-cookie","cs_viewed_cookie_policy","yes"]],"refurbished.at":[["set-cookie","COOKIE_CONSENT","1","","reload","1"],["set-cookie","COOKIE_MARKETING","false"],["set-cookie","COOKIE_STATIC","false"]],"rega.ch":[["set-cookie","consentcookierega","0"]],"regionalwines.co.nz":[["set-cookie","isAnAdult","true"]],"registerguard.com":[["nostif","gnt_mol_oy"]],"renon.eu":[["set-cookie","ris_cookie_setting","1"]],"rgu.ac.uk":[["set-cookie","_rguCookieConsent","0"]],"rijkenis.nl":[["set-cookie","consent-cookies","1"]],"rittal.com":[["set-cookie","rittalCC","1"]],"rosgovas.com":[["set","realCookieBanner","undefined"]],"rp5.by":[["nostif","()","700"]],"rule34.xxx":[["set-cookie","gdpr","1"],["set-cookie","gdpr-consent","1","","reload","1"]],"sachisushi.dk":[["set-cookie","flexkcookie","1"],["set-cookie","wp_consent_functional","deny"],["set-cookie","wp_consent_marketing","deny"],["set-cookie","wp_consent_statistics","deny"]],"sahne-band.de":[["set-cookie","ckies_cookielaw","allow"]],"sanswiss.pl":[["set-cookie","cookie_info","1","","reload","1"]],"sat-charts.eu":[["ra","oncontextmenu"]],"sattledt.at":[["set-cookie","ris_cookie_setting","1"]],"sbflix.com":[["acs","onload","contextmenu"]],"sbflix.fr":[["acs","onload","contextmenu"]],"schulfahrt.de":[["set-cookie","cookiecookie","1"]],"schulze-immobilien.de":[["set-cookie","privacyPolicyAccept","0","","reload","1"]],"scinapse.io":[["set-local-storage-item","a_c","true"]],"scitechdaily.com":[["set-cookie","ezgwcc","1"]],"scribd.com":[["aeld","/^(mouseout|mouseleave)$/"]],"sendasmile.de":[["set-cookie","K2Go[consent]","required"]],"serieslyawesome.tv":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"sflix2.com.br":[["nosiif","/_0x|devtools/"]],"sh.reddit.com":[["nostif","{e(n,t,r)}","30000"]],"shop.conas.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.kky.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.s3.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shopbuddies.fr":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shrapnel.com":[["set-cookie","ConsentCookies","false"]],"shushan.zhangyue.net":[["ra","oncontextmenu|ondragstart|onselectstart"]],"sidelaunchbrewing.com":[["set-cookie","isAnAdult","true"]],"sinparty.com":[["set-cookie","gdrp_popup_showed","1"]],"skionline.com":[["ra","oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"]],"skionline.de":[["ra","oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"]],"skionline.nl":[["ra","oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"]],"smalley.com":[["ra","onselectstart|oncopy","body","complete"]],"smartkhabrinews.com":[["ra","oncontextmenu"],["aeld","contextmenu"],["rmnt","script","ctrlKey"]],"smartpropertyinvestment.com.au":[["set-local-storage-item","articleGateData","$remove$"]],"smashboards.com":[["nosiif","height"]],"smotret-tv.nl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrim-tv.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smow.com":[["set-cookie","__compliance_cookie_2","111","","reload","1"]],"solarmovie.co.uk":[["nostif","_detectLoop"]],"solarmovie.es":[["nostif","_detectLoop"]],"sooeveningnews.com":[["nostif","gnt_mol_oy"]],"sourceforge.net":[["set","window.cmpmngr.setConsentViaBtn","noopFunc"]],"sportland.com":[["set-cookie","amcookie_allowed","4"]],"spuntinoheathrow.com":[["set-cookie","essential_cookies_enabled","true"],["set-cookie","google_cookies_enabled","false"]],"sqlook.com":[["set-local-storage-item","cookieChoice","rejected"]],"st-pankraz.at":[["set-cookie","ris_cookie_setting","1"]],"staralliance.com":[["set-cookie","STAR_COOKIE_MESSAGE_ACCEPTED","true"],["set-cookie","STAR_PERSONALIZE","false"],["set-cookie","STAR_STATISTICS","false"]],"starofservice.com":[["set-cookie","cookieNotification","true"]],"statnews.com":[["remove-cookie","xbc"]],"sterlitamak1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"stewes.de":[["set","HB.CookieSettings.init","noopFunc"]],"store.toogoodtogo.com":[["set-local-storage-item","optionalDataExchangeConsent","false"],["set-local-storage-item","partnerConsentVersion","0"]],"storm-proof.com":[["set-cookie","cookie-preference","1"]],"stream.hownetwork.xyz":[["rmnt","script","debugger"]],"streamingunity.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"streamtape.co.uk":[["aeld","contextmenu"],["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"strtape.net":[["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"strtape.ru":[["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"sturgisjournal.com":[["nostif","gnt_mol_oy"]],"suedkurier.de":[["ra","oncontextmenu"]],"sunshine.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"superherohype.com":[["aopr","__cmpGdprAppliesGlobally"]],"supreme.com":[["set-local-storage-item","gdpr_cookie","accepted"],["set-local-storage-item","sup_gdpr_cookie","accepted"]],"sutterhealth.org":[["set-cookie","_acceptsEssential","true"]],"swisstours.com":[["set-local-storage-item","isCookie","Yes"]],"tabletable.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"tabonitobrasil.com":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["aeld","keydown","preventDefault"]],"tabonitobrasil.de":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["aeld","keydown","preventDefault"]],"tabonitobrasil.net":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["aeld","keydown","preventDefault"]],"tattoodo.com":[["set-local-storage-item","accepted_cookie","true"],["set-local-storage-item","accepted_cookies","true"]],"teamskeet.com":[["set-cookie","disclaimer_status","agree"]],"technikmuseum.berlin":[["set-local-storage-item","technikmuseum-required-enabled","true"]],"technologyreview.com":[["set","webkitRequestFileSystem","undefined"]],"telek.online":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"telepizza.pt":[["set-cookie","AcceptAnalyticsCookies","false"],["set-cookie","AcceptFunctionalCookies","true"],["set-cookie","AcceptNonFunctionalCookies","false"]],"televizia.org":[["aeld","contextmenu","preventDefault"]],"tennis-live.su":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tercihiniyap.net":[["ra","oncontextmenu|onselectstart|ondragstart"]],"termania.net":[["set-cookie","agree_with_cookies","1"]],"thailandopen.org":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"the-daily-record.com":[["nostif","gnt_mol_oy"]],"theankler.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"thebathamptonmill.co.uk":[["set-cookie","ce-cookie","N"]],"thebullislington.co.uk":[["set-cookie","ce-cookie","N"]],"thedebriefnetwork.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"theencorestratford.co.uk":[["set-cookie","ce-cookie","N"]],"theintercept.com":[["rmnt","script","userData_"]],"thejakartapost.com":[["set","document.oncopy","noopFunc"],["rmnt","script","/$.*ready.*setInterval/"]],"thelensnola.org":[["set-cookie","pum-605611","true"]],"theonegenerator.com":[["no-fetch-if","ads"]],"thepublicopinion.com":[["nostif","gnt_mol_oy"]],"thesaturdaypaper.com.au":[["remove-cookie","xbc"]],"thespectrum.com":[["nostif","gnt_mol_oy"]],"thetimesherald.com":[["nostif","gnt_mol_oy"]],"theverge.com":[["aeld","scroll"],["remove-cookie","blaize_session"],["remove-cookie","blaize_tracking_id"],["nostif","adsBlocked"]],"thewashingtonhampstead.co.uk":[["set-cookie","ce-cookie","N"]],"timberland.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"timo-bernhard.de":[["set","realCookieBanner","undefined"]],"tinyhouse-baluchon.fr":[["acs","document.oncontextmenu"]],"tips97tech.blogspot.com":[["rmnt","script","debugger"]],"tipssehatcantik.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"tise.com":[["set-cookie","cookiePolicyAccepted","true"]],"tmnascommunity.eu":[["set-cookie","firebox_3330","1"]],"todaysparent.com":[["aeld","/^(mouseout|mouseleave)$/"]],"top-car-hire.com":[["set-cookie","cookies_aceptadas","true","","reload","1"]],"top4mobile.net":[["set-cookie","cookies-agreed","1"],["set-cookie","cookies-analytical","0"]],"topeuropix.pl":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"translate.goog":[["aeld","/contextmenu|keyup|keydown/"]],"tropicalida.com.ec":[["set-local-storage-item","CookiesConsent","1"]],"tube8.fr":[["set-cookie","t8disclaimer","1"]],"tuhlteim.de":[["set","realCookieBanner","undefined"]],"tui.nl":[["set-cookie","CookiesAccepted","no"]],"tui.se":[["rc","no-scroll","body","stay"]],"tv.youtube.com":[["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"]],"tvnturbo.pl":[["aeld","contextmenu","a"]],"tvron.com.br":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvzingvn.nl":[["acs","onload","contextmenu"]],"twenga.fr":[["set-cookie","cookiewarning","1","","reload","1"]],"twenga.se":[["set-cookie","cookiewarning","1","","reload","1"]],"uhrzeit123.de":[["set-cookie","_u123_cc","yes"],["set-cookie","ga-disable","true"]],"umcutrecht.nl":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"understandingai.org":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"uol.com.br":[["aeld","copy"],["aopw","addLink"]],"upsrtconline.co.in":[["acs","document.addEventListener","alert"]],"urbanbrush.net":[["acs","document.oncontextmenu"]],"usnews.com":[["set-cookie","gdpr_agreed","4"]],"uta-net.com":[["aeld","/contextmenu|selectstart|copy/"]],"utamap.com":[["ra","oncontextmenu"]],"vadhander.hogakusten.com":[["set","settings.consent","true"]],"vanmossel.nl":[["set-cookie","gtmCookieAccepted","1"],["set-cookie","gtmCookiePopup","1"]],"vembed.com.br":[["nosiif","devtool"],["nostif","devtool"],["rmnt","script","devtools"]],"vembed.fr":[["nosiif","devtool"],["nostif","devtool"],["rmnt","script","devtools"]],"verpackungsstadl.at":[["rc","disable","div","stay"]],"vezess.hu":[["aeld","mouseleave","showFbPopup"],["nostif","FbExit","3000"],["rc","blurry","body > :not(.m-fbPopup)","stay"]],"viajesatodotren.com":[["set-cookie","NTCookies","0"]],"viatasisanatate.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"vidara.ru":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"videovard.net":[["set","console.clear","undefined"]],"vidplay.com.br":[["set","DisDevTool","undefined"]],"vidplay.fr":[["set","DisDevTool","undefined"]],"vidply.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"vidsrc.com.br":[["acs","RegExp.prototype.toString",".join(\"\")"],["aeld","keydown","123"],["nosiif","devtool"],["set","console.clear","trueFunc"],["set","DisableDevtool","noopFunc"],["set","devtoolsDetector.launch","noopFunc"]],"vidstreaming.xyz":[["nosiif","devtoolsDetector"]],"vinstartheme.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledKeys"]],"vki.at":[["set-cookie","vkicookieconsent","0"]],"voe-unblock.co.uk":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voe-unblock.com.br":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voe-unblock.es":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voe-unblock.net":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"vogelsbergkreis.de":[["set-local-storage-item","PrivacyPolicy[][core]","forbidden"],["set-local-storage-item","PrivacyPolicy[][maps]","forbidden"],["set-local-storage-item","PrivacyPolicy[][readSpeaker]","forbidden"],["set-local-storage-item","PrivacyPolicy[][videos]","forever"]],"voirfilms.pl":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"volcanoecigs.com":[["set-cookie","isAnAdult","true"]],"volkswagen-group.com":[["set-cookie","vw_mms_hide_cookie_dialog","1"]],"voltadol.at":[["set-local-storage-item","cookiebanner-active","false"]],"vrsdigital.de":[["set-cookie","tracking","0"]],"vtbe.to":[["acs","RegExp","contextmenu"]],"vyvymanga.net":[["rmnt","script","window.location.href"]],"wals-siezenheim.at":[["set-cookie","ris_cookie_setting","1"]],"wandanabrewingco.com.au":[["set-cookie","age-checked","1"]],"wanderlustdrinkscompany.com":[["set-cookie","age-checked","1"]],"watson.de":[["nostif","AdBlocker"]],"web.spaggiari.eu":[["set-cookie","cookie_consent","3"]],"webtapete.de":[["set","realCookieBanner","undefined"]],"weetabixea.com":[["rc","wcc-popup-overflow","body","stay"]],"wentronic.com.br":[["set-cookie","COOKIES_ACCEPTED_new_1","essential","","reload","1"]],"wfmynews2.com":[["aeld","/^(mouseout|mouseleave)$/"]],"whathifi.com":[["set-cookie","FTR_Article_PageView","2"]],"wifiwien.at":[["set-cookie","consent","true"]],"wikihow.com":[["acs","document.addEventListener","contribute"]],"wikiofcelebs.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"windowscentral.com":[["set-cookie","FTR_Article_PageView","2"]],"winesale.co.nz":[["set-cookie","_ageVerified","yes"]],"winhelponline.com":[["aopr","googletag"]],"winlocal.de":[["set","realCookieBanner","undefined"]],"wisconsinrapidstribune.com":[["nostif","gnt_mol_oy"]],"withings.com":[["set-cookie","cookieconsent_advertising","false"],["set-cookie","cookieconsent_statistics","false"],["set-cookie","withings_cookieconsent_dismissed","1"]],"wizardshop.su":[["set-cookie","alert_cookie","1"]],"wizcase.com":[["nostif","bioEp.showPopup"]],"wkyc.com":[["aeld","/^(mouseout|mouseleave)$/"],["rc","video__docker_state_docked","","stay"]],"wolkenstein.eu":[["set-cookie","ris_cookie_setting","1"]],"wonkette.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"world-novel.fr":[["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"],["aeld","keydown","key"],["aeld","/copy|selectstart/","return"],["aeld","contextmenu","/preventDefault|pointerType/"]],"wrestling-point.de":[["set","realCookieBanner","undefined"]],"wstream.fr":[["aeld","contextmenu","preventDefault"],["aopr","onload"]],"wthr.com":[["aeld","/^(mouseout|mouseleave)$/"]],"wtsp.com":[["aeld","/^(mouseout|mouseleave)$/"],["aeld","mouseout","innerHeight"]],"wunderground.com":[["set-local-storage-item","wu.ccpa-toast-viewed","true"],["rc","enable-sda","body","stay"]],"www-insider-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www.watermarkremover.io":[["set-local-storage-item","WkdGcGJIbEpiV0ZuWlVSaGRHRT0=","$remove$"]],"xfree.com":[["set-cookie","have18","1"]],"xhamster.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster.desi":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"]],"xhamster1.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster10.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster10.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster10.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster11.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster14.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster15.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster15.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster17.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster18.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster19.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster19.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster19.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster19.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster20.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster3.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster4.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster42.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster7.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamsterlive.com":[["set-cookie","cookie_accept","1"],["set-cookie","isVisitorsAgreementAccepted","1","","reload","1"]],"xhreal2.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhvictory.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xiaomi4mi.com":[["aopw","document.oncontextmenu"]],"xledger.net":[["set-cookie","agreesWithCookies","true"]],"xm.com":[["set-cookie","xmck_analytical","0"],["set-cookie","xmck_functional","1"],["set-cookie","xmck_popupShown","1"],["set-cookie","xmck_preferences","0"],["set-cookie","xmck_promotional","0"]],"xxxonlinegames.com":[["nostif","offsetHeight"]],"xxxtv.us":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"yambits.co.uk":[["set-cookie","acceptcookies","no","","reload","1"]],"yesmovies.co.uk":[["set-cookie","show_share","true"]],"yesmovies.com":[["set-cookie","show_share","true"]],"youjizz.com":[["set-local-storage-item","yjAgeVerified","true"]],"youngimages.de":[["set","realCookieBanner","undefined"]],"yoyofilmeys.de":[["acs","document.oncontextmenu"]],"yusepjaelani.blogspot.com":[["aopr","document.onkeydown"]],"zaero-design.de":[["set-cookie","cookie-preference","1"]],"zapatos.com.br":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zapatos.org":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zdravenportal.eu":[["acs","document.oncontextmenu"],["acs","document.addEventListener","document.onselectstart"],["aopw","disable_hot_keys"],["ra","oncontextmenu"]],"zimaspace.com":[["set-local-storage-item","cookiesConsent","rejected"]],"zingtvhd.de":[["acs","onload","contextmenu"]],"zingtvhd.net":[["acs","onload","contextmenu"]],"zingvntv.net":[["acs","onload","contextmenu"]],"zipjob.com":[["set-cookie","cookie_consent","1"]],"zumkutscher.de":[["set","realCookieBanner","undefined"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
