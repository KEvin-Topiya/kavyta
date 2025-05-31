var px=Object.defineProperty;var mx=(r,e,t)=>e in r?px(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ki=(r,e,t)=>mx(r,typeof e!="symbol"?e+"":e,t);function gx(r,e){for(var t=0;t<e.length;t++){const s=e[t];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const l=Object.getOwnPropertyDescriptor(s,o);l&&Object.defineProperty(r,o,l.get?l:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function ic(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Gu={exports:{}},Ka={},ju={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function vx(){if(cm)return ft;cm=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=_&&U[_]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,A={};function S(U,ne,Ie){this.props=U,this.context=ne,this.refs=A,this.updater=Ie||M}S.prototype.isReactComponent={},S.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},S.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=S.prototype;function I(U,ne,Ie){this.props=U,this.context=ne,this.refs=A,this.updater=Ie||M}var L=I.prototype=new x;L.constructor=I,T(L,S.prototype),L.isPureReactComponent=!0;var R=Array.isArray,Y=Object.prototype.hasOwnProperty,B={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function X(U,ne,Ie){var Z,ue={},Ee=null,_e=null;if(ne!=null)for(Z in ne.ref!==void 0&&(_e=ne.ref),ne.key!==void 0&&(Ee=""+ne.key),ne)Y.call(ne,Z)&&!O.hasOwnProperty(Z)&&(ue[Z]=ne[Z]);var be=arguments.length-2;if(be===1)ue.children=Ie;else if(1<be){for(var Ue=Array(be),Qe=0;Qe<be;Qe++)Ue[Qe]=arguments[Qe+2];ue.children=Ue}if(U&&U.defaultProps)for(Z in be=U.defaultProps,be)ue[Z]===void 0&&(ue[Z]=be[Z]);return{$$typeof:r,type:U,key:Ee,ref:_e,props:ue,_owner:B.current}}function P(U,ne){return{$$typeof:r,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function z(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Ie){return ne[Ie]})}var oe=/\/+/g;function te(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?z(""+U.key):ne.toString(36)}function fe(U,ne,Ie,Z,ue){var Ee=typeof U;(Ee==="undefined"||Ee==="boolean")&&(U=null);var _e=!1;if(U===null)_e=!0;else switch(Ee){case"string":case"number":_e=!0;break;case"object":switch(U.$$typeof){case r:case e:_e=!0}}if(_e)return _e=U,ue=ue(_e),U=Z===""?"."+te(_e,0):Z,R(ue)?(Ie="",U!=null&&(Ie=U.replace(oe,"$&/")+"/"),fe(ue,ne,Ie,"",function(Qe){return Qe})):ue!=null&&(C(ue)&&(ue=P(ue,Ie+(!ue.key||_e&&_e.key===ue.key?"":(""+ue.key).replace(oe,"$&/")+"/")+U)),ne.push(ue)),1;if(_e=0,Z=Z===""?".":Z+":",R(U))for(var be=0;be<U.length;be++){Ee=U[be];var Ue=Z+te(Ee,be);_e+=fe(Ee,ne,Ie,Ue,ue)}else if(Ue=y(U),typeof Ue=="function")for(U=Ue.call(U),be=0;!(Ee=U.next()).done;)Ee=Ee.value,Ue=Z+te(Ee,be++),_e+=fe(Ee,ne,Ie,Ue,ue);else if(Ee==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return _e}function pe(U,ne,Ie){if(U==null)return U;var Z=[],ue=0;return fe(U,Z,"","",function(Ee){return ne.call(Ie,Ee,ue++)}),Z}function ae(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Ie){(U._status===0||U._status===-1)&&(U._status=1,U._result=Ie)},function(Ie){(U._status===0||U._status===-1)&&(U._status=2,U._result=Ie)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},k={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:k,ReactCurrentOwner:B};function se(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:pe,forEach:function(U,ne,Ie){pe(U,function(){ne.apply(this,arguments)},Ie)},count:function(U){var ne=0;return pe(U,function(){ne++}),ne},toArray:function(U){return pe(U,function(ne){return ne})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ft.Component=S,ft.Fragment=t,ft.Profiler=o,ft.PureComponent=I,ft.StrictMode=s,ft.Suspense=h,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ft.act=se,ft.cloneElement=function(U,ne,Ie){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var Z=T({},U.props),ue=U.key,Ee=U.ref,_e=U._owner;if(ne!=null){if(ne.ref!==void 0&&(Ee=ne.ref,_e=B.current),ne.key!==void 0&&(ue=""+ne.key),U.type&&U.type.defaultProps)var be=U.type.defaultProps;for(Ue in ne)Y.call(ne,Ue)&&!O.hasOwnProperty(Ue)&&(Z[Ue]=ne[Ue]===void 0&&be!==void 0?be[Ue]:ne[Ue])}var Ue=arguments.length-2;if(Ue===1)Z.children=Ie;else if(1<Ue){be=Array(Ue);for(var Qe=0;Qe<Ue;Qe++)be[Qe]=arguments[Qe+2];Z.children=be}return{$$typeof:r,type:U.type,key:ue,ref:Ee,props:Z,_owner:_e}},ft.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},ft.createElement=X,ft.createFactory=function(U){var ne=X.bind(null,U);return ne.type=U,ne},ft.createRef=function(){return{current:null}},ft.forwardRef=function(U){return{$$typeof:d,render:U}},ft.isValidElement=C,ft.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ae}},ft.memo=function(U,ne){return{$$typeof:p,type:U,compare:ne===void 0?null:ne}},ft.startTransition=function(U){var ne=k.transition;k.transition={};try{U()}finally{k.transition=ne}},ft.unstable_act=se,ft.useCallback=function(U,ne){return ce.current.useCallback(U,ne)},ft.useContext=function(U){return ce.current.useContext(U)},ft.useDebugValue=function(){},ft.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},ft.useEffect=function(U,ne){return ce.current.useEffect(U,ne)},ft.useId=function(){return ce.current.useId()},ft.useImperativeHandle=function(U,ne,Ie){return ce.current.useImperativeHandle(U,ne,Ie)},ft.useInsertionEffect=function(U,ne){return ce.current.useInsertionEffect(U,ne)},ft.useLayoutEffect=function(U,ne){return ce.current.useLayoutEffect(U,ne)},ft.useMemo=function(U,ne){return ce.current.useMemo(U,ne)},ft.useReducer=function(U,ne,Ie){return ce.current.useReducer(U,ne,Ie)},ft.useRef=function(U){return ce.current.useRef(U)},ft.useState=function(U){return ce.current.useState(U)},ft.useSyncExternalStore=function(U,ne,Ie){return ce.current.useSyncExternalStore(U,ne,Ie)},ft.useTransition=function(){return ce.current.useTransition()},ft.version="18.3.1",ft}var um;function bf(){return um||(um=1,ju.exports=vx()),ju.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function xx(){if(dm)return Ka;dm=1;var r=bf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var g,_={},y=null,M=null;p!==void 0&&(y=""+p),h.key!==void 0&&(y=""+h.key),h.ref!==void 0&&(M=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(_[g]=h[g]);if(d&&d.defaultProps)for(g in h=d.defaultProps,h)_[g]===void 0&&(_[g]=h[g]);return{$$typeof:e,type:d,key:y,ref:M,props:_,_owner:o.current}}return Ka.Fragment=t,Ka.jsx=u,Ka.jsxs=u,Ka}var fm;function _x(){return fm||(fm=1,Gu.exports=xx()),Gu.exports}var v=_x(),Ae=bf();const qi=ic(Ae),yx=gx({__proto__:null,default:qi},[Ae]);var El={},Wu={exports:{}},Rn={},Xu={exports:{}},qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function Sx(){return hm||(hm=1,function(r){function e(k,le){var se=k.length;k.push(le);e:for(;0<se;){var U=se-1>>>1,ne=k[U];if(0<o(ne,le))k[U]=le,k[se]=ne,se=U;else break e}}function t(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var le=k[0],se=k.pop();if(se!==le){k[0]=se;e:for(var U=0,ne=k.length,Ie=ne>>>1;U<Ie;){var Z=2*(U+1)-1,ue=k[Z],Ee=Z+1,_e=k[Ee];if(0>o(ue,se))Ee<ne&&0>o(_e,ue)?(k[U]=_e,k[Ee]=se,U=Ee):(k[U]=ue,k[Z]=se,U=Z);else if(Ee<ne&&0>o(_e,se))k[U]=_e,k[Ee]=se,U=Ee;else break e}}return le}function o(k,le){var se=k.sortIndex-le.sortIndex;return se!==0?se:k.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var h=[],p=[],g=1,_=null,y=3,M=!1,T=!1,A=!1,S=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,I=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var le=t(p);le!==null;){if(le.callback===null)s(p);else if(le.startTime<=k)s(p),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(p)}}function R(k){if(A=!1,L(k),!T)if(t(h)!==null)T=!0,ae(Y);else{var le=t(p);le!==null&&ce(R,le.startTime-k)}}function Y(k,le){T=!1,A&&(A=!1,x(X),X=-1),M=!0;var se=y;try{for(L(le),_=t(h);_!==null&&(!(_.expirationTime>le)||k&&!z());){var U=_.callback;if(typeof U=="function"){_.callback=null,y=_.priorityLevel;var ne=U(_.expirationTime<=le);le=r.unstable_now(),typeof ne=="function"?_.callback=ne:_===t(h)&&s(h),L(le)}else s(h);_=t(h)}if(_!==null)var Ie=!0;else{var Z=t(p);Z!==null&&ce(R,Z.startTime-le),Ie=!1}return Ie}finally{_=null,y=se,M=!1}}var B=!1,O=null,X=-1,P=5,C=-1;function z(){return!(r.unstable_now()-C<P)}function oe(){if(O!==null){var k=r.unstable_now();C=k;var le=!0;try{le=O(!0,k)}finally{le?te():(B=!1,O=null)}}else B=!1}var te;if(typeof I=="function")te=function(){I(oe)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,pe=fe.port2;fe.port1.onmessage=oe,te=function(){pe.postMessage(null)}}else te=function(){S(oe,0)};function ae(k){O=k,B||(B=!0,te())}function ce(k,le){X=S(function(){k(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){T||M||(T=!0,ae(Y))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return y},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(k){switch(y){case 1:case 2:case 3:var le=3;break;default:le=y}var se=y;y=le;try{return k()}finally{y=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,le){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var se=y;y=k;try{return le()}finally{y=se}},r.unstable_scheduleCallback=function(k,le,se){var U=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?U+se:U):se=U,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,k={id:g++,callback:le,priorityLevel:k,startTime:se,expirationTime:ne,sortIndex:-1},se>U?(k.sortIndex=se,e(p,k),t(h)===null&&k===t(p)&&(A?(x(X),X=-1):A=!0,ce(R,se-U))):(k.sortIndex=ne,e(h,k),T||M||(T=!0,ae(Y))),k},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(k){var le=y;return function(){var se=y;y=le;try{return k.apply(this,arguments)}finally{y=se}}}}(qu)),qu}var pm;function Mx(){return pm||(pm=1,Xu.exports=Sx()),Xu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function Ex(){if(mm)return Rn;mm=1;var r=bf(),e=Mx();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)s.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function y(n){return h.call(_,n)?!0:h.call(g,n)?!1:p.test(n)?_[n]=!0:(g[n]=!0,!1)}function M(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||M(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(n,i,a,c,f,m,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=E}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){S[n]=new A(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];S[i]=new A(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){S[n]=new A(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){S[n]=new A(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){S[n]=new A(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){S[n]=new A(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){S[n]=new A(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){S[n]=new A(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){S[n]=new A(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function I(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,I);S[i]=new A(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,I);S[i]=new A(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,I);S[i]=new A(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!1,!1)}),S.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){S[n]=new A(n,1,!1,n.toLowerCase(),null,!0,!0)});function L(n,i,a,c){var f=S.hasOwnProperty(i)?S[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,f,c)&&(a=null),c||f===null?y(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Y=Symbol.for("react.element"),B=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),k=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=k&&n[k]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,U;function ne(n){if(U===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Ie=!1;function Z(n,i){if(!n||Ie)return"";Ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var c=Q}Reflect.construct(n,[],i)}else{try{i.call()}catch(Q){c=Q}n.call(i.prototype)}else{try{throw Error()}catch(Q){c=Q}n()}}catch(Q){if(Q&&c&&typeof Q.stack=="string"){for(var f=Q.stack.split(`
`),m=c.stack.split(`
`),E=f.length-1,D=m.length-1;1<=E&&0<=D&&f[E]!==m[D];)D--;for(;1<=E&&0<=D;E--,D--)if(f[E]!==m[D]){if(E!==1||D!==1)do if(E--,D--,0>D||f[E]!==m[D]){var F=`
`+f[E].replace(" at new "," at ");return n.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",n.displayName)),F}while(1<=E&&0<=D);break}}}finally{Ie=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?ne(n):""}function ue(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function Ee(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case B:return"Portal";case P:return"Profiler";case X:return"StrictMode";case te:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case oe:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return i=n.displayName||null,i!==null?i:Ee(n.type)||"Memo";case ae:i=n._payload,n=n._init;try{return Ee(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function be(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ue(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=Ue(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){c=""+E,m.call(this,E)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(E){c=""+E},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function bt(n){n._valueTracker||(n._valueTracker=Qe(n))}function pt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ue(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Lt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function W(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function mn(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=be(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&L(n,"checked",i,!1)}function ut(n,i){ht(n,i);var a=be(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?wt(n,i.type,a):i.hasOwnProperty("defaultValue")&&wt(n,i.type,be(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ye(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function wt(n,i,a){(i!=="number"||Lt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var $e=Array.isArray;function N(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+be(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function w(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function K(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if($e(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:be(a)}}function me(n,i){var a=be(i.value),c=be(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function de(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?de(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Fe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ct(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(n){ke.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Se[i]=Se[n]})});function Je(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Se.hasOwnProperty(n)&&Se[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Je(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Be=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function rt(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function V(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,re=null,he=null;function Le(n){if(n=Ua(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=ko(i),Re(n.stateNode,n.type,i))}}function Ne(n){re?he?he.push(n):he=[n]:re=n}function st(){if(re){var n=re,i=he;if(he=re=null,Le(n),i)for(n=0;n<i.length;n++)Le(i[n])}}function It(n,i){return n(i)}function $t(){}var vt=!1;function Mn(n,i,a){if(vt)return n(i,a);vt=!0;try{return It(n,i,a)}finally{vt=!1,(re!==null||he!==null)&&($t(),st())}}function gn(n,i){var a=n.stateNode;if(a===null)return null;var c=ko(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var hs=!1;if(d)try{var Ji={};Object.defineProperty(Ji,"passive",{get:function(){hs=!0}}),window.addEventListener("test",Ji,Ji),window.removeEventListener("test",Ji,Ji)}catch{hs=!1}function bi(n,i,a,c,f,m,E,D,F){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(a,Q)}catch(xe){this.onError(xe)}}var Ci=!1,Or=null,kr=!1,er=null,xo={onError:function(n){Ci=!0,Or=n}};function ps(n,i,a,c,f,m,E,D,F){Ci=!1,Or=null,bi.apply(xo,arguments)}function _o(n,i,a,c,f,m,E,D,F){if(ps.apply(this,arguments),Ci){if(Ci){var Q=Or;Ci=!1,Or=null}else throw Error(t(198));kr||(kr=!0,er=Q)}}function gi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function yo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function So(n){if(gi(n)!==n)throw Error(t(188))}function dc(n){var i=n.alternate;if(!i){if(i=gi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return So(f),n;if(m===c)return So(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=m;else{for(var E=!1,D=f.child;D;){if(D===a){E=!0,a=f,c=m;break}if(D===c){E=!0,c=f,a=m;break}D=D.sibling}if(!E){for(D=m.child;D;){if(D===a){E=!0,a=m,c=f;break}if(D===c){E=!0,c=m,a=f;break}D=D.sibling}if(!E)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function b(n){return n=dc(n),n!==null?G(n):null}function G(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=G(n);if(i!==null)return i;n=n.sibling}return null}var J=e.unstable_scheduleCallback,ee=e.unstable_cancelCallback,j=e.unstable_shouldYield,we=e.unstable_requestPaint,Me=e.unstable_now,je=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,We=e.unstable_LowPriority,gt=e.unstable_IdlePriority,Et=null,mt=null;function on(n){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Et,n,void 0,(n.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:yt,qe=Math.log,ei=Math.LN2;function yt(n){return n>>>=0,n===0?32:31-(qe(n)/ei|0)|0}var ln=64,ti=4194304;function Yt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function vi(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,E=a&268435455;if(E!==0){var D=E&~f;D!==0?c=Yt(D):(m&=E,m!==0&&(c=Yt(m)))}else E=a&~f,E!==0?c=Yt(E):m!==0&&(c=Yt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-at(i),f=1<<a,c|=n[a],i&=~f;return c}function Pt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gn(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var E=31-at(m),D=1<<E,F=f[E];F===-1?((D&a)===0||(D&c)!==0)&&(f[E]=Pt(D,i)):F<=i&&(n.expiredLanes|=D),m&=~D}}function Ri(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function vn(){var n=ln;return ln<<=1,(ln&4194240)===0&&(ln=64),n}function jn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function En(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-at(i),n[i]=a}function Mo(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-at(a),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~m}}function fc(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-at(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var At=0;function Hf(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Vf,hc,Gf,jf,Wf,pc=!1,Eo=[],tr=null,nr=null,ir=null,_a=new Map,ya=new Map,rr=[],Fv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xf(n,i){switch(n){case"focusin":case"focusout":tr=null;break;case"dragenter":case"dragleave":nr=null;break;case"mouseover":case"mouseout":ir=null;break;case"pointerover":case"pointerout":_a.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ya.delete(i.pointerId)}}function Sa(n,i,a,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Ua(i),i!==null&&hc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Ov(n,i,a,c,f){switch(i){case"focusin":return tr=Sa(tr,n,i,a,c,f),!0;case"dragenter":return nr=Sa(nr,n,i,a,c,f),!0;case"mouseover":return ir=Sa(ir,n,i,a,c,f),!0;case"pointerover":var m=f.pointerId;return _a.set(m,Sa(_a.get(m)||null,n,i,a,c,f)),!0;case"gotpointercapture":return m=f.pointerId,ya.set(m,Sa(ya.get(m)||null,n,i,a,c,f)),!0}return!1}function qf(n){var i=Br(n.target);if(i!==null){var a=gi(i);if(a!==null){if(i=a.tag,i===13){if(i=yo(a),i!==null){n.blockedOn=i,Wf(n.priority,function(){Gf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function To(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=gc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Tt=c,a.target.dispatchEvent(c),Tt=null}else return i=Ua(a),i!==null&&hc(i),n.blockedOn=a,!1;i.shift()}return!0}function $f(n,i,a){To(n)&&a.delete(i)}function kv(){pc=!1,tr!==null&&To(tr)&&(tr=null),nr!==null&&To(nr)&&(nr=null),ir!==null&&To(ir)&&(ir=null),_a.forEach($f),ya.forEach($f)}function Ma(n,i){n.blockedOn===i&&(n.blockedOn=null,pc||(pc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,kv)))}function Ea(n){function i(f){return Ma(f,n)}if(0<Eo.length){Ma(Eo[0],n);for(var a=1;a<Eo.length;a++){var c=Eo[a];c.blockedOn===n&&(c.blockedOn=null)}}for(tr!==null&&Ma(tr,n),nr!==null&&Ma(nr,n),ir!==null&&Ma(ir,n),_a.forEach(i),ya.forEach(i),a=0;a<rr.length;a++)c=rr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<rr.length&&(a=rr[0],a.blockedOn===null);)qf(a),a.blockedOn===null&&rr.shift()}var ms=R.ReactCurrentBatchConfig,wo=!0;function Bv(n,i,a,c){var f=At,m=ms.transition;ms.transition=null;try{At=1,mc(n,i,a,c)}finally{At=f,ms.transition=m}}function zv(n,i,a,c){var f=At,m=ms.transition;ms.transition=null;try{At=4,mc(n,i,a,c)}finally{At=f,ms.transition=m}}function mc(n,i,a,c){if(wo){var f=gc(n,i,a,c);if(f===null)Dc(n,i,c,Ao,a),Xf(n,c);else if(Ov(f,n,i,a,c))c.stopPropagation();else if(Xf(n,c),i&4&&-1<Fv.indexOf(n)){for(;f!==null;){var m=Ua(f);if(m!==null&&Vf(m),m=gc(n,i,a,c),m===null&&Dc(n,i,c,Ao,a),m===f)break;f=m}f!==null&&c.stopPropagation()}else Dc(n,i,c,null,a)}}var Ao=null;function gc(n,i,a,c){if(Ao=null,n=V(c),n=Br(n),n!==null)if(i=gi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=yo(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ao=n,null}function Yf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(je()){case He:return 1;case tt:return 4;case it:case We:return 16;case gt:return 536870912;default:return 16}default:return 16}}var sr=null,vc=null,bo=null;function Kf(){if(bo)return bo;var n,i=vc,a=i.length,c,f="value"in sr?sr.value:sr.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var E=a-n;for(c=1;c<=E&&i[a-c]===f[m-c];c++);return bo=f.slice(n,1<c?1-c:void 0)}function Co(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Ro(){return!0}function Zf(){return!1}function Un(n){function i(a,c,f,m,E){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var D in n)n.hasOwnProperty(D)&&(a=n[D],this[D]=a?a(m):m[D]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Ro:Zf,this.isPropagationStopped=Zf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Ro)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Ro)},persist:function(){},isPersistent:Ro}),i}var gs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xc=Un(gs),Ta=se({},gs,{view:0,detail:0}),Hv=Un(Ta),_c,yc,wa,Po=se({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==wa&&(wa&&n.type==="mousemove"?(_c=n.screenX-wa.screenX,yc=n.screenY-wa.screenY):yc=_c=0,wa=n),_c)},movementY:function(n){return"movementY"in n?n.movementY:yc}}),Qf=Un(Po),Vv=se({},Po,{dataTransfer:0}),Gv=Un(Vv),jv=se({},Ta,{relatedTarget:0}),Sc=Un(jv),Wv=se({},gs,{animationName:0,elapsedTime:0,pseudoElement:0}),Xv=Un(Wv),qv=se({},gs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),$v=Un(qv),Yv=se({},gs,{data:0}),Jf=Un(Yv),Kv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Zv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Qv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Qv[n])?!!i[n]:!1}function Mc(){return Jv}var e0=se({},Ta,{key:function(n){if(n.key){var i=Kv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Co(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Zv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mc,charCode:function(n){return n.type==="keypress"?Co(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Co(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),t0=Un(e0),n0=se({},Po,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=Un(n0),i0=se({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mc}),r0=Un(i0),s0=se({},gs,{propertyName:0,elapsedTime:0,pseudoElement:0}),a0=Un(s0),o0=se({},Po,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),l0=Un(o0),c0=[9,13,27,32],Ec=d&&"CompositionEvent"in window,Aa=null;d&&"documentMode"in document&&(Aa=document.documentMode);var u0=d&&"TextEvent"in window&&!Aa,th=d&&(!Ec||Aa&&8<Aa&&11>=Aa),nh=" ",ih=!1;function rh(n,i){switch(n){case"keyup":return c0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var vs=!1;function d0(n,i){switch(n){case"compositionend":return sh(i);case"keypress":return i.which!==32?null:(ih=!0,nh);case"textInput":return n=i.data,n===nh&&ih?null:n;default:return null}}function f0(n,i){if(vs)return n==="compositionend"||!Ec&&rh(n,i)?(n=Kf(),bo=vc=sr=null,vs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return th&&i.locale!=="ko"?null:i.data;default:return null}}var h0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!h0[n.type]:i==="textarea"}function oh(n,i,a,c){Ne(c),i=Uo(i,"onChange"),0<i.length&&(a=new xc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var ba=null,Ca=null;function p0(n){wh(n,0)}function No(n){var i=Ms(n);if(pt(i))return n}function m0(n,i){if(n==="change")return i}var lh=!1;if(d){var Tc;if(d){var wc="oninput"in document;if(!wc){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),wc=typeof ch.oninput=="function"}Tc=wc}else Tc=!1;lh=Tc&&(!document.documentMode||9<document.documentMode)}function uh(){ba&&(ba.detachEvent("onpropertychange",dh),Ca=ba=null)}function dh(n){if(n.propertyName==="value"&&No(Ca)){var i=[];oh(i,Ca,n,V(n)),Mn(p0,i)}}function g0(n,i,a){n==="focusin"?(uh(),ba=i,Ca=a,ba.attachEvent("onpropertychange",dh)):n==="focusout"&&uh()}function v0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return No(Ca)}function x0(n,i){if(n==="click")return No(i)}function _0(n,i){if(n==="input"||n==="change")return No(i)}function y0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:y0;function Ra(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!h.call(i,f)||!ni(n[f],i[f]))return!1}return!0}function fh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hh(n,i){var a=fh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fh(a)}}function ph(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ph(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function mh(){for(var n=window,i=Lt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Lt(n.document)}return i}function Ac(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function S0(n){var i=mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ph(a.ownerDocument.documentElement,a)){if(c!==null&&Ac(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=hh(a,m);var E=hh(a,c);f&&E&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==E.node||n.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var M0=d&&"documentMode"in document&&11>=document.documentMode,xs=null,bc=null,Pa=null,Cc=!1;function gh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Cc||xs==null||xs!==Lt(c)||(c=xs,"selectionStart"in c&&Ac(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Pa&&Ra(Pa,c)||(Pa=c,c=Uo(bc,"onSelect"),0<c.length&&(i=new xc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=xs)))}function Lo(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var _s={animationend:Lo("Animation","AnimationEnd"),animationiteration:Lo("Animation","AnimationIteration"),animationstart:Lo("Animation","AnimationStart"),transitionend:Lo("Transition","TransitionEnd")},Rc={},vh={};d&&(vh=document.createElement("div").style,"AnimationEvent"in window||(delete _s.animationend.animation,delete _s.animationiteration.animation,delete _s.animationstart.animation),"TransitionEvent"in window||delete _s.transitionend.transition);function Do(n){if(Rc[n])return Rc[n];if(!_s[n])return n;var i=_s[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in vh)return Rc[n]=i[a];return n}var xh=Do("animationend"),_h=Do("animationiteration"),yh=Do("animationstart"),Sh=Do("transitionend"),Mh=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(n,i){Mh.set(n,i),l(i,[n])}for(var Pc=0;Pc<Eh.length;Pc++){var Nc=Eh[Pc],E0=Nc.toLowerCase(),T0=Nc[0].toUpperCase()+Nc.slice(1);ar(E0,"on"+T0)}ar(xh,"onAnimationEnd"),ar(_h,"onAnimationIteration"),ar(yh,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(Sh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Na="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),w0=new Set("cancel close invalid load scroll toggle".split(" ").concat(Na));function Th(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,_o(c,i,void 0,n),n.currentTarget=null}function wh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var E=c.length-1;0<=E;E--){var D=c[E],F=D.instance,Q=D.currentTarget;if(D=D.listener,F!==m&&f.isPropagationStopped())break e;Th(f,D,Q),m=F}else for(E=0;E<c.length;E++){if(D=c[E],F=D.instance,Q=D.currentTarget,D=D.listener,F!==m&&f.isPropagationStopped())break e;Th(f,D,Q),m=F}}}if(kr)throw n=er,kr=!1,er=null,n}function Ut(n,i){var a=i[Bc];a===void 0&&(a=i[Bc]=new Set);var c=n+"__bubble";a.has(c)||(Ah(i,n,2,!1),a.add(c))}function Lc(n,i,a){var c=0;i&&(c|=4),Ah(a,n,c,i)}var Io="_reactListening"+Math.random().toString(36).slice(2);function La(n){if(!n[Io]){n[Io]=!0,s.forEach(function(a){a!=="selectionchange"&&(w0.has(a)||Lc(a,!1,n),Lc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Io]||(i[Io]=!0,Lc("selectionchange",!1,i))}}function Ah(n,i,a,c){switch(Yf(i)){case 1:var f=Bv;break;case 4:f=zv;break;default:f=mc}a=f.bind(null,i,a,n),f=void 0,!hs||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Dc(n,i,a,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var E=c.tag;if(E===3||E===4){var D=c.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(E===4)for(E=c.return;E!==null;){var F=E.tag;if((F===3||F===4)&&(F=E.stateNode.containerInfo,F===f||F.nodeType===8&&F.parentNode===f))return;E=E.return}for(;D!==null;){if(E=Br(D),E===null)return;if(F=E.tag,F===5||F===6){c=m=E;continue e}D=D.parentNode}}c=c.return}Mn(function(){var Q=m,xe=V(a),ye=[];e:{var ge=Mh.get(n);if(ge!==void 0){var De=xc,ze=n;switch(n){case"keypress":if(Co(a)===0)break e;case"keydown":case"keyup":De=t0;break;case"focusin":ze="focus",De=Sc;break;case"focusout":ze="blur",De=Sc;break;case"beforeblur":case"afterblur":De=Sc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=Gv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=r0;break;case xh:case _h:case yh:De=Xv;break;case Sh:De=a0;break;case"scroll":De=Hv;break;case"wheel":De=l0;break;case"copy":case"cut":case"paste":De=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=eh}var Ve=(i&4)!==0,Vt=!Ve&&n==="scroll",q=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var H=Q,$;H!==null;){$=H;var Te=$.stateNode;if($.tag===5&&Te!==null&&($=Te,q!==null&&(Te=gn(H,q),Te!=null&&Ve.push(Da(H,Te,$)))),Vt)break;H=H.return}0<Ve.length&&(ge=new De(ge,ze,null,a,xe),ye.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",De=n==="mouseout"||n==="pointerout",ge&&a!==Tt&&(ze=a.relatedTarget||a.fromElement)&&(Br(ze)||ze[Pi]))break e;if((De||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,De?(ze=a.relatedTarget||a.toElement,De=Q,ze=ze?Br(ze):null,ze!==null&&(Vt=gi(ze),ze!==Vt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(De=null,ze=Q),De!==ze)){if(Ve=Qf,Te="onMouseLeave",q="onMouseEnter",H="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=eh,Te="onPointerLeave",q="onPointerEnter",H="pointer"),Vt=De==null?ge:Ms(De),$=ze==null?ge:Ms(ze),ge=new Ve(Te,H+"leave",De,a,xe),ge.target=Vt,ge.relatedTarget=$,Te=null,Br(xe)===Q&&(Ve=new Ve(q,H+"enter",ze,a,xe),Ve.target=$,Ve.relatedTarget=Vt,Te=Ve),Vt=Te,De&&ze)t:{for(Ve=De,q=ze,H=0,$=Ve;$;$=ys($))H++;for($=0,Te=q;Te;Te=ys(Te))$++;for(;0<H-$;)Ve=ys(Ve),H--;for(;0<$-H;)q=ys(q),$--;for(;H--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=ys(Ve),q=ys(q)}Ve=null}else Ve=null;De!==null&&bh(ye,ge,De,Ve,!1),ze!==null&&Vt!==null&&bh(ye,Vt,ze,Ve,!0)}}e:{if(ge=Q?Ms(Q):window,De=ge.nodeName&&ge.nodeName.toLowerCase(),De==="select"||De==="input"&&ge.type==="file")var Xe=m0;else if(ah(ge))if(lh)Xe=_0;else{Xe=v0;var Ke=g0}else(De=ge.nodeName)&&De.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=x0);if(Xe&&(Xe=Xe(n,Q))){oh(ye,Xe,a,xe);break e}Ke&&Ke(n,ge,Q),n==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&wt(ge,"number",ge.value)}switch(Ke=Q?Ms(Q):window,n){case"focusin":(ah(Ke)||Ke.contentEditable==="true")&&(xs=Ke,bc=Q,Pa=null);break;case"focusout":Pa=bc=xs=null;break;case"mousedown":Cc=!0;break;case"contextmenu":case"mouseup":case"dragend":Cc=!1,gh(ye,a,xe);break;case"selectionchange":if(M0)break;case"keydown":case"keyup":gh(ye,a,xe)}var Ze;if(Ec)e:{switch(n){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else vs?rh(n,a)&&(nt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(th&&a.locale!=="ko"&&(vs||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&vs&&(Ze=Kf()):(sr=xe,vc="value"in sr?sr.value:sr.textContent,vs=!0)),Ke=Uo(Q,nt),0<Ke.length&&(nt=new Jf(nt,n,null,a,xe),ye.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=sh(a),Ze!==null&&(nt.data=Ze)))),(Ze=u0?d0(n,a):f0(n,a))&&(Q=Uo(Q,"onBeforeInput"),0<Q.length&&(xe=new Jf("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:Q}),xe.data=Ze))}wh(ye,i)})}function Da(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Uo(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=gn(n,a),m!=null&&c.unshift(Da(n,m,f)),m=gn(n,i),m!=null&&c.push(Da(n,m,f))),n=n.return}return c}function ys(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function bh(n,i,a,c,f){for(var m=i._reactName,E=[];a!==null&&a!==c;){var D=a,F=D.alternate,Q=D.stateNode;if(F!==null&&F===c)break;D.tag===5&&Q!==null&&(D=Q,f?(F=gn(a,m),F!=null&&E.unshift(Da(a,F,D))):f||(F=gn(a,m),F!=null&&E.push(Da(a,F,D)))),a=a.return}E.length!==0&&n.push({event:i,listeners:E})}var A0=/\r\n?/g,b0=/\u0000|\uFFFD/g;function Ch(n){return(typeof n=="string"?n:""+n).replace(A0,`
`).replace(b0,"")}function Fo(n,i,a){if(i=Ch(i),Ch(n)!==i&&a)throw Error(t(425))}function Oo(){}var Ic=null,Uc=null;function Fc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Oc=typeof setTimeout=="function"?setTimeout:void 0,C0=typeof clearTimeout=="function"?clearTimeout:void 0,Rh=typeof Promise=="function"?Promise:void 0,R0=typeof queueMicrotask=="function"?queueMicrotask:typeof Rh<"u"?function(n){return Rh.resolve(null).then(n).catch(P0)}:Oc;function P0(n){setTimeout(function(){throw n})}function kc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),Ea(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Ea(i)}function or(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ph(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ss=Math.random().toString(36).slice(2),xi="__reactFiber$"+Ss,Ia="__reactProps$"+Ss,Pi="__reactContainer$"+Ss,Bc="__reactEvents$"+Ss,N0="__reactListeners$"+Ss,L0="__reactHandles$"+Ss;function Br(n){var i=n[xi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Pi]||a[xi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ph(n);n!==null;){if(a=n[xi])return a;n=Ph(n)}return i}n=a,a=n.parentNode}return null}function Ua(n){return n=n[xi]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function ko(n){return n[Ia]||null}var zc=[],Es=-1;function lr(n){return{current:n}}function Ft(n){0>Es||(n.current=zc[Es],zc[Es]=null,Es--)}function Dt(n,i){Es++,zc[Es]=n.current,n.current=i}var cr={},cn=lr(cr),Tn=lr(!1),zr=cr;function Ts(n,i){var a=n.type.contextTypes;if(!a)return cr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function wn(n){return n=n.childContextTypes,n!=null}function Bo(){Ft(Tn),Ft(cn)}function Nh(n,i,a){if(cn.current!==cr)throw Error(t(168));Dt(cn,i),Dt(Tn,a)}function Lh(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,_e(n)||"Unknown",f));return se({},a,c)}function zo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||cr,zr=cn.current,Dt(cn,n),Dt(Tn,Tn.current),!0}function Dh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Lh(n,i,zr),c.__reactInternalMemoizedMergedChildContext=n,Ft(Tn),Ft(cn),Dt(cn,n)):Ft(Tn),Dt(Tn,a)}var Ni=null,Ho=!1,Hc=!1;function Ih(n){Ni===null?Ni=[n]:Ni.push(n)}function D0(n){Ho=!0,Ih(n)}function ur(){if(!Hc&&Ni!==null){Hc=!0;var n=0,i=At;try{var a=Ni;for(At=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Ni=null,Ho=!1}catch(f){throw Ni!==null&&(Ni=Ni.slice(n+1)),J(He,ur),f}finally{At=i,Hc=!1}}return null}var ws=[],As=0,Vo=null,Go=0,Wn=[],Xn=0,Hr=null,Li=1,Di="";function Vr(n,i){ws[As++]=Go,ws[As++]=Vo,Vo=n,Go=i}function Uh(n,i,a){Wn[Xn++]=Li,Wn[Xn++]=Di,Wn[Xn++]=Hr,Hr=n;var c=Li;n=Di;var f=32-at(c)-1;c&=~(1<<f),a+=1;var m=32-at(i)+f;if(30<m){var E=f-f%5;m=(c&(1<<E)-1).toString(32),c>>=E,f-=E,Li=1<<32-at(i)+f|a<<f|c,Di=m+n}else Li=1<<m|a<<f|c,Di=n}function Vc(n){n.return!==null&&(Vr(n,1),Uh(n,1,0))}function Gc(n){for(;n===Vo;)Vo=ws[--As],ws[As]=null,Go=ws[--As],ws[As]=null;for(;n===Hr;)Hr=Wn[--Xn],Wn[Xn]=null,Di=Wn[--Xn],Wn[Xn]=null,Li=Wn[--Xn],Wn[Xn]=null}var Fn=null,On=null,kt=!1,ii=null;function Fh(n,i){var a=Kn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Oh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Fn=n,On=or(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Fn=n,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Hr!==null?{id:Li,overflow:Di}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Kn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Fn=n,On=null,!0):!1;default:return!1}}function jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Wc(n){if(kt){var i=On;if(i){var a=i;if(!Oh(n,i)){if(jc(n))throw Error(t(418));i=or(a.nextSibling);var c=Fn;i&&Oh(n,i)?Fh(c,a):(n.flags=n.flags&-4097|2,kt=!1,Fn=n)}}else{if(jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,kt=!1,Fn=n}}}function kh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Fn=n}function jo(n){if(n!==Fn)return!1;if(!kt)return kh(n),kt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Fc(n.type,n.memoizedProps)),i&&(i=On)){if(jc(n))throw Bh(),Error(t(418));for(;i;)Fh(n,i),i=or(i.nextSibling)}if(kh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){On=or(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}On=null}}else On=Fn?or(n.stateNode.nextSibling):null;return!0}function Bh(){for(var n=On;n;)n=or(n.nextSibling)}function bs(){On=Fn=null,kt=!1}function Xc(n){ii===null?ii=[n]:ii.push(n)}var I0=R.ReactCurrentBatchConfig;function Fa(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(E){var D=f.refs;E===null?delete D[m]:D[m]=E},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Wo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function zh(n){var i=n._init;return i(n._payload)}function Hh(n){function i(q,H){if(n){var $=q.deletions;$===null?(q.deletions=[H],q.flags|=16):$.push(H)}}function a(q,H){if(!n)return null;for(;H!==null;)i(q,H),H=H.sibling;return null}function c(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function f(q,H){return q=xr(q,H),q.index=0,q.sibling=null,q}function m(q,H,$){return q.index=$,n?($=q.alternate,$!==null?($=$.index,$<H?(q.flags|=2,H):$):(q.flags|=2,H)):(q.flags|=1048576,H)}function E(q){return n&&q.alternate===null&&(q.flags|=2),q}function D(q,H,$,Te){return H===null||H.tag!==6?(H=Ou($,q.mode,Te),H.return=q,H):(H=f(H,$),H.return=q,H)}function F(q,H,$,Te){var Xe=$.type;return Xe===O?xe(q,H,$.props.children,Te,$.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&zh(Xe)===H.type)?(Te=f(H,$.props),Te.ref=Fa(q,H,$),Te.return=q,Te):(Te=ml($.type,$.key,$.props,null,q.mode,Te),Te.ref=Fa(q,H,$),Te.return=q,Te)}function Q(q,H,$,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==$.containerInfo||H.stateNode.implementation!==$.implementation?(H=ku($,q.mode,Te),H.return=q,H):(H=f(H,$.children||[]),H.return=q,H)}function xe(q,H,$,Te,Xe){return H===null||H.tag!==7?(H=Kr($,q.mode,Te,Xe),H.return=q,H):(H=f(H,$),H.return=q,H)}function ye(q,H,$){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Ou(""+H,q.mode,$),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case Y:return $=ml(H.type,H.key,H.props,null,q.mode,$),$.ref=Fa(q,null,H),$.return=q,$;case B:return H=ku(H,q.mode,$),H.return=q,H;case ae:var Te=H._init;return ye(q,Te(H._payload),$)}if($e(H)||le(H))return H=Kr(H,q.mode,$,null),H.return=q,H;Wo(q,H)}return null}function ge(q,H,$,Te){var Xe=H!==null?H.key:null;if(typeof $=="string"&&$!==""||typeof $=="number")return Xe!==null?null:D(q,H,""+$,Te);if(typeof $=="object"&&$!==null){switch($.$$typeof){case Y:return $.key===Xe?F(q,H,$,Te):null;case B:return $.key===Xe?Q(q,H,$,Te):null;case ae:return Xe=$._init,ge(q,H,Xe($._payload),Te)}if($e($)||le($))return Xe!==null?null:xe(q,H,$,Te,null);Wo(q,$)}return null}function De(q,H,$,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get($)||null,D(H,q,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case Y:return q=q.get(Te.key===null?$:Te.key)||null,F(H,q,Te,Xe);case B:return q=q.get(Te.key===null?$:Te.key)||null,Q(H,q,Te,Xe);case ae:var Ke=Te._init;return De(q,H,$,Ke(Te._payload),Xe)}if($e(Te)||le(Te))return q=q.get($)||null,xe(H,q,Te,Xe,null);Wo(H,Te)}return null}function ze(q,H,$,Te){for(var Xe=null,Ke=null,Ze=H,nt=H=0,nn=null;Ze!==null&&nt<$.length;nt++){Ze.index>nt?(nn=Ze,Ze=null):nn=Ze.sibling;var St=ge(q,Ze,$[nt],Te);if(St===null){Ze===null&&(Ze=nn);break}n&&Ze&&St.alternate===null&&i(q,Ze),H=m(St,H,nt),Ke===null?Xe=St:Ke.sibling=St,Ke=St,Ze=nn}if(nt===$.length)return a(q,Ze),kt&&Vr(q,nt),Xe;if(Ze===null){for(;nt<$.length;nt++)Ze=ye(q,$[nt],Te),Ze!==null&&(H=m(Ze,H,nt),Ke===null?Xe=Ze:Ke.sibling=Ze,Ke=Ze);return kt&&Vr(q,nt),Xe}for(Ze=c(q,Ze);nt<$.length;nt++)nn=De(Ze,q,nt,$[nt],Te),nn!==null&&(n&&nn.alternate!==null&&Ze.delete(nn.key===null?nt:nn.key),H=m(nn,H,nt),Ke===null?Xe=nn:Ke.sibling=nn,Ke=nn);return n&&Ze.forEach(function(_r){return i(q,_r)}),kt&&Vr(q,nt),Xe}function Ve(q,H,$,Te){var Xe=le($);if(typeof Xe!="function")throw Error(t(150));if($=Xe.call($),$==null)throw Error(t(151));for(var Ke=Xe=null,Ze=H,nt=H=0,nn=null,St=$.next();Ze!==null&&!St.done;nt++,St=$.next()){Ze.index>nt?(nn=Ze,Ze=null):nn=Ze.sibling;var _r=ge(q,Ze,St.value,Te);if(_r===null){Ze===null&&(Ze=nn);break}n&&Ze&&_r.alternate===null&&i(q,Ze),H=m(_r,H,nt),Ke===null?Xe=_r:Ke.sibling=_r,Ke=_r,Ze=nn}if(St.done)return a(q,Ze),kt&&Vr(q,nt),Xe;if(Ze===null){for(;!St.done;nt++,St=$.next())St=ye(q,St.value,Te),St!==null&&(H=m(St,H,nt),Ke===null?Xe=St:Ke.sibling=St,Ke=St);return kt&&Vr(q,nt),Xe}for(Ze=c(q,Ze);!St.done;nt++,St=$.next())St=De(Ze,q,nt,St.value,Te),St!==null&&(n&&St.alternate!==null&&Ze.delete(St.key===null?nt:St.key),H=m(St,H,nt),Ke===null?Xe=St:Ke.sibling=St,Ke=St);return n&&Ze.forEach(function(hx){return i(q,hx)}),kt&&Vr(q,nt),Xe}function Vt(q,H,$,Te){if(typeof $=="object"&&$!==null&&$.type===O&&$.key===null&&($=$.props.children),typeof $=="object"&&$!==null){switch($.$$typeof){case Y:e:{for(var Xe=$.key,Ke=H;Ke!==null;){if(Ke.key===Xe){if(Xe=$.type,Xe===O){if(Ke.tag===7){a(q,Ke.sibling),H=f(Ke,$.props.children),H.return=q,q=H;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&zh(Xe)===Ke.type){a(q,Ke.sibling),H=f(Ke,$.props),H.ref=Fa(q,Ke,$),H.return=q,q=H;break e}a(q,Ke);break}else i(q,Ke);Ke=Ke.sibling}$.type===O?(H=Kr($.props.children,q.mode,Te,$.key),H.return=q,q=H):(Te=ml($.type,$.key,$.props,null,q.mode,Te),Te.ref=Fa(q,H,$),Te.return=q,q=Te)}return E(q);case B:e:{for(Ke=$.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===$.containerInfo&&H.stateNode.implementation===$.implementation){a(q,H.sibling),H=f(H,$.children||[]),H.return=q,q=H;break e}else{a(q,H);break}else i(q,H);H=H.sibling}H=ku($,q.mode,Te),H.return=q,q=H}return E(q);case ae:return Ke=$._init,Vt(q,H,Ke($._payload),Te)}if($e($))return ze(q,H,$,Te);if(le($))return Ve(q,H,$,Te);Wo(q,$)}return typeof $=="string"&&$!==""||typeof $=="number"?($=""+$,H!==null&&H.tag===6?(a(q,H.sibling),H=f(H,$),H.return=q,q=H):(a(q,H),H=Ou($,q.mode,Te),H.return=q,q=H),E(q)):a(q,H)}return Vt}var Cs=Hh(!0),Vh=Hh(!1),Xo=lr(null),qo=null,Rs=null,qc=null;function $c(){qc=Rs=qo=null}function Yc(n){var i=Xo.current;Ft(Xo),n._currentValue=i}function Kc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Ps(n,i){qo=n,qc=Rs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(An=!0),n.firstContext=null)}function qn(n){var i=n._currentValue;if(qc!==n)if(n={context:n,memoizedValue:i,next:null},Rs===null){if(qo===null)throw Error(t(308));Rs=n,qo.dependencies={lanes:0,firstContext:n}}else Rs=Rs.next=n;return i}var Gr=null;function Zc(n){Gr===null?Gr=[n]:Gr.push(n)}function Gh(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Zc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ii(n,c)}function Ii(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var dr=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function fr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(xt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ii(n,a)}return f=c.interleaved,f===null?(i.next=i,Zc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ii(n,a)}function $o(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,fc(n,a)}}function Wh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=E:m=m.next=E,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Yo(n,i,a,c){var f=n.updateQueue;dr=!1;var m=f.firstBaseUpdate,E=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var F=D,Q=F.next;F.next=null,E===null?m=Q:E.next=Q,E=F;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,D=xe.lastBaseUpdate,D!==E&&(D===null?xe.firstBaseUpdate=Q:D.next=Q,xe.lastBaseUpdate=F))}if(m!==null){var ye=f.baseState;E=0,xe=Q=F=null,D=m;do{var ge=D.lane,De=D.eventTime;if((c&ge)===ge){xe!==null&&(xe=xe.next={eventTime:De,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=n,Ve=D;switch(ge=i,De=a,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){ye=ze.call(De,ye,ge);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,ge=typeof ze=="function"?ze.call(De,ye,ge):ze,ge==null)break e;ye=se({},ye,ge);break e;case 2:dr=!0}}D.callback!==null&&D.lane!==0&&(n.flags|=64,ge=f.effects,ge===null?f.effects=[D]:ge.push(D))}else De={eventTime:De,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xe===null?(Q=xe=De,F=ye):xe=xe.next=De,E|=ge;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(xe===null&&(F=ye),f.baseState=F,f.firstBaseUpdate=Q,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Xr|=E,n.lanes=E,n.memoizedState=ye}}function Xh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Oa={},_i=lr(Oa),ka=lr(Oa),Ba=lr(Oa);function jr(n){if(n===Oa)throw Error(t(174));return n}function Jc(n,i){switch(Dt(Ba,i),Dt(ka,n),Dt(_i,Oa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ge(i,n)}Ft(_i),Dt(_i,i)}function Ns(){Ft(_i),Ft(ka),Ft(Ba)}function qh(n){jr(Ba.current);var i=jr(_i.current),a=Ge(i,n.type);i!==a&&(Dt(ka,n),Dt(_i,a))}function eu(n){ka.current===n&&(Ft(_i),Ft(ka))}var Bt=lr(0);function Ko(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var tu=[];function nu(){for(var n=0;n<tu.length;n++)tu[n]._workInProgressVersionPrimary=null;tu.length=0}var Zo=R.ReactCurrentDispatcher,iu=R.ReactCurrentBatchConfig,Wr=0,zt=null,Kt=null,en=null,Qo=!1,za=!1,Ha=0,U0=0;function un(){throw Error(t(321))}function ru(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!ni(n[a],i[a]))return!1;return!0}function su(n,i,a,c,f,m){if(Wr=m,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Zo.current=n===null||n.memoizedState===null?B0:z0,n=a(c,f),za){m=0;do{if(za=!1,Ha=0,25<=m)throw Error(t(301));m+=1,en=Kt=null,i.updateQueue=null,Zo.current=H0,n=a(c,f)}while(za)}if(Zo.current=tl,i=Kt!==null&&Kt.next!==null,Wr=0,en=Kt=zt=null,Qo=!1,i)throw Error(t(300));return n}function au(){var n=Ha!==0;return Ha=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?zt.memoizedState=en=n:en=en.next=n,en}function $n(){if(Kt===null){var n=zt.alternate;n=n!==null?n.memoizedState:null}else n=Kt.next;var i=en===null?zt.memoizedState:en.next;if(i!==null)en=i,Kt=n;else{if(n===null)throw Error(t(310));Kt=n,n={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},en===null?zt.memoizedState=en=n:en=en.next=n}return en}function Va(n,i){return typeof i=="function"?i(n):i}function ou(n){var i=$n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Kt,f=c.baseQueue,m=a.pending;if(m!==null){if(f!==null){var E=f.next;f.next=m.next,m.next=E}c.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,c=c.baseState;var D=E=null,F=null,Q=m;do{var xe=Q.lane;if((Wr&xe)===xe)F!==null&&(F=F.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),c=Q.hasEagerState?Q.eagerState:n(c,Q.action);else{var ye={lane:xe,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};F===null?(D=F=ye,E=c):F=F.next=ye,zt.lanes|=xe,Xr|=xe}Q=Q.next}while(Q!==null&&Q!==m);F===null?E=c:F.next=D,ni(c,i.memoizedState)||(An=!0),i.memoizedState=c,i.baseState=E,i.baseQueue=F,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do m=f.lane,zt.lanes|=m,Xr|=m,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function lu(n){var i=$n(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do m=n(m,E.action),E=E.next;while(E!==f);ni(m,i.memoizedState)||(An=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function $h(){}function Yh(n,i){var a=zt,c=$n(),f=i(),m=!ni(c.memoizedState,f);if(m&&(c.memoizedState=f,An=!0),c=c.queue,cu(Qh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||en!==null&&en.memoizedState.tag&1){if(a.flags|=2048,Ga(9,Zh.bind(null,a,c,f,i),void 0,null),tn===null)throw Error(t(349));(Wr&30)!==0||Kh(a,i,f)}return f}function Kh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Zh(n,i,a,c){i.value=a,i.getSnapshot=c,Jh(i)&&ep(n)}function Qh(n,i,a){return a(function(){Jh(i)&&ep(n)})}function Jh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!ni(n,a)}catch{return!0}}function ep(n){var i=Ii(n,1);i!==null&&oi(i,n,1,-1)}function tp(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Va,lastRenderedState:n},i.queue=n,n=n.dispatch=k0.bind(null,zt,n),[i.memoizedState,n]}function Ga(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function np(){return $n().memoizedState}function Jo(n,i,a,c){var f=yi();zt.flags|=n,f.memoizedState=Ga(1|i,a,void 0,c===void 0?null:c)}function el(n,i,a,c){var f=$n();c=c===void 0?null:c;var m=void 0;if(Kt!==null){var E=Kt.memoizedState;if(m=E.destroy,c!==null&&ru(c,E.deps)){f.memoizedState=Ga(i,a,m,c);return}}zt.flags|=n,f.memoizedState=Ga(1|i,a,m,c)}function ip(n,i){return Jo(8390656,8,n,i)}function cu(n,i){return el(2048,8,n,i)}function rp(n,i){return el(4,2,n,i)}function sp(n,i){return el(4,4,n,i)}function ap(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function op(n,i,a){return a=a!=null?a.concat([n]):null,el(4,4,ap.bind(null,i,n),a)}function uu(){}function lp(n,i){var a=$n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function cp(n,i){var a=$n();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&ru(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function up(n,i,a){return(Wr&21)===0?(n.baseState&&(n.baseState=!1,An=!0),n.memoizedState=a):(ni(a,i)||(a=vn(),zt.lanes|=a,Xr|=a,n.baseState=!0),i)}function F0(n,i){var a=At;At=a!==0&&4>a?a:4,n(!0);var c=iu.transition;iu.transition={};try{n(!1),i()}finally{At=a,iu.transition=c}}function dp(){return $n().memoizedState}function O0(n,i,a){var c=gr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},fp(n))hp(i,a);else if(a=Gh(n,i,a,c),a!==null){var f=_n();oi(a,n,c,f),pp(a,i,c)}}function k0(n,i,a){var c=gr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(fp(n))hp(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,D=m(E,a);if(f.hasEagerState=!0,f.eagerState=D,ni(D,E)){var F=i.interleaved;F===null?(f.next=f,Zc(i)):(f.next=F.next,F.next=f),i.interleaved=f;return}}catch{}finally{}a=Gh(n,i,f,c),a!==null&&(f=_n(),oi(a,n,c,f),pp(a,i,c))}}function fp(n){var i=n.alternate;return n===zt||i!==null&&i===zt}function hp(n,i){za=Qo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function pp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,fc(n,a)}}var tl={readContext:qn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},B0={readContext:qn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:qn,useEffect:ip,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,Jo(4194308,4,ap.bind(null,i,n),a)},useLayoutEffect:function(n,i){return Jo(4194308,4,n,i)},useInsertionEffect:function(n,i){return Jo(4,2,n,i)},useMemo:function(n,i){var a=yi();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=yi();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=O0.bind(null,zt,n),[c.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:tp,useDebugValue:uu,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=tp(!1),i=n[0];return n=F0.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=zt,f=yi();if(kt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),tn===null)throw Error(t(349));(Wr&30)!==0||Kh(c,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,ip(Qh.bind(null,c,m,n),[n]),c.flags|=2048,Ga(9,Zh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=yi(),i=tn.identifierPrefix;if(kt){var a=Di,c=Li;a=(c&~(1<<32-at(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ha++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=U0++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},z0={readContext:qn,useCallback:lp,useContext:qn,useEffect:cu,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:ou,useRef:np,useState:function(){return ou(Va)},useDebugValue:uu,useDeferredValue:function(n){var i=$n();return up(i,Kt.memoizedState,n)},useTransition:function(){var n=ou(Va)[0],i=$n().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:Yh,useId:dp,unstable_isNewReconciler:!1},H0={readContext:qn,useCallback:lp,useContext:qn,useEffect:cu,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:lu,useRef:np,useState:function(){return lu(Va)},useDebugValue:uu,useDeferredValue:function(n){var i=$n();return Kt===null?i.memoizedState=n:up(i,Kt.memoizedState,n)},useTransition:function(){var n=lu(Va)[0],i=$n().memoizedState;return[n,i]},useMutableSource:$h,useSyncExternalStore:Yh,useId:dp,unstable_isNewReconciler:!1};function ri(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function du(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var nl={isMounted:function(n){return(n=n._reactInternals)?gi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=_n(),f=gr(n),m=Ui(c,f);m.payload=i,a!=null&&(m.callback=a),i=fr(n,m,f),i!==null&&(oi(i,n,f,c),$o(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=_n(),f=gr(n),m=Ui(c,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=fr(n,m,f),i!==null&&(oi(i,n,f,c),$o(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=_n(),c=gr(n),f=Ui(a,c);f.tag=2,i!=null&&(f.callback=i),i=fr(n,f,c),i!==null&&(oi(i,n,c,a),$o(i,n,c))}};function mp(n,i,a,c,f,m,E){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,E):i.prototype&&i.prototype.isPureReactComponent?!Ra(a,c)||!Ra(f,m):!0}function gp(n,i,a){var c=!1,f=cr,m=i.contextType;return typeof m=="object"&&m!==null?m=qn(m):(f=wn(i)?zr:cn.current,c=i.contextTypes,m=(c=c!=null)?Ts(n,f):cr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=nl,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function vp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&nl.enqueueReplaceState(i,i.state,null)}function fu(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Qc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=qn(m):(m=wn(i)?zr:cn.current,f.context=Ts(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(du(n,i,m,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&nl.enqueueReplaceState(f,f.state,null),Yo(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ls(n,i){try{var a="",c=i;do a+=ue(c),c=c.return;while(c);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function hu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function pu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var V0=typeof WeakMap=="function"?WeakMap:Map;function xp(n,i,a){a=Ui(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){cl||(cl=!0,Ru=c),pu(n,i)},a}function _p(n,i,a){a=Ui(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){pu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){pu(n,i),typeof c!="function"&&(pr===null?pr=new Set([this]):pr.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function yp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new V0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=nx.bind(null,n,i,a),i.then(n,n))}function Sp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Mp(n,i,a,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ui(-1,1),i.tag=2,fr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var G0=R.ReactCurrentOwner,An=!1;function xn(n,i,a,c){i.child=n===null?Vh(i,null,a,c):Cs(i,n.child,a,c)}function Ep(n,i,a,c,f){a=a.render;var m=i.ref;return Ps(i,f),c=su(n,i,a,c,m,f),a=au(),n!==null&&!An?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Fi(n,i,f)):(kt&&a&&Vc(i),i.flags|=1,xn(n,i,c,f),i.child)}function Tp(n,i,a,c,f){if(n===null){var m=a.type;return typeof m=="function"&&!Fu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,wp(n,i,m,c,f)):(n=ml(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var E=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ra,a(E,c)&&n.ref===i.ref)return Fi(n,i,f)}return i.flags|=1,n=xr(m,c),n.ref=i.ref,n.return=i,i.child=n}function wp(n,i,a,c,f){if(n!==null){var m=n.memoizedProps;if(Ra(m,c)&&n.ref===i.ref)if(An=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(An=!0);else return i.lanes=n.lanes,Fi(n,i,f)}return mu(n,i,a,c,f)}function Ap(n,i,a){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Is,kn),kn|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Dt(Is,kn),kn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Dt(Is,kn),kn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Dt(Is,kn),kn|=c;return xn(n,i,f,a),i.child}function bp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function mu(n,i,a,c,f){var m=wn(a)?zr:cn.current;return m=Ts(i,m),Ps(i,f),a=su(n,i,a,c,m,f),c=au(),n!==null&&!An?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Fi(n,i,f)):(kt&&c&&Vc(i),i.flags|=1,xn(n,i,a,f),i.child)}function Cp(n,i,a,c,f){if(wn(a)){var m=!0;zo(i)}else m=!1;if(Ps(i,f),i.stateNode===null)rl(n,i),gp(i,a,c),fu(i,a,c,f),c=!0;else if(n===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var F=E.context,Q=a.contextType;typeof Q=="object"&&Q!==null?Q=qn(Q):(Q=wn(a)?zr:cn.current,Q=Ts(i,Q));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==c||F!==Q)&&vp(i,E,c,Q),dr=!1;var ge=i.memoizedState;E.state=ge,Yo(i,c,E,f),F=i.memoizedState,D!==c||ge!==F||Tn.current||dr?(typeof xe=="function"&&(du(i,a,xe,c),F=i.memoizedState),(D=dr||mp(i,a,D,c,ge,F,Q))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=F),E.props=c,E.state=F,E.context=Q,c=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{E=i.stateNode,jh(n,i),D=i.memoizedProps,Q=i.type===i.elementType?D:ri(i.type,D),E.props=Q,ye=i.pendingProps,ge=E.context,F=a.contextType,typeof F=="object"&&F!==null?F=qn(F):(F=wn(a)?zr:cn.current,F=Ts(i,F));var De=a.getDerivedStateFromProps;(xe=typeof De=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==ye||ge!==F)&&vp(i,E,c,F),dr=!1,ge=i.memoizedState,E.state=ge,Yo(i,c,E,f);var ze=i.memoizedState;D!==ye||ge!==ze||Tn.current||dr?(typeof De=="function"&&(du(i,a,De,c),ze=i.memoizedState),(Q=dr||mp(i,a,Q,c,ge,ze,F)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(c,ze,F),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(c,ze,F)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=ze),E.props=c,E.state=ze,E.context=F,c=Q):(typeof E.componentDidUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return gu(n,i,a,c,m,f)}function gu(n,i,a,c,f,m){bp(n,i);var E=(i.flags&128)!==0;if(!c&&!E)return f&&Dh(i,a,!1),Fi(n,i,m);c=i.stateNode,G0.current=i;var D=E&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&E?(i.child=Cs(i,n.child,null,m),i.child=Cs(i,null,D,m)):xn(n,i,D,m),i.memoizedState=c.state,f&&Dh(i,a,!0),i.child}function Rp(n){var i=n.stateNode;i.pendingContext?Nh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Nh(n,i.context,!1),Jc(n,i.containerInfo)}function Pp(n,i,a,c,f){return bs(),Xc(f),i.flags|=256,xn(n,i,a,c),i.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function xu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Np(n,i,a){var c=i.pendingProps,f=Bt.current,m=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=n!==null&&n.memoizedState===null?!1:(f&2)!==0),D?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Dt(Bt,f&1),n===null)return Wc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=c.children,n=c.fallback,m?(c=i.mode,m=i.child,E={mode:"hidden",children:E},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=E):m=gl(E,c,0,null),n=Kr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=xu(a),i.memoizedState=vu,n):_u(i,E));if(f=n.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return j0(n,i,E,c,D,f,a);if(m){m=c.fallback,E=i.mode,f=n.child,D=f.sibling;var F={mode:"hidden",children:c.children};return(E&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=F,i.deletions=null):(c=xr(f,F),c.subtreeFlags=f.subtreeFlags&14680064),D!==null?m=xr(D,m):(m=Kr(m,E,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,E=n.child.memoizedState,E=E===null?xu(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},m.memoizedState=E,m.childLanes=n.childLanes&~a,i.memoizedState=vu,c}return m=n.child,n=m.sibling,c=xr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function _u(n,i){return i=gl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function il(n,i,a,c){return c!==null&&Xc(c),Cs(i,n.child,null,a),n=_u(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function j0(n,i,a,c,f,m,E){if(a)return i.flags&256?(i.flags&=-257,c=hu(Error(t(422))),il(n,i,E,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=gl({mode:"visible",children:c.children},f,0,null),m=Kr(m,f,E,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Cs(i,n.child,null,E),i.child.memoizedState=xu(E),i.memoizedState=vu,m);if((i.mode&1)===0)return il(n,i,E,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var D=c.dgst;return c=D,m=Error(t(419)),c=hu(m,c,void 0),il(n,i,E,c)}if(D=(E&n.childLanes)!==0,An||D){if(c=tn,c!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|E))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Ii(n,f),oi(c,n,f,-1))}return Uu(),c=hu(Error(t(421))),il(n,i,E,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=ix.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,On=or(f.nextSibling),Fn=i,kt=!0,ii=null,n!==null&&(Wn[Xn++]=Li,Wn[Xn++]=Di,Wn[Xn++]=Hr,Li=n.id,Di=n.overflow,Hr=i),i=_u(i,c.children),i.flags|=4096,i)}function Lp(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Kc(n.return,i,a)}function yu(n,i,a,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=f)}function Dp(n,i,a){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(xn(n,i,c.children,a),c=Bt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Lp(n,a,i);else if(n.tag===19)Lp(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Dt(Bt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Ko(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),yu(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Ko(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}yu(i,!0,a,null,m);break;case"together":yu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function rl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Fi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Xr|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=xr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=xr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function W0(n,i,a){switch(i.tag){case 3:Rp(i),bs();break;case 5:qh(i);break;case 1:wn(i.type)&&zo(i);break;case 4:Jc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Dt(Xo,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Dt(Bt,Bt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Np(n,i,a):(Dt(Bt,Bt.current&1),n=Fi(n,i,a),n!==null?n.sibling:null);Dt(Bt,Bt.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Dp(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Dt(Bt,Bt.current),c)break;return null;case 22:case 23:return i.lanes=0,Ap(n,i,a)}return Fi(n,i,a)}var Ip,Su,Up,Fp;Ip=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Su=function(){},Up=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,jr(_i.current);var m=null;switch(a){case"input":f=W(n,f),c=W(n,c),m=[];break;case"select":f=se({},f,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":f=w(n,f),c=w(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Oo)}dt(a,c);var E;a=null;for(Q in f)if(!c.hasOwnProperty(Q)&&f.hasOwnProperty(Q)&&f[Q]!=null)if(Q==="style"){var D=f[Q];for(E in D)D.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?m||(m=[]):(m=m||[]).push(Q,null));for(Q in c){var F=c[Q];if(D=f!=null?f[Q]:void 0,c.hasOwnProperty(Q)&&F!==D&&(F!=null||D!=null))if(Q==="style")if(D){for(E in D)!D.hasOwnProperty(E)||F&&F.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in F)F.hasOwnProperty(E)&&D[E]!==F[E]&&(a||(a={}),a[E]=F[E])}else a||(m||(m=[]),m.push(Q,a)),a=F;else Q==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,D=D?D.__html:void 0,F!=null&&D!==F&&(m=m||[]).push(Q,F)):Q==="children"?typeof F!="string"&&typeof F!="number"||(m=m||[]).push(Q,""+F):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(F!=null&&Q==="onScroll"&&Ut("scroll",n),m||D===F||(m=[])):(m=m||[]).push(Q,F))}a&&(m=m||[]).push("style",a);var Q=m;(i.updateQueue=Q)&&(i.flags|=4)}},Fp=function(n,i,a,c){a!==c&&(i.flags|=4)};function ja(n,i){if(!kt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function X0(n,i,a){var c=i.pendingProps;switch(Gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return wn(i.type)&&Bo(),dn(i),null;case 3:return c=i.stateNode,Ns(),Ft(Tn),Ft(cn),nu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(jo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(Lu(ii),ii=null))),Su(n,i),dn(i),null;case 5:eu(i);var f=jr(Ba.current);if(a=i.type,n!==null&&i.stateNode!=null)Up(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return dn(i),null}if(n=jr(_i.current),jo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[xi]=i,c[Ia]=m,n=(i.mode&1)!==0,a){case"dialog":Ut("cancel",c),Ut("close",c);break;case"iframe":case"object":case"embed":Ut("load",c);break;case"video":case"audio":for(f=0;f<Na.length;f++)Ut(Na[f],c);break;case"source":Ut("error",c);break;case"img":case"image":case"link":Ut("error",c),Ut("load",c);break;case"details":Ut("toggle",c);break;case"input":mn(c,m),Ut("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ut("invalid",c);break;case"textarea":K(c,m),Ut("invalid",c)}dt(a,m),f=null;for(var E in m)if(m.hasOwnProperty(E)){var D=m[E];E==="children"?typeof D=="string"?c.textContent!==D&&(m.suppressHydrationWarning!==!0&&Fo(c.textContent,D,n),f=["children",D]):typeof D=="number"&&c.textContent!==""+D&&(m.suppressHydrationWarning!==!0&&Fo(c.textContent,D,n),f=["children",""+D]):o.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&Ut("scroll",c)}switch(a){case"input":bt(c),Ye(c,m,!0);break;case"textarea":bt(c),ve(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Oo)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=de(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=E.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=E.createElement(a,{is:c.is}):(n=E.createElement(a),a==="select"&&(E=n,c.multiple?E.multiple=!0:c.size&&(E.size=c.size))):n=E.createElementNS(n,a),n[xi]=i,n[Ia]=c,Ip(n,i,!1,!1),i.stateNode=n;e:{switch(E=rt(a,c),a){case"dialog":Ut("cancel",n),Ut("close",n),f=c;break;case"iframe":case"object":case"embed":Ut("load",n),f=c;break;case"video":case"audio":for(f=0;f<Na.length;f++)Ut(Na[f],n);f=c;break;case"source":Ut("error",n),f=c;break;case"img":case"image":case"link":Ut("error",n),Ut("load",n),f=c;break;case"details":Ut("toggle",n),f=c;break;case"input":mn(n,c),f=W(n,c),Ut("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=se({},c,{value:void 0}),Ut("invalid",n);break;case"textarea":K(n,c),f=w(n,c),Ut("invalid",n);break;default:f=c}dt(a,f),D=f;for(m in D)if(D.hasOwnProperty(m)){var F=D[m];m==="style"?et(n,F):m==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Fe(n,F)):m==="children"?typeof F=="string"?(a!=="textarea"||F!=="")&&ct(n,F):typeof F=="number"&&ct(n,""+F):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?F!=null&&m==="onScroll"&&Ut("scroll",n):F!=null&&L(n,m,F,E))}switch(a){case"input":bt(n),Ye(n,c,!1);break;case"textarea":bt(n),ve(n);break;case"option":c.value!=null&&n.setAttribute("value",""+be(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?N(n,!!c.multiple,m,!1):c.defaultValue!=null&&N(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Oo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(n&&i.stateNode!=null)Fp(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=jr(Ba.current),jr(_i.current),jo(i)){if(c=i.stateNode,a=i.memoizedProps,c[xi]=i,(m=c.nodeValue!==a)&&(n=Fn,n!==null))switch(n.tag){case 3:Fo(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Fo(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[xi]=i,i.stateNode=c}return dn(i),null;case 13:if(Ft(Bt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(kt&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bh(),bs(),i.flags|=98560,m=!1;else if(m=jo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[xi]=i}else bs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),m=!1}else ii!==null&&(Lu(ii),ii=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Bt.current&1)!==0?Zt===0&&(Zt=3):Uu())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return Ns(),Su(n,i),n===null&&La(i.stateNode.containerInfo),dn(i),null;case 10:return Yc(i.type._context),dn(i),null;case 17:return wn(i.type)&&Bo(),dn(i),null;case 19:if(Ft(Bt),m=i.memoizedState,m===null)return dn(i),null;if(c=(i.flags&128)!==0,E=m.rendering,E===null)if(c)ja(m,!1);else{if(Zt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(E=Ko(n),E!==null){for(i.flags|=128,ja(m,!1),c=E.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,E=m.alternate,E===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=E.childLanes,m.lanes=E.lanes,m.child=E.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=E.memoizedProps,m.memoizedState=E.memoizedState,m.updateQueue=E.updateQueue,m.type=E.type,n=E.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Dt(Bt,Bt.current&1|2),i.child}n=n.sibling}m.tail!==null&&Me()>Us&&(i.flags|=128,c=!0,ja(m,!1),i.lanes=4194304)}else{if(!c)if(n=Ko(E),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ja(m,!0),m.tail===null&&m.tailMode==="hidden"&&!E.alternate&&!kt)return dn(i),null}else 2*Me()-m.renderingStartTime>Us&&a!==1073741824&&(i.flags|=128,c=!0,ja(m,!1),i.lanes=4194304);m.isBackwards?(E.sibling=i.child,i.child=E):(a=m.last,a!==null?a.sibling=E:i.child=E,m.last=E)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Me(),i.sibling=null,a=Bt.current,Dt(Bt,c?a&1|2:a&1),i):(dn(i),null);case 22:case 23:return Iu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(kn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function q0(n,i){switch(Gc(i),i.tag){case 1:return wn(i.type)&&Bo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ns(),Ft(Tn),Ft(cn),nu(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return eu(i),null;case 13:if(Ft(Bt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));bs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ft(Bt),null;case 4:return Ns(),null;case 10:return Yc(i.type._context),null;case 22:case 23:return Iu(),null;case 24:return null;default:return null}}var sl=!1,fn=!1,$0=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ds(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Ht(n,i,c)}else a.current=null}function Mu(n,i,a){try{a()}catch(c){Ht(n,i,c)}}var Op=!1;function Y0(n,i){if(Ic=wo,n=mh(),Ac(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var E=0,D=-1,F=-1,Q=0,xe=0,ye=n,ge=null;t:for(;;){for(var De;ye!==a||f!==0&&ye.nodeType!==3||(D=E+f),ye!==m||c!==0&&ye.nodeType!==3||(F=E+c),ye.nodeType===3&&(E+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ge=ye,ye=De;for(;;){if(ye===n)break t;if(ge===a&&++Q===f&&(D=E),ge===m&&++xe===c&&(F=E),(De=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=De}a=D===-1||F===-1?null:{start:D,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Uc={focusedElem:n,selectionRange:a},wo=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Vt=ze.memoizedState,q=i.stateNode,H=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ri(i.type,Ve),Vt);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var $=i.stateNode.containerInfo;$.nodeType===1?$.textContent="":$.nodeType===9&&$.documentElement&&$.removeChild($.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Ht(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return ze=Op,Op=!1,ze}function Wa(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&Mu(i,a,m)}f=f.next}while(f!==c)}}function al(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Eu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function kp(n){var i=n.alternate;i!==null&&(n.alternate=null,kp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[xi],delete i[Ia],delete i[Bc],delete i[N0],delete i[L0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bp(n){return n.tag===5||n.tag===3||n.tag===4}function zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Tu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Oo));else if(c!==4&&(n=n.child,n!==null))for(Tu(n,i,a),n=n.sibling;n!==null;)Tu(n,i,a),n=n.sibling}function wu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(wu(n,i,a),n=n.sibling;n!==null;)wu(n,i,a),n=n.sibling}var sn=null,si=!1;function hr(n,i,a){for(a=a.child;a!==null;)Hp(n,i,a),a=a.sibling}function Hp(n,i,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 5:fn||Ds(a,i);case 6:var c=sn,f=si;sn=null,hr(n,i,a),sn=c,si=f,sn!==null&&(si?(n=sn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(si?(n=sn,a=a.stateNode,n.nodeType===8?kc(n.parentNode,a):n.nodeType===1&&kc(n,a),Ea(n)):kc(sn,a.stateNode));break;case 4:c=sn,f=si,sn=a.stateNode.containerInfo,si=!0,hr(n,i,a),sn=c,si=f;break;case 0:case 11:case 14:case 15:if(!fn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,E=m.destroy;m=m.tag,E!==void 0&&((m&2)!==0||(m&4)!==0)&&Mu(a,i,E),f=f.next}while(f!==c)}hr(n,i,a);break;case 1:if(!fn&&(Ds(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(D){Ht(a,i,D)}hr(n,i,a);break;case 21:hr(n,i,a);break;case 22:a.mode&1?(fn=(c=fn)||a.memoizedState!==null,hr(n,i,a),fn=c):hr(n,i,a);break;default:hr(n,i,a)}}function Vp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new $0),i.forEach(function(c){var f=rx.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function ai(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var m=n,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:sn=D.stateNode,si=!1;break e;case 3:sn=D.stateNode.containerInfo,si=!0;break e;case 4:sn=D.stateNode.containerInfo,si=!0;break e}D=D.return}if(sn===null)throw Error(t(160));Hp(m,E,f),sn=null,si=!1;var F=f.alternate;F!==null&&(F.return=null),f.return=null}catch(Q){Ht(f,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gp(i,n),i=i.sibling}function Gp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ai(i,n),Si(n),c&4){try{Wa(3,n,n.return),al(3,n)}catch(Ve){Ht(n,n.return,Ve)}try{Wa(5,n,n.return)}catch(Ve){Ht(n,n.return,Ve)}}break;case 1:ai(i,n),Si(n),c&512&&a!==null&&Ds(a,a.return);break;case 5:if(ai(i,n),Si(n),c&512&&a!==null&&Ds(a,a.return),n.flags&32){var f=n.stateNode;try{ct(f,"")}catch(Ve){Ht(n,n.return,Ve)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,E=a!==null?a.memoizedProps:m,D=n.type,F=n.updateQueue;if(n.updateQueue=null,F!==null)try{D==="input"&&m.type==="radio"&&m.name!=null&&ht(f,m),rt(D,E);var Q=rt(D,m);for(E=0;E<F.length;E+=2){var xe=F[E],ye=F[E+1];xe==="style"?et(f,ye):xe==="dangerouslySetInnerHTML"?Fe(f,ye):xe==="children"?ct(f,ye):L(f,xe,ye,Q)}switch(D){case"input":ut(f,m);break;case"textarea":me(f,m);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var De=m.value;De!=null?N(f,!!m.multiple,De,!1):ge!==!!m.multiple&&(m.defaultValue!=null?N(f,!!m.multiple,m.defaultValue,!0):N(f,!!m.multiple,m.multiple?[]:"",!1))}f[Ia]=m}catch(Ve){Ht(n,n.return,Ve)}}break;case 6:if(ai(i,n),Si(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(Ve){Ht(n,n.return,Ve)}}break;case 3:if(ai(i,n),Si(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Ea(i.containerInfo)}catch(Ve){Ht(n,n.return,Ve)}break;case 4:ai(i,n),Si(n);break;case 13:ai(i,n),Si(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(Cu=Me())),c&4&&Vp(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(fn=(Q=fn)||xe,ai(i,n),fn=Q):ai(i,n),Si(n),c&8192){if(Q=n.memoizedState!==null,(n.stateNode.isHidden=Q)&&!xe&&(n.mode&1)!==0)for(Oe=n,xe=n.child;xe!==null;){for(ye=Oe=xe;Oe!==null;){switch(ge=Oe,De=ge.child,ge.tag){case 0:case 11:case 14:case 15:Wa(4,ge,ge.return);break;case 1:Ds(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){c=ge,a=ge.return;try{i=c,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Ht(c,a,Ve)}}break;case 5:Ds(ge,ge.return);break;case 22:if(ge.memoizedState!==null){Xp(ye);continue}}De!==null?(De.return=ge,Oe=De):Xp(ye)}xe=xe.sibling}e:for(xe=null,ye=n;;){if(ye.tag===5){if(xe===null){xe=ye;try{f=ye.stateNode,Q?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(D=ye.stateNode,F=ye.memoizedProps.style,E=F!=null&&F.hasOwnProperty("display")?F.display:null,D.style.display=Je("display",E))}catch(Ve){Ht(n,n.return,Ve)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=Q?"":ye.memoizedProps}catch(Ve){Ht(n,n.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===n)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===n)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===n)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:ai(i,n),Si(n),c&4&&Vp(n);break;case 21:break;default:ai(i,n),Si(n)}}function Si(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ct(f,""),c.flags&=-33);var m=zp(n);wu(n,m,f);break;case 3:case 4:var E=c.stateNode.containerInfo,D=zp(n);Tu(n,D,E);break;default:throw Error(t(161))}}catch(F){Ht(n,n.return,F)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function K0(n,i,a){Oe=n,jp(n)}function jp(n,i,a){for(var c=(n.mode&1)!==0;Oe!==null;){var f=Oe,m=f.child;if(f.tag===22&&c){var E=f.memoizedState!==null||sl;if(!E){var D=f.alternate,F=D!==null&&D.memoizedState!==null||fn;D=sl;var Q=fn;if(sl=E,(fn=F)&&!Q)for(Oe=f;Oe!==null;)E=Oe,F=E.child,E.tag===22&&E.memoizedState!==null?qp(f):F!==null?(F.return=E,Oe=F):qp(f);for(;m!==null;)Oe=m,jp(m),m=m.sibling;Oe=f,sl=D,fn=Q}Wp(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Oe=m):Wp(n)}}function Wp(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||al(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!fn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ri(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Xh(i,m,c);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Xh(i,E,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&a.focus();break;case"img":F.src&&(a.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var xe=Q.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&Ea(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}fn||i.flags&512&&Eu(i)}catch(ge){Ht(i,i.return,ge)}}if(i===n){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function Xp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function qp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{al(4,i)}catch(F){Ht(i,a,F)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(F){Ht(i,f,F)}}var m=i.return;try{Eu(i)}catch(F){Ht(i,m,F)}break;case 5:var E=i.return;try{Eu(i)}catch(F){Ht(i,E,F)}}}catch(F){Ht(i,i.return,F)}if(i===n){Oe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Oe=D;break}Oe=i.return}}var Z0=Math.ceil,ol=R.ReactCurrentDispatcher,Au=R.ReactCurrentOwner,Yn=R.ReactCurrentBatchConfig,xt=0,tn=null,jt=null,an=0,kn=0,Is=lr(0),Zt=0,Xa=null,Xr=0,ll=0,bu=0,qa=null,bn=null,Cu=0,Us=1/0,Oi=null,cl=!1,Ru=null,pr=null,ul=!1,mr=null,dl=0,$a=0,Pu=null,fl=-1,hl=0;function _n(){return(xt&6)!==0?Me():fl!==-1?fl:fl=Me()}function gr(n){return(n.mode&1)===0?1:(xt&2)!==0&&an!==0?an&-an:I0.transition!==null?(hl===0&&(hl=vn()),hl):(n=At,n!==0||(n=window.event,n=n===void 0?16:Yf(n.type)),n)}function oi(n,i,a,c){if(50<$a)throw $a=0,Pu=null,Error(t(185));En(n,a,c),((xt&2)===0||n!==tn)&&(n===tn&&((xt&2)===0&&(ll|=a),Zt===4&&vr(n,an)),Cn(n,c),a===1&&xt===0&&(i.mode&1)===0&&(Us=Me()+500,Ho&&ur()))}function Cn(n,i){var a=n.callbackNode;Gn(n,i);var c=vi(n,n===tn?an:0);if(c===0)a!==null&&ee(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&ee(a),i===1)n.tag===0?D0(Yp.bind(null,n)):Ih(Yp.bind(null,n)),R0(function(){(xt&6)===0&&ur()}),a=null;else{switch(Hf(c)){case 1:a=He;break;case 4:a=tt;break;case 16:a=it;break;case 536870912:a=gt;break;default:a=it}a=im(a,$p.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function $p(n,i){if(fl=-1,hl=0,(xt&6)!==0)throw Error(t(327));var a=n.callbackNode;if(Fs()&&n.callbackNode!==a)return null;var c=vi(n,n===tn?an:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=pl(n,c);else{i=c;var f=xt;xt|=2;var m=Zp();(tn!==n||an!==i)&&(Oi=null,Us=Me()+500,$r(n,i));do try{ex();break}catch(D){Kp(n,D)}while(!0);$c(),ol.current=m,xt=f,jt!==null?i=0:(tn=null,an=0,i=Zt)}if(i!==0){if(i===2&&(f=Ri(n),f!==0&&(c=f,i=Nu(n,f))),i===1)throw a=Xa,$r(n,0),vr(n,c),Cn(n,Me()),a;if(i===6)vr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!Q0(f)&&(i=pl(n,c),i===2&&(m=Ri(n),m!==0&&(c=m,i=Nu(n,m))),i===1))throw a=Xa,$r(n,0),vr(n,c),Cn(n,Me()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Yr(n,bn,Oi);break;case 3:if(vr(n,c),(c&130023424)===c&&(i=Cu+500-Me(),10<i)){if(vi(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){_n(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Oc(Yr.bind(null,n,bn,Oi),i);break}Yr(n,bn,Oi);break;case 4:if(vr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var E=31-at(c);m=1<<E,E=i[E],E>f&&(f=E),c&=~m}if(c=f,c=Me()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Z0(c/1960))-c,10<c){n.timeoutHandle=Oc(Yr.bind(null,n,bn,Oi),c);break}Yr(n,bn,Oi);break;case 5:Yr(n,bn,Oi);break;default:throw Error(t(329))}}}return Cn(n,Me()),n.callbackNode===a?$p.bind(null,n):null}function Nu(n,i){var a=qa;return n.current.memoizedState.isDehydrated&&($r(n,i).flags|=256),n=pl(n,i),n!==2&&(i=bn,bn=a,i!==null&&Lu(i)),n}function Lu(n){bn===null?bn=n:bn.push.apply(bn,n)}function Q0(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],m=f.getSnapshot;f=f.value;try{if(!ni(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function vr(n,i){for(i&=~bu,i&=~ll,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-at(i),c=1<<a;n[a]=-1,i&=~c}}function Yp(n){if((xt&6)!==0)throw Error(t(327));Fs();var i=vi(n,0);if((i&1)===0)return Cn(n,Me()),null;var a=pl(n,i);if(n.tag!==0&&a===2){var c=Ri(n);c!==0&&(i=c,a=Nu(n,c))}if(a===1)throw a=Xa,$r(n,0),vr(n,i),Cn(n,Me()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Yr(n,bn,Oi),Cn(n,Me()),null}function Du(n,i){var a=xt;xt|=1;try{return n(i)}finally{xt=a,xt===0&&(Us=Me()+500,Ho&&ur())}}function qr(n){mr!==null&&mr.tag===0&&(xt&6)===0&&Fs();var i=xt;xt|=1;var a=Yn.transition,c=At;try{if(Yn.transition=null,At=1,n)return n()}finally{At=c,Yn.transition=a,xt=i,(xt&6)===0&&ur()}}function Iu(){kn=Is.current,Ft(Is)}function $r(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,C0(a)),jt!==null)for(a=jt.return;a!==null;){var c=a;switch(Gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Bo();break;case 3:Ns(),Ft(Tn),Ft(cn),nu();break;case 5:eu(c);break;case 4:Ns();break;case 13:Ft(Bt);break;case 19:Ft(Bt);break;case 10:Yc(c.type._context);break;case 22:case 23:Iu()}a=a.return}if(tn=n,jt=n=xr(n.current,null),an=kn=i,Zt=0,Xa=null,bu=ll=Xr=0,bn=qa=null,Gr!==null){for(i=0;i<Gr.length;i++)if(a=Gr[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,m=a.pending;if(m!==null){var E=m.next;m.next=f,c.next=E}a.pending=c}Gr=null}return n}function Kp(n,i){do{var a=jt;try{if($c(),Zo.current=tl,Qo){for(var c=zt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Qo=!1}if(Wr=0,en=Kt=zt=null,za=!1,Ha=0,Au.current=null,a===null||a.return===null){Zt=1,Xa=i,jt=null;break}e:{var m=n,E=a.return,D=a,F=i;if(i=an,D.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Q=F,xe=D,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var De=Sp(E);if(De!==null){De.flags&=-257,Mp(De,E,D,m,i),De.mode&1&&yp(m,Q,i),i=De,F=Q;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(F),i.updateQueue=Ve}else ze.add(F);break e}else{if((i&1)===0){yp(m,Q,i),Uu();break e}F=Error(t(426))}}else if(kt&&D.mode&1){var Vt=Sp(E);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Mp(Vt,E,D,m,i),Xc(Ls(F,D));break e}}m=F=Ls(F,D),Zt!==4&&(Zt=2),qa===null?qa=[m]:qa.push(m),m=E;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var q=xp(m,F,i);Wh(m,q);break e;case 1:D=F;var H=m.type,$=m.stateNode;if((m.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||$!==null&&typeof $.componentDidCatch=="function"&&(pr===null||!pr.has($)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=_p(m,D,i);Wh(m,Te);break e}}m=m.return}while(m!==null)}Jp(a)}catch(Xe){i=Xe,jt===a&&a!==null&&(jt=a=a.return);continue}break}while(!0)}function Zp(){var n=ol.current;return ol.current=tl,n===null?tl:n}function Uu(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),tn===null||(Xr&268435455)===0&&(ll&268435455)===0||vr(tn,an)}function pl(n,i){var a=xt;xt|=2;var c=Zp();(tn!==n||an!==i)&&(Oi=null,$r(n,i));do try{J0();break}catch(f){Kp(n,f)}while(!0);if($c(),xt=a,ol.current=c,jt!==null)throw Error(t(261));return tn=null,an=0,Zt}function J0(){for(;jt!==null;)Qp(jt)}function ex(){for(;jt!==null&&!j();)Qp(jt)}function Qp(n){var i=nm(n.alternate,n,kn);n.memoizedProps=n.pendingProps,i===null?Jp(n):jt=i,Au.current=null}function Jp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=X0(a,i,kn),a!==null){jt=a;return}}else{if(a=q0(a,i),a!==null){a.flags&=32767,jt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Zt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=n}while(i!==null);Zt===0&&(Zt=5)}function Yr(n,i,a){var c=At,f=Yn.transition;try{Yn.transition=null,At=1,tx(n,i,a,c)}finally{Yn.transition=f,At=c}return null}function tx(n,i,a,c){do Fs();while(mr!==null);if((xt&6)!==0)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Mo(n,m),n===tn&&(jt=tn=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||ul||(ul=!0,im(it,function(){return Fs(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=Yn.transition,Yn.transition=null;var E=At;At=1;var D=xt;xt|=4,Au.current=null,Y0(n,a),Gp(a,n),S0(Uc),wo=!!Ic,Uc=Ic=null,n.current=a,K0(a),we(),xt=D,At=E,Yn.transition=m}else n.current=a;if(ul&&(ul=!1,mr=n,dl=f),m=n.pendingLanes,m===0&&(pr=null),on(a.stateNode),Cn(n,Me()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(cl)throw cl=!1,n=Ru,Ru=null,n;return(dl&1)!==0&&n.tag!==0&&Fs(),m=n.pendingLanes,(m&1)!==0?n===Pu?$a++:($a=0,Pu=n):$a=0,ur(),null}function Fs(){if(mr!==null){var n=Hf(dl),i=Yn.transition,a=At;try{if(Yn.transition=null,At=16>n?16:n,mr===null)var c=!1;else{if(n=mr,mr=null,dl=0,(xt&6)!==0)throw Error(t(331));var f=xt;for(xt|=4,Oe=n.current;Oe!==null;){var m=Oe,E=m.child;if((Oe.flags&16)!==0){var D=m.deletions;if(D!==null){for(var F=0;F<D.length;F++){var Q=D[F];for(Oe=Q;Oe!==null;){var xe=Oe;switch(xe.tag){case 0:case 11:case 15:Wa(8,xe,m)}var ye=xe.child;if(ye!==null)ye.return=xe,Oe=ye;else for(;Oe!==null;){xe=Oe;var ge=xe.sibling,De=xe.return;if(kp(xe),xe===Q){Oe=null;break}if(ge!==null){ge.return=De,Oe=ge;break}Oe=De}}}var ze=m.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Vt=Ve.sibling;Ve.sibling=null,Ve=Vt}while(Ve!==null)}}Oe=m}}if((m.subtreeFlags&2064)!==0&&E!==null)E.return=m,Oe=E;else e:for(;Oe!==null;){if(m=Oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Wa(9,m,m.return)}var q=m.sibling;if(q!==null){q.return=m.return,Oe=q;break e}Oe=m.return}}var H=n.current;for(Oe=H;Oe!==null;){E=Oe;var $=E.child;if((E.subtreeFlags&2064)!==0&&$!==null)$.return=E,Oe=$;else e:for(E=H;Oe!==null;){if(D=Oe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:al(9,D)}}catch(Xe){Ht(D,D.return,Xe)}if(D===E){Oe=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Oe=Te;break e}Oe=D.return}}if(xt=f,ur(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Et,n)}catch{}c=!0}return c}finally{At=a,Yn.transition=i}}return!1}function em(n,i,a){i=Ls(a,i),i=xp(n,i,1),n=fr(n,i,1),i=_n(),n!==null&&(En(n,1,i),Cn(n,i))}function Ht(n,i,a){if(n.tag===3)em(n,n,a);else for(;i!==null;){if(i.tag===3){em(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(pr===null||!pr.has(c))){n=Ls(a,n),n=_p(i,n,1),i=fr(i,n,1),n=_n(),i!==null&&(En(i,1,n),Cn(i,n));break}}i=i.return}}function nx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=_n(),n.pingedLanes|=n.suspendedLanes&a,tn===n&&(an&a)===a&&(Zt===4||Zt===3&&(an&130023424)===an&&500>Me()-Cu?$r(n,0):bu|=a),Cn(n,i)}function tm(n,i){i===0&&((n.mode&1)===0?i=1:(i=ti,ti<<=1,(ti&130023424)===0&&(ti=4194304)));var a=_n();n=Ii(n,i),n!==null&&(En(n,i,a),Cn(n,a))}function ix(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),tm(n,a)}function rx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),tm(n,a)}var nm;nm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Tn.current)An=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return An=!1,W0(n,i,a);An=(n.flags&131072)!==0}else An=!1,kt&&(i.flags&1048576)!==0&&Uh(i,Go,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;rl(n,i),n=i.pendingProps;var f=Ts(i,cn.current);Ps(i,a),f=su(null,i,c,n,f,a);var m=au();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(c)?(m=!0,zo(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Qc(i),f.updater=nl,i.stateNode=f,f._reactInternals=i,fu(i,c,n,a),i=gu(null,i,c,!0,m,a)):(i.tag=0,kt&&m&&Vc(i),xn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(rl(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=ax(c),n=ri(c,n),f){case 0:i=mu(null,i,c,n,a);break e;case 1:i=Cp(null,i,c,n,a);break e;case 11:i=Ep(null,i,c,n,a);break e;case 14:i=Tp(null,i,c,ri(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ri(c,f),mu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ri(c,f),Cp(n,i,c,f,a);case 3:e:{if(Rp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,jh(n,i),Yo(i,c,null,a);var E=i.memoizedState;if(c=E.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Ls(Error(t(423)),i),i=Pp(n,i,c,a,f);break e}else if(c!==f){f=Ls(Error(t(424)),i),i=Pp(n,i,c,a,f);break e}else for(On=or(i.stateNode.containerInfo.firstChild),Fn=i,kt=!0,ii=null,a=Vh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(bs(),c===f){i=Fi(n,i,a);break e}xn(n,i,c,a)}i=i.child}return i;case 5:return qh(i),n===null&&Wc(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,E=f.children,Fc(c,f)?E=null:m!==null&&Fc(c,m)&&(i.flags|=32),bp(n,i),xn(n,i,E,a),i.child;case 6:return n===null&&Wc(i),null;case 13:return Np(n,i,a);case 4:return Jc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Cs(i,null,c,a):xn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ri(c,f),Ep(n,i,c,f,a);case 7:return xn(n,i,i.pendingProps,a),i.child;case 8:return xn(n,i,i.pendingProps.children,a),i.child;case 12:return xn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,E=f.value,Dt(Xo,c._currentValue),c._currentValue=E,m!==null)if(ni(m.value,E)){if(m.children===f.children&&!Tn.current){i=Fi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var D=m.dependencies;if(D!==null){E=m.child;for(var F=D.firstContext;F!==null;){if(F.context===c){if(m.tag===1){F=Ui(-1,a&-a),F.tag=2;var Q=m.updateQueue;if(Q!==null){Q=Q.shared;var xe=Q.pending;xe===null?F.next=F:(F.next=xe.next,xe.next=F),Q.pending=F}}m.lanes|=a,F=m.alternate,F!==null&&(F.lanes|=a),Kc(m.return,a,i),D.lanes|=a;break}F=F.next}}else if(m.tag===10)E=m.type===i.type?null:m.child;else if(m.tag===18){if(E=m.return,E===null)throw Error(t(341));E.lanes|=a,D=E.alternate,D!==null&&(D.lanes|=a),Kc(E,a,i),E=m.sibling}else E=m.child;if(E!==null)E.return=m;else for(E=m;E!==null;){if(E===i){E=null;break}if(m=E.sibling,m!==null){m.return=E.return,E=m;break}E=E.return}m=E}xn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Ps(i,a),f=qn(f),c=c(f),i.flags|=1,xn(n,i,c,a),i.child;case 14:return c=i.type,f=ri(c,i.pendingProps),f=ri(c.type,f),Tp(n,i,c,f,a);case 15:return wp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ri(c,f),rl(n,i),i.tag=1,wn(c)?(n=!0,zo(i)):n=!1,Ps(i,a),gp(i,c,f),fu(i,c,f,a),gu(null,i,c,!0,n,a);case 19:return Dp(n,i,a);case 22:return Ap(n,i,a)}throw Error(t(156,i.tag))};function im(n,i){return J(n,i)}function sx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(n,i,a,c){return new sx(n,i,a,c)}function Fu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function ax(n){if(typeof n=="function")return Fu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===oe)return 11;if(n===pe)return 14}return 2}function xr(n,i){var a=n.alternate;return a===null?(a=Kn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function ml(n,i,a,c,f,m){var E=2;if(c=n,typeof n=="function")Fu(n)&&(E=1);else if(typeof n=="string")E=5;else e:switch(n){case O:return Kr(a.children,f,m,i);case X:E=8,f|=8;break;case P:return n=Kn(12,a,i,f|2),n.elementType=P,n.lanes=m,n;case te:return n=Kn(13,a,i,f),n.elementType=te,n.lanes=m,n;case fe:return n=Kn(19,a,i,f),n.elementType=fe,n.lanes=m,n;case ce:return gl(a,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:E=10;break e;case z:E=9;break e;case oe:E=11;break e;case pe:E=14;break e;case ae:E=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Kn(E,a,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function Kr(n,i,a,c){return n=Kn(7,n,c,i),n.lanes=a,n}function gl(n,i,a,c){return n=Kn(22,n,c,i),n.elementType=ce,n.lanes=a,n.stateNode={isHidden:!1},n}function Ou(n,i,a){return n=Kn(6,n,null,i),n.lanes=a,n}function ku(n,i,a){return i=Kn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function ox(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jn(0),this.expirationTimes=jn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Bu(n,i,a,c,f,m,E,D,F){return n=new ox(n,i,a,D,F),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Kn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(m),n}function lx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function rm(n){if(!n)return cr;n=n._reactInternals;e:{if(gi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(wn(a))return Lh(n,a,i)}return i}function sm(n,i,a,c,f,m,E,D,F){return n=Bu(a,c,!0,n,f,m,E,D,F),n.context=rm(null),a=n.current,c=_n(),f=gr(a),m=Ui(c,f),m.callback=i??null,fr(a,m,f),n.current.lanes=f,En(n,f,c),Cn(n,c),n}function vl(n,i,a,c){var f=i.current,m=_n(),E=gr(f);return a=rm(a),i.context===null?i.context=a:i.pendingContext=a,i=Ui(m,E),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=fr(f,i,E),n!==null&&(oi(n,f,E,m),$o(n,f,E)),E}function xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function zu(n,i){am(n,i),(n=n.alternate)&&am(n,i)}function cx(){return null}var om=typeof reportError=="function"?reportError:function(n){console.error(n)};function Hu(n){this._internalRoot=n}_l.prototype.render=Hu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));vl(n,i,null,null)},_l.prototype.unmount=Hu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;qr(function(){vl(null,n,null,null)}),i[Pi]=null}};function _l(n){this._internalRoot=n}_l.prototype.unstable_scheduleHydration=function(n){if(n){var i=jf();n={blockedOn:null,target:n,priority:i};for(var a=0;a<rr.length&&i!==0&&i<rr[a].priority;a++);rr.splice(a,0,n),a===0&&qf(n)}};function Vu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lm(){}function ux(n,i,a,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var Q=xl(E);m.call(Q)}}var E=sm(i,c,n,0,null,!1,!1,"",lm);return n._reactRootContainer=E,n[Pi]=E.current,La(n.nodeType===8?n.parentNode:n),qr(),E}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var D=c;c=function(){var Q=xl(F);D.call(Q)}}var F=Bu(n,0,!1,null,null,!1,!1,"",lm);return n._reactRootContainer=F,n[Pi]=F.current,La(n.nodeType===8?n.parentNode:n),qr(function(){vl(i,F,a,c)}),F}function Sl(n,i,a,c,f){var m=a._reactRootContainer;if(m){var E=m;if(typeof f=="function"){var D=f;f=function(){var F=xl(E);D.call(F)}}vl(i,E,n,f)}else E=ux(a,i,n,f,c);return xl(E)}Vf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Yt(i.pendingLanes);a!==0&&(fc(i,a|1),Cn(i,Me()),(xt&6)===0&&(Us=Me()+500,ur()))}break;case 13:qr(function(){var c=Ii(n,1);if(c!==null){var f=_n();oi(c,n,1,f)}}),zu(n,1)}},hc=function(n){if(n.tag===13){var i=Ii(n,134217728);if(i!==null){var a=_n();oi(i,n,134217728,a)}zu(n,134217728)}},Gf=function(n){if(n.tag===13){var i=gr(n),a=Ii(n,i);if(a!==null){var c=_n();oi(a,n,i,c)}zu(n,i)}},jf=function(){return At},Wf=function(n,i){var a=At;try{return At=n,i()}finally{At=a}},Re=function(n,i,a){switch(i){case"input":if(ut(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=ko(c);if(!f)throw Error(t(90));pt(c),ut(c,f)}}}break;case"textarea":me(n,a);break;case"select":i=a.value,i!=null&&N(n,!!a.multiple,i,!1)}},It=Du,$t=qr;var dx={usingClientEntryPoint:!1,Events:[Ua,Ms,ko,Ne,st,Du]},Ya={findFiberByHostInstance:Br,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},fx={bundleType:Ya.bundleType,version:Ya.version,rendererPackageName:Ya.rendererPackageName,rendererConfig:Ya.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=b(n),n===null?null:n.stateNode},findFiberByHostInstance:Ya.findFiberByHostInstance||cx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ml=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ml.isDisabled&&Ml.supportsFiber)try{Et=Ml.inject(fx),mt=Ml}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dx,Rn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Vu(i))throw Error(t(200));return lx(n,i,null,a)},Rn.createRoot=function(n,i){if(!Vu(n))throw Error(t(299));var a=!1,c="",f=om;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Bu(n,1,!1,null,null,a,!1,c,f),n[Pi]=i.current,La(n.nodeType===8?n.parentNode:n),new Hu(i)},Rn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=b(i),n=n===null?null:n.stateNode,n},Rn.flushSync=function(n){return qr(n)},Rn.hydrate=function(n,i,a){if(!yl(i))throw Error(t(200));return Sl(null,n,i,!0,a)},Rn.hydrateRoot=function(n,i,a){if(!Vu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,m="",E=om;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=sm(i,null,n,1,a??null,f,!1,m,E),n[Pi]=i.current,La(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new _l(i)},Rn.render=function(n,i,a){if(!yl(i))throw Error(t(200));return Sl(null,n,i,!1,a)},Rn.unmountComponentAtNode=function(n){if(!yl(n))throw Error(t(40));return n._reactRootContainer?(qr(function(){Sl(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1},Rn.unstable_batchedUpdates=Du,Rn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!yl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Sl(n,i,a,!1,c)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var gm;function Ig(){if(gm)return Wu.exports;gm=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Wu.exports=Ex(),Wu.exports}var vm;function Tx(){if(vm)return El;vm=1;var r=Ig();return El.createRoot=r.createRoot,El.hydrateRoot=r.hydrateRoot,El}var wx=Tx();Ig();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function oo(){return oo=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},oo.apply(this,arguments)}var br;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(br||(br={}));const xm="popstate";function Ax(r){r===void 0&&(r={});function e(s,o){let{pathname:l,search:u,hash:d}=s.location;return Ld("",{pathname:l,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function t(s,o){return typeof o=="string"?o:ec(o)}return Cx(e,t,null,r)}function Xt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function Ug(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function bx(){return Math.random().toString(36).substr(2,8)}function _m(r,e){return{usr:r.state,key:r.key,idx:e}}function Ld(r,e,t,s){return t===void 0&&(t=null),oo({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?pa(e):e,{state:t,key:e&&e.key||s||bx()})}function ec(r){let{pathname:e="/",search:t="",hash:s=""}=r;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function pa(r){let e={};if(r){let t=r.indexOf("#");t>=0&&(e.hash=r.substr(t),r=r.substr(0,t));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function Cx(r,e,t,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:l=!1}=s,u=o.history,d=br.Pop,h=null,p=g();p==null&&(p=0,u.replaceState(oo({},u.state,{idx:p}),""));function g(){return(u.state||{idx:null}).idx}function _(){d=br.Pop;let S=g(),x=S==null?null:S-p;p=S,h&&h({action:d,location:A.location,delta:x})}function y(S,x){d=br.Push;let I=Ld(A.location,S,x);p=g()+1;let L=_m(I,p),R=A.createHref(I);try{u.pushState(L,"",R)}catch(Y){if(Y instanceof DOMException&&Y.name==="DataCloneError")throw Y;o.location.assign(R)}l&&h&&h({action:d,location:A.location,delta:1})}function M(S,x){d=br.Replace;let I=Ld(A.location,S,x);p=g();let L=_m(I,p),R=A.createHref(I);u.replaceState(L,"",R),l&&h&&h({action:d,location:A.location,delta:0})}function T(S){let x=o.location.origin!=="null"?o.location.origin:o.location.href,I=typeof S=="string"?S:ec(S);return I=I.replace(/ $/,"%20"),Xt(x,"No window.location.(origin|href) available to create URL for href: "+I),new URL(I,x)}let A={get action(){return d},get location(){return r(o,u)},listen(S){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(xm,_),h=S,()=>{o.removeEventListener(xm,_),h=null}},createHref(S){return e(o,S)},createURL:T,encodeLocation(S){let x=T(S);return{pathname:x.pathname,search:x.search,hash:x.hash}},push:y,replace:M,go(S){return u.go(S)}};return A}var ym;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(ym||(ym={}));function Rx(r,e,t){return t===void 0&&(t="/"),Px(r,e,t)}function Px(r,e,t,s){let o=typeof e=="string"?pa(e):e,l=Cf(o.pathname||"/",t);if(l==null)return null;let u=Fg(r);Nx(u);let d=null;for(let h=0;d==null&&h<u.length;++h){let p=Gx(l);d=zx(u[h],p)}return d}function Fg(r,e,t,s){e===void 0&&(e=[]),t===void 0&&(t=[]),s===void 0&&(s="");let o=(l,u,d)=>{let h={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:u,route:l};h.relativePath.startsWith("/")&&(Xt(h.relativePath.startsWith(s),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(s.length));let p=Cr([s,h.relativePath]),g=t.concat(h);l.children&&l.children.length>0&&(Xt(l.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+p+'".')),Fg(l.children,e,g,p)),!(l.path==null&&!l.index)&&e.push({path:p,score:kx(p,l.index),routesMeta:g})};return r.forEach((l,u)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))o(l,u);else for(let h of Og(l.path))o(l,u,h)}),e}function Og(r){let e=r.split("/");if(e.length===0)return[];let[t,...s]=e,o=t.endsWith("?"),l=t.replace(/\?$/,"");if(s.length===0)return o?[l,""]:[l];let u=Og(s.join("/")),d=[];return d.push(...u.map(h=>h===""?l:[l,h].join("/"))),o&&d.push(...u),d.map(h=>r.startsWith("/")&&h===""?"/":h)}function Nx(r){r.sort((e,t)=>e.score!==t.score?t.score-e.score:Bx(e.routesMeta.map(s=>s.childrenIndex),t.routesMeta.map(s=>s.childrenIndex)))}const Lx=/^:[\w-]+$/,Dx=3,Ix=2,Ux=1,Fx=10,Ox=-2,Sm=r=>r==="*";function kx(r,e){let t=r.split("/"),s=t.length;return t.some(Sm)&&(s+=Ox),e&&(s+=Ix),t.filter(o=>!Sm(o)).reduce((o,l)=>o+(Lx.test(l)?Dx:l===""?Ux:Fx),s)}function Bx(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function zx(r,e,t){let{routesMeta:s}=r,o={},l="/",u=[];for(let d=0;d<s.length;++d){let h=s[d],p=d===s.length-1,g=l==="/"?e:e.slice(l.length)||"/",_=Hx({path:h.relativePath,caseSensitive:h.caseSensitive,end:p},g),y=h.route;if(!_)return null;Object.assign(o,_.params),u.push({params:o,pathname:Cr([l,_.pathname]),pathnameBase:qx(Cr([l,_.pathnameBase])),route:y}),_.pathnameBase!=="/"&&(l=Cr([l,_.pathnameBase]))}return u}function Hx(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[t,s]=Vx(r.path,r.caseSensitive,r.end),o=e.match(t);if(!o)return null;let l=o[0],u=l.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((p,g,_)=>{let{paramName:y,isOptional:M}=g;if(y==="*"){let A=d[_]||"";u=l.slice(0,l.length-A.length).replace(/(.)\/+$/,"$1")}const T=d[_];return M&&!T?p[y]=void 0:p[y]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:l,pathnameBase:u,pattern:r}}function Vx(r,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),Ug(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,h)=>(s.push({paramName:d,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function Gx(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return Ug(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function Cf(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,s=r.charAt(t);return s&&s!=="/"?null:r.slice(t)||"/"}function jx(r,e){e===void 0&&(e="/");let{pathname:t,search:s="",hash:o=""}=typeof r=="string"?pa(r):r;return{pathname:t?t.startsWith("/")?t:Wx(t,e):e,search:$x(s),hash:Yx(o)}}function Wx(r,e){let t=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?t.length>1&&t.pop():o!=="."&&t.push(o)}),t.length>1?t.join("/"):"/"}function $u(r,e,t,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Xx(r){return r.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function kg(r,e){let t=Xx(r);return e?t.map((s,o)=>o===t.length-1?s.pathname:s.pathnameBase):t.map(s=>s.pathnameBase)}function Bg(r,e,t,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=pa(r):(o=oo({},r),Xt(!o.pathname||!o.pathname.includes("?"),$u("?","pathname","search",o)),Xt(!o.pathname||!o.pathname.includes("#"),$u("#","pathname","hash",o)),Xt(!o.search||!o.search.includes("#"),$u("#","search","hash",o)));let l=r===""||o.pathname==="",u=l?"/":o.pathname,d;if(u==null)d=t;else{let _=e.length-1;if(!s&&u.startsWith("..")){let y=u.split("/");for(;y[0]==="..";)y.shift(),_-=1;o.pathname=y.join("/")}d=_>=0?e[_]:"/"}let h=jx(o,d),p=u&&u!=="/"&&u.endsWith("/"),g=(l||u===".")&&t.endsWith("/");return!h.pathname.endsWith("/")&&(p||g)&&(h.pathname+="/"),h}const Cr=r=>r.join("/").replace(/\/\/+/g,"/"),qx=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),$x=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Yx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function Kx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const zg=["post","put","patch","delete"];new Set(zg);const Zx=["get",...zg];new Set(Zx);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function lo(){return lo=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},lo.apply(this,arguments)}const Rf=Ae.createContext(null),Qx=Ae.createContext(null),fs=Ae.createContext(null),rc=Ae.createContext(null),Ir=Ae.createContext({outlet:null,matches:[],isDataRoute:!1}),Hg=Ae.createContext(null);function Jx(r,e){let{relative:t}=e===void 0?{}:e;uo()||Xt(!1);let{basename:s,navigator:o}=Ae.useContext(fs),{hash:l,pathname:u,search:d}=Gg(r,{relative:t}),h=u;return s!=="/"&&(h=u==="/"?s:Cr([s,u])),o.createHref({pathname:h,search:d,hash:l})}function uo(){return Ae.useContext(rc)!=null}function fo(){return uo()||Xt(!1),Ae.useContext(rc).location}function Vg(r){Ae.useContext(fs).static||Ae.useLayoutEffect(r)}function e_(){let{isDataRoute:r}=Ae.useContext(Ir);return r?p_():t_()}function t_(){uo()||Xt(!1);let r=Ae.useContext(Rf),{basename:e,future:t,navigator:s}=Ae.useContext(fs),{matches:o}=Ae.useContext(Ir),{pathname:l}=fo(),u=JSON.stringify(kg(o,t.v7_relativeSplatPath)),d=Ae.useRef(!1);return Vg(()=>{d.current=!0}),Ae.useCallback(function(p,g){if(g===void 0&&(g={}),!d.current)return;if(typeof p=="number"){s.go(p);return}let _=Bg(p,JSON.parse(u),l,g.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Cr([e,_.pathname])),(g.replace?s.replace:s.push)(_,g.state,g)},[e,s,u,l,r])}function n_(){let{matches:r}=Ae.useContext(Ir),e=r[r.length-1];return e?e.params:{}}function Gg(r,e){let{relative:t}=e===void 0?{}:e,{future:s}=Ae.useContext(fs),{matches:o}=Ae.useContext(Ir),{pathname:l}=fo(),u=JSON.stringify(kg(o,s.v7_relativeSplatPath));return Ae.useMemo(()=>Bg(r,JSON.parse(u),l,t==="path"),[r,u,l,t])}function i_(r,e){return r_(r,e)}function r_(r,e,t,s){uo()||Xt(!1);let{navigator:o,static:l}=Ae.useContext(fs),{matches:u}=Ae.useContext(Ir),d=u[u.length-1],h=d?d.params:{};d&&d.pathname;let p=d?d.pathnameBase:"/";d&&d.route;let g=fo(),_;if(e){var y;let x=typeof e=="string"?pa(e):e;p==="/"||(y=x.pathname)!=null&&y.startsWith(p)||Xt(!1),_=x}else _=g;let M=_.pathname||"/",T=M;if(p!=="/"){let x=p.replace(/^\//,"").split("/");T="/"+M.replace(/^\//,"").split("/").slice(x.length).join("/")}let A=Rx(r,{pathname:T}),S=c_(A&&A.map(x=>Object.assign({},x,{params:Object.assign({},h,x.params),pathname:Cr([p,o.encodeLocation?o.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?p:Cr([p,o.encodeLocation?o.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),u,t,s);return e&&S?Ae.createElement(rc.Provider,{value:{location:lo({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:br.Pop}},S):S}function s_(){let r=h_(),e=Kx(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),t=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return Ae.createElement(Ae.Fragment,null,Ae.createElement("h2",null,"Unexpected Application Error!"),Ae.createElement("h3",{style:{fontStyle:"italic"}},e),t?Ae.createElement("pre",{style:o},t):null,null)}const a_=Ae.createElement(s_,null);class o_ extends Ae.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?Ae.createElement(Ir.Provider,{value:this.props.routeContext},Ae.createElement(Hg.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function l_(r){let{routeContext:e,match:t,children:s}=r,o=Ae.useContext(Rf);return o&&o.static&&o.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=t.route.id),Ae.createElement(Ir.Provider,{value:e},s)}function c_(r,e,t,s){var o;if(e===void 0&&(e=[]),t===void 0&&(t=null),s===void 0&&(s=null),r==null){var l;if(!t)return null;if(t.errors)r=t.matches;else if((l=s)!=null&&l.v7_partialHydration&&e.length===0&&!t.initialized&&t.matches.length>0)r=t.matches;else return null}let u=r,d=(o=t)==null?void 0:o.errors;if(d!=null){let g=u.findIndex(_=>_.route.id&&(d==null?void 0:d[_.route.id])!==void 0);g>=0||Xt(!1),u=u.slice(0,Math.min(u.length,g+1))}let h=!1,p=-1;if(t&&s&&s.v7_partialHydration)for(let g=0;g<u.length;g++){let _=u[g];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(p=g),_.route.id){let{loaderData:y,errors:M}=t,T=_.route.loader&&y[_.route.id]===void 0&&(!M||M[_.route.id]===void 0);if(_.route.lazy||T){h=!0,p>=0?u=u.slice(0,p+1):u=[u[0]];break}}}return u.reduceRight((g,_,y)=>{let M,T=!1,A=null,S=null;t&&(M=d&&_.route.id?d[_.route.id]:void 0,A=_.route.errorElement||a_,h&&(p<0&&y===0?(m_("route-fallback"),T=!0,S=null):p===y&&(T=!0,S=_.route.hydrateFallbackElement||null)));let x=e.concat(u.slice(0,y+1)),I=()=>{let L;return M?L=A:T?L=S:_.route.Component?L=Ae.createElement(_.route.Component,null):_.route.element?L=_.route.element:L=g,Ae.createElement(l_,{match:_,routeContext:{outlet:g,matches:x,isDataRoute:t!=null},children:L})};return t&&(_.route.ErrorBoundary||_.route.errorElement||y===0)?Ae.createElement(o_,{location:t.location,revalidation:t.revalidation,component:A,error:M,children:I(),routeContext:{outlet:null,matches:x,isDataRoute:!0}}):I()},null)}var jg=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(jg||{}),Wg=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(Wg||{});function u_(r){let e=Ae.useContext(Rf);return e||Xt(!1),e}function d_(r){let e=Ae.useContext(Qx);return e||Xt(!1),e}function f_(r){let e=Ae.useContext(Ir);return e||Xt(!1),e}function Xg(r){let e=f_(),t=e.matches[e.matches.length-1];return t.route.id||Xt(!1),t.route.id}function h_(){var r;let e=Ae.useContext(Hg),t=d_(),s=Xg();return e!==void 0?e:(r=t.errors)==null?void 0:r[s]}function p_(){let{router:r}=u_(jg.UseNavigateStable),e=Xg(Wg.UseNavigateStable),t=Ae.useRef(!1);return Vg(()=>{t.current=!0}),Ae.useCallback(function(o,l){l===void 0&&(l={}),t.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,lo({fromRouteId:e},l)))},[r,e])}const Mm={};function m_(r,e,t){Mm[r]||(Mm[r]=!0)}function g_(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Nn(r){Xt(!1)}function v_(r){let{basename:e="/",children:t=null,location:s,navigationType:o=br.Pop,navigator:l,static:u=!1,future:d}=r;uo()&&Xt(!1);let h=e.replace(/^\/*/,"/"),p=Ae.useMemo(()=>({basename:h,navigator:l,static:u,future:lo({v7_relativeSplatPath:!1},d)}),[h,d,l,u]);typeof s=="string"&&(s=pa(s));let{pathname:g="/",search:_="",hash:y="",state:M=null,key:T="default"}=s,A=Ae.useMemo(()=>{let S=Cf(g,h);return S==null?null:{location:{pathname:S,search:_,hash:y,state:M,key:T},navigationType:o}},[h,g,_,y,M,T,o]);return A==null?null:Ae.createElement(fs.Provider,{value:p},Ae.createElement(rc.Provider,{children:t,value:A}))}function x_(r){let{children:e,location:t}=r;return i_(Dd(e),t)}new Promise(()=>{});function Dd(r,e){e===void 0&&(e=[]);let t=[];return Ae.Children.forEach(r,(s,o)=>{if(!Ae.isValidElement(s))return;let l=[...e,o];if(s.type===Ae.Fragment){t.push.apply(t,Dd(s.props.children,l));return}s.type!==Nn&&Xt(!1),!s.props.index||!s.props.children||Xt(!1);let u={id:s.props.id||l.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=Dd(s.props.children,l)),t.push(u)}),t}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Id(){return Id=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(r[s]=t[s])}return r},Id.apply(this,arguments)}function __(r,e){if(r==null)return{};var t={},s=Object.keys(r),o,l;for(l=0;l<s.length;l++)o=s[l],!(e.indexOf(o)>=0)&&(t[o]=r[o]);return t}function y_(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function S_(r,e){return r.button===0&&(!e||e==="_self")&&!y_(r)}const M_=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],E_="6";try{window.__reactRouterVersion=E_}catch{}const T_="startTransition",Em=yx[T_];function w_(r){let{basename:e,children:t,future:s,window:o}=r,l=Ae.useRef();l.current==null&&(l.current=Ax({window:o,v5Compat:!0}));let u=l.current,[d,h]=Ae.useState({action:u.action,location:u.location}),{v7_startTransition:p}=s||{},g=Ae.useCallback(_=>{p&&Em?Em(()=>h(_)):h(_)},[h,p]);return Ae.useLayoutEffect(()=>u.listen(g),[u,g]),Ae.useEffect(()=>g_(s),[s]),Ae.createElement(v_,{basename:e,children:t,location:d.location,navigationType:d.action,navigator:u,future:s})}const A_=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",b_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Rr=Ae.forwardRef(function(e,t){let{onClick:s,relative:o,reloadDocument:l,replace:u,state:d,target:h,to:p,preventScrollReset:g,viewTransition:_}=e,y=__(e,M_),{basename:M}=Ae.useContext(fs),T,A=!1;if(typeof p=="string"&&b_.test(p)&&(T=p,A_))try{let L=new URL(window.location.href),R=p.startsWith("//")?new URL(L.protocol+p):new URL(p),Y=Cf(R.pathname,M);R.origin===L.origin&&Y!=null?p=Y+R.search+R.hash:A=!0}catch{}let S=Jx(p,{relative:o}),x=C_(p,{replace:u,state:d,target:h,preventScrollReset:g,relative:o,viewTransition:_});function I(L){s&&s(L),L.defaultPrevented||x(L)}return Ae.createElement("a",Id({},y,{href:T||S,onClick:A||l?s:I,ref:t,target:h}))});var Tm;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Tm||(Tm={}));var wm;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(wm||(wm={}));function C_(r,e){let{target:t,replace:s,state:o,preventScrollReset:l,relative:u,viewTransition:d}=e===void 0?{}:e,h=e_(),p=fo(),g=Gg(r,{relative:u});return Ae.useCallback(_=>{if(S_(_,t)){_.preventDefault();let y=s!==void 0?s:ec(p)===ec(g);h(r,{replace:y,state:o,preventScrollReset:l,relative:u,viewTransition:d})}},[p,h,g,s,o,t,r,l,u,d])}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qg=(...r)=>r.filter((e,t,s)=>!!e&&s.indexOf(e)===t).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var P_={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=Ae.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:u,...d},h)=>Ae.createElement("svg",{ref:h,...P_,width:e,height:e,stroke:r,strokeWidth:s?Number(t)*24/Number(e):t,className:qg("lucide",o),...d},[...u.map(([p,g])=>Ae.createElement(p,g)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=(r,e)=>{const t=Ae.forwardRef(({className:s,...o},l)=>Ae.createElement(N_,{ref:l,iconNode:e,className:qg(`lucide-${R_(r)}`,s),...o}));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $g=Ot("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=Ot("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=Ot("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=Ot("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=Ot("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=Ot("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=Ot("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=Ot("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=Ot("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=Ot("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=Ot("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=Ot("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=Ot("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yg=Ot("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=Ot("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=Ot("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=Ot("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=Ot("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=Ot("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=Ot("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=Ot("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=Ot("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=Ot("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=Ot("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=Ot("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),ey=()=>{const[r,e]=Ae.useState(!1),[t,s]=Ae.useState(!1),o=fo(),l=[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Services",path:"/services"},{name:"Portfolio",path:"/portfolio"},{name:"Testimonials",path:"/testimonials"},{name:"Blog",path:"/blog"},{name:"Contact",path:"/contact"}];return Ae.useEffect(()=>{const u=()=>{s(window.scrollY>20)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]),v.jsx("nav",{className:`fixed w-full z-50 transition-all duration-300 ${t?"bg-black/80 backdrop-blur-md shadow-lg py-3":"bg-transparent py-5"}`,children:v.jsxs("div",{className:"container mx-auto px-4 md:px-6",children:[v.jsxs("div",{className:"flex justify-between items-center",children:[v.jsx(Rr,{to:"/",className:"text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent",children:v.jsx("img",{src:"kavyata_w.svg"})}),v.jsx("div",{className:"hidden md:flex space-x-8",children:l.map(u=>v.jsxs(Rr,{to:u.path,className:`relative text-sm font-medium transition-colors hover:text-orange-400 ${o.pathname===u.path?"text-orange-400":"text-gray-300"}`,children:[u.name,v.jsx("span",{className:`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 transition-transform duration-300 ${o.pathname===u.path?"scale-x-100":""}`})]},u.name))}),v.jsx("button",{className:"md:hidden text-gray-300 hover:text-white focus:outline-none",onClick:()=>e(!r),children:r?v.jsx(J_,{size:24}):v.jsx(j_,{size:24})})]}),r&&v.jsx("div",{className:"md:hidden mt-4 bg-gray-900/90 backdrop-blur-lg rounded-lg p-4 shadow-lg",children:v.jsx("div",{className:"flex flex-col space-y-4",children:l.map(u=>v.jsx(Rr,{to:u.path,className:`py-2 px-4 rounded-lg transition-colors ${o.pathname===u.path?"bg-blue-900/50 text-blue-400":"text-gray-300 hover:bg-gray-800 hover:text-white"}`,onClick:()=>e(!1),children:u.name},u.name))})})]})})},ty=()=>v.jsx("footer",{className:"bg-gray-900 border-t border-gray-800",children:v.jsxs("div",{className:"container mx-auto px-4 py-12 md:py-16",children:[v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4",children:"KAVYTA"}),v.jsx("p",{className:"text-gray-400 mb-6",children:"Transforming businesses through innovative IT solutions and cutting-edge technology."}),v.jsxs("div",{className:"flex space-x-4",children:[v.jsx(Za,{icon:v.jsx(k_,{size:18}),href:"#"}),v.jsx(Za,{icon:v.jsx(Z_,{size:18}),href:"#"}),v.jsx(Za,{icon:v.jsx(H_,{size:18}),href:"#"}),v.jsx(Za,{icon:v.jsx(V_,{size:18}),href:"#"}),v.jsx(Za,{icon:v.jsx(B_,{size:18}),href:"#"})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Services"}),v.jsxs("ul",{className:"space-y-2",children:[v.jsx(Bi,{href:"/services",children:"Web Development"}),v.jsx(Bi,{href:"/services",children:"Software Development"}),v.jsx(Bi,{href:"/services",children:"Mobile App Development"}),v.jsx(Bi,{href:"/services",children:"IT Consulting"})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Company"}),v.jsxs("ul",{className:"space-y-2",children:[v.jsx(Bi,{href:"/about",children:"About Us"}),v.jsx(Bi,{href:"/portfolio",children:"Our Work"}),v.jsx(Bi,{href:"/testimonials",children:"Testimonials"}),v.jsx(Bi,{href:"/blog",children:"Blog"}),v.jsx(Bi,{href:"/contact",children:"Contact"})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Contact Us"}),v.jsxs("address",{className:"not-italic text-gray-400 space-y-2",children:[v.jsx("p",{children:"Rajkot"}),v.jsxs("p",{className:"flex items-center mt-2",children:[v.jsx(Yg,{size:16,className:"mr-2"})," ",v.jsx("a",{href:"kavyata914@gmail.com",children:"info@kavyta.site"})]}),v.jsx("p",{children:v.jsx("a",{href:"tel:+916356893665",children:"+91 6356893665"})})]})]})]}),v.jsxs("div",{className:"border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center",children:[v.jsxs("p",{className:"text-gray-500 text-sm",children:["© ",new Date().getFullYear()," Develop by Kevin Topiya. All rights reserved."]}),v.jsxs("div",{className:"flex space-x-6 mt-4 md:mt-0",children:[v.jsx("span",{className:"text-gray-500 text-sm hover:text-gray-400 cursor-pointer",children:"Privacy Policy"}),v.jsx("span",{className:"text-gray-500 text-sm hover:text-gray-400 cursor-pointer",children:"Terms of Service"}),v.jsx("span",{className:"text-gray-500 text-sm hover:text-gray-400 cursor-pointer",children:"Cookies"})]})]})]})}),Za=({icon:r,href:e})=>v.jsx("a",{href:e,className:"w-8 h-8 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300",children:r}),Bi=({href:r,children:e})=>v.jsx("li",{children:v.jsx(Rr,{to:r,className:"text-gray-400 hover:text-blue-400 transition-colors duration-300",children:e})}),Sn=({children:r,variant:e="primary",size:t="md",href:s,onClick:o,className:l="",type:u="button"})=>{const d="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black",h={primary:"bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-600/40",secondary:"bg-charcoal-600 hover:bg-charcoal-500 text-white",outline:"bg-transparent border border-charcoal-700 hover:border-orange-500 text-gray-300 hover:text-orange-400"},p={sm:"text-xs px-3 py-1.5",md:"text-sm px-5 py-2.5",lg:"text-base px-6 py-3"},g=`${d} ${h[e]} ${p[t]} ${l}`;return s?v.jsx(Rr,{to:s,className:g,children:r}):v.jsx("button",{type:u,onClick:o,className:g,children:r})},ny=()=>v.jsxs("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16",children:[v.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-0"}),v.jsx("div",{className:"absolute top-20 right-[10%] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"}),v.jsx("div",{className:"absolute bottom-20 left-[15%] w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse",style:{animationDelay:"2s"}}),v.jsx("div",{className:"absolute inset-0 bg-[url('https://img.pikbest.com/backgrounds/20190725/retro-sci-fi-background-futuristic-grid-landscape-of-the-1980-background-v_1508384jpg!w700wp')] bg-cover bg-center opacity-10 z-0"}),v.jsx("div",{className:"container mx-auto px-4 relative z-10",children:v.jsxs("div",{className:"flex flex-col md:flex-row items-center",children:[v.jsxs("div",{className:"md:w-1/2 md:pr-12",children:[v.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-6",children:[v.jsx("span",{className:"block",children:"Innovative IT Solutions"}),v.jsx("span",{className:"bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",children:"For Your Business"})]}),v.jsx("p",{className:"text-lg text-gray-300 mb-8 max-w-lg",children:"We create cutting-edge digital solutions that transform businesses and drive growth in the modern technological landscape."}),v.jsxs("div",{className:"flex flex-wrap gap-4",children:[v.jsxs(Sn,{size:"lg",onClick:()=>{var r;(r=document.getElementById("services"))==null||r.scrollIntoView({behavior:"smooth"})},children:["Get Started",v.jsx($g,{size:18,className:"ml-2"})]}),v.jsx(Sn,{variant:"outline",size:"lg",href:"/services",children:"Our Services"})]}),v.jsxs("div",{className:"mt-12 flex items-center",children:[v.jsx("div",{className:"flex -space-x-2",children:[1,2,3,4].map(r=>v.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-black overflow-hidden",children:v.jsx("img",{src:`https://randomuser.me/api/portraits/men/${r+30}.jpg`,alt:"Team member",className:"w-full h-full object-cover"})},r))}),v.jsxs("div",{className:"ml-4",children:[v.jsx("p",{className:"text-sm font-medium text-gray-300",children:"Trusted by"}),v.jsx("p",{className:"text-sm text-blue-400",children:"500+ businesses"})]})]})]}),v.jsx("div",{className:"md:w-1/2 mt-12 md:mt-0 flex justify-center",children:v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-2xl rounded-full overflow-hidden  shadow-2xl backdrop-blur-sm bg-gray-900/40",children:v.jsx("img",{src:"gif.gif",alt:"IT Solutions",className:"w-full h-full object-cover opacity-80"})}),v.jsx("div",{className:"absolute -top-6 -right-6 w-32 h-32 rounded-lg overflow-hidden border border-gray-800 shadow-lg backdrop-blur-sm bg-gray-900/60 p-3 flex items-center justify-center animate-float",children:v.jsx("img",{src:"https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126884_1280.png",alt:"Web Development",className:"w-full h-full object-contain"})}),v.jsx("div",{className:"absolute -bottom-8 -left-8 w-40 h-24 rounded-lg overflow-hidden border border-gray-800 shadow-lg backdrop-blur-sm bg-gray-900/60 p-3 flex items-center justify-center animate-float",style:{animationDelay:"1.5s"},children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",children:"95%"}),v.jsx("div",{className:"text-xs text-gray-300",children:"Customer Satisfaction"})]})})]})})]})})]}),Mt=({children:r,className:e="",hoverable:t=!1})=>v.jsx("div",{className:`
        bg-charcoal-700/60 backdrop-blur-lg border border-charcoal-600 
        rounded-xl shadow-xl p-6 
        ${t?"transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-orange-500/50":""}
        ${e}
      `,children:r}),iy=[{icon:v.jsx(z_,{size:48,className:"text-blue-400"}),title:"Web Development",description:"Custom websites and web applications built with the latest technologies for optimal performance and user experience."},{icon:v.jsx(O_,{size:48,className:"text-purple-400"}),title:"Software Development",description:"Tailored software solutions designed to streamline your business processes and boost productivity."},{icon:v.jsx(Y_,{size:48,className:"text-green-400"}),title:"Mobile App Development",description:"Native and cross-platform mobile applications that deliver seamless experiences across all devices."},{icon:v.jsx(F_,{size:48,className:"text-cyan-400"}),title:"Cloud Solutions",description:"Scalable cloud infrastructure and migration services to enhance flexibility and reduce operational costs."},{icon:v.jsx($_,{size:48,className:"text-red-400"}),title:"Cybersecurity",description:"Comprehensive security solutions to protect your business data and systems from evolving threats."},{icon:v.jsx(D_,{size:48,className:"text-yellow-400"}),title:"IT Consulting",description:"Strategic technology consulting to help you make informed decisions and achieve your business goals."}],ry=()=>v.jsxs("section",{id:"services",className:"relative py-20 bg-black ",children:[v.jsx("div",{className:"absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-900/10 to-transparent"}),v.jsx("div",{className:"absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-blue-900/10 to-transparent"}),v.jsxs("div",{className:"container mx-auto px-4 relative z-10",children:[v.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[v.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Our Services"}),v.jsx("div",{className:"w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"}),v.jsx("p",{className:"text-gray-400 text-lg",children:"We offer a comprehensive range of IT services to help your business thrive in the digital era."})]}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:iy.map((r,e)=>v.jsxs(Mt,{hoverable:!0,className:"flex flex-col items-center text-center p-8",children:[v.jsx("div",{className:"mb-6 transform transition-transform duration-500 group-hover:scale-110",children:r.icon}),v.jsx("h3",{className:"text-xl font-bold mb-3",children:r.title}),v.jsx("p",{className:"text-gray-400",children:r.description})]},e))})]})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pf="170",sy=0,Am=1,ay=2,Kg=1,oy=2,Wi=3,Lr=0,Dn=1,Xi=2,Pr=0,ia=1,bm=2,Cm=3,Rm=4,ly=5,ss=100,cy=101,uy=102,dy=103,fy=104,hy=200,py=201,my=202,gy=203,Ud=204,Fd=205,vy=206,xy=207,_y=208,yy=209,Sy=210,My=211,Ey=212,Ty=213,wy=214,Od=0,kd=1,Bd=2,la=3,zd=4,Hd=5,Vd=6,Gd=7,Zg=0,Ay=1,by=2,Nr=0,Cy=1,Ry=2,Py=3,Ny=4,Ly=5,Dy=6,Iy=7,Qg=300,ca=301,ua=302,jd=303,Wd=304,sc=306,Xd=1e3,os=1001,qd=1002,mi=1003,Uy=1004,Tl=1005,Ei=1006,Yu=1007,ls=1008,Zi=1009,Jg=1010,ev=1011,co=1012,Nf=1013,us=1014,$i=1015,po=1016,Lf=1017,Df=1018,da=1020,tv=35902,nv=1021,iv=1022,fi=1023,rv=1024,sv=1025,ra=1026,fa=1027,av=1028,If=1029,ov=1030,Uf=1031,Ff=1033,ql=33776,$l=33777,Yl=33778,Kl=33779,$d=35840,Yd=35841,Kd=35842,Zd=35843,Qd=36196,Jd=37492,ef=37496,tf=37808,nf=37809,rf=37810,sf=37811,af=37812,of=37813,lf=37814,cf=37815,uf=37816,df=37817,ff=37818,hf=37819,pf=37820,mf=37821,Zl=36492,gf=36494,vf=36495,lv=36283,xf=36284,_f=36285,yf=36286,Fy=3200,Oy=3201,ky=0,By=1,Ar="",Jn="srgb",ma="srgb-linear",ac="linear",Ct="srgb",Os=7680,Pm=519,zy=512,Hy=513,Vy=514,cv=515,Gy=516,jy=517,Wy=518,Xy=519,Nm=35044,Lm="300 es",Yi=2e3,tc=2001;class ga{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ku=Math.PI/180,Sf=180/Math.PI;function mo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[t&63|128]+hn[t>>8&255]+"-"+hn[t>>16&255]+hn[t>>24&255]+hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]).toLowerCase()}function Ln(r,e,t){return Math.max(e,Math.min(t,r))}function qy(r,e){return(r%e+e)%e}function Zu(r,e,t){return(1-t)*r+t*e}function Qa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(e=0,t=0){Nt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,o=e.elements;return this.x=o[0]*t+o[3]*s+o[6],this.y=o[1]*t+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*o+e.x,this.y=l*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,s,o,l,u,d,h,p){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,d,h,p)}set(e,t,s,o,l,u,d,h,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=d,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],d=s[3],h=s[6],p=s[1],g=s[4],_=s[7],y=s[2],M=s[5],T=s[8],A=o[0],S=o[3],x=o[6],I=o[1],L=o[4],R=o[7],Y=o[2],B=o[5],O=o[8];return l[0]=u*A+d*I+h*Y,l[3]=u*S+d*L+h*B,l[6]=u*x+d*R+h*O,l[1]=p*A+g*I+_*Y,l[4]=p*S+g*L+_*B,l[7]=p*x+g*R+_*O,l[2]=y*A+M*I+T*Y,l[5]=y*S+M*L+T*B,l[8]=y*x+M*R+T*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],g=e[8];return t*u*g-t*d*p-s*l*g+s*d*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],g=e[8],_=g*u-d*p,y=d*h-g*l,M=p*l-u*h,T=t*_+s*y+o*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/T;return e[0]=_*A,e[1]=(o*p-g*s)*A,e[2]=(d*s-o*u)*A,e[3]=y*A,e[4]=(g*t-o*h)*A,e[5]=(o*l-d*t)*A,e[6]=M*A,e[7]=(s*h-p*t)*A,e[8]=(u*t-s*l)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,o,l,u,d){const h=Math.cos(l),p=Math.sin(l);return this.set(s*h,s*p,-s*(h*u+p*d)+u+e,-o*p,o*h,-o*(-p*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Qu.makeScale(e,t)),this}rotate(e){return this.premultiply(Qu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<9;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qu=new ot;function uv(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function nc(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function $y(){const r=nc("canvas");return r.style.display="block",r}const Dm={};function so(r){r in Dm||(Dm[r]=!0,console.warn(r))}function Yy(r,e,t){return new Promise(function(s,o){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function Ky(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Zy(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _t={enabled:!0,workingColorSpace:ma,spaces:{},convert:function(r,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===Ct&&(r.r=Ki(r.r),r.g=Ki(r.g),r.b=Ki(r.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===Ct&&(r.r=sa(r.r),r.g=sa(r.g),r.b=sa(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ar?ac:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,t){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function sa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const Im=[.64,.33,.3,.6,.15,.06],Um=[.2126,.7152,.0722],Fm=[.3127,.329],Om=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),km=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_t.define({[ma]:{primaries:Im,whitePoint:Fm,transfer:ac,toXYZ:Om,fromXYZ:km,luminanceCoefficients:Um,workingColorSpaceConfig:{unpackColorSpace:Jn},outputColorSpaceConfig:{drawingBufferColorSpace:Jn}},[Jn]:{primaries:Im,whitePoint:Fm,transfer:Ct,toXYZ:Om,fromXYZ:km,luminanceCoefficients:Um,outputColorSpaceConfig:{drawingBufferColorSpace:Jn}}});let ks;class Qy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ks===void 0&&(ks=nc("canvas")),ks.width=e.width,ks.height=e.height;const s=ks.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),t=ks}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nc("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=Ki(l[u]/255)*255;return s.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Ki(t[s]/255)*255):t[s]=Ki(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Jy=0;class dv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Jy++}),this.uuid=mo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Ju(o[u].image)):l.push(Ju(o[u]))}else l=Ju(o);s.url=l}return t||(e.images[this.uuid]=s),s}}function Ju(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let eS=0;class In extends ga{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,s=os,o=os,l=Ei,u=ls,d=fi,h=Zi,p=In.DEFAULT_ANISOTROPY,g=Ar){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:eS++}),this.uuid=mo(),this.name="",this.source=new dv(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Qg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xd:e.x=e.x-Math.floor(e.x);break;case os:e.x=e.x<0?0:1;break;case qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xd:e.y=e.y-Math.floor(e.y);break;case os:e.y=e.y<0?0:1;break;case qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=Qg;In.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,t=0,s=0,o=1){Gt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,o){return this.x=e,this.y=t,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,o,l;const h=e.elements,p=h[0],g=h[4],_=h[8],y=h[1],M=h[5],T=h[9],A=h[2],S=h[6],x=h[10];if(Math.abs(g-y)<.01&&Math.abs(_-A)<.01&&Math.abs(T-S)<.01){if(Math.abs(g+y)<.1&&Math.abs(_+A)<.1&&Math.abs(T+S)<.1&&Math.abs(p+M+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const L=(p+1)/2,R=(M+1)/2,Y=(x+1)/2,B=(g+y)/4,O=(_+A)/4,X=(T+S)/4;return L>R&&L>Y?L<.01?(s=0,o=.707106781,l=.707106781):(s=Math.sqrt(L),o=B/s,l=O/s):R>Y?R<.01?(s=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),s=B/o,l=X/o):Y<.01?(s=.707106781,o=.707106781,l=0):(l=Math.sqrt(Y),s=O/l,o=X/l),this.set(s,o,l,t),this}let I=Math.sqrt((S-T)*(S-T)+(_-A)*(_-A)+(y-g)*(y-g));return Math.abs(I)<.001&&(I=1),this.x=(S-T)/I,this.y=(_-A)/I,this.z=(y-g)/I,this.w=Math.acos((p+M+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class tS extends ga{constructor(e=1,t=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);const o={width:e,height:t,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const l=new In(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);l.flipY=!1,l.generateMipmaps=s.generateMipmaps,l.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dv(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ds extends tS{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class fv extends In{constructor(e=null,t=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class nS extends In{constructor(e=null,t=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:o},this.magFilter=mi,this.minFilter=mi,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class go{constructor(e=0,t=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=o}static slerpFlat(e,t,s,o,l,u,d){let h=s[o+0],p=s[o+1],g=s[o+2],_=s[o+3];const y=l[u+0],M=l[u+1],T=l[u+2],A=l[u+3];if(d===0){e[t+0]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(d===1){e[t+0]=y,e[t+1]=M,e[t+2]=T,e[t+3]=A;return}if(_!==A||h!==y||p!==M||g!==T){let S=1-d;const x=h*y+p*M+g*T+_*A,I=x>=0?1:-1,L=1-x*x;if(L>Number.EPSILON){const Y=Math.sqrt(L),B=Math.atan2(Y,x*I);S=Math.sin(S*B)/Y,d=Math.sin(d*B)/Y}const R=d*I;if(h=h*S+y*R,p=p*S+M*R,g=g*S+T*R,_=_*S+A*R,S===1-d){const Y=1/Math.sqrt(h*h+p*p+g*g+_*_);h*=Y,p*=Y,g*=Y,_*=Y}}e[t]=h,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,s,o,l,u){const d=s[o],h=s[o+1],p=s[o+2],g=s[o+3],_=l[u],y=l[u+1],M=l[u+2],T=l[u+3];return e[t]=d*T+g*_+h*M-p*y,e[t+1]=h*T+g*y+p*_-d*M,e[t+2]=p*T+g*M+d*y-h*_,e[t+3]=g*T-d*_-h*y-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,o){return this._x=e,this._y=t,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(s/2),g=d(o/2),_=d(l/2),y=h(s/2),M=h(o/2),T=h(l/2);switch(u){case"XYZ":this._x=y*g*_+p*M*T,this._y=p*M*_-y*g*T,this._z=p*g*T+y*M*_,this._w=p*g*_-y*M*T;break;case"YXZ":this._x=y*g*_+p*M*T,this._y=p*M*_-y*g*T,this._z=p*g*T-y*M*_,this._w=p*g*_+y*M*T;break;case"ZXY":this._x=y*g*_-p*M*T,this._y=p*M*_+y*g*T,this._z=p*g*T+y*M*_,this._w=p*g*_-y*M*T;break;case"ZYX":this._x=y*g*_-p*M*T,this._y=p*M*_+y*g*T,this._z=p*g*T-y*M*_,this._w=p*g*_+y*M*T;break;case"YZX":this._x=y*g*_+p*M*T,this._y=p*M*_+y*g*T,this._z=p*g*T-y*M*_,this._w=p*g*_-y*M*T;break;case"XZY":this._x=y*g*_-p*M*T,this._y=p*M*_-y*g*T,this._z=p*g*T+y*M*_,this._w=p*g*_+y*M*T;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],o=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],g=t[6],_=t[10],y=s+d+_;if(y>0){const M=.5/Math.sqrt(y+1);this._w=.25/M,this._x=(g-h)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(g-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+g)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(h+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,t/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,o=e._y,l=e._z,u=e._w,d=t._x,h=t._y,p=t._z,g=t._w;return this._x=s*g+u*d+o*p-l*h,this._y=o*g+u*h+l*d-s*p,this._z=l*g+u*p+s*h-o*d,this._w=u*g-s*d-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,o=this._y,l=this._z,u=this._w;let d=u*e._w+s*e._x+o*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=s,this._y=o,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-t;return this._w=M*u+t*this._w,this._x=M*s+t*this._x,this._y=M*o+t*this._y,this._z=M*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),g=Math.atan2(p,d),_=Math.sin((1-t)*g)/p,y=Math.sin(t*g)/p;return this._w=u*_+this._w*y,this._x=s*_+this._x*y,this._y=o*_+this._y*y,this._z=l*_+this._z*y,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,s=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*o,this.y=l[1]*t+l[4]*s+l[7]*o,this.z=l[2]*t+l[5]*s+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,o=this.z,l=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*o-d*s),g=2*(d*t-l*o),_=2*(l*s-u*t);return this.x=t+h*p+u*_-d*g,this.y=s+h*g+d*p-l*_,this.z=o+h*_+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*o,this.y=l[1]*t+l[5]*s+l[9]*o,this.z=l[2]*t+l[6]*s+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(t,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,o=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=o*h-l*d,this.y=l*u-s*h,this.z=s*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return ed.copy(this).projectOnVector(e),this.sub(ed)}reflect(e){return this.sub(ed.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return t*t+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const o=Math.sin(t)*e;return this.x=o*Math.sin(s),this.y=Math.cos(t)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ed=new ie,Bm=new go;class vo{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,li):li.fromBufferAttribute(l,u),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),wl.copy(s.boundingBox)),wl.applyMatrix4(e.matrixWorld),this.union(wl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),Al.subVectors(this.max,Ja),Bs.subVectors(e.a,Ja),zs.subVectors(e.b,Ja),Hs.subVectors(e.c,Ja),yr.subVectors(zs,Bs),Sr.subVectors(Hs,zs),Zr.subVectors(Bs,Hs);let t=[0,-yr.z,yr.y,0,-Sr.z,Sr.y,0,-Zr.z,Zr.y,yr.z,0,-yr.x,Sr.z,0,-Sr.x,Zr.z,0,-Zr.x,-yr.y,yr.x,0,-Sr.y,Sr.x,0,-Zr.y,Zr.x,0];return!td(t,Bs,zs,Hs,Al)||(t=[1,0,0,0,1,0,0,0,1],!td(t,Bs,zs,Hs,Al))?!1:(bl.crossVectors(yr,Sr),t=[bl.x,bl.y,bl.z],td(t,Bs,zs,Hs,Al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],li=new ie,wl=new vo,Bs=new ie,zs=new ie,Hs=new ie,yr=new ie,Sr=new ie,Zr=new ie,Ja=new ie,Al=new ie,bl=new ie,Qr=new ie;function td(r,e,t,s,o){for(let l=0,u=r.length-3;l<=u;l+=3){Qr.fromArray(r,l);const d=o.x*Math.abs(Qr.x)+o.y*Math.abs(Qr.y)+o.z*Math.abs(Qr.z),h=e.dot(Qr),p=t.dot(Qr),g=s.dot(Qr);if(Math.max(-Math.max(h,p,g),Math.min(h,p,g))>d)return!1}return!0}const iS=new vo,eo=new ie,nd=new ie;class Of{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):iS.setFromPoints(e).getCenter(s);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),o=(s-this.radius)*.5;this.center.addScaledVector(eo,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(nd)),this.expandByPoint(eo.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new ie,id=new ie,Cl=new ie,Mr=new ie,rd=new ie,Rl=new ie,sd=new ie;class rS{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,s,o){id.copy(e).add(t).multiplyScalar(.5),Cl.copy(t).sub(e).normalize(),Mr.copy(this.origin).sub(id);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Cl),d=Mr.dot(this.direction),h=-Mr.dot(Cl),p=Mr.lengthSq(),g=Math.abs(1-u*u);let _,y,M,T;if(g>0)if(_=u*h-d,y=u*d-h,T=l*g,_>=0)if(y>=-T)if(y<=T){const A=1/g;_*=A,y*=A,M=_*(_+u*y+2*d)+y*(u*_+y+2*h)+p}else y=l,_=Math.max(0,-(u*y+d)),M=-_*_+y*(y+2*h)+p;else y=-l,_=Math.max(0,-(u*y+d)),M=-_*_+y*(y+2*h)+p;else y<=-T?(_=Math.max(0,-(-u*l+d)),y=_>0?-l:Math.min(Math.max(-l,-h),l),M=-_*_+y*(y+2*h)+p):y<=T?(_=0,y=Math.min(Math.max(-l,-h),l),M=y*(y+2*h)+p):(_=Math.max(0,-(u*l+d)),y=_>0?l:Math.min(Math.max(-l,-h),l),M=-_*_+y*(y+2*h)+p);else y=u>0?-l:l,_=Math.max(0,-(u*y+d)),M=-_*_+y*(y+2*h)+p;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(id).addScaledVector(Cl,y),M}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const s=Hi.dot(this.direction),o=Hi.dot(Hi)-s*s,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=s-u,h=s+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,o,l,u,d,h;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,y=this.origin;return p>=0?(s=(e.min.x-y.x)*p,o=(e.max.x-y.x)*p):(s=(e.max.x-y.x)*p,o=(e.min.x-y.x)*p),g>=0?(l=(e.min.y-y.y)*g,u=(e.max.y-y.y)*g):(l=(e.max.y-y.y)*g,u=(e.min.y-y.y)*g),s>u||l>o||((l>s||isNaN(s))&&(s=l),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-y.z)*_,h=(e.max.z-y.z)*_):(d=(e.max.z-y.z)*_,h=(e.min.z-y.z)*_),s>h||d>o)||((d>s||s!==s)&&(s=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,s,o,l){rd.subVectors(t,e),Rl.subVectors(s,e),sd.crossVectors(rd,Rl);let u=this.direction.dot(sd),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;Mr.subVectors(this.origin,e);const h=d*this.direction.dot(Rl.crossVectors(Mr,Rl));if(h<0)return null;const p=d*this.direction.dot(rd.cross(Mr));if(p<0||h+p>u)return null;const g=-d*Mr.dot(sd);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,t,s,o,l,u,d,h,p,g,_,y,M,T,A,S){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,o,l,u,d,h,p,g,_,y,M,T,A,S)}set(e,t,s,o,l,u,d,h,p,g,_,y,M,T,A,S){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=o,x[1]=l,x[5]=u,x[9]=d,x[13]=h,x[2]=p,x[6]=g,x[10]=_,x[14]=y,x[3]=M,x[7]=T,x[11]=A,x[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,o=1/Vs.setFromMatrixColumn(e,0).length(),l=1/Vs.setFromMatrixColumn(e,1).length(),u=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*o,t[1]=s[1]*o,t[2]=s[2]*o,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,o=e.y,l=e.z,u=Math.cos(s),d=Math.sin(s),h=Math.cos(o),p=Math.sin(o),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const y=u*g,M=u*_,T=d*g,A=d*_;t[0]=h*g,t[4]=-h*_,t[8]=p,t[1]=M+T*p,t[5]=y-A*p,t[9]=-d*h,t[2]=A-y*p,t[6]=T+M*p,t[10]=u*h}else if(e.order==="YXZ"){const y=h*g,M=h*_,T=p*g,A=p*_;t[0]=y+A*d,t[4]=T*d-M,t[8]=u*p,t[1]=u*_,t[5]=u*g,t[9]=-d,t[2]=M*d-T,t[6]=A+y*d,t[10]=u*h}else if(e.order==="ZXY"){const y=h*g,M=h*_,T=p*g,A=p*_;t[0]=y-A*d,t[4]=-u*_,t[8]=T+M*d,t[1]=M+T*d,t[5]=u*g,t[9]=A-y*d,t[2]=-u*p,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const y=u*g,M=u*_,T=d*g,A=d*_;t[0]=h*g,t[4]=T*p-M,t[8]=y*p+A,t[1]=h*_,t[5]=A*p+y,t[9]=M*p-T,t[2]=-p,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const y=u*h,M=u*p,T=d*h,A=d*p;t[0]=h*g,t[4]=A-y*_,t[8]=T*_+M,t[1]=_,t[5]=u*g,t[9]=-d*g,t[2]=-p*g,t[6]=M*_+T,t[10]=y-A*_}else if(e.order==="XZY"){const y=u*h,M=u*p,T=d*h,A=d*p;t[0]=h*g,t[4]=-_,t[8]=p*g,t[1]=y*_+A,t[5]=u*g,t[9]=M*_-T,t[2]=T*_-M,t[6]=d*g,t[10]=A*_+y}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(sS,e,aS)}lookAt(e,t,s){const o=this.elements;return Bn.subVectors(e,t),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),Er.crossVectors(s,Bn),Er.lengthSq()===0&&(Math.abs(s.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),Er.crossVectors(s,Bn)),Er.normalize(),Pl.crossVectors(Bn,Er),o[0]=Er.x,o[4]=Pl.x,o[8]=Bn.x,o[1]=Er.y,o[5]=Pl.y,o[9]=Bn.y,o[2]=Er.z,o[6]=Pl.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,o=t.elements,l=this.elements,u=s[0],d=s[4],h=s[8],p=s[12],g=s[1],_=s[5],y=s[9],M=s[13],T=s[2],A=s[6],S=s[10],x=s[14],I=s[3],L=s[7],R=s[11],Y=s[15],B=o[0],O=o[4],X=o[8],P=o[12],C=o[1],z=o[5],oe=o[9],te=o[13],fe=o[2],pe=o[6],ae=o[10],ce=o[14],k=o[3],le=o[7],se=o[11],U=o[15];return l[0]=u*B+d*C+h*fe+p*k,l[4]=u*O+d*z+h*pe+p*le,l[8]=u*X+d*oe+h*ae+p*se,l[12]=u*P+d*te+h*ce+p*U,l[1]=g*B+_*C+y*fe+M*k,l[5]=g*O+_*z+y*pe+M*le,l[9]=g*X+_*oe+y*ae+M*se,l[13]=g*P+_*te+y*ce+M*U,l[2]=T*B+A*C+S*fe+x*k,l[6]=T*O+A*z+S*pe+x*le,l[10]=T*X+A*oe+S*ae+x*se,l[14]=T*P+A*te+S*ce+x*U,l[3]=I*B+L*C+R*fe+Y*k,l[7]=I*O+L*z+R*pe+Y*le,l[11]=I*X+L*oe+R*ae+Y*se,l[15]=I*P+L*te+R*ce+Y*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],o=e[8],l=e[12],u=e[1],d=e[5],h=e[9],p=e[13],g=e[2],_=e[6],y=e[10],M=e[14],T=e[3],A=e[7],S=e[11],x=e[15];return T*(+l*h*_-o*p*_-l*d*y+s*p*y+o*d*M-s*h*M)+A*(+t*h*M-t*p*y+l*u*y-o*u*M+o*p*g-l*h*g)+S*(+t*p*_-t*d*M-l*u*_+s*u*M+l*d*g-s*p*g)+x*(-o*d*g-t*h*_+t*d*y+o*u*_-s*u*y+s*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],o=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],g=e[8],_=e[9],y=e[10],M=e[11],T=e[12],A=e[13],S=e[14],x=e[15],I=_*S*p-A*y*p+A*h*M-d*S*M-_*h*x+d*y*x,L=T*y*p-g*S*p-T*h*M+u*S*M+g*h*x-u*y*x,R=g*A*p-T*_*p+T*d*M-u*A*M-g*d*x+u*_*x,Y=T*_*h-g*A*h-T*d*y+u*A*y+g*d*S-u*_*S,B=t*I+s*L+o*R+l*Y;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=I*O,e[1]=(A*y*l-_*S*l-A*o*M+s*S*M+_*o*x-s*y*x)*O,e[2]=(d*S*l-A*h*l+A*o*p-s*S*p-d*o*x+s*h*x)*O,e[3]=(_*h*l-d*y*l-_*o*p+s*y*p+d*o*M-s*h*M)*O,e[4]=L*O,e[5]=(g*S*l-T*y*l+T*o*M-t*S*M-g*o*x+t*y*x)*O,e[6]=(T*h*l-u*S*l-T*o*p+t*S*p+u*o*x-t*h*x)*O,e[7]=(u*y*l-g*h*l+g*o*p-t*y*p-u*o*M+t*h*M)*O,e[8]=R*O,e[9]=(T*_*l-g*A*l-T*s*M+t*A*M+g*s*x-t*_*x)*O,e[10]=(u*A*l-T*d*l+T*s*p-t*A*p-u*s*x+t*d*x)*O,e[11]=(g*d*l-u*_*l-g*s*p+t*_*p+u*s*M-t*d*M)*O,e[12]=Y*O,e[13]=(g*A*o-T*_*o+T*s*y-t*A*y-g*s*S+t*_*S)*O,e[14]=(T*d*o-u*A*o-T*s*h+t*A*h+u*s*S-t*d*S)*O,e[15]=(u*_*o-g*d*o+g*s*h-t*_*h-u*s*y+t*d*y)*O,this}scale(e){const t=this.elements,s=e.x,o=e.y,l=e.z;return t[0]*=s,t[4]*=o,t[8]*=l,t[1]*=s,t[5]*=o,t[9]*=l,t[2]*=s,t[6]*=o,t[10]*=l,t[3]*=s,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,o))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),o=Math.sin(t),l=1-s,u=e.x,d=e.y,h=e.z,p=l*u,g=l*d;return this.set(p*u+s,p*d-o*h,p*h+o*d,0,p*d+o*h,g*d+s,g*h-o*u,0,p*h-o*d,g*h+o*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,o,l,u){return this.set(1,s,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,s){const o=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,p=l+l,g=u+u,_=d+d,y=l*p,M=l*g,T=l*_,A=u*g,S=u*_,x=d*_,I=h*p,L=h*g,R=h*_,Y=s.x,B=s.y,O=s.z;return o[0]=(1-(A+x))*Y,o[1]=(M+R)*Y,o[2]=(T-L)*Y,o[3]=0,o[4]=(M-R)*B,o[5]=(1-(y+x))*B,o[6]=(S+I)*B,o[7]=0,o[8]=(T+L)*O,o[9]=(S-I)*O,o[10]=(1-(y+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,s){const o=this.elements;let l=Vs.set(o[0],o[1],o[2]).length();const u=Vs.set(o[4],o[5],o[6]).length(),d=Vs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],ci.copy(this);const p=1/l,g=1/u,_=1/d;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=g,ci.elements[5]*=g,ci.elements[6]*=g,ci.elements[8]*=_,ci.elements[9]*=_,ci.elements[10]*=_,t.setFromRotationMatrix(ci),s.x=l,s.y=u,s.z=d,this}makePerspective(e,t,s,o,l,u,d=Yi){const h=this.elements,p=2*l/(t-e),g=2*l/(s-o),_=(t+e)/(t-e),y=(s+o)/(s-o);let M,T;if(d===Yi)M=-(u+l)/(u-l),T=-2*u*l/(u-l);else if(d===tc)M=-u/(u-l),T=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=p,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=g,h[9]=y,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,o,l,u,d=Yi){const h=this.elements,p=1/(t-e),g=1/(s-o),_=1/(u-l),y=(t+e)*p,M=(s+o)*g;let T,A;if(d===Yi)T=(u+l)*_,A=-2*_;else if(d===tc)T=l*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-y,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=A,h[14]=-T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let o=0;o<16;o++)if(t[o]!==s[o])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Vs=new ie,ci=new qt,sS=new ie(0,0,0),aS=new ie(1,1,1),Er=new ie,Pl=new ie,Bn=new ie,zm=new qt,Hm=new go;class Qi{constructor(e=0,t=0,s=0,o=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,o=this._order){return this._x=e,this._y=t,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],h=o[1],p=o[5],g=o[9],_=o[2],y=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(y,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(y,-1,1)),Math.abs(y)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-Ln(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(y,M),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(y,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zm,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hm.setFromEuler(this),this.setFromQuaternion(Hm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class hv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let oS=0;const Vm=new ie,Gs=new go,Vi=new qt,Nl=new ie,to=new ie,lS=new ie,cS=new go,Gm=new ie(1,0,0),jm=new ie(0,1,0),Wm=new ie(0,0,1),Xm={type:"added"},uS={type:"removed"},js={type:"childadded",child:null},ad={type:"childremoved",child:null};class Vn extends ga{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:oS++}),this.uuid=mo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new ie,t=new Qi,s=new go,o=new ie(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new ot}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(Gm,e)}rotateY(e){return this.rotateOnAxis(jm,e)}rotateZ(e){return this.rotateOnAxis(Wm,e)}translateOnAxis(e,t){return Vm.copy(e).applyQuaternion(this.quaternion),this.position.add(Vm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gm,e)}translateY(e){return this.translateOnAxis(jm,e)}translateZ(e){return this.translateOnAxis(Wm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?Nl.copy(e):Nl.set(e,t,s);const o=this.parent;this.updateWorldMatrix(!0,!1),to.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(to,Nl,this.up):Vi.lookAt(Nl,to,this.up),this.quaternion.setFromRotationMatrix(Vi),o&&(Vi.extractRotation(o.matrixWorld),Gs.setFromRotationMatrix(Vi),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xm),js.child=e,this.dispatchEvent(js),js.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(uS),ad.child=e,this.dispatchEvent(ad),ad.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xm),js.child=e,this.dispatchEvent(js),js.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,e,lS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(to,cS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,o=t.length;s<o;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,g=h.length;p<g;p++){const _=h[p];l(e.shapes,_)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),y=u(e.skeletons),M=u(e.animations),T=u(e.nodes);d.length>0&&(s.geometries=d),h.length>0&&(s.materials=h),p.length>0&&(s.textures=p),g.length>0&&(s.images=g),_.length>0&&(s.shapes=_),y.length>0&&(s.skeletons=y),M.length>0&&(s.animations=M),T.length>0&&(s.nodes=T)}return s.object=o,s;function u(d){const h=[];for(const p in d){const g=d[p];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Vn.DEFAULT_UP=new ie(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new ie,Gi=new ie,od=new ie,ji=new ie,Ws=new ie,Xs=new ie,qm=new ie,ld=new ie,cd=new ie,ud=new ie,dd=new Gt,fd=new Gt,hd=new Gt;class di{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,o){o.subVectors(s,t),ui.subVectors(e,t),o.cross(ui);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,s,o,l){ui.subVectors(o,t),Gi.subVectors(s,t),od.subVectors(e,t);const u=ui.dot(ui),d=ui.dot(Gi),h=ui.dot(od),p=Gi.dot(Gi),g=Gi.dot(od),_=u*p-d*d;if(_===0)return l.set(0,0,0),null;const y=1/_,M=(p*h-d*g)*y,T=(u*g-d*h)*y;return l.set(1-M-T,T,M)}static containsPoint(e,t,s,o){return this.getBarycoord(e,t,s,o,ji)===null?!1:ji.x>=0&&ji.y>=0&&ji.x+ji.y<=1}static getInterpolation(e,t,s,o,l,u,d,h){return this.getBarycoord(e,t,s,o,ji)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,ji.x),h.addScaledVector(u,ji.y),h.addScaledVector(d,ji.z),h)}static getInterpolatedAttribute(e,t,s,o,l,u){return dd.setScalar(0),fd.setScalar(0),hd.setScalar(0),dd.fromBufferAttribute(e,t),fd.fromBufferAttribute(e,s),hd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(dd,l.x),u.addScaledVector(fd,l.y),u.addScaledVector(hd,l.z),u}static isFrontFacing(e,t,s,o){return ui.subVectors(s,t),Gi.subVectors(e,t),ui.cross(Gi).dot(o)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,o){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,s,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),ui.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,o,l){return di.getInterpolation(e,this.a,this.b,this.c,t,s,o,l)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,o=this.b,l=this.c;let u,d;Ws.subVectors(o,s),Xs.subVectors(l,s),ld.subVectors(e,s);const h=Ws.dot(ld),p=Xs.dot(ld);if(h<=0&&p<=0)return t.copy(s);cd.subVectors(e,o);const g=Ws.dot(cd),_=Xs.dot(cd);if(g>=0&&_<=g)return t.copy(o);const y=h*_-g*p;if(y<=0&&h>=0&&g<=0)return u=h/(h-g),t.copy(s).addScaledVector(Ws,u);ud.subVectors(e,l);const M=Ws.dot(ud),T=Xs.dot(ud);if(T>=0&&M<=T)return t.copy(l);const A=M*p-h*T;if(A<=0&&p>=0&&T<=0)return d=p/(p-T),t.copy(s).addScaledVector(Xs,d);const S=g*T-M*_;if(S<=0&&_-g>=0&&M-T>=0)return qm.subVectors(l,o),d=(_-g)/(_-g+(M-T)),t.copy(o).addScaledVector(qm,d);const x=1/(S+A+y);return u=A*x,d=y*x,t.copy(s).addScaledVector(Ws,u).addScaledVector(Xs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const pv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Tr={h:0,s:0,l:0},Ll={h:0,s:0,l:0};function pd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Rt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Jn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,s,o=_t.workingColorSpace){return this.r=e,this.g=t,this.b=s,_t.toWorkingColorSpace(this,o),this}setHSL(e,t,s,o=_t.workingColorSpace){if(e=qy(e,1),t=Ln(t,0,1),s=Ln(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=pd(u,l,e+1/3),this.g=pd(u,l,e),this.b=pd(u,l,e-1/3)}return _t.toWorkingColorSpace(this,o),this}setStyle(e,t=Jn){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Jn){const s=pv[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=sa(e.r),this.g=sa(e.g),this.b=sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Jn){return _t.fromWorkingColorSpace(pn.copy(this),e),Math.round(Ln(pn.r*255,0,255))*65536+Math.round(Ln(pn.g*255,0,255))*256+Math.round(Ln(pn.b*255,0,255))}getHexString(e=Jn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(pn.copy(this),t);const s=pn.r,o=pn.g,l=pn.b,u=Math.max(s,o,l),d=Math.min(s,o,l);let h,p;const g=(d+u)/2;if(d===u)h=0,p=0;else{const _=u-d;switch(p=g<=.5?_/(u+d):_/(2-u-d),u){case s:h=(o-l)/_+(o<l?6:0);break;case o:h=(l-s)/_+2;break;case l:h=(s-o)/_+4;break}h/=6}return e.h=h,e.s=p,e.l=g,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Jn){_t.fromWorkingColorSpace(pn.copy(this),e);const t=pn.r,s=pn.g,o=pn.b;return e!==Jn?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,t,s){return this.getHSL(Tr),this.setHSL(Tr.h+e,Tr.s+t,Tr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(Tr),e.getHSL(Ll);const s=Zu(Tr.h,Ll.h,t),o=Zu(Tr.s,Ll.s,t),l=Zu(Tr.l,Ll.l,t);return this.setHSL(s,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*o,this.g=l[1]*t+l[4]*s+l[7]*o,this.b=l[2]*t+l[5]*s+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Rt;Rt.NAMES=pv;let dS=0;class oc extends ga{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=mo(),this.name="",this.blending=ia,this.side=Lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ud,this.blendDst=Fd,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=la,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==ia&&(s.blending=this.blending),this.side!==Lr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==Ud&&(s.blendSrc=this.blendSrc),this.blendDst!==Fd&&(s.blendDst=this.blendDst),this.blendEquation!==ss&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==la&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const o=t.length;s=new Array(o);for(let l=0;l!==o;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class lc extends oc{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=Zg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new ie,Dl=new Nt;class Ti{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Nm,this.updateRanges=[],this.gpuType=$i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)Dl.fromBufferAttribute(this,t),Dl.applyMatrix3(e),this.setXY(t,Dl.x,Dl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=Qa(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Pn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,o){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),s=Pn(s,this.array),o=Pn(o,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,t,s,o,l){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),s=Pn(s,this.array),o=Pn(o,this.array),l=Pn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nm&&(e.usage=this.usage),e}}class mv extends Ti{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class gv extends Ti{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class wi extends Ti{constructor(e,t,s){super(new Float32Array(e),t,s)}}let fS=0;const Zn=new qt,md=new Vn,qs=new ie,zn=new vo,no=new vo,rn=new ie;class Ur extends ga{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=mo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(uv(e)?gv:mv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ot().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,t,s){return Zn.makeTranslation(e,t,s),this.applyMatrix4(Zn),this}scale(e,t,s){return Zn.makeScale(e,t,s),this.applyMatrix4(Zn),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qs).negate(),this.translate(qs.x,qs.y,qs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new wi(s,3))}else{for(let s=0,o=t.count;s<o;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];zn.setFromBufferAttribute(l),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Of);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];no.setFromBufferAttribute(d),this.morphTargetsRelative?(rn.addVectors(zn.min,no.min),zn.expandByPoint(rn),rn.addVectors(zn.max,no.max),zn.expandByPoint(rn)):(zn.expandByPoint(no.min),zn.expandByPoint(no.max))}zn.getCenter(s);let o=0;for(let l=0,u=e.count;l<u;l++)rn.fromBufferAttribute(e,l),o=Math.max(o,s.distanceToSquared(rn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,g=d.count;p<g;p++)rn.fromBufferAttribute(d,p),h&&(qs.fromBufferAttribute(e,p),rn.add(qs)),o=Math.max(o,s.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ti(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let X=0;X<s.count;X++)d[X]=new ie,h[X]=new ie;const p=new ie,g=new ie,_=new ie,y=new Nt,M=new Nt,T=new Nt,A=new ie,S=new ie;function x(X,P,C){p.fromBufferAttribute(s,X),g.fromBufferAttribute(s,P),_.fromBufferAttribute(s,C),y.fromBufferAttribute(l,X),M.fromBufferAttribute(l,P),T.fromBufferAttribute(l,C),g.sub(p),_.sub(p),M.sub(y),T.sub(y);const z=1/(M.x*T.y-T.x*M.y);isFinite(z)&&(A.copy(g).multiplyScalar(T.y).addScaledVector(_,-M.y).multiplyScalar(z),S.copy(_).multiplyScalar(M.x).addScaledVector(g,-T.x).multiplyScalar(z),d[X].add(A),d[P].add(A),d[C].add(A),h[X].add(S),h[P].add(S),h[C].add(S))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let X=0,P=I.length;X<P;++X){const C=I[X],z=C.start,oe=C.count;for(let te=z,fe=z+oe;te<fe;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new ie,R=new ie,Y=new ie,B=new ie;function O(X){Y.fromBufferAttribute(o,X),B.copy(Y);const P=d[X];L.copy(P),L.sub(Y.multiplyScalar(Y.dot(P))).normalize(),R.crossVectors(B,P);const z=R.dot(h[X])<0?-1:1;u.setXYZW(X,L.x,L.y,L.z,z)}for(let X=0,P=I.length;X<P;++X){const C=I[X],z=C.start,oe=C.count;for(let te=z,fe=z+oe;te<fe;te+=3)O(e.getX(te+0)),O(e.getX(te+1)),O(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Ti(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let y=0,M=s.count;y<M;y++)s.setXYZ(y,0,0,0);const o=new ie,l=new ie,u=new ie,d=new ie,h=new ie,p=new ie,g=new ie,_=new ie;if(e)for(let y=0,M=e.count;y<M;y+=3){const T=e.getX(y+0),A=e.getX(y+1),S=e.getX(y+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,A),u.fromBufferAttribute(t,S),g.subVectors(u,l),_.subVectors(o,l),g.cross(_),d.fromBufferAttribute(s,T),h.fromBufferAttribute(s,A),p.fromBufferAttribute(s,S),d.add(g),h.add(g),p.add(g),s.setXYZ(T,d.x,d.y,d.z),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(S,p.x,p.y,p.z)}else for(let y=0,M=t.count;y<M;y+=3)o.fromBufferAttribute(t,y+0),l.fromBufferAttribute(t,y+1),u.fromBufferAttribute(t,y+2),g.subVectors(u,l),_.subVectors(o,l),g.cross(_),s.setXYZ(y+0,g.x,g.y,g.z),s.setXYZ(y+1,g.x,g.y,g.z),s.setXYZ(y+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)rn.fromBufferAttribute(e,t),rn.normalize(),e.setXYZ(t,rn.x,rn.y,rn.z)}toNonIndexed(){function e(d,h){const p=d.array,g=d.itemSize,_=d.normalized,y=new p.constructor(h.length*g);let M=0,T=0;for(let A=0,S=h.length;A<S;A++){d.isInterleavedBufferAttribute?M=h[A]*d.data.stride+d.offset:M=h[A]*g;for(let x=0;x<g;x++)y[T++]=p[M++]}return new Ti(y,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ur,s=this.index.array,o=this.attributes;for(const d in o){const h=o[d],p=e(h,s);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let g=0,_=p.length;g<_;g++){const y=p[g],M=e(y,s);h.push(M)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const p=s[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],g=[];for(let _=0,y=p.length;_<y;_++){const M=p[_];g.push(M.toJSON(e.data))}g.length>0&&(o[h]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(t));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let y=0,M=_.length;y<M;y++)g.push(_[y].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const $m=new qt,Jr=new rS,Il=new Of,Ym=new ie,Ul=new ie,Fl=new ie,Ol=new ie,gd=new ie,kl=new ie,Km=new ie,Bl=new ie;class hi extends Vn{constructor(e=new Ur,t=new lc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const o=t[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const s=this.geometry,o=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){kl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const g=d[h],_=l[h];g!==0&&(gd.fromBufferAttribute(_,e),u?kl.addScaledVector(gd,g):kl.addScaledVector(gd.sub(t),g))}t.add(kl)}return t}raycast(e,t){const s=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Il.copy(s.boundingSphere),Il.applyMatrix4(l),Jr.copy(e.ray).recast(e.near),!(Il.containsPoint(Jr.origin)===!1&&(Jr.intersectSphere(Il,Ym)===null||Jr.origin.distanceToSquared(Ym)>(e.far-e.near)**2))&&($m.copy(l).invert(),Jr.copy(e.ray).applyMatrix4($m),!(s.boundingBox!==null&&Jr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Jr)))}_computeIntersections(e,t,s){let o;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,y=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,A=y.length;T<A;T++){const S=y[T],x=u[S.materialIndex],I=Math.max(S.start,M.start),L=Math.min(d.count,Math.min(S.start+S.count,M.start+M.count));for(let R=I,Y=L;R<Y;R+=3){const B=d.getX(R),O=d.getX(R+1),X=d.getX(R+2);o=zl(this,x,e,s,p,g,_,B,O,X),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let S=T,x=A;S<x;S+=3){const I=d.getX(S),L=d.getX(S+1),R=d.getX(S+2);o=zl(this,u,e,s,p,g,_,I,L,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,A=y.length;T<A;T++){const S=y[T],x=u[S.materialIndex],I=Math.max(S.start,M.start),L=Math.min(h.count,Math.min(S.start+S.count,M.start+M.count));for(let R=I,Y=L;R<Y;R+=3){const B=R,O=R+1,X=R+2;o=zl(this,x,e,s,p,g,_,B,O,X),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=S.materialIndex,t.push(o))}}else{const T=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let S=T,x=A;S<x;S+=3){const I=S,L=S+1,R=S+2;o=zl(this,u,e,s,p,g,_,I,L,R),o&&(o.faceIndex=Math.floor(S/3),t.push(o))}}}}function hS(r,e,t,s,o,l,u,d){let h;if(e.side===Dn?h=s.intersectTriangle(u,l,o,!0,d):h=s.intersectTriangle(o,l,u,e.side===Lr,d),h===null)return null;Bl.copy(d),Bl.applyMatrix4(r.matrixWorld);const p=t.ray.origin.distanceTo(Bl);return p<t.near||p>t.far?null:{distance:p,point:Bl.clone(),object:r}}function zl(r,e,t,s,o,l,u,d,h,p){r.getVertexPosition(d,Ul),r.getVertexPosition(h,Fl),r.getVertexPosition(p,Ol);const g=hS(r,e,t,s,Ul,Fl,Ol,Km);if(g){const _=new ie;di.getBarycoord(Km,Ul,Fl,Ol,_),o&&(g.uv=di.getInterpolatedAttribute(o,d,h,p,_,new Nt)),l&&(g.uv1=di.getInterpolatedAttribute(l,d,h,p,_,new Nt)),u&&(g.normal=di.getInterpolatedAttribute(u,d,h,p,_,new ie),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const y={a:d,b:h,c:p,normal:new ie,materialIndex:0};di.getNormal(Ul,Fl,Ol,y.normal),g.face=y,g.barycoord=_}return g}class va extends Ur{constructor(e=1,t=1,s=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],g=[],_=[];let y=0,M=0;T("z","y","x",-1,-1,s,t,e,u,l,0),T("z","y","x",1,-1,s,t,-e,u,l,1),T("x","z","y",1,1,e,s,t,o,u,2),T("x","z","y",1,-1,e,s,-t,o,u,3),T("x","y","z",1,-1,e,t,s,o,l,4),T("x","y","z",-1,-1,e,t,-s,o,l,5),this.setIndex(h),this.setAttribute("position",new wi(p,3)),this.setAttribute("normal",new wi(g,3)),this.setAttribute("uv",new wi(_,2));function T(A,S,x,I,L,R,Y,B,O,X,P){const C=R/O,z=Y/X,oe=R/2,te=Y/2,fe=B/2,pe=O+1,ae=X+1;let ce=0,k=0;const le=new ie;for(let se=0;se<ae;se++){const U=se*z-te;for(let ne=0;ne<pe;ne++){const Ie=ne*C-oe;le[A]=Ie*I,le[S]=U*L,le[x]=fe,p.push(le.x,le.y,le.z),le[A]=0,le[S]=0,le[x]=B>0?1:-1,g.push(le.x,le.y,le.z),_.push(ne/O),_.push(1-se/X),ce+=1}}for(let se=0;se<X;se++)for(let U=0;U<O;U++){const ne=y+U+pe*se,Ie=y+U+pe*(se+1),Z=y+(U+1)+pe*(se+1),ue=y+(U+1)+pe*se;h.push(ne,Ie,ue),h.push(Ie,Z,ue),k+=6}d.addGroup(M,k,P),M+=k,y+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new va(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ha(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const o=r[t][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=o.clone():Array.isArray(o)?e[t][s]=o.slice():e[t][s]=o}}return e}function yn(r){const e={};for(let t=0;t<r.length;t++){const s=ha(r[t]);for(const o in s)e[o]=s[o]}return e}function pS(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function vv(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const mS={clone:ha,merge:yn};var gS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Dr extends oc{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=gS,this.fragmentShader=vS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=pS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class xv extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const wr=new ie,Zm=new Nt,Qm=new Nt;class Hn extends xv{constructor(e=50,t=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ku*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sf*2*Math.atan(Math.tan(Ku*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){wr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(wr.x,wr.y).multiplyScalar(-e/wr.z),wr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(wr.x,wr.y).multiplyScalar(-e/wr.z)}getViewSize(e,t){return this.getViewBounds(e,Zm,Qm),t.subVectors(Qm,Zm)}setViewOffset(e,t,s,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ku*.5*this.fov)/this.zoom,s=2*t,o=this.aspect*s,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*s/p,o*=u.width/h,s*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $s=-90,Ys=1;class xS extends Vn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Hn($s,Ys,e,t);o.layers=this.layers,this.add(o);const l=new Hn($s,Ys,e,t);l.layers=this.layers,this.add(l);const u=new Hn($s,Ys,e,t);u.layers=this.layers,this.add(u);const d=new Hn($s,Ys,e,t);d.layers=this.layers,this.add(d);const h=new Hn($s,Ys,e,t);h.layers=this.layers,this.add(h);const p=new Hn($s,Ys,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,o,l,u,d,h]=t;for(const p of t)this.remove(p);if(e===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===tc)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,g]=this.children,_=e.getRenderTarget(),y=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(t,l),e.setRenderTarget(s,1,o),e.render(t,u),e.setRenderTarget(s,2,o),e.render(t,d),e.setRenderTarget(s,3,o),e.render(t,h),e.setRenderTarget(s,4,o),e.render(t,p),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,o),e.render(t,g),e.setRenderTarget(_,y,M),e.xr.enabled=T,s.texture.needsPMREMUpdate=!0}}class _v extends In{constructor(e,t,s,o,l,u,d,h,p,g){e=e!==void 0?e:[],t=t!==void 0?t:ca,super(e,t,s,o,l,u,d,h,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class _S extends ds{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new _v(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new va(5,5,5),l=new Dr({name:"CubemapFromEquirect",uniforms:ha(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Dn,blending:Pr});l.uniforms.tEquirect.value=t;const u=new hi(o,l),d=t.minFilter;return t.minFilter===ls&&(t.minFilter=Ei),new xS(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,s,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,o);e.setRenderTarget(l)}}const vd=new ie,yS=new ie,SS=new ot;class is{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,o){return this.normal.set(e,t,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const o=vd.subVectors(s,t).cross(yS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(vd),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||SS.getNormalMatrix(e),o=this.coplanarPoint(vd).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const es=new Of,Hl=new ie;class yv{constructor(e=new is,t=new is,s=new is,o=new is,l=new is,u=new is){this.planes=[e,t,s,o,l,u]}set(e,t,s,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(s),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Yi){const s=this.planes,o=e.elements,l=o[0],u=o[1],d=o[2],h=o[3],p=o[4],g=o[5],_=o[6],y=o[7],M=o[8],T=o[9],A=o[10],S=o[11],x=o[12],I=o[13],L=o[14],R=o[15];if(s[0].setComponents(h-l,y-p,S-M,R-x).normalize(),s[1].setComponents(h+l,y+p,S+M,R+x).normalize(),s[2].setComponents(h+u,y+g,S+T,R+I).normalize(),s[3].setComponents(h-u,y-g,S-T,R-I).normalize(),s[4].setComponents(h-d,y-_,S-A,R-L).normalize(),t===Yi)s[5].setComponents(h+d,y+_,S+A,R+L).normalize();else if(t===tc)s[5].setComponents(d,_,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(e){return es.center.set(0,0,0),es.radius=.7071067811865476,es.applyMatrix4(e.matrixWorld),this.intersectsSphere(es)}intersectsSphere(e){const t=this.planes,s=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const o=t[s];if(Hl.x=o.normal.x>0?e.max.x:e.min.x,Hl.y=o.normal.y>0?e.max.y:e.min.y,Hl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Hl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sv(){let r=null,e=!1,t=null,s=null;function o(l,u){t(l,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function MS(r){const e=new WeakMap;function t(d,h){const p=d.array,g=d.usage,_=p.byteLength,y=r.createBuffer();r.bindBuffer(h,y),r.bufferData(h,p,g),d.onUploadCallback();let M;if(p instanceof Float32Array)M=r.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=r.SHORT;else if(p instanceof Uint32Array)M=r.UNSIGNED_INT;else if(p instanceof Int32Array)M=r.INT;else if(p instanceof Int8Array)M=r.BYTE;else if(p instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:y,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,h,p){const g=h.array,_=h.updateRanges;if(r.bindBuffer(p,d),_.length===0)r.bufferSubData(p,0,g);else{_.sort((M,T)=>M.start-T.start);let y=0;for(let M=1;M<_.length;M++){const T=_[y],A=_[M];A.start<=T.start+T.count+1?T.count=Math.max(T.count,A.start+A.count-T.start):(++y,_[y]=A)}_.length=y+1;for(let M=0,T=_.length;M<T;M++){const A=_[M];r.bufferSubData(p,A.start*g.BYTES_PER_ELEMENT,g,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(r.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(p.buffer,d,h),p.version=d.version}}return{get:o,remove:l,update:u}}class cc extends Ur{constructor(e=1,t=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(s),h=Math.floor(o),p=d+1,g=h+1,_=e/d,y=t/h,M=[],T=[],A=[],S=[];for(let x=0;x<g;x++){const I=x*y-u;for(let L=0;L<p;L++){const R=L*_-l;T.push(R,-I,0),A.push(0,0,1),S.push(L/d),S.push(1-x/h)}}for(let x=0;x<h;x++)for(let I=0;I<d;I++){const L=I+p*x,R=I+p*(x+1),Y=I+1+p*(x+1),B=I+1+p*x;M.push(L,R,B),M.push(R,Y,B)}this.setIndex(M),this.setAttribute("position",new wi(T,3)),this.setAttribute("normal",new wi(A,3)),this.setAttribute("uv",new wi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var ES=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,wS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,AS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,CS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,RS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,PS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,NS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,LS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,DS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,IS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,US=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,OS=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,kS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,BS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,GS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,WS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,XS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,qS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$S=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,YS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ZS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,JS="gl_FragColor = linearToOutputTexel( gl_FragColor );",eM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,nM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,iM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,aM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,oM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,lM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,cM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,fM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,pM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,mM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,gM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_M=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,SM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,MM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,EM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,AM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,CM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,RM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,LM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,DM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,IM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,UM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,OM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,BM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,VM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,GM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,WM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,XM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,$M=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,YM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ZM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,QM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,JM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,eE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,tE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,iE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,aE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,oE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,lE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,uE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,fE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,mE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,gE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,vE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,SE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ME=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,RE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,PE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,LE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,DE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,UE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,BE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,HE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,GE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,WE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,qE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$E=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ZE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,JE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,e1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,t1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,lt={alphahash_fragment:ES,alphahash_pars_fragment:TS,alphamap_fragment:wS,alphamap_pars_fragment:AS,alphatest_fragment:bS,alphatest_pars_fragment:CS,aomap_fragment:RS,aomap_pars_fragment:PS,batching_pars_vertex:NS,batching_vertex:LS,begin_vertex:DS,beginnormal_vertex:IS,bsdfs:US,iridescence_fragment:FS,bumpmap_pars_fragment:OS,clipping_planes_fragment:kS,clipping_planes_pars_fragment:BS,clipping_planes_pars_vertex:zS,clipping_planes_vertex:HS,color_fragment:VS,color_pars_fragment:GS,color_pars_vertex:jS,color_vertex:WS,common:XS,cube_uv_reflection_fragment:qS,defaultnormal_vertex:$S,displacementmap_pars_vertex:YS,displacementmap_vertex:KS,emissivemap_fragment:ZS,emissivemap_pars_fragment:QS,colorspace_fragment:JS,colorspace_pars_fragment:eM,envmap_fragment:tM,envmap_common_pars_fragment:nM,envmap_pars_fragment:iM,envmap_pars_vertex:rM,envmap_physical_pars_fragment:mM,envmap_vertex:sM,fog_vertex:aM,fog_pars_vertex:oM,fog_fragment:lM,fog_pars_fragment:cM,gradientmap_pars_fragment:uM,lightmap_pars_fragment:dM,lights_lambert_fragment:fM,lights_lambert_pars_fragment:hM,lights_pars_begin:pM,lights_toon_fragment:gM,lights_toon_pars_fragment:vM,lights_phong_fragment:xM,lights_phong_pars_fragment:_M,lights_physical_fragment:yM,lights_physical_pars_fragment:SM,lights_fragment_begin:MM,lights_fragment_maps:EM,lights_fragment_end:TM,logdepthbuf_fragment:wM,logdepthbuf_pars_fragment:AM,logdepthbuf_pars_vertex:bM,logdepthbuf_vertex:CM,map_fragment:RM,map_pars_fragment:PM,map_particle_fragment:NM,map_particle_pars_fragment:LM,metalnessmap_fragment:DM,metalnessmap_pars_fragment:IM,morphinstance_vertex:UM,morphcolor_vertex:FM,morphnormal_vertex:OM,morphtarget_pars_vertex:kM,morphtarget_vertex:BM,normal_fragment_begin:zM,normal_fragment_maps:HM,normal_pars_fragment:VM,normal_pars_vertex:GM,normal_vertex:jM,normalmap_pars_fragment:WM,clearcoat_normal_fragment_begin:XM,clearcoat_normal_fragment_maps:qM,clearcoat_pars_fragment:$M,iridescence_pars_fragment:YM,opaque_fragment:KM,packing:ZM,premultiplied_alpha_fragment:QM,project_vertex:JM,dithering_fragment:eE,dithering_pars_fragment:tE,roughnessmap_fragment:nE,roughnessmap_pars_fragment:iE,shadowmap_pars_fragment:rE,shadowmap_pars_vertex:sE,shadowmap_vertex:aE,shadowmask_pars_fragment:oE,skinbase_vertex:lE,skinning_pars_vertex:cE,skinning_vertex:uE,skinnormal_vertex:dE,specularmap_fragment:fE,specularmap_pars_fragment:hE,tonemapping_fragment:pE,tonemapping_pars_fragment:mE,transmission_fragment:gE,transmission_pars_fragment:vE,uv_pars_fragment:xE,uv_pars_vertex:_E,uv_vertex:yE,worldpos_vertex:SE,background_vert:ME,background_frag:EE,backgroundCube_vert:TE,backgroundCube_frag:wE,cube_vert:AE,cube_frag:bE,depth_vert:CE,depth_frag:RE,distanceRGBA_vert:PE,distanceRGBA_frag:NE,equirect_vert:LE,equirect_frag:DE,linedashed_vert:IE,linedashed_frag:UE,meshbasic_vert:FE,meshbasic_frag:OE,meshlambert_vert:kE,meshlambert_frag:BE,meshmatcap_vert:zE,meshmatcap_frag:HE,meshnormal_vert:VE,meshnormal_frag:GE,meshphong_vert:jE,meshphong_frag:WE,meshphysical_vert:XE,meshphysical_frag:qE,meshtoon_vert:$E,meshtoon_frag:YE,points_vert:KE,points_frag:ZE,shadow_vert:QE,shadow_frag:JE,sprite_vert:e1,sprite_frag:t1},Pe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},Mi={basic:{uniforms:yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:yn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:yn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:yn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:yn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:yn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:yn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:yn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:yn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:yn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:yn([Pe.lights,Pe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};Mi.physical={uniforms:yn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Vl={r:0,b:0,g:0},ts=new Qi,n1=new qt;function i1(r,e,t,s,o,l,u){const d=new Rt(0);let h=l===!0?0:1,p,g,_=null,y=0,M=null;function T(I){let L=I.isScene===!0?I.background:null;return L&&L.isTexture&&(L=(I.backgroundBlurriness>0?t:e).get(L)),L}function A(I){let L=!1;const R=T(I);R===null?x(d,h):R&&R.isColor&&(x(R,1),L=!0);const Y=r.xr.getEnvironmentBlendMode();Y==="additive"?s.buffers.color.setClear(0,0,0,1,u):Y==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function S(I,L){const R=T(L);R&&(R.isCubeTexture||R.mapping===sc)?(g===void 0&&(g=new hi(new va(1,1,1),new Dr({name:"BackgroundCubeMaterial",uniforms:ha(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(Y,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),ts.copy(L.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),g.material.uniforms.envMap.value=R,g.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(n1.makeRotationFromEuler(ts)),g.material.toneMapped=_t.getTransfer(R.colorSpace)!==Ct,(_!==R||y!==R.version||M!==r.toneMapping)&&(g.material.needsUpdate=!0,_=R,y=R.version,M=r.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null)):R&&R.isTexture&&(p===void 0&&(p=new hi(new cc(2,2),new Dr({name:"BackgroundMaterial",uniforms:ha(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Lr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=R,p.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,p.material.toneMapped=_t.getTransfer(R.colorSpace)!==Ct,R.matrixAutoUpdate===!0&&R.updateMatrix(),p.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||y!==R.version||M!==r.toneMapping)&&(p.material.needsUpdate=!0,_=R,y=R.version,M=r.toneMapping),p.layers.enableAll(),I.unshift(p,p.geometry,p.material,0,0,null))}function x(I,L){I.getRGB(Vl,vv(r)),s.buffers.color.setClear(Vl.r,Vl.g,Vl.b,L,u)}return{getClearColor:function(){return d},setClearColor:function(I,L=1){d.set(I),h=L,x(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,x(d,h)},render:A,addToRenderList:S}}function r1(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=y(null);let l=o,u=!1;function d(C,z,oe,te,fe){let pe=!1;const ae=_(te,oe,z);l!==ae&&(l=ae,p(l.object)),pe=M(C,te,oe,fe),pe&&T(C,te,oe,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,R(C,z,oe,te),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return r.createVertexArray()}function p(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function _(C,z,oe){const te=oe.wireframe===!0;let fe=s[C.id];fe===void 0&&(fe={},s[C.id]=fe);let pe=fe[z.id];pe===void 0&&(pe={},fe[z.id]=pe);let ae=pe[te];return ae===void 0&&(ae=y(h()),pe[te]=ae),ae}function y(C){const z=[],oe=[],te=[];for(let fe=0;fe<t;fe++)z[fe]=0,oe[fe]=0,te[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:te,object:C,attributes:{},index:null}}function M(C,z,oe,te){const fe=l.attributes,pe=z.attributes;let ae=0;const ce=oe.getAttributes();for(const k in ce)if(ce[k].location>=0){const se=fe[k];let U=pe[k];if(U===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),se===void 0||se.attribute!==U||U&&se.data!==U.data)return!0;ae++}return l.attributesNum!==ae||l.index!==te}function T(C,z,oe,te){const fe={},pe=z.attributes;let ae=0;const ce=oe.getAttributes();for(const k in ce)if(ce[k].location>=0){let se=pe[k];se===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const U={};U.attribute=se,se&&se.data&&(U.data=se.data),fe[k]=U,ae++}l.attributes=fe,l.attributesNum=ae,l.index=te}function A(){const C=l.newAttributes;for(let z=0,oe=C.length;z<oe;z++)C[z]=0}function S(C){x(C,0)}function x(C,z){const oe=l.newAttributes,te=l.enabledAttributes,fe=l.attributeDivisors;oe[C]=1,te[C]===0&&(r.enableVertexAttribArray(C),te[C]=1),fe[C]!==z&&(r.vertexAttribDivisor(C,z),fe[C]=z)}function I(){const C=l.newAttributes,z=l.enabledAttributes;for(let oe=0,te=z.length;oe<te;oe++)z[oe]!==C[oe]&&(r.disableVertexAttribArray(oe),z[oe]=0)}function L(C,z,oe,te,fe,pe,ae){ae===!0?r.vertexAttribIPointer(C,z,oe,fe,pe):r.vertexAttribPointer(C,z,oe,te,fe,pe)}function R(C,z,oe,te){A();const fe=te.attributes,pe=oe.getAttributes(),ae=z.defaultAttributeValues;for(const ce in pe){const k=pe[ce];if(k.location>=0){let le=fe[ce];if(le===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const se=le.normalized,U=le.itemSize,ne=e.get(le);if(ne===void 0)continue;const Ie=ne.buffer,Z=ne.type,ue=ne.bytesPerElement,Ee=Z===r.INT||Z===r.UNSIGNED_INT||le.gpuType===Nf;if(le.isInterleavedBufferAttribute){const _e=le.data,be=_e.stride,Ue=le.offset;if(_e.isInstancedInterleavedBuffer){for(let Qe=0;Qe<k.locationSize;Qe++)x(k.location+Qe,_e.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Qe=0;Qe<k.locationSize;Qe++)S(k.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let Qe=0;Qe<k.locationSize;Qe++)L(k.location+Qe,U/k.locationSize,Z,se,be*ue,(Ue+U/k.locationSize*Qe)*ue,Ee)}else{if(le.isInstancedBufferAttribute){for(let _e=0;_e<k.locationSize;_e++)x(k.location+_e,le.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<k.locationSize;_e++)S(k.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let _e=0;_e<k.locationSize;_e++)L(k.location+_e,U/k.locationSize,Z,se,U*ue,U/k.locationSize*_e*ue,Ee)}}else if(ae!==void 0){const se=ae[ce];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(k.location,se);break;case 3:r.vertexAttrib3fv(k.location,se);break;case 4:r.vertexAttrib4fv(k.location,se);break;default:r.vertexAttrib1fv(k.location,se)}}}}I()}function Y(){X();for(const C in s){const z=s[C];for(const oe in z){const te=z[oe];for(const fe in te)g(te[fe].object),delete te[fe];delete z[oe]}delete s[C]}}function B(C){if(s[C.id]===void 0)return;const z=s[C.id];for(const oe in z){const te=z[oe];for(const fe in te)g(te[fe].object),delete te[fe];delete z[oe]}delete s[C.id]}function O(C){for(const z in s){const oe=s[z];if(oe[C.id]===void 0)continue;const te=oe[C.id];for(const fe in te)g(te[fe].object),delete te[fe];delete oe[C.id]}}function X(){P(),u=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:X,resetDefaultState:P,dispose:Y,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:S,disableUnusedAttributes:I}}function s1(r,e,t){let s;function o(p){s=p}function l(p,g){r.drawArrays(s,p,g),t.update(g,s,1)}function u(p,g,_){_!==0&&(r.drawArraysInstanced(s,p,g,_),t.update(g,s,_))}function d(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,p,0,g,0,_);let M=0;for(let T=0;T<_;T++)M+=g[T];t.update(M,s,1)}function h(p,g,_,y){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let T=0;T<p.length;T++)u(p[T],g[T],y[T]);else{M.multiDrawArraysInstancedWEBGL(s,p,0,g,0,y,0,_);let T=0;for(let A=0;A<_;A++)T+=g[A]*y[A];t.update(T,s,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function a1(r,e,t,s){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==fi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const X=O===po&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==Zi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==$i&&!X)}function h(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=h(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=t.logarithmicDepthBuffer===!0,y=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),S=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),I=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),Y=T>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:y,maxTextures:M,maxVertexTextures:T,maxTextureSize:A,maxCubemapSize:S,maxAttributes:x,maxVertexUniforms:I,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:Y,maxSamples:B}}function o1(r){const e=this;let t=null,s=0,o=!1,l=!1;const u=new is,d=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,y){const M=_.length!==0||y||s!==0||o;return o=y,s=_.length,M},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,y){t=g(_,y,0)},this.setState=function(_,y,M){const T=_.clippingPlanes,A=_.clipIntersection,S=_.clipShadows,x=r.get(_);if(!o||T===null||T.length===0||l&&!S)l?g(null):p();else{const I=l?0:s,L=I*4;let R=x.clippingState||null;h.value=R,R=g(T,y,L,M);for(let Y=0;Y!==L;++Y)R[Y]=t[Y];x.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=I}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(_,y,M,T){const A=_!==null?_.length:0;let S=null;if(A!==0){if(S=h.value,T!==!0||S===null){const x=M+A*4,I=y.matrixWorldInverse;d.getNormalMatrix(I),(S===null||S.length<x)&&(S=new Float32Array(x));for(let L=0,R=M;L!==A;++L,R+=4)u.copy(_[L]).applyMatrix4(I,d),u.normal.toArray(S,R),S[R+3]=u.constant}h.value=S,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,S}}function l1(r){let e=new WeakMap;function t(u,d){return d===jd?u.mapping=ca:d===Wd&&(u.mapping=ua),u}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===jd||d===Wd)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new _S(h.height);return p.fromEquirectangularTexture(r,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}class c1 extends xv{constructor(e=-1,t=1,s=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=s-e,u=s+e,d=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=g*this.view.offsetY,h=d-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const na=4,Jm=[.125,.215,.35,.446,.526,.582],as=20,xd=new c1,eg=new Rt;let _d=null,yd=0,Sd=0,Md=!1;const rs=(1+Math.sqrt(5))/2,Ks=1/rs,tg=[new ie(-rs,Ks,0),new ie(rs,Ks,0),new ie(-Ks,0,rs),new ie(Ks,0,rs),new ie(0,rs,-Ks),new ie(0,rs,Ks),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class ng{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,o=100){_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,s,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=sg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(_d,yd,Sd),this._renderer.xr.enabled=Md,e.scissorTest=!1,Gl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ca||e.mapping===ua?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),_d=this._renderer.getRenderTarget(),yd=this._renderer.getActiveCubeFace(),Sd=this._renderer.getActiveMipmapLevel(),Md=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:po,format:fi,colorSpace:ma,depthBuffer:!1},o=ig(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ig(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=u1(l)),this._blurMaterial=d1(l,e,t)}return o}_compileMaterial(e){const t=new hi(this._lodPlanes[0],e);this._renderer.compile(t,xd)}_sceneToCubeUV(e,t,s,o){const d=new Hn(90,1,t,s),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,y=g.toneMapping;g.getClearColor(eg),g.toneMapping=Nr,g.autoClear=!1;const M=new lc({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),T=new hi(new va,M);let A=!1;const S=e.background;S?S.isColor&&(M.color.copy(S),e.background=null,A=!0):(M.color.copy(eg),A=!0);for(let x=0;x<6;x++){const I=x%3;I===0?(d.up.set(0,h[x],0),d.lookAt(p[x],0,0)):I===1?(d.up.set(0,0,h[x]),d.lookAt(0,p[x],0)):(d.up.set(0,h[x],0),d.lookAt(0,0,p[x]));const L=this._cubeSize;Gl(o,I*L,x>2?L:0,L,L),g.setRenderTarget(o),A&&g.render(T,d),g.render(e,d)}T.geometry.dispose(),T.material.dispose(),g.toneMapping=y,g.autoClear=_,e.background=S}_textureToCubeUV(e,t){const s=this._renderer,o=e.mapping===ca||e.mapping===ua;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=sg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new hi(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;Gl(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,xd)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=tg[(o-l-1)%tg.length];this._blur(e,l-1,l,u,d)}t.autoClear=s}_blur(e,t,s,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,o,"latitudinal",l),this._halfBlur(u,e,s,s,o,"longitudinal",l)}_halfBlur(e,t,s,o,l,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new hi(this._lodPlanes[o],p),y=p.uniforms,M=this._sizeLods[s]-1,T=isFinite(l)?Math.PI/(2*M):2*Math.PI/(2*as-1),A=l/T,S=isFinite(l)?1+Math.floor(g*A):as;S>as&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${S} samples when the maximum is set to ${as}`);const x=[];let I=0;for(let O=0;O<as;++O){const X=O/A,P=Math.exp(-X*X/2);x.push(P),O===0?I+=P:O<S&&(I+=2*P)}for(let O=0;O<x.length;O++)x[O]=x[O]/I;y.envMap.value=e.texture,y.samples.value=S,y.weights.value=x,y.latitudinal.value=u==="latitudinal",d&&(y.poleAxis.value=d);const{_lodMax:L}=this;y.dTheta.value=T,y.mipInt.value=L-s;const R=this._sizeLods[o],Y=3*R*(o>L-na?o-L+na:0),B=4*(this._cubeSize-R);Gl(t,Y,B,3*R,2*R),h.setRenderTarget(t),h.render(_,xd)}}function u1(r){const e=[],t=[],s=[];let o=r;const l=r-na+1+Jm.length;for(let u=0;u<l;u++){const d=Math.pow(2,o);t.push(d);let h=1/d;u>r-na?h=Jm[u-r+na-1]:u===0&&(h=0),s.push(h);const p=1/(d-2),g=-p,_=1+p,y=[g,g,_,g,_,_,g,g,_,_,g,_],M=6,T=6,A=3,S=2,x=1,I=new Float32Array(A*T*M),L=new Float32Array(S*T*M),R=new Float32Array(x*T*M);for(let B=0;B<M;B++){const O=B%3*2/3-1,X=B>2?0:-1,P=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];I.set(P,A*T*B),L.set(y,S*T*B);const C=[B,B,B,B,B,B];R.set(C,x*T*B)}const Y=new Ur;Y.setAttribute("position",new Ti(I,A)),Y.setAttribute("uv",new Ti(L,S)),Y.setAttribute("faceIndex",new Ti(R,x)),e.push(Y),o>na&&o--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function ig(r,e,t){const s=new ds(r,e,t);return s.texture.mapping=sc,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Gl(r,e,t,s,o){r.viewport.set(e,t,s,o),r.scissor.set(e,t,s,o)}function d1(r,e,t){const s=new Float32Array(as),o=new ie(0,1,0);return new Dr({name:"SphericalGaussianBlur",defines:{n:as,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function rg(){return new Dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function sg(){return new Dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pr,depthTest:!1,depthWrite:!1})}function kf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function f1(r){let e=new WeakMap,t=null;function s(d){if(d&&d.isTexture){const h=d.mapping,p=h===jd||h===Wd,g=h===ca||h===ua;if(p||g){let _=e.get(d);const y=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==y)return t===null&&(t=new ng(r)),_=p?t.fromEquirectangular(d,_):t.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return p&&M&&M.height>0||g&&M&&o(M)?(t===null&&(t=new ng(r)),_=p?t.fromEquirectangular(d):t.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",l),_.texture):null}}}return d}function o(d){let h=0;const p=6;for(let g=0;g<p;g++)d[g]!==void 0&&h++;return h===p}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function h1(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const o=t(s);return o===null&&so("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function p1(r,e,t,s){const o={},l=new WeakMap;function u(_){const y=_.target;y.index!==null&&e.remove(y.index);for(const T in y.attributes)e.remove(y.attributes[T]);for(const T in y.morphAttributes){const A=y.morphAttributes[T];for(let S=0,x=A.length;S<x;S++)e.remove(A[S])}y.removeEventListener("dispose",u),delete o[y.id];const M=l.get(y);M&&(e.remove(M),l.delete(y)),s.releaseStatesOfGeometry(y),y.isInstancedBufferGeometry===!0&&delete y._maxInstanceCount,t.memory.geometries--}function d(_,y){return o[y.id]===!0||(y.addEventListener("dispose",u),o[y.id]=!0,t.memory.geometries++),y}function h(_){const y=_.attributes;for(const T in y)e.update(y[T],r.ARRAY_BUFFER);const M=_.morphAttributes;for(const T in M){const A=M[T];for(let S=0,x=A.length;S<x;S++)e.update(A[S],r.ARRAY_BUFFER)}}function p(_){const y=[],M=_.index,T=_.attributes.position;let A=0;if(M!==null){const I=M.array;A=M.version;for(let L=0,R=I.length;L<R;L+=3){const Y=I[L+0],B=I[L+1],O=I[L+2];y.push(Y,B,B,O,O,Y)}}else if(T!==void 0){const I=T.array;A=T.version;for(let L=0,R=I.length/3-1;L<R;L+=3){const Y=L+0,B=L+1,O=L+2;y.push(Y,B,B,O,O,Y)}}else return;const S=new(uv(y)?gv:mv)(y,1);S.version=A;const x=l.get(_);x&&e.remove(x),l.set(_,S)}function g(_){const y=l.get(_);if(y){const M=_.index;M!==null&&y.version<M.version&&p(_)}else p(_);return l.get(_)}return{get:d,update:h,getWireframeAttribute:g}}function m1(r,e,t){let s;function o(y){s=y}let l,u;function d(y){l=y.type,u=y.bytesPerElement}function h(y,M){r.drawElements(s,M,l,y*u),t.update(M,s,1)}function p(y,M,T){T!==0&&(r.drawElementsInstanced(s,M,l,y*u,T),t.update(M,s,T))}function g(y,M,T){if(T===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,l,y,0,T);let S=0;for(let x=0;x<T;x++)S+=M[x];t.update(S,s,1)}function _(y,M,T,A){if(T===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let x=0;x<y.length;x++)p(y[x]/u,M[x],A[x]);else{S.multiDrawElementsInstancedWEBGL(s,M,0,l,y,0,A,0,T);let x=0;for(let I=0;I<T;I++)x+=M[I]*A[I];t.update(x,s,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function g1(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,d){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=d*(l/3);break;case r.LINES:t.lines+=d*(l/2);break;case r.LINE_STRIP:t.lines+=d*(l-1);break;case r.LINE_LOOP:t.lines+=d*l;break;case r.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:s}}function v1(r,e,t){const s=new WeakMap,o=new Gt;function l(u,d,h){const p=u.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=g!==void 0?g.length:0;let y=s.get(d);if(y===void 0||y.count!==_){let C=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,S=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],I=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let R=0;T===!0&&(R=1),A===!0&&(R=2),S===!0&&(R=3);let Y=d.attributes.position.count*R,B=1;Y>e.maxTextureSize&&(B=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const O=new Float32Array(Y*B*4*_),X=new fv(O,Y,B,_);X.type=$i,X.needsUpdate=!0;const P=R*4;for(let z=0;z<_;z++){const oe=x[z],te=I[z],fe=L[z],pe=Y*B*4*z;for(let ae=0;ae<oe.count;ae++){const ce=ae*P;T===!0&&(o.fromBufferAttribute(oe,ae),O[pe+ce+0]=o.x,O[pe+ce+1]=o.y,O[pe+ce+2]=o.z,O[pe+ce+3]=0),A===!0&&(o.fromBufferAttribute(te,ae),O[pe+ce+4]=o.x,O[pe+ce+5]=o.y,O[pe+ce+6]=o.z,O[pe+ce+7]=0),S===!0&&(o.fromBufferAttribute(fe,ae),O[pe+ce+8]=o.x,O[pe+ce+9]=o.y,O[pe+ce+10]=o.z,O[pe+ce+11]=fe.itemSize===4?o.w:1)}}y={count:_,texture:X,size:new Nt(Y,B)},s.set(d,y),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let T=0;for(let S=0;S<p.length;S++)T+=p[S];const A=d.morphTargetsRelative?1:1-T;h.getUniforms().setValue(r,"morphTargetBaseInfluence",A),h.getUniforms().setValue(r,"morphTargetInfluences",p)}h.getUniforms().setValue(r,"morphTargetsTexture",y.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",y.size)}return{update:l}}function x1(r,e,t,s){let o=new WeakMap;function l(h){const p=s.render.frame,g=h.geometry,_=e.get(h,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==p&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,p))),h.isSkinnedMesh){const y=h.skeleton;o.get(y)!==p&&(y.update(),o.set(y,p))}return _}function u(){o=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}class Mv extends In{constructor(e,t,s,o,l,u,d,h,p,g=ra){if(g!==ra&&g!==fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&g===ra&&(s=us),s===void 0&&g===fa&&(s=da),super(null,o,l,u,d,h,g,s,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:mi,this.minFilter=h!==void 0?h:mi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Ev=new In,ag=new Mv(1,1),Tv=new fv,wv=new nS,Av=new _v,og=[],lg=[],cg=new Float32Array(16),ug=new Float32Array(9),dg=new Float32Array(4);function xa(r,e,t){const s=r[0];if(s<=0||s>0)return r;const o=e*t;let l=og[o];if(l===void 0&&(l=new Float32Array(o),og[o]=l),e!==0){s.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,r[u].toArray(l,d)}return l}function Qt(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function Jt(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function uc(r,e){let t=lg[e];t===void 0&&(t=new Int32Array(e),lg[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function _1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function y1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2fv(this.addr,e),Jt(t,e)}}function S1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Qt(t,e))return;r.uniform3fv(this.addr,e),Jt(t,e)}}function M1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4fv(this.addr,e),Jt(t,e)}}function E1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;dg.set(s),r.uniformMatrix2fv(this.addr,!1,dg),Jt(t,s)}}function T1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;ug.set(s),r.uniformMatrix3fv(this.addr,!1,ug),Jt(t,s)}}function w1(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(Qt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(t,e)}else{if(Qt(t,s))return;cg.set(s),r.uniformMatrix4fv(this.addr,!1,cg),Jt(t,s)}}function A1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function b1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2iv(this.addr,e),Jt(t,e)}}function C1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3iv(this.addr,e),Jt(t,e)}}function R1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4iv(this.addr,e),Jt(t,e)}}function P1(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function N1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Qt(t,e))return;r.uniform2uiv(this.addr,e),Jt(t,e)}}function L1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Qt(t,e))return;r.uniform3uiv(this.addr,e),Jt(t,e)}}function D1(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Qt(t,e))return;r.uniform4uiv(this.addr,e),Jt(t,e)}}function I1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(ag.compareFunction=cv,l=ag):l=Ev,t.setTexture2D(e||l,o)}function U1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture3D(e||wv,o)}function F1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTextureCube(e||Av,o)}function O1(r,e,t){const s=this.cache,o=t.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),t.setTexture2DArray(e||Tv,o)}function k1(r){switch(r){case 5126:return _1;case 35664:return y1;case 35665:return S1;case 35666:return M1;case 35674:return E1;case 35675:return T1;case 35676:return w1;case 5124:case 35670:return A1;case 35667:case 35671:return b1;case 35668:case 35672:return C1;case 35669:case 35673:return R1;case 5125:return P1;case 36294:return N1;case 36295:return L1;case 36296:return D1;case 35678:case 36198:case 36298:case 36306:case 35682:return I1;case 35679:case 36299:case 36307:return U1;case 35680:case 36300:case 36308:case 36293:return F1;case 36289:case 36303:case 36311:case 36292:return O1}}function B1(r,e){r.uniform1fv(this.addr,e)}function z1(r,e){const t=xa(e,this.size,2);r.uniform2fv(this.addr,t)}function H1(r,e){const t=xa(e,this.size,3);r.uniform3fv(this.addr,t)}function V1(r,e){const t=xa(e,this.size,4);r.uniform4fv(this.addr,t)}function G1(r,e){const t=xa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function j1(r,e){const t=xa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function W1(r,e){const t=xa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function X1(r,e){r.uniform1iv(this.addr,e)}function q1(r,e){r.uniform2iv(this.addr,e)}function $1(r,e){r.uniform3iv(this.addr,e)}function Y1(r,e){r.uniform4iv(this.addr,e)}function K1(r,e){r.uniform1uiv(this.addr,e)}function Z1(r,e){r.uniform2uiv(this.addr,e)}function Q1(r,e){r.uniform3uiv(this.addr,e)}function J1(r,e){r.uniform4uiv(this.addr,e)}function eT(r,e,t){const s=this.cache,o=e.length,l=uc(t,o);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||Ev,l[u])}function tT(r,e,t){const s=this.cache,o=e.length,l=uc(t,o);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||wv,l[u])}function nT(r,e,t){const s=this.cache,o=e.length,l=uc(t,o);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||Av,l[u])}function iT(r,e,t){const s=this.cache,o=e.length,l=uc(t,o);Qt(s,l)||(r.uniform1iv(this.addr,l),Jt(s,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Tv,l[u])}function rT(r){switch(r){case 5126:return B1;case 35664:return z1;case 35665:return H1;case 35666:return V1;case 35674:return G1;case 35675:return j1;case 35676:return W1;case 5124:case 35670:return X1;case 35667:case 35671:return q1;case 35668:case 35672:return $1;case 35669:case 35673:return Y1;case 5125:return K1;case 36294:return Z1;case 36295:return Q1;case 36296:return J1;case 35678:case 36198:case 36298:case 36306:case 35682:return eT;case 35679:case 36299:case 36307:return tT;case 35680:case 36300:case 36308:case 36293:return nT;case 36289:case 36303:case 36311:case 36292:return iT}}class sT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=k1(t.type)}}class aT{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rT(t.type)}}class oT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],s)}}}const Ed=/(\w+)(\])?(\[|\.)?/g;function fg(r,e){r.seq.push(e),r.map[e.id]=e}function lT(r,e,t){const s=r.name,o=s.length;for(Ed.lastIndex=0;;){const l=Ed.exec(s),u=Ed.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===o){fg(t,p===void 0?new sT(d,r,e):new aT(d,r,e));break}else{let _=t.map[d];_===void 0&&(_=new oT(d),fg(t,_)),t=_}}}class Ql{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);lT(l,u,this)}}setValue(e,t,s,o){const l=this.map[t];l!==void 0&&l.setValue(e,s,o)}setOptional(e,t,s){const o=t[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,t,s,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=s[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,t){const s=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&s.push(u)}return s}}function hg(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const cT=37297;let uT=0;function dT(r,e){const t=r.split(`
`),s=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;s.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return s.join(`
`)}const pg=new ot;function fT(r){_t._getMatrix(pg,_t.workingColorSpace,r);const e=`mat3( ${pg.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(r)){case ac:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function mg(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+dT(r.getShaderSource(e),u)}else return o}function hT(r,e){const t=fT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function pT(r,e){let t;switch(e){case Cy:t="Linear";break;case Ry:t="Reinhard";break;case Py:t="Cineon";break;case Ny:t="ACESFilmic";break;case Dy:t="AgX";break;case Iy:t="Neutral";break;case Ly:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new ie;function mT(){_t.getLuminanceCoefficients(jl);const r=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function vT(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function xT(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const l=r.getActiveAttrib(e,o),u=l.name;let d=1;l.type===r.FLOAT_MAT2&&(d=2),l.type===r.FLOAT_MAT3&&(d=3),l.type===r.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:d}}return t}function ao(r){return r!==""}function gg(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _T=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mf(r){return r.replace(_T,ST)}const yT=new Map;function ST(r,e){let t=lt[e];if(t===void 0){const s=yT.get(e);if(s!==void 0)t=lt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Mf(t)}const MT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function xg(r){return r.replace(MT,ET)}function ET(r,e,t,s){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function _g(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function TT(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Kg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===oy?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function wT(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ca:case ua:e="ENVMAP_TYPE_CUBE";break;case sc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function AT(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ua:e="ENVMAP_MODE_REFRACTION";break}return e}function bT(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Zg:e="ENVMAP_BLENDING_MULTIPLY";break;case Ay:e="ENVMAP_BLENDING_MIX";break;case by:e="ENVMAP_BLENDING_ADD";break}return e}function CT(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function RT(r,e,t,s){const o=r.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=TT(t),p=wT(t),g=AT(t),_=bT(t),y=CT(t),M=gT(t),T=vT(l),A=o.createProgram();let S,x,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ao).join(`
`),S.length>0&&(S+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(ao).join(`
`),x.length>0&&(x+=`
`)):(S=[_g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),x=[_g(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",y?"#define CUBEUV_TEXEL_WIDTH "+y.texelWidth:"",y?"#define CUBEUV_TEXEL_HEIGHT "+y.texelHeight:"",y?"#define CUBEUV_MAX_MIP "+y.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Nr?"#define TONE_MAPPING":"",t.toneMapping!==Nr?lt.tonemapping_pars_fragment:"",t.toneMapping!==Nr?pT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,hT("linearToOutputTexel",t.outputColorSpace),mT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ao).join(`
`)),u=Mf(u),u=gg(u,t),u=vg(u,t),d=Mf(d),d=gg(d,t),d=vg(d,t),u=xg(u),d=xg(d),t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,S=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,x=["#define varying in",t.glslVersion===Lm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Lm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=I+S+u,R=I+x+d,Y=hg(o,o.VERTEX_SHADER,L),B=hg(o,o.FRAGMENT_SHADER,R);o.attachShader(A,Y),o.attachShader(A,B),t.index0AttributeName!==void 0?o.bindAttribLocation(A,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(z){if(r.debug.checkShaderErrors){const oe=o.getProgramInfoLog(A).trim(),te=o.getShaderInfoLog(Y).trim(),fe=o.getShaderInfoLog(B).trim();let pe=!0,ae=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,Y,B);else{const ce=mg(o,Y,"vertex"),k=mg(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+ce+`
`+k)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(te===""||fe==="")&&(ae=!1);ae&&(z.diagnostics={runnable:pe,programLog:oe,vertexShader:{log:te,prefix:S},fragmentShader:{log:fe,prefix:x}})}o.deleteShader(Y),o.deleteShader(B),X=new Ql(o,A),P=xT(o,A)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(A,cT)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uT++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=Y,this.fragmentShader=B,this}let PT=0;class NT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new LT(e),t.set(e,s)),s}}class LT{constructor(e){this.id=PT++,this.code=e,this.usedTimes=0}}function DT(r,e,t,s,o,l,u){const d=new hv,h=new NT,p=new Set,g=[],_=o.logarithmicDepthBuffer,y=o.vertexTextures;let M=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return p.add(P),P===0?"uv":`uv${P}`}function S(P,C,z,oe,te){const fe=oe.fog,pe=te.geometry,ae=P.isMeshStandardMaterial?oe.environment:null,ce=(P.isMeshStandardMaterial?t:e).get(P.envMap||ae),k=ce&&ce.mapping===sc?ce.image.height:null,le=T[P.type];P.precision!==null&&(M=o.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const se=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,U=se!==void 0?se.length:0;let ne=0;pe.morphAttributes.position!==void 0&&(ne=1),pe.morphAttributes.normal!==void 0&&(ne=2),pe.morphAttributes.color!==void 0&&(ne=3);let Ie,Z,ue,Ee;if(le){const vt=Mi[le];Ie=vt.vertexShader,Z=vt.fragmentShader}else Ie=P.vertexShader,Z=P.fragmentShader,h.update(P),ue=h.getVertexShaderID(P),Ee=h.getFragmentShaderID(P);const _e=r.getRenderTarget(),be=r.state.buffers.depth.getReversed(),Ue=te.isInstancedMesh===!0,Qe=te.isBatchedMesh===!0,bt=!!P.map,pt=!!P.matcap,Lt=!!ce,W=!!P.aoMap,mn=!!P.lightMap,ht=!!P.bumpMap,ut=!!P.normalMap,Ye=!!P.displacementMap,wt=!!P.emissiveMap,$e=!!P.metalnessMap,N=!!P.roughnessMap,w=P.anisotropy>0,K=P.clearcoat>0,me=P.dispersion>0,ve=P.iridescence>0,de=P.sheen>0,Ge=P.transmission>0,Ce=w&&!!P.anisotropyMap,Fe=K&&!!P.clearcoatMap,ct=K&&!!P.clearcoatNormalMap,Se=K&&!!P.clearcoatRoughnessMap,ke=ve&&!!P.iridescenceMap,Je=ve&&!!P.iridescenceThicknessMap,et=de&&!!P.sheenColorMap,Be=de&&!!P.sheenRoughnessMap,dt=!!P.specularMap,rt=!!P.specularColorMap,Tt=!!P.specularIntensityMap,V=Ge&&!!P.transmissionMap,Re=Ge&&!!P.thicknessMap,re=!!P.gradientMap,he=!!P.alphaMap,Le=P.alphaTest>0,Ne=!!P.alphaHash,st=!!P.extensions;let It=Nr;P.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(It=r.toneMapping);const $t={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Ie,fragmentShader:Z,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:Qe,batchingColor:Qe&&te._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&te.instanceColor!==null,instancingMorph:Ue&&te.morphTexture!==null,supportsVertexTextures:y,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:ma,alphaToCoverage:!!P.alphaToCoverage,map:bt,matcap:pt,envMap:Lt,envMapMode:Lt&&ce.mapping,envMapCubeUVHeight:k,aoMap:W,lightMap:mn,bumpMap:ht,normalMap:ut,displacementMap:y&&Ye,emissiveMap:wt,normalMapObjectSpace:ut&&P.normalMapType===By,normalMapTangentSpace:ut&&P.normalMapType===ky,metalnessMap:$e,roughnessMap:N,anisotropy:w,anisotropyMap:Ce,clearcoat:K,clearcoatMap:Fe,clearcoatNormalMap:ct,clearcoatRoughnessMap:Se,dispersion:me,iridescence:ve,iridescenceMap:ke,iridescenceThicknessMap:Je,sheen:de,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:dt,specularColorMap:rt,specularIntensityMap:Tt,transmission:Ge,transmissionMap:V,thicknessMap:Re,gradientMap:re,opaque:P.transparent===!1&&P.blending===ia&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:Ne,combine:P.combine,mapUv:bt&&A(P.map.channel),aoMapUv:W&&A(P.aoMap.channel),lightMapUv:mn&&A(P.lightMap.channel),bumpMapUv:ht&&A(P.bumpMap.channel),normalMapUv:ut&&A(P.normalMap.channel),displacementMapUv:Ye&&A(P.displacementMap.channel),emissiveMapUv:wt&&A(P.emissiveMap.channel),metalnessMapUv:$e&&A(P.metalnessMap.channel),roughnessMapUv:N&&A(P.roughnessMap.channel),anisotropyMapUv:Ce&&A(P.anisotropyMap.channel),clearcoatMapUv:Fe&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:ct&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(P.sheenRoughnessMap.channel),specularMapUv:dt&&A(P.specularMap.channel),specularColorMapUv:rt&&A(P.specularColorMap.channel),specularIntensityMapUv:Tt&&A(P.specularIntensityMap.channel),transmissionMapUv:V&&A(P.transmissionMap.channel),thicknessMapUv:Re&&A(P.thicknessMap.channel),alphaMapUv:he&&A(P.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ut||w),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!pe.attributes.uv&&(bt||he),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:be,skinning:te.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:It,decodeVideoTexture:bt&&P.map.isVideoTexture===!0&&_t.getTransfer(P.map.colorSpace)===Ct,decodeVideoTextureEmissive:wt&&P.emissiveMap.isVideoTexture===!0&&_t.getTransfer(P.emissiveMap.colorSpace)===Ct,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Xi,flipSided:P.side===Dn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||Qe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return $t.vertexUv1s=p.has(1),$t.vertexUv2s=p.has(2),$t.vertexUv3s=p.has(3),p.clear(),$t}function x(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)C.push(z),C.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(I(C,P),L(C,P),C.push(r.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function I(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function L(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const C=T[P.type];let z;if(C){const oe=Mi[C];z=mS.clone(oe.uniforms)}else z=P.uniforms;return z}function Y(P,C){let z;for(let oe=0,te=g.length;oe<te;oe++){const fe=g[oe];if(fe.cacheKey===C){z=fe,++z.usedTimes;break}}return z===void 0&&(z=new RT(r,C,P,l),g.push(z)),z}function B(P){if(--P.usedTimes===0){const C=g.indexOf(P);g[C]=g[g.length-1],g.pop(),P.destroy()}}function O(P){h.remove(P)}function X(){h.dispose()}return{getParameters:S,getProgramCacheKey:x,getUniforms:R,acquireProgram:Y,releaseProgram:B,releaseShaderCache:O,programs:g,dispose:X}}function IT(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function s(u){r.delete(u)}function o(u,d,h){r.get(u)[d]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:o,dispose:l}}function UT(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function yg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Sg(){const r=[];let e=0;const t=[],s=[],o=[];function l(){e=0,t.length=0,s.length=0,o.length=0}function u(_,y,M,T,A,S){let x=r[e];return x===void 0?(x={id:_.id,object:_,geometry:y,material:M,groupOrder:T,renderOrder:_.renderOrder,z:A,group:S},r[e]=x):(x.id=_.id,x.object=_,x.geometry=y,x.material=M,x.groupOrder=T,x.renderOrder=_.renderOrder,x.z=A,x.group=S),e++,x}function d(_,y,M,T,A,S){const x=u(_,y,M,T,A,S);M.transmission>0?s.push(x):M.transparent===!0?o.push(x):t.push(x)}function h(_,y,M,T,A,S){const x=u(_,y,M,T,A,S);M.transmission>0?s.unshift(x):M.transparent===!0?o.unshift(x):t.unshift(x)}function p(_,y){t.length>1&&t.sort(_||UT),s.length>1&&s.sort(y||yg),o.length>1&&o.sort(y||yg)}function g(){for(let _=e,y=r.length;_<y;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:t,transmissive:s,transparent:o,init:l,push:d,unshift:h,finish:g,sort:p}}function FT(){let r=new WeakMap;function e(s,o){const l=r.get(s);let u;return l===void 0?(u=new Sg,r.set(s,[u])):o>=l.length?(u=new Sg,l.push(u)):u=l[o],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function OT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Rt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function kT(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let BT=0;function zT(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function HT(r){const e=new OT,t=kT(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)s.probe.push(new ie);const o=new ie,l=new qt,u=new qt;function d(p){let g=0,_=0,y=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let M=0,T=0,A=0,S=0,x=0,I=0,L=0,R=0,Y=0,B=0,O=0;p.sort(zT);for(let P=0,C=p.length;P<C;P++){const z=p[P],oe=z.color,te=z.intensity,fe=z.distance,pe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=oe.r*te,_+=oe.g*te,y+=oe.b*te;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)s.probe[ae].addScaledVector(z.sh.coefficients[ae],te);O++}else if(z.isDirectionalLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ce=z.shadow,k=t.get(z);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,s.directionalShadow[M]=k,s.directionalShadowMap[M]=pe,s.directionalShadowMatrix[M]=z.shadow.matrix,I++}s.directional[M]=ae,M++}else if(z.isSpotLight){const ae=e.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy(oe).multiplyScalar(te),ae.distance=fe,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,s.spot[A]=ae;const ce=z.shadow;if(z.map&&(s.spotLightMap[Y]=z.map,Y++,ce.updateMatrices(z),z.castShadow&&B++),s.spotLightMatrix[A]=ce.matrix,z.castShadow){const k=t.get(z);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,s.spotShadow[A]=k,s.spotShadowMap[A]=pe,R++}A++}else if(z.isRectAreaLight){const ae=e.get(z);ae.color.copy(oe).multiplyScalar(te),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),s.rectArea[S]=ae,S++}else if(z.isPointLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){const ce=z.shadow,k=t.get(z);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,k.shadowCameraNear=ce.camera.near,k.shadowCameraFar=ce.camera.far,s.pointShadow[T]=k,s.pointShadowMap[T]=pe,s.pointShadowMatrix[T]=z.shadow.matrix,L++}s.point[T]=ae,T++}else if(z.isHemisphereLight){const ae=e.get(z);ae.skyColor.copy(z.color).multiplyScalar(te),ae.groundColor.copy(z.groundColor).multiplyScalar(te),s.hemi[x]=ae,x++}}S>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=_,s.ambient[2]=y;const X=s.hash;(X.directionalLength!==M||X.pointLength!==T||X.spotLength!==A||X.rectAreaLength!==S||X.hemiLength!==x||X.numDirectionalShadows!==I||X.numPointShadows!==L||X.numSpotShadows!==R||X.numSpotMaps!==Y||X.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=S,s.point.length=T,s.hemi.length=x,s.directionalShadow.length=I,s.directionalShadowMap.length=I,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=I,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=R+Y-B,s.spotLightMap.length=Y,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=O,X.directionalLength=M,X.pointLength=T,X.spotLength=A,X.rectAreaLength=S,X.hemiLength=x,X.numDirectionalShadows=I,X.numPointShadows=L,X.numSpotShadows=R,X.numSpotMaps=Y,X.numLightProbes=O,s.version=BT++)}function h(p,g){let _=0,y=0,M=0,T=0,A=0;const S=g.matrixWorldInverse;for(let x=0,I=p.length;x<I;x++){const L=p[x];if(L.isDirectionalLight){const R=s.directional[_];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),_++}else if(L.isSpotLight){const R=s.spot[M];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(S),M++}else if(L.isRectAreaLight){const R=s.rectArea[T];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),u.identity(),l.copy(L.matrixWorld),l.premultiply(S),u.extractRotation(l),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),T++}else if(L.isPointLight){const R=s.point[y];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(S),y++}else if(L.isHemisphereLight){const R=s.hemi[A];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(S),A++}}}return{setup:d,setupView:h,state:s}}function Mg(r){const e=new HT(r),t=[],s=[];function o(g){p.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function u(g){s.push(g)}function d(){e.setup(t)}function h(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function VT(r){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new Mg(r),e.set(o,[d])):l>=u.length?(d=new Mg(r),u.push(d)):d=u[l],d}function s(){e=new WeakMap}return{get:t,dispose:s}}class GT extends oc{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Fy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jT extends oc{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const WT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,XT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qT(r,e,t){let s=new yv;const o=new Nt,l=new Nt,u=new Gt,d=new GT({depthPacking:Oy}),h=new jT,p={},g=t.maxTextureSize,_={[Lr]:Dn,[Dn]:Lr,[Xi]:Xi},y=new Dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:WT,fragmentShader:XT}),M=y.clone();M.defines.HORIZONTAL_PASS=1;const T=new Ur;T.setAttribute("position",new Ti(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new hi(T,y),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kg;let x=this.type;this.render=function(B,O,X){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||B.length===0)return;const P=r.getRenderTarget(),C=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),oe=r.state;oe.setBlending(Pr),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const te=x!==Wi&&this.type===Wi,fe=x===Wi&&this.type!==Wi;for(let pe=0,ae=B.length;pe<ae;pe++){const ce=B[pe],k=ce.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const le=k.getFrameExtents();if(o.multiply(le),l.copy(k.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/le.x),o.x=l.x*le.x,k.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/le.y),o.y=l.y*le.y,k.mapSize.y=l.y)),k.map===null||te===!0||fe===!0){const U=this.type!==Wi?{minFilter:mi,magFilter:mi}:{};k.map!==null&&k.map.dispose(),k.map=new ds(o.x,o.y,U),k.map.texture.name=ce.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const se=k.getViewportCount();for(let U=0;U<se;U++){const ne=k.getViewport(U);u.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),oe.viewport(u),k.updateMatrices(ce,U),s=k.getFrustum(),R(O,X,k.camera,ce,this.type)}k.isPointLightShadow!==!0&&this.type===Wi&&I(k,X),k.needsUpdate=!1}x=this.type,S.needsUpdate=!1,r.setRenderTarget(P,C,z)};function I(B,O){const X=e.update(A);y.defines.VSM_SAMPLES!==B.blurSamples&&(y.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,y.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ds(o.x,o.y)),y.uniforms.shadow_pass.value=B.map.texture,y.uniforms.resolution.value=B.mapSize,y.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(O,null,X,y,A,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(O,null,X,M,A,null)}function L(B,O,X,P){let C=null;const z=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(z!==void 0)C=z;else if(C=X.isPointLight===!0?h:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const oe=C.uuid,te=O.uuid;let fe=p[oe];fe===void 0&&(fe={},p[oe]=fe);let pe=fe[te];pe===void 0&&(pe=C.clone(),fe[te]=pe,O.addEventListener("dispose",Y)),C=pe}if(C.visible=O.visible,C.wireframe=O.wireframe,P===Wi?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:_[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=r.properties.get(C);oe.light=X}return C}function R(B,O,X,P,C){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Wi)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const te=e.update(B),fe=B.material;if(Array.isArray(fe)){const pe=te.groups;for(let ae=0,ce=pe.length;ae<ce;ae++){const k=pe[ae],le=fe[k.materialIndex];if(le&&le.visible){const se=L(B,le,P,C);B.onBeforeShadow(r,B,O,X,te,se,k),r.renderBufferDirect(X,null,te,se,B,k),B.onAfterShadow(r,B,O,X,te,se,k)}}}else if(fe.visible){const pe=L(B,fe,P,C);B.onBeforeShadow(r,B,O,X,te,pe,null),r.renderBufferDirect(X,null,te,pe,B,null),B.onAfterShadow(r,B,O,X,te,pe,null)}}const oe=B.children;for(let te=0,fe=oe.length;te<fe;te++)R(oe[te],O,X,P,C)}function Y(B){B.target.removeEventListener("dispose",Y);for(const X in p){const P=p[X],C=B.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const $T={[Od]:kd,[Bd]:Vd,[zd]:Gd,[la]:Hd,[kd]:Od,[Vd]:Bd,[Gd]:zd,[Hd]:la};function YT(r,e){function t(){let V=!1;const Re=new Gt;let re=null;const he=new Gt(0,0,0,0);return{setMask:function(Le){re!==Le&&!V&&(r.colorMask(Le,Le,Le,Le),re=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Ne,st,It,$t){$t===!0&&(Le*=It,Ne*=It,st*=It),Re.set(Le,Ne,st,It),he.equals(Re)===!1&&(r.clearColor(Le,Ne,st,It),he.copy(Re))},reset:function(){V=!1,re=null,he.set(-1,0,0,0)}}}function s(){let V=!1,Re=!1,re=null,he=null,Le=null;return{setReversed:function(Ne){if(Re!==Ne){const st=e.get("EXT_clip_control");Re?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const It=Le;Le=null,this.setClear(It)}Re=Ne},getReversed:function(){return Re},setTest:function(Ne){Ne?_e(r.DEPTH_TEST):be(r.DEPTH_TEST)},setMask:function(Ne){re!==Ne&&!V&&(r.depthMask(Ne),re=Ne)},setFunc:function(Ne){if(Re&&(Ne=$T[Ne]),he!==Ne){switch(Ne){case Od:r.depthFunc(r.NEVER);break;case kd:r.depthFunc(r.ALWAYS);break;case Bd:r.depthFunc(r.LESS);break;case la:r.depthFunc(r.LEQUAL);break;case zd:r.depthFunc(r.EQUAL);break;case Hd:r.depthFunc(r.GEQUAL);break;case Vd:r.depthFunc(r.GREATER);break;case Gd:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=Ne}},setLocked:function(Ne){V=Ne},setClear:function(Ne){Le!==Ne&&(Re&&(Ne=1-Ne),r.clearDepth(Ne),Le=Ne)},reset:function(){V=!1,re=null,he=null,Le=null,Re=!1}}}function o(){let V=!1,Re=null,re=null,he=null,Le=null,Ne=null,st=null,It=null,$t=null;return{setTest:function(vt){V||(vt?_e(r.STENCIL_TEST):be(r.STENCIL_TEST))},setMask:function(vt){Re!==vt&&!V&&(r.stencilMask(vt),Re=vt)},setFunc:function(vt,Mn,gn){(re!==vt||he!==Mn||Le!==gn)&&(r.stencilFunc(vt,Mn,gn),re=vt,he=Mn,Le=gn)},setOp:function(vt,Mn,gn){(Ne!==vt||st!==Mn||It!==gn)&&(r.stencilOp(vt,Mn,gn),Ne=vt,st=Mn,It=gn)},setLocked:function(vt){V=vt},setClear:function(vt){$t!==vt&&(r.clearStencil(vt),$t=vt)},reset:function(){V=!1,Re=null,re=null,he=null,Le=null,Ne=null,st=null,It=null,$t=null}}}const l=new t,u=new s,d=new o,h=new WeakMap,p=new WeakMap;let g={},_={},y=new WeakMap,M=[],T=null,A=!1,S=null,x=null,I=null,L=null,R=null,Y=null,B=null,O=new Rt(0,0,0),X=0,P=!1,C=null,z=null,oe=null,te=null,fe=null;const pe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(k)[1]),ae=ce>=1):k.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ae=ce>=2);let le=null,se={};const U=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Ie=new Gt().fromArray(U),Z=new Gt().fromArray(ne);function ue(V,Re,re,he){const Le=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(V,Ne),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<re;st++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(Re+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return Ne}const Ee={};Ee[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),_e(r.DEPTH_TEST),u.setFunc(la),ht(!1),ut(Am),_e(r.CULL_FACE),W(Pr);function _e(V){g[V]!==!0&&(r.enable(V),g[V]=!0)}function be(V){g[V]!==!1&&(r.disable(V),g[V]=!1)}function Ue(V,Re){return _[V]!==Re?(r.bindFramebuffer(V,Re),_[V]=Re,V===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Re),V===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Qe(V,Re){let re=M,he=!1;if(V){re=y.get(Re),re===void 0&&(re=[],y.set(Re,re));const Le=V.textures;if(re.length!==Le.length||re[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,st=Le.length;Ne<st;Ne++)re[Ne]=r.COLOR_ATTACHMENT0+Ne;re.length=Le.length,he=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,he=!0);he&&r.drawBuffers(re)}function bt(V){return T!==V?(r.useProgram(V),T=V,!0):!1}const pt={[ss]:r.FUNC_ADD,[cy]:r.FUNC_SUBTRACT,[uy]:r.FUNC_REVERSE_SUBTRACT};pt[dy]=r.MIN,pt[fy]=r.MAX;const Lt={[hy]:r.ZERO,[py]:r.ONE,[my]:r.SRC_COLOR,[Ud]:r.SRC_ALPHA,[Sy]:r.SRC_ALPHA_SATURATE,[_y]:r.DST_COLOR,[vy]:r.DST_ALPHA,[gy]:r.ONE_MINUS_SRC_COLOR,[Fd]:r.ONE_MINUS_SRC_ALPHA,[yy]:r.ONE_MINUS_DST_COLOR,[xy]:r.ONE_MINUS_DST_ALPHA,[My]:r.CONSTANT_COLOR,[Ey]:r.ONE_MINUS_CONSTANT_COLOR,[Ty]:r.CONSTANT_ALPHA,[wy]:r.ONE_MINUS_CONSTANT_ALPHA};function W(V,Re,re,he,Le,Ne,st,It,$t,vt){if(V===Pr){A===!0&&(be(r.BLEND),A=!1);return}if(A===!1&&(_e(r.BLEND),A=!0),V!==ly){if(V!==S||vt!==P){if((x!==ss||R!==ss)&&(r.blendEquation(r.FUNC_ADD),x=ss,R=ss),vt)switch(V){case ia:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bm:r.blendFunc(r.ONE,r.ONE);break;case Cm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rm:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case ia:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case bm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case Cm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Rm:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}I=null,L=null,Y=null,B=null,O.set(0,0,0),X=0,S=V,P=vt}return}Le=Le||Re,Ne=Ne||re,st=st||he,(Re!==x||Le!==R)&&(r.blendEquationSeparate(pt[Re],pt[Le]),x=Re,R=Le),(re!==I||he!==L||Ne!==Y||st!==B)&&(r.blendFuncSeparate(Lt[re],Lt[he],Lt[Ne],Lt[st]),I=re,L=he,Y=Ne,B=st),(It.equals(O)===!1||$t!==X)&&(r.blendColor(It.r,It.g,It.b,$t),O.copy(It),X=$t),S=V,P=!1}function mn(V,Re){V.side===Xi?be(r.CULL_FACE):_e(r.CULL_FACE);let re=V.side===Dn;Re&&(re=!re),ht(re),V.blending===ia&&V.transparent===!1?W(Pr):W(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),l.setMask(V.colorWrite);const he=V.stencilWrite;d.setTest(he),he&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),wt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):be(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){C!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),C=V)}function ut(V){V!==sy?(_e(r.CULL_FACE),V!==z&&(V===Am?r.cullFace(r.BACK):V===ay?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):be(r.CULL_FACE),z=V}function Ye(V){V!==oe&&(ae&&r.lineWidth(V),oe=V)}function wt(V,Re,re){V?(_e(r.POLYGON_OFFSET_FILL),(te!==Re||fe!==re)&&(r.polygonOffset(Re,re),te=Re,fe=re)):be(r.POLYGON_OFFSET_FILL)}function $e(V){V?_e(r.SCISSOR_TEST):be(r.SCISSOR_TEST)}function N(V){V===void 0&&(V=r.TEXTURE0+pe-1),le!==V&&(r.activeTexture(V),le=V)}function w(V,Re,re){re===void 0&&(le===null?re=r.TEXTURE0+pe-1:re=le);let he=se[re];he===void 0&&(he={type:void 0,texture:void 0},se[re]=he),(he.type!==V||he.texture!==Re)&&(le!==re&&(r.activeTexture(re),le=re),r.bindTexture(V,Re||Ee[V]),he.type=V,he.texture=Re)}function K(){const V=se[le];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(V){Ie.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Ie.copy(V))}function Be(V){Z.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function dt(V,Re){let re=p.get(Re);re===void 0&&(re=new WeakMap,p.set(Re,re));let he=re.get(V);he===void 0&&(he=r.getUniformBlockIndex(Re,V.name),re.set(V,he))}function rt(V,Re){const he=p.get(Re).get(V);h.get(Re)!==he&&(r.uniformBlockBinding(Re,he,V.__bindingPointIndex),h.set(Re,he))}function Tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},le=null,se={},_={},y=new WeakMap,M=[],T=null,A=!1,S=null,x=null,I=null,L=null,R=null,Y=null,B=null,O=new Rt(0,0,0),X=0,P=!1,C=null,z=null,oe=null,te=null,fe=null,Ie.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:_e,disable:be,bindFramebuffer:Ue,drawBuffers:Qe,useProgram:bt,setBlending:W,setMaterial:mn,setFlipSided:ht,setCullFace:ut,setLineWidth:Ye,setPolygonOffset:wt,setScissorTest:$e,activeTexture:N,bindTexture:w,unbindTexture:K,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:ke,texImage3D:Je,updateUBOMapping:dt,uniformBlockBinding:rt,texStorage2D:ct,texStorage3D:Se,texSubImage2D:de,texSubImage3D:Ge,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Fe,scissor:et,viewport:Be,reset:Tt}}function Eg(r,e,t,s){const o=KT(s);switch(t){case nv:return r*e;case rv:return r*e;case sv:return r*e*2;case av:return r*e/o.components*o.byteLength;case If:return r*e/o.components*o.byteLength;case ov:return r*e*2/o.components*o.byteLength;case Uf:return r*e*2/o.components*o.byteLength;case iv:return r*e*3/o.components*o.byteLength;case fi:return r*e*4/o.components*o.byteLength;case Ff:return r*e*4/o.components*o.byteLength;case ql:case $l:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yl:case Kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Yd:case Zd:return Math.max(r,16)*Math.max(e,8)/4;case $d:case Kd:return Math.max(r,8)*Math.max(e,8)/2;case Qd:case Jd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case ef:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case nf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case rf:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case sf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case af:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case of:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case lf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case cf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case uf:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case df:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ff:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case hf:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case pf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case mf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Zl:case gf:case vf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case lv:case xf:return Math.ceil(r/4)*Math.ceil(e/4)*8;case _f:case yf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KT(r){switch(r){case Zi:case Jg:return{byteLength:1,components:1};case co:case ev:case po:return{byteLength:2,components:1};case Lf:case Df:return{byteLength:2,components:4};case us:case Nf:case $i:return{byteLength:4,components:1};case tv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function ZT(r,e,t,s,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Nt,g=new WeakMap;let _;const y=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(N,w){return M?new OffscreenCanvas(N,w):nc("canvas")}function A(N,w,K){let me=1;const ve=$e(N);if((ve.width>K||ve.height>K)&&(me=K/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const de=Math.floor(me*ve.width),Ge=Math.floor(me*ve.height);_===void 0&&(_=T(de,Ge));const Ce=w?T(de,Ge):_;return Ce.width=de,Ce.height=Ge,Ce.getContext("2d").drawImage(N,0,0,de,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+Ge+")."),Ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),N;return N}function S(N){return N.generateMipmaps}function x(N){r.generateMipmap(N)}function I(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(N,w,K,me,ve=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de=w;if(w===r.RED&&(K===r.FLOAT&&(de=r.R32F),K===r.HALF_FLOAT&&(de=r.R16F),K===r.UNSIGNED_BYTE&&(de=r.R8)),w===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(de=r.R8UI),K===r.UNSIGNED_SHORT&&(de=r.R16UI),K===r.UNSIGNED_INT&&(de=r.R32UI),K===r.BYTE&&(de=r.R8I),K===r.SHORT&&(de=r.R16I),K===r.INT&&(de=r.R32I)),w===r.RG&&(K===r.FLOAT&&(de=r.RG32F),K===r.HALF_FLOAT&&(de=r.RG16F),K===r.UNSIGNED_BYTE&&(de=r.RG8)),w===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(de=r.RG8UI),K===r.UNSIGNED_SHORT&&(de=r.RG16UI),K===r.UNSIGNED_INT&&(de=r.RG32UI),K===r.BYTE&&(de=r.RG8I),K===r.SHORT&&(de=r.RG16I),K===r.INT&&(de=r.RG32I)),w===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(de=r.RGB8UI),K===r.UNSIGNED_SHORT&&(de=r.RGB16UI),K===r.UNSIGNED_INT&&(de=r.RGB32UI),K===r.BYTE&&(de=r.RGB8I),K===r.SHORT&&(de=r.RGB16I),K===r.INT&&(de=r.RGB32I)),w===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),K===r.UNSIGNED_INT&&(de=r.RGBA32UI),K===r.BYTE&&(de=r.RGBA8I),K===r.SHORT&&(de=r.RGBA16I),K===r.INT&&(de=r.RGBA32I)),w===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),w===r.RGBA){const Ge=ve?ac:_t.getTransfer(me);K===r.FLOAT&&(de=r.RGBA32F),K===r.HALF_FLOAT&&(de=r.RGBA16F),K===r.UNSIGNED_BYTE&&(de=Ge===Ct?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(N,w){let K;return N?w===null||w===us||w===da?K=r.DEPTH24_STENCIL8:w===$i?K=r.DEPTH32F_STENCIL8:w===co&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===us||w===da?K=r.DEPTH_COMPONENT24:w===$i?K=r.DEPTH_COMPONENT32F:w===co&&(K=r.DEPTH_COMPONENT16),K}function Y(N,w){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==mi&&N.minFilter!==Ei?Math.log2(Math.max(w.width,w.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?w.mipmaps.length:1}function B(N){const w=N.target;w.removeEventListener("dispose",B),X(w),w.isVideoTexture&&g.delete(w)}function O(N){const w=N.target;w.removeEventListener("dispose",O),C(w)}function X(N){const w=s.get(N);if(w.__webglInit===void 0)return;const K=N.source,me=y.get(K);if(me){const ve=me[w.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(N),Object.keys(me).length===0&&y.delete(K)}s.remove(N)}function P(N){const w=s.get(N);r.deleteTexture(w.__webglTexture);const K=N.source,me=y.get(K);delete me[w.__cacheKey],u.memory.textures--}function C(N){const w=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(w.__webglFramebuffer[me]))for(let ve=0;ve<w.__webglFramebuffer[me].length;ve++)r.deleteFramebuffer(w.__webglFramebuffer[me][ve]);else r.deleteFramebuffer(w.__webglFramebuffer[me]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[me])}else{if(Array.isArray(w.__webglFramebuffer))for(let me=0;me<w.__webglFramebuffer.length;me++)r.deleteFramebuffer(w.__webglFramebuffer[me]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let me=0;me<w.__webglColorRenderbuffer.length;me++)w.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[me]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}const K=N.textures;for(let me=0,ve=K.length;me<ve;me++){const de=s.get(K[me]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),u.memory.textures--),s.remove(K[me])}s.remove(N)}let z=0;function oe(){z=0}function te(){const N=z;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),z+=1,N}function fe(N){const w=[];return w.push(N.wrapS),w.push(N.wrapT),w.push(N.wrapR||0),w.push(N.magFilter),w.push(N.minFilter),w.push(N.anisotropy),w.push(N.internalFormat),w.push(N.format),w.push(N.type),w.push(N.generateMipmaps),w.push(N.premultiplyAlpha),w.push(N.flipY),w.push(N.unpackAlignment),w.push(N.colorSpace),w.join()}function pe(N,w){const K=s.get(N);if(N.isVideoTexture&&Ye(N),N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){const me=N.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,N,w);return}}t.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+w)}function ae(N,w){const K=s.get(N);if(N.version>0&&K.__version!==N.version){Z(K,N,w);return}t.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+w)}function ce(N,w){const K=s.get(N);if(N.version>0&&K.__version!==N.version){Z(K,N,w);return}t.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+w)}function k(N,w){const K=s.get(N);if(N.version>0&&K.__version!==N.version){ue(K,N,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+w)}const le={[Xd]:r.REPEAT,[os]:r.CLAMP_TO_EDGE,[qd]:r.MIRRORED_REPEAT},se={[mi]:r.NEAREST,[Uy]:r.NEAREST_MIPMAP_NEAREST,[Tl]:r.NEAREST_MIPMAP_LINEAR,[Ei]:r.LINEAR,[Yu]:r.LINEAR_MIPMAP_NEAREST,[ls]:r.LINEAR_MIPMAP_LINEAR},U={[zy]:r.NEVER,[Xy]:r.ALWAYS,[Hy]:r.LESS,[cv]:r.LEQUAL,[Vy]:r.EQUAL,[Wy]:r.GEQUAL,[Gy]:r.GREATER,[jy]:r.NOTEQUAL};function ne(N,w){if(w.type===$i&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Ei||w.magFilter===Yu||w.magFilter===Tl||w.magFilter===ls||w.minFilter===Ei||w.minFilter===Yu||w.minFilter===Tl||w.minFilter===ls)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,le[w.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,le[w.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,le[w.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,se[w.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,se[w.minFilter]),w.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,U[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===mi||w.minFilter!==Tl&&w.minFilter!==ls||w.type===$i&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||s.get(w).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,o.getMaxAnisotropy())),s.get(w).__currentAnisotropy=w.anisotropy}}}function Ie(N,w){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,w.addEventListener("dispose",B));const me=w.source;let ve=y.get(me);ve===void 0&&(ve={},y.set(me,ve));const de=fe(w);if(de!==N.__cacheKey){ve[de]===void 0&&(ve[de]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,K=!0),ve[de].usedTimes++;const Ge=ve[N.__cacheKey];Ge!==void 0&&(ve[N.__cacheKey].usedTimes--,Ge.usedTimes===0&&P(w)),N.__cacheKey=de,N.__webglTexture=ve[de].texture}return K}function Z(N,w,K){let me=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(me=r.TEXTURE_3D);const ve=Ie(N,w),de=w.source;t.bindTexture(me,N.__webglTexture,r.TEXTURE0+K);const Ge=s.get(de);if(de.version!==Ge.__version||ve===!0){t.activeTexture(r.TEXTURE0+K);const Ce=_t.getPrimaries(_t.workingColorSpace),Fe=w.colorSpace===Ar?null:_t.getPrimaries(w.colorSpace),ct=w.colorSpace===Ar||Ce===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Se=A(w.image,!1,o.maxTextureSize);Se=wt(w,Se);const ke=l.convert(w.format,w.colorSpace),Je=l.convert(w.type);let et=L(w.internalFormat,ke,Je,w.colorSpace,w.isVideoTexture);ne(me,w);let Be;const dt=w.mipmaps,rt=w.isVideoTexture!==!0,Tt=Ge.__version===void 0||ve===!0,V=de.dataReady,Re=Y(w,Se);if(w.isDepthTexture)et=R(w.format===fa,w.type),Tt&&(rt?t.texStorage2D(r.TEXTURE_2D,1,et,Se.width,Se.height):t.texImage2D(r.TEXTURE_2D,0,et,Se.width,Se.height,0,ke,Je,null));else if(w.isDataTexture)if(dt.length>0){rt&&Tt&&t.texStorage2D(r.TEXTURE_2D,Re,et,dt[0].width,dt[0].height);for(let re=0,he=dt.length;re<he;re++)Be=dt[re],rt?V&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Be.width,Be.height,ke,Je,Be.data):t.texImage2D(r.TEXTURE_2D,re,et,Be.width,Be.height,0,ke,Je,Be.data);w.generateMipmaps=!1}else rt?(Tt&&t.texStorage2D(r.TEXTURE_2D,Re,et,Se.width,Se.height),V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,Je,Se.data)):t.texImage2D(r.TEXTURE_2D,0,et,Se.width,Se.height,0,ke,Je,Se.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){rt&&Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,et,dt[0].width,dt[0].height,Se.depth);for(let re=0,he=dt.length;re<he;re++)if(Be=dt[re],w.format!==fi)if(ke!==null)if(rt){if(V)if(w.layerUpdates.size>0){const Le=Eg(Be.width,Be.height,w.format,w.type);for(const Ne of w.layerUpdates){const st=Be.data.subarray(Ne*Le/Be.data.BYTES_PER_ELEMENT,(Ne+1)*Le/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,Ne,Be.width,Be.height,1,ke,st)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,Se.depth,ke,Be.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,et,Be.width,Be.height,Se.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?V&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,Se.depth,ke,Je,Be.data):t.texImage3D(r.TEXTURE_2D_ARRAY,re,et,Be.width,Be.height,Se.depth,0,ke,Je,Be.data)}else{rt&&Tt&&t.texStorage2D(r.TEXTURE_2D,Re,et,dt[0].width,dt[0].height);for(let re=0,he=dt.length;re<he;re++)Be=dt[re],w.format!==fi?ke!==null?rt?V&&t.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(r.TEXTURE_2D,re,et,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?V&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,Be.width,Be.height,ke,Je,Be.data):t.texImage2D(r.TEXTURE_2D,re,et,Be.width,Be.height,0,ke,Je,Be.data)}else if(w.isDataArrayTexture)if(rt){if(Tt&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,et,Se.width,Se.height,Se.depth),V)if(w.layerUpdates.size>0){const re=Eg(Se.width,Se.height,w.format,w.type);for(const he of w.layerUpdates){const Le=Se.data.subarray(he*re/Se.data.BYTES_PER_ELEMENT,(he+1)*re/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,ke,Je,Le)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,Je,Se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,et,Se.width,Se.height,Se.depth,0,ke,Je,Se.data);else if(w.isData3DTexture)rt?(Tt&&t.texStorage3D(r.TEXTURE_3D,Re,et,Se.width,Se.height,Se.depth),V&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,Je,Se.data)):t.texImage3D(r.TEXTURE_3D,0,et,Se.width,Se.height,Se.depth,0,ke,Je,Se.data);else if(w.isFramebufferTexture){if(Tt)if(rt)t.texStorage2D(r.TEXTURE_2D,Re,et,Se.width,Se.height);else{let re=Se.width,he=Se.height;for(let Le=0;Le<Re;Le++)t.texImage2D(r.TEXTURE_2D,Le,et,re,he,0,ke,Je,null),re>>=1,he>>=1}}else if(dt.length>0){if(rt&&Tt){const re=$e(dt[0]);t.texStorage2D(r.TEXTURE_2D,Re,et,re.width,re.height)}for(let re=0,he=dt.length;re<he;re++)Be=dt[re],rt?V&&t.texSubImage2D(r.TEXTURE_2D,re,0,0,ke,Je,Be):t.texImage2D(r.TEXTURE_2D,re,et,ke,Je,Be);w.generateMipmaps=!1}else if(rt){if(Tt){const re=$e(Se);t.texStorage2D(r.TEXTURE_2D,Re,et,re.width,re.height)}V&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Je,Se)}else t.texImage2D(r.TEXTURE_2D,0,et,ke,Je,Se);S(w)&&x(me),Ge.__version=de.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function ue(N,w,K){if(w.image.length!==6)return;const me=Ie(N,w),ve=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+K);const de=s.get(ve);if(ve.version!==de.__version||me===!0){t.activeTexture(r.TEXTURE0+K);const Ge=_t.getPrimaries(_t.workingColorSpace),Ce=w.colorSpace===Ar?null:_t.getPrimaries(w.colorSpace),Fe=w.colorSpace===Ar||Ge===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ct=w.isCompressedTexture||w.image[0].isCompressedTexture,Se=w.image[0]&&w.image[0].isDataTexture,ke=[];for(let he=0;he<6;he++)!ct&&!Se?ke[he]=A(w.image[he],!0,o.maxCubemapSize):ke[he]=Se?w.image[he].image:w.image[he],ke[he]=wt(w,ke[he]);const Je=ke[0],et=l.convert(w.format,w.colorSpace),Be=l.convert(w.type),dt=L(w.internalFormat,et,Be,w.colorSpace),rt=w.isVideoTexture!==!0,Tt=de.__version===void 0||me===!0,V=ve.dataReady;let Re=Y(w,Je);ne(r.TEXTURE_CUBE_MAP,w);let re;if(ct){rt&&Tt&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,dt,Je.width,Je.height);for(let he=0;he<6;he++){re=ke[he].mipmaps;for(let Le=0;Le<re.length;Le++){const Ne=re[Le];w.format!==fi?et!==null?rt?V&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Ne.width,Ne.height,et,Ne.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,dt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Ne.width,Ne.height,et,Be,Ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,dt,Ne.width,Ne.height,0,et,Be,Ne.data)}}}else{if(re=w.mipmaps,rt&&Tt){re.length>0&&Re++;const he=$e(ke[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,dt,he.width,he.height)}for(let he=0;he<6;he++)if(Se){rt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ke[he].width,ke[he].height,et,Be,ke[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,ke[he].width,ke[he].height,0,et,Be,ke[he].data);for(let Le=0;Le<re.length;Le++){const st=re[Le].image[he].image;rt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,st.width,st.height,et,Be,st.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,dt,st.width,st.height,0,et,Be,st.data)}}else{rt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,et,Be,ke[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,et,Be,ke[he]);for(let Le=0;Le<re.length;Le++){const Ne=re[Le];rt?V&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,et,Be,Ne.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,dt,et,Be,Ne.image[he])}}}S(w)&&x(r.TEXTURE_CUBE_MAP),de.__version=ve.version,w.onUpdate&&w.onUpdate(w)}N.__version=w.version}function Ee(N,w,K,me,ve,de){const Ge=l.convert(K.format,K.colorSpace),Ce=l.convert(K.type),Fe=L(K.internalFormat,Ge,Ce,K.colorSpace),ct=s.get(w),Se=s.get(K);if(Se.__renderTarget=w,!ct.__hasExternalTextures){const ke=Math.max(1,w.width>>de),Je=Math.max(1,w.height>>de);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?t.texImage3D(ve,de,Fe,ke,Je,w.depth,0,Ge,Ce,null):t.texImage2D(ve,de,Fe,ke,Je,0,Ge,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,N),ut(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ve,Se.__webglTexture,0,ht(w)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ve,Se.__webglTexture,de),t.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(N,w,K){if(r.bindRenderbuffer(r.RENDERBUFFER,N),w.depthBuffer){const me=w.depthTexture,ve=me&&me.isDepthTexture?me.type:null,de=R(w.stencilBuffer,ve),Ge=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=ht(w);ut(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,de,w.width,w.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,de,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,de,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,N)}else{const me=w.textures;for(let ve=0;ve<me.length;ve++){const de=me[ve],Ge=l.convert(de.format,de.colorSpace),Ce=l.convert(de.type),Fe=L(de.internalFormat,Ge,Ce,de.colorSpace),ct=ht(w);K&&ut(w)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,Fe,w.width,w.height):ut(w)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,Fe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function be(N,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,N),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(w.depthTexture);me.__renderTarget=w,(!me.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),pe(w.depthTexture,0);const ve=me.__webglTexture,de=ht(w);if(w.depthTexture.format===ra)ut(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(w.depthTexture.format===fa)ut(w)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ue(N){const w=s.get(N),K=N.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==N.depthTexture){const me=N.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),me){const ve=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),w.__depthDisposeCallback=ve}w.__boundDepthTexture=me}if(N.depthTexture&&!w.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");be(w.__webglFramebuffer,N)}else if(K){w.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[me]),w.__webglDepthbuffer[me]===void 0)w.__webglDepthbuffer[me]=r.createRenderbuffer(),_e(w.__webglDepthbuffer[me],N,!1);else{const ve=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=w.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,de)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),_e(w.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,ve)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(N,w,K){const me=s.get(N);w!==void 0&&Ee(me.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Ue(N)}function bt(N){const w=N.texture,K=s.get(N),me=s.get(w);N.addEventListener("dispose",O);const ve=N.textures,de=N.isWebGLCubeRenderTarget===!0,Ge=ve.length>1;if(Ge||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=w.version,u.memory.textures++),de){K.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer[Ce]=[];for(let Fe=0;Fe<w.mipmaps.length;Fe++)K.__webglFramebuffer[Ce][Fe]=r.createFramebuffer()}else K.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ce=0;Ce<w.mipmaps.length;Ce++)K.__webglFramebuffer[Ce]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let Ce=0,Fe=ve.length;Ce<Fe;Ce++){const ct=s.get(ve[Ce]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),u.memory.textures++)}if(N.samples>0&&ut(N)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Fe=ve[Ce];K.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Ce]);const ct=l.convert(Fe.format,Fe.colorSpace),Se=l.convert(Fe.type),ke=L(Fe.internalFormat,ct,Se,Fe.colorSpace,N.isXRRenderTarget===!0),Je=ht(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,ke,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,K.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(K.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){t.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),ne(r.TEXTURE_CUBE_MAP,w);for(let Ce=0;Ce<6;Ce++)if(w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee(K.__webglFramebuffer[Ce][Fe],N,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Fe);else Ee(K.__webglFramebuffer[Ce],N,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);S(w)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ge){for(let Ce=0,Fe=ve.length;Ce<Fe;Ce++){const ct=ve[Ce],Se=s.get(ct);t.bindTexture(r.TEXTURE_2D,Se.__webglTexture),ne(r.TEXTURE_2D,ct),Ee(K.__webglFramebuffer,N,ct,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),S(ct)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,me.__webglTexture),ne(Ce,w),w.mipmaps&&w.mipmaps.length>0)for(let Fe=0;Fe<w.mipmaps.length;Fe++)Ee(K.__webglFramebuffer[Fe],N,w,r.COLOR_ATTACHMENT0,Ce,Fe);else Ee(K.__webglFramebuffer,N,w,r.COLOR_ATTACHMENT0,Ce,0);S(w)&&x(Ce),t.unbindTexture()}N.depthBuffer&&Ue(N)}function pt(N){const w=N.textures;for(let K=0,me=w.length;K<me;K++){const ve=w[K];if(S(ve)){const de=I(N),Ge=s.get(ve).__webglTexture;t.bindTexture(de,Ge),x(de),t.unbindTexture()}}}const Lt=[],W=[];function mn(N){if(N.samples>0){if(ut(N)===!1){const w=N.textures,K=N.width,me=N.height;let ve=r.COLOR_BUFFER_BIT;const de=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=s.get(N),Ce=w.length>1;if(Ce)for(let Fe=0;Fe<w.length;Fe++)t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Fe=0;Fe<w.length;Fe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ct=s.get(w[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,K,me,0,0,K,me,ve,r.NEAREST),h===!0&&(Lt.length=0,W.length=0,Lt.push(r.COLOR_ATTACHMENT0+Fe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Lt.push(de),W.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,W)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Fe=0;Fe<w.length;Fe++){t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ct=s.get(w[Fe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,ct,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const w=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function ht(N){return Math.min(o.maxSamples,N.samples)}function ut(N){const w=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function Ye(N){const w=u.render.frame;g.get(N)!==w&&(g.set(N,w),N.update())}function wt(N,w){const K=N.colorSpace,me=N.format,ve=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==ma&&K!==Ar&&(_t.getTransfer(K)===Ct?(me!==fi||ve!==Zi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),w}function $e(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=te,this.resetTextureUnits=oe,this.setTexture2D=pe,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=k,this.rebindTextures=Qe,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ut}function QT(r,e){function t(s,o=Ar){let l;const u=_t.getTransfer(o);if(s===Zi)return r.UNSIGNED_BYTE;if(s===Lf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Df)return r.UNSIGNED_SHORT_5_5_5_1;if(s===tv)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Jg)return r.BYTE;if(s===ev)return r.SHORT;if(s===co)return r.UNSIGNED_SHORT;if(s===Nf)return r.INT;if(s===us)return r.UNSIGNED_INT;if(s===$i)return r.FLOAT;if(s===po)return r.HALF_FLOAT;if(s===nv)return r.ALPHA;if(s===iv)return r.RGB;if(s===fi)return r.RGBA;if(s===rv)return r.LUMINANCE;if(s===sv)return r.LUMINANCE_ALPHA;if(s===ra)return r.DEPTH_COMPONENT;if(s===fa)return r.DEPTH_STENCIL;if(s===av)return r.RED;if(s===If)return r.RED_INTEGER;if(s===ov)return r.RG;if(s===Uf)return r.RG_INTEGER;if(s===Ff)return r.RGBA_INTEGER;if(s===ql||s===$l||s===Yl||s===Kl)if(u===Ct)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===ql)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$l)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===ql)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$l)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Yl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Kl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===$d||s===Yd||s===Kd||s===Zd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===$d)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Yd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Kd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Zd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Qd||s===Jd||s===ef)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===Qd||s===Jd)return u===Ct?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===ef)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===tf||s===nf||s===rf||s===sf||s===af||s===of||s===lf||s===cf||s===uf||s===df||s===ff||s===hf||s===pf||s===mf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===tf)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===nf)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===rf)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===sf)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===af)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===of)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===lf)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===cf)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===uf)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===df)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ff)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===hf)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===pf)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===mf)return u===Ct?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Zl||s===gf||s===vf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Zl)return u===Ct?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===gf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===vf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===lv||s===xf||s===_f||s===yf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Zl)return l.COMPRESSED_RED_RGTC1_EXT;if(s===xf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_f)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===yf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===da?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}class JT extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Wl extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ew={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Wl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Wl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Wl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let o=null,l=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const A of e.hand.values()){const S=t.getJointPose(A,s),x=this._getHandJoint(p,A);S!==null&&(x.matrix.fromArray(S.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=S.radius),x.visible=S!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],y=g.position.distanceTo(_.position),M=.02,T=.005;p.inputState.pinching&&y>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&y<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=t.getPose(e.targetRaySpace,s),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(ew)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Wl;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}const tw=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nw=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class iw{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const o=new In,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=s.depthNear||t.depthFar!=s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new Dr({vertexShader:tw,fragmentShader:nw,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new hi(new cc(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rw extends ga{constructor(e,t){super();const s=this;let o=null,l=1,u=null,d="local-floor",h=1,p=null,g=null,_=null,y=null,M=null,T=null;const A=new iw,S=t.getContextAttributes();let x=null,I=null;const L=[],R=[],Y=new Nt;let B=null;const O=new Hn;O.viewport=new Gt;const X=new Hn;X.viewport=new Gt;const P=[O,X],C=new JT;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=L[Z];return ue===void 0&&(ue=new Td,L[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=L[Z];return ue===void 0&&(ue=new Td,L[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=L[Z];return ue===void 0&&(ue=new Td,L[Z]=ue),ue.getHandSpace()};function te(Z){const ue=R.indexOf(Z.inputSource);if(ue===-1)return;const Ee=L[ue];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,p||u),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function fe(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<L.length;Z++){const ue=R[Z];ue!==null&&(R[Z]=null,L[Z].disconnect(ue))}z=null,oe=null,A.reset(),e.setRenderTarget(x),M=null,y=null,_=null,o=null,I=null,Ie.stop(),s.isPresenting=!1,e.setPixelRatio(B),e.setSize(Y.width,Y.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return y!==null?y:M},this.getBinding=function(){return _},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(x=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",pe),S.xrCompatible!==!0&&await t.makeXRCompatible(),B=e.getPixelRatio(),e.getSize(Y),o.renderState.layers===void 0){const ue={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,ue),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),I=new ds(M.framebufferWidth,M.framebufferHeight,{format:fi,type:Zi,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil})}else{let ue=null,Ee=null,_e=null;S.depth&&(_e=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=S.stencil?fa:ra,Ee=S.stencil?da:us);const be={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};_=new XRWebGLBinding(o,t),y=_.createProjectionLayer(be),o.updateRenderState({layers:[y]}),e.setPixelRatio(1),e.setSize(y.textureWidth,y.textureHeight,!1),I=new ds(y.textureWidth,y.textureHeight,{format:fi,type:Zi,depthTexture:new Mv(y.textureWidth,y.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:y.ignoreDepthValues===!1})}I.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(d),Ie.setContext(o),Ie.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function pe(Z){for(let ue=0;ue<Z.removed.length;ue++){const Ee=Z.removed[ue],_e=R.indexOf(Ee);_e>=0&&(R[_e]=null,L[_e].disconnect(Ee))}for(let ue=0;ue<Z.added.length;ue++){const Ee=Z.added[ue];let _e=R.indexOf(Ee);if(_e===-1){for(let Ue=0;Ue<L.length;Ue++)if(Ue>=R.length){R.push(Ee),_e=Ue;break}else if(R[Ue]===null){R[Ue]=Ee,_e=Ue;break}if(_e===-1)break}const be=L[_e];be&&be.connect(Ee)}}const ae=new ie,ce=new ie;function k(Z,ue,Ee){ae.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(Ee.matrixWorld);const _e=ae.distanceTo(ce),be=ue.projectionMatrix.elements,Ue=Ee.projectionMatrix.elements,Qe=be[14]/(be[10]-1),bt=be[14]/(be[10]+1),pt=(be[9]+1)/be[5],Lt=(be[9]-1)/be[5],W=(be[8]-1)/be[0],mn=(Ue[8]+1)/Ue[0],ht=Qe*W,ut=Qe*mn,Ye=_e/(-W+mn),wt=Ye*-W;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ(Ye),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),be[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const $e=Qe+Ye,N=bt+Ye,w=ht-wt,K=ut+(_e-wt),me=pt*bt/N*$e,ve=Lt*bt/N*$e;Z.projectionMatrix.makePerspective(w,K,me,ve,$e,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let ue=Z.near,Ee=Z.far;A.texture!==null&&(A.depthNear>0&&(ue=A.depthNear),A.depthFar>0&&(Ee=A.depthFar)),C.near=X.near=O.near=ue,C.far=X.far=O.far=Ee,(z!==C.near||oe!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,oe=C.far),O.layers.mask=Z.layers.mask|2,X.layers.mask=Z.layers.mask|4,C.layers.mask=O.layers.mask|X.layers.mask;const _e=Z.parent,be=C.cameras;le(C,_e);for(let Ue=0;Ue<be.length;Ue++)le(be[Ue],_e);be.length===2?k(C,O,X):C.projectionMatrix.copy(O.projectionMatrix),se(Z,C,_e)};function se(Z,ue,Ee){Ee===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Sf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(y===null&&M===null))return h},this.setFoveation=function(Z){h=Z,y!==null&&(y.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let U=null;function ne(Z,ue){if(g=ue.getViewerPose(p||u),T=ue,g!==null){const Ee=g.views;M!==null&&(e.setRenderTargetFramebuffer(I,M.framebuffer),e.setRenderTarget(I));let _e=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let Ue=0;Ue<Ee.length;Ue++){const Qe=Ee[Ue];let bt=null;if(M!==null)bt=M.getViewport(Qe);else{const Lt=_.getViewSubImage(y,Qe);bt=Lt.viewport,Ue===0&&(e.setRenderTargetTextures(I,Lt.colorTexture,y.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(I))}let pt=P[Ue];pt===void 0&&(pt=new Hn,pt.layers.enable(Ue),pt.viewport=new Gt,P[Ue]=pt),pt.matrix.fromArray(Qe.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Qe.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(bt.x,bt.y,bt.width,bt.height),Ue===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(pt)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")){const Ue=_.getDepthInformation(Ee[0]);Ue&&Ue.isValid&&Ue.texture&&A.init(e,Ue,o.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const _e=R[Ee],be=L[Ee];_e!==null&&be!==void 0&&be.update(_e,ue,p||u)}U&&U(Z,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),T=null}const Ie=new Sv;Ie.setAnimationLoop(ne),this.setAnimationLoop=function(Z){U=Z},this.dispose=function(){}}}const ns=new Qi,sw=new qt;function aw(r,e){function t(S,x){S.matrixAutoUpdate===!0&&S.updateMatrix(),x.value.copy(S.matrix)}function s(S,x){x.color.getRGB(S.fogColor.value,vv(r)),x.isFog?(S.fogNear.value=x.near,S.fogFar.value=x.far):x.isFogExp2&&(S.fogDensity.value=x.density)}function o(S,x,I,L,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(S,x):x.isMeshToonMaterial?(l(S,x),_(S,x)):x.isMeshPhongMaterial?(l(S,x),g(S,x)):x.isMeshStandardMaterial?(l(S,x),y(S,x),x.isMeshPhysicalMaterial&&M(S,x,R)):x.isMeshMatcapMaterial?(l(S,x),T(S,x)):x.isMeshDepthMaterial?l(S,x):x.isMeshDistanceMaterial?(l(S,x),A(S,x)):x.isMeshNormalMaterial?l(S,x):x.isLineBasicMaterial?(u(S,x),x.isLineDashedMaterial&&d(S,x)):x.isPointsMaterial?h(S,x,I,L):x.isSpriteMaterial?p(S,x):x.isShadowMaterial?(S.color.value.copy(x.color),S.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(S,x){S.opacity.value=x.opacity,x.color&&S.diffuse.value.copy(x.color),x.emissive&&S.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.bumpMap&&(S.bumpMap.value=x.bumpMap,t(x.bumpMap,S.bumpMapTransform),S.bumpScale.value=x.bumpScale,x.side===Dn&&(S.bumpScale.value*=-1)),x.normalMap&&(S.normalMap.value=x.normalMap,t(x.normalMap,S.normalMapTransform),S.normalScale.value.copy(x.normalScale),x.side===Dn&&S.normalScale.value.negate()),x.displacementMap&&(S.displacementMap.value=x.displacementMap,t(x.displacementMap,S.displacementMapTransform),S.displacementScale.value=x.displacementScale,S.displacementBias.value=x.displacementBias),x.emissiveMap&&(S.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,S.emissiveMapTransform)),x.specularMap&&(S.specularMap.value=x.specularMap,t(x.specularMap,S.specularMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest);const I=e.get(x),L=I.envMap,R=I.envMapRotation;L&&(S.envMap.value=L,ns.copy(R),ns.x*=-1,ns.y*=-1,ns.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(ns.y*=-1,ns.z*=-1),S.envMapRotation.value.setFromMatrix4(sw.makeRotationFromEuler(ns)),S.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,S.reflectivity.value=x.reflectivity,S.ior.value=x.ior,S.refractionRatio.value=x.refractionRatio),x.lightMap&&(S.lightMap.value=x.lightMap,S.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,S.lightMapTransform)),x.aoMap&&(S.aoMap.value=x.aoMap,S.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,S.aoMapTransform))}function u(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform))}function d(S,x){S.dashSize.value=x.dashSize,S.totalSize.value=x.dashSize+x.gapSize,S.scale.value=x.scale}function h(S,x,I,L){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.size.value=x.size*I,S.scale.value=L*.5,x.map&&(S.map.value=x.map,t(x.map,S.uvTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function p(S,x){S.diffuse.value.copy(x.color),S.opacity.value=x.opacity,S.rotation.value=x.rotation,x.map&&(S.map.value=x.map,t(x.map,S.mapTransform)),x.alphaMap&&(S.alphaMap.value=x.alphaMap,t(x.alphaMap,S.alphaMapTransform)),x.alphaTest>0&&(S.alphaTest.value=x.alphaTest)}function g(S,x){S.specular.value.copy(x.specular),S.shininess.value=Math.max(x.shininess,1e-4)}function _(S,x){x.gradientMap&&(S.gradientMap.value=x.gradientMap)}function y(S,x){S.metalness.value=x.metalness,x.metalnessMap&&(S.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,S.metalnessMapTransform)),S.roughness.value=x.roughness,x.roughnessMap&&(S.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,S.roughnessMapTransform)),x.envMap&&(S.envMapIntensity.value=x.envMapIntensity)}function M(S,x,I){S.ior.value=x.ior,x.sheen>0&&(S.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),S.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(S.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,S.sheenColorMapTransform)),x.sheenRoughnessMap&&(S.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,S.sheenRoughnessMapTransform))),x.clearcoat>0&&(S.clearcoat.value=x.clearcoat,S.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(S.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,S.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(S.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===Dn&&S.clearcoatNormalScale.value.negate())),x.dispersion>0&&(S.dispersion.value=x.dispersion),x.iridescence>0&&(S.iridescence.value=x.iridescence,S.iridescenceIOR.value=x.iridescenceIOR,S.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(S.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,S.iridescenceMapTransform)),x.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),x.transmission>0&&(S.transmission.value=x.transmission,S.transmissionSamplerMap.value=I.texture,S.transmissionSamplerSize.value.set(I.width,I.height),x.transmissionMap&&(S.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,S.transmissionMapTransform)),S.thickness.value=x.thickness,x.thicknessMap&&(S.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=x.attenuationDistance,S.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(S.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(S.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=x.specularIntensity,S.specularColor.value.copy(x.specularColor),x.specularColorMap&&(S.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,S.specularColorMapTransform)),x.specularIntensityMap&&(S.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,S.specularIntensityMapTransform))}function T(S,x){x.matcap&&(S.matcap.value=x.matcap)}function A(S,x){const I=e.get(x).light;S.referencePosition.value.setFromMatrixPosition(I.matrixWorld),S.nearDistance.value=I.shadow.camera.near,S.farDistance.value=I.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function ow(r,e,t,s){let o={},l={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(I,L){const R=L.program;s.uniformBlockBinding(I,R)}function p(I,L){let R=o[I.id];R===void 0&&(T(I),R=g(I),o[I.id]=R,I.addEventListener("dispose",S));const Y=L.program;s.updateUBOMapping(I,Y);const B=e.render.frame;l[I.id]!==B&&(y(I),l[I.id]=B)}function g(I){const L=_();I.__bindingPointIndex=L;const R=r.createBuffer(),Y=I.__size,B=I.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,Y,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,R),R}function _(){for(let I=0;I<d;I++)if(u.indexOf(I)===-1)return u.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function y(I){const L=o[I.id],R=I.uniforms,Y=I.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let B=0,O=R.length;B<O;B++){const X=Array.isArray(R[B])?R[B]:[R[B]];for(let P=0,C=X.length;P<C;P++){const z=X[P];if(M(z,B,P,Y)===!0){const oe=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let fe=0;for(let pe=0;pe<te.length;pe++){const ae=te[pe],ce=A(ae);typeof ae=="number"||typeof ae=="boolean"?(z.__data[0]=ae,r.bufferSubData(r.UNIFORM_BUFFER,oe+fe,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=0,z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=0,z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=0):(ae.toArray(z.__data,fe),fe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,oe,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(I,L,R,Y){const B=I.value,O=L+"_"+R;if(Y[O]===void 0)return typeof B=="number"||typeof B=="boolean"?Y[O]=B:Y[O]=B.clone(),!0;{const X=Y[O];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return Y[O]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function T(I){const L=I.uniforms;let R=0;const Y=16;for(let O=0,X=L.length;O<X;O++){const P=Array.isArray(L[O])?L[O]:[L[O]];for(let C=0,z=P.length;C<z;C++){const oe=P[C],te=Array.isArray(oe.value)?oe.value:[oe.value];for(let fe=0,pe=te.length;fe<pe;fe++){const ae=te[fe],ce=A(ae),k=R%Y,le=k%ce.boundary,se=k+le;R+=le,se!==0&&Y-se<ce.storage&&(R+=Y-se),oe.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=R,R+=ce.storage}}}const B=R%Y;return B>0&&(R+=Y-B),I.__size=R,I.__cache={},this}function A(I){const L={boundary:0,storage:0};return typeof I=="number"||typeof I=="boolean"?(L.boundary=4,L.storage=4):I.isVector2?(L.boundary=8,L.storage=8):I.isVector3||I.isColor?(L.boundary=16,L.storage=12):I.isVector4?(L.boundary=16,L.storage=16):I.isMatrix3?(L.boundary=48,L.storage=48):I.isMatrix4?(L.boundary=64,L.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),L}function S(I){const L=I.target;L.removeEventListener("dispose",S);const R=u.indexOf(L.__bindingPointIndex);u.splice(R,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function x(){for(const I in o)r.deleteBuffer(o[I]);u=[],o={},l={}}return{bind:h,update:p,dispose:x}}class bv{constructor(e={}){const{canvas:t=$y(),context:s=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:y=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=u;const T=new Uint32Array(4),A=new Int32Array(4);let S=null,x=null;const I=[],L=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Jn,this.toneMapping=Nr,this.toneMappingExposure=1;const R=this;let Y=!1,B=0,O=0,X=null,P=-1,C=null;const z=new Gt,oe=new Gt;let te=null;const fe=new Rt(0);let pe=0,ae=t.width,ce=t.height,k=1,le=null,se=null;const U=new Gt(0,0,ae,ce),ne=new Gt(0,0,ae,ce);let Ie=!1;const Z=new yv;let ue=!1,Ee=!1;const _e=new qt,be=new qt,Ue=new ie,Qe=new Gt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Lt(){return X===null?k:1}let W=s;function mn(b,G){return t.getContext(b,G)}try{const b={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pf}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),W===null){const G="webgl2";if(W=mn(G,b),W===null)throw mn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ht,ut,Ye,wt,$e,N,w,K,me,ve,de,Ge,Ce,Fe,ct,Se,ke,Je,et,Be,dt,rt,Tt,V;function Re(){ht=new h1(W),ht.init(),rt=new QT(W,ht),ut=new a1(W,ht,e,rt),Ye=new YT(W,ht),ut.reverseDepthBuffer&&y&&Ye.buffers.depth.setReversed(!0),wt=new g1(W),$e=new IT,N=new ZT(W,ht,Ye,$e,ut,rt,wt),w=new l1(R),K=new f1(R),me=new MS(W),Tt=new r1(W,me),ve=new p1(W,me,wt,Tt),de=new x1(W,ve,me,wt),et=new v1(W,ut,N),Se=new o1($e),Ge=new DT(R,w,K,ht,ut,Tt,Se),Ce=new aw(R,$e),Fe=new FT,ct=new VT(ht),Je=new i1(R,w,K,Ye,de,M,h),ke=new qT(R,de,ut),V=new ow(W,wt,ut,Ye),Be=new s1(W,ht,wt),dt=new m1(W,ht,wt),wt.programs=Ge.programs,R.capabilities=ut,R.extensions=ht,R.properties=$e,R.renderLists=Fe,R.shadowMap=ke,R.state=Ye,R.info=wt}Re();const re=new rw(R,W);this.xr=re,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const b=ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(ae,ce,!1))},this.getSize=function(b){return b.set(ae,ce)},this.setSize=function(b,G,J=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=b,ce=G,t.width=Math.floor(b*k),t.height=Math.floor(G*k),J===!0&&(t.style.width=b+"px",t.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(ae*k,ce*k).floor()},this.setDrawingBufferSize=function(b,G,J){ae=b,ce=G,k=J,t.width=Math.floor(b*J),t.height=Math.floor(G*J),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(U)},this.setViewport=function(b,G,J,ee){b.isVector4?U.set(b.x,b.y,b.z,b.w):U.set(b,G,J,ee),Ye.viewport(z.copy(U).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,G,J,ee){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,G,J,ee),Ye.scissor(oe.copy(ne).multiplyScalar(k).round())},this.getScissorTest=function(){return Ie},this.setScissorTest=function(b){Ye.setScissorTest(Ie=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(b=!0,G=!0,J=!0){let ee=0;if(b){let j=!1;if(X!==null){const we=X.texture.format;j=we===Ff||we===Uf||we===If}if(j){const we=X.texture.type,Me=we===Zi||we===us||we===co||we===da||we===Lf||we===Df,je=Je.getClearColor(),He=Je.getClearAlpha(),tt=je.r,it=je.g,We=je.b;Me?(T[0]=tt,T[1]=it,T[2]=We,T[3]=He,W.clearBufferuiv(W.COLOR,0,T)):(A[0]=tt,A[1]=it,A[2]=We,A[3]=He,W.clearBufferiv(W.COLOR,0,A))}else ee|=W.COLOR_BUFFER_BIT}G&&(ee|=W.DEPTH_BUFFER_BIT),J&&(ee|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Fe.dispose(),ct.dispose(),$e.dispose(),w.dispose(),K.dispose(),de.dispose(),Tt.dispose(),V.dispose(),Ge.dispose(),re.dispose(),re.removeEventListener("sessionstart",hs),re.removeEventListener("sessionend",Ji),bi.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),Y=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),Y=!1;const b=wt.autoReset,G=ke.enabled,J=ke.autoUpdate,ee=ke.needsUpdate,j=ke.type;Re(),wt.autoReset=b,ke.enabled=G,ke.autoUpdate=J,ke.needsUpdate=ee,ke.type=j}function Ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function st(b){const G=b.target;G.removeEventListener("dispose",st),It(G)}function It(b){$t(b),$e.remove(b)}function $t(b){const G=$e.get(b).programs;G!==void 0&&(G.forEach(function(J){Ge.releaseProgram(J)}),b.isShaderMaterial&&Ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,J,ee,j,we){G===null&&(G=bt);const Me=j.isMesh&&j.matrixWorld.determinant()<0,je=yo(b,G,J,ee,j);Ye.setMaterial(ee,Me);let He=J.index,tt=1;if(ee.wireframe===!0){if(He=ve.getWireframeAttribute(J),He===void 0)return;tt=2}const it=J.drawRange,We=J.attributes.position;let gt=it.start*tt,Et=(it.start+it.count)*tt;we!==null&&(gt=Math.max(gt,we.start*tt),Et=Math.min(Et,(we.start+we.count)*tt)),He!==null?(gt=Math.max(gt,0),Et=Math.min(Et,He.count)):We!=null&&(gt=Math.max(gt,0),Et=Math.min(Et,We.count));const mt=Et-gt;if(mt<0||mt===1/0)return;Tt.setup(j,ee,je,J,He);let on,at=Be;if(He!==null&&(on=me.get(He),at=dt,at.setIndex(on)),j.isMesh)ee.wireframe===!0?(Ye.setLineWidth(ee.wireframeLinewidth*Lt()),at.setMode(W.LINES)):at.setMode(W.TRIANGLES);else if(j.isLine){let qe=ee.linewidth;qe===void 0&&(qe=1),Ye.setLineWidth(qe*Lt()),j.isLineSegments?at.setMode(W.LINES):j.isLineLoop?at.setMode(W.LINE_LOOP):at.setMode(W.LINE_STRIP)}else j.isPoints?at.setMode(W.POINTS):j.isSprite&&at.setMode(W.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)at.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))at.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qe=j._multiDrawStarts,ei=j._multiDrawCounts,yt=j._multiDrawCount,ln=He?me.get(He).bytesPerElement:1,ti=$e.get(ee).currentProgram.getUniforms();for(let Yt=0;Yt<yt;Yt++)ti.setValue(W,"_gl_DrawID",Yt),at.render(qe[Yt]/ln,ei[Yt])}else if(j.isInstancedMesh)at.renderInstances(gt,mt,j.count);else if(J.isInstancedBufferGeometry){const qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,ei=Math.min(J.instanceCount,qe);at.renderInstances(gt,mt,ei)}else at.render(gt,mt)};function vt(b,G,J){b.transparent===!0&&b.side===Xi&&b.forceSinglePass===!1?(b.side=Dn,b.needsUpdate=!0,ps(b,G,J),b.side=Lr,b.needsUpdate=!0,ps(b,G,J),b.side=Xi):ps(b,G,J)}this.compile=function(b,G,J=null){J===null&&(J=b),x=ct.get(J),x.init(G),L.push(x),J.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),b!==J&&b.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(x.pushLight(j),j.castShadow&&x.pushShadow(j))}),x.setupLights();const ee=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Me=0;Me<we.length;Me++){const je=we[Me];vt(je,J,j),ee.add(je)}else vt(we,J,j),ee.add(we)}),L.pop(),x=null,ee},this.compileAsync=function(b,G,J=null){const ee=this.compile(b,G,J);return new Promise(j=>{function we(){if(ee.forEach(function(Me){$e.get(Me).currentProgram.isReady()&&ee.delete(Me)}),ee.size===0){j(b);return}setTimeout(we,10)}ht.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Mn=null;function gn(b){Mn&&Mn(b)}function hs(){bi.stop()}function Ji(){bi.start()}const bi=new Sv;bi.setAnimationLoop(gn),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(b){Mn=b,re.setAnimationLoop(b),b===null?bi.stop():bi.start()},re.addEventListener("sessionstart",hs),re.addEventListener("sessionend",Ji),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(Y===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(G),G=re.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,G,X),x=ct.get(b,L.length),x.init(G),L.push(x),be.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Z.setFromProjectionMatrix(be),Ee=this.localClippingEnabled,ue=Se.init(this.clippingPlanes,Ee),S=Fe.get(b,I.length),S.init(),I.push(S),re.enabled===!0&&re.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Ci(we,G,-1/0,R.sortObjects)}Ci(b,G,0,R.sortObjects),S.finish(),R.sortObjects===!0&&S.sort(le,se),pt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,pt&&Je.addToRenderList(S,b),this.info.render.frame++,ue===!0&&Se.beginShadows();const J=x.state.shadowsArray;ke.render(J,b,G),ue===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=S.opaque,j=S.transmissive;if(x.setupLights(),G.isArrayCamera){const we=G.cameras;if(j.length>0)for(let Me=0,je=we.length;Me<je;Me++){const He=we[Me];kr(ee,j,b,He)}pt&&Je.render(b);for(let Me=0,je=we.length;Me<je;Me++){const He=we[Me];Or(S,b,He,He.viewport)}}else j.length>0&&kr(ee,j,b,G),pt&&Je.render(b),Or(S,b,G);X!==null&&(N.updateMultisampleRenderTarget(X),N.updateRenderTargetMipmap(X)),b.isScene===!0&&b.onAfterRender(R,b,G),Tt.resetDefaultState(),P=-1,C=null,L.pop(),L.length>0?(x=L[L.length-1],ue===!0&&Se.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,I.pop(),I.length>0?S=I[I.length-1]:S=null};function Ci(b,G,J,ee){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)x.pushLight(b),b.castShadow&&x.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){ee&&Qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(be);const Me=de.update(b),je=b.material;je.visible&&S.push(b,Me,je,J,Qe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const Me=de.update(b),je=b.material;if(ee&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qe.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Qe.copy(Me.boundingSphere.center)),Qe.applyMatrix4(b.matrixWorld).applyMatrix4(be)),Array.isArray(je)){const He=Me.groups;for(let tt=0,it=He.length;tt<it;tt++){const We=He[tt],gt=je[We.materialIndex];gt&&gt.visible&&S.push(b,Me,gt,J,Qe.z,We)}}else je.visible&&S.push(b,Me,je,J,Qe.z,null)}}const we=b.children;for(let Me=0,je=we.length;Me<je;Me++)Ci(we[Me],G,J,ee)}function Or(b,G,J,ee){const j=b.opaque,we=b.transmissive,Me=b.transparent;x.setupLightsView(J),ue===!0&&Se.setGlobalState(R.clippingPlanes,J),ee&&Ye.viewport(z.copy(ee)),j.length>0&&er(j,G,J),we.length>0&&er(we,G,J),Me.length>0&&er(Me,G,J),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function kr(b,G,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[ee.id]===void 0&&(x.state.transmissionRenderTarget[ee.id]=new ds(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?po:Zi,minFilter:ls,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const we=x.state.transmissionRenderTarget[ee.id],Me=ee.viewport||z;we.setSize(Me.z,Me.w);const je=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(fe),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),pt&&Je.render(J);const He=R.toneMapping;R.toneMapping=Nr;const tt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),x.setupLightsView(ee),ue===!0&&Se.setGlobalState(R.clippingPlanes,ee),er(b,J,ee),N.updateMultisampleRenderTarget(we),N.updateRenderTargetMipmap(we),ht.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,gt=G.length;We<gt;We++){const Et=G[We],mt=Et.object,on=Et.geometry,at=Et.material,qe=Et.group;if(at.side===Xi&&mt.layers.test(ee.layers)){const ei=at.side;at.side=Dn,at.needsUpdate=!0,xo(mt,J,ee,on,at,qe),at.side=ei,at.needsUpdate=!0,it=!0}}it===!0&&(N.updateMultisampleRenderTarget(we),N.updateRenderTargetMipmap(we))}R.setRenderTarget(je),R.setClearColor(fe,pe),tt!==void 0&&(ee.viewport=tt),R.toneMapping=He}function er(b,G,J){const ee=G.isScene===!0?G.overrideMaterial:null;for(let j=0,we=b.length;j<we;j++){const Me=b[j],je=Me.object,He=Me.geometry,tt=ee===null?Me.material:ee,it=Me.group;je.layers.test(J.layers)&&xo(je,G,J,He,tt,it)}}function xo(b,G,J,ee,j,we){b.onBeforeRender(R,G,J,ee,j,we),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(R,G,J,ee,b,we),j.transparent===!0&&j.side===Xi&&j.forceSinglePass===!1?(j.side=Dn,j.needsUpdate=!0,R.renderBufferDirect(J,G,ee,j,b,we),j.side=Lr,j.needsUpdate=!0,R.renderBufferDirect(J,G,ee,j,b,we),j.side=Xi):R.renderBufferDirect(J,G,ee,j,b,we),b.onAfterRender(R,G,J,ee,j,we)}function ps(b,G,J){G.isScene!==!0&&(G=bt);const ee=$e.get(b),j=x.state.lights,we=x.state.shadowsArray,Me=j.state.version,je=Ge.getParameters(b,j.state,we,G,J),He=Ge.getProgramCacheKey(je);let tt=ee.programs;ee.environment=b.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(b.isMeshStandardMaterial?K:w).get(b.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,tt===void 0&&(b.addEventListener("dispose",st),tt=new Map,ee.programs=tt);let it=tt.get(He);if(it!==void 0){if(ee.currentProgram===it&&ee.lightsStateVersion===Me)return gi(b,je),it}else je.uniforms=Ge.getUniforms(b),b.onBeforeCompile(je,R),it=Ge.acquireProgram(je,He),tt.set(He,it),ee.uniforms=je.uniforms;const We=ee.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(We.clippingPlanes=Se.uniform),gi(b,je),ee.needsLights=dc(b),ee.lightsStateVersion=Me,ee.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),ee.currentProgram=it,ee.uniformsList=null,it}function _o(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=Ql.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function gi(b,G){const J=$e.get(b);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function yo(b,G,J,ee,j){G.isScene!==!0&&(G=bt),N.resetTextureUnits();const we=G.fog,Me=ee.isMeshStandardMaterial?G.environment:null,je=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:ma,He=(ee.isMeshStandardMaterial?K:w).get(ee.envMap||Me),tt=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,it=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),We=!!J.morphAttributes.position,gt=!!J.morphAttributes.normal,Et=!!J.morphAttributes.color;let mt=Nr;ee.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(mt=R.toneMapping);const on=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,at=on!==void 0?on.length:0,qe=$e.get(ee),ei=x.state.lights;if(ue===!0&&(Ee===!0||b!==C)){const vn=b===C&&ee.id===P;Se.setState(ee,b,vn)}let yt=!1;ee.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==ei.state.version||qe.outputColorSpace!==je||j.isBatchedMesh&&qe.batching===!1||!j.isBatchedMesh&&qe.batching===!0||j.isBatchedMesh&&qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qe.instancing===!1||!j.isInstancedMesh&&qe.instancing===!0||j.isSkinnedMesh&&qe.skinning===!1||!j.isSkinnedMesh&&qe.skinning===!0||j.isInstancedMesh&&qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qe.instancingMorph===!1&&j.morphTexture!==null||qe.envMap!==He||ee.fog===!0&&qe.fog!==we||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==it||qe.morphTargets!==We||qe.morphNormals!==gt||qe.morphColors!==Et||qe.toneMapping!==mt||qe.morphTargetsCount!==at)&&(yt=!0):(yt=!0,qe.__version=ee.version);let ln=qe.currentProgram;yt===!0&&(ln=ps(ee,G,j));let ti=!1,Yt=!1,vi=!1;const Pt=ln.getUniforms(),Gn=qe.uniforms;if(Ye.useProgram(ln.program)&&(ti=!0,Yt=!0,vi=!0),ee.id!==P&&(P=ee.id,Yt=!0),ti||C!==b){Ye.buffers.depth.getReversed()?(_e.copy(b.projectionMatrix),Ky(_e),Zy(_e),Pt.setValue(W,"projectionMatrix",_e)):Pt.setValue(W,"projectionMatrix",b.projectionMatrix),Pt.setValue(W,"viewMatrix",b.matrixWorldInverse);const jn=Pt.map.cameraPosition;jn!==void 0&&jn.setValue(W,Ue.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(W,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Pt.setValue(W,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,Yt=!0,vi=!0)}if(j.isSkinnedMesh){Pt.setOptional(W,j,"bindMatrix"),Pt.setOptional(W,j,"bindMatrixInverse");const vn=j.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Pt.setValue(W,"boneTexture",vn.boneTexture,N))}j.isBatchedMesh&&(Pt.setOptional(W,j,"batchingTexture"),Pt.setValue(W,"batchingTexture",j._matricesTexture,N),Pt.setOptional(W,j,"batchingIdTexture"),Pt.setValue(W,"batchingIdTexture",j._indirectTexture,N),Pt.setOptional(W,j,"batchingColorTexture"),j._colorsTexture!==null&&Pt.setValue(W,"batchingColorTexture",j._colorsTexture,N));const Ri=J.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0)&&et.update(j,J,ln),(Yt||qe.receiveShadow!==j.receiveShadow)&&(qe.receiveShadow=j.receiveShadow,Pt.setValue(W,"receiveShadow",j.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Gn.envMap.value=He,Gn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&(Gn.envMapIntensity.value=G.environmentIntensity),Yt&&(Pt.setValue(W,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&So(Gn,vi),we&&ee.fog===!0&&Ce.refreshFogUniforms(Gn,we),Ce.refreshMaterialUniforms(Gn,ee,k,ce,x.state.transmissionRenderTarget[b.id]),Ql.upload(W,_o(qe),Gn,N)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(Ql.upload(W,_o(qe),Gn,N),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Pt.setValue(W,"center",j.center),Pt.setValue(W,"modelViewMatrix",j.modelViewMatrix),Pt.setValue(W,"normalMatrix",j.normalMatrix),Pt.setValue(W,"modelMatrix",j.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const vn=ee.uniformsGroups;for(let jn=0,En=vn.length;jn<En;jn++){const Mo=vn[jn];V.update(Mo,ln),V.bind(Mo,ln)}}return ln}function So(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function dc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,G,J){$e.get(b.texture).__webglTexture=G,$e.get(b.depthTexture).__webglTexture=J;const ee=$e.get(b);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,G){const J=$e.get(b);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,J=0){X=b,B=G,O=J;let ee=!0,j=null,we=!1,Me=!1;if(b){const He=$e.get(b);if(He.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(W.FRAMEBUFFER,null),ee=!1;else if(He.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(He.__hasExternalTextures)N.rebindTextures(b,$e.get(b.texture).__webglTexture,$e.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const We=b.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&$e.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const tt=b.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Me=!0);const it=$e.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(it[G])?j=it[G][J]:j=it[G],we=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?j=$e.get(b).__webglMultisampledFramebuffer:Array.isArray(it)?j=it[J]:j=it,z.copy(b.viewport),oe.copy(b.scissor),te=b.scissorTest}else z.copy(U).multiplyScalar(k).floor(),oe.copy(ne).multiplyScalar(k).floor(),te=Ie;if(Ye.bindFramebuffer(W.FRAMEBUFFER,j)&&ee&&Ye.drawBuffers(b,j),Ye.viewport(z),Ye.scissor(oe),Ye.setScissorTest(te),we){const He=$e.get(b.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,He.__webglTexture,J)}else if(Me){const He=$e.get(b.texture),tt=G||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,He.__webglTexture,J||0,tt)}P=-1},this.readRenderTargetPixels=function(b,G,J,ee,j,we,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=$e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(je=je[Me]),je){Ye.bindFramebuffer(W.FRAMEBUFFER,je);try{const He=b.texture,tt=He.format,it=He.type;if(!ut.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-ee&&J>=0&&J<=b.height-j&&W.readPixels(G,J,ee,j,rt.convert(tt),rt.convert(it),we)}finally{const He=X!==null?$e.get(X).__webglFramebuffer:null;Ye.bindFramebuffer(W.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(b,G,J,ee,j,we,Me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=$e.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(je=je[Me]),je){const He=b.texture,tt=He.format,it=He.type;if(!ut.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=b.width-ee&&J>=0&&J<=b.height-j){Ye.bindFramebuffer(W.FRAMEBUFFER,je);const We=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,We),W.bufferData(W.PIXEL_PACK_BUFFER,we.byteLength,W.STREAM_READ),W.readPixels(G,J,ee,j,rt.convert(tt),rt.convert(it),0);const gt=X!==null?$e.get(X).__webglFramebuffer:null;Ye.bindFramebuffer(W.FRAMEBUFFER,gt);const Et=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Yy(W,Et,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,We),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,we),W.deleteBuffer(We),W.deleteSync(Et),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,G=null,J=0){b.isTexture!==!0&&(so("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1]);const ee=Math.pow(2,-J),j=Math.floor(b.image.width*ee),we=Math.floor(b.image.height*ee),Me=G!==null?G.x:0,je=G!==null?G.y:0;N.setTexture2D(b,0),W.copyTexSubImage2D(W.TEXTURE_2D,J,0,0,Me,je,j,we),Ye.unbindTexture()},this.copyTextureToTexture=function(b,G,J=null,ee=null,j=0){b.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,b=arguments[1],G=arguments[2],j=arguments[3]||0,J=null);let we,Me,je,He,tt,it,We,gt,Et;const mt=b.isCompressedTexture?b.mipmaps[j]:b.image;J!==null?(we=J.max.x-J.min.x,Me=J.max.y-J.min.y,je=J.isBox3?J.max.z-J.min.z:1,He=J.min.x,tt=J.min.y,it=J.isBox3?J.min.z:0):(we=mt.width,Me=mt.height,je=mt.depth||1,He=0,tt=0,it=0),ee!==null?(We=ee.x,gt=ee.y,Et=ee.z):(We=0,gt=0,Et=0);const on=rt.convert(G.format),at=rt.convert(G.type);let qe;G.isData3DTexture?(N.setTexture3D(G,0),qe=W.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(N.setTexture2DArray(G,0),qe=W.TEXTURE_2D_ARRAY):(N.setTexture2D(G,0),qe=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,G.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,G.unpackAlignment);const ei=W.getParameter(W.UNPACK_ROW_LENGTH),yt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ln=W.getParameter(W.UNPACK_SKIP_PIXELS),ti=W.getParameter(W.UNPACK_SKIP_ROWS),Yt=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,mt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,mt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,He),W.pixelStorei(W.UNPACK_SKIP_ROWS,tt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,it);const vi=b.isDataArrayTexture||b.isData3DTexture,Pt=G.isDataArrayTexture||G.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Gn=$e.get(b),Ri=$e.get(G),vn=$e.get(Gn.__renderTarget),jn=$e.get(Ri.__renderTarget);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,vn.__webglFramebuffer),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let En=0;En<je;En++)vi&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,$e.get(b).__webglTexture,j,it+En),b.isDepthTexture?(Pt&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,$e.get(G).__webglTexture,j,Et+En),W.blitFramebuffer(He,tt,we,Me,We,gt,we,Me,W.DEPTH_BUFFER_BIT,W.NEAREST)):Pt?W.copyTexSubImage3D(qe,j,We,gt,Et+En,He,tt,we,Me):W.copyTexSubImage2D(qe,j,We,gt,Et+En,He,tt,we,Me);Ye.bindFramebuffer(W.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Pt?b.isDataTexture||b.isData3DTexture?W.texSubImage3D(qe,j,We,gt,Et,we,Me,je,on,at,mt.data):G.isCompressedArrayTexture?W.compressedTexSubImage3D(qe,j,We,gt,Et,we,Me,je,on,mt.data):W.texSubImage3D(qe,j,We,gt,Et,we,Me,je,on,at,mt):b.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,j,We,gt,we,Me,on,at,mt.data):b.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,j,We,gt,mt.width,mt.height,on,mt.data):W.texSubImage2D(W.TEXTURE_2D,j,We,gt,we,Me,on,at,mt);W.pixelStorei(W.UNPACK_ROW_LENGTH,ei),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,yt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ln),W.pixelStorei(W.UNPACK_SKIP_ROWS,ti),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Yt),j===0&&G.generateMipmaps&&W.generateMipmap(qe),Ye.unbindTexture()},this.copyTextureToTexture3D=function(b,G,J=null,ee=null,j=0){return b.isTexture!==!0&&(so("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,b=arguments[2],G=arguments[3],j=arguments[4]||0),so('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,G,J,ee,j)},this.initRenderTarget=function(b){$e.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),Ye.unbindTexture()},this.resetState=function(){B=0,O=0,X=null,Ye.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}}class Cv extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Bf extends Ur{constructor(e=1,t=32,s=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:s,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),s=Math.max(2,Math.floor(s));const h=Math.min(u+d,Math.PI);let p=0;const g=[],_=new ie,y=new ie,M=[],T=[],A=[],S=[];for(let x=0;x<=s;x++){const I=[],L=x/s;let R=0;x===0&&u===0?R=.5/t:x===s&&h===Math.PI&&(R=-.5/t);for(let Y=0;Y<=t;Y++){const B=Y/t;_.x=-e*Math.cos(o+B*l)*Math.sin(u+L*d),_.y=e*Math.cos(u+L*d),_.z=e*Math.sin(o+B*l)*Math.sin(u+L*d),T.push(_.x,_.y,_.z),y.copy(_).normalize(),A.push(y.x,y.y,y.z),S.push(B+R,1-L),I.push(p++)}g.push(I)}for(let x=0;x<s;x++)for(let I=0;I<t;I++){const L=g[x][I+1],R=g[x][I],Y=g[x+1][I],B=g[x+1][I+1];(x!==0||u>0)&&M.push(L,R,B),(x!==s-1||h<Math.PI)&&M.push(R,Y,B)}this.setIndex(M),this.setAttribute("position",new wi(T,3)),this.setAttribute("normal",new wi(A,3)),this.setAttribute("uv",new wi(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pf);const lw=()=>{const r=Ae.useRef(null);return Ae.useEffect(()=>{if(!r.current)return;const e=new Cv,t=new Hn(75,1,.1,1e3),s=new bv({alpha:!0,antialias:!0});s.setSize(300,300),r.current.appendChild(s.domElement);const o=new va(2,2,2),l=new lc({color:16739115,wireframe:!0}),u=new hi(o,l);e.add(u),t.position.z=5;const d=()=>{requestAnimationFrame(d),u.rotation.x+=.01,u.rotation.y+=.01,s.render(e,t)};return d(),()=>{r.current&&r.current.removeChild(s.domElement)}},[]),v.jsx("div",{ref:r,className:"w-[300px] h-[300px]"})};var wd,Tg;function cw(){if(Tg)return wd;Tg=1;var r=typeof Element<"u",e=typeof Map=="function",t=typeof Set=="function",s=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function o(l,u){if(l===u)return!0;if(l&&u&&typeof l=="object"&&typeof u=="object"){if(l.constructor!==u.constructor)return!1;var d,h,p;if(Array.isArray(l)){if(d=l.length,d!=u.length)return!1;for(h=d;h--!==0;)if(!o(l[h],u[h]))return!1;return!0}var g;if(e&&l instanceof Map&&u instanceof Map){if(l.size!==u.size)return!1;for(g=l.entries();!(h=g.next()).done;)if(!u.has(h.value[0]))return!1;for(g=l.entries();!(h=g.next()).done;)if(!o(h.value[1],u.get(h.value[0])))return!1;return!0}if(t&&l instanceof Set&&u instanceof Set){if(l.size!==u.size)return!1;for(g=l.entries();!(h=g.next()).done;)if(!u.has(h.value[0]))return!1;return!0}if(s&&ArrayBuffer.isView(l)&&ArrayBuffer.isView(u)){if(d=l.length,d!=u.length)return!1;for(h=d;h--!==0;)if(l[h]!==u[h])return!1;return!0}if(l.constructor===RegExp)return l.source===u.source&&l.flags===u.flags;if(l.valueOf!==Object.prototype.valueOf&&typeof l.valueOf=="function"&&typeof u.valueOf=="function")return l.valueOf()===u.valueOf();if(l.toString!==Object.prototype.toString&&typeof l.toString=="function"&&typeof u.toString=="function")return l.toString()===u.toString();if(p=Object.keys(l),d=p.length,d!==Object.keys(u).length)return!1;for(h=d;h--!==0;)if(!Object.prototype.hasOwnProperty.call(u,p[h]))return!1;if(r&&l instanceof Element)return!1;for(h=d;h--!==0;)if(!((p[h]==="_owner"||p[h]==="__v"||p[h]==="__o")&&l.$$typeof)&&!o(l[p[h]],u[p[h]]))return!1;return!0}return l!==l&&u!==u}return wd=function(u,d){try{return o(u,d)}catch(h){if((h.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw h}},wd}var uw=cw();const dw=ic(uw);var Ad,wg;function fw(){if(wg)return Ad;wg=1;var r=function(e,t,s,o,l,u,d,h){if(!e){var p;if(t===void 0)p=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var g=[s,o,l,u,d,h],_=0;p=new Error(t.replace(/%s/g,function(){return g[_++]})),p.name="Invariant Violation"}throw p.framesToPop=1,p}};return Ad=r,Ad}var hw=fw();const Ag=ic(hw);var bd,bg;function pw(){return bg||(bg=1,bd=function(e,t,s,o){var l=s?s.call(o,e,t):void 0;if(l!==void 0)return!!l;if(e===t)return!0;if(typeof e!="object"||!e||typeof t!="object"||!t)return!1;var u=Object.keys(e),d=Object.keys(t);if(u.length!==d.length)return!1;for(var h=Object.prototype.hasOwnProperty.bind(t),p=0;p<u.length;p++){var g=u[p];if(!h(g))return!1;var _=e[g],y=t[g];if(l=s?s.call(o,_,y,g):void 0,l===!1||l===void 0&&_!==y)return!1}return!0}),bd}var mw=pw();const gw=ic(mw);var Rv=(r=>(r.BASE="base",r.BODY="body",r.HEAD="head",r.HTML="html",r.LINK="link",r.META="meta",r.NOSCRIPT="noscript",r.SCRIPT="script",r.STYLE="style",r.TITLE="title",r.FRAGMENT="Symbol(react.fragment)",r))(Rv||{}),Cd={link:{rel:["amphtml","canonical","alternate"]},script:{type:["application/ld+json"]},meta:{charset:"",name:["generator","robots","description"],property:["og:type","og:title","og:url","og:image","og:image:alt","og:description","twitter:url","twitter:title","twitter:description","twitter:image","twitter:image:alt","twitter:card","twitter:site"]}},Cg=Object.values(Rv),zf={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},vw=Object.entries(zf).reduce((r,[e,t])=>(r[t]=e,r),{}),pi="data-rh",aa={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate",PRIORITIZE_SEO_TAGS:"prioritizeSeoTags"},oa=(r,e)=>{for(let t=r.length-1;t>=0;t-=1){const s=r[t];if(Object.prototype.hasOwnProperty.call(s,e))return s[e]}return null},xw=r=>{let e=oa(r,"title");const t=oa(r,aa.TITLE_TEMPLATE);if(Array.isArray(e)&&(e=e.join("")),t&&e)return t.replace(/%s/g,()=>e);const s=oa(r,aa.DEFAULT_TITLE);return e||s||void 0},_w=r=>oa(r,aa.ON_CHANGE_CLIENT_STATE)||(()=>{}),Rd=(r,e)=>e.filter(t=>typeof t[r]<"u").map(t=>t[r]).reduce((t,s)=>({...t,...s}),{}),yw=(r,e)=>e.filter(t=>typeof t.base<"u").map(t=>t.base).reverse().reduce((t,s)=>{if(!t.length){const o=Object.keys(s);for(let l=0;l<o.length;l+=1){const d=o[l].toLowerCase();if(r.indexOf(d)!==-1&&s[d])return t.concat(s)}}return t},[]),Sw=r=>console&&typeof console.warn=="function"&&console.warn(r),io=(r,e,t)=>{const s={};return t.filter(o=>Array.isArray(o[r])?!0:(typeof o[r]<"u"&&Sw(`Helmet: ${r} should be of type "Array". Instead found type "${typeof o[r]}"`),!1)).map(o=>o[r]).reverse().reduce((o,l)=>{const u={};l.filter(h=>{let p;const g=Object.keys(h);for(let y=0;y<g.length;y+=1){const M=g[y],T=M.toLowerCase();e.indexOf(T)!==-1&&!(p==="rel"&&h[p].toLowerCase()==="canonical")&&!(T==="rel"&&h[T].toLowerCase()==="stylesheet")&&(p=T),e.indexOf(M)!==-1&&(M==="innerHTML"||M==="cssText"||M==="itemprop")&&(p=M)}if(!p||!h[p])return!1;const _=h[p].toLowerCase();return s[p]||(s[p]={}),u[p]||(u[p]={}),s[p][_]?!1:(u[p][_]=!0,!0)}).reverse().forEach(h=>o.push(h));const d=Object.keys(u);for(let h=0;h<d.length;h+=1){const p=d[h],g={...s[p],...u[p]};s[p]=g}return o},[]).reverse()},Mw=(r,e)=>{if(Array.isArray(r)&&r.length){for(let t=0;t<r.length;t+=1)if(r[t][e])return!0}return!1},Ew=r=>({baseTag:yw(["href"],r),bodyAttributes:Rd("bodyAttributes",r),defer:oa(r,aa.DEFER),encode:oa(r,aa.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:Rd("htmlAttributes",r),linkTags:io("link",["rel","href"],r),metaTags:io("meta",["name","charset","http-equiv","property","itemprop"],r),noscriptTags:io("noscript",["innerHTML"],r),onChangeClientState:_w(r),scriptTags:io("script",["src","innerHTML"],r),styleTags:io("style",["cssText"],r),title:xw(r),titleAttributes:Rd("titleAttributes",r),prioritizeSeoTags:Mw(r,aa.PRIORITIZE_SEO_TAGS)}),Pv=r=>Array.isArray(r)?r.join(""):r,Tw=(r,e)=>{const t=Object.keys(r);for(let s=0;s<t.length;s+=1)if(e[t[s]]&&e[t[s]].includes(r[t[s]]))return!0;return!1},Pd=(r,e)=>Array.isArray(r)?r.reduce((t,s)=>(Tw(s,e)?t.priority.push(s):t.default.push(s),t),{priority:[],default:[]}):{default:r,priority:[]},Rg=(r,e)=>({...r,[e]:void 0}),ww=["noscript","script","style"],Ef=(r,e=!0)=>e===!1?String(r):String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;"),Nv=r=>Object.keys(r).reduce((e,t)=>{const s=typeof r[t]<"u"?`${t}="${r[t]}"`:`${t}`;return e?`${e} ${s}`:s},""),Aw=(r,e,t,s)=>{const o=Nv(t),l=Pv(e);return o?`<${r} ${pi}="true" ${o}>${Ef(l,s)}</${r}>`:`<${r} ${pi}="true">${Ef(l,s)}</${r}>`},bw=(r,e,t=!0)=>e.reduce((s,o)=>{const l=o,u=Object.keys(l).filter(p=>!(p==="innerHTML"||p==="cssText")).reduce((p,g)=>{const _=typeof l[g]>"u"?g:`${g}="${Ef(l[g],t)}"`;return p?`${p} ${_}`:_},""),d=l.innerHTML||l.cssText||"",h=ww.indexOf(r)===-1;return`${s}<${r} ${pi}="true" ${u}${h?"/>":`>${d}</${r}>`}`},""),Lv=(r,e={})=>Object.keys(r).reduce((t,s)=>{const o=zf[s];return t[o||s]=r[s],t},e),Cw=(r,e,t)=>{const s={key:e,[pi]:!0},o=Lv(t,s);return[qi.createElement("title",o,e)]},Jl=(r,e)=>e.map((t,s)=>{const o={key:s,[pi]:!0};return Object.keys(t).forEach(l=>{const d=zf[l]||l;if(d==="innerHTML"||d==="cssText"){const h=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:h}}else o[d]=t[l]}),qi.createElement(r,o)}),Qn=(r,e,t=!0)=>{switch(r){case"title":return{toComponent:()=>Cw(r,e.title,e.titleAttributes),toString:()=>Aw(r,e.title,e.titleAttributes,t)};case"bodyAttributes":case"htmlAttributes":return{toComponent:()=>Lv(e),toString:()=>Nv(e)};default:return{toComponent:()=>Jl(r,e),toString:()=>bw(r,e,t)}}},Rw=({metaTags:r,linkTags:e,scriptTags:t,encode:s})=>{const o=Pd(r,Cd.meta),l=Pd(e,Cd.link),u=Pd(t,Cd.script);return{priorityMethods:{toComponent:()=>[...Jl("meta",o.priority),...Jl("link",l.priority),...Jl("script",u.priority)],toString:()=>`${Qn("meta",o.priority,s)} ${Qn("link",l.priority,s)} ${Qn("script",u.priority,s)}`},metaTags:o.default,linkTags:l.default,scriptTags:u.default}},Pw=r=>{const{baseTag:e,bodyAttributes:t,encode:s=!0,htmlAttributes:o,noscriptTags:l,styleTags:u,title:d="",titleAttributes:h,prioritizeSeoTags:p}=r;let{linkTags:g,metaTags:_,scriptTags:y}=r,M={toComponent:()=>{},toString:()=>""};return p&&({priorityMethods:M,linkTags:g,metaTags:_,scriptTags:y}=Rw(r)),{priority:M,base:Qn("base",e,s),bodyAttributes:Qn("bodyAttributes",t,s),htmlAttributes:Qn("htmlAttributes",o,s),link:Qn("link",g,s),meta:Qn("meta",_,s),noscript:Qn("noscript",l,s),script:Qn("script",y,s),style:Qn("style",u,s),title:Qn("title",{title:d,titleAttributes:h},s)}},Tf=Pw,Xl=[],Dv=!!(typeof window<"u"&&window.document&&window.document.createElement),wf=class{constructor(r,e){ki(this,"instances",[]);ki(this,"canUseDOM",Dv);ki(this,"context");ki(this,"value",{setHelmet:r=>{this.context.helmet=r},helmetInstances:{get:()=>this.canUseDOM?Xl:this.instances,add:r=>{(this.canUseDOM?Xl:this.instances).push(r)},remove:r=>{const e=(this.canUseDOM?Xl:this.instances).indexOf(r);(this.canUseDOM?Xl:this.instances).splice(e,1)}}});this.context=r,this.canUseDOM=e||!1,e||(r.helmet=Tf({baseTag:[],bodyAttributes:{},htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}}))}},Nw={},Iv=qi.createContext(Nw),cs,Uv=(cs=class extends Ae.Component{constructor(t){super(t);ki(this,"helmetData");this.helmetData=new wf(this.props.context||{},cs.canUseDOM)}render(){return qi.createElement(Iv.Provider,{value:this.helmetData.value},this.props.children)}},ki(cs,"canUseDOM",Dv),cs),Zs=(r,e)=>{const t=document.head||document.querySelector("head"),s=t.querySelectorAll(`${r}[${pi}]`),o=[].slice.call(s),l=[];let u;return e&&e.length&&e.forEach(d=>{const h=document.createElement(r);for(const p in d)if(Object.prototype.hasOwnProperty.call(d,p))if(p==="innerHTML")h.innerHTML=d.innerHTML;else if(p==="cssText")h.styleSheet?h.styleSheet.cssText=d.cssText:h.appendChild(document.createTextNode(d.cssText));else{const g=p,_=typeof d[g]>"u"?"":d[g];h.setAttribute(p,_)}h.setAttribute(pi,"true"),o.some((p,g)=>(u=g,h.isEqualNode(p)))?o.splice(u,1):l.push(h)}),o.forEach(d=>{var h;return(h=d.parentNode)==null?void 0:h.removeChild(d)}),l.forEach(d=>t.appendChild(d)),{oldTags:o,newTags:l}},Af=(r,e)=>{const t=document.getElementsByTagName(r)[0];if(!t)return;const s=t.getAttribute(pi),o=s?s.split(","):[],l=[...o],u=Object.keys(e);for(const d of u){const h=e[d]||"";t.getAttribute(d)!==h&&t.setAttribute(d,h),o.indexOf(d)===-1&&o.push(d);const p=l.indexOf(d);p!==-1&&l.splice(p,1)}for(let d=l.length-1;d>=0;d-=1)t.removeAttribute(l[d]);o.length===l.length?t.removeAttribute(pi):t.getAttribute(pi)!==u.join(",")&&t.setAttribute(pi,u.join(","))},Lw=(r,e)=>{typeof r<"u"&&document.title!==r&&(document.title=Pv(r)),Af("title",e)},Pg=(r,e)=>{const{baseTag:t,bodyAttributes:s,htmlAttributes:o,linkTags:l,metaTags:u,noscriptTags:d,onChangeClientState:h,scriptTags:p,styleTags:g,title:_,titleAttributes:y}=r;Af("body",s),Af("html",o),Lw(_,y);const M={baseTag:Zs("base",t),linkTags:Zs("link",l),metaTags:Zs("meta",u),noscriptTags:Zs("noscript",d),scriptTags:Zs("script",p),styleTags:Zs("style",g)},T={},A={};Object.keys(M).forEach(S=>{const{newTags:x,oldTags:I}=M[S];x.length&&(T[S]=x),I.length&&(A[S]=M[S].oldTags)}),e&&e(),h(r,T,A)},ro=null,Dw=r=>{ro&&cancelAnimationFrame(ro),r.defer?ro=requestAnimationFrame(()=>{Pg(r,()=>{ro=null})}):(Pg(r),ro=null)},Iw=Dw,Ng=class extends Ae.Component{constructor(){super(...arguments);ki(this,"rendered",!1)}shouldComponentUpdate(e){return!gw(e,this.props)}componentDidUpdate(){this.emitChange()}componentWillUnmount(){const{helmetInstances:e}=this.props.context;e.remove(this),this.emitChange()}emitChange(){const{helmetInstances:e,setHelmet:t}=this.props.context;let s=null;const o=Ew(e.get().map(l=>{const u={...l.props};return delete u.context,u}));Uv.canUseDOM?Iw(o):Tf&&(s=Tf(o)),t(s)}init(){if(this.rendered)return;this.rendered=!0;const{helmetInstances:e}=this.props.context;e.add(this),this.emitChange()}render(){return this.init(),null}},Nd,Fr=(Nd=class extends Ae.Component{shouldComponentUpdate(r){return!dw(Rg(this.props,"helmetData"),Rg(r,"helmetData"))}mapNestedChildrenToProps(r,e){if(!e)return null;switch(r.type){case"script":case"noscript":return{innerHTML:e};case"style":return{cssText:e};default:throw new Error(`<${r.type} /> elements are self-closing and can not contain children. Refer to our API for more information.`)}}flattenArrayTypeChildren(r,e,t,s){return{...e,[r.type]:[...e[r.type]||[],{...t,...this.mapNestedChildrenToProps(r,s)}]}}mapObjectTypeChildren(r,e,t,s){switch(r.type){case"title":return{...e,[r.type]:s,titleAttributes:{...t}};case"body":return{...e,bodyAttributes:{...t}};case"html":return{...e,htmlAttributes:{...t}};default:return{...e,[r.type]:{...t}}}}mapArrayTypeChildrenToProps(r,e){let t={...e};return Object.keys(r).forEach(s=>{t={...t,[s]:r[s]}}),t}warnOnInvalidChildren(r,e){return Ag(Cg.some(t=>r.type===t),typeof r.type=="function"?"You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information.":`Only elements types ${Cg.join(", ")} are allowed. Helmet does not support rendering <${r.type}> elements. Refer to our API for more information.`),Ag(!e||typeof e=="string"||Array.isArray(e)&&!e.some(t=>typeof t!="string"),`Helmet expects a string as a child of <${r.type}>. Did you forget to wrap your children in braces? ( <${r.type}>{\`\`}</${r.type}> ) Refer to our API for more information.`),!0}mapChildrenToProps(r,e){let t={};return qi.Children.forEach(r,s=>{if(!s||!s.props)return;const{children:o,...l}=s.props,u=Object.keys(l).reduce((h,p)=>(h[vw[p]||p]=l[p],h),{});let{type:d}=s;switch(typeof d=="symbol"?d=d.toString():this.warnOnInvalidChildren(s,o),d){case"Symbol(react.fragment)":e=this.mapChildrenToProps(o,e);break;case"link":case"meta":case"noscript":case"script":case"style":t=this.flattenArrayTypeChildren(s,t,u,o);break;default:e=this.mapObjectTypeChildren(s,e,u,o);break}}),this.mapArrayTypeChildrenToProps(t,e)}render(){const{children:r,...e}=this.props;let t={...e},{helmetData:s}=e;if(r&&(t=this.mapChildrenToProps(r,t)),s&&!(s instanceof wf)){const o=s;s=new wf(o.context,!0),delete t.helmetData}return s?qi.createElement(Ng,{...t,context:s.value}):qi.createElement(Iv.Consumer,null,o=>qi.createElement(Ng,{...t,context:o}))}},ki(Nd,"defaultProps",{defer:!0,encodeSpecialCharacters:!0,prioritizeSeoTags:!1}),Nd);const Uw=()=>v.jsxs("div",{className:"bg-black",children:[v.jsxs(Fr,{children:[v.jsx("title",{children:"Home | Kavyta"}),v.jsx("meta",{name:"description",content:"Welcome to Kavyta - Innovating the digital world."})]}),v.jsx(ny,{}),v.jsx(ry,{}),v.jsx("section",{className:"py-20",children:v.jsx("div",{className:"container mx-auto px-4",children:v.jsxs(Mt,{className:"flex flex-col md:flex-row items-center justify-between p-12 gap-8",children:[v.jsxs("div",{className:"md:w-1/2",children:[v.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Innovation Through Technology"}),v.jsx("p",{className:"text-gray-400 mb-4",children:"We leverage cutting-edge technology to create solutions that drive business growth and innovation."}),v.jsx("p",{className:"text-gray-400",children:"Our team of experts is dedicated to delivering excellence in every project we undertake."})]}),v.jsx("div",{className:"md:w-1/2 flex justify-center",children:v.jsx(lw,{})})]})})})]}),Ai=({title:r,subtitle:e})=>v.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[v.jsx("h1",{className:"text-3xl md:text-4xl font-bold mb-4",children:r}),v.jsx("div",{className:"w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"}),v.jsx("p",{className:"text-gray-400 text-lg",children:e})]}),Fw=[{label:"Years of Experience",value:"1+"},{label:"Projects Completed",value:"5"},{label:"Team Members",value:"5"},{label:"Global Clients",value:"2"}],Ow=[{name:"Radhika Bhut",role:"Lead Developer",image:"r.png"},{name:"Kevin Topiya",role:"CEO & Founder",image:"k.png"},{name:"Viraj Parsana",role:" COO & Co-Founder",image:"v.png"},{name:"Heli Chauhan",role:"Design Director",image:"h.png"}],kw=()=>v.jsxs(v.Fragment,{children:[v.jsxs(Fr,{children:[v.jsx("title",{children:"About Us | Kavyta"}),v.jsx("meta",{name:"description",content:"Learn more about Kavyta and our mission to innovate."})]}),v.jsx("div",{className:"min-h-screen bg-black pt-20 pb-16",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ai,{title:"About Us",subtitle:"We're a team of passionate technologists building the future of digital solutions"}),v.jsx("div",{className:"mb-20",children:v.jsxs(Mt,{className:"max-w-4xl mx-auto",children:[v.jsx("h2",{className:"text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",children:"Our Story"}),v.jsx("p",{className:"text-gray-300 mb-4",children:"Founded in 2025 by Kevin, our journey began with a vision to empower businesses through technology. Built from the ground up with passion and purpose, we’re laying the foundation for a company that delivers impactful digital solutions. We’re driven by a culture of friendliness and excellence — where creativity meets problem-solving, and every project is a chance to grow. Our focus is on providing smart, adaptable IT services for businesses ready to evolve in a digital-first world. We're just getting started — and we're building with intention."}),v.jsx("p",{className:"text-gray-300",children:"Today, we're proud to serve clients worldwide, delivering cutting-edge solutions that drive innovation and growth. Our commitment to excellence and customer satisfaction remains at the heart of everything we do."})]})}),v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 mb-20",children:Fw.map((r,e)=>v.jsxs(Mt,{className:"text-center",children:[v.jsx("div",{className:"text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2",children:r.value}),v.jsx("div",{className:"text-gray-400 text-sm",children:r.label})]},e))}),v.jsxs("div",{className:"grid md:grid-cols-3 gap-8 mb-20",children:[v.jsxs(Mt,{className:"text-center",children:[v.jsx(q_,{className:"w-12 h-12 text-blue-400 mx-auto mb-4"}),v.jsx("h3",{className:"text-xl font-bold mb-3",children:"Innovation"}),v.jsx("p",{className:"text-gray-400",children:"Pushing boundaries and exploring new technologies to deliver cutting-edge solutions."})]}),v.jsxs(Mt,{className:"text-center",children:[v.jsx(K_,{className:"w-12 h-12 text-purple-400 mx-auto mb-4"}),v.jsx("h3",{className:"text-xl font-bold mb-3",children:"Excellence"}),v.jsx("p",{className:"text-gray-400",children:"Committed to delivering the highest quality in everything we do."})]}),v.jsxs(Mt,{className:"text-center",children:[v.jsx(Q_,{className:"w-12 h-12 text-green-400 mx-auto mb-4"}),v.jsx("h3",{className:"text-xl font-bold mb-3",children:"Collaboration"}),v.jsx("p",{className:"text-gray-400",children:"Working together with our clients to achieve extraordinary results."})]})]}),v.jsxs("div",{className:"mb-20",children:[v.jsx("h2",{className:"text-2xl font-bold text-center mb-12",children:"Our Leadership Team"}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:Ow.map((r,e)=>v.jsxs(Mt,{className:"text-center",children:[v.jsx("div",{className:"w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-800",children:v.jsx("img",{src:r.image,alt:r.name,className:"w-full h-full object-cover"})}),v.jsx("h3",{className:"text-lg font-semibold mb-1",children:r.name}),v.jsx("p",{className:"text-gray-400 text-sm",children:r.role})]},e))})]})]})})]}),Bw=["React","Node.js","Python","AWS","Azure","Docker","Kubernetes","MongoDB","PostgreSQL","TypeScript"],zw=[{title:"Web Development",path:"/services/web-development",description:"Crafting responsive and dynamic websites to enhance your online presence.",imageUrl:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",features:["Custom Website Design","Responsive Layouts","SEO Optimization","Content Management Systems"]},{title:"Software Development",path:"/services/software-development",description:"Developing robust software solutions to streamline your business operations.",imageUrl:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4",features:["Custom Software Solutions","Enterprise Applications","API Development","System Integration"]},{title:"Mobile App Development",path:"/services/mobile-app-development",description:"Creating user-friendly mobile applications for iOS and Android platforms.",imageUrl:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",features:["iOS App Development","Android App Development","Cross-Platform Solutions","App Store Deployment"]},{title:"IT Consulting",path:"/services/it-consulting",description:"Providing expert guidance to optimize your IT strategies and infrastructure.",imageUrl:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",features:["IT Strategy Development","Technology Assessment","Process Improvement","Project Management"]}],Hw=[{title:"Discovery",description:"We begin by understanding your business needs and objectives"},{title:"Planning",description:"Creating detailed project roadmap and technical specifications"},{title:"Development",description:"Building your solution using cutting-edge technologies"},{title:"Testing",description:"Rigorous testing to ensure quality and performance"},{title:"Deployment",description:"Smooth deployment and transition to production"},{title:"Support",description:"Ongoing maintenance and support services"}],Vw=()=>v.jsxs(v.Fragment,{children:[v.jsxs(Fr,{children:[v.jsx("title",{children:"Services | Kavyta"}),v.jsx("meta",{name:"description",content:"Explore our range of services including web and software development, mobile apps, and consulting."})]}),v.jsx("div",{className:"min-h-screen bg-black pt-20 pb-16",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ai,{title:"Our Services",subtitle:"Comprehensive IT solutions tailored to your business needs"}),zw.map((r,e)=>v.jsx(Mt,{className:"mb-8 p-8",children:v.jsxs("div",{className:"flex flex-col md:flex-row items-start gap-8",children:[v.jsxs("div",{className:"md:w-2/3",children:[v.jsx("h3",{className:"text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",children:r.title}),v.jsx("p",{className:"text-gray-300 mb-6",children:r.description}),v.jsx("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",children:r.features.map((t,s)=>v.jsxs("li",{className:"flex items-center text-gray-400",children:[v.jsx(ho,{className:"w-5 h-5 text-blue-400 mr-2"}),v.jsx("span",{children:t})]},s))}),v.jsx(Rr,{to:r.path,children:v.jsxs(Sn,{children:["Learn More",v.jsx($g,{className:"ml-2 w-4 h-4"})]})})]}),v.jsx("div",{className:"md:w-1/3",children:v.jsx("div",{className:"w-full h-48 rounded-lg overflow-hidden",children:v.jsx("img",{src:`${r.imageUrl}?auto=format&fit=crop&w=800&q=80`,alt:r.title,className:"w-full h-full object-cover"})})})]})},e)),v.jsxs("div",{className:"my-20",children:[v.jsx("h2",{className:"text-2xl font-bold text-center mb-12",children:"Our Process"}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:Hw.map((r,e)=>v.jsxs(Mt,{className:"text-center",hoverable:!0,children:[v.jsx("div",{className:"text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4",children:e+1}),v.jsx("h3",{className:"text-xl font-bold mb-3",children:r.title}),v.jsx("p",{className:"text-gray-400",children:r.description})]},e))})]}),v.jsxs("div",{className:"mb-20",children:[v.jsx("h2",{className:"text-2xl font-bold text-center mb-12",children:"Technologies We Use"}),v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4",children:Bw.map((r,e)=>v.jsx(Mt,{className:"text-center py-4",hoverable:!0,children:v.jsx("span",{className:"text-gray-300",children:r})},e))})]})]})})]}),Gw=({title:r,description:e,image:t,category:s,technologies:o})=>v.jsxs(Mt,{hoverable:!0,className:"overflow-hidden group",children:[v.jsxs("div",{className:"relative overflow-hidden mb-4",children:[v.jsx("img",{src:t,alt:r,className:"w-full h-48 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"}),v.jsx("div",{className:"absolute top-2 right-2",children:v.jsx("span",{className:"bg-gray-900/80 backdrop-blur-sm text-blue-400 text-xs px-3 py-1 rounded-full",children:s})})]}),v.jsx("h3",{className:"text-xl font-bold mb-2",children:r}),v.jsx("p",{className:"text-gray-400 text-sm mb-4",children:e}),v.jsx("div",{className:"flex flex-wrap gap-2",children:o.map((l,u)=>v.jsx("span",{className:"text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded",children:l},u))})]}),jw=["All","Web","Mobile","Desktop","Cloud"],Lg=[{title:"E-Commerce Platform",description:"A full-featured online shopping platform with real-time inventory management.",image:"https://picsum.photos/seed/ecom/400/300",category:"Web",technologies:["React","Node.js","MongoDB"]},{title:"Health & Fitness App",description:"Mobile application for tracking workouts and nutrition with AI recommendations.",image:"https://picsum.photos/seed/health/400/300",category:"Mobile",technologies:["React Native","Firebase","TensorFlow"]},{title:"Cloud Migration Solution",description:"Enterprise-level cloud migration and infrastructure management system.",image:"https://picsum.photos/seed/cloud/400/300",category:"Cloud",technologies:["AWS","Docker","Kubernetes"]},{title:"Inventory Management",description:"Desktop application for managing warehouse inventory and logistics.",image:"https://picsum.photos/seed/inventory/400/300",category:"Desktop",technologies:["Electron","React","SQLite"]},{title:"Social Media Dashboard",description:"Comprehensive social media management and analytics platform.",image:"https://picsum.photos/seed/social/400/300",category:"Web",technologies:["React","GraphQL","PostgreSQL"]},{title:"IoT Control Center",description:"Centralized management system for IoT devices and data analytics.",image:"https://picsum.photos/seed/iot/400/300",category:"Desktop",technologies:["Python","React","MQTT"]}],Ww=()=>{const[r,e]=Ae.useState("All"),t=r==="All"?Lg:Lg.filter(s=>s.category===r);return v.jsxs("div",{className:"min-h-screen bg-black pt-20 pb-16",children:[v.jsxs(Fr,{children:[v.jsx("title",{children:"Portfolio | Kavyta"}),v.jsx("meta",{name:"description",content:"Explore our portfolio and see the innovative projects we've delivered."})]}),v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ai,{title:"Our Portfolio",subtitle:"Explore our latest projects and success stories"}),v.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:jw.map(s=>v.jsx(Sn,{variant:r===s?"primary":"outline",onClick:()=>e(s),children:s},s))}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map((s,o)=>v.jsx(Gw,{...s},o))})]})]})},Xw=({content:r,author:e,role:t,company:s,image:o})=>v.jsxs(Mt,{hoverable:!0,className:"relative",children:[v.jsx(X_,{className:"absolute top-4 right-4 w-8 h-8 text-gray-700"}),v.jsx("div",{className:"mb-6",children:v.jsx("p",{className:"text-gray-300 italic",children:r})}),v.jsxs("div",{className:"flex items-center",children:[v.jsx("img",{src:o,alt:e,className:"w-12 h-12 rounded-full mr-4"}),v.jsxs("div",{children:[v.jsx("div",{className:"font-semibold",children:e}),v.jsx("div",{className:"text-sm text-gray-400",children:t}),v.jsx("div",{className:"text-sm text-blue-400",children:s})]})]})]}),qw=[{content:"TechNova transformed our business with their innovative solutions. Their team's expertise and dedication were invaluable to our digital transformation journey.",author:"Sarah Williams",role:"CEO",company:"InnovateTech Inc",image:"https://randomuser.me/api/portraits/women/3.jpg"},{content:"Working with TechNova was a game-changer for our company. Their cloud solutions helped us scale efficiently while reducing operational costs.",author:"Michael Chen",role:"CTO",company:"CloudScale Solutions",image:"https://randomuser.me/api/portraits/men/4.jpg"},{content:"The mobile app developed by TechNova exceeded our expectations. Their attention to detail and user experience expertise is unmatched.",author:"Emily Rodriguez",role:"Product Manager",company:"MobileFirst Apps",image:"https://randomuser.me/api/portraits/women/5.jpg"},{content:"TechNova's cybersecurity solutions gave us peace of mind. Their proactive approach to security has protected our business from numerous threats.",author:"David Thompson",role:"Security Director",company:"SecureNet Systems",image:"https://randomuser.me/api/portraits/men/6.jpg"}],$w=["TechCorp","InnovateLabs","FutureScale","CloudNine","DataFlow","SmartSystems","NextGen","DigitalPrime"],Yw=()=>v.jsxs(v.Fragment,{children:[v.jsxs(Fr,{children:[v.jsx("title",{children:"Testimonials | Kavyta"}),v.jsx("meta",{name:"description",content:"Discover what our clients have to say about their experience working with Kavyta."})]}),v.jsx("div",{className:"min-h-screen bg-black pt-20 pb-16",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ai,{title:"Client Testimonials",subtitle:"Hear what our clients say about working with us"}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-20",children:qw.map((r,e)=>v.jsx(Xw,{...r},e))}),v.jsxs("div",{className:"mb-20",children:[v.jsx("h2",{className:"text-2xl font-bold text-center mb-12",children:"Trusted By Leading Companies"}),v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:$w.map((r,e)=>v.jsx(Mt,{className:"p-8 text-center",hoverable:!0,children:v.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",children:r})},e))})]}),v.jsxs(Mt,{className:"text-center p-12",children:[v.jsx("h2",{className:"text-2xl font-bold mb-8",children:"Our Impact"}),v.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[v.jsxs("div",{children:[v.jsx("div",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2",children:"98%"}),v.jsx("div",{className:"text-gray-400",children:"Client Satisfaction"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2",children:"500+"}),v.jsx("div",{className:"text-gray-400",children:"Projects Delivered"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2",children:"50+"}),v.jsx("div",{className:"text-gray-400",children:"Countries Served"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2",children:"15+"}),v.jsx("div",{className:"text-gray-400",children:"Years Experience"})]})]})]})]})})]}),Kw=()=>{const r=Ae.useRef(null);return Ae.useEffect(()=>{if(!r.current)return;const e=new Cv,t=new Hn(75,1,.1,1e3),s=new bv({alpha:!0,antialias:!0});s.setSize(300,300),r.current.appendChild(s.domElement);const o=new Bf(1.5,10,10),l=new lc({color:16739115,wireframe:!0}),u=new hi(o,l);e.add(u),t.position.z=5;const d=()=>{requestAnimationFrame(d),u.rotation.y+=.01,s.render(e,t)};return d(),()=>{r.current&&r.current.removeChild(s.domElement)}},[]),v.jsx("div",{ref:r,className:"w-[300px] h-[300px]"})},Zw=()=>{const r=e=>{e.preventDefault()};return v.jsxs("div",{className:"min-h-screen bg-black pt-20 pb-16",children:[v.jsxs(Fr,{children:[v.jsx("title",{children:"Contact Us | Kavyta"}),v.jsx("meta",{name:"description",content:"Get in touch with Kavyta for your software and tech needs."})]}),v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ai,{title:"Contact Us",subtitle:"Get in touch with our team for any inquiries or support"}),v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20",children:[v.jsx(Mt,{className:"p-8",children:v.jsxs("form",{onSubmit:r,className:"space-y-6",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block text-gray-300 mb-2",children:"Name"}),v.jsx("input",{type:"text",className:"w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500",placeholder:"Your name"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-gray-300 mb-2",children:"Email"}),v.jsx("input",{type:"email",className:"w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500",placeholder:"Your email"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-gray-300 mb-2",children:"Subject"}),v.jsx("input",{type:"text",className:"w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500",placeholder:"Message subject"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-gray-300 mb-2",children:"Message"}),v.jsx("textarea",{className:"w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 h-32",placeholder:"Your message"})]}),v.jsx(Sn,{type:"submit",size:"lg",className:"w-full",children:"Send Message"})]})}),v.jsxs("div",{className:"space-y-6",children:[v.jsxs(Mt,{className:"p-8",children:[v.jsxs("div",{className:"flex items-center mb-6",children:[v.jsx(G_,{className:"w-6 h-6 text-blue-400 mr-4"}),v.jsxs("div",{children:[v.jsx("h3",{className:"font-semibold mb-1",children:"Visit Us"}),v.jsx("p",{className:"text-gray-400",children:"Rajkot"})]})]}),v.jsxs("div",{className:"flex items-center mb-6",children:[v.jsx(W_,{className:"w-6 h-6 text-blue-400 mr-4"}),v.jsxs("div",{children:[v.jsx("h3",{className:"font-semibold mb-1",children:"Call Us"}),v.jsx("p",{className:"text-gray-400",children:v.jsx("a",{href:"tel:+916356893665",children:"+91 6356893665"})})]})]}),v.jsxs("div",{className:"flex items-center mb-6",children:[v.jsx(Yg,{className:"w-6 h-6 text-blue-400 mr-4"}),v.jsxs("div",{children:[v.jsx("h3",{className:"font-semibold mb-1",children:"Email Us"}),v.jsx("p",{className:"text-gray-400",children:v.jsx("a",{href:"kavyata914@gmail.com",children:"info@lupa.com"})})]})]}),v.jsxs("div",{className:"flex items-center",children:[v.jsx(U_,{className:"w-6 h-6 text-blue-400 mr-4"}),v.jsxs("div",{children:[v.jsx("h3",{className:"font-semibold mb-1",children:"Working Hours"}),v.jsx("p",{className:"text-gray-400",children:"Monday - Friday: 9:00 AM - 6:00 PM"})]})]})]}),v.jsx("div",{className:"flex justify-center",children:v.jsx(Kw,{})})]})]}),v.jsx(Mt,{className:"p-8 mb-20",children:v.jsx("div",{className:"aspect-w-16 aspect-h-9",children:v.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d691.335966142331!2d70.82905946667762!3d22.304822193903863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b5e2265eaa6d%3A0xbf8824163cb9fbd3!2s3-6-7%2C%20Rd%20Number%201%2C%20near%20Meera%20complex%2C%20Gujarat%20Society%2C%20Arya%20Nagar%2C%20Rajkot%2C%20Gujarat%20360002!5e0!3m2!1sen!2sin!4v1744098643266!5m2!1sen!2sin",width:"100%",height:"450",style:{border:0},allowFullScreen:!0,loading:"lazy",className:"rounded-lg",title:"Google Map"})})})]})]})},Qw=({id:r,title:e,excerpt:t,image:s,date:o,readTime:l,category:u})=>v.jsx(Mt,{hoverable:!0,className:"overflow-hidden group",children:v.jsxs(Rr,{to:`/blog/${r}`,children:[v.jsxs("div",{className:"relative overflow-hidden mb-4",children:[v.jsx("img",{src:s,alt:e,className:"w-full h-48 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"}),v.jsx("div",{className:"absolute top-2 right-2",children:v.jsx("span",{className:"bg-gray-900/80 backdrop-blur-sm text-blue-400 text-xs px-3 py-1 rounded-full",children:u})})]}),v.jsx("h3",{className:"text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors",children:e}),v.jsx("p",{className:"text-gray-400 text-sm mb-4",children:t}),v.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[v.jsx(L_,{size:14,className:"mr-1"}),v.jsx("span",{className:"mr-4",children:o}),v.jsx(I_,{size:14,className:"mr-1"}),v.jsx("span",{children:l})]})]})}),Jw=["All","Technology","Development","Design","Business","Security"],Dg=[{id:"1",title:"The Future of Web Development in 2024",excerpt:"Explore the latest trends and technologies shaping the future of web development.",image:"https://picsum.photos/seed/web/400/300",date:"Feb 15, 2024",readTime:"5 min read",category:"Development"},{id:"2",title:"Cybersecurity Best Practices for Businesses",excerpt:"Essential security measures every business should implement to protect their digital assets.",image:"https://picsum.photos/seed/security/400/300",date:"Feb 12, 2024",readTime:"8 min read",category:"Security"},{id:"3",title:"AI in Modern Business Applications",excerpt:"How artificial intelligence is transforming business operations and decision-making.",image:"https://picsum.photos/seed/ai/400/300",date:"Feb 10, 2024",readTime:"6 min read",category:"Technology"},{id:"4",title:"UI/UX Design Trends for 2024",excerpt:"Latest design trends and practices for creating engaging user experiences.",image:"https://picsum.photos/seed/design/400/300",date:"Feb 8, 2024",readTime:"4 min read",category:"Design"},{id:"5",title:"Cloud Computing: A Comprehensive Guide",excerpt:"Understanding cloud computing and its impact on modern businesses.",image:"https://picsum.photos/seed/cloud/400/300",date:"Feb 5, 2024",readTime:"7 min read",category:"Technology"},{id:"6",title:"Digital Transformation Strategies",excerpt:"Key strategies for successful digital transformation in your organization.",image:"https://picsum.photos/seed/digital/400/300",date:"Feb 1, 2024",readTime:"5 min read",category:"Business"}],eA=()=>{const[r,e]=Ae.useState("All"),t=r==="All"?Dg:Dg.filter(s=>s.category===r);return v.jsxs("div",{className:"min-h-screen bg-black pt-20 pb-16",children:[v.jsxs(Fr,{children:[v.jsx("title",{children:"Blog | Kavyta"}),v.jsx("meta",{name:"description",content:"Read the latest articles, news, and insights from Kavyta."})]}),v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ai,{title:"Our Blog",subtitle:"Insights and updates from our team of experts"}),v.jsx(Mt,{className:"mb-12 overflow-hidden",children:v.jsxs("div",{className:"flex flex-col md:flex-row gap-8",children:[v.jsx("div",{className:"md:w-1/2",children:v.jsx("img",{src:"https://picsum.photos/seed/featured/800/600",alt:"Featured post",className:"w-full h-[300px] object-cover rounded-lg"})}),v.jsxs("div",{className:"md:w-1/2",children:[v.jsx("span",{className:"text-blue-400 text-sm mb-2 block",children:"Featured Post"}),v.jsx("h2",{className:"text-2xl font-bold mb-4",children:"The Evolution of Technology: Past, Present, and Future"}),v.jsx("p",{className:"text-gray-400 mb-4",children:"A comprehensive look at how technology has evolved over the decades and what the future holds for innovation and digital transformation."}),v.jsxs("div",{className:"flex items-center text-sm text-gray-500 mb-6",children:[v.jsx("span",{className:"mr-4",children:"Feb 20, 2024"}),v.jsx("span",{children:"10 min read"})]}),v.jsx(Sn,{href:"/blog/featured",children:"Read More"})]})]})}),v.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:Jw.map(s=>v.jsx(Sn,{variant:r===s?"primary":"outline",onClick:()=>e(s),children:s},s))}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map(s=>v.jsx(Qw,{...s},s.id))})]})]})},tA=()=>{const{id:r}=n_();return v.jsx("div",{className:"min-h-screen bg-black pt-20 pb-16",children:v.jsxs("div",{className:"container mx-auto px-4 py-16",children:[v.jsxs("h1",{className:"text-3xl md:text-4xl font-bold mb-8 text-center",children:["Blog Post ",r]}),v.jsx("p",{className:"text-gray-400 text-center mb-12",children:"Blog post content coming soon"})]})})},Qs={title:"Web Development",subtitle:"Crafting responsive and dynamic websites to enhance your online presence.",imageUrl:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",features:["Custom Website Design","Responsive Layouts","SEO Optimization","Content Management Systems"],costing:[{plan:"Starter",price:"$800",features:["1 Page","Basic SEO"]},{plan:"Professional",price:"$2000",features:["5 Pages","Advanced SEO","CMS"]},{plan:"Enterprise",price:"$4000",features:["Unlimited Pages","Full SEO","E-commerce"]}],technologies:["HTML5","CSS3","JavaScript","React","Next.js"]},nA=()=>v.jsx("div",{className:"min-h-screen pt-20 pb-16 bg-black text-white",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ai,{title:Qs.title,subtitle:Qs.subtitle}),v.jsxs("section",{className:"mb-12 flex flex-col md:flex-row gap-8 items-center",children:[v.jsx("div",{className:"md:w-1/2",children:v.jsx("img",{src:`${Qs.imageUrl}?auto=format&fit=crop&w=800&q=80`,alt:"Web Development",className:"rounded-lg shadow-lg object-cover w-full h-64 md:h-96"})}),v.jsxs("div",{className:"md:w-1/2",children:[v.jsx("p",{className:"text-gray-300 mb-6",children:"We design and develop modern websites tailored to your brand identity. From single-page designs to complex portals, we ensure high performance, responsiveness, and engaging UI/UX."}),v.jsx(Sn,{children:"Start Your Project"})]})]}),v.jsxs("section",{className:"my-12",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Key Features"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:Qs.features.map((r,e)=>v.jsxs(Mt,{className:"group p-6 flex flex-col items-start justify-between h-full hover:shadow-xl transition duration-300 border border-gray-800 hover:border-blue-500",children:[v.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[v.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-blue-500 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition duration-300",children:v.jsx(ho,{className:"w-5 h-5 text-white"})}),v.jsx("h3",{className:"text-lg font-semibold text-white",children:r})]}),v.jsx("p",{className:"text-gray-400 text-sm",children:`We ensure high quality in "${r}" using modern web technologies and best practices.`})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Pricing Plans"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Qs.costing.map((r,e)=>v.jsxs(Mt,{className:"p-6",children:[v.jsx("h3",{className:"text-lg font-bold mb-2",children:r.plan}),v.jsx("p",{className:"text-2xl font-semibold text-purple-400 mb-4",children:r.price}),v.jsx("ul",{className:"text-gray-300 space-y-1",children:r.features.map((t,s)=>v.jsxs("li",{children:["• ",t]},s))})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Technologies We Use"}),v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",children:Qs.technologies.map((r,e)=>v.jsx(Mt,{className:"py-4 text-center",hoverable:!0,children:v.jsx("span",{className:"text-gray-200",children:r})},e))})]}),v.jsxs("section",{className:"text-center mt-20",children:[v.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Need a Stunning Website?"}),v.jsx("p",{className:"text-gray-400 mb-6",children:"Let's build your online presence together."}),v.jsx(Sn,{children:"Request a Demo"})]})]})}),Js={title:"Software Development",subtitle:"Developing robust software solutions to streamline your business operations.",imageUrl:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4",features:["Custom Software Solutions","Enterprise Applications","API Development","System Integration"],costing:[{plan:"Basic",price:"$1000",features:["1 Module","Basic Support"]},{plan:"Standard",price:"$2500",features:["3 Modules","Priority Support"]},{plan:"Premium",price:"$5000",features:["All Modules","24/7 Support","Maintenance"]}],technologies:["Node.js","Python","MongoDB","MySQL","Docker"]},iA=()=>v.jsx("div",{className:"min-h-screen pt-20 pb-16 bg-black text-white",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ai,{title:Js.title,subtitle:Js.subtitle}),v.jsxs("section",{className:"mb-12 flex flex-col md:flex-row gap-8 items-center",children:[v.jsx("div",{className:"md:w-1/2",children:v.jsx("img",{src:`${Js.imageUrl}?auto=format&fit=crop&w=800&q=80`,alt:"Software Development",className:"rounded-lg shadow-lg object-cover w-full h-64 md:h-96"})}),v.jsxs("div",{className:"md:w-1/2",children:[v.jsx("p",{className:"text-gray-300 mb-6",children:"We offer end-to-end software development tailored to your business processes. From planning to deployment, our team ensures seamless functionality, clean architecture, and scalable systems."}),v.jsx(Sn,{children:"Start Your Project"})]})]}),v.jsxs("section",{className:"my-12",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Key Features"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:Js.features.map((r,e)=>v.jsxs(Mt,{className:"group p-6 flex flex-col items-start justify-between h-full hover:shadow-xl transition duration-300 border border-gray-800 hover:border-blue-500",children:[v.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[v.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-blue-500 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition duration-300",children:v.jsx(ho,{className:"w-5 h-5 text-white"})}),v.jsx("h3",{className:"text-lg font-semibold text-white",children:r})]}),v.jsx("p",{className:"text-gray-400 text-sm",children:`We ensure high quality in "${r}" using modern practices and scalable architecture.`})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Pricing Plans"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Js.costing.map((r,e)=>v.jsxs(Mt,{className:"p-6",children:[v.jsx("h3",{className:"text-lg font-bold mb-2",children:r.plan}),v.jsx("p",{className:"text-2xl font-semibold text-purple-400 mb-4",children:r.price}),v.jsx("ul",{className:"text-gray-300 space-y-1",children:r.features.map((t,s)=>v.jsxs("li",{children:["• ",t]},s))})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Technologies We Use"}),v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",children:Js.technologies.map((r,e)=>v.jsx(Mt,{className:"py-4 text-center",hoverable:!0,children:v.jsx("span",{className:"text-gray-200",children:r})},e))})]}),v.jsxs("section",{className:"text-center mt-20",children:[v.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Ready to Start?"}),v.jsx("p",{className:"text-gray-400 mb-6",children:"Request a live demo or talk to our experts now."}),v.jsx(Sn,{children:"Request a Demo"})]})]})}),ea={title:"Mobile App Development",subtitle:"Creating user-friendly mobile applications for iOS and Android platforms.",imageUrl:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",features:["iOS App Development","Android App Development","Cross-Platform Solutions","App Store Deployment"],costing:[{plan:"Basic",price:"$1500",features:["1 Platform","Simple UI"]},{plan:"Advanced",price:"$3000",features:["Both Platforms","Modern UI/UX","API Integration"]},{plan:"Enterprise",price:"$6000",features:["Custom Features","Maintenance","Analytics Integration"]}],technologies:["React Native","Flutter","Swift","Kotlin","Firebase"]},rA=()=>v.jsx("div",{className:"min-h-screen pt-20 pb-16 bg-black text-white",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ai,{title:ea.title,subtitle:ea.subtitle}),v.jsxs("section",{className:"mb-12 flex flex-col md:flex-row gap-8 items-center",children:[v.jsx("div",{className:"md:w-1/2",children:v.jsx("img",{src:`${ea.imageUrl}?auto=format&fit=crop&w=800&q=80`,alt:"Mobile App Development",className:"rounded-lg shadow-lg object-cover w-full h-64 md:h-96"})}),v.jsxs("div",{className:"md:w-1/2",children:[v.jsx("p",{className:"text-gray-300 mb-6",children:"We design and develop high-performance mobile apps tailored to your business needs. Our team builds seamless, engaging apps across platforms, ensuring smooth performance and beautiful UI."}),v.jsx(Sn,{children:"Start Your Project"})]})]}),v.jsxs("section",{className:"my-12",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Key Features"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:ea.features.map((r,e)=>v.jsxs(Mt,{className:"group p-6 flex flex-col items-start justify-between h-full hover:shadow-xl transition duration-300 border border-gray-800 hover:border-blue-500",children:[v.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[v.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-blue-500 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition duration-300",children:v.jsx(ho,{className:"w-5 h-5 text-white"})}),v.jsx("h3",{className:"text-lg font-semibold text-white",children:r})]}),v.jsx("p",{className:"text-gray-400 text-sm",children:`Delivering excellence in "${r}" with the latest mobile technologies and best-in-class user experience.`})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Pricing Plans"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:ea.costing.map((r,e)=>v.jsxs(Mt,{className:"p-6",children:[v.jsx("h3",{className:"text-lg font-bold mb-2",children:r.plan}),v.jsx("p",{className:"text-2xl font-semibold text-purple-400 mb-4",children:r.price}),v.jsx("ul",{className:"text-gray-300 space-y-1",children:r.features.map((t,s)=>v.jsxs("li",{children:["• ",t]},s))})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Technologies We Use"}),v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",children:ea.technologies.map((r,e)=>v.jsx(Mt,{className:"py-4 text-center",hoverable:!0,children:v.jsx("span",{className:"text-gray-200",children:r})},e))})]}),v.jsxs("section",{className:"text-center mt-20",children:[v.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Have a Mobile App Idea?"}),v.jsx("p",{className:"text-gray-400 mb-6",children:"Let’s bring your vision to the App Store and Google Play."}),v.jsx(Sn,{children:"Request a Demo"})]})]})}),ta={title:"IT Consulting",subtitle:"Providing expert guidance to optimize your IT strategies and infrastructure.",imageUrl:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",features:["IT Strategy Development","Technology Assessment","Process Improvement","Project Management"],costing:[{plan:"Basic",price:"$1000/mo",features:["Initial Audit","Strategy Session"]},{plan:"Standard",price:"$2500/mo",features:["Monthly Check-ins","Tech Planning","Documentation"]},{plan:"Premium",price:"$5000/mo",features:["Dedicated Consultant","Full IT Strategy","Implementation Support"]}],technologies:["Azure","AWS","GCP","Docker","Kubernetes"]},sA=()=>v.jsx("div",{className:"min-h-screen pt-20 pb-16 bg-black text-white",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ai,{title:ta.title,subtitle:ta.subtitle}),v.jsxs("section",{className:"mb-12 flex flex-col md:flex-row gap-8 items-center",children:[v.jsx("div",{className:"md:w-1/2",children:v.jsx("img",{src:`${ta.imageUrl}?auto=format&fit=crop&w=800&q=80`,alt:"IT Consulting",className:"rounded-lg shadow-lg object-cover w-full h-64 md:h-96"})}),v.jsxs("div",{className:"md:w-1/2",children:[v.jsx("p",{className:"text-gray-300 mb-6",children:"We help businesses evolve with expert IT strategies, planning, and execution. Our consultants align your tech stack with your goals to deliver efficiency and innovation."}),v.jsx(Sn,{children:"Start Your Consultation"})]})]}),v.jsxs("section",{className:"my-12",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Key Features"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:ta.features.map((r,e)=>v.jsxs(Mt,{className:"group p-6 flex flex-col items-start justify-between h-full hover:shadow-xl transition duration-300 border border-gray-800 hover:border-blue-500",children:[v.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[v.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-blue-500 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition duration-300",children:v.jsx(ho,{className:"w-5 h-5 text-white"})}),v.jsx("h3",{className:"text-lg font-semibold text-white",children:r})]}),v.jsx("p",{className:"text-gray-400 text-sm",children:`Our consultants provide unmatched expertise in "${r}" to drive innovation.`})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Pricing Plans"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:ta.costing.map((r,e)=>v.jsxs(Mt,{className:"p-6",children:[v.jsx("h3",{className:"text-lg font-bold mb-2",children:r.plan}),v.jsx("p",{className:"text-2xl font-semibold text-purple-400 mb-4",children:r.price}),v.jsx("ul",{className:"text-gray-300 space-y-1",children:r.features.map((t,s)=>v.jsxs("li",{children:["• ",t]},s))})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Technologies We Use"}),v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",children:ta.technologies.map((r,e)=>v.jsx(Mt,{className:"py-4 text-center",hoverable:!0,children:v.jsx("span",{className:"text-gray-200",children:r})},e))})]}),v.jsxs("section",{className:"text-center mt-20",children:[v.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Transform Your IT Operations"}),v.jsx("p",{className:"text-gray-400 mb-6",children:"Partner with us for strategic success."}),v.jsx(Sn,{children:"Request a Free Consultation"})]})]})}),aA=()=>v.jsxs("div",{className:"flex flex-col items-center justify-center text-center py-20",children:[v.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404 - Page Not Found"}),v.jsx("p",{className:"text-lg text-gray-400 mb-6",children:"Oops! The page you're looking for doesn't exist."}),v.jsx(Rr,{to:"/",className:"px-6 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition-all",children:"Go Back Home"})]}),oA=()=>v.jsx(w_,{children:v.jsxs("div",{className:"flex flex-col min-h-screen bg-black text-white",children:[v.jsxs(Fr,{children:[v.jsx("meta",{charSet:"utf-8"}),v.jsx("title",{children:"Kavyta | Innovative Tech Solutions"}),v.jsx("meta",{name:"description",content:"Kavyta offers cutting-edge web development, mobile apps, software services, and IT consulting."}),v.jsx("link",{rel:"canonical",href:"https://kavyta.site"})]}),v.jsx(ey,{}),v.jsx("main",{className:"flex-grow",children:v.jsxs(x_,{children:[v.jsx(Nn,{path:"/",element:v.jsx(Uw,{})}),v.jsx(Nn,{path:"/about",element:v.jsx(kw,{})}),v.jsx(Nn,{path:"/services",element:v.jsx(Vw,{})}),v.jsx(Nn,{path:"/portfolio",element:v.jsx(Ww,{})}),v.jsx(Nn,{path:"/testimonials",element:v.jsx(Yw,{})}),v.jsx(Nn,{path:"/contact",element:v.jsx(Zw,{})}),v.jsx(Nn,{path:"/blog",element:v.jsx(eA,{})}),v.jsx(Nn,{path:"/blog/:id",element:v.jsx(tA,{})}),v.jsx(Nn,{path:"/services/web-development",element:v.jsx(nA,{})}),v.jsx(Nn,{path:"/services/software-development",element:v.jsx(iA,{})}),v.jsx(Nn,{path:"/services/mobile-app-development",element:v.jsx(rA,{})}),v.jsx(Nn,{path:"/services/it-consulting",element:v.jsx(sA,{})}),v.jsx(Nn,{path:"/*",element:v.jsx(aA,{})})]})}),v.jsx(ty,{})]})}),lA=document.getElementById("root"),cA=wx.createRoot(lA);cA.render(v.jsx(Uv,{children:v.jsx(oA,{})}));
