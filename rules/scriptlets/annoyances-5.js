/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"1000-haushaltstipps.de":[["set","realCookieBanner","undefined"]],"101internet.ru":[["set-cookie","closeNotificationAboutCookie","true"]],"1shows.ru":[["set","console.clear","trueFunc"],["set","console.log","trueFunc"],["set","console.table","trueFunc"],["aeld","keydown","123===i"]],"45.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"47news.jp":[["acs","$","contextmenu"]],"56.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"5asec.ch":[["set-cookie","cookie-agreed","2"]],"6amgroup.com":[["set-local-storage-item","cookie_consent","false"]],"89.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"aboutchromebooks.com":[["aopr","googletag"]],"abstream.to":[["acs","document.onkeydown"]],"acce.es":[["set-cookie","cmplz_banner-status","dismissed"]],"account.nowpayments.io":[["set-cookie","cookie-accepted","true"]],"adidas.ca":[["set-cookie","notice_preferences","2"]],"adidas.co.ma":[["set-cookie","consent_status","approved"]],"adidas.es":[["set-cookie","notice_preferences","2"]],"adidas.fr":[["set-cookie","notice_preferences","2"]],"adidas.pl":[["set-cookie","notice_preferences","2"]],"adidas.pt":[["set-cookie","notice_preferences","2"]],"admit-one.co.uk":[["set-cookie","a1wcc","all"]],"adult-tv-channels.click":[["set-session-storage-item","adp-closed","1"]],"advnture.com":[["set-cookie","FTR_Article_PageView","2"]],"aegon.es":[["set-cookie","AceptacionCookieAnalitica","no"],["set-cookie","AceptacionCookiePersonalizacion","yes"],["set-cookie","AceptacionCookiePublicidad","no"],["set-cookie","Event","accept"]],"aepos.ap.gov.in":[["ra","oncontextmenu"],["acs","$","contextmenu"]],"afarmaciaonline.pt":[["set-cookie","cookie_consent","reject","","reload","1"]],"affbank.com":[["set","canRunAds","true"]],"ag-vmeste.ru":[["set-cookie","mos_cookie","true"]],"agame.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"agerpres.ro":[["aeld","contextmenu","preventDefault"]],"ahzaa.net":[["aopr","document.oncontextmenu"]],"airwallex.com":[["set-cookie","awx_cookie_consent","true"]],"all4pets.com.pl":[["aeld","contextmenu"]],"alma.be":[["set-cookie","__cookie_consent","false"]],"alohabrowser.com":[["set-cookie","acceptCookie","1"]],"alphaspel.se":[["set-cookie","cookie_consent","true"]],"amigosmuseoreinasofia.org":[["set-cookie","consentcookies_Esenciales","OK"]],"amtraker.com":[["no-fetch-if","cloudflareinsights.com"]],"amway-latvia.com":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"anastore.com":[["set-cookie","cok","1","","reload","1"]],"ancient.eu":[["set","ADBdetected","noopFunc"]],"android1pro.com":[["rmnt","script","/contextmenu|wpcp/"]],"androidtvbox.eu":[["aeld","dragstart"],["aopr","nocontextmenu"],["acs","document.ondragstart"]],"antallaktikaexartimata.gr":[["aeld","mousedown","function(t)"]],"aplgo.com":[["set-cookie","cookie_agreement","1","","reload","1"]],"app.midpage.ai":[["set-local-storage-item","cookieConsent","denied"]],"app.privacy.com":[["set-local-storage-item","privacy-cookie-consent","1"]],"app.standards.site":[["set-local-storage-item","accepted-cookies","true"]],"apyhub.com":[["set-cookie","cookies-accepted","true","","reload","1"]],"aquacard.co.uk":[["set-cookie","analyticsCookieConsent","0"],["set-cookie","cookieConsentSet","1"],["set-cookie","marketingCookieConsent","0"]],"arcanum.com":[["set","show_modal","noopFunc"]],"archiwumalle.pl":[["set-cookie","accept_political","1"]],"argentos.barcelona":[["set-cookie","promptCookies","1"]],"arzl-pitztal.gv.at":[["set-cookie","ris_cookie_setting","1"]],"asianet.co.id":[["set-local-storage-item","cookiesAccepted","true"]],"aspock.com":[["set-cookie","cmplz_banner-status","dismissed"]],"assura.ch":[["set-cookie","cookiePolicyApproved","true"]],"astondevs.ru":[["set-local-storage-item","banner","true"]],"astro-cric.pages.dev":[["set","confirm","noopFunc"]],"asus.com.cn":[["set-cookie","isReadCookiePolicyDNT","Yes"],["set-cookie","isReadCookiePolicyDNTAa","true"]],"athletic-club.eus":[["set-cookie","analitics-cookies-consent","0"],["set-cookie","personalization-cookies-consent","0","","reload","1"],["set-cookie","user-accepted-AEPD-cookies","1"]],"atlas.workland.com":[["set-local-storage-item","cookie-consent","true"]],"audaciousdefaulthouse.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"ausupreme.com":[["set-cookie","allowGetPrivacyInfo","true"]],"autobedrijfnaessens.be":[["set-cookie","cookie_analytics","0"],["set-cookie","cookie_functional","1"],["set-cookie","cookie_pref_saved","1"]],"autobrinkmann.de":[["set","realCookieBanner","undefined"]],"autodude.dk":[["set-local-storage-item","cookieConsent","necessary"]],"autohero.com":[["set-cookie","consent","1"]],"azlyrics.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"b4usa.com":[["aopw","adBlockDetected"]],"badzjeszczelepszy.pl":[["aopr","document.onmousedown"],["aopr","document.onselectstart"],["aopr","ga_ExitPopup3339"]],"bammusic.com":[["set-cookie","analyticsCookiesAccepted","false"],["set-cookie","mandatoryCookiesAccepted","true"],["set-cookie","mediaCookiesAccepted","false"]],"bancaakros.it":[["set-cookie","consent_glassbox","false"],["set-cookie","consent_mktg","false"]],"banco.bradesco":[["set-cookie","cookieFunction","false"],["set-cookie","cookieMarketing","false"],["set-cookie","cookiePerformance","false"],["set-cookie","lgpd","true","","reload","1"]],"banglainsider.com":[["acs","document.onkeydown"],["acs","reEnable","killcopy"],["ra","oncontextmenu"]],"basketball-reference.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"battle-one.com":[["aopr","document.oncontextmenu"],["aopr","disableSelection"]],"bazaartracker.com":[["set-local-storage-item","cookiesAgree","true"]],"bazarchic.com":[["set-cookie","RgpdBanner","1"],["set-cookie","_marketing","0"],["set-cookie","_performance","0"]],"bcgame.vc":[["set-local-storage-item","ignore_cookie_warn","true"]],"bcs16.ro":[["aopw","document.oncontextmenu"]],"belisse-beauty.co.uk":[["set-cookie","cookie-preference","1"]],"berberin.net":[["set","realCookieBanner","undefined"]],"berkeleygroup.digital":[["set-cookie","BGDESKTOP_TERMS","1"]],"betec.de":[["set","realCookieBanner","undefined"]],"betterprogramming.pub":[["set-local-storage-item","201805-policy|accepted","1"]],"bettertires.com":[["set-cookie","consent","1"]],"bharatavani.in":[["aeld","/cut|copy|paste|contextmenu/"]],"bhw.de":[["set-cookie","Cookieinfoauswahl","false"]],"biano.hu":[["set-cookie","_cb","1","","reload","1"]],"bigbank.nl":[["set-cookie","_ck_decision","1"]],"bilderberg-bellevue-dresden.de":[["set","realCookieBanner","undefined"]],"bimedis.com":[["set-cookie","accept_cookies","1"]],"biurobox.pl":[["set-cookie","cookies_message_bar_hidden","true"]],"bizkaia.eus":[["set-cookie","pc_analitica_bizkaia","false"],["set-cookie","pc_preferencias_bizkaia","true"],["set-cookie","pc_tecnicas_bizkaia","true"],["set-cookie","pc_terceros_bizkaia","false"]],"blikk.hu":[["ra","style","body","stay"]],"blista.de":[["set-cookie","cookieconsent_essential","yes"],["set-cookie","cookieconsent_statistics","no"]],"blitzortung.org":[["set-cookie","CONSENT","15"]],"blog.documentfoundation.org":[["set-cookie","ytprefs_gdpr_consent","1","","reload","1"]],"blog.kwick.de":[["acs","jQuery","contextmenu"],["aopr","disableselect"],["aopr","document.onkeydown"]],"blogyourthing.com":[["set","realCookieBanner","undefined"]],"bluebell-railway.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"bnet-internet.cz":[["set-cookie","AnalyticsScripts","false","","reload","1"],["set-cookie","MarketingScripts","false"]],"boards.net":[["aeld","scroll"]],"bold.dk":[["acs","eval","abd"]],"book.zongheng.com":[["aopr","document.oncontextmenu"],["ra","onselectstart"]],"books-world.net":[["nostif","Adblocker","10000"]],"boomboxradio.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"brauerei-strate.de":[["set","realCookieBanner","undefined"]],"braziljournal.com":[["acs","document.oncopy"]],"brill-art.de":[["set","realCookieBanner","undefined"]],"brunnenthal.at":[["set-cookie","ris_cookie_setting","1"]],"buendnisse-fuer-bildung.de":[["set-cookie","gsbbanner","0"]],"buyandapply.nexus.org.uk":[["set-cookie","gdpr-banner","1"]],"bylena.com":[["set-cookie","privacy_consent","1"]],"c6bank.com.br":[["set-session-storage-item","ACCEPT_LGPD","true"]],"calm.com":[["set-cookie","has-agreed-to-cookies","false"],["set-cookie","has-declined-cookies","true","","reload","1"]],"camokoenig.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"camping-car-plus.com":[["set-cookie","ecs-cookies-consent","0"]],"campingbuddies.de":[["set","realCookieBanner","undefined"]],"canale-tv.net":[["rmnt","script","preventDefault"],["rmnt","script",".preventDefault()","includes","contextmenu"],["aeld","contextmenu"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"canalpluskuchnia.pl":[["set-cookie","cp_cc_ads","1"],["set-cookie","cp_cc_stats","1","","reload","1"]],"cancercentrum.se":[["set-cookie","analyticalConsent","false"],["set-cookie","consentStored","true"]],"candy-store.cz":[["set-cookie","cookie-bar","0"]],"canvascga.com":[["set","realCookieBanner","undefined"]],"capecodtimes.com":[["nostif","gnt_mol_oy"]],"careers.ing.com":[["set-cookie","CookieConsent","0","","reload","1"]],"cargoe.at":[["set","realCookieBanner","undefined"]],"case-score.com":[["set-cookie","cookieConfirm","true"],["set-cookie","trackingConfirm","false"]],"cataloagedeoferte.ro":[["set-cookie","CookieConsent","true"]],"catawiki.com":[["set-cookie","enable_analytical_cookies","false"],["set-cookie","enable_marketing_cookies","false"],["set-cookie","has_pending_cookie_consent_sync","true"]],"cattime.com":[["acs","document.createElement","admiral"]],"cbr.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"cdu-fraktion.berlin.de":[["set-cookie","cookiehinweis1","1"]],"celebzcircle.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"cellcolabsclinical.com":[["set-cookie","functionalCookie","true"]],"centrumrowerowe.pl":[["set-cookie","_cookieConsents","1","","reload","1"]],"cexpr.es":[["set-cookie","msg_cookie_CEX","true"]],"charleskeith.com":[["set-cookie","ck_dnt","1"],["set-cookie","consentTracking","true"],["set-cookie","consentTrackingPopupCookie","true"]],"cheboygannews.com":[["nostif","gnt_mol_oy"]],"chestnut-tree-house.org.uk":[["rc","wcc-popup-overflow","body","stay"]],"chilledpackaging.co.uk":[["set-cookie","DenyAllCookies","1","","reload","1"]],"chowhound.com":[["aeld","copy"]],"cifas.org.uk":[["set-cookie","cookiesetting","off"]],"cinkciarz.pl":[["set-cookie","acceptedCookiesRemarketing","required"]],"citilink.ru":[["set-cookie","infoCookieUses","true"]],"cityfalcon.ai":[["set-local-storage-item","cookies_policy_status","true"]],"clausnehring.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"climatecentral.org":[["set-cookie","userCookieConsent","true"]],"clipartmax.com":[["aopw","document.oncontextmenu"]],"clipchamp.com":[["set-cookie","acceptCookies","true"]],"clk.ink":[["set","blurred","false"]],"cnn.com":[["rc","onetrust-banner-open","","stay"],["aeld","visibilitychange","dispatch"]],"codecamps.com":[["set-cookie","codecamps.cookiesConsent","true"]],"codex.online":[["set-cookie","_func","true"]],"columbiasportswear.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"columbiatribune.com":[["nostif","gnt_mol_oy"]],"communitycrimemap.com":[["set-session-storage-item","disclaimerOpened","1"]],"compari.net":[["set","realCookieBanner","undefined"]],"compra.fredolsen.es":[["set-cookie","cookiesDirective_","N"]],"compravo.de":[["rc","disable","div","stay"]],"comune.braies.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.naz-sciaves.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.salorno.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.santacristina.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.silandro.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.sluderno.bz.it":[["set-cookie","ris_cookie_setting","1"]],"confused.com":[["set-cookie","CookieConsentV4","false"]],"conversion-rate-experts.com":[["set-cookie","marketing_cookie_consent","false"],["set-cookie","user_experience_cookie_consent","false"]],"cornhub.army":[["set","realCookieBanner","undefined"]],"cosel-portal.com":[["set-cookie","tiki_cookies_accepted","y","","reload","1"]],"coseleurope.eu":[["set-cookie","tiki_cookies_accepted","y","","reload","1"]],"cosxplay.com":[["rmnt","script","adblock"]],"couplechallenge.com":[["set-cookie","_pandectes_gdpr","1"]],"cours-de-droit.net":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"coworkingrepublic.com":[["set","realCookieBanner","undefined"]],"creativebloq.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"cssreference.io":[["aopr","carbonLoaded"]],"ctrader.com":[["set-local-storage-item","cookie_accepted","true"],["set-local-storage-item","cookie_analytic","false"],["set-local-storage-item","cookie_necessary","true"]],"cyberfolks.pl":[["set-cookie","CF_GDPR_COOKIE_CONSENT_VIEWED","1"]],"d0o0d.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"d5render.com":[["set-cookie","accept_cookie_flag","1"]],"dailycomet.com":[["nostif","gnt_mol_oy"]],"daima.asia":[["set-cookie","allowGetPrivacyInfo","true"]],"data.carbonmapper.org":[["set-local-storage-item","termsOfUseAccepted","true"]],"datahub.hku.hk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"dbschenker.com":[["set-cookie","allow-marketing-tracking","false"],["set-cookie","allow-statistical-tracking","false"],["set-cookie","privacy-notice-responded","0"],["set-local-storage-item","cookie_usage_acknowledged_2","1"],["set-local-storage-item","cookie_usage_acknowledged_2","true"]],"deezer.com":[["aopr","onbeforeunload"],["nostif","bait"]],"deltatre.com":[["set-cookie","cookie-preferences-analytics","no"],["set-cookie","cookie-preferences-marketing","no"],["set-cookie","cookie-preferences-technical","yes"]],"desser.co.uk":[["set","realCookieBanner","undefined"]],"destatis.de":[["set-cookie","gsbbanner","0"]],"dettol-store.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"devo-veenendaal.nl":[["set-cookie","consent-cookies","1"]],"dhbbank.nl":[["set-cookie","UserCookieLevel","1"],["set-cookie","cookiePreference","1"]],"digi24.ro":[["aeld","copy"]],"digimobil.es":[["set-cookie","adsConsent","false"],["set-cookie","analyticsConsent","false"]],"docs.rehide.io":[["set-cookie","__gitbook_cookie_granted","no"]],"doctordle.org":[["set-cookie","doctordle_cookies_accepted","true"]],"dooodster.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"downloadtutorials.net":[["aeld","","mdp"],["aeld","/contextmenu|selectstart|copy/"]],"drafthound.com":[["set-local-storage-item","acceptsAnalyticsCookies","false"],["set-local-storage-item","acceptsNecessaryCookies","true"]],"drs.britishmuseum.org":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"dsworks.ru":[["set-local-storage-item","acceptCookies","true"]],"dtksoft.com":[["set-cookie","user_cookie_consent","1"]],"dzwignice.info":[["aeld","contextmenu"]],"eapvic.org":[["set-cookie","CookienatorConsent","false"]],"earnlab.com":[["set-cookie","el_consent","necessary"]],"eater.com":[["nostif","adsBlocked"]],"edn.com":[["aopr","googletag"]],"edookit.com":[["set-cookie","uuAppCookiesAgreement","true"]],"ef.co.id":[["set-local-storage-item","accepted-cookies","true"]],"efortuna.pl":[["set-cookie","cookie_layer","1"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"eggelsberg.at":[["set-cookie","ris_cookie_setting","1"]],"egro-direktwerbung.de":[["set","realCookieBanner","undefined"]],"einfach-einreichen.de":[["set-cookie","ee-ca","y","","reload","1"],["set-cookie","ee-hj","n"],["set-cookie","ee-yt","y"]],"electronoobs.com":[["set-cookie","pd_cc","1"]],"elektrikmen.com":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"elektro-plast.com.pl":[["ra","oncontextmenu"]],"emailfake.com":[["aeld","copy"]],"embedv.net":[["nosiif","devtool"],["nostif","devtool"]],"embtaku.pro":[["aost","Promise","/isEnable|isOpen/"]],"emmi-energy-milk.ch":[["set-cookie","energy-milk-che-cookie-categories","essential"]],"emmi-kaltbach.com":[["set-cookie","kaltbach-che-cookie-categories","essential"]],"endclothing.com":[["set-cookie","cookieConsentDismissed","true"],["set-cookie","cookieTermsDismissed","true"]],"enduro-mtb.com":[["set","SteadyWidgetSettings.adblockActive","false"]],"enzobertini.ro":[["set-cookie","CakeCookie[cookie_consent_eb]","1"]],"eoreuni.com":[["aopw","document.oncontextmenu"]],"epicdrama.eu":[["set-cookie","cookies_popup","1"]],"eramba.org":[["set-cookie","localConsent","false"]],"erlus.com":[["set-local-storage-item","pc-cookie-accepted","true"],["set-local-storage-item","pc-cookie-technical-accepted","true"]],"erp-up.de":[["set","realCookieBanner","undefined"]],"esa.nask.pl":[["set-cookie","GA_COOKIE_SMOG","accepted"]],"espressocafe.ro":[["rmnt","script","contextmenu"]],"estadao.com.br":[["aeld","copy"],["set-local-storage-item","TUTORIAL_VIEWED_SNACKS_HOME","true"]],"estudio-nous.com":[["set","realCookieBanner","undefined"]],"eugendorf.at":[["set-cookie","ris_cookie_setting","1"]],"eurogamer.net":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"europarl.europa.eu":[["set-cookie","europarlcookiepolicysagreement","0"]],"eventure.nl":[["set-cookie","consent-cookies","1"]],"evz.ro":[["acs","$","contextmenu"]],"examiner-enterprise.com":[["nostif","gnt_mol_oy"]],"exclusifvoyages.com":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"exclusivevip.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"f1store4.formula1.com":[["set-cookie","mktck","false"]],"fabian-heinz-webdesign.de":[["set","realCookieBanner","undefined"]],"fabrykacukiernika.pl":[["set-cookie","Rodo","1"],["set-cookie","cookie_privacy_on","1"]],"fandom.com":[["set-cookie","leftPanelOpen","0"]],"fantricks.com":[["acs","jQuery","contextmenu"]],"farmaline.be":[["set-session-storage-item","sae-conversational-consent-msg-closed","true"]],"fatalmodel.com":[["set-session-storage-item","CookieTerm18","true"]],"fbref.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"fbshop.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"fcportables.com":[["aeld","/^(contextmenu|copy|dragstart|selectstart)$/"]],"feierstoff.de":[["set-cookie","Hotjar","false"],["set-cookie","ga","false"],["set-cookie","mnd-cookie-accepted-feierstoffde-54","1"]],"felico.pl":[["acs","document.oncontextmenu"]],"ferienwohnungen-rotzler.de":[["set-cookie","Consent","0"]],"ferroviando.com.br":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"fflogs.com":[["acs","attachToDom","ad-fallback"]],"fild.de":[["set","realCookieBanner","undefined"]],"fillup.pl":[["set-cookie","efile-cookiename-74","1"]],"fineartsmuseum.recreatex.be":[["set-cookie","acceptAnalyticsCookies","false"],["set-cookie","acceptFunctionalCookies","true"],["set-cookie","cookiePolicyConfirmed","true","","reload","1"]],"finimize.com":[["set-cookie","cookie_consent","false"]],"fizjobaza.pl":[["set-cookie","cookie-accepted","yes"]],"fizz.hu":[["set-cookie","cookie.consent.finished","1"],["set-cookie","gdpr_level","1"]],"fletcherzakelijk.nl":[["set-cookie","acceptCookies","true"]],"flixrave.to":[["nostif","||null"],["set","DisDevTool","undefined"]],"flory4all.com":[["acs","document.oncontextmenu"]],"flyingblue.com":[["set-cookie","cookie-consent-level","functional"]],"followmikewynn.com":[["acs","document.oncontextmenu"],["aopr","document.onkeydown"]],"ford-ah-im-hunsrueck-simmern.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-bunk-voelklingen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hartmann-rastatt.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-kohlhoff-mannheim.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-muecke-berlin.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-nuding-remshalden.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-ohm-rendsburg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-sg-goeppingen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.no":[["set-cookie","cookieAcknowledged","true"]],"forgeofempires.com":[["set-cookie","CookieNotification","1"]],"form.fillout.com":[["set-local-storage-item","explicitCookieAccept-24149","true"]],"forwardis.com":[["set","realCookieBanner","undefined"]],"foryouehealth.de":[["set-cookie","amcookie_allowed","1"]],"foxracingshox.de":[["set-cookie","allowCookie","1"]],"frameboxxindore.com":[["aeld","copy","pagelink"]],"freegossip.gr":[["set","realCookieBanner","undefined"]],"frick-geraetebau.de":[["set-cookie","ris_cookie_setting","1"]],"frigge-dinstak.de":[["set","realCookieBanner","undefined"]],"frog.co":[["set-cookie","frogHideGDPRBanner","true"]],"fryerndental.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"fschemie-goettingen.de":[["set","realCookieBanner","undefined"]],"fuckyeah.shop":[["set","realCookieBanner","undefined"]],"full-anime.fr":[["acs","document.getElementById","adblock"]],"fundamenta.hu":[["set-cookie","cookie_consent","true","","domain",".fundamenta.hu"],["set-cookie","general","true","","domain",".fundamenta.hu"]],"funnelcockpit.com":[["rc","gdpr-cookie-notice-center-loaded","","stay"]],"fvd.nl":[["set-local-storage-item","GDPR-fingerprint:accepted","true"]],"fydeos.io":[["set-cookie","cookie_consent","necessary"],["set-local-storage-item","is_accept_cookie","true"]],"gamebanana.com":[["aopr","adBlockDetected"],["nostif","vSiteRefresher"]],"gamemaker.io":[["set-cookie","yoyocookieconsent_viewed","true"]],"gamepur.com":[["aopr","__cmpGdprAppliesGlobally"]],"gameseal.com":[["set-cookie","cookie-preference","1"]],"gamoneinterrupted.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"gasobni.com":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"gasolinapromociones.bridgestone.es":[["set-cookie","G-SYB3DEBSY1","1"]],"gayhits.com":[["set-cookie","kt_tcookie","1"],["set-cookie","splash_Page_Accepted","true"]],"gefahrgutjaeger.de":[["set","realCookieBanner","undefined"]],"gemeinde.prad.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.sarntal.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.schluderns.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.sexten.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.stleonhardinpasseier.bz.it":[["set-cookie","ris_cookie_setting","1"]],"generali.at":[["set-cookie","CST_COOKIE_CONSENT","1"],["set-cookie","cookieMessageDismissed","1"]],"genesistls.com":[["acs","document.ondragstart"],["acs","document.onkeydown"]],"geotips.net":[["set","document.oncontextmenu","null"],["aeld","/keyup|keydown/","wpcc"],["set","onload","null"]],"gerdes-reisen.de":[["set","realCookieBanner","undefined"]],"getaawp.com":[["set","realCookieBanner","undefined"]],"getanchorgrid.com":[["set-cookie","ag_analytics_consent","declined"]],"getunleash.io":[["set-cookie","CookieConsent","true"]],"getyournec.scot":[["set-session-storage-item","cookiePref","1"]],"ggsport.live":[["set-cookie","auth.userConsent","1","","reload","1"]],"gitbook.com":[["set-cookie","__gitbook_cookie_granted","no"]],"gitconnected.com":[["set-local-storage-item","201805-policy|accepted","1"]],"glassesusa.com":[["set-cookie","is_privacy_policy_shown","true"]],"globaldefensecorp.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"gmarket.co.kr":[["set","document.oncontextmenu","noopFunc"],["set","document.onmousedown","noopFunc"]],"gmr-foto.at":[["set-cookie","fmalertcookies","true"]],"gnome-look.org":[["rmnt","script","btnHtml"],["nano-stb","count"]],"gobiernodecanarias.org":[["set-cookie","cookies_analitycs_allowed","true"]],"goeltzschtal-reisen.de":[["set","realCookieBanner","undefined"]],"goindex.lt":[["set-cookie","user_cookie_consent","1"]],"golfschwung.com":[["set-cookie","Consent","0"]],"gostanford.com":[["set-local-storage-item","cookies-accept","true"]],"gpiaaf.gov.pt":[["set-cookie","WarningsAndPolicyAccepted","true"]],"gptgirlfriend.online":[["set-local-storage-item","cookie-consent","1"]],"grass.io":[["set-local-storage-item","acceptedAllCookies","false"],["set-local-storage-item","cookiePreference","essential"]],"griffbereit24.de":[["set-cookie","consent_essential","allow"]],"grizly.ro":[["set-cookie","mCs-chk","1"]],"grupo-loma.com":[["set","realCookieBanner","undefined"]],"guide-du-perigord.com":[["set-cookie","cookieConsent-2023-03","false"]],"guitarplayer.com":[["set-cookie","FTR_Article_PageView","2"]],"hannahgraaf.com":[["set-cookie","confirmed-cookies","1","","reload","1"]],"haus-ladn.de":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_stripe","allow"]],"haustier-berater.de":[["set-cookie","CookieConsent","1"]],"hawkinsforge.co.uk":[["set-cookie","ce-cookie","N"]],"healthera.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"hebrew4christians.com":[["acs","document.oncontextmenu"],["ra","onselectstart|ondragstart"],["rmnt","script","disableSelection"]],"hello.one":[["set-cookie","acknowledged","true"]],"hfm-frankfurt.de":[["set-cookie","CookieConsent","1"]],"hikoki-powertools.eu":[["set-cookie","CookieConsent","mandatory"]],"hitado.de":[["set-cookie","cookie-preference","1"]],"hoermann-kleinwalsertal.de":[["set-cookie","Consent","0"]],"hoesjesdirect.nl":[["set-cookie","consent","denied"]],"holzkisten-fabrik.de":[["set","realCookieBanner","undefined"]],"homesandgardens.com":[["set-cookie","FTR_Article_PageView","2"]],"hotel-aigoual.com":[["rc","unreadable-display","","stay"]],"houmatoday.com":[["nostif","gnt_mol_oy"]],"htmlreference.io":[["nostif","()","2000"]],"htvb.org":[["set","realCookieBanner","undefined"]],"humo.be":[["set","checkPrivacyWall","noopFunc"]],"hutchnews.com":[["nostif","gnt_mol_oy"]],"hygiene-shop.eu":[["set-local-storage-item","cookiePreference","required"]],"iberostar.com":[["set-cookie","cookies_consent","true"]],"ibkrcampus.com":[["set-cookie","IBKRcampus_functional_optIn","true","","reload","1"],["set-cookie","IBKRcampus_gdpr_optOut","true"],["set-cookie","IBKRcampus_mkting_optOut","true"]],"icy-veins.com":[["rmnt","script","reviveScroll","excludes","self.__next"],["nostif","premium"]],"ielts.com.au":[["set-cookie","acceptCookie","true"]],"ige.ch":[["set-cookie","cb-enabled","declined"]],"igvm.de":[["set","realCookieBanner","undefined"]],"ilife97.com":[["aopw","document.oncontextmenu"],["aopw","document.ondragstart"]],"img.ly":[["set-cookie","privacySettings","1"]],"immersivelabs.online":[["set-cookie","cookie_preferences_set","true"]],"imooc.com":[["aopr","addCopyright"]],"indeonline.com":[["nostif","gnt_mol_oy"]],"independentmail.com":[["nostif","gnt_mol_oy"]],"indianhealthyrecipes.com":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["set","disableSelection","undefined"]],"inds.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"infokik.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"]],"ing.nl":[["set-cookie","cookiepref","1"]],"innohome.com":[["rc","wcc-popup-overflow","body","stay"]],"inquirer.net":[["acs","document.createElement","admiral"]],"isolarcloud.com":[["set-local-storage-item","ISOLAR_COOKIE_VISIT","1"]],"ivfp.de":[["set","realCookieBanner","undefined"]],"jacquieetmichel.net":[["aopr","document.oncontextmenu"]],"jeux.fr":[["set-cookie","OptanonAlertBoxClosed","true"]],"jeyran.net":[["acs","document.oncontextmenu"]],"jobcenter-ge.de":[["set-cookie","cookie_consent","denied"],["set-cookie","personalization_consent","denied"]],"jpralves.net":[["set-cookie","cookiewarning","Y"]],"justinguitar.com":[["set-local-storage-item","cookie-consent-status","closed"]],"kamera-express.nl":[["set-cookie","cookie_accepted","false","","reload","1"]],"kanjukulive.com":[["ra","ondragstart|oncontextmenu"]],"katapult-shop.de":[["set-cookie","cookie-preference","1"]],"kb.uconn.edu":[["set-cookie","required-cookies-acknowledged","2"]],"keengamer.com":[["aopr","__cmpGdprAppliesGlobally"]],"kektura.hu":[["set-cookie","cookie_consent_","1"]],"kelkay.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"kijiji.ca":[["set-cookie","hdcab","true"]],"kinemaster.com":[["set-cookie","kinemaster-cookieconstent","1"]],"kingp2p.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"klubnichka.live":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"kokku-online.de":[["set-local-storage-item","cookiesMin","1"]],"komm-mit.com":[["set","realCookieBanner","undefined"]],"kozijnen-hijnekamp.nl":[["set-cookie","consent-cookies","1"]],"kraftwerk.co.at":[["set-cookie","kraftwerkCookiePolicyState","1"]],"ktchng.com":[["set-cookie","cb-enabled","accepted"]],"kuechenboerse.de":[["set","realCookieBanner","undefined"]],"kupbilecik.com":[["set-cookie","allow-cookie","1"],["set-cookie","cookie-functional","1"]],"kymppikatsastus.fi":[["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","viewed_cookie_policy","yes"],["set-cookie","cookielawinfo-checkbox-toiminnalliset-evasteet","yes"]],"kyoceradocumentsolutions.com.br":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.ru":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kzvb.de":[["set-cookie","cookie-optin","true"]],"lazyinvestors.de":[["set","realCookieBanner","undefined"]],"ldnews.com":[["nostif","gnt_mol_oy"]],"leafly.com":[["set-cookie","acceptsAdvertisingCookies","false"],["set-local-storage-item","viewedCookieConsent","true"]],"ledenicheur.fr":[["set-cookie","privacy_settings","1"]],"legacy.com":[["acs","document.createElement","admiral"],["acs","document.getElementsByTagName","admiral"]],"legionprogramas.org":[["acs","document.oncontextmenu"],["aopw","document.onselectstart"]],"leki.com":[["set-cookie","cookie-preference","1"]],"lendagames.com":[["acs","document.onkeydown"]],"leoschilbach.de":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_google_analytics","deny","","reload","1"]],"lepetitchevrier.ch":[["set-cookie","le-petit-chevrier-che-cookie-categories","essential"]],"levne-sauny.cz":[["set","realCookieBanner","undefined"]],"lgbtqnation.com":[["aopr","googletag"]],"libraries.kingston.gov.uk":[["set-cookie","luci_CC_21d2ab3d-5676-4eb9-aec5-7703f1e15058","true"],["set-cookie","luci_gaConsent_21d2ab3d-5676-4eb9-aec5-7703f1e15058","false"]],"liddread.com":[["rmnt","script","/wpcp|contextmenu|unselectable/"]],"lifestory.hu":[["ra","oncontextmenu"]],"live.b-c-e.us":[["aopr","alert"]],"liveonsat.com":[["ra","oncontextmenu"]],"livingetc.com":[["set-cookie","FTR_Article_PageView","2"]],"locafrique-sf.com":[["set","realCookieBanner","undefined"]],"longecity.org":[["set","abp","false"]],"lubbockonline.com":[["nostif","gnt_mol_oy"]],"lulus.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"lunas.pro":[["aeld","","mdp"]],"luvvoice.com":[["set-local-storage-item","cookieConsent","declined"]],"magyarorszag.hu":[["set-cookie","szuf_consent","0"]],"mahindraelectricsuv.com":[["set-cookie","consentTracking","false"]],"makerz.me":[["set-local-storage-item","makerz_allow_consentmgr","0"]],"mall.hr":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"mall.sk":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"mandarinstone.com":[["set-cookie","ud_accept_analytical_cookies","no"],["set-cookie","ud_accept_marketing_cookies","no"]],"mangaschan.net":[["aeld","contextmenu"]],"mansfieldnewsjournal.com":[["nostif","gnt_mol_oy"]],"manutd.com":[["set-cookie","userConsentCookiePolicy","off"]],"map.blitzortung.org":[["set-cookie","CONSENT","1"]],"markets.com":[["set-cookie","cookies_configured","1"],["set-cookie","cookies_func","true"],["set-cookie","cookies_tracking","false"]],"mart.family.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"mastersintime.com":[["set-local-storage-item","cookieConsentV2","1"]],"maxkoch.de":[["set","realCookieBanner","undefined"]],"mcdonaldsneighbourhood.co.nz":[["set-cookie","ks_cookie_consent","1","","reload","1"]],"med1.de":[["aopr","_sp_._networkListenerData"]],"mediately.co":[["set-cookie","cookiesApproved20231","true"]],"medium.com":[["set-local-storage-item","201805-policy|accepted","1"]],"mein-osttirol.rocks":[["set-local-storage-item","ccb_contao_token_1","1"]],"melee.gg":[["set-cookie","AnalyticalCookie","false"],["set-cookie","CookieConsent","true","","reload","1"],["set-cookie","FunctionalCookie","true"]],"memoryhackers.org":[["acs","RegExp","googlebot"]],"meteovesti.ru":[["set-cookie","cookie_policy_notice_closed","1"]],"mgorsk.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"mgsm.pl":[["acs","checkAdblockBait"]],"microcenter.com":[["set-cookie","MicrocenterPrivacy","Accepted","","reload","1"]],"mighty-party.com":[["set-cookie","cookies-accepted","true"],["set-cookie","terms-accepted","true"]],"mikanews.de":[["set","realCookieBanner","undefined"]],"milforddailynews.com":[["nostif","gnt_mol_oy"]],"milvus.io":[["set-cookie","CookieConsent","false"]],"miniminiplus.pl":[["aeld","contextmenu","a"]],"mlb-korea.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"monroenews.com":[["nostif","gnt_mol_oy"]],"mora.hu":[["set-cookie","RBCookie-Alert","1"]],"morencius.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"morosedog.gitlab.io":[["set","checkAds","noopFunc"]],"moscow.shop.megafon.ru":[["set-cookie","cookie_toast","true"]],"mostream.us":[["rmnt","script","/devtoolsDetector|keyCode|preventDefault/"]],"motorsportreg.com":[["set-cookie","hasMadeConsentSelection","true","","","domain",".motorsportreg.com"],["set-cookie","hasMadeConsentSelectionGPC","true","","","domain",".motorsportreg.com"]],"mt-milcom.blogspot.com":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"mullgs.se":[["set-cookie","cc-accepted","2"]],"musicallyvideos.com":[["acs","document.oncontextmenu"]],"musixmatch.com":[["ra","oncontextmenu","body","complete"]],"mydashboard.getlivesmart.com":[["set-cookie","consentAsked","1"]],"myrewardspoints.com":[["set-cookie","MRP_cookiebanner","1"]],"naijagists.com":[["aopr","disableSelection"]],"namensetiketten.de":[["set-local-storage-item","load-scripts-v2","2"]],"napojecerveny.cz":[["set-cookie","DmCookiesAccepted","true"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"napos.cz":[["set-cookie","cmplz_banner-status","dismissed"]],"naturallycurly.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"naukridisha.in":[["acs","document.onselectstart"]],"near.ai":[["set-local-storage-item","cookies-preference","1"]],"neokyo.com":[["set-cookie","__cookie_consent","false"]],"neoseeker.com":[["nostif","whetherdo"],["rmnt","script","raptiveAdblockDetected"]],"neustift-stubaital.gv.at":[["set-cookie","ris_cookie_setting","1"]],"newpharma.de":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"news.kenmei.co":[["set-cookie","__gitbook_cookie_granted","no"]],"nft.chaingpt.org":[["set-cookie","cookies-consent","rejected"]],"nhif.bg":[["set-cookie","gdpr","1"]],"nicequest.com":[["set-cookie","nicequest_optIn","1"]],"niezawodny.pl":[["set-cookie","cookieConsent","0","","reload","1"]],"nightpoint.io":[["nofab"]],"nonesnanking.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"norlysplay.dk":[["set-cookie","cookies-accepted","true"]],"northgatevehiclehire.ie":[["set-cookie","cookieconsent_status","allow"]],"northumbriasport.com":[["set-cookie","cm_level","0"]],"novap.fr":[["set-cookie","amcookie_allowed","1"]],"npnews24.com":[["acs","document.oncontextmenu","document.onselectstart"]],"ntuplay.xyz":[["acs","document.onkeypress"]],"nucom.odoo.dev":[["set-cookie","website_cookies_bar","true"]],"nutrimedium.com":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"nwfdailynews.com":[["nostif","gnt_mol_oy"]],"nwslsoccer.com":[["set-cookie","AcceptedCookies","1"]],"nytimes.com":[["set","_adBlockCheck","true"],["set","navigator.storage.estimate","undefined"]],"oceanof-games.com":[["set","document.oncontextmenu","undefined"],["aopr","document.onkeydown"],["aopr","document.onselectstart"],["aopr","disableSelection"]],"octopusenergy.it":[["set-cookie","dismissCookieBanner","true"]],"oculyze.net":[["set","realCookieBanner","undefined"]],"oggiscuola.com":[["acs","jQuery","overlay"]],"ogladajanime.pl":[["set-cookie","accepted","true","","reload","1"]],"ojskate.com":[["set-cookie","cookie-preference","1"]],"olx.com.br":[["set-local-storage-item","open_modal_update_policy","1"]],"olx.kz":[["set-cookie","cookieBarSeen","true"]],"omviajesyrelatos.com":[["set-cookie","cmplz_banner-status","dismissed"]],"one.oregon.gov":[["aeld","contextmenu","event.dispatch"],["ra","onpaste","input[onpaste=\"return false\"]","complete"]],"online-arzt.gtv-europe.com":[["set-cookie","cookies-essential","true","","reload","1"]],"onlinepenztarca.hu":[["set-local-storage-item","felhasznalo_cookie_preferencia","0"]],"onlineradiobox.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"ontvtime-tv.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"opayweb.com":[["set-cookie","CookieConsent","false"]],"open24.ee":[["set-local-storage-item","df-cookies-allowed","true"]],"opendoors.fi":[["set-cookie","cmplz_banner-status","dismissed"],["set-cookie","cmplz_marketing","allow"],["set-cookie","cmplz_preferences","allow"]],"order-order.com":[["acs","document.createElement","admiral"]],"oricon.co.jp":[["ra","oncontextmenu|onselectstart|onmousedown",".all-lyrics[oncontextmenu]","complete"],["aeld","dragstart","","elements",".all-lyrics"]],"orszak.org":[["set-cookie","privacy_popup","true","","reload","1"]],"ovation.ca":[["set-cookie","ovation.v20231006.essentials","1"],["set-cookie","ovation.v20231006.essentials","1","","reload","1"]],"oxax.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"pagesix.com":[["aopr","googletag.cmd"]],"paidiatreio.gr":[["acs","document.oncontextmenu"],["acs","document.addEventListener","copy"]],"pal-item.com":[["nostif","gnt_mol_oy"]],"pancreas.ro":[["aopw","document.onkeydown"]],"paplanvilag.hu":[["set","cookie_alert_overlay","noopFunc"]],"parfum-zentrum.de":[["set-cookie","cookie-bar","0"]],"parsatv.com":[["rmnt","script",".offsetHeight"]],"patchbox.com":[["set","realCookieBanner","undefined"]],"paydirekt.de":[["set-cookie","paydirektCookieAllowed","false"]],"payworks.ca":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"peachy.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"pentagon-group.co.uk":[["set-cookie","cookieAccepted","1","","reload","1"]],"pepperstone.com":[["set-cookie","acceptedCookies","checked"]],"permainan.co.id":[["set-cookie","OptanonAlertBoxClosed","true"]],"petcity.lt":[["set-cookie","_consent_analytics","denied"],["set-cookie","_consent_marketing","denied"],["set-cookie","_consent_personalization","denied"],["set-cookie","gdpr_cookie_token","1"]],"pflegepitztal.at":[["set-cookie","ris_cookie_setting","1"]],"phrasemix.com":[["acs","$","showEmailNewsletterModal"]],"piecesauto.fr":[["aeld","mousedown","function(t)"]],"playbill.com":[["nostif","offsetHeight"]],"playcentral.de":[["set","realCookieBanner","undefined"]],"plusportal.hr":[["set-cookie","PLUSPORTAL_COOKIES_ACCEPT","1"]],"pmi.org":[["set-local-storage-item","CookieDisclosure-/","true"]],"pogdesign.co.uk":[["nostif","clientHeight"]],"pokeos.com":[["nostif","pro-modal"],["no-fetch-if","doubleclick"]],"polagriparts.pl":[["aeld","/^(?:contextmenu|copy)$/"],["aopr","document.onkeydown"]],"polizei-beratung.de":[["set-cookie","cookie_consent","true"],["set-cookie","propk-googlemaps-permanent","true"]],"portableapps.com":[["nostif","innerHTML"]],"portalportuario.cl":[["aopr","addLink"]],"posterstore.ca":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.es":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.fr":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.nz":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.pl":[["set-cookie","synapse-cookie-preferences-set","true"]],"prace.cz":[["rc","show--consent","body","stay"]],"premierinn.com":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"premium-hifi-shop.com":[["set-cookie","cookieDeclined","1"]],"priberam.org":[["aopr","document.documentElement.oncopy"]],"pricehubble.com":[["set-cookie","cookieBannerAccepted","1","","reload","1"]],"primariasector2.ro":[["rmnt","script",".blockContextMenu"]],"prodyna.com":[["set-cookie","cky-action","yes"],["set-cookie","cookieyes-functional","no"],["set-cookie","cookieyes-necessary","yes"],["set-cookie","cookieyes-other","no"]],"proficient.fi":[["set-cookie","AcceptKeksit","0","","reload","1"]],"profiel.de":[["set","realCookieBanner","undefined"]],"projectenglish.com.pl":[["set-cookie","analitics_cookies","0"],["set-cookie","privacy_settings","1"]],"protos.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-non-necessary","no"]],"pruegeltorten.tirol":[["set-cookie","cookie-preference","1"]],"psbank.ru":[["set-cookie","cookie-consent","true"]],"pushsquare.com":[["aopr","_sp_._networkListenerData"]],"puzzle-futoshiki.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-light-up.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-lits.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-loop.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-minesweeper.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-tents.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-yin-yang.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.ch":[["set-cookie","puzzleyou-ch_cookies_consent_allowlist","0","","reload","1"]],"qatarairways.com":[["set-cookie","accepted_functional","yes"],["set-cookie","accepted_marketing","no"],["set-cookie","allow_the_cookie","yes"],["set-cookie","cookie_visited","true"],["set-cookie","drcookie","true"]],"qrcode.best":[["nostif","ad_blocker_detector_modal"]],"qualityfilehosting.com":[["aopw","disableEnterKey"],["acs","document.ondragstart","document.oncontextmenu"]],"quebueno.es":[["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"queenandcastlekenilworth.co.uk":[["set-cookie","ce-cookie","N"]],"queensfishandchipsgloucester.co.uk":[["set-cookie","COOKIES_ACCEPTED","true"]],"r-ulybka.ru":[["set-local-storage-item","cookieAndRecommendsAgreement","true"]],"radyofenomen.com":[["set-cookie","isSiteCookieReviewed","0","","reload","1"]],"rapidonline.com":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"rappjmed.ch":[["set-cookie","cookie_notice_accepted","true"]],"raspberrypi.dk":[["set-cookie","cs_viewed_cookie_policy","yes"]],"rating.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"ratschings.eu":[["set-cookie","ris_cookie_setting","1"]],"rd-s.live":[["aeld","contextmenu"]],"rdr.ucl.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"readcomicsonline.lol":[["nano-stb","e=>e-1"]],"readly.com":[["set-cookie","ReadlyCookieConsent","7","","reload","1"]],"reclutamiento.defensa.gob.es":[["set-cookie","MDEF_COOKIE_CONSENT_1595777","true","","reload","1"]],"record-courier.com":[["nostif","gnt_mol_oy"]],"reelcinemas.co.uk":[["set-cookie","a1wcc","all"]],"refurbished.at":[["set-cookie","COOKIE_CONSENT","1","","reload","1"],["set-cookie","COOKIE_MARKETING","false"],["set-cookie","COOKIE_STATIC","false"]],"rega.ch":[["set-cookie","consentcookierega","0"]],"renebieder.com":[["set-local-storage-item","agreed-cookies","true"]],"republicadecuritiba.net":[["aopw","nocontext"]],"researchrepository.ul.ie":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"resourcepack.net":[["aopw","clickIE4"],["aopw","disableSelection"]],"reutte.at":[["set-cookie","ris_cookie_setting","1"]],"rgu.ac.uk":[["set-cookie","_rguCookieConsent","0"]],"ridee.bike":[["set","realCookieBanner","undefined"]],"ritten.eu":[["set-cookie","ris_cookie_setting","1"]],"rockpoint.cz":[["set-cookie","cookie-bar","0"]],"rolls-roycemotorcars.com":[["set-cookie","cookie-banner-us","rejected"]],"rp5.by":[["nostif","()","700"]],"rutele.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"rutv.pw":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"saalfelden.at":[["set-cookie","ris_cookie_setting","1"]],"safe.global":[["set-local-storage-item","SAFE__analyticsPreference","false"],["set-local-storage-item","safe.global","false"]],"safetxt.net":[["acs","$","contextmenu"]],"salex.md":[["set-local-storage-item","sxCookie","true"]],"salsajeans.com":[["set-cookie","plg_cp","1","","reload","1"]],"samag-mt.com":[["set-cookie","cookieCheckTechnicalVal","true"],["set-cookie","cookieConsent","true"]],"sander-apotheken.de":[["set-cookie","cokiban","true"]],"sasa.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"sattledt.at":[["set-cookie","ris_cookie_setting","1"]],"schools.by":[["aopr","all_delere_cookie"]],"scitec.it":[["set-cookie","cookie_consent","1","","reload","1"]],"searchenginejournal.com":[["nostif","popup"]],"searchenginewatch.com":[["acs","jQuery","#sign-up-popup"]],"securityconference.org":[["set-cookie","MSC_Cookiebanner","false"]],"seriesperu.com":[["aeld","contextmenu","preventDefault"],["noeval-if","String.fromCharCode"],["rmnt","script","contextmenu"]],"serverstoplist.com":[["set-cookie","STAgreement","1"]],"serwis-zamkow.com":[["acs","document.oncontextmenu"]],"shop.3m.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shopping.dradvice.asia":[["set-cookie","allowGetPrivacyInfo","true"]],"sicherheitstraining24.de":[["set-cookie","consented_cookie_types","required"]],"siliconinvestor.com":[["acs","document.getElementById","undefined"]],"silvini.sk":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"simpl.rent":[["set-cookie","acsr","1"]],"sistemacomponentes.com.br":[["set-cookie","acceptCookies","1"]],"skandynawiainfo.pl":[["aeld","","mdp"]],"sketch.metademolab.com":[["set-cookie","animated_drawings","true"]],"skidrowreloaded.com":[["rmnt","script","copyprotect"]],"sklep-agroland.pl":[["aeld","/^(?:contextmenu|dragstart|selectstart)$/"]],"skouras-carpets.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"skuola.net":[["aeld","/contextmenu|copy/"]],"smalley.com":[["ra","onselectstart|oncopy","body","complete"]],"smartfilmbase.se":[["set-cookie","allow-all","0","","reload","1"],["set-cookie","analysis-cookies","0"],["set-cookie","user-cookies-set","1"]],"snowcrows.com":[["rmnt","script",".onerror"]],"sochi1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"soulbounce.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"southbendtribune.com":[["nostif","gnt_mol_oy"]],"splendid-internet.de":[["set","realCookieBanner","undefined"]],"sportboerse-shop.de":[["set-cookie","biloba-open-ai-dsgvo-consent","","declined"],["set-cookie","cookie-preference","1"]],"sportsnaut.com":[["aopr","__cmpGdprAppliesGlobally"]],"sportsnet.ca":[["aopr","uxGuid"]],"sportsstation.id":[["set-cookie","acceptConsent","true"]],"springfieldspringfield.co.uk":[["aopr","addLink"]],"sseriga.edu":[["set-cookie","user_gave_consent","1"],["set-cookie","user_gave_consent_new","1"]],"stagewise.io":[["set-cookie","stagewise-cookie-consent","denied"]],"steamcollector.com":[["acs","document.querySelectorAll","adblock"]],"steptalk.org":[["nostif","()","3000"]],"stevenspointjournal.com":[["nostif","gnt_mol_oy"]],"stgeorgeanddragon.co.uk":[["set-cookie","ce-cookie","N"]],"stifler.ro":[["rmnt","script","contextmenu"]],"store-philips.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"store.ubisoft.com":[["set-cookie","UBI_PRIVACY_POLICY_ACCEPTED","true"],["set-cookie","UBI_PRIVACY_VID_OPTOUT","false"]],"streamsb.net":[["acs","check","debugger"],["nosiif","_0x"]],"stricken-online.com":[["set","realCookieBanner","undefined"]],"strkng.com":[["set-cookie","strkng_cookieconsent","1"]],"strmix.com":[["set-cookie","CookieConsent","Necessary","","reload","1"]],"stroga-festival.de":[["set-cookie","third-party","required","","reload","1"]],"stw-langenfeld.de":[["set","realCookieBanner","undefined"]],"sugi-net.jp":[["set-cookie","cookie-use-accept","false"]],"superset.sh":[["set-local-storage-item","superset-analytics-consent","denied"]],"suzylu.co.uk":[["aeld","contextmenu"]],"svenskhalsokost.se":[["set-cookie","cookieaccept","required","","reload","1"]],"taketaketake.com":[["set-local-storage-item","takex3.cookie-consent","declined"]],"tallahassee.com":[["nostif","gnt_mol_oy"]],"tchadcarriere.com":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"technicpack.net":[["acs","document.createElement","admiral"]],"technik-hauptstadt.de":[["set","realCookieBanner","undefined"]],"technikmuseum.berlin":[["set-local-storage-item","technikmuseum-required-enabled","true"]],"tecmundo.net":[["aopr","alert"]],"teilzeitreisender.de":[["set","realCookieBanner","undefined"]],"telegram.com":[["nostif","gnt_mol_oy"]],"telepizza.es":[["set-cookie","AcceptAnalyticsCookies","false"],["set-cookie","AcceptFunctionalCookies","true"],["set-cookie","AcceptNonFunctionalCookies","false"]],"telepizza.pt":[["set-cookie","AcceptAnalyticsCookies","false"],["set-cookie","AcceptFunctionalCookies","true"],["set-cookie","AcceptNonFunctionalCookies","false"]],"telli.dpd.ee":[["set-cookie","__cookie_consent","false"]],"teodor.bg":[["set-cookie","amcookie_allowed","1"]],"tercihiniyap.net":[["ra","oncontextmenu|onselectstart|ondragstart"]],"tesa.com":[["set-cookie","cookies_informed","true"]],"textcleaner.net":[["no-fetch-if","googlesyndication"]],"the-daily-record.com":[["nostif","gnt_mol_oy"]],"the-leader.com":[["nostif","gnt_mol_oy"]],"theflixertv.to":[["nosiif","_0x"]],"thegatewaypundit.com":[["aeld","","adtoniq"]],"thegeekfreaks.de":[["set","realCookieBanner","undefined"]],"thegreenmantrumpington.com":[["set-cookie","ce-cookie","N"]],"thehawkeye.com":[["nostif","gnt_mol_oy"]],"thehouseofportable.com":[["aeld","/contextmenu|selectstart/"]],"thehub21.com":[["set-local-storage-item","hub-cp","true"]],"thememazing.com":[["aeld","","mdp"]],"thepalaceleeds.co.uk":[["set-cookie","ce-cookie","N"]],"thetowntalk.com":[["nostif","gnt_mol_oy"]],"thewashingtonhampstead.co.uk":[["set-cookie","ce-cookie","N"]],"theweathernetwork.com":[["set-cookie","pelm_consent","1"],["set-cookie","pelm_cstate","1"]],"thewhitehartpirbright.co.uk":[["set-cookie","ce-cookie","N"]],"thomasschlechter.de":[["set","realCookieBanner","undefined"]],"threads.com":[["set-session-storage-item","cb","1"]],"ti.com":[["set-cookie","explicit_consent","true"]],"ticket.io":[["set-cookie","privacyCookie","1","","reload","1"]],"tiefenthaler-landtechnik.de":[["set-cookie","allowTracking","false"]],"tierklinik-hofheim.de":[["set-cookie","cookie-hint-default","1"],["set-cookie","cookie-hint-statistik","0"],["set-cookie","cookie-hint-youtube","1"]],"tiesse.com":[["set","realCookieBanner","undefined"]],"timestelegram.com":[["nostif","gnt_mol_oy"]],"tipssehatcantik.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"tise.com":[["set-cookie","cookiePolicyAccepted","true"]],"tlaciarik.sk":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"toll.no":[["set-cookie","cookieConsent","rejected"]],"tonispizza-rastatt.de":[["set","realCookieBanner","undefined"]],"torinostoria.com":[["set","realCookieBanner","undefined"]],"tourismus-uckermark.de":[["set","realCookieBanner","undefined"]],"toyota.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","yes"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"toyotabank.pl":[["set-cookie","cookies","1000"]],"tracklock.gg":[["rmnt","script","reviveScroll","excludes","self.__next"]],"traefik.io":[["set-local-storage-item","cookie_consent","true"]],"translate.goog":[["aeld","/contextmenu|keyup|keydown/"]],"translit.ru":[["set-cookie","consent18","0","","reload","1"]],"trojmiasto.pl":[["aopr","adBlockDetected"]],"truckmall.cz":[["set-cookie","cookies_confirmed","1","","reload","1"]],"tsg6209weinheim.de":[["set","realCookieBanner","undefined"]],"tui.se":[["rc","no-scroll","body","stay"]],"tv-sport.de":[["set","realCookieBanner","undefined"]],"tv.bdix.app":[["set","jh_disabled_options_data","null"]],"tvn24.pl":[["aeld","contextmenu","a"]],"tvn24bis.pl":[["aeld","contextmenu","a"]],"tvtun.com":[["aeld","contextmenu"]],"tvtut.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvtv.ca":[["rmnt","script","reviveScroll","excludes","self.__next"]],"tvtv.us":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"twenga.nl":[["set-cookie","cookiewarning","1","","reload","1"]],"tz-bedarf.de":[["set-cookie","cookie-preference","1"]],"ubereats.com":[["set-cookie","uev2.gg","true"]],"uihtm.com":[["aeld","contextmenu"]],"uio.no":[["set-cookie","PrivacyPolicyOptOut","yes"]],"ukrainashop.com":[["aeld","contextmenu"]],"underground-england.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"united-internet.de":[["set-cookie","cookieconsent_status","allow"]],"uptimeside.webnode.gr":[["acs","document.oncontextmenu"]],"urbania.ca":[["set-cookie","consent_given","true"]],"urbex-datenbank.ch":[["set-cookie","pum-1182","true"]],"uslsoftware.com":[["aeld","contextmenu"]],"utaten.com":[["ra","oncontextmenu|onselectstart",".lyricBody[oncontextmenu]","complete"]],"v-o-e-unblock.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"valostore.fi":[["set-local-storage-item","cookieConsent","necessary"]],"variaine.fi":[["set-cookie","GBaseConsent","0"],["set-cookie","GBaseConsentToAnalytics","0"]],"vcstar.com":[["nostif","gnt_mol_oy"]],"veed.io":[["set-local-storage-item","trainingDataConsent","true"]],"velicu.eu":[["acs","document.oncontextmenu"]],"venea.net":[["aeld","","ads"]],"venom.foundation":[["set-local-storage-item","terms","accepted"]],"vert.eco":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"vidstream.pro":[["aost","console.clear"]],"viel-unterwegs.de":[["set","realCookieBanner","undefined"]],"villabassa.eu":[["set-cookie","ris_cookie_setting","1"]],"vinothekwaespi.ch":[["set-cookie","accept-selected-cookies","true","","reload","1"],["set-cookie","cookiePreferences","true"],["set-cookie","necessary","true"]],"virginexperiencedays.co.uk":[["set-local-storage-item","cookie-consent","true"]],"visaliatimesdelta.com":[["nostif","gnt_mol_oy"]],"visconti.partners":[["set","realCookieBanner","undefined"]],"visionias.net":[["acs","$","contextmenu"]],"visitmedia.de":[["set","realCookieBanner","undefined"]],"vivamanchester.co.uk":[["set-cookie","complianceCookie","true"],["set-cookie","gaconsent","true"]],"vox.com":[["nostif","adsBlocked"]],"warning.or.kr":[["ra","oncontextmenu"]],"wasza-farma.pl":[["ra","oncontextmenu"]],"watchx.top":[["rmnt","script","devtoolsDetector"],["set","devtoolsDetector","{}"]],"wausaudailyherald.com":[["nostif","gnt_mol_oy"]],"weekend.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"wetu.com":[["rc","with-featherlight","","stay"]],"whowhatwear.com":[["set-cookie","FTR_Article_PageView","2"]],"wobit.com.pl":[["set-cookie","accepted_cookies","functional","","reload","1"]],"workhouses.org.uk":[["acs","document.oncontextmenu"]],"wp-ninjas.de":[["set","realCookieBanner","undefined"]],"wpc-shop24.de":[["set-cookie","cookie-preference","1"]],"www-daftarharga.blogspot.com":[["acs","document.oncontextmenu"],["aeld","","keyCode"]],"www-devonlive-com.translate.goog":[["rmnt","script","loc.hostname"]],"www-essexlive-news.translate.goog":[["rmnt","script","loc.hostname"]],"www-kentlive-news.translate.goog":[["rmnt","script","loc.hostname"]],"www-themirror-com.translate.goog":[["rmnt","script","loc.hostname"]],"www.reddit.com":[["nostif","{e(n,t,r)}","30000"]],"wzamrani.com":[["aeld","contextmenu"]],"xe.gr":[["nostif","modal"]],"xfce-look.org":[["rmnt","script","btnHtml"],["nano-stb","count"]],"xham.live":[["set-cookie","cookie_accept","1"]],"xhplanet1.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xm.com":[["set-cookie","xmck_analytical","0"],["set-cookie","xmck_functional","1"],["set-cookie","xmck_popupShown","1"],["set-cookie","xmck_preferences","0"],["set-cookie","xmck_promotional","0"]],"xxxtv.us":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"yaledailynews.com":[["acs","$","undefined"]],"yamibo.com":[["aeld","/contextmenu|selectstart|select|copy|dragstart/"]],"ydr.com":[["nostif","gnt_mol_oy"]],"yellow.systems":[["set-local-storage-item","isCookiesNotificationHidden","true"]],"yhocdata.com":[["aopr","contentprotector"]],"ylojarvenuutiset.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"yoomoney.ru":[["set-cookie","has_accepted_gdpr","1"]],"zanesvilletimesrecorder.com":[["nostif","gnt_mol_oy"]],"zerogpt.net":[["nostif","adsbygoogle"]],"zeustranslations.blogspot.com":[["acs","alert","location.href"]],"ziare.com":[["aeld","copy"]],"ziperto.com":[["nosiif","visibility","1000"]],"zora.co":[["set-local-storage-item","zora-discover-14-03-23","false"]],"zsti.zsti.civ.pl":[["aeld","contextmenu","preventDefault"]],"zurzeit.at":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
