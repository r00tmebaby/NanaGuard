/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"123movies.es":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"],["nostif","_0x"],["set","console.clear","noopFunc"]],"220.lv":[["set-cookie","CA_DT_V2","0","","reload","1"],["set-cookie","CA_DT_V3","0"]],"2219.net":[["aopr","clickNS"]],"45.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"69translations.blogspot.com":[["aopr","document.onselectstart"],["aopr","document.onmousedown"],["aopr","document.onclick"]],"aberdeennews.com":[["nostif","gnt_mol_oy"]],"actvid.rs":[["set-cookie","show_share","true"]],"adidas.ca":[["set-cookie","notice_preferences","2"]],"adidas.de":[["set-cookie","notice_preferences","2"]],"adult-tv-channels.click":[["set-session-storage-item","adp-closed","1"]],"aeotec.com":[["set","realCookieBanner","undefined"]],"afoto.cz":[["set-cookie","cookie_consent","yes"]],"afterclass.io":[["set-session-storage-item","adblock","true"]],"aiconsultores.com":[["set-cookie","cmplz_banner-status","dismissed"]],"aida64.co.uk":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"aida64.hu":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"airasia.com":[["set-cookie","gdpr-cookie-notification","closed"]],"airchina.it":[["set-cookie","EnableABTest","false"],["set-cookie","EnableFacebook","false"],["set-cookie","EnableGA","false"]],"all4running.com.br":[["set-cookie","cookieConsent","necessary","","reload","1"]],"alljigsawpuzzles.com.br":[["set-cookie","_pandectes_gdpr","1"]],"alljigsawpuzzles.fr":[["set-cookie","_pandectes_gdpr","1"]],"alljigsawpuzzles.it":[["set-cookie","_pandectes_gdpr","1"]],"allstarssportsbars.co.uk":[["set-cookie","consent_analytics","false"],["set-cookie","consent_received","true"]],"alpewa.com":[["set-cookie","tincx_cookie_notice_accepted","true"]],"alquilerordenadores.com":[["set","realCookieBanner","undefined"]],"alte-sennerei.com":[["set-cookie","Consent","0"]],"alttab.net":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"amway.com.br":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"amway.de":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"amway.org":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"ananda-yoga.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"anauk.net":[["ra","oncontextmenu|onselectstart|onselect|ondragstart|ondrag","body"]],"animaze.us":[["set-cookie","amcookie_allowed","1"]],"anisubindo.fr":[["aeld","keydown","preventDefault"],["aopr","document.onkeydown"],["aopr","document.oncontextmenu"],["aopw","disableSelection"]],"aniwave.nl":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"anix.co.uk":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"anker.com":[["set-cookie","accept_cookies","accepted"]],"anynouxines.barcelona":[["set-cookie","promptCookies","1"]],"app.uniswap.org":[["set-session-storage-item","hideMobileAppPromoBanner","true"]],"archiwumalle.pl":[["set-cookie","accept_political","1"]],"asdatyres.co.uk":[["set-cookie","all_cookies_allowed","1","","reload","1"],["set-cookie","required_cookies_set","1"]],"ashemaletube.com":[["set-cookie","rta_terms_accepted","true"]],"asiatv.co.uk":[["aeld","contextmenu"]],"asiatv.de":[["aeld","contextmenu"]],"asiatv.nl":[["aeld","contextmenu"]],"asiatv.pl":[["aeld","contextmenu"]],"ask4movie.net":[["ra","oncontextmenu","html"],["set","console.dir","noopFunc"],["set","navigator.userAgent",""]],"assosia.com":[["rc","wcc-popup-overflow","body","stay"]],"atman.pl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"aubi-plus.de":[["set-cookie","cm-accepted","true"]],"audi.ca":[["set-cookie","AUDI_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_Functional","0"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"]],"augustachronicle.com":[["nostif","gnt_mol_oy"]],"ausupreme.com":[["set-cookie","allowGetPrivacyInfo","true"]],"auto-doc.com.br":[["aeld","mousedown","function(t)"]],"auto-doc.ru":[["aeld","mousedown","function(t)"]],"autodoc.co.uk":[["aeld","mousedown","function(t)"]],"autodoc.fr":[["aeld","mousedown","function(t)"]],"autodoc24.com":[["aeld","mousedown","function(t)"]],"autodoc24.de":[["aeld","mousedown","function(t)"]],"autodoc24.net":[["aeld","mousedown","function(t)"]],"autodoc24.ru":[["aeld","mousedown","function(t)"]],"autohaus-diefenbach.de":[["set-cookie","hide-gdpr-bar","true"]],"automatiksysteme.com":[["set","realCookieBanner","undefined"]],"avemaria.edu":[["set-local-storage-item","amu_cookie_consent","1"]],"azlyrics.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"babiesrus.ca":[["set-cookie","cookieModal","false"],["set-cookie","isNewsletterPopupShown","false","","reload","1"]],"babyshop.com":[["set-cookie","BABY_MARKETING_COOKIES_CONSENTED","false"],["set-cookie","BABY_NECESSARY_COOKIES_CONSENTED","true"],["set-cookie","BABY_PERFORMANCE_COOKIES_CONSENTED","false"]],"backmarket.com":[["set-cookie","BM_Advertising","false","","reload","1"],["set-cookie","BM_Analytics","false"],["set-cookie","BM_User_Experience","true"]],"balticlivecam.com":[["acs","document.getElementById","none"]],"bammusic.com":[["set-cookie","analyticsCookiesAccepted","false"],["set-cookie","mandatoryCookiesAccepted","true"],["set-cookie","mediaCookiesAccepted","false"]],"bancaakros.it":[["set-cookie","consent_glassbox","false"],["set-cookie","consent_mktg","false"]],"banco.bradesco":[["set-cookie","cookieFunction","false"],["set-cookie","cookieMarketing","false"],["set-cookie","cookiePerformance","false"],["set-cookie","lgpd","true","","reload","1"]],"bandwagon.asia":[["ra","onmousedown|onselectstart|oncontextmenu",".article","complete"]],"bayern-gegen-gewalt.de":[["set-cookie","required","1"]],"bbc.com":[["set-local-storage-item","cvcConsentGiven","true"],["remove-cookie","xbc"],["nano-stb","viewClickAttributeId"]],"bcgame.vc":[["set-local-storage-item","ignore_cookie_warn","true"]],"bcorporation.net":[["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"beerballer.com":[["set-cookie","cmplz_banner-status","dismissed"]],"beforward.jp":[["set-cookie","wwwbf[appi]","1","","reload","1"]],"belisse-beauty.co.uk":[["set-cookie","cookie-preference","1"]],"bestbuy.com":[["set-local-storage-item","smartBannerDismissed","1"]],"beterbed.nl":[["set-local-storage-item","consentLevel","1"]],"betway.co.uk":[["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Marketing","0"],["set-cookie","betway-cookie-policy","true"],["set-cookie","bwui_cookieToastDismissed","true"]],"bigulnews.tv":[["aeld","/contextmenu|keydown|keyup|copy/"],["aopw","stopPrntScr"]],"bike-onlineshop.de":[["rc","disable","div","stay"]],"bingotingo.com":[["acs","document.oncontextmenu"],["aopw","disableEnterKey"]],"bizkaia.eus":[["set-cookie","pc_analitica_bizkaia","false"],["set-cookie","pc_preferencias_bizkaia","true"],["set-cookie","pc_tecnicas_bizkaia","true"],["set-cookie","pc_terceros_bizkaia","false"]],"blxxded.com":[["set-cookie","cookie_consent","true"]],"bmovies.co.uk":[["aeld","devtoolschange"]],"bonduelle.ru":[["set-cookie","cookie_locales","true"]],"brainly.net":[["set","jsData.hasVideoMeteringUnlogEnabled","undefined"],["set-local-storage-item","social-qa/machineId","$remove$"],["set-local-storage-item","simple-funnel-name","$remove$"]],"budgetair.com.br":[["set-cookie","cookieConsentLevel","functional"]],"bugzilla.mozilla.org":[["set-cookie","moz-consent-pref","yes"]],"buktube.com":[["set-cookie","parental-control","yes","","reload","1"]],"burlingtonfreepress.com":[["nostif","gnt_mol_oy"]],"butterfly-circus.de":[["set-cookie","cookie-preference","1"]],"bw.vdk.de":[["set-local-storage-item","vdk-iframe-enabled","true"],["set-local-storage-item","vdk-required-enabled","true"],["set-local-storage-item","vdk-status","accept"]],"byggern.no":[["set-cookie","cookies_accepted","yes"]],"c-parts.de":[["set","realCookieBanner","undefined"]],"calm.com":[["set-cookie","has-agreed-to-cookies","false"],["set-cookie","has-declined-cookies","true","","reload","1"]],"calvinklein.com":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"calvinklein.fr":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"cambridge-centre.fr":[["rc","unreadable-display","","stay"]],"camcaps.to":[["acs","RegExp","debugger"]],"camspider.com":[["set-local-storage-item","adblockNoticePermaDismiss","true"]],"camwhores.info":[["set-cookie","kt_agecheck","1"]],"canvascga.com":[["set","realCookieBanner","undefined"]],"cashback-cards.ch":[["set-cookie","sc-privacy-settings","true"]],"castleportobello.co.uk":[["set-cookie","ce-cookie","N"]],"celtadigital.com":[["aeld","contextmenu"]],"centrumrowerowe.pl":[["set-cookie","_cookieConsents","1","","reload","1"]],"cesaer.org":[["set-cookie","hideCookieNotification","true","","reload","1"]],"charleskeith.com":[["set-cookie","ck_dnt","1"],["set-cookie","consentTracking","true"],["set-cookie","consentTrackingPopupCookie","true"]],"chatfuel.com":[["set-cookie","__cf_gdpr_accepted","false"]],"cheaptickets.org":[["set-cookie","cookieConsentLevel","functional"]],"check24.de":[["set-cookie","c24consent","f","","domain",".check24.de","reload","1"]],"chipsaway.co.uk":[["set-cookie","cookies-configured","1"]],"chromeindustries.com":[["set-cookie","cookieconsent_status","allow"]],"cineman.pl":[["set-cookie","ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["set-cookie","ARE_MARKETING_COOKIES_ACCEPTED","true"],["set-cookie","ARE_REQUIRED_COOKIES_ACCEPTED","true"]],"cinemark.com.br":[["set-cookie","cookies_config","deny"]],"citaalen.com":[["set-cookie","cookiesAccepted","true"]],"claritin.ca":[["aopr","cookieconsent.Popup"]],"clearblue.com":[["set-cookie","kali-cc-agreed","true"]],"climatecentral.org":[["set-cookie","userCookieConsent","true"]],"clinicalondon.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"clk.ink":[["set","blurred","false"]],"clockks.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"coinbase.com":[["set-cookie","bytes_signup_modal_viewed","1"]],"columbiasportswear.es":[["set-cookie","Columbia_ES_emailPopup","1"]],"columbiasportswear.fr":[["set-cookie","Columbia_FR_emailPopup","1"]],"comprerural.com":[["aopr","append_link"]],"comune.braies.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.egna.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.prato.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sanpancrazio.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.silandro.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.valdivizze.bz.it":[["set-cookie","ris_cookie_setting","1"]],"concerto.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"conotoxia.com":[["set-cookie","acceptedCookiesRemarketing","required"]],"cool-etv.net":[["aeld","contextmenu"],["set","console.clear","noopFunc"]],"cordon.de":[["set-cookie","cookie-preference","1"]],"courier-journal.com":[["nostif","gnt_mol_oy"]],"cours-de-droit.net":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"courseware.cemc.uwaterloo.ca":[["ra","oncontextmenu"]],"cowcotland.com":[["rmnt","script","/adbl/i"]],"createchange.me":[["set","realCookieBanner","undefined"]],"crfop.gdos.gov.pl":[["set-cookie","RODOclosed","true"]],"crichype.fr":[["set","confirm","noopFunc"]],"criticalthinking.org":[["nostif","donation-modal"]],"croisieresendirect.com":[["set-cookie","accepted","1"]],"cut-tec.co.uk":[["set-cookie","termsfeed_pc1_notice_banner_hidden","true"]],"czech-server.cz":[["set-cookie","I6COMPARECOUNT","0"],["set-cookie","I6IISCOOKIECONSENT0","n","","reload","1"]],"d000d.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"d5render.com":[["set-cookie","accept_cookie_flag","1"]],"dacapopress.com":[["set-cookie","cookie__newsletter_popup","1"],["set-cookie","cookie__privacy_policy","1"]],"dailynews.us.com":[["acs","document.onselectstart"]],"damasko-watches.com":[["set-cookie","cookie-preference","1"]],"danielederosa.de":[["set","realCookieBanner","undefined"]],"daotranslate.com":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aeld","","undefined"]],"daotranslate.es":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aeld","","undefined"]],"daotranslate.ru":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aeld","","undefined"]],"data.bathspa.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"datezone.com":[["set-cookie","cookie_consent","necessary"]],"ddys.com.br":[["no-fetch-if","analytics"]],"ddys.de":[["no-fetch-if","analytics"]],"ddys.org":[["no-fetch-if","analytics"]],"de-de.eundl.de":[["set-cookie","cs","0"]],"decider.com":[["aopr","googletag.cmd"]],"dedicatedteacher.cambridge.org":[["set-cookie","ubcc","0"]],"demolandia.net":[["aopr","document.oncontextmenu"]],"depedlps.co.uk":[["acs","document.oncontextmenu"]],"der-schweighofer.de":[["set-cookie","cookie-preference","1"]],"desbloqueador.de":[["aopr","document.oncontextmenu"]],"desbloqueador.it":[["aopr","document.oncontextmenu"]],"descarga-animex.org":[["aeld","/^(?:contextmenu|keydown)$/"]],"desmoinesregister.com":[["nostif","gnt_mol_oy"]],"desser.co.uk":[["set","realCookieBanner","undefined"]],"deutschaj.com":[["acs","document.oncontextmenu"]],"developpez.com":[["acs","document.getElementById","cookie"]],"digi24.ro":[["aeld","copy"]],"digitalfernsehen.de":[["aeld","contextmenu"]],"digminecraft.com":[["set","placeAdsHandler","noopFunc"]],"dinamalar.com":[["set-cookie","agree","true"]],"dirtbikexpress.co.uk":[["set-cookie","_dbe_cookies_accepted","1"]],"dkb.blog":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"dnb.no":[["set-cookie","consent_level","2"]],"dnbeiendom.no":[["set-cookie","DNB_CookiePolicy_consentpopup","1"]],"dobrepitie.sk":[["set-cookie","site-agreement","1"]],"docs.paloaltonetworks.com":[["nostif","ad-block"]],"dodge-forum.eu":[["acs","$","offsetHeight"]],"dom.ru":[["set-cookie","cookieAccepted","true"]],"dood.net":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doods.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doodstream.pl":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dooood.fr":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dooood.org":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doply.net":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dorkgpt.com":[["set-local-storage-item","cookieConsent","false"]],"dramacute.co.uk":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"dramaqu.org":[["acs","$","contextmenu"]],"duluthtrading.com":[["set-local-storage-item","emailLightBox","true"]],"duracell.de":[["aeld","contextmenu"]],"dvag.de":[["set-cookie","dvag_cookies2023","1"]],"earlystage.pl":[["set-cookie","ad_storage","false"],["set-cookie","analytics_storage","false"],["set-cookie","functionality_storage","false"],["set-cookie","personalization_storage","false"],["set-cookie","security_storage","false"]],"eatsalad.com":[["set-cookie","userCookies","true"]],"ebc.com.br":[["ra","oncopy"]],"ebikelohr.de":[["set-cookie","COOKIES_NEWACCEPTED","1"]],"ecologi.com":[["set-cookie","ecologi_cookie_consent_20220224","false"]],"edn.com":[["aopr","googletag"]],"edostavka.by":[["set-local-storage-item","isAcceptCookiesNew","true"]],"elgiganten.se":[["set","cicc.cookie_cat_statistic","true"]],"elpicazo.org":[["set-cookie","cookies_aceptadas","true","","reload","1"]],"elrow.com":[["set-cookie","elrowCookiePolicy","yes"]],"elsate.com":[["set-cookie","phpbb3_4zn6j_ca","true"]],"elysian.press":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"emol.com":[["aopr","addLink"]],"enduro-mtb.com":[["set","SteadyWidgetSettings.adblockActive","false"]],"enso.de":[["set-cookie","allowAnalyticalCookies","false"],["set-cookie","allowMarketingCookies","false"],["set-cookie","cookiesAccepted","true"]],"enzobertini.ro":[["set-cookie","CakeCookie[cookie_consent_eb]","1"]],"epages.com":[["set","realCookieBanner","undefined"]],"epenta.sk":[["set-cookie","I6COMPARECOUNT","0"],["set-cookie","I6IISCOOKIECONSENT0","n","","reload","1"]],"epicdrama.eu":[["set-cookie","cookies_popup","1"]],"erco.com":[["set-session-storage-item","cookieMessageDisagree","true"]],"esderaiz.com":[["set","realCookieBanner","undefined"]],"esim.redteago.com":[["set-cookie","nCookieVisible","2"]],"espn.com":[["aeld","contextmenu"]],"esscctv.com":[["ra","onselectstart","html[onselectstart]"]],"esto.eu":[["set-local-storage-item","cookie_accepted","true"]],"eujuicers.it":[["set-cookie","wsp_cc","1","","reload","1"]],"eujuicers.ru":[["set-cookie","wsp_cc","1","","reload","1"]],"euranetplus.de":[["set","realCookieBanner","undefined"]],"europixhd.de":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"europixhd.nl":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"evernote.com":[["set-local-storage-item","accepts-cookie-notice","true"],["set-local-storage-item","cookie-notice-dismissed","true"]],"eversports.de":[["set-local-storage-item","dnt","1"],["set-local-storage-item","dnt_a","1"]],"exaktacreative.se":[["set-cookie","user_cookie_consent","1"]],"eyefitu.com":[["set-local-storage-item","cookie","true"]],"fabrykacukiernika.pl":[["set-cookie","Rodo","1"],["set-cookie","cookie_privacy_on","1"]],"faq.whatsapp.com":[["rc","hasCookieBanner","body","stay"]],"favi.co.uk":[["set-cookie","__Host-cookie-consent","8","","reload","1"]],"favi.fr":[["set-cookie","__Host-cookie-consent","8","","reload","1"]],"favi.nl":[["set-cookie","__Host-cookie-consent","8","","reload","1"]],"favi.pl":[["set-cookie","__Host-cookie-consent","8","","reload","1"]],"fdlreporter.com":[["nostif","gnt_mol_oy"]],"feelhealthy.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"feierstoff.de":[["set-cookie","Hotjar","false"],["set-cookie","ga","false"],["set-cookie","mnd-cookie-accepted-feierstoffde-54","1"]],"femibion.rs":[["set-local-storage-item","cookie","true"]],"ferroviando.com.br":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"feuerhexen.de":[["set","realCookieBanner","undefined"]],"fightful.com":[["nosiif","getComputedStyle"]],"figshare.wesleyan.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"filmora.wondershare.com":[["set-cookie","modalCloseDownloadCookie","2"]],"filmzone.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"fina.hr":[["set-cookie","ng-cc-accepted","accepted"]],"finewoodworking.com":[["set-cookie","taunton_user_consent_advertising","false"],["set-cookie","taunton_user_consent_analytics","false"],["set-cookie","taunton_user_consent_submitted","true"]],"firestream.it":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"firestream.net":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"firsty.app":[["set-local-storage-item","cookieConsent","true"]],"fjordd.com":[["aeld","contextmenu","preventDefault"],["rmnt","script","initPopup"]],"flinders.edu.au":[["set-cookie","gdpr_opted_in","true","","reload","1"]],"flixdrop.cyou":[["rmnt","script","location.pathname","includes","hv="]],"flixhq.fr":[["nostif","||null"],["aost","console.clear"]],"flixhq.nl":[["nostif","||null"],["aost","console.clear"]],"flixhq.org":[["nostif","||null"],["aost","console.clear"]],"flixhq.pl":[["nostif","||null"],["aost","console.clear"]],"floodlit.org":[["set-cookie","pum-937","true"]],"flow-in-yoga.de":[["set","realCookieBanner","undefined"]],"flynorse.com":[["set-cookie","N0_CONSENT","essential"]],"fnbrjp.com":[["nostif","広告"]],"followalice.com":[["set-cookie","cookie-consent","false"],["set-cookie","cookie-consent","true"]],"ford-ah-im-hunsrueck-simmern.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-duennes-regensburg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hatzner-karlsruhe.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hga-windeck.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-reinicke-muecheln.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-wieland-hasbergen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.fr":[["set-cookie","cookieAcknowledged","true"]],"form.fillout.com":[["set-local-storage-item","explicitCookieAccept-24149","true"]],"forums.sherdog.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"foryouehealth.de":[["set-cookie","amcookie_allowed","1"]],"fosspost.org":[["nostif","an_message","500"]],"foxteller.com":[["ra","oncontextmenu|oncopy|oncut","[id^=\"chapter\"]","complete"],["aeld","contextmenu","preventDefault"],["aeld","selectionchange",".html"],["set","document.onkeydown","noopFunc"]],"frameboxxindore.com":[["aeld","copy","pagelink"]],"freeforums.net":[["aeld","scroll"]],"fromsmash.com":[["set-cookie","_sucs","true"]],"fruugo.co.uk":[["set-cookie","consents","essential"]],"fruugo.ru":[["set-cookie","consents","essential"]],"fuschlamsee.at":[["set-cookie","ris_cookie_setting","1"]],"fydeos.io":[["set-cookie","cookie_consent","necessary"],["set-local-storage-item","is_accept_cookie","true"]],"g-star.com":[["set-cookie","coco","00011"],["set-local-storage-item","cn","true"]],"gamerant.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"gamoneinterrupted.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"gastongazette.com":[["nostif","gnt_mol_oy"]],"gdplayertv.fr":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"gdplayertv.it":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"gemeinde.stleonhardinpasseier.bz.it":[["set-cookie","ris_cookie_setting","1"]],"geomiq.com":[["set-local-storage-item","gtag_enabled","1"]],"geotastic.net":[["set-local-storage-item","privacy-policy-accepted","true"]],"geurwolkje.nl":[["set-cookie","_pandectes_gdpr","1"]],"ggwash.org":[["set","Object.prototype.bgOverlay","noopFunc"],["set","Object.prototype.fixedContentPos","noopFunc"]],"gigasport.de":[["set-cookie","consentAll","1"]],"gladiator-fightwear.com":[["set-cookie","cookie-preference","1"]],"glam.com":[["aeld","copy"]],"gledaitv.nl":[["aeld","contextmenu"],["nosiif","debugger"]],"gledaitv.pl":[["aeld","contextmenu"],["nosiif","debugger"]],"gledaitv.ru":[["aeld","contextmenu"],["nosiif","debugger"]],"globalfocusmagazine.com":[["rc","wcc-popup-overflow","body","stay"]],"gmx.com":[["set-cookie","euconsent-bypass","1"],["aeld","mouseout","openLayer"]],"gocarbon.co":[["set-cookie","age-checked","1"]],"golfdigest.com":[["aost","document.createElement","admiral"]],"golfschwung.com":[["set-cookie","Consent","0"]],"goodbakery.ru":[["acs","document.oncontextmenu"],["acs","jQuery","contextmenu"]],"gosanangelo.com":[["nostif","gnt_mol_oy"]],"gostanford.com":[["set-local-storage-item","cookies-accept","true"]],"goteborg2023.com":[["set-cookie","necessary_cookies","true"]],"greenbaypressgazette.com":[["nostif","gnt_mol_oy"]],"greenvilleonline.com":[["nostif","gnt_mol_oy"]],"guidingliterature.com":[["aopw","disableEnterKey"],["acs","document.ondragstart"],["acs","document.oncontextmenu"]],"hans-engelke.de":[["set","realCookieBanner","undefined"]],"happiful.com":[["set-local-storage-item","cookie_consent","false"]],"hdrezka.de":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hermesit.net":[["rc","wcc-popup-overflow","body","stay"]],"hianime.com":[["set","devtoolsDetector.launch","noopFunc"]],"hianime.it":[["set","devtoolsDetector.launch","noopFunc"]],"hiermitherz.de":[["set-cookie","cookie_alert","true"]],"himovies.co.uk":[["set-cookie","show_share","true"]],"himovies.com":[["set-cookie","show_share","true"]],"himovies.nl":[["set-cookie","show_share","true"]],"himovies.ru":[["set-cookie","show_share","true"]],"hindipix.com":[["set","console.debug","trueFunc"],["set","console.clear","trueFunc"]],"hindipix.org":[["set","console.debug","trueFunc"],["set","console.clear","trueFunc"]],"hodalump-ratschkatl.de":[["set-cookie","_pandectes_gdpr","1"]],"hoermann-kleinwalsertal.de":[["set-cookie","Consent","0"]],"holzkern.com":[["set-cookie","amcookie_allowed","1"]],"home.novel-gate.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"honest-broker.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"hongxiu.com":[["aeld","contextmenu"],["aopr","LBF.define"]],"hostfly.by":[["set-cookie","www_hostfly_by:443-s1-CookiePRO_cancel","1"]],"hotel-restaurant-pau.com":[["rc","unreadable-display","","stay"]],"huckmag.com":[["set-cookie","huck-newsletter-popup","true"]],"huebschundgut.de":[["set-cookie","CookieConsent","mandatory"]],"hukmatpro.it":[["aopw","hidekeep"]],"hukmatpro.ru":[["aopw","hidekeep"]],"hume.ai":[["set-cookie","cookieBar-cookies-accepted","true"]],"huss-licht-ton.de":[["set-cookie","huss_cookie_version","1"]],"hyte.com":[["set-cookie","AcceptUseCookie","Accept"]],"ideas0419.com":[["acs","document.oncontextmenu"]],"igta5.com":[["set-cookie","cookieAccepted","true"]],"ilsole24ore.com":[["aeld","mouseleave"]],"img.ly":[["set-cookie","privacySettings","1"]],"impotsurlerevenu.org":[["aopr","alerte_declanchee"]],"includehelp.com":[["acs","document.getElementById","banner"]],"industriemedien.at":[["set","realCookieBanner","undefined"]],"infotainment.mazdahandsfree.com":[["set-cookie","gdpr","accepted"]],"inicionet.com":[["set","realCookieBanner","undefined"]],"inmobi.com":[["set-cookie","cookie-pref","rejected"]],"insiderwire.com":[["set-cookie","cookie-consent","declined","","","reload","1"]],"inspections.vcha.ca":[["set-cookie","agreedToCookiesanon","1"]],"interviewgig.com":[["acs","document.onselectstart"]],"iplayerhls.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"iqos.com":[["set-cookie","iqos-age-verified","yes"]],"iqskitchen.de":[["set","realCookieBanner","undefined"]],"ircity.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"isolarcloud.com":[["set-local-storage-item","ISOLAR_COOKIE_VISIT","1"]],"istaf-indoor.de":[["set","realCookieBanner","undefined"]],"iway.ch":[["set","realCookieBanner","undefined"]],"izh1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"jacksonville.com":[["nostif","gnt_mol_oy"]],"jagledam.de":[["aeld","contextmenu"],["set","document.oncontextmenu","null"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"jamilacuisine.ro":[["aost","document.oncontextmenu"],["aost","Object","/(?=^(?!.*(jquery|inlineScript)))/"]],"jankarres.de":[["set","realCookieBanner","undefined"]],"javbix.com":[["acs","$","contextmenu"]],"jconline.com":[["nostif","gnt_mol_oy"]],"jenbach.at":[["set-cookie","ris_cookie_setting","1"]],"jimdosite.com":[["set-local-storage-item","cookies-selected","true"]],"jobs2work.com":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"jobs2work.de":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"jobskaro.com":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"journal.hr":[["set-cookie","jour_analytics","false"],["set-cookie","jour_cookies","1"],["set-cookie","jour_functional","true"],["set-cookie","jour_marketing","false"]],"joyella.com":[["rc","unreadable-display","","stay"]],"jp-m.banggood.com":[["rc","show-app-bar","","stay"]],"jpopsingles.eu":[["aeld","contextmenu","preventDefault"],["acs","document.onkeydown"],["aopw","stopPrntScr"],["acs","document.oncontextmenu"],["acs","jQuery","contextmenu"],["acs","document.addEventListener","keydown"]],"juejin.cn":[["aeld","copy","preventDefault"]],"jumpropeberlin.com":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_youtube","allow"],["set-cookie","ckies_google_ads_ct","deny"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_stripe","allow"],["set-cookie","ckies_tiktok_post","deny"],["set-cookie","ckies_youtube_video","allow"]],"juntadeandalucia.es":[["set-cookie","show_msg_cookies","false"]],"justanswer.co.uk":[["set-cookie","cbChecked","true"]],"justjoin.it":[["set-cookie","cookiesPopup","1"]],"kaembed.de":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"kaembed.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"kaembed.pl":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"kaggle.com":[["set-cookie","ACCEPTED_COOKIES","true"]],"kapoorwatch.com":[["set-cookie","ck-cp","accepted"]],"karsaz-law.com":[["acs","document.oncontextmenu","nocontextmenu"],["aopw","disableSelection"],["aopw","disableEnterKey"]],"kastner-oehler.de":[["set-cookie","consentAll","0"]],"kaystls.site":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"kieruneknorwegia.pl":[["set","realCookieBanner","undefined"]],"kika.ru":[["set-cookie","cookie_accepted","1"],["set-cookie","functional_cookies","1","","reload","1"]],"kinemaster.com":[["set-cookie","kinemaster-cookieconstent","1"]],"king5.com":[["aeld","/^(mouseout|mouseleave)$/"]],"kirannewsagency.com":[["aopw","disableSelection"],["acs","document.oncontextmenu"]],"kiuruvesilehti.fi":[["set-cookie","cm_ads","0"],["set-cookie","cm_analytics","0"],["set-cookie","cm_default","1"]],"kjell.com":[["set-cookie","ccValues","1"]],"klausen.eu":[["set-cookie","ris_cookie_setting","1"]],"klimwinkel.nl":[["set-local-storage-item","app_gdpr_consent","1"]],"komm-mit.com":[["set","realCookieBanner","undefined"]],"korona.by":[["set-cookie","infoPopupClosed","1"]],"kroger.com":[["set-local-storage-item","modal_terms_policy_update_notification","true"]],"kupkolo.cz":[["set-cookie","cookie-bar","0"]],"kyoceradocumentsolutions.de":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kytary.net":[["set-cookie","CookieConsent","0","","reload","1"]],"kytary.org":[["set-cookie","CookieConsent","0","","reload","1"]],"lameerooftop.com":[["set","realCookieBanner","undefined"]],"laptopmag.com":[["aopr","_sp_.mms.startMsg"]],"larian.com":[["set-cookie","cookie_accept","true"],["set-cookie","cookie_analytcs","false","","reload","1"]],"larsbengtsson.se":[["set-cookie","cookie_consent_v2_0_functional_third_party","1"],["set-cookie","cookie_consent_v2_0_marketing_third_party","0"],["set-cookie","cookie_consent_v2_0_required","1"]],"lazyrecords.app":[["set-local-storage-item","cookieConsent","false"]],"legab.it":[["set-cookie","CookieConsent","false"]],"lektury.gov.pl":[["set-cookie","GA_COOKIE_READINGS","false"]],"leo-pharma.nl":[["set-cookie","isCookiePolicySet","false"]],"leo-pharma.org":[["set-cookie","isCookiePolicySet","false"]],"leo-pharma.ru":[["set-cookie","isCookiePolicySet","false"]],"les-anges-gardiens.fr":[["rc","unreadable-display","","stay"]],"libgen.es":[["nostif","appendMessage"]],"liftshare.com":[["rc","show--consent","body","stay"]],"limametti.com":[["acs","document.oncontextmenu"]],"limogeshabitat.fr":[["set-cookie","Cookie_Category_analytics_2","false"],["set-cookie","Cookie_Category_save_2","true"],["set-cookie","Cookie_Category_system_1","true"]],"listeamed.net":[["nosiif","devtool"],["nostif","devtool"]],"liv.si":[["set-cookie","cookie-preference","1"]],"liveonsat.com":[["ra","oncontextmenu"]],"lohud.com":[["nostif","gnt_mol_oy"]],"lokalplus.nrw":[["set-cookie","banner","2","","reload","1"]],"lokercirebon.com":[["aeld","/contextmenu|keydown|dragstart/"]],"loungefly.com":[["set-cookie","welcome_modal_email_ts","1"]],"loverfans.com":[["set-cookie","mayor_edad","1"]],"lukesliquors.com":[["set-cookie","age_verification","1"]],"mack-design.com":[["set","realCookieBanner","undefined"]],"madeinbocholt.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"magtv.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"makeuseof.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"mamm.ch":[["set-cookie","_pandectes_gdpr","1"]],"mangaku.de":[["acs","$","contextmenu"],["aeld","contextmenu"]],"mangaku.es":[["acs","$","contextmenu"],["aeld","contextmenu"]],"mangaku.fr":[["acs","$","contextmenu"],["aeld","contextmenu"]],"mangaku.it":[["acs","$","contextmenu"],["aeld","contextmenu"]],"mangatoon.nl":[["acs","document.oncontextmenu"]],"marbles.com":[["set-cookie","cookieConsentSet","1"]],"marchtrenk.gv.at":[["set-cookie","ris_cookie_setting","1"]],"mash.ru":[["set-cookie","_mash_privacy_accepted","true"]],"mastersintime.com":[["set-local-storage-item","cookieConsentV2","1"]],"masuit.com":[["aopr","document.oncontextmenu"],["nosiif","debugger"]],"maxedtech.com":[["no-fetch-if","googlesyndication"],["no-xhr-if","googlesyndication"]],"maxkoch.de":[["set","realCookieBanner","undefined"]],"mcocguideblog.com":[["acs","disableselect","reEnable"]],"mcswineandliquors.com":[["set-cookie","age_verification","1"]],"mediathekviewweb.de":[["set-local-storage-item","allowCookies","true"]],"megaplay.buzz":[["set","devtoolsDetector.launch","noopFunc"]],"meteo.org.pl":[["ra","oncontextmenu"]],"microcenter.com":[["set-cookie","MicrocenterPrivacy","Accepted","","reload","1"]],"midwestgunworks.com":[["set-cookie","privBanner","1","","reload","1"]],"mifcom.co.uk":[["set-cookie","cookie_accepted","1","","reload","1"],["set-cookie","cookie_closed","1"]],"mifcom.com":[["set-cookie","cookie_accepted","1","","reload","1"],["set-cookie","cookie_closed","1"]],"milenio.com":[["aeld","copy"]],"milestone66.hu":[["set","cookie_alert_overlay","noopFunc"]],"milfzr.com":[["acs","$","juicyads"]],"mimaletadepeliculas.blogspot.com":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"miniminiplus.pl":[["aeld","contextmenu","a"]],"miriamkreativ.de":[["set","realCookieBanner","undefined"]],"miss21.estore.asgroup.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"mixingmonster.com":[["set","realCookieBanner","undefined"]],"mmamania.com":[["nostif","adsBlocked"]],"mmo-sankar.de":[["set","realCookieBanner","undefined"]],"modellbau-vordermaier.de":[["rc","disable","div","stay"]],"money.com":[["rc","open-pw","body","stay"]],"moonvalleynurseries.com":[["set-cookie","moon-v1-permissions","false"]],"more.com":[["set-cookie","AcceptedCookies","1"]],"moreisdifferent.blog":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"movie-web.app":[["noeval-if","debugger"]],"moviesjoy.com":[["set-cookie","show_share","true"]],"msk1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"mui.com":[["set-local-storage-item","docs-cookie-consent","essential"]],"mullgs.se":[["set-cookie","cc-accepted","2"]],"my2n.com":[["set-cookie","consent_panel","1"]],"mycare.de":[["set-cookie","cc_advertising","false"],["set-cookie","cc_analytics","false"],["set-cookie","cookie-policy-accepted-v3","true"]],"myschool.mos.ru":[["set-cookie","USER_AGREEMENT","1"]],"mythical.market":[["set-cookie","cookie-preferences-mythical","1"]],"n.exchange":[["set-local-storage-item","isUserAcceptCookiesPolicy","true"]],"naku.at":[["set","realCookieBanner","undefined"]],"naruko.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"naturseifen-moosmed.de":[["set","realCookieBanner","undefined"]],"nebenwerte-magazin.com":[["set","realCookieBanner","undefined"]],"neobux.com":[["ra","oncontextmenu|ondragstart|onselectstart"]],"nettv4u.com":[["aeld","contextmenu"],["aeld","copy"]],"netu.com":[["set","devtoolsDetector.launch","noopFunc"]],"netu.com.br":[["set","devtoolsDetector.launch","noopFunc"]],"newpharma.at":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"newpharma.be":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"newpharma.de":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"newsbook.com.mt":[["rc","wcc-popup-overflow","body","stay"]],"newscentermaine.com":[["aeld","/^(mouseout|mouseleave)$/"]],"newsherald.com":[["nostif","gnt_mol_oy"]],"ngelmat.net":[["nosiif","DevToolsOpen"]],"ngs24.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"nicequest.com":[["set-cookie","nicequest_optIn","1"]],"niederdorf.eu":[["set-cookie","ris_cookie_setting","1"]],"nigged.com":[["set-cookie","mayor_edad","1"]],"nny360.com":[["aeld","contextmenu","preventDefault"]],"nordkurier.de":[["set-local-storage-item","consentManager_shown","true"],["set-local-storage-item","consent_necessary","true"],["set-local-storage-item","consent_performance","false"]],"nusantararom.org":[["aeld","contextmenu"],["aeld","","keyCode"],["no-xhr-if","gif"]],"nwherald.com":[["aopr","HTMLIFrameElement"]],"odiarioonline.com.br":[["set","document.oncontextmenu","null"],["set","document.onkeydown","null"]],"ojas.de":[["set","realCookieBanner","undefined"]],"okuhanako.net":[["ra","oncontextmenu|onselectstart","body[oncontextmenu]","complete"]],"oled-info.com":[["set-cookie","awpopup_501941328","1"]],"omega-nuernberg.servicebund.com":[["set-cookie","cookieChoice","0"]],"onlineathens.com":[["nostif","gnt_mol_oy"]],"onlinejpgtools.com":[["nano-sib","Clipboard","1000","0.001"]],"onnibus.com":[["set-cookie","contentPersonalisationCookies","false"],["set-cookie","functionalCookies","true"],["set-cookie","marketingCookies","false"],["set-cookie","statisticalCookies","false"]],"open24.ee":[["set-local-storage-item","df-cookies-allowed","true"]],"openanesthesia.org":[["nostif",".LoginSection"]],"openfoam.org":[["set-cookie","cmplz_banner-status","dismissed"]],"opera.com":[["set-cookie","cookie_consent_analytics","false"],["set-cookie","cookie_consent_granted","true"],["set-cookie","cookie_consent_marketing","false"]],"oploverz.it":[["rmnt","script","contextmenu"],["rmnt","style","user-select"],["aopw","check"]],"oploverz.nl":[["rmnt","script","contextmenu"],["rmnt","style","user-select"],["aopw","check"]],"oploverz.org":[["rmnt","script","contextmenu"],["rmnt","style","user-select"],["aopw","check"]],"oploverz.pl":[["rmnt","script","contextmenu"],["rmnt","style","user-select"],["aopw","check"]],"opmaatzagen.nl":[["set-local-storage-item","cookieConsent","denied"]],"orbia.com":[["set-cookie","configured_cookie_consents","0"],["set-cookie","consent_analytics","false"],["set-cookie","consent_functional","true"],["set-cookie","consent_social","false"]],"ostrzegamy.online":[["set-cookie","rodo-acceptace","1"]],"otakudesu.com.br":[["acs","document.oncontextmenu"]],"otakudesu.es":[["acs","document.oncontextmenu"]],"otakudesu.nl":[["acs","document.oncontextmenu"]],"otakudesu.org":[["acs","document.oncontextmenu"],["acs","window.addEventListener","ctrlKey"]],"otakudesu.ru":[["acs","document.oncontextmenu"]],"otempo.com.br":[["aeld","copy"]],"overleaf.com":[["set-cookie","oa","0"]],"oxide.computer":[["set-cookie","ox-accept-tracking","false"]],"pacstall.dev":[["set-cookie","privacy-policy-accepted","1"]],"pagesix.com":[["aopr","googletag.cmd"]],"palladiumboots.com.br":[["set-cookie","cookieconsent_status1","deny"]],"palladiumboots.nl":[["set-cookie","cookieconsent_status1","deny"]],"palmbeachpost.com":[["nostif","gnt_mol_oy"]],"passport-photo.online":[["set-local-storage-item","cookieAccepted","true"]],"pastemagazine.com":[["set-cookie","pm_email_popup_status","1"]],"pccomponentes.pt":[["set-cookie","accept_cookie","1"]],"pedalcommander.de":[["set-local-storage-item","COOKIE_BANNER_CLICKED","true"]],"pedalcommander.it":[["set-local-storage-item","COOKIE_BANNER_CLICKED","true"]],"peugeot.pl":[["aeld","contextmenu"],["aopw","document.onkeypress"]],"pflegezeit-berlin.de":[["rc","dp--cookie-consent","body","stay"]],"picockpit.com":[["set","realCookieBanner","undefined"]],"pinterest.com.br":[["set-local-storage-item","DWEB_PIN_IMAGE_CLICK_COUNT","$remove$"],["set-local-storage-item","unauthDownloadCount","$remove$"]],"pjspub.com":[["set-local-storage-item","userConsented","false"]],"platnik.e-pity.pl":[["set-cookie","efile-cookie-128","1"]],"playbalatro.com":[["set-cookie","_gdpr_playbalatro","1"]],"playstationlifestyle.net":[["aopr","__cmpGdprAppliesGlobally"]],"playtiao.com":[["set-local-storage-item","tiao:analytics-consent","denied"]],"pobre.com.br":[["aeld","","blockFuckingEverything"],["aeld","contextmenu","preventDefault"],["aost","eval","build.js"]],"pokeos.com":[["nostif","pro-modal"],["no-fetch-if","doubleclick"]],"polycomp.bg":[["set-cookie","EU_COOKIE_LAW_CONSENT_POLY","true"]],"polyflore.net":[["nostif","adBlockDetected"]],"popular.info":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"pornhd8k.net":[["nosiif","debugger"]],"pornhub.fr":[["rc","hasAdAlert","header"]],"pornhub.nl":[["rc","hasAdAlert","header"]],"pornhub.ru":[["rc","hasAdAlert","header"]],"portal.by.aok.de":[["set-cookie","cookie-notification","ACCEPTED","","reload","1"]],"posterstore.ca":[["set-cookie","synapse-cookie-preferences-set","true"]],"potsdamerplatz.de":[["set-cookie","ppCookieConsent","false"]],"powerball.com":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"pracuj.pl":[["set-cookie","gpc_ad","0"],["set-cookie","gpc_analytic","0"],["set-cookie","gpc_audience","0"],["set-cookie","gpc_func","0"],["set-cookie","gpc_v","1"]],"prageru.com":[["set-cookie","cookie-status-analytics","false"],["set-cookie","cookies-functional","true"],["set-cookie","cookies-marketing","false"]],"prestobeer.com":[["set-cookie","age_verification","1"]],"priberam.org":[["aopr","document.documentElement.oncopy"]],"primosfinewine.com":[["set-cookie","age_verification","1"]],"productosmanchegos.es":[["set-cookie","cmplz_banner-status","dismissed"]],"prolocotarquinia.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"protan-elmark.com.br":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","rodopolicy","true"]],"protopage.com":[["aost","document.createElement","createAdblockFallbackSubscribeToProtopageAdDiv"]],"psychologiazycia.com":[["acs","document.oncontextmenu"],["acs","disableselect","reEnable"]],"puratos.pl":[["set-cookie","functionalCookieAccepted","true"]],"putlocker.com":[["aopw","document.oncontextmenu"]],"puzzle-dominosa.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-jigsaw-sudoku.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-masyu.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-shakashaka.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.de":[["set-cookie","puzzleyou-de_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.fi":[["set-cookie","puzzleyou-fi_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.it":[["set-cookie","puzzleyou-it_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.lu":[["set-cookie","puzzleyou-lu_cookies_consent_allowlist","0","","reload","1"]],"qiangwaikan.com":[["aopr","document.oncontextmenu"],["aopr","disableSelection"]],"queisser.de":[["set-cookie","cookieConsent","true"]],"quora.com":[["set","ansFrontendGlobals.settings.signupWallType","undefined"]],"radioony.fm":[["set","pageService.initDownloadProtection","noopFunc"]],"randombrick.de":[["set","realCookieBanner","undefined"]],"randomstory.org":[["aopw","disableSelection"]],"rapidonline.com":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"rdsong.com":[["ra","oncontextmenu|ondragstart|onselectstart","body"]],"realme.com":[["set-local-storage-item","hadAccept","1"]],"rechtsanwalt-nierfeld.de":[["set","realCookieBanner","undefined"]],"reclutamiento.defensa.gob.es":[["set-cookie","MDEF_COOKIE_CONSENT_1595777","true","","reload","1"]],"reforge.com":[["set-cookie","accept_cookies","accepted"],["set-local-storage-item","framerCookiesDismissed","true"]],"remanga.org":[["set-cookie","cookie-accepted","true"],["set-local-storage-item","cookieConsent","true"]],"repair.wd40.com":[["set-cookie","has-seen-cookie-notice","true","","reload","1"]],"repository.lincoln.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"retailmarketingpartner.nl":[["set-cookie","consent-cookies","1"]],"rezervesdalas24.lv":[["aeld","mousedown","function(t)"]],"rheumatologyadvisor.com":[["remove-cookie","hmmet"]],"riacurrencyexchange.es":[["set-cookie","CookiesConfigurationRia","false","","reload","1"]],"romprovider.com":[["aopw","document.oncontextmenu"]],"royalhuisman.com":[["set-cookie","framework_cookies_date","1","","reload","1"]],"rozbor-dila.cz":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"roztoczanskipn.pl":[["aeld","contextmenu"]],"rudderstack.com":[["set-local-storage-item","rudderstack_cookie_consent","true"]],"russia-tv.online":[["set-cookie","cookieIsAgree","true"]],"sabishiidesu.com":[["acs","document.onkeydown"],["aopw","document.oncontextmenu"]],"safedeliveries.nl":[["set-cookie","cookieConsentGranted","1"]],"saintjoursexpertmaritime.com":[["rc","unreadable-display","","stay"]],"saltairebrewery.com":[["set-cookie","sb-over-18","true"]],"sam.si":[["set-cookie","gdpr-allow-analytics","false"],["set-cookie","gdpr-allow-marketing","false"],["set-cookie","gdpr_popup_shown","true"]],"sambowman.co":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"samplerite.cn":[["set-cookie","consented","false"]],"samplerite.com":[["set-cookie","consented","false"]],"santacristina.eu":[["set-cookie","ris_cookie_setting","1"]],"saos.org.pl":[["set","CookiePolicy","{}"],["set","CookiePolicy.init","noopFunc"]],"saubusse-thermes.com":[["rc","unreadable-display","","stay"]],"sberbank.com":[["set-cookie","sber.pers_notice_en","1"],["set-cookie","sbrf.pers_notice1","1"]],"sberdisk.ru":[["set-local-storage-item","cookieIsAccepted","true"]],"sbflix.org":[["acs","onload","contextmenu"]],"scheidegger.nl":[["set-cookie","privacy_level","1"]],"sctimes.com":[["nostif","gnt_mol_oy"]],"search.upright-music.dk":[["set-cookie","cookieConsent","true"]],"searchenginewatch.com":[["acs","jQuery","#sign-up-popup"]],"searchforsites.co.uk":[["set-cookie","cookieCompliancyAccepted","1"]],"secfi.com":[["set-cookie","CookieConsent","true"]],"securityconference.org":[["set-cookie","MSC_Cookiebanner","false"]],"seekingalpha.com":[["set-local-storage-item","__tp-gaAccount","disabled"]],"seikatsu-hyakka.com":[["acs","document.oncontextmenu"]],"seir-sanduk.fr":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seller.samsungapps.com":[["set-cookie","COOKIE_CONSENT","TRUE"],["set-cookie","GA_CONSENT","FALSE"]],"semafor.com":[["set-session-storage-item","floating-sign-up-dismissed","true"]],"semianalysis.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"sfd.pl":[["rc","show--consent","body","stay"]],"sflix.co.uk":[["nostif","devtools"],["nosiif","/_0x|devtools/"],["aeld","contextmenu"]],"sflix.es":[["nostif","devtools"],["nosiif","/_0x|devtools/"],["aeld","contextmenu"]],"sflix.to":[["set-cookie","show_share","true"]],"sflix2.ru":[["nosiif","/_0x|devtools/"]],"sheboyganpress.com":[["nostif","gnt_mol_oy"]],"shingfangpastry.com":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.5soap.com":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.ac-zaun-center.de":[["set-cookie","cookie-preference","1"]],"shop.norns.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shoutcast.com":[["set-cookie","cookie_consent","1"]],"shufoo.net":[["rc","is-hidden","body"]],"sicherheitstraining24.de":[["set-cookie","consented_cookie_types","required"]],"sidedoorliquors.com":[["set-cookie","age_verification","1"]],"signisalc.org":[["set","realCookieBanner","undefined"]],"simsherpa.com":[["set-cookie","acceptadvertising","no"],["set-cookie","acceptanalytics","no"],["set-cookie","acceptfunctional","yes"]],"skepticalraptor.com":[["set-cookie","jetpack_post_subscribe_modal_dismissed","true"]],"skionline.com.br":[["ra","oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"]],"skionline.net":[["ra","oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"]],"smartfilmbase.se":[["set-cookie","allow-all","0","","reload","1"],["set-cookie","analysis-cookies","0"],["set-cookie","user-cookies-set","1"]],"smartwielen.lu":[["set-session-storage-item","terms-and-policy-accepted","true"]],"smotrettv.com.br":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrettv.de":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrim-tv.com.br":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrim-tv.es":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrufilm.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"solana.com":[["set-cookie","consent","rejected"],["set-local-storage-item","cookie_consent","1"]],"sovetromantica.com":[["set","fuckAdBlock","trueFunc"]],"spanishdict.com":[["set","SD_BLOCKTHROUGH","true"]],"sportland.it":[["set-cookie","amcookie_allowed","4"]],"srf.nu":[["set-cookie","CookieConsent","necessary"]],"ssuathletics.com":[["acs","document.querySelector","adblock"]],"stadtwerke-weilburg.de":[["set-cookie","cookiehinweis","2"]],"starcourier.com":[["nostif","gnt_mol_oy"]],"stonehouserestaurants.co.uk":[["set-cookie","ce-cookie","N"]],"store.claptoncraft.co.uk":[["set-cookie","age-checked","1"]],"store.kde.org":[["rmnt","script","btnHtml"],["nano-stb","count"]],"strcloud.in":[["aeld","contextmenu"]],"streamily.com":[["set-cookie","cookie-notice","true"],["set-cookie","email_modal","true"]],"streamingunity.fr":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"streamingunity.it":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"streamtape.fr":[["aeld","contextmenu"],["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"streamtape.it":[["aeld","contextmenu"],["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"strefabiznesu.pl":[["set","Didomi","noopFunc"]],"strip.chat":[["set-cookie","isVisitorsAgreementAccepted","1","","reload","1"]],"strtape.co.uk":[["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"strtape.de":[["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"studentapan.se":[["set-cookie","accepted_cookie_policy","true"]],"suitapp.de":[["set","realCookieBanner","undefined"]],"supercamps.co.uk":[["set-cookie","SuperCamps.CookieConsent","True","","reload","1"]],"suzuki.at":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"swissboardforum.ch":[["set-cookie","cookies-eu-comfort","false"],["set-cookie","cookies-eu-necessary","true"],["set-cookie","cookies-eu-statistics","false"]],"swissborg.com":[["set-cookie","gatsby-gdpr-google-tagmanager","true"]],"swisscard.ch":[["set-cookie","sc-privacy-settings","true"]],"swissmilk.ch":[["set-cookie","closedCookieBanner","true"]],"sysdream.com":[["set-cookie","tarteaucitron","false"]],"talkingpointsmemo.com":[["remove-cookie","tpm_article_views"],["remove-cookie","tpm_page_views"]],"tango-flores.de":[["set","realCookieBanner","undefined"]],"tanzschulebogner.de":[["set","realCookieBanner","undefined"]],"taxfreespirits.nz":[["set-cookie","isAnAdult","true"]],"teachoo.com":[["aeld","keydown"]],"techlearning.com":[["set-cookie","FTR_Article_PageView","2"]],"tecsafe.de":[["set","realCookieBanner","undefined"]],"tek.fi":[["set-cookie","tek-cookie-agreed","2"]],"texthelp.com":[["set-cookie","texthelp_cookie_consent","yes"],["set-cookie","texthelp_cookie_consent_in_eu","0"]],"theartofnakedwoman.co.uk":[["aopw","intializemarquee"]],"theartofnakedwoman.it":[["aopw","intializemarquee"]],"theateramrand.de":[["set-cookie","cookiebanner","essential"]],"thebarreltap.com":[["set-cookie","m_a_v","1"]],"thedailyjournal.com":[["nostif","gnt_mol_oy"]],"thefashionspot.com":[["aopr","__cmpGdprAppliesGlobally"]],"thegardnernews.com":[["nostif","gnt_mol_oy"]],"thegreenmantrumpington.com":[["set-cookie","ce-cookie","N"]],"thehacker.recipes":[["set-cookie","__gitbook_cookie_granted","no"]],"thehouseofportable.com":[["aeld","/contextmenu|selectstart/"]],"thehub21.com":[["set-local-storage-item","hub-cp","true"]],"theintrinsicperspective.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"thejazzcafe.com":[["set-cookie","complianceCookie","true"],["set-cookie","gaconsent","true"]],"thejunctionharborne.co.uk":[["set-cookie","ce-cookie","N"]],"thelivingroomcinema.co.uk":[["set-cookie","a1wcc","NECESSARY"]],"theolivepress.es":[["remove-cookie","issuem_lp"]],"theonenz.co.nz":[["set-cookie","isAnAdult","true"]],"theroom.lol":[["set-local-storage-item","room-welcome-ack-v1","1"]],"thewhitehartpirbright.co.uk":[["set-cookie","ce-cookie","N"]],"thw.de":[["set-cookie","gsbbanner","0"]],"tieku.fi":[["set","cicc.cookie_cat_statistic","true"],["set","cicc.cookie_cat_functional","true"],["set","cicc.cookie_cat_marketing","true"]],"tiktok.com":[["set-session-storage-item","webapp_first_open_cta","1"],["aeld","contextmenu","preventDefault"]],"timeanddate.de":[["aeld","load","ad-wrap"]],"timeshighereducation.com":[["aost","Drupal.CTools.Modal.show","/(^(?!.*(injectedScript|makeProxy).*))/"]],"today.com":[["rc","styles_stuck__gtILi","","stay"]],"tomshw.it":[["nostif","bioEp.showPopup"]],"top-yp.de":[["set-cookie","tncookieinfo","1","","reload","1"]],"top4mobile.com.br":[["set-cookie","cookies-agreed","1"],["set-cookie","cookies-analytical","0"]],"topeuropix.es":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"topeuropix.fr":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"topeuropix.it":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"toshiba-aircondition.com":[["set-cookie","COOKIEBAR_1945","0"]],"toyota.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","yes"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"triumphtechnicalinformation.com":[["set-local-storage-item","ROCUMENTS.cookieConsent","true"]],"truckmall.sk":[["set-cookie","cookies_confirmed","1","","reload","1"]],"turbo1.co":[["aeld","contextmenu"]],"tuscaloosanews.com":[["nostif","gnt_mol_oy"]],"tvhay.it":[["rmnt","script","wccp_pro"]],"tvzingvn.co.uk":[["acs","onload","contextmenu"]],"tw.puma.com":[["set-cookie","allowGetPrivacyInfo","true"]],"twgtea.com":[["set-local-storage-item","LOCALSTORAGE_COOKIE_ALLOW","false"]],"twinkietown.com":[["nostif","adsBlocked"]],"ubisys.de":[["set","realCookieBanner","undefined"]],"udo-lermann.de":[["set","realCookieBanner","undefined"]],"ufa1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"ukbrewerytours.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"ulevapronohy.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"un-block-voe.net":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"understandingsociety.ac.uk":[["set-cookie","ga-disable-UA-xxxxxxxx-x","true"]],"unknowncheats.me":[["aeld","DOMContentLoaded","style.display"]],"unsplash.com":[["set-cookie","cookie_consent","false"]],"uranium.io":[["set-cookie","accepted-cookies","false"]],"uslsoftware.com":[["aeld","contextmenu"]],"utorrentgamesps2.blogspot.com":[["acs","document.onkeydown"],["ra","onselectstart"]],"vanmossel.org":[["set-cookie","gtmCookieAccepted","1"],["set-cookie","gtmCookiePopup","1"]],"vater-it.de":[["set-cookie","pz_cookie_consent","true"]],"vcfrankfurt.de":[["set","realCookieBanner","undefined"]],"vectorsoft.de":[["set","realCookieBanner","undefined"]],"veev.to":[["acs","RegExp","console"]],"venea.net":[["aeld","","ads"]],"verfwebwinkel.be":[["set-cookie","pmStorage","1"]],"versicherungsmakler-leistenschneider.de":[["set","realCookieBanner","undefined"]],"vetzoo.se":[["set-cookie","vzs_consent_necessary","granted","","reload","1"]],"vidara.es":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidmoly.de":[["rmnt","script","devtoolsDetector"],["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidsrc.net":[["acs","RegExp.prototype.toString",".join(\"\")"],["aeld","keydown","123"],["nosiif","devtool"],["set","console.clear","trueFunc"],["set","DisableDevtool","noopFunc"],["set","devtoolsDetector.launch","noopFunc"]],"vidsrc.pl":[["acs","RegExp.prototype.toString",".join(\"\")"],["aeld","keydown","123"],["nosiif","devtool"],["set","console.clear","trueFunc"],["set","DisableDevtool","noopFunc"],["set","devtoolsDetector.launch","noopFunc"]],"vienna-interiors.at":[["set","realCookieBanner","undefined"]],"vilson.com":[["set-cookie","allowGetPrivacyInfo","true"]],"virpe.com":[["aopr","document.oncontextmenu"],["ra","onselectstart"]],"vivaldi.com":[["set-cookie","acceptedCookies","true"]],"voe-un-block.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voe-unblock.de":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voe-unblock.it":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voe-unblock.ru":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voedingswaardetabel.nl":[["set","document.oncontextmenu","null"],["set","document.onselectstart","null"]],"voila.ca":[["set-cookie","privacyAccepted","true"]],"voskey.icalo.net":[["json-prune","ads.[].imageUrl"]],"vsetv.click":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"waitrosecellar.com":[["set-cookie","wtr_cookie_consent","1"],["set-cookie","wtr_cookies_advertising","0"],["set-cookie","wtr_cookies_analytics","0"],["set-cookie","wtr_cookies_functional","0"]],"wasp.sh":[["set-cookie","wasp-cookies-consent","false"]],"wayfair.de":[["set-cookie","user_cookie_prefs","1"]],"wearconferences.com":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"webhallen.com":[["set-local-storage-item","marketingConsent","false"],["set-local-storage-item","necessaryConsent","true"],["set-local-storage-item","personalisationConsent","false"]],"webworm.co":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"weetabix.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"weibo.com":[["nowoif","layerid","1"]],"wentronic.co.uk":[["set-cookie","COOKIES_ACCEPTED_new_1","essential","","reload","1"]],"wewantjusticedao.org":[["set-cookie","gdpr-analytics-enabled","false"]],"wgrz.com":[["aeld","/^(mouseout|mouseleave)$/"]],"whitepages.com":[["set-cookie","accepted_tos_via_serp","true"]],"whoisnovel.com":[["acs","document.oncontextmenu"]],"wifikaernten.at":[["set-cookie","consent","true"]],"wikibious.com":[["aopr","disable_copy"],["aopw","document.oncontextmenu"]],"windows101tricks.com":[["aopr","__cmpGdprAppliesGlobally"],["set","better_ads_adblock","0"]],"winmeen.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"wko.at":[["set-cookie","consent","true"]],"womanandhome.com":[["set-cookie","FTR_Article_PageView","2"]],"woolpackstokemandeville.co.uk":[["set-cookie","ce-cookie","N"]],"wpplugins.tips":[["acs","jQuery","contextmenu"]],"wps.com":[["set-cookie","ga-disable-UA-126693142-3","true"],["set-cookie","gdpr","1"]],"wstream.nl":[["aeld","contextmenu","preventDefault"],["aopr","onload"]],"wt-onlineakademie.de":[["set","realCookieBanner","undefined"]],"wusa9.com":[["aeld","/^(mouseout|mouseleave)$/"]],"x.com":[["aeld","mouseleave"]],"xanimu.com":[["rmnt","script","adblock"]],"xe.gr":[["nostif","modal"]],"xhamster.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster1.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster10.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster10.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster12.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster13.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster13.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster14.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster14.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster15.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster15.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster15.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster16.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster18.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster2.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster20.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster3.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster3.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster4.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster42.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster46.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster46.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster5.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster7.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster7.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhtab4.com":[["set-cookie","cookie_accept","1"]],"xhtotal.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xtv.cz":[["nostif","pgblck"]],"yesmovies.nl":[["set-cookie","show_share","true"]],"yogainspires.co.uk":[["set","realCookieBanner","undefined"]],"youcom.com.br":[["set-cookie","termos-aceitos","ok"]],"yoyofilmeys.fr":[["acs","document.oncontextmenu"]],"yoyofilmeys.it":[["acs","document.oncontextmenu"]],"yuppow.com":[["set-cookie","show_share","true"]],"yvonnebennetti.com":[["set-cookie","allow_cookie","false"],["set-cookie","MCPopupClosed","yes"]],"zagorz.pl":[["set-cookie","cookies-policy","1"],["set-cookie","cookies-view","1"]],"zapatos.de":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zappatos.de":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zappatos.fr":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"ziare.com":[["aeld","copy"]],"zingvntv.nl":[["acs","onload","contextmenu"]],"zouboulis.com":[["set","realCookieBanner","undefined"]],"zukunft-jetzt.deutsche-rentenversicherung.de":[["set-cookie","complianceCookie","accepted"]],"zulily.com":[["nostif","loginModal","500"]],"zwembaddekouter.be":[["set-cookie","allowCookies","1","","reload","1"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
