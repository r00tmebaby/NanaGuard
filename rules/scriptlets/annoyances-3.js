/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"107liquor.com":[["set-cookie","age_verification","1"]],"11alive.com":[["aeld","/^(mouseout|mouseleave)$/"],["aeld","scroll"]],"164.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"1mg.com":[["aeld","mouseout"]],"360doc.com":[["aopr","document.oncontextmenu"],["aopw","document.body.oncopy"],["set","document.body.onmouseup","null"]],"3landesmuseen-braunschweig.de":[["set-cookie","3LM-Cookie","false"]],"52bdys.com":[["aopr","onload"]],"74.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"9tsu.vip":[["set","devtoolsDetector","{}"]],"abc10.com":[["aeld","/^(mouseout|mouseleave)$/"]],"abc7.com":[["aeld","scroll"]],"adevarurisecrete.com":[["rmnt","script","/oncontextmenu|wccp/"]],"adidas.be":[["set-cookie","notice_preferences","2"]],"adidas.co":[["set-cookie","notice_preferences","2"]],"adidas.co.in":[["set-cookie","notice_preferences","2"]],"adidas.co.th":[["set-cookie","notice_preferences","2"]],"adressit.com":[["rmnt","script","clipboard_disabled"]],"afrikmag.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"agerpres.ro":[["aeld","contextmenu","preventDefault"]],"aida64russia.com":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"ajanvaraus.veripalvelu.fi":[["set-cookie","cb-enabled-fi","accepted"]],"akademie-management.de":[["set","realCookieBanner","undefined"]],"alkoshop.sk":[["set-cookie","y18","true"]],"all4pets.com.pl":[["aeld","contextmenu"]],"alpewa.com":[["set-cookie","tincx_cookie_notice_accepted","true"]],"alphagirlreviews.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"alrincon.com":[["set-cookie","adult_cookie","1"]],"ambassadorcruiseline.com":[["set-cookie","cookies_accepted","1","","reload","1"]],"ames-tools.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"anacondastores.com":[["set-cookie","hideCookiesNotification_AU_en","1"]],"anascrie.ro":[["rmnt","script","/document.onkeydown|document.ondragstart/"]],"anhanguera.com":[["set-local-storage-item","isCookiePoliceAccepted","1"]],"anikototv.to":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"animecruzers.com":[["set","Object.prototype.preroll","[]"]],"animefire.plus":[["ra","oncontextmenu|ondragstart","","complete"]],"anker.com":[["set-cookie","accept_cookies","accepted"]],"anns.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"apogeeagency.com":[["set-cookie","cmplz_banner-status","dismissed"]],"aporiamagazine.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"apyhub.com":[["set-cookie","cookies-accepted","true","","reload","1"]],"aqua-store.fr":[["set-cookie","abz_seo_choosen","1"]],"arcanum.com":[["set","show_modal","noopFunc"]],"archiwumalle.pl":[["set-cookie","accept_political","1"]],"artech-sellerie.com":[["rc","unreadable-display","","stay"]],"arthurcantina.com":[["set-cookie","isAnAdult","true"]],"arti-definisi-pengertian.info":[["set","document.oncontextmenu","null"],["aopw","document.onselectstart"],["aopw","document.ondragstart"]],"artkon.de":[["set","realCookieBanner","undefined"]],"asfour.ch":[["set","realCookieBanner","undefined"]],"asianexpress.co.uk":[["acs","document.oncontextmenu"]],"assosia.com":[["rc","wcc-popup-overflow","body","stay"]],"atlas-geografic.net":[["aopr","document.oncontextmenu"],["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"audi.ca":[["set-cookie","AUDI_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_Functional","0"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"]],"audiostereo.pl":[["nostif","adb"]],"auslandsschulwesen.de":[["set-cookie","gsbbanner","closed"]],"auth.kontur.ru":[["set-cookie","gdpr-consent","true"]],"autohaus-musberg.de":[["set-cookie","hide-gdpr-bar","true"]],"automationafrica.co.za":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"autopareri.com":[["no-fetch-if","googlesyndication"]],"avito.ru":[["set-cookie","cookie_consent_shown","1"]],"ayudatpymes.com":[["set-cookie","cookie_consent","1"]],"banglainsider.com":[["acs","document.onkeydown"],["acs","reEnable","killcopy"],["ra","oncontextmenu"]],"barandblock.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"bargaintown.ie":[["set-cookie","cookie-bar","no"]],"basketball-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"baycix.de":[["set","realCookieBanner","undefined"]],"bayern.de":[["set-cookie","required","1"]],"bazarchic.com":[["set-cookie","RgpdBanner","1"],["set-cookie","_marketing","0"],["set-cookie","_performance","0"]],"bca.co.id":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"beast-kingdom.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"beautycon.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"beenverified.com":[["set-session-storage-item","privacyPopupShown","true"]],"beerjerk.co.nz":[["set-cookie","beyours:age-verifier","true"]],"beermerchants.com":[["set-local-storage-item","amCookieBarFirstShow","1"]],"beershophq.uk":[["set-cookie","age-checked","1"]],"beratungskompass-verschwoerungsdenken.de":[["set-cookie","cookieconsent_status","allow"]],"besteonderdelen.nl":[["aeld","mousedown","function(t)"]],"bestjavporn.com":[["acs","document.oncontextmenu"],["set","devtoolsDetector","undefined"]],"beta-accounts.paradoxinteractive.com":[["set-cookie","cookies_accepted","true"]],"beta.character.ai":[["set-local-storage-item","OPTIONAL_COOKIES_ACCEPTED_0","true"],["set-local-storage-item","VISITED_0","true"]],"bettenconcept.com":[["rc","wcc-popup-overflow","body","stay"]],"bezirksgemeinschaftpustertal.it":[["set-cookie","ris_cookie_setting","1"]],"bgld.wifi.at":[["set-cookie","consent","true"]],"bharatavani.in":[["aeld","/cut|copy|paste|contextmenu/"]],"bhbikes.com":[["set-cookie","COOKIELEGAL_BH_V2","N"]],"bierspot.de":[["set","realCookieBanner","undefined"]],"bio-hoflieferant.de":[["set-cookie","accept_cookies","yes","","reload","1"]],"biomeo-environnement.com":[["rc","unreadable-display","","stay"]],"blablacar.com.ua":[["set-cookie","_cookies_v2","1"]],"blablacar.rs":[["set-cookie","_cookies_v2","1"]],"blackbit.sh":[["set-cookie","bb_consent","rejected"]],"blitzortung.org":[["set-cookie","CONSENT","15"]],"blockchain.com":[["set-session-storage-item","dismissedTrackingBanner","true"]],"blog.documentfoundation.org":[["set-cookie","ytprefs_gdpr_consent","1","","reload","1"]],"bmleh.de":[["set-cookie","gsbbanner","0"]],"boeser-chinese.de":[["set","realCookieBanner","undefined"]],"boosty.to":[["set-cookie","gdpr","1"]],"borger.dk":[["set-cookie","BDK_CookieLawAccepted","false","","reload","1"]],"bouwmatron.nl":[["set-cookie","consent-cookies","1"]],"bricksrus.com":[["aopr","document.oncontextmenu"]],"brokensilenze.net":[["rmnt","script","disable_copy"],["rmnt","script","nocontext"]],"brunnenthal.at":[["set-cookie","ris_cookie_setting","1"]],"bs-achern.de":[["set","realCookieBanner","undefined"]],"buehler-segelfreunde.de":[["set-cookie","Consent","0"]],"bulder.no":[["set-cookie","marketing","false"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"bunq.com":[["set-local-storage-item","framerCookiesDismissed","true"]],"businesshemden.com":[["set-cookie","mnd-cookie-accepted-businesshemdencom1","1"],["set-cookie","mnd-mkt_cookie","false"],["set-cookie","mnd-statistics_cookie","false"]],"butterfly-circus.de":[["set-cookie","cookie-preference","1"]],"bysezejataos.com":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"bzgcc.bz.it":[["set-cookie","ris_cookie_setting","1"]],"bzgvin.it":[["set-cookie","ris_cookie_setting","1"]],"calendly.com":[["set-cookie","gdpr_dismissal","true"]],"cambridge-centre.fr":[["rc","unreadable-display","","stay"]],"campergarage.es":[["set-cookie","cmplz_banner-status","dismissed"]],"campingdusoleil.com":[["rc","unreadable-display","","stay"]],"camspider.com":[["set-local-storage-item","adblockNoticePermaDismiss","true"]],"canalplus.com":[["set-cookie","cp_cc_ads","0"],["set-cookie","cp_cc_required","1"],["set-cookie","cp_cc_stats","0"]],"canalpluskuchnia.pl":[["set-cookie","cp_cc_ads","1"],["set-cookie","cp_cc_stats","1","","reload","1"]],"canvascga.com":[["set","realCookieBanner","undefined"]],"careers.omedastudios.com":[["set-cookie","_ttCookiePermissions","0"]],"cataloagedeoferte.ro":[["set-cookie","CookieConsent","true"]],"cateringvandenberg.nl":[["rc","wcc-popup-overflow","body","stay"]],"cbr.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"ceratrends.com":[["rc","wcc-popup-overflow","body","stay"]],"certificationexamanswers.890m.com":[["acs","document.oncontextmenu"]],"cespun.eu":[["rmnt","script","contextmenu"]],"chargenowforbusiness.com":[["set-cookie","CN_ALLOW_FUNCTIONAL_COOKIE","false"]],"check24.de":[["set-cookie","c24consent","f","","domain",".check24.de","reload","1"]],"cheersandgears.com":[["rmnt","script","fetch"]],"chessarena.gg":[["set-local-storage-item","cookie-consent","necessary"]],"chestnut-tree-house.org.uk":[["rc","wcc-popup-overflow","body","stay"]],"cifraclub.com":[["set-cookie","cc-cookie-policy","true"]],"cine.to":[["aopr","oncontextmenu"]],"citaalen.com":[["set-cookie","cookiesAccepted","true"]],"claritin.ca":[["aopr","cookieconsent.Popup"]],"clasicotas.org":[["ra","oncontextmenu|onselectstart|ondragstart"]],"climbing.com":[["remove-cookie","xbc"]],"clk.ink":[["set","blurred","false"]],"clubulbebelusilor.ro":[["aeld","contextmenu"]],"clutchpoints.com":[["set-local-storage-item","nbaSIBWidgetSeen","true"]],"coag.pl":[["aopr","document.oncontextmenu"]],"coloradoan.com":[["nostif","gnt_mol_oy"]],"colourbox.com":[["set-cookie","cookie_consent_all","1"]],"computacenter.com":[["set-cookie","consent_seen","1"]],"computerbase.de":[["set-cookie","consent","1"],["set-cookie","OptanonAlertBoxClosed","1"]],"comune.rodengo.bz.it":[["set-cookie","ris_cookie_setting","1"]],"cookhero.gr":[["acs","document.oncontextmenu"]],"cool-etv.net":[["aeld","contextmenu"],["set","console.clear","noopFunc"]],"cora-broodjes.nl":[["set-cookie","ckies_cloudflare","allow"],["set-local-storage-item","cookies-selected","true"],["set-cookie","ckies_google_analytics","deny","","reload","1"]],"cosel-portal.com":[["set-cookie","tiki_cookies_accepted","y","","reload","1"]],"countess.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"cours-de-droit.net":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"cpc2r.ch":[["set-local-storage-item","CPCCookies","true"]],"cranimax.com":[["set","realCookieBanner","undefined"]],"croisieresendirect.com":[["set-cookie","accepted","1"]],"crunchbase.com":[["set-local-storage-item","entity-limiter-views","$remove$"]],"cuba-buddy.de":[["set-local-storage-item","cb-accept-cookie","true"]],"cyberkrafttraining.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"cypherscans.xyz":[["aeld","contextmenu"]],"d0000d.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dach-bau.info":[["set-cookie","Consent","0"]],"dailycommercial.com":[["nostif","gnt_mol_oy"]],"dailymotion.com":[["set-cookie","cookie_policy_closed","1","","reload","1"]],"data-media.gr":[["set-cookie","data-privacy-statement","true"]],"data.lib.vt.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"datahub.hku.hk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"dbs.si":[["set-cookie","AcceptedCookies","true"]],"dbschenker.com":[["set-cookie","allow-marketing-tracking","false"],["set-cookie","allow-statistical-tracking","false"],["set-cookie","privacy-notice-responded","0"],["set-local-storage-item","cookie_usage_acknowledged_2","1"],["set-local-storage-item","cookie_usage_acknowledged_2","true"]],"deccanherald.com":[["aopr","document.oncopy"]],"deepl.com":[["set-local-storage-item","LMT_freeUserUsageBlock","$remove$"],["set-local-storage-item","onboardingData","$remove$"],["set-session-storage-item","LMT_browserExtensionPromo.displayed","true"],["aeld","copy"]],"denk-doch-mal.de":[["set","realCookieBanner","undefined"]],"derhoerbuchblog.de":[["set","realCookieBanner","undefined"]],"derklassiker.de":[["set","realCookieBanner","undefined"]],"dermatologyadvisor.com":[["remove-cookie","hmmet"]],"desser.co.uk":[["set","realCookieBanner","undefined"]],"deutsche-alpenstrasse.de":[["set-cookie","cookie-consent","declined","","","reload","1"]],"developer-blog.net":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"developer.nintendo.com":[["set-cookie","tGoogleAnalytics","disabled"],["set-cookie","trackEssentialCookie","enabled","","reload","1"]],"devo-veenendaal.nl":[["set-cookie","consent-cookies","1"]],"devowl.io":[["set","realCookieBanner","undefined"]],"dewesoft.com":[["set-local-storage-item","consent","false"]],"dialectsarchive.com":[["aopr","disableSelection"],["aopw","nocontext"]],"diariodoiguacu.com.br":[["ra","ondragstart|onselectstart"]],"diy-academy.eu":[["set-cookie","cookieconsent_status","allow"]],"dnb.no":[["set-cookie","consent_level","2"]],"dobrepitie.sk":[["set-cookie","site-agreement","1"]],"doc.mbalib.com":[["ra","onbeforecopy|oncontextmenu|oncopy|ondragstart|onmouseup|onselect|onselectstart"]],"doctordle.org":[["set-cookie","doctordle_cookies_accepted","true"]],"domaintools.com":[["set","realCookieBanner","undefined"]],"domeny.art.pl":[["set-cookie","artpl_cmp_cookies","accepted","","reload","1"]],"dooodster.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dukeofdevonshireeastbourne.co.uk":[["set-cookie","ce-cookie","N"]],"e-pole.pl":[["set-cookie","epole_cookies_settings","true"]],"e-sushi.fr":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"eboo.lu":[["set-cookie","PostAnalytics","0"]],"eda.ru":[["set-cookie","CookiesAccept","accept"]],"edn.com":[["aopr","googletag"]],"edostavka.by":[["set-local-storage-item","isAcceptCookiesNew","true"]],"efortuna.pl":[["set-cookie","cookie_layer","1"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"ekiwi.de":[["set","realCookieBanner","undefined"]],"elektroda.pl":[["nostif","typeof loadElement"]],"eltiempo.com":[["set-cookie","cookies-info","true"]],"emall.by":[["set-local-storage-item","isAcceptCookiesNew","true"]],"embed.su":[["aeld","keydown","123"],["nosiif","devtool"]],"emmidessert.it":[["set-cookie","dessert-italia-ita-cookie-categories","essential"]],"emminutritionals.com":[["set-cookie","emmi-nld-cookie-categories","essential"]],"engie.be":[["set-cookie","cookie-consent","required"]],"enso.de":[["set-cookie","allowAnalyticalCookies","false"],["set-cookie","allowMarketingCookies","false"],["set-cookie","cookiesAccepted","true"]],"environment.data.gov.uk":[["set-cookie","defra-cookie-banner-dismissed","true","","reload","1"]],"equifab.es":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"erbsenprinzessin.com":[["set","realCookieBanner","undefined"]],"erlus.com":[["set-local-storage-item","pc-cookie-accepted","true"],["set-local-storage-item","pc-cookie-technical-accepted","true"]],"esa.nask.pl":[["set-cookie","GA_COOKIE_SMOG","accepted"]],"esim.redteago.com":[["set-cookie","nCookieVisible","2"]],"esimplus.me":[["set-cookie","cookie-consent","1","","reload","1"]],"etbygg.com":[["set-cookie","cmplz_banner-status","dismissed"]],"eurogamer.net":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"eurogamer.pl":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"event.educathai.com":[["set-cookie","educathai_educa2024_cookie_accepted","accept"]],"eversports.de":[["set-local-storage-item","dnt","1"],["set-local-storage-item","dnt_a","1"]],"exaktacreative.se":[["set-cookie","user_cookie_consent","1"]],"exclusifvoyages.com":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"exeedme.com":[["set-cookie","cookie-consent","true"]],"fabriziovanmarciano.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"fantricks.com":[["acs","jQuery","contextmenu"]],"faroshopping.it":[["set-cookie","tincx_cookie_notice_accepted","true"]],"faucetcrypto.com":[["set-local-storage-item","cookieconsent","true"]],"ffzblossin.de":[["set","realCookieBanner","undefined"]],"figshare.com":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"figshare.manchester.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"filiser.eu":[["nostif","(!0)","8000"]],"financeads.com":[["set","realCookieBanner","undefined"]],"firstclasswatches.co.uk":[["set-cookie","cky-action","yes"],["set-cookie","cookieyes-functional","no"],["set-cookie","cookieyes-necessary","yes"],["set-cookie","cookieyes-other","no"]],"fizz.hu":[["set-cookie","cookie.consent.finished","1"],["set-cookie","gdpr_level","1"]],"fjordd.com":[["aeld","contextmenu","preventDefault"],["rmnt","script","initPopup"]],"flashgames.ru":[["set-cookie","OptanonAlertBoxClosed","true"]],"fletcherzakelijk.nl":[["set-cookie","acceptCookies","true"]],"flightconnections.com":[["nostif","premiumShown"]],"flightradar24.com":[["set-cookie","map_new_features_new_flightradar24_com_label_options","1"]],"fnbrjp.com":[["nostif","広告"]],"folsomwinespirits.com":[["set-cookie","isAnAdult","true"]],"ford-bodach-borgentreich.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-diermeier-muenchen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-nuding-remshalden.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-wagner-mayen.de":[["set-cookie","hide-gdpr-bar","true"]],"forums.hfboards.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"fosspost.org":[["nostif","an_message","500"]],"foto-gregor.de":[["set-cookie","cookie_accepted","false","","reload","1"]],"foxracingshox.de":[["set-cookie","allowCookie","1"]],"freereadnovel.online":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"frigge-dinstak.de":[["set","realCookieBanner","undefined"]],"frohreich.de":[["set","realCookieBanner","undefined"]],"fruugonorge.com":[["set-cookie","consents","essential"]],"funko.com":[["set-cookie","welcome_modal_email_ts","1"]],"funnelcockpit.com":[["rc","gdpr-cookie-notice-center-loaded","","stay"]],"g-nestle.de":[["set-cookie","cookie-preference","1"]],"gadis.es":[["set-cookie","analyticsAccepted","false"],["set-cookie","cookieAccepted","true"]],"gameseal.com":[["set-cookie","cookie-preference","1"]],"gamesradar.com":[["set-cookie","FTR_Article_PageView","2"]],"gaminplay.com":[["aeld","contextmenu"]],"gardenmediaguild.co.uk":[["set-cookie","AllowCookies","false","","reload","1"]],"gastroenterologyadvisor.com":[["remove-cookie","hmmet"]],"gcol.de":[["set","realCookieBanner","undefined"]],"gefahrgutjaeger.de":[["set","realCookieBanner","undefined"]],"gem.cbc.ca":[["set-cookie","gem_cookies_usage_production","1"]],"gemeinde.stchristina.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.stmartininthurn.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.stpankraz.bz.it":[["set-cookie","ris_cookie_setting","1"]],"generalprepper.com":[["set-cookie","cookie_accepted","1"]],"getaawp.com":[["set","realCookieBanner","undefined"]],"ghostinternational.com":[["set-cookie","pum-9213","true"],["set-cookie","pum-9137","true"]],"gigantti.fi":[["set","cicc.cookie_cat_statistic","true"]],"gitconnected.com":[["set-local-storage-item","201805-policy|accepted","1"]],"glam.com":[["aeld","copy"]],"glistranieri.it":[["set","disableSelection","noopFunc"],["aopw","document.oncontextmenu"]],"globalfocusmagazine.com":[["rc","wcc-popup-overflow","body","stay"]],"gmr-foto.at":[["set-cookie","fmalertcookies","true"]],"gmx.com":[["set-cookie","euconsent-bypass","1"],["aeld","mouseout","openLayer"]],"gnome-look.org":[["rmnt","script","btnHtml"],["nano-stb","count"]],"gocarbon.co":[["set-cookie","age-checked","1"]],"goldpreis24.de":[["set","realCookieBanner","undefined"]],"golfschwung.com":[["set-cookie","Consent","0"]],"goodbakery.ru":[["acs","document.oncontextmenu"],["acs","jQuery","contextmenu"]],"goodgeorge.kiwi.nz":[["set-cookie","isAnAdult","true"]],"gooloo.de":[["set","realCookieBanner","undefined"]],"gp.tsukimi.club":[["json-prune","ads.[].imageUrl"]],"gramatica-alemana.es":[["set-cookie","cookiewarning","1"]],"grizly.pl":[["set-cookie","mCs-chk","1"]],"grizly.sk":[["set-cookie","mCs-chk","1"]],"grupo-loma.com":[["set","realCookieBanner","undefined"]],"gs1.se":[["set-local-storage-item","allowFunctionalCookies","false"],["set-local-storage-item","cookiesAccepted","true"]],"gtaservers.org":[["set-local-storage-item","np-west-signup-seen-2","1"]],"guljaj.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"gvcc.net":[["set-cookie","ris_cookie_setting","1"]],"hainaut-caravaning.be":[["set-cookie","cookie-ok","1","","reload","1"]],"handelsbanken.no":[["set-cookie","shb-consent-cookies","false"]],"hannahgraaf.com":[["set-cookie","confirmed-cookies","1","","reload","1"]],"happyplates.com":[["set-local-storage-item","consentAccepted","true"],["set-local-storage-item","marketingConsentAccepted","false"]],"hardware-helden.de":[["set","realCookieBanner","undefined"]],"harvardmagazine.com":[["aopr","googletag"]],"hashop.nl":[["set-cookie","cookie_preference","1"]],"haus-bergbluemle.de":[["set-cookie","Consent","0"]],"haus-ladn.de":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_stripe","allow"]],"helitransair.com":[["set-cookie","privacyLevel","2","","reload","1"]],"hellokpop.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"hentailib.org":[["set-local-storage-item","cookies-toast-shown","true"]],"heraldtribune.com":[["nostif","gnt_mol_oy"]],"highliferoleplay.net":[["set-cookie","HighLife-cookie-accept","true"]],"hobbyhall.fi":[["set-cookie","CA_DT_V2","0","","reload","1"],["set-cookie","CA_DT_V3","0"]],"holidayworld.com":[["set-cookie","pp-acknowledged","true"]],"hollywoodmask.com":[["aeld","/copy|cut|paste|selectstart/"],["nostif","pop"]],"holzkisten-fabrik.de":[["set","realCookieBanner","undefined"]],"homebrewwest.ie":[["set-cookie","euCookiePref","0","","reload","1"]],"honest-broker.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"hookahx.de":[["set","realCookieBanner","undefined"]],"hopheads.com.au":[["set-cookie","age-checked","1"]],"hotel-aigoual.com":[["rc","unreadable-display","","stay"]],"hotelki.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hotspring.be":[["rc","wcc-popup-overflow","body","stay"]],"hundewelpe.de":[["set","realCookieBanner","undefined"]],"hutwiller.de":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_stripe","allow"]],"hygiene-shop.eu":[["set-local-storage-item","cookiePreference","required"]],"iberostar.com":[["set-cookie","cookies_consent","true"]],"icould.com":[["set-cookie","complianceCookie","true"],["set-cookie","gaconsent","true"]],"ige.ch":[["set-cookie","cb-enabled","declined"]],"ilsaggiatore.com":[["set-cookie","cookies_analytics_enabled","0","","reload","1"]],"immobilien-skiba.de":[["set","realCookieBanner","undefined"]],"imprints.de":[["set","realCookieBanner","undefined"]],"inds.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"indystar.com":[["nostif","gnt_mol_oy"]],"inews.hket.com":[["rc","no-scroll","html","stay"]],"info-beihilfe.de":[["acs","document.oncontextmenu"]],"infowars.com":[["set-session-storage-item","stream","true"]],"ing.nl":[["set-cookie","cookiepref","1"]],"inquirer.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"invado.pl":[["aeld","/contextmenu|copy/"]],"ipouritinc.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"]],"ithacajournal.com":[["nostif","gnt_mol_oy"]],"jailbreakchangelogs.xyz":[["set-session-storage-item","adblock_modal_dismissed","true"]],"jamilacuisine.ro":[["aost","document.oncontextmenu"],["aost","Object","/(?=^(?!.*(jquery|inlineScript)))/"]],"jankarres.de":[["set","realCookieBanner","undefined"]],"japanesewithtomo.com":[["rmnt","script","contextmenu"]],"javea.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"jetv.xyz":[["nosiif","devtoolsDetector"]],"jisc.ac.uk":[["set-cookie","cookiesPrivacy","false"]],"jobs.cz":[["rc","show--consent","body","stay"]],"jootc.com":[["aopr","disable_copy"],["aopr","disable_hot_keys"],["aopw","document.oncontextmenu"],["set","document.onkeyup","null"],["set","document.ondragstart","null"],["aeld","keydown"]],"josefbergs.com":[["set","realCookieBanner","undefined"]],"jpost.com":[["rmnt","script","stopRefreshSite"]],"jpralves.net":[["set-cookie","cookiewarning","Y"]],"jusbrasil.com.br":[["set-cookie","br-lgpd-cookie-notice-agreement-v1","1"],["aeld","/^(?:contextmenu|copy)$/","preventDefault"]],"justswallows.net":[["set","console.clear","undefined"]],"k33.com":[["set-local-storage-item","cookies-product","NO"],["set-local-storage-item","showCookies","NO"]],"kaffeediscount.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"karlknauer.de":[["set-cookie","cookieconsent_status","allow"]],"kashiland.jp":[["rmnt","script","onselectstart"]],"kashinavi.com":[["ra","oncopy|onSelectStart|oncontextmenu|style","[oncopy],[oncontextmenu]"]],"katholisches.info":[["nostif","pop"]],"keengamer.com":[["aopr","__cmpGdprAppliesGlobally"]],"kektura.hu":[["set-cookie","cookie_consent_","1"]],"kellermann-online.com":[["set-cookie","cookie-preference","1"]],"khebikes.com":[["set-cookie","cookie-preference","1"]],"kiakkoradio.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"kinechartreuse.com":[["rc","unreadable-display","","stay"]],"kinetico.co.uk":[["set-cookie","ud_accept_analytical_cookies","0"],["set-cookie","ud_accept_marketing_cookies","0"]],"kingp2p.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"klartext-ne.de":[["rmnt","script","contextmenu"]],"klubnichka.live":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"kmo.to":[["set","console.clear","undefined"]],"kovopolotovary.sk":[["set-cookie","web-cookies","2"]],"krunkercentral.com":[["acs","document.onkeydown"]],"ksp.co.il":[["set","dataLayer","[]"],["set","gtag","noopFunc"]],"ktla.com":[["aeld","scroll"]],"kuechenboerse.de":[["set","realCookieBanner","undefined"]],"kulinarnastronamocy.pl":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"kzvb.de":[["set-cookie","cookie-optin","true"]],"labreakfastburrito.com":[["aopr","PieScriptConfig"]],"lagundo.eu":[["set-cookie","ris_cookie_setting","1"]],"lasestrellas.tv":[["set-cookie","_tvsPrivacy","true"]],"laughingbonesbrewing.com":[["set-cookie","age-checked","1"]],"lavanguardia.com":[["set","Didomi","noopFunc"]],"lawyersweekly.com.au":[["set-local-storage-item","articleGateData","$remove$"]],"lb-consultores.com":[["set","realCookieBanner","undefined"]],"ldnews.com":[["nostif","gnt_mol_oy"]],"learninsta.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"legab.it":[["set-cookie","CookieConsent","false"]],"leki.com":[["set-cookie","cookie-preference","1"]],"lenovocampus.de":[["set","realCookieBanner","undefined"]],"lesoir.be":[["aopr","abStyle"]],"letsverne.com":[["set-local-storage-item","framerCookiesDismissed","true"]],"lexlog.pl":[["aopr","document.oncontextmenu"],["aopr","document.onmousedown"],["aopr","document.onselectstart"]],"lhsystems.com":[["set-cookie","comfortCookiesAccepted","false"],["set-cookie","functionalCookiesAccepted","true"],["set-cookie","necessaryCookies","true"],["set-cookie","statisticsCookiesAccepted","false"]],"librospreuniversitariospdf.blogspot.com":[["acs","$","contextmenu"],["acs","document.onselectstart"],["acs","onload"],["acs","document.onkeydown"],["aopr","checkDevTools"]],"librumreader.com":[["set-local-storage-item","firstVisit","false"]],"lifespan.io":[["set-cookie","pum-128427","true"]],"lightcon.com":[["set","realCookieBanner","undefined"]],"lilcat.com":[["set-cookie","cookie-consent","accepted","","reload","1"]],"listatv.pl":[["ra","oncontextmenu"]],"london-tickets.co.uk":[["set-cookie","consent-state","true"]],"lotusantwerp.wacs.online":[["set-cookie","cookie_consent_user_accepted","true"]],"love4u.net":[["ra","oncontextmenu","[oncontextmenu=\"return false;\"]"]],"loverslab.com":[["nano-sib"]],"lukesliquors.com":[["set-cookie","age_verification","1"]],"luyenthithukhoa.vn":[["acs","document.oncontextmenu"]],"lvs.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"m.economictimes.com":[["set-session-storage-item","nudgeStickyBannerHide","true"]],"magdeleyns.be":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"magtv.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"mahindraelectricsuv.com":[["set-cookie","consentTracking","false"]],"malermeister-shop.de":[["set-cookie","cookie-preference","1"]],"mamm.ch":[["set-cookie","_pandectes_gdpr","1"]],"mandiner.hu":[["rc","modal-open","body","stay"]],"marchtrenk.gv.at":[["set-cookie","ris_cookie_setting","1"]],"mario-kaps.de":[["set","realCookieBanner","undefined"]],"marionstar.com":[["nostif","gnt_mol_oy"]],"marketwinestore.com.au":[["set-session-storage-item","notification","false"]],"mart.family.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"mcskinhistory.com":[["no-fetch-if","ads"]],"mediahiburan.my":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"medievalists.net":[["aopr","googletag"]],"medikament.sk":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"medium.com":[["set-local-storage-item","201805-policy|accepted","1"],["aeld","scroll"]],"megaxh.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"meinspielplan.de":[["set-cookie","_msp_cc","yes"],["set-cookie","ga-disable","true"]],"melee.gg":[["set-cookie","AnalyticalCookie","false"],["set-cookie","CookieConsent","true","","reload","1"],["set-cookie","FunctionalCookie","true"]],"memoreclame.nl":[["rc","wcc-popup-overflow","body","stay"]],"merriam-webster.com":[["aopr","__cmpGdprAppliesGlobally"]],"messer-lagerverkauf.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"mesterslagteren.dk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"meteoblue.com":[["set","mb.advertisingShouldBeEnabled","false"]],"mexiconewsdaily.com":[["set","detectPrivateMode","noopFunc"]],"minhaconexao.com.br":[["set-cookie","show_cookies_banner","false"]],"missinfogeek.net":[["set","realCookieBanner","undefined"]],"mm9841.cc":[["acs","document.oncontextmenu"],["set","devtoolsDetector","undefined"]],"mojposao.hr":[["set-local-storage-item","cookies-policy-accepted","true"]],"monarchmoney.com":[["set-cookie","exit-intent","true"]],"moneyexcel.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"moneyguru.co":[["acs","$",".height"]],"moneyweek.com":[["set-cookie","FTR_Article_PageView","2"]],"mongri.net":[["acs","document.oncontextmenu"],["aopr","getSelection"]],"monitorulneamt.ro":[["set-cookie","pum-172440","true"]],"montecwear.com":[["set-local-storage-item","cookieBannerShown","true"]],"mora.hu":[["set-cookie","RBCookie-Alert","1"]],"motortrader.com.my":[["aopr","canRunAds"]],"mountain.com":[["set-cookie","euCookieNotify","agree"]],"mtbtutoriales.com":[["aopw","reEnable"],["acs","document.oncontextmenu"]],"musehub.com":[["set-local-storage-item","cookieConsent","denied"]],"music-service-geiger.de":[["set","realCookieBanner","undefined"]],"musti.no":[["set-cookie","mno_consent_necessary","granted","","reload","1"]],"mytwintiers.com":[["aeld","scroll"]],"n1mwq.org":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"naaree.com":[["aopw","disableEnterKey"],["ra","style","body[style=\"user-select: none;\"]","stay"],["set","document.oncontextmenu","null"],["set","document.onkeydown","null"]],"napiszar.com":[["acs","document.createElement","setTimeout"]],"napos.cz":[["set-cookie","cmplz_banner-status","dismissed"]],"narrabeenporters.com.au":[["set-cookie","goodav_block_popup-418","0"]],"nationalgeographic.com":[["aeld","scroll"],["aeld","contextmenu"]],"nationalholidays.com":[["set-cookie","cookiePermission","essential"]],"nbcboston.com":[["aeld","scroll"]],"ncrtsolutions.in":[["aopr","document.body.onselectstart"]],"near.ai":[["set-local-storage-item","cookies-preference","1"]],"nebenwerte-magazin.com":[["set","realCookieBanner","undefined"]],"neokyo.com":[["set-cookie","__cookie_consent","false"]],"netrix.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"neuroteam-metz.de":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"neustift-stubaital.gv.at":[["set-cookie","ris_cookie_setting","1"]],"newatlas.com":[["aopr","__cmpGdprAppliesGlobally"]],"newbernsj.com":[["nostif","gnt_mol_oy"]],"news.dwango.jp":[["ra","oncontextmenu","body"]],"newsherald.com":[["nostif","gnt_mol_oy"]],"neyrologos.gr":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"ngs22.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"ngs42.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"novayagazeta.eu":[["set-cookie","cookies-informer-close","true"]],"novgorod.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"noweconomy.live":[["set","document.oncontextmenu","null"]],"ntuplay.xyz":[["acs","document.onkeypress"]],"nucom.odoo.dev":[["set-cookie","website_cookies_bar","true"]],"objectivebayesian.com":[["set-cookie","popup_closed","true"]],"oekolandbau.de":[["set-cookie","CookieConsent","mandatory"]],"ofuxico.com.br":[["aeld","copy"]],"ohotaktiv.ru":[["set-cookie","acceptCookieOhotaktiv","1"]],"olarila.com":[["nostif","offsetHeight"]],"olx.kz":[["set-cookie","cookieBarSeen","true"]],"omniplex.ie":[["set-cookie","a1wcc","NECESSARY"]],"omroepflevoland.nl":[["set-local-storage-item","of_cookies_consent","YES"],["set-local-storage-item","of_cookiewall_banner_seen","YES"]],"omviajesyrelatos.com":[["set-cookie","cmplz_banner-status","dismissed"]],"oneal.eu":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"onlinelekarna.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"onlinetools.com":[["nano-sib","Clipboard","1000","0.001"]],"onna.kr":[["aeld","copy"],["aopw","document.oncontextmenu"],["aopw","document.ondragstart"],["aopw","document.onselectstart"]],"opencascade.com":[["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"openweathermap.org":[["set-cookie","gdpr_cookie_consent","declined"]],"ortorex.ch":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"ousuca.com":[["set","realCookieBanner","undefined"]],"ovpay.nl":[["set-cookie","dismissed_cookie_banner_recaptcha","true"]],"ownit.se":[["set-cookie","ownit_cookie_data_permissions","1"]],"pacstall.dev":[["set-cookie","privacy-policy-accepted","1"]],"paintcare.org":[["set-cookie","aca_terms_accepted","1"]],"pal-item.com":[["nostif","gnt_mol_oy"]],"pancernik.eu":[["set-local-storage-item","df-cookies-allowed","true"],["set-local-storage-item","show_consent_modal","1"]],"parking.praha.eu":[["set-cookie","cookies_and_content_security_policy","false"]],"parrotsec.org":[["set-local-storage-item","cookieConsent","true"]],"pawread.com":[["set-local-storage-item","countChapterNum","$remove$"]],"paxdei.th.gl":[["nostif",".getState();","4500"]],"peaks.com":[["set-cookie","allow_cookie","false"]],"pervyi-tv.online":[["set-cookie","cookieIsAgree","true"]],"pfotenmond.de":[["set-cookie","_pandectes_gdpr","1"]],"photoacompanhantes.com":[["set-cookie","cookies_aceptadas","0"]],"photopoint.ee":[["set-cookie","consent-shown","1"]],"picallow.com":[["acs","document.oncontextmenu","nocontextmenu"]],"picockpit.com":[["set","realCookieBanner","undefined"]],"pinel.de":[["set","realCookieBanner","undefined"]],"pirmediat.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"pixieset.com":[["set-cookie","pixieset_analytics","denied"],["set-cookie","pixieset_marketing","denied"]],"pjstar.com":[["nostif","gnt_mol_oy"]],"playlumi.com":[["set-cookie","cookies-functional","true"],["set-cookie","cookies-marketing","false"],["set-cookie","cookies-preferences","false"]],"playtesting.games":[["set-cookie","myAwesomeCookieName3","true"]],"pngtree.com":[["set-local-storage-item","cps28","1"],["set-local-storage-item","gtag.consent.option","1"]],"pocket-pirates-prt.de":[["set","realCookieBanner","undefined"]],"poconorecord.com":[["nostif","gnt_mol_oy"]],"polizei.bayern.de":[["set-cookie","baypol_banner","true"],["set-cookie","baypol_functional","true"]],"polyflore.net":[["nostif","adBlockDetected"]],"pomelo.la":[["set-cookie","POMELO_COOKIES","1"]],"pornermates.com":[["set-cookie","mayor_edad","1"]],"pornhd8k.net":[["nosiif","debugger"]],"portal.sds.ox.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"posterstore.at":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.de":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.nl":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.se":[["set-cookie","synapse-cookie-preferences-set","true"]],"practicetestgeeks.com":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"prageru.com":[["set-cookie","cookie-status-analytics","false"],["set-cookie","cookies-functional","true"],["set-cookie","cookies-marketing","false"]],"press-citizen.com":[["nostif","gnt_mol_oy"]],"pressconnects.com":[["nostif","gnt_mol_oy"]],"pricespy.co.uk":[["set-cookie","privacy_settings","1"]],"printscan.com":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"project529.com":[["set-cookie","cookies_ok","true"]],"protest.eu":[["set","BIA.ADBLOCKER","false"]],"prpm.dbp.gov.my":[["set","document.onmousedown","trueFunc"]],"przegladpiaseczynski.pl":[["set-cookie","cc","1"],["aeld","contextmenu"]],"pulmonologyadvisor.com":[["remove-cookie","hmmet"]],"pupupul.site":[["set","devtoolsDetector.launch","noopFunc"]],"pureselfmade.com":[["set","realCookieBanner","undefined"]],"puzzle-jigsaw-sudoku.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-loop.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-nurikabe.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-words.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.be":[["set-cookie","puzzleyou-be_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.se":[["set-cookie","puzzleyou-se_cookies_consent_allowlist","0","","reload","1"]],"quora.com":[["set","ansFrontendGlobals.settings.signupWallType","undefined"]],"radicalsandvictuallers.co.uk":[["set-cookie","ce-cookie","N"]],"radyofenomen.com":[["set-cookie","isSiteCookieReviewed","0","","reload","1"]],"raiffeisen-mobil.at":[["set-cookie","cookieconsent","1"],["set-cookie","permission_funktional_cookies","1"]],"ramotavla.se":[["rc","wcc-popup-overflow","body","stay"]],"random-group.olafneumann.org":[["set-local-storage-item","consent","true"]],"ranobelib.me":[["set-local-storage-item","cookies-toast-shown","true"]],"ratemyprofessors.com":[["set-cookie","ccpa-notice-viewed-02","true"]],"rayatoys.com":[["set-cookie","amcookie_allowed","1"]],"rdc.pl":[["set-cookie","cookiepolicyinfo_new","true"]],"readly.com":[["set-cookie","ReadlyCookieConsent","7","","reload","1"]],"realfinanceblogcenter.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"recordnet.com":[["nostif","gnt_mol_oy"]],"rededaltro.com.br":[["set-cookie","ocn_accepted","true"]],"reebok.eu":[["set-local-storage-item","SHOW_COOKIE_BANNER","no"]],"regiomolkerei.ch":[["set-cookie","rmbb-che-cookie-categories","essential"]],"reliant.co.uk":[["set-cookie","gdpr_cookie_consent","1"],["set-cookie","gdpr_cookie_groups","1"]],"remington-europe.com":[["set-session-storage-item","cookies_dismissed","1"]],"renebieder.com":[["set-local-storage-item","agreed-cookies","true"]],"repository.lincoln.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"resonate.coop":[["set-cookie","cookieconsent_status","allow"]],"restaurantsbrighton.co.uk":[["set","realCookieBanner","undefined"]],"rgj.com":[["nostif","gnt_mol_oy"]],"rgu.ac.uk":[["set-cookie","_rguCookieConsent","0"]],"rhein-pfalz-kreis.de":[["set-local-storage-item","PrivacyPolicy[][core]","forbidden"],["set-local-storage-item","PrivacyPolicy[][maps]","forbidden"],["set-local-storage-item","PrivacyPolicy[][readSpeaker]","forbidden"],["set-local-storage-item","PrivacyPolicy[][tracking]","forbidden"],["set-local-storage-item","PrivacyPolicy[][videos]","forever"]],"rightsize.dk":[["set-local-storage-item","cookieStatus","rejected"]],"rockpapershotgun.com":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"rockpoint.sk":[["set-cookie","cookie-bar","0"]],"roemermann.com":[["set","realCookieBanner","undefined"]],"royalhuisman.com":[["set-cookie","framework_cookies_date","1","","reload","1"]],"rtu.lv":[["set-cookie","uce-cookie","N"]],"rubyvid.com":[["aopr","devtoolsDetector"]],"rule34.xxx":[["set-cookie","gdpr","1"],["set-cookie","gdpr-consent","1","","reload","1"]],"rustv.fun":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["ra","oncontextmenu|onkeydown|onselectstart","body","complete"]],"rutele.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"rutv.pw":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"ruwix.com":[["nostif","NoAd","8000"]],"sae.fsc.ccoo.es":[["set-cookie","config","1","","reload","1"]],"safe.global":[["set-local-storage-item","SAFE__analyticsPreference","false"],["set-local-storage-item","safe.global","false"]],"saikaiscans.net":[["aeld","contextmenu","[native code]"]],"salzerkfz.de":[["set","realCookieBanner","undefined"]],"samplerite.com":[["set-cookie","consented","false"]],"sanluisgarbage.com":[["set-local-storage-item","has-seen-ccpa-notice","true"]],"sarthaks.com":[["aeld","copy"]],"sasa.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"savvytime.com":[["acs","document.createElement","admiral"]],"sbnation.com":[["nostif","adsBlocked"]],"scheidegger.nl":[["set-cookie","privacy_level","1"]],"schneideranwaelte.de":[["set-local-storage-item","cookie_consent","true"]],"schrikdraad.net":[["set-cookie","cookiebar","1"]],"schuetzendepot.de":[["set","realCookieBanner","undefined"]],"scitec.it":[["set-cookie","cookie_consent","1","","reload","1"]],"sdewery.me":[["aopw","document.ondragstart"],["aopw","disableEnterKey"]],"sears.com":[["set-session-storage-item","banner_session","true"]],"seattletimes.com":[["set-cookie","st_newsletter_splash_desktop_seen","true"]],"secondlifetranslations.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"],["aost","encodeURIComponent","inlineScript"]],"secrid.com":[["set-cookie","cookies","true"]],"sekaikomik.live":[["acs","document.oncontextmenu"]],"semafor.com":[["set-session-storage-item","floating-sign-up-dismissed","true"]],"sertracen.com.pa":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"sevenforums.com":[["aopr","__cmpGdprAppliesGlobally"]],"sextubespot.com":[["set-cookie","kt_tcookie","1"],["set-cookie","splash_Page_Accepted","true"]],"shelly-shop.at":[["set-cookie","cookie-preference","1"]],"shingfangpastry.com":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.ac-zaun-center.de":[["set-cookie","cookie-preference","1"]],"shop.cosmed.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.euyansang.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"silvini.sk":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"similarweb.com":[["remove-cookie","sgID"],["rc","app-banner-parent","body","stay"]],"singkinderlieder.de":[["set-cookie","acceptMatomo","true"]],"skuola.net":[["aeld","/contextmenu|copy/"]],"skynet.certik.com":[["set-local-storage-item","cookie-consent-v2","false"]],"smartwielen.lu":[["set-session-storage-item","terms-and-policy-accepted","true"]],"snippet.finance":[["set","realCookieBanner","{}"]],"snocks.com":[["set-cookie","_pandectes_gdpr","1"]],"soulbounce.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"spanienweinonline.ch":[["set-cookie","amcookie_allowed","1"]],"spb.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"sports-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"sportsbusinessjournal.com":[["remove-cookie","sbj_archiveStatus"]],"sps-handel.net":[["set-cookie","cookie-preference","1"]],"stadt-bremerhaven.de":[["rmnt","script","Adblocker"]],"starcourier.com":[["nostif","gnt_mol_oy"]],"stargazette.com":[["nostif","gnt_mol_oy"]],"startuphub.ai":[["set-local-storage-item","cookie_consent","rejected"]],"stcatharinesstandard.ca":[["remove-cookie","/^tncms:meter:/"]],"stefan-froescher.eu":[["set","realCookieBanner","undefined"]],"stemcelldonor.be":[["rc","cookieconsent-active","body","stay"]],"steptalk.org":[["nostif","()","3000"]],"store.junesjourney.com":[["set-cookie","analyticsConsent","false"]],"store.servicenow.com":[["set-local-storage-item","sn.store.cookie_consent","1"]],"store.ubisoft.com":[["set-cookie","UBI_PRIVACY_POLICY_ACCEPTED","true"],["set-cookie","UBI_PRIVACY_VID_OPTOUT","false"]],"strinova.com":[["set-local-storage-item","lscache-klbq-bucket-scceptCookie","true"]],"supercamps.co.uk":[["set-cookie","SuperCamps.CookieConsent","True","","reload","1"]],"supercartoons.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"superherohype.com":[["aopr","__cmpGdprAppliesGlobally"]],"suzukicycles.com":[["rc","modal-open","body","stay"]],"swg-chemnitz.de":[["set","realCookieBanner","undefined"]],"tailorit.de":[["set-cookie","pr1Cookie","true"]],"tampereenratikka.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-markkinointi","no"],["set-cookie","cookielawinfo-checkbox-tilastointi","no"]],"tass.ru":[["set-local-storage-item","consentCookie","true"]],"tc-equipment.de":[["set","realCookieBanner","undefined"]],"tcpalm.com":[["nostif","gnt_mol_oy"]],"tecnotutoshd.net":[["aopw","document.oncontextmenu"],["acs","disableselect","reEnable"]],"tekinvestor.no":[["nostif","custom-modal-create-account-link"]],"telik.live":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tennis-live.su":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tenstorrent.com":[["set-cookie","tenstorrent_cookie_preferences","true"]],"tenvinilo-argentina.com":[["set-cookie","_tv_cookie_choice","1"],["set-cookie","_tv_cookie_consent","y"]],"tercihiniyap.net":[["ra","oncontextmenu|onselectstart|ondragstart"]],"terra-natur.com":[["set","realCookieBanner","undefined"]],"texte.work":[["ra","onkeydown|oncontextmenu","body"],["aopw","document.oncontextmenu"],["aopr","disableselect"]],"tfp.is":[["acs","document.oncontextmenu"]],"thai-novel.com":[["set-local-storage-item","analytics-consent","accepted"]],"theblackbullyarm.co.uk":[["set-cookie","ce-cookie","N"]],"thebootmappleboroughgreen.co.uk":[["set-cookie","ce-cookie","N"]],"thecliffcanfordcliffs.co.uk":[["set-cookie","ce-cookie","N"]],"thecoachingcompany.nl":[["set-cookie","consent-cookies","1"]],"thederbyarmsepsom.co.uk":[["set-cookie","ce-cookie","N"]],"thegamer.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"theherald-news.com":[["nostif","null"]],"thejunctionharborne.co.uk":[["set-cookie","ce-cookie","N"]],"themeslide.com":[["rmnt","script","preventDefault"]],"themonthly.com.au":[["remove-cookie","xbc"],["set-local-storage-item","rn","$remove$"]],"theolivepress.es":[["remove-cookie","issuem_lp"]],"thespectrum.com":[["nostif","gnt_mol_oy"]],"thestar.com":[["remove-cookie","/^tncms:meter:/"],["rc","kumulos-background-mask-blur","","stay"]],"thestar.com.my":[["aeld","mouseleave"]],"thetimesherald.com":[["nostif","gnt_mol_oy"]],"thevaporshoppeusa.com":[["set-cookie","bouncer","true"]],"thiele-tee.de":[["set-cookie","cookie-preference","1"]],"threads.net":[["set-session-storage-item","barcelona_mobile_upsell_state","1"]],"ticketingcine.fr":[["set-cookie","alertCookie","1","","reload","1"]],"tillit-bikes.shop":[["rc","disable","div","stay"]],"timesofindia.indiatimes.com":[["aeld","/^(mouseout|mouseleave)$/"]],"tmnews.com":[["nostif","gnt_mol_oy"]],"tommy.hr":[["set-cookie","ng-cc-accepted","accepted"],["set-cookie","ng-cc-necessary","1"]],"tomshardware.com":[["set-cookie","FTR_Article_PageView","2"]],"torontosom.ca":[["acs","document.oncontextmenu","preventDefault"]],"tourismus-uckermark.de":[["set","realCookieBanner","undefined"]],"tower.dev":[["set-local-storage-item","framerCookiesDismissed","true"]],"tradingview.com":[["set-cookie","cookiePrivacyPreferenceBannerProduction","accepted"],["nostif","window.loginStateChange.subscribe"]],"transport-versicherungen.info":[["set","realCookieBanner","undefined"]],"triviacreator.com":[["set-cookie","accept_cookies","accepted"]],"tsg6209weinheim.de":[["set","realCookieBanner","undefined"]],"tullingecupen.se":[["set-cookie","cookie_consent","false"]],"tundra.fi":[["rc","wcc-popup-overflow","body","stay"]],"tvin.su":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvnfabula.pl":[["aeld","contextmenu","a"]],"tvtropes.org":[["set-cookie","app-announcement-banner-count-guest","1"],["set-cookie","app-announcement-banner-guest","true"],["set","valid_user","true"]],"tw.puma.com":[["set-cookie","allowGetPrivacyInfo","true"]],"ubisoft.com":[["set-cookie","UBI_PRIVACY_ADS_OPTOUT","true"],["set-cookie","UBI_PRIVACY_POLICY_ACCEPTED","false"],["set-cookie","UBI_PRIVACY_POLICY_VIEWED","true"],["set-cookie","UBI_PRIVACY_VIDEO_OPTOUT","false"]],"ubuntudde.com":[["acs","String.prototype.charCodeAt","ai_"]],"uemeds.cn":[["ra","oncontextmenu|ondragstart|onselect"]],"ufa1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"ulevapronohy.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"ultraleds.co.uk":[["set-local-storage-item","cookies_accepted_6pzworitz8","true"]],"umk.co.jp":[["ra","oncontextmenu","body"]],"unikampus.net":[["aopr","document.oncontextmenu"]],"unobike.com":[["set-local-storage-item","cookieinfo","1"]],"uslsoftware.com":[["aeld","contextmenu"]],"v-o-e-unblock.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"valostore.fi":[["set-local-storage-item","cookieConsent","necessary"]],"vape.com":[["set-cookie","isAnAdult","true"]],"vater-it.de":[["set-cookie","pz_cookie_consent","true"]],"vcfrankfurt.de":[["set","realCookieBanner","undefined"]],"venom.foundation":[["set-local-storage-item","terms","accepted"]],"venusarchives.com":[["acs","jQuery","ai_adb"]],"verdadeiroolhar.pt":[["acs","document.onselectstart"]],"viba.barcelona":[["set-cookie","promptCookies","1"]],"vidstreaming.xyz":[["nosiif","devtoolsDetector"]],"viks.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"virpe.cc":[["ra","onselectstart"],["aeld","contextmenu"],["set","document.oncontextmenu","noopFunc"]],"visionias.net":[["acs","$","contextmenu"]],"vita-world24.de":[["set-cookie","cookie-preference","1"]],"viu.com":[["set-cookie","cookie_consent_accept","true"]],"vki.at":[["set-cookie","vkicookieconsent","0"]],"voeunblck.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"vogelsbergkreis.de":[["set-local-storage-item","PrivacyPolicy[][core]","forbidden"],["set-local-storage-item","PrivacyPolicy[][maps]","forbidden"],["set-local-storage-item","PrivacyPolicy[][readSpeaker]","forbidden"],["set-local-storage-item","PrivacyPolicy[][videos]","forever"]],"vpnmentor.com":[["nostif","bioEp.showPopup"]],"vyvymanga.net":[["rmnt","script","window.location.href"]],"waitrose.com":[["set-cookie","wtr_cookie_consent","1"],["set-cookie","wtr_cookies_functional","1"]],"warning.or.kr":[["ra","oncontextmenu"]],"wasserstoff-leitprojekte.de":[["ra","oncontextmenu","body","complete"]],"wattoo.no":[["set-cookie","sscm_consent_widget","1"]],"wattpad.com":[["ra","oncontextmenu"],["aeld","/copy|dragstart/"]],"wausaudailyherald.com":[["nostif","gnt_mol_oy"]],"wearconferences.com":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"wetu.com":[["rc","with-featherlight","","stay"]],"wetv.vip":[["set-cookie","optionalCookiePolicy","accept"]],"whatculture.com":[["set-cookie","FTR_Article_PageView","2"]],"whiskeyonline.co.nz":[["set-cookie","cx_age","true"]],"wifikaernten.at":[["set-cookie","consent","true"]],"wifiman.com":[["set-local-storage-item","hide-legal","1"]],"wildstarlogs.com":[["acs","attachToDom","ad-fallback"]],"windows101tricks.com":[["aopr","__cmpGdprAppliesGlobally"],["set","better_ads_adblock","0"]],"winesale.co.nz":[["set-cookie","_ageVerified","yes"]],"wizards.com":[["set-cookie","cookie-agreed","2"]],"wltx.com":[["aeld","/^(mouseout|mouseleave)$/"]],"woltair.cz":[["set-cookie","CM_BANNER","false"]],"world4.eu":[["aopw","document.oncontextmenu"],["acs","document.oncopy"],["acs","disable_copy"],["acs","disable_hot_keys"],["aopw","disable_ext_code"]],"worldairlineawards.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"worstbassist.com":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_google_analytics","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_youtube","allow"],["set-local-storage-item","cookies-selected","true"]],"www-essexlive-news.translate.goog":[["rmnt","script","loc.hostname"]],"wzl-zwickau.de":[["set","realCookieBanner","undefined"]],"xcen.se":[["set-cookie","cookieConsentGranted","1"]],"xclient.info":[["set","killads","true"]],"xhamster1.desi":[["set-cookie","cookie_accept","1"]],"xhreal2.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhspot.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhtotal.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhwide5.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xm.com":[["set-cookie","xmck_analytical","0"],["set-cookie","xmck_functional","1"],["set-cookie","xmck_popupShown","1"],["set-cookie","xmck_preferences","0"],["set-cookie","xmck_promotional","0"]],"xvideos.com":[["set","xv.disclaimer.displayNewCookiePopup","noopFunc"],["set","xv.disclaimer.displayCookiePopup","noopFunc"]],"xxxonlinegames.com":[["nostif","offsetHeight"]],"yambits.co.uk":[["set-cookie","acceptcookies","no","","reload","1"]],"yaoilib.net":[["set-local-storage-item","cookies-toast-shown","true"]],"yeane.org":[["acs","document.oncontextmenu"]],"yle.fi":[["set","yleConsentSdk._consentSdk._embedded_social_media","true"],["set","yleConsentSdk.show","noopFunc"]],"zhdcdn1.li":[["aeld","contextmenu"]],"zutobi.com":[["set-cookie","cky-action","yes"],["set-cookie","cookieyes-functional","no"],["set-cookie","cookieyes-necessary","yes"],["set-cookie","cookieyes-other","no"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
