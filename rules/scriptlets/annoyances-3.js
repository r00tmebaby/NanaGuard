/* Scriptlet runtime (template). scripts/update-filters.mjs embeds per-site data and
 * writes rules/<category>-scriptlets.js, which background.js registers in the MAIN
 * world at document_start on the hosts that have scriptlets.
 * Implements the most used uBlock Origin / ABP scriptlets (clean-room). */
(() => {
  "use strict";
  const DATA = {"calls":{"123movies.it":[["acs","disableSelection","reEnable"],["acs","document.oncontextmenu"],["nostif","_0x"],["set","console.clear","noopFunc"]],"360doc.com":[["aopr","document.oncontextmenu"],["aopw","document.body.oncopy"],["set","document.body.onmouseup","null"]],"5asec.pt":[["rc","no-scroll","body","stay"]],"5sim.net":[["set-local-storage-item","isCookiesAccepted","true"]],"74.ru":[["set-local-storage-item","UMP_CONSENT_NOTIFICATION","true"]],"7misr4day.com":[["acs","document.oncontextmenu"],["acs","document.onselectstart"],["aopw","disableEnterKey"]],"aachen50plus.de":[["set","realCookieBanner","undefined"]],"abc7chicago.com":[["aeld","scroll"]],"abcteile24.de":[["set","realCookieBanner","undefined"]],"aboutchromebooks.com":[["aopr","googletag"]],"abril.com.br":[["aeld","copy"]],"acb.com":[["set-cookie","consent__marketing","false"],["set-cookie","consent__necessary","false"],["set-cookie","consent__preferences","false"],["set-cookie","consent__statistics","false"]],"addictinggames.com":[["rmnt","script","reviveScroll","excludes","self.__next"]],"adidas.cl":[["set-cookie","notice_preferences","2"]],"adidas.co.kr":[["set-cookie","notice_preferences","2"]],"adidas.com.ar":[["set-cookie","notice_preferences","2"]],"adidas.nl":[["set-cookie","notice_preferences","2"]],"adidas.pt":[["set-cookie","notice_preferences","2"]],"adventurespiele.net":[["set-local-storage-item","dataProtectionInfoAccepted","true"]],"adzurro.de":[["set","realCookieBanner","undefined"]],"agilox.net":[["rmnt","script","realCookieBanner"]],"ahepaseniorliving.org":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"aida64.com.ua":[["set-local-storage-item","set_cookie_stat","false"],["set-local-storage-item","set_cookie_tracking","false"]],"airchina.org":[["set-cookie","EnableABTest","false"],["set-cookie","EnableFacebook","false"],["set-cookie","EnableGA","false"]],"airchina.ru":[["set-cookie","EnableABTest","false"],["set-cookie","EnableFacebook","false"],["set-cookie","EnableGA","false"]],"airfrance.co.jp":[["aopw","gdpr_popin_path"]],"akasha.org":[["set-local-storage-item","akasha__cookiePolicy","true"]],"alfred.camera":[["aeld","DOMContentLoaded","ads"],["nosiif","ads"]],"alibaba.com":[["aeld","mouseleave"]],"allegro.net":[["set-cookie","gdpr_permission_given","0"]],"allkpop.com":[["aopr","__cmpGdprAppliesGlobally"]],"alphagirlreviews.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"amateur.tv":[["set-cookie","AdultContent","1","","reload","1"]],"americanaffairsjournal.org":[["remove-cookie","AAJPaywall"]],"amway-lithuania.com":[["set-cookie","isAnalyticsCookiesAccepted","false"],["set-cookie","isCookieConsentAccepted","true","","reload","1"]],"android1pro.com":[["rmnt","script","/contextmenu|wpcp/"]],"androidpolice.com":[["remove-cookie","articlesRead"],["remove-cookie","/articlesLimit|articlesRead|previousPage/","when","scroll keydown"],["set","maxUnauthenicatedArticleViews","null"]],"androidweblog.com":[["aeld","","t.preventDefault"]],"anikaitv.to":[["set","console.log","trueFunc"],["set","console.clear","trueFunc"]],"animecruzers.com":[["set","Object.prototype.preroll","[]"]],"animedao.com.br":[["aopr","devtoolsDetector"]],"anisearch.com":[["nostif","faq/whitelist"]],"anix.nl":[["nostif","||null"],["aost","console.clear"],["set","DisDevTool","undefined"]],"ankersolix.com":[["set-cookie","accept_cookies","accepted"]],"antpool.com":[["set-cookie","informedConsent","1"]],"appimagehub.com":[["rmnt","script","btnHtml"],["nano-stb","count"]],"aquis.eu":[["set-cookie","localConsent","false"]],"arbrikadrex.de":[["set-cookie","mnd-cookie-accepted-wwwarbrikadrexde1","1"]],"arcadiumlithium.com":[["set-cookie","terms_conditions_web","true"]],"ark-unity.com":[["no-fetch-if","/adsbygoogle|ad-manager/"]],"arkanium.serveminecraft.net":[["set-local-storage-item","cookiesAccepted","yes"]],"asheville.com":[["nostif","adblock"]],"asiatv.fr":[["aeld","contextmenu"]],"asiatv.ru":[["aeld","contextmenu"]],"asus.com":[["set-cookie","isReadCookiePolicyDNT","true"],["set-cookie","isReadCookiePolicyDNTAa","false"]],"atalmedial.nl":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"auth.kontur.ru":[["set-cookie","gdpr-consent","true"]],"auto-doc.es":[["aeld","mousedown","function(t)"]],"autobassadone.fi":[["set-cookie","av-cookieConsent","false"]],"autodoc.org":[["aeld","mousedown","function(t)"]],"autodoc.ru":[["aeld","mousedown","function(t)"]],"autodoc24.org":[["aeld","mousedown","function(t)"]],"autoform.pl":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"autohero.com":[["set-cookie","consent","1"]],"autos.suzuki.com.mx":[["set-cookie","suzuki-accept-cookie","true"]],"autoteiledirekt.de":[["aeld","mousedown","function(t)"]],"avclub.com":[["set-cookie","pm_email_popup_status","1"]],"backmarket.es":[["set-cookie","BM_Advertising","false","","reload","1"],["set-cookie","BM_Analytics","false"],["set-cookie","BM_User_Experience","true"]],"backmarket.ru":[["set-cookie","BM_Advertising","false","","reload","1"],["set-cookie","BM_Analytics","false"],["set-cookie","BM_User_Experience","true"]],"bancobpm.it":[["set-cookie","consent_glassbox","false"],["set-cookie","consent_mktg","false"]],"baselime.io":[["set-local-storage-item","closed","true"]],"bazarchic.com":[["set-cookie","RgpdBanner","1"],["set-cookie","_marketing","0"],["set-cookie","_performance","0"]],"bca.co.id":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"bcs-express.ru":[["set-local-storage-item","Express.cookie_agreement_shown","true"]],"bdb.com.pl":[["ra","oncopy|oncontextmenu|onselectstart|onselect|ondragstart|ondrag|onbeforeprint|onafterprint","body"]],"beinsports.com":[["set-cookie","use_cookie","1"]],"belstad.com":[["set-local-storage-item","is_announcement_closed","true"]],"bembed.net":[["nosiif","devtool"],["nostif","devtool"]],"bequiet.com":[["set-cookie","_CookiePolicyHint","true"]],"bestwig.de":[["set","realCookieBanner","undefined"]],"bettenconcept.com":[["rc","wcc-popup-overflow","body","stay"]],"betterhumans.pub":[["set-local-storage-item","201805-policy|accepted","1"]],"betway.com":[["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","BETWAY_ENSIGHTEN_PRIVACY_Marketing","0"],["set-cookie","betway-cookie-policy","true"],["set-cookie","bwui_cookieToastDismissed","true"]],"bflix.es":[["aeld","keydown","[arguments];"],["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"bflix.fr":[["aeld","keydown","[arguments];"],["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"bflix.it":[["aeld","keydown","[arguments];"],["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"bflix.org":[["aeld","keydown","[arguments];"],["set","console.clear","trueFunc"],["set","console.table","trueFunc"],["set","console.log","trueFunc"]],"bierspot.de":[["set","realCookieBanner","undefined"]],"bio-hoflieferant.de":[["set-cookie","accept_cookies","yes","","reload","1"]],"biomeo-environnement.com":[["rc","unreadable-display","","stay"]],"bitcoinsuisse.com":[["set-cookie","btcs-cookie-category-essentials","1"],["set-cookie","btcs-disclaimer","1"],["set-cookie","btcs-initial-redirect-done","1"]],"bitecode.dev":[["set-cookie","hideCookieBanner","true"]],"bittersandbottles.com":[["set-cookie","m_a_v","1"]],"blablacar.com.ua":[["set-cookie","_cookies_v2","1"]],"blablacar.rs":[["set-cookie","_cookies_v2","1"]],"blaze.pl":[["set-cookie","accept_policy_regulation","1"]],"blockdyor.com":[["set-cookie","cf_consent","false"]],"blog.csdn.net":[["aeld","copy","preventDefault"]],"blog.whatsapp.com":[["rc","hasCookieBanner","body","stay"]],"blome-uhren.de":[["set-cookie","juwcmp_external","0"],["set-cookie","juwcmp_retargeting","0"],["set-cookie","juwcmp_rolex","0"],["set-cookie","juwcmp_tracking","0"],["set-cookie","rlx-consent","false"]],"bloombergquint.com":[["aopw","addLinkToCopy"],["aopr","getSelection"]],"bloosz.nl":[["set-cookie","cookie_preference","functional"]],"bluemediafile.nl":[["set","Time_Start","0"],["nano-sib","i--","","0.02"]],"bluemediafile.pl":[["set","Time_Start","0"],["nano-sib","i--","","0.02"]],"bluesnews.com":[["nostif","nn_mpu1","5000"]],"bmovies.net":[["aeld","devtoolschange"]],"brachmannofficial.com":[["set","realCookieBanner","undefined"]],"brewersfayre.co.uk":[["set-cookie","consent_cookie","1"],["set-cookie","permissionExperience","false"],["set-cookie","permissionMarketing","false"],["set-cookie","permissionPerformance","false"]],"buckscountycouriertimes.com":[["nostif","gnt_mol_oy"]],"budgetair.co.uk":[["set-cookie","cookieConsentLevel","functional"]],"budgetair.net":[["set-cookie","cookieConsentLevel","functional"]],"bzgsaltenschlern.it":[["set-cookie","ris_cookie_setting","1"]],"c6bank.com.br":[["set-session-storage-item","ACCEPT_LGPD","true"]],"cabinetexpert.ro":[["aopw","disableEnterKey"],["aopw","document.ondragstart"]],"cagesideseats.com":[["nostif","()","1500"]],"calvinklein.net":[["set-cookie","PVH_COOKIES_GDPR","Accept"],["set-cookie","PVH_COOKIES_GDPR_ANALYTICS","Reject"],["set-cookie","PVH_COOKIES_GDPR_SOCIALMEDIA","Reject"]],"campingbuddies.de":[["set","realCookieBanner","undefined"]],"cantondailyledger.com":[["nostif","gnt_mol_oy"]],"carsguide.com.au":[["set","isAdblockDisabled","true"]],"celebjihad.live":[["set-cookie","isVisitorsAgreementAccepted","1","","reload","1"]],"cheaptickets.de":[["set-cookie","cookieConsentLevel","functional"]],"chemocare.com":[["set-cookie",".YourApp.ConsentCookie","yes","","reload","1"]],"chiashake.eu":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"chillx.top":[["aopr","devtoolsDetector"]],"china-central-consultants.com":[["set","realCookieBanner","undefined"]],"chipcitycookies.com":[["set-local-storage-item","cookie_consent","false"]],"chowhound.com":[["aeld","copy"]],"cic.ch":[["set-cookie","cookieconsent_status","allow"]],"cincinnati.com":[["nostif","gnt_mol_oy"]],"classic-emaille.de":[["set","realCookieBanner","undefined"]],"cloudiway.com":[["set","realCookieBanner","undefined"]],"cnn.co.jp":[["set-cookie","CNN_MAIL_MAGAZIN","1"]],"colourxh.site":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"columbiasportswear.at":[["set-cookie","Columbia_AT_emailPopup","1"]],"cornhub.army":[["set","realCookieBanner","undefined"]],"cotopaxi.com":[["set-cookie","cookie_notice","1"]],"crichype.co.uk":[["set","confirm","noopFunc"]],"cricketgully.com":[["set-local-storage-item","cookieConsent","true"]],"cristelageorgescu.ro":[["acs","document.oncontextmenu"],["aopr","disableSelection"],["aeld","","ctrlKey"],["aopr","document.onkeydown"],["aopr","document.oncopy"]],"crossculture-academy.com":[["set","realCookieBanner","undefined"]],"cuapp.com":[["set-cookie","allowGetPrivacyInfo","true"]],"cultistcircle.com":[["set-local-storage-item","cookieConsent","1"]],"curbed.com":[["nostif","adsBlocked"]],"currentargus.com":[["nostif","gnt_mol_oy"]],"cyberforum.de":[["rc","dp--cookie-consent","body","stay"]],"dagvandewetenschap.be":[["set-cookie","__cookie_consent","false"]],"daotranslate.com.br":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aeld","","undefined"]],"daotranslate.de":[["aopw","document.oncontextmenu"],["aopw","document.onselectstart"],["aeld","","undefined"]],"data-media.gr":[["set-cookie","data-privacy-statement","true"]],"daum.net":[["acs","document.oncontextmenu"],["ra","oncontextmenu"]],"dbschenker.com":[["set-cookie","allow-marketing-tracking","false"],["set-cookie","allow-statistical-tracking","false"],["set-cookie","privacy-notice-responded","0"],["set-local-storage-item","cookie_usage_acknowledged_2","1"],["set-local-storage-item","cookie_usage_acknowledged_2","true"]],"ddys.com":[["no-fetch-if","analytics"]],"ddys.ru":[["no-fetch-if","analytics"]],"de-appletradein.likewize.com":[["set-cookie","IsCookieAccepted","yes","","reload","1"]],"deep-shine.de":[["set-cookie","cookie-preference","1"]],"delaware.ru":[["set-cookie","DlwPro-DlwProWeb#essential","true"]],"democracynow.org":[["set-cookie","campaign_seen_today","true"]],"depop.com":[["set-cookie","gdpr__depop__functional","true"],["set-cookie","gdpr__facebook__social","false"],["set-cookie","gdpr__google__analytics","false"]],"der-postillon.com":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"desbloqueador.net":[["aopr","document.oncontextmenu"]],"descarga-animex.net":[["aeld","/^(?:contextmenu|keydown)$/"]],"dettol-store.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"developer.ing.com":[["set-cookie","cookiepref","true"]],"devm.io":[["set","realCookieBanner","undefined"]],"devowl.io":[["set","realCookieBanner","undefined"]],"dgsf.org":[["set-cookie","confirm_cookies","1"]],"digimobil.es":[["set-cookie","adsConsent","false"],["set-cookie","analyticsConsent","false"]],"do7go.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"docs.civic.com":[["set-cookie","__gitbook_cookie_granted","no"]],"docs.rehide.io":[["set-cookie","__gitbook_cookie_granted","no"]],"domeny.art.pl":[["set-cookie","artpl_cmp_cookies","accepted","","reload","1"]],"dood.nl":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doodstream.co.uk":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doodstream.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dooodster.com":[["set","console.clear","undefined"],["aeld","contextmenu"]],"dooood.de":[["set","console.clear","undefined"],["aeld","contextmenu"]],"doz.pl":[["set-cookie","consent-granted","1","","reload","1"],["set-cookie","consent-granted-version","23"]],"dramacute.com.br":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"dramacute.ru":[["acs","document.oncontextmenu"],["acs","disableSelection"]],"drawasaurus.org":[["nostif","forceRefresh"]],"drizly.com":[["set-local-storage-item","ageCheckConfirmed","true"]],"droptica.com":[["set-cookie","gtm-scripts-accepted-cookies-1712054031","required"]],"dubznetwork.com":[["acs","document.onkeypress"],["acs","jQuery","keydown"]],"dunkinextras.com":[["set-cookie","viewedCookieDisclaimer","true"]],"eca-anime.net":[["acs","document.getElementById","advert-tester"]],"economica.net":[["aeld","copy"]],"eezy.nrw":[["set-local-storage-item","contao-privacy-center.hidden","1"]],"ejwleo.de":[["set","realCookieBanner","undefined"]],"elektrikmen.com":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"emmi-caffelatte.com":[["set-cookie","cafe-latte-che-cookie-categories","essential"]],"endocrinologyadvisor.com":[["remove-cookie","hmmet"]],"equifab.es":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"equisud.com":[["rc","unreadable-display","","stay"]],"esimplus.me":[["set-cookie","cookie-consent","1","","reload","1"]],"estudio-nous.com":[["set","realCookieBanner","undefined"]],"ethiopianairlines.com":[["set-cookie","sf-tracking-consent","true","","","reload","1"]],"etwinning.at":[["set-cookie","cookieconsent_status_new","1"]],"eujuicers.co.uk":[["set-cookie","wsp_cc","1","","reload","1"]],"eurac.edu":[["set-cookie","eurac_cookie_consent","true"]],"eurogamer.net":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"eurogamer.pt":[["set","BrockmanAllowedCookies.functional","true"],["set","BrockmanAllowedCookies.targeting","true"]],"europixhd.com.br":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"europixhd.fr":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"europixhd.ru":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"eurosupps.nl":[["set-cookie","cookie-preferences-submitted20190710","true"]],"evasion-online.com":[["aopr","document.oncontextmenu"],["acs","document.onselectstart"]],"eventhotels.com":[["set","realCookieBanner","undefined"]],"examiner-enterprise.com":[["nostif","gnt_mol_oy"]],"extremeaudio.de":[["set-cookie","cookie-preference","1"]],"fabriziovanmarciano.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"fandom.com":[["set-cookie","leftPanelOpen","0"]],"fasteninfos.de":[["set","realCookieBanner","undefined"]],"fatalmodel.com":[["set-session-storage-item","CookieTerm18","true"]],"favi.it":[["set-cookie","__Host-cookie-consent","8","","reload","1"]],"favi.ru":[["set-cookie","__Host-cookie-consent","8","","reload","1"]],"felico.pl":[["acs","document.oncontextmenu"]],"fiio.com":[["aeld","/dragstart|selectstart|touchstart|mouse/","","elements",".w-slide"]],"finimize.com":[["set-cookie","cookie_consent","false"]],"firescans.xyz":[["acs","jQuery","hmwp_is_devtool"]],"firestream.com.br":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"firestream.ru":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"fitnesstukku.fi":[["set-cookie","set_functional_cookies","1"],["set-cookie","set_necessary_cookies","1"]],"fitzmuseum.cam.ac.uk":[["rc","show--consent","body","stay"]],"fiyat.mercedes-benz.com.tr":[["set-local-storage-item","isCookieAccepted","true"]],"fizz.hu":[["set-cookie","cookie.consent.finished","1"],["set-cookie","gdpr_level","1"]],"fletcher.nl":[["set-cookie","acceptCookies","true"]],"flickr.org":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"flinsetyadi.com":[["acs","document.ondragstart"],["acs","disableSelection","reEnable"],["aopr","disable_copy"]],"flixhq.it":[["nostif","||null"],["aost","console.clear"]],"flixhq.ru":[["nostif","||null"],["aost","console.clear"]],"flugschule-hochries.de":[["set","realCookieBanner","undefined"]],"flying15.org.uk":[["set-cookie","cookieconsent_status","dismiss","","reload","1"]],"foodker.hu":[["set","cookie_alert_overlay","noopFunc"]],"foodrepublic.com":[["aeld","copy"]],"ford-arndt-goerlitz.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-bodach-borgentreich.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-diermeier-muenchen.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-foerster-koblenz.de":[["set-cookie","hide-gdpr-bar","true"]],"ford-rennig.de":[["set-cookie","hide-gdpr-bar","true"]],"forum.digitalfernsehen.de":[["set-cookie","xf_notice_dismiss","1"]],"foto-shooting.ch":[["set","realCookieBanner","undefined"]],"fotor.com":[["nostif","offsetHeight"]],"foxtrail.fjallraven.com":[["set-cookie","fjallravenCookie","1"]],"foxvalleyfoodie.com":[["aopr","__cmpGdprAppliesGlobally"]],"fraudnavi.com":[["ra","oncontextmenu"]],"freemans.com":[["set-cookie","firstPartyDataPrefSet","true"]],"freerapidleechlist.blogspot.com":[["acs","document.oncontextmenu"]],"freesmsgateway.com":[["acs","$","modal_newsletter"]],"ft.com":[["aeld","copy","clipboardData"]],"fv2freegifts.org":[["acs","document.oncontextmenu"]],"gabriel-godard.com":[["rc","unreadable-display","","stay"]],"gadgethacks.com":[["set","WHT.ShowConsentForm","trueFunc"]],"gais.eu":[["set-cookie","ris_cookie_setting","1"]],"galleryxh.site":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"gandwfurniture.co.uk":[["set-cookie","as-set-cookies","true","","reload","1"]],"garyfeinbergphotography.com":[["aeld","contextmenu"]],"gasobni.com":[["aeld","contextmenu"],["aopr","HTMLElement.prototype.oncontextmenu"]],"gasthaus-schmidmayer.de":[["set","realCookieBanner","undefined"]],"gaz.com.br":[["aopw","document.onkeydown"]],"gdi-sh.de":[["set-cookie","externalVideosEnabled","true"],["set-cookie","gsbbanner","closed"]],"gdplayertv.com.br":[["set","devtoolsDetector.launch","noopFunc"],["aeld","contextmenu"]],"geeksforgeeks.org":[["nostif","onscroll","5500"],["nostif","login","5000"],["acs","showAdblockerModal"]],"gem.cbc.ca":[["set-cookie","gem_cookies_usage_production","1"]],"gem2go.info":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.partschins.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.rasenantholz.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.ritten.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.schluderns.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.schnals.bz.it":[["set-cookie","ris_cookie_setting","1"]],"gemeinde.stmartininthurn.bz.it":[["set-cookie","ris_cookie_setting","1"]],"genomicpress.kglmeridian.com":[["set-cookie","pf-cookie-banner-accepted","true"]],"gesundheitsamt-2025.de":[["set-cookie","COOKIE_LVL","1"]],"getemoji.com":[["set-session-storage-item","fs.adb.dis","1"]],"glass4u.sk":[["set-cookie","close_popup","1"]],"gledaitv.co.uk":[["aeld","contextmenu"],["nosiif","debugger"]],"gledaitv.de":[["aeld","contextmenu"],["nosiif","debugger"]],"gledaitv.net":[["aeld","contextmenu"],["nosiif","debugger"]],"global-messer.shop":[["set-cookie","youtube-video","1"]],"gls-group.eu":[["set-cookie","gls-cookie-policy","accepted"]],"gmarket.co.kr":[["set","document.oncontextmenu","noopFunc"],["set","document.onmousedown","noopFunc"]],"go.netia.pl":[["set-cookie","rodo-modal-displayed","1"],["set-cookie","rodo-reminder-displayed","1"]],"goerlach-gmbh.com":[["set","realCookieBanner","undefined"]],"goessential.com":[["set","realCookieBanner","undefined"]],"goindex.lt":[["set-cookie","user_cookie_consent","1"]],"gomovies.nl":[["acs","document.oncontextmenu"]],"googleapis.com.de":[["aeld","/contextmenu|keydown/"],["rmnt","script","/oncontextmenu|onselectstart/"]],"gooloo.de":[["set","realCookieBanner","undefined"]],"gpiaaf.gov.pt":[["set-cookie","WarningsAndPolicyAccepted","true"]],"gptgirlfriend.online":[["set-local-storage-item","cookie-consent","1"]],"grapengrain.com.au":[["set-cookie","age-checked","1"]],"grass.io":[["set-local-storage-item","acceptedAllCookies","false"],["set-local-storage-item","cookiePreference","essential"]],"grizly.cz":[["set-cookie","mCs-chk","1"]],"gronkh.tv":[["set-local-storage-item","grnk-cookies-accepted","true"]],"guiademayores.com":[["set","realCookieBanner","undefined"]],"guides4gamers.com":[["nostif","offsetHeight","100"]],"guildhalldental.com":[["rc","wcc-popup-overflow","body","stay"]],"h-andreas.com":[["set-cookie","cookie-preference","1"]],"handelsbanken.no":[["set-cookie","shb-consent-cookies","false"]],"harmanswineandspirits.com":[["set-cookie","isAnAdult","true"]],"hdrezka.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"hentailib.org":[["set-local-storage-item","cookies-toast-shown","true"]],"heraldmailmedia.com":[["nostif","gnt_mol_oy"]],"herzum.com":[["set-cookie","CookieConsent","false"]],"hetek.hu":[["rc","modal-open","body"]],"hh-taiwan.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"hillsdale.net":[["nostif","gnt_mol_oy"]],"himovies.de":[["set-cookie","show_share","true"]],"hindipix.nl":[["set","console.debug","trueFunc"],["set","console.clear","trueFunc"]],"hitproversion.com":[["aopr","disableEnterKey"],["aopw","document.ondragstart"]],"hkvastgoed.nl":[["set-cookie","consent-cookies","1"]],"hof-droste.de":[["set","realCookieBanner","undefined"]],"hofer-kerzen.at":[["set-cookie","cookie-preference","1","","reload","1"]],"homebrewwest.ie":[["set-cookie","euCookiePref","0","","reload","1"]],"homebuilding.co.uk":[["set-cookie","FTR_Article_PageView","2"]],"homesandgardens.com":[["set-cookie","FTR_Article_PageView","2"]],"hotleak.vip":[["aeld","contextmenu","preventDefault"],["aeld","keydown","123"]],"htvb.org":[["set","realCookieBanner","undefined"]],"humandataincome.com":[["set-local-storage-item","cookie-permission","false"]],"ibomair.com":[["set-cookie","cmplz_banner-status","dismissed"]],"iconoclasts.blog":[["set-cookie","gdpr_decline","1"]],"ielts.co.nz":[["set-cookie","acceptCookie","true"]],"ilovevaldinon.it":[["acs","document.oncontextmenu"],["aopr","disableSelection"]],"independentmail.com":[["nostif","gnt_mol_oy"]],"inderes.fi":[["set-cookie","inderes_consent","necessary"]],"indianhealthyrecipes.com":[["acs","document.oncontextmenu"],["acs","document.onkeydown"],["set","disableSelection","undefined"]],"industrialphysics.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"infectiousdiseaseadvisor.com":[["remove-cookie","hmmet"]],"infomoney.com.br":[["aopr","addLink"]],"informationisbeautiful.net":[["set-cookie","iib_signup_popup","-1"]],"injectjs.net":[["set-local-storage-item","injectjs-consent","denied"]],"innovationsstiftung-bildung.at":[["set-cookie","cookieconsent_status_new","1"]],"inscribed.app":[["set-local-storage-item","hasVisitedBefore","true"]],"intramuros.org":[["set-cookie","intramuros-analytics","false"],["set-cookie","intramuros-cookie-consent","true"]],"invado.pl":[["aeld","/contextmenu|copy/"]],"investorvillage.com":[["acs","update_visit_count"]],"ionmobile.es":[["set-cookie","policyDirective","rejected"]],"iqueen.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"ishoppurium.com":[["set-local-storage-item","isAcceptCookie","true"]],"itpro.com":[["set-cookie","FTR_Article_PageView","2"]],"itvn.pl":[["aeld","contextmenu","a"]],"iwanichi.co.jp":[["ra","oncontextmenu|onselectstart"]],"jagledam.co.uk":[["aeld","contextmenu"],["set","document.oncontextmenu","null"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"jagledam.org":[["aeld","contextmenu"],["set","document.oncontextmenu","null"],["set","HTMLDivElement.prototype.oncontextmenu","null"]],"japancamerahunter.com":[["acs","jQuery","ads"]],"jku.at":[["set-cookie","CookieConsent","required"]],"jornaldoalgarve.pt":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"jornaljoca.com.br":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"josefbergs.com":[["set","realCookieBanner","undefined"]],"kaiser-mania.de":[["set","realCookieBanner","undefined"]],"kamera-express.nl":[["set-cookie","cookie_accepted","false","","reload","1"]],"karate.com":[["set-cookie","cookie-consent","true"]],"karlknauer.de":[["set-cookie","cookieconsent_status","allow"]],"kashmirobserver.net":[["acs","document.getElementById","ad-blocker"]],"keighleynews.co.uk":[["aopr","_sp_.mms.startMsg"]],"kentucky.com":[["aeld","copy","linkPrefixMessage"]],"kika.nl":[["set-cookie","cookie_accepted","1"],["set-cookie","functional_cookies","1","","reload","1"]],"kinderleicht.berlin":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"kinechartreuse.com":[["rc","unreadable-display","","stay"]],"kinetico.co.uk":[["set-cookie","ud_accept_analytical_cookies","0"],["set-cookie","ud_accept_marketing_cookies","0"]],"kitzbuehel.at":[["set-cookie","ris_cookie_setting","1"]],"kollyinsider.com":[["aopw","adMessage"]],"kolnovel.com":[["acs","reEnable"],["acs","document.oncontextmenu"],["acs","jQuery","wccp_pro"],["acs","clear_body_at_all_for_extentions"],["set","nocontext","undefined"],["set","disable_hot_keys","undefined"]],"konicaminolta.us":[["set-cookie","konicaminolta.us","1"]],"ktla.com":[["aeld","scroll"]],"kto.net":[["set-cookie","caccept","on"]],"kyoceradocumentsolutions.com.br":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kyoceradocumentsolutions.us":[["set-cookie","marketingCookies","false"],["set-cookie","essentialsCookies","true"],["set-cookie","internalCookies","false"]],"kytary.de":[["set-cookie","CookieConsent","0","","reload","1"]],"la-grotta-solar.es":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_google_analytics","deny"],["set-cookie","ckies_google_maps","allow"],["set-cookie","ckies_youtube","allow"]],"la31devalladolid.com":[["set-cookie","cookies_surestao","accepted","","reload","1"],["set-cookie","lr_cookies_tecnicas","accepted"]],"labiosthetique.es":[["set-cookie","wt-cookie-settings","0"]],"labiosthetique.nl":[["set-cookie","wt-cookie-settings","0"]],"labiosthetique.org":[["set-cookie","wt-cookie-settings","0"]],"labreakfastburrito.com":[["aopr","PieScriptConfig"]],"labs.j-novel.club":[["aeld","contextmenu"]],"lasmallagency.com":[["set-cookie","gatsby-gdpr","false"]],"lassociation.fr":[["set-cookie","rgpdLassoCheck","1"]],"lataifas.ro":[["acs","document.oncontextmenu"],["acs","jQuery","oncontextmenu"],["aeld","","undefined"]],"latent.space":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"lazyinvestors.de":[["set","realCookieBanner","undefined"]],"learninsta.com":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"leman-instruments.com":[["rc","unreadable-display","","stay"]],"lenovocampus.de":[["set","realCookieBanner","undefined"]],"leo-pharma.com.br":[["set-cookie","isCookiePolicySet","false"]],"leo-pharma.de":[["set-cookie","isCookiePolicySet","false"]],"lesfruitsetlegumesfrais.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"levis.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"levne-sauny.cz":[["set","realCookieBanner","undefined"]],"libertatea.ro":[["aeld","copy"]],"libgen.it":[["nostif","appendMessage"]],"licensekeys.org":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"liddread.com":[["rmnt","script","/wpcp|contextmenu|unselectable/"]],"linmot.com":[["set-cookie","cookie_accept","true"]],"liquorland.co.nz":[["set-cookie","lq-age-gate","true","","reload","1"]],"liquoronbroadway.com":[["set-cookie","bouncer","true"]],"livetennis.it":[["ra","onselectstart","","stay"]],"livingetc.com":[["set-cookie","FTR_Article_PageView","2"]],"login.ingbank.pl":[["set-cookie","sat_track","false"]],"logo.pt":[["set-cookie","LG_COOKIE_CONSENT","0"],["set-cookie","cookieMessageDismissed","1"]],"lustery.com":[["set-local-storage-item","cookie-consent-banner","declined"]],"lwlies.com":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"lyricstranslate.com":[["set","getSelection","undefined"]],"majorgeeks.com":[["aopr","googletag"],["acs","document.getElementById","undefined"]],"mall.sk":[["set-cookie","mal_consent_gdpr_analytical","f","","reload","1"],["set-cookie","mal_consent_gdpr_personalization","f"],["set-cookie","mal_consent_gdpr_remarketing","f"]],"mamamia.com.au":[["set-local-storage-item","itbl_consent_timestamp","1"]],"mangatoon.pl":[["acs","document.oncontextmenu"]],"manhwa18.cc":[["nostif","detect_modal"]],"marketviewliquor.com":[["set-cookie","mlv_age_verify","1"]],"markimicrowave.com":[["set-local-storage-item","alreadyAcceptCookie","true"]],"mdlinx.com":[["nostif","show"]],"media.framu.world":[["aopr","nocontext"],["acs","disableSelection","reEnable"],["aopw","document.onkeydown"]],"megatube.xxx":[["ra","oncontextmenu"]],"memo-book.pl":[["set-cookie","rodo-acceptace","1"]],"mifcom.es":[["set-cookie","cookie_accepted","1","","reload","1"],["set-cookie","cookie_closed","1"]],"mikroutsikos.gr":[["set-cookie","cookieSettings","11","","reload","1"]],"milforddailynews.com":[["nostif","gnt_mol_oy"]],"mishpati.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"mkv-pastes.com":[["aeld","contextmenu"],["aopw","document.onselectstart"]],"mm9841.cc":[["acs","document.oncontextmenu"],["set","devtoolsDetector","undefined"]],"moegirl.org.cn":[["aeld","copy","jQuery!==\"undefined\""]],"moidom.citylink.pro":[["set-cookie","md-cookies-dialog","1"]],"money-sense.club":[["ra","oncontextmenu|onMouseDown|style"]],"monitoruldevrancea.ro":[["rmnt","script","stopPrntScr"],["rmnt","style","selection"]],"motoblouz.de":[["set-cookie","accept_cookies_rgpd","1","","reload","1"]],"motoclubernee.com":[["rc","unreadable-display","","stay"]],"motorsportreg.com":[["set-cookie","hasMadeConsentSelection","true","","","domain",".motorsportreg.com"],["set-cookie","hasMadeConsentSelectionGPC","true","","","domain",".motorsportreg.com"]],"moviepass.com":[["set-cookie","cookie-consent","true","/","dontOverwrite","1"]],"movies4us.com.br":[["set-local-storage-item","cookiePolicy","true"]],"movies4us.org":[["set-local-storage-item","cookiePolicy","true"]],"moviesjoy.pl":[["set-cookie","show_share","true"]],"music-service-geiger.de":[["set","realCookieBanner","undefined"]],"mybevstore.com":[["set-cookie","isAnAdult","true"]],"mydashboard.getlivesmart.com":[["set-cookie","consentAsked","1"]],"mytime.mk":[["set-cookie","site_cookie_info","2","","reload","1"]],"nationalexpress.de":[["set-local-storage-item","contao-privacy-center.hidden","1"]],"naver.com":[["aeld","/contextmenu|selectstart|dragstart/"]],"nbcchicago.com":[["aeld","scroll"]],"netu.org":[["set","devtoolsDetector.launch","noopFunc"]],"neuhauschocolates.com":[["set-cookie","consentTrackingVerified","true"]],"neumann-grafik.de":[["set-cookie","Consent","0"]],"neviditelnepradlo.cz":[["set-cookie","DmCookiesAccepted","true","","reload","1"],["set-cookie","DmCookiesAnalytics","false"],["set-cookie","DmCookiesMarketing","false"]],"news-journalonline.com":[["nostif","gnt_mol_oy"]],"news-leader.com":[["nostif","gnt_mol_oy"]],"nhentaihaven.org":[["acs","eval","contextmenu"]],"nhnieuws.nl":[["set-local-storage-item","psh:cookies-other","false"],["set-local-storage-item","psh:cookies-seen","true"],["set-local-storage-item","psh:cookies-social","true"]],"nihongoaz.com":[["rmnt","script","contentprotector"]],"nisoro.com":[["set-cookie","allowGetPrivacyInfo","true"]],"norwichbulletin.com":[["nostif","gnt_mol_oy"]],"notdiamond.ai":[["set-cookie","hidePopup","true"]],"observatoriodocinema.uol.com.br":[["acs","document.addEventListener","preventDefault"]],"ocala.com":[["nostif","gnt_mol_oy"]],"ocean.io":[["set-cookie","cookies","false"]],"oceanof-games.com":[["set","document.oncontextmenu","undefined"],["aopr","document.onkeydown"],["aopr","document.onselectstart"],["aopr","disableSelection"]],"oktea.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"okto.tv":[["set-cookie","disclaimer-saved","1"]],"omnisets.com":[["no-fetch-if","adsbygoogle"]],"online-arzt.gtv-europe.com":[["set-cookie","cookies-essential","true","","reload","1"]],"oparana.com.br":[["acs","document.oncontextmenu"]],"opayweb.com":[["set-cookie","CookieConsent","false"]],"openai.com":[["set-cookie","analytics_consent","rejected"],["set-cookie","marketing_consent","rejected"]],"opencycle.com":[["set-cookie","cookie-preference","1"]],"opensauce.com":[["set-local-storage-item","os_consent","denied"]],"opentip.kaspersky.com":[["set-local-storage-item","areCookiesAccepted","true"]],"oploverz.de":[["rmnt","script","contextmenu"],["rmnt","style","user-select"],["aopw","check"]],"oploverz.ru":[["rmnt","script","contextmenu"],["rmnt","style","user-select"],["aopw","check"]],"optionsgroup.com":[["set-local-storage-item","cookie-consent-declined-version","1"]],"orange.ro":[["aeld","/^(?:pointerdown|mousedown)$/","","elements",".js-pachete-online-internet2"]],"ordo.open.ac.uk":[["set-cookie","figshare-cookies-essential","true"],["set-cookie","figshareCookiesAccepted","true"]],"ortorex.ch":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"ownit.se":[["set-cookie","ownit_cookie_data_permissions","1"]],"oxfordonlineenglish.com":[["set-cookie","ooe_cookie_policy_accepted","no"]],"paizo.com":[["set-cookie","cookieBanner_092519","1","","reload","1"]],"palladiumboots.it":[["set-cookie","cookieconsent_status1","deny"]],"parkguellonline.cat":[["set-cookie","valCookie1","1"]],"parsatv.com":[["rmnt","script",".offsetHeight"]],"pedalcommander.co.uk":[["set-local-storage-item","COOKIE_BANNER_CLICKED","true"]],"pedalcommander.com.br":[["set-local-storage-item","COOKIE_BANNER_CLICKED","true"]],"pedalcommander.net":[["set-local-storage-item","COOKIE_BANNER_CLICKED","true"]],"pekintimes.com":[["nostif","gnt_mol_oy"]],"pelispedia.de":[["aopw","document.oncontextmenu"],["ra","oncontextmenu"]],"pelispedia.fr":[["aopw","document.oncontextmenu"],["ra","oncontextmenu"]],"pelispedia.nl":[["aopw","document.oncontextmenu"],["ra","oncontextmenu"]],"pepeporn.com":[["set-cookie","mayor_edad","1"]],"phimdinhcao.com":[["acs","oncontextmenu","keydown"],["aopr","devtoolsDetector"]],"pi3g.com":[["set","realCookieBanner","undefined"]],"pinterest.co.uk":[["set-local-storage-item","DWEB_PIN_IMAGE_CLICK_COUNT","$remove$"],["set-local-storage-item","unauthDownloadCount","$remove$"]],"pinterest.es":[["set-local-storage-item","DWEB_PIN_IMAGE_CLICK_COUNT","$remove$"],["set-local-storage-item","unauthDownloadCount","$remove$"]],"pinterest.it":[["set-local-storage-item","DWEB_PIN_IMAGE_CLICK_COUNT","$remove$"],["set-local-storage-item","unauthDownloadCount","$remove$"]],"pirmediat.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"playertv.net":[["rmnt","script","/contextmenu|devtool/"]],"plente.com":[["set-local-storage-item","cookiePolicy","true"]],"plos.org":[["set-cookie","plosCookieConsentStatus","false"]],"pnj.com":[["nostif","gnt_mol_oy"]],"pobre.nl":[["aeld","","blockFuckingEverything"],["aeld","contextmenu","preventDefault"],["aost","eval","build.js"]],"pobre.ru":[["aeld","","blockFuckingEverything"],["aeld","contextmenu","preventDefault"],["aost","eval","build.js"]],"pokaz.me":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"popmart.com":[["set-local-storage-item","HAS_AGREE_POLICY","true"]],"pornhub.de":[["rc","hasAdAlert","header"]],"posterstore.dk":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.no":[["set-cookie","synapse-cookie-preferences-set","true"]],"posterstore.nz":[["set-cookie","synapse-cookie-preferences-set","true"]],"poum-tchak-drum.ch":[["set-cookie","cookieConsentAgree","01","","reload","1"]],"premium-hifi-shop.com":[["set-cookie","cookieDeclined","1"]],"prenatal.nl":[["set-cookie","marketingCookies","false"]],"prepostseo.com":[["nostif","head"]],"profiel.de":[["set","realCookieBanner","undefined"]],"programasvirtualespc.net":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"protan-elmark.nl":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","rodopolicy","true"]],"protan-elmark.org":[["set-cookie","analytics","false"],["set-cookie","marketing","false"],["set-cookie","rodopolicy","true"]],"psmw.de":[["set-cookie","cookie_settings","1000"]],"puratos.org":[["set-cookie","functionalCookieAccepted","true"]],"puregoldprotein.com":[["set-local-storage-item","adsAccepted","false"],["set-local-storage-item","analyticsAccepted","false"],["set-local-storage-item","cookiesAccepted","true"]],"putlocker.com.br":[["aopw","document.oncontextmenu"]],"putlockernew.vc":[["aost","console.clear"]],"puzzle-battleships.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-bridges.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-galaxies.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-nonograms.com":[["rmnt","script","ab927c49cf1b"]],"puzzle-tapa.com":[["rmnt","script","ab927c49cf1b"]],"puzzleyou.be":[["set-cookie","puzzleyou-be_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.com":[["set-cookie","puzzleyou-ca_cookies_consent_allowlist","0","","reload","1"]],"puzzleyou.es":[["set-cookie","puzzleyou-es_cookies_consent_allowlist","0","","reload","1"]],"quantamagazine.org":[["set-cookie","acceptedPolicy","true"],["set-cookie","privacy-consent-given","0"]],"quotev.com":[["ra","onselectstart|ondragstart|oncontextmenu","div.story_text","complete"],["aopr","document.body.oncopy"]],"raceresult.com":[["set-cookie","CMSCookieLevel","1000","","reload","1"]],"rachelwine.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"radicalmotorsport.com":[["set-cookie","__radicalMotorsport.ac","true"]],"radichubu.jp":[["ra","onContextMenu","body"]],"ratschings.eu":[["set-cookie","ris_cookie_setting","1"]],"readergrev.com":[["set-cookie","popup_closed","true"]],"reading.ac.uk":[["set-cookie","privacy-notification","1","","reload","1"]],"realfinanceblogcenter.com":[["aeld","contextmenu","preventDefault"],["aeld","keydown","disabledEvent"]],"receptagemini.pl":[["set-local-storage-item","consents-analytics","false"]],"reddit.com":[["aeld","block-body-scrolling"],["rc","scroll-disabled","body","stay"],["set-local-storage-item","xpromo-consolidation","1"],["aeld","touchmove"],["rc","rpl-scroll-lock","body","stay"],["rc","scroll-is-blocked","body","stay"],["rc","thumbnail-blur","","stay"],["set-cookie","over18","1"]],"reifenservice-oberstdorf.de":[["set-cookie","Consent","0"]],"reisekontakte.at":[["set","realCookieBanner","undefined"]],"remington-europe.com":[["set-session-storage-item","cookies_dismissed","1"]],"renebieder.com":[["set-local-storage-item","agreed-cookies","true"]],"resonate.coop":[["set-cookie","cookieconsent_status","allow"]],"restaurant-stmichael.com":[["set-cookie","tincx_cookie_notice_accepted","true"]],"rg.ru":[["set-cookie","cookie_consent","1"]],"rgj.com":[["nostif","gnt_mol_oy"]],"rhymeandreason.beer":[["set-cookie","goodav_block_popup-1647","0"]],"ris.at":[["set-cookie","ris_cookie_setting","1"]],"rissland-kunststoffe.de":[["set","realCookieBanner","undefined"]],"ritten.eu":[["set-cookie","ris_cookie_setting","1"]],"rocklyric.jp":[["ra","oncopy|oncut|onmousemove|onmousedown|style","#lyric_area[oncopy]","complete"],["ra","oncontextmenu","#lyric_area > p[oncontextmenu]","complete"]],"rockpoint.cz":[["set-cookie","cookie-bar","0"]],"roomsandspaces.ca":[["set-cookie","cookieModal","false"]],"rotlichtaus.de":[["set","realCookieBanner","undefined"]],"rubyvid.com":[["aopr","devtoolsDetector"]],"rutele.top":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"s.tabelog.com":[["set-cookie","ignore_language_guide","true"]],"salina.com":[["nostif","gnt_mol_oy"]],"sandisk-cashback.de":[["set-cookie","Cookie_Category_analytics","false"],["set-cookie","Cookie_Category_tracking","false"],["set-cookie","Cookie_Consent","1"]],"saricurls.de":[["set-cookie","_pandectes_gdpr","1"]],"sartor-stoffe.de":[["set-cookie","cookie-bar","0"]],"sbflix.net":[["acs","onload","contextmenu"]],"scaleofuniverse.com":[["set-local-storage-item","email-subscribe-check-41be04a9","false"]],"schneidewind-immobilien.de":[["set-local-storage-item","pcClosedOnce","true"]],"schoenherr.eu":[["set-cookie","sch-ckmdl","true"]],"scholpp.pl":[["rc","with-featherlight","","stay"]],"scholtenswerkplek.nl":[["set-cookie","cmplz_banner-status","dismissed"]],"school.hh.ru":[["set-cookie","cookie_policy_agreement","true"]],"schools.by":[["aopr","all_delere_cookie"]],"schuetzendepot.de":[["set","realCookieBanner","undefined"]],"sebo.ddns.opc-asp.de":[["set-cookie","opc_webapp_cookiesaccepted_be264d3fecc64041f12c2afcba82edc0","1","","reload","1"]],"secretsofprivacy.com":[["rc","has-intro-popup","html","stay"],["rc","modal-in","html","stay"],["rc","show-intro-popup","html","stay"]],"seir-sanduk.com.br":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seir-sanduk.it":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seirsanduk.es":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"seirsanduk.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"senpa.io":[["aeld","contextmenu","_0x"]],"sflix.org":[["nostif","devtools"],["nosiif","/_0x|devtools/"],["aeld","contextmenu"]],"shareloft.com":[["set-cookie","shareloft_cookie_decision","1"]],"shl.fi":[["set-cookie","cmplz_banner-status","dismissed"]],"shop.3m.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.coville.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"shop.harveys.org.uk":[["set-cookie","age-checked","1"]],"shop.teascovery.com":[["set-cookie","allowGetPrivacyInfo","true"]],"shopping.copaair.com":[["set-cookie","gdprcm","true"]],"shopping.dradvice.asia":[["set-cookie","allowGetPrivacyInfo","true"]],"showtv.com.tr":[["set-cookie","cookiePolicy","1"]],"shrinkearn.com":[["acs","document.oncontextmenu"],["acs","document.onselectstart"]],"siliconinvestor.com":[["acs","document.getElementById","undefined"]],"sinemalar.com":[["set-cookie","cookie-disclaimer","1"]],"singkinderlieder.de":[["set-cookie","acceptMatomo","true"]],"skaling.de":[["set-cookie","cookie-byte-consent-essentials","true"],["set-cookie","cookie-byte-consent-showed","true"],["set-cookie","cookie-byte-consent-statistics","false"]],"slashfilm.com":[["aeld","copy"]],"slashgear.com":[["aeld","copy"]],"smartsavebank.co.uk":[["set-cookie","consent_to_cookies","true"]],"smotret-tv.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotret-tv.fr":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotret-tv.it":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotret-tv.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotret-tv.pl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrettv.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotrim-tv.nl":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smotritv.su":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"smow.de":[["set-cookie","__compliance_cookie_2","111","","reload","1"]],"smow.net":[["set-cookie","__compliance_cookie_2","111","","reload","1"]],"sneakernews.com":[["aopr","sneakerGoogleTag"]],"snippet.finance":[["set","realCookieBanner","{}"]],"solarmovie.pl":[["nostif","_detectLoop"]],"solo.io":[["set-cookie","solo_opt_in","false"]],"songbeam.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"sportland.es":[["set-cookie","amcookie_allowed","4"]],"sportland.org":[["set-cookie","amcookie_allowed","4"]],"sportplu-s.ru":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"sportvision.rs":[["set-cookie","site_cookie_info","0"]],"sshoc.eu":[["set-cookie","consent_3rdparties_cookies","false"],["set-cookie","consent_additional_cookies","false"],["set-cookie","consent_experience_cookies","false"],["set-cookie","consent_measurement_cookies","false"],["set-cookie","consent_targeting_cookies","false"]],"staff-gallery.com":[["set-cookie","gdpr_check_cookie","accepted","","reload","1"]],"stamceldonor.be":[["rc","cookieconsent-active","body","stay"]],"stargazette.com":[["nostif","gnt_mol_oy"]],"starresonance.th.gl":[["nostif",".getState();","4500"]],"starwalk.space":[["set-local-storage-item","SWCOOKIESACC","1"]],"starzunion.com":[["aeld","/^(contextmenu|mousedown|keydown)$/","preventDefault"]],"stcatharinesstandard.ca":[["remove-cookie","/^tncms:meter:/"]],"steamdeckhq.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-advertisement","no"],["set-cookie","cookielawinfo-checkbox-analytics","no"],["set-cookie","cookielawinfo-checkbox-performance","no"]],"stmp.it":[["set-cookie","ris_cookie_setting","1"]],"streambuddy.net":[["rmnt","script","oncontextmenu"]],"streamsb.net":[["acs","check","debugger"],["nosiif","_0x"]],"streamtape.nl":[["aeld","contextmenu"],["rmnt","script","/parseInt.*push.*setTimeout.*try.*catch/"]],"strkng.com":[["set-cookie","strkng_cookieconsent","1"]],"studienwahl.de":[["set-cookie","mrm_gdpr","1"],["set-cookie","necessary_consent","accepted"]],"sumsub.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-functional","yes"],["set-cookie","cookielawinfo-checkbox-necessary","yes"]],"sushi.com":[["set-cookie","accepted-cookies","essential","","reload","1"]],"swatchseries.com":[["set-cookie","show_share","true"]],"swatchseries.de":[["set-cookie","show_share","true"]],"systelia.fr":[["rc","unreadable-display","","stay"]],"tabonitobrasil.com.br":[["aopr","disableSelection"],["aopw","document.oncontextmenu"],["aeld","keydown","preventDefault"]],"takarasake.com":[["set-cookie","verified","yes"]],"talpo.it":[["set","x5engine.utils.imCodeProtection","null"]],"tampereenratikka.fi":[["set-cookie","viewed_cookie_policy","yes","","reload","1"],["set-cookie","cookielawinfo-checkbox-necessary","yes"],["set-cookie","cookielawinfo-checkbox-markkinointi","no"],["set-cookie","cookielawinfo-checkbox-tilastointi","no"]],"tannheimertal.com":[["set-cookie","cookieconsent_status","allow"]],"tcpalm.com":[["nostif","gnt_mol_oy"]],"techfundingnews.com":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"technologyreview.jp":[["remove-cookie","kpwc"]],"techsupportall.com":[["aeld","/^(?:contextmenu|copy|keydown)$/"]],"techtrickseo.com":[["aopw","disable_copy"],["aopw","disableSelection"]],"tester.userbrain.com":[["set-cookie","CookieConsent","false"]],"tfp.is":[["acs","document.oncontextmenu"]],"the-leader.com":[["nostif","gnt_mol_oy"]],"theappletreegerrardscross.co.uk":[["set-cookie","ce-cookie","N"]],"theartofnakedwoman.com":[["aopw","intializemarquee"]],"theartofnakedwoman.es":[["aopw","intializemarquee"]],"thebankplymouth.co.uk":[["set-cookie","ce-cookie","N"]],"thecavershamrosereading.co.uk":[["set-cookie","ce-cookie","N"]],"thecliffcanfordcliffs.co.uk":[["set-cookie","ce-cookie","N"]],"thedriftmag.com":[["remove-cookie","dpp_paywall"]],"thedukesheadcrawley.co.uk":[["set-cookie","ce-cookie","N"]],"thegrowthop.com":[["set-local-storage-item","page-age-gate-verified","true"]],"thelambchiswick.co.uk":[["set-cookie","ce-cookie","N"]],"thenorthface.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"thepalaceleeds.co.uk":[["set-cookie","ce-cookie","N"]],"thestarpress.com":[["nostif","gnt_mol_oy"]],"thevolunteernw1.co.uk":[["set-cookie","ce-cookie","N"]],"thiele-tee.de":[["set-cookie","cookie-preference","1"]],"thinkingaustralia.com":[["set-cookie","surbma-gpga","no"]],"tides.net":[["nostif","adsbygoogle"]],"tierklinik-hofheim.de":[["set-cookie","cookie-hint-default","1"],["set-cookie","cookie-hint-statistik","0"],["set-cookie","cookie-hint-youtube","1"]],"tiermaker.com":[["nostif","&adslot"]],"timesnownews.com":[["set-local-storage-item","useExitIntent","true"]],"timesonline.com":[["nostif","gnt_mol_oy"]],"titan.co.in":[["set-local-storage-item","cookiesModule","true"]],"tokuyo.com.tw":[["set-cookie","allowGetPrivacyInfo","true"]],"toontales.net":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"top4mobile.de":[["set-cookie","cookies-agreed","1"],["set-cookie","cookies-analytical","0"]],"topeuropix.nl":[["acs","document.onkeydown"],["acs","document.oncontextmenu"]],"torinostoria.com":[["set","realCookieBanner","undefined"]],"travelite.com":[["set-cookie","cookie-preference","1"]],"trirhena-consulting.de":[["set","realCookieBanner","undefined"]],"tritinia.com":[["acs","jQuery","keydown"],["aopr","document.oncontextmenu"],["aopr","disable_copy"]],"trixonline.be":[["set-cookie","_cookies-consent","yes"]],"tui.no":[["rc","no-scroll","body","stay"]],"tupiens-foodie.com":[["set-cookie","allowGetPrivacyInfo","true"]],"turboimagehost.com":[["set-cookie","cookiewarn","1"]],"tvn24.pl":[["aeld","contextmenu","a"]],"tvnfabula.pl":[["aeld","contextmenu","a"]],"tvron.fr":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"twenga.it":[["set-cookie","cookiewarning","1","","reload","1"]],"ufs.br":[["set-cookie","www.ufs.br","1"]],"uk.rs-online.com":[["set-cookie","RSCOMPONENTS_ENSIGHTEN_PRIVACY_Analytics","0"],["set-cookie","RSCOMPONENTS_ENSIGHTEN_PRIVACY_BANNER_LOADED","1"],["set-cookie","RSCOMPONENTS_ENSIGHTEN_PRIVACY_BANNER_VIEWED","1"]],"uk2.net":[["set-cookie","cb-enabled","accepted"]],"ultrahuman.com":[["set-local-storage-item","COOKIE_CONSENT","false"]],"unavidadeviaje.com":[["rc","show--consent","body","stay"]],"united-internet.de":[["set-cookie","cookieconsent_status","allow"]],"unlimitedfiles.xyz":[["acs","console.log","document.referer"]],"valid.x86.fr":[["rmnt","script","/setTimeout.*style/"]],"valtiokonttori.fi":[["set-cookie","cookieconsent_dismissed","no"]],"varcevanje-energije.si":[["set-cookie","cmplz_banner-status","dismissed"]],"vembed.es":[["nosiif","devtool"],["nostif","devtool"],["rmnt","script","devtools"]],"vembed.ru":[["nosiif","devtool"],["nostif","devtool"],["rmnt","script","devtools"]],"verbraucherrecht.at":[["set-cookie","vkicookieconsent","0"]],"verdadeiroolhar.pt":[["acs","document.onselectstart"]],"verdis.se":[["set-cookie","allow-all-cookies","0"],["set-cookie","analysis-cookies","0"],["set-cookie","initial-cookie-setting-done","1","","reload","1"]],"vibeslist.ai":[["set-local-storage-item","cookie_consent","denied"]],"vibuxer.com":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"videovard.co.uk":[["set","console.clear","undefined"]],"videovard.es":[["set","console.clear","undefined"]],"videovard.org":[["set","console.clear","undefined"]],"vidplay.co.uk":[["set","DisDevTool","undefined"]],"vidplay.com":[["set","DisDevTool","undefined"]],"vidplay.es":[["set","DisDevTool","undefined"]],"vidplay.net":[["set","DisDevTool","undefined"]],"vidplay.site":[["nostif","||null"],["aost","console.clear"]],"vidsrc.it":[["acs","RegExp.prototype.toString",".join(\"\")"],["aeld","keydown","123"],["nosiif","devtool"],["set","console.clear","trueFunc"],["set","DisableDevtool","noopFunc"],["set","devtoolsDetector.launch","noopFunc"]],"viel-unterwegs.de":[["set","realCookieBanner","undefined"]],"viks.tv":[["set","HTMLDivElement.prototype.oncontextmenu","null"]],"vinaurl.blogspot.com":[["acs","matchMedia"],["aopr","shortcut"],["acs","document.onkeydown"]],"vintageinn.co.uk":[["set-cookie","ce-cookie","N"]],"visefierbinti.ro":[["aopr","nocontext"],["acs","disableSelection","reEnable"]],"visitmedia.de":[["set","realCookieBanner","undefined"]],"viu.com":[["set-cookie","cookie_consent_accept","true"]],"vivamanchester.co.uk":[["set-cookie","complianceCookie","true"],["set-cookie","gaconsent","true"]],"vivenu.com":[["set-cookie","cookies-acknowledged","true","","reload","1"]],"vmake.ai":[["set-cookie","VMAKE_COOKIE_POLICY","0"]],"wallauonline.de":[["set","window.SteadyWidgetSettings.adblockActive","false"]],"wallygusto.de":[["set","realCookieBanner","undefined"]],"watch.lonelil.com":[["set","navigator.userAgent",""]],"watch.sonlifetv.com":[["set-cookie","gcp","1","","reload","1"]],"weatherbug.com":[["set-cookie","WB_CookieNotification","1"]],"weeb.tv":[["aeld","contextmenu"]],"wentronic.com":[["set-cookie","COOKIES_ACCEPTED_new_1","essential","","reload","1"]],"wentronic.de":[["set-cookie","COOKIES_ACCEPTED_new_1","essential","","reload","1"]],"westernjournal.com":[["aopr","__cmpGdprAppliesGlobally"]],"wevolver.com":[["set-cookie","cookiesConsent","false"]],"wfaa.com":[["aeld","/^(mouseout|mouseleave)$/"],["rc","video__docker_state_docked","","stay"]],"wheatonpm.com":[["set-cookie","cookiemonster-gdpr","1"]],"whiskyandmore.co.nz":[["set-cookie","allowage1","1"]],"wiibackupmanager.co.uk":[["no-fetch-if","adsbygoogle"]],"wildbits.de":[["set","realCookieBanner","undefined"]],"wjx.cn":[["aopr","_0x1a4c"],["aopr","document.oncontextmenu"],["aopr","document.onselectstart"]],"wolff-mueller.de":[["rc","dp--cookie-consent","body","stay"]],"woolsocks.eu":[["set-cookie","ws-cookie-Techniques","true"]],"workwide.de":[["set-session-storage-item","cookieModal2","1"]],"worldscientific.com":[["acs","document.getElementById","block"]],"worstbassist.com":[["set-cookie","ckies_cloudflare","allow"],["set-cookie","ckies_facebook_pixel","deny"],["set-cookie","ckies_google_analytics","deny"],["set-cookie","ckies_paypal","allow"],["set-cookie","ckies_web_store_state","allow"],["set-cookie","ckies_youtube","allow"],["set-local-storage-item","cookies-selected","true"]],"wrestlinginc.com":[["aeld","copy"]],"wstream.es":[["aeld","contextmenu","preventDefault"],["aopr","onload"]],"wsvn.com":[["aeld","/^(mouseout|mouseleave)$/"]],"wwnorton.com":[["set-cookie","privacyPolicyAccepted","true"]],"www-daftarharga.blogspot.com":[["acs","document.oncontextmenu"],["aeld","","keyCode"]],"x-team.com":[["set-cookie","google-tagmanager","false"]],"xhamster.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster1.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster1.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster10.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster11.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster12.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster13.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster13.de":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster16.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster16.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster18.com.br":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster19.com":[["set-cookie","cookie_accept","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster20.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster20.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster20.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster4.org":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster42.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster42.fr":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster42.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster46.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster5.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster5.net":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster5.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster7.co.uk":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster7.pl":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster8.com":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster8.es":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhamster8.it":[["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xhbranch5.com":[["set-cookie","parental-control","yes","","reload","1"],["set","initials.layout.layoutPromoProps.promoMessagesWrapperProps.shouldDisplayAdblockMessage","false"]],"xn--digitaler-notenstnder-m2b.com":[["set-cookie","epCookieConsent","0","","reload","1"]],"xymogen-sa.co.za":[["set-cookie","viewed_cookie_policy","yes","","reload","1"]],"yamibo.com":[["aeld","/contextmenu|selectstart|select|copy|dragstart/"]],"yaoilib.net":[["set-local-storage-item","cookies-toast-shown","true"]],"yesmovies.it":[["set-cookie","show_share","true"]],"yesmovies.net":[["set-cookie","show_share","true"]],"youmath.it":[["aopw","document.onmousedown"],["aopw","document.onselectstart"],["aopr","document.onselectstart"],["set","disableselect","trueFunc"]],"youtubekids.com":[["set","ytInitialPlayerResponse.auxiliaryUi.messageRenderers.upsellDialogRenderer","undefined"],["json-prune","auxiliaryUi.messageRenderers.upsellDialogRenderer"]],"yoyofilmeys.nl":[["acs","document.oncontextmenu"]],"yoyofilmeys.pl":[["acs","document.oncontextmenu"]],"ytcomment.kmcat.uk":[["set-cookie","privacy","true"]],"zapatos.com":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zapcars.co.il":[["set-local-storage-item","zapgroup_dev_policy_uuid","1"]],"zappatos.es":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zappatos.ru":[["set-cookie","consent_Advertising","0"],["set-cookie","consent_Analytics","0"],["set-cookie","hw_cookie_law","1"]],"zeinpharma.com":[["set-cookie","cookie-preference","1"]],"zerogpt.net":[["nostif","adsbygoogle"]],"zertificon.com":[["set","realCookieBanner","undefined"]],"zeta-ai.io":[["set-local-storage-item","mmkv.default\\ANONYMOUS_ACCEPT_COOKIE","true"]],"zingtvhd.co.uk":[["acs","onload","contextmenu"]],"zingvntv.it":[["acs","onload","contextmenu"]],"zirl.gv.at":[["set-cookie","ris_cookie_setting","1"]]},"off":{"bilibili.com":["[\"aost\",\"player.pause\",\"/[0-9a-f]{40}\\\\.js:1\\\\d{2}([\\\\S\\\\s]+\\\\.emit.+core\\\\.){3}/\"]"]}};
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
