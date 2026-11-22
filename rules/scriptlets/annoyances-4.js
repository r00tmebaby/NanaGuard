/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"10tv.com":[["aeld","/^(mouseout|mouseleave)$/"],["aeld","mouseout"]],"14.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"178.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"20demidistance9elongations.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"2mnews.ro":[["rmnt","script","/oncontextmenu|wccp/"]],"30edu.com.cn":[["ra","oncontextmenu|oncopy|onselectstart"]],"4399.com":[["aopr","defaultbackgroundimg"]],"47news.jp":[["acs","$","contextmenu"]],"50five.com":[["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"59northwheels.se":[["set-cookie","cookie_accepted","1"]],"63.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"6amgroup.com":[["set-local-storage-item","cookie_consent","false"]],"abc11.com":[["aeld","scroll"]],"abc15.com":[["aeld","/^(mouseout|mouseleave)$/"]],"abcteile24.de":[["set","realCookieBanner","undefined"]],"aboutchromebooks.com":[["aopr","googletag"]],"abstream.to":[["acs","document.onkeydown"]],"accace.cz":[["set","realCookieBanner","undefined"]],"accademiainformatica.com":[["set","realCookieBanner","undefined"]],"account.samsung.com":[["set-cookie","sa_enable","off"]],"adidas.co.ma":[["set-cookie","consent_status","approved"]],"adpres.ro":[["aopw","stopPrntScr"]],"adslink.pw":[["aeld","contextmenu","preventDefault"],["acs","document.onkeydown"]],"aegon.es":[["set-cookie","AceptacionCookieAnalitica","no"],["set-cookie","AceptacionCookiePersonalizacion","yes"],["set-cookie","AceptacionCookiePublicidad","no"],["set-cookie","Event","accept"]],"aerolineas.com.ar":[["set-local-storage-item","isCookiesAccepted","true"]],"affbank.com":[["set","canRunAds","true"]],"ahepaseniorliving.org":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"ahorn24.de":[["set-cookie","accept_cookies2","true","","reload","1"]],"airnavradar.com":[["set","ads_enabled","true"]],"airnewzealand.co.nz":[["set-cookie","airTRFX_cookies","accepted"]],"airportwebcams.net":[["set","realCookieBanner","undefined"]],"airwallex.com":[["set-cookie","awx_cookie_consent","true"]],"akkushop-turkiye.com.tr":[["set-local-storage-item","CerezUyariGosterildi","true"]],"akool.com":[["set-cookie","cookie-permission","0","","reload","1"]],"alfa.com.ec":[["set-local-storage-item","CookiesConsent","1"]],"all3do.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"allfunds.com":[["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"allrecipes.com":[["rc","jw-flag-floating","","stay"]],"alpenverein.shop":[["set-cookie","amcookie_allowed","1"]],"alphaspel.se":[["set-cookie","cookie_consent","true"]],"americanaffairsjournal.org":[["remove-cookie","AAJPaywall"]],"americanexpress.ch":[["set-cookie","sc-privacy-settings","true"]],"amigosmuseoreinasofia.org":[["set-cookie","consentcookies_Esenciales","OK"]],"amnesty.nl":[["set-cookie","amnesty-cookies","000"]],"ancient.eu":[["set","ADBdetected","noopFunc"]],"androidmakale.com":[["acs","document.oncontextmenu"]],"ani-one.com":[["set-cookie","cookieDeclined","1"]],"animalwebcams.net":[["set","realCookieBanner","undefined"]],"animeunity.it":[["ra","oncontextmenu"]],"anisearch.de":[["nostif","faq/whitelist"]],"aniwatch.to":[["set","devtoolsDetector.launch","noopFunc"]],"app.erevie.pl":[["set-cookie","cookies-accept","1"]],"app.klarna.com":[["set-local-storage-item","safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["set-local-storage-item","safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["set-local-storage-item","safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"]],"app.uniswap.org":[["set-session-storage-item","hideMobileAppPromoBanner","true"]],"appofmirror.com":[["acs","nocontextmenu"]],"aquis.eu":[["set-cookie","localConsent","false"]],"art-harder.de":[["set-cookie","Consent","0"]],"assets4godot.com":[["set-cookie","ga_consent","false"]],"atlanticcouncil.org":[["set-cookie","cookieNotify","dismissed"]],"autohaus-diefenbach.de":[["set-cookie","hide-gdpr-bar","true"]],"autoride.es":[["set-local-storage-item","cookies_marketing_consent","false"],["set-local-storage-item","cookies_necessary_consent","true"],["set-local-storage-item","cookies_statistics_consent","false"]],"autoride.sk":[["set-local-storage-item","cookies_marketing_consent","false"],["set-local-storage-item","cookies_necessary_consent","true"],["set-local-storage-item","cookies_statistics_consent","false"]],"autoteiledirekt.de":[["aeld","mousedown","function(t)"]],"avell.com.br":[["set-cookie","cookiesConsent","true"]],"b-immobree.be":[["set-cookie","cookie-consent-status","0"]],"badayak.com":[["acs","document.oncontextmenu"]],"badgerandblade.com":[["aopw","adBlockDetected"]],"bagosport.cz":[["set-cookie","cookie-bar","0"]],"baldauf-oberstdorf.de":[["set-cookie","Consent","0"]],"bayernlb.de":[["set-cookie","layerCookie","true","","reload","1"],["set-cookie","video","true"]],"bestwig.de":[["set","realCookieBanner","undefined"]],"beterbed.nl":[["set-local-storage-item","consentLevel","1"]],"bewusstes-zentrum.de":[["set","realCookieBanner","undefined"]],"bhaptics.com":[["set-cookie","accepted_cookies","yes"]],"bhaskar.com":[["set-local-storage-item","HAS_ACCEPTED_PRIVACY_POLICY","true"],["set","Object.prototype.dbskrat","true"]],"bigdatauni.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"bigtitslust.com":[["set-cookie","kt_agecheck","1"]],"binsoft.pl":[["set-cookie","allowcookies","1","","reload","1"]],"bitburger.com":[["set-cookie","cookies-general","true"]],"blablacar.com.br":[["set-cookie","_cookies_v2","1"]],"blablacar.com.tr":[["set-cookie","_cookies_v2","1"]],"blog.kwick.de":[["acs","jQuery","contextmenu"],["aopr","disableselect"],["aopr","document.onkeydown"]],"blog.naver.com":[["aeld","/contextmenu|selectstart|copy/"]],"blu-ray-rezensionen.net":[["set","realCookieBanner","undefined"]],"bluemoon-mcfc.co.uk":[["nosiif","removeChild"]],"blueoceangaming.com":[["set","realCookieBanner","undefined"]],"blueridgenow.com":[["nostif","gnt_mol_oy"]],"bokadirekt.se":[["set-cookie","BokadirektCookiePreferencesMP","1"]],"bomdia.eu":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"book-n-drive.de":[["set-cookie","cookietypes","OK"]],"breachmedia.ca":[["set-cookie","cp_style_3841","true"]],"bremerhaven.de":[["set-cookie","GDPRp","no"]],"bristolbeerfactory.co.uk":[["set-cookie","age-checked","1"]],"brobasket.com":[["set-cookie","accept_age","accepted"]],"brusselshealthnetwork.be":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"bsh-russia.ru":[["set-cookie","agreement","1"]],"bssmvalues.com":[["set-local-storage-item","dataConsentChoice","declined"]],"buienradar.nl":[["set","hideBannerBlockedMessage","true"]],"businessemailetiquette.com":[["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"bvmed.de":[["set-cookie","MATOMO_CONSENT_GIVEN","0"]],"byseum.de":[["set-cookie","cookiehinweisnew","2","","reload","1"]],"bytello.com":[["set-local-storage-item","_APP_COOKIE_NOTICE","reject"]],"calm.com":[["set-cookie","has-agreed-to-cookies","false"],["set-cookie","has-declined-cookies","true","","reload","1"]],"calvinklein.com.br":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"cambridgebs.co.uk":[["set-cookie","cookieStatus","true"]],"camping-car-plus.com":[["set-cookie","ecs-cookies-consent","0"]],"camra.org.uk":[["set-cookie","camra_experience_cookie_consent","1"],["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"camwhores.tv":[["set-cookie","kt_agecheck","1"]],"canale.live":[["aopr","document.oncontextmenu"]],"cape.co":[["set-local-storage-item","no-cookie-notice-dismissed","true"]],"carbon.ag":[["set","realCookieBanner","undefined"]],"carsales.com.au":[["set-cookie","csnGDPR","true"]],"catawiki.com":[["set-cookie","enable_analytical_cookies","false"],["set-cookie","enable_marketing_cookies","false"],["set-cookie","has_pending_cookie_consent_sync","true"]],"ccvalleisarco.it":[["set-cookie","ris_cookie_setting","1"]],"cda-hd.cc":[["set","document.oncontextmenu","null"]],"cesky-sport.cz":[["set-cookie","DmCookiesAccepted","true"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"cheboygannews.com":[["nostif","gnt_mol_oy"]],"chiusa.eu":[["set-cookie","ris_cookie_setting","1"]],"chocolateemporium.com":[["set-cookie","cookies_popup","yes"]],"cineman.pl":[["set-cookie","ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["set-cookie","ARE_MARKETING_COOKIES_ACCEPTED","true"],["set-cookie","ARE_REQUIRED_COOKIES_ACCEPTED","true"]],"civildigital.com":[["acs","jQuery","ai_adb"]],"classic-emaille.de":[["set","realCookieBanner","undefined"]],"clausnehring.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"clipartmax.com":[["aopw","document.oncontextmenu"]],"clockks.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"cmlink.com":[["set-cookie","isAgreeCookie_UK","true"]],"codex.online":[["set-cookie","_func","true"]],"columbiasportswear.at":[["set-cookie","Columbia_AT_emailPopup","1"]],"columbiasportswear.de":[["set-cookie","Columbia_DE_emailPopup","1"]],"columbiasportswear.fr":[["set-cookie","Columbia_FR_emailPopup","1"]],"cometh-consulting.com":[["set-cookie","cmplz_banner-status","dismissed"]],"comicsands.com":[["aopr","__cmpGdprAppliesGlobally"]],"compravo.de":[["rc","disable","div","stay"]],"comun.sanmartindetor.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.braies.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.egna.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.perca.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.plaus.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.predoi.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sanpancrazio.bz.it":[["set-cookie","ris_cookie_setting","1"]],"consordini.com":[["rc","show--consent","body","stay"]],"coolermaster.com":[["set-cookie","cookie-policy-agree","true"]],"createchange.me":[["set","realCookieBanner","undefined"]],"criticalsoftware.com":[["set-local-storage-item","c15t","1"]],"ctrader.com":[["set-local-storage-item","cookie_accepted","true"],["set-local-storage-item","cookie_analytic","false"],["set-local-storage-item","cookie_necessary","true"]],"ctrl.blog":[["aopr","a1lck"]],"cultistcircle.com":[["set-local-storage-item","cookieConsent","1"]],"curantus.de":[["set-cookie","amcookie_allowed","1"]],"curbed.com":[["nostif","adsBlocked"]],"cvwarehouse.com":[["set-cookie","0_required","accepted","","","reload","1"]],"cyberdaily.au":[["set-local-storage-item","articleGateData","$remove$"]],"cyberdom.blog":[["rmnt","script","keyCode"]],"cyclingnews.com":[["set-cookie","FTR_Article_PageView","2"]],"d0o0d.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"d5render.com":[["set-cookie","accept_cookie_flag","1"]],"dailynewshungary.com":[["set-local-storage-item","wp_dark_mode_active","1"]],"dailyworld.com":[["nostif","gnt_mol_oy"]],"dajanarodriguez.cz":[["set-cookie","popup-hide-cookie-consent","true"]],"dar.nl":[["set-cookie","dar_ca","true","","reload","1"],["set-cookie","township_tooltip","true"]],"dassen-azara4.com":[["acs","document.oncontextmenu"]],"data.bathspa.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"daya-jewelry.com":[["acs","RegExp","disableRightClick"]],"dbschenker-seino.jp":[["set-cookie","allow-marketing-tracking","false"],["set-cookie","allow-statistical-tracking","false"],["set-cookie","privacy-notice-responded","0"],["set-local-storage-item","cookie_usage_acknowledged_2","1"]],"delicateseliterare.ro":[["acs","jQuery","contextmenu"]],"democratandchronicle.com":[["nostif","gnt_mol_oy"]],"demolandia.net":[["aopr","document.oncontextmenu"]],"der-puten-shop.de":[["set-cookie","cookie-preference","1"]],"der-windows-papst.de":[["set","realCookieBanner","undefined"]],"descopera.ro":[["acs","document.oncontextmenu"]],"deutsche-finanzagentur.de":[["set-cookie","disclaimer-overlay","true"]],"deutschebanksae.my.site.com":[["set-cookie","cookieAuth","1"]],"developpez.com":[["acs","document.getElementById","cookie"]],"dexterdaily.com":[["set-cookie","techspot_pro_cookie_consent","1"]],"dg-pw.de":[["set","realCookieBanner","undefined"]],"dickies.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"digimobil.es":[["set-cookie","adsConsent","false"],["set-cookie","analyticsConsent","false"]],"digitalfernsehen.de":[["aeld","contextmenu"]],"digitaltrends.com":[["aopr","HTMLIFrameElement"]],"ditchthelabel.org":[["set-cookie","localConsent","true"]],"diylifetech.com":[["set-local-storage-item","201805-policy|accepted","1"]],"docs.apica.io":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.dyrector.io":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.paloaltonetworks.com":[["nostif","ad-block"]],"docs.proxyman.com":[["set-cookie","__gitbook_cookie_granted","no"]],"doctors.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"dollenberg-isolierung.de":[["set","realCookieBanner","undefined"]],"dopesnow.com":[["set-local-storage-item","cookieBannerShown","true"]],"dossier.today":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"dreamlandresort.com":[["aopr","alert"]],"drugdiscoverynews.com":[["set-cookie","allowsCookies","true"]],"dslbank.de":[["set-cookie","Cookie-Information","false"]],"duck.ai":[["set-local-storage-item","duckaiHasAgreedToTerms","true"]],"dxmaps.com":[["nostif","adsbygoogle","5000"]],"e1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"easyayurveda.com":[["aopr","disable_copy"],["aopr","wccp_pro_iscontenteditable"],["aopr","disable_hot_keys"],["aopr","nocontext"]],"eding.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"eett.gr":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"efortuna.ro":[["set-cookie","cookie_layer","1"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"eggelsberg.at":[["set-cookie","ris_cookie_setting","1"]],"egro-direktwerbung.de":[["set","realCookieBanner","undefined"]],"ekiwi-blog.de":[["set","realCookieBanner","undefined"]],"electronics.semaf.at":[["rc","show--consent","body","stay"]],"elektro-plast.com.pl":[["ra","oncontextmenu"]],"elstonandson.co.uk":[["set-cookie","over18","yes"]],"emb-europe.com":[["set-cookie","consent-cookie-popup","1"]],"embedplus.com":[["set-cookie","ytprefs_gdpr_consent","1"]],"embtaku.pro":[["aost","Promise","/isEnable|isOpen/"]],"emersons.co.nz":[["set-cookie","age-checked","1"]],"emondo.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"empathy.com":[["set-cookie","CookieConsent","false"]],"englishradar.com":[["set","realCookieBanner","undefined"]],"epicdrama.eu":[["set-cookie","cookies_popup","1"]],"esderaiz.com":[["set","realCookieBanner","undefined"]],"esologs.com":[["acs","attachToDom","ad-fallback"]],"esthetique-meyerbeer.com":[["rc","unreadable-display","","stay"]],"eurogamer.pt":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"eurosender.com":[["set-cookie","es_cookie_settings_closed","1"]],"evasion-online.com":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"exitroom.berlin":[["set","realCookieBanner","undefined"]],"fabrykacukiernika.pl":[["set-cookie","Rodo","1"],["set-cookie","cookie_privacy_on","1"]],"fantecshop.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"fbshop.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"fcportables.com":[["aeld","/^(contextmenu|copy|dragstart|selectstart)$/"]],"feierstoff.de":[["set-cookie","Hotjar","false"],["set-cookie","ga","false"],["set-cookie","mnd-cookie-accepted-feierstoffde-54","1"]],"fertagus.pt":[["set-cookie","FTCookieCompliance","1"]],"filmpornoitaliano.org":[["aopr","document.oncontextmenu"],["aopr","document.onmousedown"],["aopr","document.onselectstart"]],"filmzie.com":[["set-local-storage-item","cookiesAccepted","false"]],"finewinedelivery.co.nz":[["set-cookie","firstvisit","1"]],"firestream.site":[["set","console.clear","trueFunc"],["set","console.log","trueFunc"],["set","console.table","trueFunc"],["aeld","keydown","||_0x"]],"fiyat.mercedes-benz.com.tr":[["set-local-storage-item","isCookieAccepted","true"]],"fizjobaza.pl":[["set-cookie","cookie-accepted","yes"]],"flashplayer.org.ua":[["aopr","document.oncontextmenu"],["aopr","document.onkeydown"],["aopr","disableSelection"]],"flixclassic.pl":[["set-cookie","rgp-gdpr-policy","1"]],"floristasgarcia.es":[["set","realCookieBanner","undefined"]],"fmhikayeleri.com":[["acs","document.oncontextmenu"]],"fontsfree.pro":[["set","adBlock","false"]],"foodie.com":[["aeld","copy"]],"ford-duennes-regensburg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-kestel-marktzeuln.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-ludewig-delligsen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-maiwald-linsengericht.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-norren-weissenthurm.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-reinicke-muecheln.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.lt":[["set-cookie","cookieAcknowledged","true"]],"ford.no":[["set-cookie","cookieAcknowledged","true"]],"ford.pl":[["set-cookie","cookieAcknowledged","true"]],"form.fillout.com":[["set-local-storage-item","explicitCookieAccept-24149","true"]],"forum.digitalfernsehen.de":[["set-cookie","xf_notice_dismiss","1"]],"fosshub.com":[["set","checkAds","trueFunc"]],"frameboxxindore.com":[["aeld","copy","pagelink"]],"free.navalny.com":[["set-cookie","CookieConsent","true"]],"freeforums.net":[["aeld","scroll"]],"freewatchtv.top":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"freshdays-shop.com":[["set-cookie","allowGetPrivacyInfo","true"]],"frisco.pl":[["set-cookie","forced-cookies-modal","2"]],"frixtender.de":[["rmnt","script","realCookieBanner"],["set","realCookieBanner","undefined"]],"fryerndental.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"fujirumors.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"gainesville.com":[["nostif","gnt_mol_oy"]],"gambling-affiliation.com":[["set-cookie","cookie_agreement_v3","2"]],"games.co.uk":[["set-cookie","OptanonAlertBoxClosed","true"]],"gandwfurniture.co.uk":[["set-cookie","as-set-cookies","true","","reload","1"]],"gardenia.net":[["ra","oncopy|oncut|onselectstart|style|unselectable","body","stay"],["set","document.body.oncut","null"],["set","document.body.oncopy","null"],["aeld","/copy|cut|selectstart/"]],"gasometer.de":[["set-cookie","cookie_consent_external-media","true"],["set-cookie","cookie_consent_shown","true"],["set-cookie","cookie_consent_statistics","false"]],"gay69.stream":[["aopr","disableSelection"],["aopw","nocontext"]],"gdh.digital":[["set-local-storage-item","cookieBarVisible","false"]],"gdrivedescarga.com":[["rmnt","script","e.preventDefault();"]],"gearside.com":[["set","nebula.session.flags.adblock","undefined"]],"gedik.com":[["set-session-storage-item","acceptCookies","false"]],"gemeinde.gais.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.latsch.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.percha.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.riffian.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.ritten.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.rodeneck.bz.it":[["set-cookie","ris_cookie_setting","1"]],"generationamiga.com":[["aopr","disable_copy"],["aopw","document.oncontextmenu"]],"geomiq.com":[["set-local-storage-item","gtag_enabled","1"]],"geotastic.net":[["set-local-storage-item","privacy-policy-accepted","true"]],"gesundheitsamt-2025.de":[["set-cookie","COOKIE_LVL","1"]],"gladiator-fightwear.com":[["set-cookie","cookie-preference","1"]],"go.netia.pl":[["set-cookie","rodo-modal-displayed","1"],["set-cookie","rodo-reminder-displayed","1"]],"gobiernodecanarias.org":[["set-cookie","cookies_analitycs_allowed","true"]],"goindex.lt":[["set-cookie","user_cookie_consent","1"]],"goodhub.xyz":[["aeld","/contextmenu|keydown/"]],"gplinks.co":[["aeld","contextmenu"]],"granado.com.br":[["set-local-storage-item","store-cookie-consent","accepted"]],"grandprixradio.dk":[["set-cookie","advertisement-age-show-alcohol","false"],["set-cookie","advertisement-age-show-gamble","false"],["set-cookie","analytics_cookies","0"],["set-cookie","cookies_accepted","1","","reload","1"],["set-cookie","tracking_cookies","0"]],"grants.at":[["set-cookie","cookieconsent_status_new","1"]],"griffin.com":[["set-session-storage-item","griffinConsentIgnored","1"]],"guidon40hyporadius9.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"haban-uhren.at":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_stripe","allow"]],"hanerix.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hanos.nl":[["set-cookie","CookieConsentChoice","3"]],"happiful.com":[["set-local-storage-item","cookie_consent","false"]],"happypenguin.altervista.org":[["set-cookie","cookieTechnical","1"],["set-cookie","cookieThirdParty","0"]],"harrycookcheltenham.co.uk":[["set-cookie","ce-cookie","N"]],"harveynorman.hr":[["set-cookie","cookieConsentGranted","1"]],"hatchet.run":[["set-local-storage-item","cookie_consent","no"]],"hawkinsforge.co.uk":[["set-cookie","ce-cookie","N"]],"hdi-mobility-solution-fr.com":[["set-cookie","cookiesAccepted","1","reload","1"]],"hdtoday.so":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"healthwell.dk":[["set-cookie","cookieaccept","required","","reload","1"]],"healthygamer.gg":[["set-cookie","cookieModalAccept","no"]],"hedgeaccordingly.com":[["aopw","ABD"]],"helldivers.io":[["aopr","nitroAds"]],"hemglass.se":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"hentaihaven.xxx":[["aeld","contextmenu"]],"hetwkz.nl":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"hianimez.to":[["set","devtoolsDetector.launch","noopFunc"]],"hochu.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hotel-la-chaumiere.com":[["rc","unreadable-display","","stay"]],"hotpornfile.org":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"],["aopr","document.onkeydown"],["aopr","document.onkeypress"]],"howtogeek.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"htrnews.com":[["nostif","gnt_mol_oy"]],"huss-licht-ton.de":[["set-cookie","huss_cookie_version","1"]],"huutokaupat.com":[["set-cookie","consent-data-v2","0"]],"i-fundusze.pl":[["set-local-storage-item","cookiePolicy","true"]],"ibuypower.com":[["set-cookie","AcceptUseCookie","Accept"]],"ielts.co.nz":[["set-cookie","acceptCookie","true"]],"ieltsliz.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"igvm.de":[["set","realCookieBanner","undefined"]],"ilyabiz.com":[["set","realCookieBanner","undefined"]],"immobilise.com":[["rmnt","script","/cookie-policy"]],"imping-confiserie.de":[["set-cookie","cookie-preference","1"]],"in.investing.com":[["set-cookie","r_p_s_n","1"]],"infobroker.de":[["set","realCookieBanner","undefined"]],"informationisbeautiful.net":[["set-cookie","iib_signup_popup","-1"]],"inquinte.ca":[["rc","blocked","body","stay"]],"inscribed.app":[["set-local-storage-item","hasVisitedBefore","true"]],"insider.fitt.co":[["rc","subscribe-pop-active","body","stay"]],"instantspoursoi.fr":[["set-local-storage-item","agreeToCookie","false"]],"intellinews.com":[["set-cookie","viewedOuibounceModal","true"]],"intergiro.com":[["set-cookie","cookie_policy","true"]],"isolarcloud.eu":[["set-local-storage-item","ISOLAR_COOKIE_VISIT","1"]],"jacquieetmichel.net":[["aopr","document.oncontextmenu"]],"jafekri.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"jku.at":[["set-cookie","CookieConsent","required"]],"jsonline.com":[["nostif","gnt_mol_oy"]],"justanswer.de":[["set-cookie","cbChecked","true"]],"kafijasdraugs.lv":[["set-cookie","lvFunctionalCookies","true"]],"kaltern.eu":[["set-cookie","ris_cookie_setting","1"]],"kamera-express.lu":[["set-cookie","cookie_accepted","false","","reload","1"]],"kark.com":[["aeld","scroll"]],"karlhoeffkes.de":[["set","realCookieBanner","undefined"]],"karriere.austrocontrol.at":[["set-cookie","eRecruiterCookieConsent","false","","reload","1"]],"keravanenergia.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"khou.com":[["aeld","/^(mouseout|mouseleave)$/"],["aeld","mouseout"]],"kicknews.today":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"king5.com":[["aeld","/^(mouseout|mouseleave)$/"]],"kirkkojakaupunki.fi":[["set-cookie","cookieControlPrefs","essential"]],"kitchennovel.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"kjell.com":[["set-cookie","ccValues","1"]],"knoxnews.com":[["nostif","gnt_mol_oy"]],"komdigi.go.id":[["set-local-storage-item","localConsent","true"]],"konicaminolta.ca":[["set-cookie","konicaminolta.us","1"]],"konicaminolta.us":[["set-cookie","konicaminolta.us","1"]],"kpcen-torun.edu.pl":[["set-cookie","cookieModal","true"]],"krampouz.com":[["set-cookie","cmplz_banner-status","dismissed"]],"krefindo.de":[["set","realCookieBanner","undefined"]],"kritichno.bg":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"kuopas.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"kupbilecik.com":[["set-cookie","allow-cookie","1"],["set-cookie","cookie-functional","1"]],"kusonime.com":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["acs","addEventListener","which"]],"kwj-computer.de":[["set-cookie","cookie-preference","1"]],"kyoceradocumentsolutions.ch":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.co.uk":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"lameerooftop.com":[["set","realCookieBanner","undefined"]],"lanew.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"laptopmag.com":[["aopr","_sp_.mms.startMsg"]],"lazyadmin.nl":[["nostif","AdBlocker"],["set","admiral","noopFunc"]],"lazyrecords.app":[["set-local-storage-item","cookieConsent","false"]],"learngerman.dw.com":[["set-local-storage-item","hasAcceptedGdpr","true"]],"lempaala.ideapark.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"lesmoutonsenrages.fr":[["acs","jQuery","ai_adb"]],"letsdownloads.com":[["acs","document.oncontextmenu"]],"librinova.com":[["set-local-storage-item","cookieconsent_status","false"]],"lichttraeumer.de":[["set","realCookieBanner","undefined"]],"lifestory.hu":[["ra","oncontextmenu"]],"linuxslaves.com":[["aopw","hidekeep"]],"liquorcave.com":[["set-cookie","age_verification","1"]],"listeamed.net":[["nosiif","devtool"],["nostif","devtool"]],"liv.si":[["set-cookie","cookie-preference","1"]],"live.b-c-e.us":[["aopr","alert"]],"livescience.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"livingetc.com":[["set-cookie","FTR_Article_PageView","2"]],"lobetalarbeit.de":[["set","realCookieBanner","undefined"]],"logopaedie-balzer.de":[["set-cookie","_coo1","1"],["set-cookie","_coo2","1"],["set-cookie","_coo3","1"],["set-cookie","_coo_seen","1"]],"lokalplus.nrw":[["set-cookie","banner","2","","reload","1"]],"lottehotel.com":[["set-cookie","analyticsCookie","N"],["set-cookie","checkCookie","Y"],["set-cookie","essentialCookie","Y"],["set-cookie","marketingCookie","N"],["set-cookie","thirdCookie","N"]],"loudersound.com":[["aopr","_sp_._networkListenerData"],["set-cookie","FTR_Article_PageView","2"]],"ls-service.at":[["set","realCookieBanner","undefined"]],"lumingerie.com":[["set-cookie","cookies-required","1","","reload","1"]],"magicpos.shop":[["set-cookie","cookie-preference","1"]],"makeuseof.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"mangareader.to":[["aeld","contextmenu","_0x"]],"mangaschan.net":[["aeld","contextmenu"]],"manhuascan.io":[["set-session-storage-item","adt-accepted-5621","1"]],"maniac.de":[["set","realCookieBanner","undefined"]],"manutd.com":[["set-cookie","userConsentCookiePolicy","off"]],"map.blitzortung.org":[["set-cookie","CONSENT","1"]],"margin.utex.io":[["set-cookie","isCookieConsentAccepted","true"]],"marinelink.com":[["set-cookie","GDPR","9"]],"markets.com":[["set-cookie","cookies_configured","1"],["set-cookie","cookies_func","true"],["set-cookie","cookies_tracking","false"]],"matrei-osttirol.gv.at":[["set-cookie","ris_cookie_setting","1"]],"matriculant401merited.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"mayflex.com":[["set-cookie","acceptCookies","true"]],"mcloud.to":[["aost","console.clear"]],"mediamaniya.site":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"medmerabank.se":[["set-cookie","cookieConsent","necessary"]],"medtube.pl":[["set-cookie","cookiePolicy","4"]],"megasport.co.il":[["set-cookie","YourCoockieName","true"]],"melkkobrew.fi":[["set-cookie","cookies-required","1","","reload","1"]],"mellerud.de":[["set-cookie","cookie-preference","1"]],"meteo.org.pl":[["ra","oncontextmenu"]],"mightyape.co.nz":[["rc","modal-open","body","stay"]],"mio.to":[["aeld","contextmenu"]],"mkup.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"mobilefuse.com":[["set-local-storage-item","cookies_policy_acceptance","denied"]],"mobilevikings.be":[["set-cookie","privacy_mv","1"]],"modellbau-jung.de":[["rc","disable","div","stay"]],"monorhinouscassaba.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"monroenews.com":[["nostif","gnt_mol_oy"]],"mooc.chaoxing.com":[["aeld","beforepaste"]],"morosedog.gitlab.io":[["set","checkAds","noopFunc"]],"moscow.shop.megafon.ru":[["set-cookie","cookie_toast","true"]],"msk1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"mvideo.ru":[["set-local-storage-item","COOKIE_NOTIFICATION_SUBMITED_v2","true"]],"my-code4you.blogspot.com":[["aopr","document.onkeydown"]],"my-rise.com":[["set-cookie","cb-enabled","accepted"]],"myc-media.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"mzk.starachowice.eu":[["aopw","adBlockDetected"]],"natureatblog.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"naukridisha.in":[["acs","document.onselectstart"]],"naver.com":[["aeld","/contextmenu|selectstart|dragstart/"]],"nbcbayarea.com":[["aeld","scroll"]],"nbclosangeles.com":[["aeld","scroll"]],"nbcnewyork.com":[["aeld","scroll"]],"ncertsolutions.guru":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"ndtvprofit.com":[["aopr","document.oncopy"]],"nebula.tv":[["set-local-storage-item","/^freeVideoFriendly/","$remove$"]],"newpharma.de":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"newpharma.fr":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"nfltraderumors.co":[["aopw","ondragstart"]],"ngs55.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"niederdorf.eu":[["set-cookie","ris_cookie_setting","1"]],"nightpoint.io":[["nofab"]],"nio.com":[["set-cookie","npp_analytical","0"]],"njherald.com":[["nostif","gnt_mol_oy"]],"noicetranslations.blogspot.com":[["rmnt","script","disableselect"]],"nordfishing77.at":[["set-cookie","cookie-preference","1"]],"northjersey.com":[["nostif","gnt_mol_oy"]],"nostracasa.com.br":[["ra","oncontextmenu|onselectstart|ondragstart"]],"novacad.fr":[["set-cookie","nov_rgpd_cookie_opt","1"]],"np-brijuni.hr":[["set-cookie","consent","0","","reload","1"]],"nsk-tv.narod.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"nullforums.net":[["rmnt","script","contextmenu"]],"nzbstars.com":[["ra","oncontextmenu"]],"nzherald.co.nz":[["set-cookie","apv","false"]],"octopusenergy.co.jp":[["set-local-storage-item","dismissedPrivacyCookieMessage","1"]],"odiario.com":[["aeld","copy"]],"oesterreichsenergie.at":[["set-cookie","oeCookiePolicyState","0"]],"okfurniture.co.za":[["set-cookie","amcookie_allowed","1"]],"oktea.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"olx.com.br":[["set-local-storage-item","open_modal_update_policy","1"]],"omroepbrabant.nl":[["set-local-storage-item","psh:cookies-other","false"],["set-local-storage-item","psh:cookies-seen","true"],["set-local-storage-item","psh:cookies-social","true"]],"onlinepenztarca.hu":[["set-local-storage-item","felhasznalo_cookie_preferencia","0"]],"ontivi.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"opencycle.com":[["set-cookie","cookie-preference","1"]],"opendoors.fi":[["set-cookie","cmplz_banner-status","dismissed"],["set-cookie","cmplz_marketing","allow"],["set-cookie","cmplz_preferences","allow"]],"openfinanza.it":[["acs","document.oncontextmenu"],["acs","document.ondragstart"],["aopw","disableEnterKey"]],"opportunitydesk.org":[["aopr","disable_copy"],["acs","document.ondragstart"]],"outdoorguide.com":[["aeld","copy"]],"oxax.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"paf.se":[["set-cookie","cookieConsent","1"]],"pandore-gendarmerie.org":[["set","realCookieBanner","undefined"]],"paplanvilag.hu":[["set","cookie_alert_overlay","noopFunc"]],"pc3mag.com":[["nostif","Adblocker","10000"]],"pecasauto24.pt":[["aeld","mousedown","function(t)"]],"perlentaucher.de":[["set","window.SteadyWidgetSettings.adblockActive","false"],["set","adblockerIsEnabled","false"]],"petenkoiratarvike.com":[["set-cookie","pfi_consent_necessary","granted","","reload","1"]],"pflegepitztal.at":[["set-cookie","ris_cookie_setting","1"]],"pickmypostcode.com":[["set-cookie","FPL-CookieNotice","true"]],"piecesauto.fr":[["aeld","mousedown","function(t)"]],"piecesauto24.lu":[["aeld","mousedown","function(t)"]],"platnik.e-pity.pl":[["set-cookie","efile-cookie-128","1"]],"poedb.tw":[["aopr","adBlockDetected"]],"poipiku.com":[["aeld","/contextmenu|copy|drag|dragstart/"]],"polar.sh":[["set-local-storage-item","cookie_consent","no"]],"polarsignals.com":[["set-cookie","PSCCookieConsent","false"]],"politico.eu":[["remove-cookie","xbc"]],"polyvsp.ru":[["aeld","contextmenu"]],"pontiacdailyleader.com":[["nostif","gnt_mol_oy"]],"postcourier.com.pg":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["aopw","stopPrntScr"],["aopw","ondragstart"],["aeld","/contextmenu|keydown|keypress|copy/"],["aopr","document.oncontextmenu"]],"posterstore.nz":[["set-cookie","synapse-cookie-preferences-set","true"]],"poughkeepsiejournal.com":[["nostif","gnt_mol_oy"]],"powerball.com":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"praxisplan.at":[["set-cookie","complianceCookie","on"],["set-cookie","trackingCookies","off"]],"prestobeer.com":[["set-cookie","age_verification","1"]],"priberam.org":[["aopr","document.documentElement.oncopy"]],"printedwaste.com":[["set-local-storage-item","cookieConsent","true"]],"produx.ch":[["set-cookie","cmplz_banner-status","dismissed"]],"profire.it":[["set-cookie","tincx_cookie_notice_accepted","true"]],"progress-index.com":[["nostif","gnt_mol_oy"]],"prolocotarquinia.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"psbank.ru":[["set-cookie","cookie-consent","true"]],"puma.com":[["set-cookie","pumacookies","1","","reload","1"]],"pureness.se":[["set-cookie","_pandectes_gdpr","1"]],"putlocker.pe":[["nosiif","_0x"]],"puzzle-binairo.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-kakurasu.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-sudoku.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.at":[["set-cookie","puzzleyou-at_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.dk":[["set-cookie","puzzleyou-dk_cookies_consent_allowlist","0","","reload","1"]],"qatarairways.com":[["set-cookie","accepted_functional","yes"],["set-cookie","accepted_marketing","no"],["set-cookie","allow_the_cookie","yes"],["set-cookie","cookie_visited","true"],["set-cookie","drcookie","true"]],"qrcode.best":[["nostif","ad_blocker_detector_modal"]],"quecan.com":[["set-cookie","AgeVerificationPopup-sections--16804669849816__age-verification-popup","1"]],"rachelli.it":[["set-cookie","rachelli-ita-cookie-categories","essential"]],"racked.com":[["nostif","adsBlocked"]],"racket.news":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"radioony.fm":[["set","pageService.initDownloadProtection","noopFunc"]],"railwebcams.net":[["set","realCookieBanner","undefined"]],"rapp.su":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"rdr.ucl.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"readawrite.com":[["set","securityTool.disableRightClick","noopFunc"],["set","securityTool.disableF12","noopFunc"],["set","securityTool.disableCtrlP","noopFunc"],["set","securityTool.disableCtrlS","noopFunc"],["set","securityTool.disablePrintScreen","noopFunc"],["set","securityTool.disablePrintThisPage","noopFunc"],["set","securityTool.disableElementForPrintThisPage","noopFunc"]],"readnovel.com":[["aeld","contextmenu"],["aopr","LBF.define"]],"redlionhandcross.co.uk":[["set-cookie","ce-cookie","N"]],"reebokwork.com":[["set-local-storage-item","consent_accepted","true"]],"reelcinemas.co.uk":[["set-cookie","a1wcc","all"]],"regenwald-schuetzen.org":[["set-cookie","cookie_consent_required","accepted","","reload","1"]],"region-bayreuth.de":[["set-local-storage-item","GDPR:RBI:accepted","false"]],"reise-zikaden.de":[["set","realCookieBanner","undefined"]],"renalandurologynews.com":[["remove-cookie","hmmet"]],"renault-autocenterprignitz-pritzwalk.de":[["set-cookie","hide-gdpr-bar","true"]],"renault-spenrath-juelich.de":[["set-cookie","hide-gdpr-bar","true"]],"repair.wd40.com":[["set-cookie","has-seen-cookie-notice","true","","reload","1"]],"rg.ru":[["set-cookie","cookie_consent","1"]],"ried.at":[["set-cookie","ris_cookie_setting","1"]],"ritten.eu":[["set-cookie","ris_cookie_setting","1"]],"romet.pl":[["ra","oncontextmenu"]],"routenote.com":[["acs","onload"]],"rovia.es":[["set-cookie","cookiesAccepted","1","reload","1"]],"roxi.tv":[["set-cookie","CookieConsent","true","","reload","1"]],"rt.com":[["set-cookie","rt-cb-approve","true"]],"running-green.de":[["set","realCookieBanner","undefined"]],"rvsq.gouv.qc.ca":[["set-cookie","_ck_o","1"]],"samenbank-berlin.de":[["set","realCookieBanner","undefined"]],"saricurls.de":[["set-cookie","_pandectes_gdpr","1"]],"sattledt.at":[["set-cookie","ris_cookie_setting","1"]],"saubusse-thermes.com":[["rc","unreadable-display","","stay"]],"saunahuus.de":[["set","realCookieBanner","undefined"]],"sbbrisk.com":[["acs","check","debugger"],["nosiif","_0x"]],"scholarship-exchange.open.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"schreiners-it.de":[["set","realCookieBanner","undefined"]],"schwechater.at":[["set","realCookieBanner","undefined"]],"scrolller.com":[["aeld","contextmenu"]],"sebgroup.com":[["set-cookie","AcceptedCookieCategories","1"]],"securityweek.com":[["rc","pum-open-overlay","body","stay"]],"seemueller.com":[["set-cookie","cookie-preference","1"]],"serasa.com.br":[["set-cookie","S_COOKIES_ACCEPTED","true"]],"settings.gg":[["set-local-storage-item","COOKIE_CONSENT","1"]],"ship.pirateship.com":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"shonenjumpplus.com":[["set-local-storage-item","202306151200.shown.production","true"]],"shop.3m.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.almawin.de":[["set-cookie","cookie-preference","1"],["set-cookie","psd-google-ads-enabled","0"],["set-cookie","psd-gtm-activated","1"],["set-cookie","wishlist-enabled","1"]],"shop.atunas.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.hicksnurseries.com":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"shop.kemei.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shortform.com":[["aeld","/contextmenu|mousedown/","return\"undefined\""]],"sidelaunchbrewing.com":[["set-cookie","isAnAdult","true"]],"simkort.se":[["rc","wcc-popup-overflow","body","stay"]],"simpleswap.io":[["set-local-storage-item","cookies-notification-message-is-hidden","true"]],"sinemalar.com":[["set-cookie","cookie-disclaimer","1"]],"sklep-agroland.pl":[["aeld","/^(?:contextmenu|dragstart|selectstart)$/"]],"sl-landschaftsgestaltung.de":[["set","realCookieBanner","undefined"]],"smart.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"smartfilmbase.se":[["set-cookie","allow-all","0","","reload","1"],["set-cookie","analysis-cookies","0"],["set-cookie","user-cookies-set","1"]],"smartsavebank.co.uk":[["set-cookie","consent_to_cookies","true"]],"snowcrows.com":[["rmnt","script",".onerror"]],"sokolow-mlp.pl":[["acs","document.onmousedown"]],"songs-wayaku.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"soquest.xyz":[["set-local-storage-item","soCookiesPolicy","1"]],"spearheadbeer.com":[["set-cookie","isAnAdult","true"]],"spielen.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"sporttotal.tv":[["no-fetch-if","doubleclick"],["set","HTMLImageElement.prototype.onerror","undefined"]],"springfieldspringfield.co.uk":[["aopr","addLink"]],"srf.nu":[["set-cookie","CookieConsent","necessary"]],"st.johann.at":[["set-cookie","ris_cookie_setting","1"]],"stagewise.io":[["set-cookie","stagewise-cookie-consent","denied"]],"starzunion.com":[["aeld","/^(contextmenu|mousedown|keydown)$/","preventDefault"]],"statesman.com":[["nostif","gnt_mol_oy"],["aopr","googletag"]],"steinmetz-baldauf.de":[["set-cookie","essentiell","1","","reload","1"],["set-cookie","googlemaps","1"],["set-cookie","youtube","1"]],"stewes.de":[["set","HB.CookieSettings.init","noopFunc"]],"stlorenzen.eu":[["set-cookie","ris_cookie_setting","1"]],"streaminglearningcenter.com":[["nostif","ads"]],"stricken-online.com":[["set","realCookieBanner","undefined"]],"stroga-festival.de":[["set-cookie","third-party","required","","reload","1"]],"studienwahl.de":[["set-cookie","mrm_gdpr","1"],["set-cookie","necessary_consent","accepted"]],"studiobookr.com":[["set-local-storage-item","cookiesAllowed","false"]],"substack.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"sunshine.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"superalink.com":[["set-cookie","cookies_allowed","false"]],"superset.sh":[["set-local-storage-item","superset-analytics-consent","denied"]],"supertipp-online.de":[["set","realCookieBanner","undefined"]],"supporthub.experian.co.uk":[["set-cookie","cookie_declined","true"]],"sysdream.com":[["set-cookie","tarteaucitron","false"]],"tadu.com":[["aeld","/contextmenu|selectstart/"]],"taste-market.de":[["set-cookie","cookie-preference","1"]],"tastingtable.com":[["aeld","copy"]],"technicpack.net":[["acs","document.createElement","admiral"]],"technikdirekt.de":[["set-cookie","cookie-preference","1"]],"tekloggers.com":[["ra","oncontextmenu|onkeydown|onmousedown"]],"telenovelas-turcas.com.es":[["set","console.clear","undefined"],["nostif","_detectLoop"]],"telepizza.es":[["set-cookie","AcceptAnalyticsCookies","false"],["set-cookie","AcceptFunctionalCookies","true"],["set-cookie","AcceptNonFunctionalCookies","false"]],"telyn610zoanthropy.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"terramirabilis.ro":[["rmnt","script","wccp"],["ra","oncontextmenu"]],"theaircurrent.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"theanchorinnirby.co.uk":[["set-cookie","ce-cookie","N"]],"theasianparent.com":[["acs","document.onselectstart","disableselect"]],"theateramrand.de":[["set-cookie","cookiebanner","essential"]],"thebaggiestore.com":[["set-cookie","goodav_block_popup-3146","0"]],"thebeerstore.ca":[["set-cookie","cookies_popup","true"]],"thecavershamrosereading.co.uk":[["set-cookie","ce-cookie","N"]],"thedriftmag.com":[["remove-cookie","dpp_paywall"]],"thehouseofportable.com":[["aeld","/contextmenu|selectstart/"]],"theleafchronicle.com":[["nostif","gnt_mol_oy"]],"thesaturdaypaper.com.au":[["remove-cookie","xbc"]],"theweathernetwork.com":[["set-cookie","pelm_consent","1"],["set-cookie","pelm_cstate","1"]],"thinkingaustralia.com":[["set-cookie","surbma-gpga","no"]],"tibber.com":[["set-cookie","tibber_cc_essential","approved","","reload","1"]],"tiesse.com":[["set","realCookieBanner","undefined"]],"tiktok.com":[["set-session-storage-item","webapp_first_open_cta","1"],["aeld","contextmenu","preventDefault"]],"timberland.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"timeoutdoors.com":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"timesonline.com":[["nostif","gnt_mol_oy"]],"timesreporter.com":[["nostif","gnt_mol_oy"]],"timponline.ro":[["aopw","disable_copy"],["aopw","disableSelection"],["aopw","nocontext"]],"tinyppt.com":[["aopw","document.ondragstart"],["aopw","disableEnterKey"],["acs","document.oncontextmenu"]],"titulky.com":[["acs","$","\"input\""]],"tmnascommunity.eu":[["set-cookie","firebox_3330","1"]],"tobroco-giant.com":[["set-cookie","cookieWall","1"],["set-cookie","cookieWallOptIn","0"]],"togetogebox.org":[["rmnt","style","-ms-user-select: none"]],"tohkaishimpo.com":[["ra","oncontextmenu|onselectstart"]],"toll.no":[["set-cookie","cookieConsent","rejected"]],"topperlearning.com":[["aeld","/contextmenu|keydown/"]],"traffihunter.hu":[["rc","darken","body"]],"trakteer.id":[["aeld","/contextmenu|mousedown/"]],"translate.goog":[["aeld","/contextmenu|keyup|keydown/"]],"trendpet.de":[["set-cookie","cookie-preference","1"]],"tritinia.com":[["acs","jQuery","keydown"],["aopr","document.oncontextmenu"],["aopr","disable_copy"]],"tropicalida.com.ec":[["set-local-storage-item","CookiesConsent","1"]],"truckmall.sk":[["set-cookie","cookies_confirmed","1","","reload","1"]],"truphone.com":[["set-cookie","cookie_preferences","Essential"]],"trygogo.com":[["set-cookie","allowGetPrivacyInfo","true"]],"tube8.com":[["set-cookie","t8disclaimer","1"]],"tui.fi":[["rc","no-scroll","body","stay"]],"tunovelaligera.com":[["rmnt","script","/wccp|contextmenu/"],["rmnt","style","/wccp|user-select/"]],"tutu.ru":[["set-cookie","disclaimer_show","1"]],"tv.youtube.com":[["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"]],"tweakers.net":[["set","tweakersConfig.userConfiguredConsent.googlemaps.approved","true"],["set","tweakersConfig.userConfiguredConsent.knightlab.approved","true"],["set","tweakersConfig.userConfiguredConsent.omny.approved","true"],["set","tweakersConfig.userConfiguredConsent.pcnltelecom.approved","true"],["set","tweakersConfig.userConfiguredConsent.soundcloud.approved","true"],["set","tweakersConfig.userConfiguredConsent.streamable.approved","true"],["set","tweakersConfig.userConfiguredConsent.youtube.approved","true"]],"twomates.de":[["set-cookie","gdpr-google-analytics","false"]],"ufs.br":[["set-cookie","www.ufs.br","1"]],"ukbrewerytours.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"umweltportal.nrw.de":[["set-cookie","COOKIE_SETTINGS_SAVED","true"],["set-cookie","COOKIE_SUPPORT","true"]],"urbanoutfitters.com":[["set-local-storage-item","modalViewed","1"]],"usnews.com":[["set-cookie","gdpr_agreed","4"]],"uticaod.com":[["nostif","gnt_mol_oy"]],"uvetgbt.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"v2.xmeye.net":[["set-local-storage-item","showCookieUse","false"]],"vacanceo.com":[["set-cookie","cookie_consent","0"]],"vajiramandravi.com":[["set-cookie","GSAPR26","true"]],"vans.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"vansprint.de":[["set-cookie","cookie-preference","1"]],"velo-antwerpen.be":[["set-cookie","Cookies_Preferences","accepted"],["set-cookie","Cookies_Preferences_Analytics","declined"]],"vilgain.com":[["set-cookie","consent","0","","reload","1"]],"visaonoticias.com":[["ra","oncontextmenu|onselectstart|ondragstart|onclick"]],"vivaldi.com":[["set-cookie","acceptedCookies","true"]],"vivenu.com":[["set-cookie","cookies-acknowledged","true","","reload","1"]],"vlachakis-systems.com":[["set-cookie","cookieSettings","11","","reload","1"]],"voedingswaardetabel.nl":[["set","document.oncontextmenu","null"],["set","document.onselectstart","null"]],"vokey.com":[["set-cookie","enewsOptin","1"]],"volksfest-nuernberg.de":[["set","realCookieBanner","undefined"]],"voronezh1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"votegroup.de":[["set-cookie","dsgvo-mark","no"],["set-cookie","dsgvo-stat","yes"]],"voxweb.nl":[["set-cookie","cookie_settings","1"]],"vrbo.com":[["rc","has-uitk-sheet","body","stay"]],"vvdailypress.com":[["nostif","gnt_mol_oy"]],"wasza-farma.pl":[["ra","oncontextmenu"]],"watch.co.uk":[["set-local-storage-item","cookieConsentV2","1"]],"watch.sonlifetv.com":[["set-cookie","gcp","1","","reload","1"]],"waves4you.com":[["aost","String.prototype.charCodeAt","ai_"]],"wayfair.de":[["set-cookie","user_cookie_prefs","1"]],"wcnc.com":[["aeld","/^(mouseout|mouseleave)$/"]],"web.bunq.com":[["set-local-storage-item","bunq:CookieConsentStore:isBannerVisible","false"]],"weibo.com":[["nowoif","layerid","1"]],"welte-glasuren.com":[["set","realCookieBanner","undefined"]],"werkenbijaswatson.nl":[["set-cookie","cookieConsent","allowed"]],"wfmynews2.com":[["aeld","/^(mouseout|mouseleave)$/"]],"winmeen.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"wired.com":[["aopw","journeyCompilerGateway"]],"wolff-mueller.de":[["rc","dp--cookie-consent","body","stay"]],"women.com":[["aeld","copy"]],"woolpackstokemandeville.co.uk":[["set-cookie","ce-cookie","N"]],"wp-ninjas.de":[["set","realCookieBanner","undefined"]],"wpb.shueisha.co.jp":[["aeld","contextmenu","preventDefault"]],"wps.com":[["set-cookie","ga-disable-UA-126693142-3","true"],["set-cookie","gdpr","1"]],"wwltv.com":[["aeld","/^(mouseout|mouseleave)$/"]],"www-lincolnshirelive-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www.youtube.com":[["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"]],"xfce-look.org":[["rmnt","script","btnHtml"],["nano-stb","count"]],"xhamster19.com":[["set-cookie","cookie_accept","1"]],"xhchannel.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xv-ru.com":[["set","xv.disclaimer.displayCookiePopup","noopFunc"]],"xxxcams.com.es":[["set-cookie","disclaimerSeen","1","","reload","1"]],"xxxtv.us":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"yaledailynews.com":[["acs","$","undefined"]],"ydr.com":[["nostif","gnt_mol_oy"]],"yenivatan.at":[["set","realCookieBanner","undefined"]],"yesstyle.com":[["set-cookie","yshccmfg","true","","reload","1"]],"ymovies.vip":[["set","devtoolsDetector.launch","noopFunc"]],"youngimages.de":[["set","realCookieBanner","undefined"]],"yvonnebennetti.com":[["set-cookie","allow_cookie","false"],["set-cookie","MCPopupClosed","yes"]],"zivahub.uct.ac.za":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"zlavomat.sk":[["set-cookie","c","0","","reload","1"]],"zoommer.ge":[["set-cookie","zoommer-cookie_agreed","true"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
