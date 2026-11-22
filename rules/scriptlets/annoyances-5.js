/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0815.at":[["set-cookie","cookie-preference","1"]],"1000-haushaltstipps.de":[["set","realCookieBanner","undefined"]],"10000recipe.com":[["acs","$","contextmenu"]],"102bank.com":[["aopw","adBlockDetected"]],"29.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"4kfilme.de":[["rmnt","script","realCookieBanner"],["set","realCookieBanner","undefined"]],"4x4earth.com":[["set","adBlockDetected","false"],["nostif","samOverlay"]],"53.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"59.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"5asec.pt":[["rc","no-scroll","body","stay"]],"86.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"93.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"abc7chicago.com":[["aeld","scroll"]],"abril.com.br":[["aeld","copy"]],"acce.es":[["set-cookie","cmplz_banner-status","dismissed"]],"account.nowpayments.io":[["set-cookie","cookie-accepted","true"]],"actrento.com":[["set","realCookieBanner","undefined"]],"addonup.com":[["set-local-storage-item","cookie-consent","declined"]],"adidas.com":[["set-cookie","notice_preferences","2"]],"adidas.com.vn":[["set-cookie","notice_preferences","2"]],"adidas.dk":[["set-cookie","notice_preferences","2"]],"adidas.fi":[["set-cookie","notice_preferences","2"]],"adidas.fr":[["set-cookie","notice_preferences","2"]],"adidas.pl":[["set-cookie","notice_preferences","2"]],"adzurro.de":[["set","realCookieBanner","undefined"]],"afarmaciaonline.pt":[["set-cookie","cookie_consent","reject","","reload","1"]],"aida64.co.uk":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"aida64.de":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"airportrentacar.gr":[["set-cookie","cookieControl","true"]],"allegro.pl":[["set-cookie","LithiumFunctionalCookiesAccepted","2"],["set-cookie","LithiumNecessaryCookiesAccepted","1"],["set-cookie","LithiumPerformanceCookiesAccepted","2"],["set-cookie","LithiumTargetingCookiesAccepted","2"]],"allkpop.com":[["aopr","__cmpGdprAppliesGlobally"]],"allsmo.com":[["set","document.onkeydown","null"]],"amara.org":[["set-cookie","amara_cookie_consent","1","","reload","1"]],"anauk.net":[["ra","oncontextmenu|onselectstart|onselect|ondragstart|ondrag","body"]],"androidtvbox.eu":[["aeld","dragstart"],["aopr","nocontextmenu"],["acs","document.ondragstart"]],"animedrive.hu":[["aeld","contextmenu","return\"undefined\""]],"antik-shop.de":[["set","realCookieBanner","undefined"]],"antpool.com":[["set-cookie","informedConsent","1"]],"app.com":[["nostif","gnt_mol_oy"]],"app.privacy.com":[["set-local-storage-item","privacy-cookie-consent","1"]],"appd.at":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"apply.opentech.fund":[["set-local-storage-item","cookieconsent","decline"]],"aprendeinglessila.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"arcanescans.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"arnosarms.co.uk":[["set-cookie","ce-cookie","N"]],"as-eweb.com":[["set-cookie","allowGetPrivacyInfo","true"]],"asianet.co.id":[["set-local-storage-item","cookiesAccepted","true"]],"aspies.de":[["set","realCookieBanner","undefined"]],"atgames.us":[["set-local-storage-item","theme:popup-appeared","true"]],"aura.american.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"autodude.dk":[["set-local-storage-item","cookieConsent","necessary"]],"autohero.com":[["set-cookie","consent","1"]],"avianca.com":[["set-cookie","airTRFX_cookies","accepted"]],"avnetwork.com":[["set-cookie","FTR_Article_PageView","2"]],"azertyfactor.be":[["set-cookie","consent-cookie","1"]],"badzjeszczelepszy.pl":[["aopr","document.onmousedown"],["aopr","document.onselectstart"],["aopr","ga_ExitPopup3339"]],"bahnland-bayern.de":[["set-local-storage-item","contao-privacy-center.hidden","1"]],"balticlivecam.com":[["acs","document.getElementById","none"]],"banco.bradesco":[["set-cookie","cookieFunction","false"],["set-cookie","cookieMarketing","false"],["set-cookie","cookiePerformance","false"],["set-cookie","lgpd","true","","reload","1"]],"bandwagon.asia":[["ra","onmousedown|onselectstart|oncontextmenu",".article","complete"]],"base-chat.de":[["set","realCookieBanner","undefined"]],"basiik.com":[["set-cookie","allowGetPrivacyInfo","true"]],"battle-one.com":[["aopr","document.oncontextmenu"],["aopr","disableSelection"]],"beerballer.com":[["set-cookie","cmplz_banner-status","dismissed"]],"beershop.cz":[["set-cookie","acheck","1","","reload","1"]],"beldora.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"bembed.net":[["nosiif","devtool"],["nostif","devtool"]],"benvenuti.com":[["set-cookie","CakeCookie[cookie_consent]","1"]],"berrybase.de":[["set-cookie","cookie-preference","1"]],"bestbuy.com":[["set-local-storage-item","smartBannerDismissed","1"]],"bettermarketing.pub":[["set-local-storage-item","201805-policy|accepted","1"]],"bike-onlineshop.de":[["rc","disable","div","stay"]],"bikepro.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"binoidcbd.com":[["set-cookie","bavp_age_verified","1"]],"bitcoinsuisse.com":[["set-cookie","btcs-cookie-category-essentials","1"],["set-cookie","btcs-disclaimer","1"],["set-cookie","btcs-initial-redirect-done","1"]],"bitso.com":[["set-cookie","bitso_cc","1"]],"bjootify.com":[["set-cookie","CookieConsentStatus","Allow"]],"bklm-ahaus.de":[["set","realCookieBanner","undefined"]],"blablacar.ru":[["set-cookie","_cookies_v2","1"]],"blista.de":[["set-cookie","cookieconsent_essential","yes"],["set-cookie","cookieconsent_statistics","no"]],"blog.ipc-computer.de":[["set","realCookieBanner","undefined"]],"blog.tangwudi.com":[["rmnt","script","stopPrntScr"]],"blome-uhren.de":[["set-cookie","juwcmp_external","0"],["set-cookie","juwcmp_retargeting","0"],["set-cookie","juwcmp_rolex","0"],["set-cookie","juwcmp_tracking","0"],["set-cookie","rlx-consent","false"]],"blueraindrops.com":[["set","lepopup_abd_enabled",""],["acs","document.oncontextmenu"]],"boards.net":[["aeld","scroll"]],"bontadivina.it":[["set-cookie","bonta-divina-ita-cookie-categories","essential"]],"book.zhulang.com":[["aeld","/contextmenu|selectstart/"]],"bookings.hermesairports.com":[["set-cookie","cookie_choice_made","decline"]],"boston.com":[["acs","document.createElement","admiral"]],"bpcj.or.jp":[["acs","document.oncontextmenu"]],"bppulse.com":[["set-cookie","advertising-cookie-consent","denied"],["set-cookie","performance-cookie-consent","denied"]],"bpstat.bportugal.pt":[["set-cookie","bdp_use_cookies","notagree"]],"brixtonbrewery.com":[["set-cookie","age-gate","true"]],"bronze-bravery.com":[["nostif","()","2000"]],"brownsboys.com":[["aopr","document.onselectstart"]],"bsh-group.com":[["set-cookie","cookiepolicy","decline"]],"bucyrustelegraphforum.com":[["nostif","gnt_mol_oy"]],"bumbaj.sk":[["set-cookie","site-agreement","1"]],"burzaucebnic.sk":[["set","realCookieBanner","undefined"]],"businessaccountingbasics.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"byfood.com":[["set-local-storage-item","byFoodCookiePolicyRequire","false"]],"cabinetexpert.ro":[["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"cagesideseats.com":[["nostif","()","1500"]],"cam.start.canon":[["set-cookie","user_accepts_cookies","true"]],"camwhores.info":[["set-cookie","kt_agecheck","1"]],"cantondailyledger.com":[["nostif","gnt_mol_oy"]],"canuckaudiomart.com":[["rmnt","script","as_init"]],"capecodtimes.com":[["nostif","gnt_mol_oy"]],"cashback-cards.ch":[["set-cookie","sc-privacy-settings","true"]],"cbsnews.com":[["rc","floating","","stay"]],"ccaf.io":[["set-local-storage-item","Analytics:accepted","false"],["set-local-storage-item","GDPR:accepted","true"]],"centrooceano.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"cexpr.es":[["set-cookie","msg_cookie_CEX","true"]],"chessimprover.com":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aopr","disableSelection"]],"chillicothegazette.com":[["nostif","gnt_mol_oy"]],"chillx.top":[["aopr","devtoolsDetector"]],"chimica-online.it":[["aopr","disableselect"]],"china-central-consultants.com":[["set","realCookieBanner","undefined"]],"cincinnati.com":[["nostif","gnt_mol_oy"]],"ciss.de":[["set","realCookieBanner","undefined"]],"citroen.pl":[["aeld","contextmenu"],["aopw","document.onkeypress"]],"cityandstateny.com":[["rc","interstitial","aside","stay"]],"classnotes.org.in":[["aopw","document.oncontextmenu"]],"clearblue.com":[["set-cookie","kali-cc-agreed","true"]],"clinicalondon.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"clinicalpainadvisor.com":[["remove-cookie","hmmet"]],"cloudiway.com":[["set","realCookieBanner","undefined"]],"cocktailsworld.net":[["set","realCookieBanner","undefined"]],"codedosa.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"coin360.com":[["set-cookie","isCookiesAccepted","true"]],"colors.sonicthehedgehog.com":[["set","document.oncontextmenu","null","3"],["set","document.body.oncontextmenu","null","3"],["aeld","DOMContentLoaded","load"]],"comikey.com":[["aeld","contextmenu","undefined"]],"comingsoon.net":[["aopr","googletag"]],"comprerural.com":[["aopr","append_link"]],"comune.chiusa.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.parcines.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sanlorenzodisebato.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sanmartinoinbadia.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.silandro.bz.it":[["set-cookie","ris_cookie_setting","1"]],"confused.com":[["set-cookie","CookieConsentV4","false"]],"contaspoupanca.pt":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"corriereadriatico.it":[["aeld","mouseleave"]],"cosasdesalud.es":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"cosmos.so":[["set","Object.prototype.disablePaginationLimitForLoggedOut","true"]],"cotedecor.com":[["rc","unreadable-display","","stay"]],"couplechallenge.com":[["set-cookie","_pandectes_gdpr","1"]],"crazeuk.com":[["set","realCookieBanner","undefined"]],"creative-chemistry.org.uk":[["acs","document.oncontextmenu"]],"criticalthinking.org":[["nostif","donation-modal"]],"cua.ai":[["set-local-storage-item","cookie-consent","accepted"]],"cuapp.com":[["set-cookie","allowGetPrivacyInfo","true"]],"cut-tec.co.uk":[["set-cookie","termsfeed_pc1_notice_banner_hidden","true"]],"cvut.cz":[["set-local-storage-item","ctu-cm-a","0"],["set-local-storage-item","ctu-cm-m","0"],["set-local-storage-item","ctu-cm-n","1"]],"cyberfolks.pl":[["set-cookie","CF_GDPR_COOKIE_CONSENT_VIEWED","1"]],"cyberforum.de":[["rc","dp--cookie-consent","body","stay"]],"cybershoke.net":[["set-cookie","cookie_read 1"]],"czech-server.cz":[["set-cookie","I6COMPARECOUNT","0"],["set-cookie","I6IISCOOKIECONSENT0","n","","reload","1"]],"dake.es":[["set-cookie","cmplz_banner-status","dismissed"]],"daraz.com":[["set-local-storage-item","has-dismissed","1"]],"datakauppa.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"dddance.party":[["aeld","contextmenu"]],"debijenkorf.nl":[["set-cookie","dbk_cookie_acceptance","declined"]],"deh.mt":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"deltatre.com":[["set-cookie","cookie-preferences-analytics","no"],["set-cookie","cookie-preferences-marketing","no"],["set-cookie","cookie-preferences-technical","yes"]],"designmynight.com":[["set-cookie","consent","0"]],"destinationwineandliquor.com":[["set-cookie","age_verification","1"]],"dettol-store.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"devagroup.pl":[["set-cookie","deva_accepted","yes"]],"dhbbank.de":[["set-cookie","UserCookieLevel","1"],["set-cookie","cookiePreference","1"]],"digi.ro":[["set-cookie","cmp_level","3"]],"digi24.ro":[["aeld","copy"]],"dilynakotle.cz":[["set-cookie","cookie-bar","0"]],"dndbeyond.com":[["set-cookie","cookie-consent","denied"]],"docs.rehide.io":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.unsloth.ai":[["set-cookie","__gitbook_cookie_granted","no"]],"dorkgpt.com":[["set-local-storage-item","cookieConsent","false"]],"drhorvath.de":[["set","realCookieBanner","undefined"]],"drinksking.sk":[["set-cookie","coookieaccept","ok"],["set-cookie","coookieage","ok"]],"drinktuscany.com":[["set-cookie","age_verification","1"]],"drizly.com":[["set-local-storage-item","ageCheckConfirmed","true"]],"dublinhealthscreening.ie":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"dutchnews.nl":[["set-cookie","dn_alert_homescreen_closed","1"],["set-cookie","dn_donation_count","1"]],"dww-suchtberatung.de":[["rc","dp--cookie-consent","body","stay"]],"e-pity.pl":[["set-cookie","efile-cookiename-28","1"]],"ebank.fundamenta.hu":[["set-cookie","cookie_consent","true","1year","","domain","ebank.fundamenta.hu"],["set-cookie","general","true","1year","","domain","ebank.fundamenta.hu"]],"echome.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"economictimes.indiatimes.com":[["aopr","intsFequencyCap"],["aeld","contextmenu"]],"edr-software.com":[["set","realCookieBanner","undefined"]],"eezy.nrw":[["set-local-storage-item","contao-privacy-center.hidden","1"]],"ejwleo.de":[["set","realCookieBanner","undefined"]],"elconfidencial.com":[["set","Didomi","noopFunc"]],"elementvape.com":[["set-cookie","ageVerified","1"]],"elizabeth-mitchell.org":[["acs","document.oncontextmenu"],["aopr","disableSelection"],["acs","addEventListener","ctrlKey"]],"eltomdistillery.com":[["set-cookie","_ageVerified","yes"]],"emailfake.com":[["aeld","copy"]],"emol.com":[["aopr","addLink"]],"empirical.health":[["set-session-storage-item","emailPopupDismissed","1"]],"emri.nl":[["rc","wcc-popup-overflow","body","stay"]],"endorfinese.com.br":[["nostif","google_jobrunner"]],"engeldirekt.de":[["set-local-storage-item","consent","[]"]],"engl.it":[["set","realCookieBanner","undefined"]],"enjoytaiwan.co.kr":[["ra","oncontextmenu|onselectstart|ondragstart"]],"epages.com":[["set","realCookieBanner","undefined"]],"erlebnispark-ziegenhagen.de":[["set","realCookieBanner","undefined"]],"erzsebetvaros.hu":[["set-session-storage-item","popupClosed","true"]],"eugyppius.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"eurooptyk.com.pl":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"europace.de":[["set","realCookieBanner","undefined"]],"eurotvsport1.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"eventure.nl":[["set-cookie","consent-cookies","1"]],"everbloom.eu":[["set","realCookieBanner","undefined"]],"explore.com":[["aeld","copy"]],"fakings.com":[["set-cookie","mayor_edad","1","","reload","1"]],"fantasypros.com":[["set-cookie","fp_policy","1"]],"felizemforma.com":[["aeld","contextmenu"],["acs","document.onkeydown"]],"feuerwehr-oberau.de":[["set","realCookieBanner","undefined"]],"filhub.gr":[["aopr","pum_popups"]],"fineartsmuseum.recreatex.be":[["set-cookie","acceptAnalyticsCookies","false"],["set-cookie","acceptFunctionalCookies","true"],["set-cookie","cookiePolicyConfirmed","true","","reload","1"]],"finimize.com":[["set-cookie","cookie_consent","false"]],"firstcoastnews.com":[["aeld","/^(mouseout|mouseleave)$/"]],"firsttable.co.uk":[["set-cookie","CookieConsentFT","1"]],"fitnesstukku.fi":[["set-cookie","set_functional_cookies","1"],["set-cookie","set_necessary_cookies","1"]],"flixdrop.cyou":[["rmnt","script","location.pathname","includes","hv="]],"floodlit.org":[["set-cookie","pum-937","true"]],"floraluxbree.be":[["set-cookie","cookie-consent-status","0"]],"flying15.org.uk":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"flyingpapers.com":[["set-local-storage-item","FP_cookiesAccepted","true"]],"flynorse.com":[["set-cookie","N0_CONSENT","essential"]],"folimage.fr":[["set-cookie","cookie_accept","none","","reload","1"],["set-cookie","cookie_visit","1"]],"followalice.com":[["set-cookie","cookie-consent","false"],["set-cookie","cookie-consent","true"]],"foodker.hu":[["set","cookie_alert_overlay","noopFunc"]],"foodrepublic.com":[["aeld","copy"]],"ford-besico-nuernberg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hatzner-karlsruhe.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hessengarage-dreieich.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-klaiber-bad-friedrichshall.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-nrw-garage-duesseldorf.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-toenjes-zetel.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.gr":[["set-cookie","cookieAcknowledged","true"]],"ford.se":[["set-cookie","cookieAcknowledged","true"]],"fotor.com":[["nostif","offsetHeight"]],"foundit.com.ph":[["set-session-storage-item","isDownloadAppBannerClosed","true"]],"fourfourtwo.com":[["set-cookie","FTR_Article_PageView","2"]],"foxteller.com":[["ra","oncontextmenu|oncopy|oncut","[id^=\"chapter\"]","complete"],["aeld","contextmenu","preventDefault"],["aeld","selectionchange",".html"],["set","document.onkeydown","noopFunc"]],"frauzuckerbroetchen.com":[["set","realCookieBanner","undefined"]],"freeletics.com":[["set-cookie","cookie_consent","false"]],"frickeldave.de":[["set","realCookieBanner","undefined"]],"fuckyeah.shop":[["set","realCookieBanner","undefined"]],"fugglesbottleshop.co.uk":[["set-cookie","isAnAdult","true"]],"fuschlamsee.at":[["set-cookie","ris_cookie_setting","1"]],"fvd.nl":[["set-local-storage-item","GDPR-fingerprint:accepted","true"]],"gadgethacks.com":[["set","WHT.ShowConsentForm","trueFunc"]],"galleryxh.site":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"gamenite.de":[["set","realCookieBanner","undefined"]],"gamepur.com":[["aopr","__cmpGdprAppliesGlobally"]],"garageproject.co.nz":[["set-local-storage-item","accepted_cookies","true"],["set-session-storage-item","age_confirmed","true"]],"gayhits.com":[["set-cookie","kt_tcookie","1"],["set-cookie","splash_Page_Accepted","true"]],"gaypornvideos.xxx":[["set-cookie","kt_tcookie","1"],["set-cookie","splash_Page_Accepted","true"]],"gazetadopovo.com.br":[["aeld","copy"]],"gdemoideti.ru":[["set-cookie","acceptCookies","true"]],"genesiscinema.co.uk":[["set-cookie","a1wcc","all"]],"getimg.ai":[["set-cookie","permission-getimg","1"]],"gezimanya.com":[["ra","oncontextmenu|onselectstart|onselect|oncopy"],["acs","jQuery","Drupal"]],"girlscoutshop.com":[["set-cookie","newsletterLightboxDisplayed","true"]],"giromarilia.com.br":[["ra","oncontextmenu|ondragstart|onselectstart"]],"giselles.ai":[["set-local-storage-item","isAcceptedCookie","1"]],"glass4u.sk":[["set-cookie","close_popup","1"]],"globaldefensecorp.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"globo.com":[["aeld","copy"]],"gmap-pedometer.com":[["set-cookie","patreonAnnouncementShown","true"]],"go.bkk.hu":[["set-local-storage-item","cookie_consent","false"]],"goodreads.com":[["set-cookie","blocking_sign_in_interstitial","true"]],"gostanford.com":[["set-local-storage-item","cookies-accept","true"]],"goto10retro.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"grandoldteam.com":[["acs","eval","replace"]],"granola.ai":[["set-local-storage-item","cookie_consent","no"]],"graziellawicki.com":[["rc","gdpr-cookie-notice-center-loaded","","stay"]],"grizly.cz":[["set-cookie","mCs-chk","1"]],"grizly.hu":[["set-cookie","mCs-chk","1"]],"grizly.ro":[["set-cookie","mCs-chk","1"]],"gry.pl":[["set-cookie","OptanonAlertBoxClosed","true"]],"guides4gamers.com":[["nostif","offsetHeight","100"]],"guitarplayer.com":[["set-cookie","FTR_Article_PageView","2"]],"guitarworld.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"gukjenews.com":[["ra","oncontextmenu|onselectstart|ondragstart"]],"hair-body-24.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"hamis.romponalis.st":[["rmnt","script","'contextmenu'"]],"handelsbanken.co.uk":[["set-cookie","shb-consent-cookies","false"]],"hannover-living.de":[["set","realCookieBanner","undefined"]],"hans-engelke.de":[["set","realCookieBanner","undefined"]],"hattiesburgamerican.com":[["nostif","gnt_mol_oy"]],"hearthstone-decks.net":[["acs","jQuery","ai_check"]],"heatstore.eu":[["set-cookie","consent","true"]],"heavyfetish.com":[["set","flashvars.autoplay",""]],"hello.one":[["set-cookie","acknowledged","true"]],"hemas.pl":[["aeld","contextmenu"]],"heureka.sk":[["set-cookie","h_adult","1","","reload","1"]],"hexen-werkstatt.shop":[["set-cookie","epCookieConsent","0","","reload","1"]],"hh-taiwan.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"hiphopa.net":[["rmnt","script","oncontextmenu"]],"hiraethtranslation.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"hitado.de":[["set-cookie","cookie-preference","1"]],"hof-droste.de":[["set","realCookieBanner","undefined"]],"horecaworld.be":[["set-cookie","consent","1"],["set-cookie","cookies_consent","1"]],"hospihousing.com":[["set-local-storage-item","areCookiesAccepted","true"]],"hotdk2023.kre.hu":[["rc","show--consent","body","stay"]],"howtotestfrontend.com":[["set-local-storage-item","cookie_consent-2","NO"]],"hqq.tv":[["nostif","check","100"]],"humandataincome.com":[["set-local-storage-item","cookie-permission","false"]],"hutchnews.com":[["nostif","gnt_mol_oy"]],"hygieniapassit.info":[["set-cookie","cookie-agreed","0"]],"hyte.com":[["set-cookie","AcceptUseCookie","Accept"]],"idar-oberstein.de":[["set-local-storage-item","PrivacyPolicy[][core]","forbidden"],["set-local-storage-item","PrivacyPolicy[][maps]","forbidden"],["set-local-storage-item","PrivacyPolicy[][readSpeaker]","forbidden"],["set-local-storage-item","PrivacyPolicy[][videos]","forever"]],"ielts.com.au":[["set-cookie","acceptCookie","true"]],"ilonpolku.fi":[["set","realCookieBanner","undefined"]],"ilovetoplay.xyz":[["rmnt","script","debugger"]],"inderes.fi":[["set-cookie","inderes_consent","necessary"]],"insurance-corporate.blogspot.com":[["ra","oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart"]],"interestingengineering.com":[["aeld","/^(mouseout|mouseleave)$/"],["set-local-storage-item","hasShownPopup","true"]],"inverto.tv":[["set-local-storage-item","gdpr","0"]],"investing.com":[["remove-cookie","lifetime_page_view_count"],["remove-cookie","page_view_count"]],"investmap.pl":[["set-cookie","rodo","1","","reload","1"]],"iqoption.com":[["set-local-storage-item","cookie_usage_accepted","1"]],"iticket.co.nz":[["set-cookie","itk_cookieconsent","dismissed"]],"itvn.pl":[["aeld","contextmenu","a"]],"janvissersweer.nl":[["aopw","stopPrntScr"]],"japan-fans.com":[["acs","document.onmousedown"]],"jofogas.hu":[["set","Didomi","noopFunc"]],"journal.hr":[["set-cookie","jour_analytics","false"],["set-cookie","jour_cookies","1"],["set-cookie","jour_functional","true"],["set-cookie","jour_marketing","false"]],"jove.com":[["set-local-storage-item","accept-jove-cookie","1"]],"juejin.cn":[["aeld","copy","preventDefault"]],"juwelier-dringo.de":[["set","realCookieBanner","undefined"]],"kamera-express.fr":[["set-cookie","cookie_accepted","false","","reload","1"]],"kamerabudaya.com":[["ra","onselectstart|ondragstart|onmousedown|onkeydown|oncontextmenu","body"]],"kanta.fi":[["set-cookie","KantafiCookies","false"]],"kapiert.de":[["aeld","contextmenu"]],"kastner-oehler.at":[["set-cookie","consentAll","0"]],"katzenbaumdesign.de":[["set","realCookieBanner","undefined"]],"kenbrownmotors.co.uk":[["set-cookie","cookieAccepted","1","","reload","1"]],"kijiji.ca":[["set-cookie","hdcab","true"]],"kinobro.online":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"kirannewsagency.com":[["aopw","disableSelection"],["acs","document.oncontextmenu"]],"klassik-stiftung.de":[["set-cookie","KSW-Cookie","false"]],"kmsw.de":[["set","realCookieBanner","undefined"]],"knauer-galabau.de":[["set","realCookieBanner","undefined"]],"kooora4lives.net":[["acs","document.oncontextmenu"]],"korona.co.jp":[["ra","oncopy|oncontextmenu","body"]],"koszalincity.pl":[["acs","document.oncontextmenu"],["acs","document.onkeydown"]],"kpopsea.com":[["aeld","contextmenu"]],"kyutai.org":[["set-local-storage-item","cookieConsent","false"]],"l2gamers.cl":[["aopw","document.oncontextmenu"],["aopw","document.onkeydown"]],"landurlaub-allgaeu.de":[["set-cookie","Consent","0"]],"langitmovie.com":[["aopr","document.oncontextmenu"]],"latent.space":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"lc.paragon-software.com":[["set-cookie","cookie-accepted","yes"]],"leekduck.com":[["nostif","abp"]],"leetcode.cn":[["aeld","copy","","elements","#__next"]],"leibniz.com":[["set-cookie","consent","1"]],"lemke.de":[["set-cookie","cookies-allowed","00000"]],"lesfruitsetlegumesfrais.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"levi.pt":[["set-cookie","cookie_status","1","","reload","1"]],"levne-sauny.cz":[["set","realCookieBanner","undefined"]],"lgbtqnation.com":[["aopr","googletag"]],"lifo.gr":[["nostif","slideout"]],"liisakoski.com":[["set-cookie","epCookieConsent","0"]],"linux-apps.com":[["rmnt","script","btnHtml"],["nano-stb","count"]],"listenonrepeat.com":[["aopr","__cmpGdprAppliesGlobally"]],"lnw.com":[["set-session-storage-item","AgeRestrictionAccepted","true"]],"locafrique-sf.com":[["set","realCookieBanner","undefined"]],"logonews.cn":[["set","document.oncopy","null"]],"londonwomenscentre.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"loungefly.com":[["set-cookie","welcome_modal_email_ts","1"]],"louwman.nl":[["set-cookie","marketing_cookie_akkoord","0"],["set-cookie","site_cookie_akkoord","1"]],"loveplay123.com":[["ra","oncontextmenu|onDragStart|onSelectStart"]],"lsi-bochum.de":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"lyrical-nonsense.com":[["rmnt","script","contextmenu"]],"lyricstranslate.com":[["set","getSelection","undefined"]],"m.youtube.com":[["json-prune","overlay.bottomSheetOverlayRenderer","overlay.bottomSheetOverlayRenderer.displayImmediately"],["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"],["aeld","visibilitychange","/bgmobile|\\{\\w\\.\\w+\\(\\)\\}|\\.getVisibilityState\\(\\)/"]],"makerz.me":[["set-local-storage-item","makerz_allow_consentmgr","0"]],"makeupforever.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"malekal.com":[["nostif","adb"]],"mallorca-unternehmen.com":[["set","realCookieBanner","undefined"]],"mamamia.com.au":[["set-local-storage-item","itbl_consent_timestamp","1"]],"mangalib.me":[["set-local-storage-item","cookies-toast-shown","true"]],"marieclaire.com":[["set-cookie","FTR_Article_PageView","2"]],"markimicrowave.com":[["set-local-storage-item","alreadyAcceptCookie","true"]],"marksandspencer.com":[["aeld","contextmenu"]],"massivart.de":[["set-cookie","cookie-preference","1"]],"mattighofen.at":[["set-cookie","ris_cookie_setting","1"]],"maxroll.gg":[["set","nitroAds.loaded","true"]],"mbalib.com":[["aeld","/copy|cut|paste|selectstart/"]],"mcdonaldsneighbourhood.co.nz":[["set-cookie","ks_cookie_consent","1","","reload","1"]],"mcdonoughvoice.com":[["nostif","gnt_mol_oy"]],"mdpr.jp":[["ra","oncontextmenu|onmousedown|onselectstart"]],"medtube.fr":[["set-cookie","cookiePolicy","4"]],"meiosepublicidade.pt":[["set-cookie","gdpr_consent","true"],["set-cookie","gdpr_consent-legacy","true"]],"mfw09.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"miceportal.com":[["set-cookie","requierd_cookies","true"]],"mikanews.de":[["set","realCookieBanner","undefined"]],"milestone66.hu":[["set","cookie_alert_overlay","noopFunc"]],"milforddailynews.com":[["nostif","gnt_mol_oy"]],"milfzr.com":[["acs","$","juicyads"]],"mimikama.org":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"mitchatnim.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"moneydigest.com":[["aeld","copy"]],"moondao.com":[["set-local-storage-item","cookie_consent","false"]],"motofocus.pl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"move-ment.at":[["set","realCookieBanner","undefined"]],"movie-web.app":[["noeval-if","debugger"]],"movie4kto.net":[["nosiif","/DevTools|_0x/"]],"mpnnow.com":[["nostif","gnt_mol_oy"]],"mummelito.de":[["set","realCookieBanner","undefined"]],"musixmatch.com":[["ra","oncontextmenu","body","complete"]],"myflixerz.to":[["set-cookie","show_share","true"],["nosiif","_0x"]],"myoffers.smartbuy.hdfcbank.com":[["set-local-storage-item","cookies_enabled","true"]],"myrewardspoints.com":[["set-cookie","MRP_cookiebanner","1"]],"myvouchercodes.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"nachbelichtet.com":[["set","realCookieBanner","undefined"]],"nahrungsmittel-intoleranz.com":[["set","realCookieBanner","undefined"],["set","window.SteadyWidgetSettings.adblockActive","false"]],"naijagists.com":[["aopr","disableSelection"]],"namensetiketten.de":[["set-local-storage-item","load-scripts-v2","2"]],"nbc4i.com":[["aeld","scroll"]],"nbcnews.com":[["rc","styles_stuck__gtILi","","stay"]],"neander-zahn.de":[["set-cookie","cookie_optin_q","false"]],"nekopoi.web.id":[["acs","document.oncopy"],["ra","oncontextmenu|ondragstart"]],"neobux.com":[["ra","oncontextmenu|ondragstart|onselectstart"]],"neowin.net":[["aopr","_sp_.mms.startMsg"]],"newportri.com":[["nostif","gnt_mol_oy"]],"news-journalonline.com":[["nostif","gnt_mol_oy"]],"news.kenmei.co":[["set-cookie","__gitbook_cookie_granted","no"]],"newweb.renoirpuzzle.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"nft.chaingpt.org":[["set-cookie","cookies-consent","rejected"]],"nhghealth.com.sg":[["set-cookie","accept_cookies","0"]],"nhnieuws.nl":[["set-local-storage-item","psh:cookies-other","false"],["set-local-storage-item","psh:cookies-seen","true"],["set-local-storage-item","psh:cookies-social","true"]],"nichepcgamer.com":[["rc","dragscroll"]],"nihongoaz.com":[["rmnt","script","contentprotector"]],"nijimiss.moe":[["json-prune","ads.[].imageUrl"]],"nloto.ru":[["set-local-storage-item","isCookies","1"]],"nogizaka46.com":[["ra","oncontextmenu"]],"notaris.be":[["set-cookie","cookie-bar","hide"],["set-cookie","cookie-settings-social","false"],["set-cookie","cookie-settings-statistics","false"]],"notdiamond.ai":[["set-cookie","hidePopup","true"]],"notthebee.com":[["set-local-storage-item","cookieConsent","granted"]],"nsfwzone.xyz":[["acs","console.clear","contextmenu"]],"ntvspor.net":[["set-cookie","isPolicyCookieForAllPage","1"],["aeld","/contextmenu|selectstart/"]],"oakbeardcare.com":[["set","realCookieBanner","undefined"]],"obagstore.pl":[["set-cookie","cookieConsentAnalyticsGranted","0"],["set-cookie","cookieConsentGranted","1"],["set-cookie","cookieConsentMarketingGranted","0"],["set-cookie","cookieConsentUserdata","0"]],"oceana.org":[["set-cookie","HideDonationLightbox","1"]],"octopus.energy":[["set-cookie","dismissCookiePreferencesMessage","1"]],"octopusenergy.es":[["set-cookie","dismissCookieBanner","true"],["set-cookie","switchCookies","1"]],"oculyze.net":[["set","realCookieBanner","undefined"]],"odiarioonline.com.br":[["set","document.oncontextmenu","null"],["set","document.onkeydown","null"]],"oggiscuola.com":[["acs","jQuery","overlay"]],"okpoznan.pl":[["set-cookie","cookie_analytics","false"],["set-cookie","cookiepolicyinfo_new","true"]],"ol-webshop.com":[["set-cookie","cookie_consent_user_accepted","true"]],"olx.uz":[["set-cookie","cookieBarSeen","true"]],"omega-nuernberg.servicebund.com":[["set-cookie","cookieChoice","0"]],"onlineathens.com":[["nostif","gnt_mol_oy"]],"onlinecoursebay.com":[["aeld","","mdp"]],"onlinegiftools.com":[["nano-sib","Clipboard","1000","0.001"]],"onnibus.com":[["set-cookie","contentPersonalisationCookies","false"],["set-cookie","functionalCookies","true"],["set-cookie","marketingCookies","false"],["set-cookie","statisticalCookies","false"]],"openwebui.com":[["set-local-storage-item","cookie_consent","rejected"]],"opmaatzagen.nl":[["set-local-storage-item","cookieConsent","denied"]],"opticron.co.uk":[["set-cookie","AllowAllCookies","1","","reload","1"]],"optometryadvisor.com":[["remove-cookie","hmmet"]],"orange.ro":[["aeld","/^(?:pointerdown|mousedown)$/","","elements",".js-pachete-online-internet2"]],"orda.shef.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"orivedensanomat.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"otpportalok.hu":[["rc","body","no_scroll","complete"]],"pathe.nl":[["set-cookie","COOKIE_NOTIFICATION_V2","0"]],"patientimages.yarraradiology.com.au":[["set-cookie","gdpr_consent","true"]],"patriotledger.com":[["nostif","gnt_mol_oy"]],"pccomponentes.it":[["set-cookie","accept_cookie","1"]],"pcpobierz.pl":[["ra","oncontextmenu"]],"peekme.cc":[["aeld","selectstart"]],"pendulumedu.com":[["aeld","copy"]],"pepeporn.com":[["set-cookie","mayor_edad","1"]],"permainan.co.id":[["set-cookie","OptanonAlertBoxClosed","true"]],"perpedale.de":[["rc","disable","div","stay"]],"phish-test.de":[["set-cookie","gtag","true"]],"photoshop-online.biz":[["nostif","google_jobrunner"]],"pigu.lt":[["set-cookie","CA_DT_V2","0","","reload","1"],["set-cookie","CA_DT_V3","0"]],"pixeden.com":[["set-local-storage-item","pxdn_cookie_consent","true"]],"pizzeria-algusto.de":[["set","realCookieBanner","undefined"]],"placercams.com":[["set-cookie","OldAdultContent","1"],["set-cookie","AdultContent","1","","reload","1"]],"planner.kaboodle.co.nz":[["set-local-storage-item","isNotificationDisplayed","true"]],"plastischechirurgie-muenchen.info":[["set-cookie","ff_cookie_notice","1"]],"playmogo.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"plock.pl":[["set-cookie","cookieconsent_status","dismiss","","reload","1"],["set-cookie","rodo","1","","reload","1"]],"plural.jor.br":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"pmi.org":[["set-local-storage-item","CookieDisclosure-/","true"]],"pocketgamer.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"portal.by.aok.de":[["set-cookie","cookie-notification","ACCEPTED","","reload","1"]],"portalcriatividade.com.br":[["acs","disable_copy"],["acs","nocontext"]],"potsdamerplatz.de":[["set-cookie","ppCookieConsent","false"]],"pp-parts.com":[["set-cookie","cookie-preference","1"]],"premierfood.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"premiumliquor.co.nz":[["set-cookie","age-verified","true"]],"press.princeton.edu":[["set-cookie","cookie-agreed","0"],["set-cookie","block-popuproadblock","true"]],"pro-football-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"prodottidellapiazza.it":[["set","realCookieBanner","undefined"]],"proex2000.cz":[["set-cookie","cookie-bar","hidden"]],"psmw.de":[["set-cookie","cookie_settings","1000"]],"ptittraindunord.com":[["set-cookie","protecteur","1"]],"puzzle-chess.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-nonograms.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-norinori.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-skyscrapers.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.fr":[["set-cookie","puzzleyou-fr_cookies_consent_allowlist","0","","reload","1"]],"qualityfilehosting.com":[["aopw","disableEnterKey"],["acs","document.ondragstart","document.oncontextmenu"]],"quooker.nl":[["set-cookie","cookie-consent-io","necessary","","reload","1"],["set-cookie","cookie-consent-io-gdpr","1"]],"quotev.com":[["ra","onselectstart|ondragstart|oncontextmenu","div.story_text","complete"],["aopr","document.body.oncopy"]],"r-ulybka.ru":[["set-local-storage-item","cookieAndRecommendsAgreement","true"]],"rabbitstream.net":[["set","devtoolsDetector.launch","noopFunc"]],"raccontivietati.com":[["aopr","disableSelection"]],"railsnotes.xyz":[["set-cookie","exit-intent","true"]],"raypa.com":[["set-cookie","cmplz_banner-status","dismissed"]],"rd-s.live":[["aeld","contextmenu"]],"read.amazon.com":[["aeld","contextmenu"]],"readcomicsonline.lol":[["nano-stb","e=>e-1"]],"realenglishdrinks.co.uk":[["set-cookie","isAnAdult","true"]],"redcare.it":[["set-session-storage-item","sae-conversational-consent-msg-closed","true"]],"reddxxx.com":[["set-local-storage-item","ageConsent","true"]],"refurbished.be":[["set-cookie","COOKIE_CONSENT","1","","reload","1"],["set-cookie","COOKIE_MARKETING","false"],["set-cookie","COOKIE_STATIC","false"]],"regionalwines.co.nz":[["set-cookie","isAnAdult","true"]],"reisekontakte.at":[["set","realCookieBanner","undefined"]],"republicadecuritiba.net":[["aopw","nocontext"]],"reservations.helveticmotion.ch":[["set-cookie","decline","true","","","reload","1"]],"restaurant-la-badiane.fr":[["rc","unreadable-display","","stay"]],"restofworld.org":[["rc","blocking-signup","html","stay"]],"reutte.at":[["set-cookie","ris_cookie_setting","1"]],"rhymeandreason.beer":[["set-cookie","goodav_block_popup-1647","0"]],"riacurrencyexchange.es":[["set-cookie","CookiesConfigurationRia","false","","reload","1"]],"riapsport.de":[["set-cookie","cookie-preference","1"]],"ribescasals.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"ritsatv.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"rolls-roycemotorcars.com":[["set-cookie","cookie-banner-us","rejected"]],"rosgovas.com":[["set","realCookieBanner","undefined"]],"rottentomatoes.com":[["set","mps._queue.abdetect","null"]],"royalbatch.com":[["set-local-storage-item","verify","true"]],"rp5.by":[["nostif","()","700"]],"rtings.com":[["remove-cookie","current-pageviews"],["remove-cookie","product-previews"]],"rts.com.ec":[["set-local-storage-item","CookiesConsent","1"]],"rule34hentai.net":[["aeld","contextmenu"]],"ryanair.com":[["set-cookie","RY_COOKIE_CONSENT","true"]],"saamexe.com":[["set-local-storage-item","acceptedCookies","false"],["set-local-storage-item","viewedCookieBanner","true"]],"sachisushi.dk":[["set-cookie","flexkcookie","1"],["set-cookie","wp_consent_functional","deny"],["set-cookie","wp_consent_marketing","deny"],["set-cookie","wp_consent_statistics","deny"]],"safehaven.io":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"schoeck.com":[["set-cookie","cookieconsent_status","allow"]],"scholpp.com":[["rc","with-featherlight","","stay"]],"scholpp.es":[["rc","with-featherlight","","stay"]],"schwanger-in-bayern.de":[["set-cookie","required","1"]],"scidoo.com":[["set-cookie","consent","accepted"]],"screenrant.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"seacom.com":[["set-cookie","cookieConsent","accepted"]],"secondsol.com":[["set-cookie","cookies_consent","1"]],"secularism.org.uk":[["set-cookie","cookies-notice","1","","reload","1"]],"seexh.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"seller.samsungapps.com":[["set-cookie","COOKIE_CONSENT","TRUE"],["set-cookie","GA_CONSENT","FALSE"]],"sendasmile.de":[["set-cookie","K2Go[consent]","required"]],"seventhgeneration.com":[["set-cookie","cookie-agreed","0"]],"sfd.pl":[["rc","show--consent","body","stay"]],"shop.kky.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.okogreen.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.s3.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shopbuddies.fr":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shopbuddies.it":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shopbuilder.co.nl":[["set-cookie","cookie_consent","1","","reload","1"]],"shopify.dev":[["set-cookie","eu_cookies_acknowledged","true"]],"showtv.com.tr":[["set-cookie","cookiePolicy","1"]],"silvini.de":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"sinhasannews.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"sinparty.com":[["set-cookie","gdrp_popup_showed","1"]],"sj-r.com":[["nostif","gnt_mol_oy"]],"skaling.de":[["set-cookie","cookie-byte-consent-essentials","true"],["set-cookie","cookie-byte-consent-showed","true"],["set-cookie","cookie-byte-consent-statistics","false"]],"sky-blue.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"slashfilm.com":[["aeld","copy"]],"sliplane.io":[["set-cookie","cookiesAccepted","essential","","reload","1"]],"smartservices.icp.gov.ae":[["set-cookie","cookieAccepted","true"]],"smile.io":[["set-cookie","smile_allow_cookies","true"]],"smocca.jp":[["set","history.state","undefined"]],"smorfianapoletanaweb.it":[["set","realCookieBanner","undefined"]],"sneakerfreaker.com":[["set-cookie","sfConsent","denied"],["set-local-storage-item","cookieConsent","1"]],"snipp.gg":[["set-local-storage-item","hasConsent","false"]],"snowboardel.cz":[["set-cookie","cookie-bar","0"]],"so-nice.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"sodimac.cl":[["set-cookie","isCookieLegalBannerSelected","true"]],"softedu.pl":[["set","realCookieBanner","undefined"]],"solidaris-wallonie.be":[["set-cookie","hide-cookie-banner","true"]],"sonyliv.com":[["set-local-storage-item","analytics_cookies_acceptance","true"],["set-local-storage-item","cookie_acceptance","true"]],"sororedit.com":[["set-cookie","cookie_tou","1","","reload","1"]],"spectank.jp":[["ra","oncontextmenu|oncopy"]],"spherity.com":[["set","realCookieBanner","undefined"]],"spookshow.net":[["set","adBlockFunction","trueFunc"]],"sportnews.to":[["acs","document.getElementById","isMoz"],["acs","jQuery","keydown"],["set","document.onkeydown","null"],["set","document.onkeypress","null"]],"springmerchant.com":[["set-local-storage-item","modal_cookies","1"]],"spuntinoheathrow.com":[["set-cookie","essential_cookies_enabled","true"],["set-cookie","google_cookies_enabled","false"]],"sseriga.edu":[["set-cookie","user_gave_consent","1"],["set-cookie","user_gave_consent_new","1"]],"sshoc.eu":[["set-cookie","consent_3rdparties_cookies","false"],["set-cookie","consent_additional_cookies","false"],["set-cookie","consent_experience_cookies","false"],["set-cookie","consent_measurement_cookies","false"],["set-cookie","consent_targeting_cookies","false"]],"st-ulrich-steyr.ooe.gv.at":[["set-cookie","ris_cookie_setting","1"]],"statik.be":[["set-cookie","__cookie_consent","false"]],"statisticsanddata.org":[["set-cookie","cmplz_marketing","allow"]],"stbarnabas-hospice.org.uk":[["rc","wcc-popup-overflow","body","stay"]],"stefaniegoldmarie.com":[["set","realCookieBanner","undefined"]],"stickypassword.com":[["set-cookie","ad_storage","denied"],["set-cookie","analytics_storage","denied"],["set-cookie","stickyCookiesSet","true"]],"stmp.it":[["set-cookie","ris_cookie_setting","1"]],"stonk-market.com":[["set","realCookieBanner","undefined"]],"store.claptoncraft.co.uk":[["set-cookie","age-checked","1"]],"strangeloopcanon.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"strcloud.in":[["aeld","contextmenu"]],"stromnetz.berlin":[["set-cookie","cookieAgree","true"],["set-cookie","cookieSelection","required"]],"studyrankers.com":[["aeld","/cut|copy|paste|contextmenu/"]],"stw-langenfeld.de":[["set","realCookieBanner","undefined"]],"suedkurier.de":[["ra","oncontextmenu"]],"sushi.ski":[["json-prune","ads.[].imageUrl"]],"sv-langenfeld.de":[["set","realCookieBanner","undefined"]],"swaggystocks.com":[["set-cookie","cc","accepted"]],"symposium.org":[["set","realCookieBanner","undefined"]],"talpo.it":[["set","x5engine.utils.imCodeProtection","null"]],"tattoodo.com":[["set-local-storage-item","accepted_cookie","true"],["set-local-storage-item","accepted_cookies","true"]],"taxo-acc.pl":[["aeld","contextmenu"]],"tchadcarriere.com":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"teachoo.com":[["aeld","keydown"]],"techinasia.com":[["remove-cookie","arts"]],"techlearning.com":[["set-cookie","FTR_Article_PageView","2"]],"technoalpin.com":[["rc","dp--cookie-consent","body","stay"]],"technologyreview.com":[["set","webkitRequestFileSystem","undefined"]],"tecmundo.net":[["aopr","alert"]],"tecsafe.de":[["set","realCookieBanner","undefined"]],"telegram.com":[["nostif","gnt_mol_oy"]],"telek.online":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"telepizza.pt":[["set-cookie","AcceptAnalyticsCookies","false"],["set-cookie","AcceptFunctionalCookies","true"],["set-cookie","AcceptNonFunctionalCookies","false"]],"temu.com":[["set-cookie","privacy_setting","100"],["aeld","mouseleave"]],"tennessine.co.uk":[["set-local-storage-item","cookies","0"]],"teodor-shop.com":[["set-cookie","amcookie_allowed","1"]],"tesa.com":[["set-cookie","cookies_informed","true"]],"testefiorite.it":[["set","realCookieBanner","undefined"]],"textcleaner.net":[["no-fetch-if","googlesyndication"]],"the-daily-record.com":[["nostif","gnt_mol_oy"]],"the-leader.com":[["nostif","gnt_mol_oy"]],"theadvertiser.com":[["nostif","gnt_mol_oy"]],"theappletreegerrardscross.co.uk":[["set-cookie","ce-cookie","N"]],"thearkley.co.uk":[["set-cookie","ce-cookie","N"]],"thebullislington.co.uk":[["set-cookie","ce-cookie","N"]],"thecalifornian.com":[["nostif","gnt_mol_oy"]],"thecockinncockfosters.co.uk":[["set-cookie","ce-cookie","N"]],"theepochtimes.com":[["nostif","pipaId","0"]],"thegardnernews.com":[["nostif","gnt_mol_oy"]],"thehill.com":[["aeld","scroll"]],"theintrinsicperspective.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"thelensnola.org":[["set-cookie","pum-605611","true"]],"themebanks.com":[["aeld","","mdp"]],"thenorthface.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"thepublicopinion.com":[["nostif","gnt_mol_oy"]],"theregister.co.uk":[["aopr","adtoniq"]],"therocketeustonroad.co.uk":[["set-cookie","ce-cookie","N"]],"thetimesnews.com":[["nostif","gnt_mol_oy"]],"theverge.com":[["aeld","scroll"],["remove-cookie","blaize_session"],["remove-cookie","blaize_tracking_id"],["nostif","adsBlocked"]],"thewarrenwokingham.co.uk":[["set-cookie","ce-cookie","N"]],"thewhitehartse19.co.uk":[["set-cookie","ce-cookie","N"]],"throttleman.com":[["set-cookie","c_aceitaAnaliticos","false"],["set-cookie","c_aceitaFuncionais","false"],["set-cookie","c_aceitaNecessarios","true"],["set-cookie","c_aceitaPublicitarios","false"]],"thw.de":[["set-cookie","gsbbanner","0"]],"tides.net":[["nostif","adsbygoogle"]],"tiefenthaler-landtechnik.at":[["set-cookie","allowTracking","false"]],"tiempo.hn":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"timeanddate.de":[["aeld","load","ad-wrap"]],"times-gazette.com":[["nostif","gnt_mol_oy"]],"timesnownews.com":[["set-local-storage-item","useExitIntent","true"]],"tkm-systemtechnik.de":[["set","realCookieBanner","undefined"]],"tnt2-cricstreaming.pages.dev":[["set","confirm","noopFunc"]],"top-car-hire.com":[["set-cookie","cookies_aceptadas","true","","reload","1"]],"toppy.be":[["set-cookie","__toppy_consent","1"]],"torinostoria.com":[["set","realCookieBanner","undefined"]],"touristik.at":[["set-cookie","cookieconsent_status","allow"]],"translit.ru":[["set-cookie","consent18","0","","reload","1"]],"travelite.com":[["set-cookie","cookie-preference","1"]],"triumphtechnicalinformation.com":[["set-local-storage-item","ROCUMENTS.cookieConsent","true"]],"tubitv.com":[["set-local-storage-item","windows_prompt_shown_v3","1"]],"tui.no":[["rc","no-scroll","body","stay"]],"tulipize.com":[["set","realCookieBanner","undefined"]],"tv.bdix.app":[["set","jh_disabled_options_data","null"]],"tvnstyle.pl":[["aeld","contextmenu","a"]],"twenga.fr":[["set-cookie","cookiewarning","1","","reload","1"]],"twinkietown.com":[["nostif","adsBlocked"]],"tyleenslang.nl":[["set-cookie","cookiebar","1"]],"uihtm.com":[["aeld","contextmenu"]],"ukrinform.ua":[["set-local-storage-item","cookie_consent","granted"]],"ul.se":[["set-cookie","ulse_atc","no","","reload","1"]],"unchartedterritories.tomaspueyo.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"understandingai.org":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"unsplash.com":[["set-cookie","cookie_consent","false"]],"untitle.org":[["acs","document.oncontextmenu"]],"urjalansanomat.fi":[["set-cookie","cm_ads","0"],["set-cookie","cm_analytics","0"],["set-cookie","cm_default","1"]],"utaten.com":[["ra","oncontextmenu|onselectstart",".lyricBody[oncontextmenu]","complete"]],"valostore.se":[["set-local-storage-item","cookieConsent","necessary"]],"vamos-skateshop.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"variaine.fi":[["set-cookie","GBaseConsent","0"],["set-cookie","GBaseConsentToAnalytics","0"]],"vcstar.com":[["nostif","gnt_mol_oy"]],"verdis.se":[["set-cookie","allow-all-cookies","0"],["set-cookie","analysis-cookies","0"],["set-cookie","initial-cookie-setting-done","1","","reload","1"]],"verpackungsstadl.ch":[["rc","disable","div","stay"]],"vert.eco":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"verumvinum.se":[["set-cookie","accept-cookies","1"]],"vid-guard.com":[["nosiif","devtool"],["nostif","devtool"]],"vid2faf.site":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"vietjetair.com":[["set-local-storage-item","accept_cookie_policy","true"]],"visconti.partners":[["set","realCookieBanner","undefined"]],"visefierbinti.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"visnos.com":[["set-local-storage-item","2020-04-05","1"]],"vitalllit.com":[["set-cookie","promptCookies","1"]],"vivande.de":[["set-cookie","cookie-preference","1"]],"voeunblk.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"volcanoecigs.com":[["set-cookie","isAnAdult","true"]],"vtube.network":[["acs","RegExp","contextmenu"]],"vyos.io":[["set-cookie","VyosCookies","Accepted"]],"wales.nhs.attendanywhere.com":[["set-local-storage-item","cookieBanner","false"]],"walserstolz.at":[["set-cookie","walserstolz-aut-cookie-categories","essential"]],"wbir.com":[["aeld","/^(mouseout|mouseleave)$/"]],"webcamtaxi.com":[["nostif","blocker"]],"webtrack.dhlglobalmail.com":[["set-cookie","dhl-webapp-track","allowed"]],"weetabix-arabia.com":[["rc","wcc-popup-overflow","body","stay"]],"westhost.com":[["set-cookie","cb-enabled","accepted"]],"whas11.com":[["aeld","/^(mouseout|mouseleave)$/"]],"whitehorseradlett.co.uk":[["set-cookie","ce-cookie","N"]],"wiibackupmanager.co.uk":[["no-fetch-if","adsbygoogle"]],"winaero.com":[["acs","jQuery","tweaker"]],"winhelponline.com":[["aopr","googletag"]],"wokularach.pl":[["set-local-storage-item","display_cookie_modal","false"]],"works-hellas.com":[["set-cookie","cookieSettings","11","","reload","1"]],"worldpopulationreview.com":[["acs","document.createElement","admiral"],["aeld","/^(mouseout|mouseleave)$/"]],"wormate.io":[["aeld","contextmenu","preventDefault"]],"wpc-shop24.de":[["set-cookie","cookie-preference","1"]],"wrosinski.pl":[["aeld","rocket-DOMContentLoaded","bind(document)"]],"www.reddit.com":[["nostif","{e(n,t,r)}","30000"]],"xhamster3.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"]],"xlogic.org":[["set-cookie","wpca_consent","1"]],"xplay.gg":[["set-cookie","zaraz-consent","1"]],"xymogen-sa.co.za":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"yplay.de":[["set","realCookieBanner","undefined"]],"zabel-group.de":[["set","realCookieBanner","undefined"]],"zahnputzladen.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"zap.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"zeeebatch.blogspot.com":[["acs","document.onmousedown"]],"zerohedge.com":[["aeld","mouseout"]],"zhik.com":[["set-cookie","cookieAccepted","true"]],"zippia.com":[["remove-cookie","_zippia-popup-s_t"],["nosiif","/onGatedSignupPopupTrigger|zippia-popup/"],["set-local-storage-item","gatedSignupTimerCounter","$remove$"]],"zoho.com":[["set-local-storage-item","zglobal_Acookie_optOut","3"]],"zoommastory.com":[["acs","document.oncontextmenu"]],"zuerilaufcup.ch":[["set-cookie","disclaimeragreed","true"]],"zukunft-jetzt.deutsche-rentenversicherung.de":[["set-cookie","complianceCookie","accepted"]],"zurueckzumursprung.at":[["set-cookie","cookiesClosed","1"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
