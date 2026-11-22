/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"102bank.com":[["aopw","adBlockDetected"]],"11alive.com":[["aeld","/^(mouseout|mouseleave)$/"],["aeld","scroll"]],"123movies.com.br":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"],["nostif","_0x"],["set","console.clear","noopFunc"]],"199-euro-computer.de":[["set","realCookieBanner","undefined"]],"43.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"99bitcoins.com":[["nostif","ThriveGlobal"]],"abastible.cl":[["set-local-storage-item","cookie-accepted","true"]],"abstream.to":[["acs","document.onkeydown"]],"ac-grimmen.de":[["set","realCookieBanner","undefined"]],"accace.ro":[["set","realCookieBanner","undefined"]],"accademiainformatica.com":[["set","realCookieBanner","undefined"]],"actrento.com":[["set","realCookieBanner","undefined"]],"adidas.cz":[["set-cookie","notice_preferences","2"]],"adidas.ru":[["set-cookie","notice_preferences","2"]],"adidas.se":[["set-cookie","notice_preferences","2"]],"adslayuda.com":[["set","better_ads_adblock","null"]],"aida64.de":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"aileen-novel.online":[["acs","disable_hot_keys"],["acs","document.oncontextmenu"]],"airchina.co.uk":[["set-cookie","EnableABTest","false"],["set-cookie","EnableFacebook","false"],["set-cookie","EnableGA","false"]],"airwallex.com":[["set-cookie","awx_cookie_consent","true"]],"ajanvaraus.veripalvelu.fi":[["set-cookie","cb-enabled-fi","accepted"]],"all4pets.com.pl":[["aeld","contextmenu"]],"all4running.ru":[["set-cookie","cookieConsent","necessary","","reload","1"]],"allegro.de":[["set-cookie","gdpr_permission_given","0"]],"allegro.es":[["set-cookie","gdpr_permission_given","0"]],"allegro.it":[["set-cookie","gdpr_permission_given","0"]],"alljigsawpuzzles.de":[["set-cookie","_pandectes_gdpr","1"]],"amd.by":[["set-cookie","cookie_consent","1","","reload","1"]],"amigosmuseoreinasofia.org":[["set-cookie","consentcookies_Esenciales","OK"]],"amlesson.ru":[["aopw","disable_keystrokes"],["aopw","disableSelection"]],"anastore.com":[["set-cookie","cok","1","","reload","1"]],"androidtvbox.eu":[["aeld","dragstart"],["aopr","nocontextmenu"],["acs","document.ondragstart"]],"anglingdirect.co.uk":[["set-cookie","amcookie_allowed","1"],["set-cookie","amcookie_policy_restriction","allowed"]],"anikoto.it":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"animalwebcams.net":[["set","realCookieBanner","undefined"]],"animedao.org":[["aopr","devtoolsDetector"]],"aniwave.ru":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"anix.com":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"annabeauty-stuttgart.de":[["set","realCookieBanner","undefined"]],"antena1.live":[["aeld","contextmenu"]],"app.argos.education":[["set-cookie","_cky_opt_in","false"],["set-cookie","_cky_opt_in_dismiss","true"]],"app.zasta.de":[["set-cookie","CookieConsent","true"]],"apply.opentech.fund":[["set-local-storage-item","cookieconsent","decline"]],"archiup.com":[["set-local-storage-item","cookiePolicyAccepted","yes"]],"arsdigita.de":[["set","realCookieBanner","undefined"]],"artisan.co":[["set-local-storage-item","artisan_acceptCookie","true"]],"aruba.com":[["set-cookie","ATA.gdpr.popup","true"]],"arzl-pitztal.gv.at":[["set-cookie","ris_cookie_setting","1"]],"asiatv.es":[["aeld","contextmenu"]],"astro-cric.pages.dev":[["set","confirm","noopFunc"]],"athletic.net":[["acs","$","blur"]],"audi-mediacenter.com":[["set-cookie","AUDI_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_Performance","0"]],"auto1.com":[["set-cookie","consent","essential"],["set-cookie","consent_needed","1"]],"autodoc.com":[["aeld","mousedown","function(t)"]],"autodoc.de":[["aeld","mousedown","function(t)"]],"autohaus-musberg.de":[["set-cookie","hide-gdpr-bar","true"]],"autophorie.de":[["aopr","disableSelection"]],"awardsradar.com":[["set-cookie","g1_popup_disabled","1"]],"azcentral.com":[["nostif","gnt_mol_oy"]],"azertyfactor.be":[["set-cookie","consent-cookie","1"]],"b757.info":[["set","realCookieBanner","undefined"]],"backmarket.it":[["set-cookie","BM_Advertising","false","","reload","1"],["set-cookie","BM_Analytics","false"],["set-cookie","BM_User_Experience","true"]],"badayak.com":[["acs","document.oncontextmenu"]],"balance-fahrradladen.de":[["set-cookie","cookie-preference","1"]],"basketball-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"bassicostruzioni.it":[["rc","wcc-popup-overflow","body","stay"]],"bassolsenergia.com":[["set-cookie","CookienatorConsent","false"]],"battlecreekenquirer.com":[["nostif","gnt_mol_oy"]],"bayernlabo.de":[["set-cookie","layerCookie","true","","reload","1"],["set-cookie","video","true"]],"bbfun.de":[["set","realCookieBanner","undefined"]],"bcliquorstores.com":[["set-session-storage-item","enews_popup_session","1"]],"beautycon.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"beerjerk.co.nz":[["set-cookie","beyours:age-verifier","true"]],"beeze.de":[["set","realCookieBanner","undefined"]],"beldora.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"benefitcosmetics.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"berkeleygroup.digital":[["set-cookie","BGDESKTOP_TERMS","1"]],"bestcam.tv":[["aeld","/contextmenu|keydown/","preventDefault"]],"betway.es":[["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Marketing","0"],["set-cookie","betway-cookie-policy","true"],["set-cookie","bwui_cookieToastDismissed","true"]],"betway.ru":[["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Marketing","0"],["set-cookie","betway-cookie-policy","true"],["set-cookie","bwui_cookieToastDismissed","true"]],"bewusstes-zentrum.de":[["set","realCookieBanner","undefined"]],"bezirksgemeinschaftpustertal.it":[["set-cookie","ris_cookie_setting","1"]],"bg-gledai.de":[["rmnt","script","document.oncontextmenu"],["aeld","contextmenu"],["nosiif","debugger"]],"bg-gledai.net":[["rmnt","script","document.oncontextmenu"],["aeld","contextmenu"],["nosiif","debugger"]],"bhoomtv.co.uk":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"bhoomtv.fr":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"bialettikave.hu":[["set-cookie","cookie_jog","1"],["set-cookie","cookie_marketing","0"],["set-cookie","cookie_oldal","1"]],"bidup.amtrak.com":[["set-local-storage-item","pg-accept-cookies","true"]],"biegnaszczyt.pl":[["set-cookie","cr","true"]],"bigtitslust.com":[["set-cookie","kt_agecheck","1"]],"bimedis.com":[["set-cookie","accept_cookies","1"]],"binsoft.pl":[["set-cookie","allowcookies","1","","reload","1"]],"biolib.cz":[["set-cookie","analytics_storage","denied","","reload","1"]],"bitreporter.de":[["set","realCookieBanner","undefined"]],"bjootify.com":[["set-cookie","CookieConsentStatus","Allow"]],"bklm-ahaus.de":[["set","realCookieBanner","undefined"]],"blaze.fr":[["set-cookie","accept_policy_regulation","1"]],"blhv.de":[["set","realCookieBanner","undefined"]],"blindhelp.net":[["ra","oncontextmenu|oncopy|onselectstart","body","complete"]],"blitzrechner.de":[["aeld","copy"]],"bloomberglinea.com":[["aeld","copy"]],"bluemoon-mcfc.co.uk":[["nosiif","removeChild"]],"bmovies.nl":[["aeld","devtoolschange"]],"bmovies.pl":[["aeld","devtoolschange"]],"boke112.com":[["aopw","stopPrntScr"]],"bold.dk":[["acs","eval","abd"]],"bonobono.com":[["ra","oncontextmenu|ondragstart|onselectstart","body"]],"bontadivina.it":[["set-cookie","bonta-divina-ita-cookie-categories","essential"]],"booksmedicos.org":[["aopw","disableSelection"],["acs","jQuery","document"]],"bottle-store.sk":[["set-cookie","site-agreement","1"]],"bouwmatron.nl":[["set-cookie","consent-cookies","1"]],"bpstat.bportugal.pt":[["set-cookie","bdp_use_cookies","notagree"]],"branc.jp":[["set-cookie","inc_optin_never_see_again-popup-1","1"]],"brasiltec.ind.br":[["set-cookie","cookie_accept","1"]],"brunnenthal.at":[["set-cookie","ris_cookie_setting","1"]],"btvnovinite.bg":[["aeld","contextmenu"]],"budgetair.fr":[["set-cookie","cookieConsentLevel","functional"]],"budgetair.org":[["set-cookie","cookieConsentLevel","functional"]],"buehler-segelfreunde.de":[["set-cookie","Consent","0"]],"buendnisse-fuer-bildung.de":[["set-cookie","gsbbanner","0"]],"buidlbox.io":[["set-cookie","cookiesAccepted","true"]],"businesshemden.com":[["set-cookie","mnd-cookie-accepted-businesshemdencom1","1"],["set-cookie","mnd-mkt_cookie","false"],["set-cookie","mnd-statistics_cookie","false"]],"bvk-beamtenversorgung.de":[["set-cookie","bvkcookie","true"]],"byhue-official.com":[["set-cookie","allowGetPrivacyInfo","true"]],"cachecrawler.com":[["set-session-storage-item","hasConsent","1"],["set-session-storage-item","hasDsg","1"]],"calvinklein.pl":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"cancercentrum.se":[["set-cookie","analyticalConsent","false"],["set-cookie","consentStored","true"]],"cancertherapyadvisor.com":[["remove-cookie","hmmet"]],"cantonrep.com":[["nostif","gnt_mol_oy"]],"cape.co":[["set-local-storage-item","no-cookie-notice-dismissed","true"]],"capecodtimes.com":[["nostif","gnt_mol_oy"]],"carbon.ag":[["set","realCookieBanner","undefined"]],"carry.pl":[["set-cookie","__carry_cookie_module","2","","reload","1"]],"cataloagedeoferte.ro":[["set-cookie","CookieConsent","true"]],"ccvalleisarco.it":[["set-cookie","ris_cookie_setting","1"]],"cda-hd.cc":[["set","document.oncontextmenu","null"]],"cdn.gamemonetize.com":[["ra","oncontextmenu","body"]],"cheaptickets.nl":[["set-cookie","cookieConsentLevel","functional"]],"cifraclub.com":[["set-cookie","cc-cookie-policy","true"]],"cirrusassessment.com":[["rc","wcc-popup-overflow","body","stay"]],"citilink.ru":[["set-cookie","infoCookieUses","true"]],"citizen-times.com":[["nostif","gnt_mol_oy"]],"citroen.pl":[["aeld","contextmenu"],["aopw","document.onkeypress"]],"cityandstateny.com":[["rc","interstitial","aside","stay"]],"ciweimao.com":[["aopr","document.oncontextmenu"],["aopw","document.body.oncopy"]],"clinicadelsudor.es":[["set-cookie","allow_hiper_cookie","true"]],"comicsands.com":[["aopr","__cmpGdprAppliesGlobally"]],"compact-shop.de":[["set-cookie","ris_cookie_setting","1"]],"compari.net":[["set","realCookieBanner","undefined"]],"comte.com":[["set-cookie","accept-cookie","no"]],"comune.rodengo.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sanlorenzodisebato.bz.it":[["set-cookie","ris_cookie_setting","1"]],"context.news":[["set-cookie","cookieConsent","true"]],"converse.pl":[["set-cookie","amcookie_policy_restriction","allowed"]],"copaamerica.com":[["set-cookie","localConsent","true"]],"cosasdesalud.es":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"cosasdeviajes.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"courierpostonline.com":[["nostif","gnt_mol_oy"]],"courierpress.com":[["nostif","gnt_mol_oy"]],"craftpip.github.io":[["nostif","adsok"]],"crazeuk.com":[["set","realCookieBanner","undefined"]],"creeksidebeer.com":[["set-cookie","age_verification","1"]],"crenolibre.fr":[["set-cookie","cookieconsent","true"]],"crichype.nl":[["set","confirm","noopFunc"]],"crichype.pl":[["set","confirm","noopFunc"]],"cristoiublog.ro":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"]],"csid.ro":[["aopw","document.oncontextmenu"]],"ctrl.blog":[["aopr","a1lck"]],"cursoemvideo.com":[["set-cookie","cookie_notice_accepted","true"]],"cyberfolks.ro":[["set-cookie","CF_GDPR_COOKIE_CONSENT_VIEWED","1"]],"cyberspace.world":[["aopr","document.onselectstart"]],"d4armory.io":[["aopr","nitroAds"]],"daadscholarship.com":[["aopw","LaraPush"]],"dach-bau.info":[["set-cookie","Consent","0"]],"dailycomet.com":[["nostif","gnt_mol_oy"]],"daotranslate.pl":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aeld","","undefined"]],"dasmagazin.de":[["set","realCookieBanner","undefined"]],"dbschenkerarkas.com.tr":[["set-cookie","allow-marketing-tracking","false"],["set-cookie","allow-statistical-tracking","false"],["set-cookie","privacy-notice-responded","0"],["set-local-storage-item","cookie_usage_acknowledged_2","1"]],"ddys.es":[["no-fetch-if","analytics"]],"ddys.net":[["no-fetch-if","analytics"]],"deepl.com":[["set-local-storage-item","LMT_freeUserUsageBlock","$remove$"],["set-local-storage-item","onboardingData","$remove$"],["set-session-storage-item","LMT_browserExtensionPromo.displayed","true"],["aeld","copy"]],"delaware.co.uk":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"delaware.pl":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"delta.com":[["set-cookie","dtPCB","true"]],"deniswilliams.ie":[["rc","wcc-popup-overflow","body","stay"]],"depedlps.org":[["acs","document.oncontextmenu"]],"deps.dev":[["set-cookie","cookie_policy_acknowledgement","true"]],"der-puten-shop.de":[["set-cookie","cookie-preference","1"]],"derma-line.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"descarga-animex.co.uk":[["aeld","/^(?:contextmenu|keydown)$/"]],"deutsche-alpenstrasse.de":[["set-cookie","cookie-consent","declined","","","reload","1"]],"deutschebanksae.my.site.com":[["set-cookie","cookieAuth","1"]],"dhgate.com":[["aeld","mouseleave"]],"digital.lasegunda.com":[["aeld","contextmenu"]],"diy-academy.eu":[["set-cookie","cookieconsent_status","allow"]],"dmsg.de":[["rc","dp--cookie-consent","body","stay"]],"dnj.com":[["nostif","gnt_mol_oy"]],"docs.dyrector.io":[["set-cookie","__gitbook_cookie_granted","no"]],"domaintools.com":[["set","realCookieBanner","undefined"]],"dominospizza.pl":[["set-cookie","dominos_cookies_accepted","1"]],"doods.pl":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doodstream.ru":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dooood.ru":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dosenmatrosen.de":[["set-cookie","cookie-preference","1","","reload","1"]],"dossier.today":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"downloadtutorials.net":[["aeld","","mdp"],["aeld","/contextmenu|selectstart|copy/"]],"dramacute.com":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"dramacute.nl":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"dramaqu.es":[["acs","$","contextmenu"]],"dramaqu.nl":[["acs","$","contextmenu"]],"dramaqu.ru":[["acs","$","contextmenu"]],"drinkstation.co.uk":[["set-cookie","goodav_block_popup-2711","0"]],"duck.ai":[["set-local-storage-item","duckaiHasAgreedToTerms","true"]],"dynmcyou.com":[["set-cookie","_pandectes_gdpr","1"]],"e-chladiva.cz":[["set-cookie","gdpr","1"]],"e-panigiria.gr":[["rmnt","script","oncontextmenu"]],"efmdglobal.org":[["rc","wcc-popup-overflow","body","stay"]],"efortuna.pl":[["set-cookie","cookie_layer","1"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"egon-w-kreutzer.de":[["set","realCookieBanner","undefined"]],"egro-direktwerbung.de":[["set","realCookieBanner","undefined"]],"ehealth.gov.gr":[["set-cookie","cookieconsent_status","1"]],"eheizung24.de":[["set-cookie","cookie-preference","1"]],"eightvape.com":[["set-cookie","age-verified","true"]],"einfach-einreichen.de":[["set-cookie","ee-ca","y","","reload","1"],["set-cookie","ee-hj","n"],["set-cookie","ee-yt","y"]],"einthusan.tv":[["set","login_completed","true"]],"elconfidencial.com":[["set","Didomi","noopFunc"]],"electronicacerler.com":[["set-cookie","acepta_cookies_funcionales","1"],["set-cookie","acepta_cookies_obligatorias","1"],["set-cookie","acepta_cookies_personalizacion","1"]],"elevator.de":[["set-cookie","amcookie_allowed","1"]],"embedv.net":[["nosiif","devtool"],["nostif","devtool"]],"emmi-luzerner.ch":[["set-cookie","luzerner-che-cookie-categories","essential"]],"engie.be":[["set-cookie","cookie-consent","required"]],"enjoytaiwan.co.kr":[["ra","oncontextmenu|onselectstart|ondragstart"]],"environment.data.gov.uk":[["set-cookie","defra-cookie-banner-dismissed","true","","reload","1"]],"eodev.com":[["set-local-storage-item","simple-funnel-name","$remove$"]],"erbsenprinzessin.com":[["set","realCookieBanner","undefined"]],"erholung-oberstdorf.de":[["set-cookie","Consent","0"]],"esercizinglese.com":[["aopw","adBlockDetected"]],"europixhd.es":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"exclusifvoyages.com":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"exitroom.berlin":[["set","realCookieBanner","undefined"]],"falabella.com":[["set-cookie","isCookieLegalBannerSelected","true"]],"faucetcrypto.com":[["set-local-storage-item","cookieconsent","true"]],"favi.com.br":[["set-cookie","__Host-cookie-consent","8","","reload","1"]],"fayobserver.com":[["nostif","gnt_mol_oy"]],"fcportables.com":[["aeld","/^(contextmenu|copy|dragstart|selectstart)$/"]],"feinaactiva.gencat.cat":[["set-cookie","cookie-consent","essential"]],"festival-cannes.com":[["aeld","contextmenu"]],"fflogs.com":[["acs","attachToDom","ad-fallback"]],"figshare.manchester.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"filhub.gr":[["aopr","pum_popups"]],"filiser.eu":[["nostif","(!0)","8000"]],"filmzie.com":[["set-local-storage-item","cookiesAccepted","false"]],"firebrandbrewing.co.uk":[["set-local-storage-item","age_confirmed","true"]],"firestream.pl":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"flashgames.ru":[["set-cookie","OptanonAlertBoxClosed","true"]],"flaviamelissa.com.br":[["set","realCookieBanner","undefined"]],"flyertalk.com":[["acs","jQuery","AdBlock"]],"focusonreproduction.eu":[["set-cookie","cmplz_banner-status","dismissed"]],"fogaonet.com":[["set-cookie","fn_cookie_banner","1"],["set-cookie","fn_cookie_whatsapp_alert","1"]],"foodvessel.com":[["set-local-storage-item","cookieConsent","false"]],"ford-hessengarage-dreieich.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-mgs-radebeul.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-sg-goeppingen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-sg-neu-ulm.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-toenjes-zetel.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.dk":[["set-cookie","cookieAcknowledged","true"]],"ford.nl":[["set-cookie","cookieAcknowledged","true"]],"forgeofempires.com":[["set-cookie","CookieNotification","1"]],"forosupercontable.com":[["set-cookie","CONS","100"]],"foto-gregor.de":[["set-cookie","cookie_accepted","false","","reload","1"]],"fox2now.com":[["aeld","/^(mouseout|mouseleave)$/"]],"foxaholic.com":[["ra","onkeydown|onselectstart|oncontextmenu","body[onkeydown*=\"__cfRLUnblockHandlers\"]","complete"],["ra","oncontextmenu|onkeydown|onselectstart","body"]],"framer.com":[["set-local-storage-item","framerCookiesDismissed","true"]],"francosliquorstore.com":[["set-cookie","isAnAdult","true"]],"freizeitbad-greifswald.de":[["set-cookie","swgCookie","false"]],"freshdays-shop.com":[["set-cookie","allowGetPrivacyInfo","true"]],"friendlyatheist.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"frog.co":[["set-cookie","frogHideGDPRBanner","true"]],"frohreich.de":[["set","realCookieBanner","undefined"]],"funivie.org":[["acs","document.oncontextmenu"]],"funniermoments.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"gamesgames.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"gastroenterologyadvisor.com":[["remove-cookie","hmmet"]],"gemeinde.prad.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.sandintaufers.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.sexten.bz.it":[["set-cookie","ris_cookie_setting","1"]],"generalitranquilidade.pt":[["set-cookie","CST_COOKIE_CONSENT","1"],["set-cookie","cookieMessageDismissed","1"]],"gerberfondue.ch":[["set-cookie","gerber-che-cookie-categories","essential"]],"gerho.it":[["set-cookie","cookie-preference","1"],["set-cookie","tincxTerminiPopUp","1"]],"getanchorgrid.com":[["set-cookie","ag_analytics_consent","declined"]],"giromarilia.com.br":[["ra","oncontextmenu|ondragstart|onselectstart"]],"gledaitv.com":[["aeld","contextmenu"],["nosiif","debugger"]],"glistranieri.it":[["set","disableSelection","noopFunc"],["aopw","document.oncontextmenu"]],"globaldefensecorp.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"globaledu.jp":[["acs","document.oncontextmenu"],["ra","oncontextmenu|onselectstart","body"]],"glose.com":[["set-local-storage-item","hasAcceptedCookies","true"]],"gmr-foto.at":[["set-cookie","fmalertcookies","true"]],"gmx.fr":[["set-cookie","euconsent-bypass","1"]],"gmx.net":[["set","document.documentElement.AdBlockDetection","noopFunc"]],"gomovies.de":[["acs","document.oncontextmenu"]],"goodnews-magazin.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"goupstate.com":[["nostif","gnt_mol_oy"]],"gp.tsukimi.club":[["json-prune","ads.[].imageUrl"]],"gplinks.co":[["aeld","contextmenu"]],"grafische-visualisierung.de":[["set","realCookieBanner","undefined"]],"griffin.com":[["set-session-storage-item","griffinConsentIgnored","1"]],"guitarworld.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"gymnasium-hochdahl.de":[["set","realCookieBanner","undefined"]],"haban-uhren.at":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_stripe","allow"]],"hallesches-fotoatelier.de":[["set","realCookieBanner","undefined"]],"hamis.romponalis.st":[["rmnt","script","'contextmenu'"]],"handelsbanken.com":[["set-cookie","shb-consent-cookies","false"]],"hashop.nl":[["set-cookie","cookie_preference","1"]],"hauspanorama.de":[["set","realCookieBanner","undefined"]],"hdtoday.so":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"hello-rezka.com.br":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hello-rezka.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hianime.net":[["set","devtoolsDetector.launch","noopFunc"]],"himovies.it":[["set-cookie","show_share","true"]],"himovies.net":[["set-cookie","show_share","true"]],"hindipix.fr":[["set","console.debug","trueFunc"],["set","console.clear","trueFunc"]],"hindipix.it":[["set","console.debug","trueFunc"],["set","console.clear","trueFunc"]],"hollywoodmask.com":[["aeld","/copy|cut|paste|selectstart/"],["nostif","pop"]],"holzkisten-fabrik.de":[["set","realCookieBanner","undefined"]],"hopeandbearreading.co.uk":[["set-cookie","ce-cookie","N"]],"hotel-aigoual.com":[["rc","unreadable-display","","stay"]],"how-to-pc.info":[["set","pqdxwidthqt","false"]],"hqq.tv":[["nostif","check","100"]],"htmlreference.io":[["nostif","()","2000"]],"hypotheker.nl":[["set-cookie","trackingConsent","1"]],"ifg-life.id":[["set-cookie","cookie-consent","accepted"]],"ihbarweb.org.tr":[["aeld","/^(?:copy|paste)$/","undefined"]],"img999.com":[["ra","oncontextmenu"]],"immobilise.com":[["rmnt","script","/cookie-policy"]],"imprimare3d.com":[["set","realCookieBanner","undefined"]],"inceptionlabs.ai":[["set-local-storage-item","framerCookiesDismissed","true"]],"inquirer.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"intellinews.com":[["set-cookie","viewedOuibounceModal","true"]],"intergiro.com":[["set-cookie","cookie_policy","true"]],"intunedhq.com":[["set-local-storage-item","cookie-consent","rejected"]],"investing.com":[["remove-cookie","lifetime_page_view_count"],["remove-cookie","page_view_count"]],"iptv4best.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"iqoption.com":[["set-local-storage-item","cookie_usage_accepted","1"]],"isarradweg.de":[["set-cookie","cookie-consent","accepted","","reload","1"]],"iscc-system.org":[["set-session-storage-item","aesirx-analytics-rejected","true"]],"j-lyric.net":[["ra","oncontextmenu|onselectstart","body[oncontextmenu]","complete"]],"jadent.de":[["set","realCookieBanner","undefined"]],"jazz.fm":[["set-cookie","jazzfm-privacy","true"]],"jeger.pl":[["set-cookie","_acceptCookies","1","","reload","1"]],"jeu2048.fr":[["aopw","FuckAdBlock"]],"jeyran.net":[["acs","document.oncontextmenu"]],"jezebel.com":[["set-cookie","pm_email_popup_status","1"]],"jjfish.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"jk-market.com":[["acs","jQuery","devtool"]],"jobtoday.com":[["set-cookie","jt-jobseeker-gdpr-banner","true","","reload","1"]],"jootc.com":[["aopr","disable_copy"],["aopr","disable_hot_keys"],["aopw","document.oncontextmenu"],["set","document.onkeyup","null"],["set","document.ondragstart","null"],["aeld","keydown"]],"jpost.com":[["rmnt","script","stopRefreshSite"]],"juegosdetiempolibre.org":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"justanswer.de":[["set-cookie","cbChecked","true"]],"kaembed.co.uk":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"kaleidoscope.co.uk":[["set-cookie","firstPartyDataPrefSet","true"]],"kamera-express.de":[["set-cookie","cookie_accepted","false","","reload","1"]],"keepersecurity.com":[["set-local-storage-item","keeper_cookie_consent","true"]],"kermitlynch.com":[["set-cookie","hidePopUp","true"]],"khou.com":[["aeld","/^(mouseout|mouseleave)$/"],["aeld","mouseout"]],"kika.com":[["set-cookie","cookie_accepted","1"],["set-cookie","functional_cookies","1","","reload","1"]],"kinocheck.de":[["set-cookie","kc_c","yes"]],"kiplinger.com":[["set-cookie","FTR_Article_PageView","2"]],"klangmassage-moser.de":[["set","realCookieBanner","undefined"]],"komdigi.go.id":[["set-local-storage-item","localConsent","true"]],"konicaminolta.ca":[["set-cookie","konicaminolta.us","1"]],"kpcen-torun.edu.pl":[["set-cookie","cookieModal","true"]],"kuaiche.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"kusonime.com":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["acs","addEventListener","which"]],"labiosthetique.fr":[["set-cookie","wt-cookie-settings","0"]],"labiosthetique.it":[["set-cookie","wt-cookie-settings","0"]],"lalawin.com":[["acs","document.oncontextmenu"],["aopr","tjQuery"]],"lansingstatejournal.com":[["nostif","gnt_mol_oy"]],"lasexta.com":[["aeld","contextmenu"]],"lcsun-news.com":[["nostif","gnt_mol_oy"]],"learngerman.dw.com":[["set-local-storage-item","hasAcceptedGdpr","true"]],"leejeans.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"lemwarm.com":[["set-local-storage-item","cookieClosed","true"]],"lenox-trading.at":[["set-cookie","cookie-preference","1"]],"leo-pharma.co.uk":[["set-cookie","isCookiePolicySet","false"]],"leo-pharma.com":[["set-cookie","isCookiePolicySet","false"]],"lepetitchevrier.ch":[["set-cookie","le-petit-chevrier-che-cookie-categories","essential"]],"letsdownloads.com":[["acs","document.oncontextmenu"]],"lhsystems.com":[["set-cookie","comfortCookiesAccepted","false"],["set-cookie","functionalCookiesAccepted","true"],["set-cookie","necessaryCookies","true"],["set-cookie","statisticsCookiesAccepted","false"]],"lifemiles.com":[["set-cookie","cookiePolicyAccepted","true"],["set-cookie","marketing_cookies","false"],["set-cookie","statistics_cookies","false"]],"liquorcave.com":[["set-cookie","age_verification","1"]],"livedoor.biz":[["set-cookie","livedoor-blog-gdpr-agreed","1"]],"logopaedie-balzer.de":[["set-cookie","_coo1","1"],["set-cookie","_coo2","1"],["set-cookie","_coo3","1"],["set-cookie","_coo_seen","1"]],"lojaboschferramentas.com.br":[["set-cookie","lgpdConsent","true"],["set-cookie","privacy_comodidade","false"],["set-cookie","privacy_marketing","false"]],"lowpass.cc":[["set-cookie","popup_closed","true"]],"lumingerie.com":[["set-cookie","cookies-required","1","","reload","1"]],"luvly.care":[["set-cookie","consent","true"]],"luyenthithukhoa.vn":[["acs","document.oncontextmenu"]],"lyrical-nonsense.com":[["rmnt","script","contextmenu"]],"macfarlanes.com":[["set-cookie","macfarlanes-necessary-cookies","accepted"]],"mahindraelectricsuv.com":[["set-cookie","consentTracking","false"]],"mallorca-unternehmen.com":[["set","realCookieBanner","undefined"]],"mangaku.net":[["acs","$","contextmenu"],["aeld","contextmenu"]],"mangatoon.com":[["acs","document.oncontextmenu"]],"mangatoon.ru":[["acs","document.oncontextmenu"]],"mariaenzersdorf.gv.at":[["set-cookie","ris_cookie_setting","1"]],"marinelink.com":[["set-cookie","GDPR","9"]],"mart.family.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"medeberiya.site":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["rmnt","script","stopPrntScr"]],"mediafire.com":[["nostif","scan","500"]],"mein-osttirol.rocks":[["set-local-storage-item","ccb_contao_token_1","1"]],"melkkobrew.fi":[["set-cookie","cookies-required","1","","reload","1"]],"meningitis.com":[["set-local-storage-item","gskConsentClosedv2","true"]],"meteoblue.com":[["set","mb.advertisingShouldBeEnabled","false"]],"miceportal.com":[["set-cookie","requierd_cookies","true"]],"mifcom.fr":[["set-cookie","cookie_accepted","1","","reload","1"],["set-cookie","cookie_closed","1"]],"mikanews.de":[["set","realCookieBanner","undefined"]],"mineskin.org":[["aopw","ABB_config"]],"mitchatnim.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"mlive.com":[["aopr","__cmpGdprAppliesGlobally"]],"mobeleader.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"monroenews.com":[["nostif","gnt_mol_oy"]],"morencius.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"motoblouz.es":[["set-cookie","accept_cookies_rgpd","1","","reload","1"]],"mountain.com":[["set-cookie","euCookieNotify","agree"]],"movies4us.nl":[["set-local-storage-item","cookiePolicy","true"]],"movies4us.pl":[["set-local-storage-item","cookiePolicy","true"]],"moviesjoy.fr":[["set-cookie","show_share","true"]],"moviesjoy.net":[["set-cookie","show_share","true"]],"movieweb.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"mummelito.de":[["set","realCookieBanner","undefined"]],"mustijamirri.fi":[["set-cookie","mfi_consent_necessary","granted","","reload","1"]],"myloview.it":[["set-cookie","cookieConsent","necessary","","reload","1"]],"naukridisha.in":[["acs","document.onselectstart"]],"nbcbayarea.com":[["aeld","scroll"]],"nbcnewyork.com":[["aeld","scroll"]],"nekopoi.web.id":[["acs","document.oncopy"],["ra","oncontextmenu|ondragstart"]],"neokyo.com":[["set-cookie","__cookie_consent","false"]],"neowin.net":[["aopr","_sp_.mms.startMsg"]],"netu.it":[["set","devtoolsDetector.launch","noopFunc"]],"newschief.com":[["nostif","gnt_mol_oy"]],"nhghealth.com.sg":[["set-cookie","accept_cookies","0"]],"niko.eu":[["set-cookie","Niko-NikoEu#Consent","true","","reload","1"],["set-cookie","Niko-NikoEu#Functional","true"]],"nikokids.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"northjersey.com":[["nostif","gnt_mol_oy"]],"northumbriasport.com":[["set-cookie","cm_level","0"]],"notaris.be":[["set-cookie","cookie-bar","hide"],["set-cookie","cookie-settings-social","false"],["set-cookie","cookie-settings-statistics","false"]],"notthebee.com":[["set-local-storage-item","cookieConsent","granted"]],"novacad.fr":[["set-cookie","nov_rgpd_cookie_opt","1"]],"novaventa.com":[["set-local-storage-item","cookiesAceptadas","true"]],"novelskey.tarbin.net":[["json-prune","ads.[].imageUrl"]],"nowcoder.com":[["aeld","copy"]],"noweconomy.live":[["set","document.oncontextmenu","null"]],"npnews24.com":[["acs","document.oncontextmenu","document.onselectstart"]],"nsk-tv.narod.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"nsmb.com":[["no-xhr-if","googlesyndication"]],"numberempire.com":[["nostif","w3ad"]],"nwahomepage.com":[["aeld","scroll"]],"nzbstars.com":[["ra","oncontextmenu"]],"oakridger.com":[["nostif","gnt_mol_oy"]],"oeko-tex.com":[["set-cookie","cookieconsent_status","allow"]],"oekolandbau.de":[["set-cookie","CookieConsent","mandatory"]],"officeprinciples.com":[["set-cookie","user_cookie_consent","true"]],"oggiscuola.com":[["acs","jQuery","overlay"]],"ohotaktiv.ru":[["set-cookie","acceptCookieOhotaktiv","1"]],"omniplexcinemas.co.uk":[["set-cookie","a1wcc","all"]],"oneskin.co":[["set-local-storage-item","gdpr","deny"]],"ontvtime-tv.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"ontvtime.ru":[["aeld","contextmenu"]],"openweathermap.org":[["set-cookie","gdpr_cookie_consent","declined"]],"oponeo.co.uk":[["set-cookie","_cookieConsents","1"]],"opportunitydesk.org":[["aopr","disable_copy"],["acs","document.ondragstart"]],"otakudesu.de":[["acs","document.oncontextmenu"]],"otakukan.com":[["acs","document.oncontextmenu"]],"outwrite.com":[["set-cookie","gradeproof_shown_cookie_warning","true"]],"paderborn.de":[["set-cookie","cookies-accepted","true","","reload","1"]],"paesifantasma.it":[["set","x5engine.utils.imCodeProtection","null"]],"palladiumboots.ru":[["set-cookie","cookieconsent_status1","deny"]],"pandore-gendarmerie.org":[["set","realCookieBanner","undefined"]],"pandurul.ro":[["ra","oncopy"],["acs","$","copy"]],"pangleglobal.com":[["set-cookie","cookie_banner_preference","reject"]],"panheadcustomales.com":[["set-cookie","age-checked","1"]],"patria.net":[["set","realCookieBanner","undefined"]],"patricia.bg":[["set-cookie","amcookie_allowed","1"],["set-cookie","amcookie_policy_restriction","allowed"]],"paxdei.th.gl":[["nostif",".getState();","4500"]],"pc-canada.com":[["set-cookie","Cookies-Accepted","true"]],"peachy.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"pedalcommander.ru":[["set-local-storage-item","COOKIE_BANNER_CLICKED","true"]],"pelispedia.co.uk":[["aopw","document.oncontextmenu"],["ra","oncontextmenu"]],"pelispedia.es":[["aopw","document.oncontextmenu"],["ra","oncontextmenu"]],"pelispedia.pl":[["aopw","document.oncontextmenu"],["ra","oncontextmenu"]],"pendulumedu.com":[["aeld","copy"]],"pentagon-group.co.uk":[["set-cookie","cookieAccepted","1","","reload","1"]],"pferde-hunde-therapie.de":[["set","realCookieBanner","undefined"]],"pfotenmond.de":[["set-cookie","_pandectes_gdpr","1"]],"photoacompanhantes.com":[["set-cookie","cookies_aceptadas","0"]],"photopea.com":[["set","console.clear","noopFunc"]],"physikinstrumente.de":[["set-cookie","cookieconsent_status","allow"]],"pinterest.nl":[["set-local-storage-item","DWEB_PIN_IMAGE_CLICK_COUNT","$remove$"],["set-local-storage-item","unauthDownloadCount","$remove$"]],"pixiv.net":[["set-cookie","privacy_policy_agreement","7","","reload","1"]],"plantpowercouple.com":[["set-cookie","awpopup_450030403","1"]],"plastischechirurgie-muenchen.info":[["set-cookie","ff_cookie_notice","1"]],"platformer.news":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"playlumi.com":[["set-cookie","cookies-functional","true"],["set-cookie","cookies-marketing","false"],["set-cookie","cookies-preferences","false"]],"playonlinux.com":[["acs","$","load"]],"pmi.org":[["set-local-storage-item","CookieDisclosure-/","true"]],"pobre.com":[["aeld","","blockFuckingEverything"],["aeld","contextmenu","preventDefault"],["aost","eval","build.js"]],"pocket-pirates-prt.de":[["set","realCookieBanner","undefined"]],"poconorecord.com":[["nostif","gnt_mol_oy"]],"polygon.com":[["aopw","loadOutbrain"],["nostif","adsBlocked"]],"ponselharian.com":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"],["aopr","disableSelection"]],"poolpiscina.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"pornhub.com":[["set-cookie","accessAgeDisclaimerPH","2","","reload","1"],["rc","hasAdAlert","header"]],"pornhub.net":[["rc","hasAdAlert","header"]],"portalcriatividade.com.br":[["acs","disable_copy"],["acs","nocontext"]],"poyabuy.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"practicetestgeeks.com":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"prague-catering.cz":[["set-cookie","euc","1"]],"premierfood.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"premierinn.com":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"profire.it":[["set-cookie","tincx_cookie_notice_accepted","true"]],"promotor.pl":[["ra","oncontextmenu","body"]],"prosciutteriasandaniele.it":[["set-session-storage-item","DS_COOKIENOTIFY_CLOSED","true"]],"prosenectute.ch":[["set-cookie","cookieDisclaimerShown","true"]],"protan-elmark.de":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","rodopolicy","true"]],"prpm.dbp.gov.my":[["set","document.onmousedown","trueFunc"]],"przegladpiaseczynski.pl":[["set-cookie","cc","1"],["aeld","contextmenu"]],"puma.com":[["set-cookie","pumacookies","1","","reload","1"]],"puntigamer.at":[["set","realCookieBanner","undefined"]],"pupupul.site":[["set","devtoolsDetector.launch","noopFunc"]],"puratos.com.br":[["set-cookie","functionalCookieAccepted","true"]],"puratos.it":[["set-cookie","functionalCookieAccepted","true"]],"purefiji.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"putlocker.es":[["aopw","document.oncontextmenu"]],"putlocker.nl":[["aopw","document.oncontextmenu"]],"putlocker.org":[["aopw","document.oncontextmenu"]],"putlocker.pe":[["nosiif","_0x"]],"putlocker.ru":[["aopw","document.oncontextmenu"]],"puzzle-chess.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-norinori.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-star-battle.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.dk":[["set-cookie","puzzleyou-dk_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.ie":[["set-cookie","puzzleyou-ie_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.sk":[["set-cookie","puzzleyou-sk_cookies_consent_allowlist","0","","reload","1"]],"rachelli.it":[["set-cookie","rachelli-ita-cookie-categories","essential"]],"racines.eu":[["set-cookie","ris_cookie_setting","1"]],"racked.com":[["nostif","adsBlocked"]],"radartest.com":[["acs","document.onmousedown","disableclick"]],"radio5.com.pl":[["ra","oncontextmenu"]],"readlightnovel.org":[["aopr","__cmpGdprAppliesGlobally"]],"redfin.com":[["rc","stickyBanner","","stay"]],"redtube.com":[["set-cookie","showAgeDisclaimer","1"]],"reebok.eu":[["set-local-storage-item","SHOW_COOKIE_BANNER","no"]],"reebokwork.com":[["set-local-storage-item","consent_accepted","true"]],"reformsziget.hu":[["set","cookie_alert_overlay","noopFunc"]],"refurbished.be":[["set-cookie","COOKIE_CONSENT","1","","reload","1"],["set-cookie","COOKIE_MARKETING","false"],["set-cookie","COOKIE_STATIC","false"]],"regenwald-schuetzen.org":[["set-cookie","cookie_consent_required","accepted","","reload","1"]],"renditepassive.net":[["set","document.oncontextmenu",""],["set","document.onselectstart",""],["set","document.onkeydown",""],["set","document.onmousedown",""],["set","document.onclick",""],["acs","document.ondragstart"],["aopr","onload"]],"renewal.ru":[["set-cookie","agreeCookie","true"]],"reservedeler24.co.no":[["aeld","mousedown","function(t)"]],"rest.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"ritsatv.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"rockpoint.sk":[["set-cookie","cookie-bar","0"]],"rog-forum.asus.com":[["set-cookie","isReadCookiePolicyDNT","No"],["set-cookie","isReadCookiePolicyDNTAa","False"]],"royalbatch.com":[["set-local-storage-item","verify","true"]],"rrstar.com":[["nostif","gnt_mol_oy"]],"rte.ie":[["set-cookie","OptanonAlertBoxClosed","ok"]],"rule34hentai.net":[["aeld","contextmenu"]],"ryanair.com":[["set-cookie","RY_COOKIE_CONSENT","true"]],"saikaiscans.net":[["aeld","contextmenu","[native code]"]],"samsungtechwin.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"samurai.wordoco.com":[["acs","nocontextmenu"]],"sandratex.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"saunahuus.de":[["set","realCookieBanner","undefined"]],"sawren.pl":[["set-local-storage-item","consent_popup","1"]],"sbflix.com.br":[["acs","onload","contextmenu"]],"schiff-store.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"schrikdraad.net":[["set-cookie","cookiebar","1"]],"science.org":[["remove-cookie","MAID"]],"sears.com":[["set-session-storage-item","banner_session","true"]],"sebgroup.com":[["set-cookie","AcceptedCookieCategories","1"]],"secondsol.com":[["set-cookie","cookies_consent","1"]],"sees.com":[["set-cookie","__sees_cnsnt","1"]],"seir-sanduk.nl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seir-sanduk.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"selfstudyhistory.com":[["acs","document.ondragstart"],["aeld","dragstart|keydown/"],["aopw","disableEnterKey"],["aopw","document.onselectstart"],["acs","jQuery","contextmenu"]],"serverprofis.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"seswater.co.uk":[["set-cookie","cookie","true"],["set-cookie","performanceAnalytics","false"]],"sflix.net":[["nostif","devtools"],["nosiif","/_0x|devtools/"],["aeld","contextmenu"]],"sflix2.de":[["nosiif","/_0x|devtools/"]],"sharesight.com":[["set-local-storage-item","cookieBanner","false"],["set-local-storage-item","gdprPreferencesAccepted","true"]],"shinchu.net":[["aeld","contextmenu"],["acs","document.onkeydown"]],"shop.atunas.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.kemei.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shopbuddies.be":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shopbuddies.nl":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shopify.dev":[["set-cookie","eu_cookies_acknowledged","true"]],"sigma-foto.de":[["set-cookie","cc-answered","true"],["set-cookie","cc-marketing","false"],["set-cookie","cc-needed","true"],["set-cookie","cc-statistics","false"]],"silverboats.fi":[["set-cookie","AVENIS_PRIVACY_LEVEL_ANALYTICS","0"],["set-cookie","AVENIS_PRIVACY_LEVEL_COMMON","1"]],"simkort.se":[["rc","wcc-popup-overflow","body","stay"]],"simpl.rent":[["set-cookie","acsr","1"]],"skanzen.hu":[["set-local-storage-item","skanzen-cookie-consent","false"]],"skionline.it":[["ra","oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"]],"skyrc.com":[["set-cookie","accept-cookie-20240708","false"]],"sleepwakeadvisor.com":[["remove-cookie","hmmet"]],"smartservices.icp.gov.ae":[["set-cookie","cookieAccepted","true"]],"smorfianapoletanaweb.it":[["set","realCookieBanner","undefined"]],"smotreshka-tv.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotreshka-tv.fr":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotreshka-tv.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrettv.es":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrettv.nl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrim-tv.pl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smow.it":[["set-cookie","__compliance_cookie_2","111","","reload","1"]],"snap.com":[["set-cookie","sc-cookies-accepted","true"]],"sportsupa.com":[["ra","oncontextmenu"]],"springfieldspringfield.co.uk":[["aopr","addLink"]],"sps-handel.net":[["set-cookie","cookie-preference","1"]],"spusu.co.uk":[["set-cookie","acceptSpusuCookies","necessary"]],"stbarnabas-hospice.org.uk":[["rc","wcc-popup-overflow","body","stay"]],"steamcollector.com":[["acs","document.querySelectorAll","adblock"]],"steinway-park-seesen.de":[["set","realCookieBanner","undefined"]],"stonly.com":[["set-cookie","cookieHidden","true"]],"store.wellingtonbrewery.ca":[["set-cookie","isAnAdult","true"]],"streamingunity.de":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"streamingunity.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"streamingunity.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"streamtape.com.br":[["aeld","contextmenu"],["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"strtape.org":[["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"stylewe.com":[["set-cookie","acceptPrivacy","true"]],"substack.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"suntech.cz":[["set-cookie","I6COMPARECOUNT","0"],["set-cookie","I6IISCOOKIECONSENT0","n","","reload","1"]],"sussytoons.de":[["nosiif","/devtool|console\\.clear/"],["aeld","keydown","123"],["set","Object.prototype.disableMenu","false"]],"svenskhalsokost.se":[["set-cookie","cookieaccept","required","","reload","1"]],"swissaccounting.org":[["set-cookie","__hs_opt_out","yes"]],"swtorlogs.com":[["acs","attachToDom","ad-fallback"]],"tabonitobrasil.nl":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["aeld","keydown","preventDefault"]],"tailorit.de":[["set-cookie","pr1Cookie","true"]],"taiwantrade.com":[["set-cookie","_cmsCookieaccept","Y"]],"taskus.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"tbs.co.jp":[["set","NS_TVER_EQ.checkEndEQ","trueFunc"]],"teamtailor.com":[["set-local-storage-item","CookieConsent--hideCookieConsent","true"]],"tecalliance.net":[["set","realCookieBanner","undefined"]],"technik-hauptstadt.de":[["set","realCookieBanner","undefined"]],"technikdirekt.de":[["set-cookie","cookie-preference","1"]],"telik.live":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"theaircurrent.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"thedailyreporter.com":[["nostif","gnt_mol_oy"]],"theepochtimes.com":[["nostif","pipaId","0"]],"thegeekfreaks.de":[["set","realCookieBanner","undefined"]],"thehopvault.com":[["set-cookie","isAnAdult","true"]],"theinformation.com":[["set-cookie","marketing-modal-closed-1","2"]],"thejournal.ie":[["set-local-storage-item","total_page_views","2"]],"theledger.com":[["nostif","gnt_mol_oy"]],"thenorthwestern.com":[["nostif","gnt_mol_oy"]],"thenounproject.com":[["set-cookie","cookie_consent","1","","reload","1"]],"therecord.com":[["remove-cookie","/^tncms:meter:/"]],"thetowntalk.com":[["nostif","gnt_mol_oy"]],"thewarrenwokingham.co.uk":[["set-cookie","ce-cookie","N"]],"theweathernetwork.com":[["set-cookie","pelm_consent","1"],["set-cookie","pelm_cstate","1"]],"thinkingwithyou.com":[["set","realCookieBanner","undefined"]],"ticketmelon.com":[["set-local-storage-item","cookie_accept","true"]],"titulky.com":[["acs","$","\"input\""]],"tlaciarik.sk":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"tommy.hr":[["set-cookie","ng-cc-accepted","accepted"],["set-cookie","ng-cc-necessary","1"]],"tomshardware.com":[["set-cookie","FTR_Article_PageView","2"]],"tonis.ch":[["set-cookie","tonis-che-cookie-categories","essential"]],"top4mobile.es":[["set-cookie","cookies-agreed","1"],["set-cookie","cookies-analytical","0"]],"top4mobile.pl":[["set-cookie","cookies-agreed","1"],["set-cookie","cookies-analytical","0"]],"topeuropix.ru":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"toppremiumpro.com":[["aeld","/contextmenu|selectstart|copy|dragstart/"],["aopr","cpp_loc"]],"torontosom.ca":[["acs","document.oncontextmenu","preventDefault"]],"totalbeauty.com":[["aopr","__cmpGdprAppliesGlobally"]],"toxitabellaeatrebates306.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"trakteer.id":[["aeld","/contextmenu|mousedown/"]],"travelinsured.com":[["set-cookie","CookieDisclaimer","1"]],"triviacreator.com":[["set-cookie","accept_cookies","accepted"]],"trouwenbijfletcher.nl":[["set-cookie","acceptCookies","true"]],"truphone.com":[["set-cookie","cookie_preferences","Essential"]],"trygogo.com":[["set-cookie","allowGetPrivacyInfo","true"]],"tsg6209weinheim.de":[["set","realCookieBanner","undefined"]],"tuffaloy.com":[["set-cookie","cookieConsent","accepted"]],"tuhlteim-pedia.de":[["set","realCookieBanner","undefined"]],"tumbleweedspirits.com":[["set-cookie","age-checked","1"]],"tundra.fi":[["rc","wcc-popup-overflow","body","stay"]],"tunnelmb.net":[["set-cookie","cookie-policy","true"]],"turbo.ai":[["set-local-storage-item","cookieConsent","1"]],"tvn24bis.pl":[["aeld","contextmenu","a"]],"tvron.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tw.istayreal.com":[["set-cookie","allowGetPrivacyInfo","true"]],"tweaking4all.com":[["nostif","adsbygoogle","2000"]],"twenga.pl":[["set-cookie","cookiewarning","1","","reload","1"]],"twomates.de":[["set-cookie","gdpr-google-analytics","false"]],"uc.pt":[["set-local-storage-item","userDeniedCookies","1"]],"uhb.nhs.uk":[["set-cookie","AcceptCookies","false"]],"uio.no":[["set-cookie","PrivacyPolicyOptOut","yes"]],"ukrainashop.com":[["aeld","contextmenu"]],"ultraleds.co.uk":[["set-local-storage-item","cookies_accepted_6pzworitz8","true"]],"unixhow.com":[["acs","eval","isNaN"]],"upstream.to":[["acs","document.oncontextmenu"],["aopr","_0xfff1"]],"urbex-datenbank.ch":[["set-cookie","pum-1182","true"]],"urochsunloath.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"utaten.com":[["ra","oncontextmenu|onselectstart",".lyricBody[oncontextmenu]","complete"]],"v-o-e-unblock.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"v1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"vaccineadvisor.com":[["remove-cookie","hmmet"]],"vaporplanet.es":[["set-cookie","confirmed_age","true"]],"varma.fi":[["set-cookie","varmafi_mandatory","true"]],"vaskakas.com":[["set-cookie","UN_explicit","ok"]],"veblr.com":[["ra","oncontextmenu","#VdoPlayerDiv"]],"vembed.com":[["nosiif","devtool"],["nostif","devtool"],["rmnt","script","devtools"]],"verselemzes.hu":[["acs","jQuery","contextmenu"],["acs","jQuery","keyCode"],["aopr","document.onselectstart"],["aopr","document.ondragstart"],["aopr","document.oncontextmenu"],["aopr","document.onkeydown"],["aopr","document.onkeypress"]],"vert.eco":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"vg247.com":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"vidara.de":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidmoly.fr":[["rmnt","script","devtoolsDetector"],["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidmoly.org":[["rmnt","script","devtoolsDetector"],["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidplay.ru":[["set","DisDevTool","undefined"]],"vidtube.site":[["set","devtoolsDetector.launch","noopFunc"]],"vilanova.cat":[["set-cookie","politica_cookies_rgpd","0"]],"vinaurl.com.br":[["ra","onkeydown"]],"vinaurl.es":[["ra","onkeydown"]],"vinaurl.nl":[["ra","onkeydown"]],"vinaurl.ru":[["ra","onkeydown"]],"vincentsworld.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"virginatlantic.com":[["set-cookie","VAA_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","VAA_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","VAA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","VAA_ENSIGHTEN_PRIVACY_Functional","0"],["set-cookie","VAA_ENSIGHTEN_PRIVACY_Marketing","0"]],"virginexperiencedays.co.uk":[["set-local-storage-item","cookie-consent","true"]],"virpe.cc":[["ra","onselectstart"],["aeld","contextmenu"],["set","document.oncontextmenu","noopFunc"]],"vivande.de":[["set-cookie","cookie-preference","1"]],"vivobarefoot.cz":[["set-cookie","cookie-bar","0"]],"vixcloud.com.br":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"vixcloud.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"vixcloud.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"voha.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"voirfilms.com":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"voronezh1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"vox.com":[["set-local-storage-item","vox_article_readcount","$remove$"],["set-local-storage-item","vox_article_readcount_count","$remove$"],["nostif","adsBlocked"]],"vsco.co":[["set-local-storage-item","/^fs\\./","$remove$"],["aeld","contextmenu"]],"wader.toys":[["aopw","document.oncontextmenu"]],"waitrose.com":[["set-cookie","wtr_cookie_consent","1"],["set-cookie","wtr_cookies_functional","1"]],"walmart.ca":[["set-local-storage-item","enableCookieBanner","false"]],"walserstolz.at":[["set-cookie","walserstolz-aut-cookie-categories","essential"]],"warcraftlogs.com":[["acs","attachToDom","ad-fallback"]],"wattoo.no":[["set-cookie","sscm_consent_widget","1"]],"web.bunq.com":[["set-local-storage-item","bunq:CookieConsentStore:isBannerVisible","false"]],"webfactory-i4.de":[["set","realCookieBanner","undefined"]],"webtimiser.de":[["set","realCookieBanner","undefined"]],"webtrack.dhlglobalmail.com":[["set-cookie","dhl-webapp-track","allowed"]],"weimar-touristinformation.de":[["set","realCookieBanner","undefined"]],"wetv.vip":[["set-cookie","optionalCookiePolicy","accept"]],"whitbreadinns.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"wildberries.ru":[["set-local-storage-item","wbx__cookieAccepted","true"]],"winaero.com":[["acs","jQuery","tweaker"]],"winesonline.co.nz":[["set-cookie","isAnAdult","true"]],"winnipegfreepress.com":[["aeld","/^(mouseout|mouseleave)$/"]],"wiz.io":[["aeld","/^(mouseout|mouseleave)$/"]],"world4.eu":[["aopw","document.oncontextmenu"],["acs","document.oncopy"],["acs","disable_copy"],["acs","disable_hot_keys"],["aopw","disable_ext_code"]],"worldpopulationreview.com":[["acs","document.createElement","admiral"],["aeld","/^(mouseout|mouseleave)$/"]],"writingcooperative.com":[["set-local-storage-item","201805-policy|accepted","1"]],"wstream.de":[["aeld","contextmenu","preventDefault"],["aopr","onload"]],"www-leeds--live-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www-themirror-com.translate.goog":[["rmnt","script","loc.hostname"]],"wzl-zwickau.de":[["set","realCookieBanner","undefined"]],"xhaccess.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhadult4.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster12.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster13.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster13.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster17.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster18.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster19.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster19.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster2.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster2.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster42.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster42.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster5.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster8.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster8.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhopen.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhwide5.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xm.sk":[["set-cookie","cookie-bar","0"]],"xxxcams.com.es":[["set-cookie","disclaimerSeen","1","","reload","1"]],"y8.com":[["set-cookie","privacy_policy_validated","true"]],"ydr.com":[["nostif","gnt_mol_oy"]],"yellow.systems":[["set-local-storage-item","isCookiesNotificationHidden","true"]],"yesmovies.de":[["set-cookie","show_share","true"]],"yesmovies.es":[["set-cookie","show_share","true"]],"yhocdata.com":[["aopr","contentprotector"]],"yoyofilmeys.com.br":[["acs","document.oncontextmenu"]],"yoyofilmeys.ru":[["acs","document.oncontextmenu"]],"ytj.fi":[["set-local-storage-item","accept-cookies","done"],["set-local-storage-item","cookie-neta","false"],["set-local-storage-item","cookie-snoop","false"]],"zahnarzt-kuboth.de":[["set","realCookieBanner","undefined"]],"zalukaj.io":[["nostif","(!0)","8000"]],"zapatos.fr":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zerohedge.com":[["aeld","mouseout"]],"zingvntv.ru":[["acs","onload","contextmenu"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
