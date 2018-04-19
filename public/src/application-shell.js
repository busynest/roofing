define(["exports","./router.js","./purchase-order.js","./warranty-contract.js","./primary-contract.js","./sub-contract.js","./send-feedback.js","./page-404.js","./result-item.js","./asphalt-ventilation.js","./asphalt-roofing.js","./asphalt-flashing.js"],function(e,t){"use strict";function a(e){Va=!(e&&e.shimcssproperties)&&(Ha||!!(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}function n(e){return e=r(e),o(i(e),e)}function r(e){return e.replace(ja.comments,"").replace(ja.port,"")}function i(e){let t=new qa;t.start=0,t.end=e.length;let a=t;for(let n=0,r=e.length;n<r;n++)if(e[n]===Ua){a.rules||(a.rules=[]);let e=a,t=e.rules[e.rules.length-1]||null;a=new qa,a.start=n+1,a.parent=e,a.previous=t,e.rules.push(a)}else e[n]===Ya&&(a.end=n+1,a=a.parent||t);return t}function o(e,a){let n=a.substring(e.start,e.end-1);if(e.parsedCssText=e.cssText=n.trim(),e.parent){let t=e.previous?e.previous.end:e.parent.start;n=a.substring(t,e.start-1),n=d(n),n=n.replace(ja.multipleSpaces," "),n=n.substring(n.lastIndexOf(";")+1);let r=e.parsedSelector=e.selector=n.trim();e.atRule=0===r.indexOf(Xa),e.atRule?0===r.indexOf(Wa)?e.type=Ka.MEDIA_RULE:r.match(ja.keyframesRule)&&(e.type=Ka.KEYFRAMES_RULE,e.keyframesName=e.selector.split(ja.multipleSpaces).pop()):0===r.indexOf(Ga)?e.type=Ka.MIXIN_RULE:e.type=Ka.STYLE_RULE}let t=e.rules;if(t)for(let e=0,n=t.length,i;e<n&&(i=t[e]);e++)o(i,a);return e}function d(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,function(){let e=arguments[1],t=6-e.length;for(;t--;)e="0"+e;return"\\"+e})}function s(e,t,a=""){let n="";if(e.cssText||e.rules){let a=e.rules;if(a&&!l(a))for(let e=0,i=a.length,o;e<i&&(o=a[e]);e++)n=s(o,t,n);else n=t?e.cssText:_(e.cssText),n=n.trim(),n&&(n="  "+n+"\n")}return n&&(e.selector&&(a+=e.selector+" "+Ua+"\n"),a+=n,e.selector&&(a+=Ya+"\n\n")),a}function l(e){let t=e[0];return!!t&&!!t.selector&&0===t.selector.indexOf(Ga)}function _(e){return e=c(e),u(e)}function c(e){return e.replace(ja.customProp,"").replace(ja.mixinProp,"")}function u(e){return e.replace(ja.mixinApply,"").replace(ja.varApply,"")}function h(e){const t=e.textContent;if(!rn.has(t)){rn.add(t);const a=e.cloneNode(!0);document.head.appendChild(a)}}function m(e){return e.hasAttribute("shady-unscoped")}function y(e,t){return e?("string"===typeof e&&(e=n(e)),t&&v(e,t),s(e,za)):""}function g(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=n(e.textContent)),e.__cssRules||null}function f(e){return!!e.parent&&e.parent.type===Ka.KEYFRAMES_RULE}function v(e,t,a,n){if(!e)return;let r=!1,i=e.type;if(n&&i===Ka.MEDIA_RULE){let t=e.selector.match(tn);t&&!window.matchMedia(t[1]).matches&&(r=!0)}i===Ka.STYLE_RULE?t(e):a&&i===Ka.KEYFRAMES_RULE?a(e):i===Ka.MIXIN_RULE&&(r=!0);let o=e.rules;if(o&&!r)for(let e=0,i=o.length,s;e<i&&(s=o[e]);e++)v(s,t,a,n)}function b(e,t,a,n){let r=S(e,t);return E(r,a,n),r}function S(e,t){let a=document.createElement("style");return t&&a.setAttribute("scope",t),a.textContent=e,a}function C(e){let t=document.createComment(" Shady DOM styles for "+e+" "),a=sn?sn.nextSibling:null,n=document.head;return n.insertBefore(t,a||n.firstChild),sn=t,t}function E(e,t,a){t=t||document.head;let n=a&&a.nextSibling||t.firstChild;if(t.insertBefore(e,n),!sn)sn=e;else{let t=e.compareDocumentPosition(sn);t===Node.DOCUMENT_POSITION_PRECEDING&&(sn=e)}}function P(e){return Ha?"shadow"===e:"shady"===e}function T(e){return e.getAttribute("css-build")}function A(e,t){let a=0;for(let n=t,r=e.length;n<r;n++)if("("===e[n])a++;else if(")"===e[n]&&0===--a)return n;return-1}function I(e,t){let a=e.indexOf("var(");if(-1===a)return t(e,"","","");let n=A(e,a+3),r=e.substring(a+4,n),i=e.substring(0,a),o=I(e.substring(n+1),t),s=r.indexOf(",");if(-1===s)return t(i,r.trim(),"",o);let d=r.substring(0,s).trim(),l=r.substring(s+1).trim();return t(i,d,l,o)}function x(e,t){Ha?e.setAttribute("class",t):window.ShadyDOM.nativeMethods.setAttribute.call(e,"class",t)}function R(e){let t=e.localName,a="",n="";return t?-1<t.indexOf("-")?a=t:(n=t,a=e.getAttribute&&e.getAttribute("is")||""):(a=e.is,n=e.extends),{is:a,typeExtension:n}}function w(e){const t=[],a=e.querySelectorAll("style");for(let n=0;n<a.length;n++){const e=a[n];m(e)?!Ha&&(h(e),e.parentNode.removeChild(e)):(t.push(e.textContent),e.parentNode.removeChild(e))}return t.join("").trim()}function k(e,t){for(let a in t)null===a?e.style.removeProperty(a):e.style.setProperty(a,t[a])}function D(e,t){const a=window.getComputedStyle(e).getPropertyValue(t);return a?a.trim():""}function O(e){const t=Ja.test(e)||Qa.test(e);return Ja.lastIndex=0,Qa.lastIndex=0,t}function N(e){let t=mn[e];t&&L(t)}function L(e){e._applyShimCurrentVersion=e._applyShimCurrentVersion||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e._applyShimNextVersion=(e._applyShimNextVersion||0)+1}function M(e){let t=mn[e];return!t||B(t)}function B(e){return e._applyShimCurrentVersion===e._applyShimNextVersion}function $(e){let t=mn[e];return!!t&&F(t)}function F(e){return!B(e)&&e._applyShimValidatingVersion===e._applyShimNextVersion}function H(e){let t=mn[e];V(t)}function V(e){e._applyShimValidatingVersion=e._applyShimNextVersion,e._validating||(e._validating=!0,yn.then(function(){e._applyShimCurrentVersion=e._applyShimNextVersion,e._validating=!1}))}function z(){for(let e in mn){let t=mn[e];if(!B(t))return!0}return!1}function q(e){requestAnimationFrame(function(){fn?fn(e):(!gn&&(gn=new Promise(e=>{vn=e}),"complete"===document.readyState?vn():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&vn()})),gn.then(function(){e&&e()}))})}function K(e,t){if(e&&Rn.test(e))return e;if(void 0===wn){wn=!1;try{const e=new URL("b","http://a");e.pathname="c%20d",wn="http://a/c%20d"===e.href}catch(t){}}return(t||(t=document.baseURI||window.location.href),wn)?new URL(e,t).href:(kn||(kn=document.implementation.createHTMLDocument("temp"),kn.base=kn.createElement("base"),kn.head.appendChild(kn.base),kn.anchor=kn.createElement("a"),kn.body.appendChild(kn.anchor)),kn.base.href=t,kn.anchor.href=e,kn.anchor.href||e)}function U(e,t){return e.replace(xn,function(e,a,n,r){return a+"'"+K(n.replace(/["']/g,""),t)+"'"+r})}function Y(e){return e.substring(0,e.lastIndexOf("/")+1)}function j(){}function G(e){const t=customElements.get("dom-module");return t?t.import(e):null}function W(e){let t=e.body?e.body:e;const a=U(t.textContent,e.baseURI),n=document.createElement("style");return n.textContent=a,n}function X(e){const t=e.trim().split(/\s+/),a=[];for(let n=0;n<t.length;n++)a.push(...Q(t[n]));return a}function Q(e){const t=G(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){const e=[...ee(t)],a=t.querySelector("template");a&&e.push(...J(a,t.assetpath)),t._styles=e}return t._styles}function J(e,t){if(!e._styles){const a=[],n=e.content.querySelectorAll("style");for(let r=0;r<n.length;r++){let i=n[r],e=i.getAttribute("include");e&&a.push(...X(e).filter(function(e,t,a){return a.indexOf(e)===t})),t&&(i.textContent=U(i.textContent,t)),a.push(i)}e._styles=a}return e._styles}function Z(e){let t=G(e);return t?ee(t):[]}function ee(e){const t=[],a=e.querySelectorAll("link[rel=import][type~=css]");for(let n=0,r;n<a.length;n++)if(r=a[n],r.import){const e=r.import,a=r.hasAttribute("shady-unscoped");if(a&&!e._unscopedStyle){const t=W(e);t.setAttribute("shady-unscoped",""),e._unscopedStyle=t}else e._style||(e._style=W(e));t.push(a?e._unscopedStyle:e._style)}return t}function te(e){let t=e.trim().split(/\s+/),a="";for(let n=0;n<t.length;n++)a+=ae(t[n]);return a}function ae(e){let a=G(e);if(a&&void 0===a._cssText){let e=ie(a),n=a.querySelector("template");n&&(e+=ne(n,a.assetpath)),a._cssText=e||null}return a||console.warn("Could not find style data in module named",e),a&&a._cssText||""}function ne(e,t){let a="";const n=J(e,t);for(let r=0,i;r<n.length;r++)i=n[r],i.parentNode&&i.parentNode.removeChild(i),a+=i.textContent;return a}function re(e){let t=G(e);return t?ie(t):""}function ie(e){let t="",a=ee(e);for(let n=0;n<a.length;n++)t+=a[n].textContent;return t}function oe(e){return Kn[e]||Un[e.toLowerCase()]}function se(e){e.querySelector("style")&&console.warn("dom-module %s has style outside template",e.id)}function de(e){return 0<=e.indexOf(".")}function le(e){let t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function pe(e,t){return 0===e.indexOf(t+".")}function _e(e,t){return 0===t.indexOf(e+".")}function ce(e,t,a){return t+a.slice(e.length)}function ue(e,t){return e===t||pe(e,t)||_e(e,t)}function he(e){if(Array.isArray(e)){let t=[];for(let a=0,n;a<e.length;a++){n=e[a].toString().split(".");for(let e=0;e<n.length;e++)t.push(n[e])}return t.join(".")}return e}function me(e){return Array.isArray(e)?he(e).split("."):e.toString().split(".")}function ye(e,t,a){let n=e,r=me(t);for(let o=0;o<r.length;o++){if(!n)return;let e=r[o];n=n[e]}return a&&(a.path=r.join(".")),n}function ge(e,t,a){let n=e,r=me(t),i=r[r.length-1];if(1<r.length){for(let e=0,t;e<r.length-1;e++)if(t=r[e],n=n[t],!n)return;n[i]=a}else n[t]=a;return r.join(".")}function fe(e){return Gn[e]||(Gn[e]=0>e.indexOf("-")?e:e.replace(Wn,e=>e[1].toUpperCase()))}function ve(e){return Gn[e]||(Gn[e]=e.replace(Xn,"-$1").toLowerCase())}function be(e,t){if(!pr[t]){let a=e[t];a!==void 0&&(e.__data?e._setPendingProperty(t,a):(e.__dataProto?!e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))&&(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=a))}}function Se(e){let a=e.getAttribute("is");if(a&&ur[a]){let n=e;for(n.removeAttribute("is"),e=n.ownerDocument.createElement(a),n.parentNode.replaceChild(e,n),e.appendChild(n);n.attributes.length;)e.setAttribute(n.attributes[0].name,n.attributes[0].value),n.removeAttribute(n.attributes[0].name)}return e}function Ce(e,t){let a=t.parentInfo&&Ce(e,t.parentInfo);if(a){for(let e=a.firstChild,n=0;e;e=e.nextSibling)if(t.parentIndex===n++)return e;}else return e}function Ee(e,t,a,n){n.id&&(t[n.id]=a)}function Pe(t,a,n){if(n.events&&n.events.length)for(let r=0,i=n.events,o;r<i.length&&(o=i[r]);r++)t._addMethodEventListenerToNode(a,o.name,o.value,t)}function Te(e,t,a){a.templateInfo&&(t._templateInfo=a.templateInfo)}function Ae(t,e,a){t=t._methodHost||t;let n=function(n){t[a]?t[a](n,n.detail):console.warn("listener method `"+a+"` not defined")};return n}function Ie(e,t){let a=e[t];if(!a)a=e[t]={};else if(!e.hasOwnProperty(t))for(let n in a=e[t]=Object.create(e[t]),a){let e=a[n],t=a[n]=Array(e.length);for(let a=0;a<e.length;a++)t[a]=e[a]}return a}function xe(e,t,a,n,r,i){if(t){let o=!1,s=yr++;for(let d in a)Re(e,t,s,d,a,n,r,i)&&(o=!0);return o}return!1}function Re(e,t,a,n,r,o,s,d){let p=!1,i=s?le(n):n,_=t[i];if(_)for(let t=0,i=_.length,l;t<i&&(l=_[t]);t++)l.info&&l.info.lastRun===a||s&&!we(n,l.trigger)||(l.info&&(l.info.lastRun=a),l.fn(e,n,r,o,l.info,s,d),p=!0);return p}function we(e,t){if(t){let a=t.name;return a==e||t.structured&&pe(a,e)||t.wildcard&&_e(a,e)}return!0}function ke(e,t,a,n,r){let i="string"===typeof r.method?e[r.method]:r.method,o=r.property;i?i.call(e,e.__data[o],n[o]):!r.dynamicFn&&console.warn("observer method `"+r.method+"` not defined")}function De(e,t,a,n,r){let i=e[gr.NOTIFY],o=yr++,s;for(let d in t)t[d]&&(i&&Re(e,i,o,d,a,n,r)?s=!0:r&&Oe(e,d,a)&&(s=!0));let d;s&&(d=e.__dataHost)&&d._invalidateProperties&&d._invalidateProperties()}function Oe(e,t,a){let n=le(t);if(n!==t){let r=ve(n)+"-changed";return Ne(e,r,a[t],t),!0}return!1}function Ne(e,t,a,n){let r={value:a,queueProperty:!0};n&&(r.path=n),e.dispatchEvent(new CustomEvent(t,{detail:r}))}function Le(e,t,a,n,r,i){let o=i?le(t):t,s=o==t?null:t,d=s?ye(e,s):e.__data[t];s&&d===void 0&&(d=a[t]),Ne(e,r.eventName,d,s)}function Me(e,t,a,n,r){let i=e.detail,o=i&&i.path,s;o?(n=ce(a,n,o),s=i&&i.value):s=e.target[a],s=r?!s:s,t[gr.READ_ONLY]&&t[gr.READ_ONLY][n]||!t._setPendingPropertyOrPath(n,s,!0,!!o)||i&&i.queueProperty||t._invalidateProperties()}function Be(e,t,a,n,r){let i=e.__data[t];Bn&&(i=Bn(i,r.attrName,"attribute",e)),e._propertyToAttribute(t,r.attrName,i)}function $e(e,t,a,n){let r=e[gr.COMPUTE];if(r)for(let i=t;xe(e,r,i,a,n);)Object.assign(a,e.__dataOld),Object.assign(t,e.__dataPending),i=e.__dataPending,e.__dataPending=null}function Fe(e,t,a,n,r){let i=Qe(e,t,a,n,r),o=r.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[o]?e._setPendingProperty(o,i,!0):e[o]=i}function He(e,t,n){let r=e.__dataLinkedPaths;if(r){let i;for(let o in r){let a=r[o];_e(o,t)?(i=ce(o,a,t),e._setPendingPropertyOrPath(i,n,!0,!0)):_e(a,t)&&(i=ce(a,o,t),e._setPendingPropertyOrPath(i,n,!0,!0))}}}function Ve(e,t,a,n,r,i,o){a.bindings=a.bindings||[];let s={kind:n,target:r,parts:i,literal:o,isCompound:1!==i.length};if(a.bindings.push(s),Ye(s)){let{event:e,negate:t}=s.parts[0];s.listenerEvent=e||mr.camelToDashCase(r)+"-changed",s.listenerNegate=t}let d=t.nodeInfoList.length;for(let l=0,p;l<s.parts.length;l++)p=s.parts[l],p.compoundIndex=l,ze(e,t,s,p,d)}function ze(e,t,a,n,r){if(!n.literal)if("attribute"===a.kind&&"-"===a.target[0])console.warn("Cannot set attribute "+a.target+" because \"-\" is not a valid attribute starting character");else{let i=n.dependencies,o={index:r,binding:a,part:n,evaluator:e};for(let a=0,n;a<i.length;a++)n=i[a],"string"==typeof n&&(n=tt(n),n.wildcard=!0),e._addTemplatePropertyEffect(t,n.rootProperty,{fn:qe,info:o,trigger:n})}}function qe(e,t,a,n,r,i,o){let s=o[r.index],d=r.binding,l=r.part;if(i&&l.source&&t.length>l.source.length&&"property"==d.kind&&!d.isCompound&&s.__isPropertyEffectsClient&&s.__dataHasAccessor&&s.__dataHasAccessor[d.target]){let n=a[t];t=ce(l.source,d.target,t),s._setPendingPropertyOrPath(t,n,!1,!0)&&e._enqueueClient(s)}else{let o=r.evaluator._evaluateBinding(e,l,t,a,n,i);Ke(e,s,d,l,o)}}function Ke(e,t,a,n,r){if(r=Ue(t,r,a,n),Bn&&(r=Bn(r,a.target,a.kind,t)),"attribute"==a.kind)e._valueToNodeAttribute(t,r,a.target);else{let n=a.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[n]?(!t[gr.READ_ONLY]||!t[gr.READ_ONLY][n])&&t._setPendingProperty(n,r)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,n,r)}}function Ue(e,t,a,n){if(a.isCompound){let r=e.__dataCompoundStorage[a.target];r[n.compoundIndex]=t,t=r.join("")}return"attribute"!==a.kind&&("textContent"===a.target||"value"===a.target&&("input"===e.localName||"textarea"===e.localName))&&(t=void 0==t?"":t),t}function Ye(e){return!!e.target&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}function je(e,t){let{nodeList:a,nodeInfoList:n}=t;if(n.length)for(let t=0;t<n.length;t++){let r=n[t],o=a[t],s=r.bindings;if(s)for(let t=0,a;t<s.length;t++)a=s[t],Ge(o,a),We(o,e,a);o.__dataHost=e}}function Ge(e,t){if(t.isCompound){let a=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,r=Array(n.length);for(let e=0;e<n.length;e++)r[e]=n[e].literal;let i=t.target;a[i]=r,t.literal&&"property"==t.kind&&(e[i]=t.literal)}}function We(e,t,a){if(a.listenerEvent){let n=a.parts[0];e.addEventListener(a.listenerEvent,function(r){Me(r,t,a.target,n.source,n.negate)})}}function Xe(e,t,a,n,r,i){i=t.static||i&&("object"!==typeof i||i[t.methodName]);let o={methodName:t.methodName,args:t.args,methodInfo:r,dynamicFn:i};for(let s=0,d;s<t.args.length&&(d=t.args[s]);s++)d.literal||e._addPropertyEffect(d.rootProperty,a,{fn:n,info:o,trigger:d});i&&e._addPropertyEffect(t.methodName,a,{fn:n,info:o})}function Qe(e,t,a,n,r){let i=e._methodHost||e,o=i[r.methodName];if(o){let n=at(e.__data,r.args,t,a);return o.apply(i,n)}r.dynamicFn||console.warn("method `"+r.methodName+"` not defined")}function Je(e){let t="";for(let a=0,n;a<e.length;a++)n=e[a].literal,t+=n||"";return t}function Ze(e){let t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){let e=t[1],a={methodName:e,static:!0,args:br};if(t[2].trim()){let e=t[2].replace(/\\,/g,"&comma;").split(",");return et(e,a)}return a}return null}function et(e,t){return t.args=e.map(function(e){let a=tt(e);return a.literal||(t.static=!1),a},this),t}function tt(e){let t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),n={name:t,value:"",literal:!1},a=t[0];return"-"===a&&(a=t[1]),"0"<=a&&"9">=a&&(a="#"),"'"===a||"\""===a?(n.value=t.slice(1,-1),n.literal=!0):"#"===a?(n.value=+t,n.literal=!0):void 0,(n.literal||(n.rootProperty=le(t),n.structured=de(t),n.structured&&(n.wildcard=".*"==t.slice(-2),n.wildcard&&(n.name=t.slice(0,-2)))),n)}function at(e,t,a,n){let r=[];for(let o=0,i=t.length;o<i;o++){let i=t[o],s=i.name,d;if(i.literal?d=i.value:i.structured?(d=ye(e,s),void 0===d&&(d=n[s])):d=e[s],i.wildcard){let e=0===s.indexOf(a+"."),t=0===a.indexOf(s)&&!e;r[o]={path:t?a:s,value:t?n[a]:d,base:d}}else r[o]=d}return r}function nt(e,t,a,n){let r=a+".splices";e.notifyPath(r,{indexSplices:n}),e.notifyPath(a+".length",t.length),e.__data[r]={indexSplices:null}}function rt(e,t,a,n,r,i){nt(e,t,a,[{index:n,addedCount:r,removed:i,object:t,type:"splice"}])}function it(e){return e[0].toUpperCase()+e.substring(1)}function ot(e){const t={};for(let a in e){const n=e[a];t[a]="function"===typeof n?{type:n}:n}return t}function st(e){console.log("["+e.is+"]: registered")}function dt(e){Rr.push(e),void 0}function lt(){Rr.forEach(st)}function pt(e){return-1<Mr.indexOf(e)}function _t(e){return pt(e)||"touchend"===e?void 0:Or&&Fr&&Fn?{passive:!0}:void 0}function ct(e){return qr[e.localName]||!1}function ut(e){let t=[...(e.labels||[])];if(!t.length){t=[];let a=e.getRootNode();if(e.id){let n=a.querySelectorAll(`label[for = ${e.id}]`);for(let e=0;e<n.length;e++)t.push(n[e])}}return t}function ht(e){let t=Hr?["click"]:Mr;for(let a=0,n;a<t.length;a++)n=t[a],e?(zr.length=0,document.addEventListener(n,Kr,!0)):document.removeEventListener(n,Kr,!0)}function mt(e){let t=e.type;if(!pt(t))return!1;if("mousemove"===t){let t=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!$r&&(t=Br[e.which]||0),!!(1&t)}else{let t=void 0===e.button?0:e.button;return 0===t}}function yt(e){if("click"===e.type){if(0===e.detail)return!0;let a=St(e);if(!a.nodeType||a.nodeType!==Node.ELEMENT_NODE)return!0;let t=a.getBoundingClientRect(),n=e.pageX,r=e.pageY;return!(n>=t.left&&n<=t.right&&r>=t.top&&r<=t.bottom)}return!1}function gt(e){let t="auto",a=e.composedPath&&e.composedPath();if(a)for(let e=0,r;e<a.length;e++)if(r=a[e],r.__polymerGesturesTouchAction){t=r.__polymerGesturesTouchAction;break}return t}function ft(e,t,a){e.movefn=t,e.upfn=a,document.addEventListener("mousemove",t),document.addEventListener("mouseup",a)}function vt(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}function bt(e,t){let a=document.elementFromPoint(e,t),n=a;for(;n&&n.shadowRoot&&!window.ShadyDOM;){let r=n;if(n=n.shadowRoot.elementFromPoint(e,t),r===n)break;n&&(a=n)}return a}function St(e){if(e.composedPath){const t=e.composedPath();return 0<t.length?t[0]:e.target}return e.target}function Ct(e){let a=e.type,t=e.currentTarget,n=t.__polymerGestures,o;if(n){let t=n[a];if(t){if(!e.__polymerGesturesHandled&&(e.__polymerGesturesHandled={},"touch"===a.slice(0,5))){e=e;let n=e.changedTouches[0];if("touchstart"===a&&1===e.touches.length&&(Ur.touch.id=n.identifier),Ur.touch.id!==n.identifier)return;Or||"touchstart"!==a&&"touchmove"!==a||Et(e)}if(o=e.__polymerGesturesHandled,!o.skip){for(let a=0,n;a<jr.length;a++)n=jr[a],t[n.name]&&!o[n.name]&&n.flow&&-1<n.flow.start.indexOf(e.type)&&n.reset&&n.reset();for(let n=0,i;n<jr.length;n++)i=jr[n],t[i.name]&&!o[i.name]&&(o[i.name]=!0,i[a](e))}}}}function Et(e){let a=e.changedTouches[0],t=e.type;if("touchstart"===t)Ur.touch.x=a.clientX,Ur.touch.y=a.clientY,Ur.touch.scrollDecided=!1;else if("touchmove"===t){if(Ur.touch.scrollDecided)return;Ur.touch.scrollDecided=!0;let t=gt(e),n=!1,r=Fa(Ur.touch.x-a.clientX),i=Fa(Ur.touch.y-a.clientY);e.cancelable&&("none"===t?n=!0:"pan-x"===t?n=i>r:"pan-y"===t&&(n=r>i)),n?e.preventDefault():n("track")}}function Pt(e,t,a){return!!Yr[t]&&(At(e,t,a),!0)}function Tt(e,t,a){return!!Yr[t]&&(It(e,t,a),!0)}function At(e,t,a){let n=Yr[t],r=n.deps,o=n.name,s=e.__polymerGestures;s||(e.__polymerGestures=s={});for(let n=0,i,d;n<r.length;n++)(i=r[n],!(Hr&&pt(i)&&"click"!==i))&&(d=s[i],d||(s[i]=d={_count:0}),0===d._count&&e.addEventListener(i,Ct,_t(i)),d[o]=(d[o]||0)+1,d._count=(d._count||0)+1);e.addEventListener(t,a),n.touchAction&&wt(e,n.touchAction)}function It(e,t,a){let n=Yr[t],r=n.deps,o=n.name,s=e.__polymerGestures;if(s)for(let t=0,a,n;t<r.length;t++)a=r[t],n=s[a],n&&n[o]&&(n[o]=(n[o]||1)-1,n._count=(n._count||1)-1,0===n._count&&e.removeEventListener(a,Ct,_t(a)));e.removeEventListener(t,a)}function xt(e){jr.push(e);for(let t=0;t<e.emits.length;t++)Yr[e.emits[t]]=e}function Rt(e){for(let t=0,a;t<jr.length;t++){a=jr[t];for(let t=0,r;t<a.emits.length;t++)if(r=a.emits[t],r===e)return a}return null}function wt(e,t){Or&&or.run(()=>{e.style.touchAction=t}),e.__polymerGesturesTouchAction=t}function kt(e,t,a){let n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=a,e.dispatchEvent(n),n.defaultPrevented){let e=a.preventer||a.sourceEvent;e&&e.preventDefault&&e.preventDefault()}}function Dt(e){let t=Rt(e);t.info&&(t.info.prevent=!0)}function Ot(){Ur.mouse.mouseIgnoreJob&&Ur.mouse.mouseIgnoreJob.flush()}function Nt(){ri=document.documentElement.getAttribute("dir")}function Lt(e){if(!e.__autoDirOptOut){e.setAttribute("dir",ri)}}function Mt(){Nt(),ri=document.documentElement.getAttribute("dir");for(let e=0;e<ai.length;e++)Lt(ai[e])}function Bt(){ni&&ni.takeRecords().length&&Mt()}function $t(e){window.HTMLImports?HTMLImports.whenReady(e):e()}function Ft(){si=!0,requestAnimationFrame(function(){si=!1,Ht(di),setTimeout(function(){Vt(li)})})}function Ht(e){for(;e.length;)zt(e.shift())}function Vt(e){for(let t=0,a=e.length;t<a;t++)zt(e.shift())}function zt(e){const t=e[0],a=e[1],n=e[2];try{a.apply(t,n)}catch(t){setTimeout(()=>{throw t})}}function qt(){for(;di.length||li.length;)Ht(di),Ht(li);si=!1}function Kt(e,t,a){si||Ft(),di.push([e,t,a])}function Ut(e,t,a){si||Ft(),li.push([e,t,a])}function Yt(){document.body.removeAttribute("unresolved")}function jt(e,t,a){return{index:e,removed:t,addedCount:a}}function Gt(e,t,a,n,r,i){let o=i-r+1,s=a-t+1,d=Array(o);for(let l=0;l<o;l++)d[l]=Array(s),d[l][0]=l;for(let o=0;o<s;o++)d[0][o]=o;for(let l=1;l<o;l++)for(let a=1;a<s;a++)if(ea(e[t+a-1],n[r+l-1]))d[l][a]=d[l-1][a-1];else{let e=d[l-1][a]+1,t=d[l][a-1]+1;d[l][a]=e<t?e:t}return d}function Wt(e){let t=e.length-1,a=e[0].length-1,n=e[t][a],r=[];for(;0<t||0<a;){if(0==t){r.push(2),a--;continue}if(0==a){r.push(3),t--;continue}let i=e[t-1][a-1],o=e[t-1][a],s=e[t][a-1],d;d=o<s?o<i?o:i:s<i?s:i,d==i?(i==n?r.push(0):(r.push(1),n=i),t--,a--):d==o?(r.push(3),t--,n=o):(r.push(2),a--,n=s)}return r.reverse(),r}function Xt(e,t,a,n,r,i){let o=0,s=0,d=$a(a-t,i-r),l;if(0==t&&0==r&&(o=Qt(e,n,d)),a==e.length&&i==n.length&&(s=Jt(e,n,d-o)),t+=o,r+=o,a-=s,i-=s,0==a-t&&0==i-r)return[];if(t==a){for(l=jt(t,[],0);r<i;)l.removed.push(n[r++]);return[l]}if(r==i)return[jt(t,[],a-t)];let p=Wt(Gt(e,t,a,n,r,i));l=void 0;let _=[],c=t,u=r;for(let o=0;o<p.length;o++)switch(p[o]){case 0:l&&(_.push(l),l=void 0),c++,u++;break;case 1:l||(l=jt(c,[],0)),l.addedCount++,c++,l.removed.push(n[u]),u++;break;case 2:l||(l=jt(c,[],0)),l.addedCount++,c++;break;case 3:l||(l=jt(c,[],0)),l.removed.push(n[u]),u++;}return l&&_.push(l),_}function Qt(e,t,a){for(let n=0;n<a;n++)if(!ea(e[n],t[n]))return n;return a}function Jt(e,t,a){let n=e.length,r=t.length,i=0;for(;i<a&&ea(e[--n],t[--r]);)i++;return i}function Zt(e,t){return Xt(e,0,e.length,t,0,t.length)}function ea(e,t){return e===t}function ta(e){return"slot"===e.localName}function aa(){const e=!!_i.length;for(;_i.length;)try{_i.shift().flush()}catch(t){setTimeout(()=>{throw t})}return e}function na(e,t){for(let a=0,n;a<t.length;a++)n=t[a],e[n]=function(){return this.node[n].apply(this.node,arguments)}}function ra(e,t){for(let a=0,n;a<t.length;a++)n=t[a],Object.defineProperty(e,n,{get:function(){const e=this;return e.node[n]},configurable:!0})}function ia(e,t){for(let a=0,n;a<t.length;a++)n=t[a],Object.defineProperty(e,n,{get:function(){const e=this;return e.node[n]},set:function(e){this.node[n]=e},configurable:!0})}function oa(e,t){if(!e)return t=t,t;t=bi(t),Array.isArray(e)||(e=[e]);let a=t.prototype.behaviors;return e=da(e,null,a),t=sa(e,t),a&&(e=a.concat(e)),t.prototype.behaviors=e,t}function sa(e,t){for(let a=0,n;a<e.length;a++)n=e[a],n&&(t=Array.isArray(n)?sa(n,t):la(n,t));return t}function da(e,t,a){t=t||[];for(let n=e.length-1,r;0<=n;n--)r=e[n],r?Array.isArray(r)?da(r,t):0>t.indexOf(r)&&(!a||0>a.indexOf(r))&&t.unshift(r):console.warn("behavior is null, check for missing or 404 import");return t}function la(e,t){class a extends t{static get properties(){return e.properties}static get observers(){return e.observers}static get template(){return e._template||Yn&&Yn.import(this.is,"template")||t.template||this.prototype._template||null}created(){super.created(),e.created&&e.created.call(this)}_registered(){super._registered(),e.beforeRegister&&e.beforeRegister.call(Object.getPrototypeOf(this)),e.registered&&e.registered.call(Object.getPrototypeOf(this))}_applyListeners(){if(super._applyListeners(),e.listeners)for(let t in e.listeners)this._addMethodEventListenerToNode(this,t,e.listeners[t])}_ensureAttributes(){if(e.hostAttributes)for(let t in e.hostAttributes)this._ensureAttribute(t,e.hostAttributes[t]);super._ensureAttributes()}ready(){super.ready(),e.ready&&e.ready.call(this)}attached(){super.attached(),e.attached&&e.attached.call(this)}detached(){super.detached(),e.detached&&e.detached.call(this)}attributeChanged(t,a,n){super.attributeChanged(t,a,n),e.attributeChanged&&e.attributeChanged.call(this,t,a,n)}}for(let n in a.generatedFrom=e,e)if(!(n in Si)){let t=Object.getOwnPropertyDescriptor(e,n);t&&Object.defineProperty(a.prototype,n,t)}return a}function pa(e,t,a,n,r){let i;r&&(i="object"===typeof a&&null!==a,i&&(n=e.__dataTemp[t]));let o=n!==a&&(n===n||a===a);return i&&o&&(e.__dataTemp[t]=a),o}function _a(){return Ai}function ca(e,t){Ai=e,Object.setPrototypeOf(e,t.prototype),new t,Ai=null}function ua(e){let t=e.__dataHost;return t&&t._methodHost||t}function ha(e,t,a){let n=a.mutableData?ki:wi,r=class extends n{};return r.prototype.__templatizeOptions=a,r.prototype._bindTemplate(e),ga(r,e,t,a),r}function ma(e,t,a){let n=a.forwardHostProp;if(n){let r=t.templatizeTemplateClass;if(!r){let e=a.mutableData?xi:Ii;r=t.templatizeTemplateClass=class extends e{};let i=t.hostProps;for(let e in i)r.prototype._addPropertyEffect("_host_"+e,r.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:ya(e,n)}),r.prototype._createNotifyingProperty("_host_"+e)}ca(e,r),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function ya(e,t){return function(e,a,n){t.call(e.__templatizeOwner,a.substring(6),n[a])}}function ga(e,t,a,n){let r=a.hostProps||{};for(let i in n.instanceProps){delete r[i];let t=n.notifyInstanceProp;t&&e.prototype._addPropertyEffect(i,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:fa(i,t)})}if(n.forwardHostProp&&t.__dataHost)for(let t in r)e.prototype._addPropertyEffect(t,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:va()})}function fa(e,t){return function(e,a,n){t.call(e.__templatizeOwner,e,a,n[a])}}function va(){return function(e,t,a){e.__dataHost._setPendingPropertyOrPath("_host_"+t,a[t],!0,!0)}}function ba(e,t,a){if(a=a||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;const n=t?t.constructor:wi;let r=n._parseTemplate(e),i=r.templatizeInstanceClass;i||(i=ha(e,r,a),r.templatizeInstanceClass=i),ma(e,r,a);let o=class extends i{};return o.prototype._methodHost=ua(e),o.prototype.__dataHost=e,o.prototype.__templatizeOwner=t,o.prototype.__hostProps=r.hostProps,o=o,o}function Sa(e,t){for(let a;t;)if(!(a=t.__templatizeInstance))t=t.parentNode;else if(a.__dataHost!=e)t=a.__dataHost;else return a;return null}function Ca(e){if(e instanceof Li)return e.value;throw new Error(`non-literal value passed to Polymer.htmlLiteral: ${e}`)}function Ea(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof Li)return Ca(e);throw new Error(`non-template value passed to Polymer.html: ${e}`)}function Pa(e,t){if(void 0===co){co=!1;try{var a=new URL("b","http://a");a.pathname="c%20d",co="http://a/c%20d"===a.href,co=co&&"http://www.google.com/?foo%20bar"===new URL("http://www.google.com/?foo bar").href}catch(t){}}return co?new URL(e,t):(uo||(uo=document.implementation.createHTMLDocument("url"),ho=uo.createElement("base"),uo.head.appendChild(ho),mo=uo.createElement("a")),ho.href=t,mo.href=e.replace(/ /g,"%20"),mo)}function Ta(e,t){var a="";if(e){var n=e.toLowerCase();" "===n||Po.test(n)?a="space":To.test(n)?a="esc":1==n.length?(!t||So.test(n))&&(a=n):Eo.test(n)?a=n.replace("arrow",""):"multiply"==n?a="*":a=n}return a}function Aa(e){var t="";return e&&(e in fo?t=fo[e]:Co.test(e)?(e=parseInt(e.replace("U+","0x"),16),t=La(e).toLowerCase()):t=e.toLowerCase()),t}function Ia(e){var t="";return+e&&(65<=e&&90>=e?t=La(32+e):112<=e&&123>=e?t="f"+(e-112+1):48<=e&&57>=e?t=e-48+"":96<=e&&105>=e?t=e-96+"":t=vo[e]),t}function xa(e,t){return e.key?Ta(e.key,t):e.detail&&e.detail.key?Ta(e.detail.key,t):Aa(e.keyIdentifier)||Ia(e.keyCode)||""}function Ra(e,t){var a=xa(t,e.hasModifiers);return a===e.key&&(!e.hasModifiers||!!t.shiftKey===!!e.shiftKey&&!!t.ctrlKey===!!e.ctrlKey&&!!t.altKey===!!e.altKey&&!!t.metaKey===!!e.metaKey)}function wa(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce(function(e,t){var a=t.split(":"),n=a[0],r=a[1];return n in bo?(e[bo[n]]=!0,e.hasModifiers=!0):(e.key=n,e.event=r||"keydown"),e},{combo:e.split(":").shift()})}function ka(e){return e.trim().split(" ").map(function(e){return wa(e)})}function Da(e){this.element=e,this.width=this.boundingRect.width,this.height=this.boundingRect.height,this.size=Ma(this.width,this.height)}function Oa(e){this.element=e,this.color=window.getComputedStyle(e).color,this.wave=document.createElement("div"),this.waveContainer=document.createElement("div"),this.wave.style.backgroundColor=this.color,this.wave.classList.add("wave"),this.waveContainer.classList.add("wave-container"),fi(this.waveContainer).appendChild(this.wave),this.resetInteractionState()}var Na=Math.sqrt,La=String.fromCharCode,Ma=Math.max,Ba=Math.round,$a=Math.min,Fa=Math.abs;Object.defineProperty(e,"__esModule",{value:!0}),e.mixinBehaviors=oa,e._regLog=st,e.register=dt,e.dumpRegistrations=lt,e.calculateSplices=Zt,e.dashToCamelCase=fe,e.camelToDashCase=ve,e.deepTargetFind=bt,e._findOriginalTarget=St,e._handleNative=Ct,e._handleTouchAction=Et,e.addListener=Pt,e.removeListener=Tt,e._add=At,e._remove=It,e.register$1=xt,e._findRecognizerByEvent=Rt,e.setTouchAction=wt,e._fire=kt,e.prevent=Dt,e.resetMouseCanceller=Ot,e.isPath=de,e.root=le,e.isAncestor=pe,e.isDescendant=_e,e.translate=ce,e.matches=ue,e.normalize=he,e.split=me,e.get=ye,e.set=ge,e.beforeNextRender=Kt,e.afterNextRender=Ut,e.flush$2=qt,e.resolveCss=U,e.resolveUrl=K,e.pathFromUrl=Y,e.stylesFromModules=X,e.stylesFromModule=Q,e.stylesFromTemplate=J,e.stylesFromModuleImports=Z,e._stylesFromModuleImports=ee,e.cssFromModules=te,e.cssFromModule=ae,e.cssFromTemplate=ne,e.cssFromModuleImports=re,e._cssFromModuleImports=ie,e.templatize=ba,e.modelForElement=Sa,e.invalidate=N,e.invalidateTemplate=L,e.isValid=M,e.templateIsValid=B,e.isValidating=$,e.templateIsValidating=F,e.startValidating=H,e.startValidatingTemplate=V,e.elementsAreInvalid=z,e.updateNativeProperties=k,e.getComputedStyleValue=D,e.detectMixin=O,e.parse=n,e.stringify=s,e.removeCustomPropAssignment=c,e.$documentWaitDefault=q,e.toCssText=y,e.rulesForStyle=g,e.isKeyframesSelector=f,e.forEachRule=v,e.applyCss=b,e.createScopeStyle=S,e.applyStylePlaceHolder=C,e.applyStyle=E,e.isTargetedBuild=P,e.getCssBuildType=T,e.processVariableAndFallback=I,e.setElementClassRaw=x,e.getIsExtends=R,e.gatherStyleText=w,e.processUnscopedStyle=h,e.isUnscopedStyle=m,e.IronValidatableBehavior=e.IronValidatableBehaviorMeta=e.IronSelection=e.IronSelectableBehavior=e.IronScrollTargetBehavior=e.IronResizableBehavior=e.IronRangeBehavior=e.IronMeta=e.IronFormElementBehavior=e.IronCheckedElementBehavior=e.IronCheckedElementBehaviorImpl=e.IronControlState=e.IronButtonState=e.IronButtonStateImpl=e.IronA11yKeysBehavior=e.IronA11yAnnouncer=e.AppRouteConverterBehavior=e.scroll=e.queryAllRoot=e.registerEffect=e.scrollTimingFunction=e._scrollTimer=e._scrollEffects=e.AppScrollEffectsBehavior=e.AppLayoutBehavior=e.$applicationShell=e.$unscopedStyleHandler=e.$templateMap=e.$styleUtil=e.$styleSettings=e.$documentWait=e.$customStyleInterface$1=e.$cssParse=e.$commonUtils=e.$commonRegex=e.$applyShim$1=e.$applyShimUtils=e.$polymerLegacy=e.$polymerElement=e.$templatize=e.$styleGather=e.$settings=e.$resolveUrl=e.$renderStatus=e.$path=e.$mixin=e.$importHref=e.$htmlTag=e.$gestures=e.$flush=e.$flattenedNodesObserver=e.$debounce=e.$caseMap=e.$async=e.$arraySplice=e.$templateStamp=e.$propertyEffects=e.$propertyAccessors=e.$propertiesMixin=e.$propertiesChanged=e.$mutableData=e.$gestureEventListeners=e.$elementMixin=e.$dirMixin=e.$templatizerBehavior=e.$polymerDom=e.$polymerFn=e.$mutableDataBehavior=e.$legacyElementMixin=e.$class=e.$domRepeat=e.$domModule=e.$domIf=e.$domBind=e.$customStyle=e.$arraySelector=e.$paperItemBehavior=e.$paperInputBehavior=e.$paperInputAddonBehavior=e.$paperRippleBehavior=e.$paperInkyFocusBehavior=e.$paperCheckedElementBehavior=e.$paperButtonBehavior=e.$ironValidatableBehavior=e.$ironSelection=e.$ironSelectable=e.$ironScrollTargetBehavior=e.$ironResizableBehavior=e.$ironRangeBehavior=e.$ironMeta=e.$ironFormElementBehavior=e.$ironCheckedElementBehavior=e.$ironControlState=e.$ironButtonState=e.$ironA11yKeysBehavior=e.$ironA11yAnnouncer=e.$appRouteConverterBehavior=e.$helpers=e.$appScrollEffectsBehavior=e.$appLayoutBehavior=void 0,e.ApplicationShell=e.scopingAttribute=e.$templateMapDefault=e.nativeCssVariables=e.nativeShadow=e.CustomStyleInterfaceInterface=e.$customStyleInterfaceDefault=e.CustomStyleProvider=e.types=e.StyleNode=e.HOST_SUFFIX=e.HOST_PREFIX=e.BRACKETED=e.IS_VAR=e.MEDIA_MATCH=e.ANIMATION_MATCH=e.VAR_CONSUMED=e.MIXIN_MATCH=e.VAR_ASSIGN=e.$applyShimDefault=e.Base=e.PolymerElement=e.TemplateInstanceBase=e.setPassiveTouchGestures=e.passiveTouchGestures=e.setSanitizeDOMValue=e.sanitizeDOMValue=e.setRootPath=e.rootPath=e.useNativeCustomElements=e.useNativeCSSProperties=e.useShadow=e.isDeep=e.dedupingMixin=e.importHref=e.htmlLiteral=e.html$2=e.html$1=e.html=e.remove=e.add=e.findOriginalTarget=e.recognizers=e.gestures=e.FlattenedNodesObserver=e.Debouncer=e.microTask=e.idlePeriod=e.animationFrame=e.timeOut=e.TemplateStamp=e.PropertyEffects=e.PropertyAccessors=e.PropertiesMixin=e.PropertiesChanged=e.OptionalMutableData=e.MutableData=e.GestureEventListeners=e.updateStyles=e.registrations=e.instanceCount=e.ElementMixin=e.DirMixin=e.Templatizer=e.enqueueDebouncer=e.addDebouncer=e.flush$1=e.flush=e.matchesSelector=e.dom=e.DomApi=e.Polymer=e.OptionalMutableDataBehavior=e.MutableDataBehavior=e.LegacyElementMixin=e.Class=e.DomRepeat=e.DomModule=e.DomIf=e.DomBind=e.CustomStyle=e.ArraySelector=e.ArraySelectorMixin=e.PaperItemBehavior=e.PaperItemBehaviorImpl=e.PaperInputBehavior=e.PaperInputBehaviorImpl=e.PaperInputHelper=e.PaperInputAddonBehavior=e.PaperRippleBehavior=e.PaperInkyFocusBehavior=e.PaperInkyFocusBehaviorImpl=e.PaperCheckedElementBehavior=e.PaperCheckedElementBehaviorImpl=e.PaperButtonBehavior=e.PaperButtonBehaviorImpl=void 0,"use strict";const Ha=!(window.ShadyDOM&&window.ShadyDOM.inUse);e.nativeShadow=Ha;let Va;window.ShadyCSS&&window.ShadyCSS.nativeCss!==void 0?Va=window.ShadyCSS.nativeCss:window.ShadyCSS?(a(window.ShadyCSS),window.ShadyCSS=void 0):a(window.WebComponents&&window.WebComponents.flags);const za=Va;e.nativeCssVariables=za;e.$styleSettings={nativeShadow:Ha,nativeCssVariables:za},"use strict";class qa{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}e.StyleNode=qa;const Ka={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3};e.types=Ka;const Ua="{",Ya="}",ja={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},Ga="--",Wa="@media",Xa="@";e.$cssParse={StyleNode:qa,parse:n,stringify:s,removeCustomPropAssignment:c,types:Ka};const Qa=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi;e.VAR_ASSIGN=Qa;const Ja=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi;e.MIXIN_MATCH=Ja;const Za=/(--[\w-]+)\s*([:,;)]|$)/gi;e.VAR_CONSUMED=Za;const en=/(animation\s*:)|(animation-name\s*:)/;e.ANIMATION_MATCH=en;const tn=/@media\s(.*)/;e.MEDIA_MATCH=tn;const an=/^--/;e.IS_VAR=an;const nn=/\{[^}]*\}/g;e.BRACKETED=nn;e.HOST_PREFIX="(?:^|[^.#[:])";e.HOST_SUFFIX="($|[.:[\\s>+~])";e.$commonRegex={VAR_ASSIGN:Qa,MIXIN_MATCH:Ja,VAR_CONSUMED:Za,ANIMATION_MATCH:en,MEDIA_MATCH:tn,IS_VAR:an,BRACKETED:nn,HOST_PREFIX:"(?:^|[^.#[:])",HOST_SUFFIX:"($|[.:[\\s>+~])"},"use strict";const rn=new Set,on="shady-unscoped";e.scopingAttribute=on;e.$unscopedStyleHandler={scopingAttribute:on,processUnscopedStyle:h,isUnscopedStyle:m},"use strict";let sn=null;e.$styleUtil={toCssText:y,rulesForStyle:g,isKeyframesSelector:f,forEachRule:v,applyCss:b,createScopeStyle:S,applyStylePlaceHolder:C,applyStyle:E,isTargetedBuild:P,getCssBuildType:T,processVariableAndFallback:I,setElementClassRaw:x,getIsExtends:R,gatherStyleText:w},"use strict";e.$commonUtils={updateNativeProperties:k,getComputedStyleValue:D,detectMixin:O},"use strict";const dn=/;\s*/m,ln=/^\s*(initial)|(inherit)\s*$/,pn=/\s*!important/,_n="_-_";class cn{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}let un=null;class hn{constructor(){this._currentElement=null,this._measureElement=null,this._map=new cn}detectMixin(e){return O(e)}gatherStyles(e){const t=w(e.content);if(t){const a=document.createElement("style");return a.textContent=t,e.content.insertBefore(a,e.content.firstChild),a}return null}transformTemplate(e,t){e._gatheredStyle===void 0&&(e._gatheredStyle=this.gatherStyles(e));const a=e._gatheredStyle;return a?this.transformStyle(a,t):null}transformStyle(e,t=""){let a=g(e);return this.transformRules(a,t),e.textContent=y(a),a}transformCustomStyle(e){let t=g(e);return v(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=y(t),t}transformRules(e,t){this._currentElement=t,v(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e){return e=e.replace(Qa,(e,t,a,n)=>this._produceCssProperties(e,t,a,n)),this._consumeCssProperties(e)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_consumeCssProperties(e){for(let t=null;t=Ja.exec(e);){let a=t[0],n=t[1],r=t.index,i=r+a.indexOf("@apply"),o=r+a.length,s=e.slice(0,i),d=e.slice(o),l=this._cssTextToMap(s),p=this._atApplyToCssProperties(n,l);e=`${s}${p}${d}`,Ja.lastIndex=r+p.length}return e}_atApplyToCssProperties(e,t){e=e.replace(dn,"");let a=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){this._currentElement&&(n.dependants[this._currentElement]=!0);let r,i,o;const s=n.properties;for(r in s)o=t&&t[r],i=[r,": var(",e,_n,r],o&&i.push(",",o.replace(pn,"")),i.push(")"),pn.test(s[r])&&i.push(" !important"),a.push(i.join(""))}return a.join("; ")}_replaceInitialOrInherit(e,t){let a=ln.exec(t);return a&&(a[1]?t=this._getInitialValueForProperty(e):t="apply-shim-inherit"),t}_cssTextToMap(e){let t=e.split(";"),a={},n,r;for(let o=0,i,s;o<t.length;o++)i=t[o],i&&(s=i.split(":"),1<s.length&&(n=s[0].trim(),r=this._replaceInitialOrInherit(n,s.slice(1).join(":")),a[n]=r));return a}_invalidateMixinEntry(e){if(un)for(let t in e.dependants)t!==this._currentElement&&un(t)}_produceCssProperties(e,t,a,n){if(a&&I(a,(e,t)=>{t&&this._map.get(t)&&(n=`@apply ${t};`)}),!n)return e;let r=this._consumeCssProperties(""+n),i=e.slice(0,e.indexOf("--")),o=this._cssTextToMap(r),s=o,d=this._map.get(t),l=d&&d.properties;l?s=Object.assign(Object.create(l),o):this._map.set(t,s);let _=[],c=!1,u,p;for(u in s)p=o[u],void 0===p&&(p="initial"),l&&!(u in l)&&(c=!0),_.push(`${t}${_n}${u}: ${p}`);return c&&this._invalidateMixinEntry(d),d&&(d.properties=s),a&&(i=`${e};${i}`),`${i}${_.join("; ")};`}}e.$applyShimDefault=hn,hn.prototype.detectMixin=hn.prototype.detectMixin,hn.prototype.transformStyle=hn.prototype.transformStyle,hn.prototype.transformCustomStyle=hn.prototype.transformCustomStyle,hn.prototype.transformRules=hn.prototype.transformRules,hn.prototype.transformRule=hn.prototype.transformRule,hn.prototype.transformTemplate=hn.prototype.transformTemplate,hn.prototype._separator=_n,Object.defineProperty(hn.prototype,"invalidCallback",{get(){return un},set(e){un=e}});e.$applyShim$1={default:hn},"use strict";const mn={};e.$templateMapDefault=mn;e.$templateMap={default:mn},"use strict";const yn=Promise.resolve();e.$applyShimUtils={invalidate:N,invalidateTemplate:L,isValid:M,templateIsValid:B,isValidating:$,templateIsValidating:F,startValidating:H,startValidatingTemplate:V,elementsAreInvalid:z},"use strict";let gn=null,fn=window.HTMLImports&&window.HTMLImports.whenReady||null,vn;e.$documentWait={default:q},"use strict";let bn;e.CustomStyleProvider=bn;const Sn="__shadyCSSCachedStyle";let Cn=null,En=null;class Pn{constructor(){this.customStyles=[],this.enqueued=!1}enqueueDocumentValidation(){this.enqueued||!En||(this.enqueued=!0,q(En))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){if(e[Sn])return e[Sn];let t;return t=e.getStyle?e.getStyle():e,t}processStyles(){const e=this.customStyles;for(let t=0;t<e.length;t++){const a=e[t];if(a[Sn])continue;const n=this.getStyleForCustomStyle(a);if(n){const e=n.__appliedElement||n;Cn&&Cn(e),a[Sn]=e}}return e}}e.$customStyleInterfaceDefault=Pn,Pn.prototype.addCustomStyle=Pn.prototype.addCustomStyle,Pn.prototype.getStyleForCustomStyle=Pn.prototype.getStyleForCustomStyle,Pn.prototype.processStyles=Pn.prototype.processStyles,Object.defineProperties(Pn.prototype,{transformCallback:{get(){return Cn},set(e){Cn=e}},validateCallback:{get(){return En},set(e){let t=!1;En||(t=!0),En=e,t&&this.enqueueDocumentValidation()}}});let Tn;e.CustomStyleInterfaceInterface=Tn;e.$customStyleInterface$1={CustomStyleProvider:bn,default:Pn,CustomStyleInterfaceInterface:Tn},"use strict";const An=new hn;class In{constructor(){this.customStyleInterface=null,q(()=>{this.ensure()}),An.invalidCallback=N}ensure(){this.customStyleInterface||(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface&&(this.customStyleInterface.transformCallback=e=>{An.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})}))}prepareTemplate(e,t){this.ensure(),mn[t]=e;let a=An.transformTemplate(e,t);e._styleAst=a}flushCustomStyles(){if(this.ensure(),!!this.customStyleInterface){let e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(let t=0;t<e.length;t++){let a=e[t],n=this.customStyleInterface.getStyleForCustomStyle(a);n&&An.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}}styleSubtree(e,t){if(this.ensure(),t&&k(e,t),e.shadowRoot){this.styleElement(e);let t=e.shadowRoot.children||e.shadowRoot.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}else{let t=e.children||e.childNodes;for(let e=0;e<t.length;e++)this.styleSubtree(t[e])}}styleElement(e){this.ensure();let{is:t}=R(e),a=mn[t];if(a&&!B(a)){F(a)||(this.prepareTemplate(a,t),V(a));let n=e.shadowRoot;if(n){let e=n.querySelector("style");e&&(e.__cssRules=a._styleAst,e.textContent=y(a._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){const e=new In;let t=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(t,a){e.flushCustomStyles(),e.prepareTemplate(t,a)},styleSubtree(t,a){e.flushCustomStyles(),e.styleSubtree(t,a)},styleElement(t){e.flushCustomStyles(),e.styleElement(t)},styleDocument(t){e.flushCustomStyles(),e.styleDocument(t)},getComputedStyleValue(e,t){return D(e,t)},nativeCss:za,nativeShadow:Ha},t&&(window.ShadyCSS.CustomStyleInterface=t)}window.ShadyCSS.ApplyShim=An,window.JSCompiler_renameProperty=function(e){return e};let xn=/(url\()([^)]*)(\))/g,Rn=/(^\/)|(^#)|(^[\w-\d]*:)/,wn,kn;e.$resolveUrl={resolveCss:U,resolveUrl:K,pathFromUrl:Y};const Dn=!window.ShadyDOM;e.useShadow=Dn;const On=!(window.ShadyCSS&&!window.ShadyCSS.nativeCss);e.useNativeCSSProperties=On;const Nn=!window.customElements.polyfillWrapFlushCallback;e.useNativeCustomElements=Nn;let Ln=Y(document.baseURI||window.location.href);e.rootPath=Ln;const Mn=function(t){e.rootPath=Ln=t};e.setRootPath=Mn;let Bn;e.sanitizeDOMValue=Bn;const $n=function(t){e.sanitizeDOMValue=Bn=t};e.setSanitizeDOMValue=$n;let Fn=!1;e.passiveTouchGestures=Fn;const Hn=function(t){e.passiveTouchGestures=Fn=t};e.setPassiveTouchGestures=Hn;var Vn={useShadow:Dn,useNativeCSSProperties:On,useNativeCustomElements:Nn,get rootPath(){return Ln},setRootPath:Mn,get sanitizeDOMValue(){return Bn},setSanitizeDOMValue:$n,get passiveTouchGestures(){return Fn},setPassiveTouchGestures:Hn};e.$settings=Vn;let zn=0;j.prototype.__mixinApplications,j.prototype.__mixinSet;const qn=function(e){function t(t){let r=t.__mixinSet;if(r&&r[n])return t;let i=a,o=i.get(t);o||(o=e(t),i.set(t,o));let s=Object.create(o.__mixinSet||r||null);return s[n]=!0,o.__mixinSet=s,o}let a=e.__mixinApplications;a||(a=new WeakMap,e.__mixinApplications=a);let n=zn++;return t};e.dedupingMixin=qn;e.$mixin={dedupingMixin:qn};e.$styleGather={stylesFromModules:X,stylesFromModule:Q,stylesFromTemplate:J,stylesFromModuleImports:Z,_stylesFromModuleImports:ee,cssFromModules:te,cssFromModule:ae,cssFromTemplate:ne,cssFromModuleImports:re,_cssFromModuleImports:ie};let Kn={},Un={};class Yn extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){let a=oe(e);return a&&t?a.querySelector(t):a}return null}attributeChangedCallback(e,t,a){t!==a&&this.register()}get assetpath(){if(!this.__assetpath){const e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=K(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Y(t)}return this.__assetpath}register(e){e=e||this.id,e&&(this.id=e,Kn[e]=this,Un[e.toLowerCase()]=this,se(this))}}e.DomModule=Yn,Yn.prototype.modules=Kn,customElements.define("dom-module",Yn);e.$domModule={DomModule:Yn};const jn=de;e.isDeep=jn;e.$path={isPath:de,root:le,isAncestor:pe,isDescendant:_e,translate:ce,matches:ue,normalize:he,split:me,get:ye,set:ge,isDeep:jn};const Gn={},Wn=/-[a-z]/g,Xn=/([A-Z])/g;var Qn={dashToCamelCase:fe,camelToDashCase:ve};e.$caseMap=Qn;let Jn=0,Zn=0,er=[],tr=0,ar=document.createTextNode("");new window.MutationObserver(function(){const e=er.length;for(let t=0,a;t<e;t++)if(a=er[t],a)try{a()}catch(t){setTimeout(()=>{throw t})}er.splice(0,e),Zn+=e}).observe(ar,{characterData:!0});const nr={after(e){return{run(t){return window.setTimeout(t,e)},cancel(e){window.clearTimeout(e)}}},run(e,t){return window.setTimeout(e,t)},cancel(e){window.clearTimeout(e)}};e.timeOut=nr;const rr={run(e){return window.requestAnimationFrame(e)},cancel(e){window.cancelAnimationFrame(e)}};e.animationFrame=rr;const ir={run(e){return window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16)},cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}};e.idlePeriod=ir;const or={run(e){return ar.textContent=tr++,er.push(e),Jn++},cancel(e){const t=e-Zn;if(0<=t){if(!er[t])throw new Error("invalid async handle: "+e);er[t]=null}}};e.microTask=or;var sr={timeOut:nr,animationFrame:rr,idlePeriod:ir,microTask:or};e.$async=sr;const dr=qn(e=>{return class extends e{static createProperties(e){const t=this.prototype;for(let a in e)a in t||t._createPropertyAccessor(a)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){const t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(let e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t){let a=this.__data[e],n=this._shouldPropertyChange(e,t,a);return n&&(!this.__dataPending&&(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=a),this.__data[e]=t,this.__dataPending[e]=t),n}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,or.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){const e=this.__data,t=this.__dataPending,a=this.__dataOld;this._shouldPropertiesChange(e,t,a)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,a))}_shouldPropertiesChange(e,t){return!!t}_propertiesChanged(){}_shouldPropertyChange(e,t,a){return a!==t&&(a===a||t===t)}attributeChangedCallback(e,t,a){t!==a&&this._attributeToProperty(e,a),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,a)}_attributeToProperty(e,t,a){if(!this.__serializing){const n=this.__dataAttributes,r=n&&n[e]||e;this[r]=this._deserializeValue(t,a||this.constructor.typeForProperty(r))}}_propertyToAttribute(e,t,a){this.__serializing=!0,a=3>arguments.length?this[e]:a,this._valueToNodeAttribute(this,a,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,a){const n=this._serializeValue(t);n===void 0?e.removeAttribute(a):e.setAttribute(a,n)}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null==e?void 0:e.toString();}}_deserializeValue(e,t){return t===Boolean?null!==e:t===Number?+e:e}}});e.PropertiesChanged=dr;e.$propertiesChanged={PropertiesChanged:dr};let lr=Qn;const pr={};let _r=HTMLElement.prototype;for(;_r;){let e=Object.getOwnPropertyNames(_r);for(let t=0;t<e.length;t++)pr[e[t]]=!0;_r=Object.getPrototypeOf(_r)}const cr=qn(e=>{const t=dr(e);return class extends t{static createPropertiesForAttributes(){let e=this.observedAttributes;for(let t=0;t<e.length;t++)this.prototype._createPropertyAccessor(lr.dashToCamelCase(e[t]))}static attributeNameForProperty(e){return lr.camelToDashCase(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(let t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){const a=this;a.hasAttribute(e)||this._valueToNodeAttribute(a,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e);}}_deserializeValue(e,t){let a;switch(t){case Object:try{a=JSON.parse(e)}catch(t){a=e}break;case Array:try{a=JSON.parse(e)}catch(t){a=null,console.warn(`Polymer::Attributes: couldn't decode Array as JSON: ${e}`)}break;case Date:a=isNaN(e)?e+"":+e,a=new Date(a);break;default:a=super._deserializeValue(e,t);}return a}_definePropertyAccessor(e,t){be(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return!!(this.__dataPending&&e in this.__dataPending)}}});e.PropertyAccessors=cr;e.$propertyAccessors={PropertyAccessors:cr};const ur={"dom-if":!0,"dom-repeat":!0},hr=qn(e=>{return class extends e{static _parseTemplate(e,t){if(!e._templateInfo){let a=e._templateInfo={};a.nodeInfoList=[],a.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,a,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,a){return this._parseTemplateNode(e.content,t,a)}static _parseTemplateNode(e,t,a){let n=e,r;return"template"!=n.localName||n.hasAttribute("preserve-content")?"slot"===n.localName&&(t.hasInsertionPoint=!0):r=this._parseTemplateNestedTemplate(n,t,a)||r,n.firstChild&&(r=this._parseTemplateChildNodes(n,t,a)||r),n.hasAttributes&&n.hasAttributes()&&(r=this._parseTemplateNodeAttributes(n,t,a)||r),r}static _parseTemplateChildNodes(e,t,a){if("script"!==e.localName&&"style"!==e.localName)for(let r=e.firstChild,n=0,i;r;r=i){if("template"==r.localName&&(r=Se(r)),i=r.nextSibling,r.nodeType===Node.TEXT_NODE){for(let t=i;t&&t.nodeType===Node.TEXT_NODE;)r.textContent+=t.textContent,i=t.nextSibling,e.removeChild(t),t=i;if(t.stripWhiteSpace&&!r.textContent.trim()){e.removeChild(r);continue}}let o={parentIndex:n,parentInfo:a};this._parseTemplateNode(r,t,o)&&(o.infoIndex=t.nodeInfoList.push(o)-1),r.parentNode&&n++}}static _parseTemplateNestedTemplate(e,t,a){let n=this._parseTemplate(e,t),r=n.content=e.content.ownerDocument.createDocumentFragment();return r.appendChild(e.content),a.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,n){let r=!1,o=Array.from(e.attributes);for(let s=o.length-1,i;i=o[s];s--)r=this._parseTemplateNodeAttribute(e,t,n,i.name,i.value)||r;return r}static _parseTemplateNodeAttribute(e,t,a,n,r){return"on-"===n.slice(0,3)?(e.removeAttribute(n),a.events=a.events||[],a.events.push({name:n.slice(3),value:r}),!0):!("id"!==n)&&(a.id=r,!0)}static _contentForTemplate(e){let t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);let t=this.constructor._parseTemplate(e),a=t.nodeInfoList,n=t.content||e.content,r=document.importNode(n,!0);r.__noInsertionPoint=!t.hasInsertionPoint;let o=r.nodeList=Array(a.length);r.$={};for(let t=0,n=a.length,i,s;t<n&&(i=a[t]);t++)s=o[t]=Ce(r,i),Ee(this,r.$,s,i),Te(this,s,i),Pe(this,s,i);return r=r,r}_addMethodEventListenerToNode(e,t,a,n){n=n||e;let r=Ae(n,t,a);return this._addEventListenerToNode(e,t,r),r}_addEventListenerToNode(e,t,a){e.addEventListener(t,a)}_removeEventListenerFromNode(e,t,a){e.removeEventListener(t,a)}}});e.TemplateStamp=hr;e.$templateStamp={TemplateStamp:hr};const mr=Qn;let yr=0;const gr={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},fr=/[A-Z]/;let vr;const br=[],Sr="(?:[a-zA-Z_$][\\w.:$\\-*]*)",Cr="(?:("+Sr+"|"+"(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)"+"|"+("(?:"+"(?:'(?:[^'\\\\]|\\\\.)*')"+"|"+"(?:\"(?:[^\"\\\\]|\\\\.)*\")"+")")+")\\s*)",Er=new RegExp("(\\[\\[|{{)\\s*"+"(?:(!)\\s*)?"+("("+Sr+"\\s*"+("(?:\\(\\s*(?:"+("(?:"+Cr+"(?:,\\s*"+Cr+")*)")+"?)\\)\\s*)")+"?)")+"(?:]]|}})","g"),Pr=qn(e=>{const t=hr(cr(e));class a extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return gr}_initializeProperties(){super._initializeProperties(),Tr.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){let t=this[gr.READ_ONLY];for(let a in e)t&&t[a]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=e[a])}_addPropertyEffect(e,t,a){this._createPropertyAccessor(e,t==gr.READ_ONLY);let n=Ie(this,t)[e];n||(n=this[t][e]=[]),n.push(a)}_removePropertyEffect(e,t,a){let n=Ie(this,t)[e],r=n.indexOf(a);0<=r&&n.splice(r,1)}_hasPropertyEffect(e,t){let a=this[t];return!!(a&&a[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,gr.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,gr.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,gr.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,gr.COMPUTE)}_setPendingPropertyOrPath(e,t,a,n){if(n||le(Array.isArray(e)?e[0]:e)!==e){if(!n){let a=ye(this,e);if(e=ge(this,e,t),!e||!super._shouldPropertyChange(e,t,a))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,a))return He(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,a);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,a){(a!==e[t]||"object"==typeof a)&&(e[t]=a)}_setPendingProperty(e,t,a){let n=this.__dataHasPaths&&de(e),r=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,r[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),n?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(n||this[gr.NOTIFY]&&this[gr.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=a),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){let e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(let t=0,a;t<e.length;t++)a=e[t],a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(let a in e)!t&&this[gr.READ_ONLY]&&this[gr.READ_ONLY][a]||this._setPendingPropertyOrPath(a,e[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,a){let n=this.__dataHasPaths;this.__dataHasPaths=!1,$e(this,t,a,n);let r=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,a,n),this._flushClients(),xe(this,this[gr.REFLECT],t,a,n),xe(this,this[gr.OBSERVE],t,a,n),r&&De(this,r,t,a,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,a){this[gr.PROPAGATE]&&xe(this,this[gr.PROPAGATE],e,t,a);for(let n=this.__templateInfo;n;)xe(this,n.propertyEffects,e,t,a,n.nodeList),n=n.nextTemplateInfo}linkPaths(e,t){e=he(e),t=he(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=he(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){let a={path:""},n=ye(this,e,a);nt(this,n,a.path,t)}get(e,t){return ye(t||this,e)}set(e,t,a){a?ge(a,e,t):(!this[gr.READ_ONLY]||!this[gr.READ_ONLY][e])&&this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){let a={path:""},n=ye(this,e,a),r=n.length,i=n.push(...t);return t.length&&rt(this,n,a.path,r,t.length,[]),i}pop(e){let t={path:""},a=ye(this,e,t),n=!!a.length,r=a.pop();return n&&rt(this,a,t.path,a.length,0,[r]),r}splice(e,t,a,...n){var r=Math.floor;let i={path:""},o=ye(this,e,i);0>t?t=o.length-r(-t):t&&(t=r(t));let s;return s=2===arguments.length?o.splice(t):o.splice(t,a,...n),(n.length||s.length)&&rt(this,o,i.path,t,n.length,s),s}shift(e){let t={path:""},a=ye(this,e,t),n=!!a.length,r=a.shift();return n&&rt(this,a,t.path,0,0,[r]),r}unshift(e,...t){let a={path:""},n=ye(this,e,a),r=n.unshift(...t);return t.length&&rt(this,n,a.path,0,t.length,[]),r}notifyPath(e,t){let a;if(1==arguments.length){let n={path:""};t=ye(this,e,n),a=n.path}else a=Array.isArray(e)?he(e):e;this._setPendingPropertyOrPath(a,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){this._addPropertyEffect(e,gr.READ_ONLY),t&&(this["_set"+it(e)]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,a){let n={property:e,method:t,dynamicFn:!!a};this._addPropertyEffect(e,gr.OBSERVE,{fn:ke,info:n,trigger:{name:e}}),a&&this._addPropertyEffect(t,gr.OBSERVE,{fn:ke,info:n,trigger:{name:t}})}_createMethodObserver(e,t){let a=Ze(e);if(!a)throw new Error("Malformed observer expression '"+e+"'");Xe(this,a,gr.OBSERVE,Qe,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,gr.NOTIFY,{fn:Le,info:{eventName:mr.camelToDashCase(e)+"-changed",property:e}})}_createReflectedProperty(e){let t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+" because \"-\" is not a valid starting attribute name. Use a lowercase first letter for the property instead."):this._addPropertyEffect(e,gr.REFLECT,{fn:Be,info:{attrName:t}})}_createComputedProperty(e,t,a){let n=Ze(t);if(!n)throw new Error("Malformed computed expression '"+t+"'");Xe(this,n,gr.COMPUTE,Fe,e,a)}static addPropertyEffect(e,t,a){this.prototype._addPropertyEffect(e,t,a)}static createPropertyObserver(e,t,a){this.prototype._createPropertyObserver(e,t,a)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,a){this.prototype._createComputedProperty(e,t,a)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){let a=this.constructor._parseTemplate(e),n=this.__templateInfo==a;if(!n)for(let e in a.propertyEffects)this._createPropertyAccessor(e);if(t&&(a=Object.create(a),a.wasPreBound=n,!n&&this.__templateInfo)){let e=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=e.nextTemplateInfo=a,a.previousTemplateInfo=e,a}return this.__templateInfo=a}static _addTemplatePropertyEffect(e,t,a){let n=e.hostProps=e.hostProps||{};n[t]=!0;let r=e.propertyEffects=e.propertyEffects||{},i=r[t]=r[t]||[];i.push(a)}_stampTemplate(e){Tr.beginHosting(this);let t=super._stampTemplate(e);Tr.endHosting(this);let a=this._bindTemplate(e,!0);if(a.nodeList=t.nodeList,!a.wasPreBound){let e=a.childNodes=[];for(let a=t.firstChild;a;a=a.nextSibling)e.push(a)}return t.templateInfo=a,je(this,a),this.__dataReady&&xe(this,a.propertyEffects,this.__data,null,!1,a.nodeList),t}_removeBoundDom(e){let t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;let a=t.childNodes;for(let t=0,n;t<a.length;t++)n=a[t],n.parentNode.removeChild(n)}static _parseTemplateNode(e,t,a){let n=super._parseTemplateNode(e,t,a);if(e.nodeType===Node.TEXT_NODE){let r=this._parseBindings(e.textContent,t);r&&(e.textContent=Je(r)||" ",Ve(this,t,a,"text","textContent",r),n=!0)}return n}static _parseTemplateNodeAttribute(e,t,a,n,r){let i=this._parseBindings(r,t);if(i){let r=n,o="property";fr.test(n)?o="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),o="attribute");let s=Je(i);return s&&"attribute"==o&&e.setAttribute(n,s),"input"===e.localName&&"value"===r&&e.setAttribute(r,""),e.removeAttribute(r),"property"===o&&(n=fe(n)),Ve(this,t,a,o,n,i,s),!0}return super._parseTemplateNodeAttribute(e,t,a,n,r)}static _parseTemplateNestedTemplate(e,t,a){let n=super._parseTemplateNestedTemplate(e,t,a),r=a.templateInfo.hostProps;for(let n in r){Ve(this,t,a,"property","_host_"+n,[{mode:"{",source:n,dependencies:[n]}])}return n}static _parseBindings(e,t){let a=[],n=0,r;for(;null!==(r=Er.exec(e));){r.index>n&&a.push({literal:e.slice(n,r.index)});let i=r[1][0],o=!!r[2],s=r[3].trim(),d=!1,l="",p=-1;"{"==i&&0<(p=s.indexOf("::"))&&(l=s.substring(p+2),s=s.substring(0,p),d=!0);let _=Ze(s),c=[];if(_){let{args:e,methodName:a}=_;for(let t=0,a;t<e.length;t++)a=e[t],a.literal||c.push(a);let n=t.dynamicFns;(n&&n[a]||_.static)&&(c.push(a),_.dynamicFn=!0)}else c.push(s);a.push({source:s,mode:i,negate:o,customEvent:d,signature:_,dependencies:c,event:l}),n=Er.lastIndex}if(n&&n<e.length){let t=e.substring(n);t&&a.push({literal:t})}return a.length?a:null}static _evaluateBinding(e,t,a,n,r,i){let o;return o=t.signature?Qe(e,a,n,r,t.signature):a==t.source?i&&de(a)?ye(e,a):e.__data[a]:ye(e,t.source),t.negate&&(o=!o),o}}return vr=a,a});e.PropertyEffects=Pr;let Tr={stack:[],registerHost(e){if(this.stack.length){let t=this.stack[this.stack.length-1];t._enqueueClient(e)}},beginHosting(e){this.stack.push(e)},endHosting(e){let t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}};e.$propertyEffects={PropertyEffects:Pr};const Ar=qn(e=>{function t(e){const t=Object.getPrototypeOf(e);return t.prototype instanceof r?t:null}function a(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){let t=null;e.hasOwnProperty(JSCompiler_renameProperty("properties",e))&&e.properties&&(t=ot(e.properties)),e.__ownProperties=t}return e.__ownProperties}const n=dr(e);class r extends n{static get observedAttributes(){const e=this._properties;return e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){const e=t(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){const e=a(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){const e=t(this);this.__properties=Object.assign({},e&&e._properties,a(this))}return this.__properties}static typeForProperty(e){const t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return r});e.PropertiesMixin=Ar;e.$propertiesMixin={PropertiesMixin:Ar};const Ir=qn(t=>{function a(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;let t=e._properties;for(let a in t){let n=t[a];"value"in n&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[a]=n)}}return e.__propertyDefaults}function n(e){return e.hasOwnProperty(JSCompiler_renameProperty("__ownObservers",e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty("observers",e))?e.observers:null),e.__ownObservers}function r(e,t,a,n){a.computed&&(a.readOnly=!0),a.computed&&!e._hasReadOnlyEffect(t)&&e._createComputedProperty(t,a.computed,n),a.readOnly&&!e._hasReadOnlyEffect(t)&&e._createReadOnlyProperty(t,!a.computed),a.reflectToAttribute&&!e._hasReflectEffect(t)&&e._createReflectedProperty(t),a.notify&&!e._hasNotifyEffect(t)&&e._createNotifyingProperty(t),a.observer&&e._createPropertyObserver(t,a.observer,n[a.observer]),e._addPropertyToAttributeMap(t)}function i(e,t,a,n){const r=t.content.querySelectorAll("style"),o=J(t),i=Z(a),d=t.content.firstElementChild;for(let r=0,o;r<i.length;r++)o=i[r],o.textContent=e._processStyleText(o.textContent,n),t.content.insertBefore(o,d);let l=0;for(let d=0;d<o.length;d++){let t=o[d],a=r[l];a===t?l++:(t=t.cloneNode(!0),a.parentNode.insertBefore(t,a)),t.textContent=e._processStyleText(t.textContent,n)}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,a)}const o=Ar(Pr(t));class s extends o{static _finalizeClass(){super._finalizeClass(),this.hasOwnProperty(JSCompiler_renameProperty("is",this))&&this.is&&dt(this.prototype);const e=n(this);e&&this.createObservers(e,this._properties);let a=this.template;if(a)if("string"===typeof a){let e=document.createElement("template");e.innerHTML=a,a=e}else a=a.cloneNode(!0);this.prototype._template=a}static createProperties(e){for(let t in e)r(this.prototype,t,e[t],e)}static createObservers(e,t){const a=this.prototype;for(let n=0;n<e.length;n++)a._createMethodObserver(e[n],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=Yn&&Yn.import(this.is,"template")||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){const e=Yn&&Yn.import(this.is);this._importPath=e?e.assetpath:Object.getPrototypeOf(this.prototype).constructor.importPath}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){e.instanceCount=++xr,this.constructor.finalize();const t=this.constructor.importPath;this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=Ln,this.importPath=t;let n=a(this.constructor);if(n)for(let e in n){let t=n[e];if(!this.hasOwnProperty(e)){let a="function"==typeof t.value?t.value.call(this):t.value;this._hasAccessor(e)?this._setPendingProperty(e,a,!0):this[e]=a}}}static _processStyleText(e,t){return U(e,t)}static _finalizeTemplate(e){const t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;const a=this.importPath,n=a?K(a):"";i(this,t,e,n),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){if(this.attachShadow)return e?(this.shadowRoot||this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(e),this.shadowRoot):null;throw new Error("ShadowDOM not available. Polymer.Element can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=K(this.importPath)),K(e,t)}static _parseTemplateContent(e,t,a){return t.dynamicFns=t.dynamicFns||this._properties,super._parseTemplateContent(e,t,a)}}return s});e.ElementMixin=Ir;let xr=0;e.instanceCount=xr;const Rr=[];e.registrations=Rr;const wr=function(e){window.ShadyCSS&&window.ShadyCSS.styleDocument(e)};e.updateStyles=wr;var kr={ElementMixin:Ir,get instanceCount(){return xr},registrations:Rr,_regLog:st,register:dt,dumpRegistrations:lt,updateStyles:wr};e.$elementMixin=kr;class Dr{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,this._callback()})}cancel(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,a){return e instanceof Dr?e.cancel():e=new Dr,e.setConfig(t,a),e}}e.Debouncer=Dr;e.$debounce={Debouncer:Dr};let Or="string"===typeof document.head.style.touchAction,Nr=25,Lr=5,Mr=["mousedown","mousemove","mouseup","click"],Br=[0,1,4,2],$r=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(t){return!1}}(),Fr=!1;(function(){try{let e=Object.defineProperty({},"passive",{get(){Fr=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(t){}})();let Hr=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),Vr=function(){};Vr.prototype.reset,Vr.prototype.mousedown,Vr.prototype.mousemove,Vr.prototype.mouseup,Vr.prototype.touchstart,Vr.prototype.touchmove,Vr.prototype.touchend,Vr.prototype.click;const zr=[],qr={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0};let Kr=function(e){let t=e.sourceCapabilities;if((!t||t.firesTouchEvents)&&(e["__polymerGesturesHandled"]={skip:!0},"click"===e.type)){let t=!1,a=e.composedPath&&e.composedPath();if(a)for(let e=0;e<a.length;e++){if(a[e].nodeType===Node.ELEMENT_NODE)if("label"===a[e].localName)zr.push(a[e]);else if(ct(a[e])){let n=ut(a[e]);for(let e=0;e<n.length;e++)t=t||-1<zr.indexOf(n[e])}if(a[e]===Ur.mouse.target)return}if(t)return;e.preventDefault(),e.stopPropagation()}},Ur={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};document.addEventListener("touchend",function(t){Ur.mouse.mouseIgnoreJob||ht(!0);Ur.mouse.target=t.composedPath()[0],Ur.mouse.mouseIgnoreJob=Dr.debounce(Ur.mouse.mouseIgnoreJob,nr.after(2500),function(){ht(),Ur.mouse.target=null,Ur.mouse.mouseIgnoreJob=null})},!!Fr&&{passive:!0});const Yr={};e.gestures=Yr;const jr=[];e.recognizers=jr,xt({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){vt(this.info)},mousedown:function(a){if(!mt(a))return;let n=St(a),t=this;ft(this.info,function(a){mt(a)||(t._fire("up",n,a),vt(t.info))},function(a){mt(a)&&t._fire("up",n,a),vt(t.info)}),this._fire("down",n,a)},touchstart:function(t){this._fire("down",St(t),t.changedTouches[0],t)},touchend:function(t){this._fire("up",St(t),t.changedTouches[0],t)},_fire:function(e,t,a,n){kt(t,e,{x:a.clientX,y:a.clientY,sourceEvent:a,preventer:n,prevent:function(t){return Dt(t)}})}}),xt({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,vt(this.info)},hasMovedEnough:function(e,t){if(this.info.prevent)return!1;if(this.info.started)return!0;let a=Fa(this.info.x-e),n=Fa(this.info.y-t);return a>=Lr||n>=Lr},mousedown:function(a){if(!mt(a))return;let n=St(a),t=this,r=function(a){let e=a.clientX,r=a.clientY;t.hasMovedEnough(e,r)&&(t.info.state=t.info.started?"mouseup"===a.type?"end":"track":"start","start"===t.info.state&&Dt("tap"),t.info.addMove({x:e,y:r}),!mt(a)&&(t.info.state="end",vt(t.info)),t._fire(n,a),t.info.started=!0)};ft(this.info,r,function(a){t.info.started&&r(a),vt(t.info)}),this.info.x=a.clientX,this.info.y=a.clientY},touchstart:function(t){let e=t.changedTouches[0];this.info.x=e.clientX,this.info.y=e.clientY},touchmove:function(a){let e=St(a),t=a.changedTouches[0],n=t.clientX,r=t.clientY;this.hasMovedEnough(n,r)&&("start"===this.info.state&&Dt("tap"),this.info.addMove({x:n,y:r}),this._fire(e,t),this.info.state="track",this.info.started=!0)},touchend:function(a){let e=St(a),t=a.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:t.clientX,y:t.clientY}),this._fire(e,t,a))},_fire:function(e,t){let a=this.info.moves[this.info.moves.length-2],n=this.info.moves[this.info.moves.length-1],r=n.x-this.info.x,i=n.y-this.info.y,o=0,s;a&&(s=n.x-a.x,o=n.y-a.y),kt(e,"track",{state:this.info.state,x:t.clientX,y:t.clientY,dx:r,dy:i,ddx:s,ddy:o,sourceEvent:t,hover:function(){return bt(t.clientX,t.clientY)}})}}),xt({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},save:function(t){this.info.x=t.clientX,this.info.y=t.clientY},mousedown:function(t){mt(t)&&this.save(t)},click:function(t){mt(t)&&this.forward(t)},touchstart:function(t){this.save(t.changedTouches[0],t)},touchend:function(t){this.forward(t.changedTouches[0],t)},forward:function(a,e){let n=Fa(a.clientX-this.info.x),r=Fa(a.clientY-this.info.y),i=St(e||a);!i||i.disabled||(isNaN(n)||isNaN(r)||n<=Nr&&r<=Nr||yt(a))&&!this.info.prevent&&kt(i,"tap",{x:a.clientX,y:a.clientY,sourceEvent:a,preventer:e})}});const Gr=St;e.findOriginalTarget=Gr;const Wr=Pt;e.add=Wr;const Xr=Tt;e.remove=Xr;var Qr={gestures:Yr,recognizers:jr,deepTargetFind:bt,_findOriginalTarget:St,_handleNative:Ct,_handleTouchAction:Et,addListener:Pt,removeListener:Tt,_add:At,_remove:It,register:xt,_findRecognizerByEvent:Rt,setTouchAction:wt,_fire:kt,prevent:Dt,resetMouseCanceller:Ot,findOriginalTarget:Gr,add:Wr,remove:Xr};e.$gestures=Qr;const Jr=Qr,Zr=qn(e=>{return class extends e{_addEventListenerToNode(e,t,a){Jr.addListener(e,t,a)||super._addEventListenerToNode(e,t,a)}_removeEventListenerFromNode(e,t,a){Jr.removeListener(e,t,a)||super._removeEventListenerFromNode(e,t,a)}}});e.GestureEventListeners=Zr;e.$gestureEventListeners={GestureEventListeners:Zr};const ei=/:host\(:dir\((ltr|rtl)\)\)/g,ti=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,ai=[];let ni=null,ri="";const ii=qn(e=>{ni||(Nt(),ni=new MutationObserver(Mt),ni.observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));const t=cr(e);class a extends t{static _processStyleText(e,t){return e=super._processStyleText(e,t),e=this._replaceDirInCssText(e),e}static _replaceDirInCssText(e){let t=e;return t=t.replace(ei,":host([dir=\"$1\"])"),t=t.replace(ti,":host([dir=\"$2\"]) $1"),e!==t&&(this.__activateDir=!0),t}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(Bt(),ai.push(this),Lt(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){const e=ai.indexOf(this);-1<e&&ai.splice(e,1)}}}return a.__activateDir=!1,a});e.DirMixin=ii;e.$dirMixin={DirMixin:ii};const oi=function(e,t,a,n){let r=document.head.querySelector("link[href=\""+e+"\"][import-href]");r||(r=document.createElement("link"),r.rel="import",r.href=e,r.setAttribute("import-href","")),n&&r.setAttribute("async","");let i=function(){r.removeEventListener("load",o),r.removeEventListener("error",s)},o=function(e){i(),r.__dynamicImportLoaded=!0,t&&$t(()=>{t(e)})},s=function(e){i(),r.parentNode&&r.parentNode.removeChild(r),a&&$t(()=>{a(e)})};return r.addEventListener("load",o),r.addEventListener("error",s),null==r.parentNode?document.head.appendChild(r):r.__dynamicImportLoaded&&r.dispatchEvent(new Event("load")),r};e.importHref=oi;e.$importHref={importHref:oi};let si=!1,di=[],li=[];e.$renderStatus={beforeNextRender:Kt,afterNextRender:Ut,flush:qt},"interactive"===document.readyState||"complete"===document.readyState?Yt():window.addEventListener("DOMContentLoaded",Yt);e.$arraySplice={calculateSplices:Zt};class pi{static getFlattenedNodes(e){return ta(e)?(e=e,e.assignedNodes({flatten:!0})):Array.from(e.childNodes).map(e=>ta(e)?(e=e,e.assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){ta(this._target)?this._listenSlots([this._target]):this._target.children&&(this._listenSlots(this._target.children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){ta(this._target)?this._unlistenSlots([this._target]):this._target.children&&(this._unlistenSlots(this._target.children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,or.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(let t=0,a;t<e.length;t++)a=e[t],a.addedNodes&&this._listenSlots(a.addedNodes),a.removedNodes&&this._unlistenSlots(a.removedNodes)}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;let e={target:this._target,addedNodes:[],removedNodes:[]},t=this.constructor.getFlattenedNodes(this._target),a=Zt(t,this._effectiveNodes);for(let t=0,r;t<a.length&&(r=a[t]);t++)for(let t=0,a;t<r.removed.length&&(a=r.removed[t]);t++)e.removedNodes.push(a);for(let n=0,r;n<a.length&&(r=a[n]);n++)for(let a=r.index;a<r.index+r.addedCount;a++)e.addedNodes.push(t[a]);this._effectiveNodes=t;let n=!1;return(e.addedNodes.length||e.removedNodes.length)&&(n=!0,this.callback.call(this._target,e)),n}_listenSlots(e){for(let t=0,a;t<e.length;t++)a=e[t],ta(a)&&a.addEventListener("slotchange",this._boundSchedule)}_unlistenSlots(e){for(let t=0,a;t<e.length;t++)a=e[t],ta(a)&&a.removeEventListener("slotchange",this._boundSchedule)}}e.FlattenedNodesObserver=pi;e.$flattenedNodesObserver={FlattenedNodesObserver:pi};let _i=[];const ci=function(e){_i.push(e)};e.enqueueDebouncer=e.addDebouncer=ci;const ui=function(){let e,t;do e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=aa();while(e||t)};e.flush$1=e.flush=ui;e.$flush={enqueueDebouncer:ci,flush:ui};const hi=Element.prototype,p=hi.matches||hi.matchesSelector||hi.mozMatchesSelector||hi.msMatchesSelector||hi.oMatchesSelector||hi.webkitMatchesSelector,mi=function(e,t){return p.call(e,t)};e.matchesSelector=mi;class yi{constructor(e){this.node=e}observeNodes(e){return new pi(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(this.node.contains(e))return!0;let t=e,a=e.ownerDocument;for(;t&&t!==a&&t!==this.node;)t=t.parentNode||t.host;return t===this.node}getOwnerRoot(){return this.node.getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?this.node.assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){let e=[],t=this.node.assignedSlot;for(;t;)e.push(t),t=t.assignedSlot;return e}importNode(e,t){let a=this.node instanceof Document?this.node:this.node.ownerDocument;return a.importNode(e,t)}getEffectiveChildNodes(){return pi.getFlattenedNodes(this.node)}queryDistributedElements(e){let t=this.getEffectiveChildNodes(),a=[];for(let n=0,r=t.length,i;n<r&&(i=t[n]);n++)i.nodeType===Node.ELEMENT_NODE&&mi(i,e)&&a.push(i);return a}get activeElement(){let e=this.node;return e._activeElement===void 0?e.activeElement:e._activeElement}}e.DomApi=yi,na(yi.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),ra(yi.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),ia(yi.prototype,["textContent","innerHTML"]);class gi{constructor(e){this.event=e}get rootTarget(){return this.event.composedPath()[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}yi.prototype.cloneNode,yi.prototype.appendChild,yi.prototype.insertBefore,yi.prototype.removeChild,yi.prototype.replaceChild,yi.prototype.setAttribute,yi.prototype.removeAttribute,yi.prototype.querySelector,yi.prototype.querySelectorAll;const fi=function(e){if(e=e||document,!e.__domApi){let t;t=e instanceof Event?new gi(e):new yi(e),e.__domApi=t}return e.__domApi};e.dom=fi;e.$polymerDom={DomApi:yi,dom:fi,matchesSelector:mi,flush:ui,addDebouncer:ci};let vi=window.ShadyCSS;const bi=qn(e=>{const t=ii(Zr(Ir(e))),a={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers,this._applyListeners()}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,a){t!==a&&(super.attributeChangedCallback(e,t,a),this.attributeChanged(e,t,a))}attributeChanged(){}_initializeProperties(){let e=Object.getPrototypeOf(this);e.hasOwnProperty("__hasRegisterFinished")||(e.__hasRegisterFinished=!0,this._registered()),super._initializeProperties(),this.root=this,this.created()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,a){this._propertyToAttribute(e,t,a)}serializeValueToAttribute(e,t,a){this._valueToNodeAttribute(a||this,e,t)}extend(e,t){if(!(e&&t))return e||t;let a=Object.getOwnPropertyNames(t);for(let r=0,i,n;r<a.length&&(i=a[r]);r++)n=Object.getOwnPropertyDescriptor(t,i),n&&Object.defineProperty(e,i,n);return e}mixin(e,t){for(let a in t)e[a]=t[a];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){let t=this.constructor._contentForTemplate(e),a=document.importNode(t,!0);return a}fire(e,t,a){a=a||{},t=null===t||void 0===t?{}:t;let n=new Event(e,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:!!a.cancelable,composed:void 0===a.composed||a.composed});n.detail=t;let r=a.node||this;return r.dispatchEvent(n),n}listen(e,t,a){e=e||this;let n=this.__boundListeners||(this.__boundListeners=new WeakMap),r=n.get(e);r||(r={},n.set(e,r));let i=t+a;r[i]||(r[i]=this._addMethodEventListenerToNode(e,t,a,this))}unlisten(e,t,a){e=e||this;let n=this.__boundListeners&&this.__boundListeners.get(e),r=t+a,i=n&&n[r];i&&(this._removeEventListenerFromNode(e,t,i),n[r]=null)}setScrollDirection(e,t){wt(t||this,a[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){let e=this.getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){window.ShadyDOM&&this.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){const e=this,t=fi(e);return t.getEffectiveChildNodes()}queryDistributedElements(e){const t=this,a=fi(t);return a.queryDistributedElements(e)}getEffectiveChildren(){let e=this.getEffectiveChildNodes();return e.filter(function(e){return e.nodeType===Node.ELEMENT_NODE})}getEffectiveTextContent(){let e=this.getEffectiveChildNodes(),t=[];for(let a=0,n;n=e[a];a++)n.nodeType!==Node.COMMENT_NODE&&t.push(n.textContent);return t.join("")}queryEffectiveChildren(e){let t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){let t=this.root.querySelector(e||"slot");return t?fi(t).getDistributedNodes():[]}getContentChildren(e){let t=this.getContentChildNodes(e).filter(function(e){return e.nodeType===Node.ELEMENT_NODE});return t}isLightDescendant(e){const t=this;return t!==e&&t.contains(e)&&t.getRootNode()===e.getRootNode()}isLocalDescendant(e){return this.root===e.getRootNode()}scopeSubtree(){}getComputedStyleValue(e){return vi.getComputedStyleValue(this,e)}debounce(e,t,a){return this._debouncers=this._debouncers||{},this._debouncers[e]=Dr.debounce(this._debouncers[e],0<a?nr.after(a):or,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];return!!(t&&t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};let t=this._debouncers[e];t&&t.cancel()}async(e,t){return 0<t?nr.run(e.bind(this),t):~or.run(e.bind(this))}cancelAsync(e){0>e?or.cancel(~e):nr.cancel(e)}create(e,t){let a=document.createElement(e);if(t)if(a.setProperties)a.setProperties(t);else for(let e in t)a[e]=t[e];return a}importHref(e,t,a,n){let r=t?t.bind(this):null,i=a?a.bind(this):null;return oi(e,r,i,n)}elementMatches(e,t){return mi(t||this,e)}toggleAttribute(e,t,a){a=a||this,1==arguments.length&&(t=!a.hasAttribute(e)),t?a.setAttribute(e,""):a.removeAttribute(e)}toggleClass(e,t,a){a=a||this,1==arguments.length&&(t=!a.classList.contains(e)),t?a.classList.add(e):a.classList.remove(e)}transform(e,t){t=t||this,t.style.webkitTransform=e,t.style.transform=e}translate3d(e,t,a,n){n=n||this,this.transform("translate3d("+e+","+t+","+a+")",n)}arrayDelete(e,t){let a;if(!Array.isArray(e)){let n=ye(this,e);if(a=n.indexOf(t),0<=a)return this.splice(e,a,1)}else if(a=e.indexOf(t),0<=a)return e.splice(a,1);return null}_logger(e,t){Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),"log"===e||"warn"===e||"error"===e?console[e](...t):void 0}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return n.prototype.is="",n});e.LegacyElementMixin=bi;e.$legacyElementMixin={LegacyElementMixin:bi};let Si={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0};const Ci=function(e){e||console.warn("Polymer.Class requires `info` argument");let t=la(e,e.behaviors?oa(e.behaviors,HTMLElement):bi(HTMLElement));return t.is=e.is,t};e.Class=Ci;e.$class={Class:Ci,mixinBehaviors:oa};const Ei=function(e){let t;return t="function"===typeof e?e:Ci(e),customElements.define(t.is,t),t};e.Polymer=Ei;e.$polymerFn={Polymer:Ei};const Pi=qn(e=>{return class extends e{_shouldPropertyChange(e,t,a){return pa(this,e,t,a,!0)}}});e.MutableData=Pi;const Ti=qn(e=>{class t extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,a){return pa(this,e,t,a,this.mutableData)}}return t});e.OptionalMutableData=Ti,Pi._mutablePropertyChange=pa;e.$mutableData={MutableData:Pi,OptionalMutableData:Ti};let Ai=null;_a.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:_a,writable:!0}});const Ii=Pr(_a),xi=Pi(Ii),Ri=Pr(class{});class wi extends Ri{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);let t=this.children=[];for(let a=this.root.firstChild;a;a=a.nextSibling)t.push(a),a.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);let a=this.__templatizeOptions;(e&&a.instanceProps||!a.instanceProps)&&this._enableProperties()}_configureProperties(e){let t=this.__templatizeOptions;if(t.forwardHostProp)for(let e in this.__hostProps)this._setPendingProperty(e,this.__dataHost["_host_"+e]);for(let t in e)this._setPendingProperty(t,e[t])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,a){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,t=>{t.model=this,a(t)});else{let n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,a)}}_showHideChildren(e){let t=this.children;for(let a=0,r;a<t.length;a++){if(r=t[a],!!e!=!!r.__hideTemplateChildren__)if(r.nodeType===Node.TEXT_NODE)e?(r.__polymerTextContent__=r.textContent,r.textContent=""):r.textContent=r.__polymerTextContent__;else if("slot"!==r.localName)r.style&&(e?(r.__polymerDisplay__=r.style.display,r.style.display="none"):r.style.display=r.__polymerDisplay__);else if(e)r.__polymerReplaced__=document.createComment("hidden-slot"),r.parentNode.replaceChild(r.__polymerReplaced__,r);else{const e=r.__polymerReplaced__;e&&e.parentNode.replaceChild(r,e)}r.__hideTemplateChildren__=e,r._showHideChildren&&r._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,a){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=a:super._setUnmanagedPropertyToNode(e,t,a)}get parentModel(){let e=this.__parentModel;if(!e){let t;e=this;do e=e.__dataHost.__dataHost;while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(){return!0}}e.TemplateInstanceBase=wi,wi.prototype.__dataHost,wi.prototype.__templatizeOptions,wi.prototype._methodHost,wi.prototype.__templatizeOwner,wi.prototype.__hostProps;const ki=Pi(wi);e.$templatize={templatize:ba,modelForElement:Sa,TemplateInstanceBase:wi};const Di={templatize(e,t){this._templatizerTemplate=e,this.ctor=ba(e,this,{mutableData:!!t,parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(e){return new this.ctor(e)},modelForElement(e){return Sa(this._templatizerTemplate,e)}};e.Templatizer=Di;e.$templatizerBehavior={Templatizer:Di};const Oi=Zr(Ti(Pr(HTMLElement)));class Ni extends Oi{static get observedAttributes(){return["mutable-data"]}constructor(){super(),this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){this.parentNode.insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(let e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){let e;if(!this.__children){if(e=e||this.querySelector("template"),!e){let t=new MutationObserver(()=>{if(e=this.querySelector("template"),e)t.disconnect(),this.render();else throw new Error("dom-bind requires a <template> child")});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(let e=this.root.firstChild;e;e=e.nextSibling)this.__children[this.__children.length]=e;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}}e.DomBind=Ni,customElements.define("dom-bind",Ni);e.$domBind={DomBind:Ni};class Li{constructor(e){this.value=e.toString()}toString(){return this.value}}const Mi=function(e,...t){const a=document.createElement("template");return a.innerHTML=t.reduce((t,a,n)=>t+Ea(a)+e[n+1],e[0]),a};e.html$2=e.html$1=e.html=Mi;const Bi=function(e,...t){return new Li(t.reduce((t,a,n)=>t+Ca(a)+e[n+1],e[0]))};e.htmlLiteral=Bi;e.$htmlTag={html:Mi,htmlLiteral:Bi};const $i=Ir(HTMLElement);e.PolymerElement=$i;e.$polymerElement={PolymerElement:$i,html:Mi};const Fi=Ti($i);class Hi extends Fi{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=Infinity,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(let e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;let e=this.parentNode;for(let t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){let e=this.template=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(this.querySelector("template"))e.disconnect(),this.__render();else throw new Error("dom-repeat requires a <template> child")});return e.observe(this,{childList:!0}),!1}let t={};t[this.as]=!0,t[this.indexAs]=!0,t[this.itemsIndexAs]=!0,this.__ctor=ba(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:t,forwardHostProp:function(e,t){let a=this.__instances;for(let n=0,r;n<a.length&&(r=a[n]);n++)r.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,a){if(ue(this.as,t)){let n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=a);let r=ce(this.as,"items."+n,t);this.notifyPath(r,a)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"===typeof e){let t=this.__getMethodHost();return function(){return t[e].apply(t,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){let e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Ba(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(!e)this.__debounceRender(this.__render,this.delay);else if(this.__observePaths){let t=this.__observePaths;for(let a=0;a<t.length;a++)0===e.indexOf(t[a])&&this.__debounceRender(this.__render,this.delay)}}__debounceRender(e,t=0){this.__renderDebouncer=Dr.debounce(this.__renderDebouncer,0<t?nr.after(t):or,e.bind(this)),ci(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),ui()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){let e=this.items||[],t=Array(e.length);for(let a=0;a<e.length;a++)t[a]=a;this.__filterFn&&(t=t.filter((t,a,n)=>this.__filterFn(e[t],a,n))),this.__sortFn&&t.sort((t,a)=>this.__sortFn(e[t],e[a]));const a=this.__itemsIdxToInstIdx={};let n=0;for(const r=$a(t.length,this.__limit);n<r;n++){let r=this.__instances[n],i=t[n],o=e[i];a[i]=n,r?(r._setPendingProperty(this.as,o),r._setPendingProperty(this.indexAs,n),r._setPendingProperty(this.itemsIndexAs,i),r._flushProperties()):this.__insertInstance(o,n,i)}for(let e=this.__instances.length-1;e>=n;e--)this.__detachAndRemoveInstance(e)}__detachInstance(e){let t=this.__instances[e];for(let a=0,n;a<t.children.length;a++)n=t.children[a],t.root.appendChild(n);return t}__attachInstance(e,t){let a=this.__instances[e];t.insertBefore(a.root,this)}__detachAndRemoveInstance(e){let t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,a){let n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=a,new this.__ctor(n)}__insertInstance(e,t,a){let n=this.__pool.pop();n?(n._setPendingProperty(this.as,e),n._setPendingProperty(this.indexAs,t),n._setPendingProperty(this.itemsIndexAs,a),n._flushProperties()):n=this.__stampInstance(e,t,a);let r=this.__instances[t+1],i=r?r.children[0]:this;return this.parentNode.insertBefore(n.root,i),this.__instances[t]=n,n}_showHideChildren(e){for(let t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){let a=e.slice(6),n=a.indexOf("."),r=0>n?a:a.substring(0,n);if(r==parseInt(r,10)){let e=0>n?"":a.substring(n+1);this.__handleObservedPaths(e);let i=this.__itemsIdxToInstIdx[r],o=this.__instances[i];if(o){let a=this.as+(e?"."+e:"");o._setPendingPropertyOrPath(a,t,!1,!0),o._flushProperties()}return!0}}itemForElement(e){let t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){let t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Sa(this.template,e)}}e.DomRepeat=Hi,customElements.define(Hi.is,Hi);e.$domRepeat={DomRepeat:Hi};class Vi extends $i{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null}__debounceRender(){this.__renderDebouncer=Dr.debounce(this.__renderDebouncer,or,()=>this.__render()),ci(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback(),this.parentNode&&(this.parentNode.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||this.parentNode.host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){ui()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){let e=this.parentNode;if(e){if(!this.__ctor){let e=this.querySelector("template");if(!e){let e=new MutationObserver(()=>{if(this.querySelector("template"))e.disconnect(),this.__render();else throw new Error("dom-if requires a <template> child")});return e.observe(this,{childList:!0}),!1}this.__ctor=ba(e,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[le(e)]=!0))}})}if(!this.__instance)this.__instance=new this.__ctor,e.insertBefore(this.__instance.root,this);else{this.__syncHostProperties();let t=this.__instance.children;if(t&&t.length){let a=this.previousSibling;if(a!==t[t.length-1])for(let a=0,r;a<t.length&&(r=t[a]);a++)e.insertBefore(r,this)}}}return!0}__syncHostProperties(){let e=this.__invalidProps;if(e){for(let t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){let e=this.__instance.children;if(e&&e.length){let t=e[0].parentNode;for(let a=0,r;a<e.length&&(r=e[a]);a++)t.removeChild(r)}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){let e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}e.DomIf=Vi,customElements.define(Vi.is,Vi);e.$domIf={DomIf:Vi};let zi=qn(e=>{let t=Ir(e);class a extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){let a=t.path;if("items"==a){let a=t.base||[],n=this.__lastItems,r=this.__lastMulti;if(e!==r&&this.clearSelection(),n){let e=Zt(a,n);this.__applySplices(e)}this.__lastItems=a,this.__lastMulti=e}else if("items.splices"==t.path)this.__applySplices(t.value.indexSplices);else{let e=a.slice(6),t=parseInt(e,10);0>e.indexOf(".")&&e==t&&this.__deselectChangedIdx(t)}}__applySplices(e){let t=this.__selectedMap;for(let a=0,n;a<e.length;a++){n=e[a],t.forEach((e,a)=>{e<n.index||(e>=n.index+n.removed.length?t.set(a,e+n.addedCount-n.removed.length):t.set(a,-1))});for(let e=0,a;e<n.addedCount;e++)a=n.index+e,t.has(this.items[a])&&t.set(this.items[a],a)}this.__updateLinks();let a=0;t.forEach((e,n)=>{0>e?(this.multi?this.splice("selected",a,1):this.selected=this.selectedItem=null,t.delete(n)):a++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){let e=0;this.__selectedMap.forEach(t=>{0<=t&&this.linkPaths("items."+t,"selected."+e++)})}else this.__selectedMap.forEach(e=>{this.linkPaths("selected","items."+e),this.linkPaths("selectedItem","items."+e)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){let t=this.__selectedIndexForItemIndex(e);if(0<=t){let e=0;this.__selectedMap.forEach((a,n)=>{t==e++&&this.deselect(n)})}}__selectedIndexForItemIndex(e){let t=this.__dataLinkedPaths["items."+e];if(t)return parseInt(t.slice(9),10)}deselect(e){let t=this.__selectedMap.get(e);if(0<=t){this.__selectedMap.delete(e);let a;this.multi&&(a=this.__selectedIndexForItemIndex(t)),this.__updateLinks(),this.multi?this.splice("selected",a,1):this.selected=this.selectedItem=null}}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){let t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(!this.multi&&this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push("selected",t):this.selected=this.selectedItem=t)}}return a});e.ArraySelectorMixin=zi;let qi=zi($i);class Ki extends qi{static get is(){return"array-selector"}}e.ArraySelector=Ki,customElements.define(Ki.is,Ki);e.$arraySelector={ArraySelectorMixin:zi,ArraySelector:Ki},"use strict";const Ui=new Pn;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(){},styleSubtree(e,t){Ui.processStyles(),k(e,t)},styleElement(){Ui.processStyles()},styleDocument(e){Ui.processStyles(),k(document.body,e)},getComputedStyleValue(e,t){return D(e,t)},nativeCss:za,nativeShadow:Ha}),window.ShadyCSS.CustomStyleInterface=Ui;const Yi=window.ShadyCSS.CustomStyleInterface;class ji extends HTMLElement{constructor(){super(),this._style=null,Yi.addCustomStyle(this)}getStyle(){if(this._style)return this._style;const e=this.querySelector("style");if(!e)return null;this._style=e;const t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=te(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}e.CustomStyle=ji,window.customElements.define("custom-style",ji);e.$customStyle={CustomStyle:ji};let Gi;(()=>{Gi=Pi._mutablePropertyChange})();const Wi={_shouldPropertyChange(e,t,a){return Gi(this,e,t,a,!0)}};e.MutableDataBehavior=Wi;const Xi={properties:{mutableData:Boolean},_shouldPropertyChange(e,t,a){return Gi(this,e,t,a,this.mutableData)}};e.OptionalMutableDataBehavior=Xi;e.$mutableDataBehavior={MutableDataBehavior:Wi,OptionalMutableDataBehavior:Xi};const Qi=bi(HTMLElement).prototype;e.Base=Qi;e.$polymerLegacy={Base:Qi,html:Mi},Ei({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(!this.full&&"("!==e[0]&&(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}});const Ji={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):window.removeEventListener("resize",this._boundNotifyResize),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this),this._fireResize())},assignParentResizable:function(e){this._parentResizable=e},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);-1<t&&(this._interestedResizables.splice(t,1),this.unlisten(e,"iron-resize","_onDescendantIronResize"))},resizerShouldNotify:function(){return!0},_onDescendantIronResize:function(e){return this._notifyingDescendant?void e.stopPropagation():void(!Dn&&this._fireResize())},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=fi(e).rootTarget;t===this||(-1===this._interestedResizables.indexOf(t)&&(this._interestedResizables.push(t),this.listen(t,"iron-resize","_onDescendantIronResize")),t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),e()})}else this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable||(window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())}};e.IronResizableBehavior=Ji;e.$ironResizableBehavior={IronResizableBehavior:Ji};const Zi=[Ji,{listeners:{"app-reset-layout":"_appResetLayoutHandler","iron-resize":"resetLayout"},attached:function(){this.fire("app-reset-layout")},_appResetLayoutHandler:function(t){fi(t).path[0]===this||(this.resetLayout(),t.stopPropagation())},_updateLayoutStates:function(){console.error("unimplemented")},resetLayout:function(){var e=this,t=this._updateLayoutStates.bind(this);sr&&rr?(this._layoutDebouncer=Dr.debounce(this._layoutDebouncer,rr,t),ci(this._layoutDebouncer)):this.debounce("resetLayout",t),this._notifyDescendantResize()},_notifyLayoutChanged:function(){var e=this;requestAnimationFrame(function(){e.fire("app-reset-layout")})},_notifyDescendantResize:function(){this.isAttached&&this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this)}}];e.AppLayoutBehavior=Zi;e.$appLayoutBehavior={AppLayoutBehavior:Zi},Ei({_template:Mi`
    <style>
      :host {
        display: block;
        /**
         * Force app-drawer-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements.
         */
        position: relative;
        z-index: 0;
      }

      :host ::slotted([slot=drawer]) {
        z-index: 1;
      }

      :host([fullbleed]) {
        @apply --layout-fit;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
        height: 100%;
        transition: var(--app-drawer-layout-content-transition, none);
      }

      #contentContainer[drawer-position=left] {
        margin-left: var(--app-drawer-width, 256px);
      }

      #contentContainer[drawer-position=right] {
        margin-right: var(--app-drawer-width, 256px);
      }
    </style>

    <slot id="drawerSlot" name="drawer"></slot>

    <div id="contentContainer" drawer-position\$="[[_drawerPosition]]">
      <slot></slot>
    </div>

    <iron-media-query query="[[_computeMediaQuery(forceNarrow, responsiveWidth)]]" on-query-matches-changed="_onQueryMatchesChanged"></iron-media-query>
`,is:"app-drawer-layout",behaviors:[Zi],properties:{forceNarrow:{type:Boolean,value:!1},responsiveWidth:{type:String,value:"640px"},narrow:{type:Boolean,reflectToAttribute:!0,readOnly:!0,notify:!0},openedWhenNarrow:{type:Boolean,value:!1},_drawerPosition:{type:String}},listeners:{click:"_clickHandler"},observers:["_narrowChanged(narrow)"],get drawer(){return fi(this.$.drawerSlot).getDistributedNodes()[0]},attached:function(){var e=this.drawer;e&&e.setAttribute("no-transition","")},_clickHandler:function(t){var e=fi(t).localTarget;if(e&&e.hasAttribute("drawer-toggle")){var a=this.drawer;a&&!a.persistent&&a.toggle()}},_updateLayoutStates:function(){var e=this.drawer;this.isAttached&&e&&(this._drawerPosition=this.narrow?null:e.position,this._drawerNeedsReset&&(this.narrow?(e.opened=this.openedWhenNarrow,e.persistent=!1):e.opened=e.persistent=!0,e.hasAttribute("no-transition")&&Ut(this,function(){e.removeAttribute("no-transition")}),this._drawerNeedsReset=!1))},_narrowChanged:function(){this._drawerNeedsReset=!0,this.resetLayout()},_onQueryMatchesChanged:function(e){this._setNarrow(e.detail.value)},_computeMediaQuery:function(e,t){return e?"(min-width: 0px)":"(max-width: "+t+")"}});const eo=document.createElement("div");eo.setAttribute("style","display: none;"),eo.innerHTML=`<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style><custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`,document.head.appendChild(eo);var to=document.createElement("style");to.textContent="[hidden] { display: none !important; }",document.head.appendChild(to),Ei({_template:Mi`
    <style>
      :host {
        position: fixed;
        top: -120px;
        right: 0;
        bottom: -120px;
        left: 0;

        visibility: hidden;

        transition-property: visibility;
      }

      :host([opened]) {
        visibility: visible;
      }

      :host([persistent]) {
        width: var(--app-drawer-width, 256px);
      }

      :host([persistent][position=left]) {
        right: auto;
      }

      :host([persistent][position=right]) {
        left: auto;
      }

      #contentContainer {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;

        width: var(--app-drawer-width, 256px);
        padding: 120px 0;

        transition-property: -webkit-transform;
        transition-property: transform;
        -webkit-transform: translate3d(-100%, 0, 0);
        transform: translate3d(-100%, 0, 0);

        background-color: #FFF;

        @apply --app-drawer-content-container;
      }

      #contentContainer[persistent] {
        width: 100%;
      }

      #contentContainer[position=right] {
        right: 0;
        left: auto;

        -webkit-transform: translate3d(100%, 0, 0);
        transform: translate3d(100%, 0, 0);
      }

      #contentContainer[swipe-open]::after {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 100%;

        visibility: visible;

        width: 20px;

        content: '';
      }

      #contentContainer[swipe-open][position=right]::after {
        right: 100%;
        left: auto;
      }

      #contentContainer[opened] {
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }

      #scrim {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;

        transition-property: opacity;
        -webkit-transform: translateZ(0);
        transform:  translateZ(0);

        opacity: 0;
        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));
      }

      #scrim.visible {
        opacity: 1;
      }

      :host([no-transition]) #contentContainer {
        transition-property: none;
      }
    </style>

    <div id="scrim" on-click="close"></div>

    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari
    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->
    <div id="contentContainer" opened\$="[[opened]]" persistent\$="[[persistent]]" position\$="[[position]]" swipe-open\$="[[swipeOpen]]">
      <slot></slot>
    </div>
`,is:"app-drawer",properties:{opened:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},persistent:{type:Boolean,value:!1,reflectToAttribute:!0},transitionDuration:{type:Number,value:200},align:{type:String,value:"left"},position:{type:String,readOnly:!0,reflectToAttribute:!0},swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},noFocusTrap:{type:Boolean,value:!1},disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function(){Ut(this,function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this),this.addEventListener("keydown",this._tabKeydownHandler.bind(this)),this.listen(this,"track","_track"),this.setScrollDirection("y")}),this.fire("app-reset-layout")},detached:function(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},open:function(){this.opened=!0},close:function(){this.opened=!1},toggle:function(){this.opened=!this.opened},getWidth:function(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function(){switch(this.align){case"start":return void this._setPosition(this._isRTL()?"right":"left");case"end":return void this._setPosition(this._isRTL()?"left":"right");}this._setPosition(this.align)},_escKeydownHandler:function(e){e.keyCode===27&&(e.preventDefault(),this.close())},_track:function(e){if(!(this.persistent||this.disableSwipe))switch(e.preventDefault(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackMove(e);break;case"end":this._trackEnd(e);}},_trackStart:function(){this._drawerState=this._DRAWER_STATE.TRACKING;var e=this.$.contentContainer.getBoundingClientRect();this._savedWidth=e.width,this._translateOffset="left"===this.position?e.left:e.right-window.innerWidth,this._trackDetails=[],this._styleTransitionDuration(0),this.style.visibility="visible"},_trackMove:function(e){this._translateDrawer(e.detail.dx+this._translateOffset),this._trackDetails.push({dx:e.detail.dx,timeStamp:Date.now()})},_trackEnd:function(e){var t=e.detail.dx+this._translateOffset,a=this.getWidth(),n="left"===this.position,r=n?0<=t||t<=-a:0>=t||t>=a;if(!r){var i=this._trackDetails;if(this._trackDetails=null,this._flingDrawer(e,i),this._drawerState===this._DRAWER_STATE.FLINGING)return}var o=a/2;e.detail.dx<-o?this.opened="right"===this.position:e.detail.dx>o&&(this.opened="left"===this.position),r?this.debounce("_resetDrawerState",this._resetDrawerState):this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration),this._styleTransitionDuration(this.transitionDuration),this._resetDrawerTranslate(),this.style.visibility=""},_calculateVelocity:function(e,t){for(var a=Date.now(),n=0,r=t.length-1,i;n<=r;){var o=n+r>>1,s=t[o];s.timeStamp>=a-100?(i=s,r=o-1):n=o+1}if(i){var d=e.detail.dx-i.dx,l=a-i.timeStamp||1;return d/l}return 0},_flingDrawer:function(e,a){var n=this._calculateVelocity(e,a);if(!(Fa(n)<this._MIN_FLING_THRESHOLD)){this._drawerState=this._DRAWER_STATE.FLINGING;var r=e.detail.dx+this._translateOffset,i=this.getWidth(),o="left"===this.position,s=0<n,d;d=!s&&o?-(r+i):s&&!o?i-r:-r,s?(n=Ma(n,this._MIN_TRANSITION_VELOCITY),this.opened="left"===this.position):(n=$a(n,-this._MIN_TRANSITION_VELOCITY),this.opened="right"===this.position);var l=this._FLING_INITIAL_SLOPE*d/n;this._styleTransitionDuration(l),this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION),this._resetDrawerTranslate(),this.debounce("_resetDrawerState",this._resetDrawerState,l)}},_styleTransitionDuration:function(e){this.style.transitionDuration=e+"ms",this.$.contentContainer.style.transitionDuration=e+"ms",this.$.scrim.style.transitionDuration=e+"ms"},_styleTransitionTimingFunction:function(e){this.$.contentContainer.style.transitionTimingFunction=e,this.$.scrim.style.transitionTimingFunction=e},_translateDrawer:function(e){var t=this.getWidth();"left"===this.position?(e=Ma(-t,$a(e,0)),this.$.scrim.style.opacity=1+e/t):(e=Ma(0,$a(e,t)),this.$.scrim.style.opacity=1-e/t),this.translate3d(e+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function(){this.$.scrim.style.opacity="",this.transform("",this.$.contentContainer)},_resetDrawerState:function(){var e=this._drawerState;e===this._DRAWER_STATE.FLINGING&&(this._styleTransitionDuration(this.transitionDuration),this._styleTransitionTimingFunction(""),this.style.visibility=""),this._savedWidth=null,this._drawerState=this.opened?this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED:this._DRAWER_STATE.CLOSED,e!==this._drawerState&&(this._drawerState===this._DRAWER_STATE.OPENED?(this._setKeyboardFocusTrap(),document.addEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow="hidden"):(document.removeEventListener("keydown",this._boundEscKeydownHandler),document.body.style.overflow=""),e!==this._DRAWER_STATE.INIT&&this.fire("app-drawer-transitioned"))},resetLayout:function(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function(){if(!this.noFocusTrap){var e=fi(this).querySelectorAll("a[href]:not([tabindex=\"-1\"]),area[href]:not([tabindex=\"-1\"]),input:not([disabled]):not([tabindex=\"-1\"]),select:not([disabled]):not([tabindex=\"-1\"]),textarea:not([disabled]):not([tabindex=\"-1\"]),button:not([disabled]):not([tabindex=\"-1\"]),iframe:not([tabindex=\"-1\"]),[tabindex]:not([tabindex=\"-1\"]),[contentEditable=true]:not([tabindex=\"-1\"])");0<e.length?(this._firstTabStop=e[0],this._lastTabStop=e[e.length-1]):(this._firstTabStop=null,this._lastTabStop=null);var t=this.getAttribute("tabindex");t&&-1<parseInt(t,10)?this.focus():this._firstTabStop&&this._firstTabStop.focus()}},_tabKeydownHandler:function(e){if(!this.noFocusTrap){this._drawerState===this._DRAWER_STATE.OPENED&&9===e.keyCode&&(e.shiftKey?this._firstTabStop&&fi(e).localTarget===this._firstTabStop&&(e.preventDefault(),this._lastTabStop.focus()):this._lastTabStop&&fi(e).localTarget===this._lastTabStop&&(e.preventDefault(),this._firstTabStop.focus()))}},_openedPersistentChanged:function(e,t){this.toggleClass("visible",e&&!t,this.$.scrim),this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5}}),Ei({_template:Mi`
    <style>
      :host {
        display: block;
        /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
        position: relative;
        z-index: 0;
      }

      #wrapper ::slotted([slot=header]) {
        @apply --layout-fixed-top;
        z-index: 1;
      }

      #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) {
        height: 100%;
      }

      :host([has-scrolling-region]) #wrapper ::slotted([slot=header]) {
        position: absolute;
      }

      :host([has-scrolling-region]) #wrapper.initializing ::slotted([slot=header]) {
        position: relative;
      }

      :host([has-scrolling-region]) #wrapper #contentContainer {
        @apply --layout-fit;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }

      :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
        position: relative;
      }

      :host([fullbleed]) {
        @apply --layout-vertical;
        @apply --layout-fit;
      }

      :host([fullbleed]) #wrapper,
      :host([fullbleed]) #wrapper #contentContainer {
        @apply --layout-vertical;
        @apply --layout-flex;
      }

      #contentContainer {
        /* Create a stacking context here so that all children appear below the header. */
        position: relative;
        z-index: 0;
      }

      @media print {
        :host([has-scrolling-region]) #wrapper #contentContainer {
          overflow-y: visible;
        }
      }

    </style>

    <div id="wrapper" class="initializing">
      <slot id="headerSlot" name="header"></slot>

      <div id="contentContainer">
        <slot></slot>
      </div>
    </div>
`,is:"app-header-layout",behaviors:[Zi],properties:{hasScrollingRegion:{type:Boolean,value:!1,reflectToAttribute:!0}},observers:["resetLayout(isAttached, hasScrollingRegion)"],get header(){return fi(this.$.headerSlot).getDistributedNodes()[0]},_updateLayoutStates:function(){var e=this.header;if(this.isAttached&&e){this.$.wrapper.classList.remove("initializing"),e.scrollTarget=this.hasScrollingRegion?this.$.contentContainer:this.ownerDocument.documentElement;var t=e.offsetHeight;this.hasScrollingRegion?(e.style.left="",e.style.right=""):requestAnimationFrame(function(){var t=this.getBoundingClientRect(),a=document.documentElement.clientWidth-t.right;e.style.left=t.left+"px",e.style.right=a+"px"}.bind(this));var a=this.$.contentContainer.style;e.fixed&&!e.condenses&&this.hasScrollingRegion?(a.marginTop=t+"px",a.paddingTop=""):(a.paddingTop=t+"px",a.marginTop="")}}});const ao={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),!!t)if("document"===e)this.scrollTarget=this._doc;else if("string"===typeof e){var a=this.domHost;this.scrollTarget=a&&a.$?a.$[e]:fi(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){this.scrollTarget===this._doc?window.scrollTo(e,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var a=t===this._doc?window:t;e?!this._boundScrollHandler&&(this._boundScrollHandler=this._scrollHandler.bind(this),a.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(a.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}};e.IronScrollTargetBehavior=ao;e.$ironScrollTargetBehavior={IronScrollTargetBehavior:ao};const no={};e._scrollEffects=no;let ro=null;e._scrollTimer=ro;const io=function(e,t,a,n){return e/=n,-a*e*(e-2)+t};e.scrollTimingFunction=io;const oo=function(e,t){if(null!=no[e])throw new Error("effect `"+e+"` is already registered.");no[e]=t};e.registerEffect=oo;const so=function(e,t){for(var a=[t],n=[];0<a.length;){var r=a.shift();n.push.apply(n,r.querySelectorAll(e));for(var o=0;r.children[o];o++)r.children[o].shadowRoot&&a.push(r.children[o].shadowRoot)}return n};e.queryAllRoot=so;const lo=function(t){t=t||{};var a=document.documentElement,n=t.target||a,r="scrollBehavior"in n.style&&n.scroll,i=t.top||0,o=t.left||0,s=n===a?window.scrollTo:function(e,t){n.scrollLeft=e,n.scrollTop=t};if("smooth"===t.behavior){if(r)n.scroll(t);else{var d=io,l=Date.now(),p=n===a?window.pageYOffset:n.scrollTop,_=n===a?window.pageXOffset:n.scrollLeft,c=300,u=function e(){var t=Date.now(),a=t-l;a<c?(s(d(a,_,o-_,c),d(a,p,i-p,c)),requestAnimationFrame(e)):s(o,i)}.bind(this);u()}}else if("silent"===t.behavior){var h=so("app-header",document.body);h.forEach(function(e){e.setAttribute("silent-scroll","")}),ro&&window.cancelAnimationFrame(ro),e._scrollTimer=ro=window.requestAnimationFrame(function(){h.forEach(function(e){e.removeAttribute("silent-scroll")}),e._scrollTimer=ro=null}),s(o,i)}else s(o,i)};e.scroll=lo;var po={_scrollEffects:no,get _scrollTimer(){return ro},scrollTimingFunction:io,registerEffect:oo,queryAllRoot:so,scroll:lo};e.$helpers=po;const _o=[ao,{properties:{effects:{type:String},effectsConfig:{type:Object,value:function(){return{}}},disabled:{type:Boolean,reflectToAttribute:!0,value:!1},threshold:{type:Number,value:0},thresholdTriggered:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0}},observers:["_effectsChanged(effects, effectsConfig, isAttached)"],_updateScrollState:function(){},isOnScreen:function(){return!1},isContentBelow:function(){return!1},_effectsRunFn:null,_effects:null,get _clampedScrollTop(){return Ma(0,this._scrollTop)},detached:function(){this._tearDownEffects()},createEffect:function(e,t){var a=no[e];if(!a)throw new ReferenceError(this._getUndefinedMsg(e));var n=this._boundEffect(a,t||{});return n.setUp(),n},_effectsChanged:function(e,t,a){this._tearDownEffects();e&&a&&(e.split(" ").forEach(function(e){var a;""!==e&&((a=no[e])?this._effects.push(this._boundEffect(a,t[e])):console.warn(this._getUndefinedMsg(e)))},this),this._setUpEffect())},_layoutIfDirty:function(){return this.offsetWidth},_boundEffect:function(e,t){t=t||{};var a=parseFloat(t.startsAt||0),n=parseFloat(t.endsAt||1),r=function(){},i=0===a&&1===n?e.run:function(t,r){e.run.call(this,Ma(0,(t-a)/(n-a)),r)};return{setUp:e.setUp?e.setUp.bind(this,t):r,run:e.run?i.bind(this):r,tearDown:e.tearDown?e.tearDown.bind(this):r}},_setUpEffect:function(){this.isAttached&&this._effects&&(this._effectsRunFn=[],this._effects.forEach(function(e){!1!==e.setUp()&&this._effectsRunFn.push(e.run)},this))},_tearDownEffects:function(){this._effects&&this._effects.forEach(function(e){e.tearDown()}),this._effectsRunFn=[],this._effects=[]},_runEffects:function(e,t){this._effectsRunFn&&this._effectsRunFn.forEach(function(a){a(e,t)})},_scrollHandler:function(){if(!this.disabled){var e=this._clampedScrollTop;this._updateScrollState(e),0<this.threshold&&this._setThresholdTriggered(e>=this.threshold)}},_getDOMRef:function(e){console.warn("_getDOMRef","`"+e+"` is undefined")},_getUndefinedMsg:function(e){return"Scroll effect `"+e+"` is undefined. Did you forget to import app-layout/app-scroll-effects/effects/"+e+".html ?"}}];e.AppScrollEffectsBehavior=_o;e.$appScrollEffectsBehavior={AppScrollEffectsBehavior:_o},Ei({_template:Mi`
    <style>
      :host {
        position: relative;
        display: block;
        transition-timing-function: linear;
        transition-property: -webkit-transform;
        transition-property: transform;
      }

      :host::before {
        position: absolute;
        right: 0px;
        bottom: -5px;
        left: 0px;
        width: 100%;
        height: 5px;
        content: "";
        transition: opacity 0.4s;
        pointer-events: none;
        opacity: 0;
        box-shadow: inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4);
        will-change: opacity;
        @apply --app-header-shadow;
      }

      :host([shadow])::before {
        opacity: 1;
      }

      #background {
        @apply --layout-fit;
        overflow: hidden;
      }

      #backgroundFrontLayer,
      #backgroundRearLayer {
        @apply --layout-fit;
        height: 100%;
        pointer-events: none;
        background-size: cover;
      }

      #backgroundFrontLayer {
        @apply --app-header-background-front-layer;
      }

      #backgroundRearLayer {
        opacity: 0;
        @apply --app-header-background-rear-layer;
      }

      #contentContainer {
        position: relative;
        width: 100%;
        height: 100%;
      }

      :host([disabled]),
      :host([disabled])::after,
      :host([disabled]) #backgroundFrontLayer,
      :host([disabled]) #backgroundRearLayer,
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]),
      :host([silent-scroll])::after,
      :host([silent-scroll]) #backgroundFrontLayer,
      :host([silent-scroll]) #backgroundRearLayer {
        transition: none !important;
      }

      :host([disabled]) ::slotted(app-toolbar:first-of-type),
      :host([disabled]) ::slotted([sticky]),
      /* Silent scrolling should not run CSS transitions */
      :host([silent-scroll]) ::slotted(app-toolbar:first-of-type),
      :host([silent-scroll]) ::slotted([sticky]) {
        transition: none !important;
      }

    </style>
    <div id="contentContainer">
      <slot id="slot"></slot>
    </div>
`,is:"app-header",behaviors:[_o,Zi],properties:{condenses:{type:Boolean,value:!1},fixed:{type:Boolean,value:!1},reveals:{type:Boolean,value:!1},shadow:{type:Boolean,reflectToAttribute:!0,value:!1}},observers:["_configChanged(isAttached, condenses, fixed)"],_height:0,_dHeight:0,_stickyElTop:0,_stickyElRef:null,_top:0,_progress:0,_wasScrollingDown:!1,_initScrollTop:0,_initTimestamp:0,_lastTimestamp:0,_lastScrollTop:0,get _maxHeaderTop(){return this.fixed?this._dHeight:this._height+5},get _stickyEl(){if(this._stickyElRef)return this._stickyElRef;for(var e=fi(this.$.slot).getDistributedNodes(),t=0,a;a=e[t];t++)if(a.nodeType===Node.ELEMENT_NODE)if(a.hasAttribute("sticky")){this._stickyElRef=a;break}else this._stickyElRef||(this._stickyElRef=a);return this._stickyElRef},_configChanged:function(){this.resetLayout(),this._notifyLayoutChanged()},_updateLayoutStates:function(){if(0!==this.offsetWidth||0!==this.offsetHeight){var e=this._clampedScrollTop,t=0===this._height||0===e,a=this.disabled;this._height=this.offsetHeight,this._stickyElRef=null,this.disabled=!0,t||this._updateScrollState(0,!0),this._dHeight=this._mayMove()?this._stickyEl?this._height-this._stickyEl.offsetHeight:0:0,this._stickyElTop=this._stickyEl?this._stickyEl.offsetTop:0,this._setUpEffect(),t?this._updateScrollState(e,!0):(this._updateScrollState(this._lastScrollTop,!0),this._layoutIfDirty()),this.disabled=a}},_updateScrollState:function(e,t){if(0!==this._height){var a=0,n=0,r=this._top,i=this._lastScrollTop,o=this._maxHeaderTop,s=e-this._lastScrollTop,d=Fa(s),l=e>this._lastScrollTop,p=performance.now();if(this._mayMove()&&(n=this._clamp(this.reveals?r+s:e,0,o)),e>=this._dHeight&&(n=this.condenses&&!this.fixed?Ma(this._dHeight,n):n,this.style.transitionDuration="0ms"),this.reveals&&!this.disabled&&100>d&&((300<p-this._initTimestamp||this._wasScrollingDown!==l)&&(this._initScrollTop=e,this._initTimestamp=p),e>=o))if(30<Fa(this._initScrollTop-e)||10<d){l&&e>=o?n=o:!l&&e>=this._dHeight&&(n=this.condenses&&!this.fixed?this._dHeight:0);var _=s/(p-this._lastTimestamp);this.style.transitionDuration=this._clamp((n-r)/_,0,300)+"ms"}else n=this._top;a=0===this._dHeight?0<e?1:0:n/this._dHeight,t||(this._lastScrollTop=e,this._top=n,this._wasScrollingDown=l,this._lastTimestamp=p),(t||a!==this._progress||r!==n||0===e)&&(this._progress=a,this._runEffects(a,n),this._transformHeader(n))}},_mayMove:function(){return this.condenses||!this.fixed},willCondense:function(){return 0<this._dHeight&&this.condenses},isOnScreen:function(){return 0!==this._height&&this._top<this._height},isContentBelow:function(){return 0===this._top?0<this._clampedScrollTop:0<=this._clampedScrollTop-this._maxHeaderTop},_transformHeader:function(e){this.translate3d(0,-e+"px",0),this._stickyEl&&this.translate3d(0,this.condenses&&e>=this._stickyElTop?$a(e,this._dHeight)-this._stickyElTop+"px":0,0,this._stickyEl)},_clamp:function(e,t,a){return $a(a,Ma(t,e))},_ensureBgContainers:function(){this._bgContainer||(this._bgContainer=document.createElement("div"),this._bgContainer.id="background",this._bgRear=document.createElement("div"),this._bgRear.id="backgroundRearLayer",this._bgContainer.appendChild(this._bgRear),this._bgFront=document.createElement("div"),this._bgFront.id="backgroundFrontLayer",this._bgContainer.appendChild(this._bgFront),fi(this.root).insertBefore(this._bgContainer,this.$.contentContainer))},_getDOMRef:function(e){return"backgroundFrontLayer"===e?(this._ensureBgContainers(),this._bgFront):"backgroundRearLayer"===e?(this._ensureBgContainers(),this._bgRear):"background"===e?(this._ensureBgContainers(),this._bgContainer):"mainTitle"===e?fi(this).querySelector("[main-title]"):"condensedTitle"===e?fi(this).querySelector("[condensed-title]"):null},getScrollState:function(){return{progress:this._progress,top:this._top}}}),Ei({_template:Mi`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,is:"app-toolbar"});var co,uo,ho,mo;Ei({is:"iron-location",properties:{path:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.pathname)}},query:{type:String,notify:!0,value:function(){return window.location.search.slice(1)}},hash:{type:String,notify:!0,value:function(){return window.decodeURIComponent(window.location.hash.slice(1))}},dwellTime:{type:Number,value:2e3},urlSpaceRegex:{type:String,value:""},encodeSpaceAsPlusInQuery:{type:Boolean,value:!1},_urlSpaceRegExp:{computed:"_makeRegExp(urlSpaceRegex)"},_lastChangedAt:{type:Number},_initialized:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["_updateUrl(path, query, hash)"],created:function(){this.__location=window.location},attached:function(){this.listen(window,"hashchange","_hashChanged"),this.listen(window,"location-changed","_urlChanged"),this.listen(window,"popstate","_urlChanged"),this.listen(document.body,"click","_globalOnClick"),this._lastChangedAt=window.performance.now()-(this.dwellTime-200),this._initialized=!0,this._urlChanged()},detached:function(){this.unlisten(window,"hashchange","_hashChanged"),this.unlisten(window,"location-changed","_urlChanged"),this.unlisten(window,"popstate","_urlChanged"),this.unlisten(document.body,"click","_globalOnClick"),this._initialized=!1},_hashChanged:function(){this.hash=window.decodeURIComponent(this.__location.hash.substring(1))},_urlChanged:function(){this._dontUpdateUrl=!0,this._hashChanged(),this.path=window.decodeURIComponent(this.__location.pathname),this.query=this.__location.search.substring(1),this._dontUpdateUrl=!1,this._updateUrl()},_getUrl:function(){var e=window.encodeURI(this.path).replace(/\#/g,"%23").replace(/\?/g,"%3F"),t="";this.query&&(t="?"+this.query.replace(/\#/g,"%23"),this.encodeSpaceAsPlusInQuery&&(t=t.replace(/\+/g,"%2B").replace(/ /g,"+").replace(/%20/g,"+")));var a="";return this.hash&&(a="#"+window.encodeURI(this.hash)),e+t+a},_updateUrl:function(){if(!this._dontUpdateUrl&&this._initialized&&(this.path!==window.decodeURIComponent(this.__location.pathname)||this.query!==this.__location.search.substring(1)||this.hash!==window.decodeURIComponent(this.__location.hash.substring(1)))){var e=this._getUrl(),t=Pa(e,this.__location.protocol+"//"+this.__location.host).href,a=window.performance.now(),n=this._lastChangedAt+this.dwellTime>a;this._lastChangedAt=a,n?window.history.replaceState({},"",t):window.history.pushState({},"",t),this.fire("location-changed",{},{node:window})}},_globalOnClick:function(e){if(!e.defaultPrevented){var t=this._getSameOriginLinkHref(e);t&&(e.preventDefault(),t===this.__location.href||(window.history.pushState({},"",t),this.fire("location-changed",{},{node:window})))}},_getSameOriginLinkHref:function(e){if(0!==e.button)return null;if(e.metaKey||e.ctrlKey)return null;for(var t=fi(e).path,a=null,n=0,r;n<t.length;n++)if(r=t[n],"A"===r.tagName&&r.href){a=r;break}if(!a)return null;if("_blank"===a.target)return null;if(("_top"===a.target||"_parent"===a.target)&&window.top!==window)return null;if(a.download)return null;var i=a.href,o;o=null==document.baseURI?Pa(i):Pa(i,document.baseURI);var s=this.__location.origin?this.__location.origin:this.__location.protocol+"//"+this.__location.host;var d;if(o.origin)d=o.origin;else{var l=o.host,p=o.port,_=o.protocol;("https:"===_&&"443"===p||"http:"===_&&"80"===p)&&(l=o.hostname),d=_+"//"+l}if(d!==s)return null;var c=o.pathname+o.search+o.hash;if("/"!==c[0]&&(c="/"+c),this._urlSpaceRegExp&&!this._urlSpaceRegExp.test(c))return null;var u=Pa(c,this.__location.href).href;return u},_makeRegExp:function(e){return RegExp(e)}}),Ei({is:"iron-query-params",properties:{paramsString:{type:String,notify:!0,observer:"paramsStringChanged"},paramsObject:{type:Object,notify:!0,value:function(){return{}}},_dontReact:{type:Boolean,value:!1}},hostAttributes:{hidden:!0},observers:["paramsObjectChanged(paramsObject.*)"],paramsStringChanged:function(){this._dontReact=!0,this.paramsObject=this._decodeParams(this.paramsString),this._dontReact=!1},paramsObjectChanged:function(){this._dontReact||(this.paramsString=this._encodeParams(this.paramsObject).replace(/%3F/g,"?").replace(/%2F/g,"/").replace(/'/g,"%27"))},_encodeParams:function(e){var t=[];for(var a in e){var n=e[a];""===n?t.push(encodeURIComponent(a)):n&&t.push(encodeURIComponent(a)+"="+encodeURIComponent(n.toString()))}return t.join("&")},_decodeParams:function(e){var t={};e=(e||"").replace(/\+/g,"%20");for(var a=e.split("&"),n=0,r;n<a.length;n++)r=a[n].split("="),r[0]&&(t[decodeURIComponent(r[0])]=decodeURIComponent(r[1]||""));return t}});const yo={properties:{route:{type:Object,notify:!0},queryParams:{type:Object,notify:!0},path:{type:String,notify:!0}},observers:["_locationChanged(path, queryParams)","_routeChanged(route.prefix, route.path)","_routeQueryParamsChanged(route.__queryParams)"],created:function(){this.linkPaths("route.__queryParams","queryParams"),this.linkPaths("queryParams","route.__queryParams")},_locationChanged:function(){this.route&&this.route.path===this.path&&this.queryParams===this.route.__queryParams||(this.route={prefix:"",path:this.path,__queryParams:this.queryParams})},_routeChanged:function(){this.route&&(this.path=this.route.prefix+this.route.path)},_routeQueryParamsChanged:function(e){this.route&&(this.queryParams=e)}};e.AppRouteConverterBehavior=yo;e.$appRouteConverterBehavior={AppRouteConverterBehavior:yo},Ei({_template:Mi`
    <iron-query-params params-string="{{__query}}" params-object="{{queryParams}}">
    </iron-query-params>
    <iron-location path="{{__path}}" query="{{__query}}" hash="{{__hash}}" url-space-regex="{{urlSpaceRegex}}">
    </iron-location>
`,is:"app-location",properties:{route:{type:Object,notify:!0},useHashAsPath:{type:Boolean,value:!1},urlSpaceRegex:{type:String,notify:!0},__queryParams:{type:Object},__path:{type:String},__query:{type:String},__hash:{type:String},path:{type:String,observer:"__onPathChanged"},_isReady:{type:Boolean}},behaviors:[yo],observers:["__computeRoutePath(useHashAsPath, __hash, __path)"],ready:function(){this._isReady=!0},__computeRoutePath:function(){this.path=this.useHashAsPath?this.__hash:this.__path},__onPathChanged:function(){this._isReady&&(this.useHashAsPath?this.__hash=this.path:this.__path=this.path)}}),Ei({is:"app-route",properties:{route:{type:Object,notify:!0},pattern:{type:String},data:{type:Object,value:function(){return{}},notify:!0},queryParams:{type:Object,value:function(){return{}},notify:!0},tail:{type:Object,value:function(){return{path:null,prefix:null,__queryParams:null}},notify:!0},active:{type:Boolean,notify:!0,readOnly:!0},_queryParamsUpdating:{type:Boolean,value:!1},_matched:{type:String,value:""}},observers:["__tryToMatch(route.path, pattern)","__updatePathOnDataChange(data.*)","__tailPathChanged(tail.path)","__routeQueryParamsChanged(route.__queryParams)","__tailQueryParamsChanged(tail.__queryParams)","__queryParamsChanged(queryParams.*)"],created:function(){this.linkPaths("route.__queryParams","tail.__queryParams"),this.linkPaths("tail.__queryParams","route.__queryParams")},__routeQueryParamsChanged:function(e){if(e&&this.tail){if(this.tail.__queryParams!==e&&this.set("tail.__queryParams",e),!this.active||this._queryParamsUpdating)return;var t={},a=!1;for(var n in e)t[n]=e[n],(a||!this.queryParams||e[n]!==this.queryParams[n])&&(a=!0);for(var n in this.queryParams)if(a||!(n in e)){a=!0;break}if(!a)return;this._queryParamsUpdating=!0,this.set("queryParams",t),this._queryParamsUpdating=!1}},__tailQueryParamsChanged:function(e){e&&this.route&&this.route.__queryParams!=e&&this.set("route.__queryParams",e)},__queryParamsChanged:function(e){!this.active||this._queryParamsUpdating||this.set("route.__"+e.path,e.value)},__resetProperties:function(){this._setActive(!1),this._matched=null},__tryToMatch:function(){if(this.route){var e=this.route.path,t=this.pattern;if(t){if(!e)return void this.__resetProperties();for(var a=e.split("/"),n=t.split("/"),r=[],o={},s=0,i,d;s<n.length&&(i=n[s],i||""===i);s++){if(d=a.shift(),!d&&""!==d)return void this.__resetProperties();if(r.push(d),":"==i.charAt(0))o[i.slice(1)]=d;else if(i!==d)return void this.__resetProperties()}this._matched=r.join("/");var l={};this.active||(l.active=!0);var p=this.route.prefix+this._matched,_=a.join("/");for(var c in 0<a.length&&(_="/"+_),this.tail&&this.tail.prefix===p&&this.tail.path===_||(l.tail={prefix:p,path:_,__queryParams:this.route.__queryParams}),l.data=o,this._dataInUrl={},o)this._dataInUrl[c]=o[c];this.setProperties?this.setProperties(l,!0):this.__setMulti(l)}}},__tailPathChanged:function(e){if(this.active){var t=e,a=this._matched;t&&("/"!==t.charAt(0)&&(t="/"+t),a+=t),this.set("route.path",a)}},__updatePathOnDataChange:function(){if(this.route&&this.active){var e=this.__getLink({}),t=this.__getLink(this._dataInUrl);e===t||this.set("route.path",e)}},__getLink:function(e){var t={tail:null};for(var a in this.data)t[a]=this.data[a];for(var a in e)t[a]=e[a];var n=this.pattern.split("/"),r=n.map(function(e){return":"==e[0]&&(e=t[e.slice(1)]),e},this);return t.tail&&t.tail.path&&(0<r.length&&"/"===t.tail.path.charAt(0)?r.push(t.tail.path.slice(1)):r.push(t.tail.path)),r.join("/")},__setMulti:function(e){for(var t in e)this._propertySetter(t,e[t]);e.data!==void 0&&(this._pathEffector("data",this.data),this._notifyChange("data")),e.active!==void 0&&(this._pathEffector("active",this.active),this._notifyChange("active")),e.tail!==void 0&&(this._pathEffector("tail",this.tail),this._notifyChange("tail"))}});const go=Ei({_template:Mi`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live\$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){go.instance||(go.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async(function(){this._text=e},100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});e.IronA11yAnnouncer=go,go.instance=null,go.requestAvailability=function(){go.instance||(go.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(go.instance)};e.$ironA11yAnnouncer={IronA11yAnnouncer:go};var fo={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},vo={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},bo={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},So=/[a-z0-9*]/,Co=/U\+/,Eo=/^arrow/,Po=/^space(bar)?/,To=/^escape$/;const Ao={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var a=ka(t),n=0;n<a.length;++n)if(Ra(a[n],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map(function(e){return e.keyBindings});return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach(function(e){for(var t in e)this._addKeyBinding(t,e[t])},this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort(function(e,t){var a=e[0].hasModifiers,n=t[0].hasModifiers;return a===n?0:a?-1:1})},_addKeyBinding:function(e,t){ka(e).forEach(function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])},this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach(function(e){var t=this._keyBindings[e],a=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,a]),this.keyEventTarget.addEventListener(e,a)},this)},_unlistenKeyEventListeners:function(){for(var e,t,a,n;this._boundKeyHandlers.length;)e=this._boundKeyHandlers.pop(),t=e[0],a=e[1],n=e[2],t.removeEventListener(a,n)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var a=0;a<e.length;a++){var n=e[a][0],r=e[a][1];if(Ra(n,t)&&(this._triggerKeyHandler(n,r,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,a){var n=Object.create(e);n.keyboardEvent=a;var r=new CustomEvent(e.event,{detail:n,cancelable:!0});this[t].call(this,r),r.defaultPrevented&&a.preventDefault()}};e.IronA11yKeysBehavior=Ao;e.$ironA11yKeysBehavior={IronA11yKeysBehavior:Ao};const Io={properties:{focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function(){return this._focusBlurHandler.bind(this)}},__handleEventRetargeting:{type:Boolean,value:function(){return!this.shadowRoot&&!$i}}},observers:["_changedControlState(focused, disabled)"],ready:function(){this.addEventListener("focus",this._boundFocusBlurHandler,!0),this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function(e){if($i)return void this._setFocused("focus"===e.type);if(e.target===this)this._setFocused("focus"===e.type);else if(this.__handleEventRetargeting){var t=fi(e).localTarget;this.isLightDescendant(t)||this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})}},_disabledChanged:function(e){this.setAttribute("aria-disabled",e?"true":"false"),this.style.pointerEvents=e?"none":"",e?(this._oldTabIndex=this.getAttribute("tabindex"),this._setFocused(!1),this.tabIndex=-1,this.blur()):this._oldTabIndex!==void 0&&(null===this._oldTabIndex?this.removeAttribute("tabindex"):this.setAttribute("tabindex",this._oldTabIndex))},_changedControlState:function(){this._controlStateChanged&&this._controlStateChanged()}};e.IronControlState=Io;e.$ironControlState={IronControlState:Io};const xo={properties:{pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},toggles:{type:Boolean,value:!1,reflectToAttribute:!0},active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},pointerDown:{type:Boolean,readOnly:!0,value:!1},receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function(){this.toggles?this._userActivate(!this.active):this.active=!1},_focusChanged:function(e){this._detectKeyboardFocus(e),e||this._setPressed(!1)},_detectKeyboardFocus:function(e){this._setReceivedFocusFromKeyboard(!this.pointerDown&&e)},_userActivate:function(e){this.active!==e&&(this.active=e,this.fire("change"))},_downHandler:function(){this._setPointerDown(!0),this._setPressed(!0),this._setReceivedFocusFromKeyboard(!1)},_upHandler:function(){this._setPointerDown(!1),this._setPressed(!1)},_spaceKeyDownHandler:function(e){var t=e.detail.keyboardEvent,a=fi(t).localTarget;this.isLightDescendant(a)||(t.preventDefault(),t.stopImmediatePropagation(),this._setPressed(!0))},_spaceKeyUpHandler:function(e){var t=e.detail.keyboardEvent,a=fi(t).localTarget;this.isLightDescendant(a)||(this.pressed&&this._asyncClick(),this._setPressed(!1))},_asyncClick:function(){this.async(function(){this.click()},1)},_pressedChanged:function(){this._changedButtonState()},_ariaActiveAttributeChanged:function(e,t){t&&t!=e&&this.hasAttribute(t)&&this.removeAttribute(t)},_activeChanged:function(e){this.toggles?this.setAttribute(this.ariaActiveAttribute,e?"true":"false"):this.removeAttribute(this.ariaActiveAttribute),this._changedButtonState()},_controlStateChanged:function(){this.disabled?this._setPressed(!1):this._changedButtonState()},_changedButtonState:function(){this._buttonStateChanged&&this._buttonStateChanged()}};e.IronButtonStateImpl=xo;const Ro=[Ao,xo];e.IronButtonState=Ro;e.$ironButtonState={IronButtonStateImpl:xo,IronButtonState:Ro};const wo=function(e){wo[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)};e.IronMeta=wo,wo[" "]=function(){},wo.types={},wo.prototype={get value(){var e=this.type,t=this.key;if(e&&t)return wo.types[e]&&wo.types[e][t]},set value(e){var t=this.type,a=this.key;t&&a&&(t=wo.types[t]=wo.types[t]||{},null==e?delete t[a]:t[a]=e)},get list(){var e=this.type;if(e){var t=wo.types[this.type];return t?Object.keys(t).map(function(e){return ko[this.type][e]},this):[]}},byKey:function(e){return this.key=e,this.value}};var ko=wo.types;Ei({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,a){var n=new wo({type:e,key:t});return void 0!==a&&a!==n.value?n.value=a:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new wo({type:this.type,key:e}).value}});e.$ironMeta={IronMeta:wo};let Do=null;e.IronValidatableBehaviorMeta=Do;const Oo={properties:{validator:{type:String},invalid:{notify:!0,reflectToAttribute:!0,type:Boolean,value:!1,observer:"_invalidChanged"}},registered:function(){e.IronValidatableBehaviorMeta=Do=new wo({type:"validator"})},_invalidChanged:function(){this.invalid?this.setAttribute("aria-invalid","true"):this.removeAttribute("aria-invalid")},get _validator(){return Do&&Do.byKey(this.validator)},hasValidator:function(){return null!=this._validator},validate:function(e){return this.invalid=void 0===e&&void 0!==this.value?!this._getValidity(this.value):!this._getValidity(e),!this.invalid},_getValidity:function(e){return!this.hasValidator()||this._validator.validate(e)}};e.IronValidatableBehavior=Oo;var No={get IronValidatableBehaviorMeta(){return Do},IronValidatableBehavior:Oo};e.$ironValidatableBehavior=No;const Lo={properties:{name:{type:String},value:{notify:!0,type:String},required:{type:Boolean,value:!1},_parentForm:{type:Object}},attached(){$i||this.fire("iron-form-element-register")},detached(){!$i&&this._parentForm&&this._parentForm.fire("iron-form-element-unregister",{target:this})}};e.IronFormElementBehavior=Lo;e.$ironFormElementBehavior={IronFormElementBehavior:Lo};const Mo={properties:{checked:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0,observer:"_checkedChanged"},toggles:{type:Boolean,value:!0,reflectToAttribute:!0},value:{type:String,value:"on",observer:"_valueChanged"}},observers:["_requiredChanged(required)"],created:function(){this._hasIronCheckedElementBehavior=!0},_getValidity:function(){return this.disabled||!this.required||this.checked},_requiredChanged:function(){this.required?this.setAttribute("aria-required","true"):this.removeAttribute("aria-required")},_checkedChanged:function(){this.active=this.checked,this.fire("iron-change")},_valueChanged:function(){(this.value===void 0||null===this.value)&&(this.value="on")}};e.IronCheckedElementBehaviorImpl=Mo;const Bo=[Lo,Oo,Mo];e.IronCheckedElementBehavior=Bo;e.$ironCheckedElementBehavior={IronCheckedElementBehaviorImpl:Mo,IronCheckedElementBehavior:Bo},Ei({_template:Mi`
    <style>
      :host {
        display: block;
        transition-duration: var(--iron-collapse-transition-duration, 300ms);
        /* Safari 10 needs this property prefixed to correctly apply the custom property */
        -webkit-transition-duration: var(--iron-collapse-transition-duration, 300ms);
        overflow: visible;
      }

      :host(.iron-collapse-closed) {
        display: none;
      }

      :host(:not(.iron-collapse-opened)) {
        overflow: hidden;
      }
    </style>

    <slot></slot>
`,is:"iron-collapse",behaviors:[Ji],properties:{horizontal:{type:Boolean,value:!1,observer:"_horizontalChanged"},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},transitioning:{type:Boolean,notify:!0,readOnly:!0},noAnimation:{type:Boolean},_desiredSize:{type:String,value:""}},get dimension(){return this.horizontal?"width":"height"},get _dimensionMax(){return this.horizontal?"maxWidth":"maxHeight"},get _dimensionMaxCss(){return this.horizontal?"max-width":"max-height"},hostAttributes:{role:"group","aria-hidden":"true"},listeners:{transitionend:"_onTransitionEnd"},toggle:function(){this.opened=!this.opened},show:function(){this.opened=!0},hide:function(){this.opened=!1},updateSize:function(e,t){e="auto"===e?"":e;var a=t&&!this.noAnimation&&this.isAttached&&this._desiredSize!==e;if(this._desiredSize=e,this._updateTransition(!1),a){var n=this._calcSize();""===e&&(this.style[this._dimensionMax]="",e=this._calcSize()),this.style[this._dimensionMax]=n,this.scrollTop=this.scrollTop,this._updateTransition(!0),a=e!==n}this.style[this._dimensionMax]=e,a||this._transitionEnd()},enableTransition:function(e){Qi._warn("`enableTransition()` is deprecated, use `noAnimation` instead."),this.noAnimation=!e},_updateTransition:function(e){this.style.transitionDuration=e&&!this.noAnimation?"":"0s"},_horizontalChanged:function(){this.style.transitionProperty=this._dimensionMaxCss;var e="maxWidth"===this._dimensionMax?"maxHeight":"maxWidth";this.style[e]="",this.updateSize(this.opened?"auto":"0px",!1)},_openedChanged:function(){this.setAttribute("aria-hidden",!this.opened),this._setTransitioning(!0),this.toggleClass("iron-collapse-closed",!1),this.toggleClass("iron-collapse-opened",!1),this.updateSize(this.opened?"auto":"0px",!0),this.opened&&this.focus()},_transitionEnd:function(){this.style[this._dimensionMax]=this._desiredSize,this.toggleClass("iron-collapse-closed",!this.opened),this.toggleClass("iron-collapse-opened",this.opened),this._updateTransition(!1),this.notifyResize(),this._setTransitioning(!1)},_onTransitionEnd:function(e){fi(e).rootTarget===this&&this._transitionEnd()},_calcSize:function(){return this.getBoundingClientRect()[this.dimension]+"px"}}),Ei({_template:Mi`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:Qi.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&fi(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),!this._img&&(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,fi(this.root).appendChild(this._img))}}),Ei({is:"iron-iconset-svg",properties:{name:{type:String,observer:"_nameChanged"},size:{type:Number,value:24},rtlMirroring:{type:Boolean,value:!1},useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function(){this._meta=new wo({type:"iconset",key:null,value:null})},attached:function(){this.style.display="none"},getIconNames:function(){return this._icons=this._createIconMap(),Object.keys(this._icons).map(function(e){return this.name+":"+e},this)},applyIcon:function(e,t){this.removeIcon(e);var a=this._cloneIcon(t,this.rtlMirroring&&this._targetIsRTL(e));if(a){var n=fi(e.root||e);return n.insertBefore(a,n.childNodes[0]),e._svgIcon=a}return null},removeIcon:function(e){e._svgIcon&&(fi(e.root||e).removeChild(e._svgIcon),e._svgIcon=null)},_targetIsRTL:function(e){if(null==this.__targetIsRTL)if(this.useGlobalRtlAttribute){var t=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===t.getAttribute("dir")}else e&&e.nodeType!==Node.ELEMENT_NODE&&(e=e.host),this.__targetIsRTL=e&&"rtl"===window.getComputedStyle(e).direction;return this.__targetIsRTL},_nameChanged:function(){this._meta.value=null,this._meta.key=this.name,this._meta.value=this,this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},_createIconMap:function(){var e=Object.create(null);return fi(this).querySelectorAll("[id]").forEach(function(t){e[t.id]=t}),e},_cloneIcon:function(e,t){return this._icons=this._icons||this._createIconMap(),this._prepareSvgClone(this._icons[e],this.size,t)},_prepareSvgClone:function(e,t,a){if(e){var n=e.cloneNode(!0),r=document.createElementNS("http://www.w3.org/2000/svg","svg"),i=n.getAttribute("viewBox")||"0 0 "+t+" "+t,o="pointer-events: none; display: block; width: 100%; height: 100%;";return a&&n.hasAttribute("mirror-in-rtl")&&(o+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"),r.setAttribute("viewBox",i),r.setAttribute("preserveAspectRatio","xMidYMid meet"),r.setAttribute("focusable","false"),r.style.cssText=o,r.appendChild(n).removeAttribute("id"),r}return null}});const $o=document.createElement("div");$o.setAttribute("style","display: none;"),$o.innerHTML=`<iron-iconset-svg name="icons" size="24">
<svg><defs>
<g id="3d-rotation"><path d="M7.52 21.48C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32zm.89-6.52c-.19 0-.37-.03-.52-.08-.16-.06-.29-.13-.4-.24-.11-.1-.2-.22-.26-.37-.06-.14-.09-.3-.09-.47h-1.3c0 .36.07.68.21.95.14.27.33.5.56.69.24.18.51.32.82.41.3.1.62.15.96.15.37 0 .72-.05 1.03-.15.32-.1.6-.25.83-.44s.42-.43.55-.72c.13-.29.2-.61.2-.97 0-.19-.02-.38-.07-.56-.05-.18-.12-.35-.23-.51-.1-.16-.24-.3-.4-.43-.17-.13-.37-.23-.61-.31.2-.09.37-.2.52-.33.15-.13.27-.27.37-.42.1-.15.17-.3.22-.46.05-.16.07-.32.07-.48 0-.36-.06-.68-.18-.96-.12-.28-.29-.51-.51-.69-.2-.19-.47-.33-.77-.43C9.1 8.05 8.76 8 8.39 8c-.36 0-.69.05-1 .16-.3.11-.57.26-.79.45-.21.19-.38.41-.51.67-.12.26-.18.54-.18.85h1.3c0-.17.03-.32.09-.45s.14-.25.25-.34c.11-.09.23-.17.38-.22.15-.05.3-.08.48-.08.4 0 .7.1.89.31.19.2.29.49.29.86 0 .18-.03.34-.08.49-.05.15-.14.27-.25.37-.11.1-.25.18-.41.24-.16.06-.36.09-.58.09H7.5v1.03h.77c.22 0 .42.02.6.07s.33.13.45.23c.12.11.22.24.29.4.07.16.1.35.1.57 0 .41-.12.72-.35.93-.23.23-.55.33-.95.33zm8.55-5.92c-.32-.33-.7-.59-1.14-.77-.43-.18-.92-.27-1.46-.27H12v8h2.3c.55 0 1.06-.09 1.51-.27.45-.18.84-.43 1.16-.76.32-.33.57-.73.74-1.19.17-.47.26-.99.26-1.57v-.4c0-.58-.09-1.1-.26-1.57-.18-.47-.43-.87-.75-1.2zm-.39 3.16c0 .42-.05.79-.14 1.13-.1.33-.24.62-.43.85-.19.23-.43.41-.71.53-.29.12-.62.18-.99.18h-.91V9.12h.97c.72 0 1.27.23 1.64.69.38.46.57 1.12.57 1.99v.4zM12 0l-.66.03 3.81 3.81 1.33-1.33c3.27 1.55 5.61 4.72 5.96 8.48h1.5C23.44 4.84 18.29 0 12 0z"></path></g>
<g id="accessibility"><path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z"></path></g>
<g id="accessible"><circle cx="12" cy="4" r="2"></circle><path d="M19 13v-2c-1.54.02-3.09-.75-4.07-1.83l-1.29-1.43c-.17-.19-.38-.34-.61-.45-.01 0-.01-.01-.02-.01H13c-.35-.2-.75-.3-1.19-.26C10.76 7.11 10 8.04 10 9.09V15c0 1.1.9 2 2 2h5v5h2v-5.5c0-1.1-.9-2-2-2h-3v-3.45c1.29 1.07 3.25 1.94 5 1.95zm-6.17 5c-.41 1.16-1.52 2-2.83 2-1.66 0-3-1.34-3-3 0-1.31.84-2.41 2-2.83V12.1c-2.28.46-4 2.48-4 4.9 0 2.76 2.24 5 5 5 2.42 0 4.44-1.72 4.9-4h-2.07z"></path></g>
<g id="account-balance"><path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z"></path></g>
<g id="account-balance-wallet"><path d="M21 18v1c0 1.1-.9 2-2 2H5c-1.11 0-2-.9-2-2V5c0-1.1.89-2 2-2h14c1.1 0 2 .9 2 2v1h-9c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="account-box"><path d="M3 5v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.11 0-2 .9-2 2zm12 4c0 1.66-1.34 3-3 3s-3-1.34-3-3 1.34-3 3-3 3 1.34 3 3zm-9 8c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1H6v-1z"></path></g>
<g id="account-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"></path></g>
<g id="add"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path></g>
<g id="add-alert"><path d="M10.01 21.01c0 1.1.89 1.99 1.99 1.99s1.99-.89 1.99-1.99h-3.98zm8.87-4.19V11c0-3.25-2.25-5.97-5.29-6.69v-.72C13.59 2.71 12.88 2 12 2s-1.59.71-1.59 1.59v.72C7.37 5.03 5.12 7.75 5.12 11v5.82L3 18.94V20h18v-1.06l-2.12-2.12zM16 13.01h-3v3h-2v-3H8V11h3V8h2v3h3v2.01z"></path></g>
<g id="add-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2z"></path></g>
<g id="add-circle-outline"><path d="M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="add-shopping-cart"><path d="M11 9h2V6h3V4h-3V1h-2v3H8v2h3v3zm-4 9c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-9.83-3.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.86-7.01L19.42 4h-.01l-1.1 2-2.76 5H8.53l-.13-.27L6.16 6l-.95-2-.94-2H1v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.13 0-.25-.11-.25-.25z"></path></g>
<g id="alarm"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12.5 8H11v6l4.75 2.85.75-1.23-4-2.37V8zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"></path></g>
<g id="alarm-add"><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"></path></g>
<g id="alarm-off"><path d="M12 6c3.87 0 7 3.13 7 7 0 .84-.16 1.65-.43 2.4l1.52 1.52c.58-1.19.91-2.51.91-3.92 0-4.97-4.03-9-9-9-1.41 0-2.73.33-3.92.91L9.6 6.43C10.35 6.16 11.16 6 12 6zm10-.28l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM2.92 2.29L1.65 3.57 2.98 4.9l-1.11.93 1.42 1.42 1.11-.94.8.8C3.83 8.69 3 10.75 3 13c0 4.97 4.02 9 9 9 2.25 0 4.31-.83 5.89-2.2l2.2 2.2 1.27-1.27L3.89 3.27l-.97-.98zm13.55 16.1C15.26 19.39 13.7 20 12 20c-3.87 0-7-3.13-7-7 0-1.7.61-3.26 1.61-4.47l9.86 9.86zM8.02 3.28L6.6 1.86l-.86.71 1.42 1.42.86-.71z"></path></g>
<g id="alarm-on"><path d="M22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm-1.46-5.47L8.41 12.4l-1.06 1.06 3.18 3.18 6-6-1.06-1.06-4.93 4.95z"></path></g>
<g id="all-out"><path d="M16.21 4.16l4 4v-4zm4 12l-4 4h4zm-12 4l-4-4v4zm-4-12l4-4h-4zm12.95-.95c-2.73-2.73-7.17-2.73-9.9 0s-2.73 7.17 0 9.9 7.17 2.73 9.9 0 2.73-7.16 0-9.9zm-1.1 8.8c-2.13 2.13-5.57 2.13-7.7 0s-2.13-5.57 0-7.7 5.57-2.13 7.7 0 2.13 5.57 0 7.7z"></path></g>
<g id="android"><path d="M6 18c0 .55.45 1 1 1h1v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h2v3.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5V19h1c.55 0 1-.45 1-1V8H6v10zM3.5 8C2.67 8 2 8.67 2 9.5v7c0 .83.67 1.5 1.5 1.5S5 17.33 5 16.5v-7C5 8.67 4.33 8 3.5 8zm17 0c-.83 0-1.5.67-1.5 1.5v7c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5v-7c0-.83-.67-1.5-1.5-1.5zm-4.97-5.84l1.3-1.3c.2-.2.2-.51 0-.71-.2-.2-.51-.2-.71 0l-1.48 1.48C13.85 1.23 12.95 1 12 1c-.96 0-1.86.23-2.66.63L7.85.15c-.2-.2-.51-.2-.71 0-.2.2-.2.51 0 .71l1.31 1.31C6.97 3.26 6 5.01 6 7h12c0-1.99-.97-3.75-2.47-4.84zM10 5H9V4h1v1zm5 0h-1V4h1v1z"></path></g>
<g id="announcement"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 9h-2V5h2v6zm0 4h-2v-2h2v2z"></path></g>
<g id="apps"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"></path></g>
<g id="archive"><path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM12 17.5L6.5 12H10v-2h4v2h3.5L12 17.5zM5.12 5l.81-1h12l.94 1H5.12z"></path></g>
<g id="arrow-back"><path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"></path></g>
<g id="arrow-downward"><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></g>
<g id="arrow-drop-down"><path d="M7 10l5 5 5-5z"></path></g>
<g id="arrow-drop-down-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 12l-4-4h8l-4 4z"></path></g>
<g id="arrow-drop-up"><path d="M7 14l5-5 5 5z"></path></g>
<g id="arrow-forward"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"></path></g>
<g id="arrow-upward"><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></g>
<g id="aspect-ratio"><path d="M19 12h-2v3h-3v2h5v-5zM7 9h3V7H5v5h2V9zm14-6H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="assessment"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"></path></g>
<g id="assignment"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm2 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"></path></g>
<g id="assignment-ind"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 4c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1.4c0-2 4-3.1 6-3.1s6 1.1 6 3.1V19z"></path></g>
<g id="assignment-late"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 15h-2v-2h2v2zm0-4h-2V8h2v6zm-1-9c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></g>
<g id="assignment-return"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm4 12h-4v3l-5-5 5-5v3h4v4z"></path></g>
<g id="assignment-returned"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm0 15l-5-5h3V9h4v4h3l-5 5z"></path></g>
<g id="assignment-turned-in"><path d="M19 3h-4.18C14.4 1.84 13.3 1 12 1c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-2 14l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="attachment"><path d="M2 12.5C2 9.46 4.46 7 7.5 7H18c2.21 0 4 1.79 4 4s-1.79 4-4 4H9.5C8.12 15 7 13.88 7 12.5S8.12 10 9.5 10H17v2H9.41c-.55 0-.55 1 0 1H18c1.1 0 2-.9 2-2s-.9-2-2-2H7.5C5.57 9 4 10.57 4 12.5S5.57 16 7.5 16H17v2H7.5C4.46 18 2 15.54 2 12.5z"></path></g>
<g id="autorenew"><path d="M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z"></path></g>
<g id="backspace"><path d="M22 3H7c-.69 0-1.23.35-1.59.88L0 12l5.41 8.11c.36.53.9.89 1.59.89h15c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-3 12.59L17.59 17 14 13.41 10.41 17 9 15.59 12.59 12 9 8.41 10.41 7 14 10.59 17.59 7 19 8.41 15.41 12 19 15.59z"></path></g>
<g id="backup"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="block"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM4 12c0-4.42 3.58-8 8-8 1.85 0 3.55.63 4.9 1.69L5.69 16.9C4.63 15.55 4 13.85 4 12zm8 8c-1.85 0-3.55-.63-4.9-1.69L18.31 7.1C19.37 8.45 20 10.15 20 12c0 4.42-3.58 8-8 8z"></path></g>
<g id="book"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="bookmark"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="bookmark-border"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="bug-report"><path d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"></path></g>
<g id="build"><path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"></path></g>
<g id="cached"><path d="M19 8l-4 4h3c0 3.31-2.69 6-6 6-1.01 0-1.97-.25-2.8-.7l-1.46 1.46C8.97 19.54 10.43 20 12 20c4.42 0 8-3.58 8-8h3l-4-4zM6 12c0-3.31 2.69-6 6-6 1.01 0 1.97.25 2.8.7l1.46-1.46C15.03 4.46 13.57 4 12 4c-4.42 0-8 3.58-8 8H1l4 4 4-4H6z"></path></g>
<g id="camera-enhance"><path d="M9 3L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2h-3.17L15 3H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-1l1.25-2.75L16 13l-2.75-1.25L12 9l-1.25 2.75L8 13l2.75 1.25z"></path></g>
<g id="cancel"><path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path></g>
<g id="card-giftcard"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="card-membership"><path d="M20 2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h4v5l4-2 4 2v-5h4c1.11 0 2-.89 2-2V4c0-1.11-.89-2-2-2zm0 13H4v-2h16v2zm0-5H4V4h16v6z"></path></g>
<g id="card-travel"><path d="M20 6h-3V4c0-1.11-.89-2-2-2H9c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM9 4h6v2H9V4zm11 15H4v-2h16v2zm0-5H4V8h3v2h2V8h6v2h2V8h3v6z"></path></g>
<g id="change-history"><path d="M12 7.77L18.39 18H5.61L12 7.77M12 4L2 20h20L12 4z"></path></g>
<g id="check"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"></path></g>
<g id="check-box"><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="check-box-outline-blank"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="check-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path></g>
<g id="chevron-left"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></g>
<g id="chevron-right"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></g>
<g id="chrome-reader-mode"><path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path></g>
<g id="class"><path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"></path></g>
<g id="clear"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="close"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></g>
<g id="cloud"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"></path></g>
<g id="cloud-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.5 14H8c-1.66 0-3-1.34-3-3s1.34-3 3-3l.14.01C8.58 8.28 10.13 7 12 7c2.21 0 4 1.79 4 4h.5c1.38 0 2.5 1.12 2.5 2.5S17.88 16 16.5 16z"></path></g>
<g id="cloud-done"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM10 17l-3.5-3.5 1.41-1.41L10 14.17 15.18 9l1.41 1.41L10 17z"></path></g>
<g id="cloud-download"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"></path></g>
<g id="cloud-off"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4c-1.48 0-2.85.43-4.01 1.17l1.46 1.46C10.21 6.23 11.08 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3 0 1.13-.64 2.11-1.56 2.62l1.45 1.45C23.16 18.16 24 16.68 24 15c0-2.64-2.05-4.78-4.65-4.96zM3 5.27l2.75 2.74C2.56 8.15 0 10.77 0 14c0 3.31 2.69 6 6 6h11.73l2 2L21 20.73 4.27 4 3 5.27zM7.73 10l8 8H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h1.73z"></path></g>
<g id="cloud-queue"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h.71C7.37 7.69 9.48 6 12 6c3.04 0 5.5 2.46 5.5 5.5v.5H19c1.66 0 3 1.34 3 3s-1.34 3-3 3z"></path></g>
<g id="cloud-upload"><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM14 13v4h-4v-4H7l5-5 5 5h-3z"></path></g>
<g id="code"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"></path></g>
<g id="compare-arrows"><path d="M9.01 14H2v2h7.01v3L13 15l-3.99-4v3zm5.98-1v-3H22V8h-7.01V5L11 9l3.99 4z"></path></g>
<g id="content-copy"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"></path></g>
<g id="content-cut"><path d="M9.64 7.64c.23-.5.36-1.05.36-1.64 0-2.21-1.79-4-4-4S2 3.79 2 6s1.79 4 4 4c.59 0 1.14-.13 1.64-.36L10 12l-2.36 2.36C7.14 14.13 6.59 14 6 14c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4c0-.59-.13-1.14-.36-1.64L12 14l7 7h3v-1L9.64 7.64zM6 8c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm0 12c-1.1 0-2-.89-2-2s.9-2 2-2 2 .89 2 2-.9 2-2 2zm6-7.5c-.28 0-.5-.22-.5-.5s.22-.5.5-.5.5.22.5.5-.22.5-.5.5zM19 3l-6 6 2 2 7-7V3z"></path></g>
<g id="content-paste"><path d="M19 2h-4.18C14.4.84 13.3 0 12 0c-1.3 0-2.4.84-2.82 2H5c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm7 18H5V4h2v3h10V4h2v16z"></path></g>
<g id="copyright"><path d="M10.08 10.86c.05-.33.16-.62.3-.87s.34-.46.59-.62c.24-.15.54-.22.91-.23.23.01.44.05.63.13.2.09.38.21.52.36s.25.33.34.53.13.42.14.64h1.79c-.02-.47-.11-.9-.28-1.29s-.4-.73-.7-1.01-.66-.5-1.08-.66-.88-.23-1.39-.23c-.65 0-1.22.11-1.7.34s-.88.53-1.2.92-.56.84-.71 1.36S8 11.29 8 11.87v.27c0 .58.08 1.12.23 1.64s.39.97.71 1.35.72.69 1.2.91 1.05.34 1.7.34c.47 0 .91-.08 1.32-.23s.77-.36 1.08-.63.56-.58.74-.94.29-.74.3-1.15h-1.79c-.01.21-.06.4-.15.58s-.21.33-.36.46-.32.23-.52.3c-.19.07-.39.09-.6.1-.36-.01-.66-.08-.89-.23-.25-.16-.45-.37-.59-.62s-.25-.55-.3-.88-.08-.67-.08-1v-.27c0-.35.03-.68.08-1.01zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="create"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"></path></g>
<g id="create-new-folder"><path d="M20 6h-8l-2-2H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-1 8h-3v3h-2v-3h-3v-2h3V9h2v3h3v2z"></path></g>
<g id="credit-card"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="dashboard"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"></path></g>
<g id="date-range"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></g>
<g id="delete"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-forever"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"></path></g>
<g id="delete-sweep"><path d="M15 16h4v2h-4zm0-8h7v2h-7zm0 4h6v2h-6zM3 18c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V8H3v10zM14 5h-3l-1-1H6L5 5H2v2h12z"></path></g>
<g id="description"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z"></path></g>
<g id="dns"><path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="done"><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path></g>
<g id="done-all"><path d="M18 7l-1.41-1.41-6.34 6.34 1.41 1.41L18 7zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12-1.42-1.41zM.41 13.41L6 19l1.41-1.41L1.83 12 .41 13.41z"></path></g>
<g id="donut-large"><path d="M11 5.08V2c-5 .5-9 4.81-9 10s4 9.5 9 10v-3.08c-3-.48-6-3.4-6-6.92s3-6.44 6-6.92zM18.97 11H22c-.47-5-4-8.53-9-9v3.08C16 5.51 18.54 8 18.97 11zM13 18.92V22c5-.47 8.53-4 9-9h-3.03c-.43 3-2.97 5.49-5.97 5.92z"></path></g>
<g id="donut-small"><path d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"></path></g>
<g id="drafts"><path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z"></path></g>
<g id="eject"><path d="M5 17h14v2H5zm7-12L5.33 15h13.34z"></path></g>
<g id="error"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"></path></g>
<g id="error-outline"><path d="M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="euro-symbol"><path d="M15 18.5c-2.51 0-4.68-1.42-5.76-3.5H15v-2H8.58c-.05-.33-.08-.66-.08-1s.03-.67.08-1H15V9H9.24C10.32 6.92 12.5 5.5 15 5.5c1.61 0 3.09.59 4.23 1.57L21 5.3C19.41 3.87 17.3 3 15 3c-3.92 0-7.24 2.51-8.48 6H3v2h3.06c-.04.33-.06.66-.06 1 0 .34.02.67.06 1H3v2h3.52c1.24 3.49 4.56 6 8.48 6 2.31 0 4.41-.87 6-2.3l-1.78-1.77c-1.13.98-2.6 1.57-4.22 1.57z"></path></g>
<g id="event"><path d="M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"></path></g>
<g id="event-seat"><path d="M4 18v3h3v-3h10v3h3v-6H4zm15-8h3v3h-3zM2 10h3v3H2zm15 3H7V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v8z"></path></g>
<g id="exit-to-app"><path d="M10.09 15.59L11.5 17l5-5-5-5-1.41 1.41L12.67 11H3v2h9.67l-2.58 2.59zM19 3H5c-1.11 0-2 .9-2 2v4h2V5h14v14H5v-4H3v4c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"></path></g>
<g id="expand-less"><path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"></path></g>
<g id="expand-more"><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"></path></g>
<g id="explore"><path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"></path></g>
<g id="extension"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"></path></g>
<g id="face"><path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zm6 0c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z"></path></g>
<g id="favorite"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"></path></g>
<g id="favorite-border"><path d="M16.5 3c-1.74 0-3.41.81-4.5 2.09C10.91 3.81 9.24 3 7.5 3 4.42 3 2 5.42 2 8.5c0 3.78 3.4 6.86 8.55 11.54L12 21.35l1.45-1.32C18.6 15.36 22 12.28 22 8.5 22 5.42 19.58 3 16.5 3zm-4.4 15.55l-.1.1-.1-.1C7.14 14.24 4 11.39 4 8.5 4 6.5 5.5 5 7.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5 5c2 0 3.5 1.5 3.5 3.5 0 2.89-3.14 5.74-7.9 10.05z"></path></g>
<g id="feedback"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"></path></g>
<g id="file-download"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="file-upload"><path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"></path></g>
<g id="filter-list"><path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z"></path></g>
<g id="find-in-page"><path d="M20 19.59V8l-6-6H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c.45 0 .85-.15 1.19-.4l-4.43-4.43c-.8.52-1.74.83-2.76.83-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5c0 1.02-.31 1.96-.83 2.75L20 19.59zM9 13c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path></g>
<g id="find-replace"><path d="M11 6c1.38 0 2.63.56 3.54 1.46L12 10h6V4l-2.05 2.05C14.68 4.78 12.93 4 11 4c-3.53 0-6.43 2.61-6.92 6H6.1c.46-2.28 2.48-4 4.9-4zm5.64 9.14c.66-.9 1.12-1.97 1.28-3.14H15.9c-.46 2.28-2.48 4-4.9 4-1.38 0-2.63-.56-3.54-1.46L10 12H4v6l2.05-2.05C7.32 17.22 9.07 18 11 18c1.55 0 2.98-.51 4.14-1.36L20 21.49 21.49 20l-4.85-4.86z"></path></g>
<g id="fingerprint"><path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"></path></g>
<g id="first-page"><path d="M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"></path></g>
<g id="flag"><path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"></path></g>
<g id="flight-land"><path d="M2.5 19h19v2h-19zm7.18-5.73l4.35 1.16 5.31 1.42c.8.21 1.62-.26 1.84-1.06.21-.8-.26-1.62-1.06-1.84l-5.31-1.42-2.76-9.02L10.12 2v8.28L5.15 8.95l-.93-2.32-1.45-.39v5.17l1.6.43 5.31 1.43z"></path></g>
<g id="flight-takeoff"><path d="M2.5 19h19v2h-19zm19.57-9.36c-.21-.8-1.04-1.28-1.84-1.06L14.92 10l-6.9-6.43-1.93.51 4.14 7.17-4.97 1.33-1.97-1.54-1.45.39 1.82 3.16.77 1.33 1.6-.43 5.31-1.42 4.35-1.16L21 11.49c.81-.23 1.28-1.05 1.07-1.85z"></path></g>
<g id="flip-to-back"><path d="M9 7H7v2h2V7zm0 4H7v2h2v-2zm0-8c-1.11 0-2 .9-2 2h2V3zm4 12h-2v2h2v-2zm6-12v2h2c0-1.1-.9-2-2-2zm-6 0h-2v2h2V3zM9 17v-2H7c0 1.1.89 2 2 2zm10-4h2v-2h-2v2zm0-4h2V7h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zM5 7H3v12c0 1.1.89 2 2 2h12v-2H5V7zm10-2h2V3h-2v2zm0 12h2v-2h-2v2z"></path></g>
<g id="flip-to-front"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm2 4v-2H3c0 1.1.89 2 2 2zM3 9h2V7H3v2zm12 12h2v-2h-2v2zm4-18H9c-1.11 0-2 .9-2 2v10c0 1.1.89 2 2 2h10c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12H9V5h10v10zm-8 6h2v-2h-2v2zm-4 0h2v-2H7v2z"></path></g>
<g id="folder"><path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"></path></g>
<g id="folder-open"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm0 12H4V8h16v10z"></path></g>
<g id="folder-shared"><path d="M20 6h-8l-2-2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-5 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm4 8h-8v-1c0-1.33 2.67-2 4-2s4 .67 4 2v1z"></path></g>
<g id="font-download"><path d="M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z"></path></g>
<g id="forward"><path d="M12 8V4l8 8-8 8v-4H4V8z"></path></g>
<g id="fullscreen"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"></path></g>
<g id="fullscreen-exit"><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></g>
<g id="g-translate"><path d="M20 5h-9.12L10 2H4c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h7l1 3h8c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zM7.17 14.59c-2.25 0-4.09-1.83-4.09-4.09s1.83-4.09 4.09-4.09c1.04 0 1.99.37 2.74 1.07l.07.06-1.23 1.18-.06-.05c-.29-.27-.78-.59-1.52-.59-1.31 0-2.38 1.09-2.38 2.42s1.07 2.42 2.38 2.42c1.37 0 1.96-.87 2.12-1.46H7.08V9.91h3.95l.01.07c.04.21.05.4.05.61 0 2.35-1.61 4-3.92 4zm6.03-1.71c.33.6.74 1.18 1.19 1.7l-.54.53-.65-2.23zm.77-.76h-.99l-.31-1.04h3.99s-.34 1.31-1.56 2.74c-.52-.62-.89-1.23-1.13-1.7zM21 20c0 .55-.45 1-1 1h-7l2-2-.81-2.77.92-.92L17.79 18l.73-.73-2.71-2.68c.9-1.03 1.6-2.25 1.92-3.51H19v-1.04h-3.64V9h-1.04v1.04h-1.96L11.18 6H20c.55 0 1 .45 1 1v13z"></path></g>
<g id="gavel"><path d="M1 21h12v2H1zM5.245 8.07l2.83-2.827 14.14 14.142-2.828 2.828zM12.317 1l5.657 5.656-2.83 2.83-5.654-5.66zM3.825 9.485l5.657 5.657-2.828 2.828-5.657-5.657z"></path></g>
<g id="gesture"><path d="M4.59 6.89c.7-.71 1.4-1.35 1.71-1.22.5.2 0 1.03-.3 1.52-.25.42-2.86 3.89-2.86 6.31 0 1.28.48 2.34 1.34 2.98.75.56 1.74.73 2.64.46 1.07-.31 1.95-1.4 3.06-2.77 1.21-1.49 2.83-3.44 4.08-3.44 1.63 0 1.65 1.01 1.76 1.79-3.78.64-5.38 3.67-5.38 5.37 0 1.7 1.44 3.09 3.21 3.09 1.63 0 4.29-1.33 4.69-6.1H21v-2.5h-2.47c-.15-1.65-1.09-4.2-4.03-4.2-2.25 0-4.18 1.91-4.94 2.84-.58.73-2.06 2.48-2.29 2.72-.25.3-.68.84-1.11.84-.45 0-.72-.83-.36-1.92.35-1.09 1.4-2.86 1.85-3.52.78-1.14 1.3-1.92 1.3-3.28C8.95 3.69 7.31 3 6.44 3 5.12 3 3.97 4 3.72 4.25c-.36.36-.66.66-.88.93l1.75 1.71zm9.29 11.66c-.31 0-.74-.26-.74-.72 0-.6.73-2.2 2.87-2.76-.3 2.69-1.43 3.48-2.13 3.48z"></path></g>
<g id="get-app"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"></path></g>
<g id="gif"><path d="M11.5 9H13v6h-1.5zM9 9H6c-.6 0-1 .5-1 1v4c0 .5.4 1 1 1h3c.6 0 1-.5 1-1v-2H8.5v1.5h-2v-3H10V10c0-.5-.4-1-1-1zm10 1.5V9h-4.5v6H16v-2h2v-1.5h-2v-1z"></path></g>
<g id="grade"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="group-work"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 17.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5zM9.5 8c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5S9.5 9.38 9.5 8zm6.5 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="help"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"></path></g>
<g id="help-outline"><path d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></g>
<g id="highlight-off"><path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="history"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="home"><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"></path></g>
<g id="hourglass-empty"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6zm10 14.5V20H8v-3.5l4-4 4 4zm-4-5l-4-4V4h8v3.5l-4 4z"></path></g>
<g id="hourglass-full"><path d="M6 2v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2H6z"></path></g>
<g id="http"><path d="M4.5 11h-2V9H1v6h1.5v-2.5h2V15H6V9H4.5v2zm2.5-.5h1.5V15H10v-4.5h1.5V9H7v1.5zm5.5 0H14V15h1.5v-4.5H17V9h-4.5v1.5zm9-1.5H18v6h1.5v-2h2c.8 0 1.5-.7 1.5-1.5v-1c0-.8-.7-1.5-1.5-1.5zm0 2.5h-2v-1h2v1z"></path></g>
<g id="https"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="important-devices"><path d="M23 11.01L18 11c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5c.55 0 1-.45 1-1v-9c0-.55-.45-.99-1-.99zM23 20h-5v-7h5v7zM20 2H2C.89 2 0 2.89 0 4v12c0 1.1.89 2 2 2h7v2H7v2h8v-2h-2v-2h2v-2H2V4h18v5h2V4c0-1.11-.9-2-2-2zm-8.03 7L11 6l-.97 3H7l2.47 1.76-.94 2.91 2.47-1.8 2.47 1.8-.94-2.91L15 9h-3.03z"></path></g>
<g id="inbox"><path d="M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"></path></g>
<g id="indeterminate-check-box"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"></path></g>
<g id="info"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></g>
<g id="info-outline"><path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"></path></g>
<g id="input"><path d="M21 3.01H3c-1.1 0-2 .9-2 2V9h2V4.99h18v14.03H3V15H1v4.01c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98v-14c0-1.11-.9-2-2-2zM11 16l4-4-4-4v3H1v2h10v3z"></path></g>
<g id="invert-colors"><path d="M17.66 7.93L12 2.27 6.34 7.93c-3.12 3.12-3.12 8.19 0 11.31C7.9 20.8 9.95 21.58 12 21.58c2.05 0 4.1-.78 5.66-2.34 3.12-3.12 3.12-8.19 0-11.31zM12 19.59c-1.6 0-3.11-.62-4.24-1.76C6.62 16.69 6 15.19 6 13.59s.62-3.11 1.76-4.24L12 5.1v14.49z"></path></g>
<g id="label"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16z"></path></g>
<g id="label-outline"><path d="M17.63 5.84C17.27 5.33 16.67 5 16 5L5 5.01C3.9 5.01 3 5.9 3 7v10c0 1.1.9 1.99 2 1.99L16 19c.67 0 1.27-.33 1.63-.84L22 12l-4.37-6.16zM16 17H5V7h11l3.55 5L16 17z"></path></g>
<g id="language"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"></path></g>
<g id="last-page"><path d="M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"></path></g>
<g id="launch"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="lightbulb-outline"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"></path></g>
<g id="line-style"><path d="M3 16h5v-2H3v2zm6.5 0h5v-2h-5v2zm6.5 0h5v-2h-5v2zM3 20h2v-2H3v2zm4 0h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM3 12h8v-2H3v2zm10 0h8v-2h-8v2zM3 4v4h18V4H3z"></path></g>
<g id="line-weight"><path d="M3 17h18v-2H3v2zm0 3h18v-1H3v1zm0-7h18v-3H3v3zm0-9v4h18V4H3z"></path></g>
<g id="link"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"></path></g>
<g id="list"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"></path></g>
<g id="lock"><path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"></path></g>
<g id="lock-open"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6h1.9c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm0 12H6V10h12v10z"></path></g>
<g id="lock-outline"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM8.9 6c0-1.71 1.39-3.1 3.1-3.1s3.1 1.39 3.1 3.1v2H8.9V6zM18 20H6V10h12v10z"></path></g>
<g id="low-priority"><path d="M14 5h8v2h-8zm0 5.5h8v2h-8zm0 5.5h8v2h-8zM2 11.5C2 15.08 4.92 18 8.5 18H9v2l3-3-3-3v2h-.5C6.02 16 4 13.98 4 11.5S6.02 7 8.5 7H12V5H8.5C4.92 5 2 7.92 2 11.5z"></path></g>
<g id="loyalty"><path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7zm11.77 8.27L13 19.54l-4.27-4.27C8.28 14.81 8 14.19 8 13.5c0-1.38 1.12-2.5 2.5-2.5.69 0 1.32.28 1.77.74l.73.72.73-.73c.45-.45 1.08-.73 1.77-.73 1.38 0 2.5 1.12 2.5 2.5 0 .69-.28 1.32-.73 1.77z"></path></g>
<g id="mail"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path></g>
<g id="markunread-mailbox"><path d="M20 6H10v6H8V4h6V0H6v6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2z"></path></g>
<g id="menu"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path></g>
<g id="more-horiz"><path d="M6 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm12 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-6 0c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="more-vert"><path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="motorcycle"><path d="M19.44 9.03L15.41 5H11v2h3.59l2 2H5c-2.8 0-5 2.2-5 5s2.2 5 5 5c2.46 0 4.45-1.69 4.9-4h1.65l2.77-2.77c-.21.54-.32 1.14-.32 1.77 0 2.8 2.2 5 5 5s5-2.2 5-5c0-2.65-1.97-4.77-4.56-4.97zM7.82 15C7.4 16.15 6.28 17 5 17c-1.63 0-3-1.37-3-3s1.37-3 3-3c1.28 0 2.4.85 2.82 2H5v2h2.82zM19 17c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3z"></path></g>
<g id="move-to-inbox"><path d="M19 3H4.99c-1.11 0-1.98.9-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10zm-3-5h-2V7h-4v3H8l4 4 4-4z"></path></g>
<g id="next-week"><path d="M20 7h-4V5c0-.55-.22-1.05-.59-1.41C15.05 3.22 14.55 3 14 3h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zM10 5h4v2h-4V5zm1 13.5l-1-1 3-3-3-3 1-1 4 4-4 4z"></path></g>
<g id="note-add"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z"></path></g>
<g id="offline-pin"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 16H7v-2h10v2zm-6.7-4L7 10.7l1.4-1.4 1.9 1.9 5.3-5.3L17 7.3 10.3 14z"></path></g>
<g id="opacity"><path d="M17.66 8L12 2.35 6.34 8C4.78 9.56 4 11.64 4 13.64s.78 4.11 2.34 5.67 3.61 2.35 5.66 2.35 4.1-.79 5.66-2.35S20 15.64 20 13.64 19.22 9.56 17.66 8zM6 14c.01-2 .62-3.27 1.76-4.4L12 5.27l4.24 4.38C17.38 10.77 17.99 12 18 14H6z"></path></g>
<g id="open-in-browser"><path d="M19 4H5c-1.11 0-2 .9-2 2v12c0 1.1.89 2 2 2h4v-2H5V8h14v10h-4v2h4c1.1 0 2-.9 2-2V6c0-1.1-.89-2-2-2zm-7 6l-4 4h3v6h2v-6h3l-4-4z"></path></g>
<g id="open-in-new"><path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path></g>
<g id="open-with"><path d="M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z"></path></g>
<g id="pageview"><path d="M11.5 9C10.12 9 9 10.12 9 11.5s1.12 2.5 2.5 2.5 2.5-1.12 2.5-2.5S12.88 9 11.5 9zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-3.21 14.21l-2.91-2.91c-.69.44-1.51.7-2.39.7C9.01 16 7 13.99 7 11.5S9.01 7 11.5 7 16 9.01 16 11.5c0 .88-.26 1.69-.7 2.39l2.91 2.9-1.42 1.42z"></path></g>
<g id="pan-tool"><path d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z"></path></g>
<g id="payment"><path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z"></path></g>
<g id="perm-camera-mic"><path d="M20 5h-3.17L15 3H9L7.17 5H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h7v-2.09c-2.83-.48-5-2.94-5-5.91h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 2.97-2.17 5.43-5 5.91V21h7c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-6 8c0 1.1-.9 2-2 2s-2-.9-2-2V9c0-1.1.9-2 2-2s2 .9 2 2v4z"></path></g>
<g id="perm-contact-calendar"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm6 12H6v-1c0-2 4-3.1 6-3.1s6 1.1 6 3.1v1z"></path></g>
<g id="perm-data-setting"><path d="M18.99 11.5c.34 0 .67.03 1 .07L20 0 0 20h11.56c-.04-.33-.07-.66-.07-1 0-4.14 3.36-7.5 7.5-7.5zm3.71 7.99c.02-.16.04-.32.04-.49 0-.17-.01-.33-.04-.49l1.06-.83c.09-.08.12-.21.06-.32l-1-1.73c-.06-.11-.19-.15-.31-.11l-1.24.5c-.26-.2-.54-.37-.85-.49l-.19-1.32c-.01-.12-.12-.21-.24-.21h-2c-.12 0-.23.09-.25.21l-.19 1.32c-.3.13-.59.29-.85.49l-1.24-.5c-.11-.04-.24 0-.31.11l-1 1.73c-.06.11-.04.24.06.32l1.06.83c-.02.16-.03.32-.03.49 0 .17.01.33.03.49l-1.06.83c-.09.08-.12.21-.06.32l1 1.73c.06.11.19.15.31.11l1.24-.5c.26.2.54.37.85.49l.19 1.32c.02.12.12.21.25.21h2c.12 0 .23-.09.25-.21l.19-1.32c.3-.13.59-.29.84-.49l1.25.5c.11.04.24 0 .31-.11l1-1.73c.06-.11.03-.24-.06-.32l-1.07-.83zm-3.71 1.01c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path></g>
<g id="perm-device-information"><path d="M13 7h-2v2h2V7zm0 4h-2v6h2v-6zm4-9.99L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"></path></g>
<g id="perm-identity"><path d="M12 5.9c1.16 0 2.1.94 2.1 2.1s-.94 2.1-2.1 2.1S9.9 9.16 9.9 8s.94-2.1 2.1-2.1m0 9c2.97 0 6.1 1.46 6.1 2.1v1.1H5.9V17c0-.64 3.13-2.1 6.1-2.1M12 4C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 9c-2.67 0-8 1.34-8 4v3h16v-3c0-2.66-5.33-4-8-4z"></path></g>
<g id="perm-media"><path d="M2 6H0v5h.01L0 20c0 1.1.9 2 2 2h18v-2H2V6zm20-2h-8l-2-2H6c-1.1 0-1.99.9-1.99 2L4 16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM7 15l4.5-6 3.5 4.51 2.5-3.01L21 15H7z"></path></g>
<g id="perm-phone-msg"><path d="M20 15.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM12 3v10l3-3h6V3h-9z"></path></g>
<g id="perm-scan-wifi"><path d="M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z"></path></g>
<g id="pets"><circle cx="4.5" cy="9.5" r="2.5"></circle><circle cx="9" cy="5.5" r="2.5"></circle><circle cx="15" cy="5.5" r="2.5"></circle><circle cx="19.5" cy="9.5" r="2.5"></circle><path d="M17.34 14.86c-.87-1.02-1.6-1.89-2.48-2.91-.46-.54-1.05-1.08-1.75-1.32-.11-.04-.22-.07-.33-.09-.25-.04-.52-.04-.78-.04s-.53 0-.79.05c-.11.02-.22.05-.33.09-.7.24-1.28.78-1.75 1.32-.87 1.02-1.6 1.89-2.48 2.91-1.31 1.31-2.92 2.76-2.62 4.79.29 1.02 1.02 2.03 2.33 2.32.73.15 3.06-.44 5.54-.44h.18c2.48 0 4.81.58 5.54.44 1.31-.29 2.04-1.31 2.33-2.32.31-2.04-1.3-3.49-2.61-4.8z"></path></g>
<g id="picture-in-picture"><path d="M19 7h-8v6h8V7zm2-4H3c-1.1 0-2 .9-2 2v14c0 1.1.9 1.98 2 1.98h18c1.1 0 2-.88 2-1.98V5c0-1.1-.9-2-2-2zm0 16.01H3V4.98h18v14.03z"></path></g>
<g id="picture-in-picture-alt"><path d="M19 11h-8v6h8v-6zm4 8V4.98C23 3.88 22.1 3 21 3H3c-1.1 0-2 .88-2 1.98V19c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2zm-2 .02H3V4.97h18v14.05z"></path></g>
<g id="play-for-work"><path d="M11 5v5.59H7.5l4.5 4.5 4.5-4.5H13V5h-2zm-5 9c0 3.31 2.69 6 6 6s6-2.69 6-6h-2c0 2.21-1.79 4-4 4s-4-1.79-4-4H6z"></path></g>
<g id="polymer"><path d="M19 4h-4L7.11 16.63 4.5 12 9 4H5L.5 12 5 20h4l7.89-12.63L19.5 12 15 20h4l4.5-8z"></path></g>
<g id="power-settings-new"><path d="M13 3h-2v10h2V3zm4.83 2.17l-1.42 1.42C17.99 7.86 19 9.81 19 12c0 3.87-3.13 7-7 7s-7-3.13-7-7c0-2.19 1.01-4.14 2.58-5.42L6.17 5.17C4.23 6.82 3 9.26 3 12c0 4.97 4.03 9 9 9s9-4.03 9-9c0-2.74-1.23-5.18-3.17-6.83z"></path></g>
<g id="pregnant-woman"><path d="M9 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm7 9c-.01-1.34-.83-2.51-2-3 0-1.66-1.34-3-3-3s-3 1.34-3 3v7h2v5h3v-5h3v-4z"></path></g>
<g id="print"><path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"></path></g>
<g id="query-builder"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="question-answer"><path d="M21 6h-2v9H6v2c0 .55.45 1 1 1h11l4 4V7c0-.55-.45-1-1-1zm-4 6V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v14l4-4h10c.55 0 1-.45 1-1z"></path></g>
<g id="radio-button-checked"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="radio-button-unchecked"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path></g>
<g id="receipt"><path d="M18 17H6v-2h12v2zm0-4H6v-2h12v2zm0-4H6V7h12v2zM3 22l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2 7.5 3.5 6 2 4.5 3.5 3 2v20z"></path></g>
<g id="record-voice-over"><circle cx="9" cy="9" r="4"></circle><path d="M9 15c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4zm7.76-9.64l-1.68 1.69c.84 1.18.84 2.71 0 3.89l1.68 1.69c2.02-2.02 2.02-5.07 0-7.27zM20.07 2l-1.63 1.63c2.77 3.02 2.77 7.56 0 10.74L20.07 16c3.9-3.89 3.91-9.95 0-14z"></path></g>
<g id="redeem"><path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"></path></g>
<g id="redo"><path d="M18.4 10.6C16.55 8.99 14.15 8 11.5 8c-4.65 0-8.58 3.03-9.96 7.22L3.9 16c1.05-3.19 4.05-5.5 7.6-5.5 1.95 0 3.73.72 5.12 1.88L13 16h9V7l-3.6 3.6z"></path></g>
<g id="refresh"><path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"></path></g>
<g id="remove"><path d="M19 13H5v-2h14v2z"></path></g>
<g id="remove-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 11H7v-2h10v2z"></path></g>
<g id="remove-circle-outline"><path d="M7 11v2h10v-2H7zm5-9C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"></path></g>
<g id="remove-shopping-cart"><path d="M22.73 22.73L2.77 2.77 2 2l-.73-.73L0 2.54l4.39 4.39 2.21 4.66-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h7.46l1.38 1.38c-.5.36-.83.95-.83 1.62 0 1.1.89 2 1.99 2 .67 0 1.26-.33 1.62-.84L21.46 24l1.27-1.27zM7.42 15c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h2.36l2 2H7.42zm8.13-2c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H6.54l9.01 9zM7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2z"></path></g>
<g id="reorder"><path d="M3 15h18v-2H3v2zm0 4h18v-2H3v2zm0-8h18V9H3v2zm0-6v2h18V5H3z"></path></g>
<g id="reply"><path d="M10 9V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="reply-all"><path d="M7 8V5l-7 7 7 7v-3l-4-4 4-4zm6 1V5l-7 7 7 7v-4.1c5 0 8.5 1.6 11 5.1-1-5-4-10-11-11z"></path></g>
<g id="report"><path d="M15.73 3H8.27L3 8.27v7.46L8.27 21h7.46L21 15.73V8.27L15.73 3zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3.72 0 1.3.58 1.3 1.3 0 .72-.58 1.3-1.3 1.3zm1-4.3h-2V7h2v6z"></path></g>
<g id="report-problem"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="restore"><path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"></path></g>
<g id="restore-page"><path d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm-2 16c-2.05 0-3.81-1.24-4.58-3h1.71c.63.9 1.68 1.5 2.87 1.5 1.93 0 3.5-1.57 3.5-3.5S13.93 9.5 12 9.5c-1.35 0-2.52.78-3.1 1.9l1.6 1.6h-4V9l1.3 1.3C8.69 8.92 10.23 8 12 8c2.76 0 5 2.24 5 5s-2.24 5-5 5z"></path></g>
<g id="room"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"></path></g>
<g id="rounded-corner"><path d="M19 19h2v2h-2v-2zm0-2h2v-2h-2v2zM3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm0-4h2V3H3v2zm4 0h2V3H7v2zm8 16h2v-2h-2v2zm-4 0h2v-2h-2v2zm4 0h2v-2h-2v2zm-8 0h2v-2H7v2zm-4 0h2v-2H3v2zM21 8c0-2.76-2.24-5-5-5h-5v2h5c1.65 0 3 1.35 3 3v5h2V8z"></path></g>
<g id="rowing"><path d="M8.5 14.5L4 19l1.5 1.5L9 17h2l-2.5-2.5zM15 1c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm6 20.01L18 24l-2.99-3.01V19.5l-7.1-7.09c-.31.05-.61.07-.91.07v-2.16c1.66.03 3.61-.87 4.67-2.04l1.4-1.55c.19-.21.43-.38.69-.5.29-.14.62-.23.96-.23h.03C15.99 6.01 17 7.02 17 8.26v5.75c0 .84-.35 1.61-.92 2.16l-3.58-3.58v-2.27c-.63.52-1.43 1.02-2.29 1.39L16.5 18H18l3 3.01z"></path></g>
<g id="save"><path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm-5 16c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-10H5V5h10v4z"></path></g>
<g id="schedule"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"></path></g>
<g id="search"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></g>
<g id="select-all"><path d="M3 5h2V3c-1.1 0-2 .9-2 2zm0 8h2v-2H3v2zm4 8h2v-2H7v2zM3 9h2V7H3v2zm10-6h-2v2h2V3zm6 0v2h2c0-1.1-.9-2-2-2zM5 21v-2H3c0 1.1.9 2 2 2zm-2-4h2v-2H3v2zM9 3H7v2h2V3zm2 18h2v-2h-2v2zm8-8h2v-2h-2v2zm0 8c1.1 0 2-.9 2-2h-2v2zm0-12h2V7h-2v2zm0 8h2v-2h-2v2zm-4 4h2v-2h-2v2zm0-16h2V3h-2v2zM7 17h10V7H7v10zm2-8h6v6H9V9z"></path></g>
<g id="send"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path></g>
<g id="settings"><path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z"></path></g>
<g id="settings-applications"><path d="M12 10c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm7-7H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-1.75 9c0 .23-.02.46-.05.68l1.48 1.16c.13.11.17.3.08.45l-1.4 2.42c-.09.15-.27.21-.43.15l-1.74-.7c-.36.28-.76.51-1.18.69l-.26 1.85c-.03.17-.18.3-.35.3h-2.8c-.17 0-.32-.13-.35-.29l-.26-1.85c-.43-.18-.82-.41-1.18-.69l-1.74.7c-.16.06-.34 0-.43-.15l-1.4-2.42c-.09-.15-.05-.34.08-.45l1.48-1.16c-.03-.23-.05-.46-.05-.69 0-.23.02-.46.05-.68l-1.48-1.16c-.13-.11-.17-.3-.08-.45l1.4-2.42c.09-.15.27-.21.43-.15l1.74.7c.36-.28.76-.51 1.18-.69l.26-1.85c.03-.17.18-.3.35-.3h2.8c.17 0 .32.13.35.29l.26 1.85c.43.18.82.41 1.18.69l1.74-.7c.16-.06.34 0 .43.15l1.4 2.42c.09.15.05.34-.08.45l-1.48 1.16c.03.23.05.46.05.69z"></path></g>
<g id="settings-backup-restore"><path d="M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2zm-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"></path></g>
<g id="settings-bluetooth"><path d="M11 24h2v-2h-2v2zm-4 0h2v-2H7v2zm8 0h2v-2h-2v2zm2.71-18.29L12 0h-1v7.59L6.41 3 5 4.41 10.59 10 5 15.59 6.41 17 11 12.41V20h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 3.83l1.88 1.88L13 7.59V3.83zm1.88 10.46L13 16.17v-3.76l1.88 1.88z"></path></g>
<g id="settings-brightness"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02zM8 16h2.5l1.5 1.5 1.5-1.5H16v-2.5l1.5-1.5-1.5-1.5V8h-2.5L12 6.5 10.5 8H8v2.5L6.5 12 8 13.5V16zm4-7c1.66 0 3 1.34 3 3s-1.34 3-3 3V9z"></path></g>
<g id="settings-cell"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm4 0h2v-2h-2v2zM16 .01L8 0C6.9 0 6 .9 6 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V2c0-1.1-.9-1.99-2-1.99zM16 16H8V4h8v12z"></path></g>
<g id="settings-ethernet"><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"></path></g>
<g id="settings-input-antenna"><path d="M12 5c-3.87 0-7 3.13-7 7h2c0-2.76 2.24-5 5-5s5 2.24 5 5h2c0-3.87-3.13-7-7-7zm1 9.29c.88-.39 1.5-1.26 1.5-2.29 0-1.38-1.12-2.5-2.5-2.5S9.5 10.62 9.5 12c0 1.02.62 1.9 1.5 2.29v3.3L7.59 21 9 22.41l3-3 3 3L16.41 21 13 17.59v-3.3zM12 1C5.93 1 1 5.93 1 12h2c0-4.97 4.03-9 9-9s9 4.03 9 9h2c0-6.07-4.93-11-11-11z"></path></g>
<g id="settings-input-component"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-composite"><path d="M5 2c0-.55-.45-1-1-1s-1 .45-1 1v4H1v6h6V6H5V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2H9v2zm-8 0c0 1.3.84 2.4 2 2.82V23h2v-4.18C6.16 18.4 7 17.3 7 16v-2H1v2zM21 6V2c0-.55-.45-1-1-1s-1 .45-1 1v4h-2v6h6V6h-2zm-8-4c0-.55-.45-1-1-1s-1 .45-1 1v4H9v6h6V6h-2V2zm4 14c0 1.3.84 2.4 2 2.82V23h2v-4.18c1.16-.41 2-1.51 2-2.82v-2h-6v2z"></path></g>
<g id="settings-input-hdmi"><path d="M18 7V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v3H5v6l3 6v3h8v-3l3-6V7h-1zM8 4h8v3h-2V5h-1v2h-2V5h-1v2H8V4z"></path></g>
<g id="settings-input-svideo"><path d="M8 11.5c0-.83-.67-1.5-1.5-1.5S5 10.67 5 11.5 5.67 13 6.5 13 8 12.33 8 11.5zm7-5c0-.83-.67-1.5-1.5-1.5h-3C9.67 5 9 5.67 9 6.5S9.67 8 10.5 8h3c.83 0 1.5-.67 1.5-1.5zM8.5 15c-.83 0-1.5.67-1.5 1.5S7.67 18 8.5 18s1.5-.67 1.5-1.5S9.33 15 8.5 15zM12 1C5.93 1 1 5.93 1 12s4.93 11 11 11 11-4.93 11-11S18.07 1 12 1zm0 20c-4.96 0-9-4.04-9-9s4.04-9 9-9 9 4.04 9 9-4.04 9-9 9zm5.5-11c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm-2 5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path></g>
<g id="settings-overscan"><path d="M12.01 5.5L10 8h4l-1.99-2.5zM18 10v4l2.5-1.99L18 10zM6 10l-2.5 2.01L6 14v-4zm8 6h-4l2.01 2.5L14 16zm7-13H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16.01H3V4.99h18v14.02z"></path></g>
<g id="settings-phone"><path d="M13 9h-2v2h2V9zm4 0h-2v2h2V9zm3 6.5c-1.25 0-2.45-.2-3.57-.57-.35-.11-.74-.03-1.02.24l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.58l2.2-2.21c.28-.27.36-.66.25-1.01C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.5c0-.55-.45-1-1-1zM19 9v2h2V9h-2z"></path></g>
<g id="settings-power"><path d="M7 24h2v-2H7v2zm4 0h2v-2h-2v2zm2-22h-2v10h2V2zm3.56 2.44l-1.45 1.45C16.84 6.94 18 8.83 18 11c0 3.31-2.69 6-6 6s-6-2.69-6-6c0-2.17 1.16-4.06 2.88-5.12L7.44 4.44C5.36 5.88 4 8.28 4 11c0 4.42 3.58 8 8 8s8-3.58 8-8c0-2.72-1.36-5.12-3.44-6.56zM15 24h2v-2h-2v2z"></path></g>
<g id="settings-remote"><path d="M15 9H9c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V10c0-.55-.45-1-1-1zm-3 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM7.05 6.05l1.41 1.41C9.37 6.56 10.62 6 12 6s2.63.56 3.54 1.46l1.41-1.41C15.68 4.78 13.93 4 12 4s-3.68.78-4.95 2.05zM12 0C8.96 0 6.21 1.23 4.22 3.22l1.41 1.41C7.26 3.01 9.51 2 12 2s4.74 1.01 6.36 2.64l1.41-1.41C17.79 1.23 15.04 0 12 0z"></path></g>
<g id="settings-voice"><path d="M7 24h2v-2H7v2zm5-11c1.66 0 2.99-1.34 2.99-3L15 4c0-1.66-1.34-3-3-3S9 2.34 9 4v6c0 1.66 1.34 3 3 3zm-1 11h2v-2h-2v2zm4 0h2v-2h-2v2zm4-14h-1.7c0 3-2.54 5.1-5.3 5.1S6.7 13 6.7 10H5c0 3.41 2.72 6.23 6 6.72V20h2v-3.28c3.28-.49 6-3.31 6-6.72z"></path></g>
<g id="shop"><path d="M16 6V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H2v13c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6h-6zm-6-2h4v2h-4V4zM9 18V9l7.5 4L9 18z"></path></g>
<g id="shop-two"><path d="M3 9H1v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2H3V9zm15-4V3c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H5v11c0 1.11.89 2 2 2h14c1.11 0 2-.89 2-2V5h-5zm-6-2h4v2h-4V3zm0 12V8l5.5 3-5.5 4z"></path></g>
<g id="shopping-basket"><path d="M17.21 9l-4.38-6.56c-.19-.28-.51-.42-.83-.42-.32 0-.64.14-.83.43L6.79 9H2c-.55 0-1 .45-1 1 0 .09.01.18.04.27l2.54 9.27c.23.84 1 1.46 1.92 1.46h13c.92 0 1.69-.62 1.93-1.46l2.54-9.27L23 10c0-.55-.45-1-1-1h-4.79zM9 9l3-4.4L15 9H9zm3 8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"></path></g>
<g id="shopping-cart"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path></g>
<g id="sort"><path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"></path></g>
<g id="speaker-notes"><path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM8 14H6v-2h2v2zm0-3H6V9h2v2zm0-3H6V6h2v2zm7 6h-5v-2h5v2zm3-3h-8V9h8v2zm0-3h-8V6h8v2z"></path></g>
<g id="speaker-notes-off"><path d="M10.54 11l-.54-.54L7.54 8 6 6.46 2.38 2.84 1.27 1.73 0 3l2.01 2.01L2 22l4-4h9l5.73 5.73L22 22.46 17.54 18l-7-7zM8 14H6v-2h2v2zm-2-3V9l2 2H6zm14-9H4.08L10 7.92V6h8v2h-7.92l1 1H18v2h-4.92l6.99 6.99C21.14 17.95 22 17.08 22 16V4c0-1.1-.9-2-2-2z"></path></g>
<g id="spellcheck"><path d="M12.45 16h2.09L9.43 3H7.57L2.46 16h2.09l1.12-3h5.64l1.14 3zm-6.02-5L8.5 5.48 10.57 11H6.43zm15.16.59l-8.09 8.09L9.83 16l-1.41 1.41 5.09 5.09L23 13l-1.41-1.41z"></path></g>
<g id="star"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></g>
<g id="star-border"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="star-half"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"></path></g>
<g id="stars"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z"></path></g>
<g id="store"><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"></path></g>
<g id="subdirectory-arrow-left"><path d="M11 9l1.42 1.42L8.83 14H18V4h2v12H8.83l3.59 3.58L11 21l-6-6 6-6z"></path></g>
<g id="subdirectory-arrow-right"><path d="M19 15l-6 6-1.42-1.42L15.17 16H4V4h2v10h9.17l-3.59-3.58L13 9l6 6z"></path></g>
<g id="subject"><path d="M14 17H4v2h10v-2zm6-8H4v2h16V9zM4 15h16v-2H4v2zM4 5v2h16V5H4z"></path></g>
<g id="supervisor-account"><path d="M16.5 12c1.38 0 2.49-1.12 2.49-2.5S17.88 7 16.5 7C15.12 7 14 8.12 14 9.5s1.12 2.5 2.5 2.5zM9 11c1.66 0 2.99-1.34 2.99-3S10.66 5 9 5C7.34 5 6 6.34 6 8s1.34 3 3 3zm7.5 3c-1.83 0-5.5.92-5.5 2.75V19h11v-2.25c0-1.83-3.67-2.75-5.5-2.75zM9 13c-2.33 0-7 1.17-7 3.5V19h7v-2.25c0-.85.33-2.34 2.37-3.47C10.5 13.1 9.66 13 9 13z"></path></g>
<g id="swap-horiz"><path d="M6.99 11L3 15l3.99 4v-3H14v-2H6.99v-3zM21 9l-3.99-4v3H10v2h7.01v3L21 9z"></path></g>
<g id="swap-vert"><path d="M16 17.01V10h-2v7.01h-3L15 21l4-3.99h-3zM9 3L5 6.99h3V14h2V6.99h3L9 3z"></path></g>
<g id="swap-vertical-circle"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM6.5 9L10 5.5 13.5 9H11v4H9V9H6.5zm11 6L14 18.5 10.5 15H13v-4h2v4h2.5z"></path></g>
<g id="system-update-alt"><path d="M12 16.5l4-4h-3v-9h-2v9H8l4 4zm9-13h-6v1.99h6v14.03H3V5.49h6V3.5H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-14c0-1.1-.9-2-2-2z"></path></g>
<g id="tab"><path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h10v4h8v10z"></path></g>
<g id="tab-unselected"><path d="M1 9h2V7H1v2zm0 4h2v-2H1v2zm0-8h2V3c-1.1 0-2 .9-2 2zm8 16h2v-2H9v2zm-8-4h2v-2H1v2zm2 4v-2H1c0 1.1.9 2 2 2zM21 3h-8v6h10V5c0-1.1-.9-2-2-2zm0 14h2v-2h-2v2zM9 5h2V3H9v2zM5 21h2v-2H5v2zM5 5h2V3H5v2zm16 16c1.1 0 2-.9 2-2h-2v2zm0-8h2v-2h-2v2zm-8 8h2v-2h-2v2zm4 0h2v-2h-2v2z"></path></g>
<g id="text-format"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"></path></g>
<g id="theaters"><path d="M18 3v2h-2V3H8v2H6V3H4v18h2v-2h2v2h8v-2h2v2h2V3h-2zM8 17H6v-2h2v2zm0-4H6v-2h2v2zm0-4H6V7h2v2zm10 8h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V7h2v2z"></path></g>
<g id="thumb-down"><path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"></path></g>
<g id="thumb-up"><path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"></path></g>
<g id="thumbs-up-down"><path d="M12 6c0-.55-.45-1-1-1H5.82l.66-3.18.02-.23c0-.31-.13-.59-.33-.8L5.38 0 .44 4.94C.17 5.21 0 5.59 0 6v6.5c0 .83.67 1.5 1.5 1.5h6.75c.62 0 1.15-.38 1.38-.91l2.26-5.29c.07-.17.11-.36.11-.55V6zm10.5 4h-6.75c-.62 0-1.15.38-1.38.91l-2.26 5.29c-.07.17-.11.36-.11.55V18c0 .55.45 1 1 1h5.18l-.66 3.18-.02.24c0 .31.13.59.33.8l.79.78 4.94-4.94c.27-.27.44-.65.44-1.06v-6.5c0-.83-.67-1.5-1.5-1.5z"></path></g>
<g id="timeline"><path d="M23 8c0 1.1-.9 2-2 2-.18 0-.35-.02-.51-.07l-3.56 3.55c.05.16.07.34.07.52 0 1.1-.9 2-2 2s-2-.9-2-2c0-.18.02-.36.07-.52l-2.55-2.55c-.16.05-.34.07-.52.07s-.36-.02-.52-.07l-4.55 4.56c.05.16.07.33.07.51 0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2c.18 0 .35.02.51.07l4.56-4.55C8.02 9.36 8 9.18 8 9c0-1.1.9-2 2-2s2 .9 2 2c0 .18-.02.36-.07.52l2.55 2.55c.16-.05.34-.07.52-.07s.36.02.52.07l3.55-3.56C19.02 8.35 19 8.18 19 8c0-1.1.9-2 2-2s2 .9 2 2z"></path></g>
<g id="toc"><path d="M3 9h14V7H3v2zm0 4h14v-2H3v2zm0 4h14v-2H3v2zm16 0h2v-2h-2v2zm0-10v2h2V7h-2zm0 6h2v-2h-2v2z"></path></g>
<g id="today"><path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"></path></g>
<g id="toll"><path d="M15 4c-4.42 0-8 3.58-8 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zM3 12c0-2.61 1.67-4.83 4-5.65V4.26C3.55 5.15 1 8.27 1 12s2.55 6.85 6 7.74v-2.09c-2.33-.82-4-3.04-4-5.65z"></path></g>
<g id="touch-app"><path d="M9 11.24V7.5C9 6.12 10.12 5 11.5 5S14 6.12 14 7.5v3.74c1.21-.81 2-2.18 2-3.74C16 5.01 13.99 3 11.5 3S7 5.01 7 7.5c0 1.56.79 2.93 2 3.74zm9.84 4.63l-4.54-2.26c-.17-.07-.35-.11-.54-.11H13v-6c0-.83-.67-1.5-1.5-1.5S10 6.67 10 7.5v10.74l-3.43-.72c-.08-.01-.15-.03-.24-.03-.31 0-.59.13-.79.33l-.79.8 4.94 4.94c.27.27.65.44 1.06.44h6.79c.75 0 1.33-.55 1.44-1.28l.75-5.27c.01-.07.02-.14.02-.2 0-.62-.38-1.16-.91-1.38z"></path></g>
<g id="track-changes"><path d="M19.07 4.93l-1.41 1.41C19.1 7.79 20 9.79 20 12c0 4.42-3.58 8-8 8s-8-3.58-8-8c0-4.08 3.05-7.44 7-7.93v2.02C8.16 6.57 6 9.03 6 12c0 3.31 2.69 6 6 6s6-2.69 6-6c0-1.66-.67-3.16-1.76-4.24l-1.41 1.41C15.55 9.9 16 10.9 16 12c0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.86 1.28-3.41 3-3.86v2.14c-.6.35-1 .98-1 1.72 0 1.1.9 2 2 2s2-.9 2-2c0-.74-.4-1.38-1-1.72V2h-1C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-2.76-1.12-5.26-2.93-7.07z"></path></g>
<g id="translate"><path d="M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z"></path></g>
<g id="trending-down"><path d="M16 18l2.29-2.29-4.88-4.88-4 4L2 7.41 3.41 6l6 6 4-4 6.3 6.29L22 12v6z"></path></g>
<g id="trending-flat"><path d="M22 12l-4-4v3H3v2h15v3z"></path></g>
<g id="trending-up"><path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"></path></g>
<g id="turned-in"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"></path></g>
<g id="turned-in-not"><path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2zm0 15l-5-2.18L7 18V5h10v13z"></path></g>
<g id="unarchive"><path d="M20.55 5.22l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.15.55L3.46 5.22C3.17 5.57 3 6.01 3 6.5V19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.49-.17-.93-.45-1.28zM12 9.5l5.5 5.5H14v2h-4v-2H6.5L12 9.5zM5.12 5l.82-1h12l.93 1H5.12z"></path></g>
<g id="undo"><path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z"></path></g>
<g id="unfold-less"><path d="M7.41 18.59L8.83 20 12 16.83 15.17 20l1.41-1.41L12 14l-4.59 4.59zm9.18-13.18L15.17 4 12 7.17 8.83 4 7.41 5.41 12 10l4.59-4.59z"></path></g>
<g id="unfold-more"><path d="M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z"></path></g>
<g id="update"><path d="M21 10.12h-6.78l2.74-2.82c-2.73-2.7-7.15-2.8-9.88-.1-2.73 2.71-2.73 7.08 0 9.79 2.73 2.71 7.15 2.71 9.88 0C18.32 15.65 19 14.08 19 12.1h2c0 1.98-.88 4.55-2.64 6.29-3.51 3.48-9.21 3.48-12.72 0-3.5-3.47-3.53-9.11-.02-12.58 3.51-3.47 9.14-3.47 12.65 0L21 3v7.12zM12.5 8v4.25l3.5 2.08-.72 1.21L11 13V8h1.5z"></path></g>
<g id="verified-user"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"></path></g>
<g id="view-agenda"><path d="M20 13H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zm0-10H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1z"></path></g>
<g id="view-array"><path d="M4 18h3V5H4v13zM18 5v13h3V5h-3zM8 18h9V5H8v13z"></path></g>
<g id="view-carousel"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"></path></g>
<g id="view-column"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"></path></g>
<g id="view-day"><path d="M2 21h19v-3H2v3zM20 8H3c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h17c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zM2 3v3h19V3H2z"></path></g>
<g id="view-headline"><path d="M4 15h16v-2H4v2zm0 4h16v-2H4v2zm0-8h16V9H4v2zm0-6v2h16V5H4z"></path></g>
<g id="view-list"><path d="M4 14h4v-4H4v4zm0 5h4v-4H4v4zM4 9h4V5H4v4zm5 5h12v-4H9v4zm0 5h12v-4H9v4zM9 5v4h12V5H9z"></path></g>
<g id="view-module"><path d="M4 11h5V5H4v6zm0 7h5v-6H4v6zm6 0h5v-6h-5v6zm6 0h5v-6h-5v6zm-6-7h5V5h-5v6zm6-6v6h5V5h-5z"></path></g>
<g id="view-quilt"><path d="M10 18h5v-6h-5v6zm-6 0h5V5H4v13zm12 0h5v-6h-5v6zM10 5v6h11V5H10z"></path></g>
<g id="view-stream"><path d="M4 18h17v-6H4v6zM4 5v6h17V5H4z"></path></g>
<g id="view-week"><path d="M6 5H3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm14 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zm-7 0h-3c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1z"></path></g>
<g id="visibility"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"></path></g>
<g id="visibility-off"><path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"></path></g>
<g id="warning"><path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"></path></g>
<g id="watch-later"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 14.2L11 13V7h1.5v5.2l4.5 2.7-.8 1.3z"></path></g>
<g id="weekend"><path d="M21 10c-1.1 0-2 .9-2 2v3H5v-3c0-1.1-.9-2-2-2s-2 .9-2 2v5c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2zm-3-5H6c-1.1 0-2 .9-2 2v2.15c1.16.41 2 1.51 2 2.82V14h12v-2.03c0-1.3.84-2.4 2-2.82V7c0-1.1-.9-2-2-2z"></path></g>
<g id="work"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></g>
<g id="youtube-searched-for"><path d="M17.01 14h-.8l-.27-.27c.98-1.14 1.57-2.61 1.57-4.23 0-3.59-2.91-6.5-6.5-6.5s-6.5 3-6.5 6.5H2l3.84 4 4.16-4H6.51C6.51 7 8.53 5 11.01 5s4.5 2.01 4.5 4.5c0 2.48-2.02 4.5-4.5 4.5-.65 0-1.26-.14-1.82-.38L7.71 15.1c.97.57 2.09.9 3.3.9 1.61 0 3.08-.59 4.22-1.57l.27.27v.79l5.01 4.99L22 19l-4.99-5z"></path></g>
<g id="zoom-in"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zm2.5-4h-2v2H9v-2H7V9h2V7h1v2h2v1z"></path></g>
<g id="zoom-out"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14zM7 9h5v1H7z"></path></g>
</defs></svg>
</iron-iconset-svg>`,document.head.appendChild($o),Ei({_template:Mi`
    <style>
      :host {
        display: inline-block;
        overflow: hidden;
        position: relative;
      }

      #baseURIAnchor {
        display: none;
      }

      #sizedImgDiv {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        display: none;
      }

      #img {
        display: block;
        width: var(--iron-image-width, auto);
        height: var(--iron-image-height, auto);
      }

      :host([sizing]) #sizedImgDiv {
        display: block;
      }

      :host([sizing]) #img {
        display: none;
      }

      #placeholder {
        position: absolute;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;

        background-color: inherit;
        opacity: 1;

        @apply --iron-image-placeholder;
      }

      #placeholder.faded-out {
        transition: opacity 0.5s linear;
        opacity: 0;
      }
    </style>

    <a id="baseURIAnchor" href="#"></a>
    <div id="sizedImgDiv" role="img" hidden\$="[[_computeImgDivHidden(sizing)]]" aria-hidden\$="[[_computeImgDivARIAHidden(alt)]]" aria-label\$="[[_computeImgDivARIALabel(alt, src)]]"></div>
    <img id="img" alt\$="[[alt]]" hidden\$="[[_computeImgHidden(sizing)]]" crossorigin\$="[[crossorigin]]" on-load="_imgOnLoad" on-error="_imgOnError">
    <div id="placeholder" hidden\$="[[_computePlaceholderHidden(preload, fade, loading, loaded)]]" class\$="[[_computePlaceholderClassName(preload, fade, loading, loaded)]]"></div>
`,is:"iron-image",properties:{src:{type:String,value:""},alt:{type:String,value:null},crossorigin:{type:String,value:null},preventLoad:{type:Boolean,value:!1},sizing:{type:String,value:null,reflectToAttribute:!0},position:{type:String,value:"center"},preload:{type:Boolean,value:!1},placeholder:{type:String,value:null,observer:"_placeholderChanged"},fade:{type:Boolean,value:!1},loaded:{notify:!0,readOnly:!0,type:Boolean,value:!1},loading:{notify:!0,readOnly:!0,type:Boolean,value:!1},error:{notify:!0,readOnly:!0,type:Boolean,value:!1},width:{observer:"_widthChanged",type:Number,value:null},height:{observer:"_heightChanged",type:Number,value:null}},observers:["_transformChanged(sizing, position)","_loadStateObserver(src, preventLoad)"],created:function(){this._resolvedSrc=""},_imgOnLoad:function(){this.$.img.src!==this._resolveSrc(this.src)||(this._setLoading(!1),this._setLoaded(!0),this._setError(!1))},_imgOnError:function(){this.$.img.src!==this._resolveSrc(this.src)||(this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",this._setLoading(!1),this._setLoaded(!1),this._setError(!0))},_computePlaceholderHidden:function(){return!this.preload||!this.fade&&!this.loading&&this.loaded},_computePlaceholderClassName:function(){return this.preload&&this.fade&&!this.loading&&this.loaded?"faded-out":""},_computeImgDivHidden:function(){return!this.sizing},_computeImgDivARIAHidden:function(){return""===this.alt?"true":void 0},_computeImgDivARIALabel:function(){if(null!==this.alt)return this.alt;if(""===this.src)return"";var e=this._resolveSrc(this.src);return e.replace(/[?|#].*/g,"").split("/").pop()},_computeImgHidden:function(){return!!this.sizing},_widthChanged:function(){this.style.width=isNaN(this.width)?this.width:this.width+"px"},_heightChanged:function(){this.style.height=isNaN(this.height)?this.height:this.height+"px"},_loadStateObserver:function(e,t){var a=this._resolveSrc(e);a===this._resolvedSrc||(this._resolvedSrc="",this.$.img.removeAttribute("src"),this.$.sizedImgDiv.style.backgroundImage="",""===e||t?(this._setLoading(!1),this._setLoaded(!1),this._setError(!1)):(this._resolvedSrc=a,this.$.img.src=this._resolvedSrc,this.$.sizedImgDiv.style.backgroundImage="url(\""+this._resolvedSrc+"\")",this._setLoading(!0),this._setLoaded(!1),this._setError(!1)))},_placeholderChanged:function(){this.$.placeholder.style.backgroundImage=this.placeholder?"url(\""+this.placeholder+"\")":""},_transformChanged:function(){var e=this.$.sizedImgDiv.style,t=this.$.placeholder.style;e.backgroundSize=t.backgroundSize=this.sizing,e.backgroundPosition=t.backgroundPosition=this.sizing?this.position:"",e.backgroundRepeat=t.backgroundRepeat=this.sizing?"no-repeat":""},_resolveSrc:function(e){var t=K(e,this.$.baseURIAnchor.href);return"/"===t[0]&&(t=(location.origin||location.protocol+"//"+location.host)+t),t}}),Ei({_template:Mi`
    <style>
      :host {
        display: inline-block;
      }
    </style>
    <slot id="content"></slot>
`,is:"iron-input",behaviors:[Oo],properties:{bindValue:{type:String},value:{type:String,computed:"_computeValue(bindValue)"},allowedPattern:{type:String},autoValidate:{type:Boolean,value:!1},_inputElement:Object},observers:["_bindValueChanged(bindValue, _inputElement)"],listeners:{input:"_onInput",keypress:"_onKeypress"},created:function(){go.requestAvailability(),this._previousValidInput="",this._patternAlreadyChecked=!1},attached:function(){this._observer=fi(this).observeNodes(function(){this._initSlottedInput()}.bind(this))},detached:function(){this._observer&&(fi(this).unobserveNodes(this._observer),this._observer=null)},get inputElement(){return this._inputElement},_initSlottedInput:function(){this._inputElement=this.getEffectiveChildren()[0],this.inputElement&&this.inputElement.value&&(this.bindValue=this.inputElement.value),this.fire("iron-input-ready")},get _patternRegExp(){var e;if(this.allowedPattern)e=new RegExp(this.allowedPattern);else switch(this.inputElement.type){case"number":e=/[0-9.,e-]/;}return e},_bindValueChanged:function(e,t){t&&(e===void 0?t.value=null:e!==t.value&&(this.inputElement.value=e),this.autoValidate&&this.validate(),this.fire("bind-value-changed",{value:e}))},_onInput:function(){if(this.allowedPattern&&!this._patternAlreadyChecked){var e=this._checkPatternValidity();e||(this._announceInvalidCharacter("Invalid string of characters not entered."),this.inputElement.value=this._previousValidInput)}this.bindValue=this._previousValidInput=this.inputElement.value,this._patternAlreadyChecked=!1},_isPrintable:function(e){var t=8==e.keyCode||9==e.keyCode||13==e.keyCode||27==e.keyCode,a=19==e.keyCode||20==e.keyCode||45==e.keyCode||46==e.keyCode||144==e.keyCode||145==e.keyCode||32<e.keyCode&&41>e.keyCode||111<e.keyCode&&124>e.keyCode;return!t&&!(0==e.charCode&&a)},_onKeypress:function(e){if(this.allowedPattern||"number"===this.inputElement.type){var t=this._patternRegExp;if(t&&!(e.metaKey||e.ctrlKey||e.altKey)){this._patternAlreadyChecked=!0;var a=La(e.charCode);this._isPrintable(e)&&!t.test(a)&&(e.preventDefault(),this._announceInvalidCharacter("Invalid character "+a+" not entered."))}}},_checkPatternValidity:function(){var e=this._patternRegExp;if(!e)return!0;for(var t=0;t<this.inputElement.value.length;t++)if(!e.test(this.inputElement.value[t]))return!1;return!0},validate:function(){if(!this.inputElement)return this.invalid=!1,!0;var e=this.inputElement.checkValidity();return e&&(this.required&&""===this.bindValue?e=!1:this.hasValidator()&&(e=Oo.validate.call(this,this.bindValue))),this.invalid=!e,this.fire("iron-input-validate"),e},_announceInvalidCharacter:function(e){this.fire("iron-announce",{text:e})},_computeValue:function(e){return e}});const Fo=function(e){this.selection=[],this.selectCallback=e};e.IronSelection=Fo,Fo.prototype={get:function(){return this.multi?this.selection.slice():this.selection[0]},clear:function(e){this.selection.slice().forEach(function(t){(!e||0>e.indexOf(t))&&this.setItemSelected(t,!1)},this)},isSelected:function(e){return 0<=this.selection.indexOf(e)},setItemSelected:function(e,t){if(null!=e&&t!==this.isSelected(e)){if(t)this.selection.push(e);else{var a=this.selection.indexOf(e);0<=a&&this.selection.splice(a,1)}this.selectCallback&&this.selectCallback(e,t)}},select:function(e){this.multi?this.toggle(e):this.get()!==e&&(this.setItemSelected(this.get(),!1),this.setItemSelected(e,!0))},toggle:function(e){this.setItemSelected(e,!this.isSelected(e))}};e.$ironSelection={IronSelection:Fo};const Ho={properties:{attrForSelected:{type:String,value:null},selected:{type:String,notify:!0},selectedItem:{type:Object,readOnly:!0,notify:!0},activateEvent:{type:String,value:"tap",observer:"_activateEventChanged"},selectable:String,selectedClass:{type:String,value:"iron-selected"},selectedAttribute:{type:String,value:null},fallbackSelection:{type:String,value:null},items:{type:Array,readOnly:!0,notify:!0,value:function(){return[]}},_excludedLocalNames:{type:Object,value:function(){return{template:1,"dom-bind":1,"dom-if":1,"dom-repeat":1}}}},observers:["_updateAttrForSelected(attrForSelected)","_updateSelected(selected)","_checkFallback(fallbackSelection)"],created:function(){this._bindFilterItem=this._filterItem.bind(this),this._selection=new Fo(this._applySelection.bind(this))},attached:function(){this._observer=this._observeItems(this),this._addListener(this.activateEvent)},detached:function(){this._observer&&fi(this).unobserveNodes(this._observer),this._removeListener(this.activateEvent)},indexOf:function(e){return this.items?this.items.indexOf(e):-1},select:function(e){this.selected=e},selectPrevious:function(){var e=this.items.length,t=(+this._valueToIndex(this.selected)-1+e)%e;this.selected=this._indexToValue(t)},selectNext:function(){var e=(+this._valueToIndex(this.selected)+1)%this.items.length;this.selected=this._indexToValue(e)},selectIndex:function(e){this.select(this._indexToValue(e))},forceSynchronousItemUpdate:function(){this._observer&&"function"===typeof this._observer.flush?this._observer.flush():this._updateItems()},get _shouldUpdateSelection(){return null!=this.selected},_checkFallback:function(){this._updateSelected()},_addListener:function(e){this.listen(this,e,"_activateHandler")},_removeListener:function(e){this.unlisten(this,e,"_activateHandler")},_activateEventChanged:function(e,t){this._removeListener(t),this._addListener(e)},_updateItems:function(){var e=fi(this).queryDistributedElements(this.selectable||"*");e=Array.prototype.filter.call(e,this._bindFilterItem),this._setItems(e)},_updateAttrForSelected:function(){this.selectedItem&&(this.selected=this._valueForItem(this.selectedItem))},_updateSelected:function(){this._selectSelected(this.selected)},_selectSelected:function(){if(this.items){var e=this._valueToItem(this.selected);e?this._selection.select(e):this._selection.clear(),this.fallbackSelection&&this.items.length&&void 0===this._selection.get()&&(this.selected=this.fallbackSelection)}},_filterItem:function(e){return!this._excludedLocalNames[e.localName]},_valueToItem:function(e){return null==e?null:this.items[this._valueToIndex(e)]},_valueToIndex:function(e){if(this.attrForSelected){for(var t=0,a;a=this.items[t];t++)if(this._valueForItem(a)==e)return t;}else return+e},_indexToValue:function(e){if(this.attrForSelected){var t=this.items[e];if(t)return this._valueForItem(t)}else return e},_valueForItem:function(e){if(!e)return null;if(!this.attrForSelected){var t=this.indexOf(e);return-1===t?null:t}var a=e[fe(this.attrForSelected)];return a==void 0?e.getAttribute(this.attrForSelected):a},_applySelection:function(e,t){this.selectedClass&&this.toggleClass(this.selectedClass,t,e),this.selectedAttribute&&this.toggleAttribute(this.selectedAttribute,t,e),this._selectionChange(),this.fire("iron-"+(t?"select":"deselect"),{item:e})},_selectionChange:function(){this._setSelectedItem(this._selection.get())},_observeItems:function(e){return fi(e).observeNodes(function(e){this._updateItems(),this._updateSelected(),this.fire("iron-items-changed",e,{bubbles:!1,cancelable:!1})})},_activateHandler:function(a){for(var e=a.target,t=this.items;e&&e!=this;){var n=t.indexOf(e);if(0<=n){var r=this._indexToValue(n);return void this._itemActivate(r,e)}e=e.parentNode}},_itemActivate:function(e,t){this.fire("iron-activate",{selected:e,item:t},{cancelable:!0}).defaultPrevented||this.select(e)}};e.IronSelectableBehavior=Ho;e.$ironSelectable={IronSelectableBehavior:Ho},Ei({_template:Mi`
    <style>
      :host {
        display: block;
      }

      :host > ::slotted(:not(slot):not(.iron-selected)) {
        display: none !important;
      }
    </style>

    <slot></slot>
`,is:"iron-pages",behaviors:[Ji,Ho],properties:{activateEvent:{type:String,value:null}},observers:["_selectedPageChanged(selected)"],_selectedPageChanged:function(){this.async(this.notifyResize)}});const Vo={properties:{value:{type:Number,value:0,notify:!0,reflectToAttribute:!0},min:{type:Number,value:0,notify:!0},max:{type:Number,value:100,notify:!0},step:{type:Number,value:1,notify:!0},ratio:{type:Number,value:0,readOnly:!0,notify:!0}},observers:["_update(value, min, max, step)"],_calcRatio:function(e){return(this._clampValue(e)-this.min)/(this.max-this.min)},_clampValue:function(e){return $a(this.max,Ma(this.min,this._calcStep(e)))},_calcStep:function(e){if(e=parseFloat(e),!this.step)return e;var t=Ba((e-this.min)/this.step);return 1>this.step?t/(1/this.step)+this.min:t*this.step+this.min},_validateValue:function(){var e=this._clampValue(this.value);return this.value=this.oldValue=isNaN(e)?this.oldValue:e,this.value!==e},_update:function(){this._validateValue(),this._setRatio(100*this._calcRatio(this.value))}};e.IronRangeBehavior=Vo;e.$ironRangeBehavior={IronRangeBehavior:Vo};var zo={distance:function(e,t,a,n){var r=e-a,i=t-n;return Na(r*r+i*i)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};Da.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function(e,t){var a=zo.distance(e,t,0,0),n=zo.distance(e,t,this.width,0),r=zo.distance(e,t,0,this.height),i=zo.distance(e,t,this.width,this.height);return Ma(a,n,r,i)}},Oa.MAX_RADIUS=300,Oa.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var e;return this.mouseDownStart?(e=zo.now()-this.mouseDownStart,this.mouseUpStart&&(e-=this.mouseUpElapsed),e):0},get mouseUpElapsed(){return this.mouseUpStart?zo.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var e=this.containerMetrics.width*this.containerMetrics.width,t=this.containerMetrics.height*this.containerMetrics.height,a=1.1*$a(Na(e+t),Oa.MAX_RADIUS)+5,n=1.1-.2*(a/Oa.MAX_RADIUS),r=this.mouseInteractionSeconds/n,i=a*(1-Math.pow(80,-r));return Fa(i)},get opacity(){return this.mouseUpStart?Ma(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity):this.initialOpacity},get outerOpacity(){var e=.3*this.mouseUpElapsedSeconds,t=this.opacity;return Ma(0,$a(e,t))},get isOpacityFullyDecayed(){return .01>this.opacity&&this.radius>=$a(this.maxRadius,Oa.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=$a(this.maxRadius,Oa.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return $a(1,2*(this.radius/this.containerMetrics.size)/1.4142135623730951)},get xNow(){return this.xEnd?this.xStart+this.translationFraction*(this.xEnd-this.xStart):this.xStart},get yNow(){return this.yEnd?this.yStart+this.translationFraction*(this.yEnd-this.yStart):this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function(){this.maxRadius=0,this.mouseDownStart=0,this.mouseUpStart=0,this.xStart=0,this.yStart=0,this.xEnd=0,this.yEnd=0,this.slideDistance=0,this.containerMetrics=new Da(this.element)},draw:function(){var e,t,a;this.wave.style.opacity=this.opacity,e=this.radius/(this.containerMetrics.size/2),t=this.xNow-this.containerMetrics.width/2,a=this.yNow-this.containerMetrics.height/2,this.waveContainer.style.webkitTransform="translate("+t+"px, "+a+"px)",this.waveContainer.style.transform="translate3d("+t+"px, "+a+"px, 0)",this.wave.style.webkitTransform="scale("+e+","+e+")",this.wave.style.transform="scale3d("+e+","+e+",1)"},downAction:function(e){var t=this.containerMetrics.width/2,a=this.containerMetrics.height/2;this.resetInteractionState(),this.mouseDownStart=zo.now(),this.center?(this.xStart=t,this.yStart=a,this.slideDistance=zo.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)):(this.xStart=e?e.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2,this.yStart=e?e.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2),this.recenters&&(this.xEnd=t,this.yEnd=a,this.slideDistance=zo.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)),this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart),this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px",this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px",this.waveContainer.style.width=this.containerMetrics.size+"px",this.waveContainer.style.height=this.containerMetrics.size+"px"},upAction:function(){this.isMouseDown&&(this.mouseUpStart=zo.now())},remove:function(){fi(this.waveContainer.parentNode).removeChild(this.waveContainer)}},Ei({_template:Mi`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,is:"paper-ripple",behaviors:[Ao],properties:{initialOpacity:{type:Number,value:.25},opacityDecayVelocity:{type:Number,value:.8},recenters:{type:Boolean,value:!1},center:{type:Boolean,value:!1},ripples:{type:Array,value:function(){return[]}},animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function(){this.keyEventTarget=11==this.parentNode.nodeType?fi(this).getOwnerRoot().host:this.parentNode;var e=this.keyEventTarget;this.listen(e,"up","uiUpAction"),this.listen(e,"down","uiDownAction")},detached:function(){this.unlisten(this.keyEventTarget,"up","uiUpAction"),this.unlisten(this.keyEventTarget,"down","uiDownAction"),this.keyEventTarget=null},get shouldKeepAnimating(){for(var e=0;e<this.ripples.length;++e)if(!this.ripples[e].isAnimationComplete)return!0;return!1},simulatedRipple:function(){this.downAction(null),this.async(function(){this.upAction()},1)},uiDownAction:function(e){this.noink||this.downAction(e)},downAction:function(e){if(!(this.holdDown&&0<this.ripples.length)){var t=this.addRipple();t.downAction(e),this._animating||(this._animating=!0,this.animate())}},uiUpAction:function(e){this.noink||this.upAction(e)},upAction:function(e){this.holdDown||(this.ripples.forEach(function(t){t.upAction(e)}),this._animating=!0,this.animate())},onAnimationComplete:function(){this._animating=!1,this.$.background.style.backgroundColor=null,this.fire("transitionend")},addRipple:function(){var e=new Oa(this);return fi(this.$.waves).appendChild(e.waveContainer),this.$.background.style.backgroundColor=e.color,this.ripples.push(e),this._setAnimating(!0),e},removeRipple:function(e){var t=this.ripples.indexOf(e);0>t||(this.ripples.splice(t,1),e.remove(),!this.ripples.length&&this._setAnimating(!1))},animate:function(){if(this._animating){var e,t;for(e=0;e<this.ripples.length;++e)t=this.ripples[e],t.draw(),this.$.background.style.opacity=t.outerOpacity,t.isOpacityFullyDecayed&&!t.isRestingAtMaxRadius&&this.removeRipple(t);this.shouldKeepAnimating||0!==this.ripples.length?window.requestAnimationFrame(this._boundAnimate):this.onAnimationComplete()}},_onEnterKeydown:function(){this.uiDownAction(),this.async(this.uiUpAction,1)},_onSpaceKeydown:function(){this.uiDownAction()},_onSpaceKeyup:function(){this.uiUpAction()},_holdDownChanged:function(e,t){void 0===t||(e?this.downAction():this.upAction())}});const qo={properties:{noink:{type:Boolean,observer:"_noinkChanged"},_rippleContainer:{type:Object}},_buttonStateChanged:function(){this.focused&&this.ensureRipple()},_downHandler:function(e){xo._downHandler.call(this,e),this.pressed&&this.ensureRipple(e)},ensureRipple:function(e){if(!this.hasRipple()){this._ripple=this._createRipple(),this._ripple.noink=this.noink;var t=this._rippleContainer||this.root;if(t&&fi(t).appendChild(this._ripple),e){var a=fi(this._rippleContainer||this),n=fi(e).rootTarget;a.deepContains(n)&&this._ripple.uiDownAction(e)}}},getRipple:function(){return this.ensureRipple(),this._ripple},hasRipple:function(){return!!this._ripple},_createRipple:function(){var e=document.createElement("paper-ripple");return e},_noinkChanged:function(e){this.hasRipple()&&(this._ripple.noink=e)}};e.PaperRippleBehavior=qo;e.$paperRippleBehavior={PaperRippleBehavior:qo};const Ko={properties:{elevation:{type:Number,reflectToAttribute:!0,readOnly:!0}},observers:["_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)","_computeKeyboardClass(receivedFocusFromKeyboard)"],hostAttributes:{role:"button",tabindex:"0",animated:!0},_calculateElevation:function(){var t=1;this.disabled?t=0:this.active||this.pressed?t=4:this.receivedFocusFromKeyboard&&(t=3),this._setElevation(t)},_computeKeyboardClass:function(e){this.toggleClass("keyboard-focus",e)},_spaceKeyDownHandler:function(e){xo._spaceKeyDownHandler.call(this,e),this.hasRipple()&&1>this.getRipple().ripples.length&&this._ripple.uiDownAction()},_spaceKeyUpHandler:function(e){xo._spaceKeyUpHandler.call(this,e),this.hasRipple()&&this._ripple.uiUpAction()}};e.PaperButtonBehaviorImpl=Ko;const Uo=[Ro,Io,qo,Ko];e.PaperButtonBehavior=Uo;e.$paperButtonBehavior={PaperButtonBehaviorImpl:Ko,PaperButtonBehavior:Uo};const Yo={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.holdDown=e)},_createRipple:function(){var e=qo._createRipple();return e.id="ink",e.setAttribute("center",""),e.classList.add("circle"),e}};e.PaperInkyFocusBehaviorImpl=Yo;const jo=[Ro,Io,qo,Yo];e.PaperInkyFocusBehavior=jo;e.$paperInkyFocusBehavior={PaperInkyFocusBehaviorImpl:Yo,PaperInkyFocusBehavior:jo};const Go={_checkedChanged:function(){Mo._checkedChanged.call(this),this.hasRipple()&&(this.checked?this._ripple.setAttribute("checked",""):this._ripple.removeAttribute("checked"))},_buttonStateChanged:function(){qo._buttonStateChanged.call(this);this.disabled||this.isAttached&&(this.checked=this.active)}};e.PaperCheckedElementBehaviorImpl=Go;const Wo=[jo,Bo,Go];e.PaperCheckedElementBehavior=Wo;e.$paperCheckedElementBehavior={PaperCheckedElementBehaviorImpl:Go,PaperCheckedElementBehavior:Wo};const Xo=document.createElement("div");Xo.setAttribute("style","display: none;"),Xo.innerHTML=`<custom-style>
  <style is="custom-style">
    html {

      --shadow-transition: {
        transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
      };

      --shadow-none: {
        box-shadow: none;
      };

      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */

      --shadow-elevation-2dp: {
        box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
                    0 1px 5px 0 rgba(0, 0, 0, 0.12),
                    0 3px 1px -2px rgba(0, 0, 0, 0.2);
      };

      --shadow-elevation-3dp: {
        box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.14),
                    0 1px 8px 0 rgba(0, 0, 0, 0.12),
                    0 3px 3px -2px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-4dp: {
        box-shadow: 0 4px 5px 0 rgba(0, 0, 0, 0.14),
                    0 1px 10px 0 rgba(0, 0, 0, 0.12),
                    0 2px 4px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-6dp: {
        box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14),
                    0 1px 18px 0 rgba(0, 0, 0, 0.12),
                    0 3px 5px -1px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-8dp: {
        box-shadow: 0 8px 10px 1px rgba(0, 0, 0, 0.14),
                    0 3px 14px 2px rgba(0, 0, 0, 0.12),
                    0 5px 5px -3px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-12dp: {
        box-shadow: 0 12px 16px 1px rgba(0, 0, 0, 0.14),
                    0 4px 22px 3px rgba(0, 0, 0, 0.12),
                    0 6px 7px -4px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-16dp: {
        box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
                    0  6px 30px 5px rgba(0, 0, 0, 0.12),
                    0  8px 10px -5px rgba(0, 0, 0, 0.4);
      };

      --shadow-elevation-24dp: {
        box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
                    0 9px 46px 8px rgba(0, 0, 0, 0.12),
                    0 11px 15px -7px rgba(0, 0, 0, 0.4);
      };
    }
  </style>
</custom-style>`,document.head.appendChild(Xo);const Qo=document.createElement("div");Qo.setAttribute("style","display: none;"),Qo.innerHTML=`<dom-module id="paper-material-styles">
  <template>
    <style>
      :host, html {
        --paper-material: {
          display: block;
          position: relative;
        };
        --paper-material-elevation-1: {
          @apply --shadow-elevation-2dp;
        };
        --paper-material-elevation-2: {
          @apply --shadow-elevation-4dp;
        };
        --paper-material-elevation-3: {
          @apply --shadow-elevation-6dp;
        };
        --paper-material-elevation-4: {
          @apply --shadow-elevation-8dp;
        };
        --paper-material-elevation-5: {
          @apply --shadow-elevation-16dp;
        };
      }
      :host(.paper-material), .paper-material {
        @apply --paper-material;
      }
      :host(.paper-material[elevation="1"]), .paper-material[elevation="1"] {
        @apply --paper-material-elevation-1;
      }
      :host(.paper-material[elevation="2"]), .paper-material[elevation="2"] {
        @apply --paper-material-elevation-2;
      }
      :host(.paper-material[elevation="3"]), .paper-material[elevation="3"] {
        @apply --paper-material-elevation-3;
      }
      :host(.paper-material[elevation="4"]), .paper-material[elevation="4"] {
        @apply --paper-material-elevation-4;
      }
      :host(.paper-material[elevation="5"]), .paper-material[elevation="5"] {
        @apply --paper-material-elevation-5;
      }
    </style>
  </template>
</dom-module>`,document.head.appendChild(Qo);const Jo=document.createElement("div");Jo.setAttribute("style","display: none;"),Jo.innerHTML=`<dom-module id="paper-button">
  <template strip-whitespace="">
    <style include="paper-material-styles">
      /* Need to specify the same specificity as the styles imported from paper-material. */
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;
        box-sizing: border-box;
        min-width: 5.14em;
        margin: 0 0.29em;
        background: transparent;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;
        font: inherit;
        text-transform: uppercase;
        outline-width: 0;
        border-radius: 3px;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        padding: 0.7em 0.57em;

        @apply --paper-font-common-base;
        @apply --paper-button;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([raised].keyboard-focus) {
        font-weight: bold;
        @apply --paper-button-raised-keyboard-focus;
      }

      :host(:not([raised]).keyboard-focus) {
        font-weight: bold;
        @apply --paper-button-flat-keyboard-focus;
      }

      :host([disabled]) {
        background: #eaeaea;
        color: #a8a8a8;
        cursor: auto;
        pointer-events: none;

        @apply --paper-button-disabled;
      }

      :host([animated]) {
        @apply --shadow-transition;
      }

      paper-ripple {
        color: var(--paper-button-ink-color);
      }
    </style>

    <slot></slot>
  </template>

  
</dom-module>`,document.head.appendChild(Jo),Ei({is:"paper-button",behaviors:[Uo],properties:{raised:{type:Boolean,reflectToAttribute:!0,value:!1,observer:"_calculateElevation"}},_calculateElevation:function(){this.raised?Ko._calculateElevation.apply(this):this._setElevation(0)}});const Zo=document.createElement("div");Zo.setAttribute("style","display: none;"),Zo.innerHTML=`<custom-style>
  <style is="custom-style">
    html {

      /* Material Design color palette for Google products */

      --google-red-100: #f4c7c3;
      --google-red-300: #e67c73;
      --google-red-500: #db4437;
      --google-red-700: #c53929;

      --google-blue-100: #c6dafc;
      --google-blue-300: #7baaf7;
      --google-blue-500: #4285f4;
      --google-blue-700: #3367d6;

      --google-green-100: #b7e1cd;
      --google-green-300: #57bb8a;
      --google-green-500: #0f9d58;
      --google-green-700: #0b8043;

      --google-yellow-100: #fce8b2;
      --google-yellow-300: #f7cb4d;
      --google-yellow-500: #f4b400;
      --google-yellow-700: #f09300;

      --google-grey-100: #f5f5f5;
      --google-grey-300: #e0e0e0;
      --google-grey-500: #9e9e9e;
      --google-grey-700: #616161;

      /* Material Design color palette from online spec document */

      --paper-red-50: #ffebee;
      --paper-red-100: #ffcdd2;
      --paper-red-200: #ef9a9a;
      --paper-red-300: #e57373;
      --paper-red-400: #ef5350;
      --paper-red-500: #f44336;
      --paper-red-600: #e53935;
      --paper-red-700: #d32f2f;
      --paper-red-800: #c62828;
      --paper-red-900: #b71c1c;
      --paper-red-a100: #ff8a80;
      --paper-red-a200: #ff5252;
      --paper-red-a400: #ff1744;
      --paper-red-a700: #d50000;

      --paper-pink-50: #fce4ec;
      --paper-pink-100: #f8bbd0;
      --paper-pink-200: #f48fb1;
      --paper-pink-300: #f06292;
      --paper-pink-400: #ec407a;
      --paper-pink-500: #e91e63;
      --paper-pink-600: #d81b60;
      --paper-pink-700: #c2185b;
      --paper-pink-800: #ad1457;
      --paper-pink-900: #880e4f;
      --paper-pink-a100: #ff80ab;
      --paper-pink-a200: #ff4081;
      --paper-pink-a400: #f50057;
      --paper-pink-a700: #c51162;

      --paper-purple-50: #f3e5f5;
      --paper-purple-100: #e1bee7;
      --paper-purple-200: #ce93d8;
      --paper-purple-300: #ba68c8;
      --paper-purple-400: #ab47bc;
      --paper-purple-500: #9c27b0;
      --paper-purple-600: #8e24aa;
      --paper-purple-700: #7b1fa2;
      --paper-purple-800: #6a1b9a;
      --paper-purple-900: #4a148c;
      --paper-purple-a100: #ea80fc;
      --paper-purple-a200: #e040fb;
      --paper-purple-a400: #d500f9;
      --paper-purple-a700: #aa00ff;

      --paper-deep-purple-50: #ede7f6;
      --paper-deep-purple-100: #d1c4e9;
      --paper-deep-purple-200: #b39ddb;
      --paper-deep-purple-300: #9575cd;
      --paper-deep-purple-400: #7e57c2;
      --paper-deep-purple-500: #673ab7;
      --paper-deep-purple-600: #5e35b1;
      --paper-deep-purple-700: #512da8;
      --paper-deep-purple-800: #4527a0;
      --paper-deep-purple-900: #311b92;
      --paper-deep-purple-a100: #b388ff;
      --paper-deep-purple-a200: #7c4dff;
      --paper-deep-purple-a400: #651fff;
      --paper-deep-purple-a700: #6200ea;

      --paper-indigo-50: #e8eaf6;
      --paper-indigo-100: #c5cae9;
      --paper-indigo-200: #9fa8da;
      --paper-indigo-300: #7986cb;
      --paper-indigo-400: #5c6bc0;
      --paper-indigo-500: #3f51b5;
      --paper-indigo-600: #3949ab;
      --paper-indigo-700: #303f9f;
      --paper-indigo-800: #283593;
      --paper-indigo-900: #1a237e;
      --paper-indigo-a100: #8c9eff;
      --paper-indigo-a200: #536dfe;
      --paper-indigo-a400: #3d5afe;
      --paper-indigo-a700: #304ffe;

      --paper-blue-50: #e3f2fd;
      --paper-blue-100: #bbdefb;
      --paper-blue-200: #90caf9;
      --paper-blue-300: #64b5f6;
      --paper-blue-400: #42a5f5;
      --paper-blue-500: #2196f3;
      --paper-blue-600: #1e88e5;
      --paper-blue-700: #1976d2;
      --paper-blue-800: #1565c0;
      --paper-blue-900: #0d47a1;
      --paper-blue-a100: #82b1ff;
      --paper-blue-a200: #448aff;
      --paper-blue-a400: #2979ff;
      --paper-blue-a700: #2962ff;

      --paper-light-blue-50: #e1f5fe;
      --paper-light-blue-100: #b3e5fc;
      --paper-light-blue-200: #81d4fa;
      --paper-light-blue-300: #4fc3f7;
      --paper-light-blue-400: #29b6f6;
      --paper-light-blue-500: #03a9f4;
      --paper-light-blue-600: #039be5;
      --paper-light-blue-700: #0288d1;
      --paper-light-blue-800: #0277bd;
      --paper-light-blue-900: #01579b;
      --paper-light-blue-a100: #80d8ff;
      --paper-light-blue-a200: #40c4ff;
      --paper-light-blue-a400: #00b0ff;
      --paper-light-blue-a700: #0091ea;

      --paper-cyan-50: #e0f7fa;
      --paper-cyan-100: #b2ebf2;
      --paper-cyan-200: #80deea;
      --paper-cyan-300: #4dd0e1;
      --paper-cyan-400: #26c6da;
      --paper-cyan-500: #00bcd4;
      --paper-cyan-600: #00acc1;
      --paper-cyan-700: #0097a7;
      --paper-cyan-800: #00838f;
      --paper-cyan-900: #006064;
      --paper-cyan-a100: #84ffff;
      --paper-cyan-a200: #18ffff;
      --paper-cyan-a400: #00e5ff;
      --paper-cyan-a700: #00b8d4;

      --paper-teal-50: #e0f2f1;
      --paper-teal-100: #b2dfdb;
      --paper-teal-200: #80cbc4;
      --paper-teal-300: #4db6ac;
      --paper-teal-400: #26a69a;
      --paper-teal-500: #009688;
      --paper-teal-600: #00897b;
      --paper-teal-700: #00796b;
      --paper-teal-800: #00695c;
      --paper-teal-900: #004d40;
      --paper-teal-a100: #a7ffeb;
      --paper-teal-a200: #64ffda;
      --paper-teal-a400: #1de9b6;
      --paper-teal-a700: #00bfa5;

      --paper-green-50: #e8f5e9;
      --paper-green-100: #c8e6c9;
      --paper-green-200: #a5d6a7;
      --paper-green-300: #81c784;
      --paper-green-400: #66bb6a;
      --paper-green-500: #4caf50;
      --paper-green-600: #43a047;
      --paper-green-700: #388e3c;
      --paper-green-800: #2e7d32;
      --paper-green-900: #1b5e20;
      --paper-green-a100: #b9f6ca;
      --paper-green-a200: #69f0ae;
      --paper-green-a400: #00e676;
      --paper-green-a700: #00c853;

      --paper-light-green-50: #f1f8e9;
      --paper-light-green-100: #dcedc8;
      --paper-light-green-200: #c5e1a5;
      --paper-light-green-300: #aed581;
      --paper-light-green-400: #9ccc65;
      --paper-light-green-500: #8bc34a;
      --paper-light-green-600: #7cb342;
      --paper-light-green-700: #689f38;
      --paper-light-green-800: #558b2f;
      --paper-light-green-900: #33691e;
      --paper-light-green-a100: #ccff90;
      --paper-light-green-a200: #b2ff59;
      --paper-light-green-a400: #76ff03;
      --paper-light-green-a700: #64dd17;

      --paper-lime-50: #f9fbe7;
      --paper-lime-100: #f0f4c3;
      --paper-lime-200: #e6ee9c;
      --paper-lime-300: #dce775;
      --paper-lime-400: #d4e157;
      --paper-lime-500: #cddc39;
      --paper-lime-600: #c0ca33;
      --paper-lime-700: #afb42b;
      --paper-lime-800: #9e9d24;
      --paper-lime-900: #827717;
      --paper-lime-a100: #f4ff81;
      --paper-lime-a200: #eeff41;
      --paper-lime-a400: #c6ff00;
      --paper-lime-a700: #aeea00;

      --paper-yellow-50: #fffde7;
      --paper-yellow-100: #fff9c4;
      --paper-yellow-200: #fff59d;
      --paper-yellow-300: #fff176;
      --paper-yellow-400: #ffee58;
      --paper-yellow-500: #ffeb3b;
      --paper-yellow-600: #fdd835;
      --paper-yellow-700: #fbc02d;
      --paper-yellow-800: #f9a825;
      --paper-yellow-900: #f57f17;
      --paper-yellow-a100: #ffff8d;
      --paper-yellow-a200: #ffff00;
      --paper-yellow-a400: #ffea00;
      --paper-yellow-a700: #ffd600;

      --paper-amber-50: #fff8e1;
      --paper-amber-100: #ffecb3;
      --paper-amber-200: #ffe082;
      --paper-amber-300: #ffd54f;
      --paper-amber-400: #ffca28;
      --paper-amber-500: #ffc107;
      --paper-amber-600: #ffb300;
      --paper-amber-700: #ffa000;
      --paper-amber-800: #ff8f00;
      --paper-amber-900: #ff6f00;
      --paper-amber-a100: #ffe57f;
      --paper-amber-a200: #ffd740;
      --paper-amber-a400: #ffc400;
      --paper-amber-a700: #ffab00;

      --paper-orange-50: #fff3e0;
      --paper-orange-100: #ffe0b2;
      --paper-orange-200: #ffcc80;
      --paper-orange-300: #ffb74d;
      --paper-orange-400: #ffa726;
      --paper-orange-500: #ff9800;
      --paper-orange-600: #fb8c00;
      --paper-orange-700: #f57c00;
      --paper-orange-800: #ef6c00;
      --paper-orange-900: #e65100;
      --paper-orange-a100: #ffd180;
      --paper-orange-a200: #ffab40;
      --paper-orange-a400: #ff9100;
      --paper-orange-a700: #ff6500;

      --paper-deep-orange-50: #fbe9e7;
      --paper-deep-orange-100: #ffccbc;
      --paper-deep-orange-200: #ffab91;
      --paper-deep-orange-300: #ff8a65;
      --paper-deep-orange-400: #ff7043;
      --paper-deep-orange-500: #ff5722;
      --paper-deep-orange-600: #f4511e;
      --paper-deep-orange-700: #e64a19;
      --paper-deep-orange-800: #d84315;
      --paper-deep-orange-900: #bf360c;
      --paper-deep-orange-a100: #ff9e80;
      --paper-deep-orange-a200: #ff6e40;
      --paper-deep-orange-a400: #ff3d00;
      --paper-deep-orange-a700: #dd2c00;

      --paper-brown-50: #efebe9;
      --paper-brown-100: #d7ccc8;
      --paper-brown-200: #bcaaa4;
      --paper-brown-300: #a1887f;
      --paper-brown-400: #8d6e63;
      --paper-brown-500: #795548;
      --paper-brown-600: #6d4c41;
      --paper-brown-700: #5d4037;
      --paper-brown-800: #4e342e;
      --paper-brown-900: #3e2723;

      --paper-grey-50: #fafafa;
      --paper-grey-100: #f5f5f5;
      --paper-grey-200: #eeeeee;
      --paper-grey-300: #e0e0e0;
      --paper-grey-400: #bdbdbd;
      --paper-grey-500: #9e9e9e;
      --paper-grey-600: #757575;
      --paper-grey-700: #616161;
      --paper-grey-800: #424242;
      --paper-grey-900: #212121;

      --paper-blue-grey-50: #eceff1;
      --paper-blue-grey-100: #cfd8dc;
      --paper-blue-grey-200: #b0bec5;
      --paper-blue-grey-300: #90a4ae;
      --paper-blue-grey-400: #78909c;
      --paper-blue-grey-500: #607d8b;
      --paper-blue-grey-600: #546e7a;
      --paper-blue-grey-700: #455a64;
      --paper-blue-grey-800: #37474f;
      --paper-blue-grey-900: #263238;

      /* opacity for dark text on a light background */
      --dark-divider-opacity: 0.12;
      --dark-disabled-opacity: 0.38; /* or hint text or icon */
      --dark-secondary-opacity: 0.54;
      --dark-primary-opacity: 0.87;

      /* opacity for light text on a dark background */
      --light-divider-opacity: 0.12;
      --light-disabled-opacity: 0.3; /* or hint text or icon */
      --light-secondary-opacity: 0.7;
      --light-primary-opacity: 1.0;

    }

  </style>
</custom-style>`,document.head.appendChild(Zo);const es=document.createElement("div");es.setAttribute("style","display: none;"),es.innerHTML=`<custom-style>
  <style is="custom-style">
    html {
      /*
       * You can use these generic variables in your elements for easy theming.
       * For example, if all your elements use \`--primary-text-color\` as its main
       * color, then switching from a light to a dark theme is just a matter of
       * changing the value of \`--primary-text-color\` in your application.
       */
      --primary-text-color: var(--light-theme-text-color);
      --primary-background-color: var(--light-theme-background-color);
      --secondary-text-color: var(--light-theme-secondary-color);
      --disabled-text-color: var(--light-theme-disabled-color);
      --divider-color: var(--light-theme-divider-color);
      --error-color: var(--paper-deep-orange-a700);

      /*
       * Primary and accent colors. Also see color.html for more colors.
       */
      --primary-color: var(--paper-indigo-500);
      --light-primary-color: var(--paper-indigo-100);
      --dark-primary-color: var(--paper-indigo-700);

      --accent-color: var(--paper-pink-a200);
      --light-accent-color: var(--paper-pink-a100);
      --dark-accent-color: var(--paper-pink-a400);


      /*
       * Material Design Light background theme
       */
      --light-theme-background-color: #ffffff;
      --light-theme-base-color: #000000;
      --light-theme-text-color: var(--paper-grey-900);
      --light-theme-secondary-color: #737373;  /* for secondary text and icons */
      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */
      --light-theme-divider-color: #dbdbdb;

      /*
       * Material Design Dark background theme
       */
      --dark-theme-background-color: var(--paper-grey-900);
      --dark-theme-base-color: #ffffff;
      --dark-theme-text-color: #ffffff;
      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */
      --dark-theme-disabled-color: #646464;  /* disabled/hint text */
      --dark-theme-divider-color: #3c3c3c;

      /*
       * Deprecated values because of their confusing names.
       */
      --text-primary-color: var(--dark-theme-text-color);
      --default-primary-color: var(--primary-color);
    }
  </style>
</custom-style>`,document.head.appendChild(es),Ei({_template:Mi`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,is:"paper-card",properties:{heading:{type:String,value:"",observer:"_headingChanged"},image:{type:String,value:""},alt:{type:String},preloadImage:{type:Boolean,value:!1},fadeImage:{type:Boolean,value:!1},placeholderImage:{type:String,value:null},elevation:{type:Number,value:1,reflectToAttribute:!0},animatedShadow:{type:Boolean,value:!1},animated:{type:Boolean,reflectToAttribute:!0,readOnly:!0,computed:"_computeAnimated(animatedShadow)"}},_isHidden:function(e){return e?"false":"true"},_headingChanged:function(e){var t=this.getAttribute("heading"),a=this.getAttribute("aria-label");("string"!==typeof a||a===t)&&this.setAttribute("aria-label",e)},_computeHeadingClass:function(e){return e?" over-image":""},_computeAnimated:function(e){return e}});const ts=document.createElement("div");ts.setAttribute("style","display: none;"),ts.innerHTML=`<dom-module id="paper-icon-button">
  <template strip-whitespace="">
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /* NOTE: Both values are needed, since some phones require the value to be \`transparent\`. */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]" alt\$="[[alt]]"></iron-icon>
  </template>

  
</dom-module>`,document.head.appendChild(ts),Ei({is:"paper-icon-button",hostAttributes:{role:"button",tabindex:"0"},behaviors:[jo],properties:{src:{type:String},icon:{type:String},alt:{type:String,observer:"_altChanged"}},_altChanged:function(e,t){var a=this.getAttribute("aria-label");a&&t!=a||this.setAttribute("aria-label",e)}});const as={attached:function(){ui(),this.fire("addon-attached")},update:function(){}};e.PaperInputAddonBehavior=as;e.$paperInputAddonBehavior={PaperInputAddonBehavior:as};const ns={};e.PaperInputHelper=ns,ns.NextLabelID=1,ns.NextAddonID=1,ns.NextInputID=1;const rs={properties:{label:{type:String},value:{notify:!0,type:String},disabled:{type:Boolean,value:!1},invalid:{type:Boolean,value:!1,notify:!0},allowedPattern:{type:String},type:{type:String},list:{type:String},pattern:{type:String},required:{type:Boolean,value:!1},errorMessage:{type:String},charCounter:{type:Boolean,value:!1},noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},autoValidate:{type:Boolean,value:!1},validator:{type:String},autocomplete:{type:String,value:"off"},autofocus:{type:Boolean,observer:"_autofocusChanged"},inputmode:{type:String},minlength:{type:Number},maxlength:{type:Number},min:{type:String},max:{type:String},step:{type:String},name:{type:String},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1},size:{type:Number},autocapitalize:{type:String,value:"none"},autocorrect:{type:String,value:"off"},autosave:{type:String},results:{type:Number},accept:{type:String},multiple:{type:Boolean},_ariaDescribedBy:{type:String,value:""},_ariaLabelledBy:{type:String,value:""},_inputId:{type:String,value:""}},listeners:{"addon-attached":"_onAddonAttached"},keyBindings:{"shift+tab:keydown":"_onShiftTabDown"},hostAttributes:{tabindex:0},get inputElement(){return this.$||(this.$={}),this.$.input||(this._generateInputId(),this.$.input=this.$$("#"+this._inputId)),this.$.input},get _focusableElement(){return this.inputElement},created:function(){this._typesThatHaveText=["date","datetime","datetime-local","month","time","week","file"]},attached:function(){this._updateAriaLabelledBy(),!$i&&this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.inputElement.type)&&(this.alwaysFloatLabel=!0)},_appendStringWithSpace:function(e,t){return e=e?e+" "+t:t,e},_onAddonAttached:function(e){var t=fi(e).rootTarget;if(t.id)this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,t.id);else{var a="paper-input-add-on-"+ns.NextAddonID++;t.id=a,this._ariaDescribedBy=this._appendStringWithSpace(this._ariaDescribedBy,a)}},validate:function(){return this.inputElement.validate()},_focusBlurHandler:function(e){Io._focusBlurHandler.call(this,e),this.focused&&!this._shiftTabPressed&&this._focusableElement&&this._focusableElement.focus()},_onShiftTabDown:function(){var e=this.getAttribute("tabindex");this._shiftTabPressed=!0,this.setAttribute("tabindex","-1"),this.async(function(){this.setAttribute("tabindex",e),this._shiftTabPressed=!1},1)},_handleAutoValidate:function(){this.autoValidate&&this.validate()},updateValueAndPreserveCaret:function(t){try{var e=this.inputElement.selectionStart;this.value=t,this.inputElement.selectionStart=e,this.inputElement.selectionEnd=e}catch(a){this.value=t}},_computeAlwaysFloatLabel:function(e,t){return t||e},_updateAriaLabelledBy:function(){var e=fi(this.root).querySelector("label");if(!e)return void(this._ariaLabelledBy="");var t;e.id?t=e.id:(t="paper-input-label-"+ns.NextLabelID++,e.id=t),this._ariaLabelledBy=t},_generateInputId:function(){this._inputId&&""!==this._inputId||(this._inputId="input-"+ns.NextInputID++)},_onChange:function(e){this.shadowRoot&&this.fire(e.type,{sourceEvent:e},{node:this,bubbles:e.bubbles,cancelable:e.cancelable})},_autofocusChanged:function(){if(this.autofocus&&this._focusableElement){var e=document.activeElement,t=e instanceof HTMLElement,a=t&&e!==document.body&&e!==document.documentElement;a||this._focusableElement.focus()}}};e.PaperInputBehaviorImpl=rs;const is=[Io,Ao,rs];e.PaperInputBehavior=is;e.$paperInputBehavior={PaperInputHelper:ns,PaperInputBehaviorImpl:rs,PaperInputBehavior:is};const os=document.createElement("div");os.setAttribute("style","display: none;"),os.innerHTML=`<custom-style>
  <style is="custom-style">
    html {

      /* Shared Styles */
      --paper-font-common-base: {
        font-family: 'Roboto', 'Noto', sans-serif;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-code: {
        font-family: 'Roboto Mono', 'Consolas', 'Menlo', monospace;
        -webkit-font-smoothing: antialiased;
      };

      --paper-font-common-expensive-kerning: {
        text-rendering: optimizeLegibility;
      };

      --paper-font-common-nowrap: {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      };

      /* Material Font Styles */

      --paper-font-display4: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 112px;
        font-weight: 300;
        letter-spacing: -.044em;
        line-height: 120px;
      };

      --paper-font-display3: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 56px;
        font-weight: 400;
        letter-spacing: -.026em;
        line-height: 60px;
      };

      --paper-font-display2: {
        @apply --paper-font-common-base;

        font-size: 45px;
        font-weight: 400;
        letter-spacing: -.018em;
        line-height: 48px;
      };

      --paper-font-display1: {
        @apply --paper-font-common-base;

        font-size: 34px;
        font-weight: 400;
        letter-spacing: -.01em;
        line-height: 40px;
      };

      --paper-font-headline: {
        @apply --paper-font-common-base;

        font-size: 24px;
        font-weight: 400;
        letter-spacing: -.012em;
        line-height: 32px;
      };

      --paper-font-title: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 20px;
        font-weight: 500;
        line-height: 28px;
      };

      --paper-font-subhead: {
        @apply --paper-font-common-base;

        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
      };

      --paper-font-body2: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-body1: {
        @apply --paper-font-common-base;

        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
      };

      --paper-font-caption: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0.011em;
        line-height: 20px;
      };

      --paper-font-menu: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 13px;
        font-weight: 500;
        line-height: 24px;
      };

      --paper-font-button: {
        @apply --paper-font-common-base;
        @apply --paper-font-common-nowrap;

        font-size: 14px;
        font-weight: 500;
        letter-spacing: 0.018em;
        line-height: 24px;
        text-transform: uppercase;
      };

      --paper-font-code2: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 700;
        line-height: 20px;
      };

      --paper-font-code1: {
        @apply --paper-font-common-code;

        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      };

    }

  </style>
</custom-style>`,document.head.appendChild(os),Ei({_template:Mi`
    <style>
      :host {
        display: inline-block;
        float: right;

        @apply --paper-font-caption;
        @apply --paper-input-char-counter;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:dir(rtl)) {
        float: left;
      }
    </style>

    <span>[[_charCounterStr]]</span>
`,is:"paper-input-char-counter",behaviors:[as],properties:{_charCounterStr:{type:String,value:"0"}},update:function(e){if(e.inputElement){e.value=e.value||"";var t=e.value.toString().length.toString();e.inputElement.hasAttribute("maxlength")&&(t+="/"+e.inputElement.getAttribute("maxlength")),this._charCounterStr=t}}});const ss=document.createElement("div");ss.setAttribute("style","display: none;"),ss.innerHTML=`<custom-style>
  <style is="custom-style">
    html {
      --paper-input-container-shared-input-style: {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        padding: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: bottom;

        @apply --paper-font-subhead;
      };
    }
  </style>
</custom-style>`,document.head.appendChild(ss),Ei({_template:Mi`
    <style>
      :host {
        display: block;
        padding: 8px 0;
        @apply --paper-input-container;
      }

      :host([inline]) {
        display: inline-block;
      }

      :host([disabled]) {
        pointer-events: none;
        opacity: 0.33;

        @apply --paper-input-container-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      [hidden] {
        display: none !important;
      }

      .floated-label-placeholder {
        @apply --paper-font-caption;
      }

      .underline {
        height: 2px;
        position: relative;
      }

      .focused-line {
        @apply --layout-fit;
        border-bottom: 2px solid var(--paper-input-container-focus-color, var(--primary-color));

        -webkit-transform-origin: center center;
        transform-origin: center center;
        -webkit-transform: scale3d(0,1,1);
        transform: scale3d(0,1,1);

        @apply --paper-input-container-underline-focus;
      }

      .underline.is-highlighted .focused-line {
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .underline.is-invalid .focused-line {
        border-color: var(--paper-input-container-invalid-color, var(--error-color));
        -webkit-transform: none;
        transform: none;
        -webkit-transition: -webkit-transform 0.25s;
        transition: transform 0.25s;

        @apply --paper-transition-easing;
      }

      .unfocused-line {
        @apply --layout-fit;
        border-bottom: 1px solid var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline;
      }

      :host([disabled]) .unfocused-line {
        border-bottom: 1px dashed;
        border-color: var(--paper-input-container-color, var(--secondary-text-color));
        @apply --paper-input-container-underline-disabled;
      }

      .input-wrapper {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
      }

      .input-content {
        @apply --layout-flex-auto;
        @apply --layout-relative;
        max-width: 100%;
      }

      .input-content ::slotted(label),
      .input-content ::slotted(.paper-input-label) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        font: inherit;
        color: var(--paper-input-container-color, var(--secondary-text-color));
        -webkit-transition: -webkit-transform 0.25s, width 0.25s;
        transition: transform 0.25s, width 0.25s;
        -webkit-transform-origin: left top;
        transform-origin: left top;
        /* Fix for safari not focusing 0-height date/time inputs with -webkit-apperance: none; */
        min-height: 1px;

        @apply --paper-font-common-nowrap;
        @apply --paper-font-subhead;
        @apply --paper-input-container-label;
        @apply --paper-transition-easing;
      }

      .input-content.label-is-floating ::slotted(label),
      .input-content.label-is-floating ::slotted(.paper-input-label) {
        -webkit-transform: translateY(-75%) scale(0.75);
        transform: translateY(-75%) scale(0.75);

        /* Since we scale to 75/100 of the size, we actually have 100/75 of the
        original space now available */
        width: 133%;

        @apply --paper-input-container-label-floating;
      }

      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(label),
      :host(:dir(rtl)) .input-content.label-is-floating ::slotted(.paper-input-label) {
        right: 0;
        left: auto;
        -webkit-transform-origin: right top;
        transform-origin: right top;
      }

      .input-content.label-is-highlighted ::slotted(label),
      .input-content.label-is-highlighted ::slotted(.paper-input-label) {
        color: var(--paper-input-container-focus-color, var(--primary-color));

        @apply --paper-input-container-label-focus;
      }

      .input-content.is-invalid ::slotted(label),
      .input-content.is-invalid ::slotted(.paper-input-label) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .input-content.label-is-hidden ::slotted(label),
      .input-content.label-is-hidden ::slotted(.paper-input-label) {
        visibility: hidden;
      }

      .input-content ::slotted(iron-input) {
        @apply --paper-input-container-shared-input-style;
      }

      .input-content ::slotted(input),
      .input-content ::slotted(textarea),
      .input-content ::slotted(iron-autogrow-textarea),
      .input-content ::slotted(.paper-input-input) {
        @apply --paper-input-container-shared-input-style;
        @apply --paper-input-container-input;
      }

      .input-content ::slotted(input)::-webkit-outer-spin-button,
      .input-content ::slotted(input)::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      .input-content.focused ::slotted(input),
      .input-content.focused ::slotted(textarea),
      .input-content.focused ::slotted(iron-autogrow-textarea),
      .input-content.focused ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-focus;
      }

      .input-content.is-invalid ::slotted(input),
      .input-content.is-invalid ::slotted(textarea),
      .input-content.is-invalid ::slotted(iron-autogrow-textarea),
      .input-content.is-invalid ::slotted(.paper-input-input) {
        @apply --paper-input-container-input-invalid;
      }

      .prefix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;
        @apply --paper-input-prefix;
      }

      .suffix ::slotted(*) {
        display: inline-block;
        @apply --paper-font-subhead;
        @apply --layout-flex-none;

        @apply --paper-input-suffix;
      }

      /* Firefox sets a min-width on the input, which can cause layout issues */
      .input-content ::slotted(input) {
        min-width: 0;
      }

      .input-content ::slotted(textarea) {
        resize: none;
      }

      .add-on-content {
        position: relative;
      }

      .add-on-content.is-invalid ::slotted(*) {
        color: var(--paper-input-container-invalid-color, var(--error-color));
      }

      .add-on-content.is-highlighted ::slotted(*) {
        color: var(--paper-input-container-focus-color, var(--primary-color));
      }
    </style>

    <div class="floated-label-placeholder" aria-hidden="true" hidden="[[noLabelFloat]]">&nbsp;</div>

    <div class="input-wrapper">
      <span class="prefix"><slot name="prefix"></slot></span>

      <div class\$="[[_computeInputContentClass(noLabelFloat,alwaysFloatLabel,focused,invalid,_inputHasContent)]]" id="labelAndInputContainer">
        <slot name="label"></slot>
        <slot name="input"></slot>
      </div>

      <span class="suffix"><slot name="suffix"></slot></span>
    </div>

    <div class\$="[[_computeUnderlineClass(focused,invalid)]]">
      <div class="unfocused-line"></div>
      <div class="focused-line"></div>
    </div>

    <div class\$="[[_computeAddOnContentClass(focused,invalid)]]">
      <slot name="add-on"></slot>
    </div>
`,is:"paper-input-container",properties:{noLabelFloat:{type:Boolean,value:!1},alwaysFloatLabel:{type:Boolean,value:!1},attrForValue:{type:String,value:"bind-value"},autoValidate:{type:Boolean,value:!1},invalid:{observer:"_invalidChanged",type:Boolean,value:!1},focused:{readOnly:!0,type:Boolean,value:!1,notify:!0},_addons:{type:Array},_inputHasContent:{type:Boolean,value:!1},_inputSelector:{type:String,value:"input,iron-input,textarea,.paper-input-input"},_boundOnFocus:{type:Function,value:function(){return this._onFocus.bind(this)}},_boundOnBlur:{type:Function,value:function(){return this._onBlur.bind(this)}},_boundOnInput:{type:Function,value:function(){return this._onInput.bind(this)}},_boundValueChanged:{type:Function,value:function(){return this._onValueChanged.bind(this)}}},listeners:{"addon-attached":"_onAddonAttached","iron-input-validate":"_onIronInputValidate"},get _valueChangedEvent(){return this.attrForValue+"-changed"},get _propertyForValue(){return fe(this.attrForValue)},get _inputElement(){return fi(this).querySelector(this._inputSelector)},get _inputElementValue(){return this._inputElement[this._propertyForValue]||this._inputElement.value},ready:function(){this.__isFirstValueUpdate=!0,this._addons||(this._addons=[]),this.addEventListener("focus",this._boundOnFocus,!0),this.addEventListener("blur",this._boundOnBlur,!0)},attached:function(){this.attrForValue?this._inputElement.addEventListener(this._valueChangedEvent,this._boundValueChanged):this.addEventListener("input",this._onInput),this._inputElementValue&&""!=this._inputElementValue?this._handleValueAndAutoValidate(this._inputElement):this._handleValue(this._inputElement)},_onAddonAttached:function(e){this._addons||(this._addons=[]);var t=e.target;-1===this._addons.indexOf(t)&&(this._addons.push(t),this.isAttached&&this._handleValue(this._inputElement))},_onFocus:function(){this._setFocused(!0)},_onBlur:function(){this._setFocused(!1),this._handleValueAndAutoValidate(this._inputElement)},_onInput:function(e){this._handleValueAndAutoValidate(e.target)},_onValueChanged:function(e){var t=e.target;this.__isFirstValueUpdate&&(this.__isFirstValueUpdate=!1,void 0===t.value)||this._handleValueAndAutoValidate(e.target)},_handleValue:function(e){var t=this._inputElementValue;this._inputHasContent=!(!t&&0!==t&&("number"!==e.type||e.checkValidity())),this.updateAddons({inputElement:e,value:t,invalid:this.invalid})},_handleValueAndAutoValidate:function(e){if(this.autoValidate&&e){var t;t=e.validate?e.validate(this._inputElementValue):e.checkValidity(),this.invalid=!t}this._handleValue(e)},_onIronInputValidate:function(){this.invalid=this._inputElement.invalid},_invalidChanged:function(){this._addons&&this.updateAddons({invalid:this.invalid})},updateAddons:function(e){for(var t=0,a;a=this._addons[t];t++)a.update(e)},_computeInputContentClass:function(e,t,a,n,r){var i="input-content";if(!e){var o=this.querySelector("label");t||r?(i+=" label-is-floating",this.$.labelAndInputContainer.style.position="static",n?i+=" is-invalid":a&&(i+=" label-is-highlighted")):(o&&(this.$.labelAndInputContainer.style.position="relative"),n&&(i+=" is-invalid"))}else r&&(i+=" label-is-hidden"),n&&(i+=" is-invalid");return a&&(i+=" focused"),i},_computeUnderlineClass:function(e,t){var a="underline";return t?a+=" is-invalid":e&&(a+=" is-highlighted"),a},_computeAddOnContentClass:function(e,t){var a="add-on-content";return t?a+=" is-invalid":e&&(a+=" is-highlighted"),a}}),Ei({_template:Mi`
    <style>
      :host {
        display: inline-block;
        visibility: hidden;

        color: var(--paper-input-container-invalid-color, var(--error-color));

        @apply --paper-font-caption;
        @apply --paper-input-error;
        position: absolute;
        left:0;
        right:0;
      }

      :host([invalid]) {
        visibility: visible;
      };
    </style>

    <slot></slot>
`,is:"paper-input-error",behaviors:[as],properties:{invalid:{readOnly:!0,reflectToAttribute:!0,type:Boolean}},update:function(e){this._setInvalid(e.invalid)}});const ds=document.createElement("div");ds.setAttribute("style","display: none;"),ds.innerHTML=`<dom-module id="paper-input">
  <template>
    <style>
      :host {
        display: block;
      }

      :host([focused]) {
        outline: none;
      }

      :host([hidden]) {
        display: none !important;
      }

      input {
        position: relative; /* to make a stacking context */
        outline: none;
        box-shadow: none;
        margin: 0;
        padding: 0;
        width: 100%;
        max-width: 100%;
        background: transparent;
        border: none;
        color: var(--paper-input-container-input-color, var(--primary-text-color));
        -webkit-appearance: none;
        text-align: inherit;
        vertical-align: bottom;

        /* Firefox sets a min-width on the input, which can cause layout issues */
        min-width: 0;

        @apply --paper-font-subhead;
        @apply --paper-input-container-input;
      }

      input:disabled {
        @apply --paper-input-container-input-disabled;
      }

      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        @apply --paper-input-container-input-webkit-spinner;
      }

      input::-webkit-clear-button {
        @apply --paper-input-container-input-webkit-clear;
      }

      input::-webkit-calendar-picker-indicator {
        @apply --paper-input-container-input-webkit-calendar-picker-indicator;
      }

      input::-webkit-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input:-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-moz-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      input::-ms-clear {
        @apply --paper-input-container-ms-clear;
      }

      input::-ms-reveal {
        @apply --paper-input-container-ms-reveal;
      }

      input:-ms-input-placeholder {
        color: var(--paper-input-container-color, var(--secondary-text-color));
      }

      label {
        pointer-events: none;
      }
    </style>

    <paper-input-container id="container" no-label-float="[[noLabelFloat]]" always-float-label="[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]" auto-validate\$="[[autoValidate]]" disabled\$="[[disabled]]" invalid="[[invalid]]">

      <slot name="prefix" slot="prefix"></slot>

      <label hidden\$="[[!label]]" aria-hidden="true" for\$="[[_inputId]]" slot="label">[[label]]</label>

      <span id="template-placeholder"></span>

      <slot name="suffix" slot="suffix"></slot>

      <template is="dom-if" if="[[errorMessage]]">
        <paper-input-error aria-live="assertive" slot="add-on">[[errorMessage]]</paper-input-error>
      </template>

      <template is="dom-if" if="[[charCounter]]">
        <paper-input-char-counter slot="add-on"></paper-input-char-counter>
      </template>

    </paper-input-container>
  </template>

  <!-- This is a fresh new hell to make this element hybrid. Basically, in 2.0
    we lost is=, so the example same template can't be used with iron-input 1.0 and 2.0.
    Expect some conditional code (especially in the tests).
   -->
  <template id="v0">
    <input is="iron-input" slot="input" class="input-element" id\$="[[_inputId]]" aria-labelledby\$="[[_ariaLabelledBy]]" aria-describedby\$="[[_ariaDescribedBy]]" disabled\$="[[disabled]]" title\$="[[title]]" bind-value="{{value}}" invalid="{{invalid}}" prevent-invalid-input="[[preventInvalidInput]]" allowed-pattern="[[allowedPattern]]" validator="[[validator]]" type\$="[[type]]" pattern\$="[[pattern]]" required\$="[[required]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]" min\$="[[min]]" max\$="[[max]]" step\$="[[step]]" name\$="[[name]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" list\$="[[list]]" size\$="[[size]]" autocapitalize\$="[[autocapitalize]]" autocorrect\$="[[autocorrect]]" on-change="_onChange" tabindex\$="[[tabIndex]]" autosave\$="[[autosave]]" results\$="[[results]]" accept\$="[[accept]]" multiple\$="[[multiple]]">
  </template>

  <template id="v1">
    <!-- Need to bind maxlength so that the paper-input-char-counter works correctly -->
    <iron-input bind-value="{{value}}" slot="input" class="input-element" id\$="[[_inputId]]" maxlength\$="[[maxlength]]" allowed-pattern="[[allowedPattern]]" invalid="{{invalid}}" validator="[[validator]]">
      <input aria-labelledby\$="[[_ariaLabelledBy]]" aria-describedby\$="[[_ariaDescribedBy]]" disabled\$="[[disabled]]" title\$="[[title]]" type\$="[[type]]" pattern\$="[[pattern]]" required\$="[[required]]" autocomplete\$="[[autocomplete]]" autofocus\$="[[autofocus]]" inputmode\$="[[inputmode]]" minlength\$="[[minlength]]" maxlength\$="[[maxlength]]" min\$="[[min]]" max\$="[[max]]" step\$="[[step]]" name\$="[[name]]" placeholder\$="[[placeholder]]" readonly\$="[[readonly]]" list\$="[[list]]" size\$="[[size]]" autocapitalize\$="[[autocapitalize]]" autocorrect\$="[[autocorrect]]" on-change="_onChange" tabindex\$="[[tabIndex]]" autosave\$="[[autosave]]" results\$="[[results]]" accept\$="[[accept]]" multiple\$="[[multiple]]">
    </iron-input>
  </template>

</dom-module>`,document.head.appendChild(ds),Ei({is:"paper-input",behaviors:[is,Lo],beforeRegister:function(){var e=document.createElement("iron-input"),t="function"==typeof e._initSlottedInput?"v1":"v0",a=Yn.import("paper-input","template"),n=Yn.import("paper-input","template#"+t),r=a.content.querySelector("#template-placeholder");r&&r.parentNode.replaceChild(n.content,r)},get _focusableElement(){return $i?this.inputElement._inputElement:this.inputElement},listeners:{"iron-input-ready":"_onIronInputReady"},_onIronInputReady:function(){this.$.nativeInput||(this.$.nativeInput=this.$$("input")),this.inputElement&&-1!==this._typesThatHaveText.indexOf(this.$.nativeInput.type)&&(this.alwaysFloatLabel=!0),!this.inputElement.bindValue||this.$.container._handleValueAndAutoValidate(this.inputElement)}});const ls={hostAttributes:{role:"option",tabindex:"0"}};e.PaperItemBehaviorImpl=ls;const ps=[Ro,Io,ls];e.PaperItemBehavior=ps;e.$paperItemBehavior={PaperItemBehaviorImpl:ls,PaperItemBehavior:ps};const _s=document.createElement("div");_s.setAttribute("style","display: none;"),_s.innerHTML=`<dom-module id="paper-item-shared-styles">
  <template>
    <style>
      :host, .paper-item {
        display: block;
        position: relative;
        min-height: var(--paper-item-min-height, 48px);
        padding: 0px 16px;
      }

      .paper-item {
        @apply --paper-font-subhead;
        border:none;
        outline: none;
        background: white;
        width: 100%;
        text-align: left;
      }

      :host([hidden]), .paper-item[hidden] {
        display: none !important;
      }

      :host(.iron-selected), .paper-item.iron-selected {
        font-weight: var(--paper-item-selected-weight, bold);

        @apply --paper-item-selected;
      }

      :host([disabled]), .paper-item[disabled] {
        color: var(--paper-item-disabled-color, var(--disabled-text-color));

        @apply --paper-item-disabled;
      }

      :host(:focus), .paper-item:focus {
        position: relative;
        outline: 0;

        @apply --paper-item-focused;
      }

      :host(:focus):before, .paper-item:focus:before {
        @apply --layout-fit;

        background: currentColor;
        content: '';
        opacity: var(--dark-divider-opacity);
        pointer-events: none;

        @apply --paper-item-focused-before;
      }
    </style>
  </template>
</dom-module>`,document.head.appendChild(_s),Ei({_template:Mi`
    <style include="paper-item-shared-styles">
      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-subhead;

        @apply --paper-item;
      }
    </style>
    <slot></slot>
`,is:"paper-item",behaviors:[ps]}),Ei({_template:Mi`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,is:"paper-progress",behaviors:[Vo],properties:{secondaryProgress:{type:Number,value:0},secondaryRatio:{type:Number,value:0,readOnly:!0},indeterminate:{type:Boolean,value:!1,observer:"_toggleIndeterminate"},disabled:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_disabledChanged"}},observers:["_progressChanged(secondaryProgress, value, min, max, indeterminate)"],hostAttributes:{role:"progressbar"},_toggleIndeterminate:function(e){this.toggleClass("indeterminate",e,this.$.primaryProgress)},_transformProgress:function(e,t){e.style.transform=e.style.webkitTransform="scaleX("+t/100+")"},_mainRatioChanged:function(e){this._transformProgress(this.$.primaryProgress,e)},_progressChanged:function(e,t,a,n,r){e=this._clampValue(e),t=this._clampValue(t);var i=100*this._calcRatio(e),o=100*this._calcRatio(t);this._setSecondaryRatio(i),this._transformProgress(this.$.secondaryProgress,i),this._transformProgress(this.$.primaryProgress,o),this.secondaryProgress=e,r?this.removeAttribute("aria-valuenow"):this.setAttribute("aria-valuenow",t),this.setAttribute("aria-valuemin",a),this.setAttribute("aria-valuemax",n)},_disabledChanged:function(e){this.setAttribute("aria-disabled",e?"true":"false")},_hideSecondaryProgress:function(e){return 0===e}});const cs=document.createElement("div");cs.setAttribute("style","display: none;"),cs.innerHTML=`<dom-module id="paper-slider">
  <template strip-whitespace="">
    <style>
      :host {
        @apply --layout;
        @apply --layout-justified;
        @apply --layout-center;
        width: 200px;
        cursor: default;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));
        --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));
        --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));
        --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));
        --calculated-paper-slider-height: var(--paper-slider-height, 2px);
      }

      /* focus shows the ripple */
      :host(:focus) {
        outline: none;
      }

      /**
       * NOTE(keanulee): Though :host-context is not universally supported, some pages
       * still rely on paper-slider being flipped when dir="rtl" is set on body. For full
       * compatability, dir="rtl" must be explicitly set on paper-slider.
       */
      :dir(rtl) #sliderContainer {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }

      /**
       * NOTE(keanulee): This is separate from the rule above because :host-context may
       * not be recognized.
       */
      :host([dir="rtl"]) #sliderContainer {
        -webkit-transform: scaleX(-1);
        transform: scaleX(-1);
      }

      /**
       * NOTE(keanulee): Needed to override the :host-context rule (where supported)
       * to support LTR sliders in RTL pages.
       */
      :host([dir="ltr"]) #sliderContainer {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }

      #sliderContainer {
        position: relative;
        width: 100%;
        height: calc(30px + var(--calculated-paper-slider-height));
        margin-left: calc(15px + var(--calculated-paper-slider-height)/2);
        margin-right: calc(15px + var(--calculated-paper-slider-height)/2);
      }

      #sliderContainer:focus {
        outline: 0;
      }

      #sliderContainer.editable {
        margin-top: 12px;
        margin-bottom: 12px;
      }

      .bar-container {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
      }

      .ring > .bar-container {
        left: calc(5px + var(--calculated-paper-slider-height)/2);
        transition: left 0.18s ease;
      }

      .ring.expand.dragging > .bar-container {
        transition: none;
      }

      .ring.expand:not(.pin) > .bar-container {
        left: calc(8px + var(--calculated-paper-slider-height)/2);
      }

      #sliderBar {
        padding: 15px 0;
        width: 100%;
        background-color: var(--paper-slider-bar-color, transparent);
        --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));
        --paper-progress-height: var(--calculated-paper-slider-height);
      }

      .slider-markers {
        position: absolute;
        top: calc(14px + var(--paper-slider-height,2px)/2);
        height: var(--calculated-paper-slider-height);
        left: 0;
        right: -1px;
        box-sizing: border-box;
        pointer-events: none;
        @apply --layout-horizontal;
      }

      .slider-marker {
        @apply --layout-flex;
      }
      .slider-markers::after,
      .slider-marker::after {
        content: "";
        display: block;
        margin-left: -1px;
        width: 2px;
        height: var(--calculated-paper-slider-height);
        border-radius: 50%;
        background-color: var(--paper-slider-markers-color, #000);
      }

      .slider-knob {
        position: absolute;
        left: 0;
        top: 0;
        margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);
        width: calc(30px + var(--calculated-paper-slider-height));
        height: calc(30px + var(--calculated-paper-slider-height));
      }

      .transiting > .slider-knob {
        transition: left 0.08s ease;
      }

      .slider-knob:focus {
        outline: none;
      }

      .slider-knob.dragging {
        transition: none;
      }

      .snaps > .slider-knob.dragging {
        transition: -webkit-transform 0.08s ease;
        transition: transform 0.08s ease;
      }

      .slider-knob-inner {
        margin: 10px;
        width: calc(100% - 20px);
        height: calc(100% - 20px);
        background-color: var(--paper-slider-knob-color, var(--google-blue-700));
        border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));
        border-radius: 50%;

        -moz-box-sizing: border-box;
        box-sizing: border-box;

        transition-property: -webkit-transform, background-color, border;
        transition-property: transform, background-color, border;
        transition-duration: 0.18s;
        transition-timing-function: ease;
      }

      .expand:not(.pin) > .slider-knob > .slider-knob-inner {
        -webkit-transform: scale(1.5);
        transform: scale(1.5);
      }

      .ring > .slider-knob > .slider-knob-inner {
        background-color: var(--paper-slider-knob-start-color, transparent);
        border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
      }

      .slider-knob-inner::before {
        background-color: var(--paper-slider-pin-color, var(--google-blue-700));
      }

      .pin > .slider-knob > .slider-knob-inner::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -13px;
        width: 26px;
        height: 26px;
        border-radius: 50% 50% 50% 0;

        -webkit-transform: rotate(-45deg) scale(0) translate(0);
        transform: rotate(-45deg) scale(0) translate(0);
      }

      .slider-knob-inner::before,
      .slider-knob-inner::after {
        transition: -webkit-transform .18s ease, background-color .18s ease;
        transition: transform .18s ease, background-color .18s ease;
      }

      .pin.ring > .slider-knob > .slider-knob-inner::before {
        background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));
      }

      .pin.expand > .slider-knob > .slider-knob-inner::before {
        -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);
        transform: rotate(-45deg) scale(1) translate(17px, -17px);
      }

      .pin > .slider-knob > .slider-knob-inner::after {
        content: attr(value);
        position: absolute;
        top: 0;
        left: 50%;
        margin-left: -16px;
        width: 32px;
        height: 26px;
        text-align: center;
        color: var(--paper-slider-font-color, #fff);
        font-size: 10px;

        -webkit-transform: scale(0) translate(0);
        transform: scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -17px);
        transform: scale(1) translate(0, -17px);
      }

      /* paper-input */
      .slider-input {
        width: 50px;
        overflow: hidden;
        --paper-input-container-input: {
          text-align: center;
          @apply --paper-slider-input-container-input;
        };
        @apply --paper-slider-input;
      }

      /* disabled state */
      #sliderContainer.disabled {
        pointer-events: none;
      }

      .disabled > .slider-knob > .slider-knob-inner {
        background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
        border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
        -webkit-transform: scale3d(0.75, 0.75, 1);
        transform: scale3d(0.75, 0.75, 1);
      }

      .disabled.ring > .slider-knob > .slider-knob-inner {
        background-color: var(--paper-slider-knob-start-color, transparent);
        border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
      }

      paper-ripple {
        color: var(--paper-slider-knob-color, var(--google-blue-700));
      }
    </style>

    <div id="sliderContainer" class\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">
      <div class="bar-container">
        <paper-progress disabled\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">
        </paper-progress>
      </div>

      <template is="dom-if" if="[[snaps]]">
        <div class="slider-markers">
          <template is="dom-repeat" items="[[markers]]">
            <div class="slider-marker"></div>
          </template>
        </div>
      </template>

      <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">
          <div class="slider-knob-inner" value\$="[[immediateValue]]"></div>
      </div>
    </div>

    <template is="dom-if" if="[[editable]]">
      <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float="">
      </paper-input>
    </template>
  </template>

  
</dom-module>`,document.head.appendChild(cs),Ei({is:"paper-slider",behaviors:[Ao,Lo,jo,Vo],properties:{snaps:{type:Boolean,value:!1,notify:!0},pin:{type:Boolean,value:!1,notify:!0},secondaryProgress:{type:Number,value:0,notify:!0,observer:"_secondaryProgressChanged"},editable:{type:Boolean,value:!1},immediateValue:{type:Number,value:0,readOnly:!0,notify:!0},maxMarkers:{type:Number,value:0,notify:!0},expand:{type:Boolean,value:!1,readOnly:!0},ignoreBarTouch:{type:Boolean,value:!1},dragging:{type:Boolean,value:!1,readOnly:!0,notify:!0},transiting:{type:Boolean,value:!1,readOnly:!0},markers:{type:Array,readOnly:!0,value:function(){return[]}}},observers:["_updateKnob(value, min, max, snaps, step)","_valueChanged(value)","_immediateValueChanged(immediateValue)","_updateMarkers(maxMarkers, min, max, snaps)"],hostAttributes:{role:"slider",tabindex:0},keyBindings:{left:"_leftKey",right:"_rightKey","down pagedown home":"_decrementKey","up pageup end":"_incrementKey"},ready:function(){this.ignoreBarTouch&&wt(this.$.sliderBar,"auto")},increment:function(){this.value=this._clampValue(this.value+this.step)},decrement:function(){this.value=this._clampValue(this.value-this.step)},_updateKnob:function(e,t,a){this.setAttribute("aria-valuemin",t),this.setAttribute("aria-valuemax",a),this.setAttribute("aria-valuenow",e),this._positionKnob(100*this._calcRatio(e))},_valueChanged:function(){this.fire("value-change",{composed:!0})},_immediateValueChanged:function(){this.dragging?this.fire("immediate-value-change",{composed:!0}):this.value=this.immediateValue},_secondaryProgressChanged:function(){this.secondaryProgress=this._clampValue(this.secondaryProgress)},_expandKnob:function(){this._setExpand(!0)},_resetKnob:function(){this.cancelDebouncer("expandKnob"),this._setExpand(!1)},_positionKnob:function(e){this._setImmediateValue(this._calcStep(this._calcKnobPosition(e))),this._setRatio(100*this._calcRatio(this.immediateValue)),this.$.sliderKnob.style.left=this.ratio+"%",this.dragging&&(this._knobstartx=this.ratio*this._w/100,this.translate3d(0,0,0,this.$.sliderKnob))},_calcKnobPosition:function(e){return(this.max-this.min)*e/100+this.min},_onTrack:function(e){switch(e.stopPropagation(),e.detail.state){case"start":this._trackStart(e);break;case"track":this._trackX(e);break;case"end":this._trackEnd();}},_trackStart:function(){this._setTransiting(!1),this._w=this.$.sliderBar.offsetWidth,this._x=this.ratio*this._w/100,this._startx=this._x,this._knobstartx=this._startx,this._minx=-this._startx,this._maxx=this._w-this._startx,this.$.sliderKnob.classList.add("dragging"),this._setDragging(!0)},_trackX:function(e){this.dragging||this._trackStart(e);var t=this._isRTL?-1:1,a=$a(this._maxx,Ma(this._minx,e.detail.dx*t));this._x=this._startx+a;var n=this._calcStep(this._calcKnobPosition(100*(this._x/this._w)));this._setImmediateValue(n);var r=this._calcRatio(this.immediateValue)*this._w-this._knobstartx;this.translate3d(r+"px",0,0,this.$.sliderKnob)},_trackEnd:function(){var e=this.$.sliderKnob.style;this.$.sliderKnob.classList.remove("dragging"),this._setDragging(!1),this._resetKnob(),this.value=this.immediateValue,e.transform=e.webkitTransform="",this.fire("change",{composed:!0})},_knobdown:function(e){this._expandKnob(),e.preventDefault(),this.focus()},_bartrack:function(e){this._allowBarEvent(e)&&this._onTrack(e)},_barclick:function(e){this._w=this.$.sliderBar.offsetWidth;var t=this.$.sliderBar.getBoundingClientRect(),a=100*((e.detail.x-t.left)/this._w);this._isRTL&&(a=100-a);var n=this.ratio;this._setTransiting(!0),this._positionKnob(a),n===this.ratio&&this._setTransiting(!1),this.async(function(){this.fire("change",{composed:!0})}),e.preventDefault(),this.focus()},_bardown:function(e){this._allowBarEvent(e)&&(this.debounce("expandKnob",this._expandKnob,60),this._barclick(e))},_knobTransitionEnd:function(e){e.target===this.$.sliderKnob&&this._setTransiting(!1)},_updateMarkers:function(e,t,a,n){n||this._setMarkers([]);var r=Ba((a-t)/this.step);r>e&&(r=e),(0>r||!isFinite(r))&&(r=0),this._setMarkers(Array(r))},_mergeClasses:function(e){return Object.keys(e).filter(function(t){return e[t]}).join(" ")},_getClassNames:function(){return this._mergeClasses({disabled:this.disabled,pin:this.pin,snaps:this.snaps,ring:this.immediateValue<=this.min,expand:this.expand,dragging:this.dragging,transiting:this.transiting,editable:this.editable})},_allowBarEvent:function(e){return!this.ignoreBarTouch||e.detail.sourceEvent instanceof MouseEvent},get _isRTL(){return void 0===this.__isRTL&&(this.__isRTL="rtl"===window.getComputedStyle(this).direction),this.__isRTL},_leftKey:function(e){this._isRTL?this._incrementKey(e):this._decrementKey(e)},_rightKey:function(e){this._isRTL?this._decrementKey(e):this._incrementKey(e)},_incrementKey:function(e){this.disabled||("end"===e.detail.key?this.value=this.max:this.increment(),this.fire("change"),e.preventDefault())},_decrementKey:function(e){this.disabled||("home"===e.detail.key?this.value=this.min:this.decrement(),this.fire("change"),e.preventDefault())},_changeValue:function(e){this.value=e.target.value,this.fire("change",{composed:!0})},_inputKeyDown:function(e){e.stopPropagation()},_createRipple:function(){return this._rippleContainer=this.$.sliderKnob,Yo._createRipple.call(this)},_focusedChanged:function(e){e&&this.ensureRipple(),this.hasRipple()&&(this._ripple.style.display=e?"":"none",this._ripple.holdDown=e)}});const us=document.createElement("div");us.setAttribute("style","display: none;"),us.innerHTML=`<dom-module id="paper-toggle-button">
  <template strip-whitespace="">

    <style>
      :host {
        display: inline-block;
        @apply --layout-horizontal;
        @apply --layout-center;
        @apply --paper-font-common-base;
      }

      :host([disabled]) {
        pointer-events: none;
      }

      :host(:focus) {
        outline:none;
      }

      .toggle-bar {
        position: absolute;
        height: 100%;
        width: 100%;
        border-radius: 8px;
        pointer-events: none;
        opacity: 0.4;
        transition: background-color linear .08s;
        background-color: var(--paper-toggle-button-unchecked-bar-color, #000000);

        @apply --paper-toggle-button-unchecked-bar;
      }

      .toggle-button {
        position: absolute;
        top: -3px;
        left: 0;
        height: 20px;
        width: 20px;
        border-radius: 50%;
        box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.6);
        transition: -webkit-transform linear .08s, background-color linear .08s;
        transition: transform linear .08s, background-color linear .08s;
        will-change: transform;
        background-color: var(--paper-toggle-button-unchecked-button-color, var(--paper-grey-50));

        @apply --paper-toggle-button-unchecked-button;
      }

      .toggle-button.dragging {
        -webkit-transition: none;
        transition: none;
      }

      :host([checked]:not([disabled])) .toggle-bar {
        opacity: 0.5;
        background-color: var(--paper-toggle-button-checked-bar-color, var(--primary-color));

        @apply --paper-toggle-button-checked-bar;
      }

      :host([disabled]) .toggle-bar {
        background-color: #000;
        opacity: 0.12;
      }

      :host([checked]) .toggle-button {
        -webkit-transform: translate(16px, 0);
        transform: translate(16px, 0);
      }

      :host([checked]:not([disabled])) .toggle-button {
        background-color: var(--paper-toggle-button-checked-button-color, var(--primary-color));

        @apply --paper-toggle-button-checked-button;
      }

      :host([disabled]) .toggle-button {
        background-color: #bdbdbd;
        opacity: 1;
      }

      .toggle-ink {
        position: absolute;
        top: -14px;
        left: -14px;
        right: auto;
        bottom: auto;
        width: 48px;
        height: 48px;
        opacity: 0.5;
        pointer-events: none;
        color: var(--paper-toggle-button-unchecked-ink-color, var(--primary-text-color));

        @apply --paper-toggle-button-unchecked-ink;
      }

      :host([checked]) .toggle-ink {
        color: var(--paper-toggle-button-checked-ink-color, var(--primary-color));

        @apply --paper-toggle-button-checked-ink;
      }

      .toggle-container {
        display: inline-block;
        position: relative;
        width: 36px;
        height: 14px;
        /* The toggle button has an absolute position of -3px; The extra 1px
        /* accounts for the toggle button shadow box. */
        margin: 4px 1px;
      }

      .toggle-label {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        padding-left: var(--paper-toggle-button-label-spacing, 8px);
        pointer-events: none;
        color: var(--paper-toggle-button-label-color, var(--primary-text-color));
      }

      /* invalid state */
      :host([invalid]) .toggle-bar {
        background-color: var(--paper-toggle-button-invalid-bar-color, var(--error-color));
      }

      :host([invalid]) .toggle-button {
        background-color: var(--paper-toggle-button-invalid-button-color, var(--error-color));
      }

      :host([invalid]) .toggle-ink {
        color: var(--paper-toggle-button-invalid-ink-color, var(--error-color));
      }
    </style>

    <div class="toggle-container">
      <div id="toggleBar" class="toggle-bar"></div>
      <div id="toggleButton" class="toggle-button"></div>
    </div>

    <div class="toggle-label"><slot></slot></div>

  </template>

  
</dom-module>`,document.head.appendChild(us),Ei({is:"paper-toggle-button",behaviors:[Wo],hostAttributes:{role:"button","aria-pressed":"false",tabindex:0},properties:{},listeners:{track:"_ontrack"},attached:function(){Ut(this,function(){wt(this,"pan-y")})},_ontrack:function(e){var t=e.detail;"start"===t.state?this._trackStart(t):"track"===t.state?this._trackMove(t):"end"===t.state&&this._trackEnd(t)},_trackStart:function(){this._width=this.$.toggleBar.offsetWidth/2,this._trackChecked=this.checked,this.$.toggleButton.classList.add("dragging")},_trackMove:function(e){var t=e.dx;this._x=$a(this._width,Ma(0,this._trackChecked?this._width+t:t)),this.translate3d(this._x+"px",0,0,this.$.toggleButton),this._userActivate(this._x>this._width/2)},_trackEnd:function(){this.$.toggleButton.classList.remove("dragging"),this.transform("",this.$.toggleButton)},_createRipple:function(){this._rippleContainer=this.$.toggleButton;var e=qo._createRipple();return e.id="ink",e.setAttribute("recenters",""),e.classList.add("circle","toggle-ink"),e}});class hs extends $i{static get is(){return"application-shell"}static get properties(){return{page:{type:String,reflectToAttribute:!0,observer:"_pageChanged"},rootPattern:String,routeData:Object,subroute:String,opened:{type:Boolean,reflectToAttribute:!0}}}static get observers(){return["_routePageChanged(routeData.page)"]}constructor(){super(),this.rootPattern=new URL(this.rootPath).pathname}connectedCallback(){super.connectedCallback()}ready(){super.ready(),console.log(this.tagName)}_routePageChanged(e){this.page=e||"purchase-order",this.$.drawer.persistent||this.$.drawer.close()}_pageChanged(){(0,t.installRouter)(e=>console.log(e))}_toggleSearch(){this.$.collapse.toggle()}_getText(e){return e?"Collapse":"Expand"}static get template(){return`

    <style>
    :host {
        --app-primary-color: #4285f4;
        --app-secondary-color: black;
        --app-drawer-width: 190px;
        --paper-progress-container-color: #e06f50; /* #80001a */
        --app-drawer-content-container:{
          background-color: #303030 ; /* #3c8c30 */
        }
        display: block;
      }

      svg { animation: rotate 5s infinite ease-in-out alternate; }

      @keyframes rotate {
        0% {
          transform: rotateZ(5deg);
        }

        100% {
          transform: rotateZ(-5deg);
        }
      }

      @media print {
        :host {--app-drawer-width: 0px; }
        app-drawer { display: none; }
        app-toolbar { display: none; padding: 0px; }
        app-header { display: none; padding: 0px; }
      }

      @media only screen and (min-width: 600px) { .advert { margin-right: 200px; } }

      app-drawer-layout:not([narrow]) [drawer-toggle] { display: none; }

      //a               { text-decoration: none; }
      app-header      { background-color: #303030; color: white;" }
      app-toolbar     { margin: 5px; height: 48px; }
      app-drawer      { margin: 0px; color: black; overflow: auto; }
      paper-progress  { width: 100%;  }
      iron-pages      { width: 100%; height: 100%; }
      paper-item      { text-align: center; cursor: pointer; background-color: #e8e8e8; color: #303030; border: 1px solid grey; border-radius: 5px; margin: 5px; }
      h1              { font-size: 22px; text-align: center; }
      h2              { font-size: 15px; color: #303030; margin: auto; }
      main            { margin: 5px; }

    </style>

    <!-- ROUTE LOCATION -->
    <app-location
      route="{{route}}">
    </app-location>
    <app-route
      route="{{route}}"
      pattern="[[rootPattern]]:page"
      data="{{routeData}}"
      tail="{{subroute}}"></app-route>

    <!-- APP DRAWER LAYOUT -->
    <app-drawer-layout
      fullbleed>

    <!-- APP DRAWER -->
    <app-drawer
      class="colors"
      slot="drawer"
      id="drawer"
      align="end"
      fullbleed>

      <!-- ROOFING MENU -->
      <div style=" background: background-color: transparent; height: 60px;">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid meet" viewBox="0 0 180 60" width="180" height="60"><defs><path d="M100.56 33.51L100.56 33.51L100.56 33.51L100.56 33.51L100.56 33.51L100.56 33.51L100.56 33.51L100.56 33.51L100.56 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.51L100.55 33.5L100.55 33.5L100.55 33.5L100.55 33.5L100.55 33.5L100.55 33.5L100.55 33.5L100.55 33.5L100.54 33.5L100.54 33.5L100.54 33.5L100.54 33.49L100.54 33.49L100.54 33.49L100.54 33.49L100.54 33.49L100.54 33.49L100.54 33.49L100.54 33.49L100.54 33.49L100.52 33.41L100.51 33.41L100.5 33.41L100.49 33.4L100.48 33.39L100.46 33.39L100.46 33.39L100.4 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.39 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.38 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.37 33.43L100.36 33.43L100.36 33.43L100.36 33.43L100.36 33.43L100.36 33.43L100.36 33.43L100.36 33.43L100.36 33.43L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.33L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.32L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.31L100.26 33.3L100.27 33.3L100.27 33.3L100.27 33.3L100.27 33.3L100.27 33.3L100.27 33.3L100.31 33.23L100.31 33.23L100.3 33.22L100.29 33.21L100.29 33.19L100.28 33.18L100.28 33.17L100.21 33.15L100.21 33.15L100.21 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.2 33.15L100.19 33.15L100.19 33.15L100.19 33.15L100.19 33.15L100.19 33.15L100.19 33.15L100.19 33.15L100.19 33.15L100.19 33.14L100.19 33.14L100.19 33.14L100.19 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.14L100.18 33.13L100.18 33.13L100.18 33.13L100.18 33.13L100.18 33.13L100.18 33L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.99L100.18 32.98L100.18 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.19 32.98L100.2 32.98L100.2 32.98L100.2 32.98L100.2 32.98L100.2 32.98L100.2 32.98L100.2 32.98L100.2 32.97L100.2 32.97L100.2 32.97L100.21 32.97L100.21 32.97L100.21 32.97L100.28 32.95L100.28 32.95L100.29 32.93L100.29 32.92L100.3 32.91L100.31 32.89L100.31 32.89L100.27 32.83L100.27 32.83L100.27 32.83L100.27 32.83L100.27 32.82L100.27 32.82L100.26 32.82L100.26 32.82L100.26 32.82L100.26 32.82L100.26 32.82L100.26 32.82L100.26 32.82L100.26 32.82L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.81L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.8L100.26 32.79L100.26 32.79L100.26 32.79L100.26 32.79L100.36 32.7L100.36 32.7L100.36 32.7L100.36 32.7L100.36 32.69L100.36 32.69L100.36 32.69L100.36 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.37 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.69L100.38 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.39 32.7L100.4 32.7L100.46 32.74L100.46 32.74L100.48 32.73L100.49 32.73L100.5 32.72L100.51 32.72L100.52 32.71L100.54 32.64L100.54 32.64L100.54 32.64L100.54 32.64L100.54 32.64L100.54 32.64L100.54 32.63L100.54 32.63L100.54 32.63L100.54 32.63L100.54 32.63L100.54 32.63L100.55 32.63L100.55 32.63L100.55 32.63L100.55 32.63L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.55 32.62L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.56 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.7 32.61L100.71 32.61L100.71 32.61L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.71 32.62L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.63L100.72 32.64L100.72 32.64L100.72 32.64L100.72 32.64L100.72 32.64L100.72 32.64L100.74 32.71L100.75 32.72L100.76 32.72L100.77 32.73L100.79 32.73L100.8 32.74L100.8 32.74L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.87 32.7L100.88 32.7L100.88 32.7L100.88 32.69L100.88 32.69L100.88 32.69L100.88 32.69L100.88 32.69L100.88 32.69L100.88 32.69L100.88 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.89 32.69L100.9 32.69L100.9 32.69L100.9 32.69L100.9 32.69L100.9 32.69L100.9 32.7L100.9 32.7L100.9 32.7L100.9 32.7L101 32.79L101 32.79L101 32.79L101 32.79L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.8L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.81L101 32.82L101 32.82L101 32.82L101 32.82L101 32.82L101 32.82L101 32.82L101 32.82L101 32.82L100.99 32.83L100.99 32.83L100.99 32.83L100.99 32.83L100.96 32.89L100.96 32.89L100.96 32.91L100.97 32.92L100.97 32.93L100.98 32.95L100.98 32.95L101.05 32.97L101.05 32.97L101.06 32.97L101.06 32.97L101.06 32.97L101.06 32.97L101.06 32.98L101.06 32.98L101.06 32.98L101.06 32.98L101.06 32.98L101.06 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.07 32.98L101.08 32.98L101.08 32.98L101.08 32.98L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 32.99L101.08 33L101.08 33.13L101.08 33.13L101.08 33.13L101.08 33.13L101.08 33.13L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.08 33.14L101.07 33.14L101.07 33.14L101.07 33.14L101.07 33.15L101.07 33.15L101.07 33.15L101.07 33.15L101.07 33.15L101.07 33.15L101.07 33.15L101.07 33.15L101.07 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.06 33.15L101.05 33.15L101.05 33.15L100.98 33.17L100.98 33.18L100.97 33.19L100.97 33.21L100.96 33.22L100.96 33.23L100.96 33.23L100.99 33.3L100.99 33.3L100.99 33.3L100.99 33.3L101 33.3L101 33.3L101 33.3L101 33.31L101 33.31L101 33.31L101 33.31L101 33.31L101 33.31L101 33.31L101 33.31L101 33.31L101 33.31L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.32L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L101 33.33L100.9 33.43L100.9 33.43L100.9 33.43L100.9 33.43L100.9 33.43L100.9 33.43L100.9 33.43L100.9 33.43L100.9 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.89 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.88 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.87 33.43L100.8 33.39L100.8 33.39L100.79 33.39L100.77 33.4L100.76 33.41L100.75 33.41L100.74 33.41L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.49L100.72 33.5L100.72 33.5L100.72 33.5L100.72 33.5L100.72 33.5L100.72 33.5L100.72 33.5L100.71 33.5L100.71 33.5L100.71 33.5L100.71 33.5L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.71 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.7 33.51L100.56 33.51L100.56 33.51L100.56 33.51ZM100.65 33.26L100.65 33.26L100.66 33.26L100.67 33.26L100.68 33.25L100.69 33.25L100.69 33.25L100.7 33.25L100.71 33.24L100.71 33.24L100.72 33.24L100.73 33.23L100.73 33.23L100.74 33.23L100.75 33.22L100.75 33.22L100.76 33.21L100.76 33.21L100.77 33.2L100.78 33.2L100.78 33.19L100.79 33.19L100.79 33.18L100.79 33.17L100.8 33.17L100.8 33.16L100.81 33.15L100.81 33.15L100.81 33.14L100.82 33.13L100.82 33.13L100.82 33.12L100.82 33.11L100.82 33.1L100.83 33.1L100.83 33.09L100.83 33.08L100.83 33.07L100.83 33.06L100.83 33.05L100.83 33.05L100.83 33.04L100.83 33.03L100.82 33.02L100.82 33.02L100.82 33.01L100.82 33L100.82 32.99L100.81 32.99L100.81 32.98L100.81 32.97L100.8 32.97L100.8 32.96L100.79 32.95L100.79 32.95L100.79 32.94L100.78 32.93L100.78 32.93L100.77 32.92L100.76 32.92L100.76 32.91L100.75 32.91L100.75 32.9L100.74 32.9L100.73 32.9L100.73 32.89L100.72 32.89L100.71 32.88L100.71 32.88L100.7 32.88L100.69 32.88L100.69 32.87L100.68 32.87L100.67 32.87L100.66 32.87L100.65 32.87L100.65 32.87L100.64 32.87L100.63 32.87L100.62 32.87L100.61 32.87L100.61 32.87L100.6 32.87L100.59 32.87L100.58 32.87L100.58 32.87L100.57 32.88L100.56 32.88L100.55 32.88L100.55 32.88L100.54 32.89L100.53 32.89L100.53 32.9L100.52 32.9L100.51 32.9L100.51 32.91L100.5 32.91L100.5 32.92L100.49 32.92L100.49 32.93L100.48 32.93L100.48 32.94L100.47 32.95L100.47 32.95L100.46 32.96L100.46 32.97L100.46 32.97L100.45 32.98L100.45 32.99L100.45 32.99L100.44 33L100.44 33.01L100.44 33.02L100.44 33.02L100.44 33.03L100.44 33.04L100.43 33.05L100.43 33.05L100.43 33.06L100.43 33.07L100.43 33.08L100.44 33.09L100.44 33.1L100.44 33.1L100.44 33.11L100.44 33.12L100.44 33.13L100.45 33.13L100.45 33.14L100.45 33.15L100.46 33.15L100.46 33.16L100.46 33.17L100.47 33.17L100.47 33.18L100.48 33.19L100.48 33.19L100.49 33.2L100.49 33.2L100.5 33.21L100.5 33.21L100.51 33.22L100.51 33.22L100.52 33.23L100.53 33.23L100.53 33.23L100.54 33.24L100.55 33.24L100.55 33.24L100.56 33.25L100.57 33.25L100.58 33.25L100.58 33.25L100.59 33.26L100.6 33.26L100.61 33.26L100.61 33.26L100.62 33.26L100.63 33.26L100.64 33.26L100.65 33.26Z" id="bOP4x02SQ"></path><path d="M114.66 52.61L86.63 30" id="aJyGXCglx"></path><path d="M92.05 7.39L64.92 7.39L27.85 52.61L64.92 52.61L104.71 7.39L155.93 52.61" id="baGmqcAt7"></path></defs><g><g><use xlink:href="#bOP4x02SQ" opacity="1" fill="#040e2a" fill-opacity="1"></use></g><g><g><use xlink:href="#aJyGXCglx" opacity="1" fill-opacity="0" stroke="#777777" stroke-width="2" stroke-opacity="1"></use></g></g><g><g><use xlink:href="#baGmqcAt7" opacity="1" fill-opacity="0" stroke="white" stroke-width="2" stroke-opacity="1"></use></g></g></g></svg>
      </div>

      <a name="send-feedback"       href="[[rootPath]]send-feedback">     <paper-item><h2>About</h2></paper-item></a>      
      <a name="primary-contract"    href="[[rootPath]]primary-contract">  <paper-item><h2>Primary Contract</h2></paper-item></a>
      <a name="sub-contract"        href="[[rootPath]]sub-contract">      <paper-item><h2>Subcontract</h2></paper-item></a>
      <a name="purchase-order"      href="[[rootPath]]purchase-order">    <paper-item><h2>Purchase Order</h2></paper-item></a>
      <a name="warranty-contract"   href="[[rootPath]]warranty-contract"> <paper-item><h2>Warranty</h2></paper-item></a>
      <a name="log-in"              href="[[rootPath]]log-in">            <paper-item><h2>Log In</h2></paper-item></a>

    </app-drawer>

    <!-- APP HEADER LAYOUT -->
    <app-header-layout
      fullbleed>

      <!-- APP HEADER -->
      <app-header
        slot="header"
        fixed>

        <!-- APP-TOOLBAR #1 -->
        <app-toolbar>

          <!-- PAPER-PROGRESS -->
          <paper-progress 
            bottom-item></paper-progress> 

          <!-- BUSINESS LOGO -->
          <div>
            <h1
              class="appTitle"
              main-title>Roofing Contract</h1>
          </div>

          <!-- SPAN DIVIDER -->
          <span class="flex" style="flex:1;"></span>

          <!-- SEARCH -->
          <paper-icon-button 
            id="trigger"
            role="button"
            icon="search"
            on-click="_toggleSearch"
            aria-expanded$="[[opened]]"
            aria-controls="collapse">[[_getText(opened)]]
          </paper-icon-button>

          <!-- PRINT -->
          <paper-icon-button 
            class="colored"
            role="button"
            onclick="window.print()"
            icon="print"></paper-icon-button>

          <!-- DRAWER TOGGLE -->
          <paper-icon-button
            drawer-toggle
            class="colored"
            role="button"
            id="printButton"
            icon="icons:menu"></paper-icon-button>

        </app-toolbar>
      </app-header>

      <!-- BODY -->
      <main>

        <!-- SEARCH CARD -->
        <iron-collapse
          id="collapse"
          opened="{{opened}}"
          horizontal="[[horizontal]]"
          no-animation="[[noAnimation]]"
          tabindex="0">

            <paper-card>
              <!-- GOOGLE CUSTOM SEARCH -->
              <slot name="search"></slot>
            </paper-card>
        
        </iron-collapse>
            
            <paper-card>
              <!-- GOOGLE ADVERTIZMENT -->
              <slot name="advert"></slot>
            </paper-card>

        <!-- IRON PAGES -->
        <iron-pages
          class="magicPagesOne"
          role="main"
          selected="[[page]]"
          attr-for-selected="name"
          fallback-selection="page-404">

          <!-- BUSINESS INTRODUCTION -->
          <send-feedback
            name="send-feedback"></send-feedback>

          <!-- ROOFING CONTRACT -->
          <primary-contract
            name="primary-contract"></primary-contract>
          
          <!-- ROOFING SUBCONTRACT -->
          <sub-contract
            name="sub-contract"></sub-contract>

          <!-- RESIDENTIAL ROOFING ESTIMATE -->
          <purchase-order
            name="purchase-order"></purchase-order>

          <!-- WARRANTY CONTACT -->
          <warranty-contract
            name="warranty-contract"></warranty-contract>

          <!-- PAGE 404 -->
          <page-404
            name="page-404"></page-404>            

        </iron-pages>
      </main>
    </app-drawer-layout>
  </app-header-layout>
  `}}e.ApplicationShell=hs,customElements.define("application-shell",hs);e.$applicationShell={ApplicationShell:hs}});