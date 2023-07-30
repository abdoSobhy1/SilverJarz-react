function bC(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();var Yu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function AT(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function IC(t){var e=t.default;if(typeof e=="function"){var n=function(){return e.apply(this,arguments)};n.prototype=e.prototype}else n={};return Object.defineProperty(n,"__esModule",{value:!0}),Object.keys(t).forEach(function(r){var i=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,i.get?i:{enumerable:!0,get:function(){return t[r]}})}),n}var M={exports:{}},me={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pu=Symbol.for("react.element"),kC=Symbol.for("react.portal"),AC=Symbol.for("react.fragment"),RC=Symbol.for("react.strict_mode"),CC=Symbol.for("react.profiler"),PC=Symbol.for("react.provider"),xC=Symbol.for("react.context"),NC=Symbol.for("react.forward_ref"),OC=Symbol.for("react.suspense"),DC=Symbol.for("react.memo"),LC=Symbol.for("react.lazy"),R_=Symbol.iterator;function MC(t){return t===null||typeof t!="object"?null:(t=R_&&t[R_]||t["@@iterator"],typeof t=="function"?t:null)}var RT={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},CT=Object.assign,PT={};function ia(t,e,n){this.props=t,this.context=e,this.refs=PT,this.updater=n||RT}ia.prototype.isReactComponent={};ia.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ia.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function xT(){}xT.prototype=ia.prototype;function Sv(t,e,n){this.props=t,this.context=e,this.refs=PT,this.updater=n||RT}var bv=Sv.prototype=new xT;bv.constructor=Sv;CT(bv,ia.prototype);bv.isPureReactComponent=!0;var C_=Array.isArray,NT=Object.prototype.hasOwnProperty,Iv={current:null},OT={key:!0,ref:!0,__self:!0,__source:!0};function DT(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)NT.call(e,r)&&!OT.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:pu,type:t,key:s,ref:o,props:i,_owner:Iv.current}}function VC(t,e){return{$$typeof:pu,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function kv(t){return typeof t=="object"&&t!==null&&t.$$typeof===pu}function FC(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var P_=/\/+/g;function Xh(t,e){return typeof t=="object"&&t!==null&&t.key!=null?FC(""+t.key):e.toString(36)}function jc(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case pu:case kC:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Xh(o,0):r,C_(i)?(n="",t!=null&&(n=t.replace(P_,"$&/")+"/"),jc(i,e,n,"",function(u){return u})):i!=null&&(kv(i)&&(i=VC(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(P_,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",C_(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Xh(s,a);o+=jc(s,e,n,l,i)}else if(l=MC(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Xh(s,a++),o+=jc(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xu(t,e,n){if(t==null)return t;var r=[],i=0;return jc(t,r,"","",function(s){return e.call(n,s,i++)}),r}function qC(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Zt={current:null},Bc={transition:null},UC={ReactCurrentDispatcher:Zt,ReactCurrentBatchConfig:Bc,ReactCurrentOwner:Iv};me.Children={map:Xu,forEach:function(t,e,n){Xu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xu(t,function(){e++}),e},toArray:function(t){return Xu(t,function(e){return e})||[]},only:function(t){if(!kv(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};me.Component=ia;me.Fragment=AC;me.Profiler=CC;me.PureComponent=Sv;me.StrictMode=RC;me.Suspense=OC;me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=UC;me.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=CT({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Iv.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)NT.call(e,l)&&!OT.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:pu,type:t.type,key:i,ref:s,props:r,_owner:o}};me.createContext=function(t){return t={$$typeof:xC,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:PC,_context:t},t.Consumer=t};me.createElement=DT;me.createFactory=function(t){var e=DT.bind(null,t);return e.type=t,e};me.createRef=function(){return{current:null}};me.forwardRef=function(t){return{$$typeof:NC,render:t}};me.isValidElement=kv;me.lazy=function(t){return{$$typeof:LC,_payload:{_status:-1,_result:t},_init:qC}};me.memo=function(t,e){return{$$typeof:DC,type:t,compare:e===void 0?null:e}};me.startTransition=function(t){var e=Bc.transition;Bc.transition={};try{t()}finally{Bc.transition=e}};me.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};me.useCallback=function(t,e){return Zt.current.useCallback(t,e)};me.useContext=function(t){return Zt.current.useContext(t)};me.useDebugValue=function(){};me.useDeferredValue=function(t){return Zt.current.useDeferredValue(t)};me.useEffect=function(t,e){return Zt.current.useEffect(t,e)};me.useId=function(){return Zt.current.useId()};me.useImperativeHandle=function(t,e,n){return Zt.current.useImperativeHandle(t,e,n)};me.useInsertionEffect=function(t,e){return Zt.current.useInsertionEffect(t,e)};me.useLayoutEffect=function(t,e){return Zt.current.useLayoutEffect(t,e)};me.useMemo=function(t,e){return Zt.current.useMemo(t,e)};me.useReducer=function(t,e,n){return Zt.current.useReducer(t,e,n)};me.useRef=function(t){return Zt.current.useRef(t)};me.useState=function(t){return Zt.current.useState(t)};me.useSyncExternalStore=function(t,e,n){return Zt.current.useSyncExternalStore(t,e,n)};me.useTransition=function(){return Zt.current.useTransition()};me.version="18.2.0";(function(t){t.exports=me})(M);const bf=AT(M.exports),LT=bC({__proto__:null,default:bf},[M.exports]);var gm={},MT={exports:{}},Tn={},VT={exports:{}},FT={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(V,Y){var te=V.length;V.push(Y);e:for(;0<te;){var Ae=te-1>>>1,be=V[Ae];if(0<i(be,Y))V[Ae]=Y,V[te]=be,te=Ae;else break e}}function n(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var Y=V[0],te=V.pop();if(te!==Y){V[0]=te;e:for(var Ae=0,be=V.length,ei=be>>>1;Ae<ei;){var _e=2*(Ae+1)-1,yr=V[_e],Jn=_e+1,$s=V[Jn];if(0>i(yr,te))Jn<be&&0>i($s,yr)?(V[Ae]=$s,V[Jn]=te,Ae=Jn):(V[Ae]=yr,V[_e]=te,Ae=_e);else if(Jn<be&&0>i($s,te))V[Ae]=$s,V[Jn]=te,Ae=Jn;else break e}}return Y}function i(V,Y){var te=V.sortIndex-Y.sortIndex;return te!==0?te:V.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,f=3,m=!1,w=!1,_=!1,E=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,h=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(V){for(var Y=n(u);Y!==null;){if(Y.callback===null)r(u);else if(Y.startTime<=V)r(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=n(u)}}function g(V){if(_=!1,y(V),!w)if(n(l)!==null)w=!0,$e(T);else{var Y=n(u);Y!==null&&bt(g,Y.startTime-V)}}function T(V,Y){w=!1,_&&(_=!1,v(b),b=-1),m=!0;var te=f;try{for(y(Y),d=n(l);d!==null&&(!(d.expirationTime>Y)||V&&!B());){var Ae=d.callback;if(typeof Ae=="function"){d.callback=null,f=d.priorityLevel;var be=Ae(d.expirationTime<=Y);Y=t.unstable_now(),typeof be=="function"?d.callback=be:d===n(l)&&r(l),y(Y)}else r(l);d=n(l)}if(d!==null)var ei=!0;else{var _e=n(u);_e!==null&&bt(g,_e.startTime-Y),ei=!1}return ei}finally{d=null,f=te,m=!1}}var S=!1,A=null,b=-1,C=5,P=-1;function B(){return!(t.unstable_now()-P<C)}function q(){if(A!==null){var V=t.unstable_now();P=V;var Y=!0;try{Y=A(!0,V)}finally{Y?H():(S=!1,A=null)}}else S=!1}var H;if(typeof h=="function")H=function(){h(q)};else if(typeof MessageChannel<"u"){var Ot=new MessageChannel,Pe=Ot.port2;Ot.port1.onmessage=q,H=function(){Pe.postMessage(null)}}else H=function(){E(q,0)};function $e(V){A=V,S||(S=!0,H())}function bt(V,Y){b=E(function(){V(t.unstable_now())},Y)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(V){V.callback=null},t.unstable_continueExecution=function(){w||m||(w=!0,$e(T))},t.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):C=0<V?Math.floor(1e3/V):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(V){switch(f){case 1:case 2:case 3:var Y=3;break;default:Y=f}var te=f;f=Y;try{return V()}finally{f=te}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(V,Y){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var te=f;f=V;try{return Y()}finally{f=te}},t.unstable_scheduleCallback=function(V,Y,te){var Ae=t.unstable_now();switch(typeof te=="object"&&te!==null?(te=te.delay,te=typeof te=="number"&&0<te?Ae+te:Ae):te=Ae,V){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=te+be,V={id:c++,callback:Y,priorityLevel:V,startTime:te,expirationTime:be,sortIndex:-1},te>Ae?(V.sortIndex=te,e(u,V),n(l)===null&&V===n(u)&&(_?(v(b),b=-1):_=!0,bt(g,te-Ae))):(V.sortIndex=be,e(l,V),w||m||(w=!0,$e(T))),V},t.unstable_shouldYield=B,t.unstable_wrapCallback=function(V){var Y=f;return function(){var te=f;f=Y;try{return V.apply(this,arguments)}finally{f=te}}}})(FT);(function(t){t.exports=FT})(VT);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qT=M.exports,wn=VT.exports;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var UT=new Set,Tl={};function Os(t,e){Lo(t,e),Lo(t+"Capture",e)}function Lo(t,e){for(Tl[t]=e,t=0;t<e.length;t++)UT.add(e[t])}var Dr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vm=Object.prototype.hasOwnProperty,$C=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x_={},N_={};function zC(t){return vm.call(N_,t)?!0:vm.call(x_,t)?!1:$C.test(t)?N_[t]=!0:(x_[t]=!0,!1)}function jC(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function BC(t,e,n,r){if(e===null||typeof e>"u"||jC(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function en(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Nt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Nt[t]=new en(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Nt[e]=new en(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Nt[t]=new en(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Nt[t]=new en(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Nt[t]=new en(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Nt[t]=new en(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Nt[t]=new en(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Nt[t]=new en(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Nt[t]=new en(t,5,!1,t.toLowerCase(),null,!1,!1)});var Av=/[\-:]([a-z])/g;function Rv(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Av,Rv);Nt[e]=new en(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Av,Rv);Nt[e]=new en(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Av,Rv);Nt[e]=new en(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Nt[t]=new en(t,1,!1,t.toLowerCase(),null,!1,!1)});Nt.xlinkHref=new en("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Nt[t]=new en(t,1,!1,t.toLowerCase(),null,!0,!0)});function Cv(t,e,n,r){var i=Nt.hasOwnProperty(e)?Nt[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(BC(e,n,i,r)&&(n=null),r||i===null?zC(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Kr=qT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ju=Symbol.for("react.element"),Js=Symbol.for("react.portal"),Zs=Symbol.for("react.fragment"),Pv=Symbol.for("react.strict_mode"),ym=Symbol.for("react.profiler"),$T=Symbol.for("react.provider"),zT=Symbol.for("react.context"),xv=Symbol.for("react.forward_ref"),_m=Symbol.for("react.suspense"),wm=Symbol.for("react.suspense_list"),Nv=Symbol.for("react.memo"),ai=Symbol.for("react.lazy"),jT=Symbol.for("react.offscreen"),O_=Symbol.iterator;function Ia(t){return t===null||typeof t!="object"?null:(t=O_&&t[O_]||t["@@iterator"],typeof t=="function"?t:null)}var He=Object.assign,Jh;function ja(t){if(Jh===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Jh=e&&e[1]||""}return`
`+Jh+t}var Zh=!1;function ep(t,e){if(!t||Zh)return"";Zh=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Zh=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ja(t):""}function HC(t){switch(t.tag){case 5:return ja(t.type);case 16:return ja("Lazy");case 13:return ja("Suspense");case 19:return ja("SuspenseList");case 0:case 2:case 15:return t=ep(t.type,!1),t;case 11:return t=ep(t.type.render,!1),t;case 1:return t=ep(t.type,!0),t;default:return""}}function Em(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Zs:return"Fragment";case Js:return"Portal";case ym:return"Profiler";case Pv:return"StrictMode";case _m:return"Suspense";case wm:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case zT:return(t.displayName||"Context")+".Consumer";case $T:return(t._context.displayName||"Context")+".Provider";case xv:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Nv:return e=t.displayName||null,e!==null?e:Em(t.type)||"Memo";case ai:e=t._payload,t=t._init;try{return Em(t(e))}catch{}}return null}function WC(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Em(e);case 8:return e===Pv?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ci(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function BT(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function KC(t){var e=BT(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zu(t){t._valueTracker||(t._valueTracker=KC(t))}function HT(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=BT(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function dd(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Tm(t,e){var n=e.checked;return He({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function D_(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Ci(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function WT(t,e){e=e.checked,e!=null&&Cv(t,"checked",e,!1)}function Sm(t,e){WT(t,e);var n=Ci(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?bm(t,e.type,n):e.hasOwnProperty("defaultValue")&&bm(t,e.type,Ci(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function L_(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function bm(t,e,n){(e!=="number"||dd(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ba=Array.isArray;function yo(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Ci(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Im(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return He({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function M_(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Ba(n)){if(1<n.length)throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ci(n)}}function KT(t,e){var n=Ci(e.value),r=Ci(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function V_(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function GT(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function km(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?GT(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ec,QT=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ec=ec||document.createElement("div"),ec.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ec.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Sl(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var el={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},GC=["Webkit","ms","Moz","O"];Object.keys(el).forEach(function(t){GC.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),el[e]=el[t]})});function YT(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||el.hasOwnProperty(t)&&el[t]?(""+e).trim():e+"px"}function XT(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=YT(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var QC=He({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Am(t,e){if(e){if(QC[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function Rm(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Cm=null;function Ov(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pm=null,_o=null,wo=null;function F_(t){if(t=vu(t)){if(typeof Pm!="function")throw Error(O(280));var e=t.stateNode;e&&(e=Cf(e),Pm(t.stateNode,t.type,e))}}function JT(t){_o?wo?wo.push(t):wo=[t]:_o=t}function ZT(){if(_o){var t=_o,e=wo;if(wo=_o=null,F_(t),e)for(t=0;t<e.length;t++)F_(e[t])}}function eS(t,e){return t(e)}function tS(){}var tp=!1;function nS(t,e,n){if(tp)return t(e,n);tp=!0;try{return eS(t,e,n)}finally{tp=!1,(_o!==null||wo!==null)&&(tS(),ZT())}}function bl(t,e){var n=t.stateNode;if(n===null)return null;var r=Cf(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var xm=!1;if(Dr)try{var ka={};Object.defineProperty(ka,"passive",{get:function(){xm=!0}}),window.addEventListener("test",ka,ka),window.removeEventListener("test",ka,ka)}catch{xm=!1}function YC(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var tl=!1,fd=null,hd=!1,Nm=null,XC={onError:function(t){tl=!0,fd=t}};function JC(t,e,n,r,i,s,o,a,l){tl=!1,fd=null,YC.apply(XC,arguments)}function ZC(t,e,n,r,i,s,o,a,l){if(JC.apply(this,arguments),tl){if(tl){var u=fd;tl=!1,fd=null}else throw Error(O(198));hd||(hd=!0,Nm=u)}}function Ds(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&4098)!==0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function rS(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function q_(t){if(Ds(t)!==t)throw Error(O(188))}function eP(t){var e=t.alternate;if(!e){if(e=Ds(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return q_(i),t;if(s===r)return q_(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function iS(t){return t=eP(t),t!==null?sS(t):null}function sS(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=sS(t);if(e!==null)return e;t=t.sibling}return null}var oS=wn.unstable_scheduleCallback,U_=wn.unstable_cancelCallback,tP=wn.unstable_shouldYield,nP=wn.unstable_requestPaint,Ze=wn.unstable_now,rP=wn.unstable_getCurrentPriorityLevel,Dv=wn.unstable_ImmediatePriority,aS=wn.unstable_UserBlockingPriority,pd=wn.unstable_NormalPriority,iP=wn.unstable_LowPriority,lS=wn.unstable_IdlePriority,If=null,dr=null;function sP(t){if(dr&&typeof dr.onCommitFiberRoot=="function")try{dr.onCommitFiberRoot(If,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:lP,oP=Math.log,aP=Math.LN2;function lP(t){return t>>>=0,t===0?32:31-(oP(t)/aP|0)|0}var tc=64,nc=4194304;function Ha(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function md(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=Ha(a):(s&=o,s!==0&&(r=Ha(s)))}else o=n&~i,o!==0?r=Ha(o):s!==0&&(r=Ha(s));if(r===0)return 0;if(e!==0&&e!==r&&(e&i)===0&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if((r&4)!==0&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Hn(e),i=1<<n,r|=t[n],e&=~i;return r}function uP(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function cP(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Hn(s),a=1<<o,l=i[o];l===-1?((a&n)===0||(a&r)!==0)&&(i[o]=uP(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Om(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function uS(){var t=tc;return tc<<=1,(tc&4194240)===0&&(tc=64),t}function np(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function mu(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function dP(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-Hn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Lv(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-Hn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var Te=0;function cS(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var dS,Mv,fS,hS,pS,Dm=!1,rc=[],yi=null,_i=null,wi=null,Il=new Map,kl=new Map,ci=[],fP="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function $_(t,e){switch(t){case"focusin":case"focusout":yi=null;break;case"dragenter":case"dragleave":_i=null;break;case"mouseover":case"mouseout":wi=null;break;case"pointerover":case"pointerout":Il.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":kl.delete(e.pointerId)}}function Aa(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=vu(e),e!==null&&Mv(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function hP(t,e,n,r,i){switch(e){case"focusin":return yi=Aa(yi,t,e,n,r,i),!0;case"dragenter":return _i=Aa(_i,t,e,n,r,i),!0;case"mouseover":return wi=Aa(wi,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Il.set(s,Aa(Il.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,kl.set(s,Aa(kl.get(s)||null,t,e,n,r,i)),!0}return!1}function mS(t){var e=ts(t.target);if(e!==null){var n=Ds(e);if(n!==null){if(e=n.tag,e===13){if(e=rS(n),e!==null){t.blockedOn=e,pS(t.priority,function(){fS(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Hc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Lm(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Cm=r,n.target.dispatchEvent(r),Cm=null}else return e=vu(n),e!==null&&Mv(e),t.blockedOn=n,!1;e.shift()}return!0}function z_(t,e,n){Hc(t)&&n.delete(e)}function pP(){Dm=!1,yi!==null&&Hc(yi)&&(yi=null),_i!==null&&Hc(_i)&&(_i=null),wi!==null&&Hc(wi)&&(wi=null),Il.forEach(z_),kl.forEach(z_)}function Ra(t,e){t.blockedOn===e&&(t.blockedOn=null,Dm||(Dm=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,pP)))}function Al(t){function e(i){return Ra(i,t)}if(0<rc.length){Ra(rc[0],t);for(var n=1;n<rc.length;n++){var r=rc[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yi!==null&&Ra(yi,t),_i!==null&&Ra(_i,t),wi!==null&&Ra(wi,t),Il.forEach(e),kl.forEach(e),n=0;n<ci.length;n++)r=ci[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ci.length&&(n=ci[0],n.blockedOn===null);)mS(n),n.blockedOn===null&&ci.shift()}var Eo=Kr.ReactCurrentBatchConfig,gd=!0;function mP(t,e,n,r){var i=Te,s=Eo.transition;Eo.transition=null;try{Te=1,Vv(t,e,n,r)}finally{Te=i,Eo.transition=s}}function gP(t,e,n,r){var i=Te,s=Eo.transition;Eo.transition=null;try{Te=4,Vv(t,e,n,r)}finally{Te=i,Eo.transition=s}}function Vv(t,e,n,r){if(gd){var i=Lm(t,e,n,r);if(i===null)fp(t,e,r,vd,n),$_(t,r);else if(hP(i,t,e,n,r))r.stopPropagation();else if($_(t,r),e&4&&-1<fP.indexOf(t)){for(;i!==null;){var s=vu(i);if(s!==null&&dS(s),s=Lm(t,e,n,r),s===null&&fp(t,e,r,vd,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else fp(t,e,r,null,n)}}var vd=null;function Lm(t,e,n,r){if(vd=null,t=Ov(r),t=ts(t),t!==null)if(e=Ds(t),e===null)t=null;else if(n=e.tag,n===13){if(t=rS(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return vd=t,null}function gS(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rP()){case Dv:return 1;case aS:return 4;case pd:case iP:return 16;case lS:return 536870912;default:return 16}default:return 16}}var hi=null,Fv=null,Wc=null;function vS(){if(Wc)return Wc;var t,e=Fv,n=e.length,r,i="value"in hi?hi.value:hi.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Wc=i.slice(t,1<r?1-r:void 0)}function Kc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ic(){return!0}function j_(){return!1}function Sn(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ic:j_,this.isPropagationStopped=j_,this}return He(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ic)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ic)},persist:function(){},isPersistent:ic}),e}var sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qv=Sn(sa),gu=He({},sa,{view:0,detail:0}),vP=Sn(gu),rp,ip,Ca,kf=He({},gu,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Uv,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ca&&(Ca&&t.type==="mousemove"?(rp=t.screenX-Ca.screenX,ip=t.screenY-Ca.screenY):ip=rp=0,Ca=t),rp)},movementY:function(t){return"movementY"in t?t.movementY:ip}}),B_=Sn(kf),yP=He({},kf,{dataTransfer:0}),_P=Sn(yP),wP=He({},gu,{relatedTarget:0}),sp=Sn(wP),EP=He({},sa,{animationName:0,elapsedTime:0,pseudoElement:0}),TP=Sn(EP),SP=He({},sa,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bP=Sn(SP),IP=He({},sa,{data:0}),H_=Sn(IP),kP={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},AP={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},RP={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function CP(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=RP[t])?!!e[t]:!1}function Uv(){return CP}var PP=He({},gu,{key:function(t){if(t.key){var e=kP[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Kc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?AP[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Uv,charCode:function(t){return t.type==="keypress"?Kc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Kc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),xP=Sn(PP),NP=He({},kf,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),W_=Sn(NP),OP=He({},gu,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Uv}),DP=Sn(OP),LP=He({},sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),MP=Sn(LP),VP=He({},kf,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),FP=Sn(VP),qP=[9,13,27,32],$v=Dr&&"CompositionEvent"in window,nl=null;Dr&&"documentMode"in document&&(nl=document.documentMode);var UP=Dr&&"TextEvent"in window&&!nl,yS=Dr&&(!$v||nl&&8<nl&&11>=nl),K_=String.fromCharCode(32),G_=!1;function _S(t,e){switch(t){case"keyup":return qP.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function wS(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var eo=!1;function $P(t,e){switch(t){case"compositionend":return wS(e);case"keypress":return e.which!==32?null:(G_=!0,K_);case"textInput":return t=e.data,t===K_&&G_?null:t;default:return null}}function zP(t,e){if(eo)return t==="compositionend"||!$v&&_S(t,e)?(t=vS(),Wc=Fv=hi=null,eo=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return yS&&e.locale!=="ko"?null:e.data;default:return null}}var jP={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Q_(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jP[t.type]:e==="textarea"}function ES(t,e,n,r){JT(r),e=yd(e,"onChange"),0<e.length&&(n=new qv("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var rl=null,Rl=null;function BP(t){NS(t,0)}function Af(t){var e=ro(t);if(HT(e))return t}function HP(t,e){if(t==="change")return e}var TS=!1;if(Dr){var op;if(Dr){var ap="oninput"in document;if(!ap){var Y_=document.createElement("div");Y_.setAttribute("oninput","return;"),ap=typeof Y_.oninput=="function"}op=ap}else op=!1;TS=op&&(!document.documentMode||9<document.documentMode)}function X_(){rl&&(rl.detachEvent("onpropertychange",SS),Rl=rl=null)}function SS(t){if(t.propertyName==="value"&&Af(Rl)){var e=[];ES(e,Rl,t,Ov(t)),nS(BP,e)}}function WP(t,e,n){t==="focusin"?(X_(),rl=e,Rl=n,rl.attachEvent("onpropertychange",SS)):t==="focusout"&&X_()}function KP(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Af(Rl)}function GP(t,e){if(t==="click")return Af(e)}function QP(t,e){if(t==="input"||t==="change")return Af(e)}function YP(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qn=typeof Object.is=="function"?Object.is:YP;function Cl(t,e){if(Qn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!vm.call(e,i)||!Qn(t[i],e[i]))return!1}return!0}function J_(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Z_(t,e){var n=J_(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=J_(n)}}function bS(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?bS(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function IS(){for(var t=window,e=dd();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=dd(t.document)}return e}function zv(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function XP(t){var e=IS(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&bS(n.ownerDocument.documentElement,n)){if(r!==null&&zv(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=Z_(n,s);var o=Z_(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var JP=Dr&&"documentMode"in document&&11>=document.documentMode,to=null,Mm=null,il=null,Vm=!1;function e1(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vm||to==null||to!==dd(r)||(r=to,"selectionStart"in r&&zv(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),il&&Cl(il,r)||(il=r,r=yd(Mm,"onSelect"),0<r.length&&(e=new qv("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=to)))}function sc(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var no={animationend:sc("Animation","AnimationEnd"),animationiteration:sc("Animation","AnimationIteration"),animationstart:sc("Animation","AnimationStart"),transitionend:sc("Transition","TransitionEnd")},lp={},kS={};Dr&&(kS=document.createElement("div").style,"AnimationEvent"in window||(delete no.animationend.animation,delete no.animationiteration.animation,delete no.animationstart.animation),"TransitionEvent"in window||delete no.transitionend.transition);function Rf(t){if(lp[t])return lp[t];if(!no[t])return t;var e=no[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in kS)return lp[t]=e[n];return t}var AS=Rf("animationend"),RS=Rf("animationiteration"),CS=Rf("animationstart"),PS=Rf("transitionend"),xS=new Map,t1="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function $i(t,e){xS.set(t,e),Os(e,[t])}for(var up=0;up<t1.length;up++){var cp=t1[up],ZP=cp.toLowerCase(),ex=cp[0].toUpperCase()+cp.slice(1);$i(ZP,"on"+ex)}$i(AS,"onAnimationEnd");$i(RS,"onAnimationIteration");$i(CS,"onAnimationStart");$i("dblclick","onDoubleClick");$i("focusin","onFocus");$i("focusout","onBlur");$i(PS,"onTransitionEnd");Lo("onMouseEnter",["mouseout","mouseover"]);Lo("onMouseLeave",["mouseout","mouseover"]);Lo("onPointerEnter",["pointerout","pointerover"]);Lo("onPointerLeave",["pointerout","pointerover"]);Os("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Os("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Os("onBeforeInput",["compositionend","keypress","textInput","paste"]);Os("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Os("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Wa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),tx=new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));function n1(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,ZC(r,e,void 0,t),t.currentTarget=null}function NS(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;n1(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;n1(i,a,u),s=l}}}if(hd)throw t=Nm,hd=!1,Nm=null,t}function xe(t,e){var n=e[zm];n===void 0&&(n=e[zm]=new Set);var r=t+"__bubble";n.has(r)||(OS(e,t,2,!1),n.add(r))}function dp(t,e,n){var r=0;e&&(r|=4),OS(n,t,r,e)}var oc="_reactListening"+Math.random().toString(36).slice(2);function Pl(t){if(!t[oc]){t[oc]=!0,UT.forEach(function(n){n!=="selectionchange"&&(tx.has(n)||dp(n,!1,t),dp(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[oc]||(e[oc]=!0,dp("selectionchange",!1,e))}}function OS(t,e,n,r){switch(gS(e)){case 1:var i=mP;break;case 4:i=gP;break;default:i=Vv}n=i.bind(null,e,n,t),i=void 0,!xm||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function fp(t,e,n,r,i){var s=r;if((e&1)===0&&(e&2)===0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=ts(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}nS(function(){var u=s,c=Ov(n),d=[];e:{var f=xS.get(t);if(f!==void 0){var m=qv,w=t;switch(t){case"keypress":if(Kc(n)===0)break e;case"keydown":case"keyup":m=xP;break;case"focusin":w="focus",m=sp;break;case"focusout":w="blur",m=sp;break;case"beforeblur":case"afterblur":m=sp;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=B_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=_P;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=DP;break;case AS:case RS:case CS:m=TP;break;case PS:m=MP;break;case"scroll":m=vP;break;case"wheel":m=FP;break;case"copy":case"cut":case"paste":m=bP;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=W_}var _=(e&4)!==0,E=!_&&t==="scroll",v=_?f!==null?f+"Capture":null:f;_=[];for(var h=u,y;h!==null;){y=h;var g=y.stateNode;if(y.tag===5&&g!==null&&(y=g,v!==null&&(g=bl(h,v),g!=null&&_.push(xl(h,g,y)))),E)break;h=h.return}0<_.length&&(f=new m(f,w,null,n,c),d.push({event:f,listeners:_}))}}if((e&7)===0){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Cm&&(w=n.relatedTarget||n.fromElement)&&(ts(w)||w[Lr]))break e;if((m||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,m?(w=n.relatedTarget||n.toElement,m=u,w=w?ts(w):null,w!==null&&(E=Ds(w),w!==E||w.tag!==5&&w.tag!==6)&&(w=null)):(m=null,w=u),m!==w)){if(_=B_,g="onMouseLeave",v="onMouseEnter",h="mouse",(t==="pointerout"||t==="pointerover")&&(_=W_,g="onPointerLeave",v="onPointerEnter",h="pointer"),E=m==null?f:ro(m),y=w==null?f:ro(w),f=new _(g,h+"leave",m,n,c),f.target=E,f.relatedTarget=y,g=null,ts(c)===u&&(_=new _(v,h+"enter",w,n,c),_.target=y,_.relatedTarget=E,g=_),E=g,m&&w)t:{for(_=m,v=w,h=0,y=_;y;y=zs(y))h++;for(y=0,g=v;g;g=zs(g))y++;for(;0<h-y;)_=zs(_),h--;for(;0<y-h;)v=zs(v),y--;for(;h--;){if(_===v||v!==null&&_===v.alternate)break t;_=zs(_),v=zs(v)}_=null}else _=null;m!==null&&r1(d,f,m,_,!1),w!==null&&E!==null&&r1(d,E,w,_,!0)}}e:{if(f=u?ro(u):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var T=HP;else if(Q_(f))if(TS)T=QP;else{T=KP;var S=WP}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=GP);if(T&&(T=T(t,u))){ES(d,T,n,c);break e}S&&S(t,f,u),t==="focusout"&&(S=f._wrapperState)&&S.controlled&&f.type==="number"&&bm(f,"number",f.value)}switch(S=u?ro(u):window,t){case"focusin":(Q_(S)||S.contentEditable==="true")&&(to=S,Mm=u,il=null);break;case"focusout":il=Mm=to=null;break;case"mousedown":Vm=!0;break;case"contextmenu":case"mouseup":case"dragend":Vm=!1,e1(d,n,c);break;case"selectionchange":if(JP)break;case"keydown":case"keyup":e1(d,n,c)}var A;if($v)e:{switch(t){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else eo?_S(t,n)&&(b="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(b="onCompositionStart");b&&(yS&&n.locale!=="ko"&&(eo||b!=="onCompositionStart"?b==="onCompositionEnd"&&eo&&(A=vS()):(hi=c,Fv="value"in hi?hi.value:hi.textContent,eo=!0)),S=yd(u,b),0<S.length&&(b=new H_(b,t,null,n,c),d.push({event:b,listeners:S}),A?b.data=A:(A=wS(n),A!==null&&(b.data=A)))),(A=UP?$P(t,n):zP(t,n))&&(u=yd(u,"onBeforeInput"),0<u.length&&(c=new H_("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=A))}NS(d,e)})}function xl(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yd(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=bl(t,n),s!=null&&r.unshift(xl(t,s,i)),s=bl(t,e),s!=null&&r.push(xl(t,s,i))),t=t.return}return r}function zs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function r1(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=bl(n,s),l!=null&&o.unshift(xl(n,l,a))):i||(l=bl(n,s),l!=null&&o.push(xl(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var nx=/\r\n?/g,rx=/\u0000|\uFFFD/g;function i1(t){return(typeof t=="string"?t:""+t).replace(nx,`
`).replace(rx,"")}function ac(t,e,n){if(e=i1(e),i1(t)!==e&&n)throw Error(O(425))}function _d(){}var Fm=null,qm=null;function Um(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var $m=typeof setTimeout=="function"?setTimeout:void 0,ix=typeof clearTimeout=="function"?clearTimeout:void 0,s1=typeof Promise=="function"?Promise:void 0,sx=typeof queueMicrotask=="function"?queueMicrotask:typeof s1<"u"?function(t){return s1.resolve(null).then(t).catch(ox)}:$m;function ox(t){setTimeout(function(){throw t})}function hp(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Al(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Al(e)}function Ei(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function o1(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var oa=Math.random().toString(36).slice(2),tr="__reactFiber$"+oa,Nl="__reactProps$"+oa,Lr="__reactContainer$"+oa,zm="__reactEvents$"+oa,ax="__reactListeners$"+oa,lx="__reactHandles$"+oa;function ts(t){var e=t[tr];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Lr]||n[tr]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=o1(t);t!==null;){if(n=t[tr])return n;t=o1(t)}return e}t=n,n=t.parentNode}return null}function vu(t){return t=t[tr]||t[Lr],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ro(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function Cf(t){return t[Nl]||null}var jm=[],io=-1;function zi(t){return{current:t}}function De(t){0>io||(t.current=jm[io],jm[io]=null,io--)}function Ce(t,e){io++,jm[io]=t.current,t.current=e}var Pi={},Wt=zi(Pi),ln=zi(!1),_s=Pi;function Mo(t,e){var n=t.type.contextTypes;if(!n)return Pi;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function un(t){return t=t.childContextTypes,t!=null}function wd(){De(ln),De(Wt)}function a1(t,e,n){if(Wt.current!==Pi)throw Error(O(168));Ce(Wt,e),Ce(ln,n)}function DS(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(O(108,WC(t)||"Unknown",i));return He({},n,r)}function Ed(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Pi,_s=Wt.current,Ce(Wt,t),Ce(ln,ln.current),!0}function l1(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=DS(t,e,_s),r.__reactInternalMemoizedMergedChildContext=t,De(ln),De(Wt),Ce(Wt,t)):De(ln),Ce(ln,n)}var Tr=null,Pf=!1,pp=!1;function LS(t){Tr===null?Tr=[t]:Tr.push(t)}function ux(t){Pf=!0,LS(t)}function ji(){if(!pp&&Tr!==null){pp=!0;var t=0,e=Te;try{var n=Tr;for(Te=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Tr=null,Pf=!1}catch(i){throw Tr!==null&&(Tr=Tr.slice(t+1)),oS(Dv,ji),i}finally{Te=e,pp=!1}}return null}var so=[],oo=0,Td=null,Sd=0,kn=[],An=0,ws=null,Sr=1,br="";function Ji(t,e){so[oo++]=Sd,so[oo++]=Td,Td=t,Sd=e}function MS(t,e,n){kn[An++]=Sr,kn[An++]=br,kn[An++]=ws,ws=t;var r=Sr;t=br;var i=32-Hn(r)-1;r&=~(1<<i),n+=1;var s=32-Hn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Sr=1<<32-Hn(e)+i|n<<i|r,br=s+t}else Sr=1<<s|n<<i|r,br=t}function jv(t){t.return!==null&&(Ji(t,1),MS(t,1,0))}function Bv(t){for(;t===Td;)Td=so[--oo],so[oo]=null,Sd=so[--oo],so[oo]=null;for(;t===ws;)ws=kn[--An],kn[An]=null,br=kn[--An],kn[An]=null,Sr=kn[--An],kn[An]=null}var yn=null,pn=null,qe=!1,zn=null;function VS(t,e){var n=xn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function u1(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,yn=t,pn=Ei(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,yn=t,pn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=ws!==null?{id:Sr,overflow:br}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=xn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,yn=t,pn=null,!0):!1;default:return!1}}function Bm(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Hm(t){if(qe){var e=pn;if(e){var n=e;if(!u1(t,e)){if(Bm(t))throw Error(O(418));e=Ei(n.nextSibling);var r=yn;e&&u1(t,e)?VS(r,n):(t.flags=t.flags&-4097|2,qe=!1,yn=t)}}else{if(Bm(t))throw Error(O(418));t.flags=t.flags&-4097|2,qe=!1,yn=t}}}function c1(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;yn=t}function lc(t){if(t!==yn)return!1;if(!qe)return c1(t),qe=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Um(t.type,t.memoizedProps)),e&&(e=pn)){if(Bm(t))throw FS(),Error(O(418));for(;e;)VS(t,e),e=Ei(e.nextSibling)}if(c1(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){pn=Ei(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}pn=null}}else pn=yn?Ei(t.stateNode.nextSibling):null;return!0}function FS(){for(var t=pn;t;)t=Ei(t.nextSibling)}function Vo(){pn=yn=null,qe=!1}function Hv(t){zn===null?zn=[t]:zn.push(t)}var cx=Kr.ReactCurrentBatchConfig;function qn(t,e){if(t&&t.defaultProps){e=He({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var bd=zi(null),Id=null,ao=null,Wv=null;function Kv(){Wv=ao=Id=null}function Gv(t){var e=bd.current;De(bd),t._currentValue=e}function Wm(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function To(t,e){Id=t,Wv=ao=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!==0&&(an=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(Wv!==t)if(t={context:t,memoizedValue:e,next:null},ao===null){if(Id===null)throw Error(O(308));ao=t,Id.dependencies={lanes:0,firstContext:t}}else ao=ao.next=t;return e}var ns=null;function Qv(t){ns===null?ns=[t]:ns.push(t)}function qS(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,Qv(e)):(n.next=i.next,i.next=n),e.interleaved=n,Mr(t,r)}function Mr(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var li=!1;function Yv(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function US(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Cr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ti(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,(ye&2)!==0){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Mr(t,n)}return i=r.interleaved,i===null?(e.next=e,Qv(r)):(e.next=i.next,i.next=e),r.interleaved=e,Mr(t,n)}function Gc(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lv(t,n)}}function d1(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function kd(t,e,n,r){var i=t.updateQueue;li=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,c=u=l=null,a=s;do{var f=a.lane,m=a.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:m,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var w=t,_=a;switch(f=e,m=n,_.tag){case 1:if(w=_.payload,typeof w=="function"){d=w.call(m,d,f);break e}d=w;break e;case 3:w.flags=w.flags&-65537|128;case 0:if(w=_.payload,f=typeof w=="function"?w.call(m,d,f):w,f==null)break e;d=He({},d,f);break e;case 2:li=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=i.effects,f===null?i.effects=[a]:f.push(a))}else m={eventTime:m,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=m,l=d):c=c.next=m,o|=f;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;f=a,a=f.next,f.next=null,i.lastBaseUpdate=f,i.shared.pending=null}}while(1);if(c===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Ts|=o,t.lanes=o,t.memoizedState=d}}function f1(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var $S=new qT.Component().refs;function Km(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:He({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var xf={isMounted:function(t){return(t=t._reactInternals)?Ds(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Jt(),i=bi(t),s=Cr(r,i);s.payload=e,n!=null&&(s.callback=n),e=Ti(t,s,i),e!==null&&(Wn(e,t,i,r),Gc(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Jt(),i=bi(t),s=Cr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ti(t,s,i),e!==null&&(Wn(e,t,i,r),Gc(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),r=bi(t),i=Cr(n,r);i.tag=2,e!=null&&(i.callback=e),e=Ti(t,i,r),e!==null&&(Wn(e,t,r,n),Gc(e,t,r))}};function h1(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Cl(n,r)||!Cl(i,s):!0}function zS(t,e,n){var r=!1,i=Pi,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(i=un(e)?_s:Wt.current,r=e.contextTypes,s=(r=r!=null)?Mo(t,i):Pi),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=xf,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function p1(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&xf.enqueueReplaceState(e,e.state,null)}function Gm(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=$S,Yv(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=On(s):(s=un(e)?_s:Wt.current,i.context=Mo(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Km(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&xf.enqueueReplaceState(i,i.state,null),kd(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Pa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===$S&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function uc(t,e){throw t=Object.prototype.toString.call(e),Error(O(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function m1(t){var e=t._init;return e(t._payload)}function jS(t){function e(v,h){if(t){var y=v.deletions;y===null?(v.deletions=[h],v.flags|=16):y.push(h)}}function n(v,h){if(!t)return null;for(;h!==null;)e(v,h),h=h.sibling;return null}function r(v,h){for(v=new Map;h!==null;)h.key!==null?v.set(h.key,h):v.set(h.index,h),h=h.sibling;return v}function i(v,h){return v=Ii(v,h),v.index=0,v.sibling=null,v}function s(v,h,y){return v.index=y,t?(y=v.alternate,y!==null?(y=y.index,y<h?(v.flags|=2,h):y):(v.flags|=2,h)):(v.flags|=1048576,h)}function o(v){return t&&v.alternate===null&&(v.flags|=2),v}function a(v,h,y,g){return h===null||h.tag!==6?(h=Ep(y,v.mode,g),h.return=v,h):(h=i(h,y),h.return=v,h)}function l(v,h,y,g){var T=y.type;return T===Zs?c(v,h,y.props.children,g,y.key):h!==null&&(h.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ai&&m1(T)===h.type)?(g=i(h,y.props),g.ref=Pa(v,h,y),g.return=v,g):(g=ed(y.type,y.key,y.props,null,v.mode,g),g.ref=Pa(v,h,y),g.return=v,g)}function u(v,h,y,g){return h===null||h.tag!==4||h.stateNode.containerInfo!==y.containerInfo||h.stateNode.implementation!==y.implementation?(h=Tp(y,v.mode,g),h.return=v,h):(h=i(h,y.children||[]),h.return=v,h)}function c(v,h,y,g,T){return h===null||h.tag!==7?(h=fs(y,v.mode,g,T),h.return=v,h):(h=i(h,y),h.return=v,h)}function d(v,h,y){if(typeof h=="string"&&h!==""||typeof h=="number")return h=Ep(""+h,v.mode,y),h.return=v,h;if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ju:return y=ed(h.type,h.key,h.props,null,v.mode,y),y.ref=Pa(v,null,h),y.return=v,y;case Js:return h=Tp(h,v.mode,y),h.return=v,h;case ai:var g=h._init;return d(v,g(h._payload),y)}if(Ba(h)||Ia(h))return h=fs(h,v.mode,y,null),h.return=v,h;uc(v,h)}return null}function f(v,h,y,g){var T=h!==null?h.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return T!==null?null:a(v,h,""+y,g);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ju:return y.key===T?l(v,h,y,g):null;case Js:return y.key===T?u(v,h,y,g):null;case ai:return T=y._init,f(v,h,T(y._payload),g)}if(Ba(y)||Ia(y))return T!==null?null:c(v,h,y,g,null);uc(v,y)}return null}function m(v,h,y,g,T){if(typeof g=="string"&&g!==""||typeof g=="number")return v=v.get(y)||null,a(h,v,""+g,T);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Ju:return v=v.get(g.key===null?y:g.key)||null,l(h,v,g,T);case Js:return v=v.get(g.key===null?y:g.key)||null,u(h,v,g,T);case ai:var S=g._init;return m(v,h,y,S(g._payload),T)}if(Ba(g)||Ia(g))return v=v.get(y)||null,c(h,v,g,T,null);uc(h,g)}return null}function w(v,h,y,g){for(var T=null,S=null,A=h,b=h=0,C=null;A!==null&&b<y.length;b++){A.index>b?(C=A,A=null):C=A.sibling;var P=f(v,A,y[b],g);if(P===null){A===null&&(A=C);break}t&&A&&P.alternate===null&&e(v,A),h=s(P,h,b),S===null?T=P:S.sibling=P,S=P,A=C}if(b===y.length)return n(v,A),qe&&Ji(v,b),T;if(A===null){for(;b<y.length;b++)A=d(v,y[b],g),A!==null&&(h=s(A,h,b),S===null?T=A:S.sibling=A,S=A);return qe&&Ji(v,b),T}for(A=r(v,A);b<y.length;b++)C=m(A,v,b,y[b],g),C!==null&&(t&&C.alternate!==null&&A.delete(C.key===null?b:C.key),h=s(C,h,b),S===null?T=C:S.sibling=C,S=C);return t&&A.forEach(function(B){return e(v,B)}),qe&&Ji(v,b),T}function _(v,h,y,g){var T=Ia(y);if(typeof T!="function")throw Error(O(150));if(y=T.call(y),y==null)throw Error(O(151));for(var S=T=null,A=h,b=h=0,C=null,P=y.next();A!==null&&!P.done;b++,P=y.next()){A.index>b?(C=A,A=null):C=A.sibling;var B=f(v,A,P.value,g);if(B===null){A===null&&(A=C);break}t&&A&&B.alternate===null&&e(v,A),h=s(B,h,b),S===null?T=B:S.sibling=B,S=B,A=C}if(P.done)return n(v,A),qe&&Ji(v,b),T;if(A===null){for(;!P.done;b++,P=y.next())P=d(v,P.value,g),P!==null&&(h=s(P,h,b),S===null?T=P:S.sibling=P,S=P);return qe&&Ji(v,b),T}for(A=r(v,A);!P.done;b++,P=y.next())P=m(A,v,b,P.value,g),P!==null&&(t&&P.alternate!==null&&A.delete(P.key===null?b:P.key),h=s(P,h,b),S===null?T=P:S.sibling=P,S=P);return t&&A.forEach(function(q){return e(v,q)}),qe&&Ji(v,b),T}function E(v,h,y,g){if(typeof y=="object"&&y!==null&&y.type===Zs&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ju:e:{for(var T=y.key,S=h;S!==null;){if(S.key===T){if(T=y.type,T===Zs){if(S.tag===7){n(v,S.sibling),h=i(S,y.props.children),h.return=v,v=h;break e}}else if(S.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===ai&&m1(T)===S.type){n(v,S.sibling),h=i(S,y.props),h.ref=Pa(v,S,y),h.return=v,v=h;break e}n(v,S);break}else e(v,S);S=S.sibling}y.type===Zs?(h=fs(y.props.children,v.mode,g,y.key),h.return=v,v=h):(g=ed(y.type,y.key,y.props,null,v.mode,g),g.ref=Pa(v,h,y),g.return=v,v=g)}return o(v);case Js:e:{for(S=y.key;h!==null;){if(h.key===S)if(h.tag===4&&h.stateNode.containerInfo===y.containerInfo&&h.stateNode.implementation===y.implementation){n(v,h.sibling),h=i(h,y.children||[]),h.return=v,v=h;break e}else{n(v,h);break}else e(v,h);h=h.sibling}h=Tp(y,v.mode,g),h.return=v,v=h}return o(v);case ai:return S=y._init,E(v,h,S(y._payload),g)}if(Ba(y))return w(v,h,y,g);if(Ia(y))return _(v,h,y,g);uc(v,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,h!==null&&h.tag===6?(n(v,h.sibling),h=i(h,y),h.return=v,v=h):(n(v,h),h=Ep(y,v.mode,g),h.return=v,v=h),o(v)):n(v,h)}return E}var Fo=jS(!0),BS=jS(!1),yu={},fr=zi(yu),Ol=zi(yu),Dl=zi(yu);function rs(t){if(t===yu)throw Error(O(174));return t}function Xv(t,e){switch(Ce(Dl,e),Ce(Ol,t),Ce(fr,yu),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:km(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=km(e,t)}De(fr),Ce(fr,e)}function qo(){De(fr),De(Ol),De(Dl)}function HS(t){rs(Dl.current);var e=rs(fr.current),n=km(e,t.type);e!==n&&(Ce(Ol,t),Ce(fr,n))}function Jv(t){Ol.current===t&&(De(fr),De(Ol))}var je=zi(0);function Ad(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&128)!==0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var mp=[];function Zv(){for(var t=0;t<mp.length;t++)mp[t]._workInProgressVersionPrimary=null;mp.length=0}var Qc=Kr.ReactCurrentDispatcher,gp=Kr.ReactCurrentBatchConfig,Es=0,Be=null,ct=null,yt=null,Rd=!1,sl=!1,Ll=0,dx=0;function Lt(){throw Error(O(321))}function ey(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qn(t[n],e[n]))return!1;return!0}function ty(t,e,n,r,i,s){if(Es=s,Be=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Qc.current=t===null||t.memoizedState===null?mx:gx,t=n(r,i),sl){s=0;do{if(sl=!1,Ll=0,25<=s)throw Error(O(301));s+=1,yt=ct=null,e.updateQueue=null,Qc.current=vx,t=n(r,i)}while(sl)}if(Qc.current=Cd,e=ct!==null&&ct.next!==null,Es=0,yt=ct=Be=null,Rd=!1,e)throw Error(O(300));return t}function ny(){var t=Ll!==0;return Ll=0,t}function er(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yt===null?Be.memoizedState=yt=t:yt=yt.next=t,yt}function Dn(){if(ct===null){var t=Be.alternate;t=t!==null?t.memoizedState:null}else t=ct.next;var e=yt===null?Be.memoizedState:yt.next;if(e!==null)yt=e,ct=t;else{if(t===null)throw Error(O(310));ct=t,t={memoizedState:ct.memoizedState,baseState:ct.baseState,baseQueue:ct.baseQueue,queue:ct.queue,next:null},yt===null?Be.memoizedState=yt=t:yt=yt.next=t}return yt}function Ml(t,e){return typeof e=="function"?e(t):e}function vp(t){var e=Dn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=ct,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Es&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,Be.lanes|=c,Ts|=c}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,Qn(r,e.memoizedState)||(an=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Be.lanes|=s,Ts|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function yp(t){var e=Dn(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);Qn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function WS(){}function KS(t,e){var n=Be,r=Dn(),i=e(),s=!Qn(r.memoizedState,i);if(s&&(r.memoizedState=i,an=!0),r=r.queue,ry(YS.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||yt!==null&&yt.memoizedState.tag&1){if(n.flags|=2048,Vl(9,QS.bind(null,n,r,i,e),void 0,null),_t===null)throw Error(O(349));(Es&30)!==0||GS(n,e,i)}return i}function GS(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function QS(t,e,n,r){e.value=n,e.getSnapshot=r,XS(e)&&JS(t)}function YS(t,e,n){return n(function(){XS(e)&&JS(t)})}function XS(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qn(t,n)}catch{return!0}}function JS(t){var e=Mr(t,1);e!==null&&Wn(e,t,1,-1)}function g1(t){var e=er();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ml,lastRenderedState:t},e.queue=t,t=t.dispatch=px.bind(null,Be,t),[e.memoizedState,t]}function Vl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Be.updateQueue,e===null?(e={lastEffect:null,stores:null},Be.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function ZS(){return Dn().memoizedState}function Yc(t,e,n,r){var i=er();Be.flags|=t,i.memoizedState=Vl(1|e,n,void 0,r===void 0?null:r)}function Nf(t,e,n,r){var i=Dn();r=r===void 0?null:r;var s=void 0;if(ct!==null){var o=ct.memoizedState;if(s=o.destroy,r!==null&&ey(r,o.deps)){i.memoizedState=Vl(e,n,s,r);return}}Be.flags|=t,i.memoizedState=Vl(1|e,n,s,r)}function v1(t,e){return Yc(8390656,8,t,e)}function ry(t,e){return Nf(2048,8,t,e)}function eb(t,e){return Nf(4,2,t,e)}function tb(t,e){return Nf(4,4,t,e)}function nb(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function rb(t,e,n){return n=n!=null?n.concat([t]):null,Nf(4,4,nb.bind(null,e,t),n)}function iy(){}function ib(t,e){var n=Dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ey(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function sb(t,e){var n=Dn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&ey(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function ob(t,e,n){return(Es&21)===0?(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n):(Qn(n,e)||(n=uS(),Be.lanes|=n,Ts|=n,t.baseState=!0),e)}function fx(t,e){var n=Te;Te=n!==0&&4>n?n:4,t(!0);var r=gp.transition;gp.transition={};try{t(!1),e()}finally{Te=n,gp.transition=r}}function ab(){return Dn().memoizedState}function hx(t,e,n){var r=bi(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},lb(t))ub(e,n);else if(n=qS(t,e,n,r),n!==null){var i=Jt();Wn(n,t,r,i),cb(n,e,r)}}function px(t,e,n){var r=bi(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(lb(t))ub(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,Qn(a,o)){var l=e.interleaved;l===null?(i.next=i,Qv(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=qS(t,e,i,r),n!==null&&(i=Jt(),Wn(n,t,r,i),cb(n,e,r))}}function lb(t){var e=t.alternate;return t===Be||e!==null&&e===Be}function ub(t,e){sl=Rd=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function cb(t,e,n){if((n&4194240)!==0){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Lv(t,n)}}var Cd={readContext:On,useCallback:Lt,useContext:Lt,useEffect:Lt,useImperativeHandle:Lt,useInsertionEffect:Lt,useLayoutEffect:Lt,useMemo:Lt,useReducer:Lt,useRef:Lt,useState:Lt,useDebugValue:Lt,useDeferredValue:Lt,useTransition:Lt,useMutableSource:Lt,useSyncExternalStore:Lt,useId:Lt,unstable_isNewReconciler:!1},mx={readContext:On,useCallback:function(t,e){return er().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:v1,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Yc(4194308,4,nb.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Yc(4194308,4,t,e)},useInsertionEffect:function(t,e){return Yc(4,2,t,e)},useMemo:function(t,e){var n=er();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=er();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=hx.bind(null,Be,t),[r.memoizedState,t]},useRef:function(t){var e=er();return t={current:t},e.memoizedState=t},useState:g1,useDebugValue:iy,useDeferredValue:function(t){return er().memoizedState=t},useTransition:function(){var t=g1(!1),e=t[0];return t=fx.bind(null,t[1]),er().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Be,i=er();if(qe){if(n===void 0)throw Error(O(407));n=n()}else{if(n=e(),_t===null)throw Error(O(349));(Es&30)!==0||GS(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,v1(YS.bind(null,r,s,t),[t]),r.flags|=2048,Vl(9,QS.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=er(),e=_t.identifierPrefix;if(qe){var n=br,r=Sr;n=(r&~(1<<32-Hn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ll++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=dx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},gx={readContext:On,useCallback:ib,useContext:On,useEffect:ry,useImperativeHandle:rb,useInsertionEffect:eb,useLayoutEffect:tb,useMemo:sb,useReducer:vp,useRef:ZS,useState:function(){return vp(Ml)},useDebugValue:iy,useDeferredValue:function(t){var e=Dn();return ob(e,ct.memoizedState,t)},useTransition:function(){var t=vp(Ml)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:WS,useSyncExternalStore:KS,useId:ab,unstable_isNewReconciler:!1},vx={readContext:On,useCallback:ib,useContext:On,useEffect:ry,useImperativeHandle:rb,useInsertionEffect:eb,useLayoutEffect:tb,useMemo:sb,useReducer:yp,useRef:ZS,useState:function(){return yp(Ml)},useDebugValue:iy,useDeferredValue:function(t){var e=Dn();return ct===null?e.memoizedState=t:ob(e,ct.memoizedState,t)},useTransition:function(){var t=yp(Ml)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:WS,useSyncExternalStore:KS,useId:ab,unstable_isNewReconciler:!1};function Uo(t,e){try{var n="",r=e;do n+=HC(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function _p(t,e,n){return{value:t,source:null,stack:n!=null?n:null,digest:e!=null?e:null}}function Qm(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yx=typeof WeakMap=="function"?WeakMap:Map;function db(t,e,n){n=Cr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){xd||(xd=!0,sg=r),Qm(t,e)},n}function fb(t,e,n){n=Cr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Qm(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qm(t,e),typeof r!="function"&&(Si===null?Si=new Set([this]):Si.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function y1(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new yx;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Nx.bind(null,t,e,n),e.then(t,t))}function _1(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function w1(t,e,n,r,i){return(t.mode&1)===0?(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Cr(-1,1),e.tag=2,Ti(n,e,1))),n.lanes|=1),t):(t.flags|=65536,t.lanes=i,t)}var _x=Kr.ReactCurrentOwner,an=!1;function Yt(t,e,n,r){e.child=t===null?BS(e,null,n,r):Fo(e,t.child,n,r)}function E1(t,e,n,r,i){n=n.render;var s=e.ref;return To(e,i),r=ty(t,e,n,r,s,i),n=ny(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vr(t,e,i)):(qe&&n&&jv(e),e.flags|=1,Yt(t,e,r,i),e.child)}function T1(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!fy(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,hb(t,e,s,r,i)):(t=ed(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,(t.lanes&i)===0){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Cl,n(o,r)&&t.ref===e.ref)return Vr(t,e,i)}return e.flags|=1,t=Ii(s,r),t.ref=e.ref,t.return=e,e.child=t}function hb(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(Cl(s,r)&&t.ref===e.ref)if(an=!1,e.pendingProps=r=s,(t.lanes&i)!==0)(t.flags&131072)!==0&&(an=!0);else return e.lanes=t.lanes,Vr(t,e,i)}return Ym(t,e,n,r,i)}function pb(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if((e.mode&1)===0)e.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ce(uo,fn),fn|=n;else{if((n&1073741824)===0)return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,Ce(uo,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,Ce(uo,fn),fn|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,Ce(uo,fn),fn|=r;return Yt(t,e,i,n),e.child}function mb(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ym(t,e,n,r,i){var s=un(n)?_s:Wt.current;return s=Mo(e,s),To(e,i),n=ty(t,e,n,r,s,i),r=ny(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Vr(t,e,i)):(qe&&r&&jv(e),e.flags|=1,Yt(t,e,n,i),e.child)}function S1(t,e,n,r,i){if(un(n)){var s=!0;Ed(e)}else s=!1;if(To(e,i),e.stateNode===null)Xc(t,e),zS(e,n,r),Gm(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=On(u):(u=un(n)?_s:Wt.current,u=Mo(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&p1(e,o,r,u),li=!1;var f=e.memoizedState;o.state=f,kd(e,r,o,i),l=e.memoizedState,a!==r||f!==l||ln.current||li?(typeof c=="function"&&(Km(e,n,c,r),l=e.memoizedState),(a=li||h1(e,n,a,r,f,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,US(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:qn(e.type,a),o.props=u,d=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=un(n)?_s:Wt.current,l=Mo(e,l));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||f!==l)&&p1(e,o,r,l),li=!1,f=e.memoizedState,o.state=f,kd(e,r,o,i);var w=e.memoizedState;a!==d||f!==w||ln.current||li?(typeof m=="function"&&(Km(e,n,m,r),w=e.memoizedState),(u=li||h1(e,n,u,r,f,w,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,w,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,w,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=w),o.props=r,o.state=w,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),r=!1)}return Xm(t,e,n,r,s,i)}function Xm(t,e,n,r,i,s){mb(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&l1(e,n,!1),Vr(t,e,s);r=e.stateNode,_x.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fo(e,t.child,null,s),e.child=Fo(e,null,a,s)):Yt(t,e,a,s),e.memoizedState=r.state,i&&l1(e,n,!0),e.child}function gb(t){var e=t.stateNode;e.pendingContext?a1(t,e.pendingContext,e.pendingContext!==e.context):e.context&&a1(t,e.context,!1),Xv(t,e.containerInfo)}function b1(t,e,n,r,i){return Vo(),Hv(i),e.flags|=256,Yt(t,e,n,r),e.child}var Jm={dehydrated:null,treeContext:null,retryLane:0};function Zm(t){return{baseLanes:t,cachePool:null,transitions:null}}function vb(t,e,n){var r=e.pendingProps,i=je.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),Ce(je,i&1),t===null)return Hm(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((e.mode&1)===0?e.lanes=1:t.data==="$!"?e.lanes=8:e.lanes=1073741824,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},(r&1)===0&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Lf(o,r,0,null),t=fs(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Zm(n),e.memoizedState=Jm,t):sy(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return wx(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return(o&1)===0&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Ii(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=Ii(a,s):(s=fs(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Zm(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Jm,r}return s=t.child,t=s.sibling,r=Ii(s,{mode:"visible",children:r.children}),(e.mode&1)===0&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function sy(t,e){return e=Lf({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function cc(t,e,n,r){return r!==null&&Hv(r),Fo(e,t.child,null,n),t=sy(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function wx(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=_p(Error(O(422))),cc(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Lf({mode:"visible",children:r.children},i,0,null),s=fs(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,(e.mode&1)!==0&&Fo(e,t.child,null,o),e.child.memoizedState=Zm(o),e.memoizedState=Jm,s);if((e.mode&1)===0)return cc(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(O(419)),r=_p(s,r,void 0),cc(t,e,o,r)}if(a=(o&t.childLanes)!==0,an||a){if(r=_t,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|o))!==0?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Mr(t,i),Wn(r,t,i,-1))}return dy(),r=_p(Error(O(421))),cc(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Ox.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,pn=Ei(i.nextSibling),yn=e,qe=!0,zn=null,t!==null&&(kn[An++]=Sr,kn[An++]=br,kn[An++]=ws,Sr=t.id,br=t.overflow,ws=e),e=sy(e,r.children),e.flags|=4096,e)}function I1(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Wm(t.return,e,n)}function wp(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function yb(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Yt(t,e,r.children,n),r=je.current,(r&2)!==0)r=r&1|2,e.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&I1(t,n,e);else if(t.tag===19)I1(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Ce(je,r),(e.mode&1)===0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ad(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),wp(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ad(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}wp(e,!0,n,null,s);break;case"together":wp(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Xc(t,e){(e.mode&1)===0&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Vr(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ts|=e.lanes,(n&e.childLanes)===0)return null;if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=Ii(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ii(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ex(t,e,n){switch(e.tag){case 3:gb(e),Vo();break;case 5:HS(e);break;case 1:un(e.type)&&Ed(e);break;case 4:Xv(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;Ce(bd,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(Ce(je,je.current&1),e.flags|=128,null):(n&e.child.childLanes)!==0?vb(t,e,n):(Ce(je,je.current&1),t=Vr(t,e,n),t!==null?t.sibling:null);Ce(je,je.current&1);break;case 19:if(r=(n&e.childLanes)!==0,(t.flags&128)!==0){if(r)return yb(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Ce(je,je.current),r)break;return null;case 22:case 23:return e.lanes=0,pb(t,e,n)}return Vr(t,e,n)}var _b,eg,wb,Eb;_b=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};eg=function(){};wb=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,rs(fr.current);var s=null;switch(n){case"input":i=Tm(t,i),r=Tm(t,r),s=[];break;case"select":i=He({},i,{value:void 0}),r=He({},r,{value:void 0}),s=[];break;case"textarea":i=Im(t,i),r=Im(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=_d)}Am(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Tl.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Tl.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&xe("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Eb=function(t,e,n,r){n!==r&&(e.flags|=4)};function xa(t,e){if(!qe)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Mt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Tx(t,e,n){var r=e.pendingProps;switch(Bv(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Mt(e),null;case 1:return un(e.type)&&wd(),Mt(e),null;case 3:return r=e.stateNode,qo(),De(ln),De(Wt),Zv(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(lc(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&(e.flags&256)===0||(e.flags|=1024,zn!==null&&(lg(zn),zn=null))),eg(t,e),Mt(e),null;case 5:Jv(e);var i=rs(Dl.current);if(n=e.type,t!==null&&e.stateNode!=null)wb(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(O(166));return Mt(e),null}if(t=rs(fr.current),lc(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[tr]=e,r[Nl]=s,t=(e.mode&1)!==0,n){case"dialog":xe("cancel",r),xe("close",r);break;case"iframe":case"object":case"embed":xe("load",r);break;case"video":case"audio":for(i=0;i<Wa.length;i++)xe(Wa[i],r);break;case"source":xe("error",r);break;case"img":case"image":case"link":xe("error",r),xe("load",r);break;case"details":xe("toggle",r);break;case"input":D_(r,s),xe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},xe("invalid",r);break;case"textarea":M_(r,s),xe("invalid",r)}Am(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ac(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ac(r.textContent,a,t),i=["children",""+a]):Tl.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&xe("scroll",r)}switch(n){case"input":Zu(r),L_(r,s,!0);break;case"textarea":Zu(r),V_(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=_d)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=GT(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[tr]=e,t[Nl]=r,_b(t,e,!1,!1),e.stateNode=t;e:{switch(o=Rm(n,r),n){case"dialog":xe("cancel",t),xe("close",t),i=r;break;case"iframe":case"object":case"embed":xe("load",t),i=r;break;case"video":case"audio":for(i=0;i<Wa.length;i++)xe(Wa[i],t);i=r;break;case"source":xe("error",t),i=r;break;case"img":case"image":case"link":xe("error",t),xe("load",t),i=r;break;case"details":xe("toggle",t),i=r;break;case"input":D_(t,r),i=Tm(t,r),xe("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=He({},r,{value:void 0}),xe("invalid",t);break;case"textarea":M_(t,r),i=Im(t,r),xe("invalid",t);break;default:i=r}Am(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?XT(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&QT(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Sl(t,l):typeof l=="number"&&Sl(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Tl.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xe("scroll",t):l!=null&&Cv(t,s,l,o))}switch(n){case"input":Zu(t),L_(t,r,!1);break;case"textarea":Zu(t),V_(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Ci(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?yo(t,!!r.multiple,s,!1):r.defaultValue!=null&&yo(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=_d)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Mt(e),null;case 6:if(t&&e.stateNode!=null)Eb(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));if(n=rs(Dl.current),rs(fr.current),lc(e)){if(r=e.stateNode,n=e.memoizedProps,r[tr]=e,(s=r.nodeValue!==n)&&(t=yn,t!==null))switch(t.tag){case 3:ac(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ac(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[tr]=e,e.stateNode=r}return Mt(e),null;case 13:if(De(je),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(qe&&pn!==null&&(e.mode&1)!==0&&(e.flags&128)===0)FS(),Vo(),e.flags|=98560,s=!1;else if(s=lc(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(O(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(O(317));s[tr]=e}else Vo(),(e.flags&128)===0&&(e.memoizedState=null),e.flags|=4;Mt(e),s=!1}else zn!==null&&(lg(zn),zn=null),s=!0;if(!s)return e.flags&65536?e:null}return(e.flags&128)!==0?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,(e.mode&1)!==0&&(t===null||(je.current&1)!==0?ft===0&&(ft=3):dy())),e.updateQueue!==null&&(e.flags|=4),Mt(e),null);case 4:return qo(),eg(t,e),t===null&&Pl(e.stateNode.containerInfo),Mt(e),null;case 10:return Gv(e.type._context),Mt(e),null;case 17:return un(e.type)&&wd(),Mt(e),null;case 19:if(De(je),s=e.memoizedState,s===null)return Mt(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)xa(s,!1);else{if(ft!==0||t!==null&&(t.flags&128)!==0)for(t=e.child;t!==null;){if(o=Ad(t),o!==null){for(e.flags|=128,xa(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Ce(je,je.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ze()>$o&&(e.flags|=128,r=!0,xa(s,!1),e.lanes=4194304)}else{if(!r)if(t=Ad(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),xa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!qe)return Mt(e),null}else 2*Ze()-s.renderingStartTime>$o&&n!==1073741824&&(e.flags|=128,r=!0,xa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ze(),e.sibling=null,n=je.current,Ce(je,r?n&1|2:n&1),e):(Mt(e),null);case 22:case 23:return cy(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&(e.mode&1)!==0?(fn&1073741824)!==0&&(Mt(e),e.subtreeFlags&6&&(e.flags|=8192)):Mt(e),null;case 24:return null;case 25:return null}throw Error(O(156,e.tag))}function Sx(t,e){switch(Bv(e),e.tag){case 1:return un(e.type)&&wd(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return qo(),De(ln),De(Wt),Zv(),t=e.flags,(t&65536)!==0&&(t&128)===0?(e.flags=t&-65537|128,e):null;case 5:return Jv(e),null;case 13:if(De(je),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(O(340));Vo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return De(je),null;case 4:return qo(),null;case 10:return Gv(e.type._context),null;case 22:case 23:return cy(),null;case 24:return null;default:return null}}var dc=!1,qt=!1,bx=typeof WeakSet=="function"?WeakSet:Set,z=null;function lo(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ke(t,e,r)}else n.current=null}function tg(t,e,n){try{n()}catch(r){Ke(t,e,r)}}var k1=!1;function Ix(t,e){if(Fm=gd,t=IS(),zv(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=t,f=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)f=d,d=m;for(;;){if(d===t)break t;if(f===n&&++u===i&&(a=o),f===s&&++c===r&&(l=o),(m=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=m}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(qm={focusedElem:t,selectionRange:n},gd=!1,z=e;z!==null;)if(e=z,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,z=t;else for(;z!==null;){e=z;try{var w=e.alternate;if((e.flags&1024)!==0)switch(e.tag){case 0:case 11:case 15:break;case 1:if(w!==null){var _=w.memoizedProps,E=w.memoizedState,v=e.stateNode,h=v.getSnapshotBeforeUpdate(e.elementType===e.type?_:qn(e.type,_),E);v.__reactInternalSnapshotBeforeUpdate=h}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(O(163))}}catch(g){Ke(e,e.return,g)}if(t=e.sibling,t!==null){t.return=e.return,z=t;break}z=e.return}return w=k1,k1=!1,w}function ol(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&tg(e,n,s)}i=i.next}while(i!==r)}}function Of(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function ng(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Tb(t){var e=t.alternate;e!==null&&(t.alternate=null,Tb(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[tr],delete e[Nl],delete e[zm],delete e[ax],delete e[lx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Sb(t){return t.tag===5||t.tag===3||t.tag===4}function A1(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Sb(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rg(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=_d));else if(r!==4&&(t=t.child,t!==null))for(rg(t,e,n),t=t.sibling;t!==null;)rg(t,e,n),t=t.sibling}function ig(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ig(t,e,n),t=t.sibling;t!==null;)ig(t,e,n),t=t.sibling}var kt=null,Un=!1;function ii(t,e,n){for(n=n.child;n!==null;)bb(t,e,n),n=n.sibling}function bb(t,e,n){if(dr&&typeof dr.onCommitFiberUnmount=="function")try{dr.onCommitFiberUnmount(If,n)}catch{}switch(n.tag){case 5:qt||lo(n,e);case 6:var r=kt,i=Un;kt=null,ii(t,e,n),kt=r,Un=i,kt!==null&&(Un?(t=kt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):kt.removeChild(n.stateNode));break;case 18:kt!==null&&(Un?(t=kt,n=n.stateNode,t.nodeType===8?hp(t.parentNode,n):t.nodeType===1&&hp(t,n),Al(t)):hp(kt,n.stateNode));break;case 4:r=kt,i=Un,kt=n.stateNode.containerInfo,Un=!0,ii(t,e,n),kt=r,Un=i;break;case 0:case 11:case 14:case 15:if(!qt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&((s&2)!==0||(s&4)!==0)&&tg(n,e,o),i=i.next}while(i!==r)}ii(t,e,n);break;case 1:if(!qt&&(lo(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Ke(n,e,a)}ii(t,e,n);break;case 21:ii(t,e,n);break;case 22:n.mode&1?(qt=(r=qt)||n.memoizedState!==null,ii(t,e,n),qt=r):ii(t,e,n);break;default:ii(t,e,n)}}function R1(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new bx),e.forEach(function(r){var i=Dx.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Vn(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,Un=!1;break e;case 3:kt=a.stateNode.containerInfo,Un=!0;break e;case 4:kt=a.stateNode.containerInfo,Un=!0;break e}a=a.return}if(kt===null)throw Error(O(160));bb(s,o,i),kt=null,Un=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Ke(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Ib(e,t),e=e.sibling}function Ib(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Vn(e,t),Zn(t),r&4){try{ol(3,t,t.return),Of(3,t)}catch(_){Ke(t,t.return,_)}try{ol(5,t,t.return)}catch(_){Ke(t,t.return,_)}}break;case 1:Vn(e,t),Zn(t),r&512&&n!==null&&lo(n,n.return);break;case 5:if(Vn(e,t),Zn(t),r&512&&n!==null&&lo(n,n.return),t.flags&32){var i=t.stateNode;try{Sl(i,"")}catch(_){Ke(t,t.return,_)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&WT(i,s),Rm(a,o);var u=Rm(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?XT(i,d):c==="dangerouslySetInnerHTML"?QT(i,d):c==="children"?Sl(i,d):Cv(i,c,d,u)}switch(a){case"input":Sm(i,s);break;case"textarea":KT(i,s);break;case"select":var f=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?yo(i,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?yo(i,!!s.multiple,s.defaultValue,!0):yo(i,!!s.multiple,s.multiple?[]:"",!1))}i[Nl]=s}catch(_){Ke(t,t.return,_)}}break;case 6:if(Vn(e,t),Zn(t),r&4){if(t.stateNode===null)throw Error(O(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(_){Ke(t,t.return,_)}}break;case 3:if(Vn(e,t),Zn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Al(e.containerInfo)}catch(_){Ke(t,t.return,_)}break;case 4:Vn(e,t),Zn(t);break;case 13:Vn(e,t),Zn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(ly=Ze())),r&4&&R1(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(qt=(u=qt)||c,Vn(e,t),qt=u):Vn(e,t),Zn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&(t.mode&1)!==0)for(z=t,c=t.child;c!==null;){for(d=z=c;z!==null;){switch(f=z,m=f.child,f.tag){case 0:case 11:case 14:case 15:ol(4,f,f.return);break;case 1:lo(f,f.return);var w=f.stateNode;if(typeof w.componentWillUnmount=="function"){r=f,n=f.return;try{e=r,w.props=e.memoizedProps,w.state=e.memoizedState,w.componentWillUnmount()}catch(_){Ke(r,n,_)}}break;case 5:lo(f,f.return);break;case 22:if(f.memoizedState!==null){P1(d);continue}}m!==null?(m.return=f,z=m):P1(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=YT("display",o))}catch(_){Ke(t,t.return,_)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(_){Ke(t,t.return,_)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Vn(e,t),Zn(t),r&4&&R1(t);break;case 21:break;default:Vn(e,t),Zn(t)}}function Zn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Sb(n)){var r=n;break e}n=n.return}throw Error(O(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sl(i,""),r.flags&=-33);var s=A1(t);ig(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=A1(t);rg(t,a,o);break;default:throw Error(O(161))}}catch(l){Ke(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function kx(t,e,n){z=t,kb(t)}function kb(t,e,n){for(var r=(t.mode&1)!==0;z!==null;){var i=z,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||dc;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||qt;a=dc;var u=qt;if(dc=o,(qt=l)&&!u)for(z=i;z!==null;)o=z,l=o.child,o.tag===22&&o.memoizedState!==null?x1(i):l!==null?(l.return=o,z=l):x1(i);for(;s!==null;)z=s,kb(s),s=s.sibling;z=i,dc=a,qt=u}C1(t)}else(i.subtreeFlags&8772)!==0&&s!==null?(s.return=i,z=s):C1(t)}}function C1(t){for(;z!==null;){var e=z;if((e.flags&8772)!==0){var n=e.alternate;try{if((e.flags&8772)!==0)switch(e.tag){case 0:case 11:case 15:qt||Of(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!qt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:qn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&f1(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}f1(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Al(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(O(163))}qt||e.flags&512&&ng(e)}catch(f){Ke(e,e.return,f)}}if(e===t){z=null;break}if(n=e.sibling,n!==null){n.return=e.return,z=n;break}z=e.return}}function P1(t){for(;z!==null;){var e=z;if(e===t){z=null;break}var n=e.sibling;if(n!==null){n.return=e.return,z=n;break}z=e.return}}function x1(t){for(;z!==null;){var e=z;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Of(4,e)}catch(l){Ke(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Ke(e,i,l)}}var s=e.return;try{ng(e)}catch(l){Ke(e,s,l)}break;case 5:var o=e.return;try{ng(e)}catch(l){Ke(e,o,l)}}}catch(l){Ke(e,e.return,l)}if(e===t){z=null;break}var a=e.sibling;if(a!==null){a.return=e.return,z=a;break}z=e.return}}var Ax=Math.ceil,Pd=Kr.ReactCurrentDispatcher,oy=Kr.ReactCurrentOwner,Nn=Kr.ReactCurrentBatchConfig,ye=0,_t=null,st=null,Ct=0,fn=0,uo=zi(0),ft=0,Fl=null,Ts=0,Df=0,ay=0,al=null,on=null,ly=0,$o=1/0,Er=null,xd=!1,sg=null,Si=null,fc=!1,pi=null,Nd=0,ll=0,og=null,Jc=-1,Zc=0;function Jt(){return(ye&6)!==0?Ze():Jc!==-1?Jc:Jc=Ze()}function bi(t){return(t.mode&1)===0?1:(ye&2)!==0&&Ct!==0?Ct&-Ct:cx.transition!==null?(Zc===0&&(Zc=uS()),Zc):(t=Te,t!==0||(t=window.event,t=t===void 0?16:gS(t.type)),t)}function Wn(t,e,n,r){if(50<ll)throw ll=0,og=null,Error(O(185));mu(t,n,r),((ye&2)===0||t!==_t)&&(t===_t&&((ye&2)===0&&(Df|=n),ft===4&&di(t,Ct)),cn(t,r),n===1&&ye===0&&(e.mode&1)===0&&($o=Ze()+500,Pf&&ji()))}function cn(t,e){var n=t.callbackNode;cP(t,e);var r=md(t,t===_t?Ct:0);if(r===0)n!==null&&U_(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&U_(n),e===1)t.tag===0?ux(N1.bind(null,t)):LS(N1.bind(null,t)),sx(function(){(ye&6)===0&&ji()}),n=null;else{switch(cS(r)){case 1:n=Dv;break;case 4:n=aS;break;case 16:n=pd;break;case 536870912:n=lS;break;default:n=pd}n=Db(n,Ab.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Ab(t,e){if(Jc=-1,Zc=0,(ye&6)!==0)throw Error(O(327));var n=t.callbackNode;if(So()&&t.callbackNode!==n)return null;var r=md(t,t===_t?Ct:0);if(r===0)return null;if((r&30)!==0||(r&t.expiredLanes)!==0||e)e=Od(t,r);else{e=r;var i=ye;ye|=2;var s=Cb();(_t!==t||Ct!==e)&&(Er=null,$o=Ze()+500,ds(t,e));do try{Px();break}catch(a){Rb(t,a)}while(1);Kv(),Pd.current=s,ye=i,st!==null?e=0:(_t=null,Ct=0,e=ft)}if(e!==0){if(e===2&&(i=Om(t),i!==0&&(r=i,e=ag(t,i))),e===1)throw n=Fl,ds(t,0),di(t,r),cn(t,Ze()),n;if(e===6)di(t,r);else{if(i=t.current.alternate,(r&30)===0&&!Rx(i)&&(e=Od(t,r),e===2&&(s=Om(t),s!==0&&(r=s,e=ag(t,s))),e===1))throw n=Fl,ds(t,0),di(t,r),cn(t,Ze()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(O(345));case 2:Zi(t,on,Er);break;case 3:if(di(t,r),(r&130023424)===r&&(e=ly+500-Ze(),10<e)){if(md(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Jt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=$m(Zi.bind(null,t,on,Er),e);break}Zi(t,on,Er);break;case 4:if(di(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-Hn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Ze()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Ax(r/1960))-r,10<r){t.timeoutHandle=$m(Zi.bind(null,t,on,Er),r);break}Zi(t,on,Er);break;case 5:Zi(t,on,Er);break;default:throw Error(O(329))}}}return cn(t,Ze()),t.callbackNode===n?Ab.bind(null,t):null}function ag(t,e){var n=al;return t.current.memoizedState.isDehydrated&&(ds(t,e).flags|=256),t=Od(t,e),t!==2&&(e=on,on=n,e!==null&&lg(e)),t}function lg(t){on===null?on=t:on.push.apply(on,t)}function Rx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!Qn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function di(t,e){for(e&=~ay,e&=~Df,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),r=1<<n;t[n]=-1,e&=~r}}function N1(t){if((ye&6)!==0)throw Error(O(327));So();var e=md(t,0);if((e&1)===0)return cn(t,Ze()),null;var n=Od(t,e);if(t.tag!==0&&n===2){var r=Om(t);r!==0&&(e=r,n=ag(t,r))}if(n===1)throw n=Fl,ds(t,0),di(t,e),cn(t,Ze()),n;if(n===6)throw Error(O(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zi(t,on,Er),cn(t,Ze()),null}function uy(t,e){var n=ye;ye|=1;try{return t(e)}finally{ye=n,ye===0&&($o=Ze()+500,Pf&&ji())}}function Ss(t){pi!==null&&pi.tag===0&&(ye&6)===0&&So();var e=ye;ye|=1;var n=Nn.transition,r=Te;try{if(Nn.transition=null,Te=1,t)return t()}finally{Te=r,Nn.transition=n,ye=e,(ye&6)===0&&ji()}}function cy(){fn=uo.current,De(uo)}function ds(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ix(n)),st!==null)for(n=st.return;n!==null;){var r=n;switch(Bv(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&wd();break;case 3:qo(),De(ln),De(Wt),Zv();break;case 5:Jv(r);break;case 4:qo();break;case 13:De(je);break;case 19:De(je);break;case 10:Gv(r.type._context);break;case 22:case 23:cy()}n=n.return}if(_t=t,st=t=Ii(t.current,null),Ct=fn=e,ft=0,Fl=null,ay=Df=Ts=0,on=al=null,ns!==null){for(e=0;e<ns.length;e++)if(n=ns[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}ns=null}return t}function Rb(t,e){do{var n=st;try{if(Kv(),Qc.current=Cd,Rd){for(var r=Be.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Rd=!1}if(Es=0,yt=ct=Be=null,sl=!1,Ll=0,oy.current=null,n===null||n.return===null){ft=1,Fl=e,st=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Ct,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=_1(o);if(m!==null){m.flags&=-257,w1(m,o,a,s,e),m.mode&1&&y1(s,u,e),e=m,l=u;var w=e.updateQueue;if(w===null){var _=new Set;_.add(l),e.updateQueue=_}else w.add(l);break e}else{if((e&1)===0){y1(s,u,e),dy();break e}l=Error(O(426))}}else if(qe&&a.mode&1){var E=_1(o);if(E!==null){(E.flags&65536)===0&&(E.flags|=256),w1(E,o,a,s,e),Hv(Uo(l,a));break e}}s=l=Uo(l,a),ft!==4&&(ft=2),al===null?al=[s]:al.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var v=db(s,l,e);d1(s,v);break e;case 1:a=l;var h=s.type,y=s.stateNode;if((s.flags&128)===0&&(typeof h.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Si===null||!Si.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var g=fb(s,a,e);d1(s,g);break e}}s=s.return}while(s!==null)}xb(n)}catch(T){e=T,st===n&&n!==null&&(st=n=n.return);continue}break}while(1)}function Cb(){var t=Pd.current;return Pd.current=Cd,t===null?Cd:t}function dy(){(ft===0||ft===3||ft===2)&&(ft=4),_t===null||(Ts&268435455)===0&&(Df&268435455)===0||di(_t,Ct)}function Od(t,e){var n=ye;ye|=2;var r=Cb();(_t!==t||Ct!==e)&&(Er=null,ds(t,e));do try{Cx();break}catch(i){Rb(t,i)}while(1);if(Kv(),ye=n,Pd.current=r,st!==null)throw Error(O(261));return _t=null,Ct=0,ft}function Cx(){for(;st!==null;)Pb(st)}function Px(){for(;st!==null&&!tP();)Pb(st)}function Pb(t){var e=Ob(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?xb(t):st=e,oy.current=null}function xb(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&32768)===0){if(n=Tx(n,e,fn),n!==null){st=n;return}}else{if(n=Sx(n,e),n!==null){n.flags&=32767,st=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ft=6,st=null;return}}if(e=e.sibling,e!==null){st=e;return}st=e=t}while(e!==null);ft===0&&(ft=5)}function Zi(t,e,n){var r=Te,i=Nn.transition;try{Nn.transition=null,Te=1,xx(t,e,n,r)}finally{Nn.transition=i,Te=r}return null}function xx(t,e,n,r){do So();while(pi!==null);if((ye&6)!==0)throw Error(O(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dP(t,s),t===_t&&(st=_t=null,Ct=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||fc||(fc=!0,Db(pd,function(){return So(),null})),s=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||s){s=Nn.transition,Nn.transition=null;var o=Te;Te=1;var a=ye;ye|=4,oy.current=null,Ix(t,n),Ib(n,t),XP(qm),gd=!!Fm,qm=Fm=null,t.current=n,kx(n),nP(),ye=a,Te=o,Nn.transition=s}else t.current=n;if(fc&&(fc=!1,pi=t,Nd=i),s=t.pendingLanes,s===0&&(Si=null),sP(n.stateNode),cn(t,Ze()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(xd)throw xd=!1,t=sg,sg=null,t;return(Nd&1)!==0&&t.tag!==0&&So(),s=t.pendingLanes,(s&1)!==0?t===og?ll++:(ll=0,og=t):ll=0,ji(),null}function So(){if(pi!==null){var t=cS(Nd),e=Nn.transition,n=Te;try{if(Nn.transition=null,Te=16>t?16:t,pi===null)var r=!1;else{if(t=pi,pi=null,Nd=0,(ye&6)!==0)throw Error(O(331));var i=ye;for(ye|=4,z=t.current;z!==null;){var s=z,o=s.child;if((z.flags&16)!==0){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(z=u;z!==null;){var c=z;switch(c.tag){case 0:case 11:case 15:ol(8,c,s)}var d=c.child;if(d!==null)d.return=c,z=d;else for(;z!==null;){c=z;var f=c.sibling,m=c.return;if(Tb(c),c===u){z=null;break}if(f!==null){f.return=m,z=f;break}z=m}}}var w=s.alternate;if(w!==null){var _=w.child;if(_!==null){w.child=null;do{var E=_.sibling;_.sibling=null,_=E}while(_!==null)}}z=s}}if((s.subtreeFlags&2064)!==0&&o!==null)o.return=s,z=o;else e:for(;z!==null;){if(s=z,(s.flags&2048)!==0)switch(s.tag){case 0:case 11:case 15:ol(9,s,s.return)}var v=s.sibling;if(v!==null){v.return=s.return,z=v;break e}z=s.return}}var h=t.current;for(z=h;z!==null;){o=z;var y=o.child;if((o.subtreeFlags&2064)!==0&&y!==null)y.return=o,z=y;else e:for(o=h;z!==null;){if(a=z,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Of(9,a)}}catch(T){Ke(a,a.return,T)}if(a===o){z=null;break e}var g=a.sibling;if(g!==null){g.return=a.return,z=g;break e}z=a.return}}if(ye=i,ji(),dr&&typeof dr.onPostCommitFiberRoot=="function")try{dr.onPostCommitFiberRoot(If,t)}catch{}r=!0}return r}finally{Te=n,Nn.transition=e}}return!1}function O1(t,e,n){e=Uo(n,e),e=db(t,e,1),t=Ti(t,e,1),e=Jt(),t!==null&&(mu(t,1,e),cn(t,e))}function Ke(t,e,n){if(t.tag===3)O1(t,t,n);else for(;e!==null;){if(e.tag===3){O1(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Si===null||!Si.has(r))){t=Uo(n,t),t=fb(e,t,1),e=Ti(e,t,1),t=Jt(),e!==null&&(mu(e,1,t),cn(e,t));break}}e=e.return}}function Nx(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,_t===t&&(Ct&n)===n&&(ft===4||ft===3&&(Ct&130023424)===Ct&&500>Ze()-ly?ds(t,0):ay|=n),cn(t,e)}function Nb(t,e){e===0&&((t.mode&1)===0?e=1:(e=nc,nc<<=1,(nc&130023424)===0&&(nc=4194304)));var n=Jt();t=Mr(t,e),t!==null&&(mu(t,e,n),cn(t,n))}function Ox(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Nb(t,n)}function Dx(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(O(314))}r!==null&&r.delete(e),Nb(t,n)}var Ob;Ob=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if((t.lanes&n)===0&&(e.flags&128)===0)return an=!1,Ex(t,e,n);an=(t.flags&131072)!==0}else an=!1,qe&&(e.flags&1048576)!==0&&MS(e,Sd,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Xc(t,e),t=e.pendingProps;var i=Mo(e,Wt.current);To(e,n),i=ty(null,e,r,t,i,n);var s=ny();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(r)?(s=!0,Ed(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Yv(e),i.updater=xf,e.stateNode=i,i._reactInternals=e,Gm(e,r,t,n),e=Xm(null,e,r,!0,s,n)):(e.tag=0,qe&&s&&jv(e),Yt(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Xc(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Mx(r),t=qn(r,t),i){case 0:e=Ym(null,e,r,t,n);break e;case 1:e=S1(null,e,r,t,n);break e;case 11:e=E1(null,e,r,t,n);break e;case 14:e=T1(null,e,r,qn(r.type,t),n);break e}throw Error(O(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Ym(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),S1(t,e,r,i,n);case 3:e:{if(gb(e),t===null)throw Error(O(387));r=e.pendingProps,s=e.memoizedState,i=s.element,US(t,e),kd(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Uo(Error(O(423)),e),e=b1(t,e,r,n,i);break e}else if(r!==i){i=Uo(Error(O(424)),e),e=b1(t,e,r,n,i);break e}else for(pn=Ei(e.stateNode.containerInfo.firstChild),yn=e,qe=!0,zn=null,n=BS(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Vo(),r===i){e=Vr(t,e,n);break e}Yt(t,e,r,n)}e=e.child}return e;case 5:return HS(e),t===null&&Hm(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Um(r,i)?o=null:s!==null&&Um(r,s)&&(e.flags|=32),mb(t,e),Yt(t,e,o,n),e.child;case 6:return t===null&&Hm(e),null;case 13:return vb(t,e,n);case 4:return Xv(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fo(e,null,r,n):Yt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),E1(t,e,r,i,n);case 7:return Yt(t,e,e.pendingProps,n),e.child;case 8:return Yt(t,e,e.pendingProps.children,n),e.child;case 12:return Yt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,Ce(bd,r._currentValue),r._currentValue=o,s!==null)if(Qn(s.value,o)){if(s.children===i.children&&!ln.current){e=Vr(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Cr(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Wm(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(O(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Wm(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Yt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,To(e,n),i=On(i),r=r(i),e.flags|=1,Yt(t,e,r,n),e.child;case 14:return r=e.type,i=qn(r,e.pendingProps),i=qn(r.type,i),T1(t,e,r,i,n);case 15:return hb(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:qn(r,i),Xc(t,e),e.tag=1,un(r)?(t=!0,Ed(e)):t=!1,To(e,n),zS(e,r,i),Gm(e,r,i,n),Xm(null,e,r,!0,t,n);case 19:return yb(t,e,n);case 22:return pb(t,e,n)}throw Error(O(156,e.tag))};function Db(t,e){return oS(t,e)}function Lx(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function xn(t,e,n,r){return new Lx(t,e,n,r)}function fy(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Mx(t){if(typeof t=="function")return fy(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xv)return 11;if(t===Nv)return 14}return 2}function Ii(t,e){var n=t.alternate;return n===null?(n=xn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ed(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")fy(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Zs:return fs(n.children,i,s,e);case Pv:o=8,i|=8;break;case ym:return t=xn(12,n,e,i|2),t.elementType=ym,t.lanes=s,t;case _m:return t=xn(13,n,e,i),t.elementType=_m,t.lanes=s,t;case wm:return t=xn(19,n,e,i),t.elementType=wm,t.lanes=s,t;case jT:return Lf(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case $T:o=10;break e;case zT:o=9;break e;case xv:o=11;break e;case Nv:o=14;break e;case ai:o=16,r=null;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=xn(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function fs(t,e,n,r){return t=xn(7,t,r,e),t.lanes=n,t}function Lf(t,e,n,r){return t=xn(22,t,r,e),t.elementType=jT,t.lanes=n,t.stateNode={isHidden:!1},t}function Ep(t,e,n){return t=xn(6,t,null,e),t.lanes=n,t}function Tp(t,e,n){return e=xn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vx(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=np(0),this.expirationTimes=np(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=np(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function hy(t,e,n,r,i,s,o,a,l){return t=new Vx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=xn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yv(s),t}function Fx(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Js,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function Lb(t){if(!t)return Pi;t=t._reactInternals;e:{if(Ds(t)!==t||t.tag!==1)throw Error(O(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(O(171))}if(t.tag===1){var n=t.type;if(un(n))return DS(t,n,e)}return e}function Mb(t,e,n,r,i,s,o,a,l){return t=hy(n,r,!0,t,i,s,o,a,l),t.context=Lb(null),n=t.current,r=Jt(),i=bi(n),s=Cr(r,i),s.callback=e!=null?e:null,Ti(n,s,i),t.current.lanes=i,mu(t,i,r),cn(t,r),t}function Mf(t,e,n,r){var i=e.current,s=Jt(),o=bi(i);return n=Lb(n),e.context===null?e.context=n:e.pendingContext=n,e=Cr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=Ti(i,e,o),t!==null&&(Wn(t,i,o,s),Gc(t,i,o)),o}function Dd(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function D1(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function py(t,e){D1(t,e),(t=t.alternate)&&D1(t,e)}function qx(){return null}var Vb=typeof reportError=="function"?reportError:function(t){console.error(t)};function my(t){this._internalRoot=t}Vf.prototype.render=my.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(O(409));Mf(t,e,null,null)};Vf.prototype.unmount=my.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ss(function(){Mf(null,t,null,null)}),e[Lr]=null}};function Vf(t){this._internalRoot=t}Vf.prototype.unstable_scheduleHydration=function(t){if(t){var e=hS();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ci.length&&e!==0&&e<ci[n].priority;n++);ci.splice(n,0,t),n===0&&mS(t)}};function gy(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Ff(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function L1(){}function Ux(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Dd(o);s.call(u)}}var o=Mb(e,r,t,0,null,!1,!1,"",L1);return t._reactRootContainer=o,t[Lr]=o.current,Pl(t.nodeType===8?t.parentNode:t),Ss(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=Dd(l);a.call(u)}}var l=hy(t,0,!1,null,null,!1,!1,"",L1);return t._reactRootContainer=l,t[Lr]=l.current,Pl(t.nodeType===8?t.parentNode:t),Ss(function(){Mf(e,l,n,r)}),l}function qf(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=Dd(o);a.call(l)}}Mf(e,o,t,i)}else o=Ux(n,e,t,i,r);return Dd(o)}dS=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ha(e.pendingLanes);n!==0&&(Lv(e,n|1),cn(e,Ze()),(ye&6)===0&&($o=Ze()+500,ji()))}break;case 13:Ss(function(){var r=Mr(t,1);if(r!==null){var i=Jt();Wn(r,t,1,i)}}),py(t,1)}};Mv=function(t){if(t.tag===13){var e=Mr(t,134217728);if(e!==null){var n=Jt();Wn(e,t,134217728,n)}py(t,134217728)}};fS=function(t){if(t.tag===13){var e=bi(t),n=Mr(t,e);if(n!==null){var r=Jt();Wn(n,t,e,r)}py(t,e)}};hS=function(){return Te};pS=function(t,e){var n=Te;try{return Te=t,e()}finally{Te=n}};Pm=function(t,e,n){switch(e){case"input":if(Sm(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Cf(r);if(!i)throw Error(O(90));HT(r),Sm(r,i)}}}break;case"textarea":KT(t,n);break;case"select":e=n.value,e!=null&&yo(t,!!n.multiple,e,!1)}};eS=uy;tS=Ss;var $x={usingClientEntryPoint:!1,Events:[vu,ro,Cf,JT,ZT,uy]},Na={findFiberByHostInstance:ts,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},zx={bundleType:Na.bundleType,version:Na.version,rendererPackageName:Na.rendererPackageName,rendererConfig:Na.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=iS(t),t===null?null:t.stateNode},findFiberByHostInstance:Na.findFiberByHostInstance||qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var hc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!hc.isDisabled&&hc.supportsFiber)try{If=hc.inject(zx),dr=hc}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=$x;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!gy(e))throw Error(O(200));return Fx(t,e,null,n)};Tn.createRoot=function(t,e){if(!gy(t))throw Error(O(299));var n=!1,r="",i=Vb;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=hy(t,1,!1,null,null,n,!1,r,i),t[Lr]=e.current,Pl(t.nodeType===8?t.parentNode:t),new my(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):(t=Object.keys(t).join(","),Error(O(268,t)));return t=iS(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Ss(t)};Tn.hydrate=function(t,e,n){if(!Ff(e))throw Error(O(200));return qf(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!gy(t))throw Error(O(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Vb;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Mb(e,null,t,1,n!=null?n:null,i,!1,s,o),t[Lr]=e.current,Pl(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Vf(e)};Tn.render=function(t,e,n){if(!Ff(e))throw Error(O(200));return qf(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Ff(t))throw Error(O(40));return t._reactRootContainer?(Ss(function(){qf(null,null,t,!1,function(){t._reactRootContainer=null,t[Lr]=null})}),!0):!1};Tn.unstable_batchedUpdates=uy;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Ff(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return qf(t,e,n,!1,r)};Tn.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Tn})(MT);var M1=MT.exports;gm.createRoot=M1.createRoot,gm.hydrateRoot=M1.hydrateRoot;/**
 * @remix-run/router v1.7.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fe(){return Fe=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Fe.apply(this,arguments)}var nt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(nt||(nt={}));const V1="popstate";function jx(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return ql("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:bs(i)}return Hx(e,n,null,t)}function he(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function zo(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function Bx(){return Math.random().toString(36).substr(2,8)}function F1(t,e){return{usr:t.state,key:t.key,idx:e}}function ql(t,e,n,r){return n===void 0&&(n=null),Fe({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Gr(e):e,{state:n,key:e&&e.key||r||Bx()})}function bs(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Gr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Hx(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=nt.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Fe({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=nt.Pop;let E=c(),v=E==null?null:E-u;u=E,l&&l({action:a,location:_.location,delta:v})}function f(E,v){a=nt.Push;let h=ql(_.location,E,v);n&&n(h,E),u=c()+1;let y=F1(h,u),g=_.createHref(h);try{o.pushState(y,"",g)}catch(T){if(T instanceof DOMException&&T.name==="DataCloneError")throw T;i.location.assign(g)}s&&l&&l({action:a,location:_.location,delta:1})}function m(E,v){a=nt.Replace;let h=ql(_.location,E,v);n&&n(h,E),u=c();let y=F1(h,u),g=_.createHref(h);o.replaceState(y,"",g),s&&l&&l({action:a,location:_.location,delta:0})}function w(E){let v=i.location.origin!=="null"?i.location.origin:i.location.href,h=typeof E=="string"?E:bs(E);return he(v,"No window.location.(origin|href) available to create URL for href: "+h),new URL(h,v)}let _={get action(){return a},get location(){return t(i,o)},listen(E){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(V1,d),l=E,()=>{i.removeEventListener(V1,d),l=null}},createHref(E){return e(i,E)},createURL:w,encodeLocation(E){let v=w(E);return{pathname:v.pathname,search:v.search,hash:v.hash}},push:f,replace:m,go(E){return o.go(E)}};return _}var ut;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(ut||(ut={}));const Wx=new Set(["lazy","caseSensitive","path","id","index","children"]);function Kx(t){return t.index===!0}function ug(t,e,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),t.map((i,s)=>{let o=[...n,s],a=typeof i.id=="string"?i.id:o.join("-");if(he(i.index!==!0||!i.children,"Cannot specify children on an index route"),he(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),Kx(i)){let l=Fe({},i,e(i),{id:a});return r[a]=l,l}else{let l=Fe({},i,e(i),{id:a,children:void 0});return r[a]=l,i.children&&(l.children=ug(i.children,e,o,r)),l}})}function co(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?Gr(e):e,i=aa(r.pathname||"/",n);if(i==null)return null;let s=Fb(t);Gx(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=r6(s[a],o6(i));return o}function Fb(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(he(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Pr([r,l.relativePath]),c=n.concat(l);s.children&&s.children.length>0&&(he(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Fb(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:t6(u,s.index),routesMeta:c})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of qb(s.path))i(s,o,l)}),e}function qb(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=qb(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function Gx(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:n6(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Qx=/^:\w+$/,Yx=3,Xx=2,Jx=1,Zx=10,e6=-2,q1=t=>t==="*";function t6(t,e){let n=t.split("/"),r=n.length;return n.some(q1)&&(r+=e6),e&&(r+=Xx),n.filter(i=>!q1(i)).reduce((i,s)=>i+(Qx.test(s)?Yx:s===""?Jx:Zx),r)}function n6(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function r6(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",c=i6({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(r,c.params);let d=a.route;s.push({params:r,pathname:Pr([i,c.pathname]),pathnameBase:c6(Pr([i,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(i=Pr([i,c.pathnameBase]))}return s}function i6(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=s6(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,c,d)=>{if(c==="*"){let f=a[d]||"";o=s.slice(0,s.length-f.length).replace(/(.)\/+$/,"$1")}return u[c]=a6(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:t}}function s6(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),zo(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function o6(t){try{return decodeURI(t)}catch(e){return zo(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function a6(t,e){try{return decodeURIComponent(t)}catch(n){return zo(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function aa(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function l6(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Gr(t):t;return{pathname:n?n.startsWith("/")?n:u6(n,e):e,search:d6(r),hash:f6(i)}}function u6(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Sp(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Uf(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function vy(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Gr(t):(i=Fe({},t),he(!i.pathname||!i.pathname.includes("?"),Sp("?","pathname","search",i)),he(!i.pathname||!i.pathname.includes("#"),Sp("#","pathname","hash",i)),he(!i.search||!i.search.includes("#"),Sp("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let f=o.split("/");for(;f[0]==="..";)f.shift(),d-=1;i.pathname=f.join("/")}a=d>=0?e[d]:"/"}let l=l6(i,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const Pr=t=>t.join("/").replace(/\/\/+/g,"/"),c6=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),d6=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,f6=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class yy{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Ub(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const $b=["post","put","patch","delete"],h6=new Set($b),p6=["get",...$b],m6=new Set(p6),g6=new Set([301,302,303,307,308]),v6=new Set([307,308]),bp={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},y6={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Oa={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},zb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,_6=t=>({hasErrorBoundary:Boolean(t.hasErrorBoundary)});function w6(t){const e=t.window?t.window:typeof window<"u"?window:void 0,n=typeof e<"u"&&typeof e.document<"u"&&typeof e.document.createElement<"u",r=!n;he(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let i;if(t.mapRouteProperties)i=t.mapRouteProperties;else if(t.detectErrorBoundary){let I=t.detectErrorBoundary;i=k=>({hasErrorBoundary:I(k)})}else i=_6;let s={},o=ug(t.routes,i,void 0,s),a,l=t.basename||"/",u=Fe({v7_normalizeFormMethod:!1,v7_prependBasename:!1},t.future),c=null,d=new Set,f=null,m=null,w=null,_=t.hydrationData!=null,E=co(o,t.history.location,l),v=null;if(E==null){let I=In(404,{pathname:t.history.location.pathname}),{matches:k,route:x}=K1(o);E=k,v={[x.id]:I}}let h=!E.some(I=>I.route.lazy)&&(!E.some(I=>I.route.loader)||t.hydrationData!=null),y,g={historyAction:t.history.action,location:t.history.location,matches:E,initialized:h,navigation:bp,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||v,fetchers:new Map,blockers:new Map},T=nt.Pop,S=!1,A,b=!1,C=!1,P=[],B=[],q=new Map,H=0,Ot=-1,Pe=new Map,$e=new Set,bt=new Map,V=new Map,Y=new Map,te=!1;function Ae(){return c=t.history.listen(I=>{let{action:k,location:x,delta:j}=I;if(te){te=!1;return}zo(Y.size===0||j!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let le=b_({currentLocation:g.location,nextLocation:x,historyAction:k});if(le&&j!=null){te=!0,t.history.go(j*-1),Gu(le,{state:"blocked",location:x,proceed(){Gu(le,{state:"proceeding",proceed:void 0,reset:void 0,location:x}),t.history.go(j)},reset(){let re=new Map(g.blockers);re.set(le,Oa),_e({blockers:re})}});return}return ti(k,x)}),g.initialized||ti(nt.Pop,g.location),y}function be(){c&&c(),d.clear(),A&&A.abort(),g.fetchers.forEach((I,k)=>Bh(k)),g.blockers.forEach((I,k)=>S_(k))}function ei(I){return d.add(I),()=>d.delete(I)}function _e(I){g=Fe({},g,I),d.forEach(k=>k(g))}function yr(I,k){var x,j;let le=g.actionData!=null&&g.navigation.formMethod!=null&&$n(g.navigation.formMethod)&&g.navigation.state==="loading"&&((x=I.state)==null?void 0:x._isRedirect)!==!0,re;k.actionData?Object.keys(k.actionData).length>0?re=k.actionData:re=null:le?re=g.actionData:re=null;let se=k.loaderData?W1(g.loaderData,k.loaderData,k.matches||[],k.errors):g.loaderData,Z=g.blockers;Z.size>0&&(Z=new Map(Z),Z.forEach((Re,Dt)=>Z.set(Dt,Oa)));let Q=S===!0||g.navigation.formMethod!=null&&$n(g.navigation.formMethod)&&((j=I.state)==null?void 0:j._isRedirect)!==!0;a&&(o=a,a=void 0),b||T===nt.Pop||(T===nt.Push?t.history.push(I,I.state):T===nt.Replace&&t.history.replace(I,I.state)),_e(Fe({},k,{actionData:re,loaderData:se,historyAction:T,location:I,initialized:!0,navigation:bp,revalidation:"idle",restoreScrollPosition:k_(I,k.matches||g.matches),preventScrollReset:Q,blockers:Z})),T=nt.Pop,S=!1,b=!1,C=!1,P=[],B=[]}async function Jn(I,k){if(typeof I=="number"){t.history.go(I);return}let x=cg(g.location,g.matches,l,u.v7_prependBasename,I,k==null?void 0:k.fromRouteId,k==null?void 0:k.relative),{path:j,submission:le,error:re}=U1(u.v7_normalizeFormMethod,!1,x,k),se=g.location,Z=ql(g.location,j,k&&k.state);Z=Fe({},Z,t.history.encodeLocation(Z));let Q=k&&k.replace!=null?k.replace:void 0,Re=nt.Push;Q===!0?Re=nt.Replace:Q===!1||le!=null&&$n(le.formMethod)&&le.formAction===g.location.pathname+g.location.search&&(Re=nt.Replace);let Dt=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,Ie=b_({currentLocation:se,nextLocation:Z,historyAction:Re});if(Ie){Gu(Ie,{state:"blocked",location:Z,proceed(){Gu(Ie,{state:"proceeding",proceed:void 0,reset:void 0,location:Z}),Jn(I,k)},reset(){let Je=new Map(g.blockers);Je.set(Ie,Oa),_e({blockers:Je})}});return}return await ti(Re,Z,{submission:le,pendingError:re,preventScrollReset:Dt,replace:k&&k.replace})}function $s(){if(jh(),_e({revalidation:"loading"}),g.navigation.state!=="submitting"){if(g.navigation.state==="idle"){ti(g.historyAction,g.location,{startUninterruptedRevalidation:!0});return}ti(T||g.historyAction,g.navigation.location,{overrideNavigation:g.navigation})}}async function ti(I,k,x){A&&A.abort(),A=null,T=I,b=(x&&x.startUninterruptedRevalidation)===!0,EC(g.location,g.matches),S=(x&&x.preventScrollReset)===!0;let j=a||o,le=x&&x.overrideNavigation,re=co(j,k,l);if(!re){let Je=In(404,{pathname:k.pathname}),{matches:gt,route:Ki}=K1(j);Hh(),yr(k,{matches:gt,loaderData:{},errors:{[Ki.id]:Je}});return}if(g.initialized&&!C&&I6(g.location,k)&&!(x&&x.submission&&$n(x.submission.formMethod))){yr(k,{matches:re});return}A=new AbortController;let se=La(t.history,k,A.signal,x&&x.submission),Z,Q;if(x&&x.pendingError)Q={[fo(re).route.id]:x.pendingError};else if(x&&x.submission&&$n(x.submission.formMethod)){let Je=await pC(se,k,x.submission,re,{replace:x.replace});if(Je.shortCircuited)return;Z=Je.pendingActionData,Q=Je.pendingActionError,le=pc(k,x.submission),se=new Request(se.url,{signal:se.signal})}let{shortCircuited:Re,loaderData:Dt,errors:Ie}=await mC(se,k,re,le,x&&x.submission,x&&x.fetcherSubmission,x&&x.replace,Z,Q);Re||(A=null,yr(k,Fe({matches:re},Z?{actionData:Z}:{},{loaderData:Dt,errors:Ie})))}async function pC(I,k,x,j,le){le===void 0&&(le={}),jh();let re=P6(k,x);_e({navigation:re});let se,Z=fg(j,k);if(!Z.route.action&&!Z.route.lazy)se={type:ut.error,error:In(405,{method:I.method,pathname:k.pathname,routeId:Z.route.id})};else if(se=await Da("action",I,Z,j,s,i,l),I.signal.aborted)return{shortCircuited:!0};if(bo(se)){let Q;return le&&le.replace!=null?Q=le.replace:Q=se.location===g.location.pathname+g.location.search,await Ta(g,se,{submission:x,replace:Q}),{shortCircuited:!0}}if(ul(se)){let Q=fo(j,Z.route.id);return(le&&le.replace)!==!0&&(T=nt.Push),{pendingActionData:{},pendingActionError:{[Q.route.id]:se.error}}}if(is(se))throw In(400,{type:"defer-action"});return{pendingActionData:{[Z.route.id]:se.data}}}async function mC(I,k,x,j,le,re,se,Z,Q){let Re=j||pc(k,le),Dt=le||re||Y1(Re),Ie=a||o,[Je,gt]=$1(t.history,g,x,Dt,k,C,P,B,bt,$e,Ie,l,Z,Q);if(Hh(ke=>!(x&&x.some(Mn=>Mn.route.id===ke))||Je&&Je.some(Mn=>Mn.route.id===ke)),Ot=++H,Je.length===0&&gt.length===0){let ke=E_();return yr(k,Fe({matches:x,loaderData:{},errors:Q||null},Z?{actionData:Z}:{},ke?{fetchers:new Map(g.fetchers)}:{})),{shortCircuited:!0}}if(!b){gt.forEach(Mn=>{let ri=g.fetchers.get(Mn.key),Yh=Ma(void 0,ri?ri.data:void 0);g.fetchers.set(Mn.key,Yh)});let ke=Z||g.actionData;_e(Fe({navigation:Re},ke?Object.keys(ke).length===0?{actionData:null}:{actionData:ke}:{},gt.length>0?{fetchers:new Map(g.fetchers)}:{}))}gt.forEach(ke=>{q.has(ke.key)&&ni(ke.key),ke.controller&&q.set(ke.key,ke.controller)});let Ki=()=>gt.forEach(ke=>ni(ke.key));A&&A.signal.addEventListener("abort",Ki);let{results:Gi,loaderResults:Sa,fetcherResults:Wh}=await __(g.matches,x,Je,gt,I);if(I.signal.aborted)return{shortCircuited:!0};A&&A.signal.removeEventListener("abort",Ki),gt.forEach(ke=>q.delete(ke.key));let _r=G1(Gi);if(_r){if(_r.idx>=Je.length){let ke=gt[_r.idx-Je.length].key;$e.add(ke)}return await Ta(g,_r.result,{replace:se}),{shortCircuited:!0}}let{loaderData:wr,errors:Qu}=H1(g,x,Je,Sa,Q,gt,Wh,V);V.forEach((ke,Mn)=>{ke.subscribe(ri=>{(ri||ke.done)&&V.delete(Mn)})});let Kh=E_(),Gh=T_(Ot),Qh=Kh||Gh||gt.length>0;return Fe({loaderData:wr,errors:Qu},Qh?{fetchers:new Map(g.fetchers)}:{})}function y_(I){return g.fetchers.get(I)||y6}function gC(I,k,x,j){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");q.has(I)&&ni(I);let le=a||o,re=cg(g.location,g.matches,l,u.v7_prependBasename,x,k,j==null?void 0:j.relative),se=co(le,re,l);if(!se){Ku(I,k,In(404,{pathname:re}));return}let{path:Z,submission:Q,error:Re}=U1(u.v7_normalizeFormMethod,!0,re,j);if(Re){Ku(I,k,Re);return}let Dt=fg(se,Z);if(S=(j&&j.preventScrollReset)===!0,Q&&$n(Q.formMethod)){vC(I,k,Z,Dt,se,Q);return}bt.set(I,{routeId:k,path:Z}),yC(I,k,Z,Dt,se,Q)}async function vC(I,k,x,j,le,re){if(jh(),bt.delete(I),!j.route.action&&!j.route.lazy){let lt=In(405,{method:re.formMethod,pathname:x,routeId:k});Ku(I,k,lt);return}let se=g.fetchers.get(I),Z=x6(re,se);g.fetchers.set(I,Z),_e({fetchers:new Map(g.fetchers)});let Q=new AbortController,Re=La(t.history,x,Q.signal,re);q.set(I,Q);let Dt=H,Ie=await Da("action",Re,j,le,s,i,l);if(Re.signal.aborted){q.get(I)===Q&&q.delete(I);return}if(bo(Ie))if(q.delete(I),Ot>Dt){let lt=Qs(void 0);g.fetchers.set(I,lt),_e({fetchers:new Map(g.fetchers)});return}else{$e.add(I);let lt=Ma(re);return g.fetchers.set(I,lt),_e({fetchers:new Map(g.fetchers)}),Ta(g,Ie,{submission:re,isFetchActionRedirect:!0})}if(ul(Ie)){Ku(I,k,Ie.error);return}if(is(Ie))throw In(400,{type:"defer-action"});let Je=g.navigation.location||g.location,gt=La(t.history,Je,Q.signal),Ki=a||o,Gi=g.navigation.state!=="idle"?co(Ki,g.navigation.location,l):g.matches;he(Gi,"Didn't find any matches after fetcher action");let Sa=++H;Pe.set(I,Sa);let Wh=Ma(re,Ie.data);g.fetchers.set(I,Wh);let[_r,wr]=$1(t.history,g,Gi,re,Je,C,P,B,bt,$e,Ki,l,{[j.route.id]:Ie.data},void 0);wr.filter(lt=>lt.key!==I).forEach(lt=>{let ba=lt.key,A_=g.fetchers.get(ba),SC=Ma(void 0,A_?A_.data:void 0);g.fetchers.set(ba,SC),q.has(ba)&&ni(ba),lt.controller&&q.set(ba,lt.controller)}),_e({fetchers:new Map(g.fetchers)});let Qu=()=>wr.forEach(lt=>ni(lt.key));Q.signal.addEventListener("abort",Qu);let{results:Kh,loaderResults:Gh,fetcherResults:Qh}=await __(g.matches,Gi,_r,wr,gt);if(Q.signal.aborted)return;Q.signal.removeEventListener("abort",Qu),Pe.delete(I),q.delete(I),wr.forEach(lt=>q.delete(lt.key));let ke=G1(Kh);if(ke){if(ke.idx>=_r.length){let lt=wr[ke.idx-_r.length].key;$e.add(lt)}return Ta(g,ke.result)}let{loaderData:Mn,errors:ri}=H1(g,g.matches,_r,Gh,void 0,wr,Qh,V);if(g.fetchers.has(I)){let lt=Qs(Ie.data);g.fetchers.set(I,lt)}let Yh=T_(Sa);g.navigation.state==="loading"&&Sa>Ot?(he(T,"Expected pending action"),A&&A.abort(),yr(g.navigation.location,{matches:Gi,loaderData:Mn,errors:ri,fetchers:new Map(g.fetchers)})):(_e(Fe({errors:ri,loaderData:W1(g.loaderData,Mn,Gi,ri)},Yh||wr.length>0?{fetchers:new Map(g.fetchers)}:{})),C=!1)}async function yC(I,k,x,j,le,re){let se=g.fetchers.get(I),Z=Ma(re,se?se.data:void 0);g.fetchers.set(I,Z),_e({fetchers:new Map(g.fetchers)});let Q=new AbortController,Re=La(t.history,x,Q.signal);q.set(I,Q);let Dt=H,Ie=await Da("loader",Re,j,le,s,i,l);if(is(Ie)&&(Ie=await Hb(Ie,Re.signal,!0)||Ie),q.get(I)===Q&&q.delete(I),Re.signal.aborted)return;if(bo(Ie))if(Ot>Dt){let gt=Qs(void 0);g.fetchers.set(I,gt),_e({fetchers:new Map(g.fetchers)});return}else{$e.add(I),await Ta(g,Ie);return}if(ul(Ie)){let gt=fo(g.matches,k);g.fetchers.delete(I),_e({fetchers:new Map(g.fetchers),errors:{[gt.route.id]:Ie.error}});return}he(!is(Ie),"Unhandled fetcher deferred data");let Je=Qs(Ie.data);g.fetchers.set(I,Je),_e({fetchers:new Map(g.fetchers)})}async function Ta(I,k,x){let{submission:j,replace:le,isFetchActionRedirect:re}=x===void 0?{}:x;k.revalidate&&(C=!0);let se=ql(I.location,k.location,Fe({_isRedirect:!0},re?{_isFetchActionRedirect:!0}:{}));if(he(se,"Expected a location on the redirect navigation"),zb.test(k.location)&&n){let Re=t.history.createURL(k.location),Dt=aa(Re.pathname,l)==null;if(e.location.origin!==Re.origin||Dt){le?e.location.replace(k.location):e.location.assign(k.location);return}}A=null;let Z=le===!0?nt.Replace:nt.Push,Q=j||Y1(I.navigation);if(v6.has(k.status)&&Q&&$n(Q.formMethod))await ti(Z,se,{submission:Fe({},Q,{formAction:k.location}),preventScrollReset:S});else if(re)await ti(Z,se,{overrideNavigation:pc(se),fetcherSubmission:Q,preventScrollReset:S});else{let Re=pc(se,Q);await ti(Z,se,{overrideNavigation:Re,preventScrollReset:S})}}async function __(I,k,x,j,le){let re=await Promise.all([...x.map(Q=>Da("loader",le,Q,k,s,i,l)),...j.map(Q=>Q.matches&&Q.match&&Q.controller?Da("loader",La(t.history,Q.path,Q.controller.signal),Q.match,Q.matches,s,i,l):{type:ut.error,error:In(404,{pathname:Q.path})})]),se=re.slice(0,x.length),Z=re.slice(x.length);return await Promise.all([Q1(I,x,se,se.map(()=>le.signal),!1,g.loaderData),Q1(I,j.map(Q=>Q.match),Z,j.map(Q=>Q.controller?Q.controller.signal:null),!0)]),{results:re,loaderResults:se,fetcherResults:Z}}function jh(){C=!0,P.push(...Hh()),bt.forEach((I,k)=>{q.has(k)&&(B.push(k),ni(k))})}function Ku(I,k,x){let j=fo(g.matches,k);Bh(I),_e({errors:{[j.route.id]:x},fetchers:new Map(g.fetchers)})}function Bh(I){let k=g.fetchers.get(I);q.has(I)&&!(k&&k.state==="loading"&&Pe.has(I))&&ni(I),bt.delete(I),Pe.delete(I),$e.delete(I),g.fetchers.delete(I)}function ni(I){let k=q.get(I);he(k,"Expected fetch controller: "+I),k.abort(),q.delete(I)}function w_(I){for(let k of I){let x=y_(k),j=Qs(x.data);g.fetchers.set(k,j)}}function E_(){let I=[],k=!1;for(let x of $e){let j=g.fetchers.get(x);he(j,"Expected fetcher: "+x),j.state==="loading"&&($e.delete(x),I.push(x),k=!0)}return w_(I),k}function T_(I){let k=[];for(let[x,j]of Pe)if(j<I){let le=g.fetchers.get(x);he(le,"Expected fetcher: "+x),le.state==="loading"&&(ni(x),Pe.delete(x),k.push(x))}return w_(k),k.length>0}function _C(I,k){let x=g.blockers.get(I)||Oa;return Y.get(I)!==k&&Y.set(I,k),x}function S_(I){g.blockers.delete(I),Y.delete(I)}function Gu(I,k){let x=g.blockers.get(I)||Oa;he(x.state==="unblocked"&&k.state==="blocked"||x.state==="blocked"&&k.state==="blocked"||x.state==="blocked"&&k.state==="proceeding"||x.state==="blocked"&&k.state==="unblocked"||x.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+x.state+" -> "+k.state);let j=new Map(g.blockers);j.set(I,k),_e({blockers:j})}function b_(I){let{currentLocation:k,nextLocation:x,historyAction:j}=I;if(Y.size===0)return;Y.size>1&&zo(!1,"A router only supports one blocker at a time");let le=Array.from(Y.entries()),[re,se]=le[le.length-1],Z=g.blockers.get(re);if(!(Z&&Z.state==="proceeding")&&se({currentLocation:k,nextLocation:x,historyAction:j}))return re}function Hh(I){let k=[];return V.forEach((x,j)=>{(!I||I(j))&&(x.cancel(),k.push(j),V.delete(j))}),k}function wC(I,k,x){if(f=I,w=k,m=x||null,!_&&g.navigation===bp){_=!0;let j=k_(g.location,g.matches);j!=null&&_e({restoreScrollPosition:j})}return()=>{f=null,w=null,m=null}}function I_(I,k){return m&&m(I,k.map(j=>C6(j,g.loaderData)))||I.key}function EC(I,k){if(f&&w){let x=I_(I,k);f[x]=w()}}function k_(I,k){if(f){let x=I_(I,k),j=f[x];if(typeof j=="number")return j}return null}function TC(I){s={},a=ug(I,i,void 0,s)}return y={get basename(){return l},get state(){return g},get routes(){return o},initialize:Ae,subscribe:ei,enableScrollRestoration:wC,navigate:Jn,fetch:gC,revalidate:$s,createHref:I=>t.history.createHref(I),encodeLocation:I=>t.history.encodeLocation(I),getFetcher:y_,deleteFetcher:Bh,dispose:be,getBlocker:_C,deleteBlocker:S_,_internalFetchControllers:q,_internalActiveDeferreds:V,_internalSetRoutes:TC},y}function E6(t){return t!=null&&("formData"in t&&t.formData!=null||"body"in t&&t.body!==void 0)}function cg(t,e,n,r,i,s,o){let a,l;if(s!=null&&o!=="path"){a=[];for(let c of e)if(a.push(c),c.route.id===s){l=c;break}}else a=e,l=e[e.length-1];let u=vy(i||".",Uf(a).map(c=>c.pathnameBase),aa(t.pathname,n)||t.pathname,o==="path");return i==null&&(u.search=t.search,u.hash=t.hash),(i==null||i===""||i===".")&&l&&l.route.index&&!_y(u.search)&&(u.search=u.search?u.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(u.pathname=u.pathname==="/"?n:Pr([n,u.pathname])),bs(u)}function U1(t,e,n,r){if(!r||!E6(r))return{path:n};if(r.formMethod&&!R6(r.formMethod))return{path:n,error:In(405,{method:r.formMethod})};let i=()=>({path:n,error:In(400,{type:"invalid-body"})}),s=r.formMethod||"get",o=t?s.toUpperCase():s.toLowerCase(),a=Bb(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!$n(o))return i();let f=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((m,w)=>{let[_,E]=w;return""+m+_+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:f}}}else if(r.formEncType==="application/json"){if(!$n(o))return i();try{let f=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:o,formAction:a,formEncType:r.formEncType,formData:void 0,json:f,text:void 0}}}catch{return i()}}}he(typeof FormData=="function","FormData is not available in this environment");let l,u;if(r.formData)l=dg(r.formData),u=r.formData;else if(r.body instanceof FormData)l=dg(r.body),u=r.body;else if(r.body instanceof URLSearchParams)l=r.body,u=B1(l);else if(r.body==null)l=new URLSearchParams,u=new FormData;else try{l=new URLSearchParams(r.body),u=B1(l)}catch{return i()}let c={formMethod:o,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if($n(c.formMethod))return{path:n,submission:c};let d=Gr(n);return e&&d.search&&_y(d.search)&&l.append("index",""),d.search="?"+l,{path:bs(d),submission:c}}function T6(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function $1(t,e,n,r,i,s,o,a,l,u,c,d,f,m){let w=m?Object.values(m)[0]:f?Object.values(f)[0]:void 0,_=t.createURL(e.location),E=t.createURL(i),v=m?Object.keys(m)[0]:void 0,y=T6(n,v).filter((T,S)=>{if(T.route.lazy)return!0;if(T.route.loader==null)return!1;if(S6(e.loaderData,e.matches[S],T)||o.some(C=>C===T.route.id))return!0;let A=e.matches[S],b=T;return z1(T,Fe({currentUrl:_,currentParams:A.params,nextUrl:E,nextParams:b.params},r,{actionResult:w,defaultShouldRevalidate:s||_.pathname+_.search===E.pathname+E.search||_.search!==E.search||jb(A,b)}))}),g=[];return l.forEach((T,S)=>{if(!n.some(B=>B.route.id===T.routeId))return;let A=co(c,T.path,d);if(!A){g.push({key:S,routeId:T.routeId,path:T.path,matches:null,match:null,controller:null});return}let b=e.fetchers.get(S),C=fg(A,T.path),P=!1;u.has(S)?P=!1:a.includes(S)?P=!0:b&&b.state!=="idle"&&b.data===void 0?P=s:P=z1(C,Fe({currentUrl:_,currentParams:e.matches[e.matches.length-1].params,nextUrl:E,nextParams:n[n.length-1].params},r,{actionResult:w,defaultShouldRevalidate:s})),P&&g.push({key:S,routeId:T.routeId,path:T.path,matches:A,match:C,controller:new AbortController})}),[y,g]}function S6(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function jb(t,e){let n=t.route.path;return t.pathname!==e.pathname||n!=null&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function z1(t,e){if(t.route.shouldRevalidate){let n=t.route.shouldRevalidate(e);if(typeof n=="boolean")return n}return e.defaultShouldRevalidate}async function j1(t,e,n){if(!t.lazy)return;let r=await t.lazy();if(!t.lazy)return;let i=n[t.id];he(i,"No route found in manifest");let s={};for(let o in r){let l=i[o]!==void 0&&o!=="hasErrorBoundary";zo(!l,'Route "'+i.id+'" has a static property "'+o+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+o+'" will be ignored.')),!l&&!Wx.has(o)&&(s[o]=r[o])}Object.assign(i,s),Object.assign(i,Fe({},e(i),{lazy:void 0}))}async function Da(t,e,n,r,i,s,o,a){a===void 0&&(a={});let l,u,c,d=w=>{let _,E=new Promise((v,h)=>_=h);return c=()=>_(),e.signal.addEventListener("abort",c),Promise.race([w({request:e,params:n.params,context:a.requestContext}),E])};try{let w=n.route[t];if(n.route.lazy)if(w)u=(await Promise.all([d(w),j1(n.route,s,i)]))[0];else if(await j1(n.route,s,i),w=n.route[t],w)u=await d(w);else if(t==="action"){let _=new URL(e.url),E=_.pathname+_.search;throw In(405,{method:e.method,pathname:E,routeId:n.route.id})}else return{type:ut.data,data:void 0};else if(w)u=await d(w);else{let _=new URL(e.url),E=_.pathname+_.search;throw In(404,{pathname:E})}he(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(w){l=ut.error,u=w}finally{c&&e.signal.removeEventListener("abort",c)}if(A6(u)){let w=u.status;if(g6.has(w)){let v=u.headers.get("Location");if(he(v,"Redirects returned/thrown from loaders/actions must have a Location header"),!zb.test(v))v=cg(new URL(e.url),r.slice(0,r.indexOf(n)+1),o,!0,v);else if(!a.isStaticRequest){let h=new URL(e.url),y=v.startsWith("//")?new URL(h.protocol+v):new URL(v),g=aa(y.pathname,o)!=null;y.origin===h.origin&&g&&(v=y.pathname+y.search+y.hash)}if(a.isStaticRequest)throw u.headers.set("Location",v),u;return{type:ut.redirect,status:w,location:v,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(a.isRouteRequest)throw{type:l||ut.data,response:u};let _,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?_=await u.json():_=await u.text(),l===ut.error?{type:l,error:new yy(w,u.statusText,_),headers:u.headers}:{type:ut.data,data:_,statusCode:u.status,headers:u.headers}}if(l===ut.error)return{type:l,error:u};if(k6(u)){var f,m;return{type:ut.deferred,deferredData:u,statusCode:(f=u.init)==null?void 0:f.status,headers:((m=u.init)==null?void 0:m.headers)&&new Headers(u.init.headers)}}return{type:ut.data,data:u}}function La(t,e,n,r){let i=t.createURL(Bb(e)).toString(),s={signal:n};if(r&&$n(r.formMethod)){let{formMethod:o,formEncType:a}=r;s.method=o.toUpperCase(),a==="application/json"?(s.headers=new Headers({"Content-Type":a}),s.body=JSON.stringify(r.json)):a==="text/plain"?s.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?s.body=dg(r.formData):s.body=r.formData}return new Request(i,s)}function dg(t){let e=new URLSearchParams;for(let[n,r]of t.entries())e.append(n,typeof r=="string"?r:r.name);return e}function B1(t){let e=new FormData;for(let[n,r]of t.entries())e.append(n,r);return e}function b6(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((c,d)=>{let f=e[d].route.id;if(he(!bo(c),"Cannot handle redirect results in processLoaderData"),ul(c)){let m=fo(t,f),w=c.error;r&&(w=Object.values(r)[0],r=void 0),o=o||{},o[m.route.id]==null&&(o[m.route.id]=w),s[f]=void 0,l||(l=!0,a=Ub(c.error)?c.error.status:500),c.headers&&(u[f]=c.headers)}else is(c)?(i.set(f,c.deferredData),s[f]=c.deferredData.data):s[f]=c.data,c.statusCode!=null&&c.statusCode!==200&&!l&&(a=c.statusCode),c.headers&&(u[f]=c.headers)}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function H1(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=b6(e,n,r,i,a);for(let c=0;c<s.length;c++){let{key:d,match:f,controller:m}=s[c];he(o!==void 0&&o[c]!==void 0,"Did not find corresponding fetcher result");let w=o[c];if(!(m&&m.signal.aborted))if(ul(w)){let _=fo(t.matches,f==null?void 0:f.route.id);u&&u[_.route.id]||(u=Fe({},u,{[_.route.id]:w.error})),t.fetchers.delete(d)}else if(bo(w))he(!1,"Unhandled fetcher revalidation redirect");else if(is(w))he(!1,"Unhandled fetcher deferred data");else{let _=Qs(w.data);t.fetchers.set(d,_)}}return{loaderData:l,errors:u}}function W1(t,e,n,r){let i=Fe({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&s.route.loader&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function fo(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function K1(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function In(t,e){let{pathname:n,routeId:r,method:i,type:s}=e===void 0?{}:e,o="Unknown Server Error",a="Unknown @remix-run/router error";return t===400?(o="Bad Request",i&&n&&r?a="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":s==="defer-action"?a="defer() is not supported in actions":s==="invalid-body"&&(a="Unable to encode submission body")):t===403?(o="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):t===404?(o="Not Found",a='No route matches URL "'+n+'"'):t===405&&(o="Method Not Allowed",i&&n&&r?a="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(a='Invalid request method "'+i.toUpperCase()+'"')),new yy(t||500,o,new Error(a),!0)}function G1(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(bo(n))return{result:n,idx:e}}}function Bb(t){let e=typeof t=="string"?Gr(t):t;return bs(Fe({},e,{hash:""}))}function I6(t,e){return t.pathname!==e.pathname||t.search!==e.search?!1:t.hash===""?e.hash!=="":t.hash===e.hash?!0:e.hash!==""}function is(t){return t.type===ut.deferred}function ul(t){return t.type===ut.error}function bo(t){return(t&&t.type)===ut.redirect}function k6(t){let e=t;return e&&typeof e=="object"&&typeof e.data=="object"&&typeof e.subscribe=="function"&&typeof e.cancel=="function"&&typeof e.resolveData=="function"}function A6(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function R6(t){return m6.has(t.toLowerCase())}function $n(t){return h6.has(t.toLowerCase())}async function Q1(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o];if(!l)continue;let u=t.find(d=>d.route.id===l.route.id),c=u!=null&&!jb(u,l)&&(s&&s[l.route.id])!==void 0;if(is(a)&&(i||c)){let d=r[o];he(d,"Expected an AbortSignal for revalidating fetcher deferred result"),await Hb(a,d,i).then(f=>{f&&(n[o]=f||n[o])})}}}async function Hb(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:ut.data,data:t.deferredData.unwrappedData}}catch(i){return{type:ut.error,error:i}}return{type:ut.data,data:t.deferredData.data}}}function _y(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function C6(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function fg(t,e){let n=typeof e=="string"?Gr(e).search:e.search;if(t[t.length-1].route.index&&_y(n||""))return t[t.length-1];let r=Uf(t);return r[r.length-1]}function Y1(t){let{formMethod:e,formAction:n,formEncType:r,text:i,formData:s,json:o}=t;if(!(!e||!n||!r)){if(i!=null)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:void 0,text:i};if(s!=null)return{formMethod:e,formAction:n,formEncType:r,formData:s,json:void 0,text:void 0};if(o!==void 0)return{formMethod:e,formAction:n,formEncType:r,formData:void 0,json:o,text:void 0}}}function pc(t,e){return e?{state:"loading",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}:{state:"loading",location:t,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function P6(t,e){return{state:"submitting",location:t,formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text}}function Ma(t,e){return t?{state:"loading",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e," _hasFetcherDoneAnything ":!0}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e," _hasFetcherDoneAnything ":!0}}function x6(t,e){return{state:"submitting",formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text,data:e?e.data:void 0," _hasFetcherDoneAnything ":!0}}function Qs(t){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t," _hasFetcherDoneAnything ":!0}}var $f={exports:{}},zf={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N6=M.exports,O6=Symbol.for("react.element"),D6=Symbol.for("react.fragment"),L6=Object.prototype.hasOwnProperty,M6=N6.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,V6={key:!0,ref:!0,__self:!0,__source:!0};function Wb(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)L6.call(e,r)&&!V6.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:O6,type:t,key:s,ref:o,props:i,_owner:M6.current}}zf.Fragment=D6;zf.jsx=Wb;zf.jsxs=Wb;(function(t){t.exports=zf})($f);const wt=$f.exports.Fragment,p=$f.exports.jsx,R=$f.exports.jsxs;/**
 * React Router v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ld(){return Ld=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ld.apply(this,arguments)}const jf=M.exports.createContext(null),wy=M.exports.createContext(null),Ls=M.exports.createContext(null),Bf=M.exports.createContext(null),Qr=M.exports.createContext({outlet:null,matches:[],isDataRoute:!1}),Kb=M.exports.createContext(null);function F6(t,e){let{relative:n}=e===void 0?{}:e;_u()||he(!1);let{basename:r,navigator:i}=M.exports.useContext(Ls),{hash:s,pathname:o,search:a}=Ty(t,{relative:n}),l=o;return r!=="/"&&(l=o==="/"?r:Pr([r,o])),i.createHref({pathname:l,search:a,hash:s})}function _u(){return M.exports.useContext(Bf)!=null}function la(){return _u()||he(!1),M.exports.useContext(Bf).location}function Gb(t){M.exports.useContext(Ls).static||M.exports.useLayoutEffect(t)}function q6(){let{isDataRoute:t}=M.exports.useContext(Qr);return t?Z6():U6()}function U6(){_u()||he(!1);let t=M.exports.useContext(jf),{basename:e,navigator:n}=M.exports.useContext(Ls),{matches:r}=M.exports.useContext(Qr),{pathname:i}=la(),s=JSON.stringify(Uf(r).map(l=>l.pathnameBase)),o=M.exports.useRef(!1);return Gb(()=>{o.current=!0}),M.exports.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){n.go(l);return}let c=vy(l,JSON.parse(s),i,u.relative==="path");t==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:Pr([e,c.pathname])),(u.replace?n.replace:n.push)(c,u.state,u)},[e,n,s,i,t])}const $6=M.exports.createContext(null);function z6(t){let e=M.exports.useContext(Qr).outlet;return e&&p($6.Provider,{value:t,children:e})}function Ey(){let{matches:t}=M.exports.useContext(Qr),e=t[t.length-1];return e?e.params:{}}function Ty(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=M.exports.useContext(Qr),{pathname:i}=la(),s=JSON.stringify(Uf(r).map(o=>o.pathnameBase));return M.exports.useMemo(()=>vy(t,JSON.parse(s),i,n==="path"),[t,s,i,n])}function j6(t,e,n){_u()||he(!1);let{navigator:r}=M.exports.useContext(Ls),{matches:i}=M.exports.useContext(Qr),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=la(),u;if(e){var c;let _=typeof e=="string"?Gr(e):e;a==="/"||((c=_.pathname)==null?void 0:c.startsWith(a))||he(!1),u=_}else u=l;let d=u.pathname||"/",f=a==="/"?d:d.slice(a.length)||"/",m=co(t,{pathname:f}),w=G6(m&&m.map(_=>Object.assign({},_,{params:Object.assign({},o,_.params),pathname:Pr([a,r.encodeLocation?r.encodeLocation(_.pathname).pathname:_.pathname]),pathnameBase:_.pathnameBase==="/"?a:Pr([a,r.encodeLocation?r.encodeLocation(_.pathnameBase).pathname:_.pathnameBase])})),i,n);return e&&w?p(Bf.Provider,{value:{location:Ld({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:nt.Pop},children:w}):w}function B6(){let t=J6(),e=Ub(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null;return R(wt,{children:[p("h2",{children:"Unexpected Application Error!"}),p("h3",{style:{fontStyle:"italic"},children:e}),n?p("pre",{style:{padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},children:n}):null,null]})}const H6=p(B6,{});class W6 extends M.exports.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?p(Qr.Provider,{value:this.props.routeContext,children:p(Kb.Provider,{value:this.state.error,children:this.props.component})}):this.props.children}}function K6(t){let{routeContext:e,match:n,children:r}=t,i=M.exports.useContext(jf);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),p(Qr.Provider,{value:e,children:r})}function G6(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let s=t,o=(r=n)==null?void 0:r.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||he(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;n&&(d=l.route.errorElement||H6);let f=e.concat(s.slice(0,u+1)),m=()=>{let w;return c?w=d:l.route.Component?w=M.exports.createElement(l.route.Component,null):l.route.element?w=l.route.element:w=a,p(K6,{match:l,routeContext:{outlet:a,matches:f,isDataRoute:n!=null},children:w})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?p(W6,{location:n.location,revalidation:n.revalidation,component:d,error:c,children:m(),routeContext:{outlet:null,matches:f,isDataRoute:!0}}):m()},null)}var hg;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(hg||(hg={}));var Ul;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Ul||(Ul={}));function Q6(t){let e=M.exports.useContext(jf);return e||he(!1),e}function Y6(t){let e=M.exports.useContext(wy);return e||he(!1),e}function X6(t){let e=M.exports.useContext(Qr);return e||he(!1),e}function Qb(t){let e=X6(),n=e.matches[e.matches.length-1];return n.route.id||he(!1),n.route.id}function J6(){var t;let e=M.exports.useContext(Kb),n=Y6(Ul.UseRouteError),r=Qb(Ul.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Z6(){let{router:t}=Q6(hg.UseNavigateStable),e=Qb(Ul.UseNavigateStable),n=M.exports.useRef(!1);return Gb(()=>{n.current=!0}),M.exports.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Ld({fromRouteId:e},s)))},[t,e])}const eN="startTransition",X1=LT[eN];function tN(t){let{fallbackElement:e,router:n,future:r}=t,[i,s]=M.exports.useState(n.state),{v7_startTransition:o}=r||{},a=M.exports.useCallback(d=>{o&&X1?X1(()=>s(d)):s(d)},[s,o]);M.exports.useLayoutEffect(()=>n.subscribe(a),[n,a]);let l=M.exports.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:d=>n.navigate(d),push:(d,f,m)=>n.navigate(d,{state:f,preventScrollReset:m==null?void 0:m.preventScrollReset}),replace:(d,f,m)=>n.navigate(d,{replace:!0,state:f,preventScrollReset:m==null?void 0:m.preventScrollReset})}),[n]),u=n.basename||"/",c=M.exports.useMemo(()=>({router:n,navigator:l,static:!1,basename:u}),[n,l,u]);return p(wt,{children:p(jf.Provider,{value:c,children:p(wy.Provider,{value:i,children:p(iN,{basename:u,location:i.location,navigationType:i.historyAction,navigator:l,children:i.initialized?p(nN,{routes:n.routes,state:i}):e})})})})}function nN(t){let{routes:e,state:n}=t;return j6(e,void 0,n)}function rN(t){return z6(t.context)}function iN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=nt.Pop,navigator:s,static:o=!1}=t;_u()&&he(!1);let a=e.replace(/^\/*/,"/"),l=M.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=Gr(r));let{pathname:u="/",search:c="",hash:d="",state:f=null,key:m="default"}=r,w=M.exports.useMemo(()=>{let _=aa(u,a);return _==null?null:{location:{pathname:_,search:c,hash:d,state:f,key:m},navigationType:i}},[a,u,c,d,f,m,i]);return w==null?null:p(Ls.Provider,{value:l,children:p(Bf.Provider,{children:n,value:w})})}var J1;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(J1||(J1={}));new Promise(()=>{});function sN(t){let e={hasErrorBoundary:t.ErrorBoundary!=null||t.errorElement!=null};return t.Component&&Object.assign(e,{element:M.exports.createElement(t.Component),Component:void 0}),t.ErrorBoundary&&Object.assign(e,{errorElement:M.exports.createElement(t.ErrorBoundary),ErrorBoundary:void 0}),e}/**
 * React Router DOM v6.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Md(){return Md=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Md.apply(this,arguments)}function Yb(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function oN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function aN(t,e){return t.button===0&&(!e||e==="_self")&&!oN(t)}const lN=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"],uN=["aria-current","caseSensitive","className","end","style","to","children"];function cN(t,e){return w6({basename:e==null?void 0:e.basename,future:Md({},e==null?void 0:e.future,{v7_prependBasename:!0}),history:jx({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||dN(),routes:t,mapRouteProperties:sN}).initialize()}function dN(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Md({},e,{errors:fN(e.errors)})),e}function fN(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new yy(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){if(i.__subType){let s=window[i.__subType];if(typeof s=="function")try{let o=new s(i.message);o.stack="",n[r]=o}catch{}}if(n[r]==null){let s=new Error(i.message);s.stack="",n[r]=s}}else n[r]=i;return n}const hN="startTransition";LT[hN];const pN=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",mN=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Ir=M.exports.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:a,target:l,to:u,preventScrollReset:c}=e,d=Yb(e,lN),{basename:f}=M.exports.useContext(Ls),m,w=!1;if(typeof u=="string"&&mN.test(u)&&(m=u,pN))try{let h=new URL(window.location.href),y=u.startsWith("//")?new URL(h.protocol+u):new URL(u),g=aa(y.pathname,f);y.origin===h.origin&&g!=null?u=g+y.search+y.hash:w=!0}catch{}let _=F6(u,{relative:i}),E=gN(u,{replace:o,state:a,target:l,preventScrollReset:c,relative:i});function v(h){r&&r(h),h.defaultPrevented||E(h)}return p("a",{...d,href:m||_,onClick:w||s?r:v,ref:n,target:l})}),js=M.exports.forwardRef(function(e,n){let{"aria-current":r="page",caseSensitive:i=!1,className:s="",end:o=!1,style:a,to:l,children:u}=e,c=Yb(e,uN),d=Ty(l,{relative:c.relative}),f=la(),m=M.exports.useContext(wy),{navigator:w}=M.exports.useContext(Ls),_=w.encodeLocation?w.encodeLocation(d).pathname:d.pathname,E=f.pathname,v=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(E=E.toLowerCase(),v=v?v.toLowerCase():null,_=_.toLowerCase());let h=E===_||!o&&E.startsWith(_)&&E.charAt(_.length)==="/",y=v!=null&&(v===_||!o&&v.startsWith(_)&&v.charAt(_.length)==="/"),g=h?r:void 0,T;typeof s=="function"?T=s({isActive:h,isPending:y}):T=[s,h?"active":null,y?"pending":null].filter(Boolean).join(" ");let S=typeof a=="function"?a({isActive:h,isPending:y}):a;return p(Ir,{...c,"aria-current":g,className:T,ref:n,style:S,to:l,children:typeof u=="function"?u({isActive:h,isPending:y}):u})});var Z1;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher"})(Z1||(Z1={}));var ew;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ew||(ew={}));function gN(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o}=e===void 0?{}:e,a=q6(),l=la(),u=Ty(t,{relative:o});return M.exports.useCallback(c=>{if(aN(c,n)){c.preventDefault();let d=r!==void 0?r:bs(l)===bs(u);a(t,{replace:d,state:i,preventScrollReset:s,relative:o})}},[l,a,u,r,i,n,t,s,o])}var Xb={},Jb={},Hf={},Zb={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={animating:!1,autoplaying:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,dragging:!1,edgeDragged:!1,initialized:!1,lazyLoadedList:[],listHeight:null,listWidth:null,scrolling:!1,slideCount:null,slideHeight:null,slideWidth:null,swipeLeft:null,swiped:!1,swiping:!1,touchObject:{startX:0,startY:0,curX:0,curY:0},trackStyle:{},trackWidth:0,targetSlide:0},n=e;t.default=n})(Zb);var vN="Expected a function",tw=0/0,yN="[object Symbol]",_N=/^\s+|\s+$/g,wN=/^[-+]0x[0-9a-f]+$/i,EN=/^0b[01]+$/i,TN=/^0o[0-7]+$/i,SN=parseInt,bN=typeof Yu=="object"&&Yu&&Yu.Object===Object&&Yu,IN=typeof self=="object"&&self&&self.Object===Object&&self,kN=bN||IN||Function("return this")(),AN=Object.prototype,RN=AN.toString,CN=Math.max,PN=Math.min,Ip=function(){return kN.Date.now()};function xN(t,e,n){var r,i,s,o,a,l,u=0,c=!1,d=!1,f=!0;if(typeof t!="function")throw new TypeError(vN);e=nw(e)||0,pg(n)&&(c=!!n.leading,d="maxWait"in n,s=d?CN(nw(n.maxWait)||0,e):s,f="trailing"in n?!!n.trailing:f);function m(S){var A=r,b=i;return r=i=void 0,u=S,o=t.apply(b,A),o}function w(S){return u=S,a=setTimeout(v,e),c?m(S):o}function _(S){var A=S-l,b=S-u,C=e-A;return d?PN(C,s-b):C}function E(S){var A=S-l,b=S-u;return l===void 0||A>=e||A<0||d&&b>=s}function v(){var S=Ip();if(E(S))return h(S);a=setTimeout(v,_(S))}function h(S){return a=void 0,f&&r?m(S):(r=i=void 0,o)}function y(){a!==void 0&&clearTimeout(a),u=0,r=l=i=a=void 0}function g(){return a===void 0?o:h(Ip())}function T(){var S=Ip(),A=E(S);if(r=arguments,i=this,l=S,A){if(a===void 0)return w(l);if(d)return a=setTimeout(v,e),m(l)}return a===void 0&&(a=setTimeout(v,e)),o}return T.cancel=y,T.flush=g,T}function pg(t){var e=typeof t;return!!t&&(e=="object"||e=="function")}function NN(t){return!!t&&typeof t=="object"}function ON(t){return typeof t=="symbol"||NN(t)&&RN.call(t)==yN}function nw(t){if(typeof t=="number")return t;if(ON(t))return tw;if(pg(t)){var e=typeof t.valueOf=="function"?t.valueOf():t;t=pg(e)?e+"":e}if(typeof t!="string")return t===0?t:+t;t=t.replace(_N,"");var n=EN.test(t);return n||TN.test(t)?SN(t.slice(2),n?2:8):wN.test(t)?tw:+t}var DN=xN,wu={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(t){(function(){var e={}.hasOwnProperty;function n(){for(var r=[],i=0;i<arguments.length;i++){var s=arguments[i];if(!!s){var o=typeof s;if(o==="string"||o==="number")r.push(s);else if(Array.isArray(s)){if(s.length){var a=n.apply(null,s);a&&r.push(a)}}else if(o==="object"){if(s.toString!==Object.prototype.toString&&!s.toString.toString().includes("[native code]")){r.push(s.toString());continue}for(var l in s)e.call(s,l)&&s[l]&&r.push(l)}}}return r.join(" ")}t.exports?(n.default=n,t.exports=n):window.classNames=n})()})(wu);var U={};Object.defineProperty(U,"__esModule",{value:!0});U.checkSpecKeys=U.checkNavigable=U.changeSlide=U.canUseDOM=U.canGoNext=void 0;U.clamp=eI;U.swipeStart=U.swipeMove=U.swipeEnd=U.slidesOnRight=U.slidesOnLeft=U.slideHandler=U.siblingDirection=U.safePreventDefault=U.lazyStartIndex=U.lazySlidesOnRight=U.lazySlidesOnLeft=U.lazyEndIndex=U.keyHandler=U.initializedState=U.getWidth=U.getTrackLeft=U.getTrackCSS=U.getTrackAnimateCSS=U.getTotalSlides=U.getSwipeDirection=U.getSlideCount=U.getRequiredLazySlides=U.getPreClones=U.getPostClones=U.getOnDemandLazySlides=U.getNavigableIndexes=U.getHeight=U.extractObject=void 0;var LN=MN(M.exports);function MN(t){return t&&t.__esModule?t:{default:t}}function rw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Ve(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rw(Object(n),!0).forEach(function(r){VN(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function VN(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function eI(t,e,n){return Math.max(e,Math.min(t,n))}var hs=function(e){var n=["onTouchStart","onTouchMove","onWheel"];n.includes(e._reactName)||e.preventDefault()};U.safePreventDefault=hs;var Sy=function(e){for(var n=[],r=by(e),i=Iy(e),s=r;s<i;s++)e.lazyLoadedList.indexOf(s)<0&&n.push(s);return n};U.getOnDemandLazySlides=Sy;var FN=function(e){for(var n=[],r=by(e),i=Iy(e),s=r;s<i;s++)n.push(s);return n};U.getRequiredLazySlides=FN;var by=function(e){return e.currentSlide-tI(e)};U.lazyStartIndex=by;var Iy=function(e){return e.currentSlide+nI(e)};U.lazyEndIndex=Iy;var tI=function(e){return e.centerMode?Math.floor(e.slidesToShow/2)+(parseInt(e.centerPadding)>0?1:0):0};U.lazySlidesOnLeft=tI;var nI=function(e){return e.centerMode?Math.floor((e.slidesToShow-1)/2)+1+(parseInt(e.centerPadding)>0?1:0):e.slidesToShow};U.lazySlidesOnRight=nI;var Vd=function(e){return e&&e.offsetWidth||0};U.getWidth=Vd;var ky=function(e){return e&&e.offsetHeight||0};U.getHeight=ky;var Ay=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r,i,s,o;return r=e.startX-e.curX,i=e.startY-e.curY,s=Math.atan2(i,r),o=Math.round(s*180/Math.PI),o<0&&(o=360-Math.abs(o)),o<=45&&o>=0||o<=360&&o>=315?"left":o>=135&&o<=225?"right":n===!0?o>=35&&o<=135?"up":"down":"vertical"};U.getSwipeDirection=Ay;var Ry=function(e){var n=!0;return e.infinite||(e.centerMode&&e.currentSlide>=e.slideCount-1||e.slideCount<=e.slidesToShow||e.currentSlide>=e.slideCount-e.slidesToShow)&&(n=!1),n};U.canGoNext=Ry;var qN=function(e,n){var r={};return n.forEach(function(i){return r[i]=e[i]}),r};U.extractObject=qN;var UN=function(e){var n=LN.default.Children.count(e.children),r=e.listRef,i=Math.ceil(Vd(r)),s=e.trackRef&&e.trackRef.node,o=Math.ceil(Vd(s)),a;if(e.vertical)a=i;else{var l=e.centerMode&&parseInt(e.centerPadding)*2;typeof e.centerPadding=="string"&&e.centerPadding.slice(-1)==="%"&&(l*=i/100),a=Math.ceil((i-l)/e.slidesToShow)}var u=r&&ky(r.querySelector('[data-index="0"]')),c=u*e.slidesToShow,d=e.currentSlide===void 0?e.initialSlide:e.currentSlide;e.rtl&&e.currentSlide===void 0&&(d=n-1-e.initialSlide);var f=e.lazyLoadedList||[],m=Sy(Ve(Ve({},e),{},{currentSlide:d,lazyLoadedList:f}));f=f.concat(m);var w={slideCount:n,slideWidth:a,listWidth:i,trackWidth:o,currentSlide:d,slideHeight:u,listHeight:c,lazyLoadedList:f};return e.autoplaying===null&&e.autoplay&&(w.autoplaying="playing"),w};U.initializedState=UN;var $N=function(e){var n=e.waitForAnimate,r=e.animating,i=e.fade,s=e.infinite,o=e.index,a=e.slideCount,l=e.lazyLoad,u=e.currentSlide,c=e.centerMode,d=e.slidesToScroll,f=e.slidesToShow,m=e.useCSS,w=e.lazyLoadedList;if(n&&r)return{};var _=o,E,v,h,y={},g={},T=s?o:eI(o,0,a-1);if(i){if(!s&&(o<0||o>=a))return{};o<0?_=o+a:o>=a&&(_=o-a),l&&w.indexOf(_)<0&&(w=w.concat(_)),y={animating:!0,currentSlide:_,lazyLoadedList:w,targetSlide:_},g={animating:!1,targetSlide:_}}else E=_,_<0?(E=_+a,s?a%d!==0&&(E=a-a%d):E=0):!Ry(e)&&_>u?_=E=u:c&&_>=a?(_=s?a:a-1,E=s?0:a-1):_>=a&&(E=_-a,s?a%d!==0&&(E=0):E=a-f),!s&&_+f>=a&&(E=a-f),v=zl(Ve(Ve({},e),{},{slideIndex:_})),h=zl(Ve(Ve({},e),{},{slideIndex:E})),s||(v===h&&(_=E),v=h),l&&(w=w.concat(Sy(Ve(Ve({},e),{},{currentSlide:_})))),m?(y={animating:!0,currentSlide:E,trackStyle:Cy(Ve(Ve({},e),{},{left:v})),lazyLoadedList:w,targetSlide:T},g={animating:!1,currentSlide:E,trackStyle:$l(Ve(Ve({},e),{},{left:h})),swipeLeft:null,targetSlide:T}):y={currentSlide:E,trackStyle:$l(Ve(Ve({},e),{},{left:h})),lazyLoadedList:w,targetSlide:T};return{state:y,nextState:g}};U.slideHandler=$N;var zN=function(e,n){var r,i,s,o,a,l=e.slidesToScroll,u=e.slidesToShow,c=e.slideCount,d=e.currentSlide,f=e.targetSlide,m=e.lazyLoad,w=e.infinite;if(o=c%l!==0,r=o?0:(c-d)%l,n.message==="previous")s=r===0?l:u-r,a=d-s,m&&!w&&(i=d-s,a=i===-1?c-1:i),w||(a=f-l);else if(n.message==="next")s=r===0?l:r,a=d+s,m&&!w&&(a=(d+l)%c+r),w||(a=f+l);else if(n.message==="dots")a=n.index*n.slidesToScroll;else if(n.message==="children"){if(a=n.index,w){var _=oI(Ve(Ve({},e),{},{targetSlide:a}));a>n.currentSlide&&_==="left"?a=a-c:a<n.currentSlide&&_==="right"&&(a=a+c)}}else n.message==="index"&&(a=Number(n.index));return a};U.changeSlide=zN;var jN=function(e,n,r){return e.target.tagName.match("TEXTAREA|INPUT|SELECT")||!n?"":e.keyCode===37?r?"next":"previous":e.keyCode===39?r?"previous":"next":""};U.keyHandler=jN;var BN=function(e,n,r){return e.target.tagName==="IMG"&&hs(e),!n||!r&&e.type.indexOf("mouse")!==-1?"":{dragging:!0,touchObject:{startX:e.touches?e.touches[0].pageX:e.clientX,startY:e.touches?e.touches[0].pageY:e.clientY,curX:e.touches?e.touches[0].pageX:e.clientX,curY:e.touches?e.touches[0].pageY:e.clientY}}};U.swipeStart=BN;var HN=function(e,n){var r=n.scrolling,i=n.animating,s=n.vertical,o=n.swipeToSlide,a=n.verticalSwiping,l=n.rtl,u=n.currentSlide,c=n.edgeFriction,d=n.edgeDragged,f=n.onEdge,m=n.swiped,w=n.swiping,_=n.slideCount,E=n.slidesToScroll,v=n.infinite,h=n.touchObject,y=n.swipeEvent,g=n.listHeight,T=n.listWidth;if(!r){if(i)return hs(e);s&&o&&a&&hs(e);var S,A={},b=zl(n);h.curX=e.touches?e.touches[0].pageX:e.clientX,h.curY=e.touches?e.touches[0].pageY:e.clientY,h.swipeLength=Math.round(Math.sqrt(Math.pow(h.curX-h.startX,2)));var C=Math.round(Math.sqrt(Math.pow(h.curY-h.startY,2)));if(!a&&!w&&C>10)return{scrolling:!0};a&&(h.swipeLength=C);var P=(l?-1:1)*(h.curX>h.startX?1:-1);a&&(P=h.curY>h.startY?1:-1);var B=Math.ceil(_/E),q=Ay(n.touchObject,a),H=h.swipeLength;return v||(u===0&&(q==="right"||q==="down")||u+1>=B&&(q==="left"||q==="up")||!Ry(n)&&(q==="left"||q==="up"))&&(H=h.swipeLength*c,d===!1&&f&&(f(q),A.edgeDragged=!0)),!m&&y&&(y(q),A.swiped=!0),s?S=b+H*(g/T)*P:l?S=b-H*P:S=b+H*P,a&&(S=b+H*P),A=Ve(Ve({},A),{},{touchObject:h,swipeLeft:S,trackStyle:$l(Ve(Ve({},n),{},{left:S}))}),Math.abs(h.curX-h.startX)<Math.abs(h.curY-h.startY)*.8||h.swipeLength>10&&(A.swiping=!0,hs(e)),A}};U.swipeMove=HN;var WN=function(e,n){var r=n.dragging,i=n.swipe,s=n.touchObject,o=n.listWidth,a=n.touchThreshold,l=n.verticalSwiping,u=n.listHeight,c=n.swipeToSlide,d=n.scrolling,f=n.onSwipe,m=n.targetSlide,w=n.currentSlide,_=n.infinite;if(!r)return i&&hs(e),{};var E=l?u/a:o/a,v=Ay(s,l),h={dragging:!1,edgeDragged:!1,scrolling:!1,swiping:!1,swiped:!1,swipeLeft:null,touchObject:{}};if(d||!s.swipeLength)return h;if(s.swipeLength>E){hs(e),f&&f(v);var y,g,T=_?w:m;switch(v){case"left":case"up":g=T+gg(n),y=c?mg(n,g):g,h.currentDirection=0;break;case"right":case"down":g=T-gg(n),y=c?mg(n,g):g,h.currentDirection=1;break;default:y=T}h.triggerSlideHandler=y}else{var S=zl(n);h.trackStyle=Cy(Ve(Ve({},n),{},{left:S}))}return h};U.swipeEnd=WN;var rI=function(e){for(var n=e.infinite?e.slideCount*2:e.slideCount,r=e.infinite?e.slidesToShow*-1:0,i=e.infinite?e.slidesToShow*-1:0,s=[];r<n;)s.push(r),r=i+e.slidesToScroll,i+=Math.min(e.slidesToScroll,e.slidesToShow);return s};U.getNavigableIndexes=rI;var mg=function(e,n){var r=rI(e),i=0;if(n>r[r.length-1])n=r[r.length-1];else for(var s in r){if(n<r[s]){n=i;break}i=r[s]}return n};U.checkNavigable=mg;var gg=function(e){var n=e.centerMode?e.slideWidth*Math.floor(e.slidesToShow/2):0;if(e.swipeToSlide){var r,i=e.listRef,s=i.querySelectorAll&&i.querySelectorAll(".slick-slide")||[];if(Array.from(s).every(function(l){if(e.vertical){if(l.offsetTop+ky(l)/2>e.swipeLeft*-1)return r=l,!1}else if(l.offsetLeft-n+Vd(l)/2>e.swipeLeft*-1)return r=l,!1;return!0}),!r)return 0;var o=e.rtl===!0?e.slideCount-e.currentSlide:e.currentSlide,a=Math.abs(r.dataset.index-o)||1;return a}else return e.slidesToScroll};U.getSlideCount=gg;var Wf=function(e,n){return n.reduce(function(r,i){return r&&e.hasOwnProperty(i)},!0)?null:console.error("Keys Missing:",e)};U.checkSpecKeys=Wf;var $l=function(e){Wf(e,["left","variableWidth","slideCount","slidesToShow","slideWidth"]);var n,r,i=e.slideCount+2*e.slidesToShow;e.vertical?r=i*e.slideHeight:n=sI(e)*e.slideWidth;var s={opacity:1,transition:"",WebkitTransition:""};if(e.useTransform){var o=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",a=e.vertical?"translate3d(0px, "+e.left+"px, 0px)":"translate3d("+e.left+"px, 0px, 0px)",l=e.vertical?"translateY("+e.left+"px)":"translateX("+e.left+"px)";s=Ve(Ve({},s),{},{WebkitTransform:o,transform:a,msTransform:l})}else e.vertical?s.top=e.left:s.left=e.left;return e.fade&&(s={opacity:1}),n&&(s.width=n),r&&(s.height=r),window&&!window.addEventListener&&window.attachEvent&&(e.vertical?s.marginTop=e.left+"px":s.marginLeft=e.left+"px"),s};U.getTrackCSS=$l;var Cy=function(e){Wf(e,["left","variableWidth","slideCount","slidesToShow","slideWidth","speed","cssEase"]);var n=$l(e);return e.useTransform?(n.WebkitTransition="-webkit-transform "+e.speed+"ms "+e.cssEase,n.transition="transform "+e.speed+"ms "+e.cssEase):e.vertical?n.transition="top "+e.speed+"ms "+e.cssEase:n.transition="left "+e.speed+"ms "+e.cssEase,n};U.getTrackAnimateCSS=Cy;var zl=function(e){if(e.unslick)return 0;Wf(e,["slideIndex","trackRef","infinite","centerMode","slideCount","slidesToShow","slidesToScroll","slideWidth","listWidth","variableWidth","slideHeight"]);var n=e.slideIndex,r=e.trackRef,i=e.infinite,s=e.centerMode,o=e.slideCount,a=e.slidesToShow,l=e.slidesToScroll,u=e.slideWidth,c=e.listWidth,d=e.variableWidth,f=e.slideHeight,m=e.fade,w=e.vertical,_=0,E,v,h=0;if(m||e.slideCount===1)return 0;var y=0;if(i?(y=-cl(e),o%l!==0&&n+l>o&&(y=-(n>o?a-(n-o):o%l)),s&&(y+=parseInt(a/2))):(o%l!==0&&n+l>o&&(y=a-o%l),s&&(y=parseInt(a/2))),_=y*u,h=y*f,w?E=n*f*-1+h:E=n*u*-1+_,d===!0){var g,T=r&&r.node;if(g=n+cl(e),v=T&&T.childNodes[g],E=v?v.offsetLeft*-1:0,s===!0){g=i?n+cl(e):n,v=T&&T.children[g],E=0;for(var S=0;S<g;S++)E-=T&&T.children[S]&&T.children[S].offsetWidth;E-=parseInt(e.centerPadding),E+=v&&(c-v.offsetWidth)/2}}return E};U.getTrackLeft=zl;var cl=function(e){return e.unslick||!e.infinite?0:e.variableWidth?e.slideCount:e.slidesToShow+(e.centerMode?1:0)};U.getPreClones=cl;var iI=function(e){return e.unslick||!e.infinite?0:e.slideCount};U.getPostClones=iI;var sI=function(e){return e.slideCount===1?1:cl(e)+e.slideCount+iI(e)};U.getTotalSlides=sI;var oI=function(e){return e.targetSlide>e.currentSlide?e.targetSlide>e.currentSlide+aI(e)?"left":"right":e.targetSlide<e.currentSlide-lI(e)?"right":"left"};U.siblingDirection=oI;var aI=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),i&&n%2===0&&(o+=1),o}return i?0:n-1};U.slidesOnRight=aI;var lI=function(e){var n=e.slidesToShow,r=e.centerMode,i=e.rtl,s=e.centerPadding;if(r){var o=(n-1)/2+1;return parseInt(s)>0&&(o+=1),!i&&n%2===0&&(o+=1),o}return i?n-1:0};U.slidesOnLeft=lI;var KN=function(){return!!(typeof window<"u"&&window.document&&window.document.createElement)};U.canUseDOM=KN;var Kf={};function vg(t){return vg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},vg(t)}Object.defineProperty(Kf,"__esModule",{value:!0});Kf.Track=void 0;var ui=uI(M.exports),kp=uI(wu.exports),Ap=U;function uI(t){return t&&t.__esModule?t:{default:t}}function yg(){return yg=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},yg.apply(this,arguments)}function GN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function iw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function QN(t,e,n){return e&&iw(t.prototype,e),n&&iw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function YN(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&_g(t,e)}function _g(t,e){return _g=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},_g(t,e)}function XN(t){var e=ZN();return function(){var r=Fd(t),i;if(e){var s=Fd(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return JN(this,i)}}function JN(t,e){if(e&&(vg(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return wg(t)}function wg(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ZN(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Fd(t){return Fd=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Fd(t)}function sw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function nn(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?sw(Object(n),!0).forEach(function(r){Eg(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):sw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Eg(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var Rp=function(e){var n,r,i,s,o;e.rtl?o=e.slideCount-1-e.index:o=e.index,i=o<0||o>=e.slideCount,e.centerMode?(s=Math.floor(e.slidesToShow/2),r=(o-e.currentSlide)%e.slideCount===0,o>e.currentSlide-s-1&&o<=e.currentSlide+s&&(n=!0)):n=e.currentSlide<=o&&o<e.currentSlide+e.slidesToShow;var a;e.targetSlide<0?a=e.targetSlide+e.slideCount:e.targetSlide>=e.slideCount?a=e.targetSlide-e.slideCount:a=e.targetSlide;var l=o===a;return{"slick-slide":!0,"slick-active":n,"slick-center":r,"slick-cloned":i,"slick-current":l}},e4=function(e){var n={};return(e.variableWidth===void 0||e.variableWidth===!1)&&(n.width=e.slideWidth),e.fade&&(n.position="relative",e.vertical?n.top=-e.index*parseInt(e.slideHeight):n.left=-e.index*parseInt(e.slideWidth),n.opacity=e.currentSlide===e.index?1:0,e.useCSS&&(n.transition="opacity "+e.speed+"ms "+e.cssEase+", visibility "+e.speed+"ms "+e.cssEase)),n},Cp=function(e,n){return e.key||n},t4=function(e){var n,r=[],i=[],s=[],o=ui.default.Children.count(e.children),a=(0,Ap.lazyStartIndex)(e),l=(0,Ap.lazyEndIndex)(e);return ui.default.Children.forEach(e.children,function(u,c){var d,f={message:"children",index:c,slidesToScroll:e.slidesToScroll,currentSlide:e.currentSlide};!e.lazyLoad||e.lazyLoad&&e.lazyLoadedList.indexOf(c)>=0?d=u:d=ui.default.createElement("div",null);var m=e4(nn(nn({},e),{},{index:c})),w=d.props.className||"",_=Rp(nn(nn({},e),{},{index:c}));if(r.push(ui.default.cloneElement(d,{key:"original"+Cp(d,c),"data-index":c,className:(0,kp.default)(_,w),tabIndex:"-1","aria-hidden":!_["slick-active"],style:nn(nn({outline:"none"},d.props.style||{}),m),onClick:function(h){d.props&&d.props.onClick&&d.props.onClick(h),e.focusOnSelect&&e.focusOnSelect(f)}})),e.infinite&&e.fade===!1){var E=o-c;E<=(0,Ap.getPreClones)(e)&&o!==e.slidesToShow&&(n=-E,n>=a&&(d=u),_=Rp(nn(nn({},e),{},{index:n})),i.push(ui.default.cloneElement(d,{key:"precloned"+Cp(d,n),"data-index":n,tabIndex:"-1",className:(0,kp.default)(_,w),"aria-hidden":!_["slick-active"],style:nn(nn({},d.props.style||{}),m),onClick:function(h){d.props&&d.props.onClick&&d.props.onClick(h),e.focusOnSelect&&e.focusOnSelect(f)}}))),o!==e.slidesToShow&&(n=o+c,n<l&&(d=u),_=Rp(nn(nn({},e),{},{index:n})),s.push(ui.default.cloneElement(d,{key:"postcloned"+Cp(d,n),"data-index":n,tabIndex:"-1",className:(0,kp.default)(_,w),"aria-hidden":!_["slick-active"],style:nn(nn({},d.props.style||{}),m),onClick:function(h){d.props&&d.props.onClick&&d.props.onClick(h),e.focusOnSelect&&e.focusOnSelect(f)}})))}}),e.rtl?i.concat(r,s).reverse():i.concat(r,s)},n4=function(t){YN(n,t);var e=XN(n);function n(){var r;GN(this,n);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=e.call.apply(e,[this].concat(s)),Eg(wg(r),"node",null),Eg(wg(r),"handleRef",function(a){r.node=a}),r}return QN(n,[{key:"render",value:function(){var i=t4(this.props),s=this.props,o=s.onMouseEnter,a=s.onMouseOver,l=s.onMouseLeave,u={onMouseEnter:o,onMouseOver:a,onMouseLeave:l};return ui.default.createElement("div",yg({ref:this.handleRef,className:"slick-track",style:this.props.trackStyle},u),i)}}]),n}(ui.default.PureComponent);Kf.Track=n4;var Gf={};function Tg(t){return Tg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Tg(t)}Object.defineProperty(Gf,"__esModule",{value:!0});Gf.Dots=void 0;var mc=cI(M.exports),r4=cI(wu.exports),ow=U;function cI(t){return t&&t.__esModule?t:{default:t}}function aw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function i4(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?aw(Object(n),!0).forEach(function(r){s4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):aw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function s4(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function lw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function a4(t,e,n){return e&&lw(t.prototype,e),n&&lw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function l4(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Sg(t,e)}function Sg(t,e){return Sg=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Sg(t,e)}function u4(t){var e=f4();return function(){var r=qd(t),i;if(e){var s=qd(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return c4(this,i)}}function c4(t,e){if(e&&(Tg(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return d4(t)}function d4(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function f4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function qd(t){return qd=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},qd(t)}var h4=function(e){var n;return e.infinite?n=Math.ceil(e.slideCount/e.slidesToScroll):n=Math.ceil((e.slideCount-e.slidesToShow)/e.slidesToScroll)+1,n},p4=function(t){l4(n,t);var e=u4(n);function n(){return o4(this,n),e.apply(this,arguments)}return a4(n,[{key:"clickHandler",value:function(i,s){s.preventDefault(),this.props.clickHandler(i)}},{key:"render",value:function(){for(var i=this.props,s=i.onMouseEnter,o=i.onMouseOver,a=i.onMouseLeave,l=i.infinite,u=i.slidesToScroll,c=i.slidesToShow,d=i.slideCount,f=i.currentSlide,m=h4({slideCount:d,slidesToScroll:u,slidesToShow:c,infinite:l}),w={onMouseEnter:s,onMouseOver:o,onMouseLeave:a},_=[],E=0;E<m;E++){var v=(E+1)*u-1,h=l?v:(0,ow.clamp)(v,0,d-1),y=h-(u-1),g=l?y:(0,ow.clamp)(y,0,d-1),T=(0,r4.default)({"slick-active":l?f>=g&&f<=h:f===g}),S={message:"dots",index:E,slidesToScroll:u,currentSlide:f},A=this.clickHandler.bind(this,S);_=_.concat(mc.default.createElement("li",{key:E,className:T},mc.default.cloneElement(this.props.customPaging(E),{onClick:A})))}return mc.default.cloneElement(this.props.appendDots(_),i4({className:this.props.dotsClass},w))}}]),n}(mc.default.PureComponent);Gf.Dots=p4;var jo={};function bg(t){return bg=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},bg(t)}Object.defineProperty(jo,"__esModule",{value:!0});jo.PrevArrow=jo.NextArrow=void 0;var Io=fI(M.exports),dI=fI(wu.exports),m4=U;function fI(t){return t&&t.__esModule?t:{default:t}}function Ud(){return Ud=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ud.apply(this,arguments)}function uw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function $d(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?uw(Object(n),!0).forEach(function(r){g4(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):uw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function g4(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function hI(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function cw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function pI(t,e,n){return e&&cw(t.prototype,e),n&&cw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function mI(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ig(t,e)}function Ig(t,e){return Ig=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ig(t,e)}function gI(t){var e=_4();return function(){var r=zd(t),i;if(e){var s=zd(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return v4(this,i)}}function v4(t,e){if(e&&(bg(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return y4(t)}function y4(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function _4(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function zd(t){return zd=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},zd(t)}var w4=function(t){mI(n,t);var e=gI(n);function n(){return hI(this,n),e.apply(this,arguments)}return pI(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-prev":!0},s=this.clickHandler.bind(this,{message:"previous"});!this.props.infinite&&(this.props.currentSlide===0||this.props.slideCount<=this.props.slidesToShow)&&(i["slick-disabled"]=!0,s=null);var o={key:"0","data-role":"none",className:(0,dI.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.prevArrow?l=Io.default.cloneElement(this.props.prevArrow,$d($d({},o),a)):l=Io.default.createElement("button",Ud({key:"0",type:"button"},o)," ","Previous"),l}}]),n}(Io.default.PureComponent);jo.PrevArrow=w4;var E4=function(t){mI(n,t);var e=gI(n);function n(){return hI(this,n),e.apply(this,arguments)}return pI(n,[{key:"clickHandler",value:function(i,s){s&&s.preventDefault(),this.props.clickHandler(i,s)}},{key:"render",value:function(){var i={"slick-arrow":!0,"slick-next":!0},s=this.clickHandler.bind(this,{message:"next"});(0,m4.canGoNext)(this.props)||(i["slick-disabled"]=!0,s=null);var o={key:"1","data-role":"none",className:(0,dI.default)(i),style:{display:"block"},onClick:s},a={currentSlide:this.props.currentSlide,slideCount:this.props.slideCount},l;return this.props.nextArrow?l=Io.default.cloneElement(this.props.nextArrow,$d($d({},o),a)):l=Io.default.createElement("button",Ud({key:"1",type:"button"},o)," ","Next"),l}}]),n}(Io.default.PureComponent);jo.NextArrow=E4;var vI=function(){if(typeof Map<"u")return Map;function t(e,n){var r=-1;return e.some(function(i,s){return i[0]===n?(r=s,!0):!1}),r}return function(){function e(){this.__entries__=[]}return Object.defineProperty(e.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),e.prototype.get=function(n){var r=t(this.__entries__,n),i=this.__entries__[r];return i&&i[1]},e.prototype.set=function(n,r){var i=t(this.__entries__,n);~i?this.__entries__[i][1]=r:this.__entries__.push([n,r])},e.prototype.delete=function(n){var r=this.__entries__,i=t(r,n);~i&&r.splice(i,1)},e.prototype.has=function(n){return!!~t(this.__entries__,n)},e.prototype.clear=function(){this.__entries__.splice(0)},e.prototype.forEach=function(n,r){r===void 0&&(r=null);for(var i=0,s=this.__entries__;i<s.length;i++){var o=s[i];n.call(r,o[1],o[0])}},e}()}(),kg=typeof window<"u"&&typeof document<"u"&&window.document===document,jd=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),T4=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(jd):function(t){return setTimeout(function(){return t(Date.now())},1e3/60)}}(),S4=2;function b4(t,e){var n=!1,r=!1,i=0;function s(){n&&(n=!1,t()),r&&a()}function o(){T4(s)}function a(){var l=Date.now();if(n){if(l-i<S4)return;r=!0}else n=!0,r=!1,setTimeout(o,e);i=l}return a}var I4=20,k4=["top","right","bottom","left","width","height","size","weight"],A4=typeof MutationObserver<"u",R4=function(){function t(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=b4(this.refresh.bind(this),I4)}return t.prototype.addObserver=function(e){~this.observers_.indexOf(e)||this.observers_.push(e),this.connected_||this.connect_()},t.prototype.removeObserver=function(e){var n=this.observers_,r=n.indexOf(e);~r&&n.splice(r,1),!n.length&&this.connected_&&this.disconnect_()},t.prototype.refresh=function(){var e=this.updateObservers_();e&&this.refresh()},t.prototype.updateObservers_=function(){var e=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return e.forEach(function(n){return n.broadcastActive()}),e.length>0},t.prototype.connect_=function(){!kg||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),A4?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},t.prototype.disconnect_=function(){!kg||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},t.prototype.onTransitionEnd_=function(e){var n=e.propertyName,r=n===void 0?"":n,i=k4.some(function(s){return!!~r.indexOf(s)});i&&this.refresh()},t.getInstance=function(){return this.instance_||(this.instance_=new t),this.instance_},t.instance_=null,t}(),yI=function(t,e){for(var n=0,r=Object.keys(e);n<r.length;n++){var i=r[n];Object.defineProperty(t,i,{value:e[i],enumerable:!1,writable:!1,configurable:!0})}return t},Bo=function(t){var e=t&&t.ownerDocument&&t.ownerDocument.defaultView;return e||jd},_I=Qf(0,0,0,0);function Bd(t){return parseFloat(t)||0}function dw(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return e.reduce(function(r,i){var s=t["border-"+i+"-width"];return r+Bd(s)},0)}function C4(t){for(var e=["top","right","bottom","left"],n={},r=0,i=e;r<i.length;r++){var s=i[r],o=t["padding-"+s];n[s]=Bd(o)}return n}function P4(t){var e=t.getBBox();return Qf(0,0,e.width,e.height)}function x4(t){var e=t.clientWidth,n=t.clientHeight;if(!e&&!n)return _I;var r=Bo(t).getComputedStyle(t),i=C4(r),s=i.left+i.right,o=i.top+i.bottom,a=Bd(r.width),l=Bd(r.height);if(r.boxSizing==="border-box"&&(Math.round(a+s)!==e&&(a-=dw(r,"left","right")+s),Math.round(l+o)!==n&&(l-=dw(r,"top","bottom")+o)),!O4(t)){var u=Math.round(a+s)-e,c=Math.round(l+o)-n;Math.abs(u)!==1&&(a-=u),Math.abs(c)!==1&&(l-=c)}return Qf(i.left,i.top,a,l)}var N4=function(){return typeof SVGGraphicsElement<"u"?function(t){return t instanceof Bo(t).SVGGraphicsElement}:function(t){return t instanceof Bo(t).SVGElement&&typeof t.getBBox=="function"}}();function O4(t){return t===Bo(t).document.documentElement}function D4(t){return kg?N4(t)?P4(t):x4(t):_I}function L4(t){var e=t.x,n=t.y,r=t.width,i=t.height,s=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,o=Object.create(s.prototype);return yI(o,{x:e,y:n,width:r,height:i,top:n,right:e+r,bottom:i+n,left:e}),o}function Qf(t,e,n,r){return{x:t,y:e,width:n,height:r}}var M4=function(){function t(e){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=Qf(0,0,0,0),this.target=e}return t.prototype.isActive=function(){var e=D4(this.target);return this.contentRect_=e,e.width!==this.broadcastWidth||e.height!==this.broadcastHeight},t.prototype.broadcastRect=function(){var e=this.contentRect_;return this.broadcastWidth=e.width,this.broadcastHeight=e.height,e},t}(),V4=function(){function t(e,n){var r=L4(n);yI(this,{target:e,contentRect:r})}return t}(),F4=function(){function t(e,n,r){if(this.activeObservations_=[],this.observations_=new vI,typeof e!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=e,this.controller_=n,this.callbackCtx_=r}return t.prototype.observe=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Bo(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(e)||(n.set(e,new M4(e)),this.controller_.addObserver(this),this.controller_.refresh())}},t.prototype.unobserve=function(e){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(e instanceof Bo(e).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;!n.has(e)||(n.delete(e),n.size||this.controller_.removeObserver(this))}},t.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},t.prototype.gatherActive=function(){var e=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&e.activeObservations_.push(n)})},t.prototype.broadcastActive=function(){if(!!this.hasActive()){var e=this.callbackCtx_,n=this.activeObservations_.map(function(r){return new V4(r.target,r.broadcastRect())});this.callback_.call(e,n,e),this.clearActive()}},t.prototype.clearActive=function(){this.activeObservations_.splice(0)},t.prototype.hasActive=function(){return this.activeObservations_.length>0},t}(),wI=typeof WeakMap<"u"?new WeakMap:new vI,EI=function(){function t(e){if(!(this instanceof t))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=R4.getInstance(),r=new F4(e,n,this);wI.set(this,r)}return t}();["observe","unobserve","disconnect"].forEach(function(t){EI.prototype[t]=function(){var e;return(e=wI.get(this))[t].apply(e,arguments)}});var q4=function(){return typeof jd.ResizeObserver<"u"?jd.ResizeObserver:EI}();const U4=Object.freeze(Object.defineProperty({__proto__:null,default:q4},Symbol.toStringTag,{value:"Module"})),$4=IC(U4);Object.defineProperty(Hf,"__esModule",{value:!0});Hf.InnerSlider=void 0;var Gt=Eu(M.exports),z4=Eu(Zb),j4=Eu(DN),B4=Eu(wu.exports),ze=U,H4=Kf,W4=Gf,fw=jo,K4=Eu($4);function Eu(t){return t&&t.__esModule?t:{default:t}}function Hd(t){return Hd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Hd(t)}function Wd(){return Wd=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Wd.apply(this,arguments)}function G4(t,e){if(t==null)return{};var n=Q4(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Q4(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function hw(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function ee(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?hw(Object(n),!0).forEach(function(r){fe(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):hw(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Y4(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function pw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function X4(t,e,n){return e&&pw(t.prototype,e),n&&pw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function J4(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&Ag(t,e)}function Ag(t,e){return Ag=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Ag(t,e)}function Z4(t){var e=tO();return function(){var r=Kd(t),i;if(e){var s=Kd(this).constructor;i=Reflect.construct(r,arguments,s)}else i=r.apply(this,arguments);return eO(this,i)}}function eO(t,e){if(e&&(Hd(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return de(t)}function de(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function tO(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Kd(t){return Kd=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},Kd(t)}function fe(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var nO=function(t){J4(n,t);var e=Z4(n);function n(r){var i;Y4(this,n),i=e.call(this,r),fe(de(i),"listRefHandler",function(o){return i.list=o}),fe(de(i),"trackRefHandler",function(o){return i.track=o}),fe(de(i),"adaptHeight",function(){if(i.props.adaptiveHeight&&i.list){var o=i.list.querySelector('[data-index="'.concat(i.state.currentSlide,'"]'));i.list.style.height=(0,ze.getHeight)(o)+"px"}}),fe(de(i),"componentDidMount",function(){if(i.props.onInit&&i.props.onInit(),i.props.lazyLoad){var o=(0,ze.getOnDemandLazySlides)(ee(ee({},i.props),i.state));o.length>0&&(i.setState(function(l){return{lazyLoadedList:l.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o))}var a=ee({listRef:i.list,trackRef:i.track},i.props);i.updateState(a,!0,function(){i.adaptHeight(),i.props.autoplay&&i.autoPlay("update")}),i.props.lazyLoad==="progressive"&&(i.lazyLoadTimer=setInterval(i.progressiveLazyLoad,1e3)),i.ro=new K4.default(function(){i.state.animating?(i.onWindowResized(!1),i.callbackTimers.push(setTimeout(function(){return i.onWindowResized()},i.props.speed))):i.onWindowResized()}),i.ro.observe(i.list),document.querySelectorAll&&Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"),function(l){l.onfocus=i.props.pauseOnFocus?i.onSlideFocus:null,l.onblur=i.props.pauseOnFocus?i.onSlideBlur:null}),window.addEventListener?window.addEventListener("resize",i.onWindowResized):window.attachEvent("onresize",i.onWindowResized)}),fe(de(i),"componentWillUnmount",function(){i.animationEndCallback&&clearTimeout(i.animationEndCallback),i.lazyLoadTimer&&clearInterval(i.lazyLoadTimer),i.callbackTimers.length&&(i.callbackTimers.forEach(function(o){return clearTimeout(o)}),i.callbackTimers=[]),window.addEventListener?window.removeEventListener("resize",i.onWindowResized):window.detachEvent("onresize",i.onWindowResized),i.autoplayTimer&&clearInterval(i.autoplayTimer),i.ro.disconnect()}),fe(de(i),"componentDidUpdate",function(o){if(i.checkImagesLoad(),i.props.onReInit&&i.props.onReInit(),i.props.lazyLoad){var a=(0,ze.getOnDemandLazySlides)(ee(ee({},i.props),i.state));a.length>0&&(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(a)}}),i.props.onLazyLoad&&i.props.onLazyLoad(a))}i.adaptHeight();var l=ee(ee({listRef:i.list,trackRef:i.track},i.props),i.state),u=i.didPropsChange(o);u&&i.updateState(l,u,function(){i.state.currentSlide>=Gt.default.Children.count(i.props.children)&&i.changeSlide({message:"index",index:Gt.default.Children.count(i.props.children)-i.props.slidesToShow,currentSlide:i.state.currentSlide}),i.props.autoplay?i.autoPlay("update"):i.pause("paused")})}),fe(de(i),"onWindowResized",function(o){i.debouncedResize&&i.debouncedResize.cancel(),i.debouncedResize=(0,j4.default)(function(){return i.resizeWindow(o)},50),i.debouncedResize()}),fe(de(i),"resizeWindow",function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0,a=Boolean(i.track&&i.track.node);if(!!a){var l=ee(ee({listRef:i.list,trackRef:i.track},i.props),i.state);i.updateState(l,o,function(){i.props.autoplay?i.autoPlay("update"):i.pause("paused")}),i.setState({animating:!1}),clearTimeout(i.animationEndCallback),delete i.animationEndCallback}}),fe(de(i),"updateState",function(o,a,l){var u=(0,ze.initializedState)(o);o=ee(ee(ee({},o),u),{},{slideIndex:u.currentSlide});var c=(0,ze.getTrackLeft)(o);o=ee(ee({},o),{},{left:c});var d=(0,ze.getTrackCSS)(o);(a||Gt.default.Children.count(i.props.children)!==Gt.default.Children.count(o.children))&&(u.trackStyle=d),i.setState(u,l)}),fe(de(i),"ssrInit",function(){if(i.props.variableWidth){var o=0,a=0,l=[],u=(0,ze.getPreClones)(ee(ee(ee({},i.props),i.state),{},{slideCount:i.props.children.length})),c=(0,ze.getPostClones)(ee(ee(ee({},i.props),i.state),{},{slideCount:i.props.children.length}));i.props.children.forEach(function(A){l.push(A.props.style.width),o+=A.props.style.width});for(var d=0;d<u;d++)a+=l[l.length-1-d],o+=l[l.length-1-d];for(var f=0;f<c;f++)o+=l[f];for(var m=0;m<i.state.currentSlide;m++)a+=l[m];var w={width:o+"px",left:-a+"px"};if(i.props.centerMode){var _="".concat(l[i.state.currentSlide],"px");w.left="calc(".concat(w.left," + (100% - ").concat(_,") / 2 ) ")}return{trackStyle:w}}var E=Gt.default.Children.count(i.props.children),v=ee(ee(ee({},i.props),i.state),{},{slideCount:E}),h=(0,ze.getPreClones)(v)+(0,ze.getPostClones)(v)+E,y=100/i.props.slidesToShow*h,g=100/h,T=-g*((0,ze.getPreClones)(v)+i.state.currentSlide)*y/100;i.props.centerMode&&(T+=(100-g*y/100)/2);var S={width:y+"%",left:T+"%"};return{slideWidth:g+"%",trackStyle:S}}),fe(de(i),"checkImagesLoad",function(){var o=i.list&&i.list.querySelectorAll&&i.list.querySelectorAll(".slick-slide img")||[],a=o.length,l=0;Array.prototype.forEach.call(o,function(u){var c=function(){return++l&&l>=a&&i.onWindowResized()};if(!u.onclick)u.onclick=function(){return u.parentNode.focus()};else{var d=u.onclick;u.onclick=function(){d(),u.parentNode.focus()}}u.onload||(i.props.lazyLoad?u.onload=function(){i.adaptHeight(),i.callbackTimers.push(setTimeout(i.onWindowResized,i.props.speed))}:(u.onload=c,u.onerror=function(){c(),i.props.onLazyLoadError&&i.props.onLazyLoadError()}))})}),fe(de(i),"progressiveLazyLoad",function(){for(var o=[],a=ee(ee({},i.props),i.state),l=i.state.currentSlide;l<i.state.slideCount+(0,ze.getPostClones)(a);l++)if(i.state.lazyLoadedList.indexOf(l)<0){o.push(l);break}for(var u=i.state.currentSlide-1;u>=-(0,ze.getPreClones)(a);u--)if(i.state.lazyLoadedList.indexOf(u)<0){o.push(u);break}o.length>0?(i.setState(function(c){return{lazyLoadedList:c.lazyLoadedList.concat(o)}}),i.props.onLazyLoad&&i.props.onLazyLoad(o)):i.lazyLoadTimer&&(clearInterval(i.lazyLoadTimer),delete i.lazyLoadTimer)}),fe(de(i),"slideHandler",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=i.props,u=l.asNavFor,c=l.beforeChange,d=l.onLazyLoad,f=l.speed,m=l.afterChange,w=i.state.currentSlide,_=(0,ze.slideHandler)(ee(ee(ee({index:o},i.props),i.state),{},{trackRef:i.track,useCSS:i.props.useCSS&&!a})),E=_.state,v=_.nextState;if(!!E){c&&c(w,E.currentSlide);var h=E.lazyLoadedList.filter(function(y){return i.state.lazyLoadedList.indexOf(y)<0});d&&h.length>0&&d(h),!i.props.waitForAnimate&&i.animationEndCallback&&(clearTimeout(i.animationEndCallback),m&&m(w),delete i.animationEndCallback),i.setState(E,function(){u&&i.asNavForIndex!==o&&(i.asNavForIndex=o,u.innerSlider.slideHandler(o)),v&&(i.animationEndCallback=setTimeout(function(){var y=v.animating,g=G4(v,["animating"]);i.setState(g,function(){i.callbackTimers.push(setTimeout(function(){return i.setState({animating:y})},10)),m&&m(E.currentSlide),delete i.animationEndCallback})},f))})}}),fe(de(i),"changeSlide",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,l=ee(ee({},i.props),i.state),u=(0,ze.changeSlide)(l,o);if(!(u!==0&&!u)&&(a===!0?i.slideHandler(u,a):i.slideHandler(u),i.props.autoplay&&i.autoPlay("update"),i.props.focusOnSelect)){var c=i.list.querySelectorAll(".slick-current");c[0]&&c[0].focus()}}),fe(de(i),"clickHandler",function(o){i.clickable===!1&&(o.stopPropagation(),o.preventDefault()),i.clickable=!0}),fe(de(i),"keyHandler",function(o){var a=(0,ze.keyHandler)(o,i.props.accessibility,i.props.rtl);a!==""&&i.changeSlide({message:a})}),fe(de(i),"selectHandler",function(o){i.changeSlide(o)}),fe(de(i),"disableBodyScroll",function(){var o=function(l){l=l||window.event,l.preventDefault&&l.preventDefault(),l.returnValue=!1};window.ontouchmove=o}),fe(de(i),"enableBodyScroll",function(){window.ontouchmove=null}),fe(de(i),"swipeStart",function(o){i.props.verticalSwiping&&i.disableBodyScroll();var a=(0,ze.swipeStart)(o,i.props.swipe,i.props.draggable);a!==""&&i.setState(a)}),fe(de(i),"swipeMove",function(o){var a=(0,ze.swipeMove)(o,ee(ee(ee({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));!a||(a.swiping&&(i.clickable=!1),i.setState(a))}),fe(de(i),"swipeEnd",function(o){var a=(0,ze.swipeEnd)(o,ee(ee(ee({},i.props),i.state),{},{trackRef:i.track,listRef:i.list,slideIndex:i.state.currentSlide}));if(!!a){var l=a.triggerSlideHandler;delete a.triggerSlideHandler,i.setState(a),l!==void 0&&(i.slideHandler(l),i.props.verticalSwiping&&i.enableBodyScroll())}}),fe(de(i),"touchEnd",function(o){i.swipeEnd(o),i.clickable=!0}),fe(de(i),"slickPrev",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"previous"})},0))}),fe(de(i),"slickNext",function(){i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"next"})},0))}),fe(de(i),"slickGoTo",function(o){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(o=Number(o),isNaN(o))return"";i.callbackTimers.push(setTimeout(function(){return i.changeSlide({message:"index",index:o,currentSlide:i.state.currentSlide},a)},0))}),fe(de(i),"play",function(){var o;if(i.props.rtl)o=i.state.currentSlide-i.props.slidesToScroll;else if((0,ze.canGoNext)(ee(ee({},i.props),i.state)))o=i.state.currentSlide+i.props.slidesToScroll;else return!1;i.slideHandler(o)}),fe(de(i),"autoPlay",function(o){i.autoplayTimer&&clearInterval(i.autoplayTimer);var a=i.state.autoplaying;if(o==="update"){if(a==="hovered"||a==="focused"||a==="paused")return}else if(o==="leave"){if(a==="paused"||a==="focused")return}else if(o==="blur"&&(a==="paused"||a==="hovered"))return;i.autoplayTimer=setInterval(i.play,i.props.autoplaySpeed+50),i.setState({autoplaying:"playing"})}),fe(de(i),"pause",function(o){i.autoplayTimer&&(clearInterval(i.autoplayTimer),i.autoplayTimer=null);var a=i.state.autoplaying;o==="paused"?i.setState({autoplaying:"paused"}):o==="focused"?(a==="hovered"||a==="playing")&&i.setState({autoplaying:"focused"}):a==="playing"&&i.setState({autoplaying:"hovered"})}),fe(de(i),"onDotsOver",function(){return i.props.autoplay&&i.pause("hovered")}),fe(de(i),"onDotsLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),fe(de(i),"onTrackOver",function(){return i.props.autoplay&&i.pause("hovered")}),fe(de(i),"onTrackLeave",function(){return i.props.autoplay&&i.state.autoplaying==="hovered"&&i.autoPlay("leave")}),fe(de(i),"onSlideFocus",function(){return i.props.autoplay&&i.pause("focused")}),fe(de(i),"onSlideBlur",function(){return i.props.autoplay&&i.state.autoplaying==="focused"&&i.autoPlay("blur")}),fe(de(i),"render",function(){var o=(0,B4.default)("slick-slider",i.props.className,{"slick-vertical":i.props.vertical,"slick-initialized":!0}),a=ee(ee({},i.props),i.state),l=(0,ze.extractObject)(a,["fade","cssEase","speed","infinite","centerMode","focusOnSelect","currentSlide","lazyLoad","lazyLoadedList","rtl","slideWidth","slideHeight","listHeight","vertical","slidesToShow","slidesToScroll","slideCount","trackStyle","variableWidth","unslick","centerPadding","targetSlide","useCSS"]),u=i.props.pauseOnHover;l=ee(ee({},l),{},{onMouseEnter:u?i.onTrackOver:null,onMouseLeave:u?i.onTrackLeave:null,onMouseOver:u?i.onTrackOver:null,focusOnSelect:i.props.focusOnSelect&&i.clickable?i.selectHandler:null});var c;if(i.props.dots===!0&&i.state.slideCount>=i.props.slidesToShow){var d=(0,ze.extractObject)(a,["dotsClass","slideCount","slidesToShow","currentSlide","slidesToScroll","clickHandler","children","customPaging","infinite","appendDots"]),f=i.props.pauseOnDotsHover;d=ee(ee({},d),{},{clickHandler:i.changeSlide,onMouseEnter:f?i.onDotsLeave:null,onMouseOver:f?i.onDotsOver:null,onMouseLeave:f?i.onDotsLeave:null}),c=Gt.default.createElement(W4.Dots,d)}var m,w,_=(0,ze.extractObject)(a,["infinite","centerMode","currentSlide","slideCount","slidesToShow","prevArrow","nextArrow"]);_.clickHandler=i.changeSlide,i.props.arrows&&(m=Gt.default.createElement(fw.PrevArrow,_),w=Gt.default.createElement(fw.NextArrow,_));var E=null;i.props.vertical&&(E={height:i.state.listHeight});var v=null;i.props.vertical===!1?i.props.centerMode===!0&&(v={padding:"0px "+i.props.centerPadding}):i.props.centerMode===!0&&(v={padding:i.props.centerPadding+" 0px"});var h=ee(ee({},E),v),y=i.props.touchMove,g={className:"slick-list",style:h,onClick:i.clickHandler,onMouseDown:y?i.swipeStart:null,onMouseMove:i.state.dragging&&y?i.swipeMove:null,onMouseUp:y?i.swipeEnd:null,onMouseLeave:i.state.dragging&&y?i.swipeEnd:null,onTouchStart:y?i.swipeStart:null,onTouchMove:i.state.dragging&&y?i.swipeMove:null,onTouchEnd:y?i.touchEnd:null,onTouchCancel:i.state.dragging&&y?i.swipeEnd:null,onKeyDown:i.props.accessibility?i.keyHandler:null},T={className:o,dir:"ltr",style:i.props.style};return i.props.unslick&&(g={className:"slick-list"},T={className:o}),Gt.default.createElement("div",T,i.props.unslick?"":m,Gt.default.createElement("div",Wd({ref:i.listRefHandler},g),Gt.default.createElement(H4.Track,Wd({ref:i.trackRefHandler},l),i.props.children)),i.props.unslick?"":w,i.props.unslick?"":c)}),i.list=null,i.track=null,i.state=ee(ee({},z4.default),{},{currentSlide:i.props.initialSlide,slideCount:Gt.default.Children.count(i.props.children)}),i.callbackTimers=[],i.clickable=!0,i.debouncedResize=null;var s=i.ssrInit();return i.state=ee(ee({},i.state),s),i}return X4(n,[{key:"didPropsChange",value:function(i){for(var s=!1,o=0,a=Object.keys(this.props);o<a.length;o++){var l=a[o];if(!i.hasOwnProperty(l)){s=!0;break}if(!(Hd(i[l])==="object"||typeof i[l]=="function")&&i[l]!==this.props[l]){s=!0;break}}return s||Gt.default.Children.count(this.props.children)!==Gt.default.Children.count(i.children)}}]),n}(Gt.default.Component);Hf.InnerSlider=nO;var rO=function(t){return t.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()}).toLowerCase()},iO=rO,sO=iO,oO=function(t){var e=/[height|width]$/;return e.test(t)},mw=function(t){var e="",n=Object.keys(t);return n.forEach(function(r,i){var s=t[r];r=sO(r),oO(r)&&typeof s=="number"&&(s=s+"px"),s===!0?e+=r:s===!1?e+="not "+r:e+="("+r+": "+s+")",i<n.length-1&&(e+=" and ")}),e},aO=function(t){var e="";return typeof t=="string"?t:t instanceof Array?(t.forEach(function(n,r){e+=mw(n),r<t.length-1&&(e+=", ")}),e):mw(t)},lO=aO,TI={};(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(M.exports);function n(s){return s&&s.__esModule?s:{default:s}}var r={accessibility:!0,adaptiveHeight:!1,afterChange:null,appendDots:function(o){return e.default.createElement("ul",{style:{display:"block"}},o)},arrows:!0,autoplay:!1,autoplaySpeed:3e3,beforeChange:null,centerMode:!1,centerPadding:"50px",className:"",cssEase:"ease",customPaging:function(o){return e.default.createElement("button",null,o+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,infinite:!0,initialSlide:0,lazyLoad:null,nextArrow:null,onEdge:null,onInit:null,onLazyLoadError:null,onReInit:null,pauseOnDotsHover:!1,pauseOnFocus:!1,pauseOnHover:!0,prevArrow:null,responsive:null,rows:1,rtl:!1,slide:"div",slidesPerRow:1,slidesToScroll:1,slidesToShow:1,speed:500,swipe:!0,swipeEvent:null,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,waitForAnimate:!0},i=r;t.default=i})(TI);var Pp,gw;function uO(){if(gw)return Pp;gw=1;function t(e){this.options=e,!e.deferSetup&&this.setup()}return t.prototype={constructor:t,setup:function(){this.options.setup&&this.options.setup(),this.initialised=!0},on:function(){!this.initialised&&this.setup(),this.options.match&&this.options.match()},off:function(){this.options.unmatch&&this.options.unmatch()},destroy:function(){this.options.destroy?this.options.destroy():this.off()},equals:function(e){return this.options===e||this.options.match===e}},Pp=t,Pp}var xp,vw;function SI(){if(vw)return xp;vw=1;function t(r,i){var s=0,o=r.length,a;for(s;s<o&&(a=i(r[s],s),a!==!1);s++);}function e(r){return Object.prototype.toString.apply(r)==="[object Array]"}function n(r){return typeof r=="function"}return xp={isFunction:n,isArray:e,each:t},xp}var Np,yw;function cO(){if(yw)return Np;yw=1;var t=uO(),e=SI().each;function n(r,i){this.query=r,this.isUnconditional=i,this.handlers=[],this.mql=window.matchMedia(r);var s=this;this.listener=function(o){s.mql=o.currentTarget||o,s.assess()},this.mql.addListener(this.listener)}return n.prototype={constuctor:n,addHandler:function(r){var i=new t(r);this.handlers.push(i),this.matches()&&i.on()},removeHandler:function(r){var i=this.handlers;e(i,function(s,o){if(s.equals(r))return s.destroy(),!i.splice(o,1)})},matches:function(){return this.mql.matches||this.isUnconditional},clear:function(){e(this.handlers,function(r){r.destroy()}),this.mql.removeListener(this.listener),this.handlers.length=0},assess:function(){var r=this.matches()?"on":"off";e(this.handlers,function(i){i[r]()})}},Np=n,Np}var Op,_w;function dO(){if(_w)return Op;_w=1;var t=cO(),e=SI(),n=e.each,r=e.isFunction,i=e.isArray;function s(){if(!window.matchMedia)throw new Error("matchMedia not present, legacy browsers require a polyfill");this.queries={},this.browserIsIncapable=!window.matchMedia("only all").matches}return s.prototype={constructor:s,register:function(o,a,l){var u=this.queries,c=l&&this.browserIsIncapable;return u[o]||(u[o]=new t(o,c)),r(a)&&(a={match:a}),i(a)||(a=[a]),n(a,function(d){r(d)&&(d={match:d}),u[o].addHandler(d)}),this},unregister:function(o,a){var l=this.queries[o];return l&&(a?l.removeHandler(a):(l.clear(),delete this.queries[o])),this}},Op=s,Op}var Dp,ww;function fO(){if(ww)return Dp;ww=1;var t=dO();return Dp=new t,Dp}(function(t){function e(b){return e=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(C){return typeof C}:function(C){return C&&typeof Symbol=="function"&&C.constructor===Symbol&&C!==Symbol.prototype?"symbol":typeof C},e(b)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(M.exports),r=Hf,i=a(lO),s=a(TI),o=U;function a(b){return b&&b.__esModule?b:{default:b}}function l(){return l=Object.assign||function(b){for(var C=1;C<arguments.length;C++){var P=arguments[C];for(var B in P)Object.prototype.hasOwnProperty.call(P,B)&&(b[B]=P[B])}return b},l.apply(this,arguments)}function u(b,C){var P=Object.keys(b);if(Object.getOwnPropertySymbols){var B=Object.getOwnPropertySymbols(b);C&&(B=B.filter(function(q){return Object.getOwnPropertyDescriptor(b,q).enumerable})),P.push.apply(P,B)}return P}function c(b){for(var C=1;C<arguments.length;C++){var P=arguments[C]!=null?arguments[C]:{};C%2?u(Object(P),!0).forEach(function(B){T(b,B,P[B])}):Object.getOwnPropertyDescriptors?Object.defineProperties(b,Object.getOwnPropertyDescriptors(P)):u(Object(P)).forEach(function(B){Object.defineProperty(b,B,Object.getOwnPropertyDescriptor(P,B))})}return b}function d(b,C){if(!(b instanceof C))throw new TypeError("Cannot call a class as a function")}function f(b,C){for(var P=0;P<C.length;P++){var B=C[P];B.enumerable=B.enumerable||!1,B.configurable=!0,"value"in B&&(B.writable=!0),Object.defineProperty(b,B.key,B)}}function m(b,C,P){return C&&f(b.prototype,C),P&&f(b,P),Object.defineProperty(b,"prototype",{writable:!1}),b}function w(b,C){if(typeof C!="function"&&C!==null)throw new TypeError("Super expression must either be null or a function");b.prototype=Object.create(C&&C.prototype,{constructor:{value:b,writable:!0,configurable:!0}}),Object.defineProperty(b,"prototype",{writable:!1}),C&&_(b,C)}function _(b,C){return _=Object.setPrototypeOf||function(B,q){return B.__proto__=q,B},_(b,C)}function E(b){var C=y();return function(){var B=g(b),q;if(C){var H=g(this).constructor;q=Reflect.construct(B,arguments,H)}else q=B.apply(this,arguments);return v(this,q)}}function v(b,C){if(C&&(e(C)==="object"||typeof C=="function"))return C;if(C!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return h(b)}function h(b){if(b===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return b}function y(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function g(b){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(P){return P.__proto__||Object.getPrototypeOf(P)},g(b)}function T(b,C,P){return C in b?Object.defineProperty(b,C,{value:P,enumerable:!0,configurable:!0,writable:!0}):b[C]=P,b}var S=(0,o.canUseDOM)()&&fO(),A=function(b){w(P,b);var C=E(P);function P(B){var q;return d(this,P),q=C.call(this,B),T(h(q),"innerSliderRefHandler",function(H){return q.innerSlider=H}),T(h(q),"slickPrev",function(){return q.innerSlider.slickPrev()}),T(h(q),"slickNext",function(){return q.innerSlider.slickNext()}),T(h(q),"slickGoTo",function(H){var Ot=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return q.innerSlider.slickGoTo(H,Ot)}),T(h(q),"slickPause",function(){return q.innerSlider.pause("paused")}),T(h(q),"slickPlay",function(){return q.innerSlider.autoPlay("play")}),q.state={breakpoint:null},q._responsiveMediaHandlers=[],q}return m(P,[{key:"media",value:function(q,H){S.register(q,H),this._responsiveMediaHandlers.push({query:q,handler:H})}},{key:"componentDidMount",value:function(){var q=this;if(this.props.responsive){var H=this.props.responsive.map(function(Pe){return Pe.breakpoint});H.sort(function(Pe,$e){return Pe-$e}),H.forEach(function(Pe,$e){var bt;$e===0?bt=(0,i.default)({minWidth:0,maxWidth:Pe}):bt=(0,i.default)({minWidth:H[$e-1]+1,maxWidth:Pe}),(0,o.canUseDOM)()&&q.media(bt,function(){q.setState({breakpoint:Pe})})});var Ot=(0,i.default)({minWidth:H.slice(-1)[0]});(0,o.canUseDOM)()&&this.media(Ot,function(){q.setState({breakpoint:null})})}}},{key:"componentWillUnmount",value:function(){this._responsiveMediaHandlers.forEach(function(q){S.unregister(q.query,q.handler)})}},{key:"render",value:function(){var q=this,H,Ot;this.state.breakpoint?(Ot=this.props.responsive.filter(function(_e){return _e.breakpoint===q.state.breakpoint}),H=Ot[0].settings==="unslick"?"unslick":c(c(c({},s.default),this.props),Ot[0].settings)):H=c(c({},s.default),this.props),H.centerMode&&(H.slidesToScroll>1,H.slidesToScroll=1),H.fade&&(H.slidesToShow>1,H.slidesToScroll>1,H.slidesToShow=1,H.slidesToScroll=1);var Pe=n.default.Children.toArray(this.props.children);Pe=Pe.filter(function(_e){return typeof _e=="string"?!!_e.trim():!!_e}),H.variableWidth&&(H.rows>1||H.slidesPerRow>1)&&(console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"),H.variableWidth=!1);for(var $e=[],bt=null,V=0;V<Pe.length;V+=H.rows*H.slidesPerRow){for(var Y=[],te=V;te<V+H.rows*H.slidesPerRow;te+=H.slidesPerRow){for(var Ae=[],be=te;be<te+H.slidesPerRow&&(H.variableWidth&&Pe[be].props.style&&(bt=Pe[be].props.style.width),!(be>=Pe.length));be+=1)Ae.push(n.default.cloneElement(Pe[be],{key:100*V+10*te+be,tabIndex:-1,style:{width:"".concat(100/H.slidesPerRow,"%"),display:"inline-block"}}));Y.push(n.default.createElement("div",{key:10*V+te},Ae))}H.variableWidth?$e.push(n.default.createElement("div",{key:V,style:{width:bt}},Y)):$e.push(n.default.createElement("div",{key:V},Y))}if(H==="unslick"){var ei="regular slider "+(this.props.className||"");return n.default.createElement("div",{className:ei},Pe)}else $e.length<=H.slidesToShow&&(H.unslick=!0);return n.default.createElement(r.InnerSlider,l({style:this.props.style,ref:this.innerSliderRefHandler},H),$e)}}]),P}(n.default.Component);t.default=A})(Jb);(function(t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e=n(Jb);function n(i){return i&&i.__esModule?i:{default:i}}var r=e.default;t.default=r})(Xb);const Yf=AT(Xb);function Ew(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function $(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ew(Object(n),!0).forEach(function(r){pt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ew(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Gd(t){return Gd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Gd(t)}function hO(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Tw(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function pO(t,e,n){return e&&Tw(t.prototype,e),n&&Tw(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function pt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Py(t,e){return gO(t)||yO(t,e)||bI(t,e)||wO()}function Tu(t){return mO(t)||vO(t)||bI(t)||_O()}function mO(t){if(Array.isArray(t))return Rg(t)}function gO(t){if(Array.isArray(t))return t}function vO(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function yO(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,o,a;try{for(n=n.call(t);!(i=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));i=!0);}catch(l){s=!0,a=l}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw a}}return r}}function bI(t,e){if(!!t){if(typeof t=="string")return Rg(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Rg(t,e)}}function Rg(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function _O(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function wO(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Sw=function(){},xy={},II={},kI=null,AI={mark:Sw,measure:Sw};try{typeof window<"u"&&(xy=window),typeof document<"u"&&(II=document),typeof MutationObserver<"u"&&(kI=MutationObserver),typeof performance<"u"&&(AI=performance)}catch{}var EO=xy.navigator||{},bw=EO.userAgent,Iw=bw===void 0?"":bw,xi=xy,Le=II,kw=kI,gc=AI;xi.document;var Yr=!!Le.documentElement&&!!Le.head&&typeof Le.addEventListener=="function"&&typeof Le.createElement=="function",RI=~Iw.indexOf("MSIE")||~Iw.indexOf("Trident/"),vc,yc,_c,wc,Ec,Fr="___FONT_AWESOME___",Cg=16,CI="fa",PI="svg-inline--fa",Is="data-fa-i2svg",Pg="data-fa-pseudo-element",TO="data-fa-pseudo-element-pending",Ny="data-prefix",Oy="data-icon",Aw="fontawesome-i2svg",SO="async",bO=["HTML","HEAD","STYLE","SCRIPT"],xI=function(){try{return!0}catch{return!1}}(),Ne="classic",Ge="sharp",Dy=[Ne,Ge];function Su(t){return new Proxy(t,{get:function(n,r){return r in n?n[r]:n[Ne]}})}var jl=Su((vc={},pt(vc,Ne,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),pt(vc,Ge,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),vc)),Bl=Su((yc={},pt(yc,Ne,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),pt(yc,Ge,{solid:"fass",regular:"fasr",light:"fasl"}),yc)),Hl=Su((_c={},pt(_c,Ne,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),pt(_c,Ge,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),_c)),IO=Su((wc={},pt(wc,Ne,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),pt(wc,Ge,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),wc)),kO=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,NI="fa-layers-text",AO=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,RO=Su((Ec={},pt(Ec,Ne,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),pt(Ec,Ge,{900:"fass",400:"fasr",300:"fasl"}),Ec)),OI=[1,2,3,4,5,6,7,8,9,10],CO=OI.concat([11,12,13,14,15,16,17,18,19,20]),PO=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ss={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Wl=new Set;Object.keys(Bl[Ne]).map(Wl.add.bind(Wl));Object.keys(Bl[Ge]).map(Wl.add.bind(Wl));var xO=[].concat(Dy,Tu(Wl),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ss.GROUP,ss.SWAP_OPACITY,ss.PRIMARY,ss.SECONDARY]).concat(OI.map(function(t){return"".concat(t,"x")})).concat(CO.map(function(t){return"w-".concat(t)})),dl=xi.FontAwesomeConfig||{};function NO(t){var e=Le.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function OO(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(Le&&typeof Le.querySelector=="function"){var DO=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];DO.forEach(function(t){var e=Py(t,2),n=e[0],r=e[1],i=OO(NO(n));i!=null&&(dl[r]=i)})}var DI={styleDefault:"solid",familyDefault:"classic",cssPrefix:CI,replacementClass:PI,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};dl.familyPrefix&&(dl.cssPrefix=dl.familyPrefix);var Ho=$($({},DI),dl);Ho.autoReplaceSvg||(Ho.observeMutations=!1);var K={};Object.keys(DI).forEach(function(t){Object.defineProperty(K,t,{enumerable:!0,set:function(n){Ho[t]=n,fl.forEach(function(r){return r(K)})},get:function(){return Ho[t]}})});Object.defineProperty(K,"familyPrefix",{enumerable:!0,set:function(e){Ho.cssPrefix=e,fl.forEach(function(n){return n(K)})},get:function(){return Ho.cssPrefix}});xi.FontAwesomeConfig=K;var fl=[];function LO(t){return fl.push(t),function(){fl.splice(fl.indexOf(t),1)}}var si=Cg,or={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function MO(t){if(!(!t||!Yr)){var e=Le.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=Le.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],o=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=s)}return Le.head.insertBefore(e,r),t}}var VO="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Kl(){for(var t=12,e="";t-- >0;)e+=VO[Math.random()*62|0];return e}function ua(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function Ly(t){return t.classList?ua(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function LI(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function FO(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(LI(t[n]),'" ')},"").trim()}function Xf(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function My(t){return t.size!==or.size||t.x!==or.x||t.y!==or.y||t.rotate!==or.rotate||t.flipX||t.flipY}function qO(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),a="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(s," ").concat(o," ").concat(a)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:l,path:u}}function UO(t){var e=t.transform,n=t.width,r=n===void 0?Cg:n,i=t.height,s=i===void 0?Cg:i,o=t.startCentered,a=o===void 0?!1:o,l="";return a&&RI?l+="translate(".concat(e.x/si-r/2,"em, ").concat(e.y/si-s/2,"em) "):a?l+="translate(calc(-50% + ".concat(e.x/si,"em), calc(-50% + ").concat(e.y/si,"em)) "):l+="translate(".concat(e.x/si,"em, ").concat(e.y/si,"em) "),l+="scale(".concat(e.size/si*(e.flipX?-1:1),", ").concat(e.size/si*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var $O=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function MI(){var t=CI,e=PI,n=K.cssPrefix,r=K.replacementClass,i=$O;if(n!==t||r!==e){var s=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),a=new RegExp("\\.".concat(e),"g");i=i.replace(s,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(a,".".concat(r))}return i}var Rw=!1;function Lp(){K.autoAddCss&&!Rw&&(MO(MI()),Rw=!0)}var zO={mixout:function(){return{dom:{css:MI,insertCss:Lp}}},hooks:function(){return{beforeDOMElementCreation:function(){Lp()},beforeI2svg:function(){Lp()}}}},qr=xi||{};qr[Fr]||(qr[Fr]={});qr[Fr].styles||(qr[Fr].styles={});qr[Fr].hooks||(qr[Fr].hooks={});qr[Fr].shims||(qr[Fr].shims=[]);var jn=qr[Fr],VI=[],jO=function t(){Le.removeEventListener("DOMContentLoaded",t),Qd=1,VI.map(function(e){return e()})},Qd=!1;Yr&&(Qd=(Le.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Le.readyState),Qd||Le.addEventListener("DOMContentLoaded",jO));function BO(t){!Yr||(Qd?setTimeout(t,0):VI.push(t))}function bu(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,i=t.children,s=i===void 0?[]:i;return typeof t=="string"?LI(t):"<".concat(e," ").concat(FO(r),">").concat(s.map(bu).join(""),"</").concat(e,">")}function Cw(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var HO=function(e,n){return function(r,i,s,o){return e.call(n,r,i,s,o)}},Mp=function(e,n,r,i){var s=Object.keys(e),o=s.length,a=i!==void 0?HO(n,i):n,l,u,c;for(r===void 0?(l=1,c=e[s[0]]):(l=0,c=r);l<o;l++)u=s[l],c=a(c,e[u],u,e);return c};function WO(t){for(var e=[],n=0,r=t.length;n<r;){var i=t.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=t.charCodeAt(n++);(s&64512)==56320?e.push(((i&1023)<<10)+(s&1023)+65536):(e.push(i),n--)}else e.push(i)}return e}function xg(t){var e=WO(t);return e.length===1?e[0].toString(16):null}function KO(t,e){var n=t.length,r=t.charCodeAt(e),i;return r>=55296&&r<=56319&&n>e+1&&(i=t.charCodeAt(e+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function Pw(t){return Object.keys(t).reduce(function(e,n){var r=t[n],i=!!r.icon;return i?e[r.iconName]=r.icon:e[n]=r,e},{})}function Ng(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=Pw(e);typeof jn.hooks.addPack=="function"&&!i?jn.hooks.addPack(t,Pw(e)):jn.styles[t]=$($({},jn.styles[t]||{}),s),t==="fas"&&Ng("fa",e)}var Tc,Sc,bc,ho=jn.styles,GO=jn.shims,QO=(Tc={},pt(Tc,Ne,Object.values(Hl[Ne])),pt(Tc,Ge,Object.values(Hl[Ge])),Tc),Vy=null,FI={},qI={},UI={},$I={},zI={},YO=(Sc={},pt(Sc,Ne,Object.keys(jl[Ne])),pt(Sc,Ge,Object.keys(jl[Ge])),Sc);function XO(t){return~xO.indexOf(t)}function JO(t,e){var n=e.split("-"),r=n[0],i=n.slice(1).join("-");return r===t&&i!==""&&!XO(i)?i:null}var jI=function(){var e=function(s){return Mp(ho,function(o,a,l){return o[l]=Mp(a,s,{}),o},{})};FI=e(function(i,s,o){if(s[3]&&(i[s[3]]=o),s[2]){var a=s[2].filter(function(l){return typeof l=="number"});a.forEach(function(l){i[l.toString(16)]=o})}return i}),qI=e(function(i,s,o){if(i[o]=o,s[2]){var a=s[2].filter(function(l){return typeof l=="string"});a.forEach(function(l){i[l]=o})}return i}),zI=e(function(i,s,o){var a=s[2];return i[o]=o,a.forEach(function(l){i[l]=o}),i});var n="far"in ho||K.autoFetchSvg,r=Mp(GO,function(i,s){var o=s[0],a=s[1],l=s[2];return a==="far"&&!n&&(a="fas"),typeof o=="string"&&(i.names[o]={prefix:a,iconName:l}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:a,iconName:l}),i},{names:{},unicodes:{}});UI=r.names,$I=r.unicodes,Vy=Jf(K.styleDefault,{family:K.familyDefault})};LO(function(t){Vy=Jf(t.styleDefault,{family:K.familyDefault})});jI();function Fy(t,e){return(FI[t]||{})[e]}function ZO(t,e){return(qI[t]||{})[e]}function os(t,e){return(zI[t]||{})[e]}function BI(t){return UI[t]||{prefix:null,iconName:null}}function eD(t){var e=$I[t],n=Fy("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ni(){return Vy}var qy=function(){return{prefix:null,iconName:null,rest:[]}};function Jf(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.family,r=n===void 0?Ne:n,i=jl[r][t],s=Bl[r][t]||Bl[r][i],o=t in jn.styles?t:null;return s||o||null}var xw=(bc={},pt(bc,Ne,Object.keys(Hl[Ne])),pt(bc,Ge,Object.keys(Hl[Ge])),bc);function Zf(t){var e,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(e={},pt(e,Ne,"".concat(K.cssPrefix,"-").concat(Ne)),pt(e,Ge,"".concat(K.cssPrefix,"-").concat(Ge)),e),o=null,a=Ne;(t.includes(s[Ne])||t.some(function(u){return xw[Ne].includes(u)}))&&(a=Ne),(t.includes(s[Ge])||t.some(function(u){return xw[Ge].includes(u)}))&&(a=Ge);var l=t.reduce(function(u,c){var d=JO(K.cssPrefix,c);if(ho[c]?(c=QO[a].includes(c)?IO[a][c]:c,o=c,u.prefix=c):YO[a].indexOf(c)>-1?(o=c,u.prefix=Jf(c,{family:a})):d?u.iconName=d:c!==K.replacementClass&&c!==s[Ne]&&c!==s[Ge]&&u.rest.push(c),!i&&u.prefix&&u.iconName){var f=o==="fa"?BI(u.iconName):{},m=os(u.prefix,u.iconName);f.prefix&&(o=null),u.iconName=f.iconName||m||u.iconName,u.prefix=f.prefix||u.prefix,u.prefix==="far"&&!ho.far&&ho.fas&&!K.autoFetchSvg&&(u.prefix="fas")}return u},qy());return(t.includes("fa-brands")||t.includes("fab"))&&(l.prefix="fab"),(t.includes("fa-duotone")||t.includes("fad"))&&(l.prefix="fad"),!l.prefix&&a===Ge&&(ho.fass||K.autoFetchSvg)&&(l.prefix="fass",l.iconName=os(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ni()||"fas"),l}var tD=function(){function t(){hO(this,t),this.definitions={}}return pO(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(a){n.definitions[a]=$($({},n.definitions[a]||{}),o[a]),Ng(a,o[a]);var l=Hl[Ne][a];l&&Ng(l,o[a]),jI()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var o=i[s],a=o.prefix,l=o.iconName,u=o.icon,c=u[2];n[a]||(n[a]={}),c.length>0&&c.forEach(function(d){typeof d=="string"&&(n[a][d]=u)}),n[a][l]=u}),n}}]),t}(),Nw=[],po={},ko={},nD=Object.keys(ko);function rD(t,e){var n=e.mixoutsTo;return Nw=t,po={},Object.keys(ko).forEach(function(r){nD.indexOf(r)===-1&&delete ko[r]}),Nw.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Gd(i[o])==="object"&&Object.keys(i[o]).forEach(function(a){n[o]||(n[o]={}),n[o][a]=i[o][a]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(o){po[o]||(po[o]=[]),po[o].push(s[o])})}r.provides&&r.provides(ko)}),n}function Og(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=po[t]||[];return s.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function ks(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=po[t]||[];i.forEach(function(s){s.apply(null,n)})}function Ur(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return ko[t]?ko[t].apply(null,e):void 0}function Dg(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Ni();if(!!e)return e=os(n,e)||e,Cw(HI.definitions,n,e)||Cw(jn.styles,n,e)}var HI=new tD,iD=function(){K.autoReplaceSvg=!1,K.observeMutations=!1,ks("noAuto")},sD={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Yr?(ks("beforeI2svg",e),Ur("pseudoElements2svg",e),Ur("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;K.autoReplaceSvg===!1&&(K.autoReplaceSvg=!0),K.observeMutations=!0,BO(function(){aD({autoReplaceSvgRoot:n}),ks("watch",e)})}},oD={icon:function(e){if(e===null)return null;if(Gd(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:os(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=Jf(e[0]);return{prefix:r,iconName:os(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(K.cssPrefix,"-"))>-1||e.match(kO))){var i=Zf(e.split(" "),{skipLookups:!0});return{prefix:i.prefix||Ni(),iconName:os(i.prefix,i.iconName)||i.iconName}}if(typeof e=="string"){var s=Ni();return{prefix:s,iconName:os(s,e)||e}}}},bn={noAuto:iD,config:K,dom:sD,parse:oD,library:HI,findIconDefinition:Dg,toHtml:bu},aD=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?Le:n;(Object.keys(jn.styles).length>0||K.autoFetchSvg)&&Yr&&K.autoReplaceSvg&&bn.dom.i2svg({node:r})};function eh(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return bu(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Yr){var r=Le.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function lD(t){var e=t.children,n=t.main,r=t.mask,i=t.attributes,s=t.styles,o=t.transform;if(My(o)&&n.found&&!r.found){var a=n.width,l=n.height,u={x:a/l/2,y:.5};i.style=Xf($($({},s),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:e}]}function uD(t){var e=t.prefix,n=t.iconName,r=t.children,i=t.attributes,s=t.symbol,o=s===!0?"".concat(e,"-").concat(K.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:$($({},i),{},{id:o}),children:r}]}]}function Uy(t){var e=t.icons,n=e.main,r=e.mask,i=t.prefix,s=t.iconName,o=t.transform,a=t.symbol,l=t.title,u=t.maskId,c=t.titleId,d=t.extra,f=t.watchable,m=f===void 0?!1:f,w=r.found?r:n,_=w.width,E=w.height,v=i==="fak",h=[K.replacementClass,s?"".concat(K.cssPrefix,"-").concat(s):""].filter(function(C){return d.classes.indexOf(C)===-1}).filter(function(C){return C!==""||!!C}).concat(d.classes).join(" "),y={children:[],attributes:$($({},d.attributes),{},{"data-prefix":i,"data-icon":s,class:h,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(_," ").concat(E)})},g=v&&!~d.classes.indexOf("fa-fw")?{width:"".concat(_/E*16*.0625,"em")}:{};m&&(y.attributes[Is]=""),l&&(y.children.push({tag:"title",attributes:{id:y.attributes["aria-labelledby"]||"title-".concat(c||Kl())},children:[l]}),delete y.attributes.title);var T=$($({},y),{},{prefix:i,iconName:s,main:n,mask:r,maskId:u,transform:o,symbol:a,styles:$($({},g),d.styles)}),S=r.found&&n.found?Ur("generateAbstractMask",T)||{children:[],attributes:{}}:Ur("generateAbstractIcon",T)||{children:[],attributes:{}},A=S.children,b=S.attributes;return T.children=A,T.attributes=b,a?uD(T):lD(T)}function Ow(t){var e=t.content,n=t.width,r=t.height,i=t.transform,s=t.title,o=t.extra,a=t.watchable,l=a===void 0?!1:a,u=$($($({},o.attributes),s?{title:s}:{}),{},{class:o.classes.join(" ")});l&&(u[Is]="");var c=$({},o.styles);My(i)&&(c.transform=UO({transform:i,startCentered:!0,width:n,height:r}),c["-webkit-transform"]=c.transform);var d=Xf(c);d.length>0&&(u.style=d);var f=[];return f.push({tag:"span",attributes:u,children:[e]}),s&&f.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),f}function cD(t){var e=t.content,n=t.title,r=t.extra,i=$($($({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=Xf(r.styles);s.length>0&&(i.style=s);var o=[];return o.push({tag:"span",attributes:i,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var Vp=jn.styles;function Lg(t){var e=t[0],n=t[1],r=t.slice(4),i=Py(r,1),s=i[0],o=null;return Array.isArray(s)?o={tag:"g",attributes:{class:"".concat(K.cssPrefix,"-").concat(ss.GROUP)},children:[{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(ss.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(K.cssPrefix,"-").concat(ss.PRIMARY),fill:"currentColor",d:s[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:e,height:n,icon:o}}var dD={found:!1,width:512,height:512};function fD(t,e){!xI&&!K.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Mg(t,e){var n=e;return e==="fa"&&K.styleDefault!==null&&(e=Ni()),new Promise(function(r,i){if(Ur("missingIconAbstract"),n==="fa"){var s=BI(t)||{};t=s.iconName||t,e=s.prefix||e}if(t&&e&&Vp[e]&&Vp[e][t]){var o=Vp[e][t];return r(Lg(o))}fD(t,e),r($($({},dD),{},{icon:K.showMissingIcons&&t?Ur("missingIconAbstract")||{}:{}}))})}var Dw=function(){},Vg=K.measurePerformance&&gc&&gc.mark&&gc.measure?gc:{mark:Dw,measure:Dw},Ka='FA "6.4.0"',hD=function(e){return Vg.mark("".concat(Ka," ").concat(e," begins")),function(){return WI(e)}},WI=function(e){Vg.mark("".concat(Ka," ").concat(e," ends")),Vg.measure("".concat(Ka," ").concat(e),"".concat(Ka," ").concat(e," begins"),"".concat(Ka," ").concat(e," ends"))},$y={begin:hD,end:WI},td=function(){};function Lw(t){var e=t.getAttribute?t.getAttribute(Is):null;return typeof e=="string"}function pD(t){var e=t.getAttribute?t.getAttribute(Ny):null,n=t.getAttribute?t.getAttribute(Oy):null;return e&&n}function mD(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(K.replacementClass)}function gD(){if(K.autoReplaceSvg===!0)return nd.replace;var t=nd[K.autoReplaceSvg];return t||nd.replace}function vD(t){return Le.createElementNS("http://www.w3.org/2000/svg",t)}function yD(t){return Le.createElement(t)}function KI(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?vD:yD:n;if(typeof t=="string")return Le.createTextNode(t);var i=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){i.setAttribute(o,t.attributes[o])});var s=t.children||[];return s.forEach(function(o){i.appendChild(KI(o,{ceFn:r}))}),i}function _D(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var nd={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(i){n.parentNode.insertBefore(KI(i),n)}),n.getAttribute(Is)===null&&K.keepOriginalSource){var r=Le.createComment(_D(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~Ly(n).indexOf(K.replacementClass))return nd.replace(e);var i=new RegExp("".concat(K.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(a,l){return l===K.replacementClass||l.match(i)?a.toSvg.push(l):a.toNode.push(l),a},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var o=r.map(function(a){return bu(a)}).join(`
`);n.setAttribute(Is,""),n.innerHTML=o}};function Mw(t){t()}function GI(t,e){var n=typeof e=="function"?e:td;if(t.length===0)n();else{var r=Mw;K.mutateApproach===SO&&(r=xi.requestAnimationFrame||Mw),r(function(){var i=gD(),s=$y.begin("mutate");t.map(i),s(),n()})}}var zy=!1;function QI(){zy=!0}function Fg(){zy=!1}var Yd=null;function Vw(t){if(!!kw&&!!K.observeMutations){var e=t.treeCallback,n=e===void 0?td:e,r=t.nodeCallback,i=r===void 0?td:r,s=t.pseudoElementsCallback,o=s===void 0?td:s,a=t.observeMutationsRoot,l=a===void 0?Le:a;Yd=new kw(function(u){if(!zy){var c=Ni();ua(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!Lw(d.addedNodes[0])&&(K.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&K.searchPseudoElements&&o(d.target.parentNode),d.type==="attributes"&&Lw(d.target)&&~PO.indexOf(d.attributeName))if(d.attributeName==="class"&&pD(d.target)){var f=Zf(Ly(d.target)),m=f.prefix,w=f.iconName;d.target.setAttribute(Ny,m||c),w&&d.target.setAttribute(Oy,w)}else mD(d.target)&&i(d.target)})}}),Yr&&Yd.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function wD(){!Yd||Yd.disconnect()}function ED(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,i){var s=i.split(":"),o=s[0],a=s.slice(1);return o&&a.length>0&&(r[o]=a.join(":").trim()),r},{})),n}function TD(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",i=Zf(Ly(t));return i.prefix||(i.prefix=Ni()),e&&n&&(i.prefix=e,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=ZO(i.prefix,t.innerText)||Fy(i.prefix,xg(t.innerText))),!i.iconName&&K.autoFetchSvg&&t.firstChild&&t.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=t.firstChild.data)),i}function SD(t){var e=ua(t.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return K.autoA11y&&(n?e["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(r||Kl()):(e["aria-hidden"]="true",e.focusable="false")),e}function bD(){return{iconName:null,title:null,titleId:null,prefix:null,transform:or,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Fw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=TD(t),r=n.iconName,i=n.prefix,s=n.rest,o=SD(t),a=Og("parseNodeAttributes",{},t),l=e.styleParser?ED(t):[];return $({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:i,transform:or,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:l,attributes:o}},a)}var ID=jn.styles;function YI(t){var e=K.autoReplaceSvg==="nest"?Fw(t,{styleParser:!1}):Fw(t);return~e.extra.classes.indexOf(NI)?Ur("generateLayersText",t,e):Ur("generateSvgReplacementMutation",t,e)}var Oi=new Set;Dy.map(function(t){Oi.add("fa-".concat(t))});Object.keys(jl[Ne]).map(Oi.add.bind(Oi));Object.keys(jl[Ge]).map(Oi.add.bind(Oi));Oi=Tu(Oi);function qw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Yr)return Promise.resolve();var n=Le.documentElement.classList,r=function(d){return n.add("".concat(Aw,"-").concat(d))},i=function(d){return n.remove("".concat(Aw,"-").concat(d))},s=K.autoFetchSvg?Oi:Dy.map(function(c){return"fa-".concat(c)}).concat(Object.keys(ID));s.includes("fa")||s.push("fa");var o=[".".concat(NI,":not([").concat(Is,"])")].concat(s.map(function(c){return".".concat(c,":not([").concat(Is,"])")})).join(", ");if(o.length===0)return Promise.resolve();var a=[];try{a=ua(t.querySelectorAll(o))}catch{}if(a.length>0)r("pending"),i("complete");else return Promise.resolve();var l=$y.begin("onTree"),u=a.reduce(function(c,d){try{var f=YI(d);f&&c.push(f)}catch(m){xI||m.name==="MissingIcon"&&console.error(m)}return c},[]);return new Promise(function(c,d){Promise.all(u).then(function(f){GI(f,function(){r("active"),r("complete"),i("pending"),typeof e=="function"&&e(),l(),c()})}).catch(function(f){l(),d(f)})})}function kD(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;YI(t).then(function(n){n&&GI([n],e)})}function AD(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Dg(e||{}),i=n.mask;return i&&(i=(i||{}).icon?i:Dg(i||{})),t(r,$($({},n),{},{mask:i}))}}var RD=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?or:r,s=n.symbol,o=s===void 0?!1:s,a=n.mask,l=a===void 0?null:a,u=n.maskId,c=u===void 0?null:u,d=n.title,f=d===void 0?null:d,m=n.titleId,w=m===void 0?null:m,_=n.classes,E=_===void 0?[]:_,v=n.attributes,h=v===void 0?{}:v,y=n.styles,g=y===void 0?{}:y;if(!!e){var T=e.prefix,S=e.iconName,A=e.icon;return eh($({type:"icon"},e),function(){return ks("beforeDOMElementCreation",{iconDefinition:e,params:n}),K.autoA11y&&(f?h["aria-labelledby"]="".concat(K.replacementClass,"-title-").concat(w||Kl()):(h["aria-hidden"]="true",h.focusable="false")),Uy({icons:{main:Lg(A),mask:l?Lg(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:S,transform:$($({},or),i),symbol:o,title:f,maskId:c,titleId:w,extra:{attributes:h,styles:g,classes:E}})})}},CD={mixout:function(){return{icon:AD(RD)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=qw,n.nodeCallback=kD,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,i=r===void 0?Le:r,s=n.callback,o=s===void 0?function(){}:s;return qw(i,o)},e.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,o=r.titleId,a=r.prefix,l=r.transform,u=r.symbol,c=r.mask,d=r.maskId,f=r.extra;return new Promise(function(m,w){Promise.all([Mg(i,a),c.iconName?Mg(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(_){var E=Py(_,2),v=E[0],h=E[1];m([n,Uy({icons:{main:v,mask:h},prefix:a,iconName:i,transform:l,symbol:u,maskId:d,title:s,titleId:o,extra:f,watchable:!0})])}).catch(w)})},e.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.transform,a=n.styles,l=Xf(a);l.length>0&&(i.style=l);var u;return My(o)&&(u=Ur("generateAbstractTransformGrouping",{main:s,transform:o,containerWidth:s.width,iconWidth:s.width})),r.push(u||s.icon),{children:r,attributes:i}}}},PD={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return eh({type:"layer"},function(){ks("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(a){Array.isArray(a)?a.map(function(l){o=o.concat(l.abstract)}):o=o.concat(a.abstract)}),[{tag:"span",attributes:{class:["".concat(K.cssPrefix,"-layers")].concat(Tu(s)).join(" ")},children:o}]})}}}},xD={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,o=r.classes,a=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,c=r.styles,d=c===void 0?{}:c;return eh({type:"counter",content:n},function(){return ks("beforeDOMElementCreation",{content:n,params:r}),cD({content:n.toString(),title:s,extra:{attributes:u,styles:d,classes:["".concat(K.cssPrefix,"-layers-counter")].concat(Tu(a))}})})}}}},ND={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?or:i,o=r.title,a=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,c=r.attributes,d=c===void 0?{}:c,f=r.styles,m=f===void 0?{}:f;return eh({type:"text",content:n},function(){return ks("beforeDOMElementCreation",{content:n,params:r}),Ow({content:n,transform:$($({},or),s),title:a,extra:{attributes:d,styles:m,classes:["".concat(K.cssPrefix,"-layers-text")].concat(Tu(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var i=r.title,s=r.transform,o=r.extra,a=null,l=null;if(RI){var u=parseInt(getComputedStyle(n).fontSize,10),c=n.getBoundingClientRect();a=c.width/u,l=c.height/u}return K.autoA11y&&!i&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ow({content:n.innerHTML,width:a,height:l,transform:s,title:i,extra:o,watchable:!0})])}}},OD=new RegExp('"',"ug"),Uw=[1105920,1112319];function DD(t){var e=t.replace(OD,""),n=KO(e,0),r=n>=Uw[0]&&n<=Uw[1],i=e.length===2?e[0]===e[1]:!1;return{value:xg(i?e[0]:e),isSecondary:r||i}}function $w(t,e){var n="".concat(TO).concat(e.replace(":","-"));return new Promise(function(r,i){if(t.getAttribute(n)!==null)return r();var s=ua(t.children),o=s.filter(function(A){return A.getAttribute(Pg)===e})[0],a=xi.getComputedStyle(t,e),l=a.getPropertyValue("font-family").match(AO),u=a.getPropertyValue("font-weight"),c=a.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&c!=="none"&&c!==""){var d=a.getPropertyValue("content"),f=~["Sharp"].indexOf(l[2])?Ge:Ne,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Bl[f][l[2].toLowerCase()]:RO[f][u],w=DD(d),_=w.value,E=w.isSecondary,v=l[0].startsWith("FontAwesome"),h=Fy(m,_),y=h;if(v){var g=eD(_);g.iconName&&g.prefix&&(h=g.iconName,m=g.prefix)}if(h&&!E&&(!o||o.getAttribute(Ny)!==m||o.getAttribute(Oy)!==y)){t.setAttribute(n,y),o&&t.removeChild(o);var T=bD(),S=T.extra;S.attributes[Pg]=e,Mg(h,m).then(function(A){var b=Uy($($({},T),{},{icons:{main:A,mask:qy()},prefix:m,iconName:y,extra:S,watchable:!0})),C=Le.createElement("svg");e==="::before"?t.insertBefore(C,t.firstChild):t.appendChild(C),C.outerHTML=b.map(function(P){return bu(P)}).join(`
`),t.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function LD(t){return Promise.all([$w(t,"::before"),$w(t,"::after")])}function MD(t){return t.parentNode!==document.head&&!~bO.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(Pg)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function zw(t){if(!!Yr)return new Promise(function(e,n){var r=ua(t.querySelectorAll("*")).filter(MD).map(LD),i=$y.begin("searchPseudoElements");QI(),Promise.all(r).then(function(){i(),Fg(),e()}).catch(function(){i(),Fg(),n()})})}var VD={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=zw,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?Le:r;K.searchPseudoElements&&zw(i)}}},jw=!1,FD={mixout:function(){return{dom:{unwatch:function(){QI(),jw=!0}}}},hooks:function(){return{bootstrap:function(){Vw(Og("mutationObserverCallbacks",{}))},noAuto:function(){wD()},watch:function(n){var r=n.observeMutationsRoot;jw?Fg():Vw(Og("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Bw=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),o=s[0],a=s.slice(1).join("-");if(o&&a==="h")return r.flipX=!0,r;if(o&&a==="v")return r.flipY=!0,r;if(a=parseFloat(a),isNaN(a))return r;switch(o){case"grow":r.size=r.size+a;break;case"shrink":r.size=r.size-a;break;case"left":r.x=r.x-a;break;case"right":r.x=r.x+a;break;case"up":r.y=r.y-a;break;case"down":r.y=r.y+a;break;case"rotate":r.rotate=r.rotate+a;break}return r},n)},qD={mixout:function(){return{parse:{transform:function(n){return Bw(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Bw(i)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,o=n.iconWidth,a={transform:"translate(".concat(s/2," 256)")},l="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),c="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(l," ").concat(u," ").concat(c)},f={transform:"translate(".concat(o/2*-1," -256)")},m={outer:a,inner:d,path:f};return{tag:"g",attributes:$({},m.outer),children:[{tag:"g",attributes:$({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:$($({},r.icon.attributes),m.path)}]}]}}}},Fp={x:0,y:0,width:"100%",height:"100%"};function Hw(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function UD(t){return t.tag==="g"?t.children:[t]}var $D={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?Zf(i.split(" ").map(function(o){return o.trim()})):qy();return s.prefix||(s.prefix=Ni()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,o=n.mask,a=n.maskId,l=n.transform,u=s.width,c=s.icon,d=o.width,f=o.icon,m=qO({transform:l,containerWidth:d,iconWidth:u}),w={tag:"rect",attributes:$($({},Fp),{},{fill:"white"})},_=c.children?{children:c.children.map(Hw)}:{},E={tag:"g",attributes:$({},m.inner),children:[Hw($({tag:c.tag,attributes:$($({},c.attributes),m.path)},_))]},v={tag:"g",attributes:$({},m.outer),children:[E]},h="mask-".concat(a||Kl()),y="clip-".concat(a||Kl()),g={tag:"mask",attributes:$($({},Fp),{},{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[w,v]},T={tag:"defs",children:[{tag:"clipPath",attributes:{id:y},children:UD(f)},g]};return r.push(T,{tag:"rect",attributes:$({fill:"currentColor","clip-path":"url(#".concat(y,")"),mask:"url(#".concat(h,")")},Fp)}),{children:r,attributes:i}}}},zD={provides:function(e){var n=!1;xi.matchMedia&&(n=xi.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:$($({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=$($({},s),{},{attributeName:"opacity"}),a={tag:"circle",attributes:$($({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||a.children.push({tag:"animate",attributes:$($({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:$($({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(a),r.push({tag:"path",attributes:$($({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:$($({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:$($({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:$($({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},jD={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},BD=[zO,CD,PD,xD,ND,VD,FD,qD,$D,zD,jD];rD(BD,{mixoutsTo:bn});bn.noAuto;bn.config;bn.library;bn.dom;var qg=bn.parse;bn.findIconDefinition;bn.toHtml;var HD=bn.icon;bn.layer;bn.text;bn.counter;var ce={exports:{}},WD="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",KD=WD,GD=KD;function XI(){}function JI(){}JI.resetWarningCache=XI;var QD=function(){function t(r,i,s,o,a,l){if(l!==GD){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:JI,resetWarningCache:XI};return n.PropTypes=n,n};ce.exports=QD();function Ww(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function mi(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ww(Object(n),!0).forEach(function(r){mo(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ww(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Xd(t){return Xd=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},Xd(t)}function mo(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function YD(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function XD(t,e){if(t==null)return{};var n=YD(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Ug(t){return JD(t)||ZD(t)||eL(t)||tL()}function JD(t){if(Array.isArray(t))return $g(t)}function ZD(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function eL(t,e){if(!!t){if(typeof t=="string")return $g(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $g(t,e)}}function $g(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function tL(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function nL(t){var e,n=t.beat,r=t.fade,i=t.beatFade,s=t.bounce,o=t.shake,a=t.flash,l=t.spin,u=t.spinPulse,c=t.spinReverse,d=t.pulse,f=t.fixedWidth,m=t.inverse,w=t.border,_=t.listItem,E=t.flip,v=t.size,h=t.rotation,y=t.pull,g=(e={"fa-beat":n,"fa-fade":r,"fa-beat-fade":i,"fa-bounce":s,"fa-shake":o,"fa-flash":a,"fa-spin":l,"fa-spin-reverse":c,"fa-spin-pulse":u,"fa-pulse":d,"fa-fw":f,"fa-inverse":m,"fa-border":w,"fa-li":_,"fa-flip":E===!0,"fa-flip-horizontal":E==="horizontal"||E==="both","fa-flip-vertical":E==="vertical"||E==="both"},mo(e,"fa-".concat(v),typeof v<"u"&&v!==null),mo(e,"fa-rotate-".concat(h),typeof h<"u"&&h!==null&&h!==0),mo(e,"fa-pull-".concat(y),typeof y<"u"&&y!==null),mo(e,"fa-swap-opacity",t.swapOpacity),e);return Object.keys(g).map(function(T){return g[T]?T:null}).filter(function(T){return T})}function rL(t){return t=t-0,t===t}function ZI(t){return rL(t)?t:(t=t.replace(/[\-_\s]+(.)?/g,function(e,n){return n?n.toUpperCase():""}),t.substr(0,1).toLowerCase()+t.substr(1))}var iL=["style"];function sL(t){return t.charAt(0).toUpperCase()+t.slice(1)}function oL(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),i=ZI(n.slice(0,r)),s=n.slice(r+1).trim();return i.startsWith("webkit")?e[sL(i)]=s:e[i]=s,e},{})}function ek(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return ek(t,l)}),i=Object.keys(e.attributes||{}).reduce(function(l,u){var c=e.attributes[u];switch(u){case"class":l.attrs.className=c,delete e.attributes.class;break;case"style":l.attrs.style=oL(c);break;default:u.indexOf("aria-")===0||u.indexOf("data-")===0?l.attrs[u.toLowerCase()]=c:l.attrs[ZI(u)]=c}return l},{attrs:{}}),s=n.style,o=s===void 0?{}:s,a=XD(n,iL);return i.attrs.style=mi(mi({},i.attrs.style),o),t.apply(void 0,[e.tag,mi(mi({},i.attrs),a)].concat(Ug(r)))}var tk=!1;try{tk=!0}catch{}function aL(){if(!tk&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Kw(t){if(t&&Xd(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(qg.icon)return qg.icon(t);if(t===null)return null;if(t&&Xd(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}function qp(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?mo({},t,e):{}}var Ee=bf.forwardRef(function(t,e){var n=t.icon,r=t.mask,i=t.symbol,s=t.className,o=t.title,a=t.titleId,l=t.maskId,u=Kw(n),c=qp("classes",[].concat(Ug(nL(t)),Ug(s.split(" ")))),d=qp("transform",typeof t.transform=="string"?qg.transform(t.transform):t.transform),f=qp("mask",Kw(r)),m=HD(u,mi(mi(mi(mi({},c),d),f),{},{symbol:i,title:o,titleId:a,maskId:l}));if(!m)return aL("Could not find icon",u),null;var w=m.abstract,_={ref:e};return Object.keys(t).forEach(function(E){Ee.defaultProps.hasOwnProperty(E)||(_[E]=t[E])}),lL(w[0],_)});Ee.displayName="FontAwesomeIcon";Ee.propTypes={beat:ce.exports.bool,border:ce.exports.bool,beatFade:ce.exports.bool,bounce:ce.exports.bool,className:ce.exports.string,fade:ce.exports.bool,flash:ce.exports.bool,mask:ce.exports.oneOfType([ce.exports.object,ce.exports.array,ce.exports.string]),maskId:ce.exports.string,fixedWidth:ce.exports.bool,inverse:ce.exports.bool,flip:ce.exports.oneOf([!0,!1,"horizontal","vertical","both"]),icon:ce.exports.oneOfType([ce.exports.object,ce.exports.array,ce.exports.string]),listItem:ce.exports.bool,pull:ce.exports.oneOf(["right","left"]),pulse:ce.exports.bool,rotation:ce.exports.oneOf([0,90,180,270]),shake:ce.exports.bool,size:ce.exports.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:ce.exports.bool,spinPulse:ce.exports.bool,spinReverse:ce.exports.bool,symbol:ce.exports.oneOfType([ce.exports.bool,ce.exports.string]),title:ce.exports.string,titleId:ce.exports.string,transform:ce.exports.oneOfType([ce.exports.string,ce.exports.object]),swapOpacity:ce.exports.bool};Ee.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var lL=ek.bind(null,bf.createElement),uL={prefix:"fas",iconName:"angles-down",icon:[448,512,["angle-double-down"],"f103","M246.6 470.6c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 402.7 361.4 265.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-160 160zm160-352l-160 160c-12.5 12.5-32.8 12.5-45.3 0l-160-160c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 210.7 361.4 73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3z"]},nk=uL,cL={prefix:"fas",iconName:"headphones-simple",icon:[512,512,["headphones-alt"],"f58f","M256 80C141.1 80 48 173.1 48 288V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288C0 146.6 114.6 32 256 32s256 114.6 256 256V392c0 13.3-10.7 24-24 24s-24-10.7-24-24V288c0-114.9-93.1-208-208-208zM80 352c0-35.3 28.7-64 64-64h16c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V352zm288-64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V320c0-17.7 14.3-32 32-32h16z"]},mn={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},dL={prefix:"fas",iconName:"star-half-stroke",icon:[640,512,["star-half-alt"],"f5c0","M320 376.4l.1-.1 26.4 14.1 85.2 45.5-16.5-97.6-4.8-28.7 20.7-20.5 70.1-69.3-96.1-14.2-29.3-4.3-12.9-26.6L320.1 86.9l-.1 .3V376.4zm175.1 98.3c2 12-3 24.2-12.9 31.3s-23 8-33.8 2.3L320.1 439.8 191.8 508.3C181 514 167.9 513.1 158 506s-14.9-19.3-12.9-31.3L169.8 329 65.6 225.9c-8.6-8.5-11.7-21.2-7.9-32.7s13.7-19.9 25.7-21.7L227 150.3 291.4 18c5.4-11 16.5-18 28.8-18s23.4 7 28.8 18l64.3 132.3 143.6 21.2c12 1.8 22 10.2 25.7 21.7s.7 24.2-7.9 32.7L470.5 329l24.6 145.7z"]},jy=dL,fL={prefix:"fas",iconName:"phone-flip",icon:[512,512,[128381,"phone-alt"],"f879","M347.1 24.6c7.7-18.6 28-28.5 47.4-23.2l88 24C499.9 30.2 512 46 512 64c0 247.4-200.6 448-448 448c-18 0-33.8-12.1-38.6-29.5l-24-88c-5.3-19.4 4.6-39.7 23.2-47.4l96-40c16.3-6.8 35.2-2.1 46.3 11.6L207.3 368c70.4-33.3 127.4-90.3 160.7-160.7L318.7 167c-13.7-11.2-18.4-30-11.6-46.3l40-96z"]},hL=fL,pL={prefix:"fas",iconName:"route",icon:[512,512,[],"f4d7","M512 96c0 50.2-59.1 125.1-84.6 155c-3.8 4.4-9.4 6.1-14.5 5H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c53 0 96 43 96 96s-43 96-96 96H139.6c8.7-9.9 19.3-22.6 30-36.8c6.3-8.4 12.8-17.6 19-27.2H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320c-53 0-96-43-96-96s43-96 96-96h39.8c-21-31.5-39.8-67.7-39.8-96c0-53 43-96 96-96s96 43 96 96zM117.1 489.1c-3.8 4.3-7.2 8.1-10.1 11.3l-1.8 2-.2-.2c-6 4.6-14.6 4-20-1.8C59.8 473 0 402.5 0 352c0-53 43-96 96-96s96 43 96 96c0 30-21.1 67-43.5 97.9c-10.7 14.7-21.7 28-30.8 38.5l-.6 .7zM128 352a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM416 128a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},mL={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},gL={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},vL={prefix:"fas",iconName:"mobile-screen",icon:[384,512,["mobile-android-alt"],"f3cf","M16 64C16 28.7 44.7 0 80 0H304c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H80c-35.3 0-64-28.7-64-64V64zM144 448c0 8.8 7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H160c-8.8 0-16 7.2-16 16zM304 64H80V384H304V64z"]},yL={prefix:"fas",iconName:"arrow-right-long",icon:[512,512,["long-arrow-right"],"f178","M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"]},_L={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},wL=_L,EL={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},TL={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},SL={prefix:"fas",iconName:"shield",icon:[512,512,[128737,"shield-blank"],"f132","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0z"]};const bL="_slide_12oek_1",IL="_btn_12oek_91",kL="_controls_12oek_99",Ic={slide:bL,"slide-content":"_slide-content_12oek_11","slide-bg":"_slide-bg_12oek_43",btn:IL,controls:kL},AL="_btn_1ggl7_1",RL={btn:AL},Wo=t=>p(Ir,{to:t.to,className:`${RL.btn} ${t.className}`,children:t.children}),kc=t=>R("div",{className:Ic.slide,children:[p("img",{src:t.img,className:Ic["slide-bg"]}),R("div",{className:Ic["slide-content"],children:[p("h2",{children:t.title}),p("p",{children:t.desc}),p(Wo,{to:t.to,className:Ic.btn,children:"\u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646"})]})]});const CL="_slide_nutmx_1",PL="_controls_nutmx_23",xL="_prev_nutmx_57",NL="_next_nutmx_59",By={slide:CL,controls:PL,prev:xL,next:NL},OL=({onClick:t})=>p("div",{className:By.prev,onClick:t,children:p(Ee,{icon:EL})}),DL=({onClick:t})=>p("div",{className:By.next,onClick:t,children:p(Ee,{icon:TL})}),LL=()=>{const t=M.exports.useRef(null),e={dots:!1,infinite:!0,speed:500,fade:!0,autoplay:!0,autoplaySpeed:3e3,cssEase:"ease-in-out",prevArrow:p(wt,{}),nextArrow:p(wt,{}),pauseOnHover:!1},n=()=>{t.current.slickPrev()},r=()=>{t.current.slickNext()},i=M.exports.useRef(null),[s,o]=M.exports.useState({}),[a,l]=M.exports.useState(window.innerWidth);return window.addEventListener("resize",()=>{l(window.innerWidth)}),M.exports.useEffect(()=>{i.current;const u=()=>{if(window.innerWidth>768){const f=t.current.innerSlider.list.querySelector(".slick-active").querySelector("[class*='slide-content']");if(f){let m=f.getBoundingClientRect();o({top:`${m.top+m.height/1.25}px`,right:`${m.width/2+20}px`})}}else o({})};return window.addEventListener("resize",u),u(),()=>{window.removeEventListener("resize",u)}},[a]),R("div",{className:"landing",children:[R(Yf,{...e,ref:t,children:[p(kc,{img:"https://images.pexels.com/photos/1049298/pexels-photo-1049298.jpeg?auto=compress&cs=tinysrgb&w=1200",title:"1\u0631\u062D\u0644\u0627\u062A \u062E\u0627\u0631\u062C\u064A\u0629",desc:"\u062A\u0642\u062F\u0645 \u0634\u0631\u0643\u0629 \u0627\u0644\u062C\u0631\u0632 \u0627\u0644\u0641\u0636\u064A \u0644\u0644\u0633\u064A\u0627\u062D\u0629 \u0648\u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0642\u064A\u0645\u064A\u0646\r \u0641\u064A \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0645\u0627\u0646\u064A\u0629"}),p(kc,{img:"https://images.unsplash.com/photo-1679471491129-9e2f3ea6ec3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",title:"\u0631\u062D\u0644\u0627\u062A \u062E\u0627\u0631\u062C\u064A\u06292",desc:"\u062A\u0642\u062F\u0645 \u0634\u0631\u0643\u0629 \u0627\u0644\u062C\u0631\u0632 \u0627\u0644\u0641\u0636\u064A \u0644\u0644\u0633\u064A\u0627\u062D\u0629 \u0648\u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0642\u064A\u0645\u064A\u0646\r \u0641\u064A \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0645\u0627\u0646\u064A\u0629"}),p(kc,{img:"https://images.unsplash.com/photo-1679443377263-1bc9da36b58e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1120&q=80",title:"\u0631\u062D\u0644\u0627\u062A \u062E\u0627\u0631\u062C\u064A\u06293",desc:"\u062A\u0642\u062F\u0645 \u0634\u0631\u0643\u0629 \u0627\u0644\u062C\u0631\u0632 \u0627\u0644\u0641\u0636\u064A \u0644\u0644\u0633\u064A\u0627\u062D\u0629 \u0648\u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0642\u064A\u0645\u064A\u0646\r \u0641\u064A \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0645\u0627\u0646\u064A\u0629"}),p(kc,{img:"https://images.unsplash.com/photo-1679436230537-46111d0c70a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",title:"\u0631\u062D\u0644\u0627\u062A \u062E\u0627\u0631\u062C\u064A\u06294",desc:"\u062A\u0642\u062F\u0645 \u0634\u0631\u0643\u0629 \u0627\u0644\u062C\u0631\u0632 \u0627\u0644\u0641\u0636\u064A \u0644\u0644\u0633\u064A\u0627\u062D\u0629 \u0648\u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0648\u0627\u0644\u0645\u0642\u064A\u0645\u064A\u0646\r \u0641\u064A \u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0639\u0645\u0627\u0646\u064A\u0629"})]}),R("div",{className:By.controls,ref:i,style:s,children:[p(OL,{onClick:n}),p(DL,{onClick:r})]})]})},ML="_promo_j97xy_1",VL="_info_j97xy_53",FL="_title_j97xy_69",qL="_desc_j97xy_103",UL="_btn_j97xy_119",Qi={promo:ML,"promo-img":"_promo-img_j97xy_21",info:VL,title:FL,desc:qL,btn:UL},$L=t=>R("div",{className:Qi.promo,children:[p("div",{className:Qi["promo-img"],children:p("a",{href:t.to,children:p("img",{src:t.img,alt:"Promo"})})}),R("div",{className:Qi.info,children:[R("div",{className:Qi.title,children:[p("h2",{children:t.title}),t.code&&R("h3",{className:Qi.code,children:["\u0643\u0648\u062F: ",p("span",{children:t.code})]})]}),p("p",{className:Qi.desc,children:t.desc}),p(Wo,{className:Qi.btn,to:`/tours/${t.id}`,children:t.cta})]})]});const Iu=[{id:"dubai",imageSrc:"src/assets/images/tickets/dubai.jpg",title:"Dubai, United Arab Emirates",description:"Experience the glamour and modernity of Dubai, known for its skyscrapers, luxury shopping, and desert adventures.",feats:[{title:"Burj Khalifa",description:"Visit the iconic Burj Khalifa, the world's tallest building, and enjoy stunning views from its observation decks."},{title:"Dubai Mall",description:"Indulge in luxury shopping and entertainment at the vast Dubai Mall, home to numerous international brands and attractions."},{title:"Desert Safari",description:"Embark on a thrilling desert safari to experience sand dunes, camel rides, and traditional Bedouin-style camps."},{title:"Palm Jumeirah",description:"Relax on the artificial island of Palm Jumeirah and enjoy its upscale resorts and beautiful beaches."},{title:"Dubai Creek",description:"Take a traditional abra boat ride along Dubai Creek, a historic waterway that showcases the city's heritage."}],faq:[{title:"Best time to visit",description:"The best time to visit Dubai is during the cooler months from November to March."},{title:"Language",description:"Arabic is the official language, but English is widely spoken, especially in tourist areas."},{title:"Currency",description:"The currency used in Dubai is the UAE Dirham (AED)."},{title:"Transportation",description:"Dubai has an efficient public transportation system, including the Dubai Metro and buses."},{title:"Local Cuisine",description:"Try delicious Arabic dishes such as shawarma, falafel, and hummus."}]},{id:"cairo",imageSrc:"src/assets/images/tickets/cairo.jpg",title:"Cairo, Egypt",description:"Discover the ancient city of Cairo, Egypt's capital, with its historic landmarks and rich cultural heritage.",feats:[{title:"Giza Pyramids",description:"Marvel at the majestic Giza Pyramids, including the Great Pyramid of Khufu, one of the Seven Wonders of the Ancient World."},{title:"Egyptian Museum",description:"Explore the Egyptian Museum in Tahrir Square, home to an extensive collection of ancient artifacts and treasures."},{title:"Khan El-Khalili",description:"Shop for traditional souvenirs and immerse yourself in the bustling atmosphere of Khan El-Khalili, Cairo's famous bazaar."},{title:"Islamic Cairo",description:"Discover the historic mosques, madrasas, and winding streets of Islamic Cairo, reflecting Egypt's Islamic heritage."},{title:"Nile River Cruise",description:"Take a leisurely cruise on the Nile River to witness the city's landmarks from the water."}],faq:[{title:"Best time to visit",description:"The best time to visit Cairo is during the cooler months from October to April."},{title:"Language",description:"Arabic is the official language, and English is widely understood, especially in tourist areas."},{title:"Currency",description:"The currency used in Egypt is the Egyptian Pound (EGP)."},{title:"Transportation",description:"Cairo has various transportation options, including taxis, buses, and the Cairo Metro."},{title:"Safety",description:"Exercise caution and stay updated on travel advisories, especially in certain areas."}]},{id:"riyadh",imageSrc:"src/assets/images/tickets/riyadh.jpg",title:"Riyadh, Saudi Arabia",description:"Discover the modern capital of Saudi Arabia, Riyadh, with its towering skyscrapers, traditional souks, and cultural attractions.",feats:[{title:"Kingdom Centre Tower",description:"Visit the Kingdom Centre Tower, an iconic skyscraper with an observation deck offering panoramic views of the city."},{title:"Diriyah",description:"Explore Diriyah, a UNESCO-listed site with historic mud-brick architecture and the birthplace of the Saudi state."},{title:"Al-Masmak Fortress",description:"Learn about Saudi Arabia's history at Al-Masmak Fortress, a museum showcasing artifacts and exhibits."},{title:"Al-Dirah Souq",description:"Shop for traditional goods and souvenirs at Al-Dirah Souq, a bustling market with a wide range of products."},{title:"Edge of the World",description:"Embark on a day trip to the Edge of the World, a stunning geological formation on the outskirts of Riyadh."}],faq:[{title:"Best time to visit",description:"The best time to visit Riyadh is during the cooler months from November to March."},{title:"Language",description:"Arabic is the official language, and English is commonly used in business and hospitality sectors."},{title:"Currency",description:"The currency used in Saudi Arabia is the Saudi Riyal (SAR)."},{title:"Transportation",description:"Riyadh has a growing public transportation system, including buses and ride-hailing services."},{title:"Local Cuisine",description:"Try traditional Saudi Arabian dishes such as kabsa, mutabbaq, and dates."}]},{id:"marrakech",imageSrc:"src/assets/images/tickets/marrakech.jpg",title:"Marrakech, Morocco",description:"Immerse yourself in the vibrant colors, spices, and culture of Marrakech, a city with a mix of ancient and modern charm.",feats:[{title:"Jemaa el-Fnaa",description:"Experience the lively atmosphere of Jemaa el-Fnaa square, where street performers, food stalls, and market vendors come together."},{title:"Majorelle Garden",description:"Stroll through the serene Majorelle Garden, a beautiful oasis with exotic plants and cobalt-blue buildings."},{title:"Bahia Palace",description:"Explore the stunning Bahia Palace, a grand 19th-century residence showcasing intricate Islamic architecture."},{title:"Medina Souks",description:"Get lost in the maze-like streets of the Medina and bargain for souvenirs, textiles, and local crafts."},{title:"Atlas Mountains",description:"Take a day trip to the nearby Atlas Mountains to enjoy breathtaking views and nature hikes."}],faq:[{title:"Best time to visit",description:"The best time to visit Marrakech is during spring (March to May) and autumn (September to November) for pleasant weather."},{title:"Language",description:"Arabic is the official language, but French is also widely spoken, especially in tourist areas."},{title:"Currency",description:"The currency used in Morocco is the Moroccan Dirham (MAD)."},{title:"Transportation",description:"Marrakech has a network of taxis, buses, and horse-drawn carriages (cal\xE8ches) for getting around."},{title:"Local Cuisine",description:"Taste delicious Moroccan dishes such as tagine, couscous, and mint tea."}]},{id:"beirut",imageSrc:"src/assets/images/tickets/beirut.jpg",title:"Beirut, Lebanon",description:"Discover the captivating city of Beirut, known for its mix of historical sites, modern architecture, and vibrant nightlife.",feats:[{title:"National Museum of Beirut",description:"Explore the National Museum of Beirut, home to a vast collection of artifacts from Lebanon's ancient and recent history."},{title:"Pigeon Rocks",description:"Admire the natural rock formations of Pigeon Rocks (Raouch\xE9) rising from the sea along Beirut's coastline."},{title:"Downtown Beirut",description:"Stroll through Downtown Beirut, a modern district with stylish boutiques, cafes, and cultural attractions."},{title:"Jeita Grotto",description:"Take a day trip to Jeita Grotto, a magnificent cave system with stunning stalactites and stalagmites."},{title:"Byblos",description:"Visit the ancient city of Byblos, one of the oldest continuously inhabited cities in the world."}],faq:[{title:"Best time to visit",description:"The best time to visit Beirut is during spring (March to May) and autumn (September to November) for mild weather."},{title:"Language",description:"Arabic is the official language, and many people also speak English and French."},{title:"Currency",description:"The currency used in Lebanon is the Lebanese Pound (LBP)."},{title:"Transportation",description:"Beirut has taxis, buses, and shared vans (service) as primary modes of transportation."},{title:"Safety",description:"Beirut is generally safe for tourists, but it's advisable to stay informed about local situations."}]},{id:"abu-dhabi",imageSrc:"src/assets/images/tickets/abu-dhabi.jpg",title:"Abu Dhabi, United Arab Emirates",description:"Explore the sophisticated city of Abu Dhabi, the capital of the UAE, with its futuristic architecture and cultural landmarks.",feats:[{title:"Sheikh Zayed Grand Mosque",description:"Visit the magnificent Sheikh Zayed Grand Mosque, one of the largest mosques in the world."},{title:"Louvre Abu Dhabi",description:"Discover the remarkable Louvre Abu Dhabi, an art and civilization museum that showcases global heritage."},{title:"Emirates Palace",description:"Experience luxury at the Emirates Palace, a grand hotel with opulent interiors and a private beach."},{title:"Ferrari World",description:"Have a thrilling time at Ferrari World, an indoor amusement park featuring high-speed rides and attractions."},{title:"Corniche Beach",description:"Relax and unwind at Corniche Beach, a picturesque waterfront promenade with sandy beaches."}],faq:[{title:"Best time to visit",description:"The best time to visit Abu Dhabi is during the cooler months from November to April."},{title:"Language",description:"Arabic is the official language, but English is widely spoken, especially in the hospitality industry."},{title:"Currency",description:"The currency used in Abu Dhabi is the UAE Dirham (AED)."},{title:"Transportation",description:"Abu Dhabi has an efficient public transportation system, including buses and taxis."},{title:"Local Cuisine",description:"Enjoy a mix of Arabic and international cuisines at Abu Dhabi's diverse restaurants."}]},{id:"amman",imageSrc:"src/assets/images/tickets/amman.png",title:"Amman, Jordan",description:"Explore the historic city of Amman, Jordan's capital, with its ancient ruins, vibrant markets, and hilltop citadels.",feats:[{title:"Roman Theatre",description:"Visit the well-preserved Roman Theatre, a 2nd-century amphitheater still used for events today."},{title:"Amman Citadel",description:"Discover the Amman Citadel, a historic site with ancient ruins and panoramic views of the city."},{title:"Rainbow Street",description:"Wander along Rainbow Street, known for its cafes, art galleries, and lively atmosphere."},{title:"Souk Jara",description:"Experience Souk Jara, an open-air market where local artisans sell crafts, clothing, and delicious food."},{title:"Dead Sea",description:"Take a day trip to the Dead Sea, the lowest point on Earth, and float effortlessly in its salty waters."}],faq:[{title:"Best time to visit",description:"The best time to visit Amman is during spring (March to May) and autumn (September to November) for mild weather."},{title:"Language",description:"Arabic is the official language, but English is widely understood, especially in tourist areas."},{title:"Currency",description:"The currency used in Jordan is the Jordanian Dinar (JOD)."},{title:"Transportation",description:"Amman has taxis and buses for local transportation, and it serves as a hub for travel within Jordan."},{title:"Local Cuisine",description:"Savor delicious Jordanian dishes such as mansaf, falafel, and knafeh."}]},{id:"riyadh",imageSrc:"src/assets/images/tickets/riyadh.jpg",title:"Riyadh, Saudi Arabia",description:"Discover the modern capital of Saudi Arabia, Riyadh, with its towering skyscrapers, traditional souks, and cultural attractions.",feats:[{title:"Kingdom Centre Tower",description:"Visit the Kingdom Centre Tower, an iconic skyscraper with an observation deck offering panoramic views of the city."},{title:"Diriyah",description:"Explore Diriyah, a UNESCO-listed site with historic mud-brick architecture and the birthplace of the Saudi state."},{title:"Al-Masmak Fortress",description:"Learn about Saudi Arabia's history at Al-Masmak Fortress, a museum showcasing artifacts and exhibits."},{title:"Al-Dirah Souq",description:"Shop for traditional goods and souvenirs at Al-Dirah Souq, a bustling market with a wide range of products."},{title:"Edge of the World",description:"Embark on a day trip to the Edge of the World, a stunning geological formation on the outskirts of Riyadh."}],faq:[{title:"Best time to visit",description:"The best time to visit Riyadh is during the cooler months from November to March."},{title:"Language",description:"Arabic is the official language, and English is commonly used in business and hospitality sectors."},{title:"Currency",description:"The currency used in Saudi Arabia is the Saudi Riyal (SAR)."},{title:"Transportation",description:"Riyadh has a growing public transportation system, including buses and ride-hailing services."},{title:"Local Cuisine",description:"Try traditional Saudi Arabian dishes such as kabsa, mutabbaq, and dates."}]}],rk=()=>{const[t,e]=M.exports.useState(3),[n,r]=M.exports.useState(window.innerWidth);return window.addEventListener("resize",()=>{r(window.innerWidth)}),M.exports.useEffect(()=>{n>768?e(3):e(1)},[n]),p("div",{className:"promoSlider",children:p(Yf,{...{dots:!1,infinite:!0,pauseOnHover:!1,speed:500,slidesToShow:t,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,adaptiveHeight:!0,nextArrow:p(wt,{}),prevArrow:p(wt,{})},children:Iu.map(s=>p($L,{img:s.imageSrc,to:s.to,title:s.title,code:"1234",desc:s.description,cta:"\u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646",id:s.id},s.id))})})},zL="_container_1gy3s_1",jL={container:zL},tn=({children:t,className:e})=>p("div",{className:`${jL.container} ${e}`,children:t}),BL={"main-title":"_main-title_110f7_1"},th=t=>p("div",{className:BL["main-title"],children:p("h2",{children:t.children})}),HL="_offersCont_bnsvu_1",ik={offersCont:HL},WL=()=>p("section",{className:"offers",children:R(tn,{className:ik.offersCont,children:[p(th,{children:"\u0623\u062C\u062F\u062F \u0627\u0644\u0639\u0631\u0648\u0636"}),p("div",{className:"container",children:p(rk,{})})]})});const KL="_aboutSec_rjkbg_1",GL="_aboutCont_rjkbg_11",QL="_info_rjkbg_19",YL="_alt_rjkbg_89",XL="_button_rjkbg_107",Yi={aboutSec:KL,aboutCont:GL,info:QL,alt:YL,button:XL},JL=()=>p("section",{className:Yi.aboutSec,children:R(tn,{className:Yi.aboutCont,children:[p(th,{children:"\u0645\u0646 \u0646\u062D\u0646"}),R("div",{className:Yi.info,children:[p("h3",{children:"\u0627\u0644\u062C\u0631\u0632 \u0627\u0644\u0641\u0636\u064A"}),p("p",{className:Yi.desc,children:"\u062A\u0642\u062F\u0645 \u0634\u0631\u0643\u0629 \u0627\u0644\u062C\u0631\u0632 \u0627\u0644\u0641\u0636\u064A \u0644\u0644\u0633\u064A\u0627\u062D\u0629 \u0648\u0627\u0644\u0633\u0641\u0631 \u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u0631\u062D\u0644\u0627\u062A \u0648\u0627\u0644\u062E\u0627\u0631\u062C\u064A\u0629 \u0648\u0627\u0644\u0639\u062F\u064A\u062F \u0645\u0646 \u0627\u0644\u062E\u062F\u0645\u0627\u062A \u0627\u0644\u0633\u064A\u0627\u062D\u064A\u0629 \u0648\u0627\u0644\u0633\u0641\u0631\u064A\u0629 \u0648\u0627\u0644\u062A\u0631\u0641\u064A\u0647\u064A\u0629 \u0648\u0627\u0644\u062A\u0631\u0641\u064A\u0647\u064A\u0629 \u0648\u0627\u0644\u062A\u0631\u0641\u064A\u0647"}),R("div",{className:Yi.buttons,children:[p(Wo,{className:Yi.button,children:"\u0627\u0642\u0631\u0623 \u0627\u0644\u0645\u0632\u064A\u062F"}),p(Wo,{className:Yi.alt,children:"\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"})]})]})]})}),ZL="_newsletter_6hxer_1",e3="_newsletterCont_6hxer_35",Up={newsletter:ZL,newsletterCont:e3},t3=()=>p("div",{className:Up.newsletter,children:p(tn,{className:Up.newsletterCont,children:R("form",{method:"get",children:[p("input",{type:"email",id:"",placeholder:"\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A"}),p("button",{className:Up.btn,children:"\u0627\u0634\u062A\u0631\u0643 \u0627\u0644\u0627\u0646"})]})})});function n3(){return R(wt,{children:[p(LL,{}),p(WL,{}),p(JL,{}),p(t3,{})]})}const r3="_footerContainer_1lak3_11",i3="_top_1lak3_19",s3="_title_1lak3_31",o3="_menu_1lak3_43",a3="_contact_1lak3_45",l3="_location_1lak3_47",u3="_bottom_1lak3_123",rn={footerContainer:r3,top:i3,title:s3,menu:o3,contact:a3,location:l3,bottom:u3},c3=()=>R("footer",{className:rn.footer,children:[p(tn,{className:rn.footerContainer,children:R("div",{className:rn.top,children:[R("div",{className:rn.menu,children:[p("h3",{className:rn.title,children:"\u0627\u0644\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"}),p(Ir,{to:"/",children:"\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"}),p(Ir,{to:"/create-trip",children:"\u0627\u0635\u0646\u0639 \u0631\u062D\u0644\u062A\u0643"}),p(Ir,{to:"/about",children:"\u0645\u0646 \u0646\u062D\u0646"}),p(Ir,{to:"/contact",children:"\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"})]}),R("div",{className:rn.contact,children:[p("h3",{className:rn.title,children:"\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"}),R("div",{className:rn.email,children:[p(Ee,{icon:mL}),p("a",{target:"_blank",href:"mailto:silverjarz@outlook.com",children:"silverjarz@outlook.com"})]}),R("div",{className:rn.phone,children:[p(Ee,{icon:hL}),p("span",{children:"01000000000"})]}),R("div",{className:rn.address,children:[p(Ee,{icon:wL}),p("span",{children:"\u0627\u0644\u0642\u0627\u0647\u0631\u0629 - \u0645\u0635\u0631"})]})]}),R("div",{className:rn.location,children:[p("h3",{className:rn.title,children:"\u0645\u0648\u0642\u0639\u0646\u0627 \u0639\u0644\u0649 \u0627\u0644\u062E\u0631\u064A\u0637\u0629"}),p("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.1856523705865!2d31.317204215306866!3d30.08886892342716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14583e2f516afbb9%3A0xf970104d0edfceb4!2z2YLYtdixINin2YTYpdiq2K3Yp9iv2YrYqQ!5e0!3m2!1sen!2seg!4v1679746568402!5m2!1sen!2seg",style:{border:0},allowFullScreen:"",loading:"lazy",referrerPolicy:"no-referrer-when-downgrade"})]})]})}),R("div",{className:rn.bottom,children:["\u062C\u0645\u064A\u0639 \u0627\u0644\u062D\u0642\u0648\u0642 \u0645\u062D\u0641\u0648\u0638\u0629 \u0644\u0634\u0631\u0643\u0629 \u0627\u0644\u062C\u0631\u0632 \u0627\u0644\u0641\u0636\u064A \u0644\u0644\u0633\u064A\u0627\u062D\u0629 \u0648\u0627\u0644\u0633\u0641\u0631",p("span",{className:rn.year,children:"2023"})]})]}),d3="_logo_hgho3_29",f3="_active_hgho3_109",h3="_container_hgho3_215",p3="_shown_hgho3_321",Fn={"nav-container":"_nav-container_hgho3_13",logo:d3,"main-menu":"_main-menu_hgho3_49",active:f3,"sub-menu":"_sub-menu_hgho3_157","logo-phone":"_logo-phone_hgho3_203",container:h3,shown:p3},m3="/assets/logo-white.66b1fea8.png",g3="_hamburger_16oku_15",Ac={hamburger:g3,"is-active":"_is-active_16oku_45","hamburger-inner":"_hamburger-inner_16oku_53","hamburger-box":"_hamburger-box_16oku_63","hamburger--3dx":"_hamburger--3dx_16oku_131","hamburger--3dx-r":"_hamburger--3dx-r_16oku_173","hamburger--3dy":"_hamburger--3dy_16oku_215","hamburger--3dy-r":"_hamburger--3dy-r_16oku_257","hamburger--3dxy":"_hamburger--3dxy_16oku_299","hamburger--3dxy-r":"_hamburger--3dxy-r_16oku_341","hamburger--arrow":"_hamburger--arrow_16oku_383","hamburger--arrow-r":"_hamburger--arrow-r_16oku_395","hamburger--arrowalt":"_hamburger--arrowalt_16oku_407","hamburger--arrowalt-r":"_hamburger--arrowalt-r_16oku_447","hamburger--arrowturn":"_hamburger--arrowturn_16oku_487","hamburger--arrowturn-r":"_hamburger--arrowturn-r_16oku_505","hamburger--boring":"_hamburger--boring_16oku_523","hamburger--collapse":"_hamburger--collapse_16oku_555","hamburger--collapse-r":"_hamburger--collapse-r_16oku_621","hamburger--elastic":"_hamburger--elastic_16oku_687","hamburger--elastic-r":"_hamburger--elastic-r_16oku_737","hamburger--emphatic":"_hamburger--emphatic_16oku_787","hamburger--emphatic-r":"_hamburger--emphatic-r_16oku_859","hamburger--minus":"_hamburger--minus_16oku_931","hamburger--slider":"_hamburger--slider_16oku_961","hamburger--slider-r":"_hamburger--slider-r_16oku_1005","hamburger--spin":"_hamburger--spin_16oku_1049","hamburger--spin-r":"_hamburger--spin-r_16oku_1103","hamburger--spring":"_hamburger--spring_16oku_1157","hamburger--spring-r":"_hamburger--spring-r_16oku_1217","hamburger--stand":"_hamburger--stand_16oku_1283","hamburger--stand-r":"_hamburger--stand-r_16oku_1343","hamburger--squeeze":"_hamburger--squeeze_16oku_1403","hamburger--vortex":"_hamburger--vortex_16oku_1457","hamburger--vortex-r":"_hamburger--vortex-r_16oku_1521"},v3=()=>{const[t,e]=M.exports.useState(!1),n=()=>{e(!t)};return p("nav",{children:R(tn,{className:Fn["nav-container"],children:[p("div",{className:Fn.logo,children:p(Ir,{to:"/",children:p("img",{src:m3,alt:"SilverJarz"})})}),p("button",{className:`${Ac.hamburger} ${Ac["hamburger--slider"]}`,type:"button",onClick:n,children:p("span",{className:Ac["hamburger-box"],children:p("span",{className:Ac["hamburger-inner"]})})}),R("ul",{className:`${Fn["main-menu"]} ${Fn.nav} ${t?Fn.active:""}`,children:[p("li",{children:p(js,{to:"/",className:({isActive:r,isPending:i})=>i?"pending":r?`${Fn.active}`:"",children:"\u0627\u0644\u0631\u0626\u064A\u0633\u064A\u0629"})}),p("li",{children:p(js,{to:"./visas",className:({isActive:r,isPending:i})=>i?"pending":r?`${Fn.active}`:"",children:"\u062A\u0623\u0634\u064A\u0631\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629"})}),p("li",{children:p(js,{to:"./tickets",className:({isActive:r,isPending:i})=>i?"pending":r?`${Fn.active}`:"",children:"\u062D\u062C\u0632 \u062A\u0630\u0627\u0643\u0631 \u0637\u064A\u0631\u0627\u0646"})}),p("li",{children:p(js,{to:"./tours",className:({isActive:r,isPending:i})=>i?"pending":r?`${Fn.active}`:"",children:"\u062C\u0648\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629"})}),p("li",{children:p(js,{to:"./car-rental",className:({isActive:r,isPending:i})=>i?"pending":r?`${Fn.active}`:"",children:"\u062A\u0623\u062C\u064A\u0631 \u0633\u064A\u0627\u0631\u0627\u062A"})}),p("li",{children:p(js,{to:"./contact",className:({isActive:r,isPending:i})=>i?"pending":r?`${Fn.active}`:"",children:"\u0627\u062A\u0635\u0644 \u0628\u0646\u0627"})})]})]})})};function y3(){const{pathname:t}=la();return M.exports.useEffect(()=>{window.scrollTo({top:0,behavior:"smooth"})},[t]),null}function _3(){return R(wt,{children:[p(v3,{}),p(y3,{}),p(rN,{}),p(c3,{})]})}var w3={prefix:"far",iconName:"star",icon:[576,512,[11088,61446],"f005","M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.6 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"]},E3={prefix:"far",iconName:"handshake",icon:[640,512,[],"f2b5","M272.2 64.6l-51.1 51.1c-15.3 4.2-29.5 11.9-41.5 22.5L153 161.9C142.8 171 129.5 176 115.8 176H96V304c20.4 .6 39.8 8.9 54.3 23.4l35.6 35.6 7 7 0 0L219.9 397c6.2 6.2 16.4 6.2 22.6 0c1.7-1.7 3-3.7 3.7-5.8c2.8-7.7 9.3-13.5 17.3-15.3s16.4 .6 22.2 6.5L296.5 393c11.6 11.6 30.4 11.6 41.9 0c5.4-5.4 8.3-12.3 8.6-19.4c.4-8.8 5.6-16.6 13.6-20.4s17.3-3 24.4 2.1c9.4 6.7 22.5 5.8 30.9-2.6c9.4-9.4 9.4-24.6 0-33.9L340.1 243l-35.8 33c-27.3 25.2-69.2 25.6-97 .9c-31.7-28.2-32.4-77.4-1.6-106.5l70.1-66.2C303.2 78.4 339.4 64 377.1 64c36.1 0 71 13.3 97.9 37.2L505.1 128H544h40 40c8.8 0 16 7.2 16 16V352c0 17.7-14.3 32-32 32H576c-11.8 0-22.2-6.4-27.7-16H463.4c-3.4 6.7-7.9 13.1-13.5 18.7c-17.1 17.1-40.8 23.8-63 20.1c-3.6 7.3-8.5 14.1-14.6 20.2c-27.3 27.3-70 30-100.4 8.1c-25.1 20.8-62.5 19.5-86-4.1L159 404l-7-7-35.6-35.6c-5.5-5.5-12.7-8.7-20.4-9.3C96 369.7 81.6 384 64 384H32c-17.7 0-32-14.3-32-32V144c0-8.8 7.2-16 16-16H56 96h19.8c2 0 3.9-.7 5.3-2l26.5-23.6C175.5 77.7 211.4 64 248.7 64H259c4.4 0 8.9 .2 13.2 .6zM544 320V176H496c-5.9 0-11.6-2.2-15.9-6.1l-36.9-32.8c-18.2-16.2-41.7-25.1-66.1-25.1c-25.4 0-49.8 9.7-68.3 27.1l-70.1 66.2c-10.3 9.8-10.1 26.3 .5 35.7c9.3 8.3 23.4 8.1 32.5-.3l71.9-66.4c9.7-9 24.9-8.4 33.9 1.4s8.4 24.9-1.4 33.9l-.8 .8 74.4 74.4c10 10 16.5 22.3 19.4 35.1H544zM64 336a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm528 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32z"]},T3={prefix:"far",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]};const S3="_testimonial_emcg2_1",b3="_user_emcg2_35",I3="_details_emcg2_61",k3="_stars_emcg2_87",Bs={testimonial:S3,user:b3,details:I3,stars:k3},A3=({title:t,content:e,author:n,stars:r,image:i})=>R("div",{className:Bs.testimonial,children:[p("div",{className:Bs.user,children:p("img",{src:i,alt:""})}),R("div",{className:Bs.details,children:[p("h3",{className:Bs.title,children:t}),p("p",{children:e}),p("h3",{className:Bs.author,children:n}),p("div",{className:Bs.stars,children:Array.from({length:5}).map((s,o)=>p(Ee,{icon:o<r?mn:w3},o))})]})]});const R3="_bold_x8xbh_15",Gw={"main-heading":"_main-heading_x8xbh_1",bold:R3},sk=({text:t,bold:e})=>R("h2",{className:Gw["main-heading"],children:[t," ",p("span",{className:Gw.bold,children:e})]}),C3=()=>p("section",{className:"reviews",children:R(tn,{className:"revCont",children:[p(sk,{text:"See what Our Customers are",bold:"Saying"}),p(Yf,{...{dots:!1,infinite:!0,pauseOnHover:!1,speed:500,slidesToShow:3,slidesToScroll:1,autoplay:!0,autoplaySpeed:3e3,nextArrow:p(wt,{}),prevArrow:p(wt,{}),responsive:[{breakpoint:768,settings:{slidesToShow:1.2}}]},children:[{title:"Customer Service at its finest",content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quod, voluptatum, quia, voluptas quas voluptatem quae exercitationem voluptates quibusdam quidem quos. Quisquam voluptates, quae, quibusdam, quos quod voluptas quidem voluptatem.",author:"Steve Jobs",stars:5,image:"../../src/assets/images/users/steve.jpg"},{title:"Efficient Visa Processing",content:"Getting my visa processed through SilverJarz was a breeze. They handled everything swiftly and professionally. I'll definitely use their services again in the future.",author:"Mary Johnson",stars:5,image:"../../src/assets/images/users/mary.jpg"},{title:"Fantastic Travel Experience",content:"I had the most amazing travel experience with SilverJarz. Their attention to detail and excellent customer service made the trip unforgettable. Highly recommended!",author:"John Smith",stars:4,image:"../../src/assets/images/users/john.jpg"},{title:"Efficient Visa Processing",content:"Getting my visa processed through SilverJarz was a breeze. They handled everything swiftly and professionally. I'll definitely use their services again in the future.",author:"Mary Johnson",stars:5,image:"../../src/assets/images/users/mary.jpg"}].map((n,r)=>p(A3,{...n},r))})]})}),P3="_title_f2e7t_15",x3="_info_f2e7t_39",N3="_price_f2e7t_79",O3="_type_f2e7t_99",D3="_regular_f2e7t_267",L3="_express_f2e7t_267",M3="_button_f2e7t_283",V3="_btn_f2e7t_293",dn={"visa-type":"_visa-type_f2e7t_1",title:P3,info:x3,price:N3,"type-selector":"_type-selector_f2e7t_99",type:O3,regular:D3,express:L3,button:M3,btn:V3},F3=({regular:t,express:e,stay:n,dest:r,index:i})=>{const[s,o]=M.exports.useState(!0),[a,l]=M.exports.useState(t),u=()=>{o(c=>!c)};return M.exports.useEffect(()=>{(()=>{l(s?t:e)})()},[s]),R("div",{className:`${dn["visa-type"]} ${s?dn.regular:dn.express}`,children:[p("a",{href:"#",className:dn.title,children:R("div",{children:[p("h3",{children:n}),R("p",{children:[r," Visa"]})]})}),R("div",{className:dn.info,children:[R("div",{className:dn.price,children:[p("span",{children:"$"}),p("span",{className:"amount","data-regular":"225","data-express":"295",children:a})]}),R("div",{className:dn["type-selector"],children:[p("div",{children:p("span",{children:"Regular"})}),R("div",{className:dn.input,children:[p("input",{type:"checkbox",id:`type-switch-${i}`,className:"type-switch",onChange:u}),p("label",{htmlFor:`type-switch-${i}`})]}),p("div",{children:p("span",{children:"Express"})})]})]}),R("div",{className:dn.type,children:[p("div",{className:dn.regular,children:R("ul",{children:[R("li",{children:[p("p",{children:"Service Type"}),"Regular Visa-Single Entry"]}),R("li",{children:[p("p",{children:"Processing Time"}),"1-3 working days"]}),R("li",{children:[p("p",{children:"Validity"}),"60 days from the date of issue"]}),R("li",{children:[p("p",{children:"Stay Period"}),n," from the date of entry"]})]})}),p("div",{className:dn.express,children:R("ul",{children:[R("li",{children:[p("p",{children:"Service Type"}),"Express Visa-Single Entry"]}),R("li",{children:[p("p",{children:"Processing Time"}),"Within 24 Hours"]}),R("li",{children:[p("p",{children:"Validity"}),"60 days from the date of issue"]}),R("li",{children:[p("p",{children:"Stay Period"}),n," from the date of entry"]})]})})]}),p("div",{children:p("div",{className:dn.button,children:p(Wo,{className:dn.btn,to:"#",children:"Apply now"})})})]})},q3="_visaCont_18nii_1",U3="_types_18nii_9",Qw={visaCont:q3,types:U3},$3=[{regular:"225",express:"295",stay:"30 Days"},{regular:"180",express:"250",stay:"14 Days"},{regular:"350",express:"450",stay:"90 Days"},{regular:"120",express:"200",stay:"7 Days"},{regular:"400",express:"550",stay:"60 Days"},{regular:"250",express:"320",stay:"45 Days"},{regular:"320",express:"420",stay:"15 Days"},{regular:"280",express:"380",stay:"21 Days"}],z3=({selectedCountry:t})=>p("section",{children:R(tn,{className:Qw.visaCont,children:[p(sk,{text:"Most Popular",bold:"Dubai Visas"}),p("div",{className:Qw.types,children:$3.map((e,n)=>p(F3,{regular:e.regular,express:e.express,stay:e.stay,dest:t,index:n},n))})]})}),j3="_container_sui5w_1",B3="_center_sui5w_31",H3="_left_sui5w_37",W3="_right_sui5w_37",Xi={container:j3,"why-us":"_why-us_sui5w_9","why-boxes":"_why-boxes_sui5w_19",center:B3,left:H3,right:W3},$p=[{icon:gL,title:"Save Time & Effort",subtitle:"By Booking Online!"},{icon:vL,title:"Real Time",subtitle:"Tracking"},{icon:pL,title:"Visa",subtitle:"Consultation"},{icon:T3,title:"Some Regular Icon",subtitle:"Subtitle Regular"},{icon:SL,title:"Safety, Security",subtitle:"& Transparency"},{icon:cL,title:"24x7",subtitle:"Customer Support"},{icon:E3,title:"Facilitation of Booking",subtitle:"Appointment with Embassy"}],K3=()=>{const t=$p.slice(0,3),e=$p.slice($p.length-3);return R("section",{className:Xi["why-us"],children:[p(th,{children:"Why Book with SilverJarz"}),p("p",{children:"Celebrating 300,000 happy customers and endless memories for a lifetime."}),p(tn,{className:Xi.container,children:R("div",{className:Xi["why-boxes"],children:[p("div",{className:Xi.left,children:t.map((n,r)=>R("div",{children:[p(Ee,{icon:n.icon}),R("h3",{children:[n.title,p("span",{children:n.subtitle})]})]},r))}),R("div",{className:Xi.center,children:[p("div",{className:Xi["vsc-controller"]}),p("video",{width:"100%",controls:!0,children:p("source",{src:"https://www.houseoftours.com/10kLove/hoft-video.mp4",type:"video/mp4"})})]}),p("div",{className:Xi.right,children:e.map((n,r)=>R("div",{children:[p(Ee,{icon:n.icon}),R("h3",{children:[n.title,p("span",{children:n.subtitle})]})]},r))})]})})]})},G3=()=>p("section",{className:"offers",children:R(tn,{className:ik.offersCont,children:[p(th,{children:"Visa Blog"}),p("div",{className:"container",children:p(rk,{})})]})}),Q3="_csCont_18i8f_1",zp={csCont:Q3,"country-flag-container":"_country-flag-container_18i8f_9","flag-image":"_flag-image_18i8f_29"};const Y3=[{name:"United Arab Emirates",flag:"../../src/assets/images/countries/uae.jpg"},{name:"Saudi Arabia",flag:"../../src/assets/images/countries/ksa.jpg"},{name:"Oman",flag:"../../src/assets/images/countries/oman.png"},{name:"Schengen",flag:"../../src/assets/images/countries/eu.png"},{name:"United Kingdom",flag:"../../src/assets/images/countries/uk.png"}],X3=({onCountrySelect:t})=>{const e=r=>{const i=r.target.dataset.name;t(i)},n={infinite:!0,slidesToShow:6,slidesToScroll:1,autoplay:!1,dots:!1};return p("section",{className:"countries",children:p(tn,{className:zp.csCont,children:p(Yf,{...n,children:Y3.map((r,i)=>p("button",{className:zp["country-flag-container"],"data-name":r.name,onClick:e,children:p("img",{src:r.flag,alt:`Flag of ${r.name}`,className:zp["flag-image"],"data-name":r.name})},i))})})})},J3=()=>{const[t,e]=M.exports.useState("UAE");return R(wt,{children:[p(X3,{onCountrySelect:r=>{e(r)}}),p(z3,{selectedCountry:t}),p(C3,{}),p(K3,{}),p(G3,{})]})},Z3="_headContainer_ajnvs_37",eM="_content_ajnvs_65",tM="_btn_ajnvs_93",nM="_bounce_ajnvs_1",Hs={"landing-sec":"_landing-sec_ajnvs_1",headContainer:Z3,content:eM,btn:tM,"go-down":"_go-down_ajnvs_123",bounce:nM},rM="_container_1gy3s_1",iM={container:rM},sM=({children:t,className:e})=>p("div",{className:`${iM.container} ${e}`,children:t}),oM="_btn_1ggl7_1",aM={btn:oM},lM=t=>p(Ir,{to:t.to,className:`${aM.btn} ${t.className}`,children:t.children}),Hy=({title:t,description:e,btnText:n,to:r,landingBg:i,isneedBtn:s,className:o})=>{const a={"--landing-bg":`url(${i})`};return p("div",{className:`${Hs["landing-sec"]} ${o}`,style:a,children:R(sM,{className:Hs.headContainer,children:[R("div",{className:Hs.content,children:[p("h1",{children:t}),p("p",{children:e}),s&&p(lM,{to:r,className:Hs.btn,children:n})]}),p("a",{href:r,className:Hs["go-down"],children:p(Ee,{icon:nk,className:Hs["fa-2x"]})})]})})},uM="_box_hxldt_1",cM="_content_hxldt_43",dM="_info_hxldt_73",Rc={box:uM,content:cM,info:dM,"arrow-move":"_arrow-move_hxldt_1"},Wy=({title:t,imageSrc:e,description:n,to:r})=>R("div",{className:Rc.box,children:[p("img",{src:e,alt:""}),R("div",{className:Rc.content,children:[p("h3",{children:t}),p("p",{children:n})]}),R("div",{className:Rc.info,children:[p(Ir,{to:r,children:"Read More"}),p(Ee,{icon:yL,className:Rc.arrowIcon})]})]}),fM="_PostsGrid_1kjkc_1",hM="_cont_1kjkc_13",Yw={PostsGrid:fM,cont:hM},Ky=({id:t,children:e})=>p("section",{className:Yw.PostsGrid,id:t,children:p(tn,{className:Yw.cont,children:e})}),pM=()=>{const t=e=>e.split(" ").slice(0,7).join(" ");return R(wt,{children:[p(Hy,{title:"\u062D\u062C\u0632 \u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u0637\u064A\u0631\u0627\u0646",description:"\u062D\u062C\u0632 \u062A\u0630\u0627\u0643\u0631 \u0627\u0644\u0637\u064A\u0631\u0627\u0646 \u0627\u0644\u062F\u0648\u0644\u064A\u0629 \u0648\u0627\u0644\u0645\u062D\u0644\u064A\u0629 \u0628\u0643\u0644 \u0633\u0647\u0648\u0644\u0629 \u0648\u0623\u0641\u0636\u0644 \u0627\u0644\u0623\u0633\u0639\u0627\u0631",btnText:"\u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646",to:"#tickets",landingBg:"../src/assets/images/tickets/plane.jpg",isneedBtn:!0}),p(Ky,{id:"tickets",children:Iu.map((e,n)=>p(Wy,{title:e.title,imageSrc:e.imageSrc,description:t(e.description)+"...",to:`/tickets/${e.id}`},n))})]})},mM=()=>{const t=e=>e.split(" ").slice(0,7).join(" ");return R(wt,{children:[p(Hy,{title:"\u062A\u0646\u0638\u064A\u0645 \u062C\u0648\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629",description:"\u062A\u0646\u0638\u064A\u0645 \u062C\u0648\u0644\u0627\u062A \u0633\u064A\u0627\u062D\u064A\u0629 \u062F\u0627\u062E\u0644\u064A\u0629 \u0648\u062E\u0627\u0631\u062C\u064A\u0629 \u0628\u0643\u0644 \u0633\u0647\u0648\u0644\u0629 \u0648\u0623\u0641\u0636\u0644 \u0627\u0644\u0623\u0633\u0639\u0627\u0631",btnText:"\u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646",to:"#tours",landingBg:"../src/assets/images/tours/tourism.jpg",isneedBtn:!0}),p(Ky,{id:"tours",children:Iu.map((e,n)=>p(Wy,{title:e.title,imageSrc:e.imageSrc,description:t(e.description)+"...",to:`/tours/${e.id}`},n))})]})},ok=[{id:"tesla-model-s",imageSrc:"src/assets/images/cars/car1.jpg",title:"Tesla Model S",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis minus cum vero ratione dolor. Similique nemo eaque in explicabo debitis?",feats:[{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}],faq:[{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}]},{id:"bmw-3-series",imageSrc:"src/assets/images/cars/car2.jpg",title:"BMW 3 Series",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",feats:[{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}],faq:[{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}]},{id:"ford-mustang",imageSrc:"src/assets/images/cars/car3.jpg",title:"Ford Mustang",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",feats:[{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}],faq:[{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}]},{id:"audi-a4",imageSrc:"src/assets/images/cars/car4.jpg",title:"Audi A4",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",feats:[{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}],faq:[{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}]},{id:"mercedes-benz-e-class",imageSrc:"src/assets/images/cars/car5.jpg",title:"Mercedes-Benz E-Class",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur, temporibus quo ipsam officia ab quaerat voluptatibus voluptatem similique illo, culpa quos corrupti! Magnam molestiae temporibus eaque obcaecati dolores laudantium sapiente repellat, quod, aliquid omnis voluptates beatae fugiat accusamus voluptatum amet incidunt totam unde. Saepe delectus quos, assumenda illo quod, cum, exercitationem optio aliquid neque non corrupti culpa eligendi nisi id veniam odit pariatur praesentium ducimus sed et aliquam labore velit est. Inventore rem pariatur delectus atque quod voluptas tempore!",feats:[{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}],faq:[{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}]},{id:"chevrolet-camaro",imageSrc:"src/assets/images/cars/car6.jpg",title:"Chevrolet Camaro",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",feats:[{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}],faq:[{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}]},{id:"toyota-corolla",imageSrc:"src/assets/images/cars/car7.jpg",title:"Toyota Corolla",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",feats:[{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}],faq:[{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}]},{id:"honda-civic",imageSrc:"src/assets/images/cars/car8.jpg",title:"Honda Civic",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit.",feats:[{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Cool Title",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}],faq:[{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"},{title:"Does it have a sunroof?",description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam inventore, expedita laborum, non praesentium nulla vero a, quae vel quos nesciunt. Nisi maxime, voluptates sequi sunt quod quam quas consectetur"}]}],gM="/assets/cars.02254e6a.jpg";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ak=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},vM=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},lk={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,c=s>>2,d=(s&3)<<4|a>>4;let f=(a&15)<<2|u>>6,m=u&63;l||(m=64,o||(f=64)),r.push(n[c],n[d],n[f],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ak(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):vM(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw new yM;const f=s<<2|a>>4;if(r.push(f),u!==64){const m=a<<4&240|u>>2;if(r.push(m),d!==64){const w=u<<6&192|d;r.push(w)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class yM extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const _M=function(t){const e=ak(t);return lk.encodeByteArray(e,!0)},Jd=function(t){return _M(t).replace(/\./g,"")},uk=function(t){try{return lk.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Zd(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!wM(n)||(t[n]=Zd(t[n],e[n]));return t}function wM(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EM(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TM=()=>EM().__FIREBASE_DEFAULTS__,SM=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bM=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&uk(t[1]);return e&&JSON.parse(e)},nh=()=>{try{return TM()||SM()||bM()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ck=t=>{var e,n;return(n=(e=nh())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},dk=t=>{const e=ck(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},fk=()=>{var t;return(t=nh())===null||t===void 0?void 0:t.config},hk=t=>{var e;return(e=nh())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pk(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[Jd(JSON.stringify(n)),Jd(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function kM(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ot())}function Gy(){var t;const e=(t=nh())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function AM(){return typeof self=="object"&&self.self===self}function mk(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Qy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function gk(){const t=ot();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ef(){try{return typeof indexedDB=="object"}catch{return!1}}function RM(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CM="FirebaseError";class zt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=CM,Object.setPrototypeOf(this,zt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ms.prototype.create)}}class Ms{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?PM(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new zt(i,a,r)}}function PM(t,e){return t.replace(xM,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const xM=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xw(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function NM(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function tf(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Jw(s)&&Jw(o)){if(!tf(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Jw(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function go(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ga(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function vk(t,e){const n=new OM(t,e);return n.subscribe.bind(n)}class OM{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");DM(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=jp),i.error===void 0&&(i.error=jp),i.complete===void 0&&(i.complete=jp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function DM(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function jp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ae(t){return t&&t._delegate?t._delegate:t}class pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LM{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new IM;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(VM(e))try{this.getOrInitializeService({instanceIdentifier:es})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=es){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=es){return this.instances.has(e)}getOptions(e=es){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:MM(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=es){return this.component?this.component.multipleInstances?e:es:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function MM(t){return t===es?void 0:t}function VM(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FM{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new LM(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yy=[];var ve;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ve||(ve={}));const yk={debug:ve.DEBUG,verbose:ve.VERBOSE,info:ve.INFO,warn:ve.WARN,error:ve.ERROR,silent:ve.SILENT},qM=ve.INFO,UM={[ve.DEBUG]:"log",[ve.VERBOSE]:"log",[ve.INFO]:"info",[ve.WARN]:"warn",[ve.ERROR]:"error"},$M=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=UM[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class rh{constructor(e){this.name=e,this._logLevel=qM,this._logHandler=$M,this._userLogHandler=null,Yy.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yk[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ve.DEBUG,...e),this._logHandler(this,ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ve.VERBOSE,...e),this._logHandler(this,ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ve.INFO,...e),this._logHandler(this,ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ve.WARN,...e),this._logHandler(this,ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ve.ERROR,...e),this._logHandler(this,ve.ERROR,...e)}}function zM(t){Yy.forEach(e=>{e.setLogLevel(t)})}function jM(t,e){for(const n of Yy){let r=null;e&&e.level&&(r=yk[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ve[s].toLowerCase(),message:a,args:o,type:i.name})}}}const BM=(t,e)=>e.some(n=>t instanceof n);let Zw,eE;function HM(){return Zw||(Zw=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function WM(){return eE||(eE=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _k=new WeakMap,zg=new WeakMap,wk=new WeakMap,Bp=new WeakMap,Xy=new WeakMap;function KM(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(ki(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_k.set(n,t)}).catch(()=>{}),Xy.set(e,t),e}function GM(t){if(zg.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});zg.set(t,e)}let jg={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return zg.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wk.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return ki(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function QM(t){jg=t(jg)}function YM(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Hp(this),e,...n);return wk.set(r,e.sort?e.sort():[e]),ki(r)}:WM().includes(t)?function(...e){return t.apply(Hp(this),e),ki(_k.get(this))}:function(...e){return ki(t.apply(Hp(this),e))}}function XM(t){return typeof t=="function"?YM(t):(t instanceof IDBTransaction&&GM(t),BM(t,HM())?new Proxy(t,jg):t)}function ki(t){if(t instanceof IDBRequest)return KM(t);if(Bp.has(t))return Bp.get(t);const e=XM(t);return e!==t&&(Bp.set(t,e),Xy.set(e,t)),e}const Hp=t=>Xy.get(t);function JM(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=ki(o);return r&&o.addEventListener("upgradeneeded",l=>{r(ki(o.result),l.oldVersion,l.newVersion,ki(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const ZM=["get","getKey","getAll","getAllKeys","count"],e5=["put","add","delete","clear"],Wp=new Map;function tE(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Wp.get(e))return Wp.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=e5.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||ZM.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return Wp.set(e,s),s}QM(t=>({...t,get:(e,n,r)=>tE(e,n)||t.get(e,n,r),has:(e,n)=>!!tE(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t5{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(n5(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function n5(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bg="@firebase/app",nE="0.9.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=new rh("@firebase/app"),r5="@firebase/app-compat",i5="@firebase/analytics-compat",s5="@firebase/analytics",o5="@firebase/app-check-compat",a5="@firebase/app-check",l5="@firebase/auth",u5="@firebase/auth-compat",c5="@firebase/database",d5="@firebase/database-compat",f5="@firebase/functions",h5="@firebase/functions-compat",p5="@firebase/installations",m5="@firebase/installations-compat",g5="@firebase/messaging",v5="@firebase/messaging-compat",y5="@firebase/performance",_5="@firebase/performance-compat",w5="@firebase/remote-config",E5="@firebase/remote-config-compat",T5="@firebase/storage",S5="@firebase/storage-compat",b5="@firebase/firestore",I5="@firebase/firestore-compat",k5="firebase",A5="10.1.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di="[DEFAULT]",R5={[Bg]:"fire-core",[r5]:"fire-core-compat",[s5]:"fire-analytics",[i5]:"fire-analytics-compat",[a5]:"fire-app-check",[o5]:"fire-app-check-compat",[l5]:"fire-auth",[u5]:"fire-auth-compat",[c5]:"fire-rtdb",[d5]:"fire-rtdb-compat",[f5]:"fire-fn",[h5]:"fire-fn-compat",[p5]:"fire-iid",[m5]:"fire-iid-compat",[g5]:"fire-fcm",[v5]:"fire-fcm-compat",[y5]:"fire-perf",[_5]:"fire-perf-compat",[w5]:"fire-rc",[E5]:"fire-rc-compat",[T5]:"fire-gcs",[S5]:"fire-gcs-compat",[b5]:"fire-fst",[I5]:"fire-fst-compat","fire-js":"fire-js",[k5]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Li=new Map,Gl=new Map;function nf(t,e){try{t.container.addComponent(e)}catch(n){As.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ek(t,e){t.container.addOrOverwriteComponent(e)}function $r(t){const e=t.name;if(Gl.has(e))return As.debug(`There were multiple attempts to register component ${e}.`),!1;Gl.set(e,t);for(const n of Li.values())nf(n,t);return!0}function da(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function C5(t,e,n=Di){da(t,e).clearInstance(n)}function P5(){Gl.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x5={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},xr=new Ms("app","Firebase",x5);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N5{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw xr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xr=A5;function ku(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Di,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw xr.create("bad-app-name",{appName:String(i)});if(n||(n=fk()),!n)throw xr.create("no-options");const s=Li.get(i);if(s){if(tf(n,s.options)&&tf(r,s.config))return s;throw xr.create("duplicate-app",{appName:i})}const o=new FM(i);for(const l of Gl.values())o.addComponent(l);const a=new N5(n,r,o);return Li.set(i,a),a}function ih(t=Di){const e=Li.get(t);if(!e&&t===Di&&fk())return ku();if(!e)throw xr.create("no-app",{appName:t});return e}function O5(){return Array.from(Li.values())}async function Tk(t){const e=t.name;Li.has(e)&&(Li.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function _n(t,e,n){var r;let i=(r=R5[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),As.warn(a.join(" "));return}$r(new pr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Sk(t,e){if(t!==null&&typeof t!="function")throw xr.create("invalid-log-argument");jM(t,e)}function bk(t){zM(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D5="firebase-heartbeat-database",L5=1,Ql="firebase-heartbeat-store";let Kp=null;function Ik(){return Kp||(Kp=JM(D5,L5,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ql)}}}).catch(t=>{throw xr.create("idb-open",{originalErrorMessage:t.message})})),Kp}async function M5(t){try{return await(await Ik()).transaction(Ql).objectStore(Ql).get(kk(t))}catch(e){if(e instanceof zt)As.warn(e.message);else{const n=xr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});As.warn(n.message)}}}async function rE(t,e){try{const r=(await Ik()).transaction(Ql,"readwrite");await r.objectStore(Ql).put(e,kk(t)),await r.done}catch(n){if(n instanceof zt)As.warn(n.message);else{const r=xr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});As.warn(r.message)}}}function kk(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V5=1024,F5=30*24*60*60*1e3;class q5{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new $5(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=iE();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=F5}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=iE(),{heartbeatsToSend:n,unsentEntries:r}=U5(this._heartbeatsCache.heartbeats),i=Jd(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function iE(){return new Date().toISOString().substring(0,10)}function U5(t,e=V5){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),sE(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),sE(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class $5{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ef()?RM().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await M5(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rE(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function sE(t){return Jd(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z5(t){$r(new pr("platform-logger",e=>new t5(e),"PRIVATE")),$r(new pr("heartbeat",e=>new q5(e),"PRIVATE")),_n(Bg,nE,t),_n(Bg,nE,"esm2017"),_n("fire-js","")}z5("");const j5=Object.freeze(Object.defineProperty({__proto__:null,SDK_VERSION:Xr,_DEFAULT_ENTRY_NAME:Di,_addComponent:nf,_addOrOverwriteComponent:Ek,_apps:Li,_clearComponents:P5,_components:Gl,_getProvider:da,_registerComponent:$r,_removeServiceInstance:C5,deleteApp:Tk,getApp:ih,getApps:O5,initializeApp:ku,onLog:Sk,registerVersion:_n,setLogLevel:bk,FirebaseError:zt},Symbol.toStringTag,{value:"Module"}));var B5=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},F,Jy=Jy||{},ie=B5||self;function sh(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Au(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function H5(t){return Object.prototype.hasOwnProperty.call(t,Gp)&&t[Gp]||(t[Gp]=++W5)}var Gp="closure_uid_"+(1e9*Math.random()>>>0),W5=0;function K5(t,e,n){return t.call.apply(t.bind,arguments)}function G5(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function jt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?jt=K5:jt=G5,jt.apply(null,arguments)}function Cc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function St(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Bi(){this.s=this.s,this.o=this.o}var Q5=0;Bi.prototype.s=!1;Bi.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Q5!=0)&&H5(this)};Bi.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ak=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Zy(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function oE(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(sh(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function Bt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Bt.prototype.h=function(){this.defaultPrevented=!0};var Y5=function(){if(!ie.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ie.addEventListener("test",()=>{},e),ie.removeEventListener("test",()=>{},e)}catch{}return t}();function Yl(t){return/^[\s\xa0]*$/.test(t)}function oh(){var t=ie.navigator;return t&&(t=t.userAgent)?t:""}function nr(t){return oh().indexOf(t)!=-1}function e0(t){return e0[" "](t),t}e0[" "]=function(){};function X5(t,e){var n=jV;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var J5=nr("Opera"),Ko=nr("Trident")||nr("MSIE"),Rk=nr("Edge"),Hg=Rk||Ko,Ck=nr("Gecko")&&!(oh().toLowerCase().indexOf("webkit")!=-1&&!nr("Edge"))&&!(nr("Trident")||nr("MSIE"))&&!nr("Edge"),Z5=oh().toLowerCase().indexOf("webkit")!=-1&&!nr("Edge");function Pk(){var t=ie.document;return t?t.documentMode:void 0}var Wg;e:{var Qp="",Yp=function(){var t=oh();if(Ck)return/rv:([^\);]+)(\)|;)/.exec(t);if(Rk)return/Edge\/([\d\.]+)/.exec(t);if(Ko)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(Z5)return/WebKit\/(\S+)/.exec(t);if(J5)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Yp&&(Qp=Yp?Yp[1]:""),Ko){var Xp=Pk();if(Xp!=null&&Xp>parseFloat(Qp)){Wg=String(Xp);break e}}Wg=Qp}var Kg;if(ie.document&&Ko){var aE=Pk();Kg=aE||parseInt(Wg,10)||void 0}else Kg=void 0;var eV=Kg;function Xl(t,e){if(Bt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ck){e:{try{e0(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:tV[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Xl.$.h.call(this)}}St(Xl,Bt);var tV={2:"touch",3:"pen",4:"mouse"};Xl.prototype.h=function(){Xl.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ru="closure_listenable_"+(1e6*Math.random()|0),nV=0;function rV(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=i,this.key=++nV,this.fa=this.ia=!1}function ah(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function t0(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function iV(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function xk(t){const e={};for(const n in t)e[n]=t[n];return e}const lE="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Nk(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<lE.length;s++)n=lE[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function lh(t){this.src=t,this.g={},this.h=0}lh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Qg(t,e,r,i);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new rV(e,this.src,s,!!r,i),e.ia=n,t.push(e)),e};function Gg(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=Ak(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ah(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Qg(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.fa&&s.listener==e&&s.capture==!!n&&s.la==r)return i}return-1}var n0="closure_lm_"+(1e6*Math.random()|0),Jp={};function Ok(t,e,n,r,i){if(r&&r.once)return Lk(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)Ok(t,e[s],n,r,i);return null}return n=s0(n),t&&t[Ru]?t.O(e,n,Au(r)?!!r.capture:!!r,i):Dk(t,e,n,!1,r,i)}function Dk(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Au(i)?!!i.capture:!!i,a=i0(t);if(a||(t[n0]=a=new lh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=sV(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)Y5||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(Vk(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function sV(){function t(n){return e.call(t.src,t.listener,n)}const e=oV;return t}function Lk(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)Lk(t,e[s],n,r,i);return null}return n=s0(n),t&&t[Ru]?t.P(e,n,Au(r)?!!r.capture:!!r,i):Dk(t,e,n,!0,r,i)}function Mk(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)Mk(t,e[s],n,r,i);else r=Au(r)?!!r.capture:!!r,n=s0(n),t&&t[Ru]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Qg(s,n,r,i),-1<n&&(ah(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=i0(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Qg(e,n,r,i)),(n=-1<t?e[t]:null)&&r0(n))}function r0(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ru])Gg(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Vk(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=i0(e))?(Gg(n,t),n.h==0&&(n.src=null,e[n0]=null)):ah(t)}}}function Vk(t){return t in Jp?Jp[t]:Jp[t]="on"+t}function oV(t,e){if(t.fa)t=!0;else{e=new Xl(e,this);var n=t.listener,r=t.la||t.src;t.ia&&r0(t),t=n.call(r,e)}return t}function i0(t){return t=t[n0],t instanceof lh?t:null}var Zp="__closure_events_fn_"+(1e9*Math.random()>>>0);function s0(t){return typeof t=="function"?t:(t[Zp]||(t[Zp]=function(e){return t.handleEvent(e)}),t[Zp])}function Et(){Bi.call(this),this.i=new lh(this),this.S=this,this.J=null}St(Et,Bi);Et.prototype[Ru]=!0;Et.prototype.removeEventListener=function(t,e,n,r){Mk(this,t,e,n,r)};function Pt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Bt(e,t);else if(e instanceof Bt)e.target=e.target||t;else{var i=e;e=new Bt(r,t),Nk(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=Pc(o,r,!0,e)&&i}if(o=e.g=t,i=Pc(o,r,!0,e)&&i,i=Pc(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=Pc(o,r,!1,e)&&i}Et.prototype.N=function(){if(Et.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ah(n[r]);delete t.g[e],t.h--}}this.J=null};Et.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Et.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Pc(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Gg(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var o0=ie.JSON.stringify;class aV{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function lV(){var t=a0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class uV{constructor(){this.h=this.g=null}add(e,n){const r=Fk.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Fk=new aV(()=>new cV,t=>t.reset());class cV{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dV(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function fV(t){ie.setTimeout(()=>{throw t},0)}let Jl,Zl=!1,a0=new uV,qk=()=>{const t=ie.Promise.resolve(void 0);Jl=()=>{t.then(hV)}};var hV=()=>{for(var t;t=lV();){try{t.h.call(t.g)}catch(n){fV(n)}var e=Fk;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Zl=!1};function uh(t,e){Et.call(this),this.h=t||1,this.g=e||ie,this.j=jt(this.qb,this),this.l=Date.now()}St(uh,Et);F=uh.prototype;F.ga=!1;F.T=null;F.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Pt(this,"tick"),this.ga&&(l0(this),this.start()))}};F.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function l0(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}F.N=function(){uh.$.N.call(this),l0(this),delete this.g};function u0(t,e,n){if(typeof t=="function")n&&(t=jt(t,n));else if(t&&typeof t.handleEvent=="function")t=jt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ie.setTimeout(t,e||0)}function Uk(t){t.g=u0(()=>{t.g=null,t.i&&(t.i=!1,Uk(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class pV extends Bi{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Uk(this)}N(){super.N(),this.g&&(ie.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function eu(t){Bi.call(this),this.h=t,this.g={}}St(eu,Bi);var uE=[];function $k(t,e,n,r){Array.isArray(n)||(n&&(uE[0]=n.toString()),n=uE);for(var i=0;i<n.length;i++){var s=Ok(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function zk(t){t0(t.g,function(e,n){this.g.hasOwnProperty(n)&&r0(e)},t),t.g={}}eu.prototype.N=function(){eu.$.N.call(this),zk(this)};eu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function ch(){this.g=!0}ch.prototype.Ea=function(){this.g=!1};function mV(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var c=u[0];u=u[1];var d=c.split("_");o=2<=d.length&&d[1]=="type"?o+(c+"="+u+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function gV(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function vo(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+yV(t,n)+(r?" "+r:"")})}function vV(t,e){t.info(function(){return"TIMEOUT: "+e})}ch.prototype.info=function(){};function yV(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return o0(n)}catch{return e}}var Vs={},cE=null;function dh(){return cE=cE||new Et}Vs.Ta="serverreachability";function jk(t){Bt.call(this,Vs.Ta,t)}St(jk,Bt);function tu(t){const e=dh();Pt(e,new jk(e))}Vs.STAT_EVENT="statevent";function Bk(t,e){Bt.call(this,Vs.STAT_EVENT,t),this.stat=e}St(Bk,Bt);function Xt(t){const e=dh();Pt(e,new Bk(e,t))}Vs.Ua="timingevent";function Hk(t,e){Bt.call(this,Vs.Ua,t),this.size=e}St(Hk,Bt);function Cu(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ie.setTimeout(function(){t()},e)}var fh={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Wk={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function c0(){}c0.prototype.h=null;function dE(t){return t.h||(t.h=t.i())}function Kk(){}var Pu={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function d0(){Bt.call(this,"d")}St(d0,Bt);function f0(){Bt.call(this,"c")}St(f0,Bt);var Yg;function hh(){}St(hh,c0);hh.prototype.g=function(){return new XMLHttpRequest};hh.prototype.i=function(){return{}};Yg=new hh;function xu(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new eu(this),this.P=_V,t=Hg?125:void 0,this.V=new uh(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Gk}function Gk(){this.i=null,this.g="",this.h=!1}var _V=45e3,Xg={},rf={};F=xu.prototype;F.setTimeout=function(t){this.P=t};function Jg(t,e,n){t.L=1,t.v=mh(zr(e)),t.s=n,t.S=!0,Qk(t,null)}function Qk(t,e){t.G=Date.now(),Nu(t),t.A=zr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),r2(n.i,"t",r),t.C=0,n=t.l.J,t.h=new Gk,t.g=b2(t.l,n?e:null,!t.s),0<t.O&&(t.M=new pV(jt(t.Pa,t,t.g),t.O)),$k(t.U,t.g,"readystatechange",t.nb),e=t.I?xk(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),tu(),mV(t.j,t.u,t.A,t.m,t.W,t.s)}F.nb=function(t){t=t.target;const e=this.M;e&&ar(t)==3?e.l():this.Pa(t)};F.Pa=function(t){try{if(t==this.g)e:{const c=ar(this.g);var e=this.g.Ia();const d=this.g.da();if(!(3>c)&&(c!=3||Hg||this.g&&(this.h.h||this.g.ja()||mE(this.g)))){this.J||c!=4||e==7||(e==8||0>=d?tu(3):tu(2)),ph(this);var n=this.g.da();this.ca=n;t:if(Yk(this)){var r=mE(this.g);t="";var i=r.length,s=ar(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){as(this),hl(this);var o="";break t}this.h.i=new ie.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,gV(this.j,this.u,this.A,this.m,this.W,c,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Yl(a)){var u=a;break t}}u=null}if(n=u)vo(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Zg(this,n);else{this.i=!1,this.o=3,Xt(12),as(this),hl(this);break e}}this.S?(Xk(this,c,o),Hg&&this.i&&c==3&&($k(this.U,this.V,"tick",this.mb),this.V.start())):(vo(this.j,this.m,o,null),Zg(this,o)),c==4&&as(this),this.i&&!this.J&&(c==4?w2(this.l,this):(this.i=!1,Nu(this)))}else UV(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Xt(12)):(this.o=0,Xt(13)),as(this),hl(this)}}}catch{}finally{}};function Yk(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function Xk(t,e,n){let r=!0,i;for(;!t.J&&t.C<n.length;)if(i=wV(t,n),i==rf){e==4&&(t.o=4,Xt(14),r=!1),vo(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Xg){t.o=4,Xt(15),vo(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else vo(t.j,t.m,i,null),Zg(t,i);Yk(t)&&i!=rf&&i!=Xg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Xt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),y0(e),e.M=!0,Xt(11))):(vo(t.j,t.m,n,"[Invalid Chunked Response]"),as(t),hl(t))}F.mb=function(){if(this.g){var t=ar(this.g),e=this.g.ja();this.C<e.length&&(ph(this),Xk(this,t,e),this.i&&t!=4&&Nu(this))}};function wV(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?rf:(n=Number(e.substring(n,r)),isNaN(n)?Xg:(r+=1,r+n>e.length?rf:(e=e.slice(r,r+n),t.C=r+n,e)))}F.cancel=function(){this.J=!0,as(this)};function Nu(t){t.Y=Date.now()+t.P,Jk(t,t.P)}function Jk(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Cu(jt(t.lb,t),e)}function ph(t){t.B&&(ie.clearTimeout(t.B),t.B=null)}F.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(vV(this.j,this.A),this.L!=2&&(tu(),Xt(17)),as(this),this.o=2,hl(this)):Jk(this,this.Y-t)};function hl(t){t.l.H==0||t.J||w2(t.l,t)}function as(t){ph(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,l0(t.V),zk(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function Zg(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||ev(n.i,t))){if(!t.K&&ev(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)af(n),yh(n);else break e;v0(n),Xt(18)}}else n.Fa=i[1],0<n.Fa-n.V&&37500>i[2]&&n.G&&n.A==0&&!n.v&&(n.v=Cu(jt(n.ib,n),6e3));if(1>=o2(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else ls(n,11)}else if((t.K||n.g==t)&&af(n),!Yl(e))for(i=n.Ja.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.V=u[0],u=u[1],n.H==2)if(u[0]=="c"){n.K=u[1],n.pa=u[2];const c=u[3];c!=null&&(n.ra=c,n.l.info("VER="+n.ra));const d=u[4];d!=null&&(n.Ga=d,n.l.info("SVER="+n.Ga));const f=u[5];f!=null&&typeof f=="number"&&0<f&&(r=1.5*f,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const w=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(w){var s=r.i;s.g||w.indexOf("spdy")==-1&&w.indexOf("quic")==-1&&w.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(h0(s,s.h),s.h=null))}if(r.F){const _=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(r.Da=_,Oe(r.I,r.F,_))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=S2(r,r.J?r.pa:null,r.Y),o.K){a2(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.B&&(ph(a),Nu(a)),r.g=o}else y2(r);0<n.j.length&&_h(n)}else u[0]!="stop"&&u[0]!="close"||ls(n,7);else n.H==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ls(n,7):g0(n):u[0]!="noop"&&n.h&&n.h.Aa(u),n.A=0)}}tu(4)}catch{}}function EV(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(sh(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function TV(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(sh(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Zk(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(sh(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=TV(t),r=EV(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var e2=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SV(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ps(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ps){this.h=t.h,sf(this,t.j),this.s=t.s,this.g=t.g,of(this,t.m),this.l=t.l;var e=t.i,n=new nu;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),fE(this,n),this.o=t.o}else t&&(e=String(t).match(e2))?(this.h=!1,sf(this,e[1]||"",!0),this.s=Qa(e[2]||""),this.g=Qa(e[3]||"",!0),of(this,e[4]),this.l=Qa(e[5]||"",!0),fE(this,e[6]||"",!0),this.o=Qa(e[7]||"")):(this.h=!1,this.i=new nu(null,this.h))}ps.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Ya(e,hE,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Ya(e,hE,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Ya(n,n.charAt(0)=="/"?kV:IV,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Ya(n,RV)),t.join("")};function zr(t){return new ps(t)}function sf(t,e,n){t.j=n?Qa(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function of(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function fE(t,e,n){e instanceof nu?(t.i=e,CV(t.i,t.h)):(n||(e=Ya(e,AV)),t.i=new nu(e,t.h))}function Oe(t,e,n){t.i.set(e,n)}function mh(t){return Oe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Qa(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ya(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,bV),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function bV(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var hE=/[#\/\?@]/g,IV=/[#\?:]/g,kV=/[#\?]/g,AV=/[#\?@]/g,RV=/#/g;function nu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Hi(t){t.g||(t.g=new Map,t.h=0,t.i&&SV(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}F=nu.prototype;F.add=function(t,e){Hi(this),this.i=null,t=fa(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function t2(t,e){Hi(t),e=fa(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function n2(t,e){return Hi(t),e=fa(t,e),t.g.has(e)}F.forEach=function(t,e){Hi(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};F.ta=function(){Hi(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};F.Z=function(t){Hi(this);let e=[];if(typeof t=="string")n2(this,t)&&(e=e.concat(this.g.get(fa(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};F.set=function(t,e){return Hi(this),this.i=null,t=fa(this,t),n2(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};F.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function r2(t,e,n){t2(t,e),0<n.length&&(t.i=null,t.g.set(fa(t,e),Zy(n)),t.h+=n.length)}F.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function fa(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function CV(t,e){e&&!t.j&&(Hi(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(t2(this,r),r2(this,i,n))},t)),t.j=e}var PV=class{constructor(t,e){this.g=t,this.map=e}};function i2(t){this.l=t||xV,ie.PerformanceNavigationTiming?(t=ie.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ie.g&&ie.g.Ka&&ie.g.Ka()&&ie.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var xV=10;function s2(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function o2(t){return t.h?1:t.g?t.g.size:0}function ev(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function h0(t,e){t.g?t.g.add(e):t.h=e}function a2(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}i2.prototype.cancel=function(){if(this.i=l2(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function l2(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Zy(t.i)}var NV=class{stringify(t){return ie.JSON.stringify(t,void 0)}parse(t){return ie.JSON.parse(t,void 0)}};function OV(){this.g=new NV}function DV(t,e,n){const r=n||"";try{Zk(t,function(i,s){let o=i;Au(i)&&(o=o0(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function LV(t,e){const n=new ch;if(ie.Image){const r=new Image;r.onload=Cc(xc,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Cc(xc,n,r,"TestLoadImage: error",!1,e),r.onabort=Cc(xc,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Cc(xc,n,r,"TestLoadImage: timeout",!1,e),ie.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function xc(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function Ou(t){this.l=t.fc||null,this.j=t.ob||!1}St(Ou,c0);Ou.prototype.g=function(){return new gh(this.l,this.j)};Ou.prototype.i=function(t){return function(){return t}}({});function gh(t,e){Et.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=p0,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}St(gh,Et);var p0=0;F=gh.prototype;F.open=function(t,e){if(this.readyState!=p0)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ru(this)};F.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ie).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};F.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Du(this)),this.readyState=p0};F.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ru(this)),this.g&&(this.readyState=3,ru(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ie.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;u2(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function u2(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}F.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Du(this):ru(this),this.readyState==3&&u2(this)}};F.Za=function(t){this.g&&(this.response=this.responseText=t,Du(this))};F.Ya=function(t){this.g&&(this.response=t,Du(this))};F.ka=function(){this.g&&Du(this)};function Du(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ru(t)}F.setRequestHeader=function(t,e){this.v.append(t,e)};F.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};F.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ru(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var MV=ie.JSON.parse;function Qe(t){Et.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=c2,this.L=this.M=!1}St(Qe,Et);var c2="",VV=/^https?$/i,FV=["POST","PUT"];F=Qe.prototype;F.Oa=function(t){this.M=t};F.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Yg.g(),this.C=this.u?dE(this.u):dE(Yg),this.g.onreadystatechange=jt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(s){pE(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=ie.FormData&&t instanceof ie.FormData,!(0<=Ak(FV,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{h2(this),0<this.B&&((this.L=qV(this.g))?(this.g.timeout=this.B,this.g.ontimeout=jt(this.ua,this)):this.A=u0(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){pE(this,s)}};function qV(t){return Ko&&typeof t.timeout=="number"&&t.ontimeout!==void 0}F.ua=function(){typeof Jy<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Pt(this,"timeout"),this.abort(8))};function pE(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,d2(t),vh(t)}function d2(t){t.F||(t.F=!0,Pt(t,"complete"),Pt(t,"error"))}F.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Pt(this,"complete"),Pt(this,"abort"),vh(this))};F.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),vh(this,!0)),Qe.$.N.call(this)};F.La=function(){this.s||(this.G||this.v||this.l?f2(this):this.kb())};F.kb=function(){f2(this)};function f2(t){if(t.h&&typeof Jy<"u"&&(!t.C[1]||ar(t)!=4||t.da()!=2)){if(t.v&&ar(t)==4)u0(t.La,0,t);else if(Pt(t,"readystatechange"),ar(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var i=String(t.I).match(e2)[1]||null;!i&&ie.self&&ie.self.location&&(i=ie.self.location.protocol.slice(0,-1)),r=!VV.test(i?i.toLowerCase():"")}n=r}if(n)Pt(t,"complete"),Pt(t,"success");else{t.m=6;try{var s=2<ar(t)?t.g.statusText:""}catch{s=""}t.j=s+" ["+t.da()+"]",d2(t)}}finally{vh(t)}}}}function vh(t,e){if(t.g){h2(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||Pt(t,"ready");try{n.onreadystatechange=r}catch{}}}function h2(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ie.clearTimeout(t.A),t.A=null)}F.isActive=function(){return!!this.g};function ar(t){return t.g?t.g.readyState:0}F.da=function(){try{return 2<ar(this)?this.g.status:-1}catch{return-1}};F.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};F.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),MV(e)}};function mE(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case c2:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function UV(t){const e={};t=(t.g&&2<=ar(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Yl(t[r]))continue;var n=dV(t[r]);const i=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const s=e[i]||[];e[i]=s,s.push(n)}iV(e,function(r){return r.join(", ")})}F.Ia=function(){return this.m};F.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function p2(t){let e="";return t0(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function m0(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=p2(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Oe(t,e,n))}function Va(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function m2(t){this.Ga=0,this.j=[],this.l=new ch,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Va("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Va("baseRetryDelayMs",5e3,t),this.hb=Va("retryDelaySeedMs",1e4,t),this.eb=Va("forwardChannelMaxRetries",2,t),this.xa=Va("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new i2(t&&t.concurrentRequestLimit),this.Ja=new OV,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}F=m2.prototype;F.ra=8;F.H=1;function g0(t){if(g2(t),t.H==3){var e=t.W++,n=zr(t.I);if(Oe(n,"SID",t.K),Oe(n,"RID",e),Oe(n,"TYPE","terminate"),Lu(t,n),e=new xu(t,t.l,e),e.L=2,e.v=mh(zr(n)),n=!1,ie.navigator&&ie.navigator.sendBeacon)try{n=ie.navigator.sendBeacon(e.v.toString(),"")}catch{}!n&&ie.Image&&(new Image().src=e.v,n=!0),n||(e.g=b2(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Nu(e)}T2(t)}function yh(t){t.g&&(y0(t),t.g.cancel(),t.g=null)}function g2(t){yh(t),t.u&&(ie.clearTimeout(t.u),t.u=null),af(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&ie.clearTimeout(t.m),t.m=null)}function _h(t){if(!s2(t.i)&&!t.m){t.m=!0;var e=t.Na;Jl||qk(),Zl||(Jl(),Zl=!0),a0.add(e,t),t.C=0}}function $V(t,e){return o2(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Cu(jt(t.Na,t,e),E2(t,t.C)),t.C++,!0)}F.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const i=new xu(this,this.l,t);let s=this.s;if(this.U&&(s?(s=xk(s),Nk(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=v2(this,i,e),n=zr(this.I),Oe(n,"RID",t),Oe(n,"CVER",22),this.F&&Oe(n,"X-HTTP-Session-Id",this.F),Lu(this,n),s&&(this.O?e="headers="+encodeURIComponent(String(p2(s)))+"&"+e:this.o&&m0(n,this.o,s)),h0(this.i,i),this.bb&&Oe(n,"TYPE","init"),this.P?(Oe(n,"$req",e),Oe(n,"SID","null"),i.aa=!0,Jg(i,n,null)):Jg(i,n,e),this.H=2}}else this.H==3&&(t?gE(this,t):this.j.length==0||s2(this.i)||gE(this))};function gE(t,e){var n;e?n=e.m:n=t.W++;const r=zr(t.I);Oe(r,"SID",t.K),Oe(r,"RID",n),Oe(r,"AID",t.V),Lu(t,r),t.o&&t.s&&m0(r,t.o,t.s),n=new xu(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=v2(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),h0(t.i,n),Jg(n,r,e)}function Lu(t,e){t.na&&t0(t.na,function(n,r){Oe(e,r,n)}),t.h&&Zk({},function(n,r){Oe(e,r,n)})}function v2(t,e,n){n=Math.min(t.j.length,n);var r=t.h?jt(t.h.Va,t.h,t):null;e:{var i=t.j;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].g;const c=i[l].map;if(u-=s,0>u)s=Math.max(0,i[l].g-100),a=!1;else try{DV(c,o,"req"+u+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function y2(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Jl||qk(),Zl||(Jl(),Zl=!0),a0.add(e,t),t.A=0}}function v0(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Cu(jt(t.Ma,t),E2(t,t.A)),t.A++,!0)}F.Ma=function(){if(this.u=null,_2(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Cu(jt(this.jb,this),t)}};F.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Xt(10),yh(this),_2(this))};function y0(t){t.B!=null&&(ie.clearTimeout(t.B),t.B=null)}function _2(t){t.g=new xu(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=zr(t.wa);Oe(e,"RID","rpc"),Oe(e,"SID",t.K),Oe(e,"AID",t.V),Oe(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Oe(e,"TO",t.qa),Oe(e,"TYPE","xmlhttp"),Lu(t,e),t.o&&t.s&&m0(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.v=mh(zr(e)),n.s=null,n.S=!0,Qk(n,t)}F.ib=function(){this.v!=null&&(this.v=null,yh(this),v0(this),Xt(19))};function af(t){t.v!=null&&(ie.clearTimeout(t.v),t.v=null)}function w2(t,e){var n=null;if(t.g==e){af(t),y0(t),t.g=null;var r=2}else if(ev(t.i,e))n=e.F,a2(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var i=t.C;r=dh(),Pt(r,new Hk(r,n)),_h(t)}else y2(t);else if(i=e.o,i==3||i==0&&0<e.ca||!(r==1&&$V(t,e)||r==2&&v0(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:ls(t,5);break;case 4:ls(t,10);break;case 3:ls(t,6);break;default:ls(t,2)}}}function E2(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function ls(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=jt(t.pb,t);n||(n=new ps("//www.google.com/images/cleardot.gif"),ie.location&&ie.location.protocol=="http"||sf(n,"https"),mh(n)),LV(n.toString(),r)}else Xt(2);t.H=0,t.h&&t.h.za(e),T2(t),g2(t)}F.pb=function(t){t?(this.l.info("Successfully pinged google.com"),Xt(2)):(this.l.info("Failed to ping google.com"),Xt(1))};function T2(t){if(t.H=0,t.ma=[],t.h){const e=l2(t.i);(e.length!=0||t.j.length!=0)&&(oE(t.ma,e),oE(t.ma,t.j),t.i.i.length=0,Zy(t.j),t.j.length=0),t.h.ya()}}function S2(t,e,n){var r=n instanceof ps?zr(n):new ps(n);if(r.g!="")e&&(r.g=e+"."+r.g),of(r,r.m);else{var i=ie.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ps(null);r&&sf(s,r),e&&(s.g=e),i&&of(s,i),n&&(s.l=n),r=s}return n=t.F,e=t.Da,n&&e&&Oe(r,n,e),Oe(r,"VER",t.ra),Lu(t,r),r}function b2(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new Qe(new Ou({ob:!0})):new Qe(t.va),e.Oa(t.J),e}F.isActive=function(){return!!this.h&&this.h.isActive(this)};function I2(){}F=I2.prototype;F.Ba=function(){};F.Aa=function(){};F.za=function(){};F.ya=function(){};F.isActive=function(){return!0};F.Va=function(){};function lf(){if(Ko&&!(10<=Number(eV)))throw Error("Environmental error: no available transport.")}lf.prototype.g=function(t,e){return new En(t,e)};function En(t,e){Et.call(this),this.g=new m2(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Yl(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Yl(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ha(this)}St(En,Et);En.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;Xt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=S2(t,null,t.Y),_h(t)};En.prototype.close=function(){g0(this.g)};En.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=o0(t),t=n);e.j.push(new PV(e.fb++,t)),e.H==3&&_h(e)};En.prototype.N=function(){this.g.h=null,delete this.j,g0(this.g),delete this.g,En.$.N.call(this)};function k2(t){d0.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}St(k2,d0);function A2(){f0.call(this),this.status=1}St(A2,f0);function ha(t){this.g=t}St(ha,I2);ha.prototype.Ba=function(){Pt(this.g,"a")};ha.prototype.Aa=function(t){Pt(this.g,new k2(t))};ha.prototype.za=function(t){Pt(this.g,new A2)};ha.prototype.ya=function(){Pt(this.g,"b")};function zV(){this.blockSize=-1}function Yn(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}St(Yn,zV);Yn.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function em(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var i=0;16>i;++i)r[i]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(i=0;16>i;++i)r[i]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],i=t.g[2];var s=t.g[3],o=e+(s^n&(i^s))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[1]+3905402710&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[3]+3250441966&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[5]+1200080426&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[7]+4249261313&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[9]+2336552879&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[11]+2304563134&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(s^n&(i^s))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=s+(i^e&(n^i))+r[13]+4254626195&4294967295,s=e+(o<<12&4294967295|o>>>20),o=i+(n^s&(e^n))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=n+(e^i&(s^e))+r[15]+1236535329&4294967295,n=i+(o<<22&4294967295|o>>>10),o=e+(i^s&(n^i))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[6]+3225465664&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[0]+3921069994&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[10]+38016083&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[4]+3889429448&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[14]+3275163606&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[8]+1163531501&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(i^s&(n^i))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=s+(n^i&(e^n))+r[2]+4243563512&4294967295,s=e+(o<<9&4294967295|o>>>23),o=i+(e^n&(s^e))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=n+(s^e&(i^s))+r[12]+2368359562&4294967295,n=i+(o<<20&4294967295|o>>>12),o=e+(n^i^s)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[8]+2272392833&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[14]+4259657740&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[4]+1272893353&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[10]+3200236656&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[0]+3936430074&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[6]+76029189&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(n^i^s)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=s+(e^n^i)+r[12]+3873151461&4294967295,s=e+(o<<11&4294967295|o>>>21),o=i+(s^e^n)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=n+(i^s^e)+r[2]+3299628645&4294967295,n=i+(o<<23&4294967295|o>>>9),o=e+(i^(n|~s))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[7]+1126891415&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[5]+4237533241&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[3]+2399980690&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[1]+2240044497&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[15]+4264355552&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[13]+1309151649&4294967295,n=i+(o<<21&4294967295|o>>>11),o=e+(i^(n|~s))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=s+(n^(e|~i))+r[11]+3174756917&4294967295,s=e+(o<<10&4294967295|o>>>22),o=i+(e^(s|~n))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=n+(s^(i|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+i&4294967295,t.g[3]=t.g[3]+s&4294967295}Yn.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,i=this.h,s=0;s<e;){if(i==0)for(;s<=n;)em(this,t,s),s+=this.blockSize;if(typeof t=="string"){for(;s<e;)if(r[i++]=t.charCodeAt(s++),i==this.blockSize){em(this,r),i=0;break}}else for(;s<e;)if(r[i++]=t[s++],i==this.blockSize){em(this,r),i=0;break}}this.h=i,this.i+=e};Yn.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Se(t,e){this.h=e;for(var n=[],r=!0,i=t.length-1;0<=i;i--){var s=t[i]|0;r&&s==e||(n[i]=s,r=!1)}this.g=n}var jV={};function _0(t){return-128<=t&&128>t?X5(t,function(e){return new Se([e|0],0>e?-1:0)}):new Se([t|0],0>t?-1:0)}function lr(t){if(isNaN(t)||!isFinite(t))return Ao;if(0>t)return Rt(lr(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=tv;return new Se(e,0)}function R2(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Rt(R2(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=lr(Math.pow(e,8)),r=Ao,i=0;i<t.length;i+=8){var s=Math.min(8,t.length-i),o=parseInt(t.substring(i,i+s),e);8>s?(s=lr(Math.pow(e,s)),r=r.R(s).add(lr(o))):(r=r.R(n),r=r.add(lr(o)))}return r}var tv=4294967296,Ao=_0(0),nv=_0(1),vE=_0(16777216);F=Se.prototype;F.ea=function(){if(Rn(this))return-Rt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:tv+r)*e,e*=tv}return t};F.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(kr(this))return"0";if(Rn(this))return"-"+Rt(this).toString(t);for(var e=lr(Math.pow(t,6)),n=this,r="";;){var i=cf(n,e).g;n=uf(n,i.R(e));var s=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=i,kr(n))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};F.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function kr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Rn(t){return t.h==-1}F.X=function(t){return t=uf(this,t),Rn(t)?-1:kr(t)?0:1};function Rt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Se(n,~t.h).add(nv)}F.abs=function(){return Rn(this)?Rt(this):this};F.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,i=0;i<=e;i++){var s=r+(this.D(i)&65535)+(t.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(t.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,n[i]=o<<16|s}return new Se(n,n[n.length-1]&-2147483648?-1:0)};function uf(t,e){return t.add(Rt(e))}F.R=function(t){if(kr(this)||kr(t))return Ao;if(Rn(this))return Rn(t)?Rt(this).R(Rt(t)):Rt(Rt(this).R(t));if(Rn(t))return Rt(this.R(Rt(t)));if(0>this.X(vE)&&0>t.X(vE))return lr(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<t.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(i)>>>16,l=t.D(i)&65535;n[2*r+2*i]+=o*l,Nc(n,2*r+2*i),n[2*r+2*i+1]+=s*l,Nc(n,2*r+2*i+1),n[2*r+2*i+1]+=o*a,Nc(n,2*r+2*i+1),n[2*r+2*i+2]+=s*a,Nc(n,2*r+2*i+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Se(n,0)};function Nc(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Fa(t,e){this.g=t,this.h=e}function cf(t,e){if(kr(e))throw Error("division by zero");if(kr(t))return new Fa(Ao,Ao);if(Rn(t))return e=cf(Rt(t),e),new Fa(Rt(e.g),Rt(e.h));if(Rn(e))return e=cf(t,Rt(e)),new Fa(Rt(e.g),e.h);if(30<t.g.length){if(Rn(t)||Rn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=nv,r=e;0>=r.X(t);)n=yE(n),r=yE(r);var i=Ws(n,1),s=Ws(r,1);for(r=Ws(r,2),n=Ws(n,2);!kr(r);){var o=s.add(r);0>=o.X(t)&&(i=i.add(n),s=o),r=Ws(r,1),n=Ws(n,1)}return e=uf(t,i.R(e)),new Fa(i,e)}for(i=Ao;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=lr(n),o=s.R(e);Rn(o)||0<o.X(t);)n-=r,s=lr(n),o=s.R(e);kr(s)&&(s=nv),i=i.add(s),t=uf(t,o)}return new Fa(i,t)}F.gb=function(t){return cf(this,t).h};F.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Se(n,this.h&t.h)};F.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Se(n,this.h|t.h)};F.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Se(n,this.h^t.h)};function yE(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Se(n,t.h)}function Ws(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,i=[],s=0;s<r;s++)i[s]=0<e?t.D(s+n)>>>e|t.D(s+n+1)<<32-e:t.D(s+n);return new Se(i,t.h)}lf.prototype.createWebChannel=lf.prototype.g;En.prototype.send=En.prototype.u;En.prototype.open=En.prototype.m;En.prototype.close=En.prototype.close;fh.NO_ERROR=0;fh.TIMEOUT=8;fh.HTTP_ERROR=6;Wk.COMPLETE="complete";Kk.EventType=Pu;Pu.OPEN="a";Pu.CLOSE="b";Pu.ERROR="c";Pu.MESSAGE="d";Et.prototype.listen=Et.prototype.O;Qe.prototype.listenOnce=Qe.prototype.P;Qe.prototype.getLastError=Qe.prototype.Sa;Qe.prototype.getLastErrorCode=Qe.prototype.Ia;Qe.prototype.getStatus=Qe.prototype.da;Qe.prototype.getResponseJson=Qe.prototype.Wa;Qe.prototype.getResponseText=Qe.prototype.ja;Qe.prototype.send=Qe.prototype.ha;Qe.prototype.setWithCredentials=Qe.prototype.Oa;Yn.prototype.digest=Yn.prototype.l;Yn.prototype.reset=Yn.prototype.reset;Yn.prototype.update=Yn.prototype.j;Se.prototype.add=Se.prototype.add;Se.prototype.multiply=Se.prototype.R;Se.prototype.modulo=Se.prototype.gb;Se.prototype.compare=Se.prototype.X;Se.prototype.toNumber=Se.prototype.ea;Se.prototype.toString=Se.prototype.toString;Se.prototype.getBits=Se.prototype.D;Se.fromNumber=lr;Se.fromString=R2;var BV=function(){return new lf},HV=function(){return dh()},tm=fh,WV=Wk,KV=Vs,_E={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},GV=Ou,Oc=Kk,QV=Qe,YV=Yn,Ro=Se;const wE="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pa="10.1.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rs=new rh("@firebase/firestore");function EE(){return Rs.logLevel}function G(t,...e){if(Rs.logLevel<=ve.DEBUG){const n=e.map(w0);Rs.debug(`Firestore (${pa}): ${t}`,...n)}}function jr(t,...e){if(Rs.logLevel<=ve.ERROR){const n=e.map(w0);Rs.error(`Firestore (${pa}): ${t}`,...n)}}function Go(t,...e){if(Rs.logLevel<=ve.WARN){const n=e.map(w0);Rs.warn(`Firestore (${pa}): ${t}`,...n)}}function w0(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(t="Unexpected state"){const e=`FIRESTORE (${pa}) INTERNAL ASSERTION FAILED: `+t;throw jr(e),new Error(e)}function Me(t,e){t||ne()}function ue(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class X extends zt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C2{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class XV{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ft.UNAUTHENTICATED))}shutdown(){}}class JV{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ZV{constructor(e){this.t=e,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ai;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ai,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{G("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(G("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ai)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(G("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Me(typeof r.accessToken=="string"),new C2(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Me(e===null||typeof e=="string"),new Ft(e)}}class eF{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tF{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new eF(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nF{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rF{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=s=>{s.error!=null&&G("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,G("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{G("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):G("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Me(typeof n.token=="string"),this.R=n.token,new nF(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iF(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P2{static V(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=iF(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function we(t,e){return t<e?-1:t>e?1:0}function Qo(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new X(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new X(N.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new X(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new X(N.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return ht.fromMillis(Date.now())}static fromDate(e){return ht.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new ht(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?we(this.nanoseconds,e.nanoseconds):we(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(e){this.timestamp=e}static fromTimestamp(e){return new oe(e)}static min(){return new oe(new ht(0,0))}static max(){return new oe(new ht(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iu{constructor(e,n,r){n===void 0?n=0:n>e.length&&ne(),r===void 0?r=e.length-n:r>e.length-n&&ne(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return iu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof iu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Ue extends iu{construct(e,n,r){return new Ue(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new X(N.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Ue(n)}static emptyPath(){return new Ue([])}}const sF=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class $t extends iu{construct(e,n,r){return new $t(e,n,r)}static isValidIdentifier(e){return sF.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),$t.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new $t(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new X(N.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new X(N.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new X(N.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new X(N.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new $t(n)}static emptyPath(){return new $t([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e){this.path=e}static fromPath(e){return new J(Ue.fromString(e))}static fromName(e){return new J(Ue.fromString(e).popFirst(5))}static empty(){return new J(Ue.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Ue.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Ue.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new J(new Ue(e.slice()))}}function oF(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=oe.fromTimestamp(r===1e9?new ht(n+1,0):new ht(n,r));return new Mi(i,J.empty(),e)}function aF(t){return new Mi(t.readTime,t.key,-1)}class Mi{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Mi(oe.min(),J.empty(),-1)}static max(){return new Mi(oe.max(),J.empty(),-1)}}function lF(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=J.comparator(t.documentKey,e.documentKey),n!==0?n:we(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uF="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class cF{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mu(t){if(t.code!==N.FAILED_PRECONDITION||t.message!==uF)throw t;G("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&ne(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new D((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):D.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):D.reject(n)}static resolve(e){return new D((n,r)=>{n(e)})}static reject(e){return new D((n,r)=>{r(e)})}static waitFor(e){return new D((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=D.resolve(!1);for(const r of e)n=n.next(i=>i?D.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new D((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(c=>{o[u]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(e,n){return new D((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Vu(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E0{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.oe(r),this._e=r=>n.writeSequenceNumber(r))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}E0.ae=-1;function wh(t){return t==null}function df(t){return t===0&&1/t==-1/0}function dF(t){return typeof t=="number"&&Number.isInteger(t)&&!df(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function ma(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function x2(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e,n){this.comparator=e,this.root=n||At.EMPTY}insert(e,n){return new We(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,At.BLACK,null,null))}remove(e){return new We(this.comparator,this.root.remove(e,this.comparator).copy(null,null,At.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Dc(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Dc(this.root,e,this.comparator,!1)}getReverseIterator(){return new Dc(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Dc(this.root,e,this.comparator,!0)}}class Dc{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class At{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:At.RED,this.left=i!=null?i:At.EMPTY,this.right=s!=null?s:At.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new At(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return At.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return At.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,At.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,At.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw ne();const e=this.left.check();if(e!==this.right.check())throw ne();return e+(this.isRed()?0:1)}}At.EMPTY=null,At.RED=!0,At.BLACK=!1;At.EMPTY=new class{constructor(){this.size=0}get key(){throw ne()}get value(){throw ne()}get color(){throw ne()}get left(){throw ne()}get right(){throw ne()}copy(e,n,r,i,s){return this}insert(e,n,r){return new At(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e){this.comparator=e,this.data=new We(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new SE(this.data.getIterator())}getIteratorFrom(e){return new SE(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ht)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ht(this.comparator);return n.data=e,n}}class SE{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e){this.fields=e,e.sort($t.comparator)}static empty(){return new Bn([])}unionWith(e){let n=new Ht($t.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Qo(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N2 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new N2("Invalid base64 string: "+s):s}}(e);return new Kt(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Kt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return we(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Kt.EMPTY_BYTE_STRING=new Kt("");const fF=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vi(t){if(Me(!!t),typeof t=="string"){let e=0;const n=fF.exec(t);if(Me(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:it(t.seconds),nanos:it(t.nanos)}}function it(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Cs(t){return typeof t=="string"?Kt.fromBase64String(t):Kt.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T0(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function S0(t){const e=t.mapValue.fields.__previous_value__;return T0(e)?S0(e):e}function su(t){const e=Vi(t.mapValue.fields.__local_write_time__.timestampValue);return new ht(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hF{constructor(e,n,r,i,s,o,a,l,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=u}}class ou{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new ou("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof ou&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ps(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?T0(t)?4:pF(t)?9007199254740991:10:ne()}function mr(t,e){if(t===e)return!0;const n=Ps(t);if(n!==Ps(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return su(t).isEqual(su(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Vi(i.timestampValue),a=Vi(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return Cs(i.bytesValue).isEqual(Cs(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return it(i.geoPointValue.latitude)===it(s.geoPointValue.latitude)&&it(i.geoPointValue.longitude)===it(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return it(i.integerValue)===it(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=it(i.doubleValue),a=it(s.doubleValue);return o===a?df(o)===df(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return Qo(t.arrayValue.values||[],e.arrayValue.values||[],mr);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(TE(o)!==TE(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!mr(o[l],a[l])))return!1;return!0}(t,e);default:return ne()}}function au(t,e){return(t.values||[]).find(n=>mr(n,e))!==void 0}function Yo(t,e){if(t===e)return 0;const n=Ps(t),r=Ps(e);if(n!==r)return we(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return we(t.booleanValue,e.booleanValue);case 2:return function(s,o){const a=it(s.integerValue||s.doubleValue),l=it(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return bE(t.timestampValue,e.timestampValue);case 4:return bE(su(t),su(e));case 5:return we(t.stringValue,e.stringValue);case 6:return function(s,o){const a=Cs(s),l=Cs(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const a=s.split("/"),l=o.split("/");for(let u=0;u<a.length&&u<l.length;u++){const c=we(a[u],l[u]);if(c!==0)return c}return we(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const a=we(it(s.latitude),it(o.latitude));return a!==0?a:we(it(s.longitude),it(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,o){const a=s.values||[],l=o.values||[];for(let u=0;u<a.length&&u<l.length;++u){const c=Yo(a[u],l[u]);if(c)return c}return we(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,o){if(s===Lc.mapValue&&o===Lc.mapValue)return 0;if(s===Lc.mapValue)return 1;if(o===Lc.mapValue)return-1;const a=s.fields||{},l=Object.keys(a),u=o.fields||{},c=Object.keys(u);l.sort(),c.sort();for(let d=0;d<l.length&&d<c.length;++d){const f=we(l[d],c[d]);if(f!==0)return f;const m=Yo(a[l[d]],u[c[d]]);if(m!==0)return m}return we(l.length,c.length)}(t.mapValue,e.mapValue);default:throw ne()}}function bE(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return we(t,e);const n=Vi(t),r=Vi(e),i=we(n.seconds,r.seconds);return i!==0?i:we(n.nanos,r.nanos)}function Xo(t){return rv(t)}function rv(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Vi(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Cs(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return J.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=rv(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${rv(n.fields[o])}`;return i+"}"}(t.mapValue):ne()}function iv(t){return!!t&&"integerValue"in t}function b0(t){return!!t&&"arrayValue"in t}function IE(t){return!!t&&"nullValue"in t}function kE(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function rd(t){return!!t&&"mapValue"in t}function pl(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return ma(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=pl(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=pl(t.arrayValue.values[n]);return e}return Object.assign({},t)}function pF(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn{constructor(e){this.value=e}static empty(){return new Cn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!rd(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=pl(n)}setAll(e){let n=$t.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=pl(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());rd(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return mr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];rd(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){ma(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Cn(pl(this.value))}}function O2(t){const e=[];return ma(t.fields,(n,r)=>{const i=new $t([n]);if(rd(r)){const s=O2(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bn(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new Ut(e,0,oe.min(),oe.min(),oe.min(),Cn.empty(),0)}static newFoundDocument(e,n,r,i){return new Ut(e,1,n,oe.min(),r,i,0)}static newNoDocument(e,n){return new Ut(e,2,n,oe.min(),oe.min(),Cn.empty(),0)}static newUnknownDocument(e,n){return new Ut(e,3,n,oe.min(),oe.min(),Cn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Cn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Cn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof Ut&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ut(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e,n){this.position=e,this.inclusive=n}}function AE(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=J.comparator(J.fromName(o.referenceValue),n.key):r=Yo(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function RE(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!mr(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n="asc"){this.field=e,this.dir=n}}function mF(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D2{}class dt extends D2{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vF(e,n,r):n==="array-contains"?new wF(e,r):n==="in"?new EF(e,r):n==="not-in"?new TF(e,r):n==="array-contains-any"?new SF(e,r):new dt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new yF(e,r):new _F(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Yo(n,this.value)):n!==null&&Ps(this.value)===Ps(n)&&this.matchesComparison(Yo(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ne()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class gr extends D2{constructor(e,n){super(),this.filters=e,this.op=n,this.ce=null}static create(e,n){return new gr(e,n)}matches(e){return L2(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.le(n=>n.isInequality());return e!==null?e.field:null}le(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function L2(t){return t.op==="and"}function M2(t){return gF(t)&&L2(t)}function gF(t){for(const e of t.filters)if(e instanceof gr)return!1;return!0}function sv(t){if(t instanceof dt)return t.field.canonicalString()+t.op.toString()+Xo(t.value);if(M2(t))return t.filters.map(e=>sv(e)).join(",");{const e=t.filters.map(n=>sv(n)).join(",");return`${t.op}(${e})`}}function V2(t,e){return t instanceof dt?function(r,i){return i instanceof dt&&r.op===i.op&&r.field.isEqual(i.field)&&mr(r.value,i.value)}(t,e):t instanceof gr?function(r,i){return i instanceof gr&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&V2(o,i.filters[a]),!0):!1}(t,e):void ne()}function F2(t){return t instanceof dt?function(n){return`${n.field.canonicalString()} ${n.op} ${Xo(n.value)}`}(t):t instanceof gr?function(n){return n.op.toString()+" {"+n.getFilters().map(F2).join(" ,")+"}"}(t):"Filter"}class vF extends dt{constructor(e,n,r){super(e,n,r),this.key=J.fromName(r.referenceValue)}matches(e){const n=J.comparator(e.key,this.key);return this.matchesComparison(n)}}class yF extends dt{constructor(e,n){super(e,"in",n),this.keys=q2("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class _F extends dt{constructor(e,n){super(e,"not-in",n),this.keys=q2("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function q2(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>J.fromName(r.referenceValue))}class wF extends dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return b0(n)&&au(n.arrayValue,this.value)}}class EF extends dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&au(this.value.arrayValue,n)}}class TF extends dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(au(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!au(this.value.arrayValue,n)}}class SF extends dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!b0(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>au(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bF{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.he=null}}function CE(t,e=null,n=[],r=[],i=null,s=null,o=null){return new bF(t,e,n,r,i,s,o)}function I0(t){const e=ue(t);if(e.he===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>sv(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wh(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Xo(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Xo(r)).join(",")),e.he=n}return e.he}function k0(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!mF(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!V2(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!RE(t.startAt,e.startAt)&&RE(t.endAt,e.endAt)}function ov(t){return J.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.Pe=null,this.Ie=null,this.startAt,this.endAt}}function IF(t,e,n,r,i,s,o,a){return new Eh(t,e,n,r,i,s,o,a)}function U2(t){return new Eh(t)}function PE(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function kF(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function AF(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function RF(t){return t.collectionGroup!==null}function Co(t){const e=ue(t);if(e.Pe===null){e.Pe=[];const n=AF(e),r=kF(e);if(n!==null&&r===null)n.isKeyField()||e.Pe.push(new ml(n)),e.Pe.push(new ml($t.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.Pe.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new ml($t.keyField(),s))}}}return e.Pe}function Br(t){const e=ue(t);if(!e.Ie)if(e.limitType==="F")e.Ie=CE(e.path,e.collectionGroup,Co(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of Co(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new ml(s.field,o))}const r=e.endAt?new ff(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new ff(e.startAt.position,e.startAt.inclusive):null;e.Ie=CE(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.Ie}function av(t,e,n){return new Eh(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Th(t,e){return k0(Br(t),Br(e))&&t.limitType===e.limitType}function $2(t){return`${I0(Br(t))}|lt:${t.limitType}`}function lv(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>F2(i)).join(", ")}]`),wh(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Xo(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Xo(i)).join(",")),`Target(${r})`}(Br(t))}; limitType=${t.limitType})`}function Sh(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):J.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Co(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,a,l){const u=AE(o,a,l);return o.inclusive?u<=0:u<0}(r.startAt,Co(r),i)||r.endAt&&!function(o,a,l){const u=AE(o,a,l);return o.inclusive?u>=0:u>0}(r.endAt,Co(r),i))}(t,e)}function CF(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function z2(t){return(e,n)=>{let r=!1;for(const i of Co(t)){const s=PF(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function PF(t,e,n){const r=t.field.isKeyField()?J.comparator(e.key,n.key):function(s,o,a){const l=o.data.field(s),u=a.data.field(s);return l!==null&&u!==null?Yo(l,u):ne()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return ne()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ma(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return x2(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xF=new We(J.comparator);function Hr(){return xF}const j2=new We(J.comparator);function Xa(...t){let e=j2;for(const n of t)e=e.insert(n.key,n);return e}function B2(t){let e=j2;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function us(){return gl()}function H2(){return gl()}function gl(){return new ga(t=>t.toString(),(t,e)=>t.isEqual(e))}const NF=new We(J.comparator),OF=new Ht(J.comparator);function pe(...t){let e=OF;for(const n of t)e=e.add(n);return e}const DF=new Ht(we);function LF(){return DF}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W2(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:df(e)?"-0":e}}function K2(t){return{integerValue:""+t}}function MF(t,e){return dF(e)?K2(e):W2(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(){this._=void 0}}function VF(t,e,n){return t instanceof hf?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&T0(s)&&(s=S0(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(n,e):t instanceof lu?Q2(t,e):t instanceof uu?Y2(t,e):function(i,s){const o=G2(i,s),a=xE(o)+xE(i.Te);return iv(o)&&iv(i.Te)?K2(a):W2(i.serializer,a)}(t,e)}function FF(t,e,n){return t instanceof lu?Q2(t,e):t instanceof uu?Y2(t,e):n}function G2(t,e){return t instanceof pf?function(r){return iv(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class hf extends bh{}class lu extends bh{constructor(e){super(),this.elements=e}}function Q2(t,e){const n=X2(e);for(const r of t.elements)n.some(i=>mr(i,r))||n.push(r);return{arrayValue:{values:n}}}class uu extends bh{constructor(e){super(),this.elements=e}}function Y2(t,e){let n=X2(e);for(const r of t.elements)n=n.filter(i=>!mr(i,r));return{arrayValue:{values:n}}}class pf extends bh{constructor(e,n){super(),this.serializer=e,this.Te=n}}function xE(t){return it(t.integerValue||t.doubleValue)}function X2(t){return b0(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function qF(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof lu&&i instanceof lu||r instanceof uu&&i instanceof uu?Qo(r.elements,i.elements,mr):r instanceof pf&&i instanceof pf?mr(r.Te,i.Te):r instanceof hf&&i instanceof hf}(t.transform,e.transform)}class UF{constructor(e,n){this.version=e,this.transformResults=n}}class Nr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nr}static exists(e){return new Nr(void 0,e)}static updateTime(e){return new Nr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function id(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Ih{}function J2(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new eA(t.key,Nr.none()):new Fu(t.key,t.data,Nr.none());{const n=t.data,r=Cn.empty();let i=new Ht($t.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Fs(t.key,r,new Bn(i.toArray()),Nr.none())}}function $F(t,e,n){t instanceof Fu?function(i,s,o){const a=i.value.clone(),l=OE(i.fieldTransforms,s,o.transformResults);a.setAll(l),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof Fs?function(i,s,o){if(!id(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=OE(i.fieldTransforms,s,o.transformResults),l=s.data;l.setAll(Z2(i)),l.setAll(a),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function vl(t,e,n,r){return t instanceof Fu?function(s,o,a,l){if(!id(s.precondition,o))return a;const u=s.value.clone(),c=DE(s.fieldTransforms,l,o);return u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),null}(t,e,n,r):t instanceof Fs?function(s,o,a,l){if(!id(s.precondition,o))return a;const u=DE(s.fieldTransforms,l,o),c=o.data;return c.setAll(Z2(s)),c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(d=>d.field))}(t,e,n,r):function(s,o,a){return id(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zF(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=G2(r.transform,i||null);s!=null&&(n===null&&(n=Cn.empty()),n.set(r.field,s))}return n||null}function NE(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Qo(r,i,(s,o)=>qF(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Fu extends Ih{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Fs extends Ih{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Z2(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function OE(t,e,n){const r=new Map;Me(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,FF(o,a,n[i]))}return r}function DE(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,VF(s,o,e))}return r}class eA extends Ih{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class jF extends Ih{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BF{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&$F(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=vl(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=vl(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=H2();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=J2(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(oe.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),pe())}isEqual(e){return this.batchId===e.batchId&&Qo(this.mutations,e.mutations,(n,r)=>NE(n,r))&&Qo(this.baseMutations,e.baseMutations,(n,r)=>NE(n,r))}}class A0{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Me(e.mutations.length===r.length);let i=function(){return NF}();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new A0(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HF{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt,ge;function KF(t){switch(t){default:return ne();case N.CANCELLED:case N.UNKNOWN:case N.DEADLINE_EXCEEDED:case N.RESOURCE_EXHAUSTED:case N.INTERNAL:case N.UNAVAILABLE:case N.UNAUTHENTICATED:return!1;case N.INVALID_ARGUMENT:case N.NOT_FOUND:case N.ALREADY_EXISTS:case N.PERMISSION_DENIED:case N.FAILED_PRECONDITION:case N.ABORTED:case N.OUT_OF_RANGE:case N.UNIMPLEMENTED:case N.DATA_LOSS:return!0}}function tA(t){if(t===void 0)return jr("GRPC error has no .code"),N.UNKNOWN;switch(t){case tt.OK:return N.OK;case tt.CANCELLED:return N.CANCELLED;case tt.UNKNOWN:return N.UNKNOWN;case tt.DEADLINE_EXCEEDED:return N.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return N.RESOURCE_EXHAUSTED;case tt.INTERNAL:return N.INTERNAL;case tt.UNAVAILABLE:return N.UNAVAILABLE;case tt.UNAUTHENTICATED:return N.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return N.INVALID_ARGUMENT;case tt.NOT_FOUND:return N.NOT_FOUND;case tt.ALREADY_EXISTS:return N.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return N.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return N.FAILED_PRECONDITION;case tt.ABORTED:return N.ABORTED;case tt.OUT_OF_RANGE:return N.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return N.UNIMPLEMENTED;case tt.DATA_LOSS:return N.DATA_LOSS;default:return ne()}}(ge=tt||(tt={}))[ge.OK=0]="OK",ge[ge.CANCELLED=1]="CANCELLED",ge[ge.UNKNOWN=2]="UNKNOWN",ge[ge.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ge[ge.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ge[ge.NOT_FOUND=5]="NOT_FOUND",ge[ge.ALREADY_EXISTS=6]="ALREADY_EXISTS",ge[ge.PERMISSION_DENIED=7]="PERMISSION_DENIED",ge[ge.UNAUTHENTICATED=16]="UNAUTHENTICATED",ge[ge.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ge[ge.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ge[ge.ABORTED=10]="ABORTED",ge[ge.OUT_OF_RANGE=11]="OUT_OF_RANGE",ge[ge.UNIMPLEMENTED=12]="UNIMPLEMENTED",ge[ge.INTERNAL=13]="INTERNAL",ge[ge.UNAVAILABLE=14]="UNAVAILABLE",ge[ge.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R0{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Mc}static getOrCreateInstance(){return Mc===null&&(Mc=new R0),Mc}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Mc=null;/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GF(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QF=new Ro([4294967295,4294967295],0);function LE(t){const e=GF().encode(t),n=new YV;return n.update(e),new Uint8Array(n.digest())}function ME(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Ro([n,r],0),new Ro([i,s],0)]}class C0{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Ja(`Invalid padding: ${n}`);if(r<0)throw new Ja(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ja(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Ja(`Invalid padding when bitmap length is 0: ${n}`);this.de=8*e.length-n,this.Ae=Ro.fromNumber(this.de)}Re(e,n,r){let i=e.add(n.multiply(Ro.fromNumber(r)));return i.compare(QF)===1&&(i=new Ro([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ae).toNumber()}Ve(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.de===0)return!1;const n=LE(e),[r,i]=ME(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);if(!this.Ve(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new C0(s,i,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.de===0)return;const n=LE(e),[r,i]=ME(n);for(let s=0;s<this.hashCount;s++){const o=this.Re(r,i,s);this.me(o)}}me(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Ja extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,qu.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new kh(oe.min(),i,new We(we),Hr(),pe())}}class qu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new qu(r,n,pe(),pe(),pe())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,n,r,i){this.fe=e,this.removedTargetIds=n,this.key=r,this.ge=i}}class nA{constructor(e,n){this.targetId=e,this.pe=n}}class rA{constructor(e,n,r=Kt.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class VE{constructor(){this.ye=0,this.we=qE(),this.Se=Kt.EMPTY_BYTE_STRING,this.be=!1,this.De=!0}get current(){return this.be}get resumeToken(){return this.Se}get ve(){return this.ye!==0}get Ce(){return this.De}Fe(e){e.approximateByteSize()>0&&(this.De=!0,this.Se=e)}Me(){let e=pe(),n=pe(),r=pe();return this.we.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:ne()}}),new qu(this.Se,this.be,e,n,r)}xe(){this.De=!1,this.we=qE()}Oe(e,n){this.De=!0,this.we=this.we.insert(e,n)}Ne(e){this.De=!0,this.we=this.we.remove(e)}Be(){this.ye+=1}Le(){this.ye-=1}ke(){this.De=!0,this.be=!0}}class YF{constructor(e){this.qe=e,this.Qe=new Map,this.Ke=Hr(),this.$e=FE(),this.Ue=new We(we)}We(e){for(const n of e.fe)e.ge&&e.ge.isFoundDocument()?this.Ge(n,e.ge):this.ze(n,e.key,e.ge);for(const n of e.removedTargetIds)this.ze(n,e.key,e.ge)}je(e){this.forEachTarget(e,n=>{const r=this.He(n);switch(e.state){case 0:this.Je(n)&&r.Fe(e.resumeToken);break;case 1:r.Le(),r.ve||r.xe(),r.Fe(e.resumeToken);break;case 2:r.Le(),r.ve||this.removeTarget(n);break;case 3:this.Je(n)&&(r.ke(),r.Fe(e.resumeToken));break;case 4:this.Je(n)&&(this.Ye(n),r.Fe(e.resumeToken));break;default:ne()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Qe.forEach((r,i)=>{this.Je(i)&&n(i)})}Ze(e){var n,r;const i=e.targetId,s=e.pe.count,o=this.Xe(i);if(o){const a=o.target;if(ov(a))if(s===0){const l=new J(a.path);this.ze(i,l,Ut.newNoDocument(l,oe.min()))}else Me(s===1);else{const l=this.et(i);if(l!==s){const u=this.tt(e,l);if(u.status!==0){this.Ye(i);const c=u.status===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ue=this.Ue.insert(i,c)}(n=R0.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch(function(d,f,m,w){var _,E,v,h,y,g;const T={localCacheCount:m,existenceFilterCount:w.count},S=w.unchangedNames;return S&&(T.bloomFilter={applied:d===0,hashCount:(_=S==null?void 0:S.hashCount)!==null&&_!==void 0?_:0,bitmapLength:(h=(v=(E=S==null?void 0:S.bits)===null||E===void 0?void 0:E.bitmap)===null||v===void 0?void 0:v.length)!==null&&h!==void 0?h:0,padding:(g=(y=S==null?void 0:S.bits)===null||y===void 0?void 0:y.padding)!==null&&g!==void 0?g:0},f&&(T.bloomFilter.mightContain=f)),T}(u.status,(r=u.nt)!==null&&r!==void 0?r:null,l,e.pe))}}}}tt(e,n){const{unchangedNames:r,count:i}=e.pe;if(!r||!r.bits)return{status:1};const{bits:{bitmap:s="",padding:o=0},hashCount:a=0}=r;let l,u;try{l=Cs(s).toUint8Array()}catch(d){if(d instanceof N2)return Go("Decoding the base64 bloom filter in existence filter failed ("+d.message+"); ignoring the bloom filter and falling back to full re-query."),{status:1};throw d}try{u=new C0(l,o,a)}catch(d){return Go(d instanceof Ja?"BloomFilter error: ":"Applying bloom filter failed: ",d),{status:1}}const c=d=>{const f=this.qe.rt();return u.mightContain(`projects/${f.projectId}/databases/${f.database}/documents/${d}`)};return u.de===0?{status:1}:{status:i===n-this.it(e.targetId,c)?0:2,nt:c}}it(e,n){const r=this.qe.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{n(s.path.canonicalString())||(this.ze(e,s,null),i++)}),i}st(e){const n=new Map;this.Qe.forEach((s,o)=>{const a=this.Xe(o);if(a){if(s.current&&ov(a.target)){const l=new J(a.target.path);this.Ke.get(l)!==null||this.ot(o,l)||this.ze(o,l,Ut.newNoDocument(l,e))}s.Ce&&(n.set(o,s.Me()),s.xe())}});let r=pe();this.$e.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Xe(l);return!u||u.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.Ke.forEach((s,o)=>o.setReadTime(e));const i=new kh(e,n,this.Ue,this.Ke,r);return this.Ke=Hr(),this.$e=FE(),this.Ue=new We(we),i}Ge(e,n){if(!this.Je(e))return;const r=this.ot(e,n.key)?2:0;this.He(e).Oe(n.key,r),this.Ke=this.Ke.insert(n.key,n),this.$e=this.$e.insert(n.key,this._t(n.key).add(e))}ze(e,n,r){if(!this.Je(e))return;const i=this.He(e);this.ot(e,n)?i.Oe(n,1):i.Ne(n),this.$e=this.$e.insert(n,this._t(n).delete(e)),r&&(this.Ke=this.Ke.insert(n,r))}removeTarget(e){this.Qe.delete(e)}et(e){const n=this.He(e).Me();return this.qe.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Be(e){this.He(e).Be()}He(e){let n=this.Qe.get(e);return n||(n=new VE,this.Qe.set(e,n)),n}_t(e){let n=this.$e.get(e);return n||(n=new Ht(we),this.$e=this.$e.insert(e,n)),n}Je(e){const n=this.Xe(e)!==null;return n||G("WatchChangeAggregator","Detected inactive target",e),n}Xe(e){const n=this.Qe.get(e);return n&&n.ve?null:this.qe.ut(e)}Ye(e){this.Qe.set(e,new VE),this.qe.getRemoteKeysForTarget(e).forEach(n=>{this.ze(e,n,null)})}ot(e,n){return this.qe.getRemoteKeysForTarget(e).has(n)}}function FE(){return new We(J.comparator)}function qE(){return new We(J.comparator)}const XF=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),JF=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),ZF=(()=>({and:"AND",or:"OR"}))();class e9{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function uv(t,e){return t.useProto3Json||wh(e)?e:{value:e}}function mf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function iA(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function t9(t,e){return mf(t,e.toTimestamp())}function hr(t){return Me(!!t),oe.fromTimestamp(function(n){const r=Vi(n);return new ht(r.seconds,r.nanos)}(t))}function P0(t,e){return function(r){return new Ue(["projects",r.projectId,"databases",r.database])}(t).child("documents").child(e).canonicalString()}function sA(t){const e=Ue.fromString(t);return Me(uA(e)),e}function cv(t,e){return P0(t.databaseId,e.path)}function nm(t,e){const n=sA(e);if(n.get(1)!==t.databaseId.projectId)throw new X(N.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new X(N.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new J(oA(n))}function dv(t,e){return P0(t.databaseId,e)}function n9(t){const e=sA(t);return e.length===4?Ue.emptyPath():oA(e)}function fv(t){return new Ue(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function oA(t){return Me(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function UE(t,e,n){return{name:cv(t,e),fields:n.value.mapValue.fields}}function r9(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:ne()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,c){return u.useProto3Json?(Me(c===void 0||typeof c=="string"),Kt.fromBase64String(c||"")):(Me(c===void 0||c instanceof Uint8Array),Kt.fromUint8Array(c||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const c=u.code===void 0?N.UNKNOWN:tA(u.code);return new X(c,u.message||"")}(o);n=new rA(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=nm(t,r.document.name),s=hr(r.document.updateTime),o=r.document.createTime?hr(r.document.createTime):oe.min(),a=new Cn({mapValue:{fields:r.document.fields}}),l=Ut.newFoundDocument(i,s,o,a),u=r.targetIds||[],c=r.removedTargetIds||[];n=new sd(u,c,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=nm(t,r.document),s=r.readTime?hr(r.readTime):oe.min(),o=Ut.newNoDocument(i,s),a=r.removedTargetIds||[];n=new sd([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=nm(t,r.document),s=r.removedTargetIds||[];n=new sd([],s,i,null)}else{if(!("filter"in e))return ne();{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new WF(i,s),a=r.targetId;n=new nA(a,o)}}return n}function i9(t,e){let n;if(e instanceof Fu)n={update:UE(t,e.key,e.value)};else if(e instanceof eA)n={delete:cv(t,e.key)};else if(e instanceof Fs)n={update:UE(t,e.key,e.data),updateMask:h9(e.fieldMask)};else{if(!(e instanceof jF))return ne();n={verify:cv(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof hf)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof lu)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof uu)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof pf)return{fieldPath:o.field.canonicalString(),increment:a.Te};throw ne()}(0,r))),e.precondition.isNone||(n.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:t9(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:ne()}(t,e.precondition)),n}function s9(t,e){return t&&t.length>0?(Me(e!==void 0),t.map(n=>function(i,s){let o=i.updateTime?hr(i.updateTime):hr(s);return o.isEqual(oe.min())&&(o=hr(s)),new UF(o,i.transformResults||[])}(n,e))):[]}function o9(t,e){return{documents:[dv(t,e.path)]}}function a9(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=dv(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dv(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return lA(gr.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Ys(d.field),direction:c9(d.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=uv(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function l9(t){let e=n9(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Me(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=function(d){const f=aA(d);return f instanceof gr&&M2(f)?f.getFilters():[f]}(n.where));let o=[];n.orderBy&&(o=function(d){return d.map(f=>function(w){return new ml(Xs(w.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(w.direction))}(f))}(n.orderBy));let a=null;n.limit&&(a=function(d){let f;return f=typeof d=="object"?d.value:d,wh(f)?null:f}(n.limit));let l=null;n.startAt&&(l=function(d){const f=!!d.before,m=d.values||[];return new ff(m,f)}(n.startAt));let u=null;return n.endAt&&(u=function(d){const f=!d.before,m=d.values||[];return new ff(m,f)}(n.endAt)),IF(e,i,o,s,a,"F",l,u)}function u9(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ne()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function aA(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Xs(n.unaryFilter.field);return dt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=Xs(n.unaryFilter.field);return dt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Xs(n.unaryFilter.field);return dt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Xs(n.unaryFilter.field);return dt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return ne()}}(t):t.fieldFilter!==void 0?function(n){return dt.create(Xs(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return ne()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return gr.create(n.compositeFilter.filters.map(r=>aA(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return ne()}}(n.compositeFilter.op))}(t):ne()}function c9(t){return XF[t]}function d9(t){return JF[t]}function f9(t){return ZF[t]}function Ys(t){return{fieldPath:t.canonicalString()}}function Xs(t){return $t.fromServerFormat(t.fieldPath)}function lA(t){return t instanceof dt?function(n){if(n.op==="=="){if(kE(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NAN"}};if(IE(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(kE(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NAN"}};if(IE(n.value))return{unaryFilter:{field:Ys(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(n.field),op:d9(n.op),value:n.value}}}(t):t instanceof gr?function(n){const r=n.getFilters().map(i=>lA(i));return r.length===1?r[0]:{compositeFilter:{op:f9(n.op),filters:r}}}(t):ne()}function h9(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function uA(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(e,n,r,i,s=oe.min(),o=oe.min(),a=Kt.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new gi(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new gi(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p9{constructor(e){this.ct=e}}function m9(t){const e=l9({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?av(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g9{constructor(){this.sn=new v9}addToCollectionParentIndex(e,n){return this.sn.add(n),D.resolve()}getCollectionParents(e,n){return D.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return D.resolve()}deleteFieldIndex(e,n){return D.resolve()}getDocumentsMatchingTarget(e,n){return D.resolve(null)}getIndexType(e,n){return D.resolve(0)}getFieldIndexes(e,n){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,n){return D.resolve(Mi.min())}getMinOffsetFromCollectionGroup(e,n){return D.resolve(Mi.min())}updateCollectionGroup(e,n,r){return D.resolve()}updateIndexEntries(e,n){return D.resolve()}}class v9{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ht(Ue.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ht(Ue.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.Mn=e}next(){return this.Mn+=2,this.Mn}static xn(){return new Jo(0)}static On(){return new Jo(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y9{constructor(){this.changes=new ga(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,Ut.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?D.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _9{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w9{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&vl(r.mutation,i,Bn.empty(),ht.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,pe()).next(()=>r))}getLocalViewOfDocuments(e,n,r=pe()){const i=us();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Xa();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=us();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,pe()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=Hr();const o=gl(),a=function(){return gl()}();return n.forEach((l,u)=>{const c=r.get(u.key);i.has(u.key)&&(c===void 0||c.mutation instanceof Fs)?s=s.insert(u.key,u):c!==void 0?(o.set(u.key,c.mutation.getFieldMask()),vl(c.mutation,u,c.mutation.getFieldMask(),ht.now())):o.set(u.key,Bn.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,c)=>o.set(u,c)),n.forEach((u,c)=>{var d;return a.set(u,new _9(c,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=gl();let i=new We((o,a)=>o-a),s=pe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let c=r.get(l)||Bn.empty();c=a.applyToLocalView(u,c),r.set(l,c);const d=(i.get(a.batchId)||pe()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,c=l.value,d=H2();c.forEach(f=>{if(!s.has(f)){const m=J2(n.get(f),r.get(f));m!==null&&d.set(f,m),s=s.add(f)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return D.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return J.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):RF(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):D.resolve(us());let a=-1,l=s;return o.next(u=>D.forEach(u,(c,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(c)?D.resolve():this.remoteDocumentCache.getEntry(e,c).next(f=>{l=l.insert(c,f)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,pe())).next(c=>({batchId:a,changes:B2(c)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new J(n)).next(r=>{let i=Xa();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=Xa();return this.indexManager.getCollectionParents(e,i).next(o=>D.forEach(o,a=>{const l=function(c,d){return new Eh(d,null,c.explicitOrderBy.slice(),c.filters.slice(),c.limit,c.limitType,c.startAt,c.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((c,d)=>{s=s.insert(c,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i))).next(s=>{i.forEach((a,l)=>{const u=l.getKey();s.get(u)===null&&(s=s.insert(u,Ut.newInvalidDocument(u)))});let o=Xa();return s.forEach((a,l)=>{const u=i.get(a);u!==void 0&&vl(u.mutation,l,Bn.empty(),ht.now()),Sh(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E9{constructor(e){this.serializer=e,this.ar=new Map,this.ur=new Map}getBundleMetadata(e,n){return D.resolve(this.ar.get(n))}saveBundleMetadata(e,n){return this.ar.set(n.id,function(i){return{id:i.id,version:i.version,createTime:hr(i.createTime)}}(n)),D.resolve()}getNamedQuery(e,n){return D.resolve(this.ur.get(n))}saveNamedQuery(e,n){return this.ur.set(n.name,function(i){return{name:i.name,query:m9(i.bundledQuery),readTime:hr(i.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T9{constructor(){this.overlays=new We(J.comparator),this.cr=new Map}getOverlay(e,n){return D.resolve(this.overlays.get(n))}getOverlays(e,n){const r=us();return D.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.ht(e,n,s)}),D.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.cr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.cr.delete(r)),D.resolve()}getOverlaysForCollection(e,n,r){const i=us(),s=n.length+1,o=new J(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return D.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new We((u,c)=>u-c);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let c=s.get(u.largestBatchId);c===null&&(c=us(),s=s.insert(u.largestBatchId,c)),c.set(u.getKey(),u)}}const a=us(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,c)=>a.set(u,c)),!(a.size()>=i)););return D.resolve(a)}ht(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.cr.get(i.largestBatchId).delete(r.key);this.cr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new HF(n,r));let s=this.cr.get(n);s===void 0&&(s=pe(),this.cr.set(n,s)),this.cr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(){this.lr=new Ht(vt.hr),this.Pr=new Ht(vt.Ir)}isEmpty(){return this.lr.isEmpty()}addReference(e,n){const r=new vt(e,n);this.lr=this.lr.add(r),this.Pr=this.Pr.add(r)}Tr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Er(new vt(e,n))}dr(e,n){e.forEach(r=>this.removeReference(r,n))}Ar(e){const n=new J(new Ue([])),r=new vt(n,e),i=new vt(n,e+1),s=[];return this.Pr.forEachInRange([r,i],o=>{this.Er(o),s.push(o.key)}),s}Rr(){this.lr.forEach(e=>this.Er(e))}Er(e){this.lr=this.lr.delete(e),this.Pr=this.Pr.delete(e)}Vr(e){const n=new J(new Ue([])),r=new vt(n,e),i=new vt(n,e+1);let s=pe();return this.Pr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new vt(e,0),r=this.lr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class vt{constructor(e,n){this.key=e,this.mr=n}static hr(e,n){return J.comparator(e.key,n.key)||we(e.mr,n.mr)}static Ir(e,n){return we(e.mr,n.mr)||J.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S9{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.gr=1,this.pr=new Ht(vt.hr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.gr;this.gr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new BF(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.pr=this.pr.add(new vt(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(e,n){return D.resolve(this.yr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.wr(r),s=i<0?0:i;return D.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.gr-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new vt(n,0),i=new vt(n,Number.POSITIVE_INFINITY),s=[];return this.pr.forEachInRange([r,i],o=>{const a=this.yr(o.mr);s.push(a)}),D.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ht(we);return n.forEach(i=>{const s=new vt(i,0),o=new vt(i,Number.POSITIVE_INFINITY);this.pr.forEachInRange([s,o],a=>{r=r.add(a.mr)})}),D.resolve(this.Sr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;J.isDocumentKey(s)||(s=s.child(""));const o=new vt(new J(s),0);let a=new Ht(we);return this.pr.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l.mr)),!0)},o),D.resolve(this.Sr(a))}Sr(e){const n=[];return e.forEach(r=>{const i=this.yr(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Me(this.br(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.pr;return D.forEach(n.mutations,i=>{const s=new vt(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.pr=r})}Cn(e){}containsKey(e,n){const r=new vt(n,0),i=this.pr.firstAfterOrEqual(r);return D.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}br(e,n){return this.wr(e)}wr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}yr(e){const n=this.wr(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b9{constructor(e){this.Dr=e,this.docs=function(){return new We(J.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Dr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return D.resolve(r?r.document.mutableCopy():Ut.newInvalidDocument(n))}getEntries(e,n){let r=Hr();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ut.newInvalidDocument(i))}),D.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Hr();const o=n.path,a=new J(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:u,value:{document:c}}=l.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||lF(aF(c),r)<=0||(i.has(c.key)||Sh(n,c))&&(s=s.insert(c.key,c.mutableCopy()))}return D.resolve(s)}getAllFromCollectionGroup(e,n,r,i){ne()}vr(e,n){return D.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new I9(this)}getSize(e){return D.resolve(this.size)}}class I9 extends y9{constructor(e){super(),this.sr=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.sr.addEntry(e,i)):this.sr.removeEntry(r)}),D.waitFor(n)}getFromCache(e,n){return this.sr.getEntry(e,n)}getAllFromCache(e,n){return this.sr.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k9{constructor(e){this.persistence=e,this.Cr=new ga(n=>I0(n),k0),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.Fr=0,this.Mr=new x0,this.targetCount=0,this.Or=Jo.xn()}forEachTarget(e,n){return this.Cr.forEach((r,i)=>n(i)),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.Fr)}allocateTargetId(e){return this.highestTargetId=this.Or.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Fr&&(this.Fr=n),D.resolve()}Ln(e){this.Cr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Or=new Jo(n),this.highestTargetId=n),e.sequenceNumber>this.Fr&&(this.Fr=e.sequenceNumber)}addTargetData(e,n){return this.Ln(n),this.targetCount+=1,D.resolve()}updateTargetData(e,n){return this.Ln(n),D.resolve()}removeTargetData(e,n){return this.Cr.delete(n.target),this.Mr.Ar(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Cr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Cr.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),D.waitFor(s).next(()=>i)}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cr.get(n)||null;return D.resolve(r)}addMatchingKeys(e,n,r){return this.Mr.Tr(n,r),D.resolve()}removeMatchingKeys(e,n,r){this.Mr.dr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),D.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Mr.Ar(n),D.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Mr.Vr(n);return D.resolve(r)}containsKey(e,n){return D.resolve(this.Mr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A9{constructor(e,n){this.Nr={},this.overlays={},this.Br=new E0(0),this.Lr=!1,this.Lr=!0,this.referenceDelegate=e(this),this.kr=new k9(this),this.indexManager=new g9,this.remoteDocumentCache=function(i){return new b9(i)}(r=>this.referenceDelegate.qr(r)),this.serializer=new p9(n),this.Qr=new E9(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Lr=!1,Promise.resolve()}get started(){return this.Lr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new T9,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Nr[e.toKey()];return r||(r=new S9(n,this.referenceDelegate),this.Nr[e.toKey()]=r),r}getTargetCache(){return this.kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Qr}runTransaction(e,n,r){G("MemoryPersistence","Starting transaction:",e);const i=new R9(this.Br.next());return this.referenceDelegate.Kr(),r(i).next(s=>this.referenceDelegate.$r(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ur(e,n){return D.or(Object.values(this.Nr).map(r=>()=>r.containsKey(e,n)))}}class R9 extends cF{constructor(e){super(),this.currentSequenceNumber=e}}class N0{constructor(e){this.persistence=e,this.Wr=new x0,this.Gr=null}static zr(e){return new N0(e)}get jr(){if(this.Gr)return this.Gr;throw ne()}addReference(e,n,r){return this.Wr.addReference(r,n),this.jr.delete(r.toString()),D.resolve()}removeReference(e,n,r){return this.Wr.removeReference(r,n),this.jr.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,n){return this.jr.add(n.toString()),D.resolve()}removeTarget(e,n){this.Wr.Ar(n.targetId).forEach(i=>this.jr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.jr.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Kr(){this.Gr=new Set}$r(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.jr,r=>{const i=J.fromPath(r);return this.Hr(e,i).next(s=>{s||n.removeEntry(i,oe.min())})}).next(()=>(this.Gr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Hr(e,n).next(r=>{r?this.jr.delete(n.toString()):this.jr.add(n.toString())})}qr(e){return 0}Hr(e,n){return D.or([()=>D.resolve(this.Wr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ur(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Li=r,this.ki=i}static qi(e,n){let r=pe(),i=pe();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new O0(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C9{constructor(){this.Qi=!1}initialize(e,n){this.Ki=e,this.indexManager=n,this.Qi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.$i(e,n).next(s=>s||this.Ui(e,n,i,r)).next(s=>s||this.Wi(e,n))}$i(e,n){if(PE(n))return D.resolve(null);let r=Br(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=av(n,null,"F"),r=Br(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=pe(...s);return this.Ki.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Gi(n,a);return this.zi(n,u,o,l.readTime)?this.$i(e,av(n,null,"F")):this.ji(e,u,n,l)}))})))}Ui(e,n,r,i){return PE(n)||i.isEqual(oe.min())?this.Wi(e,n):this.Ki.getDocuments(e,r).next(s=>{const o=this.Gi(n,s);return this.zi(n,o,r,i)?this.Wi(e,n):(EE()<=ve.DEBUG&&G("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),lv(n)),this.ji(e,o,n,oF(i,-1)))})}Gi(e,n){let r=new Ht(z2(e));return n.forEach((i,s)=>{Sh(e,s)&&(r=r.add(s))}),r}zi(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Wi(e,n){return EE()<=ve.DEBUG&&G("QueryEngine","Using full collection scan to execute query:",lv(n)),this.Ki.getDocumentsMatchingQuery(e,n,Mi.min())}ji(e,n,r,i){return this.Ki.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P9{constructor(e,n,r,i){this.persistence=e,this.Hi=n,this.serializer=i,this.Ji=new We(we),this.Yi=new ga(s=>I0(s),k0),this.Zi=new Map,this.Xi=e.getRemoteDocumentCache(),this.kr=e.getTargetCache(),this.Qr=e.getBundleCache(),this.es(r)}es(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new w9(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Hi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Ji))}}function x9(t,e,n,r){return new P9(t,e,n,r)}async function cA(t,e){const n=ue(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.es(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=pe();for(const u of i){o.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}for(const u of s){a.push(u.batchId);for(const c of u.mutations)l=l.add(c.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ts:u,removedBatchIds:o,addedBatchIds:a}))})})}function N9(t,e){const n=ue(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Xi.newChangeBuffer({trackRemovals:!0});return function(a,l,u,c){const d=u.batch,f=d.keys();let m=D.resolve();return f.forEach(w=>{m=m.next(()=>c.getEntry(l,w)).next(_=>{const E=u.docVersions.get(w);Me(E!==null),_.version.compareTo(E)<0&&(d.applyToRemoteDocument(_,u),_.isValidDocument()&&(_.setReadTime(u.commitVersion),c.addEntry(_)))})}),m.next(()=>a.mutationQueue.removeMutationBatch(l,d))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=pe();for(let u=0;u<a.mutationResults.length;++u)a.mutationResults[u].transformResults.length>0&&(l=l.add(a.batch.mutations[u].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function dA(t){const e=ue(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.kr.getLastRemoteSnapshotVersion(n))}function O9(t,e){const n=ue(t),r=e.snapshotVersion;let i=n.Ji;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Xi.newChangeBuffer({trackRemovals:!0});i=n.Ji;const a=[];e.targetChanges.forEach((c,d)=>{const f=i.get(d);if(!f)return;a.push(n.kr.removeMatchingKeys(s,c.removedDocuments,d).next(()=>n.kr.addMatchingKeys(s,c.addedDocuments,d)));let m=f.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(d)!==null?m=m.withResumeToken(Kt.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):c.resumeToken.approximateByteSize()>0&&(m=m.withResumeToken(c.resumeToken,r)),i=i.insert(d,m),function(_,E,v){return _.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-_.snapshotVersion.toMicroseconds()>=3e8?!0:v.addedDocuments.size+v.modifiedDocuments.size+v.removedDocuments.size>0}(f,m,c)&&a.push(n.kr.updateTargetData(s,m))});let l=Hr(),u=pe();if(e.documentUpdates.forEach(c=>{e.resolvedLimboDocuments.has(c)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(D9(s,o,e.documentUpdates).next(c=>{l=c.ns,u=c.rs})),!r.isEqual(oe.min())){const c=n.kr.getLastRemoteSnapshotVersion(s).next(d=>n.kr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return D.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.Ji=i,s))}function D9(t,e,n){let r=pe(),i=pe();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Hr();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(oe.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):G("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{ns:o,rs:i}})}function L9(t,e){const n=ue(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function M9(t,e){const n=ue(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.kr.getTargetData(r,e).next(s=>s?(i=s,D.resolve(i)):n.kr.allocateTargetId(r).next(o=>(i=new gi(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.kr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.Ji.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Ji=n.Ji.insert(r.targetId,r),n.Yi.set(e,r.targetId)),r})}async function hv(t,e,n){const r=ue(t),i=r.Ji.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vu(o))throw o;G("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Ji=r.Ji.remove(e),r.Yi.delete(i.target)}function $E(t,e,n){const r=ue(t);let i=oe.min(),s=pe();return r.persistence.runTransaction("Execute query","readonly",o=>function(l,u,c){const d=ue(l),f=d.Yi.get(c);return f!==void 0?D.resolve(d.Ji.get(f)):d.kr.getTargetData(u,c)}(r,o,Br(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.kr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Hi.getDocumentsMatchingQuery(o,e,n?i:oe.min(),n?s:pe())).next(a=>(V9(r,CF(e),a),{documents:a,ss:s})))}function V9(t,e,n){let r=t.Zi.get(e)||oe.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Zi.set(e,r)}class zE{constructor(){this.activeTargetIds=LF()}hs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ps(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ls(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class F9{constructor(){this.Hs=new zE,this.Js={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Hs.hs(e),this.Js[e]||"not-current"}updateQueryState(e,n,r){this.Js[e]=n}removeLocalQueryTarget(e){this.Hs.Ps(e)}isLocalQueryTarget(e){return this.Hs.activeTargetIds.has(e)}clearQueryState(e){delete this.Js[e]}getAllActiveQueryTargets(){return this.Hs.activeTargetIds}isActiveQueryTarget(e){return this.Hs.activeTargetIds.has(e)}start(){return this.Hs=new zE,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q9{Ys(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jE{constructor(){this.Zs=()=>this.Xs(),this.eo=()=>this.no(),this.ro=[],this.io()}Ys(e){this.ro.push(e)}shutdown(){window.removeEventListener("online",this.Zs),window.removeEventListener("offline",this.eo)}io(){window.addEventListener("online",this.Zs),window.addEventListener("offline",this.eo)}Xs(){G("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.ro)e(0)}no(){G("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.ro)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vc=null;function rm(){return Vc===null?Vc=function(){return 268435456+Math.round(2147483648*Math.random())}():Vc++,"0x"+Vc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U9={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $9{constructor(e){this.so=e.so,this.oo=e.oo}_o(e){this.ao=e}uo(e){this.co=e}onMessage(e){this.lo=e}close(){this.oo()}send(e){this.so(e)}ho(){this.ao()}Po(e){this.co(e)}Io(e){this.lo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vt="WebChannelConnection";class z9 extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.To=r+"://"+n.host,this.Eo=`projects/${i}/databases/${s}`,this.Ao=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get Ro(){return!1}Vo(n,r,i,s,o){const a=rm(),l=this.mo(n,r);G("RestConnection",`Sending RPC '${n}' ${a}:`,l,i);const u={"google-cloud-resource-prefix":this.Eo,"x-goog-request-params":this.Ao};return this.fo(u,s,o),this.po(n,l,u,i).then(c=>(G("RestConnection",`Received RPC '${n}' ${a}: `,c),c),c=>{throw Go("RestConnection",`RPC '${n}' ${a} failed with error: `,c,"url: ",l,"request:",i),c})}yo(n,r,i,s,o,a){return this.Vo(n,r,i,s,o)}fo(n,r,i){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+pa}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>n[o]=s),i&&i.headers.forEach((s,o)=>n[o]=s)}mo(n,r){const i=U9[n];return`${this.To}/v1/${r}:${i}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}po(e,n,r,i){const s=rm();return new Promise((o,a)=>{const l=new QV;l.setWithCredentials(!0),l.listenOnce(WV.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case tm.NO_ERROR:const c=l.getResponseJson();G(Vt,`XHR for RPC '${e}' ${s} received:`,JSON.stringify(c)),o(c);break;case tm.TIMEOUT:G(Vt,`RPC '${e}' ${s} timed out`),a(new X(N.DEADLINE_EXCEEDED,"Request time out"));break;case tm.HTTP_ERROR:const d=l.getStatus();if(G(Vt,`RPC '${e}' ${s} failed with status:`,d,"response text:",l.getResponseText()),d>0){let f=l.getResponseJson();Array.isArray(f)&&(f=f[0]);const m=f==null?void 0:f.error;if(m&&m.status&&m.message){const w=function(E){const v=E.toLowerCase().replace(/_/g,"-");return Object.values(N).indexOf(v)>=0?v:N.UNKNOWN}(m.status);a(new X(w,m.message))}else a(new X(N.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new X(N.UNAVAILABLE,"Connection failed."));break;default:ne()}}finally{G(Vt,`RPC '${e}' ${s} completed.`)}});const u=JSON.stringify(i);G(Vt,`RPC '${e}' ${s} sending request:`,i),l.send(n,"POST",u,r,15)})}wo(e,n,r){const i=rm(),s=[this.To,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=BV(),a=HV(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;u!==void 0&&(l.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(l.xmlHttpFactory=new GV({})),this.fo(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const c=s.join("");G(Vt,`Creating RPC '${e}' stream ${i}: ${c}`,l);const d=o.createWebChannel(c,l);let f=!1,m=!1;const w=new $9({so:E=>{m?G(Vt,`Not sending because RPC '${e}' stream ${i} is closed:`,E):(f||(G(Vt,`Opening RPC '${e}' stream ${i} transport.`),d.open(),f=!0),G(Vt,`RPC '${e}' stream ${i} sending:`,E),d.send(E))},oo:()=>d.close()}),_=(E,v,h)=>{E.listen(v,y=>{try{h(y)}catch(g){setTimeout(()=>{throw g},0)}})};return _(d,Oc.EventType.OPEN,()=>{m||G(Vt,`RPC '${e}' stream ${i} transport opened.`)}),_(d,Oc.EventType.CLOSE,()=>{m||(m=!0,G(Vt,`RPC '${e}' stream ${i} transport closed`),w.Po())}),_(d,Oc.EventType.ERROR,E=>{m||(m=!0,Go(Vt,`RPC '${e}' stream ${i} transport errored:`,E),w.Po(new X(N.UNAVAILABLE,"The operation could not be completed")))}),_(d,Oc.EventType.MESSAGE,E=>{var v;if(!m){const h=E.data[0];Me(!!h);const y=h,g=y.error||((v=y[0])===null||v===void 0?void 0:v.error);if(g){G(Vt,`RPC '${e}' stream ${i} received error:`,g);const T=g.status;let S=function(C){const P=tt[C];if(P!==void 0)return tA(P)}(T),A=g.message;S===void 0&&(S=N.INTERNAL,A="Unknown error status: "+T+" with message "+g.message),m=!0,w.Po(new X(S,A)),d.close()}else G(Vt,`RPC '${e}' stream ${i} received:`,h),w.Io(h)}}),_(a,KV.STAT_EVENT,E=>{E.stat===_E.PROXY?G(Vt,`RPC '${e}' stream ${i} detected buffering proxy`):E.stat===_E.NOPROXY&&G(Vt,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{w.ho()},0),w}}function im(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ah(t){return new e9(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fA{constructor(e,n,r=1e3,i=1.5,s=6e4){this.ii=e,this.timerId=n,this.So=r,this.bo=i,this.Do=s,this.vo=0,this.Co=null,this.Fo=Date.now(),this.reset()}reset(){this.vo=0}Mo(){this.vo=this.Do}xo(e){this.cancel();const n=Math.floor(this.vo+this.Oo()),r=Math.max(0,Date.now()-this.Fo),i=Math.max(0,n-r);i>0&&G("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Co=this.ii.enqueueAfterDelay(this.timerId,i,()=>(this.Fo=Date.now(),e())),this.vo*=this.bo,this.vo<this.So&&(this.vo=this.So),this.vo>this.Do&&(this.vo=this.Do)}No(){this.Co!==null&&(this.Co.skipDelay(),this.Co=null)}cancel(){this.Co!==null&&(this.Co.cancel(),this.Co=null)}Oo(){return(Math.random()-.5)*this.vo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e,n,r,i,s,o,a,l){this.ii=e,this.Bo=r,this.Lo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.ko=0,this.qo=null,this.Qo=null,this.stream=null,this.Ko=new fA(e,n)}$o(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Wo()}async stop(){this.$o()&&await this.close(0)}Go(){this.state=0,this.Ko.reset()}zo(){this.Uo()&&this.qo===null&&(this.qo=this.ii.enqueueAfterDelay(this.Bo,6e4,()=>this.jo()))}Ho(e){this.Jo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Jo(){this.qo&&(this.qo.cancel(),this.qo=null)}Yo(){this.Qo&&(this.Qo.cancel(),this.Qo=null)}async close(e,n){this.Jo(),this.Yo(),this.Ko.cancel(),this.ko++,e!==4?this.Ko.reset():n&&n.code===N.RESOURCE_EXHAUSTED?(jr(n.toString()),jr("Using maximum backoff delay to prevent overloading the backend."),this.Ko.Mo()):n&&n.code===N.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Zo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.uo(n)}Zo(){}auth(){this.state=1;const e=this.Xo(this.ko),n=this.ko;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.ko===n&&this.e_(r,i)},r=>{e(()=>{const i=new X(N.UNKNOWN,"Fetching auth token failed: "+r.message);return this.t_(i)})})}e_(e,n){const r=this.Xo(this.ko);this.stream=this.n_(e,n),this.stream._o(()=>{r(()=>(this.state=2,this.Qo=this.ii.enqueueAfterDelay(this.Lo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener._o()))}),this.stream.uo(i=>{r(()=>this.t_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Wo(){this.state=5,this.Ko.xo(async()=>{this.state=0,this.start()})}t_(e){return G("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Xo(e){return n=>{this.ii.enqueueAndForget(()=>this.ko===e?n():(G("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class j9 extends hA{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}n_(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Ko.reset();const n=r9(this.serializer,e),r=function(s){if(!("targetChange"in s))return oe.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?oe.min():o.readTime?hr(o.readTime):oe.min()}(e);return this.listener.r_(n,r)}i_(e){const n={};n.database=fv(this.serializer),n.addTarget=function(s,o){let a;const l=o.target;if(a=ov(l)?{documents:o9(s,l)}:{query:a9(s,l)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=iA(s,o.resumeToken);const u=uv(s,o.expectedCount);u!==null&&(a.expectedCount=u)}else if(o.snapshotVersion.compareTo(oe.min())>0){a.readTime=mf(s,o.snapshotVersion.toTimestamp());const u=uv(s,o.expectedCount);u!==null&&(a.expectedCount=u)}return a}(this.serializer,e);const r=u9(this.serializer,e);r&&(n.labels=r),this.Ho(n)}s_(e){const n={};n.database=fv(this.serializer),n.removeTarget=e,this.Ho(n)}}class B9 extends hA{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s,this.o_=!1}get __(){return this.o_}start(){this.o_=!1,this.lastStreamToken=void 0,super.start()}Zo(){this.o_&&this.a_([])}n_(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Me(!!e.streamToken),this.lastStreamToken=e.streamToken,this.o_){this.Ko.reset();const n=s9(e.writeResults,e.commitTime),r=hr(e.commitTime);return this.listener.u_(r,n)}return Me(!e.writeResults||e.writeResults.length===0),this.o_=!0,this.listener.c_()}l_(){const e={};e.database=fv(this.serializer),this.Ho(e)}a_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>i9(this.serializer,r))};this.Ho(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H9 extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.h_=!1}P_(){if(this.h_)throw new X(N.FAILED_PRECONDITION,"The client has already been terminated.")}Vo(e,n,r){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.Vo(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new X(N.UNKNOWN,i.toString())})}yo(e,n,r,i){return this.P_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.yo(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===N.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new X(N.UNKNOWN,s.toString())})}terminate(){this.h_=!0}}class W9{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.T_=0,this.E_=null,this.d_=!0}A_(){this.T_===0&&(this.R_("Unknown"),this.E_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.E_=null,this.V_("Backend didn't respond within 10 seconds."),this.R_("Offline"),Promise.resolve())))}m_(e){this.state==="Online"?this.R_("Unknown"):(this.T_++,this.T_>=1&&(this.f_(),this.V_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.R_("Offline")))}set(e){this.f_(),this.T_=0,e==="Online"&&(this.d_=!1),this.R_(e)}R_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}V_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.d_?(jr(n),this.d_=!1):G("OnlineStateTracker",n)}f_(){this.E_!==null&&(this.E_.cancel(),this.E_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K9{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.g_=[],this.p_=new Map,this.y_=new Set,this.w_=[],this.S_=s,this.S_.Ys(o=>{r.enqueueAndForget(async()=>{qs(this)&&(G("RemoteStore","Restarting streams for network reachability change."),await async function(l){const u=ue(l);u.y_.add(4),await Uu(u),u.b_.set("Unknown"),u.y_.delete(4),await Rh(u)}(this))})}),this.b_=new W9(r,i)}}async function Rh(t){if(qs(t))for(const e of t.w_)await e(!0)}async function Uu(t){for(const e of t.w_)await e(!1)}function pA(t,e){const n=ue(t);n.p_.has(e.targetId)||(n.p_.set(e.targetId,e),M0(n)?L0(n):va(n).Uo()&&D0(n,e))}function mA(t,e){const n=ue(t),r=va(n);n.p_.delete(e),r.Uo()&&gA(n,e),n.p_.size===0&&(r.Uo()?r.zo():qs(n)&&n.b_.set("Unknown"))}function D0(t,e){if(t.D_.Be(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}va(t).i_(e)}function gA(t,e){t.D_.Be(e),va(t).s_(e)}function L0(t){t.D_=new YF({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ut:e=>t.p_.get(e)||null,rt:()=>t.datastore.serializer.databaseId}),va(t).start(),t.b_.A_()}function M0(t){return qs(t)&&!va(t).$o()&&t.p_.size>0}function qs(t){return ue(t).y_.size===0}function vA(t){t.D_=void 0}async function G9(t){t.p_.forEach((e,n)=>{D0(t,e)})}async function Q9(t,e){vA(t),M0(t)?(t.b_.m_(e),L0(t)):t.b_.set("Unknown")}async function Y9(t,e,n){if(t.b_.set("Online"),e instanceof rA&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.p_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.p_.delete(a),i.D_.removeTarget(a))}(t,e)}catch(r){G("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await gf(t,r)}else if(e instanceof sd?t.D_.We(e):e instanceof nA?t.D_.Ze(e):t.D_.je(e),!n.isEqual(oe.min()))try{const r=await dA(t.localStore);n.compareTo(r)>=0&&await function(s,o){const a=s.D_.st(o);return a.targetChanges.forEach((l,u)=>{if(l.resumeToken.approximateByteSize()>0){const c=s.p_.get(u);c&&s.p_.set(u,c.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,u)=>{const c=s.p_.get(l);if(!c)return;s.p_.set(l,c.withResumeToken(Kt.EMPTY_BYTE_STRING,c.snapshotVersion)),gA(s,l);const d=new gi(c.target,l,u,c.sequenceNumber);D0(s,d)}),s.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){G("RemoteStore","Failed to raise snapshot:",r),await gf(t,r)}}async function gf(t,e,n){if(!Vu(e))throw e;t.y_.add(1),await Uu(t),t.b_.set("Offline"),n||(n=()=>dA(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{G("RemoteStore","Retrying IndexedDB access"),await n(),t.y_.delete(1),await Rh(t)})}function yA(t,e){return e().catch(n=>gf(t,n,e))}async function Ch(t){const e=ue(t),n=Fi(e);let r=e.g_.length>0?e.g_[e.g_.length-1].batchId:-1;for(;X9(e);)try{const i=await L9(e.localStore,r);if(i===null){e.g_.length===0&&n.zo();break}r=i.batchId,J9(e,i)}catch(i){await gf(e,i)}_A(e)&&wA(e)}function X9(t){return qs(t)&&t.g_.length<10}function J9(t,e){t.g_.push(e);const n=Fi(t);n.Uo()&&n.__&&n.a_(e.mutations)}function _A(t){return qs(t)&&!Fi(t).$o()&&t.g_.length>0}function wA(t){Fi(t).start()}async function Z9(t){Fi(t).l_()}async function eq(t){const e=Fi(t);for(const n of t.g_)e.a_(n.mutations)}async function tq(t,e,n){const r=t.g_.shift(),i=A0.from(r,e,n);await yA(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Ch(t)}async function nq(t,e){e&&Fi(t).__&&await async function(r,i){if(function(o){return KF(o)&&o!==N.ABORTED}(i.code)){const s=r.g_.shift();Fi(r).Go(),await yA(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ch(r)}}(t,e),_A(t)&&wA(t)}async function BE(t,e){const n=ue(t);n.asyncQueue.verifyOperationInProgress(),G("RemoteStore","RemoteStore received new credentials");const r=qs(n);n.y_.add(3),await Uu(n),r&&n.b_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.y_.delete(3),await Rh(n)}async function rq(t,e){const n=ue(t);e?(n.y_.delete(2),await Rh(n)):e||(n.y_.add(2),await Uu(n),n.b_.set("Unknown"))}function va(t){return t.v_||(t.v_=function(n,r,i){const s=ue(n);return s.P_(),new j9(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:G9.bind(null,t),uo:Q9.bind(null,t),r_:Y9.bind(null,t)}),t.w_.push(async e=>{e?(t.v_.Go(),M0(t)?L0(t):t.b_.set("Unknown")):(await t.v_.stop(),vA(t))})),t.v_}function Fi(t){return t.C_||(t.C_=function(n,r,i){const s=ue(n);return s.P_(),new B9(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{_o:Z9.bind(null,t),uo:nq.bind(null,t),c_:eq.bind(null,t),u_:tq.bind(null,t)}),t.w_.push(async e=>{e?(t.C_.Go(),await Ch(t)):(await t.C_.stop(),t.g_.length>0&&(G("RemoteStore",`Stopping write stream with ${t.g_.length} pending writes`),t.g_=[]))})),t.C_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ai,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new V0(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new X(N.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function F0(t,e){if(jr("AsyncQueue",`${e}: ${t}`),Vu(t))return new X(N.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e){this.comparator=e?(n,r)=>e(n,r)||J.comparator(n.key,r.key):(n,r)=>J.comparator(n.key,r.key),this.keyedMap=Xa(),this.sortedSet=new We(this.comparator)}static emptySet(e){return new Po(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Po)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new Po;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(){this.F_=new We(J.comparator)}track(e){const n=e.doc.key,r=this.F_.get(n);r?e.type!==0&&r.type===3?this.F_=this.F_.insert(n,e):e.type===3&&r.type!==1?this.F_=this.F_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.F_=this.F_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.F_=this.F_.remove(n):e.type===1&&r.type===2?this.F_=this.F_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.F_=this.F_.insert(n,{type:2,doc:e.doc}):ne():this.F_=this.F_.insert(n,e)}M_(){const e=[];return this.F_.inorderTraversal((n,r)=>{e.push(r)}),e}}class Zo{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Zo(e,n,Po.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Th(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iq{constructor(){this.x_=void 0,this.listeners=[]}}class sq{constructor(){this.queries=new ga(e=>$2(e),Th),this.onlineState="Unknown",this.O_=new Set}}async function oq(t,e){const n=ue(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new iq),i)try{s.x_=await n.onListen(r)}catch(o){const a=F0(o,`Initialization of query '${lv(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.N_(n.onlineState),s.x_&&e.B_(s.x_)&&q0(n)}async function aq(t,e){const n=ue(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function lq(t,e){const n=ue(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.B_(i)&&(r=!0);o.x_=i}}r&&q0(n)}function uq(t,e,n){const r=ue(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function q0(t){t.O_.forEach(e=>{e.next()})}class cq{constructor(e,n,r){this.query=e,this.L_=n,this.k_=!1,this.q_=null,this.onlineState="Unknown",this.options=r||{}}B_(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Zo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.k_?this.Q_(e)&&(this.L_.next(e),n=!0):this.K_(e,this.onlineState)&&(this.U_(e),n=!0),this.q_=e,n}onError(e){this.L_.error(e)}N_(e){this.onlineState=e;let n=!1;return this.q_&&!this.k_&&this.K_(this.q_,e)&&(this.U_(this.q_),n=!0),n}K_(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.W_||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Q_(e){if(e.docChanges.length>0)return!0;const n=this.q_&&this.q_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}U_(e){e=Zo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.k_=!0,this.L_.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.key=e}}class TA{constructor(e){this.key=e}}class dq{constructor(e,n){this.query=e,this.X_=n,this.ea=null,this.hasCachedResults=!1,this.current=!1,this.ta=pe(),this.mutatedKeys=pe(),this.na=z2(e),this.ra=new Po(this.na)}get ia(){return this.X_}sa(e,n){const r=n?n.oa:new HE,i=n?n.ra:this.ra;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,d)=>{const f=i.get(c),m=Sh(this.query,d)?d:null,w=!!f&&this.mutatedKeys.has(f.key),_=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let E=!1;f&&m?f.data.isEqual(m.data)?w!==_&&(r.track({type:3,doc:m}),E=!0):this._a(f,m)||(r.track({type:2,doc:m}),E=!0,(l&&this.na(m,l)>0||u&&this.na(m,u)<0)&&(a=!0)):!f&&m?(r.track({type:0,doc:m}),E=!0):f&&!m&&(r.track({type:1,doc:f}),E=!0,(l||u)&&(a=!0)),E&&(m?(o=o.add(m),s=_?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{ra:o,oa:r,zi:a,mutatedKeys:s}}_a(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.ra;this.ra=e.ra,this.mutatedKeys=e.mutatedKeys;const s=e.oa.M_();s.sort((u,c)=>function(f,m){const w=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ne()}};return w(f)-w(m)}(u.type,c.type)||this.na(u.doc,c.doc)),this.aa(r);const o=n?this.ua():[],a=this.ta.size===0&&this.current?1:0,l=a!==this.ea;return this.ea=a,s.length!==0||l?{snapshot:new Zo(this.query,e.ra,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),ca:o}:{ca:o}}N_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({ra:this.ra,oa:new HE,mutatedKeys:this.mutatedKeys,zi:!1},!1)):{ca:[]}}la(e){return!this.X_.has(e)&&!!this.ra.has(e)&&!this.ra.get(e).hasLocalMutations}aa(e){e&&(e.addedDocuments.forEach(n=>this.X_=this.X_.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.X_=this.X_.delete(n)),this.current=e.current)}ua(){if(!this.current)return[];const e=this.ta;this.ta=pe(),this.ra.forEach(r=>{this.la(r.key)&&(this.ta=this.ta.add(r.key))});const n=[];return e.forEach(r=>{this.ta.has(r)||n.push(new TA(r))}),this.ta.forEach(r=>{e.has(r)||n.push(new EA(r))}),n}ha(e){this.X_=e.ss,this.ta=pe();const n=this.sa(e.documents);return this.applyChanges(n,!0)}Pa(){return Zo.fromInitialDocuments(this.query,this.ra,this.mutatedKeys,this.ea===0,this.hasCachedResults)}}class fq{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hq{constructor(e){this.key=e,this.Ia=!1}}class pq{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Ta={},this.Ea=new ga(a=>$2(a),Th),this.da=new Map,this.Aa=new Set,this.Ra=new We(J.comparator),this.Va=new Map,this.ma=new x0,this.fa={},this.ga=new Map,this.pa=Jo.On(),this.onlineState="Unknown",this.ya=void 0}get isPrimaryClient(){return this.ya===!0}}async function mq(t,e){const n=Iq(t);let r,i;const s=n.Ea.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Pa();else{const o=await M9(n.localStore,Br(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await gq(n,e,r,a==="current",o.resumeToken),n.isPrimaryClient&&pA(n.remoteStore,o)}return i}async function gq(t,e,n,r,i){t.wa=(d,f,m)=>async function(_,E,v,h){let y=E.view.sa(v);y.zi&&(y=await $E(_.localStore,E.query,!1).then(({documents:S})=>E.view.sa(S,y)));const g=h&&h.targetChanges.get(E.targetId),T=E.view.applyChanges(y,_.isPrimaryClient,g);return KE(_,E.targetId,T.ca),T.snapshot}(t,d,f,m);const s=await $E(t.localStore,e,!0),o=new dq(e,s.ss),a=o.sa(s.documents),l=qu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);KE(t,n,u.ca);const c=new fq(e,n,o);return t.Ea.set(e,c),t.da.has(n)?t.da.get(n).push(e):t.da.set(n,[e]),u.snapshot}async function vq(t,e){const n=ue(t),r=n.Ea.get(e),i=n.da.get(r.targetId);if(i.length>1)return n.da.set(r.targetId,i.filter(s=>!Th(s,e))),void n.Ea.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await hv(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),mA(n.remoteStore,r.targetId),pv(n,r.targetId)}).catch(Mu)):(pv(n,r.targetId),await hv(n.localStore,r.targetId,!0))}async function yq(t,e,n){const r=kq(t);try{const i=await function(o,a){const l=ue(o),u=ht.now(),c=a.reduce((m,w)=>m.add(w.key),pe());let d,f;return l.persistence.runTransaction("Locally write mutations","readwrite",m=>{let w=Hr(),_=pe();return l.Xi.getEntries(m,c).next(E=>{w=E,w.forEach((v,h)=>{h.isValidDocument()||(_=_.add(v))})}).next(()=>l.localDocuments.getOverlayedDocuments(m,w)).next(E=>{d=E;const v=[];for(const h of a){const y=zF(h,d.get(h.key).overlayedDocument);y!=null&&v.push(new Fs(h.key,y,O2(y.value.mapValue),Nr.exists(!0)))}return l.mutationQueue.addMutationBatch(m,u,v,a)}).next(E=>{f=E;const v=E.applyToLocalDocumentSet(d,_);return l.documentOverlayCache.saveOverlays(m,E.batchId,v)})}).then(()=>({batchId:f.batchId,changes:B2(d)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,l){let u=o.fa[o.currentUser.toKey()];u||(u=new We(we)),u=u.insert(a,l),o.fa[o.currentUser.toKey()]=u}(r,i.batchId,n),await $u(r,i.changes),await Ch(r.remoteStore)}catch(i){const s=F0(i,"Failed to persist write");n.reject(s)}}async function SA(t,e){const n=ue(t);try{const r=await O9(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Va.get(s);o&&(Me(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ia=!0:i.modifiedDocuments.size>0?Me(o.Ia):i.removedDocuments.size>0&&(Me(o.Ia),o.Ia=!1))}),await $u(n,r,e)}catch(r){await Mu(r)}}function WE(t,e,n){const r=ue(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Ea.forEach((s,o)=>{const a=o.view.N_(e);a.snapshot&&i.push(a.snapshot)}),function(o,a){const l=ue(o);l.onlineState=a;let u=!1;l.queries.forEach((c,d)=>{for(const f of d.listeners)f.N_(a)&&(u=!0)}),u&&q0(l)}(r.eventManager,e),i.length&&r.Ta.r_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function _q(t,e,n){const r=ue(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Va.get(e),s=i&&i.key;if(s){let o=new We(J.comparator);o=o.insert(s,Ut.newNoDocument(s,oe.min()));const a=pe().add(s),l=new kh(oe.min(),new Map,new We(we),o,a);await SA(r,l),r.Ra=r.Ra.remove(s),r.Va.delete(e),U0(r)}else await hv(r.localStore,e,!1).then(()=>pv(r,e,n)).catch(Mu)}async function wq(t,e){const n=ue(t),r=e.batch.batchId;try{const i=await N9(n.localStore,e);IA(n,r,null),bA(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await $u(n,i)}catch(i){await Mu(i)}}async function Eq(t,e,n){const r=ue(t);try{const i=await function(o,a){const l=ue(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let c;return l.mutationQueue.lookupMutationBatch(u,a).next(d=>(Me(d!==null),c=d.keys(),l.mutationQueue.removeMutationBatch(u,d))).next(()=>l.mutationQueue.performConsistencyCheck(u)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(u,c,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,c)).next(()=>l.localDocuments.getDocuments(u,c))})}(r.localStore,e);IA(r,e,n),bA(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await $u(r,i)}catch(i){await Mu(i)}}function bA(t,e){(t.ga.get(e)||[]).forEach(n=>{n.resolve()}),t.ga.delete(e)}function IA(t,e,n){const r=ue(t);let i=r.fa[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.fa[r.currentUser.toKey()]=i}}function pv(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.da.get(e))t.Ea.delete(r),n&&t.Ta.Sa(r,n);t.da.delete(e),t.isPrimaryClient&&t.ma.Ar(e).forEach(r=>{t.ma.containsKey(r)||kA(t,r)})}function kA(t,e){t.Aa.delete(e.path.canonicalString());const n=t.Ra.get(e);n!==null&&(mA(t.remoteStore,n),t.Ra=t.Ra.remove(e),t.Va.delete(n),U0(t))}function KE(t,e,n){for(const r of n)r instanceof EA?(t.ma.addReference(r.key,e),Tq(t,r)):r instanceof TA?(G("SyncEngine","Document no longer in limbo: "+r.key),t.ma.removeReference(r.key,e),t.ma.containsKey(r.key)||kA(t,r.key)):ne()}function Tq(t,e){const n=e.key,r=n.path.canonicalString();t.Ra.get(n)||t.Aa.has(r)||(G("SyncEngine","New document in limbo: "+n),t.Aa.add(r),U0(t))}function U0(t){for(;t.Aa.size>0&&t.Ra.size<t.maxConcurrentLimboResolutions;){const e=t.Aa.values().next().value;t.Aa.delete(e);const n=new J(Ue.fromString(e)),r=t.pa.next();t.Va.set(r,new hq(n)),t.Ra=t.Ra.insert(n,r),pA(t.remoteStore,new gi(Br(U2(n.path)),r,"TargetPurposeLimboResolution",E0.ae))}}async function $u(t,e,n){const r=ue(t),i=[],s=[],o=[];r.Ea.isEmpty()||(r.Ea.forEach((a,l)=>{o.push(r.wa(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const c=O0.qi(l.targetId,u);s.push(c)}}))}),await Promise.all(o),r.Ta.r_(i),await async function(l,u){const c=ue(l);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>D.forEach(u,f=>D.forEach(f.Li,m=>c.persistence.referenceDelegate.addReference(d,f.targetId,m)).next(()=>D.forEach(f.ki,m=>c.persistence.referenceDelegate.removeReference(d,f.targetId,m)))))}catch(d){if(!Vu(d))throw d;G("LocalStore","Failed to update sequence numbers: "+d)}for(const d of u){const f=d.targetId;if(!d.fromCache){const m=c.Ji.get(f),w=m.snapshotVersion,_=m.withLastLimboFreeSnapshotVersion(w);c.Ji=c.Ji.insert(f,_)}}}(r.localStore,s))}async function Sq(t,e){const n=ue(t);if(!n.currentUser.isEqual(e)){G("SyncEngine","User change. New user:",e.toKey());const r=await cA(n.localStore,e);n.currentUser=e,function(s,o){s.ga.forEach(a=>{a.forEach(l=>{l.reject(new X(N.CANCELLED,o))})}),s.ga.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await $u(n,r.ts)}}function bq(t,e){const n=ue(t),r=n.Va.get(e);if(r&&r.Ia)return pe().add(r.key);{let i=pe();const s=n.da.get(e);if(!s)return i;for(const o of s){const a=n.Ea.get(o);i=i.unionWith(a.view.ia)}return i}}function Iq(t){const e=ue(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=SA.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=bq.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=_q.bind(null,e),e.Ta.r_=lq.bind(null,e.eventManager),e.Ta.Sa=uq.bind(null,e.eventManager),e}function kq(t){const e=ue(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=wq.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Eq.bind(null,e),e}class GE{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Ah(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return x9(this.persistence,new C9,e.initialUser,this.serializer)}createPersistence(e){return new A9(N0.zr,this.serializer)}createSharedClientState(e){return new F9}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Aq{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>WE(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Sq.bind(null,this.syncEngine),await rq(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new sq}()}createDatastore(e){const n=Ah(e.databaseInfo.databaseId),r=function(s){return new z9(s)}(e.databaseInfo);return function(s,o,a,l){return new H9(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,a){return new K9(r,i,s,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>WE(this.syncEngine,n,0),function(){return jE.v()?new jE:new q9}())}createSyncEngine(e,n){return function(i,s,o,a,l,u,c){const d=new pq(i,s,o,a,l,u);return c&&(d.ya=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(n){const r=ue(n);G("RemoteStore","RemoteStore shutting down."),r.y_.add(5),await Uu(r),r.S_.shutdown(),r.b_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rq{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.va(this.observer.next,e)}error(e){this.observer.error?this.va(this.observer.error,e):jr("Uncaught Error in snapshot listener:",e.toString())}Ca(){this.muted=!0}va(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cq{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=Ft.UNAUTHENTICATED,this.clientId=P2.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{G("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(G("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new X(N.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ai;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=F0(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function sm(t,e){t.asyncQueue.verifyOperationInProgress(),G("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await cA(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function QE(t,e){t.asyncQueue.verifyOperationInProgress();const n=await xq(t);G("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>BE(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>BE(e.remoteStore,s)),t._onlineComponents=e}function Pq(t){return t.name==="FirebaseError"?t.code===N.FAILED_PRECONDITION||t.code===N.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function xq(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){G("FirestoreClient","Using user provided OfflineComponentProvider");try{await sm(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Pq(n))throw n;Go("Error using user provided cache. Falling back to memory cache: "+n),await sm(t,new GE)}}else G("FirestoreClient","Using default OfflineComponentProvider"),await sm(t,new GE);return t._offlineComponents}async function AA(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(G("FirestoreClient","Using user provided OnlineComponentProvider"),await QE(t,t._uninitializedComponentsProvider._online)):(G("FirestoreClient","Using default OnlineComponentProvider"),await QE(t,new Aq))),t._onlineComponents}function Nq(t){return AA(t).then(e=>e.syncEngine)}async function Oq(t){const e=await AA(t),n=e.eventManager;return n.onListen=mq.bind(null,e.syncEngine),n.onUnlisten=vq.bind(null,e.syncEngine),n}function Dq(t,e,n={}){const r=new Ai;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,a,l,u){const c=new Rq({next:f=>{o.enqueueAndForget(()=>aq(s,d)),f.fromCache&&l.source==="server"?u.reject(new X(N.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(f)},error:f=>u.reject(f)}),d=new cq(a,c,{includeMetadataChanges:!0,W_:!0});return oq(s,d)}(await Oq(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RA(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CA(t,e,n){if(!n)throw new X(N.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Lq(t,e,n,r){if(e===!0&&r===!0)throw new X(N.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function XE(t){if(!J.isDocumentKey(t))throw new X(N.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function JE(t){if(J.isDocumentKey(t))throw new X(N.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function $0(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":ne()}function vf(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new X(N.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=$0(t);throw new X(N.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new X(N.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new X(N.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Lq("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=RA((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new X(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new X(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new X(N.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ph{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ZE({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new X(N.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new X(N.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ZE(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new XV;switch(r.type){case"firstParty":return new tF(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new X(N.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=YE.get(n);r&&(G("ComponentProvider","Removing Datastore"),YE.delete(n),r.terminate())}(this),Promise.resolve()}}function Mq(t,e,n,r={}){var i;const s=(t=vf(t,Ph))._getSettings(),o=`${e}:${n}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Go("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=Ft.MOCK_USER;else{a=pk(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new X(N.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new Ft(u)}t._authCredentials=new JV(new C2(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new xh(this.firestore,e,this._query)}}class Kn{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Kn(this.firestore,e,this._key)}}class Ri extends xh{constructor(e,n,r){super(e,n,U2(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Kn(this.firestore,null,new J(e))}withConverter(e){return new Ri(this.firestore,e,this._path)}}function PA(t,e,...n){if(t=ae(t),CA("collection","path",e),t instanceof Ph){const r=Ue.fromString(e,...n);return JE(r),new Ri(t,null,r)}{if(!(t instanceof Kn||t instanceof Ri))throw new X(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return JE(r),new Ri(t.firestore,null,r)}}function Vq(t,e,...n){if(t=ae(t),arguments.length===1&&(e=P2.V()),CA("doc","path",e),t instanceof Ph){const r=Ue.fromString(e,...n);return XE(r),new Kn(t,null,new J(r))}{if(!(t instanceof Kn||t instanceof Ri))throw new X(N.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Ue.fromString(e,...n));return XE(r),new Kn(t.firestore,t instanceof Ri?t.converter:null,new J(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fq{constructor(){this.Wa=Promise.resolve(),this.Ga=[],this.za=!1,this.ja=[],this.Ha=null,this.Ja=!1,this.Ya=!1,this.Za=[],this.Ko=new fA(this,"async_queue_retry"),this.Xa=()=>{const n=im();n&&G("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Ko.No()};const e=im();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Xa)}get isShuttingDown(){return this.za}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.eu(),this.tu(e)}enterRestrictedMode(e){if(!this.za){this.za=!0,this.Ya=e||!1;const n=im();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Xa)}}enqueue(e){if(this.eu(),this.za)return new Promise(()=>{});const n=new Ai;return this.tu(()=>this.za&&this.Ya?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ga.push(e),this.nu()))}async nu(){if(this.Ga.length!==0){try{await this.Ga[0](),this.Ga.shift(),this.Ko.reset()}catch(e){if(!Vu(e))throw e;G("AsyncQueue","Operation failed with retryable error: "+e)}this.Ga.length>0&&this.Ko.xo(()=>this.nu())}}tu(e){const n=this.Wa.then(()=>(this.Ja=!0,e().catch(r=>{this.Ha=r,this.Ja=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw jr("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ja=!1,r))));return this.Wa=n,n}enqueueAfterDelay(e,n,r){this.eu(),this.Za.indexOf(e)>-1&&(n=0);const i=V0.createAndSchedule(this,e,n,r,s=>this.ru(s));return this.ja.push(i),i}eu(){this.Ha&&ne()}verifyOperationInProgress(){}async iu(){let e;do e=this.Wa,await e;while(e!==this.Wa)}su(e){for(const n of this.ja)if(n.timerId===e)return!0;return!1}ou(e){return this.iu().then(()=>{this.ja.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.ja)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.iu()})}_u(e){this.Za.push(e)}ru(e){const n=this.ja.indexOf(e);this.ja.splice(n,1)}}class z0 extends Ph{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=function(){return new Fq}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||OA(this),this._firestoreClient.terminate()}}function xA(t,e){const n=typeof t=="object"?t:ih(),r=typeof t=="string"?t:e||"(default)",i=da(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=dk("firestore");s&&Mq(i,...s)}return i}function NA(t){return t._firestoreClient||OA(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function OA(t){var e,n,r;const i=t._freezeSettings(),s=function(a,l,u,c){return new hF(a,l,u,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,RA(c.experimentalLongPollingOptions),c.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new Cq(t._authCredentials,t._appCheckCredentials,t._queue,s),((n=i.localCache)===null||n===void 0?void 0:n._offlineComponentProvider)&&((r=i.localCache)===null||r===void 0?void 0:r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ea(Kt.fromBase64String(e))}catch(n){throw new X(N.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ea(Kt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j0{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new X(N.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new $t(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B0{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new X(N.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new X(N.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return we(this._lat,e._lat)||we(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qq=/^__.*__$/;class Uq{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Fs(e,this.data,this.fieldMask,n,this.fieldTransforms):new Fu(e,this.data,n,this.fieldTransforms)}}function LA(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ne()}}class H0{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.au(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get uu(){return this.settings.uu}cu(e){return new H0(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}lu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.Pu(e),i}Iu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.cu({path:r,hu:!1});return i.au(),i}Tu(e){return this.cu({path:void 0,hu:!0})}Eu(e){return yf(e,this.settings.methodName,this.settings.du||!1,this.path,this.settings.Au)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}au(){if(this.path)for(let e=0;e<this.path.length;e++)this.Pu(this.path.get(e))}Pu(e){if(e.length===0)throw this.Eu("Document fields must not be empty");if(LA(this.uu)&&qq.test(e))throw this.Eu('Document fields cannot begin and end with "__"')}}class $q{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Ah(e)}Ru(e,n,r,i=!1){return new H0({uu:e,methodName:n,Au:r,path:$t.emptyPath(),hu:!1,du:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function zq(t){const e=t._freezeSettings(),n=Ah(t._databaseId);return new $q(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jq(t,e,n,r,i,s={}){const o=t.Ru(s.merge||s.mergeFields?2:0,e,n,i);qA("Data must be an object, but it was:",o,r);const a=VA(r,o);let l,u;if(s.merge)l=new Bn(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const d of s.mergeFields){const f=Bq(e,d,n);if(!o.contains(f))throw new X(N.INVALID_ARGUMENT,`Field '${f}' is specified in your field mask but missing from your input data.`);Wq(c,f)||c.push(f)}l=new Bn(c),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new Uq(new Cn(a),l,u)}function MA(t,e){if(FA(t=ae(t)))return qA("Unsupported field value:",e,t),VA(t,e);if(t instanceof DA)return function(r,i){if(!LA(i.uu))throw i.Eu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Eu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.hu&&e.uu!==4)throw e.Eu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let l=MA(a,i.Tu(o));l==null&&(l={nullValue:"NULL_VALUE"}),s.push(l),o++}return{arrayValue:{values:s}}}(t,e)}return function(r,i){if((r=ae(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return MF(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=ht.fromDate(r);return{timestampValue:mf(i.serializer,s)}}if(r instanceof ht){const s=new ht(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mf(i.serializer,s)}}if(r instanceof B0)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof ea)return{bytesValue:iA(i.serializer,r._byteString)};if(r instanceof Kn){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.Eu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:P0(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.Eu(`Unsupported field value: ${$0(r)}`)}(t,e)}function VA(t,e){const n={};return x2(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ma(t,(r,i)=>{const s=MA(i,e.lu(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function FA(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof ht||t instanceof B0||t instanceof ea||t instanceof Kn||t instanceof DA)}function qA(t,e,n){if(!FA(n)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(n)){const r=$0(n);throw r==="an object"?e.Eu(t+" a custom object"):e.Eu(t+" "+r)}}function Bq(t,e,n){if((e=ae(e))instanceof j0)return e._internalPath;if(typeof e=="string")return UA(t,e);throw yf("Field path arguments must be of type string or ",t,!1,void 0,n)}const Hq=new RegExp("[~\\*/\\[\\]]");function UA(t,e,n){if(e.search(Hq)>=0)throw yf(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new j0(...e.split("."))._internalPath}catch{throw yf(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function yf(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new X(N.INVALID_ARGUMENT,a+t+l)}function Wq(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Kn(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Kq(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(zA("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Kq extends $A{data(){return super.data()}}function zA(t,e){return typeof e=="string"?UA(t,e):e instanceof j0?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gq(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new X(N.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Qq{convertValue(e,n="none"){switch(Ps(e)){case 0:return null;case 1:return e.booleanValue;case 2:return it(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Cs(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw ne()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return ma(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new B0(it(e.latitude),it(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=S0(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(su(e));default:return null}}convertTimestamp(e){const n=Vi(e);return new ht(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Ue.fromString(e);Me(uA(r));const i=new ou(r.get(1),r.get(3)),s=new J(r.popFirst(5));return i.isEqual(n)||jr(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yq(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Xq extends $A{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new od(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(zA("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class od extends Xq{data(e={}){return super.data(e)}}class Jq{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Fc(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new od(this._firestore,this._userDataWriter,r.key,r,new Fc(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new X(N.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const l=new od(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Fc(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const l=new od(i._firestore,i._userDataWriter,a.doc.key,a.doc,new Fc(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let u=-1,c=-1;return a.type!==0&&(u=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:Zq(a.type),doc:l,oldIndex:u,newIndex:c}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Zq(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ne()}}class eU extends Qq{constructor(e){super(),this.firestore=e}convertBytes(e){return new ea(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Kn(this.firestore,null,n)}}function tU(t){t=vf(t,xh);const e=vf(t.firestore,z0),n=NA(e),r=new eU(e);return Gq(t._query),Dq(n,t._query).then(i=>new Jq(e,r,t,i))}function nU(t,e){const n=vf(t.firestore,z0),r=Vq(t),i=Yq(t.converter,e);return rU(n,[jq(zq(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,Nr.exists(!1))]).then(()=>r)}function rU(t,e){return function(r,i){const s=new Ai;return r.asyncQueue.enqueueAndForget(async()=>yq(await Nq(r),i,s)),s.promise}(NA(t),e)}(function(e,n=!0){(function(i){pa=i})(Xr),$r(new pr("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new z0(new ZV(r.getProvider("auth-internal")),new rF(r.getProvider("app-check-internal")),function(u,c){if(!Object.prototype.hasOwnProperty.apply(u.options,["projectId"]))throw new X(N.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ou(u.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),_n(wE,"4.1.0",e),_n(wE,"4.1.0","esm2017")})();var iU="firebase",sU="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_n(iU,sU,"app");function W0(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const qa={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Ks={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oU(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function jA(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const aU=oU,lU=jA,BA=new Ms("auth","Firebase",jA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _f=new rh("@firebase/auth");function uU(t,...e){_f.logLevel<=ve.WARN&&_f.warn(`Auth (${Xr}): ${t}`,...e)}function ad(t,...e){_f.logLevel<=ve.ERROR&&_f.error(`Auth (${Xr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tt(t,...e){throw K0(t,...e)}function xt(t,...e){return K0(t,...e)}function HA(t,e,n){const r=Object.assign(Object.assign({},lU()),{[e]:n});return new Ms("auth","Firebase",r).create(e,{appName:t.name})}function ya(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&Tt(t,"argument-error"),HA(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function K0(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return BA.create(t,...e)}function L(t,e,...n){if(!t)throw K0(e,...n)}function ur(t){const e="INTERNAL ASSERTION FAILED: "+t;throw ad(e),new Error(e)}function Xn(t,e){t||ur(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cu(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function G0(){return eT()==="http:"||eT()==="https:"}function eT(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cU(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(G0()||mk()||"connection"in navigator)?navigator.onLine:!0}function dU(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zu{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=kM()||Qy()}get(){return cU()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q0(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WA{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ur("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ur("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ur("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fU={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hU=new zu(3e4,6e4);function at(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function mt(t,e,n,r,i={}){return KA(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=ca(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),WA.fetch()(GA(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function KA(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},fU),e);try{const i=new pU(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Za(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Za(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Za(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Za(t,"user-disabled",o);const c=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw HA(t,c,u);Tt(t,c)}}catch(i){if(i instanceof zt)throw i;Tt(t,"network-request-failed",{message:String(i)})}}async function Jr(t,e,n,r,i={}){const s=await mt(t,e,n,r,i);return"mfaPendingCredential"in s&&Tt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function GA(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Q0(t.config,i):`${t.config.apiScheme}://${i}`}class pU{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xt(this.auth,"network-request-failed")),hU.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Za(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mU(t,e){return mt(t,"POST","/v1/accounts:delete",e)}async function gU(t,e){return mt(t,"POST","/v1/accounts:update",e)}async function vU(t,e){return mt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yU(t,e=!1){const n=ae(t),r=await n.getIdToken(e),i=Nh(r);L(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:yl(om(i.auth_time)),issuedAtTime:yl(om(i.iat)),expirationTime:yl(om(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function om(t){return Number(t)*1e3}function Nh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return ad("JWT malformed, contained fewer than 3 sections"),null;try{const i=uk(n);return i?JSON.parse(i):(ad("Failed to decode base64 JWT payload"),null)}catch(i){return ad("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function _U(t){const e=Nh(t);return L(e,"internal-error"),L(typeof e.exp<"u","internal-error"),L(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Wr(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof zt&&wU(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wU({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EU{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=yl(this.lastLoginAt),this.creationTime=yl(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function du(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Wr(t,vU(n,{idToken:r}));L(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?bU(s.providerUserInfo):[],a=SU(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),c=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new QA(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function TU(t){const e=ae(t);await du(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SU(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function bU(t){return t.map(e=>{var{providerId:n}=e,r=W0(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IU(t,e){const n=await KA(t,{},async()=>{const r=ca({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=GA(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",WA.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){L(e.idToken,"internal-error"),L(typeof e.idToken<"u","internal-error"),L(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):_U(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return L(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await IU(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new fu;return r&&(L(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(L(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(L(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new fu,this.toJSON())}_performRefresh(){return ur("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(t,e){L(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ms{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=W0(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EU(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new QA(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Wr(this,this.stsTokenManager.getToken(this.auth,e));return L(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yU(this,e)}reload(){return TU(this)}_assign(e){this!==e&&(L(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){L(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await du(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wr(this,mU(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,f=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,E=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,v=(u=n.createdAt)!==null&&u!==void 0?u:void 0,h=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:y,emailVerified:g,isAnonymous:T,providerData:S,stsTokenManager:A}=n;L(y&&A,e,"internal-error");const b=fu.fromJSON(this.name,A);L(typeof y=="string",e,"internal-error"),oi(d,e.name),oi(f,e.name),L(typeof g=="boolean",e,"internal-error"),L(typeof T=="boolean",e,"internal-error"),oi(m,e.name),oi(w,e.name),oi(_,e.name),oi(E,e.name),oi(v,e.name),oi(h,e.name);const C=new ms({uid:y,auth:e,email:f,emailVerified:g,displayName:d,isAnonymous:T,photoURL:w,phoneNumber:m,tenantId:_,stsTokenManager:b,createdAt:v,lastLoginAt:h});return S&&Array.isArray(S)&&(C.providerData=S.map(P=>Object.assign({},P))),E&&(C._redirectEventId=E),C}static async _fromIdTokenResponse(e,n,r=!1){const i=new fu;i.updateFromServerResponse(n);const s=new ms({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await du(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT=new Map;function gn(t){Xn(t instanceof Function,"Expected a class definition");let e=tT.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,tT.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}YA.type="NONE";const ta=YA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(t,e,n){return`firebase:${t}:${e}:${n}`}class xo{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gs(this.userKey,i.apiKey,s),this.fullPersistenceKey=gs("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new xo(gn(ta),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||gn(ta);const o=gs(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const c=await u._get(o);if(c){const d=ms._fromJSON(e,c);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new xo(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new xo(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nT(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ZA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(XA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(eR(e))return"Blackberry";if(tR(e))return"Webos";if(Y0(e))return"Safari";if((e.includes("chrome/")||JA(e))&&!e.includes("edge/"))return"Chrome";if(ju(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function XA(t=ot()){return/firefox\//i.test(t)}function Y0(t=ot()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function JA(t=ot()){return/crios\//i.test(t)}function ZA(t=ot()){return/iemobile/i.test(t)}function ju(t=ot()){return/android/i.test(t)}function eR(t=ot()){return/blackberry/i.test(t)}function tR(t=ot()){return/webos/i.test(t)}function _a(t=ot()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function kU(t=ot()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function AU(t=ot()){var e;return _a(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function RU(){return gk()&&document.documentMode===10}function nR(t=ot()){return _a(t)||ju(t)||tR(t)||eR(t)||/windows phone/i.test(t)||ZA(t)}function CU(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(t,e=[]){let n;switch(t){case"Browser":n=nT(ot());break;case"Worker":n=`${nT(ot())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Xr}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PU(t){return(await mt(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function iR(t,e){return mt(t,"GET","/v2/recaptchaConfig",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rT(t){return t!==void 0&&t.getResponse!==void 0}function iT(t){return t!==void 0&&t.enterprise!==void 0}class sR{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xU(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function X0(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",xU().appendChild(r)})}function oR(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const NU="https://www.google.com/recaptcha/enterprise.js?render=",OU="recaptcha-enterprise",DU="NO_RECAPTCHA";class aR{constructor(e){this.type=OU,this.auth=et(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,a)=>{iR(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new sR(l);return s.tenantId==null?s._agentRecaptchaConfig=u:s._tenantRecaptchaConfigs[s.tenantId]=u,o(u.siteKey)}}).catch(l=>{a(l)})})}function i(s,o,a){const l=window.grecaptcha;iT(l)?l.enterprise.ready(()=>{l.enterprise.execute(s,{action:e}).then(u=>{o(u)}).catch(()=>{o(DU)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(a=>{if(!n&&iT(window.grecaptcha))i(a,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}X0(NU+a).then(()=>{i(a,s,o)}).catch(l=>{o(l)})}}).catch(a=>{o(a)})})}}async function qi(t,e,n,r=!1){const i=new aR(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LU{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MU{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new sT(this),this.idTokenSubscription=new sT(this),this.beforeStateQueue=new LU(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=BA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=gn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await xo.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l==null?void 0:l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return L(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await du(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=dU()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?ae(e):null;return n&&L(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&L(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(gn(e))})}async initializeRecaptchaConfig(){const e=await iR(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new sR(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new aR(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ms("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&gn(e)||this._popupRedirectResolver;L(n,this,"argument-error"),this.redirectPersistenceManager=await xo.create(this,[gn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return L(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return L(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=rR(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&uU(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function et(t){return ae(t)}class sT{constructor(e){this.auth=e,this.observer=null,this.addObserver=vk(n=>this.observer=n)}get next(){return L(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VU(t,e){const n=da(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(tf(s,e!=null?e:{}))return i;Tt(i,"already-initialized")}return n.initialize({options:e})}function FU(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(gn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lR(t,e,n){const r=et(t);L(r._canInitEmulator,r,"emulator-config-failed"),L(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=uR(e),{host:o,port:a}=qU(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||UU()}function uR(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function qU(t){const e=uR(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:oT(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:oT(o)}}}function oT(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function UU(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ur("not implemented")}_getIdTokenResponse(e){return ur("not implemented")}_linkToIdToken(e,n){return ur("not implemented")}_getReauthenticationResolver(e){return ur("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cR(t,e){return mt(t,"POST","/v1/accounts:resetPassword",at(t,e))}async function dR(t,e){return mt(t,"POST","/v1/accounts:update",e)}async function $U(t,e){return mt(t,"POST","/v1/accounts:update",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(t,e){return Jr(t,"POST","/v1/accounts:signInWithPassword",at(t,e))}async function Oh(t,e){return mt(t,"POST","/v1/accounts:sendOobCode",at(t,e))}async function zU(t,e){return Oh(t,e)}async function lm(t,e){return Oh(t,e)}async function um(t,e){return Oh(t,e)}async function jU(t,e){return Oh(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function BU(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}async function HU(t,e){return Jr(t,"POST","/v1/accounts:signInWithEmailLink",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu extends wa{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new hu(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new hu(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await qi(e,r,"signInWithPassword");return am(e,i)}else return am(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await qi(e,r,"signInWithPassword");return am(e,s)}else return Promise.reject(i)});case"emailLink":return BU(e,{email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return dR(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return HU(e,{idToken:n,email:this._email,oobCode:this._password});default:Tt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t,e){return Jr(t,"POST","/v1/accounts:signInWithIdp",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WU="http://localhost";class vr extends wa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Tt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=W0(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new vr(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:WU,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ca(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KU(t,e){return mt(t,"POST","/v1/accounts:sendVerificationCode",at(t,e))}async function GU(t,e){return Jr(t,"POST","/v1/accounts:signInWithPhoneNumber",at(t,e))}async function QU(t,e){const n=await Jr(t,"POST","/v1/accounts:signInWithPhoneNumber",at(t,e));if(n.temporaryProof)throw Za(t,"account-exists-with-different-credential",n);return n}const YU={USER_NOT_FOUND:"user-not-found"};async function XU(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Jr(t,"POST","/v1/accounts:signInWithPhoneNumber",at(t,n),YU)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs extends wa{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new vs({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new vs({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return GU(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return QU(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return XU(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new vs({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JU(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZU(t){const e=go(Ga(t)).link,n=e?go(Ga(e)).deep_link_id:null,r=go(Ga(t)).deep_link_id;return(r?go(Ga(r)).link:null)||r||n||e||t}class Dh{constructor(e){var n,r,i,s,o,a;const l=go(Ga(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,c=(r=l.oobCode)!==null&&r!==void 0?r:null,d=JU((i=l.mode)!==null&&i!==void 0?i:null);L(u&&c&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=c,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=ZU(e);try{return new Dh(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(){this.providerId=Wi.PROVIDER_ID}static credential(e,n){return hu._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dh.parseLink(n);return L(r,"argument-error"),hu._fromEmailAndCode(e,r.code,r.tenantId)}}Wi.PROVIDER_ID="password";Wi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Wi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea extends Zr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class No extends Ea{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return L("providerId"in n&&"signInMethod"in n,"argument-error"),vr._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return L(e.idToken||e.accessToken,"argument-error"),vr._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return No.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return No.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new No(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends Ea{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:rr.PROVIDER_ID,signInMethod:rr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rr.credentialFromTaggedObject(e)}static credentialFromError(e){return rr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rr.credential(e.oauthAccessToken)}catch{return null}}}rr.FACEBOOK_SIGN_IN_METHOD="facebook.com";rr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn extends Ea{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return vr._fromParams({providerId:Pn.PROVIDER_ID,signInMethod:Pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pn.credentialFromTaggedObject(e)}static credentialFromError(e){return Pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pn.credential(n,r)}catch{return null}}}Pn.GOOGLE_SIGN_IN_METHOD="google.com";Pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ir extends Ea{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:ir.PROVIDER_ID,signInMethod:ir.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ir.credentialFromTaggedObject(e)}static credentialFromError(e){return ir.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ir.credential(e.oauthAccessToken)}catch{return null}}}ir.GITHUB_SIGN_IN_METHOD="github.com";ir.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e$="http://localhost";class na extends wa{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new na(r,s)}static _create(e,n){return new na(e,n)}buildRequest(){return{requestUri:e$,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t$="saml.";class wf extends Zr{constructor(e){L(e.startsWith(t$),"argument-error"),super(e)}static credentialFromResult(e){return wf.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return wf.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=na.fromJSON(e);return L(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return na._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr extends Ea{constructor(){super("twitter.com")}static credential(e,n){return vr._fromParams({providerId:sr.PROVIDER_ID,signInMethod:sr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sr.credentialFromTaggedObject(e)}static credentialFromError(e){return sr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sr.credential(n,r)}catch{return null}}}sr.TWITTER_SIGN_IN_METHOD="twitter.com";sr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ld(t,e){return Jr(t,"POST","/v1/accounts:signUp",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await ms._fromIdTokenResponse(e,r,i),o=aT(r);return new Ln({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=aT(r);return new Ln({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function aT(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n$(t){var e;const n=et(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ln({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await ld(n,{returnSecureToken:!0}),i=await Ln._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef extends zt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ef.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Ef(e,n,r,i)}}function fR(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ef._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hR(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r$(t,e){const n=ae(t);await Lh(!0,n,e);const{providerUserInfo:r}=await gU(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=hR(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function J0(t,e,n=!1){const r=await Wr(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Ln._forOperation(t,"link",r)}async function Lh(t,e,n){await du(e);const r=hR(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";L(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pR(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Wr(t,fR(r,i,e,t),n);L(s.idToken,r,"internal-error");const o=Nh(s.idToken);L(o,r,"internal-error");const{sub:a}=o;return L(t.uid===a,r,"user-mismatch"),Ln._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Tt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mR(t,e,n=!1){const r="signIn",i=await fR(t,r,e),s=await Ln._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Mh(t,e){return mR(et(t),e)}async function gR(t,e){const n=ae(t);return await Lh(!1,n,e.providerId),J0(n,e)}async function vR(t,e){return pR(ae(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i$(t,e){return Jr(t,"POST","/v1/accounts:signInWithCustomToken",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s$(t,e){const n=et(t),r=await i$(n,{token:e,returnSecureToken:!0}),i=await Ln._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Z0._fromServerResponse(e,n):"totpInfo"in n?e_._fromServerResponse(e,n):Tt(e,"internal-error")}}class Z0 extends Bu{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Z0(n)}}class e_ extends Bu{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new e_(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oo(t,e,n){var r;L(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),L(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(L(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(L(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o$(t,e,n){var r;const i=et(t),s={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const o=await qi(i,s,"getOobCode",!0);n&&Oo(i,o,n),await lm(i,o)}else n&&Oo(i,s,n),await lm(i,s).catch(async o=>{if(o.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await qi(i,s,"getOobCode",!0);n&&Oo(i,a,n),await lm(i,a)}else return Promise.reject(o)})}async function a$(t,e,n){await cR(ae(t),{oobCode:e,newPassword:n})}async function l$(t,e){await $U(ae(t),{oobCode:e})}async function yR(t,e){const n=ae(t),r=await cR(n,{oobCode:e}),i=r.requestType;switch(L(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":L(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":L(r.mfaInfo,n,"internal-error");default:L(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Bu._fromServerResponse(et(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function u$(t,e){const{data:n}=await yR(ae(t),e);return n.email}async function c$(t,e,n){var r;const i=et(t),s={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let o;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await qi(i,s,"signUpPassword");o=ld(i,u)}else o=ld(i,s).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const c=await qi(i,s,"signUpPassword");return ld(i,c)}else return Promise.reject(u)});const a=await o.catch(u=>Promise.reject(u)),l=await Ln._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function d$(t,e,n){return Mh(ae(t),Wi.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f$(t,e,n){var r;const i=et(t),s={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function o(a,l){L(l.handleCodeInApp,i,"argument-error"),l&&Oo(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await qi(i,s,"getOobCode",!0);o(a,n),await um(i,a)}else o(s,n),await um(i,s).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await qi(i,s,"getOobCode",!0);o(l,n),await um(i,l)}else return Promise.reject(a)})}function h$(t,e){const n=Dh.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function p$(t,e,n){const r=ae(t),i=Wi.credentialWithLink(e,n||cu());return L(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Mh(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function m$(t,e){return mt(t,"POST","/v1/accounts:createAuthUri",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function g$(t,e){const n=G0()?cu():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await m$(ae(t),r);return i||[]}async function v$(t,e){const n=ae(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&Oo(n.auth,i,e);const{email:s}=await zU(n.auth,i);s!==t.email&&await t.reload()}async function y$(t,e,n){const r=ae(t),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&Oo(r.auth,s,n);const{email:o}=await jU(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _$(t,e){return mt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w$(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=ae(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Wr(r,_$(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function E$(t,e){return _R(ae(t),e,null)}function T$(t,e){return _R(ae(t),null,e)}async function _R(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Wr(t,dR(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function S$(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Nh(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new Do(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new b$(s,i);case"github.com":return new I$(s,i);case"google.com":return new k$(s,i);case"twitter.com":return new A$(s,i,t.screenName||null);case"custom":case"anonymous":return new Do(s,null);default:return new Do(s,r,i)}}class Do{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class wR extends Do{constructor(e,n,r,i){super(e,n,r),this.username=i}}class b$ extends Do{constructor(e,n){super(e,"facebook.com",n)}}class I$ extends wR{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class k$ extends Do{constructor(e,n){super(e,"google.com",n)}}class A$ extends wR{constructor(e,n,r){super(e,"twitter.com",n,r)}}function R$(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:S$(n)}function C$(t,e,n,r){return ae(t).onIdTokenChanged(e,n,r)}function P$(t,e,n){return ae(t).beforeAuthStateChanged(e,n)}function x$(t,e,n,r){return ae(t).onAuthStateChanged(e,n,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e,n,r){this.type=e,this.credential=n,this.user=r}static _fromIdtoken(e,n){return new cs("enroll",e,n)}static _fromMfaPendingCredential(e){return new cs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return cs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return cs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t_{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=et(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Bu._fromServerResponse(r,a));L(i.mfaPendingCredential,r,"internal-error");const o=cs._fromMfaPendingCredential(i.mfaPendingCredential);return new t_(o,s,async a=>{const l=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const c=await Ln._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return L(n.user,r,"internal-error"),Ln._forOperation(n.user,n.operationType,u);default:Tt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function N$(t,e){var n;const r=ae(t),i=e;return L(e.customData.operationType,r,"argument-error"),L((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),t_._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O$(t,e){return mt(t,"POST","/v2/accounts/mfaEnrollment:start",at(t,e))}function D$(t,e){return mt(t,"POST","/v2/accounts/mfaEnrollment:finalize",at(t,e))}function L$(t,e){return mt(t,"POST","/v2/accounts/mfaEnrollment:withdraw",at(t,e))}class n_{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Bu._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new n_(e)}async getSession(){return cs._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,n){const r=e,i=await this.getSession(),s=await Wr(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await Wr(this.user,L$(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const cm=new WeakMap;function M$(t){const e=ae(t);return cm.has(e)||cm.set(e,n_._fromUser(e)),cm.get(e)}const Tf="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ER{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Tf,"1"),this.storage.removeItem(Tf),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V$(){const t=ot();return Y0(t)||_a(t)}const F$=1e3,q$=10;class TR extends ER{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=V$()&&CU(),this.fallbackToPolling=nR(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);RU()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,q$):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},F$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}TR.type="LOCAL";const Vh=TR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR extends ER{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}SR.type="SESSION";const Ui=SR;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U$(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Fh(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await U$(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Fh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $${constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=Hu("",20);i.port1.start();const c=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const f=d;if(f.data.eventId===u)switch(f.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(f.data.response);break;default:clearTimeout(c),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(){return window}function z$(t){rt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function r_(){return typeof rt().WorkerGlobalScope<"u"&&typeof rt().importScripts=="function"}async function j$(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function B$(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function H$(){return r_()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bR="firebaseLocalStorageDb",W$=1,Sf="firebaseLocalStorage",IR="fbase_key";class Wu{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qh(t,e){return t.transaction([Sf],e?"readwrite":"readonly").objectStore(Sf)}function K$(){const t=indexedDB.deleteDatabase(bR);return new Wu(t).toPromise()}function mv(){const t=indexedDB.open(bR,W$);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Sf,{keyPath:IR})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Sf)?e(r):(r.close(),await K$(),e(await mv()))})})}async function lT(t,e,n){const r=qh(t,!0).put({[IR]:e,value:n});return new Wu(r).toPromise()}async function G$(t,e){const n=qh(t,!1).get(e),r=await new Wu(n).toPromise();return r===void 0?null:r.value}function uT(t,e){const n=qh(t,!0).delete(e);return new Wu(n).toPromise()}const Q$=800,Y$=3;class kR{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await mv(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Y$)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return r_()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fh._getInstance(H$()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await j$(),!this.activeServiceWorker)return;this.sender=new $$(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||B$()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await mv();return await lT(e,Tf,"1"),await uT(e,Tf),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>lT(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>G$(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>uT(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qh(i,!1).getAll();return new Wu(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Q$)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kR.type="LOCAL";const ra=kR;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X$(t,e){return mt(t,"POST","/v2/accounts/mfaSignIn:start",at(t,e))}function J$(t,e){return mt(t,"POST","/v2/accounts/mfaSignIn:finalize",at(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z$=500,e7=6e4,qc=1e12;class t7{constructor(e){this.auth=e,this.counter=qc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new n7(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||qc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||qc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||qc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class n7{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;L(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=r7(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},e7)},Z$))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function r7(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dm=oR("rcb"),i7=new zu(3e4,6e4),s7="https://www.google.com/recaptcha/api.js?";class o7{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=rt().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return L(a7(n),e,"argument-error"),this.shouldResolveImmediately(n)&&rT(rt().grecaptcha)?Promise.resolve(rt().grecaptcha):new Promise((r,i)=>{const s=rt().setTimeout(()=>{i(xt(e,"network-request-failed"))},i7.get());rt()[dm]=()=>{rt().clearTimeout(s),delete rt()[dm];const a=rt().grecaptcha;if(!a||!rT(a)){i(xt(e,"internal-error"));return}const l=a.render;a.render=(u,c)=>{const d=l(u,c);return this.counter++,d},this.hostLanguage=n,r(a)};const o=`${s7}?${ca({onload:dm,render:"explicit",hl:n})}`;X0(o).catch(()=>{clearTimeout(s),i(xt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=rt().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function a7(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class l7{async load(e){return new t7(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR="recaptcha",u7={theme:"light",type:"image"};class c7{constructor(e,n,r=Object.assign({},u7)){this.parameters=r,this.type=AR,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=et(e),this.isInvisible=this.parameters.size==="invisible",L(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof n=="string"?document.getElementById(n):n;L(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new l7:new o7,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){L(!this.parameters.sitekey,this.auth,"argument-error"),L(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),L(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=rt()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){L(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){L(G0()&&!r_(),this.auth,"internal-error"),await d7(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await PU(this.auth);L(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return L(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function d7(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=vs._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function f7(t,e,n){const r=et(t),i=await Uh(r,e,ae(n));return new i_(i,s=>Mh(r,s))}async function h7(t,e,n){const r=ae(t);await Lh(!1,r,"phone");const i=await Uh(r.auth,e,ae(n));return new i_(i,s=>gR(r,s))}async function p7(t,e,n){const r=ae(t),i=await Uh(r.auth,e,ae(n));return new i_(i,s=>vR(r,s))}async function Uh(t,e,n){var r;const i=await n.verify();try{L(typeof i=="string",t,"argument-error"),L(n.type===AR,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return L(o.type==="enroll",t,"internal-error"),(await O$(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{L(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return L(a,t,"missing-multi-factor-info"),(await X$(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await KU(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function m7(t,e){await J0(ae(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.providerId=Gn.PROVIDER_ID,this.auth=et(e)}verifyPhoneNumber(e,n){return Uh(this.auth,e,ae(n))}static credential(e,n){return vs._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Gn.credentialFromTaggedObject(n)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?vs._fromTokenResponse(n,r):null}}Gn.PROVIDER_ID="phone";Gn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Us(t,e){return e?gn(e):(L(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class s_ extends wa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function g7(t){return mR(t.auth,new s_(t),t.bypassAuthState)}function v7(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),pR(n,new s_(t),t.bypassAuthState)}async function y7(t){const{auth:e,user:n}=t;return L(n,e,"internal-error"),J0(n,new s_(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return g7;case"linkViaPopup":case"linkViaRedirect":return y7;case"reauthViaPopup":case"reauthViaRedirect":return v7;default:Tt(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _7=new zu(2e3,1e4);async function CR(t,e,n){const r=et(t);ya(t,e,Zr);const i=Us(r,n);return new Ar(r,"signInViaPopup",e,i).executeNotNull()}async function w7(t,e,n){const r=ae(t);ya(r.auth,e,Zr);const i=Us(r.auth,n);return new Ar(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function E7(t,e,n){const r=ae(t);ya(r.auth,e,Zr);const i=Us(r.auth,n);return new Ar(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class Ar extends RR{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Ar.currentPopupAction&&Ar.currentPopupAction.cancel(),Ar.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return L(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=Hu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Ar.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_7.get())};e()}}Ar.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T7="pendingRedirect",_l=new Map;class S7 extends RR{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=_l.get(this.auth._key());if(!e){try{const r=await b7(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}_l.set(this.auth._key(),e)}return this.bypassAuthState||_l.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function b7(t,e){const n=xR(e),r=PR(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function o_(t,e){return PR(t)._set(xR(e),"true")}function I7(){_l.clear()}function a_(t,e){_l.set(t._key(),e)}function PR(t){return gn(t._redirectPersistence)}function xR(t){return gs(T7,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k7(t,e,n){return A7(t,e,n)}async function A7(t,e,n){const r=et(t);ya(t,e,Zr),await r._initializationPromise;const i=Us(r,n);return await o_(i,r),i._openRedirect(r,e,"signInViaRedirect")}function R7(t,e,n){return C7(t,e,n)}async function C7(t,e,n){const r=ae(t);ya(r.auth,e,Zr),await r.auth._initializationPromise;const i=Us(r.auth,n);await o_(i,r.auth);const s=await NR(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function P7(t,e,n){return x7(t,e,n)}async function x7(t,e,n){const r=ae(t);ya(r.auth,e,Zr),await r.auth._initializationPromise;const i=Us(r.auth,n);await Lh(!1,r,e.providerId),await o_(i,r.auth);const s=await NR(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function N7(t,e){return await et(t)._initializationPromise,$h(t,e,!1)}async function $h(t,e,n=!1){const r=et(t),i=Us(r,e),o=await new S7(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function NR(t){const e=Hu(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O7=10*60*1e3;class OR{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!D7(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!DR(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=O7&&this.cachedEventUids.clear(),this.cachedEventUids.has(cT(e))}saveEventToCache(e){this.cachedEventUids.add(cT(e)),this.lastProcessedEventTime=Date.now()}}function cT(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function DR({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function D7(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return DR(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LR(t,e={}){return mt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L7=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,M7=/^https?/;async function V7(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LR(t);for(const n of e)try{if(F7(n))return}catch{}Tt(t,"unauthorized-domain")}function F7(t){const e=cu(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!M7.test(n))return!1;if(L7.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q7=new zu(3e4,6e4);function dT(){const t=rt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function U7(t){return new Promise((e,n)=>{var r,i,s;function o(){dT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{dT(),n(xt(t,"network-request-failed"))},timeout:q7.get()})}if(!((i=(r=rt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=rt().gapi)===null||s===void 0)&&s.load)o();else{const a=oR("iframefcb");return rt()[a]=()=>{gapi.load?o():n(xt(t,"network-request-failed"))},X0(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ud=null,e})}let ud=null;function $7(t){return ud=ud||U7(t),ud}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z7=new zu(5e3,15e3),j7="__/auth/iframe",B7="emulator/auth/iframe",H7={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},W7=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function K7(t){const e=t.config;L(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Q0(e,B7):`https://${t.config.authDomain}/${j7}`,r={apiKey:e.apiKey,appName:t.name,v:Xr},i=W7.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ca(r).slice(1)}`}async function G7(t){const e=await $7(t),n=rt().gapi;return L(n,t,"internal-error"),e.open({where:document.body,url:K7(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:H7,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xt(t,"network-request-failed"),a=rt().setTimeout(()=>{s(o)},z7.get());function l(){rt().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q7={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Y7=500,X7=600,J7="_blank",Z7="http://localhost";class fT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ez(t,e,n,r=Y7,i=X7){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Q7),{width:r.toString(),height:i.toString(),top:s,left:o}),u=ot().toLowerCase();n&&(a=JA(u)?J7:n),XA(u)&&(e=e||Z7,l.scrollbars="yes");const c=Object.entries(l).reduce((f,[m,w])=>`${f}${m}=${w},`,"");if(AU(u)&&a!=="_self")return tz(e||"",a),new fT(null);const d=window.open(e||"",a,c);L(d,t,"popup-blocked");try{d.focus()}catch{}return new fT(d)}function tz(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nz="__/auth/handler",rz="emulator/auth/handler",iz=encodeURIComponent("fac");async function gv(t,e,n,r,i,s){L(t.config.authDomain,t,"auth-domain-config-required"),L(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Xr,eventId:i};if(e instanceof Zr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",NM(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries(s||{}))o[c]=d}if(e instanceof Ea){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const l=await t._getAppCheckToken(),u=l?`#${iz}=${encodeURIComponent(l)}`:"";return`${sz(t)}?${ca(a).slice(1)}${u}`}function sz({config:t}){return t.emulator?Q0(t,rz):`https://${t.authDomain}/${nz}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fm="webStorageSupport";class oz{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ui,this._completeRedirectFn=$h,this._overrideRedirectResult=a_}async _openPopup(e,n,r,i){var s;Xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await gv(e,n,r,cu(),i);return ez(e,o,Hu())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await gv(e,n,r,cu(),i);return z$(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await G7(e),r=new OR(e);return n.register("authEvent",i=>(L(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(fm,{type:fm},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[fm];o!==void 0&&n(!!o),Tt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=V7(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return nR()||Y0()||_a()}}const MR=oz;class az{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ur("unexpected MultiFactorSessionType")}}}class l_ extends az{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new l_(e)}_finalizeEnroll(e,n,r){return D$(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return J$(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class VR{constructor(){}static assertion(e){return l_._fromCredential(e)}}VR.FACTOR_ID="phone";var hT="@firebase/auth",pT="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lz{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){L(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uz(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cz(t){$r(new pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;L(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:rR(t)},u=new MU(r,i,s,l);return FU(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),$r(new pr("auth-internal",e=>{const n=et(e.getProvider("auth").getImmediate());return(r=>new lz(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),_n(hT,pT,uz(t)),_n(hT,pT,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dz=5*60,fz=hk("authIdTokenMaxAge")||dz;let mT=null;const hz=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>fz)return;const i=n==null?void 0:n.token;mT!==i&&(mT=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function u_(t=ih()){const e=da(t,"auth");if(e.isInitialized())return e.getImmediate();const n=VU(t,{popupRedirectResolver:MR,persistence:[ra,Vh,Ui]}),r=hk("authTokenSyncURL");if(r){const s=hz(r);P$(n,s,()=>s(n.currentUser)),C$(n,o=>s(o))}const i=ck("auth");return i&&lR(n,`http://${i}`),n}cz("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FR="firebasestorage.googleapis.com",qR="storageBucket",pz=2*60*1e3,mz=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends zt{constructor(e,n,r=0){super(hm(e),`Firebase Storage: ${n} (${hm(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Xe.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return hm(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ye;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ye||(Ye={}));function hm(t){return"storage/"+t}function c_(){const t="An unknown error occurred, please check the error payload for server response.";return new Xe(Ye.UNKNOWN,t)}function gz(t){return new Xe(Ye.OBJECT_NOT_FOUND,"Object '"+t+"' does not exist.")}function vz(t){return new Xe(Ye.QUOTA_EXCEEDED,"Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function yz(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Xe(Ye.UNAUTHENTICATED,t)}function _z(){return new Xe(Ye.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function wz(t){return new Xe(Ye.UNAUTHORIZED,"User does not have permission to access '"+t+"'.")}function Ez(){return new Xe(Ye.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Tz(){return new Xe(Ye.CANCELED,"User canceled the upload/download.")}function Sz(t){return new Xe(Ye.INVALID_URL,"Invalid URL '"+t+"'.")}function bz(t){return new Xe(Ye.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function Iz(){return new Xe(Ye.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+qR+"' property when initializing the app?")}function kz(){return new Xe(Ye.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function Az(){return new Xe(Ye.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function Rz(t){return new Xe(Ye.UNSUPPORTED_ENVIRONMENT,`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function vv(t){return new Xe(Ye.INVALID_ARGUMENT,t)}function UR(){return new Xe(Ye.APP_DELETED,"The Firebase app was deleted.")}function Cz(t){return new Xe(Ye.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function wl(t,e){return new Xe(Ye.INVALID_FORMAT,"String does not match format '"+t+"': "+e)}function Ua(t){throw new Xe(Ye.INTERNAL_ERROR,"Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=vn.makeFromUrl(e,n)}catch{return new vn(e,"")}if(r.path==="")return r;throw bz(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(g){g.path_=decodeURIComponent(g.path)}const c="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),f="(/([^?#]*).*)?$",m=new RegExp(`^https?://${d}/${c}/b/${i}/o${f}`,"i"),w={bucket:1,path:3},_=n===FR?"(?:storage.googleapis.com|storage.cloud.google.com)":n,E="([^?#]*)",v=new RegExp(`^https?://${_}/${i}/${E}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:m,indices:w,postModify:u},{regex:v,indices:{bucket:1,path:2},postModify:u}];for(let g=0;g<y.length;g++){const T=y[g],S=T.regex.exec(e);if(S){const A=S[T.indices.bucket];let b=S[T.indices.path];b||(b=""),r=new vn(A,b),T.postModify(r);break}}if(r==null)throw Sz(e);return r}}class Pz{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xz(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function c(...E){u||(u=!0,e.apply(null,E))}function d(E){i=setTimeout(()=>{i=null,t(m,l())},E)}function f(){s&&clearTimeout(s)}function m(E,...v){if(u){f();return}if(E){f(),c.call(null,E,...v);return}if(l()||o){f(),c.call(null,E,...v);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,d(y)}let w=!1;function _(E){w||(w=!0,f(),!u&&(i!==null?(E||(a=2),clearTimeout(i),d(0)):E||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,_(!0)},n),_}function Nz(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oz(t){return t!==void 0}function Dz(t){return typeof t=="object"&&!Array.isArray(t)}function d_(t){return typeof t=="string"||t instanceof String}function gT(t){return f_()&&t instanceof Blob}function f_(){return typeof Blob<"u"&&!Gy()}function vT(t,e,n,r){if(r<e)throw vv(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw vv(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h_(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function $R(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ys;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ys||(ys={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lz(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mz{constructor(e,n,r,i,s,o,a,l,u,c,d,f=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=c,this.connectionFactory_=d,this.retry=f,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((m,w)=>{this.resolve_=m,this.reject_=w,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new Uc(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ys.NO_ERROR,l=s.getStatus();if(!a||Lz(l,this.additionalRetryCodes_)&&this.retry){const c=s.getErrorCode()===ys.ABORT;r(!1,new Uc(!1,null,c));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new Uc(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());Oz(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=c_();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?UR():Tz();o(l)}else{const l=Ez();o(l)}};this.canceled_?n(!1,new Uc(!1,null,!0)):this.backoffId_=xz(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Nz(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Uc{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Vz(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Fz(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e!=null?e:"AppManager")}function qz(t,e){e&&(t["X-Firebase-GMPID"]=e)}function Uz(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function $z(t,e,n,r,i,s,o=!0){const a=$R(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return qz(u,e),Vz(u,n),Fz(u,s),Uz(u,r),new Mz(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zz(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function jz(...t){const e=zz();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(f_())return new Blob(t);throw new Xe(Ye.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Bz(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hz(t){if(typeof atob>"u")throw Rz("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class pm{constructor(e,n){this.data=e,this.contentType=n||null}}function Wz(t,e){switch(t){case cr.RAW:return new pm(zR(e));case cr.BASE64:case cr.BASE64URL:return new pm(jR(t,e));case cr.DATA_URL:return new pm(Gz(e),Qz(e))}throw c_()}function zR(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function Kz(t){let e;try{e=decodeURIComponent(t)}catch{throw wl(cr.DATA_URL,"Malformed data URL.")}return zR(e)}function jR(t,e){switch(t){case cr.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw wl(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case cr.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw wl(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=Hz(e)}catch(i){throw i.message.includes("polyfill")?i:wl(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class BR{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw wl(cr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=Yz(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function Gz(t){const e=new BR(t);return e.base64?jR(cr.BASE64,e.rest):Kz(e.rest)}function Qz(t){return new BR(t).contentType}function Yz(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,n){let r=0,i="";gT(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(gT(this.data_)){const r=this.data_,i=Bz(r,e,n);return i===null?null:new fi(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new fi(r,!0)}}static getBlob(...e){if(f_()){const n=e.map(r=>r instanceof fi?r.data_:r);return new fi(jz.apply(null,n))}else{const n=e.map(o=>d_(o)?Wz(cr.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new fi(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HR(t){let e;try{e=JSON.parse(t)}catch{return null}return Dz(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xz(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function Jz(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function WR(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zz(t,e){return e}class Qt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||Zz}}let $c=null;function e8(t){return!d_(t)||t.length<2?t:WR(t)}function KR(){if($c)return $c;const t=[];t.push(new Qt("bucket")),t.push(new Qt("generation")),t.push(new Qt("metageneration")),t.push(new Qt("name","fullPath",!0));function e(s,o){return e8(o)}const n=new Qt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Qt("size");return i.xform=r,t.push(i),t.push(new Qt("timeCreated")),t.push(new Qt("updated")),t.push(new Qt("md5Hash",null,!0)),t.push(new Qt("cacheControl",null,!0)),t.push(new Qt("contentDisposition",null,!0)),t.push(new Qt("contentEncoding",null,!0)),t.push(new Qt("contentLanguage",null,!0)),t.push(new Qt("contentType",null,!0)),t.push(new Qt("metadata","customMetadata",!0)),$c=t,$c}function t8(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new vn(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function n8(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return t8(r,t),r}function GR(t,e,n){const r=HR(e);return r===null?null:n8(t,r,n)}function r8(t,e,n,r){const i=HR(e);if(i===null||!d_(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const c=t.bucket,d=t.fullPath,f="/b/"+o(c)+"/o/"+o(d),m=h_(f,n,r),w=$R({alt:"media",token:u});return m+w})[0]}function i8(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class QR{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YR(t){if(!t)throw c_()}function s8(t,e){function n(r,i){const s=GR(t,i,e);return YR(s!==null),s}return n}function o8(t,e){function n(r,i){const s=GR(t,i,e);return YR(s!==null),r8(s,i,t.host,t._protocol)}return n}function XR(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=_z():i=yz():n.getStatus()===402?i=vz(t.bucket):n.getStatus()===403?i=wz(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function a8(t){const e=XR(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=gz(t.path)),s.serverResponse=i.serverResponse,s}return n}function l8(t,e,n){const r=e.fullServerUrl(),i=h_(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new QR(i,s,o8(t,n),o);return a.errorHandler=a8(e),a}function u8(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function c8(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=u8(null,e)),r}function d8(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let g=0;g<2;g++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=c8(e,r,i),c=i8(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+c+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,f=`\r
--`+l+"--",m=fi.getBlob(d,r,f);if(m===null)throw kz();const w={name:u.fullPath},_=h_(s,t.host,t._protocol),E="POST",v=t.maxUploadRetryTime,h=new QR(_,E,s8(t,n),v);return h.urlParams=w,h.headers=o,h.body=m.uploadData(),h.errorHandler=XR(e),h}class f8{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ys.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ys.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ys.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Ua("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Ua("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Ua("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Ua("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Ua("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class h8 extends f8{initXhr(){this.xhr_.responseType="text"}}function JR(){return new h8}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(e,n){this._service=e,n instanceof vn?this._location=n:this._location=vn.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new xs(e,n)}get root(){const e=new vn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return WR(this._location.path)}get storage(){return this._service}get parent(){const e=Xz(this._location.path);if(e===null)return null;const n=new vn(this._location.bucket,e);return new xs(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Cz(e)}}function p8(t,e,n){t._throwIfRoot("uploadBytes");const r=d8(t.storage,t._location,KR(),new fi(e,!0),n);return t.storage.makeRequestWithTokens(r,JR).then(i=>({metadata:i,ref:t}))}function m8(t){t._throwIfRoot("getDownloadURL");const e=l8(t.storage,t._location,KR());return t.storage.makeRequestWithTokens(e,JR).then(n=>{if(n===null)throw Az();return n})}function g8(t,e){const n=Jz(t._location.path,e),r=new vn(t._location.bucket,n);return new xs(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v8(t){return/^[A-Za-z]+:\/\//.test(t)}function y8(t,e){return new xs(t,e)}function ZR(t,e){if(t instanceof p_){const n=t;if(n._bucket==null)throw Iz();const r=new xs(n,n._bucket);return e!=null?ZR(r,e):r}else return e!==void 0?g8(t,e):t}function _8(t,e){if(e&&v8(e)){if(t instanceof p_)return y8(t,e);throw vv("To use ref(service, url), the first argument must be a Storage instance.")}else return ZR(t,e)}function yT(t,e){const n=e==null?void 0:e[qR];return n==null?null:vn.makeFromBucketSpec(n,t)}function w8(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:pk(i,t.app.options.projectId))}class p_{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=FR,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=pz,this._maxUploadRetryTime=mz,this._requests=new Set,i!=null?this._bucket=vn.makeFromBucketSpec(i,this._host):this._bucket=yT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=vn.makeFromBucketSpec(this._url,e):this._bucket=yT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new xs(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Pz(UR());{const o=$z(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const _T="@firebase/storage",wT="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC="storage";function E8(t,e,n){return t=ae(t),p8(t,e,n)}function T8(t){return t=ae(t),m8(t)}function S8(t,e){return t=ae(t),_8(t,e)}function tC(t=ih(),e){t=ae(t);const r=da(t,eC).getImmediate({identifier:e}),i=dk("storage");return i&&b8(r,...i),r}function b8(t,e,n,r={}){w8(t,e,n,r)}function I8(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new p_(n,r,i,e,Xr)}function k8(){$r(new pr(eC,I8,"PUBLIC").setMultipleInstances(!0)),_n(_T,wT,""),_n(_T,wT,"esm2017")}k8();const A8={apiKey:"AIzaSyBlcfhHzl-t4I0EgkdeFedgCpyf37EKDSo",authDomain:"silverjarz-dashboard.firebaseapp.com",projectId:"silverjarz-dashboard",storageBucket:"silverjarz-dashboard.appspot.com",messagingSenderId:"112504342717",appId:"1:112504342717:web:51e28f6afe54c836db8fd4",measurementId:"G-YXD21JLWCK"},nC=ku(A8);u_();new Pn;const R8=xA(nC);tC(nC);const C8=()=>{const t=i=>i.split(" ").slice(0,7).join(" "),[e,n]=M.exports.useState([]),r=async()=>{const i=await tU(PA(R8,"car-rental"));n(i.docs.map(s=>s.data()))};return M.exports.useEffect(()=>{r()},[]),console.log(e),R(wt,{children:[p(Hy,{title:"\u062A\u0623\u062C\u064A\u0631 \u0627\u0644\u0633\u064A\u0627\u0631\u0627\u062A",description:"\r \u062A\u0623\u062C\u064A\u0631 \u0633\u064A\u0627\u0631\u0627\u062A \u0645\u0639 \u0633\u0627\u0626\u0642 \u0623\u0648 \u0628\u062F\u0648\u0646 \u0633\u0627\u0626\u0642 \u0641\u064A \u0623\u064A \u0645\u0643\u0627\u0646 \u0641\u064A \u0627\u0644\u0639\u0627\u0644\u0645",btnText:"\u0627\u062D\u062C\u0632 \u0627\u0644\u0622\u0646",to:"#cars",landingBg:gM,isneedBtn:!0}),p(Ky,{id:"cars",children:ok.map((i,s)=>p(Wy,{title:i.title,imageSrc:i.imageSrc,description:t(i.description)+"...",to:`/car-rental/${i.id}`},s))})]})},P8=()=>p("h1",{children:"Contact"}),x8="_headContainer_ajnvs_37",N8="_content_ajnvs_65",O8="_btn_ajnvs_93",D8="_bounce_ajnvs_1",Gs={"landing-sec":"_landing-sec_ajnvs_1",headContainer:x8,content:N8,btn:O8,"go-down":"_go-down_ajnvs_123",bounce:D8},m_=({title:t,description:e,btnText:n,to:r,landingBg:i,isneedBtn:s,className:o})=>{const a={"--landing-bg":`url(${i})`};return p("div",{className:`${Gs["landing-sec"]} ${o}`,style:a,children:R(tn,{className:Gs.headContainer,children:[R("div",{className:Gs.content,children:[p("h1",{children:t}),p("p",{children:e}),s&&p(Wo,{to:r,className:Gs.btn,children:n})]}),p("a",{href:r,className:Gs["go-down"],children:p(Ee,{icon:nk,className:Gs["fa-2x"]})})]})})},L8="_sidebar_1yvgd_1",M8={sidebar:L8},rC=t=>p("aside",{className:M8.sidebar,children:t.children}),V8="_bold_19tyr_17",F8="_cont_19tyr_25",q8="_review_19tyr_89",U8="_star_19tyr_97",$8="_par_19tyr_115",z8="_faq_19tyr_131",j8="_title_19tyr_139",B8="_quest_19tyr_153",W={"main-heading":"_main-heading_19tyr_1",bold:V8,cont:F8,review:q8,star:U8,par:$8,faq:z8,title:j8,quest:B8,"sub-page":"_sub-page_19tyr_169"},H8=()=>{const{postId:t}=Ey(),e=ok.find(l=>l.id===t),{title:n,imageSrc:r,description:i,feats:s,faq:o}=e;return R(wt,{children:[p(m_,{title:n,description:(l=>l.split(" ").slice(0,7).join(" "))(i),landingBg:`../${r}`,to:"#details",className:W["sub-page"]}),p("section",{id:"details",children:R(tn,{className:W.cont,children:[R("main",{children:[R("div",{className:W.title,children:[R("h2",{className:W["main-heading"],children:["Book Your ",p("span",{className:W.bold,children:n})," now!"]}),R("div",{className:W.review,children:[p(Ee,{icon:mn,className:W.star}),p(Ee,{icon:mn,className:W.star}),p(Ee,{icon:mn,className:W.star}),p(Ee,{icon:mn,className:W.star}),p(Ee,{icon:jy,className:W.star}),p("span",{children:"(1 review)"})]})]}),p("section",{children:p("p",{children:i})}),s&&s.map((l,u)=>R("section",{children:[p("h3",{className:W.title,children:l.title}),p("p",{children:l.description})]},u)),o&&R("section",{children:[p("h2",{className:W["main-heading"],children:p("span",{className:W.bold,children:"FAQs"})}),o.map((l,u)=>R("div",{className:W["faq-box"],children:[p("h3",{className:W.title,children:l.title}),p("p",{className:W.ans,children:l.description})]},u))]})]}),R(rC,{children:[R("div",{className:"feat",children:[p("h3",{className:W.title,children:"Car Model"}),p("p",{children:n})]}),R("div",{className:"feat",children:[p("h3",{className:W.title,children:"Price"}),p("p",{children:"Starting from AED 100"})]}),R("div",{className:"feat",children:[p("h3",{className:W.title,children:"Car Type"}),p("p",{children:"Automatic"})]}),R("div",{className:"feat",children:[p("h3",{className:W.title,children:"Fuel Type"}),p("p",{children:"Petrol"})]})]})]})})]})},W8=()=>{const{postId:t}=Ey(),e=Iu.find(l=>l.id===t),{title:n,imageSrc:r,description:i,feats:s,faq:o}=e;return R(wt,{children:[p(m_,{title:n,description:(l=>l.split(" ").slice(0,7).join(" "))(i),landingBg:`../${r}`,to:"#details",className:W["sub-page"]}),p("main",{id:"details",children:R(tn,{children:[R("div",{className:W.title,children:[R("h2",{className:W["main-heading"],children:["Get Your ",p("span",{className:W.bold,children:n})," ticket now!"]}),R("div",{className:W.review,children:[p(Ee,{icon:mn,className:W.star}),p(Ee,{icon:mn,className:W.star}),p(Ee,{icon:mn,className:W.star}),p(Ee,{icon:mn,className:W.star}),p(Ee,{icon:jy,className:W.star}),p("span",{children:"(1 review)"})]})]}),p("section",{children:p("p",{children:i})}),s&&s.map((l,u)=>R("section",{children:[p("h3",{className:W.title,children:l.title}),p("p",{children:l.description})]},u)),o&&R("section",{children:[p("h2",{className:W["main-heading"],children:p("span",{className:W.bold,children:"FAQs"})}),o.map((l,u)=>R("div",{className:W["faq-box"],children:[p("h3",{className:W.title,children:l.title}),p("p",{className:W.ans,children:l.description})]},u))]})]})})]})},K8=()=>{const{postId:t}=Ey(),e=Iu.find(l=>l.id===t),{title:n,imageSrc:r,description:i,feats:s,faq:o}=e;return R(wt,{children:[p(m_,{title:n,description:(l=>l.split(" ").slice(0,7).join(" "))(i),landingBg:`../${r}`,to:"#details",className:W["sub-page"]}),p("section",{id:"details",children:R(tn,{className:W.cont,children:[R("main",{children:[R("div",{className:W.title,children:[R("h2",{className:W["main-heading"],children:["Book Your ",p("span",{className:W.bold,children:n})," now!"]}),R("div",{className:W.review,children:[p(Ee,{icon:mn,className:W.star}),p(Ee,{icon:mn,className:W.star}),p(Ee,{icon:mn,className:W.star}),p(Ee,{icon:mn,className:W.star}),p(Ee,{icon:jy,className:W.star}),p("span",{children:"(1 review)"})]})]}),p("section",{children:p("p",{children:i})}),s&&s.map((l,u)=>R("section",{children:[p("h3",{className:W.title,children:l.title}),p("p",{children:l.description})]},u)),o&&R("section",{children:[p("h2",{className:W["main-heading"],children:p("span",{className:W.bold,children:"FAQs"})}),o.map((l,u)=>R("div",{className:W["faq-box"],children:[p("h3",{className:W.title,children:l.title}),p("p",{className:W.ans,children:l.description})]},u))]})]}),R(rC,{children:[R("div",{className:W.feat,children:[p("h3",{children:"Destination"}),p("p",{children:n})]}),R("div",{className:W.feat,children:[p("h3",{children:"Duration"}),p("p",{children:"3 days"})]}),R("div",{className:W.feat,children:[p("h3",{children:"Price"}),p("p",{children:"$200"})]}),R("div",{className:W.feat,children:[p("h3",{children:"Rating"}),p("p",{children:"4.5"})]}),R("div",{className:W.feat,children:[p("h3",{children:"Availability"}),p("p",{children:"20"})]}),R("div",{className:W.feat,children:[p("h3",{children:"Max Group Size"}),p("p",{children:"10"})]})]})]})})]})};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G8{constructor(e,n){this._delegate=e,this.firebase=n,nf(e,new pr("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Tk(this._delegate)))}_getService(e,n=Di){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Di){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){nf(this._delegate,e)}_addOrOverwriteComponent(e){Ek(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q8={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},ET=new Ms("app-compat","Firebase",Q8);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y8(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:_n,setLogLevel:bk,onLog:Sk,apps:null,SDK_VERSION:Xr,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:j5}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(u){delete e[u]}function i(u){if(u=u||Di,!Xw(e,u))throw ET.create("no-app",{appName:u});return e[u]}i.App=t;function s(u,c={}){const d=ku(u,c);if(Xw(e,d.name))return e[d.name];const f=new t(d,n);return e[d.name]=f,f}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const c=u.name,d=c.replace("-compat","");if($r(u)&&u.type==="PUBLIC"){const f=(m=i())=>{if(typeof m[d]!="function")throw ET.create("invalid-app-argument",{appName:c});return m[d]()};u.serviceProps!==void 0&&Zd(f,u.serviceProps),n[d]=f,t.prototype[d]=function(...m){return this._getService.bind(this,c).apply(this,u.multipleInstances?m:[])}}return u.type==="PUBLIC"?n[d]:null}function l(u,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iC(){const t=Y8(G8);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:iC,extendNamespace:e,createSubscribe:vk,ErrorFactory:Ms,deepExtend:Zd});function e(n){Zd(t,n)}return t}const X8=iC();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT=new rh("@firebase/app-compat"),J8="@firebase/app-compat",Z8="0.2.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ej(t){_n(J8,Z8,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(AM()&&self.firebase!==void 0){TT.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&TT.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const zh=X8;ej();var tj="firebase",nj="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */zh.registerVersion(tj,nj,"app-compat");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rj=2e3;async function ij(t,e,n){var r;const{BuildInfo:i}=Ns();Xn(e.sessionId,"AuthEvent did not contain a session ID");const s=await uj(e.sessionId),o={};return _a()?o.ibi=i.packageName:ju()?o.apn=i.packageName:Tt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,gv(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function sj(t){const{BuildInfo:e}=Ns(),n={};_a()?n.iosBundleId=e.packageName:ju()?n.androidPackageName=e.packageName:Tt(t,"operation-not-supported-in-this-environment"),await LR(t,n)}function oj(t){const{cordova:e}=Ns();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,kU()?"_blank":"_system","location=yes"),n(i)})})}async function aj(t,e,n){const{cordova:r}=Ns();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function l(){var d;s();const f=(d=r.plugins.browsertab)===null||d===void 0?void 0:d.close;typeof f=="function"&&f(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{o(xt(t,"redirect-cancelled-by-user"))},rj))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),ju()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function lj(t){var e,n,r,i,s,o,a,l,u,c;const d=Ns();L(typeof((e=d==null?void 0:d.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),L(typeof((n=d==null?void 0:d.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),L(typeof((s=(i=(r=d==null?void 0:d.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),L(typeof((l=(a=(o=d==null?void 0:d.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),L(typeof((c=(u=d==null?void 0:d.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function uj(t){const e=cj(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function cj(t){if(Xn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dj=20;class fj extends OR{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function hj(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:gj(),postBody:null,tenantId:t.tenantId,error:xt(t,"no-auth-event")}}function pj(t,e){return yv()._set(_v(t),e)}async function ST(t){const e=await yv()._get(_v(t));return e&&await yv()._remove(_v(t)),e}function mj(t,e){var n,r;const i=yj(e);if(i.includes("/__/auth/callback")){const s=cd(i),o=s.firebaseError?vj(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?xt(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function gj(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<dj;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function yv(){return gn(Vh)}function _v(t){return gs("authEvent",t.config.apiKey,t.name)}function vj(t){try{return JSON.parse(t)}catch{return null}}function yj(t){const e=cd(t),n=e.link?decodeURIComponent(e.link):void 0,r=cd(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return cd(i).link||i||r||n||t}function cd(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return go(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _j=500;class wj{constructor(){this._redirectPersistence=Ui,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=$h,this._overrideRedirectResult=a_}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new fj(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){Tt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){lj(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),I7(),await this._originValidation(e);const o=hj(e,r,i);await pj(e,o);const a=await ij(e,o,n),l=await oj(a);return aj(e,s,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sj(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Ns(),o=setTimeout(async()=>{await ST(e),n.onEvent(bT())},_j),a=async c=>{clearTimeout(o);const d=await ST(e);let f=null;d&&(c==null?void 0:c.url)&&(f=mj(d,c.url)),n.onEvent(f||bT())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${s.packageName.toLowerCase()}://`;Ns().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(u)&&a({url:c}),typeof l=="function")try{l(c)}catch(d){console.error(d)}}}}const Ej=wj;function bT(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:xt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tj(t,e){et(t)._logFramework(e)}var Sj="@firebase/auth-compat",bj="0.4.4";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ij=1e3;function El(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function kj(){return El()==="http:"||El()==="https:"}function sC(t=ot()){return!!((El()==="file:"||El()==="ionic:"||El()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function Aj(){return Qy()||Gy()}function Rj(){return gk()&&(document==null?void 0:document.documentMode)===11}function Cj(t=ot()){return/Edge\/\d+/.test(t)}function Pj(t=ot()){return Rj()||Cj(t)}function oC(){try{const t=self.localStorage,e=Hu();if(t)return t.setItem(e,"1"),t.removeItem(e),Pj()?ef():!0}catch{return g_()&&ef()}return!1}function g_(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function mm(){return(kj()||mk()||sC())&&!Aj()&&oC()&&!g_()}function aC(){return sC()&&typeof document<"u"}async function xj(){return aC()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},Ij);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function Nj(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hn={LOCAL:"local",NONE:"none",SESSION:"session"},$a=L,lC="persistence";function Oj(t,e){if($a(Object.values(hn).includes(e),t,"invalid-persistence-type"),Qy()){$a(e!==hn.SESSION,t,"unsupported-persistence-type");return}if(Gy()){$a(e===hn.NONE,t,"unsupported-persistence-type");return}if(g_()){$a(e===hn.NONE||e===hn.LOCAL&&ef(),t,"unsupported-persistence-type");return}$a(e===hn.NONE||oC(),t,"unsupported-persistence-type")}async function wv(t){await t._initializationPromise;const e=uC(),n=gs(lC,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function Dj(t,e){const n=uC();if(!n)return[];const r=gs(lC,t,e);switch(n.getItem(r)){case hn.NONE:return[ta];case hn.LOCAL:return[ra,Ui];case hn.SESSION:return[Ui];default:return[]}}function uC(){var t;try{return((t=Nj())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lj=L;class vi{constructor(){this.browserResolver=gn(MR),this.cordovaResolver=gn(Ej),this.underlyingResolver=null,this._redirectPersistence=Ui,this._completeRedirectFn=$h,this._overrideRedirectResult=a_}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return aC()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Lj(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await xj();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){return t.unwrap()}function Mj(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vj(t){return dC(t)}function Fj(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new qj(t,N$(t,e))}else if(r){const i=dC(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function dC(t){const{_tokenResponse:e}=t instanceof zt?t.customData:t;if(!e)return null;if(!(t instanceof zt)&&"temporaryProof"in e&&"phoneNumber"in e)return Gn.credentialFromResult(t);const n=e.providerId;if(!n||n===qa.PASSWORD)return null;let r;switch(n){case qa.GOOGLE:r=Pn;break;case qa.FACEBOOK:r=rr;break;case qa.GITHUB:r=ir;break;case qa.TWITTER:r=sr;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:l}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?na._create(n,a):vr._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new No(n).credential({idToken:i,accessToken:s,rawNonce:l})}return t instanceof zt?r.credentialFromError(t):r.credentialFromResult(t)}function sn(t,e){return e.catch(n=>{throw n instanceof zt&&Fj(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:Vj(n),additionalUserInfo:R$(n),user:Rr.getOrCreate(i)}})}async function Ev(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>sn(t,n.confirm(r))}}class qj{constructor(e,n){this.resolver=n,this.auth=Mj(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return sn(cC(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{constructor(e){this._delegate=e,this.multiFactor=M$(e)}static getOrCreate(e){return Rr.USER_MAP.has(e)||Rr.USER_MAP.set(e,new Rr(e)),Rr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return sn(this.auth,gR(this._delegate,e))}async linkWithPhoneNumber(e,n){return Ev(this.auth,h7(this._delegate,e,n))}async linkWithPopup(e){return sn(this.auth,E7(this._delegate,e,vi))}async linkWithRedirect(e){return await wv(et(this.auth)),P7(this._delegate,e,vi)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return sn(this.auth,vR(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Ev(this.auth,p7(this._delegate,e,n))}reauthenticateWithPopup(e){return sn(this.auth,w7(this._delegate,e,vi))}async reauthenticateWithRedirect(e){return await wv(et(this.auth)),R7(this._delegate,e,vi)}sendEmailVerification(e){return v$(this._delegate,e)}async unlink(e){return await r$(this._delegate,e),this}updateEmail(e){return E$(this._delegate,e)}updatePassword(e){return T$(this._delegate,e)}updatePhoneNumber(e){return m7(this._delegate,e)}updateProfile(e){return w$(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return y$(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Rr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za=L;class Tv{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;za(r,"invalid-api-key",{appName:e.name}),za(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?vi:void 0;this._delegate=n.initialize({options:{persistence:Uj(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(aU),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Rr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){lR(this._delegate,e,n)}applyActionCode(e){return l$(this._delegate,e)}checkActionCode(e){return yR(this._delegate,e)}confirmPasswordReset(e,n){return a$(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return sn(this._delegate,c$(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return g$(this._delegate,e)}isSignInWithEmailLink(e){return h$(this._delegate,e)}async getRedirectResult(){za(mm(),this._delegate,"operation-not-supported-in-this-environment");const e=await N7(this._delegate,vi);return e?sn(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Tj(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=IT(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=IT(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return f$(this._delegate,e,n)}sendPasswordResetEmail(e,n){return o$(this._delegate,e,n||void 0)}async setPersistence(e){Oj(this._delegate,e);let n;switch(e){case hn.SESSION:n=Ui;break;case hn.LOCAL:n=await gn(ra)._isAvailable()?ra:Vh;break;case hn.NONE:n=ta;break;default:return Tt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return sn(this._delegate,n$(this._delegate))}signInWithCredential(e){return sn(this._delegate,Mh(this._delegate,e))}signInWithCustomToken(e){return sn(this._delegate,s$(this._delegate,e))}signInWithEmailAndPassword(e,n){return sn(this._delegate,d$(this._delegate,e,n))}signInWithEmailLink(e,n){return sn(this._delegate,p$(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Ev(this._delegate,f7(this._delegate,e,n))}async signInWithPopup(e){return za(mm(),this._delegate,"operation-not-supported-in-this-environment"),sn(this._delegate,CR(this._delegate,e,vi))}async signInWithRedirect(e){return za(mm(),this._delegate,"operation-not-supported-in-this-environment"),await wv(this._delegate),k7(this._delegate,e,vi)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return u$(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Tv.Persistence=hn;function IT(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&Rr.getOrCreate(o)),error:e,complete:n}}function Uj(t,e){const n=Dj(t,e);if(typeof self<"u"&&!n.includes(ra)&&n.push(ra),typeof window<"u")for(const r of[Vh,Ui])n.includes(r)||n.push(r);return n.includes(ta)||n.push(ta),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v_{constructor(){this.providerId="phone",this._delegate=new Gn(cC(zh.auth()))}static credential(e,n){return Gn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}v_.PHONE_SIGN_IN_METHOD=Gn.PHONE_SIGN_IN_METHOD;v_.PROVIDER_ID=Gn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $j=L;class zj{constructor(e,n,r=zh.app()){var i;$j((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new c7(r.auth(),e,n),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jj="auth-compat";function Bj(t){t.INTERNAL.registerComponent(new pr(jj,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Tv(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Ks.EMAIL_SIGNIN,PASSWORD_RESET:Ks.PASSWORD_RESET,RECOVER_EMAIL:Ks.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Ks.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Ks.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Ks.VERIFY_EMAIL}},EmailAuthProvider:Wi,FacebookAuthProvider:rr,GithubAuthProvider:ir,GoogleAuthProvider:Pn,OAuthProvider:No,SAMLAuthProvider:wf,PhoneAuthProvider:v_,PhoneMultiFactorGenerator:VR,RecaptchaVerifier:zj,TwitterAuthProvider:sr,Auth:Tv,AuthCredential:wa,Error:zt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(Sj,bj)}Bj(zh);const Hj={apiKey:"AIzaSyBlcfhHzl-t4I0EgkdeFedgCpyf37EKDSo",authDomain:"silverjarz-dashboard.firebaseapp.com",projectId:"silverjarz-dashboard",storageBucket:"silverjarz-dashboard.appspot.com",messagingSenderId:"112504342717",appId:"1:112504342717:web:51e28f6afe54c836db8fd4",measurementId:"G-YXD21JLWCK"},fC=ku(Hj),hC=u_(),Wj=new Pn,Kj=xA(fC),Gj=()=>CR(hC,Wj),Qj=tC(fC);let zc;const Yj=new Uint8Array(16);function Xj(){if(!zc&&(zc=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!zc))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return zc(Yj)}const It=[];for(let t=0;t<256;++t)It.push((t+256).toString(16).slice(1));function Jj(t,e=0){return(It[t[e+0]]+It[t[e+1]]+It[t[e+2]]+It[t[e+3]]+"-"+It[t[e+4]]+It[t[e+5]]+"-"+It[t[e+6]]+It[t[e+7]]+"-"+It[t[e+8]]+It[t[e+9]]+"-"+It[t[e+10]]+It[t[e+11]]+It[t[e+12]]+It[t[e+13]]+It[t[e+14]]+It[t[e+15]]).toLowerCase()}const Zj=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),kT={randomUUID:Zj};function eB(t,e,n){if(kT.randomUUID&&!e&&!t)return kT.randomUUID();t=t||{};const r=t.random||(t.rng||Xj)();if(r[6]=r[6]&15|64,r[8]=r[8]&63|128,e){n=n||0;for(let i=0;i<16;++i)e[n+i]=r[i];return e}return Jj(r)}const tB=()=>{hC.signOut()},nB=t=>t.toLowerCase().replace(/\s+/g,"-").split("-").slice(0,3).join("-"),rB=()=>{const t=M.exports.useRef(),e=M.exports.useRef(),[n,r]=M.exports.useState([]),i=d=>{var T,S,A,b,C;d.preventDefault(),Array.from(e.current.children).forEach(P=>{const B=P.children[0].value,q=P.children[1].value;r(H=>[...H,{featName:B,featDescription:q}])});const m=(T=t.current[0])==null?void 0:T.value,w=(S=t.current[1])==null?void 0:S.value,_=(A=t.current[2])==null?void 0:A.value,E=(b=t.current[3])==null?void 0:b.value,v=[{faq:_,faqDescription:E}],h=(C=t.current[5])==null?void 0:C.files[0],y=nB(m),g=S8(Qj,`imageSrcs/cars/${h.name}`);E8(g,h).then(P=>{T8(P.ref).then(B=>{s({id:y,title:m,description:w,feats:n,faqs:v,imageSrc:B})},B=>{console.log(B),s({id:y,title:m,description:w,feats:n,faqs:v,imageSrc:null})})},P=>{console.log(P),s({id:y,title:m,description:w,feats:n,faqs:v,imageSrc:null})})},s=async d=>{try{await nU(PA(Kj,"car-rental"),d),window.location.reload()}catch{alert("Failed to upload")}},o=d=>{d.preventDefault();const m={id:eB(),content:p(u,{})};l(w=>[...w,m])},[a,l]=M.exports.useState([]),u=()=>R(wt,{children:[p("input",{type:"text",placeholder:"feature",style:{display:"block"}}),p("textarea",{name:"description",placeholder:"description"})]});return R("form",{ref:t,onSubmit:i,children:[p("div",{children:p("input",{type:"text",placeholder:"Model"})}),p("div",{children:p("textarea",{name:"description",placeholder:"description"})}),R("div",{children:[p("input",{type:"text",placeholder:"faq"}),p("br",{}),p("textarea",{name:"description",placeholder:"description"}),p("button",{onClick:d=>{},children:"add an faq"})]}),p("div",{children:p("input",{type:"file",placeholder:"imageSrc"})}),p("div",{ref:e,children:a.map(d=>p("div",{children:d.content},d.id))}),p("button",{onClick:o,children:"add a feature"}),p("button",{type:"submit",children:"Submit"}),p("button",{onClick:tB,children:"Sign Out"})]})},iB=()=>p("div",{children:p("button",{onClick:Gj,children:"Sign In with Google"})}),sB=()=>{const[t,e]=M.exports.useState(null),n=u_();return M.exports.useEffect(()=>{x$(n,r=>{e(r||null)})},[]),p("div",{children:t?p(rB,{}):p(iB,{})})},oB=cN([{path:"/",element:p(_3,{}),children:[{path:"/",element:p(n3,{})},{path:"/visas",element:p(J3,{})},{path:"/tickets",element:p(pM,{})},{path:"/tours",element:p(mM,{})},{path:"/car-rental",element:p(C8,{})},{path:"/contact",element:p(P8,{})},{path:"/car-rental/:postId",element:p(H8,{})},{path:"/tickets/:postId",element:p(W8,{})},{path:"/tours/:postId",element:p(K8,{})}]},{path:"/dashboard",element:p(sB,{})}]);gm.createRoot(document.getElementById("root")).render(p(bf.StrictMode,{children:p(tN,{router:oB})}));
