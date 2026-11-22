/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"123movies.ru":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"],["nostif","_0x"],["set","console.clear","noopFunc"]],"14.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"173.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"1day.sk":[["set-cookie","verified4","1"]],"1mg.com":[["aeld","mouseout"]],"35.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"4media.com":[["aeld","contextmenu"]],"53.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"72.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"89.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"aa.com":[["set-cookie","cookie_banner","closed"]],"abc7news.com":[["aeld","scroll"]],"accace.cz":[["set","realCookieBanner","undefined"]],"accountantsdaily.com.au":[["set-local-storage-item","articleGateData","$remove$"]],"adidas.es":[["set-cookie","notice_preferences","2"]],"admit-one.co.uk":[["set-cookie","a1wcc","all"]],"advnture.com":[["set-cookie","FTR_Article_PageView","2"]],"aegon.es":[["set-cookie","AceptacionCookieAnalitica","no"],["set-cookie","AceptacionCookiePersonalizacion","yes"],["set-cookie","AceptacionCookiePublicidad","no"],["set-cookie","Event","accept"]],"afi-ipl.org":[["set","realCookieBanner","undefined"]],"ag-vmeste.ru":[["set-cookie","mos_cookie","true"]],"agrointel.ro":[["aeld","copy"]],"airastana.com":[["set-cookie","NADevGDPRCookieConsent_portal_2","1"]],"airlinercafe.com":[["acs","jQuery","ads"]],"akaanseutu.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"akademie-management.de":[["set","realCookieBanner","undefined"]],"akool.com":[["set-cookie","cookie-permission","0","","reload","1"]],"aliexpress.com":[["aeld","mouseleave"]],"all4running.es":[["set-cookie","cookieConsent","necessary","","reload","1"]],"all4running.fr":[["set-cookie","cookieConsent","necessary","","reload","1"]],"all4running.it":[["set-cookie","cookieConsent","necessary","","reload","1"]],"all4running.net":[["set-cookie","cookieConsent","necessary","","reload","1"]],"allegro.org":[["set-cookie","gdpr_permission_given","0"]],"allegro.pl":[["set-cookie","gdpr_permission_given","0"],["set-cookie","LithiumFunctionalCookiesAccepted","2"],["set-cookie","LithiumNecessaryCookiesAccepted","1"],["set-cookie","LithiumPerformanceCookiesAccepted","2"],["set-cookie","LithiumTargetingCookiesAccepted","2"]],"alljigsawpuzzles.es":[["set-cookie","_pandectes_gdpr","1"]],"alljigsawpuzzles.nl":[["set-cookie","_pandectes_gdpr","1"]],"alpen.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"amai.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"amway.pl":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"anacondastores.com":[["set-cookie","hideCookiesNotification_AU_en","1"]],"analizy.pl":[["acs","setTimeout","newsletterPopup"]],"anikototv.to":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"animedao.ru":[["aopr","devtoolsDetector"]],"aniwave.org":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"anmarlube.com":[["set-cookie","promptCookies","1"]],"anns.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"aphorisma-verlag.eu":[["set-cookie","alertCookie","true"]],"app.klarna.com":[["set-local-storage-item","safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["set-local-storage-item","safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["set-local-storage-item","safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"]],"aprendeinglessila.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"armenia.travel":[["set-cookie","cp","true"]],"art-harder.de":[["set-cookie","Consent","0"]],"artemide.com":[["set-cookie","amdcookiechoice","necessary"]],"arthurcantina.com":[["set-cookie","isAnAdult","true"]],"articlesmania.me":[["ra","oncontextmenu"],["acs","document.onkeydown"]],"artsy.net":[["aeld","scroll"]],"asfour.ch":[["set","realCookieBanner","undefined"]],"asia2tv.com":[["aeld","contextmenu"]],"asiatv.net":[["aeld","contextmenu"]],"asics.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"ask4movie.com":[["ra","oncontextmenu","html"],["set","console.dir","noopFunc"],["set","navigator.userAgent",""]],"ask4movie.com.br":[["ra","oncontextmenu","html"],["set","console.dir","noopFunc"],["set","navigator.userAgent",""]],"ask4movie.ru":[["ra","oncontextmenu","html"],["set","console.dir","noopFunc"],["set","navigator.userAgent",""]],"atw.jp":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"audaciousdefaulthouse.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"audiologyresearch.org":[["rmnt","script","document.oncontextmenu"]],"auto24parts.com":[["set-local-storage-item","show_consent_modal","1"],["set-local-storage-item","user_consents","[]"]],"autodoc.es":[["aeld","mousedown","function(t)"]],"autodoc24.co.uk":[["aeld","mousedown","function(t)"]],"autodoc24.com.br":[["aeld","mousedown","function(t)"]],"auziliquor.com.au":[["set-cookie","age-checked","1"]],"avdelphi.com":[["aeld","","_0x"],["set","f12lock","false"],["nosiif","debugger"]],"avell.com.br":[["set-cookie","cookiesConsent","true"]],"avianca.com":[["set-cookie","airTRFX_cookies","accepted"]],"axionnews.live":[["set-local-storage-item","cookieConsent","true"]],"b-immobree.be":[["set-cookie","cookie-consent-status","0"]],"babiceurican.cz":[["set","realCookieBanner","undefined"]],"bad-scherer.de":[["set-cookie","_cookieaccept","1"],["set-cookie","_cookietools","1"]],"balsamico.shop":[["set","realCookieBanner","undefined"]],"bamf.de":[["set-cookie","cookiebanner","0"]],"bananacraft.serveminecraft.net":[["set-local-storage-item","cookiesAccepted","yes"]],"bangbros.com":[["set-cookie","iAgree","1"]],"banglainsider.com":[["acs","document.onkeydown"],["acs","reEnable","killcopy"],["ra","oncontextmenu"]],"bargaintown.ie":[["set-cookie","cookie-bar","no"]],"barnardos.org.uk":[["set-cookie","consentBanner","closed"]],"barntgreeninn.co.uk":[["set-cookie","ce-cookie","N"]],"barracred.com.br":[["set","realCookieBanner","undefined"]],"battle-one.com":[["aopr","document.oncontextmenu"],["aopr","disableSelection"]],"baumarkt-vogl.at":[["set","realCookieBanner","undefined"]],"bdcraft.net":[["set","adsbygoogle","null"]],"beaconjournal.com":[["nostif","gnt_mol_oy"]],"bennettrogers.mysight.uk":[["set-local-storage-item","hasConsent","false"]],"berrybase.de":[["set-cookie","cookie-preference","1"]],"bettersafe.at":[["set-cookie","COOKIEBAR_1","0"]],"bflix.co.uk":[["aeld","keydown","[arguments];"],["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"bharatavani.in":[["aeld","/cut|copy|paste|contextmenu/"]],"bhbikes.com":[["set-cookie","COOKIELEGAL_BH_V2","N"]],"bhoomtv.it":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"bigbarrel.co.nz":[["set-cookie","isageverified","true"]],"billerbeck.shop":[["set-cookie","cookie-preference","1"]],"bitburger.com":[["set-cookie","cookies-general","true"]],"bitso.com":[["set-cookie","bitso_cc","1"]],"blablacar.com.tr":[["set-cookie","_cookies_v2","1"]],"blaze.es":[["set-cookie","accept_policy_regulation","1"]],"blaze.ru":[["set-cookie","accept_policy_regulation","1"]],"blikk.hu":[["ra","style","body","stay"]],"blog.codingconfessions.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"bmovies.org":[["aeld","devtoolschange"]],"bnet-internet.cz":[["set-cookie","AnalyticsScripts","false","","reload","1"],["set-cookie","MarketingScripts","false"]],"brawlstats.com":[["set-cookie","accept-cookies","0"]],"brobasket.com":[["set-cookie","accept_age","accepted"]],"brooklyneagle.com":[["acs","document.oncontextmenu","nocontextmenu"]],"budgetair.es":[["set-cookie","cookieConsentLevel","functional"]],"bumbaj.sk":[["set-cookie","site-agreement","1"]],"bunq.com":[["set-local-storage-item","framerCookiesDismissed","true"]],"c315.cn":[["ra","oncontextmenu|onselectstart|oncut|oncopy"]],"calteixidor.cat":[["set-cookie","promptCookies","1"]],"campusbrno.cz":[["set-cookie","cookie-m-analytics","0"],["set-cookie","cookie-m-marketing","0"],["set-cookie","cookie-m-personalization","0"]],"camwhores.video":[["set-cookie","kt_agecheck","1"]],"caucasus-naturefund.org":[["set","realCookieBanner","undefined"]],"centrumher.eu":[["acs","jQuery","undefined"]],"changelly.com":[["set-local-storage-item","SET_COOKIES_APPROVED","true"]],"checkwx.com":[["set-cookie","cookieshown","1"]],"chinaimportal.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"cineplanet.com.pe":[["set-cookie","cookie-consent","0"]],"cjonline.com":[["nostif","gnt_mol_oy"]],"cleantechnica.com":[["set-cookie","ccpaconsent","1"]],"cmlink.com":[["set-cookie","isAgreeCookie_UK","true"]],"cms-wheels.com":[["set-cookie","cmswheels_cookie","no"]],"coffeeapps.ir":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"cometh-consulting.com":[["set-cookie","cmplz_banner-status","dismissed"]],"compagniefruitiere.fr":[["set","realCookieBanner","undefined"]],"compra.fredolsen.es":[["set-cookie","cookiesDirective_","N"]],"computacenter.com":[["set-cookie","consent_seen","1"]],"computerenhance.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"comune.naz-sciaves.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.plaus.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sesto.bz.it":[["set-cookie","ris_cookie_setting","1"]],"cork.arccinema.ie":[["set-cookie","a1wcc","NECESSARY"]],"correosexpress.pt":[["set-cookie","msg_cookie_CEX","true"]],"criticalsoftware.com":[["set-local-storage-item","c15t","1"]],"cssreference.io":[["aopr","carbonLoaded"]],"cut.ac.cy":[["set-cookie","analyticsCookiesAllowed","false"],["set-cookie","cookieModalShown","true"]],"d.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"dailymotion.com":[["set-cookie","cookie_policy_closed","1","","reload","1"]],"dailynewsview.com":[["aopr","document.onselectstart"],["acs","document.onselectstart"]],"dailyrecord.com":[["nostif","gnt_mol_oy"]],"daltonmaag.com":[["set-cookie","dama.cookieConsent","false"]],"daotranslate.nl":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aeld","","undefined"]],"darwin.cam.ac.uk":[["set-cookie","cookieBanner","false"]],"daysoftheyear.com":[["aopr","googletag"]],"de-sjove-jokes.dk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"debenhams.com":[["set-cookie","dw_is_new_consent","true"]],"dehemspub.co.uk":[["set-cookie","ce-cookie","N"]],"delaware.net":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"delaware.nl":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"delker-optik.de":[["set-cookie","cookie-preference","1"]],"depedlps.fr":[["acs","document.oncontextmenu"]],"deribit.com":[["set-local-storage-item","appCardSeen","true"]],"desbloqueador.co.uk":[["aopr","document.oncontextmenu"]],"desbloqueador.com":[["aopr","document.oncontextmenu"]],"descarga-animex.ru":[["aeld","/^(?:contextmenu|keydown)$/"]],"designmynight.com":[["set-cookie","consent","0"]],"destinationwineandliquor.com":[["set-cookie","age_verification","1"]],"deutsch-wagram.gv.at":[["set-cookie","ris_cookie_setting","1"]],"dhbbank.de":[["set-cookie","UserCookieLevel","1"],["set-cookie","cookiePreference","1"]],"dicionariocriativo.com.br":[["aopr","getSelection"]],"diffus.de":[["set-cookie","tracking","yes"]],"digitalparking.city":[["set-local-storage-item","cookies-accepted","true"]],"dirk.nl":[["set-cookie","cookies-banner-shown","true"]],"divineyogaschool.blogspot.com":[["acs","document.oncontextmenu"]],"djelfa.info":[["aopr","document.onmousedown"],["aopw","document.oncontextmenu"],["ra","onselectstart"]],"docs.unsloth.ai":[["set-cookie","__gitbook_cookie_granted","no"]],"doctors.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"doods.de":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doods.it":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doods.net":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doods.ru":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dooood.nl":[["set","console.clear","undefined"],["aeld","contextmenu"]],"drafthound.com":[["set-local-storage-item","acceptsAnalyticsCookies","false"],["set-local-storage-item","acceptsNecessaryCookies","true"]],"dramaqu.fr":[["acs","$","contextmenu"]],"drinkcentrum.sk":[["set-cookie","accept_age","1"]],"drum.um.edu.mt":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"duckduckgo.com":[["set-local-storage-item","duckaiHasAgreedToTerms","true"]],"duffelblog.com":[["aopr","__cmpGdprAppliesGlobally"],["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"duft-werk.de":[["set","realCookieBanner","undefined"]],"duneawakening.th.gl":[["nostif",".getState();","4500"]],"dushu.qq.com":[["aopr","document.oncontextmenu"],["aopr","document.oncopy"],["aopr","document.onselectstart"]],"e-food.gr":[["set-cookie","accepted_cookies","true","","reload","1"],["set-cookie","cookie_privacy_level","required"]],"e-pole.pl":[["set-cookie","epole_cookies_settings","true"]],"e1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"earnload.nl":[["set","blurred","false"]],"ebilet.pl":[["set-cookie","eb_cookie_agree_0124","1"]],"ecaytrade.com":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"editorajuspodivm.com.br":[["set-cookie","googleConsent","1"]],"efl.com":[["set-cookie","cookie_consent_given","true"]],"electroprecio.com":[["set-cookie","consent","1"]],"elizabeth-mitchell.org":[["acs","document.oncontextmenu"],["aopr","disableSelection"],["acs","addEventListener","ctrlKey"]],"elpasotimes.com":[["nostif","gnt_mol_oy"]],"emergetools.com":[["set-local-storage-item","cookie-consent","false"]],"emmi-good-day.com":[["set-cookie","good-day-che-cookie-categories","essential"]],"emmidessert.it":[["set-cookie","dessert-italia-ita-cookie-categories","essential"]],"emr.ch":[["set-cookie","EMR-CookieConsent-Advertising","0"],["set-cookie","EMR-CookieConsent-Analytical","0","","reload","1"]],"eneba.com":[["set-cookie","cconsent","1"]],"energiemetropole-leipzig.de":[["set","realCookieBanner","undefined"]],"enescofrance.com":[["set-cookie","acceptCookieCookie","true"],["set-cookie","enableNonEssentialCookies","false"]],"englishlands.net":[["aopw","document.oncontextmenu"]],"epilog.net":[["set-cookie","cookie_gdpr","true","","reload","1"]],"epn.bz":[["set","ab","false"]],"erp-up.de":[["set","realCookieBanner","undefined"]],"erzsebetvaros.hu":[["set-session-storage-item","popupClosed","true"]],"esa.nask.pl":[["set-cookie","GA_COOKIE_SMOG","accepted"]],"espacocasa.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"etre-visible.local.fr":[["rc","unreadable-display","","stay"]],"eugyppius.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"eujuicers.nl":[["set-cookie","wsp_cc","1","","reload","1"]],"eurooptyk.com.pl":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"europarl.europa.eu":[["set-cookie","europarlcookiepolicysagreement","0"]],"eurotvsport1.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"ev.io":[["rmnt","script","reviveScroll","excludes","self.__next"]],"eveningtribune.com":[["nostif","gnt_mol_oy"]],"everest-24.pl":[["set-local-storage-item","cookie-accepted","false"],["set-local-storage-item","cookie-closed","true"]],"experienciasfree.com":[["set-cookie","2x1cookies","1"]],"expert.cz":[["set-cookie","HideCookieConsentComponentV2","1"]],"fabioambrosi.it":[["acs","document.oncontextmenu"]],"fabricjs.com":[["nostif","()","4000"]],"fairyabc.com":[["nostif","adblock"]],"famousintel.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"fanfare.pub":[["set-local-storage-item","201805-policy|accepted","1"]],"fantasyfitnessing.com":[["set-cookie","Fitnessing21-15-9","0"]],"fanvue.com":[["set-cookie","cookieConsent","accepted"],["set-cookie","fv.cookies_accepted","dismissed"]],"fbref.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"feel-the-darkness.rocks":[["aopr","document.oncontextmenu"],["aopr","document.onmousedown"],["aopr","disableSelection"]],"financeads.com":[["set","realCookieBanner","undefined"]],"firestream.fr":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"fittingcentermondaysunday.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"fizjobaza.pl":[["set-cookie","cookie-accepted","yes"]],"fleurop.de":[["set-cookie","cookie-preference","1"]],"flixhq.co.uk":[["nostif","||null"],["aost","console.clear"]],"flota.es":[["rc","show--consent","body","stay"]],"fluidmaster.it":[["set-cookie","cookie-preference","1"]],"fmovies.co.uk":[["set-cookie","show_share","true"],["acs","document.oncontextmenu"],["acs","disableSelection","reEnable"],["aopr","document.ondragstart"],["aost","console.clear"]],"fontsfree.pro":[["set","adBlock","false"]],"ford-mertens-beckum.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-schankola-dudweiler.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.gr":[["set-cookie","cookieAcknowledged","true"]],"forwardis.com":[["set","realCookieBanner","undefined"]],"foundit.com.ph":[["set-session-storage-item","isDownloadAppBannerClosed","true"]],"francis-bacon.com":[["aeld","contextmenu","return\"undefined\""]],"free.navalny.com":[["set-cookie","CookieConsent","true"]],"fruugo.com.br":[["set-cookie","consents","essential"]],"fruugo.de":[["set-cookie","consents","essential"]],"fundamenta.hu":[["set-cookie","cookie_consent","true","","domain",".fundamenta.hu"],["set-cookie","general","true","","domain",".fundamenta.hu"]],"funnyordie.com":[["nostif","adsBlocked"]],"gamefile.news":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"gameknot.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"gaminplay.com":[["aeld","contextmenu"]],"gartencenter-meier.ch":[["set-cookie","allowLoadExternRessources","1"],["set-cookie","allowTracking","0"],["set-cookie","hideCookieNotice","1"]],"gazetadopovo.com.br":[["aeld","copy"]],"gedik.com":[["set-session-storage-item","acceptCookies","false"]],"geeksoncoffee.com":[["aopr","disableEnterKey"],["acs","document.oncontextmenu"]],"gemeinde.pfitsch.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gezimanya.com":[["ra","oncontextmenu|onselectstart|onselect|oncopy"],["acs","jQuery","Drupal"]],"girlscoutshop.com":[["set-cookie","newsletterLightboxDisplayed","true"]],"giuseppezanotti.com":[["set-cookie","cookieConsentGranted","1"],["set-cookie","cookieConsentMarketingGranted","0"],["set-cookie","cookieConsentPreferencesGranted","1"]],"glassesusa.com":[["set-cookie","is_privacy_policy_shown","true"]],"gledaitv.it":[["aeld","contextmenu"],["nosiif","debugger"]],"gledaitv.org":[["aeld","contextmenu"],["nosiif","debugger"]],"gnome-look.org":[["rmnt","script","btnHtml"],["nano-stb","count"]],"gobiernodecanarias.org":[["set-cookie","cookies_analitycs_allowed","true"]],"gomovies.ru":[["acs","document.oncontextmenu"]],"goodreads.com":[["set-cookie","blocking_sign_in_interstitial","true"]],"googleapis.com.do":[["aeld","/contextmenu|keydown/"],["rmnt","script","/oncontextmenu|onselectstart/"]],"goto10retro.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"gov.lv":[["set-cookie","allowCookies","0"]],"gov.pt":[["set-cookie","ACCEPTED_TERMS","true"]],"gramatica-alemana.es":[["set-cookie","cookiewarning","1"]],"granola.ai":[["set-local-storage-item","cookie_consent","no"]],"graphy.com":[["set-cookie","has_accepted_cookies","true"]],"grizly.sk":[["set-cookie","mCs-chk","1"]],"gryphline.com":[["set-cookie","cookieAccepter","1"]],"guess.eu":[["set-cookie","Guess.CookieWallSet","true"],["set-cookie","Guess.CookieWallThirdParties","false"]],"guidon40hyporadius9.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"gutshaus-neuendorf-usedom.de":[["set","realCookieBanner","undefined"]],"hachettebookgroup.com":[["set-cookie","cookie__newsletter_popup","1"],["set-cookie","cookie__privacy_policy","1"]],"halotracker.com":[["aopw","adBlockDetected"]],"hampshireimplantcentre.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"hana-book.fr":[["set-cookie","HANA-RGPD","accepted"]],"hawkinsforge.co.uk":[["set-cookie","ce-cookie","N"]],"hdrezka.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hdrezka.es":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hdrezka.fr":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hdrezka.it":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hedgeaccordingly.com":[["aopw","ABD"]],"helldivers.io":[["aopr","nitroAds"]],"hello-rezka.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hemglass.se":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"hentaihaven.xxx":[["aeld","contextmenu"]],"hifi-punkten.se":[["set-cookie","cookie_consent_v2_0_functional_third_party","1"],["set-cookie","cookie_consent_v2_0_marketing_third_party","0"],["set-cookie","cookie_consent_v2_0_required","1"]],"hikoki-powertools.eu":[["set-cookie","CookieConsent","mandatory"]],"hoechst.at":[["set-cookie","ris_cookie_setting","1"]],"holzhof24.de":[["set-cookie","cookie-preference","1"]],"hopfner.info":[["set","realCookieBanner","undefined"]],"hotpornfile.org":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"],["aopr","document.onkeydown"],["aopr","document.onkeypress"]],"htrnews.com":[["nostif","gnt_mol_oy"]],"hukmatpro.nl":[["aopw","hidekeep"]],"hulnews.top":[["acs","document.oncontextmenu"],["aopw","stopPrntScr"]],"humo.be":[["set","checkPrivacyWall","noopFunc"]],"hurawatchz.to":[["set-cookie","show_share","true"]],"hutwiller.de":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_stripe","allow"]],"ideapod.com":[["set","nocontext","noopFunc"],["set","disableSelection","noopFunc"]],"igvm.de":[["set","realCookieBanner","undefined"]],"ilclubdellericette.it":[["acs","document.oncontextmenu"]],"imping-confiserie.de":[["set-cookie","cookie-preference","1"]],"indeonline.com":[["nostif","gnt_mol_oy"]],"indigo.uic.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"insider.fitt.co":[["rc","subscribe-pop-active","body","stay"]],"investmap.pl":[["set-cookie","rodo","1","","reload","1"]],"ipouritinc.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"]],"iticket.co.nz":[["set-cookie","itk_cookieconsent","dismissed"]],"itv.com":[["set-cookie","accept-cookies","accepted"]],"j-koenig.de":[["set-cookie","cookie-preference","1"]],"jacksonsun.com":[["nostif","gnt_mol_oy"]],"jagledam.it":[["aeld","contextmenu"],["set","document.oncontextmenu","null"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"japan-academy-prize.jp":[["ra","oncontextmenu|onmousedown|onselectstart"]],"jbf.no":[["set-cookie","eika_consent_marketing","false"],["set-cookie","eika_consent_set","true"]],"jelgava.lv":[["set-cookie","user_gave_consent","1"],["set-cookie","user_gave_consent_analytics","0"]],"jio.pftv.ws":[["set","confirm","noopFunc"]],"jisc.ac.uk":[["set-cookie","cookiesPrivacy","false"]],"jobsbotswana.info":[["acs","jQuery","restriction"],["aopw","document.oncontextmenu"]],"juegos.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"kaembed.it":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"kaembed.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"kaffeediscount.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"kaltern.eu":[["set-cookie","ris_cookie_setting","1"]],"kamera-express.be":[["set-cookie","cookie_accepted","false","","reload","1"]],"kelkay.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"keybr.com":[["nostif","()","5000"]],"kh.hu":[["set-cookie","kh_cookie_level1","true"],["set-cookie","kh_cookie_level3","false"],["set-cookie","kh_cookie_level4","false"]],"khanacademy.org":[["set-local-storage-item","ka:4:legal-updates","true"]],"kiakkoradio.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"kika.co.uk":[["set-cookie","cookie_accepted","1"],["set-cookie","functional_cookies","1","","reload","1"]],"kingp2p.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"kinobro.online":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"kitguru.net":[["acs","addEventListener","adsbygoogle.length"]],"kitsapsun.com":[["nostif","gnt_mol_oy"]],"kiyoua-news.de":[["set","realCookieBanner","undefined"]],"kjr-pi.de":[["set","realCookieBanner","undefined"]],"konsument.at":[["set-cookie","vkicookieconsent","0"]],"kreativverliebt.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"ksaexpo2025.sa":[["set-cookie","cookies-accepted","true","","reload","1"]],"ksdk.com":[["aeld","/^(mouseout|mouseleave)$/"]],"kytary.nl":[["set-cookie","CookieConsent","0","","reload","1"]],"kytary.ru":[["set-cookie","CookieConsent","0","","reload","1"]],"lasestrellas.tv":[["set-cookie","_tvsPrivacy","true"]],"launchreliantcleaverriver.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"lavanguardia.com":[["set","Didomi","noopFunc"]],"ldz.lv":[["set-cookie","cookie-agreed","0"]],"legacylr.com":[["set-cookie","cookiemailinglist","1"]],"lenconnect.com":[["nostif","gnt_mol_oy"]],"leo-pharma.it":[["set-cookie","isCookiePolicySet","false"]],"leotrippi.com":[["set-cookie","cookieConsent","true"]],"lgbtqnation.com":[["aopr","googletag"]],"libgen.com":[["nostif","appendMessage"]],"libgen.net":[["nostif","appendMessage"]],"liisakoski.com":[["set-cookie","epCookieConsent","0"]],"liquormart.co.nz":[["set-cookie","isAnAdult","true"]],"litehd.tv":[["set-cookie","cookieIsAgree","true"]],"litteravera.pl":[["set-local-storage-item","show_consent_modal","1"]],"live.theworldgames.org":[["set-cookie","cookies.consent","false"]],"locafrique-sf.com":[["set","realCookieBanner","undefined"]],"ls-service.at":[["set","realCookieBanner","undefined"]],"lumieresdelaville.net":[["set-local-storage-item","analytics_gdpr_accept","yes"],["set-local-storage-item","youtube_gdpr_accept","yes"]],"luvvoice.com":[["set-local-storage-item","cookieConsent","declined"]],"m.supersport.hr":[["set-cookie","cookie_consent","true"]],"madame-lenormand.de":[["set","realCookieBanner","undefined"]],"madcatbrewery.co.uk":[["set-cookie","age-verification","true"]],"mader.bz.it":[["set-cookie","ae-cookiebanner","true"],["set-cookie","ae-esential","true"],["set-cookie","ae-statistics","false"]],"maduras.vip":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"magicpos.shop":[["set-cookie","cookie-preference","1"]],"mainframegurukul.com":[["ra","oncontextmenu|onselectstart|ondragstart"]],"malybelgrad.pl":[["aopr","document.oncontextmenu"]],"mandarinstone.com":[["set-cookie","ud_accept_analytical_cookies","no"],["set-cookie","ud_accept_marketing_cookies","no"]],"mangaku.co.uk":[["acs","$","contextmenu"],["aeld","contextmenu"]],"mangaku.ru":[["acs","$","contextmenu"],["aeld","contextmenu"]],"mangalib.me":[["set-local-storage-item","cookies-toast-shown","true"]],"mangatoon.fr":[["acs","document.oncontextmenu"]],"marriedbiography.com":[["aeld","/contextmenu|copy/"]],"mathcrave.com":[["rmnt","script","disable_show_error"]],"maybach-luxury.com":[["set-cookie","cookie-preference","1"]],"md-store.de":[["set-cookie","cookieconsent_status","allow"]],"medikament.sk":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"medtube.fr":[["set-cookie","cookiePolicy","4"]],"medtube.net":[["set-cookie","cookiePolicy","4"]],"megacartoons.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"megasport.co.il":[["set-cookie","YourCoockieName","true"]],"merkur.si":[["set-cookie","cookie_analytics_allow","no"],["set-cookie","cookie_notice_dismissed","yes"],["set-cookie","mer_cc_dim_rem_allow","no"]],"mesterslagteren.dk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"metropoliaztm.pl":[["ra","ondrop|ondragstart"]],"mgorsk.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"mhwg.org":[["ra","oncontextmenu|onselectstart|style","#body_game"]],"midlands.englandhockey.co.uk":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"mientus.com":[["set-cookie","cookie-preference","1"]],"mifcom.net":[["set-cookie","cookie_accepted","1","","reload","1"],["set-cookie","cookie_closed","1"]],"mikrocop.com":[["set-cookie","AcceptedCookies","true"]],"mimikama.org":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"mmafighting.com":[["nostif","adsBlocked"]],"mobilevikings.be":[["set-cookie","privacy_mv","1"]],"mocah.org":[["nosiif","adsbygoogle"],["ra","oncontextmenu"]],"mocospace.com":[["nostif","adblocker"]],"mod.io":[["set-local-storage-item","cookies","1"]],"mojmaxtv.hrvatskitelekom.hr":[["set-local-storage-item","cookieAccepted","true"]],"mojposao.hr":[["set-local-storage-item","cookies-policy-accepted","true"]],"movie4kto.net":[["nosiif","/DevTools|_0x/"]],"movies4us.co.uk":[["set-local-storage-item","cookiePolicy","true"]],"moviesjoy.it":[["set-cookie","show_share","true"]],"mtbmarket.de":[["set-cookie","amcookie_allowed","1"]],"mubi.com":[["set-cookie","mubi-cookie-consent","allow"]],"mvideo.ru":[["set-local-storage-item","COOKIE_NOTIFICATION_SUBMITED_v2","true"]],"my-rise.com":[["set-cookie","cb-enabled","accepted"]],"myhome.at":[["set-cookie","ris_cookie_setting","1"]],"myoplay.club":[["acs","document.oncontextmenu"]],"narrabeenporters.com.au":[["set-cookie","goodav_block_popup-418","0"]],"nationalgeographic.com":[["aeld","scroll"],["aeld","contextmenu"]],"nationalreview.com":[["acs","document.createElement","admiral"],["rmnt","script","reviveScroll","excludes","self.__next"]],"nbclosangeles.com":[["aeld","scroll"]],"nbcsportsedge.com":[["aopw","admrlWpJsonP"]],"nebula.tv":[["set-local-storage-item","/^freeVideoFriendly/","$remove$"]],"negrasport.pl":[["set-local-storage-item","show_consent_modal","1"]],"neoseeker.com":[["nostif","whetherdo"],["rmnt","script","raptiveAdblockDetected"]],"netbird.io":[["set-cookie","cookie-consent","true"]],"nettyworth.io":[["set-cookie","cookie_consent","true"]],"netu.net":[["set","devtoolsDetector.launch","noopFunc"]],"neurologyadvisor.com":[["remove-cookie","hmmet"]],"newspao.gr":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"niezawodny.pl":[["set-cookie","cookieConsent","0","","reload","1"]],"nightpoint.io":[["nofab"]],"nisanyansozluk.com":[["set-local-storage-item","newYeradlariWebsiteHidden","true"]],"noaf.de":[["set","realCookieBanner","undefined"]],"norlysplay.dk":[["set-cookie","cookies-accepted","true"]],"northgatevehiclehire.ie":[["set-cookie","cookieconsent_status","allow"]],"nostracasa.com.br":[["ra","oncontextmenu|onselectstart|ondragstart"]],"np-brijuni.hr":[["set-cookie","consent","0","","reload","1"]],"nullforums.net":[["rmnt","script","contextmenu"]],"oberstdorf-buchen.de":[["set-cookie","Consent","0"]],"objectivebayesian.com":[["set-cookie","popup_closed","true"]],"octavio-shop.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"odw-journal.de":[["set","realCookieBanner","undefined"]],"oekakiskey.com":[["json-prune","ads.[].imageUrl"]],"oferty.dsautomobiles.pl":[["aeld","contextmenu"]],"okko.tv":[["set-cookie","cookie-confirm","1"]],"onlinecoursebay.com":[["aeld","","mdp"]],"onlineonderdelenshop.nl":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"onlinepngtools.com":[["nano-sib","Clipboard","1000","0.001"]],"onlinestringtools.com":[["nano-sib","Clipboard","1000","0.001"]],"openhardware.directory":[["set-local-storage-item","cookie-consent","rejected"]],"oponeo.fr":[["set-cookie","_cookieConsents","1"]],"optometryadvisor.com":[["remove-cookie","hmmet"]],"overdrive.com":[["set-cookie","od_track","0","","reload","1"]],"owgr.com":[["set-local-storage-item","hasAnalyticalCookies","false"],["set-local-storage-item","hasStrictlyNecessaryCookies","true"]],"paf.se":[["set-cookie","cookieConsent","1"]],"pazarama.com":[["set-cookie","cookie_consent_v2","true"]],"pcpobierz.pl":[["ra","oncontextmenu"]],"pedalcommander.com":[["set-local-storage-item","COOKIE_BANNER_CLICKED","true"]],"pedalcommander.org":[["set-local-storage-item","COOKIE_BANNER_CLICKED","true"]],"pepperstone.com":[["set-cookie","acceptedCookies","checked"]],"pgatour.com":[["aopr","__cmpGdprAppliesGlobally"]],"pharmahall.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"phimlongtieng.net":[["acs","oncontextmenu"],["acs","navigator","devtools"],["acs","setInterval","stateObject"],["acs","setTimeout","debugger"],["aopr","devtoolsDetector"]],"photoshop-online.biz":[["nostif","google_jobrunner"]],"pickmypostcode.com":[["set-cookie","FPL-CookieNotice","true"]],"piklodz.pl":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"pinterest.net":[["set-local-storage-item","DWEB_PIN_IMAGE_CLICK_COUNT","$remove$"],["set-local-storage-item","unauthDownloadCount","$remove$"]],"planetagibiblog.com.br":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"]],"pnel.de":[["set-cookie","cookie-preference","1"]],"pobre.pl":[["aeld","","blockFuckingEverything"],["aeld","contextmenu","preventDefault"],["aost","eval","build.js"]],"poedb.tw":[["aopr","adBlockDetected"]],"pohl-immobilien.it":[["set-cookie","tincx_cookie_notice_accepted","true"]],"politico.eu":[["remove-cookie","xbc"]],"polizei.bayern.de":[["set-cookie","baypol_banner","true"],["set-cookie","baypol_functional","true"]],"ponal.de":[["set-cookie","ponal_cookie_consent","1","","reload","1"]],"pornhub.org":[["rc","hasAdAlert","header"]],"portalportuario.cl":[["aopr","addLink"]],"posterstore.be":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.com":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.se":[["set-cookie","synapse-cookie-preferences-set","true"]],"powerline.io":[["set","document.oncontextmenu","true"]],"pp-parts.com":[["set-cookie","cookie-preference","1"]],"prace.cz":[["rc","show--consent","body","stay"]],"premiumliquor.co.nz":[["set-cookie","age-verified","true"]],"pressconnects.com":[["nostif","gnt_mol_oy"]],"primicia.com.ve":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"princessofwalespub.co.uk":[["set-cookie","ce-cookie","N"]],"pro-football-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"prodyna.com":[["set-cookie","cky-action","yes"],["set-cookie","cookieyes-functional","no"],["set-cookie","cookieyes-necessary","yes"],["set-cookie","cookieyes-other","no"]],"programming-link.info":[["set","pqdxwidthqt","false"]],"promobit.com.br":[["aeld","mouseout"]],"protan-elmark.ru":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","rodopolicy","true"]],"pttws.ptt.gov.tr":[["ra","onpaste","#tr_mesaj > td > .text-input.validate\\[required\\]"]],"publicnotice.co":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"puratos.fr":[["set-cookie","functionalCookieAccepted","true"]],"puratos.net":[["set-cookie","functionalCookieAccepted","true"]],"putlocker.fr":[["aopw","document.oncontextmenu"]],"puzzle-killer-sudoku.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-light-up.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-pipes.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-shingoki.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.fr":[["set-cookie","puzzleyou-fr_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.pl":[["set-cookie","puzzleyou-pl_cookies_consent_allowlist","0","","reload","1"]],"quillbot.com":[["set-local-storage-item","mode-quills","$remove$"]],"qwice.com":[["set-cookie","legalOk","true"]],"qz.com":[["set-cookie","exitIntentShown","true"]],"r-ulybka.ru":[["set-local-storage-item","cookieAndRecommendsAgreement","true"]],"racevpn.com":[["aopw","document.onkeydown"]],"radarbox.com":[["set","ads_enabled","true"]],"random-group.olafneumann.org":[["set-local-storage-item","consent","true"]],"rapidairmax.site":[["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"rarediseaseadvisor.com":[["remove-cookie","hmmet"]],"rassenlijst.info":[["rc","is-active-cookiebar","","stay"]],"raypa.com":[["set-cookie","cmplz_banner-status","dismissed"]],"rdslive.net":[["aeld","contextmenu"]],"reborntrans.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"record-courier.com":[["nostif","gnt_mol_oy"]],"redcare.it":[["set-session-storage-item","sae-conversational-consent-msg-closed","true"]],"redtube.com.br":[["set-cookie","showAgeDisclaimer","1"]],"reflectim.fr":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"renalandurologynews.com":[["remove-cookie","hmmet"]],"restaurant-la-badiane.fr":[["rc","unreadable-display","","stay"]],"restaurantsbrighton.co.uk":[["set","realCookieBanner","undefined"]],"reuters.com":[["set-local-storage-item","ArcP","$remove$"]],"reviewmeta.com":[["set-cookie","rm-first-time-modal-welcome","1"],["nostif","innerHTML"]],"rightnonel.com":[["aopr","document.oncontextmenu"],["aopr","document.onmousedown"],["aopr","disableSelection"]],"risal.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"riwyat.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"romet.pl":[["ra","oncontextmenu"]],"roxi.tv":[["set-cookie","CookieConsent","true","","reload","1"]],"rozklady.bielsko.pl":[["set-local-storage-item","cookie-accepted","1"]],"rtings.com":[["remove-cookie","current-pageviews"],["remove-cookie","product-previews"]],"rubystm.com":[["aopr","devtoolsDetector"]],"ruwix.com":[["nostif","NoAd","8000"]],"s.awa.fm":[["aeld","contextmenu","[native code]","elements","#__next"]],"salzstreuner.de":[["set","realCookieBanner","undefined"]],"sanha.com":[["set-cookie","cookie-preference","1"]],"savannahnow.com":[["nostif","gnt_mol_oy"]],"savvytime.com":[["acs","document.createElement","admiral"]],"schneelaeuferzunft.de":[["set","realCookieBanner","undefined"]],"scholpp.it":[["rc","with-featherlight","","stay"]],"schoolpetrov.ru":[["set-cookie","confirm-use-cookie","1","","reload","1"]],"schwechater.at":[["set","realCookieBanner","undefined"]],"scidoo.com":[["set-cookie","consent","accepted"]],"scitec.it":[["set-cookie","cookie_consent","1","","reload","1"]],"sdelatotoplenie.ru":[["acs","document.oncontextmenu"],["acs","document.oncopy"]],"seir-sanduk.co.uk":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seirsanduk.fr":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seirsanduk.it":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seirsanduk.pl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"serasa.com.br":[["set-cookie","S_COOKIES_ACCEPTED","true"]],"seriesperu.com":[["aeld","contextmenu","preventDefault"],["noeval-if","String.fromCharCode"],["rmnt","script","contextmenu"]],"sexylook.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"sflix.com":[["nostif","devtools"],["nosiif","/_0x|devtools/"],["aeld","contextmenu"]],"sflix.fr":[["nostif","devtools"],["nosiif","/_0x|devtools/"],["aeld","contextmenu"]],"sflix.pl":[["nostif","devtools"],["nosiif","/_0x|devtools/"],["aeld","contextmenu"]],"sharperimage.com":[["set-cookie","mystery_popup","true"]],"shelly-shop.at":[["set-cookie","cookie-preference","1"]],"sherdog.com":[["aopr","googletag"]],"shlib.life":[["set-local-storage-item","cookies-toast-shown","true"]],"shojiwax.com":[["set-cookie","jetpack_post_subscribe_modal_dismissed","true"]],"shonenjumpplus.com":[["set-local-storage-item","202306151200.shown.production","true"]],"shop.hicksnurseries.com":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"shop.kbc.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.kurhessen-therme.de":[["set-cookie","cookies_mandatory","true"]],"shreveporttimes.com":[["nostif","gnt_mol_oy"]],"side.misskey.productions":[["json-prune","ads.[].imageUrl"]],"simpleflying.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"sk-nic.sk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"skionline.co.uk":[["ra","oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"]],"smile.io":[["set-cookie","smile_allow_cookies","true"]],"smokingmeatforums.com":[["acs","$","btoa"]],"smotreshka-tv.it":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotreshka-tv.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotret-tv.co.uk":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrettv.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrim-tv.co.uk":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrim-tv.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrim-tv.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smow.pl":[["set-cookie","__compliance_cookie_2","111","","reload","1"]],"smow.ru":[["set-cookie","__compliance_cookie_2","111","","reload","1"]],"snockscoffee.com":[["set-cookie","_pandectes_gdpr","1"]],"snopes.com":[["set-cookie","newsletter_signup_promo","true"],["set-cookie","newsletter_signup_views","1"]],"snowboardel.es":[["set-cookie","cookie-bar","0"]],"sochi1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"softedu.pl":[["set","realCookieBanner","undefined"]],"solarmovie.de":[["nostif","_detectLoop"]],"solscan.io":[["set-local-storage-item","user-cookies-setting","1"]],"sopot.net":[["ra","onmousemove|ondragstart|onselectstart|oncontextmenu","body"]],"soquest.xyz":[["set-local-storage-item","soCookiesPolicy","1"]],"spectrumtherapeutics.com":[["set-local-storage-item","cookiesAccepted","true"]],"spel.nl":[["set-cookie","OptanonAlertBoxClosed","true"]],"sportboerse-shop.de":[["set-cookie","biloba-open-ai-dsgvo-consent","","declined"],["set-cookie","cookie-preference","1"]],"sportbooking.info":[["set-local-storage-item","cookies-pref","[]"]],"sportland.fr":[["set-cookie","amcookie_allowed","4"]],"sports-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"sportsbusinessjournal.com":[["remove-cookie","sbj_archiveStatus"]],"spytunes.com":[["set","realCookieBanner","undefined"]],"stadt-schoeneck.de":[["set","realCookieBanner","undefined"]],"starbene.it":[["acs","document.oncontextmenu"],["aeld","/copy|contextmenu/"]],"starhub.com":[["set-cookie","cookiePolicy","true"]],"statelibrary.us":[["aopr","document.oncontextmenu"],["aeld","keydown","disable_in_input"]],"stefan-froescher.eu":[["set","realCookieBanner","undefined"]],"steinbockhuette.de":[["set-cookie","Consent","0"]],"stickypassword.com":[["set-cookie","ad_storage","denied"],["set-cookie","analytics_storage","denied"],["set-cookie","stickyCookiesSet","true"]],"stockpokeronline.com":[["acs","document.oncontextmenu"]],"streaminglearningcenter.com":[["nostif","ads"]],"streamingunity.es":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"streamingunity.nl":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"streamtape.net":[["aeld","contextmenu"],["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"streema.com":[["set-cookie","cookie_warning","1"]],"strtape.it":[["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"subitec.com":[["set","realCookieBanner","undefined"]],"subscribercounter.com":[["set-local-storage-item","ytsc_accepted_cookies","true"]],"sudoku.coach":[["set-cookie","consent","0"]],"superliquor.co.nz":[["set-cookie","superliquor","1"]],"supporthub.experian.co.uk":[["set-cookie","cookie_declined","true"]],"sussytoons.it":[["nosiif","/devtool|console\\.clear/"],["aeld","keydown","123"],["set","Object.prototype.disableMenu","false"]],"sweetwater.com":[["set-cookie","sws-gwpop","1"]],"swg-chemnitz.de":[["set","realCookieBanner","undefined"]],"tallahassee.com":[["nostif","gnt_mol_oy"]],"tauntongazette.com":[["nostif","gnt_mol_oy"]],"tech-recipes.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"teenage.engineering":[["set-cookie","te_cookie_ok","1"]],"teilzeitreisender.de":[["set","realCookieBanner","undefined"]],"terramirabilis.ro":[["rmnt","script","wccp"],["ra","oncontextmenu"]],"the-dispatch.com":[["nostif","gnt_mol_oy"]],"theanchorinnirby.co.uk":[["set-cookie","ce-cookie","N"]],"theartofnakedwoman.com.br":[["aopw","intializemarquee"]],"thebaggiestore.com":[["set-cookie","goodav_block_popup-3146","0"]],"theblueschronicles.com":[["set-cookie","complianceCookie","true"],["set-cookie","gaconsent","true"]],"thecoachingcompany.nl":[["set-cookie","consent-cookies","1"]],"thederbyarmsepsom.co.uk":[["set-cookie","ce-cookie","N"]],"thegraillords.net":[["acs","document.getElementById","block"]],"theleafchronicle.com":[["nostif","gnt_mol_oy"]],"themosvagas.com.br":[["acs","addEventListener","keydown"],["acs","onload"],["set","document.onkeydown","null"]],"thenekodark.com":[["aeld","contextmenu"]],"thenewsstar.com":[["nostif","gnt_mol_oy"]],"therocketeustonroad.co.uk":[["set-cookie","ce-cookie","N"]],"thesimsresource.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"thewpclub.net":[["aeld","","mdp"]],"thinktankphoto.com":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"thomasschlechter.de":[["set","realCookieBanner","undefined"]],"ticket.io":[["set-cookie","privacyCookie","1","","reload","1"]],"time.is":[["rmnt","script","reviveScroll","excludes","self.__next"]],"tippmix.hu":[["set-cookie","GDPR_LEVEL","1"],["set-cookie","GDPR_VERSION","1"]],"tmnews.com":[["nostif","gnt_mol_oy"]],"todays-golfer.com":[["set-cookie","ccpaApplies","true"],["set-cookie","ccpaConsentAll","true"],["set-cookie","ccpaReject","false"]],"todoist.com":[["set-local-storage-item","cookie-consent","\"denied\""]],"ton.org":[["set-cookie","cookies-allowance","true"]],"toomeymotorgroup.co.uk":[["set-cookie","cookieAccepted","1","","reload","1"]],"top4mobile.fr":[["set-cookie","cookies-agreed","1"],["set-cookie","cookies-analytical","0"]],"topautoosat.fi":[["aeld","mousedown","function(t)"]],"topeuropix.com.br":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"topuniversities.com":[["set-cookie","cookie-agreed","2"]],"tp-link.com":[["set-cookie","tp_privacy_base","1"]],"trading212.com":[["set-cookie","COOKIES_CONSENT","essential"]],"traffihunter.hu":[["rc","darken","body"]],"translit.ru":[["set-cookie","consent18","0","","reload","1"]],"traqq.com":[["set-cookie","CookieAccept","true"]],"trettin-apotheken.de":[["set","realCookieBanner","undefined"]],"triathlete.com":[["remove-cookie","xbc"]],"truckmall.cz":[["set-cookie","cookies_confirmed","1","","reload","1"]],"ttisi.nl":[["set-cookie","cmplz_banner-status","dismissed"]],"tube8.es":[["set-cookie","t8disclaimer","1"]],"tui.fi":[["rc","no-scroll","body","stay"]],"tvhay.es":[["rmnt","script","wccp_pro"]],"tvron.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvron.de":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvtut.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvzingvn.com.br":[["acs","onload","contextmenu"]],"tvzingvn.es":[["acs","onload","contextmenu"]],"tweakers.net":[["set","tweakersConfig.userConfiguredConsent.googlemaps.approved","true"],["set","tweakersConfig.userConfiguredConsent.knightlab.approved","true"],["set","tweakersConfig.userConfiguredConsent.omny.approved","true"],["set","tweakersConfig.userConfiguredConsent.pcnltelecom.approved","true"],["set","tweakersConfig.userConfiguredConsent.soundcloud.approved","true"],["set","tweakersConfig.userConfiguredConsent.streamable.approved","true"],["set","tweakersConfig.userConfiguredConsent.youtube.approved","true"]],"tweaktown.com":[["rc","modal-open","body","stay"],["aost","document.getSelection","inlineScript"]],"twenga.de":[["set-cookie","cookiewarning","1","","reload","1"]],"uemeds.cn":[["ra","oncontextmenu|ondragstart|onselect"]],"uizard.io":[["set-cookie","cookie-disclaimer","1"]],"ukrinform.ua":[["set-local-storage-item","cookie_consent","granted"]],"underground-england.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"unobike.com":[["set-local-storage-item","cookieinfo","1"]],"upreply.de":[["set","realCookieBanner","undefined"]],"urban-rivals.com":[["set-cookie","__Host-cnil","true"]],"uticaod.com":[["nostif","gnt_mol_oy"]],"uwayapply.com":[["ra","oncontextmenu|ondragstart|onselectstart"]],"v2.xmeye.net":[["set-local-storage-item","showCookieUse","false"]],"vahrn.eu":[["set-cookie","ris_cookie_setting","1"]],"vanmossel.ru":[["set-cookie","gtmCookieAccepted","1"],["set-cookie","gtmCookiePopup","1"]],"vansteenbergen-kas.nl":[["set-cookie","consent-cookies","1"]],"varaderey.es":[["set-cookie","cookies_aceptadas","true","","reload","1"]],"vembed.co.uk":[["nosiif","devtool"],["nostif","devtool"],["rmnt","script","devtools"]],"vembed.it":[["nosiif","devtool"],["nostif","devtool"],["rmnt","script","devtools"]],"verpackungsstadl.ch":[["rc","disable","div","stay"]],"vesely-drak.cz":[["rc","show--consent","body","stay"]],"vidara.nl":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vide0.net":[["set","console.clear","undefined"],["aeld","contextmenu"]],"videovard.com.br":[["set","console.clear","undefined"]],"vidmoly.co.uk":[["rmnt","script","devtoolsDetector"],["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidmoly.es":[["rmnt","script","devtoolsDetector"],["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidplay.org":[["set","DisDevTool","undefined"]],"vidplay.pl":[["set","DisDevTool","undefined"]],"villabassa.eu":[["set-cookie","ris_cookie_setting","1"]],"vinaurl.fr":[["ra","onkeydown"]],"visaliatimesdelta.com":[["nostif","gnt_mol_oy"]],"visconti.partners":[["set","realCookieBanner","undefined"]],"visse.com.br":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"vitotechnology.com":[["set-local-storage-item","SWCOOKIESACC","1"]],"vlachakis-systems.com":[["set-cookie","cookieSettings","11","","reload","1"]],"voda-zdarma.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"voe-unblock.com":[["aeld","/keydown|keyup/","keyCode"],["aeld","contextmenu"],["acs","console.clear"],["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voe-unblock.fr":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voirfilms.co.uk":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"volksfest-nuernberg.de":[["set","realCookieBanner","undefined"]],"von-zinsen-leben.de":[["set","realCookieBanner","undefined"]],"votes.decisiondeskhq.com":[["set-local-storage-item","login-wall-triggered","1"],["set-session-storage-item","login-wall-dismissed","true"]],"vzm.de":[["set","realCookieBanner","undefined"]],"wasserstoff-leitprojekte.de":[["ra","oncontextmenu","body","complete"]],"wavy.com":[["aeld","scroll"]],"wbir.com":[["aeld","/^(mouseout|mouseleave)$/"]],"webcamromania.ro":[["aeld","contextmenu","preventDefault"]],"webwereld.nl":[["set","adsAreShown","true"]],"weetabix.es":[["rc","wcc-popup-overflow","body","stay"]],"weetabix.nl":[["rc","wcc-popup-overflow","body","stay"]],"weingut-knipser.de":[["set","realCookieBanner","undefined"]],"wentronic.es":[["set-cookie","COOKIES_ACCEPTED_new_1","essential","","reload","1"]],"wentronic.nl":[["set-cookie","COOKIES_ACCEPTED_new_1","essential","","reload","1"]],"wentronic.ru":[["set-cookie","COOKIES_ACCEPTED_new_1","essential","","reload","1"]],"whitehartbrasted.co.uk":[["set-cookie","ce-cookie","N"]],"wildthings.club":[["set-cookie","agreeTerms","1","","reload","1"]],"winerack.com":[["set-local-storage-item","dnt_preference","true"]],"wired.co.uk":[["set","ads_not_blocked","true"]],"wolfurt.at":[["set-cookie","ris_cookie_setting","1"]],"woltair.cz":[["set-cookie","CM_BANNER","false"]],"worldcupchampionships.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"wouterplanet.com":[["ra","oncontextmenu","body","complete"],["nosiif","_0x"]],"wpc-shop24.de":[["set-cookie","cookie-preference","1"]],"wpchen.net":[["aeld","contextmenu"]],"wqad.com":[["aeld","/^(mouseout|mouseleave)$/"]],"wrestlezone.com":[["acs","document.createElement","admiral"]],"wst.tv":[["set-cookie","cookie_consent_given","true"]],"wzamrani.com":[["aeld","contextmenu"]],"xhamster.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster1.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster10.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster11.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster11.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster12.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster12.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster13.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster14.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster16.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster17.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster17.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster19.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster2.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster2.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster3.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster4.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster4.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster42.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster46.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster5.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster5.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhchannel.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhchannel2.com":[["set-cookie","cookie_accept","1"]],"xhdate.world":[["set-cookie","cookie_accept","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhwebsite5.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xxxshemaleporn.com":[["set-cookie","kt_tcookie","1"],["set-cookie","splash_Page_Accepted","true"]],"ya62.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"yaledailynews.com":[["acs","$","undefined"]],"yoomoney.ru":[["set-cookie","has_accepted_gdpr","1"]],"yoyofilmeys.co.uk":[["acs","document.oncontextmenu"]],"zabel-group.de":[["set","realCookieBanner","undefined"]],"zapatos.co.uk":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zapatos.es":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zapatos.net":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zapatos.nl":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zapgroup.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"zappatos.org":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zgbk.com":[["acs","document.oncontextmenu"],["aeld","","blockEvent"]],"zhdcdn1.li":[["aeld","contextmenu"]],"zillow.com":[["aeld","/^(mouseout|mouseleave)$/"],["ra","oncontextmenu|ondragstart|onselectstart|onkeydown|oncopy|oncut|onclick"]],"zingtvhd.nl":[["acs","onload","contextmenu"]],"zoommastory.com":[["acs","document.oncontextmenu"]],"zoommer.ge":[["set-cookie","zoommer-cookie_agreed","true"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
