/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"1day.sk":[["set-cookie","verified4","1"]],"2219.net":[["aopr","clickNS"]],"26.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"2da.nl":[["set-cookie","consent-cookies","1"]],"68.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"89.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"abc30.com":[["aeld","scroll"]],"abc7news.com":[["aeld","scroll"]],"abels.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"accace.com":[["set","realCookieBanner","undefined"]],"accountantsdaily.com.au":[["set-local-storage-item","articleGateData","$remove$"]],"addictinggames.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"adef-emploi.fr":[["set-local-storage-item","analytics_gdpr_accept","yes"],["set-local-storage-item","youtube_gdpr_accept","yes"]],"adevarul.ro":[["aopr","addLink"]],"adidas.ca":[["set-cookie","notice_preferences","2"]],"adidas.ch":[["set-cookie","notice_preferences","2"]],"adidas.com.ar":[["set-cookie","notice_preferences","2"]],"adidas.com.ph":[["set-cookie","notice_preferences","2"]],"adidas.es":[["set-cookie","notice_preferences","2"]],"adidas.gr":[["set-cookie","notice_preferences","2"]],"adidas.ie":[["set-cookie","notice_preferences","2"]],"adidas.pe":[["set-cookie","notice_preferences","2"]],"adidas.sk":[["set-cookie","notice_preferences","2"]],"adslayuda.com":[["set","better_ads_adblock","null"]],"aida64.com.ua":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"airfrance.co.jp":[["aopw","gdpr_popin_path"]],"airlinercafe.com":[["acs","jQuery","ads"]],"ajc.com":[["aeld","/^(mouseout|mouseleave)$/"]],"akasha.org":[["set-local-storage-item","akasha__cookiePolicy","true"]],"aliexpress.com":[["aeld","mouseleave"]],"allen.in":[["json-prune","data.page_content.slot_widgets"]],"allokebab-pau.fr":[["rc","unreadable-display","","stay"]],"alma.be":[["set-cookie","__cookie_consent","false"]],"alohafromdeer.com":[["set-local-storage-item","cookies-consent","0"]],"alpine-hygiene.ch":[["set-cookie","cookie-preference","1"]],"alquilerordenadores.com":[["set","realCookieBanner","undefined"]],"alueviesti.fi":[["set-cookie","cm_ads","0"],["set-cookie","cm_analytics","0"],["set-cookie","cm_default","1"]],"aluypvc.es":[["set-cookie","cookiesConsent","1"],["set-cookie","cookiesPreferences","0"],["set-cookie","cookiesStatistics","0"]],"amai.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"amarillo.com":[["nostif","gnt_mol_oy"]],"amestrib.com":[["nostif","gnt_mol_oy"]],"amlesson.ru":[["aopw","disable_keystrokes"],["aopw","disableSelection"]],"amway-latvia.com":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"amway-lithuania.com":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"analizy.pl":[["acs","setTimeout","newsletterPopup"]],"anderweltverlag.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"angelifybeauty.com":[["set-cookie","cookies_modal","true"]],"anisearch.com":[["nostif","faq/whitelist"]],"anmarlube.com":[["set-cookie","promptCookies","1"]],"annabeauty-stuttgart.de":[["set","realCookieBanner","undefined"]],"anynouxines.barcelona":[["set-cookie","promptCookies","1"]],"aphorisma.de":[["set-cookie","alertCookie","true"]],"aplgo.com":[["set-cookie","cookie_agreement","1","","reload","1"]],"apornstories.com":[["aopw","killCopy"],["ra","oncontextmenu|ondragstart|onselectstart|onkeydown"]],"app.midpage.ai":[["set-local-storage-item","cookieConsent","denied"]],"archiup.com":[["set-local-storage-item","cookiePolicyAccepted","yes"]],"arera.it":[["set-cookie","CookieConsent","1"]],"argos-tradein.co.uk":[["set-cookie","AcceptCookieOnOff","1"],["set-cookie","GoogleAnalyticOnOff","0"]],"ark-unity.com":[["no-fetch-if","/adsbygoogle|ad-manager/"]],"armenia.travel":[["set-cookie","cp","true"]],"arras.netlify.app":[["set","ramp.addUnits","noopFunc"]],"arsdigita.de":[["set","realCookieBanner","undefined"]],"artesacro.org":[["aeld","contextmenu"],["acs","document.onselectstart"]],"artsy.net":[["aeld","scroll"]],"ashemaletube.com":[["set-cookie","rta_terms_accepted","true"]],"asics.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"astondevs.ru":[["set-local-storage-item","banner","true"]],"astro-cric.pages.dev":[["set","confirm","noopFunc"]],"atombank.co.uk":[["set-cookie","acknowledgeCookieBanner","true"],["set-cookie","enableAnalyticsCookies","denied"],["set-cookie","enableTargetingAdvertisingCookies","denied"]],"attend.techevents.informaconnect.com":[["set-cookie","swapcard-cookie-consent","accepted"]],"atw.jp":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"audinifer.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"audiologyresearch.org":[["rmnt","script","document.oncontextmenu"]],"augustachronicle.com":[["nostif","gnt_mol_oy"]],"auto-treff.com":[["acs","$","offsetHeight"]],"auto.mahindra.com":[["set-cookie","consentTracking","false"]],"autohaus-reitermayer.de":[["set-cookie","hide-gdpr-bar","true"]],"autohaus24.de":[["set-cookie","user_accepted_cookies","1"]],"automatiksysteme.com":[["set","realCookieBanner","undefined"]],"autoverwertung-berk.de":[["set","realCookieBanner","undefined"]],"awardsradar.com":[["set-cookie","g1_popup_disabled","1"]],"axionnews.live":[["set-local-storage-item","cookieConsent","true"]],"babyshop.com":[["set-cookie","BABY_MARKETING_COOKIES_CONSENTED","false"],["set-cookie","BABY_NECESSARY_COOKIES_CONSENTED","true"],["set-cookie","BABY_PERFORMANCE_COOKIES_CONSENTED","false"]],"bad-scherer.de":[["set-cookie","_cookieaccept","1"],["set-cookie","_cookietools","1"]],"baixedetudo.net.br":[["aopw","document.oncontextmenu"],["aeld","/copy|keydown/"]],"bajuwarenhof.de":[["set-cookie","cookie-consent","declined","","reload","1"]],"bangkokpost.com":[["rmnt","script","getComputedStyle"]],"barcawelt.de":[["set-cookie","gvCookieConsentAccept","1","reload","","1"]],"barntgreeninn.co.uk":[["set-cookie","ce-cookie","N"]],"baseblocks.tenereteam.com":[["set-local-storage-item","isAcceptCookie","false"]],"baselime.io":[["set-local-storage-item","closed","true"]],"bayern-gegen-gewalt.de":[["set-cookie","required","1"]],"bcliquorstores.com":[["set-session-storage-item","enews_popup_session","1"]],"beercellar.co.nz":[["set-cookie","isAnAdult","true"]],"beinsports.com":[["set-cookie","use_cookie","1"]],"belisse-beauty.co.uk":[["set-cookie","cookie-preference","1"]],"bequiet.com":[["set-cookie","_CookiePolicyHint","true"]],"betterhumans.pub":[["set-local-storage-item","201805-policy|accepted","1"]],"bgextras.co.uk":[["set-cookie","CB393_DONOTREOPEN","true"]],"bgk.pl":[["rc","dp--cookie-consent","body","stay"]],"bgs-shop.de":[["set-cookie","cookieconsent_state","2"]],"bianity.net":[["aeld","contextmenu"]],"bibliothek.bahai.de":[["set-cookie","cookiesOk","true"]],"bigcheese.software":[["set-cookie","consent-cookies","1"]],"bikesell.co.kr":[["ra","oncontextmenu","body"]],"bitblokes.de":[["acs","document.getElementsByTagName","null"]],"bitscrunch.com":[["set-cookie","rcl_consent_given","true"],["set-cookie","rcl_marketing_consent","false"],["set-cookie","rcl_preferences_consent","true"]],"bittersandbottles.com":[["set-cookie","m_a_v","1"]],"bizkaia.eus":[["set-cookie","pc_analitica_bizkaia","false"],["set-cookie","pc_preferencias_bizkaia","true"],["set-cookie","pc_tecnicas_bizkaia","true"],["set-cookie","pc_terceros_bizkaia","false"]],"blackpoolairport.com":[["rc","wcc-popup-overflow","body","stay"]],"blasianluvforever.com":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"blaze.bet.br":[["set-cookie","accept_policy_regulation","1"]],"blikk.hu":[["ra","style","body","stay"]],"bloombergquint.com":[["aopw","addLinkToCopy"],["aopr","getSelection"]],"bluesnews.com":[["nostif","nn_mpu1","5000"]],"bo3.gg":[["set-local-storage-item","cookiesAccepted","true"]],"boheme-schwabing.de":[["set","realCookieBanner","undefined"]],"book.zongheng.com":[["aopr","document.oncontextmenu"],["ra","onselectstart"]],"brancaia.com":[["set","realCookieBanner","undefined"]],"brawlstats.com":[["set-cookie","accept-cookies","0"]],"brazzersnetwork.com":[["set-cookie","cookieConsent","0","","reload","1"]],"brewersfayre.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"britannica.com":[["acs","document.createElement","admiral"]],"browns-restaurants.co.uk":[["set-cookie","ce-cookie","N"]],"burnesspaull.com":[["set-cookie","ck_pref_all","1"]],"businessclass.com":[["set-cookie","ibe.acceptedCookie","true"],["set-local-storage-item","bcCookieAccepted","true"]],"buttersc.one":[["json-prune","ads.[].imageUrl"]],"c315.cn":[["ra","oncontextmenu|onselectstart|oncut|oncopy"]],"c4ddownload.com":[["aopr","b2a"]],"calmwaters.de":[["set-cookie","cookie-preference","1"]],"camcaps.to":[["acs","RegExp","debugger"]],"camere-live.ro":[["rmnt","script","'contextmenu'"]],"canonvannederland.nl":[["set-local-storage-item","z_cookie_consent","true"]],"carry.pl":[["set-cookie","__carry_cookie_module","2","","reload","1"]],"carwyncellars.com.au":[["set-local-storage-item","of-age","true"]],"case-score.com":[["set-cookie","cookieConfirm","true"],["set-cookie","trackingConfirm","false"]],"casertace.net":[["acs","jQuery","ai_adb"]],"celebzcircle.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"charleskeith.com":[["set-cookie","ck_dnt","1"],["set-cookie","consentTracking","true"],["set-cookie","consentTrackingPopupCookie","true"]],"chaturbate.com":[["set-cookie","agreeterms","1","","reload","1"]],"checkwx.com":[["set-cookie","cookieshown","1"]],"cissamagazine.com.br":[["acs","soclInit"],["nostif","Zord.analytics.registerBeforeLeaveEvent","3000"]],"citizen-times.com":[["nostif","gnt_mol_oy"]],"cityfalcon.ai":[["set-local-storage-item","cookies_policy_status","true"]],"ciweimao.com":[["aopr","document.oncontextmenu"],["aopw","document.body.oncopy"]],"clipchamp.com":[["set-cookie","acceptCookies","true"]],"cloud.kaspersky.com":[["set-cookie","B2BCloudTracking","Disabled","","","reload","1"]],"cnn.co.jp":[["set-cookie","CNN_MAIL_MAGAZIN","1"]],"codedead.com":[["set-local-storage-item","hasAcceptedCookieNotice","true"]],"coffeeapps.ir":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"commercialappeal.com":[["nostif","gnt_mol_oy"]],"compact-shop.de":[["set-cookie","ris_cookie_setting","1"]],"computerenhance.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"comune.sanleonardoinpassiria.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.scena.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sluderno.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.valdaora.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comunitacomprensorialevallepusteria.it":[["set-cookie","ris_cookie_setting","1"]],"cordon.de":[["set-cookie","cookie-preference","1"]],"courier-tribune.com":[["nostif","gnt_mol_oy"]],"courierpress.com":[["nostif","gnt_mol_oy"]],"cristoiublog.ro":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"]],"crtm.es":[["set-cookie","crtmcookiesProtDatos","1","","reload","1"]],"curseforge.com":[["no-fetch-if","googlesyndication"]],"cwallet.com":[["set-local-storage-item","ns_cookies","1"]],"dagvandewetenschap.be":[["set-cookie","__cookie_consent","false"]],"dailyamerican.com":[["nostif","gnt_mol_oy"]],"damasko-watches.com":[["set-cookie","cookie-preference","1"]],"dasfutterhaus.at":[["set-cookie","dsgvo_consent","1"]],"dbschenkerarkas.com.tr":[["set-cookie","allow-marketing-tracking","false"],["set-cookie","allow-statistical-tracking","false"],["set-cookie","privacy-notice-responded","0"],["set-local-storage-item","cookie_usage_acknowledged_2","1"]],"de-appletradein.likewize.com":[["set-cookie","IsCookieAccepted","yes","","reload","1"]],"dedicatedteacher.cambridge.org":[["set-cookie","ubcc","0"]],"deep-shine.de":[["set-cookie","cookie-preference","1"]],"deniswilliams.ie":[["rc","wcc-popup-overflow","body","stay"]],"dentmania.de":[["set-cookie","CookieConsent","true"]],"deportealdia.live":[["acs","document.oncontextmenu"]],"deribit.com":[["set-local-storage-item","appCardSeen","true"]],"derscharfemaxx.com":[["set-cookie","scharfer-maxx-che-cookie-categories","essential"]],"devilslakejournal.com":[["nostif","gnt_mol_oy"]],"dgb.de":[["rc","js-show-newsletter-popup","","stay"]],"dhgate.com":[["aeld","mouseleave"]],"dicasdevalor.net":[["aeld","contextmenu"]],"dicionariocriativo.com.br":[["aopr","getSelection"]],"die-werbeschmiede.de":[["set","realCookieBanner","undefined"]],"digital.lasegunda.com":[["aeld","contextmenu"]],"digminecraft.com":[["set","placeAdsHandler","noopFunc"]],"dispatch.com":[["nostif","gnt_mol_oy"]],"dj4events.fr":[["rc","unreadable-display","","stay"]],"dlnews.com":[["aeld","/^(mouseout|mouseleave)$/"]],"dmsg.de":[["rc","dp--cookie-consent","body","stay"]],"docs.rememberizer.ai":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.webstudio.is":[["set-cookie","__gitbook_cookie_granted","no"]],"doka.com":[["set-cookie","hide_cookieoverlay_v2","1","","reload","1"],["set-cookie","performance-cookies_allowed_v2","0"],["set-cookie","socialmedia-cookies_allowed_v2","0"]],"downloadtutorials.net":[["aeld","","mdp"],["aeld","/contextmenu|selectstart|copy/"]],"dozapteka.pl":[["set-cookie","consent-granted","1","","reload","1"],["set-cookie","consent-granted-version","23"]],"drainagebuizen.nl":[["set-cookie","cookiebar","1"]],"draisinenbahn.de":[["set","realCookieBanner","undefined"]],"dreamstime.com":[["nostif","SignUPPopup_load","5000"]],"droptica.com":[["set-cookie","gtm-scripts-accepted-cookies-1712054031","required"]],"ds2video.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dushu.qq.com":[["aopr","document.oncontextmenu"],["aopr","document.oncopy"],["aopr","document.onselectstart"]],"dymoksmokeshop.com":[["set-cookie","age","true"]],"dzwignice.info":[["aeld","contextmenu"]],"e-food.gr":[["set-cookie","accepted_cookies","true","","reload","1"],["set-cookie","cookie_privacy_level","required"]],"editorajuspodivm.com.br":[["set-cookie","googleConsent","1"]],"efl.com":[["set-cookie","cookie_consent_given","true"]],"eheizung24.de":[["set-cookie","cookie-preference","1"]],"elektrotechnik-schabus.de":[["set","realCookieBanner","undefined"]],"elgiganten.dk":[["set","cicc.cookie_cat_statistic","true"]],"elitepvpers.com":[["nostif","$"],["acs","$","Promise"]],"elsate.com":[["set-cookie","phpbb3_4zn6j_ca","true"]],"embedv.net":[["nosiif","devtool"],["nostif","devtool"]],"emmi-aktifit.ch":[["set-cookie","aktifit-che-cookie-categories","essential"]],"emmi-luzerner.ch":[["set-cookie","luzerner-che-cookie-categories","essential"]],"enac.es":[["set-cookie","lopd_medicion","2"]],"eoreuni.com":[["aopw","document.oncontextmenu"]],"erc51.ru":[["set-local-storage-item","cookiesAccepted","false"]],"erdbeerprofi.de":[["set-cookie","amcookie_allowed","1"]],"erinsakura.com":[["aeld","copy"]],"esm-computer.de":[["set-cookie","cookie-preference","1"]],"espacocasa.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"espn.com":[["aeld","contextmenu"]],"esscctv.com":[["ra","onselectstart","html[onselectstart]"]],"essencestudios.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"esto.eu":[["set-local-storage-item","cookie_accepted","true"]],"etwinning.at":[["set-cookie","cookieconsent_status_new","1"]],"eugendorf.at":[["set-cookie","ris_cookie_setting","1"]],"euranetplus.de":[["set","realCookieBanner","undefined"]],"eveningtribune.com":[["nostif","gnt_mol_oy"]],"f1store4.formula1.com":[["set-cookie","mktck","false"]],"fabian-heinz-webdesign.de":[["set","realCookieBanner","undefined"]],"fairlady.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"falabella.com":[["set-cookie","isCookieLegalBannerSelected","true"]],"fatalmodel.com":[["set-session-storage-item","CookieTerm18","true"]],"fauxid.com":[["aeld","error"]],"fayobserver.com":[["nostif","gnt_mol_oy"]],"fdlreporter.com":[["nostif","gnt_mol_oy"]],"feature.fm":[["set-cookie","featureConsent","false","","reload","1"]],"femibion.rs":[["set-local-storage-item","cookie","true"]],"festival-cannes.com":[["aeld","contextmenu"]],"fidlock.com":[["set-cookie","cookie-preference","1"]],"figshare.wesleyan.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"fimfiction.net":[["set","config.requireCookieConsent","false"],["aeld","load","adLazy"]],"fin24.com":[["aopr","Date.prototype.toUTCString"]],"fincaparera.com":[["set-cookie","promptCookies","1"]],"finewoodworking.com":[["set-cookie","taunton_user_consent_advertising","false"],["set-cookie","taunton_user_consent_analytics","false"],["set-cookie","taunton_user_consent_submitted","true"]],"firsty.app":[["set-local-storage-item","cookieConsent","true"]],"fitzmuseum.cam.ac.uk":[["rc","show--consent","body","stay"]],"flagma.by":[["set-cookie","privacyLevel","flagmajob_ads_shown","1","","reload","1"]],"flanagansappleliverpool.co.uk":[["set-cookie","ce-cookie","N"]],"fletcher.nl":[["set-cookie","acceptCookies","true"]],"flowstate.fm":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"fobizz.com":[["set","realCookieBanner","undefined"]],"fogaonet.com":[["set-cookie","fn_cookie_banner","1"],["set-cookie","fn_cookie_whatsapp_alert","1"]],"ford-fuchs-uffenheim.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-geberzahn-koeln.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-gerstmann-duesseldorf.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-horstmann-rastede.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-rennig.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-sg-neu-ulm.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-westhoff-hamm.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-wieland-hasbergen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.fr":[["set-cookie","cookieAcknowledged","true"]],"ford.nl":[["set-cookie","cookieAcknowledged","true"]],"forgeofempires.com":[["set-cookie","CookieNotification","1"]],"fortgarry.com":[["set-cookie","age-checked","1"]],"forum-koepenick.de":[["set","realCookieBanner","undefined"]],"foxaholic.com":[["ra","onkeydown|onselectstart|oncontextmenu","body[onkeydown*=\"__cfRLUnblockHandlers\"]","complete"],["ra","oncontextmenu|onkeydown|onselectstart","body"]],"freecam.ro":[["aeld","contextmenu"]],"freemans.com":[["set-cookie","firstPartyDataPrefSet","true"]],"frissebips.nl":[["set-cookie","cmplz_banner-status","dismissed"]],"fschemie-goettingen.de":[["set","realCookieBanner","undefined"]],"fullstackeconomics.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"fundamenta.hu":[["set-cookie","cookie_consent","true","","domain",".fundamenta.hu"],["set-cookie","general","true","","domain",".fundamenta.hu"]],"funivie.org":[["acs","document.oncontextmenu"]],"funniermoments.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"funnyordie.com":[["nostif","adsBlocked"]],"fv2freegifts.org":[["acs","document.oncontextmenu"]],"gakki.me":[["ra","oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|onselect|oncopy|onbeforecopy|onmouseup"]],"galesburg.com":[["nostif","gnt_mol_oy"]],"gamebanana.com":[["aopr","adBlockDetected"],["nostif","vSiteRefresher"]],"gamershit.altervista.org":[["aopr","document.oncontextmenu"]],"gaming-pc.net":[["set","realCookieBanner","undefined"]],"gardeningknowhow.com":[["set-cookie","FTR_Article_PageView","2"]],"gasobni.com":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"gdi-sh.de":[["set-cookie","externalVideosEnabled","true"],["set-cookie","gsbbanner","closed"]],"gdpr.twitter.com":[["set-cookie","twtr_pixel_opt_in","N"]],"gemeinde.natz-schabs.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.olang.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.partschins.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.rasenantholz.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.sandintaufers.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.sarntal.bz.it":[["set-cookie","ris_cookie_setting","1"]],"generali.at":[["set-cookie","CST_COOKIE_CONSENT","1"],["set-cookie","cookieMessageDismissed","1"]],"genesistls.com":[["acs","document.ondragstart"],["acs","document.onkeydown"]],"geniusjw.com":[["acs","document.oncontextmenu"]],"geosfreiberg.de":[["set-cookie","hidecookiesbanner","1"],["set-cookie","no_cookies","1"]],"globalcitizensolutions.com":[["rc","gcs-cc-lock","html","stay"]],"gls-group.eu":[["set-cookie","gls-cookie-policy","accepted"]],"gnt24365.net":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"gobranded.com":[["set-cookie","BRANDED_COOKIES_CONSENT","DECLINED"]],"goerie.com":[["nostif","gnt_mol_oy"]],"goessential.com":[["set","realCookieBanner","undefined"]],"golfmonthly.com":[["set-cookie","FTR_Article_PageView","2"]],"goodpods.com":[["set-local-storage-item","cookie_consent","accepted"]],"google.com":[["set-local-storage-item","mapslitepromosdismissed","1"]],"gq-magazine.co.uk":[["set","ads_not_blocked","true"]],"grass.io":[["set-local-storage-item","acceptedAllCookies","false"],["set-local-storage-item","cookiePreference","essential"]],"greatfallstribune.com":[["nostif","gnt_mol_oy"]],"greenbuildingadvisor.com":[["set-cookie","taunton_user_consent_advertising","false"],["set-cookie","taunton_user_consent_analytics","false"],["set-cookie","taunton_user_consent_submitted","true"]],"greenvilleonline.com":[["nostif","gnt_mol_oy"]],"grillrost.com":[["set-cookie","cookie-preference","1","","reload","1"]],"grunge.com":[["aeld","copy"]],"guiademayores.com":[["set","realCookieBanner","undefined"]],"guiasaude.info":[["aeld","contextmenu"],["acs","document.onkeydown"]],"guide-bordeaux-gironde.com":[["set-cookie","cookieConsent-2023-03","false"]],"gutscheine.eurothermen.at":[["rc","dp--cookie-consent","body","stay"]],"hachettebookgroup.com":[["set-cookie","cookie__newsletter_popup","1"],["set-cookie","cookie__privacy_policy","1"]],"halotracker.com":[["aopw","adBlockDetected"]],"haustier-berater.de":[["set-cookie","CookieConsent","1"]],"hawkers.beer":[["set-cookie","age-checked","1"]],"hifi-punkten.se":[["set-cookie","cookie_consent_v2_0_functional_third_party","1"],["set-cookie","cookie_consent_v2_0_marketing_third_party","0"],["set-cookie","cookie_consent_v2_0_required","1"]],"hifitest.de":[["set-cookie","cookie-set-popup","0","","reload","1"]],"home.novel-gate.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"hotelborgia.com":[["set-cookie","cookie","1","","reload","1"],["set-cookie","cookie-analytics","0"]],"hurton.pl":[["set-cookie","is_allowed_client_traking_niezbedne","1","","reload","1"]],"husseinezzat.com":[["aeld","contextmenu"],["aeld","keydown"]],"ibps.in":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"icy-veins.com":[["rmnt","script","reviveScroll","excludes","self.__next"],["nostif","premium"]],"ifortuna.sk":[["set-cookie","cookie_layer","1"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"ilarahealth.com":[["set-cookie","cookies-accepted","true","","reload","1"]],"iloveincredibles.com":[["set-cookie","age-modal-hide","true"]],"imkershoperzgebirge.de":[["rc","disable","div","stay"]],"impots.gouv.fr":[["set","PASSER_videoPAS_apres","0"]],"inceptionlabs.ai":[["set-local-storage-item","framerCookiesDismissed","true"]],"includehelp.com":[["acs","document.getElementById","banner"]],"industriemedien.at":[["set","realCookieBanner","undefined"]],"infoplease.com":[["nostif","show"]],"ing-sat.hu":[["set","document.oncontextmenu","null"],["set","document.onmousedown","null"]],"ing.it":[["set-cookie","ING_GPP","0"],["set-cookie","ING_GPT","0"]],"inmuebles24.com":[["set-cookie","allowCookies","true"]],"inspections.vcha.ca":[["set-cookie","agreedToCookiesanon","1"]],"ipphone-warehouse.com":[["aeld","contextmenu"],["aeld","afterKeydown"],["aeld","keydown","void"],["aeld","copy","void"]],"iptvromania.ro":[["rmnt","script","contextmenu"]],"irishnews.com":[["set-local-storage-item","ArcP","$remove$"]],"itpro.com":[["set-cookie","FTR_Article_PageView","2"]],"japonhentai.com":[["acs","addEventListener","ays_tooltip"],["rmnt","style","::selection"]],"jeniusplay.com":[["set","Object.prototype._detectLoop","undefined"],["set","console.clear","undefined"]],"jeu.fr":[["set-cookie","OptanonAlertBoxClosed","true"]],"jeu2048.fr":[["aopw","FuckAdBlock"]],"jezebel.com":[["set-cookie","pm_email_popup_status","1"]],"jingdaily.com":[["set-cookie","newsletter","true"]],"jobs.fgcu.edu":[["set-cookie","ctc_rejected","1"]],"jobsbotswana.info":[["acs","jQuery","restriction"],["aopw","document.oncontextmenu"]],"johnlewis.com":[["set-cookie","JOHNLEWIS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1","","reload","1"],["set-cookie","JOHNLEWIS_ENSIGHTEN_PRIVACY_Essentials","1"]],"jp-m.banggood.com":[["rc","show-app-bar","","stay"]],"jpnn.com":[["aopr","document.oncopy"]],"juancarlosmolinos.net":[["aopw","ABDSettings"]],"juntadeandalucia.es":[["set-cookie","show_msg_cookies","false"]],"justanswer.co.uk":[["set-cookie","cbChecked","true"]],"kaeserei-studer.ch":[["set-cookie","studer-che-cookie-categories","essential"]],"kaleidoscope.co.uk":[["set-cookie","firstPartyDataPrefSet","true"]],"kangmartho.com":[["acs","document.onselectstart"]],"karver-systems.com":[["set","realCookieBanner","undefined"]],"keb-automation.com":[["set-cookie","privacy-statement-accepted","true","","reload","1"]],"kenastonwine.com":[["set-local-storage-item","agecheck","yes"]],"khanacademy.org":[["set-local-storage-item","ka:4:legal-updates","true"]],"kinemaster.com":[["set-cookie","kinemaster-cookieconstent","1"]],"kiplinger.com":[["set-cookie","FTR_Article_PageView","2"]],"kletterkogel.de":[["set-cookie","cookie-preference","1"]],"koalasplayground.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"kollyinsider.com":[["aopw","adMessage"]],"kornau.de":[["set-cookie","Consent","0"]],"korona.by":[["set-cookie","infoPopupClosed","1"]],"kozijnen-hijnekamp.nl":[["set-cookie","consent-cookies","1"]],"kroger.com":[["set-local-storage-item","modal_terms_policy_update_notification","true"]],"kryolan.com":[["set-cookie","allowCookie","1"]],"ktsm.com":[["aeld","scroll"]],"kuchniaplus.pl":[["aeld","contextmenu","a"]],"kupbilecik.de":[["set-cookie","allow-cookie","1"],["set-cookie","cookie-functional","1"]],"kurazone.net":[["aopw","clickIE4"],["aopw","disableSelection"]],"kyoceradocumentsolutions.de":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.fr":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"la-grotta-solar.es":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_google_analytics","deny"],["set-cookie","ckies_google_maps","allow"],["set-cookie","ckies_youtube","allow"]],"lacasadavantialsole.org":[["set","realCookieBanner","undefined"]],"larsbengtsson.se":[["set-cookie","cookie_consent_v2_0_functional_third_party","1"],["set-cookie","cookie_consent_v2_0_marketing_third_party","0"],["set-cookie","cookie_consent_v2_0_required","1"]],"legacy.com":[["acs","document.createElement","admiral"],["acs","document.getElementsByTagName","admiral"]],"legacylr.com":[["set-cookie","cookiemailinglist","1"]],"legionprogramas.org":[["acs","document.oncontextmenu"],["aopw","document.onselectstart"]],"lemwarm.com":[["set-local-storage-item","cookieClosed","true"]],"lepetitchevrier.ch":[["set-cookie","le-petit-chevrier-che-cookie-categories","essential"]],"lesa.ch":[["set-cookie","lesa-che-cookie-categories","essential"]],"lesbianstate.com":[["set-cookie","Age","1"],["set-cookie","Cookie","1"]],"lesgarconsfaciles.com":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"lethalpanda.com":[["aopr","b2a"]],"lifesum.com":[["set-local-storage-item","accepted-cookies","[]"]],"ligowiec.net":[["ra","oncontextmenu"]],"live.domatv.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"live.theworldgames.org":[["set-cookie","cookies.consent","false"]],"livedoor.biz":[["set-cookie","livedoor-blog-gdpr-agreed","1"]],"loja.paulus.com.br":[["set-cookie","lgpd-paulus-accepted-paulusloja","true"],["set-cookie","lgpd-paulus-first-view-paulusloja","true"]],"ltmemory.de":[["set","realCookieBanner","undefined"]],"ludeya.com":[["set-cookie","allowGetPrivacyInfo","true"]],"lueneburger-heide.de":[["set-cookie","acceptEssential","1"]],"lugarcerto.com.br":[["aeld","mouseout","pop"]],"lunas.pro":[["aeld","","mdp"]],"m.kaskus.co.id":[["set-cookie","cookie_accepted","true"],["set-session-storage-item","open_in_browser","1"]],"m.supersport.hr":[["set-cookie","cookie_consent","true"]],"mack-design.com":[["set","realCookieBanner","undefined"]],"mantel.com":[["set-cookie","tracking_cookie","1"]],"manyavar.com":[["set-cookie","consentTracking","false"]],"marketing-strategen.com":[["set","realCookieBanner","undefined"]],"marriedbiography.com":[["aeld","/contextmenu|copy/"]],"mash.ru":[["set-cookie","_mash_privacy_accepted","true"]],"mastersintime.com":[["set-local-storage-item","cookieConsentV2","1"]],"maxkoch.de":[["set","realCookieBanner","undefined"]],"mbhszepkartya.hu":[["set-cookie","cookieBasic","true"]],"mbs.jp":[["aopw","document.oncontextmenu"]],"medeberiya.site":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["rmnt","script","stopPrntScr"]],"media-consulting.ch":[["set","realCookieBanner","undefined"]],"mediaite.com":[["set-cookie","am-sub","1"]],"mediotejo.net":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"megatube.xxx":[["ra","oncontextmenu"]],"meningitis.com":[["set-local-storage-item","gskConsentClosedv2","true"]],"mercenaryenrollment.com":[["acs","document.oncontextmenu"]],"mesanalyses.fr":[["set-cookie","MANA_CONSENT","true"]],"mhwg.org":[["ra","oncontextmenu|onselectstart|style","#body_game"]],"mighty-party.com":[["set-cookie","cookies-accepted","true"],["set-cookie","terms-accepted","true"]],"millerandcarter.co.uk":[["set-cookie","ce-cookie","N"]],"mindmegette.hu":[["ra","href","[href*=\"ad.adverticum.net\"]"]],"mjob.si":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","obligatory","true"]],"mkv-pastes.com":[["aeld","contextmenu"],["aopw","document.onselectstart"]],"mod.io":[["set-local-storage-item","cookies","1"]],"moidom.citylink.pro":[["set-cookie","md-cookies-dialog","1"]],"monkey47.com":[["set-cookie","dgtlconsent","essential","","reload","1"]],"moonvalleynurseries.com":[["set-cookie","moon-v1-permissions","false"]],"morencius.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"mostrodifirenze.com":[["acs","document.oncontextmenu"]],"motivationstipp.de":[["set","realCookieBanner","undefined"]],"mui.com":[["set-local-storage-item","docs-cookie-consent","essential"]],"music-on-net.de":[["set","realCookieBanner","undefined"]],"musicmap.info":[["set-cookie","privacy-policy-2023","accept"]],"my-account.storage-mart.com":[["set-local-storage-item","StorageMartCookiesPolicySeen","true"]],"my2n.com":[["set-cookie","consent_panel","1"]],"myclim8.com":[["set","realCookieBanner","undefined"]],"mypensiontracker.co.uk":[["set-cookie","complianceCookie","on"]],"mywot.com":[["set-cookie","cookies_consent_disclaimer","false"]],"nakedcapitalism.com":[["aopw","ABD"]],"nanuko.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"naplesnews.com":[["nostif","gnt_mol_oy"]],"napojecerveny.cz":[["set-cookie","DmCookiesAccepted","true"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"nbcchicago.com":[["aeld","scroll"]],"nbcsports.com":[["aopw","admrlWpJsonP"]],"neilpatel.com":[["rc","mfp-popup-exit-quiz-v2","","stay"],["no-xhr-if","/hotjar|googletagmanager/"]],"neoseeker.com":[["nostif","whetherdo"],["rmnt","script","raptiveAdblockDetected"]],"netbird.io":[["set-cookie","cookie-consent","true"]],"nettv4u.com":[["aeld","contextmenu"],["aeld","copy"]],"newpharma.nl":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"news.17173.com":[["aeld","copy"]],"newsbook.com.mt":[["rc","wcc-popup-overflow","body","stay"]],"newsleader.com":[["nostif","gnt_mol_oy"]],"ngs70.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"nhm.ac.uk":[["set-cookie","nhm-functional-202308","1"],["set-cookie","nhm-marketing","0"],["set-cookie","nhm-performance","0"]],"niko.eu":[["set-cookie","Niko-NikoEu#Consent","true","","reload","1"],["set-cookie","Niko-NikoEu#Functional","true"]],"njjzxl.net":[["aeld","contextmenu"]],"nny360.com":[["aeld","contextmenu","preventDefault"]],"nofilmschool.com":[["acs","document.createElement","admiral"]],"nomanssky.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"noovo.info":[["set-cookie","pushNotifications_popup_displayed_v2","true"]],"nordkorea-info.de":[["set","document.oncontextmenu","null"],["aeld","/dragstart|keyup|keydown/"]],"nordlicht-ev.de":[["set","realCookieBanner","undefined"]],"norlysplay.dk":[["set-cookie","cookies-accepted","true"]],"northumbriasport.com":[["set-cookie","cm_level","0"]],"novaventa.com":[["set-local-storage-item","cookiesAceptadas","true"]],"nove.fr":[["set-local-storage-item","cookie","true"]],"novelism.jp":[["ra","oncontextmenu|ondragstart|oncopy|oncut",".select-none","stay"]],"npnews24.com":[["acs","document.oncontextmenu","document.onselectstart"]],"nypost.com":[["remove-cookie","xbc"],["aopr","googletag.cmd"]],"odw-journal.de":[["set","realCookieBanner","undefined"]],"oead.at":[["set-cookie","cookieconsent_status_new","1"]],"ojas.de":[["set","realCookieBanner","undefined"]],"okuhanako.net":[["ra","oncontextmenu|onselectstart","body[oncontextmenu]","complete"]],"onlinecarparts.co.uk":[["aeld","mousedown","function(t)"]],"openai.com":[["set-cookie","analytics_consent","rejected"],["set-cookie","marketing_consent","rejected"]],"openbookpublishers.com":[["set-cookie","CookieConsent","true","","reload","1"]],"opendesktop.org":[["rmnt","script","btnHtml"],["nano-stb","count"]],"openforests.com":[["set","realCookieBanner","undefined"]],"openreach.com":[["set-cookie","EssentialCookie","true"]],"ophthalmologyadvisor.com":[["remove-cookie","hmmet"]],"orangespotlight.com":[["aeld","/contextmenu|select|copy/"]],"order-order.com":[["acs","document.createElement","admiral"]],"originalstormtrooperbeer.com":[["set-cookie","age-checked","1"]],"osmc.de":[["set","realCookieBanner","undefined"]],"otempo.com.br":[["aeld","copy"]],"oyunskor.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"p2p.land":[["set-local-storage-item","cookiesAccepted","true"]],"palemoon.org":[["set","abd","false"]],"paulaschoice.com":[["set-local-storage-item","signUpModalClosed_slot-paulaschoice_us-global-signUpModal-sfmcModal","1"]],"penn-elcom.com":[["set-cookie","amcookie_allowed","1"]],"pentruea.com":[["acs","document.oncontextmenu"],["aeld","copy"]],"personality-database.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"persuasion.community":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"petcity.lt":[["set-cookie","_consent_analytics","denied"],["set-cookie","_consent_marketing","denied"],["set-cookie","_consent_personalization","denied"],["set-cookie","gdpr_cookie_token","1"]],"peugeot.pl":[["aeld","contextmenu"],["aopw","document.onkeypress"]],"pga.com":[["set-cookie","gdprPGA","true"]],"pgatour.com":[["aopr","__cmpGdprAppliesGlobally"]],"philosophenlexikon.de":[["set","realCookieBanner","undefined"]],"philosophia-perennis.com":[["set","realCookieBanner","undefined"]],"phimfit.com":[["nosiif","debugger"],["nostif","_detectLoop"]],"photospecialist.co.uk":[["set-cookie","cookie_accepted","false","","reload","1"]],"pixwox.com":[["nostif","length","3000"]],"planetagibiblog.com.br":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"]],"plassenburg.de":[["set-cookie","cookiehinweisnew","2","","reload","1"]],"playertv.net":[["rmnt","script","/contextmenu|devtool/"]],"playtiao.com":[["set-local-storage-item","tiao:analytics-consent","denied"]],"ploughandharrowaldridge.co.uk":[["set-cookie","ce-cookie","N"]],"plzenoviny.cz":[["set","realCookieBanner","undefined"]],"pngitem.com":[["aopr","document.oncontextmenu"]],"polsatnews.pl":[["aeld","copy"]],"polycomp.bg":[["set-cookie","EU_COOKIE_LAW_CONSENT_POLY","true"]],"polymtl.ca":[["set-cookie","cookie-agreed","2"]],"popmart.com":[["set-local-storage-item","HAS_AGREE_POLICY","true"]],"posterstore.dk":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.fr":[["set-cookie","synapse-cookie-preferences-set","true"]],"posthog.com":[["set-local-storage-item","cookie_consent","no"]],"prenota.humanitas.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"pricehubble.com":[["set-cookie","cookieBannerAccepted","1","","reload","1"]],"pricewise.nl":[["set-cookie","CookieConsent","true"]],"primosfinewine.com":[["set-cookie","age_verification","1"]],"princessofwalespub.co.uk":[["set-cookie","ce-cookie","N"]],"privacy.com.br":[["set-local-storage-item","privacy.com.br","accepted"]],"privatekeys.pw":[["set-cookie","cookie_consent_closed","1"]],"proofing.de":[["set","realCookieBanner","undefined"]],"protopage.com":[["aost","document.createElement","createAdblockFallbackSubscribeToProtopageAdDiv"]],"protos.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-non-necessary","no"]],"provenancecommissary.ca":[["set-cookie","age-checked","1"]],"providencejournal.com":[["nostif","gnt_mol_oy"]],"pttws.ptt.gov.tr":[["ra","onpaste","#tr_mesaj > td > .text-input.validate\\[required\\]"]],"punto-informatico.it":[["aopr","blazemedia_adBlock"]],"purspot.com":[["set-cookie","cookieConsent","true"]],"puzzle-galaxies.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-kakuro.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-lits.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-pipes.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-shakashaka.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-thermometers.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.ch":[["set-cookie","puzzleyou-ch_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.cz":[["set-cookie","puzzleyou-cz_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.de":[["set-cookie","puzzleyou-de_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.fi":[["set-cookie","puzzleyou-fi_cookies_consent_allowlist","0","","reload","1"]],"pzw.org.pl":[["set-cookie","cookiepolicyinfo_new2","true"]],"qastack.fr":[["set","useGDPR","false"]],"qidian.com":[["aeld","/contextmenu|copy/"]],"qrzcq.com":[["set-cookie","COOKIES_ACK","1","","reload","1"]],"quicksleeper.pl":[["aopr","document.oncontextmenu"]],"racevpn.com":[["aopw","document.onkeydown"]],"radichubu.jp":[["ra","onContextMenu","body"]],"radnuk.com.ua":[["set","document.oncopy","undefined"],["ra","oncopy",".articles-content[oncopy]","complete"]],"radurlaub.com":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"railtech.com":[["set-cookie","gdpr","accept"]],"rarediseaseadvisor.com":[["remove-cookie","hmmet"]],"rassenlijst.info":[["rc","is-active-cookiebar","","stay"]],"rating.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"raymond-weil.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"rbinternational.com.pl":[["set-local-storage-item","cookie-approvment","1"]],"realestatebusiness.com.au":[["set-local-storage-item","articleGateData","$remove$"]],"redding.com":[["nostif","gnt_mol_oy"]],"reddit.com":[["aeld","block-body-scrolling"],["rc","scroll-disabled","body","stay"],["set-local-storage-item","xpromo-consolidation","1"],["aeld","touchmove"],["rc","rpl-scroll-lock","body","stay"],["rc","scroll-is-blocked","body","stay"],["rc","thumbnail-blur","","stay"],["set-cookie","over18","1"]],"redfin.com":[["rc","stickyBanner","","stay"]],"refinery29.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"reforge.com":[["set-cookie","accept_cookies","accepted"],["set-local-storage-item","framerCookiesDismissed","true"]],"reformsziget.hu":[["set","cookie_alert_overlay","noopFunc"]],"refurbished.at":[["set-cookie","COOKIE_CONSENT","1","","reload","1"],["set-cookie","COOKIE_MARKETING","false"],["set-cookie","COOKIE_STATIC","false"]],"rega.ch":[["set-cookie","consentcookierega","0"]],"renewal.ru":[["set-cookie","agreeCookie","true"]],"reservedeler24.co.no":[["aeld","mousedown","function(t)"]],"revanced.app":[["set-local-storage-item","analytics","false"]],"revl.co.uk":[["set-cookie","ageVerified","true"]],"ridee.bike":[["set","realCookieBanner","undefined"]],"rog-forum.asus.com":[["set-cookie","isReadCookiePolicyDNT","No"],["set-cookie","isReadCookiePolicyDNTAa","False"]],"rozklady.bielsko.pl":[["set-local-storage-item","cookie-accepted","1"]],"runmods.com":[["noeval-if","oncontextmenu"]],"saalfelden.at":[["set-cookie","ris_cookie_setting","1"]],"sacal.it":[["set-local-storage-item","cookieBanner","true"]],"sam.si":[["set-cookie","gdpr-allow-analytics","false"],["set-cookie","gdpr-allow-marketing","false"],["set-cookie","gdpr_popup_shown","true"]],"sanswiss.pl":[["set-cookie","cookie_info","1","","reload","1"]],"satcesc.com":[["acs","document.oncontextmenu"],["aopw","disableSelection"],["aopw","document.onkeydown"],["aeld","/^(?:keyup|keydown)$/"],["aopr","document.ondragstart"]],"savannahnow.com":[["nostif","gnt_mol_oy"]],"savoriurbane.com":[["aopw","document.oncontextmenu"]],"scholtenswerkplek.nl":[["set-cookie","cmplz_banner-status","dismissed"]],"scienceopen.com":[["set-cookie","cookiesAccepted","3"]],"scinapse.io":[["set-local-storage-item","a_c","true"]],"sctimes.com":[["nostif","gnt_mol_oy"]],"search.upright-music.dk":[["set-cookie","cookieConsent","true"]],"seekingalpha.com":[["set-local-storage-item","__tp-gaAccount","disabled"]],"sekai-kabuka.com":[["ra","oncontextmenu"]],"semianalysis.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"sgd.de":[["aeld","contextmenu"]],"sheboyganpress.com":[["nostif","gnt_mol_oy"]],"shelbystar.com":[["nostif","gnt_mol_oy"]],"shop-apotheke.at":[["set-session-storage-item","sae-conversational-consent-msg-closed","true"]],"shop-apotheke.com":[["set-session-storage-item","sae-conversational-consent-msg-closed","true"],["set-session-storage-item","ErxModal","true"]],"shop.coville.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.frankbeer.ca":[["set-cookie","age-checked","1"]],"shop.kbc.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.kurhessen-therme.de":[["set-cookie","cookies_mandatory","true"]],"shop.oettinger.de":[["set-cookie","allowCookie","1"]],"shop.skechers-twn.com":[["set-cookie","allowGetPrivacyInfo","true"]],"shopping.copaair.com":[["set-cookie","gdprcm","true"]],"shz.al":[["set","confirm","noopFunc"]],"silvini.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"sketch.metademolab.com":[["set-cookie","animated_drawings","true"]],"skiweltcup.tv":[["set","realCookieBanner","undefined"]],"snowboardel.es":[["set-cookie","cookie-bar","0"]],"snowpeak.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"sochi1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"softlist.com.ua":[["set-cookie","CookieConsent","true"]],"solarmagazine.nl":[["no-xhr-if","ads"]],"solotrend.net":[["aopw","ai_front"]],"sportboerse-shop.de":[["set-cookie","biloba-open-ai-dsgvo-consent","","declined"],["set-cookie","cookie-preference","1"]],"stadt-schoeneck.de":[["set","realCookieBanner","undefined"]],"staralliance.com":[["set-cookie","STAR_COOKIE_MESSAGE_ACCEPTED","true"],["set-cookie","STAR_PERSONALIZE","false"],["set-cookie","STAR_STATISTICS","false"]],"starbene.it":[["acs","document.oncontextmenu"],["aeld","/copy|contextmenu/"]],"steamkeysglobais.com.br":[["set-local-storage-item","lgpd_consent","true"]],"stefke-heilbronn.de":[["set","realCookieBanner","undefined"]],"steinbockhuette.de":[["set-cookie","Consent","0"]],"steinway-park-seesen.de":[["set","realCookieBanner","undefined"]],"stiegeler.com":[["set-cookie","cookie_consent_user_accepted","false"]],"stockpokeronline.com":[["acs","document.oncontextmenu"]],"store-philips.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"store.wellingtonbrewery.ca":[["set-cookie","isAnAdult","true"]],"stream.bunkr.is":[["acs","document.oncontextmenu"]],"streambuddy.net":[["rmnt","script","oncontextmenu"]],"streamservicehd.click":[["ra","oncontextmenu","body"]],"sunnyside.shop":[["set-local-storage-item","_ccpa_analytics","false"],["set-local-storage-item","_ccpa_marketing","false"],["set-local-storage-item","_ccpa_personal","false"]],"sweet24.de":[["set-cookie","cc-set","1","","reload","1"]],"swissaccounting.org":[["set-cookie","__hs_opt_out","yes"]],"swissmilk.ch":[["set-cookie","closedCookieBanner","true"]],"t3.chat":[["nostif",".abort();","1000"]],"takealot.com":[["set-cookie","cookieNotice","true"]],"tannheimertal.com":[["set-cookie","cookieconsent_status","allow"]],"tanzschulebogner.de":[["set","realCookieBanner","undefined"]],"taskus.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"tcsb.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"tech-recipes.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"techkings.org":[["set","samDetected","true"]],"techsini.com":[["acs","jQuery","preventDefault"]],"teenage.engineering":[["set-cookie","te_cookie_ok","1"]],"telefon-treff.de":[["acs","$","offsetHeight"]],"the-review.com":[["nostif","gnt_mol_oy"]],"theashtonbristol.co.uk":[["set-cookie","ce-cookie","N"]],"theblueschronicles.com":[["set-cookie","complianceCookie","true"],["set-cookie","gaconsent","true"]],"theferry.co.uk":[["set-cookie","ce-cookie","N"]],"theflixertv.to":[["nosiif","_0x"]],"thegeekfreaks.de":[["set","realCookieBanner","undefined"]],"thegleaner.com":[["nostif","gnt_mol_oy"]],"thegraillords.net":[["acs","document.getElementById","block"]],"thegreenmantrumpington.com":[["set-cookie","ce-cookie","N"]],"thehacker.recipes":[["set-cookie","__gitbook_cookie_granted","no"]],"thejazzcafe.com":[["set-cookie","complianceCookie","true"],["set-cookie","gaconsent","true"]],"thememypc.net":[["ra","oncontextmenu","a#download_link","stay"]],"thenews-messenger.com":[["nostif","gnt_mol_oy"]],"thenewsstar.com":[["nostif","gnt_mol_oy"]],"theoblog.de":[["set","realCookieBanner","undefined"]],"theonegenerator.com":[["no-fetch-if","ads"]],"therecord.com":[["remove-cookie","/^tncms:meter:/"]],"thesimsresource.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"thestudentroom.co.uk":[["set-cookie","_tsr_pc","0"]],"thetowntalk.com":[["nostif","gnt_mol_oy"]],"thevolunteernw1.co.uk":[["set-cookie","ce-cookie","N"]],"thewashingtonhampstead.co.uk":[["set-cookie","ce-cookie","N"]],"thinkamericana.com":[["nosiif","offsetHeight"]],"thinkingwithyou.com":[["set","realCookieBanner","undefined"]],"thizissam.in":[["nostif","popupScreen"]],"threesistersbrewery.store":[["set-cookie","isAnAdult","true"]],"timesrecordnews.com":[["nostif","gnt_mol_oy"]],"timo-bernhard.de":[["set","realCookieBanner","undefined"]],"tise.com":[["set-cookie","cookiePolicyAccepted","true"]],"tistory.com":[["aopw","document.oncontextmenu"]],"titantv.com":[["acs","document.createElement","admiral"]],"tivix.co":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"today.com":[["rc","styles_stuck__gtILi","","stay"]],"tomsguide.com":[["aopr","_sp_._networkListenerData"],["set-cookie","FTR_Article_PageView","2"]],"tools.jabrek.net":[["no-fetch-if","www3.doubleclick.net"]],"top1iq.com":[["acs","shortcut"]],"topfaps.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","123"]],"tpsgarage.com":[["set-cookie","cookies_accepted","1","","reload","1"]],"traefik.io":[["set-local-storage-item","cookie_consent","true"]],"tricountyindependent.com":[["nostif","gnt_mol_oy"]],"trirhena-consulting.de":[["set","realCookieBanner","undefined"]],"trouwenbijfletcher.nl":[["set-cookie","acceptCookies","true"]],"truecar.com":[["set-cookie","cookieConsent","true"]],"tryhackme.com":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"tsmodelstube.com":[["set-cookie","warning","1","","reload","1"]],"ttv.pl":[["aeld","contextmenu","a"]],"tumbleweedspirits.com":[["set-cookie","age-checked","1"]],"tupiens-foodie.com":[["set-cookie","allowGetPrivacyInfo","true"]],"tvn24bis.pl":[["aeld","contextmenu","a"]],"twenga.nl":[["set-cookie","cookiewarning","1","","reload","1"]],"ufret.jp":[["aeld","contextmenu"],["aopr","nd_shtml"]],"uhrzeit123.de":[["set-cookie","_u123_cc","yes"],["set-cookie","ga-disable","true"]],"uio.no":[["set-cookie","PrivacyPolicyOptOut","yes"]],"uizard.io":[["set-cookie","cookie-disclaimer","1"]],"uk2.net":[["set-cookie","cb-enabled","accepted"]],"uncrossy.com":[["set","cookieManager","{}"],["set","cookieManager.initialize","noopFunc"],["set","cookieManager.needsConsentBanner","falseFunc"]],"unijet-systems.com":[["set-cookie","cookieSettings","11","","reload","1"]],"universalliquors.net":[["set-cookie","age_verification","1"]],"urbanbrush.net":[["acs","document.oncontextmenu"]],"urbania.ca":[["set-cookie","consent_given","true"]],"usmleexperiences.review":[["acs","document.oncontextmenu"]],"usni.org":[["remove-cookie","STYXKEY_nh_count"],["remove-cookie","STYXKEY_pro_count"]],"vadhander.kramfors.se":[["set","settings.consent","true"]],"vandemoortel.de":[["set-cookie","cookieConsent_given","","reload","1"]],"varaderey.es":[["set-cookie","cookies_aceptadas","true","","reload","1"]],"veev.to":[["acs","RegExp","console"]],"vegvesen.no":[["set-cookie","CookieConsent","false"]],"velicu.eu":[["acs","document.oncontextmenu"]],"velleahome.gr":[["set-cookie","hide_cookies_consent","1"]],"vercalendario.info":[["aeld","copy","Source"]],"verselemzes.hu":[["acs","jQuery","contextmenu"],["acs","jQuery","keyCode"],["aopr","document.onselectstart"],["aopr","document.ondragstart"],["aopr","document.oncontextmenu"],["aopr","document.onkeydown"],["aopr","document.onkeypress"]],"vetzoo.se":[["set-cookie","vzs_consent_necessary","granted","","reload","1"]],"vezess.hu":[["aeld","mouseleave","showFbPopup"],["nostif","FbExit","3000"],["rc","blurry","body > :not(.m-fbPopup)","stay"]],"viafarmaciaonline.it":[["aopr","document.oncontextmenu"]],"vidplay.site":[["nostif","||null"],["aost","console.clear"]],"viel-unterwegs.de":[["set","realCookieBanner","undefined"]],"viewsofgreece.gr":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"virginexperiencedays.co.uk":[["set-local-storage-item","cookie-consent","true"]],"visitmedia.de":[["set","realCookieBanner","undefined"]],"visse.com.br":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"vitotechnology.com":[["set-local-storage-item","SWCOOKIESACC","1"]],"vivoil.com":[["set","realCookieBanner","undefined"]],"voeunblock3.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"volonclick.it":[["set-cookie","COOKIES_CONSENT","0"]],"voltadol.at":[["set-local-storage-item","cookiebanner-active","false"]],"voltafinance.com":[["set-cookie","__wr_disclaimer_source","1"]],"von-neindorff-stiftung.de":[["set","realCookieBanner","undefined"]],"voskey.icalo.net":[["json-prune","ads.[].imageUrl"]],"votes.decisiondeskhq.com":[["set-local-storage-item","login-wall-triggered","1"],["set-session-storage-item","login-wall-dismissed","true"]],"voxvalachorum.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"vrsdigital.de":[["set-cookie","tracking","0"]],"vsetv.click":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"wahaca.co.uk":[["rc","oxy-modal-active","body","stay"]],"walmart.ca":[["set-local-storage-item","enableCookieBanner","false"]],"wals-siezenheim.at":[["set-cookie","ris_cookie_setting","1"]],"watchx.top":[["rmnt","script","devtoolsDetector"],["set","devtoolsDetector","{}"]],"weber-senf.at":[["set","realCookieBanner","undefined"]],"webwereld.nl":[["set","adsAreShown","true"]],"weeb.tv":[["aeld","contextmenu"]],"weetabix.es":[["rc","wcc-popup-overflow","body","stay"]],"weetabix.it":[["rc","wcc-popup-overflow","body","stay"]],"weetabix.no":[["rc","wcc-popup-overflow","body","stay"]],"weetabixea.com":[["rc","wcc-popup-overflow","body","stay"]],"weicon.com":[["set-cookie","cookie-preference","1"]],"went.at":[["set-cookie","COOKIEBAR_1","0"]],"westernjournal.com":[["aopr","__cmpGdprAppliesGlobally"]],"wgrz.com":[["aeld","/^(mouseout|mouseleave)$/"]],"whitbreadinns.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"wichmann.biz":[["set","realCookieBanner","undefined"]],"wildberries.ru":[["set-local-storage-item","wbx__cookieAccepted","true"]],"wildbits.de":[["set","realCookieBanner","undefined"]],"wildpark-ortenburg.de":[["set","realCookieBanner","undefined"]],"windowscentral.com":[["set-cookie","FTR_Article_PageView","2"]],"wiz.io":[["aeld","/^(mouseout|mouseleave)$/"]],"wizcase.com":[["nostif","bioEp.showPopup"]],"wrestling-point.de":[["set","realCookieBanner","undefined"]],"wtol.com":[["aeld","/^(mouseout|mouseleave)$/"]],"wtsp.com":[["aeld","/^(mouseout|mouseleave)$/"],["aeld","mouseout","innerHeight"]],"www-football-london.translate.goog":[["rmnt","script","loc.hostname"]],"www.e-tec.at":[["set-cookie","cc_granted","true","","","domain","www.e-tec.at","reload","1"]],"www.ntv.co.jp":[["aeld","contextmenu","preventDefault"]],"www.uva.nl":[["set-cookie","cookie_consent_level","1"]],"www.watermarkremover.io":[["set-local-storage-item","WkdGcGJIbEpiV0ZuWlVSaGRHRT0=","$remove$"]],"wzamrani.com":[["aeld","contextmenu"]],"xhaccess.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster2.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"]],"xhmoon5.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhofficial.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhtab4.com":[["set-cookie","cookie_accept","1"]],"xploo.com":[["set-cookie","Cookies","100","","reload","1"]],"ylojarvenuutiset.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"yuppow.com":[["set-cookie","show_share","true"]],"zalukaj.io":[["nostif","(!0)","8000"]],"zaunbau-koch.de":[["set","realCookieBanner","undefined"]],"zeglins.com":[["set-local-storage-item","canada-cookie-acknowledge","1"]],"zerogpt.net":[["nostif","adsbygoogle"]],"zonerpress.cz":[["set-cookie","adsCookies","false"],["set-cookie","inshopCookiesSet","true"]],"zs-watch.com":[["set-cookie","hasPolicy","Y"]],"zsti.zsti.civ.pl":[["aeld","contextmenu","preventDefault"]],"zwembaddekouter.be":[["set-cookie","allowCookies","1","","reload","1"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
