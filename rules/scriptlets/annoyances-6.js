/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"123movies.pl":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"],["nostif","_0x"],["set","console.clear","noopFunc"]],"13newsnow.com":[["aeld","/^(mouseout|mouseleave)$/"]],"161.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"2da.nl":[["set-cookie","consent-cookies","1"]],"2mnews.ro":[["rmnt","script","/oncontextmenu|wccp/"]],"30sensualizeexpression.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"48.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"5asec.ch":[["set-cookie","cookie-agreed","2"]],"60.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"6amgroup.com":[["set-local-storage-item","cookie_consent","false"]],"abc.com":[["aeld","scroll"]],"abc11.com":[["aeld","scroll"]],"abc30.com":[["aeld","scroll"]],"abels.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"abs-cbn.com":[["set-local-storage-item","uninavIsAgreeCookie","true"]],"accace.hu":[["set","realCookieBanner","undefined"]],"aceitessatunion.com":[["set-cookie","cmplz_banner-status","dismissed"]],"addonup.com":[["set-local-storage-item","cookie-consent","declined"]],"adidas.be":[["set-cookie","notice_preferences","2"]],"adslink.pw":[["aeld","contextmenu","preventDefault"],["acs","document.onkeydown"]],"agame.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"agekey.org":[["set-local-storage-item","agekey-cookie-consent","true"]],"airbubu.com":[["set-cookie","allowGetPrivacyInfo","true"]],"airchina.com":[["set-cookie","EnableABTest","false"],["set-cookie","EnableFacebook","false"],["set-cookie","EnableGA","false"]],"airchina.fr":[["set-cookie","EnableABTest","false"],["set-cookie","EnableFacebook","false"],["set-cookie","EnableGA","false"]],"aireuropa.com":[["set-cookie","AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"]],"akumo.cz":[["set-cookie","cookie-bar","0"]],"akzent-magazin.com":[["set","realCookieBanner","undefined"]],"all4running.nl":[["set-cookie","cookieConsent","necessary","","reload","1"]],"allegro.nl":[["set-cookie","gdpr_permission_given","0"]],"allen.in":[["json-prune","data.page_content.slot_widgets"]],"alohafromdeer.com":[["set-local-storage-item","cookies-consent","0"]],"alrincon.com":[["set-cookie","adult_cookie","1"]],"altraeta.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"alueviesti.fi":[["set-cookie","cm_ads","0"],["set-cookie","cm_analytics","0"],["set-cookie","cm_default","1"]],"americasvoice.news":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"amnesty.nl":[["set-cookie","amnesty-cookies","000"]],"amway.nl":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"andsafe.de":[["set-local-storage-item","user-has-consent-decision","true"]],"ani-one.com":[["set-cookie","cookieDeclined","1"]],"anikoto.org":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"anisubindo.com":[["aeld","keydown","preventDefault"],["aopr","document.onkeydown"],["aopr","document.oncontextmenu"],["aopw","disableSelection"]],"anisubindo.it":[["aeld","keydown","preventDefault"],["aopr","document.onkeydown"],["aopr","document.oncontextmenu"],["aopw","disableSelection"]],"aniwatchtv.to":[["set","devtoolsDetector.launch","noopFunc"]],"aniwave.net":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"aniwave.pl":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"anix.pl":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"anna.fi":[["set","tcfAllowUseCookies","true"]],"answersafrica.com":[["acs","document.oncontextmenu"]],"antiracismnewsletter.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"arcanum.com":[["set","show_modal","noopFunc"]],"argos-tradein.co.uk":[["set-cookie","AcceptCookieOnOff","1"],["set-cookie","GoogleAnalyticOnOff","0"]],"arkenzoo.se":[["set-cookie","mse_consent_necessary","granted","","reload","1"]],"artkon.de":[["set","realCookieBanner","undefined"]],"artribune.com":[["set-cookie","m6e-newsletter","1"]],"arweave.org":[["set-local-storage-item","user-preference","false"]],"asianet.co.id":[["set-local-storage-item","cookiesAccepted","true"]],"asics.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"ask4movie.co.uk":[["ra","oncontextmenu","html"],["set","console.dir","noopFunc"],["set","navigator.userAgent",""]],"ask4movie.nl":[["ra","oncontextmenu","html"],["set","console.dir","noopFunc"],["set","navigator.userAgent",""]],"asko.com":[["set-cookie","cookieconsent_status_ESSENTIAL","ALLOW"]],"assets4godot.com":[["set-cookie","ga_consent","false"]],"atombank.co.uk":[["set-cookie","acknowledgeCookieBanner","true"],["set-cookie","enableAnalyticsCookies","denied"],["set-cookie","enableTargetingAdvertisingCookies","denied"]],"audialab.com":[["set-local-storage-item","user_closed_pop_up","true"]],"aura.american.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"auth.alipay.com":[["ra","oncopy|oncontextmenu|oncut|onpaste","input"]],"autismiliitto.fi":[["set-cookie","pwd-cookie-consent","0"],["set-cookie","show-cookie-banner","1"]],"auto-doc.de":[["aeld","mousedown","function(t)"]],"auto-doc.it":[["aeld","mousedown","function(t)"]],"auto-doc.net":[["aeld","mousedown","function(t)"]],"autodoc.net":[["aeld","mousedown","function(t)"]],"autodoc24.nl":[["aeld","mousedown","function(t)"]],"autohaus-diefenbach-waldbrunn.de":[["set-cookie","hide-gdpr-bar","true"]],"autohaus24.de":[["set-cookie","user_accepted_cookies","1"]],"b98.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"backmarket.co.uk":[["set-cookie","BM_Advertising","false","","reload","1"],["set-cookie","BM_Analytics","false"],["set-cookie","BM_User_Experience","true"]],"backmarket.net":[["set-cookie","BM_Advertising","false","","reload","1"],["set-cookie","BM_Analytics","false"],["set-cookie","BM_User_Experience","true"]],"badgerandblade.com":[["aopw","adBlockDetected"]],"bangkokpost.com":[["rmnt","script","getComputedStyle"]],"barandblock.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"barcawelt.de":[["set-cookie","gvCookieConsentAccept","1","reload","","1"]],"bcs16.ro":[["aopw","document.oncontextmenu"]],"bettertires.com":[["set-cookie","consent","1"]],"bflix.de":[["aeld","keydown","[arguments];"],["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"bg-gledai.nl":[["rmnt","script","document.oncontextmenu"],["aeld","contextmenu"],["nosiif","debugger"]],"bgk.pl":[["rc","dp--cookie-consent","body","stay"]],"bhaskar.com":[["set-local-storage-item","HAS_ACCEPTED_PRIVACY_POLICY","true"],["set","Object.prototype.dbskrat","true"]],"bhoomtv.pl":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"biano.hu":[["set-cookie","_cb","1","","reload","1"]],"bike-supply.de":[["rc","disable","div","stay"]],"bikepro.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"bilderberg-bellevue-dresden.de":[["set","realCookieBanner","undefined"]],"bildung-ab-50.de":[["set","realCookieBanner","undefined"]],"bilibili.com":[["aeld","selectionchange","quill.emitter"],["aeld","copy"],["aost","player.pause","/stackDepth:(9|10).+https:[./0-9a-z]+\\/video\\.[0-9a-f]+\\.js:1\\d{2}:1.+\\.emit/"]],"billetterie.auditorium-lyon.com":[["set-cookie","ga_consentement","0"]],"binoidcbd.com":[["set-cookie","bavp_age_verified","1"]],"bitbucket.io":[["set-cookie","atl-gdpr-consent","0010000"]],"blaze.co.uk":[["set-cookie","accept_policy_regulation","1"]],"blaze.net":[["set-cookie","accept_policy_regulation","1"]],"blog.tangwudi.com":[["rmnt","script","stopPrntScr"]],"bloomberg.com":[["set-local-storage-item","history","$remove$"]],"bluemediafile.com.br":[["set","Time_Start","0"],["nano-sib","i--","","0.02"]],"bluemediafile.fr":[["set","Time_Start","0"],["nano-sib","i--","","0.02"]],"bluemediafile.it":[["set","Time_Start","0"],["nano-sib","i--","","0.02"]],"bluemediafile.ru":[["set","Time_Start","0"],["nano-sib","i--","","0.02"]],"blueraindrops.com":[["set","lepopup_abd_enabled",""],["acs","document.oncontextmenu"]],"bmovies.com":[["aeld","devtoolschange"]],"bmovies.de":[["aeld","devtoolschange"]],"bns.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"boheme-schwabing.de":[["set","realCookieBanner","undefined"]],"bokadirekt.se":[["set-cookie","BokadirektCookiePreferencesMP","1"]],"bomagasinet.dk":[["rc","show--consent","body","stay"]],"bongdaplus.vn":[["aeld","mousedown","undefined","elements","body"],["set","document.oncontextmenu","trueFunc"]],"booking2.reederei-hiddensee.de":[["set-cookie","functionality","false"],["set-cookie","performance","false"],["set-cookie","targeting","false"]],"boonlessbestselling244.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"brainly.nl":[["set","jsData.hasVideoMeteringUnlogEnabled","undefined"],["set-local-storage-item","social-qa/machineId","$remove$"],["set-local-storage-item","simple-funnel-name","$remove$"]],"brazzersnetwork.com":[["set-cookie","cookieConsent","0","","reload","1"]],"brill-art.de":[["set","realCookieBanner","undefined"]],"bristolbeerfactory.co.uk":[["set-cookie","age-checked","1"]],"britishairways.com":[["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Functional","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["set-cookie","BRITISHAIRWAYS_ENSIGHTEN_PRIVACY_Marketing","0"]],"brownsboys.com":[["aopr","document.onselectstart"]],"bssmvalues.com":[["set-local-storage-item","dataConsentChoice","declined"]],"budgetair.com":[["set-cookie","cookieConsentLevel","functional"]],"buienradar.nl":[["set","hideBannerBlockedMessage","true"]],"cafe.naver.com":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"],["aopr","document.ondragstart"]],"calmwaters.de":[["set-cookie","cookie-preference","1"]],"calorielijst.nl":[["aopw","clickIE"]],"cambridgebs.co.uk":[["set-cookie","cookieStatus","true"]],"campingdusoleil.com":[["rc","unreadable-display","","stay"]],"camra.org.uk":[["set-cookie","camra_experience_cookie_consent","1"],["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"careers.cloud.com":[["set-cookie","ctc_rejected","1"]],"careers.ing.com":[["set-cookie","CookieConsent","0","","reload","1"]],"careers.omedastudios.com":[["set-cookie","_ttCookiePermissions","0"]],"casertace.net":[["acs","jQuery","ai_adb"]],"cdntvmedia.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"cdramalove.com":[["acs","document.oncontextmenu"]],"cdu-fraktion.berlin.de":[["set-cookie","cookiehinweis1","1"]],"certificationexamanswers.890m.com":[["acs","document.oncontextmenu"]],"cespun.eu":[["rmnt","script","contextmenu"]],"chaturbate.com":[["set-cookie","agreeterms","1","","reload","1"]],"chavesnamao.com.br":[["set-local-storage-item","LGPDconsent","1"]],"chilledpackaging.co.uk":[["set-cookie","DenyAllCookies","1","","reload","1"]],"chronologia.pl":[["set","document.onselectstart","null"],["set","document.oncontextmenu","null"]],"cinemablend.com":[["aopr","__cmpGdprAppliesGlobally"],["set-cookie","FTR_Article_PageView","2"]],"cinemarkca.com":[["set-cookie","cookiePolicies","true"]],"cissamagazine.com.br":[["acs","soclInit"],["nostif","Zord.analytics.registerBeforeLeaveEvent","3000"]],"citpekalongan.com":[["ra","oncontextmenu|ondragstart|onselectstart|onkeydown|onmousedown"]],"city-data.com":[["aopr","addLink"]],"classnotes.org.in":[["aopw","document.oncontextmenu"]],"clinicaladvisor.com":[["remove-cookie","hmmet"]],"clinicalpainadvisor.com":[["remove-cookie","hmmet"]],"cmg24.pl":[["aopw","document.oncontextmenu"]],"cnn.com":[["rc","onetrust-banner-open","","stay"],["set-local-storage-item","REG_WALL_METER","$remove$"],["set-local-storage-item","perm_cnn_regwall_v1","$remove$"],["aeld","visibilitychange","dispatch"]],"code.likeagirl.io":[["set-local-storage-item","201805-policy|accepted","1"]],"codex.online":[["set-cookie","_func","true"]],"collider.com":[["remove-cookie","articlesRead"]],"colourbox.com":[["set-cookie","cookie_consent_all","1"]],"columbiadailyherald.com":[["nostif","gnt_mol_oy"]],"columbiaspectator.com":[["nostif","ads","2000"]],"comingsoon.net":[["aopr","googletag"]],"community.creative-assembly.com":[["set-cookie","consent_cookies","1"]],"communitycrimemap.com":[["set-session-storage-item","disclaimerOpened","1"]],"compact-online.de":[["set-cookie","ris_cookie_setting","1"],["set","realCookieBanner","undefined"]],"compravo.de":[["rc","disable","div","stay"]],"comune.rifiano.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sanleonardoinpassiria.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.valdaora.bz.it":[["set-cookie","ris_cookie_setting","1"]],"contaspoupanca.pt":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"cookhero.gr":[["acs","document.oncontextmenu"]],"cotedecor.com":[["rc","unreadable-display","","stay"]],"crichype.com":[["set","confirm","noopFunc"]],"crtm.es":[["set-cookie","crtmcookiesProtDatos","1","","reload","1"]],"crunchbase.com":[["set-local-storage-item","entity-limiter-views","$remove$"]],"crunchyroll.com":[["set-cookie","_evidon_suppress_notification_cookie","1"]],"cuba-buddy.de":[["set-local-storage-item","cb-accept-cookie","true"]],"curate.nd.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"cybershoke.net":[["set-cookie","cookie_read 1"]],"cycling74.com":[["set-cookie","acceptsCookies","false"]],"czapek.com":[["set-cookie","website_cookies_bar","true"]],"dailyworld.com":[["nostif","gnt_mol_oy"]],"daima.asia":[["set-cookie","allowGetPrivacyInfo","true"]],"daotranslate.fr":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aeld","","undefined"]],"dasfutterhaus.at":[["set-cookie","dsgvo_consent","1"]],"datahub.hku.hk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"deezer.com":[["aopr","onbeforeunload"],["nostif","bait"]],"dejure.org":[["set","ad_allowed","true"],["remove-cookie","adblock_counter"]],"dentmania.de":[["set-cookie","CookieConsent","true"]],"depedlps.com.br":[["acs","document.oncontextmenu"]],"depedlps.it":[["acs","document.oncontextmenu"]],"desbloqueador.com.br":[["aopr","document.oncontextmenu"]],"desbloqueador.es":[["aopr","document.oncontextmenu"]],"descarga-animex.nl":[["aeld","/^(?:contextmenu|keydown)$/"]],"developer.nintendo.com":[["set-cookie","tGoogleAnalytics","disabled"],["set-cookie","trackEssentialCookie","enabled","","reload","1"]],"dewesoft.com":[["set-local-storage-item","consent","false"]],"digi.ro":[["set-cookie","cmp_level","3"]],"digitalcameraworld.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"docs.rememberizer.ai":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.webstudio.is":[["set-cookie","__gitbook_cookie_granted","no"]],"dood.pl":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doods.es":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doodstream.com.br":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doodstream.de":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doodstream.es":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doodstream.fr":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doodstream.it":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dooood.com.br":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dooood.pl":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dramacute.org":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"dramaqu.com.br":[["acs","$","contextmenu"]],"drive4brands.de":[["set","realCookieBanner","undefined"]],"drugdiscoverynews.com":[["set-cookie","allowsCookies","true"]],"ds2video.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dublinhealthscreening.ie":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"dukeofdevonshireeastbourne.co.uk":[["set-cookie","ce-cookie","N"]],"dvx.pe":[["set-local-storage-item","isCookiesAcceptedDVX","1"],["set-local-storage-item","isCookiesAcceptedNRTN","DENIED"]],"earnlab.com":[["set-cookie","el_consent","necessary"]],"earnload.ru":[["set","blurred","false"]],"elheraldo.hn":[["aopw","addLink"]],"elitepvpers.com":[["nostif","$"],["acs","$","Promise"]],"ellasblog.de":[["set","realCookieBanner","undefined"]],"embedplus.com":[["set-cookie","ytprefs_gdpr_consent","1"]],"emmi-energy-milk.ch":[["set-cookie","energy-milk-che-cookie-categories","essential"]],"emondo.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"empirical.health":[["set-session-storage-item","emailPopupDismissed","1"]],"encord.com":[["set-cookie","myAwesomeCookieName2","true"]],"endgame.id":[["set-cookie","endgame-accept-policy","true"]],"energylevel.net":[["set-local-storage-item","cookie_consent","true"]],"enesco.co.uk":[["set-cookie","acceptCookieCookie","true"],["set-cookie","enableNonEssentialCookies","false"]],"estadao.com.br":[["aeld","copy"],["set-local-storage-item","TUTORIAL_VIEWED_SNACKS_HOME","true"]],"esthetique-meyerbeer.com":[["rc","unreadable-display","","stay"]],"eurogamer.pl":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"eurosender.com":[["set-cookie","es_cookie_settings_closed","1"]],"eventure.nl":[["set-cookie","consent-cookies","1"]],"evivanlanschot.nl":[["set-cookie","acceptCookies","0"]],"evropochta.by":[["set-local-storage-item","otherCookie","true"],["set-local-storage-item","saveCookie","true"]],"experciencia.com":[["aopr","disableSelection"]],"facebook.com":[["rc","prevent-scrolling","body","stay"]],"fahrstil.cc":[["set","realCookieBanner","undefined"]],"farmaline.be":[["set-session-storage-item","sae-conversational-consent-msg-closed","true"]],"favi.com":[["set-cookie","__Host-cookie-consent","8","","reload","1"]],"fbshop.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"felizemforma.com":[["aeld","contextmenu"],["acs","document.onkeydown"]],"feuerwehr-oberau.de":[["set","realCookieBanner","undefined"]],"fewo-heides-haus.de":[["set-cookie","Consent","0"]],"ffzblossin.de":[["set","realCookieBanner","undefined"]],"flamantonlineshop.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"flixclassic.pl":[["set-cookie","rgp-gdpr-policy","1"]],"flory4all.com":[["acs","document.oncontextmenu"]],"flughafen.tips":[["set","realCookieBanner","undefined"]],"flyingblue.com":[["set-cookie","cookie-consent-level","functional"]],"fmovies.es":[["set-cookie","show_share","true"],["acs","document.oncontextmenu"],["acs","disableSelection","reEnable"],["aopr","document.ondragstart"],["aost","console.clear"]],"ford-bathauer-bad-harzburg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-behrend-waren.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-dinnebier-leipzig.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-maiwald-linsengericht.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-strunk-koeln.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.fi":[["set-cookie","cookieAcknowledged","true"]],"ford.pl":[["set-cookie","cookieAcknowledged","true"]],"fortgarry.com":[["set-cookie","age-checked","1"]],"fox61.com":[["aeld","/^(mouseout|mouseleave)$/"]],"fritzens.gv.at":[["set-cookie","ris_cookie_setting","1"]],"frixtender.de":[["rmnt","script","realCookieBanner"],["set","realCookieBanner","undefined"]],"fruugo.com":[["set-cookie","consents","essential"]],"fruugo.es":[["set-cookie","consents","essential"]],"fruugo.org":[["set-cookie","consents","essential"]],"full-anime.fr":[["acs","document.getElementById","adblock"]],"fups.com":[["set-cookie","AllowCookies","true"],["set-cookie","SeenCookieBar","true"]],"g-nestle.de":[["set-cookie","cookie-preference","1"]],"gadsdentimes.com":[["nostif","gnt_mol_oy"]],"gainesville.com":[["nostif","gnt_mol_oy"]],"gakki.me":[["ra","oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart|onselect|oncopy|onbeforecopy|onmouseup"]],"gallmeister.fr":[["set-cookie","eg_asked","1"]],"games.co.id":[["set-cookie","OptanonAlertBoxClosed","true"]],"garageproject.co.nz":[["set-local-storage-item","accepted_cookies","true"],["set-session-storage-item","age_confirmed","true"]],"garcia-ibanez.com":[["set-cookie","cmplz_banner-status","dismissed"]],"gay69.stream":[["aopr","disableSelection"],["aopw","nocontext"]],"gdplayertv.com":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"gdplayertv.de":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"gemeinde.riffian.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.schlanders.bz.it":[["set-cookie","ris_cookie_setting","1"]],"generalprepper.com":[["set-cookie","cookie_accepted","1"]],"geosfreiberg.de":[["set-cookie","hidecookiesbanner","1"],["set-cookie","no_cookies","1"]],"getaawp.com":[["set","realCookieBanner","undefined"]],"glamourmagazine.co.uk":[["set","ads_not_blocked","true"]],"gledaitv.com.br":[["aeld","contextmenu"],["nosiif","debugger"]],"gledaitv.es":[["aeld","contextmenu"],["nosiif","debugger"]],"gnt24365.net":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"godtlevert.no":[["set-local-storage-item","force_hide_cookie_dialog","1"]],"goeltzschtal-reisen.de":[["set","realCookieBanner","undefined"]],"granfondo-cycling.com":[["no-xhr-if","googlesyndication","length:10"]],"grizly.pl":[["set-cookie","mCs-chk","1"]],"gulfliquorsmiami.com":[["set-local-storage-item","_CityHiveSites_AgeCheck_Checked","yes"]],"hagagruppen.se":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"hamiltonnolan.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"handelsbanken.co.uk":[["set-cookie","shb-consent-cookies","false"]],"hannahgraaf.com":[["set-cookie","confirmed-cookies","1","","reload","1"]],"happypenguin.altervista.org":[["set-cookie","cookieTechnical","1"],["set-cookie","cookieThirdParty","0"]],"happyplates.com":[["set-local-storage-item","consentAccepted","true"],["set-local-storage-item","marketingConsentAccepted","false"]],"hardware-helden.de":[["set","realCookieBanner","undefined"]],"haus-ladn.de":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_stripe","allow"]],"havocpoint.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"hdrezka.com.br":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hdrezka.pl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"healthygamer.gg":[["set-cookie","cookieModalAccept","no"]],"hela-shop.eu":[["set-cookie","cookie-preference","1"]],"hello-rezka.co.uk":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hello-rezka.pl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hello-rezka.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hfm-frankfurt.de":[["set-cookie","CookieConsent","1"]],"himovies.es":[["set-cookie","show_share","true"]],"himovies.pl":[["set-cookie","show_share","true"]],"hindipix.net":[["set","console.debug","trueFunc"],["set","console.clear","trueFunc"]],"hiraethtranslation.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"hitokageproduction.com":[["set","topMessage","noopFunc"]],"hobbyhall.fi":[["set-cookie","CA_DT_V2","0","","reload","1"],["set-cookie","CA_DT_V3","0"]],"hochu.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hodalump.com":[["set-cookie","_pandectes_gdpr","1"]],"hospihousing.com":[["set-local-storage-item","areCookiesAccepted","true"]],"houmatoday.com":[["nostif","gnt_mol_oy"]],"howtotestfrontend.com":[["set-local-storage-item","cookie_consent-2","NO"]],"html5games.com":[["set-session-storage-item","fa-games-consent-given","true"]],"hubspot.com":[["set-cookie","__hs_gpc_banner_dismiss","true"]],"hukmatpro.com.br":[["aopw","hidekeep"]],"hukmatpro.net":[["aopw","hidekeep"]],"huutokaupat.com":[["set-cookie","consent-data-v2","0"]],"hygiene-shop.eu":[["set-local-storage-item","cookiePreference","required"]],"hypnose.ac":[["set","realCookieBanner","undefined"]],"iberostar.com":[["set-cookie","cookies_consent","true"]],"ilonpolku.fi":[["set","realCookieBanner","undefined"]],"imola.motorsportreg.com":[["set-cookie","hasMadeConsentSelection","true","","","domain",".imola.motorsportreg.com"],["set-cookie","hasMadeConsentSelectionGPC","true","","","domain",".imola.motorsportreg.com"]],"imprints.de":[["set","realCookieBanner","undefined"]],"indahonline.com":[["aost","$","/mainseto.js:286:1"]],"inews.hket.com":[["rc","no-scroll","html","stay"]],"infodifesa.it":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"innohome.com":[["rc","wcc-popup-overflow","body","stay"]],"institut-bio-naturel-nice.fr":[["rc","unreadable-display","","stay"]],"intermedicom-gmbh.jimdosite.com":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_google_maps","allow"]],"iovivoatenerife.it":[["aopr","document.oncontextmenu"],["aopr","disableSelection"]],"iptvromania.ro":[["rmnt","script","contextmenu"]],"istore.co.za":[["set-cookie","user_allowed_save_cookie","1"]],"jaapeden.nl":[["set-cookie","acceptAnalyticsCookies","false"],["set-cookie","acceptFunctionalCookies","true"],["set-cookie","cookiePolicyConfirmed","true","","reload","1"]],"jafekri.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"janamaenz.photography":[["set","realCookieBanner","undefined"]],"janvissersweer.nl":[["aopw","stopPrntScr"]],"jbjbgame.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"jeniusplay.com":[["set","Object.prototype._detectLoop","undefined"],["set","console.clear","undefined"]],"jfdb.jp":[["aeld","/contextmenu|keydown/"]],"jmonline.com.br":[["set-local-storage-item","cookie-consent","true"]],"jobcenter-ge.de":[["set-cookie","cookie_consent","denied"],["set-cookie","personalization_consent","denied"]],"jofogas.hu":[["set","Didomi","noopFunc"]],"jongcdenv.be":[["rc","cookieconsent-active","body","stay"]],"joysound.com":[["aeld","DOMContentLoaded","ready"],["set","document.body.oncopy","null","3"],["set","document.body.onselectstart","null","3"],["set","document.body.oncontextmenu","null","3"]],"justanswer.com":[["set-cookie","cbChecked","true"]],"justswallows.net":[["set","console.clear","undefined"]],"kaembed.com.br":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"kaembed.nl":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"kaembed.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"kashiland.jp":[["rmnt","script","onselectstart"]],"katholisches.info":[["nostif","pop"]],"kika.fr":[["set-cookie","cookie_accepted","1"],["set-cookie","functional_cookies","1","","reload","1"]],"kika.it":[["set-cookie","cookie_accepted","1"],["set-cookie","functional_cookies","1","","reload","1"]],"kika.net":[["set-cookie","cookie_accepted","1"],["set-cookie","functional_cookies","1","","reload","1"]],"klsescreener.com":[["acs","document.getElementById","adblock"],["rmnt","script","adblock"],["set-cookie","_ad","0"]],"klsys.com":[["set","realCookieBanner","undefined"]],"kmsw.de":[["set","realCookieBanner","undefined"]],"knime.com":[["set-cookie","cookie-agreed","0"],["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"kohlkg.de":[["set","realCookieBanner","undefined"]],"kontextwochenzeitung.de":[["set-cookie","CookieConsent","mandatory"]],"koszalincity.pl":[["acs","document.oncontextmenu"],["acs","document.onkeydown"]],"kpopjjang.com":[["aopw","stopPrntScr"]],"kto.de":[["set-cookie","caccept","on"]],"kto.it":[["set-cookie","caccept","on"]],"kukaj.io":[["set","devtoolsOpen","false"]],"kupbilecik.de":[["set-cookie","allow-cookie","1"],["set-cookie","cookie-functional","1"]],"kurosave.com":[["aopr","document.body.setAttribute"]],"kyoceradocumentsolutions.mx":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kytary.es":[["set-cookie","CookieConsent","0","","reload","1"]],"l2gamers.cl":[["aopw","document.oncontextmenu"],["aopw","document.onkeydown"]],"labiosthetique.com":[["set-cookie","wt-cookie-settings","0"]],"lacasadavantialsole.org":[["set","realCookieBanner","undefined"]],"landurlaub-allgaeu.de":[["set-cookie","Consent","0"]],"lang-ag.com":[["set","realCookieBanner","undefined"]],"lb-consultores.com":[["set","realCookieBanner","undefined"]],"learn.inesdi.com":[["set-cookie","COOKIE_CONSENT_ACCEPTED","true"]],"lemke.de":[["set-cookie","cookies-allowed","00000"]],"leo-pharma.es":[["set-cookie","isCookiePolicySet","false"]],"leo-pharma.pl":[["set-cookie","isCookiePolicySet","false"]],"lesgarconsfaciles.com":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"letsverne.com":[["set-local-storage-item","framerCookiesDismissed","true"]],"libgen.nl":[["nostif","appendMessage"]],"libraries.merton.gov.uk":[["set-cookie","luci_CC_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","true"],["set-cookie","luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"]],"librospreuniversitariospdf.blogspot.com":[["acs","$","contextmenu"],["acs","document.onselectstart"],["acs","onload"],["acs","document.onkeydown"],["aopr","checkDevTools"]],"lifespan.io":[["set-cookie","pum-128427","true"]],"ligowiec.net":[["ra","oncontextmenu"]],"likey.me":[["aeld","/contextmenu|keydown/","preventDefault"]],"limehd.tv":[["set-cookie","cookieIsAgree","true"]],"linzerbier.at":[["set","realCookieBanner","undefined"]],"liquorstaronline.co.nz":[["set-cookie","isAnAdult","true"]],"live.b-c-e.us":[["aopr","alert"]],"livescience.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"liveyourmaths.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"locandazita.com":[["set","realCookieBanner","undefined"]],"loja.paulus.com.br":[["set-cookie","lgpd-paulus-accepted-paulusloja","true"],["set-cookie","lgpd-paulus-first-view-paulusloja","true"]],"london-tickets.co.uk":[["set-cookie","consent-state","true"]],"love4u.net":[["ra","oncontextmenu","[oncontextmenu=\"return false;\"]"]],"loverslab.com":[["nano-sib"]],"lubbockonline.com":[["nostif","gnt_mol_oy"]],"luoghidavedere.it":[["aopw","document.oncontextmenu"],["acs","document.onselectstart"]],"mainframestechhelp.com":[["aopr","document.oncontextmenu"]],"malermeister-shop.de":[["set-cookie","cookie-preference","1"]],"mall.cz":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"mangainn.net":[["aopr","googletag"]],"mangareader.to":[["aeld","contextmenu","_0x"]],"mangatoon.org":[["acs","document.oncontextmenu"]],"marieclaire.com":[["set-cookie","FTR_Article_PageView","2"]],"marksandspencer.com":[["aeld","contextmenu"]],"masrawy.com":[["acs","document.getElementById","adblockerdetected"]],"massaschadeconsument.nl":[["set-local-storage-item","analyticsNoticeDismissedSet","true"]],"matrei-osttirol.gv.at":[["set-cookie","ris_cookie_setting","1"]],"mattighofen.at":[["set-cookie","ris_cookie_setting","1"]],"mbhszepkartya.hu":[["set-cookie","cookieBasic","true"]],"medical.edu.mt":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"medievalists.net":[["aopr","googletag"]],"medit.com":[["set","realCookieBanner","undefined"]],"megapixl.com":[["nostif",".modal","1000"]],"memoryhackers.org":[["acs","RegExp","googlebot"]],"mesanalyses.fr":[["set-cookie","MANA_CONSENT","true"]],"metamask.io":[["set-local-storage-item","privacyModalSeen","true"]],"meteovesti.ru":[["set-cookie","cookie_policy_notice_closed","1"]],"mifcom.com.br":[["set-cookie","cookie_accepted","1","","reload","1"],["set-cookie","cookie_closed","1"]],"mifcom.it":[["set-cookie","cookie_accepted","1","","reload","1"],["set-cookie","cookie_closed","1"]],"mio.to":[["aeld","contextmenu"]],"mkup.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"moemax.bg":[["set-cookie","amcookie_allowed","1"]],"montecwear.com":[["set-local-storage-item","cookieBannerShown","true"]],"motoblouz.ru":[["set-cookie","accept_cookies_rgpd","1","","reload","1"]],"movies4us.de":[["set-local-storage-item","cookiePolicy","true"]],"moviesapi.club":[["set","devtoolsDetector.launch","noopFunc"]],"moviesjoy.com.br":[["set-cookie","show_share","true"]],"moviesjoy.de":[["set-cookie","show_share","true"]],"movy.sx":[["aeld","contextmenu"]],"mpnnow.com":[["nostif","gnt_mol_oy"]],"music.youtube.com":[["json-prune","playerResponse.messages.[].youThereRenderer messages.[].youThereRenderer"],["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"]],"mx.com":[["set-cookie","hide-cookie-banner","1"]],"myc-media.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"myloview.co.uk":[["set-cookie","cookieConsent","necessary","","reload","1"]],"myriad.social":[["set-cookie","cookie-consent","true"]],"myscience.org":[["set-cookie","analytics_consent","yes"]],"mythicalgames.com":[["set-cookie","cookie-preferences-mythical","1"]],"nachbelichtet.com":[["set","realCookieBanner","undefined"]],"nahima.be":[["rc","cookieconsent-active","body","stay"]],"nakedcapitalism.com":[["aopw","ABD"]],"naplesnews.com":[["nostif","gnt_mol_oy"]],"nbc4i.com":[["aeld","scroll"]],"near.ai":[["set-local-storage-item","cookies-preference","1"]],"neliosoftware.com":[["set-cookie","nelioCookiesAccepted","true"]],"newatlas.com":[["aopr","__cmpGdprAppliesGlobally"]],"news.ntv.co.jp":[["set","document.oncontextmenu","trueFunc"]],"news18.com":[["acs","serviceworker.register"]],"newsletter.banklesshq.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"newsletter.maartengrootendorst.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"nike.com":[["set-cookie","sq","0"]],"nloto.ru":[["set-local-storage-item","isCookies","1"]],"nmmn.com":[["set","realCookieBanner","undefined"]],"nurgutes.de":[["set-cookie","cookieDeclined","1"]],"nzherald.co.nz":[["set-cookie","apv","false"]],"octopus.energy":[["set-cookie","dismissCookiePreferencesMessage","1"]],"octopusenergy.co.jp":[["set-local-storage-item","dismissedPrivacyCookieMessage","1"]],"oesterreichsenergie.at":[["set-cookie","oeCookiePolicyState","0"]],"ojogos.com.br":[["set-cookie","OptanonAlertBoxClosed","true"]],"olx.com.br":[["set-local-storage-item","open_modal_update_policy","1"]],"olx.uz":[["set-cookie","cookieBarSeen","true"]],"omviajesyrelatos.com":[["set-cookie","cmplz_banner-status","dismissed"]],"online.ch":[["set","realCookieBanner","undefined"]],"onlinefreecourse.net":[["aeld","","mdp"]],"ontools.net":[["acs","document.oncontextmenu"]],"opendoors.fi":[["set-cookie","cmplz_banner-status","dismissed"],["set-cookie","cmplz_marketing","allow"],["set-cookie","cmplz_preferences","allow"]],"openfinanza.it":[["acs","document.oncontextmenu"],["acs","document.ondragstart"],["aopw","disableEnterKey"]],"oploverz.es":[["rmnt","script","contextmenu"],["rmnt","style","user-select"],["aopw","check"]],"oploverz.fr":[["rmnt","script","contextmenu"],["rmnt","style","user-select"],["aopw","check"]],"otpportalok.hu":[["rc","body","no_scroll","complete"]],"otvfoco.com.br":[["aopr","addLink"]],"ovation.ca":[["set-cookie","ovation.v20231006.essentials","1"],["set-cookie","ovation.v20231006.essentials","1","","reload","1"]],"p2p.land":[["set-local-storage-item","cookiesAccepted","true"]],"paintcare.org":[["set-cookie","aca_terms_accepted","1"]],"palemoon.org":[["set","abd","false"]],"parkenflughafen.de":[["set-cookie","consentIsSetByUser","true","","reload","1"]],"parrotsec.org":[["set-local-storage-item","cookieConsent","true"]],"pbexpressliquor.com":[["set-cookie","age-checked","1"]],"pccomponentes.com":[["set-cookie","accept_cookie","1"]],"pccomponentes.fr":[["set-cookie","accept_cookie","1"]],"pedalcommander.es":[["set-local-storage-item","COOKIE_BANNER_CLICKED","true"]],"pedalcommander.nl":[["set-local-storage-item","COOKIE_BANNER_CLICKED","true"]],"peekme.cc":[["aeld","selectstart"]],"pelispedia.com":[["aopw","document.oncontextmenu"],["ra","oncontextmenu"]],"penn-elcom.com":[["set-cookie","amcookie_allowed","1"]],"penta.cz":[["set-cookie","I6COMPARECOUNT","0"],["set-cookie","I6IISCOOKIECONSENT0","n","","reload","1"]],"perlentaucher.de":[["set","window.SteadyWidgetSettings.adblockActive","false"],["set","adblockerIsEnabled","false"]],"pickyou.ru":[["set-cookie","is_gdpr","1"]],"piecesauto24.lu":[["aeld","mousedown","function(t)"]],"pinterest.de":[["set-local-storage-item","DWEB_PIN_IMAGE_CLICK_COUNT","$remove$"],["set-local-storage-item","unauthDownloadCount","$remove$"]],"pitesti24.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"pizzeria-algusto.de":[["set","realCookieBanner","undefined"]],"platforma.eb2b.com.pl":[["set-cookie","cookiesAccepted","1","reload","1"]],"playmogo.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"pling.com":[["rmnt","script","btnHtml"],["nano-stb","count"]],"plock.pl":[["set-cookie","cookieconsent_status","dismiss","","reload","1"],["set-cookie","rodo","1","","reload","1"]],"ploughandharrowaldridge.co.uk":[["set-cookie","ce-cookie","N"]],"pobre.co.uk":[["aeld","","blockFuckingEverything"],["aeld","contextmenu","preventDefault"],["aost","eval","build.js"]],"polymtl.ca":[["set-cookie","cookie-agreed","2"]],"pomelo.la":[["set-cookie","POMELO_COOKIES","1"]],"pompo.cz":[["set-cookie","cookie-bar","0"]],"pornhub.co.uk":[["rc","hasAdAlert","header"]],"posterstore.at":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.ie":[["set-cookie","synapse-cookie-preferences-set","true"]],"press.princeton.edu":[["set-cookie","cookie-agreed","0"],["set-cookie","block-popuproadblock","true"]],"proabschluss-beratung.de":[["rc","dp--cookie-consent","body","stay"]],"protan-elmark.com":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","rodopolicy","true"]],"protos.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-non-necessary","no"]],"providencejournal.com":[["nostif","gnt_mol_oy"]],"puromarketing.com":[["set-cookie","cookiergpdjnz","1"]],"purspot.com":[["set-cookie","cookieConsent","true"]],"pushsquare.com":[["aopr","_sp_._networkListenerData"]],"putlocker.net":[["aopw","document.oncontextmenu"]],"puzzle-skyscrapers.com":[["rmnt","script","ab927c49cf1b"]],"pvcbuis.com":[["set-cookie","cookiebar","1"]],"rabbitstream.net":[["set","devtoolsDetector.launch","noopFunc"]],"radyofenomen.com":[["set-cookie","isSiteCookieReviewed","0","","reload","1"]],"railf.jp":[["ra","oncontextmenu|oncopy"]],"railwebcams.net":[["set","realCookieBanner","undefined"]],"readcomiconline.li":[["rmnt","script","checkAdsBlocked"]],"realestatebusiness.com.au":[["set-local-storage-item","articleGateData","$remove$"]],"reddxxx.com":[["set-local-storage-item","ageConsent","true"]],"researchdata.smu.edu.sg":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"resourcepack.net":[["aopw","clickIE4"],["aopw","disableSelection"]],"roadworksscotland.org":[["set-cookie","cookieConsent","essential"]],"roleplayer.me":[["rmnt","script","__ADB_COOLDOWN__"]],"rolls-roycemotorcars.com":[["set-cookie","cookie-banner-us","rejected"]],"rossoft.co.uk":[["set","realCookieBanner","undefined"]],"rostics.ru":[["set-cookie","set-cookie","cookieAccess","1"]],"rshare.library.torontomu.ca":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"rumble.com":[["set-cookie","premium_popup","1"]],"runmods.com":[["noeval-if","oncontextmenu"]],"running-green.de":[["set","realCookieBanner","undefined"]],"rustv.fun":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["ra","oncontextmenu|onkeydown|onselectstart","body","complete"]],"rutv.pw":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"rvsq.gouv.qc.ca":[["set-cookie","_ck_o","1"]],"saamexe.com":[["set-local-storage-item","acceptedCookies","false"],["set-local-storage-item","viewedCookieBanner","true"]],"sacal.it":[["set-local-storage-item","cookieBanner","true"]],"saleor.io":[["set-cookie","cookieConfirmation","true"]],"salsajeans.com":[["set-cookie","plg_cp","1","","reload","1"]],"samenbank-berlin.de":[["set","realCookieBanner","undefined"]],"sammlershop24.de":[["set-cookie","cookie-preference","1"]],"samsungsds.com":[["set-cookie","cookie_policy_level","\"1\""]],"sand-in-taufers.com":[["set-cookie","ris_cookie_setting","1"]],"sanluisgarbage.com":[["set-local-storage-item","has-seen-ccpa-notice","true"]],"sasa.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"scholpp.com":[["rc","with-featherlight","","stay"]],"scholpp.de":[["rc","with-featherlight","","stay"]],"schoonmaakgroothandelemmen.nl":[["set-cookie","epCookieConsent","0","","reload","1"]],"schraudolf-oberstdorf.de":[["set-cookie","Consent","0"]],"schreiners-it.de":[["set","realCookieBanner","undefined"]],"script-stack.com":[["aeld","","mdp"],["aeld","contextmenu"]],"secrid.com":[["set-cookie","cookies","true"]],"segro.com":[["set-cookie","Segro-necessary-cookies","accepted"]],"seir-sanduk.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seirsanduk.com.br":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"sekaikomik.live":[["acs","document.oncontextmenu"]],"selfstudyanthro.com":[["aopr","disable_copy"],["acs","document.ondragstart"]],"semrush.com":[["set-session-storage-item","sem30_popup_shown","1"]],"sertracen.com.pa":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"sfn.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shelbystar.com":[["nostif","gnt_mol_oy"]],"ship.pirateship.com":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"shop-naturstrom.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"shop.almawin.de":[["set-cookie","cookie-preference","1"],["set-cookie","psd-google-ads-enabled","0"],["set-cookie","psd-gtm-activated","1"],["set-cookie","wishlist-enabled","1"]],"shop.frankbeer.ca":[["set-cookie","age-checked","1"]],"shopforyou47.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"shortform.com":[["aeld","/contextmenu|mousedown/","return\"undefined\""]],"shumilou.com":[["ra","onselectstart"]],"sj-r.com":[["nostif","gnt_mol_oy"]],"skidrowcodex.net":[["aopw","stopPrntScr"],["aeld","contextmenu"]],"smotreshka-tv.es":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smow.co.uk":[["set-cookie","__compliance_cookie_2","111","","reload","1"]],"snocks.com":[["set-cookie","_pandectes_gdpr","1"]],"snowboardel.cz":[["set-cookie","cookie-bar","0"]],"socialcounts.org":[["no-fetch-if","googlesyndication"]],"solarmovie.com":[["nostif","_detectLoop"]],"solarmovie.ru":[["nostif","_detectLoop"]],"spb.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"spearheadbeer.com":[["set-cookie","isAnAdult","true"]],"spectank.jp":[["ra","oncontextmenu|oncopy"]],"spherity.com":[["set","realCookieBanner","undefined"]],"spookshow.net":[["set","adBlockFunction","trueFunc"]],"sportland.com.br":[["set-cookie","amcookie_allowed","4"]],"sportland.de":[["set-cookie","amcookie_allowed","4"]],"sportland.net":[["set-cookie","amcookie_allowed","4"]],"sportland.ru":[["set-cookie","amcookie_allowed","4"]],"sportsstation.id":[["set-cookie","acceptConsent","true"]],"st.johann.at":[["set-cookie","ris_cookie_setting","1"]],"statesmanjournal.com":[["nostif","gnt_mol_oy"]],"steamkeysglobais.com.br":[["set-local-storage-item","lgpd_consent","true"]],"stefke-heilbronn.de":[["set","realCookieBanner","undefined"]],"steptalk.org":[["nostif","()","3000"]],"stgeorgeanddragon.co.uk":[["set-cookie","ce-cookie","N"]],"streamingunity.com.br":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"streamservicehd.click":[["ra","oncontextmenu","body"]],"strinova.com":[["set-local-storage-item","lscache-klbq-bucket-scceptCookie","true"]],"superalink.com":[["set-cookie","cookies_allowed","false"]],"supertipp-online.de":[["set","realCookieBanner","undefined"]],"sussytoons.com":[["nosiif","/devtool|console\\.clear/"],["aeld","keydown","123"],["set","Object.prototype.disableMenu","false"]],"sussytoons.net":[["nosiif","/devtool|console\\.clear/"],["aeld","keydown","123"],["set","Object.prototype.disableMenu","false"]],"sverigesingenjorer.se":[["set-cookie","approvedcookies","no","","reload","1"]],"swatchseries.org":[["set-cookie","show_share","true"]],"sweetslyrics.com":[["aeld","copy","preventDefault"]],"swtimes.com":[["nostif","gnt_mol_oy"]],"tabonitobrasil.org":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["aeld","keydown","preventDefault"]],"tabonitobrasil.ru":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["aeld","keydown","preventDefault"]],"tailed.ca":[["set-local-storage-item","cookie_consent","false"]],"techjunkie.com":[["aeld","mouseout"]],"techus.website":[["nostif","ai_"]],"tekniikkaosat.fi":[["set-cookie","__consent","1"]],"tekstowo.pl":[["aopw","addLink"]],"telenovelas-turcas.com.es":[["set","console.clear","undefined"],["nostif","_detectLoop"]],"theadvertiser.com":[["nostif","gnt_mol_oy"]],"theadviser.com.au":[["set-local-storage-item","articleGateData","$remove$"]],"theartofnakedwoman.nl":[["aopw","intializemarquee"]],"theartofnakedwoman.ru":[["aopw","intializemarquee"]],"theblaze.com":[["aopw","admrlWpJsonP"]],"thebolditalic.com":[["set-local-storage-item","201805-policy|accepted","1"]],"theclimatebrink.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"thedailymeal.com":[["aeld","copy"]],"thefly.com":[["set-cookie","cookie_consent","1"]],"themebanks.com":[["aeld","","mdp"]],"themeparktourist.com":[["nosiif","visibility","1000"]],"thenews-messenger.com":[["nostif","gnt_mol_oy"]],"thepensionsregulator.gov.uk":[["set-cookie","TPR_Cookie_CONSENT","Reject"]],"therailwayblackheath.co.uk":[["set-cookie","ce-cookie","N"]],"theregister.co.uk":[["aopr","adtoniq"]],"thesalisburyarmsedinburgh.co.uk":[["set-cookie","ce-cookie","N"]],"thespaniardshampstead.co.uk":[["set-cookie","ce-cookie","N"]],"thetravel.com":[["remove-cookie","articlesRead"]],"thewhitehartse19.co.uk":[["set-cookie","ce-cookie","N"]],"thinkamericana.com":[["nosiif","offsetHeight"]],"throttleman.com":[["set-cookie","c_aceitaAnaliticos","false"],["set-cookie","c_aceitaFuncionais","false"],["set-cookie","c_aceitaNecessarios","true"],["set-cookie","c_aceitaPublicitarios","false"]],"timesofindia.indiatimes.com":[["aeld","/^(mouseout|mouseleave)$/"]],"tme.eu":[["set-local-storage-item","necessary_cookie_confirmed","true"]],"togetogebox.org":[["rmnt","style","-ms-user-select: none"]],"tolyatty.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"tomsguide.com":[["aopr","_sp_._networkListenerData"],["set-cookie","FTR_Article_PageView","2"]],"tourismus-uckermark.de":[["set","realCookieBanner","undefined"]],"touristik.at":[["set-cookie","cookieconsent_status","allow"]],"toyotabank.pl":[["set-cookie","cookies","1000"]],"trade.bisonapp.com":[["set-cookie","cookiesConsent","reject"]],"tridge.com":[["set-cookie","cookieBannerHidden","true"]],"trojmiasto.pl":[["aopr","adBlockDetected"]],"tui.dk":[["rc","no-scroll","body","stay"]],"tullingecupen.se":[["set-cookie","cookie_consent","false"]],"tumblr.com":[["nostif","Premium"]],"turvakilvet.fi":[["set-cookie","GBaseConsent","0"],["set-cookie","GBaseConsentToAnalytics","0"]],"tuttoautoricambi.it":[["aeld","mousedown","function(t)"]],"tv11.ruvideo.site":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvhay.co.uk":[["rmnt","script","wccp_pro"]],"tvhay.fr":[["rmnt","script","wccp_pro"]],"tvhay.net":[["rmnt","script","wccp_pro"]],"tvhay.nl":[["rmnt","script","wccp_pro"]],"tvin.su":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvron.co.uk":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvron.pl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvtechnology.com":[["set-cookie","FTR_Article_PageView","2"]],"tvzingvn.net":[["acs","onload","contextmenu"]],"twitchemotes.com":[["aeld","contextmenu"]],"typeform.com":[["set-local-storage-item","CustomCookieBannerAcceptIntent","true"]],"ubereats.com":[["set-cookie","uev2.gg","true"]],"umk.co.jp":[["ra","oncontextmenu","body"]],"underconsideration.com":[["nostif","test.remove"]],"unikampus.net":[["aopr","document.oncontextmenu"]],"vadhander.kramfors.se":[["set","settings.consent","true"]],"valostore.no":[["set-local-storage-item","cookieConsent","necessary"]],"vanbeekbedden.nl":[["set-cookie","consent-cookies","1"]],"velicu.eu":[["acs","document.oncontextmenu"]],"venusarchives.com":[["acs","jQuery","ai_adb"]],"viafarmaciaonline.it":[["aopr","document.oncontextmenu"]],"vid2faf.site":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"vidara.com":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidara.com.br":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidembed.me":[["set","console.clear","undefined"]],"videovard.it":[["set","console.clear","undefined"]],"videovard.nl":[["set","console.clear","undefined"]],"videovard.ru":[["set","console.clear","undefined"]],"vidsrc.fr":[["acs","RegExp.prototype.toString",".join(\"\")"],["aeld","keydown","123"],["nosiif","devtool"],["set","console.clear","trueFunc"],["set","DisableDevtool","noopFunc"],["set","devtoolsDetector.launch","noopFunc"]],"vidsrc.org":[["acs","RegExp.prototype.toString",".join(\"\")"],["aeld","keydown","123"],["nosiif","devtool"],["set","console.clear","trueFunc"],["set","DisableDevtool","noopFunc"],["set","devtoolsDetector.launch","noopFunc"]],"viewing.nyc":[["no-fetch-if","googlesyndication"]],"vinaurl.com":[["ra","onkeydown"]],"vivoil.com":[["set","realCookieBanner","undefined"]],"vladivostok1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"vnexpress.net":[["set","adblock","2"]],"voe-unblock.org":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voe-unblock.pl":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voeun-block.net":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voeunbl0ck.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voeunblock3.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voirfilms.nl":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"voxweb.nl":[["set-cookie","cookie_settings","1"]],"vyos.io":[["set-cookie","VyosCookies","Accepted"]],"wales.nhs.attendanywhere.com":[["set-local-storage-item","cookieBanner","false"]],"warrenjames.co.uk":[["set-cookie","GDPR.CONSENT.ANALYTICS","false"],["set-cookie","GDPR.CONSENT.MARKETING","false"],["set-cookie","GDPR.CONSENT.NECESSARY","true"],["set-cookie","GDPR.CONSENT.STATUS","true","","reload","1"]],"warringtonguardian.co.uk":[["aopw","_sp_"]],"warungkomik.com":[["rmnt","script","preventDefault"]],"wasza-farma.pl":[["ra","oncontextmenu"]],"watch.co.uk":[["set-local-storage-item","cookieConsentV2","1"]],"watchx.top":[["rmnt","script","devtoolsDetector"],["set","devtoolsDetector","{}"]],"wausaudailyherald.com":[["nostif","gnt_mol_oy"]],"webcamtaxi.com":[["nostif","blocker"]],"weekend.ee":[["set-cookie","amcookie_allowed","1"]],"wentronic.it":[["set-cookie","COOKIES_ACCEPTED_new_1","essential","","reload","1"]],"werkenbijtrekpleister.nl":[["rc","is-active-cookiebar","","stay"]],"wetu.com":[["rc","with-featherlight","","stay"]],"willow.arlen.icu":[["nosiif","e","1000"],["aopr","document.onkeydown"]],"wipptal.org":[["set-cookie","ris_cookie_setting","1"]],"wishflix.cc":[["nostif","(!0)","8000"]],"wlo-cricstreamiing.pages.dev":[["set","confirm","noopFunc"]],"wohlleben-sports.de":[["set-cookie","cookie-preference","1"]],"wolfgangallgaeuer.com":[["set","realCookieBanner","undefined"]],"women.com":[["aeld","copy"]],"worldpressphoto.org":[["set-cookie","CMSCookieLevel","0","","reload","1"]],"wp-loft.de":[["set","realCookieBanner","undefined"]],"wpb.shueisha.co.jp":[["aeld","contextmenu","preventDefault"]],"wrosinski.pl":[["aeld","rocket-DOMContentLoaded","bind(document)"]],"wstream.com.br":[["aeld","contextmenu","preventDefault"],["aopr","onload"]],"wstream.org":[["aeld","contextmenu","preventDefault"],["aopr","onload"]],"wunderpen.com":[["set","realCookieBanner","undefined"]],"www.macysgoldenconfetti.com":[["set-cookie","viewedCookieDisclaimer","true"]],"x-news.pl":[["aeld","contextmenu","a"]],"xclient.info":[["set","killads","true"]],"xhamster1.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster12.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster12.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster13.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster14.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster14.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster14.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster15.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster15.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster16.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster17.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster17.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster17.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster18.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster19.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster20.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster20.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster3.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster3.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster4.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster4.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster4.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster42.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster46.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster46.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster46.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster8.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhmoon5.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"yesstyle.com":[["set-cookie","yshccmfg","true","","reload","1"]],"ylojarvenuutiset.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"ymovies.vip":[["set","devtoolsDetector.launch","noopFunc"]],"yoyofilmeys.es":[["acs","document.oncontextmenu"]],"yoyofilmeys.org":[["acs","document.oncontextmenu"]],"zahnputzladen.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"zap.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"zappatos.it":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zaunbau-koch.de":[["set","realCookieBanner","undefined"]],"zeteo.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"zimmerwetter.de":[["set","realCookieBanner","undefined"]],"zingtvhd.com":[["acs","onload","contextmenu"]],"zingtvhd.com.br":[["acs","onload","contextmenu"]],"zipfer.at":[["set","realCookieBanner","undefined"]],"zsti.zsti.civ.pl":[["aeld","contextmenu","preventDefault"]],"zurueckzumursprung.at":[["set-cookie","cookiesClosed","1"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
