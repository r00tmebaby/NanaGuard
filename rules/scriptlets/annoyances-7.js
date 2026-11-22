/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"102bank.com":[["aopw","adBlockDetected"]],"14.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"161.97.70.5":[["rmnt","script","isadb"]],"1mg.com":[["aeld","mouseout"]],"43.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"7-eleven.com":[["set-cookie","sei-ccpa-banner","true"]],"76.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"9xbuddy.com":[["nostif","adsbygoogle"]],"adidas.co.uk":[["set-cookie","notice_preferences","2"]],"adidas.com.ar":[["set-cookie","notice_preferences","2"]],"adidas.ie":[["set-cookie","notice_preferences","2"]],"adidas.sk":[["set-cookie","notice_preferences","2"]],"adzurro.de":[["set","realCookieBanner","undefined"]],"aeotec.com":[["set","realCookieBanner","undefined"]],"afi-ipl.org":[["set","realCookieBanner","undefined"]],"afterclass.io":[["set-session-storage-item","adblock","true"]],"agrointel.ro":[["aeld","copy"]],"aida64.de":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"airnavradar.com":[["set","ads_enabled","true"]],"airportrentacar.gr":[["set-cookie","cookieControl","true"]],"airportwebcams.net":[["set","realCookieBanner","undefined"]],"akzent-magazin.com":[["set","realCookieBanner","undefined"]],"all3do.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"allegro.pl":[["set-cookie","LithiumFunctionalCookiesAccepted","2"],["set-cookie","LithiumNecessaryCookiesAccepted","1"],["set-cookie","LithiumPerformanceCookiesAccepted","2"],["set-cookie","LithiumTargetingCookiesAccepted","2"]],"amara.org":[["set-cookie","amara_cookie_consent","1","","reload","1"]],"ames-tools.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"amway-lithuania.com":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"anafaustinoatelier.com":[["set-cookie","promptCookies","1"]],"analizy.pl":[["acs","setTimeout","newsletterPopup"]],"angelifybeauty.com":[["set-cookie","cookies_modal","true"]],"ani-one.com":[["set-cookie","cookieDeclined","1"]],"aniwatch.to":[["set","devtoolsDetector.launch","noopFunc"]],"anker.com":[["set-cookie","accept_cookies","accepted"]],"anmarlube.com":[["set-cookie","promptCookies","1"]],"annabeauty-stuttgart.de":[["set","realCookieBanner","undefined"]],"antpool.com":[["set-cookie","informedConsent","1"]],"anynouxines.barcelona":[["set-cookie","promptCookies","1"]],"aoezone.net":[["set","aoezone_adchecker","true"]],"aphorisma.org":[["set-cookie","alertCookie","true"]],"app.com":[["nostif","gnt_mol_oy"]],"appd.at":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"arbrikadrex.de":[["set-cookie","mnd-cookie-accepted-wwwarbrikadrexde1","1"]],"argos-tradein.co.uk":[["set-cookie","AcceptCookieOnOff","1"],["set-cookie","GoogleAnalyticOnOff","0"]],"artech-sellerie.com":[["rc","unreadable-display","","stay"]],"artisan.co":[["set-local-storage-item","artisan_acceptCookie","true"]],"aruba.com":[["set-cookie","ATA.gdpr.popup","true"]],"asianexpress.co.uk":[["acs","document.oncontextmenu"]],"aspies.de":[["set","realCookieBanner","undefined"]],"assos.com":[["set-cookie","accept-cookies","true"]],"audi-mediacenter.com":[["set-cookie","AUDI_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_Performance","0"]],"augustachronicle.com":[["nostif","gnt_mol_oy"]],"authedu.mosreg.ru":[["set-cookie","USER_AGREEMENT","1"]],"autismiliitto.fi":[["set-cookie","pwd-cookie-consent","0"],["set-cookie","show-cookie-banner","1"]],"autodude.no":[["set-local-storage-item","cookieConsent","necessary"]],"autoride.cz":[["set-local-storage-item","cookies_marketing_consent","false"],["set-local-storage-item","cookies_necessary_consent","true"],["set-local-storage-item","cookies_statistics_consent","false"]],"autoteiledirekt.de":[["aeld","mousedown","function(t)"]],"avnetwork.com":[["set-cookie","FTR_Article_PageView","2"]],"b-immobree.be":[["set-cookie","cookie-consent-status","0"]],"bagosport.cz":[["set-cookie","cookie-bar","0"]],"baic.cz":[["set-local-storage-item","gdprConsent","false"]],"bangkokpost.com":[["rmnt","script","getComputedStyle"]],"barcawelt.de":[["set-cookie","gvCookieConsentAccept","1","reload","","1"]],"barefootsport.co.nz":[["set-cookie","cookies_allowed","required"]],"bargaintown.ie":[["set-cookie","cookie-bar","no"]],"barnardos.org.uk":[["set-cookie","consentBanner","closed"]],"basiik.com":[["set-cookie","allowGetPrivacyInfo","true"]],"beaconjournal.com":[["nostif","gnt_mol_oy"]],"befestigungsfuchs.de":[["set-cookie","acris_cookie_acc","1","","reload","1"]],"beinsports.com":[["set-cookie","use_cookie","1"]],"bendigoadvertiser.com.au":[["nosiif","modal"]],"berrybase.de":[["set-cookie","cookie-preference","1"]],"bewusstes-zentrum.de":[["set","realCookieBanner","undefined"]],"bgextras.co.uk":[["set-cookie","CB393_DONOTREOPEN","true"]],"bgk.pl":[["rc","dp--cookie-consent","body","stay"]],"bgs-shop.de":[["set-cookie","cookieconsent_state","2"]],"bigcheese.software":[["set-cookie","consent-cookies","1"]],"biggreenegg.co.uk":[["set-cookie","cookies-rejected","true"]],"bildung-ab-50.de":[["set","realCookieBanner","undefined"]],"billetterie.auditorium-lyon.com":[["set-cookie","ga_consentement","0"]],"bitecode.dev":[["set-cookie","hideCookieBanner","true"]],"bitscrunch.com":[["set-cookie","rcl_consent_given","true"],["set-cookie","rcl_marketing_consent","false"],["set-cookie","rcl_preferences_consent","true"]],"blacktv.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"blu-ray-rezensionen.net":[["set","realCookieBanner","undefined"]],"blueoceangaming.com":[["set","realCookieBanner","undefined"]],"bluphim.com":[["nosiif","console.clear"]],"blxxded.com":[["set-cookie","cookie_consent","true"]],"boheme-schwabing.de":[["set","realCookieBanner","undefined"]],"bomdia.eu":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"booksmedicos.org":[["aopw","disableSelection"],["acs","jQuery","document"]],"boston.com":[["acs","document.createElement","admiral"]],"bpcj.or.jp":[["acs","document.oncontextmenu"]],"brasiltec.ind.br":[["set-cookie","cookie_accept","1"]],"breitenwang.gv.at":[["set-cookie","ris_cookie_setting","1"]],"brightonandhovealbion.com":[["set-session-storage-item","cookie_reject","true"]],"browns-restaurants.co.uk":[["set-cookie","ce-cookie","N"]],"brusselshealthnetwork.be":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"bsh-russia.ru":[["set-cookie","agreement","1"]],"bsk-consulting.de":[["set","realCookieBanner","undefined"]],"buildtheearth.net":[["set-cookie","mtm_cookie_consent","1"]],"bumigemilang.com":[["acs","disable_hot_keys"],["acs","document.oncontextmenu"]],"bzgbga.it":[["set-cookie","ris_cookie_setting","1"]],"cambridge-centre.fr":[["rc","unreadable-display","","stay"]],"canondrivers.org":[["acs","document.addEventListener"],["acs","document.oncontextmenu","key"]],"canuckaudiomart.com":[["rmnt","script","as_init"]],"carsguide.com.au":[["set","isAdblockDisabled","true"]],"casertace.net":[["acs","jQuery","ai_adb"]],"celtadigital.com":[["aeld","contextmenu"]],"changelly.com":[["set-local-storage-item","SET_COOKIES_APPROVED","true"]],"chargenowforbusiness.com":[["set-cookie","CN_ALLOW_FUNCTIONAL_COOKIE","false"]],"cheersandgears.com":[["rmnt","script","fetch"]],"chronext.com":[["set-cookie","20240903_chronextCookieMessageShown","1"]],"cine.to":[["aopr","oncontextmenu"]],"claritin.ca":[["aopr","cookieconsent.Popup"]],"cloudiway.com":[["set","realCookieBanner","undefined"]],"coag.pl":[["aopr","document.oncontextmenu"]],"columbiadailyherald.com":[["nostif","gnt_mol_oy"]],"comikey.com":[["aeld","contextmenu","undefined"]],"commercialappeal.com":[["nostif","gnt_mol_oy"]],"community.creative-assembly.com":[["set-cookie","consent_cookies","1"]],"comun.sanmartindetor.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.prato.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.rodengo.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.valdaora.bz.it":[["set-cookie","ris_cookie_setting","1"]],"cooleygo.com":[["set-cookie","pum-13751","true"]],"cora-broodjes.nl":[["set-cookie","ckies_cloudflare","allow"],["set-local-storage-item","cookies-selected","true"],["set-cookie","ckies_google_analytics","deny","","reload","1"]],"cork.arccinema.ie":[["set-cookie","a1wcc","NECESSARY"]],"correosaduanas.es":[["set-cookie","cookie_ADT_tecnica","true"],["set-cookie","msg_cookie_ADT","true"]],"courier-tribune.com":[["nostif","gnt_mol_oy"]],"courseware.cemc.uwaterloo.ca":[["ra","oncontextmenu"]],"cpuid.com":[["nostif","blocked","1000"]],"craftpip.github.io":[["nostif","adsok"]],"cranimax.com":[["set","realCookieBanner","undefined"]],"cristelageorgescu.ro":[["acs","document.oncontextmenu"],["aopr","disableSelection"],["aeld","","ctrlKey"],["aopr","document.onkeydown"],["aopr","document.oncopy"]],"crossculture-academy.com":[["set","realCookieBanner","undefined"]],"crtm.es":[["set-cookie","crtmcookiesProtDatos","1","","reload","1"]],"crunchyroll.com":[["set-cookie","_evidon_suppress_notification_cookie","1"]],"cuapp.com":[["set-cookie","allowGetPrivacyInfo","true"]],"curbed.com":[["nostif","adsBlocked"]],"cut.ac.cy":[["set-cookie","analyticsCookiesAllowed","false"],["set-cookie","cookieModalShown","true"]],"cuvva.com":[["set-cookie","cuvva.app.website.cookie-policy.consent","1"]],"cyberalert.gr":[["acs","document.onkeydown","disableCTRL"]],"cybershoke.net":[["set-cookie","cookie_read 1"]],"dailymotion.com":[["set-cookie","cookie_policy_closed","1","","reload","1"]],"dailynewsview.com":[["aopr","document.onselectstart"],["acs","document.onselectstart"]],"dailyrevs.com":[["set-local-storage-item","acceptCookies","true"]],"daimant.co":[["set-cookie","daimant_collective","accept","","reload","1"]],"darktranslation.com":[["aopw","stopPrntScr"]],"darwin.cam.ac.uk":[["set-cookie","cookieBanner","false"]],"data.dtu.dk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"dbschenkerarkas.com.tr":[["set-cookie","allow-marketing-tracking","false"],["set-cookie","allow-statistical-tracking","false"],["set-cookie","privacy-notice-responded","0"],["set-local-storage-item","cookie_usage_acknowledged_2","1"]],"de-appletradein.likewize.com":[["set-cookie","IsCookieAccepted","yes","","reload","1"]],"debenhams.com":[["set-cookie","dw_is_new_consent","true"]],"delawareconsulting.com":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"dentmania.de":[["set-cookie","CookieConsent","true"]],"der-puten-shop.de":[["set-cookie","cookie-preference","1"]],"deutschaj.com":[["acs","document.oncontextmenu"]],"developer.nintendo.com":[["set-cookie","tGoogleAnalytics","disabled"],["set-cookie","trackEssentialCookie","enabled","","reload","1"]],"devm.io":[["set","realCookieBanner","undefined"]],"dg-pw.de":[["set","realCookieBanner","undefined"]],"dickies.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"diebayerische.de":[["set-cookie","bay_required","true"],["set-cookie","cookieConsent","true","","reload","1"]],"diffus.de":[["set-cookie","tracking","yes"]],"dillingen.bayernlab.bayern.de":[["set-cookie","allowStats","0"],["set-cookie","hideBanner","1"]],"direct.travelinsurance.tescobank.com":[["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["set-cookie","viewed_cookie_policy","yes"]],"djelfa.info":[["aopr","document.onmousedown"],["aopw","document.oncontextmenu"],["ra","onselectstart"]],"dnbeiendom.no":[["set-cookie","DNB_CookiePolicy_consentpopup","1"]],"docs.unsloth.ai":[["set-cookie","__gitbook_cookie_granted","no"]],"doka.com":[["set-cookie","hide_cookieoverlay_v2","1","","reload","1"],["set-cookie","performance-cookies_allowed_v2","0"],["set-cookie","socialmedia-cookies_allowed_v2","0"]],"doppelmayr.com":[["set-cookie","essential","true"]],"dot-st.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"doutorfinancas.pt":[["set-cookie","df_consent","no"]],"dreamstime.com":[["nostif","SignUPPopup_load","5000"]],"drei-franken-info.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"droidtekno.com":[["aopw","document.ondragstart"],["aopw","disableEnterKey"]],"drugdiscoverynews.com":[["set-cookie","allowsCookies","true"]],"dslbank.de":[["set-cookie","Cookie-Information","false"]],"dubznetwork.com":[["acs","document.onkeypress"],["acs","jQuery","keydown"]],"dushu.qq.com":[["aopr","document.oncontextmenu"],["aopr","document.oncopy"],["aopr","document.onselectstart"]],"ebikelohr.de":[["set-cookie","COOKIES_NEWACCEPTED","1"]],"editorajuspodivm.com.br":[["set-cookie","googleConsent","1"]],"ehealth.gov.gr":[["set-cookie","cookieconsent_status","1"]],"eheizung24.de":[["set-cookie","cookie-preference","1"]],"eif.org":[["set-cookie","cookie-policy","true"]],"emol.com":[["aopr","addLink"]],"emturbovid.com":[["nostif","debugger"]],"endgame.id":[["set-cookie","endgame-accept-policy","true"]],"eneba.com":[["set-cookie","cconsent","1"]],"enjoytaiwan.co.kr":[["ra","oncontextmenu|onselectstart|ondragstart"]],"eodev.com":[["set-local-storage-item","simple-funnel-name","$remove$"]],"epitesti.ro":[["aopw","clickIE4"],["aopw","document.oncontextmenu"],["ra","oncontextmenu|ondragstart|onselectstart"]],"erdbeerprofi.de":[["set-cookie","amcookie_allowed","1"]],"erinsakura.com":[["aeld","copy"]],"erzsebetvaros.hu":[["set-session-storage-item","popupClosed","true"]],"esm-computer.de":[["set-cookie","cookie-preference","1"]],"etre-visible.local.fr":[["rc","unreadable-display","","stay"]],"etsy.com":[["set-cookie","ctc_rejected","1"]],"eventhotels.com":[["set","realCookieBanner","undefined"]],"eversports.de":[["set-local-storage-item","dnt","1"],["set-local-storage-item","dnt_a","1"]],"evropochta.by":[["set-local-storage-item","otherCookie","true"],["set-local-storage-item","saveCookie","true"]],"exeedme.com":[["set-cookie","cookie-consent","true"]],"explore.com":[["aeld","copy"]],"eyefitu.com":[["set-local-storage-item","cookie","true"]],"f2movies.ru":[["aost","console.clear"]],"fakturia.de":[["set","realCookieBanner","undefined"]],"famousintel.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"fanfare.pub":[["set-local-storage-item","201805-policy|accepted","1"]],"farbenherz.com":[["set","realCookieBanner","undefined"]],"fdlreporter.com":[["nostif","gnt_mol_oy"]],"feuerhexen.de":[["set","realCookieBanner","undefined"]],"fiberlogy.com":[["set-local-storage-item","consents.show_consent_modal","1"]],"fightful.com":[["nosiif","getComputedStyle"]],"fiio.com":[["aeld","/dragstart|selectstart|touchstart|mouse/","","elements",".w-slide"]],"fin24.com":[["aopr","Date.prototype.toUTCString"]],"fina.hr":[["set-cookie","ng-cc-accepted","accepted"]],"fitzmuseum.cam.ac.uk":[["rc","show--consent","body","stay"]],"fiyat.mercedes-benz.com.tr":[["set-local-storage-item","isCookieAccepted","true"]],"flamecomics.xyz":[["set-cookie","cookieConsent","true"]],"flashgames.ru":[["set-cookie","OptanonAlertBoxClosed","true"]],"flixdrop.cyou":[["rmnt","script","location.pathname","includes","hv="]],"floraluxbree.be":[["set-cookie","cookie-consent-status","0"]],"foleys.ie":[["rc","wcc-popup-overflow","body","stay"]],"folimage.fr":[["set-cookie","cookie_accept","none","","reload","1"],["set-cookie","cookie_visit","1"]],"fontbrighton.co.uk":[["set-cookie","ce-cookie","N"]],"ford-fuchs-uffenheim.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-horstmann-rastede.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-klaiber-bad-friedrichshall.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-norren-weissenthurm.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-sg-pforzheim.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-toenjes-zetel.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.dk":[["set-cookie","cookieAcknowledged","true"]],"forosupercontable.com":[["set-cookie","CONS","100"]],"forum-koepenick.de":[["set","realCookieBanner","undefined"]],"foxaholic.com":[["ra","onkeydown|onselectstart|oncontextmenu","body[onkeydown*=\"__cfRLUnblockHandlers\"]","complete"],["ra","oncontextmenu|onkeydown|onselectstart","body"]],"framer.com":[["set-local-storage-item","framerCookiesDismissed","true"]],"freecam.ro":[["aeld","contextmenu"]],"frissebips.nl":[["set-cookie","cmplz_banner-status","dismissed"]],"frixtender.de":[["rmnt","script","realCookieBanner"],["set","realCookieBanner","undefined"]],"fruugonorge.com":[["set-cookie","consents","essential"]],"ftccollege.edu":[["set-cookie","wow-modal-id-1","yes"]],"fullxh.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"funivie.org":[["acs","document.oncontextmenu"]],"funnycase.pl":[["set-cookie","funnycase_cookie_policy_v2","1","","reload","1"]],"funnyordie.com":[["nostif","adsBlocked"]],"fxstreet.com":[["aopw","generatePopup"]],"gamerevolution.com":[["aopr","__cmpGdprAppliesGlobally"]],"games.co.id":[["set-cookie","OptanonAlertBoxClosed","true"]],"gaming-pc.net":[["set","realCookieBanner","undefined"]],"garageproject.co.nz":[["set-local-storage-item","accepted_cookies","true"]],"garcia-ibanez.com":[["set-cookie","cmplz_banner-status","dismissed"]],"gardenia.net":[["ra","oncopy|oncut|onselectstart|style|unselectable","body","stay"],["set","document.body.oncut","null"],["set","document.body.oncopy","null"],["aeld","/copy|cut|selectstart/"]],"gazetadopovo.com.br":[["aeld","copy"]],"gdx.net":[["set-cookie","genovaPrivacyOptions","1","","reload","1"]],"gemeinde.naturns.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.prettau.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.rasenantholz.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.sandintaufers.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.schlanders.bz.it":[["set-cookie","ris_cookie_setting","1"]],"geotastic.net":[["set-local-storage-item","privacy-policy-accepted","true"]],"ghostinternational.com":[["set-cookie","pum-9213","true"]],"gigantti.fi":[["set","cicc.cookie_cat_statistic","true"]],"gioco.it":[["set-cookie","OptanonAlertBoxClosed","true"]],"giselles.ai":[["set-local-storage-item","isAcceptedCookie","1"]],"giuseppezanotti.com":[["set-cookie","cookieConsentGranted","1"],["set-cookie","cookieConsentMarketingGranted","0"],["set-cookie","cookieConsentPreferencesGranted","1"]],"globalfocusmagazine.com":[["rc","wcc-popup-overflow","body","stay"]],"globo.com":[["aeld","copy"]],"gls-group.eu":[["set-cookie","gls-cookie-policy","accepted"]],"goldenstateofmind.com":[["nostif","concertAds"]],"goldpreis24.de":[["set","realCookieBanner","undefined"]],"gov.pt":[["set-cookie","ACCEPTED_TERMS","true"]],"grafische-visualisierung.de":[["set","realCookieBanner","undefined"]],"greenbuildingadvisor.com":[["set-cookie","taunton_user_consent_advertising","false"],["set-cookie","taunton_user_consent_analytics","false"],["set-cookie","taunton_user_consent_submitted","true"]],"greenocktelegraph.co.uk":[["aopr","_sp_._networkListenerData"]],"griffin.com":[["set-session-storage-item","griffinConsentIgnored","1"]],"gry.pl":[["set-cookie","OptanonAlertBoxClosed","true"]],"guiademayores.com":[["set","realCookieBanner","undefined"]],"guidon40hyporadius9.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"gutscheine.eurothermen.at":[["rc","dp--cookie-consent","body","stay"]],"haleon-gebro.at":[["set-local-storage-item","cookiebanner:extMedia","false"],["set-local-storage-item","cookiebanner:statistic","false"]],"hannover-living.de":[["set","realCookieBanner","undefined"]],"happiful.com":[["set-local-storage-item","cookie_consent","false"]],"happyplates.com":[["set-local-storage-item","consentAccepted","true"],["set-local-storage-item","marketingConsentAccepted","false"]],"harvester.co.uk":[["set-cookie","ce-cookie","N"]],"havocpoint.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"helldivers.io":[["aopr","nitroAds"]],"hellotv.nl":[["set-cookie","cookieConsentClosed","true"]],"help.sap.com":[["set-cookie","saphpbypassnondoc","true"]],"hemglass.se":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"hentailib.me":[["set-local-storage-item","cookies-toast-shown","true"]],"heraldmailmedia.com":[["nostif","gnt_mol_oy"]],"heraldnews.com":[["nostif","gnt_mol_oy"]],"hetek.hu":[["rc","modal-open","body"]],"hexen-werkstatt.shop":[["set-cookie","epCookieConsent","0","","reload","1"]],"hianimez.to":[["set","devtoolsDetector.launch","noopFunc"]],"hibiki-radio.jp":[["aeld","contextmenu"]],"hiermitherz.de":[["set-cookie","cookie_alert","true"]],"hife.es":[["set-cookie","hife_eu_cookie_consent","1"]],"hindi-gk.com":[["aopw","disableEnterKey"],["aopw","disable_copy"],["acs","document.oncontextmenu"],["aopw","disable_hot_keys"]],"hitcena.pl":[["aeld","contextmenu"]],"hkvastgoed.nl":[["set-cookie","consent-cookies","1"]],"hockey-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"hof-droste.de":[["set","realCookieBanner","undefined"]],"homebrewwest.ie":[["set-cookie","euCookiePref","0","","reload","1"]],"homegymreview.co.uk":[["rmnt","script","nocontextmenu"]],"host.pl":[["set","realCookieBanner","undefined"]],"hostfly.by":[["set-cookie","www_hostfly_by:443-s1-CookiePRO_cancel","1"]],"hotel-restaurant-pau.com":[["rc","unreadable-display","","stay"]],"hotelki.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"howtotestfrontend.com":[["set-local-storage-item","cookie_consent-2","NO"]],"hqq.tv":[["nostif","check","100"]],"hubspot.com":[["set-cookie","__hs_gpc_banner_dismiss","true"]],"idealhome.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"ifg-life.id":[["set-cookie","cookie-consent","accepted"]],"iftarsaati.org":[["set-cookie","__prvcy","1"]],"ihbarweb.org.tr":[["aeld","/^(?:copy|paste)$/","undefined"]],"ilarahealth.com":[["set-cookie","cookies-accepted","true","","reload","1"]],"imazing.com":[["set-cookie","__ddna__cookie_consent_analytics","false"],["set-cookie","__ddna__cookie_consent_marketing","false"]],"imola.motorsportreg.com":[["set-cookie","hasMadeConsentSelection","true","","","domain",".imola.motorsportreg.com"],["set-cookie","hasMadeConsentSelectionGPC","true","","","domain",".imola.motorsportreg.com"]],"includehelp.com":[["acs","document.getElementById","banner"]],"ing-sat.hu":[["set","document.oncontextmenu","null"],["set","document.onmousedown","null"]],"insidetrading.de":[["set","realCookieBanner","undefined"]],"iphonecake.com":[["nosiif","visibility","1000"]],"isarradweg.de":[["set-cookie","cookie-consent","accepted","","reload","1"]],"itv4.de":[["set","realCookieBanner","undefined"]],"ivyexec.com":[["set-cookie","COOKIE-POLICY-ACCEPT","true"]],"janamaenz.photography":[["set","realCookieBanner","undefined"]],"japan-academy-prize.jp":[["ra","oncontextmenu|onmousedown|onselectstart"]],"javgrab.com":[["acs","$","contextmenu"]],"jelgava.lv":[["set-cookie","user_gave_consent","1"],["set-cookie","user_gave_consent_analytics","0"]],"jenbach.at":[["set-cookie","ris_cookie_setting","1"]],"jeu.fr":[["set-cookie","OptanonAlertBoxClosed","true"]],"jio.pftv.ws":[["set","confirm","noopFunc"]],"joysound.com":[["aeld","DOMContentLoaded","ready"],["set","document.body.oncopy","null","3"],["set","document.body.onselectstart","null","3"],["set","document.body.oncontextmenu","null","3"]],"jpgames.de":[["set","realCookieBanner","undefined"]],"kaeserei-studer.ch":[["set-cookie","studer-che-cookie-categories","essential"]],"kaffeediscount.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"kaggle.com":[["set-cookie","ACCEPTED_COOKIES","true"]],"kaluga.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"kapoorwatch.com":[["set-cookie","ck-cp","accepted"]],"kaputt.de":[["set-cookie","CONSENT","1"],["set-cookie","advertisement","deny"],["set-cookie","functional_cookies","allow"],["set-cookie","marketing_cookies","deny"],["set-cookie","statistic_cookies","deny"]],"kasteninblau.de":[["set","realCookieBanner","undefined"]],"kd-slovenija.de":[["set","realCookieBanner","undefined"]],"kellermann-online.com":[["set-cookie","cookie-preference","1"]],"keravanenergia.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"ketogo.app":[["set-local-storage-item","cookie_consent","true"]],"kh.hu":[["set-cookie","kh_cookie_level1","true"],["set-cookie","kh_cookie_level3","false"],["set-cookie","kh_cookie_level4","false"]],"kicknews.today":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"kieruneknorwegia.pl":[["set","realCookieBanner","undefined"]],"kinderleicht.berlin":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"kinky.nl":[["set-cookie","_lst18","1"],["set-cookie","_tms","1"],["set-cookie","nc","1"]],"kinopoisk.ru":[["set-cookie","gdpr","0"]],"kirklees.gov.uk":[["set-cookie","cookiesacceptedGDPR","false"]],"kollyinsider.com":[["aopw","adMessage"]],"kreativverliebt.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"kristallkraft-pferdefutter.de":[["set-cookie","_pandectes_gdpr","1"]],"krunkercentral.com":[["acs","document.onkeydown"]],"kulinarnastronamocy.pl":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"kurazone.net":[["aopw","clickIE4"],["aopw","disableSelection"]],"kusonime.com":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["acs","addEventListener","which"]],"kyoceradocumentsolutions.ch":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.de":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"l2gamers.cl":[["aopw","document.oncontextmenu"],["aopw","document.onkeydown"]],"lameerooftop.com":[["set","realCookieBanner","undefined"]],"lang-ag.com":[["set","realCookieBanner","undefined"]],"langitmovie.com":[["aopr","document.oncontextmenu"]],"lanidor.com":[["set-cookie","c_aceitaAnaliticos","false"],["set-cookie","c_aceitaFuncionais","false"],["set-cookie","c_aceitaNecessarios","true"],["set-cookie","c_aceitaPublicitarios","false"]],"laptopmag.com":[["aopr","_sp_.mms.startMsg"]],"larian.com":[["set-cookie","cookie_accept","true"],["set-cookie","cookie_analytcs","false","","reload","1"]],"lataifas.ro":[["acs","document.oncontextmenu"],["acs","jQuery","oncontextmenu"],["aeld","","undefined"]],"latimes.com":[["set-cookie","c_tos","1"]],"lcpdfr.com":[["acs","$","AdBlock"],["aopr","FuckAdBlock"]],"legab.it":[["set-cookie","CookieConsent","false"]],"leguidedufromage.com":[["set-cookie","bandeaucookies","1"],["set-cookie","userConsent","all"]],"lenzing.ooe.gv.at":[["set-cookie","ris_cookie_setting","1"]],"lesfruitsetlegumesfrais.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"lesjardinsinterieurs.com":[["rc","unreadable-display","","stay"]],"lesmoutonsenrages.fr":[["acs","jQuery","ai_adb"]],"letsdownloads.com":[["acs","document.oncontextmenu"]],"levi.pt":[["set-cookie","cookie_status","1","","reload","1"]],"libertatea.ro":[["aeld","copy"]],"lifespan.io":[["set-cookie","pum-128427","true"]],"linmot.com":[["set-cookie","cookie_accept","true"]],"livetennis.it":[["ra","onselectstart","","stay"]],"lojaboschferramentas.com.br":[["set-cookie","lgpdConsent","true"],["set-cookie","privacy_comodidade","false"],["set-cookie","privacy_marketing","false"]],"lokalplus.nrw":[["set-cookie","banner","2","","reload","1"]],"longines.com":[["set-cookie","longines-cookiesstatus-analytics","false"],["set-cookie","longines-cookiesstatus-functional","false"],["set-cookie","longines-cookiesstatus-necessary","true"],["set-cookie","longines-cookiesstatus-social","false"]],"m.supersport.hr":[["set-cookie","cookie_consent","true"]],"m.twitch.tv":[["set-cookie","tachyon-accepted-cookie-notice","true"]],"maduras.vip":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"magdeleyns.be":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"magesy.blog":[["noeval-if","disable_copy"],["aeld","contextmenu","preventDefault"]],"magnet4blogging.net":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"magtv.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"mailhilfe.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"mainframegurukul.com":[["ra","oncontextmenu|onselectstart|ondragstart"]],"malekal.com":[["nostif","adb"]],"malermeister-shop.de":[["set-cookie","cookie-preference","1"]],"malybelgrad.pl":[["aopr","document.oncontextmenu"]],"mangainn.net":[["aopr","googletag"]],"mannschaft.com":[["set","realCookieBanner","undefined"]],"margin.utex.io":[["set-cookie","isCookieConsentAccepted","true"]],"mariaenzersdorf.gv.at":[["set-cookie","ris_cookie_setting","1"]],"marieclaire.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"marinetraffic.com":[["set","mtGlobal.disabledAds","true"]],"marksandspencer.com":[["aeld","contextmenu"]],"marriedbiography.com":[["aeld","/contextmenu|copy/"]],"mash.ru":[["set-cookie","_mash_privacy_accepted","true"]],"matkahuolto.fi":[["set-cookie","CookieConsentV2","YES"]],"max.co.nz":[["set-cookie","user_allowed_save_cookie","1"]],"mbalib.com":[["aeld","/copy|cut|paste|selectstart/"]],"mcskinhistory.com":[["no-fetch-if","ads"]],"medeberiya.site":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["rmnt","script","stopPrntScr"]],"media-consulting.ch":[["set","realCookieBanner","undefined"]],"mediamaniya.site":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"medit.com":[["set","realCookieBanner","undefined"]],"medtube.es":[["set-cookie","cookiePolicy","4"]],"megapixl.com":[["nostif",".modal","1000"]],"megatube.xxx":[["ra","oncontextmenu"]],"memo-book.pl":[["set-cookie","rodo-acceptace","1"]],"merkur.si":[["set-cookie","cookie_analytics_allow","no"],["set-cookie","cookie_notice_dismissed","yes"],["set-cookie","mer_cc_dim_rem_allow","no"]],"messer-lagerverkauf.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"mientus.com":[["set-cookie","cookie-preference","1"]],"mimaletadepeliculas.blogspot.com":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"miriamkreativ.de":[["set","realCookieBanner","undefined"]],"mishpati.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"mjob.si":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","obligatory","true"]],"mm9841.cc":[["acs","document.oncontextmenu"],["set","devtoolsDetector","undefined"]],"mmafighting.com":[["nostif","adsBlocked"]],"mmamania.com":[["nostif","adsBlocked"]],"mod.io":[["set-local-storage-item","cookies","1"]],"mooc.chaoxing.com":[["aeld","beforepaste"]],"motortrader.com.my":[["aopr","canRunAds"]],"mtbmarket.de":[["set-cookie","amcookie_allowed","1"]],"music-service-geiger.de":[["set","realCookieBanner","undefined"]],"mycare.de":[["set-cookie","cc_advertising","false"],["set-cookie","cc_analytics","false"],["set-cookie","cookie-policy-accepted-v3","true"]],"myhome.at":[["set-cookie","ris_cookie_setting","1"]],"myoffers.smartbuy.hdfcbank.com":[["set-local-storage-item","cookies_enabled","true"]],"mypensiontracker.co.uk":[["set-cookie","complianceCookie","on"]],"myru.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"myscience.org":[["set-cookie","analytics_consent","yes"]],"nationalgeographic.com":[["aeld","contextmenu"]],"naturseifen-moosmed.de":[["set","realCookieBanner","undefined"]],"neander-zahn.de":[["set-cookie","cookie_optin_q","false"]],"near.org":[["set-local-storage-item","cookies-preference","1"]],"nebenwerte-magazin.com":[["set","realCookieBanner","undefined"]],"neobux.com":[["ra","oncontextmenu|ondragstart|onselectstart"]],"netbird.io":[["set-cookie","cookie-consent","true"]],"newpharma.at":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"newpharma.be":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"newsbook.com.mt":[["rc","wcc-popup-overflow","body","stay"]],"newsherald.com":[["nostif","gnt_mol_oy"]],"nfltraderumors.co":[["aopw","ondragstart"]],"nhghealth.com.sg":[["set-cookie","accept_cookies","0"]],"nike.com":[["set-cookie","sq","0"]],"nikokids.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"nomanssky.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"nordfishing77.at":[["set-cookie","cookie-preference","1"]],"noriel.ro":[["set-cookie","isAgreed","no"]],"northjersey.com":[["nostif","gnt_mol_oy"]],"northwestfirearms.com":[["set","samDetected","true"]],"norwichbulletin.com":[["nostif","gnt_mol_oy"]],"novagenics.com":[["set-cookie","cookie-preference","1"]],"novelza.com":[["rc","click-to-scroll","body"],["acs","stopPrntScr"]],"nowcoder.com":[["aeld","copy"]],"np-brijuni.hr":[["set-cookie","consent","0","","reload","1"]],"nuc.edu":[["set-cookie","wow-modal-id-1","yes"]],"nullforums.net":[["rmnt","script","contextmenu"]],"numberempire.com":[["nostif","w3ad"]],"oesterreichsenergie.at":[["set-cookie","oeCookiePolicyState","0"]],"ofdb.de":[["set-cookie","ofdb_werbung","Y","","reload","1"]],"okko.tv":[["set-cookie","cookie-confirm","1"]],"omniplex.ie":[["set-cookie","a1wcc","NECESSARY"]],"omroepbrabant.nl":[["set-local-storage-item","psh:cookies-other","false"],["set-local-storage-item","psh:cookies-seen","true"],["set-local-storage-item","psh:cookies-social","true"]],"onderwijsvacaturebank.nl":[["set-cookie","enablecookie","false","","reload","1"]],"online.ch":[["set","realCookieBanner","undefined"]],"onlinejpgtools.com":[["nano-sib","Clipboard","1000","0.001"]],"onlinelekarna.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"onlinepngtools.com":[["nano-sib","Clipboard","1000","0.001"]],"oocl.com":[["set-cookie","AcceptCookie","yes"]],"opendesktop.org":[["rmnt","script","btnHtml"],["nano-stb","count"]],"openfinanza.it":[["acs","document.oncontextmenu"],["acs","document.ondragstart"],["aopw","disableEnterKey"]],"openreach.com":[["set-cookie","EssentialCookie","true"]],"opensauce.com":[["set-local-storage-item","os_consent","denied"]],"openweathermap.org":[["set-cookie","gdpr_cookie_consent","declined"]],"opera.com":[["set-cookie","cookie_consent_analytics","false"],["set-cookie","cookie_consent_granted","true"],["set-cookie","cookie_consent_marketing","false"]],"operaneon.com":[["set-local-storage-item","consent_analytics","false"],["set-local-storage-item","consent_granted","true"],["set-local-storage-item","consent_marketing","false"]],"opticron.co.uk":[["set-cookie","AllowAllCookies","1","","reload","1"]],"optimism.io":[["set-cookie","cookieAccepted","true"]],"optionsgroup.com":[["set-local-storage-item","cookie-consent-declined-version","1"]],"orivedensanomat.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"ostrzegamy.online":[["set-cookie","rodo-acceptace","1"]],"ourgames.ru":[["set-cookie","OptanonAlertBoxClosed","true"]],"pandababy.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"pasching.at":[["set-cookie","ris_cookie_setting","1"]],"pashplus.jp":[["aeld","contextmenu"]],"passport-photo.online":[["set-local-storage-item","cookieAccepted","true"]],"pathe.nl":[["set-cookie","COOKIE_NOTIFICATION_V2","0"]],"payeer-gift.ru":[["aopr","document.oncontextmenu"]],"pc3mag.com":[["nostif","Adblocker","10000"]],"pcgamer.com":[["set-cookie","FTR_Article_PageView","2"]],"pcpobierz.pl":[["ra","oncontextmenu"]],"peliculas24.me":[["aopw","disableSelection"],["aeld","contextmenu"]],"petoskeynews.com":[["nostif","gnt_mol_oy"]],"photo.codes":[["set-local-storage-item","cookiesAccepted","false"]],"photobank.mainichi.co.jp":[["set","commonUtil.openToast","null"]],"pi3g.com":[["set","realCookieBanner","undefined"]],"piazzadeimestieri.it":[["set","realCookieBanner","undefined"]],"pibank.com":[["set-cookie","tecnicaCookie","true"]],"picallow.com":[["acs","document.oncontextmenu","nocontextmenu"]],"pigmentmarkets.com":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"pirmediat.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"pixers.com.tr":[["set-cookie","cookie_analytics","denied"],["set-cookie","cookie_marketing","denied"],["set-cookie","cookies_after_approvals","true"]],"pixwox.com":[["nostif","length","3000"]],"plastischechirurgie-muenchen.info":[["set-cookie","ff_cookie_notice","1"]],"playbalatro.com":[["set-cookie","_gdpr_playbalatro","1"]],"playonlinux.com":[["acs","$","load"]],"plusujemy.pl":[["set-cookie","cookies-accepted","false"]],"pndracingteam.net":[["set","realCookieBanner","undefined"]],"pnel.de":[["set-cookie","cookie-preference","1"]],"pngtree.com":[["set-local-storage-item","cps28","1"],["set-local-storage-item","gtag.consent.option","1"]],"pohl-immobilien.it":[["set-cookie","tincx_cookie_notice_accepted","true"]],"poipiku.com":[["aeld","/contextmenu|copy|drag|dragstart/"]],"polarsignals.com":[["set-cookie","PSCCookieConsent","false"]],"polizei.bayern.de":[["set-cookie","baypol_banner","true"],["set-cookie","baypol_functional","true"]],"polsatboxgo.pl":[["set-cookie","rodo-modal-displayed","1"],["set-cookie","rodo-reminder-displayed","1"]],"polsatnews.pl":[["aeld","copy"]],"polyvsp.ru":[["aeld","contextmenu"]],"popcornmovies.io":[["set","console.clear","trueFunc"],["set","console.log","trueFunc"],["set","console.table","trueFunc"],["aeld","keydown","123===i"]],"popmart.com":[["set-local-storage-item","HAS_AGREE_POLICY","true"]],"porndoe.com":[["set-cookie","_aCan_analytical","0"],["set-cookie","_aGaB","1"],["set-cookie","_cDaB","1"]],"portal.hepster.com":[["set-local-storage-item","cookies_accepted","yes"]],"posterstore.ae":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.ie":[["set-cookie","synapse-cookie-preferences-set","true"]],"premierfood.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"productosmanchegos.es":[["set-cookie","cmplz_banner-status","dismissed"]],"pttws.ptt.gov.tr":[["ra","onpaste","#tr_mesaj > td > .text-input.validate\\[required\\]"]],"publications.cispa.de":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"pulltaps.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"puregoldprotein.com":[["set-local-storage-item","adsAccepted","false"],["set-local-storage-item","analyticsAccepted","false"],["set-local-storage-item","cookiesAccepted","true"]],"purspot.com":[["set-cookie","cookieConsent","true"]],"putlocker.vip":[["set","devtoolsDetector.launch","noopFunc"]],"puzzle-binairo.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-dominosa.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-galaxies.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-nonograms.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-tapa.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.com":[["set-cookie","puzzleyou-ca_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.cz":[["set-cookie","puzzleyou-cz_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.dk":[["set-cookie","puzzleyou-dk_cookies_consent_allowlist","0","","reload","1"]],"quooker.nl":[["set-cookie","cookie-consent-io","necessary","","reload","1"],["set-cookie","cookie-consent-io-gdpr","1"]],"qwice.com":[["set-cookie","legalOk","true"]],"rachelwine.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"radarbox.com":[["set","ads_enabled","true"]],"radicalmotorsport.com":[["set-cookie","__radicalMotorsport.ac","true"]],"radioony.fm":[["set","pageService.initDownloadProtection","noopFunc"]],"raindropteamfan.com":[["acs","document.oncontextmenu"]],"randomstory.org":[["aopw","disableSelection"]],"ranobelib.me":[["set-local-storage-item","cookies-toast-shown","true"]],"rassenlijst.info":[["rc","is-active-cookiebar","","stay"]],"raypa.com":[["set-cookie","cmplz_banner-status","dismissed"]],"rdslive.net":[["aeld","contextmenu"]],"reading.ac.uk":[["set-cookie","privacy-notification","1","","reload","1"]],"readlightnovel.org":[["aopr","__cmpGdprAppliesGlobally"]],"readyforboarding.pl":[["set","realCookieBanner","undefined"]],"redro.pl":[["set-cookie","cookieConsent","necessary","","reload","1"]],"reebok.eu":[["set-local-storage-item","SHOW_COOKIE_BANNER","no"]],"reebokwork.com":[["set-local-storage-item","consent_accepted","true"]],"refinery29.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"reformsziget.hu":[["set","cookie_alert_overlay","noopFunc"]],"resonate.coop":[["set-cookie","cookieconsent_status","allow"]],"restaurant-la-badiane.fr":[["rc","unreadable-display","","stay"]],"reviewmeta.com":[["set-cookie","rm-first-time-modal-welcome","1"],["nostif","innerHTML"]],"rgj.com":[["nostif","gnt_mol_oy"]],"rightsize.dk":[["set-local-storage-item","cookieStatus","rejected"]],"roadworksscotland.org":[["set-cookie","cookieConsent","essential"]],"rockpapershotgun.com":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"roomsandspaces.ca":[["set-cookie","cookieModal","false"]],"roschmann.de":[["set","realCookieBanner","undefined"]],"roxi.tv":[["set-cookie","CookieConsent","true","","reload","1"]],"rts.com.ec":[["set-local-storage-item","CookiesConsent","1"]],"rubyvid.com":[["aopr","devtoolsDetector"]],"running-green.de":[["set","realCookieBanner","undefined"]],"ruwix.com":[["nostif","NoAd","8000"]],"sahne-band.de":[["set-cookie","ckies_cookielaw","allow"]],"saleor.io":[["set-cookie","cookieConfirmation","true"]],"samurai.wordoco.com":[["acs","nocontextmenu"]],"sand-in-taufers.com":[["set-cookie","ris_cookie_setting","1"]],"sartor-stoffe.de":[["set-cookie","cookie-bar","0"]],"schneelaeuferzunft.de":[["set","realCookieBanner","undefined"]],"schneidewind-immobilien.de":[["set-local-storage-item","pcClosedOnce","true"]],"scholarship-exchange.open.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"scholpp.de":[["rc","with-featherlight","","stay"]],"scholtenswerkplek.nl":[["set-cookie","cmplz_banner-status","dismissed"]],"schwechater.at":[["set","realCookieBanner","undefined"]],"scidoo.com":[["set-cookie","consent","accepted"]],"search.upright-music.dk":[["set-cookie","cookieConsent","true"]],"sebgroup.com":[["set-cookie","AcceptedCookieCategories","1"]],"secularism.org.uk":[["set-cookie","cookies-notice","1","","reload","1"]],"selfstudyanthro.com":[["aopr","disable_copy"],["acs","document.ondragstart"]],"seller.wildberries.ru":[["set-local-storage-item","cookies-agreed-sellers-external-HC","true"]],"senckenberg.de":[["set","realCookieBanner","undefined"]],"serramenti-milano.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"seswater.co.uk":[["set-cookie","cookie","true"],["set-cookie","performanceAnalytics","false"]],"sevenforums.com":[["aopr","__cmpGdprAppliesGlobally"]],"seventhgeneration.com":[["set-cookie","cookie-agreed","0"]],"sh.reddit.com":[["nostif","{e(n,t,r)}","30000"]],"sheboyganpress.com":[["nostif","gnt_mol_oy"]],"shinbhu.net":[["aeld","contextmenu"],["acs","document.onkeydown"]],"shonenjumpplus.com":[["set-local-storage-item","202306151200.shown.production","true"]],"shop.atunas.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.ba.com":[["set-local-storage-item","iag-performance-consent","\"no\""],["set-local-storage-item","iag-targeting-consent","\"no\""]],"shop.conas.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.elbers-hof.de":[["set-cookie","cb_accepted","1"],["set-cookie","cb_validCookies","1"]],"shop.teascovery.com":[["set-cookie","allowGetPrivacyInfo","true"]],"shopbuddies.fr":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shopforyou47.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"shopping.copaair.com":[["set-cookie","gdprcm","true"]],"shushan.zhangyue.net":[["ra","oncontextmenu|ondragstart|onselectstart"]],"simpleflying.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"singkinderlieder.de":[["set-cookie","acceptMatomo","true"]],"skaling.de":[["set-cookie","cookie-byte-consent-essentials","true"],["set-cookie","cookie-byte-consent-showed","true"],["set-cookie","cookie-byte-consent-statistics","false"]],"skb-leasing.si":[["set-cookie","cookie_gdpr","true","","reload","1"]],"slashfilm.com":[["aeld","copy"]],"smartkhabrinews.com":[["ra","oncontextmenu"],["aeld","contextmenu"],["rmnt","script","ctrlKey"]],"smartsavebank.co.uk":[["set-cookie","consent_to_cookies","true"]],"smiggle.co.uk":[["set-cookie","cookiePopupAccepted","true"]],"smokingmeatforums.com":[["acs","$","btoa"]],"sneakerfreaker.com":[["set-cookie","sfConsent","denied"],["set-local-storage-item","cookieConsent","1"]],"sneltoner.nl":[["set-cookie","cookieType","255","","","reload","1"]],"snocks.com":[["set-cookie","_pandectes_gdpr","1"]],"snowboardel.es":[["set-cookie","cookie-bar","0"]],"so-nice.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"sp32bb.pl":[["set-cookie","cookie_acceptance","1"]],"space-engineers.de":[["acs","document.getElementById","undefined"]],"sportplu-s.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"springmerchant.com":[["set-local-storage-item","modal_cookies","1"]],"sps-handel.net":[["set-cookie","cookie-preference","1"]],"sss.fi":[["aeld","load","function(){if(s.readyState==XMLHttpRequest.DONE"]],"st.johann.at":[["set-cookie","ris_cookie_setting","1"]],"stamceldonor.be":[["rc","cookieconsent-active","body","stay"]],"staralliance.com":[["set-cookie","STAR_COOKIE_MESSAGE_ACCEPTED","true"],["set-cookie","STAR_PERSONALIZE","false"],["set-cookie","STAR_STATISTICS","false"]],"startuphub.ai":[["set-local-storage-item","cookie_consent","rejected"]],"statesmanjournal.com":[["nostif","gnt_mol_oy"]],"stefaniegoldmarie.com":[["set","realCookieBanner","undefined"]],"stemcelldonor.be":[["rc","cookieconsent-active","body","stay"]],"stmas.bayern.de":[["set-cookie","statistik","0"]],"stockerau.at":[["set-cookie","ris_cookie_setting","1"]],"stonly.com":[["set-cookie","cookieHidden","true"]],"store.toogoodtogo.com":[["set-local-storage-item","optionalDataExchangeConsent","false"],["set-local-storage-item","partnerConsentVersion","0"]],"stream.bunkr.is":[["acs","document.oncontextmenu"]],"stromnetz.berlin":[["set-cookie","cookieAgree","true"],["set-cookie","cookieSelection","required"]],"studio3t.com":[["set-cookie","3t-cookies-essential","1"],["set-cookie","3t-cookies-functional","1"],["set-cookie","3t-cookies-performance","0"],["set-cookie","3t-cookies-social","0"]],"studiobookr.com":[["set-local-storage-item","cookiesAllowed","false"]],"studiofabiobiesel.com":[["set-local-storage-item","fb-cookies-accepted","false"]],"studyadda.com":[["set","document.onmousedown","null"],["set","document.oncontextmenu","null"]],"studygo.com":[["set-cookie","squla-analytical-agreement","0"],["set-cookie","squla-cookie-agreement","1"],["set-cookie","squla-marketing-agreement","0"]],"studyrankers.com":[["aeld","/cut|copy|paste|contextmenu/"]],"stuhl24-shop.de":[["set-cookie","cookie-preference","1"]],"subitec.com":[["set","realCookieBanner","undefined"]],"suedafrika-wein.de":[["set","realCookieBanner","undefined"]],"sunnyside.shop":[["set-local-storage-item","_ccpa_analytics","false"],["set-local-storage-item","_ccpa_marketing","false"],["set-local-storage-item","_ccpa_personal","false"]],"sunshine.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"supreme.com":[["set-local-storage-item","gdpr_cookie","accepted"],["set-local-storage-item","sup_gdpr_cookie","accepted"]],"suzuki.at":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"swaggystocks.com":[["set-cookie","cc","accepted"]],"sweetslyrics.com":[["aeld","copy","preventDefault"]],"swissborg.com":[["set-cookie","gatsby-gdpr-google-tagmanager","true"]],"symposium.org":[["set","realCookieBanner","undefined"]],"tango-flores.de":[["set","realCookieBanner","undefined"]],"techieway.blogspot.com":[["aopr","document.onselectstart"]],"tekstowo.pl":[["aopw","addLink"]],"telek.online":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"telenovelas-turcas.com.es":[["set","console.clear","undefined"],["nostif","_detectLoop"]],"telyn610zoanthropy.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"tennis-live.su":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"termania.net":[["set-cookie","agree_with_cookies","1"]],"terra-natur.com":[["set","realCookieBanner","undefined"]],"testefiorite.it":[["set","realCookieBanner","undefined"]],"thai-novel.com":[["set-local-storage-item","analytics-consent","accepted"]],"theasianparent.com":[["acs","document.onselectstart","disableselect"]],"theblackbullyarm.co.uk":[["set-cookie","ce-cookie","N"]],"theblaze.com":[["aopw","admrlWpJsonP"]],"thebotanistbristol.co.uk":[["set-cookie","ce-cookie","N"]],"thecoachingcompany.nl":[["set-cookie","consent-cookies","1"]],"thederbyarmsepsom.co.uk":[["set-cookie","ce-cookie","N"]],"thegamer.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"thegardnernews.com":[["nostif","gnt_mol_oy"]],"thehacker.recipes":[["set-cookie","__gitbook_cookie_granted","no"]],"thejazzcafe.com":[["set-cookie","complianceCookie","true"],["set-cookie","gaconsent","true"]],"thelist.com":[["aeld","copy"]],"theregister.co.uk":[["aopr","adtoniq"]],"thesimsresource.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"thw.de":[["set-cookie","gsbbanner","0"]],"ticketmelon.com":[["set-local-storage-item","cookie_accept","true"]],"tiefenthaler-landtechnik.at":[["set-cookie","allowTracking","false"]],"tiermasseur-mannsberger.at":[["set","realCookieBanner","undefined"]],"timeshighereducation.com":[["aost","Drupal.CTools.Modal.show","/(^(?!.*(injectedScript|makeProxy).*))/"]],"tivix.co":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tmnascommunity.eu":[["set-cookie","firebox_3330","1"]],"toledoblade.com":[["aopr","__cmpGdprAppliesGlobally"]],"tommy.hr":[["set-cookie","ng-cc-accepted","accepted"],["set-cookie","ng-cc-necessary","1"]],"tonis.ch":[["set-cookie","tonis-che-cookie-categories","essential"]],"top-yp.de":[["set-cookie","tncookieinfo","1","","reload","1"]],"top.howfn.com":[["acs","document.onselectstart"]],"topautoosat.fi":[["aeld","mousedown","function(t)"]],"topfaps.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","123"]],"tp-link.com":[["set-cookie","tp_privacy_base","1"]],"traqq.com":[["set-cookie","CookieAccept","true"]],"trimel.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"ttela.se":[["set-cookie","stampen-cookies-hide-information","yes"]],"tui.nl":[["set-cookie","CookiesAccepted","no"]],"tupiens-foodie.com":[["set-cookie","allowGetPrivacyInfo","true"]],"turkishairlines.com":[["set-cookie","COOKIE_ADVERTISEMENTS","false"],["set-cookie","COOKIE_ANALYTICS","false"],["set-cookie","COOKIE_FUNCTIONAL","false"],["set-cookie","COOKIE_WARNING_ACCEPTED","false"],["set-cookie","COOKIE_WARNING_REJECTED","true"],["set-cookie","COOKIE_WARNING_VIEWED","true"]],"tv-trwam.pl":[["set-cookie","ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["set-cookie","ARE_MARKETING_COOKIES_ACCEPTED","true"],["set-cookie","ARE_REQUIRED_COOKIES_ACCEPTED","true"],["set-cookie","HAS_COOKIES_FORM_SHOWED","true"]],"tw.istayreal.com":[["set-cookie","allowGetPrivacyInfo","true"]],"twenga.es":[["set-cookie","cookiewarning","1","","reload","1"]],"ufa1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"ufret.jp":[["aeld","contextmenu"],["aopr","nd_shtml"]],"ufs.br":[["set-cookie","www.ufs.br","1"]],"uhrzeit123.de":[["set-cookie","_u123_cc","yes"],["set-cookie","ga-disable","true"]],"ukbrewerytours.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"unknowncheats.me":[["aeld","DOMContentLoaded","style.display"]],"up4stream.com":[["rmnt","script","debugger"],["acs","document.onkeydown"],["set","devtoolsDetector","{}"]],"upstream.to":[["acs","document.oncontextmenu"],["aopr","_0xfff1"]],"uticaod.com":[["nostif","gnt_mol_oy"]],"v1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"vansprint.de":[["set-cookie","cookie-preference","1"]],"varma.fi":[["set-cookie","varmafi_mandatory","true"]],"vcl.li":[["set-cookie","cookie_accept","yes","","reload","1"]],"vedantu.com":[["aeld","contextmenu","preventDefault"]],"vegvesen.no":[["set-cookie","CookieConsent","false"]],"velo-antwerpen.be":[["set-cookie","Cookies_Preferences","accepted"],["set-cookie","Cookies_Preferences_Analytics","declined"]],"verpackungsstadl.at":[["rc","disable","div","stay"]],"verselemzes.hu":[["acs","jQuery","contextmenu"],["acs","jQuery","keyCode"],["aopr","document.onselectstart"],["aopr","document.ondragstart"],["aopr","document.oncontextmenu"],["aopr","document.onkeydown"],["aopr","document.onkeypress"]],"verumvinum.se":[["set-cookie","accept-cookies","1"]],"vesely-drak.cz":[["rc","show--consent","body","stay"]],"vidembed.me":[["set","console.clear","undefined"]],"vietjetair.com":[["set-local-storage-item","accept_cookie_policy","true"]],"vincentsworld.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"virginatlantic.com":[["set-cookie","VAA_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","VAA_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","VAA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","VAA_ENSIGHTEN_PRIVACY_Functional","0"],["set-cookie","VAA_ENSIGHTEN_PRIVACY_Marketing","0"]],"virpe.cc":[["ra","onselectstart"],["aeld","contextmenu"],["set","document.oncontextmenu","noopFunc"]],"vitalllit.com":[["set-cookie","promptCookies","1"]],"vivande.de":[["set-cookie","cookie-preference","1"]],"vivenu.com":[["set-cookie","cookies-acknowledged","true","","reload","1"]],"voe-unblock.com":[["aeld","/keydown|keyup/","keyCode"],["aeld","contextmenu"],["acs","console.clear"]],"voeun-block.net":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voeunblock3.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"vtube.network":[["acs","RegExp","contextmenu"]],"waitrosecellar.com":[["set-cookie","wtr_cookie_consent","1"],["set-cookie","wtr_cookies_advertising","0"],["set-cookie","wtr_cookies_analytics","0"],["set-cookie","wtr_cookies_functional","0"]],"warungkomik.com":[["rmnt","script","preventDefault"]],"wayfair.de":[["set-cookie","user_cookie_prefs","1"]],"wealthshop888.com":[["set-cookie","allowGetPrivacyInfo","true"]],"webcamtaxi.com":[["nostif","blocker"]],"wedding.pl":[["set-cookie","wed_cookie_info","1"]],"weetabixea.com":[["rc","wcc-popup-overflow","body","stay"]],"weicon.com":[["set-cookie","cookie-preference","1"]],"wichmann.biz":[["set","realCookieBanner","undefined"]],"wifiman.com":[["set-local-storage-item","hide-legal","1"]],"wildpark-ortenburg.de":[["set","realCookieBanner","undefined"]],"winmeen.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"wired.com":[["aopw","journeyCompilerGateway"]],"wishflix.cc":[["nostif","(!0)","8000"]],"withings.com":[["set-cookie","cookieconsent_advertising","false"],["set-cookie","cookieconsent_statistics","false"],["set-cookie","withings_cookieconsent_dismissed","1"]],"wko.at":[["set-cookie","consent","true"]],"wolff-mueller.de":[["rc","dp--cookie-consent","body","stay"]],"wolfgangallgaeuer.com":[["set","realCookieBanner","undefined"]],"woolsocks.eu":[["set-cookie","ws-cookie-Techniques","true"]],"wrestlinginc.com":[["aeld","copy"]],"wst.tv":[["set-cookie","cookie_consent_given","true"]],"www-cornwalllive-com.translate.goog":[["rmnt","script","loc.hostname"]],"www-football-london.translate.goog":[["rmnt","script","loc.hostname"]],"www-insider-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www.whatsapp.com":[["rc","hasCookieBanner","body","stay"]],"xcen.se":[["set-cookie","cookieConsentGranted","1"]],"xda-developers.com":[["acs","document.createElement","admiral"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"xhchannel.com":[["set-cookie","cookie_accept","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xplay.gg":[["set-cookie","zaraz-consent","1"]],"y8.com":[["set-cookie","privacy_policy_validated","true"]],"yabelana.ukzn.ac.za":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"yaoilib.net":[["set-local-storage-item","cookies-toast-shown","true"]],"yeane.org":[["acs","document.oncontextmenu"]],"yeuphimmoik.com":[["acs","jQuery","contextmenu"]],"yourstorebox.com":[["set-cookie","rcl_consent_given","true"]],"ytcomment.kmcat.uk":[["set-cookie","privacy","true"]],"yuboto-telephony.gr":[["set-cookie","yuboto-telephony.gr_CookiesAcceptedN","1"]],"yuque.com":[["aeld","copy"]],"zabawkahurtownia.pl":[["rmnt","script","/oncontextmenu|disableselect/"]],"zahnarzt-dr-henkel.de":[["set","realCookieBanner","undefined"]],"zap.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"zapx.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"zdravenportal.eu":[["acs","document.oncontextmenu"],["acs","document.addEventListener","document.onselectstart"],["aopw","disable_hot_keys"],["ra","oncontextmenu"]],"zeinpharma.de":[["set-cookie","cookie-preference","1"]],"zeoob.com":[["set-cookie","allowed_consent","yes"]],"zertificon.com":[["set","realCookieBanner","undefined"]],"zimmerwetter.de":[["set","realCookieBanner","undefined"]],"zipcode.com.ng":[["aeld","copy","Source"],["rmnt","script","document.onselectstart"]],"zlavomat.sk":[["set-cookie","c","0","","reload","1"]],"zuerilaufcup.ch":[["set-cookie","disclaimeragreed","true"]],"zumkutscher.de":[["set","realCookieBanner","undefined"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
