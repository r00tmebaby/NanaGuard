/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"12news.com":[["aeld","/^(mouseout|mouseleave)$/"]],"199-euro-computer.de":[["set","realCookieBanner","undefined"]],"220.lv":[["set-cookie","CA_DT_V2","0","","reload","1"],["set-cookie","CA_DT_V3","0"]],"24hessen.de":[["set","realCookieBanner","undefined"]],"270towin.com":[["set-session-storage-item","fs.adb.dis","1"]],"407etr.com":[["set-cookie","cookieConsent","accepted"]],"45.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"4media.com":[["aeld","contextmenu"]],"60.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"699pic.com":[["aeld","/contextmenu|mousedown/"],["nosiif","clearInterval(loginReady)"]],"76.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"9news.com":[["aeld","/^(mouseout|mouseleave)$/"],["aeld","scroll"]],"abastible.cl":[["set-local-storage-item","cookie-accepted","true"]],"abc.com":[["aeld","scroll"]],"aceitessatunion.com":[["set-cookie","cmplz_banner-status","dismissed"]],"actvid.com":[["nosiif","_0x"]],"adidas.de":[["set-cookie","notice_preferences","2"]],"adidas.it":[["set-cookie","notice_preferences","2"]],"adult-tv-channels.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"adventurespiele.net":[["set-local-storage-item","dataProtectionInfoAccepted","true"]],"aeotec.com":[["set","realCookieBanner","undefined"]],"aida64.hu":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"aireuropa.com":[["set-cookie","AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"]],"akustik-projekt.at":[["set-cookie","cookie-preference","1"]],"alamogordonews.com":[["nostif","gnt_mol_oy"]],"alensat.com":[["aeld","contextmenu","preventDefault"]],"altraeta.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"ambrook.com":[["set-cookie","ar-newsletter-promo-dismissed","1"]],"amcoustics.com":[["set-cookie","amc-cookies-accepted","true","","reload","1"]],"americafirstreport.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"anafaustinoatelier.com":[["set-cookie","promptCookies","1"]],"anglingdirect.co.uk":[["set-cookie","amcookie_allowed","1"],["set-cookie","amcookie_policy_restriction","allowed"]],"anilib.me":[["set-local-storage-item","cookies-toast-shown","true"]],"anime2you.de":[["acs","document.getElementById","undefined"]],"ao.com":[["set-cookie","AOCookiebannerConsent","declined"],["set-cookie","MKT_AOCookiebannerGDPRV2","declined"]],"app.filen.io":[["set-cookie","cookieConsent","accept","","domain","app.filen.io"]],"app.zasta.de":[["set-cookie","CookieConsent","true"]],"arabesque-essen.de":[["set","realCookieBanner","undefined"]],"argusleader.com":[["nostif","gnt_mol_oy"]],"arzl-pitztal.gv.at":[["set-cookie","ris_cookie_setting","1"]],"ascension.gg":[["set-local-storage-item","CookieConsent_v2","false"]],"asf.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"asiasentinel.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"aspock.com":[["set-cookie","cmplz_banner-status","dismissed"]],"asus.com":[["set-cookie","isReadCookiePolicyDNT","true"],["set-cookie","isReadCookiePolicyDNTAa","false"]],"atalmedial.nl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"atani.com":[["set-cookie","anal-opt-in","false"],["set-cookie","cookies_consent","true"]],"atribuna.com.br":[["ra","oncontextmenu|onkeydown"]],"audialab.com":[["set-local-storage-item","user_closed_pop_up","true"]],"autodude.se":[["set-local-storage-item","cookieConsent","necessary"]],"autos.suzuki.com.mx":[["set-cookie","suzuki-accept-cookie","true"]],"auziliquor.com.au":[["set-cookie","age-checked","1"]],"azlyrics.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"babiesrus.ca":[["set-cookie","cookieModal","false"],["set-cookie","isNewsletterPopupShown","false","","reload","1"]],"badhall.at":[["set-cookie","cookieconsent_status","allow"]],"bafin.de":[["set-cookie","cookiebanner","0"]],"bananacraft.serveminecraft.net":[["set-local-storage-item","cookiesAccepted","yes"]],"banistmo.com":[["ra","oncontextmenu|onselectstart|ondragstart|oncopy|oncut|onpaste|onbeforecopy"]],"bazaartracker.com":[["set-local-storage-item","cookiesAgree","true"]],"bcgame.vc":[["set-local-storage-item","ignore_cookie_warn","true"]],"bearboss.com":[["set-cookie","allowGetPrivacyInfo","true"]],"berkeleygroup.digital":[["set-cookie","BGDESKTOP_TERMS","1"]],"betec.de":[["set","realCookieBanner","undefined"]],"bhw.de":[["set-cookie","Cookieinfoauswahl","false"]],"biano.hu":[["set-cookie","_cb","1","","reload","1"]],"biegnaszczyt.pl":[["set-cookie","cr","true"]],"bien.no":[["set-cookie","eika_consent_marketing","false"],["set-cookie","eika_consent_set","true"]],"bigbarrel.co.nz":[["set-cookie","isageverified","true"]],"biggreenegg.co.uk":[["set-cookie","cookies-rejected","true"]],"bildung-ab-50.de":[["set","realCookieBanner","undefined"]],"biolib.cz":[["set-cookie","analytics_storage","denied","","reload","1"]],"bitecode.dev":[["set-cookie","hideCookieBanner","true"]],"blackmarket.co.nz":[["set-cookie",".18OK","true"]],"blogyourthing.com":[["set","realCookieBanner","undefined"]],"bloomberglinea.com":[["aeld","copy"]],"bloosz.nl":[["set-cookie","cookie_preference","functional"]],"bnet-internet.cz":[["set-cookie","AnalyticsScripts","false","","reload","1"],["set-cookie","MarketingScripts","false"]],"boerse-express.com":[["nostif","()","1000"]],"bolist.se":[["set-cookie","cookies_marketing_ok","false"],["set-cookie","cookies_ok","true"]],"bonbon.hr":[["set-cookie","gdpr_level_1_necessary","1"]],"booksmedicos.org":[["aopw","disableSelection"],["acs","jQuery","document"]],"boonlessbestselling244.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"bottle-store.sk":[["set-cookie","site-agreement","1"]],"box-manga.com":[["aeld","contextmenu"]],"brachmannofficial.com":[["set","realCookieBanner","undefined"]],"brandners-homestyle.de":[["set-cookie","cookie-preference","1"]],"brasiltec.ind.br":[["set-cookie","cookie_accept","1"]],"bricksforge.io":[["set","realCookieBanner","undefined"]],"britishairways.com":[["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"]],"britishbarbers.com":[["set-cookie","cookies_accepted","true","","reload","1"]],"broncoshq.com":[["rmnt","script","XF"],["acs","$","btoa"]],"brutal.io":[["set","document.oncontextmenu","true"]],"bucketpages.com":[["nostif","#advert-tracker","500"]],"buckscountycouriertimes.com":[["nostif","gnt_mol_oy"]],"buendnisse-fuer-bildung.de":[["set-cookie","gsbbanner","0"]],"buf.build":[["set-cookie","allowCookies","yes"]],"burlingtoncountytimes.com":[["nostif","gnt_mol_oy"]],"butter.us":[["set-cookie","cookiePolicy","true"]],"buyandapply.nexus.org.uk":[["set-cookie","gdpr-banner","1"]],"bzgsaltenschlern.it":[["set-cookie","ris_cookie_setting","1"]],"cams.ashemaletube.com":[["set-cookie","are_essential_consents_given","1"],["set-cookie","is_personalized_content_consent_given","1"]],"camwhores.video":[["set-cookie","kt_agecheck","1"]],"canela.tv":[["set-local-storage-item","cks","0"]],"careers.ing.com":[["set-cookie","CookieConsent","0","","reload","1"]],"carsguide.com.au":[["set","isAdblockDisabled","true"]],"castleportobello.co.uk":[["set-cookie","ce-cookie","N"]],"cathouseonthekings.com":[["acs","document.getElementById",".ab_detected"]],"catolet.de":[["set-cookie","cookie-preference","1"]],"cdu-fraktion.berlin.de":[["set-cookie","cookiehinweis1","1"]],"celeb-stalker.com":[["set-cookie","age_gate","18"]],"centrumrowerowe.pl":[["set-cookie","_cookieConsents","1","","reload","1"]],"chatfuel.com":[["set-cookie","__cf_gdpr_accepted","false"]],"chemocare.com":[["set-cookie",".YourApp.ConsentCookie","yes","","reload","1"]],"cineplanet.com.pe":[["set-cookie","cookie-consent","0"]],"cjonline.com":[["nostif","gnt_mol_oy"]],"clasohlson.com":[["set-cookie","cookie-notification","ACCEPTED"]],"clearspend.natwest.com":[["set-cookie","st-cookie-token","true"]],"clk.sh":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"cmg24.pl":[["aopw","document.oncontextmenu"]],"codecamps.com":[["set-cookie","codecamps.cookiesConsent","true"]],"column.com":[["set-local-storage-item","cookieAllowed","false"]],"commandlinux.com":[["aopr","copy_div_id"]],"community.creative-assembly.com":[["set-cookie","consent_cookies","1"]],"communitycrimemap.com":[["set-session-storage-item","disclaimerOpened","1"]],"compact-online.de":[["set-cookie","ris_cookie_setting","1"],["set","realCookieBanner","undefined"]],"compagniefruitiere.fr":[["set","realCookieBanner","undefined"]],"comte.com":[["set-cookie","accept-cookie","no"]],"comune.campotures.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.naturno.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.proves.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.selvadivalgardena.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.valdivizze.bz.it":[["set-cookie","ris_cookie_setting","1"]],"construction-physics.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"cooleygo.com":[["set-cookie","pum-13751","true"]],"coolwallpapers.me":[["nosiif","dfgh-adsbygoogle"]],"cornhub.army":[["set","realCookieBanner","undefined"]],"cosxplay.com":[["rmnt","script","adblock"]],"countrylife.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"creeksidebeer.com":[["set-cookie","age_verification","1"]],"crenolibre.fr":[["set-cookie","cookieconsent","true"]],"crunchyscan.fr":[["acs","document.oncontextmenu"]],"cyamidpulverulence530.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"d000d.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dacsa.com":[["set","realCookieBanner","undefined"]],"dagvandewebshop.be":[["set-cookie","cookie-preference","1"]],"dailynewsview.com":[["aopr","document.onselectstart"],["acs","document.onselectstart"]],"daimant.co":[["set-cookie","daimant_collective","accept","","reload","1"]],"de-de.eundl.de":[["set-cookie","cs","0"]],"debeste.de":[["ra","oncontextmenu"]],"deezer.com":[["aopr","onbeforeunload"],["nostif","bait"]],"defenceconnect.com.au":[["set-local-storage-item","articleGateData","$remove$"]],"dejure.org":[["set","ad_allowed","true"],["remove-cookie","adblock_counter"]],"delker-optik.de":[["set-cookie","cookie-preference","1"]],"deps.dev":[["set-cookie","cookie_policy_acknowledgement","true"]],"der-schweighofer.de":[["set-cookie","cookie-preference","1"]],"derma-line.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"desrayaud-paysagistes.com":[["rc","unreadable-display","","stay"]],"destatis.de":[["set-cookie","gsbbanner","0"]],"deutsch-wagram.gv.at":[["set-cookie","ris_cookie_setting","1"]],"dev.near.org":[["set-local-storage-item","cookiesAcknowledged","1"]],"dhbbank.com":[["set-cookie","UserCookieLevel","1"],["set-cookie","cookiePreference","1"]],"diebayerische.de":[["set-cookie","bay_required","true"],["set-cookie","cookieConsent","true","","reload","1"]],"digitalcameraworld.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"dinamalar.com":[["set-cookie","agree","true"]],"dirk.nl":[["set-cookie","cookies-banner-shown","true"]],"divineyogaschool.blogspot.com":[["acs","document.oncontextmenu"]],"dlstreams.st":[["rmnt","script","'contextmenu'"]],"dnj.com":[["nostif","gnt_mol_oy"]],"do0od.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dodge-forum.eu":[["acs","$","offsetHeight"]],"dogtime.com":[["acs","document.createElement","admiral"]],"dollarvr.com":[["aopr","nocontextmenu"],["acs","document.oncontextmenu"],["acs","document.ondragstart"]],"donneurdecellulessouches.be":[["rc","cookieconsent-active","body","stay"]],"dot-st.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"doutorfinancas.pt":[["set-cookie","df_consent","no"]],"download.mokeedev.com":[["acs","document.createElement","admiral"]],"dpp.cz":[["set-cookie","consent_analytics_storage","denied"],["set-cookie","consent_is_cleared_20230908","true"],["set-cookie","consent_is_set","true"]],"dqr.de":[["set-cookie","gsbbanner","closed"]],"drawasaurus.org":[["nostif","forceRefresh"]],"dresscode-knoppers.de":[["set-cookie","trackingAccepted","true"]],"ds2play.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"duckduckgo.com":[["set-local-storage-item","duckaiHasAgreedToTerms","true"]],"duneawakening.th.gl":[["nostif",".getState();","4500"]],"dvag.de":[["set-cookie","dvag_cookies2023","1"]],"e-chladiva.cz":[["set-cookie","gdpr","1"]],"e-file.pl":[["set-cookie","efile-cookiename-","1"]],"earlystage.pl":[["set-cookie","ad_storage","false"],["set-cookie","analytics_storage","false"],["set-cookie","functionality_storage","false"],["set-cookie","personalization_storage","false"],["set-cookie","security_storage","false"]],"earth.com":[["aopr","HTMLIFrameElement"]],"easywintergarten.de":[["set-cookie","chcCookieHint","1","","reload","1"]],"eif.org":[["set-cookie","cookie-policy","true"]],"einthusan.tv":[["set","login_completed","true"]],"electronoobs.com":[["set-cookie","pd_cc","1"]],"elgiganten.se":[["set","cicc.cookie_cat_statistic","true"]],"elheraldo.hn":[["aopw","addLink"]],"elliberal.cat":[["set-cookie","wpl_viewed_cookie","no"]],"elrow.com":[["set-cookie","elrowCookiePolicy","yes"]],"emag.berliner-woche.de":[["set-local-storage-item","consentManager_shown","true"],["set-local-storage-item","consent_necessary","true"],["set-local-storage-item","consent_performance","false"]],"emmi-good-day.com":[["set-cookie","good-day-che-cookie-categories","essential"]],"emmi-pur.ch":[["set-cookie","jogurt-pur-che-cookie-categories","essential"]],"encord.com":[["set-cookie","myAwesomeCookieName2","true"]],"endlesstools.io":[["set-cookie","et_cookie_consent","true"]],"equalexchange.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"esercizinglese.com":[["aopw","adBlockDetected"]],"espadrij.com":[["set-local-storage-item","cookiePreference","required"]],"essence.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"estadao.com.br":[["aeld","copy"],["set-local-storage-item","TUTORIAL_VIEWED_SNACKS_HOME","true"]],"etre-visible.local.fr":[["rc","unreadable-display","","stay"]],"europemadesoftware.eu":[["set-local-storage-item","cookiesAccepted","1"]],"eurowings.com":[["set-cookie","ew_cookieconsent","1"],["set-cookie","ew_cookieconsent_optin_a","true"],["set-cookie","ew_cookieconsent_optin_b","true"]],"everest-24.pl":[["set-local-storage-item","cookie-accepted","false"],["set-local-storage-item","cookie-closed","true"]],"evium.de":[["set-local-storage-item","tracking-state-v2","deny"]],"evocsports.com":[["set-cookie","cookie-preference","1"]],"evreporter.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"evropochta.by":[["set-local-storage-item","otherCookie","true"],["set-local-storage-item","saveCookie","true"]],"experciencia.com":[["aopr","disableSelection"]],"experienciasfree.com":[["set-cookie","2x1cookies","1"]],"experimental-history.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"extremeaudio.de":[["set-cookie","cookie-preference","1"]],"fabricjs.com":[["nostif","()","4000"]],"fakturia.de":[["set","realCookieBanner","undefined"]],"fantasyfootballscout.co.uk":[["rmnt","script","reviveScroll","excludes","self.__next"]],"fantasytagtree.com":[["aost","document.getElementById","nouplaod"],["ra","oncontextmenu","img[oncontextmenu=\"return false;\"]","stay"]],"felico.pl":[["acs","document.oncontextmenu"]],"fetch.ai":[["set-cookie","consent","false"]],"fhr.biz":[["set-cookie","privacyPolicyAccept","1","","reload","1"]],"fiio.com":[["aeld","/dragstart|selectstart|touchstart|mouse/","","elements",".w-slide"]],"flagle.io":[["nostif","googlesyndication"]],"flexwhere.de":[["set-cookie","CookieConsent","true"],["set-cookie","gatsby-plugin-google-tagmanager","false"]],"flow-in-yoga.de":[["set","realCookieBanner","undefined"]],"flugladen.de":[["set-cookie","cookieConsentLevel","functional"]],"fluidtopics.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"foodvessel.com":[["set-local-storage-item","cookieConsent","false"]],"ford-ah-im-hunsrueck-simmern.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-bunk-voelklingen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hommert-coburg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-kohlhoff-mannheim.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-muecke-berlin.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-weege-bad-salzuflen.de":[["set-cookie","hide-gdpr-bar","true"]],"fox61.com":[["aeld","/^(mouseout|mouseleave)$/"]],"fpmmusic.com":[["aeld","mousedown","","elements",".trackContainer"]],"fragrantica.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"francosliquorstore.com":[["set-cookie","isAnAdult","true"]],"freegossip.gr":[["set","realCookieBanner","undefined"]],"freep.com":[["acs","document.createElement","admiral"],["nostif","gnt_mol_oy"]],"frog.co":[["set-cookie","frogHideGDPRBanner","true"]],"fruit01.xyz":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["set","document.onkeydown","noopFunc"]],"full-anime.fr":[["acs","document.getElementById","adblock"]],"funnycase.pl":[["set-cookie","funnycase_cookie_policy_v2","1","","reload","1"]],"fxstreet.com":[["aopw","generatePopup"]],"gameknot.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"gaming-grounds.de":[["set","realCookieBanner","undefined"]],"gamingsinners.com":[["acs","$","test"]],"gartencenter-meier.ch":[["set-cookie","allowLoadExternRessources","1"],["set-cookie","allowTracking","0"],["set-cookie","hideCookieNotice","1"]],"gasspisen.se":[["set-cookie","user_cookie_consent","false"]],"gastongazette.com":[["nostif","gnt_mol_oy"]],"gaypornmasters.com":[["aopr","document.oncontextmenu"]],"geeksforgeeks.org":[["nostif","onscroll","5500"],["nostif","login","5000"],["acs","showAdblockerModal"]],"geizhals.at":[["set-local-storage-item","dnt_message_shown","1"]],"gemeinde.naturns.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.prad.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.proveis.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.salurn.bz.it":[["set-cookie","ris_cookie_setting","1"]],"ggsport.live":[["set-cookie","auth.userConsent","1","","reload","1"]],"ggwash.org":[["set","Object.prototype.bgOverlay","noopFunc"],["set","Object.prototype.fixedContentPos","noopFunc"]],"gigasport.at":[["set-cookie","consentAll","1"]],"gigasport.de":[["set-cookie","consentAll","1"]],"globalairportconcierge.com":[["no-fetch-if","method:HEAD"]],"globe.adsbexchange.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"gomovies.sx":[["set-cookie","show_share","true"]],"googleapis.com.de":[["aeld","/contextmenu|keydown/"],["rmnt","script","/oncontextmenu|onselectstart/"]],"goteborg2023.com":[["set-cookie","necessary_cookies","true"]],"gourmetfoodstore.com":[["set-cookie","AnalyticsAcceptancePopOver","false"],["set-cookie","SuppressInterstitial","true","","reload","1"]],"gov.lv":[["set-cookie","allowCookies","0"]],"grafische-visualisierung.de":[["set","realCookieBanner","undefined"]],"greaseball6eventual20.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"greubelforsey.com":[["set-local-storage-item","rgpd.consent","1"]],"haarausfall-stopp.com":[["set","realCookieBanner","undefined"]],"halonen.fi":[["set-cookie","consentAdvertising","false"],["set-cookie","consentAnalytics","false"],["set-cookie","consentPersonalization","false"],["set-cookie","privacyExpiration","1"],["set-cookie","privacySettings","1"]],"hampshireimplantcentre.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"handelsbanken.com":[["set-cookie","shb-consent-cookies","false"]],"harmanswineandspirits.com":[["set-cookie","isAnAdult","true"]],"hartfordbusiness.com":[["set-cookie","Drupal.visitor.WEBSITECOOKIEALLOWED","yes"],["remove-cookie","meter_haystack"]],"hauspanorama.de":[["set","realCookieBanner","undefined"]],"heidegrill.com":[["set-cookie","cookie-preference","1"]],"heikkala.com":[["rc","wcc-popup-overflow","body","stay"]],"hela-shop.eu":[["set-cookie","cookie-preference","1"]],"helenevue.com":[["rc","unreadable-display","","stay"]],"hetzner.com":[["set-cookie","__Secure-HO_Cookie_Consent_Declined","1"]],"hibiki-radio.jp":[["aeld","contextmenu"]],"hidemywp.co":[["acs","jQuery","userAgent"]],"hikoki-powertools.eu":[["set-cookie","CookieConsent","mandatory"]],"hindi-gk.com":[["aopw","disableEnterKey"],["aopw","disable_copy"],["acs","document.oncontextmenu"],["aopw","disable_hot_keys"]],"hitokageproduction.com":[["set","topMessage","noopFunc"]],"hkvastgoed.nl":[["set-cookie","consent-cookies","1"]],"hoechst.at":[["set-cookie","ris_cookie_setting","1"]],"holland-shop.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"hollandsentinel.com":[["nostif","gnt_mol_oy"]],"hongxiu.com":[["aeld","contextmenu"],["aopr","LBF.define"]],"hotel-restaurant-pau.com":[["rc","unreadable-display","","stay"]],"hoyolab.com":[["aeld","contextmenu","","elements","img[no-copy=\"true\"]"],["aeld","contextmenu","preventDefault","elements",".viewer-container"]],"hubspot.com":[["set-cookie","__hs_gpc_banner_dismiss","true"]],"huckmag.com":[["set-cookie","huck-newsletter-popup","true"]],"huddle.today":[["set-cookie","cmplz_rt_banner-status","dismissed"]],"huellendirekt.de":[["set-cookie","consent","denied"]],"hypnose.ac":[["set","realCookieBanner","undefined"]],"ichbindochnichthierumbeliebtzusein.com":[["set","realCookieBanner","undefined"]],"ilmotorsport.de":[["set-cookie","cookieMsg","true","","reload","1"]],"ilovevaldinon.it":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"img999.com":[["ra","oncontextmenu"]],"indahonline.com":[["aost","$","/mainseto.js:286:1"]],"indeonline.com":[["nostif","gnt_mol_oy"]],"infokik.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"inselberlin.de":[["set-local-storage-item","userAcceptsCookies","1"]],"intergate.info":[["set","document.oncontextmenu","null"]],"internetpasoapaso.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"inzing.gv.at":[["set-cookie","ris_cookie_setting","1"]],"iphonecake.com":[["nosiif","visibility","1000"]],"iqskitchen.de":[["set","realCookieBanner","undefined"]],"irr.singaporetech.edu.sg":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"ivyexec.com":[["set-cookie","COOKIE-POLICY-ACCEPT","true"]],"iwanichi.co.jp":[["ra","oncontextmenu|onselectstart"]],"iziconfort.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"janamaenz.photography":[["set","realCookieBanner","undefined"]],"japan-academy-prize.jp":[["ra","oncontextmenu|onmousedown|onselectstart"]],"jbf.no":[["set-cookie","eika_consent_marketing","false"],["set-cookie","eika_consent_set","true"]],"jito.network":[["set-local-storage-item","hasConsentedPH","no"]],"jnews5.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["aeld","mousedown","","elements",".entry-content"]],"jobtoday.com":[["set-cookie","jt-jobseeker-gdpr-banner","true","","reload","1"]],"jpopsingles.eu":[["aeld","contextmenu","preventDefault"],["acs","document.onkeydown"],["aopw","stopPrntScr"],["acs","document.oncontextmenu"],["acs","jQuery","contextmenu"],["acs","document.addEventListener","keydown"]],"juicefly.com":[["set-cookie","age-checked","1"]],"justinguitar.com":[["set-local-storage-item","cookie-consent-status","closed"]],"justjoin.it":[["set-cookie","cookiesPopup","1"]],"justtrucks.com.au":[["set","Drupal.behaviors.detectAdblockers","noopFunc"]],"kallidus.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"kamera-express.de":[["set-cookie","cookie_accepted","false","","reload","1"]],"karel.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"katerionews.com":[["set","console.clear","undefined"]],"kaup24.ee":[["set-cookie","CA_DT_V2","0","","reload","1"],["set-cookie","CA_DT_V3","0"]],"keighleynews.co.uk":[["aopr","_sp_.mms.startMsg"]],"kh.hu":[["set-cookie","kh_cookie_level1","true"],["set-cookie","kh_cookie_level3","false"],["set-cookie","kh_cookie_level4","false"]],"kickante.com.br":[["aeld","mouseleave"]],"kieruneknorwegia.pl":[["set","realCookieBanner","undefined"]],"kjr-pi.de":[["set","realCookieBanner","undefined"]],"klausen.eu":[["set-cookie","ris_cookie_setting","1"]],"klsescreener.com":[["acs","document.getElementById","adblock"],["rmnt","script","adblock"],["set-cookie","_ad","0"]],"knime.com":[["set-cookie","cookie-agreed","0"],["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"knowyourmeme.com":[["acs","document.createElement","admiral"]],"kontaktbazar.at":[["set-cookie","ris_cookie_setting","1"]],"kpopjjang.com":[["aopw","stopPrntScr"]],"kraftwerk.co.at":[["set-cookie","kraftwerkCookiePolicyState","1"]],"kristallkraft-pferdefutter.de":[["set-cookie","_pandectes_gdpr","1"]],"ktchng.com":[["set-cookie","cb-enabled","accepted"]],"kuaiche.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"kursnacukrzyce.pl":[["acs","document.addEventListener","contextmenu"]],"kymppikatsastus.fi":[["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","viewed_cookie_policy","yes"],["set-cookie","cookielawinfo-checkbox-toiminnalliset-evasteet","yes"]],"kyoceradocumentsolutions.com.br":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.es":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"la31devalladolid.com":[["set-cookie","cookies_surestao","accepted","","reload","1"],["set-cookie","lr_cookies_tecnicas","accepted"]],"lalawin.com":[["acs","document.oncontextmenu"],["aopr","tjQuery"]],"lang-ag.com":[["set","realCookieBanner","undefined"]],"lansingstatejournal.com":[["nostif","gnt_mol_oy"]],"leafly.com":[["set-cookie","acceptsAdvertisingCookies","false"],["set-local-storage-item","viewedCookieConsent","true"]],"leeyiding.com":[["ra","oncontextmenu|onkeydown|onselectstart"]],"leiternprofi24.de":[["set-cookie","cookie-preference","1"]],"lektury.gov.pl":[["set-cookie","GA_COOKIE_READINGS","false"]],"leotrippi.com":[["set-cookie","cookieConsent","true"]],"les-anges-gardiens.fr":[["rc","unreadable-display","","stay"]],"libraries.kingston.gov.uk":[["set-cookie","luci_CC_21d2ab3d-5676-4eb9-aec5-7703f1e15058","true"],["set-cookie","luci_gaConsent_21d2ab3d-5676-4eb9-aec5-7703f1e15058","false"]],"liquorstaronline.co.nz":[["set-cookie","isAnAdult","true"]],"ljudmakarn.se":[["set-cookie","cookie_consent_v2_0_functional_third_party","1"],["set-cookie","cookie_consent_v2_0_marketing_third_party","0"],["set-cookie","cookie_consent_v2_0_required","1"]],"locandazita.com":[["set","realCookieBanner","undefined"]],"login.ingbank.pl":[["set-cookie","sat_track","false"]],"logo.pt":[["set-cookie","LG_COOKIE_CONSENT","0"],["set-cookie","cookieMessageDismissed","1"]],"longecity.org":[["set","abp","false"]],"lookmovie.ag":[["nostif","__ext_loaded"]],"looper.com":[["aeld","copy"]],"lowcygier.pl":[["aeld","error","browser-plugin"]],"lublin.eu":[["aeld","contextmenu"]],"ludlowbrewery.co.uk":[["set-cookie","cookie_consent","all","","reload","1"]],"lukify.app":[["set-local-storage-item","_lukCookieAgree","2"]],"luoghidavedere.it":[["aopw","document.oncontextmenu"],["acs","document.onselectstart"]],"maduras.vip":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"magnet4blogging.net":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"mailhilfe.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"makeresearchpay.com":[["set-cookie","user_cookie_consent","false","","reload","1"]],"makeronline.com":[["set-cookie","acceptCookie","true"]],"mall.sk":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"mansfieldnewsjournal.com":[["nostif","gnt_mol_oy"]],"marcos.com":[["set-cookie","cookiePreference","reject"]],"mariaenzersdorf.gv.at":[["set-cookie","ris_cookie_setting","1"]],"materna.de":[["set-cookie","cookiebanner","0"]],"mcocguideblog.com":[["acs","disableselect","reEnable"]],"mcswineandliquors.com":[["set-cookie","age_verification","1"]],"med1.de":[["aopr","_sp_._networkListenerData"]],"media.framu.world":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["aopw","document.onkeydown"]],"mediafire.com":[["nostif","scan","500"]],"medtube.es":[["set-cookie","cookiePolicy","4"]],"megawypas.com":[["ra","oncontextmenu"]],"meinlcoffee.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"menrec.com":[["nosiif","offsetHeight"]],"merrell.pl":[["set-cookie","amcookie_allowed","1"],["set-cookie","amcookie_policy_restriction","allowed"]],"metamask.io":[["set-local-storage-item","privacyModalSeen","true"]],"michaelmoore.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"microfocus.com":[["set-cookie","EU_COOKIE_LAW_CONSENT","true"]],"milesofmusik.com":[["aeld","mousedown","","elements",".fancybox-container"]],"milvus.io":[["set-cookie","CookieConsent","false"]],"minaprotocol.com":[["rmnt","script","realCookieBanner"]],"mishpati.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"mk.yopo.work":[["json-prune","ads.[].imageUrl"]],"mlb-korea.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"mocah.org":[["nosiif","adsbygoogle"],["ra","oncontextmenu"]],"moegirl.org.cn":[["aeld","copy","jQuery!==\"undefined\""]],"moemax.bg":[["set-cookie","amcookie_allowed","1"]],"mojmaxtv.hrvatskitelekom.hr":[["set-local-storage-item","cookieAccepted","true"]],"molineuxmix.co.uk":[["acs","$","undefined"]],"money.com":[["rc","open-pw","body","stay"]],"moneyfarm.com":[["set-cookie","consent_updated","true"]],"more.com":[["set-cookie","AcceptedCookies","1"]],"motogon.ru":[["aopr","oSpPOptions"]],"moviepass.com":[["set-cookie","cookie-consent","true","/","dontOverwrite","1"]],"moviepl.xyz":[["nostif","devtoolIsOpening","100"]],"mrbenne.com":[["rmnt","script","/Clipboard|oncontextmenu|wpcp|keyCode/"],["ra","oncontextmenu|ondragstart|onselectstart|onload|onblur"],["rmnt","style","/-webkit-user-select|webkit-appearance/"]],"mubi.com":[["set-cookie","mubi-cookie-consent","allow"]],"mx.com":[["set-cookie","hide-cookie-banner","1"]],"mycentraljersey.com":[["nostif","gnt_mol_oy"]],"myeventeo.com":[["set-cookie","cookiesPolicy20211101","1"]],"myfreemp3juices.cc":[["ra","onclick","[onclick=\"myFunction()\"]"]],"myhome.at":[["set-cookie","ris_cookie_setting","1"]],"myscience.org":[["set-cookie","analytics_consent","yes"]],"najlacnejsialkohol.sk":[["set-cookie","vstup-popUp","1"]],"nationalexpress.de":[["set-local-storage-item","contao-privacy-center.hidden","1"]],"nationalreview.com":[["acs","document.createElement","admiral"],["rmnt","script","reviveScroll","excludes","self.__next"]],"naturallycurly.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"nbcphiladelphia.com":[["aeld","scroll"]],"nbcsandiego.com":[["aeld","scroll"]],"ncert-solutions.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"netgem.com":[["set-cookie","consent-cookie-popup","1"],["set-cookie","consent-cookie-vimeo","1"],["set-cookie","consent-cookie-youtube","1"]],"nettyworth.io":[["set-cookie","cookie_consent","true"]],"neuhauschocolates.com":[["set-cookie","consentTrackingVerified","true"]],"newsbook.pl":[["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"newschief.com":[["nostif","gnt_mol_oy"]],"ngs24.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"niezawodny.pl":[["set-cookie","cookieConsent","0","","reload","1"]],"nike.com":[["set-cookie","sq","0"]],"nisanyansozluk.com":[["set-local-storage-item","newYeradlariWebsiteHidden","true"]],"nisoro.com":[["set-cookie","allowGetPrivacyInfo","true"]],"nordlayer.com":[["set-cookie","consent","accepted"]],"norskfamilie.no":[["set-cookie","acceptAll","false"],["set-cookie","consentGiven","true"]],"northumberland-walks.co.uk":[["ra","oncontextmenu|ondragstart|onselectstart"]],"northwestfirearms.com":[["set","samDetected","true"]],"notebook-doktor.de":[["set","realCookieBanner","undefined"]],"novelskey.tarbin.net":[["json-prune","ads.[].imageUrl"]],"nuevoloquo.ch":[["set-cookie","tos_consent","allow"]],"oberstdorf.de":[["set-cookie","Consent","0"]],"observatoriodocinema.uol.com.br":[["acs","document.addEventListener","preventDefault"]],"officeprinciples.com":[["set-cookie","user_cookie_consent","true"]],"ok-bergbahnen.com":[["set-cookie","Consent","0"]],"okko.tv":[["set-cookie","cookie-confirm","1"]],"oncologynurseadvisor.com":[["remove-cookie","hmmet"]],"online-arzt.gtv-europe.com":[["set-cookie","cookies-essential","true","","reload","1"]],"onlineonderdelenshop.nl":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"onlyoffice.com":[["set-cookie","cookie_preferences","1"]],"opayweb.com":[["set-cookie","CookieConsent","false"]],"openfoam.org":[["set-cookie","cmplz_banner-status","dismissed"]],"opensauce.com":[["set-local-storage-item","os_consent","denied"]],"opentip.kaspersky.com":[["set-local-storage-item","areCookiesAccepted","true"]],"opera.com":[["set-cookie","cookie_consent_analytics","false"],["set-cookie","cookie_consent_granted","true"],["set-cookie","cookie_consent_marketing","false"]],"otvfoco.com.br":[["aopr","addLink"]],"outidesigoto.com":[["acs","document.oncontextmenu"]],"overdrive.com":[["set-cookie","od_track","0","","reload","1"]],"owgr.com":[["set-local-storage-item","hasAnalyticalCookies","false"],["set-local-storage-item","hasStrictlyNecessaryCookies","true"]],"paizo.com":[["set-cookie","cookieBanner_092519","1","","reload","1"]],"pandurul.ro":[["ra","oncopy"],["acs","$","copy"]],"pasching.at":[["set-cookie","ris_cookie_setting","1"]],"pashplus.jp":[["aeld","contextmenu"]],"passport-photo.online":[["set-local-storage-item","cookieAccepted","true"]],"pastemagazine.com":[["set-cookie","pm_email_popup_status","1"]],"pawastreams.pro":[["nostif","debugger"]],"paychex.com":[["set-cookie","ccpaaccept","true"]],"payworks.ca":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"pbs.org":[["set-cookie","popupIsClosed","1"]],"pccomponentes.pt":[["set-cookie","accept_cookie","1"]],"pcgamer.com":[["set-cookie","FTR_Article_PageView","2"]],"peachy.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"pentagon-group.co.uk":[["set-cookie","cookieAccepted","1","","reload","1"]],"petsradar.com":[["set-cookie","FTR_Article_PageView","2"]],"pettenbach.at":[["set-cookie","ris_cookie_setting","1"]],"pferde-hunde-therapie.de":[["set","realCookieBanner","undefined"]],"physikinstrumente.de":[["set-cookie","cookieconsent_status","allow"]],"pibank.com":[["set-cookie","tecnicaCookie","true"]],"piklodz.pl":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"pitesti24.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"pixnet.net":[["ra","oncontextmenu|onDragStart|onselectstart"]],"plavte.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"playcentral.de":[["set","realCookieBanner","undefined"]],"plos.org":[["set-cookie","plosCookieConsentStatus","false"]],"plusportal.hr":[["set-cookie","PLUSPORTAL_COOKIES_ACCEPT","1"]],"pokaz.me":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"polizei-beratung.de":[["set-cookie","cookie_consent","true"],["set-cookie","propk-googlemaps-permanent","true"]],"porndoe.com":[["set-cookie","_aCan_analytical","0"],["set-cookie","_aGaB","1"],["set-cookie","_cDaB","1"]],"porntv.us":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"portea.fr":[["rc","wcc-popup-overflow","body","stay"]],"posterstore.eu":[["set-cookie","synapse-cookie-preferences-set","true"]],"postype.com":[["aeld","contextmenu"],["rc","disable-selection","body"]],"poum-tchak-drum.ch":[["set-cookie","cookieConsentAgree","01","","reload","1"]],"prace.cz":[["rc","show--consent","body","stay"]],"prepostseo.com":[["nostif","head"]],"promotor-poz.kylos.pl":[["ra","oncontextmenu"]],"promotor.pl":[["ra","oncontextmenu","body"]],"prosenectute.ch":[["set-cookie","cookieDisclaimerShown","true"]],"pumatools.hu":[["set-cookie","cookie_level","2"]],"puromarketing.com":[["set-cookie","cookiergpdjnz","1"]],"puzzle-shingoki.com":[["rmnt","script","ab927c49cf1b"]],"pvcbuis.com":[["set-cookie","cookiebar","1"]],"queenandcastlekenilworth.co.uk":[["set-cookie","ce-cookie","N"]],"queensfishandchipsgloucester.co.uk":[["set-cookie","COOKIES_ACCEPTED","true"]],"queisser.de":[["set-cookie","cookieConsent","true"]],"rachelwine.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"radbeer.com":[["set-cookie","age-checked","1"]],"radicalmotorsport.com":[["set-cookie","__radicalMotorsport.ac","true"]],"raindropteamfan.com":[["acs","document.oncontextmenu"]],"randomstory.org":[["aopw","disableSelection"]],"readergrev.com":[["set-cookie","popup_closed","true"]],"readlightnovel.org":[["aopr","__cmpGdprAppliesGlobally"]],"rechtsanwalt-nierfeld.de":[["set","realCookieBanner","undefined"]],"record-courier.com":[["nostif","gnt_mol_oy"]],"redro.pl":[["set-cookie","cookieConsent","necessary","","reload","1"]],"reflectim.fr":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"reifenservice-oberstdorf.de":[["set-cookie","Consent","0"]],"reinhardstrempel.de":[["set","realCookieBanner","undefined"]],"renditepassive.net":[["set","document.oncontextmenu",""],["set","document.onselectstart",""],["set","document.onkeydown",""],["set","document.onmousedown",""],["set","document.onclick",""],["acs","document.ondragstart"],["aopr","onload"]],"repack-games.com":[["acs","jQuery","contextmenu"]],"reporternews.com":[["nostif","gnt_mol_oy"]],"researchdata.smu.edu.sg":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"retailmarketingpartner.nl":[["set-cookie","consent-cookies","1"]],"rheumatologyadvisor.com":[["remove-cookie","hmmet"]],"rig-flip.com":[["set-local-storage-item","cookie_consent","declined"]],"rittmeisterdestille.de":[["rmnt","script","realCookieBanner"]],"roleplayer.me":[["rmnt","script","__ADB_COOLDOWN__"]],"roomsandspaces.ca":[["set-cookie","cookieModal","false"]],"royaleapi.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"rudalle.ru":[["set-cookie","myAwesomeCookieName2","true"]],"rule34.paheal.net":[["set-cookie","ui-tnc-agreed","true"]],"s.tabelog.com":[["set-cookie","ignore_language_guide","true"]],"sachsen-netze.de":[["set-cookie","allowAnalyticalCookies","false"],["set-cookie","cookiesAccepted","true"]],"saintjoursexpertmaritime.com":[["rc","unreadable-display","","stay"]],"salzer.at":[["set-cookie","cookiesAllowRequired","true"]],"samplerite.cn":[["set-cookie","consented","false"]],"schneidewind-immobilien.de":[["set-local-storage-item","pcClosedOnce","true"]],"scholpp.it":[["rc","with-featherlight","","stay"]],"schraudolf-oberstdorf.de":[["set-cookie","Consent","0"]],"script-stack.com":[["aeld","","mdp"],["aeld","contextmenu"]],"seacoastonline.com":[["nostif","gnt_mol_oy"]],"search.odin.io":[["set-local-storage-item","cookie_consent","granted"]],"searchenginewatch.com":[["acs","jQuery","#sign-up-popup"]],"seifriz-preis.de":[["set","realCookieBanner","undefined"]],"selva.eu":[["set-cookie","ris_cookie_setting","1"]],"serverprofis.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"seswater.co.uk":[["set-cookie","cookie","true"],["set-cookie","performanceAnalytics","false"]],"sexeo.de":[["set-cookie","cookie","accepted"]],"sh.reddit.com":[["nostif","{e(n,t,r)}","30000"]],"shareloft.com":[["set-cookie","shareloft_cookie_decision","1"]],"sherdog.com":[["aopr","googletag"]],"shop-naturstrom.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"shop.elbers-hof.de":[["set-cookie","cb_accepted","1"],["set-cookie","cb_validCookies","1"]],"shop.teascovery.com":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.wumajia.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shopbuddies.nl":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shopping.dradvice.asia":[["set-cookie","allowGetPrivacyInfo","true"]],"shortlist.com":[["set-cookie","FTR_Article_PageView","2"]],"shrinkearn.com":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"shumilou.com":[["ra","onselectstart"]],"sidedoorliquors.com":[["set-cookie","age_verification","1"]],"sistemacomponentes.com.br":[["set-cookie","acceptCookies","1"]],"skidrowcodex.net":[["aopw","stopPrntScr"],["aeld","contextmenu"]],"skidrowreloaded.com":[["rmnt","script","copyprotect"]],"smartkhabrinews.com":[["ra","oncontextmenu"],["aeld","contextmenu"],["rmnt","script","ctrlKey"]],"sneakernews.com":[["aopr","sneakerGoogleTag"]],"snockscoffee.com":[["set-cookie","_pandectes_gdpr","1"]],"sonderversum.com":[["set","realCookieBanner","undefined"]],"sp215.info":[["set-cookie","plg_system_djcookiemonster_informed","1","","reload","1"]],"space-engineers.de":[["acs","document.getElementById","undefined"]],"spelletjes.nl":[["set-cookie","OptanonAlertBoxClosed","true"]],"ssuathletics.com":[["acs","document.querySelector","adblock"]],"starlux-airlines.com":[["set-cookie","advertisingCookie","false"],["set-cookie","analyticsCookie","false"],["set-cookie","functionalCookie","true"]],"starofservice.com":[["set-cookie","cookieNotification","true"]],"statelibrary.us":[["aopr","document.oncontextmenu"],["aeld","keydown","disable_in_input"]],"statnews.com":[["remove-cookie","xbc"]],"statsignificant.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"sterlitamak1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"stifler.ro":[["rmnt","script","contextmenu"]],"stilweb.it":[["set","realCookieBanner","undefined"]],"stiridinromania.ro":[["acs","document.oncontextmenu"]],"stockerau.at":[["set-cookie","ris_cookie_setting","1"]],"store.kde.org":[["rmnt","script","btnHtml"],["nano-stb","count"]],"streamruby.com":[["rmnt","script","/devtool|debugger/"]],"streamsb.net":[["acs","check","debugger"],["nosiif","_0x"]],"streamvid.net":[["aeld","contextmenu"],["rmnt","script","debugger"]],"studiestoday.com":[["aeld","/select|copy|contextmenu/"]],"studyadda.com":[["set","document.onmousedown","null"],["set","document.oncontextmenu","null"]],"stuhl24-shop.de":[["set-cookie","cookie-preference","1"]],"stylewe.com":[["set-cookie","acceptPrivacy","true"]],"subitec.com":[["set","realCookieBanner","undefined"]],"suedafrika-wein.de":[["set","realCookieBanner","undefined"]],"sugi-net.jp":[["set-cookie","cookie-use-accept","false"]],"superliquor.co.nz":[["set-cookie","superliquor","1"]],"swissboardforum.ch":[["set-cookie","cookies-eu-comfort","false"],["set-cookie","cookies-eu-necessary","true"],["set-cookie","cookies-eu-statistics","false"]],"swisstours.com":[["set-local-storage-item","isCookie","Yes"]],"szkolawohyn.pl":[["set","document.oncontextmenu","noopFunc"]],"t3.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"tabletable.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"talkingpointsmemo.com":[["remove-cookie","tpm_article_views"],["remove-cookie","tpm_page_views"]],"targetstudy.com":[["aopw","stopSelect"]],"tbs.co.jp":[["set","NS_TVER_EQ.checkEndEQ","trueFunc"]],"technik-hauptstadt.de":[["set","realCookieBanner","undefined"]],"teknokutu.com":[["set-session-storage-item","cookieDeclined","true"]],"tempatwisataseru.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"tennessean.com":[["nostif","gnt_mol_oy"]],"texthelp.com":[["set-cookie","texthelp_cookie_consent","yes"],["set-cookie","texthelp_cookie_consent_in_eu","0"]],"th-world.com":[["aeld","/contextmenu|select|copy/"],["ra","oncontextmenu|ondragstart|onselectstart|onkeydown|oncopy|oncut"],["aeld","","0x"]],"the-dispatch.com":[["nostif","gnt_mol_oy"]],"theblaze.com":[["aopw","admrlWpJsonP"]],"thegrowthop.com":[["set-local-storage-item","page-age-gate-verified","true"]],"theintercept.com":[["rmnt","script","userData_"]],"thememazing.com":[["aeld","","mdp"]],"theodysseyonline.com":[["aopr","__cmpGdprAppliesGlobally"]],"therailwayblackheath.co.uk":[["set-cookie","ce-cookie","N"]],"thesalisburyarmsedinburgh.co.uk":[["set-cookie","ce-cookie","N"]],"thetravel.com":[["remove-cookie","articlesRead"]],"theweek.com":[["set-local-storage-item","kiosq_article_reset","$remove$"],["set-local-storage-item","kiosq_article_url_ack","$remove$"],["set-cookie","FTR_Article_PageView","2"]],"thotsbay.tv":[["aeld","/contextmenu|keydown/"],["set","devtoolsDetector.launch","noopFunc"]],"tickets.dehortus.nl":[["set-cookie","acceptAnalyticsCookies","False"],["set-cookie","acceptFunctionalCookies","False"],["set-cookie","cookiePolicyConfirmed","True","","reload","1"]],"tiefenthaler-landtechnik.ch":[["set-cookie","allowTracking","false"]],"tierklinik-hofheim.de":[["set-cookie","cookie-hint-default","1"],["set-cookie","cookie-hint-statistik","0"],["set-cookie","cookie-hint-youtube","1"]],"time.is":[["rmnt","script","reviveScroll","excludes","self.__next"]],"titanic-magazin.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"tobycarvery.co.uk":[["set-cookie","ce-cookie","N"]],"todays-golfer.com":[["set-cookie","ccpaApplies","true"],["set-cookie","ccpaConsentAll","true"],["set-cookie","ccpaReject","false"]],"todaysparent.com":[["aeld","/^(mouseout|mouseleave)$/"]],"toomeymotorgroup.co.uk":[["set-cookie","cookieAccepted","1","","reload","1"]],"toysrus.ca":[["set-cookie","cookieModal","false"],["set-cookie","isNewsletterPopupShown","false","","reload","1"]],"tp-link.com":[["set-cookie","tp_privacy_base","1"]],"traun.at":[["set-cookie","ris_cookie_setting","1"]],"travelinsured.com":[["set-cookie","CookieDisclaimer","1"]],"trentino.pl":[["ra","oncontextmenu"]],"tridge.com":[["set-cookie","cookieBannerHidden","true"]],"ttela.se":[["set-cookie","stampen-cookies-hide-information","yes"]],"tube8.fr":[["set-cookie","t8disclaimer","1"]],"tuhlteim-pedia.de":[["set","realCookieBanner","undefined"]],"tui.nl":[["set-cookie","CookiesAccepted","no"]],"tunegate.me":[["ra","onContextmenu|onMouseDown|onSelectStart"]],"turbo1.co":[["aeld","contextmenu"]],"tuttoautoricambi.it":[["aeld","mousedown","function(t)"]],"tv-tokyo.co.jp":[["set","document.oncontextmenu","null"]],"tvtv.ca":[["rmnt","script","reviveScroll","excludes","self.__next"]],"tvtv.us":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"twenga.es":[["set-cookie","cookiewarning","1","","reload","1"]],"twenga.se":[["set-cookie","cookiewarning","1","","reload","1"]],"txori.com":[["aeld","contextmenu","_0x"]],"ubisys.de":[["set","realCookieBanner","undefined"]],"udi-immo.com":[["set-cookie","enableCookies","true"]],"udo-lermann.de":[["set","realCookieBanner","undefined"]],"ultrahuman.com":[["set-local-storage-item","COOKIE_CONSENT","false"]],"underground-england.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"unidivers.fr":[["no-xhr-if","googlesyndication"]],"united-internet.de":[["set-cookie","cookieconsent_status","allow"]],"uol.com.br":[["aeld","copy"],["aopw","addLink"]],"upitrek.com":[["rc","wcc-popup-overflow","body","stay"]],"usatoday.com":[["nostif","gnt_mol_oy"]],"utorrentgamesps2.blogspot.com":[["acs","document.onkeydown"],["ra","onselectstart"]],"uwayapply.com":[["ra","oncontextmenu|ondragstart|onselectstart"]],"valostore.no":[["set-local-storage-item","cookieConsent","necessary"]],"vanbeekbedden.nl":[["set-cookie","consent-cookies","1"]],"vansteenbergen-kas.nl":[["set-cookie","consent-cookies","1"]],"variohm.de":[["set-cookie","AllowAllCookies","1","","reload","1"]],"varna.eu":[["set-cookie","ris_cookie_setting","1"]],"vaskakas.com":[["set-cookie","UN_explicit","ok"]],"vcl.li":[["set-cookie","cookie_accept","yes","","reload","1"]],"veeqo.com":[["set-cookie","veeqo_consent","granted"]],"veneto.info":[["aeld","copy"]],"verpornocomic.com":[["acs","jQuery","ai_adb"]],"vibeslist.ai":[["set-local-storage-item","cookie_consent","denied"]],"vide0.net":[["set","console.clear","undefined"],["aeld","contextmenu"]],"vidembed.me":[["set","console.clear","undefined"]],"vigill.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"vilanova.cat":[["set-cookie","politica_cookies_rgpd","0"]],"vinotrade.sk":[["set-cookie","resp-agev-age-verification-passed","1"]],"vitalplus.com":[["set","realCookieBanner","undefined"]],"vu.lt":[["set-cookie","cookieconsent_status","allow"]],"vvide0.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"wallauonline.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"wasp.sh":[["set-cookie","wasp-cookies-consent","false"]],"watson.de":[["nostif","AdBlocker"]],"waves.is":[["set-cookie","cookies_accepted","0"]],"wawlist.com":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["aopr","disableSelection"],["aeld","keydown"]],"webcodegeeks.com":[["nostif","onload_popup","8000"]],"webfactory-i4.de":[["set","realCookieBanner","undefined"]],"weetabix.nl":[["rc","wcc-popup-overflow","body","stay"]],"werkenbijkruidvat.be":[["rc","is-active-cookiebar","","stay"]],"whattowatch.com":[["set-cookie","FTR_Article_PageView","2"]],"wildthings.club":[["set-cookie","agreeTerms","1","","reload","1"]],"windowspower.de":[["set","realCookieBanner","undefined"]],"winnipegfreepress.com":[["aeld","/^(mouseout|mouseleave)$/"]],"wirtualnyspac3r.pl":[["aeld","contextmenu"]],"wjx.top":[["aopr","_0x1a4c"],["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"wnep.com":[["aeld","/^(mouseout|mouseleave)$/"]],"wolfurt.at":[["set-cookie","ris_cookie_setting","1"]],"worldlibertyfinancial.com":[["set-local-storage-item","cookie_consent","false"],["set-local-storage-item","userAcceptedAnalytics","false"]],"wrestlezone.com":[["acs","document.createElement","admiral"]],"writingcooperative.com":[["set-local-storage-item","201805-policy|accepted","1"]],"wthr.com":[["aeld","/^(mouseout|mouseleave)$/"]],"wunderground.com":[["set-local-storage-item","wu.ccpa-toast-viewed","true"],["rc","enable-sda","body","stay"]],"www-kentlive-news.translate.goog":[["rmnt","script","loc.hostname"]],"x-news.pl":[["aeld","contextmenu","a"]],"xanimu.com":[["rmnt","script","adblock"]],"xe.gr":[["nostif","modal"]],"xhamsterlive.com":[["set-cookie","cookie_accept","1"],["set-cookie","isVisitorsAgreementAccepted","1","","reload","1"]],"xhbranch5.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhopen.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xxxfetish24.com":[["set-local-storage-item","mb_age_warning_verified","1"]],"xxxshemaleporn.com":[["set-cookie","kt_tcookie","1"],["set-cookie","splash_Page_Accepted","true"]],"y8.com":[["set-cookie","privacy_policy_validated","true"]],"ya62.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"yhocdata.com":[["aopr","contentprotector"]],"yuengling.com":[["set-cookie","age-gate","1"]],"yuque.com":[["aeld","copy"]],"zaero-design.de":[["set-cookie","cookie-preference","1"]],"zahnarzt-kuboth.de":[["set","realCookieBanner","undefined"]],"zapcars.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"zapx.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"zbiornik.com":[["set-cookie","adult_confirm","1"]],"zdravenportal.eu":[["acs","document.oncontextmenu"],["acs","document.addEventListener","document.onselectstart"],["aopw","disable_hot_keys"],["ra","oncontextmenu"]],"ziare.com":[["aeld","copy"]],"zipjob.com":[["set-cookie","cookie_consent","1"]],"zirl.gv.at":[["set-cookie","ris_cookie_setting","1"]],"zora.co":[["set-local-storage-item","zora-discover-14-03-23","false"]],"zulily.com":[["nostif","loginModal","500"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
