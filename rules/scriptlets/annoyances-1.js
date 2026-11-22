/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"10tv.com":[["aeld","/^(mouseout|mouseleave)$/"],["aeld","mouseout"]],"123movies.com":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"],["nostif","_0x"],["set","console.clear","noopFunc"]],"123movies.de":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"],["nostif","_0x"],["set","console.clear","noopFunc"]],"29.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"3landesmuseen-braunschweig.de":[["set-cookie","3LM-Cookie","false"]],"4399.com":[["aopr","defaultbackgroundimg"]],"47news.jp":[["acs","$","contextmenu"]],"93.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"abc7ny.com":[["aeld","scroll"]],"abola.pt":[["acs","$","Adblock"]],"acce.es":[["set-cookie","cmplz_banner-status","dismissed"]],"actvid.com":[["nosiif","_0x"]],"adcock.com":[["set-session-storage-item","cookiesAccepted","true"]],"adidas.co.uk":[["set-cookie","notice_preferences","2"]],"adidas.com.br":[["set-cookie","notice_preferences","2"]],"adidas.it":[["set-cookie","notice_preferences","2"]],"adidas.pl":[["set-cookie","notice_preferences","2"]],"adult-tv-channels.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"affbank.com":[["set","canRunAds","true"]],"africa-uninet.at":[["set-cookie","cookieconsent_status_new","1"]],"afterbabel.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"agerpres.ro":[["aeld","contextmenu","preventDefault"]],"aha-music.com":[["set-local-storage-item","aha_cookie_consent","declined"],["nano-sib","j.value--","1000","0.001"]],"airchina.net":[["set-cookie","EnableABTest","false"],["set-cookie","EnableFacebook","false"],["set-cookie","EnableGA","false"]],"airchina.pl":[["set-cookie","EnableABTest","false"],["set-cookie","EnableFacebook","false"],["set-cookie","EnableGA","false"]],"alamogordonews.com":[["nostif","gnt_mol_oy"]],"alfa.com.ec":[["set-local-storage-item","CookiesConsent","1"]],"aliexpress.us":[["aeld","mouseleave"]],"alifragis.com.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"alljigsawpuzzles.net":[["set-cookie","_pandectes_gdpr","1"]],"alljigsawpuzzles.org":[["set-cookie","_pandectes_gdpr","1"]],"allokebab-pau.fr":[["rc","unreadable-display","","stay"]],"allrecipes.com":[["rc","jw-flag-floating","","stay"]],"alohabrowser.app":[["set-cookie","acceptCookie","1"]],"amara.org":[["set-cookie","amara_cookie_consent","1","","reload","1"]],"amarillo.com":[["nostif","gnt_mol_oy"]],"amcoustics.com":[["set-cookie","amc-cookies-accepted","true","","reload","1"]],"amtraker.com":[["no-fetch-if","cloudflareinsights.com"]],"amway.es":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"amway.net":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"amway.ru":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"analyticsvidhya.com":[["nostif","loginModal"]],"anderweltverlag.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"androidcentral.com":[["set-cookie","FTR_Article_PageView","2"]],"anikoto.com":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"anikoto.fr":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"anilib.me":[["set-local-storage-item","cookies-toast-shown","true"]],"anime2you.de":[["acs","document.getElementById","undefined"]],"animedao.fr":[["aopr","devtoolsDetector"]],"animedao.net":[["aopr","devtoolsDetector"]],"animelib.org":[["set-local-storage-item","cookies-toast-shown","true"]],"anisubindo.pl":[["aeld","keydown","preventDefault"],["aopr","document.onkeydown"],["aopr","document.oncontextmenu"],["aopw","disableSelection"]],"aniwave.com":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"anix.ru":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"aoezone.net":[["set","aoezone_adchecker","true"]],"aporiamagazine.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"app.arzt-direkt.de":[["set-cookie","ARE_DSGVO_PREFERENCES_SUBMITTED","true"]],"appofmirror.com":[["acs","nocontextmenu"]],"apyhub.com":[["set-cookie","cookies-accepted","true","","reload","1"]],"arnosarms.co.uk":[["set-cookie","ce-cookie","N"]],"arras.netlify.app":[["set","ramp.addUnits","noopFunc"]],"arti-definisi-pengertian.info":[["set","document.oncontextmenu","null"],["aopw","document.onselectstart"],["aopw","document.ondragstart"]],"as-eweb.com":[["set-cookie","allowGetPrivacyInfo","true"]],"asf.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"asianexpress.co.uk":[["acs","document.oncontextmenu"]],"asiatv.com":[["aeld","contextmenu"]],"atlas-geografic.net":[["aopr","document.oncontextmenu"],["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"audinifer.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"audius.co":[["rc","scrollLock","","stay"]],"ayudatpymes.com":[["set-cookie","cookie_consent","1"]],"backmarket.pl":[["set-cookie","BM_Advertising","false","","reload","1"],["set-cookie","BM_Analytics","false"],["set-cookie","BM_User_Experience","true"]],"barefootsport.co.nz":[["set-cookie","cookies_allowed","required"]],"base-chat.de":[["set","realCookieBanner","undefined"]],"basiik.com":[["set-cookie","allowGetPrivacyInfo","true"]],"batesenvironmental.co.uk":[["set-cookie","analyticsCookieAccepted","0"],["set-cookie","cookieAccepted","0"]],"beast-kingdom.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"bestrecipes.com.au":[["remove-cookie","br_mc"]],"betway.fr":[["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Marketing","0"],["set-cookie","betway-cookie-policy","true"],["set-cookie","bwui_cookieToastDismissed","true"]],"betway.org":[["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Marketing","0"],["set-cookie","betway-cookie-policy","true"],["set-cookie","bwui_cookieToastDismissed","true"]],"blablacar.com.br":[["set-cookie","_cookies_v2","1"]],"blablacar.ru":[["set-cookie","_cookies_v2","1"]],"blackbullliquor.co.nz":[["set-cookie","visited","yes"]],"blasianluvforever.com":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"blaze.it":[["set-cookie","accept_policy_regulation","1"]],"blista.de":[["set-cookie","cookieconsent_essential","yes"],["set-cookie","cookieconsent_statistics","no"]],"blogyourthing.com":[["set","realCookieBanner","undefined"]],"bookings.hermesairports.com":[["set-cookie","cookie_choice_made","decline"]],"books-world.net":[["nostif","Adblocker","10000"]],"boomboxradio.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"brewart.com":[["set-cookie","ag","y"]],"brokensilenze.net":[["rmnt","script","disable_copy"],["rmnt","script","nocontext"]],"bronze-bravery.com":[["nostif","()","2000"]],"browns-restaurants.co.uk":[["set-cookie","ce-cookie","N"]],"budgetair.de":[["set-cookie","cookieConsentLevel","functional"]],"budgetair.ru":[["set-cookie","cookieConsentLevel","functional"]],"buildtheearth.net":[["set-cookie","mtm_cookie_consent","1"]],"bygge-anlaegsavisen.dk":[["set-cookie","acceptCookies","Functional"]],"bysezejataos.com":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"bzgcc.bz.it":[["set-cookie","ris_cookie_setting","1"]],"calvinklein.es":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"calvinklein.it":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"calvinklein.org":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"campergarage.es":[["set-cookie","cmplz_banner-status","dismissed"]],"canale.live":[["aopr","document.oncontextmenu"]],"canela.tv":[["set-local-storage-item","cks","0"]],"carsales.com.au":[["set-cookie","csnGDPR","true"]],"casellimoveis.com.br":[["set-cookie","cookieMold","true"]],"ccaf.io":[["set-local-storage-item","Analytics:accepted","false"],["set-local-storage-item","GDPR:accepted","true"]],"cheaptickets.fr":[["set-cookie","cookieConsentLevel","functional"]],"cheaptickets.it":[["set-cookie","cookieConsentLevel","functional"]],"chiusa.eu":[["set-cookie","ris_cookie_setting","1"]],"civildigital.com":[["acs","jQuery","ai_adb"]],"clearspend.natwest.com":[["set-cookie","st-cookie-token","true"]],"coffeeforums.co.uk":[["acs","document.getElementById","undefined"]],"cografyahocasi.com":[["acs","document.addEventListener","preventDefault","/^data:text\\/javascript/"]],"colegiolamagdalena.clickedu.eu":[["set-cookie","cookiescheck","true"]],"colors.sonicthehedgehog.com":[["set","document.oncontextmenu","null","3"],["set","document.body.oncontextmenu","null","3"],["aeld","DOMContentLoaded","load"]],"columbiasportswear.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"commonwealmagazine.org":[["remove-cookie","Drupal_visitor_paywall"]],"comune.chiusa.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.proves.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.senales.bz.it":[["set-cookie","ris_cookie_setting","1"]],"cooleygo.com":[["set-cookie","pum-13751","true"]],"cora-broodjes.nl":[["set-cookie","ckies_cloudflare","allow"],["set-local-storage-item","cookies-selected","true"],["set-cookie","ckies_google_analytics","deny","","reload","1"]],"coshoctontribune.com":[["nostif","gnt_mol_oy"]],"cosmos.so":[["set","Object.prototype.disablePaginationLimitForLoggedOut","true"]],"counciloflove.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"countess.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"crichype.de":[["set","confirm","noopFunc"]],"crown.com":[["set-cookie","modalPolicyCookieNotAccepted","notaccepted"]],"crunchyscan.fr":[["acs","document.oncontextmenu"]],"cryptorank.io":[["set-local-storage-item","show_cookies_popup","false"]],"cuisin-studio.com":[["rc","unreadable-display","","stay"]],"cyberdom.blog":[["rmnt","script","keyCode"]],"cyberkrafttraining.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"d0000d.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dacsa.com":[["set","realCookieBanner","undefined"]],"dar.nl":[["set-cookie","dar_ca","true","","reload","1"],["set-cookie","township_tooltip","true"]],"dayspamainz.de":[["set","realCookieBanner","undefined"]],"ddys.nl":[["no-fetch-if","analytics"]],"debeste.de":[["ra","oncontextmenu"]],"delaware.de":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"delaware.it":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"delaware.org":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"delicateseliterare.ro":[["acs","jQuery","contextmenu"]],"depedlps.de":[["acs","document.oncontextmenu"]],"depedlps.es":[["acs","document.oncontextmenu"]],"depedlps.net":[["acs","document.oncontextmenu"]],"depedlps.pl":[["acs","document.oncontextmenu"]],"deportealdia.live":[["acs","document.oncontextmenu"]],"desijugar.net":[["acs","document.onkeydown"]],"dhbbank.com":[["set-cookie","UserCookieLevel","1"],["set-cookie","cookiePreference","1"]],"diaforetiko.gr":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"digionline.ro":[["set-cookie","cmp_level","15"]],"ditchthelabel.org":[["set-cookie","localConsent","true"]],"dj4events.fr":[["rc","unreadable-display","","stay"]],"do.de":[["set","realCookieBanner","undefined"]],"docs.apica.io":[["set-cookie","__gitbook_cookie_granted","no"]],"doga.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"dood.org":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doodstream.net":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dooood.it":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doppelmayr.com":[["set-cookie","essential","true"]],"doutorfinancas.pt":[["set-cookie","df_consent","no"]],"dozapteka.pl":[["set-cookie","consent-granted","1","","reload","1"],["set-cookie","consent-granted-version","23"]],"drainagebuizen.nl":[["set-cookie","cookiebar","1"]],"dramacute.de":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"dramacute.it":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"dramacute.net":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"dramaqu.pl":[["acs","$","contextmenu"]],"dresscode-knoppers.de":[["set-cookie","trackingAccepted","true"]],"drinktuscany.com":[["set-cookie","age_verification","1"]],"earnload.pl":[["set","blurred","false"]],"eater.com":[["nostif","adsBlocked"]],"eci.ie":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"eco-toimistotarvikkeet.fi":[["set-cookie","AcceptKeksit","0","","reload","1"]],"ecoints.com":[["set-local-storage-item","allowed_cookies","true"]],"elektro-plast.com.pl":[["ra","oncontextmenu"]],"elektroda.pl":[["nostif","typeof loadElement"]],"eltiempo.com":[["set-cookie","cookies-info","true"]],"emag.berliner-woche.de":[["set-local-storage-item","consentManager_shown","true"],["set-local-storage-item","consent_necessary","true"],["set-local-storage-item","consent_performance","false"]],"emailfake.com":[["aeld","copy"]],"emersons.co.nz":[["set-cookie","age-checked","1"]],"emmilangnau.ch":[["set-cookie","emmi-che-cookie-categories","essential"]],"emminutritionals.com":[["set-cookie","emmi-nld-cookie-categories","essential"]],"eramba.org":[["set-cookie","localConsent","false"]],"espressocafe.ro":[["rmnt","script","contextmenu"]],"etelecinema.hu":[["set-local-storage-item","cok","true"]],"eugendorf.at":[["set-cookie","ris_cookie_setting","1"]],"eujuicers.de":[["set-cookie","wsp_cc","1","","reload","1"]],"eujuicers.net":[["set-cookie","wsp_cc","1","","reload","1"]],"event.educathai.com":[["set-cookie","educathai_educa2024_cookie_accepted","accept"]],"everbloom.eu":[["set","realCookieBanner","undefined"]],"evium.de":[["set-local-storage-item","tracking-state-v2","deny"]],"evocsports.com":[["set-cookie","cookie-preference","1"]],"experimental-history.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"faduobra.com":[["set-cookie","allowGetPrivacyInfo","true"]],"fauxid.com":[["aeld","error"]],"favi.es":[["set-cookie","__Host-cookie-consent","8","","reload","1"]],"ferienwohnungen-rotzler.de":[["set-cookie","Consent","0"]],"fetch.ai":[["set-cookie","consent","false"]],"fineartsmuseum.recreatex.be":[["set-cookie","acceptAnalyticsCookies","false"],["set-cookie","acceptFunctionalCookies","true"],["set-cookie","cookiePolicyConfirmed","true","","reload","1"]],"firmwarefile.com":[["acs","document.oncontextmenu"]],"flagma.by":[["set-cookie","privacyLevel","flagmajob_ads_shown","1","","reload","1"]],"flashplayer.org.ua":[["aopr","document.oncontextmenu"],["aopr","document.onkeydown"],["aopr","disableSelection"]],"flixhq.es":[["nostif","||null"],["aost","console.clear"]],"floristasgarcia.es":[["set","realCookieBanner","undefined"]],"fluidtopics.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"fmovies.fr":[["set-cookie","show_share","true"],["acs","document.oncontextmenu"],["acs","disableSelection","reEnable"],["aopr","document.ondragstart"],["aost","console.clear"]],"fmovies.it":[["set-cookie","show_share","true"],["acs","document.oncontextmenu"],["acs","disableSelection","reEnable"],["aopr","document.ondragstart"],["aost","console.clear"]],"fmovies.pl":[["set-cookie","show_share","true"],["acs","document.oncontextmenu"],["acs","disableSelection","reEnable"],["aopr","document.ondragstart"],["aost","console.clear"]],"foleys.ie":[["rc","wcc-popup-overflow","body","stay"]],"folsomwinespirits.com":[["set-cookie","isAnAdult","true"]],"foodviva.com":[["ra","oncontextmenu|ondragstart|onselectstart"]],"ford-autogalerie-alfeld.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hommert-coburg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-ohm-rendsburg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-sg-pforzheim.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-wahl-siegen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.it":[["set-cookie","cookieAcknowledged","true"]],"ford.se":[["set-cookie","cookieAcknowledged","true"]],"fpmmusic.com":[["aeld","mousedown","","elements",".trackContainer"]],"fragrantica.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"frissebips.nl":[["set-cookie","cmplz_banner-status","dismissed"]],"fruugo.pl":[["set-cookie","consents","essential"]],"fruugonorge.com":[["set-cookie","consents","essential"]],"fschemie-goettingen.de":[["set","realCookieBanner","undefined"]],"ftccollege.edu":[["set-cookie","wow-modal-id-1","yes"]],"fuckyeah.shop":[["set","realCookieBanner","undefined"]],"gambling-affiliation.com":[["set-cookie","cookie_agreement_v3","2"]],"gamebanana.com":[["aopr","adBlockDetected"],["nostif","vSiteRefresher"]],"gameseal.com":[["set-cookie","cookie-preference","1"]],"gansel-rechtsanwaelte.de":[["set-cookie","cnp_consent","true"]],"gasolinapromociones.bridgestone.es":[["set-cookie","G-SYB3DEBSY1","1"]],"gasthof-riefenkopf.de":[["set-cookie","Consent","0"]],"gdplayertv.pl":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"gemeinde.gais.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.stlorenzen.bz.it":[["set-cookie","ris_cookie_setting","1"]],"genesiscinema.co.uk":[["set-cookie","a1wcc","all"]],"gesundheitsladen-online.de":[["set","realCookieBanner","undefined"]],"getective.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"ggeguide.com":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"gift.be":[["set-cookie","CP_ESSENTIAL","1"],["set-cookie","CP_PREFERENCES","1"]],"giselles.ai":[["set-local-storage-item","isAcceptedCookie","1"]],"gitbook.com":[["set-cookie","__gitbook_cookie_granted","no"]],"globo.com":[["aeld","copy"]],"goldpreis24.de":[["set","realCookieBanner","undefined"]],"gomovies.co.uk":[["acs","document.oncontextmenu"]],"gomovies.fr":[["acs","document.oncontextmenu"]],"gosch.de":[["set","realCookieBanner","undefined"]],"granado.com.br":[["set-local-storage-item","store-cookie-consent","accepted"]],"green-24.de":[["set-cookie","cf4212_cn","1"]],"gtaservers.org":[["set-local-storage-item","np-west-signup-seen-2","1"]],"gukjenews.com":[["ra","oncontextmenu|onselectstart|ondragstart"]],"handelsbanken.fi":[["set-cookie","shb-consent-cookies","false"]],"hansa-online.de":[["ra","oncontextmenu","body","complete"]],"haulageexchange.co.uk":[["set-cookie","nc_analytics","rejected"],["set-cookie","nc_cookies","accepted"],["set-cookie","nc_marketing","rejected"]],"hdrezka.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"healthera.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"heavyfetish.com":[["set","flashvars.autoplay",""]],"helitransair.com":[["set-cookie","privacyLevel","2","","reload","1"]],"hello-rezka.es":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"help.sap.com":[["set-cookie","saphpbypassnondoc","true"]],"herrlichergarten.de":[["set","realCookieBanner","undefined"]],"hianime.com.br":[["set","devtoolsDetector.launch","noopFunc"]],"hianime.de":[["set","devtoolsDetector.launch","noopFunc"]],"highliferoleplay.net":[["set-cookie","HighLife-cookie-accept","true"]],"hindipix.pl":[["set","console.debug","trueFunc"],["set","console.clear","trueFunc"]],"hitado.de":[["set-cookie","cookie-preference","1"]],"hitcena.pl":[["aeld","contextmenu"]],"horizonte.com":[["set","realCookieBanner","undefined"]],"hotel-la-chaumiere.com":[["rc","unreadable-display","","stay"]],"hotspring.be":[["rc","wcc-popup-overflow","body","stay"]],"howstuffworks.com":[["set-cookie","gdpr_opt_in","1"]],"hoyolab.com":[["aeld","contextmenu","","elements","img[no-copy=\"true\"]"],["aeld","contextmenu","preventDefault","elements",".viewer-container"]],"huisartsenpraktijkdoorn.nl":[["set-cookie","cookies-marketing","N"]],"hukmatpro.com":[["aopw","hidekeep"]],"hukmatpro.de":[["aopw","hidekeep"]],"hutchnews.com":[["nostif","gnt_mol_oy"]],"ibps.in":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"ielts.com.au":[["set-cookie","acceptCookie","true"]],"ifortuna.sk":[["set-cookie","cookie_layer","1"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"iftarsaati.org":[["set-cookie","__prvcy","1"]],"ige.ch":[["set-cookie","cb-enabled","declined"]],"ilyabiz.com":[["set","realCookieBanner","undefined"]],"ing-sat.hu":[["set","document.oncontextmenu","null"],["set","document.onmousedown","null"]],"ing.it":[["set-cookie","ING_GPP","0"],["set-cookie","ING_GPT","0"]],"inselberlin.de":[["set-local-storage-item","userAcceptsCookies","1"]],"intergate.info":[["set","document.oncontextmenu","null"]],"intermatic.com":[["set-cookie","acceptCookies","true"]],"iskandinavya.com":[["aopr","kan_vars.adblock"]],"ivyexec.com":[["set-cookie","COOKIE-POLICY-ACCEPT","true"]],"iziconfort.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"japonhentai.com":[["acs","addEventListener","ays_tooltip"],["rmnt","style","::selection"]],"javea.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"javgrab.com":[["acs","$","contextmenu"]],"javhd.com":[["set-cookie","adult-warning-popup","disabled"]],"javsubtitle.co":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"javx357.com":[["rmnt","script","disableRightClick"]],"jito.network":[["set-local-storage-item","hasConsentedPH","no"]],"jobs2work.com.br":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"jointhefollowup.com":[["set-cookie","popup_closed","true"]],"journalstandard.com":[["nostif","gnt_mol_oy"]],"jugend-praesentiert.de":[["set-cookie","cookiebanner","essential"]],"k33.com":[["set-local-storage-item","cookies-product","NO"],["set-local-storage-item","showCookies","NO"]],"kaembed.es":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"kamera-express.lu":[["set-cookie","cookie_accepted","false","","reload","1"]],"kangasalansanomat.fi":[["set-cookie","kscookies","true"]],"kangmartho.com":[["acs","document.onselectstart"]],"karamellstore.com.br":[["nostif","exit_popup","10000"]],"kare11.com":[["aeld","/^(mouseout|mouseleave)$/"]],"karofilm.ru":[["set-cookie","cookie_usage","yes"]],"kashinavi.com":[["ra","oncopy|onSelectStart|oncontextmenu|style","[oncopy],[oncontextmenu]"]],"katapult-shop.de":[["set-cookie","cookie-preference","1"]],"keb-automation.com":[["set-cookie","privacy-statement-accepted","true","","reload","1"]],"keravanenergia.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"keytube.net":[["ra","oncontextmenu","#lyrics[oncontextmenu]","complete"]],"kika.com.br":[["set-cookie","cookie_accepted","1"],["set-cookie","functional_cookies","1","","reload","1"]],"kika.es":[["set-cookie","cookie_accepted","1"],["set-cookie","functional_cookies","1","","reload","1"]],"kika.org":[["set-cookie","cookie_accepted","1"],["set-cookie","functional_cookies","1","","reload","1"]],"kitchennovel.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"knitted-anatomy.at":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_google_analytics","deny"]],"knoblauch.de":[["set","realCookieBanner","undefined"]],"koalasplayground.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"koenvandenheuvel.be":[["rc","cookieconsent-active","body","stay"]],"kptv.com":[["rc","powa-sticky","","stay"]],"kto.com":[["set-cookie","caccept","on"]],"kto.org":[["set-cookie","caccept","on"]],"ktoo.org":[["set-cookie","modalDismissed","1"]],"kuechenboerse.de":[["set","realCookieBanner","undefined"]],"kulinarnastronamocy.pl":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"kunstler.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"kursnacukrzyce.pl":[["acs","document.addEventListener","contextmenu"]],"kwerfeldein.de":[["set","realCookieBanner","undefined"]],"kyoceradocumentsolutions.es":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.ru":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"labiosthetique.pl":[["set-cookie","wt-cookie-settings","0"]],"labiosthetique.ru":[["set-cookie","wt-cookie-settings","0"]],"lancastereaglegazette.com":[["nostif","gnt_mol_oy"]],"lanew.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"langitmovie.com":[["aopr","document.oncontextmenu"]],"laptophardware.hu":[["set","cookie_alert_overlay","noopFunc"]],"laughingbonesbrewing.com":[["set-cookie","age-checked","1"]],"lc.paragon-software.com":[["set-cookie","cookie-accepted","yes"]],"leben-mit-ohne.de":[["set","realCookieBanner","undefined"]],"ledenicheur.fr":[["set-cookie","privacy_settings","1"]],"leeway.tech":[["set-local-storage-item","lw-accepts-cookies","true"]],"legacy.com":[["acs","document.createElement","admiral"],["acs","document.getElementsByTagName","admiral"]],"leguidedufromage.com":[["set-cookie","bandeaucookies","1"],["set-cookie","userConsent","all"]],"libgen.ru":[["nostif","appendMessage"]],"librinova.com":[["set-local-storage-item","cookieconsent_status","false"]],"librumreader.com":[["set-local-storage-item","firstVisit","false"]],"lilcat.com":[["set-cookie","cookie-consent","accepted","","reload","1"]],"linux-apps.com":[["rmnt","script","btnHtml"],["nano-stb","count"]],"live.domatv.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"liverpoolphil.com":[["set-cookie","eucookie","1"]],"lofter.com":[["aeld","contextmenu"]],"looper.com":[["aeld","copy"]],"ltmemory.de":[["set","realCookieBanner","undefined"]],"lueneburger-heide.de":[["set-cookie","acceptEssential","1"]],"lukify.app":[["set-local-storage-item","_lukCookieAgree","2"]],"m38a1.de":[["set","realCookieBanner","undefined"]],"m4uhd.net":[["aopr","locdau"]],"madeiramadeira.com.br":[["set-local-storage-item","lgpd-agree","1"]],"mall.hu":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"mandiner.hu":[["rc","modal-open","body","stay"]],"mangaku.com.br":[["acs","$","contextmenu"],["aeld","contextmenu"]],"mangaku.nl":[["acs","$","contextmenu"],["aeld","contextmenu"]],"mangalib.org":[["set-local-storage-item","cookies-toast-shown","true"]],"mangatoon.net":[["acs","document.oncontextmenu"]],"manianomikata.com":[["acs","document.oncontextmenu"],["aopw","disableSelection"]],"map.blitzortung.org":[["set-cookie","CONSENT","1"]],"marketing-strategen.com":[["set","realCookieBanner","undefined"]],"marketwinestore.com.au":[["set-session-storage-item","notification","false"]],"mbs.jp":[["aopw","document.oncontextmenu"]],"mcdonoughvoice.com":[["nostif","gnt_mol_oy"]],"mcskinhistory.com":[["no-fetch-if","ads"]],"media-consulting.ch":[["set","realCookieBanner","undefined"]],"mediafax.ro":[["aeld","copy"]],"mediamaniya.site":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"medtube.pl":[["set-cookie","cookiePolicy","4"]],"mein.vav.at":[["set-cookie","cookie-law-concent","true"]],"merrell.pl":[["set-cookie","amcookie_allowed","1"],["set-cookie","amcookie_policy_restriction","allowed"]],"mexiconewsdaily.com":[["set","detectPrivateMode","noopFunc"]],"microlinkpc.com":[["set-cookie","is_analytics_allowed","0"],["set-cookie","microlink_cookie_notice","1"]],"mimovrste.com":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"mjob.si":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","obligatory","true"]],"mobiliteit.nl":[["set-cookie","gdpr","deny"]],"mobiltbredband.se":[["rc","wcc-popup-overflow","body","stay"]],"moneyfarm.com":[["set-cookie","consent_updated","true"]],"moneygenius.ca":[["set-cookie","last-chance-optin","true"]],"mooc.chaoxing.com":[["aeld","beforepaste"]],"mostream.us":[["rmnt","script","/devtoolsDetector|keyCode|preventDefault/"]],"motoblouz.co.uk":[["set-cookie","accept_cookies_rgpd","1","","reload","1"]],"motoblouz.net":[["set-cookie","accept_cookies_rgpd","1","","reload","1"]],"motoblouz.nl":[["set-cookie","accept_cookies_rgpd","1","","reload","1"]],"motoblouz.pl":[["set-cookie","accept_cookies_rgpd","1","","reload","1"]],"moviesjoy.co.uk":[["set-cookie","show_share","true"]],"moviesjoy.es":[["set-cookie","show_share","true"]],"msa-berlin.de":[["set-cookie","ckies_cookielaw","allow"]],"msk.kitazawa.me":[["json-prune","ads.[].imageUrl"]],"music-on-net.de":[["set","realCookieBanner","undefined"]],"music.apple.com":[["aeld","contextmenu"]],"my-code4you.blogspot.com":[["aopr","document.onkeydown"]],"my.eneba.com":[["set-cookie","cconsent","1000"]],"mydramalist.com":[["rc","smartbanner-active","body"]],"myeventeo.com":[["set-cookie","cookiesPolicy20211101","1"]],"myloview.es":[["set-cookie","cookieConsent","necessary","","reload","1"]],"myloview.pl":[["set-cookie","cookieConsent","necessary","","reload","1"]],"myredcarpetliquors.com":[["set-cookie","age_verification","1"]],"mzk.starachowice.eu":[["aopw","adBlockDetected"]],"nadia.gov.gr":[["set-cookie","consent-status","1"]],"nahrungsmittel-intoleranz.com":[["set","realCookieBanner","undefined"],["set","window.SteadyWidgetSettings.adblockActive","false"]],"namensetiketten.de":[["set-local-storage-item","load-scripts-v2","2"]],"napos.cz":[["set-cookie","cmplz_banner-status","dismissed"]],"nature-et-bois.fr":[["rc","unreadable-display","","stay"]],"nbcdfw.com":[["aeld","scroll"]],"nbcsandiego.com":[["aeld","scroll"]],"netu.fr":[["set","devtoolsDetector.launch","noopFunc"]],"netu.nl":[["set","devtoolsDetector.launch","noopFunc"]],"netu.pl":[["set","devtoolsDetector.launch","noopFunc"]],"netu.ru":[["set","devtoolsDetector.launch","noopFunc"]],"neumarkt-egna.it":[["set","realCookieBanner","undefined"]],"neuneinhalb.org":[["set","realCookieBanner","undefined"]],"neuroteam-metz.de":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"neustift-stubaital.gv.at":[["set-cookie","ris_cookie_setting","1"]],"newpharma.fr":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"news.samsung.com":[["set-cookie","COOKIECONSENT","false"]],"newsbook.pl":[["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"nio.com":[["set-cookie","npp_analytical","0"]],"nonesnanking.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"novap.fr":[["set-cookie","amcookie_allowed","1"]],"novelism.jp":[["ra","oncontextmenu|ondragstart|oncopy|oncut",".select-none","stay"]],"nuevoloquo.ch":[["set-cookie","tos_consent","allow"]],"oakbeardcare.com":[["set","realCookieBanner","undefined"]],"octopusenergy.it":[["set-cookie","dismissCookieBanner","true"]],"odiario.com":[["aeld","copy"]],"oklahoman.com":[["nostif","gnt_mol_oy"]],"ol-webshop.com":[["set-cookie","cookie_consent_user_accepted","true"]],"oneal.eu":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"onedio.com":[["set-cookie","o-push-alert","1"]],"ontivi.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"oocl.com":[["set-cookie","AcceptCookie","yes"]],"opencascade.com":[["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"opensecrets.org":[["rc","js-no-scroll","html","stay"]],"openwebui.com":[["set-local-storage-item","cookie_consent","rejected"]],"oploverz.com":[["rmnt","script","contextmenu"],["rmnt","style","user-select"],["aopw","check"]],"oponeo.ru":[["set-cookie","_cookieConsents","1"]],"opticron.co.uk":[["set-cookie","AllowAllCookies","1","","reload","1"]],"optimism.io":[["set-cookie","cookieAccepted","true"]],"order-order.com":[["acs","document.createElement","admiral"]],"otakudesu.net":[["acs","document.oncontextmenu"]],"oxax.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"pal-item.com":[["nostif","gnt_mol_oy"]],"paplanvilag.hu":[["set","cookie_alert_overlay","noopFunc"]],"pathe.nl":[["set-cookie","COOKIE_NOTIFICATION_V2","0"]],"patreon.com":[["aeld","touchmove","preventDefault"],["set-cookie","can_see_nsfw","1","","reload","1"]],"pawread.com":[["set-local-storage-item","countChapterNum","$remove$"]],"pcgamer.com":[["set-cookie","FTR_Article_PageView","2"]],"pelispedia.it":[["aopw","document.oncontextmenu"],["ra","oncontextmenu"]],"petoskeynews.com":[["nostif","gnt_mol_oy"]],"pibank.com":[["set-cookie","tecnicaCookie","true"]],"pigu.lt":[["set-cookie","CA_DT_V2","0","","reload","1"],["set-cookie","CA_DT_V3","0"]],"pinterest.pl":[["set-local-storage-item","DWEB_PIN_IMAGE_CLICK_COUNT","$remove$"],["set-local-storage-item","unauthDownloadCount","$remove$"]],"pndracingteam.net":[["set","realCookieBanner","undefined"]],"pngitem.com":[["aopr","document.oncontextmenu"]],"pobre.fr":[["aeld","","blockFuckingEverything"],["aeld","contextmenu","preventDefault"],["aost","eval","build.js"]],"podimo.com":[["set","window.scrollTo","noopFunc"]],"polarsignals.com":[["set-cookie","PSCCookieConsent","false"]],"polyvsp.ru":[["aeld","contextmenu"]],"popcornmovies.io":[["set","console.clear","trueFunc"],["set","console.log","trueFunc"],["set","console.table","trueFunc"],["aeld","keydown","123===i"]],"posterstore.fr":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.jp":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.kr":[["set-cookie","synapse-cookie-preferences-set","true"]],"poughkeepsiejournal.com":[["nostif","gnt_mol_oy"]],"prenota.humanitas.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"presto-personaldienste.de":[["set","realCookieBanner","undefined"]],"pricehubble.com":[["set-cookie","cookieBannerAccepted","1","","reload","1"]],"privivkainfo.ru":[["aopw","disable_keystrokes"],["acs","document.oncontextmenu"],["set","disableSelection","noopFunc"],["aeld","copy","pagelink"]],"proboards.com":[["aeld","scroll"]],"prodottidellapiazza.it":[["set","realCookieBanner","undefined"]],"projectenglish.com.pl":[["set-cookie","analitics_cookies","0"],["set-cookie","privacy_settings","1"]],"projektowanie-wnetrz-online.pl":[["aopr","disable_copy"],["aopw","document.ondragstart"]],"proofing.de":[["set","realCookieBanner","undefined"]],"protan-elmark.fr":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","rodopolicy","true"]],"pubgesports.com":[["set-cookie","analytics","N"],["set-cookie","essential","Y"],["set-cookie","functional","N"]],"publications.cispa.de":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"pulpe.eu":[["set","realCookieBanner","undefined"]],"pumatools.hu":[["set-cookie","cookie_level","2"]],"puratos.co.uk":[["set-cookie","functionalCookieAccepted","true"]],"puratos.com":[["set-cookie","functionalCookieAccepted","true"]],"putlocker.pl":[["aopw","document.oncontextmenu"]],"puzzle-futoshiki.com":[["rmnt","script","ab927c49cf1b"]],"qualityfilehosting.com":[["aopw","disableEnterKey"],["acs","document.ondragstart","document.oncontextmenu"]],"racket.news":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"rameder.de":[["set-cookie","cookiemanager","15"]],"read.perspectiveship.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"recantodasletras.com.br":[["aopr","RL.licenseman.init"]],"recordnet.com":[["nostif","gnt_mol_oy"]],"redding.com":[["nostif","gnt_mol_oy"]],"redro.pl":[["set-cookie","cookieConsent","necessary","","reload","1"]],"refinery29.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"reise-zikaden.de":[["set","realCookieBanner","undefined"]],"remixsearch.es":[["nano-sib","loadexternal","1000"]],"renault-autocenterprignitz-pritzwalk.de":[["set-cookie","hide-gdpr-bar","true"]],"repack-games.com":[["acs","jQuery","contextmenu"]],"reporternews.com":[["nostif","gnt_mol_oy"]],"researchaffiliates.com":[["set-cookie","ra-cookie-disclaimer-11-05-2022","true"]],"reservations.helveticmotion.ch":[["set-cookie","decline","true","","","reload","1"]],"resolution.de":[["set-cookie","hasSeenCookiePopUp","yes"]],"revistavanityfair.es":[["aopr","initAdBlockerPanel"]],"rig-flip.com":[["set-local-storage-item","cookie_consent","declined"]],"rightsize.dk":[["set-local-storage-item","cookieStatus","rejected"]],"romeo.com":[["set-local-storage-item","cookiesConsent","1"]],"royalenfield.com":[["set-cookie","cookieConsent","rejected"]],"rtu.lv":[["set-cookie","uce-cookie","N"]],"ruapehubrewing.co.nz":[["set-cookie","is_legal","yes"]],"ruidosonews.com":[["nostif","gnt_mol_oy"]],"rule34.paheal.net":[["set-cookie","ui-tnc-agreed","true"]],"ryuryuko.blog90.fc2.com":[["aopw","initimg"],["ra","oncontextmenu|onCopy"]],"saalfelden.at":[["set-cookie","ris_cookie_setting","1"]],"safaricom.co.ke":[["set-cookie","cookieConsent","rejected"]],"safetxt.net":[["acs","$","contextmenu"]],"salex.md":[["set-local-storage-item","sxCookie","true"]],"sandboxservices.be":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"satcesc.com":[["acs","document.oncontextmenu"],["aopw","disableSelection"],["aopw","document.onkeydown"],["aeld","/^(?:keyup|keydown)$/"],["aopr","document.ondragstart"]],"savvista.com":[["set","realCookieBanner","undefined"]],"sbflix.es":[["acs","onload","contextmenu"]],"sc.edu":[["set-cookie","_pc","0"]],"scholpp.es":[["rc","with-featherlight","","stay"]],"schwechat.gv.at":[["set-cookie","ris_cookie_setting","1"]],"search.odin.io":[["set-local-storage-item","cookie_consent","granted"]],"securityweek.com":[["rc","pum-open-overlay","body","stay"]],"seemueller.com":[["set-cookie","cookie-preference","1"]],"seir-sanduk.de":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seir-sanduk.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seirsanduk.nl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seirsanduk.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"serverstoplist.com":[["set-cookie","STAgreement","1"]],"sflix2.net":[["nosiif","/_0x|devtools/"]],"sflix2.pl":[["nosiif","/_0x|devtools/"]],"shakespeare.org.uk":[["set-cookie","advertising","false"],["set-cookie","analytics","false"]],"sharktankblog.com":[["aopr","disable_copy"],["aopr","wccp_pro_iscontenteditable"],["aopr","disable_hot_keys"],["aopr","nocontext"]],"shg-kliniken.de":[["set-cookie","CookieConsent","mandatory"]],"shop.gooddrop.co.nz":[["set-local-storage-item","age_confirmed","true"]],"shop.hansapark.de":[["set-cookie","cookies_mandatory","true"]],"shop.wumajia.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop0315.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shopbuddies.de":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shopbuddies.it":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shopbuilder.co.nl":[["set-cookie","cookie_consent","1","","reload","1"]],"shopilya.com":[["set-cookie","hulkCookieBarClick","1"]],"silvini.sk":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"skandynawiainfo.pl":[["aeld","","mdp"]],"skb-leasing.si":[["set-cookie","cookie_gdpr","true","","reload","1"]],"skionline.pl":[["ra","oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"]],"skuola.net":[["aeld","/contextmenu|copy/"]],"skymsen.com":[["set-cookie","purecookieDismiss","1"]],"sl-landschaftsgestaltung.de":[["set","realCookieBanner","undefined"]],"sliplane.io":[["set-cookie","cookiesAccepted","essential","","reload","1"]],"smotreshka-tv.de":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotreshka-tv.nl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotret-tv.de":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotret-tv.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotret-tv.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrim-tv.it":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"so-nice.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"solarmovie.fr":[["nostif","_detectLoop"]],"solarmovie.net":[["nostif","_detectLoop"]],"sonofsteak.co.uk":[["set-cookie","ce-cookie","N"]],"sororedit.com":[["set-cookie","cookie_tou","1","","reload","1"]],"soundcloudmp3.org":[["set","detectAdBlock","noopFunc"]],"sp215.info":[["set-cookie","plg_system_djcookiemonster_informed","1","","reload","1"]],"space.com":[["set-cookie","FTR_Article_PageView","2"]],"sportsnet.ca":[["aopr","uxGuid"]],"sss.fi":[["aeld","load","function(){if(s.readyState==XMLHttpRequest.DONE"]],"stagewise.io":[["set-cookie","stagewise-cookie-consent","denied"]],"stammzellenspender.be":[["rc","cookieconsent-active","body","stay"]],"starnewsonline.com":[["nostif","gnt_mol_oy"]],"startrescue.co.uk":[["set-cookie","_cookieconsentv2","1"]],"stevenspointjournal.com":[["nostif","gnt_mol_oy"]],"stilweb.it":[["set","realCookieBanner","undefined"]],"stiridinromania.ro":[["acs","document.oncontextmenu"]],"store.junesjourney.com":[["set-cookie","analyticsConsent","false"]],"streamruby.com":[["rmnt","script","/devtool|debugger/"]],"streamtape.ru":[["aeld","contextmenu"],["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"stroga-festival.de":[["set-cookie","third-party","required","","reload","1"]],"studiestoday.com":[["aeld","/select|copy|contextmenu/"]],"studyrankers.com":[["aeld","/cut|copy|paste|contextmenu/"]],"sussytoons.com.br":[["nosiif","/devtool|console\\.clear/"],["aeld","keydown","123"],["set","Object.prototype.disableMenu","false"]],"sussytoons.fr":[["nosiif","/devtool|console\\.clear/"],["aeld","keydown","123"],["set","Object.prototype.disableMenu","false"]],"sussytoons.nl":[["nosiif","/devtool|console\\.clear/"],["aeld","keydown","123"],["set","Object.prototype.disableMenu","false"]],"sussytoons.org":[["nosiif","/devtool|console\\.clear/"],["aeld","keydown","123"],["set","Object.prototype.disableMenu","false"]],"sussytoons.ru":[["nosiif","/devtool|console\\.clear/"],["aeld","keydown","123"],["set","Object.prototype.disableMenu","false"]],"suzylu.co.uk":[["aeld","contextmenu"]],"svetwhisky.sk":[["set-cookie","popupdisplay1","1"]],"swatchseries.es":[["set-cookie","show_share","true"]],"symposium.org":[["set","realCookieBanner","undefined"]],"systemfala.pl":[["set-cookie","COOKIES_ACCEPT","true"]],"t3.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"tabonitobrasil.es":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["aeld","keydown","preventDefault"]],"tadu.com":[["aeld","/contextmenu|selectstart/"]],"techieway.blogspot.com":[["aopr","document.onselectstart"]],"techstores.gr":[["set-cookie","i3-cookie-consent","1"],["set-cookie","i3-required-cookies","1"]],"tekloggers.com":[["ra","oncontextmenu|onkeydown|onmousedown"]],"telyn610zoanthropy.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"temperatur.nu":[["nostif","holidAds"]],"temu.com":[["set-cookie","privacy_setting","100"],["aeld","mouseleave"]],"teodor.bg":[["set-cookie","amcookie_allowed","1"]],"testefiorite.it":[["set","realCookieBanner","undefined"]],"thai-novel.com":[["set-local-storage-item","analytics-consent","accepted"]],"theartofnakedwoman.pl":[["aopw","intializemarquee"]],"theasianparent.com":[["acs","document.onselectstart","disableselect"]],"thebulwark.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"thebump.com":[["set-cookie","registration_modal_dismissed","true"]],"thechampionpub.co.uk":[["set-cookie","ce-cookie","N"]],"thedraftnetwork.com":[["acs","document.createElement","admiral"]],"thegatewaypundit.com":[["aeld","","adtoniq"]],"thegearhunt.com":[["aeld","/^(?:contextmenu|copy|keydown|mousedown)$/"]],"theintell.com":[["nostif","gnt_mol_oy"]],"thejerichooxford.co.uk":[["set-cookie","ce-cookie","N"]],"thelist.com":[["aeld","copy"]],"themeslide.com":[["rmnt","script","preventDefault"]],"theoblog.de":[["set","realCookieBanner","undefined"]],"theodysseyonline.com":[["aopr","__cmpGdprAppliesGlobally"]],"theramsheaddisley.co.uk":[["set-cookie","ce-cookie","N"]],"therapiewerk-io.de":[["set","realCookieBanner","undefined"]],"thesunclapham.co.uk":[["set-cookie","ce-cookie","N"]],"theswanbroadway.co.uk":[["set-cookie","ce-cookie","N"]],"thetimesnews.com":[["nostif","gnt_mol_oy"]],"thevaporshoppeusa.com":[["set-cookie","bouncer","true"]],"thotsbay.tv":[["aeld","/contextmenu|keydown/"],["set","devtoolsDetector.launch","noopFunc"]],"threads.com":[["set-session-storage-item","cb","1"],["set-session-storage-item","barcelona_mobile_upsell_state","1"]],"ti.com":[["set-cookie","explicit_consent","true"]],"ticketingcine.fr":[["set-cookie","alertCookie","1","","reload","1"]],"tickets.dehortus.nl":[["set-cookie","acceptAnalyticsCookies","False"],["set-cookie","acceptFunctionalCookies","False"],["set-cookie","cookiePolicyConfirmed","True","","reload","1"]],"tiefenthaler-landtechnik.ch":[["set-cookie","allowTracking","false"]],"tiesse.com":[["set","realCookieBanner","undefined"]],"timeoutdoors.com":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"times-gazette.com":[["nostif","gnt_mol_oy"]],"timesreporter.com":[["nostif","gnt_mol_oy"]],"tinyppt.com":[["aopw","document.ondragstart"],["aopw","disableEnterKey"],["acs","document.oncontextmenu"]],"titanic-magazin.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"tkm-systemtechnik.de":[["set","realCookieBanner","undefined"]],"toledoblade.com":[["aopr","__cmpGdprAppliesGlobally"]],"top4mobile.com":[["set-cookie","cookies-agreed","1"],["set-cookie","cookies-analytical","0"]],"topeuropix.co.uk":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"topeuropix.com":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"topeuropix.de":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"tpsgarage.com":[["set-cookie","cookies_accepted","1","","reload","1"]],"tradefixdirect.com":[["set-cookie","ud_accept_analytical_cookies","0"],["set-cookie","ud_accept_marketing_cookies","0"]],"traefik.io":[["set-local-storage-item","cookie_consent","true"]],"transport-versicherungen.info":[["set","realCookieBanner","undefined"]],"traun.at":[["set-cookie","ris_cookie_setting","1"]],"tremblingmadness.co.uk":[["set-cookie","leadform_21331328-003f-43ca-a4d6-743402481f7c_closed","1"]],"trendpet.de":[["set-cookie","cookie-preference","1"]],"trimel.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"ttela.se":[["set-cookie","stampen-cookies-hide-information","yes"]],"tube8.com":[["set-cookie","t8disclaimer","1"]],"turbolab.it":[["nostif","warning"]],"tvnstyle.pl":[["aeld","contextmenu","a"]],"tvpassport.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"tvron.it":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvzingvn.de":[["acs","onload","contextmenu"]],"tvzingvn.fr":[["acs","onload","contextmenu"]],"tvzingvn.org":[["acs","onload","contextmenu"]],"twenga.es":[["set-cookie","cookiewarning","1","","reload","1"]],"ubuntudde.com":[["acs","String.prototype.charCodeAt","ai_"]],"ultraten.net":[["aeld","contextmenu"],["acs","document.onkeydown"]],"umlandscout.de":[["set-cookie","loader","1"]],"unidivers.fr":[["no-xhr-if","googlesyndication"]],"unifachbuch.de":[["set-cookie","i_c_a","true"],["set-cookie","i_cm_a","false"],["set-cookie","i_sc_a","false"]],"uniqueshop.gr":[["set-cookie","iccb_init","1"]],"urjalansanomat.fi":[["set-cookie","cm_ads","0"],["set-cookie","cm_analytics","0"],["set-cookie","cm_default","1"]],"usmleexperiences.review":[["acs","document.oncontextmenu"]],"utour.me":[["nostif","myModal","3000"]],"v6embed.xyz":[["nosiif","devtool"],["nostif","devtool"]],"vajiramandravi.com":[["set-cookie","GSAPR26","true"]],"valostore.fi":[["set-local-storage-item","cookieConsent","necessary"]],"vandemoortel.de":[["set-cookie","cookieConsent_given","","reload","1"]],"vanmossel.fr":[["set-cookie","gtmCookieAccepted","1"],["set-cookie","gtmCookiePopup","1"]],"vansprint.de":[["set-cookie","cookie-preference","1"]],"varusteleka.com":[["set-local-storage-item","cookieConsent","false"]],"vedantu.com":[["aeld","contextmenu","preventDefault"]],"veed.io":[["set-local-storage-item","trainingDataConsent","true"]],"veeqo.com":[["set-cookie","veeqo_consent","granted"]],"velo-antwerpen.be":[["set-cookie","Cookies_Preferences","accepted"],["set-cookie","Cookies_Preferences_Analytics","declined"]],"vembed.org":[["nosiif","devtool"],["nostif","devtool"],["rmnt","script","devtools"]],"verilife.com":[["set-cookie","popupShown","true"]],"viba.barcelona":[["set-cookie","promptCookies","1"]],"vidara.it":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidara.net":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"videovard.pl":[["set","console.clear","undefined"]],"vidmoly.it":[["rmnt","script","devtoolsDetector"],["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidplay.it":[["set","DisDevTool","undefined"]],"vidsrc.co.uk":[["acs","RegExp.prototype.toString",".join(\"\")"],["aeld","keydown","123"],["nosiif","devtool"],["set","console.clear","trueFunc"],["set","DisableDevtool","noopFunc"],["set","devtoolsDetector.launch","noopFunc"]],"vidsrc.nl":[["acs","RegExp.prototype.toString",".join(\"\")"],["aeld","keydown","123"],["nosiif","devtool"],["set","console.clear","trueFunc"],["set","DisableDevtool","noopFunc"],["set","devtoolsDetector.launch","noopFunc"]],"vidstream.pro":[["aost","console.clear"]],"villagrancanaria.com":[["set-local-storage-item","cookies_view","true"]],"vinaurl.pl":[["ra","onkeydown"]],"vinopolitan.sk":[["set-cookie","h_adult","1","","reload","1"]],"vinusta.com":[["set-cookie","acris_cookie_acc","1","","reload","1"]],"visti.it":[["set-cookie","acceptcookies","1"]],"vita-world24.de":[["set-cookie","cookie-preference","1"]],"vixcloud.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"vixcloud.fr":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"vixcloud.nl":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"vixcloud.pl":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"vkf-renzel.nl":[["set-cookie","handledCookieMessage","1"]],"voirfilms.fr":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"votegroup.de":[["set-cookie","dsgvo-mark","no"],["set-cookie","dsgvo-stat","yes"]],"voxvalachorum.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"wachusettliquors.com":[["set-cookie","age-checked","1"]],"walmart.com":[["set-session-storage-item","va-notice-seen","1"]],"warning.or.kr":[["ra","oncontextmenu"]],"watchaut.film":[["set-cookie","cookieConsent","required"]],"wayfair.ie":[["set-cookie","user_cookie_prefs","1"]],"webnoveltranslations.com":[["aeld","/contextmenu|copy|cut|key/","","elements","document"]],"wedding.pl":[["set-cookie","wed_cookie_info","1"]],"weetabixonthego.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"weiterbildungsfinder.de":[["set","realCookieBanner","undefined"]],"wellandtribune.ca":[["remove-cookie","/^tncms:meter:/"]],"werkenbijiciparisxl.nl":[["rc","is-active-cookiebar","","stay"]],"whas11.com":[["aeld","/^(mouseout|mouseleave)$/"]],"whattowatch.com":[["set-cookie","FTR_Article_PageView","2"]],"wikiwand.com":[["set-cookie","wikiwand.cookies.consent","true"]],"wildstarlogs.com":[["acs","attachToDom","ad-fallback"]],"wirtualnyspac3r.pl":[["aeld","contextmenu"]],"wizards.com":[["set-cookie","cookie-agreed","2"]],"wltx.com":[["aeld","/^(mouseout|mouseleave)$/"]],"wokularach.pl":[["set-local-storage-item","display_cookie_modal","false"]],"works-hellas.com":[["set-cookie","cookieSettings","11","","reload","1"]],"wstream.co.uk":[["aeld","contextmenu","preventDefault"],["aopr","onload"]],"wstream.com":[["aeld","contextmenu","preventDefault"],["aopr","onload"]],"wstream.it":[["aeld","contextmenu","preventDefault"],["aopr","onload"]],"wwltv.com":[["aeld","/^(mouseout|mouseleave)$/"]],"www-devonlive-com.translate.goog":[["rmnt","script","loc.hostname"]],"www-liverpoolecho-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www.uva.nl":[["set-cookie","cookie_consent_level","1"]],"xhamster1.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster10.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster11.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster11.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster11.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster11.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster12.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster13.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster16.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster18.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster19.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster20.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster3.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster3.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster4.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster42.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster7.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster7.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster8.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhbig.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xn--lkylen-vxa.se":[["set-cookie","gdpr_ok","necessary"]],"xnxx.com":[["aopr","fuckAdBlock"]],"xplay.gg":[["set-cookie","zaraz-consent","1"]],"xxxfetish24.com":[["set-local-storage-item","mb_age_warning_verified","1"]],"yeuphimmoik.com":[["acs","jQuery","contextmenu"]],"zapatos.it":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zappatos.net":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zappatos.nl":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zeglins.com":[["set-local-storage-item","canada-cookie-acknowledge","1"]],"zelezodum.cz":[["set-cookie","show_gdpr_cookie_message_388801234_cz","no"]],"zeoob.com":[["set-cookie","allowed_consent","yes"]],"zhihu.com":[["aeld","/contextmenu|copy/"]],"ziarulargesul.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"zingtvhd.fr":[["acs","onload","contextmenu"]],"zingtvhd.it":[["acs","onload","contextmenu"]],"zingvntv.es":[["acs","onload","contextmenu"]],"zingvntv.org":[["acs","onload","contextmenu"]],"zonerpress.cz":[["set-cookie","adsCookies","false"],["set-cookie","inshopCookiesSet","true"]],"zutobi.com":[["set-cookie","cky-action","yes"],["set-cookie","cookieyes-functional","no"],["set-cookie","cookieyes-necessary","yes"],["set-cookie","cookieyes-other","no"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
