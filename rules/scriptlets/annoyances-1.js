/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"173.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"1blu.de":[["set-cookie","cookieConfig","1"]],"30sensualizeexpression.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"3xyaoi.com":[["acs","document.oncontextmenu"],["aeld","contextmenu","preventDefault"]],"500ish.com":[["set-local-storage-item","201805-policy|accepted","1"]],"51.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"5asec.ch":[["set-cookie","cookie-agreed","2"]],"5sim.net":[["set-local-storage-item","isCookiesAccepted","true"]],"7745.by":[["set-cookie","cookies_accepted","0"],["set-cookie","stat_cookies_accepted","0"],["set-cookie","visual_cookies_accepted","0"]],"99bitcoins.com":[["nostif","ThriveGlobal"]],"aa.com":[["set-cookie","cookie_banner","closed"]],"abs-cbn.com":[["set-local-storage-item","uninavIsAgreeCookie","true"]],"acb.com":[["set-cookie","consent__marketing","false"],["set-cookie","consent__necessary","false"],["set-cookie","consent__preferences","false"],["set-cookie","consent__statistics","false"]],"accace.ro":[["set","realCookieBanner","undefined"]],"accace.sk":[["set","realCookieBanner","undefined"]],"accgroup.vn":[["aeld","contextmenu"],["aopr","document.oncopy"]],"adidas.at":[["set-cookie","notice_preferences","2"]],"adidas.com.au":[["set-cookie","notice_preferences","2"]],"adidas.nl":[["set-cookie","notice_preferences","2"]],"adidas.se":[["set-cookie","notice_preferences","2"]],"admit-one.co.uk":[["set-cookie","a1wcc","all"]],"afoto.cz":[["set-cookie","cookie_consent","yes"]],"aha.or.at":[["set-cookie","cookieConsent_marketing","false"],["set-cookie","cookieConsent_required","true","","reload","1"]],"airbubu.com":[["set-cookie","allowGetPrivacyInfo","true"]],"ajanvaraus.idealinspect.fi":[["set-local-storage-item","cookieConsent","0"]],"akaanseutu.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"aliexpress.us":[["aeld","mouseleave"]],"alifragis.com.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"ally.com":[["set-cookie","allyccb","OK"]],"alohabrowser.com":[["set-cookie","acceptCookie","1"]],"alte-sennerei.com":[["set-cookie","Consent","0"]],"amd.by":[["set-cookie","cookie_consent","1","","reload","1"]],"americasvoice.news":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"ananda-yoga.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"anastore.com":[["set-cookie","cok","1","","reload","1"]],"android1pro.com":[["rmnt","script","/contextmenu|wpcp/"]],"androidpolice.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"animaldiversity.org":[["set-cookie","cookie-settings","reject"]],"anonpaste.pw":[["set-local-storage-item","cookieBanner","true"]],"antena1.live":[["aeld","contextmenu"]],"app.bionic-reading.com":[["set-local-storage-item","accept_all_cookies","false"]],"appimagehub.com":[["rmnt","script","btnHtml"],["nano-stb","count"]],"arbeitsagentur.de":[["set-cookie","cookie_consent","denied"],["set-cookie","marketing_consent","denied"],["set-cookie","personalization_consent","denied"]],"arbrikadrex.de":[["set-cookie","mnd-cookie-accepted-wwwarbrikadrexde1","1"]],"arcadiumlithium.com":[["set-cookie","terms_conditions_web","true"]],"arccinema.co.uk":[["set-cookie","a1wcc","all"]],"argentos.barcelona":[["set-cookie","promptCookies","1"]],"artemide.com":[["set-cookie","amdcookiechoice","necessary"]],"articlesmania.me":[["ra","oncontextmenu"],["acs","document.onkeydown"]],"asdatyres.co.uk":[["set-cookie","all_cookies_allowed","1","","reload","1"],["set-cookie","required_cookies_set","1"]],"ashleyfurniture.com":[["set-local-storage-item","QMOptIn","false"]],"asia2tv.com":[["aeld","contextmenu"]],"asko.com":[["set-cookie","cookieconsent_status_ESSENTIAL","ALLOW"]],"asko.fi":[["set-cookie","rc_given_consent_closed","1"]],"atman.pl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"audiovision.de":[["set","realCookieBanner","undefined"]],"auth.alipay.com":[["ra","oncopy|oncontextmenu|oncut|onpaste","input"]],"autismiliitto.fi":[["set-cookie","pwd-cookie-consent","0"],["set-cookie","show-cookie-banner","1"]],"autodude.no":[["set-local-storage-item","cookieConsent","necessary"]],"autoform.pl":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"autohaus-diefenbach-waldbrunn.de":[["set-cookie","hide-gdpr-bar","true"]],"autoride.cz":[["set-local-storage-item","cookies_marketing_consent","false"],["set-local-storage-item","cookies_necessary_consent","true"],["set-local-storage-item","cookies_statistics_consent","false"]],"avclub.com":[["set-cookie","pm_email_popup_status","1"]],"aventurainromania.ro":[["rmnt","script","document.oncontextmenu"]],"b4usa.com":[["aopw","adBlockDetected"]],"b757.info":[["set","realCookieBanner","undefined"]],"bafa.de":[["set-cookie","gsbbanner","0"]],"barracred.com.br":[["set","realCookieBanner","undefined"]],"bassicostruzioni.it":[["rc","wcc-popup-overflow","body","stay"]],"bassolsenergia.com":[["set-cookie","CookienatorConsent","false"]],"battlecreekenquirer.com":[["nostif","gnt_mol_oy"]],"bcorporation.net":[["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"bdcraft.net":[["set","adsbygoogle","null"]],"befestigungsfuchs.de":[["set-cookie","acris_cookie_acc","1","","reload","1"]],"bejson.com":[["set","killads","true"]],"belisse-beauty.de":[["set-cookie","cookie-preference","1"]],"bendigoadvertiser.com.au":[["nosiif","modal"]],"benefitcosmetics.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"benejamrefrigeracion.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"bere.co.uk":[["set-cookie","CookieConsent","Necessary","","reload","1"]],"bestrecipes.com.au":[["remove-cookie","br_mc"]],"bibliacatolica.com.br":[["aopr","getSelection"]],"bidup.amtrak.com":[["set-local-storage-item","pg-accept-cookies","true"]],"bigbank.nl":[["set-cookie","_ck_decision","1"]],"bigulnews.tv":[["aeld","/contextmenu|keydown|keyup|copy/"],["aopw","stopPrntScr"]],"bike-components.de":[["set-cookie","privacy-202605041328","0","","reload","1"]],"bilderberg-bellevue-dresden.de":[["set","realCookieBanner","undefined"]],"billerbeck.shop":[["set-cookie","cookie-preference","1"]],"bimedis.com":[["set-cookie","accept_cookies","1"]],"biona-shop.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"blackbullliquor.co.nz":[["set-cookie","visited","yes"]],"blog.whatsapp.com":[["rc","hasCookieBanner","body","stay"]],"bo.de":[["set-cookie","_reiff-consent-cookie","yes"]],"bonduelle.ru":[["set-cookie","cookie_locales","true"]],"bonobono.com":[["ra","oncontextmenu|ondragstart|onselectstart","body"]],"booking.weisse-flotte.de":[["set-cookie","functionality","false"],["set-cookie","performance","false"],["set-cookie","targeting","false"]],"booking2.reederei-hiddensee.de":[["set-cookie","functionality","false"],["set-cookie","performance","false"],["set-cookie","targeting","false"]],"branc.jp":[["set-cookie","inc_optin_never_see_again-popup-1","1"]],"braunau.at":[["set-cookie","ris_cookie_setting","1"]],"breitenwang.gv.at":[["set-cookie","ris_cookie_setting","1"]],"brewart.com":[["set-cookie","ag","y"]],"brunozimmer.de":[["set","realCookieBanner","undefined"]],"bsk-consulting.de":[["set","realCookieBanner","undefined"]],"btvnovinite.bg":[["aeld","contextmenu"]],"buidlbox.io":[["set-cookie","cookiesAccepted","true"]],"bw.vdk.de":[["set-local-storage-item","vdk-iframe-enabled","true"],["set-local-storage-item","vdk-required-enabled","true"],["set-local-storage-item","vdk-status","accept"]],"byhue-official.com":[["set-cookie","allowGetPrivacyInfo","true"]],"bylena.com":[["set-cookie","privacy_consent","1"]],"bzgbga.it":[["set-cookie","ris_cookie_setting","1"]],"bzgeisacktal.it":[["set-cookie","ris_cookie_setting","1"]],"c-parts.de":[["set","realCookieBanner","undefined"]],"cachecrawler.com":[["set-session-storage-item","hasConsent","1"],["set-session-storage-item","hasDsg","1"]],"caldaro.eu":[["set-cookie","ris_cookie_setting","1"]],"calorielijst.nl":[["aopw","clickIE"]],"camereliveromania.ro":[["rmnt","script","/wpcp|contextmenu/"]],"cancertherapyadvisor.com":[["remove-cookie","hmmet"]],"cantonrep.com":[["nostif","gnt_mol_oy"]],"casapariurilor.ro":[["set-cookie","cookie_layer","1"],["set-cookie","necessary","true"],["set-cookie","statistics","false"]],"ccsaltosciliar.it":[["set-cookie","ris_cookie_setting","1"]],"cdniptvpotok.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"cdntvmedia.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"cdramalove.com":[["acs","document.oncontextmenu"]],"cellcolabsclinical.com":[["set-cookie","functionalCookie","true"]],"celtadigital.com":[["aeld","contextmenu"]],"cetaf.org":[["set-cookie","surbma-gpga","no"]],"changelly.com":[["set-local-storage-item","SET_COOKIES_APPROVED","true"]],"charbelnemnom.com":[["aeld","/contextmenu|keydown/"]],"chicagotribune.com":[["rc","modal-open","","stay"]],"cifas.org.uk":[["set-cookie","cookiesetting","off"]],"cinemark.com.br":[["set-cookie","cookies_config","deny"]],"cinkciarz.pl":[["set-cookie","acceptedCookiesRemarketing","required"]],"citilink.ru":[["set-cookie","infoCookieUses","true"]],"citpekalongan.com":[["ra","oncontextmenu|ondragstart|onselectstart|onkeydown|onmousedown"]],"cleantechnica.com":[["set-cookie","ccpaconsent","1"]],"cms-wheels.com":[["set-cookie","cmswheels_cookie","no"]],"cocomanga.com":[["aeld","contextmenu"]],"coinbase.com":[["set-cookie","bytes_signup_modal_viewed","1"]],"coinsparty.com":[["aeld","contextmenu"]],"colourxh.site":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"columbiasportswear.co.uk":[["set-cookie","Columbia_UK_emailPopup","1"]],"columbiasportswear.es":[["set-cookie","Columbia_ES_emailPopup","1"]],"compra.fredolsen.es":[["set-cookie","cookiesDirective_","N"]],"comune.laces.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.naz-sciaves.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.santacristina.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.senales.bz.it":[["set-cookie","ris_cookie_setting","1"]],"conotoxia.com":[["set-cookie","acceptedCookiesRemarketing","required"]],"containerandpackaging.com":[["set-cookie","cookieBanner","true"]],"continentale-hannover.de":[["set","realCookieBanner","undefined"]],"cool-tv.net":[["rmnt","script",".preventDefault()","includes","contextmenu"]],"cormarcarpets.co.uk":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"coseleurope.eu":[["set-cookie","tiki_cookies_accepted","y","","reload","1"]],"cottonon.com":[["set-cookie","gdprPolicyAccepted","true"]],"cowcotland.com":[["rmnt","script","/adbl/i"]],"craftpip.github.io":[["nostif","adsok"]],"creativebloq.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"cronista.com":[["aeld","copy","replaceCopiedText"]],"crosig.hr":[["set-cookie","cookie_control_consent","true"],["set-cookie","cookie_control_enabled_cookies","required"]],"crunchyroll.com":[["set-cookie","_evidon_suppress_notification_cookie","1"]],"cryptofalka.hu":[["set-local-storage-item","cookieConsent","1"]],"csmonitor.com":[["set-local-storage-item","csm_unique_stories","$remove$"]],"culturealberta.com":[["set-session-storage-item","newsletter_shown","true"]],"customsclearance.net":[["set-cookie","analytic_cookies","0"],["set-cookie","functional_cookies","0"],["set-cookie","necessary_cookies","1"]],"cuvva.com":[["set-cookie","cuvva.app.website.cookie-policy.consent","1"]],"cyberalert.gr":[["acs","document.onkeydown","disableCTRL"]],"cyberfolks.ro":[["set-cookie","CF_GDPR_COOKIE_CONSENT_VIEWED","1"]],"czapek.com":[["set-cookie","website_cookies_bar","true"]],"d4armory.io":[["aopr","nitroAds"]],"dacapopress.com":[["set-cookie","cookie__newsletter_popup","1"],["set-cookie","cookie__privacy_policy","1"]],"daily-times.com":[["nostif","gnt_mol_oy"]],"darktranslation.com":[["aopw","stopPrntScr"]],"dasmagazin.de":[["set","realCookieBanner","undefined"]],"data.dtu.dk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"datamask.app":[["set-local-storage-item","cookie-permission","false"]],"daum.net":[["acs","document.oncontextmenu"],["ra","oncontextmenu"]],"de-sjove-jokes.dk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"desmoinesregister.com":[["nostif","gnt_mol_oy"]],"developer.ing.com":[["set-cookie","cookiepref","true"]],"digitalparking.city":[["set-local-storage-item","cookies-accepted","true"]],"dillingen.bayernlab.bayern.de":[["set-cookie","allowStats","0"],["set-cookie","hideBanner","1"]],"docs.chartbeat.com":[["set-cookie","__gitbook_cookie_granted","no"]],"doz.pl":[["set-cookie","consent-granted","1","","reload","1"],["set-cookie","consent-granted-version","23"]],"drei-franken-info.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"drinkstore.ie":[["set-cookie","isAnAdult","true"]],"drs.britishmuseum.org":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"duluthtrading.com":[["set-local-storage-item","emailLightBox","true"]],"dunkinextras.com":[["set-cookie","viewedCookieDisclaimer","true"]],"dvx.pe":[["set-local-storage-item","isCookiesAcceptedDVX","1"],["set-local-storage-item","isCookiesAcceptedNRTN","DENIED"]],"e-dojus.lv":[["set-cookie","pc234978122321234","1"]],"e-panigiria.gr":[["rmnt","script","oncontextmenu"]],"easyjet.com":[["set-cookie","EASYJET_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","EASYJET_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["set-cookie","EASYJET_ENSIGHTEN_PRIVACY_easyJet_Marketing","0"]],"ebilet.pl":[["set-cookie","eb_cookie_agree_0124","1"]],"eco-toimistotarvikkeet.fi":[["set-cookie","AcceptKeksit","0","","reload","1"]],"ecoints.com":[["set-local-storage-item","allowed_cookies","true"]],"edailybuzz.com":[["aeld","/contextmenu|copy/"]],"edinborocastlepub.co.uk":[["set-cookie","ce-cookie","N"]],"edurev.in":[["aopr","openOverlaySignup"],["acs","$","contextmenu"],["aeld","copy"]],"egopowerplus.com":[["set-cookie","newsletterModal","true"]],"ehlers-danlos.org":[["set-cookie","edsuk_coookie_control","4"],["set-cookie","edsuk_coookie_functional","1"]],"eikaforsikring.no":[["set-cookie","eika_consent_marketing","false"],["set-cookie","eika_consent_set","true"]],"electronicacerler.com":[["set-cookie","acepta_cookies_funcionales","1"],["set-cookie","acepta_cookies_obligatorias","1"],["set-cookie","acepta_cookies_personalizacion","1"]],"elektrikmen.com":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"eleven-sportswear.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"ellwoodcityledger.com":[["nostif","gnt_mol_oy"]],"emergetools.com":[["set-local-storage-item","cookie-consent","false"]],"emmi-caffelatte.com":[["set-cookie","cafe-latte-che-cookie-categories","essential"]],"emmi-industrie.com":[["set-cookie","emmi-che-cookie-categories","essential"]],"emmilangnau.ch":[["set-cookie","emmi-che-cookie-categories","essential"]],"empregoestagios.com":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"emturbovid.com":[["nostif","debugger"]],"energylevel.net":[["set-local-storage-item","cookie_consent","true"]],"englishlands.net":[["aopw","document.oncontextmenu"]],"epenta.sk":[["set-cookie","I6COMPARECOUNT","0"],["set-cookie","I6IISCOOKIECONSENT0","n","","reload","1"]],"epidemicsound.com":[["set-cookie","hasSeenCookieDisclosure","true"]],"epitesti.ro":[["aopw","clickIE4"],["aopw","document.oncontextmenu"],["ra","oncontextmenu|ondragstart|onselectstart"]],"epn.bz":[["set","ab","false"]],"epochtimes.nl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"epp.eu":[["set-cookie","eppcookie","1","","reload","1"],["set-cookie","performancecookie","0"]],"eramba.org":[["set-cookie","localConsent","false"]],"erco.com":[["set-session-storage-item","cookieMessageDisagree","true"]],"erp-up.de":[["set","realCookieBanner","undefined"]],"etherpad.org":[["set-cookie","cookiesAccepted","false"]],"ethiopianairlines.com":[["set-cookie","sf-tracking-consent","true","","","reload","1"]],"eurogamer.es":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"ev.io":[["rmnt","script","reviveScroll","excludes","self.__next"]],"examiner-enterprise.com":[["nostif","gnt_mol_oy"]],"eyefitu.com":[["set-local-storage-item","cookie","true"]],"facebook.com":[["rc","prevent-scrolling","body","stay"]],"falabella.com.co":[["set-cookie","isCookieLegalBannerSelected","true"]],"farmaline.be":[["set-session-storage-item","sae-conversational-consent-msg-closed","true"]],"fasteninfos.de":[["set","realCookieBanner","undefined"]],"feucht-obsttechnik.de":[["set","realCookieBanner","undefined"]],"fijiairways.com":[["set-local-storage-item","acceptedCookies","true"]],"fileditchvids.st":[["aeld","contextmenu"]],"fillup.pl":[["set-cookie","efile-cookiename-74","1"]],"film4e.com":[["acs","AudiosL10n"]],"filmora.wondershare.com":[["set-cookie","modalCloseDownloadCookie","2"]],"findmcserver.com":[["set-local-storage-item","allowCookies","allowed"]],"firestream.to":[["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"fittingcentermondaysunday.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"fixtout.fr":[["set-cookie","cookielaw_module","1","","reload","1"]],"flamecontrol.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"flashdumpfiles.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"flughafen.tips":[["set","realCookieBanner","undefined"]],"flugschule-hochries.de":[["set","realCookieBanner","undefined"]],"food.ndtv.com":[["set-cookie","ndtvfood_isSubscribed_elex_v1","no"]],"foodnetwork.com":[["set-local-storage-item","wbdLTP","true"]],"forbesafrica.com":[["set-cookie","forbesConsentCookie","true"]],"ford-behrend-waren.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-bischoff-neumuenster.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-haefner-und-strunk-kassel.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-hartmann-rastatt.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-jochem-stingbert.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-sg-goeppingen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-strunk-koeln.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-wahl-fritzlar.de":[["set-cookie","hide-gdpr-bar","true"]],"ford.de":[["set-cookie","cookieAcknowledged","true"]],"ford.pt":[["set-cookie","cookieAcknowledged","true"]],"format.bike":[["set-local-storage-item","user_cookie","1"]],"foryouehealth.de":[["set-cookie","amcookie_allowed","1"]],"foxtrail.fjallraven.com":[["set-cookie","fjallravenCookie","1"]],"foxvalleyfoodie.com":[["aopr","__cmpGdprAppliesGlobally"]],"frag-machiavelli.de":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"francetvpub.fr":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"francis-bacon.com":[["aeld","contextmenu","return\"undefined\""]],"freshis.com":[["set-cookie","accept_cookies","accepted"]],"friendlyatheist.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"fromsmash.com":[["set-cookie","_sucs","true"]],"frontieresmedia.fr":[["set-cookie","frtnrs_consent","true"]],"ftccollege.edu":[["set-cookie","wow-modal-id-1","yes"]],"fups.com":[["set-cookie","AllowCookies","true"],["set-cookie","SeenCookieBar","true"]],"fz-juelich.de":[["set-cookie","confirm_cookies","1"]],"gaestehaus-schlegel.de":[["set-cookie","Consent","0"]],"galaxykayaks.ro":[["set-cookie","cookies_and_content_security_policy","false"]],"gallmeister.fr":[["set-cookie","eg_asked","1"]],"gamefile.news":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"gamemaker.io":[["set-cookie","yoyocookieconsent_viewed","true"]],"gamepro.de":[["set","Didomi","noopFunc"]],"geizhals.de":[["set-local-storage-item","dnt_message_shown","1"]],"gem2go.info":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.pfalzen.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.pfitsch.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.prags.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.schlanders.bz.it":[["set-cookie","ris_cookie_setting","1"]],"geotips.net":[["set","document.oncontextmenu","null"],["aeld","/keyup|keydown/","wpcc"],["set","onload","null"]],"gesundheitsmanufaktur.de":[["set-local-storage-item","cookiePreference","required"],["set-local-storage-item","df-cookies-allowed","true"]],"glassesusa.com":[["set-cookie","is_privacy_policy_shown","true"]],"glose.com":[["set-local-storage-item","hasAcceptedCookies","true"]],"gosanangelo.com":[["nostif","gnt_mol_oy"]],"gosch.de":[["set","realCookieBanner","undefined"]],"goupstate.com":[["nostif","gnt_mol_oy"]],"gpd-nordost-onlineberatung.de":[["rc","dp--cookie-consent","body","stay"]],"grandwinespirits.com":[["set-cookie","age_verification","1"]],"grapengrain.com.au":[["set-cookie","age-checked","1"]],"graphy.com":[["set-cookie","has_accepted_cookies","true"]],"green-24.de":[["set-cookie","cf4212_cn","1"]],"griffbereit24.de":[["set-cookie","consent_essential","allow"]],"guide-du-perigord.com":[["set-cookie","cookieConsent-2023-03","false"]],"gulfliquorsmiami.com":[["set-local-storage-item","_CityHiveSites_AgeCheck_Checked","yes"]],"gutshaus-neuendorf-usedom.de":[["set","realCookieBanner","undefined"]],"gymnasium-hochdahl.de":[["set","realCookieBanner","undefined"]],"habuteru.com":[["aopw","document.oncontextmenu"]],"haleon-gebro.at":[["set-local-storage-item","cookiebanner:extMedia","false"],["set-local-storage-item","cookiebanner:statistic","false"]],"hayatbilgileri.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"hellotv.nl":[["set-cookie","cookieConsentClosed","true"]],"help.sap.com":[["set-cookie","saphpbypassnondoc","true"]],"heraldnews.com":[["nostif","gnt_mol_oy"]],"hfm-frankfurt.de":[["set-cookie","CookieConsent","1"]],"historianet.fi":[["set","cicc.cookie_cat_statistic","true"],["set","cicc.cookie_cat_functional","true"],["set","cicc.cookie_cat_marketing","true"]],"holzhof24.de":[["set-cookie","cookie-preference","1"]],"holzkern.com":[["set-cookie","amcookie_allowed","1"]],"homegymreview.co.uk":[["rmnt","script","nocontextmenu"]],"homesandgardens.com":[["set-cookie","FTR_Article_PageView","2"]],"horizonte.com":[["set","realCookieBanner","undefined"]],"hostfly.by":[["set-cookie","www_hostfly_by:443-s1-CookiePRO_cancel","1"]],"howstuffworks.com":[["set-cookie","gdpr_opt_in","1"]],"hs-soft.com":[["set","realCookieBanner","undefined"]],"huisartsenpraktijkdoorn.nl":[["set-cookie","cookies-marketing","N"]],"hulnews.top":[["acs","document.oncontextmenu"],["aopw","stopPrntScr"]],"hume.ai":[["set-cookie","cookieBar-cookies-accepted","true"]],"ickonic.com":[["set-local-storage-item","consentMode","1"]],"icourse163.org":[["aopr","document.oncontextmenu"],["aopr","document.oncopy"],["acs","document.onkeydown"]],"ideas0419.com":[["acs","document.oncontextmenu"]],"ilife97.com":[["aopw","document.oncontextmenu"],["aopw","document.ondragstart"]],"ilovefreesoftware.com":[["aost","getSelection","quoty-public"]],"ilsole24ore.com":[["aeld","mouseleave"]],"imagetwistcams.com":[["set-cookie","isVisitorsAgreementAccepted","1","","reload","1"]],"img.ly":[["set-cookie","privacySettings","1"]],"impotsurlerevenu.org":[["aopr","alerte_declanchee"]],"infodifesa.it":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"insidetrading.de":[["set","realCookieBanner","undefined"]],"instantoffices.com":[["set-cookie","cookieConsent","1"]],"intermedicom-gmbh.jimdosite.com":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_google_maps","allow"]],"interquestliquor.com":[["set-cookie","age_verification","1"]],"intunedhq.com":[["set-local-storage-item","cookie-consent","rejected"]],"inverse.com":[["aeld","/^(mouseout|mouseleave)$/"]],"invillage-outvillage.com":[["json-prune","ads.[].imageUrl"]],"iovivoatenerife.it":[["aopr","document.oncontextmenu"],["aopr","disableSelection"]],"iplayerhls.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"iscc-system.org":[["set-session-storage-item","aesirx-analytics-rejected","true"]],"iskandinavya.com":[["aopr","kan_vars.adblock"]],"isolarcloud.com":[["set-local-storage-item","ISOLAR_COOKIE_VISIT","1"]],"istaf-indoor.de":[["set","realCookieBanner","undefined"]],"it-koehler.com":[["set","realCookieBanner","undefined"]],"itv.com":[["set-cookie","accept-cookies","accepted"]],"jacksonville.com":[["nostif","gnt_mol_oy"]],"jconline.com":[["nostif","gnt_mol_oy"]],"jdnews.com":[["nostif","gnt_mol_oy"]],"jelgava.lv":[["set-cookie","user_gave_consent","1"],["set-cookie","user_gave_consent_analytics","0"]],"jetztspielen.de":[["set-cookie","OptanonAlertBoxClosed","true"]],"jfdb.jp":[["aeld","/contextmenu|keydown/"]],"jibjab.com":[["set-local-storage-item","cookie_banner:hidden","true"]],"jimdosite.com":[["set-local-storage-item","cookies-selected","true"]],"jito.wtf":[["set-local-storage-item","hasConsentedPH","no"]],"jk-market.com":[["acs","jQuery","devtool"]],"jmonline.com.br":[["set-local-storage-item","cookie-consent","true"]],"jobskaro.com":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"johannische-kirche.org":[["set-cookie","cookie-manager","1","","reload","1"],["set-cookie","vimeo","1"]],"jovemnerd.com.br":[["set-cookie","jovem-nerd-cookie-consent","false"]],"jpgames.de":[["set","realCookieBanner","undefined"]],"jpwiserstour.ca":[["set-cookie","corby-agegate-jpw-ca","true"]],"juegosdetiempolibre.org":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"karls-shop.de":[["set-cookie","cookie-preference-v3","1"]],"kastner-oehler.ch":[["set-cookie","consentAll","0"]],"katapult-shop.de":[["set-cookie","cookie-preference","1"]],"kbmv-matting.de":[["set","realCookieBanner","undefined"]],"kd-slovenija.de":[["set","realCookieBanner","undefined"]],"keepersecurity.com":[["set-local-storage-item","keeper_cookie_consent","true"]],"ketogo.app":[["set-local-storage-item","cookie_consent","true"]],"kick.com":[["set-local-storage-item","cookies_accepted","true"]],"kinocheck.de":[["set-cookie","kc_c","yes"]],"kinopoisk.ru":[["set-cookie","gdpr","0"]],"kitguru.net":[["acs","addEventListener","adsbygoogle.length"]],"kitsapsun.com":[["nostif","gnt_mol_oy"]],"kitzbuehel.at":[["set-cookie","ris_cookie_setting","1"]],"kiyoua-news.de":[["set","realCookieBanner","undefined"]],"klsys.com":[["set","realCookieBanner","undefined"]],"knoblauch.de":[["set","realCookieBanner","undefined"]],"knshow.com":[["aopr","document.oncontextmenu"],["aeld","/^(?:contextmenu|copy|selectstart)$/"]],"komm-mit.com":[["set","realCookieBanner","undefined"]],"kontextwochenzeitung.de":[["set-cookie","CookieConsent","mandatory"]],"kooora4livs.com":[["acs","document.oncontextmenu"]],"kptv.com":[["rc","powa-sticky","","stay"]],"kubikum.com":[["set-cookie","CookiePolicyAll","1","","reload","1"],["set-cookie","CookiePolicyComf","no"]],"kukaj.io":[["set","devtoolsOpen","false"]],"kupkolo.cz":[["set-cookie","cookie-bar","0"]],"kurosave.com":[["aopr","document.body.setAttribute"]],"kwerfeldein.de":[["set","realCookieBanner","undefined"]],"kyoceradocumentsolutions.us":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"landhaus-thaumiller.de":[["set-cookie","Consent","0"]],"laptophardware.hu":[["set","cookie_alert_overlay","noopFunc"]],"lasexta.com":[["aeld","contextmenu"]],"lasmallagency.com":[["set-cookie","gatsby-gdpr","false"]],"latoken.com":[["set-cookie","CookieConsent","true"]],"lattinepersonalizzate.it":[["set","realCookieBanner","undefined"]],"lazyinvestors.de":[["set","realCookieBanner","undefined"]],"lbms.cz":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"ldz.lv":[["set-cookie","cookie-agreed","0"]],"legalteam.hu":[["set-cookie","gaCookies","false"]],"lemarit.com":[["set","realCookieBanner","undefined"]],"lendagames.com":[["acs","document.onkeydown"]],"lesjardinsinterieurs.com":[["rc","unreadable-display","","stay"]],"libraries.merton.gov.uk":[["set-cookie","luci_CC_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","true"],["set-cookie","luci_gaConsent_95973f7b-6dbc-4dac-a916-ab2cf3b4af11","false"]],"lichtempfindlich.org":[["set","realCookieBanner","undefined"]],"limehd.tv":[["set-cookie","cookieIsAgree","true"]],"lincolncourier.com":[["nostif","gnt_mol_oy"]],"linmot.com":[["set-cookie","cookie_accept","true"]],"liquorjunction.com":[["set-cookie","age_verification","1"]],"liquormart.co.nz":[["set-cookie","isAnAdult","true"]],"litteravera.pl":[["set-local-storage-item","show_consent_modal","1"]],"liveonsat.com":[["ra","oncontextmenu"]],"locateyoursound.com":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"lubbockonline.com":[["nostif","gnt_mol_oy"]],"lulus.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"lwlies.com":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"m-m-m.de":[["set","realCookieBanner","undefined"]],"m-tac.pl":[["set-cookie","config-message-052fd829-3229-4b96-a597-13e6f2ebee5f","1","","reload","1"]],"m.twitch.tv":[["set-cookie","tachyon-accepted-cookie-notice","true"],["set-session-storage-item","twilight.custom-smart-banner-dismissed","true"]],"m38a1.de":[["set","realCookieBanner","undefined"]],"madeinbocholt.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"mader.bz.it":[["set-cookie","ae-cookiebanner","true"],["set-cookie","ae-esential","true"],["set-cookie","ae-statistics","false"]],"mainframegurukul.com":[["ra","oncontextmenu|onselectstart|ondragstart"]],"malcorentacar.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"mall.cz":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"mangainn.net":[["aopr","googletag"]],"mangalib.org":[["set-local-storage-item","cookies-toast-shown","true"]],"manhwa18.cc":[["nostif","detect_modal"]],"manuals.annafreud.org":[["set-local-storage-item","COOKIE_CONSENT","no"]],"marketviewliquor.com":[["set-cookie","mlv_age_verify","1"]],"marktbaehnle.de":[["set-cookie","Consent","0"]],"massaschadeconsument.nl":[["set-local-storage-item","analyticsNoticeDismissedSet","true"]],"masuit.com":[["aopr","document.oncontextmenu"],["nosiif","debugger"]],"matkahuolto.fi":[["set-cookie","CookieConsentV2","YES"]],"matzoo.pl":[["ra","oncontextmenu"],["aeld","contextmenu"]],"md-store.de":[["set-cookie","cookieconsent_status","allow"]],"mediafax.ro":[["aeld","copy"]],"medical.edu.mt":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"medtube.net":[["set-cookie","cookiePolicy","4"]],"megapixl.com":[["nostif",".modal","1000"]],"mein-osttirol.rocks":[["set-local-storage-item","ccb_contao_token_1","1"]],"meinstream.net":[["set","realCookieBanner","undefined"]],"memoryhackers.org":[["acs","RegExp","googlebot"]],"meteovesti.ru":[["set-cookie","cookie_policy_notice_closed","1"]],"metro1.com.br":[["set-local-storage-item","cookie","true"]],"metrowestdailynews.com":[["nostif","gnt_mol_oy"]],"mfu-pilotenclub.at":[["set","realCookieBanner","undefined"]],"microcenter.com":[["set-cookie","MicrocenterPrivacy","Accepted","","reload","1"]],"midwestgunworks.com":[["set-cookie","privBanner","1","","reload","1"]],"mimaletadepeliculas.blogspot.com":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"mimaletamusical.blogspot.com":[["aopw","document.oncontextmenu"]],"mineskin.org":[["aopw","ABB_config"]],"mitarbeiter-app.de":[["rc","wcc-popup-overflow","body","stay"]],"mixmods.com.br":[["aopr","abde"]],"mmafighting.com":[["nostif","adsBlocked"]],"mobeleader.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"mobiflip.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"moebel-mahler-siebenlehn.de":[["set-cookie","optOutAccepted","true"],["set-cookie","optOutsTouched","true"]],"monitoruldevrancea.ro":[["rmnt","script","stopPrntScr"],["rmnt","style","selection"]],"moovly.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"msk.kitazawa.me":[["json-prune","ads.[].imageUrl"]],"mt-milcom.blogspot.com":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"music.youtube.com":[["json-prune","playerResponse.messages.[].youThereRenderer messages.[].youThereRenderer"],["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"]],"musicradar.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"mybevstore.com":[["set-cookie","isAnAdult","true"]],"mycall.no":[["set-cookie","mc_allow_tracking","0"]],"mydigi.digi.pt":[["set-cookie","adsConsent","false"],["set-cookie","analyticsConsent","false"]],"mylove-mylife.at":[["set-cookie","my-love-my-life-aut-cookie-categories","essential"]],"myoplay.club":[["acs","document.oncontextmenu"]],"myredcarpetliquors.com":[["set-cookie","age_verification","1"]],"mythical.market":[["set-cookie","cookie-preferences-mythical","1"]],"nature-et-bois.fr":[["rc","unreadable-display","","stay"]],"negrasport.pl":[["set-local-storage-item","show_consent_modal","1"]],"neliosoftware.com":[["set-cookie","nelioCookiesAccepted","true"]],"netuplayer.top":[["set","devtoolsDetector.launch","noopFunc"]],"newportwinespirits.com":[["set-cookie","GmVerifiedClick","true"]],"newscentermaine.com":[["aeld","/^(mouseout|mouseleave)$/"]],"newsletter.banklesshq.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"newsletter.eng-leadership.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"nhif.bg":[["set-cookie","gdpr","1"]],"nicematin.com":[["aeld","","AdB"]],"nigged.com":[["set-cookie","mayor_edad","1"]],"nonesnanking.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"nonli.com":[["set-local-storage-item","nonli_google_analytics_consent","denied"]],"nosdevoirs.fr":[["set-local-storage-item","simple-funnel-name","$remove$"]],"notificationsounds.com":[["nostif","adsbygoogle","2000"]],"novap.fr":[["set-cookie","amcookie_allowed","1"]],"nowcoder.com":[["aeld","copy"]],"nurgutes.de":[["set-cookie","cookieDeclined","1"]],"nutrimedium.com":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"nwherald.com":[["aopr","HTMLIFrameElement"]],"octavio-shop.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"ofertecatalog.ro":[["rmnt","script","/contextmenu|oncopy/"],["ra","onselectstart","","stay"]],"ogladajanime.pl":[["set-cookie","accepted","true","","reload","1"]],"ojogos.com.br":[["set-cookie","OptanonAlertBoxClosed","true"]],"oklo.com":[["set-cookie","cookiemonster-gdpr","1"]],"olmatic.de":[["set","realCookieBanner","undefined"]],"omniwood.be":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"oncosur.org":[["set-cookie","ONCOSURCOOK","2"]],"onderlingenederland.nl":[["set-cookie",".OG.Consent","no","","reload","1"]],"oneskin.co":[["set-local-storage-item","gdpr","deny"]],"onlineradiobox.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"opedge.com":[["nostif","()","2000"]],"open24.ee":[["set-local-storage-item","df-cookies-allowed","true"]],"openfiler.com":[["set-cookie","cookie-agreed","0"]],"orbia.com":[["set-cookie","configured_cookie_consents","0"],["set-cookie","consent_analytics","false"],["set-cookie","consent_functional","true"],["set-cookie","consent_social","false"]],"oreilly.com":[["aeld","mouseout","cookie"]],"orszak.org":[["set-cookie","privacy_popup","true","","reload","1"]],"ovation.ca":[["set-cookie","ovation.v20231006.essentials","1"],["set-cookie","ovation.v20231006.essentials","1","","reload","1"]],"oxfordonlineenglish.com":[["set-cookie","ooe_cookie_policy_accepted","no"]],"pagesix.com":[["aopr","googletag.cmd"]],"panwybierak.pl":[["rc","show--consent","body","stay"]],"parkguellonline.cat":[["set-cookie","valCookie1","1"]],"patreon.com":[["aeld","touchmove","preventDefault"],["set-cookie","can_see_nsfw","1","","reload","1"]],"paydirekt.de":[["set-cookie","paydirektCookieAllowed","false"]],"pc-canada.com":[["set-cookie","Cookies-Accepted","true"]],"pcworld.com":[["set-cookie","hide-generic-overlay-techhive","true"]],"peavinewineandspirit.com":[["set-cookie","age_verification","1"]],"petdesk.com":[["set-cookie","allowCookies","true"]],"pflegezeit-berlin.de":[["rc","dp--cookie-consent","body","stay"]],"pharmahall.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"phimlongtieng.net":[["acs","oncontextmenu"],["acs","navigator","devtools"],["acs","setInterval","stateObject"],["acs","setTimeout","debugger"],["aopr","devtoolsDetector"]],"pi3g.com":[["set","realCookieBanner","undefined"]],"pima.sk":[["set-cookie","adultModal","agree"]],"pinel-medizin.de":[["set","realCookieBanner","undefined"]],"piratewires.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"pjspub.com":[["set-local-storage-item","userConsented","false"]],"planetepluscanada.com":[["set-cookie","analytics","false"],["set-cookie","rgpd","false","","reload","1"]],"plantasjen.no":[["set-cookie","_ca","false"],["set-cookie","_ftu","false"]],"plantpowercouple.com":[["set-cookie","awpopup_450030403","1"]],"platformer.news":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"podimo.com":[["set","window.scrollTo","noopFunc"]],"polskacanada.com":[["acs","jQuery","contextmenu"]],"polygon.com":[["aopw","loadOutbrain"],["nostif","adsBlocked"]],"polypane.app":[["set-local-storage-item","dismissed","true"]],"popcornmovies.io":[["set","console.clear","trueFunc"],["set","console.log","trueFunc"],["set","console.table","trueFunc"],["aeld","keydown","123===i"]],"pornhub.com":[["set-cookie","accessAgeDisclaimerPH","2","","reload","1"]],"producthunt.com":[["set-cookie","agreed_cookie_policy","1"]],"profiel.de":[["set","realCookieBanner","undefined"]],"projectenglish.com.pl":[["set-cookie","analitics_cookies","0"],["set-cookie","privacy_settings","1"]],"projektowanie-wnetrz-online.pl":[["aopr","disable_copy"],["aopw","document.ondragstart"]],"promobit.com.br":[["aeld","mouseout"]],"psychiatryadvisor.com":[["remove-cookie","hmmet"]],"publibike.ch":[["set-cookie","gdpr2","true"],["set-cookie","gdpr2_required","true"]],"puntigamer.at":[["set","realCookieBanner","undefined"]],"putlockernew.vc":[["aost","console.clear"]],"puzzle-futoshiki.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-masyu.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-minesweeper.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-slant.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-stitches.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.lu":[["set-cookie","puzzleyou-lu_cookies_consent_allowlist","0","","reload","1"]],"pvcvoordeel.nl":[["set-cookie","cookiebar","1"]],"pwsweather.com":[["set-cookie","pws_gdrp_accept","1"]],"quantamagazine.org":[["set-cookie","acceptedPolicy","true"],["set-cookie","privacy-consent-given","0"]],"quebueno.es":[["set-cookie","gatsby-gdpr-google-tagmanager","false"]],"radarbox.com":[["set","ads_enabled","true"]],"randombrick.de":[["set","realCookieBanner","undefined"]],"rappjmed.ch":[["set-cookie","cookie_notice_accepted","true"]],"raven-mythic.com":[["aopw","$adframe"]],"readyforboarding.pl":[["set","realCookieBanner","undefined"]],"realpython.com":[["aeld","DOMContentLoaded","rprw"],["set-local-storage-item","rprw","$remove$"]],"recordonline.com":[["nostif","gnt_mol_oy"]],"redtube.com":[["set-cookie","showAgeDisclaimer","1"]],"refurbishedstore.de":[["set-cookie","COOKIE_CONSENT","1","","reload","1"],["set-cookie","COOKIE_MARKETING","false"],["set-cookie","COOKIE_STATIC","false"]],"registerguard.com":[["nostif","gnt_mol_oy"]],"resourcepack.net":[["aopw","clickIE4"],["aopw","disableSelection"]],"rest.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"restore.bg":[["set-cookie","consent_cookie_ue","1","","reload","1"]],"risal.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"rjtkauto.com":[["set-cookie","cookieAccepted","1","","reload","1"]],"rocklyric.jp":[["ra","oncopy|oncut|onmousemove|onmousedown|style","#lyric_area[oncopy]","complete"],["ra","oncontextmenu","#lyric_area > p[oncontextmenu]","complete"]],"rodrigue-app.ct.ws":[["set-local-storage-item","cookieAccepted","true"]],"rolandgermany.com":[["set","realCookieBanner","undefined"]],"romeo.com":[["set-local-storage-item","cookiesConsent","1"]],"royal-oak.org":[["set-cookie","royaloakTermsCookie","1"]],"rozbor-dila.cz":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"rte.ie":[["set-cookie","OptanonAlertBoxClosed","ok"]],"rudderstack.com":[["set-local-storage-item","rudderstack_cookie_consent","true"]],"rukim.id":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"runningnews.gr":[["acs","document.oncontextmenu"],["acs","disableselect","reEnable"],["ra","oncontextmenu|onselectstart|ondragstart"]],"russia-tv.online":[["set-cookie","cookieIsAgree","true"]],"s-court.me":[["set-cookie","cookie_accept","true"]],"sachonthi.com":[["acs","document.oncontextmenu"]],"safedeliveries.nl":[["set-cookie","cookieConsentGranted","1"]],"saleor.io":[["set-cookie","cookieConfirmation","true"]],"sambowman.co":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"samsungtechwin.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"sand-in-taufers.com":[["set-cookie","ris_cookie_setting","1"]],"sandboxservices.be":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"sanha.com":[["set-cookie","cookie-preference","1"]],"sawren.pl":[["set-local-storage-item","consent_popup","1"]],"sbface.com":[["acs","check","debugger"],["nosiif","_0x"]],"scaleofuniverse.com":[["set-local-storage-item","email-subscribe-check-41be04a9","false"]],"scenexe.io":[["set-local-storage-item","ad_blocker","false"]],"schools.by":[["aopr","all_delere_cookie"]],"schulebruetten.ch":[["set","realCookieBanner","undefined"]],"schulfahrt.de":[["set-cookie","cookiecookie","1"]],"schwechat.gv.at":[["set-cookie","ris_cookie_setting","1"]],"scsun-news.com":[["nostif","gnt_mol_oy"]],"searchenginejournal.com":[["nostif","popup"]],"searchforsites.co.uk":[["set-cookie","cookieCompliancyAccepted","1"]],"seb.se":[["set-cookie","AcceptedCookieCategories","1"]],"sebo.ddns.opc-asp.de":[["set-cookie","opc_webapp_cookiesaccepted_be264d3fecc64041f12c2afcba82edc0","1","","reload","1"]],"segro.com":[["set-cookie","Segro-necessary-cookies","accepted"]],"seikatsu-hyakka.com":[["acs","document.oncontextmenu"]],"seller.wildberries.ru":[["set-local-storage-item","cookies-agreed-sellers-external-HC","true"]],"senda.pl":[["set-cookie","cookieConsent3","true"]],"sendsips.com":[["set-cookie","age_verification","1"]],"seriesperu.com":[["aeld","contextmenu","preventDefault"],["noeval-if","String.fromCharCode"],["rmnt","script","contextmenu"]],"sharesight.com":[["set-local-storage-item","cookieBanner","false"],["set-local-storage-item","gdprPreferencesAccepted","true"]],"shinbhu.net":[["aeld","contextmenu"],["acs","document.onkeydown"]],"shlib.life":[["set-local-storage-item","cookies-toast-shown","true"]],"shojiwax.com":[["set-cookie","jetpack_post_subscribe_modal_dismissed","true"]],"shop.conas.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.gooddrop.co.nz":[["set-local-storage-item","age_confirmed","true"]],"shop.hansapark.de":[["set-cookie","cookies_mandatory","true"]],"shop.harveys.org.uk":[["set-cookie","age-checked","1"]],"shopbuddies.de":[["set-cookie","ws-cookie-Marketing","false"],["set-cookie","ws-cookie-Techniques","true"]],"shopforyou47.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"shufoo.net":[["rc","is-hidden","body"]],"sidereel.com":[["acs","$","/getScript|error:/"],["aopr","googletag"]],"sigmalive.com":[["set-local-storage-item","push-notifications","no"]],"siliconinvestor.com":[["acs","document.getElementById","undefined"]],"silverboats.fi":[["set-cookie","AVENIS_PRIVACY_LEVEL_ANALYTICS","0"],["set-cookie","AVENIS_PRIVACY_LEVEL_COMMON","1"]],"simpleflying.com":[["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"skandynawiainfo.pl":[["aeld","","mdp"]],"skanzen.hu":[["set-local-storage-item","skanzen-cookie-consent","false"]],"skb-leasing.si":[["set-cookie","cookie_gdpr","true","","reload","1"]],"skouras-carpets.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"smotritv.su":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"solo.io":[["set-cookie","solo_opt_in","false"]],"songtradr.com":[["set-cookie","cpaccepted","true"],["set-cookie","cpaccpted","true"]],"sopot.net":[["ra","onmousemove|ondragstart|onselectstart|oncontextmenu","body"]],"sp32bb.pl":[["set-cookie","cookie_acceptance","1"]],"sportbooking.info":[["set-local-storage-item","cookies-pref","[]"]],"sportplu-s.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"sportsnaut.com":[["aopr","__cmpGdprAppliesGlobally"]],"sportsnet.ca":[["aopr","uxGuid"]],"sportsupa.com":[["ra","oncontextmenu"]],"sportvision.rs":[["set-cookie","site_cookie_info","0"]],"sss.fi":[["aeld","load","function(){if(s.readyState==XMLHttpRequest.DONE"]],"stamceldonor.be":[["rc","cookieconsent-active","body","stay"]],"standard.sk":[["set-cookie","standard_gdpr_consent","true"]],"starnewsonline.com":[["nostif","gnt_mol_oy"]],"starresonance.th.gl":[["nostif",".getState();","4500"]],"startrescue.co.uk":[["set-cookie","_cookieconsentv2","1"]],"statesmanjournal.com":[["nostif","gnt_mol_oy"]],"stevenspointjournal.com":[["nostif","gnt_mol_oy"]],"stgeorgeanddragon.co.uk":[["set-cookie","ce-cookie","N"]],"stonehouserestaurants.co.uk":[["set-cookie","ce-cookie","N"]],"store.pw.live":[["set-cookie","accept_cookies","accepted"]],"straitstimes.com":[["aeld","/^(mouseout|mouseleave)$/"]],"streamclipsgermany.de":[["set-local-storage-item","cookiesAccepted","true"]],"subscribercounter.com":[["set-local-storage-item","ytsc_accepted_cookies","true"]],"suntech.cz":[["set-cookie","I6COMPARECOUNT","0"],["set-cookie","I6IISCOOKIECONSENT0","n","","reload","1"]],"suttonparkgroup.co.uk":[["set-cookie","cookieAccepted","1","","reload","1"]],"suzuki.at":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"suzylu.co.uk":[["aeld","contextmenu"]],"sweet-shop.si":[["set-cookie","aonehidepopupnewsletter1727208240","1"]],"swtimes.com":[["nostif","gnt_mol_oy"]],"systelia.fr":[["rc","unreadable-display","","stay"]],"taketaketake.com":[["set-local-storage-item","takex3.cookie-consent","declined"]],"tango-flores.de":[["set","realCookieBanner","undefined"]],"techfundingnews.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"technikmuseum.berlin":[["set-local-storage-item","technikmuseum-required-enabled","true"]],"techniknews.net":[["set","realCookieBanner","undefined"]],"techsupportall.com":[["aeld","/^(?:contextmenu|copy|keydown)$/"]],"teile-direkt.ch":[["aeld","mousedown","function(t)"]],"teilzeitreisender.de":[["set","realCookieBanner","undefined"]],"televid.top":[["aeld","contextmenu"]],"televizia.org":[["aeld","contextmenu","preventDefault"]],"temperatur.nu":[["nostif","holidAds"]],"termania.net":[["set-cookie","agree_with_cookies","1"]],"the-albany.co.uk":[["set-cookie","ce-cookie","N"]],"theadviser.com.au":[["set-local-storage-item","articleGateData","$remove$"]],"theankler.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"thebulwark.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"theclimatebrink.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"thefashionspot.com":[["aopr","__cmpGdprAppliesGlobally"]],"theguardian.com":[["set-local-storage-item","gu.history.dailyArticleCount","$remove$"],["set-local-storage-item","gu.history.weeklyArticleCount","$remove$"]],"thejerichooxford.co.uk":[["set-cookie","ce-cookie","N"]],"theledger.com":[["nostif","gnt_mol_oy"]],"thenounproject.com":[["set-cookie","cookie_consent","1","","reload","1"]],"theramsheaddisley.co.uk":[["set-cookie","ce-cookie","N"]],"therapiewerk-io.de":[["set","realCookieBanner","undefined"]],"thesheepheidedinburgh.co.uk":[["set-cookie","ce-cookie","N"]],"thespaniardshampstead.co.uk":[["set-cookie","ce-cookie","N"]],"thespec.com":[["remove-cookie","/^tncms:meter:/"]],"thesunclapham.co.uk":[["set-cookie","ce-cookie","N"]],"theswanbroadway.co.uk":[["set-cookie","ce-cookie","N"]],"thewhitehartpirbright.co.uk":[["set-cookie","ce-cookie","N"]],"thezealots.org":[["acs","document.oncontextmenu"]],"thinktankphoto.com":[["set-cookie","cookieconsent_status","deny","","reload","1"]],"thomasschlechter.de":[["set","realCookieBanner","undefined"]],"timeshighereducation.com":[["aost","Drupal.CTools.Modal.show","/(^(?!.*(injectedScript|makeProxy).*))/"]],"tinyhouse-baluchon.fr":[["acs","document.oncontextmenu"]],"tips97tech.blogspot.com":[["rmnt","script","debugger"]],"tlaciarik.sk":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"todoist.com":[["set-local-storage-item","cookie-consent","\"denied\""]],"toledoblade.com":[["aopr","__cmpGdprAppliesGlobally"]],"tolyatty.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"tomshw.it":[["nostif","bioEp.showPopup"]],"ton.org":[["set-cookie","cookies-allowance","true"]],"tonis.ch":[["set-cookie","tonis-che-cookie-categories","essential"]],"toontales.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"topautoosat.fi":[["aeld","mousedown","function(t)"]],"toyota.co.uk":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","yes"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"tracklock.gg":[["rmnt","script","reviveScroll","excludes","self.__next"]],"trade.bisonapp.com":[["set-cookie","cookiesConsent","reject"]],"trading212.com":[["set-cookie","COOKIES_CONSENT","essential"]],"traqq.com":[["set-cookie","CookieAccept","true"]],"troyer.it":[["set-cookie","tincx_cookie_notice_accepted","true"]],"truckmall.cz":[["set-cookie","cookies_confirmed","1","","reload","1"]],"tuhlteim.de":[["set","realCookieBanner","undefined"]],"turbolab.it":[["nostif","warning"]],"tutonaut.de":[["set","realCookieBanner","undefined"]],"tvline.live":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tvn24.pl":[["aeld","contextmenu","a"]],"tvonline24.net":[["aeld","contextmenu"]],"two-notes.com":[["set-cookie","cookiesettings_status","allow"]],"ubuntu.com":[["set-cookie","_cookies_accepted","essential"]],"ultimate-bravery.net":[["nostif","()","2000"]],"umarex.com":[["set-cookie","dsgvo","1"]],"umcutrecht.nl":[["set-cookie",".AspNet.Consent","no","","","reload","1"]],"un-block-voe.net":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"understandingsociety.ac.uk":[["set-cookie","ga-disable-UA-xxxxxxxx-x","true"]],"united-camera.at":[["set-cookie","acris_cookie_acc","1","","reload","1"]],"unixhow.com":[["acs","eval","isNaN"]],"unmute.sh":[["set-local-storage-item","cookieConsent","false"]],"up4stream.com":[["rmnt","script","debugger"],["acs","document.onkeydown"],["set","devtoolsDetector","{}"]],"uploadvr.com":[["set-local-storage-item","dismissedUpgradePrompt","true"]],"upstream.to":[["acs","document.oncontextmenu"],["aopr","_0xfff1"]],"urbex-datenbank.ch":[["set-cookie","pum-1182","true"]],"v1.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"valadie-immobilier.com":[["set-cookie","slc_vitrine_cookies-date-submitted","1"],["set-cookie","slc_vitrine_cookies_analytics","0"],["set-cookie","slc_vitrine_cookies_recaptcha","1"],["set-cookie","slc_vitrine_cookies_youtube","1"]],"valuexh.life":[["set-cookie","cookie_accept","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"vapecoco.com":[["set","realCookieBanner","undefined"]],"vaporplanet.es":[["set-cookie","confirmed_age","true"]],"vectorsoft.de":[["set","realCookieBanner","undefined"]],"veed.io":[["set-local-storage-item","trainingDataConsent","true"]],"vemar.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"verilife.com":[["set-cookie","popupShown","true"]],"verstehepferde.de":[["set","realCookieBanner","undefined"]],"vesely-drak.cz":[["rc","show--consent","body","stay"]],"viatasisanatate.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"videohelp.com":[["acs","document.getElementById","block"]],"vinothekwaespi.ch":[["set-cookie","accept-selected-cookies","true","","reload","1"],["set-cookie","cookiePreferences","true"],["set-cookie","necessary","true"]],"vinstartheme.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledKeys"]],"vintageinn.co.uk":[["set-cookie","ce-cookie","N"]],"voe-un-block.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"voha.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"voila.ca":[["set-cookie","privacyAccepted","true"]],"volksversand.de":[["set-cookie","cookieDeclined","1"]],"volkswagen-group.com":[["set-cookie","vw_mms_hide_cookie_dialog","1"]],"vsco.co":[["set-local-storage-item","/^fs\\./","$remove$"],["aeld","contextmenu"]],"wagner-tuning.com":[["set-cookie","CookieLaw","on"],["set-cookie","CookieLaw_komfort","0"],["set-cookie","CookieLaw_personalisierung","0"],["set-cookie","CookieLaw_statistik 0"]],"wallygusto.de":[["set","realCookieBanner","undefined"]],"wamba.com":[["set-cookie","appBannerPopUpRulesCookie","true"]],"wandanabrewingco.com.au":[["set-cookie","age-checked","1"]],"wanderlustdrinkscompany.com":[["set-cookie","age-checked","1"]],"wayfair.co.uk":[["set-cookie","user_cookie_prefs","1"]],"wealthshop888.com":[["set-cookie","allowGetPrivacyInfo","true"]],"weatherbug.com":[["set-cookie","WB_CookieNotification","1"]],"web2.0calc.fr":[["set-cookie","precmp","1","","reload","1"]],"wedding.pl":[["set-cookie","wed_cookie_info","1"]],"wevolver.com":[["set-cookie","cookiesConsent","false"]],"wfaa.com":[["aeld","/^(mouseout|mouseleave)$/"],["rc","video__docker_state_docked","","stay"]],"whowhatwear.com":[["set-cookie","FTR_Article_PageView","2"]],"wikiofcelebs.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"willow.arlen.icu":[["nosiif","e","1000"],["aopr","document.onkeydown"]],"wind-craft.eu":[["set","realCookieBanner","undefined"]],"winesonline.co.nz":[["set-cookie","isAnAdult","true"]],"wired.co.uk":[["set","ads_not_blocked","true"]],"wishflix.cc":[["nostif","(!0)","8000"]],"witway.nl":[["set-cookie","cookiebar","1"]],"wohnmobilcenter-drechsler.de":[["set","realCookieBanner","undefined"]],"workhouses.org.uk":[["acs","document.oncontextmenu"]],"worldcupchampionships.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"wp-loft.de":[["set","realCookieBanner","undefined"]],"wpchen.net":[["aeld","contextmenu"]],"wsvn.com":[["aeld","/^(mouseout|mouseleave)$/"]],"www-daftarharga.blogspot.com":[["acs","document.oncontextmenu"],["aeld","","keyCode"]],"www-devonlive-com.translate.goog":[["rmnt","script","loc.hostname"]],"www-insider-co-uk.translate.goog":[["rmnt","script","loc.hostname"]],"www-themirror-com.translate.goog":[["rmnt","script","loc.hostname"]],"xhadult4.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"]],"xiaomi4mi.com":[["aopw","document.oncontextmenu"]],"xn--lkylen-vxa.se":[["set-cookie","gdpr_ok","necessary"]],"yabelana.ukzn.ac.za":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"yellow.systems":[["set-local-storage-item","isCookiesNotificationHidden","true"]],"yoomoney.ru":[["set-cookie","has_accepted_gdpr","1"]],"youjizz.com":[["set-local-storage-item","yjAgeVerified","true"]],"youthforum.org":[["set-cookie","__cookie_consent","false"]],"ytcomment.kmcat.uk":[["set-cookie","privacy","true"]],"ytj.fi":[["set-local-storage-item","accept-cookies","done"],["set-local-storage-item","cookie-neta","false"],["set-local-storage-item","cookie-snoop","false"]],"ytv.co.jp":[["aopr","document.oncontextmenu"]],"zabawkahurtownia.pl":[["rmnt","script","/oncontextmenu|disableselect/"]],"zadowolenie.pl":[["set-cookie","AtomStore[COOKIES_ACCEPTED]","1","","reload","1"],["set-cookie","AtomStore[FUNCTIONAL_COOKIES_ACCEPTED]","1"],["set-cookie","AtomStore[MARKETING_COOKIES_ACCEPTED]","0"]],"zave.it":[["set-local-storage-item","framerCookiesDismissed","true"]],"zeoob.com":[["set-cookie","allowed_consent","yes"]],"zgywyd.cn":[["acs","document.oncontextmenu"]],"zhihu.com":[["aeld","/contextmenu|copy/"]],"ziarulargesul.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"zillow.com":[["aeld","/^(mouseout|mouseleave)$/"],["ra","oncontextmenu|ondragstart|onselectstart|onkeydown|oncopy|oncut|onclick"]],"zimaspace.com":[["set-local-storage-item","cookiesConsent","rejected"]],"ziperto.com":[["nosiif","visibility","1000"]],"zipfer.at":[["set","realCookieBanner","undefined"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
