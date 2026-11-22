/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"101internet.ru":[["set-cookie","closeNotificationAboutCookie","true"]],"116.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"116117.fi":[["set-local-storage-item","cookie-consent","1"]],"13newsnow.com":[["aeld","/^(mouseout|mouseleave)$/"]],"1shows.ru":[["set","console.clear","trueFunc"],["set","console.log","trueFunc"],["set","console.table","trueFunc"],["aeld","keydown","123===i"]],"35.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"3d-foto.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"50plusmatch.fi":[["set-cookie","cookieconsent","no"]],"5newsonline.com":[["aeld","/^(mouseout|mouseleave)$/"]],"7-eleven.com":[["set-cookie","sei-ccpa-banner","true"]],"aachen50plus.de":[["set","realCookieBanner","undefined"]],"abc7ny.com":[["aeld","scroll"]],"aberdeennews.com":[["nostif","gnt_mol_oy"]],"abysscdn.com":[["set","devtoolsDetector.launch","noopFunc"]],"addons.opera.com":[["nostif","showOverlay"]],"adidas.cl":[["set-cookie","notice_preferences","2"]],"adidas.co.kr":[["set-cookie","notice_preferences","2"]],"adidas.co.nz":[["set-cookie","notice_preferences","2"]],"adidas.cz":[["set-cookie","notice_preferences","2"]],"adnan-tech.com":[["ra","oncontextmenu"]],"aeromexico.com":[["set-cookie","AgreeCookies","true"],["set-cookie","AreCookiesSet","true"]],"affiliate.fc2.com":[["nostif","checkFeed","1000"]],"afterbabel.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"ag-vmeste.ru":[["set-cookie","mos_cookie","true"]],"againstdata.com":[["set-cookie","dad_consent","true"]],"agame.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"agekey.org":[["set-local-storage-item","agekey-cookie-consent","true"]],"aha-music.com":[["set-local-storage-item","aha_cookie_consent","declined"],["nano-sib","j.value--","1000","0.001"]],"ahrtal-klinik.de":[["set-cookie","Consent","0"]],"ahzaa.net":[["aopr","document.oncontextmenu"]],"aicesu.cn":[["aopw","document.oncopy"]],"aiconsultores.com":[["set-cookie","cmplz_banner-status","dismissed"]],"akasaair.com":[["set-cookie","akasaairCookie","accepted"]],"akkushop-schweiz.ch":[["set-cookie","cookie-preference","1"]],"akzent-magazin.com":[["set","realCookieBanner","undefined"]],"al.com":[["aopr","__cmpGdprAppliesGlobally"]],"alibaba.com":[["aeld","mouseleave"]],"alphapolis.co.jp":[["ra","style","div#novelBoby","stay"],["aeld","copy","preventDefault"],["set","document.onselectstart","null"],["set","document.oncontextmenu","null"]],"altranotizia.it":[["acs","disableSelection"]],"alttab.net":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"androidcentral.com":[["set-cookie","FTR_Article_PageView","2"]],"animaze.us":[["set-cookie","amcookie_allowed","1"]],"anime-drama.jp":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"aniwatchtv.to":[["set","devtoolsDetector.launch","noopFunc"]],"applecinemas.com":[["set-local-storage-item","CookieWarning","true"]],"apps.stratford.gov.uk":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"aquacard.co.uk":[["set-cookie","analyticsCookieConsent","0"],["set-cookie","cookieConsentSet","1"],["set-cookie","marketingCookieConsent","0"]],"arenavalceana.ro":[["acs","jQuery","contextmenu"],["acs","document.oncontextmenu"]],"arkenzoo.se":[["set-cookie","mse_consent_necessary","granted","","reload","1"]],"arning-bau.de":[["set-cookie","cookienotification","1"]],"arturofuente.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-non-necessary","no"],["set-cookie","resp-agev-age-verification-passed","1"]],"as-selection.net":[["ra","oncontextmenu|onselectstart"]],"asga.ch":[["set","realCookieBanner","undefined"]],"asheville.com":[["nostif","adblock"]],"asics.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"athletic.net":[["acs","$","blur"]],"atlas.workland.com":[["set-local-storage-item","cookie-consent","true"]],"aubi-plus.de":[["set-cookie","cm-accepted","true"]],"audaciousdefaulthouse.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"audius.co":[["rc","scrollLock","","stay"]],"authedu.mosreg.ru":[["set-cookie","USER_AGREEMENT","1"]],"auto1.com":[["set-cookie","consent","essential"],["set-cookie","consent_needed","1"]],"azcentral.com":[["nostif","gnt_mol_oy"]],"b98.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"babiceurican.cz":[["set","realCookieBanner","undefined"]],"balsamico.shop":[["set","realCookieBanner","undefined"]],"bancaakros.it":[["set-cookie","consent_glassbox","false"],["set-cookie","consent_mktg","false"]],"bancobpm.it":[["set-cookie","consent_glassbox","false"],["set-cookie","consent_mktg","false"]],"bangbros.com":[["set-cookie","iAgree","1"]],"bcs-express.ru":[["set-local-storage-item","Express.cookie_agreement_shown","true"]],"bdb.com.pl":[["ra","oncopy|oncontextmenu|onselectstart|onselect|ondragstart|ondrag|onbeforeprint|onafterprint","body"]],"beaconjournal.com":[["nostif","gnt_mol_oy"]],"belstad.com":[["set-local-storage-item","is_announcement_closed","true"]],"berberin.net":[["set","realCookieBanner","undefined"]],"betterprogramming.pub":[["set-local-storage-item","201805-policy|accepted","1"]],"bettersafe.at":[["set-cookie","COOKIEBAR_1","0"]],"bike-supply.de":[["rc","disable","div","stay"]],"bimiacg.net":[["acs","document.oncontextmenu"]],"biographyonline.net":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"bitbucket.io":[["set-cookie","atl-gdpr-consent","0010000"]],"bitburger-braugruppe.de":[["set-cookie","bbgage18","true"]],"bluphim.com":[["nosiif","console.clear"]],"bolugundem.com":[["rmnt","script","reEnable"]],"bonappetit.com":[["remove-cookie","pay_ent_msmp"],["remove-cookie","pay_ent_pass"]],"boogschietshop.nl":[["set-cookie","cookie_preference","functional"]],"booking.reederei-zingst.de":[["set-cookie","functionality","false"],["set-cookie","performance","false"],["set-cookie","targeting","false"]],"books-world.net":[["nostif","Adblocker","10000"]],"brauerei-strate.de":[["set","realCookieBanner","undefined"]],"brill-art.de":[["set","realCookieBanner","undefined"]],"britishcornershop.co.uk":[["set-cookie","cookieConsentSet","true"]],"brodbeck-dd.de":[["set","realCookieBanner","undefined"]],"bugzilla.mozilla.org":[["set-cookie","moz-consent-pref","yes"]],"bumigemilang.com":[["acs","disable_hot_keys"],["acs","document.oncontextmenu"]],"bvk-beamtenversorgung.de":[["set-cookie","bvkcookie","true"]],"byggern.no":[["set-cookie","cookies_accepted","yes"]],"bypass.city":[["no-fetch-if","/googlesyndication|googletag/"],["nowoif"]],"cafe.naver.com":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"],["aopr","document.ondragstart"]],"calendarpedia.co.uk":[["aopr","__cmpGdprAppliesGlobally"]],"camokoenig.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"canale-tv.net":[["rmnt","script","preventDefault"],["rmnt","script",".preventDefault()","includes","contextmenu"],["aeld","contextmenu"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"cancercentrum.se":[["set-cookie","analyticalConsent","false"],["set-cookie","consentStored","true"]],"candybox.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"careers.cloud.com":[["set-cookie","ctc_rejected","1"]],"cellcom.co.il":[["set-local-storage-item","isCookiesAccepted","true"]],"cepuluh.com":[["ra","oncontextmenu|onkeydown|onmousedown"]],"cesaer.org":[["set-cookie","hideCookieNotification","true","","reload","1"]],"chatgpt.com":[["set-cookie","oai_consent_analytics","false"],["set-cookie","oai_consent_marketing","false"],["set-session-storage-item","oai/apps/noAuthHasDismissedSoftRateLimitModal","true"]],"chavesnamao.com.br":[["set-local-storage-item","LGPDconsent","1"]],"chiashake.eu":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"chilledpackaging.co.uk":[["set-cookie","DenyAllCookies","1","","reload","1"]],"chinaimportal.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"chipcitycookies.com":[["set-local-storage-item","cookie_consent","false"]],"chita.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"chromeindustries.com":[["set-cookie","cookieconsent_status","allow"]],"chronologia.pl":[["set","document.onselectstart","null"],["set","document.oncontextmenu","null"]],"cic.ch":[["set-cookie","cookieconsent_status","allow"]],"cinemablend.com":[["aopr","__cmpGdprAppliesGlobally"],["set-cookie","FTR_Article_PageView","2"]],"cleveland.com":[["aopr","__cmpGdprAppliesGlobally"]],"climatecentral.org":[["set-cookie","userCookieConsent","true"]],"clinicadelsudor.es":[["set-cookie","allow_hiper_cookie","true"]],"clujust.ro":[["acs","document.oncontextmenu"],["acs","document.ondragstart"],["aopw","disable_hot_keys"]],"cmjornal.pt":[["aopw","document.oncopy"]],"cnki.net":[["aeld","contextmenu"]],"columbiadailyherald.com":[["nostif","gnt_mol_oy"]],"columbiaspectator.com":[["nostif","ads","2000"]],"commonwealmagazine.org":[["remove-cookie","Drupal_visitor_paywall"]],"comune.renon.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sesto.bz.it":[["set-cookie","ris_cookie_setting","1"]],"concerto.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"converse.pl":[["set-cookie","amcookie_policy_restriction","allowed"]],"core.app":[["set-local-storage-item","connect-wallet-legal-consent","true"],["set-local-storage-item","should_display_cookie_banner_v2","false"],["set-local-storage-item","show-email-intake-form","false"]],"cosasdeviajes.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"cotopaxi.com":[["set-cookie","cookie_notice","1"]],"courierpostonline.com":[["nostif","gnt_mol_oy"]],"crewbase.net":[["aeld","contextmenu"],["acs","document.onkeydown"]],"crown.com":[["set-cookie","modalPolicyCookieNotAccepted","notaccepted"]],"cryptorank.io":[["set-local-storage-item","show_cookies_popup","false"]],"ctol.digital":[["set-local-storage-item","cookie_accepted","true"]],"cualesmiip.com":[["set-cookie","promptCookies","1"]],"cuisin-studio.com":[["rc","unreadable-display","","stay"]],"cursoemvideo.com":[["set-cookie","cookie_notice_accepted","true"]],"cyclingweekly.com":[["set-cookie","FTR_Article_PageView","2"]],"d.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"dailynews.us.com":[["acs","document.onselectstart"]],"daltonmaag.com":[["set-cookie","dama.cookieConsent","false"]],"danielederosa.de":[["set","realCookieBanner","undefined"]],"darwin.cam.ac.uk":[["set-cookie","cookieBanner","false"]],"data.carbonmapper.org":[["set-local-storage-item","termsOfUseAccepted","true"]],"dayspamainz.de":[["set","realCookieBanner","undefined"]],"dba-oracle.com":[["ra","oncontextmenu|ondragstart|onselectstart"]],"delawareonline.com":[["nostif","gnt_mol_oy"]],"democracynow.org":[["set-cookie","campaign_seen_today","true"]],"depop.com":[["set-cookie","gdpr__depop__functional","true"],["set-cookie","gdpr__facebook__social","false"],["set-cookie","gdpr__google__analytics","false"]],"desijugar.net":[["acs","document.onkeydown"]],"dgsf.org":[["set-cookie","confirm_cookies","1"]],"diaforetiko.gr":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"digionline.ro":[["set-cookie","cmp_level","15"]],"djelfa.info":[["aopr","document.onmousedown"],["aopw","document.oncontextmenu"],["ra","onselectstart"]],"dngz.net":[["aopr","document.oncontextmenu"],["aopr","document.onkeydown"],["set","forbidDebug","noopFunc"]],"do.de":[["set","realCookieBanner","undefined"]],"do7go.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"docs.skydeck.ai":[["set-cookie","__gitbook_cookie_granted","no"]],"doga.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"donauauen.at":[["set-cookie","cookies_accepted","false"]],"donostiroller.com":[["set","realCookieBanner","undefined"]],"doply.net":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dosenmatrosen.de":[["set-cookie","cookie-preference","1","","reload","1"]],"dotwatcher.cc":[["set-cookie","accept_cookie_policy","true"]],"downace.com":[["acs","requestPermission"]],"download.ipeenk.com":[["acs","document.oncontextmenu"]],"drafthound.com":[["set-local-storage-item","acceptsAnalyticsCookies","false"],["set-local-storage-item","acceptsNecessaryCookies","true"]],"drive4brands.de":[["set","realCookieBanner","undefined"]],"drum.um.edu.mt":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"dsworks.ru":[["set-local-storage-item","acceptCookies","true"]],"dtksoft.com":[["set-cookie","user_cookie_consent","1"]],"dualshockers.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"duffelblog.com":[["aopr","__cmpGdprAppliesGlobally"],["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"duty.travel.cl":[["set-local-storage-item","cookies-consent-accepted","true"]],"easyticket.de":[["set-cookie","consent","functional"]],"economica.net":[["aeld","copy"]],"eduardo-monica.com":[["acs","document.oncontextmenu"]],"electroprecio.com":[["set-cookie","consent","1"]],"ellasblog.de":[["set","realCookieBanner","undefined"]],"elpasotimes.com":[["nostif","gnt_mol_oy"]],"elysian.press":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"emmi-kaltbach.com":[["set-cookie","kaltbach-che-cookie-categories","essential"]],"emmi.com":[["set-cookie","aktifit-che-cookie-categories","essential"]],"endgame.id":[["set-cookie","endgame-accept-policy","true"]],"endocrinologyadvisor.com":[["remove-cookie","hmmet"]],"energiemetropole-leipzig.de":[["set","realCookieBanner","undefined"]],"enescofrance.com":[["set-cookie","acceptCookieCookie","true"],["set-cookie","enableNonEssentialCookies","false"]],"eninternetgratis.com":[["rc","show--consent","body","stay"]],"eodev.com":[["set-local-storage-item","simple-funnel-name","$remove$"]],"erfurt-touristinformation.de":[["set","realCookieBanner","undefined"]],"erholung-oberstdorf.de":[["set-cookie","Consent","0"]],"eschuhe.de":[["set-local-storage-item","__EOBUWIE__consents_accepted","true","","reload","1"]],"estrelabet.bet.br":[["set-local-storage-item","cookieConsent","true"]],"estudio-nous.com":[["set","realCookieBanner","undefined"]],"eveningsun.com":[["nostif","gnt_mol_oy"]],"everjump.fit":[["set-cookie","_pandectes_gdpr","1"]],"evernote.com":[["set-local-storage-item","accepts-cookie-notice","true"],["set-local-storage-item","cookie-notice-dismissed","true"]],"evkirche-eilsen.de":[["set","realCookieBanner","undefined"]],"evz.ro":[["acs","$","contextmenu"]],"fahrstil.cc":[["set","realCookieBanner","undefined"]],"fantasyfootballhub.co.uk":[["set-session-storage-item","modalViewed","true"]],"faq.whatsapp.com":[["rc","hasCookieBanner","body","stay"]],"farmer.pl":[["aopw","FrodoPV"]],"feel-the-darkness.rocks":[["aopr","document.oncontextmenu"],["aopr","document.onmousedown"],["aopr","disableSelection"]],"fewo-heides-haus.de":[["set-cookie","Consent","0"]],"fightful.com":[["nosiif","getComputedStyle"]],"figurepos.com":[["set-cookie","%22generic-cookie-agreement%22","true"]],"fild.de":[["set","realCookieBanner","undefined"]],"fish.shimano.com":[["set-cookie","cookiePrefAnalytics","0"],["set-cookie","cookiePrefMarketing","0"],["set-cookie","cookiePrefThirdPartyApplications","0"]],"flamecomics.xyz":[["set-cookie","cookieConsent","true"]],"fleksberegner.dk":[["set-local-storage-item","vue-cookie-accept-decline-cookiePanel","accept"]],"fleurop.de":[["set-cookie","cookie-preference","1"]],"floridatoday.com":[["nostif","gnt_mol_oy"]],"flyertalk.com":[["acs","jQuery","AdBlock"]],"forcetools-kepmar.eu":[["set-cookie","epCookieConsent","0","","reload","1"]],"ford-arndt-goerlitz.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-dinnebier-leipzig.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-janssen-sonsbeck.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-mgs-radebeul.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.fi":[["set-cookie","cookieAcknowledged","true"]],"ford.it":[["set-cookie","cookieAcknowledged","true"]],"forkingpaths.co":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"fosters.com":[["nostif","gnt_mol_oy"]],"fraudnavi.com":[["ra","oncontextmenu"]],"fucktube4k.com":[["acs","document.addEventListener","contextmenu"]],"gadsdentimes.com":[["nostif","gnt_mol_oy"]],"gais.eu":[["set-cookie","ris_cookie_setting","1"]],"games.co.id":[["set-cookie","OptanonAlertBoxClosed","true"]],"garcia-ibanez.com":[["set-cookie","cmplz_banner-status","dismissed"]],"garyfeinbergphotography.com":[["aeld","contextmenu"]],"gavelo.com":[["set-cookie","_pandectes_gdpr","1"]],"gdx.net":[["set-cookie","genovaPrivacyOptions","1","","reload","1"]],"geeksoncoffee.com":[["aopr","disableEnterKey"],["acs","document.oncontextmenu"]],"gemeinde.plaus.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.prettau.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.schenna.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gerdes-reisen.de":[["set","realCookieBanner","undefined"]],"getemoji.com":[["set-session-storage-item","fs.adb.dis","1"]],"getyournec.scot":[["set-session-storage-item","cookiePref","1"]],"ggeguide.com":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"gmx.fr":[["set-cookie","euconsent-bypass","1"]],"gmx.net":[["set","document.documentElement.AdBlockDetection","noopFunc"]],"godbolt.org":[["set-cookie","privacy_status","1"]],"goeltzschtal-reisen.de":[["set","realCookieBanner","undefined"]],"goesser.at":[["set","realCookieBanner","undefined"]],"goodram.com":[["set-local-storage-item","consentCookie","true"]],"gpiaaf.gov.pt":[["set-cookie","WarningsAndPolicyAccepted","true"]],"gptgirlfriend.online":[["set-local-storage-item","cookie-consent","1"]],"gq.co.za":[["set-cookie","PromptLater","true"]],"graffitiburger.nemtakeaway.dk":[["set-cookie","cookie-censent-musthave","true"]],"greenbaypressgazette.com":[["nostif","gnt_mol_oy"]],"grid.de":[["set","realCookieBanner","undefined"]],"gryphline.com":[["set-cookie","cookieAccepter","1"]],"gunskirchen.com":[["set-cookie","ris_cookie_setting","1"]],"hallesches-fotoatelier.de":[["set","realCookieBanner","undefined"]],"handball-world.news":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"handelsbanken.fi":[["set-cookie","shb-consent-cookies","false"]],"hansa-online.de":[["ra","oncontextmenu","body","complete"]],"hanse-haus-greifswald.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"haulageexchange.co.uk":[["set-cookie","nc_analytics","rejected"],["set-cookie","nc_cookies","accepted"],["set-cookie","nc_marketing","rejected"]],"hdrez.com":[["aopw","document.oncontextmenu"]],"healthera.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"henrikkarlsson.xyz":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"hentailib.me":[["set-local-storage-item","cookies-toast-shown","true"]],"heypoorplayer.com":[["aopr","ABDSettings"]],"hitcena.pl":[["aeld","contextmenu"]],"hitproversion.com":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"hockey-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"hopeandbearreading.co.uk":[["set-cookie","ce-cookie","N"]],"hopfner.info":[["set","realCookieBanner","undefined"]],"host.pl":[["set","realCookieBanner","undefined"]],"hotleak.vip":[["aeld","contextmenu","preventDefault"],["aeld","keydown","123"]],"hotleaks.tv":[["aeld","contextmenu","preventDefault"],["aeld","keydown","123"]],"houmatoday.com":[["nostif","gnt_mol_oy"]],"hscollective.org":[["set-cookie","CookieConsent","Necessary","","reload","1"]],"html5games.com":[["set-session-storage-item","fa-games-consent-given","true"]],"htvb.org":[["set","realCookieBanner","undefined"]],"humo.be":[["set","checkPrivacyWall","noopFunc"]],"hurawatchz.to":[["set-cookie","show_share","true"]],"ibomair.com":[["set-cookie","cmplz_banner-status","dismissed"]],"ibomma.pw":[["acs","$","contextmenu"]],"idealhome.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"ifg-life.id":[["set-cookie","cookie-consent","accepted"]],"ifortuna.cz":[["set-cookie","cookie_layer","1","","domain",".ifortuna.cz"],["set-cookie","necessary","true","","domain",".ifortuna.cz"]],"iftarsaati.org":[["set-cookie","__prvcy","1"]],"ihrlabor.befundpost.at":[["set-cookie","consent","1","","reload","1"]],"ikorektor.pl":[["nostif","ad"]],"imazing.com":[["set-cookie","__ddna__cookie_consent_analytics","false"],["set-cookie","__ddna__cookie_consent_marketing","false"]],"imooc.com":[["aopr","addCopyright"]],"independent.co.uk":[["rc","jw-flag-floating","","stay"],["rc","sticky","","stay"]],"independentmail.com":[["nostif","gnt_mol_oy"]],"infectiousdiseaseadvisor.com":[["remove-cookie","hmmet"]],"infotrucker.ro":[["rmnt","script","oncontextmenu"]],"inmobi.com":[["set-cookie","cookie-pref","rejected"]],"innohome.com":[["rc","wcc-popup-overflow","body","stay"]],"innokin.com":[["set-cookie","ageCheck","1"]],"insound.de":[["set-cookie","cookieDeclined","1"]],"instagram.com":[["set-session-storage-item","lodum","1"],["set-session-storage-item","loggedOutCTAIsShown","1"],["set","_sharedData.is_whitelisted_crawl_bot","true"]],"intermatic.com":[["set-cookie","acceptCookies","true"]],"interviewgig.com":[["acs","document.onselectstart"]],"intramed.net":[["set","adblock","false"]],"iqos.com":[["set-cookie","iqos-age-verified","yes"]],"ircity.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"isarradweg.de":[["set-cookie","cookie-consent","accepted","","reload","1"]],"isekaipalace.com":[["noeval-if","alert"]],"istore.co.za":[["set-cookie","user_allowed_save_cookie","1"]],"itvnextra.pl":[["aeld","contextmenu","a"]],"j91.asia":[["aeld","contextmenu"]],"jadent.de":[["set","realCookieBanner","undefined"]],"japancamerahunter.com":[["acs","jQuery","ads"]],"javbest.xyz":[["acs","$","contextmenu"]],"javgrab.com":[["acs","$","contextmenu"]],"jeger.pl":[["set-cookie","_acceptCookies","1","","reload","1"]],"jenbach.at":[["set-cookie","ris_cookie_setting","1"]],"jeux.fr":[["set-cookie","OptanonAlertBoxClosed","true"]],"jio.pftv.ws":[["set","confirm","noopFunc"]],"jointhefollowup.com":[["set-cookie","popup_closed","true"]],"jongcdenv.be":[["rc","cookieconsent-active","body","stay"]],"joska.com":[["set-cookie","cookie-consent","1","","reload","1"]],"jsstore.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"jugend-praesentiert.de":[["set-cookie","cookiebanner","essential"]],"jumpropeberlin.com":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_youtube","allow"],["set-cookie","ckies_google_ads_ct","deny"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_stripe","allow"],["set-cookie","ckies_tiktok_post","deny"],["set-cookie","ckies_youtube_video","allow"]],"justanswer.com":[["set-cookie","cbChecked","true"]],"k-einbruch.de":[["set-cookie","cookie_consent","true"],["set-cookie","gtm-disable-GTM-NLVRXX8","true"]],"kakaakowine.com":[["set-cookie","isAnAdult","true"]],"kaluga.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"kancelarskepotreby.net":[["set-cookie","adsCookies","false"],["set-cookie","inshopCookiesSet","true"],["set-cookie","performanceCookies","false"]],"kanjukulive.com":[["ra","ondragstart|oncontextmenu"]],"kapitalis.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"kapoorwatch.com":[["set-cookie","ck-cp","accepted"]],"karofilm.ru":[["set-cookie","cookie_usage","yes"]],"karriere-hamburg.de":[["set-cookie","banner","2","","reload","1"]],"karsaz-law.com":[["acs","document.oncontextmenu","nocontextmenu"],["aopw","disableSelection"],["aopw","disableEnterKey"]],"karyawanesia.com":[["aopr","document.oncontextmenu"]],"keh.com":[["set-cookie","gdpr-cookie-notice","1"]],"kens5.com":[["aeld","/^(mouseout|mouseleave)$/"]],"kermitlynch.com":[["set-cookie","hidePopUp","true"]],"keybr.com":[["nostif","()","5000"]],"keytube.net":[["ra","oncontextmenu","#lyrics[oncontextmenu]","complete"]],"kinderleicht.berlin":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"kinderveiligheidswinkel.nl":[["set-cookie","cookie_preference","functional"]],"kitepackaging.co.uk":[["set-cookie","cookie_consent","yes"],["set-cookie","cookie_consent_options","3"]],"kiuruvesilehti.fi":[["set-cookie","cm_ads","0"],["set-cookie","cm_analytics","0"],["set-cookie","cm_default","1"]],"klicks-kaufen.de":[["set","realCookieBanner","undefined"]],"klinger.fi":[["rc","wcc-popup-overflow","body","stay"]],"kohlkg.de":[["set","realCookieBanner","undefined"]],"kokku-online.de":[["set-local-storage-item","cookiesMin","1"]],"kolnovel.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"konsument.at":[["set-cookie","vkicookieconsent","0"]],"kosmas.cz":[["set-cookie","was_cookie_consent","no"]],"kovopolotovary.cz":[["set-cookie","web-cookies","2"]],"krav-maga-online.de":[["set-cookie","consent_cookie","declined"]],"kreativverliebt.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"ksaexpo2025.sa":[["set-cookie","cookies-accepted","true","","reload","1"]],"ksef.podatki.gov.pl":[["set-local-storage-item","cookieconsent_status","true"]],"kueren.de":[["set-cookie","Consent","0"]],"kuroko-analyze.com":[["ra","oncontextmenu","body"]],"kvk.nl":[["set-cookie","allowAnalyticsCookiesKvK","0"],["set-cookie","allowTrackingCookiesKvK","0"],["set-cookie","cookieLevelCodeKVK","1"]],"kyoceradocumentsolutions.it":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"lamparasherrero.com":[["set-cookie","promptCookies","1"]],"larian.com":[["set-cookie","cookie_accept","true"],["set-cookie","cookie_analytcs","false","","reload","1"]],"launchreliantcleaverriver.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"lcpdfr.com":[["acs","$","AdBlock"],["aopr","FuckAdBlock"]],"ledauphinhotel.com":[["rc","unreadable-display","","stay"]],"leeway.tech":[["set-local-storage-item","lw-accepts-cookies","true"]],"lenconnect.com":[["nostif","gnt_mol_oy"]],"lenzing.ooe.gv.at":[["set-cookie","ris_cookie_setting","1"]],"lepetitmarchedauvergne.fr":[["set","realCookieBanner","undefined"]],"levis.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"liddread.com":[["rmnt","script","/wpcp|contextmenu|unselectable/"]],"lighterusa.com":[["set-local-storage-item","theme_agegate_closed","1"]],"limogeshabitat.fr":[["set-cookie","Cookie_Category_analytics_2","false"],["set-cookie","Cookie_Category_save_2","true"],["set-cookie","Cookie_Category_system_1","true"]],"lingg-oberstdorf.de":[["set-cookie","Consent","0"]],"linztourismus.at":[["set-cookie","privacy-manager-settings","functional","","reload","1"]],"litehd.tv":[["set-cookie","cookieIsAgree","true"]],"livesportsontv.com":[["set-local-storage-item","promotion-popup-closed","1"]],"livingstondaily.com":[["nostif","gnt_mol_oy"]],"lofter.com":[["aeld","contextmenu"]],"loverfans.com":[["set-cookie","mayor_edad","1"]],"lowkeytech.com":[["acs","String.prototype.charCodeAt","ai_"]],"lumieresdelaville.net":[["set-local-storage-item","analytics_gdpr_accept","yes"],["set-local-storage-item","youtube_gdpr_accept","yes"]],"lustery.com":[["set-local-storage-item","cookie-consent-banner","declined"]],"luvly.care":[["set-cookie","consent","true"]],"m4uhd.net":[["aopr","locdau"]],"mainframestechhelp.com":[["aopr","document.oncontextmenu"]],"mall.hr":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"mandarinstone.com":[["set-cookie","ud_accept_analytical_cookies","no"],["set-cookie","ud_accept_marketing_cookies","no"]],"manneskraft-gesteigert.com":[["set","realCookieBanner","undefined"]],"manyanet.org":[["set","realCookieBanner","undefined"]],"mashed.com":[["aeld","copy"]],"max.co.nz":[["set-cookie","user_allowed_save_cookie","1"]],"maxedtech.com":[["no-fetch-if","googlesyndication"],["no-xhr-if","googlesyndication"]],"maximumtest.ru":[["set-local-storage-item","cookieRead","1"]],"megacartoons.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"mgorsk.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"mgsm.pl":[["acs","checkAdblockBait"]],"microlinkpc.com":[["set-cookie","is_analytics_allowed","0"],["set-cookie","microlink_cookie_notice","1"]],"mimovrste.com":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"minervababy.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"minfin.fgov.be":[["set-cookie","fedconsent","1"]],"miniminiplus.pl":[["aeld","contextmenu","a"]],"miriamkreativ.de":[["set","realCookieBanner","undefined"]],"mixingmonster.com":[["set","realCookieBanner","undefined"]],"mlive.com":[["aopr","__cmpGdprAppliesGlobally"]],"mmamania.com":[["nostif","adsBlocked"]],"mmo-sankar.de":[["set","realCookieBanner","undefined"]],"modellbahndealer.de":[["rc","disable","div","stay"]],"modellbau-vordermaier.de":[["rc","disable","div","stay"]],"mollie.com":[["set-local-storage-item","framerCookiesDismissed","true"]],"momentbymoment.app":[["set-local-storage-item","mbm-analytics-consent","denied"]],"monese.com":[["set-cookie","accept-analytical-cookies","false"],["set-cookie","accept-cookies","true"],["set-cookie","accept-marketing-cookies","false"]],"money-sense.club":[["ra","oncontextmenu|onMouseDown|style"]],"mostream.us":[["rmnt","script","/devtoolsDetector|keyCode|preventDefault/"]],"motoclubernee.com":[["rc","unreadable-display","","stay"]],"motorsportreg.com":[["set-cookie","hasMadeConsentSelection","true","","","domain",".motorsportreg.com"],["set-cookie","hasMadeConsentSelectionGPC","true","","","domain",".motorsportreg.com"]],"movetex.com":[["set-cookie","cookieconsent","false"]],"msa-berlin.de":[["set-cookie","ckies_cookielaw","allow"]],"mtbmarket.de":[["set-cookie","amcookie_allowed","1"]],"music.apple.com":[["aeld","contextmenu"]],"musicallyvideos.com":[["acs","document.oncontextmenu"]],"myarklamiss.com":[["aeld","scroll"]],"mydramalist.com":[["rc","smartbanner-active","body"]],"myriad.social":[["set-cookie","cookie-consent","true"]],"myru.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"nationalrail.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"nbcsportsedge.com":[["aopw","admrlWpJsonP"]],"neuneinhalb.org":[["set","realCookieBanner","undefined"]],"newarkadvocate.com":[["nostif","gnt_mol_oy"]],"news.ntv.co.jp":[["set","document.oncontextmenu","trueFunc"]],"niagarafallsreview.ca":[["remove-cookie","/^tncms:meter:/"]],"nicekkk.com":[["rmnt","script","debugger"]],"nicequest.com":[["set-cookie","nicequest_optIn","1"]],"nickiswift.com":[["aeld","copy"]],"nn.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"noaf.de":[["set","realCookieBanner","undefined"]],"noahpinion.blog":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"nokportalen.se":[["set-cookie","cookies_allowed","yes"]],"norwayshop.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"notify.events":[["set-cookie","_gdpr","necessary","","reload","1"]],"novelza.com":[["rc","click-to-scroll","body"],["acs","stopPrntScr"]],"numberempire.com":[["nostif","w3ad"]],"oakridger.com":[["nostif","gnt_mol_oy"]],"oberstdorf-buchen.de":[["set-cookie","Consent","0"]],"oceanof-games.com":[["set","document.oncontextmenu","undefined"],["aopr","document.onkeydown"],["aopr","document.onselectstart"],["aopr","disableSelection"]],"oekakiskey.com":[["json-prune","ads.[].imageUrl"]],"oeko-tex.com":[["set-cookie","cookieconsent_status","allow"]],"ofdb.de":[["set-cookie","ofdb_werbung","Y","","reload","1"]],"ojskate.com":[["set-cookie","cookie-preference","1"]],"okimono.nl":[["set-cookie","_pandectes_gdpr","1"]],"oled-info.com":[["set-cookie","awpopup_501941328","1"]],"omniplexcinemas.co.uk":[["set-cookie","a1wcc","all"]],"on.orf.at":[["rc","oon-scroll-lock","body","stay"]],"onlinefreecourse.net":[["aeld","","mdp"]],"ontvtime-tv.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"openaccess.wgtn.ac.nz":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"openhardware.directory":[["set-local-storage-item","cookie-consent","rejected"]],"opintopolku.fi":[["set-cookie","oph-mandatory-cookies-accepted","true"]],"ordo.open.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"ostrzegamy.online":[["set-cookie","rodo-acceptace","1"]],"otakudesu.org":[["acs","document.oncontextmenu"],["acs","window.addEventListener","ctrlKey"]],"oxide.computer":[["set-cookie","ox-accept-tracking","false"]],"paesifantasma.it":[["set","x5engine.utils.imCodeProtection","null"]],"pandababy.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"pangleglobal.com":[["set-cookie","cookie_banner_preference","reject"]],"parsatv.com":[["rmnt","script",".offsetHeight"]],"patchbox.com":[["set","realCookieBanner","undefined"]],"patricia.bg":[["set-cookie","amcookie_allowed","1"],["set-cookie","amcookie_policy_restriction","allowed"]],"pccomponentes.com":[["set-cookie","accept_cookie","1"]],"penta.cz":[["set-cookie","I6COMPARECOUNT","0"],["set-cookie","I6IISCOOKIECONSENT0","n","","reload","1"]],"pepperstone.com":[["set-cookie","acceptedCookies","checked"]],"photobooth.online":[["set-cookie","cookie_accepted","true"]],"photopea.com":[["set","console.clear","noopFunc"]],"photovoltaik-bw.de":[["set-cookie","CookieConsent","mandatory"]],"pickyou.ru":[["set-cookie","is_gdpr","1"]],"pixiv.net":[["set-cookie","privacy_policy_agreement","7","","reload","1"]],"planetagibi.com.br":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"]],"playbalatro.com":[["set-cookie","_gdpr_playbalatro","1"]],"plente.com":[["set-local-storage-item","cookiePolicy","true"]],"pnel.de":[["set-cookie","cookie-preference","1"]],"pocketnow.com":[["remove-cookie","articlesRead"]],"pohl-immobilien.it":[["set-cookie","tincx_cookie_notice_accepted","true"]],"ponal.de":[["set-cookie","ponal_cookie_consent","1","","reload","1"]],"poolpiscina.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"popp.eu":[["set","realCookieBanner","undefined"]],"popular.info":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"portal.payment.eltax.lta.go.jp":[["set-cookie","xn_cookieconsent","false","","reload","1"]],"postcrescent.com":[["nostif","gnt_mol_oy"]],"posterstore.hu":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.no":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.pl":[["set-cookie","synapse-cookie-preferences-set","true"]],"prague-catering.cz":[["set-cookie","euc","1"]],"pricespy.co.nz":[["set-cookie","privacy_settings","1"]],"primariasector2.ro":[["rmnt","script",".blockContextMenu"]],"primicia.com.ve":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"privivkainfo.ru":[["aopw","disable_keystrokes"],["acs","document.oncontextmenu"],["set","disableSelection","noopFunc"],["aeld","copy","pagelink"]],"proboards.com":[["aeld","scroll"]],"prodopa.de":[["set","realCookieBanner","undefined"]],"productosmanchegos.es":[["set-cookie","cmplz_banner-status","dismissed"]],"psihologiadeazi.ro":[["aopr","nocontext"],["aopr","disable_copy"],["acs","jQuery","keydown"]],"psychologiazycia.com":[["acs","document.oncontextmenu"],["acs","disableselect","reEnable"]],"pubgesports.com":[["set-cookie","analytics","N"],["set-cookie","essential","Y"],["set-cookie","functional","N"]],"publications.cispa.de":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"puregoldprotein.com":[["set-local-storage-item","adsAccepted","false"],["set-local-storage-item","analyticsAccepted","false"],["set-local-storage-item","cookiesAccepted","true"]],"pushsquare.com":[["aopr","_sp_._networkListenerData"]],"puzzle-battleships.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-shikaku.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-tents.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-yin-yang.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.com":[["set-cookie","puzzleyou-ca_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.sk":[["set-cookie","puzzleyou-sk_cookies_consent_allowlist","0","","reload","1"]],"qinetiq.com":[["set-cookie","cookie_pref_accept","1","","reload","1"],["set-cookie","cookie_pref_analytics","0"]],"racines.eu":[["set-cookie","ris_cookie_setting","1"]],"ratschings.eu":[["set-cookie","ris_cookie_setting","1"]],"rdslive.net":[["aeld","contextmenu"]],"reborntrans.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"recantodasletras.com.br":[["aopr","RL.licenseman.init"]],"redtube.com.br":[["set-cookie","showAgeDisclaimer","1"]],"remanga.org":[["set-cookie","cookie-accepted","true"],["set-local-storage-item","cookieConsent","true"]],"remixsearch.es":[["nano-sib","loadexternal","1000"]],"reportergazeta.pl":[["set","document.oncontextmenu","null"],["set","document.onselectstart","null"],["set","document.ondragstart","null"]],"researchaffiliates.com":[["set-cookie","ra-cookie-disclaimer-11-05-2022","true"]],"revistavanityfair.es":[["aopr","initAdBlockerPanel"]],"rezervesdalas24.lv":[["aeld","mousedown","function(t)"]],"ridgerockbrewco.ca":[["set-cookie","isAnAdult","true"]],"ris.at":[["set-cookie","ris_cookie_setting","1"]],"riwyat.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"roofingmegastore.co.uk":[["set-cookie","cookienotice","true"]],"royalenfield.com":[["set-cookie","cookieConsent","rejected"]],"rshare.library.torontomu.ca":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"rumble.com":[["set-cookie","premium_popup","1"]],"rvfhemp.com":[["set-cookie","isAnAdult","true"]],"ryuryuko.blog90.fc2.com":[["aopw","initimg"],["ra","oncontextmenu|onCopy"]],"safaricom.co.ke":[["set-cookie","cookieConsent","rejected"]],"salzstreuner.de":[["set","realCookieBanner","undefined"]],"samag-mt.com":[["set-cookie","cookieCheckTechnicalVal","true"],["set-cookie","cookieConsent","true"]],"sammlershop24.de":[["set-cookie","cookie-preference","1"]],"sammobile.com":[["set-local-storage-item","request-permission-modal","1"]],"sander-apotheken.de":[["set-cookie","cokiban","true"]],"santacristina.eu":[["set-cookie","ris_cookie_setting","1"]],"saucerco.com":[["set-cookie","newsletter-newsletter-popup","true"]],"sberdisk.ru":[["set-local-storage-item","cookieIsAccepted","true"]],"sbot.cf":[["rmnt","script","console.clear"],["nosiif","console.clear"]],"scarysymptoms.com":[["acs","document.oncontextmenu"],["acs","wccp_pro_iscontenteditable"]],"scholpp.de":[["rc","with-featherlight","","stay"]],"school.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"schoolpetrov.ru":[["set-cookie","confirm-use-cookie","1","","reload","1"]],"schulze-immobilien.de":[["set-cookie","privacyPolicyAccept","0","","reload","1"]],"scribd.com":[["aeld","/^(mouseout|mouseleave)$/"]],"sdelatotoplenie.ru":[["acs","document.oncontextmenu"],["acs","document.oncopy"]],"sekisuialveo.com":[["set-local-storage-item","cookies-eu-necessary","true"],["set-local-storage-item","cookies-eu-statistics","false"]],"serramenti-milano.it":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"serverstoplist.com":[["set-cookie","STAgreement","1"]],"sexylook.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"sfn.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shakespeare.org.uk":[["set-cookie","advertising","false"],["set-cookie","analytics","false"]],"shl.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"shop.5soap.com":[["set-cookie","allowGetPrivacyInfo","true"]],"shoutcast.com":[["set-cookie","cookie_consent","1"]],"shrapnel.com":[["set-cookie","ConsentCookies","false"]],"sigma-foto.de":[["set-cookie","cc-answered","true"],["set-cookie","cc-marketing","false"],["set-cookie","cc-needed","true"],["set-cookie","cc-statistics","false"]],"singingdalong.blogspot.com":[["ra","oncontextmenu|ondragstart|onselectstart"],["acs","disableselect","reEnable"]],"skepticalraptor.com":[["set-cookie","jetpack_post_subscribe_modal_dismissed","true"]],"smartpropertyinvestment.com.au":[["set-local-storage-item","articleGateData","$remove$"]],"smiley.blue":[["set","realCookieBanner","undefined"]],"snapchat.com":[["set-cookie","EssentialSession","true"],["set-cookie","Marketing","false"],["set-cookie","Performance","false"],["set-cookie","Preferences","false"],["set-cookie","sc-cookies-accepted","true"]],"sneltoner.nl":[["set-cookie","cookieType","255","","","reload","1"]],"snopes.com":[["set-cookie","newsletter_signup_promo","true"],["set-cookie","newsletter_signup_views","1"]],"societyliquor.co.nz":[["set-cookie","age_verification","yes"]],"solana.com":[["set-cookie","consent","rejected"],["set-local-storage-item","cookie_consent","1"]],"sotka.fi":[["set-cookie","rc_given_consent_closed","1"]],"spel.nl":[["set-cookie","OptanonAlertBoxClosed","true"]],"sportsmetrics.football":[["set-cookie","SportsMetrics_Privacy_Police_Cookie","true"]],"spytunes.com":[["set","realCookieBanner","undefined"]],"staff-gallery.com":[["set-cookie","gdpr_check_cookie","accepted","","reload","1"]],"starhub.com":[["set-cookie","cookiePolicy","true"]],"starsunfolded.com":[["acs","document.oncontextmenu"],["aopw","disableSelection"]],"startribune.com":[["remove-cookie","client_id"]],"starwalk.space":[["set-local-storage-item","SWCOOKIESACC","1"]],"steamcollector.com":[["acs","document.querySelectorAll","adblock"]],"steamdeckhq.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"store.toogoodtogo.com":[["set-local-storage-item","optionalDataExchangeConsent","false"],["set-local-storage-item","partnerConsentVersion","0"]],"strangermeetup.com":[["set","adsEnabled","true"]],"stream.hownetwork.xyz":[["rmnt","script","debugger"]],"stripchat.com":[["set-cookie","isVisitorsAgreementAccepted","1","","reload","1"]],"strkng.com":[["set-cookie","strkng_cookieconsent","1"]],"strmix.com":[["set-cookie","CookieConsent","Necessary","","reload","1"]],"studentapan.se":[["set-cookie","accepted_cookie_policy","true"]],"studiofabiobiesel.com":[["set-local-storage-item","fb-cookies-accepted","false"]],"studygo.com":[["set-cookie","squla-analytical-agreement","0"],["set-cookie","squla-cookie-agreement","1"],["set-cookie","squla-marketing-agreement","0"]],"sutterhealth.org":[["set-cookie","_acceptsEssential","true"]],"sweetwater.com":[["set-cookie","sws-gwpop","1"]],"swissborg.com":[["set-cookie","gatsby-gdpr-google-tagmanager","true"]],"takarasake.com":[["set-cookie","verified","yes"]],"tallahassee.com":[["nostif","gnt_mol_oy"]],"tapology.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"tastemade.com":[["set-local-storage-item","hide-cookbook-modal-0","true"]],"taxfreespirits.nz":[["set-cookie","isAnAdult","true"]],"teamtailor.com":[["set-local-storage-item","CookieConsent--hideCookieConsent","true"]],"techemails.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"techieway.blogspot.com":[["aopr","document.onselectstart"]],"technologyreview.jp":[["remove-cookie","kpwc"]],"techstores.gr":[["set-cookie","i3-cookie-consent","1"],["set-cookie","i3-required-cookies","1"]],"tehnomix.bg":[["set-cookie","amcookie_allowed","1"]],"teket.jp":[["set-cookie","_ul_cookie_consent","allow"]],"telecom.economictimes.indiatimes.com":[["nostif","show-login-layer-article"]],"the-masters-voice.com":[["acs","disableSelection","reEnable"],["acs","document.ondragstart"],["aeld","contextmenu"],["aopw","stopPrntScr"]],"the-scorpions.com":[["aopr","b2a"]],"theadelphileeds.co.uk":[["set-cookie","ce-cookie","N"]],"thealliance.ai":[["set-local-storage-item","AI Alliance_ReactCookieAcceptance_hasSetCookies","true"]],"thebankplymouth.co.uk":[["set-cookie","ce-cookie","N"]],"thebotanistbristol.co.uk":[["set-cookie","ce-cookie","N"]],"thebump.com":[["set-cookie","registration_modal_dismissed","true"]],"thecardiologyadvisor.com":[["remove-cookie","hmmet"]],"thedailyreporter.com":[["nostif","gnt_mol_oy"]],"thegraph.com":[["set-cookie","cookie-consent","false"]],"thehawkeye.com":[["nostif","gnt_mol_oy"]],"theintell.com":[["nostif","gnt_mol_oy"]],"thelist.com":[["aeld","copy"]],"thelivingroomcinema.co.uk":[["set-cookie","a1wcc","NECESSARY"]],"thepalaceleeds.co.uk":[["set-cookie","ce-cookie","N"]],"therecordherald.com":[["nostif","gnt_mol_oy"]],"thingtesting.com":[["set-local-storage-item","cookiesAccepted","true"]],"thingybob.de":[["set","realCookieBanner","undefined"]],"timeanddate.com":[["aeld","load","ad-wrap"]],"timhortons.co.th":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"tipssehatcantik.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"tiskarik.cz":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"tokuyo.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"toni-maccaroni.de":[["set-cookie","BestellalarmCookiesAccepted","true"]],"top-yp.de":[["set-cookie","tncookieinfo","1","","reload","1"]],"toshiba-aircondition.com":[["set-cookie","COOKIEBAR_1945","0"]],"totalbeauty.com":[["aopr","__cmpGdprAppliesGlobally"]],"totemat.pl":[["aopr","disableSelection"]],"tradefixdirect.com":[["set-cookie","ud_accept_analytical_cookies","0"],["set-cookie","ud_accept_marketing_cookies","0"]],"trojmiasto.pl":[["aopr","adBlockDetected"]],"truyenbanquyen.com":[["acs","document.oncontextmenu"],["aopw","disable_hot_keys"],["aopw","disable_copy"],["acs","reEnable"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"tube8.es":[["set-cookie","t8disclaimer","1"]],"tumblr.com":[["nostif","Premium"]],"turbo.ai":[["set-local-storage-item","cookieConsent","1"]],"turboimagehost.com":[["set-cookie","cookiewarn","1"]],"turkishairlines.com":[["set-cookie","COOKIE_ADVERTISEMENTS","false"],["set-cookie","COOKIE_ANALYTICS","false"],["set-cookie","COOKIE_FUNCTIONAL","false"],["set-cookie","COOKIE_WARNING_ACCEPTED","false"],["set-cookie","COOKIE_WARNING_REJECTED","true"],["set-cookie","COOKIE_WARNING_VIEWED","true"]],"tv-asahi.co.jp":[["aeld","contextmenu"],["ra","oncontextmenu","body"]],"tv-sport.de":[["set","realCookieBanner","undefined"]],"tvn7.pl":[["aeld","contextmenu","a"]],"tvprato.it":[["rc","show--consent","body","stay"]],"tvtechnology.com":[["set-cookie","FTR_Article_PageView","2"]],"twenga.co.uk":[["set-cookie","cookiewarning","1","","reload","1"]],"twenga.de":[["set-cookie","cookiewarning","1","","reload","1"]],"twenga.it":[["set-cookie","cookiewarning","1","","reload","1"]],"twitchemotes.com":[["aeld","contextmenu"]],"ubereats.com":[["set-cookie","uev2.gg","true"]],"uc.pt":[["set-local-storage-item","userDeniedCookies","1"]],"ukworkshop.co.uk":[["nostif","google_jobrunner"]],"unifachbuch.de":[["set-cookie","i_c_a","true"],["set-cookie","i_cm_a","false"],["set-cookie","i_sc_a","false"]],"uniqueshop.gr":[["set-cookie","iccb_init","1"]],"unknowncheats.me":[["aeld","DOMContentLoaded","style.display"]],"unlimitedfiles.xyz":[["acs","console.log","document.referer"]],"upsrtconline.co.in":[["acs","document.addEventListener","alert"]],"uta-net.com":[["aeld","/contextmenu|selectstart|copy/"]],"uza.be":[["set-cookie","cookie-agreed","2"]],"v6embed.xyz":[["nosiif","devtool"],["nostif","devtool"]],"valtiokonttori.fi":[["set-cookie","cookieconsent_dismissed","no"]],"vandalism-sounds.com":[["set-cookie","user_allowed_save_cookie","true"]],"vanlifecampers.com":[["rc","body","cmplz-banner-active"]],"varma.fi":[["set-cookie","varmafi_mandatory","true"]],"varusteleka.com":[["set-local-storage-item","cookieConsent","false"]],"venea.net":[["aeld","","ads"]],"viewing.nyc":[["no-fetch-if","googlesyndication"]],"villagrancanaria.com":[["set-local-storage-item","cookies_view","true"]],"vincentsworld.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"vinopolitan.sk":[["set-cookie","h_adult","1","","reload","1"]],"vinusta.com":[["set-cookie","acris_cookie_acc","1","","reload","1"]],"virginvoyages.com":[["set-session-storage-item","emailSignupModal_isShown","true"]],"vladivostok1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"vmake.ai":[["set-cookie","VMAKE_COOKIE_POLICY","0"]],"voeun-block.net":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"von-zinsen-leben.de":[["set","realCookieBanner","undefined"]],"vtbe.to":[["acs","RegExp","contextmenu"]],"wader.toys":[["aopw","document.oncontextmenu"]],"walperdrinks.sk":[["set-cookie","site-agreement","1"]],"warcraftlogs.com":[["acs","attachToDom","ad-fallback"]],"warnerbros.com":[["set-local-storage-item","wb-us-ltp-consent-v1","1"]],"wayfair.ie":[["set-cookie","user_cookie_prefs","1"]],"webcamromania.ro":[["aeld","contextmenu","preventDefault"]],"webnovel.com":[["aeld","/contextmenu|copy/"],["set","console.clear","noopFunc"],["nosiif","debug"]],"webnoveltranslations.com":[["aeld","/contextmenu|copy|cut|key/","","elements","document"]],"webtapete.de":[["set","realCookieBanner","undefined"]],"weekend.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"weetabix.com":[["rc","wcc-popup-overflow","body","stay"]],"weetabixfoodcompany.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"weimar-touristinformation.de":[["set","realCookieBanner","undefined"]],"werkenbijtrekpleister.nl":[["rc","is-active-cookiebar","","stay"]],"whatfontis.com":[["acs","$","adBlock"]],"wheel-size.com":[["set","detector_active","true"]],"whitepages.com":[["set-cookie","accepted_tos_via_serp","true"]],"wifiwien.at":[["set-cookie","consent","true"]],"wikibious.com":[["aopr","disable_copy"],["aopw","document.oncontextmenu"]],"winerack.com":[["set-local-storage-item","dnt_preference","true"]],"withpersona.com":[["set-local-storage-item","Do-not-share","true"],["set-local-storage-item","allow-cookies","false"]],"wlo-cricstreamiing.pages.dev":[["set","confirm","noopFunc"]],"wolfgangallgaeuer.com":[["set","realCookieBanner","undefined"]],"wolkenstein.eu":[["set-cookie","ris_cookie_setting","1"]],"wonkette.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"world-novel.fr":[["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"],["aeld","keydown","key"],["aeld","/copy|selectstart/","return"],["aeld","contextmenu","/preventDefault|pointerType/"]],"worldscientific.com":[["acs","document.getElementById","block"]],"wpplugins.tips":[["acs","jQuery","contextmenu"]],"wst.tv":[["set-cookie","cookie_consent_given","true"]],"www-liverpoolecho-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www.whatsapp.com":[["rc","hasCookieBanner","body","stay"]],"x-link.pl":[["aeld","contextmenu","a"]],"xhchannel2.com":[["set-cookie","cookie_accept","1"]],"xhvictory.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhwebsite5.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xn--digitaler-notenstnder-m2b.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"xtv.cz":[["nostif","pgblck"]],"yeuphimmoik.com":[["acs","jQuery","contextmenu"]],"yusepjaelani.blogspot.com":[["aopr","document.onkeydown"]],"zaui.com":[["aeld","/^(mouseout|mouseleave)$/"]],"zdnet.de":[["aopr","can_i_run_ads"]],"zeinpharma.com":[["set-cookie","cookie-preference","1"]],"zentalk.asus.com":[["set-cookie","isReadCookiePolicyDNT","Yes"],["set-cookie","isReadCookiePolicyDNTAa","true"]],"zeteo.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"zeustranslations.blogspot.com":[["acs","alert","location.href"]],"zumkutscher.de":[["set","realCookieBanner","undefined"]],"zurzeit.at":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"zwei-euro.com":[["nostif","Delay"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
