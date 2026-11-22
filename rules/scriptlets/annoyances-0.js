/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"116117.fi":[["set-local-storage-item","cookie-consent","1"]],"24hessen.de":[["set","realCookieBanner","undefined"]],"30edu.com.cn":[["ra","oncontextmenu|oncopy|onselectstart"]],"3d-foto.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"699pic.com":[["aeld","/contextmenu|mousedown/"],["nosiif","clearInterval(loginReady)"]],"7-eleven.com":[["set-cookie","sei-ccpa-banner","true"]],"71.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"76.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"abc13.com":[["aeld","scroll"]],"abc15.com":[["aeld","/^(mouseout|mouseleave)$/"]],"adbypass.org":[["no-fetch-if","/googlesyndication|googletag/"],["nowoif"]],"adevarurisecrete.com":[["rmnt","script","/oncontextmenu|wccp/"]],"adidas.co.ma":[["set-cookie","consent_status","approved"]],"adidas.com.au":[["set-cookie","notice_preferences","2"]],"adidas.com.vn":[["set-cookie","notice_preferences","2"]],"adidas.gr":[["set-cookie","notice_preferences","2"]],"adressit.com":[["rmnt","script","clipboard_disabled"]],"aerolineas.com.ar":[["set-local-storage-item","isCookiesAccepted","true"]],"affiliate.fc2.com":[["nostif","checkFeed","1000"]],"affordablemobiles.co.uk":[["set-cookie","cookie_accept","true"],["set-cookie","__a1cns","true"],["set-cookie","__a1cp","false"]],"airportrentacar.gr":[["set-cookie","cookieControl","true"]],"ajc.com":[["aeld","/^(mouseout|mouseleave)$/"]],"algund.eu":[["set-cookie","ris_cookie_setting","1"]],"alkoshop.sk":[["set-cookie","y18","true"]],"allegro.fr":[["set-cookie","gdpr_permission_given","0"]],"allfunds.com":[["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"allmovie.com":[["acs","$","/getScript|error:/"]],"ally.com":[["set-cookie","allyccb","OK"]],"alpenverein.shop":[["set-cookie","amcookie_allowed","1"]],"americafirstreport.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"amway-estonia.com":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"amway-latvia.com":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"amway.fr":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"ananweb.jp":[["aeld","contextmenu"]],"animedao.it":[["aopr","devtoolsDetector"]],"animedao.pl":[["aopr","devtoolsDetector"]],"anisubindo.de":[["aeld","keydown","preventDefault"],["aopr","document.onkeydown"],["aopr","document.oncontextmenu"],["aopw","disableSelection"]],"anitrend.co":[["set-local-storage-item","anitrend_analytics_consent","denied"]],"aniwave.fr":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"antena3.com":[["aeld","contextmenu"]],"apogeeagency.com":[["set-cookie","cmplz_banner-status","dismissed"]],"arabesque-essen.de":[["set","realCookieBanner","undefined"]],"arcanescans.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"arenavalceana.ro":[["acs","jQuery","contextmenu"],["acs","document.oncontextmenu"]],"arera.it":[["set-cookie","CookieConsent","1"]],"argentos.barcelona":[["set-cookie","promptCookies","1"]],"arning-bau.de":[["set-cookie","cookienotification","1"]],"artech-sellerie.com":[["rc","unreadable-display","","stay"]],"ascension.gg":[["set-local-storage-item","CookieConsent_v2","false"]],"asiatv.org":[["aeld","contextmenu"]],"ask4movie.fr":[["ra","oncontextmenu","html"],["set","console.dir","noopFunc"],["set","navigator.userAgent",""]],"ask4movie.org":[["ra","oncontextmenu","html"],["set","console.dir","noopFunc"],["set","navigator.userAgent",""]],"astondevs.ru":[["set-local-storage-item","banner","true"]],"asumanaksoy.com":[["rmnt","script","devtoolsDetector"]],"atani.com":[["set-cookie","anal-opt-in","false"],["set-cookie","cookies_consent","true"]],"attend.techevents.informaconnect.com":[["set-cookie","swapcard-cookie-consent","accepted"]],"authedu.mosreg.ru":[["set-cookie","USER_AGREEMENT","1"]],"auto-doc.com":[["aeld","mousedown","function(t)"]],"auto-treff.com":[["acs","$","offsetHeight"]],"autoalkatreszek24.hu":[["aeld","mousedown","function(t)"]],"autoczescionline24.pl":[["aeld","mousedown","function(t)"]],"autodude.dk":[["set-local-storage-item","cookieConsent","necessary"]],"autodude.fi":[["set-local-storage-item","cookieConsent","necessary"]],"autoride.cz":[["set-local-storage-item","cookies_marketing_consent","false"],["set-local-storage-item","cookies_necessary_consent","true"],["set-local-storage-item","cookies_statistics_consent","false"]],"avito.ru":[["set-cookie","cookie_consent_shown","1"]],"backmarket.org":[["set-cookie","BM_Advertising","false","","reload","1"],["set-cookie","BM_Analytics","false"],["set-cookie","BM_User_Experience","true"]],"badhall.at":[["set-cookie","cookieconsent_status","allow"]],"bafa.de":[["set-cookie","gsbbanner","0"]],"bajuwarenhof.de":[["set-cookie","cookie-consent","declined","","reload","1"]],"baltic-watches.com":[["set-cookie","consent","0","","reload","1"]],"bar-tek.com":[["set-cookie","cookie-preference","1"]],"bazaartracker.com":[["set-local-storage-item","cookiesAgree","true"]],"beercellar.co.nz":[["set-cookie","isAnAdult","true"]],"belgee.by":[["set-cookie","hide-cookie-message","true"]],"beyblade.com":[["set-cookie","underage","false","","reload","1"]],"bflix.com.br":[["aeld","keydown","[arguments];"],["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"bflix.pl":[["aeld","keydown","[arguments];"],["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"bhaptics.com":[["set-cookie","accepted_cookies","yes"]],"bhoomtv.es":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"bibliacatolica.com.br":[["aopr","getSelection"]],"bibliothek.bahai.de":[["set-cookie","cookiesOk","true"]],"bigdatauni.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"biographyonline.net":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"blaguss.com":[["set-cookie","CookieConsent","mandatory"]],"blaze.org":[["set-cookie","accept_policy_regulation","1"]],"blog.naver.com":[["aeld","/contextmenu|selectstart|copy/"]],"blogvisaodemercado.pt":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"bluebell-railway.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"bluphim.com":[["nosiif","console.clear"]],"bmovies.fr":[["aeld","devtoolschange"]],"bmovies.ru":[["aeld","devtoolschange"]],"bolugundem.com":[["rmnt","script","reEnable"]],"bonn.sitzung-online.de":[["set-cookie","allris-cookie-msg","1"]],"book-n-drive.de":[["set-cookie","cookietypes","OK"]],"book.zongheng.com":[["aopr","document.oncontextmenu"],["ra","onselectstart"]],"borger.dk":[["set-cookie","BDK_CookieLawAccepted","false","","reload","1"]],"brainly.co.uk":[["set","jsData.hasVideoMeteringUnlogEnabled","undefined"],["set-local-storage-item","social-qa/machineId","$remove$"],["set-local-storage-item","simple-funnel-name","$remove$"]],"brainly.fr":[["set","jsData.hasVideoMeteringUnlogEnabled","undefined"],["set-local-storage-item","social-qa/machineId","$remove$"],["set-local-storage-item","simple-funnel-name","$remove$"]],"braunau.at":[["set-cookie","ris_cookie_setting","1"]],"breitachklamm.com":[["set-cookie","Consent","0"]],"brightonandhovealbion.com":[["set-session-storage-item","cookie_reject","true"]],"britannica.com":[["acs","document.createElement","admiral"]],"broncoshq.com":[["rmnt","script","XF"],["acs","$","btoa"]],"brunozimmer.de":[["set","realCookieBanner","undefined"]],"brutal.io":[["set","document.oncontextmenu","true"]],"bs-achern.de":[["set","realCookieBanner","undefined"]],"bylena.com":[["set-cookie","privacy_consent","1"]],"bzgbga.it":[["set-cookie","ris_cookie_setting","1"]],"bzgeisacktal.it":[["set-cookie","ris_cookie_setting","1"]],"caller.com":[["nostif","gnt_mol_oy"]],"calvinklein.co.uk":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"cam.start.canon":[["set-cookie","user_accepts_cookies","true"]],"camp-fire.jp":[["set-cookie","terms_agreement_popup_agreed","true","","reload","1"]],"carinfo.app":[["set-local-storage-item","userConsent","true"]],"carlson.fi":[["set-cookie","consentAdvertising","false"],["set-cookie","consentAnalytics","false"],["set-cookie","consentPersonalization","false"],["set-cookie","privacyExpiration","1"],["set-cookie","privacySettings","1"]],"catawiki.com":[["set-cookie","enable_analytical_cookies","false"],["set-cookie","enable_marketing_cookies","false"],["set-cookie","has_pending_cookie_consent_sync","true"]],"cbr.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"ccsaltosciliar.it":[["set-cookie","ris_cookie_setting","1"]],"celebzcircle.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"centrooceano.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"cheboygannews.com":[["nostif","gnt_mol_oy"]],"chessimprover.com":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aopr","disableSelection"]],"cifas.org.uk":[["set-cookie","cookiesetting","off"]],"citas.in":[["aeld","copy"]],"cklenk.de":[["set-cookie","cookie-preference","1"]],"clarin.com":[["nostif","_waitingAuth0Counter"]],"clasicotas.org":[["ra","oncontextmenu|onselectstart|ondragstart"]],"cleveland.com":[["aopr","__cmpGdprAppliesGlobally"]],"cmos.ie":[["rc","wcc-popup-overflow","body","stay"]],"coloradoan.com":[["nostif","gnt_mol_oy"]],"columbiasportswear.co.uk":[["set-cookie","Columbia_UK_emailPopup","1"]],"columbiasportswear.de":[["set-cookie","Columbia_DE_emailPopup","1"]],"columbiatribune.com":[["nostif","gnt_mol_oy"]],"comikey.com":[["aeld","contextmenu","undefined"]],"commondreams.org":[["set-cookie","popupShown","true"]],"comune.perca.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.salorno.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comunitacomprensorialevallepusteria.it":[["set-cookie","ris_cookie_setting","1"]],"consordini.com":[["rc","show--consent","body","stay"]],"cosasdemujer.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"cote.co.uk":[["set-cookie","cookie_consent","false"]],"creative-chemistry.org.uk":[["acs","document.oncontextmenu"]],"crichype.net":[["set","confirm","noopFunc"]],"crichype.org":[["set","confirm","noopFunc"]],"crosig.hr":[["set-cookie","cookie_control_consent","true"],["set-cookie","cookie_control_enabled_cookies","required"]],"cryptofalka.hu":[["set-local-storage-item","cookieConsent","1"]],"csiplearninghub.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"cvut.cz":[["set-local-storage-item","ctu-cm-a","0"],["set-local-storage-item","ctu-cm-m","0"],["set-local-storage-item","ctu-cm-n","1"]],"cyamidpulverulence530.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"cyberalert.gr":[["acs","document.onkeydown","disableCTRL"]],"daily-jeff.com":[["nostif","gnt_mol_oy"]],"dajanarodriguez.cz":[["set-cookie","popup-hide-cookie-consent","true"]],"darktranslation.com":[["aopw","stopPrntScr"]],"dassen-azara4.com":[["acs","document.oncontextmenu"]],"data.dtu.dk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"dba-oracle.com":[["ra","oncontextmenu|ondragstart|onselectstart"]],"dbschenker-seino.jp":[["set-cookie","allow-marketing-tracking","false"],["set-cookie","allow-statistical-tracking","false"],["set-cookie","privacy-notice-responded","0"],["set-local-storage-item","cookie_usage_acknowledged_2","1"]],"delaware.com.br":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"delawareonline.com":[["nostif","gnt_mol_oy"]],"deltatre.com":[["set-cookie","cookie-preferences-analytics","no"],["set-cookie","cookie-preferences-marketing","no"],["set-cookie","cookie-preferences-technical","yes"]],"denk-doch-mal.de":[["set","realCookieBanner","undefined"]],"derhoerbuchblog.de":[["set","realCookieBanner","undefined"]],"desbloqueador.pl":[["aopr","document.oncontextmenu"]],"desbloqueador.ru":[["aopr","document.oncontextmenu"]],"descarga-animex.fr":[["aeld","/^(?:contextmenu|keydown)$/"]],"descargatepelis.com":[["aeld","/keydown|mousedown/"],["set","document.oncontextmenu","trueFunc"]],"desrayaud-paysagistes.com":[["rc","unreadable-display","","stay"]],"digitaltrends.com":[["aopr","HTMLIFrameElement"]],"do0od.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doc.mbalib.com":[["ra","onbeforecopy|oncontextmenu|oncopy|ondragstart|onmouseup|onselect|onselectstart"]],"doctordle.org":[["set-cookie","doctordle_cookies_accepted","true"]],"dollarvr.com":[["aopr","nocontextmenu"],["acs","document.oncontextmenu"],["acs","document.ondragstart"]],"donneurdecellulessouches.be":[["rc","cookieconsent-active","body","stay"]],"dood.ru":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doods.co.uk":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doods.nl":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dooood.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dooood.es":[["set","console.clear","undefined"],["aeld","contextmenu"]],"download.ipeenk.com":[["acs","document.oncontextmenu"]],"dpp.cz":[["set-cookie","consent_analytics_storage","denied"],["set-cookie","consent_is_cleared_20230908","true"],["set-cookie","consent_is_set","true"]],"draisinenbahn.de":[["set","realCookieBanner","undefined"]],"dramaqu.com":[["acs","$","contextmenu"]],"dreamlandresort.com":[["aopr","alert"]],"drewag.de":[["set-cookie","allowAnalyticalCookies","false"],["set-cookie","allowMarketingCookies","false"],["set-cookie","cookiesAccepted","true"]],"drhorvath.de":[["set","realCookieBanner","undefined"]],"droidtekno.com":[["aopw","document.ondragstart"],["aopw","disableEnterKey"]],"ds2play.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dsworks.ru":[["set-local-storage-item","acceptCookies","true"]],"dualshockers.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"e-sushi.fr":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"easyjet.com":[["set-cookie","EASYJET_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","EASYJET_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["set-cookie","EASYJET_ENSIGHTEN_PRIVACY_easyJet_Marketing","0"]],"eboo.lu":[["set-cookie","PostAnalytics","0"]],"eding.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"ehlers-danlos.org":[["set-cookie","edsuk_coookie_control","4"],["set-cookie","edsuk_coookie_functional","1"]],"eikaforsikring.no":[["set-cookie","eika_consent_marketing","false"],["set-cookie","eika_consent_set","true"]],"ekiwi-blog.de":[["set","realCookieBanner","undefined"]],"ekiwi.de":[["set","realCookieBanner","undefined"]],"electronics.semaf.at":[["rc","show--consent","body","stay"]],"electronoobs.com":[["set-cookie","pd_cc","1"]],"elgiganten.dk":[["set","cicc.cookie_cat_statistic","true"]],"elliberal.cat":[["set-cookie","wpl_viewed_cookie","no"]],"eltomdistillery.com":[["set-cookie","_ageVerified","yes"]],"emall.by":[["set-local-storage-item","isAcceptCookiesNew","true"]],"emmi-aktifit.ch":[["set-cookie","aktifit-che-cookie-categories","essential"]],"engineeringleadership.xyz":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"englishradar.com":[["set","realCookieBanner","undefined"]],"epidemicsound.com":[["set-cookie","hasSeenCookieDisclosure","true"]],"erfurt-touristinformation.de":[["set","realCookieBanner","undefined"]],"esm-computer.de":[["set-cookie","cookie-preference","1"]],"estrelabet.bet.br":[["set-local-storage-item","cookieConsent","true"]],"etbygg.com":[["set-cookie","cmplz_banner-status","dismissed"]],"eujuicers.com.br":[["set-cookie","wsp_cc","1","","reload","1"]],"euroball.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"eurogamer.es":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"eurowings.com":[["set-cookie","ew_cookieconsent","1"],["set-cookie","ew_cookieconsent_optin_a","true"],["set-cookie","ew_cookieconsent_optin_b","true"]],"f1store4.formula1.com":[["set-cookie","mktck","false"]],"f2movies.ru":[["aost","console.clear"]],"fakings.com":[["set-cookie","mayor_edad","1","","reload","1"]],"fantasytagtree.com":[["aost","document.getElementById","nouplaod"],["ra","oncontextmenu","img[oncontextmenu=\"return false;\"]","stay"]],"farbenherz.com":[["set","realCookieBanner","undefined"]],"favi.org":[["set-cookie","__Host-cookie-consent","8","","reload","1"]],"fertagus.pt":[["set-cookie","FTCookieCompliance","1"]],"feucht-obsttechnik.de":[["set","realCookieBanner","undefined"]],"fhr.biz":[["set-cookie","privacyPolicyAccept","1","","reload","1"]],"figurepos.com":[["set-cookie","%22generic-cookie-agreement%22","true"]],"fild.de":[["set","realCookieBanner","undefined"]],"fillup.pl":[["set-cookie","efile-cookiename-74","1"]],"fimfiction.net":[["set","config.requireCookieConsent","false"],["aeld","load","adLazy"]],"finewinedelivery.co.nz":[["set-cookie","firstvisit","1"]],"firestream.site":[["set","console.clear","trueFunc"],["set","console.log","trueFunc"],["set","console.table","trueFunc"],["aeld","keydown","||_0x"]],"firstclasswatches.co.uk":[["set-cookie","cky-action","yes"],["set-cookie","cookieyes-functional","no"],["set-cookie","cookieyes-necessary","yes"],["set-cookie","cookieyes-other","no"]],"firstcoastnews.com":[["aeld","/^(mouseout|mouseleave)$/"]],"flamecontrol.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"flixhq.com":[["nostif","||null"],["aost","console.clear"]],"floridatoday.com":[["nostif","gnt_mol_oy"]],"fmovies.com.br":[["set-cookie","show_share","true"],["acs","document.oncontextmenu"],["acs","disableSelection","reEnable"],["aopr","document.ondragstart"],["aost","console.clear"]],"fmovies.net":[["set-cookie","show_share","true"],["acs","document.oncontextmenu"],["acs","disableSelection","reEnable"],["aopr","document.ondragstart"],["aost","console.clear"]],"fmovies.ru":[["set-cookie","show_share","true"],["acs","document.oncontextmenu"],["acs","disableSelection","reEnable"],["aopr","document.ondragstart"],["aost","console.clear"]],"fobizz.com":[["set","realCookieBanner","undefined"]],"folimage.fr":[["set-cookie","cookie_accept","none","","reload","1"],["set-cookie","cookie_visit","1"]],"followmikewynn.com":[["acs","document.oncontextmenu"],["aopr","document.onkeydown"]],"fontbrighton.co.uk":[["set-cookie","ce-cookie","N"]],"food.ndtv.com":[["set-cookie","ndtvfood_isSubscribed_elex_v1","no"]],"forcetools-kepmar.eu":[["set-cookie","epCookieConsent","0","","reload","1"]],"ford-bischoff-neumuenster.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-haefner-und-strunk-kassel.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-kohlhoff-mannheim.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-weege-bad-salzuflen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.de":[["set-cookie","cookieAcknowledged","true"]],"ford.lt":[["set-cookie","cookieAcknowledged","true"]],"formatatmak.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"forum.robsoft.nu":[["set-cookie","phpbb3_gc8h1_ca","1","","reload","1"]],"frauzuckerbroetchen.com":[["set","realCookieBanner","undefined"]],"fruugo.fr":[["set-cookie","consents","essential"]],"fxstreet.com":[["aopw","generatePopup"]],"galaxy.com":[["set-cookie","bannerDissmissal","true","","reload","1"],["set-local-storage-item","terms","true"]],"galaxykayaks.ro":[["set-cookie","cookies_and_content_security_policy","false"]],"gamenite.de":[["set","realCookieBanner","undefined"]],"gamepur.com":[["aopr","__cmpGdprAppliesGlobally"]],"gamingsinners.com":[["acs","$","test"]],"garbageday.email":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"gayhits.com":[["set-cookie","kt_tcookie","1"],["set-cookie","splash_Page_Accepted","true"]],"gdplayertv.es":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"geelyautomobile.by":[["set-cookie","hide-cookie-message","true"]],"geizhals.at":[["set-local-storage-item","dnt_message_shown","1"]],"gemeinde.klausen.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.proveis.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.stchristina.bz.it":[["set-cookie","ris_cookie_setting","1"]],"geotips.net":[["set","document.oncontextmenu","null"],["aeld","/keyup|keydown/","wpcc"],["set","onload","null"]],"getunleash.io":[["set-cookie","CookieConsent","true"]],"getyournec.scot":[["set-session-storage-item","cookiePref","1"]],"giochi.it":[["set-cookie","OptanonAlertBoxClosed","true"]],"gioco.it":[["set-cookie","OptanonAlertBoxClosed","true"]],"gmap-pedometer.com":[["set-cookie","patreonAnnouncementShown","true"]],"gobranded.com":[["set-cookie","BRANDED_COOKIES_CONSENT","DECLINED"]],"goldenstateofmind.com":[["nostif","concertAds"]],"gomovies.com.br":[["acs","document.oncontextmenu"]],"gomovies.it":[["acs","document.oncontextmenu"]],"google.com":[["set-local-storage-item","mapslitepromosdismissed","1"]],"grandprixradio.dk":[["set-cookie","advertisement-age-show-alcohol","false"],["set-cookie","advertisement-age-show-gamble","false"],["set-cookie","analytics_cookies","0"],["set-cookie","cookies_accepted","1","","reload","1"],["set-cookie","tracking_cookies","0"]],"grizly.ro":[["set-cookie","mCs-chk","1"]],"grunge.com":[["aeld","copy"]],"guiasaude.info":[["aeld","contextmenu"],["acs","document.onkeydown"]],"guide-du-perigord.com":[["set-cookie","cookieConsent-2023-03","false"]],"habuteru.com":[["aopw","document.oncontextmenu"]],"hajduk.hr":[["set-cookie","gdpr-cookies","1"]],"haleon-gebro.at":[["set-local-storage-item","cookiebanner:extMedia","false"],["set-local-storage-item","cookiebanner:statistic","false"]],"handelsbanken.se":[["set-cookie","shb-consent-cookies","false"],["set-cookie","shb-consent-cookies","true"]],"healthwell.dk":[["set-cookie","cookieaccept","required","","reload","1"]],"hebrew4christians.com":[["acs","document.oncontextmenu"],["ra","onselectstart|ondragstart"],["rmnt","script","disableSelection"]],"hello-rezka.de":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hello-rezka.it":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"heraldnews.com":[["nostif","gnt_mol_oy"]],"hexen-werkstatt.shop":[["set-cookie","epCookieConsent","0","","reload","1"]],"heysummit.com":[["set-cookie","hs_cookieconsent","true"]],"hianime.co.uk":[["set","devtoolsDetector.launch","noopFunc"]],"hianime.org":[["set","devtoolsDetector.launch","noopFunc"]],"hianimez.to":[["set","devtoolsDetector.launch","noopFunc"]],"hienzo.com":[["ra","oncontextmenu"]],"himovies.com.br":[["set-cookie","show_share","true"]],"hiring.amazon.com":[["set-local-storage-item","cookieConsent","true"]],"hockey-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"hoesjesdirect.nl":[["set-cookie","consent","denied"]],"hookahx.de":[["set","realCookieBanner","undefined"]],"hoosiertimes.com":[["nostif","gnt_mol_oy"]],"hotleaks.tv":[["aeld","contextmenu","preventDefault"],["aeld","keydown","123"]],"hqq.to":[["set","document.oncontextmenu","null"],["set","document.onkeydown","trueFunc"],["nostif","debugger"],["set","console.clear","noopFunc"]],"hsk.de":[["set-cookie","cookies-allowed","00000"]],"huddle.today":[["set-cookie","cmplz_rt_banner-status","dismissed"]],"hundgemacht.net":[["set","realCookieBanner","undefined"]],"ibuypower.com":[["set-cookie","AcceptUseCookie","Accept"]],"ichbindochnichthierumbeliebtzusein.com":[["set","realCookieBanner","undefined"]],"ilarahealth.com":[["set-cookie","cookies-accepted","true","","reload","1"]],"ilovetoplay.xyz":[["rmnt","script","debugger"]],"imagetwistcams.com":[["set-cookie","isVisitorsAgreementAccepted","1","","reload","1"]],"immersivelabs.online":[["set-cookie","cookie_preferences_set","true"]],"infobroker.de":[["set","realCookieBanner","undefined"]],"infowars.com":[["set-session-storage-item","stream","true"]],"intramed.net":[["set","adblock","false"]],"isekaipalace.com":[["noeval-if","alert"]],"jagledam.fr":[["aeld","contextmenu"],["set","document.oncontextmenu","null"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"jingdaily.com":[["set-cookie","newsletter","true"]],"jobs.cz":[["rc","show--consent","body","stay"]],"jobs2work.fr":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"jobs2work.it":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"jpnn.com":[["aopr","document.oncopy"]],"jsstore.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"kaembed.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"kaembed.fr":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"kaluga.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"karel.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"kark.com":[["aeld","scroll"]],"karlhoeffkes.de":[["set","realCookieBanner","undefined"]],"kastner-oehler.ch":[["set-cookie","consentAll","0"]],"kens5.com":[["aeld","/^(mouseout|mouseleave)$/"]],"khebikes.com":[["set-cookie","cookie-preference","1"]],"kickante.com.br":[["aeld","mouseleave"]],"kinston.com":[["nostif","gnt_mol_oy"]],"klassik-stiftung.de":[["set-cookie","KSW-Cookie","false"]],"klubnichka.live":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"kocbayi.com.tr":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"kokku-online.de":[["set-local-storage-item","cookiesMin","1"]],"kontaktbazar.at":[["set-cookie","ris_cookie_setting","1"]],"kozijnen-hijnekamp.nl":[["set-cookie","consent-cookies","1"]],"krampouz.com":[["set-cookie","cmplz_banner-status","dismissed"]],"kristallkraft-pferdefutter.de":[["set-cookie","_pandectes_gdpr","1"]],"kueren.de":[["set-cookie","Consent","0"]],"kupbilecik.pl":[["set-cookie","allow-cookie","1"],["set-cookie","cookie-functional","1"]],"kuroko-analyze.com":[["ra","oncontextmenu","body"]],"kvk.nl":[["set-cookie","allowAnalyticsCookiesKvK","0"],["set-cookie","allowTrackingCookiesKvK","0"],["set-cookie","cookieLevelCodeKVK","1"]],"kyoceradocumentsolutions.ch":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.fr":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"lawinsider.com":[["remove-cookie","tce","when","scroll"]],"lbms.cz":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"lcpdfr.com":[["acs","$","AdBlock"],["aopr","FuckAdBlock"]],"leki.com":[["set-cookie","cookie-preference","1"]],"lemarit.com":[["set","realCookieBanner","undefined"]],"leoschilbach.de":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_google_analytics","deny","","reload","1"]],"lesoir.be":[["aopr","abStyle"]],"libgen.org":[["nostif","appendMessage"]],"libgen.pl":[["nostif","appendMessage"]],"liquorcity.com":[["set-cookie","age_verification","1"]],"listenonrepeat.com":[["aopr","__cmpGdprAppliesGlobally"]],"lnw.com":[["set-session-storage-item","AgeRestrictionAccepted","true"]],"louisreynier.com":[["set","realCookieBanner","undefined"]],"louwman.nl":[["set-cookie","marketing_cookie_akkoord","0"],["set-cookie","site_cookie_akkoord","1"]],"ludeya.com":[["set-cookie","allowGetPrivacyInfo","true"]],"lulus.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"lvs.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"m.economictimes.com":[["set-session-storage-item","nudgeStickyBannerHide","true"]],"m.twitch.tv":[["set-cookie","tachyon-accepted-cookie-notice","true"],["set-session-storage-item","twilight.custom-smart-banner-dismissed","true"]],"mangaschan.net":[["aeld","contextmenu"]],"mangatoon.com.br":[["acs","document.oncontextmenu"]],"mantel.com":[["set-cookie","tracking_cookie","1"]],"manuals.annafreud.org":[["set-local-storage-item","COOKIE_CONSENT","no"]],"manyanet.org":[["set","realCookieBanner","undefined"]],"manyavar.com":[["set-cookie","consentTracking","false"]],"marionstar.com":[["nostif","gnt_mol_oy"]],"marktbaehnle.de":[["set-cookie","Consent","0"]],"mashed.com":[["aeld","copy"]],"materna.de":[["set-cookie","cookiebanner","0"]],"maxroll.gg":[["set","nitroAds.loaded","true"]],"mdpr.jp":[["ra","oncontextmenu|onmousedown|onselectstart"]],"med1.de":[["aopr","_sp_._networkListenerData"]],"medscape.com":[["remove-cookie","first_article_visited"]],"melty.fr":[["set","Didomi","noopFunc"]],"memoreclame.nl":[["rc","wcc-popup-overflow","body","stay"]],"merriam-webster.com":[["aopr","__cmpGdprAppliesGlobally"]],"millerandcarter.co.uk":[["set-cookie","ce-cookie","N"]],"milvus.io":[["set-cookie","CookieConsent","false"]],"mimaletamusical.blogspot.com":[["aopw","document.oncontextmenu"]],"minaprotocol.com":[["rmnt","script","realCookieBanner"]],"minfin.fgov.be":[["set-cookie","fedconsent","1"]],"misskey.systems":[["json-prune","ads.[].imageUrl"]],"mitarbeiter-app.de":[["rc","wcc-popup-overflow","body","stay"]],"mixmods.com.br":[["aopr","abde"]],"mk.yopo.work":[["json-prune","ads.[].imageUrl"]],"moebel-mahler-siebenlehn.de":[["set-cookie","optOutAccepted","true"],["set-cookie","optOutsTouched","true"]],"moneyexcel.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"monitorulneamt.ro":[["set-cookie","pum-172440","true"]],"motivationstipp.de":[["set","realCookieBanner","undefined"]],"movies4us.com":[["set-local-storage-item","cookiePolicy","true"]],"movies4us.fr":[["set-local-storage-item","cookiePolicy","true"]],"movies4us.ru":[["set-local-storage-item","cookiePolicy","true"]],"moviesjoy.nl":[["set-cookie","show_share","true"]],"moviesjoy.ru":[["set-cookie","show_share","true"]],"mt-milcom.blogspot.com":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"musicfeeds.com.au":[["aopr","__cmpGdprAppliesGlobally"],["acs","document.createElement","admiral"]],"musicindustryhowto.com":[["acs","document.oncontextmenu"],["acs","document.ondragstart"],["acs","document.addEventListener"]],"musti.no":[["set-cookie","mno_consent_necessary","granted","","reload","1"]],"mycall.no":[["set-cookie","mc_allow_tracking","0"]],"myloview.de":[["set-cookie","cookieConsent","necessary","","reload","1"]],"mypensiontracker.co.uk":[["set-cookie","complianceCookie","on"]],"myrewardspoints.com":[["set-cookie","MRP_cookiebanner","1"]],"n1mwq.org":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"napavalleybeverageco.com":[["set-cookie","age_verification","1"]],"napojecerveny.cz":[["set-cookie","DmCookiesAccepted","true"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"nationalholidays.com":[["set-cookie","cookiePermission","essential"]],"natlawreview.com":[["set-cookie","cookie-agreed","0"]],"nbcboston.com":[["aeld","scroll"]],"netu.de":[["set","devtoolsDetector.launch","noopFunc"]],"netu.es":[["set","devtoolsDetector.launch","noopFunc"]],"newsleader.com":[["nostif","gnt_mol_oy"]],"nfltraderumors.co":[["aopw","ondragstart"]],"nike.com.pe":[["set-cookie","consent","true","","reload","1"]],"noahpinion.blog":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"nomanssky.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"noovo.info":[["set-cookie","pushNotifications_popup_displayed_v2","true"]],"nordlicht-ev.de":[["set","realCookieBanner","undefined"]],"northumberland-walks.co.uk":[["ra","oncontextmenu|ondragstart|onselectstart"]],"nosdevoirs.fr":[["set-local-storage-item","simple-funnel-name","$remove$"]],"ntvspor.net":[["set-cookie","isPolicyCookieForAllPage","1"],["aeld","/contextmenu|selectstart/"]],"nwslsoccer.com":[["set-cookie","AcceptedCookies","1"]],"obagstore.pl":[["set-cookie","cookieConsentAnalyticsGranted","0"],["set-cookie","cookieConsentGranted","1"],["set-cookie","cookieConsentMarketingGranted","0"],["set-cookie","cookieConsentUserdata","0"]],"oberstdorf.de":[["set-cookie","Consent","0"]],"oculyze.net":[["set","realCookieBanner","undefined"]],"oead.at":[["set-cookie","cookieconsent_status_new","1"]],"ofdb.de":[["set-cookie","ofdb_werbung","Y","","reload","1"]],"omniplex.ie":[["set-cookie","a1wcc","NECESSARY"]],"omroepbrabant.nl":[["set-local-storage-item","psh:cookies-other","false"],["set-local-storage-item","psh:cookies-seen","true"],["set-local-storage-item","psh:cookies-social","true"]],"onderlingenederland.nl":[["set-cookie",".OG.Consent","no","","reload","1"]],"onlinegiftools.com":[["nano-sib","Clipboard","1000","0.001"]],"onlinelekarna.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"onna.kr":[["aeld","copy"],["aopw","document.oncontextmenu"],["aopw","document.ondragstart"],["aopw","document.onselectstart"]],"opedge.com":[["nostif","()","2000"]],"ophthalmologyadvisor.com":[["remove-cookie","hmmet"]],"oploverz.co.uk":[["rmnt","script","contextmenu"],["rmnt","style","user-select"],["aopw","check"]],"oploverz.net":[["rmnt","script","contextmenu"],["rmnt","style","user-select"],["aopw","check"]],"orivedensanomat.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"otakudesu.com":[["acs","document.oncontextmenu"]],"outdoorguide.com":[["aeld","copy"]],"palladiumboots.es":[["set-cookie","cookieconsent_status1","deny"]],"pancernik.eu":[["set-local-storage-item","df-cookies-allowed","true"],["set-local-storage-item","show_consent_modal","1"]],"paydirekt.de":[["set-cookie","paydirektCookieAllowed","false"]],"payeer-gift.ru":[["aopr","document.oncontextmenu"]],"pbs.org":[["set-cookie","popupIsClosed","1"]],"pcso-lottoresults.com":[["aopr","document.oncontextmenu"]],"peavinewineandspirit.com":[["set-cookie","age_verification","1"]],"pechinchou.com.br":[["set-local-storage-item","Pechinchou:CookiesModal","true"]],"pedalcommander.pl":[["set-local-storage-item","COOKIE_BANNER_CLICKED","true"]],"peliculas24.me":[["aopw","disableSelection"],["aeld","contextmenu"]],"pepperlive.info":[["set","console.clear","noopFunc"]],"perplexity.ai":[["set-session-storage-item","shouldShowAuthBannerAfterQuery","false"],["set-session-storage-item","signUpBannerDismissed","true"],["set-session-storage-item","appDownloadBannerDismissed","true"]],"pga.com":[["set-cookie","gdprPGA","true"]],"phimfit.com":[["nosiif","debugger"],["nostif","_detectLoop"]],"photo.codes":[["set-local-storage-item","cookiesAccepted","false"]],"photobooth.online":[["set-cookie","cookie_accepted","true"]],"photopoint.ee":[["set-cookie","consent-shown","1"]],"pinterest.com":[["set-local-storage-item","DWEB_PIN_IMAGE_CLICK_COUNT","$remove$"],["set-local-storage-item","unauthDownloadCount","$remove$"]],"piratewires.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"piusx-college.nl":[["set-cookie","hideCookieNotification","true","","reload","1"]],"pixers.com.tr":[["set-cookie","cookie_analytics","denied"],["set-cookie","cookie_marketing","denied"],["set-cookie","cookies_after_approvals","true"]],"plan.livefpl.net":[["rmnt","script","reviveScroll","excludes","self.__next"]],"planetagibi.com.br":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"]],"planner.kaboodle.co.nz":[["set-local-storage-item","isNotificationDisplayed","true"]],"player.pl":[["aeld","contextmenu","a"]],"plzenoviny.cz":[["set","realCookieBanner","undefined"]],"pngtree.com":[["set-local-storage-item","cps28","1"],["set-local-storage-item","gtag.consent.option","1"]],"pobre.es":[["aeld","","blockFuckingEverything"],["aeld","contextmenu","preventDefault"],["aost","eval","build.js"]],"pobre.net":[["aeld","","blockFuckingEverything"],["aeld","contextmenu","preventDefault"],["aost","eval","build.js"]],"pobre.org":[["aeld","","blockFuckingEverything"],["aeld","contextmenu","preventDefault"],["aost","eval","build.js"]],"pocketnow.com":[["remove-cookie","articlesRead"]],"poipiku.com":[["aeld","/contextmenu|copy|drag|dragstart/"]],"polsatnews.pl":[["aeld","copy"]],"polypane.app":[["set-local-storage-item","dismissed","true"]],"pontiacdailyleader.com":[["nostif","gnt_mol_oy"]],"popp.eu":[["set","realCookieBanner","undefined"]],"pornhub.com.br":[["rc","hasAdAlert","header"]],"portal.payment.eltax.lta.go.jp":[["set-cookie","xn_cookieconsent","false","","reload","1"]],"posterstore.it":[["set-cookie","synapse-cookie-preferences-set","true"]],"poudouleveis.gr":[["set-cookie","cc_ads","denied"],["set-cookie","cc_analytics","denied"],["set-cookie","cookie_ul","granted"]],"press-citizen.com":[["nostif","gnt_mol_oy"]],"pricespy.co.nz":[["set-cookie","privacy_settings","1"]],"printedwaste.com":[["set-local-storage-item","cookieConsent","true"]],"privacy.com.br":[["set-local-storage-item","privacy.com.br","accepted"]],"promotor-poz.kylos.pl":[["ra","oncontextmenu"]],"protan-elmark.it":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","rodopolicy","true"]],"protest.eu":[["set","BIA.ADBLOCKER","false"]],"pruegeltorten.tirol":[["set-cookie","cookie-preference","1"]],"pulltaps.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"puratos.nl":[["set-cookie","functionalCookieAccepted","true"]],"puratos.ru":[["set-cookie","functionalCookieAccepted","true"]],"pureinfotech.com":[["acs","jQuery","ai_adb"]],"pureselfmade.com":[["set","realCookieBanner","undefined"]],"putlocker.vip":[["set","devtoolsDetector.launch","noopFunc"]],"puzzle-shikaku.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-slant.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-sudoku.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.at":[["set-cookie","puzzleyou-at_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.ch":[["set-cookie","puzzleyou-ch_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.se":[["set-cookie","puzzleyou-se_cookies_consent_allowlist","0","","reload","1"]],"pzw.org.pl":[["set-cookie","cookiepolicyinfo_new2","true"]],"qastack.fr":[["set","useGDPR","false"]],"qatarairways.com":[["set-cookie","accepted_functional","yes"],["set-cookie","accepted_marketing","no"],["set-cookie","allow_the_cookie","yes"],["set-cookie","cookie_visited","true"],["set-cookie","drcookie","true"]],"qinetiq.com":[["set-cookie","cookie_pref_accept","1","","reload","1"],["set-cookie","cookie_pref_analytics","0"]],"quebueno.es":[["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"quecan.com":[["set-cookie","AgeVerificationPopup-sections--16804669849816__age-verification-popup","1"]],"quicksleeper.pl":[["aopr","document.oncontextmenu"]],"randivonal.hu":[["set-cookie","cookieconsent_dismissed","yes"]],"rappjmed.ch":[["set-cookie","cookie_notice_accepted","true"]],"rd-s.live":[["aeld","contextmenu"]],"readyforboarding.pl":[["set","realCookieBanner","undefined"]],"realenglishdrinks.co.uk":[["set-cookie","isAnAdult","true"]],"recambioscoche.es":[["aeld","mousedown","function(t)"]],"refurbished.nl":[["set-cookie","COOKIE_CONSENT","1","","reload","1"],["set-cookie","COOKIE_MARKETING","false"],["set-cookie","COOKIE_STATIC","false"]],"region-bayreuth.de":[["set-local-storage-item","GDPR:RBI:accepted","false"]],"reinhardstrempel.de":[["set","realCookieBanner","undefined"]],"reportergazeta.pl":[["set","document.oncontextmenu","null"],["set","document.onselectstart","null"],["set","document.ondragstart","null"]],"reservdelar24.se":[["aeld","mousedown","function(t)"]],"restofworld.org":[["rc","blocking-signup","html","stay"]],"restore.bg":[["set-cookie","consent_cookie_ue","1","","reload","1"]],"reutte.at":[["set-cookie","ris_cookie_setting","1"]],"ribbelmonster.de":[["acs","document.oncontextmenu"]],"ridee.bike":[["set","realCookieBanner","undefined"]],"ridgerockbrewco.ca":[["set-cookie","isAnAdult","true"]],"ried.at":[["set-cookie","ris_cookie_setting","1"]],"rittmeisterdestille.de":[["rmnt","script","realCookieBanner"]],"routenote.com":[["acs","onload"]],"royaleapi.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"rt.com":[["set-cookie","rt-cb-approve","true"]],"rvfhemp.com":[["set-cookie","isAnAdult","true"]],"sae.fsc.ccoo.es":[["set-cookie","config","1","","reload","1"]],"salzerkfz.de":[["set","realCookieBanner","undefined"]],"sander-apotheken.de":[["set-cookie","cokiban","true"]],"sbface.com":[["acs","check","debugger"],["nosiif","_0x"]],"sbflix.nl":[["acs","onload","contextmenu"]],"sbflix.pl":[["acs","onload","contextmenu"]],"sbflix.ru":[["acs","onload","contextmenu"]],"scheels.com":[["set-cookie","cookiesAccepted","true"]],"schoeck.com":[["set-cookie","cookieconsent_status","allow"]],"scholardata.sun.ac.za":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"scholarship-exchange.open.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"schwanger-in-bayern.de":[["set-cookie","required","1"]],"screenrant.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"scrolller.com":[["aeld","contextmenu"]],"scsun-news.com":[["nostif","gnt_mol_oy"]],"seacom.com":[["set-cookie","cookieConsent","accepted"]],"seir-sanduk.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seirsanduk.co.uk":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"senckenberg.de":[["set","realCookieBanner","undefined"]],"sendsips.com":[["set-cookie","age_verification","1"]],"serramenti-milano.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"sevenforums.com":[["aopr","__cmpGdprAppliesGlobally"]],"sextubespot.com":[["set-cookie","kt_tcookie","1"],["set-cookie","splash_Page_Accepted","true"]],"sflix.com.br":[["nostif","devtools"],["nosiif","/_0x|devtools/"],["aeld","contextmenu"]],"sflix2.com":[["nosiif","/_0x|devtools/"]],"sflix2.fr":[["nosiif","/_0x|devtools/"]],"sflix2.org":[["nosiif","/_0x|devtools/"]],"shop.bosscat.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.okogreen.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"sizyreelingly.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"skionline.fr":[["ra","oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"]],"skionline.ru":[["ra","oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"]],"skynet.certik.com":[["set-local-storage-item","cookie-consent-v2","false"]],"slideshare.net":[["acs","ab_tests"],["aeld","mouseleave","scribd_ad"]],"smart.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"smotreshka-tv.co.uk":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotreshka-tv.pl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrettv.co.uk":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrettv.fr":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrettv.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smow.com.br":[["set-cookie","__compliance_cookie_2","111","","reload","1"]],"snipp.gg":[["set-local-storage-item","hasConsent","false"]],"snowcrows.com":[["rmnt","script",".onerror"]],"softlist.com.ua":[["set-cookie","CookieConsent","true"]],"solarmovie.com.br":[["nostif","_detectLoop"]],"solarmovie.it":[["nostif","_detectLoop"]],"solarmovie.org":[["nostif","_detectLoop"]],"sonderversum.com":[["set","realCookieBanner","undefined"]],"songs-wayaku.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"southbendtribune.com":[["nostif","gnt_mol_oy"]],"southcoasttoday.com":[["nostif","gnt_mol_oy"]],"space-engineers.de":[["acs","document.getElementById","undefined"]],"spline.design":[["set-cookie","CookieConsent","false"]],"sportland.co.uk":[["set-cookie","amcookie_allowed","4"]],"springmerchant.com":[["set-local-storage-item","modal_cookies","1"]],"sseriga.edu":[["set-cookie","user_gave_consent","1"],["set-cookie","user_gave_consent_new","1"]],"statisticsanddata.org":[["set-cookie","cmplz_marketing","allow"]],"stonk-market.com":[["set","realCookieBanner","undefined"]],"store-philips.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"strangeloopcanon.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"streamingunity.co.uk":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"streamtape.es":[["aeld","contextmenu"],["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"stricken-online.com":[["set","realCookieBanner","undefined"]],"stripchat.com":[["set-cookie","isVisitorsAgreementAccepted","1","","reload","1"]],"strtape.fr":[["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"studiobookr.com":[["set-local-storage-item","cookiesAllowed","false"]],"supabase.com":[["set-local-storage-item","supabase-consent-ph","false"]],"sussytoons.co.uk":[["nosiif","/devtool|console\\.clear/"],["aeld","keydown","123"],["set","Object.prototype.disableMenu","false"]],"sussytoons.es":[["nosiif","/devtool|console\\.clear/"],["aeld","keydown","123"],["set","Object.prototype.disableMenu","false"]],"sussytoons.pl":[["nosiif","/devtool|console\\.clear/"],["aeld","keydown","123"],["set","Object.prototype.disableMenu","false"]],"suttonparkgroup.co.uk":[["set-cookie","cookieAccepted","1","","reload","1"]],"sweet24.de":[["set-cookie","cc-set","1","","reload","1"]],"swrng.de":[["set-cookie","CookieLayerDismissed","true"]],"szkolawohyn.pl":[["set","document.oncontextmenu","noopFunc"]],"taketaketake.com":[["set-local-storage-item","takex3.cookie-consent","declined"]],"tcsb.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"techinasia.com":[["remove-cookie","arts"]],"techkings.org":[["set","samDetected","true"]],"techlicious.com":[["acs","document.createElement","admiral"]],"techradar.com":[["set-cookie","FTR_Article_PageView","2"]],"techsini.com":[["acs","jQuery","preventDefault"]],"tecmundo.net":[["aopr","alert"]],"teknokutu.com":[["set-session-storage-item","cookieDeclined","true"]],"telegram.com":[["nostif","gnt_mol_oy"]],"telemundopr.com":[["aeld","scroll"]],"televid.top":[["aeld","contextmenu"]],"tesa.com":[["set-cookie","cookies_informed","true"]],"th-world.com":[["aeld","/contextmenu|select|copy/"],["ra","oncontextmenu|ondragstart|onselectstart|onkeydown|oncopy|oncut"],["aeld","","0x"]],"the-masters-voice.com":[["acs","disableSelection","reEnable"],["acs","document.ondragstart"],["aeld","contextmenu"],["aopw","stopPrntScr"]],"the-review.com":[["nostif","gnt_mol_oy"]],"the-scorpions.com":[["aopr","b2a"]],"theadelphileeds.co.uk":[["set-cookie","ce-cookie","N"]],"thealliance.ai":[["set-local-storage-item","AI Alliance_ReactCookieAcceptance_hasSetCookies","true"]],"theartofnakedwoman.de":[["aopw","intializemarquee"]],"thebeerlibrary.co.nz":[["set-cookie","isAnAdult","true"]],"thebeerstore.ca":[["set-cookie","cookies_popup","true"]],"thebignewsletter.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"thecalifornian.com":[["nostif","gnt_mol_oy"]],"thecardiologyadvisor.com":[["remove-cookie","hmmet"]],"thedewdropinnoxford.co.uk":[["set-cookie","ce-cookie","N"]],"thegamer.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"thememypc.net":[["ra","oncontextmenu","a#download_link","stay"]],"themonthly.com.au":[["remove-cookie","xbc"],["set-local-storage-item","rn","$remove$"]],"theweek.com":[["set-local-storage-item","kiosq_article_reset","$remove$"],["set-local-storage-item","kiosq_article_url_ack","$remove$"],["set-cookie","FTR_Article_PageView","2"]],"thizissam.in":[["nostif","popupScreen"]],"tidningenbalans.se":[["set-cookie","CookieConsent","true","","reload","1"]],"timesrecordnews.com":[["nostif","gnt_mol_oy"]],"tistory.com":[["aopw","document.oncontextmenu"]],"titantv.com":[["acs","document.createElement","admiral"]],"tivix.co":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tnt2-cricstreaming.pages.dev":[["set","confirm","noopFunc"]],"toll.no":[["set-cookie","cookieConsent","rejected"]],"tommy.com":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"top4mobile.co.uk":[["set-cookie","cookies-agreed","1"],["set-cookie","cookies-analytical","0"]],"top4mobile.nl":[["set-cookie","cookies-agreed","1"],["set-cookie","cookies-analytical","0"]],"topeuropix.org":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"topperlearning.com":[["aeld","/contextmenu|keydown/"]],"totemat.pl":[["aopr","disableSelection"]],"tracklock.gg":[["rmnt","script","reviveScroll","excludes","self.__next"]],"trentino.pl":[["ra","oncontextmenu"]],"triumphshop.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"troyer.it":[["set-cookie","tincx_cookie_notice_accepted","true"]],"truyenbanquyen.com":[["acs","document.oncontextmenu"],["aopw","disable_hot_keys"],["aopw","disable_copy"],["acs","reEnable"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"tryhackme.com":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"tulipize.com":[["set","realCookieBanner","undefined"]],"tutonaut.de":[["set","realCookieBanner","undefined"]],"tv-trwam.pl":[["set-cookie","ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["set-cookie","ARE_MARKETING_COOKIES_ACCEPTED","true"],["set-cookie","ARE_REQUIRED_COOKIES_ACCEPTED","true"],["set-cookie","HAS_COOKIES_FORM_SHOWED","true"]],"tvhay.com":[["rmnt","script","wccp_pro"]],"tvhay.pl":[["rmnt","script","wccp_pro"]],"tvhay.ru":[["rmnt","script","wccp_pro"]],"tvivu.com":[["nostif",".adsbygoogle?.loaded"]],"tvn.pl":[["aeld","contextmenu","a"]],"tvn7.pl":[["aeld","contextmenu","a"]],"tvonline24.net":[["aeld","contextmenu"]],"tvtun.com":[["aeld","contextmenu"]],"tvtv.us":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"tvzingvn.com":[["acs","onload","contextmenu"]],"tvzingvn.it":[["acs","onload","contextmenu"]],"two-notes.com":[["set-cookie","cookiesettings_status","allow"]],"tz-bedarf.de":[["set-cookie","cookie-preference","1"]],"ul.se":[["set-cookie","ulse_atc","no","","reload","1"]],"ultimate-bravery.net":[["nostif","()","2000"]],"umarex.com":[["set-cookie","dsgvo","1"]],"united-camera.at":[["set-cookie","acris_cookie_acc","1","","reload","1"]],"uptimeside.webnode.gr":[["acs","document.oncontextmenu"]],"usni.org":[["remove-cookie","STYXKEY_nh_count"],["remove-cookie","STYXKEY_pro_count"]],"valostore.se":[["set-local-storage-item","cookieConsent","necessary"]],"valuexh.life":[["set-cookie","cookie_accept","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"vamos-skateshop.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"vandalism-sounds.com":[["set-cookie","user_allowed_save_cookie","true"]],"vanmossel.it":[["set-cookie","gtmCookieAccepted","1"],["set-cookie","gtmCookiePopup","1"]],"vanmossel.pl":[["set-cookie","gtmCookieAccepted","1"],["set-cookie","gtmCookiePopup","1"]],"vcstar.com":[["nostif","gnt_mol_oy"]],"vegvesen.no":[["set-cookie","CookieConsent","false"]],"vemar.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"vembed.net":[["nosiif","devtool"],["nostif","devtool"],["rmnt","script","devtools"]],"vembed.pl":[["nosiif","devtool"],["nostif","devtool"],["rmnt","script","devtools"]],"venom.foundation":[["set-local-storage-item","terms","accepted"]],"vidara.co.uk":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidara.org":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidara.pl":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"videovard.de":[["set","console.clear","undefined"]],"vidmoly.com.br":[["rmnt","script","devtoolsDetector"],["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidplay.de":[["set","DisDevTool","undefined"]],"vidsrc.com":[["acs","RegExp.prototype.toString",".join(\"\")"],["aeld","keydown","123"],["nosiif","devtool"],["set","console.clear","trueFunc"],["set","DisableDevtool","noopFunc"],["set","devtoolsDetector.launch","noopFunc"]],"vietjetair.com":[["set-local-storage-item","accept_cookie_policy","true"]],"vinaurl.org":[["ra","onkeydown"]],"vinothekwaespi.ch":[["set-cookie","accept-selected-cookies","true","","reload","1"],["set-cookie","cookiePreferences","true"],["set-cookie","necessary","true"]],"visionias.net":[["acs","$","contextmenu"]],"vitalvibe.eu":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"vixcloud.co.uk":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"vixcloud.de":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"vixcloud.it":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"voeunblk.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"vokey.com":[["set-cookie","enewsOptin","1"]],"vpnmentor.com":[["nostif","bioEp.showPopup"]],"vu.lt":[["set-cookie","cookieconsent_status","allow"]],"vvdailypress.com":[["nostif","gnt_mol_oy"]],"vvide0.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"wagner-tuning.com":[["set-cookie","CookieLaw","on"],["set-cookie","CookieLaw_komfort","0"],["set-cookie","CookieLaw_personalisierung","0"],["set-cookie","CookieLaw_statistik 0"]],"wallpaper.com":[["set-cookie","FTR_Article_PageView","2"]],"wallpaperaccess.com":[["aeld","mousedown","dispatch"]],"wallpapercat.com":[["nano-sib","counter","1000","0.001"]],"walperdrinks.sk":[["set-cookie","site-agreement","1"]],"wattoo.dk":[["set-cookie","sscm_consent_widget","1"]],"waves.is":[["set-cookie","cookies_accepted","0"]],"waves4you.com":[["aost","String.prototype.charCodeAt","ai_"]],"wealthshop888.com":[["set-cookie","allowGetPrivacyInfo","true"]],"web2.0calc.fr":[["set-cookie","precmp","1","","reload","1"]],"weetabix.com":[["rc","wcc-popup-overflow","body","stay"]],"wentronic.net":[["set-cookie","COOKIES_ACCEPTED_new_1","essential","","reload","1"]],"wentronic.pl":[["set-cookie","COOKIES_ACCEPTED_new_1","essential","","reload","1"]],"werkenbijaswatson.nl":[["set-cookie","cookieConsent","allowed"]],"werkenbijkruidvat.be":[["rc","is-active-cookiebar","","stay"]],"whiskeyonline.co.nz":[["set-cookie","cx_age","true"]],"whowhatwear.com":[["set-cookie","FTR_Article_PageView","2"]],"wide-angle.nl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"wired.com":[["aopw","journeyCompilerGateway"]],"wisebuy.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"withpersona.com":[["set-local-storage-item","Do-not-share","true"],["set-local-storage-item","allow-cookies","false"]],"wjx.top":[["aopr","_0x1a4c"],["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"wobit.com.pl":[["set-cookie","accepted_cookies","functional","","reload","1"]],"worldairlineawards.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"wp-ninjas.de":[["set","realCookieBanner","undefined"]],"www-essexlive-news.translate.goog":[["rmnt","script","loc.hostname"]],"www.reddit.com":[["nostif","{e(n,t,r)}","30000"]],"xhamster.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster1.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster1.desi":[["set-cookie","cookie_accept","1"]],"xhamster10.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster11.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster12.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster14.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster15.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster16.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster18.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster2.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster2.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster20.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster4.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster42.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster5.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster7.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster7.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhofficial.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhplanet1.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xploo.com":[["set-cookie","Cookies","100","","reload","1"]],"yesmovies.org":[["set-cookie","show_share","true"]],"yesmovies.ru":[["set-cookie","show_share","true"]],"ymere.nl":[["set-cookie","euconsent","1"]],"yoyofilmeys.net":[["acs","document.oncontextmenu"]],"yuuki.me":[["nostif","adsbygoogle"]],"zapatos.pl":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zapatos.ru":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zbiornik.com":[["set-cookie","adult_confirm","1"]],"zeeebatch.blogspot.com":[["acs","document.onmousedown"]],"zefoy.com":[["nostif","debugger"]],"zeinpharma.de":[["set-cookie","cookie-preference","1"]],"zentalk.asus.com":[["set-cookie","isReadCookiePolicyDNT","Yes"],["set-cookie","isReadCookiePolicyDNTAa","true"]],"zeustranslations.blogspot.com":[["acs","alert","location.href"]],"zgywyd.cn":[["acs","document.oncontextmenu"]],"zingtvhd.ru":[["acs","onload","contextmenu"]],"zingvntv.co.uk":[["acs","onload","contextmenu"]],"zuerilaufcup.ch":[["set-cookie","disclaimeragreed","true"]],"zur-glocke.com":[["set","realCookieBanner","undefined"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
