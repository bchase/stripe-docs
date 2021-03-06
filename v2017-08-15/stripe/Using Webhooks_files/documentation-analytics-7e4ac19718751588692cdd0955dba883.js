!function(){"use strict";function t(){var t=[].slice.call(arguments);o()&&console.log.apply(console,t)}function n(){var t={},n=document.getElementById("site-analytics-config");return n&&(t=JSON.parse(n.textContent)),t}function i(){return n().generalAnalyticsConfig||{}}function e(){return n().siteSpecificAnalyticsConfig||{}}function o(){return!!window[b]}function a(t,n){l("action",t,n)}function c(t,n){l("actionOnce",t,n)}function r(t,n){l("modal",t,n)}function s(t,n){l("viewed",t,n)}function l(t,n,i){window.Analytics?u(t,n,i):w(t,n,i)}function u(n,i,e){d();var o=y(e);window.Analytics[n](i,o),t("emit",n,i,o)}function d(){h||(window.Analytics.configure(i()),h=!0,t("Sent config data"))}function w(n,i,e){k.push([n,i,e]),g(),t("enqueue",n,i,e)}function f(){t("Flushing event queue"),d(),k.forEach(function(t){u.apply(this,t)})}function y(t){var n=i();return Object.keys(t||{}).forEach(function(i){n[i]=t[i]}),n}function g(){v||(v=setTimeout(A,U),U*=_)}function A(){v=null,window.Analytics?(f(),U=E):(g(),t("Ready timer waiting "+U+"ms"))}function m(t){window.ga&&window.ga.apply(this,t)}function p(){window.siteAnalyticsUtil.analyticsConfigData||(g(),window.siteAnalyticsUtil.debugActive=o,window.siteAnalyticsUtil.emitAction=a,window.siteAnalyticsUtil.emitActionOnce=c,window.siteAnalyticsUtil.emitModal=r,window.siteAnalyticsUtil.emitViewed=s,window.siteAnalyticsUtil.siteAnalyticsConfig=e,window.siteAnalyticsUtil.sendToGoogleAnalytics=m,window.siteAnalyticsUtil.generalAnalyticsConfig=i)}window.siteAnalytics=window.siteAnalytics||{},window.siteAnalyticsUtil=window.siteAnalyticsUtil||{};var v,h=!1,b="SITE_ANALYTICS_DEBUG",k=[],E=250,U=E,_=1.3;p()}(),function(){function t(t){var i=n(t),e={};return i.getAttribute(a)&&(e.action=i.getAttribute(a)),i.getAttribute(r)&&(e.modal=i.getAttribute(r)),i.getAttribute(c)&&(e.params={source:i.getAttribute(c)}),i.getAttribute(s)&&(e.googleAnalyticsParams=JSON.parse(i.getAttribute(s))),e}function n(t){return t.getAttribute(a)||t.getAttribute(r)?t:t.parentNode&&"BODY"!==t.tagName?n(t.parentNode):null}function i(t){return!!n(t)}function e(n){var i=t(n);i.modal&&window.siteAnalyticsUtil.emitModal(i.modal,i.params),i.action&&window.siteAnalyticsUtil.emitAction(i.action,i.params),i.googleAnalyticsParams&&window.siteAnalyticsUtil.sendToGoogleAnalytics(i.googleAnalyticsParams)}function o(){window.siteAnalytics.hasAnalyticsAttributes=i,window.siteAnalytics.trackByAttributes=e}var a="data-analytics-action",c="data-analytics-source",r="data-analytics-modal",s="data-analytics-ga";o()}(),function(){function t(){!function(t,n,i,e,o,a,c){t.fbq||(o=t.fbq=function(){o.callMethod?o.callMethod.apply(o,arguments):o.queue.push(arguments)},t._fbq||(t._fbq=o),o.push=o,o.loaded=!0,o.version="2.0",o.queue=[],a=n.createElement(i),a.async=!0,a.src=e,c=n.getElementsByTagName(i)[0],c.parentNode.insertBefore(a,c))}(window,document,"script","https://connect.facebook.net/en_US/fbevents.js")}function n(){window.fbq&&window.fbq("init",o)}function i(t){window.fbq&&t&&(window.fbq("track",t),window.siteAnalyticsUtil.debugActive()&&console.log("FB track",t))}function e(){t(),n(),window.siteAnalytics.trackFacebookEvent=i,i("PageView")}var o="742650679237989";e()}(),function(){function t(t){return t.matches("form *")}function n(n){t(n.target)&&window.siteAnalyticsUtil.emitAction(o,{name:n.target.getAttribute("name"),value:n.target.value})}function i(t){"FORM"===t.target.tagName&&window.siteAnalyticsUtil.emitAction(a)}function e(){document.addEventListener("change",n),document.addEventListener("submit",i)}var o="form_input",a="form_submit";e()}(),function(){function t(t){e[t]||(e[t]=!0,window.siteAnalyticsUtil.emitAction(i,{dropdown:t}))}function n(){window.siteAnalytics.trackGlobalNavDropdownOpen=t}var i="nav_dropdown_open",e={};n()}(),function(t,n,i,e,o){t[e]=t[e]||[],t[e].push({"gtm.start":(new Date).getTime(),event:"gtm.js"});var a=n.getElementsByTagName(i)[0],c=n.createElement(i),r="dataLayer"!=e?"&l="+e:"";c.async=!0,c.src="https://www.googletagmanager.com/gtm.js?id="+o+r,a.parentNode.insertBefore(c,a)}(window,document,"script","dataLayer","GTM-K8JKCBR"),function(){function t(){window.siteAnalyticsUtil.emitActionOnce(s)}function n(){window.siteAnalyticsUtil.emitActionOnce(l)}function i(t){var n=t.innerText.trim().toLowerCase();y[n]||(y[n]=!0,window.siteAnalyticsUtil.emitAction(u,{text:n}))}function e(t){var n=t.innerText.trim().toLowerCase();g[n]||(y[n]=!0,window.siteAnalyticsUtil.emitAction(d,{text:n}))}function o(t){window.siteAnalyticsUtil.emitAction(w,{category:t})}function a(t){window.siteAnalyticsUtil.emitAction(w,{query:t})}function c(){window.siteAnalyticsUtil.emitActionOnce(f)}function r(){window.siteAnalytics.trackConnectRoutingDiagram=e,window.siteAnalytics.trackHomePageNotebook=i,window.siteAnalytics.trackRadarIcosahedron=t,window.siteAnalytics.trackRadarFraudChart=n,window.siteAnalytics.trackSigmaQueryCategory=o,window.siteAnalytics.trackSigmaQueryExample=a,window.siteAnalytics.trackSigmaPricingSlider=c}var s="radar_icosahedron",l="radar_fraud_chart",u="home_page_notebook",d="connect_routing_diagram",w="query_category",f="pricing_slider",y={},g={};r()}(),function(){function t(t){return!!t.getAttribute("href")}function n(t){return t.trim().replace(/\s+/g," ")}function i(t){var n=t.className.toLowerCase(),i=t.getAttribute("href");return/\.pdf$|\.pdf#|\.pdf\?/i.test(t.href)?l:-1!==n.indexOf("button")||"#"===i?s:r}function e(t){var e=i(t),o={text:n(t.innerText)};window.siteAnalyticsUtil.emitAction(e,o)}function o(t){return"A"===t.tagName?t:t.parentNode?o(t.parentNode):null}function a(n){if(window.siteAnalytics.hasAnalyticsAttributes(n.target))return void window.siteAnalytics.trackByAttributes(n.target);var i=o(n.target);i&&t(i)&&e(i)}function c(){document.addEventListener("click",a)}var r="inline_link",s="button",l="pdf_link";c()}(),function(){function t(){if(n()){var t=window.siteAnalyticsUtil.generalAnalyticsConfig(),i=document.documentElement.id;window.siteAnalyticsUtil.emitViewed(i,t)}}function n(){return!!document.documentElement.id&&!!window.siteAnalyticsUtil.siteAnalyticsConfig().trackPageViewed}function i(){window.siteAnalytics.pageLoadTracking||(window.siteAnalytics.pageLoadTracking={trackPageView:t},window.addEventListener("load",t))}i()}(),function(){function t(t){return e(l,t)}function n(t){return e(d,t)}function i(t){return e(u,t)}function e(t,n){var i=n;"string"!=typeof n&&(i=a(n)),window.siteAnalyticsUtil.emitAction(t,{video:i})}function o(t){return t.currentSrc||t.getAttribute("src")||t.querySelector("source").getAttribute("src")}function a(t){var n=o(t),i=n.slice(n.lastIndexOf("/")+1);return i.slice(0,i.lastIndexOf("."))}function c(t){"VIDEO"===t.target.tagName&&n(t.target)}function r(t){"VIDEO"===t.target.tagName&&i(t.target)}function s(){document.addEventListener("play",c,!0),document.addEventListener("ended",r,!0),window.siteAnalytics.trackVideoExpand=t,window.siteAnalytics.trackVideoPlay=n,window.siteAnalytics.trackVideoEnd=i}var l="video_expand",u="video_end",d="video_play";s()}();var docsAnalytics=function(){function t(){"Analytics"in window&&"function"==typeof Analytics.action&&(hooks.push(n),n())}function n(){Analytics.viewed("docs",{docs_version:"2"}),i.forEach(function(t){t.onChange()})}var i=[];return{observers:i,init:t}}(),trackCodeCopies=function(){function t(t,n){for(;(t=t.parentElement)&&!t.classList.contains(n););return t}function n(){var n=window.getSelection();if(0!==n.rangeCount){var i=t(n.anchorNode.parentNode,"code"),o=t(n.focusNode.parentNode,"code");if(null!==i&&i===o){var a=i,c=e.find(function(t){return t.divs.includes(a)}),r=null;a.dataset&&a.dataset.language&&(r=a.dataset.language),Analytics.action("copied_selection",{order:c.order,codeBlockRef:c.page+"-"+c.order,language:r})}}}function i(){var t=document.querySelectorAll(".code");e=[];for(var n=0;n<t.length;n++){var i=t[n].parentElement,o=e.find(function(t){return i.classList.contains("tabs-content")&&t.parentEl===i});o?o.divs.push(t[n]):e.push({order:e.length,page:window.location.pathname,parentEl:i,divs:[t[n]]})}}var e=[];return document.addEventListener("copy",n),{onChange:i}}(),missingAnchorLink=function(){function t(){var t=window.location.hash;t.length>1&&(document.querySelector(t)||Analytics.action("missing_anchor_link",{page:window.location.pathname,hash:t}))}return{onChange:t}}(),searchResults=function(){function t(){if(n.children.length>0){var t=i.querySelector('input[type="search"]').value,e=n.querySelector("li.selected"),o=e.querySelector("a");if(t.length>0){var a=Array.prototype.indexOf.call(n.children,e);Analytics.action("search",{searchQuery:t,resultHref:o.href,resultIndex:a,resultTitle:o.text,resultPage:o.pathname,resultHash:o.hash})}}}var n=document.querySelector(".search-results ul.results"),i=document.querySelector(".search");new MutationObserver(function(i){i.forEach(function(i){i.addedNodes.length>0&&n.querySelectorAll("li a").forEach(function(n){n.addEventListener("click",t)})})}).observe(n,{childList:!0}),i.addEventListener("openSearchResult",t)}();docsAnalytics.observers.push(trackCodeCopies),docsAnalytics.observers.push(missingAnchorLink),docsAnalytics.init();