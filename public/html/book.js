(()=>{var e={741:(e,t,n)=>{"use strict";n.r(t),n.d(t,{closest:()=>i,distance:()=>r});const o=new Uint32Array(65536),r=(e,t)=>{if(e.length<t.length){const n=t;t=e,e=n}return 0===t.length?e.length:e.length<=32?((e,t)=>{const n=e.length,r=t.length,i=1<<n-1;let a=-1,A=0,s=n,c=n;for(;c--;)o[e.charCodeAt(c)]|=1<<c;for(c=0;c<r;c++){let e=o[t.charCodeAt(c)];const n=e|A;e|=(e&a)+a^a,A|=~(e|a),a&=e,A&i&&s++,a&i&&s--,A=A<<1|1,a=a<<1|~(n|A),A&=n}for(c=n;c--;)o[e.charCodeAt(c)]=0;return s})(e,t):((e,t)=>{const n=t.length,r=e.length,i=[],a=[],A=Math.ceil(n/32),s=Math.ceil(r/32);for(let e=0;e<A;e++)a[e]=-1,i[e]=0;let c=0;for(;c<s-1;c++){let A=0,s=-1;const l=32*c,d=Math.min(32,r)+l;for(let t=l;t<d;t++)o[e.charCodeAt(t)]|=1<<t;for(let e=0;e<n;e++){const n=o[t.charCodeAt(e)],r=a[e/32|0]>>>e&1,c=i[e/32|0]>>>e&1,l=n|A,d=((n|c)&s)+s^s|n|c;let u=A|~(d|s),h=s&d;u>>>31^r&&(a[e/32|0]^=1<<e),h>>>31^c&&(i[e/32|0]^=1<<e),u=u<<1|r,h=h<<1|c,s=h|~(l|u),A=u&l}for(let t=l;t<d;t++)o[e.charCodeAt(t)]=0}let l=0,d=-1;const u=32*c,h=Math.min(32,r-u)+u;for(let t=u;t<h;t++)o[e.charCodeAt(t)]|=1<<t;let f=r;for(let e=0;e<n;e++){const n=o[t.charCodeAt(e)],A=a[e/32|0]>>>e&1,s=i[e/32|0]>>>e&1,c=n|l,u=((n|s)&d)+d^d|n|s;let h=l|~(u|d),m=d&u;f+=h>>>r-1&1,f-=m>>>r-1&1,h>>>31^A&&(a[e/32|0]^=1<<e),m>>>31^s&&(i[e/32|0]^=1<<e),h=h<<1|A,m=m<<1|s,d=m|~(c|h),l=h&c}for(let t=u;t<h;t++)o[e.charCodeAt(t)]=0;return f})(e,t)},i=(e,t)=>{let n=1/0,o=0;for(let i=0;i<t.length;i++){const a=r(e,t[i]);a<n&&(n=a,o=i)}return t[o]}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){var e={713:function(e,t){var n,o,r;!function(i,a){"use strict";o=[],void 0===(r="function"==typeof(n=function(){return function(e){function t(e){e.icon=Object.prototype.hasOwnProperty.call(e,"icon")?e.icon:"",e.visible=Object.prototype.hasOwnProperty.call(e,"visible")?e.visible:"hover",e.placement=Object.prototype.hasOwnProperty.call(e,"placement")?e.placement:"right",e.ariaLabel=Object.prototype.hasOwnProperty.call(e,"ariaLabel")?e.ariaLabel:"Anchor",e.class=Object.prototype.hasOwnProperty.call(e,"class")?e.class:"",e.base=Object.prototype.hasOwnProperty.call(e,"base")?e.base:"",e.truncate=Object.prototype.hasOwnProperty.call(e,"truncate")?Math.floor(e.truncate):64,e.titleText=Object.prototype.hasOwnProperty.call(e,"titleText")?e.titleText:""}function n(e){var t;if("string"==typeof e||e instanceof String)t=[].slice.call(document.querySelectorAll(e));else{if(!(Array.isArray(e)||e instanceof NodeList))throw new TypeError("The selector provided to AnchorJS was invalid.");t=[].slice.call(e)}return t}this.options=e||{},this.elements=[],t(this.options),this.add=function(e){var o,r,i,a,A,s,c,l,d,u,h,f=[];if(t(this.options),e||(e="h2, h3, h4, h5, h6"),0===(o=n(e)).length)return this;for(function(){if(null===document.head.querySelector("style.anchorjs")){var e,t=document.createElement("style");t.className="anchorjs",t.appendChild(document.createTextNode("")),void 0===(e=document.head.querySelector('[rel="stylesheet"],style'))?document.head.appendChild(t):document.head.insertBefore(t,e),t.sheet.insertRule(".anchorjs-link{opacity:0;text-decoration:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}",t.sheet.cssRules.length),t.sheet.insertRule(":hover>.anchorjs-link,.anchorjs-link:focus{opacity:1}",t.sheet.cssRules.length),t.sheet.insertRule("[data-anchorjs-icon]::after{content:attr(data-anchorjs-icon)}",t.sheet.cssRules.length),t.sheet.insertRule('@font-face{font-family:anchorjs-icons;src:url(data:n/a;base64,AAEAAAALAIAAAwAwT1MvMg8yG2cAAAE4AAAAYGNtYXDp3gC3AAABpAAAAExnYXNwAAAAEAAAA9wAAAAIZ2x5ZlQCcfwAAAH4AAABCGhlYWQHFvHyAAAAvAAAADZoaGVhBnACFwAAAPQAAAAkaG10eASAADEAAAGYAAAADGxvY2EACACEAAAB8AAAAAhtYXhwAAYAVwAAARgAAAAgbmFtZQGOH9cAAAMAAAAAunBvc3QAAwAAAAADvAAAACAAAQAAAAEAAHzE2p9fDzz1AAkEAAAAAADRecUWAAAAANQA6R8AAAAAAoACwAAAAAgAAgAAAAAAAAABAAADwP/AAAACgAAA/9MCrQABAAAAAAAAAAAAAAAAAAAAAwABAAAAAwBVAAIAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAMCQAGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAg//0DwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAAIAAAACgAAxAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADAAAAAIAAgAAgAAACDpy//9//8AAAAg6cv//f///+EWNwADAAEAAAAAAAAAAAAAAAAACACEAAEAAAAAAAAAAAAAAAAxAAACAAQARAKAAsAAKwBUAAABIiYnJjQ3NzY2MzIWFxYUBwcGIicmNDc3NjQnJiYjIgYHBwYUFxYUBwYGIwciJicmNDc3NjIXFhQHBwYUFxYWMzI2Nzc2NCcmNDc2MhcWFAcHBgYjARQGDAUtLXoWOR8fORYtLTgKGwoKCjgaGg0gEhIgDXoaGgkJBQwHdR85Fi0tOAobCgoKOBoaDSASEiANehoaCQkKGwotLXoWOR8BMwUFLYEuehYXFxYugC44CQkKGwo4GkoaDQ0NDXoaShoKGwoFBe8XFi6ALjgJCQobCjgaShoNDQ0NehpKGgobCgoKLYEuehYXAAAADACWAAEAAAAAAAEACAAAAAEAAAAAAAIAAwAIAAEAAAAAAAMACAAAAAEAAAAAAAQACAAAAAEAAAAAAAUAAQALAAEAAAAAAAYACAAAAAMAAQQJAAEAEAAMAAMAAQQJAAIABgAcAAMAAQQJAAMAEAAMAAMAAQQJAAQAEAAMAAMAAQQJAAUAAgAiAAMAAQQJAAYAEAAMYW5jaG9yanM0MDBAAGEAbgBjAGgAbwByAGoAcwA0ADAAMABAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAH//wAP) format("truetype")}',t.sheet.cssRules.length)}}(),r=document.querySelectorAll("[id]"),i=[].map.call(r,(function(e){return e.id})),A=0;A<o.length;A++)if(this.hasAnchorJSLink(o[A]))f.push(A);else{if(o[A].hasAttribute("id"))a=o[A].getAttribute("id");else if(o[A].hasAttribute("data-anchor-id"))a=o[A].getAttribute("data-anchor-id");else{d=l=this.urlify(o[A].textContent),c=0;do{void 0!==s&&(d=l+"-"+c),s=i.indexOf(d),c+=1}while(-1!==s);s=void 0,i.push(d),o[A].setAttribute("id",d),a=d}(u=document.createElement("a")).className="anchorjs-link "+this.options.class,u.setAttribute("aria-label",this.options.ariaLabel),u.setAttribute("data-anchorjs-icon",this.options.icon),this.options.titleText&&(u.title=this.options.titleText),h=document.querySelector("base")?window.location.pathname+window.location.search:"",h=this.options.base||h,u.href=h+"#"+a,"always"===this.options.visible&&(u.style.opacity="1"),""===this.options.icon&&(u.style.font="1em/1 anchorjs-icons","left"===this.options.placement&&(u.style.lineHeight="inherit")),"left"===this.options.placement?(u.style.position="absolute",u.style.marginLeft="-1.25em",u.style.paddingRight=".25em",u.style.paddingLeft=".25em",o[A].insertBefore(u,o[A].firstChild)):(u.style.marginLeft=".1875em",u.style.paddingRight=".1875em",u.style.paddingLeft=".1875em",o[A].appendChild(u))}for(A=0;A<f.length;A++)o.splice(f[A]-A,1);return this.elements=this.elements.concat(o),this},this.remove=function(e){for(var t,o,r=n(e),i=0;i<r.length;i++)(o=r[i].querySelector(".anchorjs-link"))&&(-1!==(t=this.elements.indexOf(r[i]))&&this.elements.splice(t,1),r[i].removeChild(o));return this},this.removeAll=function(){this.remove(this.elements)},this.urlify=function(e){var n=document.createElement("textarea");return n.innerHTML=e,e=n.value,this.options.truncate||t(this.options),e.trim().replace(/'/gi,"").replace(/[& +$,:;=?@"#{}|^~[`%!'<>\]./()*\\\n\t\b\v\u00A0]/g,"-").replace(/-{2,}/g,"-").substring(0,this.options.truncate).replace(/^-+|-+$/gm,"").toLowerCase()},this.hasAnchorJSLink=function(e){var t=e.firstChild&&(" "+e.firstChild.className+" ").indexOf(" anchorjs-link ")>-1,n=e.lastChild&&(" "+e.lastChild.className+" ").indexOf(" anchorjs-link ")>-1;return t||n||!1}}})?n.apply(t,o):n)||(e.exports=r)}(globalThis)},741:function(e,t,n){"use strict";n.r(t),n.d(t,{closest:function(){return i},distance:function(){return r}});var o=new Uint32Array(65536),r=function(e,t){if(e.length<t.length){var n=t;t=e,e=n}return 0===t.length?e.length:e.length<=32?function(e,t){for(var n=e.length,r=t.length,i=1<<n-1,a=-1,A=0,s=n,c=n;c--;)o[e.charCodeAt(c)]|=1<<c;for(c=0;c<r;c++){var l=o[t.charCodeAt(c)],d=l|A;(A|=~((l|=(l&a)+a^a)|a))&i&&s++,(a&=l)&i&&s--,a=a<<1|~(d|(A=A<<1|1)),A&=d}for(c=n;c--;)o[e.charCodeAt(c)]=0;return s}(e,t):function(e,t){for(var n=t.length,r=e.length,i=[],a=[],A=Math.ceil(n/32),s=Math.ceil(r/32),c=0;c<A;c++)a[c]=-1,i[c]=0;for(var l=0;l<s-1;l++){for(var d=0,u=-1,h=32*l,f=Math.min(32,r)+h,m=h;m<f;m++)o[e.charCodeAt(m)]|=1<<m;for(var g=0;g<n;g++){var p=o[t.charCodeAt(g)],y=a[g/32|0]>>>g&1,v=i[g/32|0]>>>g&1,b=p|d,w=((p|v)&u)+u^u|p|v,E=d|~(w|u),L=u&w;E>>>31^y&&(a[g/32|0]^=1<<g),L>>>31^v&&(i[g/32|0]^=1<<g),u=(L=L<<1|v)|~(b|(E=E<<1|y)),d=E&b}for(var C=h;C<f;C++)o[e.charCodeAt(C)]=0}for(var S=0,x=-1,M=32*l,j=Math.min(32,r-M)+M,k=M;k<j;k++)o[e.charCodeAt(k)]|=1<<k;for(var B=r,T=0;T<n;T++){var q=o[t.charCodeAt(T)],N=a[T/32|0]>>>T&1,O=i[T/32|0]>>>T&1,Q=q|S,D=((q|O)&x)+x^x|q|O,I=S|~(D|x),H=x&D;B+=I>>>r-1&1,B-=H>>>r-1&1,I>>>31^N&&(a[T/32|0]^=1<<T),H>>>31^O&&(i[T/32|0]^=1<<T),x=(H=H<<1|O)|~(Q|(I=I<<1|N)),S=I&Q}for(var P=M;P<j;P++)o[e.charCodeAt(P)]=0;return B}(e,t)},i=function(e,t){for(var n=1/0,o=0,i=0;i<t.length;i++){var a=r(e,t[i]);a<n&&(n=a,o=i)}return t[o]}}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},function(){"use strict";function e(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e.querySelector("code");return window.ace&&n.classList.contains("editable")?window.ace.edit(n).getValue():t?n.textContent:n.innerText}var t;window.onunload=function(){},function(){function t(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:6e3;return Promise.race([fetch(e,t),new Promise((function(e,t){return setTimeout((function(){return t(new Error("timeout"))}),n)}))])}var n=Array.from(document.querySelectorAll(".playground"));function o(t,n){var o=t.querySelector(".play-button");if(t.querySelector("code").classList.contains("no_run"))o.classList.add("hidden");else{for(var r,i=e(t),a=/extern\s+crate\s+([a-zA-Z_0-9]+)\s*;/g,A=[];r=a.exec(i);)A.push(r[1]);A.every((function(e){return n.indexOf(e)>-1}))?o.classList.remove("hidden"):o.classList.add("hidden")}}function r(n){var o=n.querySelector(".result");o||((o=document.createElement("code")).className="result hljs language-bash",n.append(o));var r=e(n),i=n.querySelector("code").classList,a="2015";i.contains("edition2018")?a="2018":i.contains("edition2021")&&(a="2021");var A={version:"stable",optimize:"0",code:r,edition:a};-1!==r.indexOf("#![feature")&&(A.version="nightly"),o.innerText="Running...",t("https://play.rust-lang.org/evaluate.json",{headers:{"Content-Type":"application/json"},method:"POST",mode:"cors",body:JSON.stringify(A)}).then((function(e){return e.json()})).then((function(e){""===e.result.trim()?(o.innerText="No output",o.classList.add("result-no-output")):(o.innerText=e.result,o.classList.remove("result-no-output"))})).catch((function(e){return o.innerText="Playground Communication: "+e.message}))}n.length>0&&t("https://play.rust-lang.org/meta/crates",{headers:{"Content-Type":"application/json"},method:"POST",mode:"cors"}).then((function(e){return e.json()})).then((function(e){var t=e.crates.map((function(e){return e.id}));n.forEach((function(e){return function(e,t){if(o(e,t),window.ace){var n=e.querySelector("code");if(n.classList.contains("editable")){var i=window.ace.edit(n);i.addEventListener("change",(function(n){o(e,t)})),i.commands.addCommand({name:"run",bindKey:{win:"Ctrl-Enter",mac:"Ctrl-Enter"},exec:function(t){return r(e)}})}}}(e,t)}))})),hljs.configure({tabReplace:"    ",languages:[]});var i=Array.from(document.querySelectorAll("code")).filter((function(e){return!e.parentElement.classList.contains("header")}));window.ace?(i.filter((function(e){return e.classList.contains("editable")})).forEach((function(e){e.classList.remove("language-rust")})),i.filter((function(e){return!e.classList.contains("editable")})).forEach((function(e){hljs.highlightBlock(e)}))):i.forEach((function(e){hljs.highlightBlock(e)})),i.forEach((function(e){e.classList.add("hljs")})),Array.from(document.querySelectorAll("code.hljs")).forEach((function(e){if(Array.from(e.querySelectorAll(".boring")).length){e.classList.add("hide-boring");var t=document.createElement("div");t.className="buttons",t.innerHTML='<button class="fa fa-eye" title="Show hidden lines" aria-label="Show hidden lines"></button>';var n=e.parentNode;n.insertBefore(t,n.firstChild),n.querySelector(".buttons").addEventListener("click",(function(t){t.target.classList.contains("fa-eye")?(t.target.classList.remove("fa-eye"),t.target.classList.add("fa-eye-slash"),t.target.title="Hide lines",t.target.setAttribute("aria-label",t.target.title),e.classList.remove("hide-boring")):t.target.classList.contains("fa-eye-slash")&&(t.target.classList.remove("fa-eye-slash"),t.target.classList.add("fa-eye"),t.target.title="Show hidden lines",t.target.setAttribute("aria-label",t.target.title),e.classList.add("hide-boring"))}))}})),window.playground_copyable&&Array.from(document.querySelectorAll("pre code")).forEach((function(e){var t=e.parentNode;if(!t.classList.contains("playground")){var n=t.querySelector(".buttons");n||((n=document.createElement("div")).className="buttons",t.insertBefore(n,t.firstChild));var o=document.createElement("button");o.className="fa fa-copy clip-button",o.title="Copy to clipboard",o.setAttribute("aria-label",o.title),o.innerHTML='<i class="tooltiptext"></i>',n.insertBefore(o,n.firstChild)}})),Array.from(document.querySelectorAll(".playground")).forEach((function(e){var t=e.querySelector(".buttons");t||((t=document.createElement("div")).className="buttons",e.insertBefore(t,e.firstChild));var n=document.createElement("button");if(n.className="fa fa-play play-button",n.hidden=!0,n.title="Run this code",n.setAttribute("aria-label",n.title),t.insertBefore(n,t.firstChild),n.addEventListener("click",(function(t){r(e)})),window.playground_copyable){var o=document.createElement("button");o.className="fa fa-copy clip-button",o.innerHTML='<i class="tooltiptext"></i>',o.title="Copy to clipboard",o.setAttribute("aria-label",o.title),t.insertBefore(o,t.firstChild)}var i=e.querySelector("code");if(window.ace&&i.classList.contains("editable")){var a=document.createElement("button");a.className="fa fa-history reset-button",a.title="Undo changes",a.setAttribute("aria-label",a.title),t.insertBefore(a,t.firstChild),a.addEventListener("click",(function(){var e=window.ace.edit(i);e.setValue(e.originalCode),e.clearSelection()}))}}))}(),function(){var e=document.querySelector("html"),t=document.getElementById("theme-toggle"),n=document.getElementById("theme-list"),o=document.querySelector('meta[name="theme-color"]'),r={ayuHighlight:document.querySelector("[href$='ayu-highlight.css']"),tomorrowNight:document.querySelector("[href$='tomorrow-night.css']"),highlight:document.querySelector("[href$='highlight.css']")};function i(){n.style.display="none",t.setAttribute("aria-expanded",!1),t.focus()}function a(){var e;try{e=localStorage.getItem("mdbook-theme")}catch(e){}return null==e?default_theme:e}function A(t){var i,A=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];"coal"==t||"navy"==t?(r.ayuHighlight.disabled=!0,r.tomorrowNight.disabled=!1,r.highlight.disabled=!0,i="ace/theme/tomorrow_night"):"ayu"==t?(r.ayuHighlight.disabled=!1,r.tomorrowNight.disabled=!0,r.highlight.disabled=!0,i="ace/theme/tomorrow_night"):(r.ayuHighlight.disabled=!0,r.tomorrowNight.disabled=!0,r.highlight.disabled=!1,i="ace/theme/dawn"),setTimeout((function(){o.content=getComputedStyle(document.documentElement).backgroundColor}),1),window.ace&&window.editors&&window.editors.forEach((function(e){e.setTheme(i)}));var s=a();if(A)try{localStorage.setItem("mdbook-theme",t)}catch(e){}e.classList.remove(s),e.classList.add(t),n.querySelectorAll(".theme-selected").forEach((function(e){e.classList.remove("theme-selected")})),n.querySelector("button#"+a()).classList.add("theme-selected")}A(a(),!1),t.addEventListener("click",(function(){"block"===n.style.display?i():(n.style.display="block",t.setAttribute("aria-expanded",!0),n.querySelector("button#"+a()).focus())})),n.addEventListener("click",(function(e){var t;if("theme"===e.target.className)t=e.target.id;else{if("theme"!==e.target.parentElement.className)return;t=e.target.parentElement.id}A(t)})),n.addEventListener("focusout",(function(e){!e.relatedTarget||t.contains(e.relatedTarget)||n.contains(e.relatedTarget)||i()})),document.addEventListener("click",(function(e){"block"!==n.style.display||t.contains(e.target)||n.contains(e.target)||i()})),document.addEventListener("keydown",(function(e){if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&n.contains(e.target))switch(e.key){case"Escape":e.preventDefault(),i();break;case"ArrowUp":e.preventDefault(),(t=document.activeElement.parentElement)&&t.previousElementSibling&&t.previousElementSibling.querySelector("button").focus();break;case"ArrowDown":var t;e.preventDefault(),(t=document.activeElement.parentElement)&&t.nextElementSibling&&t.nextElementSibling.querySelector("button").focus();break;case"Home":e.preventDefault(),n.querySelector("li:first-child button").focus();break;case"End":e.preventDefault(),n.querySelector("li:last-child button").focus()}}))}(),function(){var e=document.querySelector("body"),t=document.getElementById("sidebar"),n=document.querySelectorAll("#sidebar a"),o=document.getElementById("sidebar-toggle"),r=document.getElementById("sidebar-resize-handle"),i=null;function a(){e.classList.remove("sidebar-hidden"),e.classList.add("sidebar-visible"),Array.from(n).forEach((function(e){e.setAttribute("tabIndex",0)})),o.setAttribute("aria-expanded",!0),t.setAttribute("aria-hidden",!1);try{localStorage.setItem("mdbook-sidebar","visible")}catch(e){}}var A=document.querySelectorAll("#sidebar a.toggle");function s(e){e.currentTarget.parentElement.classList.toggle("expanded")}function c(){e.classList.remove("sidebar-visible"),e.classList.add("sidebar-hidden"),Array.from(n).forEach((function(e){e.setAttribute("tabIndex",-1)})),o.setAttribute("aria-expanded",!1),t.setAttribute("aria-hidden",!0);try{localStorage.setItem("mdbook-sidebar","hidden")}catch(e){}}function l(n){var o=n.clientX-t.offsetLeft;o<20?c():(e.classList.contains("sidebar-hidden")&&a(),o=Math.min(o,window.innerWidth-100),document.documentElement.style.setProperty("--sidebar-width",o+"px"))}function d(t){e.classList.remove("sidebar-resizing"),window.removeEventListener("mousemove",l,!1),window.removeEventListener("mouseup",d,!1)}Array.from(A).forEach((function(e){e.addEventListener("click",s)})),o.addEventListener("click",(function(){e.classList.contains("sidebar-hidden")?(parseInt(document.documentElement.style.getPropertyValue("--sidebar-width"),10)<150&&document.documentElement.style.setProperty("--sidebar-width","150px"),a()):e.classList.contains("sidebar-visible")||"none"===getComputedStyle(t).transform?c():a()})),r.addEventListener("mousedown",(function(t){window.addEventListener("mousemove",l,!1),window.addEventListener("mouseup",d,!1),e.classList.add("sidebar-resizing")}),!1),document.addEventListener("touchstart",(function(e){i={x:e.touches[0].clientX,time:Date.now()}}),{passive:!0}),document.addEventListener("touchmove",(function(e){if(i){var t=e.touches[0].clientX,n=t-i.x;Date.now()-i.time<250&&Math.abs(n)>=150&&(n>=0&&i.x<Math.min(.25*document.body.clientWidth,300)?a():n<0&&t<300&&c(),i=null)}}),{passive:!0})}(),document.addEventListener("keydown",(function(e){if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey||window.search&&window.search.hasFocus())){var t=document.querySelector("html");switch(e.key){case"ArrowRight":e.preventDefault(),"rtl"==t.dir?o():n();break;case"ArrowLeft":e.preventDefault(),"rtl"==t.dir?n():o()}}function n(){var e=document.querySelector(".nav-chapters.next");e&&(window.location.href=e.href)}function o(){var e=document.querySelector(".nav-chapters.previous");e&&(window.location.href=e.href)}})),function(){var t=document.querySelectorAll(".clip-button");function n(e){e.firstChild.innerText="",e.className="fa fa-copy clip-button"}function o(e,t){e.firstChild.innerText=t,e.className="fa fa-copy tooltipped"}var r=new ClipboardJS(".clip-button",{text:function(t){return n(t),e(t.closest("pre"),!1)}});Array.from(t).forEach((function(e){e.addEventListener("mouseout",(function(e){n(e.currentTarget)}))})),r.on("success",(function(e){e.clearSelection(),o(e.trigger,"Copied!")})),r.on("error",(function(e){o(e.trigger,"Clipboard error!")}))}(),document.querySelector(".menu-title").addEventListener("click",(function(){document.scrollingElement.scrollTo({top:0,behavior:"smooth"})})),t=document.getElementById("menu-bar"),function(){var e=document.scrollingElement.scrollTop,n=e,o=-t.clientHeight-50;t.style.top=e+"px";var r=t.style.top.slice(0,-2);t.classList.remove("sticky");var i=!1;document.addEventListener("scroll",(function(){e=Math.max(document.scrollingElement.scrollTop,0);var a=null,A=null,s=r-e;e>n?(a=!1,s>0&&(A=n)):s>0?a=!0:s<o&&(A=n+o),!0===a&&!1===i?(t.classList.add("sticky"),i=!0):!1===a&&!0===i&&(t.classList.remove("sticky"),i=!1),null!==A&&(t.style.top=A+"px",r=A),n=e}),{passive:!0})}(),function(){function e(){0===t.offsetTop?t.classList.remove("bordered"):t.classList.add("bordered")}e(),document.addEventListener("scroll",e,{passive:!0})}()}(),function(){"use strict";var e=n(741),t=new(n(713));document.addEventListener("turbo:load",(function(){t.add();var n=document.getElementById("four-oh-four-suggestion");if(n){var o=new XMLHttpRequest;o.onload=function(){if(200===o.status){var t=o.responseXML,r=Array.from(t.querySelectorAll("urlset > url > loc")).map((function(e){return e.textContent})),i=new URL((0,e.closest)(window.location.href,r));n.innerHTML='<a href="'.concat(i.href,'">').concat(i.pathname,"</a>")}else n.innerHTML='<a href="/">/</a>'},o.open("GET","".concat(window.location.protocol,"//").concat(window.location.host,"/sitemap.xml")),o.send()}}))}()}(),(()=>{"use strict";var e=n(741),t=document.getElementById("four-oh-four-suggestion");if(t){var o=new XMLHttpRequest;o.onload=function(){if(200===o.status){var n=o.responseXML,r=Array.from(n.querySelectorAll("urlset > url > loc")).map((function(e){return e.textContent})),i=new URL((0,e.closest)(window.location.href,r));t.innerHTML='<a href="'.concat(i.href,'">').concat(i.pathname,"</a>")}else t.innerHTML='<a href="/">/</a>'},o.open("GET","".concat(window.location.protocol,"//").concat(window.location.host,"/sitemap.xml")),o.send()}})()})();