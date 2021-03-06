/*! head.core - v1.0.2 */
(function(n,t){"use strict";function r(n){a[a.length]=n}function k(n){var t=new RegExp(" ?\\b"+n+"\\b");c.className=c.className.replace(t,"")}function p(n,t){for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}function tt(){var t,e,f,o;c.className=c.className.replace(/ (w-|eq-|gt-|gte-|lt-|lte-|portrait|no-portrait|landscape|no-landscape)\d+/g,"");t=n.innerWidth||c.clientWidth;e=n.outerWidth||n.screen.width;u.screen.innerWidth=t;u.screen.outerWidth=e;r("w-"+t);p(i.screens,function(n){t>n?(i.screensCss.gt&&r("gt-"+n),i.screensCss.gte&&r("gte-"+n)):t<n?(i.screensCss.lt&&r("lt-"+n),i.screensCss.lte&&r("lte-"+n)):t===n&&(i.screensCss.lte&&r("lte-"+n),i.screensCss.eq&&r("e-q"+n),i.screensCss.gte&&r("gte-"+n))});f=n.innerHeight||c.clientHeight;o=n.outerHeight||n.screen.height;u.screen.innerHeight=f;u.screen.outerHeight=o;u.feature("portrait",f>t);u.feature("landscape",f<t)}function it(){n.clearTimeout(b);b=n.setTimeout(tt,50)}var y=n.document,rt=n.navigator,ut=n.location,c=y.documentElement,a=[],i={screens:[240,320,480,640,768,800,1024,1280,1440,1680,1920],screensCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!1},browsers:[{ie:{min:6,max:11}}],browserCss:{gt:!0,gte:!1,lt:!0,lte:!1,eq:!0},html5:!0,page:"-page",section:"-section",head:"head"},v,u,s,w,o,h,l,d,f,g,nt,e,b;if(n.head_conf)for(v in n.head_conf)n.head_conf[v]!==t&&(i[v]=n.head_conf[v]);u=n[i.head]=function(){u.ready.apply(null,arguments)};u.feature=function(n,t,i){return n?(Object.prototype.toString.call(t)==="[object Function]"&&(t=t.call()),r((t?"":"no-")+n),u[n]=!!t,i||(k("no-"+n),k(n),u.feature()),u):(c.className+=" "+a.join(" "),a=[],u)};u.feature("js",!0);s=rt.userAgent.toLowerCase();w=/mobile|android|kindle|silk|midp|phone|(windows .+arm|touch)/.test(s);u.feature("mobile",w,!0);u.feature("desktop",!w,!0);s=/(chrome|firefox)[ \/]([\w.]+)/.exec(s)||/(iphone|ipad|ipod)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(android)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(webkit|opera)(?:.*version)?[ \/]([\w.]+)/.exec(s)||/(msie) ([\w.]+)/.exec(s)||/(trident).+rv:(\w.)+/.exec(s)||[];o=s[1];h=parseFloat(s[2]);switch(o){case"msie":case"trident":o="ie";h=y.documentMode||h;break;case"firefox":o="ff";break;case"ipod":case"ipad":case"iphone":o="ios";break;case"webkit":o="safari"}for(u.browser={name:o,version:h},u.browser[o]=!0,l=0,d=i.browsers.length;l<d;l++)for(f in i.browsers[l])if(o===f)for(r(f),g=i.browsers[l][f].min,nt=i.browsers[l][f].max,e=g;e<=nt;e++)h>e?(i.browserCss.gt&&r("gt-"+f+e),i.browserCss.gte&&r("gte-"+f+e)):h<e?(i.browserCss.lt&&r("lt-"+f+e),i.browserCss.lte&&r("lte-"+f+e)):h===e&&(i.browserCss.lte&&r("lte-"+f+e),i.browserCss.eq&&r("eq-"+f+e),i.browserCss.gte&&r("gte-"+f+e));else r("no-"+f);r(o);r(o+parseInt(h,10));i.html5&&o==="ie"&&h<9&&p("abbr|article|aside|audio|canvas|details|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|progress|section|summary|time|video".split("|"),function(n){y.createElement(n)});p(ut.pathname.split("/"),function(n,u){if(this.length>2&&this[u+1]!==t)u&&r(this.slice(u,u+1).join("-").toLowerCase()+i.section);else{var f=n||"index",e=f.indexOf(".");e>0&&(f=f.substring(0,e));c.id=f.toLowerCase()+i.page;u||r("root"+i.section)}});u.screen={height:n.screen.height,width:n.screen.width};tt();b=0;n.addEventListener?n.addEventListener("resize",it,!1):n.attachEvent("onresize",it)})(window);
/*! head.css3 - v1.0.0 */
(function(n,t){"use strict";function a(n){for(var r in n)if(i[n[r]]!==t)return!0;return!1}function r(n){var t=n.charAt(0).toUpperCase()+n.substr(1),i=(n+" "+c.join(t+" ")+t).split(" ");return!!a(i)}var h=n.document,o=h.createElement("i"),i=o.style,s=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),c="Webkit Moz O ms Khtml".split(" "),l=n.head_conf&&n.head_conf.head||"head",u=n[l],f={gradient:function(){var n="background-image:";return i.cssText=(n+s.join("gradient(linear,left top,right bottom,from(#9f9),to(#fff));"+n)+s.join("linear-gradient(left top,#eee,#fff);"+n)).slice(0,-n.length),!!i.backgroundImage},rgba:function(){return i.cssText="background-color:rgba(0,0,0,0.5)",!!i.backgroundColor},opacity:function(){return o.style.opacity===""},textshadow:function(){return i.textShadow===""},multiplebgs:function(){i.cssText="background:url(https://),url(https://),red url(https://)";var n=(i.background||"").match(/url/g);return Object.prototype.toString.call(n)==="[object Array]"&&n.length===3},boxshadow:function(){return r("boxShadow")},borderimage:function(){return r("borderImage")},borderradius:function(){return r("borderRadius")},cssreflections:function(){return r("boxReflect")},csstransforms:function(){return r("transform")},csstransitions:function(){return r("transition")},touch:function(){return"ontouchstart"in n},retina:function(){return n.devicePixelRatio>1},fontface:function(){var t=u.browser.name,n=u.browser.version;switch(t){case"ie":return n>=9;case"chrome":return n>=13;case"ff":return n>=6;case"ios":return n>=5;case"android":return!1;case"webkit":return n>=5.1;case"opera":return n>=10;default:return!1}}};for(var e in f)f[e]&&u.feature(e,f[e].call(),!0);u.feature()})(window);
/*! head.load - v1.0.3 */
(function(n,t){"use strict";function w(){}function u(n,t){if(n){typeof n=="object"&&(n=[].slice.call(n));for(var i=0,r=n.length;i<r;i++)t.call(n,n[i],i)}}function it(n,i){var r=Object.prototype.toString.call(i).slice(8,-1);return i!==t&&i!==null&&r===n}function s(n){return it("Function",n)}function a(n){return it("Array",n)}function et(n){var i=n.split("/"),t=i[i.length-1],r=t.indexOf("?");return r!==-1?t.substring(0,r):t}function f(n){(n=n||w,n._done)||(n(),n._done=1)}function ot(n,t,r,u){var f=typeof n=="object"?n:{test:n,success:!t?!1:a(t)?t:[t],failure:!r?!1:a(r)?r:[r],callback:u||w},e=!!f.test;return e&&!!f.success?(f.success.push(f.callback),i.load.apply(null,f.success)):e||!f.failure?u():(f.failure.push(f.callback),i.load.apply(null,f.failure)),i}function v(n){var t={},i,r;if(typeof n=="object")for(i in n)!n[i]||(t={name:i,url:n[i]});else t={name:et(n),url:n};return(r=c[t.name],r&&r.url===t.url)?r:(c[t.name]=t,t)}function y(n){n=n||c;for(var t in n)if(n.hasOwnProperty(t)&&n[t].state!==l)return!1;return!0}function st(n){n.state=ft;u(n.onpreload,function(n){n.call()})}function ht(n){n.state===t&&(n.state=nt,n.onpreload=[],rt({url:n.url,type:"cache"},function(){st(n)}))}function ct(){var n=arguments,t=n[n.length-1],r=[].slice.call(n,1),f=r[0];return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(f?(u(r,function(n){s(n)||!n||ht(v(n))}),b(v(n[0]),s(f)?f:function(){i.load.apply(null,r)})):b(v(n[0])),i)}function lt(){var n=arguments,t=n[n.length-1],r={};return(s(t)||(t=null),a(n[0]))?(n[0].push(t),i.load.apply(null,n[0]),i):(u(n,function(n){n!==t&&(n=v(n),r[n.name]=n)}),u(n,function(n){n!==t&&(n=v(n),b(n,function(){y(r)&&f(t)}))}),i)}function b(n,t){if(t=t||w,n.state===l){t();return}if(n.state===tt){i.ready(n.name,t);return}if(n.state===nt){n.onpreload.push(function(){b(n,t)});return}n.state=tt;rt(n,function(){n.state=l;t();u(h[n.name],function(n){f(n)});o&&y()&&u(h.ALL,function(n){f(n)})})}function at(n){n=n||"";var t=n.split("?")[0].split(".");return t[t.length-1].toLowerCase()}function rt(t,i){function e(t){t=t||n.event;u.onload=u.onreadystatechange=u.onerror=null;i()}function o(f){f=f||n.event;(f.type==="load"||/loaded|complete/.test(u.readyState)&&(!r.documentMode||r.documentMode<9))&&(n.clearTimeout(t.errorTimeout),n.clearTimeout(t.cssTimeout),u.onload=u.onreadystatechange=u.onerror=null,i())}function s(){if(t.state!==l&&t.cssRetries<=20){for(var i=0,f=r.styleSheets.length;i<f;i++)if(r.styleSheets[i].href===u.href){o({type:"load"});return}t.cssRetries++;t.cssTimeout=n.setTimeout(s,250)}}var u,h,f;i=i||w;h=at(t.url);h==="css"?(u=r.createElement("link"),u.type="text/"+(t.type||"css"),u.rel="stylesheet",u.href=t.url,t.cssRetries=0,t.cssTimeout=n.setTimeout(s,500)):(u=r.createElement("script"),u.type="text/"+(t.type||"javascript"),u.src=t.url);u.onload=u.onreadystatechange=o;u.onerror=e;u.async=!1;u.defer=!1;t.errorTimeout=n.setTimeout(function(){e({type:"timeout"})},7e3);f=r.head||r.getElementsByTagName("head")[0];f.insertBefore(u,f.lastChild)}function vt(){for(var t,u=r.getElementsByTagName("script"),n=0,f=u.length;n<f;n++)if(t=u[n].getAttribute("data-headjs-load"),!!t){i.load(t);return}}function yt(n,t){var v,p,e;return n===r?(o?f(t):d.push(t),i):(s(n)&&(t=n,n="ALL"),a(n))?(v={},u(n,function(n){v[n]=c[n];i.ready(n,function(){y(v)&&f(t)})}),i):typeof n!="string"||!s(t)?i:(p=c[n],p&&p.state===l||n==="ALL"&&y()&&o)?(f(t),i):(e=h[n],e?e.push(t):e=h[n]=[t],i)}function e(){if(!r.body){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(e,50);return}o||(o=!0,vt(),u(d,function(n){f(n)}))}function k(){r.addEventListener?(r.removeEventListener("DOMContentLoaded",k,!1),e()):r.readyState==="complete"&&(r.detachEvent("onreadystatechange",k),e())}var r=n.document,d=[],h={},c={},ut="async"in r.createElement("script")||"MozAppearance"in r.documentElement.style||n.opera,o,g=n.head_conf&&n.head_conf.head||"head",i=n[g]=n[g]||function(){i.ready.apply(null,arguments)},nt=1,ft=2,tt=3,l=4,p;if(r.readyState==="complete")e();else if(r.addEventListener)r.addEventListener("DOMContentLoaded",k,!1),n.addEventListener("load",e,!1);else{r.attachEvent("onreadystatechange",k);n.attachEvent("onload",e);p=!1;try{p=!n.frameElement&&r.documentElement}catch(wt){}p&&p.doScroll&&function pt(){if(!o){try{p.doScroll("left")}catch(t){n.clearTimeout(i.readyTimeout);i.readyTimeout=n.setTimeout(pt,50);return}e()}}()}i.load=i.js=ut?lt:ct;i.test=ot;i.ready=yt;i.ready(r,function(){y()&&u(h.ALL,function(n){f(n)});i.feature&&i.feature("domloaded",!0)})})(window);
/*
//# sourceMappingURL=head.min.js.map
*/
/*! jQuery v2.0.3 | (c) 2005, 2013 jQuery Foundation, Inc. | jquery.org/license
//@ sourceMappingURL=jquery-2.0.3.min.map
*/
(function(e,undefined){var t,n,r=typeof undefined,i=e.location,o=e.document,s=o.documentElement,a=e.jQuery,u=e.$,l={},c=[],p="2.0.3",f=c.concat,h=c.push,d=c.slice,g=c.indexOf,m=l.toString,y=l.hasOwnProperty,v=p.trim,x=function(e,n){return new x.fn.init(e,n,t)},b=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,w=/\S+/g,T=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^-ms-/,N=/-([\da-z])/gi,E=function(e,t){return t.toUpperCase()},S=function(){o.removeEventListener("DOMContentLoaded",S,!1),e.removeEventListener("load",S,!1),x.ready()};x.fn=x.prototype={jquery:p,constructor:x,init:function(e,t,n){var r,i;if(!e)return this;if("string"==typeof e){if(r="<"===e.charAt(0)&&">"===e.charAt(e.length-1)&&e.length>=3?[null,e,null]:T.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof x?t[0]:t,x.merge(this,x.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:o,!0)),C.test(r[1])&&x.isPlainObject(t))for(r in t)x.isFunction(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=o.getElementById(r[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=o,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):x.isFunction(e)?n.ready(e):(e.selector!==undefined&&(this.selector=e.selector,this.context=e.context),x.makeArray(e,this))},selector:"",length:0,toArray:function(){return d.call(this)},get:function(e){return null==e?this.toArray():0>e?this[this.length+e]:this[e]},pushStack:function(e){var t=x.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return x.each(this,e,t)},ready:function(e){return x.ready.promise().done(e),this},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},map:function(e){return this.pushStack(x.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:h,sort:[].sort,splice:[].splice},x.fn.init.prototype=x.fn,x.extend=x.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[1]||{},a=2),"object"==typeof s||x.isFunction(s)||(s={}),u===a&&(s=this,--a);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(x.isPlainObject(r)||(i=x.isArray(r)))?(i?(i=!1,o=n&&x.isArray(n)?n:[]):o=n&&x.isPlainObject(n)?n:{},s[t]=x.extend(l,o,r)):r!==undefined&&(s[t]=r));return s},x.extend({expando:"jQuery"+(p+Math.random()).replace(/\D/g,""),noConflict:function(t){return e.$===x&&(e.$=u),t&&e.jQuery===x&&(e.jQuery=a),x},isReady:!1,readyWait:1,holdReady:function(e){e?x.readyWait++:x.ready(!0)},ready:function(e){(e===!0?--x.readyWait:x.isReady)||(x.isReady=!0,e!==!0&&--x.readyWait>0||(n.resolveWith(o,[x]),x.fn.trigger&&x(o).trigger("ready").off("ready")))},isFunction:function(e){return"function"===x.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[m.call(e)]||"object":typeof e},isPlainObject:function(e){if("object"!==x.type(e)||e.nodeType||x.isWindow(e))return!1;try{if(e.constructor&&!y.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(t){return!1}return!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw Error(e)},parseHTML:function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||o;var r=C.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=x.buildFragment([e],t,i),i&&x(i).remove(),x.merge([],r.childNodes))},parseJSON:JSON.parse,parseXML:function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=undefined}return(!t||t.getElementsByTagName("parsererror").length)&&x.error("Invalid XML: "+e),t},noop:function(){},globalEval:function(e){var t,n=eval;e=x.trim(e),e&&(1===e.indexOf("use strict")?(t=o.createElement("script"),t.text=e,o.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(k,"ms-").replace(N,E)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,n){var r,i=0,o=e.length,s=j(e);if(n){if(s){for(;o>i;i++)if(r=t.apply(e[i],n),r===!1)break}else for(i in e)if(r=t.apply(e[i],n),r===!1)break}else if(s){for(;o>i;i++)if(r=t.call(e[i],i,e[i]),r===!1)break}else for(i in e)if(r=t.call(e[i],i,e[i]),r===!1)break;return e},trim:function(e){return null==e?"":v.call(e)},makeArray:function(e,t){var n=t||[];return null!=e&&(j(Object(e))?x.merge(n,"string"==typeof e?[e]:e):h.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:g.call(t,e,n)},merge:function(e,t){var n=t.length,r=e.length,i=0;if("number"==typeof n)for(;n>i;i++)e[r++]=t[i];else while(t[i]!==undefined)e[r++]=t[i++];return e.length=r,e},grep:function(e,t,n){var r,i=[],o=0,s=e.length;for(n=!!n;s>o;o++)r=!!t(e[o],o),n!==r&&i.push(e[o]);return i},map:function(e,t,n){var r,i=0,o=e.length,s=j(e),a=[];if(s)for(;o>i;i++)r=t(e[i],i,n),null!=r&&(a[a.length]=r);else for(i in e)r=t(e[i],i,n),null!=r&&(a[a.length]=r);return f.apply([],a)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),x.isFunction(e)?(r=d.call(arguments,2),i=function(){return e.apply(t||this,r.concat(d.call(arguments)))},i.guid=e.guid=e.guid||x.guid++,i):undefined},access:function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===x.type(n)){i=!0;for(a in n)x.access(e,t,a,n[a],!0,o,s)}else if(r!==undefined&&(i=!0,x.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(x(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o},now:Date.now,swap:function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i}}),x.ready.promise=function(t){return n||(n=x.Deferred(),"complete"===o.readyState?setTimeout(x.ready):(o.addEventListener("DOMContentLoaded",S,!1),e.addEventListener("load",S,!1))),n.promise(t)},x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function j(e){var t=e.length,n=x.type(e);return x.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||"function"!==n&&(0===t||"number"==typeof t&&t>0&&t-1 in e)}t=x(o),function(e,undefined){var t,n,r,i,o,s,a,u,l,c,p,f,h,d,g,m,y,v="sizzle"+-new Date,b=e.document,w=0,T=0,C=st(),k=st(),N=st(),E=!1,S=function(e,t){return e===t?(E=!0,0):0},j=typeof undefined,D=1<<31,A={}.hasOwnProperty,L=[],q=L.pop,H=L.push,O=L.push,F=L.slice,P=L.indexOf||function(e){var t=0,n=this.length;for(;n>t;t++)if(this[t]===e)return t;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",W="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",$=W.replace("w","w#"),B="\\["+M+"*("+W+")"+M+"*(?:([*^$|!~]?=)"+M+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+$+")|)|)"+M+"*\\]",I=":("+W+")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|"+B.replace(3,8)+")*)|.*)\\)|)",z=RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=RegExp("^"+M+"*,"+M+"*"),X=RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=RegExp(M+"*[+~]"),Y=RegExp("="+M+"*([^\\]'\"]*)"+M+"*\\]","g"),V=RegExp(I),G=RegExp("^"+$+"$"),J={ID:RegExp("^#("+W+")"),CLASS:RegExp("^\\.("+W+")"),TAG:RegExp("^("+W.replace("w","w*")+")"),ATTR:RegExp("^"+B),PSEUDO:RegExp("^"+I),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:RegExp("^(?:"+R+")$","i"),needsContext:RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Q=/^[^{]+\{\s*\[native \w/,K=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Z=/^(?:input|select|textarea|button)$/i,et=/^h\d$/i,tt=/'|\\/g,nt=RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),rt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(55296|r>>10,56320|1023&r)};try{O.apply(L=F.call(b.childNodes),b.childNodes),L[b.childNodes.length].nodeType}catch(it){O={apply:L.length?function(e,t){H.apply(e,F.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function ot(e,t,r,i){var o,s,a,u,l,f,g,m,x,w;if((t?t.ownerDocument||t:b)!==p&&c(t),t=t||p,r=r||[],!e||"string"!=typeof e)return r;if(1!==(u=t.nodeType)&&9!==u)return[];if(h&&!i){if(o=K.exec(e))if(a=o[1]){if(9===u){if(s=t.getElementById(a),!s||!s.parentNode)return r;if(s.id===a)return r.push(s),r}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(a))&&y(t,s)&&s.id===a)return r.push(s),r}else{if(o[2])return O.apply(r,t.getElementsByTagName(e)),r;if((a=o[3])&&n.getElementsByClassName&&t.getElementsByClassName)return O.apply(r,t.getElementsByClassName(a)),r}if(n.qsa&&(!d||!d.test(e))){if(m=g=v,x=t,w=9===u&&e,1===u&&"object"!==t.nodeName.toLowerCase()){f=gt(e),(g=t.getAttribute("id"))?m=g.replace(tt,"\\$&"):t.setAttribute("id",m),m="[id='"+m+"'] ",l=f.length;while(l--)f[l]=m+mt(f[l]);x=U.test(e)&&t.parentNode||t,w=f.join(",")}if(w)try{return O.apply(r,x.querySelectorAll(w)),r}catch(T){}finally{g||t.removeAttribute("id")}}}return kt(e.replace(z,"$1"),t,r,i)}function st(){var e=[];function t(n,r){return e.push(n+=" ")>i.cacheLength&&delete t[e.shift()],t[n]=r}return t}function at(e){return e[v]=!0,e}function ut(e){var t=p.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function lt(e,t){var n=e.split("|"),r=e.length;while(r--)i.attrHandle[n[r]]=t}function ct(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||D)-(~e.sourceIndex||D);if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function pt(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function ft(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function ht(e){return at(function(t){return t=+t,at(function(n,r){var i,o=e([],n.length,t),s=o.length;while(s--)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}s=ot.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},n=ot.support={},c=ot.setDocument=function(e){var t=e?e.ownerDocument||e:b,r=t.defaultView;return t!==p&&9===t.nodeType&&t.documentElement?(p=t,f=t.documentElement,h=!s(t),r&&r.attachEvent&&r!==r.top&&r.attachEvent("onbeforeunload",function(){c()}),n.attributes=ut(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ut(function(e){return e.appendChild(t.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=ut(function(e){return e.innerHTML="<div class='a'></div><div class='a i'></div>",e.firstChild.className="i",2===e.getElementsByClassName("i").length}),n.getById=ut(function(e){return f.appendChild(e).id=v,!t.getElementsByName||!t.getElementsByName(v).length}),n.getById?(i.find.ID=function(e,t){if(typeof t.getElementById!==j&&h){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){return e.getAttribute("id")===t}}):(delete i.find.ID,i.filter.ID=function(e){var t=e.replace(nt,rt);return function(e){var n=typeof e.getAttributeNode!==j&&e.getAttributeNode("id");return n&&n.value===t}}),i.find.TAG=n.getElementsByTagName?function(e,t){return typeof t.getElementsByTagName!==j?t.getElementsByTagName(e):undefined}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},i.find.CLASS=n.getElementsByClassName&&function(e,t){return typeof t.getElementsByClassName!==j&&h?t.getElementsByClassName(e):undefined},g=[],d=[],(n.qsa=Q.test(t.querySelectorAll))&&(ut(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||d.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll(":checked").length||d.push(":checked")}),ut(function(e){var n=t.createElement("input");n.setAttribute("type","hidden"),e.appendChild(n).setAttribute("t",""),e.querySelectorAll("[t^='']").length&&d.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll(":enabled").length||d.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),d.push(",.*:")})),(n.matchesSelector=Q.test(m=f.webkitMatchesSelector||f.mozMatchesSelector||f.oMatchesSelector||f.msMatchesSelector))&&ut(function(e){n.disconnectedMatch=m.call(e,"div"),m.call(e,"[s!='']:x"),g.push("!=",I)}),d=d.length&&RegExp(d.join("|")),g=g.length&&RegExp(g.join("|")),y=Q.test(f.contains)||f.compareDocumentPosition?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},S=f.compareDocumentPosition?function(e,r){if(e===r)return E=!0,0;var i=r.compareDocumentPosition&&e.compareDocumentPosition&&e.compareDocumentPosition(r);return i?1&i||!n.sortDetached&&r.compareDocumentPosition(e)===i?e===t||y(b,e)?-1:r===t||y(b,r)?1:l?P.call(l,e)-P.call(l,r):0:4&i?-1:1:e.compareDocumentPosition?-1:1}:function(e,n){var r,i=0,o=e.parentNode,s=n.parentNode,a=[e],u=[n];if(e===n)return E=!0,0;if(!o||!s)return e===t?-1:n===t?1:o?-1:s?1:l?P.call(l,e)-P.call(l,n):0;if(o===s)return ct(e,n);r=e;while(r=r.parentNode)a.unshift(r);r=n;while(r=r.parentNode)u.unshift(r);while(a[i]===u[i])i++;return i?ct(a[i],u[i]):a[i]===b?-1:u[i]===b?1:0},t):p},ot.matches=function(e,t){return ot(e,null,null,t)},ot.matchesSelector=function(e,t){if((e.ownerDocument||e)!==p&&c(e),t=t.replace(Y,"='$1']"),!(!n.matchesSelector||!h||g&&g.test(t)||d&&d.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return ot(t,p,null,[e]).length>0},ot.contains=function(e,t){return(e.ownerDocument||e)!==p&&c(e),y(e,t)},ot.attr=function(e,t){(e.ownerDocument||e)!==p&&c(e);var r=i.attrHandle[t.toLowerCase()],o=r&&A.call(i.attrHandle,t.toLowerCase())?r(e,t,!h):undefined;return o===undefined?n.attributes||!h?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null:o},ot.error=function(e){throw Error("Syntax error, unrecognized expression: "+e)},ot.uniqueSort=function(e){var t,r=[],i=0,o=0;if(E=!n.detectDuplicates,l=!n.sortStable&&e.slice(0),e.sort(S),E){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return e},o=ot.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r];r++)n+=o(t);return n},i=ot.selectors={cacheLength:50,createPseudo:at,match:J,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(nt,rt),e[3]=(e[4]||e[5]||"").replace(nt,rt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||ot.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&ot.error(e[0]),e},PSEUDO:function(e){var t,n=!e[5]&&e[2];return J.CHILD.test(e[0])?null:(e[3]&&e[4]!==undefined?e[2]=e[4]:n&&V.test(n)&&(t=gt(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(nt,rt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=C[e+" "];return t||(t=RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&C(e,function(e){return t.test("string"==typeof e.className&&e.className||typeof e.getAttribute!==j&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=ot.attr(r,e);return null==i?"!="===t:t?(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i+" ").indexOf(n)>-1:"|="===t?i===n||i.slice(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,p,f,h,d,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,y=a&&t.nodeName.toLowerCase(),x=!u&&!a;if(m){if(o){while(g){p=t;while(p=p[g])if(a?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;d=g="only"===e&&!d&&"nextSibling"}return!0}if(d=[s?m.firstChild:m.lastChild],s&&x){c=m[v]||(m[v]={}),l=c[e]||[],h=l[0]===w&&l[1],f=l[0]===w&&l[2],p=h&&m.childNodes[h];while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if(1===p.nodeType&&++f&&p===t){c[e]=[w,h,f];break}}else if(x&&(l=(t[v]||(t[v]={}))[e])&&l[0]===w)f=l[1];else while(p=++h&&p&&p[g]||(f=h=0)||d.pop())if((a?p.nodeName.toLowerCase()===y:1===p.nodeType)&&++f&&(x&&((p[v]||(p[v]={}))[e]=[w,f]),p===t))break;return f-=i,f===r||0===f%r&&f/r>=0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||ot.error("unsupported pseudo: "+e);return r[v]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?at(function(e,n){var i,o=r(e,t),s=o.length;while(s--)i=P.call(e,o[s]),e[i]=!(n[i]=o[s])}):function(e){return r(e,0,n)}):r}},pseudos:{not:at(function(e){var t=[],n=[],r=a(e.replace(z,"$1"));return r[v]?at(function(e,t,n,i){var o,s=r(e,null,i,[]),a=e.length;while(a--)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),!n.pop()}}),has:at(function(e){return function(t){return ot(e,t).length>0}}),contains:at(function(e){return function(t){return(t.textContent||t.innerText||o(t)).indexOf(e)>-1}}),lang:at(function(e){return G.test(e||"")||ot.error("unsupported lang: "+e),e=e.replace(nt,rt).toLowerCase(),function(t){var n;do if(n=h?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===f},focus:function(e){return e===p.activeElement&&(!p.hasFocus||p.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeName>"@"||3===e.nodeType||4===e.nodeType)return!1;return!0},parent:function(e){return!i.pseudos.empty(e)},header:function(e){return et.test(e.nodeName)},input:function(e){return Z.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||t.toLowerCase()===e.type)},first:ht(function(){return[0]}),last:ht(function(e,t){return[t-1]}),eq:ht(function(e,t,n){return[0>n?n+t:n]}),even:ht(function(e,t){var n=0;for(;t>n;n+=2)e.push(n);return e}),odd:ht(function(e,t){var n=1;for(;t>n;n+=2)e.push(n);return e}),lt:ht(function(e,t,n){var r=0>n?n+t:n;for(;--r>=0;)e.push(r);return e}),gt:ht(function(e,t,n){var r=0>n?n+t:n;for(;t>++r;)e.push(r);return e})}},i.pseudos.nth=i.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})i.pseudos[t]=pt(t);for(t in{submit:!0,reset:!0})i.pseudos[t]=ft(t);function dt(){}dt.prototype=i.filters=i.pseudos,i.setFilters=new dt;function gt(e,t){var n,r,o,s,a,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);a=e,u=[],l=i.preFilter;while(a){(!n||(r=_.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),n=!1,(r=X.exec(a))&&(n=r.shift(),o.push({value:n,type:r[0].replace(z," ")}),a=a.slice(n.length));for(s in i.filter)!(r=J[s].exec(a))||l[s]&&!(r=l[s](r))||(n=r.shift(),o.push({value:n,type:s,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?ot.error(e):k(e,u).slice(0)}function mt(e){var t=0,n=e.length,r="";for(;n>t;t++)r+=e[t].value;return r}function yt(e,t,n){var i=t.dir,o=n&&"parentNode"===i,s=T++;return t.first?function(t,n,r){while(t=t[i])if(1===t.nodeType||o)return e(t,n,r)}:function(t,n,a){var u,l,c,p=w+" "+s;if(a){while(t=t[i])if((1===t.nodeType||o)&&e(t,n,a))return!0}else while(t=t[i])if(1===t.nodeType||o)if(c=t[v]||(t[v]={}),(l=c[i])&&l[0]===p){if((u=l[1])===!0||u===r)return u===!0}else if(l=c[i]=[p],l[1]=e(t,n,a)||r,l[1]===!0)return!0}}function vt(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function xt(e,t,n,r,i){var o,s=[],a=0,u=e.length,l=null!=t;for(;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function bt(e,t,n,r,i,o){return r&&!r[v]&&(r=bt(r)),i&&!i[v]&&(i=bt(i,o)),at(function(o,s,a,u){var l,c,p,f=[],h=[],d=s.length,g=o||Ct(t||"*",a.nodeType?[a]:a,[]),m=!e||!o&&t?g:xt(g,f,e,a,u),y=n?i||(o?e:d||r)?[]:s:m;if(n&&n(m,y,a,u),r){l=xt(y,h),r(l,[],a,u),c=l.length;while(c--)(p=l[c])&&(y[h[c]]=!(m[h[c]]=p))}if(o){if(i||e){if(i){l=[],c=y.length;while(c--)(p=y[c])&&l.push(m[c]=p);i(null,y=[],l,u)}c=y.length;while(c--)(p=y[c])&&(l=i?P.call(o,p):f[c])>-1&&(o[l]=!(s[l]=p))}}else y=xt(y===s?y.splice(d,y.length):y),i?i(null,s,y,u):O.apply(s,y)})}function wt(e){var t,n,r,o=e.length,s=i.relative[e[0].type],a=s||i.relative[" "],l=s?1:0,c=yt(function(e){return e===t},a,!0),p=yt(function(e){return P.call(t,e)>-1},a,!0),f=[function(e,n,r){return!s&&(r||n!==u)||((t=n).nodeType?c(e,n,r):p(e,n,r))}];for(;o>l;l++)if(n=i.relative[e[l].type])f=[yt(vt(f),n)];else{if(n=i.filter[e[l].type].apply(null,e[l].matches),n[v]){for(r=++l;o>r;r++)if(i.relative[e[r].type])break;return bt(l>1&&vt(f),l>1&&mt(e.slice(0,l-1).concat({value:" "===e[l-2].type?"*":""})).replace(z,"$1"),n,r>l&&wt(e.slice(l,r)),o>r&&wt(e=e.slice(r)),o>r&&mt(e))}f.push(n)}return vt(f)}function Tt(e,t){var n=0,o=t.length>0,s=e.length>0,a=function(a,l,c,f,h){var d,g,m,y=[],v=0,x="0",b=a&&[],T=null!=h,C=u,k=a||s&&i.find.TAG("*",h&&l.parentNode||l),N=w+=null==C?1:Math.random()||.1;for(T&&(u=l!==p&&l,r=n);null!=(d=k[x]);x++){if(s&&d){g=0;while(m=e[g++])if(m(d,l,c)){f.push(d);break}T&&(w=N,r=++n)}o&&((d=!m&&d)&&v--,a&&b.push(d))}if(v+=x,o&&x!==v){g=0;while(m=t[g++])m(b,y,l,c);if(a){if(v>0)while(x--)b[x]||y[x]||(y[x]=q.call(f));y=xt(y)}O.apply(f,y),T&&!a&&y.length>0&&v+t.length>1&&ot.uniqueSort(f)}return T&&(w=N,u=C),b};return o?at(a):a}a=ot.compile=function(e,t){var n,r=[],i=[],o=N[e+" "];if(!o){t||(t=gt(e)),n=t.length;while(n--)o=wt(t[n]),o[v]?r.push(o):i.push(o);o=N(e,Tt(i,r))}return o};function Ct(e,t,n){var r=0,i=t.length;for(;i>r;r++)ot(e,t[r],n);return n}function kt(e,t,r,o){var s,u,l,c,p,f=gt(e);if(!o&&1===f.length){if(u=f[0]=f[0].slice(0),u.length>2&&"ID"===(l=u[0]).type&&n.getById&&9===t.nodeType&&h&&i.relative[u[1].type]){if(t=(i.find.ID(l.matches[0].replace(nt,rt),t)||[])[0],!t)return r;e=e.slice(u.shift().value.length)}s=J.needsContext.test(e)?0:u.length;while(s--){if(l=u[s],i.relative[c=l.type])break;if((p=i.find[c])&&(o=p(l.matches[0].replace(nt,rt),U.test(u[0].type)&&t.parentNode||t))){if(u.splice(s,1),e=o.length&&mt(u),!e)return O.apply(r,o),r;break}}}return a(e,f)(o,t,!h,r,U.test(e)),r}n.sortStable=v.split("").sort(S).join("")===v,n.detectDuplicates=E,c(),n.sortDetached=ut(function(e){return 1&e.compareDocumentPosition(p.createElement("div"))}),ut(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||lt("type|href|height|width",function(e,t,n){return n?undefined:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ut(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||lt("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?undefined:e.defaultValue}),ut(function(e){return null==e.getAttribute("disabled")})||lt(R,function(e,t,n){var r;return n?undefined:(r=e.getAttributeNode(t))&&r.specified?r.value:e[t]===!0?t.toLowerCase():null}),x.find=ot,x.expr=ot.selectors,x.expr[":"]=x.expr.pseudos,x.unique=ot.uniqueSort,x.text=ot.getText,x.isXMLDoc=ot.isXML,x.contains=ot.contains}(e);var D={};function A(e){var t=D[e]={};return x.each(e.match(w)||[],function(e,n){t[n]=!0}),t}x.Callbacks=function(e){e="string"==typeof e?D[e]||A(e):x.extend({},e);var t,n,r,i,o,s,a=[],u=!e.once&&[],l=function(p){for(t=e.memory&&p,n=!0,s=i||0,i=0,o=a.length,r=!0;a&&o>s;s++)if(a[s].apply(p[0],p[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,a&&(u?u.length&&l(u.shift()):t?a=[]:c.disable())},c={add:function(){if(a){var n=a.length;(function s(t){x.each(t,function(t,n){var r=x.type(n);"function"===r?e.unique&&c.has(n)||a.push(n):n&&n.length&&"string"!==r&&s(n)})})(arguments),r?o=a.length:t&&(i=n,l(t))}return this},remove:function(){return a&&x.each(arguments,function(e,t){var n;while((n=x.inArray(t,a,n))>-1)a.splice(n,1),r&&(o>=n&&o--,s>=n&&s--)}),this},has:function(e){return e?x.inArray(e,a)>-1:!(!a||!a.length)},empty:function(){return a=[],o=0,this},disable:function(){return a=u=t=undefined,this},disabled:function(){return!a},lock:function(){return u=undefined,t||c.disable(),this},locked:function(){return!u},fireWith:function(e,t){return!a||n&&!u||(t=t||[],t=[e,t.slice?t.slice():t],r?u.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!n}};return c},x.extend({Deferred:function(e){var t=[["resolve","done",x.Callbacks("once memory"),"resolved"],["reject","fail",x.Callbacks("once memory"),"rejected"],["notify","progress",x.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return x.Deferred(function(n){x.each(t,function(t,o){var s=o[0],a=x.isFunction(e[t])&&e[t];i[o[1]](function(){var e=a&&a.apply(this,arguments);e&&x.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===r?n.promise():this,a?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?x.extend(e,r):r}},i={};return r.pipe=r.then,x.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=d.call(arguments),r=n.length,i=1!==r||e&&x.isFunction(e.promise)?r:0,o=1===i?e:x.Deferred(),s=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?d.call(arguments):r,n===a?o.notifyWith(t,n):--i||o.resolveWith(t,n)}},a,u,l;if(r>1)for(a=Array(r),u=Array(r),l=Array(r);r>t;t++)n[t]&&x.isFunction(n[t].promise)?n[t].promise().done(s(t,l,n)).fail(o.reject).progress(s(t,u,a)):--i;return i||o.resolveWith(l,n),o.promise()}}),x.support=function(t){var n=o.createElement("input"),r=o.createDocumentFragment(),i=o.createElement("div"),s=o.createElement("select"),a=s.appendChild(o.createElement("option"));return n.type?(n.type="checkbox",t.checkOn=""!==n.value,t.optSelected=a.selected,t.reliableMarginRight=!0,t.boxSizingReliable=!0,t.pixelPosition=!1,n.checked=!0,t.noCloneChecked=n.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!a.disabled,n=o.createElement("input"),n.value="t",n.type="radio",t.radioValue="t"===n.value,n.setAttribute("checked","t"),n.setAttribute("name","t"),r.appendChild(n),t.checkClone=r.cloneNode(!0).cloneNode(!0).lastChild.checked,t.focusinBubbles="onfocusin"in e,i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",t.clearCloneStyle="content-box"===i.style.backgroundClip,x(function(){var n,r,s="padding:0;margin:0;border:0;display:block;-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box",a=o.getElementsByTagName("body")[0];a&&(n=o.createElement("div"),n.style.cssText="border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px",a.appendChild(n).appendChild(i),i.innerHTML="",i.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%",x.swap(a,null!=a.style.zoom?{zoom:1}:{},function(){t.boxSizing=4===i.offsetWidth}),e.getComputedStyle&&(t.pixelPosition="1%"!==(e.getComputedStyle(i,null)||{}).top,t.boxSizingReliable="4px"===(e.getComputedStyle(i,null)||{width:"4px"}).width,r=i.appendChild(o.createElement("div")),r.style.cssText=i.style.cssText=s,r.style.marginRight=r.style.width="0",i.style.width="1px",t.reliableMarginRight=!parseFloat((e.getComputedStyle(r,null)||{}).marginRight)),a.removeChild(n))}),t):t}({});var L,q,H=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,O=/([A-Z])/g;function F(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=x.expando+Math.random()}F.uid=1,F.accepts=function(e){return e.nodeType?1===e.nodeType||9===e.nodeType:!0},F.prototype={key:function(e){if(!F.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=F.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,x.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(x.isEmptyObject(o))x.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return t===undefined?n:n[t]},access:function(e,t,n){var r;return t===undefined||t&&"string"==typeof t&&n===undefined?(r=this.get(e,t),r!==undefined?r:this.get(e,x.camelCase(t))):(this.set(e,t,n),n!==undefined?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(t===undefined)this.cache[o]={};else{x.isArray(t)?r=t.concat(t.map(x.camelCase)):(i=x.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(w)||[])),n=r.length;while(n--)delete s[r[n]]}},hasData:function(e){return!x.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}},L=new F,q=new F,x.extend({acceptData:F.accepts,hasData:function(e){return L.hasData(e)||q.hasData(e)},data:function(e,t,n){return L.access(e,t,n)},removeData:function(e,t){L.remove(e,t)},_data:function(e,t,n){return q.access(e,t,n)},_removeData:function(e,t){q.remove(e,t)}}),x.fn.extend({data:function(e,t){var n,r,i=this[0],o=0,s=null;if(e===undefined){if(this.length&&(s=L.get(i),1===i.nodeType&&!q.get(i,"hasDataAttrs"))){for(n=i.attributes;n.length>o;o++)r=n[o].name,0===r.indexOf("data-")&&(r=x.camelCase(r.slice(5)),P(i,r,s[r]));q.set(i,"hasDataAttrs",!0)}return s}return"object"==typeof e?this.each(function(){L.set(this,e)}):x.access(this,function(t){var n,r=x.camelCase(e);if(i&&t===undefined){if(n=L.get(i,e),n!==undefined)return n;if(n=L.get(i,r),n!==undefined)return n;if(n=P(i,r,undefined),n!==undefined)return n}else this.each(function(){var n=L.get(this,r);L.set(this,r,t),-1!==e.indexOf("-")&&n!==undefined&&L.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){L.remove(this,e)})}});function P(e,t,n){var r;if(n===undefined&&1===e.nodeType)if(r="data-"+t.replace(O,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:H.test(n)?JSON.parse(n):n}catch(i){}L.set(e,t,n)}else n=undefined;return n}x.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=q.get(e,t),n&&(!r||x.isArray(n)?r=q.access(e,t,x.makeArray(n)):r.push(n)),r||[]):undefined},dequeue:function(e,t){t=t||"fx";var n=x.queue(e,t),r=n.length,i=n.shift(),o=x._queueHooks(e,t),s=function(){x.dequeue(e,t)
};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return q.get(e,n)||q.access(e,n,{empty:x.Callbacks("once memory").add(function(){q.remove(e,[t+"queue",n])})})}}),x.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),n>arguments.length?x.queue(this[0],e):t===undefined?this:this.each(function(){var n=x.queue(this,e,t);x._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&x.dequeue(this,e)})},dequeue:function(e){return this.each(function(){x.dequeue(this,e)})},delay:function(e,t){return e=x.fx?x.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=x.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=undefined),e=e||"fx";while(s--)n=q.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var R,M,W=/[\t\r\n\f]/g,$=/\r/g,B=/^(?:input|select|textarea|button)$/i;x.fn.extend({attr:function(e,t){return x.access(this,x.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){x.removeAttr(this,e)})},prop:function(e,t){return x.access(this,x.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[x.propFix[e]||e]})},addClass:function(e){var t,n,r,i,o,s=0,a=this.length,u="string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).addClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):" ")){o=0;while(i=t[o++])0>r.indexOf(" "+i+" ")&&(r+=i+" ");n.className=x.trim(r)}return this},removeClass:function(e){var t,n,r,i,o,s=0,a=this.length,u=0===arguments.length||"string"==typeof e&&e;if(x.isFunction(e))return this.each(function(t){x(this).removeClass(e.call(this,t,this.className))});if(u)for(t=(e||"").match(w)||[];a>s;s++)if(n=this[s],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(W," "):"")){o=0;while(i=t[o++])while(r.indexOf(" "+i+" ")>=0)r=r.replace(" "+i+" "," ");n.className=e?x.trim(r):""}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):x.isFunction(e)?this.each(function(n){x(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if("string"===n){var t,i=0,o=x(this),s=e.match(w)||[];while(t=s[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else(n===r||"boolean"===n)&&(this.className&&q.set(this,"__className__",this.className),this.className=this.className||e===!1?"":q.get(this,"__className__")||"")})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(W," ").indexOf(t)>=0)return!0;return!1},val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=x.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,x(this).val()):e,null==i?i="":"number"==typeof i?i+="":x.isArray(i)&&(i=x.map(i,function(e){return null==e?"":e+""})),t=x.valHooks[this.type]||x.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&t.set(this,i,"value")!==undefined||(this.value=i))});if(i)return t=x.valHooks[i.type]||x.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&(n=t.get(i,"value"))!==undefined?n:(n=i.value,"string"==typeof n?n.replace($,""):null==n?"":n)}}}),x.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;for(;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(x.support.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&x.nodeName(n.parentNode,"optgroup"))){if(t=x(n).val(),o)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=x.makeArray(t),s=i.length;while(s--)r=i[s],(r.selected=x.inArray(x(r).val(),o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}},attr:function(e,t,n){var i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return typeof e.getAttribute===r?x.prop(e,t,n):(1===s&&x.isXMLDoc(e)||(t=t.toLowerCase(),i=x.attrHooks[t]||(x.expr.match.bool.test(t)?M:R)),n===undefined?i&&"get"in i&&null!==(o=i.get(e,t))?o:(o=x.find.attr(e,t),null==o?undefined:o):null!==n?i&&"set"in i&&(o=i.set(e,n,t))!==undefined?o:(e.setAttribute(t,n+""),n):(x.removeAttr(e,t),undefined))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(w);if(o&&1===e.nodeType)while(n=o[i++])r=x.propFix[n]||n,x.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!x.support.radioValue&&"radio"===t&&x.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!x.isXMLDoc(e),o&&(t=x.propFix[t]||t,i=x.propHooks[t]),n!==undefined?i&&"set"in i&&(r=i.set(e,n,t))!==undefined?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||B.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),M={set:function(e,t,n){return t===!1?x.removeAttr(e,n):e.setAttribute(n,n),n}},x.each(x.expr.match.bool.source.match(/\w+/g),function(e,t){var n=x.expr.attrHandle[t]||x.find.attr;x.expr.attrHandle[t]=function(e,t,r){var i=x.expr.attrHandle[t],o=r?undefined:(x.expr.attrHandle[t]=undefined)!=n(e,t,r)?t.toLowerCase():null;return x.expr.attrHandle[t]=i,o}}),x.support.optSelected||(x.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),x.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){x.propFix[this.toLowerCase()]=this}),x.each(["radio","checkbox"],function(){x.valHooks[this]={set:function(e,t){return x.isArray(t)?e.checked=x.inArray(x(e).val(),t)>=0:undefined}},x.support.checkOn||(x.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})});var I=/^key/,z=/^(?:mouse|contextmenu)|click/,_=/^(?:focusinfocus|focusoutblur)$/,X=/^([^.]*)(?:\.(.+)|)$/;function U(){return!0}function Y(){return!1}function V(){try{return o.activeElement}catch(e){}}x.event={global:{},add:function(e,t,n,i,o){var s,a,u,l,c,p,f,h,d,g,m,y=q.get(e);if(y){n.handler&&(s=n,n=s.handler,o=s.selector),n.guid||(n.guid=x.guid++),(l=y.events)||(l=y.events={}),(a=y.handle)||(a=y.handle=function(e){return typeof x===r||e&&x.event.triggered===e.type?undefined:x.event.dispatch.apply(a.elem,arguments)},a.elem=e),t=(t||"").match(w)||[""],c=t.length;while(c--)u=X.exec(t[c])||[],d=m=u[1],g=(u[2]||"").split(".").sort(),d&&(f=x.event.special[d]||{},d=(o?f.delegateType:f.bindType)||d,f=x.event.special[d]||{},p=x.extend({type:d,origType:m,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&x.expr.match.needsContext.test(o),namespace:g.join(".")},s),(h=l[d])||(h=l[d]=[],h.delegateCount=0,f.setup&&f.setup.call(e,i,g,a)!==!1||e.addEventListener&&e.addEventListener(d,a,!1)),f.add&&(f.add.call(e,p),p.handler.guid||(p.handler.guid=n.guid)),o?h.splice(h.delegateCount++,0,p):h.push(p),x.event.global[d]=!0);e=null}},remove:function(e,t,n,r,i){var o,s,a,u,l,c,p,f,h,d,g,m=q.hasData(e)&&q.get(e);if(m&&(u=m.events)){t=(t||"").match(w)||[""],l=t.length;while(l--)if(a=X.exec(t[l])||[],h=g=a[1],d=(a[2]||"").split(".").sort(),h){p=x.event.special[h]||{},h=(r?p.delegateType:p.bindType)||h,f=u[h]||[],a=a[2]&&RegExp("(^|\\.)"+d.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=f.length;while(o--)c=f[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(f.splice(o,1),c.selector&&f.delegateCount--,p.remove&&p.remove.call(e,c));s&&!f.length&&(p.teardown&&p.teardown.call(e,d,m.handle)!==!1||x.removeEvent(e,h,m.handle),delete u[h])}else for(h in u)x.event.remove(e,h+t[l],n,r,!0);x.isEmptyObject(u)&&(delete m.handle,q.remove(e,"events"))}},trigger:function(t,n,r,i){var s,a,u,l,c,p,f,h=[r||o],d=y.call(t,"type")?t.type:t,g=y.call(t,"namespace")?t.namespace.split("."):[];if(a=u=r=r||o,3!==r.nodeType&&8!==r.nodeType&&!_.test(d+x.event.triggered)&&(d.indexOf(".")>=0&&(g=d.split("."),d=g.shift(),g.sort()),c=0>d.indexOf(":")&&"on"+d,t=t[x.expando]?t:new x.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.namespace_re=t.namespace?RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=undefined,t.target||(t.target=r),n=null==n?[t]:x.makeArray(n,[t]),f=x.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!x.isWindow(r)){for(l=f.delegateType||d,_.test(l+d)||(a=a.parentNode);a;a=a.parentNode)h.push(a),u=a;u===(r.ownerDocument||o)&&h.push(u.defaultView||u.parentWindow||e)}s=0;while((a=h[s++])&&!t.isPropagationStopped())t.type=s>1?l:f.bindType||d,p=(q.get(a,"events")||{})[t.type]&&q.get(a,"handle"),p&&p.apply(a,n),p=c&&a[c],p&&x.acceptData(a)&&p.apply&&p.apply(a,n)===!1&&t.preventDefault();return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(h.pop(),n)!==!1||!x.acceptData(r)||c&&x.isFunction(r[d])&&!x.isWindow(r)&&(u=r[c],u&&(r[c]=null),x.event.triggered=d,r[d](),x.event.triggered=undefined,u&&(r[c]=u)),t.result}},dispatch:function(e){e=x.event.fix(e);var t,n,r,i,o,s=[],a=d.call(arguments),u=(q.get(this,"events")||{})[e.type]||[],l=x.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){s=x.event.handlers.call(this,e,u),t=0;while((i=s[t++])&&!e.isPropagationStopped()){e.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!e.isImmediatePropagationStopped())(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((x.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),r!==undefined&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()))}return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",r[i]===undefined&&(r[i]=o.needsContext?x(i,this).index(u)>=0:x.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return t.length>a&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,s=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||o,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||s===undefined||(e.which=1&s?1:2&s?3:4&s?2:0),e}},fix:function(e){if(e[x.expando])return e;var t,n,r,i=e.type,s=e,a=this.fixHooks[i];a||(this.fixHooks[i]=a=z.test(i)?this.mouseHooks:I.test(i)?this.keyHooks:{}),r=a.props?this.props.concat(a.props):this.props,e=new x.Event(s),t=r.length;while(t--)n=r[t],e[n]=s[n];return e.target||(e.target=o),3===e.target.nodeType&&(e.target=e.target.parentNode),a.filter?a.filter(e,s):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==V()&&this.focus?(this.focus(),!1):undefined},delegateType:"focusin"},blur:{trigger:function(){return this===V()&&this.blur?(this.blur(),!1):undefined},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&x.nodeName(this,"input")?(this.click(),!1):undefined},_default:function(e){return x.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){e.result!==undefined&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=x.extend(new x.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?x.event.trigger(i,null,t):x.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},x.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},x.Event=function(e,t){return this instanceof x.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.getPreventDefault&&e.getPreventDefault()?U:Y):this.type=e,t&&x.extend(this,t),this.timeStamp=e&&e.timeStamp||x.now(),this[x.expando]=!0,undefined):new x.Event(e,t)},x.Event.prototype={isDefaultPrevented:Y,isPropagationStopped:Y,isImmediatePropagationStopped:Y,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=U,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=U,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=U,this.stopPropagation()}},x.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){x.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!x.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),x.support.focusinBubbles||x.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){x.event.simulate(t,e.target,x.event.fix(e),!0)};x.event.special[t]={setup:function(){0===n++&&o.addEventListener(e,r,!0)},teardown:function(){0===--n&&o.removeEventListener(e,r,!0)}}}),x.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=undefined);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=undefined):null==r&&("string"==typeof t?(r=n,n=undefined):(r=n,n=t,t=undefined)),r===!1)r=Y;else if(!r)return this;return 1===i&&(o=r,r=function(e){return x().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=x.guid++)),this.each(function(){x.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,x(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=undefined),n===!1&&(n=Y),this.each(function(){x.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){x.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?x.event.trigger(e,t,n,!0):undefined}});var G=/^.[^:#\[\.,]*$/,J=/^(?:parents|prev(?:Until|All))/,Q=x.expr.match.needsContext,K={children:!0,contents:!0,next:!0,prev:!0};x.fn.extend({find:function(e){var t,n=[],r=this,i=r.length;if("string"!=typeof e)return this.pushStack(x(e).filter(function(){for(t=0;i>t;t++)if(x.contains(r[t],this))return!0}));for(t=0;i>t;t++)x.find(e,r[t],n);return n=this.pushStack(i>1?x.unique(n):n),n.selector=this.selector?this.selector+" "+e:e,n},has:function(e){var t=x(e,this),n=t.length;return this.filter(function(){var e=0;for(;n>e;e++)if(x.contains(this,t[e]))return!0})},not:function(e){return this.pushStack(et(this,e||[],!0))},filter:function(e){return this.pushStack(et(this,e||[],!1))},is:function(e){return!!et(this,"string"==typeof e&&Q.test(e)?x(e):e||[],!1).length},closest:function(e,t){var n,r=0,i=this.length,o=[],s=Q.test(e)||"string"!=typeof e?x(e,t||this.context):0;for(;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(11>n.nodeType&&(s?s.index(n)>-1:1===n.nodeType&&x.find.matchesSelector(n,e))){n=o.push(n);break}return this.pushStack(o.length>1?x.unique(o):o)},index:function(e){return e?"string"==typeof e?g.call(x(e),this[0]):g.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){var n="string"==typeof e?x(e,t):x.makeArray(e&&e.nodeType?[e]:e),r=x.merge(this.get(),n);return this.pushStack(x.unique(r))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function Z(e,t){while((e=e[t])&&1!==e.nodeType);return e}x.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return x.dir(e,"parentNode")},parentsUntil:function(e,t,n){return x.dir(e,"parentNode",n)},next:function(e){return Z(e,"nextSibling")},prev:function(e){return Z(e,"previousSibling")},nextAll:function(e){return x.dir(e,"nextSibling")},prevAll:function(e){return x.dir(e,"previousSibling")},nextUntil:function(e,t,n){return x.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return x.dir(e,"previousSibling",n)},siblings:function(e){return x.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return x.sibling(e.firstChild)},contents:function(e){return e.contentDocument||x.merge([],e.childNodes)}},function(e,t){x.fn[e]=function(n,r){var i=x.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=x.filter(r,i)),this.length>1&&(K[e]||x.unique(i),J.test(e)&&i.reverse()),this.pushStack(i)}}),x.extend({filter:function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?x.find.matchesSelector(r,e)?[r]:[]:x.find.matches(e,x.grep(t,function(e){return 1===e.nodeType}))},dir:function(e,t,n){var r=[],i=n!==undefined;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&x(e).is(n))break;r.push(e)}return r},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}});function et(e,t,n){if(x.isFunction(t))return x.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return x.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(G.test(t))return x.filter(t,e,n);t=x.filter(t,e)}return x.grep(e,function(e){return g.call(t,e)>=0!==n})}var tt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,nt=/<([\w:]+)/,rt=/<|&#?\w+;/,it=/<(?:script|style|link)/i,ot=/^(?:checkbox|radio)$/i,st=/checked\s*(?:[^=]|=\s*.checked.)/i,at=/^$|\/(?:java|ecma)script/i,ut=/^true\/(.*)/,lt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ct={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ct.optgroup=ct.option,ct.tbody=ct.tfoot=ct.colgroup=ct.caption=ct.thead,ct.th=ct.td,x.fn.extend({text:function(e){return x.access(this,function(e){return e===undefined?x.text(this):this.empty().append((this[0]&&this[0].ownerDocument||o).createTextNode(e))},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=pt(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){var n,r=e?x.filter(e,this):this,i=0;for(;null!=(n=r[i]);i++)t||1!==n.nodeType||x.cleanData(mt(n)),n.parentNode&&(t&&x.contains(n.ownerDocument,n)&&dt(mt(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){var e,t=0;for(;null!=(e=this[t]);t++)1===e.nodeType&&(x.cleanData(mt(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return x.clone(this,e,t)})},html:function(e){return x.access(this,function(e){var t=this[0]||{},n=0,r=this.length;if(e===undefined&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!it.test(e)&&!ct[(nt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(tt,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(x.cleanData(mt(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=x.map(this,function(e){return[e.nextSibling,e.parentNode]}),t=0;return this.domManip(arguments,function(n){var r=e[t++],i=e[t++];i&&(r&&r.parentNode!==i&&(r=this.nextSibling),x(this).remove(),i.insertBefore(n,r))},!0),t?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t,n){e=f.apply([],e);var r,i,o,s,a,u,l=0,c=this.length,p=this,h=c-1,d=e[0],g=x.isFunction(d);if(g||!(1>=c||"string"!=typeof d||x.support.checkClone)&&st.test(d))return this.each(function(r){var i=p.eq(r);g&&(e[0]=d.call(this,r,i.html())),i.domManip(e,t,n)});if(c&&(r=x.buildFragment(e,this[0].ownerDocument,!1,!n&&this),i=r.firstChild,1===r.childNodes.length&&(r=i),i)){for(o=x.map(mt(r,"script"),ft),s=o.length;c>l;l++)a=r,l!==h&&(a=x.clone(a,!0,!0),s&&x.merge(o,mt(a,"script"))),t.call(this[l],a,l);if(s)for(u=o[o.length-1].ownerDocument,x.map(o,ht),l=0;s>l;l++)a=o[l],at.test(a.type||"")&&!q.access(a,"globalEval")&&x.contains(u,a)&&(a.src?x._evalUrl(a.src):x.globalEval(a.textContent.replace(lt,"")))}return this}}),x.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){x.fn[e]=function(e){var n,r=[],i=x(e),o=i.length-1,s=0;for(;o>=s;s++)n=s===o?this:this.clone(!0),x(i[s])[t](n),h.apply(r,n.get());return this.pushStack(r)}}),x.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=x.contains(e.ownerDocument,e);if(!(x.support.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||x.isXMLDoc(e)))for(s=mt(a),o=mt(e),r=0,i=o.length;i>r;r++)yt(o[r],s[r]);if(t)if(n)for(o=o||mt(e),s=s||mt(a),r=0,i=o.length;i>r;r++)gt(o[r],s[r]);else gt(e,a);return s=mt(a,"script"),s.length>0&&dt(s,!u&&mt(e,"script")),a},buildFragment:function(e,t,n,r){var i,o,s,a,u,l,c=0,p=e.length,f=t.createDocumentFragment(),h=[];for(;p>c;c++)if(i=e[c],i||0===i)if("object"===x.type(i))x.merge(h,i.nodeType?[i]:i);else if(rt.test(i)){o=o||f.appendChild(t.createElement("div")),s=(nt.exec(i)||["",""])[1].toLowerCase(),a=ct[s]||ct._default,o.innerHTML=a[1]+i.replace(tt,"<$1></$2>")+a[2],l=a[0];while(l--)o=o.lastChild;x.merge(h,o.childNodes),o=f.firstChild,o.textContent=""}else h.push(t.createTextNode(i));f.textContent="",c=0;while(i=h[c++])if((!r||-1===x.inArray(i,r))&&(u=x.contains(i.ownerDocument,i),o=mt(f.appendChild(i),"script"),u&&dt(o),n)){l=0;while(i=o[l++])at.test(i.type||"")&&n.push(i)}return f},cleanData:function(e){var t,n,r,i,o,s,a=x.event.special,u=0;for(;(n=e[u])!==undefined;u++){if(F.accepts(n)&&(o=n[q.expando],o&&(t=q.cache[o]))){if(r=Object.keys(t.events||{}),r.length)for(s=0;(i=r[s])!==undefined;s++)a[i]?x.event.remove(n,i):x.removeEvent(n,i,t.handle);q.cache[o]&&delete q.cache[o]}delete L.cache[n[L.expando]]}},_evalUrl:function(e){return x.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})}});function pt(e,t){return x.nodeName(e,"table")&&x.nodeName(1===t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function ft(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ht(e){var t=ut.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function dt(e,t){var n=e.length,r=0;for(;n>r;r++)q.set(e[r],"globalEval",!t||q.get(t[r],"globalEval"))}function gt(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(q.hasData(e)&&(o=q.access(e),s=q.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)x.event.add(t,i,l[i][n])}L.hasData(e)&&(a=L.access(e),u=x.extend({},a),L.set(t,u))}}function mt(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return t===undefined||t&&x.nodeName(e,t)?x.merge([e],n):n}function yt(e,t){var n=t.nodeName.toLowerCase();"input"===n&&ot.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}x.fn.extend({wrapAll:function(e){var t;return x.isFunction(e)?this.each(function(t){x(this).wrapAll(e.call(this,t))}):(this[0]&&(t=x(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return x.isFunction(e)?this.each(function(t){x(this).wrapInner(e.call(this,t))}):this.each(function(){var t=x(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=x.isFunction(e);return this.each(function(n){x(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){x.nodeName(this,"body")||x(this).replaceWith(this.childNodes)}).end()}});var vt,xt,bt=/^(none|table(?!-c[ea]).+)/,wt=/^margin/,Tt=RegExp("^("+b+")(.*)$","i"),Ct=RegExp("^("+b+")(?!px)[a-z%]+$","i"),kt=RegExp("^([+-])=("+b+")","i"),Nt={BODY:"block"},Et={position:"absolute",visibility:"hidden",display:"block"},St={letterSpacing:0,fontWeight:400},jt=["Top","Right","Bottom","Left"],Dt=["Webkit","O","Moz","ms"];function At(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Dt.length;while(i--)if(t=Dt[i]+n,t in e)return t;return r}function Lt(e,t){return e=t||e,"none"===x.css(e,"display")||!x.contains(e.ownerDocument,e)}function qt(t){return e.getComputedStyle(t,null)}function Ht(e,t){var n,r,i,o=[],s=0,a=e.length;for(;a>s;s++)r=e[s],r.style&&(o[s]=q.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Lt(r)&&(o[s]=q.access(r,"olddisplay",Rt(r.nodeName)))):o[s]||(i=Lt(r),(n&&"none"!==n||!i)&&q.set(r,"olddisplay",i?n:x.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}x.fn.extend({css:function(e,t){return x.access(this,function(e,t,n){var r,i,o={},s=0;if(x.isArray(t)){for(r=qt(e),i=t.length;i>s;s++)o[t[s]]=x.css(e,t[s],!1,r);return o}return n!==undefined?x.style(e,t,n):x.css(e,t)},e,t,arguments.length>1)},show:function(){return Ht(this,!0)},hide:function(){return Ht(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Lt(this)?x(this).show():x(this).hide()})}}),x.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=vt(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=x.camelCase(t),u=e.style;return t=x.cssProps[a]||(x.cssProps[a]=At(u,a)),s=x.cssHooks[t]||x.cssHooks[a],n===undefined?s&&"get"in s&&(i=s.get(e,!1,r))!==undefined?i:u[t]:(o=typeof n,"string"===o&&(i=kt.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(x.css(e,t)),o="number"),null==n||"number"===o&&isNaN(n)||("number"!==o||x.cssNumber[a]||(n+="px"),x.support.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&(n=s.set(e,n,r))===undefined||(u[t]=n)),undefined)}},css:function(e,t,n,r){var i,o,s,a=x.camelCase(t);return t=x.cssProps[a]||(x.cssProps[a]=At(e.style,a)),s=x.cssHooks[t]||x.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),i===undefined&&(i=vt(e,t,r)),"normal"===i&&t in St&&(i=St[t]),""===n||n?(o=parseFloat(i),n===!0||x.isNumeric(o)?o||0:i):i}}),vt=function(e,t,n){var r,i,o,s=n||qt(e),a=s?s.getPropertyValue(t)||s[t]:undefined,u=e.style;return s&&(""!==a||x.contains(e.ownerDocument,e)||(a=x.style(e,t)),Ct.test(a)&&wt.test(t)&&(r=u.width,i=u.minWidth,o=u.maxWidth,u.minWidth=u.maxWidth=u.width=a,a=s.width,u.width=r,u.minWidth=i,u.maxWidth=o)),a};function Ot(e,t,n){var r=Tt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function Ft(e,t,n,r,i){var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;for(;4>o;o+=2)"margin"===n&&(s+=x.css(e,n+jt[o],!0,i)),r?("content"===n&&(s-=x.css(e,"padding"+jt[o],!0,i)),"margin"!==n&&(s-=x.css(e,"border"+jt[o]+"Width",!0,i))):(s+=x.css(e,"padding"+jt[o],!0,i),"padding"!==n&&(s+=x.css(e,"border"+jt[o]+"Width",!0,i)));return s}function Pt(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=qt(e),s=x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=vt(e,t,o),(0>i||null==i)&&(i=e.style[t]),Ct.test(i))return i;r=s&&(x.support.boxSizingReliable||i===e.style[t]),i=parseFloat(i)||0}return i+Ft(e,t,n||(s?"border":"content"),r,o)+"px"}function Rt(e){var t=o,n=Nt[e];return n||(n=Mt(e,t),"none"!==n&&n||(xt=(xt||x("<iframe frameborder='0' width='0' height='0'/>").css("cssText","display:block !important")).appendTo(t.documentElement),t=(xt[0].contentWindow||xt[0].contentDocument).document,t.write("<!doctype html><html><body>"),t.close(),n=Mt(e,t),xt.detach()),Nt[e]=n),n}function Mt(e,t){var n=x(t.createElement(e)).appendTo(t.body),r=x.css(n[0],"display");return n.remove(),r}x.each(["height","width"],function(e,t){x.cssHooks[t]={get:function(e,n,r){return n?0===e.offsetWidth&&bt.test(x.css(e,"display"))?x.swap(e,Et,function(){return Pt(e,t,r)}):Pt(e,t,r):undefined},set:function(e,n,r){var i=r&&qt(e);return Ot(e,n,r?Ft(e,t,r,x.support.boxSizing&&"border-box"===x.css(e,"boxSizing",!1,i),i):0)}}}),x(function(){x.support.reliableMarginRight||(x.cssHooks.marginRight={get:function(e,t){return t?x.swap(e,{display:"inline-block"},vt,[e,"marginRight"]):undefined}}),!x.support.pixelPosition&&x.fn.position&&x.each(["top","left"],function(e,t){x.cssHooks[t]={get:function(e,n){return n?(n=vt(e,t),Ct.test(n)?x(e).position()[t]+"px":n):undefined}}})}),x.expr&&x.expr.filters&&(x.expr.filters.hidden=function(e){return 0>=e.offsetWidth&&0>=e.offsetHeight},x.expr.filters.visible=function(e){return!x.expr.filters.hidden(e)}),x.each({margin:"",padding:"",border:"Width"},function(e,t){x.cssHooks[e+t]={expand:function(n){var r=0,i={},o="string"==typeof n?n.split(" "):[n];for(;4>r;r++)i[e+jt[r]+t]=o[r]||o[r-2]||o[0];return i}},wt.test(e)||(x.cssHooks[e+t].set=Ot)});var Wt=/%20/g,$t=/\[\]$/,Bt=/\r?\n/g,It=/^(?:submit|button|image|reset|file)$/i,zt=/^(?:input|select|textarea|keygen)/i;x.fn.extend({serialize:function(){return x.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=x.prop(this,"elements");return e?x.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!x(this).is(":disabled")&&zt.test(this.nodeName)&&!It.test(e)&&(this.checked||!ot.test(e))}).map(function(e,t){var n=x(this).val();return null==n?null:x.isArray(n)?x.map(n,function(e){return{name:t.name,value:e.replace(Bt,"\r\n")}}):{name:t.name,value:n.replace(Bt,"\r\n")}}).get()}}),x.param=function(e,t){var n,r=[],i=function(e,t){t=x.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(t===undefined&&(t=x.ajaxSettings&&x.ajaxSettings.traditional),x.isArray(e)||e.jquery&&!x.isPlainObject(e))x.each(e,function(){i(this.name,this.value)});else for(n in e)_t(n,e[n],t,i);return r.join("&").replace(Wt,"+")};function _t(e,t,n,r){var i;if(x.isArray(t))x.each(t,function(t,i){n||$t.test(e)?r(e,i):_t(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==x.type(t))r(e,t);else for(i in t)_t(e+"["+i+"]",t[i],n,r)}x.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){x.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),x.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)
},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var Xt,Ut,Yt=x.now(),Vt=/\?/,Gt=/#.*$/,Jt=/([?&])_=[^&]*/,Qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Kt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Zt=/^(?:GET|HEAD)$/,en=/^\/\//,tn=/^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,nn=x.fn.load,rn={},on={},sn="*/".concat("*");try{Ut=i.href}catch(an){Ut=o.createElement("a"),Ut.href="",Ut=Ut.href}Xt=tn.exec(Ut.toLowerCase())||[];function un(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(w)||[];if(x.isFunction(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function ln(e,t,n,r){var i={},o=e===on;function s(a){var u;return i[a]=!0,x.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):undefined:(t.dataTypes.unshift(l),s(l),!1)}),u}return s(t.dataTypes[0])||!i["*"]&&s("*")}function cn(e,t){var n,r,i=x.ajaxSettings.flatOptions||{};for(n in t)t[n]!==undefined&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&x.extend(!0,e,r),e}x.fn.load=function(e,t,n){if("string"!=typeof e&&nn)return nn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=e.slice(a),e=e.slice(0,a)),x.isFunction(t)?(n=t,t=undefined):t&&"object"==typeof t&&(i="POST"),s.length>0&&x.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?x("<div>").append(x.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},x.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){x.fn[t]=function(e){return this.on(t,e)}}),x.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ut,type:"GET",isLocal:Kt.test(Xt[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":sn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":x.parseJSON,"text xml":x.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?cn(cn(e,x.ajaxSettings),t):cn(x.ajaxSettings,e)},ajaxPrefilter:un(rn),ajaxTransport:un(on),ajax:function(e,t){"object"==typeof e&&(t=e,e=undefined),t=t||{};var n,r,i,o,s,a,u,l,c=x.ajaxSetup({},t),p=c.context||c,f=c.context&&(p.nodeType||p.jquery)?x(p):x.event,h=x.Deferred(),d=x.Callbacks("once memory"),g=c.statusCode||{},m={},y={},v=0,b="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(2===v){if(!o){o={};while(t=Qt.exec(i))o[t[1].toLowerCase()]=t[2]}t=o[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===v?i:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return v||(e=y[n]=y[n]||e,m[e]=t),this},overrideMimeType:function(e){return v||(c.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>v)for(t in e)g[t]=[g[t],e[t]];else T.always(e[T.status]);return this},abort:function(e){var t=e||b;return n&&n.abort(t),k(0,t),this}};if(h.promise(T).complete=d.add,T.success=T.done,T.error=T.fail,c.url=((e||c.url||Ut)+"").replace(Gt,"").replace(en,Xt[1]+"//"),c.type=t.method||t.type||c.method||c.type,c.dataTypes=x.trim(c.dataType||"*").toLowerCase().match(w)||[""],null==c.crossDomain&&(a=tn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===Xt[1]&&a[2]===Xt[2]&&(a[3]||("http:"===a[1]?"80":"443"))===(Xt[3]||("http:"===Xt[1]?"80":"443")))),c.data&&c.processData&&"string"!=typeof c.data&&(c.data=x.param(c.data,c.traditional)),ln(rn,c,t,T),2===v)return T;u=c.global,u&&0===x.active++&&x.event.trigger("ajaxStart"),c.type=c.type.toUpperCase(),c.hasContent=!Zt.test(c.type),r=c.url,c.hasContent||(c.data&&(r=c.url+=(Vt.test(r)?"&":"?")+c.data,delete c.data),c.cache===!1&&(c.url=Jt.test(r)?r.replace(Jt,"$1_="+Yt++):r+(Vt.test(r)?"&":"?")+"_="+Yt++)),c.ifModified&&(x.lastModified[r]&&T.setRequestHeader("If-Modified-Since",x.lastModified[r]),x.etag[r]&&T.setRequestHeader("If-None-Match",x.etag[r])),(c.data&&c.hasContent&&c.contentType!==!1||t.contentType)&&T.setRequestHeader("Content-Type",c.contentType),T.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+("*"!==c.dataTypes[0]?", "+sn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)T.setRequestHeader(l,c.headers[l]);if(c.beforeSend&&(c.beforeSend.call(p,T,c)===!1||2===v))return T.abort();b="abort";for(l in{success:1,error:1,complete:1})T[l](c[l]);if(n=ln(on,c,t,T)){T.readyState=1,u&&f.trigger("ajaxSend",[T,c]),c.async&&c.timeout>0&&(s=setTimeout(function(){T.abort("timeout")},c.timeout));try{v=1,n.send(m,k)}catch(C){if(!(2>v))throw C;k(-1,C)}}else k(-1,"No Transport");function k(e,t,o,a){var l,m,y,b,w,C=t;2!==v&&(v=2,s&&clearTimeout(s),n=undefined,i=a||"",T.readyState=e>0?4:0,l=e>=200&&300>e||304===e,o&&(b=pn(c,T,o)),b=fn(c,b,T,l),l?(c.ifModified&&(w=T.getResponseHeader("Last-Modified"),w&&(x.lastModified[r]=w),w=T.getResponseHeader("etag"),w&&(x.etag[r]=w)),204===e||"HEAD"===c.type?C="nocontent":304===e?C="notmodified":(C=b.state,m=b.data,y=b.error,l=!y)):(y=C,(e||!C)&&(C="error",0>e&&(e=0))),T.status=e,T.statusText=(t||C)+"",l?h.resolveWith(p,[m,C,T]):h.rejectWith(p,[T,C,y]),T.statusCode(g),g=undefined,u&&f.trigger(l?"ajaxSuccess":"ajaxError",[T,c,l?m:y]),d.fireWith(p,[T,C]),u&&(f.trigger("ajaxComplete",[T,c]),--x.active||x.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return x.get(e,t,n,"json")},getScript:function(e,t){return x.get(e,undefined,t,"script")}}),x.each(["get","post"],function(e,t){x[t]=function(e,n,r,i){return x.isFunction(n)&&(i=i||r,r=n,n=undefined),x.ajax({url:e,type:t,dataType:i,data:n,success:r})}});function pn(e,t,n){var r,i,o,s,a=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),r===undefined&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):undefined}function fn(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(p){return{state:"parsererror",error:s?p:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}x.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return x.globalEval(e),e}}}),x.ajaxPrefilter("script",function(e){e.cache===undefined&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),x.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=x("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),o.head.appendChild(t[0])},abort:function(){n&&n()}}}});var hn=[],dn=/(=)\?(?=&|$)|\?\?/;x.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=hn.pop()||x.expando+"_"+Yt++;return this[e]=!0,e}}),x.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(dn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&dn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=x.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(dn,"$1"+i):t.jsonp!==!1&&(t.url+=(Vt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||x.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,hn.push(i)),s&&x.isFunction(o)&&o(s[0]),s=o=undefined}),"script"):undefined}),x.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var gn=x.ajaxSettings.xhr(),mn={0:200,1223:204},yn=0,vn={};e.ActiveXObject&&x(e).on("unload",function(){for(var e in vn)vn[e]();vn=undefined}),x.support.cors=!!gn&&"withCredentials"in gn,x.support.ajax=gn=!!gn,x.ajaxTransport(function(e){var t;return x.support.cors||gn&&!e.crossDomain?{send:function(n,r){var i,o,s=e.xhr();if(s.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)s[i]=e.xhrFields[i];e.mimeType&&s.overrideMimeType&&s.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)s.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete vn[o],t=s.onload=s.onerror=null,"abort"===e?s.abort():"error"===e?r(s.status||404,s.statusText):r(mn[s.status]||s.status,s.statusText,"string"==typeof s.responseText?{text:s.responseText}:undefined,s.getAllResponseHeaders()))}},s.onload=t(),s.onerror=t("error"),t=vn[o=yn++]=t("abort"),s.send(e.hasContent&&e.data||null)},abort:function(){t&&t()}}:undefined});var xn,bn,wn=/^(?:toggle|show|hide)$/,Tn=RegExp("^(?:([+-])=|)("+b+")([a-z%]*)$","i"),Cn=/queueHooks$/,kn=[An],Nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Tn.exec(t),o=i&&i[3]||(x.cssNumber[e]?"":"px"),s=(x.cssNumber[e]||"px"!==o&&+r)&&Tn.exec(x.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,x.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};function En(){return setTimeout(function(){xn=undefined}),xn=x.now()}function Sn(e,t,n){var r,i=(Nn[t]||[]).concat(Nn["*"]),o=0,s=i.length;for(;s>o;o++)if(r=i[o].call(n,t,e))return r}function jn(e,t,n){var r,i,o=0,s=kn.length,a=x.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;var t=xn||En(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;for(;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:x.extend({},t),opts:x.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:xn||En(),duration:n.duration,tweens:[],createTween:function(t,n){var r=x.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(Dn(c,l.opts.specialEasing);s>o;o++)if(r=kn[o].call(l,e,c,l.opts))return r;return x.map(c,Sn,l),x.isFunction(l.opts.start)&&l.opts.start.call(e,l),x.fx.timer(x.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function Dn(e,t){var n,r,i,o,s;for(n in e)if(r=x.camelCase(n),i=t[r],o=e[n],x.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=x.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}x.Animation=x.extend(jn,{tweener:function(e,t){x.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;i>r;r++)n=e[r],Nn[n]=Nn[n]||[],Nn[n].unshift(t)},prefilter:function(e,t){t?kn.unshift(e):kn.push(e)}});function An(e,t,n){var r,i,o,s,a,u,l=this,c={},p=e.style,f=e.nodeType&&Lt(e),h=q.get(e,"fxshow");n.queue||(a=x._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,l.always(function(){l.always(function(){a.unqueued--,x.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],"inline"===x.css(e,"display")&&"none"===x.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",l.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],wn.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(f?"hide":"show")){if("show"!==i||!h||h[r]===undefined)continue;f=!0}c[r]=h&&h[r]||x.style(e,r)}if(!x.isEmptyObject(c)){h?"hidden"in h&&(f=h.hidden):h=q.access(e,"fxshow",{}),o&&(h.hidden=!f),f?x(e).show():l.done(function(){x(e).hide()}),l.done(function(){var t;q.remove(e,"fxshow");for(t in c)x.style(e,t,c[t])});for(r in c)s=Sn(f?h[r]:0,r,l),r in h||(h[r]=s.start,f&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function Ln(e,t,n,r,i){return new Ln.prototype.init(e,t,n,r,i)}x.Tween=Ln,Ln.prototype={constructor:Ln,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(x.cssNumber[n]?"":"px")},cur:function(){var e=Ln.propHooks[this.prop];return e&&e.get?e.get(this):Ln.propHooks._default.get(this)},run:function(e){var t,n=Ln.propHooks[this.prop];return this.pos=t=this.options.duration?x.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ln.propHooks._default.set(this),this}},Ln.prototype.init.prototype=Ln.prototype,Ln.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=x.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){x.fx.step[e.prop]?x.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[x.cssProps[e.prop]]||x.cssHooks[e.prop])?x.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Ln.propHooks.scrollTop=Ln.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},x.each(["toggle","show","hide"],function(e,t){var n=x.fn[t];x.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(qn(t,!0),e,r,i)}}),x.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Lt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=x.isEmptyObject(e),o=x.speed(t,n,r),s=function(){var t=jn(this,x.extend({},e),o);(i||q.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=undefined),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=x.timers,s=q.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&Cn.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&x.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=q.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=x.timers,s=r?r.length:0;for(n.finish=!0,x.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}});function qn(e,t){var n,r={height:e},i=0;for(t=t?1:0;4>i;i+=2-t)n=jt[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}x.each({slideDown:qn("show"),slideUp:qn("hide"),slideToggle:qn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){x.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),x.speed=function(e,t,n){var r=e&&"object"==typeof e?x.extend({},e):{complete:n||!n&&t||x.isFunction(e)&&e,duration:e,easing:n&&t||t&&!x.isFunction(t)&&t};return r.duration=x.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in x.fx.speeds?x.fx.speeds[r.duration]:x.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){x.isFunction(r.old)&&r.old.call(this),r.queue&&x.dequeue(this,r.queue)},r},x.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},x.timers=[],x.fx=Ln.prototype.init,x.fx.tick=function(){var e,t=x.timers,n=0;for(xn=x.now();t.length>n;n++)e=t[n],e()||t[n]!==e||t.splice(n--,1);t.length||x.fx.stop(),xn=undefined},x.fx.timer=function(e){e()&&x.timers.push(e)&&x.fx.start()},x.fx.interval=13,x.fx.start=function(){bn||(bn=setInterval(x.fx.tick,x.fx.interval))},x.fx.stop=function(){clearInterval(bn),bn=null},x.fx.speeds={slow:600,fast:200,_default:400},x.fx.step={},x.expr&&x.expr.filters&&(x.expr.filters.animated=function(e){return x.grep(x.timers,function(t){return e===t.elem}).length}),x.fn.offset=function(e){if(arguments.length)return e===undefined?this:this.each(function(t){x.offset.setOffset(this,e,t)});var t,n,i=this[0],o={top:0,left:0},s=i&&i.ownerDocument;if(s)return t=s.documentElement,x.contains(t,i)?(typeof i.getBoundingClientRect!==r&&(o=i.getBoundingClientRect()),n=Hn(s),{top:o.top+n.pageYOffset-t.clientTop,left:o.left+n.pageXOffset-t.clientLeft}):o},x.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=x.css(e,"position"),p=x(e),f={};"static"===c&&(e.style.position="relative"),a=p.offset(),o=x.css(e,"top"),u=x.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=p.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),x.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(f.top=t.top-a.top+s),null!=t.left&&(f.left=t.left-a.left+i),"using"in t?t.using.call(e,f):p.css(f)}},x.fn.extend({position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===x.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),x.nodeName(e[0],"html")||(r=e.offset()),r.top+=x.css(e[0],"borderTopWidth",!0),r.left+=x.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-x.css(n,"marginTop",!0),left:t.left-r.left-x.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||s;while(e&&!x.nodeName(e,"html")&&"static"===x.css(e,"position"))e=e.offsetParent;return e||s})}}),x.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;x.fn[t]=function(i){return x.access(this,function(t,i,o){var s=Hn(t);return o===undefined?s?s[n]:t[i]:(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o,undefined)},t,i,arguments.length,null)}});function Hn(e){return x.isWindow(e)?e:9===e.nodeType&&e.defaultView}x.each({Height:"height",Width:"width"},function(e,t){x.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){x.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return x.access(this,function(t,n,r){var i;return x.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):r===undefined?x.css(t,n,s):x.style(t,n,r,s)},t,o?r:undefined,o,null)}})}),x.fn.size=function(){return this.length},x.fn.andSelf=x.fn.addBack,"object"==typeof module&&module&&"object"==typeof module.exports?module.exports=x:"function"==typeof define&&define.amd&&define("jquery",[],function(){return x}),"object"==typeof e&&"object"==typeof e.document&&(e.jQuery=e.$=x)})(window);
// Knockout JavaScript library v3.0.0
// (c) Steven Sanderson - http://knockoutjs.com/
// License: MIT (http://www.opensource.org/licenses/mit-license.php)

(function() {(function(q){var y=this||(0,eval)("this"),w=y.document,K=y.navigator,u=y.jQuery,B=y.JSON;(function(q){"function"===typeof require&&"object"===typeof exports&&"object"===typeof module?q(module.exports||exports):"function"===typeof define&&define.amd?define(["exports"],q):q(y.ko={})})(function(F){function G(a,c){return null===a||typeof a in N?a===c:!1}function H(b,c,d,e){a.d[b]={init:function(b){a.a.f.set(b,L,{});return{controlsDescendantBindings:!0}},update:function(b,h,k,m,f){k=a.a.f.get(b,L);h=a.a.c(h());
m=!d!==!h;var p=!k.ob;if(p||c||m!==k.Db)p&&(k.ob=a.a.Ya(a.e.childNodes(b),!0)),m?(p||a.e.S(b,a.a.Ya(k.ob)),a.Ta(e?e(f,h):f,b)):a.e.Z(b),k.Db=m}};a.g.Y[b]=!1;a.e.P[b]=!0}var a="undefined"!==typeof F?F:{};a.b=function(b,c){for(var d=b.split("."),e=a,g=0;g<d.length-1;g++)e=e[d[g]];e[d[d.length-1]]=c};a.s=function(a,c,d){a[c]=d};a.version="3.0.0";a.b("version",a.version);a.a=function(){function b(a,b){for(var f in a)a.hasOwnProperty(f)&&b(f,a[f])}function c(k,b){if("input"!==a.a.v(k)||!k.type||"click"!=
b.toLowerCase())return!1;var f=k.type;return"checkbox"==f||"radio"==f}var d={},e={};d[K&&/Firefox\/2/i.test(K.userAgent)?"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];d.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(d,function(a,b){if(b.length)for(var f=0,c=b.length;f<c;f++)e[b[f]]=a});var g={propertychange:!0},h=w&&function(){for(var a=3,b=w.createElement("div"),f=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+
++a+"]><i></i><![endif]--\x3e",f[0];);return 4<a?a:q}();return{$a:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],n:function(a,b){for(var f=0,c=a.length;f<c;f++)b(a[f])},l:function(a,b){if("function"==typeof Array.prototype.indexOf)return Array.prototype.indexOf.call(a,b);for(var f=0,c=a.length;f<c;f++)if(a[f]===b)return f;return-1},Ua:function(a,b,f){for(var c=0,d=a.length;c<d;c++)if(b.call(f,a[c]))return a[c];return null},ia:function(b,c){var f=a.a.l(b,c);0<=f&&b.splice(f,1)},Va:function(b){b=
b||[];for(var c=[],f=0,d=b.length;f<d;f++)0>a.a.l(c,b[f])&&c.push(b[f]);return c},ha:function(a,b){a=a||[];for(var f=[],c=0,d=a.length;c<d;c++)f.push(b(a[c]));return f},ga:function(a,b){a=a||[];for(var f=[],c=0,d=a.length;c<d;c++)b(a[c])&&f.push(a[c]);return f},X:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var f=0,c=b.length;f<c;f++)a.push(b[f]);return a},V:function(b,c,f){var d=a.a.l(a.a.Ha(b),c);0>d?f&&b.push(c):f||b.splice(d,1)},extend:function(a,b){if(b)for(var f in b)b.hasOwnProperty(f)&&
(a[f]=b[f]);return a},K:b,Da:function(a,b){if(!a)return a;var f={},c;for(c in a)a.hasOwnProperty(c)&&(f[c]=b(a[c],c,a));return f},wa:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Vb:function(b){b=a.a.Q(b);for(var c=w.createElement("div"),f=0,d=b.length;f<d;f++)c.appendChild(a.L(b[f]));return c},Ya:function(b,c){for(var f=0,d=b.length,e=[];f<d;f++){var g=b[f].cloneNode(!0);e.push(c?a.L(g):g)}return e},S:function(b,c){a.a.wa(b);if(c)for(var f=0,d=c.length;f<d;f++)b.appendChild(c[f])},nb:function(b,
c){var f=b.nodeType?[b]:b;if(0<f.length){for(var d=f[0],e=d.parentNode,g=0,n=c.length;g<n;g++)e.insertBefore(c[g],d);g=0;for(n=f.length;g<n;g++)a.removeNode(f[g])}},$:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);if(1<a.length){var f=a[0],c=a[a.length-1];for(a.length=0;f!==c;)if(a.push(f),f=f.nextSibling,!f)return;a.push(c)}}return a},qb:function(a,b){7>h?a.setAttribute("selected",b):a.selected=b},la:function(a){return null===a||a===
q?"":a.trim?a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ec:function(b,c){for(var f=[],d=(b||"").split(c),e=0,g=d.length;e<g;e++){var n=a.a.la(d[e]);""!==n&&f.push(n)}return f},ac:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},Gb:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(3===a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;
return!!a},va:function(b){return a.a.Gb(b,b.ownerDocument.documentElement)},Ra:function(b){return!!a.a.Ua(b,a.a.va)},v:function(a){return a&&a.tagName&&a.tagName.toLowerCase()},r:function(b,d,f){var e=h&&g[d];if(e||"undefined"==typeof u)if(e||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var s=function(a){f.call(b,a)},l="on"+d;b.attachEvent(l,s);a.a.C.ea(b,function(){b.detachEvent(l,s)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(d,
f,!1);else{if(c(b,d)){var n=f;f=function(a,b){var f=this.checked;b&&(this.checked=!0!==b.Ab);n.call(this,a);this.checked=f}}u(b).bind(d,f)}},da:function(a,b){if(!a||!a.nodeType)throw Error("element must be a DOM node when calling triggerEvent");if("undefined"!=typeof u){var f=[];c(a,b)&&f.push({Ab:a.checked});u(a).trigger(b,f)}else if("function"==typeof w.createEvent)if("function"==typeof a.dispatchEvent)f=w.createEvent(e[b]||"HTMLEvents"),f.initEvent(b,!0,!0,y,0,0,0,0,0,!1,!1,!1,!1,0,a),a.dispatchEvent(f);
else throw Error("The supplied element doesn't support dispatchEvent");else if("undefined"!=typeof a.fireEvent)c(a,b)&&(a.checked=!0!==a.checked),a.fireEvent("on"+b);else throw Error("Browser doesn't support triggering events");},c:function(b){return a.M(b)?b():b},Ha:function(b){return a.M(b)?b.t():b},ma:function(b,c,f){if(c){var d=/\S+/g,e=b.className.match(d)||[];a.a.n(c.match(d),function(b){a.a.V(e,b,f)});b.className=e.join(" ")}},Ma:function(b,c){var f=a.a.c(c);if(null===f||f===q)f="";var d=a.e.firstChild(b);
!d||3!=d.nodeType||a.e.nextSibling(d)?a.e.S(b,[w.createTextNode(f)]):d.data=f;a.a.Jb(b)},pb:function(a,b){a.name=b;if(7>=h)try{a.mergeAttributes(w.createElement("<input name='"+a.name+"'/>"),!1)}catch(f){}},Jb:function(a){9<=h&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},Hb:function(a){if(h){var b=a.style.width;a.style.width=0;a.style.width=b}},Zb:function(b,c){b=a.a.c(b);c=a.a.c(c);for(var f=[],d=b;d<=c;d++)f.push(d);return f},Q:function(a){for(var b=[],c=0,d=a.length;c<
d;c++)b.push(a[c]);return b},cc:6===h,dc:7===h,ja:h,ab:function(b,c){for(var f=a.a.Q(b.getElementsByTagName("input")).concat(a.a.Q(b.getElementsByTagName("textarea"))),d="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},e=[],g=f.length-1;0<=g;g--)d(f[g])&&e.push(f[g]);return e},Wb:function(b){return"string"==typeof b&&(b=a.a.la(b))?B&&B.parse?B.parse(b):(new Function("return "+b))():null},Na:function(b,c,f){if(!B||!B.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return B.stringify(a.a.c(b),c,f)},Xb:function(c,d,f){f=f||{};var e=f.params||{},g=f.includeFields||this.$a,h=c;if("object"==typeof c&&"form"===a.a.v(c))for(var h=c.action,n=g.length-1;0<=n;n--)for(var r=a.a.ab(c,g[n]),v=r.length-1;0<=v;v--)e[r[v].name]=r[v].value;d=a.a.c(d);var t=w.createElement("form");t.style.display="none";t.action=h;t.method="post";for(var E in d)c=w.createElement("input"),c.name=E,c.value=a.a.Na(a.a.c(d[E])),t.appendChild(c);b(e,function(a,b){var c=w.createElement("input");c.name=
a;c.value=b;t.appendChild(c)});w.body.appendChild(t);f.submitter?f.submitter(t):t.submit();setTimeout(function(){t.parentNode.removeChild(t)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.n);a.b("utils.arrayFirst",a.a.Ua);a.b("utils.arrayFilter",a.a.ga);a.b("utils.arrayGetDistinctValues",a.a.Va);a.b("utils.arrayIndexOf",a.a.l);a.b("utils.arrayMap",a.a.ha);a.b("utils.arrayPushAll",a.a.X);a.b("utils.arrayRemoveItem",a.a.ia);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",
a.a.$a);a.b("utils.getFormFields",a.a.ab);a.b("utils.peekObservable",a.a.Ha);a.b("utils.postJson",a.a.Xb);a.b("utils.parseJson",a.a.Wb);a.b("utils.registerEventHandler",a.a.r);a.b("utils.stringifyJson",a.a.Na);a.b("utils.range",a.a.Zb);a.b("utils.toggleDomNodeCssClass",a.a.ma);a.b("utils.triggerEvent",a.a.da);a.b("utils.unwrapObservable",a.a.c);a.b("utils.objectForEach",a.a.K);a.b("utils.addOrRemoveItem",a.a.V);a.b("unwrap",a.a.c);Function.prototype.bind||(Function.prototype.bind=function(a){var c=
this,d=Array.prototype.slice.call(arguments);a=d.shift();return function(){return c.apply(a,d.concat(Array.prototype.slice.call(arguments)))}});a.a.f=new function(){function a(b,h){var k=b[d];if(!k||"null"===k||!e[k]){if(!h)return q;k=b[d]="ko"+c++;e[k]={}}return e[k]}var c=0,d="__ko__"+(new Date).getTime(),e={};return{get:function(c,d){var e=a(c,!1);return e===q?q:e[d]},set:function(c,d,e){if(e!==q||a(c,!1)!==q)a(c,!0)[d]=e},clear:function(a){var b=a[d];return b?(delete e[b],a[d]=null,!0):!1},D:function(){return c++ +
d}}};a.b("utils.domData",a.a.f);a.b("utils.domData.clear",a.a.f.clear);a.a.C=new function(){function b(b,c){var e=a.a.f.get(b,d);e===q&&c&&(e=[],a.a.f.set(b,d,e));return e}function c(d){var e=b(d,!1);if(e)for(var e=e.slice(0),m=0;m<e.length;m++)e[m](d);a.a.f.clear(d);"function"==typeof u&&"function"==typeof u.cleanData&&u.cleanData([d]);if(g[d.nodeType])for(e=d.firstChild;d=e;)e=d.nextSibling,8===d.nodeType&&c(d)}var d=a.a.f.D(),e={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{ea:function(a,c){if("function"!=
typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},mb:function(c,e){var g=b(c,!1);g&&(a.a.ia(g,e),0==g.length&&a.a.f.set(c,d,q))},L:function(b){if(e[b.nodeType]&&(c(b),g[b.nodeType])){var d=[];a.a.X(d,b.getElementsByTagName("*"));for(var m=0,f=d.length;m<f;m++)c(d[m])}return b},removeNode:function(b){a.L(b);b.parentNode&&b.parentNode.removeChild(b)}}};a.L=a.a.C.L;a.removeNode=a.a.C.removeNode;a.b("cleanNode",a.L);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.C);
a.b("utils.domNodeDisposal.addDisposeCallback",a.a.C.ea);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.C.mb);(function(){a.a.Fa=function(b){var c;if("undefined"!=typeof u)if(u.parseHTML)c=u.parseHTML(b)||[];else{if((c=u.clean([b]))&&c[0]){for(b=c[0];b.parentNode&&11!==b.parentNode.nodeType;)b=b.parentNode;b.parentNode&&b.parentNode.removeChild(b)}}else{var d=a.a.la(b).toLowerCase();c=w.createElement("div");d=d.match(/^<(thead|tbody|tfoot)/)&&[1,"<table>","</table>"]||!d.indexOf("<tr")&&[2,
"<table><tbody>","</tbody></table>"]||(!d.indexOf("<td")||!d.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||[0,"",""];b="ignored<div>"+d[1]+b+d[2]+"</div>";for("function"==typeof y.innerShiv?c.appendChild(y.innerShiv(b)):c.innerHTML=b;d[0]--;)c=c.lastChild;c=a.a.Q(c.lastChild.childNodes)}return c};a.a.Ka=function(b,c){a.a.wa(b);c=a.a.c(c);if(null!==c&&c!==q)if("string"!=typeof c&&(c=c.toString()),"undefined"!=typeof u)u(b).html(c);else for(var d=a.a.Fa(c),e=0;e<d.length;e++)b.appendChild(d[e])}})();
a.b("utils.parseHtmlFragment",a.a.Fa);a.b("utils.setHtml",a.a.Ka);a.u=function(){function b(c,e){if(c)if(8==c.nodeType){var g=a.u.jb(c.nodeValue);null!=g&&e.push({Fb:c,Tb:g})}else if(1==c.nodeType)for(var g=0,h=c.childNodes,k=h.length;g<k;g++)b(h[g],e)}var c={};return{Ca:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);
c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},ub:function(a,b){var g=c[a];if(g===q)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return g.apply(null,b||[]),!0}finally{delete c[a]}},vb:function(c,e){var g=[];b(c,g);for(var h=0,k=g.length;h<k;h++){var m=g[h].Fb,f=[m];e&&a.a.X(f,e);a.u.ub(g[h].Tb,f);m.nodeValue="";m.parentNode&&m.parentNode.removeChild(m)}},jb:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.u);a.b("memoization.memoize",
a.u.Ca);a.b("memoization.unmemoize",a.u.ub);a.b("memoization.parseMemoText",a.u.jb);a.b("memoization.unmemoizeDomNodeAndDescendants",a.u.vb);a.xa={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.h({read:b,write:function(a){clearTimeout(d);d=setTimeout(function(){b(a)},c)}})},notify:function(a,c){a.equalityComparer="always"==c?null:G}};var N={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.xa);a.sb=function(b,c,d){this.target=b;this.qa=c;this.Eb=d;a.s(this,"dispose",
this.B)};a.sb.prototype.B=function(){this.Qb=!0;this.Eb()};a.ca=function(){this.F={};a.a.extend(this,a.ca.fn);a.s(this,"subscribe",this.T);a.s(this,"extend",this.extend);a.s(this,"getSubscriptionsCount",this.Lb)};var I="change";a.ca.fn={T:function(b,c,d){d=d||I;var e=new a.sb(this,c?b.bind(c):b,function(){a.a.ia(this.F[d],e)}.bind(this));this.F[d]||(this.F[d]=[]);this.F[d].push(e);return e},notifySubscribers:function(b,c){c=c||I;if(this.cb(c))try{a.i.Wa();for(var d=this.F[c].slice(0),e=0,g;g=d[e];++e)g&&
!0!==g.Qb&&g.qa(b)}finally{a.i.end()}},cb:function(a){return this.F[a]&&this.F[a].length},Lb:function(){var b=0;a.a.K(this.F,function(a,d){b+=d.length});return b},extend:function(b){var c=this;b&&a.a.K(b,function(b,e){var g=a.xa[b];"function"==typeof g&&(c=g(c,e)||c)});return c}};a.fb=function(a){return null!=a&&"function"==typeof a.T&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.ca);a.b("isSubscribable",a.fb);a.i=function(){var b=[];return{Wa:function(a){b.push(a&&{qa:a,Za:[]})},
end:function(){b.pop()},lb:function(c){if(!a.fb(c))throw Error("Only subscribable things can act as dependencies");if(0<b.length){var d=b[b.length-1];!d||0<=a.a.l(d.Za,c)||(d.Za.push(c),d.qa(c))}},p:function(a,d,e){try{return b.push(null),a.apply(d,e||[])}finally{b.pop()}}}}();a.q=function(b){function c(){if(0<arguments.length)return c.equalityComparer&&c.equalityComparer(d,arguments[0])||(c.O(),d=arguments[0],c.N()),this;a.i.lb(c);return d}var d=b;a.ca.call(c);c.t=function(){return d};c.N=function(){c.notifySubscribers(d)};
c.O=function(){c.notifySubscribers(d,"beforeChange")};a.a.extend(c,a.q.fn);a.s(c,"peek",c.t);a.s(c,"valueHasMutated",c.N);a.s(c,"valueWillMutate",c.O);return c};a.q.fn={equalityComparer:G};var C=a.q.Yb="__ko_proto__";a.q.fn[C]=a.q;a.ya=function(b,c){return null===b||b===q||b[C]===q?!1:b[C]===c?!0:a.ya(b[C],c)};a.M=function(b){return a.ya(b,a.q)};a.gb=function(b){return"function"==typeof b&&b[C]===a.q||"function"==typeof b&&b[C]===a.h&&b.Nb?!0:!1};a.b("observable",a.q);a.b("isObservable",a.M);a.b("isWriteableObservable",
a.gb);a.ba=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.q(b);a.a.extend(b,a.ba.fn);return b.extend({trackArrayChanges:!0})};a.ba.fn={remove:function(b){for(var c=this.t(),d=[],e="function"!=typeof b||a.M(b)?function(a){return a===b}:b,g=0;g<c.length;g++){var h=c[g];e(h)&&(0===d.length&&this.O(),d.push(h),c.splice(g,1),g--)}d.length&&this.N();return d},removeAll:function(b){if(b===
q){var c=this.t(),d=c.slice(0);this.O();c.splice(0,c.length);this.N();return d}return b?this.remove(function(c){return 0<=a.a.l(b,c)}):[]},destroy:function(b){var c=this.t(),d="function"!=typeof b||a.M(b)?function(a){return a===b}:b;this.O();for(var e=c.length-1;0<=e;e--)d(c[e])&&(c[e]._destroy=!0);this.N()},destroyAll:function(b){return b===q?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.l(b,c)}):[]},indexOf:function(b){var c=this();return a.a.l(c,b)},replace:function(a,
c){var d=this.indexOf(a);0<=d&&(this.O(),this.t()[d]=c,this.N())}};a.a.n("pop push reverse shift sort splice unshift".split(" "),function(b){a.ba.fn[b]=function(){var a=this.t();this.O();this.Xa(a,b,arguments);a=a[b].apply(a,arguments);this.N();return a}});a.a.n(["slice"],function(b){a.ba.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.b("observableArray",a.ba);var J="arrayChange";a.xa.trackArrayChanges=function(b){function c(){if(!d){d=!0;var c=b.notifySubscribers;b.notifySubscribers=
function(a,b){b&&b!==I||++g;return c.apply(this,arguments)};var m=[].concat(b.t()||[]);e=null;b.T(function(c){c=[].concat(c||[]);if(b.cb(J)){var d;if(!e||1<g)e=a.a.ra(m,c,{sparse:!0});d=e;d.length&&b.notifySubscribers(d,J)}m=c;e=null;g=0})}}if(!b.Xa){var d=!1,e=null,g=0,h=b.T;b.T=b.subscribe=function(a,b,f){f===J&&c();return h.apply(this,arguments)};b.Xa=function(a,b,c){function p(a,b,c){h.push({status:a,value:b,index:c})}if(d&&!g){var h=[],l=a.length,n=c.length,r=0;switch(b){case "push":r=l;case "unshift":for(b=
0;b<n;b++)p("added",c[b],r+b);break;case "pop":r=l-1;case "shift":l&&p("deleted",a[r],r);break;case "splice":b=Math.min(Math.max(0,0>c[0]?l+c[0]:c[0]),l);for(var l=1===n?l:Math.min(b+(c[1]||0),l),n=b+n-2,r=Math.max(l,n),v=2;b<r;++b,++v)b<l&&p("deleted",a[b],b),b<n&&p("added",c[v],b);break;default:return}e=h}}}};a.h=function(b,c,d){function e(){a.a.n(z,function(a){a.B()});z=[]}function g(){var a=k.throttleEvaluation;a&&0<=a?(clearTimeout(x),x=setTimeout(h,a)):h()}function h(){if(!s){if(E&&E()){if(!l){D();
p=!0;return}}else l=!1;s=!0;try{var b=a.a.ha(z,function(a){return a.target});a.i.Wa(function(c){var d;0<=(d=a.a.l(b,c))?b[d]=q:z.push(c.T(g))});for(var d=c?n.call(c):n(),e=b.length-1;0<=e;e--)b[e]&&z.splice(e,1)[0].B();p=!0;k.equalityComparer&&k.equalityComparer(f,d)||(k.notifySubscribers(f,"beforeChange"),f=d,k.notifySubscribers(f))}finally{a.i.end(),s=!1}z.length||D()}}function k(){if(0<arguments.length){if("function"===typeof r)r.apply(c,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
return this}p||h();a.i.lb(k);return f}function m(){return!p||0<z.length}var f,p=!1,s=!1,l=!1,n=b;n&&"object"==typeof n?(d=n,n=d.read):(d=d||{},n||(n=d.read));if("function"!=typeof n)throw Error("Pass a function that returns the value of the ko.computed");var r=d.write,v=d.disposeWhenNodeIsRemoved||d.I||null,t=d.disposeWhen||d.ua,E=t,D=e,z=[],x=null;c||(c=d.owner);k.t=function(){p||h();return f};k.Kb=function(){return z.length};k.Nb="function"===typeof d.write;k.B=function(){D()};k.aa=m;a.ca.call(k);
a.a.extend(k,a.h.fn);a.s(k,"peek",k.t);a.s(k,"dispose",k.B);a.s(k,"isActive",k.aa);a.s(k,"getDependenciesCount",k.Kb);v&&(l=!0,v.nodeType&&(E=function(){return!a.a.va(v)||t&&t()}));!0!==d.deferEvaluation&&h();v&&m()&&(D=function(){a.a.C.mb(v,D);e()},a.a.C.ea(v,D));return k};a.Pb=function(b){return a.ya(b,a.h)};F=a.q.Yb;a.h[F]=a.q;a.h.fn={equalityComparer:G};a.h.fn[F]=a.h;a.b("dependentObservable",a.h);a.b("computed",a.h);a.b("isComputed",a.Pb);(function(){function b(a,g,h){h=h||new d;a=g(a);if("object"!=
typeof a||null===a||a===q||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var k=a instanceof Array?[]:{};h.save(a,k);c(a,function(c){var d=g(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":k[c]=d;break;case "object":case "undefined":var p=h.get(d);k[c]=p!==q?p:b(d,g,h)}});return k}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=
[];this.Qa=[]}a.tb=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.M(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.tb(b);return a.a.Na(b,c,d)};d.prototype={save:function(b,c){var d=a.a.l(this.keys,b);0<=d?this.Qa[d]=c:(this.keys.push(b),this.Qa.push(c))},get:function(b){b=a.a.l(this.keys,b);return 0<=b?this.Qa[b]:q}}})();a.b("toJS",a.tb);a.b("toJSON",a.toJSON);(function(){a.k={o:function(b){switch(a.a.v(b)){case "option":return!0===
b.__ko__hasDomDataOptionValue__?a.a.f.get(b,a.d.options.Ea):7>=a.a.ja?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.k.o(b.options[b.selectedIndex]):q;default:return b.value}},na:function(b,c){switch(a.a.v(b)){case "option":switch(typeof c){case "string":a.a.f.set(b,a.d.options.Ea,q);"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__;b.value=c;break;default:a.a.f.set(b,a.d.options.Ea,c),b.__ko__hasDomDataOptionValue__=
!0,b.value="number"===typeof c?c:""}break;case "select":""===c&&(c=q);if(null===c||c===q)b.selectedIndex=-1;for(var d=b.options.length-1;0<=d;d--)if(a.k.o(b.options[d])==c){b.selectedIndex=d;break}1<b.size||-1!==b.selectedIndex||(b.selectedIndex=0);break;default:if(null===c||c===q)c="";b.value=c}}}})();a.b("selectExtensions",a.k);a.b("selectExtensions.readValue",a.k.o);a.b("selectExtensions.writeValue",a.k.na);a.g=function(){function b(b){b=a.a.la(b);123===b.charCodeAt(0)&&(b=b.slice(1,-1));var c=
[],d=b.match(e),k,l,n=0;if(d){d.push(",");for(var r=0,v;v=d[r];++r){var t=v.charCodeAt(0);if(44===t){if(0>=n){k&&c.push(l?{key:k,value:l.join("")}:{unknown:k});k=l=n=0;continue}}else if(58===t){if(!l)continue}else if(47===t&&r&&1<v.length)(t=d[r-1].match(g))&&!h[t[0]]&&(b=b.substr(b.indexOf(v)+1),d=b.match(e),d.push(","),r=-1,v="/");else if(40===t||123===t||91===t)++n;else if(41===t||125===t||93===t)--n;else if(!k&&!l){k=34===t||39===t?v.slice(1,-1):v;continue}l?l.push(v):l=[v]}}return c}var c=["true",
"false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:[^\"\\\\]|\\\\.)*\"|'(?:[^'\\\\]|\\\\.)*'|/(?:[^/\\\\]|\\\\.)*/w*|[^\\s:,/][^,\"'{}()/:[\\]]*[^\\s,\"'{}()/:[\\]]|[^\\s]","g"),g=/[\])"'A-Za-z0-9_$]+$/,h={"in":1,"return":1,"typeof":1},k={};return{Y:[],U:k,Ga:b,ka:function(e,f){function g(b,f){var e,r=a.getBindingHandler(b);if(r&&r.preprocess?f=r.preprocess(f,b,g):1){if(r=k[b])e=f,0<=a.a.l(c,e)?e=!1:(r=e.match(d),e=null===r?!1:r[1]?"Object("+r[1]+")"+
r[2]:e),r=e;r&&l.push("'"+b+"':function(_z){"+e+"=_z}");n&&(f="function(){return "+f+" }");h.push("'"+b+"':"+f)}}f=f||{};var h=[],l=[],n=f.valueAccessors,r="string"===typeof e?b(e):e;a.a.n(r,function(a){g(a.key||a.unknown,a.value)});l.length&&g("_ko_property_writers","{"+l.join(",")+"}");return h.join(",")},Sb:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},oa:function(b,c,d,e,k){if(b&&a.M(b))!a.gb(b)||k&&b.t()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();
a.b("expressionRewriting",a.g);a.b("expressionRewriting.bindingRewriteValidators",a.g.Y);a.b("expressionRewriting.parseObjectLiteral",a.g.Ga);a.b("expressionRewriting.preProcessBindings",a.g.ka);a.b("expressionRewriting._twoWayBindings",a.g.U);a.b("jsonExpressionRewriting",a.g);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.g.ka);(function(){function b(a){return 8==a.nodeType&&h.test(g?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&k.test(g?a.text:a.nodeValue)}function d(a,
d){for(var e=a,k=1,n=[];e=e.nextSibling;){if(c(e)&&(k--,0===k))return n;n.push(e);b(e)&&k++}if(!d)throw Error("Cannot find closing comment tag to match: "+a.nodeValue);return null}function e(a,b){var c=d(a,b);return c?0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var g=w&&"\x3c!--test--\x3e"===w.createComment("test").text,h=g?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,k=g?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,m={ul:!0,ol:!0};a.e={P:{},childNodes:function(a){return b(a)?
d(a):a.childNodes},Z:function(c){if(b(c)){c=a.e.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.wa(c)},S:function(c,d){if(b(c)){a.e.Z(c);for(var e=c.nextSibling,k=0,n=d.length;k<n;k++)e.parentNode.insertBefore(d[k],e)}else a.a.S(c,d)},kb:function(a,c){b(a)?a.parentNode.insertBefore(c,a.nextSibling):a.firstChild?a.insertBefore(c,a.firstChild):a.appendChild(c)},eb:function(c,d,e){e?b(c)?c.parentNode.insertBefore(d,e.nextSibling):e.nextSibling?c.insertBefore(d,e.nextSibling):
c.appendChild(d):a.e.kb(c,d)},firstChild:function(a){return b(a)?!a.nextSibling||c(a.nextSibling)?null:a.nextSibling:a.firstChild},nextSibling:function(a){b(a)&&(a=e(a));return a.nextSibling&&c(a.nextSibling)?null:a.nextSibling},Mb:b,bc:function(a){return(a=(g?a.text:a.nodeValue).match(h))?a[1]:null},ib:function(d){if(m[a.a.v(d)]){var k=d.firstChild;if(k){do if(1===k.nodeType){var g;g=k.firstChild;var h=null;if(g){do if(h)h.push(g);else if(b(g)){var n=e(g,!0);n?g=n:h=[g]}else c(g)&&(h=[g]);while(g=
g.nextSibling)}if(g=h)for(h=k.nextSibling,n=0;n<g.length;n++)h?d.insertBefore(g[n],h):d.appendChild(g[n])}while(k=k.nextSibling)}}}}})();a.b("virtualElements",a.e);a.b("virtualElements.allowedBindings",a.e.P);a.b("virtualElements.emptyNode",a.e.Z);a.b("virtualElements.insertAfter",a.e.eb);a.b("virtualElements.prepend",a.e.kb);a.b("virtualElements.setDomNodeChildren",a.e.S);(function(){a.H=function(){this.zb={}};a.a.extend(a.H.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
b.getAttribute("data-bind");case 8:return a.e.Mb(b);default:return!1}},getBindings:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a):null},getBindingAccessors:function(a,c){var d=this.getBindingsString(a,c);return d?this.parseBindingsString(d,c,a,{valueAccessors:!0}):null},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.e.bc(b);default:return null}},parseBindingsString:function(b,c,d,e){try{var g=this.zb,
h=b+(e&&e.valueAccessors||""),k;if(!(k=g[h])){var m,f="with($context){with($data||{}){return{"+a.g.ka(b,e)+"}}}";m=new Function("$context","$element",f);k=g[h]=m}return k(c,d)}catch(p){throw p.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+p.message,p;}}});a.H.instance=new a.H})();a.b("bindingProvider",a.H);(function(){function b(a){return function(){return a}}function c(a){return a()}function d(b){return a.a.Da(a.i.p(b),function(a,c){return function(){return b()[c]}})}function e(a,
b){return d(this.getBindings.bind(this,a,b))}function g(b,c,d){var f,e=a.e.firstChild(c),k=a.H.instance,g=k.preprocessNode;if(g){for(;f=e;)e=a.e.nextSibling(f),g.call(k,f);e=a.e.firstChild(c)}for(;f=e;)e=a.e.nextSibling(f),h(b,f,d)}function h(b,c,d){var f=!0,e=1===c.nodeType;e&&a.e.ib(c);if(e&&d||a.H.instance.nodeHasBindings(c))f=m(c,null,b,d).shouldBindDescendants;f&&!p[a.a.v(c)]&&g(b,c,!e)}function k(b){var c=[],d={},f=[];a.a.K(b,function D(e){if(!d[e]){var k=a.getBindingHandler(e);k&&(k.after&&
(f.push(e),a.a.n(k.after,function(c){if(b[c]){if(-1!==a.a.l(f,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+f.join(", "));D(c)}}),f.pop()),c.push({key:e,bb:k}));d[e]=!0}});return c}function m(b,d,f,g){var h=a.a.f.get(b,s);if(!d){if(h)throw Error("You cannot apply bindings multiple times to the same element.");a.a.f.set(b,s,!0)}!h&&g&&a.rb(b,f);var m;if(d&&"function"!==typeof d)m=d;else{var p=a.H.instance,l=p.getBindingAccessors||e;if(d||f.A){var A=
a.h(function(){(m=d?d(f,b):l.call(p,b,f))&&f.A&&f.A();return m},null,{I:b});m&&A.aa()||(A=null)}else m=a.i.p(l,p,[b,f])}var u;if(m){var w=A?function(a){return function(){return c(A()[a])}}:function(a){return m[a]},y=function(){return a.a.Da(A?A():m,c)};y.get=function(a){return m[a]&&c(w(a))};y.has=function(a){return a in m};g=k(m);a.a.n(g,function(c){var d=c.bb.init,e=c.bb.update,k=c.key;if(8===b.nodeType&&!a.e.P[k])throw Error("The binding '"+k+"' cannot be used with virtual elements");try{"function"==
typeof d&&a.i.p(function(){var a=d(b,w(k),y,f.$data,f);if(a&&a.controlsDescendantBindings){if(u!==q)throw Error("Multiple bindings ("+u+" and "+k+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=k}}),"function"==typeof e&&a.h(function(){e(b,w(k),y,f.$data,f)},null,{I:b})}catch(g){throw g.message='Unable to process binding "'+k+": "+m[k]+'"\nMessage: '+g.message,g;}})}return{shouldBindDescendants:u===q}}function f(b){return b&&
b instanceof a.G?b:new a.G(b)}a.d={};var p={script:!0};a.getBindingHandler=function(b){return a.d[b]};a.G=function(b,c,d,f){var e=this,k="function"==typeof b,g,h=a.h(function(){var g=k?b():b;c?(c.A&&c.A(),a.a.extend(e,c),h&&(e.A=h)):(e.$parents=[],e.$root=g,e.ko=a);e.$rawData=b;e.$data=g;d&&(e[d]=g);f&&f(e,c,g);return e.$data},null,{ua:function(){return g&&!a.a.Ra(g)},I:!0});h.aa()&&(e.A=h,h.equalityComparer=null,g=[],h.wb=function(b){g.push(b);a.a.C.ea(b,function(b){a.a.ia(g,b);g.length||(h.B(),
e.A=h=q)})})};a.G.prototype.createChildContext=function(b,c,d){return new a.G(b,this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)})};a.G.prototype.extend=function(b){return new a.G(this.$rawData,this,null,function(c){a.a.extend(c,"function"==typeof b?b():b)})};var s=a.a.f.D(),l=a.a.f.D();a.rb=function(b,c){if(2==arguments.length)a.a.f.set(b,l,c),c.A&&c.A.wb(b);else return a.a.f.get(b,l)};a.pa=function(b,c,d){1===b.nodeType&&
a.e.ib(b);return m(b,c,f(d),!0)};a.xb=function(c,e,k){k=f(k);return a.pa(c,"function"===typeof e?d(e.bind(null,k,c)):a.a.Da(e,b),k)};a.Ta=function(a,b){1!==b.nodeType&&8!==b.nodeType||g(f(a),b,!0)};a.Sa=function(a,b){if(b&&1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");b=b||y.document.body;h(f(a),b,!0)};a.ta=function(b){switch(b.nodeType){case 1:case 8:var c=a.rb(b);if(c)return c;if(b.parentNode)return a.ta(b.parentNode)}return q};
a.Cb=function(b){return(b=a.ta(b))?b.$data:q};a.b("bindingHandlers",a.d);a.b("applyBindings",a.Sa);a.b("applyBindingsToDescendants",a.Ta);a.b("applyBindingAccessorsToNode",a.pa);a.b("applyBindingsToNode",a.xb);a.b("contextFor",a.ta);a.b("dataFor",a.Cb)})();var M={"class":"className","for":"htmlFor"};a.d.attr={update:function(b,c){var d=a.a.c(c())||{};a.a.K(d,function(c,d){d=a.a.c(d);var h=!1===d||null===d||d===q;h&&b.removeAttribute(c);8>=a.a.ja&&c in M?(c=M[c],h?b.removeAttribute(c):b[c]=d):h||b.setAttribute(c,
d.toString());"name"===c&&a.a.pb(b,h?"":d.toString())})}};(function(){a.d.checked={after:["value","attr"],init:function(b,c,d){function e(){return d.has("checkedValue")?a.a.c(d.get("checkedValue")):b.value}function g(){var k=b.checked,g=s?e():k;if(l&&(!m||k)){var h=a.i.p(c);f?p!==g?(k&&(a.a.V(h,g,!0),a.a.V(h,p,!1)),p=g):a.a.V(h,g,k):a.g.oa(h,d,"checked",g,!0)}}function h(){var d=a.a.c(c());b.checked=f?0<=a.a.l(d,e()):k?d:e()===d}var k="checkbox"==b.type,m="radio"==b.type;if(k||m){var f=k&&a.a.c(c())instanceof
Array,p=f?e():q,s=m||f,l=!1;m&&!b.name&&a.d.uniqueName.init(b,function(){return!0});a.h(g,null,{I:b});a.a.r(b,"click",g);a.h(h,null,{I:b});l=!0}}};a.g.U.checked=!0;a.d.checkedValue={update:function(b,c){b.value=a.a.c(c())}}})();a.d.css={update:function(b,c){var d=a.a.c(c());"object"==typeof d?a.a.K(d,function(c,d){d=a.a.c(d);a.a.ma(b,c,d)}):(d=String(d||""),a.a.ma(b,b.__ko__cssValue,!1),b.__ko__cssValue=d,a.a.ma(b,d,!0))}};a.d.enable={update:function(b,c){var d=a.a.c(c());d&&b.disabled?b.removeAttribute("disabled"):
d||b.disabled||(b.disabled=!0)}};a.d.disable={update:function(b,c){a.d.enable.update(b,function(){return!a.a.c(c())})}};a.d.event={init:function(b,c,d,e,g){var h=c()||{};a.a.K(h,function(k){"string"==typeof k&&a.a.r(b,k,function(b){var f,h=c()[k];if(h){try{var s=a.a.Q(arguments);e=g.$data;s.unshift(e);f=h.apply(e,s)}finally{!0!==f&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(k+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.d.foreach={hb:function(b){return function(){var c=
b(),d=a.a.Ha(c);if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.J.Aa};a.a.c(c);return{foreach:d.data,as:d.as,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.J.Aa}}},init:function(b,c){return a.d.template.init(b,a.d.foreach.hb(c))},update:function(b,c,d,e,g){return a.d.template.update(b,a.d.foreach.hb(c),d,e,g)}};a.g.Y.foreach=!1;a.e.P.foreach=!0;a.d.hasfocus=
{init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var g=b.ownerDocument;if("activeElement"in g){var f;try{f=g.activeElement}catch(h){f=g.body}e=f===b}g=c();a.g.oa(g,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var g=e.bind(null,!0),h=e.bind(null,!1);a.a.r(b,"focus",g);a.a.r(b,"focusin",g);a.a.r(b,"blur",h);a.a.r(b,"focusout",h)},update:function(b,c){var d=!!a.a.c(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===d||(d?b.focus():b.blur(),a.i.p(a.a.da,
null,[b,d?"focusin":"focusout"]))}};a.g.U.hasfocus=!0;a.d.hasFocus=a.d.hasfocus;a.g.U.hasFocus=!0;a.d.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Ka(b,c())}};var L=a.a.f.D();H("if");H("ifnot",!1,!0);H("with",!0,!1,function(a,c){return a.createChildContext(c)});a.d.options={init:function(b){if("select"!==a.a.v(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,
c,d){function e(){return a.a.ga(b.options,function(a){return a.selected})}function g(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function h(c,d){if(p.length){var f=0<=a.a.l(p,a.k.o(d[0]));a.a.qb(d[0],f);l&&!f&&a.i.p(a.a.da,null,[b,"change"])}}var k=0!=b.length&&b.multiple?b.scrollTop:null;c=a.a.c(c());var m=d.get("optionsIncludeDestroyed"),f={},p;p=b.multiple?a.a.ha(e(),a.k.o):0<=b.selectedIndex?[a.k.o(b.options[b.selectedIndex])]:[];if(c){"undefined"==typeof c.length&&(c=[c]);
var s=a.a.ga(c,function(b){return m||b===q||null===b||!a.a.c(b._destroy)});d.has("optionsCaption")&&(c=a.a.c(d.get("optionsCaption")),null!==c&&c!==q&&s.unshift(f))}else c=[];var l=!1;c=h;d.has("optionsAfterRender")&&(c=function(b,c){h(0,c);a.i.p(d.get("optionsAfterRender"),null,[c[0],b!==f?b:q])});a.a.Ja(b,s,function(b,c,e){e.length&&(p=e[0].selected?[a.k.o(e[0])]:[],l=!0);c=w.createElement("option");b===f?(a.a.Ma(c,d.get("optionsCaption")),a.k.na(c,q)):(e=g(b,d.get("optionsValue"),b),a.k.na(c,a.a.c(e)),
b=g(b,d.get("optionsText"),e),a.a.Ma(c,b));return[c]},null,c);(b.multiple?p.length&&e().length<p.length:p.length&&0<=b.selectedIndex?a.k.o(b.options[b.selectedIndex])!==p[0]:p.length||0<=b.selectedIndex)&&a.i.p(a.a.da,null,[b,"change"]);a.a.Hb(b);k&&20<Math.abs(k-b.scrollTop)&&(b.scrollTop=k)}};a.d.options.Ea=a.a.f.D();a.d.selectedOptions={after:["options","foreach"],init:function(b,c,d){a.a.r(b,"change",function(){var e=c(),g=[];a.a.n(b.getElementsByTagName("option"),function(b){b.selected&&g.push(a.k.o(b))});
a.g.oa(e,d,"selectedOptions",g)})},update:function(b,c){if("select"!=a.a.v(b))throw Error("values binding applies only to SELECT elements");var d=a.a.c(c());d&&"number"==typeof d.length&&a.a.n(b.getElementsByTagName("option"),function(b){var c=0<=a.a.l(d,a.k.o(b));a.a.qb(b,c)})}};a.g.U.selectedOptions=!0;a.d.style={update:function(b,c){var d=a.a.c(c()||{});a.a.K(d,function(c,d){d=a.a.c(d);b.style[c]=d||""})}};a.d.submit={init:function(b,c,d,e,g){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");
a.a.r(b,"submit",function(a){var d,e=c();try{d=e.call(g.$data,b)}finally{!0!==d&&(a.preventDefault?a.preventDefault():a.returnValue=!1)}})}};a.d.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Ma(b,c())}};a.e.P.text=!0;a.d.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.d.uniqueName.Bb;a.a.pb(b,d)}}};a.d.uniqueName.Bb=0;a.d.value={after:["options","foreach"],init:function(b,c,d){function e(){k=!1;var e=c(),f=a.k.o(b);a.g.oa(e,d,"value",f)}var g=
["change"],h=d.get("valueUpdate"),k=!1;h&&("string"==typeof h&&(h=[h]),a.a.X(g,h),g=a.a.Va(g));!a.a.ja||"input"!=b.tagName.toLowerCase()||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.l(g,"propertychange")||(a.a.r(b,"propertychange",function(){k=!0}),a.a.r(b,"blur",function(){k&&e()}));a.a.n(g,function(c){var d=e;a.a.ac(c,"after")&&(d=function(){setTimeout(e,0)},c=c.substring(5));a.a.r(b,c,d)})},update:function(b,c){var d="select"===a.a.v(b),e=a.a.c(c()),g=a.k.o(b);
e!==g&&(g=function(){a.k.na(b,e)},g(),d&&(e!==a.k.o(b)?a.i.p(a.a.da,null,[b,"change"]):setTimeout(g,0)))}};a.g.U.value=!0;a.d.visible={update:function(b,c){var d=a.a.c(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};(function(b){a.d[b]={init:function(c,d,e,g,h){return a.d.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,g,h)}}})("click");a.w=function(){};a.w.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");
};a.w.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.w.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.m.j(d)}if(1==b.nodeType||8==b.nodeType)return new a.m.W(b);throw Error("Unknown template type: "+b);};a.w.prototype.renderTemplate=function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,
d)};a.w.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.w.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.w);a.Oa=function(){function b(b,c,d,k){b=a.g.Ga(b);for(var m=a.g.Y,f=0;f<b.length;f++){var p=b[f].key;if(m.hasOwnProperty(p)){var s=m[p];if("function"===typeof s){if(p=s(b[f].value))throw Error(p);}else if(!s)throw Error("This template engine does not support the '"+
p+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.g.ka(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return k.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{Ib:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.Oa.Ub(b,c)},
d)},Ub:function(a,g){return a.replace(c,function(a,c,d,f,e){return b(e,c,d,g)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",g)})},yb:function(b,c){return a.u.Ca(function(d,k){var m=d.nextSibling;m&&m.nodeName.toLowerCase()===c&&a.pa(m,b,k)})}}}();a.b("__tr_ambtns",a.Oa.yb);(function(){a.m={};a.m.j=function(a){this.j=a};a.m.j.prototype.text=function(){var b=a.a.v(this.j),b="script"===b?"text":"textarea"===b?"value":"innerHTML";if(0==arguments.length)return this.j[b];var c=arguments[0];
"innerHTML"===b?a.a.Ka(this.j,c):this.j[b]=c};var b=a.a.f.D()+"_";a.m.j.prototype.data=function(c){if(1===arguments.length)return a.a.f.get(this.j,b+c);a.a.f.set(this.j,b+c,arguments[1])};var c=a.a.f.D();a.m.W=function(a){this.j=a};a.m.W.prototype=new a.m.j;a.m.W.prototype.text=function(){if(0==arguments.length){var b=a.a.f.get(this.j,c)||{};b.Pa===q&&b.sa&&(b.Pa=b.sa.innerHTML);return b.Pa}a.a.f.set(this.j,c,{Pa:arguments[0]})};a.m.j.prototype.nodes=function(){if(0==arguments.length)return(a.a.f.get(this.j,
c)||{}).sa;a.a.f.set(this.j,c,{sa:arguments[0]})};a.b("templateSources",a.m);a.b("templateSources.domElement",a.m.j);a.b("templateSources.anonymousTemplate",a.m.W)})();(function(){function b(b,c,d){var e;for(c=a.e.nextSibling(c);b&&(e=b)!==c;)b=a.e.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var f=c[0],e=c[c.length-1],g=f.parentNode,h=a.H.instance,n=h.preprocessNode;if(n){b(f,e,function(a,b){var c=a.previousSibling,d=n.call(h,a);d&&(a===f&&(f=d[0]||b),a===e&&(e=d[d.length-1]||c))});c.length=
0;if(!f)return;f===e?c.push(f):(c.push(f,e),a.a.$(c,g))}b(f,e,function(b){1!==b.nodeType&&8!==b.nodeType||a.Sa(d,b)});b(f,e,function(b){1!==b.nodeType&&8!==b.nodeType||a.u.vb(b,[d])});a.a.$(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,s){s=s||{};var l=b&&d(b),l=l&&l.ownerDocument,n=s.templateEngine||g;a.Oa.Ib(f,n,l);f=n.renderTemplate(f,h,s,l);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");
l=!1;switch(e){case "replaceChildren":a.e.S(b,f);l=!0;break;case "replaceNode":a.a.nb(b,f);l=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}l&&(c(f,h),s.afterRender&&a.i.p(s.afterRender,null,[f,h.$data]));return f}var g;a.La=function(b){if(b!=q&&!(b instanceof a.w))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.Ia=function(b,c,f,h,s){f=f||{};if((f.templateEngine||g)==q)throw Error("Set a template engine before calling renderTemplate");
s=s||"replaceChildren";if(h){var l=d(h);return a.h(function(){var g=c&&c instanceof a.G?c:new a.G(a.a.c(c)),r="function"==typeof b?b(g.$data,g):b,g=e(h,s,r,g,f);"replaceNode"==s&&(h=g,l=d(h))},null,{ua:function(){return!l||!a.a.va(l)},I:l&&"replaceNode"==s?l.parentNode:l})}return a.u.Ca(function(d){a.Ia(b,c,f,d,"replaceNode")})};a.$b=function(b,d,f,g,h){function l(a,b){c(b,r);f.afterRender&&f.afterRender(b,a)}function n(a,c){r=h.createChildContext(a,f.as,function(a){a.$index=c});var d="function"==
typeof b?b(a,r):b;return e(null,"ignoreTargetNode",d,r,f)}var r;return a.h(function(){var b=a.a.c(d)||[];"undefined"==typeof b.length&&(b=[b]);b=a.a.ga(b,function(b){return f.includeDestroyed||b===q||null===b||!a.a.c(b._destroy)});a.i.p(a.a.Ja,null,[g,b,n,f,l])},null,{I:g})};var h=a.a.f.D();a.d.template={init:function(b,c){var d=a.a.c(c());"string"==typeof d||d.name?a.e.Z(b):(d=a.e.childNodes(b),d=a.a.Vb(d),(new a.m.W(b)).nodes(d));return{controlsDescendantBindings:!0}},update:function(b,c,d,e,g){c=
a.a.c(c());d={};e=!0;var l,n=null;"string"!=typeof c&&(d=c,c=a.a.c(d.name),"if"in d&&(e=a.a.c(d["if"])),e&&"ifnot"in d&&(e=!a.a.c(d.ifnot)),l=a.a.c(d.data));"foreach"in d?n=a.$b(c||b,e&&d.foreach||[],d,b,g):e?(g="data"in d?g.createChildContext(l,d.as):g,n=a.Ia(c||b,g,d,b)):a.e.Z(b);g=n;(l=a.a.f.get(b,h))&&"function"==typeof l.B&&l.B();a.a.f.set(b,h,g&&g.aa()?g:q)}};a.g.Y.template=function(b){b=a.g.Ga(b);return 1==b.length&&b[0].unknown||a.g.Sb(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};
a.e.P.template=!0})();a.b("setTemplateEngine",a.La);a.b("renderTemplate",a.Ia);a.a.ra=function(){function a(b,d,e,g,h){var k=Math.min,m=Math.max,f=[],p,q=b.length,l,n=d.length,r=n-q||1,v=q+n+1,t,u,w;for(p=0;p<=q;p++)for(u=t,f.push(t=[]),w=k(n,p+r),l=m(0,p-1);l<=w;l++)t[l]=l?p?b[p-1]===d[l-1]?u[l-1]:k(u[l]||v,t[l-1]||v)+1:l+1:p+1;k=[];m=[];r=[];p=q;for(l=n;p||l;)n=f[p][l]-1,l&&n===f[p][l-1]?m.push(k[k.length]={status:e,value:d[--l],index:l}):p&&n===f[p-1][l]?r.push(k[k.length]={status:g,value:b[--p],
index:p}):(--l,--p,h.sparse||k.push({status:"retained",value:d[l]}));if(m.length&&r.length){b=10*q;var z;for(d=e=0;(h.dontLimitMoves||d<b)&&(z=m[e]);e++){for(g=0;f=r[g];g++)if(z.value===f.value){z.moved=f.index;f.moved=z.index;r.splice(g,1);d=g=0;break}d+=g}}return k.reverse()}return function(c,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};c=c||[];d=d||[];return c.length<=d.length?a(c,d,"added","deleted",e):a(d,c,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.ra);(function(){function b(b,
c,g,h,k){var m=[],f=a.h(function(){var f=c(g,k,a.a.$(m,b))||[];0<m.length&&(a.a.nb(m,f),h&&a.i.p(h,null,[g,f,k]));m.splice(0,m.length);a.a.X(m,f)},null,{I:b,ua:function(){return!a.a.Ra(m)}});return{R:m,h:f.aa()?f:q}}var c=a.a.f.D();a.a.Ja=function(d,e,g,h,k){function m(b,c){x=s[c];t!==c&&(z[b]=x);x.za(t++);a.a.$(x.R,d);r.push(x);w.push(x)}function f(b,c){if(b)for(var d=0,e=c.length;d<e;d++)c[d]&&a.a.n(c[d].R,function(a){b(a,d,c[d].fa)})}e=e||[];h=h||{};var p=a.a.f.get(d,c)===q,s=a.a.f.get(d,c)||[],
l=a.a.ha(s,function(a){return a.fa}),n=a.a.ra(l,e,h.dontLimitMoves),r=[],v=0,t=0,u=[],w=[];e=[];for(var z=[],l=[],x,A=0,y,B;y=n[A];A++)switch(B=y.moved,y.status){case "deleted":B===q&&(x=s[v],x.h&&x.h.B(),u.push.apply(u,a.a.$(x.R,d)),h.beforeRemove&&(e[A]=x,w.push(x)));v++;break;case "retained":m(A,v++);break;case "added":B!==q?m(A,B):(x={fa:y.value,za:a.q(t++)},r.push(x),w.push(x),p||(l[A]=x))}f(h.beforeMove,z);a.a.n(u,h.beforeRemove?a.L:a.removeNode);for(var A=0,p=a.e.firstChild(d),C;x=w[A];A++){x.R||
a.a.extend(x,b(d,g,x.fa,k,x.za));for(v=0;n=x.R[v];p=n.nextSibling,C=n,v++)n!==p&&a.e.eb(d,n,C);!x.Ob&&k&&(k(x.fa,x.R,x.za),x.Ob=!0)}f(h.beforeRemove,e);f(h.afterMove,z);f(h.afterAdd,l);a.a.f.set(d,c,r)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.Ja);a.J=function(){this.allowTemplateRewriting=!1};a.J.prototype=new a.w;a.J.prototype.renderTemplateSource=function(b){var c=(9>a.a.ja?0:b.nodes)?b.nodes():null;if(c)return a.a.Q(c.cloneNode(!0).childNodes);b=b.text();return a.a.Fa(b)};a.J.Aa=
new a.J;a.La(a.J.Aa);a.b("nativeTemplateEngine",a.J);(function(){a.Ba=function(){var a=this.Rb=function(){if("undefined"==typeof u||!u.tmpl)return 0;try{if(0<=u.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();this.renderTemplateSource=function(b,e,g){g=g||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=u.template(null,"{{ko_with $item.koBindingContext}}"+h+
"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=u.extend({koBindingContext:e},g.templateOptions);e=u.tmpl(h,b,e);e.appendTo(w.createElement("div"));u.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(u.tmpl.tag.ko_code={open:"__.push($1 || '');"},u.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.Ba.prototype=
new a.w;var b=new a.Ba;0<b.Rb&&a.La(b);a.b("jqueryTmplTemplateEngine",a.Ba)})()})})();})();
//     Underscore.js 1.5.1
//     http://underscorejs.org
//     (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
!function(){var n=this,t=n._,r={},e=Array.prototype,u=Object.prototype,i=Function.prototype,a=e.push,o=e.slice,c=e.concat,l=u.toString,f=u.hasOwnProperty,s=e.forEach,p=e.map,v=e.reduce,h=e.reduceRight,d=e.filter,g=e.every,m=e.some,y=e.indexOf,b=e.lastIndexOf,x=Array.isArray,_=Object.keys,w=i.bind,j=function(n){return n instanceof j?n:this instanceof j?(this._wrapped=n,void 0):new j(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=j),exports._=j):n._=j,j.VERSION="1.5.1";var A=j.each=j.forEach=function(n,t,e){if(null!=n)if(s&&n.forEach===s)n.forEach(t,e);else if(n.length===+n.length){for(var u=0,i=n.length;i>u;u++)if(t.call(e,n[u],u,n)===r)return}else for(var a in n)if(j.has(n,a)&&t.call(e,n[a],a,n)===r)return};j.map=j.collect=function(n,t,r){var e=[];return null==n?e:p&&n.map===p?n.map(t,r):(A(n,function(n,u,i){e.push(t.call(r,n,u,i))}),e)};var E="Reduce of empty array with no initial value";j.reduce=j.foldl=j.inject=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),v&&n.reduce===v)return e&&(t=j.bind(t,e)),u?n.reduce(t,r):n.reduce(t);if(A(n,function(n,i,a){u?r=t.call(e,r,n,i,a):(r=n,u=!0)}),!u)throw new TypeError(E);return r},j.reduceRight=j.foldr=function(n,t,r,e){var u=arguments.length>2;if(null==n&&(n=[]),h&&n.reduceRight===h)return e&&(t=j.bind(t,e)),u?n.reduceRight(t,r):n.reduceRight(t);var i=n.length;if(i!==+i){var a=j.keys(n);i=a.length}if(A(n,function(o,c,l){c=a?a[--i]:--i,u?r=t.call(e,r,n[c],c,l):(r=n[c],u=!0)}),!u)throw new TypeError(E);return r},j.find=j.detect=function(n,t,r){var e;return O(n,function(n,u,i){return t.call(r,n,u,i)?(e=n,!0):void 0}),e},j.filter=j.select=function(n,t,r){var e=[];return null==n?e:d&&n.filter===d?n.filter(t,r):(A(n,function(n,u,i){t.call(r,n,u,i)&&e.push(n)}),e)},j.reject=function(n,t,r){return j.filter(n,function(n,e,u){return!t.call(r,n,e,u)},r)},j.every=j.all=function(n,t,e){t||(t=j.identity);var u=!0;return null==n?u:g&&n.every===g?n.every(t,e):(A(n,function(n,i,a){return(u=u&&t.call(e,n,i,a))?void 0:r}),!!u)};var O=j.some=j.any=function(n,t,e){t||(t=j.identity);var u=!1;return null==n?u:m&&n.some===m?n.some(t,e):(A(n,function(n,i,a){return u||(u=t.call(e,n,i,a))?r:void 0}),!!u)};j.contains=j.include=function(n,t){return null==n?!1:y&&n.indexOf===y?n.indexOf(t)!=-1:O(n,function(n){return n===t})},j.invoke=function(n,t){var r=o.call(arguments,2),e=j.isFunction(t);return j.map(n,function(n){return(e?t:n[t]).apply(n,r)})},j.pluck=function(n,t){return j.map(n,function(n){return n[t]})},j.where=function(n,t,r){return j.isEmpty(t)?r?void 0:[]:j[r?"find":"filter"](n,function(n){for(var r in t)if(t[r]!==n[r])return!1;return!0})},j.findWhere=function(n,t){return j.where(n,t,!0)},j.max=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.max.apply(Math,n);if(!t&&j.isEmpty(n))return-1/0;var e={computed:-1/0,value:-1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a>e.computed&&(e={value:n,computed:a})}),e.value},j.min=function(n,t,r){if(!t&&j.isArray(n)&&n[0]===+n[0]&&n.length<65535)return Math.min.apply(Math,n);if(!t&&j.isEmpty(n))return 1/0;var e={computed:1/0,value:1/0};return A(n,function(n,u,i){var a=t?t.call(r,n,u,i):n;a<e.computed&&(e={value:n,computed:a})}),e.value},j.shuffle=function(n){var t,r=0,e=[];return A(n,function(n){t=j.random(r++),e[r-1]=e[t],e[t]=n}),e};var F=function(n){return j.isFunction(n)?n:function(t){return t[n]}};j.sortBy=function(n,t,r){var e=F(t);return j.pluck(j.map(n,function(n,t,u){return{value:n,index:t,criteria:e.call(r,n,t,u)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index<t.index?-1:1}),"value")};var k=function(n,t,r,e){var u={},i=F(null==t?j.identity:t);return A(n,function(t,a){var o=i.call(r,t,a,n);e(u,o,t)}),u};j.groupBy=function(n,t,r){return k(n,t,r,function(n,t,r){(j.has(n,t)?n[t]:n[t]=[]).push(r)})},j.countBy=function(n,t,r){return k(n,t,r,function(n,t){j.has(n,t)||(n[t]=0),n[t]++})},j.sortedIndex=function(n,t,r,e){r=null==r?j.identity:F(r);for(var u=r.call(e,t),i=0,a=n.length;a>i;){var o=i+a>>>1;r.call(e,n[o])<u?i=o+1:a=o}return i},j.toArray=function(n){return n?j.isArray(n)?o.call(n):n.length===+n.length?j.map(n,j.identity):j.values(n):[]},j.size=function(n){return null==n?0:n.length===+n.length?n.length:j.keys(n).length},j.first=j.head=j.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:o.call(n,0,t)},j.initial=function(n,t,r){return o.call(n,0,n.length-(null==t||r?1:t))},j.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:o.call(n,Math.max(n.length-t,0))},j.rest=j.tail=j.drop=function(n,t,r){return o.call(n,null==t||r?1:t)},j.compact=function(n){return j.filter(n,j.identity)};var R=function(n,t,r){return t&&j.every(n,j.isArray)?c.apply(r,n):(A(n,function(n){j.isArray(n)||j.isArguments(n)?t?a.apply(r,n):R(n,t,r):r.push(n)}),r)};j.flatten=function(n,t){return R(n,t,[])},j.without=function(n){return j.difference(n,o.call(arguments,1))},j.uniq=j.unique=function(n,t,r,e){j.isFunction(t)&&(e=r,r=t,t=!1);var u=r?j.map(n,r,e):n,i=[],a=[];return A(u,function(r,e){(t?e&&a[a.length-1]===r:j.contains(a,r))||(a.push(r),i.push(n[e]))}),i},j.union=function(){return j.uniq(j.flatten(arguments,!0))},j.intersection=function(n){var t=o.call(arguments,1);return j.filter(j.uniq(n),function(n){return j.every(t,function(t){return j.indexOf(t,n)>=0})})},j.difference=function(n){var t=c.apply(e,o.call(arguments,1));return j.filter(n,function(n){return!j.contains(t,n)})},j.zip=function(){for(var n=j.max(j.pluck(arguments,"length").concat(0)),t=new Array(n),r=0;n>r;r++)t[r]=j.pluck(arguments,""+r);return t},j.object=function(n,t){if(null==n)return{};for(var r={},e=0,u=n.length;u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},j.indexOf=function(n,t,r){if(null==n)return-1;var e=0,u=n.length;if(r){if("number"!=typeof r)return e=j.sortedIndex(n,t),n[e]===t?e:-1;e=0>r?Math.max(0,u+r):r}if(y&&n.indexOf===y)return n.indexOf(t,r);for(;u>e;e++)if(n[e]===t)return e;return-1},j.lastIndexOf=function(n,t,r){if(null==n)return-1;var e=null!=r;if(b&&n.lastIndexOf===b)return e?n.lastIndexOf(t,r):n.lastIndexOf(t);for(var u=e?r:n.length;u--;)if(n[u]===t)return u;return-1},j.range=function(n,t,r){arguments.length<=1&&(t=n||0,n=0),r=arguments[2]||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=0,i=new Array(e);e>u;)i[u++]=n,n+=r;return i};var M=function(){};j.bind=function(n,t){var r,e;if(w&&n.bind===w)return w.apply(n,o.call(arguments,1));if(!j.isFunction(n))throw new TypeError;return r=o.call(arguments,2),e=function(){if(!(this instanceof e))return n.apply(t,r.concat(o.call(arguments)));M.prototype=n.prototype;var u=new M;M.prototype=null;var i=n.apply(u,r.concat(o.call(arguments)));return Object(i)===i?i:u}},j.partial=function(n){var t=o.call(arguments,1);return function(){return n.apply(this,t.concat(o.call(arguments)))}},j.bindAll=function(n){var t=o.call(arguments,1);if(0===t.length)throw new Error("bindAll must be passed function names");return A(t,function(t){n[t]=j.bind(n[t],n)}),n},j.memoize=function(n,t){var r={};return t||(t=j.identity),function(){var e=t.apply(this,arguments);return j.has(r,e)?r[e]:r[e]=n.apply(this,arguments)}},j.delay=function(n,t){var r=o.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},j.defer=function(n){return j.delay.apply(j,[n,1].concat(o.call(arguments,1)))},j.throttle=function(n,t,r){var e,u,i,a=null,o=0;r||(r={});var c=function(){o=r.leading===!1?0:new Date,a=null,i=n.apply(e,u)};return function(){var l=new Date;o||r.leading!==!1||(o=l);var f=t-(l-o);return e=this,u=arguments,0>=f?(clearTimeout(a),a=null,o=l,i=n.apply(e,u)):a||r.trailing===!1||(a=setTimeout(c,f)),i}},j.debounce=function(n,t,r){var e,u=null;return function(){var i=this,a=arguments,o=function(){u=null,r||(e=n.apply(i,a))},c=r&&!u;return clearTimeout(u),u=setTimeout(o,t),c&&(e=n.apply(i,a)),e}},j.once=function(n){var t,r=!1;return function(){return r?t:(r=!0,t=n.apply(this,arguments),n=null,t)}},j.wrap=function(n,t){return function(){var r=[n];return a.apply(r,arguments),t.apply(this,r)}},j.compose=function(){var n=arguments;return function(){for(var t=arguments,r=n.length-1;r>=0;r--)t=[n[r].apply(this,t)];return t[0]}},j.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},j.keys=_||function(n){if(n!==Object(n))throw new TypeError("Invalid object");var t=[];for(var r in n)j.has(n,r)&&t.push(r);return t},j.values=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push(n[r]);return t},j.pairs=function(n){var t=[];for(var r in n)j.has(n,r)&&t.push([r,n[r]]);return t},j.invert=function(n){var t={};for(var r in n)j.has(n,r)&&(t[n[r]]=r);return t},j.functions=j.methods=function(n){var t=[];for(var r in n)j.isFunction(n[r])&&t.push(r);return t.sort()},j.extend=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]=t[r]}),n},j.pick=function(n){var t={},r=c.apply(e,o.call(arguments,1));return A(r,function(r){r in n&&(t[r]=n[r])}),t},j.omit=function(n){var t={},r=c.apply(e,o.call(arguments,1));for(var u in n)j.contains(r,u)||(t[u]=n[u]);return t},j.defaults=function(n){return A(o.call(arguments,1),function(t){if(t)for(var r in t)n[r]===void 0&&(n[r]=t[r])}),n},j.clone=function(n){return j.isObject(n)?j.isArray(n)?n.slice():j.extend({},n):n},j.tap=function(n,t){return t(n),n};var S=function(n,t,r,e){if(n===t)return 0!==n||1/n==1/t;if(null==n||null==t)return n===t;n instanceof j&&(n=n._wrapped),t instanceof j&&(t=t._wrapped);var u=l.call(n);if(u!=l.call(t))return!1;switch(u){case"[object String]":return n==String(t);case"[object Number]":return n!=+n?t!=+t:0==n?1/n==1/t:n==+t;case"[object Date]":case"[object Boolean]":return+n==+t;case"[object RegExp]":return n.source==t.source&&n.global==t.global&&n.multiline==t.multiline&&n.ignoreCase==t.ignoreCase}if("object"!=typeof n||"object"!=typeof t)return!1;for(var i=r.length;i--;)if(r[i]==n)return e[i]==t;var a=n.constructor,o=t.constructor;if(a!==o&&!(j.isFunction(a)&&a instanceof a&&j.isFunction(o)&&o instanceof o))return!1;r.push(n),e.push(t);var c=0,f=!0;if("[object Array]"==u){if(c=n.length,f=c==t.length)for(;c--&&(f=S(n[c],t[c],r,e)););}else{for(var s in n)if(j.has(n,s)&&(c++,!(f=j.has(t,s)&&S(n[s],t[s],r,e))))break;if(f){for(s in t)if(j.has(t,s)&&!c--)break;f=!c}}return r.pop(),e.pop(),f};j.isEqual=function(n,t){return S(n,t,[],[])},j.isEmpty=function(n){if(null==n)return!0;if(j.isArray(n)||j.isString(n))return 0===n.length;for(var t in n)if(j.has(n,t))return!1;return!0},j.isElement=function(n){return!(!n||1!==n.nodeType)},j.isArray=x||function(n){return"[object Array]"==l.call(n)},j.isObject=function(n){return n===Object(n)},A(["Arguments","Function","String","Number","Date","RegExp"],function(n){j["is"+n]=function(t){return l.call(t)=="[object "+n+"]"}}),j.isArguments(arguments)||(j.isArguments=function(n){return!(!n||!j.has(n,"callee"))}),"function"!=typeof/./&&(j.isFunction=function(n){return"function"==typeof n}),j.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},j.isNaN=function(n){return j.isNumber(n)&&n!=+n},j.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"==l.call(n)},j.isNull=function(n){return null===n},j.isUndefined=function(n){return n===void 0},j.has=function(n,t){return f.call(n,t)},j.noConflict=function(){return n._=t,this},j.identity=function(n){return n},j.times=function(n,t,r){for(var e=Array(Math.max(0,n)),u=0;n>u;u++)e[u]=t.call(r,u);return e},j.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))};var I={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","/":"&#x2F;"}};I.unescape=j.invert(I.escape);var T={escape:new RegExp("["+j.keys(I.escape).join("")+"]","g"),unescape:new RegExp("("+j.keys(I.unescape).join("|")+")","g")};j.each(["escape","unescape"],function(n){j[n]=function(t){return null==t?"":(""+t).replace(T[n],function(t){return I[n][t]})}}),j.result=function(n,t){if(null==n)return void 0;var r=n[t];return j.isFunction(r)?r.call(n):r},j.mixin=function(n){A(j.functions(n),function(t){var r=j[t]=n[t];j.prototype[t]=function(){var n=[this._wrapped];return a.apply(n,arguments),z.call(this,r.apply(j,n))}})};var N=0;j.uniqueId=function(n){var t=++N+"";return n?n+t:t},j.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var q=/(.)^/,B={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\t|\u2028|\u2029/g;j.template=function(n,t,r){var e;r=j.defaults({},r,j.templateSettings);var u=new RegExp([(r.escape||q).source,(r.interpolate||q).source,(r.evaluate||q).source].join("|")+"|$","g"),i=0,a="__p+='";n.replace(u,function(t,r,e,u,o){return a+=n.slice(i,o).replace(D,function(n){return"\\"+B[n]}),r&&(a+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'"),e&&(a+="'+\n((__t=("+e+"))==null?'':__t)+\n'"),u&&(a+="';\n"+u+"\n__p+='"),i=o+t.length,t}),a+="';\n",r.variable||(a="with(obj||{}){\n"+a+"}\n"),a="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+a+"return __p;\n";try{e=new Function(r.variable||"obj","_",a)}catch(o){throw o.source=a,o}if(t)return e(t,j);var c=function(n){return e.call(this,n,j)};return c.source="function("+(r.variable||"obj")+"){\n"+a+"}",c},j.chain=function(n){return j(n).chain()};var z=function(n){return this._chain?j(n).chain():n};j.mixin(j),A(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=e[n];j.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!=n&&"splice"!=n||0!==r.length||delete r[0],z.call(this,r)}}),A(["concat","join","slice"],function(n){var t=e[n];j.prototype[n]=function(){return z.call(this,t.apply(this._wrapped,arguments))}}),j.extend(j.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}})}.call(this);
//# sourceMappingURL=underscore-min.map
/*! gridster.js - v0.1.0 - 2013-06-14
 * http://gridster.net/
 * Copyright (c) 2013 ducksboard; Licensed MIT */

;
(function($, window, document, undefined)
{
	/**
	 * Creates objects with coordinates (x1, y1, x2, y2, cx, cy, width, height)
	 * to simulate DOM elements on the screen.
	 * Coords is used by Gridster to create a faux grid with any DOM element can
	 * collide.
	 *
	 * @class Coords
	 * @param {HTMLElement|Object} obj The jQuery HTMLElement or a object with: left,
	 * top, width and height properties.
	 * @return {Object} Coords instance.
	 * @constructor
	 */
	function Coords(obj)
	{
		if(obj[0] && $.isPlainObject(obj[0]))
		{
			this.data = obj[0];
		}
		else
		{
			this.el = obj;
		}

		this.isCoords = true;
		this.coords = {};
		this.init();
		return this;
	}


	var fn = Coords.prototype;


	fn.init = function()
	{
		this.set();
		this.original_coords = this.get();
	};


	fn.set = function(update, not_update_offsets)
	{
		var el = this.el;

		if(el && !update)
		{
			this.data = el.offset();
			this.data.width = el.width();
			this.data.height = el.height();
		}

		if(el && update && !not_update_offsets)
		{
			var offset = el.offset();
			this.data.top = offset.top;
			this.data.left = offset.left;
		}

		var d = this.data;

		this.coords.x1 = d.left;
		this.coords.y1 = d.top;
		this.coords.x2 = d.left + d.width;
		this.coords.y2 = d.top + d.height;
		this.coords.cx = d.left + (d.width / 2);
		this.coords.cy = d.top + (d.height / 2);
		this.coords.width = d.width;
		this.coords.height = d.height;
		this.coords.el = el || false;

		return this;
	};


	fn.update = function(data)
	{
		if(!data && !this.el)
		{
			return this;
		}

		if(data)
		{
			var new_data = $.extend({}, this.data, data);
			this.data = new_data;
			return this.set(true, true);
		}

		this.set(true);
		return this;
	};


	fn.get = function()
	{
		return this.coords;
	};


	//jQuery adapter
	$.fn.coords = function()
	{
		if(this.data('coords'))
		{
			return this.data('coords');
		}

		var ins = new Coords(this, arguments[0]);
		this.data('coords', ins);
		return ins;
	};

}(jQuery, window, document));

;
(function($, window, document, undefined)
{

	var defaults = {
		colliders_context: document.body
		// ,on_overlap: function(collider_data){},
		// on_overlap_start : function(collider_data){},
		// on_overlap_stop : function(collider_data){}
	};


	/**
	 * Detects collisions between a DOM element against other DOM elements or
	 * Coords objects.
	 *
	 * @class Collision
	 * @uses Coords
	 * @param {HTMLElement} el The jQuery wrapped HTMLElement.
	 * @param {HTMLElement|Array} colliders Can be a jQuery collection
	 *  of HTMLElements or an Array of Coords instances.
	 * @param {Object} [options] An Object with all options you want to
	 *        overwrite:
	 *   @param {Function} [options.on_overlap_start] Executes a function the first
	 *    time each `collider ` is overlapped.
	 *   @param {Function} [options.on_overlap_stop] Executes a function when a
	 *    `collider` is no longer collided.
	 *   @param {Function} [options.on_overlap] Executes a function when the
	 * mouse is moved during the collision.
	 * @return {Object} Collision instance.
	 * @constructor
	 */
	function Collision(el, colliders, options)
	{
		this.options = $.extend(defaults, options);
		this.$element = el;
		this.last_colliders = [];
		this.last_colliders_coords = [];
		if(typeof colliders === 'string' || colliders instanceof jQuery)
		{
			this.$colliders = $(colliders, this.options.colliders_context).not(this.$element);
		}
		else
		{
			this.colliders = $(colliders);
		}

		this.init();
	}


	var fn = Collision.prototype;


	fn.init = function()
	{
		this.find_collisions();
	};


	fn.overlaps = function(a, b)
	{
		var x = false;
		var y = false;

		if((b.x1 >= a.x1 && b.x1 <= a.x2) || (b.x2 >= a.x1 && b.x2 <= a.x2) || (a.x1 >= b.x1 && a.x2 <= b.x2))
		{
			x = true;
		}

		if((b.y1 >= a.y1 && b.y1 <= a.y2) || (b.y2 >= a.y1 && b.y2 <= a.y2) || (a.y1 >= b.y1 && a.y2 <= b.y2))
		{
			y = true;
		}

		return (x && y);
	};


	fn.detect_overlapping_region = function(a, b)
	{
		var regionX = '';
		var regionY = '';

		if(a.y1 > b.cy && a.y1 < b.y2)
		{
			regionX = 'N';
		}
		if(a.y2 > b.y1 && a.y2 < b.cy)
		{
			regionX = 'S';
		}
		if(a.x1 > b.cx && a.x1 < b.x2)
		{
			regionY = 'W';
		}
		if(a.x2 > b.x1 && a.x2 < b.cx)
		{
			regionY = 'E';
		}

		return (regionX + regionY) || 'C';
	};


	fn.calculate_overlapped_area_coords = function(a, b)
	{
		var x1 = Math.max(a.x1, b.x1);
		var y1 = Math.max(a.y1, b.y1);
		var x2 = Math.min(a.x2, b.x2);
		var y2 = Math.min(a.y2, b.y2);

		return $({
			left  : x1,
			top   : y1,
			width : (x2 - x1),
			height: (y2 - y1)
		}).coords().get();
	};


	fn.calculate_overlapped_area = function(coords)
	{
		return (coords.width * coords.height);
	};


	fn.manage_colliders_start_stop = function(new_colliders_coords, start_callback, stop_callback)
	{
		var last = this.last_colliders_coords;

		for(var i = 0, il = last.length; i < il; i++)
		{
			if($.inArray(last[i], new_colliders_coords) === -1)
			{
				start_callback.call(this, last[i]);
			}
		}

		for(var j = 0, jl = new_colliders_coords.length; j < jl; j++)
		{
			if($.inArray(new_colliders_coords[j], last) === -1)
			{
				stop_callback.call(this, new_colliders_coords[j]);
			}

		}
	};


	fn.find_collisions = function(player_data_coords)
	{
		var self = this;
		var colliders_coords = [];
		var colliders_data = [];
		var $colliders = (this.colliders || this.$colliders);
		var count = $colliders.length;
		var player_coords = self.$element.coords().update(player_data_coords || false).get();

		while(count--)
		{
			var $collider = self.$colliders ? $($colliders[count]) : $colliders[count];
			var $collider_coords_ins = ($collider.isCoords) ? $collider : $collider.coords();
			var collider_coords = $collider_coords_ins.get();
			var overlaps = self.overlaps(player_coords, collider_coords);

			if(!overlaps)
			{
				continue;
			}

			var region = self.detect_overlapping_region(player_coords, collider_coords);

			//todo: make this an option
			if(region === 'C')
			{
				var area_coords = self.calculate_overlapped_area_coords(player_coords, collider_coords);
				var area = self.calculate_overlapped_area(area_coords);
				var collider_data = {
					area         : area,
					area_coords  : area_coords,
					region       : region,
					coords       : collider_coords,
					player_coords: player_coords,
					el           : $collider
				};

				if(self.options.on_overlap)
				{
					self.options.on_overlap.call(this, collider_data);
				}
				colliders_coords.push($collider_coords_ins);
				colliders_data.push(collider_data);
			}
		}

		if(self.options.on_overlap_stop || self.options.on_overlap_start)
		{
			this.manage_colliders_start_stop(colliders_coords, self.options.on_overlap_start, self.options.on_overlap_stop);
		}

		this.last_colliders_coords = colliders_coords;

		return colliders_data;
	};


	fn.get_closest_colliders = function(player_data_coords)
	{
		var colliders = this.find_collisions(player_data_coords);

		colliders.sort(function(a, b)
		{
			/* if colliders are being overlapped by the "C" (center) region,
			 * we have to set a lower index in the array to which they are placed
			 * above in the grid. */
			if(a.region === 'C' && b.region === 'C')
			{
				if(a.coords.y1 < b.coords.y1 || a.coords.x1 < b.coords.x1)
				{
					return -1;
				}
				else
				{
					return 1;
				}
			}

			if(a.area < b.area)
			{
				return 1;
			}

			return 1;
		});
		return colliders;
	};


	//jQuery adapter
	$.fn.collision = function(collider, options)
	{
		return new Collision(this, collider, options);
	};


}(jQuery, window, document));

;
(function(window, undefined)
{
	/* Debounce and throttle functions taken from underscore.js */
	window.debounce = function(func, wait, immediate)
	{
		var timeout;
		return function()
		{
			var context = this, args = arguments;
			var later = function()
			{
				timeout = null;
				if(!immediate) func.apply(context, args);
			};
			if(immediate && !timeout) func.apply(context, args);
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
		};
	};


	window.throttle = function(func, wait)
	{
		var context, args, timeout, throttling, more, result;
		var whenDone = debounce(function()
			{
				more = throttling = false;
			}, wait);
		return function()
		{
			context = this;
			args = arguments;
			var later = function()
			{
				timeout = null;
				if(more) func.apply(context, args);
				whenDone();
			};
			if(!timeout) timeout = setTimeout(later, wait);
			if(throttling)
			{
				more = true;
			}
			else
			{
				result = func.apply(context, args);
			}
			whenDone();
			throttling = true;
			return result;
		};
	};

})(window);

;
(function($, window, document, undefined)
{

	var defaults = {
		items          : '.gs_w',
		distance       : 1,
		limit          : true,
		offset_left    : 0,
		autoscroll     : true,
		ignore_dragging: ['INPUT', 'TEXTAREA', 'SELECT', 'BUTTON'],
		handle         : null,
		container_width: 0  // 0 == auto
		// drag: function(e){},
		// start : function(e, ui){},
		// stop : function(e){}
	};

	var $window = $(window);
	var isTouch = !!('ontouchstart' in window);
	var pointer_events = {
		start: isTouch ? 'touchstart.gridster-draggable' : 'mousedown.gridster-draggable',
		move : isTouch ? 'touchmove.gridster-draggable' : 'mousemove.gridster-draggable',
		end  : isTouch ? 'touchend.gridster-draggable' : 'mouseup.gridster-draggable'
	};

	/**
	 * Basic drag implementation for DOM elements inside a container.
	 * Provide start/stop/drag callbacks.
	 *
	 * @class Draggable
	 * @param {HTMLElement} el The HTMLelement that contains all the panes
	 *  to be dragged.
	 * @param {Object} [options] An Object with all options you want to
	 *        overwrite:
	 *    @param {HTMLElement|String} [options.items] Define who will
	 *     be the draggable items. Can be a CSS Selector String or a
	 *     collection of HTMLElements.
	 *    @param {Number} [options.distance] Distance in pixels after mousedown
	 *     the mouse must move before dragging should start.
	 *    @param {Boolean} [options.limit] Constrains dragging to the width of
	 *     the container
	 *    @param {offset_left} [options.offset_left] Offset added to the item
	 *     that is being dragged.
	 *    @param {Number} [options.drag] Executes a callback when the mouse is
	 *     moved during the dragging.
	 *    @param {Number} [options.start] Executes a callback when the drag
	 *     starts.
	 *    @param {Number} [options.stop] Executes a callback when the drag stops.
	 * @return {Object} Returns `el`.
	 * @constructor
	 */
	function Draggable(el, options)
	{
		this.options = $.extend({}, defaults, options);
		this.$body = $(document.body);
		this.$container = $(el);
		this.$dragitems = $(this.options.items, this.$container);
		this.is_dragging = false;
		this.player_min_left = 0 + this.options.offset_left;
		this.init();
	}

	var fn = Draggable.prototype;

	fn.init = function()
	{
		this.calculate_positions();
		this.$container.css('position', 'relative');
		this.disabled = false;
		this.events();

		$(window).bind('resize.gridster-draggable', throttle($.proxy(this.calculate_positions, this), 200));
	};

	fn.setOptions = function(options)
	{
		this.options = $.extend(this.options, options);
	};

	fn.events = function()
	{
		this.$container.on('selectstart.gridster-draggable', $.proxy(this.on_select_start, this));

		this.$container.on(pointer_events.start, this.options.items, $.proxy(this.drag_handler, this));

		this.$body.on(pointer_events.end, $.proxy(function(e)
		{
			this.is_dragging = false;
			if(this.disabled)
			{
				return;
			}
			this.$body.off(pointer_events.move);
			if(this.drag_start)
			{
				this.on_dragstop(e);
			}
		}, this));
	};

	fn.get_actual_pos = function($el)
	{
		var pos = $el.position();
		return pos;
	};


	fn.get_mouse_pos = function(e)
	{
		if(isTouch)
		{
			var oe = e.originalEvent;
			e = oe.touches.length ? oe.touches[0] : oe.changedTouches[0];
		}

		return {
			left: e.clientX,
			top : e.clientY
		};
	};


	fn.get_offset = function(e)
	{
		e.preventDefault();
		var mouse_actual_pos = this.get_mouse_pos(e);
		var diff_x = Math.round(mouse_actual_pos.left - this.mouse_init_pos.left);
		var diff_y = Math.round(mouse_actual_pos.top - this.mouse_init_pos.top);

		var left = Math.round(this.el_init_offset.left + diff_x - this.baseX);
		var top = Math.round(this.el_init_offset.top + diff_y - this.baseY + this.scrollOffset);

		if(this.options.limit)
		{
			if(left > this.player_max_left)
			{
				left = this.player_max_left;
			}
			else if(left < this.player_min_left)
			{
				left = this.player_min_left;
			}
		}

		return {
			left      : left,
			top       : top,
			mouse_left: mouse_actual_pos.left,
			mouse_top : mouse_actual_pos.top
		};
	};


	fn.manage_scroll = function(offset)
	{
		/* scroll document */
		var nextScrollTop;
		var scrollTop = $window.scrollTop();
		var min_window_y = scrollTop;
		var max_window_y = min_window_y + this.window_height;

		var mouse_down_zone = max_window_y - 50;
		var mouse_up_zone = min_window_y + 50;

		var abs_mouse_left = offset.mouse_left;
		var abs_mouse_top = min_window_y + offset.mouse_top;

		var max_player_y = (this.doc_height - this.window_height + this.player_height);

		if(abs_mouse_top >= mouse_down_zone)
		{
			nextScrollTop = scrollTop + 30;
			if(nextScrollTop < max_player_y)
			{
				$window.scrollTop(nextScrollTop);
				this.scrollOffset = this.scrollOffset + 30;
			}
		}

		if(abs_mouse_top <= mouse_up_zone)
		{
			nextScrollTop = scrollTop - 30;
			if(nextScrollTop > 0)
			{
				$window.scrollTop(nextScrollTop);
				this.scrollOffset = this.scrollOffset - 30;
			}
		}
	};


	fn.calculate_positions = function(e)
	{
		this.window_height = $window.height();
	};


	fn.drag_handler = function(e)
	{
		var node = e.target.nodeName;
		if(this.disabled || e.which !== 1 && !isTouch)
		{
			return;
		}

		if(this.ignore_drag(e))
		{
			return;
		}

		var self = this;
		var first = true;
		this.$player = $(e.currentTarget);

		this.el_init_pos = this.get_actual_pos(this.$player);
		this.mouse_init_pos = this.get_mouse_pos(e);
		this.offsetY = this.mouse_init_pos.top - this.el_init_pos.top;

		this.$body.on(pointer_events.move, function(mme)
		{
			var mouse_actual_pos = self.get_mouse_pos(mme);
			var diff_x = Math.abs(mouse_actual_pos.left - self.mouse_init_pos.left);
			var diff_y = Math.abs(mouse_actual_pos.top - self.mouse_init_pos.top);
			if(!(diff_x > self.options.distance || diff_y > self.options.distance))
			{
				return false;
			}

			if(first)
			{
				first = false;
				self.on_dragstart.call(self, mme);
				return false;
			}

			if(self.is_dragging === true)
			{
				self.on_dragmove.call(self, mme);
			}

			return false;
		});

		if(!isTouch)
		{
			return false;
		}
	};


	fn.on_dragstart = function(e)
	{
		e.preventDefault();
		this.drag_start = true;
		this.is_dragging = true;
		var offset = this.$container.offset();
		this.baseX = Math.round(offset.left);
		this.baseY = Math.round(offset.top);
		this.doc_height = $(document).height();

		if(this.options.helper === 'clone')
		{
			this.$helper = this.$player.clone().appendTo(this.$container).addClass('helper');
			this.helper = true;
		}
		else
		{
			this.helper = false;
		}
		this.scrollOffset = 0;
		this.el_init_offset = this.$player.offset();
		this.player_width = this.$player.width();
		this.player_height = this.$player.height();

		var container_width = this.options.container_width || this.$container.width();
		this.player_max_left = (container_width - this.player_width + this.options.offset_left);

		if(this.options.start)
		{
			this.options.start.call(this.$player, e, {
				helper: this.helper ? this.$helper : this.$player
			});
		}
		return false;
	};


	fn.on_dragmove = function(e)
	{
		var offset = this.get_offset(e);

		this.options.autoscroll && this.manage_scroll(offset);

		(this.helper ? this.$helper : this.$player).css({
			'position': 'absolute',
			'left'    : offset.left,
			'top'     : offset.top
		});

		var ui = {
			'position': {
				'left': offset.left,
				'top' : offset.top
			}
		};

		if(this.options.drag)
		{
			this.options.drag.call(this.$player, e, ui);
		}
		return false;
	};


	fn.on_dragstop = function(e)
	{
		var offset = this.get_offset(e);
		this.drag_start = false;

		var ui = {
			'position': {
				'left': offset.left,
				'top' : offset.top
			}
		};

		if(this.options.stop)
		{
			this.options.stop.call(this.$player, e, ui);
		}

		if(this.helper)
		{
			this.$helper.remove();
		}

		return false;
	};

	fn.on_select_start = function(e)
	{
		if(this.disabled)
		{
			return;
		}

		if(this.ignore_drag(e))
		{
			return;
		}

		return false;
	};

	fn.enable = function()
	{
		this.disabled = false;
	};

	fn.disable = function()
	{
		this.disabled = true;
	};


	fn.destroy = function()
	{
		this.disable();

		this.$container.off('.gridster-draggable');
		this.$body.off('.gridster-draggable');
		$(window).off('.gridster-draggable');

		$.removeData(this.$container, 'drag');
	};

	fn.ignore_drag = function(event)
	{
		if(this.options.handle)
		{
			return !$(event.target).is(this.options.handle);
		}

		return $.inArray(event.target.nodeName, this.options.ignore_dragging) >= 0;
	};

	//jQuery adapter
	$.fn.drag = function(options)
	{
		return this.each(function()
		{
			if(!$.data(this, 'drag'))
			{
				$.data(this, 'drag', new Draggable(this, options));
			}
			else
			{
				$.data(this, 'drag').setOptions(options);
			}
		});
	};


}(jQuery, window, document));

;
(function($, window, document, undefined)
{

	var defaults = {
		namespace               : '',
		widget_selector         : 'li',
		widget_margins          : [10, 10],
		widget_base_dimensions  : [400, 225],
		extra_rows              : 0,
		extra_cols              : 0,
		min_cols                : 1,
		max_cols                : null,
		min_rows                : 15,
		max_size_x              : 6,
		autogenerate_stylesheet : true,
		avoid_overlapped_widgets: true,
		serialize_params        : function($w, wgd)
		{
			return {
				col   : wgd.col,
				row   : wgd.row,
				size_x: wgd.size_x,
				size_y: wgd.size_y
			};
		},
		collision               : {},
		draggable               : {
			distance: 4
		}
	};

	/**
	 * @class Gridster
	 * @uses Draggable
	 * @uses Collision
	 * @param {HTMLElement} el The HTMLelement that contains all the panes.
	 * @param {Object} [options] An Object with all options you want to
	 *        overwrite:
	 *    @param {HTMLElement|String} [options.widget_selector] Define who will
	 *     be the draggable panes. Can be a CSS Selector String or a
	 *     collection of HTMLElements
	 *    @param {Array} [options.widget_margins] Margin between panes.
	 *     The first index for the horizontal margin (left, right) and
	 *     the second for the vertical margin (top, bottom).
	 *    @param {Array} [options.widget_base_dimensions] Base widget dimensions
	 *     in pixels. The first index for the width and the second for the
	 *     height.
	 *    @param {Number} [options.extra_cols] Add more columns in addition to
	 *     those that have been calculated.
	 *    @param {Number} [options.extra_rows] Add more rows in addition to
	 *     those that have been calculated.
	 *    @param {Number} [options.min_cols] The minimum required columns.
	 *    @param {Number} [options.max_cols] The maximum columns possible (set to null
	 *     for no maximum).
	 *    @param {Number} [options.min_rows] The minimum required rows.
	 *    @param {Number} [options.max_size_x] The maximum number of columns
	 *     that a widget can span.
	 *    @param {Boolean} [options.autogenerate_stylesheet] If true, all the
	 *     CSS required to position all panes in their respective columns
	 *     and rows will be generated automatically and injected to the
	 *     `<head>` of the document. You can set this to false, and write
	 *     your own CSS targeting rows and cols via data-attributes like so:
	 *     `[data-col="1"] { left: 10px; }`
	 *    @param {Boolean} [options.avoid_overlapped_widgets] Avoid that panes loaded
	 *     from the DOM can be overlapped. It is helpful if the positions were
	 *     bad stored in the database or if there was any conflict.
	 *    @param {Function} [options.serialize_params] Return the data you want
	 *     for each widget in the serialization. Two arguments are passed:
	 *     `$w`: the jQuery wrapped HTMLElement, and `wgd`: the grid
	 *     coords object (`col`, `row`, `size_x`, `size_y`).
	 *    @param {Object} [options.collision] An Object with all options for
	 *     Collision class you want to overwrite. See Collision docs for
	 *     more info.
	 *    @param {Object} [options.draggable] An Object with all options for
	 *     Draggable class you want to overwrite. See Draggable docs for more
	 *     info.
	 *
	 * @constructor
	 */
	function Gridster(el, options)
	{
		this.options = $.extend(true, defaults, options);
		this.$el = $(el);
		this.$wrapper = this.$el.parent();
		this.$widgets = this.$el.children(this.options.widget_selector).addClass('gs_w');
		this.panes = [];
		this.$changed = $([]);
		this.wrapper_width = this.$wrapper.width();
		this.min_widget_width = (this.options.widget_margins[0] * 2) + this.options.widget_base_dimensions[0];
		this.min_widget_height = (this.options.widget_margins[1] * 2) + this.options.widget_base_dimensions[1];

		this.$style_tags = $([]);

		this.init();
	}

	Gridster.generated_stylesheets = [];

	var fn = Gridster.prototype;

	fn.init = function()
	{
		this.generate_grid_and_stylesheet();
		this.get_widgets_from_DOM();
		this.set_dom_grid_height();
		this.$wrapper.addClass('ready');
		this.draggable();

		$(window).bind('resize.gridster', throttle($.proxy(this.recalculate_faux_grid, this), 200));
	};


	/**
	 * Disables dragging.
	 *
	 * @method disable
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.disable = function()
	{
		this.$wrapper.find('.player-revert').removeClass('player-revert');
		this.drag_api.disable();
		return this;
	};


	/**
	 * Enables dragging.
	 *
	 * @method enable
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.enable = function()
	{
		this.drag_api.enable();
		return this;
	};


	/**
	 * Add a new widget to the grid.
	 *
	 * @method add_widget
	 * @param {String|HTMLElement} html The string representing the HTML of the widget
	 *  or the HTMLElement.
	 * @param {Number} [size_x] The nº of rows the widget occupies horizontally.
	 * @param {Number} [size_y] The nº of columns the widget occupies vertically.
	 * @param {Number} [col] The column the widget should start in.
	 * @param {Number} [row] The row the widget should start in.
	 * @return {HTMLElement} Returns the jQuery wrapped HTMLElement representing.
	 *  the widget that was just created.
	 */
	fn.add_widget = function(html, size_x, size_y, col, row)
	{
		var pos;
		size_x || (size_x = 1);
		size_y || (size_y = 1);

		if(!col & !row)
		{
			pos = this.next_position(size_x, size_y);
		}
		else
		{
			pos = {
				col: col,
				row: row
			};

			this.empty_cells(col, row, size_x, size_y);
		}

		var $w = $(html).attr({
			'data-col'  : pos.col,
			'data-row'  : pos.row,
			'data-sizex': size_x,
			'data-sizey': size_y
		}).addClass('gs_w').appendTo(this.$el).hide();

		this.$widgets = this.$widgets.add($w);

		this.register_widget($w);

		this.add_faux_rows(pos.size_y);
		//this.add_faux_cols(pos.size_x);

		this.set_dom_grid_height();

		return $w.fadeIn();
	};


	/**
	 * Change the size of a widget.
	 *
	 * @method resize_widget
	 * @param {HTMLElement} $widget The jQuery wrapped HTMLElement
	 *  representing the widget.
	 * @param {Number} size_x The number of columns that will occupy the widget.
	 * @param {Number} size_y The number of rows that will occupy the widget.
	 * @param {Function} callback Function executed when the widget is removed.
	 * @return {HTMLElement} Returns $widget.
	 */
	fn.resize_widget = function($widget, size_x, size_y, callback)
	{
		var wgd = $widget.coords().grid;
		size_x || (size_x = wgd.size_x);
		size_y || (size_y = wgd.size_y);

		if(size_x > this.cols)
		{
			size_x = this.cols;
		}

		var old_cells_occupied = this.get_cells_occupied(wgd);
		var old_size_x = wgd.size_x;
		var old_size_y = wgd.size_y;
		var old_col = wgd.col;
		var new_col = old_col;
		var wider = size_x > old_size_x;
		var taller = size_y > old_size_y;

		if(old_col + size_x - 1 > this.cols)
		{
			var diff = old_col + (size_x - 1) - this.cols;
			var c = old_col - diff;
			new_col = Math.max(1, c);
		}

		var new_grid_data = {
			col   : new_col,
			row   : wgd.row,
			size_x: size_x,
			size_y: size_y
		};

		var new_cells_occupied = this.get_cells_occupied(new_grid_data);

		var empty_cols = [];
		$.each(old_cells_occupied.cols, function(i, col)
		{
			if($.inArray(col, new_cells_occupied.cols) === -1)
			{
				empty_cols.push(col);
			}
		});

		var occupied_cols = [];
		$.each(new_cells_occupied.cols, function(i, col)
		{
			if($.inArray(col, old_cells_occupied.cols) === -1)
			{
				occupied_cols.push(col);
			}
		});

		var empty_rows = [];
		$.each(old_cells_occupied.rows, function(i, row)
		{
			if($.inArray(row, new_cells_occupied.rows) === -1)
			{
				empty_rows.push(row);
			}
		});

		var occupied_rows = [];
		$.each(new_cells_occupied.rows, function(i, row)
		{
			if($.inArray(row, old_cells_occupied.rows) === -1)
			{
				occupied_rows.push(row);
			}
		});

		this.remove_from_gridmap(wgd);

		if(occupied_cols.length)
		{
			var cols_to_empty = [
				new_col, wgd.row, size_x, Math.min(old_size_y, size_y), $widget
			];
			this.empty_cells.apply(this, cols_to_empty);
		}

		if(occupied_rows.length)
		{
			var rows_to_empty = [new_col, wgd.row, size_x, size_y, $widget];
			this.empty_cells.apply(this, rows_to_empty);
		}

		wgd.col = new_col;
		wgd.size_x = size_x;
		wgd.size_y = size_y;
		this.add_to_gridmap(new_grid_data, $widget);

		//update coords instance attributes
		$widget.data('coords').update({
			width : (size_x * this.options.widget_base_dimensions[0] + ((size_x - 1) * this.options.widget_margins[0]) * 2),
			height: (size_y * this.options.widget_base_dimensions[1] + ((size_y - 1) * this.options.widget_margins[1]) * 2)
		});

		if(size_y > old_size_y)
		{
			this.add_faux_rows(size_y - old_size_y);
		}

		if(size_x > old_size_x)
		{
			this.add_faux_cols(size_x - old_size_x);
		}

		$widget.attr({
			'data-col'  : new_col,
			'data-sizex': size_x,
			'data-sizey': size_y
		});

		if(empty_cols.length)
		{
			var cols_to_remove_holes = [
				empty_cols[0], wgd.row, empty_cols.length, Math.min(old_size_y, size_y), $widget
			];

			this.remove_empty_cells.apply(this, cols_to_remove_holes);
		}

		if(empty_rows.length)
		{
			var rows_to_remove_holes = [
				new_col, wgd.row, size_x, size_y, $widget
			];
			this.remove_empty_cells.apply(this, rows_to_remove_holes);
		}

		if(callback)
		{
			callback.call(this, size_x, size_y);
		}

		return $widget;
	};

	/**
	 * Move down panes in cells represented by the arguments col, row, size_x,
	 * size_y
	 *
	 * @method empty_cells
	 * @param {Number} col The column where the group of cells begin.
	 * @param {Number} row The row where the group of cells begin.
	 * @param {Number} size_x The number of columns that the group of cells
	 * occupy.
	 * @param {Number} size_y The number of rows that the group of cells
	 * occupy.
	 * @param {HTMLElement} $exclude Exclude panes from being moved.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.empty_cells = function(col, row, size_x, size_y, $exclude)
	{
		var $nexts = this.widgets_below({
			col   : col,
			row   : row - size_y,
			size_x: size_x,
			size_y: size_y
		});

		$nexts.not($exclude).each($.proxy(function(i, w)
		{
			var wgd = $(w).coords().grid;
			if(!(wgd.row <= (row + size_y - 1)))
			{
				return;
			}
			var diff = (row + size_y) - wgd.row;
			this.move_widget_down($(w), diff);
		}, this));

		this.set_dom_grid_height();

		return this;
	};


	/**
	 * Move up panes below cells represented by the arguments col, row, size_x,
	 * size_y.
	 *
	 * @method remove_empty_cells
	 * @param {Number} col The column where the group of cells begin.
	 * @param {Number} row The row where the group of cells begin.
	 * @param {Number} size_x The number of columns that the group of cells
	 * occupy.
	 * @param {Number} size_y The number of rows that the group of cells
	 * occupy.
	 * @param {HTMLElement} exclude Exclude panes from being moved.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.remove_empty_cells = function(col, row, size_x, size_y, exclude)
	{
		var $nexts = this.widgets_below({
			col   : col,
			row   : row,
			size_x: size_x,
			size_y: size_y
		});

		$nexts.not(exclude).each($.proxy(function(i, widget)
		{
			this.move_widget_up($(widget), size_y);
		}, this));

		this.set_dom_grid_height();

		return this;
	};


	/**
	 * Get the most left column below to add a new widget.
	 *
	 * @method next_position
	 * @param {Number} size_x The nº of rows the widget occupies horizontally.
	 * @param {Number} size_y The nº of columns the widget occupies vertically.
	 * @return {Object} Returns a grid coords object representing the future
	 *  widget coords.
	 */
	fn.next_position = function(size_x, size_y)
	{
		size_x || (size_x = 1);
		size_y || (size_y = 1);
		var ga = this.gridmap;
		var cols_l = ga.length;
		var valid_pos = [];
		var rows_l;

		for(var c = 1; c < cols_l; c++)
		{
			rows_l = ga[c].length;
			for(var r = 1; r <= rows_l; r++)
			{
				var can_move_to = this.can_move_to({
					size_x: size_x,
					size_y: size_y
				}, c, r);

				if(can_move_to)
				{
					valid_pos.push({
						col   : c,
						row   : r,
						size_y: size_y,
						size_x: size_x
					});
				}
			}
		}

		if(valid_pos.length)
		{
			return this.sort_by_row_and_col_asc(valid_pos)[0];
		}
		return false;
	};


	/**
	 * Remove a widget from the grid.
	 *
	 * @method remove_widget
	 * @param {HTMLElement} el The jQuery wrapped HTMLElement you want to remove.
	 * @param {Boolean|Function} silent If true, panes below the removed one
	 * will not move up. If a Function is passed it will be used as callback.
	 * @param {Function} callback Function executed when the widget is removed.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.remove_widget = function(el, silent, callback)
	{
		var $el = el instanceof jQuery ? el : $(el);
		var wgd = $el.coords().grid;

		// if silent is a function assume it's a callback
		if($.isFunction(silent))
		{
			callback = silent;
			silent = false;
		}

		this.cells_occupied_by_placeholder = {};
		this.$widgets = this.$widgets.not($el);

		var $nexts = this.widgets_below($el);

		this.remove_from_gridmap(wgd);

		$el.fadeOut($.proxy(function()
		{
			$el.remove();

			if(!silent)
			{
				$nexts.each($.proxy(function(i, widget)
				{
					this.move_widget_up($(widget), wgd.size_y);
				}, this));
			}

			this.set_dom_grid_height();

			if(callback)
			{
				callback.call(this, el);
			}
		}, this));
	};


	/**
	 * Remove all panes from the grid.
	 *
	 * @method remove_all_widgets
	 * @param {Function} callback Function executed for each widget removed.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.remove_all_widgets = function(callback)
	{
		this.$widgets.each($.proxy(function(i, el)
		{
			this.remove_widget(el, true, callback);
		}, this));

		return this;
	};


	/**
	 * Returns a serialized array of the panes in the grid.
	 *
	 * @method serialize
	 * @param {HTMLElement} [$widgets] The collection of jQuery wrapped
	 *  HTMLElements you want to serialize. If no argument is passed all panes
	 *  will be serialized.
	 * @return {Array} Returns an Array of Objects with the data specified in
	 *  the serialize_params option.
	 */
	fn.serialize = function($widgets)
	{
		$widgets || ($widgets = this.$widgets);
		var result = [];
		$widgets.each($.proxy(function(i, widget)
		{
			result.push(this.options.serialize_params($(widget), $(widget).coords().grid));
		}, this));

		return result;
	};


	/**
	 * Returns a serialized array of the panes that have changed their
	 *  position.
	 *
	 * @method serialize_changed
	 * @return {Array} Returns an Array of Objects with the data specified in
	 *  the serialize_params option.
	 */
	fn.serialize_changed = function()
	{
		return this.serialize(this.$changed);
	};


	/**
	 * Creates the grid coords object representing the widget a add it to the
	 * mapped array of positions.
	 *
	 * @method register_widget
	 * @return {Array} Returns the instance of the Gridster class.
	 */
	fn.register_widget = function($el)
	{

		var wgd = {
			'col'   : parseInt($el.attr('data-col'), 10),
			'row'   : parseInt($el.attr('data-row'), 10),
			'size_x': parseInt($el.attr('data-sizex'), 10),
			'size_y': parseInt($el.attr('data-sizey'), 10),
			'el'    : $el
		};

		if(this.options.avoid_overlapped_widgets && !this.can_move_to({size_x: wgd.size_x, size_y: wgd.size_y}, wgd.col, wgd.row))
		{
			wgd = this.next_position(wgd.size_x, wgd.size_y);
			wgd.el = $el;
			$el.attr({
				'data-col'  : wgd.col,
				'data-row'  : wgd.row,
				'data-sizex': wgd.size_x,
				'data-sizey': wgd.size_y
			});
		}

		// attach Coord object to player data-coord attribute
		$el.data('coords', $el.coords());

		// Extend Coord object with grid position info
		$el.data('coords').grid = wgd;

		this.add_to_gridmap(wgd, $el);

		return this;
	};


	/**
	 * Update in the mapped array of positions the value of cells represented by
	 * the grid coords object passed in the `grid_data` param.
	 *
	 * @param {Object} grid_data The grid coords object representing the cells
	 *  to update in the mapped array.
	 * @param {HTMLElement|Boolean} value Pass `false` or the jQuery wrapped
	 *  HTMLElement, depends if you want to delete an existing position or add
	 *  a new one.
	 * @method update_widget_position
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.update_widget_position = function(grid_data, value)
	{
		this.for_each_cell_occupied(grid_data, function(col, row)
		{
			if(!this.gridmap[col])
			{
				return this;
			}
			this.gridmap[col][row] = value;
		});
		return this;
	};


	/**
	 * Remove a widget from the mapped array of positions.
	 *
	 * @method remove_from_gridmap
	 * @param {Object} grid_data The grid coords object representing the cells
	 *  to update in the mapped array.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.remove_from_gridmap = function(grid_data)
	{
		return this.update_widget_position(grid_data, false);
	};


	/**
	 * Add a widget to the mapped array of positions.
	 *
	 * @method add_to_gridmap
	 * @param {Object} grid_data The grid coords object representing the cells
	 *  to update in the mapped array.
	 * @param {HTMLElement|Boolean} value The value to set in the specified
	 *  position .
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.add_to_gridmap = function(grid_data, value)
	{
		this.update_widget_position(grid_data, value || grid_data.el);

		if(grid_data.el)
		{
			var $widgets = this.widgets_below(grid_data.el);
			$widgets.each($.proxy(function(i, widget)
			{
				this.move_widget_up($(widget));
			}, this));
		}
	};


	/**
	 * Make panes draggable.
	 *
	 * @uses Draggable
	 * @method draggable
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.draggable = function()
	{
		var self = this;
		var draggable_options = $.extend(true, {}, this.options.draggable, {
			offset_left    : this.options.widget_margins[0],
			container_width: this.container_width,
			start          : function(event, ui)
			{
				self.$widgets.filter('.player-revert').removeClass('player-revert');

				self.$player = $(this);
				self.$helper = self.options.draggable.helper === 'clone' ? $(ui.helper) : self.$player;
				self.helper = !self.$helper.is(self.$player);

				self.on_start_drag.call(self, event, ui);
				self.$el.trigger('gridster:dragstart');
			},
			stop           : function(event, ui)
			{
				self.on_stop_drag.call(self, event, ui);
				self.$el.trigger('gridster:dragstop');
			},
			drag           : throttle(function(event, ui)
			{
				self.on_drag.call(self, event, ui);
				self.$el.trigger('gridster:drag');
			}, 60)
		});

		this.drag_api = this.$el.drag(draggable_options).data('drag');
		return this;
	};


	/**
	 * This function is executed when the player begins to be dragged.
	 *
	 * @method on_start_drag
	 * @param {Event} event The original browser event
	 * @param {Object} ui A prepared ui object.
	 */
	fn.on_start_drag = function(event, ui)
	{

		this.$helper.add(this.$player).add(this.$wrapper).addClass('dragging');

		this.$player.addClass('player');
		this.player_grid_data = this.$player.coords().grid;
		this.placeholder_grid_data = $.extend({}, this.player_grid_data);

		//set new grid height along the dragging period
		this.$el.css('height', this.$el.height() + (this.player_grid_data.size_y * this.min_widget_height));

		var colliders = this.faux_grid;
		var coords = this.$player.data('coords').coords;

		this.cells_occupied_by_player = this.get_cells_occupied(this.player_grid_data);
		this.cells_occupied_by_placeholder = this.get_cells_occupied(this.placeholder_grid_data);

		this.last_cols = [];
		this.last_rows = [];


		// see jquery.collision.js
		this.collision_api = this.$helper.collision(colliders, this.options.collision);

		this.$preview_holder = $('<li />', {
			'class'   : 'preview-holder',
			'data-row': this.$player.attr('data-row'),
			'data-col': this.$player.attr('data-col'),
			css       : {
				width : coords.width,
				height: coords.height
			}
		}).appendTo(this.$el);

		if(this.options.draggable.start)
		{
			this.options.draggable.start.call(this, event, ui);
		}
	};


	/**
	 * This function is executed when the player is being dragged.
	 *
	 * @method on_drag
	 * @param {Event} event The original browser event
	 * @param {Object} ui A prepared ui object.
	 */
	fn.on_drag = function(event, ui)
	{
		//break if dragstop has been fired
		if(this.$player === null)
		{
			return false;
		}

		var abs_offset = {
			left: ui.position.left + this.baseX,
			top : ui.position.top + this.baseY
		};

		this.colliders_data = this.collision_api.get_closest_colliders(abs_offset);

		this.on_overlapped_column_change(this.on_start_overlapping_column, this.on_stop_overlapping_column);

		this.on_overlapped_row_change(this.on_start_overlapping_row, this.on_stop_overlapping_row);

		if(this.helper && this.$player)
		{
			this.$player.css({
				'left': ui.position.left,
				'top' : ui.position.top
			});
		}

		if(this.options.draggable.drag)
		{
			this.options.draggable.drag.call(this, event, ui);
		}
	};

	/**
	 * This function is executed when the player stops being dragged.
	 *
	 * @method on_stop_drag
	 * @param {Event} event The original browser event
	 * @param {Object} ui A prepared ui object.
	 */
	fn.on_stop_drag = function(event, ui)
	{
		this.$helper.add(this.$player).add(this.$wrapper).removeClass('dragging');

		ui.position.left = ui.position.left + this.baseX;
		ui.position.top = ui.position.top + this.baseY;
		this.colliders_data = this.collision_api.get_closest_colliders(ui.position);

		this.on_overlapped_column_change(this.on_start_overlapping_column, this.on_stop_overlapping_column);

		this.on_overlapped_row_change(this.on_start_overlapping_row, this.on_stop_overlapping_row);

		this.$player.addClass('player-revert').removeClass('player').attr({
				'data-col': this.placeholder_grid_data.col,
				'data-row': this.placeholder_grid_data.row
			}).css({
				'left': '',
				'top' : ''
			});

		this.$changed = this.$changed.add(this.$player);

		this.cells_occupied_by_player = this.get_cells_occupied(this.placeholder_grid_data);
		this.set_cells_player_occupies(this.placeholder_grid_data.col, this.placeholder_grid_data.row);

		this.$player.coords().grid.row = this.placeholder_grid_data.row;
		this.$player.coords().grid.col = this.placeholder_grid_data.col;

		if(this.options.draggable.stop)
		{
			this.options.draggable.stop.call(this, event, ui);
		}

		this.$preview_holder.remove();

		this.$player = null;
		this.$helper = null;
		this.placeholder_grid_data = {};
		this.player_grid_data = {};
		this.cells_occupied_by_placeholder = {};
		this.cells_occupied_by_player = {};

		this.set_dom_grid_height();
	};


	/**
	 * Executes the callbacks passed as arguments when a column begins to be
	 * overlapped or stops being overlapped.
	 *
	 * @param {Function} start_callback Function executed when a new column
	 *  begins to be overlapped. The column is passed as first argument.
	 * @param {Function} stop_callback Function executed when a column stops
	 *  being overlapped. The column is passed as first argument.
	 * @method on_overlapped_column_change
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.on_overlapped_column_change = function(start_callback, stop_callback)
	{
		if(!this.colliders_data.length)
		{
			return this;
		}
		var cols = this.get_targeted_columns(this.colliders_data[0].el.data.col);

		var last_n_cols = this.last_cols.length;
		var n_cols = cols.length;
		var i;

		for(i = 0; i < n_cols; i++)
		{
			if($.inArray(cols[i], this.last_cols) === -1)
			{
				(start_callback || $.noop).call(this, cols[i]);
			}
		}

		for(i = 0; i < last_n_cols; i++)
		{
			if($.inArray(this.last_cols[i], cols) === -1)
			{
				(stop_callback || $.noop).call(this, this.last_cols[i]);
			}
		}

		this.last_cols = cols;

		return this;
	};


	/**
	 * Executes the callbacks passed as arguments when a row starts to be
	 * overlapped or stops being overlapped.
	 *
	 * @param {Function} start_callback Function executed when a new row begins
	 *  to be overlapped. The row is passed as first argument.
	 * @param {Function} end_callback Function executed when a row stops being
	 *  overlapped. The row is passed as first argument.
	 * @method on_overlapped_row_change
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.on_overlapped_row_change = function(start_callback, end_callback)
	{
		if(!this.colliders_data.length)
		{
			return this;
		}
		var rows = this.get_targeted_rows(this.colliders_data[0].el.data.row);
		var last_n_rows = this.last_rows.length;
		var n_rows = rows.length;
		var i;

		for(i = 0; i < n_rows; i++)
		{
			if($.inArray(rows[i], this.last_rows) === -1)
			{
				(start_callback || $.noop).call(this, rows[i]);
			}
		}

		for(i = 0; i < last_n_rows; i++)
		{
			if($.inArray(this.last_rows[i], rows) === -1)
			{
				(end_callback || $.noop).call(this, this.last_rows[i]);
			}
		}

		this.last_rows = rows;
	};


	/**
	 * Sets the current position of the player
	 *
	 * @param {Number} col
	 * @param {Number} row
	 * @param {Boolean} no_player
	 * @method set_player
	 * @return {object}
	 */
	fn.set_player = function(col, row, no_player)
	{
		var self = this;
		if(!no_player)
		{
			this.empty_cells_player_occupies();
		}
		var cell = !no_player ? self.colliders_data[0].el.data : {col: col};
		var to_col = cell.col;
		var to_row = row || cell.row;

		this.player_grid_data = {
			col   : to_col,
			row   : to_row,
			size_y: this.player_grid_data.size_y,
			size_x: this.player_grid_data.size_x
		};

		this.cells_occupied_by_player = this.get_cells_occupied(this.player_grid_data);

		var $overlapped_widgets = this.get_widgets_overlapped(this.player_grid_data);

		var constraints = this.widgets_constraints($overlapped_widgets);

		this.manage_movements(constraints.can_go_up, to_col, to_row);
		this.manage_movements(constraints.can_not_go_up, to_col, to_row);

		/* if there is not panes overlapping in the new player position,
		 * update the new placeholder position. */
		if(!$overlapped_widgets.length)
		{
			var pp = this.can_go_player_up(this.player_grid_data);
			if(pp !== false)
			{
				to_row = pp;
			}
			this.set_placeholder(to_col, to_row);
		}

		return {
			col: to_col,
			row: to_row
		};
	};


	/**
	 * See which of the panes in the $panes param collection can go to
	 * a upper row and which not.
	 *
	 * @method widgets_contraints
	 * @param {jQuery} $widgets A jQuery wrapped collection of
	 * HTMLElements.
	 * @return {object} Returns a literal Object with two keys: `can_go_up` &
	 * `can_not_go_up`. Each contains a set of HTMLElements.
	 */
	fn.widgets_constraints = function($widgets)
	{
		var $widgets_can_go_up = $([]);
		var $widgets_can_not_go_up;
		var wgd_can_go_up = [];
		var wgd_can_not_go_up = [];

		$widgets.each($.proxy(function(i, w)
		{
			var $w = $(w);
			var wgd = $w.coords().grid;
			if(this.can_go_widget_up(wgd))
			{
				$widgets_can_go_up = $widgets_can_go_up.add($w);
				wgd_can_go_up.push(wgd);
			}
			else
			{
				wgd_can_not_go_up.push(wgd);
			}
		}, this));

		$widgets_can_not_go_up = $widgets.not($widgets_can_go_up);

		return {
			can_go_up    : this.sort_by_row_asc(wgd_can_go_up),
			can_not_go_up: this.sort_by_row_desc(wgd_can_not_go_up)
		};
	};


	/**
	 * Sorts an Array of grid coords objects (representing the grid coords of
	 * each widget) in ascending way.
	 *
	 * @method sort_by_row_asc
	 * @param {Array} widgets Array of grid coords objects
	 * @return {Array} Returns the array sorted.
	 */
	fn.sort_by_row_asc = function(widgets)
	{
		widgets = widgets.sort(function(a, b)
		{
			if(!a.row)
			{
				a = $(a).coords().grid;
				b = $(b).coords().grid;
			}

			if(a.row > b.row)
			{
				return 1;
			}
			return -1;
		});

		return widgets;
	};


	/**
	 * Sorts an Array of grid coords objects (representing the grid coords of
	 * each widget) placing first the empty cells upper left.
	 *
	 * @method sort_by_row_and_col_asc
	 * @param {Array} widgets Array of grid coords objects
	 * @return {Array} Returns the array sorted.
	 */
	fn.sort_by_row_and_col_asc = function(widgets)
	{
		widgets = widgets.sort(function(a, b)
		{
			if(a.row > b.row || a.row === b.row && a.col > b.col)
			{
				return 1;
			}
			return -1;
		});

		return widgets;
	};


	/**
	 * Sorts an Array of grid coords objects by column (representing the grid
	 * coords of each widget) in ascending way.
	 *
	 * @method sort_by_col_asc
	 * @param {Array} widgets Array of grid coords objects
	 * @return {Array} Returns the array sorted.
	 */
	fn.sort_by_col_asc = function(widgets)
	{
		widgets = widgets.sort(function(a, b)
		{
			if(a.col > b.col)
			{
				return 1;
			}
			return -1;
		});

		return widgets;
	};


	/**
	 * Sorts an Array of grid coords objects (representing the grid coords of
	 * each widget) in descending way.
	 *
	 * @method sort_by_row_desc
	 * @param {Array} widgets Array of grid coords objects
	 * @return {Array} Returns the array sorted.
	 */
	fn.sort_by_row_desc = function(widgets)
	{
		widgets = widgets.sort(function(a, b)
		{
			if(a.row + a.size_y < b.row + b.size_y)
			{
				return 1;
			}
			return -1;
		});
		return widgets;
	};


	/**
	 * Sorts an Array of grid coords objects (representing the grid coords of
	 * each widget) in descending way.
	 *
	 * @method manage_movements
	 * @param {jQuery} $widgets A jQuery collection of HTMLElements
	 *  representing the panes you want to move.
	 * @param {Number} to_col The column to which we want to move the panes.
	 * @param {Number} to_row The row to which we want to move the panes.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.manage_movements = function($widgets, to_col, to_row)
	{
		$.each($widgets, $.proxy(function(i, w)
		{
			var wgd = w;
			var $w = wgd.el;

			var can_go_widget_up = this.can_go_widget_up(wgd);

			if(can_go_widget_up)
			{
				//target CAN go up
				//so move widget up
				this.move_widget_to($w, can_go_widget_up);
				this.set_placeholder(to_col, can_go_widget_up + wgd.size_y);

			}
			else
			{
				//target can't go up
				var can_go_player_up = this.can_go_player_up(this.player_grid_data);

				if(!can_go_player_up)
				{
					// target can't go up
					// player cant't go up
					// so we need to move widget down to a position that dont
					// overlaps player
					var y = (to_row + this.player_grid_data.size_y) - wgd.row;

					this.move_widget_down($w, y);
					this.set_placeholder(to_col, to_row);
				}
			}
		}, this));

		return this;
	};

	/**
	 * Determines if there is a widget in the row and col given. Or if the
	 * HTMLElement passed as first argument is the player.
	 *
	 * @method is_player
	 * @param {Number|HTMLElement} col_or_el A jQuery wrapped collection of
	 * HTMLElements.
	 * @param {Number} [row] The column to which we want to move the panes.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_player = function(col_or_el, row)
	{
		if(row && !this.gridmap[col_or_el])
		{
			return false;
		}
		var $w = row ? this.gridmap[col_or_el][row] : col_or_el;
		return $w && ($w.is(this.$player) || $w.is(this.$helper));
	};


	/**
	 * Determines if the widget that is being dragged is currently over the row
	 * and col given.
	 *
	 * @method is_player_in
	 * @param {Number} col The column to check.
	 * @param {Number} row The row to check.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_player_in = function(col, row)
	{
		var c = this.cells_occupied_by_player || {};
		return $.inArray(col, c.cols) >= 0 && $.inArray(row, c.rows) >= 0;
	};


	/**
	 * Determines if the placeholder is currently over the row and col given.
	 *
	 * @method is_placeholder_in
	 * @param {Number} col The column to check.
	 * @param {Number} row The row to check.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_placeholder_in = function(col, row)
	{
		var c = this.cells_occupied_by_placeholder || {};
		return this.is_placeholder_in_col(col) && $.inArray(row, c.rows) >= 0;
	};


	/**
	 * Determines if the placeholder is currently over the column given.
	 *
	 * @method is_placeholder_in_col
	 * @param {Number} col The column to check.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_placeholder_in_col = function(col)
	{
		var c = this.cells_occupied_by_placeholder || [];
		return $.inArray(col, c.cols) >= 0;
	};


	/**
	 * Determines if the cell represented by col and row params is empty.
	 *
	 * @method is_empty
	 * @param {Number} col The column to check.
	 * @param {Number} row The row to check.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_empty = function(col, row)
	{
		if(typeof this.gridmap[col] !== 'undefined')
		{
			if(typeof this.gridmap[col][row] !== 'undefined' && this.gridmap[col][row] === false)
			{
				return true;
			}
			return false;
		}
		return true;
	};


	/**
	 * Determines if the cell represented by col and row params is occupied.
	 *
	 * @method is_occupied
	 * @param {Number} col The column to check.
	 * @param {Number} row The row to check.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_occupied = function(col, row)
	{
		if(!this.gridmap[col])
		{
			return false;
		}

		if(this.gridmap[col][row])
		{
			return true;
		}
		return false;
	};


	/**
	 * Determines if there is a widget in the cell represented by col/row params.
	 *
	 * @method is_widget
	 * @param {Number} col The column to check.
	 * @param {Number} row The row to check.
	 * @return {Boolean|HTMLElement} Returns false if there is no widget,
	 * else returns the jQuery HTMLElement
	 */
	fn.is_widget = function(col, row)
	{
		var cell = this.gridmap[col];
		if(!cell)
		{
			return false;
		}

		cell = cell[row];

		if(cell)
		{
			return cell;
		}

		return false;
	};


	/**
	 * Determines if there is a widget in the cell represented by col/row
	 * params and if this is under the widget that is being dragged.
	 *
	 * @method is_widget_under_player
	 * @param {Number} col The column to check.
	 * @param {Number} row The row to check.
	 * @return {Boolean} Returns true or false.
	 */
	fn.is_widget_under_player = function(col, row)
	{
		if(this.is_widget(col, row))
		{
			return this.is_player_in(col, row);
		}
		return false;
	};


	/**
	 * Get panes overlapping with the player or with the object passed
	 * representing the grid cells.
	 *
	 * @method get_widgets_under_player
	 * @return {HTMLElement} Returns a jQuery collection of HTMLElements
	 */
	fn.get_widgets_under_player = function(cells)
	{
		cells || (cells = this.cells_occupied_by_player || {cols: [], rows: []});
		var $widgets = $([]);

		$.each(cells.cols, $.proxy(function(i, col)
		{
			$.each(cells.rows, $.proxy(function(i, row)
			{
				if(this.is_widget(col, row))
				{
					$widgets = $widgets.add(this.gridmap[col][row]);
				}
			}, this));
		}, this));

		return $widgets;
	};


	/**
	 * Put placeholder at the row and column specified.
	 *
	 * @method set_placeholder
	 * @param {Number} col The column to which we want to move the
	 *  placeholder.
	 * @param {Number} row The row to which we want to move the
	 *  placeholder.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.set_placeholder = function(col, row)
	{
		var phgd = $.extend({}, this.placeholder_grid_data);
		var $nexts = this.widgets_below({
			col   : phgd.col,
			row   : phgd.row,
			size_y: phgd.size_y,
			size_x: phgd.size_x
		});

		// Prevents panes go out of the grid
		var right_col = (col + phgd.size_x - 1);
		if(right_col > this.cols)
		{
			col = col - (right_col - col);
		}

		var moved_down = this.placeholder_grid_data.row < row;
		var changed_column = this.placeholder_grid_data.col !== col;

		this.placeholder_grid_data.col = col;
		this.placeholder_grid_data.row = row;

		this.cells_occupied_by_placeholder = this.get_cells_occupied(this.placeholder_grid_data);

		this.$preview_holder.attr({
			'data-row': row,
			'data-col': col
		});

		if(moved_down || changed_column)
		{
			$nexts.each($.proxy(function(i, widget)
			{
				this.move_widget_up($(widget), this.placeholder_grid_data.col - col + phgd.size_y);
			}, this));
		}


		var $widgets_under_ph = this.get_widgets_under_player(this.cells_occupied_by_placeholder);
		if($widgets_under_ph.length)
		{
			$widgets_under_ph.each($.proxy(function(i, widget)
			{
				var $w = $(widget);
				this.move_widget_down($w, row + phgd.size_y - $w.data('coords').grid.row);
			}, this));
		}

	};


	/**
	 * Determines whether the player can move to a position above.
	 *
	 * @method can_go_player_up
	 * @param {Object} widget_grid_data The actual grid coords object of the
	 *  player.
	 * @return {Number|Boolean} If the player can be moved to an upper row
	 *  returns the row number, else returns false.
	 */
	fn.can_go_player_up = function(widget_grid_data)
	{
		var p_bottom_row = widget_grid_data.row + widget_grid_data.size_y - 1;
		var result = true;
		var upper_rows = [];
		var min_row = 10000;
		var $widgets_under_player = this.get_widgets_under_player();

		/* generate an array with columns as index and array with upper rows
		 * empty as value */
		this.for_each_column_occupied(widget_grid_data, function(tcol)
		{
			var grid_col = this.gridmap[tcol];
			var r = p_bottom_row + 1;
			upper_rows[tcol] = [];

			while(--r > 0)
			{
				if(this.is_empty(tcol, r) || this.is_player(tcol, r) || this.is_widget(tcol, r) && grid_col[r].is($widgets_under_player))
				{
					upper_rows[tcol].push(r);
					min_row = r < min_row ? r : min_row;
				}
				else
				{
					break;
				}
			}

			if(upper_rows[tcol].length === 0)
			{
				result = false;
				return true; //break
			}

			upper_rows[tcol].sort(function(a, b)
			{
				return a - b;
			});
		});

		if(!result)
		{
			return false;
		}

		return this.get_valid_rows(widget_grid_data, upper_rows, min_row);
	};


	/**
	 * Determines whether a widget can move to a position above.
	 *
	 * @method can_go_widget_up
	 * @param {Object} widget_grid_data The actual grid coords object of the
	 *  widget we want to check.
	 * @return {Number|Boolean} If the widget can be moved to an upper row
	 *  returns the row number, else returns false.
	 */
	fn.can_go_widget_up = function(widget_grid_data)
	{
		var p_bottom_row = widget_grid_data.row + widget_grid_data.size_y - 1;
		var result = true;
		var upper_rows = [];
		var min_row = 10000;

		/* generate an array with columns as index and array with topmost rows
		 * empty as value */
		this.for_each_column_occupied(widget_grid_data, function(tcol)
		{
			var grid_col = this.gridmap[tcol];
			upper_rows[tcol] = [];

			var r = p_bottom_row + 1;
			// iterate over each row
			while(--r > 0)
			{
				if(this.is_widget(tcol, r) && !this.is_player_in(tcol, r))
				{
					if(!grid_col[r].is(widget_grid_data.el))
					{
						break;
					}
				}

				if(!this.is_player(tcol, r) && !this.is_placeholder_in(tcol, r) && !this.is_player_in(tcol, r))
				{
					upper_rows[tcol].push(r);
				}

				if(r < min_row)
				{
					min_row = r;
				}
			}

			if(upper_rows[tcol].length === 0)
			{
				result = false;
				return true; //break
			}

			upper_rows[tcol].sort(function(a, b)
			{
				return a - b;
			});
		});

		if(!result)
		{
			return false;
		}

		return this.get_valid_rows(widget_grid_data, upper_rows, min_row);
	};


	/**
	 * Search a valid row for the widget represented by `widget_grid_data' in
	 * the `upper_rows` array. Iteration starts from row specified in `min_row`.
	 *
	 * @method get_valid_rows
	 * @param {Object} widget_grid_data The actual grid coords object of the
	 *  player.
	 * @param {Array} upper_rows An array with columns as index and arrays
	 *  of valid rows as values.
	 * @param {Number} min_row The upper row from which the iteration will start.
	 * @return {Number|Boolean} Returns the upper row valid from the `upper_rows`
	 *  for the widget in question.
	 */
	fn.get_valid_rows = function(widget_grid_data, upper_rows, min_row)
	{
		var p_top_row = widget_grid_data.row;
		var p_bottom_row = widget_grid_data.row + widget_grid_data.size_y - 1;
		var size_y = widget_grid_data.size_y;
		var r = min_row - 1;
		var valid_rows = [];

		while(++r <= p_bottom_row)
		{
			var common = true;
			$.each(upper_rows, function(col, rows)
			{
				if($.isArray(rows) && $.inArray(r, rows) === -1)
				{
					common = false;
				}
			});

			if(common === true)
			{
				valid_rows.push(r);
				if(valid_rows.length === size_y)
				{
					break;
				}
			}
		}

		var new_row = false;
		if(size_y === 1)
		{
			if(valid_rows[0] !== p_top_row)
			{
				new_row = valid_rows[0] || false;
			}
		}
		else
		{
			if(valid_rows[0] !== p_top_row)
			{
				new_row = this.get_consecutive_numbers_index(valid_rows, size_y);
			}
		}

		return new_row;
	};


	fn.get_consecutive_numbers_index = function(arr, size_y)
	{
		var max = arr.length;
		var result = [];
		var first = true;
		var prev = -1; // or null?

		for(var i = 0; i < max; i++)
		{
			if(first || arr[i] === prev + 1)
			{
				result.push(i);
				if(result.length === size_y)
				{
					break;
				}
				first = false;
			}
			else
			{
				result = [];
				first = true;
			}

			prev = arr[i];
		}

		return result.length >= size_y ? arr[result[0]] : false;
	};


	/**
	 * Get panes overlapping with the player.
	 *
	 * @method get_widgets_overlapped
	 * @return {jQuery} Returns a jQuery collection of HTMLElements.
	 */
	fn.get_widgets_overlapped = function()
	{
		var $w;
		var $widgets = $([]);
		var used = [];
		var rows_from_bottom = this.cells_occupied_by_player.rows.slice(0);
		rows_from_bottom.reverse();

		$.each(this.cells_occupied_by_player.cols, $.proxy(function(i, col)
		{
			$.each(rows_from_bottom, $.proxy(function(i, row)
			{
				// if there is a widget in the player position
				if(!this.gridmap[col])
				{
					return true;
				} //next iteration
				var $w = this.gridmap[col][row];
				if(this.is_occupied(col, row) && !this.is_player($w) && $.inArray($w, used) === -1)
				{
					$widgets = $widgets.add($w);
					used.push($w);
				}

			}, this));
		}, this));

		return $widgets;
	};


	/**
	 * This callback is executed when the player begins to collide with a column.
	 *
	 * @method on_start_overlapping_column
	 * @param {Number} col The collided column.
	 * @return {jQuery} Returns a jQuery collection of HTMLElements.
	 */
	fn.on_start_overlapping_column = function(col)
	{
		this.set_player(col, false);
	};


	/**
	 * A callback executed when the player begins to collide with a row.
	 *
	 * @method on_start_overlapping_row
	 * @param {Number} row The collided row.
	 * @return {jQuery} Returns a jQuery collection of HTMLElements.
	 */
	fn.on_start_overlapping_row = function(row)
	{
		this.set_player(false, row);
	};


	/**
	 * A callback executed when the the player ends to collide with a column.
	 *
	 * @method on_stop_overlapping_column
	 * @param {Number} col The collided row.
	 * @return {jQuery} Returns a jQuery collection of HTMLElements.
	 */
	fn.on_stop_overlapping_column = function(col)
	{
		this.set_player(col, false);

		var self = this;
		this.for_each_widget_below(col, this.cells_occupied_by_player.rows[0], function(tcol, trow)
			{
				self.move_widget_up(this, self.player_grid_data.size_y);
			});
	};


	/**
	 * This callback is executed when the player ends to collide with a row.
	 *
	 * @method on_stop_overlapping_row
	 * @param {Number} row The collided row.
	 * @return {jQuery} Returns a jQuery collection of HTMLElements.
	 */
	fn.on_stop_overlapping_row = function(row)
	{
		this.set_player(false, row);

		var self = this;
		var cols = this.cells_occupied_by_player.cols;
		for(var c = 0, cl = cols.length; c < cl; c++)
		{
			this.for_each_widget_below(cols[c], row, function(tcol, trow)
			{
				self.move_widget_up(this, self.player_grid_data.size_y);
			});
		}
	};


	/**
	 * Move a widget to a specific row. The cell or cells must be empty.
	 * If the widget has panes below, all of these panes will be moved also
	 * if they can.
	 *
	 * @method move_widget_to
	 * @param {HTMLElement} $widget The jQuery wrapped HTMLElement of the
	 * widget is going to be moved.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.move_widget_to = function($widget, row)
	{
		var self = this;
		var widget_grid_data = $widget.coords().grid;
		var diff = row - widget_grid_data.row;
		var $next_widgets = this.widgets_below($widget);

		var can_move_to_new_cell = this.can_move_to(widget_grid_data, widget_grid_data.col, row, $widget);

		if(can_move_to_new_cell === false)
		{
			return false;
		}

		this.remove_from_gridmap(widget_grid_data);
		widget_grid_data.row = row;
		this.add_to_gridmap(widget_grid_data);
		$widget.attr('data-row', row);
		this.$changed = this.$changed.add($widget);


		$next_widgets.each(function(i, widget)
		{
			var $w = $(widget);
			var wgd = $w.coords().grid;
			var can_go_up = self.can_go_widget_up(wgd);
			if(can_go_up && can_go_up !== wgd.row)
			{
				self.move_widget_to($w, can_go_up);
			}
		});

		return this;
	};


	/**
	 * Move up the specified widget and all below it.
	 *
	 * @method move_widget_up
	 * @param {HTMLElement} $widget The widget you want to move.
	 * @param {Number} [y_units] The number of cells that the widget has to move.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.move_widget_up = function($widget, y_units)
	{
		var el_grid_data = $widget.coords().grid;
		var actual_row = el_grid_data.row;
		var moved = [];
		var can_go_up = true;
		y_units || (y_units = 1);

		if(!this.can_go_up($widget))
		{
			return false;
		} //break;

		this.for_each_column_occupied(el_grid_data, function(col)
		{
			// can_go_up
			if($.inArray($widget, moved) === -1)
			{
				var widget_grid_data = $widget.coords().grid;
				var next_row = actual_row - y_units;
				next_row = this.can_go_up_to_row(widget_grid_data, col, next_row);

				if(!next_row)
				{
					return true;
				}

				var $next_widgets = this.widgets_below($widget);

				this.remove_from_gridmap(widget_grid_data);
				widget_grid_data.row = next_row;
				this.add_to_gridmap(widget_grid_data);
				$widget.attr('data-row', widget_grid_data.row);
				this.$changed = this.$changed.add($widget);

				moved.push($widget);

				$next_widgets.each($.proxy(function(i, widget)
				{
					this.move_widget_up($(widget), y_units);
				}, this));
			}
		});

	};


	/**
	 * Move down the specified widget and all below it.
	 *
	 * @method move_widget_down
	 * @param {jQuery} $widget The jQuery object representing the widget
	 *  you want to move.
	 * @param {Number} y_units The number of cells that the widget has to move.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.move_widget_down = function($widget, y_units)
	{
		var el_grid_data = $widget.coords().grid;
		var actual_row = el_grid_data.row;
		var moved = [];
		var y_diff = y_units;

		if(!$widget)
		{
			return false;
		}

		if($.inArray($widget, moved) === -1)
		{

			var widget_grid_data = $widget.coords().grid;
			var next_row = actual_row + y_units;
			var $next_widgets = this.widgets_below($widget);

			this.remove_from_gridmap(widget_grid_data);

			$next_widgets.each($.proxy(function(i, widget)
			{
				var $w = $(widget);
				var wd = $w.coords().grid;
				var tmp_y = this.displacement_diff(wd, widget_grid_data, y_diff);

				if(tmp_y > 0)
				{
					this.move_widget_down($w, tmp_y);
				}
			}, this));

			widget_grid_data.row = next_row;
			this.update_widget_position(widget_grid_data, $widget);
			$widget.attr('data-row', widget_grid_data.row);
			this.$changed = this.$changed.add($widget);

			moved.push($widget);
		}
	};


	/**
	 * Check if the widget can move to the specified row, else returns the
	 * upper row possible.
	 *
	 * @method can_go_up_to_row
	 * @param {Number} widget_grid_data The current grid coords object of the
	 *  widget.
	 * @param {Number} col The target column.
	 * @param {Number} row The target row.
	 * @return {Boolean|Number} Returns the row number if the widget can move
	 *  to the target position, else returns false.
	 */
	fn.can_go_up_to_row = function(widget_grid_data, col, row)
	{
		var ga = this.gridmap;
		var result = true;
		var urc = []; // upper_rows_in_columns
		var actual_row = widget_grid_data.row;
		var r;

		/* generate an array with columns as index and array with
		 * upper rows empty in the column */
		this.for_each_column_occupied(widget_grid_data, function(tcol)
		{
			var grid_col = ga[tcol];
			urc[tcol] = [];

			r = actual_row;
			while(r--)
			{
				if(this.is_empty(tcol, r) && !this.is_placeholder_in(tcol, r))
				{
					urc[tcol].push(r);
				}
				else
				{
					break;
				}
			}

			if(!urc[tcol].length)
			{
				result = false;
				return true;
			}

		});

		if(!result)
		{
			return false;
		}

		/* get common rows starting from upper position in all the columns
		 * that widget occupies */
		r = row;
		for(r = 1; r < actual_row; r++)
		{
			var common = true;

			for(var uc = 0, ucl = urc.length; uc < ucl; uc++)
			{
				if(urc[uc] && $.inArray(r, urc[uc]) === -1)
				{
					common = false;
				}
			}

			if(common === true)
			{
				result = r;
				break;
			}
		}

		return result;
	};


	fn.displacement_diff = function(widget_grid_data, parent_bgd, y_units)
	{
		var actual_row = widget_grid_data.row;
		var diffs = [];
		var parent_max_y = parent_bgd.row + parent_bgd.size_y;

		this.for_each_column_occupied(widget_grid_data, function(col)
		{
			var temp_y_units = 0;

			for(var r = parent_max_y; r < actual_row; r++)
			{
				if(this.is_empty(col, r))
				{
					temp_y_units = temp_y_units + 1;
				}
			}

			diffs.push(temp_y_units);
		});

		var max_diff = Math.max.apply(Math, diffs);
		y_units = (y_units - max_diff);

		return y_units > 0 ? y_units : 0;
	};


	/**
	 * Get panes below a widget.
	 *
	 * @method widgets_below
	 * @param {HTMLElement} $el The jQuery wrapped HTMLElement.
	 * @return {jQuery} A jQuery collection of HTMLElements.
	 */
	fn.widgets_below = function($el)
	{
		var el_grid_data = $.isPlainObject($el) ? $el : $el.coords().grid;
		var self = this;
		var ga = this.gridmap;
		var next_row = el_grid_data.row + el_grid_data.size_y - 1;
		var $nexts = $([]);

		this.for_each_column_occupied(el_grid_data, function(col)
		{
			self.for_each_widget_below(col, next_row, function(tcol, trow)
			{
				if(!self.is_player(this) && $.inArray(this, $nexts) === -1)
				{
					$nexts = $nexts.add(this);
					return true; // break
				}
			});
		});

		return this.sort_by_row_asc($nexts);
	};


	/**
	 * Update the array of mapped positions with the new player position.
	 *
	 * @method set_cells_player_occupies
	 * @param {Number} col The new player col.
	 * @param {Number} col The new player row.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.set_cells_player_occupies = function(col, row)
	{
		this.remove_from_gridmap(this.placeholder_grid_data);
		this.placeholder_grid_data.col = col;
		this.placeholder_grid_data.row = row;
		this.add_to_gridmap(this.placeholder_grid_data, this.$player);
		return this;
	};


	/**
	 * Remove from the array of mapped positions the reference to the player.
	 *
	 * @method empty_cells_player_occupies
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.empty_cells_player_occupies = function()
	{
		this.remove_from_gridmap(this.placeholder_grid_data);
		return this;
	};


	fn.can_go_up = function($el)
	{
		var el_grid_data = $el.coords().grid;
		var initial_row = el_grid_data.row;
		var prev_row = initial_row - 1;
		var ga = this.gridmap;
		var upper_rows_by_column = [];

		var result = true;
		if(initial_row === 1)
		{
			return false;
		}

		this.for_each_column_occupied(el_grid_data, function(col)
		{
			var $w = this.is_widget(col, prev_row);

			if(this.is_occupied(col, prev_row) || this.is_player(col, prev_row) || this.is_placeholder_in(col, prev_row) || this.is_player_in(col, prev_row))
			{
				result = false;
				return true; //break
			}
		});

		return result;
	};


	/**
	 * Check if it's possible to move a widget to a specific col/row. It takes
	 * into account the dimensions (`size_y` and `size_x` attrs. of the grid
	 *  coords object) the widget occupies.
	 *
	 * @method can_move_to
	 * @param {Object} widget_grid_data The grid coords object that represents
	 *  the widget.
	 * @param {Object} col The col to check.
	 * @param {Object} row The row to check.
	 * @param {Number} [max_row] The max row allowed.
	 * @return {Boolean} Returns true if all cells are empty, else return false.
	 */
	fn.can_move_to = function(widget_grid_data, col, row, max_row)
	{
		var ga = this.gridmap;
		var $w = widget_grid_data.el;
		var future_wd = {
			size_y: widget_grid_data.size_y,
			size_x: widget_grid_data.size_x,
			col   : col,
			row   : row
		};
		var result = true;

		//Prevents panes go out of the grid
		var right_col = col + widget_grid_data.size_x - 1;
		if(right_col > this.cols)
		{
			return false;
		}

		if(max_row && max_row < row + widget_grid_data.size_y - 1)
		{
			return false;
		}

		this.for_each_cell_occupied(future_wd, function(tcol, trow)
		{
			var $tw = this.is_widget(tcol, trow);
			if($tw && (!widget_grid_data.el || $tw.is($w)))
			{
				result = false;
			}
		});

		return result;
	};


	/**
	 * Given the leftmost column returns all columns that are overlapping
	 *  with the player.
	 *
	 * @method get_targeted_columns
	 * @param {Number} [from_col] The leftmost column.
	 * @return {Array} Returns an array with column numbers.
	 */
	fn.get_targeted_columns = function(from_col)
	{
		var max = (from_col || this.player_grid_data.col) + (this.player_grid_data.size_x - 1);
		var cols = [];
		for(var col = from_col; col <= max; col++)
		{
			cols.push(col);
		}
		return cols;
	};


	/**
	 * Given the upper row returns all rows that are overlapping with the player.
	 *
	 * @method get_targeted_rows
	 * @param {Number} [from_row] The upper row.
	 * @return {Array} Returns an array with row numbers.
	 */
	fn.get_targeted_rows = function(from_row)
	{
		var max = (from_row || this.player_grid_data.row) + (this.player_grid_data.size_y - 1);
		var rows = [];
		for(var row = from_row; row <= max; row++)
		{
			rows.push(row);
		}
		return rows;
	};

	/**
	 * Get all columns and rows that a widget occupies.
	 *
	 * @method get_cells_occupied
	 * @param {Object} el_grid_data The grid coords object of the widget.
	 * @return {Object} Returns an object like `{ cols: [], rows: []}`.
	 */
	fn.get_cells_occupied = function(el_grid_data)
	{
		var cells = { cols: [], rows: []};
		var i;
		if(arguments[1] instanceof jQuery)
		{
			el_grid_data = arguments[1].coords().grid;
		}

		for(i = 0; i < el_grid_data.size_x; i++)
		{
			var col = el_grid_data.col + i;
			cells.cols.push(col);
		}

		for(i = 0; i < el_grid_data.size_y; i++)
		{
			var row = el_grid_data.row + i;
			cells.rows.push(row);
		}

		return cells;
	};


	/**
	 * Iterate over the cells occupied by a widget executing a function for
	 * each one.
	 *
	 * @method for_each_cell_occupied
	 * @param {Object} el_grid_data The grid coords object that represents the
	 *  widget.
	 * @param {Function} callback The function to execute on each column
	 *  iteration. Column and row are passed as arguments.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.for_each_cell_occupied = function(grid_data, callback)
	{
		this.for_each_column_occupied(grid_data, function(col)
		{
			this.for_each_row_occupied(grid_data, function(row)
			{
				callback.call(this, col, row);
			});
		});
		return this;
	};


	/**
	 * Iterate over the columns occupied by a widget executing a function for
	 * each one.
	 *
	 * @method for_each_column_occupied
	 * @param {Object} el_grid_data The grid coords object that represents
	 *  the widget.
	 * @param {Function} callback The function to execute on each column
	 *  iteration. The column number is passed as first argument.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.for_each_column_occupied = function(el_grid_data, callback)
	{
		for(var i = 0; i < el_grid_data.size_x; i++)
		{
			var col = el_grid_data.col + i;
			callback.call(this, col, el_grid_data);
		}
	};


	/**
	 * Iterate over the rows occupied by a widget executing a function for
	 * each one.
	 *
	 * @method for_each_row_occupied
	 * @param {Object} el_grid_data The grid coords object that represents
	 *  the widget.
	 * @param {Function} callback The function to execute on each column
	 *  iteration. The row number is passed as first argument.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.for_each_row_occupied = function(el_grid_data, callback)
	{
		for(var i = 0; i < el_grid_data.size_y; i++)
		{
			var row = el_grid_data.row + i;
			callback.call(this, row, el_grid_data);
		}
	};


	fn._traversing_widgets = function(type, direction, col, row, callback)
	{
		var ga = this.gridmap;
		if(!ga[col])
		{
			return;
		}

		var cr, max;
		var action = type + '/' + direction;
		if(arguments[2] instanceof jQuery)
		{
			var el_grid_data = arguments[2].coords().grid;
			col = el_grid_data.col;
			row = el_grid_data.row;
			callback = arguments[3];
		}
		var matched = [];
		var trow = row;


		var methods = {
			'for_each/above': function()
			{
				while(trow--)
				{
					if(trow > 0 && this.is_widget(col, trow) && $.inArray(ga[col][trow], matched) === -1)
					{
						cr = callback.call(ga[col][trow], col, trow);
						matched.push(ga[col][trow]);
						if(cr)
						{
							break;
						}
					}
				}
			},
			'for_each/below': function()
			{
				for(trow = row + 1, max = ga[col].length; trow < max; trow++)
				{
					if(this.is_widget(col, trow) && $.inArray(ga[col][trow], matched) === -1)
					{
						cr = callback.call(ga[col][trow], col, trow);
						matched.push(ga[col][trow]);
						if(cr)
						{
							break;
						}
					}
				}
			}
		};

		if(methods[action])
		{
			methods[action].call(this);
		}
	};


	/**
	 * Iterate over each widget above the column and row specified.
	 *
	 * @method for_each_widget_above
	 * @param {Number} col The column to start iterating.
	 * @param {Number} row The row to start iterating.
	 * @param {Function} callback The function to execute on each widget
	 *  iteration. The value of `this` inside the function is the jQuery
	 *  wrapped HTMLElement.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.for_each_widget_above = function(col, row, callback)
	{
		this._traversing_widgets('for_each', 'above', col, row, callback);
		return this;
	};


	/**
	 * Iterate over each widget below the column and row specified.
	 *
	 * @method for_each_widget_below
	 * @param {Number} col The column to start iterating.
	 * @param {Number} row The row to start iterating.
	 * @param {Function} callback The function to execute on each widget
	 *  iteration. The value of `this` inside the function is the jQuery wrapped
	 *  HTMLElement.
	 * @return {Class} Returns the instance of the Gridster Class.
	 */
	fn.for_each_widget_below = function(col, row, callback)
	{
		this._traversing_widgets('for_each', 'below', col, row, callback);
		return this;
	};


	/**
	 * Returns the highest occupied cell in the grid.
	 *
	 * @method get_highest_occupied_cell
	 * @return {Object} Returns an object with `col` and `row` numbers.
	 */
	fn.get_highest_occupied_cell = function()
	{
		var r;
		var gm = this.gridmap;
		var rows = [];
		var row_in_col = [];
		for(var c = gm.length - 1; c >= 1; c--)
		{
			for(r = gm[c].length - 1; r >= 1; r--)
			{
				if(this.is_widget(c, r))
				{
					rows.push(r);
					row_in_col[r] = c;
					break;
				}
			}
		}

		var highest_row = Math.max.apply(Math, rows);

		this.highest_occupied_cell = {
			col: row_in_col[highest_row],
			row: highest_row
		};

		return this.highest_occupied_cell;
	};


	fn.get_widgets_from = function(col, row)
	{
		var ga = this.gridmap;
		var $widgets = $();

		if(col)
		{
			$widgets = $widgets.add(this.$widgets.filter(function()
			{
				var tcol = $(this).attr('data-col');
				return (tcol === col || tcol > col);
			}));
		}

		if(row)
		{
			$widgets = $widgets.add(this.$widgets.filter(function()
			{
				var trow = $(this).attr('data-row');
				return (trow === row || trow > row);
			}));
		}

		return $widgets;
	};


	/**
	 * Set the current height of the parent grid.
	 *
	 * @method set_dom_grid_height
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.set_dom_grid_height = function()
	{
		var r = this.get_highest_occupied_cell().row + 1;
		this.$el.css('height', r * this.min_widget_height);
		return this;
	};


	/**
	 * It generates the neccessary styles to position the panes.
	 *
	 * @method generate_stylesheet
	 * @param {Number} rows Number of columns.
	 * @param {Number} cols Number of rows.
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.generate_stylesheet = function(opts)
	{
		var styles = '';
		var max_size_x = this.options.max_size_x;
		var max_rows = 0;
		var max_cols = 0;
		var i;
		var rules;

		opts || (opts = {});
		opts.cols || (opts.cols = this.cols);
		opts.rows || (opts.rows = this.rows);
		opts.namespace || (opts.namespace = this.options.namespace);
		opts.widget_base_dimensions || (opts.widget_base_dimensions = this.options.widget_base_dimensions);
		opts.widget_margins || (opts.widget_margins = this.options.widget_margins);
		opts.min_widget_width = (opts.widget_margins[0] * 2) + opts.widget_base_dimensions[0];
		opts.min_widget_height = (opts.widget_margins[1] * 2) + opts.widget_base_dimensions[1];

		// don't duplicate stylesheets for the same configuration
		var serialized_opts = $.param(opts);
		if($.inArray(serialized_opts, Gridster.generated_stylesheets) >= 0)
		{
			return false;
		}

		Gridster.generated_stylesheets.push(serialized_opts);

		/* generate CSS styles for cols */
		for(i = opts.cols; i >= 0; i--)
		{
			styles += (opts.namespace + ' [data-col="' + (i + 1) + '"] { left:' + ((i * opts.widget_base_dimensions[0]) + (i * opts.widget_margins[0]) + ((i + 1) * opts.widget_margins[0])) + 'px;} ');
		}

		/* generate CSS styles for rows */
		for(i = opts.rows; i >= 0; i--)
		{
			styles += (opts.namespace + ' [data-row="' + (i + 1) + '"] { top:' + ((i * opts.widget_base_dimensions[1]) + (i * opts.widget_margins[1]) + ((i + 1) * opts.widget_margins[1]) ) + 'px;} ');
		}

		for(var y = 1; y <= opts.rows; y++)
		{
			styles += (opts.namespace + ' [data-sizey="' + y + '"] { height:' + (y * opts.widget_base_dimensions[1] + (y - 1) * (opts.widget_margins[1] * 2)) + 'px;}');
		}

		for(var x = 1; x <= max_size_x; x++)
		{
			styles += (opts.namespace + ' [data-sizex="' + x + '"] { width:' + (x * opts.widget_base_dimensions[0] + (x - 1) * (opts.widget_margins[0] * 2)) + 'px;}');
		}

		return this.add_style_tag(styles);
	};


	/**
	 * Injects the given CSS as string to the head of the document.
	 *
	 * @method add_style_tag
	 * @param {String} css The styles to apply.
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.add_style_tag = function(css)
	{
		var d = document;
		var tag = d.createElement('style');

		d.getElementsByTagName('head')[0].appendChild(tag);
		tag.setAttribute('type', 'text/css');

		if(tag.styleSheet)
		{
			tag.styleSheet.cssText = css;
		}
		else
		{
			tag.appendChild(document.createTextNode(css));
		}

		this.$style_tags = this.$style_tags.add(tag);

		return this;
	};


	/**
	 * Remove the style tag with the associated id from the head of the document
	 *
	 * @method  remove_style_tag
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.remove_style_tags = function()
	{
		this.$style_tags.remove();
	};


	/**
	 * Generates a faux grid to collide with it when a widget is dragged and
	 * detect row or column that we want to go.
	 *
	 * @method generate_faux_grid
	 * @param {Number} rows Number of columns.
	 * @param {Number} cols Number of rows.
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.generate_faux_grid = function(rows, cols)
	{
		this.faux_grid = [];
		this.gridmap = [];
		var col;
		var row;
		for(col = cols; col > 0; col--)
		{
			this.gridmap[col] = [];
			for(row = rows; row > 0; row--)
			{
				this.add_faux_cell(row, col);
			}
		}
		return this;
	};


	/**
	 * Add cell to the faux grid.
	 *
	 * @method add_faux_cell
	 * @param {Number} row The row for the new faux cell.
	 * @param {Number} col The col for the new faux cell.
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.add_faux_cell = function(row, col)
	{
		var coords = $({
			left        : this.baseX + ((col - 1) * this.min_widget_width),
			top         : this.baseY + (row - 1) * this.min_widget_height,
			width       : this.min_widget_width,
			height      : this.min_widget_height,
			col         : col,
			row         : row,
			original_col: col,
			original_row: row
		}).coords();

		if(!$.isArray(this.gridmap[col]))
		{
			this.gridmap[col] = [];
		}

		this.gridmap[col][row] = false;
		this.faux_grid.push(coords);

		return this;
	};


	/**
	 * Add rows to the faux grid.
	 *
	 * @method add_faux_rows
	 * @param {Number} rows The number of rows you want to add to the faux grid.
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.add_faux_rows = function(rows)
	{
		var actual_rows = this.rows;
		var max_rows = actual_rows + (rows || 1);

		for(var r = max_rows; r > actual_rows; r--)
		{
			for(var c = this.cols; c >= 1; c--)
			{
				this.add_faux_cell(r, c);
			}
		}

		this.rows = max_rows;

		if(this.options.autogenerate_stylesheet)
		{
			this.generate_stylesheet();
		}

		return this;
	};

	/**
	 * Add cols to the faux grid.
	 *
	 * @method add_faux_cols
	 * @param {Number} cols The number of cols you want to add to the faux grid.
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.add_faux_cols = function(cols)
	{
		var actual_cols = this.cols;
		var max_cols = actual_cols + (cols || 1);

		for(var c = actual_cols; c < max_cols; c++)
		{
			for(var r = this.rows; r >= 1; r--)
			{
				this.add_faux_cell(r, c);
			}
		}

		this.cols = max_cols;

		if(this.options.autogenerate_stylesheet)
		{
			this.generate_stylesheet();
		}

		return this;
	};


	/**
	 * Recalculates the offsets for the faux grid. You need to use it when
	 * the browser is resized.
	 *
	 * @method recalculate_faux_grid
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.recalculate_faux_grid = function()
	{
		var aw = this.$wrapper.width();
		this.baseX = ($(window).width() - aw) / 2;
		this.baseY = this.$wrapper.offset().top;

		$.each(this.faux_grid, $.proxy(function(i, coords)
		{
			this.faux_grid[i] = coords.update({
				left: this.baseX + (coords.data.col - 1) * this.min_widget_width,
				top : this.baseY + (coords.data.row - 1) * this.min_widget_height
			});

		}, this));

		return this;
	};


	/**
	 * Get all panes in the DOM and register them.
	 *
	 * @method get_widgets_from_DOM
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.get_widgets_from_DOM = function()
	{
		this.$widgets.each($.proxy(function(i, widget)
		{
			this.register_widget($(widget));
		}, this));
		return this;
	};


	/**
	 * Calculate columns and rows to be set based on the configuration
	 *  parameters, grid dimensions, etc ...
	 *
	 * @method generate_grid_and_stylesheet
	 * @return {Object} Returns the instance of the Gridster class.
	 */
	fn.generate_grid_and_stylesheet = function()
	{
		var aw = this.$wrapper.width();
		var ah = this.$wrapper.height();
		var max_cols = this.options.max_cols;

		var cols = Math.floor(aw / this.min_widget_width) + this.options.extra_cols;

		var actual_cols = this.$widgets.map(function()
		{
			return $(this).attr('data-col');
		}).get();

		//needed to pass tests with phantomjs
		actual_cols.length || (actual_cols = [0]);

		var min_cols = Math.max.apply(Math, actual_cols);

		// get all rows that could be occupied by the current panes
		var max_rows = this.options.extra_rows;
		this.$widgets.each(function(i, w)
		{
			max_rows += (+$(w).attr('data-sizey'));
		});

		this.cols = cols;//Math.max(Math.min(min_cols, cols), 1, this.options.min_cols);

		/*if(max_cols && max_cols >= min_cols && max_cols < this.cols)
		{
			this.cols = max_cols;
		}*/

		this.rows = Math.max(max_rows, this.options.min_rows);

		this.baseX = ($(window).width() - aw) / 2;
		this.baseY = this.$wrapper.offset().top;

		// left and right gutters not included
		this.container_width = (this.cols * this.options.widget_base_dimensions[0]) + ((this.cols - 1) * 2 * this.options.widget_margins[0]);

		if(this.options.autogenerate_stylesheet)
		{
			this.generate_stylesheet();
		}

		return this.generate_faux_grid(this.rows, this.cols);
	};

	/**
	 * Destroy this gridster by removing any sign of its presence, making it easy to avoid memory leaks
	 *
	 * @method destroy
	 * @return {undefined}
	 */
	fn.destroy = function()
	{
		// remove bound callback on window resize
		$(window).unbind('.gridster');

		if(this.drag_api)
		{
			this.drag_api.destroy();
		}

		this.remove_style_tags();

		// lastly, remove gridster element
		// this will additionally cause any data associated to this element to be removed, including this
		// very gridster instance
		this.$el.remove();

		return this;
	};


	//jQuery adapter
	$.fn.gridster = function(options)
	{
		return this.each(function()
		{
			if(!$(this).data('gridster'))
			{
				$(this).data('gridster', new Gridster(this, options));
			}
		});
	};

	$.Gridster = fn;

}(jQuery, window, document));

;
(function($, window, document, undefined)
{

	var fn = $.Gridster;

	fn.widgets_in_col = function(col)
	{
		if(!this.gridmap[col])
		{
			return false;
		}

		for(var i = this.gridmap[col].length - 1; i >= 0; i--)
		{
			if(this.is_widget(col, i) !== false)
			{
				return true;
			}
		}

		return false;
	};

	fn.widgets_in_row = function(row)
	{
		for(var i = this.gridmap.length; i >= 1; i--)
		{
			if(this.is_widget(i, row) !== false)
			{
				return true;
			}
		}

		return false;
	};


	fn.widgets_in_range = function(col1, row1, col2, row2)
	{
		var valid_cols = [];
		var valid_rows = [];
		var $widgets = $([]);
		var c, r, $w, wgd;

		for(c = col2; c >= col1; c--)
		{
			for(r = row2; r >= row1; r--)
			{
				$w = this.is_widget(c, r);

				if($w !== false)
				{
					wgd = $w.data('coords').grid;
					if(wgd.col >= col1 && wgd.col <= col2 && wgd.row >= row1 && wgd.row <= row2)
					{
						$widgets = $widgets.add($w);
					}
				}
			}
		}

		return $widgets;
	};


	fn.get_bottom_most_occupied_cell = function()
	{
		var row = 0;
		var col = 0;
		this.for_each_cell(function($el, c, r)
		{
			if($el && r > row)
			{
				row = r;
				col = c;
			}
		});

		return {col: col, row: row};
	};


	fn.get_right_most_occupied_cell = function()
	{
		var row = 0;
		var col = 0;
		this.for_each_cell(function($el, c, r)
		{
			if($el)
			{
				row = r;
				col = c;
				return false;
			}
		});

		return {col: col, row: row};
	};


	fn.for_each_cell = function(callback, gridmap)
	{
		gridmap || (gridmap = this.gridmap);
		var cols = gridmap.length;
		var rows = gridmap[1].length;

		cols_iter:
			for(var c = cols - 1; c >= 1; c--)
			{
				for(var r = rows - 1; r >= 1; r--)
				{
					var $el = gridmap[c] && gridmap[c][r];
					if(callback)
					{
						if(callback.call(this, $el, c, r) === false)
						{
							break cols_iter;
						}
						else
						{
							continue;
						}
					}
				}
			}
	};


	fn.next_position_in_range = function(size_x, size_y, max_rows)
	{
		size_x || (size_x = 1);
		size_y || (size_y = 1);
		var ga = this.gridmap;
		var cols_l = ga.length;
		var valid_pos = [];
		var rows_l;

		for(var c = 1; c < cols_l; c++)
		{
			rows_l = max_rows || ga[c].length;
			for(var r = 1; r <= rows_l; r++)
			{
				var can_move_to = this.can_move_to({
					size_x: size_x,
					size_y: size_y
				}, c, r, max_rows);

				if(can_move_to)
				{
					valid_pos.push({
						col   : c,
						row   : r,
						size_y: size_y,
						size_x: size_x
					});
				}
			}
		}

		if(valid_pos.length >= 1)
		{
			return this.sort_by_col_asc(valid_pos)[0];
		}

		return false;
	};


	fn.closest_to_right = function(col, row)
	{
		if(!this.gridmap[col])
		{
			return false;
		}
		var cols_l = this.gridmap.length - 1;

		for(var c = col; c <= cols_l; c++)
		{
			if(this.gridmap[c][row])
			{
				return { col: c, row: row };
			}
		}

		return false;
	};


	fn.closest_to_left = function(col, row)
	{
		var cols_l = this.gridmap.length - 1;
		if(!this.gridmap[col])
		{
			return false;
		}

		for(var c = col; c >= 1; c--)
		{
			if(this.gridmap[c][row])
			{
				return { col: c, row: row };
			}
		}

		return false;
	};

}(jQuery, window, document));

(function($)
{
	$.fn.insertAtCaret = function(text, opts)
	{
		var element = $(this).get(0);

		if(document.selection)
		{
			element.focus();
			var orig = element.value.replace(/\r\n/g, "\n");
			var range = document.selection.createRange();

			if(range.parentElement() != element)
			{
				return false;
			}

			range.text = text;

			var actual = tmp = element.value.replace(/\r\n/g, "\n");

			for(var diff = 0; diff < orig.length; diff++)
			{
				if(orig.charAt(diff) != actual.charAt(diff)) break;
			}

			for(var index = 0, start = 0; tmp.match(text) && (tmp = tmp.replace(text, "")) && index <= diff; index = start + text.length)
			{
				start = actual.indexOf(text, index);
			}
		}
		else if(element.selectionStart)
		{
			var start = element.selectionStart;
			var end = element.selectionEnd;

			element.value = element.value.substr(0, start) + text + element.value.substr(end, element.value.length);
		}

		if(start)
		{
			setCaretTo(element, start + text.length);
		}
		else
		{
			element.value = text + element.value;
		}

		$(this).change();

		return this;
	}

	$.fn.replaceTextAt = function(start, end, replacementText)
	{
		var element = $(this).get(0);

		var wholeString = $(this).val();
		var prefix = wholeString.substr(0, start);
		var suffix = wholeString.substr(end);

		$(this).val(prefix + replacementText + suffix);

		var newCursorPosition = prefix.length + replacementText.length;

		setCaretTo(element, newCursorPosition);

		$(this).change();

		return this;
	}

	$.fn.setCaretPosition = function(start, end)
	{
		var element = $(this).get(0);
		element.focus();
		setCaretTo(element, start, end);
		return this;
	}


	$.fn.getCaretPosition = function()
	{
		var element = $(this).get(0);
		$(element).focus();
		return getCaretPosition(element);
	}

	$.fn.getSelectedText = function()
	{
		var element = $(this).get(0);

		// workaround for firefox because window.getSelection does not work inside inputs
		if(typeof element.selectionStart == 'number')
		{
			return $(element).val().substr(element.selectionStart, element.selectionEnd - element.selectionStart);
		}
		else if(document.getSelection)
		{
			return document.getSelection();
		}
		else if(window.getSelection)
		{
			return window.getSelection();
		}
	}

	// privates
	function setCaretTo(element, start, end)
	{
		if(element.createTextRange)
		{
			var range = element.createTextRange();
			range.moveStart('character', start);
			range.moveEnd('character', (end || start));
			range.select();
		}
		else if(element.selectionStart)
		{
			element.focus();
			element.setSelectionRange(start, (end || start));
		}
	}

	function getCaretPosition(element)
	{
		if(typeof element.selectionStart == 'number')
		{
			return element.selectionStart;
		}
		else if(document.selection)
		{
			var range = document.selection.createRange();
			var rangeLength = range.text.length;
			range.moveStart('character', -element.value.length);
			return range.text.length - rangeLength;
		}
	}
})(jQuery);
/*!
 * jQuery-ajaxTransport-XDomainRequest - v1.0.3 - 2014-06-06
 * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
 * Copyright (c) 2014 Jason Moon (@JSONMOON)
 * Licensed MIT (/blob/master/LICENSE.txt)
 */
(function(a){if(typeof define==='function'&&define.amd){define(['jquery'],a)}else if(typeof exports==='object'){module.exports=a(require('jquery'))}else{a(jQuery)}}(function($){if($.support.cors||!$.ajaxTransport||!window.XDomainRequest){return}var n=/^https?:\/\//i;var o=/^get|post$/i;var p=new RegExp('^'+location.protocol,'i');$.ajaxTransport('* text html xml json',function(j,k,l){if(!j.crossDomain||!j.async||!o.test(j.type)||!n.test(j.url)||!p.test(j.url)){return}var m=null;return{send:function(f,g){var h='';var i=(k.dataType||'').toLowerCase();m=new XDomainRequest();if(/^\d+$/.test(k.timeout)){m.timeout=k.timeout}m.ontimeout=function(){g(500,'timeout')};m.onload=function(){var a='Content-Length: '+m.responseText.length+'\r\nContent-Type: '+m.contentType;var b={code:200,message:'success'};var c={text:m.responseText};try{if(i==='html'||/text\/html/i.test(m.contentType)){c.html=m.responseText}else if(i==='json'||(i!=='text'&&/\/json/i.test(m.contentType))){try{c.json=$.parseJSON(m.responseText)}catch(e){b.code=500;b.message='parseerror'}}else if(i==='xml'||(i!=='text'&&/\/xml/i.test(m.contentType))){var d=new ActiveXObject('Microsoft.XMLDOM');d.async=false;try{d.loadXML(m.responseText)}catch(e){d=undefined}if(!d||!d.documentElement||d.getElementsByTagName('parsererror').length){b.code=500;b.message='parseerror';throw'Invalid XML: '+m.responseText;}c.xml=d}}catch(parseMessage){throw parseMessage;}finally{g(b.code,b.message,c,a)}};m.onprogress=function(){};m.onerror=function(){g(500,'error',{text:m.responseText})};if(k.data){h=($.type(k.data)==='string')?k.data:$.param(k.data)}m.open(j.type,j.url);m.send(h)},abort:function(){if(m){m.abort()}}}})}));
/* CodeMirror - Minified & Bundled
   Generated on 4/30/2014 with http://codemirror.net/doc/compress.html
   Version: HEAD

   CodeMirror Library:
   - codemirror.js
   Modes:
   - javascript.js
   Add-ons:
   - closebrackets.js
   - continuecomment.js
   - javascript-hint.js
   - matchbrackets.js
   - show-hint.js
 */

!function(a){if("object"==typeof exports&&"object"==typeof module)module.exports=a();else{if("function"==typeof define&&define.amd)return define([],a);this.CodeMirror=a()}}(function(){"use strict";function y(a,c){if(!(this instanceof y))return new y(a,c);this.options=c=c||{},Eg(Zd,c,!1),M(c);var d=c.value;"string"==typeof d&&(d=new yf(d,c.mode)),this.doc=d;var e=this.display=new z(a,d);e.wrapper.CodeMirror=this,I(this),G(this),c.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),c.autofocus&&!q&&Qc(this),this.state={keyMaps:[],overlays:[],modeGen:0,overwrite:!1,focused:!1,suppressEdits:!1,pasteIncoming:!1,cutIncoming:!1,draggingText:!1,highlight:new ug},b&&setTimeout(Fg(Pc,this,!0),20),Tc(this),Xg();var f=this;zc(this,function(){f.curOp.forceUpdate=!0,Cf(f,d),c.autofocus&&!q||Qg()==e.input?setTimeout(Fg(vd,f),20):wd(f);for(var a in $d)$d.hasOwnProperty(a)&&$d[a](f,c[a],ae);for(var b=0;b<ee.length;++b)ee[b](f)})}function z(a,b){var d=this,e=d.input=Lg("textarea",null,null,"position: absolute; padding: 0; width: 1px; height: 1em; outline: none");h?e.style.width="1000px":e.setAttribute("wrap","off"),p&&(e.style.border="1px solid black"),e.setAttribute("autocorrect","off"),e.setAttribute("autocapitalize","off"),e.setAttribute("spellcheck","false"),d.inputDiv=Lg("div",[e],null,"overflow: hidden; position: relative; width: 3px; height: 0px;"),d.scrollbarH=Lg("div",[Lg("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar"),d.scrollbarV=Lg("div",[Lg("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),d.scrollbarFiller=Lg("div",null,"CodeMirror-scrollbar-filler"),d.gutterFiller=Lg("div",null,"CodeMirror-gutter-filler"),d.lineDiv=Lg("div",null,"CodeMirror-code"),d.selectionDiv=Lg("div",null,null,"position: relative; z-index: 1"),d.cursorDiv=Lg("div",null,"CodeMirror-cursors"),d.measure=Lg("div",null,"CodeMirror-measure"),d.lineMeasure=Lg("div",null,"CodeMirror-measure"),d.lineSpace=Lg("div",[d.measure,d.lineMeasure,d.selectionDiv,d.cursorDiv,d.lineDiv],null,"position: relative; outline: none"),d.mover=Lg("div",[Lg("div",[d.lineSpace],"CodeMirror-lines")],null,"position: relative"),d.sizer=Lg("div",[d.mover],"CodeMirror-sizer"),d.heightForcer=Lg("div",null,null,"position: absolute; height: "+pg+"px; width: 1px;"),d.gutters=Lg("div",null,"CodeMirror-gutters"),d.lineGutter=null,d.scroller=Lg("div",[d.sizer,d.heightForcer,d.gutters],"CodeMirror-scroll"),d.scroller.setAttribute("tabIndex","-1"),d.wrapper=Lg("div",[d.inputDiv,d.scrollbarH,d.scrollbarV,d.scrollbarFiller,d.gutterFiller,d.scroller],"CodeMirror"),c&&(d.gutters.style.zIndex=-1,d.scroller.style.paddingRight=0),p&&(e.style.width="0px"),h||(d.scroller.draggable=!0),m&&(d.inputDiv.style.height="1px",d.inputDiv.style.position="absolute"),c&&(d.scrollbarH.style.minHeight=d.scrollbarV.style.minWidth="18px"),a.appendChild?a.appendChild(d.wrapper):a(d.wrapper),d.viewFrom=d.viewTo=b.first,d.view=[],d.externalMeasured=null,d.viewOffset=0,d.lastSizeC=0,d.updateLineNumbers=null,d.lineNumWidth=d.lineNumInnerWidth=d.lineNumChars=null,d.prevInput="",d.alignWidgets=!1,d.pollingFast=!1,d.poll=new ug,d.cachedCharWidth=d.cachedTextHeight=d.cachedPaddingH=null,d.inaccurateSelection=!1,d.maxLine=null,d.maxLineLength=0,d.maxLineChanged=!1,d.wheelDX=d.wheelDY=d.wheelStartX=d.wheelStartY=null,d.shift=!1,d.selForContextMenu=null}function A(a){a.doc.mode=y.getMode(a.options,a.doc.modeOption),B(a)}function B(a){a.doc.iter(function(a){a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null)}),a.doc.frontier=a.doc.first,Sb(a,100),a.state.modeGen++,a.curOp&&Fc(a)}function C(a){a.options.lineWrapping?(Tg(a.display.wrapper,"CodeMirror-wrap"),a.display.sizer.style.minWidth=""):(Sg(a.display.wrapper,"CodeMirror-wrap"),L(a)),E(a),Fc(a),ic(a),setTimeout(function(){O(a)},100)}function D(a){var b=uc(a.display),c=a.options.lineWrapping,d=c&&Math.max(5,a.display.scroller.clientWidth/vc(a.display)-3);return function(e){if(Ue(a.doc,e))return 0;var f=0;if(e.widgets)for(var g=0;g<e.widgets.length;g++)e.widgets[g].height&&(f+=e.widgets[g].height);return c?f+(Math.ceil(e.text.length/d)||1)*b:f+b}}function E(a){var b=a.doc,c=D(a);b.iter(function(a){var b=c(a);b!=a.height&&Gf(a,b)})}function F(a){var b=je[a.options.keyMap],c=b.style;a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-keymap-\S+/g,"")+(c?" cm-keymap-"+c:"")}function G(a){a.display.wrapper.className=a.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+a.options.theme.replace(/(^|\s)\s*/g," cm-s-"),ic(a)}function H(a){I(a),Fc(a),setTimeout(function(){Q(a)},20)}function I(a){var b=a.display.gutters,c=a.options.gutters;Ng(b);for(var d=0;d<c.length;++d){var e=c[d],f=b.appendChild(Lg("div",null,"CodeMirror-gutter "+e));"CodeMirror-linenumbers"==e&&(a.display.lineGutter=f,f.style.width=(a.display.lineNumWidth||1)+"px")}b.style.display=d?"":"none",J(a)}function J(a){var b=a.display.gutters.offsetWidth;a.display.sizer.style.marginLeft=b+"px",a.display.scrollbarH.style.left=a.options.fixedGutter?b+"px":0}function K(a){if(0==a.height)return 0;for(var c,b=a.text.length,d=a;c=Ne(d);){var e=c.find(0,!0);d=e.from.line,b+=e.from.ch-e.to.ch}for(d=a;c=Oe(d);){var e=c.find(0,!0);b-=d.text.length-e.from.ch,d=e.to.line,b+=d.text.length-e.to.ch}return b}function L(a){var b=a.display,c=a.doc;b.maxLine=Df(c,c.first),b.maxLineLength=K(b.maxLine),b.maxLineChanged=!0,c.iter(function(a){var c=K(a);c>b.maxLineLength&&(b.maxLineLength=c,b.maxLine=a)})}function M(a){var b=Bg(a.gutters,"CodeMirror-linenumbers");-1==b&&a.lineNumbers?a.gutters=a.gutters.concat(["CodeMirror-linenumbers"]):b>-1&&!a.lineNumbers&&(a.gutters=a.gutters.slice(0),a.gutters.splice(b,1))}function N(a){var b=a.display.scroller;return{clientHeight:b.clientHeight,barHeight:a.display.scrollbarV.clientHeight,scrollWidth:b.scrollWidth,clientWidth:b.clientWidth,barWidth:a.display.scrollbarH.clientWidth,docHeight:Math.round(a.doc.height+Xb(a.display))}}function O(a,b){b||(b=N(a));var c=a.display,d=b.docHeight+pg,e=b.scrollWidth>b.clientWidth,f=d>b.clientHeight;if(f?(c.scrollbarV.style.display="block",c.scrollbarV.style.bottom=e?_g(c.measure)+"px":"0",c.scrollbarV.firstChild.style.height=Math.max(0,d-b.clientHeight+(b.barHeight||c.scrollbarV.clientHeight))+"px"):(c.scrollbarV.style.display="",c.scrollbarV.firstChild.style.height="0"),e?(c.scrollbarH.style.display="block",c.scrollbarH.style.right=f?_g(c.measure)+"px":"0",c.scrollbarH.firstChild.style.width=b.scrollWidth-b.clientWidth+(b.barWidth||c.scrollbarH.clientWidth)+"px"):(c.scrollbarH.style.display="",c.scrollbarH.firstChild.style.width="0"),e&&f?(c.scrollbarFiller.style.display="block",c.scrollbarFiller.style.height=c.scrollbarFiller.style.width=_g(c.measure)+"px"):c.scrollbarFiller.style.display="",e&&a.options.coverGutterNextToScrollbar&&a.options.fixedGutter?(c.gutterFiller.style.display="block",c.gutterFiller.style.height=_g(c.measure)+"px",c.gutterFiller.style.width=c.gutters.offsetWidth+"px"):c.gutterFiller.style.display="",!a.state.checkedOverlayScrollbar&&b.clientHeight>0){if(0===_g(c.measure)){var g=r&&!n?"12px":"18px";c.scrollbarV.style.minWidth=c.scrollbarH.style.minHeight=g;var h=function(b){cg(b)!=c.scrollbarV&&cg(b)!=c.scrollbarH&&Ac(a,Xc)(b)};eg(c.scrollbarV,"mousedown",h),eg(c.scrollbarH,"mousedown",h)}a.state.checkedOverlayScrollbar=!0}}function P(a,b,c){var d=c&&null!=c.top?c.top:a.scroller.scrollTop;d=Math.floor(d-Wb(a));var e=c&&null!=c.bottom?c.bottom:d+a.wrapper.clientHeight,f=If(b,d),g=If(b,e);if(c&&c.ensure){var h=c.ensure.from.line,i=c.ensure.to.line;if(f>h)return{from:h,to:If(b,Jf(Df(b,h))+a.wrapper.clientHeight)};if(Math.min(i,b.lastLine())>=g)return{from:If(b,Jf(Df(b,i))-a.wrapper.clientHeight),to:i}}return{from:f,to:g}}function Q(a){var b=a.display,c=b.view;if(b.alignWidgets||b.gutters.firstChild&&a.options.fixedGutter){for(var d=T(b)-b.scroller.scrollLeft+a.doc.scrollLeft,e=b.gutters.offsetWidth,f=d+"px",g=0;g<c.length;g++)if(!c[g].hidden){a.options.fixedGutter&&c[g].gutter&&(c[g].gutter.style.left=f);var h=c[g].alignable;if(h)for(var i=0;i<h.length;i++)h[i].style.left=f}a.options.fixedGutter&&(b.gutters.style.left=d+e+"px")}}function R(a){if(!a.options.lineNumbers)return!1;var b=a.doc,c=S(a.options,b.first+b.size-1),d=a.display;if(c.length!=d.lineNumChars){var e=d.measure.appendChild(Lg("div",[Lg("div",c)],"CodeMirror-linenumber CodeMirror-gutter-elt")),f=e.firstChild.offsetWidth,g=e.offsetWidth-f;return d.lineGutter.style.width="",d.lineNumInnerWidth=Math.max(f,d.lineGutter.offsetWidth-g),d.lineNumWidth=d.lineNumInnerWidth+g,d.lineNumChars=d.lineNumInnerWidth?c.length:-1,d.lineGutter.style.width=d.lineNumWidth+"px",J(a),!0}return!1}function S(a,b){return String(a.lineNumberFormatter(b+a.firstLineNumber))}function T(a){return a.scroller.getBoundingClientRect().left-a.sizer.getBoundingClientRect().left}function U(a,b,c){for(var f,d=a.display.viewFrom,e=a.display.viewTo,g=P(a.display,a.doc,b),i=!0;;i=!1){var j=a.display.scroller.clientWidth;if(!V(a,g,c))break;f=!0,a.display.maxLineChanged&&!a.options.lineWrapping&&W(a);var k=N(a);if(Ob(a),X(a,k),O(a,k),h&&a.options.lineWrapping&&Y(a,k),i&&a.options.lineWrapping&&j!=a.display.scroller.clientWidth)c=!0;else if(c=!1,b&&null!=b.top&&(b={top:Math.min(k.docHeight-pg-k.clientHeight,b.top)}),g=P(a.display,a.doc,b),g.from>=a.display.viewFrom&&g.to<=a.display.viewTo)break}return a.display.updateLineNumbers=null,f&&(jg(a,"update",a),(a.display.viewFrom!=d||a.display.viewTo!=e)&&jg(a,"viewportChange",a,a.display.viewFrom,a.display.viewTo)),f}function V(a,b,c){var d=a.display,e=a.doc;if(!d.wrapper.offsetWidth)return Hc(a),void 0;if(!(!c&&b.from>=d.viewFrom&&b.to<=d.viewTo&&0==Lc(a))){R(a)&&Hc(a);var f=_(a),g=e.first+e.size,h=Math.max(b.from-a.options.viewportMargin,e.first),i=Math.min(g,b.to+a.options.viewportMargin);d.viewFrom<h&&h-d.viewFrom<20&&(h=Math.max(e.first,d.viewFrom)),d.viewTo>i&&d.viewTo-i<20&&(i=Math.min(g,d.viewTo)),x&&(h=Se(a.doc,h),i=Te(a.doc,i));var j=h!=d.viewFrom||i!=d.viewTo||d.lastSizeC!=d.wrapper.clientHeight;Kc(a,h,i),d.viewOffset=Jf(Df(a.doc,d.viewFrom)),a.display.mover.style.top=d.viewOffset+"px";var k=Lc(a);if(j||0!=k||c){var l=Qg();return k>4&&(d.lineDiv.style.display="none"),ab(a,d.updateLineNumbers,f),k>4&&(d.lineDiv.style.display=""),l&&Qg()!=l&&l.offsetHeight&&l.focus(),Ng(d.cursorDiv),Ng(d.selectionDiv),j&&(d.lastSizeC=d.wrapper.clientHeight,Sb(a,400)),Z(a),!0}}}function W(a){var b=a.display,c=ac(a,b.maxLine,b.maxLine.text.length).left;b.maxLineChanged=!1;var d=Math.max(0,c+3),e=Math.max(0,b.sizer.offsetLeft+d+pg-b.scroller.clientWidth);b.sizer.style.minWidth=d+"px",e<a.doc.scrollLeft&&hd(a,Math.min(b.scroller.scrollLeft,e),!0)}function X(a,b){a.display.sizer.style.minHeight=a.display.heightForcer.style.top=b.docHeight+"px",a.display.gutters.style.height=Math.max(b.docHeight,b.clientHeight-pg)+"px"}function Y(a,b){a.display.sizer.offsetWidth+a.display.gutters.offsetWidth<a.display.scroller.clientWidth-1&&(a.display.sizer.style.minHeight=a.display.heightForcer.style.top="0px",a.display.gutters.style.height=b.docHeight+"px")}function Z(a){for(var b=a.display,d=b.lineDiv.offsetTop,e=0;e<b.view.length;e++){var g,f=b.view[e];if(!f.hidden){if(c){var h=f.node.offsetTop+f.node.offsetHeight;g=h-d,d=h}else{var i=f.node.getBoundingClientRect();g=i.bottom-i.top}var j=f.line.height-g;if(2>g&&(g=uc(b)),(j>.001||-.001>j)&&(Gf(f.line,g),$(f.line),f.rest))for(var k=0;k<f.rest.length;k++)$(f.rest[k])}}}function $(a){if(a.widgets)for(var b=0;b<a.widgets.length;++b)a.widgets[b].height=a.widgets[b].node.offsetHeight}function _(a){for(var b=a.display,c={},d={},e=b.gutters.firstChild,f=0;e;e=e.nextSibling,++f)c[a.options.gutters[f]]=e.offsetLeft,d[a.options.gutters[f]]=e.offsetWidth;return{fixedPos:T(b),gutterTotalWidth:b.gutters.offsetWidth,gutterLeft:c,gutterWidth:d,wrapperWidth:b.wrapper.clientWidth}}function ab(a,b,c){function i(b){var c=b.nextSibling;return h&&r&&a.display.currentWheelTarget==b?b.style.display="none":b.parentNode.removeChild(b),c}for(var d=a.display,e=a.options.lineNumbers,f=d.lineDiv,g=f.firstChild,j=d.view,k=d.viewFrom,l=0;l<j.length;l++){var m=j[l];if(m.hidden);else if(m.node){for(;g!=m.node;)g=i(g);var o=e&&null!=b&&k>=b&&m.lineNumber;m.changes&&(Bg(m.changes,"gutter")>-1&&(o=!1),bb(a,m,k,c)),o&&(Ng(m.lineNumber),m.lineNumber.appendChild(document.createTextNode(S(a.options,k)))),g=m.node.nextSibling}else{var n=jb(a,m,k,c);f.insertBefore(n,g)}k+=m.size}for(;g;)g=i(g)}function bb(a,b,c,d){for(var e=0;e<b.changes.length;e++){var f=b.changes[e];"text"==f?fb(a,b):"gutter"==f?hb(a,b,c,d):"class"==f?gb(b):"widget"==f&&ib(b,d)}b.changes=null}function cb(a){return a.node==a.text&&(a.node=Lg("div",null,null,"position: relative"),a.text.parentNode&&a.text.parentNode.replaceChild(a.node,a.text),a.node.appendChild(a.text),c&&(a.node.style.zIndex=2)),a.node}function db(a){var b=a.bgClass?a.bgClass+" "+(a.line.bgClass||""):a.line.bgClass;if(b&&(b+=" CodeMirror-linebackground"),a.background)b?a.background.className=b:(a.background.parentNode.removeChild(a.background),a.background=null);else if(b){var c=cb(a);a.background=c.insertBefore(Lg("div",null,b),c.firstChild)}}function eb(a,b){var c=a.display.externalMeasured;return c&&c.line==b.line?(a.display.externalMeasured=null,b.measure=c.measure,c.built):mf(a,b)}function fb(a,b){var c=b.text.className,d=eb(a,b);b.text==b.node&&(b.node=d.pre),b.text.parentNode.replaceChild(d.pre,b.text),b.text=d.pre,d.bgClass!=b.bgClass||d.textClass!=b.textClass?(b.bgClass=d.bgClass,b.textClass=d.textClass,gb(b)):c&&(b.text.className=c)}function gb(a){db(a),a.line.wrapClass?cb(a).className=a.line.wrapClass:a.node!=a.text&&(a.node.className="");var b=a.textClass?a.textClass+" "+(a.line.textClass||""):a.line.textClass;a.text.className=b||""}function hb(a,b,c,d){b.gutter&&(b.node.removeChild(b.gutter),b.gutter=null);var e=b.line.gutterMarkers;if(a.options.lineNumbers||e){var f=cb(b),g=b.gutter=f.insertBefore(Lg("div",null,"CodeMirror-gutter-wrapper","position: absolute; left: "+(a.options.fixedGutter?d.fixedPos:-d.gutterTotalWidth)+"px"),b.text);if(!a.options.lineNumbers||e&&e["CodeMirror-linenumbers"]||(b.lineNumber=g.appendChild(Lg("div",S(a.options,c),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+d.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+a.display.lineNumInnerWidth+"px"))),e)for(var h=0;h<a.options.gutters.length;++h){var i=a.options.gutters[h],j=e.hasOwnProperty(i)&&e[i];j&&g.appendChild(Lg("div",[j],"CodeMirror-gutter-elt","left: "+d.gutterLeft[i]+"px; width: "+d.gutterWidth[i]+"px"))}}}function ib(a,b){a.alignable&&(a.alignable=null);for(var d,c=a.node.firstChild;c;c=d){var d=c.nextSibling;"CodeMirror-linewidget"==c.className&&a.node.removeChild(c)}kb(a,b)}function jb(a,b,c,d){var e=eb(a,b);return b.text=b.node=e.pre,e.bgClass&&(b.bgClass=e.bgClass),e.textClass&&(b.textClass=e.textClass),gb(b),hb(a,b,c,d),kb(b,d),b.node}function kb(a,b){if(lb(a.line,a,b,!0),a.rest)for(var c=0;c<a.rest.length;c++)lb(a.rest[c],a,b,!1)}function lb(a,b,c,d){if(a.widgets)for(var e=cb(b),f=0,g=a.widgets;f<g.length;++f){var h=g[f],i=Lg("div",[h.node],"CodeMirror-linewidget");h.handleMouseEvents||(i.ignoreEvents=!0),mb(h,i,b,c),d&&h.above?e.insertBefore(i,b.gutter||b.text):e.appendChild(i),jg(h,"redraw")}}function mb(a,b,c,d){if(a.noHScroll){(c.alignable||(c.alignable=[])).push(b);var e=d.wrapperWidth;b.style.left=d.fixedPos+"px",a.coverGutter||(e-=d.gutterTotalWidth,b.style.paddingLeft=d.gutterTotalWidth+"px"),b.style.width=e+"px"}a.coverGutter&&(b.style.zIndex=5,b.style.position="relative",a.noHScroll||(b.style.marginLeft=-d.gutterTotalWidth+"px"))}function pb(a){return nb(a.line,a.ch)}function qb(a,b){return ob(a,b)<0?b:a}function rb(a,b){return ob(a,b)<0?a:b}function sb(a,b){this.ranges=a,this.primIndex=b}function tb(a,b){this.anchor=a,this.head=b}function ub(a,b){var c=a[b];a.sort(function(a,b){return ob(a.from(),b.from())}),b=Bg(a,c);for(var d=1;d<a.length;d++){var e=a[d],f=a[d-1];if(ob(f.to(),e.from())>=0){var g=rb(f.from(),e.from()),h=qb(f.to(),e.to()),i=f.empty()?e.from()==e.head:f.from()==f.head;b>=d&&--b,a.splice(--d,2,new tb(i?h:g,i?g:h))}}return new sb(a,b)}function vb(a,b){return new sb([new tb(a,b||a)],0)}function wb(a,b){return Math.max(a.first,Math.min(b,a.first+a.size-1))}function xb(a,b){if(b.line<a.first)return nb(a.first,0);var c=a.first+a.size-1;return b.line>c?nb(c,Df(a,c).text.length):yb(b,Df(a,b.line).text.length)}function yb(a,b){var c=a.ch;return null==c||c>b?nb(a.line,b):0>c?nb(a.line,0):a}function zb(a,b){return b>=a.first&&b<a.first+a.size}function Ab(a,b){for(var c=[],d=0;d<b.length;d++)c[d]=xb(a,b[d]);return c}function Bb(a,b,c,d){if(a.cm&&a.cm.display.shift||a.extend){var e=b.anchor;if(d){var f=ob(c,e)<0;f!=ob(d,e)<0?(e=c,c=d):f!=ob(c,d)<0&&(c=d)}return new tb(e,c)}return new tb(d||c,c)}function Cb(a,b,c,d){Ib(a,new sb([Bb(a,a.sel.primary(),b,c)],0),d)}function Db(a,b,c){for(var d=[],e=0;e<a.sel.ranges.length;e++)d[e]=Bb(a,a.sel.ranges[e],b[e],null);var f=ub(d,a.sel.primIndex);Ib(a,f,c)}function Eb(a,b,c,d){var e=a.sel.ranges.slice(0);e[b]=c,Ib(a,ub(e,a.sel.primIndex),d)}function Fb(a,b,c,d){Ib(a,vb(b,c),d)}function Gb(a,b){var c={ranges:b.ranges,update:function(b){this.ranges=[];for(var c=0;c<b.length;c++)this.ranges[c]=new tb(xb(a,b[c].anchor),xb(a,b[c].head))}};return gg(a,"beforeSelectionChange",a,c),a.cm&&gg(a.cm,"beforeSelectionChange",a.cm,c),c.ranges!=b.ranges?ub(c.ranges,c.ranges.length-1):b}function Hb(a,b,c){var d=a.history.done,e=zg(d);e&&e.ranges?(d[d.length-1]=b,Jb(a,b,c)):Ib(a,b,c)}function Ib(a,b,c){Jb(a,b,c),Rf(a,a.sel,a.cm?a.cm.curOp.id:0/0,c)}function Jb(a,b,c){(ng(a,"beforeSelectionChange")||a.cm&&ng(a.cm,"beforeSelectionChange"))&&(b=Gb(a,b));var d=ob(b.primary().head,a.sel.primary().head)<0?-1:1;Kb(a,Mb(a,b,d,!0)),c&&c.scroll===!1||!a.cm||Rd(a.cm)}function Kb(a,b){b.equals(a.sel)||(a.sel=b,a.cm&&(a.cm.curOp.updateInput=a.cm.curOp.selectionChanged=!0,mg(a.cm)),jg(a,"cursorActivity",a))}function Lb(a){Kb(a,Mb(a,a.sel,null,!1),rg)}function Mb(a,b,c,d){for(var e,f=0;f<b.ranges.length;f++){var g=b.ranges[f],h=Nb(a,g.anchor,c,d),i=Nb(a,g.head,c,d);(e||h!=g.anchor||i!=g.head)&&(e||(e=b.ranges.slice(0,f)),e[f]=new tb(h,i))}return e?ub(e,b.primIndex):b}function Nb(a,b,c,d){var e=!1,f=b,g=c||1;a.cantEdit=!1;a:for(;;){var h=Df(a,f.line);if(h.markedSpans)for(var i=0;i<h.markedSpans.length;++i){var j=h.markedSpans[i],k=j.marker;if((null==j.from||(k.inclusiveLeft?j.from<=f.ch:j.from<f.ch))&&(null==j.to||(k.inclusiveRight?j.to>=f.ch:j.to>f.ch))){if(d&&(gg(k,"beforeCursorEnter"),k.explicitlyCleared)){if(h.markedSpans){--i;continue}break}if(!k.atomic)continue;var l=k.find(0>g?-1:1);if(0==ob(l,f)&&(l.ch+=g,l.ch<0?l=l.line>a.first?xb(a,nb(l.line-1)):null:l.ch>h.text.length&&(l=l.line<a.first+a.size-1?nb(l.line+1,0):null),!l)){if(e)return d?(a.cantEdit=!0,nb(a.first,0)):Nb(a,b,c,!0);e=!0,l=b,g=-g}f=l;continue a}}return f}}function Ob(a){for(var b=a.display,c=a.doc,d=document.createDocumentFragment(),e=document.createDocumentFragment(),f=0;f<c.sel.ranges.length;f++){var g=c.sel.ranges[f],h=g.empty();(h||a.options.showCursorWhenSelecting)&&Pb(a,g,d),h||Qb(a,g,e)}if(a.options.moveInputWithCursor){var i=oc(a,c.sel.primary().head,"div"),j=b.wrapper.getBoundingClientRect(),k=b.lineDiv.getBoundingClientRect(),l=Math.max(0,Math.min(b.wrapper.clientHeight-10,i.top+k.top-j.top)),m=Math.max(0,Math.min(b.wrapper.clientWidth-10,i.left+k.left-j.left));b.inputDiv.style.top=l+"px",b.inputDiv.style.left=m+"px"}Og(b.cursorDiv,d),Og(b.selectionDiv,e)}function Pb(a,b,c){var d=oc(a,b.head,"div"),e=c.appendChild(Lg("div","\xa0","CodeMirror-cursor"));if(e.style.left=d.left+"px",e.style.top=d.top+"px",e.style.height=Math.max(0,d.bottom-d.top)*a.options.cursorHeight+"px",d.other){var f=c.appendChild(Lg("div","\xa0","CodeMirror-cursor CodeMirror-secondarycursor"));f.style.display="",f.style.left=d.other.left+"px",f.style.top=d.other.top+"px",f.style.height=.85*(d.other.bottom-d.other.top)+"px"}}function Qb(a,b,c){function j(a,b,c,d){0>b&&(b=0),b=Math.round(b),d=Math.round(d),f.appendChild(Lg("div",null,"CodeMirror-selected","position: absolute; left: "+a+"px; top: "+b+"px; width: "+(null==c?i-a:c)+"px; height: "+(d-b)+"px"))}function k(b,c,d){function m(c,d){return nc(a,nb(b,c),"div",f,d)}var k,l,f=Df(e,b),g=f.text.length;return ih(Kf(f),c||0,null==d?g:d,function(a,b,e){var n,o,p,f=m(a,"left");if(a==b)n=f,o=p=f.left;else{if(n=m(b-1,"right"),"rtl"==e){var q=f;f=n,n=q}o=f.left,p=n.right}null==c&&0==a&&(o=h),n.top-f.top>3&&(j(o,f.top,null,f.bottom),o=h,f.bottom<n.top&&j(o,f.bottom,null,n.top)),null==d&&b==g&&(p=i),(!k||f.top<k.top||f.top==k.top&&f.left<k.left)&&(k=f),(!l||n.bottom>l.bottom||n.bottom==l.bottom&&n.right>l.right)&&(l=n),h+1>o&&(o=h),j(o,n.top,p-o,n.bottom)}),{start:k,end:l}}var d=a.display,e=a.doc,f=document.createDocumentFragment(),g=Yb(a.display),h=g.left,i=d.lineSpace.offsetWidth-g.right,l=b.from(),m=b.to();if(l.line==m.line)k(l.line,l.ch,m.ch);else{var n=Df(e,l.line),o=Df(e,m.line),p=Qe(n)==Qe(o),q=k(l.line,l.ch,p?n.text.length+1:null).end,r=k(m.line,p?0:null,m.ch).start;p&&(q.top<r.top-2?(j(q.right,q.top,null,q.bottom),j(h,r.top,r.left,r.bottom)):j(q.right,q.top,r.left-q.right,q.bottom)),q.bottom<r.top&&j(h,q.bottom,null,r.top)}c.appendChild(f)}function Rb(a){if(a.state.focused){var b=a.display;clearInterval(b.blinker);var c=!0;b.cursorDiv.style.visibility="",a.options.cursorBlinkRate>0&&(b.blinker=setInterval(function(){b.cursorDiv.style.visibility=(c=!c)?"":"hidden"},a.options.cursorBlinkRate))}}function Sb(a,b){a.doc.mode.startState&&a.doc.frontier<a.display.viewTo&&a.state.highlight.set(b,Fg(Tb,a))}function Tb(a){var b=a.doc;if(b.frontier<b.first&&(b.frontier=b.first),!(b.frontier>=a.display.viewTo)){var c=+new Date+a.options.workTime,d=ge(b.mode,Vb(a,b.frontier));zc(a,function(){b.iter(b.frontier,Math.min(b.first+b.size,a.display.viewTo+500),function(e){if(b.frontier>=a.display.viewFrom){var f=e.styles,g=ff(a,e,d,!0);e.styles=g.styles,g.classes?e.styleClasses=g.classes:e.styleClasses&&(e.styleClasses=null);for(var h=!f||f.length!=e.styles.length,i=0;!h&&i<f.length;++i)h=f[i]!=e.styles[i];h&&Gc(a,b.frontier,"text"),e.stateAfter=ge(b.mode,d)}else hf(a,e.text,d),e.stateAfter=0==b.frontier%5?ge(b.mode,d):null;return++b.frontier,+new Date>c?(Sb(a,a.options.workDelay),!0):void 0})})}}function Ub(a,b,c){for(var d,e,f=a.doc,g=c?-1:b-(a.doc.mode.innerMode?1e3:100),h=b;h>g;--h){if(h<=f.first)return f.first;var i=Df(f,h-1);if(i.stateAfter&&(!c||h<=f.frontier))return h;var j=vg(i.text,null,a.options.tabSize);(null==e||d>j)&&(e=h-1,d=j)}return e}function Vb(a,b,c){var d=a.doc,e=a.display;if(!d.mode.startState)return!0;var f=Ub(a,b,c),g=f>d.first&&Df(d,f-1).stateAfter;return g=g?ge(d.mode,g):he(d.mode),d.iter(f,b,function(c){hf(a,c.text,g);var h=f==b-1||0==f%5||f>=e.viewFrom&&f<e.viewTo;c.stateAfter=h?ge(d.mode,g):null,++f}),c&&(d.frontier=f),g}function Wb(a){return a.lineSpace.offsetTop}function Xb(a){return a.mover.offsetHeight-a.lineSpace.offsetHeight}function Yb(a){if(a.cachedPaddingH)return a.cachedPaddingH;var b=Og(a.measure,Lg("pre","x")),c=window.getComputedStyle?window.getComputedStyle(b):b.currentStyle,d={left:parseInt(c.paddingLeft),right:parseInt(c.paddingRight)};return isNaN(d.left)||isNaN(d.right)||(a.cachedPaddingH=d),d}function Zb(a,b,c){var d=a.options.lineWrapping,e=d&&a.display.scroller.clientWidth;if(!b.measure.heights||d&&b.measure.width!=e){var f=b.measure.heights=[];if(d){b.measure.width=e;for(var g=b.text.firstChild.getClientRects(),h=0;h<g.length-1;h++){var i=g[h],j=g[h+1];Math.abs(i.bottom-j.bottom)>2&&f.push((i.bottom+j.top)/2-c.top)}}f.push(c.bottom-c.top)}}function $b(a,b,c){if(a.line==b)return{map:a.measure.map,cache:a.measure.cache};for(var d=0;d<a.rest.length;d++)if(a.rest[d]==b)return{map:a.measure.maps[d],cache:a.measure.caches[d]};for(var d=0;d<a.rest.length;d++)if(Hf(a.rest[d])>c)return{map:a.measure.maps[d],cache:a.measure.caches[d],before:!0}}function _b(a,b){b=Qe(b);var c=Hf(b),d=a.display.externalMeasured=new Dc(a.doc,b,c);d.lineN=c;var e=d.built=mf(a,d);return d.text=e.pre,Og(a.display.lineMeasure,e.pre),d}function ac(a,b,c,d){return dc(a,cc(a,b),c,d)}function bc(a,b){if(b>=a.display.viewFrom&&b<a.display.viewTo)return a.display.view[Ic(a,b)];var c=a.display.externalMeasured;return c&&b>=c.lineN&&b<c.lineN+c.size?c:void 0}function cc(a,b){var c=Hf(b),d=bc(a,c);d&&!d.text?d=null:d&&d.changes&&bb(a,d,c,_(a)),d||(d=_b(a,b));var e=$b(d,b,c);return{line:b,view:d,rect:null,map:e.map,cache:e.cache,before:e.before,hasHeights:!1}}function dc(a,b,c,d){b.before&&(c=-1);var f,e=c+(d||"");return b.cache.hasOwnProperty(e)?f=b.cache[e]:(b.rect||(b.rect=b.view.text.getBoundingClientRect()),b.hasHeights||(Zb(a,b.view,b.rect),b.hasHeights=!0),f=fc(a,b,c,d),f.bogus||(b.cache[e]=f)),{left:f.left,right:f.right,top:f.top,bottom:f.bottom}}function fc(a,b,c,e){for(var h,i,j,k,f=b.map,l=0;l<f.length;l+=3){var m=f[l],n=f[l+1];if(m>c?(i=0,j=1,k="left"):n>c?(i=c-m,j=i+1):(l==f.length-3||c==n&&f[l+3]>c)&&(j=n-m,i=j-1,c>=n&&(k="right")),null!=i){if(h=f[l+2],m==n&&e==(h.insertLeft?"left":"right")&&(k=e),"left"==e&&0==i)for(;l&&f[l-2]==f[l-3]&&f[l-1].insertLeft;)h=f[(l-=3)+2],k="left";if("right"==e&&i==n-m)for(;l<f.length-3&&f[l+3]==f[l+4]&&!f[l+5].insertLeft;)h=f[(l+=3)+2],k="right";break}}var o;if(3==h.nodeType){for(;i&&Kg(b.line.text.charAt(m+i));)--i;for(;n>m+j&&Kg(b.line.text.charAt(m+j));)++j;if(d&&0==i&&j==n-m)o=h.parentNode.getBoundingClientRect();else if(g&&a.options.lineWrapping){var p=Mg(h,i,j).getClientRects();o=p.length?p["right"==e?p.length-1:0]:ec}else o=Mg(h,i,j).getBoundingClientRect()||ec}else{i>0&&(k=e="right");var p;o=a.options.lineWrapping&&(p=h.getClientRects()).length>1?p["right"==e?p.length-1:0]:h.getBoundingClientRect()}if(d&&!i&&(!o||!o.left&&!o.right)){var q=h.parentNode.getClientRects()[0];o=q?{left:q.left,right:q.left+vc(a.display),top:q.top,bottom:q.bottom}:ec}for(var r,s=(o.bottom+o.top)/2-b.rect.top,t=b.view.measure.heights,l=0;l<t.length-1&&!(s<t[l]);l++);r=l?t[l-1]:0,s=t[l];var u={left:("right"==k?o.right:o.left)-b.rect.left,right:("left"==k?o.left:o.right)-b.rect.left,top:r,bottom:s};return o.left||o.right||(u.bogus=!0),u}function gc(a){if(a.measure&&(a.measure.cache={},a.measure.heights=null,a.rest))for(var b=0;b<a.rest.length;b++)a.measure.caches[b]={}}function hc(a){a.display.externalMeasure=null,Ng(a.display.lineMeasure);for(var b=0;b<a.display.view.length;b++)gc(a.display.view[b])}function ic(a){hc(a),a.display.cachedCharWidth=a.display.cachedTextHeight=a.display.cachedPaddingH=null,a.options.lineWrapping||(a.display.maxLineChanged=!0),a.display.lineNumChars=null}function jc(){return window.pageXOffset||(document.documentElement||document.body).scrollLeft}function kc(){return window.pageYOffset||(document.documentElement||document.body).scrollTop}function lc(a,b,c,d){if(b.widgets)for(var e=0;e<b.widgets.length;++e)if(b.widgets[e].above){var f=Ye(b.widgets[e]);c.top+=f,c.bottom+=f}if("line"==d)return c;d||(d="local");var g=Jf(b);if("local"==d?g+=Wb(a.display):g-=a.display.viewOffset,"page"==d||"window"==d){var h=a.display.lineSpace.getBoundingClientRect();g+=h.top+("window"==d?0:kc());var i=h.left+("window"==d?0:jc());c.left+=i,c.right+=i}return c.top+=g,c.bottom+=g,c}function mc(a,b,c){if("div"==c)return b;var d=b.left,e=b.top;if("page"==c)d-=jc(),e-=kc();else if("local"==c||!c){var f=a.display.sizer.getBoundingClientRect();d+=f.left,e+=f.top}var g=a.display.lineSpace.getBoundingClientRect();return{left:d-g.left,top:e-g.top}}function nc(a,b,c,d,e){return d||(d=Df(a.doc,b.line)),lc(a,d,ac(a,d,b.ch,e),c)}function oc(a,b,c,d,e){function f(b,f){var g=dc(a,e,b,f?"right":"left");return f?g.left=g.right:g.right=g.left,lc(a,d,g,c)}function g(a,b){var c=h[b],d=c.level%2;return a==jh(c)&&b&&c.level<h[b-1].level?(c=h[--b],a=kh(c)-(c.level%2?0:1),d=!0):a==kh(c)&&b<h.length-1&&c.level<h[b+1].level&&(c=h[++b],a=jh(c)-c.level%2,d=!1),d&&a==c.to&&a>c.from?f(a-1):f(a,d)}d=d||Df(a.doc,b.line),e||(e=cc(a,d));var h=Kf(d),i=b.ch;if(!h)return f(i);var j=rh(h,i),k=g(i,j);return null!=qh&&(k.other=g(i,qh)),k}function pc(a,b){var c=0,b=xb(a.doc,b);a.options.lineWrapping||(c=vc(a.display)*b.ch);var d=Df(a.doc,b.line),e=Jf(d)+Wb(a.display);return{left:c,right:c,top:e,bottom:e+d.height}}function qc(a,b,c,d){var e=nb(a,b);return e.xRel=d,c&&(e.outside=!0),e}function rc(a,b,c){var d=a.doc;if(c+=a.display.viewOffset,0>c)return qc(d.first,0,!0,-1);var e=If(d,c),f=d.first+d.size-1;if(e>f)return qc(d.first+d.size-1,Df(d,f).text.length,!0,1);0>b&&(b=0);for(var g=Df(d,e);;){var h=sc(a,g,e,b,c),i=Oe(g),j=i&&i.find(0,!0);if(!i||!(h.ch>j.from.ch||h.ch==j.from.ch&&h.xRel>0))return h;e=Hf(g=j.to.line)}}function sc(a,b,c,d,e){function j(d){var e=oc(a,nb(c,d),"line",b,i);return g=!0,f>e.bottom?e.left-h:f<e.top?e.left+h:(g=!1,e.left)}var f=e-Jf(b),g=!1,h=2*a.display.wrapper.clientWidth,i=cc(a,b),k=Kf(b),l=b.text.length,m=lh(b),n=mh(b),o=j(m),p=g,q=j(n),r=g;if(d>q)return qc(c,n,r,1);for(;;){if(k?n==m||n==th(b,m,1):1>=n-m){for(var s=o>d||q-d>=d-o?m:n,t=d-(s==m?o:q);Kg(b.text.charAt(s));)++s;var u=qc(c,s,s==m?p:r,-1>t?-1:t>1?1:0);return u}var v=Math.ceil(l/2),w=m+v;if(k){w=m;for(var x=0;v>x;++x)w=th(b,w,1)}var y=j(w);y>d?(n=w,q=y,(r=g)&&(q+=1e3),l=v):(m=w,o=y,p=g,l-=v)}}function uc(a){if(null!=a.cachedTextHeight)return a.cachedTextHeight;if(null==tc){tc=Lg("pre");for(var b=0;49>b;++b)tc.appendChild(document.createTextNode("x")),tc.appendChild(Lg("br"));tc.appendChild(document.createTextNode("x"))}Og(a.measure,tc);var c=tc.offsetHeight/50;return c>3&&(a.cachedTextHeight=c),Ng(a.measure),c||1}function vc(a){if(null!=a.cachedCharWidth)return a.cachedCharWidth;var b=Lg("span","xxxxxxxxxx"),c=Lg("pre",[b]);Og(a.measure,c);var d=b.getBoundingClientRect(),e=(d.right-d.left)/10;return e>2&&(a.cachedCharWidth=e),e||10}function xc(a){a.curOp={viewChanged:!1,startHeight:a.doc.height,forceUpdate:!1,updateInput:null,typing:!1,changeObjs:null,cursorActivityHandlers:null,selectionChanged:!1,updateMaxLine:!1,scrollLeft:null,scrollTop:null,scrollToPos:null,id:++wc},ig++||(hg=[])}function yc(a){var b=a.curOp,c=a.doc,d=a.display;if(a.curOp=null,b.updateMaxLine&&L(a),b.viewChanged||b.forceUpdate||null!=b.scrollTop||b.scrollToPos&&(b.scrollToPos.from.line<d.viewFrom||b.scrollToPos.to.line>=d.viewTo)||d.maxLineChanged&&a.options.lineWrapping){var e=U(a,{top:b.scrollTop,ensure:b.scrollToPos},b.forceUpdate);a.display.scroller.offsetHeight&&(a.doc.scrollTop=a.display.scroller.scrollTop)}if(!e&&b.selectionChanged&&Ob(a),e||b.startHeight==a.doc.height||O(a),null!=b.scrollTop&&d.scroller.scrollTop!=b.scrollTop){var f=Math.max(0,Math.min(d.scroller.scrollHeight-d.scroller.clientHeight,b.scrollTop));d.scroller.scrollTop=d.scrollbarV.scrollTop=c.scrollTop=f}if(null!=b.scrollLeft&&d.scroller.scrollLeft!=b.scrollLeft){var g=Math.max(0,Math.min(d.scroller.scrollWidth-d.scroller.clientWidth,b.scrollLeft));d.scroller.scrollLeft=d.scrollbarH.scrollLeft=c.scrollLeft=g,Q(a)}if(b.scrollToPos){var h=Nd(a,xb(a.doc,b.scrollToPos.from),xb(a.doc,b.scrollToPos.to),b.scrollToPos.margin);b.scrollToPos.isCursor&&a.state.focused&&Md(a,h)}b.selectionChanged&&Rb(a),a.state.focused&&b.updateInput&&Pc(a,b.typing);var i=b.maybeHiddenMarkers,j=b.maybeUnhiddenMarkers;if(i)for(var k=0;k<i.length;++k)i[k].lines.length||gg(i[k],"hide");if(j)for(var k=0;k<j.length;++k)j[k].lines.length&&gg(j[k],"unhide");var l;if(--ig||(l=hg,hg=null),b.changeObjs&&gg(a,"changes",a,b.changeObjs),l)for(var k=0;k<l.length;++k)l[k]();if(b.cursorActivityHandlers)for(var k=0;k<b.cursorActivityHandlers.length;k++)b.cursorActivityHandlers[k](a)}function zc(a,b){if(a.curOp)return b();xc(a);try{return b()}finally{yc(a)}}function Ac(a,b){return function(){if(a.curOp)return b.apply(a,arguments);xc(a);try{return b.apply(a,arguments)}finally{yc(a)}}}function Bc(a){return function(){if(this.curOp)return a.apply(this,arguments);xc(this);try{return a.apply(this,arguments)}finally{yc(this)}}}function Cc(a){return function(){var b=this.cm;if(!b||b.curOp)return a.apply(this,arguments);xc(b);try{return a.apply(this,arguments)}finally{yc(b)
}}}function Dc(a,b,c){this.line=b,this.rest=Re(b),this.size=this.rest?Hf(zg(this.rest))-c+1:1,this.node=this.text=null,this.hidden=Ue(a,b)}function Ec(a,b,c){for(var e,d=[],f=b;c>f;f=e){var g=new Dc(a.doc,Df(a.doc,f),f);e=f+g.size,d.push(g)}return d}function Fc(a,b,c,d){null==b&&(b=a.doc.first),null==c&&(c=a.doc.first+a.doc.size),d||(d=0);var e=a.display;if(d&&c<e.viewTo&&(null==e.updateLineNumbers||e.updateLineNumbers>b)&&(e.updateLineNumbers=b),a.curOp.viewChanged=!0,b>=e.viewTo)x&&Se(a.doc,b)<e.viewTo&&Hc(a);else if(c<=e.viewFrom)x&&Te(a.doc,c+d)>e.viewFrom?Hc(a):(e.viewFrom+=d,e.viewTo+=d);else if(b<=e.viewFrom&&c>=e.viewTo)Hc(a);else if(b<=e.viewFrom){var f=Jc(a,c,c+d,1);f?(e.view=e.view.slice(f.index),e.viewFrom=f.lineN,e.viewTo+=d):Hc(a)}else if(c>=e.viewTo){var f=Jc(a,b,b,-1);f?(e.view=e.view.slice(0,f.index),e.viewTo=f.lineN):Hc(a)}else{var g=Jc(a,b,b,-1),h=Jc(a,c,c+d,1);g&&h?(e.view=e.view.slice(0,g.index).concat(Ec(a,g.lineN,h.lineN)).concat(e.view.slice(h.index)),e.viewTo+=d):Hc(a)}var i=e.externalMeasured;i&&(c<i.lineN?i.lineN+=d:b<i.lineN+i.size&&(e.externalMeasured=null))}function Gc(a,b,c){a.curOp.viewChanged=!0;var d=a.display,e=a.display.externalMeasured;if(e&&b>=e.lineN&&b<e.lineN+e.size&&(d.externalMeasured=null),!(b<d.viewFrom||b>=d.viewTo)){var f=d.view[Ic(a,b)];if(null!=f.node){var g=f.changes||(f.changes=[]);-1==Bg(g,c)&&g.push(c)}}}function Hc(a){a.display.viewFrom=a.display.viewTo=a.doc.first,a.display.view=[],a.display.viewOffset=0}function Ic(a,b){if(b>=a.display.viewTo)return null;if(b-=a.display.viewFrom,0>b)return null;for(var c=a.display.view,d=0;d<c.length;d++)if(b-=c[d].size,0>b)return d}function Jc(a,b,c,d){var f,e=Ic(a,b),g=a.display.view;if(!x)return{index:e,lineN:c};for(var h=0,i=a.display.viewFrom;e>h;h++)i+=g[h].size;if(i!=b){if(d>0){if(e==g.length-1)return null;f=i+g[e].size-b,e++}else f=i-b;b+=f,c+=f}for(;Se(a.doc,c)!=c;){if(e==(0>d?0:g.length-1))return null;c+=d*g[e-(0>d?1:0)].size,e+=d}return{index:e,lineN:c}}function Kc(a,b,c){var d=a.display,e=d.view;0==e.length||b>=d.viewTo||c<=d.viewFrom?(d.view=Ec(a,b,c),d.viewFrom=b):(d.viewFrom>b?d.view=Ec(a,b,d.viewFrom).concat(d.view):d.viewFrom<b&&(d.view=d.view.slice(Ic(a,b))),d.viewFrom=b,d.viewTo<c?d.view=d.view.concat(Ec(a,d.viewTo,c)):d.viewTo>c&&(d.view=d.view.slice(0,Ic(a,c)))),d.viewTo=c}function Lc(a){for(var b=a.display.view,c=0,d=0;d<b.length;d++){var e=b[d];e.hidden||e.node&&!e.changes||++c}return c}function Mc(a){a.display.pollingFast||a.display.poll.set(a.options.pollInterval,function(){Oc(a),a.state.focused&&Mc(a)})}function Nc(a){function c(){var d=Oc(a);d||b?(a.display.pollingFast=!1,Mc(a)):(b=!0,a.display.poll.set(60,c))}var b=!1;a.display.pollingFast=!0,a.display.poll.set(20,c)}function Oc(a){var b=a.display.input,c=a.display.prevInput,e=a.doc;if(!a.state.focused||fh(b)&&!c||Sc(a)||a.options.disableInput)return!1;a.state.pasteIncoming&&a.state.fakedLastChar&&(b.value=b.value.substring(0,b.value.length-1),a.state.fakedLastChar=!1);var f=b.value;if(f==c&&!a.somethingSelected())return!1;if(g&&!d&&a.display.inputHasSelection===f)return Pc(a),!1;var h=!a.curOp;h&&xc(a),a.display.shift=!1,8203!=f.charCodeAt(0)||e.sel!=a.display.selForContextMenu||c||(c="\u200b");for(var i=0,j=Math.min(c.length,f.length);j>i&&c.charCodeAt(i)==f.charCodeAt(i);)++i;for(var k=f.slice(i),l=eh(k),m=a.state.pasteIncoming&&l.length>1&&e.sel.ranges.length==l.length,n=e.sel.ranges.length-1;n>=0;n--){var o=e.sel.ranges[n],p=o.from(),q=o.to();i<c.length?p=nb(p.line,p.ch-(c.length-i)):a.state.overwrite&&o.empty()&&!a.state.pasteIncoming&&(q=nb(q.line,Math.min(Df(e,q.line).text.length,q.ch+zg(l).length)));var r=a.curOp.updateInput,s={from:p,to:q,text:m?[l[n]]:l,origin:a.state.pasteIncoming?"paste":a.state.cutIncoming?"cut":"+input"};if(Fd(a.doc,s),jg(a,"inputRead",a,s),k&&!a.state.pasteIncoming&&a.options.electricChars&&a.options.smartIndent&&o.head.ch<100&&(!n||e.sel.ranges[n-1].head.line!=o.head.line)){var t=a.getModeAt(o.head);if(t.electricChars){for(var u=0;u<t.electricChars.length;u++)if(k.indexOf(t.electricChars.charAt(u))>-1){Td(a,o.head.line,"smart");break}}else if(t.electricInput){var v=zd(s);t.electricInput.test(Df(e,v.line).text.slice(0,v.ch))&&Td(a,o.head.line,"smart")}}}return Rd(a),a.curOp.updateInput=r,a.curOp.typing=!0,f.length>1e3||f.indexOf("\n")>-1?b.value=a.display.prevInput="":a.display.prevInput=f,h&&yc(a),a.state.pasteIncoming=a.state.cutIncoming=!1,!0}function Pc(a,b){var c,e,f=a.doc;if(a.somethingSelected()){a.display.prevInput="";var h=f.sel.primary();c=gh&&(h.to().line-h.from().line>100||(e=a.getSelection()).length>1e3);var i=c?"-":e||a.getSelection();a.display.input.value=i,a.state.focused&&Ag(a.display.input),g&&!d&&(a.display.inputHasSelection=i)}else b||(a.display.prevInput=a.display.input.value="",g&&!d&&(a.display.inputHasSelection=null));a.display.inaccurateSelection=c}function Qc(a){"nocursor"==a.options.readOnly||q&&Qg()==a.display.input||a.display.input.focus()}function Rc(a){a.state.focused||(Qc(a),vd(a))}function Sc(a){return a.options.readOnly||a.doc.cantEdit}function Tc(a){function e(){a.state.focused&&setTimeout(Fg(Qc,a),0)}function f(b){lg(a,b)||bg(b)}function i(b){if(a.somethingSelected())c.inaccurateSelection&&(c.prevInput="",c.inaccurateSelection=!1,c.input.value=a.getSelection(),Ag(c.input));else{for(var d="",e=[],f=0;f<a.doc.sel.ranges.length;f++){var g=a.doc.sel.ranges[f].head.line,h={anchor:nb(g,0),head:nb(g+1,0)};e.push(h),d+=a.getRange(h.anchor,h.head)}"cut"==b.type?a.setSelections(e,null,rg):(c.prevInput="",c.input.value=d,Ag(c.input))}"cut"==b.type&&(a.state.cutIncoming=!0)}var c=a.display;eg(c.scroller,"mousedown",Ac(a,Xc)),b?eg(c.scroller,"dblclick",Ac(a,function(b){if(!lg(a,b)){var c=Wc(a,b);if(c&&!cd(a,b)&&!Vc(a.display,b)){$f(b);var d=Yd(a.doc,c);Cb(a.doc,d.anchor,d.head)}}})):eg(c.scroller,"dblclick",function(b){lg(a,b)||$f(b)}),eg(c.lineSpace,"selectstart",function(a){Vc(c,a)||$f(a)}),v||eg(c.scroller,"contextmenu",function(b){xd(a,b)}),eg(c.scroller,"scroll",function(){c.scroller.clientHeight&&(gd(a,c.scroller.scrollTop),hd(a,c.scroller.scrollLeft,!0),gg(a,"scroll",a))}),eg(c.scrollbarV,"scroll",function(){c.scroller.clientHeight&&gd(a,c.scrollbarV.scrollTop)}),eg(c.scrollbarH,"scroll",function(){c.scroller.clientHeight&&hd(a,c.scrollbarH.scrollLeft)}),eg(c.scroller,"mousewheel",function(b){kd(a,b)}),eg(c.scroller,"DOMMouseScroll",function(b){kd(a,b)}),eg(c.scrollbarH,"mousedown",e),eg(c.scrollbarV,"mousedown",e),eg(c.wrapper,"scroll",function(){c.wrapper.scrollTop=c.wrapper.scrollLeft=0}),eg(c.input,"keyup",Ac(a,td)),eg(c.input,"input",function(){g&&!d&&a.display.inputHasSelection&&(a.display.inputHasSelection=null),Nc(a)}),eg(c.input,"keydown",Ac(a,rd)),eg(c.input,"keypress",Ac(a,ud)),eg(c.input,"focus",Fg(vd,a)),eg(c.input,"blur",Fg(wd,a)),a.options.dragDrop&&(eg(c.scroller,"dragstart",function(b){fd(a,b)}),eg(c.scroller,"dragenter",f),eg(c.scroller,"dragover",f),eg(c.scroller,"drop",Ac(a,ed))),eg(c.scroller,"paste",function(b){Vc(c,b)||(a.state.pasteIncoming=!0,Qc(a),Nc(a))}),eg(c.input,"paste",function(){if(h&&!a.state.fakedLastChar&&!(new Date-a.state.lastMiddleDown<200)){var b=c.input.selectionStart,d=c.input.selectionEnd;c.input.value+="$",c.input.selectionStart=b,c.input.selectionEnd=d,a.state.fakedLastChar=!0}a.state.pasteIncoming=!0,Nc(a)}),eg(c.input,"cut",i),eg(c.input,"copy",i),m&&eg(c.sizer,"mouseup",function(){Qg()==c.input&&c.input.blur(),Qc(a)})}function Uc(a){var b=a.display;b.cachedCharWidth=b.cachedTextHeight=b.cachedPaddingH=null,a.setSize()}function Vc(a,b){for(var c=cg(b);c!=a.wrapper;c=c.parentNode)if(!c||c.ignoreEvents||c.parentNode==a.sizer&&c!=a.mover)return!0}function Wc(a,b,c,d){var e=a.display;if(!c){var f=cg(b);if(f==e.scrollbarH||f==e.scrollbarV||f==e.scrollbarFiller||f==e.gutterFiller)return null}var g,h,i=e.lineSpace.getBoundingClientRect();try{g=b.clientX-i.left,h=b.clientY-i.top}catch(b){return null}var k,j=rc(a,g,h);if(d&&1==j.xRel&&(k=Df(a.doc,j.line).text).length==j.ch){var l=vg(k,k.length,a.options.tabSize)-k.length;j=nb(j.line,Math.max(0,Math.round((g-Yb(a.display).left)/vc(a.display))-l))}return j}function Xc(a){if(!lg(this,a)){var b=this,c=b.display;if(c.shift=a.shiftKey,Vc(c,a))return h||(c.scroller.draggable=!1,setTimeout(function(){c.scroller.draggable=!0},100)),void 0;if(!cd(b,a)){var d=Wc(b,a);switch(window.focus(),dg(a)){case 1:d?$c(b,a,d):cg(a)==c.scroller&&$f(a);break;case 2:h&&(b.state.lastMiddleDown=+new Date),d&&Cb(b.doc,d),setTimeout(Fg(Qc,b),20),$f(a);break;case 3:v&&xd(b,a)}}}}function $c(a,b,c){setTimeout(Fg(Rc,a),0);var e,d=+new Date;Zc&&Zc.time>d-400&&0==ob(Zc.pos,c)?e="triple":Yc&&Yc.time>d-400&&0==ob(Yc.pos,c)?(e="double",Zc={time:d,pos:c}):(e="single",Yc={time:d,pos:c});var f=a.doc.sel,g=r?b.metaKey:b.ctrlKey;a.options.dragDrop&&Zg&&!g&&!Sc(a)&&"single"==e&&f.contains(c)>-1&&f.somethingSelected()?_c(a,b,c):ad(a,b,c,e,g)}function _c(a,c,e){var f=a.display,g=Ac(a,function(i){h&&(f.scroller.draggable=!1),a.state.draggingText=!1,fg(document,"mouseup",g),fg(f.scroller,"drop",g),Math.abs(c.clientX-i.clientX)+Math.abs(c.clientY-i.clientY)<10&&($f(i),Cb(a.doc,e),Qc(a),b&&!d&&setTimeout(function(){document.body.focus(),Qc(a)},20))});h&&(f.scroller.draggable=!0),a.state.draggingText=g,f.scroller.dragDrop&&f.scroller.dragDrop(),eg(document,"mouseup",g),eg(f.scroller,"drop",g)}function ad(a,b,c,d,f){function p(b){if(0!=ob(o,b))if(o=b,"rect"==d){for(var e=[],f=a.options.tabSize,g=vg(Df(i,c.line).text,c.ch,f),h=vg(Df(i,b.line).text,b.ch,f),m=Math.min(g,h),n=Math.max(g,h),p=Math.min(c.line,b.line),q=Math.min(a.lastLine(),Math.max(c.line,b.line));q>=p;p++){var r=Df(i,p).text,s=wg(r,m,f);m==n?e.push(new tb(nb(p,s),nb(p,s))):r.length>s&&e.push(new tb(nb(p,s),nb(p,wg(r,n,f))))}e.length||e.push(new tb(c,c)),Ib(i,ub(l.ranges.slice(0,k).concat(e),k),sg)}else{var t=j,u=t.anchor,v=b;if("single"!=d){if("double"==d)var w=Yd(i,b);else var w=new tb(nb(b.line,0),xb(i,nb(b.line+1,0)));ob(w.anchor,u)>0?(v=w.head,u=rb(t.from(),w.anchor)):(v=w.anchor,u=qb(t.to(),w.head))}var e=l.ranges.slice(0);e[k]=new tb(xb(i,u),v),Ib(i,ub(e,k),sg)}}function s(b){var c=++r,e=Wc(a,b,!0,"rect"==d);if(e)if(0!=ob(e,o)){Rc(a),p(e);var f=P(h,i);(e.line>=f.to||e.line<f.from)&&setTimeout(Ac(a,function(){r==c&&s(b)}),150)}else{var g=b.clientY<q.top?-20:b.clientY>q.bottom?20:0;g&&setTimeout(Ac(a,function(){r==c&&(h.scroller.scrollTop+=g,s(b))}),50)}}function t(b){r=1/0,$f(b),Qc(a),fg(document,"mousemove",u),fg(document,"mouseup",v),i.history.lastSelOrigin=null}var h=a.display,i=a.doc;$f(b);var j,k,l=i.sel;if(f&&!b.shiftKey?(k=i.sel.contains(c),j=k>-1?i.sel.ranges[k]:new tb(c,c)):j=i.sel.primary(),b.altKey)d="rect",f||(j=new tb(c,c)),c=Wc(a,b,!0,!0),k=-1;else if("double"==d){var m=Yd(i,c);j=a.display.shift||i.extend?Bb(i,j,m.anchor,m.head):m}else if("triple"==d){var n=new tb(nb(c.line,0),xb(i,nb(c.line+1,0)));j=a.display.shift||i.extend?Bb(i,j,n.anchor,n.head):n}else j=Bb(i,j,c);f?k>-1?Eb(i,k,j,sg):(k=i.sel.ranges.length,Ib(i,ub(i.sel.ranges.concat([j]),k),{scroll:!1,origin:"*mouse"})):(k=0,Ib(i,new sb([j],0),sg),l=i.sel);var o=c,q=h.wrapper.getBoundingClientRect(),r=0,u=Ac(a,function(a){(g&&!e?a.buttons:dg(a))?s(a):t(a)}),v=Ac(a,t);eg(document,"mousemove",u),eg(document,"mouseup",v)}function bd(a,b,c,d,e){try{var f=b.clientX,g=b.clientY}catch(b){return!1}if(f>=Math.floor(a.display.gutters.getBoundingClientRect().right))return!1;d&&$f(b);var h=a.display,i=h.lineDiv.getBoundingClientRect();if(g>i.bottom||!ng(a,c))return ag(b);g-=i.top-h.viewOffset;for(var j=0;j<a.options.gutters.length;++j){var k=h.gutters.childNodes[j];if(k&&k.getBoundingClientRect().right>=f){var l=If(a.doc,g),m=a.options.gutters[j];return e(a,c,a,l,m,b),ag(b)}}}function cd(a,b){return bd(a,b,"gutterClick",!0,jg)}function ed(a){var b=this;if(!lg(b,a)&&!Vc(b.display,a)){$f(a),g&&(dd=+new Date);var c=Wc(b,a,!0),d=a.dataTransfer.files;if(c&&!Sc(b))if(d&&d.length&&window.FileReader&&window.File)for(var e=d.length,f=Array(e),h=0,i=function(a,d){var g=new FileReader;g.onload=Ac(b,function(){if(f[d]=g.result,++h==e){c=xb(b.doc,c);var a={from:c,to:c,text:eh(f.join("\n")),origin:"paste"};Fd(b.doc,a),Hb(b.doc,vb(c,zd(a)))}}),g.readAsText(a)},j=0;e>j;++j)i(d[j],j);else{if(b.state.draggingText&&b.doc.sel.contains(c)>-1)return b.state.draggingText(a),setTimeout(Fg(Qc,b),20),void 0;try{var f=a.dataTransfer.getData("Text");if(f){var k=b.state.draggingText&&b.listSelections();if(Jb(b.doc,vb(c,c)),k)for(var j=0;j<k.length;++j)Ld(b.doc,"",k[j].anchor,k[j].head,"drag");b.replaceSelection(f,"around","paste"),Qc(b)}}catch(a){}}}}function fd(a,b){if(g&&(!a.state.draggingText||+new Date-dd<100))return bg(b),void 0;if(!lg(a,b)&&!Vc(a.display,b)&&(b.dataTransfer.setData("Text",a.getSelection()),b.dataTransfer.setDragImage&&!l)){var c=Lg("img",null,null,"position: fixed; left: 0; top: 0;");c.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",k&&(c.width=c.height=1,a.display.wrapper.appendChild(c),c._top=c.offsetTop),b.dataTransfer.setDragImage(c,0,0),k&&c.parentNode.removeChild(c)}}function gd(b,c){Math.abs(b.doc.scrollTop-c)<2||(b.doc.scrollTop=c,a||U(b,{top:c}),b.display.scroller.scrollTop!=c&&(b.display.scroller.scrollTop=c),b.display.scrollbarV.scrollTop!=c&&(b.display.scrollbarV.scrollTop=c),a&&U(b),Sb(b,100))}function hd(a,b,c){(c?b==a.doc.scrollLeft:Math.abs(a.doc.scrollLeft-b)<2)||(b=Math.min(b,a.display.scroller.scrollWidth-a.display.scroller.clientWidth),a.doc.scrollLeft=b,Q(a),a.display.scroller.scrollLeft!=b&&(a.display.scroller.scrollLeft=b),a.display.scrollbarH.scrollLeft!=b&&(a.display.scrollbarH.scrollLeft=b))}function kd(b,c){var d=c.wheelDeltaX,e=c.wheelDeltaY;null==d&&c.detail&&c.axis==c.HORIZONTAL_AXIS&&(d=c.detail),null==e&&c.detail&&c.axis==c.VERTICAL_AXIS?e=c.detail:null==e&&(e=c.wheelDelta);var f=b.display,g=f.scroller;if(d&&g.scrollWidth>g.clientWidth||e&&g.scrollHeight>g.clientHeight){if(e&&r&&h)a:for(var i=c.target,j=f.view;i!=g;i=i.parentNode)for(var l=0;l<j.length;l++)if(j[l].node==i){b.display.currentWheelTarget=i;break a}if(d&&!a&&!k&&null!=jd)return e&&gd(b,Math.max(0,Math.min(g.scrollTop+e*jd,g.scrollHeight-g.clientHeight))),hd(b,Math.max(0,Math.min(g.scrollLeft+d*jd,g.scrollWidth-g.clientWidth))),$f(c),f.wheelStartX=null,void 0;if(e&&null!=jd){var m=e*jd,n=b.doc.scrollTop,o=n+f.wrapper.clientHeight;0>m?n=Math.max(0,n+m-50):o=Math.min(b.doc.height,o+m+50),U(b,{top:n,bottom:o})}20>id&&(null==f.wheelStartX?(f.wheelStartX=g.scrollLeft,f.wheelStartY=g.scrollTop,f.wheelDX=d,f.wheelDY=e,setTimeout(function(){if(null!=f.wheelStartX){var a=g.scrollLeft-f.wheelStartX,b=g.scrollTop-f.wheelStartY,c=b&&f.wheelDY&&b/f.wheelDY||a&&f.wheelDX&&a/f.wheelDX;f.wheelStartX=f.wheelStartY=null,c&&(jd=(jd*id+c)/(id+1),++id)}},200)):(f.wheelDX+=d,f.wheelDY+=e))}}function ld(a,b,c){if("string"==typeof b&&(b=ie[b],!b))return!1;a.display.pollingFast&&Oc(a)&&(a.display.pollingFast=!1);var d=a.display.shift,e=!1;try{Sc(a)&&(a.state.suppressEdits=!0),c&&(a.display.shift=!1),e=b(a)!=qg}finally{a.display.shift=d,a.state.suppressEdits=!1}return e}function md(a){var b=a.state.keyMaps.slice(0);return a.options.extraKeys&&b.push(a.options.extraKeys),b.push(a.options.keyMap),b}function od(a,b){var c=ke(a.options.keyMap),d=c.auto;clearTimeout(nd),d&&!me(b)&&(nd=setTimeout(function(){ke(a.options.keyMap)==c&&(a.options.keyMap=d.call?d.call(null,a):d,F(a))},50));var e=ne(b,!0),f=!1;if(!e)return!1;var g=md(a);return f=b.shiftKey?le("Shift-"+e,g,function(b){return ld(a,b,!0)})||le(e,g,function(b){return("string"==typeof b?/^go[A-Z]/.test(b):b.motion)?ld(a,b):void 0}):le(e,g,function(b){return ld(a,b)}),f&&($f(b),Rb(a),jg(a,"keyHandled",a,e,b)),f}function pd(a,b,c){var d=le("'"+c+"'",md(a),function(b){return ld(a,b,!0)});return d&&($f(b),Rb(a),jg(a,"keyHandled",a,"'"+c+"'",b)),d}function rd(a){var c=this;if(Rc(c),!lg(c,a)){b&&27==a.keyCode&&(a.returnValue=!1);var d=a.keyCode;c.display.shift=16==d||a.shiftKey;var e=od(c,a);k&&(qd=e?d:null,!e&&88==d&&!gh&&(r?a.metaKey:a.ctrlKey)&&c.replaceSelection("",null,"cut")),18!=d||/\bCodeMirror-crosshair\b/.test(c.display.lineDiv.className)||sd(c)}}function sd(a){function c(a){18!=a.keyCode&&a.altKey||(Sg(b,"CodeMirror-crosshair"),fg(document,"keyup",c),fg(document,"mouseover",c))}var b=a.display.lineDiv;Tg(b,"CodeMirror-crosshair"),eg(document,"keyup",c),eg(document,"mouseover",c)}function td(a){lg(this,a)||16==a.keyCode&&(this.doc.sel.shift=!1)}function ud(a){var b=this;if(!lg(b,a)){var c=a.keyCode,e=a.charCode;if(k&&c==qd)return qd=null,$f(a),void 0;if(!(k&&(!a.which||a.which<10)||m)||!od(b,a)){var f=String.fromCharCode(null==e?c:e);pd(b,a,f)||(g&&!d&&(b.display.inputHasSelection=null),Nc(b))}}}function vd(a){"nocursor"!=a.options.readOnly&&(a.state.focused||(gg(a,"focus",a),a.state.focused=!0,Tg(a.display.wrapper,"CodeMirror-focused"),a.curOp||a.display.selForContextMenu==a.doc.sel||(Pc(a),h&&setTimeout(Fg(Pc,a,!0),0))),Mc(a),Rb(a))}function wd(a){a.state.focused&&(gg(a,"blur",a),a.state.focused=!1,Sg(a.display.wrapper,"CodeMirror-focused")),clearInterval(a.display.blinker),setTimeout(function(){a.state.focused||(a.display.shift=!1)},150)}function xd(a,b){function j(){if(null!=c.input.selectionStart){var b=a.somethingSelected(),d=c.input.value="\u200b"+(b?c.input.value:"");c.prevInput=b?"":"\u200b",c.input.selectionStart=1,c.input.selectionEnd=d.length}}function l(){if(c.inputDiv.style.position="relative",c.input.style.cssText=i,d&&(c.scrollbarV.scrollTop=c.scroller.scrollTop=f),Mc(a),null!=c.input.selectionStart){(!g||d)&&j();var b=0,e=function(){c.selForContextMenu==a.doc.sel&&0==c.input.selectionStart?Ac(a,ie.selectAll)(a):b++<10?c.detectingSelectAll=setTimeout(e,500):Pc(a)};c.detectingSelectAll=setTimeout(e,200)}}if(!lg(a,b,"contextmenu")){var c=a.display;if(!Vc(c,b)&&!yd(a,b)){var e=Wc(a,b),f=c.scroller.scrollTop;if(e&&!k){var h=a.options.resetSelectionOnContextMenu;h&&-1==a.doc.sel.contains(e)&&Ac(a,Ib)(a.doc,vb(e),rg);var i=c.input.style.cssText;if(c.inputDiv.style.position="absolute",c.input.style.cssText="position: fixed; width: 30px; height: 30px; top: "+(b.clientY-5)+"px; left: "+(b.clientX-5)+"px; z-index: 1000; background: "+(g?"rgba(255, 255, 255, .05)":"transparent")+"; outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",Qc(a),Pc(a),a.somethingSelected()||(c.input.value=c.prevInput=" "),c.selForContextMenu=a.doc.sel,clearTimeout(c.detectingSelectAll),g&&!d&&j(),v){bg(b);var m=function(){fg(window,"mouseup",m),setTimeout(l,20)};eg(window,"mouseup",m)}else setTimeout(l,50)}}}}function yd(a,b){return ng(a,"gutterContextMenu")?bd(a,b,"gutterContextMenu",!1,gg):!1}function Ad(a,b){if(ob(a,b.from)<0)return a;if(ob(a,b.to)<=0)return zd(b);var c=a.line+b.text.length-(b.to.line-b.from.line)-1,d=a.ch;return a.line==b.to.line&&(d+=zd(b).ch-b.to.ch),nb(c,d)}function Bd(a,b){for(var c=[],d=0;d<a.sel.ranges.length;d++){var e=a.sel.ranges[d];c.push(new tb(Ad(e.anchor,b),Ad(e.head,b)))}return ub(c,a.sel.primIndex)}function Cd(a,b,c){return a.line==b.line?nb(c.line,a.ch-b.ch+c.ch):nb(c.line+(a.line-b.line),a.ch)}function Dd(a,b,c){for(var d=[],e=nb(a.first,0),f=e,g=0;g<b.length;g++){var h=b[g],i=Cd(h.from,e,f),j=Cd(zd(h),e,f);if(e=h.to,f=j,"around"==c){var k=a.sel.ranges[g],l=ob(k.head,k.anchor)<0;d[g]=new tb(l?j:i,l?i:j)}else d[g]=new tb(i,i)}return new sb(d,a.sel.primIndex)}function Ed(a,b,c){var d={canceled:!1,from:b.from,to:b.to,text:b.text,origin:b.origin,cancel:function(){this.canceled=!0}};return c&&(d.update=function(b,c,d,e){b&&(this.from=xb(a,b)),c&&(this.to=xb(a,c)),d&&(this.text=d),void 0!==e&&(this.origin=e)}),gg(a,"beforeChange",a,d),a.cm&&gg(a.cm,"beforeChange",a.cm,d),d.canceled?null:{from:d.from,to:d.to,text:d.text,origin:d.origin}}function Fd(a,b,c){if(a.cm){if(!a.cm.curOp)return Ac(a.cm,Fd)(a,b,c);if(a.cm.state.suppressEdits)return}if(!(ng(a,"beforeChange")||a.cm&&ng(a.cm,"beforeChange"))||(b=Ed(a,b,!0))){var d=w&&!c&&Ge(a,b.from,b.to);if(d)for(var e=d.length-1;e>=0;--e)Gd(a,{from:d[e].from,to:d[e].to,text:e?[""]:b.text});else Gd(a,b)}}function Gd(a,b){if(1!=b.text.length||""!=b.text[0]||0!=ob(b.from,b.to)){var c=Bd(a,b);Pf(a,b,c,a.cm?a.cm.curOp.id:0/0),Jd(a,b,c,De(a,b));var d=[];Bf(a,function(a,c){c||-1!=Bg(d,a.history)||(Zf(a.history,b),d.push(a.history)),Jd(a,b,null,De(a,b))})}}function Hd(a,b,c){if(!a.cm||!a.cm.state.suppressEdits){for(var e,d=a.history,f=a.sel,g="undo"==b?d.done:d.undone,h="undo"==b?d.undone:d.done,i=0;i<g.length&&(e=g[i],c?!e.ranges||e.equals(a.sel):e.ranges);i++);if(i!=g.length){for(d.lastOrigin=d.lastSelOrigin=null;e=g.pop(),e.ranges;){if(Sf(e,h),c&&!e.equals(a.sel))return Ib(a,e,{clearRedo:!1}),void 0;f=e}var j=[];Sf(f,h),h.push({changes:j,generation:d.generation}),d.generation=e.generation||++d.maxGeneration;for(var k=ng(a,"beforeChange")||a.cm&&ng(a.cm,"beforeChange"),i=e.changes.length-1;i>=0;--i){var l=e.changes[i];if(l.origin=b,k&&!Ed(a,l,!1))return g.length=0,void 0;j.push(Mf(a,l));var m=i?Bd(a,l,null):zg(g);Jd(a,l,m,Fe(a,l)),!i&&a.cm&&a.cm.scrollIntoView(l);var n=[];Bf(a,function(a,b){b||-1!=Bg(n,a.history)||(Zf(a.history,l),n.push(a.history)),Jd(a,l,null,Fe(a,l))})}}}}function Id(a,b){if(0!=b&&(a.first+=b,a.sel=new sb(Cg(a.sel.ranges,function(a){return new tb(nb(a.anchor.line+b,a.anchor.ch),nb(a.head.line+b,a.head.ch))}),a.sel.primIndex),a.cm)){Fc(a.cm,a.first,a.first-b,b);for(var c=a.cm.display,d=c.viewFrom;d<c.viewTo;d++)Gc(a.cm,d,"gutter")}}function Jd(a,b,c,d){if(a.cm&&!a.cm.curOp)return Ac(a.cm,Jd)(a,b,c,d);if(b.to.line<a.first)return Id(a,b.text.length-1-(b.to.line-b.from.line)),void 0;if(!(b.from.line>a.lastLine())){if(b.from.line<a.first){var e=b.text.length-1-(a.first-b.from.line);Id(a,e),b={from:nb(a.first,0),to:nb(b.to.line+e,b.to.ch),text:[zg(b.text)],origin:b.origin}}var f=a.lastLine();b.to.line>f&&(b={from:b.from,to:nb(f,Df(a,f).text.length),text:[b.text[0]],origin:b.origin}),b.removed=Ef(a,b.from,b.to),c||(c=Bd(a,b,null)),a.cm?Kd(a.cm,b,d):uf(a,b,d),Jb(a,c,rg)}}function Kd(a,b,c){var d=a.doc,e=a.display,f=b.from,g=b.to,h=!1,i=f.line;a.options.lineWrapping||(i=Hf(Qe(Df(d,f.line))),d.iter(i,g.line+1,function(a){return a==e.maxLine?(h=!0,!0):void 0})),d.sel.contains(b.from,b.to)>-1&&mg(a),uf(d,b,c,D(a)),a.options.lineWrapping||(d.iter(i,f.line+b.text.length,function(a){var b=K(a);b>e.maxLineLength&&(e.maxLine=a,e.maxLineLength=b,e.maxLineChanged=!0,h=!1)}),h&&(a.curOp.updateMaxLine=!0)),d.frontier=Math.min(d.frontier,f.line),Sb(a,400);var j=b.text.length-(g.line-f.line)-1;f.line!=g.line||1!=b.text.length||tf(a.doc,b)?Fc(a,f.line,g.line+1,j):Gc(a,f.line,"text");var k=ng(a,"changes"),l=ng(a,"change");if(l||k){var m={from:f,to:g,text:b.text,removed:b.removed,origin:b.origin};l&&jg(a,"change",a,m),k&&(a.curOp.changeObjs||(a.curOp.changeObjs=[])).push(m)}a.display.selForContextMenu=null}function Ld(a,b,c,d,e){if(d||(d=c),ob(d,c)<0){var f=d;d=c,c=f}"string"==typeof b&&(b=eh(b)),Fd(a,{from:c,to:d,text:b,origin:e})}function Md(a,b){var c=a.display,d=c.sizer.getBoundingClientRect(),e=null;if(b.top+d.top<0?e=!0:b.bottom+d.top>(window.innerHeight||document.documentElement.clientHeight)&&(e=!1),null!=e&&!o){var f=Lg("div","\u200b",null,"position: absolute; top: "+(b.top-c.viewOffset-Wb(a.display))+"px; height: "+(b.bottom-b.top+pg)+"px; left: "+b.left+"px; width: 2px;");a.display.lineSpace.appendChild(f),f.scrollIntoView(e),a.display.lineSpace.removeChild(f)}}function Nd(a,b,c,d){for(null==d&&(d=0);;){var e=!1,f=oc(a,b),g=c&&c!=b?oc(a,c):f,h=Pd(a,Math.min(f.left,g.left),Math.min(f.top,g.top)-d,Math.max(f.left,g.left),Math.max(f.bottom,g.bottom)+d),i=a.doc.scrollTop,j=a.doc.scrollLeft;if(null!=h.scrollTop&&(gd(a,h.scrollTop),Math.abs(a.doc.scrollTop-i)>1&&(e=!0)),null!=h.scrollLeft&&(hd(a,h.scrollLeft),Math.abs(a.doc.scrollLeft-j)>1&&(e=!0)),!e)return f}}function Od(a,b,c,d,e){var f=Pd(a,b,c,d,e);null!=f.scrollTop&&gd(a,f.scrollTop),null!=f.scrollLeft&&hd(a,f.scrollLeft)}function Pd(a,b,c,d,e){var f=a.display,g=uc(a.display);0>c&&(c=0);var h=a.curOp&&null!=a.curOp.scrollTop?a.curOp.scrollTop:f.scroller.scrollTop,i=f.scroller.clientHeight-pg,j={},k=a.doc.height+Xb(f),l=g>c,m=e>k-g;if(h>c)j.scrollTop=l?0:c;else if(e>h+i){var n=Math.min(c,(m?k:e)-i);n!=h&&(j.scrollTop=n)}var o=a.curOp&&null!=a.curOp.scrollLeft?a.curOp.scrollLeft:f.scroller.scrollLeft,p=f.scroller.clientWidth-pg;b+=f.gutters.offsetWidth,d+=f.gutters.offsetWidth;var q=f.gutters.offsetWidth,r=q+10>b;return o+q>b||r?(r&&(b=0),j.scrollLeft=Math.max(0,b-10-q)):d>p+o-3&&(j.scrollLeft=d+10-p),j}function Qd(a,b,c){(null!=b||null!=c)&&Sd(a),null!=b&&(a.curOp.scrollLeft=(null==a.curOp.scrollLeft?a.doc.scrollLeft:a.curOp.scrollLeft)+b),null!=c&&(a.curOp.scrollTop=(null==a.curOp.scrollTop?a.doc.scrollTop:a.curOp.scrollTop)+c)}function Rd(a){Sd(a);var b=a.getCursor(),c=b,d=b;a.options.lineWrapping||(c=b.ch?nb(b.line,b.ch-1):b,d=nb(b.line,b.ch+1)),a.curOp.scrollToPos={from:c,to:d,margin:a.options.cursorScrollMargin,isCursor:!0}}function Sd(a){var b=a.curOp.scrollToPos;if(b){a.curOp.scrollToPos=null;var c=pc(a,b.from),d=pc(a,b.to),e=Pd(a,Math.min(c.left,d.left),Math.min(c.top,d.top)-b.margin,Math.max(c.right,d.right),Math.max(c.bottom,d.bottom)+b.margin);a.scrollTo(e.scrollLeft,e.scrollTop)}}function Td(a,b,c,d){var f,e=a.doc;null==c&&(c="add"),"smart"==c&&(a.doc.mode.indent?f=Vb(a,b):c="prev");var g=a.options.tabSize,h=Df(e,b),i=vg(h.text,null,g);h.stateAfter&&(h.stateAfter=null);var k,j=h.text.match(/^\s*/)[0];if(d||/\S/.test(h.text)){if("smart"==c&&(k=a.doc.mode.indent(f,h.text.slice(j.length),h.text),k==qg)){if(!d)return;c="prev"}}else k=0,c="not";"prev"==c?k=b>e.first?vg(Df(e,b-1).text,null,g):0:"add"==c?k=i+a.options.indentUnit:"subtract"==c?k=i-a.options.indentUnit:"number"==typeof c&&(k=i+c),k=Math.max(0,k);var l="",m=0;if(a.options.indentWithTabs)for(var n=Math.floor(k/g);n;--n)m+=g,l+="	";if(k>m&&(l+=yg(k-m)),l!=j)Ld(a.doc,l,nb(b,0),nb(b,j.length),"+input");else for(var n=0;n<e.sel.ranges.length;n++){var o=e.sel.ranges[n];if(o.head.line==b&&o.head.ch<j.length){var m=nb(b,j.length);Eb(e,n,new tb(m,m));break}}h.stateAfter=null}function Ud(a,b,c,d){var e=b,f=b,g=a.doc;return"number"==typeof b?f=Df(g,wb(g,b)):e=Hf(b),null==e?null:(d(f,e)&&Gc(a,e,c),f)}function Vd(a,b){for(var c=a.doc.sel.ranges,d=[],e=0;e<c.length;e++){for(var f=b(c[e]);d.length&&ob(f.from,zg(d).to)<=0;){var g=d.pop();if(ob(g.from,f.from)<0){f.from=g.from;break}}d.push(f)}zc(a,function(){for(var b=d.length-1;b>=0;b--)Ld(a.doc,"",d[b].from,d[b].to,"+delete");Rd(a)})}function Wd(a,b,c,d,e){function k(){var b=f+c;return b<a.first||b>=a.first+a.size?j=!1:(f=b,i=Df(a,b))}function l(a){var b=(e?th:uh)(i,g,c,!0);if(null==b){if(a||!k())return j=!1;g=e?(0>c?mh:lh)(i):0>c?i.text.length:0}else g=b;return!0}var f=b.line,g=b.ch,h=c,i=Df(a,f),j=!0;if("char"==d)l();else if("column"==d)l(!0);else if("word"==d||"group"==d)for(var m=null,n="group"==d,o=!0;!(0>c)||l(!o);o=!1){var p=i.text.charAt(g)||"\n",q=Hg(p)?"w":n&&"\n"==p?"n":!n||/\s/.test(p)?null:"p";if(!n||o||q||(q="s"),m&&m!=q){0>c&&(c=1,l());break}if(q&&(m=q),c>0&&!l(!o))break}var r=Nb(a,nb(f,g),h,!0);return j||(r.hitSide=!0),r}function Xd(a,b,c,d){var g,e=a.doc,f=b.left;if("page"==d){var h=Math.min(a.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight);g=b.top+c*(h-(0>c?1.5:.5)*uc(a.display))}else"line"==d&&(g=c>0?b.bottom+3:b.top-3);for(;;){var i=rc(a,f,g);if(!i.outside)break;if(0>c?0>=g:g>=e.height){i.hitSide=!0;break}g+=5*c}return i}function Yd(a,b){var c=Df(a,b.line).text,d=b.ch,e=b.ch;if(c){(b.xRel<0||e==c.length)&&d?--d:++e;for(var f=c.charAt(d),g=Hg(f)?Hg:/\s/.test(f)?function(a){return/\s/.test(a)}:function(a){return!/\s/.test(a)&&!Hg(a)};d>0&&g(c.charAt(d-1));)--d;for(;e<c.length&&g(c.charAt(e));)++e}return new tb(nb(b.line,d),nb(b.line,e))}function _d(a,b,c,d){y.defaults[a]=b,c&&($d[a]=d?function(a,b,d){d!=ae&&c(a,b,d)}:c)}function ke(a){return"string"==typeof a?je[a]:a}function re(a,b,c,d,e){if(d&&d.shared)return te(a,b,c,d,e);if(a.cm&&!a.cm.curOp)return Ac(a.cm,re)(a,b,c,d,e);var f=new pe(a,e),g=ob(b,c);if(d&&Eg(d,f,!1),g>0||0==g&&f.clearWhenEmpty!==!1)return f;if(f.replacedWith&&(f.collapsed=!0,f.widgetNode=Lg("span",[f.replacedWith],"CodeMirror-widget"),d.handleMouseEvents||(f.widgetNode.ignoreEvents=!0),d.insertLeft&&(f.widgetNode.insertLeft=!0)),f.collapsed){if(Pe(a,b.line,b,c,f)||b.line!=c.line&&Pe(a,c.line,b,c,f))throw new Error("Inserting collapsed marker partially overlapping an existing one");x=!0}f.addToHistory&&Pf(a,{from:b,to:c,origin:"markText"},a.sel,0/0);var j,h=b.line,i=a.cm;if(a.iter(h,c.line+1,function(a){i&&f.collapsed&&!i.options.lineWrapping&&Qe(a)==i.display.maxLine&&(j=!0),f.collapsed&&h!=b.line&&Gf(a,0),Ae(a,new xe(f,h==b.line?b.ch:null,h==c.line?c.ch:null)),++h}),f.collapsed&&a.iter(b.line,c.line+1,function(b){Ue(a,b)&&Gf(b,0)}),f.clearOnEnter&&eg(f,"beforeCursorEnter",function(){f.clear()}),f.readOnly&&(w=!0,(a.history.done.length||a.history.undone.length)&&a.clearHistory()),f.collapsed&&(f.id=++qe,f.atomic=!0),i){if(j&&(i.curOp.updateMaxLine=!0),f.collapsed)Fc(i,b.line,c.line+1);else if(f.className||f.title||f.startStyle||f.endStyle)for(var k=b.line;k<=c.line;k++)Gc(i,k,"text");f.atomic&&Lb(i.doc),jg(i,"markerAdded",i,f)}return f}function te(a,b,c,d,e){d=Eg(d),d.shared=!1;var f=[re(a,b,c,d,e)],g=f[0],h=d.widgetNode;return Bf(a,function(a){h&&(d.widgetNode=h.cloneNode(!0)),f.push(re(a,xb(a,b),xb(a,c),d,e));for(var i=0;i<a.linked.length;++i)if(a.linked[i].isParent)return;g=zg(f)}),new se(f,g)}function ue(a){return a.findMarks(nb(a.first,0),a.clipPos(nb(a.lastLine())),function(a){return a.parent})}function ve(a,b){for(var c=0;c<b.length;c++){var d=b[c],e=d.find(),f=a.clipPos(e.from),g=a.clipPos(e.to);if(ob(f,g)){var h=re(a,f,g,d.primary,d.primary.type);d.markers.push(h),h.parent=d}}}function we(a){for(var b=0;b<a.length;b++){var c=a[b],d=[c.primary.doc];Bf(c.primary.doc,function(a){d.push(a)});for(var e=0;e<c.markers.length;e++){var f=c.markers[e];-1==Bg(d,f.doc)&&(f.parent=null,c.markers.splice(e--,1))}}}function xe(a,b,c){this.marker=a,this.from=b,this.to=c}function ye(a,b){if(a)for(var c=0;c<a.length;++c){var d=a[c];if(d.marker==b)return d}}function ze(a,b){for(var c,d=0;d<a.length;++d)a[d]!=b&&(c||(c=[])).push(a[d]);return c}function Ae(a,b){a.markedSpans=a.markedSpans?a.markedSpans.concat([b]):[b],b.marker.attachLine(a)}function Be(a,b,c){if(a)for(var e,d=0;d<a.length;++d){var f=a[d],g=f.marker,h=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);if(h||f.from==b&&"bookmark"==g.type&&(!c||!f.marker.insertLeft)){var i=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);(e||(e=[])).push(new xe(g,f.from,i?null:f.to))}}return e}function Ce(a,b,c){if(a)for(var e,d=0;d<a.length;++d){var f=a[d],g=f.marker,h=null==f.to||(g.inclusiveRight?f.to>=b:f.to>b);if(h||f.from==b&&"bookmark"==g.type&&(!c||f.marker.insertLeft)){var i=null==f.from||(g.inclusiveLeft?f.from<=b:f.from<b);(e||(e=[])).push(new xe(g,i?null:f.from-b,null==f.to?null:f.to-b))}}return e}function De(a,b){var c=zb(a,b.from.line)&&Df(a,b.from.line).markedSpans,d=zb(a,b.to.line)&&Df(a,b.to.line).markedSpans;if(!c&&!d)return null;var e=b.from.ch,f=b.to.ch,g=0==ob(b.from,b.to),h=Be(c,e,g),i=Ce(d,f,g),j=1==b.text.length,k=zg(b.text).length+(j?e:0);if(h)for(var l=0;l<h.length;++l){var m=h[l];if(null==m.to){var n=ye(i,m.marker);n?j&&(m.to=null==n.to?null:n.to+k):m.to=e}}if(i)for(var l=0;l<i.length;++l){var m=i[l];if(null!=m.to&&(m.to+=k),null==m.from){var n=ye(h,m.marker);n||(m.from=k,j&&(h||(h=[])).push(m))}else m.from+=k,j&&(h||(h=[])).push(m)}h&&(h=Ee(h)),i&&i!=h&&(i=Ee(i));var o=[h];if(!j){var q,p=b.text.length-2;if(p>0&&h)for(var l=0;l<h.length;++l)null==h[l].to&&(q||(q=[])).push(new xe(h[l].marker,null,null));for(var l=0;p>l;++l)o.push(q);o.push(i)}return o}function Ee(a){for(var b=0;b<a.length;++b){var c=a[b];null!=c.from&&c.from==c.to&&c.marker.clearWhenEmpty!==!1&&a.splice(b--,1)}return a.length?a:null}function Fe(a,b){var c=Vf(a,b),d=De(a,b);if(!c)return d;if(!d)return c;for(var e=0;e<c.length;++e){var f=c[e],g=d[e];if(f&&g)a:for(var h=0;h<g.length;++h){for(var i=g[h],j=0;j<f.length;++j)if(f[j].marker==i.marker)continue a;
f.push(i)}else g&&(c[e]=g)}return c}function Ge(a,b,c){var d=null;if(a.iter(b.line,c.line+1,function(a){if(a.markedSpans)for(var b=0;b<a.markedSpans.length;++b){var c=a.markedSpans[b].marker;!c.readOnly||d&&-1!=Bg(d,c)||(d||(d=[])).push(c)}}),!d)return null;for(var e=[{from:b,to:c}],f=0;f<d.length;++f)for(var g=d[f],h=g.find(0),i=0;i<e.length;++i){var j=e[i];if(!(ob(j.to,h.from)<0||ob(j.from,h.to)>0)){var k=[i,1],l=ob(j.from,h.from),m=ob(j.to,h.to);(0>l||!g.inclusiveLeft&&!l)&&k.push({from:j.from,to:h.from}),(m>0||!g.inclusiveRight&&!m)&&k.push({from:h.to,to:j.to}),e.splice.apply(e,k),i+=k.length-1}}return e}function He(a){var b=a.markedSpans;if(b){for(var c=0;c<b.length;++c)b[c].marker.detachLine(a);a.markedSpans=null}}function Ie(a,b){if(b){for(var c=0;c<b.length;++c)b[c].marker.attachLine(a);a.markedSpans=b}}function Je(a){return a.inclusiveLeft?-1:0}function Ke(a){return a.inclusiveRight?1:0}function Le(a,b){var c=a.lines.length-b.lines.length;if(0!=c)return c;var d=a.find(),e=b.find(),f=ob(d.from,e.from)||Je(a)-Je(b);if(f)return-f;var g=ob(d.to,e.to)||Ke(a)-Ke(b);return g?g:b.id-a.id}function Me(a,b){var d,c=x&&a.markedSpans;if(c)for(var e,f=0;f<c.length;++f)e=c[f],e.marker.collapsed&&null==(b?e.from:e.to)&&(!d||Le(d,e.marker)<0)&&(d=e.marker);return d}function Ne(a){return Me(a,!0)}function Oe(a){return Me(a,!1)}function Pe(a,b,c,d,e){var f=Df(a,b),g=x&&f.markedSpans;if(g)for(var h=0;h<g.length;++h){var i=g[h];if(i.marker.collapsed){var j=i.marker.find(0),k=ob(j.from,c)||Je(i.marker)-Je(e),l=ob(j.to,d)||Ke(i.marker)-Ke(e);if(!(k>=0&&0>=l||0>=k&&l>=0)&&(0>=k&&(ob(j.to,c)||Ke(i.marker)-Je(e))>0||k>=0&&(ob(j.from,d)||Je(i.marker)-Ke(e))<0))return!0}}}function Qe(a){for(var b;b=Ne(a);)a=b.find(-1,!0).line;return a}function Re(a){for(var b,c;b=Oe(a);)a=b.find(1,!0).line,(c||(c=[])).push(a);return c}function Se(a,b){var c=Df(a,b),d=Qe(c);return c==d?b:Hf(d)}function Te(a,b){if(b>a.lastLine())return b;var d,c=Df(a,b);if(!Ue(a,c))return b;for(;d=Oe(c);)c=d.find(1,!0).line;return Hf(c)+1}function Ue(a,b){var c=x&&b.markedSpans;if(c)for(var d,e=0;e<c.length;++e)if(d=c[e],d.marker.collapsed){if(null==d.from)return!0;if(!d.marker.widgetNode&&0==d.from&&d.marker.inclusiveLeft&&Ve(a,b,d))return!0}}function Ve(a,b,c){if(null==c.to){var d=c.marker.find(1,!0);return Ve(a,d.line,ye(d.line.markedSpans,c.marker))}if(c.marker.inclusiveRight&&c.to==b.text.length)return!0;for(var e,f=0;f<b.markedSpans.length;++f)if(e=b.markedSpans[f],e.marker.collapsed&&!e.marker.widgetNode&&e.from==c.to&&(null==e.to||e.to!=c.from)&&(e.marker.inclusiveLeft||c.marker.inclusiveRight)&&Ve(a,b,e))return!0}function Xe(a,b,c){Jf(b)<(a.curOp&&a.curOp.scrollTop||a.doc.scrollTop)&&Qd(a,null,c)}function Ye(a){return null!=a.height?a.height:(Pg(document.body,a.node)||Og(a.cm.display.measure,Lg("div",[a.node],null,"position: relative")),a.height=a.node.offsetHeight)}function Ze(a,b,c,d){var e=new We(a,c,d);return e.noHScroll&&(a.display.alignWidgets=!0),Ud(a,b,"widget",function(b){var c=b.widgets||(b.widgets=[]);if(null==e.insertAt?c.push(e):c.splice(Math.min(c.length-1,Math.max(0,e.insertAt)),0,e),e.line=b,!Ue(a.doc,b)){var d=Jf(b)<a.doc.scrollTop;Gf(b,b.height+Ye(e)),d&&Qd(a,null,e.height),a.curOp.forceUpdate=!0}return!0}),e}function _e(a,b,c,d){a.text=b,a.stateAfter&&(a.stateAfter=null),a.styles&&(a.styles=null),null!=a.order&&(a.order=null),He(a),Ie(a,c);var e=d?d(a):1;e!=a.height&&Gf(a,e)}function af(a){a.parent=null,He(a)}function bf(a,b){if(a)for(;;){var c=a.match(/(?:^|\s+)line-(background-)?(\S+)/);if(!c)break;a=a.slice(0,c.index)+a.slice(c.index+c[0].length);var d=c[1]?"bgClass":"textClass";null==b[d]?b[d]=c[2]:new RegExp("(?:^|s)"+c[2]+"(?:$|s)").test(b[d])||(b[d]+=" "+c[2])}return a}function cf(a,b){if(a.blankLine)return a.blankLine(b);if(a.innerMode){var c=y.innerMode(a,b);return c.mode.blankLine?c.mode.blankLine(c.state):void 0}}function df(a,b,c){for(var d=0;10>d;d++){var e=a.token(b,c);if(b.pos>b.start)return e}throw new Error("Mode "+a.name+" failed to advance stream.")}function ef(a,b,c,d,e,f,g){var h=c.flattenSpans;null==h&&(h=a.options.flattenSpans);var l,i=0,j=null,k=new oe(b,a.options.tabSize);for(""==b&&bf(cf(c,d),f);!k.eol();){if(k.pos>a.options.maxHighlightLength?(h=!1,g&&hf(a,b,d,k.pos),k.pos=b.length,l=null):l=bf(df(c,k,d),f),a.options.addModeClass){var m=y.innerMode(c,d).mode.name;m&&(l="m-"+(l?m+" "+l:m))}h&&j==l||(i<k.start&&e(k.start,j),i=k.start,j=l),k.start=k.pos}for(;i<k.pos;){var n=Math.min(k.pos,i+5e4);e(n,j),i=n}}function ff(a,b,c,d){var e=[a.state.modeGen],f={};ef(a,b.text,a.doc.mode,c,function(a,b){e.push(a,b)},f,d);for(var g=0;g<a.state.overlays.length;++g){var h=a.state.overlays[g],i=1,j=0;ef(a,b.text,h.mode,!0,function(a,b){for(var c=i;a>j;){var d=e[i];d>a&&e.splice(i,1,a,e[i+1],d),i+=2,j=Math.min(a,d)}if(b)if(h.opaque)e.splice(c,i-c,a,"cm-overlay "+b),i=c+2;else for(;i>c;c+=2){var f=e[c+1];e[c+1]=(f?f+" ":"")+"cm-overlay "+b}},f)}return{styles:e,classes:f.bgClass||f.textClass?f:null}}function gf(a,b){if(!b.styles||b.styles[0]!=a.state.modeGen){var c=ff(a,b,b.stateAfter=Vb(a,Hf(b)));b.styles=c.styles,c.classes?b.styleClasses=c.classes:b.styleClasses&&(b.styleClasses=null)}return b.styles}function hf(a,b,c,d){var e=a.doc.mode,f=new oe(b,a.options.tabSize);for(f.start=f.pos=d||0,""==b&&cf(e,c);!f.eol()&&f.pos<=a.options.maxHighlightLength;)df(e,f,c),f.start=f.pos}function lf(a,b){if(!a||/^\s*$/.test(a))return null;var c=b.addModeClass?kf:jf;return c[a]||(c[a]=a.replace(/\S+/g,"cm-$&"))}function mf(a,b){var c=Lg("span",null,null,h?"padding-right: .1px":null),d={pre:Lg("pre",[c]),content:c,col:0,pos:0,cm:a};b.measure={};for(var e=0;e<=(b.rest?b.rest.length:0);e++){var i,f=e?b.rest[e-1]:b.line;d.pos=0,d.addToken=of,(g||h)&&a.getOption("lineWrapping")&&(d.addToken=pf(d.addToken)),dh(a.display.measure)&&(i=Kf(f))&&(d.addToken=qf(d.addToken,i)),d.map=[],sf(f,d,gf(a,f)),f.styleClasses&&(f.styleClasses.bgClass&&(d.bgClass=Ug(f.styleClasses.bgClass,d.bgClass||"")),f.styleClasses.textClass&&(d.textClass=Ug(f.styleClasses.textClass,d.textClass||""))),0==d.map.length&&d.map.push(0,0,d.content.appendChild(bh(a.display.measure))),0==e?(b.measure.map=d.map,b.measure.cache={}):((b.measure.maps||(b.measure.maps=[])).push(d.map),(b.measure.caches||(b.measure.caches=[])).push({}))}return gg(a,"renderLine",a,b.line,d.pre),d}function nf(a){var b=Lg("span","\u2022","cm-invalidchar");return b.title="\\u"+a.charCodeAt(0).toString(16),b}function of(a,b,c,e,f,g){if(b){var h=a.cm.options.specialChars,i=!1;if(h.test(b))for(var j=document.createDocumentFragment(),k=0;;){h.lastIndex=k;var l=h.exec(b),m=l?l.index-k:b.length-k;if(m){var n=document.createTextNode(b.slice(k,k+m));d?j.appendChild(Lg("span",[n])):j.appendChild(n),a.map.push(a.pos,a.pos+m,n),a.col+=m,a.pos+=m}if(!l)break;if(k+=m+1,"	"==l[0]){var o=a.cm.options.tabSize,p=o-a.col%o,n=j.appendChild(Lg("span",yg(p),"cm-tab"));a.col+=p}else{var n=a.cm.options.specialCharPlaceholder(l[0]);d?j.appendChild(Lg("span",[n])):j.appendChild(n),a.col+=1}a.map.push(a.pos,a.pos+1,n),a.pos++}else{a.col+=b.length;var j=document.createTextNode(b);a.map.push(a.pos,a.pos+b.length,j),d&&(i=!0),a.pos+=b.length}if(c||e||f||i){var q=c||"";e&&(q+=e),f&&(q+=f);var r=Lg("span",[j],q);return g&&(r.title=g),a.content.appendChild(r)}a.content.appendChild(j)}}function pf(a){function b(a){for(var b=" ",c=0;c<a.length-2;++c)b+=c%2?" ":"\xa0";return b+=" "}return function(c,d,e,f,g,h){a(c,d.replace(/ {3,}/g,b),e,f,g,h)}}function qf(a,b){return function(c,d,e,f,g,h){e=e?e+" cm-force-border":"cm-force-border";for(var i=c.pos,j=i+d.length;;){for(var k=0;k<b.length;k++){var l=b[k];if(l.to>i&&l.from<=i)break}if(l.to>=j)return a(c,d,e,f,g,h);a(c,d.slice(0,l.to-i),e,f,null,h),f=null,d=d.slice(l.to-i),i=l.to}}}function rf(a,b,c,d){var e=!d&&c.widgetNode;e&&(a.map.push(a.pos,a.pos+b,e),a.content.appendChild(e)),a.pos+=b}function sf(a,b,c){var d=a.markedSpans,e=a.text,f=0;if(d)for(var k,m,n,o,p,q,h=e.length,i=0,g=1,j="",l=0;;){if(l==i){m=n=o=p="",q=null,l=1/0;for(var r=[],s=0;s<d.length;++s){var t=d[s],u=t.marker;t.from<=i&&(null==t.to||t.to>i)?(null!=t.to&&l>t.to&&(l=t.to,n=""),u.className&&(m+=" "+u.className),u.startStyle&&t.from==i&&(o+=" "+u.startStyle),u.endStyle&&t.to==l&&(n+=" "+u.endStyle),u.title&&!p&&(p=u.title),u.collapsed&&(!q||Le(q.marker,u)<0)&&(q=t)):t.from>i&&l>t.from&&(l=t.from),"bookmark"==u.type&&t.from==i&&u.widgetNode&&r.push(u)}if(q&&(q.from||0)==i&&(rf(b,(null==q.to?h+1:q.to)-i,q.marker,null==q.from),null==q.to))return;if(!q&&r.length)for(var s=0;s<r.length;++s)rf(b,0,r[s])}if(i>=h)break;for(var v=Math.min(h,l);;){if(j){var w=i+j.length;if(!q){var x=w>v?j.slice(0,v-i):j;b.addToken(b,x,k?k+m:m,o,i+x.length==l?n:"",p)}if(w>=v){j=j.slice(v-i),i=v;break}i=w,o=""}j=e.slice(f,f=c[g++]),k=lf(c[g++],b.cm.options)}}else for(var g=1;g<c.length;g+=2)b.addToken(b,e.slice(f,f=c[g]),lf(c[g+1],b.cm.options))}function tf(a,b){return 0==b.from.ch&&0==b.to.ch&&""==zg(b.text)&&(!a.cm||a.cm.options.wholeLineUpdateBefore)}function uf(a,b,c,d){function e(a){return c?c[a]:null}function f(a,c,e){_e(a,c,e,d),jg(a,"change",a,b)}var g=b.from,h=b.to,i=b.text,j=Df(a,g.line),k=Df(a,h.line),l=zg(i),m=e(i.length-1),n=h.line-g.line;if(tf(a,b)){for(var o=0,p=[];o<i.length-1;++o)p.push(new $e(i[o],e(o),d));f(k,k.text,m),n&&a.remove(g.line,n),p.length&&a.insert(g.line,p)}else if(j==k)if(1==i.length)f(j,j.text.slice(0,g.ch)+l+j.text.slice(h.ch),m);else{for(var p=[],o=1;o<i.length-1;++o)p.push(new $e(i[o],e(o),d));p.push(new $e(l+j.text.slice(h.ch),m,d)),f(j,j.text.slice(0,g.ch)+i[0],e(0)),a.insert(g.line+1,p)}else if(1==i.length)f(j,j.text.slice(0,g.ch)+i[0]+k.text.slice(h.ch),e(0)),a.remove(g.line+1,n);else{f(j,j.text.slice(0,g.ch)+i[0],e(0)),f(k,l+k.text.slice(h.ch),m);for(var o=1,p=[];o<i.length-1;++o)p.push(new $e(i[o],e(o),d));n>1&&a.remove(g.line+1,n-1),a.insert(g.line+1,p)}jg(a,"change",a,b)}function vf(a){this.lines=a,this.parent=null;for(var b=0,c=0;b<a.length;++b)a[b].parent=this,c+=a[b].height;this.height=c}function wf(a){this.children=a;for(var b=0,c=0,d=0;d<a.length;++d){var e=a[d];b+=e.chunkSize(),c+=e.height,e.parent=this}this.size=b,this.height=c,this.parent=null}function Bf(a,b,c){function d(a,e,f){if(a.linked)for(var g=0;g<a.linked.length;++g){var h=a.linked[g];if(h.doc!=e){var i=f&&h.sharedHist;(!c||i)&&(b(h.doc,i),d(h.doc,a,i))}}}d(a,null,!0)}function Cf(a,b){if(b.cm)throw new Error("This document is already in use.");a.doc=b,b.cm=a,E(a),A(a),a.options.lineWrapping||L(a),a.options.mode=b.modeOption,Fc(a)}function Df(a,b){if(b-=a.first,0>b||b>=a.size)throw new Error("There is no line "+(b+a.first)+" in the document.");for(var c=a;!c.lines;)for(var d=0;;++d){var e=c.children[d],f=e.chunkSize();if(f>b){c=e;break}b-=f}return c.lines[b]}function Ef(a,b,c){var d=[],e=b.line;return a.iter(b.line,c.line+1,function(a){var f=a.text;e==c.line&&(f=f.slice(0,c.ch)),e==b.line&&(f=f.slice(b.ch)),d.push(f),++e}),d}function Ff(a,b,c){var d=[];return a.iter(b,c,function(a){d.push(a.text)}),d}function Gf(a,b){var c=b-a.height;if(c)for(var d=a;d;d=d.parent)d.height+=c}function Hf(a){if(null==a.parent)return null;for(var b=a.parent,c=Bg(b.lines,a),d=b.parent;d;b=d,d=d.parent)for(var e=0;d.children[e]!=b;++e)c+=d.children[e].chunkSize();return c+b.first}function If(a,b){var c=a.first;a:do{for(var d=0;d<a.children.length;++d){var e=a.children[d],f=e.height;if(f>b){a=e;continue a}b-=f,c+=e.chunkSize()}return c}while(!a.lines);for(var d=0;d<a.lines.length;++d){var g=a.lines[d],h=g.height;if(h>b)break;b-=h}return c+d}function Jf(a){a=Qe(a);for(var b=0,c=a.parent,d=0;d<c.lines.length;++d){var e=c.lines[d];if(e==a)break;b+=e.height}for(var f=c.parent;f;c=f,f=c.parent)for(var d=0;d<f.children.length;++d){var g=f.children[d];if(g==c)break;b+=g.height}return b}function Kf(a){var b=a.order;return null==b&&(b=a.order=vh(a.text)),b}function Lf(a){this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,this.lastOp=null,this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=a||1}function Mf(a,b){var c={from:pb(b.from),to:zd(b),text:Ef(a,b.from,b.to)};return Tf(a,c,b.from.line,b.to.line+1),Bf(a,function(a){Tf(a,c,b.from.line,b.to.line+1)},!0),c}function Nf(a){for(;a.length;){var b=zg(a);if(!b.ranges)break;a.pop()}}function Of(a,b){return b?(Nf(a.done),zg(a.done)):a.done.length&&!zg(a.done).ranges?zg(a.done):a.done.length>1&&!a.done[a.done.length-2].ranges?(a.done.pop(),zg(a.done)):void 0}function Pf(a,b,c,d){var e=a.history;e.undone.length=0;var g,f=+new Date;if((e.lastOp==d||e.lastOrigin==b.origin&&b.origin&&("+"==b.origin.charAt(0)&&a.cm&&e.lastModTime>f-a.cm.options.historyEventDelay||"*"==b.origin.charAt(0)))&&(g=Of(e,e.lastOp==d))){var h=zg(g.changes);0==ob(b.from,b.to)&&0==ob(b.from,h.to)?h.to=zd(b):g.changes.push(Mf(a,b))}else{var i=zg(e.done);for(i&&i.ranges||Sf(a.sel,e.done),g={changes:[Mf(a,b)],generation:e.generation},e.done.push(g);e.done.length>e.undoDepth;)e.done.shift(),e.done[0].ranges||e.done.shift()}e.done.push(c),e.generation=++e.maxGeneration,e.lastModTime=e.lastSelTime=f,e.lastOp=d,e.lastOrigin=e.lastSelOrigin=b.origin,h||gg(a,"historyAdded")}function Qf(a,b,c,d){var e=b.charAt(0);return"*"==e||"+"==e&&c.ranges.length==d.ranges.length&&c.somethingSelected()==d.somethingSelected()&&new Date-a.history.lastSelTime<=(a.cm?a.cm.options.historyEventDelay:500)}function Rf(a,b,c,d){var e=a.history,f=d&&d.origin;c==e.lastOp||f&&e.lastSelOrigin==f&&(e.lastModTime==e.lastSelTime&&e.lastOrigin==f||Qf(a,f,zg(e.done),b))?e.done[e.done.length-1]=b:Sf(b,e.done),e.lastSelTime=+new Date,e.lastSelOrigin=f,e.lastOp=c,d&&d.clearRedo!==!1&&Nf(e.undone)}function Sf(a,b){var c=zg(b);c&&c.ranges&&c.equals(a)||b.push(a)}function Tf(a,b,c,d){var e=b["spans_"+a.id],f=0;a.iter(Math.max(a.first,c),Math.min(a.first+a.size,d),function(c){c.markedSpans&&((e||(e=b["spans_"+a.id]={}))[f]=c.markedSpans),++f})}function Uf(a){if(!a)return null;for(var c,b=0;b<a.length;++b)a[b].marker.explicitlyCleared?c||(c=a.slice(0,b)):c&&c.push(a[b]);return c?c.length?c:null:a}function Vf(a,b){var c=b["spans_"+a.id];if(!c)return null;for(var d=0,e=[];d<b.text.length;++d)e.push(Uf(c[d]));return e}function Wf(a,b,c){for(var d=0,e=[];d<a.length;++d){var f=a[d];if(f.ranges)e.push(c?sb.prototype.deepCopy.call(f):f);else{var g=f.changes,h=[];e.push({changes:h});for(var i=0;i<g.length;++i){var k,j=g[i];if(h.push({from:j.from,to:j.to,text:j.text}),b)for(var l in j)(k=l.match(/^spans_(\d+)$/))&&Bg(b,Number(k[1]))>-1&&(zg(h)[l]=j[l],delete j[l])}}}return e}function Xf(a,b,c,d){c<a.line?a.line+=d:b<a.line&&(a.line=b,a.ch=0)}function Yf(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e],g=!0;if(f.ranges){f.copied||(f=a[e]=f.deepCopy(),f.copied=!0);for(var h=0;h<f.ranges.length;h++)Xf(f.ranges[h].anchor,b,c,d),Xf(f.ranges[h].head,b,c,d)}else{for(var h=0;h<f.changes.length;++h){var i=f.changes[h];if(c<i.from.line)i.from=nb(i.from.line+d,i.from.ch),i.to=nb(i.to.line+d,i.to.ch);else if(b<=i.to.line){g=!1;break}}g||(a.splice(0,e+1),e=0)}}}function Zf(a,b){var c=b.from.line,d=b.to.line,e=b.text.length-(d-c)-1;Yf(a.done,c,d,e),Yf(a.undone,c,d,e)}function ag(a){return null!=a.defaultPrevented?a.defaultPrevented:0==a.returnValue}function cg(a){return a.target||a.srcElement}function dg(a){var b=a.which;return null==b&&(1&a.button?b=1:2&a.button?b=3:4&a.button&&(b=2)),r&&a.ctrlKey&&1==b&&(b=3),b}function jg(a,b){function e(a){return function(){a.apply(null,d)}}var c=a._handlers&&a._handlers[b];if(c){var d=Array.prototype.slice.call(arguments,2);hg||(++ig,hg=[],setTimeout(kg,0));for(var f=0;f<c.length;++f)hg.push(e(c[f]))}}function kg(){--ig;var a=hg;hg=null;for(var b=0;b<a.length;++b)a[b]()}function lg(a,b,c){return gg(a,c||b.type,a,b),ag(b)||b.codemirrorIgnore}function mg(a){var b=a._handlers&&a._handlers.cursorActivity;if(b)for(var c=a.curOp.cursorActivityHandlers||(a.curOp.cursorActivityHandlers=[]),d=0;d<b.length;++d)-1==Bg(c,b[d])&&c.push(b[d])}function ng(a,b){var c=a._handlers&&a._handlers[b];return c&&c.length>0}function og(a){a.prototype.on=function(a,b){eg(this,a,b)},a.prototype.off=function(a,b){fg(this,a,b)}}function ug(){this.id=null}function wg(a,b,c){for(var d=0,e=0;;){var f=a.indexOf("	",d);-1==f&&(f=a.length);var g=f-d;if(f==a.length||e+g>=b)return d+Math.min(g,b-e);if(e+=f-d,e+=c-e%c,d=f+1,e>=b)return d}}function yg(a){for(;xg.length<=a;)xg.push(zg(xg)+" ");return xg[a]}function zg(a){return a[a.length-1]}function Bg(a,b){for(var c=0;c<a.length;++c)if(a[c]==b)return c;return-1}function Cg(a,b){for(var c=[],d=0;d<a.length;d++)c[d]=b(a[d],d);return c}function Dg(a,b){var c;if(Object.create)c=Object.create(a);else{var d=function(){};d.prototype=a,c=new d}return b&&Eg(b,c),c}function Eg(a,b,c){b||(b={});for(var d in a)!a.hasOwnProperty(d)||c===!1&&b.hasOwnProperty(d)||(b[d]=a[d]);return b}function Fg(a){var b=Array.prototype.slice.call(arguments,1);return function(){return a.apply(null,b)}}function Ig(a){for(var b in a)if(a.hasOwnProperty(b)&&a[b])return!1;return!0}function Kg(a){return a.charCodeAt(0)>=768&&Jg.test(a)}function Lg(a,b,c,d){var e=document.createElement(a);if(c&&(e.className=c),d&&(e.style.cssText=d),"string"==typeof b)e.appendChild(document.createTextNode(b));else if(b)for(var f=0;f<b.length;++f)e.appendChild(b[f]);return e}function Ng(a){for(var b=a.childNodes.length;b>0;--b)a.removeChild(a.firstChild);return a}function Og(a,b){return Ng(a).appendChild(b)}function Pg(a,b){if(a.contains)return a.contains(b);for(;b=b.parentNode;)if(b==a)return!0}function Qg(){return document.activeElement}function Rg(a){return new RegExp("\\b"+a+"\\b\\s*")}function Sg(a,b){var c=Rg(b);c.test(a.className)&&(a.className=a.className.replace(c,""))}function Tg(a,b){Rg(b).test(a.className)||(a.className+=" "+b)}function Ug(a,b){for(var c=a.split(" "),d=0;d<c.length;d++)c[d]&&!Rg(c[d]).test(b)&&(b+=" "+c[d]);return b}function Vg(a){if(document.body.getElementsByClassName)for(var b=document.body.getElementsByClassName("CodeMirror"),c=0;c<b.length;c++){var d=b[c].CodeMirror;d&&a(d)}}function Xg(){Wg||(Yg(),Wg=!0)}function Yg(){var a;eg(window,"resize",function(){null==a&&(a=setTimeout(function(){a=null,$g=null,Vg(Uc)},100))}),eg(window,"blur",function(){Vg(wd)})}function _g(a){if(null!=$g)return $g;var b=Lg("div",null,null,"width: 50px; height: 50px; overflow-x: scroll");return Og(a,b),b.offsetWidth&&($g=b.offsetHeight-b.clientHeight),$g||0}function bh(a){if(null==ah){var b=Lg("span","\u200b");Og(a,Lg("span",[b,document.createTextNode("x")])),0!=a.firstChild.offsetHeight&&(ah=b.offsetWidth<=1&&b.offsetHeight>2&&!c)}return ah?Lg("span","\u200b"):Lg("span","\xa0",null,"display: inline-block; width: 1px; margin-right: -1px")}function dh(a){if(null!=ch)return ch;var b=Og(a,document.createTextNode("A\u062eA")),c=Mg(b,0,1).getBoundingClientRect();if(c.left==c.right)return!1;var d=Mg(b,1,2).getBoundingClientRect();return ch=d.right-c.right<3}function ih(a,b,c,d){if(!a)return d(b,c,"ltr");for(var e=!1,f=0;f<a.length;++f){var g=a[f];(g.from<c&&g.to>b||b==c&&g.to==b)&&(d(Math.max(g.from,b),Math.min(g.to,c),1==g.level?"rtl":"ltr"),e=!0)}e||d(b,c,"ltr")}function jh(a){return a.level%2?a.to:a.from}function kh(a){return a.level%2?a.from:a.to}function lh(a){var b=Kf(a);return b?jh(b[0]):0}function mh(a){var b=Kf(a);return b?kh(zg(b)):a.text.length}function nh(a,b){var c=Df(a.doc,b),d=Qe(c);d!=c&&(b=Hf(d));var e=Kf(d),f=e?e[0].level%2?mh(d):lh(d):0;return nb(b,f)}function oh(a,b){for(var c,d=Df(a.doc,b);c=Oe(d);)d=c.find(1,!0).line,b=null;var e=Kf(d),f=e?e[0].level%2?lh(d):mh(d):d.text.length;return nb(null==b?Hf(d):b,f)}function ph(a,b,c){var d=a[0].level;return b==d?!0:c==d?!1:c>b}function rh(a,b){qh=null;for(var d,c=0;c<a.length;++c){var e=a[c];if(e.from<b&&e.to>b)return c;if(e.from==b||e.to==b){if(null!=d)return ph(a,e.level,a[d].level)?(e.from!=e.to&&(qh=d),c):(e.from!=e.to&&(qh=c),d);d=c}}return d}function sh(a,b,c,d){if(!d)return b+c;do b+=c;while(b>0&&Kg(a.text.charAt(b)));return b}function th(a,b,c,d){var e=Kf(a);if(!e)return uh(a,b,c,d);for(var f=rh(e,b),g=e[f],h=sh(a,b,g.level%2?-c:c,d);;){if(h>g.from&&h<g.to)return h;if(h==g.from||h==g.to)return rh(e,h)==f?h:(g=e[f+=c],c>0==g.level%2?g.to:g.from);if(g=e[f+=c],!g)return null;h=c>0==g.level%2?sh(a,g.to,-1,d):sh(a,g.from,1,d)}}function uh(a,b,c,d){var e=b+c;if(d)for(;e>0&&Kg(a.text.charAt(e));)e+=c;return 0>e||e>a.text.length?null:e}var a=/gecko\/\d/i.test(navigator.userAgent),b=/MSIE \d/.test(navigator.userAgent),c=b&&(null==document.documentMode||document.documentMode<8),d=b&&(null==document.documentMode||document.documentMode<9),e=b&&(null==document.documentMode||document.documentMode<10),f=/Trident\/([7-9]|\d{2,})\./.test(navigator.userAgent),g=b||f,h=/WebKit\//.test(navigator.userAgent),i=h&&/Qt\/\d+\.\d+/.test(navigator.userAgent),j=/Chrome\//.test(navigator.userAgent),k=/Opera\//.test(navigator.userAgent),l=/Apple Computer/.test(navigator.vendor),m=/KHTML\//.test(navigator.userAgent),n=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(navigator.userAgent),o=/PhantomJS/.test(navigator.userAgent),p=/AppleWebKit/.test(navigator.userAgent)&&/Mobile\/\w+/.test(navigator.userAgent),q=p||/Android|webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(navigator.userAgent),r=p||/Mac/.test(navigator.platform),s=/win/i.test(navigator.platform),t=k&&navigator.userAgent.match(/Version\/(\d*\.\d*)/);t&&(t=Number(t[1])),t&&t>=15&&(k=!1,h=!0);var u=r&&(i||k&&(null==t||12.11>t)),v=a||g&&!d,w=!1,x=!1,nb=y.Pos=function(a,b){return this instanceof nb?(this.line=a,this.ch=b,void 0):new nb(a,b)},ob=y.cmpPos=function(a,b){return a.line-b.line||a.ch-b.ch};sb.prototype={primary:function(){return this.ranges[this.primIndex]},equals:function(a){if(a==this)return!0;if(a.primIndex!=this.primIndex||a.ranges.length!=this.ranges.length)return!1;for(var b=0;b<this.ranges.length;b++){var c=this.ranges[b],d=a.ranges[b];if(0!=ob(c.anchor,d.anchor)||0!=ob(c.head,d.head))return!1}return!0},deepCopy:function(){for(var a=[],b=0;b<this.ranges.length;b++)a[b]=new tb(pb(this.ranges[b].anchor),pb(this.ranges[b].head));return new sb(a,this.primIndex)},somethingSelected:function(){for(var a=0;a<this.ranges.length;a++)if(!this.ranges[a].empty())return!0;return!1},contains:function(a,b){b||(b=a);for(var c=0;c<this.ranges.length;c++){var d=this.ranges[c];if(ob(b,d.from())>=0&&ob(a,d.to())<=0)return c}return-1}},tb.prototype={from:function(){return rb(this.anchor,this.head)},to:function(){return qb(this.anchor,this.head)},empty:function(){return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch}};var tc,Yc,Zc,ec={left:0,right:0,top:0,bottom:0},wc=0,dd=0,id=0,jd=null;g?jd=-.53:a?jd=15:j?jd=-.7:l&&(jd=-1/3);var nd,qd=null,zd=y.changeEnd=function(a){return a.text?nb(a.from.line+a.text.length-1,zg(a.text).length+(1==a.text.length?a.from.ch:0)):a.to};y.prototype={constructor:y,focus:function(){window.focus(),Qc(this),Nc(this)},setOption:function(a,b){var c=this.options,d=c[a];(c[a]!=b||"mode"==a)&&(c[a]=b,$d.hasOwnProperty(a)&&Ac(this,$d[a])(this,b,d))},getOption:function(a){return this.options[a]},getDoc:function(){return this.doc},addKeyMap:function(a,b){this.state.keyMaps[b?"push":"unshift"](a)},removeKeyMap:function(a){for(var b=this.state.keyMaps,c=0;c<b.length;++c)if(b[c]==a||"string"!=typeof b[c]&&b[c].name==a)return b.splice(c,1),!0},addOverlay:Bc(function(a,b){var c=a.token?a:y.getMode(this.options,a);if(c.startState)throw new Error("Overlays may not be stateful.");this.state.overlays.push({mode:c,modeSpec:a,opaque:b&&b.opaque}),this.state.modeGen++,Fc(this)}),removeOverlay:Bc(function(a){for(var b=this.state.overlays,c=0;c<b.length;++c){var d=b[c].modeSpec;if(d==a||"string"==typeof a&&d.name==a)return b.splice(c,1),this.state.modeGen++,Fc(this),void 0}}),indentLine:Bc(function(a,b,c){"string"!=typeof b&&"number"!=typeof b&&(b=null==b?this.options.smartIndent?"smart":"prev":b?"add":"subtract"),zb(this.doc,a)&&Td(this,a,b,c)}),indentSelection:Bc(function(a){for(var b=this.doc.sel.ranges,c=-1,d=0;d<b.length;d++){var e=b[d];if(e.empty())e.head.line>c&&(Td(this,e.head.line,a,!0),c=e.head.line,d==this.doc.sel.primIndex&&Rd(this));else{var f=Math.max(c,e.from().line),g=e.to();c=Math.min(this.lastLine(),g.line-(g.ch?0:1))+1;for(var h=f;c>h;++h)Td(this,h,a)}}}),getTokenAt:function(a,b){var c=this.doc;a=xb(c,a);for(var d=Vb(this,a.line,b),e=this.doc.mode,f=Df(c,a.line),g=new oe(f.text,this.options.tabSize);g.pos<a.ch&&!g.eol();){g.start=g.pos;var h=df(e,g,d)}return{start:g.start,end:g.pos,string:g.current(),type:h||null,state:d}},getTokenTypeAt:function(a){a=xb(this.doc,a);var f,b=gf(this,Df(this.doc,a.line)),c=0,d=(b.length-1)/2,e=a.ch;if(0==e)f=b[2];else for(;;){var g=c+d>>1;if((g?b[2*g-1]:0)>=e)d=g;else{if(!(b[2*g+1]<e)){f=b[2*g+2];break}c=g+1}}var h=f?f.indexOf("cm-overlay "):-1;return 0>h?f:0==h?null:f.slice(0,h-1)},getModeAt:function(a){var b=this.doc.mode;return b.innerMode?y.innerMode(b,this.getTokenAt(a).state).mode:b},getHelper:function(a,b){return this.getHelpers(a,b)[0]},getHelpers:function(a,b){var c=[];if(!fe.hasOwnProperty(b))return fe;var d=fe[b],e=this.getModeAt(a);if("string"==typeof e[b])d[e[b]]&&c.push(d[e[b]]);else if(e[b])for(var f=0;f<e[b].length;f++){var g=d[e[b][f]];g&&c.push(g)}else e.helperType&&d[e.helperType]?c.push(d[e.helperType]):d[e.name]&&c.push(d[e.name]);for(var f=0;f<d._global.length;f++){var h=d._global[f];h.pred(e,this)&&-1==Bg(c,h.val)&&c.push(h.val)}return c},getStateAfter:function(a,b){var c=this.doc;return a=wb(c,null==a?c.first+c.size-1:a),Vb(this,a+1,b)},cursorCoords:function(a,b){var c,d=this.doc.sel.primary();return c=null==a?d.head:"object"==typeof a?xb(this.doc,a):a?d.from():d.to(),oc(this,c,b||"page")},charCoords:function(a,b){return nc(this,xb(this.doc,a),b||"page")},coordsChar:function(a,b){return a=mc(this,a,b||"page"),rc(this,a.left,a.top)},lineAtHeight:function(a,b){return a=mc(this,{top:a,left:0},b||"page").top,If(this.doc,a+this.display.viewOffset)},heightAtLine:function(a,b){var c=!1,d=this.doc.first+this.doc.size-1;a<this.doc.first?a=this.doc.first:a>d&&(a=d,c=!0);var e=Df(this.doc,a);return lc(this,e,{top:0,left:0},b||"page").top+(c?this.doc.height-Jf(e):0)},defaultTextHeight:function(){return uc(this.display)},defaultCharWidth:function(){return vc(this.display)},setGutterMarker:Bc(function(a,b,c){return Ud(this,a,"gutter",function(a){var d=a.gutterMarkers||(a.gutterMarkers={});return d[b]=c,!c&&Ig(d)&&(a.gutterMarkers=null),!0})}),clearGutter:Bc(function(a){var b=this,c=b.doc,d=c.first;c.iter(function(c){c.gutterMarkers&&c.gutterMarkers[a]&&(c.gutterMarkers[a]=null,Gc(b,d,"gutter"),Ig(c.gutterMarkers)&&(c.gutterMarkers=null)),++d})}),addLineClass:Bc(function(a,b,c){return Ud(this,a,"class",function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"wrapClass";if(a[d]){if(new RegExp("(?:^|\\s)"+c+"(?:$|\\s)").test(a[d]))return!1;a[d]+=" "+c}else a[d]=c;return!0})}),removeLineClass:Bc(function(a,b,c){return Ud(this,a,"class",function(a){var d="text"==b?"textClass":"background"==b?"bgClass":"wrapClass",e=a[d];if(!e)return!1;if(null==c)a[d]=null;else{var f=e.match(new RegExp("(?:^|\\s+)"+c+"(?:$|\\s+)"));if(!f)return!1;var g=f.index+f[0].length;a[d]=e.slice(0,f.index)+(f.index&&g!=e.length?" ":"")+e.slice(g)||null}return!0})}),addLineWidget:Bc(function(a,b,c){return Ze(this,a,b,c)}),removeLineWidget:function(a){a.clear()},lineInfo:function(a){if("number"==typeof a){if(!zb(this.doc,a))return null;var b=a;if(a=Df(this.doc,a),!a)return null}else{var b=Hf(a);if(null==b)return null}return{line:b,handle:a,text:a.text,gutterMarkers:a.gutterMarkers,textClass:a.textClass,bgClass:a.bgClass,wrapClass:a.wrapClass,widgets:a.widgets}},getViewport:function(){return{from:this.display.viewFrom,to:this.display.viewTo}},addWidget:function(a,b,c,d,e){var f=this.display;a=oc(this,xb(this.doc,a));var g=a.bottom,h=a.left;if(b.style.position="absolute",f.sizer.appendChild(b),"over"==d)g=a.top;else if("above"==d||"near"==d){var i=Math.max(f.wrapper.clientHeight,this.doc.height),j=Math.max(f.sizer.clientWidth,f.lineSpace.clientWidth);("above"==d||a.bottom+b.offsetHeight>i)&&a.top>b.offsetHeight?g=a.top-b.offsetHeight:a.bottom+b.offsetHeight<=i&&(g=a.bottom),h+b.offsetWidth>j&&(h=j-b.offsetWidth)}b.style.top=g+"px",b.style.left=b.style.right="","right"==e?(h=f.sizer.clientWidth-b.offsetWidth,b.style.right="0px"):("left"==e?h=0:"middle"==e&&(h=(f.sizer.clientWidth-b.offsetWidth)/2),b.style.left=h+"px"),c&&Od(this,h,g,h+b.offsetWidth,g+b.offsetHeight)},triggerOnKeyDown:Bc(rd),triggerOnKeyPress:Bc(ud),triggerOnKeyUp:Bc(td),execCommand:function(a){return ie.hasOwnProperty(a)?ie[a](this):void 0},findPosH:function(a,b,c,d){var e=1;0>b&&(e=-1,b=-b);for(var f=0,g=xb(this.doc,a);b>f&&(g=Wd(this.doc,g,e,c,d),!g.hitSide);++f);return g},moveH:Bc(function(a,b){var c=this;c.extendSelectionsBy(function(d){return c.display.shift||c.doc.extend||d.empty()?Wd(c.doc,d.head,a,b,c.options.rtlMoveVisually):0>a?d.from():d.to()},tg)}),deleteH:Bc(function(a,b){var c=this.doc.sel,d=this.doc;c.somethingSelected()?d.replaceSelection("",null,"+delete"):Vd(this,function(c){var e=Wd(d,c.head,a,b,!1);return 0>a?{from:e,to:c.head}:{from:c.head,to:e}})}),findPosV:function(a,b,c,d){var e=1,f=d;0>b&&(e=-1,b=-b);for(var g=0,h=xb(this.doc,a);b>g;++g){var i=oc(this,h,"div");if(null==f?f=i.left:i.left=f,h=Xd(this,i,e,c),h.hitSide)break}return h},moveV:Bc(function(a,b){var c=this,d=this.doc,e=[],f=!c.display.shift&&!d.extend&&d.sel.somethingSelected();if(d.extendSelectionsBy(function(g){if(f)return 0>a?g.from():g.to();var h=oc(c,g.head,"div");null!=g.goalColumn&&(h.left=g.goalColumn),e.push(h.left);var i=Xd(c,h,a,b);return"page"==b&&g==d.sel.primary()&&Qd(c,null,nc(c,i,"div").top-h.top),i},tg),e.length)for(var g=0;g<d.sel.ranges.length;g++)d.sel.ranges[g].goalColumn=e[g]}),toggleOverwrite:function(a){(null==a||a!=this.state.overwrite)&&((this.state.overwrite=!this.state.overwrite)?Tg(this.display.cursorDiv,"CodeMirror-overwrite"):Sg(this.display.cursorDiv,"CodeMirror-overwrite"),gg(this,"overwriteToggle",this,this.state.overwrite))},hasFocus:function(){return Qg()==this.display.input},scrollTo:Bc(function(a,b){(null!=a||null!=b)&&Sd(this),null!=a&&(this.curOp.scrollLeft=a),null!=b&&(this.curOp.scrollTop=b)}),getScrollInfo:function(){var a=this.display.scroller,b=pg;return{left:a.scrollLeft,top:a.scrollTop,height:a.scrollHeight-b,width:a.scrollWidth-b,clientHeight:a.clientHeight-b,clientWidth:a.clientWidth-b}},scrollIntoView:Bc(function(a,b){if(null==a?(a={from:this.doc.sel.primary().head,to:null},null==b&&(b=this.options.cursorScrollMargin)):"number"==typeof a?a={from:nb(a,0),to:null}:null==a.from&&(a={from:a,to:null}),a.to||(a.to=a.from),a.margin=b||0,null!=a.from.line)Sd(this),this.curOp.scrollToPos=a;else{var c=Pd(this,Math.min(a.from.left,a.to.left),Math.min(a.from.top,a.to.top)-a.margin,Math.max(a.from.right,a.to.right),Math.max(a.from.bottom,a.to.bottom)+a.margin);this.scrollTo(c.scrollLeft,c.scrollTop)}}),setSize:Bc(function(a,b){function c(a){return"number"==typeof a||/^\d+$/.test(String(a))?a+"px":a}null!=a&&(this.display.wrapper.style.width=c(a)),null!=b&&(this.display.wrapper.style.height=c(b)),this.options.lineWrapping&&hc(this),this.curOp.forceUpdate=!0,gg(this,"refresh",this)}),operation:function(a){return zc(this,a)},refresh:Bc(function(){var a=this.display.cachedTextHeight;Fc(this),this.curOp.forceUpdate=!0,ic(this),this.scrollTo(this.doc.scrollLeft,this.doc.scrollTop),J(this),(null==a||Math.abs(a-uc(this.display))>.5)&&E(this),gg(this,"refresh",this)}),swapDoc:Bc(function(a){var b=this.doc;return b.cm=null,Cf(this,a),ic(this),Pc(this),this.scrollTo(a.scrollLeft,a.scrollTop),jg(this,"swapDoc",this,b),b}),getInputField:function(){return this.display.input},getWrapperElement:function(){return this.display.wrapper},getScrollerElement:function(){return this.display.scroller},getGutterElement:function(){return this.display.gutters}},og(y);var Zd=y.defaults={},$d=y.optionHandlers={},ae=y.Init={toString:function(){return"CodeMirror.Init"}};_d("value","",function(a,b){a.setValue(b)},!0),_d("mode",null,function(a,b){a.doc.modeOption=b,A(a)
},!0),_d("indentUnit",2,A,!0),_d("indentWithTabs",!1),_d("smartIndent",!0),_d("tabSize",4,function(a){B(a),ic(a),Fc(a)},!0),_d("specialChars",/[\t\u0000-\u0019\u00ad\u200b\u2028\u2029\ufeff]/g,function(a,b){a.options.specialChars=new RegExp(b.source+(b.test("	")?"":"|	"),"g"),a.refresh()},!0),_d("specialCharPlaceholder",nf,function(a){a.refresh()},!0),_d("electricChars",!0),_d("rtlMoveVisually",!s),_d("wholeLineUpdateBefore",!0),_d("theme","default",function(a){G(a),H(a)},!0),_d("keyMap","default",F),_d("extraKeys",null),_d("lineWrapping",!1,C,!0),_d("gutters",[],function(a){M(a.options),H(a)},!0),_d("fixedGutter",!0,function(a,b){a.display.gutters.style.left=b?T(a.display)+"px":"0",a.refresh()},!0),_d("coverGutterNextToScrollbar",!1,O,!0),_d("lineNumbers",!1,function(a){M(a.options),H(a)},!0),_d("firstLineNumber",1,H,!0),_d("lineNumberFormatter",function(a){return a},H,!0),_d("showCursorWhenSelecting",!1,Ob,!0),_d("resetSelectionOnContextMenu",!0),_d("readOnly",!1,function(a,b){"nocursor"==b?(wd(a),a.display.input.blur(),a.display.disabled=!0):(a.display.disabled=!1,b||Pc(a))}),_d("disableInput",!1,function(a,b){b||Pc(a)},!0),_d("dragDrop",!0),_d("cursorBlinkRate",530),_d("cursorScrollMargin",0),_d("cursorHeight",1),_d("workTime",100),_d("workDelay",100),_d("flattenSpans",!0,B,!0),_d("addModeClass",!1,B,!0),_d("pollInterval",100),_d("undoDepth",200,function(a,b){a.doc.history.undoDepth=b}),_d("historyEventDelay",1250),_d("viewportMargin",10,function(a){a.refresh()},!0),_d("maxHighlightLength",1e4,B,!0),_d("moveInputWithCursor",!0,function(a,b){b||(a.display.inputDiv.style.top=a.display.inputDiv.style.left=0)}),_d("tabindex",null,function(a,b){a.display.input.tabIndex=b||""}),_d("autofocus",null);var be=y.modes={},ce=y.mimeModes={};y.defineMode=function(a,b){if(y.defaults.mode||"null"==a||(y.defaults.mode=a),arguments.length>2){b.dependencies=[];for(var c=2;c<arguments.length;++c)b.dependencies.push(arguments[c])}be[a]=b},y.defineMIME=function(a,b){ce[a]=b},y.resolveMode=function(a){if("string"==typeof a&&ce.hasOwnProperty(a))a=ce[a];else if(a&&"string"==typeof a.name&&ce.hasOwnProperty(a.name)){var b=ce[a.name];"string"==typeof b&&(b={name:b}),a=Dg(b,a),a.name=b.name}else if("string"==typeof a&&/^[\w\-]+\/[\w\-]+\+xml$/.test(a))return y.resolveMode("application/xml");return"string"==typeof a?{name:a}:a||{name:"null"}},y.getMode=function(a,b){var b=y.resolveMode(b),c=be[b.name];if(!c)return y.getMode(a,"text/plain");var d=c(a,b);if(de.hasOwnProperty(b.name)){var e=de[b.name];for(var f in e)e.hasOwnProperty(f)&&(d.hasOwnProperty(f)&&(d["_"+f]=d[f]),d[f]=e[f])}if(d.name=b.name,b.helperType&&(d.helperType=b.helperType),b.modeProps)for(var f in b.modeProps)d[f]=b.modeProps[f];return d},y.defineMode("null",function(){return{token:function(a){a.skipToEnd()}}}),y.defineMIME("text/plain","null");var de=y.modeExtensions={};y.extendMode=function(a,b){var c=de.hasOwnProperty(a)?de[a]:de[a]={};Eg(b,c)},y.defineExtension=function(a,b){y.prototype[a]=b},y.defineDocExtension=function(a,b){yf.prototype[a]=b},y.defineOption=_d;var ee=[];y.defineInitHook=function(a){ee.push(a)};var fe=y.helpers={};y.registerHelper=function(a,b,c){fe.hasOwnProperty(a)||(fe[a]=y[a]={_global:[]}),fe[a][b]=c},y.registerGlobalHelper=function(a,b,c,d){y.registerHelper(a,b,d),fe[a]._global.push({pred:c,val:d})};var ge=y.copyState=function(a,b){if(b===!0)return b;if(a.copyState)return a.copyState(b);var c={};for(var d in b){var e=b[d];e instanceof Array&&(e=e.concat([])),c[d]=e}return c},he=y.startState=function(a,b,c){return a.startState?a.startState(b,c):!0};y.innerMode=function(a,b){for(;a.innerMode;){var c=a.innerMode(b);if(!c||c.mode==a)break;b=c.state,a=c.mode}return c||{mode:a,state:b}};var ie=y.commands={selectAll:function(a){a.setSelection(nb(a.firstLine(),0),nb(a.lastLine()),rg)},singleSelection:function(a){a.setSelection(a.getCursor("anchor"),a.getCursor("head"),rg)},killLine:function(a){Vd(a,function(b){if(b.empty()){var c=Df(a.doc,b.head.line).text.length;return b.head.ch==c&&b.head.line<a.lastLine()?{from:b.head,to:nb(b.head.line+1,0)}:{from:b.head,to:nb(b.head.line,c)}}return{from:b.from(),to:b.to()}})},deleteLine:function(a){Vd(a,function(b){return{from:nb(b.from().line,0),to:xb(a.doc,nb(b.to().line+1,0))}})},delLineLeft:function(a){Vd(a,function(a){return{from:nb(a.from().line,0),to:a.from()}})},undo:function(a){a.undo()},redo:function(a){a.redo()},undoSelection:function(a){a.undoSelection()},redoSelection:function(a){a.redoSelection()},goDocStart:function(a){a.extendSelection(nb(a.firstLine(),0))},goDocEnd:function(a){a.extendSelection(nb(a.lastLine()))},goLineStart:function(a){a.extendSelectionsBy(function(b){return nh(a,b.head.line)},tg)},goLineStartSmart:function(a){a.extendSelectionsBy(function(b){var c=nh(a,b.head.line),d=a.getLineHandle(c.line),e=Kf(d);if(!e||0==e[0].level){var f=Math.max(0,d.text.search(/\S/)),g=b.head.line==c.line&&b.head.ch<=f&&b.head.ch;return nb(c.line,g?0:f)}return c},tg)},goLineEnd:function(a){a.extendSelectionsBy(function(b){return oh(a,b.head.line)},tg)},goLineRight:function(a){a.extendSelectionsBy(function(b){var c=a.charCoords(b.head,"div").top+5;return a.coordsChar({left:a.display.lineDiv.offsetWidth+100,top:c},"div")},tg)},goLineLeft:function(a){a.extendSelectionsBy(function(b){var c=a.charCoords(b.head,"div").top+5;return a.coordsChar({left:0,top:c},"div")},tg)},goLineUp:function(a){a.moveV(-1,"line")},goLineDown:function(a){a.moveV(1,"line")},goPageUp:function(a){a.moveV(-1,"page")},goPageDown:function(a){a.moveV(1,"page")},goCharLeft:function(a){a.moveH(-1,"char")},goCharRight:function(a){a.moveH(1,"char")},goColumnLeft:function(a){a.moveH(-1,"column")},goColumnRight:function(a){a.moveH(1,"column")},goWordLeft:function(a){a.moveH(-1,"word")},goGroupRight:function(a){a.moveH(1,"group")},goGroupLeft:function(a){a.moveH(-1,"group")},goWordRight:function(a){a.moveH(1,"word")},delCharBefore:function(a){a.deleteH(-1,"char")},delCharAfter:function(a){a.deleteH(1,"char")},delWordBefore:function(a){a.deleteH(-1,"word")},delWordAfter:function(a){a.deleteH(1,"word")},delGroupBefore:function(a){a.deleteH(-1,"group")},delGroupAfter:function(a){a.deleteH(1,"group")},indentAuto:function(a){a.indentSelection("smart")},indentMore:function(a){a.indentSelection("add")},indentLess:function(a){a.indentSelection("subtract")},insertTab:function(a){a.replaceSelection("	")},insertSoftTab:function(a){for(var b=[],c=a.listSelections(),d=a.options.tabSize,e=0;e<c.length;e++){var f=c[e].from(),g=vg(a.getLine(f.line),f.ch,d);b.push(new Array(d-g%d+1).join(" "))}a.replaceSelections(b)},defaultTab:function(a){a.somethingSelected()?a.indentSelection("add"):a.execCommand("insertTab")},transposeChars:function(a){zc(a,function(){for(var b=a.listSelections(),c=0;c<b.length;c++){var d=b[c].head,e=Df(a.doc,d.line).text;d.ch>0&&d.ch<e.length-1&&a.replaceRange(e.charAt(d.ch)+e.charAt(d.ch-1),nb(d.line,d.ch-1),nb(d.line,d.ch+1))}})},newlineAndIndent:function(a){zc(a,function(){for(var b=a.listSelections().length,c=0;b>c;c++){var d=a.listSelections()[c];a.replaceRange("\n",d.anchor,d.head,"+input"),a.indentLine(d.from().line+1,null,!0),Rd(a)}})},toggleOverwrite:function(a){a.toggleOverwrite()}},je=y.keyMap={};je.basic={Left:"goCharLeft",Right:"goCharRight",Up:"goLineUp",Down:"goLineDown",End:"goLineEnd",Home:"goLineStartSmart",PageUp:"goPageUp",PageDown:"goPageDown",Delete:"delCharAfter",Backspace:"delCharBefore","Shift-Backspace":"delCharBefore",Tab:"defaultTab","Shift-Tab":"indentAuto",Enter:"newlineAndIndent",Insert:"toggleOverwrite",Esc:"singleSelection"},je.pcDefault={"Ctrl-A":"selectAll","Ctrl-D":"deleteLine","Ctrl-Z":"undo","Shift-Ctrl-Z":"redo","Ctrl-Y":"redo","Ctrl-Home":"goDocStart","Ctrl-Up":"goDocStart","Ctrl-End":"goDocEnd","Ctrl-Down":"goDocEnd","Ctrl-Left":"goGroupLeft","Ctrl-Right":"goGroupRight","Alt-Left":"goLineStart","Alt-Right":"goLineEnd","Ctrl-Backspace":"delGroupBefore","Ctrl-Delete":"delGroupAfter","Ctrl-S":"save","Ctrl-F":"find","Ctrl-G":"findNext","Shift-Ctrl-G":"findPrev","Shift-Ctrl-F":"replace","Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess","Ctrl-]":"indentMore","Ctrl-U":"undoSelection","Shift-Ctrl-U":"redoSelection","Alt-U":"redoSelection",fallthrough:"basic"},je.macDefault={"Cmd-A":"selectAll","Cmd-D":"deleteLine","Cmd-Z":"undo","Shift-Cmd-Z":"redo","Cmd-Y":"redo","Cmd-Up":"goDocStart","Cmd-End":"goDocEnd","Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft","Alt-Right":"goGroupRight","Cmd-Left":"goLineStart","Cmd-Right":"goLineEnd","Alt-Backspace":"delGroupBefore","Ctrl-Alt-Backspace":"delGroupAfter","Alt-Delete":"delGroupAfter","Cmd-S":"save","Cmd-F":"find","Cmd-G":"findNext","Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace","Shift-Cmd-Alt-F":"replaceAll","Cmd-[":"indentLess","Cmd-]":"indentMore","Cmd-Backspace":"delLineLeft","Cmd-U":"undoSelection","Shift-Cmd-U":"redoSelection",fallthrough:["basic","emacsy"]},je.emacsy={"Ctrl-F":"goCharRight","Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp","Ctrl-N":"goLineDown","Alt-F":"goWordRight","Alt-B":"goWordLeft","Ctrl-A":"goLineStart","Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown","Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter","Ctrl-H":"delCharBefore","Alt-D":"delWordAfter","Alt-Backspace":"delWordBefore","Ctrl-K":"killLine","Ctrl-T":"transposeChars"},je["default"]=r?je.macDefault:je.pcDefault;var le=y.lookupKey=function(a,b,c){function d(b){b=ke(b);var e=b[a];if(e===!1)return"stop";if(null!=e&&c(e))return!0;if(b.nofallthrough)return"stop";var f=b.fallthrough;if(null==f)return!1;if("[object Array]"!=Object.prototype.toString.call(f))return d(f);for(var g=0;g<f.length;++g){var h=d(f[g]);if(h)return h}return!1}for(var e=0;e<b.length;++e){var f=d(b[e]);if(f)return"stop"!=f}},me=y.isModifierKey=function(a){var b=hh[a.keyCode];return"Ctrl"==b||"Alt"==b||"Shift"==b||"Mod"==b},ne=y.keyName=function(a,b){if(k&&34==a.keyCode&&a["char"])return!1;var c=hh[a.keyCode];return null==c||a.altGraphKey?!1:(a.altKey&&(c="Alt-"+c),(u?a.metaKey:a.ctrlKey)&&(c="Ctrl-"+c),(u?a.ctrlKey:a.metaKey)&&(c="Cmd-"+c),!b&&a.shiftKey&&(c="Shift-"+c),c)};y.fromTextArea=function(a,b){function d(){a.value=i.getValue()}if(b||(b={}),b.value=a.value,!b.tabindex&&a.tabindex&&(b.tabindex=a.tabindex),!b.placeholder&&a.placeholder&&(b.placeholder=a.placeholder),null==b.autofocus){var c=Qg();b.autofocus=c==a||null!=a.getAttribute("autofocus")&&c==document.body}if(a.form&&(eg(a.form,"submit",d),!b.leaveSubmitMethodAlone)){var e=a.form,f=e.submit;try{var g=e.submit=function(){d(),e.submit=f,e.submit(),e.submit=g}}catch(h){}}a.style.display="none";var i=y(function(b){a.parentNode.insertBefore(b,a.nextSibling)},b);return i.save=d,i.getTextArea=function(){return a},i.toTextArea=function(){d(),a.parentNode.removeChild(i.getWrapperElement()),a.style.display="",a.form&&(fg(a.form,"submit",d),"function"==typeof a.form.submit&&(a.form.submit=f))},i};var oe=y.StringStream=function(a,b){this.pos=this.start=0,this.string=a,this.tabSize=b||8,this.lastColumnPos=this.lastColumnValue=0,this.lineStart=0};oe.prototype={eol:function(){return this.pos>=this.string.length},sol:function(){return this.pos==this.lineStart},peek:function(){return this.string.charAt(this.pos)||void 0},next:function(){return this.pos<this.string.length?this.string.charAt(this.pos++):void 0},eat:function(a){var b=this.string.charAt(this.pos);if("string"==typeof a)var c=b==a;else var c=b&&(a.test?a.test(b):a(b));return c?(++this.pos,b):void 0},eatWhile:function(a){for(var b=this.pos;this.eat(a););return this.pos>b},eatSpace:function(){for(var a=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos;return this.pos>a},skipToEnd:function(){this.pos=this.string.length},skipTo:function(a){var b=this.string.indexOf(a,this.pos);return b>-1?(this.pos=b,!0):void 0},backUp:function(a){this.pos-=a},column:function(){return this.lastColumnPos<this.start&&(this.lastColumnValue=vg(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),this.lastColumnPos=this.start),this.lastColumnValue-(this.lineStart?vg(this.string,this.lineStart,this.tabSize):0)},indentation:function(){return vg(this.string,null,this.tabSize)-(this.lineStart?vg(this.string,this.lineStart,this.tabSize):0)},match:function(a,b,c){if("string"!=typeof a){var f=this.string.slice(this.pos).match(a);return f&&f.index>0?null:(f&&b!==!1&&(this.pos+=f[0].length),f)}var d=function(a){return c?a.toLowerCase():a},e=this.string.substr(this.pos,a.length);return d(e)==d(a)?(b!==!1&&(this.pos+=a.length),!0):void 0},current:function(){return this.string.slice(this.start,this.pos)},hideFirstChars:function(a,b){this.lineStart+=a;try{return b()}finally{this.lineStart-=a}}};var pe=y.TextMarker=function(a,b){this.lines=[],this.type=b,this.doc=a};og(pe),pe.prototype.clear=function(){if(!this.explicitlyCleared){var a=this.doc.cm,b=a&&!a.curOp;if(b&&xc(a),ng(this,"clear")){var c=this.find();c&&jg(this,"clear",c.from,c.to)}for(var d=null,e=null,f=0;f<this.lines.length;++f){var g=this.lines[f],h=ye(g.markedSpans,this);a&&!this.collapsed?Gc(a,Hf(g),"text"):a&&(null!=h.to&&(e=Hf(g)),null!=h.from&&(d=Hf(g))),g.markedSpans=ze(g.markedSpans,h),null==h.from&&this.collapsed&&!Ue(this.doc,g)&&a&&Gf(g,uc(a.display))}if(a&&this.collapsed&&!a.options.lineWrapping)for(var f=0;f<this.lines.length;++f){var i=Qe(this.lines[f]),j=K(i);j>a.display.maxLineLength&&(a.display.maxLine=i,a.display.maxLineLength=j,a.display.maxLineChanged=!0)}null!=d&&a&&this.collapsed&&Fc(a,d,e+1),this.lines.length=0,this.explicitlyCleared=!0,this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,a&&Lb(a.doc)),a&&jg(a,"markerCleared",a,this),b&&yc(a),this.parent&&this.parent.clear()}},pe.prototype.find=function(a,b){null==a&&"bookmark"==this.type&&(a=1);for(var c,d,e=0;e<this.lines.length;++e){var f=this.lines[e],g=ye(f.markedSpans,this);if(null!=g.from&&(c=nb(b?f:Hf(f),g.from),-1==a))return c;if(null!=g.to&&(d=nb(b?f:Hf(f),g.to),1==a))return d}return c&&{from:c,to:d}},pe.prototype.changed=function(){var a=this.find(-1,!0),b=this,c=this.doc.cm;a&&c&&zc(c,function(){var d=a.line,e=Hf(a.line),f=bc(c,e);if(f&&(gc(f),c.curOp.selectionChanged=c.curOp.forceUpdate=!0),c.curOp.updateMaxLine=!0,!Ue(b.doc,d)&&null!=b.height){var g=b.height;b.height=null;var h=Ye(b)-g;h&&Gf(d,d.height+h)}})},pe.prototype.attachLine=function(a){if(!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;b.maybeHiddenMarkers&&-1!=Bg(b.maybeHiddenMarkers,this)||(b.maybeUnhiddenMarkers||(b.maybeUnhiddenMarkers=[])).push(this)}this.lines.push(a)},pe.prototype.detachLine=function(a){if(this.lines.splice(Bg(this.lines,a),1),!this.lines.length&&this.doc.cm){var b=this.doc.cm.curOp;(b.maybeHiddenMarkers||(b.maybeHiddenMarkers=[])).push(this)}};var qe=0,se=y.SharedTextMarker=function(a,b){this.markers=a,this.primary=b;for(var c=0;c<a.length;++c)a[c].parent=this};og(se),se.prototype.clear=function(){if(!this.explicitlyCleared){this.explicitlyCleared=!0;for(var a=0;a<this.markers.length;++a)this.markers[a].clear();jg(this,"clear")}},se.prototype.find=function(a,b){return this.primary.find(a,b)};var We=y.LineWidget=function(a,b,c){if(c)for(var d in c)c.hasOwnProperty(d)&&(this[d]=c[d]);this.cm=a,this.node=b};og(We),We.prototype.clear=function(){var a=this.cm,b=this.line.widgets,c=this.line,d=Hf(c);if(null!=d&&b){for(var e=0;e<b.length;++e)b[e]==this&&b.splice(e--,1);b.length||(c.widgets=null);var f=Ye(this);zc(a,function(){Xe(a,c,-f),Gc(a,d,"widget"),Gf(c,Math.max(0,c.height-f))})}},We.prototype.changed=function(){var a=this.height,b=this.cm,c=this.line;this.height=null;var d=Ye(this)-a;d&&zc(b,function(){b.curOp.forceUpdate=!0,Xe(b,c,d),Gf(c,c.height+d)})};var $e=y.Line=function(a,b,c){this.text=a,Ie(this,b),this.height=c?c(this):1};og($e),$e.prototype.lineNo=function(){return Hf(this)};var jf={},kf={};vf.prototype={chunkSize:function(){return this.lines.length},removeInner:function(a,b){for(var c=a,d=a+b;d>c;++c){var e=this.lines[c];this.height-=e.height,af(e),jg(e,"delete")}this.lines.splice(a,b)},collapse:function(a){a.push.apply(a,this.lines)},insertInner:function(a,b,c){this.height+=c,this.lines=this.lines.slice(0,a).concat(b).concat(this.lines.slice(a));for(var d=0;d<b.length;++d)b[d].parent=this},iterN:function(a,b,c){for(var d=a+b;d>a;++a)if(c(this.lines[a]))return!0}},wf.prototype={chunkSize:function(){return this.size},removeInner:function(a,b){this.size-=b;for(var c=0;c<this.children.length;++c){var d=this.children[c],e=d.chunkSize();if(e>a){var f=Math.min(b,e-a),g=d.height;if(d.removeInner(a,f),this.height-=g-d.height,e==f&&(this.children.splice(c--,1),d.parent=null),0==(b-=f))break;a=0}else a-=e}if(this.size-b<25&&(this.children.length>1||!(this.children[0]instanceof vf))){var h=[];this.collapse(h),this.children=[new vf(h)],this.children[0].parent=this}},collapse:function(a){for(var b=0;b<this.children.length;++b)this.children[b].collapse(a)},insertInner:function(a,b,c){this.size+=b.length,this.height+=c;for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(f>=a){if(e.insertInner(a,b,c),e.lines&&e.lines.length>50){for(;e.lines.length>50;){var g=e.lines.splice(e.lines.length-25,25),h=new vf(g);e.height-=h.height,this.children.splice(d+1,0,h),h.parent=this}this.maybeSpill()}break}a-=f}},maybeSpill:function(){if(!(this.children.length<=10)){var a=this;do{var b=a.children.splice(a.children.length-5,5),c=new wf(b);if(a.parent){a.size-=c.size,a.height-=c.height;var e=Bg(a.parent.children,a);a.parent.children.splice(e+1,0,c)}else{var d=new wf(a.children);d.parent=a,a.children=[d,c],a=d}c.parent=a.parent}while(a.children.length>10);a.parent.maybeSpill()}},iterN:function(a,b,c){for(var d=0;d<this.children.length;++d){var e=this.children[d],f=e.chunkSize();if(f>a){var g=Math.min(b,f-a);if(e.iterN(a,g,c))return!0;if(0==(b-=g))break;a=0}else a-=f}}};var xf=0,yf=y.Doc=function(a,b,c){if(!(this instanceof yf))return new yf(a,b,c);null==c&&(c=0),wf.call(this,[new vf([new $e("",null)])]),this.first=c,this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,this.frontier=c;var d=nb(c,0);this.sel=vb(d),this.history=new Lf(null),this.id=++xf,this.modeOption=b,"string"==typeof a&&(a=eh(a)),uf(this,{from:d,to:d,text:a}),Ib(this,vb(d),rg)};yf.prototype=Dg(wf.prototype,{constructor:yf,iter:function(a,b,c){c?this.iterN(a-this.first,b-a,c):this.iterN(this.first,this.first+this.size,a)},insert:function(a,b){for(var c=0,d=0;d<b.length;++d)c+=b[d].height;this.insertInner(a-this.first,b,c)},remove:function(a,b){this.removeInner(a-this.first,b)},getValue:function(a){var b=Ff(this,this.first,this.first+this.size);return a===!1?b:b.join(a||"\n")},setValue:Cc(function(a){var b=nb(this.first,0),c=this.first+this.size-1;Fd(this,{from:b,to:nb(c,Df(this,c).text.length),text:eh(a),origin:"setValue"},!0),Ib(this,vb(b))}),replaceRange:function(a,b,c,d){b=xb(this,b),c=c?xb(this,c):b,Ld(this,a,b,c,d)},getRange:function(a,b,c){var d=Ef(this,xb(this,a),xb(this,b));return c===!1?d:d.join(c||"\n")},getLine:function(a){var b=this.getLineHandle(a);return b&&b.text},getLineHandle:function(a){return zb(this,a)?Df(this,a):void 0},getLineNumber:function(a){return Hf(a)},getLineHandleVisualStart:function(a){return"number"==typeof a&&(a=Df(this,a)),Qe(a)},lineCount:function(){return this.size},firstLine:function(){return this.first},lastLine:function(){return this.first+this.size-1},clipPos:function(a){return xb(this,a)},getCursor:function(a){var c,b=this.sel.primary();return c=null==a||"head"==a?b.head:"anchor"==a?b.anchor:"end"==a||"to"==a||a===!1?b.to():b.from()},listSelections:function(){return this.sel.ranges},somethingSelected:function(){return this.sel.somethingSelected()},setCursor:Cc(function(a,b,c){Fb(this,xb(this,"number"==typeof a?nb(a,b||0):a),null,c)}),setSelection:Cc(function(a,b,c){Fb(this,xb(this,a),xb(this,b||a),c)}),extendSelection:Cc(function(a,b,c){Cb(this,xb(this,a),b&&xb(this,b),c)}),extendSelections:Cc(function(a,b){Db(this,Ab(this,a,b))}),extendSelectionsBy:Cc(function(a,b){Db(this,Cg(this.sel.ranges,a),b)}),setSelections:Cc(function(a,b,c){if(a.length){for(var d=0,e=[];d<a.length;d++)e[d]=new tb(xb(this,a[d].anchor),xb(this,a[d].head));null==b&&(b=Math.min(a.length-1,this.sel.primIndex)),Ib(this,ub(e,b),c)}}),addSelection:Cc(function(a,b,c){var d=this.sel.ranges.slice(0);d.push(new tb(xb(this,a),xb(this,b||a))),Ib(this,ub(d,d.length-1),c)}),getSelection:function(a){for(var c,b=this.sel.ranges,d=0;d<b.length;d++){var e=Ef(this,b[d].from(),b[d].to());c=c?c.concat(e):e}return a===!1?c:c.join(a||"\n")},getSelections:function(a){for(var b=[],c=this.sel.ranges,d=0;d<c.length;d++){var e=Ef(this,c[d].from(),c[d].to());a!==!1&&(e=e.join(a||"\n")),b[d]=e}return b},replaceSelection:function(a,b,c){for(var d=[],e=0;e<this.sel.ranges.length;e++)d[e]=a;this.replaceSelections(d,b,c||"+input")},replaceSelections:Cc(function(a,b,c){for(var d=[],e=this.sel,f=0;f<e.ranges.length;f++){var g=e.ranges[f];d[f]={from:g.from(),to:g.to(),text:eh(a[f]),origin:c}}for(var h=b&&"end"!=b&&Dd(this,d,b),f=d.length-1;f>=0;f--)Fd(this,d[f]);h?Hb(this,h):this.cm&&Rd(this.cm)}),undo:Cc(function(){Hd(this,"undo")}),redo:Cc(function(){Hd(this,"redo")}),undoSelection:Cc(function(){Hd(this,"undo",!0)}),redoSelection:Cc(function(){Hd(this,"redo",!0)}),setExtending:function(a){this.extend=a},getExtending:function(){return this.extend},historySize:function(){for(var a=this.history,b=0,c=0,d=0;d<a.done.length;d++)a.done[d].ranges||++b;for(var d=0;d<a.undone.length;d++)a.undone[d].ranges||++c;return{undo:b,redo:c}},clearHistory:function(){this.history=new Lf(this.history.maxGeneration)},markClean:function(){this.cleanGeneration=this.changeGeneration(!0)},changeGeneration:function(a){return a&&(this.history.lastOp=this.history.lastOrigin=null),this.history.generation},isClean:function(a){return this.history.generation==(a||this.cleanGeneration)},getHistory:function(){return{done:Wf(this.history.done),undone:Wf(this.history.undone)}},setHistory:function(a){var b=this.history=new Lf(this.history.maxGeneration);b.done=Wf(a.done.slice(0),null,!0),b.undone=Wf(a.undone.slice(0),null,!0)},markText:function(a,b,c){return re(this,xb(this,a),xb(this,b),c,"range")},setBookmark:function(a,b){var c={replacedWith:b&&(null==b.nodeType?b.widget:b),insertLeft:b&&b.insertLeft,clearWhenEmpty:!1,shared:b&&b.shared};return a=xb(this,a),re(this,a,a,c,"bookmark")},findMarksAt:function(a){a=xb(this,a);var b=[],c=Df(this,a.line).markedSpans;if(c)for(var d=0;d<c.length;++d){var e=c[d];(null==e.from||e.from<=a.ch)&&(null==e.to||e.to>=a.ch)&&b.push(e.marker.parent||e.marker)}return b},findMarks:function(a,b,c){a=xb(this,a),b=xb(this,b);var d=[],e=a.line;return this.iter(a.line,b.line+1,function(f){var g=f.markedSpans;if(g)for(var h=0;h<g.length;h++){var i=g[h];e==a.line&&a.ch>i.to||null==i.from&&e!=a.line||e==b.line&&i.from>b.ch||c&&!c(i.marker)||d.push(i.marker.parent||i.marker)}++e}),d},getAllMarks:function(){var a=[];return this.iter(function(b){var c=b.markedSpans;if(c)for(var d=0;d<c.length;++d)null!=c[d].from&&a.push(c[d].marker)}),a},posFromIndex:function(a){var b,c=this.first;return this.iter(function(d){var e=d.text.length+1;return e>a?(b=a,!0):(a-=e,++c,void 0)}),xb(this,nb(c,b))},indexFromPos:function(a){a=xb(this,a);var b=a.ch;return a.line<this.first||a.ch<0?0:(this.iter(this.first,a.line,function(a){b+=a.text.length+1}),b)},copy:function(a){var b=new yf(Ff(this,this.first,this.first+this.size),this.modeOption,this.first);return b.scrollTop=this.scrollTop,b.scrollLeft=this.scrollLeft,b.sel=this.sel,b.extend=!1,a&&(b.history.undoDepth=this.history.undoDepth,b.setHistory(this.getHistory())),b},linkedDoc:function(a){a||(a={});var b=this.first,c=this.first+this.size;null!=a.from&&a.from>b&&(b=a.from),null!=a.to&&a.to<c&&(c=a.to);var d=new yf(Ff(this,b,c),a.mode||this.modeOption,b);return a.sharedHist&&(d.history=this.history),(this.linked||(this.linked=[])).push({doc:d,sharedHist:a.sharedHist}),d.linked=[{doc:this,isParent:!0,sharedHist:a.sharedHist}],ve(d,ue(this)),d},unlinkDoc:function(a){if(a instanceof y&&(a=a.doc),this.linked)for(var b=0;b<this.linked.length;++b){var c=this.linked[b];if(c.doc==a){this.linked.splice(b,1),a.unlinkDoc(this),we(ue(this));break}}if(a.history==this.history){var d=[a.id];Bf(a,function(a){d.push(a.id)},!0),a.history=new Lf(null),a.history.done=Wf(this.history.done,d),a.history.undone=Wf(this.history.undone,d)}},iterLinkedDocs:function(a){Bf(this,a)},getMode:function(){return this.mode},getEditor:function(){return this.cm}}),yf.prototype.eachLine=yf.prototype.iter;var zf="iter insert remove copy getEditor".split(" ");for(var Af in yf.prototype)yf.prototype.hasOwnProperty(Af)&&Bg(zf,Af)<0&&(y.prototype[Af]=function(a){return function(){return a.apply(this.doc,arguments)}}(yf.prototype[Af]));og(yf);var hg,$f=y.e_preventDefault=function(a){a.preventDefault?a.preventDefault():a.returnValue=!1},_f=y.e_stopPropagation=function(a){a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},bg=y.e_stop=function(a){$f(a),_f(a)},eg=y.on=function(a,b,c){if(a.addEventListener)a.addEventListener(b,c,!1);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var d=a._handlers||(a._handlers={}),e=d[b]||(d[b]=[]);e.push(c)}},fg=y.off=function(a,b,c){if(a.removeEventListener)a.removeEventListener(b,c,!1);else if(a.detachEvent)a.detachEvent("on"+b,c);else{var d=a._handlers&&a._handlers[b];if(!d)return;for(var e=0;e<d.length;++e)if(d[e]==c){d.splice(e,1);break}}},gg=y.signal=function(a,b){var c=a._handlers&&a._handlers[b];if(c)for(var d=Array.prototype.slice.call(arguments,2),e=0;e<c.length;++e)c[e].apply(null,d)},ig=0,pg=30,qg=y.Pass={toString:function(){return"CodeMirror.Pass"}},rg={scroll:!1},sg={origin:"*mouse"},tg={origin:"+move"};ug.prototype.set=function(a,b){clearTimeout(this.id),this.id=setTimeout(b,a)};var vg=y.countColumn=function(a,b,c,d,e){null==b&&(b=a.search(/[^\s\u00a0]/),-1==b&&(b=a.length));for(var f=d||0,g=e||0;;){var h=a.indexOf("	",f);if(0>h||h>=b)return g+(b-f);g+=h-f,g+=c-g%c,f=h+1}},xg=[""],Ag=function(a){a.select()};p?Ag=function(a){a.selectionStart=0,a.selectionEnd=a.value.length}:g&&(Ag=function(a){try{a.select()}catch(b){}}),[].indexOf&&(Bg=function(a,b){return a.indexOf(b)}),[].map&&(Cg=function(a,b){return a.map(b)});var Mg,Gg=/[\u00df\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/,Hg=y.isWordChar=function(a){return/\w/.test(a)||a>"\x80"&&(a.toUpperCase()!=a.toLowerCase()||Gg.test(a))},Jg=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/;Mg=document.createRange?function(a,b,c){var d=document.createRange();return d.setEnd(a,c),d.setStart(a,b),d}:function(a,b,c){var d=document.body.createTextRange();return d.moveToElementText(a.parentNode),d.collapse(!0),d.moveEnd("character",c),d.moveStart("character",b),d},b&&(Qg=function(){try{return document.activeElement}catch(a){return document.body}});var $g,ah,ch,Wg=!1,Zg=function(){if(d)return!1;var a=Lg("div");return"draggable"in a||"dragDrop"in a}(),eh=y.splitLines=3!="\n\nb".split(/\n/).length?function(a){for(var b=0,c=[],d=a.length;d>=b;){var e=a.indexOf("\n",b);-1==e&&(e=a.length);var f=a.slice(b,"\r"==a.charAt(e-1)?e-1:e),g=f.indexOf("\r");-1!=g?(c.push(f.slice(0,g)),b+=g+1):(c.push(f),b=e+1)}return c}:function(a){return a.split(/\r\n?|\n/)},fh=window.getSelection?function(a){try{return a.selectionStart!=a.selectionEnd}catch(b){return!1}}:function(a){try{var b=a.ownerDocument.selection.createRange()}catch(c){}return b&&b.parentElement()==a?0!=b.compareEndPoints("StartToEnd",b):!1},gh=function(){var a=Lg("div");return"oncopy"in a?!0:(a.setAttribute("oncopy","return;"),"function"==typeof a.oncopy)}(),hh={3:"Enter",8:"Backspace",9:"Tab",13:"Enter",16:"Shift",17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",107:"=",109:"-",127:"Delete",173:"-",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",63232:"Up",63233:"Down",63234:"Left",63235:"Right",63272:"Delete",63273:"Home",63275:"End",63276:"PageUp",63277:"PageDown",63302:"Insert"};y.keyNames=hh,function(){for(var a=0;10>a;a++)hh[a+48]=hh[a+96]=String(a);for(var a=65;90>=a;a++)hh[a]=String.fromCharCode(a);for(var a=1;12>=a;a++)hh[a+111]=hh[a+63235]="F"+a}();var qh,vh=function(){function c(c){return 247>=c?a.charAt(c):c>=1424&&1524>=c?"R":c>=1536&&1773>=c?b.charAt(c-1536):c>=1774&&2220>=c?"r":c>=8192&&8203>=c?"w":8204==c?"b":"L"}function j(a,b,c){this.level=a,this.from=b,this.to=c}var a="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",b="rrrrrrrrrrrr,rNNmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmrrrrrrrnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmNmmmm",d=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,e=/[stwN]/,f=/[LRr]/,g=/[Lb1n]/,h=/[1n]/,i="L";return function(a){if(!d.test(a))return!1;for(var m,b=a.length,k=[],l=0;b>l;++l)k.push(m=c(a.charCodeAt(l)));for(var l=0,n=i;b>l;++l){var m=k[l];"m"==m?k[l]=n:n=m}for(var l=0,o=i;b>l;++l){var m=k[l];"1"==m&&"r"==o?k[l]="n":f.test(m)&&(o=m,"r"==m&&(k[l]="R"))}for(var l=1,n=k[0];b-1>l;++l){var m=k[l];"+"==m&&"1"==n&&"1"==k[l+1]?k[l]="1":","!=m||n!=k[l+1]||"1"!=n&&"n"!=n||(k[l]=n),n=m}for(var l=0;b>l;++l){var m=k[l];if(","==m)k[l]="N";else if("%"==m){for(var p=l+1;b>p&&"%"==k[p];++p);for(var q=l&&"!"==k[l-1]||b>p&&"1"==k[p]?"1":"N",r=l;p>r;++r)k[r]=q;l=p-1}}for(var l=0,o=i;b>l;++l){var m=k[l];"L"==o&&"1"==m?k[l]="L":f.test(m)&&(o=m)}for(var l=0;b>l;++l)if(e.test(k[l])){for(var p=l+1;b>p&&e.test(k[p]);++p);for(var s="L"==(l?k[l-1]:i),t="L"==(b>p?k[p]:i),q=s||t?"L":"R",r=l;p>r;++r)k[r]=q;l=p-1}for(var v,u=[],l=0;b>l;)if(g.test(k[l])){var w=l;for(++l;b>l&&g.test(k[l]);++l);u.push(new j(0,w,l))}else{var x=l,y=u.length;for(++l;b>l&&"L"!=k[l];++l);for(var r=x;l>r;)if(h.test(k[r])){r>x&&u.splice(y,0,new j(1,x,r));var z=r;for(++r;l>r&&h.test(k[r]);++r);u.splice(y,0,new j(2,z,r)),x=r
}else++r;l>x&&u.splice(y,0,new j(1,x,l))}return 1==u[0].level&&(v=a.match(/^\s+/))&&(u[0].from=v[0].length,u.unshift(new j(0,0,v[0].length))),1==zg(u).level&&(v=a.match(/\s+$/))&&(zg(u).to-=v[0].length,u.push(new j(0,b-v[0].length,b))),u[0].level!=zg(u).level&&u.push(new j(u[0].level,b,b)),u}}();return y.version="4.1.1",y}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";a.defineMode("javascript",function(b,c){function l(a){for(var c,b=!1,d=!1;null!=(c=a.next());){if(!b){if("/"==c&&!d)return;"["==c?d=!0:d&&"]"==c&&(d=!1)}b=!b&&"\\"==c}}function o(a,b,c){return m=a,n=c,b}function p(a,b){var c=a.next();if('"'==c||"'"==c)return b.tokenize=q(c),b.tokenize(a,b);if("."==c&&a.match(/^\d+(?:[eE][+\-]?\d+)?/))return o("number","number");if("."==c&&a.match(".."))return o("spread","meta");if(/[\[\]{}\(\),;\:\.]/.test(c))return o(c);if("="==c&&a.eat(">"))return o("=>","operator");if("0"==c&&a.eat(/x/i))return a.eatWhile(/[\da-f]/i),o("number","number");if(/\d/.test(c))return a.match(/^\d*(?:\.\d*)?(?:[eE][+\-]?\d+)?/),o("number","number");if("/"==c)return a.eat("*")?(b.tokenize=r,r(a,b)):a.eat("/")?(a.skipToEnd(),o("comment","comment")):"operator"==b.lastType||"keyword c"==b.lastType||"sof"==b.lastType||/^[\[{}\(,;:]$/.test(b.lastType)?(l(a),a.eatWhile(/[gimy]/),o("regexp","string-2")):(a.eatWhile(j),o("operator","operator",a.current()));if("`"==c)return b.tokenize=s,s(a,b);if("#"==c)return a.skipToEnd(),o("error","error");if(j.test(c))return a.eatWhile(j),o("operator","operator",a.current());a.eatWhile(/[\w\$_]/);var d=a.current(),e=i.propertyIsEnumerable(d)&&i[d];return e&&"."!=b.lastType?o(e.type,e.style,d):o("variable","variable",d)}function q(a){return function(b,c){var e,d=!1;if(f&&"@"==b.peek()&&b.match(k))return c.tokenize=p,o("jsonld-keyword","meta");for(;null!=(e=b.next())&&(e!=a||d);)d=!d&&"\\"==e;return d||(c.tokenize=p),o("string","string")}}function r(a,b){for(var d,c=!1;d=a.next();){if("/"==d&&c){b.tokenize=p;break}c="*"==d}return o("comment","comment")}function s(a,b){for(var d,c=!1;null!=(d=a.next());){if(!c&&("`"==d||"$"==d&&a.eat("{"))){b.tokenize=p;break}c=!c&&"\\"==d}return o("quasi","string-2",a.current())}function u(a,b){b.fatArrowAt&&(b.fatArrowAt=null);var c=a.string.indexOf("=>",a.start);if(!(0>c)){for(var d=0,e=!1,f=c-1;f>=0;--f){var g=a.string.charAt(f),h=t.indexOf(g);if(h>=0&&3>h){if(!d){++f;break}if(0==--d)break}else if(h>=3&&6>h)++d;else if(/[$\w]/.test(g))e=!0;else if(e&&!d){++f;break}}e&&!d&&(b.fatArrowAt=f)}}function w(a,b,c,d,e,f){this.indented=a,this.column=b,this.type=c,this.prev=e,this.info=f,null!=d&&(this.align=d)}function x(a,b){for(var c=a.localVars;c;c=c.next)if(c.name==b)return!0;for(var d=a.context;d;d=d.prev)for(var c=d.vars;c;c=c.next)if(c.name==b)return!0}function y(a,b,c,d,e){var f=a.cc;for(z.state=a,z.stream=e,z.marked=null,z.cc=f,a.lexical.hasOwnProperty("align")||(a.lexical.align=!0);;){var h=f.length?f.pop():g?K:J;if(h(c,d)){for(;f.length&&f[f.length-1].lex;)f.pop()();return z.marked?z.marked:"variable"==c&&x(a,d)?"variable-2":b}}}function A(){for(var a=arguments.length-1;a>=0;a--)z.cc.push(arguments[a])}function B(){return A.apply(null,arguments),!0}function C(a){function b(b){for(var c=b;c;c=c.next)if(c.name==a)return!0;return!1}var d=z.state;if(d.context){if(z.marked="def",b(d.localVars))return;d.localVars={name:a,next:d.localVars}}else{if(b(d.globalVars))return;c.globalVars&&(d.globalVars={name:a,next:d.globalVars})}}function E(){z.state.context={prev:z.state.context,vars:z.state.localVars},z.state.localVars=D}function F(){z.state.localVars=z.state.context.vars,z.state.context=z.state.context.prev}function G(a,b){var c=function(){var c=z.state,d=c.indented;"stat"==c.lexical.type&&(d=c.lexical.indented),c.lexical=new w(d,z.stream.column(),a,null,c.lexical,b)};return c.lex=!0,c}function H(){var a=z.state;a.lexical.prev&&(")"==a.lexical.type&&(a.indented=a.lexical.indented),a.lexical=a.lexical.prev)}function I(a){function b(c){return c==a?B():";"==a?A():B(b)}return b}function J(a,b){return"var"==a?B(G("vardef",b.length),db,I(";"),H):"keyword a"==a?B(G("form"),K,J,H):"keyword b"==a?B(G("form"),J,H):"{"==a?B(G("}"),ab,H):";"==a?B():"if"==a?("else"==z.state.lexical.info&&z.state.cc[z.state.cc.length-1]==H&&z.state.cc.pop()(),B(G("form"),K,J,H,ib)):"function"==a?B(ob):"for"==a?B(G("form"),jb,J,H):"variable"==a?B(G("stat"),V):"switch"==a?B(G("form"),K,G("}","switch"),I("{"),ab,H,H):"case"==a?B(K,I(":")):"default"==a?B(I(":")):"catch"==a?B(G("form"),E,I("("),pb,I(")"),J,H,F):"module"==a?B(G("form"),E,tb,F,H):"class"==a?B(G("form"),qb,sb,H):"export"==a?B(G("form"),ub,H):"import"==a?B(G("form"),vb,H):A(G("stat"),K,I(";"),H)}function K(a){return M(a,!1)}function L(a){return M(a,!0)}function M(a,b){if(z.state.fatArrowAt==z.stream.start){var c=b?U:T;if("("==a)return B(E,G(")"),$(eb,")"),H,I("=>"),c,F);if("variable"==a)return A(E,eb,I("=>"),c,F)}var d=b?Q:P;return v.hasOwnProperty(a)?B(d):"function"==a?B(ob,d):"keyword c"==a?B(b?O:N):"("==a?B(G(")"),N,Ab,I(")"),H,d):"operator"==a||"spread"==a?B(b?L:K):"["==a?B(G("]"),yb,H,d):"{"==a?_(X,"}",null,d):"quasi"==a?A(R,d):B()}function N(a){return a.match(/[;\}\)\],]/)?A():A(K)}function O(a){return a.match(/[;\}\)\],]/)?A():A(L)}function P(a,b){return","==a?B(K):Q(a,b,!1)}function Q(a,b,c){var d=0==c?P:Q,e=0==c?K:L;return"=>"==b?B(E,c?U:T,F):"operator"==a?/\+\+|--/.test(b)?B(d):"?"==b?B(K,I(":"),e):B(e):"quasi"==a?A(R,d):";"!=a?"("==a?_(L,")","call",d):"."==a?B(W,d):"["==a?B(G("]"),N,I("]"),H,d):void 0:void 0}function R(a,b){return"quasi"!=a?A():"${"!=b.slice(b.length-2)?B(R):B(K,S)}function S(a){return"}"==a?(z.marked="string-2",z.state.tokenize=s,B(R)):void 0}function T(a){return u(z.stream,z.state),"{"==a?A(J):A(K)}function U(a){return u(z.stream,z.state),"{"==a?A(J):A(L)}function V(a){return":"==a?B(H,J):A(P,I(";"),H)}function W(a){return"variable"==a?(z.marked="property",B()):void 0}function X(a,b){if("variable"==a){if(z.marked="property","get"==b||"set"==b)return B(Y)}else if("number"==a||"string"==a)z.marked=f?"property":a+" property";else if("["==a)return B(K,I("]"),Z);return v.hasOwnProperty(a)?B(Z):void 0}function Y(a){return"variable"!=a?A(Z):(z.marked="property",B(ob))}function Z(a){return":"==a?B(L):"("==a?A(ob):void 0}function $(a,b){function c(d){if(","==d){var e=z.state.lexical;return"call"==e.info&&(e.pos=(e.pos||0)+1),B(a,c)}return d==b?B():B(I(b))}return function(d){return d==b?B():A(a,c)}}function _(a,b,c){for(var d=3;d<arguments.length;d++)z.cc.push(arguments[d]);return B(G(b,c),$(a,b),H)}function ab(a){return"}"==a?B():A(J,ab)}function bb(a){return h&&":"==a?B(cb):void 0}function cb(a){return"variable"==a?(z.marked="variable-3",B()):void 0}function db(){return A(eb,bb,gb,hb)}function eb(a,b){return"variable"==a?(C(b),B()):"["==a?_(eb,"]"):"{"==a?_(fb,"}"):void 0}function fb(a,b){return"variable"!=a||z.stream.match(/^\s*:/,!1)?("variable"==a&&(z.marked="property"),B(I(":"),eb,gb)):(C(b),B(gb))}function gb(a,b){return"="==b?B(L):void 0}function hb(a){return","==a?B(db):void 0}function ib(a,b){return"keyword b"==a&&"else"==b?B(G("form","else"),J,H):void 0}function jb(a){return"("==a?B(G(")"),kb,I(")"),H):void 0}function kb(a){return"var"==a?B(db,I(";"),mb):";"==a?B(mb):"variable"==a?B(lb):A(K,I(";"),mb)}function lb(a,b){return"in"==b||"of"==b?(z.marked="keyword",B(K)):B(P,mb)}function mb(a,b){return";"==a?B(nb):"in"==b||"of"==b?(z.marked="keyword",B(K)):A(K,I(";"),nb)}function nb(a){")"!=a&&B(K)}function ob(a,b){return"*"==b?(z.marked="keyword",B(ob)):"variable"==a?(C(b),B(ob)):"("==a?B(E,G(")"),$(pb,")"),H,J,F):void 0}function pb(a){return"spread"==a?B(pb):A(eb,bb)}function qb(a,b){return"variable"==a?(C(b),B(rb)):void 0}function rb(a,b){return"extends"==b?B(K):void 0}function sb(a){return"{"==a?_(X,"}"):void 0}function tb(a,b){return"string"==a?B(J):"variable"==a?(C(b),B(xb)):void 0}function ub(a,b){return"*"==b?(z.marked="keyword",B(xb,I(";"))):"default"==b?(z.marked="keyword",B(K,I(";"))):A(J)}function vb(a){return"string"==a?B():A(wb,xb)}function wb(a,b){return"{"==a?_(wb,"}"):("variable"==a&&C(b),B())}function xb(a,b){return"from"==b?(z.marked="keyword",B(K)):void 0}function yb(a){return"]"==a?B():A(L,zb)}function zb(a){return"for"==a?A(Ab,I("]")):","==a?B($(L,"]")):A($(L,"]"))}function Ab(a){return"for"==a?B(jb,Ab):"if"==a?B(K,Ab):void 0}var m,n,d=b.indentUnit,e=c.statementIndent,f=c.jsonld,g=c.json||f,h=c.typescript,i=function(){function a(a){return{type:a,style:"keyword"}}var b=a("keyword a"),c=a("keyword b"),d=a("keyword c"),e=a("operator"),f={type:"atom",style:"atom"},g={"if":a("if"),"while":b,"with":b,"else":c,"do":c,"try":c,"finally":c,"return":d,"break":d,"continue":d,"new":d,"delete":d,"throw":d,"debugger":d,"var":a("var"),"const":a("var"),let:a("var"),"function":a("function"),"catch":a("catch"),"for":a("for"),"switch":a("switch"),"case":a("case"),"default":a("default"),"in":e,"typeof":e,"instanceof":e,"true":f,"false":f,"null":f,undefined:f,NaN:f,Infinity:f,"this":a("this"),module:a("module"),"class":a("class"),"super":a("atom"),yield:d,"export":a("export"),"import":a("import"),"extends":d};if(h){var i={type:"variable",style:"variable-3"},j={"interface":a("interface"),"extends":a("extends"),constructor:a("constructor"),"public":a("public"),"private":a("private"),"protected":a("protected"),"static":a("static"),string:i,number:i,bool:i,any:i};for(var k in j)g[k]=j[k]}return g}(),j=/[+\-*&%=<>!?|~^]/,k=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/,t="([{}])",v={atom:!0,number:!0,variable:!0,string:!0,regexp:!0,"this":!0,"jsonld-keyword":!0},z={state:null,column:null,marked:null,cc:null},D={name:"this",next:{name:"arguments"}};return H.lex=!0,{startState:function(a){var b={tokenize:p,lastType:"sof",cc:[],lexical:new w((a||0)-d,0,"block",!1),localVars:c.localVars,context:c.localVars&&{vars:c.localVars},indented:0};return c.globalVars&&"object"==typeof c.globalVars&&(b.globalVars=c.globalVars),b},token:function(a,b){if(a.sol()&&(b.lexical.hasOwnProperty("align")||(b.lexical.align=!1),b.indented=a.indentation(),u(a,b)),b.tokenize!=r&&a.eatSpace())return null;var c=b.tokenize(a,b);return"comment"==m?c:(b.lastType="operator"!=m||"++"!=n&&"--"!=n?m:"incdec",y(b,c,m,n,a))},indent:function(b,f){if(b.tokenize==r)return a.Pass;if(b.tokenize!=p)return 0;var g=f&&f.charAt(0),h=b.lexical;if(!/^\s*else\b/.test(f))for(var i=b.cc.length-1;i>=0;--i){var j=b.cc[i];if(j==H)h=h.prev;else if(j!=ib)break}"stat"==h.type&&"}"==g&&(h=h.prev),e&&")"==h.type&&"stat"==h.prev.type&&(h=h.prev);var k=h.type,l=g==k;return"vardef"==k?h.indented+("operator"==b.lastType||","==b.lastType?h.info+1:0):"form"==k&&"{"==g?h.indented:"form"==k?h.indented+d:"stat"==k?h.indented+("operator"==b.lastType||","==b.lastType?e||d:0):"switch"!=h.info||l||0==c.doubleIndentSwitch?h.align?h.column+(l?0:1):h.indented+(l?0:d):h.indented+(/^(?:case|default)\b/.test(f)?d:2*d)},electricChars:":{}",blockCommentStart:g?null:"/*",blockCommentEnd:g?null:"*/",lineComment:g?null:"//",fold:"brace",helperType:g?"json":"javascript",jsonldMode:f,jsonMode:g}}),a.defineMIME("text/javascript","javascript"),a.defineMIME("text/ecmascript","javascript"),a.defineMIME("application/javascript","javascript"),a.defineMIME("application/ecmascript","javascript"),a.defineMIME("application/json",{name:"javascript",json:!0}),a.defineMIME("application/x-json",{name:"javascript",json:!0}),a.defineMIME("application/ld+json",{name:"javascript",jsonld:!0}),a.defineMIME("text/typescript",{name:"javascript",typescript:!0}),a.defineMIME("application/typescript",{name:"javascript",typescript:!0})}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){function f(a,b){var c=a.getRange(e(b.line,b.ch-1),e(b.line,b.ch+1));return 2==c.length?c:null}function g(b){for(var c={name:"autoCloseBrackets",Backspace:function(c){if(c.getOption("disableInput"))return a.Pass;for(var d=c.listSelections(),g=0;g<d.length;g++){if(!d[g].empty())return a.Pass;var h=f(c,d[g].head);if(!h||0!=b.indexOf(h)%2)return a.Pass}for(var g=d.length-1;g>=0;g--){var i=d[g].head;c.replaceRange("",e(i.line,i.ch-1),e(i.line,i.ch+1))}}},g="",h=0;h<b.length;h+=2)!function(b,f){b!=f&&(g+=f),c["'"+b+"'"]=function(c){if(c.getOption("disableInput"))return a.Pass;for(var i,j,h=c.listSelections(),k=0;k<h.length;k++){var n,l=h[k],m=l.head;if("'"==b&&"comment"==c.getTokenTypeAt(m))return a.Pass;var j=c.getRange(m,e(m.line,m.ch+1));if(l.empty())if(b==f&&j==f)n=c.getRange(m,e(m.line,m.ch+3))==b+b+b?"skipThree":"skip";else if(b==f&&m.ch>1&&c.getRange(e(m.line,m.ch-2),m)==b+b&&(m.ch<=2||c.getRange(e(m.line,m.ch-3),e(m.line,m.ch-2))!=b))n="addFour";else{if(b==f&&a.isWordChar(j))return a.Pass;if(!(c.getLine(m.line).length==m.ch||g.indexOf(j)>=0||d.test(j)))return a.Pass;n="both"}else n="surround";if(i){if(i!=n)return a.Pass}else i=n}c.operation(function(){if("skip"==i)c.execCommand("goCharRight");else if("skipThree"==i)for(var a=0;3>a;a++)c.execCommand("goCharRight");else if("surround"==i){for(var d=c.getSelections(),a=0;a<d.length;a++)d[a]=b+d[a]+f;c.replaceSelections(d,"around")}else"both"==i?(c.replaceSelection(b+f,null),c.execCommand("goCharLeft")):"addFour"==i&&(c.replaceSelection(b+b+b+b,"before"),c.execCommand("goCharRight"))})},b!=f&&(c["'"+f+"'"]=function(b){for(var c=b.listSelections(),d=0;d<c.length;d++){var g=c[d];if(!g.empty()||b.getRange(g.head,e(g.head.line,g.head.ch+1))!=f)return a.Pass}b.execCommand("goCharRight")})}(b.charAt(h),b.charAt(h+1));return c}function h(b){return function(c){if(c.getOption("disableInput"))return a.Pass;for(var d=c.listSelections(),e=0;e<d.length;e++){if(!d[e].empty())return a.Pass;var g=f(c,d[e].head);if(!g||0!=b.indexOf(g)%2)return a.Pass}c.operation(function(){c.replaceSelection("\n\n",null),c.execCommand("goCharLeft"),d=c.listSelections();for(var a=0;a<d.length;a++){var b=d[a].head.line;c.indentLine(b,null,!0),c.indentLine(b+1,null,!0)}})}}var b="()[]{}''\"\"",c="[]{}",d=/\s/,e=a.Pos;a.defineOption("autoCloseBrackets",!1,function(d,e,f){if(f!=a.Init&&f&&d.removeKeyMap("autoCloseBrackets"),e){var i=b,j=c;"string"==typeof e?i=e:"object"==typeof e&&(null!=e.pairs&&(i=e.pairs),null!=e.explode&&(j=e.explode));var k=g(i);j&&(k.Enter=h(j)),d.addKeyMap(k)}})}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){function d(b){if(b.getOption("disableInput"))return a.Pass;for(var d,c=b.listSelections(),f=[],g=0;g<c.length;g++){var h=c[g].head,i=b.getTokenAt(h);if("comment"!=i.type)return a.Pass;var j=a.innerMode(b.getMode(),i.state).mode;if(d){if(d!=j)return a.Pass}else d=j;var k=null;if(d.blockCommentStart&&d.blockCommentContinue){var n,l=i.string.indexOf(d.blockCommentEnd),m=b.getRange(a.Pos(h.line,0),a.Pos(h.line,i.end));if(-1!=l&&l==i.string.length-d.blockCommentEnd.length&&h.ch>=l);else if(0==i.string.indexOf(d.blockCommentStart)){if(k=m.slice(0,i.start),!/^\s*$/.test(k)){k="";for(var o=0;o<i.start;++o)k+=" "}}else-1!=(n=m.indexOf(d.blockCommentContinue))&&n+d.blockCommentContinue.length>i.start&&/^\s*$/.test(m.slice(0,n))&&(k=m.slice(0,n));null!=k&&(k+=d.blockCommentContinue)}if(null==k&&d.lineComment&&e(b)){var p=b.getLine(h.line),n=p.indexOf(d.lineComment);n>-1&&(k=p.slice(0,n),/\S/.test(k)?k=null:k+=d.lineComment+p.slice(n+d.lineComment.length).match(/^\s*/)[0])}if(null==k)return a.Pass;f[g]="\n"+k}b.operation(function(){for(var a=c.length-1;a>=0;a--)b.replaceRange(f[a],c[a].from(),c[a].to(),"+insert")})}function e(a){var b=a.getOption("continueComments");return b&&"object"==typeof b?b.continueLineComment!==!1:!0}for(var b=["clike","css","javascript"],c=0;c<b.length;++c)a.extendMode(b[c],{blockCommentContinue:" * "});a.defineOption("continueComments",null,function(b,c,e){if(e&&e!=a.Init&&b.removeKeyMap("continueComment"),c){var f="Enter";"string"==typeof c?f=c:"object"==typeof c&&c.key&&(f=c.key);var g={name:"continueComment"};g[f]=d,b.addKeyMap(g)}})}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){function c(a,b){for(var c=0,d=a.length;d>c;++c)b(a[c])}function d(a,b){if(!Array.prototype.indexOf){for(var c=a.length;c--;)if(a[c]===b)return!0;return!1}return-1!=a.indexOf(b)}function e(c,d,e,f){var g=c.getCursor(),h=e(c,g),i=h;if(!/\b(?:string|comment)\b/.test(h.type)){for(h.state=a.innerMode(c.getMode(),h.state).state,/^[\w$_]*$/.test(h.string)||(h=i={start:g.ch,end:g.ch,string:"",state:h.state,type:"."==h.string?"property":null});"property"==i.type;){if(i=e(c,b(g.line,i.start)),"."!=i.string)return;if(i=e(c,b(g.line,i.start)),!j)var j=[];j.push(i)}return{list:n(h,j,d,f),from:b(g.line,h.start),to:b(g.line,h.end)}}}function f(a,b){return e(a,l,function(a,b){return a.getTokenAt(b)},b)}function g(a,b){var c=a.getTokenAt(b);return b.ch==c.start+1&&"."==c.string.charAt(0)?(c.end=c.start,c.string=".",c.type="property"):/^\.[\w$_]*$/.test(c.string)&&(c.type="property",c.start++,c.string=c.string.replace(/\./,"")),c}function h(a,b){return e(a,m,g,b)}function n(a,b,e,f){function l(a){0!=a.lastIndexOf(h,0)||d(g,a)||g.push(a)}function m(a){"string"==typeof a?c(i,l):a instanceof Array?c(j,l):a instanceof Function&&c(k,l);for(var b in a)l(b)}var g=[],h=a.string;if(b&&b.length){var o,n=b.pop();for(n.type&&0===n.type.indexOf("variable")?(f&&f.additionalContext&&(o=f.additionalContext[n.string]),o=o||window[n.string]):"string"==n.type?o="":"atom"==n.type?o=1:"function"==n.type&&(null==window.jQuery||"$"!=n.string&&"jQuery"!=n.string||"function"!=typeof window.jQuery?null!=window._&&"_"==n.string&&"function"==typeof window._&&(o=window._()):o=window.jQuery());null!=o&&b.length;)o=o[b.pop().string];null!=o&&m(o)}else{for(var p=a.state.localVars;p;p=p.next)l(p.name);for(var p=a.state.globalVars;p;p=p.next)l(p.name);m(window),c(e,l)}return g}var b=a.Pos;a.registerHelper("hint","javascript",f),a.registerHelper("hint","coffeescript",h);var i="charAt charCodeAt indexOf lastIndexOf substring substr slice trim trimLeft trimRight toUpperCase toLowerCase split concat match replace search".split(" "),j="length concat join splice push pop shift unshift slice reverse sort indexOf lastIndexOf every some filter forEach map reduce reduceRight ".split(" "),k="prototype apply call bind".split(" "),l="break case catch continue debugger default delete do else false finally for function if in instanceof new null return switch throw true try typeof var void while with".split(" "),m="and break catch class continue delete do else extends false finally for if in instanceof isnt new no not null of off on or return switch then throw true try typeof until void while with yes".split(" ")}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){function e(a,b,e,g){var h=a.getLineHandle(b.line),i=b.ch-1,j=i>=0&&d[h.text.charAt(i)]||d[h.text.charAt(++i)];if(!j)return null;var k=">"==j.charAt(1)?1:-1;if(e&&k>0!=(i==b.ch))return null;var l=a.getTokenTypeAt(c(b.line,i+1)),m=f(a,c(b.line,i+(k>0?1:0)),k,l||null,g);return null==m?null:{from:c(b.line,i),to:m&&m.pos,match:m&&m.ch==j.charAt(0),forward:k>0}}function f(a,b,e,f,g){for(var h=g&&g.maxScanLineLength||1e4,i=g&&g.maxScanLines||1e3,j=[],k=g&&g.bracketRegex?g.bracketRegex:/[(){}[\]]/,l=e>0?Math.min(b.line+i,a.lastLine()+1):Math.max(a.firstLine()-1,b.line-i),m=b.line;m!=l;m+=e){var n=a.getLine(m);if(n){var o=e>0?0:n.length-1,p=e>0?n.length:-1;if(!(n.length>h))for(m==b.line&&(o=b.ch-(0>e?1:0));o!=p;o+=e){var q=n.charAt(o);if(k.test(q)&&(void 0===f||a.getTokenTypeAt(c(m,o+1))==f)){var r=d[q];if(">"==r.charAt(1)==e>0)j.push(q);else{if(!j.length)return{pos:c(m,o),ch:q};j.pop()}}}}}return m-e==(e>0?a.lastLine():a.firstLine())?!1:null}function g(a,d,f){for(var g=a.state.matchBrackets.maxHighlightLineLength||1e3,h=[],i=a.listSelections(),j=0;j<i.length;j++){var k=i[j].empty()&&e(a,i[j].head,!1,f);if(k&&a.getLine(k.from.line).length<=g){var l=k.match?"CodeMirror-matchingbracket":"CodeMirror-nonmatchingbracket";h.push(a.markText(k.from,c(k.from.line,k.from.ch+1),{className:l})),k.to&&a.getLine(k.to.line).length<=g&&h.push(a.markText(k.to,c(k.to.line,k.to.ch+1),{className:l}))}}if(h.length){b&&a.state.focused&&a.display.input.focus();var m=function(){a.operation(function(){for(var a=0;a<h.length;a++)h[a].clear()})};if(!d)return m;setTimeout(m,800)}}function i(a){a.operation(function(){h&&(h(),h=null),h=g(a,!1,a.state.matchBrackets)})}var b=/MSIE \d/.test(navigator.userAgent)&&(null==document.documentMode||document.documentMode<8),c=a.Pos,d={"(":")>",")":"(<","[":"]>","]":"[<","{":"}>","}":"{<"},h=null;a.defineOption("matchBrackets",!1,function(b,c,d){d&&d!=a.Init&&b.off("cursorActivity",i),c&&(b.state.matchBrackets="object"==typeof c?c:{},b.on("cursorActivity",i))}),a.defineExtension("matchBrackets",function(){g(this,!0)}),a.defineExtension("findMatchingBracket",function(a,b,c){return e(this,a,b,c)}),a.defineExtension("scanForBracket",function(a,b,c,d){return f(this,a,b,c,d)})}),function(a){"object"==typeof exports&&"object"==typeof module?a(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],a):a(CodeMirror)}(function(a){"use strict";function d(a,b,c){this.cm=a,this.getHints=b,this.options=c,this.widget=this.onClose=null}function e(a){return"string"==typeof a?a:a.text}function f(a,b){function e(a,e){var f;f="string"!=typeof e?function(a){return e(a,b)}:c.hasOwnProperty(e)?c[e]:e,d[a]=f}var c={Up:function(){b.moveFocus(-1)},Down:function(){b.moveFocus(1)},PageUp:function(){b.moveFocus(-b.menuSize()+1,!0)},PageDown:function(){b.moveFocus(b.menuSize()-1,!0)},Home:function(){b.setFocus(0)},End:function(){b.setFocus(b.length-1)},Enter:b.pick,Tab:b.pick,Esc:b.close},d=a.customKeys?{}:c;if(a.customKeys)for(var f in a.customKeys)a.customKeys.hasOwnProperty(f)&&e(f,a.customKeys[f]);if(a.extraKeys)for(var f in a.extraKeys)a.extraKeys.hasOwnProperty(f)&&e(f,a.extraKeys[f]);return d}function g(a,b){for(;b&&b!=a;){if("LI"===b.nodeName.toUpperCase()&&b.parentNode==a)return b;b=b.parentNode}}function h(d,h){this.completion=d,this.data=h;var i=this,j=d.cm,k=d.options,l=this.hints=document.createElement("ul");l.className="CodeMirror-hints",this.selectedHint=k.getDefaultSelection?k.getDefaultSelection(j,k,h):0;for(var m=h.list,n=0;n<m.length;++n){var o=l.appendChild(document.createElement("li")),p=m[n],q=b+(n!=this.selectedHint?"":" "+c);null!=p.className&&(q=p.className+" "+q),o.className=q,p.render?p.render(o,h,p):o.appendChild(document.createTextNode(p.displayText||e(p))),o.hintId=n}var r=j.cursorCoords(k.alignWithWord!==!1?h.from:null),s=r.left,t=r.bottom,u=!0;l.style.left=s+"px",l.style.top=t+"px";var v=window.innerWidth||Math.max(document.body.offsetWidth,document.documentElement.offsetWidth),w=window.innerHeight||Math.max(document.body.offsetHeight,document.documentElement.offsetHeight);(k.container||document.body).appendChild(l);var x=l.getBoundingClientRect(),y=x.bottom-w;if(y>0){var z=x.bottom-x.top,A=x.top-(r.bottom-r.top);if(A-z>0)l.style.top=(t=A-z)+"px",u=!1;else if(z>w){l.style.height=w-5+"px",l.style.top=(t=r.bottom-x.top)+"px";var B=j.getCursor();h.from.ch!=B.ch&&(r=j.cursorCoords(B),l.style.left=(s=r.left)+"px",x=l.getBoundingClientRect())}}var C=x.left-v;if(C>0&&(x.right-x.left>v&&(l.style.width=v-5+"px",C-=x.right-x.left-v),l.style.left=(s=r.left-C)+"px"),j.addKeyMap(this.keyMap=f(k,{moveFocus:function(a,b){i.changeActive(i.selectedHint+a,b)},setFocus:function(a){i.changeActive(a)},menuSize:function(){return i.screenAmount()},length:m.length,close:function(){d.close()},pick:function(){i.pick()},data:h})),k.closeOnUnfocus!==!1){var D;j.on("blur",this.onBlur=function(){D=setTimeout(function(){d.close()},100)}),j.on("focus",this.onFocus=function(){clearTimeout(D)})}var E=j.getScrollInfo();return j.on("scroll",this.onScroll=function(){var a=j.getScrollInfo(),b=j.getWrapperElement().getBoundingClientRect(),c=t+E.top-a.top,e=c-(window.pageYOffset||(document.documentElement||document.body).scrollTop);return u||(e+=l.offsetHeight),e<=b.top||e>=b.bottom?d.close():(l.style.top=c+"px",l.style.left=s+E.left-a.left+"px",void 0)}),a.on(l,"dblclick",function(a){var b=g(l,a.target||a.srcElement);b&&null!=b.hintId&&(i.changeActive(b.hintId),i.pick())}),a.on(l,"click",function(a){var b=g(l,a.target||a.srcElement);b&&null!=b.hintId&&(i.changeActive(b.hintId),k.completeOnSingleClick&&i.pick())}),a.on(l,"mousedown",function(){setTimeout(function(){j.focus()},20)}),a.signal(h,"select",m[0],l.firstChild),!0}var b="CodeMirror-hint",c="CodeMirror-hint-active";a.showHint=function(b,c,e){if(!(b.listSelections().length>1||b.somethingSelected())){if(null==c){if(e&&e.async)return;c=a.hint.auto}b.state.completionActive&&b.state.completionActive.close();var f=b.state.completionActive=new d(b,c,e||{});return a.signal(b,"startCompletion",b),f.options.async?(c(b,function(a){f.showHints(a)},f.options),void 0):f.showHints(c(b,f.options))}},d.prototype={close:function(){this.active()&&(this.cm.state.completionActive=null,this.widget&&this.widget.close(),this.onClose&&this.onClose(),a.signal(this.cm,"endCompletion",this.cm))},active:function(){return this.cm.state.completionActive==this},pick:function(b,c){var d=b.list[c];d.hint?d.hint(this.cm,b,d):this.cm.replaceRange(e(d),d.from||b.from,d.to||b.to,"complete"),a.signal(b,"pick",d),this.close()},showHints:function(a){return a&&a.list.length&&this.active()?(0!=this.options.completeSingle&&1==a.list.length?this.pick(a,0):this.showWidget(a),void 0):this.close()},showWidget:function(b){function l(){e||(e=!0,d.close(),d.cm.off("cursorActivity",p),b&&a.signal(b,"close"))}function m(){e||(a.signal(b,"update"),d.options.async?d.getHints(d.cm,n,d.options):n(d.getHints(d.cm,d.options)))}function n(a){if(b=a,!e){if(!b||!b.list.length)return l();d.widget&&d.widget.close(),d.widget=new h(d,b)}}function o(){c&&(k(c),c=0)}function p(){o();var a=d.cm.getCursor(),b=d.cm.getLine(a.line);a.line!=g.line||b.length-a.ch!=i-g.ch||a.ch<g.ch||d.cm.somethingSelected()||a.ch&&f.test(b.charAt(a.ch-1))?d.close():(c=j(m),d.widget&&d.widget.close())}this.widget=new h(this,b),a.signal(b,"shown");var e,c=0,d=this,f=this.options.closeCharacters||/[\s()\[\]{};:>,]/,g=this.cm.getCursor(),i=this.cm.getLine(g.line).length,j=window.requestAnimationFrame||function(a){return setTimeout(a,1e3/60)},k=window.cancelAnimationFrame||clearTimeout;this.cm.on("cursorActivity",p),this.onClose=l}},h.prototype={close:function(){if(this.completion.widget==this){this.completion.widget=null,this.hints.parentNode.removeChild(this.hints),this.completion.cm.removeKeyMap(this.keyMap);var a=this.completion.cm;this.completion.options.closeOnUnfocus!==!1&&(a.off("blur",this.onBlur),a.off("focus",this.onFocus)),a.off("scroll",this.onScroll)}},pick:function(){this.completion.pick(this.data,this.selectedHint)},changeActive:function(b,d){if(b>=this.data.list.length?b=d?this.data.list.length-1:0:0>b&&(b=d?0:this.data.list.length-1),this.selectedHint!=b){var e=this.hints.childNodes[this.selectedHint];e.className=e.className.replace(" "+c,""),e=this.hints.childNodes[this.selectedHint=b],e.className+=" "+c,e.offsetTop<this.hints.scrollTop?this.hints.scrollTop=e.offsetTop-3:e.offsetTop+e.offsetHeight>this.hints.scrollTop+this.hints.clientHeight&&(this.hints.scrollTop=e.offsetTop+e.offsetHeight-this.hints.clientHeight+3),a.signal(this.data,"select",this.data.list[this.selectedHint],e)}},screenAmount:function(){return Math.floor(this.hints.clientHeight/this.hints.firstChild.offsetHeight)||1}},a.registerHelper("hint","auto",function(b,c){var e,d=b.getHelpers(b.getCursor(),"hint");if(d.length)for(var f=0;f<d.length;f++){var g=d[f](b,c);if(g&&g.list.length)return g}else if(e=b.getHelper(b.getCursor(),"hintWords")){if(e)return a.hint.fromList(b,{words:e})}else if(a.hint.anyword)return a.hint.anyword(b,c)}),a.registerHelper("hint","fromList",function(b,c){for(var d=b.getCursor(),e=b.getTokenAt(d),f=[],g=0;g<c.words.length;g++){var h=c.words[g];h.slice(0,e.string.length)==e.string&&f.push(h)}return f.length?{list:f,from:a.Pos(d.line,e.start),to:a.Pos(d.line,e.end)}:void 0}),a.commands.autocomplete=a.showHint});