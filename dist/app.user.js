// ==UserScript==
// @name       nHentai-Enhanced-Jhou
// @version    0.0.1
// @author     NekoChan
// @homepage   https://github.com/JhouHank/nHentai-Enhanced-Jhou
// @supportURL https://github.com/JhouHank/nHentai-Enhanced-Jhou/issues
// @match      https://nhentai.net/*
// @namespace  https://github.com/JhouHank
// @license    MIT
// @grant      none
// @require    https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.min.js
// @require    https://cdn.jsdelivr.net/npm/clipboard@2.0.8/dist/clipboard.min.js
// @require    https://cdn.jsdelivr.net/npm/notyf@3.9.0/notyf.min.js
// @require    https://cdn.jsdelivr.net/gh/821938089/finder@2.0.0.1/finder.js
// ==/UserScript==

(()=>{"use strict";const e=window.$,t=[{正太控:"/tag/shotacon/"},{中文:"/language/chinese/"}];let n=null,o=!1,a=0,s=new Notyf;function i(e,t){$(e)[0]&&$(e).html(t)}function c(e,t=e.length){for(let o=0;o<t;o++){const t=e.eq(o),a=t.html();n.Tags.hasOwnProperty(a)&&(n.Tags[a],t.html(n.Tags[a]).parent().attr("title",a))}}function r(e){const t=n.Book.Time,o=["years","year","months","month","weeks","days","day","hours","hour","minutes","minute","seconds","second","ago"];for(let n=0,a=o.length;n<a;n++)e=e.replace(o[n],t[o[n]]);return e}function l(e,t){const n=function(e=[],t){let n=$("body").clone(),o=[];e=[...e,"script","#messages",".notyf",".notyf-announcer",".gallery",".thumbs","#comment-container"];for(const t of e)$(t,n).remove();return $("*",n).each((function(){let e=$("*",this);if(0==e.length){let a=e.prevObject.text().trim();if(!a)return;a in t&&o.push(finder(e.prevObject[0],{root:n[0]}))}else for(const e of $(this))for(const a of e.childNodes)"#text"===a.nodeName&&a.nodeValue.trim()in t&&o.push(finder(e,{root:n[0]}))})),o}(e,t);!function(e,t){e=function(e){let t=[],n=0,o=e.slice(),a=0;for(const s of e){let e=s.matchAll(/nth\-child\((\d+):(\d+)\)/g);e=Array.from(e),e.length&&(n=n<e.length?e.length:n,o.splice(a,1),a--,t.push(s)),a++}return t.length?o.concat(h(t,n)):e}(e);for(const n of e)for(const e of $(n)){const n=$(e);if(n.html().trim()in t)n.html(t[n.text().trim()]);else for(const e of n[0].childNodes)"#text"==e.nodeName&&e.nodeValue.trim()in t&&(e.data=t[e.nodeValue.trim()])}}(n,t)}function h(e,t){let n=0,o=e.slice();for(const t of e){let e=t.matchAll(/nth\-child\((\d+):(\d+)\)/g);e=Array.from(e);let[a,s]=[+e[0][1],+e[0][2]];o.splice(n,1),n--;for(let t=0,n=s-a+1;t<n;t++)o.push(e[0].input.replace(`${a}:${s}`,""+(a+t)));n++}return--t?h(o,t):o}function f(){e(".alert, .announcement").remove();const t=e("#gallery_id").hide().text().replace("#","");e(e(`<h3 class="title"><span class="before">番號：</span><a id="book_id" class="god" data-clipboard-text="${t}" href="javascript:;">${t}</a></h3>`)).insertAfter("#gallery_id");const a=new ClipboardJS(".god");a.on("success",(e=>{e.action,e.text,e.trigger,s.dismissAll(),s.success("複製成功"),e.clearSelection()})),a.on("error",(e=>{e.action,e.trigger,s.dismissAll(),s.error("複製失敗")}));for(let t=1,o=Object.keys(n.Book.TagsName).length,a="";t<=o;t++)a=e(`#tags > .tag-container:nth-child(${t}) > span`)[0].outerHTML,i(`#tags > .tag-container:nth-child(${t})`,`${n.Book.TagsName[Object.keys(n.Book.TagsName).sort(((e,t)=>e-t))[t-1]]} ${a}`);c(e("#tags > .tag-container .tags a .name")),e("#download").hide();let h=2===e("#info .title").length?`${e("#info .title:nth-child(1) > .pretty").text()}`:3===e("#info .title").length?`${e("#info .title:nth-child(2) > .pretty").text()}`:null,f=3===e("#info .title").length?`${e("#info .title:nth-child(1) > .pretty").text()}`:null,u="",d=0,m=h.split(" "),p=1===m.length?m.length:m.length-1,g=["Ch.","Ep.","第","話","券","前篇","中篇","後篇","+","-","#"],y=[" ","「","」"];for(let e=0;e<p;e++)u+=`${m[e]}+`;!function t(o,a=!0){function s(e,t=""){for(let n=0,a=e.length;n<a;n++)o=o.replaceAll(e[n],t)}3!=d&&(d++,a&&(o=o.replace(/[0-9]+/g,""),s(g),s(y,"+")),e.ajax({type:"GET",url:`/search/?q=${o}`,cache:false,dataType:"html",success:a=>{let s=e("<div></div>"),i=Number(s.html(a).find("#content > h1").text().replace("results","")),c=/69696969/.test(a.replace(f,"69696969"));if(i>0&&c)r(o,i);else switch(d){case 1:3===e("#info .title").length?t(f,i):t(u,!1);break;case 2:i>0&&c?r(o,i):t(u,!1);break;case 3:r(o,i)}function r(t,o,a=n.Book.Btns){const s=0===o?a.Nothing:a.SerachRelatedBook;e("#serachRelatedBookBtn").css("cursor","pointer").attr("href",`/search/?q=${t}`).html(`<i class="fas fa-search"></i> ${s} (<span>${o}</span>)`)}},error:()=>{}}))}(h),e("#info > .buttons").prepend(`<a id="serachRelatedBookBtn" class="btn btn-secondary" href="javascript:;" style="cursor: wait;"><i class="fas fa-search"></i> ${n.Book.Btns.Searching}</a>`),o?e("#comment_form > textarea").attr("placeholder",`${n.Book.CommentFormPlaceHolder}`):i("#comment-post-container > div > p",`<a class="login-comment" href="/login/">${n.Book.NoLogin.Login}</a> ${n.Book.NoLogin.Or} <a class="login-comment" href="/register/">${n.Book.NoLogin.Register}</a> ${n.Book.NoLogin.ToPostAComment}`),l(["i","nav"],n.NewBook),i("time",r(e("time").html())),e("time").bind("DOMNodeInserted",(function(){let e=r(this.innerHTML);this.innerHTML!==e&&(this.innerHTML=e,this.innerHTML)}))}function u(){l(["i","nav"],n.Homepage)}function d(){$(".alert, .announcement").remove()}function m(){e(".alert, .announcement").remove(),/onePageMode=True/.test(location.href)}function p(){}function g(){e(".alert, .announcement").remove(),l(["nav"],n.NewSpanPage),c(e("#content > h1 > a > .name")),a=1==location.href.split("=").length?1:Number(link[1])}function y(){}document.body.style.display="none",e((()=>{const a=()=>{e.ajax({type:"GET",url:"//raw.githubusercontent.com/JhouHank/nHentai-Enhanced-Jhou/main/locales/zh_TW.json?flush_cache=True",cache:false,dataType:"json",success:a=>{n=a,function(){if(e("head").append('<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notyf@3.9.0/notyf.min.css">'),e('nav[role="navigation"]')[0]){function a(){let t={};const n=(e,n,o)=>t[e]={condition:n,func:o};n("主頁",e("#content .index-popular")[0],u),n("頁面列表",e(".index-container")[0]&&/net\/\?page=/.test(location.href),d),n("本本",e("#tags")[0],f),n("閱讀模式",e("#image-container")[0],m),n("搜尋頁面",e("#content .fa-search")[0]&&"/search/"===location.pathname,p),n("最愛頁面",e("#favorites-search")[0]&&"/favorites/"===location.pathname,y),n("span 頁面",e("#content > h1 > span")[0],g);for(let e of Object.keys(t))if(t[e].condition){t[e].func();break}}try{!function(a,s=e("nav")){l(["#content","i"],n.Menu),o=Object.keys(_n_app.options.user).length,e(".alert, .announcement").css({"max-width":"90rem",margin:"1rem auto"}),e("input[type=search]").attr({autocomplete:"off",placeholder:""}),s.css({position:"sticky",top:"0",width:"100%","z-index":"999999"}),e(window).scroll((()=>pageYOffset>150?s.css({position:"fixed"}):s.css({position:"sticky"}))),function(t,n=t.length){for(let o=0;o<n;o++)Object.keys(t[o])[0],Object.values(t[o])[0],e(".menu.left").prepend(`<li class="desktop "><a href="${Object.values(t[o])[0]}">${Object.keys(t[o])[0]}</a></li>`)}(t),a()}(a)}catch(e){throw e}}document.body.style.display=""}()},error:()=>{setTimeout((()=>a()),3e3)}})};a()}))})();