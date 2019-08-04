!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.Popper=t()}(this,function(){"use strict";function i(e){return e&&"[object Function]"==={}.toString.call(e)}function y(e,t){if(1!==e.nodeType)return[];var n=getComputedStyle(e,null);return t?n[t]:n}function u(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function d(e){if(!e)return document.body;switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body;case"#document":return e.body}var t=y(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/(auto|scroll)/.test(n+o+r)?e:d(u(e))}function b(e){var t=e&&e.offsetParent,n=t&&t.nodeName;return n&&"BODY"!==n&&"HTML"!==n?-1!==["TD","TABLE"].indexOf(t.nodeName)&&"static"===y(t,"position")?b(t):t:e?e.ownerDocument.documentElement:document.documentElement}function a(e){return null===e.parentNode?e:a(e.parentNode)}function c(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement;var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,o=n?t:e,i=document.createRange();i.setStart(r,0),i.setEnd(o,0);var s=i.commonAncestorContainer;if(e!==s&&t!==s||r.contains(o))return function(e){var t=e.nodeName;return"BODY"!==t&&("HTML"===t||b(e.firstElementChild)===e)}(s)?s:b(s);var f=a(e);return f.host?c(f.host,t):c(e,a(t).host)}function h(e,t){var n="top"===(1<arguments.length&&void 0!==t?t:"top")?"scrollTop":"scrollLeft",r=e.nodeName;if("BODY"!==r&&"HTML"!==r)return e[n];var o=e.ownerDocument.documentElement;return(e.ownerDocument.scrollingElement||o)[n]}function m(e,t){var n="x"===t?"Left":"Top",r="Left"==n?"Right":"Bottom";return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+r+"Width"],10)}function r(e,t,n,r){return F(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],I()?n["offset"+e]+r["margin"+("Height"===e?"Top":"Left")]+r["margin"+("Height"===e?"Bottom":"Right")]:0)}function g(){var e=document.body,t=document.documentElement,n=I()&&getComputedStyle(t);return{height:r("Height",e,t,n),width:r("Width",e,t,n)}}function E(e){return V({},e,{right:e.left+e.width,bottom:e.top+e.height})}function w(e){var t={};if(I())try{t=e.getBoundingClientRect();var n=h(e,"top"),r=h(e,"left");t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}catch(e){}else t=e.getBoundingClientRect();var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?g():{},s=i.width||e.clientWidth||o.right-o.left,f=i.height||e.clientHeight||o.bottom-o.top,a=e.offsetWidth-s,p=e.offsetHeight-f;if(a||p){var l=y(e);a-=m(l,"x"),p-=m(l,"y"),o.width-=a,o.height-=p}return E(o)}function v(e,t){var n=I(),r="HTML"===t.nodeName,o=w(e),i=w(t),s=d(e),f=y(t),a=parseFloat(f.borderTopWidth,10),p=parseFloat(f.borderLeftWidth,10),l=E({top:o.top-i.top-a,left:o.left-i.left-p,width:o.width,height:o.height});if(l.marginTop=0,l.marginLeft=0,!n&&r){var u=parseFloat(f.marginTop,10),c=parseFloat(f.marginLeft,10);l.top-=a-u,l.bottom-=a-u,l.left-=p-c,l.right-=p-c,l.marginTop=u,l.marginLeft=c}return(n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(l=function(e,t,n){var r=2<arguments.length&&void 0!==n&&n,o=h(t,"top"),i=h(t,"left"),s=r?-1:1;return e.top+=o*s,e.bottom+=o*s,e.left+=i*s,e.right+=i*s,e}(l,t)),l}function O(e,t,n,r){var o={top:0,left:0},i=c(e,t);if("viewport"===r)o=function(e){var t=e.ownerDocument.documentElement,n=v(e,t),r=F(t.clientWidth,window.innerWidth||0),o=F(t.clientHeight,window.innerHeight||0),i=h(t),s=h(t,"left");return E({top:i-n.top+n.marginTop,left:s-n.left+n.marginLeft,width:r,height:o})}(i);else{var s;"scrollParent"===r?"BODY"===(s=d(u(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===r?e.ownerDocument.documentElement:r;var f=v(s,i);if("HTML"!==s.nodeName||function e(t){var n=t.nodeName;return"BODY"!==n&&"HTML"!==n&&("fixed"===y(t,"position")||e(u(t)))}(i))o=f;else{var a=g(),p=a.height,l=a.width;o.top+=f.top-f.marginTop,o.bottom=p+f.top,o.left+=f.left-f.marginLeft,o.right=l+f.left}}return o.left+=n,o.top+=n,o.right-=n,o.bottom-=n,o}function f(e,t,r,n,o,i){var s=5<arguments.length&&void 0!==i?i:0;if(-1===e.indexOf("auto"))return e;var f=O(r,n,s,o),a={top:{width:f.width,height:t.top-f.top},right:{width:f.right-t.right,height:f.height},bottom:{width:f.width,height:f.bottom-t.bottom},left:{width:t.left-f.left,height:f.height}},p=Object.keys(a).map(function(e){return V({key:e},a[e],{area:function(e){return e.width*e.height}(a[e])})}).sort(function(e,t){return t.area-e.area}),l=p.filter(function(e){var t=e.width,n=e.height;return t>=r.clientWidth&&n>=r.clientHeight}),u=0<l.length?l[0].key:p[0].key,c=e.split("-")[1];return u+(c?"-"+c:"")}function p(e,t,n){return v(n,c(t,n))}function x(e){var t=getComputedStyle(e),n=parseFloat(t.marginTop)+parseFloat(t.marginBottom),r=parseFloat(t.marginLeft)+parseFloat(t.marginRight);return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function L(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"};return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function T(e,t,n){n=n.split("-")[0];var r=x(e),o={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),s=i?"top":"left",f=i?"left":"top",a=i?"height":"width",p=i?"width":"height";return o[s]=t[s]+t[a]/2-r[a]/2,o[f]=n===f?t[f]-r[p]:t[L(f)],o}function D(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function N(e,n,t){return(void 0===t?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n});var r=D(e,function(e){return e[t]===n});return e.indexOf(r)}(e,"name",t))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var t=e.function||e.fn;e.enabled&&i(t)&&(n.offsets.popper=E(n.offsets.popper),n.offsets.reference=E(n.offsets.reference),n=t(n,e))}),n}function e(e,n){return e.some(function(e){var t=e.name;return e.enabled&&t===n})}function k(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length-1;r++){var o=t[r],i=o?""+o+n:e;if(void 0!==document.body.style[i])return i}return null}function s(e){var t=e.ownerDocument;return t?t.defaultView:window}function t(e,t,n,r){n.updateBound=r,s(e).addEventListener("resize",n.updateBound,{passive:!0});var o=d(e);return function e(t,n,r,o){var i="BODY"===t.nodeName,s=i?t.ownerDocument.defaultView:t;s.addEventListener(n,r,{passive:!0}),i||e(d(s.parentNode),n,r,o),o.push(s)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function n(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=function(e,t){return s(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t}(this.reference,this.state))}function l(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function B(n,r){Object.keys(r).forEach(function(e){var t="";-1!==["width","height","top","right","bottom","left"].indexOf(e)&&l(r[e])&&(t="px"),n.style[e]=r[e]+t})}function H(e,t,n){var r=D(e,function(e){return e.name===t}),o=!!r&&e.some(function(e){return e.name===n&&e.enabled&&e.order<r.order});if(!o){var i="`"+t+"`";console.warn("`"+n+"` modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}function o(e,t){var n=1<arguments.length&&void 0!==t&&t,r=G.indexOf(e),o=G.slice(r+1).concat(G.slice(0,r));return n?o.reverse():o}function W(e,o,i,t){var s=[0,0],f=-1!==["right","left"].indexOf(t),n=e.split(/(\+|\-)/).map(function(e){return e.trim()}),r=n.indexOf(D(n,function(e){return-1!==e.search(/,|\s/)}));n[r]&&-1===n[r].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var a=/\s*,\s*|\s+/,p=-1===r?[n]:[n.slice(0,r).concat([n[r].split(a)[0]]),[n[r].split(a)[1]].concat(n.slice(r+1))];return(p=p.map(function(e,t){var n=(1===t?!f:f)?"height":"width",r=!1;return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,r=!0,e):r?(e[e.length-1]+=t,r=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,r){var o,i=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),s=+i[1],f=i[2];if(!s)return e;if(0!==f.indexOf("%"))return"vh"!==f&&"vw"!==f?s:("vh"===f?F(document.documentElement.clientHeight,window.innerHeight||0):F(document.documentElement.clientWidth,window.innerWidth||0))/100*s;switch(f){case"%p":o=n;break;case"%":case"%r":default:o=r}return E(o)[t]/100*s}(e,n,o,i)})})).forEach(function(n,r){n.forEach(function(e,t){l(e)&&(s[r]+=e*("-"===n[t-1]?-1:1))})}),s}for(var A=Math.min,C=Math.floor,F=Math.max,P="undefined"!=typeof window&&"undefined"!=typeof document,S=["Edge","Trident","Firefox"],M=0,j=0;j<S.length;j+=1)if(P&&0<=navigator.userAgent.indexOf(S[j])){M=1;break}function R(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var U,Y=P&&window.Promise?function(e){var t=!1;return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1;return function(){t||(t=!0,setTimeout(function(){t=!1,e()},M))}},I=function(){return null==U&&(U=-1!==navigator.appVersion.indexOf("MSIE 10")),U},q=function(e,t,n){return t&&Z(e.prototype,t),n&&Z(e,n),e},V=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},z=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],G=z.slice(3),_="flip",X="clockwise",J="counterclockwise",K=(q(Q,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};e.offsets.reference=p(this.state,this.popper,this.reference),e.placement=f(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.offsets.popper=T(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position="absolute",e=N(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,e(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.left="",this.popper.style.position="",this.popper.style.top="",this.popper.style[k("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return function(){this.state.eventsEnabled||(this.state=t(this.reference,this.options,this.state,this.scheduleUpdate))}.call(this)}},{key:"disableEventListeners",value:function(){return n.call(this)}}]),Q);function Q(e,t){var n=this,r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,Q),this.scheduleUpdate=function(){return requestAnimationFrame(n.update)},this.update=Y(this.update.bind(this)),this.options=V({},Q.Defaults,r),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=t&&t.jquery?t[0]:t,this.options.modifiers={},Object.keys(V({},Q.Defaults.modifiers,r.modifiers)).forEach(function(e){n.options.modifiers[e]=V({},Q.Defaults.modifiers[e]||{},r.modifiers?r.modifiers[e]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return V({name:e},n.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&i(e.onLoad)&&e.onLoad(n.reference,n.popper,n.options,e,n.state)}),this.update();var o=this.options.eventsEnabled;o&&this.enableEventListeners(),this.state.eventsEnabled=o}function Z(e,t){for(var n,r=0;r<t.length;r++)(n=t[r]).enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}return K.Utils=("undefined"==typeof window?global:window).PopperUtils,K.placements=z,K.Defaults={placement:"bottom",eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1];if(r){var o=e.offsets,i=o.reference,s=o.popper,f=-1!==["bottom","top"].indexOf(n),a=f?"left":"top",p=f?"width":"height",l={start:R({},a,i[a]),end:R({},a,i[a]+i[p]-s[p])};e.offsets.popper=V({},s,l[r])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,r=t.offset,o=e.placement,i=e.offsets,s=i.popper,f=i.reference,a=o.split("-")[0];return n=l(+r)?[+r,0]:W(r,s,f,a),"left"===a?(s.top+=n[0],s.left-=n[1]):"right"===a?(s.top+=n[0],s.left+=n[1]):"top"===a?(s.left+=n[0],s.top-=n[1]):"bottom"===a&&(s.left+=n[0],s.top+=n[1]),e.popper=s,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,r){var t=r.boundariesElement||b(e.instance.popper);e.instance.reference===t&&(t=b(t));var o=O(e.instance.popper,e.instance.reference,r.padding,t);r.boundaries=o;var n=r.priority,i=e.offsets.popper,s={primary:function(e){var t=i[e];return i[e]<o[e]&&!r.escapeWithReference&&(t=F(i[e],o[e])),R({},e,t)},secondary:function(e){var t="right"===e?"left":"top",n=i[t];return i[e]>o[e]&&!r.escapeWithReference&&(n=A(i[t],o[e]-("right"===e?i.width:i.height))),R({},t,n)}};return n.forEach(function(e){var t=-1===["left","top"].indexOf(e)?"secondary":"primary";i=V({},i,s[t](e))}),e.offsets.popper=i,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,r=t.reference,o=e.placement.split("-")[0],i=C,s=-1!==["top","bottom"].indexOf(o),f=s?"right":"bottom",a=s?"left":"top",p=s?"width":"height";return n[f]<i(r[a])&&(e.offsets.popper[a]=i(r[a])-n[p]),n[a]>i(r[f])&&(e.offsets.popper[a]=i(r[f])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n;if(!H(e.instance.modifiers,"arrow","keepTogether"))return e;var r=t.element;if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e;var o=e.placement.split("-")[0],i=e.offsets,s=i.popper,f=i.reference,a=-1!==["left","right"].indexOf(o),p=a?"height":"width",l=a?"Top":"Left",u=l.toLowerCase(),c=a?"left":"top",d=a?"bottom":"right",h=x(r)[p];f[d]-h<s[u]&&(e.offsets.popper[u]-=s[u]-(f[d]-h)),f[u]+h>s[d]&&(e.offsets.popper[u]+=f[u]+h-s[d]),e.offsets.popper=E(e.offsets.popper);var m=f[u]+f[p]/2-h/2,g=y(e.instance.popper),v=parseFloat(g["margin"+l],10),b=parseFloat(g["border"+l+"Width"],10),w=m-e.offsets.popper[u]-v-b;return w=F(A(s[p]-h,w),0),e.arrowElement=r,e.offsets.arrow=(R(n={},u,Math.round(w)),R(n,c,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(d,h){if(e(d.instance.modifiers,"inner"))return d;if(d.flipped&&d.placement===d.originalPlacement)return d;var m=O(d.instance.popper,d.instance.reference,h.padding,h.boundariesElement),g=d.placement.split("-")[0],v=L(g),b=d.placement.split("-")[1]||"",w=[];switch(h.behavior){case _:w=[g,v];break;case X:w=o(g);break;case J:w=o(g,!0);break;default:w=h.behavior}return w.forEach(function(e,t){if(g!==e||w.length===t+1)return d;g=d.placement.split("-")[0],v=L(g);var n=d.offsets.popper,r=d.offsets.reference,o=C,i="left"===g&&o(n.right)>o(r.left)||"right"===g&&o(n.left)<o(r.right)||"top"===g&&o(n.bottom)>o(r.top)||"bottom"===g&&o(n.top)<o(r.bottom),s=o(n.left)<o(m.left),f=o(n.right)>o(m.right),a=o(n.top)<o(m.top),p=o(n.bottom)>o(m.bottom),l="left"===g&&s||"right"===g&&f||"top"===g&&a||"bottom"===g&&p,u=-1!==["top","bottom"].indexOf(g),c=!!h.flipVariations&&(u&&"start"===b&&s||u&&"end"===b&&f||!u&&"start"===b&&a||!u&&"end"===b&&p);(i||l||c)&&(d.flipped=!0,(i||l)&&(g=w[t+1]),c&&(b=function(e){return"end"===e?"start":"start"===e?"end":e}(b)),d.placement=g+(b?"-"+b:""),d.offsets.popper=V({},d.offsets.popper,T(d.instance.popper,d.offsets.reference,d.placement)),d=N(d.instance.modifiers,d,"flip"))}),d},behavior:"flip",padding:5,boundariesElement:"viewport"},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,o=r.popper,i=r.reference,s=-1!==["left","right"].indexOf(n),f=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=i[n]-(f?o[s?"width":"height"]:0),e.placement=L(t),e.offsets.popper=E(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!H(e.instance.modifiers,"hide","preventOverflow"))return e;var t=e.offsets.reference,n=D(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries;if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e;e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e;e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,r=t.y,o=e.offsets.popper,i=D(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration;void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s,f,a=void 0===i?t.gpuAcceleration:i,p=w(b(e.instance.popper)),l={position:o.position},u={left:C(o.left),top:C(o.top),bottom:C(o.bottom),right:C(o.right)},c="bottom"===n?"top":"bottom",d="right"===r?"left":"right",h=k("transform");if(f="bottom"==c?-p.height+u.bottom:u.top,s="right"==d?-p.width+u.right:u.left,a&&h)l[h]="translate3d("+s+"px, "+f+"px, 0)",l[c]=0,l[d]=0,l.willChange="transform";else{var m="bottom"==c?-1:1,g="right"==d?-1:1;l[c]=f*m,l[d]=s*g,l.willChange=c+", "+d}var v={"x-placement":e.placement};return e.attributes=V({},v,e.attributes),e.styles=V({},l,e.styles),e.arrowStyles=V({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){return B(e.instance.popper,e.styles),function(t,n){Object.keys(n).forEach(function(e){!1===n[e]?t.removeAttribute(e):t.setAttribute(e,n[e])})}(e.instance.popper,e.attributes),e.arrowElement&&Object.keys(e.arrowStyles).length&&B(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,r,o){var i=p(0,t,e),s=f(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return t.setAttribute("x-placement",s),B(t,{position:"absolute"}),n},gpuAcceleration:void 0}}},K});