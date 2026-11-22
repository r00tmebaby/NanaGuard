/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"199-euro-computer.de":[["set","realCookieBanner","undefined"]],"29.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"3xyaoi.com":[["acs","document.oncontextmenu"],["aeld","contextmenu","preventDefault"]],"500ish.com":[["set-local-storage-item","201805-policy|accepted","1"]],"50five.com":[["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"52bdys.com":[["aopr","onload"]],"72.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"7745.by":[["set-cookie","cookies_accepted","0"],["set-cookie","stat_cookies_accepted","0"],["set-cookie","visual_cookies_accepted","0"]],"99bitcoins.com":[["nostif","ThriveGlobal"]],"aachen50plus.de":[["set","realCookieBanner","undefined"]],"aaronia.com":[["set-cookie","amcookie_allowed","1"]],"abastible.cl":[["set-local-storage-item","cookie-accepted","true"]],"abcteile24.de":[["set","realCookieBanner","undefined"]],"accace.sk":[["set","realCookieBanner","undefined"]],"adcock.com":[["set-session-storage-item","cookiesAccepted","true"]],"addonup.com":[["set-local-storage-item","cookie-consent","declined"]],"adidas.co":[["set-cookie","notice_preferences","2"]],"adidas.co.nz":[["set-cookie","notice_preferences","2"]],"adidas.co.th":[["set-cookie","notice_preferences","2"]],"adidas.nl":[["set-cookie","notice_preferences","2"]],"adnan-tech.com":[["ra","oncontextmenu"]],"adpres.ro":[["aopw","stopPrntScr"]],"againstdata.com":[["set-cookie","dad_consent","true"]],"agekey.org":[["set-local-storage-item","agekey-cookie-consent","true"]],"agvillagecamarguais.com":[["rc","unreadable-display","","stay"]],"ahrtal-klinik.de":[["set-cookie","Consent","0"]],"aiconsultores.com":[["set-cookie","cmplz_banner-status","dismissed"]],"aida64.com.ua":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"aida64.hu":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"airlinercafe.com":[["acs","jQuery","ads"]],"ajanvaraus.veripalvelu.fi":[["set-cookie","cb-enabled-fi","accepted"]],"akasaair.com":[["set-cookie","akasaairCookie","accepted"]],"akumo.cz":[["set-cookie","cookie-bar","0"]],"al.com":[["aopr","__cmpGdprAppliesGlobally"]],"alifragis.com.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"allfunds.com":[["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"allkpop.com":[["aopr","__cmpGdprAppliesGlobally"]],"allmovie.com":[["acs","$","/getScript|error:/"]],"alohabrowser.app":[["set-cookie","acceptCookie","1"]],"alquilerordenadores.com":[["set","realCookieBanner","undefined"]],"alueviesti.fi":[["set-cookie","cm_ads","0"],["set-cookie","cm_analytics","0"],["set-cookie","cm_default","1"]],"amarillo.com":[["nostif","gnt_mol_oy"]],"amcoustics.com":[["set-cookie","amc-cookies-accepted","true","","reload","1"]],"amway-estonia.com":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"ananweb.jp":[["aeld","contextmenu"]],"androidweblog.com":[["aeld","","t.preventDefault"]],"anikototv.to":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"anime-drama.jp":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"anime2you.de":[["acs","document.getElementById","undefined"]],"animefire.plus":[["ra","oncontextmenu|ondragstart","","complete"]],"animeunity.it":[["ra","oncontextmenu"]],"aphorisma-verlag.eu":[["set-cookie","alertCookie","true"]],"appimagehub.com":[["rmnt","script","btnHtml"],["nano-stb","count"]],"arera.it":[["set-cookie","CookieConsent","1"]],"arnosarms.co.uk":[["set-cookie","ce-cookie","N"]],"artemide.com":[["set-cookie","amdcookiechoice","necessary"]],"artkon.de":[["set","realCookieBanner","undefined"]],"artsy.net":[["aeld","scroll"]],"as-selection.net":[["ra","oncontextmenu|onselectstart"]],"asdatyres.co.uk":[["set-cookie","all_cookies_allowed","1","","reload","1"],["set-cookie","required_cookies_set","1"]],"atalmedial.nl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"atlas-geografic.net":[["aopr","document.oncontextmenu"],["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"attend.techevents.informaconnect.com":[["set-cookie","swapcard-cookie-consent","accepted"]],"atw.jp":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"aurumcars.de":[["set-cookie","ac_consent","f","","reload","1"]],"auth.kontur.ru":[["set-cookie","gdpr-consent","true"]],"autobassadone.fi":[["set-cookie","av-cookieConsent","false"]],"automatiksysteme.com":[["set","realCookieBanner","undefined"]],"automationafrica.co.za":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"avemaria.edu":[["set-local-storage-item","amu_cookie_consent","1"]],"avito.ru":[["set-cookie","cookie_consent_shown","1"]],"axionnews.live":[["set-local-storage-item","cookieConsent","true"]],"balance-fahrradladen.de":[["set-cookie","cookie-preference","1"]],"bananacraft.serveminecraft.net":[["set-local-storage-item","cookiesAccepted","yes"]],"bassicostruzioni.it":[["rc","wcc-popup-overflow","body","stay"]],"battlecreekenquirer.com":[["nostif","gnt_mol_oy"]],"bayern.de":[["set-cookie","required","1"]],"bayernlabo.de":[["set-cookie","layerCookie","true","","reload","1"],["set-cookie","video","true"]],"bbfun.de":[["set","realCookieBanner","undefined"]],"beermerchants.com":[["set-local-storage-item","amCookieBarFirstShow","1"]],"beeze.de":[["set","realCookieBanner","undefined"]],"beforward.jp":[["set-cookie","wwwbf[appi]","1","","reload","1"]],"bembed.net":[["nosiif","devtool"],["nostif","devtool"]],"bequiet.com":[["set-cookie","_CookiePolicyHint","true"]],"bere.co.uk":[["set-cookie","CookieConsent","Necessary","","reload","1"]],"bialettikave.hu":[["set-cookie","cookie_jog","1"],["set-cookie","cookie_marketing","0"],["set-cookie","cookie_oldal","1"]],"bikesell.co.kr":[["ra","oncontextmenu","body"]],"biolib.cz":[["set-cookie","analytics_storage","denied","","reload","1"]],"blaguss.com":[["set-cookie","CookieConsent","mandatory"]],"blockdyor.com":[["set-cookie","cf_consent","false"]],"blogvisaodemercado.pt":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"blueridgenow.com":[["nostif","gnt_mol_oy"]],"bo.de":[["set-cookie","_reiff-consent-cookie","yes"]],"boerse-express.com":[["nostif","()","1000"]],"bokadirekt.se":[["set-cookie","BokadirektCookiePreferencesMP","1"]],"bonn.sitzung-online.de":[["set-cookie","allris-cookie-msg","1"]],"bontadivina.it":[["set-cookie","bonta-divina-ita-cookie-categories","essential"]],"book-n-drive.de":[["set-cookie","cookietypes","OK"]],"bppulse.com":[["set-cookie","advertising-cookie-consent","denied"],["set-cookie","performance-cookie-consent","denied"]],"bpstat.bportugal.pt":[["set-cookie","bdp_use_cookies","notagree"]],"brachmannofficial.com":[["set","realCookieBanner","undefined"]],"brancaia.com":[["set","realCookieBanner","undefined"]],"britishairways.com":[["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"]],"britishcornershop.co.uk":[["set-cookie","cookieConsentSet","true"]],"brokensilenze.net":[["rmnt","script","disable_copy"],["rmnt","script","nocontext"]],"broncoshq.com":[["rmnt","script","XF"],["acs","$","btoa"]],"bs-achern.de":[["set","realCookieBanner","undefined"]],"bsh-group.com":[["set-cookie","cookiepolicy","decline"]],"bssmvalues.com":[["set-local-storage-item","dataConsentChoice","declined"]],"burlingtonfreepress.com":[["nostif","gnt_mol_oy"]],"businessaccountingbasics.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"butter.us":[["set-cookie","cookiePolicy","true"]],"byfood.com":[["set-local-storage-item","byFoodCookiePolicyRequire","false"]],"byhue-official.com":[["set-cookie","allowGetPrivacyInfo","true"]],"byseum.de":[["set-cookie","cookiehinweisnew","2","","reload","1"]],"bytello.com":[["set-local-storage-item","_APP_COOKIE_NOTICE","reject"]],"cafe.naver.com":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"],["aopr","document.ondragstart"]],"cagesideseats.com":[["nostif","()","1500"]],"calmwaters.de":[["set-cookie","cookie-preference","1"]],"calteixidor.cat":[["set-cookie","promptCookies","1"]],"cam.start.canon":[["set-cookie","user_accepts_cookies","true"]],"canalplus.com":[["set-cookie","cp_cc_ads","0"],["set-cookie","cp_cc_required","1"],["set-cookie","cp_cc_stats","0"]],"candybox.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"carsupermarket.com":[["set-cookie","ce-cookie","N"]],"ccvalleisarco.it":[["set-cookie","ris_cookie_setting","1"]],"cdniptvpotok.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"ceratrends.com":[["rc","wcc-popup-overflow","body","stay"]],"cespun.eu":[["rmnt","script","contextmenu"]],"chatgpt.com":[["set-cookie","oai_consent_analytics","false"],["set-cookie","oai_consent_marketing","false"]],"checkwx.com":[["set-cookie","cookieshown","1"]],"chemocare.com":[["set-cookie",".YourApp.ConsentCookie","yes","","reload","1"]],"chinaimportal.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"ciberduvidas.iscte-iul.pt":[["aeld","copy"]],"cic.ch":[["set-cookie","cookieconsent_status","allow"]],"cifraclub.com":[["set-cookie","cc-cookie-policy","true"]],"cissamagazine.com.br":[["acs","soclInit"],["nostif","Zord.analytics.registerBeforeLeaveEvent","3000"]],"citaalen.com":[["set-cookie","cookiesAccepted","true"]],"citizen-times.com":[["nostif","gnt_mol_oy"]],"citroen.pl":[["aeld","contextmenu"],["aopw","document.onkeypress"]],"civildigital.com":[["acs","jQuery","ai_adb"]],"clarionledger.com":[["nostif","gnt_mol_oy"]],"cleanthinking.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"clearspend.natwest.com":[["set-cookie","st-cookie-token","true"]],"cmjornal.pt":[["aopw","document.oncopy"]],"cometh-consulting.com":[["set-cookie","cmplz_banner-status","dismissed"]],"commandlinux.com":[["aopr","copy_div_id"]],"compact-online.de":[["set-cookie","ris_cookie_setting","1"],["set","realCookieBanner","undefined"]],"compagniefruitiere.fr":[["set","realCookieBanner","undefined"]],"comune.gais.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.laces.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.renon.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.rifiano.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sanlorenzodisebato.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.scena.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sesto.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.valdivizze.bz.it":[["set-cookie","ris_cookie_setting","1"]],"containerandpackaging.com":[["set-cookie","cookieBanner","true"]],"converse.com":[["set-cookie","acceptConverseCookiePolicy","0"],["set-cookie","dw_cookies_accepted","1"]],"copaamerica.com":[["set-cookie","localConsent","true"]],"core.app":[["set-local-storage-item","connect-wallet-legal-consent","true"],["set-local-storage-item","should_display_cookie_banner_v2","false"]],"coshoctontribune.com":[["nostif","gnt_mol_oy"]],"cotswoldoutdoor.com":[["set-cookie","consent_setting","OK","","reload","1"]],"courierexchange.co.uk":[["set-cookie","nc_analytics","rejected"],["set-cookie","nc_cookies","accepted"],["set-cookie","nc_marketing","rejected"]],"createchange.me":[["set","realCookieBanner","undefined"]],"creative-chemistry.org.uk":[["acs","document.oncontextmenu"]],"crown.com":[["set-cookie","modalPolicyCookieNotAccepted","notaccepted"]],"csid.ro":[["aopw","document.oncontextmenu"]],"ctol.digital":[["set-local-storage-item","cookie_accepted","true"]],"curantus.de":[["set-cookie","amcookie_allowed","1"]],"curate.nd.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"curseforge.com":[["no-fetch-if","googlesyndication"]],"cursoemvideo.com":[["set-cookie","cookie_notice_accepted","true"]],"czech-server.cz":[["set-cookie","I6COMPARECOUNT","0"],["set-cookie","I6IISCOOKIECONSENT0","n","","reload","1"]],"d4armory.io":[["aopr","nitroAds"]],"daily-jeff.com":[["nostif","gnt_mol_oy"]],"dailyamerican.com":[["nostif","gnt_mol_oy"]],"dailycommercial.com":[["nostif","gnt_mol_oy"]],"dasmagazin.de":[["set","realCookieBanner","undefined"]],"data-media.gr":[["set-cookie","data-privacy-statement","true"]],"dayspamainz.de":[["set","realCookieBanner","undefined"]],"delfi.lt":[["aeld","copy"]],"delicateseliterare.ro":[["acs","jQuery","contextmenu"]],"democratandchronicle.com":[["nostif","gnt_mol_oy"]],"deportealdia.live":[["acs","document.oncontextmenu"]],"deutsch-wagram.gv.at":[["set-cookie","ris_cookie_setting","1"]],"deutsche-alpenstrasse.de":[["set-cookie","cookie-consent","declined","","","reload","1"]],"devilslakejournal.com":[["nostif","gnt_mol_oy"]],"dialectsarchive.com":[["aopr","disableSelection"],["aopw","nocontext"]],"dicasdevalor.net":[["aeld","contextmenu"]],"digi.ro":[["set-cookie","cmp_level","3"]],"digitalcameraworld.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"dinamalar.com":[["set-cookie","agree","true"]],"dirk.nl":[["set-cookie","cookies-banner-shown","true"]],"divineyogaschool.blogspot.com":[["acs","document.oncontextmenu"]],"dlstreams.st":[["rmnt","script","'contextmenu'"]],"dngz.net":[["aopr","document.oncontextmenu"],["aopr","document.onkeydown"],["set","forbidDebug","noopFunc"]],"doc.mbalib.com":[["ra","onbeforecopy|oncontextmenu|oncopy|ondragstart|onmouseup|onselect|onselectstart"]],"docs.chartbeat.com":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.proxyman.com":[["set-cookie","__gitbook_cookie_granted","no"]],"dogtime.com":[["acs","document.createElement","admiral"]],"domaintools.com":[["set","realCookieBanner","undefined"]],"donneurdecellulessouches.be":[["rc","cookieconsent-active","body","stay"]],"dopesnow.com":[["set-local-storage-item","cookieBannerShown","true"]],"dorkgpt.com":[["set-local-storage-item","cookieConsent","false"]],"drainagebuizen.nl":[["set-cookie","cookiebar","1"]],"dreamlandresort.com":[["aopr","alert"]],"dresscode-knoppers.de":[["set-cookie","trackingAccepted","true"]],"drinksking.sk":[["set-cookie","coookieaccept","ok"]],"drkrok.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"ds2play.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"duneawakening.th.gl":[["nostif",".getState();","4500"]],"e-pity.pl":[["set-cookie","efile-cookiename-28","1"]],"e-sushi.fr":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"easyayurveda.com":[["aopr","disable_copy"],["aopr","wccp_pro_iscontenteditable"],["aopr","disable_hot_keys"],["aopr","nocontext"]],"ecoints.com":[["set-local-storage-item","allowed_cookies","true"]],"edailybuzz.com":[["aeld","/contextmenu|copy/"]],"edr-software.com":[["set","realCookieBanner","undefined"]],"elliberal.cat":[["set-cookie","wpl_viewed_cookie","no"]],"elrow.com":[["set-cookie","elrowCookiePolicy","yes"]],"eltiempo.com":[["set-cookie","cookies-info","true"]],"emb-europe.com":[["set-cookie","consent-cookie-popup","1"]],"emmi-aktifit.ch":[["set-cookie","aktifit-che-cookie-categories","essential"]],"energiemetropole-leipzig.de":[["set","realCookieBanner","undefined"]],"epages.com":[["set","realCookieBanner","undefined"]],"erco.com":[["set-session-storage-item","cookieMessageDisagree","true"]],"erholung-oberstdorf.de":[["set-cookie","Consent","0"]],"eschuhe.de":[["set-local-storage-item","__EOBUWIE__consents_accepted","true","","reload","1"]],"esderaiz.com":[["set","realCookieBanner","undefined"]],"espacocasa.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"essencestudios.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"etwinning.at":[["set-cookie","cookieconsent_status_new","1"]],"euromaster.de":[["set","Didomi","noopFunc"]],"eurosupps.nl":[["set-cookie","cookie-preferences-submitted20190710","true"]],"eurowings.com":[["set-cookie","ew_cookieconsent","1"],["set-cookie","ew_cookieconsent_optin_a","true"],["set-cookie","ew_cookieconsent_optin_b","true"]],"evasion-online.com":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"eveningtribune.com":[["nostif","gnt_mol_oy"]],"fabriziovanmarciano.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"fadxploit.my.id":[["set-local-storage-item","cookie_consent","accepted"]],"fairlady.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"falabella.com.pe":[["set-cookie","isCookieLegalBannerSelected","true"]],"fantecshop.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"faucetcrypto.com":[["set-local-storage-item","cookieconsent","true"]],"fauxid.com":[["aeld","error"]],"femibion.rs":[["set-local-storage-item","cookie","true"]],"festival-cannes.com":[["aeld","contextmenu"]],"figshare.com":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"film4e.com":[["acs","AudiosL10n"]],"fitnesscenter-schardt.de":[["set","realCookieBanner","undefined"]],"fjordd.com":[["aeld","contextmenu","preventDefault"],["rmnt","script","initPopup"]],"flaviamelissa.com.br":[["set","realCookieBanner","undefined"]],"fleurop.de":[["set-cookie","cookie-preference","1"]],"floristasgarcia.es":[["set","realCookieBanner","undefined"]],"flota.es":[["rc","show--consent","body","stay"]],"flow-in-yoga.de":[["set","realCookieBanner","undefined"]],"flughafen.tips":[["set","realCookieBanner","undefined"]],"fold.dev":[["set-local-storage-item","cookies","no"]],"followalice.com":[["set-cookie","cookie-consent","false"],["set-cookie","cookie-consent","true"]],"forbesafrica.com":[["set-cookie","forbesConsentCookie","true"]],"ford-busch-kirchberg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-duennes-regensburg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-haefner-und-strunk-kassel.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hessengarage-dreieich.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hessengarage-frankfurt.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-janssen-sonsbeck.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-jochem-stingbert.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-jungmann-wuppertal.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-ludewig-delligsen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-maiwald-linsengericht.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-rennig.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-wagner-mayen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-wahl-fritzlar.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.fi":[["set-cookie","cookieAcknowledged","true"]],"ford.gr":[["set-cookie","cookieAcknowledged","true"]],"ford.it":[["set-cookie","cookieAcknowledged","true"]],"forums.hfboards.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"foto-gregor.de":[["set-cookie","cookie_accepted","false","","reload","1"]],"francetvpub.fr":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"free.navalny.com":[["set-cookie","CookieConsent","true"]],"freewaysintl.com":[["aeld","contextmenu"]],"frisco.pl":[["set-cookie","forced-cookies-modal","2"]],"fruit01.xyz":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["set","document.onkeydown","noopFunc"]],"futbollatam.com":[["aeld","contextmenu"]],"gadis.es":[["set-cookie","analyticsAccepted","false"],["set-cookie","cookieAccepted","true"]],"gais.eu":[["set-cookie","ris_cookie_setting","1"]],"gamepro.de":[["set","Didomi","noopFunc"]],"gamerant.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"gamesradar.com":[["set-cookie","FTR_Article_PageView","2"]],"gamingsinners.com":[["acs","$","test"]],"gartencenter-meier.ch":[["set-cookie","allowLoadExternRessources","1"],["set-cookie","allowTracking","0"],["set-cookie","hideCookieNotice","1"]],"gasthaus-schmidmayer.de":[["set","realCookieBanner","undefined"]],"gaypornmasters.com":[["aopr","document.oncontextmenu"]],"gaypornvideos.xxx":[["set-cookie","kt_tcookie","1"],["set-cookie","splash_Page_Accepted","true"]],"gdemoideti.ru":[["set-cookie","acceptCookies","true"]],"gdrivedescarga.com":[["rmnt","script","e.preventDefault();"]],"geizhals.at":[["set-local-storage-item","dnt_message_shown","1"]],"gemeinde.latsch.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.pfitsch.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.plaus.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.prags.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.riffian.bz.it":[["set-cookie","ris_cookie_setting","1"]],"generalitranquilidade.pt":[["set-cookie","CST_COOKIE_CONSENT","1"],["set-cookie","cookieMessageDismissed","1"]],"generationamiga.com":[["aopr","disable_copy"],["aopw","document.oncontextmenu"]],"gerho.it":[["set-cookie","cookie-preference","1"],["set-cookie","tincxTerminiPopUp","1"]],"giochi.it":[["set-cookie","OptanonAlertBoxClosed","true"]],"glam.com":[["aeld","copy"]],"glistranieri.it":[["set","disableSelection","noopFunc"],["aopw","document.oncontextmenu"]],"globalairportconcierge.com":[["no-fetch-if","method:HEAD"]],"gmx.fr":[["set-cookie","euconsent-bypass","1"]],"gnt24365.net":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"goodbakery.ru":[["acs","document.oncontextmenu"],["acs","jQuery","contextmenu"]],"goodpods.com":[["set-local-storage-item","cookie_consent","accepted"]],"goodram.com":[["set-local-storage-item","consentCookie","true"]],"googleapis.com.do":[["aeld","/contextmenu|keydown/"],["rmnt","script","/oncontextmenu|onselectstart/"]],"gooloo.de":[["set","realCookieBanner","undefined"]],"gpd-nordost-onlineberatung.de":[["rc","dp--cookie-consent","body","stay"]],"gpuscout.nl":[["set-local-storage-item","cookieConsent","true"]],"grandprixradio.nl":[["set-cookie","advertisement-age-show-alcohol","false"],["set-cookie","advertisement-age-show-gamble","false"],["set-cookie","analytics_cookies","0"],["set-cookie","cookies_accepted","1","","reload","1"],["set-cookie","tracking_cookies","0"]],"grizly.cz":[["set-cookie","mCs-chk","1"]],"groedig.at":[["set-cookie","ris_cookie_setting","1"]],"gukjenews.com":[["ra","oncontextmenu|onselectstart|ondragstart"]],"guljaj.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"gunskirchen.com":[["set-cookie","ris_cookie_setting","1"]],"gutshaus-neuendorf-usedom.de":[["set","realCookieBanner","undefined"]],"gvcc.net":[["set-cookie","ris_cookie_setting","1"]],"haarausfall-stopp.com":[["set","realCookieBanner","undefined"]],"haban-uhren.at":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_stripe","allow"]],"hallesches-fotoatelier.de":[["set","realCookieBanner","undefined"]],"halonen.fi":[["set-cookie","consentAdvertising","false"],["set-cookie","consentAnalytics","false"],["set-cookie","consentPersonalization","false"],["set-cookie","privacyExpiration","1"],["set-cookie","privacySettings","1"]],"hana-book.fr":[["set-cookie","HANA-RGPD","accepted"]],"handelsbanken.se":[["set-cookie","shb-consent-cookies","false"],["set-cookie","shb-consent-cookies","true"]],"harry-gerlach.de":[["set-cookie","privacyPolicyAccept","0","","reload","1"]],"harveynorman.hr":[["set-cookie","cookieConsentGranted","1"]],"hatchet.run":[["set-local-storage-item","cookie_consent","no"]],"helenevue.com":[["rc","unreadable-display","","stay"]],"heraldtribune.com":[["nostif","gnt_mol_oy"]],"hermesit.net":[["rc","wcc-popup-overflow","body","stay"]],"herzum.com":[["set-cookie","CookieConsent","false"]],"heypoorplayer.com":[["aopr","ABDSettings"]],"hiking.biji.co":[["set-cookie","cookieConsent","true","","reload","1"]],"hitokageproduction.com":[["set","topMessage","noopFunc"]],"hobbyhall.fi":[["set-cookie","CA_DT_V2","0","","reload","1"],["set-cookie","CA_DT_V3","0"]],"holland-shop.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"hoosiertimes.com":[["nostif","gnt_mol_oy"]],"hopfner.info":[["set","realCookieBanner","undefined"]],"hotdk2023.kre.hu":[["rc","show--consent","body","stay"]],"hotpornfile.org":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"],["aopr","document.onkeydown"],["aopr","document.onkeypress"]],"howjsay.com":[["nostif","()","1500"]],"howtogeek.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"huebschundgut.de":[["set-cookie","CookieConsent","mandatory"]],"huisartsenpraktijkdoorn.nl":[["set-cookie","cookies-marketing","N"]],"hundewelpe.de":[["set","realCookieBanner","undefined"]],"huutokaupat.com":[["set-cookie","consent-data-v2","0"]],"hygieniapassit.info":[["set-cookie","cookie-agreed","0"]],"ibomma.pw":[["acs","$","contextmenu"]],"iconoclasts.blog":[["set-cookie","gdpr_decline","1"]],"icourse163.org":[["aopr","document.oncontextmenu"],["aopr","document.oncopy"],["acs","document.onkeydown"]],"ifortuna.sk":[["set-cookie","cookie_layer","1"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"ijr.com":[["acs","document.createElement","admiral"]],"ilonpolku.fi":[["set","realCookieBanner","undefined"]],"ilsaggiatore.com":[["set-cookie","cookies_analytics_enabled","0","","reload","1"]],"imprimare3d.com":[["set","realCookieBanner","undefined"]],"indahonline.com":[["aost","$","/mainseto.js:286:1"]],"industriemedien.at":[["set","realCookieBanner","undefined"]],"infotainment.mazdahandsfree.com":[["set-cookie","gdpr","accepted"]],"inquirer.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"inselberlin.de":[["set-local-storage-item","userAcceptsCookies","1"]],"insidermonkey.com":[["aopr","ABD"]],"insiderwire.com":[["set-cookie","cookie-consent","declined","","","reload","1"]],"intramuros.org":[["set-cookie","intramuros-analytics","false"],["set-cookie","intramuros-cookie-consent","true"]],"ionmobile.es":[["set-cookie","policyDirective","rejected"]],"iovivoatenerife.it":[["aopr","document.oncontextmenu"],["aopr","disableSelection"]],"iptv4best.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"iscc-system.org":[["set-session-storage-item","aesirx-analytics-rejected","true"]],"ishoppurium.com":[["set-local-storage-item","isAcceptCookie","true"]],"jacksonsun.com":[["nostif","gnt_mol_oy"]],"jankarres.de":[["set","realCookieBanner","undefined"]],"japan-fans.com":[["acs","document.onmousedown"]],"javea.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"jazz.fm":[["set-cookie","jazzfm-privacy","true"]],"jdnews.com":[["nostif","gnt_mol_oy"]],"jetv.xyz":[["nosiif","devtoolsDetector"]],"jetztspielen.de":[["set-cookie","OptanonAlertBoxClosed","true"]],"jjfish.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"jofogas.hu":[["set","Didomi","noopFunc"]],"johnlewis.com":[["set-cookie","JOHNLEWIS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1","","reload","1"],["set-cookie","JOHNLEWIS_ENSIGHTEN_PRIVACY_Essentials","1"]],"jornaljoca.com.br":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"jpopsingles.eu":[["aeld","contextmenu","preventDefault"],["acs","document.onkeydown"],["aopw","stopPrntScr"],["acs","document.oncontextmenu"],["acs","jQuery","contextmenu"],["acs","document.addEventListener","keydown"]],"jsstore.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"juejin.cn":[["aeld","copy","preventDefault"]],"juomaposti.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"jusbrasil.com.br":[["set-cookie","br-lgpd-cookie-notice-agreement-v1","1"],["aeld","/^(?:contextmenu|copy)$/","preventDefault"]],"justanswer.co.uk":[["set-cookie","cbChecked","true"]],"k33.com":[["set-local-storage-item","cookies-product","NO"],["set-local-storage-item","showCookies","NO"]],"kallidus.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"kamera-express.fr":[["set-cookie","cookie_accepted","false","","reload","1"]],"karel.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"karlhoeffkes.de":[["set","realCookieBanner","undefined"]],"karofilm.ru":[["set-cookie","cookie_usage","yes"]],"karsaz-law.com":[["acs","document.oncontextmenu","nocontextmenu"],["aopw","disableSelection"],["aopw","disableEnterKey"]],"kaystls.site":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"keeb.supply":[["set-cookie","KeebSupplyCookieConsent","true"]],"kenbrownmotors.co.uk":[["set-cookie","cookieAccepted","1","","reload","1"]],"keybr.com":[["nostif","()","5000"]],"keytube.net":[["ra","oncontextmenu","#lyrics[oncontextmenu]","complete"]],"kijyomatome-ch.com":[["ra","oncontextmenu|onselectstart","body"]],"kinderveiligheidswinkel.nl":[["set-cookie","cookie_preference","functional"]],"kinechartreuse.com":[["rc","unreadable-display","","stay"]],"kinetico.co.uk":[["set-cookie","ud_accept_analytical_cookies","0"],["set-cookie","ud_accept_marketing_cookies","0"]],"kinocheck.de":[["set-cookie","kc_c","yes"]],"kipling.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"kiplinger.com":[["set-cookie","FTR_Article_PageView","2"]],"kitepackaging.co.uk":[["set-cookie","cookie_consent","yes"],["set-cookie","cookie_consent_options","3"]],"kitguru.net":[["acs","addEventListener","adsbygoogle.length"]],"kjr-pi.de":[["set","realCookieBanner","undefined"]],"klangmassage-moser.de":[["set","realCookieBanner","undefined"]],"klassik-stiftung.de":[["set-cookie","KSW-Cookie","false"]],"knoblauch.de":[["set","realCookieBanner","undefined"]],"knoxnews.com":[["nostif","gnt_mol_oy"]],"kontextwochenzeitung.de":[["set-cookie","CookieConsent","mandatory"]],"kooora4livs.com":[["acs","document.oncontextmenu"]],"koszalincity.pl":[["acs","document.oncontextmenu"],["acs","document.onkeydown"]],"kovopolotovary.sk":[["set-cookie","web-cookies","2"]],"kpopsea.com":[["aeld","contextmenu"]],"krampouz.com":[["set-cookie","cmplz_banner-status","dismissed"]],"kuaiche.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"kundenportal.harzenergie.de":[["set-local-storage-item","cookiesAccepted","true"]],"kupbilecik.de":[["set-cookie","allow-cookie","1"],["set-cookie","cookie-functional","1"]],"kupkolo.cz":[["set-cookie","cookie-bar","0"]],"kursnacukrzyce.pl":[["acs","document.addEventListener","contextmenu"]],"kvk.nl":[["set-cookie","allowAnalyticsCookiesKvK","0"],["set-cookie","allowTrackingCookiesKvK","0"],["set-cookie","cookieLevelCodeKVK","1"]],"kyoceradocumentsolutions.cl":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"labreakfastburrito.com":[["aopr","PieScriptConfig"]],"lagundo.eu":[["set-cookie","ris_cookie_setting","1"]],"lancastereaglegazette.com":[["nostif","gnt_mol_oy"]],"ldz.lv":[["set-cookie","cookie-agreed","0"]],"learninsta.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"leiternprofi24.de":[["set-cookie","cookie-preference","1"]],"lektury.gov.pl":[["set-cookie","GA_COOKIE_READINGS","false"]],"lemwarm.com":[["set-local-storage-item","cookieClosed","true"]],"lesa.ch":[["set-cookie","lesa-che-cookie-categories","essential"]],"lichttraeumer.de":[["set","realCookieBanner","undefined"]],"liisakoski.com":[["set-cookie","epCookieConsent","0"]],"likey.me":[["aeld","/contextmenu|keydown/","preventDefault"]],"linux-apps.com":[["rmnt","script","btnHtml"],["nano-stb","count"]],"listenonrepeat.com":[["aopr","__cmpGdprAppliesGlobally"]],"litehd.tv":[["set-cookie","cookieIsAgree","true"]],"live.domatv.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"liverpoolphil.com":[["set-cookie","eucookie","1"]],"looper.com":[["aeld","copy"]],"love4u.net":[["ra","oncontextmenu","[oncontextmenu=\"return false;\"]"]],"lowkeytech.com":[["acs","String.prototype.charCodeAt","ai_"]],"ltmemory.de":[["set","realCookieBanner","undefined"]],"luyenthithukhoa.vn":[["acs","document.oncontextmenu"]],"lvs.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"lyndonroofing.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"m.kaskus.co.id":[["set-cookie","cookie_accepted","true"]],"macfarlanes.com":[["set-cookie","macfarlanes-necessary-cookies","accepted"]],"mader.bz.it":[["set-cookie","ae-cookiebanner","true"],["set-cookie","ae-esential","true"],["set-cookie","ae-statistics","false"]],"magesyrevolution.com":[["aeld","load","adblock"]],"makeresearchpay.com":[["set-cookie","user_cookie_consent","false","","reload","1"]],"makeronline.com":[["set-cookie","acceptCookie","true"]],"mallorca-unternehmen.com":[["set","realCookieBanner","undefined"]],"mamamia.com.au":[["set-local-storage-item","itbl_consent_timestamp","1"]],"mandatory.com":[["aopr","__cmpGdprAppliesGlobally"]],"mangareader.to":[["aeld","contextmenu","_0x"]],"maniac.de":[["set","realCookieBanner","undefined"]],"mantel.com":[["set-cookie","tracking_cookie","1"]],"markimicrowave.com":[["set-local-storage-item","alreadyAcceptCookie","true"]],"mathcrave.com":[["rmnt","script","disable_show_error"]],"matriculant401merited.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"matzoo.pl":[["ra","oncontextmenu"],["aeld","contextmenu"]],"maxedtech.com":[["no-fetch-if","googlesyndication"],["no-xhr-if","googlesyndication"]],"mbhszepkartya.hu":[["set-cookie","cookieBasic","true"]],"mediafax.ro":[["aeld","copy"]],"medtube.fr":[["set-cookie","cookiePolicy","4"]],"medtube.pl":[["set-cookie","cookiePolicy","4"]],"melkkobrew.fi":[["set-cookie","cookies-required","1","","reload","1"]],"meningitis.com":[["set-local-storage-item","gskConsentClosedv2","true"]],"mesterslagteren.dk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"mimikama.org":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"min.io":[["set-local-storage-item","cookieConsent","accepted"]],"mindmegette.hu":[["ra","href","[href*=\"ad.adverticum.net\"]"]],"mineskin.org":[["aopw","ABB_config"]],"minfin.fgov.be":[["set-cookie","fedconsent","1"]],"mio.to":[["aeld","contextmenu"]],"miss21.estore.asgroup.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"mixmods.com.br":[["aopr","abde"]],"mkup.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"mkv-pastes.com":[["aeld","contextmenu"],["aopw","document.onselectstart"]],"mobiliteit.nl":[["set-cookie","gdpr","deny"]],"mobire.ee":[["set-cookie","ws-cookiebar-mobire","7"]],"mocah.org":[["nosiif","adsbygoogle"],["ra","oncontextmenu"]],"moemax.bg":[["set-cookie","amcookie_allowed","1"]],"mojposao.hr":[["set-local-storage-item","cookies-policy-accepted","true"]],"monese.com":[["set-cookie","accept-analytical-cookies","false"],["set-cookie","accept-cookies","true"],["set-cookie","accept-marketing-cookies","false"]],"monorhinouscassaba.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"montecwear.com":[["set-local-storage-item","cookieBannerShown","true"]],"moondao.com":[["set-local-storage-item","cookie_consent","false"]],"more.com":[["set-cookie","AcceptedCookies","1"]],"motogon.ru":[["aopr","oSpPOptions"]],"mtbtutoriales.com":[["aopw","reEnable"],["acs","document.oncontextmenu"]],"mummelito.de":[["set","realCookieBanner","undefined"]],"musicradar.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"mx.com":[["set-cookie","hide-cookie-banner","1"]],"myaccount.puffininsurance.com":[["set-cookie","fm-consent","1"]],"mycentraljersey.com":[["nostif","gnt_mol_oy"]],"myhtebooks.com":[["ra","oncontextmenu|ondragstart|onselectstart|onselect|oncopy|onbeforecopy|onkeydown|onunload"]],"myschool.mos.ru":[["set-cookie","USER_AGREEMENT","1"]],"n1mwq.org":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"nadia.gov.gr":[["set-cookie","consent-status","1"]],"naku.at":[["set","realCookieBanner","undefined"]],"naruko.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"natlawreview.com":[["set-cookie","cookie-agreed","0"]],"natuerlich-holzschuhe.de":[["set-cookie","cookie-preference","1"]],"nbcsportsedge.com":[["aopw","admrlWpJsonP"]],"neofinancial.com":[["set-local-storage-item","neoCookiesAdvertisingConsent","1"],["set-local-storage-item","neoCookiesPerformanceConsent","1"]],"netuplayer.top":[["set","devtoolsDetector.launch","noopFunc"]],"neumann-grafik.de":[["set-cookie","Consent","0"]],"neumarkt-egna.it":[["set","realCookieBanner","undefined"]],"neviditelnepradlo.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"newatlas.com":[["aopr","__cmpGdprAppliesGlobally"]],"news-leader.com":[["nostif","gnt_mol_oy"]],"news-press.com":[["nostif","gnt_mol_oy"]],"news.samsung.com":[["set-cookie","COOKIECONSENT","false"]],"newsbook.pl":[["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"newsme.gr":[["aopr","nocontextmenu"],["acs","document.oncontextmenu"],["acs","document.ondragstart"]],"neyrologos.gr":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"ngs70.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"nickiswift.com":[["aeld","copy"]],"nihongoaz.com":[["rmnt","script","contentprotector"]],"nofilmschool.com":[["acs","document.createElement","admiral"]],"nordkurier.de":[["set-local-storage-item","consentManager_shown","true"],["set-local-storage-item","consent_necessary","true"],["set-local-storage-item","consent_performance","false"]],"northeastspace.ie":[["rc","wcc-popup-overflow","body","stay"]],"northumberland-walks.co.uk":[["ra","oncontextmenu|ondragstart|onselectstart"]],"nostracasa.com.br":[["ra","oncontextmenu|onselectstart|ondragstart"]],"notify.events":[["set-cookie","_gdpr","necessary","","reload","1"]],"nove.fr":[["set-local-storage-item","cookie","true"]],"noweconomy.live":[["set","document.oncontextmenu","null"]],"nsk-tv.narod.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"nurgutes.de":[["set-cookie","cookieDeclined","1"]],"nwherald.com":[["aopr","HTMLIFrameElement"]],"observatoriodocinema.uol.com.br":[["acs","document.addEventListener","preventDefault"]],"oead.at":[["set-cookie","cookieconsent_status_new","1"]],"oekolandbau.de":[["set-cookie","CookieConsent","mandatory"]],"oferty.dsautomobiles.pl":[["aeld","contextmenu"]],"officeprinciples.com":[["set-cookie","user_cookie_consent","true"]],"ohotaktiv.ru":[["set-cookie","acceptCookieOhotaktiv","1"]],"ojogos.com.br":[["set-cookie","OptanonAlertBoxClosed","true"]],"ok-bergbahnen.com":[["set-cookie","Consent","0"]],"okimono.nl":[["set-cookie","_pandectes_gdpr","1"]],"okuhanako.net":[["ra","oncontextmenu|onselectstart","body[oncontextmenu]","complete"]],"olx.uz":[["set-cookie","cookieBarSeen","true"]],"onlinetexttools.com":[["nano-sib","Clipboard","1000","0.001"]],"ontivi.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"openaccess.wgtn.ac.nz":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"opportunitydesk.org":[["aopr","disable_copy"],["acs","document.ondragstart"]],"orbia.com":[["set-cookie","configured_cookie_consents","0"],["set-cookie","consent_analytics","false"],["set-cookie","consent_functional","true"],["set-cookie","consent_social","false"]],"orda.shef.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"otpportalok.hu":[["rc","body","no_scroll","complete"]],"oxfordonlineenglish.com":[["set-cookie","ooe_cookie_policy_accepted","no"]],"paderborn.de":[["set-cookie","cookies-accepted","true","","reload","1"]],"paesifantasma.it":[["set","x5engine.utils.imCodeProtection","null"]],"pandurul.ro":[["ra","oncopy"],["acs","$","copy"]],"patria.net":[["set","realCookieBanner","undefined"]],"patricia.bg":[["set-cookie","amcookie_allowed","1"],["set-cookie","amcookie_policy_restriction","allowed"]],"paxdei.th.gl":[["nostif",".getState();","4500"]],"pazarama.com":[["set-cookie","cookie_consent_v2","true"]],"pccomponentes.fr":[["set-cookie","accept_cookie","1"]],"pccomponentes.pt":[["set-cookie","accept_cookie","1"]],"pcworld.com":[["set-cookie","hide-generic-overlay-techhive","true"]],"pepperlive.info":[["set","console.clear","noopFunc"]],"phimlongtieng.net":[["acs","oncontextmenu"],["acs","navigator","devtools"],["acs","setInterval","stateObject"],["acs","setTimeout","debugger"],["aopr","devtoolsDetector"]],"phish-test.de":[["set-cookie","gtag","true"]],"photofloh.de":[["set","realCookieBanner","undefined"]],"pinel-medizin.de":[["set","realCookieBanner","undefined"]],"pisr.org":[["aeld","","mdp"]],"pixeden.com":[["set-local-storage-item","pxdn_cookie_consent","true"]],"pixieset.com":[["set-cookie","pixieset_analytics","denied"],["set-cookie","pixieset_marketing","denied"]],"planetepluscanada.com":[["set-cookie","analytics","false"],["set-cookie","rgpd","false","","reload","1"]],"playertv.net":[["rmnt","script","/contextmenu|devtool/"]],"playtiao.com":[["set-local-storage-item","tiao:analytics-consent","denied"]],"plos.org":[["set-cookie","plosCookieConsentStatus","false"]],"poconorecord.com":[["nostif","gnt_mol_oy"]],"poolpiscina.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"poplinks.idolmaster-official.jp":[["ra","oncontextmenu|onselectstart|onmousedown","body"]],"portalwrc.pl":[["aeld","contextmenu"]],"postcrescent.com":[["nostif","gnt_mol_oy"]],"posterstore.eu":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.jp":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.nl":[["set-cookie","synapse-cookie-preferences-set","true"]],"prenota.humanitas.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"primicia.com.ve":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"privatekeys.pw":[["set-cookie","cookie_consent_closed","1"]],"prodopa.de":[["set","realCookieBanner","undefined"]],"profire.it":[["set-cookie","tincx_cookie_notice_accepted","true"]],"project529.com":[["set-cookie","cookies_ok","true"]],"prosenectute.ch":[["set-cookie","cookieDisclaimerShown","true"]],"ptittraindunord.com":[["set-cookie","protecteur","1"]],"publibike.ch":[["set-cookie","gdpr2","true"],["set-cookie","gdpr2_required","true"]],"pulpe.eu":[["set","realCookieBanner","undefined"]],"puma.com":[["set-cookie","pumacookies","1","","reload","1"]],"pupupul.site":[["set","devtoolsDetector.launch","noopFunc"]],"pureselfmade.com":[["set","realCookieBanner","undefined"]],"putlocker.pe":[["nosiif","_0x"]],"puzzle-chess.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-norinori.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-shakashaka.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-slant.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.at":[["set-cookie","puzzleyou-at_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.be":[["set-cookie","puzzleyou-be_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.fi":[["set-cookie","puzzleyou-fi_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.it":[["set-cookie","puzzleyou-it_cookies_consent_allowlist","0","","reload","1"]],"qinetiq.com":[["set-cookie","cookie_pref_accept","1","","reload","1"],["set-cookie","cookie_pref_analytics","0"]],"qrzcq.com":[["set-cookie","COOKIES_ACK","1","","reload","1"]],"raccontivietati.com":[["aopr","disableSelection"]],"racevpn.com":[["aopw","document.onkeydown"]],"radicalsandvictuallers.co.uk":[["set-cookie","ce-cookie","N"]],"radnuk.com.ua":[["set","document.oncopy","undefined"],["ra","oncopy",".articles-content[oncopy]","complete"]],"railf.jp":[["ra","oncontextmenu|oncopy"]],"rapid-cloud.co":[["set","devtoolsDetector.launch","noopFunc"]],"realfinanceblogcenter.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"recantodasletras.com.br":[["aopr","RL.licenseman.init"]],"redding.com":[["nostif","gnt_mol_oy"]],"redlionhandcross.co.uk":[["set-cookie","ce-cookie","N"]],"reifenservice-oberstdorf.de":[["set-cookie","Consent","0"]],"reise-zikaden.de":[["set","realCookieBanner","undefined"]],"reisekontakte.at":[["set","realCookieBanner","undefined"]],"researchaffiliates.com":[["set-cookie","ra-cookie-disclaimer-11-05-2022","true"]],"reservations.helveticmotion.ch":[["set-cookie","decline","true","","","reload","1"]],"rhein-pfalz-kreis.de":[["set-local-storage-item","PrivacyPolicy[][core]","forbidden"],["set-local-storage-item","PrivacyPolicy[][maps]","forbidden"],["set-local-storage-item","PrivacyPolicy[][readSpeaker]","forbidden"],["set-local-storage-item","PrivacyPolicy[][tracking]","forbidden"],["set-local-storage-item","PrivacyPolicy[][videos]","forever"]],"rodrigue-app.ct.ws":[["set-local-storage-item","cookieAccepted","true"]],"rolandgermany.com":[["set","realCookieBanner","undefined"]],"romprovider.com":[["aopw","document.oncontextmenu"]],"salzer.at":[["set-cookie","cookiesAllowRequired","true"]],"sandboxservices.be":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"santacristina.eu":[["set-cookie","ris_cookie_setting","1"]],"saos.org.pl":[["set","CookiePolicy","{}"],["set","CookiePolicy.init","noopFunc"]],"saunahuus.de":[["set","realCookieBanner","undefined"]],"savoriurbane.com":[["aopw","document.oncontextmenu"]],"sawren.pl":[["set-local-storage-item","consent_popup","1"]],"scharoun-theater-wolfsburg-webshop.tkt-datacenter.net":[["set-cookie","cookieBannerConfirmed","0","","reload","1"]],"scheidegger.nl":[["set-cookie","privacy_level","1"]],"schulebruetten.ch":[["set","realCookieBanner","undefined"]],"scribd.com":[["aeld","/^(mouseout|mouseleave)$/"]],"seexh.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"seikatsu-hyakka.com":[["acs","document.oncontextmenu"]],"sekaikomik.live":[["acs","document.oncontextmenu"]],"selfstudyhistory.com":[["acs","document.ondragstart"],["aeld","dragstart|keydown/"],["aopw","disableEnterKey"],["aopw","document.onselectstart"],["acs","jQuery","contextmenu"]],"seller.samsungapps.com":[["set-cookie","COOKIE_CONSENT","TRUE"],["set-cookie","GA_CONSENT","FALSE"]],"sendasmile.de":[["set-cookie","K2Go[consent]","required"]],"seoul.cs.land.to":[["ra","onselectstart"]],"serasa.com.br":[["set-cookie","S_COOKIES_ACCEPTED","true"]],"ship.pirateship.com":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"shlib.life":[["set-local-storage-item","cookies-toast-shown","true"]],"shop.norns.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.okogreen.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.s3.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"showtv.com.tr":[["set-cookie","cookiePolicy","1"]],"shrapnel.com":[["set-cookie","ConsentCookies","false"]],"shz.al":[["set","confirm","noopFunc"]],"sl-landschaftsgestaltung.de":[["set","realCookieBanner","undefined"]],"smile.io":[["set-cookie","smile_allow_cookies","true"]],"snockscoffee.com":[["set-cookie","_pandectes_gdpr","1"]],"softedu.pl":[["set","realCookieBanner","undefined"]],"sokolow-mlp.pl":[["acs","document.onmousedown"]],"songbeam.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"sopot.net":[["ra","onmousemove|ondragstart|onselectstart|oncontextmenu","body"]],"sovetromantica.com":[["set","fuckAdBlock","trueFunc"]],"spieltraum-berlin.de":[["set","realCookieBanner","undefined"]],"sporttotal.tv":[["no-fetch-if","doubleclick"],["set","HTMLImageElement.prototype.onerror","undefined"]],"spusu.co.uk":[["set-cookie","acceptSpusuCookies","necessary"]],"spytunes.com":[["set","realCookieBanner","undefined"]],"st-ulrich-steyr.ooe.gv.at":[["set-cookie","ris_cookie_setting","1"]],"stammzellenspender.be":[["rc","cookieconsent-active","body","stay"]],"starcourier.com":[["nostif","gnt_mol_oy"]],"starhub.com":[["set-cookie","cookiePolicy","true"]],"starzunion.com":[["aeld","/^(contextmenu|mousedown|keydown)$/","preventDefault"]],"statisticsanddata.org":[["set-cookie","cmplz_marketing","allow"]],"steamkeysglobais.com.br":[["set-local-storage-item","lgpd_consent","true"]],"steinbockhuette.de":[["set-cookie","Consent","0"]],"stewes.de":[["set","HB.CookieSettings.init","noopFunc"]],"stiridinromania.ro":[["acs","document.oncontextmenu"]],"stlorenzen.eu":[["set-cookie","ris_cookie_setting","1"]],"store.pw.live":[["set-cookie","accept_cookies","accepted"]],"streaminglearningcenter.com":[["nostif","ads"]],"streema.com":[["set-cookie","cookie_warning","1"]],"suedkurier.de":[["ra","oncontextmenu"]],"superherohype.com":[["aopr","__cmpGdprAppliesGlobally"]],"swisscard.ch":[["set-cookie","sc-privacy-settings","true"]],"swnsdigital.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"t3.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"tabletable.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"takealot.com":[["set-cookie","cookieNotice","true"]],"taskus.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"tass.ru":[["set-local-storage-item","consentCookie","true"]],"taxo-acc.pl":[["aeld","contextmenu"]],"tcpalm.com":[["nostif","gnt_mol_oy"]],"teachoo.com":[["aeld","keydown"]],"tecalliance.net":[["set","realCookieBanner","undefined"]],"techkings.org":[["set","samDetected","true"]],"techniknews.net":[["set","realCookieBanner","undefined"]],"techsini.com":[["acs","jQuery","preventDefault"]],"tecsafe.de":[["set","realCookieBanner","undefined"]],"tekloggers.com":[["ra","oncontextmenu|onkeydown|onmousedown"]],"tempatwisataseru.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"temu.com":[["set-cookie","privacy_setting","100"]],"teplickedorty.cz":[["set-cookie","DmCookiesAccepted","true"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"th-world.com":[["aeld","/contextmenu|select|copy/"],["ra","oncontextmenu|ondragstart|onselectstart|onkeydown|oncopy|oncut"],["aeld","","0x"]],"thealliance.ai":[["set-local-storage-item","AI Alliance_ReactCookieAcceptance_hasSetCookies","true"]],"thebeerstore.ca":[["set-cookie","cookies_popup","true"]],"thecalifornian.com":[["nostif","gnt_mol_oy"]],"thecavershamrosereading.co.uk":[["set-cookie","ce-cookie","N"]],"thecockinncockfosters.co.uk":[["set-cookie","ce-cookie","N"]],"thedailyjournal.com":[["nostif","gnt_mol_oy"]],"thedailyreporter.com":[["nostif","gnt_mol_oy"]],"thefashionspot.com":[["aopr","__cmpGdprAppliesGlobally"]],"thegraph.com":[["set-cookie","cookie-consent","false"]],"theintell.com":[["nostif","gnt_mol_oy"]],"thejakartapost.com":[["set","document.oncopy","noopFunc"],["rmnt","script","/$.*ready.*setInterval/"]],"thelambchiswick.co.uk":[["set-cookie","ce-cookie","N"]],"thelivingroomcinema.co.uk":[["set-cookie","a1wcc","NECESSARY"]],"themeparktourist.com":[["nosiif","visibility","1000"]],"theramsheaddisley.co.uk":[["set-cookie","ce-cookie","N"]],"thesalisburyarmsedinburgh.co.uk":[["set-cookie","ce-cookie","N"]],"thetimesherald.com":[["nostif","gnt_mol_oy"]],"theweek.com":[["set-cookie","FTR_Article_PageView","2"]],"thinkamericana.com":[["nosiif","offsetHeight"]],"thinkingwithyou.com":[["set","realCookieBanner","undefined"]],"thotsbay.tv":[["aeld","/contextmenu|keydown/"],["set","devtoolsDetector.launch","noopFunc"]],"tides.net":[["nostif","adsbygoogle"]],"tiempo.hn":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"timberland.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"times-gazette.com":[["nostif","gnt_mol_oy"]],"timesreporter.com":[["nostif","gnt_mol_oy"]],"tme.eu":[["set-local-storage-item","necessary_cookie_confirmed","true"]],"tobycarvery.co.uk":[["set-cookie","ce-cookie","N"]],"tokvila.lt":[["set-cookie","cookiesAgree","true"],["set-cookie","cookiesLevel1","1"]],"tomsguide.com":[["aopr","_sp_._networkListenerData"],["set-cookie","FTR_Article_PageView","2"]],"tomshardware.com":[["set-cookie","FTR_Article_PageView","2"]],"toontales.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"top-car-hire.com":[["set-cookie","cookies_aceptadas","true","","reload","1"]],"toppremiumpro.com":[["aeld","/contextmenu|selectstart|copy|dragstart/"],["aopr","cpp_loc"]],"topuniversities.com":[["set-cookie","cookie-agreed","2"]],"torontosom.ca":[["acs","document.oncontextmenu","preventDefault"]],"totemat.pl":[["aopr","disableSelection"]],"tower.dev":[["set-local-storage-item","framerCookiesDismissed","true"]],"toweroffantasy.info":[["rmnt","script","onerror"]],"troyer.it":[["set-cookie","tincx_cookie_notice_accepted","true"]],"tuscaloosanews.com":[["nostif","gnt_mol_oy"]],"tv.youtube.com":[["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"]],"tvline.live":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvn.pl":[["aeld","contextmenu","a"]],"tvonline24.net":[["aeld","contextmenu"]],"twenga.fr":[["set-cookie","cookiewarning","1","","reload","1"]],"twenga.pl":[["set-cookie","cookiewarning","1","","reload","1"]],"twenga.se":[["set-cookie","cookiewarning","1","","reload","1"]],"ubisys.de":[["set","realCookieBanner","undefined"]],"udi-immo.com":[["set-cookie","enableCookies","true"]],"uemeds.cn":[["ra","oncontextmenu|ondragstart|onselect"]],"uhb.nhs.uk":[["set-cookie","AcceptCookies","false"]],"umcutrecht.nl":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"umweltportal.nrw.de":[["set-cookie","COOKIE_SETTINGS_SAVED","true"],["set-cookie","COOKIE_SUPPORT","true"]],"utorrentgamesps2.blogspot.com":[["acs","document.onkeydown"],["ra","onselectstart"]],"v6embed.xyz":[["nosiif","devtool"],["nostif","devtool"]],"vadhander.kramfors.se":[["set","settings.consent","true"]],"valostore.no":[["set-local-storage-item","cookieConsent","necessary"]],"valtiokonttori.fi":[["set-cookie","cookieconsent_dismissed","no"]],"vanbeekbedden.nl":[["set-cookie","consent-cookies","1"]],"vans.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"veblr.com":[["ra","oncontextmenu","#VdoPlayerDiv"]],"vectorsoft.de":[["set","realCookieBanner","undefined"]],"verfwebwinkel.be":[["set-cookie","pmStorage","1"]],"vibuxer.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"vid-guard.com":[["nosiif","devtool"],["nostif","devtool"]],"vidplay.site":[["nostif","||null"],["aost","console.clear"]],"vidtube.site":[["set","devtoolsDetector.launch","noopFunc"]],"vilanova.cat":[["set-cookie","politica_cookies_rgpd","0"]],"villagrancanaria.com":[["set-local-storage-item","cookies_view","true"]],"vilson.com":[["set-cookie","allowGetPrivacyInfo","true"]],"vinaurl.blogspot.com":[["acs","matchMedia"],["aopr","shortcut"],["acs","document.onkeydown"]],"vitalvibe.eu":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"vitbikes.de":[["set-cookie","custom-cookies-accepted","1","","reload","1"]],"vivaldi.com":[["set-cookie","acceptedCookies","true"]],"voha.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"volkswagen-group.com":[["set-cookie","vw_mms_hide_cookie_dialog","1"]],"voltadol.at":[["set-local-storage-item","cookiebanner-active","false"]],"vrsdigital.de":[["set-cookie","tracking","0"]],"w6-wertarbeit.de":[["set-cookie","cookie-preference","1"]],"wader.toys":[["aopw","document.oncontextmenu"]],"walmart.ca":[["set-local-storage-item","enableCookieBanner","false"]],"warnerbros.com":[["set-local-storage-item","wb-us-ltp-consent-v1","1"]],"wasp.sh":[["set-cookie","wasp-cookies-consent","false"]],"webtapete.de":[["set","realCookieBanner","undefined"]],"webtimiser.de":[["set","realCookieBanner","undefined"]],"weetabix.no":[["rc","wcc-popup-overflow","body","stay"]],"weetabixfoodcompany.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"welte-glasuren.com":[["set","realCookieBanner","undefined"]],"wenku.baidu.com":[["aeld","/contextmenu|dragstart|keydown/","event.dispatch.apply"]],"westernjournal.com":[["aopr","__cmpGdprAppliesGlobally"]],"westhost.com":[["set-cookie","cb-enabled","accepted"]],"whitehorseradlett.co.uk":[["set-cookie","ce-cookie","N"]],"wiibackupmanager.co.uk":[["no-fetch-if","adsbygoogle"]],"wikiofcelebs.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"winaero.com":[["acs","jQuery","tweaker"]],"wisconsinrapidstribune.com":[["nostif","gnt_mol_oy"]],"wjx.cn":[["aopr","_0x1a4c"],["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"wohnmobilcenter-drechsler.de":[["set","realCookieBanner","undefined"]],"world4.eu":[["aopw","document.oncontextmenu"],["acs","document.oncopy"],["acs","disable_copy"],["acs","disable_hot_keys"],["aopw","disable_ext_code"]],"worldpopulationreview.com":[["acs","document.createElement","admiral"]],"wp-loft.de":[["set","realCookieBanner","undefined"]],"wpchen.net":[["aeld","contextmenu"]],"www-lincolnshirelive-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www.e-tec.at":[["set-cookie","cc_granted","true","","","domain","www.e-tec.at","reload","1"]],"www.macysgoldenconfetti.com":[["set-cookie","viewedCookieDisclaimer","true"]],"xhamster1.desi":[["set-cookie","cookie_accept","1"]],"xhamster3.com":[["set-cookie","cookie_accept","1"]],"xhbranch5.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhdate.world":[["set-cookie","cookie_accept","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhofficial.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhtab4.com":[["set-cookie","cookie_accept","1"]],"xledger.net":[["set-cookie","agreesWithCookies","true"]],"xlogic.org":[["set-cookie","wpca_consent","1"]],"yplay.de":[["set","realCookieBanner","undefined"]],"zalukaj.io":[["nostif","(!0)","8000"]],"zdnet.de":[["aopr","can_i_run_ads"]],"zeeebatch.blogspot.com":[["acs","document.onmousedown"]],"zerohedge.com":[["aeld","mouseout"]],"zimaspace.com":[["set-local-storage-item","cookiesConsent","rejected"]],"zivahub.uct.ac.za":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"zs-watch.com":[["set-cookie","hasPolicy","Y"]],"zulily.com":[["nostif","loginModal","500"]],"zur-glocke.com":[["set","realCookieBanner","undefined"]],"zurueckzumursprung.at":[["set-cookie","cookiesClosed","1"]],"zutobi.com":[["set-cookie","cky-action","yes"],["set-cookie","cookieyes-functional","no"],["set-cookie","cookieyes-necessary","yes"],["set-cookie","cookieyes-other","no"]],"zwembaddekouter.be":[["set-cookie","allowCookies","1","","reload","1"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
