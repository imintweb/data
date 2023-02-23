!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).whale=e()}(this,(function(){"use strict";function t(t,e){let n=0;if("object"==typeof(i=t)&&"number"==typeof i.length){const i=t.length;for(;n<i&&!1!==e.call(t[n],t[n],n);n++);}else for(n in t)if(!1===e.call(t[n],t[n],n))break;var i;return t}function e(e){return function(n,i){n.length||(n=[n]),t(n,(function(t){t.classList[e](i)}))}}const n=e("add"),i=e("remove"),c=e("toggle"),s={class:"is-active"};const o={Outside:class{constructor(t){this.element=t;const e=function({dataset:t}){const e={};return Object.keys(t).forEach((n=>{var i;e[n]="true"===(i=t[n])||"false"!==i&&(+i+""===i?+i:"null"===i||""===i?null:i)})),e}(t);this.config={...s,...e},this.target=e.target?document.getElementById(e.target):this.element,this.init()}init(){this.element.addEventListener("click",this.handleClick.bind(this))}handleClick(t){const e=this.element,c=this.target,s=this.config.class;!function(t,e){return t.classList.contains(e)}(c,s)?(n([e,c],s),document.addEventListener("click",(function n(o){o===t||o.target===c||c.contains(o.target)||(i([e,c],s),document.removeEventListener("click",n))}))):i([e,c],s)}}};return t({add:n,remove:i,toggle:c},((t,e)=>{o[e]=function(e){const n=e.getAttribute("data-target"),i=e.getAttribute("data-class")||"is-active",c=n?document.querySelectorAll(n):[e];c&&i&&e.addEventListener("click",(()=>{t(c,i)}))}})),t(o,((e,n)=>{const i=n.toLowerCase();t(document.querySelectorAll(`[data-wjs="${i}"]`),(t=>{new e(t)}))})),o}));
!function(){const e=(e,t)=>(t||document).querySelector(e),t=(e,t)=>(t||document).querySelectorAll(e),n=e=>document.getElementById(e),a=(e,t)=>Math.floor(Math.random()*(t-e+1)+e),c=e=>new Promise(((t,n)=>{let a=document.createElement("script");a.src=e,a.onload=t,a.onerror=n,document.head.appendChild(a)})),o=(e,t)=>{e.forEach((function(e){var n=document.createElement("button");n.className="code-copy",n.type="button",n.setAttribute("data-tts","up-right"),n.setAttribute("aria-label","نسخ"),n.innerHTML='<svg class="i i-copy" viewBox="0 0 24 24"><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/><rect width="13" height="13" x="9" y="9" rx="2"/></svg>',n.addEventListener("click",(function(){t.writeText(e.textContent).then((function(){n.blur(),n.setAttribute("aria-label","تم النسخ!"),setTimeout((function(){n.setAttribute("aria-label","نسخ")}),2e3)}))}));var a=e.parentNode;a.parentNode.classList.contains("highlight")&&a.parentNode.insertBefore(n,a)}))},r=e=>{let t=document.createElement("script");var n,a;t.src="https://giscus.app/client.js",n=e,a=t,Array.from(n.attributes).forEach((e=>{"class"!==e.nodeName&&a.setAttribute(e.nodeName,e.nodeValue)})),t.dataset.emitMetadata=0,t.crossOrigin="anonymous",t.async=!0,document.head.appendChild(t)},s=()=>{const e=new URLSearchParams(window.location.search),t=e.get("url"),n=e.get("hash");"download"===e.get("view")&&n&&t&&(document.location.href=t)},i=e(".giscus-meta"),d=e(".giscus-btn"),l=e(".purchase"),h=e(".toc"),u=e(".particle"),m=t("pre > code"),p=e(".post-counter");p?((e,t)=>{const n=setInterval((function(){t<=0?(clearInterval(n),s(),e.innerHTML="0"):e.innerHTML=t,t-=1}),1e3)})(p,4):setTimeout(s,4),m&&(navigator&&navigator.clipboard?o(m,navigator.clipboard):c("https://cdn.jsdelivr.net/npm/clipboard-polyfill@3/dist/main/clipboard-polyfill.min.js").then((()=>{o(m,navigator.clipboard)})).catch(console.error)),u&&((e,t=6)=>{for(let n=0;n<t;n+=1){let t=document.createElement("i");t.className="particle-item",t.style.cssText=`\n        --aq:${a(0,1)};--bq:${a(0,1)};\n        --az:${a(10,30)};--bz:${a(10,30)};\n        --al:${a(0,5)};--bl:${a(0,5)};\n        --ar:${a(5,30)};--br:${a(5,30)};\n      `,e.appendChild(t)}})(u),l&&(a=>{let c=t(".purchase-item",a),o=e(".purchase-guarantee",a),r=e(".purchase-extend",a),s=e(".purchase-method",a),i=e(".purchase-get",a),d=n("price"),l=d.innerText,h=t("input[type=radio]",a),u=n("GPL"),m=n("extend"),p=e(".purchase-confirm"),f="is-current";m&&m.addEventListener("click",(function(){c.forEach((function(e){e.classList.contains(f)&&(p.href=m.checked&&e.dataset.extend||e.dataset.href)})),u.checked||(d.innerText=m.checked?d.dataset.extend:l)})),c.forEach((function(e){e.addEventListener("click",(function(){c.forEach((e=>e.classList.remove(f))),e.classList.add(f),p.setAttribute("data-name",e.dataset.name),p.href=m.checked&&e.dataset.extend||e.dataset.href}))})),h.forEach((function(e){e.addEventListener("change",(function(){u.checked?(s&&s.classList.add("none"),o&&o.classList.add("none"),i&&i.classList.remove("none"),r&&r.classList.add("none"),d.innerText="$0.00"):(s&&s.classList.remove("none"),o&&o.classList.remove("none"),i&&i.classList.add("none"),r&&r.classList.remove("none"),d.innerText=m.checked?d.dataset.extend:l)}))}))})(l),h&&c("https://cdn.jsdelivr.net/npm/tocbot@4/dist/tocbot.min.js").then((()=>{tocbot.init({tocSelector:".toc",contentSelector:".article-body",ignoreSelector:".toc-ignore",headingSelector:"h2, h3, h4",orderedList:!1})})).catch(console.error),d?d.onclick=()=>{r(d),d.remove()}:i&&(r(i),i.remove()),document.body.classList.remove("preload")}();
/*!@zkreations/wjs.js@1.0.0*/
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).whale=e()}(this,(function(){"use strict";function t({dataset:t}){const e={};return Object.keys(t).forEach((n=>{var i;e[n]="true"===(i=t[n])||"false"!==i&&(+i+""===i?+i:"null"===i||""===i?null:i)})),e}function e(t,e){let n=0;if("object"==typeof(i=t)&&"number"==typeof i.length){const i=t.length;for(;n<i&&!1!==e.call(t[n],t[n],n);n++);}else for(n in t)if(!1===e.call(t[n],t[n],n))break;var i;return t}function n(t){return function(n,i){n.length||(n=[n]),e(n,(function(e){e.classList[t](i)}))}}function i(t,e){return t.classList.contains(e)}const c=n("add"),s=n("remove"),o=n("toggle"),l="is-active";const a={outside:!1},r="is-active";const d={class:"is-active"};const u={Tab:function(t){let n;e(t.querySelectorAll("[data-target]"),(t=>{const e=document.getElementById(t.dataset.target);i(t,l)&&(n=[t,e],c(e,l)),function(t,e,n){t.addEventListener(e,n)}(t,"click",(()=>{const i=[t,e];n&&s(n,l),n=i,c(n,l)}))}))},Accordion:class{constructor(e){this.element=e,this.active=!1;const n=e.querySelectorAll("[data-toggle]");this.config={...a,...t(e)},n&&(this.titles=n,this.init())}init(){e(this.titles,(t=>{const e=t.parentNode,n=e.parentNode.querySelectorAll("[data-item]");t.addEventListener("click",(t=>{const o=this.config.outside?e=>{t===e||this.element.contains(e.target)||n.length&&(s(n,r),this.active=!1)}:()=>{};this.active||(document.addEventListener("click",o),this.active=!0),i(e,r)?s(e,r):(n.length&&s(n,r),c(e,r))}))}))}},Outside:class{constructor(e){this.element=e;const n=t(e);this.config={...d,...n},this.target=n.target?document.getElementById(n.target):this.element,this.init()}init(){this.element.addEventListener("click",this.handleClick.bind(this))}handleClick(t){const e=this.element,n=this.target,o=this.config.class;i(n,o)?s([e,n],o):(c([e,n],o),document.addEventListener("click",(function i(c){c===t||c.target===n||n.contains(c.target)||(s([e,n],o),document.removeEventListener("click",i))})))}}};return e({add:c,remove:s,toggle:o},((t,e)=>{u[e]=function(e){const n=e.getAttribute("data-target"),i=e.getAttribute("data-class")||"is-active",c=n?document.querySelectorAll(n):[e];c&&i&&e.addEventListener("click",(()=>{t(c,i)}))}})),e(u,((t,n)=>{const i=n.toLowerCase();e(document.querySelectorAll(`[data-wjs="${i}"]`),(e=>{new t(e)}))})),u}));
/*!@zkreations/maily@2.0.0*/
!function(){document.body.classList.remove("preload");const e=document.documentElement,t=document.querySelectorAll(".nav-subnav .nav-link");t.length&&t.forEach((e=>e.innerHTML=e.innerHTML.replace(/_/g,"")));const o=window.matchMedia("(prefers-color-scheme: dark)"),r=document.querySelector('meta[name="color-scheme"]'),n=t=>{e.dataset.theme=t,r.content=t},a=()=>{n(o.matches?"dark":"light")},l=document.querySelector(".post-content");(e=>{if(e){var t=e.querySelectorAll("h1, h2, h3, h4, h5, h6"),o={};Array.prototype.forEach.call(t,(function(e){var t=e.id?e.id:e.textContent.trim().toLowerCase().split(" ").join("-").replace(/[!@#$%^&*():]/gi,"").replace(/\//gi,"-");o[t]=isNaN(o[t])?0:++o[t],o[t]?e.id=t+"-"+o[t]:e.id=t}))}})(l);const c=(e,t)=>{e.forEach((function(e){var o=document.createElement("button");o.className="hljs-copy",o.type="button",o.setAttribute("data-tts","up-right"),o.innerHTML='<svg class="i i-copy" viewBox="0 0 24 24"><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/><rect width="13" height="13" x="9" y="9" rx="2"/></svg>',o.addEventListener("click",(function(){t.writeText(e.textContent).then((function(){o.blur(),o.classList.add("copied"),setTimeout((function(){o.classList.remove("copied")}),2e3)}))})),e.parentNode.insertBefore(o,e)}))},s=(e,t)=>{let o=t.tagName.charAt(1),r=document.createElement("li"),n=document.createElement("a");if(n.href=`#${t.id}`,n.className="toc-link",n.innerHTML=t.innerText,r.appendChild(n),r.dataset.level=o,r.className="toc-item","ol"==e.tagName.toLowerCase())return e.appendChild(r),r;if(o>e.dataset.level){let t=e.getElementsByTagName("ol")[0]?e.getElementsByTagName("ol")[0]:document.createElement("ol");return t.classList.add("toc-list"),t.appendChild(r),e.appendChild(t),r}return e.parentNode.parentNode?s(e.parentNode.parentNode,t):(e.parentNode.appendChild(r),r)},i=e=>{window.disqus_config=function(){this.page.url=e.dataset.postUrl,this.page.identifier=e.dataset.postId};const t=document.createElement("script");t.src=`https://${e.dataset.shortname}.disqus.com/embed.js`,t.setAttribute("data-timestamp",+new Date),(document.head||document.body).appendChild(t)},d=document.getElementById("filterForm"),m=document.getElementById("disqus_thread"),u=document.getElementById("disqus_btn"),h=document.getElementById("comments"),g=document.getElementById("cmtfpIframe"),p=document.querySelector(".has-highlight"),f=document.querySelector(".widget.PopularPosts :where(.slider,.carousel) [data-flickity]"),y=document.querySelector(".widget.PopularPosts :where(.slider,.carousel) [data-autoplay]"),v=document.querySelector(".toc"),b=document.querySelectorAll(".alert-close"),E=document.querySelectorAll("pre > code"),S=document.querySelector(".theme-toggle"),k=document.querySelector('meta[name="home-blog-admin"]'),q=document.querySelectorAll(".inner-content"),L=document.querySelector('meta[name="google-adsense-client"]'),w=()=>{L&&Defer.js(`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${L.content}`,"adsbygoogle",200)};S&&(t=>{let l=localStorage.getItem("theme")||(e.dataset.theme??"system");if(!t)return"light dark"==r.content&&o.addEventListener("change",a);function c(e){return"light"===e?(o.removeEventListener("change",a),"light"):"dark"===e?"dark":(o.addEventListener("change",a),o.matches?"dark":"light")}n(c(l)),t.setAttribute("aria-label",l),t.onclick=()=>{let e=function(e){return"system"===e?"light":"light"===e?"dark":"system"}(l);l=e,localStorage.setItem("theme",e),n(c(e)),t.setAttribute("aria-label",e)}})(S),q.length?(async(e,t)=>{let o=e.dataset.contentEvery||4,r=e.querySelectorAll(`:scope > p:nth-of-type(${o}n)`),n=e.querySelectorAll(`:scope > div:nth-of-type(${o}n)`);slots=Array.from(0==r.length?n:r).slice(0,t.length),await t.forEach(((e,t)=>{let o=slots[t];if(o){const t=new DOMParser,r=e.querySelector("textarea").value,n=t.parseFromString(r.trim(),"text/html");o.parentNode.insertBefore(n.body.firstChild,o.nextSibling),e.remove()}else e.remove()}))})(l,q).then((e=>{w()})):w(),((e,t)=>{if(!e)return;const o=e.dataset.autoToc||!1;if(!t&&!o)return;const r=`:where(${e.dataset.tags||"h2, h3, h4"}):not(.toc-ignore)`;let n=e.querySelectorAll(r),a=e.querySelectorAll("p"),l='<input class="none" id="toc-toggle" type="checkbox"><label class="toc-toggle" for="toc-toggle"></label>',c=document.createElement("ol");c.classList.add("toc-list");let i=c;n.forEach((e=>{i=s(i,e)}));let d=document.createElement("div");if(d.classList.add("toc-content"),d.appendChild(c),!t&&o){let t=document.createElement("div");switch(t.classList.add("toc"),t.innerHTML=l,t.appendChild(d),t.classList.add("toc-loaded"),o){case"before-first-heading":e.insertBefore(t,n[0].previousSibling);break;case"before-first-paragraph":e.insertBefore(t,a[0].previousSibling);break;case"after-first-heading":e.insertBefore(t,n[0].nextSibling);break;case"after-first-paragraph":e.insertBefore(t,a[0].nextSibling);break;default:e.insertBefore(t,e.firstChild)}}else{if(!t)return;t.innerHTML=l,t.appendChild(d),t.classList.add("toc-loaded")}})(l,v),d&&(e=>{const t=document.getElementById("filter"),o=document.getElementById("strict-mode"),r=document.getElementById("by-date"),n=document.getElementById("q");function a(){let t=e.querySelectorAll("input[name=cat]:checked"),a=t?Array.from(t).map((e=>"label:%22"+e.value+"%22")):"";var l="?q="+(n&&""!==n.value?n.value.trim():i);0!==a.length&&(l+="%20"+a.join(o&&o.checked?"%20":"%7C")),l+=r&&r.checked?"&by-date=true":"&by-date=false",l+=o&&o.checked?"&strict-mode=true":"&strict-mode=false",window.location.href=e.dataset.action+l}let l=new URL(window.location.href),c=new URLSearchParams(l.search);var s=c.has("q")?c.get("q"):"",i=(s.includes("label:")?s.substring(0,s.indexOf("label:")):s).trim();t&&(t.onclick=()=>{a()}),"true"==c.get("strict-mode")&&(o.checked=!0),"true"==c.get("by-date")&&(r.checked=!0),n&&(n.value=i,n.addEventListener("keydown",(function(e){"Enter"===e.key&&a()})))})(d),b.length&&(e=>{let t=localStorage.getItem("close_alerts")?JSON.parse(localStorage.getItem("close_alerts")):[];e.forEach((e=>{let o=e.parentNode;e.addEventListener("click",(function(){t.push(`#${o.id}`),localStorage.setItem("close_alerts",JSON.stringify(t)),o.remove()}))})),t&&t.forEach((e=>{let t=document.querySelector(e);t&&t.remove()}))})(b),m&&(u?u.onclick=()=>{i(m),u.remove()}:Defer.dom("#disqus_thread",200,"disqus-loaded",(function(){i(m)}))),h&&Defer.dom("#comments",200,"comments-loaded",(function(){var e;(e=>{let t=document.getElementById("comment-restore-form");if(!t)return;let o=document.getElementById("comment-form"),r=document.getElementById("comment-form-thread"),n=document.getElementById("comment-editor").src,a=e.querySelectorAll("[data-parent-id]"),l=r.cloneNode(!0),c="is-active";a&&(a.forEach((e=>{e.onclick=()=>{let o=e.dataset.parentId,s=document.querySelector(`#c${o} .comments-replies`);e.classList.contains(c)||(r.remove(),a.forEach((e=>e.classList.remove(c))),e.classList.add(c),l.querySelector("iframe").src=n+`&parentID=${o}`,s.prepend(l),t.classList.add(c))}})),t.onclick=()=>{r.remove(),l.remove(),a.forEach((e=>e.classList.remove(c))),t.classList.remove(c),o.appendChild(r)})})(h),g&&(e=g,src=e.value.replace(/<script.*?src='(.*?)'.*?><\/script>/,"$1"),Defer.js(src,"cmtfpIframe",200,(function(){BLOG_CMT_createIframe("https://www.blogger.com/rpc_relay.html")})),e.remove())})),f&&Defer.js("https://cdn.jsdelivr.net/npm/flickity@2/dist/flickity.pkgd.min.js","flickity",200,null,!y),p&&Defer.js("https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@11/build/highlight.min.js","highlight-js",200,(function(){hljs.highlightAll()})),k&&Defer.css(`//www.blogger.com/dyn-css/authorization.css?targetBlogID=${k.content}`,"authorization",200,null,!0),Defer.css("https://cdn.jsdelivr.net/npm/@zkreations/tooltips@4/tooltips.min.css","tooltips",200,(function(){document.body.classList.add("tts-loaded")})),E.length&&(navigator&&navigator.clipboard?c(E,navigator.clipboard):Defer.js("https://cdn.jsdelivr.net/npm/clipboard-polyfill@3/dist/main/clipboard-polyfill.min.js","clipboard-polyfill",200,(function(){c(E,clipboard)}))),Defer.dom("[data-src]",200,"source-loaded")}();
