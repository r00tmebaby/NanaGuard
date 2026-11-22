/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"123movies.co.uk":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"],["nostif","_0x"],["set","console.clear","noopFunc"]],"123movies.net":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"],["nostif","_0x"],["set","console.clear","noopFunc"]],"123movies.nl":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"],["nostif","_0x"],["set","console.clear","noopFunc"]],"164.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"20demidistance9elongations.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"59.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"68.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"86.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"9news.com":[["aeld","/^(mouseout|mouseleave)$/"],["aeld","scroll"]],"accace.com":[["set","realCookieBanner","undefined"]],"accgroup.vn":[["aeld","contextmenu"],["aopr","document.oncopy"]],"account.samsung.com":[["set-cookie","sa_enable","off"]],"action.com":[["set-local-storage-item","newsletterPopupCount","1"]],"adidas.at":[["set-cookie","notice_preferences","2"]],"adidas.ch":[["set-cookie","notice_preferences","2"]],"adidas.co.th":[["set-cookie","notice_preferences","2"]],"adidas.ie":[["set-cookie","notice_preferences","2"]],"adpres.ro":[["aopw","stopPrntScr"]],"afarmaciaonline.pt":[["set-cookie","cookie_consent","reject","","reload","1"]],"agvillagecamarguais.com":[["rc","unreadable-display","","stay"]],"airchina.es":[["set-cookie","EnableABTest","false"],["set-cookie","EnableFacebook","false"],["set-cookie","EnableGA","false"]],"airnavradar.com":[["set","ads_enabled","true"]],"akasaair.com":[["set-cookie","akasaairCookie","accepted"]],"akustik-projekt.at":[["set-cookie","cookie-preference","1"]],"allegro.co.uk":[["set-cookie","gdpr_permission_given","0"]],"allgaeuer-wanderimkerei.de":[["set-cookie","_pandectes_gdpr","1"]],"alljigsawpuzzles.pl":[["set-cookie","_pandectes_gdpr","1"]],"alljigsawpuzzles.ru":[["set-cookie","_pandectes_gdpr","1"]],"alma.be":[["set-cookie","__cookie_consent","false"]],"altranotizia.it":[["acs","disableSelection"]],"ambassadorcruiseline.com":[["set-cookie","cookies_accepted","1","","reload","1"]],"ames-tools.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"amway.co.uk":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"anafaustinoatelier.com":[["set-cookie","promptCookies","1"]],"anascrie.ro":[["rmnt","script","/document.onkeydown|document.ondragstart/"]],"angelmagazin.de":[["set","realCookieBanner","undefined"]],"anikoto.de":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"anime-drama.jp":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"animedao.com":[["aopr","devtoolsDetector"]],"anisearch.de":[["nostif","faq/whitelist"]],"anisubindo.com.br":[["aeld","keydown","preventDefault"],["aopr","document.onkeydown"],["aopr","document.oncontextmenu"],["aopw","disableSelection"]],"anisubindo.net":[["aeld","keydown","preventDefault"],["aopr","document.onkeydown"],["aopr","document.oncontextmenu"],["aopw","disableSelection"]],"anisubindo.nl":[["aeld","keydown","preventDefault"],["aopr","document.onkeydown"],["aopr","document.oncontextmenu"],["aopw","disableSelection"]],"anisubindo.ru":[["aeld","keydown","preventDefault"],["aopr","document.onkeydown"],["aopr","document.oncontextmenu"],["aopw","disableSelection"]],"anix.de":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"anix.es":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"anix.it":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"aplgo.com":[["set-cookie","cookie_agreement","1","","reload","1"]],"app.aave.com":[["set-cookie","userAcceptedAnalytics","false"]],"app.erevie.pl":[["set-cookie","cookies-accept","1"]],"applecinemas.com":[["set-local-storage-item","CookieWarning","true"]],"aqua-store.fr":[["set-cookie","abz_seo_choosen","1"]],"aquacard.co.uk":[["set-cookie","analyticsCookieConsent","0"],["set-cookie","cookieConsentSet","1"],["set-cookie","marketingCookieConsent","0"]],"arccinema.co.uk":[["set-cookie","a1wcc","all"]],"archon.gg":[["set","__NEXT_DATA__.props.pageProps.adPlacements","undefined"]],"asga.ch":[["set","realCookieBanner","undefined"]],"ashleyfurniture.com":[["set-local-storage-item","QMOptIn","false"]],"asiatv.com.br":[["aeld","contextmenu"]],"ask4movie.de":[["ra","oncontextmenu","html"],["set","console.dir","noopFunc"],["set","navigator.userAgent",""]],"ask4movie.pl":[["ra","oncontextmenu","html"],["set","console.dir","noopFunc"],["set","navigator.userAgent",""]],"assos.com":[["set-cookie","accept-cookies","true"],["set-cookie","popup-newsletter","true"]],"astroportal.com":[["set-cookie","applus_consent","1"]],"audiostereo.pl":[["nostif","adb"]],"aurumcars.de":[["set-cookie","ac_consent","f","","reload","1"]],"auto-doc.fr":[["aeld","mousedown","function(t)"]],"auto-doc.nl":[["aeld","mousedown","function(t)"]],"auto-doc.pl":[["aeld","mousedown","function(t)"]],"autodoc.nl":[["aeld","mousedown","function(t)"]],"autodoc24.fr":[["aeld","mousedown","function(t)"]],"autodoc24.it":[["aeld","mousedown","function(t)"]],"autodoc24.pl":[["aeld","mousedown","function(t)"]],"autoride.io":[["set-local-storage-item","cookies_marketing_consent","false"],["set-local-storage-item","cookies_necessary_consent","true"],["set-local-storage-item","cookies_statistics_consent","false"]],"autoride.sk":[["set-local-storage-item","cookies_marketing_consent","false"],["set-local-storage-item","cookies_necessary_consent","true"],["set-local-storage-item","cookies_statistics_consent","false"]],"beenverified.com":[["set-session-storage-item","privacyPopupShown","true"]],"beleaf.ch":[["set-cookie","beleaf-che-cookie-categories","essential"]],"bestjavporn.com":[["acs","document.oncontextmenu"],["set","devtoolsDetector","undefined"]],"bflix.net":[["aeld","keydown","[arguments];"],["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"bg-gledai.co.uk":[["rmnt","script","document.oncontextmenu"],["aeld","contextmenu"],["nosiif","debugger"]],"bg-gledai.org":[["rmnt","script","document.oncontextmenu"],["aeld","contextmenu"],["nosiif","debugger"]],"bg-gledai.pl":[["rmnt","script","document.oncontextmenu"],["aeld","contextmenu"],["nosiif","debugger"]],"bhoomtv.com":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"bhoomtv.net":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"bhoomtv.ru":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"bigbank.nl":[["set-cookie","_ck_decision","1"]],"bitblokes.de":[["acs","document.getElementsByTagName","null"]],"bitburger-braugruppe.de":[["set-cookie","bbgage18","true"]],"bittimittari.fi":[["set-local-storage-item","storagePermission","true"]],"blacktv.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"blaze.bet.br":[["set-cookie","accept_policy_regulation","1"]],"blaze.de":[["set-cookie","accept_policy_regulation","1"]],"blitzortung.org":[["set-cookie","CONSENT","15"]],"blommerscoffee.shipping-portal.com":[["set-local-storage-item","acceptedCookies","false"]],"bluemediafile.com":[["set","Time_Start","0"],["nano-sib","i--","","0.02"]],"bluemediafile.net":[["set","Time_Start","0"],["nano-sib","i--","","0.02"]],"blukit.com.br":[["set-cookie","blukit_novo","true"]],"bmovies.it":[["aeld","devtoolschange"]],"bo3.gg":[["set-local-storage-item","cookiesAccepted","true"]],"bolist.se":[["set-cookie","cookies_marketing_ok","false"],["set-cookie","cookies_ok","true"]],"boogschietshop.nl":[["set-cookie","cookie_preference","functional"]],"booking.reederei-zingst.de":[["set-cookie","functionality","false"],["set-cookie","performance","false"],["set-cookie","targeting","false"]],"box-manga.com":[["aeld","contextmenu"]],"bppulse.com":[["set-cookie","advertising-cookie-consent","denied"],["set-cookie","performance-cookie-consent","denied"]],"brainly.com.br":[["set","jsData.hasVideoMeteringUnlogEnabled","undefined"],["set-local-storage-item","social-qa/machineId","$remove$"],["set-local-storage-item","simple-funnel-name","$remove$"]],"brainly.de":[["set","jsData.hasVideoMeteringUnlogEnabled","undefined"],["set-local-storage-item","social-qa/machineId","$remove$"],["set-local-storage-item","simple-funnel-name","$remove$"]],"brainly.ru":[["set","jsData.hasVideoMeteringUnlogEnabled","undefined"],["set-local-storage-item","social-qa/machineId","$remove$"],["set-local-storage-item","simple-funnel-name","$remove$"]],"brancaia.com":[["set","realCookieBanner","undefined"]],"breachmedia.ca":[["set-cookie","cp_style_3841","true"]],"breitenwang.gv.at":[["set-cookie","ris_cookie_setting","1"]],"britishcornershop.co.uk":[["set-cookie","cookieConsentSet","true"]],"bsi.si":[["set-cookie","gdpr_cookie","functional","","reload","1"]],"bucketpages.com":[["nostif","#advert-tracker","500"]],"bucyrustelegraphforum.com":[["nostif","gnt_mol_oy"]],"budgetair.pl":[["set-cookie","cookieConsentLevel","functional"]],"bulletindegestion.fr":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"burnesspaull.com":[["set-cookie","ck_pref_all","1"]],"businessaccountingbasics.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"bytello.com":[["set-local-storage-item","_APP_COOKIE_NOTICE","reject"]],"bzgvin.it":[["set-cookie","ris_cookie_setting","1"]],"calendardate.com":[["set-cookie","warn","true"]],"cams.ashemaletube.com":[["set-cookie","are_essential_consents_given","1"],["set-cookie","is_personalized_content_consent_given","1"]],"camwhores.tv":[["set-cookie","kt_agecheck","1"]],"canuckaudiomart.com":[["rmnt","script","as_init"]],"cathouseonthekings.com":[["acs","document.getElementById",".ab_detected"]],"catolet.de":[["set-cookie","cookie-preference","1"]],"cbs8.com":[["aeld","/^(mouseout|mouseleave)$/"]],"celeb-stalker.com":[["set-cookie","age_gate","18"]],"cellcom.co.il":[["set-local-storage-item","isCookiesAccepted","true"]],"cepuluh.com":[["ra","oncontextmenu|onkeydown|onmousedown"]],"cesky-sport.cz":[["set-cookie","DmCookiesAccepted","true"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"cexpr.es":[["set-cookie","msg_cookie_CEX","true"]],"charbelnemnom.com":[["aeld","/contextmenu|keydown/"]],"cheaptickets.es":[["set-cookie","cookieConsentLevel","functional"]],"cheaptickets.net":[["set-cookie","cookieConsentLevel","functional"]],"cheersandgears.com":[["rmnt","script","fetch"]],"chessarena.gg":[["set-local-storage-item","cookie-consent","necessary"]],"chieftain.com":[["nostif","gnt_mol_oy"]],"chocolateemporium.com":[["set-cookie","cookies_popup","yes"]],"citibank.pl":[["set-cookie","cookieConsent","1000"]],"clasohlson.com":[["set-cookie","cookie-notification","ACCEPTED"]],"clubulbebelusilor.ro":[["aeld","contextmenu"]],"coag.pl":[["aopr","document.oncontextmenu"]],"codedead.com":[["set-local-storage-item","hasAcceptedCookieNotice","true"]],"codedosa.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"commercialappeal.com":[["nostif","gnt_mol_oy"]],"computerbase.de":[["set-cookie","consent","1"],["set-cookie","OptanonAlertBoxClosed","1"]],"comune.sanmartinoinbadia.bz.it":[["set-cookie","ris_cookie_setting","1"]],"construction-physics.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"consumidor.gov.pt":[["set-cookie","WarningsAndPolicyAccepted","true"]],"converse.com":[["set-cookie","acceptConverseCookiePolicy","0"],["set-cookie","dw_cookies_accepted","1"]],"cormarcarpets.co.uk":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"cotswoldoutdoor.com":[["set-cookie","consent_setting","OK","","reload","1"]],"countrylife.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"courier-tribune.com":[["nostif","gnt_mol_oy"]],"courierexchange.co.uk":[["set-cookie","nc_analytics","rejected"],["set-cookie","nc_cookies","accepted"],["set-cookie","nc_marketing","rejected"]],"cpc2r.ch":[["set-local-storage-item","CPCCookies","true"]],"cpuid.com":[["nostif","blocked","1000"]],"crealitycloud.com":[["set-local-storage-item","cookies","true"],["set-local-storage-item","closeGuideRegisterTime","1"],["set-local-storage-item","permission_open_push","1"]],"critic.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"cua.ai":[["set-local-storage-item","cookie-consent","accepted"]],"cvwarehouse.com":[["set-cookie","0_required","accepted","","","reload","1"]],"d0o0d.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dagvandewebshop.be":[["set-cookie","cookie-preference","1"]],"daimant.co":[["set-cookie","daimant_collective","accept","","reload","1"]],"daotranslate.co.uk":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aeld","","undefined"]],"daotranslate.org":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aeld","","undefined"]],"dbnetbcn.com":[["set-cookie","promptCookies","1"]],"ddys.co.uk":[["no-fetch-if","analytics"]],"deh.mt":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"depedlps.ru":[["acs","document.oncontextmenu"]],"derscharfemaxx.com":[["set-cookie","scharfer-maxx-che-cookie-categories","essential"]],"desbloqueador.nl":[["aopr","document.oncontextmenu"]],"descarga-animex.com":[["aeld","/^(?:contextmenu|keydown)$/"]],"descarga-animex.de":[["aeld","/^(?:contextmenu|keydown)$/"]],"descarga-animex.pl":[["aeld","/^(?:contextmenu|keydown)$/"]],"deutsche-finanzagentur.de":[["set-cookie","disclaimer-overlay","true"]],"dicasdevalor.net":[["aeld","contextmenu"]],"diebayerische.de":[["set-cookie","bay_required","true"],["set-cookie","cookieConsent","true","","reload","1"]],"digitalsynopsis.com":[["aopr","disableSelection"],["aopr","document.oncontextmenu"]],"docs.chartbeat.com":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.proxyman.com":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.skydeck.ai":[["set-cookie","__gitbook_cookie_granted","no"]],"doka.com":[["set-cookie","hide_cookieoverlay_v2","1","","reload","1"],["set-cookie","performance-cookies_allowed_v2","0"],["set-cookie","socialmedia-cookies_allowed_v2","0"]],"donostiroller.com":[["set","realCookieBanner","undefined"]],"dood.co.uk":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dood.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dood.de":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dood.es":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dood.fr":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dood.it":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dooood.co.uk":[["set","console.clear","undefined"],["aeld","contextmenu"]],"downace.com":[["acs","requestPermission"]],"dqr.de":[["set-cookie","gsbbanner","closed"]],"dramaqu.it":[["acs","$","contextmenu"]],"drei-franken-info.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"drinkitnow.de":[["set-cookie","cookie-preference","1"]],"drkrok.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"dtksoft.com":[["set-cookie","user_cookie_consent","1"]],"duty.travel.cl":[["set-local-storage-item","cookies-consent-accepted","true"]],"dymoksmokeshop.com":[["set-cookie","age","true"]],"e-dojus.lv":[["set-cookie","pc234978122321234","1"]],"e-pity.pl":[["set-cookie","efile-cookiename-28","1"]],"earnload.co.uk":[["set","blurred","false"]],"earnload.com.br":[["set","blurred","false"]],"earnload.org":[["set","blurred","false"]],"easyayurveda.com":[["aopr","disable_copy"],["aopr","wccp_pro_iscontenteditable"],["aopr","disable_hot_keys"],["aopr","nocontext"]],"eda.ru":[["set-cookie","CookiesAccept","accept"]],"edailybuzz.com":[["aeld","/contextmenu|copy/"]],"edookit.com":[["set-cookie","uuAppCookiesAgreement","true"]],"edr-software.com":[["set","realCookieBanner","undefined"]],"eett.gr":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"egopowerplus.com":[["set-cookie","newsletterModal","true"]],"eleven-sportswear.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"emmi-industrie.com":[["set-cookie","emmi-che-cookie-categories","essential"]],"emmi-kaltbach.com":[["set-cookie","kaltbach-che-cookie-categories","essential"]],"emmi.com":[["set-cookie","aktifit-che-cookie-categories","essential"]],"empathy.com":[["set-cookie","CookieConsent","false"]],"empik.com":[["set-cookie","cvc","true"]],"emri.nl":[["rc","wcc-popup-overflow","body","stay"]],"emturbovid.com":[["nostif","debugger"]],"enac.es":[["set-cookie","lopd_medicion","2"]],"endlesspools.fr":[["rc","wcc-popup-overflow","body","stay"]],"engl.it":[["set","realCookieBanner","undefined"]],"eoreuni.com":[["aopw","document.oncontextmenu"]],"epitesti.ro":[["aopw","clickIE4"],["aopw","document.oncontextmenu"],["ra","oncontextmenu|ondragstart|onselectstart"]],"equalexchange.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"erc51.ru":[["set-local-storage-item","cookiesAccepted","false"]],"erinsakura.com":[["aeld","copy"]],"esaral.com":[["aopw","document.oncontextmenu"]],"eschuhe.de":[["set-local-storage-item","__EOBUWIE__consents_accepted","true","","reload","1"]],"espadrij.com":[["set-local-storage-item","cookiePreference","required"]],"essence.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"eujuicers.com":[["set-cookie","wsp_cc","1","","reload","1"]],"eujuicers.fr":[["set-cookie","wsp_cc","1","","reload","1"]],"europemadesoftware.eu":[["set-local-storage-item","cookiesAccepted","1"]],"europixhd.com":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"explore.com":[["aeld","copy"]],"eyeletic.com":[["set-local-storage-item","cookieInfoDismissed","true"]],"famos.bz.it":[["set-cookie","ris_cookie_setting","1"]],"fantasyfootballgeek.co.uk":[["set-cookie","cmplz_banner-status","dismissed"]],"fantasyfootballhub.co.uk":[["set-session-storage-item","modalViewed","true"]],"fantasypros.com":[["set-cookie","fp_policy","1"]],"farmer.pl":[["aopw","FrodoPV"]],"fifthgate.shop":[["set-cookie","AgeVerificationPopup-sections--14858278141988__age-verification-popup","1"]],"figshare.com":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"figshare.unimelb.edu.au":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"firestream.com":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"firestream.de":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"firestream.org":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"firestream.to":[["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"firstthings.com":[["set-cookie","pum_popup_14631_page_views","1"]],"fitnesscenter-schardt.de":[["set","realCookieBanner","undefined"]],"flagle.io":[["nostif","googlesyndication"]],"fmovies.de":[["set-cookie","show_share","true"],["acs","document.oncontextmenu"],["acs","disableSelection","reEnable"],["aopr","document.ondragstart"],["aost","console.clear"]],"fold.dev":[["set-local-storage-item","cookies","no"]],"foodnetwork.com":[["set-local-storage-item","wbdLTP","true"]],"ford-bunk-voelklingen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-janssen-sonsbeck.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-jochem-stingbert.de":[["set-cookie","hide-gdpr-bar","true"]],"forums.hfboards.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"fosshub.com":[["set","checkAds","trueFunc"]],"fosters.com":[["nostif","gnt_mol_oy"]],"frag-machiavelli.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"freefilesync.org":[["rmnt","script","/adblock/i"]],"freewatchtv.top":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"frisco.pl":[["set-cookie","forced-cookies-modal","2"]],"frontieresmedia.fr":[["set-cookie","frtnrs_consent","true"]],"fruugo.it":[["set-cookie","consents","essential"]],"fullstackeconomics.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"funkypotato.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"funnelcockpit.com":[["rc","gdpr-cookie-notice-center-loaded","","stay"]],"gamemaker.io":[["set-cookie","yoyocookieconsent_viewed","true"]],"gamerevolution.com":[["aopr","__cmpGdprAppliesGlobally"]],"games.co.uk":[["set-cookie","OptanonAlertBoxClosed","true"]],"gamesradar.com":[["set-cookie","FTR_Article_PageView","2"]],"gaming-pc.net":[["set","realCookieBanner","undefined"]],"gasspisen.se":[["set-cookie","user_cookie_consent","false"]],"gats.io":[["ra","oncontextmenu","body"]],"gdemoideti.ru":[["set-cookie","acceptCookies","true"]],"gdh.digital":[["set-local-storage-item","cookieBarVisible","false"]],"gdrivedescarga.com":[["rmnt","script","e.preventDefault();"]],"gemeinde.naturns.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.plaus.bz.it":[["set-cookie","ris_cookie_setting","1"]],"generationamiga.com":[["aopr","disable_copy"],["aopw","document.oncontextmenu"]],"geniusjw.com":[["acs","document.oncontextmenu"]],"getcontact.com":[["set-cookie","cookieInform","reject"]],"getimg.ai":[["set-cookie","permission-getimg","1"]],"gledaitv.fr":[["aeld","contextmenu"],["nosiif","debugger"]],"gomovies.com":[["acs","document.oncontextmenu"]],"gomovies.pl":[["acs","document.oncontextmenu"]],"gotransit.com":[["set-cookie","cookies_accepted","true"]],"gourmetfoodstore.com":[["set-cookie","AnalyticsAcceptancePopOver","false"],["set-cookie","SuppressInterstitial","true","","reload","1"]],"gpuscout.nl":[["set-local-storage-item","cookieConsent","true"]],"gq-magazine.co.uk":[["set","ads_not_blocked","true"]],"graffitiburger.nemtakeaway.dk":[["set-cookie","cookie-censent-musthave","true"]],"grandwinespirits.com":[["set-cookie","age_verification","1"]],"greatfallstribune.com":[["nostif","gnt_mol_oy"]],"greubelforsey.com":[["set-local-storage-item","rgpd.consent","1"]],"gunskirchen.com":[["set-cookie","ris_cookie_setting","1"]],"hacktron.ai":[["set-local-storage-item","hacktron-cookie-consent","rejected"]],"halonen.fi":[["set-cookie","consentAdvertising","false"],["set-cookie","consentAnalytics","false"],["set-cookie","consentPersonalization","false"],["set-cookie","privacyExpiration","1"],["set-cookie","privacySettings","1"]],"harrycookcheltenham.co.uk":[["set-cookie","ce-cookie","N"]],"harvardmagazine.com":[["aopr","googletag"]],"hayatbilgileri.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"hdrezka.co.uk":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hdrezka.nl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hearthstone-decks.net":[["acs","jQuery","ai_check"]],"helium.com":[["set-local-storage-item","acceptedCookies","false"]],"hetwkz.nl":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"hianime.fr":[["set","devtoolsDetector.launch","noopFunc"]],"hibiki-radio.jp":[["aeld","contextmenu"]],"hife.es":[["set-cookie","hife_eu_cookie_consent","1"]],"himovies.fr":[["set-cookie","show_share","true"]],"hindipix.com.br":[["set","console.debug","trueFunc"],["set","console.clear","trueFunc"]],"holland-shop.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"hot.si":[["set-cookie","cookieconsent","1"],["set-cookie","permission_funktional_cookies","1"],["set-cookie","permission_marketing_cookies","0"],["set-cookie","permission_statistic_cookies","0"]],"housedigest.com":[["aeld","copy"]],"hplives.com":[["set-cookie","isVisitorsAgreementAccepted","1","","reload","1"]],"hukmatpro.fr":[["aopw","hidekeep"]],"hukmatpro.org":[["aopw","hidekeep"]],"hurton.pl":[["set-cookie","is_allowed_client_traking_niezbedne","1","","reload","1"]],"hygieniapassit.info":[["set-cookie","cookie-agreed","0"]],"ibkrcampus.com":[["set-cookie","IBKRcampus_functional_optIn","true","","reload","1"],["set-cookie","IBKRcampus_gdpr_optOut","true"],["set-cookie","IBKRcampus_mkting_optOut","true"]],"ifortuna.cz":[["set-cookie","cookie_layer","1","","domain",".ifortuna.cz"],["set-cookie","necessary","true","","domain",".ifortuna.cz"]],"ijr.com":[["acs","document.createElement","admiral"]],"ilmotorsport.de":[["set-cookie","cookieMsg","true","","reload","1"]],"impots.gouv.fr":[["set","PASSER_videoPAS_apres","0"]],"incidenthub.cloud":[["set-local-storage-item","cookieConsent","denied"]],"interestingengineering.com":[["aeld","/^(mouseout|mouseleave)$/"],["set-local-storage-item","hasShownPopup","true"]],"interquestliquor.com":[["set-cookie","age_verification","1"]],"ipphone-warehouse.com":[["aeld","contextmenu"],["aeld","afterKeydown"],["aeld","keydown","void"],["aeld","copy","void"]],"irishnews.com":[["set-local-storage-item","ArcP","$remove$"]],"irr.singaporetech.edu.sg":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"istdasvegan.eu":[["set","realCookieBanner","undefined"]],"itscybertech.com":[["acs","check","debugger"]],"jailbreakchangelogs.xyz":[["set-session-storage-item","adblock_modal_dismissed","true"]],"javjavhd.com":[["acs","$","contextmenu"]],"jnews5.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["aeld","mousedown","","elements",".entry-content"]],"juomaposti.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"justanswer.es":[["set-cookie","cbChecked","true"]],"kakaakowine.com":[["set-cookie","isAnAdult","true"]],"kancelarskepotreby.net":[["set-cookie","adsCookies","false"],["set-cookie","inshopCookiesSet","true"],["set-cookie","performanceCookies","false"]],"kanjukulive.com":[["ra","ondragstart|oncontextmenu"]],"karriere.austrocontrol.at":[["set-cookie","eRecruiterCookieConsent","false","","reload","1"]],"katerionews.com":[["set","console.clear","undefined"]],"katzenbaumdesign.de":[["set","realCookieBanner","undefined"]],"kaup24.ee":[["set-cookie","CA_DT_V2","0","","reload","1"],["set-cookie","CA_DT_V3","0"]],"kb.uconn.edu":[["set-cookie","required-cookies-acknowledged","2"]],"kbtx.com":[["rc","powa-sticky","","stay"]],"keh.com":[["set-cookie","gdpr-cookie-notice","1"]],"kektura.hu":[["set-cookie","cookie_consent_","1"]],"kick.com":[["set-local-storage-item","cookies_accepted","true"]],"kicknews.today":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"kijiji.ca":[["set-cookie","hdcab","true"]],"kika.de":[["set-cookie","cookie_accepted","1"],["set-cookie","functional_cookies","1","","reload","1"]],"kipling.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"kirkkojakaupunki.fi":[["set-cookie","cookieControlPrefs","essential"]],"kissnofrog.com":[["set-cookie","cdisc","true","","reload","1"]],"klinger.fi":[["rc","wcc-popup-overflow","body","stay"]],"kmo.to":[["set","console.clear","undefined"]],"knoxnews.com":[["nostif","gnt_mol_oy"]],"kooora4livs.com":[["acs","document.oncontextmenu"]],"kosmas.cz":[["set-cookie","was_cookie_consent","no"]],"kpopsea.com":[["aeld","contextmenu"]],"krunkercentral.com":[["acs","document.onkeydown"]],"kto.es":[["set-cookie","caccept","on"]],"kto.fr":[["set-cookie","caccept","on"]],"ktsm.com":[["aeld","scroll"]],"kupbilecik.com":[["set-cookie","allow-cookie","1"],["set-cookie","cookie-functional","1"]],"kwj-computer.de":[["set-cookie","cookie-preference","1"]],"kyoceradocumentsolutions.cl":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.eu":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kytary.fr":[["set-cookie","CookieConsent","0","","reload","1"]],"labiosthetique.co.uk":[["set-cookie","wt-cookie-settings","0"]],"labiosthetique.com.br":[["set-cookie","wt-cookie-settings","0"]],"labiosthetique.net":[["set-cookie","wt-cookie-settings","0"]],"langweiledich.net":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"latimes.com":[["set-cookie","c_tos","1"]],"lazytranslations.com":[["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"leakedzone.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","keyCode"],["set","Object.prototype._detectLoop","noopFunc"]],"leeb-milch.at":[["set-cookie","leeb-aut-cookie-categories","essential"]],"leekduck.com":[["nostif","abp"]],"leetcode.cn":[["aeld","copy","","elements","#__next"]],"lempaala.ideapark.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"leo-pharma.fr":[["set-cookie","isCookiePolicySet","false"]],"lepetitmarchedauvergne.fr":[["set","realCookieBanner","undefined"]],"lethalpanda.com":[["aopr","b2a"]],"levi.pt":[["set-cookie","cookie_status","1","","reload","1"]],"libgen.com.br":[["nostif","appendMessage"]],"lifesum.com":[["set-local-storage-item","accepted-cookies","[]"]],"livesportsontv.com":[["set-local-storage-item","promotion-popup-closed","1"]],"ljudmakarn.se":[["set-cookie","cookie_consent_v2_0_functional_third_party","1"],["set-cookie","cookie_consent_v2_0_marketing_third_party","0"],["set-cookie","cookie_consent_v2_0_required","1"]],"longines.com":[["set-cookie","longines-cookiesstatus-analytics","false"],["set-cookie","longines-cookiesstatus-functional","false"],["set-cookie","longines-cookiesstatus-necessary","true"],["set-cookie","longines-cookiesstatus-social","false"]],"lookmovie.ag":[["nostif","__ext_loaded"]],"loudersound.com":[["aopr","_sp_._networkListenerData"],["set-cookie","FTR_Article_PageView","2"]],"lowkeytech.com":[["acs","String.prototype.charCodeAt","ai_"]],"lsi-bochum.de":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"luegeten.ch":[["set","realCookieBanner","undefined"]],"m.kaskus.co.id":[["set-cookie","cookie_accepted","true"],["set-session-storage-item","open_in_browser","1"]],"m.youtube.com":[["json-prune","overlay.bottomSheetOverlayRenderer","overlay.bottomSheetOverlayRenderer.displayImmediately"],["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"],["aeld","visibilitychange","/bgmobile|\\{\\w\\.\\w+\\(\\)\\}|\\.getVisibilityState\\(\\)/"]],"magnet4blogging.net":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"makeresearchpay.com":[["set-cookie","user_cookie_consent","false","","reload","1"]],"makeronline.com":[["set-cookie","acceptCookie","true"]],"makeupforever.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"mandatory.com":[["aopr","__cmpGdprAppliesGlobally"]],"mangatoon.de":[["acs","document.oncontextmenu"]],"manneskraft-gesteigert.com":[["set","realCookieBanner","undefined"]],"mario-kaps.de":[["set","realCookieBanner","undefined"]],"matriculant401merited.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"mediahiburan.my":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"mediotejo.net":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"medium.com":[["set-local-storage-item","201805-policy|accepted","1"],["aeld","scroll"]],"meiosepublicidade.pt":[["set-cookie","gdpr_consent","true"],["set-cookie","gdpr_consent-legacy","true"]],"melee.gg":[["set-cookie","AnalyticalCookie","false"],["set-cookie","CookieConsent","true","","reload","1"],["set-cookie","FunctionalCookie","true"]],"mfw09.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"michaelmoore.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"mifcom.de":[["set-cookie","cookie_accepted","1","","reload","1"],["set-cookie","cookie_closed","1"]],"mifcom.pl":[["set-cookie","cookie_accepted","1","","reload","1"],["set-cookie","cookie_closed","1"]],"mifcom.ru":[["set-cookie","cookie_accepted","1","","reload","1"],["set-cookie","cookie_closed","1"]],"mighty-party.com":[["set-cookie","cookies-accepted","true"],["set-cookie","terms-accepted","true"]],"milesofmusik.com":[["aeld","mousedown","","elements",".fancybox-container"]],"miu-star.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"mivatter.com":[["json-prune","ads.[].imageUrl"]],"mobilefuse.com":[["set-local-storage-item","cookies_policy_acceptance","denied"]],"modellbahndealer.de":[["rc","disable","div","stay"]],"mollie.com":[["set-local-storage-item","framerCookiesDismissed","true"]],"monarchmoney.com":[["set-cookie","exit-intent","true"]],"monorhinouscassaba.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"moondao.com":[["set-local-storage-item","cookie_consent","false"]],"morosedog.gitlab.io":[["set","checkAds","noopFunc"]],"mostrodifirenze.com":[["acs","document.oncontextmenu"]],"motoblouz.com":[["set-cookie","accept_cookies_rgpd","1","","reload","1"]],"motoblouz.fr":[["set-cookie","accept_cookies_rgpd","1","","reload","1"]],"motofocus.pl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"move-ment.at":[["set","realCookieBanner","undefined"]],"movies4us.it":[["set-local-storage-item","cookiePolicy","true"]],"mrbenne.com":[["rmnt","script","/Clipboard|oncontextmenu|wpcp|keyCode/"],["ra","oncontextmenu|ondragstart|onselectstart|onload|onblur"],["rmnt","style","/-webkit-user-select|webkit-appearance/"]],"musicradar.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"musixmatch.com":[["ra","oncontextmenu","body","complete"]],"my-account.storage-mart.com":[["set-local-storage-item","StorageMartCookiesPolicySeen","true"]],"myloview.com":[["set-cookie","cookieConsent","necessary","","reload","1"]],"myloview.com.br":[["set-cookie","cookieConsent","necessary","","reload","1"]],"myloview.net":[["set-cookie","cookieConsent","necessary","","reload","1"]],"naaree.com":[["aopw","disableEnterKey"],["ra","style","body[style=\"user-select: none;\"]","stay"],["set","document.oncontextmenu","null"],["set","document.onkeydown","null"]],"nanuko.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"nationalrail.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"naturallycurly.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"natureatblog.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"neander-zahn.de":[["set-cookie","cookie_optin_q","false"]],"near.org":[["set-local-storage-item","cookies-preference","1"]],"netrix.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"netuplayer.top":[["set","devtoolsDetector.launch","noopFunc"]],"newportri.com":[["nostif","gnt_mol_oy"]],"news.17173.com":[["aeld","copy"]],"news.chosun.com":[["aeld","copy","getSelection"]],"news.kenmei.co":[["set-cookie","__gitbook_cookie_granted","no"]],"news10.com":[["aeld","scroll"]],"newsme.gr":[["aopr","nocontextmenu"],["acs","document.oncontextmenu"],["acs","document.ondragstart"]],"nft.chaingpt.org":[["set-cookie","cookies-consent","rejected"]],"ngs.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"ngs22.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"ngs70.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"niagarafallsreview.ca":[["remove-cookie","/^tncms:meter:/"]],"nicematin.com":[["aeld","","AdB"]],"njherald.com":[["nostif","gnt_mol_oy"]],"nofilmschool.com":[["acs","document.createElement","admiral"]],"noicetranslations.blogspot.com":[["rmnt","script","disableselect"]],"norskfamilie.no":[["set-cookie","acceptAll","false"],["set-cookie","consentGiven","true"]],"norwayshop.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"notaire.be":[["set-cookie","cookie-bar","hide"],["set-cookie","cookie-settings-social","false"],["set-cookie","cookie-settings-statistics","false"]],"novagente.pt":[["aeld","copy"]],"nove.fr":[["set-local-storage-item","cookie","true"]],"novelpia.com":[["set","document.ondragstart","trueFunc"],["set","document.onselectstart","trueFunc"],["rmnt","script","/disableclick|devtool/"],["ra","oncontextmenu|ondragstart|ondrop|onselectstart","[oncontextmenu]","complete"]],"ntuplay.xyz":[["acs","document.onkeypress"]],"nuc.edu":[["set-cookie","wow-modal-id-1","yes"]],"nwfdailynews.com":[["nostif","gnt_mol_oy"]],"ohli365.vip":[["ra","oncontextmenu|onselectstart|ondragstart"]],"ok-bergbahnen.com":[["set-cookie","Consent","0"]],"okfurniture.co.za":[["set-cookie","amcookie_allowed","1"]],"olmatic.de":[["set","realCookieBanner","undefined"]],"olx.kz":[["set-cookie","cookieBarSeen","true"]],"on.orf.at":[["rc","oon-scroll-lock","body","stay"]],"onderwijsvacaturebank.nl":[["set-cookie","enablecookie","false","","reload","1"]],"one.oregon.gov":[["aeld","contextmenu","event.dispatch"],["ra","onpaste","input[onpaste=\"return false\"]","complete"]],"onlinecarparts.co.uk":[["aeld","mousedown","function(t)"]],"onlinetools.com":[["nano-sib","Clipboard","1000","0.001"]],"openaccess.wgtn.ac.nz":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"openbookpublishers.com":[["set-cookie","CookieConsent","true","","reload","1"]],"openforests.com":[["set","realCookieBanner","undefined"]],"oploverz.com.br":[["rmnt","script","contextmenu"],["rmnt","style","user-select"],["aopw","check"]],"oponeo.com.br":[["set-cookie","_cookieConsents","1"]],"oponeo.de":[["set-cookie","_cookieConsents","1"]],"oponeo.it":[["set-cookie","_cookieConsents","1"]],"orda.shef.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"otakudesu.pl":[["acs","document.oncontextmenu"]],"ouasafat.com":[["acs","document.onselectstart"]],"ouiorganic.com":[["set-cookie","allowGetPrivacyInfo","true"]],"oveckarna.cz":[["set-cookie","cookie-bar","0"]],"oyunskor.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"palladiumboots.co.uk":[["set-cookie","cookieconsent_status1","deny"]],"palladiumboots.net":[["set-cookie","cookieconsent_status1","deny"]],"palladiumboots.pl":[["set-cookie","cookieconsent_status1","deny"]],"pasching.at":[["set-cookie","ris_cookie_setting","1"]],"pasticceriaquadrifoglio.com":[["set-cookie","pasticceria-quadrifoglio-ita-cookie-categories","essential"]],"pedalcommander.fr":[["set-local-storage-item","COOKIE_BANNER_CLICKED","true"]],"pelispedia.org":[["aopw","document.oncontextmenu"],["ra","oncontextmenu"]],"penni.no":[["set-cookie","eika_consent_marketing","false"],["set-cookie","eika_consent_set","true"]],"pentadoc-radar.com":[["set","realCookieBanner","undefined"]],"pentruea.com":[["acs","document.oncontextmenu"],["aeld","copy"]],"pervyi-tv.online":[["set-cookie","cookieIsAgree","true"]],"philosophenlexikon.de":[["set","realCookieBanner","undefined"]],"philosophia-perennis.com":[["set","realCookieBanner","undefined"]],"photospecialist.co.uk":[["set-cookie","cookie_accepted","false","","reload","1"]],"piazzadeimestieri.it":[["set","realCookieBanner","undefined"]],"pinterest.fr":[["set-local-storage-item","DWEB_PIN_IMAGE_CLICK_COUNT","$remove$"],["set-local-storage-item","unauthDownloadCount","$remove$"]],"pinterest.org":[["set-local-storage-item","DWEB_PIN_IMAGE_CLICK_COUNT","$remove$"],["set-local-storage-item","unauthDownloadCount","$remove$"]],"pjstar.com":[["nostif","gnt_mol_oy"]],"planetepluscanada.com":[["set-cookie","analytics","false"],["set-cookie","rgpd","false","","reload","1"]],"plantasjen.no":[["set-cookie","_ca","false"],["set-cookie","_ftu","false"]],"plassenburg.de":[["set-cookie","cookiehinweisnew","2","","reload","1"]],"playbill.com":[["nostif","offsetHeight"]],"playerx.stream":[["aopr","devtoolsDetector"]],"plough.com":[["remove-cookie","ArticlePaywallList"]],"plusujemy.pl":[["set-cookie","cookies-accepted","false"]],"portalwrc.pl":[["aeld","contextmenu"]],"portclintonnewsherald.com":[["nostif","gnt_mol_oy"]],"posterstore.ch":[["set-cookie","synapse-cookie-preferences-set","true"]],"praxisplan.at":[["set-cookie","complianceCookie","on"],["set-cookie","trackingCookies","off"]],"pricespy.co.uk":[["set-cookie","privacy_settings","1"]],"pricewise.nl":[["set-cookie","CookieConsent","true"]],"probuildstats.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"produx.ch":[["set-cookie","cmplz_banner-status","dismissed"]],"protan-elmark.pl":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","rodopolicy","true"]],"provenancecommissary.ca":[["set-cookie","age-checked","1"]],"psbank.ru":[["set-cookie","cookie-consent","true"]],"psihologiadeazi.ro":[["aopr","nocontext"],["aopr","disable_copy"],["acs","jQuery","keydown"]],"publibike.ch":[["set-cookie","gdpr2","true"],["set-cookie","gdpr2_required","true"]],"putlocker.it":[["aopw","document.oncontextmenu"]],"puzzle-lits.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-words.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.co.uk":[["set-cookie","puzzleyou-co-uk_cookies_consent_allowlist","0","","reload","1"]],"pvcvoordeel.nl":[["set-cookie","cookiebar","1"]],"pwsweather.com":[["set-cookie","pws_gdrp_accept","1"]],"queenandcastlekenilworth.co.uk":[["set-cookie","ce-cookie","N"]],"quooker.nl":[["set-cookie","cookie-consent-io","necessary","","reload","1"],["set-cookie","cookie-consent-io-gdpr","1"]],"r34.app":[["set-local-storage-item","statistics-appOpenedCount","1"]],"radnuk.com.ua":[["set","document.oncopy","undefined"],["ra","oncopy",".articles-content[oncopy]","complete"]],"radurlaub.com":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"raiffeisen-mobil.at":[["set-cookie","cookieconsent","1"],["set-cookie","permission_funktional_cookies","1"]],"ratemyprofessors.com":[["set-cookie","ccpa-notice-viewed-02","true"]],"rating.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"rbinternational.com.pl":[["set-local-storage-item","cookie-approvment","1"]],"realpython.com":[["aeld","DOMContentLoaded","rprw"],["set-local-storage-item","rprw","$remove$"]],"recordonline.com":[["nostif","gnt_mol_oy"]],"rededaltro.com.br":[["set-cookie","ocn_accepted","true"]],"redlionhandcross.co.uk":[["set-cookie","ce-cookie","N"]],"reelcinemas.co.uk":[["set-cookie","a1wcc","all"]],"reliant.co.uk":[["set-cookie","gdpr_cookie_consent","1"],["set-cookie","gdpr_cookie_groups","1"]],"renault-spenrath-juelich.de":[["set-cookie","hide-gdpr-bar","true"]],"rhein-pfalz-kreis.de":[["set-local-storage-item","PrivacyPolicy[][core]","forbidden"],["set-local-storage-item","PrivacyPolicy[][maps]","forbidden"],["set-local-storage-item","PrivacyPolicy[][readSpeaker]","forbidden"],["set-local-storage-item","PrivacyPolicy[][tracking]","forbidden"],["set-local-storage-item","PrivacyPolicy[][videos]","forever"]],"roofingmegastore.co.uk":[["set-cookie","cookienotice","true"]],"rts.com.ec":[["set-local-storage-item","CookiesConsent","1"]],"sachonthi.com":[["acs","document.oncontextmenu"]],"safehaven.io":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"salzer.at":[["set-cookie","cookiesAllowRequired","true"]],"sammobile.com":[["set-local-storage-item","request-permission-modal","1"]],"savoriurbane.com":[["aopw","document.oncontextmenu"]],"sbermarket.ru":[["set-cookie","cookies_consented","yes"]],"sbflix.co.uk":[["acs","onload","contextmenu"]],"sbnation.com":[["nostif","adsBlocked"]],"schneideranwaelte.de":[["set-local-storage-item","cookie_consent","true"]],"seacoastonline.com":[["nostif","gnt_mol_oy"]],"seacom.co.za":[["set-cookie","cookieConsent","accepted"]],"searchenginejournal.com":[["nostif","popup"]],"seattletimes.com":[["set-cookie","st_newsletter_splash_desktop_seen","true"]],"secularism.org.uk":[["set-cookie","cookies-notice","1","","reload","1"]],"sekai-kabuka.com":[["ra","oncontextmenu"]],"selfstudys.com":[["aeld","contextmenu","preventDefault"],["ra","onselectstart","body"]],"selva.eu":[["set-cookie","ris_cookie_setting","1"]],"serwis-zamkow.com":[["acs","document.oncontextmenu"]],"sflix.it":[["nostif","devtools"],["nosiif","/_0x|devtools/"],["aeld","contextmenu"]],"sflix.ru":[["nostif","devtools"],["nosiif","/_0x|devtools/"],["aeld","contextmenu"]],"sflix2.es":[["nosiif","/_0x|devtools/"]],"sflix2.it":[["nosiif","/_0x|devtools/"]],"sgbdigital.de":[["set-cookie","tracking","0","","reload","1"]],"shaamtv.com":[["aopr","disableSelection"]],"shop.ba.com":[["set-local-storage-item","iag-performance-consent","\"no\""],["set-local-storage-item","iag-targeting-consent","\"no\""]],"sidereel.com":[["acs","$","/getScript|error:/"],["aopr","googletag"]],"sigmalive.com":[["set-local-storage-item","push-notifications","no"]],"simpleswap.io":[["set-local-storage-item","cookies-notification-message-is-hidden","true"]],"singingdalong.blogspot.com":[["ra","oncontextmenu|ondragstart|onselectstart"],["acs","disableselect","reEnable"]],"sinhasannews.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"skidrowreloaded.com":[["rmnt","script","copyprotect"]],"skihuette-oberbeuren.de":[["set-cookie","NL_COOKIE_KOMFORT","false"],["set-cookie","NL_COOKIE_MEMORY","true","","reload","1"],["set-cookie","NL_COOKIE_STATS","false"]],"skionline.es":[["ra","oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"]],"skiweltcup.tv":[["set","realCookieBanner","undefined"]],"sklep-agroland.pl":[["aeld","/^(?:contextmenu|dragstart|selectstart)$/"]],"smiggle.co.uk":[["set-cookie","cookiePopupAccepted","true"]],"smotreshka-tv.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotret-tv.com.br":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrim-tv.de":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrim-tv.fr":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smow.es":[["set-cookie","__compliance_cookie_2","111","","reload","1"]],"smow.nl":[["set-cookie","__compliance_cookie_2","111","","reload","1"]],"smow.org":[["set-cookie","__compliance_cookie_2","111","","reload","1"]],"sneltoner.nl":[["set-cookie","cookieType","255","","","reload","1"]],"sodimac.cl":[["set-cookie","isCookieLegalBannerSelected","true"]],"soell.gv.at":[["set-cookie","ris_cookie_setting","-1"]],"songtradr.com":[["set-cookie","cpaccepted","true"],["set-cookie","cpaccpted","true"]],"sotka.fi":[["set-cookie","rc_given_consent_closed","1"]],"soulbounce.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"sp32bb.pl":[["set-cookie","cookie_acceptance","1"]],"spelletjes.nl":[["set-cookie","OptanonAlertBoxClosed","true"]],"sportland.nl":[["set-cookie","amcookie_allowed","4"]],"sportland.pl":[["set-cookie","amcookie_allowed","4"]],"sportsnaut.com":[["aopr","__cmpGdprAppliesGlobally"]],"sporttotal.tv":[["no-fetch-if","doubleclick"],["set","HTMLImageElement.prototype.onerror","undefined"]],"startribune.com":[["remove-cookie","client_id"]],"statik.be":[["set-cookie","__cookie_consent","false"]],"stefaniegoldmarie.com":[["set","realCookieBanner","undefined"]],"steinmetz-baldauf.de":[["set-cookie","essentiell","1","","reload","1"],["set-cookie","googlemaps","1"],["set-cookie","youtube","1"]],"stemcelldonor.be":[["rc","cookieconsent-active","body","stay"]],"stiegeler.com":[["set-cookie","cookie_consent_user_accepted","false"]],"stifler.ro":[["rmnt","script","contextmenu"]],"stream.bunkr.is":[["acs","document.oncontextmenu"]],"streamingunity.pl":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"streamingunity.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"streamtape.de":[["aeld","contextmenu"],["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"streamtape.org":[["aeld","contextmenu"],["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"stromnetz.berlin":[["set-cookie","cookieAgree","true"],["set-cookie","cookieSelection","required"]],"studio3t.com":[["set-cookie","3t-cookies-essential","1"],["set-cookie","3t-cookies-functional","1"],["set-cookie","3t-cookies-performance","0"],["set-cookie","3t-cookies-social","0"]],"studiofabiobiesel.com":[["set-local-storage-item","fb-cookies-accepted","false"]],"studygo.com":[["set-cookie","squla-analytical-agreement","0"],["set-cookie","squla-cookie-agreement","1"],["set-cookie","squla-marketing-agreement","0"]],"sunnyside.shop":[["set-local-storage-item","_ccpa_analytics","false"],["set-local-storage-item","_ccpa_marketing","false"],["set-local-storage-item","_ccpa_personal","false"]],"superset.sh":[["set-local-storage-item","superset-analytics-consent","denied"]],"supplier.stellantis.com":[["set-cookie","opncl_general","true"]],"sushi.ski":[["json-prune","ads.[].imageUrl"]],"suzukicycles.com":[["rc","modal-open","body","stay"]],"sv-langenfeld.de":[["set","realCookieBanner","undefined"]],"swatchseries.co.uk":[["set-cookie","show_share","true"]],"swatchseries.net":[["set-cookie","show_share","true"]],"swatchseries.nl":[["set-cookie","show_share","true"]],"swatchseries.pl":[["set-cookie","show_share","true"]],"sweet-shop.si":[["set-cookie","aonehidepopupnewsletter1727208240","1"]],"szerencsejatek.hu":[["set-cookie","GDPR_LEVEL","1"],["set-cookie","GDPR_VERSION","1"]],"tabonitobrasil.it":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["aeld","keydown","preventDefault"]],"tabonitobrasil.pl":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["aeld","keydown","preventDefault"]],"taxo-acc.pl":[["aeld","contextmenu"]],"tecnotutoshd.net":[["aopw","document.oncontextmenu"],["acs","disableselect","reEnable"]],"teile-direkt.ch":[["aeld","mousedown","function(t)"]],"tempatwisataseru.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"tennessine.co.uk":[["set-local-storage-item","cookies","0"]],"tenvinilo-argentina.com":[["set-cookie","_tv_cookie_choice","1"],["set-cookie","_tv_cookie_consent","y"]],"thearkley.co.uk":[["set-cookie","ce-cookie","N"]],"theashtonbristol.co.uk":[["set-cookie","ce-cookie","N"]],"thebarentsobserver.com":[["set-cookie","mm_f_45691","true"]],"theblackbullyarm.co.uk":[["set-cookie","ce-cookie","N"]],"theghostinmymachine.com":[["acs","document.oncontextmenu"]],"thespec.com":[["remove-cookie","/^tncms:meter:/"]],"thestar.com":[["remove-cookie","/^tncms:meter:/"],["rc","kumulos-background-mask-blur","","stay"]],"thezealots.org":[["acs","document.oncontextmenu"]],"thingybob.de":[["set","realCookieBanner","undefined"]],"threads.net":[["set-session-storage-item","barcelona_mobile_upsell_state","1"]],"tibber.com":[["set-cookie","tibber_cc_essential","approved","","reload","1"]],"tiempo.hn":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"timeanddate.no":[["aeld","load","ad-wrap"]],"timestelegram.com":[["nostif","gnt_mol_oy"]],"tobycarvery.co.uk":[["set-cookie","ce-cookie","N"]],"tokvila.lt":[["set-cookie","cookiesAgree","true"],["set-cookie","cookiesLevel1","1"]],"tonispizza-rastatt.de":[["set","realCookieBanner","undefined"]],"top4mobile.it":[["set-cookie","cookies-agreed","1"],["set-cookie","cookies-analytical","0"]],"top4mobile.org":[["set-cookie","cookies-agreed","1"],["set-cookie","cookies-analytical","0"]],"top4mobile.ru":[["set-cookie","cookies-agreed","1"],["set-cookie","cookies-analytical","0"]],"topblogs.de":[["set","realCookieBanner","undefined"]],"topfaps.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","123"]],"torrentlawyer.com":[["set","document.oncontextmenu","noopFunc"],["set","document.ondragstart","noopFunc"],["set","document.onmousedown","noopFunc"],["set","document.onselectstart","noopFunc"]],"tricountyindependent.com":[["nostif","gnt_mol_oy"]],"tsmodelstube.com":[["set-cookie","warning","1","","reload","1"]],"tubitv.com":[["set-local-storage-item","windows_prompt_shown_v3","1"]],"tunein.com":[["set-cookie","hideMacDesktopDialog","true"],["set-cookie","navBasedDialogManager","true"]],"tv.bdix.app":[["set","jh_disabled_options_data","null"]],"tvhay.org":[["rmnt","script","wccp_pro"]],"tvprato.it":[["rc","show--consent","body","stay"]],"tvtropes.org":[["set-cookie","app-announcement-banner-count-guest","1"],["set-cookie","app-announcement-banner-guest","true"],["set","valid_user","true"]],"tvtv.ca":[["rmnt","script","reviveScroll","excludes","self.__next"]],"tvzingvn.ru":[["acs","onload","contextmenu"]],"ubuntu.com":[["set-cookie","_cookies_accepted","essential"]],"udi-immo.com":[["set-cookie","enableCookies","true"]],"ufret.jp":[["aeld","contextmenu"],["aopr","nd_shtml"]],"umweltportal.nrw.de":[["set-cookie","COOKIE_SETTINGS_SAVED","true"],["set-cookie","COOKIE_SUPPORT","true"]],"unijet-systems.com":[["set-cookie","cookieSettings","11","","reload","1"]],"uvetgbt.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"uza.be":[["set-cookie","cookie-agreed","2"]],"valadie-immobilier.com":[["set-cookie","slc_vitrine_cookies-date-submitted","1"],["set-cookie","slc_vitrine_cookies_analytics","0"],["set-cookie","slc_vitrine_cookies_recaptcha","1"],["set-cookie","slc_vitrine_cookies_youtube","1"]],"vanmossel.com":[["set-cookie","gtmCookieAccepted","1"],["set-cookie","gtmCookiePopup","1"]],"vanmossel.net":[["set-cookie","gtmCookieAccepted","1"],["set-cookie","gtmCookiePopup","1"]],"vape.com":[["set-cookie","isAnAdult","true"]],"vcl.li":[["set-cookie","cookie_accept","yes","","reload","1"]],"vembed.de":[["nosiif","devtool"],["nostif","devtool"],["rmnt","script","devtools"]],"verpornocomic.com":[["acs","jQuery","ai_adb"]],"verstehepferde.de":[["set","realCookieBanner","undefined"]],"verumvinum.se":[["set-cookie","accept-cookies","1"]],"vgembed.com":[["nosiif","detect"],["set","console.clear","noopFunc"],["set","DD","trueFunc"]],"vidmoly.com":[["rmnt","script","devtoolsDetector"],["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidsrc.es":[["acs","RegExp.prototype.toString",".join(\"\")"],["aeld","keydown","123"],["nosiif","devtool"],["set","console.clear","trueFunc"],["set","DisableDevtool","noopFunc"],["set","devtoolsDetector.launch","noopFunc"]],"vidsrc.ru":[["acs","RegExp.prototype.toString",".join(\"\")"],["aeld","keydown","123"],["nosiif","devtool"],["set","console.clear","trueFunc"],["set","DisableDevtool","noopFunc"],["set","devtoolsDetector.launch","noopFunc"]],"vinaurl.it":[["ra","onkeydown"]],"vinaurl.net":[["ra","onkeydown"]],"vinotrade.sk":[["set-cookie","resp-agev-age-verification-passed","1"]],"vitalllit.com":[["set-cookie","promptCookies","1"]],"vitbikes.de":[["set-cookie","custom-cookies-accepted","1","","reload","1"]],"vixcloud.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"voe-unblock.nl":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voirfilms.com.br":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"voirfilms.de":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"voirfilms.net":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"voirfilms.org":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"voirfilms.ru":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"volksversand.de":[["set-cookie","cookieDeclined","1"]],"wahaca.co.uk":[["rc","oxy-modal-active","body","stay"]],"webnovel.com":[["aeld","/contextmenu|copy/"],["set","console.clear","noopFunc"],["nosiif","debug"]],"webshopdewisselslag.recreatex.be":[["set-cookie","acceptAnalyticsCookies","False"],["set-cookie","acceptFunctionalCookies","True"],["set-cookie","cookiePolicyConfirmed","true","","reload","1"]],"weetabix.it":[["rc","wcc-popup-overflow","body","stay"]],"weetabixfoodcompany.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"welte-glasuren.com":[["set","realCookieBanner","undefined"]],"went.at":[["set-cookie","COOKIEBAR_1","0"]],"wheel-size.com":[["set","detector_active","true"]],"whitehorseradlett.co.uk":[["set-cookie","ce-cookie","N"]],"wichmann.biz":[["set","realCookieBanner","undefined"]],"wifiman.com":[["set-local-storage-item","hide-legal","1"]],"wind-craft.eu":[["set","realCookieBanner","undefined"]],"workhouses.org.uk":[["acs","document.oncontextmenu"]],"wstream.net":[["aeld","contextmenu","preventDefault"],["aopr","onload"]],"wstream.ru":[["aeld","contextmenu","preventDefault"],["aopr","onload"]],"www-football-london.translate.goog":[["rmnt","script","loc.hostname"]],"www.whatsapp.com":[["rc","hasCookieBanner","body","stay"]],"www.youtube.com":[["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"]],"wzzm13.com":[["aeld","/^(mouseout|mouseleave)$/"]],"xcen.se":[["set-cookie","cookieConsentGranted","1"]],"xda-developers.com":[["remove-cookie","articlesRead"],["acs","document.createElement","admiral"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"xhamster.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster1.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster10.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster11.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster12.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster13.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster14.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster15.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster15.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster16.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster16.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster16.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster17.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster17.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster18.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster18.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster19.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster20.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster20.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster20.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster46.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster46.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster46.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster5.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster7.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster8.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhplanet2.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhspot.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xlogic.org":[["set-cookie","wpca_consent","1"]],"xv-ru.com":[["set","xv.disclaimer.displayCookiePopup","noopFunc"]],"xvideos.com":[["set","xv.disclaimer.displayNewCookiePopup","noopFunc"],["set","xv.disclaimer.displayCookiePopup","noopFunc"]],"yamazaki.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"yesmovies.pl":[["set-cookie","show_share","true"]],"yuengling.com":[["set-cookie","age-gate","1"]],"yuque.com":[["aeld","copy"]],"yurishop.it":[["set","realCookieBanner","undefined"]],"zappatos.co.uk":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zappatos.com":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zdnet.de":[["aopr","can_i_run_ads"]],"zingtvhd.es":[["acs","onload","contextmenu"]],"zingvntv.com":[["acs","onload","contextmenu"]],"zingvntv.pl":[["acs","onload","contextmenu"]],"ziperto.com":[["nosiif","visibility","1000"]],"zipfelbund.de":[["set-cookie","Consent","0"]],"zippia.com":[["remove-cookie","_zippia-popup-s_t"],["nosiif","/onGatedSignupPopupTrigger|zippia-popup/"],["set-local-storage-item","gatedSignupTimerCounter","$remove$"]],"zivahub.uct.ac.za":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"zurzeit.at":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
