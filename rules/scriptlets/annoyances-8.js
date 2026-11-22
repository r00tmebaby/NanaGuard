/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"1000-haushaltstipps.de":[["set","realCookieBanner","undefined"]],"1a-sehen.de":[["set-cookie","cc-item-google","false"]],"270towin.com":[["set-session-storage-item","fs.adb.dis","1"]],"407etr.com":[["set-cookie","cookieConsent","accepted"]],"4x4earth.com":[["set","adBlockDetected","false"],["nostif","samOverlay"]],"52bdys.com":[["aopr","onload"]],"56.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"63.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"9xbuddy.com":[["nostif","adsbygoogle"]],"addons.opera.com":[["nostif","showOverlay"]],"adef-emploi.fr":[["set-local-storage-item","analytics_gdpr_accept","yes"],["set-local-storage-item","youtube_gdpr_accept","yes"]],"adidas.co.in":[["set-cookie","notice_preferences","2"]],"adidas.co.nz":[["set-cookie","notice_preferences","2"]],"adidas.com":[["set-cookie","notice_preferences","2"]],"adidas.com.ph":[["set-cookie","notice_preferences","2"]],"adidas.fi":[["set-cookie","notice_preferences","2"]],"adidas.pe":[["set-cookie","notice_preferences","2"]],"aeromexico.com":[["set-cookie","AgreeCookies","true"],["set-cookie","AreCookiesSet","true"]],"aha.or.at":[["set-cookie","cookieConsent_marketing","false"],["set-cookie","cookieConsent_required","true","","reload","1"]],"ahorn24.de":[["set-cookie","accept_cookies2","true","","reload","1"]],"ahrtal-klinik.de":[["set-cookie","Consent","0"]],"aicesu.cn":[["aopw","document.oncopy"]],"airchina.nl":[["set-cookie","EnableABTest","false"],["set-cookie","EnableFacebook","false"],["set-cookie","EnableGA","false"]],"al.com":[["aopr","__cmpGdprAppliesGlobally"]],"all3dp.com":[["rc","root-modal-container-open","body","stay"]],"all4running.de":[["set-cookie","cookieConsent","necessary","","reload","1"]],"alohabrowser.com":[["set-cookie","acceptCookie","1"]],"alphapolis.co.jp":[["ra","style","div#novelBoby","stay"],["aeld","copy","preventDefault"],["set","document.onselectstart","null"],["set","document.oncontextmenu","null"]],"alpine-hygiene.ch":[["set-cookie","cookie-preference","1"]],"alter-meierhof.de":[["set-cookie","analytics","false"],["set-cookie","cookieconsent","true","","reload","1"],["set-cookie","marketing","false"]],"aluypvc.es":[["set-cookie","cookiesConsent","1"],["set-cookie","cookiesPreferences","0"],["set-cookie","cookiesStatistics","0"]],"amway.it":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"ancient.eu":[["set","ADBdetected","noopFunc"]],"anhanguera.com":[["set-local-storage-item","isCookiePoliceAccepted","1"]],"animedao.es":[["aopr","devtoolsDetector"]],"animedrive.hu":[["aeld","contextmenu","return\"undefined\""]],"anisubindo.org":[["aeld","keydown","preventDefault"],["aopr","document.onkeydown"],["aopr","document.oncontextmenu"],["aopw","disableSelection"]],"aniwave.co.uk":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"aniwave.de":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"aniwave.it":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"anix.fr":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"anonpaste.pw":[["set-local-storage-item","cookieBanner","true"]],"antik-shop.de":[["set","realCookieBanner","undefined"]],"ao.com":[["set-cookie","AOCookiebannerConsent","declined"],["set-cookie","MKT_AOCookiebannerGDPRV2","declined"]],"aphorisma.de":[["set-cookie","alertCookie","true"]],"aphorisma.org":[["set-cookie","alertCookie","true"]],"apornstories.com":[["aopw","killCopy"],["ra","oncontextmenu|ondragstart|onselectstart|onkeydown"]],"app.com":[["nostif","gnt_mol_oy"]],"app.filen.io":[["set-cookie","cookieConsent","accept","","domain","app.filen.io"]],"arabesque-formation.org":[["set-cookie","cmplz_banner-status","dismissed"]],"arbeitsagentur.de":[["set-cookie","cookie_consent","denied"],["set-cookie","marketing_consent","denied"],["set-cookie","personalization_consent","denied"]],"armedangels.com":[["set-cookie","cookie-preference","1"],["set-cookie","cookie-preference_renew10","1"],["set-cookie","cookie_consent_group_technical","1"]],"arras.io":[["set","ramp.addUnits","noopFunc"]],"artesacro.org":[["aeld","contextmenu"],["acs","document.onselectstart"]],"arturofuente.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-non-necessary","no"],["set-cookie","resp-agev-age-verification-passed","1"]],"as-selection.net":[["ra","oncontextmenu|onselectstart"]],"ask4movie.it":[["ra","oncontextmenu","html"],["set","console.dir","noopFunc"],["set","navigator.userAgent",""]],"aspock.com":[["set-cookie","cmplz_banner-status","dismissed"]],"astoryofmasasstruggles.com":[["rmnt","script","/contextmenu|reEnable/"]],"ausfraukesfeder.de":[["set","realCookieBanner","undefined"]],"auslandsschulwesen.de":[["set-cookie","gsbbanner","closed"]],"autodoc24.es":[["aeld","mousedown","function(t)"]],"autohaus-reitermayer.de":[["set-cookie","hide-gdpr-bar","true"]],"b4usa.com":[["aopw","adBlockDetected"]],"backmarket.de":[["set-cookie","BM_Advertising","false","","reload","1"],["set-cookie","BM_Analytics","false"],["set-cookie","BM_User_Experience","true"]],"backmarket.nl":[["set-cookie","BM_Advertising","false","","reload","1"],["set-cookie","BM_Analytics","false"],["set-cookie","BM_User_Experience","true"]],"baixedetudo.net.br":[["aopw","document.oncontextmenu"],["aeld","/copy|keydown/"]],"baldauf-oberstdorf.de":[["set-cookie","Consent","0"]],"baseblocks.tenereteam.com":[["set-local-storage-item","isAcceptCookie","false"]],"baycix.de":[["set","realCookieBanner","undefined"]],"bayernlb.de":[["set-cookie","layerCookie","true","","reload","1"],["set-cookie","video","true"]],"bearboss.com":[["set-cookie","allowGetPrivacyInfo","true"]],"beefeater.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"befestigungsfuchs.de":[["set-cookie","acris_cookie_acc","1","","reload","1"]],"belisse-beauty.de":[["set-cookie","cookie-preference","1"]],"beratungskompass-verschwoerungsdenken.de":[["set-cookie","cookieconsent_status","allow"]],"betway.com.br":[["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Marketing","0"],["set-cookie","betway-cookie-policy","true"],["set-cookie","bwui_cookieToastDismissed","true"]],"betway.de":[["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Marketing","0"],["set-cookie","betway-cookie-policy","true"],["set-cookie","bwui_cookieToastDismissed","true"]],"betway.net":[["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Marketing","0"],["set-cookie","betway-cookie-policy","true"],["set-cookie","bwui_cookieToastDismissed","true"]],"bflix.nl":[["aeld","keydown","[arguments];"],["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"bflix.ru":[["aeld","keydown","[arguments];"],["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"bg-gledai.com":[["rmnt","script","document.oncontextmenu"],["aeld","contextmenu"],["nosiif","debugger"]],"bg-gledai.fr":[["rmnt","script","document.oncontextmenu"],["aeld","contextmenu"],["nosiif","debugger"]],"bg-gledai.it":[["rmnt","script","document.oncontextmenu"],["aeld","contextmenu"],["nosiif","debugger"]],"bgextras.co.uk":[["set-cookie","CB393_DONOTREOPEN","true"]],"bhoomtv.de":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"bhoomtv.nl":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"bhw.de":[["set-cookie","Cookieinfoauswahl","false"]],"bianity.net":[["aeld","contextmenu"]],"biggreenegg.co.uk":[["set-cookie","cookies-rejected","true"]],"bikesell.co.kr":[["ra","oncontextmenu","body"]],"bimiacg.net":[["acs","document.oncontextmenu"]],"biurobox.pl":[["set-cookie","cookies_message_bar_hidden","true"]],"blaze.com.br":[["set-cookie","accept_policy_regulation","1"]],"blockchain.com":[["set-session-storage-item","dismissedTrackingBanner","true"]],"blog.documentfoundation.org":[["set-cookie","ytprefs_gdpr_consent","1","","reload","1"]],"blog.kwick.de":[["acs","jQuery","contextmenu"],["aopr","disableselect"],["aopr","document.onkeydown"]],"bluemediafile.de":[["set","Time_Start","0"],["nano-sib","i--","","0.02"]],"blueridgenow.com":[["nostif","gnt_mol_oy"]],"boerse-express.com":[["nostif","()","1000"]],"bomdia.eu":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"booking.weisse-flotte.de":[["set-cookie","functionality","false"],["set-cookie","performance","false"],["set-cookie","targeting","false"]],"boosty.to":[["set-cookie","gdpr","1"]],"brainly.it":[["set","jsData.hasVideoMeteringUnlogEnabled","undefined"],["set-local-storage-item","social-qa/machineId","$remove$"],["set-local-storage-item","simple-funnel-name","$remove$"]],"brandners-homestyle.de":[["set-cookie","cookie-preference","1"]],"brauerei-strate.de":[["set","realCookieBanner","undefined"]],"brettspiel-angebote.de":[["set-cookie","privacy-shown","true"],["set-cookie","slimstat_optout_tracking","true"]],"bricksforge.io":[["set","realCookieBanner","undefined"]],"britishbarbers.com":[["set-cookie","cookies_accepted","true","","reload","1"]],"burkle.tech":[["set-cookie","cookieconsent_status","allow"]],"businessclass.com":[["set-cookie","ibe.acceptedCookie","true"],["set-local-storage-item","bcCookieAccepted","true"]],"buyandapply.nexus.org.uk":[["set-cookie","gdpr-banner","1"]],"bvmed.de":[["set-cookie","MATOMO_CONSENT_GIVEN","0"]],"c4ddownload.com":[["aopr","b2a"]],"calendarpedia.co.uk":[["aopr","__cmpGdprAppliesGlobally"]],"calendly.com":[["set-cookie","gdpr_dismissal","true"]],"calvinklein.nl":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"camokoenig.de":[["set-cookie","epCookieConsent","0","","reload","1"]],"campaignlive.co.uk":[["set-session-storage-item","articleModalShown","true"]],"candy-store.cz":[["set-cookie","cookie-bar","0"]],"candybox.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"canondrivers.org":[["acs","document.addEventListener"],["acs","document.oncontextmenu","key"]],"ccn.com":[["aopr","__cmpGdprAppliesGlobally"]],"cdniptvpotok.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"cetaf.org":[["set-cookie","surbma-gpga","no"]],"chatgpt.com":[["set-cookie","oai_consent_analytics","false"],["set-cookie","oai_consent_marketing","false"],["set-session-storage-item","oai/apps/noAuthHasDismissedSoftRateLimitModal","true"]],"cheaptickets.ru":[["set-cookie","cookieConsentLevel","functional"]],"chestnut-tree-house.org.uk":[["rc","wcc-popup-overflow","body","stay"]],"chronext.com":[["set-cookie","20240903_chronextCookieMessageShown","1"]],"cloud.aeolservice.es":[["set-cookie","doSomethingOnlyOnce","true"]],"cloud.kaspersky.com":[["set-cookie","B2BCloudTracking","Disabled","","","reload","1"]],"clujust.ro":[["acs","document.oncontextmenu"],["acs","document.ondragstart"],["aopw","disable_hot_keys"]],"cmjornal.pt":[["aopw","document.oncopy"]],"coinsparty.com":[["aeld","contextmenu"]],"columbiasportswear.it":[["set-cookie","Columbia_IT_emailPopup","1"]],"comune.campotures.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.falzes.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.parcines.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.santacristina.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.scena.bz.it":[["set-cookie","ris_cookie_setting","1"]],"comune.selvadivalgardena.bz.it":[["set-cookie","ris_cookie_setting","1"]],"conversion-rate-experts.com":[["set-cookie","marketing_cookie_consent","false"],["set-cookie","user_experience_cookie_consent","false"]],"coolwallpapers.me":[["nosiif","dfgh-adsbygoogle"]],"corriereadriatico.it":[["aeld","mouseleave"]],"cosel-portal.com":[["set-cookie","tiki_cookies_accepted","y","","reload","1"]],"cosmote.gr":[["set-cookie","cookie_consent_set","1"]],"cosxplay.com":[["rmnt","script","adblock"]],"couplechallenge.com":[["set-cookie","_pandectes_gdpr","1"]],"coworkingrepublic.com":[["set","realCookieBanner","undefined"]],"cranimax.com":[["set","realCookieBanner","undefined"]],"crearunapaginaweb.cat":[["set-cookie","promptCookies","1"]],"creativebloq.com":[["aopr","_sp_.mms.startMsg"],["set-cookie","FTR_Article_PageView","2"]],"crichype.es":[["set","confirm","noopFunc"]],"crushwineco.com":[["set-cookie","acceptcookietermCookieBanner","true"]],"customsclearance.net":[["set-cookie","analytic_cookies","0"],["set-cookie","functional_cookies","0"],["set-cookie","necessary_cookies","1"]],"cuvva.com":[["set-cookie","cuvva.app.website.cookie-policy.consent","1"]],"cwallet.com":[["set-local-storage-item","ns_cookies","1"]],"cyberdaily.au":[["set-local-storage-item","articleGateData","$remove$"]],"cyberfolks.pl":[["set-cookie","CF_GDPR_COOKIE_CONSENT_VIEWED","1"]],"cypherscans.xyz":[["aeld","contextmenu"]],"daily-times.com":[["nostif","gnt_mol_oy"]],"daotranslate.it":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aeld","","undefined"]],"datakauppa.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"dddance.party":[["aeld","contextmenu"]],"ddys.fr":[["no-fetch-if","analytics"]],"delaware.es":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"delmarvanow.com":[["nostif","gnt_mol_oy"]],"dermatologyadvisor.com":[["remove-cookie","hmmet"]],"desbloqueador.fr":[["aopr","document.oncontextmenu"]],"descarga-animex.com.br":[["aeld","/^(?:contextmenu|keydown)$/"]],"descarga-animex.it":[["aeld","/^(?:contextmenu|keydown)$/"]],"desertsun.com":[["nostif","gnt_mol_oy"]],"dev.near.org":[["set-local-storage-item","cookiesAcknowledged","1"]],"devo-veenendaal.nl":[["set-cookie","consent-cookies","1"]],"dexterdaily.com":[["set-cookie","techspot_pro_cookie_consent","1"]],"dhbbank.be":[["set-cookie","UserCookieLevel","1"],["set-cookie","cookiePreference","1"]],"diariodoiguacu.com.br":[["ra","ondragstart|onselectstart"]],"dickies.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"die-plank.de":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_youtube","allow"],["set-cookie","ckies_facebook_post","deny"],["set-cookie","ckies_google_analytics","deny","","reload","1"],["set-cookie","ckies_itunes","deny"],["set-cookie","ckies_stripe","allow"]],"dillingen.bayernlab.bayern.de":[["set-cookie","allowStats","0"],["set-cookie","hideBanner","1"]],"direct.travelinsurance.tescobank.com":[["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_Advertising","0"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_Experience","0"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_LOADED","1"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_MODAL_VIEWED","1"],["set-cookie","TESCOBANK_ENSIGHTEN_PRIVACY_Measurement","0"],["set-cookie","viewed_cookie_policy","yes"]],"dlstreams.st":[["rmnt","script","'contextmenu'"]],"dngz.net":[["aopr","document.oncontextmenu"],["aopr","document.onkeydown"],["set","forbidDebug","noopFunc"]],"docs.eclipse.xyz":[["set-cookie","__gitbook_cookie_granted","no"]],"dollardescent.net":[["rmnt","script","'contextmenu'"]],"donauauen.at":[["set-cookie","cookies_accepted","false"]],"doodstream.org":[["set","console.clear","undefined"],["aeld","contextmenu"]],"download.mokeedev.com":[["acs","document.createElement","admiral"]],"dr-douxi.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"dramacute.pl":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"dramaqu.net":[["acs","$","contextmenu"]],"drinkstore.ie":[["set-cookie","isAnAdult","true"]],"dslbank.de":[["set-cookie","Cookie-Information","false"]],"durex-store.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"dutchnews.nl":[["set-cookie","dn_alert_homescreen_closed","1"],["set-cookie","dn_donation_count","1"]],"e-file.pl":[["set-cookie","efile-cookiename-","1"]],"easywintergarten.de":[["set-cookie","chcCookieHint","1","","reload","1"]],"edinborocastlepub.co.uk":[["set-cookie","ce-cookie","N"]],"edurev.in":[["aopr","openOverlaySignup"],["acs","$","contextmenu"],["aeld","copy"]],"efg-passau.de":[["set","realCookieBanner","undefined"]],"eid.gov.mt":[["set-cookie","cookienotice_eid","dismiss"]],"ellwoodcityledger.com":[["nostif","gnt_mol_oy"]],"emb-europe.com":[["set-cookie","consent-cookie-popup","1"]],"embed.su":[["aeld","keydown","123"],["nosiif","devtool"]],"embtaku.pro":[["aost","Promise","/isEnable|isOpen/"]],"engeldirekt.de":[["set-local-storage-item","consent","[]"]],"entail.ai":[["set-cookie","cookie_consent_status","rejected","","reload","1"]],"erlebnispark-ziegenhagen.de":[["set","realCookieBanner","undefined"]],"eujuicers.es":[["set-cookie","wsp_cc","1","","reload","1"]],"eujuicers.pl":[["set-cookie","wsp_cc","1","","reload","1"]],"euromaster.de":[["set","Didomi","noopFunc"]],"europace.de":[["set","realCookieBanner","undefined"]],"europixhd.co.uk":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"eveningsun.com":[["nostif","gnt_mol_oy"]],"evkirche-eilsen.de":[["set","realCookieBanner","undefined"]],"exclusivevip.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"fabian-heinz-webdesign.de":[["set","realCookieBanner","undefined"]],"falabella.com.co":[["set-cookie","isCookieLegalBannerSelected","true"]],"fantricks.com":[["acs","jQuery","contextmenu"]],"farm-ro.desigusxpro.com":[["aopr","document.oncopy"]],"favi.net":[["set-cookie","__Host-cookie-consent","8","","reload","1"]],"figshare.arts.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"fijiairways.com":[["set-local-storage-item","acceptedCookies","true"]],"fincaparera.com":[["set-cookie","promptCookies","1"]],"findmcserver.com":[["set-local-storage-item","allowCookies","allowed"]],"firsttable.co.uk":[["set-cookie","CookieConsentFT","1"]],"fixtout.fr":[["set-cookie","cookielaw_module","1","","reload","1"]],"fleksberegner.dk":[["set-local-storage-item","vue-cookie-accept-decline-cookiePanel","accept"]],"fletcherzakelijk.nl":[["set-cookie","acceptCookies","true"]],"flexwhere.de":[["set-cookie","CookieConsent","true"],["set-cookie","gatsby-plugin-google-tagmanager","false"]],"flugladen.de":[["set-cookie","cookieConsentLevel","functional"]],"fm-systeme.de":[["set-cookie","kmaCookiesCode2","0"],["set-cookie","kmaCookiesSaved","1"]],"fmovies.com":[["set-cookie","show_share","true"],["acs","document.oncontextmenu"],["acs","disableSelection","reEnable"],["aopr","document.ondragstart"],["aost","console.clear"]],"fontanka.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"ford-busch-kirchberg.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-gerstmann-duesseldorf.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-muecke-berlin.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-norren-weissenthurm.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-nuding-remshalden.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-wahl-fritzlar.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-westhoff-hamm.de":[["set-cookie","hide-gdpr-bar","true"]],"fordogtrainers.pl":[["acs","message","clickIE"],["acs","preventSelection"]],"freegossip.gr":[["set","realCookieBanner","undefined"]],"freeletics.com":[["set-cookie","cookie_consent","false"]],"frick-geraetebau.de":[["set-cookie","ris_cookie_setting","1"]],"frickeldave.de":[["set","realCookieBanner","undefined"]],"frigge-dinstak.de":[["set","realCookieBanner","undefined"]],"fryerndental.co.uk":[["rc","wcc-popup-overflow","body","stay"]],"fz-juelich.de":[["set-cookie","confirm_cookies","1"]],"gaestehaus-schlegel.de":[["set-cookie","Consent","0"]],"galesburg.com":[["nostif","gnt_mol_oy"]],"gardenia.net":[["ra","oncopy|oncut|onselectstart|style|unselectable","body","stay"],["set","document.body.oncut","null"],["set","document.body.oncopy","null"],["aeld","/copy|cut|selectstart/"]],"gasometer.de":[["set-cookie","cookie_consent_external-media","true"],["set-cookie","cookie_consent_shown","true"],["set-cookie","cookie_consent_statistics","false"]],"gaypornmasters.com":[["aopr","document.oncontextmenu"]],"gaza.sk":[["set-cookie","visitedPopup","1"]],"gcol.de":[["set","realCookieBanner","undefined"]],"gdplayertv.co.uk":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"gdplayertv.org":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"gemeinde.percha.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.pfalzen.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.salurn.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.wolkensteiningroeden.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gesundheitsmanufaktur.de":[["set-local-storage-item","cookiePreference","required"],["set-local-storage-item","df-cookies-allowed","true"]],"getfizzy.co":[["set-cookie","age_verified","true"]],"ghostinternational.com":[["set-cookie","pum-9213","true"],["set-cookie","pum-9137","true"]],"gigantti.fi":[["set","cicc.cookie_cat_statistic","true"]],"gigasport.at":[["set-cookie","consentAll","1"]],"gitconnected.com":[["set-local-storage-item","201805-policy|accepted","1"]],"gogolf.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-advertisement","no"]],"gomovies.org":[["acs","document.oncontextmenu"]],"gomovies.sx":[["set-cookie","show_share","true"]],"goodgeorge.kiwi.nz":[["set-cookie","isAnAdult","true"]],"goodpods.com":[["set-local-storage-item","cookie_consent","accepted"]],"goodram.com":[["set-local-storage-item","consentCookie","true"]],"gpd-nordost-onlineberatung.de":[["rc","dp--cookie-consent","body","stay"]],"gq.co.za":[["set-cookie","PromptLater","true"]],"greaseball6eventual20.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"groedig.at":[["set-cookie","ris_cookie_setting","1"]],"gry.pl":[["set-cookie","OptanonAlertBoxClosed","true"]],"guide-bordeaux-gironde.com":[["set-cookie","cookieConsent-2023-03","false"]],"gutscheine.eurothermen.at":[["rc","dp--cookie-consent","body","stay"]],"handball-world.news":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"hannover-living.de":[["set","realCookieBanner","undefined"]],"harvester.co.uk":[["set-cookie","ce-cookie","N"]],"harveynorman.hr":[["set-cookie","cookieConsentGranted","1"]],"haus-bergbluemle.de":[["set-cookie","Consent","0"]],"hdrezka.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"heidegrill.com":[["set-cookie","cookie-preference","1"]],"heikkala.com":[["rc","wcc-popup-overflow","body","stay"]],"hemas.pl":[["aeld","contextmenu"]],"hentailib.me":[["set-local-storage-item","cookies-toast-shown","true"]],"heraldtribune.com":[["nostif","gnt_mol_oy"]],"hetzner.com":[["set-cookie","__Secure-HO_Cookie_Consent_Declined","1"]],"hianime.es":[["set","devtoolsDetector.launch","noopFunc"]],"hianime.nl":[["set","devtoolsDetector.launch","noopFunc"]],"hianime.pl":[["set","devtoolsDetector.launch","noopFunc"]],"hindi-gk.com":[["aopw","disableEnterKey"],["aopw","disable_copy"],["acs","document.oncontextmenu"],["aopw","disable_hot_keys"]],"hiphopa.net":[["rmnt","script","oncontextmenu"]],"holidayworld.com":[["set-cookie","pp-acknowledged","true"]],"hopheads.com.au":[["set-cookie","age-checked","1"]],"hotdk2023.kre.hu":[["rc","show--consent","body","stay"]],"hotelki.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hotelkristall.it":[["set","realCookieBanner","undefined"]],"howjsay.com":[["nostif","()","1500"]],"howtogeek.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"hs-soft.com":[["set","realCookieBanner","undefined"]],"hukmatpro.es":[["aopw","hidekeep"]],"hukmatpro.pl":[["aopw","hidekeep"]],"ici.tou.tv":[["set-cookie","toutv_cookies_usage_production","1"]],"icould.com":[["set-cookie","complianceCookie","true"],["set-cookie","gaconsent","true"]],"icourse163.org":[["aopr","document.oncontextmenu"],["aopr","document.oncopy"],["acs","document.onkeydown"]],"idar-oberstein.de":[["set-local-storage-item","PrivacyPolicy[][core]","forbidden"],["set-local-storage-item","PrivacyPolicy[][maps]","forbidden"],["set-local-storage-item","PrivacyPolicy[][readSpeaker]","forbidden"],["set-local-storage-item","PrivacyPolicy[][videos]","forever"]],"ieltsliz.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"imazing.com":[["set-cookie","__ddna__cookie_consent_analytics","false"],["set-cookie","__ddna__cookie_consent_marketing","false"]],"immobilien-skiba.de":[["set","realCookieBanner","undefined"]],"in.investing.com":[["set-cookie","r_p_s_n","1"]],"indiatimes.com":[["aeld","copy"]],"indystar.com":[["nostif","gnt_mol_oy"]],"innokin.com":[["set-cookie","ageCheck","1"]],"inquinte.ca":[["rc","blocked","body","stay"]],"inquirer.net":[["acs","document.createElement","admiral"]],"instagram.com":[["set-session-storage-item","lodum","1"],["set-session-storage-item","loggedOutCTAIsShown","1"],["set","_sharedData.is_whitelisted_crawl_bot","true"]],"instantspoursoi.fr":[["set-local-storage-item","agreeToCookie","false"]],"inverse.com":[["aeld","/^(mouseout|mouseleave)$/"]],"iphonecake.com":[["nosiif","visibility","1000"]],"it-koehler.com":[["set","realCookieBanner","undefined"]],"j91.asia":[["aeld","contextmenu"]],"jacquieetmichel.net":[["aopr","document.oncontextmenu"]],"jagledam.nl":[["aeld","contextmenu"],["set","document.oncontextmenu","null"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"jagledam.pl":[["aeld","contextmenu"],["set","document.oncontextmenu","null"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"japan-fans.com":[["acs","document.onmousedown"]],"jn.fo":[["set-cookie","analyticsStatus","false"],["set-cookie","socialMediaStatus","false"]],"jobs.fgcu.edu":[["set-cookie","ctc_rejected","1"]],"jobs2work.co.uk":[["set-cookie","cookiesallowedbyuser","1","","","reload","1"]],"johnlewis.com":[["set-cookie","JOHNLEWIS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1","","reload","1"],["set-cookie","JOHNLEWIS_ENSIGHTEN_PRIVACY_Essentials","1"]],"joska.com":[["set-cookie","cookie-consent","1","","reload","1"]],"jpwiserstour.ca":[["set-cookie","corby-agegate-jpw-ca","true"]],"jsonline.com":[["nostif","gnt_mol_oy"]],"juicefly.com":[["set-cookie","age-checked","1"]],"jusbrasil.com.br":[["set-cookie","br-lgpd-cookie-notice-agreement-v1","1"],["aeld","/^(?:contextmenu|copy)$/","preventDefault"]],"justinguitar.com":[["set-local-storage-item","cookie-consent-status","closed"]],"juwelier-dringo.de":[["set","realCookieBanner","undefined"]],"k-einbruch.de":[["set-cookie","cookie_consent","true"],["set-cookie","gtm-disable-GTM-NLVRXX8","true"]],"kanta.fi":[["set-cookie","KantafiCookies","false"]],"kapitalis.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"kaputt.de":[["set-cookie","CONSENT","1"],["set-cookie","advertisement","deny"],["set-cookie","functional_cookies","allow"],["set-cookie","marketing_cookies","deny"],["set-cookie","statistic_cookies","deny"]],"karyawanesia.com":[["aopr","document.oncontextmenu"]],"kasteninblau.de":[["set","realCookieBanner","undefined"]],"kastner-oehler.at":[["set-cookie","consentAll","0"]],"kbmv-matting.de":[["set","realCookieBanner","undefined"]],"kd-slovenija.de":[["set","realCookieBanner","undefined"]],"kenbrownmotors.co.uk":[["set-cookie","cookieAccepted","1","","reload","1"]],"ketogo.app":[["set-local-storage-item","cookie_consent","true"]],"kierratyskeskuspatina.fi":[["set-cookie","epCookieConsent","0","","reload","1"]],"kijyomatome-ch.com":[["ra","oncontextmenu|onselectstart","body"]],"kitepackaging.co.uk":[["set-cookie","cookie_consent","yes"],["set-cookie","cookie_consent_options","3"]],"klicks-kaufen.de":[["set","realCookieBanner","undefined"]],"knowyourmeme.com":[["acs","document.createElement","admiral"]],"kraftwerk.co.at":[["set-cookie","kraftwerkCookiePolicyState","1"]],"krav-maga-online.de":[["set-cookie","consent_cookie","declined"]],"ksef.podatki.gov.pl":[["set-local-storage-item","cookieconsent_status","true"]],"ksp.co.il":[["set","dataLayer","[]"],["set","gtag","noopFunc"]],"kto.com.br":[["set-cookie","caccept","on"]],"kto.ru":[["set-cookie","caccept","on"]],"kubikum.com":[["set-cookie","CookiePolicyAll","1","","reload","1"],["set-cookie","CookiePolicyComf","no"]],"kundenportal.harzenergie.de":[["set-local-storage-item","cookiesAccepted","true"]],"kurazone.net":[["aopw","clickIE4"],["aopw","disableSelection"]],"kyoceradocumentsolutions.it":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kytary.it":[["set-cookie","CookieConsent","0","","reload","1"]],"kyutai.org":[["set-local-storage-item","cookieConsent","false"]],"la-becanerie.com":[["set-cookie","cookieconsent2_dismissed","yes"]],"leeyiding.com":[["ra","oncontextmenu|onkeydown|onselectstart"]],"libgen.co.uk":[["nostif","appendMessage"]],"lichtempfindlich.org":[["set","realCookieBanner","undefined"]],"lightcon.com":[["set","realCookieBanner","undefined"]],"lighterusa.com":[["set-local-storage-item","theme_agegate_closed","1"]],"lincolncourier.com":[["nostif","gnt_mol_oy"]],"lingg-oberstdorf.de":[["set-cookie","Consent","0"]],"linuxslaves.com":[["aopw","hidekeep"]],"logonews.cn":[["set","document.oncopy","null"]],"longecity.org":[["set","abp","false"]],"lowcygier.pl":[["aeld","error","browser-plugin"]],"luel.ai":[["set-local-storage-item","cookie_consent","denied"]],"m-m-m.de":[["set","realCookieBanner","undefined"]],"m-tac.pl":[["set-cookie","config-message-052fd829-3229-4b96-a597-13e6f2ebee5f","1","","reload","1"]],"magesy.blog":[["noeval-if","disable_copy"],["aeld","contextmenu","preventDefault"]],"magesyrevolution.com":[["aeld","load","adblock"]],"makerz.me":[["set-local-storage-item","makerz_allow_consentmgr","0"]],"malcorentacar.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"malekal.com":[["nostif","adb"]],"mall.hr":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"mangaku.com":[["acs","$","contextmenu"],["aeld","contextmenu"]],"mangatoon.co.uk":[["acs","document.oncontextmenu"]],"mangatoon.es":[["acs","document.oncontextmenu"]],"mangatoon.it":[["acs","document.oncontextmenu"]],"manhuascan.io":[["set-session-storage-item","adt-accepted-5621","1"]],"marcos.com":[["set-cookie","cookiePreference","reject"]],"marieclaire.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"massivart.de":[["set-cookie","cookie-preference","1"]],"matkahuolto.fi":[["set-cookie","CookieConsentV2","YES"]],"maxstream.video":[["acs","document.body.oncontextmenu"],["aeld","contextmenu","preventDefault"],["aopr","onload"]],"medtube.es":[["set-cookie","cookiePolicy","4"]],"megacloud.tv":[["set","devtoolsDetector.launch","noopFunc"]],"meinstream.net":[["set","realCookieBanner","undefined"]],"mellerud.de":[["set-cookie","cookie-preference","1"]],"menrec.com":[["nosiif","offsetHeight"]],"mercenaryenrollment.com":[["acs","document.oncontextmenu"]],"metro1.com.br":[["set-local-storage-item","cookie","true"]],"mgsm.pl":[["acs","checkAdblockBait"]],"microfocus.com":[["set-cookie","EU_COOKIE_LAW_CONSENT","true"]],"mifcom.nl":[["set-cookie","cookie_accepted","1","","reload","1"],["set-cookie","cookie_closed","1"]],"minervababy.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"missinfogeek.net":[["set","realCookieBanner","undefined"]],"misskey.gamelore.fun":[["json-prune","ads.[].imageUrl"]],"mlb-korea.com.hk":[["set-cookie","allowGetPrivacyInfo","true"]],"mo-tools.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"mobiflip.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"mobilelegends.com":[["set-local-storage-item","SITE_2609202-COOKIE-BANNER","1"]],"momentbymoment.app":[["set-local-storage-item","mbm-analytics-consent","denied"]],"moneyweek.com":[["set-cookie","FTR_Article_PageView","2"]],"montgomeryadvertiser.com":[["nostif","gnt_mol_oy"]],"mora.hu":[["set-cookie","RBCookie-Alert","1"]],"moscow.shop.megafon.ru":[["set-cookie","cookie_toast","true"]],"motoblouz.com.br":[["set-cookie","accept_cookies_rgpd","1","","reload","1"]],"motoblouz.org":[["set-cookie","accept_cookies_rgpd","1","","reload","1"]],"motogon.ru":[["aopr","oSpPOptions"]],"moviepl.xyz":[["nostif","devtoolIsOpening","100"]],"mtishows.com":[["set-cookie","cookie-agreed","2"]],"myaccount.puffininsurance.com":[["set-cookie","fm-consent","1"]],"myclim8.com":[["set","realCookieBanner","undefined"]],"myhtebooks.com":[["ra","oncontextmenu|ondragstart|onselectstart|onselect|oncopy|onbeforecopy|onkeydown|onunload"]],"myriadicity.net":[["set-cookie","confirm_cookies","1"]],"mytwintiers.com":[["aeld","scroll"]],"mywot.com":[["set-cookie","cookies_consent_disclaimer","false"]],"ncrtsolutions.in":[["aopr","document.body.onselectstart"]],"neofinancial.com":[["set-local-storage-item","neoCookiesAdvertisingConsent","1"],["set-local-storage-item","neoCookiesPerformanceConsent","1"]],"netu.co.uk":[["set","devtoolsDetector.launch","noopFunc"]],"newgrounds.com":[["remove-cookie","_ngViCo-SupporterPromo"]],"newpharma.nl":[["set-cookie","gdpr-agree-cookie","1","","reload","1"],["set-cookie","gdpr-consent-cookie-level2","1"],["set-cookie","gdpr-consent-cookie-level3","1"]],"newportwinespirits.com":[["set-cookie","GmVerifiedClick","true"]],"news.dwango.jp":[["ra","oncontextmenu","body"]],"neyrologos.gr":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"ngs42.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"nhif.bg":[["set-cookie","gdpr","1"]],"nhm.ac.uk":[["set-cookie","nhm-functional-202308","1"],["set-cookie","nhm-marketing","0"],["set-cookie","nhm-performance","0"]],"nichepcgamer.com":[["rc","dragscroll"]],"nickiswift.com":[["aeld","copy"]],"njjzxl.net":[["aeld","contextmenu"]],"nogizaka46.com":[["ra","oncontextmenu"]],"nonli.com":[["set-local-storage-item","nonli_google_analytics_consent","denied"]],"nordkorea-info.de":[["set","document.oncontextmenu","null"],["aeld","/dragstart|keyup|keydown/"]],"northeastspace.ie":[["rc","wcc-popup-overflow","body","stay"]],"notify.events":[["set-cookie","_gdpr","necessary","","reload","1"]],"novelza.com":[["rc","click-to-scroll","body"],["acs","stopPrntScr"]],"novgorod.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"nutrimedium.com":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"oceana.org":[["set-cookie","HideDonationLightbox","1"]],"odout.com":[["set-cookie","allowGetPrivacyInfo","true"]],"ojskate.com":[["set-cookie","cookie-preference","1"]],"oncologynurseadvisor.com":[["remove-cookie","hmmet"]],"onlinepenztarca.hu":[["set-local-storage-item","felhasznalo_cookie_preferencia","0"]],"oponeo.es":[["set-cookie","_cookieConsents","1"]],"oponeo.nl":[["set-cookie","_cookieConsents","1"]],"originalstormtrooperbeer.com":[["set-cookie","age-checked","1"]],"orszak.org":[["set-cookie","privacy_popup","true","","reload","1"]],"otakudesu.co.uk":[["acs","document.oncontextmenu"]],"ouderenfonds.nl":[["set-cookie","cookie_consent","functional"]],"ourworldofpixels.com":[["set-cookie","nagAccepted","true"]],"ovpay.nl":[["set-cookie","dismissed_cookie_banner_recaptcha","true"]],"oxfamnovib.nl":[["set-cookie","advertisingCookies","Accepted","","reload","1"],["set-cookie","analyticsCookies","Accepted"],["set-cookie","functionalCookies","Accepted"]],"paapiidesign.com":[["set-local-storage-item","cookieConsent","true"]],"pandababy.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"parfum-zentrum.de":[["set-cookie","cookie-bar","0"]],"pashplus.jp":[["aeld","contextmenu"]],"paychex.com":[["set-cookie","ccpaaccept","true"]],"pc3mag.com":[["nostif","Adblocker","10000"]],"pccomponentes.it":[["set-cookie","accept_cookie","1"]],"peaks.com":[["set-cookie","allow_cookie","false"]],"pelispedia.com.br":[["aopw","document.oncontextmenu"],["ra","oncontextmenu"]],"pelispedia.ru":[["aopw","document.oncontextmenu"],["ra","oncontextmenu"]],"perpedale.de":[["rc","disable","div","stay"]],"personality-database.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"persuasion.community":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"petcity.lt":[["set-cookie","_consent_analytics","denied"],["set-cookie","_consent_marketing","denied"],["set-cookie","_consent_personalization","denied"],["set-cookie","gdpr_cookie_token","1"]],"petdesk.com":[["set-cookie","allowCookies","true"]],"phish-test.de":[["set-cookie","gtag","true"]],"photovoltaik-bw.de":[["set-cookie","CookieConsent","mandatory"]],"pigmentmarkets.com":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"pisr.org":[["aeld","","mdp"]],"pixeden.com":[["set-local-storage-item","pxdn_cookie_consent","true"]],"plavte.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"playcentral.de":[["set","realCookieBanner","undefined"]],"playtesting.games":[["set-cookie","myAwesomeCookieName3","true"]],"plusportal.hr":[["set-cookie","PLUSPORTAL_COOKIES_ACCEPT","1"]],"pobre.de":[["aeld","","blockFuckingEverything"],["aeld","contextmenu","preventDefault"],["aost","eval","build.js"]],"polagriparts.pl":[["aeld","/^(?:contextmenu|copy)$/"],["aopr","document.onkeydown"]],"polar.sh":[["set-local-storage-item","cookie_consent","no"]],"politico.com":[["remove-cookie","xbc"]],"polizei-beratung.de":[["set-cookie","cookie_consent","true"],["set-cookie","propk-googlemaps-permanent","true"]],"porndoe.com":[["set-cookie","_aCan_analytical","0"],["set-cookie","_aGaB","1"],["set-cookie","_cDaB","1"]],"porntv.us":[["ra","oncontextmenu|onkeydown|onselectstart","body","complete"],["rmnt","script","contextmenu"]],"portableapps.com":[["nostif","innerHTML"]],"postcrescent.com":[["nostif","gnt_mol_oy"]],"posterstore.de":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.es":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.hu":[["set-cookie","synapse-cookie-preferences-set","true"]],"printscan.com":[["set-cookie",".AspNet.Consent","yes","","reload","1"]],"proficient.fi":[["set-cookie","AcceptKeksit","0","","reload","1"]],"punto-informatico.it":[["aopr","blazemedia_adBlock"]],"puratos.es":[["set-cookie","functionalCookieAccepted","true"]],"putlocker.co.uk":[["aopw","document.oncontextmenu"]],"puzzle-stitches.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-tents.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-thermometers.com":[["rmnt","script","ab927c49cf1b"]],"qidian.com":[["aeld","/contextmenu|copy/"]],"qrcode.best":[["nostif","ad_blocker_detector_modal"]],"queensfishandchipsgloucester.co.uk":[["set-cookie","COOKIES_ACCEPTED","true"]],"radio-canada.ca":[["set-cookie","RC_NOTIFICATION_VIE_PRIVEE","false"]],"ranobelib.me":[["set-local-storage-item","cookies-toast-shown","true"]],"rapp.su":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"ras.bz.it":[["rc","dp--cookie-consent","body","stay"]],"raven-mythic.com":[["aopw","$adframe"]],"rayatoys.com":[["set-cookie","amcookie_allowed","1"]],"raymond-weil.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"read.amazon.com":[["aeld","contextmenu"]],"readnovel.com":[["aeld","contextmenu"],["aopr","LBF.define"]],"refurbishedstore.de":[["set-cookie","COOKIE_CONSENT","1","","reload","1"],["set-cookie","COOKIE_MARKETING","false"],["set-cookie","COOKIE_STATIC","false"]],"reise.ruter.no":[["set-cookie","r_hasConsent","true"]],"revanced.app":[["set-local-storage-item","analytics","false"]],"revl.co.uk":[["set-cookie","ageVerified","true"]],"riapsport.de":[["set-cookie","cookie-preference","1"]],"rodrigue-app.ct.ws":[["set-local-storage-item","cookieAccepted","true"]],"rolandgermany.com":[["set","realCookieBanner","undefined"]],"roschmann.de":[["set","realCookieBanner","undefined"]],"rottentomatoes.com":[["set","mps._queue.abdetect","null"]],"rovia.es":[["set-cookie","cookiesAccepted","1","reload","1"]],"rudalle.ru":[["set-cookie","myAwesomeCookieName2","true"]],"rukim.id":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"sachsen-netze.de":[["set-cookie","allowAnalyticalCookies","false"],["set-cookie","cookiesAccepted","true"]],"sarthaks.com":[["aeld","copy"]],"saucerco.com":[["set-cookie","newsletter-newsletter-popup","true"]],"sbflix.de":[["acs","onload","contextmenu"]],"scenexe.io":[["set-local-storage-item","ad_blocker","false"]],"schiffe-und-kreuzfahrten.de":[["set","realCookieBanner","undefined"]],"schnittmuster-datenbank.de":[["set","realCookieBanner","undefined"]],"scienceopen.com":[["set-cookie","cookiesAccepted","3"]],"seb.se":[["set-cookie","AcceptedCookieCategories","1"]],"secondlifetranslations.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"],["aost","encodeURIComponent","inlineScript"]],"seexh.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"seirsanduk.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seirsanduk.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"sekisuialveo.com":[["set-local-storage-item","cookies-eu-necessary","true"],["set-local-storage-item","cookies-eu-statistics","false"]],"seller.wildberries.ru":[["set-local-storage-item","cookies-agreed-sellers-external-HC","true"]],"settings.gg":[["set-local-storage-item","COOKIE_CONSENT","1"]],"seventhgeneration.com":[["set-cookie","cookie-agreed","0"]],"sexeo.de":[["set-cookie","cookie","accepted"]],"sflix.de":[["nostif","devtools"],["nosiif","/_0x|devtools/"],["aeld","contextmenu"]],"sflix.nl":[["nostif","devtools"],["nosiif","/_0x|devtools/"],["aeld","contextmenu"]],"shinbhu.net":[["aeld","contextmenu"],["acs","document.onkeydown"]],"shop-apotheke.at":[["set-session-storage-item","sae-conversational-consent-msg-closed","true"]],"shop-apotheke.com":[["set-session-storage-item","sae-conversational-consent-msg-closed","true"],["set-session-storage-item","ErxModal","true"]],"shop.cosmed.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.elbers-hof.de":[["set-cookie","cb_accepted","1"],["set-cookie","cb_validCookies","1"]],"shop.oettinger.de":[["set-cookie","allowCookie","1"]],"short-story.net":[["nostif","()","2000"]],"shortlist.com":[["set-cookie","FTR_Article_PageView","2"]],"similarweb.com":[["remove-cookie","sgID"],["rc","app-banner-parent","body","stay"]],"singaporeair.com":[["set-cookie","airTRFX_cookies","accepted"]],"sistemacomponentes.com.br":[["set-cookie","acceptCookies","1"]],"skionline.org":[["ra","oncontextmenu|oncopy|ondragstart|onselect|onselectstart","body","complete"]],"skouras-carpets.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"slowboring.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"smiley.blue":[["set","realCookieBanner","undefined"]],"smocca.jp":[["set","history.state","undefined"]],"smotreshka-tv.com.br":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrettv.it":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smow.fr":[["set-cookie","__compliance_cookie_2","111","","reload","1"]],"snapchat.com":[["set-cookie","EssentialSession","true"],["set-cookie","Marketing","false"],["set-cookie","Performance","false"],["set-cookie","Preferences","false"],["set-cookie","sc-cookies-accepted","true"]],"sneakerfreaker.com":[["set-cookie","sfConsent","denied"],["set-local-storage-item","cookieConsent","1"]],"snowpeak.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"societyliquor.co.nz":[["set-cookie","age_verification","yes"]],"sokolow-mlp.pl":[["acs","document.onmousedown"]],"solarmagazine.nl":[["no-xhr-if","ads"]],"spielen.com":[["set-cookie","OptanonAlertBoxClosed","true"]],"spieltraum-berlin.de":[["set","realCookieBanner","undefined"]],"sportnews.to":[["acs","document.getElementById","isMoz"],["acs","jQuery","keydown"],["set","document.onkeydown","null"],["set","document.onkeypress","null"]],"sqlserveregitimleri.com":[["acs","jQuery","contextmenu"]],"st-ulrich-steyr.ooe.gv.at":[["set-cookie","ris_cookie_setting","1"]],"standard.sk":[["set-cookie","standard_gdpr_consent","true"]],"starsunfolded.com":[["acs","document.oncontextmenu"],["aopw","disableSelection"]],"statesman.com":[["nostif","gnt_mol_oy"],["aopr","googletag"]],"staugustine.com":[["nostif","gnt_mol_oy"]],"store.servicenow.com":[["set-local-storage-item","sn.store.cookie_consent","1"]],"straitstimes.com":[["aeld","/^(mouseout|mouseleave)$/"]],"strangermeetup.com":[["set","adsEnabled","true"]],"streamtape.pl":[["aeld","contextmenu"],["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"strmix.com":[["set-cookie","CookieConsent","Necessary","","reload","1"]],"strtape.com.br":[["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"strtape.nl":[["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"strtape.pl":[["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"stw-langenfeld.de":[["set","realCookieBanner","undefined"]],"sugi-net.jp":[["set-cookie","cookie-use-accept","false"]],"supereight.net":[["set","realCookieBanner","undefined"]],"swatchseries.com.br":[["set-cookie","show_share","true"]],"swatchseries.fr":[["set-cookie","show_share","true"]],"swatchseries.ru":[["set-cookie","show_share","true"]],"swnsdigital.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"tabonitobrasil.fr":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["aeld","keydown","preventDefault"]],"tapology.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"taste-market.de":[["set-cookie","cookie-preference","1"]],"tastingtable.com":[["aeld","copy"]],"techemails.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"techmot24.pl":[["set-cookie","RodoPopup","0"]],"technoalpin.com":[["rc","dp--cookie-consent","body","stay"]],"tehnomix.bg":[["set-cookie","amcookie_allowed","1"]],"teket.jp":[["set-cookie","_ul_cookie_consent","allow"]],"telecom.economictimes.indiatimes.com":[["nostif","show-login-layer-article"]],"telefon-treff.de":[["acs","$","offsetHeight"]],"telepizza.es":[["set-cookie","AcceptAnalyticsCookies","false"],["set-cookie","AcceptFunctionalCookies","true"],["set-cookie","AcceptNonFunctionalCookies","false"]],"telli.dpd.ee":[["set-cookie","__cookie_consent","false"]],"texte.work":[["ra","onkeydown|oncontextmenu","body"],["aopw","document.oncontextmenu"],["aopr","disableselect"]],"thebootmappleboroughgreen.co.uk":[["set-cookie","ce-cookie","N"]],"thecockinncockfosters.co.uk":[["set-cookie","ce-cookie","N"]],"thefederalist.com":[["set-cookie","pum-276000","true"]],"theferry.co.uk":[["set-cookie","ce-cookie","N"]],"theflixertv.to":[["nosiif","_0x"]],"thegraph.com":[["set-cookie","cookie-consent","false"]],"thehawkeye.com":[["nostif","gnt_mol_oy"]],"theherald-news.com":[["nostif","null"]],"theradiatorcentre.com":[["set-cookie","ud_accept_analytical_cookies","0"],["set-cookie","ud_accept_marketing_cookies","0"]],"thestar.com.my":[["aeld","mouseleave"]],"thestudentroom.co.uk":[["set-cookie","_tsr_pc","0"]],"threesistersbrewery.store":[["set-cookie","isAnAdult","true"]],"tillit-bikes.shop":[["rc","disable","div","stay"]],"tobroco-giant.com":[["set-cookie","cookieWall","1"],["set-cookie","cookieWallOptIn","0"]],"tohkaishimpo.com":[["ra","oncontextmenu|onselectstart"]],"tools.jabrek.net":[["no-fetch-if","www3.doubleclick.net"]],"top.howfn.com":[["acs","document.onselectstart"]],"toppy.be":[["set-cookie","__toppy_consent","1"]],"toweroffantasy.info":[["rmnt","script","onerror"]],"tradingview.com":[["set-cookie","cookiePrivacyPreferenceBannerProduction","accepted"],["nostif","window.loginStateChange.subscribe"]],"truewealth.ch":[["set-cookie","tw_cc","false"]],"ttv.pl":[["aeld","contextmenu","a"]],"tunegate.me":[["ra","onContextmenu|onMouseDown|onSelectStart"]],"tunovelaligera.com":[["rmnt","script","/wccp|contextmenu/"],["rmnt","style","/wccp|user-select/"]],"turcolegal.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"turkishairlines.com":[["set-cookie","COOKIE_ADVERTISEMENTS","false"],["set-cookie","COOKIE_ANALYTICS","false"],["set-cookie","COOKIE_FUNCTIONAL","false"],["set-cookie","COOKIE_WARNING_ACCEPTED","false"],["set-cookie","COOKIE_WARNING_REJECTED","true"],["set-cookie","COOKIE_WARNING_VIEWED","true"]],"tutoganga.blogspot.com":[["aopw","disableselect"]],"tv-sport.de":[["set","realCookieBanner","undefined"]],"tvhay.com.br":[["rmnt","script","wccp_pro"]],"tvnoov.com":[["set","HTMLDivElement.prototype.oncontextmenu","trueFunc"]],"tvron.org":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"tyleenslang.nl":[["set-cookie","cookiebar","1"]],"uihtm.com":[["aeld","contextmenu"]],"unchartedterritories.tomaspueyo.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"uncrossy.com":[["set","cookieManager","{}"],["set","cookieManager.initialize","noopFunc"],["set","cookieManager.needsConsentBanner","falseFunc"]],"up4stream.com":[["rmnt","script","debugger"],["acs","document.onkeydown"],["set","devtoolsDetector","{}"]],"upitrek.com":[["rc","wcc-popup-overflow","body","stay"]],"urbania.ca":[["set-cookie","consent_given","true"]],"vacanceo.com":[["set-cookie","cookie_consent","0"]],"vanmossel.co.uk":[["set-cookie","gtmCookieAccepted","1"],["set-cookie","gtmCookiePopup","1"]],"vanmossel.es":[["set-cookie","gtmCookieAccepted","1"],["set-cookie","gtmCookiePopup","1"]],"vans.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"vapecoco.com":[["set","realCookieBanner","undefined"]],"vembed.nl":[["nosiif","devtool"],["nostif","devtool"],["rmnt","script","devtools"]],"vid-guard.com":[["nosiif","devtool"],["nostif","devtool"]],"videohelp.com":[["acs","document.getElementById","block"]],"videovard.com":[["set","console.clear","undefined"]],"vidmoly.net":[["rmnt","script","devtoolsDetector"],["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidmoly.nl":[["rmnt","script","devtoolsDetector"],["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidmoly.pl":[["rmnt","script","devtoolsDetector"],["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidmoly.ru":[["rmnt","script","devtoolsDetector"],["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"vidsrc.de":[["acs","RegExp.prototype.toString",".join(\"\")"],["aeld","keydown","123"],["nosiif","devtool"],["set","console.clear","trueFunc"],["set","DisableDevtool","noopFunc"],["set","devtoolsDetector.launch","noopFunc"]],"viewsofgreece.gr":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"vigill.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"vilgain.com":[["set-cookie","consent","0","","reload","1"]],"vinaurl.co.uk":[["ra","onkeydown"]],"vip-cam.xyz":[["set-cookie","agreeterms","1","","reload","1"]],"virginvoyages.com":[["set-session-storage-item","emailSignupModal_isShown","true"]],"visaonoticias.com":[["ra","oncontextmenu|onselectstart|ondragstart|onclick"]],"visnos.com":[["set-local-storage-item","2020-04-05","1"]],"vitalplus.com":[["set","realCookieBanner","undefined"]],"viveretenerife.com":[["aeld","contextmenu"]],"vixcloud.es":[["set","HTMLDivElement.prototype.oncontextmenu","null"],["aeld","contextmenu"]],"voe.sx":[["aeld","/keydown|keyup/","keyCode"],["aeld","contextmenu"]],"voirfilms.it":[["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"volonclick.it":[["set-cookie","COOKIES_CONSENT","0"]],"voltafinance.com":[["set-cookie","__wr_disclaimer_source","1"]],"von-neindorff-stiftung.de":[["set","realCookieBanner","undefined"]],"vrbo.com":[["rc","has-uitk-sheet","body","stay"]],"warnerbros.com":[["set-local-storage-item","wb-us-ltp-consent-v1","1"]],"watson.ch":[["nostif","AdBlocker"]],"wawlist.com":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["aopr","disableSelection"],["aeld","keydown"]],"wayfair.co.uk":[["set-cookie","user_cookie_prefs","1"]],"wcnc.com":[["aeld","/^(mouseout|mouseleave)$/"]],"weber-senf.at":[["set","realCookieBanner","undefined"]],"weetabix.fr":[["rc","wcc-popup-overflow","body","stay"]],"weetabix.no":[["rc","wcc-popup-overflow","body","stay"]],"wentronic.fr":[["set-cookie","COOKIES_ACCEPTED_new_1","essential","","reload","1"]],"wentronic.org":[["set-cookie","COOKIES_ACCEPTED_new_1","essential","","reload","1"]],"westhost.com":[["set-cookie","cb-enabled","accepted"]],"whatculture.com":[["set-cookie","FTR_Article_PageView","2"]],"wildpark-ortenburg.de":[["set","realCookieBanner","undefined"]],"windowspower.de":[["set","realCookieBanner","undefined"]],"witway.nl":[["set-cookie","cookiebar","1"]],"wnep.com":[["aeld","/^(mouseout|mouseleave)$/"]],"wohnmobilcenter-drechsler.de":[["set","realCookieBanner","undefined"]],"worldlibertyfinancial.com":[["set-local-storage-item","cookie_consent","false"],["set-local-storage-item","userAcceptedAnalytics","false"]],"wtol.com":[["aeld","/^(mouseout|mouseleave)$/"]],"www-cornwalllive-com.translate.goog":[["rmnt","script","loc.hostname"]],"www-kentlive-news.translate.goog":[["rmnt","script","loc.hostname"]],"www.ntv.co.jp":[["aeld","contextmenu","preventDefault"]],"xfce-look.org":[["rmnt","script","btnHtml"],["nano-stb","count"]],"xhamster.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster1.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster1.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster10.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster10.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster11.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster11.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster14.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster17.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster18.ru":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster2.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster2.nl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster3.com":[["set-cookie","cookie_accept","1"],["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster3.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster4.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster46.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster5.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster7.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster7.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster8.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster8.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xossipy.com":[["ra","oncopy|oncut"]],"yabelana.ukzn.ac.za":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"yeane.org":[["acs","document.oncontextmenu"]],"yesmovies.fr":[["set-cookie","show_share","true"]],"yourstorebox.com":[["set-cookie","rcl_consent_given","true"]],"yplay.de":[["set","realCookieBanner","undefined"]],"ytv.co.jp":[["aopr","document.oncontextmenu"]],"zappatos.pl":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zingtvhd.org":[["acs","onload","contextmenu"]],"zingtvhd.pl":[["acs","onload","contextmenu"]],"zipcode.com.ng":[["aeld","copy","Source"],["rmnt","script","document.onselectstart"]],"zlavomat.sk":[["set-cookie","c","0","","reload","1"]],"zoho.com":[["set-local-storage-item","zglobal_Acookie_optOut","3"]],"zora.co":[["set-local-storage-item","zora-discover-14-03-23","false"]],"zs-watch.com":[["set-cookie","hasPolicy","Y"]],"zwei-euro.com":[["nostif","Delay"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
