if(!function(n){"use strict";n.fn.fitVids=function(e){var i={customSelector:null,ignore:null};if(!document.getElementById("fit-vids-style")){var t=document.head||document.getElementsByTagName("head")[0],r=document.createElement("div");r.innerHTML='<p>x</p><style id="fit-vids-style">.fluid-width-video-container{flex-grow: 1;width:100%;}.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>',t.appendChild(r.childNodes[1])}return e&&n.extend(i,e),this.each(function(){var e=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]',"object","embed"];i.customSelector&&e.push(i.customSelector);var r=".fitvidsignore";i.ignore&&(r=r+", "+i.ignore);var t=n(this).find(e.join(","));(t=(t=t.not("object object")).not(r)).each(function(){var e=n(this);if(!(0<e.parents(r).length||"embed"===this.tagName.toLowerCase()&&e.parent("object").length||e.parent(".fluid-width-video-wrapper").length)){e.css("height")||e.css("width")||!isNaN(e.attr("height"))&&!isNaN(e.attr("width"))||(e.attr("height",9),e.attr("width",16));var t=("object"===this.tagName.toLowerCase()||e.attr("height")&&!isNaN(parseInt(e.attr("height"),10))?parseInt(e.attr("height"),10):e.height())/(isNaN(parseInt(e.attr("width"),10))?e.width():parseInt(e.attr("width"),10));if(!e.attr("name")){var i="fitvid"+n.fn.fitVids._count;e.attr("name",i),n.fn.fitVids._count++}e.wrap('<div class="fluid-width-video-container"><div class="fluid-width-video-wrapper"></div></div>').parent(".fluid-width-video-wrapper").css("padding-top",100*t+"%"),e.removeAttr("height").removeAttr("width")}})})},n.fn.fitVids._count=0}(window.jQuery||window.Zepto),!sessionStorage.getItem("logged"))if(/bot|crawler|spider|crawling/i.test(navigator.userAgent))console.log("You are a bot!");else{var properties={api_key:"gHgHKRbIjdguCM4cv5481hdiF5hZGWZ4x12Ur-7v",app_id:4,name:"blog_visit",os_name:platform.os.family,os_version:platform.os.version,browser_name:platform.name,browser_version:platform.version},request=new XMLHttpRequest,url="https://dav-backend.herokuapp.com/v1/analytics/event";request.open("POST",url),request.setRequestHeader("Content-Type","application/json"),request.addEventListener("load",function(e){201==request.status&&sessionStorage.setItem("logged",!0)}),request.send(JSON.stringify(properties))}!function(e,t){t.addEventListener("DOMContentLoaded",function(){t.querySelectorAll(".kg-gallery-image img").forEach(function(e){var t=e.closest(".kg-gallery-image"),i=e.attributes.width.value/e.attributes.height.value;t.style.flex=i+" 1 0%"})})}(window,document),function(t,i){var r=i.querySelector("link[rel=next]");if(r){var n=i.querySelector(".post-feed");if(n){var o=300,a=!1,l=!1,s=t.scrollY,c=t.innerHeight,d=i.documentElement.scrollHeight;t.addEventListener("scroll",u,{passive:!0}),t.addEventListener("resize",f),p()}}function b(){if(404===this.status)return t.removeEventListener("scroll",u),void t.removeEventListener("resize",f);this.response.querySelectorAll(".post-card").forEach(function(e){n.appendChild(i.importNode(e,!0))});var e=this.response.querySelector("link[rel=next]");e?r.href=e.href:(t.removeEventListener("scroll",u),t.removeEventListener("resize",f)),d=i.documentElement.scrollHeight,l=a=!1}function e(){if(!l)if(s+c<=d-o)a=!1;else{l=!0;var e=new t.XMLHttpRequest;e.responseType="document",e.addEventListener("load",b),e.open("GET",r.href),e.send(null)}}function p(){a||t.requestAnimationFrame(e),a=!0}function u(){s=t.scrollY,p()}function f(){c=t.innerHeight,d=i.documentElement.scrollHeight,p()}}(window,document),function(){"use strict";var e={function:!0,object:!0},T=e[typeof window]&&window||this,i=e[typeof exports]&&exports,t=e[typeof module]&&module&&!module.nodeType&&module,r=i&&t&&"object"==typeof global&&global;!r||r.global!==r&&r.window!==r&&r.self!==r||(T=r);var o=Math.pow(2,53)-1,R=/\bOpera/,n=Object.prototype,a=n.hasOwnProperty,F=n.toString;function l(e){return(e=String(e)).charAt(0).toUpperCase()+e.slice(1)}function N(e){return e=q(e),/^(?:webOS|i(?:OS|P))/.test(e)?e:l(e)}function G(e,t){for(var i in e)a.call(e,i)&&t(e[i],i,e)}function j(e){return null==e?l(e):F.call(e).slice(8,-1)}function L(e){return String(e).replace(/([ -])(?!$)/g,"$1?")}function $(i,r){var n=null;return function(e,t){var i=-1,r=e?e.length:0;if("number"==typeof r&&-1<r&&r<=o)for(;++i<r;)t(e[i],i,e);else G(e,t)}(i,function(e,t){n=r(n,e,t,i)}),n}function q(e){return String(e).replace(/^ +| +$/g,"")}var s=function e(r){var t=T,i=r&&"object"==typeof r&&"String"!=j(r);i&&(t=r,r=null);var n=t.navigator||{},o=n.userAgent||"";r=r||o;var a,l,s=i?!!n.likeChrome:/\bChrome\b/.test(r)&&!/internal|\n/i.test(F.toString()),c="Object",d=i?c:"ScriptBridgingProxyObject",b=i?c:"Environment",p=i&&t.java?"JavaPackage":j(t.java),u=i?c:"RuntimeObject",f=/\bJava/.test(p)&&t.java,h=f&&j(t.environment)==b,m=f?"a":"α",g=f?"b":"β",S=t.document||{},v=t.operamini||t.opera,x=R.test(x=i&&v?v["[[Class]]"]:j(v))?x:v=null,w=r,y=[],E=null,O=r==o,M=O&&v&&"function"==typeof v.version&&v.version(),P=$([{label:"EdgeHTML",pattern:"(?:Edge|EdgA|EdgiOS)"},"Trident",{label:"WebKit",pattern:"AppleWebKit"},"iCab","Presto","NetFront","Tasman","KHTML","Gecko"],function(e,t){return e||RegExp("\\b"+(t.pattern||L(t))+"\\b","i").exec(r)&&(t.label||t)}),k=$(["Adobe AIR","Arora","Avant Browser","Breach","Camino","Electron","Epiphany","Fennec","Flock","Galeon","GreenBrowser","iCab","Iceweasel","K-Meleon","Konqueror","Lunascape","Maxthon",{label:"Microsoft Edge",pattern:"(?:Edge|Edg|EdgA|EdgiOS)"},"Midori","Nook Browser","PaleMoon","PhantomJS","Raven","Rekonq","RockMelt",{label:"Samsung Internet",pattern:"SamsungBrowser"},"SeaMonkey",{label:"Silk",pattern:"(?:Cloud9|Silk-Accelerated)"},"Sleipnir","SlimBrowser",{label:"SRWare Iron",pattern:"Iron"},"Sunrise","Swiftfox","Waterfox","WebPositive","Opera Mini",{label:"Opera Mini",pattern:"OPiOS"},"Opera",{label:"Opera",pattern:"OPR"},"Chrome",{label:"Chrome Mobile",pattern:"(?:CriOS|CrMo)"},{label:"Firefox",pattern:"(?:Firefox|Minefield)"},{label:"Firefox for iOS",pattern:"FxiOS"},{label:"IE",pattern:"IEMobile"},{label:"IE",pattern:"MSIE"},"Safari"],function(e,t){return e||RegExp("\\b"+(t.pattern||L(t))+"\\b","i").exec(r)&&(t.label||t)}),C=B([{label:"BlackBerry",pattern:"BB10"},"BlackBerry",{label:"Galaxy S",pattern:"GT-I9000"},{label:"Galaxy S2",pattern:"GT-I9100"},{label:"Galaxy S3",pattern:"GT-I9300"},{label:"Galaxy S4",pattern:"GT-I9500"},{label:"Galaxy S5",pattern:"SM-G900"},{label:"Galaxy S6",pattern:"SM-G920"},{label:"Galaxy S6 Edge",pattern:"SM-G925"},{label:"Galaxy S7",pattern:"SM-G930"},{label:"Galaxy S7 Edge",pattern:"SM-G935"},"Google TV","Lumia","iPad","iPod","iPhone","Kindle",{label:"Kindle Fire",pattern:"(?:Cloud9|Silk-Accelerated)"},"Nexus","Nook","PlayBook","PlayStation Vita","PlayStation","TouchPad","Transformer",{label:"Wii U",pattern:"WiiU"},"Wii","Xbox One",{label:"Xbox 360",pattern:"Xbox"},"Xoom"]),A=$({Apple:{iPad:1,iPhone:1,iPod:1},Archos:{},Amazon:{Kindle:1,"Kindle Fire":1},Asus:{Transformer:1},"Barnes & Noble":{Nook:1},BlackBerry:{PlayBook:1},Google:{"Google TV":1,Nexus:1},HP:{TouchPad:1},HTC:{},LG:{},Microsoft:{Xbox:1,"Xbox One":1},Motorola:{Xoom:1},Nintendo:{"Wii U":1,Wii:1},Nokia:{Lumia:1},Samsung:{"Galaxy S":1,"Galaxy S2":1,"Galaxy S3":1,"Galaxy S4":1},Sony:{PlayStation:1,"PlayStation Vita":1}},function(e,t,i){return e||(t[C]||t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(C)]||RegExp("\\b"+L(i)+"(?:\\b|\\w*\\d)","i").exec(r))&&i}),I=$(["Windows Phone","Android","CentOS",{label:"Chrome OS",pattern:"CrOS"},"Debian","Fedora","FreeBSD","Gentoo","Haiku","Kubuntu","Linux Mint","OpenBSD","Red Hat","SuSE","Ubuntu","Xubuntu","Cygwin","Symbian OS","hpwOS","webOS ","webOS","Tablet OS","Tizen","Linux","Mac OS X","Macintosh","Mac","Windows 98;","Windows "],function(e,t){var i=t.pattern||L(t);return!e&&(e=RegExp("\\b"+i+"(?:/[\\d.]+|[ \\w.]*)","i").exec(r))&&(e=function(e,t,i){var r={"10.0":"10",6.4:"10 Technical Preview",6.3:"8.1",6.2:"8",6.1:"Server 2008 R2 / 7","6.0":"Server 2008 / Vista",5.2:"Server 2003 / XP 64-bit",5.1:"XP",5.01:"2000 SP1","5.0":"2000","4.0":"NT","4.90":"ME"};return t&&i&&/^Win/i.test(e)&&!/^Windows Phone /i.test(e)&&(r=r[/[\d.]+$/.exec(e)])&&(e="Windows "+r),e=String(e),t&&i&&(e=e.replace(RegExp(t,"i"),i)),e=N(e.replace(/ ce$/i," CE").replace(/\bhpw/i,"web").replace(/\bMacintosh\b/,"Mac OS").replace(/_PowerPC\b/i," OS").replace(/\b(OS X) [^ \d]+/i,"$1").replace(/\bMac (OS X)\b/,"$1").replace(/\/(\d)/," $1").replace(/_/g,".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i,"").replace(/\bx86\.64\b/gi,"x86_64").replace(/\b(Windows Phone) OS\b/,"$1").replace(/\b(Chrome OS \w+) [\d.]+\b/,"$1").split(" on ")[0])}(e,i,t.label||t)),e});function B(e){return $(e,function(e,t){var i=t.pattern||L(t);return!e&&(e=RegExp("\\b"+i+" *\\d+[.\\w_]*","i").exec(r)||RegExp("\\b"+i+" *\\w+-[\\w]*","i").exec(r)||RegExp("\\b"+i+"(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)","i").exec(r))&&((e=String(t.label&&!RegExp(i,"i").test(t.label)?t.label:e).split("/"))[1]&&!/[\d.]+/.test(e[0])&&(e[0]+=" "+e[1]),t=t.label||t,e=N(e[0].replace(RegExp(i,"i"),t).replace(RegExp("; *(?:"+t+"[_-])?","i")," ").replace(RegExp("("+t+")[-_.]?(\\w)","i"),"$1 $2"))),e})}if(P=P&&[P],A&&!C&&(C=B([A])),(a=/\bGoogle TV\b/.exec(C))&&(C=a[0]),/\bSimulator\b/i.test(r)&&(C=(C?C+" ":"")+"Simulator"),"Opera Mini"==k&&/\bOPiOS\b/.test(r)&&y.push("running in Turbo/Uncompressed mode"),"IE"==k&&/\blike iPhone OS\b/.test(r)?(A=(a=e(r.replace(/like iPhone OS/,""))).manufacturer,C=a.product):/^iP/.test(C)?(k=k||"Safari",I="iOS"+((a=/ OS ([\d_]+)/i.exec(r))?" "+a[1].replace(/_/g,"."):"")):"Konqueror"!=k||/buntu/i.test(I)?A&&"Google"!=A&&(/Chrome/.test(k)&&!/\bMobile Safari\b/i.test(r)||/\bVita\b/.test(C))||/\bAndroid\b/.test(I)&&/^Chrome/.test(k)&&/\bVersion\//i.test(r)?(k="Android Browser",I=/\bAndroid\b/.test(I)?I:"Android"):"Silk"==k?(/\bMobi/i.test(r)||(I="Android",y.unshift("desktop mode")),/Accelerated *= *true/i.test(r)&&y.unshift("accelerated")):"PaleMoon"==k&&(a=/\bFirefox\/([\d.]+)\b/.exec(r))?y.push("identifying as Firefox "+a[1]):"Firefox"==k&&(a=/\b(Mobile|Tablet|TV)\b/i.exec(r))?(I=I||"Firefox OS",C=C||a[1]):!k||(a=!/\bMinefield\b/i.test(r)&&/\b(?:Firefox|Safari)\b/.exec(k))?(k&&!C&&/[\/,]|^[^(]+?\)/.test(r.slice(r.indexOf(a+"/")+8))&&(k=null),(a=C||A||I)&&(C||A||/\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(I))&&(k=/[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(I)?I:a)+" Browser")):"Electron"==k&&(a=(/\bChrome\/([\d.]+)\b/.exec(r)||0)[1])&&y.push("Chromium "+a):I="Kubuntu",M=M||$(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))","Version",L(k),"(?:Firefox|Minefield|NetFront)"],function(e,t){return e||(RegExp(t+"(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)","i").exec(r)||0)[1]||null}),(a=("iCab"==P&&3<parseFloat(M)?"WebKit":/\bOpera\b/.test(k)&&(/\bOPR\b/.test(r)?"Blink":"Presto"))||/\b(?:Midori|Nook|Safari)\b/i.test(r)&&!/^(?:Trident|EdgeHTML)$/.test(P)&&"WebKit"||!P&&/\bMSIE\b/i.test(r)&&("Mac OS"==I?"Tasman":"Trident")||"WebKit"==P&&/\bPlayStation\b(?! Vita\b)/i.test(k)&&"NetFront")&&(P=[a]),"IE"==k&&(a=(/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(r)||0)[1])?(k+=" Mobile",I="Windows Phone "+(/\+$/.test(a)?a:a+".x"),y.unshift("desktop mode")):/\bWPDesktop\b/i.test(r)?(k="IE Mobile",I="Windows Phone 8.x",y.unshift("desktop mode"),M=M||(/\brv:([\d.]+)/.exec(r)||0)[1]):"IE"!=k&&"Trident"==P&&(a=/\brv:([\d.]+)/.exec(r))&&(k&&y.push("identifying as "+k+(M?" "+M:"")),k="IE",M=a[1]),O){if(function(e,t){var i=null!=e?typeof e[t]:"number";return!/^(?:boolean|number|string|undefined)$/.test(i)&&("object"!=i||e[t])}(t,"global"))if(f&&(w=(a=f.lang.System).getProperty("os.arch"),I=I||a.getProperty("os.name")+" "+a.getProperty("os.version")),h){try{M=t.require("ringo/engine").version.join("."),k="RingoJS"}catch(e){(a=t.system)&&a.global.system==t.system&&(k="Narwhal",I=I||a[0].os||null)}k=k||"Rhino"}else"object"==typeof t.process&&!t.process.browser&&(a=t.process)&&("object"==typeof a.versions&&("string"==typeof a.versions.electron?(y.push("Node "+a.versions.node),k="Electron",M=a.versions.electron):"string"==typeof a.versions.nw&&(y.push("Chromium "+M,"Node "+a.versions.node),k="NW.js",M=a.versions.nw)),k||(k="Node.js",w=a.arch,I=a.platform,M=(M=/[\d.]+/.exec(a.version))?M[0]:null));else j(a=t.runtime)==d?(k="Adobe AIR",I=a.flash.system.Capabilities.os):j(a=t.phantom)==u?(k="PhantomJS",M=(a=a.version||null)&&a.major+"."+a.minor+"."+a.patch):"number"==typeof S.documentMode&&(a=/\bTrident\/(\d+)/i.exec(r))?(M=[M,S.documentMode],(a=+a[1]+4)!=M[1]&&(y.push("IE "+M[1]+" mode"),P&&(P[1]=""),M[1]=a),M="IE"==k?String(M[1].toFixed(1)):M[0]):"number"==typeof S.documentMode&&/^(?:Chrome|Firefox)\b/.test(k)&&(y.push("masking as "+k+" "+M),k="IE",M="11.0",P=["Trident"],I="Windows");I=I&&N(I)}if(M&&(a=/(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(M)||/(?:alpha|beta)(?: ?\d)?/i.exec(r+";"+(O&&n.appMinorVersion))||/\bMinefield\b/i.test(r)&&"a")&&(E=/b/i.test(a)?"beta":"alpha",M=M.replace(RegExp(a+"\\+?$"),"")+("beta"==E?g:m)+(/\d+\+?/.exec(a)||"")),"Fennec"==k||"Firefox"==k&&/\b(?:Android|Firefox OS)\b/.test(I))k="Firefox Mobile";else if("Maxthon"==k&&M)M=M.replace(/\.[\d.]+/,".x");else if(/\bXbox\b/i.test(C))"Xbox 360"==C&&(I=null),"Xbox 360"==C&&/\bIEMobile\b/.test(r)&&y.unshift("mobile mode");else if(!/^(?:Chrome|IE|Opera)$/.test(k)&&(!k||C||/Browser|Mobi/.test(k))||"Windows CE"!=I&&!/Mobi/i.test(r))if("IE"==k&&O)try{null===t.external&&y.unshift("platform preview")}catch(e){y.unshift("embedded")}else(/\bBlackBerry\b/.test(C)||/\bBB10\b/.test(r))&&(a=(RegExp(C.replace(/ +/g," *")+"/([.\\d]+)","i").exec(r)||0)[1]||M)?(I=((a=[a,/BB10/.test(r)])[1]?(C=null,A="BlackBerry"):"Device Software")+" "+a[0],M=null):this!=G&&"Wii"!=C&&(O&&v||/Opera/.test(k)&&/\b(?:MSIE|Firefox)\b/i.test(r)||"Firefox"==k&&/\bOS X (?:\d+\.){2,}/.test(I)||"IE"==k&&(I&&!/^Win/.test(I)&&5.5<M||/\bWindows XP\b/.test(I)&&8<M||8==M&&!/\bTrident\b/.test(r)))&&!R.test(a=e.call(G,r.replace(R,"")+";"))&&a.name&&(a="ing as "+a.name+((a=a.version)?" "+a:""),R.test(k)?(/\bIE\b/.test(a)&&"Mac OS"==I&&(I=null),a="identify"+a):(a="mask"+a,k=x?N(x.replace(/([a-z])([A-Z])/g,"$1 $2")):"Opera",/\bIE\b/.test(a)&&(I=null),O||(M=null)),P=["Presto"],y.push(a));else k+=" Mobile";(a=(/\bAppleWebKit\/([\d.]+\+?)/i.exec(r)||0)[1])&&(a=[parseFloat(a.replace(/\.(\d)$/,".0$1")),a],"Safari"==k&&"+"==a[1].slice(-1)?(k="WebKit Nightly",E="alpha",M=a[1].slice(0,-1)):M!=a[1]&&M!=(a[2]=(/\bSafari\/([\d.]+\+?)/i.exec(r)||0)[1])||(M=null),a[1]=(/\bChrome\/([\d.]+)/i.exec(r)||0)[1],537.36==a[0]&&537.36==a[2]&&28<=parseFloat(a[1])&&"WebKit"==P&&(P=["Blink"]),a=O&&(s||a[1])?(P&&(P[1]="like Chrome"),a[1]||((a=a[0])<530?1:a<532?2:a<532.05?3:a<533?4:a<534.03?5:a<534.07?6:a<534.1?7:a<534.13?8:a<534.16?9:a<534.24?10:a<534.3?11:a<535.01?12:a<535.02?"13+":a<535.07?15:a<535.11?16:a<535.19?17:a<536.05?18:a<536.1?19:a<537.01?20:a<537.11?"21+":a<537.13?23:a<537.18?24:a<537.24?25:a<537.36?26:"Blink"!=P?"27":"28")):(P&&(P[1]="like Safari"),(a=a[0])<400?1:a<500?2:a<526?3:a<533?4:a<534?"4+":a<535?5:a<537?6:a<538?7:a<601?8:"8"),P&&(P[1]+=" "+(a+="number"==typeof a?".x":/[.+]/.test(a)?"":"+")),"Safari"==k&&(!M||45<parseInt(M))&&(M=a)),"Opera"==k&&(a=/\bzbov|zvav$/.exec(I))?(k+=" ",y.unshift("desktop mode"),"zvav"==a?(k+="Mini",M=null):k+="Mobile",I=I.replace(RegExp(" *"+a+"$"),"")):"Safari"==k&&/\bChrome\b/.exec(P&&P[1])&&(y.unshift("desktop mode"),k="Chrome Mobile",M=null,I=/\bOS X\b/.test(I)?(A="Apple","iOS 4.3+"):null),M&&0==M.indexOf(a=/[\d.]+$/.exec(I))&&-1<r.indexOf("/"+a+"-")&&(I=q(I.replace(a,""))),P&&!/\b(?:Avant|Nook)\b/.test(k)&&(/Browser|Lunascape|Maxthon/.test(k)||"Safari"!=k&&/^iOS/.test(I)&&/\bSafari\b/.test(P[1])||/^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(k)&&P[1])&&(a=P[P.length-1])&&y.push(a),y.length&&(y=["("+y.join("; ")+")"]),A&&C&&C.indexOf(A)<0&&y.push("on "+A),C&&y.push((/^on /.test(y[y.length-1])?"":"on ")+C),I&&(a=/ ([\d.+]+)$/.exec(I),l=a&&"/"==I.charAt(I.length-a[0].length-1),I={architecture:32,family:a&&!l?I.replace(a[0],""):I,version:a?a[1]:null,toString:function(){var e=this.version;return this.family+(e&&!l?" "+e:"")+(64==this.architecture?" 64-bit":"")}}),(a=/\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(w))&&!/\bi686\b/i.test(w)?(I&&(I.architecture=64,I.family=I.family.replace(RegExp(" *"+a),"")),k&&(/\bWOW64\b/i.test(r)||O&&/\w(?:86|32)$/.test(n.cpuClass||n.platform)&&!/\bWin64; x64\b/i.test(r))&&y.unshift("32-bit")):I&&/^OS X/.test(I.family)&&"Chrome"==k&&39<=parseFloat(M)&&(I.architecture=64),r=r||null;var W={};return W.description=r,W.layout=P&&P[0],W.manufacturer=A,W.name=k,W.prerelease=E,W.product=C,W.ua=r,W.version=k&&M,W.os=I||{architecture:null,family:null,version:null,toString:function(){return"null"}},W.parse=e,W.toString=function(){return this.description||""},W.version&&y.unshift(M),W.name&&y.unshift(k),I&&k&&(I!=String(I).split(" ")[0]||I!=k.split(" ")[0]&&!C)&&y.push(C?"("+I+")":"on "+I),y.length&&(W.description=y.join(" ")),W}();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(T.platform=s,define(function(){return s})):i&&t?G(s,function(e,t){i[t]=e}):T.platform=s}.call(this),function(a,l){a.Casper||(a.Casper={}),a.Casper.stickyNavTitle=function(e){var t=l.querySelector(e.navSelector),i=l.querySelector(e.titleSelector),r=a.scrollY,n=!1;function o(){i.getBoundingClientRect().top+a.scrollY+(i.offsetHeight+35)<=r?t.classList.add(e.activeClass):t.classList.remove(e.activeClass),n=!1}a.addEventListener("scroll",function(){r=a.scrollY,function(){n||requestAnimationFrame(o);n=!0}()},{passive:!0}),o()}}(window,document);
//# sourceMappingURL=casper.js.map