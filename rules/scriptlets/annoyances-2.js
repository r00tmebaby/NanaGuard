/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"0815.at":[["set-cookie","cookie-preference","1"]],"1a-sehen.de":[["set-cookie","cc-item-google","false"]],"24hessen.de":[["set","realCookieBanner","undefined"]],"2da.nl":[["set-cookie","consent-cookies","1"]],"4kfilme.de":[["rmnt","script","realCookieBanner"],["set","realCookieBanner","undefined"]],"4media.com":[["aeld","contextmenu"]],"5asec.pt":[["rc","no-scroll","body","stay"]],"ac-grimmen.de":[["set","realCookieBanner","undefined"]],"acb.com":[["set-cookie","consent__marketing","false"],["set-cookie","consent__necessary","false"],["set-cookie","consent__preferences","false"],["set-cookie","consent__statistics","false"]],"actrento.com":[["set","realCookieBanner","undefined"]],"adef-emploi.fr":[["set-local-storage-item","analytics_gdpr_accept","yes"],["set-local-storage-item","youtube_gdpr_accept","yes"]],"adevarul.ro":[["aopr","addLink"]],"adidas.ch":[["set-cookie","notice_preferences","2"]],"adidas.co.kr":[["set-cookie","notice_preferences","2"]],"adidas.com":[["set-cookie","notice_preferences","2"]],"adidas.pe":[["set-cookie","notice_preferences","2"]],"aerolineas.com.ar":[["set-local-storage-item","isCookiesAccepted","true"]],"afropunk.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"agenziavista.it":[["set-cookie","gdpr","1"]],"agilox.net":[["rmnt","script","realCookieBanner"]],"aha-music.com":[["set-local-storage-item","aha_cookie_consent","declined"],["nano-sib","j.value--","1000","0.001"]],"aicesu.cn":[["aopw","document.oncopy"]],"airasia.com":[["set-cookie","gdpr-cookie-notification","closed"]],"airastana.com":[["set-cookie","NADevGDPRCookieConsent_portal_2","1"]],"aireuropa.com":[["set-cookie","AIREUROPA_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"]],"airnewzealand.co.nz":[["set-cookie","airTRFX_cookies","accepted"]],"akasha.org":[["set-local-storage-item","akasha__cookiePolicy","true"]],"akool.com":[["set-cookie","cookie-permission","0","","reload","1"]],"akustik-projekt.at":[["set-cookie","cookie-preference","1"]],"alensat.com":[["aeld","contextmenu","preventDefault"]],"algund.eu":[["set-cookie","ris_cookie_setting","1"]],"allsmo.com":[["set","document.onkeydown","null"]],"alter-meierhof.de":[["set-cookie","analytics","false"],["set-cookie","cookieconsent","true","","reload","1"],["set-cookie","marketing","false"]],"altraeta.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"alttab.net":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"amlesson.ru":[["aopw","disable_keystrokes"],["aopw","disableSelection"]],"ampire.de":[["rc","disable","div","stay"]],"androidcentral.com":[["set-cookie","FTR_Article_PageView","2"]],"androidmakale.com":[["acs","document.oncontextmenu"]],"angelmagazin.de":[["set","realCookieBanner","undefined"]],"animedrive.hu":[["aeld","contextmenu","return\"undefined\""]],"anisearch.de":[["nostif","faq/whitelist"]],"antena3.com":[["aeld","contextmenu"]],"antik-shop.de":[["set","realCookieBanner","undefined"]],"applecinemas.com":[["set-local-storage-item","CookieWarning","true"]],"aprendeinglessila.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"aquis.eu":[["set-cookie","localConsent","false"]],"archiup.com":[["set-local-storage-item","cookiePolicyAccepted","yes"]],"arkenzoo.se":[["set-cookie","mse_consent_necessary","granted","","reload","1"]],"arning-bau.de":[["set-cookie","cookienotification","1"]],"arras.io":[["set","ramp.addUnits","noopFunc"]],"arras.netlify.app":[["set","ramp.addUnits","noopFunc"]],"asfour.ch":[["set","realCookieBanner","undefined"]],"asga.ch":[["set","realCookieBanner","undefined"]],"asia2tv.com":[["aeld","contextmenu"]],"asko.fi":[["set-cookie","rc_given_consent_closed","1"]],"asumanaksoy.com":[["rmnt","script","devtoolsDetector"]],"atman.pl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"aubi-plus.de":[["set-cookie","cm-accepted","true"]],"audi.ca":[["set-cookie","AUDI_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_Functional","0"],["set-cookie","AUDI_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"]],"ausfraukesfeder.de":[["set","realCookieBanner","undefined"]],"auslandsschulwesen.de":[["set-cookie","gsbbanner","closed"]],"auto1.com":[["set-cookie","consent","essential"],["set-cookie","consent_needed","1"]],"autohaus-musberg.de":[["set-cookie","hide-gdpr-bar","true"]],"autophorie.de":[["aopr","disableSelection"]],"az-renovation.fr":[["rc","unreadable-display","","stay"]],"babyshop.com":[["set-cookie","BABY_MARKETING_COOKIES_CONSENTED","false"],["set-cookie","BABY_NECESSARY_COOKIES_CONSENTED","true"],["set-cookie","BABY_PERFORMANCE_COOKIES_CONSENTED","false"]],"badhall.at":[["set-cookie","cookieconsent_status","allow"]],"bafin.de":[["set-cookie","cookiebanner","0"]],"bahnland-bayern.de":[["set-local-storage-item","contao-privacy-center.hidden","1"]],"balsamico.shop":[["set","realCookieBanner","undefined"]],"balticlivecam.com":[["acs","document.getElementById","none"]],"bangbros.com":[["set-cookie","iAgree","1"]],"barandblock.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"base-chat.de":[["set","realCookieBanner","undefined"]],"baseball-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"bassolsenergia.com":[["set-cookie","CookienatorConsent","false"]],"bdb.com.pl":[["ra","oncopy|oncontextmenu|onselectstart|onselect|ondragstart|ondrag|onbeforeprint|onafterprint","body"]],"beefeater.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"beerballer.com":[["set-cookie","cmplz_banner-status","dismissed"]],"belgee.by":[["set-cookie","hide-cookie-message","true"]],"benefitcosmetics.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"benejamrefrigeracion.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"benvenuti.com":[["set-cookie","CakeCookie[cookie_consent]","1"]],"bestjavporn.com":[["acs","document.oncontextmenu"],["set","devtoolsDetector","undefined"]],"beta.character.ai":[["set-local-storage-item","OPTIONAL_COOKIES_ACCEPTED_0","true"],["set-local-storage-item","VISITED_0","true"]],"bettenconcept.com":[["rc","wcc-popup-overflow","body","stay"]],"bibliothek.bahai.de":[["set-cookie","cookiesOk","true"]],"biegnaszczyt.pl":[["set-cookie","cr","true"]],"bigdatauni.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"bilibili.com":[["aeld","selectionchange","quill.emitter"],["aeld","copy"],["aost","player.pause","/stackDepth:(9|10).+https:[./0-9a-z]+\\/video\\.[0-9a-f]+\\.js:1\\d{2}:1.+\\.emit/"]],"bingotingo.com":[["acs","document.oncontextmenu"],["aopw","disableEnterKey"]],"biomeo-environnement.com":[["rc","unreadable-display","","stay"]],"bitburger.com":[["set-cookie","cookies-general","true"]],"bitcoinsuisse.com":[["set-cookie","btcs-cookie-category-essentials","1"],["set-cookie","btcs-disclaimer","1"],["set-cookie","btcs-initial-redirect-done","1"]],"bjootify.com":[["set-cookie","CookieConsentStatus","Allow"]],"bka.de":[["set-cookie","gsbbanner","0"]],"blablacar.com.br":[["set-cookie","_cookies_v2","1"]],"blog.ipc-computer.de":[["set","realCookieBanner","undefined"]],"blog.naver.com":[["aeld","/contextmenu|selectstart|copy/"]],"bluesnews.com":[["nostif","nn_mpu1","5000"]],"bmleh.de":[["set-cookie","gsbbanner","0"]],"bomagasinet.dk":[["rc","show--consent","body","stay"]],"bonobono.com":[["ra","oncontextmenu|ondragstart|onselectstart","body"]],"breitachklamm.com":[["set-cookie","Consent","0"]],"brettspiel-angebote.de":[["set-cookie","privacy-shown","true"],["set-cookie","slimstat_optout_tracking","true"]],"brooklyneagle.com":[["acs","document.oncontextmenu","nocontextmenu"]],"bucketpages.com":[["nostif","#advert-tracker","500"]],"bulletindegestion.fr":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"burkle.tech":[["set-cookie","cookieconsent_status","allow"]],"burnesspaull.com":[["set-cookie","ck_pref_all","1"]],"burzaucebnic.sk":[["set","realCookieBanner","undefined"]],"businessclass.com":[["set-cookie","ibe.acceptedCookie","true"],["set-local-storage-item","bcCookieAccepted","true"]],"byggern.no":[["set-cookie","cookies_accepted","yes"]],"bzgeisacktal.it":[["set-cookie","ris_cookie_setting","1"]],"campusbrno.cz":[["set-cookie","cookie-m-analytics","0"],["set-cookie","cookie-m-marketing","0"],["set-cookie","cookie-m-personalization","0"]],"cams.ashemaletube.com":[["set-cookie","are_essential_consents_given","1"],["set-cookie","is_personalized_content_consent_given","1"]],"camspider.com":[["set-local-storage-item","adblockNoticePermaDismiss","true"]],"cathouseonthekings.com":[["acs","document.getElementById",".ab_detected"]],"ccaf.io":[["set-local-storage-item","Analytics:accepted","false"],["set-local-storage-item","GDPR:accepted","true"]],"cdramalove.com":[["acs","document.oncontextmenu"]],"centrooceano.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"certificationexamanswers.890m.com":[["acs","document.oncontextmenu"]],"cesaer.org":[["set-cookie","hideCookieNotification","true","","reload","1"]],"check24.de":[["set-cookie","c24consent","f","","domain",".check24.de","reload","1"]],"chessimprover.com":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aopr","disableSelection"]],"chiashake.eu":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"chillx.top":[["aopr","devtoolsDetector"]],"chocolateemporium.com":[["set-cookie","cookies_popup","yes"]],"chromeindustries.com":[["set-cookie","cookieconsent_status","allow"]],"cineman.pl":[["set-cookie","ARE_FUNCTIONAL_COOKIES_ACCEPTED","true"],["set-cookie","ARE_MARKETING_COOKIES_ACCEPTED","true"],["set-cookie","ARE_REQUIRED_COOKIES_ACCEPTED","true"]],"cinemarkca.com":[["set-cookie","cookiePolicies","true"]],"citibank.pl":[["set-cookie","cookieConsent","1000"]],"city-data.com":[["aopr","addLink"]],"clasohlson.com":[["set-cookie","cookie-notification","ACCEPTED"]],"classic-emaille.de":[["set","realCookieBanner","undefined"]],"clickbank.com":[["set-cookie","cbgwc_cookie_consent","reject"]],"cloud.aeolservice.es":[["set-cookie","doSomethingOnlyOnce","true"]],"cloud.kaspersky.com":[["set-cookie","B2BCloudTracking","Disabled","","","reload","1"]],"cms-wheels.com":[["set-cookie","cmswheels_cookie","no"]],"coffeeapps.ir":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"colourxh.site":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"comicsands.com":[["aopr","__cmpGdprAppliesGlobally"]],"comune.campotures.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.chiusa.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sanleonardoinpassiria.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sanmartinoinpassiria.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sarentino.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comunitacomprensorialevallepusteria.it":[["set-cookie","ris_cookie_setting","1"]],"consumidor.gov.pt":[["set-cookie","WarningsAndPolicyAccepted","true"]],"correosexpress.pt":[["set-cookie","msg_cookie_CEX","true"]],"cosasdesalud.es":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"cosmote.gr":[["set-cookie","cookie_consent_set","1"]],"cote.co.uk":[["set-cookie","cookie_consent","false"]],"courierpostonline.com":[["nostif","gnt_mol_oy"]],"criticalsoftware.com":[["set-local-storage-item","c15t","1"]],"croisieresendirect.com":[["set-cookie","accepted","1"]],"crosig.hr":[["set-cookie","cookie_control_consent","true"],["set-cookie","cookie_control_enabled_cookies","required"]],"cuba-buddy.de":[["set-local-storage-item","cb-accept-cookie","true"]],"customsclearance.net":[["set-cookie","analytic_cookies","0"],["set-cookie","functional_cookies","0"],["set-cookie","necessary_cookies","1"]],"cyberfolks.ro":[["set-cookie","CF_GDPR_COOKIE_CONSENT_VIEWED","1"]],"cyberspace.world":[["aopr","document.onselectstart"]],"cyclingnews.com":[["set-cookie","FTR_Article_PageView","2"]],"cyclingweekly.com":[["set-cookie","FTR_Article_PageView","2"]],"czapek.com":[["set-cookie","website_cookies_bar","true"]],"d0000d.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dach-bau.info":[["set-cookie","Consent","0"]],"daily-tohoku.news":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"damasko-watches.com":[["set-cookie","cookie-preference","1"]],"danielederosa.de":[["set","realCookieBanner","undefined"]],"data.lib.vt.edu":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"datakauppa.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"dddance.party":[["aeld","contextmenu"]],"debijenkorf.nl":[["set-cookie","dbk_cookie_acceptance","declined"]],"deccanherald.com":[["aopr","document.oncopy"]],"deep-shine.de":[["set-cookie","cookie-preference","1"]],"dehemspub.co.uk":[["set-cookie","ce-cookie","N"]],"deniswilliams.ie":[["rc","wcc-popup-overflow","body","stay"]],"deps.dev":[["set-cookie","cookie_policy_acknowledgement","true"]],"derma-line.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"descargatepelis.com":[["aeld","/keydown|mousedown/"],["set","document.oncontextmenu","trueFunc"]],"deutsche-finanzagentur.de":[["set-cookie","disclaimer-overlay","true"]],"dicionariocriativo.com.br":[["aopr","getSelection"]],"diffchecker.com":[["nostif","adStillHere"]],"digibest.pt":[["set-cookie","digibestCookieInfo","true"]],"digionline.ro":[["set-cookie","cmp_level","15"]],"digital.lasegunda.com":[["aeld","contextmenu"]],"digitalfernsehen.de":[["aeld","contextmenu"]],"digitalparking.city":[["set-local-storage-item","cookies-accepted","true"]],"ditchthelabel.org":[["set-cookie","localConsent","true"]],"diy-academy.eu":[["set-cookie","cookieconsent_status","allow"]],"docs.yagpdb.xyz":[["set-cookie","__gitbook_cookie_granted","no"]],"doga.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"dominospizza.pl":[["set-cookie","dominos_cookies_accepted","1"]],"doply.net":[["set","console.clear","undefined"],["aeld","contextmenu"]],"download.ipeenk.com":[["acs","document.oncontextmenu"]],"dpp.cz":[["set-cookie","consent_analytics_storage","denied"],["set-cookie","consent_is_cleared_20230908","true"],["set-cookie","consent_is_set","true"]],"ds2video.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dualshockers.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"dunkinextras.com":[["set-cookie","viewedCookieDisclaimer","true"]],"duty.travel.cl":[["set-local-storage-item","cookies-consent-accepted","true"]],"dvx.pe":[["set-local-storage-item","isCookiesAcceptedDVX","1"],["set-local-storage-item","isCookiesAcceptedNRTN","DENIED"]],"dww-suchtberatung.de":[["rc","dp--cookie-consent","body","stay"]],"e-food.gr":[["set-cookie","accepted_cookies","true","","reload","1"],["set-cookie","cookie_privacy_level","required"]],"e-panigiria.gr":[["rmnt","script","oncontextmenu"]],"eda.ru":[["set-cookie","CookiesAccept","accept"]],"eduardo-monica.com":[["acs","document.oncontextmenu"]],"eett.gr":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"efortuna.ro":[["set-cookie","cookie_layer","1"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"elconfidencial.com":[["set","Didomi","noopFunc"]],"electroprecio.com":[["set-cookie","consent","1"]],"elizabeth-mitchell.org":[["acs","document.oncontextmenu"],["aopr","disableSelection"],["acs","addEventListener","ctrlKey"]],"emag.berliner-woche.de":[["set-local-storage-item","consentManager_shown","true"],["set-local-storage-item","consent_necessary","true"],["set-local-storage-item","consent_performance","false"]],"emmi-luzerner.ch":[["set-cookie","luzerner-che-cookie-categories","essential"]],"emmi.com":[["set-cookie","aktifit-che-cookie-categories","essential"]],"empik.com":[["set-cookie","cvc","true"]],"endorfinese.com.br":[["nostif","google_jobrunner"]],"enesco.co.uk":[["set-cookie","acceptCookieCookie","true"],["set-cookie","enableNonEssentialCookies","false"]],"englishradar.com":[["set","realCookieBanner","undefined"]],"enterprisenews.com":[["nostif","gnt_mol_oy"]],"epilog.net":[["set-cookie","cookie_gdpr","true","","reload","1"]],"erlebnispark-ziegenhagen.de":[["set","realCookieBanner","undefined"]],"essence.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"eurogamer.es":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"evernote.com":[["set-local-storage-item","accepts-cookie-notice","true"],["set-local-storage-item","cookie-notice-dismissed","true"]],"evivanlanschot.nl":[["set-cookie","acceptCookies","0"]],"falabella.com":[["set-cookie","isCookieLegalBannerSelected","true"]],"fantasyfootballgeek.co.uk":[["set-cookie","cmplz_banner-status","dismissed"]],"faroshopping.it":[["set-cookie","tincx_cookie_notice_accepted","true"]],"fayobserver.com":[["nostif","gnt_mol_oy"]],"fewo-heides-haus.de":[["set-cookie","Consent","0"]],"figshare.unimelb.edu.au":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"figurepos.com":[["set-cookie","%22generic-cookie-agreement%22","true"]],"findmcserver.com":[["set-local-storage-item","allowCookies","allowed"]],"fixtout.fr":[["set-cookie","cookielaw_module","1","","reload","1"]],"fletcher.nl":[["set-cookie","acceptCookies","true"]],"flexwhere.de":[["set-cookie","CookieConsent","true"],["set-cookie","gatsby-plugin-google-tagmanager","false"]],"flinders.edu.au":[["set-cookie","gdpr_opted_in","true","","reload","1"]],"flying15.org.uk":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"fontanka.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"fontsfree.pro":[["set","adBlock","false"]],"foodrepublic.com":[["aeld","copy"]],"foodviva.com":[["ra","oncontextmenu|ondragstart|onselectstart"]],"forcetools-kepmar.eu":[["set-cookie","epCookieConsent","0","","reload","1"]],"ford-bischoff-neumuenster.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-geberzahn-koeln.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-mertens-beckum.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-sg-neu-ulm.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-wahl-siegen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-weege-bad-salzuflen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-westhoff-hamm.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.pl":[["set-cookie","cookieAcknowledged","true"]],"ford.pt":[["set-cookie","cookieAcknowledged","true"]],"fordogtrainers.pl":[["acs","message","clickIE"],["acs","preventSelection"]],"fossil.com":[["set-cookie","banner_interaction","1"],["set-cookie","privacy_allow_advertising","0"],["set-cookie","privacy_allow_performance","0"],["set-cookie","privacy_allow_social","0"]],"fosspost.org":[["nostif","an_message","500"]],"francis-bacon.com":[["aeld","contextmenu","return\"undefined\""]],"fraudnavi.com":[["ra","oncontextmenu"]],"frauzuckerbroetchen.com":[["set","realCookieBanner","undefined"]],"freefilesync.org":[["rmnt","script","/adblock/i"]],"freeletics.com":[["set-cookie","cookie_consent","false"]],"frontieresmedia.fr":[["set-cookie","frtnrs_consent","true"]],"fucktube4k.com":[["acs","document.addEventListener","contextmenu"]],"funkypotato.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"fups.com":[["set-cookie","AllowCookies","true"],["set-cookie","SeenCookieBar","true"]],"fuschlamsee.at":[["set-cookie","ris_cookie_setting","1"]],"fv2freegifts.org":[["acs","document.oncontextmenu"]],"fydeos.com":[["set-local-storage-item","is_accept_cookie","true"]],"g-star.com":[["set-cookie","coco","00011"],["set-local-storage-item","cn","true"]],"galaxykayaks.ro":[["set-cookie","cookies_and_content_security_policy","false"]],"galesburg.com":[["nostif","gnt_mol_oy"]],"galleryxh.site":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"gameknot.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"gamenite.de":[["set","realCookieBanner","undefined"]],"games.co.uk":[["set-cookie","OptanonAlertBoxClosed","true"]],"gaming-grounds.de":[["set","realCookieBanner","undefined"]],"gaminplay.com":[["aeld","contextmenu"]],"gats.io":[["ra","oncontextmenu","body"]],"gavelo.com":[["set-cookie","_pandectes_gdpr","1"]],"gdpr.twitter.com":[["set-cookie","twtr_pixel_opt_in","N"]],"gearside.com":[["set","nebula.session.flags.adblock","undefined"]],"gem.cbc.ca":[["set-cookie","gem_cookies_usage_production","1"]],"gem2go.info":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.gais.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.schnals.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.stlorenzen.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.stmartininthurn.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gerberfondue.ch":[["set-cookie","gerber-che-cookie-categories","essential"]],"getective.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"gift.be":[["set-cookie","CP_ESSENTIAL","1"],["set-cookie","CP_PREFERENCES","1"]],"gigasport.ch":[["set-cookie","consentAll","1"]],"globaledu.jp":[["acs","document.oncontextmenu"],["ra","oncontextmenu|onselectstart","body"]],"gmx.net":[["set","document.documentElement.AdBlockDetection","noopFunc"]],"go.bkk.hu":[["set-local-storage-item","cookie_consent","false"]],"gobranded.com":[["set-cookie","BRANDED_COOKIES_CONSENT","DECLINED"]],"gosanangelo.com":[["nostif","gnt_mol_oy"]],"goteborg2023.com":[["set-cookie","necessary_cookies","true"]],"gramatica-alemana.es":[["set-cookie","cookiewarning","1"]],"granado.com.br":[["set-local-storage-item","store-cookie-consent","accepted"]],"graziellawicki.com":[["rc","gdpr-cookie-notice-center-loaded","","stay"]],"greenbaypressgazette.com":[["nostif","gnt_mol_oy"]],"grid.de":[["set","realCookieBanner","undefined"]],"gryphline.com":[["set-cookie","cookieAccepter","1"]],"guess.eu":[["set-cookie","Guess.CookieWallSet","true"],["set-cookie","Guess.CookieWallThirdParties","false"]],"guide-bordeaux-gironde.com":[["set-cookie","cookieConsent-2023-03","false"]],"guides4gamers.com":[["nostif","offsetHeight","100"]],"guitarworld.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"habuteru.com":[["aopw","document.oncontextmenu"]],"hair-body-24.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"hanos.nl":[["set-cookie","CookieConsentChoice","3"]],"happypenguin.altervista.org":[["set-cookie","cookieTechnical","1"],["set-cookie","cookieThirdParty","0"]],"hashop.nl":[["set-cookie","cookie_preference","1"]],"haus-bergbluemle.de":[["set-cookie","Consent","0"]],"hauspanorama.de":[["set","realCookieBanner","undefined"]],"hayatbilgileri.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"headout.com":[["set-cookie","consent-state","true"]],"healthwell.dk":[["set-cookie","cookieaccept","required","","reload","1"]],"heavyfetish.com":[["set","flashvars.autoplay",""]],"heikkala.com":[["rc","wcc-popup-overflow","body","stay"]],"helloatmos.app":[["set-local-storage-item","analytics-consent","denied"]],"hetwkz.nl":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"hochu.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hoechst.at":[["set-cookie","ris_cookie_setting","1"]],"hofer-kerzen.at":[["set-cookie","cookie-preference","1","","reload","1"]],"holzhof24.de":[["set-cookie","cookie-preference","1"]],"hookahx.de":[["set","realCookieBanner","undefined"]],"hot.si":[["set-cookie","cookieconsent","1"],["set-cookie","permission_funktional_cookies","1"],["set-cookie","permission_marketing_cookies","0"],["set-cookie","permission_statistic_cookies","0"]],"hotel-la-chaumiere.com":[["rc","unreadable-display","","stay"]],"hotleak.vip":[["aeld","contextmenu","preventDefault"],["aeld","keydown","123"]],"hundgemacht.net":[["set","realCookieBanner","undefined"]],"huss-licht-ton.de":[["set-cookie","huss_cookie_version","1"]],"hutwiller.de":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_stripe","allow"]],"hyte.com":[["set-cookie","AcceptUseCookie","Accept"]],"ibuypower.com":[["set-cookie","AcceptUseCookie","Accept"]],"ici.tou.tv":[["set-cookie","toutv_cookies_usage_production","1"]],"ideapod.com":[["set","nocontext","noopFunc"],["set","disableSelection","noopFunc"]],"igta5.com":[["set-cookie","cookieAccepted","true"]],"ilmotorsport.de":[["set-cookie","cookieMsg","true","","reload","1"]],"ilovetoplay.xyz":[["rmnt","script","debugger"]],"ilsole24ore.com":[["aeld","mouseleave"]],"imping-confiserie.de":[["set-cookie","cookie-preference","1"]],"ing.it":[["set-cookie","ING_GPP","0"],["set-cookie","ING_GPT","0"]],"inicionet.com":[["set","realCookieBanner","undefined"]],"injectjs.net":[["set-local-storage-item","injectjs-consent","denied"]],"institut-bio-naturel-nice.fr":[["rc","unreadable-display","","stay"]],"insurance-corporate.blogspot.com":[["ra","oncontextmenu|ondragstart|onkeydown|onmousedown|onselectstart"]],"internetpasoapaso.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"interviewgig.com":[["acs","document.onselectstart"]],"inverto.tv":[["set-local-storage-item","gdpr","0"]],"ipouritinc.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"]],"irr.singaporetech.edu.sg":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"istdasvegan.eu":[["set","realCookieBanner","undefined"]],"istore.co.za":[["set-cookie","user_allowed_save_cookie","1"]],"itvn.pl":[["aeld","contextmenu","a"]],"j-lyric.net":[["ra","oncontextmenu|onselectstart","body[oncontextmenu]","complete"]],"javbix.com":[["acs","$","contextmenu"]],"jbf.no":[["set-cookie","eika_consent_marketing","false"],["set-cookie","eika_consent_set","true"]],"jimdosite.com":[["set-local-storage-item","cookies-selected","true"]],"jmonline.com.br":[["set-local-storage-item","cookie-consent","true"]],"jn.fo":[["set-cookie","analyticsStatus","false"],["set-cookie","socialMediaStatus","false"]],"jobtoday.com":[["set-cookie","jt-jobseeker-gdpr-banner","true","","reload","1"]],"journalstandard.com":[["nostif","gnt_mol_oy"]],"juntadeandalucia.es":[["set-cookie","show_msg_cookies","false"]],"justanswer.de":[["set-cookie","cbChecked","true"]],"kaiser-mania.de":[["set","realCookieBanner","undefined"]],"kangasalansanomat.fi":[["set-cookie","kscookies","true"]],"karriere.austrocontrol.at":[["set-cookie","eRecruiterCookieConsent","false","","reload","1"]],"karyawanesia.com":[["aopr","document.oncontextmenu"]],"kashinavi.com":[["ra","oncopy|onSelectStart|oncontextmenu|style","[oncopy],[oncontextmenu]"]],"kastner-oehler.de":[["set-cookie","consentAll","0"]],"kaup24.ee":[["set-cookie","CA_DT_V2","0","","reload","1"],["set-cookie","CA_DT_V3","0"]],"khebikes.com":[["set-cookie","cookie-preference","1"]],"kirkkojakaupunki.fi":[["set-cookie","cookieControlPrefs","essential"]],"kivikangas.fi":[["set-cookie","cookies-required","1","","reload","1"]],"klausen.eu":[["set-cookie","ris_cookie_setting","1"]],"klosterneuburg.at":[["set-cookie","ris_cookie_setting","1"]],"knshow.com":[["aopr","document.oncontextmenu"],["aeld","/^(?:contextmenu|copy|selectstart)$/"]],"konsument.at":[["set-cookie","vkicookieconsent","0"]],"kooora4lives.net":[["acs","document.oncontextmenu"]],"kornau.de":[["set-cookie","Consent","0"]],"krefindo.de":[["set","realCookieBanner","undefined"]],"ktm2day.com":[["acs","document.oncontextmenu"]],"kyoceradocumentsolutions.eu":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"lamparasherrero.com":[["set-cookie","promptCookies","1"]],"landhaus-thaumiller.de":[["set-cookie","Consent","0"]],"lanew.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"launchreliantcleaverriver.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"lazyadmin.nl":[["nostif","AdBlocker"],["set","admiral","noopFunc"]],"lbms.cz":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"leakedzone.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","keyCode"],["set","Object.prototype._detectLoop","noopFunc"]],"leeway.tech":[["set-local-storage-item","lw-accepts-cookies","true"]],"leman-instruments.com":[["rc","unreadable-display","","stay"]],"lenox-trading.at":[["set-cookie","cookie-preference","1"]],"lesgarconsfaciles.com":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"lesoir.be":[["aopr","abStyle"]],"lexlog.pl":[["aopr","document.oncontextmenu"],["aopr","document.onmousedown"],["aopr","document.onselectstart"]],"lightcon.com":[["set","realCookieBanner","undefined"]],"limametti.com":[["acs","document.oncontextmenu"]],"litteravera.pl":[["set-local-storage-item","show_consent_modal","1"]],"lohud.com":[["nostif","gnt_mol_oy"]],"loja.paulus.com.br":[["set-cookie","lgpd-paulus-accepted-paulusloja","true"],["set-cookie","lgpd-paulus-first-view-paulusloja","true"]],"lotusantwerp.wacs.online":[["set-cookie","cookie_consent_user_accepted","true"]],"loudersound.com":[["aopr","_sp_._networkListenerData"],["set-cookie","FTR_Article_PageView","2"]],"loverslab.com":[["nano-sib"]],"lueneburger-heide.de":[["set-cookie","acceptEssential","1"]],"lukify.app":[["set-local-storage-item","_lukCookieAgree","2"]],"luoghidavedere.it":[["aopw","document.oncontextmenu"],["acs","document.onselectstart"]],"lustery.com":[["set-local-storage-item","cookie-consent-banner","declined"]],"lyricstranslate.com":[["set","getSelection","undefined"]],"mall.cz":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"mamm.ch":[["set-cookie","_pandectes_gdpr","1"]],"mandiner.hu":[["rc","modal-open","body","stay"]],"mangalib.me":[["set-local-storage-item","cookies-toast-shown","true"]],"mangalib.org":[["set-local-storage-item","cookies-toast-shown","true"]],"manhwahentai.me":[["acs","document.oncontextmenu"]],"manneskraft-gesteigert.com":[["set","realCookieBanner","undefined"]],"marieclaire.com":[["set-cookie","FTR_Article_PageView","2"]],"marktbaehnle.de":[["set-cookie","Consent","0"]],"masrawy.com":[["acs","document.getElementById","adblockerdetected"]],"maxroll.gg":[["set","nitroAds.loaded","true"]],"mcdonoughvoice.com":[["nostif","gnt_mol_oy"]],"mcocguideblog.com":[["acs","disableselect","reEnable"]],"mdlinx.com":[["nostif","show"]],"media.framu.world":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["aopw","document.onkeydown"]],"medievalists.net":[["aopr","googletag"]],"medmerabank.se":[["set-cookie","cookieConsent","necessary"]],"medtube.net":[["set-cookie","cookiePolicy","4"]],"megawypas.com":[["ra","oncontextmenu"]],"metamask.io":[["set-local-storage-item","privacyModalSeen","true"]],"metropoliaztm.pl":[["ra","ondrop|ondragstart"]],"metrowestdailynews.com":[["nostif","gnt_mol_oy"]],"miceportal.com":[["set-cookie","requierd_cookies","true"]],"microfocus.com":[["set-cookie","EU_COOKIE_LAW_CONSENT","true"]],"milestone66.hu":[["set","cookie_alert_overlay","noopFunc"]],"mitchatnim.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"mo-tools.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"mojmaxtv.hrvatskitelekom.hr":[["set-local-storage-item","cookieAccepted","true"]],"molineuxmix.co.uk":[["acs","$","undefined"]],"money-sense.club":[["ra","oncontextmenu|onMouseDown|style"]],"moneyguru.co":[["acs","$",".height"]],"mongri.net":[["acs","document.oncontextmenu"],["aopr","getSelection"]],"monitorulneamt.ro":[["set-cookie","pum-172440","true"]],"moonvalleynurseries.com":[["set-cookie","moon-v1-permissions","false"]],"mostrodifirenze.com":[["acs","document.oncontextmenu"]],"motivationstipp.de":[["set","realCookieBanner","undefined"]],"motoclubernee.com":[["rc","unreadable-display","","stay"]],"motofocus.pl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"movetex.com":[["set-cookie","cookieconsent","false"]],"movie4kto.net":[["nosiif","/DevTools|_0x/"]],"moviepl.xyz":[["nostif","devtoolIsOpening","100"]],"moviesapi.club":[["set","devtoolsDetector.launch","noopFunc"]],"musicfeeds.com.au":[["aopr","__cmpGdprAppliesGlobally"],["acs","document.createElement","admiral"]],"musicindustryhowto.com":[["acs","document.oncontextmenu"],["acs","document.ondragstart"],["acs","document.addEventListener"]],"mustijamirri.fi":[["set-cookie","mfi_consent_necessary","granted","","reload","1"]],"my-account.storage-mart.com":[["set-local-storage-item","StorageMartCookiesPolicySeen","true"]],"myc-media.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"mythicalgames.com":[["set-cookie","cookie-preferences-mythical","1"]],"mzk.starachowice.eu":[["aopw","adBlockDetected"]],"naaree.com":[["aopw","disableEnterKey"],["ra","style","body[style=\"user-select: none;\"]","stay"],["set","document.oncontextmenu","null"],["set","document.onkeydown","null"]],"napiszar.com":[["acs","document.createElement","setTimeout"]],"nationalexpress.de":[["set-local-storage-item","contao-privacy-center.hidden","1"]],"naver.com":[["aeld","/contextmenu|selectstart|dragstart/"]],"newbernsj.com":[["nostif","gnt_mol_oy"]],"newpharma.fr":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"newweb.renoirpuzzle.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"nhentaihaven.org":[["acs","eval","contextmenu"]],"nichepcgamer.com":[["rc","dragscroll"]],"niko.eu":[["set-cookie","Niko-NikoEu#Consent","true","","reload","1"],["set-cookie","Niko-NikoEu#Functional","true"]],"nio.com":[["set-cookie","npp_analytical","0"]],"nisoro.com":[["set-cookie","allowGetPrivacyInfo","true"]],"nordkorea-info.de":[["set","document.oncontextmenu","null"],["aeld","/dragstart|keyup|keydown/"]],"norwayshop.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"notdiamond.ai":[["set-cookie","hidePopup","true"]],"novgorod.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"oakbeardcare.com":[["set","realCookieBanner","undefined"]],"oberstdorf.de":[["set-cookie","Consent","0"]],"okto.tv":[["set-cookie","disclaimer-saved","1"]],"omnisets.com":[["no-fetch-if","adsbygoogle"]],"oneal.eu":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"oneskin.co":[["set-local-storage-item","gdpr","deny"]],"onlinetools.com":[["nano-sib","Clipboard","1000","0.001"]],"onnibus.com":[["set-cookie","contentPersonalisationCookies","false"],["set-cookie","functionalCookies","true"],["set-cookie","marketingCookies","false"],["set-cookie","statisticalCookies","false"]],"ontools.net":[["acs","document.oncontextmenu"]],"ontuscia.it":[["set","realCookieBanner","undefined"]],"ontvtime.ru":[["aeld","contextmenu"]],"openbookpublishers.com":[["set-cookie","CookieConsent","true","","reload","1"]],"opencycle.com":[["set-cookie","cookie-preference","1"]],"openforests.com":[["set","realCookieBanner","undefined"]],"opengraph.xyz":[["set-cookie","cookie_consent","rejected"]],"opentip.kaspersky.com":[["set-local-storage-item","areCookiesAccepted","true"]],"orangespotlight.com":[["aeld","/contextmenu|select|copy/"]],"oreilly.com":[["aeld","mouseout","cookie"]],"otakudesu.org":[["acs","document.oncontextmenu"],["acs","window.addEventListener","ctrlKey"]],"otakukan.com":[["acs","document.oncontextmenu"]],"ousuca.com":[["set","realCookieBanner","undefined"]],"outdoorguide.com":[["aeld","copy"]],"overdrive.com":[["set-cookie","od_track","0","","reload","1"]],"ovpay.nl":[["set-cookie","dismissed_cookie_banner_recaptcha","true"]],"oxfamnovib.nl":[["set-cookie","advertisingCookies","Accepted","","reload","1"],["set-cookie","analyticsCookies","Accepted"],["set-cookie","functionalCookies","Accepted"]],"oyunskor.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"pacstall.dev":[["set-cookie","privacy-policy-accepted","1"]],"paintcare.org":[["set-cookie","aca_terms_accepted","1"]],"parrotsec.org":[["set-local-storage-item","cookieConsent","true"]],"pasticceriaquadrifoglio.com":[["set-cookie","pasticceria-quadrifoglio-ita-cookie-categories","essential"]],"pccomponentes.it":[["set-cookie","accept_cookie","1"]],"pcso-lottoresults.com":[["aopr","document.oncontextmenu"]],"penni.no":[["set-cookie","eika_consent_marketing","false"],["set-cookie","eika_consent_set","true"]],"pervyi-tv.online":[["set-cookie","cookieIsAgree","true"]],"pferde-hunde-therapie.de":[["set","realCookieBanner","undefined"]],"pharmahall.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"philips-hue.com":[["set","cockieConsentManagement","noopFunc"]],"photovoltaik-bw.de":[["set-cookie","CookieConsent","mandatory"]],"piklodz.pl":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"piusx-college.nl":[["set-cookie","hideCookieNotification","true","","reload","1"]],"playerx.stream":[["aopr","devtoolsDetector"]],"playmogo.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"ploughandharrowaldridge.co.uk":[["set-cookie","ce-cookie","N"]],"pocketgamer.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"pokemonforever.com":[["set","google_jobrunner","true"]],"polyflore.net":[["nostif","adBlockDetected"]],"portal.by.aok.de":[["set-cookie","cookie-notification","ACCEPTED","","reload","1"]],"portal.payment.eltax.lta.go.jp":[["set-cookie","xn_cookieconsent","false","","reload","1"]],"portea.fr":[["rc","wcc-popup-overflow","body","stay"]],"posterstore.ch":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.com":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.hu":[["set-cookie","synapse-cookie-preferences-set","true"]],"poudouleveis.gr":[["set-cookie","cc_ads","denied"],["set-cookie","cc_analytics","denied"],["set-cookie","cookie_ul","granted"]],"press.princeton.edu":[["set-cookie","cookie-agreed","0"]],"privivkainfo.ru":[["aopw","disable_keystrokes"],["acs","document.oncontextmenu"],["set","disableSelection","noopFunc"],["aeld","copy","pagelink"]],"promobit.com.br":[["aeld","mouseout"]],"psychologiazycia.com":[["acs","document.oncontextmenu"],["acs","disableselect","reEnable"]],"purefiji.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"puzzle-nurikabe.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-pipes.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-star-battle.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-stitches.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-sudoku.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-thermometers.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.co.uk":[["set-cookie","puzzleyou-co-uk_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.pl":[["set-cookie","puzzleyou-pl_cookies_consent_allowlist","0","","reload","1"]],"quicksleeper.pl":[["aopr","document.oncontextmenu"]],"radichubu.jp":[["ra","onContextMenu","body"]],"radio5.com.pl":[["ra","oncontextmenu"]],"railtech.com":[["set-cookie","gdpr","accept"]],"ramotavla.se":[["rc","wcc-popup-overflow","body","stay"]],"rbinternational.com.pl":[["set-local-storage-item","cookie-approvment","1"]],"readnovel.com":[["aeld","contextmenu"],["aopr","LBF.define"]],"recambioscoche.es":[["aeld","mousedown","function(t)"]],"receptagemini.pl":[["set-local-storage-item","consents-analytics","false"]],"refurbished.nl":[["set-cookie","COOKIE_CONSENT","1","","reload","1"],["set-cookie","COOKIE_MARKETING","false"],["set-cookie","COOKIE_STATIC","false"]],"regenwald-schuetzen.org":[["set-cookie","cookie_consent_required","accepted","","reload","1"]],"registerguard.com":[["nostif","gnt_mol_oy"]],"renditepassive.net":[["set","document.oncontextmenu",""],["set","document.onselectstart",""],["set","document.onkeydown",""],["set","document.onmousedown",""],["set","document.onclick",""],["acs","document.ondragstart"],["aopr","onload"]],"reservdelar24.se":[["aeld","mousedown","function(t)"]],"revanced.app":[["set-local-storage-item","analytics","false"]],"revenue.land":[["aopr","nocontext"],["acs","disableEnterKey"]],"revistavanityfair.es":[["aopr","initAdBlockerPanel"]],"rightnonel.com":[["aopr","document.oncontextmenu"],["aopr","document.onmousedown"],["aopr","disableSelection"]],"risal.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"riwyat.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"rockpoint.sk":[["set-cookie","cookie-bar","0"]],"rotlichtaus.de":[["set","realCookieBanner","undefined"]],"royaleapi.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"royalenfield.com":[["set-cookie","cookieConsent","rejected"]],"royalhuisman.com":[["set-cookie","framework_cookies_date","1","","reload","1"]],"rtu.lv":[["set-cookie","uce-cookie","N"]],"rubystm.com":[["aopr","devtoolsDetector"]],"rule34.xxx":[["set-cookie","gdpr","1"],["set-cookie","gdpr-consent","1","","reload","1"]],"rule34hentai.net":[["aeld","contextmenu"]],"russia-tv.online":[["set-cookie","cookieIsAgree","true"]],"ryanair.com":[["set-cookie","RY_COOKIE_CONSENT","true"]],"s.awa.fm":[["aeld","contextmenu","[native code]","elements","#__next"]],"saamexe.com":[["set-local-storage-item","acceptedCookies","false"],["set-local-storage-item","viewedCookieBanner","true"]],"sacal.it":[["set-local-storage-item","cookieBanner","true"]],"safehaven.io":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"saikaiscans.net":[["aeld","contextmenu","[native code]"]],"saintjoursexpertmaritime.com":[["rc","unreadable-display","","stay"]],"salzerkfz.de":[["set","realCookieBanner","undefined"]],"salzstreuner.de":[["set","realCookieBanner","undefined"]],"sam.si":[["set-cookie","gdpr-allow-analytics","false"],["set-cookie","gdpr-allow-marketing","false"],["set-cookie","gdpr_popup_shown","true"]],"samplerite.com":[["set-cookie","consented","false"]],"sandratex.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"sanluisgarbage.com":[["set-local-storage-item","has-seen-ccpa-notice","true"]],"sbbrisk.com":[["acs","check","debugger"],["nosiif","_0x"]],"sberbank.com":[["set-cookie","sber.pers_notice_en","1"],["set-cookie","sbrf.pers_notice1","1"]],"schiffe-und-kreuzfahrten.de":[["set","realCookieBanner","undefined"]],"schreiners-it.de":[["set","realCookieBanner","undefined"]],"scsun-news.com":[["nostif","gnt_mol_oy"]],"sdelatotoplenie.ru":[["acs","document.oncontextmenu"],["acs","document.oncopy"]],"searchforsites.co.uk":[["set-cookie","cookieCompliancyAccepted","1"]],"secrid.com":[["set-cookie","cookies","true"]],"selva.eu":[["set-cookie","ris_cookie_setting","1"]],"sextubespot.com":[["set-cookie","kt_tcookie","1"],["set-cookie","splash_Page_Accepted","true"]],"sgd.de":[["aeld","contextmenu"]],"shelly-shop.at":[["set-cookie","cookie-preference","1"]],"sherdog.com":[["aopr","googletag"]],"shg-kliniken.de":[["set-cookie","CookieConsent","mandatory"]],"shingfangpastry.com":[["set-cookie","allowGetPrivacyInfo","true"]],"shop-apotheke.com":[["set-session-storage-item","sae-conversational-consent-msg-closed","true"]],"shop.bosscat.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shopbuddies.be":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shumilou.com":[["ra","onselectstart"]],"sigma-foto.de":[["set-cookie","cc-answered","true"],["set-cookie","cc-marketing","false"],["set-cookie","cc-needed","true"],["set-cookie","cc-statistics","false"]],"silverboats.fi":[["set-cookie","AVENIS_PRIVACY_LEVEL_ANALYTICS","0"],["set-cookie","AVENIS_PRIVACY_LEVEL_COMMON","1"]],"silvini.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"simkort.se":[["rc","wcc-popup-overflow","body","stay"]],"simpleswap.io":[["set-local-storage-item","cookies-notification-message-is-hidden","true"]],"skanzen.hu":[["set-local-storage-item","skanzen-cookie-consent","false"]],"skihuette-oberbeuren.de":[["set-cookie","NL_COOKIE_KOMFORT","false"],["set-cookie","NL_COOKIE_MEMORY","true","","reload","1"],["set-cookie","NL_COOKIE_STATS","false"]],"skymsen.com":[["set-cookie","purecookieDismiss","1"]],"skyrc.com":[["set-cookie","accept-cookie-20240708","false"]],"slashgear.com":[["aeld","copy"]],"snap.com":[["set-cookie","sc-cookies-accepted","true"]],"snowboardel.cz":[["set-cookie","cookie-bar","0"]],"softlist.com.ua":[["set-cookie","CookieConsent","true"]],"sonofsteak.co.uk":[["set-cookie","ce-cookie","N"]],"space.com":[["set-cookie","FTR_Article_PageView","2"]],"spectank.jp":[["ra","oncontextmenu|oncopy"]],"spelletjes.nl":[["set-cookie","OptanonAlertBoxClosed","true"]],"sportbooking.info":[["set-local-storage-item","cookies-pref","[]"]],"sportvision.rs":[["set-cookie","site_cookie_info","0"]],"stadt-schoeneck.de":[["set","realCookieBanner","undefined"]],"stbarnabas-hospice.org.uk":[["rc","wcc-popup-overflow","body","stay"]],"stefan-froescher.eu":[["set","realCookieBanner","undefined"]],"store.servicenow.com":[["set-local-storage-item","sn.store.cookie_consent","1"]],"storm-proof.com":[["set-cookie","cookie-preference","1"]],"strangermeetup.com":[["set","adsEnabled","true"]],"streambuddy.net":[["rmnt","script","oncontextmenu"]],"streamclipsgermany.de":[["set-local-storage-item","cookiesAccepted","true"]],"streamruby.com":[["rmnt","script","/devtool|debugger/"]],"streamservicehd.click":[["ra","oncontextmenu","body"]],"studienwahl.de":[["set-cookie","mrm_gdpr","1"],["set-cookie","necessary_consent","accepted"]],"sturgisjournal.com":[["nostif","gnt_mol_oy"]],"subscribercounter.com":[["set-local-storage-item","ytsc_accepted_cookies","true"]],"supercartoons.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"supertipp-online.de":[["set","realCookieBanner","undefined"]],"sushi.com":[["set-cookie","accepted-cookies","essential","","reload","1"]],"sv-langenfeld.de":[["set","realCookieBanner","undefined"]],"sweet24.de":[["set-cookie","cc-set","1","","reload","1"]],"swg-chemnitz.de":[["set","realCookieBanner","undefined"]],"taiwantrade.com":[["set-cookie","_cmsCookieaccept","Y"]],"tampereenratikka.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-markkinointi","no"],["set-cookie","cookielawinfo-checkbox-tilastointi","no"]],"tannheimertal.com":[["set-cookie","cookieconsent_status","allow"]],"tanzschulebogner.de":[["set","realCookieBanner","undefined"]],"targetstudy.com":[["aopw","stopSelect"]],"tattoodo.com":[["set-local-storage-item","accepted_cookie","true"],["set-local-storage-item","accepted_cookies","true"]],"tc-equipment.de":[["set","realCookieBanner","undefined"]],"techjunkie.com":[["aeld","mouseout"]],"tecnotutoshd.net":[["aopw","document.oncontextmenu"],["acs","disableselect","reEnable"]],"telik.live":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tenstorrent.com":[["set-cookie","tenstorrent_cookie_preferences","true"]],"tenvinilo-argentina.com":[["set-cookie","_tv_cookie_choice","1"],["set-cookie","_tv_cookie_consent","y"]],"the-masters-voice.com":[["acs","disableSelection","reEnable"],["acs","document.ondragstart"],["aeld","contextmenu"],["aopw","stopPrntScr"]],"theadvertiser.com":[["nostif","gnt_mol_oy"]],"theaircurrent.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"theashtonbristol.co.uk":[["set-cookie","ce-cookie","N"]],"thebankplymouth.co.uk":[["set-cookie","ce-cookie","N"]],"thebathamptonmill.co.uk":[["set-cookie","ce-cookie","N"]],"thefly.com":[["set-cookie","cookie_consent","1"]],"thegraillords.net":[["acs","document.getElementById","block"]],"theledger.com":[["nostif","gnt_mol_oy"]],"themebanks.com":[["aeld","","mdp"]],"theonegenerator.com":[["no-fetch-if","ads"]],"thepublicopinion.com":[["nostif","gnt_mol_oy"]],"theradiatorcentre.com":[["set-cookie","ud_accept_analytical_cookies","0"],["set-cookie","ud_accept_marketing_cookies","0"]],"therailwayblackheath.co.uk":[["set-cookie","ce-cookie","N"]],"therapiewerk-io.de":[["set","realCookieBanner","undefined"]],"thetimesnews.com":[["nostif","gnt_mol_oy"]],"theverge.com":[["nostif","adsBlocked"]],"thevolunteernw1.co.uk":[["set-cookie","ce-cookie","N"]],"thewarrenwokingham.co.uk":[["set-cookie","ce-cookie","N"]],"thewpclub.net":[["aeld","","mdp"]],"thingtesting.com":[["set-local-storage-item","cookiesAccepted","true"]],"tibber.com":[["set-cookie","tibber_cc_essential","approved","","reload","1"]],"tillit-bikes.shop":[["rc","disable","div","stay"]],"time.is":[["rmnt","script","reviveScroll","excludes","self.__next"]],"timeanddate.de":[["aeld","load","ad-wrap"]],"timeanddate.no":[["aeld","load","ad-wrap"]],"timhortons.co.th":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"tinyppt.com":[["aopw","document.ondragstart"],["aopw","disableEnterKey"],["acs","document.oncontextmenu"]],"tiskarik.cz":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"tmnews.com":[["nostif","gnt_mol_oy"]],"todays-golfer.com":[["set-cookie","ccpaApplies","true"],["set-cookie","ccpaConsentAll","true"],["set-cookie","ccpaReject","false"]],"topblogs.de":[["set","realCookieBanner","undefined"]],"toppy.be":[["set-cookie","__toppy_consent","1"]],"toxitabellaeatrebates306.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"tradefixdirect.com":[["set-cookie","ud_accept_analytical_cookies","0"],["set-cookie","ud_accept_marketing_cookies","0"]],"trakteer.id":[["aeld","/contextmenu|mousedown/"]],"trendpet.de":[["set-cookie","cookie-preference","1"]],"trirhena-consulting.de":[["set","realCookieBanner","undefined"]],"triumphshop.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"tropicalida.com.ec":[["set-local-storage-item","CookiesConsent","1"]],"truckmall.sk":[["set-cookie","cookies_confirmed","1","","reload","1"]],"tui.no":[["rc","no-scroll","body","stay"]],"tunovelaligera.com":[["rmnt","script","/wccp|contextmenu/"],["rmnt","style","/wccp|user-select/"]],"turbo1.co":[["aeld","contextmenu"]],"tvn7.pl":[["aeld","contextmenu","a"]],"tvnoov.com":[["set","HTMLDivElement.prototype.oncontextmenu","trueFunc"]],"tvnstyle.pl":[["aeld","contextmenu","a"]],"tvpassport.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"tvtechnology.com":[["set-cookie","FTR_Article_PageView","2"]],"twenga.it":[["set-cookie","cookiewarning","1","","reload","1"]],"twgtea.com":[["set-local-storage-item","LOCALSTORAGE_COOKIE_ALLOW","false"]],"ubisoft.com":[["set-cookie","UBI_PRIVACY_ADS_OPTOUT","true"],["set-cookie","UBI_PRIVACY_POLICY_ACCEPTED","false"],["set-cookie","UBI_PRIVACY_POLICY_VIEWED","true"],["set-cookie","UBI_PRIVACY_VIDEO_OPTOUT","false"]],"ubuntudde.com":[["acs","String.prototype.charCodeAt","ai_"]],"uizard.io":[["set-cookie","cookie-disclaimer","1"]],"umarex.com":[["set-cookie","dsgvo","1"]],"unidivers.fr":[["no-xhr-if","googlesyndication"]],"uol.com.br":[["aeld","copy"],["aopw","addLink"]],"upsrtconline.co.in":[["acs","document.addEventListener","alert"]],"utour.me":[["nostif","myModal","3000"]],"vandalism-sounds.com":[["set-cookie","user_allowed_save_cookie","true"]],"vandemoortel.de":[["set-cookie","cookieConsent_given","","reload","1"]],"vansteenbergen-kas.nl":[["set-cookie","consent-cookies","1"]],"varcevanje-energije.si":[["set-cookie","cmplz_banner-status","dismissed"]],"vcfrankfurt.de":[["set","realCookieBanner","undefined"]],"veneto.info":[["aeld","copy"]],"venusarchives.com":[["acs","jQuery","ai_adb"]],"vercalendario.info":[["aeld","copy","Source"]],"verpornocomic.com":[["acs","jQuery","ai_adb"]],"viba.barcelona":[["set-cookie","promptCookies","1"]],"vibeslist.ai":[["set-local-storage-item","cookie_consent","denied"]],"viewsofgreece.gr":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"virpe.com":[["aopr","document.oncontextmenu"],["ra","onselectstart"]],"visaonoticias.com":[["ra","oncontextmenu|onselectstart|ondragstart|onclick"]],"voe.sx":[["aeld","/keydown|keyup/","keyCode"],["aeld","contextmenu"]],"voeunblk.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"volksfest-nuernberg.de":[["set","realCookieBanner","undefined"]],"von-neindorff-stiftung.de":[["set","realCookieBanner","undefined"]],"vvdailypress.com":[["nostif","gnt_mol_oy"]],"vvide0.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"walserstolz.at":[["set-cookie","walserstolz-aut-cookie-categories","essential"]],"wamba.com":[["set-cookie","appBannerPopUpRulesCookie","true"]],"wasserstoff-leitprojekte.de":[["ra","oncontextmenu","body","complete"]],"watchaut.film":[["set-cookie","cookieConsent","required"]],"watson.de":[["nostif","AdBlocker"]],"webcodegeeks.com":[["nostif","onload_popup","8000"]],"webfactory-i4.de":[["set","realCookieBanner","undefined"]],"webhallen.com":[["set-local-storage-item","marketingConsent","false"],["set-local-storage-item","necessaryConsent","true"],["set-local-storage-item","personalisationConsent","false"]],"weeb.tv":[["aeld","contextmenu"]],"weekend.ee":[["set-cookie","amcookie_allowed","1"]],"weetabixonthego.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"weingut-knipser.de":[["set","realCookieBanner","undefined"]],"went.at":[["set-cookie","COOKIEBAR_1","0"]],"werkenbijtrekpleister.nl":[["rc","is-active-cookiebar","","stay"]],"wetv.vip":[["set-cookie","optionalCookiePolicy","accept"]],"whathifi.com":[["set-cookie","FTR_Article_PageView","2"]],"whitehartbrasted.co.uk":[["set-cookie","ce-cookie","N"]],"wildberries.ru":[["set-local-storage-item","wbx__cookieAccepted","true"]],"wildbits.de":[["set","realCookieBanner","undefined"]],"wildthings.club":[["set-cookie","agreeTerms","1","","reload","1"]],"winhelponline.com":[["aopr","googletag"]],"wired.co.uk":[["set","ads_not_blocked","true"]],"wolkenstein.eu":[["set-cookie","ris_cookie_setting","1"]],"worldairlineawards.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"worldcupchampionships.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"worldpressphoto.org":[["set-cookie","CMSCookieLevel","0","","reload","1"]],"worstbassist.com":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_google_analytics","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_youtube","allow"],["set-local-storage-item","cookies-selected","true"]],"wrestlezone.com":[["acs","document.createElement","admiral"]],"wtsp.com":[["aeld","mouseout","innerHeight"]],"xclient.info":[["set","killads","true"]],"xfree.com":[["set-cookie","have18","1"]],"xhamster19.com":[["set-cookie","cookie_accept","1"]],"xhreal2.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhspot.com":[["set-cookie","cookie_accept","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhtotal.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhvictory.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhwebsite5.com":[["set-cookie","cookie_accept","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhwide5.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xxxcams.com.es":[["set-cookie","disclaimerSeen","1","","reload","1"]],"yesstyle.com":[["set-cookie","yshccmfg","true","","reload","1"]],"yle.fi":[["set","yleConsentSdk._consentSdk._embedded_social_media","true"],["set","yleConsentSdk.show","noopFunc"]],"youngimages.de":[["set","realCookieBanner","undefined"]],"ytv.co.jp":[["aopr","document.oncontextmenu"]],"yusepjaelani.blogspot.com":[["aopr","document.onkeydown"]],"yvonnebennetti.com":[["set-cookie","allow_cookie","false"]],"zadowolenie.pl":[["set-cookie","AtomStore[COOKIES_ACCEPTED]","1","","reload","1"],["set-cookie","AtomStore[FUNCTIONAL_COOKIES_ACCEPTED]","1"],["set-cookie","AtomStore[MARKETING_COOKIES_ACCEPTED]","0"]],"zaero-design.de":[["set-cookie","cookie-preference","1"]],"zahnarzt-kuboth.de":[["set","realCookieBanner","undefined"]],"zaunbau-koch.de":[["set","realCookieBanner","undefined"]],"zbiornik.com":[["set-cookie","adult_confirm","1"]],"zgbk.com":[["acs","document.oncontextmenu"],["aeld","","blockEvent"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
