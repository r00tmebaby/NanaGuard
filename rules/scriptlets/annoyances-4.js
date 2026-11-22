/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"161.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"2mnews.ro":[["rmnt","script","/oncontextmenu|wccp/"]],"35.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"407etr.com":[["set-cookie","cookieConsent","accepted"]],"59northwheels.se":[["set-cookie","cookie_accepted","1"]],"71.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"7misr4day.com":[["acs","document.oncontextmenu"],["acs","document.onselectstart"],["aopw","disableEnterKey"]],"93.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"addictinggames.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"addons.opera.com":[["nostif","showOverlay"]],"adidas.at":[["set-cookie","notice_preferences","2"]],"adidas.be":[["set-cookie","notice_preferences","2"]],"adidas.co.in":[["set-cookie","notice_preferences","2"]],"adidas.com.ph":[["set-cookie","notice_preferences","2"]],"adidas.cz":[["set-cookie","notice_preferences","2"]],"adidas.dk":[["set-cookie","notice_preferences","2"]],"adidas.fi":[["set-cookie","notice_preferences","2"]],"adidas.it":[["set-cookie","notice_preferences","2"]],"adidas.mx":[["set-cookie","notice_preferences","2"]],"adidas.ru":[["set-cookie","notice_preferences","2"]],"adslayuda.com":[["set","better_ads_adblock","null"]],"adslink.pw":[["aeld","contextmenu","preventDefault"],["acs","document.onkeydown"]],"adventurespiele.net":[["set-local-storage-item","dataProtectionInfoAccepted","true"]],"afrikmag.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"ahorn24.de":[["set-cookie","accept_cookies2","true","","reload","1"]],"aida64.co.uk":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"airbubu.com":[["set-cookie","allowGetPrivacyInfo","true"]],"alamogordonews.com":[["nostif","gnt_mol_oy"]],"alfa.com.ec":[["set-local-storage-item","CookiesConsent","1"]],"alpewa.com":[["set-cookie","tincx_cookie_notice_accepted","true"]],"andsafe.de":[["set-local-storage-item","user-has-consent-decision","true"]],"anglingdirect.co.uk":[["set-cookie","amcookie_allowed","1"],["set-cookie","amcookie_policy_restriction","allowed"]],"anilib.me":[["set-local-storage-item","cookies-toast-shown","true"]],"anitrend.co":[["set-local-storage-item","anitrend_analytics_consent","denied"]],"anns.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"app.arzt-direkt.de":[["set-cookie","ARE_DSGVO_PREFERENCES_SUBMITTED","true"]],"app.klarna.com":[["set-local-storage-item","safe-storage/v1/tracking-consent/trackingConsentAdvertisingKey","false"],["set-local-storage-item","safe-storage/v1/tracking-consent/trackingConsentAnalyticsKey","false"],["set-local-storage-item","safe-storage/v1/tracking-consent/trackingConsentMarketingKey","false"]],"app.zasta.de":[["set-cookie","CookieConsent","true"]],"arabesque-formation.org":[["set-cookie","cmplz_banner-status","dismissed"]],"archon.gg":[["set","__NEXT_DATA__.props.pageProps.adPlacements","undefined"]],"art-harder.de":[["set-cookie","Consent","0"]],"arturofuente.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-non-necessary","no"]],"arweave.org":[["set-local-storage-item","user-preference","false"]],"ashleyfurniture.com":[["set-local-storage-item","QMOptIn","false"]],"asics.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"asics.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"athletic.net":[["acs","$","blur"]],"atlanticcouncil.org":[["set-cookie","cookieNotify","dismissed"]],"atribuna.com.br":[["ra","oncontextmenu|onkeydown"]],"aura.american.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"autoczescionline24.pl":[["aeld","mousedown","function(t)"]],"autodude.se":[["set-local-storage-item","cookieConsent","necessary"]],"autohaus24.de":[["set-cookie","user_accepted_cookies","1"]],"autoride.sk":[["set-local-storage-item","cookies_marketing_consent","false"],["set-local-storage-item","cookies_necessary_consent","true"],["set-local-storage-item","cookies_statistics_consent","false"]],"autotrader.ca":[["set-cookie","cbnr","1"]],"avell.com.br":[["set-cookie","cookiesConsent","true"]],"aventurainromania.ro":[["rmnt","script","document.oncontextmenu"]],"azcentral.com":[["nostif","gnt_mol_oy"]],"bad-scherer.de":[["set-cookie","_cookieaccept","1"],["set-cookie","_cookietools","1"]],"badgerandblade.com":[["aopw","adBlockDetected"]],"bancobpm.it":[["set-cookie","consent_glassbox","false"],["set-cookie","consent_mktg","false"]],"bar-tek.com":[["set-cookie","cookie-preference","1"]],"barntgreeninn.co.uk":[["set-cookie","ce-cookie","N"]],"basta.berlin":[["set","realCookieBanner","undefined"]],"baumarkt-vogl.at":[["set","realCookieBanner","undefined"]],"bennettrogers.mysight.uk":[["set-local-storage-item","hasConsent","false"]],"besteonderdelen.nl":[["aeld","mousedown","function(t)"]],"bgld.wifi.at":[["set-cookie","consent","true"]],"bhaptics.com":[["set-cookie","accepted_cookies","yes"]],"bhaskar.com":[["set-local-storage-item","HAS_ACCEPTED_PRIVACY_POLICY","true"],["set","Object.prototype.dbskrat","true"]],"bhbikes.com":[["set-cookie","COOKIELEGAL_BH_V2","N"]],"bianity.net":[["aeld","contextmenu"]],"bierspot.de":[["set","realCookieBanner","undefined"]],"bike-components.de":[["set-cookie","privacy-202605041328","0","","reload","1"]],"bikepro.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"biographyonline.net":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"bitbucket.io":[["set-cookie","atl-gdpr-consent","0010000"]],"blablacar.com.tr":[["set-cookie","_cookies_v2","1"]],"blablacar.rs":[["set-cookie","_cookies_v2","1"]],"blasianluvforever.com":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"blaze.bet.br":[["set-cookie","accept_policy_regulation","1"]],"blommerscoffee.shipping-portal.com":[["set-local-storage-item","acceptedCookies","false"]],"bloosz.nl":[["set-cookie","cookie_preference","functional"]],"blueraindrops.com":[["set","lepopup_abd_enabled",""],["acs","document.oncontextmenu"]],"bonduelle.ru":[["set-cookie","cookie_locales","true"]],"booking.reederei-zingst.de":[["set-cookie","functionality","false"],["set-cookie","performance","false"],["set-cookie","targeting","false"]],"box-manga.com":[["aeld","contextmenu"]],"braunau.at":[["set-cookie","ris_cookie_setting","1"]],"bricksrus.com":[["aopr","document.oncontextmenu"]],"brownsboys.com":[["aopr","document.onselectstart"]],"buf.build":[["set-cookie","allowCookies","yes"]],"businessemailetiquette.com":[["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"bw.vdk.de":[["set-local-storage-item","vdk-iframe-enabled","true"],["set-local-storage-item","vdk-required-enabled","true"],["set-local-storage-item","vdk-status","accept"]],"bygge-anlaegsavisen.dk":[["set-cookie","acceptCookies","Functional"]],"c315.cn":[["ra","oncontextmenu|onselectstart|oncut|oncopy"]],"calendardate.com":[["set-cookie","warn","true"]],"calendarpedia.co.uk":[["aopr","__cmpGdprAppliesGlobally"]],"calendly.com":[["set-cookie","gdpr_dismissal","true"]],"calvinklein.com.br":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"camere-live.ro":[["rmnt","script","'contextmenu'"]],"camereliveromania.ro":[["rmnt","script","/wpcp|contextmenu/"]],"campergarage.es":[["set-cookie","cmplz_banner-status","dismissed"]],"campingdusoleil.com":[["rc","unreadable-display","","stay"]],"carinfo.app":[["set-local-storage-item","userConsent","true"]],"carlson.fi":[["set-cookie","consentAdvertising","false"],["set-cookie","consentAnalytics","false"],["set-cookie","consentPersonalization","false"],["set-cookie","privacyExpiration","1"],["set-cookie","privacySettings","1"]],"cashback-cards.ch":[["set-cookie","sc-privacy-settings","true"]],"cepuluh.com":[["ra","oncontextmenu|onkeydown|onmousedown"]],"chaesbueb.ch":[["set-cookie","chaesbueb-che-cookie-categories","essential"]],"china-central-consultants.com":[["set","realCookieBanner","undefined"]],"cinemark.com.br":[["set-cookie","cookies_config","deny"]],"citas.in":[["aeld","copy"]],"ciweimao.com":[["aopr","document.oncontextmenu"],["aopw","document.body.oncopy"]],"cjonline.com":[["nostif","gnt_mol_oy"]],"cklenk.de":[["set-cookie","cookie-preference","1"]],"cleverbot.com":[["set-cookie","note","1"]],"clinicadelsudor.es":[["set-cookie","allow_hiper_cookie","true"]],"clinicalondon.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"clk.sh":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"clockks.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"clujust.ro":[["acs","document.oncontextmenu"],["acs","document.ondragstart"],["aopw","disable_hot_keys"]],"code.likeagirl.io":[["set-local-storage-item","201805-policy|accepted","1"]],"coin360.com":[["set-cookie","isCookiesAccepted","true"]],"colors.sonicthehedgehog.com":[["set","document.oncontextmenu","null","3"],["set","document.body.oncontextmenu","null","3"],["aeld","DOMContentLoaded","load"]],"comingsoon.net":[["aopr","googletag"]],"computacenter.com":[["set-cookie","consent_seen","1"]],"comune.naturno.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.parcines.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.plaus.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.proves.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.selvadivalgardena.bz.it":[["set-cookie","ris_cookie_setting","1"]],"concerto.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"consordini.com":[["rc","show--consent","body","stay"]],"cottonon.com":[["set-cookie","gdprPolicyAccepted","true"]],"countess.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"courierpress.com":[["nostif","gnt_mol_oy"]],"cowcotland.com":[["rmnt","script","/adbl/i"]],"crenolibre.fr":[["set-cookie","cookieconsent","true"]],"crewbase.net":[["aeld","contextmenu"],["acs","document.onkeydown"]],"crfop.gdos.gov.pl":[["set-cookie","RODOclosed","true"]],"cricketgully.com":[["set-local-storage-item","cookieConsent","true"]],"cristoiublog.ro":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"]],"crunchyscan.fr":[["acs","document.oncontextmenu"]],"cryptofalka.hu":[["set-local-storage-item","cookieConsent","1"]],"cryptorank.io":[["set-local-storage-item","show_cookies_popup","false"]],"csiplearninghub.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"cua.ai":[["set-local-storage-item","cookie-consent","accepted"]],"cultistcircle.com":[["set-local-storage-item","cookieConsent","1"]],"cut-tec.co.uk":[["set-cookie","termsfeed_pc1_notice_banner_hidden","true"]],"cvut.cz":[["set-local-storage-item","ctu-cm-a","0"],["set-local-storage-item","ctu-cm-m","0"],["set-local-storage-item","ctu-cm-n","1"]],"cwallet.com":[["set-local-storage-item","ns_cookies","1"]],"cyberdom.blog":[["rmnt","script","keyCode"]],"cyberforum.de":[["rc","dp--cookie-consent","body","stay"]],"dagvandewetenschap.be":[["set-cookie","__cookie_consent","false"]],"dailyrecord.com":[["nostif","gnt_mol_oy"]],"dake.es":[["set-cookie","cmplz_banner-status","dismissed"]],"dar.nl":[["set-cookie","dar_ca","true","","reload","1"],["set-cookie","township_tooltip","true"]],"datamask.app":[["set-local-storage-item","cookie-permission","false"]],"datezone.com":[["set-cookie","cookie_consent","necessary"]],"daysoftheyear.com":[["aopr","googletag"]],"dba-oracle.com":[["ra","oncontextmenu|ondragstart|onselectstart"]],"demingheadlight.com":[["nostif","gnt_mol_oy"]],"descopera.ro":[["acs","document.oncontextmenu"]],"devagroup.pl":[["set-cookie","deva_accepted","yes"]],"dhbbank.com":[["set-cookie","UserCookieLevel","1"],["set-cookie","cookiePreference","1"]],"dhbbank.de":[["set-cookie","UserCookieLevel","1"],["set-cookie","cookiePreference","1"]],"die-werbeschmiede.de":[["set","realCookieBanner","undefined"]],"digitaltrends.com":[["aopr","HTMLIFrameElement"]],"dilynakotle.cz":[["set-cookie","cookie-bar","0"]],"dispatch.com":[["nostif","gnt_mol_oy"]],"docs.eclipse.xyz":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.skydeck.ai":[["set-cookie","__gitbook_cookie_granted","no"]],"dollarvr.com":[["aopr","nocontextmenu"],["acs","document.oncontextmenu"],["acs","document.ondragstart"]],"dosenmatrosen.de":[["set-cookie","cookie-preference","1","","reload","1"]],"dr-douxi.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"drive4brands.de":[["set","realCookieBanner","undefined"]],"droptica.com":[["set-cookie","gtm-scripts-accepted-cookies-1712054031","required"]],"drum.um.edu.mt":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"e-chladiva.cz":[["set-cookie","gdpr","1"]],"easyticket.de":[["set-cookie","consent","functional"]],"easywintergarten.de":[["set-cookie","chcCookieHint","1","","reload","1"]],"echome.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"eci.ie":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"eco-toimistotarvikkeet.fi":[["set-cookie","AcceptKeksit","0","","reload","1"]],"ecologi.com":[["set-cookie","ecologi_cookie_consent_20220224","false"]],"economictimes-indiatimes-com.translate.goog":[["rmnt","script","var lh = location.host;"]],"edinborocastlepub.co.uk":[["set-cookie","ce-cookie","N"]],"ehlers-danlos.org":[["set-cookie","edsuk_coookie_control","4"],["set-cookie","edsuk_coookie_functional","1"]],"einthusan.tv":[["set","login_completed","true"]],"ekiwi-blog.de":[["set","realCookieBanner","undefined"]],"electronicacerler.com":[["set-cookie","acepta_cookies_funcionales","1"],["set-cookie","acepta_cookies_obligatorias","1"],["set-cookie","acepta_cookies_personalizacion","1"]],"elgiganten.dk":[["set","cicc.cookie_cat_statistic","true"]],"elisazunder.de":[["set","realCookieBanner","undefined"]],"ellwoodcityledger.com":[["nostif","gnt_mol_oy"]],"embed.su":[["aeld","keydown","123"],["nosiif","devtool"]],"emmi-caffelatte.com":[["set-cookie","cafe-latte-che-cookie-categories","essential"]],"emminutritionals.com":[["set-cookie","emmi-nld-cookie-categories","essential"]],"empathy.com":[["set-cookie","CookieConsent","false"]],"enac.es":[["set-cookie","lopd_medicion","2"]],"energylevel.net":[["set-local-storage-item","cookie_consent","true"]],"engie.be":[["set-cookie","cookie-consent","required"]],"eninternetgratis.com":[["rc","show--consent","body","stay"]],"entail.ai":[["set-cookie","cookie_consent_status","rejected","","reload","1"]],"environment.data.gov.uk":[["set-cookie","defra-cookie-banner-dismissed","true","","reload","1"]],"epenta.sk":[["set-cookie","I6COMPARECOUNT","0"],["set-cookie","I6IISCOOKIECONSENT0","n","","reload","1"]],"epochtimes.nl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"erc51.ru":[["set-local-storage-item","cookiesAccepted","false"]],"esaral.com":[["aopw","document.oncontextmenu"]],"esercizinglese.com":[["aopw","adBlockDetected"]],"etherpad.org":[["set-cookie","cookiesAccepted","false"]],"euroball.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"eurooptyk.com.pl":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"everbloom.eu":[["set","realCookieBanner","undefined"]],"evium.de":[["set-local-storage-item","tracking-state-v2","deny"]],"exaktacreative.se":[["set-cookie","user_cookie_consent","1"]],"experciencia.com":[["aopr","disableSelection"]],"experienciasfree.com":[["set-cookie","2x1cookies","1"]],"extremeaudio.de":[["set-cookie","cookie-preference","1"]],"fabioambrosi.it":[["acs","document.oncontextmenu"]],"fabricjs.com":[["nostif","()","4000"]],"faduobra.com":[["set-cookie","allowGetPrivacyInfo","true"]],"fahrstil.cc":[["set","realCookieBanner","undefined"]],"famos.bz.it":[["set-cookie","ris_cookie_setting","1"]],"fantasyfootballscout.co.uk":[["rmnt","script","reviveScroll","excludes","self.__next"]],"fidlock.com":[["set-cookie","cookie-preference","1"]],"finewoodworking.com":[["set-cookie","taunton_user_consent_advertising","false"],["set-cookie","taunton_user_consent_analytics","false"],["set-cookie","taunton_user_consent_submitted","true"]],"firescans.xyz":[["acs","jQuery","hmwp_is_devtool"]],"firestream.to":[["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"firstclasswatches.co.uk":[["set-cookie","cky-action","yes"],["set-cookie","cookieyes-functional","no"],["set-cookie","cookieyes-necessary","yes"],["set-cookie","cookieyes-other","no"]],"fitnesstukku.fi":[["set-cookie","set_functional_cookies","1"],["set-cookie","set_necessary_cookies","1"]],"flanagansappleliverpool.co.uk":[["set-cookie","ce-cookie","N"]],"flugladen.de":[["set-cookie","cookieConsentLevel","functional"]],"fmhikayeleri.com":[["acs","document.oncontextmenu"]],"fobizz.com":[["set","realCookieBanner","undefined"]],"focusonreproduction.eu":[["set-cookie","cmplz_banner-status","dismissed"]],"ford-bodach-borgentreich.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-diermeier-muenchen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-gerstmann-duesseldorf.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hatzner-karlsruhe.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hga-windeck.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-nrw-garage-duesseldorf.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.nl":[["set-cookie","cookieAcknowledged","true"]],"foto-shooting.ch":[["set","realCookieBanner","undefined"]],"foxvalleyfoodie.com":[["aopr","__cmpGdprAppliesGlobally"]],"freeforums.net":[["aeld","scroll"]],"freereadnovel.online":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"freshdays-shop.com":[["set-cookie","allowGetPrivacyInfo","true"]],"freshis.com":[["set-cookie","accept_cookies","accepted"]],"fujirumors.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"funniermoments.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"gabriel-godard.com":[["rc","unreadable-display","","stay"]],"gamershit.altervista.org":[["aopr","document.oncontextmenu"]],"gandwfurniture.co.uk":[["set-cookie","as-set-cookies","true","","reload","1"]],"gardeningknowhow.com":[["set-cookie","FTR_Article_PageView","2"]],"garyfeinbergphotography.com":[["aeld","contextmenu"]],"gasspisen.se":[["set-cookie","user_cookie_consent","false"]],"gasthof-riefenkopf.de":[["set-cookie","Consent","0"]],"gdh.digital":[["set-local-storage-item","cookieBarVisible","false"]],"gdi-sh.de":[["set-cookie","externalVideosEnabled","true"],["set-cookie","gsbbanner","closed"]],"gedik.com":[["set-session-storage-item","acceptCookies","false"]],"geizhals.eu":[["set-local-storage-item","dnt_message_shown","1"]],"gemeinde.pfalzen.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.ritten.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.schenna.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.stchristina.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.stpankraz.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.wolkensteiningroeden.bz.it":[["set-cookie","ris_cookie_setting","1"]],"generalprepper.com":[["set-cookie","cookie_accepted","1"]],"geniusjw.com":[["acs","document.oncontextmenu"]],"geosfreiberg.de":[["set-cookie","hidecookiesbanner","1"],["set-cookie","no_cookies","1"]],"getemoji.com":[["set-session-storage-item","fs.adb.dis","1"]],"ggwash.org":[["set","Object.prototype.bgOverlay","noopFunc"],["set","Object.prototype.fixedContentPos","noopFunc"]],"gigasport.at":[["set-cookie","consentAll","1"]],"gmx.com":[["set-cookie","euconsent-bypass","1"],["aeld","mouseout","openLayer"]],"godtlevert.no":[["set-local-storage-item","force_hide_cookie_dialog","1"]],"gonxt.com":[["set-local-storage-item","isAllowCookies","true"]],"gosch.de":[["set","realCookieBanner","undefined"]],"goupstate.com":[["nostif","gnt_mol_oy"]],"grandprixradio.dk":[["set-cookie","advertisement-age-show-alcohol","false"],["set-cookie","advertisement-age-show-gamble","false"],["set-cookie","analytics_cookies","0"],["set-cookie","cookies_accepted","1","","reload","1"],["set-cookie","tracking_cookies","0"]],"granfondo-cycling.com":[["no-xhr-if","googlesyndication","length:10"]],"graybar.com":[["set-cookie","cookie-notification","ACCEPTED","","reload","1"]],"greaseball6eventual20.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"greenvilleonline.com":[["nostif","gnt_mol_oy"]],"greubelforsey.com":[["set-local-storage-item","rgpd.consent","1"]],"guard.io":[["set-cookie","cookie_consent_seen","1"]],"hajduk.hr":[["set-cookie","gdpr-cookies","1"]],"handelsbanken.com":[["set-cookie","shb-consent-cookies","false"]],"handelsbanken.no":[["set-cookie","shb-consent-cookies","false"]],"hartfordbusiness.com":[["set-cookie","Drupal.visitor.WEBSITECOOKIEALLOWED","yes"]],"hearthstone-decks.net":[["acs","jQuery","ai_check"]],"heatstore.eu":[["set-cookie","consent","true"]],"hela-shop.eu":[["set-cookie","cookie-preference","1"]],"helitransair.com":[["set-cookie","privacyLevel","2","","reload","1"]],"helmut-fischer.com":[["set-cookie","cookie-level-v4","0"]],"hifitest.de":[["set-cookie","cookie-set-popup","0","","reload","1"]],"historianet.fi":[["set","cicc.cookie_cat_statistic","true"],["set","cicc.cookie_cat_functional","true"],["set","cicc.cookie_cat_marketing","true"]],"hitech-gamer.com":[["set-cookie","htg_consent","0"]],"hitproversion.com":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"homebuilding.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"hongxiu.com":[["aeld","contextmenu"],["aopr","LBF.define"]],"hopeandbearreading.co.uk":[["set-cookie","ce-cookie","N"]],"horizonte.com":[["set","realCookieBanner","undefined"]],"hotelborgia.com":[["set-cookie","cookie","1","","reload","1"],["set-cookie","cookie-analytics","0"]],"hotleaks.tv":[["aeld","contextmenu","preventDefault"],["aeld","keydown","123"]],"housedigest.com":[["aeld","copy"]],"hoyolab.com":[["aeld","contextmenu","","elements","img[no-copy=\"true\"]"],["aeld","contextmenu","preventDefault","elements",".viewer-container"]],"hqq.to":[["set","document.oncontextmenu","null"],["set","document.onkeydown","trueFunc"],["nostif","debugger"],["set","console.clear","noopFunc"]],"hscollective.org":[["set-cookie","CookieConsent","Necessary","","reload","1"]],"hulnews.top":[["acs","document.oncontextmenu"],["aopw","stopPrntScr"]],"hume.ai":[["set-cookie","cookieBar-cookies-accepted","true"]],"hypotheker.nl":[["set-cookie","trackingConsent","1"]],"ilovefreesoftware.com":[["aost","getSelection","quoty-public"]],"imkershoperzgebirge.de":[["rc","disable","div","stay"]],"immobilien-skiba.de":[["set","realCookieBanner","undefined"]],"impots.gouv.fr":[["set","PASSER_videoPAS_apres","0"]],"imprints.de":[["set","realCookieBanner","undefined"]],"inderes.fi":[["set-cookie","inderes_consent","necessary"]],"industrialphysics.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"infoplease.com":[["nostif","show"]],"infotrucker.ro":[["rmnt","script","oncontextmenu"]],"inmobi.com":[["set-cookie","cookie-pref","rejected"]],"innovationsstiftung-bildung.at":[["set-cookie","cookieconsent_status_new","1"]],"inspections.vcha.ca":[["set-cookie","agreedToCookiesanon","1"]],"instagram.com":[["set","_sharedData.is_whitelisted_crawl_bot","true"]],"instantoffices.com":[["set-cookie","cookieConsent","1"]],"instantspoursoi.fr":[["set-local-storage-item","agreeToCookie","false"]],"intergate.info":[["set","document.oncontextmenu","null"]],"invado.pl":[["aeld","/contextmenu|copy/"]],"investmap.pl":[["set-cookie","rodo","1","","reload","1"]],"investorvillage.com":[["acs","update_visit_count"]],"ircity.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"isekaipalace.com":[["noeval-if","alert"]],"itpro.com":[["set-cookie","FTR_Article_PageView","2"]],"iway.ch":[["set","realCookieBanner","undefined"]],"izh1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"jeger.pl":[["set-cookie","_acceptCookies","1","","reload","1"]],"jeniusplay.com":[["set","Object.prototype._detectLoop","undefined"],["set","console.clear","undefined"]],"jibjab.com":[["set-local-storage-item","cookie_banner:hidden","true"]],"jito.wtf":[["set-local-storage-item","hasConsentedPH","no"]],"jku.at":[["set-cookie","CookieConsent","required"]],"jobs.cz":[["rc","show--consent","body","stay"]],"jobs.fgcu.edu":[["set-cookie","ctc_rejected","1"]],"jongcdenv.be":[["rc","cookieconsent-active","body","stay"]],"josefbergs.com":[["set","realCookieBanner","undefined"]],"journal.hr":[["set-cookie","jour_analytics","false"],["set-cookie","jour_cookies","1"],["set-cookie","jour_functional","true"],["set-cookie","jour_marketing","false"]],"jovemnerd.com.br":[["set-cookie","jovem-nerd-cookie-consent","false"]],"joyella.com":[["rc","unreadable-display","","stay"]],"jugend-praesentiert.de":[["set-cookie","cookiebanner","essential"]],"kafijasdraugs.lv":[["set-cookie","lvFunctionalCookies","true"]],"kaltern.eu":[["set-cookie","ris_cookie_setting","1"]],"kamera-express.de":[["set-cookie","cookie_accepted","false","","reload","1"]],"kamera-express.lu":[["set-cookie","cookie_accepted","false","","reload","1"]],"karate.com":[["set-cookie","cookie-consent","true"]],"kinobro.online":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"kinston.com":[["nostif","gnt_mol_oy"]],"koalasplayground.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"kocbayi.com.tr":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"koenvandenheuvel.be":[["rc","cookieconsent-active","body","stay"]],"konicaminolta.us":[["set-cookie","konicaminolta.us","1"]],"korona.by":[["set-cookie","infoPopupClosed","1"]],"ksef.podatki.gov.pl":[["set-local-storage-item","cookieconsent_status","true"]],"kupbilecik.pl":[["set-cookie","allow-cookie","1"],["set-cookie","cookie-functional","1"]],"kurosave.com":[["aopr","document.body.setAttribute"]],"kwerfeldein.de":[["set","realCookieBanner","undefined"]],"kwj-computer.de":[["set-cookie","cookie-preference","1"]],"kyoceradocumentsolutions.co.uk":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.fr":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"la31devalladolid.com":[["set-cookie","cookies_surestao","accepted","","reload","1"],["set-cookie","lr_cookies_tecnicas","accepted"]],"labs.j-novel.club":[["aeld","contextmenu"]],"landurlaub-allgaeu.de":[["set-cookie","Consent","0"]],"latoken.com":[["set-cookie","CookieConsent","true"]],"lattinepersonalizzate.it":[["set","realCookieBanner","undefined"]],"lb-consultores.com":[["set","realCookieBanner","undefined"]],"ledauphinhotel.com":[["rc","unreadable-display","","stay"]],"leekduck.com":[["nostif","abp"]],"leotrippi.com":[["set-cookie","cookieConsent","true"]],"librinova.com":[["set-local-storage-item","cookieconsent_status","false"]],"librumreader.com":[["set-local-storage-item","firstVisit","false"]],"lifemiles.com":[["set-cookie","cookiePolicyAccepted","true"],["set-cookie","marketing_cookies","false"],["set-cookie","statistics_cookies","false"]],"limehd.tv":[["set-cookie","cookieIsAgree","true"]],"limogeshabitat.fr":[["set-cookie","Cookie_Category_analytics_2","false"],["set-cookie","Cookie_Category_save_2","true"],["set-cookie","Cookie_Category_system_1","true"]],"listatv.pl":[["ra","oncontextmenu"]],"livedoor.biz":[["set-cookie","livedoor-blog-gdpr-agreed","1"]],"livescience.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"liveyourmaths.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"locandazita.com":[["set","realCookieBanner","undefined"]],"locateyoursound.com":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"lookmovie.ag":[["nostif","__ext_loaded"]],"lottehotel.com":[["set-cookie","analyticsCookie","N"],["set-cookie","checkCookie","Y"],["set-cookie","essentialCookie","Y"],["set-cookie","marketingCookie","N"],["set-cookie","thirdCookie","N"]],"lowcygier.pl":[["aeld","error","browser-plugin"]],"lwlies.com":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"lyrical-nonsense.com":[["rmnt","script","contextmenu"]],"magicpos.shop":[["set-cookie","cookie-preference","1"]],"manhwa18.cc":[["nostif","detect_modal"]],"manyanet.org":[["set","realCookieBanner","undefined"]],"marinelink.com":[["set-cookie","GDPR","9"]],"mario-kaps.de":[["set","realCookieBanner","undefined"]],"marionstar.com":[["nostif","gnt_mol_oy"]],"materna.de":[["set-cookie","cookiebanner","0"]],"maxstream.video":[["acs","document.body.oncontextmenu"],["aeld","contextmenu","preventDefault"],["aopr","onload"]],"mcloud.to":[["aost","console.clear"]],"medikament.sk":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"mediotejo.net":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"megacloud.tv":[["set","devtoolsDetector.launch","noopFunc"]],"megaplay.buzz":[["set","devtoolsDetector.launch","noopFunc"]],"megaxh.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"melty.fr":[["set","Didomi","noopFunc"]],"menrec.com":[["nosiif","offsetHeight"]],"mercenaryenrollment.com":[["acs","document.oncontextmenu"]],"merrell.pl":[["set-cookie","amcookie_allowed","1"],["set-cookie","amcookie_policy_restriction","allowed"]],"merriam-webster.com":[["aopr","__cmpGdprAppliesGlobally"]],"mesanalyses.fr":[["set-cookie","MANA_CONSENT","true"]],"metro1.com.br":[["set-local-storage-item","cookie","true"]],"metroasis.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"mfu-pilotenclub.at":[["set","realCookieBanner","undefined"]],"mfw09.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"mikroutsikos.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"mimovrste.com":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"minhaconexao.com.br":[["set-cookie","show_cookies_banner","false"]],"mitarbeiter-app.de":[["rc","wcc-popup-overflow","body","stay"]],"mmo-sankar.de":[["set","realCookieBanner","undefined"]],"mocospace.com":[["nostif","adblocker"]],"mollie.com":[["set-local-storage-item","framerCookiesDismissed","true"]],"moneyfarm.com":[["set-cookie","consent_updated","true"]],"montgomeryadvertiser.com":[["nostif","gnt_mol_oy"]],"msk1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"mtishows.com":[["set-cookie","cookie-agreed","2"]],"music.youtube.com":[["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"]],"musti.no":[["set-cookie","mno_consent_necessary","granted","","reload","1"]],"mycall.no":[["set-cookie","mc_allow_tracking","0"]],"myfreemp3juices.cc":[["ra","onclick","[onclick=\"myFunction()\"]"]],"myoplay.club":[["acs","document.oncontextmenu"]],"nachbelichtet.com":[["set","realCookieBanner","undefined"]],"nahrungsmittel-intoleranz.com":[["set","realCookieBanner","undefined"],["set","window.SteadyWidgetSettings.adblockActive","false"]],"narrwalla.de":[["set","realCookieBanner","undefined"]],"ncertsolutions.guru":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"neowin.net":[["aopr","_sp_.mms.startMsg"]],"neuneinhalb.org":[["set","realCookieBanner","undefined"]],"newgrounds.com":[["remove-cookie","_ngViCo-SupporterPromo"]],"newportri.com":[["nostif","gnt_mol_oy"]],"newsleader.com":[["nostif","gnt_mol_oy"]],"ngs24.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"ngs42.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"ngs55.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"nicekkk.com":[["rmnt","script","debugger"]],"nike.com.pe":[["set-cookie","consent","true","","reload","1"]],"njherald.com":[["nostif","gnt_mol_oy"]],"njjzxl.net":[["aeld","contextmenu"]],"nn.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"nny360.com":[["aeld","contextmenu","preventDefault"]],"nokportalen.se":[["set-cookie","cookies_allowed","yes"]],"nonli.com":[["set-local-storage-item","nonli_google_analytics_consent","denied"]],"notthebee.com":[["set-local-storage-item","cookieConsent","granted"]],"novaventa.com":[["set-local-storage-item","cookiesAceptadas","true"]],"ntvspor.net":[["set-cookie","isPolicyCookieForAllPage","1"],["aeld","/contextmenu|selectstart/"]],"nydailyquote.com":[["acs","document.onselectstart"]],"octopus.energy":[["set-cookie","dismissCookiePreferencesMessage","1"]],"octopusenergy.es":[["set-cookie","dismissCookieBanner","true"],["set-cookie","switchCookies","1"]],"odiarioonline.com.br":[["set","document.oncontextmenu","null"],["set","document.onkeydown","null"]],"okfurniture.co.za":[["set-cookie","amcookie_allowed","1"]],"olarila.com":[["nostif","offsetHeight"]],"onlineathens.com":[["nostif","gnt_mol_oy"]],"onlinefreecourse.net":[["aeld","","mdp"]],"onlineonderdelenshop.nl":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"onlyoffice.com":[["set-cookie","cookie_preferences","1"]],"oparana.com.br":[["acs","document.oncontextmenu"]],"opedge.com":[["nostif","()","2000"]],"openai.com":[["set-cookie","analytics_consent","rejected"],["set-cookie","marketing_consent","rejected"]],"openanesthesia.org":[["nostif",".LoginSection"]],"openhardware.directory":[["set-local-storage-item","cookie-consent","rejected"]],"openwebui.com":[["set-local-storage-item","cookie_consent","rejected"]],"otempo.com.br":[["aeld","copy"]],"otvfoco.com.br":[["aopr","addLink"]],"overleaf.com":[["set-cookie","oa","0"]],"pccomponentes.com":[["set-cookie","accept_cookie","1"]],"peaks.com":[["set-cookie","allow_cookie","false"]],"pecasauto24.pt":[["aeld","mousedown","function(t)"]],"pechinchou.com.br":[["set-local-storage-item","Pechinchou:CookiesModal","true"]],"peekme.cc":[["aeld","selectstart"]],"pentruea.com":[["acs","document.oncontextmenu"],["aeld","copy"]],"petenkoiratarvike.com":[["set-cookie","pfi_consent_necessary","granted","","reload","1"]],"peugeot.pl":[["aeld","contextmenu"],["aopw","document.onkeypress"]],"pflegezeit-berlin.de":[["rc","dp--cookie-consent","body","stay"]],"pga.com":[["set-cookie","gdprPGA","true"]],"phimdinhcao.com":[["acs","oncontextmenu","keydown"],["aopr","devtoolsDetector"]],"photoacompanhantes.com":[["set-cookie","cookies_aceptadas","0"]],"picockpit.com":[["set","realCookieBanner","undefined"]],"piecesauto24.lu":[["aeld","mousedown","function(t)"]],"pitesti24.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"pjspub.com":[["set-local-storage-item","userConsented","false"]],"pjstar.com":[["nostif","gnt_mol_oy"]],"plassenburg.de":[["set-cookie","cookiehinweisnew","2","","reload","1"]],"platnik.e-pity.pl":[["set-cookie","efile-cookie-128","1"]],"plavte.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"playtesting.games":[["set-cookie","myAwesomeCookieName3","true"]],"pngitem.com":[["aopr","document.oncontextmenu"]],"pnj.com":[["nostif","gnt_mol_oy"]],"pocket-pirates-prt.de":[["set","realCookieBanner","undefined"]],"podimo.com":[["set","window.scrollTo","noopFunc"]],"poedb.tw":[["aopr","adBlockDetected"]],"polypane.app":[["set-local-storage-item","dismissed","true"]],"ponselharian.com":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"],["aopr","disableSelection"]],"pornhd8k.net":[["nosiif","debugger"]],"porntv.us":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"posterstore.at":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.be":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.dk":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.it":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.kr":[["set-cookie","synapse-cookie-preferences-set","true"]],"posthog.com":[["set-local-storage-item","cookie_consent","no"]],"potsdamerplatz.de":[["set-cookie","ppCookieConsent","false"]],"powerup-gaming.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"prageru.com":[["set-cookie","cookie-status-analytics","false"],["set-cookie","cookies-functional","true"],["set-cookie","cookies-marketing","false"]],"pressconnects.com":[["nostif","gnt_mol_oy"]],"probuildstats.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"progameguides.com":[["aopr","admrlWpJsonP"]],"prolocotarquinia.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"protest.eu":[["set","BIA.ADBLOCKER","false"]],"providencejournal.com":[["nostif","gnt_mol_oy"]],"puntigamer.at":[["set","realCookieBanner","undefined"]],"puromarketing.com":[["set-cookie","cookiergpdjnz","1"]],"puzzleyou.sk":[["set-cookie","puzzleyou-sk_cookies_consent_allowlist","0","","reload","1"]],"quotev.com":[["ra","onselectstart|ondragstart|oncontextmenu","div.story_text","complete"],["aopr","document.body.oncopy"]],"rabbitstream.net":[["set","devtoolsDetector.launch","noopFunc"]],"rachelli.it":[["set-cookie","rachelli-ita-cookie-categories","essential"]],"racked.com":[["nostif","adsBlocked"]],"railwebcams.net":[["set","realCookieBanner","undefined"]],"random-group.olafneumann.org":[["set-local-storage-item","consent","true"]],"randombrick.de":[["set","realCookieBanner","undefined"]],"raoul-follereau.org":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"rapidairmax.site":[["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"ratemyprofessors.com":[["set-cookie","ccpa-notice-viewed-02","true"]],"rayatoys.com":[["set-cookie","amcookie_allowed","1"]],"readawrite.com":[["set","securityTool.disableRightClick","noopFunc"],["set","securityTool.disableF12","noopFunc"],["set","securityTool.disableCtrlP","noopFunc"],["set","securityTool.disableCtrlS","noopFunc"],["set","securityTool.disablePrintScreen","noopFunc"],["set","securityTool.disablePrintThisPage","noopFunc"],["set","securityTool.disableElementForPrintThisPage","noopFunc"]],"reborntrans.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"rechtsanwalt-nierfeld.de":[["set","realCookieBanner","undefined"]],"redcare.it":[["set-session-storage-item","sae-conversational-consent-msg-closed","true"]],"remixsearch.es":[["nano-sib","loadexternal","1000"]],"renault-spenrath-juelich.de":[["set-cookie","hide-gdpr-bar","true"]],"reportergazeta.pl":[["set","document.oncontextmenu","null"],["set","document.onselectstart","null"],["set","document.ondragstart","null"]],"repository.lincoln.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"reservedeler24.co.no":[["aeld","mousedown","function(t)"]],"rest.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"rezervesdalas24.lv":[["aeld","mousedown","function(t)"]],"ribescasals.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"ried.at":[["set-cookie","ris_cookie_setting","1"]],"rijkenis.nl":[["set-cookie","consent-cookies","1"]],"ris.at":[["set-cookie","ris_cookie_setting","1"]],"rog-forum.asus.com":[["set-cookie","isReadCookiePolicyDNT","No"],["set-cookie","isReadCookiePolicyDNTAa","False"]],"roleplayer.me":[["rmnt","script","__ADB_COOLDOWN__"]],"rottentomatoes.com":[["set","mps._queue.abdetect","null"]],"rovia.es":[["set-cookie","cookiesAccepted","1","reload","1"]],"roztoczanskipn.pl":[["aeld","contextmenu"]],"rt.com":[["set-cookie","rt-cb-approve","true"]],"rustv.fun":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["ra","oncontextmenu|onkeydown|onselectstart","body","complete"]],"ryuryuko.blog90.fc2.com":[["aopw","initimg"],["ra","oncontextmenu|onCopy"]],"sachsen-netze.de":[["set-cookie","allowAnalyticalCookies","false"],["set-cookie","cookiesAccepted","true"]],"safaricom.co.ke":[["set-cookie","cookieConsent","rejected"]],"safedeliveries.nl":[["set-cookie","cookieConsentGranted","1"]],"sandisk-cashback.de":[["set-cookie","Cookie_Category_analytics","false"],["set-cookie","Cookie_Category_tracking","false"],["set-cookie","Cookie_Consent","1"]],"saricurls.de":[["set-cookie","_pandectes_gdpr","1"]],"savannahnow.com":[["nostif","gnt_mol_oy"]],"sbnation.com":[["nostif","adsBlocked"]],"schneideranwaelte.de":[["set-local-storage-item","cookie_consent","true"]],"schnittmuster-datenbank.de":[["set","realCookieBanner","undefined"]],"schoeck.com":[["set-cookie","cookieconsent_status","allow"]],"school.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"schraudolf-oberstdorf.de":[["set-cookie","Consent","0"]],"sctimes.com":[["nostif","gnt_mol_oy"]],"sede.coruna.gal":[["set-cookie","AYTO_CORUNA_COOKIES","1","","reload","1"]],"seifriz-preis.de":[["set","realCookieBanner","undefined"]],"senpa.io":[["aeld","contextmenu","_0x"]],"sertracen.com.pa":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"sexeo.de":[["set-cookie","cookie","accepted"]],"shareloft.com":[["set-cookie","shareloft_cookie_decision","1"]],"shinchu.net":[["aeld","contextmenu"],["acs","document.onkeydown"]],"shop-apotheke.at":[["set-session-storage-item","sae-conversational-consent-msg-closed","true"]],"shop.5soap.com":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.cosmed.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.kemei.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.skechers-twn.com":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.wacoal.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop0315.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shopify.dev":[["set-cookie","eu_cookies_acknowledged","true"]],"short-story.net":[["nostif","()","2000"]],"silvini.de":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"singaporeair.com":[["set-cookie","airTRFX_cookies","accepted"]],"singingdalong.blogspot.com":[["ra","oncontextmenu|ondragstart|onselectstart"],["acs","disableselect","reEnable"]],"sk-nic.sk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"skidrowcodex.net":[["aopw","stopPrntScr"],["aeld","contextmenu"]],"slideshare.net":[["acs","ab_tests"],["aeld","mouseleave","scribd_ad"]],"smotrufilm.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"snapchat.com":[["set-cookie","EssentialSession","true"],["set-cookie","Marketing","false"],["set-cookie","Performance","false"],["set-cookie","Preferences","false"],["set-cookie","sc-cookies-accepted","true"]],"sneakernews.com":[["aopr","sneakerGoogleTag"]],"solotrend.net":[["aopw","ai_front"]],"songtradr.com":[["set-cookie","cpaccepted","true"],["set-cookie","cpaccpted","true"]],"sooeveningnews.com":[["nostif","gnt_mol_oy"]],"sotka.fi":[["set-cookie","rc_given_consent_closed","1"]],"sp215.info":[["set-cookie","plg_system_djcookiemonster_informed","1","","reload","1"]],"spanienweinonline.ch":[["set-cookie","amcookie_allowed","1"]],"spanishdict.com":[["set","SD_BLOCKTHROUGH","true"]],"spectrumtherapeutics.com":[["set-local-storage-item","cookiesAccepted","true"]],"spherity.com":[["set","realCookieBanner","undefined"]],"stadt-bremerhaven.de":[["rmnt","script","Adblocker"]],"stadtwerke-weilburg.de":[["set-cookie","cookiehinweis","2"]],"stargazette.com":[["nostif","gnt_mol_oy"]],"starresonance.th.gl":[["nostif",".getState();","4500"]],"starsunfolded.com":[["acs","document.oncontextmenu"],["aopw","disableSelection"]],"startrescue.co.uk":[["set-cookie","_cookieconsentv2","1"]],"stonk-market.com":[["set","realCookieBanner","undefined"]],"streamily.com":[["set-cookie","cookie-notice","true"]],"sudoku.coach":[["set-cookie","consent","0"]],"suitapp.de":[["set","realCookieBanner","undefined"]],"suntech.cz":[["set-cookie","I6COMPARECOUNT","0"],["set-cookie","I6IISCOOKIECONSENT0","n","","reload","1"]],"superalink.com":[["set-cookie","cookies_allowed","false"]],"sutterhealth.org":[["set-cookie","_acceptsEssential","true"]],"sverigesingenjorer.se":[["set-cookie","approvedcookies","no","","reload","1"]],"swissmilk.ch":[["set-cookie","closedCookieBanner","true"]],"swisstours.com":[["set-local-storage-item","isCookie","Yes"]],"swtorlogs.com":[["acs","attachToDom","ad-fallback"]],"systemfala.pl":[["set-cookie","COOKIES_ACCEPT","true"]],"szkolawohyn.pl":[["set","document.oncontextmenu","noopFunc"]],"t3.chat":[["nostif",".abort();","1000"]],"tailed.ca":[["set-local-storage-item","cookie_consent","false"]],"tbs.co.jp":[["set","NS_TVER_EQ.checkEndEQ","trueFunc"]],"teamtailor.com":[["set-local-storage-item","CookieConsent--hideCookieConsent","true"]],"tech-recipes.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"techlicious.com":[["acs","document.createElement","admiral"]],"televizia.org":[["aeld","contextmenu","preventDefault"]],"teodor-shop.com":[["set-cookie","amcookie_allowed","1"]],"the-review.com":[["nostif","gnt_mol_oy"]],"theappletreegerrardscross.co.uk":[["set-cookie","ce-cookie","N"]],"thearkley.co.uk":[["set-cookie","ce-cookie","N"]],"theateramrand.de":[["set-cookie","cookiebanner","essential"]],"thebolditalic.com":[["set-local-storage-item","201805-policy|accepted","1"]],"thechampionpub.co.uk":[["set-cookie","ce-cookie","N"]],"thecliffcanfordcliffs.co.uk":[["set-cookie","ce-cookie","N"]],"thedewdropinnoxford.co.uk":[["set-cookie","ce-cookie","N"]],"theghostinmymachine.com":[["acs","document.oncontextmenu"]],"thejerichooxford.co.uk":[["set-cookie","ce-cookie","N"]],"thememypc.net":[["ra","oncontextmenu","a#download_link","stay"]],"thenekodark.com":[["aeld","contextmenu"]],"thenorthwestern.com":[["nostif","gnt_mol_oy"]],"therecordherald.com":[["nostif","gnt_mol_oy"]],"thespaniardshampstead.co.uk":[["set-cookie","ce-cookie","N"]],"thespectrum.com":[["nostif","gnt_mol_oy"]],"thestarpress.com":[["nostif","gnt_mol_oy"]],"thewhitehartse19.co.uk":[["set-cookie","ce-cookie","N"]],"tickets.dehortus.nl":[["set-cookie","acceptAnalyticsCookies","False"],["set-cookie","acceptFunctionalCookies","False"],["set-cookie","cookiePolicyConfirmed","True","","reload","1"]],"tidningenbalans.se":[["set-cookie","CookieConsent","true","","reload","1"]],"tiermaker.com":[["nostif","&adslot"]],"tiktok.com":[["aeld","contextmenu","preventDefault"]],"timesrecordnews.com":[["nostif","gnt_mol_oy"]],"tistory.com":[["aopw","document.oncontextmenu"]],"titanic-magazin.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"titantv.com":[["acs","document.createElement","admiral"]],"todoist.com":[["set-local-storage-item","cookie-consent","\"denied\""]],"tolyatty.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"tomshw.it":[["nostif","bioEp.showPopup"]],"toshiba-aircondition.com":[["set-cookie","COOKIEBAR_1945","0"]],"toysrus.ca":[["set-cookie","cookieModal","false"]],"trade.bisonapp.com":[["set-cookie","cookiesConsent","reject"]],"trading212.com":[["set-cookie","COOKIES_CONSENT","essential"]],"tradingview.com":[["set-cookie","cookiePrivacyPreferenceBannerProduction","accepted"]],"traffihunter.hu":[["rc","darken","body"]],"traun.at":[["set-cookie","ris_cookie_setting","1"]],"travelite.com":[["set-cookie","cookie-preference","1"]],"tritinia.com":[["acs","jQuery","keydown"],["aopr","document.oncontextmenu"],["aopr","disable_copy"]],"triumphtechnicalinformation.com":[["set-local-storage-item","ROCUMENTS.cookieConsent","true"]],"truyenbanquyen.com":[["acs","document.oncontextmenu"],["aopw","disable_hot_keys"],["aopw","disable_copy"],["acs","reEnable"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"ttisi.nl":[["set-cookie","cmplz_banner-status","dismissed"]],"tulipize.com":[["set","realCookieBanner","undefined"]],"tumblr.com":[["nostif","Premium"]],"tundra.fi":[["rc","wcc-popup-overflow","body","stay"]],"tunegate.me":[["ra","onContextmenu|onMouseDown|onSelectStart"]],"turcolegal.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"tuttoautoricambi.it":[["aeld","mousedown","function(t)"]],"tutu.ru":[["set-cookie","disclaimer_show","1"]],"tv11.ruvideo.site":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvivu.com":[["nostif",".adsbygoogle?.loaded"]],"tvprato.it":[["rc","show--consent","body","stay"]],"tw.puma.com":[["set-cookie","allowGetPrivacyInfo","true"]],"tweakers.net":[["set","tweakersConfig.userConfiguredConsent.googlemaps.approved","true"],["set","tweakersConfig.userConfiguredConsent.knightlab.approved","true"],["set","tweakersConfig.userConfiguredConsent.omny.approved","true"],["set","tweakersConfig.userConfiguredConsent.pcnltelecom.approved","true"],["set","tweakersConfig.userConfiguredConsent.soundcloud.approved","true"],["set","tweakersConfig.userConfiguredConsent.streamable.approved","true"],["set","tweakersConfig.userConfiguredConsent.youtube.approved","true"]],"tweaktown.com":[["aost","document.getSelection","inlineScript"]],"twenga.de":[["set-cookie","cookiewarning","1","","reload","1"]],"twitchemotes.com":[["aeld","contextmenu"]],"txori.com":[["aeld","contextmenu","_0x"]],"un-block-voe.net":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"unisa.ac.za":[["set-local-storage-item","cookieConsent","essential"]],"unmute.sh":[["set-local-storage-item","cookieConsent","false"]],"untitle.org":[["acs","document.oncontextmenu"]],"uranium.io":[["set-cookie","accepted-cookies","false"]],"urban-rivals.com":[["set-cookie","__Host-cnil","true"]],"urjalansanomat.fi":[["set-cookie","cm_ads","0"],["set-cookie","cm_analytics","0"],["set-cookie","cm_default","1"]],"uza.be":[["set-cookie","cookie-agreed","2"]],"vapecoco.com":[["set","realCookieBanner","undefined"]],"veeqo.com":[["set-cookie","veeqo_consent","granted"]],"velleahome.gr":[["set-cookie","hide_cookies_consent","1"]],"verdis.se":[["set-cookie","allow-all-cookies","0"],["set-cookie","analysis-cookies","0"],["set-cookie","initial-cookie-setting-done","1","","reload","1"]],"versicherungsmakler-leistenschneider.de":[["set","realCookieBanner","undefined"]],"vid2faf.site":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"vidply.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"viewing.nyc":[["no-fetch-if","googlesyndication"]],"vinstartheme.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledKeys"]],"visse.com.br":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"vitotechnology.com":[["set-local-storage-item","SWCOOKIESACC","1"]],"vki.at":[["set-cookie","vkicookieconsent","0"]],"voedingswaardetabel.nl":[["set","document.oncontextmenu","null"],["set","document.onselectstart","null"]],"voila.ca":[["set-cookie","privacyAccepted","true"]],"volksversand.de":[["set-cookie","cookieDeclined","1"]],"volonclick.it":[["set-cookie","COOKIES_CONSENT","0"]],"voronezh1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"vsco.co":[["set-local-storage-item","/^fs\\./","$remove$"],["aeld","contextmenu"]],"wagner-tuning.com":[["set-cookie","CookieLaw","on"],["set-cookie","CookieLaw_komfort","0"],["set-cookie","CookieLaw_personalisierung","0"],["set-cookie","CookieLaw_statistik 0"]],"wallpapercat.com":[["nano-sib","counter","1000","0.001"]],"warrenjames.co.uk":[["set-cookie","GDPR.CONSENT.ANALYTICS","false"],["set-cookie","GDPR.CONSENT.MARKETING","false"],["set-cookie","GDPR.CONSENT.NECESSARY","true"],["set-cookie","GDPR.CONSENT.STATUS","true","","reload","1"]],"wattoo.no":[["set-cookie","sscm_consent_widget","1"]],"wayfair.co.uk":[["set-cookie","user_cookie_prefs","1"]],"web.spaggiari.eu":[["set-cookie","cookie_consent","3"]],"webcamromania.ro":[["aeld","contextmenu","preventDefault"]],"weber-senf.at":[["set","realCookieBanner","undefined"]],"weetabix-arabia.com":[["rc","wcc-popup-overflow","body","stay"]],"weetabix.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"weetabix.fr":[["rc","wcc-popup-overflow","body","stay"]],"weibo.com":[["nowoif","layerid","1"]],"weiterbildungsfinder.de":[["set","realCookieBanner","undefined"]],"werkenbijiciparisxl.nl":[["rc","is-active-cookiebar","","stay"]],"whoisnovel.com":[["acs","document.oncontextmenu"]],"wikiwand.com":[["set-cookie","wikiwand.cookies.consent","true"]],"windowscentral.com":[["set-cookie","FTR_Article_PageView","2"]],"windowspower.de":[["set","realCookieBanner","undefined"]],"wizards.com":[["set-cookie","cookie-agreed","2"]],"wizardshop.su":[["set-cookie","alert_cookie","1"]],"wokularach.pl":[["set-local-storage-item","display_cookie_modal","false"]],"woltair.cz":[["set-cookie","CM_BANNER","false"]],"woolpackstokemandeville.co.uk":[["set-cookie","ce-cookie","N"]],"wormate.io":[["aeld","contextmenu","preventDefault"]],"wouterplanet.com":[["ra","oncontextmenu","body","complete"],["nosiif","_0x"]],"wps.com":[["set-cookie","ga-disable-UA-126693142-3","true"],["set-cookie","gdpr","1"]],"wtsenergy.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"wunderground.com":[["set-local-storage-item","wu.ccpa-toast-viewed","true"]],"wunderpen.com":[["set","realCookieBanner","undefined"]],"www.uva.nl":[["set-cookie","cookie_consent_level","1"]],"www.youtube.com":[["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"]],"x-link.pl":[["aeld","contextmenu","a"]],"xhaccess.com":[["set-cookie","cookie_accept","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster.com":[["set-cookie","cookie_accept","1"]],"xhamster.desi":[["set-cookie","cookie_accept","1"]],"xhamster2.com":[["set-cookie","cookie_accept","1"]],"xhplanet2.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xn--digitaler-notenstnder-m2b.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"xn--lkylen-vxa.se":[["set-cookie","gdpr_ok","necessary"]],"xnxx.com":[["aopr","fuckAdBlock"]],"xtv.cz":[["nostif","pgblck"]],"xvideos.com":[["set","xv.disclaimer.displayNewCookiePopup","noopFunc"],["set","xv.disclaimer.displayCookiePopup","noopFunc"]],"xxxonlinegames.com":[["nostif","offsetHeight"]],"xxxshemaleporn.com":[["set-cookie","kt_tcookie","1"],["set-cookie","splash_Page_Accepted","true"]],"xymogen-sa.co.za":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"youcom.com.br":[["set-cookie","termos-aceitos","ok"]],"youtubekids.com":[["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"]],"zagorz.pl":[["set-cookie","cookies-policy","1"],["set-cookie","cookies-view","1"]],"zahnputzladen.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"zapgroup.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"zhik.com":[["set-cookie","cookieAccepted","true"]],"ziarulargesul.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"zirl.gv.at":[["set-cookie","ris_cookie_setting","1"]],"zukunft-jetzt.deutsche-rentenversicherung.de":[["set-cookie","complianceCookie","accepted"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
