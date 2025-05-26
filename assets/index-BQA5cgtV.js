function b0(r,e){for(var n=0;n<e.length;n++){const s=e[n];if(typeof s!="string"&&!Array.isArray(s)){for(const o in s)if(o!=="default"&&!(o in r)){const c=Object.getOwnPropertyDescriptor(s,o);c&&Object.defineProperty(r,o,c.get?c:{enumerable:!0,get:()=>s[o]})}}}return Object.freeze(Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const u of c.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();function C0(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Ru={exports:{}},Ha={},Pu={exports:{}},ft={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Op;function R0(){if(Op)return ft;Op=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),_=Symbol.iterator;function S(I){return I===null||typeof I!="object"?null:(I=_&&I[_]||I["@@iterator"],typeof I=="function"?I:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,A={};function y(I,ne,Ue){this.props=I,this.context=ne,this.refs=A,this.updater=Ue||M}y.prototype.isReactComponent={},y.prototype.setState=function(I,ne){if(typeof I!="object"&&typeof I!="function"&&I!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,I,ne,"setState")},y.prototype.forceUpdate=function(I){this.updater.enqueueForceUpdate(this,I,"forceUpdate")};function g(){}g.prototype=y.prototype;function U(I,ne,Ue){this.props=I,this.context=ne,this.refs=A,this.updater=Ue||M}var L=U.prototype=new g;L.constructor=U,w(L,y.prototype),L.isPureReactComponent=!0;var R=Array.isArray,$=Object.prototype.hasOwnProperty,B={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function X(I,ne,Ue){var Z,ue={},Ee=null,_e=null;if(ne!=null)for(Z in ne.ref!==void 0&&(_e=ne.ref),ne.key!==void 0&&(Ee=""+ne.key),ne)$.call(ne,Z)&&!O.hasOwnProperty(Z)&&(ue[Z]=ne[Z]);var Ae=arguments.length-2;if(Ae===1)ue.children=Ue;else if(1<Ae){for(var Ie=Array(Ae),Qe=0;Qe<Ae;Qe++)Ie[Qe]=arguments[Qe+2];ue.children=Ie}if(I&&I.defaultProps)for(Z in Ae=I.defaultProps,Ae)ue[Z]===void 0&&(ue[Z]=Ae[Z]);return{$$typeof:r,type:I,key:Ee,ref:_e,props:ue,_owner:B.current}}function P(I,ne){return{$$typeof:r,type:I.type,key:ne,ref:I.ref,props:I.props,_owner:I._owner}}function C(I){return typeof I=="object"&&I!==null&&I.$$typeof===r}function z(I){var ne={"=":"=0",":":"=2"};return"$"+I.replace(/[=:]/g,function(Ue){return ne[Ue]})}var oe=/\/+/g;function te(I,ne){return typeof I=="object"&&I!==null&&I.key!=null?z(""+I.key):ne.toString(36)}function fe(I,ne,Ue,Z,ue){var Ee=typeof I;(Ee==="undefined"||Ee==="boolean")&&(I=null);var _e=!1;if(I===null)_e=!0;else switch(Ee){case"string":case"number":_e=!0;break;case"object":switch(I.$$typeof){case r:case e:_e=!0}}if(_e)return _e=I,ue=ue(_e),I=Z===""?"."+te(_e,0):Z,R(ue)?(Ue="",I!=null&&(Ue=I.replace(oe,"$&/")+"/"),fe(ue,ne,Ue,"",function(Qe){return Qe})):ue!=null&&(C(ue)&&(ue=P(ue,Ue+(!ue.key||_e&&_e.key===ue.key?"":(""+ue.key).replace(oe,"$&/")+"/")+I)),ne.push(ue)),1;if(_e=0,Z=Z===""?".":Z+":",R(I))for(var Ae=0;Ae<I.length;Ae++){Ee=I[Ae];var Ie=Z+te(Ee,Ae);_e+=fe(Ee,ne,Ue,Ie,ue)}else if(Ie=S(I),typeof Ie=="function")for(I=Ie.call(I),Ae=0;!(Ee=I.next()).done;)Ee=Ee.value,Ie=Z+te(Ee,Ae++),_e+=fe(Ee,ne,Ue,Ie,ue);else if(Ee==="object")throw ne=String(I),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(I).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return _e}function pe(I,ne,Ue){if(I==null)return I;var Z=[],ue=0;return fe(I,Z,"","",function(Ee){return ne.call(Ue,Ee,ue++)}),Z}function ae(I){if(I._status===-1){var ne=I._result;ne=ne(),ne.then(function(Ue){(I._status===0||I._status===-1)&&(I._status=1,I._result=Ue)},function(Ue){(I._status===0||I._status===-1)&&(I._status=2,I._result=Ue)}),I._status===-1&&(I._status=0,I._result=ne)}if(I._status===1)return I._result.default;throw I._result}var ce={current:null},k={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:k,ReactCurrentOwner:B};function se(){throw Error("act(...) is not supported in production builds of React.")}return ft.Children={map:pe,forEach:function(I,ne,Ue){pe(I,function(){ne.apply(this,arguments)},Ue)},count:function(I){var ne=0;return pe(I,function(){ne++}),ne},toArray:function(I){return pe(I,function(ne){return ne})||[]},only:function(I){if(!C(I))throw Error("React.Children.only expected to receive a single React element child.");return I}},ft.Component=y,ft.Fragment=n,ft.Profiler=o,ft.PureComponent=U,ft.StrictMode=s,ft.Suspense=h,ft.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ft.act=se,ft.cloneElement=function(I,ne,Ue){if(I==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+I+".");var Z=w({},I.props),ue=I.key,Ee=I.ref,_e=I._owner;if(ne!=null){if(ne.ref!==void 0&&(Ee=ne.ref,_e=B.current),ne.key!==void 0&&(ue=""+ne.key),I.type&&I.type.defaultProps)var Ae=I.type.defaultProps;for(Ie in ne)$.call(ne,Ie)&&!O.hasOwnProperty(Ie)&&(Z[Ie]=ne[Ie]===void 0&&Ae!==void 0?Ae[Ie]:ne[Ie])}var Ie=arguments.length-2;if(Ie===1)Z.children=Ue;else if(1<Ie){Ae=Array(Ie);for(var Qe=0;Qe<Ie;Qe++)Ae[Qe]=arguments[Qe+2];Z.children=Ae}return{$$typeof:r,type:I.type,key:ue,ref:Ee,props:Z,_owner:_e}},ft.createContext=function(I){return I={$$typeof:u,_currentValue:I,_currentValue2:I,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},I.Provider={$$typeof:c,_context:I},I.Consumer=I},ft.createElement=X,ft.createFactory=function(I){var ne=X.bind(null,I);return ne.type=I,ne},ft.createRef=function(){return{current:null}},ft.forwardRef=function(I){return{$$typeof:d,render:I}},ft.isValidElement=C,ft.lazy=function(I){return{$$typeof:x,_payload:{_status:-1,_result:I},_init:ae}},ft.memo=function(I,ne){return{$$typeof:m,type:I,compare:ne===void 0?null:ne}},ft.startTransition=function(I){var ne=k.transition;k.transition={};try{I()}finally{k.transition=ne}},ft.unstable_act=se,ft.useCallback=function(I,ne){return ce.current.useCallback(I,ne)},ft.useContext=function(I){return ce.current.useContext(I)},ft.useDebugValue=function(){},ft.useDeferredValue=function(I){return ce.current.useDeferredValue(I)},ft.useEffect=function(I,ne){return ce.current.useEffect(I,ne)},ft.useId=function(){return ce.current.useId()},ft.useImperativeHandle=function(I,ne,Ue){return ce.current.useImperativeHandle(I,ne,Ue)},ft.useInsertionEffect=function(I,ne){return ce.current.useInsertionEffect(I,ne)},ft.useLayoutEffect=function(I,ne){return ce.current.useLayoutEffect(I,ne)},ft.useMemo=function(I,ne){return ce.current.useMemo(I,ne)},ft.useReducer=function(I,ne,Ue){return ce.current.useReducer(I,ne,Ue)},ft.useRef=function(I){return ce.current.useRef(I)},ft.useState=function(I){return ce.current.useState(I)},ft.useSyncExternalStore=function(I,ne,Ue){return ce.current.useSyncExternalStore(I,ne,Ue)},ft.useTransition=function(){return ce.current.useTransition()},ft.version="18.3.1",ft}var kp;function tf(){return kp||(kp=1,Pu.exports=R0()),Pu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bp;function P0(){if(Bp)return Ha;Bp=1;var r=tf(),e=Symbol.for("react.element"),n=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,m){var x,_={},S=null,M=null;m!==void 0&&(S=""+m),h.key!==void 0&&(S=""+h.key),h.ref!==void 0&&(M=h.ref);for(x in h)s.call(h,x)&&!c.hasOwnProperty(x)&&(_[x]=h[x]);if(d&&d.defaultProps)for(x in h=d.defaultProps,h)_[x]===void 0&&(_[x]=h[x]);return{$$typeof:e,type:d,key:S,ref:M,props:_,_owner:o.current}}return Ha.Fragment=n,Ha.jsx=u,Ha.jsxs=u,Ha}var zp;function N0(){return zp||(zp=1,Ru.exports=P0()),Ru.exports}var v=N0(),be=tf();const L0=C0(be),D0=b0({__proto__:null,default:L0},[be]);var fl={},Nu={exports:{}},Rn={},Lu={exports:{}},Du={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hp;function U0(){return Hp||(Hp=1,function(r){function e(k,le){var se=k.length;k.push(le);e:for(;0<se;){var I=se-1>>>1,ne=k[I];if(0<o(ne,le))k[I]=le,k[se]=ne,se=I;else break e}}function n(k){return k.length===0?null:k[0]}function s(k){if(k.length===0)return null;var le=k[0],se=k.pop();if(se!==le){k[0]=se;e:for(var I=0,ne=k.length,Ue=ne>>>1;I<Ue;){var Z=2*(I+1)-1,ue=k[Z],Ee=Z+1,_e=k[Ee];if(0>o(ue,se))Ee<ne&&0>o(_e,ue)?(k[I]=_e,k[Ee]=se,I=Ee):(k[I]=ue,k[Z]=se,I=Z);else if(Ee<ne&&0>o(_e,se))k[I]=_e,k[Ee]=se,I=Ee;else break e}}return le}function o(k,le){var se=k.sortIndex-le.sortIndex;return se!==0?se:k.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var u=Date,d=u.now();r.unstable_now=function(){return u.now()-d}}var h=[],m=[],x=1,_=null,S=3,M=!1,w=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(k){for(var le=n(m);le!==null;){if(le.callback===null)s(m);else if(le.startTime<=k)s(m),le.sortIndex=le.expirationTime,e(h,le);else break;le=n(m)}}function R(k){if(A=!1,L(k),!w)if(n(h)!==null)w=!0,ae($);else{var le=n(m);le!==null&&ce(R,le.startTime-k)}}function $(k,le){w=!1,A&&(A=!1,g(X),X=-1),M=!0;var se=S;try{for(L(le),_=n(h);_!==null&&(!(_.expirationTime>le)||k&&!z());){var I=_.callback;if(typeof I=="function"){_.callback=null,S=_.priorityLevel;var ne=I(_.expirationTime<=le);le=r.unstable_now(),typeof ne=="function"?_.callback=ne:_===n(h)&&s(h),L(le)}else s(h);_=n(h)}if(_!==null)var Ue=!0;else{var Z=n(m);Z!==null&&ce(R,Z.startTime-le),Ue=!1}return Ue}finally{_=null,S=se,M=!1}}var B=!1,O=null,X=-1,P=5,C=-1;function z(){return!(r.unstable_now()-C<P)}function oe(){if(O!==null){var k=r.unstable_now();C=k;var le=!0;try{le=O(!0,k)}finally{le?te():(B=!1,O=null)}}else B=!1}var te;if(typeof U=="function")te=function(){U(oe)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,pe=fe.port2;fe.port1.onmessage=oe,te=function(){pe.postMessage(null)}}else te=function(){y(oe,0)};function ae(k){O=k,B||(B=!0,te())}function ce(k,le){X=y(function(){k(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(k){k.callback=null},r.unstable_continueExecution=function(){w||M||(w=!0,ae($))},r.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<k?Math.floor(1e3/k):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_getFirstCallbackNode=function(){return n(h)},r.unstable_next=function(k){switch(S){case 1:case 2:case 3:var le=3;break;default:le=S}var se=S;S=le;try{return k()}finally{S=se}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(k,le){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var se=S;S=k;try{return le()}finally{S=se}},r.unstable_scheduleCallback=function(k,le,se){var I=r.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?I+se:I):se=I,k){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=se+ne,k={id:x++,callback:le,priorityLevel:k,startTime:se,expirationTime:ne,sortIndex:-1},se>I?(k.sortIndex=se,e(m,k),n(h)===null&&k===n(m)&&(A?(g(X),X=-1):A=!0,ce(R,se-I))):(k.sortIndex=ne,e(h,k),w||M||(w=!0,ae($))),k},r.unstable_shouldYield=z,r.unstable_wrapCallback=function(k){var le=S;return function(){var se=S;S=le;try{return k.apply(this,arguments)}finally{S=se}}}}(Du)),Du}var Vp;function I0(){return Vp||(Vp=1,Lu.exports=U0()),Lu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gp;function F0(){if(Gp)return Rn;Gp=1;var r=tf(),e=I0();function n(t){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+t,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+t+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,o={};function c(t,i){u(t,i),u(t+"Capture",i)}function u(t,i){for(o[t]=i,t=0;t<i.length;t++)s.add(i[t])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},_={};function S(t){return h.call(_,t)?!0:h.call(x,t)?!1:m.test(t)?_[t]=!0:(x[t]=!0,!1)}function M(t,i,a,l){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return l?!1:a!==null?!a.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function w(t,i,a,l){if(i===null||typeof i>"u"||M(t,i,a,l))return!0;if(l)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function A(t,i,a,l,f,p,E){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=l,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=t,this.type=i,this.sanitizeURL=p,this.removeEmptyString=E}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){y[t]=new A(t,0,!1,t,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var i=t[0];y[i]=new A(i,1,!1,t[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(t){y[t]=new A(t,2,!1,t.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){y[t]=new A(t,2,!1,t,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){y[t]=new A(t,3,!1,t.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(t){y[t]=new A(t,3,!0,t,null,!1,!1)}),["capture","download"].forEach(function(t){y[t]=new A(t,4,!1,t,null,!1,!1)}),["cols","rows","size","span"].forEach(function(t){y[t]=new A(t,6,!1,t,null,!1,!1)}),["rowSpan","start"].forEach(function(t){y[t]=new A(t,5,!1,t.toLowerCase(),null,!1,!1)});var g=/[\-:]([a-z])/g;function U(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var i=t.replace(g,U);y[i]=new A(i,1,!1,t,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var i=t.replace(g,U);y[i]=new A(i,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(t){var i=t.replace(g,U);y[i]=new A(i,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!1,!1)}),y.xlinkHref=new A("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(t){y[t]=new A(t,1,!1,t.toLowerCase(),null,!0,!0)});function L(t,i,a,l){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:l||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,a,f,l)&&(a=null),l||f===null?S(i)&&(a===null?t.removeAttribute(i):t.setAttribute(i,""+a)):f.mustUseProperty?t[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,l=f.attributeNamespace,a===null?t.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,l?t.setAttributeNS(l,i,a):t.setAttribute(i,a))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,$=Symbol.for("react.element"),B=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),X=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),z=Symbol.for("react.context"),oe=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),k=Symbol.iterator;function le(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var se=Object.assign,I;function ne(t){if(I===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);I=i&&i[1]||""}return`
`+I+t}var Ue=!1;function Z(t,i){if(!t||Ue)return"";Ue=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(Q){var l=Q}Reflect.construct(t,[],i)}else{try{i.call()}catch(Q){l=Q}t.call(i.prototype)}else{try{throw Error()}catch(Q){l=Q}t()}}catch(Q){if(Q&&l&&typeof Q.stack=="string"){for(var f=Q.stack.split(`
`),p=l.stack.split(`
`),E=f.length-1,D=p.length-1;1<=E&&0<=D&&f[E]!==p[D];)D--;for(;1<=E&&0<=D;E--,D--)if(f[E]!==p[D]){if(E!==1||D!==1)do if(E--,D--,0>D||f[E]!==p[D]){var F=`
`+f[E].replace(" at new "," at ");return t.displayName&&F.includes("<anonymous>")&&(F=F.replace("<anonymous>",t.displayName)),F}while(1<=E&&0<=D);break}}}finally{Ue=!1,Error.prepareStackTrace=a}return(t=t?t.displayName||t.name:"")?ne(t):""}function ue(t){switch(t.tag){case 5:return ne(t.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return t=Z(t.type,!1),t;case 11:return t=Z(t.type.render,!1),t;case 1:return t=Z(t.type,!0),t;default:return""}}function Ee(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case O:return"Fragment";case B:return"Portal";case P:return"Profiler";case X:return"StrictMode";case te:return"Suspense";case fe:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case z:return(t.displayName||"Context")+".Consumer";case C:return(t._context.displayName||"Context")+".Provider";case oe:var i=t.render;return t=t.displayName,t||(t=i.displayName||i.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pe:return i=t.displayName||null,i!==null?i:Ee(t.type)||"Memo";case ae:i=t._payload,t=t._init;try{return Ee(t(i))}catch{}}return null}function _e(t){var i=t.type;switch(t.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=i.render,t=t.displayName||t.name||"",i.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ee(i);case 8:return i===X?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ie(t){var i=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(t){var i=Ie(t)?"checked":"value",a=Object.getOwnPropertyDescriptor(t.constructor.prototype,i),l=""+t[i];if(!t.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,p=a.set;return Object.defineProperty(t,i,{configurable:!0,get:function(){return f.call(this)},set:function(E){l=""+E,p.call(this,E)}}),Object.defineProperty(t,i,{enumerable:a.enumerable}),{getValue:function(){return l},setValue:function(E){l=""+E},stopTracking:function(){t._valueTracker=null,delete t[i]}}}}function bt(t){t._valueTracker||(t._valueTracker=Qe(t))}function pt(t){if(!t)return!1;var i=t._valueTracker;if(!i)return!0;var a=i.getValue(),l="";return t&&(l=Ie(t)?t.checked?"true":"false":t.value),t=l,t!==a?(i.setValue(t),!0):!1}function Lt(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function W(t,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??t._wrapperState.initialChecked})}function mn(t,i){var a=i.defaultValue==null?"":i.defaultValue,l=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),t._wrapperState={initialChecked:l,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(t,i){i=i.checked,i!=null&&L(t,"checked",i,!1)}function ut(t,i){ht(t,i);var a=Ae(i.value),l=i.type;if(a!=null)l==="number"?(a===0&&t.value===""||t.value!=a)&&(t.value=""+a):t.value!==""+a&&(t.value=""+a);else if(l==="submit"||l==="reset"){t.removeAttribute("value");return}i.hasOwnProperty("value")?wt(t,i.type,a):i.hasOwnProperty("defaultValue")&&wt(t,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(t.defaultChecked=!!i.defaultChecked)}function $e(t,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var l=i.type;if(!(l!=="submit"&&l!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+t._wrapperState.initialValue,a||i===t.value||(t.value=i),t.defaultValue=i}a=t.name,a!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,a!==""&&(t.name=a)}function wt(t,i,a){(i!=="number"||Lt(t.ownerDocument)!==t)&&(a==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+a&&(t.defaultValue=""+a))}var Ye=Array.isArray;function N(t,i,a,l){if(t=t.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<t.length;a++)f=i.hasOwnProperty("$"+t[a].value),t[a].selected!==f&&(t[a].selected=f),f&&l&&(t[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,f=0;f<t.length;f++){if(t[f].value===a){t[f].selected=!0,l&&(t[f].defaultSelected=!0);return}i!==null||t[f].disabled||(i=t[f])}i!==null&&(i.selected=!0)}}function T(t,i){if(i.dangerouslySetInnerHTML!=null)throw Error(n(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function K(t,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(n(92));if(Ye(a)){if(1<a.length)throw Error(n(93));a=a[0]}i=a}i==null&&(i=""),a=i}t._wrapperState={initialValue:Ae(a)}}function me(t,i){var a=Ae(i.value),l=Ae(i.defaultValue);a!=null&&(a=""+a,a!==t.value&&(t.value=a),i.defaultValue==null&&t.defaultValue!==a&&(t.defaultValue=a)),l!=null&&(t.defaultValue=""+l)}function ve(t){var i=t.textContent;i===t._wrapperState.initialValue&&i!==""&&i!==null&&(t.value=i)}function de(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ge(t,i){return t==null||t==="http://www.w3.org/1999/xhtml"?de(i):t==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ce,Fe=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,l,f){MSApp.execUnsafeLocalFunction(function(){return t(i,a,l,f)})}:t}(function(t,i){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;i.firstChild;)t.appendChild(i.firstChild)}});function ct(t,i){if(i){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=i;return}}t.textContent=i}var Se={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ke=["Webkit","ms","Moz","O"];Object.keys(Se).forEach(function(t){ke.forEach(function(i){i=i+t.charAt(0).toUpperCase()+t.substring(1),Se[i]=Se[t]})});function Je(t,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Se.hasOwnProperty(t)&&Se[t]?(""+i).trim():i+"px"}function et(t,i){t=t.style;for(var a in i)if(i.hasOwnProperty(a)){var l=a.indexOf("--")===0,f=Je(a,i[a],l);a==="float"&&(a="cssFloat"),l?t.setProperty(a,f):t[a]=f}}var Be=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function dt(t,i){if(i){if(Be[t]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(n(137,t));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(n(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(n(61))}if(i.style!=null&&typeof i.style!="object")throw Error(n(62))}}function rt(t,i){if(t.indexOf("-")===-1)return typeof i.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=null;function V(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Re=null,re=null,he=null;function Le(t){if(t=Aa(t)){if(typeof Re!="function")throw Error(n(280));var i=t.stateNode;i&&(i=bo(i),Re(t.stateNode,t.type,i))}}function Ne(t){re?he?he.push(t):he=[t]:re=t}function st(){if(re){var t=re,i=he;if(he=re=null,Le(t),i)for(t=0;t<i.length;t++)Le(i[t])}}function Ut(t,i){return t(i)}function Yt(){}var vt=!1;function Mn(t,i,a){if(vt)return t(i,a);vt=!0;try{return Ut(t,i,a)}finally{vt=!1,(re!==null||he!==null)&&(Yt(),st())}}function gn(t,i){var a=t.stateNode;if(a===null)return null;var l=bo(a);if(l===null)return null;a=l[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(l=!l.disabled)||(t=t.type,l=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!l;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(n(231,i,typeof a));return a}var os=!1;if(d)try{var $i={};Object.defineProperty($i,"passive",{get:function(){os=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{os=!1}function wi(t,i,a,l,f,p,E,D,F){var Q=Array.prototype.slice.call(arguments,3);try{i.apply(a,Q)}catch(xe){this.onError(xe)}}var Ai=!1,Lr=null,Dr=!1,Ki=null,ao={onError:function(t){Ai=!0,Lr=t}};function ls(t,i,a,l,f,p,E,D,F){Ai=!1,Lr=null,wi.apply(ao,arguments)}function oo(t,i,a,l,f,p,E,D,F){if(ls.apply(this,arguments),Ai){if(Ai){var Q=Lr;Ai=!1,Lr=null}else throw Error(n(198));Dr||(Dr=!0,Ki=Q)}}function pi(t){var i=t,a=t;if(t.alternate)for(;i.return;)i=i.return;else{t=i;do i=t,(i.flags&4098)!==0&&(a=i.return),t=i.return;while(t)}return i.tag===3?a:null}function lo(t){if(t.tag===13){var i=t.memoizedState;if(i===null&&(t=t.alternate,t!==null&&(i=t.memoizedState)),i!==null)return i.dehydrated}return null}function co(t){if(pi(t)!==t)throw Error(n(188))}function Zl(t){var i=t.alternate;if(!i){if(i=pi(t),i===null)throw Error(n(188));return i!==t?null:t}for(var a=t,l=i;;){var f=a.return;if(f===null)break;var p=f.alternate;if(p===null){if(l=f.return,l!==null){a=l;continue}break}if(f.child===p.child){for(p=f.child;p;){if(p===a)return co(f),t;if(p===l)return co(f),i;p=p.sibling}throw Error(n(188))}if(a.return!==l.return)a=f,l=p;else{for(var E=!1,D=f.child;D;){if(D===a){E=!0,a=f,l=p;break}if(D===l){E=!0,l=f,a=p;break}D=D.sibling}if(!E){for(D=p.child;D;){if(D===a){E=!0,a=p,l=f;break}if(D===l){E=!0,l=p,a=f;break}D=D.sibling}if(!E)throw Error(n(189))}}if(a.alternate!==l)throw Error(n(190))}if(a.tag!==3)throw Error(n(188));return a.stateNode.current===a?t:i}function b(t){return t=Zl(t),t!==null?G(t):null}function G(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var i=G(t);if(i!==null)return i;t=t.sibling}return null}var J=e.unstable_scheduleCallback,ee=e.unstable_cancelCallback,j=e.unstable_shouldYield,we=e.unstable_requestPaint,Me=e.unstable_now,je=e.unstable_getCurrentPriorityLevel,He=e.unstable_ImmediatePriority,tt=e.unstable_UserBlockingPriority,it=e.unstable_NormalPriority,We=e.unstable_LowPriority,gt=e.unstable_IdlePriority,Et=null,mt=null;function on(t){if(mt&&typeof mt.onCommitFiberRoot=="function")try{mt.onCommitFiberRoot(Et,t,void 0,(t.current.flags&128)===128)}catch{}}var at=Math.clz32?Math.clz32:yt,qe=Math.log,Jn=Math.LN2;function yt(t){return t>>>=0,t===0?32:31-(qe(t)/Jn|0)|0}var ln=64,ei=4194304;function $t(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function mi(t,i){var a=t.pendingLanes;if(a===0)return 0;var l=0,f=t.suspendedLanes,p=t.pingedLanes,E=a&268435455;if(E!==0){var D=E&~f;D!==0?l=$t(D):(p&=E,p!==0&&(l=$t(p)))}else E=a&~f,E!==0?l=$t(E):p!==0&&(l=$t(p));if(l===0)return 0;if(i!==0&&i!==l&&(i&f)===0&&(f=l&-l,p=i&-i,f>=p||f===16&&(p&4194240)!==0))return i;if((l&4)!==0&&(l|=a&16),i=t.entangledLanes,i!==0)for(t=t.entanglements,i&=l;0<i;)a=31-at(i),f=1<<a,l|=t[a],i&=~f;return l}function Pt(t,i){switch(t){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gn(t,i){for(var a=t.suspendedLanes,l=t.pingedLanes,f=t.expirationTimes,p=t.pendingLanes;0<p;){var E=31-at(p),D=1<<E,F=f[E];F===-1?((D&a)===0||(D&l)!==0)&&(f[E]=Pt(D,i)):F<=i&&(t.expiredLanes|=D),p&=~D}}function bi(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function vn(){var t=ln;return ln<<=1,(ln&4194240)===0&&(ln=64),t}function jn(t){for(var i=[],a=0;31>a;a++)i.push(t);return i}function En(t,i,a){t.pendingLanes|=i,i!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,i=31-at(i),t[i]=a}function uo(t,i){var a=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;var l=t.eventTimes;for(t=t.expirationTimes;0<a;){var f=31-at(a),p=1<<f;i[f]=0,l[f]=-1,t[f]=-1,a&=~p}}function Ql(t,i){var a=t.entangledLanes|=i;for(t=t.entanglements;a;){var l=31-at(a),f=1<<l;f&i|t[l]&i&&(t[l]|=i),a&=~f}}var At=0;function mf(t){return t&=-t,1<t?4<t?(t&268435455)!==0?16:536870912:4:1}var gf,Jl,vf,xf,_f,ec=!1,fo=[],Zi=null,Qi=null,Ji=null,ua=new Map,da=new Map,er=[],$g="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function yf(t,i){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":ua.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":da.delete(i.pointerId)}}function fa(t,i,a,l,f,p){return t===null||t.nativeEvent!==p?(t={blockedOn:i,domEventName:a,eventSystemFlags:l,nativeEvent:p,targetContainers:[f]},i!==null&&(i=Aa(i),i!==null&&Jl(i)),t):(t.eventSystemFlags|=l,i=t.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),t)}function Kg(t,i,a,l,f){switch(i){case"focusin":return Zi=fa(Zi,t,i,a,l,f),!0;case"dragenter":return Qi=fa(Qi,t,i,a,l,f),!0;case"mouseover":return Ji=fa(Ji,t,i,a,l,f),!0;case"pointerover":var p=f.pointerId;return ua.set(p,fa(ua.get(p)||null,t,i,a,l,f)),!0;case"gotpointercapture":return p=f.pointerId,da.set(p,fa(da.get(p)||null,t,i,a,l,f)),!0}return!1}function Sf(t){var i=Ur(t.target);if(i!==null){var a=pi(i);if(a!==null){if(i=a.tag,i===13){if(i=lo(a),i!==null){t.blockedOn=i,_f(t.priority,function(){vf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ho(t){if(t.blockedOn!==null)return!1;for(var i=t.targetContainers;0<i.length;){var a=nc(t.domEventName,t.eventSystemFlags,i[0],t.nativeEvent);if(a===null){a=t.nativeEvent;var l=new a.constructor(a.type,a);Tt=l,a.target.dispatchEvent(l),Tt=null}else return i=Aa(a),i!==null&&Jl(i),t.blockedOn=a,!1;i.shift()}return!0}function Mf(t,i,a){ho(t)&&a.delete(i)}function Zg(){ec=!1,Zi!==null&&ho(Zi)&&(Zi=null),Qi!==null&&ho(Qi)&&(Qi=null),Ji!==null&&ho(Ji)&&(Ji=null),ua.forEach(Mf),da.forEach(Mf)}function ha(t,i){t.blockedOn===i&&(t.blockedOn=null,ec||(ec=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Zg)))}function pa(t){function i(f){return ha(f,t)}if(0<fo.length){ha(fo[0],t);for(var a=1;a<fo.length;a++){var l=fo[a];l.blockedOn===t&&(l.blockedOn=null)}}for(Zi!==null&&ha(Zi,t),Qi!==null&&ha(Qi,t),Ji!==null&&ha(Ji,t),ua.forEach(i),da.forEach(i),a=0;a<er.length;a++)l=er[a],l.blockedOn===t&&(l.blockedOn=null);for(;0<er.length&&(a=er[0],a.blockedOn===null);)Sf(a),a.blockedOn===null&&er.shift()}var cs=R.ReactCurrentBatchConfig,po=!0;function Qg(t,i,a,l){var f=At,p=cs.transition;cs.transition=null;try{At=1,tc(t,i,a,l)}finally{At=f,cs.transition=p}}function Jg(t,i,a,l){var f=At,p=cs.transition;cs.transition=null;try{At=4,tc(t,i,a,l)}finally{At=f,cs.transition=p}}function tc(t,i,a,l){if(po){var f=nc(t,i,a,l);if(f===null)_c(t,i,l,mo,a),yf(t,l);else if(Kg(f,t,i,a,l))l.stopPropagation();else if(yf(t,l),i&4&&-1<$g.indexOf(t)){for(;f!==null;){var p=Aa(f);if(p!==null&&gf(p),p=nc(t,i,a,l),p===null&&_c(t,i,l,mo,a),p===f)break;f=p}f!==null&&l.stopPropagation()}else _c(t,i,l,null,a)}}var mo=null;function nc(t,i,a,l){if(mo=null,t=V(l),t=Ur(t),t!==null)if(i=pi(t),i===null)t=null;else if(a=i.tag,a===13){if(t=lo(i),t!==null)return t;t=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;t=null}else i!==t&&(t=null);return mo=t,null}function Ef(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(je()){case He:return 1;case tt:return 4;case it:case We:return 16;case gt:return 536870912;default:return 16}default:return 16}}var tr=null,ic=null,go=null;function Tf(){if(go)return go;var t,i=ic,a=i.length,l,f="value"in tr?tr.value:tr.textContent,p=f.length;for(t=0;t<a&&i[t]===f[t];t++);var E=a-t;for(l=1;l<=E&&i[a-l]===f[p-l];l++);return go=f.slice(t,1<l?1-l:void 0)}function vo(t){var i=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&i===13&&(t=13)):t=i,t===10&&(t=13),32<=t||t===13?t:0}function xo(){return!0}function wf(){return!1}function In(t){function i(a,l,f,p,E){this._reactName=a,this._targetInst=f,this.type=l,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var D in t)t.hasOwnProperty(D)&&(a=t[D],this[D]=a?a(p):p[D]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?xo:wf,this.isPropagationStopped=wf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=xo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=xo)},persist:function(){},isPersistent:xo}),i}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},rc=In(us),ma=se({},us,{view:0,detail:0}),ev=In(ma),sc,ac,ga,_o=se({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ga&&(ga&&t.type==="mousemove"?(sc=t.screenX-ga.screenX,ac=t.screenY-ga.screenY):ac=sc=0,ga=t),sc)},movementY:function(t){return"movementY"in t?t.movementY:ac}}),Af=In(_o),tv=se({},_o,{dataTransfer:0}),nv=In(tv),iv=se({},ma,{relatedTarget:0}),oc=In(iv),rv=se({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),sv=In(rv),av=se({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),ov=In(av),lv=se({},us,{data:0}),bf=In(lv),cv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},uv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},dv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fv(t){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(t):(t=dv[t])?!!i[t]:!1}function lc(){return fv}var hv=se({},ma,{key:function(t){if(t.key){var i=cv[t.key]||t.key;if(i!=="Unidentified")return i}return t.type==="keypress"?(t=vo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?uv[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lc,charCode:function(t){return t.type==="keypress"?vo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),pv=In(hv),mv=se({},_o,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cf=In(mv),gv=se({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lc}),vv=In(gv),xv=se({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),_v=In(xv),yv=se({},_o,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Sv=In(yv),Mv=[9,13,27,32],cc=d&&"CompositionEvent"in window,va=null;d&&"documentMode"in document&&(va=document.documentMode);var Ev=d&&"TextEvent"in window&&!va,Rf=d&&(!cc||va&&8<va&&11>=va),Pf=" ",Nf=!1;function Lf(t,i){switch(t){case"keyup":return Mv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Df(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ds=!1;function Tv(t,i){switch(t){case"compositionend":return Df(i);case"keypress":return i.which!==32?null:(Nf=!0,Pf);case"textInput":return t=i.data,t===Pf&&Nf?null:t;default:return null}}function wv(t,i){if(ds)return t==="compositionend"||!cc&&Lf(t,i)?(t=Tf(),go=ic=tr=null,ds=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Rf&&i.locale!=="ko"?null:i.data;default:return null}}var Av={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Uf(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i==="input"?!!Av[t.type]:i==="textarea"}function If(t,i,a,l){Ne(l),i=To(i,"onChange"),0<i.length&&(a=new rc("onChange","change",null,a,l),t.push({event:a,listeners:i}))}var xa=null,_a=null;function bv(t){Jf(t,0)}function yo(t){var i=gs(t);if(pt(i))return t}function Cv(t,i){if(t==="change")return i}var Ff=!1;if(d){var uc;if(d){var dc="oninput"in document;if(!dc){var Of=document.createElement("div");Of.setAttribute("oninput","return;"),dc=typeof Of.oninput=="function"}uc=dc}else uc=!1;Ff=uc&&(!document.documentMode||9<document.documentMode)}function kf(){xa&&(xa.detachEvent("onpropertychange",Bf),_a=xa=null)}function Bf(t){if(t.propertyName==="value"&&yo(_a)){var i=[];If(i,_a,t,V(t)),Mn(bv,i)}}function Rv(t,i,a){t==="focusin"?(kf(),xa=i,_a=a,xa.attachEvent("onpropertychange",Bf)):t==="focusout"&&kf()}function Pv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return yo(_a)}function Nv(t,i){if(t==="click")return yo(i)}function Lv(t,i){if(t==="input"||t==="change")return yo(i)}function Dv(t,i){return t===i&&(t!==0||1/t===1/i)||t!==t&&i!==i}var ti=typeof Object.is=="function"?Object.is:Dv;function ya(t,i){if(ti(t,i))return!0;if(typeof t!="object"||t===null||typeof i!="object"||i===null)return!1;var a=Object.keys(t),l=Object.keys(i);if(a.length!==l.length)return!1;for(l=0;l<a.length;l++){var f=a[l];if(!h.call(i,f)||!ti(t[f],i[f]))return!1}return!0}function zf(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Hf(t,i){var a=zf(t);t=0;for(var l;a;){if(a.nodeType===3){if(l=t+a.textContent.length,t<=i&&l>=i)return{node:a,offset:i-t};t=l}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=zf(a)}}function Vf(t,i){return t&&i?t===i?!0:t&&t.nodeType===3?!1:i&&i.nodeType===3?Vf(t,i.parentNode):"contains"in t?t.contains(i):t.compareDocumentPosition?!!(t.compareDocumentPosition(i)&16):!1:!1}function Gf(){for(var t=window,i=Lt();i instanceof t.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)t=i.contentWindow;else break;i=Lt(t.document)}return i}function fc(t){var i=t&&t.nodeName&&t.nodeName.toLowerCase();return i&&(i==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||i==="textarea"||t.contentEditable==="true")}function Uv(t){var i=Gf(),a=t.focusedElem,l=t.selectionRange;if(i!==a&&a&&a.ownerDocument&&Vf(a.ownerDocument.documentElement,a)){if(l!==null&&fc(a)){if(i=l.start,t=l.end,t===void 0&&(t=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(t,a.value.length);else if(t=(i=a.ownerDocument||document)&&i.defaultView||window,t.getSelection){t=t.getSelection();var f=a.textContent.length,p=Math.min(l.start,f);l=l.end===void 0?p:Math.min(l.end,f),!t.extend&&p>l&&(f=l,l=p,p=f),f=Hf(a,p);var E=Hf(a,l);f&&E&&(t.rangeCount!==1||t.anchorNode!==f.node||t.anchorOffset!==f.offset||t.focusNode!==E.node||t.focusOffset!==E.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),t.removeAllRanges(),p>l?(t.addRange(i),t.extend(E.node,E.offset)):(i.setEnd(E.node,E.offset),t.addRange(i)))}}for(i=[],t=a;t=t.parentNode;)t.nodeType===1&&i.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)t=i[a],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Iv=d&&"documentMode"in document&&11>=document.documentMode,fs=null,hc=null,Sa=null,pc=!1;function jf(t,i,a){var l=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;pc||fs==null||fs!==Lt(l)||(l=fs,"selectionStart"in l&&fc(l)?l={start:l.selectionStart,end:l.selectionEnd}:(l=(l.ownerDocument&&l.ownerDocument.defaultView||window).getSelection(),l={anchorNode:l.anchorNode,anchorOffset:l.anchorOffset,focusNode:l.focusNode,focusOffset:l.focusOffset}),Sa&&ya(Sa,l)||(Sa=l,l=To(hc,"onSelect"),0<l.length&&(i=new rc("onSelect","select",null,i,a),t.push({event:i,listeners:l}),i.target=fs)))}function So(t,i){var a={};return a[t.toLowerCase()]=i.toLowerCase(),a["Webkit"+t]="webkit"+i,a["Moz"+t]="moz"+i,a}var hs={animationend:So("Animation","AnimationEnd"),animationiteration:So("Animation","AnimationIteration"),animationstart:So("Animation","AnimationStart"),transitionend:So("Transition","TransitionEnd")},mc={},Wf={};d&&(Wf=document.createElement("div").style,"AnimationEvent"in window||(delete hs.animationend.animation,delete hs.animationiteration.animation,delete hs.animationstart.animation),"TransitionEvent"in window||delete hs.transitionend.transition);function Mo(t){if(mc[t])return mc[t];if(!hs[t])return t;var i=hs[t],a;for(a in i)if(i.hasOwnProperty(a)&&a in Wf)return mc[t]=i[a];return t}var Xf=Mo("animationend"),qf=Mo("animationiteration"),Yf=Mo("animationstart"),$f=Mo("transitionend"),Kf=new Map,Zf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(t,i){Kf.set(t,i),c(i,[t])}for(var gc=0;gc<Zf.length;gc++){var vc=Zf[gc],Fv=vc.toLowerCase(),Ov=vc[0].toUpperCase()+vc.slice(1);nr(Fv,"on"+Ov)}nr(Xf,"onAnimationEnd"),nr(qf,"onAnimationIteration"),nr(Yf,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr($f,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ma="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ma));function Qf(t,i,a){var l=t.type||"unknown-event";t.currentTarget=a,oo(l,i,void 0,t),t.currentTarget=null}function Jf(t,i){i=(i&4)!==0;for(var a=0;a<t.length;a++){var l=t[a],f=l.event;l=l.listeners;e:{var p=void 0;if(i)for(var E=l.length-1;0<=E;E--){var D=l[E],F=D.instance,Q=D.currentTarget;if(D=D.listener,F!==p&&f.isPropagationStopped())break e;Qf(f,D,Q),p=F}else for(E=0;E<l.length;E++){if(D=l[E],F=D.instance,Q=D.currentTarget,D=D.listener,F!==p&&f.isPropagationStopped())break e;Qf(f,D,Q),p=F}}}if(Dr)throw t=Ki,Dr=!1,Ki=null,t}function It(t,i){var a=i[wc];a===void 0&&(a=i[wc]=new Set);var l=t+"__bubble";a.has(l)||(eh(i,t,2,!1),a.add(l))}function xc(t,i,a){var l=0;i&&(l|=4),eh(a,t,l,i)}var Eo="_reactListening"+Math.random().toString(36).slice(2);function Ea(t){if(!t[Eo]){t[Eo]=!0,s.forEach(function(a){a!=="selectionchange"&&(kv.has(a)||xc(a,!1,t),xc(a,!0,t))});var i=t.nodeType===9?t:t.ownerDocument;i===null||i[Eo]||(i[Eo]=!0,xc("selectionchange",!1,i))}}function eh(t,i,a,l){switch(Ef(i)){case 1:var f=Qg;break;case 4:f=Jg;break;default:f=tc}a=f.bind(null,i,a,t),f=void 0,!os||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),l?f!==void 0?t.addEventListener(i,a,{capture:!0,passive:f}):t.addEventListener(i,a,!0):f!==void 0?t.addEventListener(i,a,{passive:f}):t.addEventListener(i,a,!1)}function _c(t,i,a,l,f){var p=l;if((i&1)===0&&(i&2)===0&&l!==null)e:for(;;){if(l===null)return;var E=l.tag;if(E===3||E===4){var D=l.stateNode.containerInfo;if(D===f||D.nodeType===8&&D.parentNode===f)break;if(E===4)for(E=l.return;E!==null;){var F=E.tag;if((F===3||F===4)&&(F=E.stateNode.containerInfo,F===f||F.nodeType===8&&F.parentNode===f))return;E=E.return}for(;D!==null;){if(E=Ur(D),E===null)return;if(F=E.tag,F===5||F===6){l=p=E;continue e}D=D.parentNode}}l=l.return}Mn(function(){var Q=p,xe=V(a),ye=[];e:{var ge=Kf.get(t);if(ge!==void 0){var De=rc,ze=t;switch(t){case"keypress":if(vo(a)===0)break e;case"keydown":case"keyup":De=pv;break;case"focusin":ze="focus",De=oc;break;case"focusout":ze="blur",De=oc;break;case"beforeblur":case"afterblur":De=oc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":De=Af;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":De=nv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":De=vv;break;case Xf:case qf:case Yf:De=sv;break;case $f:De=_v;break;case"scroll":De=ev;break;case"wheel":De=Sv;break;case"copy":case"cut":case"paste":De=ov;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":De=Cf}var Ve=(i&4)!==0,Vt=!Ve&&t==="scroll",q=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var H=Q,Y;H!==null;){Y=H;var Te=Y.stateNode;if(Y.tag===5&&Te!==null&&(Y=Te,q!==null&&(Te=gn(H,q),Te!=null&&Ve.push(Ta(H,Te,Y)))),Vt)break;H=H.return}0<Ve.length&&(ge=new De(ge,ze,null,a,xe),ye.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=t==="mouseover"||t==="pointerover",De=t==="mouseout"||t==="pointerout",ge&&a!==Tt&&(ze=a.relatedTarget||a.fromElement)&&(Ur(ze)||ze[Ci]))break e;if((De||ge)&&(ge=xe.window===xe?xe:(ge=xe.ownerDocument)?ge.defaultView||ge.parentWindow:window,De?(ze=a.relatedTarget||a.toElement,De=Q,ze=ze?Ur(ze):null,ze!==null&&(Vt=pi(ze),ze!==Vt||ze.tag!==5&&ze.tag!==6)&&(ze=null)):(De=null,ze=Q),De!==ze)){if(Ve=Af,Te="onMouseLeave",q="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Ve=Cf,Te="onPointerLeave",q="onPointerEnter",H="pointer"),Vt=De==null?ge:gs(De),Y=ze==null?ge:gs(ze),ge=new Ve(Te,H+"leave",De,a,xe),ge.target=Vt,ge.relatedTarget=Y,Te=null,Ur(xe)===Q&&(Ve=new Ve(q,H+"enter",ze,a,xe),Ve.target=Y,Ve.relatedTarget=Vt,Te=Ve),Vt=Te,De&&ze)t:{for(Ve=De,q=ze,H=0,Y=Ve;Y;Y=ps(Y))H++;for(Y=0,Te=q;Te;Te=ps(Te))Y++;for(;0<H-Y;)Ve=ps(Ve),H--;for(;0<Y-H;)q=ps(q),Y--;for(;H--;){if(Ve===q||q!==null&&Ve===q.alternate)break t;Ve=ps(Ve),q=ps(q)}Ve=null}else Ve=null;De!==null&&th(ye,ge,De,Ve,!1),ze!==null&&Vt!==null&&th(ye,Vt,ze,Ve,!0)}}e:{if(ge=Q?gs(Q):window,De=ge.nodeName&&ge.nodeName.toLowerCase(),De==="select"||De==="input"&&ge.type==="file")var Xe=Cv;else if(Uf(ge))if(Ff)Xe=Lv;else{Xe=Pv;var Ke=Rv}else(De=ge.nodeName)&&De.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(Xe=Nv);if(Xe&&(Xe=Xe(t,Q))){If(ye,Xe,a,xe);break e}Ke&&Ke(t,ge,Q),t==="focusout"&&(Ke=ge._wrapperState)&&Ke.controlled&&ge.type==="number"&&wt(ge,"number",ge.value)}switch(Ke=Q?gs(Q):window,t){case"focusin":(Uf(Ke)||Ke.contentEditable==="true")&&(fs=Ke,hc=Q,Sa=null);break;case"focusout":Sa=hc=fs=null;break;case"mousedown":pc=!0;break;case"contextmenu":case"mouseup":case"dragend":pc=!1,jf(ye,a,xe);break;case"selectionchange":if(Iv)break;case"keydown":case"keyup":jf(ye,a,xe)}var Ze;if(cc)e:{switch(t){case"compositionstart":var nt="onCompositionStart";break e;case"compositionend":nt="onCompositionEnd";break e;case"compositionupdate":nt="onCompositionUpdate";break e}nt=void 0}else ds?Lf(t,a)&&(nt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(nt="onCompositionStart");nt&&(Rf&&a.locale!=="ko"&&(ds||nt!=="onCompositionStart"?nt==="onCompositionEnd"&&ds&&(Ze=Tf()):(tr=xe,ic="value"in tr?tr.value:tr.textContent,ds=!0)),Ke=To(Q,nt),0<Ke.length&&(nt=new bf(nt,t,null,a,xe),ye.push({event:nt,listeners:Ke}),Ze?nt.data=Ze:(Ze=Df(a),Ze!==null&&(nt.data=Ze)))),(Ze=Ev?Tv(t,a):wv(t,a))&&(Q=To(Q,"onBeforeInput"),0<Q.length&&(xe=new bf("onBeforeInput","beforeinput",null,a,xe),ye.push({event:xe,listeners:Q}),xe.data=Ze))}Jf(ye,i)})}function Ta(t,i,a){return{instance:t,listener:i,currentTarget:a}}function To(t,i){for(var a=i+"Capture",l=[];t!==null;){var f=t,p=f.stateNode;f.tag===5&&p!==null&&(f=p,p=gn(t,a),p!=null&&l.unshift(Ta(t,p,f)),p=gn(t,i),p!=null&&l.push(Ta(t,p,f))),t=t.return}return l}function ps(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function th(t,i,a,l,f){for(var p=i._reactName,E=[];a!==null&&a!==l;){var D=a,F=D.alternate,Q=D.stateNode;if(F!==null&&F===l)break;D.tag===5&&Q!==null&&(D=Q,f?(F=gn(a,p),F!=null&&E.unshift(Ta(a,F,D))):f||(F=gn(a,p),F!=null&&E.push(Ta(a,F,D)))),a=a.return}E.length!==0&&t.push({event:i,listeners:E})}var Bv=/\r\n?/g,zv=/\u0000|\uFFFD/g;function nh(t){return(typeof t=="string"?t:""+t).replace(Bv,`
`).replace(zv,"")}function wo(t,i,a){if(i=nh(i),nh(t)!==i&&a)throw Error(n(425))}function Ao(){}var yc=null,Sc=null;function Mc(t,i){return t==="textarea"||t==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ec=typeof setTimeout=="function"?setTimeout:void 0,Hv=typeof clearTimeout=="function"?clearTimeout:void 0,ih=typeof Promise=="function"?Promise:void 0,Vv=typeof queueMicrotask=="function"?queueMicrotask:typeof ih<"u"?function(t){return ih.resolve(null).then(t).catch(Gv)}:Ec;function Gv(t){setTimeout(function(){throw t})}function Tc(t,i){var a=i,l=0;do{var f=a.nextSibling;if(t.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(l===0){t.removeChild(f),pa(i);return}l--}else a!=="$"&&a!=="$?"&&a!=="$!"||l++;a=f}while(a);pa(i)}function ir(t){for(;t!=null;t=t.nextSibling){var i=t.nodeType;if(i===1||i===3)break;if(i===8){if(i=t.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return t}function rh(t){t=t.previousSibling;for(var i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return t;i--}else a==="/$"&&i++}t=t.previousSibling}return null}var ms=Math.random().toString(36).slice(2),gi="__reactFiber$"+ms,wa="__reactProps$"+ms,Ci="__reactContainer$"+ms,wc="__reactEvents$"+ms,jv="__reactListeners$"+ms,Wv="__reactHandles$"+ms;function Ur(t){var i=t[gi];if(i)return i;for(var a=t.parentNode;a;){if(i=a[Ci]||a[gi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(t=rh(t);t!==null;){if(a=t[gi])return a;t=rh(t)}return i}t=a,a=t.parentNode}return null}function Aa(t){return t=t[gi]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(n(33))}function bo(t){return t[wa]||null}var Ac=[],vs=-1;function rr(t){return{current:t}}function Ft(t){0>vs||(t.current=Ac[vs],Ac[vs]=null,vs--)}function Dt(t,i){vs++,Ac[vs]=t.current,t.current=i}var sr={},cn=rr(sr),Tn=rr(!1),Ir=sr;function xs(t,i){var a=t.type.contextTypes;if(!a)return sr;var l=t.stateNode;if(l&&l.__reactInternalMemoizedUnmaskedChildContext===i)return l.__reactInternalMemoizedMaskedChildContext;var f={},p;for(p in a)f[p]=i[p];return l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=f),f}function wn(t){return t=t.childContextTypes,t!=null}function Co(){Ft(Tn),Ft(cn)}function sh(t,i,a){if(cn.current!==sr)throw Error(n(168));Dt(cn,i),Dt(Tn,a)}function ah(t,i,a){var l=t.stateNode;if(i=i.childContextTypes,typeof l.getChildContext!="function")return a;l=l.getChildContext();for(var f in l)if(!(f in i))throw Error(n(108,_e(t)||"Unknown",f));return se({},a,l)}function Ro(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||sr,Ir=cn.current,Dt(cn,t),Dt(Tn,Tn.current),!0}function oh(t,i,a){var l=t.stateNode;if(!l)throw Error(n(169));a?(t=ah(t,i,Ir),l.__reactInternalMemoizedMergedChildContext=t,Ft(Tn),Ft(cn),Dt(cn,t)):Ft(Tn),Dt(Tn,a)}var Ri=null,Po=!1,bc=!1;function lh(t){Ri===null?Ri=[t]:Ri.push(t)}function Xv(t){Po=!0,lh(t)}function ar(){if(!bc&&Ri!==null){bc=!0;var t=0,i=At;try{var a=Ri;for(At=1;t<a.length;t++){var l=a[t];do l=l(!0);while(l!==null)}Ri=null,Po=!1}catch(f){throw Ri!==null&&(Ri=Ri.slice(t+1)),J(He,ar),f}finally{At=i,bc=!1}}return null}var _s=[],ys=0,No=null,Lo=0,Wn=[],Xn=0,Fr=null,Pi=1,Ni="";function Or(t,i){_s[ys++]=Lo,_s[ys++]=No,No=t,Lo=i}function ch(t,i,a){Wn[Xn++]=Pi,Wn[Xn++]=Ni,Wn[Xn++]=Fr,Fr=t;var l=Pi;t=Ni;var f=32-at(l)-1;l&=~(1<<f),a+=1;var p=32-at(i)+f;if(30<p){var E=f-f%5;p=(l&(1<<E)-1).toString(32),l>>=E,f-=E,Pi=1<<32-at(i)+f|a<<f|l,Ni=p+t}else Pi=1<<p|a<<f|l,Ni=t}function Cc(t){t.return!==null&&(Or(t,1),ch(t,1,0))}function Rc(t){for(;t===No;)No=_s[--ys],_s[ys]=null,Lo=_s[--ys],_s[ys]=null;for(;t===Fr;)Fr=Wn[--Xn],Wn[Xn]=null,Ni=Wn[--Xn],Wn[Xn]=null,Pi=Wn[--Xn],Wn[Xn]=null}var Fn=null,On=null,kt=!1,ni=null;function uh(t,i){var a=Kn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=t,i=t.deletions,i===null?(t.deletions=[a],t.flags|=16):i.push(a)}function dh(t,i){switch(t.tag){case 5:var a=t.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(t.stateNode=i,Fn=t,On=ir(i.firstChild),!0):!1;case 6:return i=t.pendingProps===""||i.nodeType!==3?null:i,i!==null?(t.stateNode=i,Fn=t,On=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Fr!==null?{id:Pi,overflow:Ni}:null,t.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Kn(18,null,null,0),a.stateNode=i,a.return=t,t.child=a,Fn=t,On=null,!0):!1;default:return!1}}function Pc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Nc(t){if(kt){var i=On;if(i){var a=i;if(!dh(t,i)){if(Pc(t))throw Error(n(418));i=ir(a.nextSibling);var l=Fn;i&&dh(t,i)?uh(l,a):(t.flags=t.flags&-4097|2,kt=!1,Fn=t)}}else{if(Pc(t))throw Error(n(418));t.flags=t.flags&-4097|2,kt=!1,Fn=t}}}function fh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Fn=t}function Do(t){if(t!==Fn)return!1;if(!kt)return fh(t),kt=!0,!1;var i;if((i=t.tag!==3)&&!(i=t.tag!==5)&&(i=t.type,i=i!=="head"&&i!=="body"&&!Mc(t.type,t.memoizedProps)),i&&(i=On)){if(Pc(t))throw hh(),Error(n(418));for(;i;)uh(t,i),i=ir(i.nextSibling)}if(fh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(n(317));e:{for(t=t.nextSibling,i=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"){if(i===0){On=ir(t.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}t=t.nextSibling}On=null}}else On=Fn?ir(t.stateNode.nextSibling):null;return!0}function hh(){for(var t=On;t;)t=ir(t.nextSibling)}function Ss(){On=Fn=null,kt=!1}function Lc(t){ni===null?ni=[t]:ni.push(t)}var qv=R.ReactCurrentBatchConfig;function ba(t,i,a){if(t=a.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(n(309));var l=a.stateNode}if(!l)throw Error(n(147,t));var f=l,p=""+t;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(E){var D=f.refs;E===null?delete D[p]:D[p]=E},i._stringRef=p,i)}if(typeof t!="string")throw Error(n(284));if(!a._owner)throw Error(n(290,t))}return t}function Uo(t,i){throw t=Object.prototype.toString.call(i),Error(n(31,t==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":t))}function ph(t){var i=t._init;return i(t._payload)}function mh(t){function i(q,H){if(t){var Y=q.deletions;Y===null?(q.deletions=[H],q.flags|=16):Y.push(H)}}function a(q,H){if(!t)return null;for(;H!==null;)i(q,H),H=H.sibling;return null}function l(q,H){for(q=new Map;H!==null;)H.key!==null?q.set(H.key,H):q.set(H.index,H),H=H.sibling;return q}function f(q,H){return q=pr(q,H),q.index=0,q.sibling=null,q}function p(q,H,Y){return q.index=Y,t?(Y=q.alternate,Y!==null?(Y=Y.index,Y<H?(q.flags|=2,H):Y):(q.flags|=2,H)):(q.flags|=1048576,H)}function E(q){return t&&q.alternate===null&&(q.flags|=2),q}function D(q,H,Y,Te){return H===null||H.tag!==6?(H=Eu(Y,q.mode,Te),H.return=q,H):(H=f(H,Y),H.return=q,H)}function F(q,H,Y,Te){var Xe=Y.type;return Xe===O?xe(q,H,Y.props.children,Te,Y.key):H!==null&&(H.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&ph(Xe)===H.type)?(Te=f(H,Y.props),Te.ref=ba(q,H,Y),Te.return=q,Te):(Te=rl(Y.type,Y.key,Y.props,null,q.mode,Te),Te.ref=ba(q,H,Y),Te.return=q,Te)}function Q(q,H,Y,Te){return H===null||H.tag!==4||H.stateNode.containerInfo!==Y.containerInfo||H.stateNode.implementation!==Y.implementation?(H=Tu(Y,q.mode,Te),H.return=q,H):(H=f(H,Y.children||[]),H.return=q,H)}function xe(q,H,Y,Te,Xe){return H===null||H.tag!==7?(H=Wr(Y,q.mode,Te,Xe),H.return=q,H):(H=f(H,Y),H.return=q,H)}function ye(q,H,Y){if(typeof H=="string"&&H!==""||typeof H=="number")return H=Eu(""+H,q.mode,Y),H.return=q,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case $:return Y=rl(H.type,H.key,H.props,null,q.mode,Y),Y.ref=ba(q,null,H),Y.return=q,Y;case B:return H=Tu(H,q.mode,Y),H.return=q,H;case ae:var Te=H._init;return ye(q,Te(H._payload),Y)}if(Ye(H)||le(H))return H=Wr(H,q.mode,Y,null),H.return=q,H;Uo(q,H)}return null}function ge(q,H,Y,Te){var Xe=H!==null?H.key:null;if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Xe!==null?null:D(q,H,""+Y,Te);if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case $:return Y.key===Xe?F(q,H,Y,Te):null;case B:return Y.key===Xe?Q(q,H,Y,Te):null;case ae:return Xe=Y._init,ge(q,H,Xe(Y._payload),Te)}if(Ye(Y)||le(Y))return Xe!==null?null:xe(q,H,Y,Te,null);Uo(q,Y)}return null}function De(q,H,Y,Te,Xe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return q=q.get(Y)||null,D(H,q,""+Te,Xe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case $:return q=q.get(Te.key===null?Y:Te.key)||null,F(H,q,Te,Xe);case B:return q=q.get(Te.key===null?Y:Te.key)||null,Q(H,q,Te,Xe);case ae:var Ke=Te._init;return De(q,H,Y,Ke(Te._payload),Xe)}if(Ye(Te)||le(Te))return q=q.get(Y)||null,xe(H,q,Te,Xe,null);Uo(H,Te)}return null}function ze(q,H,Y,Te){for(var Xe=null,Ke=null,Ze=H,nt=H=0,nn=null;Ze!==null&&nt<Y.length;nt++){Ze.index>nt?(nn=Ze,Ze=null):nn=Ze.sibling;var St=ge(q,Ze,Y[nt],Te);if(St===null){Ze===null&&(Ze=nn);break}t&&Ze&&St.alternate===null&&i(q,Ze),H=p(St,H,nt),Ke===null?Xe=St:Ke.sibling=St,Ke=St,Ze=nn}if(nt===Y.length)return a(q,Ze),kt&&Or(q,nt),Xe;if(Ze===null){for(;nt<Y.length;nt++)Ze=ye(q,Y[nt],Te),Ze!==null&&(H=p(Ze,H,nt),Ke===null?Xe=Ze:Ke.sibling=Ze,Ke=Ze);return kt&&Or(q,nt),Xe}for(Ze=l(q,Ze);nt<Y.length;nt++)nn=De(Ze,q,nt,Y[nt],Te),nn!==null&&(t&&nn.alternate!==null&&Ze.delete(nn.key===null?nt:nn.key),H=p(nn,H,nt),Ke===null?Xe=nn:Ke.sibling=nn,Ke=nn);return t&&Ze.forEach(function(mr){return i(q,mr)}),kt&&Or(q,nt),Xe}function Ve(q,H,Y,Te){var Xe=le(Y);if(typeof Xe!="function")throw Error(n(150));if(Y=Xe.call(Y),Y==null)throw Error(n(151));for(var Ke=Xe=null,Ze=H,nt=H=0,nn=null,St=Y.next();Ze!==null&&!St.done;nt++,St=Y.next()){Ze.index>nt?(nn=Ze,Ze=null):nn=Ze.sibling;var mr=ge(q,Ze,St.value,Te);if(mr===null){Ze===null&&(Ze=nn);break}t&&Ze&&mr.alternate===null&&i(q,Ze),H=p(mr,H,nt),Ke===null?Xe=mr:Ke.sibling=mr,Ke=mr,Ze=nn}if(St.done)return a(q,Ze),kt&&Or(q,nt),Xe;if(Ze===null){for(;!St.done;nt++,St=Y.next())St=ye(q,St.value,Te),St!==null&&(H=p(St,H,nt),Ke===null?Xe=St:Ke.sibling=St,Ke=St);return kt&&Or(q,nt),Xe}for(Ze=l(q,Ze);!St.done;nt++,St=Y.next())St=De(Ze,q,nt,St.value,Te),St!==null&&(t&&St.alternate!==null&&Ze.delete(St.key===null?nt:St.key),H=p(St,H,nt),Ke===null?Xe=St:Ke.sibling=St,Ke=St);return t&&Ze.forEach(function(A0){return i(q,A0)}),kt&&Or(q,nt),Xe}function Vt(q,H,Y,Te){if(typeof Y=="object"&&Y!==null&&Y.type===O&&Y.key===null&&(Y=Y.props.children),typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case $:e:{for(var Xe=Y.key,Ke=H;Ke!==null;){if(Ke.key===Xe){if(Xe=Y.type,Xe===O){if(Ke.tag===7){a(q,Ke.sibling),H=f(Ke,Y.props.children),H.return=q,q=H;break e}}else if(Ke.elementType===Xe||typeof Xe=="object"&&Xe!==null&&Xe.$$typeof===ae&&ph(Xe)===Ke.type){a(q,Ke.sibling),H=f(Ke,Y.props),H.ref=ba(q,Ke,Y),H.return=q,q=H;break e}a(q,Ke);break}else i(q,Ke);Ke=Ke.sibling}Y.type===O?(H=Wr(Y.props.children,q.mode,Te,Y.key),H.return=q,q=H):(Te=rl(Y.type,Y.key,Y.props,null,q.mode,Te),Te.ref=ba(q,H,Y),Te.return=q,q=Te)}return E(q);case B:e:{for(Ke=Y.key;H!==null;){if(H.key===Ke)if(H.tag===4&&H.stateNode.containerInfo===Y.containerInfo&&H.stateNode.implementation===Y.implementation){a(q,H.sibling),H=f(H,Y.children||[]),H.return=q,q=H;break e}else{a(q,H);break}else i(q,H);H=H.sibling}H=Tu(Y,q.mode,Te),H.return=q,q=H}return E(q);case ae:return Ke=Y._init,Vt(q,H,Ke(Y._payload),Te)}if(Ye(Y))return ze(q,H,Y,Te);if(le(Y))return Ve(q,H,Y,Te);Uo(q,Y)}return typeof Y=="string"&&Y!==""||typeof Y=="number"?(Y=""+Y,H!==null&&H.tag===6?(a(q,H.sibling),H=f(H,Y),H.return=q,q=H):(a(q,H),H=Eu(Y,q.mode,Te),H.return=q,q=H),E(q)):a(q,H)}return Vt}var Ms=mh(!0),gh=mh(!1),Io=rr(null),Fo=null,Es=null,Dc=null;function Uc(){Dc=Es=Fo=null}function Ic(t){var i=Io.current;Ft(Io),t._currentValue=i}function Fc(t,i,a){for(;t!==null;){var l=t.alternate;if((t.childLanes&i)!==i?(t.childLanes|=i,l!==null&&(l.childLanes|=i)):l!==null&&(l.childLanes&i)!==i&&(l.childLanes|=i),t===a)break;t=t.return}}function Ts(t,i){Fo=t,Dc=Es=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&i)!==0&&(An=!0),t.firstContext=null)}function qn(t){var i=t._currentValue;if(Dc!==t)if(t={context:t,memoizedValue:i,next:null},Es===null){if(Fo===null)throw Error(n(308));Es=t,Fo.dependencies={lanes:0,firstContext:t}}else Es=Es.next=t;return i}var kr=null;function Oc(t){kr===null?kr=[t]:kr.push(t)}function vh(t,i,a,l){var f=i.interleaved;return f===null?(a.next=a,Oc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Li(t,l)}function Li(t,i){t.lanes|=i;var a=t.alternate;for(a!==null&&(a.lanes|=i),a=t,t=t.return;t!==null;)t.childLanes|=i,a=t.alternate,a!==null&&(a.childLanes|=i),a=t,t=t.return;return a.tag===3?a.stateNode:null}var or=!1;function kc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function xh(t,i){t=t.updateQueue,i.updateQueue===t&&(i.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Di(t,i){return{eventTime:t,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(t,i,a){var l=t.updateQueue;if(l===null)return null;if(l=l.shared,(xt&2)!==0){var f=l.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),l.pending=i,Li(t,a)}return f=l.interleaved,f===null?(i.next=i,Oc(l)):(i.next=f.next,f.next=i),l.interleaved=i,Li(t,a)}function Oo(t,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ql(t,a)}}function _h(t,i){var a=t.updateQueue,l=t.alternate;if(l!==null&&(l=l.updateQueue,a===l)){var f=null,p=null;if(a=a.firstBaseUpdate,a!==null){do{var E={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};p===null?f=p=E:p=p.next=E,a=a.next}while(a!==null);p===null?f=p=i:p=p.next=i}else f=p=i;a={baseState:l.baseState,firstBaseUpdate:f,lastBaseUpdate:p,shared:l.shared,effects:l.effects},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=i:t.next=i,a.lastBaseUpdate=i}function ko(t,i,a,l){var f=t.updateQueue;or=!1;var p=f.firstBaseUpdate,E=f.lastBaseUpdate,D=f.shared.pending;if(D!==null){f.shared.pending=null;var F=D,Q=F.next;F.next=null,E===null?p=Q:E.next=Q,E=F;var xe=t.alternate;xe!==null&&(xe=xe.updateQueue,D=xe.lastBaseUpdate,D!==E&&(D===null?xe.firstBaseUpdate=Q:D.next=Q,xe.lastBaseUpdate=F))}if(p!==null){var ye=f.baseState;E=0,xe=Q=F=null,D=p;do{var ge=D.lane,De=D.eventTime;if((l&ge)===ge){xe!==null&&(xe=xe.next={eventTime:De,lane:0,tag:D.tag,payload:D.payload,callback:D.callback,next:null});e:{var ze=t,Ve=D;switch(ge=i,De=a,Ve.tag){case 1:if(ze=Ve.payload,typeof ze=="function"){ye=ze.call(De,ye,ge);break e}ye=ze;break e;case 3:ze.flags=ze.flags&-65537|128;case 0:if(ze=Ve.payload,ge=typeof ze=="function"?ze.call(De,ye,ge):ze,ge==null)break e;ye=se({},ye,ge);break e;case 2:or=!0}}D.callback!==null&&D.lane!==0&&(t.flags|=64,ge=f.effects,ge===null?f.effects=[D]:ge.push(D))}else De={eventTime:De,lane:ge,tag:D.tag,payload:D.payload,callback:D.callback,next:null},xe===null?(Q=xe=De,F=ye):xe=xe.next=De,E|=ge;if(D=D.next,D===null){if(D=f.shared.pending,D===null)break;ge=D,D=ge.next,ge.next=null,f.lastBaseUpdate=ge,f.shared.pending=null}}while(!0);if(xe===null&&(F=ye),f.baseState=F,f.firstBaseUpdate=Q,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do E|=f.lane,f=f.next;while(f!==i)}else p===null&&(f.shared.lanes=0);Hr|=E,t.lanes=E,t.memoizedState=ye}}function yh(t,i,a){if(t=i.effects,i.effects=null,t!==null)for(i=0;i<t.length;i++){var l=t[i],f=l.callback;if(f!==null){if(l.callback=null,l=a,typeof f!="function")throw Error(n(191,f));f.call(l)}}}var Ca={},vi=rr(Ca),Ra=rr(Ca),Pa=rr(Ca);function Br(t){if(t===Ca)throw Error(n(174));return t}function Bc(t,i){switch(Dt(Pa,i),Dt(Ra,t),Dt(vi,Ca),t=i.nodeType,t){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ge(null,"");break;default:t=t===8?i.parentNode:i,i=t.namespaceURI||null,t=t.tagName,i=Ge(i,t)}Ft(vi),Dt(vi,i)}function ws(){Ft(vi),Ft(Ra),Ft(Pa)}function Sh(t){Br(Pa.current);var i=Br(vi.current),a=Ge(i,t.type);i!==a&&(Dt(Ra,t),Dt(vi,a))}function zc(t){Ra.current===t&&(Ft(vi),Ft(Ra))}var Bt=rr(0);function Bo(t){for(var i=t;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Hc=[];function Vc(){for(var t=0;t<Hc.length;t++)Hc[t]._workInProgressVersionPrimary=null;Hc.length=0}var zo=R.ReactCurrentDispatcher,Gc=R.ReactCurrentBatchConfig,zr=0,zt=null,Kt=null,en=null,Ho=!1,Na=!1,La=0,Yv=0;function un(){throw Error(n(321))}function jc(t,i){if(i===null)return!1;for(var a=0;a<i.length&&a<t.length;a++)if(!ti(t[a],i[a]))return!1;return!0}function Wc(t,i,a,l,f,p){if(zr=p,zt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,zo.current=t===null||t.memoizedState===null?Qv:Jv,t=a(l,f),Na){p=0;do{if(Na=!1,La=0,25<=p)throw Error(n(301));p+=1,en=Kt=null,i.updateQueue=null,zo.current=e0,t=a(l,f)}while(Na)}if(zo.current=jo,i=Kt!==null&&Kt.next!==null,zr=0,en=Kt=zt=null,Ho=!1,i)throw Error(n(300));return t}function Xc(){var t=La!==0;return La=0,t}function xi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return en===null?zt.memoizedState=en=t:en=en.next=t,en}function Yn(){if(Kt===null){var t=zt.alternate;t=t!==null?t.memoizedState:null}else t=Kt.next;var i=en===null?zt.memoizedState:en.next;if(i!==null)en=i,Kt=t;else{if(t===null)throw Error(n(310));Kt=t,t={memoizedState:Kt.memoizedState,baseState:Kt.baseState,baseQueue:Kt.baseQueue,queue:Kt.queue,next:null},en===null?zt.memoizedState=en=t:en=en.next=t}return en}function Da(t,i){return typeof i=="function"?i(t):i}function qc(t){var i=Yn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=Kt,f=l.baseQueue,p=a.pending;if(p!==null){if(f!==null){var E=f.next;f.next=p.next,p.next=E}l.baseQueue=f=p,a.pending=null}if(f!==null){p=f.next,l=l.baseState;var D=E=null,F=null,Q=p;do{var xe=Q.lane;if((zr&xe)===xe)F!==null&&(F=F.next={lane:0,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null}),l=Q.hasEagerState?Q.eagerState:t(l,Q.action);else{var ye={lane:xe,action:Q.action,hasEagerState:Q.hasEagerState,eagerState:Q.eagerState,next:null};F===null?(D=F=ye,E=l):F=F.next=ye,zt.lanes|=xe,Hr|=xe}Q=Q.next}while(Q!==null&&Q!==p);F===null?E=l:F.next=D,ti(l,i.memoizedState)||(An=!0),i.memoizedState=l,i.baseState=E,i.baseQueue=F,a.lastRenderedState=l}if(t=a.interleaved,t!==null){f=t;do p=f.lane,zt.lanes|=p,Hr|=p,f=f.next;while(f!==t)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function Yc(t){var i=Yn(),a=i.queue;if(a===null)throw Error(n(311));a.lastRenderedReducer=t;var l=a.dispatch,f=a.pending,p=i.memoizedState;if(f!==null){a.pending=null;var E=f=f.next;do p=t(p,E.action),E=E.next;while(E!==f);ti(p,i.memoizedState)||(An=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),a.lastRenderedState=p}return[p,l]}function Mh(){}function Eh(t,i){var a=zt,l=Yn(),f=i(),p=!ti(l.memoizedState,f);if(p&&(l.memoizedState=f,An=!0),l=l.queue,$c(Ah.bind(null,a,l,t),[t]),l.getSnapshot!==i||p||en!==null&&en.memoizedState.tag&1){if(a.flags|=2048,Ua(9,wh.bind(null,a,l,f,i),void 0,null),tn===null)throw Error(n(349));(zr&30)!==0||Th(a,i,f)}return f}function Th(t,i,a){t.flags|=16384,t={getSnapshot:i,value:a},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.stores=[t]):(a=i.stores,a===null?i.stores=[t]:a.push(t))}function wh(t,i,a,l){i.value=a,i.getSnapshot=l,bh(i)&&Ch(t)}function Ah(t,i,a){return a(function(){bh(i)&&Ch(t)})}function bh(t){var i=t.getSnapshot;t=t.value;try{var a=i();return!ti(t,a)}catch{return!0}}function Ch(t){var i=Li(t,1);i!==null&&ai(i,t,1,-1)}function Rh(t){var i=xi();return typeof t=="function"&&(t=t()),i.memoizedState=i.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:t},i.queue=t,t=t.dispatch=Zv.bind(null,zt,t),[i.memoizedState,t]}function Ua(t,i,a,l){return t={tag:t,create:i,destroy:a,deps:l,next:null},i=zt.updateQueue,i===null?(i={lastEffect:null,stores:null},zt.updateQueue=i,i.lastEffect=t.next=t):(a=i.lastEffect,a===null?i.lastEffect=t.next=t:(l=a.next,a.next=t,t.next=l,i.lastEffect=t)),t}function Ph(){return Yn().memoizedState}function Vo(t,i,a,l){var f=xi();zt.flags|=t,f.memoizedState=Ua(1|i,a,void 0,l===void 0?null:l)}function Go(t,i,a,l){var f=Yn();l=l===void 0?null:l;var p=void 0;if(Kt!==null){var E=Kt.memoizedState;if(p=E.destroy,l!==null&&jc(l,E.deps)){f.memoizedState=Ua(i,a,p,l);return}}zt.flags|=t,f.memoizedState=Ua(1|i,a,p,l)}function Nh(t,i){return Vo(8390656,8,t,i)}function $c(t,i){return Go(2048,8,t,i)}function Lh(t,i){return Go(4,2,t,i)}function Dh(t,i){return Go(4,4,t,i)}function Uh(t,i){if(typeof i=="function")return t=t(),i(t),function(){i(null)};if(i!=null)return t=t(),i.current=t,function(){i.current=null}}function Ih(t,i,a){return a=a!=null?a.concat([t]):null,Go(4,4,Uh.bind(null,i,t),a)}function Kc(){}function Fh(t,i){var a=Yn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&jc(i,l[1])?l[0]:(a.memoizedState=[t,i],t)}function Oh(t,i){var a=Yn();i=i===void 0?null:i;var l=a.memoizedState;return l!==null&&i!==null&&jc(i,l[1])?l[0]:(t=t(),a.memoizedState=[t,i],t)}function kh(t,i,a){return(zr&21)===0?(t.baseState&&(t.baseState=!1,An=!0),t.memoizedState=a):(ti(a,i)||(a=vn(),zt.lanes|=a,Hr|=a,t.baseState=!0),i)}function $v(t,i){var a=At;At=a!==0&&4>a?a:4,t(!0);var l=Gc.transition;Gc.transition={};try{t(!1),i()}finally{At=a,Gc.transition=l}}function Bh(){return Yn().memoizedState}function Kv(t,i,a){var l=fr(t);if(a={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null},zh(t))Hh(i,a);else if(a=vh(t,i,a,l),a!==null){var f=_n();ai(a,t,l,f),Vh(a,i,l)}}function Zv(t,i,a){var l=fr(t),f={lane:l,action:a,hasEagerState:!1,eagerState:null,next:null};if(zh(t))Hh(i,f);else{var p=t.alternate;if(t.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var E=i.lastRenderedState,D=p(E,a);if(f.hasEagerState=!0,f.eagerState=D,ti(D,E)){var F=i.interleaved;F===null?(f.next=f,Oc(i)):(f.next=F.next,F.next=f),i.interleaved=f;return}}catch{}finally{}a=vh(t,i,f,l),a!==null&&(f=_n(),ai(a,t,l,f),Vh(a,i,l))}}function zh(t){var i=t.alternate;return t===zt||i!==null&&i===zt}function Hh(t,i){Na=Ho=!0;var a=t.pending;a===null?i.next=i:(i.next=a.next,a.next=i),t.pending=i}function Vh(t,i,a){if((a&4194240)!==0){var l=i.lanes;l&=t.pendingLanes,a|=l,i.lanes=a,Ql(t,a)}}var jo={readContext:qn,useCallback:un,useContext:un,useEffect:un,useImperativeHandle:un,useInsertionEffect:un,useLayoutEffect:un,useMemo:un,useReducer:un,useRef:un,useState:un,useDebugValue:un,useDeferredValue:un,useTransition:un,useMutableSource:un,useSyncExternalStore:un,useId:un,unstable_isNewReconciler:!1},Qv={readContext:qn,useCallback:function(t,i){return xi().memoizedState=[t,i===void 0?null:i],t},useContext:qn,useEffect:Nh,useImperativeHandle:function(t,i,a){return a=a!=null?a.concat([t]):null,Vo(4194308,4,Uh.bind(null,i,t),a)},useLayoutEffect:function(t,i){return Vo(4194308,4,t,i)},useInsertionEffect:function(t,i){return Vo(4,2,t,i)},useMemo:function(t,i){var a=xi();return i=i===void 0?null:i,t=t(),a.memoizedState=[t,i],t},useReducer:function(t,i,a){var l=xi();return i=a!==void 0?a(i):i,l.memoizedState=l.baseState=i,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:i},l.queue=t,t=t.dispatch=Kv.bind(null,zt,t),[l.memoizedState,t]},useRef:function(t){var i=xi();return t={current:t},i.memoizedState=t},useState:Rh,useDebugValue:Kc,useDeferredValue:function(t){return xi().memoizedState=t},useTransition:function(){var t=Rh(!1),i=t[0];return t=$v.bind(null,t[1]),xi().memoizedState=t,[i,t]},useMutableSource:function(){},useSyncExternalStore:function(t,i,a){var l=zt,f=xi();if(kt){if(a===void 0)throw Error(n(407));a=a()}else{if(a=i(),tn===null)throw Error(n(349));(zr&30)!==0||Th(l,i,a)}f.memoizedState=a;var p={value:a,getSnapshot:i};return f.queue=p,Nh(Ah.bind(null,l,p,t),[t]),l.flags|=2048,Ua(9,wh.bind(null,l,p,a,i),void 0,null),a},useId:function(){var t=xi(),i=tn.identifierPrefix;if(kt){var a=Ni,l=Pi;a=(l&~(1<<32-at(l)-1)).toString(32)+a,i=":"+i+"R"+a,a=La++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Yv++,i=":"+i+"r"+a.toString(32)+":";return t.memoizedState=i},unstable_isNewReconciler:!1},Jv={readContext:qn,useCallback:Fh,useContext:qn,useEffect:$c,useImperativeHandle:Ih,useInsertionEffect:Lh,useLayoutEffect:Dh,useMemo:Oh,useReducer:qc,useRef:Ph,useState:function(){return qc(Da)},useDebugValue:Kc,useDeferredValue:function(t){var i=Yn();return kh(i,Kt.memoizedState,t)},useTransition:function(){var t=qc(Da)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:Mh,useSyncExternalStore:Eh,useId:Bh,unstable_isNewReconciler:!1},e0={readContext:qn,useCallback:Fh,useContext:qn,useEffect:$c,useImperativeHandle:Ih,useInsertionEffect:Lh,useLayoutEffect:Dh,useMemo:Oh,useReducer:Yc,useRef:Ph,useState:function(){return Yc(Da)},useDebugValue:Kc,useDeferredValue:function(t){var i=Yn();return Kt===null?i.memoizedState=t:kh(i,Kt.memoizedState,t)},useTransition:function(){var t=Yc(Da)[0],i=Yn().memoizedState;return[t,i]},useMutableSource:Mh,useSyncExternalStore:Eh,useId:Bh,unstable_isNewReconciler:!1};function ii(t,i){if(t&&t.defaultProps){i=se({},i),t=t.defaultProps;for(var a in t)i[a]===void 0&&(i[a]=t[a]);return i}return i}function Zc(t,i,a,l){i=t.memoizedState,a=a(l,i),a=a==null?i:se({},i,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Wo={isMounted:function(t){return(t=t._reactInternals)?pi(t)===t:!1},enqueueSetState:function(t,i,a){t=t._reactInternals;var l=_n(),f=fr(t),p=Di(l,f);p.payload=i,a!=null&&(p.callback=a),i=lr(t,p,f),i!==null&&(ai(i,t,f,l),Oo(i,t,f))},enqueueReplaceState:function(t,i,a){t=t._reactInternals;var l=_n(),f=fr(t),p=Di(l,f);p.tag=1,p.payload=i,a!=null&&(p.callback=a),i=lr(t,p,f),i!==null&&(ai(i,t,f,l),Oo(i,t,f))},enqueueForceUpdate:function(t,i){t=t._reactInternals;var a=_n(),l=fr(t),f=Di(a,l);f.tag=2,i!=null&&(f.callback=i),i=lr(t,f,l),i!==null&&(ai(i,t,l,a),Oo(i,t,l))}};function Gh(t,i,a,l,f,p,E){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(l,p,E):i.prototype&&i.prototype.isPureReactComponent?!ya(a,l)||!ya(f,p):!0}function jh(t,i,a){var l=!1,f=sr,p=i.contextType;return typeof p=="object"&&p!==null?p=qn(p):(f=wn(i)?Ir:cn.current,l=i.contextTypes,p=(l=l!=null)?xs(t,f):sr),i=new i(a,p),t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Wo,t.stateNode=i,i._reactInternals=t,l&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=f,t.__reactInternalMemoizedMaskedChildContext=p),i}function Wh(t,i,a,l){t=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,l),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,l),i.state!==t&&Wo.enqueueReplaceState(i,i.state,null)}function Qc(t,i,a,l){var f=t.stateNode;f.props=a,f.state=t.memoizedState,f.refs={},kc(t);var p=i.contextType;typeof p=="object"&&p!==null?f.context=qn(p):(p=wn(i)?Ir:cn.current,f.context=xs(t,p)),f.state=t.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Zc(t,i,p,a),f.state=t.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Wo.enqueueReplaceState(f,f.state,null),ko(t,a,f,l),f.state=t.memoizedState),typeof f.componentDidMount=="function"&&(t.flags|=4194308)}function As(t,i){try{var a="",l=i;do a+=ue(l),l=l.return;while(l);var f=a}catch(p){f=`
Error generating stack: `+p.message+`
`+p.stack}return{value:t,source:i,stack:f,digest:null}}function Jc(t,i,a){return{value:t,source:null,stack:a??null,digest:i??null}}function eu(t,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var t0=typeof WeakMap=="function"?WeakMap:Map;function Xh(t,i,a){a=Di(-1,a),a.tag=3,a.payload={element:null};var l=i.value;return a.callback=function(){Qo||(Qo=!0,mu=l),eu(t,i)},a}function qh(t,i,a){a=Di(-1,a),a.tag=3;var l=t.type.getDerivedStateFromError;if(typeof l=="function"){var f=i.value;a.payload=function(){return l(f)},a.callback=function(){eu(t,i)}}var p=t.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(a.callback=function(){eu(t,i),typeof l!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var E=i.stack;this.componentDidCatch(i.value,{componentStack:E!==null?E:""})}),a}function Yh(t,i,a){var l=t.pingCache;if(l===null){l=t.pingCache=new t0;var f=new Set;l.set(i,f)}else f=l.get(i),f===void 0&&(f=new Set,l.set(i,f));f.has(a)||(f.add(a),t=m0.bind(null,t,i,a),i.then(t,t))}function $h(t){do{var i;if((i=t.tag===13)&&(i=t.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return t;t=t.return}while(t!==null);return null}function Kh(t,i,a,l,f){return(t.mode&1)===0?(t===i?t.flags|=65536:(t.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Di(-1,1),i.tag=2,lr(a,i,1))),a.lanes|=1),t):(t.flags|=65536,t.lanes=f,t)}var n0=R.ReactCurrentOwner,An=!1;function xn(t,i,a,l){i.child=t===null?gh(i,null,a,l):Ms(i,t.child,a,l)}function Zh(t,i,a,l,f){a=a.render;var p=i.ref;return Ts(i,f),l=Wc(t,i,a,l,p,f),a=Xc(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ui(t,i,f)):(kt&&a&&Cc(i),i.flags|=1,xn(t,i,l,f),i.child)}function Qh(t,i,a,l,f){if(t===null){var p=a.type;return typeof p=="function"&&!Mu(p)&&p.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=p,Jh(t,i,p,l,f)):(t=rl(a.type,null,l,i,i.mode,f),t.ref=i.ref,t.return=i,i.child=t)}if(p=t.child,(t.lanes&f)===0){var E=p.memoizedProps;if(a=a.compare,a=a!==null?a:ya,a(E,l)&&t.ref===i.ref)return Ui(t,i,f)}return i.flags|=1,t=pr(p,l),t.ref=i.ref,t.return=i,i.child=t}function Jh(t,i,a,l,f){if(t!==null){var p=t.memoizedProps;if(ya(p,l)&&t.ref===i.ref)if(An=!1,i.pendingProps=l=p,(t.lanes&f)!==0)(t.flags&131072)!==0&&(An=!0);else return i.lanes=t.lanes,Ui(t,i,f)}return tu(t,i,a,l,f)}function ep(t,i,a){var l=i.pendingProps,f=l.children,p=t!==null?t.memoizedState:null;if(l.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Dt(Cs,kn),kn|=a;else{if((a&1073741824)===0)return t=p!==null?p.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:t,cachePool:null,transitions:null},i.updateQueue=null,Dt(Cs,kn),kn|=t,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},l=p!==null?p.baseLanes:a,Dt(Cs,kn),kn|=l}else p!==null?(l=p.baseLanes|a,i.memoizedState=null):l=a,Dt(Cs,kn),kn|=l;return xn(t,i,f,a),i.child}function tp(t,i){var a=i.ref;(t===null&&a!==null||t!==null&&t.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function tu(t,i,a,l,f){var p=wn(a)?Ir:cn.current;return p=xs(i,p),Ts(i,f),a=Wc(t,i,a,l,p,f),l=Xc(),t!==null&&!An?(i.updateQueue=t.updateQueue,i.flags&=-2053,t.lanes&=~f,Ui(t,i,f)):(kt&&l&&Cc(i),i.flags|=1,xn(t,i,a,f),i.child)}function np(t,i,a,l,f){if(wn(a)){var p=!0;Ro(i)}else p=!1;if(Ts(i,f),i.stateNode===null)qo(t,i),jh(i,a,l),Qc(i,a,l,f),l=!0;else if(t===null){var E=i.stateNode,D=i.memoizedProps;E.props=D;var F=E.context,Q=a.contextType;typeof Q=="object"&&Q!==null?Q=qn(Q):(Q=wn(a)?Ir:cn.current,Q=xs(i,Q));var xe=a.getDerivedStateFromProps,ye=typeof xe=="function"||typeof E.getSnapshotBeforeUpdate=="function";ye||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==l||F!==Q)&&Wh(i,E,l,Q),or=!1;var ge=i.memoizedState;E.state=ge,ko(i,l,E,f),F=i.memoizedState,D!==l||ge!==F||Tn.current||or?(typeof xe=="function"&&(Zc(i,a,xe,l),F=i.memoizedState),(D=or||Gh(i,a,D,l,ge,F,Q))?(ye||typeof E.UNSAFE_componentWillMount!="function"&&typeof E.componentWillMount!="function"||(typeof E.componentWillMount=="function"&&E.componentWillMount(),typeof E.UNSAFE_componentWillMount=="function"&&E.UNSAFE_componentWillMount()),typeof E.componentDidMount=="function"&&(i.flags|=4194308)):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=l,i.memoizedState=F),E.props=l,E.state=F,E.context=Q,l=D):(typeof E.componentDidMount=="function"&&(i.flags|=4194308),l=!1)}else{E=i.stateNode,xh(t,i),D=i.memoizedProps,Q=i.type===i.elementType?D:ii(i.type,D),E.props=Q,ye=i.pendingProps,ge=E.context,F=a.contextType,typeof F=="object"&&F!==null?F=qn(F):(F=wn(a)?Ir:cn.current,F=xs(i,F));var De=a.getDerivedStateFromProps;(xe=typeof De=="function"||typeof E.getSnapshotBeforeUpdate=="function")||typeof E.UNSAFE_componentWillReceiveProps!="function"&&typeof E.componentWillReceiveProps!="function"||(D!==ye||ge!==F)&&Wh(i,E,l,F),or=!1,ge=i.memoizedState,E.state=ge,ko(i,l,E,f);var ze=i.memoizedState;D!==ye||ge!==ze||Tn.current||or?(typeof De=="function"&&(Zc(i,a,De,l),ze=i.memoizedState),(Q=or||Gh(i,a,Q,l,ge,ze,F)||!1)?(xe||typeof E.UNSAFE_componentWillUpdate!="function"&&typeof E.componentWillUpdate!="function"||(typeof E.componentWillUpdate=="function"&&E.componentWillUpdate(l,ze,F),typeof E.UNSAFE_componentWillUpdate=="function"&&E.UNSAFE_componentWillUpdate(l,ze,F)),typeof E.componentDidUpdate=="function"&&(i.flags|=4),typeof E.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),i.memoizedProps=l,i.memoizedState=ze),E.props=l,E.state=ze,E.context=F,l=Q):(typeof E.componentDidUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=4),typeof E.getSnapshotBeforeUpdate!="function"||D===t.memoizedProps&&ge===t.memoizedState||(i.flags|=1024),l=!1)}return nu(t,i,a,l,p,f)}function nu(t,i,a,l,f,p){tp(t,i);var E=(i.flags&128)!==0;if(!l&&!E)return f&&oh(i,a,!1),Ui(t,i,p);l=i.stateNode,n0.current=i;var D=E&&typeof a.getDerivedStateFromError!="function"?null:l.render();return i.flags|=1,t!==null&&E?(i.child=Ms(i,t.child,null,p),i.child=Ms(i,null,D,p)):xn(t,i,D,p),i.memoizedState=l.state,f&&oh(i,a,!0),i.child}function ip(t){var i=t.stateNode;i.pendingContext?sh(t,i.pendingContext,i.pendingContext!==i.context):i.context&&sh(t,i.context,!1),Bc(t,i.containerInfo)}function rp(t,i,a,l,f){return Ss(),Lc(f),i.flags|=256,xn(t,i,a,l),i.child}var iu={dehydrated:null,treeContext:null,retryLane:0};function ru(t){return{baseLanes:t,cachePool:null,transitions:null}}function sp(t,i,a){var l=i.pendingProps,f=Bt.current,p=!1,E=(i.flags&128)!==0,D;if((D=E)||(D=t!==null&&t.memoizedState===null?!1:(f&2)!==0),D?(p=!0,i.flags&=-129):(t===null||t.memoizedState!==null)&&(f|=1),Dt(Bt,f&1),t===null)return Nc(i),t=i.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?((i.mode&1)===0?i.lanes=1:t.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(E=l.children,t=l.fallback,p?(l=i.mode,p=i.child,E={mode:"hidden",children:E},(l&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=E):p=sl(E,l,0,null),t=Wr(t,l,a,null),p.return=i,t.return=i,p.sibling=t,i.child=p,i.child.memoizedState=ru(a),i.memoizedState=iu,t):su(i,E));if(f=t.memoizedState,f!==null&&(D=f.dehydrated,D!==null))return i0(t,i,E,l,D,f,a);if(p){p=l.fallback,E=i.mode,f=t.child,D=f.sibling;var F={mode:"hidden",children:l.children};return(E&1)===0&&i.child!==f?(l=i.child,l.childLanes=0,l.pendingProps=F,i.deletions=null):(l=pr(f,F),l.subtreeFlags=f.subtreeFlags&14680064),D!==null?p=pr(D,p):(p=Wr(p,E,a,null),p.flags|=2),p.return=i,l.return=i,l.sibling=p,i.child=l,l=p,p=i.child,E=t.child.memoizedState,E=E===null?ru(a):{baseLanes:E.baseLanes|a,cachePool:null,transitions:E.transitions},p.memoizedState=E,p.childLanes=t.childLanes&~a,i.memoizedState=iu,l}return p=t.child,t=p.sibling,l=pr(p,{mode:"visible",children:l.children}),(i.mode&1)===0&&(l.lanes=a),l.return=i,l.sibling=null,t!==null&&(a=i.deletions,a===null?(i.deletions=[t],i.flags|=16):a.push(t)),i.child=l,i.memoizedState=null,l}function su(t,i){return i=sl({mode:"visible",children:i},t.mode,0,null),i.return=t,t.child=i}function Xo(t,i,a,l){return l!==null&&Lc(l),Ms(i,t.child,null,a),t=su(i,i.pendingProps.children),t.flags|=2,i.memoizedState=null,t}function i0(t,i,a,l,f,p,E){if(a)return i.flags&256?(i.flags&=-257,l=Jc(Error(n(422))),Xo(t,i,E,l)):i.memoizedState!==null?(i.child=t.child,i.flags|=128,null):(p=l.fallback,f=i.mode,l=sl({mode:"visible",children:l.children},f,0,null),p=Wr(p,f,E,null),p.flags|=2,l.return=i,p.return=i,l.sibling=p,i.child=l,(i.mode&1)!==0&&Ms(i,t.child,null,E),i.child.memoizedState=ru(E),i.memoizedState=iu,p);if((i.mode&1)===0)return Xo(t,i,E,null);if(f.data==="$!"){if(l=f.nextSibling&&f.nextSibling.dataset,l)var D=l.dgst;return l=D,p=Error(n(419)),l=Jc(p,l,void 0),Xo(t,i,E,l)}if(D=(E&t.childLanes)!==0,An||D){if(l=tn,l!==null){switch(E&-E){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(l.suspendedLanes|E))!==0?0:f,f!==0&&f!==p.retryLane&&(p.retryLane=f,Li(t,f),ai(l,t,f,-1))}return Su(),l=Jc(Error(n(421))),Xo(t,i,E,l)}return f.data==="$?"?(i.flags|=128,i.child=t.child,i=g0.bind(null,t),f._reactRetry=i,null):(t=p.treeContext,On=ir(f.nextSibling),Fn=i,kt=!0,ni=null,t!==null&&(Wn[Xn++]=Pi,Wn[Xn++]=Ni,Wn[Xn++]=Fr,Pi=t.id,Ni=t.overflow,Fr=i),i=su(i,l.children),i.flags|=4096,i)}function ap(t,i,a){t.lanes|=i;var l=t.alternate;l!==null&&(l.lanes|=i),Fc(t.return,i,a)}function au(t,i,a,l,f){var p=t.memoizedState;p===null?t.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:l,tail:a,tailMode:f}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=l,p.tail=a,p.tailMode=f)}function op(t,i,a){var l=i.pendingProps,f=l.revealOrder,p=l.tail;if(xn(t,i,l.children,a),l=Bt.current,(l&2)!==0)l=l&1|2,i.flags|=128;else{if(t!==null&&(t.flags&128)!==0)e:for(t=i.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ap(t,a,i);else if(t.tag===19)ap(t,a,i);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===i)break e;for(;t.sibling===null;){if(t.return===null||t.return===i)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}l&=1}if(Dt(Bt,l),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)t=a.alternate,t!==null&&Bo(t)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),au(i,!1,f,a,p);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(t=f.alternate,t!==null&&Bo(t)===null){i.child=f;break}t=f.sibling,f.sibling=a,a=f,f=t}au(i,!0,a,null,p);break;case"together":au(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function qo(t,i){(i.mode&1)===0&&t!==null&&(t.alternate=null,i.alternate=null,i.flags|=2)}function Ui(t,i,a){if(t!==null&&(i.dependencies=t.dependencies),Hr|=i.lanes,(a&i.childLanes)===0)return null;if(t!==null&&i.child!==t.child)throw Error(n(153));if(i.child!==null){for(t=i.child,a=pr(t,t.pendingProps),i.child=a,a.return=i;t.sibling!==null;)t=t.sibling,a=a.sibling=pr(t,t.pendingProps),a.return=i;a.sibling=null}return i.child}function r0(t,i,a){switch(i.tag){case 3:ip(i),Ss();break;case 5:Sh(i);break;case 1:wn(i.type)&&Ro(i);break;case 4:Bc(i,i.stateNode.containerInfo);break;case 10:var l=i.type._context,f=i.memoizedProps.value;Dt(Io,l._currentValue),l._currentValue=f;break;case 13:if(l=i.memoizedState,l!==null)return l.dehydrated!==null?(Dt(Bt,Bt.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?sp(t,i,a):(Dt(Bt,Bt.current&1),t=Ui(t,i,a),t!==null?t.sibling:null);Dt(Bt,Bt.current&1);break;case 19:if(l=(a&i.childLanes)!==0,(t.flags&128)!==0){if(l)return op(t,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Dt(Bt,Bt.current),l)break;return null;case 22:case 23:return i.lanes=0,ep(t,i,a)}return Ui(t,i,a)}var lp,ou,cp,up;lp=function(t,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)t.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},ou=function(){},cp=function(t,i,a,l){var f=t.memoizedProps;if(f!==l){t=i.stateNode,Br(vi.current);var p=null;switch(a){case"input":f=W(t,f),l=W(t,l),p=[];break;case"select":f=se({},f,{value:void 0}),l=se({},l,{value:void 0}),p=[];break;case"textarea":f=T(t,f),l=T(t,l),p=[];break;default:typeof f.onClick!="function"&&typeof l.onClick=="function"&&(t.onclick=Ao)}dt(a,l);var E;a=null;for(Q in f)if(!l.hasOwnProperty(Q)&&f.hasOwnProperty(Q)&&f[Q]!=null)if(Q==="style"){var D=f[Q];for(E in D)D.hasOwnProperty(E)&&(a||(a={}),a[E]="")}else Q!=="dangerouslySetInnerHTML"&&Q!=="children"&&Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&Q!=="autoFocus"&&(o.hasOwnProperty(Q)?p||(p=[]):(p=p||[]).push(Q,null));for(Q in l){var F=l[Q];if(D=f!=null?f[Q]:void 0,l.hasOwnProperty(Q)&&F!==D&&(F!=null||D!=null))if(Q==="style")if(D){for(E in D)!D.hasOwnProperty(E)||F&&F.hasOwnProperty(E)||(a||(a={}),a[E]="");for(E in F)F.hasOwnProperty(E)&&D[E]!==F[E]&&(a||(a={}),a[E]=F[E])}else a||(p||(p=[]),p.push(Q,a)),a=F;else Q==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,D=D?D.__html:void 0,F!=null&&D!==F&&(p=p||[]).push(Q,F)):Q==="children"?typeof F!="string"&&typeof F!="number"||(p=p||[]).push(Q,""+F):Q!=="suppressContentEditableWarning"&&Q!=="suppressHydrationWarning"&&(o.hasOwnProperty(Q)?(F!=null&&Q==="onScroll"&&It("scroll",t),p||D===F||(p=[])):(p=p||[]).push(Q,F))}a&&(p=p||[]).push("style",a);var Q=p;(i.updateQueue=Q)&&(i.flags|=4)}},up=function(t,i,a,l){a!==l&&(i.flags|=4)};function Ia(t,i){if(!kt)switch(t.tailMode){case"hidden":i=t.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var l=null;a!==null;)a.alternate!==null&&(l=a),a=a.sibling;l===null?i||t.tail===null?t.tail=null:t.tail.sibling=null:l.sibling=null}}function dn(t){var i=t.alternate!==null&&t.alternate.child===t.child,a=0,l=0;if(i)for(var f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags&14680064,l|=f.flags&14680064,f.return=t,f=f.sibling;else for(f=t.child;f!==null;)a|=f.lanes|f.childLanes,l|=f.subtreeFlags,l|=f.flags,f.return=t,f=f.sibling;return t.subtreeFlags|=l,t.childLanes=a,i}function s0(t,i,a){var l=i.pendingProps;switch(Rc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return dn(i),null;case 1:return wn(i.type)&&Co(),dn(i),null;case 3:return l=i.stateNode,ws(),Ft(Tn),Ft(cn),Vc(),l.pendingContext&&(l.context=l.pendingContext,l.pendingContext=null),(t===null||t.child===null)&&(Do(i)?i.flags|=4:t===null||t.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ni!==null&&(xu(ni),ni=null))),ou(t,i),dn(i),null;case 5:zc(i);var f=Br(Pa.current);if(a=i.type,t!==null&&i.stateNode!=null)cp(t,i,a,l,f),t.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!l){if(i.stateNode===null)throw Error(n(166));return dn(i),null}if(t=Br(vi.current),Do(i)){l=i.stateNode,a=i.type;var p=i.memoizedProps;switch(l[gi]=i,l[wa]=p,t=(i.mode&1)!==0,a){case"dialog":It("cancel",l),It("close",l);break;case"iframe":case"object":case"embed":It("load",l);break;case"video":case"audio":for(f=0;f<Ma.length;f++)It(Ma[f],l);break;case"source":It("error",l);break;case"img":case"image":case"link":It("error",l),It("load",l);break;case"details":It("toggle",l);break;case"input":mn(l,p),It("invalid",l);break;case"select":l._wrapperState={wasMultiple:!!p.multiple},It("invalid",l);break;case"textarea":K(l,p),It("invalid",l)}dt(a,p),f=null;for(var E in p)if(p.hasOwnProperty(E)){var D=p[E];E==="children"?typeof D=="string"?l.textContent!==D&&(p.suppressHydrationWarning!==!0&&wo(l.textContent,D,t),f=["children",D]):typeof D=="number"&&l.textContent!==""+D&&(p.suppressHydrationWarning!==!0&&wo(l.textContent,D,t),f=["children",""+D]):o.hasOwnProperty(E)&&D!=null&&E==="onScroll"&&It("scroll",l)}switch(a){case"input":bt(l),$e(l,p,!0);break;case"textarea":bt(l),ve(l);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(l.onclick=Ao)}l=f,i.updateQueue=l,l!==null&&(i.flags|=4)}else{E=f.nodeType===9?f:f.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=de(a)),t==="http://www.w3.org/1999/xhtml"?a==="script"?(t=E.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof l.is=="string"?t=E.createElement(a,{is:l.is}):(t=E.createElement(a),a==="select"&&(E=t,l.multiple?E.multiple=!0:l.size&&(E.size=l.size))):t=E.createElementNS(t,a),t[gi]=i,t[wa]=l,lp(t,i,!1,!1),i.stateNode=t;e:{switch(E=rt(a,l),a){case"dialog":It("cancel",t),It("close",t),f=l;break;case"iframe":case"object":case"embed":It("load",t),f=l;break;case"video":case"audio":for(f=0;f<Ma.length;f++)It(Ma[f],t);f=l;break;case"source":It("error",t),f=l;break;case"img":case"image":case"link":It("error",t),It("load",t),f=l;break;case"details":It("toggle",t),f=l;break;case"input":mn(t,l),f=W(t,l),It("invalid",t);break;case"option":f=l;break;case"select":t._wrapperState={wasMultiple:!!l.multiple},f=se({},l,{value:void 0}),It("invalid",t);break;case"textarea":K(t,l),f=T(t,l),It("invalid",t);break;default:f=l}dt(a,f),D=f;for(p in D)if(D.hasOwnProperty(p)){var F=D[p];p==="style"?et(t,F):p==="dangerouslySetInnerHTML"?(F=F?F.__html:void 0,F!=null&&Fe(t,F)):p==="children"?typeof F=="string"?(a!=="textarea"||F!=="")&&ct(t,F):typeof F=="number"&&ct(t,""+F):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(o.hasOwnProperty(p)?F!=null&&p==="onScroll"&&It("scroll",t):F!=null&&L(t,p,F,E))}switch(a){case"input":bt(t),$e(t,l,!1);break;case"textarea":bt(t),ve(t);break;case"option":l.value!=null&&t.setAttribute("value",""+Ae(l.value));break;case"select":t.multiple=!!l.multiple,p=l.value,p!=null?N(t,!!l.multiple,p,!1):l.defaultValue!=null&&N(t,!!l.multiple,l.defaultValue,!0);break;default:typeof f.onClick=="function"&&(t.onclick=Ao)}switch(a){case"button":case"input":case"select":case"textarea":l=!!l.autoFocus;break e;case"img":l=!0;break e;default:l=!1}}l&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return dn(i),null;case 6:if(t&&i.stateNode!=null)up(t,i,t.memoizedProps,l);else{if(typeof l!="string"&&i.stateNode===null)throw Error(n(166));if(a=Br(Pa.current),Br(vi.current),Do(i)){if(l=i.stateNode,a=i.memoizedProps,l[gi]=i,(p=l.nodeValue!==a)&&(t=Fn,t!==null))switch(t.tag){case 3:wo(l.nodeValue,a,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&wo(l.nodeValue,a,(t.mode&1)!==0)}p&&(i.flags|=4)}else l=(a.nodeType===9?a:a.ownerDocument).createTextNode(l),l[gi]=i,i.stateNode=l}return dn(i),null;case 13:if(Ft(Bt),l=i.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(kt&&On!==null&&(i.mode&1)!==0&&(i.flags&128)===0)hh(),Ss(),i.flags|=98560,p=!1;else if(p=Do(i),l!==null&&l.dehydrated!==null){if(t===null){if(!p)throw Error(n(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(n(317));p[gi]=i}else Ss(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;dn(i),p=!1}else ni!==null&&(xu(ni),ni=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(l=l!==null,l!==(t!==null&&t.memoizedState!==null)&&l&&(i.child.flags|=8192,(i.mode&1)!==0&&(t===null||(Bt.current&1)!==0?Zt===0&&(Zt=3):Su())),i.updateQueue!==null&&(i.flags|=4),dn(i),null);case 4:return ws(),ou(t,i),t===null&&Ea(i.stateNode.containerInfo),dn(i),null;case 10:return Ic(i.type._context),dn(i),null;case 17:return wn(i.type)&&Co(),dn(i),null;case 19:if(Ft(Bt),p=i.memoizedState,p===null)return dn(i),null;if(l=(i.flags&128)!==0,E=p.rendering,E===null)if(l)Ia(p,!1);else{if(Zt!==0||t!==null&&(t.flags&128)!==0)for(t=i.child;t!==null;){if(E=Bo(t),E!==null){for(i.flags|=128,Ia(p,!1),l=E.updateQueue,l!==null&&(i.updateQueue=l,i.flags|=4),i.subtreeFlags=0,l=a,a=i.child;a!==null;)p=a,t=l,p.flags&=14680066,E=p.alternate,E===null?(p.childLanes=0,p.lanes=t,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=E.childLanes,p.lanes=E.lanes,p.child=E.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=E.memoizedProps,p.memoizedState=E.memoizedState,p.updateQueue=E.updateQueue,p.type=E.type,t=E.dependencies,p.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),a=a.sibling;return Dt(Bt,Bt.current&1|2),i.child}t=t.sibling}p.tail!==null&&Me()>Rs&&(i.flags|=128,l=!0,Ia(p,!1),i.lanes=4194304)}else{if(!l)if(t=Bo(E),t!==null){if(i.flags|=128,l=!0,a=t.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Ia(p,!0),p.tail===null&&p.tailMode==="hidden"&&!E.alternate&&!kt)return dn(i),null}else 2*Me()-p.renderingStartTime>Rs&&a!==1073741824&&(i.flags|=128,l=!0,Ia(p,!1),i.lanes=4194304);p.isBackwards?(E.sibling=i.child,i.child=E):(a=p.last,a!==null?a.sibling=E:i.child=E,p.last=E)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=Me(),i.sibling=null,a=Bt.current,Dt(Bt,l?a&1|2:a&1),i):(dn(i),null);case 22:case 23:return yu(),l=i.memoizedState!==null,t!==null&&t.memoizedState!==null!==l&&(i.flags|=8192),l&&(i.mode&1)!==0?(kn&1073741824)!==0&&(dn(i),i.subtreeFlags&6&&(i.flags|=8192)):dn(i),null;case 24:return null;case 25:return null}throw Error(n(156,i.tag))}function a0(t,i){switch(Rc(i),i.tag){case 1:return wn(i.type)&&Co(),t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 3:return ws(),Ft(Tn),Ft(cn),Vc(),t=i.flags,(t&65536)!==0&&(t&128)===0?(i.flags=t&-65537|128,i):null;case 5:return zc(i),null;case 13:if(Ft(Bt),t=i.memoizedState,t!==null&&t.dehydrated!==null){if(i.alternate===null)throw Error(n(340));Ss()}return t=i.flags,t&65536?(i.flags=t&-65537|128,i):null;case 19:return Ft(Bt),null;case 4:return ws(),null;case 10:return Ic(i.type._context),null;case 22:case 23:return yu(),null;case 24:return null;default:return null}}var Yo=!1,fn=!1,o0=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function bs(t,i){var a=t.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(l){Ht(t,i,l)}else a.current=null}function lu(t,i,a){try{a()}catch(l){Ht(t,i,l)}}var dp=!1;function l0(t,i){if(yc=po,t=Gf(),fc(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var l=a.getSelection&&a.getSelection();if(l&&l.rangeCount!==0){a=l.anchorNode;var f=l.anchorOffset,p=l.focusNode;l=l.focusOffset;try{a.nodeType,p.nodeType}catch{a=null;break e}var E=0,D=-1,F=-1,Q=0,xe=0,ye=t,ge=null;t:for(;;){for(var De;ye!==a||f!==0&&ye.nodeType!==3||(D=E+f),ye!==p||l!==0&&ye.nodeType!==3||(F=E+l),ye.nodeType===3&&(E+=ye.nodeValue.length),(De=ye.firstChild)!==null;)ge=ye,ye=De;for(;;){if(ye===t)break t;if(ge===a&&++Q===f&&(D=E),ge===p&&++xe===l&&(F=E),(De=ye.nextSibling)!==null)break;ye=ge,ge=ye.parentNode}ye=De}a=D===-1||F===-1?null:{start:D,end:F}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sc={focusedElem:t,selectionRange:a},po=!1,Oe=i;Oe!==null;)if(i=Oe,t=i.child,(i.subtreeFlags&1028)!==0&&t!==null)t.return=i,Oe=t;else for(;Oe!==null;){i=Oe;try{var ze=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(ze!==null){var Ve=ze.memoizedProps,Vt=ze.memoizedState,q=i.stateNode,H=q.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ii(i.type,Ve),Vt);q.__reactInternalSnapshotBeforeUpdate=H}break;case 3:var Y=i.stateNode.containerInfo;Y.nodeType===1?Y.textContent="":Y.nodeType===9&&Y.documentElement&&Y.removeChild(Y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(n(163))}}catch(Te){Ht(i,i.return,Te)}if(t=i.sibling,t!==null){t.return=i.return,Oe=t;break}Oe=i.return}return ze=dp,dp=!1,ze}function Fa(t,i,a){var l=i.updateQueue;if(l=l!==null?l.lastEffect:null,l!==null){var f=l=l.next;do{if((f.tag&t)===t){var p=f.destroy;f.destroy=void 0,p!==void 0&&lu(i,a,p)}f=f.next}while(f!==l)}}function $o(t,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&t)===t){var l=a.create;a.destroy=l()}a=a.next}while(a!==i)}}function cu(t){var i=t.ref;if(i!==null){var a=t.stateNode;switch(t.tag){case 5:t=a;break;default:t=a}typeof i=="function"?i(t):i.current=t}}function fp(t){var i=t.alternate;i!==null&&(t.alternate=null,fp(i)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(i=t.stateNode,i!==null&&(delete i[gi],delete i[wa],delete i[wc],delete i[jv],delete i[Wv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function hp(t){return t.tag===5||t.tag===3||t.tag===4}function pp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||hp(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function uu(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(t,i):a.insertBefore(t,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(t,a)):(i=a,i.appendChild(t)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Ao));else if(l!==4&&(t=t.child,t!==null))for(uu(t,i,a),t=t.sibling;t!==null;)uu(t,i,a),t=t.sibling}function du(t,i,a){var l=t.tag;if(l===5||l===6)t=t.stateNode,i?a.insertBefore(t,i):a.appendChild(t);else if(l!==4&&(t=t.child,t!==null))for(du(t,i,a),t=t.sibling;t!==null;)du(t,i,a),t=t.sibling}var sn=null,ri=!1;function cr(t,i,a){for(a=a.child;a!==null;)mp(t,i,a),a=a.sibling}function mp(t,i,a){if(mt&&typeof mt.onCommitFiberUnmount=="function")try{mt.onCommitFiberUnmount(Et,a)}catch{}switch(a.tag){case 5:fn||bs(a,i);case 6:var l=sn,f=ri;sn=null,cr(t,i,a),sn=l,ri=f,sn!==null&&(ri?(t=sn,a=a.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)):sn.removeChild(a.stateNode));break;case 18:sn!==null&&(ri?(t=sn,a=a.stateNode,t.nodeType===8?Tc(t.parentNode,a):t.nodeType===1&&Tc(t,a),pa(t)):Tc(sn,a.stateNode));break;case 4:l=sn,f=ri,sn=a.stateNode.containerInfo,ri=!0,cr(t,i,a),sn=l,ri=f;break;case 0:case 11:case 14:case 15:if(!fn&&(l=a.updateQueue,l!==null&&(l=l.lastEffect,l!==null))){f=l=l.next;do{var p=f,E=p.destroy;p=p.tag,E!==void 0&&((p&2)!==0||(p&4)!==0)&&lu(a,i,E),f=f.next}while(f!==l)}cr(t,i,a);break;case 1:if(!fn&&(bs(a,i),l=a.stateNode,typeof l.componentWillUnmount=="function"))try{l.props=a.memoizedProps,l.state=a.memoizedState,l.componentWillUnmount()}catch(D){Ht(a,i,D)}cr(t,i,a);break;case 21:cr(t,i,a);break;case 22:a.mode&1?(fn=(l=fn)||a.memoizedState!==null,cr(t,i,a),fn=l):cr(t,i,a);break;default:cr(t,i,a)}}function gp(t){var i=t.updateQueue;if(i!==null){t.updateQueue=null;var a=t.stateNode;a===null&&(a=t.stateNode=new o0),i.forEach(function(l){var f=v0.bind(null,t,l);a.has(l)||(a.add(l),l.then(f,f))})}}function si(t,i){var a=i.deletions;if(a!==null)for(var l=0;l<a.length;l++){var f=a[l];try{var p=t,E=i,D=E;e:for(;D!==null;){switch(D.tag){case 5:sn=D.stateNode,ri=!1;break e;case 3:sn=D.stateNode.containerInfo,ri=!0;break e;case 4:sn=D.stateNode.containerInfo,ri=!0;break e}D=D.return}if(sn===null)throw Error(n(160));mp(p,E,f),sn=null,ri=!1;var F=f.alternate;F!==null&&(F.return=null),f.return=null}catch(Q){Ht(f,i,Q)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)vp(i,t),i=i.sibling}function vp(t,i){var a=t.alternate,l=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(si(i,t),_i(t),l&4){try{Fa(3,t,t.return),$o(3,t)}catch(Ve){Ht(t,t.return,Ve)}try{Fa(5,t,t.return)}catch(Ve){Ht(t,t.return,Ve)}}break;case 1:si(i,t),_i(t),l&512&&a!==null&&bs(a,a.return);break;case 5:if(si(i,t),_i(t),l&512&&a!==null&&bs(a,a.return),t.flags&32){var f=t.stateNode;try{ct(f,"")}catch(Ve){Ht(t,t.return,Ve)}}if(l&4&&(f=t.stateNode,f!=null)){var p=t.memoizedProps,E=a!==null?a.memoizedProps:p,D=t.type,F=t.updateQueue;if(t.updateQueue=null,F!==null)try{D==="input"&&p.type==="radio"&&p.name!=null&&ht(f,p),rt(D,E);var Q=rt(D,p);for(E=0;E<F.length;E+=2){var xe=F[E],ye=F[E+1];xe==="style"?et(f,ye):xe==="dangerouslySetInnerHTML"?Fe(f,ye):xe==="children"?ct(f,ye):L(f,xe,ye,Q)}switch(D){case"input":ut(f,p);break;case"textarea":me(f,p);break;case"select":var ge=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!p.multiple;var De=p.value;De!=null?N(f,!!p.multiple,De,!1):ge!==!!p.multiple&&(p.defaultValue!=null?N(f,!!p.multiple,p.defaultValue,!0):N(f,!!p.multiple,p.multiple?[]:"",!1))}f[wa]=p}catch(Ve){Ht(t,t.return,Ve)}}break;case 6:if(si(i,t),_i(t),l&4){if(t.stateNode===null)throw Error(n(162));f=t.stateNode,p=t.memoizedProps;try{f.nodeValue=p}catch(Ve){Ht(t,t.return,Ve)}}break;case 3:if(si(i,t),_i(t),l&4&&a!==null&&a.memoizedState.isDehydrated)try{pa(i.containerInfo)}catch(Ve){Ht(t,t.return,Ve)}break;case 4:si(i,t),_i(t);break;case 13:si(i,t),_i(t),f=t.child,f.flags&8192&&(p=f.memoizedState!==null,f.stateNode.isHidden=p,!p||f.alternate!==null&&f.alternate.memoizedState!==null||(pu=Me())),l&4&&gp(t);break;case 22:if(xe=a!==null&&a.memoizedState!==null,t.mode&1?(fn=(Q=fn)||xe,si(i,t),fn=Q):si(i,t),_i(t),l&8192){if(Q=t.memoizedState!==null,(t.stateNode.isHidden=Q)&&!xe&&(t.mode&1)!==0)for(Oe=t,xe=t.child;xe!==null;){for(ye=Oe=xe;Oe!==null;){switch(ge=Oe,De=ge.child,ge.tag){case 0:case 11:case 14:case 15:Fa(4,ge,ge.return);break;case 1:bs(ge,ge.return);var ze=ge.stateNode;if(typeof ze.componentWillUnmount=="function"){l=ge,a=ge.return;try{i=l,ze.props=i.memoizedProps,ze.state=i.memoizedState,ze.componentWillUnmount()}catch(Ve){Ht(l,a,Ve)}}break;case 5:bs(ge,ge.return);break;case 22:if(ge.memoizedState!==null){yp(ye);continue}}De!==null?(De.return=ge,Oe=De):yp(ye)}xe=xe.sibling}e:for(xe=null,ye=t;;){if(ye.tag===5){if(xe===null){xe=ye;try{f=ye.stateNode,Q?(p=f.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(D=ye.stateNode,F=ye.memoizedProps.style,E=F!=null&&F.hasOwnProperty("display")?F.display:null,D.style.display=Je("display",E))}catch(Ve){Ht(t,t.return,Ve)}}}else if(ye.tag===6){if(xe===null)try{ye.stateNode.nodeValue=Q?"":ye.memoizedProps}catch(Ve){Ht(t,t.return,Ve)}}else if((ye.tag!==22&&ye.tag!==23||ye.memoizedState===null||ye===t)&&ye.child!==null){ye.child.return=ye,ye=ye.child;continue}if(ye===t)break e;for(;ye.sibling===null;){if(ye.return===null||ye.return===t)break e;xe===ye&&(xe=null),ye=ye.return}xe===ye&&(xe=null),ye.sibling.return=ye.return,ye=ye.sibling}}break;case 19:si(i,t),_i(t),l&4&&gp(t);break;case 21:break;default:si(i,t),_i(t)}}function _i(t){var i=t.flags;if(i&2){try{e:{for(var a=t.return;a!==null;){if(hp(a)){var l=a;break e}a=a.return}throw Error(n(160))}switch(l.tag){case 5:var f=l.stateNode;l.flags&32&&(ct(f,""),l.flags&=-33);var p=pp(t);du(t,p,f);break;case 3:case 4:var E=l.stateNode.containerInfo,D=pp(t);uu(t,D,E);break;default:throw Error(n(161))}}catch(F){Ht(t,t.return,F)}t.flags&=-3}i&4096&&(t.flags&=-4097)}function c0(t,i,a){Oe=t,xp(t)}function xp(t,i,a){for(var l=(t.mode&1)!==0;Oe!==null;){var f=Oe,p=f.child;if(f.tag===22&&l){var E=f.memoizedState!==null||Yo;if(!E){var D=f.alternate,F=D!==null&&D.memoizedState!==null||fn;D=Yo;var Q=fn;if(Yo=E,(fn=F)&&!Q)for(Oe=f;Oe!==null;)E=Oe,F=E.child,E.tag===22&&E.memoizedState!==null?Sp(f):F!==null?(F.return=E,Oe=F):Sp(f);for(;p!==null;)Oe=p,xp(p),p=p.sibling;Oe=f,Yo=D,fn=Q}_p(t)}else(f.subtreeFlags&8772)!==0&&p!==null?(p.return=f,Oe=p):_p(t)}}function _p(t){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:fn||$o(5,i);break;case 1:var l=i.stateNode;if(i.flags&4&&!fn)if(a===null)l.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ii(i.type,a.memoizedProps);l.componentDidUpdate(f,a.memoizedState,l.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&yh(i,p,l);break;case 3:var E=i.updateQueue;if(E!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}yh(i,E,a)}break;case 5:var D=i.stateNode;if(a===null&&i.flags&4){a=D;var F=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":F.autoFocus&&a.focus();break;case"img":F.src&&(a.src=F.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var Q=i.alternate;if(Q!==null){var xe=Q.memoizedState;if(xe!==null){var ye=xe.dehydrated;ye!==null&&pa(ye)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(n(163))}fn||i.flags&512&&cu(i)}catch(ge){Ht(i,i.return,ge)}}if(i===t){Oe=null;break}if(a=i.sibling,a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function yp(t){for(;Oe!==null;){var i=Oe;if(i===t){Oe=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Oe=a;break}Oe=i.return}}function Sp(t){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{$o(4,i)}catch(F){Ht(i,a,F)}break;case 1:var l=i.stateNode;if(typeof l.componentDidMount=="function"){var f=i.return;try{l.componentDidMount()}catch(F){Ht(i,f,F)}}var p=i.return;try{cu(i)}catch(F){Ht(i,p,F)}break;case 5:var E=i.return;try{cu(i)}catch(F){Ht(i,E,F)}}}catch(F){Ht(i,i.return,F)}if(i===t){Oe=null;break}var D=i.sibling;if(D!==null){D.return=i.return,Oe=D;break}Oe=i.return}}var u0=Math.ceil,Ko=R.ReactCurrentDispatcher,fu=R.ReactCurrentOwner,$n=R.ReactCurrentBatchConfig,xt=0,tn=null,jt=null,an=0,kn=0,Cs=rr(0),Zt=0,Oa=null,Hr=0,Zo=0,hu=0,ka=null,bn=null,pu=0,Rs=1/0,Ii=null,Qo=!1,mu=null,ur=null,Jo=!1,dr=null,el=0,Ba=0,gu=null,tl=-1,nl=0;function _n(){return(xt&6)!==0?Me():tl!==-1?tl:tl=Me()}function fr(t){return(t.mode&1)===0?1:(xt&2)!==0&&an!==0?an&-an:qv.transition!==null?(nl===0&&(nl=vn()),nl):(t=At,t!==0||(t=window.event,t=t===void 0?16:Ef(t.type)),t)}function ai(t,i,a,l){if(50<Ba)throw Ba=0,gu=null,Error(n(185));En(t,a,l),((xt&2)===0||t!==tn)&&(t===tn&&((xt&2)===0&&(Zo|=a),Zt===4&&hr(t,an)),Cn(t,l),a===1&&xt===0&&(i.mode&1)===0&&(Rs=Me()+500,Po&&ar()))}function Cn(t,i){var a=t.callbackNode;Gn(t,i);var l=mi(t,t===tn?an:0);if(l===0)a!==null&&ee(a),t.callbackNode=null,t.callbackPriority=0;else if(i=l&-l,t.callbackPriority!==i){if(a!=null&&ee(a),i===1)t.tag===0?Xv(Ep.bind(null,t)):lh(Ep.bind(null,t)),Vv(function(){(xt&6)===0&&ar()}),a=null;else{switch(mf(l)){case 1:a=He;break;case 4:a=tt;break;case 16:a=it;break;case 536870912:a=gt;break;default:a=it}a=Np(a,Mp.bind(null,t))}t.callbackPriority=i,t.callbackNode=a}}function Mp(t,i){if(tl=-1,nl=0,(xt&6)!==0)throw Error(n(327));var a=t.callbackNode;if(Ps()&&t.callbackNode!==a)return null;var l=mi(t,t===tn?an:0);if(l===0)return null;if((l&30)!==0||(l&t.expiredLanes)!==0||i)i=il(t,l);else{i=l;var f=xt;xt|=2;var p=wp();(tn!==t||an!==i)&&(Ii=null,Rs=Me()+500,Gr(t,i));do try{h0();break}catch(D){Tp(t,D)}while(!0);Uc(),Ko.current=p,xt=f,jt!==null?i=0:(tn=null,an=0,i=Zt)}if(i!==0){if(i===2&&(f=bi(t),f!==0&&(l=f,i=vu(t,f))),i===1)throw a=Oa,Gr(t,0),hr(t,l),Cn(t,Me()),a;if(i===6)hr(t,l);else{if(f=t.current.alternate,(l&30)===0&&!d0(f)&&(i=il(t,l),i===2&&(p=bi(t),p!==0&&(l=p,i=vu(t,p))),i===1))throw a=Oa,Gr(t,0),hr(t,l),Cn(t,Me()),a;switch(t.finishedWork=f,t.finishedLanes=l,i){case 0:case 1:throw Error(n(345));case 2:jr(t,bn,Ii);break;case 3:if(hr(t,l),(l&130023424)===l&&(i=pu+500-Me(),10<i)){if(mi(t,0)!==0)break;if(f=t.suspendedLanes,(f&l)!==l){_n(),t.pingedLanes|=t.suspendedLanes&f;break}t.timeoutHandle=Ec(jr.bind(null,t,bn,Ii),i);break}jr(t,bn,Ii);break;case 4:if(hr(t,l),(l&4194240)===l)break;for(i=t.eventTimes,f=-1;0<l;){var E=31-at(l);p=1<<E,E=i[E],E>f&&(f=E),l&=~p}if(l=f,l=Me()-l,l=(120>l?120:480>l?480:1080>l?1080:1920>l?1920:3e3>l?3e3:4320>l?4320:1960*u0(l/1960))-l,10<l){t.timeoutHandle=Ec(jr.bind(null,t,bn,Ii),l);break}jr(t,bn,Ii);break;case 5:jr(t,bn,Ii);break;default:throw Error(n(329))}}}return Cn(t,Me()),t.callbackNode===a?Mp.bind(null,t):null}function vu(t,i){var a=ka;return t.current.memoizedState.isDehydrated&&(Gr(t,i).flags|=256),t=il(t,i),t!==2&&(i=bn,bn=a,i!==null&&xu(i)),t}function xu(t){bn===null?bn=t:bn.push.apply(bn,t)}function d0(t){for(var i=t;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var l=0;l<a.length;l++){var f=a[l],p=f.getSnapshot;f=f.value;try{if(!ti(p(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===t)break;for(;i.sibling===null;){if(i.return===null||i.return===t)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(t,i){for(i&=~hu,i&=~Zo,t.suspendedLanes|=i,t.pingedLanes&=~i,t=t.expirationTimes;0<i;){var a=31-at(i),l=1<<a;t[a]=-1,i&=~l}}function Ep(t){if((xt&6)!==0)throw Error(n(327));Ps();var i=mi(t,0);if((i&1)===0)return Cn(t,Me()),null;var a=il(t,i);if(t.tag!==0&&a===2){var l=bi(t);l!==0&&(i=l,a=vu(t,l))}if(a===1)throw a=Oa,Gr(t,0),hr(t,i),Cn(t,Me()),a;if(a===6)throw Error(n(345));return t.finishedWork=t.current.alternate,t.finishedLanes=i,jr(t,bn,Ii),Cn(t,Me()),null}function _u(t,i){var a=xt;xt|=1;try{return t(i)}finally{xt=a,xt===0&&(Rs=Me()+500,Po&&ar())}}function Vr(t){dr!==null&&dr.tag===0&&(xt&6)===0&&Ps();var i=xt;xt|=1;var a=$n.transition,l=At;try{if($n.transition=null,At=1,t)return t()}finally{At=l,$n.transition=a,xt=i,(xt&6)===0&&ar()}}function yu(){kn=Cs.current,Ft(Cs)}function Gr(t,i){t.finishedWork=null,t.finishedLanes=0;var a=t.timeoutHandle;if(a!==-1&&(t.timeoutHandle=-1,Hv(a)),jt!==null)for(a=jt.return;a!==null;){var l=a;switch(Rc(l),l.tag){case 1:l=l.type.childContextTypes,l!=null&&Co();break;case 3:ws(),Ft(Tn),Ft(cn),Vc();break;case 5:zc(l);break;case 4:ws();break;case 13:Ft(Bt);break;case 19:Ft(Bt);break;case 10:Ic(l.type._context);break;case 22:case 23:yu()}a=a.return}if(tn=t,jt=t=pr(t.current,null),an=kn=i,Zt=0,Oa=null,hu=Zo=Hr=0,bn=ka=null,kr!==null){for(i=0;i<kr.length;i++)if(a=kr[i],l=a.interleaved,l!==null){a.interleaved=null;var f=l.next,p=a.pending;if(p!==null){var E=p.next;p.next=f,l.next=E}a.pending=l}kr=null}return t}function Tp(t,i){do{var a=jt;try{if(Uc(),zo.current=jo,Ho){for(var l=zt.memoizedState;l!==null;){var f=l.queue;f!==null&&(f.pending=null),l=l.next}Ho=!1}if(zr=0,en=Kt=zt=null,Na=!1,La=0,fu.current=null,a===null||a.return===null){Zt=1,Oa=i,jt=null;break}e:{var p=t,E=a.return,D=a,F=i;if(i=an,D.flags|=32768,F!==null&&typeof F=="object"&&typeof F.then=="function"){var Q=F,xe=D,ye=xe.tag;if((xe.mode&1)===0&&(ye===0||ye===11||ye===15)){var ge=xe.alternate;ge?(xe.updateQueue=ge.updateQueue,xe.memoizedState=ge.memoizedState,xe.lanes=ge.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var De=$h(E);if(De!==null){De.flags&=-257,Kh(De,E,D,p,i),De.mode&1&&Yh(p,Q,i),i=De,F=Q;var ze=i.updateQueue;if(ze===null){var Ve=new Set;Ve.add(F),i.updateQueue=Ve}else ze.add(F);break e}else{if((i&1)===0){Yh(p,Q,i),Su();break e}F=Error(n(426))}}else if(kt&&D.mode&1){var Vt=$h(E);if(Vt!==null){(Vt.flags&65536)===0&&(Vt.flags|=256),Kh(Vt,E,D,p,i),Lc(As(F,D));break e}}p=F=As(F,D),Zt!==4&&(Zt=2),ka===null?ka=[p]:ka.push(p),p=E;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var q=Xh(p,F,i);_h(p,q);break e;case 1:D=F;var H=p.type,Y=p.stateNode;if((p.flags&128)===0&&(typeof H.getDerivedStateFromError=="function"||Y!==null&&typeof Y.componentDidCatch=="function"&&(ur===null||!ur.has(Y)))){p.flags|=65536,i&=-i,p.lanes|=i;var Te=qh(p,D,i);_h(p,Te);break e}}p=p.return}while(p!==null)}bp(a)}catch(Xe){i=Xe,jt===a&&a!==null&&(jt=a=a.return);continue}break}while(!0)}function wp(){var t=Ko.current;return Ko.current=jo,t===null?jo:t}function Su(){(Zt===0||Zt===3||Zt===2)&&(Zt=4),tn===null||(Hr&268435455)===0&&(Zo&268435455)===0||hr(tn,an)}function il(t,i){var a=xt;xt|=2;var l=wp();(tn!==t||an!==i)&&(Ii=null,Gr(t,i));do try{f0();break}catch(f){Tp(t,f)}while(!0);if(Uc(),xt=a,Ko.current=l,jt!==null)throw Error(n(261));return tn=null,an=0,Zt}function f0(){for(;jt!==null;)Ap(jt)}function h0(){for(;jt!==null&&!j();)Ap(jt)}function Ap(t){var i=Pp(t.alternate,t,kn);t.memoizedProps=t.pendingProps,i===null?bp(t):jt=i,fu.current=null}function bp(t){var i=t;do{var a=i.alternate;if(t=i.return,(i.flags&32768)===0){if(a=s0(a,i,kn),a!==null){jt=a;return}}else{if(a=a0(a,i),a!==null){a.flags&=32767,jt=a;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Zt=6,jt=null;return}}if(i=i.sibling,i!==null){jt=i;return}jt=i=t}while(i!==null);Zt===0&&(Zt=5)}function jr(t,i,a){var l=At,f=$n.transition;try{$n.transition=null,At=1,p0(t,i,a,l)}finally{$n.transition=f,At=l}return null}function p0(t,i,a,l){do Ps();while(dr!==null);if((xt&6)!==0)throw Error(n(327));a=t.finishedWork;var f=t.finishedLanes;if(a===null)return null;if(t.finishedWork=null,t.finishedLanes=0,a===t.current)throw Error(n(177));t.callbackNode=null,t.callbackPriority=0;var p=a.lanes|a.childLanes;if(uo(t,p),t===tn&&(jt=tn=null,an=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||Jo||(Jo=!0,Np(it,function(){return Ps(),null})),p=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||p){p=$n.transition,$n.transition=null;var E=At;At=1;var D=xt;xt|=4,fu.current=null,l0(t,a),vp(a,t),Uv(Sc),po=!!yc,Sc=yc=null,t.current=a,c0(a),we(),xt=D,At=E,$n.transition=p}else t.current=a;if(Jo&&(Jo=!1,dr=t,el=f),p=t.pendingLanes,p===0&&(ur=null),on(a.stateNode),Cn(t,Me()),i!==null)for(l=t.onRecoverableError,a=0;a<i.length;a++)f=i[a],l(f.value,{componentStack:f.stack,digest:f.digest});if(Qo)throw Qo=!1,t=mu,mu=null,t;return(el&1)!==0&&t.tag!==0&&Ps(),p=t.pendingLanes,(p&1)!==0?t===gu?Ba++:(Ba=0,gu=t):Ba=0,ar(),null}function Ps(){if(dr!==null){var t=mf(el),i=$n.transition,a=At;try{if($n.transition=null,At=16>t?16:t,dr===null)var l=!1;else{if(t=dr,dr=null,el=0,(xt&6)!==0)throw Error(n(331));var f=xt;for(xt|=4,Oe=t.current;Oe!==null;){var p=Oe,E=p.child;if((Oe.flags&16)!==0){var D=p.deletions;if(D!==null){for(var F=0;F<D.length;F++){var Q=D[F];for(Oe=Q;Oe!==null;){var xe=Oe;switch(xe.tag){case 0:case 11:case 15:Fa(8,xe,p)}var ye=xe.child;if(ye!==null)ye.return=xe,Oe=ye;else for(;Oe!==null;){xe=Oe;var ge=xe.sibling,De=xe.return;if(fp(xe),xe===Q){Oe=null;break}if(ge!==null){ge.return=De,Oe=ge;break}Oe=De}}}var ze=p.alternate;if(ze!==null){var Ve=ze.child;if(Ve!==null){ze.child=null;do{var Vt=Ve.sibling;Ve.sibling=null,Ve=Vt}while(Ve!==null)}}Oe=p}}if((p.subtreeFlags&2064)!==0&&E!==null)E.return=p,Oe=E;else e:for(;Oe!==null;){if(p=Oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:Fa(9,p,p.return)}var q=p.sibling;if(q!==null){q.return=p.return,Oe=q;break e}Oe=p.return}}var H=t.current;for(Oe=H;Oe!==null;){E=Oe;var Y=E.child;if((E.subtreeFlags&2064)!==0&&Y!==null)Y.return=E,Oe=Y;else e:for(E=H;Oe!==null;){if(D=Oe,(D.flags&2048)!==0)try{switch(D.tag){case 0:case 11:case 15:$o(9,D)}}catch(Xe){Ht(D,D.return,Xe)}if(D===E){Oe=null;break e}var Te=D.sibling;if(Te!==null){Te.return=D.return,Oe=Te;break e}Oe=D.return}}if(xt=f,ar(),mt&&typeof mt.onPostCommitFiberRoot=="function")try{mt.onPostCommitFiberRoot(Et,t)}catch{}l=!0}return l}finally{At=a,$n.transition=i}}return!1}function Cp(t,i,a){i=As(a,i),i=Xh(t,i,1),t=lr(t,i,1),i=_n(),t!==null&&(En(t,1,i),Cn(t,i))}function Ht(t,i,a){if(t.tag===3)Cp(t,t,a);else for(;i!==null;){if(i.tag===3){Cp(i,t,a);break}else if(i.tag===1){var l=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof l.componentDidCatch=="function"&&(ur===null||!ur.has(l))){t=As(a,t),t=qh(i,t,1),i=lr(i,t,1),t=_n(),i!==null&&(En(i,1,t),Cn(i,t));break}}i=i.return}}function m0(t,i,a){var l=t.pingCache;l!==null&&l.delete(i),i=_n(),t.pingedLanes|=t.suspendedLanes&a,tn===t&&(an&a)===a&&(Zt===4||Zt===3&&(an&130023424)===an&&500>Me()-pu?Gr(t,0):hu|=a),Cn(t,i)}function Rp(t,i){i===0&&((t.mode&1)===0?i=1:(i=ei,ei<<=1,(ei&130023424)===0&&(ei=4194304)));var a=_n();t=Li(t,i),t!==null&&(En(t,i,a),Cn(t,a))}function g0(t){var i=t.memoizedState,a=0;i!==null&&(a=i.retryLane),Rp(t,a)}function v0(t,i){var a=0;switch(t.tag){case 13:var l=t.stateNode,f=t.memoizedState;f!==null&&(a=f.retryLane);break;case 19:l=t.stateNode;break;default:throw Error(n(314))}l!==null&&l.delete(i),Rp(t,a)}var Pp;Pp=function(t,i,a){if(t!==null)if(t.memoizedProps!==i.pendingProps||Tn.current)An=!0;else{if((t.lanes&a)===0&&(i.flags&128)===0)return An=!1,r0(t,i,a);An=(t.flags&131072)!==0}else An=!1,kt&&(i.flags&1048576)!==0&&ch(i,Lo,i.index);switch(i.lanes=0,i.tag){case 2:var l=i.type;qo(t,i),t=i.pendingProps;var f=xs(i,cn.current);Ts(i,a),f=Wc(null,i,l,t,f,a);var p=Xc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,wn(l)?(p=!0,Ro(i)):p=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,kc(i),f.updater=Wo,i.stateNode=f,f._reactInternals=i,Qc(i,l,t,a),i=nu(null,i,l,!0,p,a)):(i.tag=0,kt&&p&&Cc(i),xn(null,i,f,a),i=i.child),i;case 16:l=i.elementType;e:{switch(qo(t,i),t=i.pendingProps,f=l._init,l=f(l._payload),i.type=l,f=i.tag=_0(l),t=ii(l,t),f){case 0:i=tu(null,i,l,t,a);break e;case 1:i=np(null,i,l,t,a);break e;case 11:i=Zh(null,i,l,t,a);break e;case 14:i=Qh(null,i,l,ii(l.type,t),a);break e}throw Error(n(306,l,""))}return i;case 0:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ii(l,f),tu(t,i,l,f,a);case 1:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ii(l,f),np(t,i,l,f,a);case 3:e:{if(ip(i),t===null)throw Error(n(387));l=i.pendingProps,p=i.memoizedState,f=p.element,xh(t,i),ko(i,l,null,a);var E=i.memoizedState;if(l=E.element,p.isDehydrated)if(p={element:l,isDehydrated:!1,cache:E.cache,pendingSuspenseBoundaries:E.pendingSuspenseBoundaries,transitions:E.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){f=As(Error(n(423)),i),i=rp(t,i,l,a,f);break e}else if(l!==f){f=As(Error(n(424)),i),i=rp(t,i,l,a,f);break e}else for(On=ir(i.stateNode.containerInfo.firstChild),Fn=i,kt=!0,ni=null,a=gh(i,null,l,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ss(),l===f){i=Ui(t,i,a);break e}xn(t,i,l,a)}i=i.child}return i;case 5:return Sh(i),t===null&&Nc(i),l=i.type,f=i.pendingProps,p=t!==null?t.memoizedProps:null,E=f.children,Mc(l,f)?E=null:p!==null&&Mc(l,p)&&(i.flags|=32),tp(t,i),xn(t,i,E,a),i.child;case 6:return t===null&&Nc(i),null;case 13:return sp(t,i,a);case 4:return Bc(i,i.stateNode.containerInfo),l=i.pendingProps,t===null?i.child=Ms(i,null,l,a):xn(t,i,l,a),i.child;case 11:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ii(l,f),Zh(t,i,l,f,a);case 7:return xn(t,i,i.pendingProps,a),i.child;case 8:return xn(t,i,i.pendingProps.children,a),i.child;case 12:return xn(t,i,i.pendingProps.children,a),i.child;case 10:e:{if(l=i.type._context,f=i.pendingProps,p=i.memoizedProps,E=f.value,Dt(Io,l._currentValue),l._currentValue=E,p!==null)if(ti(p.value,E)){if(p.children===f.children&&!Tn.current){i=Ui(t,i,a);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var D=p.dependencies;if(D!==null){E=p.child;for(var F=D.firstContext;F!==null;){if(F.context===l){if(p.tag===1){F=Di(-1,a&-a),F.tag=2;var Q=p.updateQueue;if(Q!==null){Q=Q.shared;var xe=Q.pending;xe===null?F.next=F:(F.next=xe.next,xe.next=F),Q.pending=F}}p.lanes|=a,F=p.alternate,F!==null&&(F.lanes|=a),Fc(p.return,a,i),D.lanes|=a;break}F=F.next}}else if(p.tag===10)E=p.type===i.type?null:p.child;else if(p.tag===18){if(E=p.return,E===null)throw Error(n(341));E.lanes|=a,D=E.alternate,D!==null&&(D.lanes|=a),Fc(E,a,i),E=p.sibling}else E=p.child;if(E!==null)E.return=p;else for(E=p;E!==null;){if(E===i){E=null;break}if(p=E.sibling,p!==null){p.return=E.return,E=p;break}E=E.return}p=E}xn(t,i,f.children,a),i=i.child}return i;case 9:return f=i.type,l=i.pendingProps.children,Ts(i,a),f=qn(f),l=l(f),i.flags|=1,xn(t,i,l,a),i.child;case 14:return l=i.type,f=ii(l,i.pendingProps),f=ii(l.type,f),Qh(t,i,l,f,a);case 15:return Jh(t,i,i.type,i.pendingProps,a);case 17:return l=i.type,f=i.pendingProps,f=i.elementType===l?f:ii(l,f),qo(t,i),i.tag=1,wn(l)?(t=!0,Ro(i)):t=!1,Ts(i,a),jh(i,l,f),Qc(i,l,f,a),nu(null,i,l,!0,t,a);case 19:return op(t,i,a);case 22:return ep(t,i,a)}throw Error(n(156,i.tag))};function Np(t,i){return J(t,i)}function x0(t,i,a,l){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=l,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,i,a,l){return new x0(t,i,a,l)}function Mu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _0(t){if(typeof t=="function")return Mu(t)?1:0;if(t!=null){if(t=t.$$typeof,t===oe)return 11;if(t===pe)return 14}return 2}function pr(t,i){var a=t.alternate;return a===null?(a=Kn(t.tag,i,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=i,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&14680064,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,i=t.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a}function rl(t,i,a,l,f,p){var E=2;if(l=t,typeof t=="function")Mu(t)&&(E=1);else if(typeof t=="string")E=5;else e:switch(t){case O:return Wr(a.children,f,p,i);case X:E=8,f|=8;break;case P:return t=Kn(12,a,i,f|2),t.elementType=P,t.lanes=p,t;case te:return t=Kn(13,a,i,f),t.elementType=te,t.lanes=p,t;case fe:return t=Kn(19,a,i,f),t.elementType=fe,t.lanes=p,t;case ce:return sl(a,f,p,i);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case C:E=10;break e;case z:E=9;break e;case oe:E=11;break e;case pe:E=14;break e;case ae:E=16,l=null;break e}throw Error(n(130,t==null?t:typeof t,""))}return i=Kn(E,a,i,f),i.elementType=t,i.type=l,i.lanes=p,i}function Wr(t,i,a,l){return t=Kn(7,t,l,i),t.lanes=a,t}function sl(t,i,a,l){return t=Kn(22,t,l,i),t.elementType=ce,t.lanes=a,t.stateNode={isHidden:!1},t}function Eu(t,i,a){return t=Kn(6,t,null,i),t.lanes=a,t}function Tu(t,i,a){return i=Kn(4,t.children!==null?t.children:[],t.key,i),i.lanes=a,i.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},i}function y0(t,i,a,l,f){this.tag=i,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=jn(0),this.expirationTimes=jn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jn(0),this.identifierPrefix=l,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function wu(t,i,a,l,f,p,E,D,F){return t=new y0(t,i,a,D,F),i===1?(i=1,p===!0&&(i|=8)):i=0,p=Kn(3,null,null,i),t.current=p,p.stateNode=t,p.memoizedState={element:l,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},kc(p),t}function S0(t,i,a){var l=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:B,key:l==null?null:""+l,children:t,containerInfo:i,implementation:a}}function Lp(t){if(!t)return sr;t=t._reactInternals;e:{if(pi(t)!==t||t.tag!==1)throw Error(n(170));var i=t;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(n(171))}if(t.tag===1){var a=t.type;if(wn(a))return ah(t,a,i)}return i}function Dp(t,i,a,l,f,p,E,D,F){return t=wu(a,l,!0,t,f,p,E,D,F),t.context=Lp(null),a=t.current,l=_n(),f=fr(a),p=Di(l,f),p.callback=i??null,lr(a,p,f),t.current.lanes=f,En(t,f,l),Cn(t,l),t}function al(t,i,a,l){var f=i.current,p=_n(),E=fr(f);return a=Lp(a),i.context===null?i.context=a:i.pendingContext=a,i=Di(p,E),i.payload={element:t},l=l===void 0?null:l,l!==null&&(i.callback=l),t=lr(f,i,E),t!==null&&(ai(t,f,E,p),Oo(t,f,E)),E}function ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Up(t,i){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<i?a:i}}function Au(t,i){Up(t,i),(t=t.alternate)&&Up(t,i)}function M0(){return null}var Ip=typeof reportError=="function"?reportError:function(t){console.error(t)};function bu(t){this._internalRoot=t}ll.prototype.render=bu.prototype.render=function(t){var i=this._internalRoot;if(i===null)throw Error(n(409));al(t,i,null,null)},ll.prototype.unmount=bu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var i=t.containerInfo;Vr(function(){al(null,t,null,null)}),i[Ci]=null}};function ll(t){this._internalRoot=t}ll.prototype.unstable_scheduleHydration=function(t){if(t){var i=xf();t={blockedOn:null,target:t,priority:i};for(var a=0;a<er.length&&i!==0&&i<er[a].priority;a++);er.splice(a,0,t),a===0&&Sf(t)}};function Cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fp(){}function E0(t,i,a,l,f){if(f){if(typeof l=="function"){var p=l;l=function(){var Q=ol(E);p.call(Q)}}var E=Dp(i,l,t,0,null,!1,!1,"",Fp);return t._reactRootContainer=E,t[Ci]=E.current,Ea(t.nodeType===8?t.parentNode:t),Vr(),E}for(;f=t.lastChild;)t.removeChild(f);if(typeof l=="function"){var D=l;l=function(){var Q=ol(F);D.call(Q)}}var F=wu(t,0,!1,null,null,!1,!1,"",Fp);return t._reactRootContainer=F,t[Ci]=F.current,Ea(t.nodeType===8?t.parentNode:t),Vr(function(){al(i,F,a,l)}),F}function ul(t,i,a,l,f){var p=a._reactRootContainer;if(p){var E=p;if(typeof f=="function"){var D=f;f=function(){var F=ol(E);D.call(F)}}al(i,E,t,f)}else E=E0(a,i,t,f,l);return ol(E)}gf=function(t){switch(t.tag){case 3:var i=t.stateNode;if(i.current.memoizedState.isDehydrated){var a=$t(i.pendingLanes);a!==0&&(Ql(i,a|1),Cn(i,Me()),(xt&6)===0&&(Rs=Me()+500,ar()))}break;case 13:Vr(function(){var l=Li(t,1);if(l!==null){var f=_n();ai(l,t,1,f)}}),Au(t,1)}},Jl=function(t){if(t.tag===13){var i=Li(t,134217728);if(i!==null){var a=_n();ai(i,t,134217728,a)}Au(t,134217728)}},vf=function(t){if(t.tag===13){var i=fr(t),a=Li(t,i);if(a!==null){var l=_n();ai(a,t,i,l)}Au(t,i)}},xf=function(){return At},_f=function(t,i){var a=At;try{return At=t,i()}finally{At=a}},Re=function(t,i,a){switch(i){case"input":if(ut(t,a),i=a.name,a.type==="radio"&&i!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var l=a[i];if(l!==t&&l.form===t.form){var f=bo(l);if(!f)throw Error(n(90));pt(l),ut(l,f)}}}break;case"textarea":me(t,a);break;case"select":i=a.value,i!=null&&N(t,!!a.multiple,i,!1)}},Ut=_u,Yt=Vr;var T0={usingClientEntryPoint:!1,Events:[Aa,gs,bo,Ne,st,_u]},za={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},w0={bundleType:za.bundleType,version:za.version,rendererPackageName:za.rendererPackageName,rendererConfig:za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b(t),t===null?null:t.stateNode},findFiberByHostInstance:za.findFiberByHostInstance||M0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Et=dl.inject(w0),mt=dl}catch{}}return Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T0,Rn.createPortal=function(t,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Cu(i))throw Error(n(200));return S0(t,i,null,a)},Rn.createRoot=function(t,i){if(!Cu(t))throw Error(n(299));var a=!1,l="",f=Ip;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(l=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=wu(t,1,!1,null,null,a,!1,l,f),t[Ci]=i.current,Ea(t.nodeType===8?t.parentNode:t),new bu(i)},Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var i=t._reactInternals;if(i===void 0)throw typeof t.render=="function"?Error(n(188)):(t=Object.keys(t).join(","),Error(n(268,t)));return t=b(i),t=t===null?null:t.stateNode,t},Rn.flushSync=function(t){return Vr(t)},Rn.hydrate=function(t,i,a){if(!cl(i))throw Error(n(200));return ul(null,t,i,!0,a)},Rn.hydrateRoot=function(t,i,a){if(!Cu(t))throw Error(n(405));var l=a!=null&&a.hydratedSources||null,f=!1,p="",E=Ip;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(p=a.identifierPrefix),a.onRecoverableError!==void 0&&(E=a.onRecoverableError)),i=Dp(i,null,t,1,a??null,f,!1,p,E),t[Ci]=i.current,Ea(t),l)for(t=0;t<l.length;t++)a=l[t],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new ll(i)},Rn.render=function(t,i,a){if(!cl(i))throw Error(n(200));return ul(null,t,i,!1,a)},Rn.unmountComponentAtNode=function(t){if(!cl(t))throw Error(n(40));return t._reactRootContainer?(Vr(function(){ul(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1},Rn.unstable_batchedUpdates=_u,Rn.unstable_renderSubtreeIntoContainer=function(t,i,a,l){if(!cl(a))throw Error(n(200));if(t==null||t._reactInternals===void 0)throw Error(n(38));return ul(t,i,a,!1,l)},Rn.version="18.3.1-next-f1338f8080-20240426",Rn}var jp;function eg(){if(jp)return Nu.exports;jp=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Nu.exports=F0(),Nu.exports}var Wp;function O0(){if(Wp)return fl;Wp=1;var r=eg();return fl.createRoot=r.createRoot,fl.hydrateRoot=r.hydrateRoot,fl}var k0=O0();eg();/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ka(){return Ka=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Ka.apply(this,arguments)}var Er;(function(r){r.Pop="POP",r.Push="PUSH",r.Replace="REPLACE"})(Er||(Er={}));const Xp="popstate";function B0(r){r===void 0&&(r={});function e(s,o){let{pathname:c,search:u,hash:d}=s.location;return dd("",{pathname:c,search:u,hash:d},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(s,o){return typeof o=="string"?o:Hl(o)}return H0(e,n,null,r)}function Xt(r,e){if(r===!1||r===null||typeof r>"u")throw new Error(e)}function tg(r,e){if(!r){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function z0(){return Math.random().toString(36).substr(2,8)}function qp(r,e){return{usr:r.state,key:r.key,idx:e}}function dd(r,e,n,s){return n===void 0&&(n=null),Ka({pathname:typeof r=="string"?r:r.pathname,search:"",hash:""},typeof e=="string"?sa(e):e,{state:n,key:e&&e.key||s||z0()})}function Hl(r){let{pathname:e="/",search:n="",hash:s=""}=r;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),s&&s!=="#"&&(e+=s.charAt(0)==="#"?s:"#"+s),e}function sa(r){let e={};if(r){let n=r.indexOf("#");n>=0&&(e.hash=r.substr(n),r=r.substr(0,n));let s=r.indexOf("?");s>=0&&(e.search=r.substr(s),r=r.substr(0,s)),r&&(e.pathname=r)}return e}function H0(r,e,n,s){s===void 0&&(s={});let{window:o=document.defaultView,v5Compat:c=!1}=s,u=o.history,d=Er.Pop,h=null,m=x();m==null&&(m=0,u.replaceState(Ka({},u.state,{idx:m}),""));function x(){return(u.state||{idx:null}).idx}function _(){d=Er.Pop;let y=x(),g=y==null?null:y-m;m=y,h&&h({action:d,location:A.location,delta:g})}function S(y,g){d=Er.Push;let U=dd(A.location,y,g);m=x()+1;let L=qp(U,m),R=A.createHref(U);try{u.pushState(L,"",R)}catch($){if($ instanceof DOMException&&$.name==="DataCloneError")throw $;o.location.assign(R)}c&&h&&h({action:d,location:A.location,delta:1})}function M(y,g){d=Er.Replace;let U=dd(A.location,y,g);m=x();let L=qp(U,m),R=A.createHref(U);u.replaceState(L,"",R),c&&h&&h({action:d,location:A.location,delta:0})}function w(y){let g=o.location.origin!=="null"?o.location.origin:o.location.href,U=typeof y=="string"?y:Hl(y);return U=U.replace(/ $/,"%20"),Xt(g,"No window.location.(origin|href) available to create URL for href: "+U),new URL(U,g)}let A={get action(){return d},get location(){return r(o,u)},listen(y){if(h)throw new Error("A history only accepts one active listener");return o.addEventListener(Xp,_),h=y,()=>{o.removeEventListener(Xp,_),h=null}},createHref(y){return e(o,y)},createURL:w,encodeLocation(y){let g=w(y);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:S,replace:M,go(y){return u.go(y)}};return A}var Yp;(function(r){r.data="data",r.deferred="deferred",r.redirect="redirect",r.error="error"})(Yp||(Yp={}));function V0(r,e,n){return n===void 0&&(n="/"),G0(r,e,n)}function G0(r,e,n,s){let o=typeof e=="string"?sa(e):e,c=nf(o.pathname||"/",n);if(c==null)return null;let u=ng(r);j0(u);let d=null;for(let h=0;d==null&&h<u.length;++h){let m=nx(c);d=J0(u[h],m)}return d}function ng(r,e,n,s){e===void 0&&(e=[]),n===void 0&&(n=[]),s===void 0&&(s="");let o=(c,u,d)=>{let h={relativePath:d===void 0?c.path||"":d,caseSensitive:c.caseSensitive===!0,childrenIndex:u,route:c};h.relativePath.startsWith("/")&&(Xt(h.relativePath.startsWith(s),'Absolute route path "'+h.relativePath+'" nested under path '+('"'+s+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),h.relativePath=h.relativePath.slice(s.length));let m=Tr([s,h.relativePath]),x=n.concat(h);c.children&&c.children.length>0&&(Xt(c.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+m+'".')),ng(c.children,e,x,m)),!(c.path==null&&!c.index)&&e.push({path:m,score:Z0(m,c.index),routesMeta:x})};return r.forEach((c,u)=>{var d;if(c.path===""||!((d=c.path)!=null&&d.includes("?")))o(c,u);else for(let h of ig(c.path))o(c,u,h)}),e}function ig(r){let e=r.split("/");if(e.length===0)return[];let[n,...s]=e,o=n.endsWith("?"),c=n.replace(/\?$/,"");if(s.length===0)return o?[c,""]:[c];let u=ig(s.join("/")),d=[];return d.push(...u.map(h=>h===""?c:[c,h].join("/"))),o&&d.push(...u),d.map(h=>r.startsWith("/")&&h===""?"/":h)}function j0(r){r.sort((e,n)=>e.score!==n.score?n.score-e.score:Q0(e.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}const W0=/^:[\w-]+$/,X0=3,q0=2,Y0=1,$0=10,K0=-2,$p=r=>r==="*";function Z0(r,e){let n=r.split("/"),s=n.length;return n.some($p)&&(s+=K0),e&&(s+=q0),n.filter(o=>!$p(o)).reduce((o,c)=>o+(W0.test(c)?X0:c===""?Y0:$0),s)}function Q0(r,e){return r.length===e.length&&r.slice(0,-1).every((s,o)=>s===e[o])?r[r.length-1]-e[e.length-1]:0}function J0(r,e,n){let{routesMeta:s}=r,o={},c="/",u=[];for(let d=0;d<s.length;++d){let h=s[d],m=d===s.length-1,x=c==="/"?e:e.slice(c.length)||"/",_=ex({path:h.relativePath,caseSensitive:h.caseSensitive,end:m},x),S=h.route;if(!_)return null;Object.assign(o,_.params),u.push({params:o,pathname:Tr([c,_.pathname]),pathnameBase:ax(Tr([c,_.pathnameBase])),route:S}),_.pathnameBase!=="/"&&(c=Tr([c,_.pathnameBase]))}return u}function ex(r,e){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[n,s]=tx(r.path,r.caseSensitive,r.end),o=e.match(n);if(!o)return null;let c=o[0],u=c.replace(/(.)\/+$/,"$1"),d=o.slice(1);return{params:s.reduce((m,x,_)=>{let{paramName:S,isOptional:M}=x;if(S==="*"){let A=d[_]||"";u=c.slice(0,c.length-A.length).replace(/(.)\/+$/,"$1")}const w=d[_];return M&&!w?m[S]=void 0:m[S]=(w||"").replace(/%2F/g,"/"),m},{}),pathname:c,pathnameBase:u,pattern:r}}function tx(r,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),tg(r==="*"||!r.endsWith("*")||r.endsWith("/*"),'Route path "'+r+'" will be treated as if it were '+('"'+r.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+r.replace(/\*$/,"/*")+'".'));let s=[],o="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(u,d,h)=>(s.push({paramName:d,isOptional:h!=null}),h?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(s.push({paramName:"*"}),o+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":r!==""&&r!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,e?void 0:"i"),s]}function nx(r){try{return r.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return tg(!1,'The URL path "'+r+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),r}}function nf(r,e){if(e==="/")return r;if(!r.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,s=r.charAt(n);return s&&s!=="/"?null:r.slice(n)||"/"}function ix(r,e){e===void 0&&(e="/");let{pathname:n,search:s="",hash:o=""}=typeof r=="string"?sa(r):r;return{pathname:n?n.startsWith("/")?n:rx(n,e):e,search:ox(s),hash:lx(o)}}function rx(r,e){let n=e.replace(/\/+$/,"").split("/");return r.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function Uu(r,e,n,s){return"Cannot include a '"+r+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(s)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function sx(r){return r.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function rg(r,e){let n=sx(r);return e?n.map((s,o)=>o===n.length-1?s.pathname:s.pathnameBase):n.map(s=>s.pathnameBase)}function sg(r,e,n,s){s===void 0&&(s=!1);let o;typeof r=="string"?o=sa(r):(o=Ka({},r),Xt(!o.pathname||!o.pathname.includes("?"),Uu("?","pathname","search",o)),Xt(!o.pathname||!o.pathname.includes("#"),Uu("#","pathname","hash",o)),Xt(!o.search||!o.search.includes("#"),Uu("#","search","hash",o)));let c=r===""||o.pathname==="",u=c?"/":o.pathname,d;if(u==null)d=n;else{let _=e.length-1;if(!s&&u.startsWith("..")){let S=u.split("/");for(;S[0]==="..";)S.shift(),_-=1;o.pathname=S.join("/")}d=_>=0?e[_]:"/"}let h=ix(o,d),m=u&&u!=="/"&&u.endsWith("/"),x=(c||u===".")&&n.endsWith("/");return!h.pathname.endsWith("/")&&(m||x)&&(h.pathname+="/"),h}const Tr=r=>r.join("/").replace(/\/\/+/g,"/"),ax=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),ox=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,lx=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function cx(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}const ag=["post","put","patch","delete"];new Set(ag);const ux=["get",...ag];new Set(ux);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Za(){return Za=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},Za.apply(this,arguments)}const rf=be.createContext(null),dx=be.createContext(null),as=be.createContext(null),jl=be.createContext(null),Pr=be.createContext({outlet:null,matches:[],isDataRoute:!1}),og=be.createContext(null);function fx(r,e){let{relative:n}=e===void 0?{}:e;Ja()||Xt(!1);let{basename:s,navigator:o}=be.useContext(as),{hash:c,pathname:u,search:d}=cg(r,{relative:n}),h=u;return s!=="/"&&(h=u==="/"?s:Tr([s,u])),o.createHref({pathname:h,search:d,hash:c})}function Ja(){return be.useContext(jl)!=null}function eo(){return Ja()||Xt(!1),be.useContext(jl).location}function lg(r){be.useContext(as).static||be.useLayoutEffect(r)}function hx(){let{isDataRoute:r}=be.useContext(Pr);return r?bx():px()}function px(){Ja()||Xt(!1);let r=be.useContext(rf),{basename:e,future:n,navigator:s}=be.useContext(as),{matches:o}=be.useContext(Pr),{pathname:c}=eo(),u=JSON.stringify(rg(o,n.v7_relativeSplatPath)),d=be.useRef(!1);return lg(()=>{d.current=!0}),be.useCallback(function(m,x){if(x===void 0&&(x={}),!d.current)return;if(typeof m=="number"){s.go(m);return}let _=sg(m,JSON.parse(u),c,x.relative==="path");r==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:Tr([e,_.pathname])),(x.replace?s.replace:s.push)(_,x.state,x)},[e,s,u,c,r])}function mx(){let{matches:r}=be.useContext(Pr),e=r[r.length-1];return e?e.params:{}}function cg(r,e){let{relative:n}=e===void 0?{}:e,{future:s}=be.useContext(as),{matches:o}=be.useContext(Pr),{pathname:c}=eo(),u=JSON.stringify(rg(o,s.v7_relativeSplatPath));return be.useMemo(()=>sg(r,JSON.parse(u),c,n==="path"),[r,u,c,n])}function gx(r,e){return vx(r,e)}function vx(r,e,n,s){Ja()||Xt(!1);let{navigator:o,static:c}=be.useContext(as),{matches:u}=be.useContext(Pr),d=u[u.length-1],h=d?d.params:{};d&&d.pathname;let m=d?d.pathnameBase:"/";d&&d.route;let x=eo(),_;if(e){var S;let g=typeof e=="string"?sa(e):e;m==="/"||(S=g.pathname)!=null&&S.startsWith(m)||Xt(!1),_=g}else _=x;let M=_.pathname||"/",w=M;if(m!=="/"){let g=m.replace(/^\//,"").split("/");w="/"+M.replace(/^\//,"").split("/").slice(g.length).join("/")}let A=V0(r,{pathname:w}),y=Mx(A&&A.map(g=>Object.assign({},g,{params:Object.assign({},h,g.params),pathname:Tr([m,o.encodeLocation?o.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?m:Tr([m,o.encodeLocation?o.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),u,n,s);return e&&y?be.createElement(jl.Provider,{value:{location:Za({pathname:"/",search:"",hash:"",state:null,key:"default"},_),navigationType:Er.Pop}},y):y}function xx(){let r=Ax(),e=cx(r)?r.status+" "+r.statusText:r instanceof Error?r.message:JSON.stringify(r),n=r instanceof Error?r.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return be.createElement(be.Fragment,null,be.createElement("h2",null,"Unexpected Application Error!"),be.createElement("h3",{style:{fontStyle:"italic"}},e),n?be.createElement("pre",{style:o},n):null,null)}const _x=be.createElement(xx,null);class yx extends be.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?be.createElement(Pr.Provider,{value:this.props.routeContext},be.createElement(og.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Sx(r){let{routeContext:e,match:n,children:s}=r,o=be.useContext(rf);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),be.createElement(Pr.Provider,{value:e},s)}function Mx(r,e,n,s){var o;if(e===void 0&&(e=[]),n===void 0&&(n=null),s===void 0&&(s=null),r==null){var c;if(!n)return null;if(n.errors)r=n.matches;else if((c=s)!=null&&c.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)r=n.matches;else return null}let u=r,d=(o=n)==null?void 0:o.errors;if(d!=null){let x=u.findIndex(_=>_.route.id&&(d==null?void 0:d[_.route.id])!==void 0);x>=0||Xt(!1),u=u.slice(0,Math.min(u.length,x+1))}let h=!1,m=-1;if(n&&s&&s.v7_partialHydration)for(let x=0;x<u.length;x++){let _=u[x];if((_.route.HydrateFallback||_.route.hydrateFallbackElement)&&(m=x),_.route.id){let{loaderData:S,errors:M}=n,w=_.route.loader&&S[_.route.id]===void 0&&(!M||M[_.route.id]===void 0);if(_.route.lazy||w){h=!0,m>=0?u=u.slice(0,m+1):u=[u[0]];break}}}return u.reduceRight((x,_,S)=>{let M,w=!1,A=null,y=null;n&&(M=d&&_.route.id?d[_.route.id]:void 0,A=_.route.errorElement||_x,h&&(m<0&&S===0?(Cx("route-fallback"),w=!0,y=null):m===S&&(w=!0,y=_.route.hydrateFallbackElement||null)));let g=e.concat(u.slice(0,S+1)),U=()=>{let L;return M?L=A:w?L=y:_.route.Component?L=be.createElement(_.route.Component,null):_.route.element?L=_.route.element:L=x,be.createElement(Sx,{match:_,routeContext:{outlet:x,matches:g,isDataRoute:n!=null},children:L})};return n&&(_.route.ErrorBoundary||_.route.errorElement||S===0)?be.createElement(yx,{location:n.location,revalidation:n.revalidation,component:A,error:M,children:U(),routeContext:{outlet:null,matches:g,isDataRoute:!0}}):U()},null)}var ug=function(r){return r.UseBlocker="useBlocker",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r}(ug||{}),dg=function(r){return r.UseBlocker="useBlocker",r.UseLoaderData="useLoaderData",r.UseActionData="useActionData",r.UseRouteError="useRouteError",r.UseNavigation="useNavigation",r.UseRouteLoaderData="useRouteLoaderData",r.UseMatches="useMatches",r.UseRevalidator="useRevalidator",r.UseNavigateStable="useNavigate",r.UseRouteId="useRouteId",r}(dg||{});function Ex(r){let e=be.useContext(rf);return e||Xt(!1),e}function Tx(r){let e=be.useContext(dx);return e||Xt(!1),e}function wx(r){let e=be.useContext(Pr);return e||Xt(!1),e}function fg(r){let e=wx(),n=e.matches[e.matches.length-1];return n.route.id||Xt(!1),n.route.id}function Ax(){var r;let e=be.useContext(og),n=Tx(),s=fg();return e!==void 0?e:(r=n.errors)==null?void 0:r[s]}function bx(){let{router:r}=Ex(ug.UseNavigateStable),e=fg(dg.UseNavigateStable),n=be.useRef(!1);return lg(()=>{n.current=!0}),be.useCallback(function(o,c){c===void 0&&(c={}),n.current&&(typeof o=="number"?r.navigate(o):r.navigate(o,Za({fromRouteId:e},c)))},[r,e])}const Kp={};function Cx(r,e,n){Kp[r]||(Kp[r]=!0)}function Rx(r,e){r==null||r.v7_startTransition,r==null||r.v7_relativeSplatPath}function Nn(r){Xt(!1)}function Px(r){let{basename:e="/",children:n=null,location:s,navigationType:o=Er.Pop,navigator:c,static:u=!1,future:d}=r;Ja()&&Xt(!1);let h=e.replace(/^\/*/,"/"),m=be.useMemo(()=>({basename:h,navigator:c,static:u,future:Za({v7_relativeSplatPath:!1},d)}),[h,d,c,u]);typeof s=="string"&&(s=sa(s));let{pathname:x="/",search:_="",hash:S="",state:M=null,key:w="default"}=s,A=be.useMemo(()=>{let y=nf(x,h);return y==null?null:{location:{pathname:y,search:_,hash:S,state:M,key:w},navigationType:o}},[h,x,_,S,M,w,o]);return A==null?null:be.createElement(as.Provider,{value:m},be.createElement(jl.Provider,{children:n,value:A}))}function Nx(r){let{children:e,location:n}=r;return gx(fd(e),n)}new Promise(()=>{});function fd(r,e){e===void 0&&(e=[]);let n=[];return be.Children.forEach(r,(s,o)=>{if(!be.isValidElement(s))return;let c=[...e,o];if(s.type===be.Fragment){n.push.apply(n,fd(s.props.children,c));return}s.type!==Nn&&Xt(!1),!s.props.index||!s.props.children||Xt(!1);let u={id:s.props.id||c.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(u.children=fd(s.props.children,c)),n.push(u)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function hd(){return hd=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(r[s]=n[s])}return r},hd.apply(this,arguments)}function Lx(r,e){if(r==null)return{};var n={},s=Object.keys(r),o,c;for(c=0;c<s.length;c++)o=s[c],!(e.indexOf(o)>=0)&&(n[o]=r[o]);return n}function Dx(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Ux(r,e){return r.button===0&&(!e||e==="_self")&&!Dx(r)}const Ix=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],Fx="6";try{window.__reactRouterVersion=Fx}catch{}const Ox="startTransition",Zp=D0[Ox];function kx(r){let{basename:e,children:n,future:s,window:o}=r,c=be.useRef();c.current==null&&(c.current=B0({window:o,v5Compat:!0}));let u=c.current,[d,h]=be.useState({action:u.action,location:u.location}),{v7_startTransition:m}=s||{},x=be.useCallback(_=>{m&&Zp?Zp(()=>h(_)):h(_)},[h,m]);return be.useLayoutEffect(()=>u.listen(x),[u,x]),be.useEffect(()=>Rx(s),[s]),be.createElement(Px,{basename:e,children:n,location:d.location,navigationType:d.action,navigator:u,future:s})}const Bx=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",zx=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,wr=be.forwardRef(function(e,n){let{onClick:s,relative:o,reloadDocument:c,replace:u,state:d,target:h,to:m,preventScrollReset:x,viewTransition:_}=e,S=Lx(e,Ix),{basename:M}=be.useContext(as),w,A=!1;if(typeof m=="string"&&zx.test(m)&&(w=m,Bx))try{let L=new URL(window.location.href),R=m.startsWith("//")?new URL(L.protocol+m):new URL(m),$=nf(R.pathname,M);R.origin===L.origin&&$!=null?m=$+R.search+R.hash:A=!0}catch{}let y=fx(m,{relative:o}),g=Hx(m,{replace:u,state:d,target:h,preventScrollReset:x,relative:o,viewTransition:_});function U(L){s&&s(L),L.defaultPrevented||g(L)}return be.createElement("a",hd({},S,{href:w||y,onClick:A||c?s:U,ref:n,target:h}))});var Qp;(function(r){r.UseScrollRestoration="useScrollRestoration",r.UseSubmit="useSubmit",r.UseSubmitFetcher="useSubmitFetcher",r.UseFetcher="useFetcher",r.useViewTransitionState="useViewTransitionState"})(Qp||(Qp={}));var Jp;(function(r){r.UseFetcher="useFetcher",r.UseFetchers="useFetchers",r.UseScrollRestoration="useScrollRestoration"})(Jp||(Jp={}));function Hx(r,e){let{target:n,replace:s,state:o,preventScrollReset:c,relative:u,viewTransition:d}=e===void 0?{}:e,h=hx(),m=eo(),x=cg(r,{relative:u});return be.useCallback(_=>{if(Ux(_,n)){_.preventDefault();let S=s!==void 0?s:Hl(m)===Hl(x);h(r,{replace:S,state:o,preventScrollReset:c,relative:u,viewTransition:d})}},[m,h,x,s,o,n,r,c,u,d])}/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vx=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),hg=(...r)=>r.filter((e,n,s)=>!!e&&s.indexOf(e)===n).join(" ");/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Gx={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jx=be.forwardRef(({color:r="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:s,className:o="",children:c,iconNode:u,...d},h)=>be.createElement("svg",{ref:h,...Gx,width:e,height:e,stroke:r,strokeWidth:s?Number(n)*24/Number(e):n,className:hg("lucide",o),...d},[...u.map(([m,x])=>be.createElement(m,x)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=(r,e)=>{const n=be.forwardRef(({className:s,...o},c)=>be.createElement(jx,{ref:c,iconNode:e,className:hg(`lucide-${Vx(r)}`,s),...o}));return n.displayName=`${r}`,n};/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pg=Ot("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wx=Ot("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=Ot("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=Ot("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=Ot("Clock3",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=Ot("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=Ot("Cloud",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=Ot("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=Ot("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=Ot("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=Ot("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=Ot("Instagram",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=Ot("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mg=Ot("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=Ot("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=Ot("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=Ot("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=Ot("Quote",[["path",{d:"M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"rib7q0"}],["path",{d:"M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z",key:"1ymkrd"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=Ot("Rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=Ot("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=Ot("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=Ot("Target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=Ot("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=Ot("UsersRound",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=Ot("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]),h_=()=>{const[r,e]=be.useState(!1),[n,s]=be.useState(!1),o=eo(),c=[{name:"Home",path:"/kavyata/"},{name:"About",path:"/kavyata/about"},{name:"Services",path:"/kavyata/services"},{name:"Portfolio",path:"/kavyata/portfolio"},{name:"Testimonials",path:"/kavyata/testimonials"},{name:"Blog",path:"/kavyata/blog"},{name:"Contact",path:"/kavyata/contact"}];return be.useEffect(()=>{const u=()=>{s(window.scrollY>20)};return window.addEventListener("scroll",u),()=>window.removeEventListener("scroll",u)},[]),v.jsx("nav",{className:`fixed w-full z-50 transition-all duration-300 ${n?"bg-black/80 backdrop-blur-md shadow-lg py-3":"bg-transparent py-5"}`,children:v.jsxs("div",{className:"container mx-auto px-4 md:px-6",children:[v.jsxs("div",{className:"flex justify-between items-center",children:[v.jsx(wr,{to:"/",className:"text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent",children:v.jsx("img",{src:"kavyata_w.svg"})}),v.jsx("div",{className:"hidden md:flex space-x-8",children:c.map(u=>v.jsxs(wr,{to:u.path,className:`relative text-sm font-medium transition-colors hover:text-orange-400 ${o.pathname===u.path?"text-orange-400":"text-gray-300"}`,children:[u.name,v.jsx("span",{className:`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 transition-transform duration-300 ${o.pathname===u.path?"scale-x-100":""}`})]},u.name))}),v.jsx("button",{className:"md:hidden text-gray-300 hover:text-white focus:outline-none",onClick:()=>e(!r),children:r?v.jsx(f_,{size:24}):v.jsx(i_,{size:24})})]}),r&&v.jsx("div",{className:"md:hidden mt-4 bg-gray-900/90 backdrop-blur-lg rounded-lg p-4 shadow-lg",children:v.jsx("div",{className:"flex flex-col space-y-4",children:c.map(u=>v.jsx(wr,{to:u.path,className:`py-2 px-4 rounded-lg transition-colors ${o.pathname===u.path?"bg-blue-900/50 text-blue-400":"text-gray-300 hover:bg-gray-800 hover:text-white"}`,onClick:()=>e(!1),children:u.name},u.name))})})]})})},p_=()=>v.jsx("footer",{className:"bg-gray-900 border-t border-gray-800",children:v.jsxs("div",{className:"container mx-auto px-4 py-12 md:py-16",children:[v.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:[v.jsxs("div",{children:[v.jsx("h3",{className:"text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4",children:"KAVYTA"}),v.jsx("p",{className:"text-gray-400 mb-6",children:"Transforming businesses through innovative IT solutions and cutting-edge technology."}),v.jsxs("div",{className:"flex space-x-4",children:[v.jsx(Va,{icon:v.jsx(Zx,{size:18}),href:"#"}),v.jsx(Va,{icon:v.jsx(u_,{size:18}),href:"#"}),v.jsx(Va,{icon:v.jsx(e_,{size:18}),href:"#"}),v.jsx(Va,{icon:v.jsx(t_,{size:18}),href:"#"}),v.jsx(Va,{icon:v.jsx(Qx,{size:18}),href:"#"})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Services"}),v.jsxs("ul",{className:"space-y-2",children:[v.jsx(Fi,{href:"/kavyata/services",children:"Web Development"}),v.jsx(Fi,{href:"/kavyata/services",children:"Software Development"}),v.jsx(Fi,{href:"/kavyata/services",children:"Mobile App Development"}),v.jsx(Fi,{href:"/kavyata/services",children:"IT Consulting"})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Company"}),v.jsxs("ul",{className:"space-y-2",children:[v.jsx(Fi,{href:"/kavyata/about",children:"About Us"}),v.jsx(Fi,{href:"/kavyata/portfolio",children:"Our Work"}),v.jsx(Fi,{href:"/kavyata/testimonials",children:"Testimonials"}),v.jsx(Fi,{href:"/kavyata/blog",children:"Blog"}),v.jsx(Fi,{href:"/kavyata/contact",children:"Contact"})]})]}),v.jsxs("div",{children:[v.jsx("h4",{className:"text-lg font-semibold text-white mb-4",children:"Contact Us"}),v.jsxs("address",{className:"not-italic text-gray-400 space-y-2",children:[v.jsx("p",{children:"Rajkot"}),v.jsxs("p",{className:"flex items-center mt-2",children:[v.jsx(mg,{size:16,className:"mr-2"})," ",v.jsx("a",{href:"kavyata914@gmail.com",children:"info@kavyta.site"})]}),v.jsx("p",{children:v.jsx("a",{href:"tel:+916356893665",children:"+91 6356893665"})})]})]})]}),v.jsxs("div",{className:"border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center",children:[v.jsxs("p",{className:"text-gray-500 text-sm",children:["© ",new Date().getFullYear()," Develop by Kevin Topiya. All rights reserved."]}),v.jsxs("div",{className:"flex space-x-6 mt-4 md:mt-0",children:[v.jsx("span",{className:"text-gray-500 text-sm hover:text-gray-400 cursor-pointer",children:"Privacy Policy"}),v.jsx("span",{className:"text-gray-500 text-sm hover:text-gray-400 cursor-pointer",children:"Terms of Service"}),v.jsx("span",{className:"text-gray-500 text-sm hover:text-gray-400 cursor-pointer",children:"Cookies"})]})]})]})}),Va=({icon:r,href:e})=>v.jsx("a",{href:e,className:"w-8 h-8 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300",children:r}),Fi=({href:r,children:e})=>v.jsx("li",{children:v.jsx(wr,{to:r,className:"text-gray-400 hover:text-blue-400 transition-colors duration-300",children:e})}),Sn=({children:r,variant:e="primary",size:n="md",href:s,onClick:o,className:c="",type:u="button"})=>{const d="inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-black",h={primary:"bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-600/40",secondary:"bg-charcoal-600 hover:bg-charcoal-500 text-white",outline:"bg-transparent border border-charcoal-700 hover:border-orange-500 text-gray-300 hover:text-orange-400"},m={sm:"text-xs px-3 py-1.5",md:"text-sm px-5 py-2.5",lg:"text-base px-6 py-3"},x=`${d} ${h[e]} ${m[n]} ${c}`;return s?v.jsx(wr,{to:s,className:x,children:r}):v.jsx("button",{type:u,onClick:o,className:x,children:r})},m_=()=>v.jsxs("section",{className:"relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16",children:[v.jsx("div",{className:"absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black z-0"}),v.jsx("div",{className:"absolute top-20 right-[10%] w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"}),v.jsx("div",{className:"absolute bottom-20 left-[15%] w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse",style:{animationDelay:"2s"}}),v.jsx("div",{className:"absolute inset-0 bg-[url('https://img.pikbest.com/backgrounds/20190725/retro-sci-fi-background-futuristic-grid-landscape-of-the-1980-background-v_1508384jpg!w700wp')] bg-cover bg-center opacity-10 z-0"}),v.jsx("div",{className:"container mx-auto px-4 relative z-10",children:v.jsxs("div",{className:"flex flex-col md:flex-row items-center",children:[v.jsxs("div",{className:"md:w-1/2 md:pr-12",children:[v.jsxs("h1",{className:"text-4xl md:text-5xl lg:text-6xl font-bold mb-6",children:[v.jsx("span",{className:"block",children:"Innovative IT Solutions"}),v.jsx("span",{className:"bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",children:"For Your Business"})]}),v.jsx("p",{className:"text-lg text-gray-300 mb-8 max-w-lg",children:"We create cutting-edge digital solutions that transform businesses and drive growth in the modern technological landscape."}),v.jsxs("div",{className:"flex flex-wrap gap-4",children:[v.jsxs(Sn,{size:"lg",onClick:()=>{var r;(r=document.getElementById("services"))==null||r.scrollIntoView({behavior:"smooth"})},children:["Get Started",v.jsx(pg,{size:18,className:"ml-2"})]}),v.jsx(Sn,{variant:"outline",size:"lg",href:"/kavyata/services",children:"Our Services"})]}),v.jsxs("div",{className:"mt-12 flex items-center",children:[v.jsx("div",{className:"flex -space-x-2",children:[1,2,3,4].map(r=>v.jsx("div",{className:"w-10 h-10 rounded-full border-2 border-black overflow-hidden",children:v.jsx("img",{src:`https://randomuser.me/api/portraits/men/${r+30}.jpg`,alt:"Team member",className:"w-full h-full object-cover"})},r))}),v.jsxs("div",{className:"ml-4",children:[v.jsx("p",{className:"text-sm font-medium text-gray-300",children:"Trusted by"}),v.jsx("p",{className:"text-sm text-blue-400",children:"500+ businesses"})]})]})]}),v.jsx("div",{className:"md:w-1/2 mt-12 md:mt-0 flex justify-center",children:v.jsxs("div",{className:"relative",children:[v.jsx("div",{className:"w-[300px] md:w-[400px] h-[300px] md:h-[400px] rounded-2xl rounded-full overflow-hidden  shadow-2xl backdrop-blur-sm bg-gray-900/40",children:v.jsx("img",{src:"gif.gif",alt:"IT Solutions",className:"w-full h-full object-cover opacity-80"})}),v.jsx("div",{className:"absolute -top-6 -right-6 w-32 h-32 rounded-lg overflow-hidden border border-gray-800 shadow-lg backdrop-blur-sm bg-gray-900/60 p-3 flex items-center justify-center animate-float",children:v.jsx("img",{src:"https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126884_1280.png",alt:"Web Development",className:"w-full h-full object-contain"})}),v.jsx("div",{className:"absolute -bottom-8 -left-8 w-40 h-24 rounded-lg overflow-hidden border border-gray-800 shadow-lg backdrop-blur-sm bg-gray-900/60 p-3 flex items-center justify-center animate-float",style:{animationDelay:"1.5s"},children:v.jsxs("div",{className:"text-center",children:[v.jsx("div",{className:"text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",children:"95%"}),v.jsx("div",{className:"text-xs text-gray-300",children:"Customer Satisfaction"})]})})]})})]})})]}),Mt=({children:r,className:e="",hoverable:n=!1})=>v.jsx("div",{className:`
        bg-charcoal-700/60 backdrop-blur-lg border border-charcoal-600 
        rounded-xl shadow-xl p-6 
        ${n?"transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-orange-500/50":""}
        ${e}
      `,children:r}),g_=[{icon:v.jsx(Jx,{size:48,className:"text-blue-400"}),title:"Web Development",description:"Custom websites and web applications built with the latest technologies for optimal performance and user experience."},{icon:v.jsx(Kx,{size:48,className:"text-purple-400"}),title:"Software Development",description:"Tailored software solutions designed to streamline your business processes and boost productivity."},{icon:v.jsx(l_,{size:48,className:"text-green-400"}),title:"Mobile App Development",description:"Native and cross-platform mobile applications that deliver seamless experiences across all devices."},{icon:v.jsx($x,{size:48,className:"text-cyan-400"}),title:"Cloud Solutions",description:"Scalable cloud infrastructure and migration services to enhance flexibility and reduce operational costs."},{icon:v.jsx(o_,{size:48,className:"text-red-400"}),title:"Cybersecurity",description:"Comprehensive security solutions to protect your business data and systems from evolving threats."},{icon:v.jsx(Xx,{size:48,className:"text-yellow-400"}),title:"IT Consulting",description:"Strategic technology consulting to help you make informed decisions and achieve your business goals."}],v_=()=>v.jsxs("section",{id:"services",className:"relative py-20 bg-black ",children:[v.jsx("div",{className:"absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-purple-900/10 to-transparent"}),v.jsx("div",{className:"absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-blue-900/10 to-transparent"}),v.jsxs("div",{className:"container mx-auto px-4 relative z-10",children:[v.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[v.jsx("h2",{className:"text-3xl md:text-4xl font-bold mb-4",children:"Our Services"}),v.jsx("div",{className:"w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"}),v.jsx("p",{className:"text-gray-400 text-lg",children:"We offer a comprehensive range of IT services to help your business thrive in the digital era."})]}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:g_.map((r,e)=>v.jsxs(Mt,{hoverable:!0,className:"flex flex-col items-center text-center p-8",children:[v.jsx("div",{className:"mb-6 transform transition-transform duration-500 group-hover:scale-110",children:r.icon}),v.jsx("h3",{className:"text-xl font-bold mb-3",children:r.title}),v.jsx("p",{className:"text-gray-400",children:r.description})]},e))})]})]});/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sf="170",x_=0,em=1,__=2,gg=1,y_=2,Vi=3,Cr=0,Dn=1,Gi=2,Ar=0,Ks=1,tm=2,nm=3,im=4,S_=5,es=100,M_=101,E_=102,T_=103,w_=104,A_=200,b_=201,C_=202,R_=203,pd=204,md=205,P_=206,N_=207,L_=208,D_=209,U_=210,I_=211,F_=212,O_=213,k_=214,gd=0,vd=1,xd=2,Js=3,_d=4,yd=5,Sd=6,Md=7,vg=0,B_=1,z_=2,br=0,H_=1,V_=2,G_=3,j_=4,W_=5,X_=6,q_=7,xg=300,ea=301,ta=302,Ed=303,Td=304,Wl=306,wd=1e3,ns=1001,Ad=1002,hi=1003,Y_=1004,hl=1005,Si=1006,Iu=1007,is=1008,qi=1009,_g=1010,yg=1011,Qa=1012,af=1013,rs=1014,ji=1015,no=1016,of=1017,lf=1018,na=1020,Sg=35902,Mg=1021,Eg=1022,di=1023,Tg=1024,wg=1025,Zs=1026,ia=1027,Ag=1028,cf=1029,bg=1030,uf=1031,df=1033,Il=33776,Fl=33777,Ol=33778,kl=33779,bd=35840,Cd=35841,Rd=35842,Pd=35843,Nd=36196,Ld=37492,Dd=37496,Ud=37808,Id=37809,Fd=37810,Od=37811,kd=37812,Bd=37813,zd=37814,Hd=37815,Vd=37816,Gd=37817,jd=37818,Wd=37819,Xd=37820,qd=37821,Bl=36492,Yd=36494,$d=36495,Cg=36283,Kd=36284,Zd=36285,Qd=36286,$_=3200,K_=3201,Z_=0,Q_=1,Mr="",Qn="srgb",aa="srgb-linear",Xl="linear",Ct="srgb",Ns=7680,rm=519,J_=512,ey=513,ty=514,Rg=515,ny=516,iy=517,ry=518,sy=519,sm=35044,am="300 es",Wi=2e3,Vl=2001;class oa{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(n)===-1&&s[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const s=this._listeners;return s[e]!==void 0&&s[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const c=o.indexOf(n);c!==-1&&o.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const s=this._listeners[e.type];if(s!==void 0){e.target=this;const o=s.slice(0);for(let c=0,u=o.length;c<u;c++)o[c].call(this,e);e.target=null}}}const hn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Fu=Math.PI/180,Jd=180/Math.PI;function io(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(hn[r&255]+hn[r>>8&255]+hn[r>>16&255]+hn[r>>24&255]+"-"+hn[e&255]+hn[e>>8&255]+"-"+hn[e>>16&15|64]+hn[e>>24&255]+"-"+hn[n&63|128]+hn[n>>8&255]+"-"+hn[n>>16&255]+hn[n>>24&255]+hn[s&255]+hn[s>>8&255]+hn[s>>16&255]+hn[s>>24&255]).toLowerCase()}function Ln(r,e,n){return Math.max(e,Math.min(n,r))}function ay(r,e){return(r%e+e)%e}function Ou(r,e,n){return(1-n)*r+n*e}function Ga(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(e=0,n=0){Nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,s=this.y,o=e.elements;return this.x=o[0]*n+o[3]*s+o[6],this.y=o[1]*n+o[4]*s+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y;return n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const s=Math.cos(n),o=Math.sin(n),c=this.x-e.x,u=this.y-e.y;return this.x=c*s-u*o+e.x,this.y=c*o+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,n,s,o,c,u,d,h,m){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,s,o,c,u,d,h,m)}set(e,n,s,o,c,u,d,h,m){const x=this.elements;return x[0]=e,x[1]=o,x[2]=d,x[3]=n,x[4]=c,x[5]=h,x[6]=s,x[7]=u,x[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],this}extractBasis(e,n,s){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,o=n.elements,c=this.elements,u=s[0],d=s[3],h=s[6],m=s[1],x=s[4],_=s[7],S=s[2],M=s[5],w=s[8],A=o[0],y=o[3],g=o[6],U=o[1],L=o[4],R=o[7],$=o[2],B=o[5],O=o[8];return c[0]=u*A+d*U+h*$,c[3]=u*y+d*L+h*B,c[6]=u*g+d*R+h*O,c[1]=m*A+x*U+_*$,c[4]=m*y+x*L+_*B,c[7]=m*g+x*R+_*O,c[2]=S*A+M*U+w*$,c[5]=S*y+M*L+w*B,c[8]=S*g+M*R+w*O,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[1],o=e[2],c=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8];return n*u*x-n*d*m-s*c*x+s*d*h+o*c*m-o*u*h}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],c=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8],_=x*u-d*m,S=d*h-x*c,M=m*c-u*h,w=n*_+s*S+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/w;return e[0]=_*A,e[1]=(o*m-x*s)*A,e[2]=(d*s-o*u)*A,e[3]=S*A,e[4]=(x*n-o*h)*A,e[5]=(o*c-d*n)*A,e[6]=M*A,e[7]=(s*h-m*n)*A,e[8]=(u*n-s*c)*A,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,s,o,c,u,d){const h=Math.cos(c),m=Math.sin(c);return this.set(s*h,s*m,-s*(h*u+m*d)+u+e,-o*m,o*h,-o*(-m*u+h*d)+d+n,0,0,1),this}scale(e,n){return this.premultiply(ku.makeScale(e,n)),this}rotate(e){return this.premultiply(ku.makeRotation(-e)),this}translate(e,n){return this.premultiply(ku.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,s,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,s=e.elements;for(let o=0;o<9;o++)if(n[o]!==s[o])return!1;return!0}fromArray(e,n=0){for(let s=0;s<9;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ku=new ot;function Pg(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Gl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function oy(){const r=Gl("canvas");return r.style.display="block",r}const om={};function Ya(r){r in om||(om[r]=!0,console.warn(r))}function ly(r,e,n){return new Promise(function(s,o){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(c,n);break;default:s()}}setTimeout(c,n)})}function cy(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uy(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const _t={enabled:!0,workingColorSpace:aa,spaces:{},convert:function(r,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===Ct&&(r.r=Xi(r.r),r.g=Xi(r.g),r.b=Xi(r.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(r.applyMatrix3(this.spaces[e].toXYZ),r.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===Ct&&(r.r=Qs(r.r),r.g=Qs(r.g),r.b=Qs(r.b))),r},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Mr?Xl:this.spaces[r].transfer},getLuminanceCoefficients:function(r,e=this.workingColorSpace){return r.fromArray(this.spaces[e].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,e,n){return r.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Qs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const lm=[.64,.33,.3,.6,.15,.06],cm=[.2126,.7152,.0722],um=[.3127,.329],dm=new ot().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),fm=new ot().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);_t.define({[aa]:{primaries:lm,whitePoint:um,transfer:Xl,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:cm,workingColorSpaceConfig:{unpackColorSpace:Qn},outputColorSpaceConfig:{drawingBufferColorSpace:Qn}},[Qn]:{primaries:lm,whitePoint:um,transfer:Ct,toXYZ:dm,fromXYZ:fm,luminanceCoefficients:cm,outputColorSpaceConfig:{drawingBufferColorSpace:Qn}}});let Ls;class dy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ls===void 0&&(Ls=Gl("canvas")),Ls.width=e.width,Ls.height=e.height;const s=Ls.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ls}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Gl("canvas");n.width=e.width,n.height=e.height;const s=n.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const o=s.getImageData(0,0,e.width,e.height),c=o.data;for(let u=0;u<c.length;u++)c[u]=Xi(c[u]/255)*255;return s.putImageData(o,0,0),n}else if(e.data){const n=e.data.slice(0);for(let s=0;s<n.length;s++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[s]=Math.floor(Xi(n[s]/255)*255):n[s]=Xi(n[s]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fy=0;class Ng{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=io(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},o=this.data;if(o!==null){let c;if(Array.isArray(o)){c=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?c.push(Bu(o[u].image)):c.push(Bu(o[u]))}else c=Bu(o);s.url=c}return n||(e.images[this.uuid]=s),s}}function Bu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?dy.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let hy=0;class Un extends oa{constructor(e=Un.DEFAULT_IMAGE,n=Un.DEFAULT_MAPPING,s=ns,o=ns,c=Si,u=is,d=di,h=qi,m=Un.DEFAULT_ANISOTROPY,x=Mr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:hy++}),this.uuid=io(),this.name="",this.source=new Ng(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=s,this.wrapT=o,this.magFilter=c,this.minFilter=u,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=h,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),n||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wd:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case Ad:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wd:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case Ad:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=xg;Un.DEFAULT_ANISOTROPY=1;class Gt{constructor(e=0,n=0,s=0,o=1){Gt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=s,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,s,o){return this.x=e,this.y=n,this.z=s,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,c=this.w,u=e.elements;return this.x=u[0]*n+u[4]*s+u[8]*o+u[12]*c,this.y=u[1]*n+u[5]*s+u[9]*o+u[13]*c,this.z=u[2]*n+u[6]*s+u[10]*o+u[14]*c,this.w=u[3]*n+u[7]*s+u[11]*o+u[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,s,o,c;const h=e.elements,m=h[0],x=h[4],_=h[8],S=h[1],M=h[5],w=h[9],A=h[2],y=h[6],g=h[10];if(Math.abs(x-S)<.01&&Math.abs(_-A)<.01&&Math.abs(w-y)<.01){if(Math.abs(x+S)<.1&&Math.abs(_+A)<.1&&Math.abs(w+y)<.1&&Math.abs(m+M+g-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const L=(m+1)/2,R=(M+1)/2,$=(g+1)/2,B=(x+S)/4,O=(_+A)/4,X=(w+y)/4;return L>R&&L>$?L<.01?(s=0,o=.707106781,c=.707106781):(s=Math.sqrt(L),o=B/s,c=O/s):R>$?R<.01?(s=.707106781,o=0,c=.707106781):(o=Math.sqrt(R),s=B/o,c=X/o):$<.01?(s=.707106781,o=.707106781,c=0):(c=Math.sqrt($),s=O/c,o=X/c),this.set(s,o,c,n),this}let U=Math.sqrt((y-w)*(y-w)+(_-A)*(_-A)+(S-x)*(S-x));return Math.abs(U)<.001&&(U=1),this.x=(y-w)/U,this.y=(_-A)/U,this.z=(S-x)/U,this.w=Math.acos((m+M+g-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this.w=e.w+(n.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class py extends oa{constructor(e=1,n=1,s={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Gt(0,0,e,n),this.scissorTest=!1,this.viewport=new Gt(0,0,e,n);const o={width:e,height:n,depth:1};s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Si,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},s);const c=new Un(o,s.mapping,s.wrapS,s.wrapT,s.magFilter,s.minFilter,s.format,s.type,s.anisotropy,s.colorSpace);c.flipY=!1,c.generateMipmaps=s.generateMipmaps,c.internalFormat=s.internalFormat,this.textures=[];const u=s.count;for(let d=0;d<u;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0;this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this.depthTexture=s.depthTexture,this.samples=s.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,s=1){if(this.width!==e||this.height!==n||this.depth!==s){this.width=e,this.height=n,this.depth=s;for(let o=0,c=this.textures.length;o<c;o++)this.textures[o].image.width=e,this.textures[o].image.height=n,this.textures[o].image.depth=s;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let s=0,o=e.textures.length;s<o;s++)this.textures[s]=e.textures[s].clone(),this.textures[s].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Ng(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends py{constructor(e=1,n=1,s={}){super(e,n,s),this.isWebGLRenderTarget=!0}}class Lg extends Un{constructor(e=null,n=1,s=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:s,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class my extends Un{constructor(e=null,n=1,s=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:s,depth:o},this.magFilter=hi,this.minFilter=hi,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ro{constructor(e=0,n=0,s=0,o=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=s,this._w=o}static slerpFlat(e,n,s,o,c,u,d){let h=s[o+0],m=s[o+1],x=s[o+2],_=s[o+3];const S=c[u+0],M=c[u+1],w=c[u+2],A=c[u+3];if(d===0){e[n+0]=h,e[n+1]=m,e[n+2]=x,e[n+3]=_;return}if(d===1){e[n+0]=S,e[n+1]=M,e[n+2]=w,e[n+3]=A;return}if(_!==A||h!==S||m!==M||x!==w){let y=1-d;const g=h*S+m*M+x*w+_*A,U=g>=0?1:-1,L=1-g*g;if(L>Number.EPSILON){const $=Math.sqrt(L),B=Math.atan2($,g*U);y=Math.sin(y*B)/$,d=Math.sin(d*B)/$}const R=d*U;if(h=h*y+S*R,m=m*y+M*R,x=x*y+w*R,_=_*y+A*R,y===1-d){const $=1/Math.sqrt(h*h+m*m+x*x+_*_);h*=$,m*=$,x*=$,_*=$}}e[n]=h,e[n+1]=m,e[n+2]=x,e[n+3]=_}static multiplyQuaternionsFlat(e,n,s,o,c,u){const d=s[o],h=s[o+1],m=s[o+2],x=s[o+3],_=c[u],S=c[u+1],M=c[u+2],w=c[u+3];return e[n]=d*w+x*_+h*M-m*S,e[n+1]=h*w+x*S+m*_-d*M,e[n+2]=m*w+x*M+d*S-h*_,e[n+3]=x*w-d*_-h*S-m*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,s,o){return this._x=e,this._y=n,this._z=s,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const s=e._x,o=e._y,c=e._z,u=e._order,d=Math.cos,h=Math.sin,m=d(s/2),x=d(o/2),_=d(c/2),S=h(s/2),M=h(o/2),w=h(c/2);switch(u){case"XYZ":this._x=S*x*_+m*M*w,this._y=m*M*_-S*x*w,this._z=m*x*w+S*M*_,this._w=m*x*_-S*M*w;break;case"YXZ":this._x=S*x*_+m*M*w,this._y=m*M*_-S*x*w,this._z=m*x*w-S*M*_,this._w=m*x*_+S*M*w;break;case"ZXY":this._x=S*x*_-m*M*w,this._y=m*M*_+S*x*w,this._z=m*x*w+S*M*_,this._w=m*x*_-S*M*w;break;case"ZYX":this._x=S*x*_-m*M*w,this._y=m*M*_+S*x*w,this._z=m*x*w-S*M*_,this._w=m*x*_+S*M*w;break;case"YZX":this._x=S*x*_+m*M*w,this._y=m*M*_+S*x*w,this._z=m*x*w-S*M*_,this._w=m*x*_-S*M*w;break;case"XZY":this._x=S*x*_-m*M*w,this._y=m*M*_-S*x*w,this._z=m*x*w+S*M*_,this._w=m*x*_+S*M*w;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const s=n/2,o=Math.sin(s);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,s=n[0],o=n[4],c=n[8],u=n[1],d=n[5],h=n[9],m=n[2],x=n[6],_=n[10],S=s+d+_;if(S>0){const M=.5/Math.sqrt(S+1);this._w=.25/M,this._x=(x-h)*M,this._y=(c-m)*M,this._z=(u-o)*M}else if(s>d&&s>_){const M=2*Math.sqrt(1+s-d-_);this._w=(x-h)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(c+m)/M}else if(d>_){const M=2*Math.sqrt(1+d-s-_);this._w=(c-m)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(h+x)/M}else{const M=2*Math.sqrt(1+_-s-d);this._w=(u-o)/M,this._x=(c+m)/M,this._y=(h+x)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let s=e.dot(n)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ln(this.dot(e),-1,1)))}rotateTowards(e,n){const s=this.angleTo(e);if(s===0)return this;const o=Math.min(1,n/s);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const s=e._x,o=e._y,c=e._z,u=e._w,d=n._x,h=n._y,m=n._z,x=n._w;return this._x=s*x+u*d+o*m-c*h,this._y=o*x+u*h+c*d-s*m,this._z=c*x+u*m+s*h-o*d,this._w=u*x-s*d-o*h-c*m,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const s=this._x,o=this._y,c=this._z,u=this._w;let d=u*e._w+s*e._x+o*e._y+c*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=s,this._y=o,this._z=c,this;const h=1-d*d;if(h<=Number.EPSILON){const M=1-n;return this._w=M*u+n*this._w,this._x=M*s+n*this._x,this._y=M*o+n*this._y,this._z=M*c+n*this._z,this.normalize(),this}const m=Math.sqrt(h),x=Math.atan2(m,d),_=Math.sin((1-n)*x)/m,S=Math.sin(n*x)/m;return this._w=u*_+this._w*S,this._x=s*_+this._x*S,this._y=o*_+this._y*S,this._z=c*_+this._z*S,this._onChangeCallback(),this}slerpQuaternions(e,n,s){return this.copy(e).slerp(n,s)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),s=Math.random(),o=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(o*Math.sin(e),o*Math.cos(e),c*Math.sin(n),c*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,n=0,s=0){ie.prototype.isVector3=!0,this.x=e,this.y=n,this.z=s}set(e,n,s){return s===void 0&&(s=this.z),this.x=e,this.y=n,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(hm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(hm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,s=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[3]*s+c[6]*o,this.y=c[1]*n+c[4]*s+c[7]*o,this.z=c[2]*n+c[5]*s+c[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,s=this.y,o=this.z,c=e.elements,u=1/(c[3]*n+c[7]*s+c[11]*o+c[15]);return this.x=(c[0]*n+c[4]*s+c[8]*o+c[12])*u,this.y=(c[1]*n+c[5]*s+c[9]*o+c[13])*u,this.z=(c[2]*n+c[6]*s+c[10]*o+c[14])*u,this}applyQuaternion(e){const n=this.x,s=this.y,o=this.z,c=e.x,u=e.y,d=e.z,h=e.w,m=2*(u*o-d*s),x=2*(d*n-c*o),_=2*(c*s-u*n);return this.x=n+h*m+u*_-d*x,this.y=s+h*x+d*m-c*_,this.z=o+h*_+c*x-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,s=this.y,o=this.z,c=e.elements;return this.x=c[0]*n+c[4]*s+c[8]*o,this.y=c[1]*n+c[5]*s+c[9]*o,this.z=c[2]*n+c[6]*s+c[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const s=this.length();return this.divideScalar(s||1).multiplyScalar(Math.max(e,Math.min(n,s)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,s){return this.x=e.x+(n.x-e.x)*s,this.y=e.y+(n.y-e.y)*s,this.z=e.z+(n.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const s=e.x,o=e.y,c=e.z,u=n.x,d=n.y,h=n.z;return this.x=o*h-c*d,this.y=c*u-s*h,this.z=s*d-o*u,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const s=e.dot(this)/n;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const s=this.dot(e)/n;return Math.acos(Ln(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,s=this.y-e.y,o=this.z-e.z;return n*n+s*s+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,s){const o=Math.sin(n)*e;return this.x=o*Math.sin(s),this.y=Math.cos(n)*e,this.z=o*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,s){return this.x=e*Math.sin(n),this.y=s,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=s,this.z=o,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,s=Math.sqrt(1-n*n);return this.x=s*Math.cos(e),this.y=n,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zu=new ie,hm=new ro;class so{constructor(e=new ie(1/0,1/0,1/0),n=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n+=3)this.expandByPoint(oi.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,s=e.count;n<s;n++)this.expandByPoint(oi.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,s=e.length;n<s;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const s=oi.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(n===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=c.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,oi):oi.fromBufferAttribute(c,u),oi.applyMatrix4(e.matrixWorld),this.expandByPoint(oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),pl.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),pl.copy(s.boundingBox)),pl.applyMatrix4(e.matrixWorld),this.union(pl)}const o=e.children;for(let c=0,u=o.length;c<u;c++)this.expandByObject(o[c],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,oi),oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,s;return e.normal.x>0?(n=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),n<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ja),ml.subVectors(this.max,ja),Ds.subVectors(e.a,ja),Us.subVectors(e.b,ja),Is.subVectors(e.c,ja),gr.subVectors(Us,Ds),vr.subVectors(Is,Us),Xr.subVectors(Ds,Is);let n=[0,-gr.z,gr.y,0,-vr.z,vr.y,0,-Xr.z,Xr.y,gr.z,0,-gr.x,vr.z,0,-vr.x,Xr.z,0,-Xr.x,-gr.y,gr.x,0,-vr.y,vr.x,0,-Xr.y,Xr.x,0];return!Hu(n,Ds,Us,Is,ml)||(n=[1,0,0,0,1,0,0,0,1],!Hu(n,Ds,Us,Is,ml))?!1:(gl.crossVectors(gr,vr),n=[gl.x,gl.y,gl.z],Hu(n,Ds,Us,Is,ml))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Oi=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],oi=new ie,pl=new so,Ds=new ie,Us=new ie,Is=new ie,gr=new ie,vr=new ie,Xr=new ie,ja=new ie,ml=new ie,gl=new ie,qr=new ie;function Hu(r,e,n,s,o){for(let c=0,u=r.length-3;c<=u;c+=3){qr.fromArray(r,c);const d=o.x*Math.abs(qr.x)+o.y*Math.abs(qr.y)+o.z*Math.abs(qr.z),h=e.dot(qr),m=n.dot(qr),x=s.dot(qr);if(Math.max(-Math.max(h,m,x),Math.min(h,m,x))>d)return!1}return!0}const gy=new so,Wa=new ie,Vu=new ie;class ff{constructor(e=new ie,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const s=this.center;n!==void 0?s.copy(n):gy.setFromPoints(e).getCenter(s);let o=0;for(let c=0,u=e.length;c<u;c++)o=Math.max(o,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const s=this.center.distanceToSquared(e);return n.copy(e),s>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Wa.subVectors(e,this.center);const n=Wa.lengthSq();if(n>this.radius*this.radius){const s=Math.sqrt(n),o=(s-this.radius)*.5;this.center.addScaledVector(Wa,o/s),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Vu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Wa.copy(e.center).add(Vu)),this.expandByPoint(Wa.copy(e.center).sub(Vu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new ie,Gu=new ie,vl=new ie,xr=new ie,ju=new ie,xl=new ie,Wu=new ie;class vy{constructor(e=new ie,n=new ie(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const s=n.dot(this.direction);return s<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ki.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,n),ki.distanceToSquared(e))}distanceSqToSegment(e,n,s,o){Gu.copy(e).add(n).multiplyScalar(.5),vl.copy(n).sub(e).normalize(),xr.copy(this.origin).sub(Gu);const c=e.distanceTo(n)*.5,u=-this.direction.dot(vl),d=xr.dot(this.direction),h=-xr.dot(vl),m=xr.lengthSq(),x=Math.abs(1-u*u);let _,S,M,w;if(x>0)if(_=u*h-d,S=u*d-h,w=c*x,_>=0)if(S>=-w)if(S<=w){const A=1/x;_*=A,S*=A,M=_*(_+u*S+2*d)+S*(u*_+S+2*h)+m}else S=c,_=Math.max(0,-(u*S+d)),M=-_*_+S*(S+2*h)+m;else S=-c,_=Math.max(0,-(u*S+d)),M=-_*_+S*(S+2*h)+m;else S<=-w?(_=Math.max(0,-(-u*c+d)),S=_>0?-c:Math.min(Math.max(-c,-h),c),M=-_*_+S*(S+2*h)+m):S<=w?(_=0,S=Math.min(Math.max(-c,-h),c),M=S*(S+2*h)+m):(_=Math.max(0,-(u*c+d)),S=_>0?c:Math.min(Math.max(-c,-h),c),M=-_*_+S*(S+2*h)+m);else S=u>0?-c:c,_=Math.max(0,-(u*S+d)),M=-_*_+S*(S+2*h)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(Gu).addScaledVector(vl,S),M}intersectSphere(e,n){ki.subVectors(e.center,this.origin);const s=ki.dot(this.direction),o=ki.dot(ki)-s*s,c=e.radius*e.radius;if(o>c)return null;const u=Math.sqrt(c-o),d=s-u,h=s+u;return h<0?null:d<0?this.at(h,n):this.at(d,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/n;return s>=0?s:null}intersectPlane(e,n){const s=this.distanceToPlane(e);return s===null?null:this.at(s,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let s,o,c,u,d,h;const m=1/this.direction.x,x=1/this.direction.y,_=1/this.direction.z,S=this.origin;return m>=0?(s=(e.min.x-S.x)*m,o=(e.max.x-S.x)*m):(s=(e.max.x-S.x)*m,o=(e.min.x-S.x)*m),x>=0?(c=(e.min.y-S.y)*x,u=(e.max.y-S.y)*x):(c=(e.max.y-S.y)*x,u=(e.min.y-S.y)*x),s>u||c>o||((c>s||isNaN(s))&&(s=c),(u<o||isNaN(o))&&(o=u),_>=0?(d=(e.min.z-S.z)*_,h=(e.max.z-S.z)*_):(d=(e.max.z-S.z)*_,h=(e.min.z-S.z)*_),s>h||d>o)||((d>s||s!==s)&&(s=d),(h<o||o!==o)&&(o=h),o<0)?null:this.at(s>=0?s:o,n)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,n,s,o,c){ju.subVectors(n,e),xl.subVectors(s,e),Wu.crossVectors(ju,xl);let u=this.direction.dot(Wu),d;if(u>0){if(o)return null;d=1}else if(u<0)d=-1,u=-u;else return null;xr.subVectors(this.origin,e);const h=d*this.direction.dot(xl.crossVectors(xr,xl));if(h<0)return null;const m=d*this.direction.dot(ju.cross(xr));if(m<0||h+m>u)return null;const x=-d*xr.dot(Wu);return x<0?null:this.at(x/u,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,n,s,o,c,u,d,h,m,x,_,S,M,w,A,y){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,s,o,c,u,d,h,m,x,_,S,M,w,A,y)}set(e,n,s,o,c,u,d,h,m,x,_,S,M,w,A,y){const g=this.elements;return g[0]=e,g[4]=n,g[8]=s,g[12]=o,g[1]=c,g[5]=u,g[9]=d,g[13]=h,g[2]=m,g[6]=x,g[10]=_,g[14]=S,g[3]=M,g[7]=w,g[11]=A,g[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const n=this.elements,s=e.elements;return n[0]=s[0],n[1]=s[1],n[2]=s[2],n[3]=s[3],n[4]=s[4],n[5]=s[5],n[6]=s[6],n[7]=s[7],n[8]=s[8],n[9]=s[9],n[10]=s[10],n[11]=s[11],n[12]=s[12],n[13]=s[13],n[14]=s[14],n[15]=s[15],this}copyPosition(e){const n=this.elements,s=e.elements;return n[12]=s[12],n[13]=s[13],n[14]=s[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,s){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,n,s){return this.set(e.x,n.x,s.x,0,e.y,n.y,s.y,0,e.z,n.z,s.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,s=e.elements,o=1/Fs.setFromMatrixColumn(e,0).length(),c=1/Fs.setFromMatrixColumn(e,1).length(),u=1/Fs.setFromMatrixColumn(e,2).length();return n[0]=s[0]*o,n[1]=s[1]*o,n[2]=s[2]*o,n[3]=0,n[4]=s[4]*c,n[5]=s[5]*c,n[6]=s[6]*c,n[7]=0,n[8]=s[8]*u,n[9]=s[9]*u,n[10]=s[10]*u,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,s=e.x,o=e.y,c=e.z,u=Math.cos(s),d=Math.sin(s),h=Math.cos(o),m=Math.sin(o),x=Math.cos(c),_=Math.sin(c);if(e.order==="XYZ"){const S=u*x,M=u*_,w=d*x,A=d*_;n[0]=h*x,n[4]=-h*_,n[8]=m,n[1]=M+w*m,n[5]=S-A*m,n[9]=-d*h,n[2]=A-S*m,n[6]=w+M*m,n[10]=u*h}else if(e.order==="YXZ"){const S=h*x,M=h*_,w=m*x,A=m*_;n[0]=S+A*d,n[4]=w*d-M,n[8]=u*m,n[1]=u*_,n[5]=u*x,n[9]=-d,n[2]=M*d-w,n[6]=A+S*d,n[10]=u*h}else if(e.order==="ZXY"){const S=h*x,M=h*_,w=m*x,A=m*_;n[0]=S-A*d,n[4]=-u*_,n[8]=w+M*d,n[1]=M+w*d,n[5]=u*x,n[9]=A-S*d,n[2]=-u*m,n[6]=d,n[10]=u*h}else if(e.order==="ZYX"){const S=u*x,M=u*_,w=d*x,A=d*_;n[0]=h*x,n[4]=w*m-M,n[8]=S*m+A,n[1]=h*_,n[5]=A*m+S,n[9]=M*m-w,n[2]=-m,n[6]=d*h,n[10]=u*h}else if(e.order==="YZX"){const S=u*h,M=u*m,w=d*h,A=d*m;n[0]=h*x,n[4]=A-S*_,n[8]=w*_+M,n[1]=_,n[5]=u*x,n[9]=-d*x,n[2]=-m*x,n[6]=M*_+w,n[10]=S-A*_}else if(e.order==="XZY"){const S=u*h,M=u*m,w=d*h,A=d*m;n[0]=h*x,n[4]=-_,n[8]=m*x,n[1]=S*_+A,n[5]=u*x,n[9]=M*_-w,n[2]=w*_-M,n[6]=d*x,n[10]=A*_+S}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xy,e,_y)}lookAt(e,n,s){const o=this.elements;return Bn.subVectors(e,n),Bn.lengthSq()===0&&(Bn.z=1),Bn.normalize(),_r.crossVectors(s,Bn),_r.lengthSq()===0&&(Math.abs(s.z)===1?Bn.x+=1e-4:Bn.z+=1e-4,Bn.normalize(),_r.crossVectors(s,Bn)),_r.normalize(),_l.crossVectors(Bn,_r),o[0]=_r.x,o[4]=_l.x,o[8]=Bn.x,o[1]=_r.y,o[5]=_l.y,o[9]=Bn.y,o[2]=_r.z,o[6]=_l.z,o[10]=Bn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const s=e.elements,o=n.elements,c=this.elements,u=s[0],d=s[4],h=s[8],m=s[12],x=s[1],_=s[5],S=s[9],M=s[13],w=s[2],A=s[6],y=s[10],g=s[14],U=s[3],L=s[7],R=s[11],$=s[15],B=o[0],O=o[4],X=o[8],P=o[12],C=o[1],z=o[5],oe=o[9],te=o[13],fe=o[2],pe=o[6],ae=o[10],ce=o[14],k=o[3],le=o[7],se=o[11],I=o[15];return c[0]=u*B+d*C+h*fe+m*k,c[4]=u*O+d*z+h*pe+m*le,c[8]=u*X+d*oe+h*ae+m*se,c[12]=u*P+d*te+h*ce+m*I,c[1]=x*B+_*C+S*fe+M*k,c[5]=x*O+_*z+S*pe+M*le,c[9]=x*X+_*oe+S*ae+M*se,c[13]=x*P+_*te+S*ce+M*I,c[2]=w*B+A*C+y*fe+g*k,c[6]=w*O+A*z+y*pe+g*le,c[10]=w*X+A*oe+y*ae+g*se,c[14]=w*P+A*te+y*ce+g*I,c[3]=U*B+L*C+R*fe+$*k,c[7]=U*O+L*z+R*pe+$*le,c[11]=U*X+L*oe+R*ae+$*se,c[15]=U*P+L*te+R*ce+$*I,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],s=e[4],o=e[8],c=e[12],u=e[1],d=e[5],h=e[9],m=e[13],x=e[2],_=e[6],S=e[10],M=e[14],w=e[3],A=e[7],y=e[11],g=e[15];return w*(+c*h*_-o*m*_-c*d*S+s*m*S+o*d*M-s*h*M)+A*(+n*h*M-n*m*S+c*u*S-o*u*M+o*m*x-c*h*x)+y*(+n*m*_-n*d*M-c*u*_+s*u*M+c*d*x-s*m*x)+g*(-o*d*x-n*h*_+n*d*S+o*u*_-s*u*S+s*h*x)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,s){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=n,o[14]=s),this}invert(){const e=this.elements,n=e[0],s=e[1],o=e[2],c=e[3],u=e[4],d=e[5],h=e[6],m=e[7],x=e[8],_=e[9],S=e[10],M=e[11],w=e[12],A=e[13],y=e[14],g=e[15],U=_*y*m-A*S*m+A*h*M-d*y*M-_*h*g+d*S*g,L=w*S*m-x*y*m-w*h*M+u*y*M+x*h*g-u*S*g,R=x*A*m-w*_*m+w*d*M-u*A*M-x*d*g+u*_*g,$=w*_*h-x*A*h-w*d*S+u*A*S+x*d*y-u*_*y,B=n*U+s*L+o*R+c*$;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/B;return e[0]=U*O,e[1]=(A*S*c-_*y*c-A*o*M+s*y*M+_*o*g-s*S*g)*O,e[2]=(d*y*c-A*h*c+A*o*m-s*y*m-d*o*g+s*h*g)*O,e[3]=(_*h*c-d*S*c-_*o*m+s*S*m+d*o*M-s*h*M)*O,e[4]=L*O,e[5]=(x*y*c-w*S*c+w*o*M-n*y*M-x*o*g+n*S*g)*O,e[6]=(w*h*c-u*y*c-w*o*m+n*y*m+u*o*g-n*h*g)*O,e[7]=(u*S*c-x*h*c+x*o*m-n*S*m-u*o*M+n*h*M)*O,e[8]=R*O,e[9]=(w*_*c-x*A*c-w*s*M+n*A*M+x*s*g-n*_*g)*O,e[10]=(u*A*c-w*d*c+w*s*m-n*A*m-u*s*g+n*d*g)*O,e[11]=(x*d*c-u*_*c-x*s*m+n*_*m+u*s*M-n*d*M)*O,e[12]=$*O,e[13]=(x*A*o-w*_*o+w*s*S-n*A*S-x*s*y+n*_*y)*O,e[14]=(w*d*o-u*A*o-w*s*h+n*A*h+u*s*y-n*d*y)*O,e[15]=(u*_*o-x*d*o+x*s*h-n*_*h-u*s*S+n*d*S)*O,this}scale(e){const n=this.elements,s=e.x,o=e.y,c=e.z;return n[0]*=s,n[4]*=o,n[8]*=c,n[1]*=s,n[5]*=o,n[9]*=c,n[2]*=s,n[6]*=o,n[10]*=c,n[3]*=s,n[7]*=o,n[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,s,o))}makeTranslation(e,n,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,s,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,n,-s,0,0,s,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,0,s,0,0,1,0,0,-s,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),s=Math.sin(e);return this.set(n,-s,0,0,s,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const s=Math.cos(n),o=Math.sin(n),c=1-s,u=e.x,d=e.y,h=e.z,m=c*u,x=c*d;return this.set(m*u+s,m*d-o*h,m*h+o*d,0,m*d+o*h,x*d+s,x*h-o*u,0,m*h-o*d,x*h+o*u,c*h*h+s,0,0,0,0,1),this}makeScale(e,n,s){return this.set(e,0,0,0,0,n,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,n,s,o,c,u){return this.set(1,s,c,0,e,1,u,0,n,o,1,0,0,0,0,1),this}compose(e,n,s){const o=this.elements,c=n._x,u=n._y,d=n._z,h=n._w,m=c+c,x=u+u,_=d+d,S=c*m,M=c*x,w=c*_,A=u*x,y=u*_,g=d*_,U=h*m,L=h*x,R=h*_,$=s.x,B=s.y,O=s.z;return o[0]=(1-(A+g))*$,o[1]=(M+R)*$,o[2]=(w-L)*$,o[3]=0,o[4]=(M-R)*B,o[5]=(1-(S+g))*B,o[6]=(y+U)*B,o[7]=0,o[8]=(w+L)*O,o[9]=(y-U)*O,o[10]=(1-(S+A))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,n,s){const o=this.elements;let c=Fs.set(o[0],o[1],o[2]).length();const u=Fs.set(o[4],o[5],o[6]).length(),d=Fs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(c=-c),e.x=o[12],e.y=o[13],e.z=o[14],li.copy(this);const m=1/c,x=1/u,_=1/d;return li.elements[0]*=m,li.elements[1]*=m,li.elements[2]*=m,li.elements[4]*=x,li.elements[5]*=x,li.elements[6]*=x,li.elements[8]*=_,li.elements[9]*=_,li.elements[10]*=_,n.setFromRotationMatrix(li),s.x=c,s.y=u,s.z=d,this}makePerspective(e,n,s,o,c,u,d=Wi){const h=this.elements,m=2*c/(n-e),x=2*c/(s-o),_=(n+e)/(n-e),S=(s+o)/(s-o);let M,w;if(d===Wi)M=-(u+c)/(u-c),w=-2*u*c/(u-c);else if(d===Vl)M=-u/(u-c),w=-u*c/(u-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=m,h[4]=0,h[8]=_,h[12]=0,h[1]=0,h[5]=x,h[9]=S,h[13]=0,h[2]=0,h[6]=0,h[10]=M,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,n,s,o,c,u,d=Wi){const h=this.elements,m=1/(n-e),x=1/(s-o),_=1/(u-c),S=(n+e)*m,M=(s+o)*x;let w,A;if(d===Wi)w=(u+c)*_,A=-2*_;else if(d===Vl)w=c*_,A=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-S,h[1]=0,h[5]=2*x,h[9]=0,h[13]=-M,h[2]=0,h[6]=0,h[10]=A,h[14]=-w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const n=this.elements,s=e.elements;for(let o=0;o<16;o++)if(n[o]!==s[o])return!1;return!0}fromArray(e,n=0){for(let s=0;s<16;s++)this.elements[s]=e[s+n];return this}toArray(e=[],n=0){const s=this.elements;return e[n]=s[0],e[n+1]=s[1],e[n+2]=s[2],e[n+3]=s[3],e[n+4]=s[4],e[n+5]=s[5],e[n+6]=s[6],e[n+7]=s[7],e[n+8]=s[8],e[n+9]=s[9],e[n+10]=s[10],e[n+11]=s[11],e[n+12]=s[12],e[n+13]=s[13],e[n+14]=s[14],e[n+15]=s[15],e}}const Fs=new ie,li=new qt,xy=new ie(0,0,0),_y=new ie(1,1,1),_r=new ie,_l=new ie,Bn=new ie,pm=new qt,mm=new ro;class Yi{constructor(e=0,n=0,s=0,o=Yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=s,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,s,o=this._order){return this._x=e,this._y=n,this._z=s,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,s=!0){const o=e.elements,c=o[0],u=o[4],d=o[8],h=o[1],m=o[5],x=o[9],_=o[2],S=o[6],M=o[10];switch(n){case"XYZ":this._y=Math.asin(Ln(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-x,M),this._z=Math.atan2(-u,c)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-Ln(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-_,c),this._z=0);break;case"ZXY":this._x=Math.asin(Ln(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-_,M),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,c));break;case"ZYX":this._y=Math.asin(-Ln(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(S,M),this._z=Math.atan2(h,c)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(Ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,m),this._y=Math.atan2(-_,c)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Ln(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-x,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,s){return pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(pm,n,s)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return mm.setFromEuler(this),this.setFromQuaternion(mm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yi.DEFAULT_ORDER="XYZ";class Dg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yy=0;const gm=new ie,Os=new ro,Bi=new qt,yl=new ie,Xa=new ie,Sy=new ie,My=new ro,vm=new ie(1,0,0),xm=new ie(0,1,0),_m=new ie(0,0,1),ym={type:"added"},Ey={type:"removed"},ks={type:"childadded",child:null},Xu={type:"childremoved",child:null};class Vn extends oa{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=io(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new ie,n=new Yi,s=new ro,o=new ie(1,1,1);function c(){s.setFromEuler(n,!1)}function u(){n.setFromQuaternion(s,void 0,!1)}n._onChange(c),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new qt},normalMatrix:{value:new ot}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Dg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.multiply(Os),this}rotateOnWorldAxis(e,n){return Os.setFromAxisAngle(e,n),this.quaternion.premultiply(Os),this}rotateX(e){return this.rotateOnAxis(vm,e)}rotateY(e){return this.rotateOnAxis(xm,e)}rotateZ(e){return this.rotateOnAxis(_m,e)}translateOnAxis(e,n){return gm.copy(e).applyQuaternion(this.quaternion),this.position.add(gm.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(vm,e)}translateY(e){return this.translateOnAxis(xm,e)}translateZ(e){return this.translateOnAxis(_m,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,n,s){e.isVector3?yl.copy(e):yl.set(e,n,s);const o=this.parent;this.updateWorldMatrix(!0,!1),Xa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Xa,yl,this.up):Bi.lookAt(yl,Xa,this.up),this.quaternion.setFromRotationMatrix(Bi),o&&(Bi.extractRotation(o.matrixWorld),Os.setFromRotationMatrix(Bi),this.quaternion.premultiply(Os.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ym),ks.child=e,this.dispatchEvent(ks),ks.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Ey),Xu.child=e,this.dispatchEvent(Xu),Xu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ym),ks.child=e,this.dispatchEvent(ks),ks.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let s=0,o=this.children.length;s<o;s++){const u=this.children[s].getObjectByProperty(e,n);if(u!==void 0)return u}}getObjectsByProperty(e,n,s=[]){this[e]===n&&s.push(this);const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].getObjectsByProperty(e,n,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,e,Sy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xa,My,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let s=0,o=n.length;s<o;s++)n[s].updateMatrixWorld(e)}updateWorldMatrix(e,n){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",s={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function c(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let m=0,x=h.length;m<x;m++){const _=h[m];c(e.shapes,_)}else c(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,m=this.material.length;h<m;h++)d.push(c(e.materials,this.material[h]));o.material=d}else o.material=c(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];o.animations.push(c(e.animations,h))}}if(n){const d=u(e.geometries),h=u(e.materials),m=u(e.textures),x=u(e.images),_=u(e.shapes),S=u(e.skeletons),M=u(e.animations),w=u(e.nodes);d.length>0&&(s.geometries=d),h.length>0&&(s.materials=h),m.length>0&&(s.textures=m),x.length>0&&(s.images=x),_.length>0&&(s.shapes=_),S.length>0&&(s.skeletons=S),M.length>0&&(s.animations=M),w.length>0&&(s.nodes=w)}return s.object=o,s;function u(d){const h=[];for(const m in d){const x=d[m];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let s=0;s<e.children.length;s++){const o=e.children[s];this.add(o.clone())}return this}}Vn.DEFAULT_UP=new ie(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new ie,zi=new ie,qu=new ie,Hi=new ie,Bs=new ie,zs=new ie,Sm=new ie,Yu=new ie,$u=new ie,Ku=new ie,Zu=new Gt,Qu=new Gt,Ju=new Gt;class ui{constructor(e=new ie,n=new ie,s=new ie){this.a=e,this.b=n,this.c=s}static getNormal(e,n,s,o){o.subVectors(s,n),ci.subVectors(e,n),o.cross(ci);const c=o.lengthSq();return c>0?o.multiplyScalar(1/Math.sqrt(c)):o.set(0,0,0)}static getBarycoord(e,n,s,o,c){ci.subVectors(o,n),zi.subVectors(s,n),qu.subVectors(e,n);const u=ci.dot(ci),d=ci.dot(zi),h=ci.dot(qu),m=zi.dot(zi),x=zi.dot(qu),_=u*m-d*d;if(_===0)return c.set(0,0,0),null;const S=1/_,M=(m*h-d*x)*S,w=(u*x-d*h)*S;return c.set(1-M-w,w,M)}static containsPoint(e,n,s,o){return this.getBarycoord(e,n,s,o,Hi)===null?!1:Hi.x>=0&&Hi.y>=0&&Hi.x+Hi.y<=1}static getInterpolation(e,n,s,o,c,u,d,h){return this.getBarycoord(e,n,s,o,Hi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(c,Hi.x),h.addScaledVector(u,Hi.y),h.addScaledVector(d,Hi.z),h)}static getInterpolatedAttribute(e,n,s,o,c,u){return Zu.setScalar(0),Qu.setScalar(0),Ju.setScalar(0),Zu.fromBufferAttribute(e,n),Qu.fromBufferAttribute(e,s),Ju.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Zu,c.x),u.addScaledVector(Qu,c.y),u.addScaledVector(Ju,c.z),u}static isFrontFacing(e,n,s,o){return ci.subVectors(s,n),zi.subVectors(e,n),ci.cross(zi).dot(o)<0}set(e,n,s){return this.a.copy(e),this.b.copy(n),this.c.copy(s),this}setFromPointsAndIndices(e,n,s,o){return this.a.copy(e[n]),this.b.copy(e[s]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,n,s,o){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ci.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,s,o,c){return ui.getInterpolation(e,this.a,this.b,this.c,n,s,o,c)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const s=this.a,o=this.b,c=this.c;let u,d;Bs.subVectors(o,s),zs.subVectors(c,s),Yu.subVectors(e,s);const h=Bs.dot(Yu),m=zs.dot(Yu);if(h<=0&&m<=0)return n.copy(s);$u.subVectors(e,o);const x=Bs.dot($u),_=zs.dot($u);if(x>=0&&_<=x)return n.copy(o);const S=h*_-x*m;if(S<=0&&h>=0&&x<=0)return u=h/(h-x),n.copy(s).addScaledVector(Bs,u);Ku.subVectors(e,c);const M=Bs.dot(Ku),w=zs.dot(Ku);if(w>=0&&M<=w)return n.copy(c);const A=M*m-h*w;if(A<=0&&m>=0&&w<=0)return d=m/(m-w),n.copy(s).addScaledVector(zs,d);const y=x*w-M*_;if(y<=0&&_-x>=0&&M-w>=0)return Sm.subVectors(c,o),d=(_-x)/(_-x+(M-w)),n.copy(o).addScaledVector(Sm,d);const g=1/(y+A+S);return u=A*g,d=S*g,n.copy(s).addScaledVector(Bs,u).addScaledVector(zs,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ug={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yr={h:0,s:0,l:0},Sl={h:0,s:0,l:0};function ed(r,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(e-r)*6*n:n<1/2?e:n<2/3?r+(e-r)*6*(2/3-n):r}class Rt{constructor(e,n,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,s)}set(e,n,s){if(n===void 0&&s===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,n,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Qn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,n),this}setRGB(e,n,s,o=_t.workingColorSpace){return this.r=e,this.g=n,this.b=s,_t.toWorkingColorSpace(this,o),this}setHSL(e,n,s,o=_t.workingColorSpace){if(e=ay(e,1),n=Ln(n,0,1),s=Ln(s,0,1),n===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+n):s+n-s*n,u=2*s-c;this.r=ed(u,c,e+1/3),this.g=ed(u,c,e),this.b=ed(u,c,e-1/3)}return _t.toWorkingColorSpace(this,o),this}setStyle(e,n=Qn){function s(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,n);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,n);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=o[1],u=c.length;if(u===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,n);if(u===6)return this.setHex(parseInt(c,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Qn){const s=Ug[e.toLowerCase()];return s!==void 0?this.setHex(s,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=Qs(e.r),this.g=Qs(e.g),this.b=Qs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Qn){return _t.fromWorkingColorSpace(pn.copy(this),e),Math.round(Ln(pn.r*255,0,255))*65536+Math.round(Ln(pn.g*255,0,255))*256+Math.round(Ln(pn.b*255,0,255))}getHexString(e=Qn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=_t.workingColorSpace){_t.fromWorkingColorSpace(pn.copy(this),n);const s=pn.r,o=pn.g,c=pn.b,u=Math.max(s,o,c),d=Math.min(s,o,c);let h,m;const x=(d+u)/2;if(d===u)h=0,m=0;else{const _=u-d;switch(m=x<=.5?_/(u+d):_/(2-u-d),u){case s:h=(o-c)/_+(o<c?6:0);break;case o:h=(c-s)/_+2;break;case c:h=(s-o)/_+4;break}h/=6}return e.h=h,e.s=m,e.l=x,e}getRGB(e,n=_t.workingColorSpace){return _t.fromWorkingColorSpace(pn.copy(this),n),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=Qn){_t.fromWorkingColorSpace(pn.copy(this),e);const n=pn.r,s=pn.g,o=pn.b;return e!==Qn?`color(${e} ${n.toFixed(3)} ${s.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(s*255)},${Math.round(o*255)})`}offsetHSL(e,n,s){return this.getHSL(yr),this.setHSL(yr.h+e,yr.s+n,yr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,s){return this.r=e.r+(n.r-e.r)*s,this.g=e.g+(n.g-e.g)*s,this.b=e.b+(n.b-e.b)*s,this}lerpHSL(e,n){this.getHSL(yr),e.getHSL(Sl);const s=Ou(yr.h,Sl.h,n),o=Ou(yr.s,Sl.s,n),c=Ou(yr.l,Sl.l,n);return this.setHSL(s,o,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,s=this.g,o=this.b,c=e.elements;return this.r=c[0]*n+c[3]*s+c[6]*o,this.g=c[1]*n+c[4]*s+c[7]*o,this.b=c[2]*n+c[5]*s+c[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pn=new Rt;Rt.NAMES=Ug;let Ty=0;class ql extends oa{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ty++}),this.uuid=io(),this.name="",this.blending=Ks,this.side=Cr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pd,this.blendDst=md,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const s=e[n];if(s===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(s):o&&o.isVector3&&s&&s.isVector3?o.copy(s):this[n]=s}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const s={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(s.blending=this.blending),this.side!==Cr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==pd&&(s.blendSrc=this.blendSrc),this.blendDst!==md&&(s.blendDst=this.blendDst),this.blendEquation!==es&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Js&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rm&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function o(c){const u=[];for(const d in c){const h=c[d];delete h.metadata,u.push(h)}return u}if(n){const c=o(e.textures),u=o(e.images);c.length>0&&(s.textures=c),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let s=null;if(n!==null){const o=n.length;s=new Array(o);for(let c=0;c!==o;++c)s[c]=n[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Yl extends ql{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yi,this.combine=vg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Wt=new ie,Ml=new Nt;class Mi{constructor(e,n,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=s,this.usage=sm,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,s){e*=this.itemSize,s*=n.itemSize;for(let o=0,c=this.itemSize;o<c;o++)this.array[e+o]=n.array[s+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,s=this.count;n<s;n++)Ml.fromBufferAttribute(this,n),Ml.applyMatrix3(e),this.setXY(n,Ml.x,Ml.y);else if(this.itemSize===3)for(let n=0,s=this.count;n<s;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix3(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let n=0,s=this.count;n<s;n++)Wt.fromBufferAttribute(this,n),Wt.applyMatrix4(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let n=0,s=this.count;n<s;n++)Wt.fromBufferAttribute(this,n),Wt.applyNormalMatrix(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let n=0,s=this.count;n<s;n++)Wt.fromBufferAttribute(this,n),Wt.transformDirection(e),this.setXYZ(n,Wt.x,Wt.y,Wt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let s=this.array[e*this.itemSize+n];return this.normalized&&(s=Ga(s,this.array)),s}setComponent(e,n,s){return this.normalized&&(s=Pn(s,this.array)),this.array[e*this.itemSize+n]=s,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ga(n,this.array)),n}setX(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ga(n,this.array)),n}setY(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ga(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ga(n,this.array)),n}setW(e,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,s){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),s=Pn(s,this.array)),this.array[e+0]=n,this.array[e+1]=s,this}setXYZ(e,n,s,o){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),s=Pn(s,this.array),o=Pn(o,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=o,this}setXYZW(e,n,s,o,c){return e*=this.itemSize,this.normalized&&(n=Pn(n,this.array),s=Pn(s,this.array),o=Pn(o,this.array),c=Pn(c,this.array)),this.array[e+0]=n,this.array[e+1]=s,this.array[e+2]=o,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sm&&(e.usage=this.usage),e}}class Ig extends Mi{constructor(e,n,s){super(new Uint16Array(e),n,s)}}class Fg extends Mi{constructor(e,n,s){super(new Uint32Array(e),n,s)}}class Ei extends Mi{constructor(e,n,s){super(new Float32Array(e),n,s)}}let wy=0;const Zn=new qt,td=new Vn,Hs=new ie,zn=new so,qa=new so,rn=new ie;class Nr extends oa{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=io(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pg(e)?Fg:Ig)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,s=0){this.groups.push({start:e,count:n,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new ot().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zn.makeRotationFromQuaternion(e),this.applyMatrix4(Zn),this}rotateX(e){return Zn.makeRotationX(e),this.applyMatrix4(Zn),this}rotateY(e){return Zn.makeRotationY(e),this.applyMatrix4(Zn),this}rotateZ(e){return Zn.makeRotationZ(e),this.applyMatrix4(Zn),this}translate(e,n,s){return Zn.makeTranslation(e,n,s),this.applyMatrix4(Zn),this}scale(e,n,s){return Zn.makeScale(e,n,s),this.applyMatrix4(Zn),this}lookAt(e){return td.lookAt(e),td.updateMatrix(),this.applyMatrix4(td.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Hs).negate(),this.translate(Hs.x,Hs.y,Hs.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const s=[];for(let o=0,c=e.length;o<c;o++){const u=e[o];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Ei(s,3))}else{for(let s=0,o=n.count;s<o;s++){const c=e[s];n.setXYZ(s,c.x,c.y,c.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new so);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const c=n[s];zn.setFromBufferAttribute(c),this.morphTargetsRelative?(rn.addVectors(this.boundingBox.min,zn.min),this.boundingBox.expandByPoint(rn),rn.addVectors(this.boundingBox.max,zn.max),this.boundingBox.expandByPoint(rn)):(this.boundingBox.expandByPoint(zn.min),this.boundingBox.expandByPoint(zn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ff);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(zn.setFromBufferAttribute(e),n)for(let c=0,u=n.length;c<u;c++){const d=n[c];qa.setFromBufferAttribute(d),this.morphTargetsRelative?(rn.addVectors(zn.min,qa.min),zn.expandByPoint(rn),rn.addVectors(zn.max,qa.max),zn.expandByPoint(rn)):(zn.expandByPoint(qa.min),zn.expandByPoint(qa.max))}zn.getCenter(s);let o=0;for(let c=0,u=e.count;c<u;c++)rn.fromBufferAttribute(e,c),o=Math.max(o,s.distanceToSquared(rn));if(n)for(let c=0,u=n.length;c<u;c++){const d=n[c],h=this.morphTargetsRelative;for(let m=0,x=d.count;m<x;m++)rn.fromBufferAttribute(d,m),h&&(Hs.fromBufferAttribute(e,m),rn.add(Hs)),o=Math.max(o,s.distanceToSquared(rn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=n.position,o=n.normal,c=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Mi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let X=0;X<s.count;X++)d[X]=new ie,h[X]=new ie;const m=new ie,x=new ie,_=new ie,S=new Nt,M=new Nt,w=new Nt,A=new ie,y=new ie;function g(X,P,C){m.fromBufferAttribute(s,X),x.fromBufferAttribute(s,P),_.fromBufferAttribute(s,C),S.fromBufferAttribute(c,X),M.fromBufferAttribute(c,P),w.fromBufferAttribute(c,C),x.sub(m),_.sub(m),M.sub(S),w.sub(S);const z=1/(M.x*w.y-w.x*M.y);isFinite(z)&&(A.copy(x).multiplyScalar(w.y).addScaledVector(_,-M.y).multiplyScalar(z),y.copy(_).multiplyScalar(M.x).addScaledVector(x,-w.x).multiplyScalar(z),d[X].add(A),d[P].add(A),d[C].add(A),h[X].add(y),h[P].add(y),h[C].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let X=0,P=U.length;X<P;++X){const C=U[X],z=C.start,oe=C.count;for(let te=z,fe=z+oe;te<fe;te+=3)g(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const L=new ie,R=new ie,$=new ie,B=new ie;function O(X){$.fromBufferAttribute(o,X),B.copy($);const P=d[X];L.copy(P),L.sub($.multiplyScalar($.dot(P))).normalize(),R.crossVectors(B,P);const z=R.dot(h[X])<0?-1:1;u.setXYZW(X,L.x,L.y,L.z,z)}for(let X=0,P=U.length;X<P;++X){const C=U[X],z=C.start,oe=C.count;for(let te=z,fe=z+oe;te<fe;te+=3)O(e.getX(te+0)),O(e.getX(te+1)),O(e.getX(te+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Mi(new Float32Array(n.count*3),3),this.setAttribute("normal",s);else for(let S=0,M=s.count;S<M;S++)s.setXYZ(S,0,0,0);const o=new ie,c=new ie,u=new ie,d=new ie,h=new ie,m=new ie,x=new ie,_=new ie;if(e)for(let S=0,M=e.count;S<M;S+=3){const w=e.getX(S+0),A=e.getX(S+1),y=e.getX(S+2);o.fromBufferAttribute(n,w),c.fromBufferAttribute(n,A),u.fromBufferAttribute(n,y),x.subVectors(u,c),_.subVectors(o,c),x.cross(_),d.fromBufferAttribute(s,w),h.fromBufferAttribute(s,A),m.fromBufferAttribute(s,y),d.add(x),h.add(x),m.add(x),s.setXYZ(w,d.x,d.y,d.z),s.setXYZ(A,h.x,h.y,h.z),s.setXYZ(y,m.x,m.y,m.z)}else for(let S=0,M=n.count;S<M;S+=3)o.fromBufferAttribute(n,S+0),c.fromBufferAttribute(n,S+1),u.fromBufferAttribute(n,S+2),x.subVectors(u,c),_.subVectors(o,c),x.cross(_),s.setXYZ(S+0,x.x,x.y,x.z),s.setXYZ(S+1,x.x,x.y,x.z),s.setXYZ(S+2,x.x,x.y,x.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,s=e.count;n<s;n++)rn.fromBufferAttribute(e,n),rn.normalize(),e.setXYZ(n,rn.x,rn.y,rn.z)}toNonIndexed(){function e(d,h){const m=d.array,x=d.itemSize,_=d.normalized,S=new m.constructor(h.length*x);let M=0,w=0;for(let A=0,y=h.length;A<y;A++){d.isInterleavedBufferAttribute?M=h[A]*d.data.stride+d.offset:M=h[A]*x;for(let g=0;g<x;g++)S[w++]=m[M++]}return new Mi(S,x,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Nr,s=this.index.array,o=this.attributes;for(const d in o){const h=o[d],m=e(h,s);n.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const h=[],m=c[d];for(let x=0,_=m.length;x<_;x++){const S=m[x],M=e(S,s);h.push(M)}n.morphAttributes[d]=h}n.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const m=u[d];n.addGroup(m.start,m.count,m.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const s=this.attributes;for(const h in s){const m=s[h];e.data.attributes[h]=m.toJSON(e.data)}const o={};let c=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],x=[];for(let _=0,S=m.length;_<S;_++){const M=m[_];x.push(M.toJSON(e.data))}x.length>0&&(o[h]=x,c=!0)}c&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone(n));const o=e.attributes;for(const m in o){const x=o[m];this.setAttribute(m,x.clone(n))}const c=e.morphAttributes;for(const m in c){const x=[],_=c[m];for(let S=0,M=_.length;S<M;S++)x.push(_[S].clone(n));this.morphAttributes[m]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,x=u.length;m<x;m++){const _=u[m];this.addGroup(_.start,_.count,_.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mm=new qt,Yr=new vy,El=new ff,Em=new ie,Tl=new ie,wl=new ie,Al=new ie,nd=new ie,bl=new ie,Tm=new ie,Cl=new ie;class fi extends Vn{constructor(e=new Nr,n=new Yl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,s=Object.keys(n);if(s.length>0){const o=n[s[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,u=o.length;c<u;c++){const d=o[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,n){const s=this.geometry,o=s.attributes.position,c=s.morphAttributes.position,u=s.morphTargetsRelative;n.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(c&&d){bl.set(0,0,0);for(let h=0,m=c.length;h<m;h++){const x=d[h],_=c[h];x!==0&&(nd.fromBufferAttribute(_,e),u?bl.addScaledVector(nd,x):bl.addScaledVector(nd.sub(n),x))}n.add(bl)}return n}raycast(e,n){const s=this.geometry,o=this.material,c=this.matrixWorld;o!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),El.copy(s.boundingSphere),El.applyMatrix4(c),Yr.copy(e.ray).recast(e.near),!(El.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(El,Em)===null||Yr.origin.distanceToSquared(Em)>(e.far-e.near)**2))&&(Mm.copy(c).invert(),Yr.copy(e.ray).applyMatrix4(Mm),!(s.boundingBox!==null&&Yr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,n,Yr)))}_computeIntersections(e,n,s){let o;const c=this.geometry,u=this.material,d=c.index,h=c.attributes.position,m=c.attributes.uv,x=c.attributes.uv1,_=c.attributes.normal,S=c.groups,M=c.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,A=S.length;w<A;w++){const y=S[w],g=u[y.materialIndex],U=Math.max(y.start,M.start),L=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let R=U,$=L;R<$;R+=3){const B=d.getX(R),O=d.getX(R+1),X=d.getX(R+2);o=Rl(this,g,e,s,m,x,_,B,O,X),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const w=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=w,g=A;y<g;y+=3){const U=d.getX(y),L=d.getX(y+1),R=d.getX(y+2);o=Rl(this,u,e,s,m,x,_,U,L,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let w=0,A=S.length;w<A;w++){const y=S[w],g=u[y.materialIndex],U=Math.max(y.start,M.start),L=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let R=U,$=L;R<$;R+=3){const B=R,O=R+1,X=R+2;o=Rl(this,g,e,s,m,x,_,B,O,X),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const w=Math.max(0,M.start),A=Math.min(h.count,M.start+M.count);for(let y=w,g=A;y<g;y+=3){const U=y,L=y+1,R=y+2;o=Rl(this,u,e,s,m,x,_,U,L,R),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Ay(r,e,n,s,o,c,u,d){let h;if(e.side===Dn?h=s.intersectTriangle(u,c,o,!0,d):h=s.intersectTriangle(o,c,u,e.side===Cr,d),h===null)return null;Cl.copy(d),Cl.applyMatrix4(r.matrixWorld);const m=n.ray.origin.distanceTo(Cl);return m<n.near||m>n.far?null:{distance:m,point:Cl.clone(),object:r}}function Rl(r,e,n,s,o,c,u,d,h,m){r.getVertexPosition(d,Tl),r.getVertexPosition(h,wl),r.getVertexPosition(m,Al);const x=Ay(r,e,n,s,Tl,wl,Al,Tm);if(x){const _=new ie;ui.getBarycoord(Tm,Tl,wl,Al,_),o&&(x.uv=ui.getInterpolatedAttribute(o,d,h,m,_,new Nt)),c&&(x.uv1=ui.getInterpolatedAttribute(c,d,h,m,_,new Nt)),u&&(x.normal=ui.getInterpolatedAttribute(u,d,h,m,_,new ie),x.normal.dot(s.direction)>0&&x.normal.multiplyScalar(-1));const S={a:d,b:h,c:m,normal:new ie,materialIndex:0};ui.getNormal(Tl,wl,Al,S.normal),x.face=S,x.barycoord=_}return x}class la extends Nr{constructor(e=1,n=1,s=1,o=1,c=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:s,widthSegments:o,heightSegments:c,depthSegments:u};const d=this;o=Math.floor(o),c=Math.floor(c),u=Math.floor(u);const h=[],m=[],x=[],_=[];let S=0,M=0;w("z","y","x",-1,-1,s,n,e,u,c,0),w("z","y","x",1,-1,s,n,-e,u,c,1),w("x","z","y",1,1,e,s,n,o,u,2),w("x","z","y",1,-1,e,s,-n,o,u,3),w("x","y","z",1,-1,e,n,s,o,c,4),w("x","y","z",-1,-1,e,n,-s,o,c,5),this.setIndex(h),this.setAttribute("position",new Ei(m,3)),this.setAttribute("normal",new Ei(x,3)),this.setAttribute("uv",new Ei(_,2));function w(A,y,g,U,L,R,$,B,O,X,P){const C=R/O,z=$/X,oe=R/2,te=$/2,fe=B/2,pe=O+1,ae=X+1;let ce=0,k=0;const le=new ie;for(let se=0;se<ae;se++){const I=se*z-te;for(let ne=0;ne<pe;ne++){const Ue=ne*C-oe;le[A]=Ue*U,le[y]=I*L,le[g]=fe,m.push(le.x,le.y,le.z),le[A]=0,le[y]=0,le[g]=B>0?1:-1,x.push(le.x,le.y,le.z),_.push(ne/O),_.push(1-se/X),ce+=1}}for(let se=0;se<X;se++)for(let I=0;I<O;I++){const ne=S+I+pe*se,Ue=S+I+pe*(se+1),Z=S+(I+1)+pe*(se+1),ue=S+(I+1)+pe*se;h.push(ne,Ue,ue),h.push(Ue,Z,ue),k+=6}d.addGroup(M,k,P),M+=k,S+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new la(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ra(r){const e={};for(const n in r){e[n]={};for(const s in r[n]){const o=r[n][s];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][s]=null):e[n][s]=o.clone():Array.isArray(o)?e[n][s]=o.slice():e[n][s]=o}}return e}function yn(r){const e={};for(let n=0;n<r.length;n++){const s=ra(r[n]);for(const o in s)e[o]=s[o]}return e}function by(r){const e=[];for(let n=0;n<r.length;n++)e.push(r[n].clone());return e}function Og(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}const Cy={clone:ra,merge:yn};var Ry=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Py=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Rr extends ql{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ry,this.fragmentShader=Py,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ra(e.uniforms),this.uniformsGroups=by(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?n.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?n.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?n.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?n.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?n.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?n.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?n.uniforms[o]={type:"m4",value:u.toArray()}:n.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const s={};for(const o in this.extensions)this.extensions[o]===!0&&(s[o]=!0);return Object.keys(s).length>0&&(n.extensions=s),n}}class kg extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Wi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Sr=new ie,wm=new Nt,Am=new Nt;class Hn extends kg{constructor(e=50,n=1,s=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Fu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jd*2*Math.atan(Math.tan(Fu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,s){Sr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z),Sr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Sr.x,Sr.y).multiplyScalar(-e/Sr.z)}getViewSize(e,n){return this.getViewBounds(e,wm,Am),n.subVectors(Am,wm)}setViewOffset(e,n,s,o,c,u){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Fu*.5*this.fov)/this.zoom,s=2*n,o=this.aspect*s,c=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;c+=u.offsetX*o/h,n-=u.offsetY*s/m,o*=u.width/h,s*=u.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+o,n,n-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Vs=-90,Gs=1;class Ny extends Vn{constructor(e,n,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new Hn(Vs,Gs,e,n);o.layers=this.layers,this.add(o);const c=new Hn(Vs,Gs,e,n);c.layers=this.layers,this.add(c);const u=new Hn(Vs,Gs,e,n);u.layers=this.layers,this.add(u);const d=new Hn(Vs,Gs,e,n);d.layers=this.layers,this.add(d);const h=new Hn(Vs,Gs,e,n);h.layers=this.layers,this.add(h);const m=new Hn(Vs,Gs,e,n);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[s,o,c,u,d,h]=n;for(const m of n)this.remove(m);if(e===Wi)s.up.set(0,1,0),s.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Vl)s.up.set(0,-1,0),s.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of n)this.add(m),m.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,u,d,h,m,x]=this.children,_=e.getRenderTarget(),S=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const A=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,o),e.render(n,c),e.setRenderTarget(s,1,o),e.render(n,u),e.setRenderTarget(s,2,o),e.render(n,d),e.setRenderTarget(s,3,o),e.render(n,h),e.setRenderTarget(s,4,o),e.render(n,m),s.texture.generateMipmaps=A,e.setRenderTarget(s,5,o),e.render(n,x),e.setRenderTarget(_,S,M),e.xr.enabled=w,s.texture.needsPMREMUpdate=!0}}class Bg extends Un{constructor(e,n,s,o,c,u,d,h,m,x){e=e!==void 0?e:[],n=n!==void 0?n:ea,super(e,n,s,o,c,u,d,h,m,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ly extends ss{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},o=[s,s,s,s,s,s];this.texture=new Bg(o,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Si}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new la(5,5,5),c=new Rr({name:"CubemapFromEquirect",uniforms:ra(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Dn,blending:Ar});c.uniforms.tEquirect.value=n;const u=new fi(o,c),d=n.minFilter;return n.minFilter===is&&(n.minFilter=Si),new Ny(1,10,this).update(e,u),n.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,n,s,o){const c=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(n,s,o);e.setRenderTarget(c)}}const id=new ie,Dy=new ie,Uy=new ot;class Qr{constructor(e=new ie(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,s,o){return this.normal.set(e,n,s),this.constant=o,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,s){const o=id.subVectors(s,n).cross(Dy.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const s=e.delta(id),o=this.normal.dot(s);if(o===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return c<0||c>1?null:n.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const n=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return n<0&&s>0||s<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const s=n||Uy.getNormalMatrix(e),o=this.coplanarPoint(id).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-o.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const $r=new ff,Pl=new ie;class zg{constructor(e=new Qr,n=new Qr,s=new Qr,o=new Qr,c=new Qr,u=new Qr){this.planes=[e,n,s,o,c,u]}set(e,n,s,o,c,u){const d=this.planes;return d[0].copy(e),d[1].copy(n),d[2].copy(s),d[3].copy(o),d[4].copy(c),d[5].copy(u),this}copy(e){const n=this.planes;for(let s=0;s<6;s++)n[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,n=Wi){const s=this.planes,o=e.elements,c=o[0],u=o[1],d=o[2],h=o[3],m=o[4],x=o[5],_=o[6],S=o[7],M=o[8],w=o[9],A=o[10],y=o[11],g=o[12],U=o[13],L=o[14],R=o[15];if(s[0].setComponents(h-c,S-m,y-M,R-g).normalize(),s[1].setComponents(h+c,S+m,y+M,R+g).normalize(),s[2].setComponents(h+u,S+x,y+w,R+U).normalize(),s[3].setComponents(h-u,S-x,y-w,R-U).normalize(),s[4].setComponents(h-d,S-_,y-A,R-L).normalize(),n===Wi)s[5].setComponents(h+d,S+_,y+A,R+L).normalize();else if(n===Vl)s[5].setComponents(d,_,A,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),$r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),$r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere($r)}intersectsSprite(e){return $r.center.set(0,0,0),$r.radius=.7071067811865476,$r.applyMatrix4(e.matrixWorld),this.intersectsSphere($r)}intersectsSphere(e){const n=this.planes,s=e.center,o=-e.radius;for(let c=0;c<6;c++)if(n[c].distanceToPoint(s)<o)return!1;return!0}intersectsBox(e){const n=this.planes;for(let s=0;s<6;s++){const o=n[s];if(Pl.x=o.normal.x>0?e.max.x:e.min.x,Pl.y=o.normal.y>0?e.max.y:e.min.y,Pl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Pl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let s=0;s<6;s++)if(n[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Hg(){let r=null,e=!1,n=null,s=null;function o(c,u){n(c,u),s=r.requestAnimationFrame(o)}return{start:function(){e!==!0&&n!==null&&(s=r.requestAnimationFrame(o),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){n=c},setContext:function(c){r=c}}}function Iy(r){const e=new WeakMap;function n(d,h){const m=d.array,x=d.usage,_=m.byteLength,S=r.createBuffer();r.bindBuffer(h,S),r.bufferData(h,m,x),d.onUploadCallback();let M;if(m instanceof Float32Array)M=r.FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?M=r.HALF_FLOAT:M=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)M=r.SHORT;else if(m instanceof Uint32Array)M=r.UNSIGNED_INT;else if(m instanceof Int32Array)M=r.INT;else if(m instanceof Int8Array)M=r.BYTE;else if(m instanceof Uint8Array)M=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)M=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:M,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:_}}function s(d,h,m){const x=h.array,_=h.updateRanges;if(r.bindBuffer(m,d),_.length===0)r.bufferSubData(m,0,x);else{_.sort((M,w)=>M.start-w.start);let S=0;for(let M=1;M<_.length;M++){const w=_[S],A=_[M];A.start<=w.start+w.count+1?w.count=Math.max(w.count,A.start+A.count-w.start):(++S,_[S]=A)}_.length=S+1;for(let M=0,w=_.length;M<w;M++){const A=_[M];r.bufferSubData(m,A.start*x.BYTES_PER_ELEMENT,x,A.start,A.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(r.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const x=e.get(d);(!x||x.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,n(d,h));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,h),m.version=d.version}}return{get:o,remove:c,update:u}}class $l extends Nr{constructor(e=1,n=1,s=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:s,heightSegments:o};const c=e/2,u=n/2,d=Math.floor(s),h=Math.floor(o),m=d+1,x=h+1,_=e/d,S=n/h,M=[],w=[],A=[],y=[];for(let g=0;g<x;g++){const U=g*S-u;for(let L=0;L<m;L++){const R=L*_-c;w.push(R,-U,0),A.push(0,0,1),y.push(L/d),y.push(1-g/h)}}for(let g=0;g<h;g++)for(let U=0;U<d;U++){const L=U+m*g,R=U+m*(g+1),$=U+1+m*(g+1),B=U+1+m*g;M.push(L,R,B),M.push(R,$,B)}this.setIndex(M),this.setAttribute("position",new Ei(w,3)),this.setAttribute("normal",new Ei(A,3)),this.setAttribute("uv",new Ei(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Oy=`#ifdef USE_ALPHAHASH
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
#endif`,ky=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,By=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vy=`#ifdef USE_AOMAP
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
#endif`,Gy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jy=`#ifdef USE_BATCHING
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
#endif`,Wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Xy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Yy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,$y=`#ifdef USE_IRIDESCENCE
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
#endif`,Ky=`#ifdef USE_BUMPMAP
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
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rS=`#if defined( USE_COLOR_ALPHA )
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
#endif`,sS=`#define PI 3.141592653589793
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
} // validated`,aS=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oS=`vec3 transformedNormal = objectNormal;
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
#endif`,lS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,fS="gl_FragColor = linearToOutputTexel( gl_FragColor );",hS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pS=`#ifdef USE_ENVMAP
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
#endif`,mS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gS=`#ifdef USE_ENVMAP
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
#endif`,vS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xS=`#ifdef USE_ENVMAP
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
#endif`,_S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ES=`#ifdef USE_GRADIENTMAP
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
}`,TS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bS=`uniform bool receiveShadow;
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
#endif`,CS=`#ifdef USE_ENVMAP
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
#endif`,RS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,NS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LS=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,DS=`PhysicalMaterial material;
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
#endif`,US=`struct PhysicalMaterial {
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
}`,IS=`
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
#endif`,FS=`#if defined( RE_IndirectDiffuse )
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
#endif`,OS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,BS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WS=`#if defined( USE_POINTS_UV )
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
#endif`,XS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$S=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZS=`#ifdef USE_MORPHTARGETS
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
#endif`,QS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,eM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rM=`#ifdef USE_NORMALMAP
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
#endif`,sM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,aM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,xM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,yM=`float getShadowMask() {
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
}`,SM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,MM=`#ifdef USE_SKINNING
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
#endif`,EM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TM=`#ifdef USE_SKINNING
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
#endif`,wM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,AM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,bM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RM=`#ifdef USE_TRANSMISSION
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
#endif`,PM=`#ifdef USE_TRANSMISSION
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
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FM=`uniform sampler2D t2D;
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
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`#include <common>
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
}`,VM=`#if DEPTH_PACKING == 3200
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
}`,GM=`#define DISTANCE
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
}`,jM=`#define DISTANCE
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
}`,WM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,XM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qM=`uniform float scale;
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
}`,YM=`uniform vec3 diffuse;
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
}`,$M=`#include <common>
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
}`,KM=`uniform vec3 diffuse;
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
}`,ZM=`#define LAMBERT
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
}`,QM=`#define LAMBERT
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
}`,JM=`#define MATCAP
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
}`,eE=`#define MATCAP
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
}`,tE=`#define NORMAL
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
}`,nE=`#define NORMAL
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
}`,iE=`#define PHONG
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
}`,rE=`#define PHONG
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
}`,sE=`#define STANDARD
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
}`,aE=`#define STANDARD
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
}`,oE=`#define TOON
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
}`,lE=`#define TOON
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
}`,cE=`uniform float size;
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
}`,uE=`uniform vec3 diffuse;
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
}`,dE=`#include <common>
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
}`,fE=`uniform vec3 color;
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
}`,hE=`uniform float rotation;
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
}`,pE=`uniform vec3 diffuse;
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
}`,lt={alphahash_fragment:Fy,alphahash_pars_fragment:Oy,alphamap_fragment:ky,alphamap_pars_fragment:By,alphatest_fragment:zy,alphatest_pars_fragment:Hy,aomap_fragment:Vy,aomap_pars_fragment:Gy,batching_pars_vertex:jy,batching_vertex:Wy,begin_vertex:Xy,beginnormal_vertex:qy,bsdfs:Yy,iridescence_fragment:$y,bumpmap_pars_fragment:Ky,clipping_planes_fragment:Zy,clipping_planes_pars_fragment:Qy,clipping_planes_pars_vertex:Jy,clipping_planes_vertex:eS,color_fragment:tS,color_pars_fragment:nS,color_pars_vertex:iS,color_vertex:rS,common:sS,cube_uv_reflection_fragment:aS,defaultnormal_vertex:oS,displacementmap_pars_vertex:lS,displacementmap_vertex:cS,emissivemap_fragment:uS,emissivemap_pars_fragment:dS,colorspace_fragment:fS,colorspace_pars_fragment:hS,envmap_fragment:pS,envmap_common_pars_fragment:mS,envmap_pars_fragment:gS,envmap_pars_vertex:vS,envmap_physical_pars_fragment:CS,envmap_vertex:xS,fog_vertex:_S,fog_pars_vertex:yS,fog_fragment:SS,fog_pars_fragment:MS,gradientmap_pars_fragment:ES,lightmap_pars_fragment:TS,lights_lambert_fragment:wS,lights_lambert_pars_fragment:AS,lights_pars_begin:bS,lights_toon_fragment:RS,lights_toon_pars_fragment:PS,lights_phong_fragment:NS,lights_phong_pars_fragment:LS,lights_physical_fragment:DS,lights_physical_pars_fragment:US,lights_fragment_begin:IS,lights_fragment_maps:FS,lights_fragment_end:OS,logdepthbuf_fragment:kS,logdepthbuf_pars_fragment:BS,logdepthbuf_pars_vertex:zS,logdepthbuf_vertex:HS,map_fragment:VS,map_pars_fragment:GS,map_particle_fragment:jS,map_particle_pars_fragment:WS,metalnessmap_fragment:XS,metalnessmap_pars_fragment:qS,morphinstance_vertex:YS,morphcolor_vertex:$S,morphnormal_vertex:KS,morphtarget_pars_vertex:ZS,morphtarget_vertex:QS,normal_fragment_begin:JS,normal_fragment_maps:eM,normal_pars_fragment:tM,normal_pars_vertex:nM,normal_vertex:iM,normalmap_pars_fragment:rM,clearcoat_normal_fragment_begin:sM,clearcoat_normal_fragment_maps:aM,clearcoat_pars_fragment:oM,iridescence_pars_fragment:lM,opaque_fragment:cM,packing:uM,premultiplied_alpha_fragment:dM,project_vertex:fM,dithering_fragment:hM,dithering_pars_fragment:pM,roughnessmap_fragment:mM,roughnessmap_pars_fragment:gM,shadowmap_pars_fragment:vM,shadowmap_pars_vertex:xM,shadowmap_vertex:_M,shadowmask_pars_fragment:yM,skinbase_vertex:SM,skinning_pars_vertex:MM,skinning_vertex:EM,skinnormal_vertex:TM,specularmap_fragment:wM,specularmap_pars_fragment:AM,tonemapping_fragment:bM,tonemapping_pars_fragment:CM,transmission_fragment:RM,transmission_pars_fragment:PM,uv_pars_fragment:NM,uv_pars_vertex:LM,uv_vertex:DM,worldpos_vertex:UM,background_vert:IM,background_frag:FM,backgroundCube_vert:OM,backgroundCube_frag:kM,cube_vert:BM,cube_frag:zM,depth_vert:HM,depth_frag:VM,distanceRGBA_vert:GM,distanceRGBA_frag:jM,equirect_vert:WM,equirect_frag:XM,linedashed_vert:qM,linedashed_frag:YM,meshbasic_vert:$M,meshbasic_frag:KM,meshlambert_vert:ZM,meshlambert_frag:QM,meshmatcap_vert:JM,meshmatcap_frag:eE,meshnormal_vert:tE,meshnormal_frag:nE,meshphong_vert:iE,meshphong_frag:rE,meshphysical_vert:sE,meshphysical_frag:aE,meshtoon_vert:oE,meshtoon_frag:lE,points_vert:cE,points_frag:uE,shadow_vert:dE,shadow_frag:fE,sprite_vert:hE,sprite_frag:pE},Pe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},envMapRotation:{value:new ot},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},yi={basic:{uniforms:yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:lt.meshbasic_vert,fragmentShader:lt.meshbasic_frag},lambert:{uniforms:yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:lt.meshlambert_vert,fragmentShader:lt.meshlambert_frag},phong:{uniforms:yn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:lt.meshphong_vert,fragmentShader:lt.meshphong_frag},standard:{uniforms:yn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag},toon:{uniforms:yn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:lt.meshtoon_vert,fragmentShader:lt.meshtoon_frag},matcap:{uniforms:yn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:lt.meshmatcap_vert,fragmentShader:lt.meshmatcap_frag},points:{uniforms:yn([Pe.points,Pe.fog]),vertexShader:lt.points_vert,fragmentShader:lt.points_frag},dashed:{uniforms:yn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:lt.linedashed_vert,fragmentShader:lt.linedashed_frag},depth:{uniforms:yn([Pe.common,Pe.displacementmap]),vertexShader:lt.depth_vert,fragmentShader:lt.depth_frag},normal:{uniforms:yn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:lt.meshnormal_vert,fragmentShader:lt.meshnormal_frag},sprite:{uniforms:yn([Pe.sprite,Pe.fog]),vertexShader:lt.sprite_vert,fragmentShader:lt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:lt.background_vert,fragmentShader:lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ot}},vertexShader:lt.backgroundCube_vert,fragmentShader:lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:lt.cube_vert,fragmentShader:lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:lt.equirect_vert,fragmentShader:lt.equirect_frag},distanceRGBA:{uniforms:yn([Pe.common,Pe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:lt.distanceRGBA_vert,fragmentShader:lt.distanceRGBA_frag},shadow:{uniforms:yn([Pe.lights,Pe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:lt.shadow_vert,fragmentShader:lt.shadow_frag}};yi.physical={uniforms:yn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:lt.meshphysical_vert,fragmentShader:lt.meshphysical_frag};const Nl={r:0,b:0,g:0},Kr=new Yi,mE=new qt;function gE(r,e,n,s,o,c,u){const d=new Rt(0);let h=c===!0?0:1,m,x,_=null,S=0,M=null;function w(U){let L=U.isScene===!0?U.background:null;return L&&L.isTexture&&(L=(U.backgroundBlurriness>0?n:e).get(L)),L}function A(U){let L=!1;const R=w(U);R===null?g(d,h):R&&R.isColor&&(g(R,1),L=!0);const $=r.xr.getEnvironmentBlendMode();$==="additive"?s.buffers.color.setClear(0,0,0,1,u):$==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(U,L){const R=w(L);R&&(R.isCubeTexture||R.mapping===Wl)?(x===void 0&&(x=new fi(new la(1,1,1),new Rr({name:"BackgroundCubeMaterial",uniforms:ra(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Dn,depthTest:!1,depthWrite:!1,fog:!1})),x.geometry.deleteAttribute("normal"),x.geometry.deleteAttribute("uv"),x.onBeforeRender=function($,B,O){this.matrixWorld.copyPosition(O.matrixWorld)},Object.defineProperty(x.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(x)),Kr.copy(L.backgroundRotation),Kr.x*=-1,Kr.y*=-1,Kr.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(Kr.y*=-1,Kr.z*=-1),x.material.uniforms.envMap.value=R,x.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,x.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,x.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,x.material.uniforms.backgroundRotation.value.setFromMatrix4(mE.makeRotationFromEuler(Kr)),x.material.toneMapped=_t.getTransfer(R.colorSpace)!==Ct,(_!==R||S!==R.version||M!==r.toneMapping)&&(x.material.needsUpdate=!0,_=R,S=R.version,M=r.toneMapping),x.layers.enableAll(),U.unshift(x,x.geometry,x.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new fi(new $l(2,2),new Rr({name:"BackgroundMaterial",uniforms:ra(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:Cr,depthTest:!1,depthWrite:!1,fog:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=_t.getTransfer(R.colorSpace)!==Ct,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(_!==R||S!==R.version||M!==r.toneMapping)&&(m.material.needsUpdate=!0,_=R,S=R.version,M=r.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function g(U,L){U.getRGB(Nl,Og(r)),s.buffers.color.setClear(Nl.r,Nl.g,Nl.b,L,u)}return{getClearColor:function(){return d},setClearColor:function(U,L=1){d.set(U),h=L,g(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(U){h=U,g(d,h)},render:A,addToRenderList:y}}function vE(r,e){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},o=S(null);let c=o,u=!1;function d(C,z,oe,te,fe){let pe=!1;const ae=_(te,oe,z);c!==ae&&(c=ae,m(c.object)),pe=M(C,te,oe,fe),pe&&w(C,te,oe,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,R(C,z,oe,te),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function x(C){return r.deleteVertexArray(C)}function _(C,z,oe){const te=oe.wireframe===!0;let fe=s[C.id];fe===void 0&&(fe={},s[C.id]=fe);let pe=fe[z.id];pe===void 0&&(pe={},fe[z.id]=pe);let ae=pe[te];return ae===void 0&&(ae=S(h()),pe[te]=ae),ae}function S(C){const z=[],oe=[],te=[];for(let fe=0;fe<n;fe++)z[fe]=0,oe[fe]=0,te[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:oe,attributeDivisors:te,object:C,attributes:{},index:null}}function M(C,z,oe,te){const fe=c.attributes,pe=z.attributes;let ae=0;const ce=oe.getAttributes();for(const k in ce)if(ce[k].location>=0){const se=fe[k];let I=pe[k];if(I===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(I=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(I=C.instanceColor)),se===void 0||se.attribute!==I||I&&se.data!==I.data)return!0;ae++}return c.attributesNum!==ae||c.index!==te}function w(C,z,oe,te){const fe={},pe=z.attributes;let ae=0;const ce=oe.getAttributes();for(const k in ce)if(ce[k].location>=0){let se=pe[k];se===void 0&&(k==="instanceMatrix"&&C.instanceMatrix&&(se=C.instanceMatrix),k==="instanceColor"&&C.instanceColor&&(se=C.instanceColor));const I={};I.attribute=se,se&&se.data&&(I.data=se.data),fe[k]=I,ae++}c.attributes=fe,c.attributesNum=ae,c.index=te}function A(){const C=c.newAttributes;for(let z=0,oe=C.length;z<oe;z++)C[z]=0}function y(C){g(C,0)}function g(C,z){const oe=c.newAttributes,te=c.enabledAttributes,fe=c.attributeDivisors;oe[C]=1,te[C]===0&&(r.enableVertexAttribArray(C),te[C]=1),fe[C]!==z&&(r.vertexAttribDivisor(C,z),fe[C]=z)}function U(){const C=c.newAttributes,z=c.enabledAttributes;for(let oe=0,te=z.length;oe<te;oe++)z[oe]!==C[oe]&&(r.disableVertexAttribArray(oe),z[oe]=0)}function L(C,z,oe,te,fe,pe,ae){ae===!0?r.vertexAttribIPointer(C,z,oe,fe,pe):r.vertexAttribPointer(C,z,oe,te,fe,pe)}function R(C,z,oe,te){A();const fe=te.attributes,pe=oe.getAttributes(),ae=z.defaultAttributeValues;for(const ce in pe){const k=pe[ce];if(k.location>=0){let le=fe[ce];if(le===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const se=le.normalized,I=le.itemSize,ne=e.get(le);if(ne===void 0)continue;const Ue=ne.buffer,Z=ne.type,ue=ne.bytesPerElement,Ee=Z===r.INT||Z===r.UNSIGNED_INT||le.gpuType===af;if(le.isInterleavedBufferAttribute){const _e=le.data,Ae=_e.stride,Ie=le.offset;if(_e.isInstancedInterleavedBuffer){for(let Qe=0;Qe<k.locationSize;Qe++)g(k.location+Qe,_e.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Qe=0;Qe<k.locationSize;Qe++)y(k.location+Qe);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Qe=0;Qe<k.locationSize;Qe++)L(k.location+Qe,I/k.locationSize,Z,se,Ae*ue,(Ie+I/k.locationSize*Qe)*ue,Ee)}else{if(le.isInstancedBufferAttribute){for(let _e=0;_e<k.locationSize;_e++)g(k.location+_e,le.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let _e=0;_e<k.locationSize;_e++)y(k.location+_e);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let _e=0;_e<k.locationSize;_e++)L(k.location+_e,I/k.locationSize,Z,se,I*ue,I/k.locationSize*_e*ue,Ee)}}else if(ae!==void 0){const se=ae[ce];if(se!==void 0)switch(se.length){case 2:r.vertexAttrib2fv(k.location,se);break;case 3:r.vertexAttrib3fv(k.location,se);break;case 4:r.vertexAttrib4fv(k.location,se);break;default:r.vertexAttrib1fv(k.location,se)}}}}U()}function $(){X();for(const C in s){const z=s[C];for(const oe in z){const te=z[oe];for(const fe in te)x(te[fe].object),delete te[fe];delete z[oe]}delete s[C]}}function B(C){if(s[C.id]===void 0)return;const z=s[C.id];for(const oe in z){const te=z[oe];for(const fe in te)x(te[fe].object),delete te[fe];delete z[oe]}delete s[C.id]}function O(C){for(const z in s){const oe=s[z];if(oe[C.id]===void 0)continue;const te=oe[C.id];for(const fe in te)x(te[fe].object),delete te[fe];delete oe[C.id]}}function X(){P(),u=!0,c!==o&&(c=o,m(c.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:X,resetDefaultState:P,dispose:$,releaseStatesOfGeometry:B,releaseStatesOfProgram:O,initAttributes:A,enableAttribute:y,disableUnusedAttributes:U}}function xE(r,e,n){let s;function o(m){s=m}function c(m,x){r.drawArrays(s,m,x),n.update(x,s,1)}function u(m,x,_){_!==0&&(r.drawArraysInstanced(s,m,x,_),n.update(x,s,_))}function d(m,x,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,x,0,_);let M=0;for(let w=0;w<_;w++)M+=x[w];n.update(M,s,1)}function h(m,x,_,S){if(_===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let w=0;w<m.length;w++)u(m[w],x[w],S[w]);else{M.multiDrawArraysInstancedWEBGL(s,m,0,x,0,S,0,_);let w=0;for(let A=0;A<_;A++)w+=x[A]*S[A];n.update(w,s,1)}}this.setMode=o,this.render=c,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function _E(r,e,n,s){let o;function c(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==di&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(O){const X=O===no&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==qi&&s.convert(O)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==ji&&!X)}function h(O){if(O==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=n.precision!==void 0?n.precision:"highp";const x=h(m);x!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",x,"instead."),m=x);const _=n.logarithmicDepthBuffer===!0,S=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),M=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),w=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),U=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),L=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),$=w>0,B=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:_,reverseDepthBuffer:S,maxTextures:M,maxVertexTextures:w,maxTextureSize:A,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:U,maxVaryings:L,maxFragmentUniforms:R,vertexTextures:$,maxSamples:B}}function yE(r){const e=this;let n=null,s=0,o=!1,c=!1;const u=new Qr,d=new ot,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(_,S){const M=_.length!==0||S||s!==0||o;return o=S,s=_.length,M},this.beginShadows=function(){c=!0,x(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(_,S){n=x(_,S,0)},this.setState=function(_,S,M){const w=_.clippingPlanes,A=_.clipIntersection,y=_.clipShadows,g=r.get(_);if(!o||w===null||w.length===0||c&&!y)c?x(null):m();else{const U=c?0:s,L=U*4;let R=g.clippingState||null;h.value=R,R=x(w,S,L,M);for(let $=0;$!==L;++$)R[$]=n[$];g.clippingState=R,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=U}};function m(){h.value!==n&&(h.value=n,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function x(_,S,M,w){const A=_!==null?_.length:0;let y=null;if(A!==0){if(y=h.value,w!==!0||y===null){const g=M+A*4,U=S.matrixWorldInverse;d.getNormalMatrix(U),(y===null||y.length<g)&&(y=new Float32Array(g));for(let L=0,R=M;L!==A;++L,R+=4)u.copy(_[L]).applyMatrix4(U,d),u.normal.toArray(y,R),y[R+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,y}}function SE(r){let e=new WeakMap;function n(u,d){return d===Ed?u.mapping=ea:d===Td&&(u.mapping=ta),u}function s(u){if(u&&u.isTexture){const d=u.mapping;if(d===Ed||d===Td)if(e.has(u)){const h=e.get(u).texture;return n(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new Ly(h.height);return m.fromEquirectangularTexture(r,u),e.set(u,m),u.addEventListener("dispose",o),n(m.texture,u.mapping)}else return null}}return u}function o(u){const d=u.target;d.removeEventListener("dispose",o);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}class ME extends kg{constructor(e=-1,n=1,s=1,o=-1,c=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=s,this.bottom=o,this.near=c,this.far=u,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,s,o,c,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=s,this.view.offsetY=o,this.view.width=c,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let c=s-e,u=s+e,d=o+n,h=o-n;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,u=c+m*this.view.width,d-=x*this.view.offsetY,h=d-x*this.view.height}this.projectionMatrix.makeOrthographic(c,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const $s=4,bm=[.125,.215,.35,.446,.526,.582],ts=20,rd=new ME,Cm=new Rt;let sd=null,ad=0,od=0,ld=!1;const Jr=(1+Math.sqrt(5))/2,js=1/Jr,Rm=[new ie(-Jr,js,0),new ie(Jr,js,0),new ie(-js,0,Jr),new ie(js,0,Jr),new ie(0,Jr,-js),new ie(0,Jr,js),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)];class Pm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,s=.1,o=100){sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,s,o,c),n>0&&this._blur(c,0,0,n),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(sd,ad,od),this._renderer.xr.enabled=ld,e.scissorTest=!1,Ll(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ea||e.mapping===ta?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),sd=this._renderer.getRenderTarget(),ad=this._renderer.getActiveCubeFace(),od=this._renderer.getActiveMipmapLevel(),ld=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=n||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,s={magFilter:Si,minFilter:Si,generateMipmaps:!1,type:no,format:di,colorSpace:aa,depthBuffer:!1},o=Nm(e,n,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nm(e,n,s);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=EE(c)),this._blurMaterial=TE(c,e,n)}return o}_compileMaterial(e){const n=new fi(this._lodPlanes[0],e);this._renderer.compile(n,rd)}_sceneToCubeUV(e,n,s,o){const d=new Hn(90,1,n,s),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,S=x.toneMapping;x.getClearColor(Cm),x.toneMapping=br,x.autoClear=!1;const M=new Yl({name:"PMREM.Background",side:Dn,depthWrite:!1,depthTest:!1}),w=new fi(new la,M);let A=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,A=!0):(M.color.copy(Cm),A=!0);for(let g=0;g<6;g++){const U=g%3;U===0?(d.up.set(0,h[g],0),d.lookAt(m[g],0,0)):U===1?(d.up.set(0,0,h[g]),d.lookAt(0,m[g],0)):(d.up.set(0,h[g],0),d.lookAt(0,0,m[g]));const L=this._cubeSize;Ll(o,U*L,g>2?L:0,L,L),x.setRenderTarget(o),A&&x.render(w,d),x.render(e,d)}w.geometry.dispose(),w.material.dispose(),x.toneMapping=S,x.autoClear=_,e.background=y}_textureToCubeUV(e,n){const s=this._renderer,o=e.mapping===ea||e.mapping===ta;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lm());const c=o?this._cubemapMaterial:this._equirectMaterial,u=new fi(this._lodPlanes[0],c),d=c.uniforms;d.envMap.value=e;const h=this._cubeSize;Ll(n,0,0,3*h,2*h),s.setRenderTarget(n),s.render(u,rd)}_applyPMREM(e){const n=this._renderer,s=n.autoClear;n.autoClear=!1;const o=this._lodPlanes.length;for(let c=1;c<o;c++){const u=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),d=Rm[(o-c-1)%Rm.length];this._blur(e,c-1,c,u,d)}n.autoClear=s}_blur(e,n,s,o,c){const u=this._pingPongRenderTarget;this._halfBlur(e,u,n,s,o,"latitudinal",c),this._halfBlur(u,e,s,s,o,"longitudinal",c)}_halfBlur(e,n,s,o,c,u,d){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const x=3,_=new fi(this._lodPlanes[o],m),S=m.uniforms,M=this._sizeLods[s]-1,w=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*ts-1),A=c/w,y=isFinite(c)?1+Math.floor(x*A):ts;y>ts&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ts}`);const g=[];let U=0;for(let O=0;O<ts;++O){const X=O/A,P=Math.exp(-X*X/2);g.push(P),O===0?U+=P:O<y&&(U+=2*P)}for(let O=0;O<g.length;O++)g[O]=g[O]/U;S.envMap.value=e.texture,S.samples.value=y,S.weights.value=g,S.latitudinal.value=u==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:L}=this;S.dTheta.value=w,S.mipInt.value=L-s;const R=this._sizeLods[o],$=3*R*(o>L-$s?o-L+$s:0),B=4*(this._cubeSize-R);Ll(n,$,B,3*R,2*R),h.setRenderTarget(n),h.render(_,rd)}}function EE(r){const e=[],n=[],s=[];let o=r;const c=r-$s+1+bm.length;for(let u=0;u<c;u++){const d=Math.pow(2,o);n.push(d);let h=1/d;u>r-$s?h=bm[u-r+$s-1]:u===0&&(h=0),s.push(h);const m=1/(d-2),x=-m,_=1+m,S=[x,x,_,x,_,_,x,x,_,_,x,_],M=6,w=6,A=3,y=2,g=1,U=new Float32Array(A*w*M),L=new Float32Array(y*w*M),R=new Float32Array(g*w*M);for(let B=0;B<M;B++){const O=B%3*2/3-1,X=B>2?0:-1,P=[O,X,0,O+2/3,X,0,O+2/3,X+1,0,O,X,0,O+2/3,X+1,0,O,X+1,0];U.set(P,A*w*B),L.set(S,y*w*B);const C=[B,B,B,B,B,B];R.set(C,g*w*B)}const $=new Nr;$.setAttribute("position",new Mi(U,A)),$.setAttribute("uv",new Mi(L,y)),$.setAttribute("faceIndex",new Mi(R,g)),e.push($),o>$s&&o--}return{lodPlanes:e,sizeLods:n,sigmas:s}}function Nm(r,e,n){const s=new ss(r,e,n);return s.texture.mapping=Wl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Ll(r,e,n,s,o){r.viewport.set(e,n,s,o),r.scissor.set(e,n,s,o)}function TE(r,e,n){const s=new Float32Array(ts),o=new ie(0,1,0);return new Rr({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:hf(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Lm(){return new Rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:hf(),fragmentShader:`

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
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function Dm(){return new Rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:hf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ar,depthTest:!1,depthWrite:!1})}function hf(){return`

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
	`}function wE(r){let e=new WeakMap,n=null;function s(d){if(d&&d.isTexture){const h=d.mapping,m=h===Ed||h===Td,x=h===ea||h===ta;if(m||x){let _=e.get(d);const S=_!==void 0?_.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return n===null&&(n=new Pm(r)),_=m?n.fromEquirectangular(d,_):n.fromCubemap(d,_),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),_.texture;if(_!==void 0)return _.texture;{const M=d.image;return m&&M&&M.height>0||x&&M&&o(M)?(n===null&&(n=new Pm(r)),_=m?n.fromEquirectangular(d):n.fromCubemap(d),_.texture.pmremVersion=d.pmremVersion,e.set(d,_),d.addEventListener("dispose",c),_.texture):null}}}return d}function o(d){let h=0;const m=6;for(let x=0;x<m;x++)d[x]!==void 0&&h++;return h===m}function c(d){const h=d.target;h.removeEventListener("dispose",c);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function AE(r){const e={};function n(s){if(e[s]!==void 0)return e[s];let o;switch(s){case"WEBGL_depth_texture":o=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=r.getExtension(s)}return e[s]=o,o}return{has:function(s){return n(s)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(s){const o=n(s);return o===null&&Ya("THREE.WebGLRenderer: "+s+" extension not supported."),o}}}function bE(r,e,n,s){const o={},c=new WeakMap;function u(_){const S=_.target;S.index!==null&&e.remove(S.index);for(const w in S.attributes)e.remove(S.attributes[w]);for(const w in S.morphAttributes){const A=S.morphAttributes[w];for(let y=0,g=A.length;y<g;y++)e.remove(A[y])}S.removeEventListener("dispose",u),delete o[S.id];const M=c.get(S);M&&(e.remove(M),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,n.memory.geometries--}function d(_,S){return o[S.id]===!0||(S.addEventListener("dispose",u),o[S.id]=!0,n.memory.geometries++),S}function h(_){const S=_.attributes;for(const w in S)e.update(S[w],r.ARRAY_BUFFER);const M=_.morphAttributes;for(const w in M){const A=M[w];for(let y=0,g=A.length;y<g;y++)e.update(A[y],r.ARRAY_BUFFER)}}function m(_){const S=[],M=_.index,w=_.attributes.position;let A=0;if(M!==null){const U=M.array;A=M.version;for(let L=0,R=U.length;L<R;L+=3){const $=U[L+0],B=U[L+1],O=U[L+2];S.push($,B,B,O,O,$)}}else if(w!==void 0){const U=w.array;A=w.version;for(let L=0,R=U.length/3-1;L<R;L+=3){const $=L+0,B=L+1,O=L+2;S.push($,B,B,O,O,$)}}else return;const y=new(Pg(S)?Fg:Ig)(S,1);y.version=A;const g=c.get(_);g&&e.remove(g),c.set(_,y)}function x(_){const S=c.get(_);if(S){const M=_.index;M!==null&&S.version<M.version&&m(_)}else m(_);return c.get(_)}return{get:d,update:h,getWireframeAttribute:x}}function CE(r,e,n){let s;function o(S){s=S}let c,u;function d(S){c=S.type,u=S.bytesPerElement}function h(S,M){r.drawElements(s,M,c,S*u),n.update(M,s,1)}function m(S,M,w){w!==0&&(r.drawElementsInstanced(s,M,c,S*u,w),n.update(M,s,w))}function x(S,M,w){if(w===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,M,0,c,S,0,w);let y=0;for(let g=0;g<w;g++)y+=M[g];n.update(y,s,1)}function _(S,M,w,A){if(w===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let g=0;g<S.length;g++)m(S[g]/u,M[g],A[g]);else{y.multiDrawElementsInstancedWEBGL(s,M,0,c,S,0,A,0,w);let g=0;for(let U=0;U<w;U++)g+=M[U]*A[U];n.update(g,s,1)}}this.setMode=o,this.setIndex=d,this.render=h,this.renderInstances=m,this.renderMultiDraw=x,this.renderMultiDrawInstances=_}function RE(r){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,u,d){switch(n.calls++,u){case r.TRIANGLES:n.triangles+=d*(c/3);break;case r.LINES:n.lines+=d*(c/2);break;case r.LINE_STRIP:n.lines+=d*(c-1);break;case r.LINE_LOOP:n.lines+=d*c;break;case r.POINTS:n.points+=d*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:o,update:s}}function PE(r,e,n){const s=new WeakMap,o=new Gt;function c(u,d,h){const m=u.morphTargetInfluences,x=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,_=x!==void 0?x.length:0;let S=s.get(d);if(S===void 0||S.count!==_){let C=function(){X.dispose(),s.delete(d),d.removeEventListener("dispose",C)};var M=C;S!==void 0&&S.texture.dispose();const w=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,g=d.morphAttributes.position||[],U=d.morphAttributes.normal||[],L=d.morphAttributes.color||[];let R=0;w===!0&&(R=1),A===!0&&(R=2),y===!0&&(R=3);let $=d.attributes.position.count*R,B=1;$>e.maxTextureSize&&(B=Math.ceil($/e.maxTextureSize),$=e.maxTextureSize);const O=new Float32Array($*B*4*_),X=new Lg(O,$,B,_);X.type=ji,X.needsUpdate=!0;const P=R*4;for(let z=0;z<_;z++){const oe=g[z],te=U[z],fe=L[z],pe=$*B*4*z;for(let ae=0;ae<oe.count;ae++){const ce=ae*P;w===!0&&(o.fromBufferAttribute(oe,ae),O[pe+ce+0]=o.x,O[pe+ce+1]=o.y,O[pe+ce+2]=o.z,O[pe+ce+3]=0),A===!0&&(o.fromBufferAttribute(te,ae),O[pe+ce+4]=o.x,O[pe+ce+5]=o.y,O[pe+ce+6]=o.z,O[pe+ce+7]=0),y===!0&&(o.fromBufferAttribute(fe,ae),O[pe+ce+8]=o.x,O[pe+ce+9]=o.y,O[pe+ce+10]=o.z,O[pe+ce+11]=fe.itemSize===4?o.w:1)}}S={count:_,texture:X,size:new Nt($,B)},s.set(d,S),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,n);else{let w=0;for(let y=0;y<m.length;y++)w+=m[y];const A=d.morphTargetsRelative?1:1-w;h.getUniforms().setValue(r,"morphTargetBaseInfluence",A),h.getUniforms().setValue(r,"morphTargetInfluences",m)}h.getUniforms().setValue(r,"morphTargetsTexture",S.texture,n),h.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function NE(r,e,n,s){let o=new WeakMap;function c(h){const m=s.render.frame,x=h.geometry,_=e.get(h,x);if(o.get(_)!==m&&(e.update(_),o.set(_,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==m&&(n.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&n.update(h.instanceColor,r.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const S=h.skeleton;o.get(S)!==m&&(S.update(),o.set(S,m))}return _}function u(){o=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),n.remove(m.instanceMatrix),m.instanceColor!==null&&n.remove(m.instanceColor)}return{update:c,dispose:u}}class Vg extends Un{constructor(e,n,s,o,c,u,d,h,m,x=Zs){if(x!==Zs&&x!==ia)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");s===void 0&&x===Zs&&(s=rs),s===void 0&&x===ia&&(s=na),super(null,o,c,u,d,h,x,s,m),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=d!==void 0?d:hi,this.minFilter=h!==void 0?h:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Gg=new Un,Um=new Vg(1,1),jg=new Lg,Wg=new my,Xg=new Bg,Im=[],Fm=[],Om=new Float32Array(16),km=new Float32Array(9),Bm=new Float32Array(4);function ca(r,e,n){const s=r[0];if(s<=0||s>0)return r;const o=e*n;let c=Im[o];if(c===void 0&&(c=new Float32Array(o),Im[o]=c),e!==0){s.toArray(c,0);for(let u=1,d=0;u!==e;++u)d+=n,r[u].toArray(c,d)}return c}function Qt(r,e){if(r.length!==e.length)return!1;for(let n=0,s=r.length;n<s;n++)if(r[n]!==e[n])return!1;return!0}function Jt(r,e){for(let n=0,s=e.length;n<s;n++)r[n]=e[n]}function Kl(r,e){let n=Fm[e];n===void 0&&(n=new Int32Array(e),Fm[e]=n);for(let s=0;s!==e;++s)n[s]=r.allocateTextureUnit();return n}function LE(r,e){const n=this.cache;n[0]!==e&&(r.uniform1f(this.addr,e),n[0]=e)}function DE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;r.uniform2fv(this.addr,e),Jt(n,e)}}function UE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Qt(n,e))return;r.uniform3fv(this.addr,e),Jt(n,e)}}function IE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;r.uniform4fv(this.addr,e),Jt(n,e)}}function FE(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(Qt(n,e))return;r.uniformMatrix2fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,s))return;Bm.set(s),r.uniformMatrix2fv(this.addr,!1,Bm),Jt(n,s)}}function OE(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(Qt(n,e))return;r.uniformMatrix3fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,s))return;km.set(s),r.uniformMatrix3fv(this.addr,!1,km),Jt(n,s)}}function kE(r,e){const n=this.cache,s=e.elements;if(s===void 0){if(Qt(n,e))return;r.uniformMatrix4fv(this.addr,!1,e),Jt(n,e)}else{if(Qt(n,s))return;Om.set(s),r.uniformMatrix4fv(this.addr,!1,Om),Jt(n,s)}}function BE(r,e){const n=this.cache;n[0]!==e&&(r.uniform1i(this.addr,e),n[0]=e)}function zE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;r.uniform2iv(this.addr,e),Jt(n,e)}}function HE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;r.uniform3iv(this.addr,e),Jt(n,e)}}function VE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;r.uniform4iv(this.addr,e),Jt(n,e)}}function GE(r,e){const n=this.cache;n[0]!==e&&(r.uniform1ui(this.addr,e),n[0]=e)}function jE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Qt(n,e))return;r.uniform2uiv(this.addr,e),Jt(n,e)}}function WE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Qt(n,e))return;r.uniform3uiv(this.addr,e),Jt(n,e)}}function XE(r,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Qt(n,e))return;r.uniform4uiv(this.addr,e),Jt(n,e)}}function qE(r,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o);let c;this.type===r.SAMPLER_2D_SHADOW?(Um.compareFunction=Rg,c=Um):c=Gg,n.setTexture2D(e||c,o)}function YE(r,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),n.setTexture3D(e||Wg,o)}function $E(r,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),n.setTextureCube(e||Xg,o)}function KE(r,e,n){const s=this.cache,o=n.allocateTextureUnit();s[0]!==o&&(r.uniform1i(this.addr,o),s[0]=o),n.setTexture2DArray(e||jg,o)}function ZE(r){switch(r){case 5126:return LE;case 35664:return DE;case 35665:return UE;case 35666:return IE;case 35674:return FE;case 35675:return OE;case 35676:return kE;case 5124:case 35670:return BE;case 35667:case 35671:return zE;case 35668:case 35672:return HE;case 35669:case 35673:return VE;case 5125:return GE;case 36294:return jE;case 36295:return WE;case 36296:return XE;case 35678:case 36198:case 36298:case 36306:case 35682:return qE;case 35679:case 36299:case 36307:return YE;case 35680:case 36300:case 36308:case 36293:return $E;case 36289:case 36303:case 36311:case 36292:return KE}}function QE(r,e){r.uniform1fv(this.addr,e)}function JE(r,e){const n=ca(e,this.size,2);r.uniform2fv(this.addr,n)}function e1(r,e){const n=ca(e,this.size,3);r.uniform3fv(this.addr,n)}function t1(r,e){const n=ca(e,this.size,4);r.uniform4fv(this.addr,n)}function n1(r,e){const n=ca(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function i1(r,e){const n=ca(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function r1(r,e){const n=ca(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function s1(r,e){r.uniform1iv(this.addr,e)}function a1(r,e){r.uniform2iv(this.addr,e)}function o1(r,e){r.uniform3iv(this.addr,e)}function l1(r,e){r.uniform4iv(this.addr,e)}function c1(r,e){r.uniform1uiv(this.addr,e)}function u1(r,e){r.uniform2uiv(this.addr,e)}function d1(r,e){r.uniform3uiv(this.addr,e)}function f1(r,e){r.uniform4uiv(this.addr,e)}function h1(r,e,n){const s=this.cache,o=e.length,c=Kl(n,o);Qt(s,c)||(r.uniform1iv(this.addr,c),Jt(s,c));for(let u=0;u!==o;++u)n.setTexture2D(e[u]||Gg,c[u])}function p1(r,e,n){const s=this.cache,o=e.length,c=Kl(n,o);Qt(s,c)||(r.uniform1iv(this.addr,c),Jt(s,c));for(let u=0;u!==o;++u)n.setTexture3D(e[u]||Wg,c[u])}function m1(r,e,n){const s=this.cache,o=e.length,c=Kl(n,o);Qt(s,c)||(r.uniform1iv(this.addr,c),Jt(s,c));for(let u=0;u!==o;++u)n.setTextureCube(e[u]||Xg,c[u])}function g1(r,e,n){const s=this.cache,o=e.length,c=Kl(n,o);Qt(s,c)||(r.uniform1iv(this.addr,c),Jt(s,c));for(let u=0;u!==o;++u)n.setTexture2DArray(e[u]||jg,c[u])}function v1(r){switch(r){case 5126:return QE;case 35664:return JE;case 35665:return e1;case 35666:return t1;case 35674:return n1;case 35675:return i1;case 35676:return r1;case 5124:case 35670:return s1;case 35667:case 35671:return a1;case 35668:case 35672:return o1;case 35669:case 35673:return l1;case 5125:return c1;case 36294:return u1;case 36295:return d1;case 36296:return f1;case 35678:case 36198:case 36298:case 36306:case 35682:return h1;case 35679:case 36299:case 36307:return p1;case 35680:case 36300:case 36308:case 36293:return m1;case 36289:case 36303:case 36311:case 36292:return g1}}class x1{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.setValue=ZE(n.type)}}class _1{constructor(e,n,s){this.id=e,this.addr=s,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=v1(n.type)}}class y1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,s){const o=this.seq;for(let c=0,u=o.length;c!==u;++c){const d=o[c];d.setValue(e,n[d.id],s)}}}const cd=/(\w+)(\])?(\[|\.)?/g;function zm(r,e){r.seq.push(e),r.map[e.id]=e}function S1(r,e,n){const s=r.name,o=s.length;for(cd.lastIndex=0;;){const c=cd.exec(s),u=cd.lastIndex;let d=c[1];const h=c[2]==="]",m=c[3];if(h&&(d=d|0),m===void 0||m==="["&&u+2===o){zm(n,m===void 0?new x1(d,r,e):new _1(d,r,e));break}else{let _=n.map[d];_===void 0&&(_=new y1(d),zm(n,_)),n=_}}}class zl{constructor(e,n){this.seq=[],this.map={};const s=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<s;++o){const c=e.getActiveUniform(n,o),u=e.getUniformLocation(n,c.name);S1(c,u,this)}}setValue(e,n,s,o){const c=this.map[n];c!==void 0&&c.setValue(e,s,o)}setOptional(e,n,s){const o=n[s];o!==void 0&&this.setValue(e,s,o)}static upload(e,n,s,o){for(let c=0,u=n.length;c!==u;++c){const d=n[c],h=s[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,o)}}static seqWithValue(e,n){const s=[];for(let o=0,c=e.length;o!==c;++o){const u=e[o];u.id in n&&s.push(u)}return s}}function Hm(r,e,n){const s=r.createShader(e);return r.shaderSource(s,n),r.compileShader(s),s}const M1=37297;let E1=0;function T1(r,e){const n=r.split(`
`),s=[],o=Math.max(e-6,0),c=Math.min(e+6,n.length);for(let u=o;u<c;u++){const d=u+1;s.push(`${d===e?">":" "} ${d}: ${n[u]}`)}return s.join(`
`)}const Vm=new ot;function w1(r){_t._getMatrix(Vm,_t.workingColorSpace,r);const e=`mat3( ${Vm.elements.map(n=>n.toFixed(4))} )`;switch(_t.getTransfer(r)){case Xl:return[e,"LinearTransferOETF"];case Ct:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Gm(r,e,n){const s=r.getShaderParameter(e,r.COMPILE_STATUS),o=r.getShaderInfoLog(e).trim();if(s&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return n.toUpperCase()+`

`+o+`

`+T1(r.getShaderSource(e),u)}else return o}function A1(r,e){const n=w1(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function b1(r,e){let n;switch(e){case H_:n="Linear";break;case V_:n="Reinhard";break;case G_:n="Cineon";break;case j_:n="ACESFilmic";break;case X_:n="AgX";break;case q_:n="Neutral";break;case W_:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Dl=new ie;function C1(){_t.getLuminanceCoefficients(Dl);const r=Dl.x.toFixed(4),e=Dl.y.toFixed(4),n=Dl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function R1(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter($a).join(`
`)}function P1(r){const e=[];for(const n in r){const s=r[n];s!==!1&&e.push("#define "+n+" "+s)}return e.join(`
`)}function N1(r,e){const n={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let o=0;o<s;o++){const c=r.getActiveAttrib(e,o),u=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),n[u]={type:c.type,location:r.getAttribLocation(e,u),locationSize:d}}return n}function $a(r){return r!==""}function jm(r,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Wm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const L1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ef(r){return r.replace(L1,U1)}const D1=new Map;function U1(r,e){let n=lt[e];if(n===void 0){const s=D1.get(e);if(s!==void 0)n=lt[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return ef(n)}const I1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xm(r){return r.replace(I1,F1)}function F1(r,e,n,s){let o="";for(let c=parseInt(e);c<parseInt(n);c++)o+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return o}function qm(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}function O1(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===gg?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===y_?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Vi&&(e="SHADOWMAP_TYPE_VSM"),e}function k1(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case ea:case ta:e="ENVMAP_TYPE_CUBE";break;case Wl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B1(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case ta:e="ENVMAP_MODE_REFRACTION";break}return e}function z1(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vg:e="ENVMAP_BLENDING_MULTIPLY";break;case B_:e="ENVMAP_BLENDING_MIX";break;case z_:e="ENVMAP_BLENDING_ADD";break}return e}function H1(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:s,maxMip:n}}function V1(r,e,n,s){const o=r.getContext(),c=n.defines;let u=n.vertexShader,d=n.fragmentShader;const h=O1(n),m=k1(n),x=B1(n),_=z1(n),S=H1(n),M=R1(n),w=P1(c),A=o.createProgram();let y,g,U=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter($a).join(`
`),y.length>0&&(y+=`
`),g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w].filter($a).join(`
`),g.length>0&&(g+=`
`)):(y=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+x:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter($a).join(`
`),g=[qm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,w,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+m:"",n.envMap?"#define "+x:"",n.envMap?"#define "+_:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+h:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==br?"#define TONE_MAPPING":"",n.toneMapping!==br?lt.tonemapping_pars_fragment:"",n.toneMapping!==br?b1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",lt.colorspace_pars_fragment,A1("linearToOutputTexel",n.outputColorSpace),C1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter($a).join(`
`)),u=ef(u),u=jm(u,n),u=Wm(u,n),d=ef(d),d=jm(d,n),d=Wm(d,n),u=Xm(u),d=Xm(d),n.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,g=["#define varying in",n.glslVersion===am?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===am?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const L=U+y+u,R=U+g+d,$=Hm(o,o.VERTEX_SHADER,L),B=Hm(o,o.FRAGMENT_SHADER,R);o.attachShader(A,$),o.attachShader(A,B),n.index0AttributeName!==void 0?o.bindAttribLocation(A,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(A,0,"position"),o.linkProgram(A);function O(z){if(r.debug.checkShaderErrors){const oe=o.getProgramInfoLog(A).trim(),te=o.getShaderInfoLog($).trim(),fe=o.getShaderInfoLog(B).trim();let pe=!0,ae=!0;if(o.getProgramParameter(A,o.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,A,$,B);else{const ce=Gm(o,$,"vertex"),k=Gm(o,B,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(A,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+oe+`
`+ce+`
`+k)}else oe!==""?console.warn("THREE.WebGLProgram: Program Info Log:",oe):(te===""||fe==="")&&(ae=!1);ae&&(z.diagnostics={runnable:pe,programLog:oe,vertexShader:{log:te,prefix:y},fragmentShader:{log:fe,prefix:g}})}o.deleteShader($),o.deleteShader(B),X=new zl(o,A),P=N1(o,A)}let X;this.getUniforms=function(){return X===void 0&&O(this),X};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=o.getProgramParameter(A,M1)),C},this.destroy=function(){s.releaseStatesOfProgram(this),o.deleteProgram(A),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=E1++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=$,this.fragmentShader=B,this}let G1=0;class j1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,s=e.fragmentShader,o=this._getShaderStage(n),c=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(c)===!1&&(u.add(c),c.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const s of n)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let s=n.get(e);return s===void 0&&(s=new Set,n.set(e,s)),s}_getShaderStage(e){const n=this.shaderCache;let s=n.get(e);return s===void 0&&(s=new W1(e),n.set(e,s)),s}}class W1{constructor(e){this.id=G1++,this.code=e,this.usedTimes=0}}function X1(r,e,n,s,o,c,u){const d=new Dg,h=new j1,m=new Set,x=[],_=o.logarithmicDepthBuffer,S=o.vertexTextures;let M=o.precision;const w={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(P){return m.add(P),P===0?"uv":`uv${P}`}function y(P,C,z,oe,te){const fe=oe.fog,pe=te.geometry,ae=P.isMeshStandardMaterial?oe.environment:null,ce=(P.isMeshStandardMaterial?n:e).get(P.envMap||ae),k=ce&&ce.mapping===Wl?ce.image.height:null,le=w[P.type];P.precision!==null&&(M=o.getMaxPrecision(P.precision),M!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",M,"instead."));const se=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,I=se!==void 0?se.length:0;let ne=0;pe.morphAttributes.position!==void 0&&(ne=1),pe.morphAttributes.normal!==void 0&&(ne=2),pe.morphAttributes.color!==void 0&&(ne=3);let Ue,Z,ue,Ee;if(le){const vt=yi[le];Ue=vt.vertexShader,Z=vt.fragmentShader}else Ue=P.vertexShader,Z=P.fragmentShader,h.update(P),ue=h.getVertexShaderID(P),Ee=h.getFragmentShaderID(P);const _e=r.getRenderTarget(),Ae=r.state.buffers.depth.getReversed(),Ie=te.isInstancedMesh===!0,Qe=te.isBatchedMesh===!0,bt=!!P.map,pt=!!P.matcap,Lt=!!ce,W=!!P.aoMap,mn=!!P.lightMap,ht=!!P.bumpMap,ut=!!P.normalMap,$e=!!P.displacementMap,wt=!!P.emissiveMap,Ye=!!P.metalnessMap,N=!!P.roughnessMap,T=P.anisotropy>0,K=P.clearcoat>0,me=P.dispersion>0,ve=P.iridescence>0,de=P.sheen>0,Ge=P.transmission>0,Ce=T&&!!P.anisotropyMap,Fe=K&&!!P.clearcoatMap,ct=K&&!!P.clearcoatNormalMap,Se=K&&!!P.clearcoatRoughnessMap,ke=ve&&!!P.iridescenceMap,Je=ve&&!!P.iridescenceThicknessMap,et=de&&!!P.sheenColorMap,Be=de&&!!P.sheenRoughnessMap,dt=!!P.specularMap,rt=!!P.specularColorMap,Tt=!!P.specularIntensityMap,V=Ge&&!!P.transmissionMap,Re=Ge&&!!P.thicknessMap,re=!!P.gradientMap,he=!!P.alphaMap,Le=P.alphaTest>0,Ne=!!P.alphaHash,st=!!P.extensions;let Ut=br;P.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ut=r.toneMapping);const Yt={shaderID:le,shaderType:P.type,shaderName:P.name,vertexShader:Ue,fragmentShader:Z,defines:P.defines,customVertexShaderID:ue,customFragmentShaderID:Ee,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:M,batching:Qe,batchingColor:Qe&&te._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&te.instanceColor!==null,instancingMorph:Ie&&te.morphTexture!==null,supportsVertexTextures:S,outputColorSpace:_e===null?r.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:aa,alphaToCoverage:!!P.alphaToCoverage,map:bt,matcap:pt,envMap:Lt,envMapMode:Lt&&ce.mapping,envMapCubeUVHeight:k,aoMap:W,lightMap:mn,bumpMap:ht,normalMap:ut,displacementMap:S&&$e,emissiveMap:wt,normalMapObjectSpace:ut&&P.normalMapType===Q_,normalMapTangentSpace:ut&&P.normalMapType===Z_,metalnessMap:Ye,roughnessMap:N,anisotropy:T,anisotropyMap:Ce,clearcoat:K,clearcoatMap:Fe,clearcoatNormalMap:ct,clearcoatRoughnessMap:Se,dispersion:me,iridescence:ve,iridescenceMap:ke,iridescenceThicknessMap:Je,sheen:de,sheenColorMap:et,sheenRoughnessMap:Be,specularMap:dt,specularColorMap:rt,specularIntensityMap:Tt,transmission:Ge,transmissionMap:V,thicknessMap:Re,gradientMap:re,opaque:P.transparent===!1&&P.blending===Ks&&P.alphaToCoverage===!1,alphaMap:he,alphaTest:Le,alphaHash:Ne,combine:P.combine,mapUv:bt&&A(P.map.channel),aoMapUv:W&&A(P.aoMap.channel),lightMapUv:mn&&A(P.lightMap.channel),bumpMapUv:ht&&A(P.bumpMap.channel),normalMapUv:ut&&A(P.normalMap.channel),displacementMapUv:$e&&A(P.displacementMap.channel),emissiveMapUv:wt&&A(P.emissiveMap.channel),metalnessMapUv:Ye&&A(P.metalnessMap.channel),roughnessMapUv:N&&A(P.roughnessMap.channel),anisotropyMapUv:Ce&&A(P.anisotropyMap.channel),clearcoatMapUv:Fe&&A(P.clearcoatMap.channel),clearcoatNormalMapUv:ct&&A(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&A(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ke&&A(P.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&A(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&A(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&A(P.sheenRoughnessMap.channel),specularMapUv:dt&&A(P.specularMap.channel),specularColorMapUv:rt&&A(P.specularColorMap.channel),specularIntensityMapUv:Tt&&A(P.specularIntensityMap.channel),transmissionMapUv:V&&A(P.transmissionMap.channel),thicknessMapUv:Re&&A(P.thicknessMap.channel),alphaMapUv:he&&A(P.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ut||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!pe.attributes.uv&&(bt||he),fog:!!fe,useFog:P.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ae,skinning:te.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:I,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:r.shadowMap.enabled&&z.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ut,decodeVideoTexture:bt&&P.map.isVideoTexture===!0&&_t.getTransfer(P.map.colorSpace)===Ct,decodeVideoTextureEmissive:wt&&P.emissiveMap.isVideoTexture===!0&&_t.getTransfer(P.emissiveMap.colorSpace)===Ct,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===Gi,flipSided:P.side===Dn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:st&&P.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(st&&P.extensions.multiDraw===!0||Qe)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Yt.vertexUv1s=m.has(1),Yt.vertexUv2s=m.has(2),Yt.vertexUv3s=m.has(3),m.clear(),Yt}function g(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)C.push(z),C.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(U(C,P),L(C,P),C.push(r.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function U(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function L(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const C=w[P.type];let z;if(C){const oe=yi[C];z=Cy.clone(oe.uniforms)}else z=P.uniforms;return z}function $(P,C){let z;for(let oe=0,te=x.length;oe<te;oe++){const fe=x[oe];if(fe.cacheKey===C){z=fe,++z.usedTimes;break}}return z===void 0&&(z=new V1(r,C,P,c),x.push(z)),z}function B(P){if(--P.usedTimes===0){const C=x.indexOf(P);x[C]=x[x.length-1],x.pop(),P.destroy()}}function O(P){h.remove(P)}function X(){h.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:R,acquireProgram:$,releaseProgram:B,releaseShaderCache:O,programs:x,dispose:X}}function q1(){let r=new WeakMap;function e(u){return r.has(u)}function n(u){let d=r.get(u);return d===void 0&&(d={},r.set(u,d)),d}function s(u){r.delete(u)}function o(u,d,h){r.get(u)[d]=h}function c(){r=new WeakMap}return{has:e,get:n,remove:s,update:o,dispose:c}}function Y1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Ym(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function $m(){const r=[];let e=0;const n=[],s=[],o=[];function c(){e=0,n.length=0,s.length=0,o.length=0}function u(_,S,M,w,A,y){let g=r[e];return g===void 0?(g={id:_.id,object:_,geometry:S,material:M,groupOrder:w,renderOrder:_.renderOrder,z:A,group:y},r[e]=g):(g.id=_.id,g.object=_,g.geometry=S,g.material=M,g.groupOrder=w,g.renderOrder=_.renderOrder,g.z=A,g.group=y),e++,g}function d(_,S,M,w,A,y){const g=u(_,S,M,w,A,y);M.transmission>0?s.push(g):M.transparent===!0?o.push(g):n.push(g)}function h(_,S,M,w,A,y){const g=u(_,S,M,w,A,y);M.transmission>0?s.unshift(g):M.transparent===!0?o.unshift(g):n.unshift(g)}function m(_,S){n.length>1&&n.sort(_||Y1),s.length>1&&s.sort(S||Ym),o.length>1&&o.sort(S||Ym)}function x(){for(let _=e,S=r.length;_<S;_++){const M=r[_];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:n,transmissive:s,transparent:o,init:c,push:d,unshift:h,finish:x,sort:m}}function $1(){let r=new WeakMap;function e(s,o){const c=r.get(s);let u;return c===void 0?(u=new $m,r.set(s,[u])):o>=c.length?(u=new $m,c.push(u)):u=c[o],u}function n(){r=new WeakMap}return{get:e,dispose:n}}function K1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new ie,color:new Rt};break;case"SpotLight":n={position:new ie,direction:new ie,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ie,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ie,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":n={color:new Rt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=n,n}}}function Z1(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=n,n}}}let Q1=0;function J1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function eT(r){const e=new K1,n=Z1(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ie);const o=new ie,c=new qt,u=new qt;function d(m){let x=0,_=0,S=0;for(let P=0;P<9;P++)s.probe[P].set(0,0,0);let M=0,w=0,A=0,y=0,g=0,U=0,L=0,R=0,$=0,B=0,O=0;m.sort(J1);for(let P=0,C=m.length;P<C;P++){const z=m[P],oe=z.color,te=z.intensity,fe=z.distance,pe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)x+=oe.r*te,_+=oe.g*te,S+=oe.b*te;else if(z.isLightProbe){for(let ae=0;ae<9;ae++)s.probe[ae].addScaledVector(z.sh.coefficients[ae],te);O++}else if(z.isDirectionalLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ce=z.shadow,k=n.get(z);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,s.directionalShadow[M]=k,s.directionalShadowMap[M]=pe,s.directionalShadowMatrix[M]=z.shadow.matrix,U++}s.directional[M]=ae,M++}else if(z.isSpotLight){const ae=e.get(z);ae.position.setFromMatrixPosition(z.matrixWorld),ae.color.copy(oe).multiplyScalar(te),ae.distance=fe,ae.coneCos=Math.cos(z.angle),ae.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ae.decay=z.decay,s.spot[A]=ae;const ce=z.shadow;if(z.map&&(s.spotLightMap[$]=z.map,$++,ce.updateMatrices(z),z.castShadow&&B++),s.spotLightMatrix[A]=ce.matrix,z.castShadow){const k=n.get(z);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,s.spotShadow[A]=k,s.spotShadowMap[A]=pe,R++}A++}else if(z.isRectAreaLight){const ae=e.get(z);ae.color.copy(oe).multiplyScalar(te),ae.halfWidth.set(z.width*.5,0,0),ae.halfHeight.set(0,z.height*.5,0),s.rectArea[y]=ae,y++}else if(z.isPointLight){const ae=e.get(z);if(ae.color.copy(z.color).multiplyScalar(z.intensity),ae.distance=z.distance,ae.decay=z.decay,z.castShadow){const ce=z.shadow,k=n.get(z);k.shadowIntensity=ce.intensity,k.shadowBias=ce.bias,k.shadowNormalBias=ce.normalBias,k.shadowRadius=ce.radius,k.shadowMapSize=ce.mapSize,k.shadowCameraNear=ce.camera.near,k.shadowCameraFar=ce.camera.far,s.pointShadow[w]=k,s.pointShadowMap[w]=pe,s.pointShadowMatrix[w]=z.shadow.matrix,L++}s.point[w]=ae,w++}else if(z.isHemisphereLight){const ae=e.get(z);ae.skyColor.copy(z.color).multiplyScalar(te),ae.groundColor.copy(z.groundColor).multiplyScalar(te),s.hemi[g]=ae,g++}}y>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=x,s.ambient[1]=_,s.ambient[2]=S;const X=s.hash;(X.directionalLength!==M||X.pointLength!==w||X.spotLength!==A||X.rectAreaLength!==y||X.hemiLength!==g||X.numDirectionalShadows!==U||X.numPointShadows!==L||X.numSpotShadows!==R||X.numSpotMaps!==$||X.numLightProbes!==O)&&(s.directional.length=M,s.spot.length=A,s.rectArea.length=y,s.point.length=w,s.hemi.length=g,s.directionalShadow.length=U,s.directionalShadowMap.length=U,s.pointShadow.length=L,s.pointShadowMap.length=L,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=U,s.pointShadowMatrix.length=L,s.spotLightMatrix.length=R+$-B,s.spotLightMap.length=$,s.numSpotLightShadowsWithMaps=B,s.numLightProbes=O,X.directionalLength=M,X.pointLength=w,X.spotLength=A,X.rectAreaLength=y,X.hemiLength=g,X.numDirectionalShadows=U,X.numPointShadows=L,X.numSpotShadows=R,X.numSpotMaps=$,X.numLightProbes=O,s.version=Q1++)}function h(m,x){let _=0,S=0,M=0,w=0,A=0;const y=x.matrixWorldInverse;for(let g=0,U=m.length;g<U;g++){const L=m[g];if(L.isDirectionalLight){const R=s.directional[_];R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(L.isSpotLight){const R=s.spot[M];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(L.matrixWorld),o.setFromMatrixPosition(L.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),M++}else if(L.isRectAreaLight){const R=s.rectArea[w];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),u.identity(),c.copy(L.matrixWorld),c.premultiply(y),u.extractRotation(c),R.halfWidth.set(L.width*.5,0,0),R.halfHeight.set(0,L.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),w++}else if(L.isPointLight){const R=s.point[S];R.position.setFromMatrixPosition(L.matrixWorld),R.position.applyMatrix4(y),S++}else if(L.isHemisphereLight){const R=s.hemi[A];R.direction.setFromMatrixPosition(L.matrixWorld),R.direction.transformDirection(y),A++}}}return{setup:d,setupView:h,state:s}}function Km(r){const e=new eT(r),n=[],s=[];function o(x){m.camera=x,n.length=0,s.length=0}function c(x){n.push(x)}function u(x){s.push(x)}function d(){e.setup(n)}function h(x){e.setupView(n,x)}const m={lightsArray:n,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:m,setupLights:d,setupLightsView:h,pushLight:c,pushShadow:u}}function tT(r){let e=new WeakMap;function n(o,c=0){const u=e.get(o);let d;return u===void 0?(d=new Km(r),e.set(o,[d])):c>=u.length?(d=new Km(r),u.push(d)):d=u[c],d}function s(){e=new WeakMap}return{get:n,dispose:s}}class nT extends ql{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=$_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iT extends ql{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sT=`uniform sampler2D shadow_pass;
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
}`;function aT(r,e,n){let s=new zg;const o=new Nt,c=new Nt,u=new Gt,d=new nT({depthPacking:K_}),h=new iT,m={},x=n.maxTextureSize,_={[Cr]:Dn,[Dn]:Cr,[Gi]:Gi},S=new Rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:rT,fragmentShader:sT}),M=S.clone();M.defines.HORIZONTAL_PASS=1;const w=new Nr;w.setAttribute("position",new Mi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new fi(w,S),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gg;let g=this.type;this.render=function(B,O,X){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||B.length===0)return;const P=r.getRenderTarget(),C=r.getActiveCubeFace(),z=r.getActiveMipmapLevel(),oe=r.state;oe.setBlending(Ar),oe.buffers.color.setClear(1,1,1,1),oe.buffers.depth.setTest(!0),oe.setScissorTest(!1);const te=g!==Vi&&this.type===Vi,fe=g===Vi&&this.type!==Vi;for(let pe=0,ae=B.length;pe<ae;pe++){const ce=B[pe],k=ce.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;o.copy(k.mapSize);const le=k.getFrameExtents();if(o.multiply(le),c.copy(k.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(c.x=Math.floor(x/le.x),o.x=c.x*le.x,k.mapSize.x=c.x),o.y>x&&(c.y=Math.floor(x/le.y),o.y=c.y*le.y,k.mapSize.y=c.y)),k.map===null||te===!0||fe===!0){const I=this.type!==Vi?{minFilter:hi,magFilter:hi}:{};k.map!==null&&k.map.dispose(),k.map=new ss(o.x,o.y,I),k.map.texture.name=ce.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const se=k.getViewportCount();for(let I=0;I<se;I++){const ne=k.getViewport(I);u.set(c.x*ne.x,c.y*ne.y,c.x*ne.z,c.y*ne.w),oe.viewport(u),k.updateMatrices(ce,I),s=k.getFrustum(),R(O,X,k.camera,ce,this.type)}k.isPointLightShadow!==!0&&this.type===Vi&&U(k,X),k.needsUpdate=!1}g=this.type,y.needsUpdate=!1,r.setRenderTarget(P,C,z)};function U(B,O){const X=e.update(A);S.defines.VSM_SAMPLES!==B.blurSamples&&(S.defines.VSM_SAMPLES=B.blurSamples,M.defines.VSM_SAMPLES=B.blurSamples,S.needsUpdate=!0,M.needsUpdate=!0),B.mapPass===null&&(B.mapPass=new ss(o.x,o.y)),S.uniforms.shadow_pass.value=B.map.texture,S.uniforms.resolution.value=B.mapSize,S.uniforms.radius.value=B.radius,r.setRenderTarget(B.mapPass),r.clear(),r.renderBufferDirect(O,null,X,S,A,null),M.uniforms.shadow_pass.value=B.mapPass.texture,M.uniforms.resolution.value=B.mapSize,M.uniforms.radius.value=B.radius,r.setRenderTarget(B.map),r.clear(),r.renderBufferDirect(O,null,X,M,A,null)}function L(B,O,X,P){let C=null;const z=X.isPointLight===!0?B.customDistanceMaterial:B.customDepthMaterial;if(z!==void 0)C=z;else if(C=X.isPointLight===!0?h:d,r.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const oe=C.uuid,te=O.uuid;let fe=m[oe];fe===void 0&&(fe={},m[oe]=fe);let pe=fe[te];pe===void 0&&(pe=C.clone(),fe[te]=pe,O.addEventListener("dispose",$)),C=pe}if(C.visible=O.visible,C.wireframe=O.wireframe,P===Vi?C.side=O.shadowSide!==null?O.shadowSide:O.side:C.side=O.shadowSide!==null?O.shadowSide:_[O.side],C.alphaMap=O.alphaMap,C.alphaTest=O.alphaTest,C.map=O.map,C.clipShadows=O.clipShadows,C.clippingPlanes=O.clippingPlanes,C.clipIntersection=O.clipIntersection,C.displacementMap=O.displacementMap,C.displacementScale=O.displacementScale,C.displacementBias=O.displacementBias,C.wireframeLinewidth=O.wireframeLinewidth,C.linewidth=O.linewidth,X.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const oe=r.properties.get(C);oe.light=X}return C}function R(B,O,X,P,C){if(B.visible===!1)return;if(B.layers.test(O.layers)&&(B.isMesh||B.isLine||B.isPoints)&&(B.castShadow||B.receiveShadow&&C===Vi)&&(!B.frustumCulled||s.intersectsObject(B))){B.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,B.matrixWorld);const te=e.update(B),fe=B.material;if(Array.isArray(fe)){const pe=te.groups;for(let ae=0,ce=pe.length;ae<ce;ae++){const k=pe[ae],le=fe[k.materialIndex];if(le&&le.visible){const se=L(B,le,P,C);B.onBeforeShadow(r,B,O,X,te,se,k),r.renderBufferDirect(X,null,te,se,B,k),B.onAfterShadow(r,B,O,X,te,se,k)}}}else if(fe.visible){const pe=L(B,fe,P,C);B.onBeforeShadow(r,B,O,X,te,pe,null),r.renderBufferDirect(X,null,te,pe,B,null),B.onAfterShadow(r,B,O,X,te,pe,null)}}const oe=B.children;for(let te=0,fe=oe.length;te<fe;te++)R(oe[te],O,X,P,C)}function $(B){B.target.removeEventListener("dispose",$);for(const X in m){const P=m[X],C=B.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const oT={[gd]:vd,[xd]:Sd,[_d]:Md,[Js]:yd,[vd]:gd,[Sd]:xd,[Md]:_d,[yd]:Js};function lT(r,e){function n(){let V=!1;const Re=new Gt;let re=null;const he=new Gt(0,0,0,0);return{setMask:function(Le){re!==Le&&!V&&(r.colorMask(Le,Le,Le,Le),re=Le)},setLocked:function(Le){V=Le},setClear:function(Le,Ne,st,Ut,Yt){Yt===!0&&(Le*=Ut,Ne*=Ut,st*=Ut),Re.set(Le,Ne,st,Ut),he.equals(Re)===!1&&(r.clearColor(Le,Ne,st,Ut),he.copy(Re))},reset:function(){V=!1,re=null,he.set(-1,0,0,0)}}}function s(){let V=!1,Re=!1,re=null,he=null,Le=null;return{setReversed:function(Ne){if(Re!==Ne){const st=e.get("EXT_clip_control");Re?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Le;Le=null,this.setClear(Ut)}Re=Ne},getReversed:function(){return Re},setTest:function(Ne){Ne?_e(r.DEPTH_TEST):Ae(r.DEPTH_TEST)},setMask:function(Ne){re!==Ne&&!V&&(r.depthMask(Ne),re=Ne)},setFunc:function(Ne){if(Re&&(Ne=oT[Ne]),he!==Ne){switch(Ne){case gd:r.depthFunc(r.NEVER);break;case vd:r.depthFunc(r.ALWAYS);break;case xd:r.depthFunc(r.LESS);break;case Js:r.depthFunc(r.LEQUAL);break;case _d:r.depthFunc(r.EQUAL);break;case yd:r.depthFunc(r.GEQUAL);break;case Sd:r.depthFunc(r.GREATER);break;case Md:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}he=Ne}},setLocked:function(Ne){V=Ne},setClear:function(Ne){Le!==Ne&&(Re&&(Ne=1-Ne),r.clearDepth(Ne),Le=Ne)},reset:function(){V=!1,re=null,he=null,Le=null,Re=!1}}}function o(){let V=!1,Re=null,re=null,he=null,Le=null,Ne=null,st=null,Ut=null,Yt=null;return{setTest:function(vt){V||(vt?_e(r.STENCIL_TEST):Ae(r.STENCIL_TEST))},setMask:function(vt){Re!==vt&&!V&&(r.stencilMask(vt),Re=vt)},setFunc:function(vt,Mn,gn){(re!==vt||he!==Mn||Le!==gn)&&(r.stencilFunc(vt,Mn,gn),re=vt,he=Mn,Le=gn)},setOp:function(vt,Mn,gn){(Ne!==vt||st!==Mn||Ut!==gn)&&(r.stencilOp(vt,Mn,gn),Ne=vt,st=Mn,Ut=gn)},setLocked:function(vt){V=vt},setClear:function(vt){Yt!==vt&&(r.clearStencil(vt),Yt=vt)},reset:function(){V=!1,Re=null,re=null,he=null,Le=null,Ne=null,st=null,Ut=null,Yt=null}}}const c=new n,u=new s,d=new o,h=new WeakMap,m=new WeakMap;let x={},_={},S=new WeakMap,M=[],w=null,A=!1,y=null,g=null,U=null,L=null,R=null,$=null,B=null,O=new Rt(0,0,0),X=0,P=!1,C=null,z=null,oe=null,te=null,fe=null;const pe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,ce=0;const k=r.getParameter(r.VERSION);k.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(k)[1]),ae=ce>=1):k.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),ae=ce>=2);let le=null,se={};const I=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Ue=new Gt().fromArray(I),Z=new Gt().fromArray(ne);function ue(V,Re,re,he){const Le=new Uint8Array(4),Ne=r.createTexture();r.bindTexture(V,Ne),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let st=0;st<re;st++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(Re,0,r.RGBA,1,1,he,0,r.RGBA,r.UNSIGNED_BYTE,Le):r.texImage2D(Re+st,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Le);return Ne}const Ee={};Ee[r.TEXTURE_2D]=ue(r.TEXTURE_2D,r.TEXTURE_2D,1),Ee[r.TEXTURE_CUBE_MAP]=ue(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[r.TEXTURE_2D_ARRAY]=ue(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Ee[r.TEXTURE_3D]=ue(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),u.setClear(1),d.setClear(0),_e(r.DEPTH_TEST),u.setFunc(Js),ht(!1),ut(em),_e(r.CULL_FACE),W(Ar);function _e(V){x[V]!==!0&&(r.enable(V),x[V]=!0)}function Ae(V){x[V]!==!1&&(r.disable(V),x[V]=!1)}function Ie(V,Re){return _[V]!==Re?(r.bindFramebuffer(V,Re),_[V]=Re,V===r.DRAW_FRAMEBUFFER&&(_[r.FRAMEBUFFER]=Re),V===r.FRAMEBUFFER&&(_[r.DRAW_FRAMEBUFFER]=Re),!0):!1}function Qe(V,Re){let re=M,he=!1;if(V){re=S.get(Re),re===void 0&&(re=[],S.set(Re,re));const Le=V.textures;if(re.length!==Le.length||re[0]!==r.COLOR_ATTACHMENT0){for(let Ne=0,st=Le.length;Ne<st;Ne++)re[Ne]=r.COLOR_ATTACHMENT0+Ne;re.length=Le.length,he=!0}}else re[0]!==r.BACK&&(re[0]=r.BACK,he=!0);he&&r.drawBuffers(re)}function bt(V){return w!==V?(r.useProgram(V),w=V,!0):!1}const pt={[es]:r.FUNC_ADD,[M_]:r.FUNC_SUBTRACT,[E_]:r.FUNC_REVERSE_SUBTRACT};pt[T_]=r.MIN,pt[w_]=r.MAX;const Lt={[A_]:r.ZERO,[b_]:r.ONE,[C_]:r.SRC_COLOR,[pd]:r.SRC_ALPHA,[U_]:r.SRC_ALPHA_SATURATE,[L_]:r.DST_COLOR,[P_]:r.DST_ALPHA,[R_]:r.ONE_MINUS_SRC_COLOR,[md]:r.ONE_MINUS_SRC_ALPHA,[D_]:r.ONE_MINUS_DST_COLOR,[N_]:r.ONE_MINUS_DST_ALPHA,[I_]:r.CONSTANT_COLOR,[F_]:r.ONE_MINUS_CONSTANT_COLOR,[O_]:r.CONSTANT_ALPHA,[k_]:r.ONE_MINUS_CONSTANT_ALPHA};function W(V,Re,re,he,Le,Ne,st,Ut,Yt,vt){if(V===Ar){A===!0&&(Ae(r.BLEND),A=!1);return}if(A===!1&&(_e(r.BLEND),A=!0),V!==S_){if(V!==y||vt!==P){if((g!==es||R!==es)&&(r.blendEquation(r.FUNC_ADD),g=es,R=es),vt)switch(V){case Ks:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tm:r.blendFunc(r.ONE,r.ONE);break;case nm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case im:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case tm:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case nm:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case im:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}U=null,L=null,$=null,B=null,O.set(0,0,0),X=0,y=V,P=vt}return}Le=Le||Re,Ne=Ne||re,st=st||he,(Re!==g||Le!==R)&&(r.blendEquationSeparate(pt[Re],pt[Le]),g=Re,R=Le),(re!==U||he!==L||Ne!==$||st!==B)&&(r.blendFuncSeparate(Lt[re],Lt[he],Lt[Ne],Lt[st]),U=re,L=he,$=Ne,B=st),(Ut.equals(O)===!1||Yt!==X)&&(r.blendColor(Ut.r,Ut.g,Ut.b,Yt),O.copy(Ut),X=Yt),y=V,P=!1}function mn(V,Re){V.side===Gi?Ae(r.CULL_FACE):_e(r.CULL_FACE);let re=V.side===Dn;Re&&(re=!re),ht(re),V.blending===Ks&&V.transparent===!1?W(Ar):W(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),u.setFunc(V.depthFunc),u.setTest(V.depthTest),u.setMask(V.depthWrite),c.setMask(V.colorWrite);const he=V.stencilWrite;d.setTest(he),he&&(d.setMask(V.stencilWriteMask),d.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),d.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),wt(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?_e(r.SAMPLE_ALPHA_TO_COVERAGE):Ae(r.SAMPLE_ALPHA_TO_COVERAGE)}function ht(V){C!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),C=V)}function ut(V){V!==x_?(_e(r.CULL_FACE),V!==z&&(V===em?r.cullFace(r.BACK):V===__?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ae(r.CULL_FACE),z=V}function $e(V){V!==oe&&(ae&&r.lineWidth(V),oe=V)}function wt(V,Re,re){V?(_e(r.POLYGON_OFFSET_FILL),(te!==Re||fe!==re)&&(r.polygonOffset(Re,re),te=Re,fe=re)):Ae(r.POLYGON_OFFSET_FILL)}function Ye(V){V?_e(r.SCISSOR_TEST):Ae(r.SCISSOR_TEST)}function N(V){V===void 0&&(V=r.TEXTURE0+pe-1),le!==V&&(r.activeTexture(V),le=V)}function T(V,Re,re){re===void 0&&(le===null?re=r.TEXTURE0+pe-1:re=le);let he=se[re];he===void 0&&(he={type:void 0,texture:void 0},se[re]=he),(he.type!==V||he.texture!==Re)&&(le!==re&&(r.activeTexture(re),le=re),r.bindTexture(V,Re||Ee[V]),he.type=V,he.texture=Re)}function K(){const V=se[le];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function me(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ve(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function de(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ge(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ce(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Fe(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ct(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Se(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ke(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Je(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(V){Ue.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),Ue.copy(V))}function Be(V){Z.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function dt(V,Re){let re=m.get(Re);re===void 0&&(re=new WeakMap,m.set(Re,re));let he=re.get(V);he===void 0&&(he=r.getUniformBlockIndex(Re,V.name),re.set(V,he))}function rt(V,Re){const he=m.get(Re).get(V);h.get(Re)!==he&&(r.uniformBlockBinding(Re,he,V.__bindingPointIndex),h.set(Re,he))}function Tt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),x={},le=null,se={},_={},S=new WeakMap,M=[],w=null,A=!1,y=null,g=null,U=null,L=null,R=null,$=null,B=null,O=new Rt(0,0,0),X=0,P=!1,C=null,z=null,oe=null,te=null,fe=null,Ue.set(0,0,r.canvas.width,r.canvas.height),Z.set(0,0,r.canvas.width,r.canvas.height),c.reset(),u.reset(),d.reset()}return{buffers:{color:c,depth:u,stencil:d},enable:_e,disable:Ae,bindFramebuffer:Ie,drawBuffers:Qe,useProgram:bt,setBlending:W,setMaterial:mn,setFlipSided:ht,setCullFace:ut,setLineWidth:$e,setPolygonOffset:wt,setScissorTest:Ye,activeTexture:N,bindTexture:T,unbindTexture:K,compressedTexImage2D:me,compressedTexImage3D:ve,texImage2D:ke,texImage3D:Je,updateUBOMapping:dt,uniformBlockBinding:rt,texStorage2D:ct,texStorage3D:Se,texSubImage2D:de,texSubImage3D:Ge,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Fe,scissor:et,viewport:Be,reset:Tt}}function Zm(r,e,n,s){const o=cT(s);switch(n){case Mg:return r*e;case Tg:return r*e;case wg:return r*e*2;case Ag:return r*e/o.components*o.byteLength;case cf:return r*e/o.components*o.byteLength;case bg:return r*e*2/o.components*o.byteLength;case uf:return r*e*2/o.components*o.byteLength;case Eg:return r*e*3/o.components*o.byteLength;case di:return r*e*4/o.components*o.byteLength;case df:return r*e*4/o.components*o.byteLength;case Il:case Fl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ol:case kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Cd:case Pd:return Math.max(r,16)*Math.max(e,8)/4;case bd:case Rd:return Math.max(r,8)*Math.max(e,8)/2;case Nd:case Ld:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Dd:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ud:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Id:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Fd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Od:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case kd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Bd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case zd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Hd:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Vd:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Gd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case jd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Wd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Xd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case qd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Bl:case Yd:case $d:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Cg:case Kd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Zd:case Qd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function cT(r){switch(r){case qi:case _g:return{byteLength:1,components:1};case Qa:case yg:case no:return{byteLength:2,components:1};case of:case lf:return{byteLength:2,components:4};case rs:case af:case ji:return{byteLength:4,components:1};case Sg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function uT(r,e,n,s,o,c,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Nt,x=new WeakMap;let _;const S=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,T){return M?new OffscreenCanvas(N,T):Gl("canvas")}function A(N,T,K){let me=1;const ve=Ye(N);if((ve.width>K||ve.height>K)&&(me=K/Math.max(ve.width,ve.height)),me<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const de=Math.floor(me*ve.width),Ge=Math.floor(me*ve.height);_===void 0&&(_=w(de,Ge));const Ce=T?w(de,Ge):_;return Ce.width=de,Ce.height=Ge,Ce.getContext("2d").drawImage(N,0,0,de,Ge),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ve.width+"x"+ve.height+") to ("+de+"x"+Ge+")."),Ce}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ve.width+"x"+ve.height+")."),N;return N}function y(N){return N.generateMipmaps}function g(N){r.generateMipmap(N)}function U(N){return N.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?r.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function L(N,T,K,me,ve=!1){if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let de=T;if(T===r.RED&&(K===r.FLOAT&&(de=r.R32F),K===r.HALF_FLOAT&&(de=r.R16F),K===r.UNSIGNED_BYTE&&(de=r.R8)),T===r.RED_INTEGER&&(K===r.UNSIGNED_BYTE&&(de=r.R8UI),K===r.UNSIGNED_SHORT&&(de=r.R16UI),K===r.UNSIGNED_INT&&(de=r.R32UI),K===r.BYTE&&(de=r.R8I),K===r.SHORT&&(de=r.R16I),K===r.INT&&(de=r.R32I)),T===r.RG&&(K===r.FLOAT&&(de=r.RG32F),K===r.HALF_FLOAT&&(de=r.RG16F),K===r.UNSIGNED_BYTE&&(de=r.RG8)),T===r.RG_INTEGER&&(K===r.UNSIGNED_BYTE&&(de=r.RG8UI),K===r.UNSIGNED_SHORT&&(de=r.RG16UI),K===r.UNSIGNED_INT&&(de=r.RG32UI),K===r.BYTE&&(de=r.RG8I),K===r.SHORT&&(de=r.RG16I),K===r.INT&&(de=r.RG32I)),T===r.RGB_INTEGER&&(K===r.UNSIGNED_BYTE&&(de=r.RGB8UI),K===r.UNSIGNED_SHORT&&(de=r.RGB16UI),K===r.UNSIGNED_INT&&(de=r.RGB32UI),K===r.BYTE&&(de=r.RGB8I),K===r.SHORT&&(de=r.RGB16I),K===r.INT&&(de=r.RGB32I)),T===r.RGBA_INTEGER&&(K===r.UNSIGNED_BYTE&&(de=r.RGBA8UI),K===r.UNSIGNED_SHORT&&(de=r.RGBA16UI),K===r.UNSIGNED_INT&&(de=r.RGBA32UI),K===r.BYTE&&(de=r.RGBA8I),K===r.SHORT&&(de=r.RGBA16I),K===r.INT&&(de=r.RGBA32I)),T===r.RGB&&K===r.UNSIGNED_INT_5_9_9_9_REV&&(de=r.RGB9_E5),T===r.RGBA){const Ge=ve?Xl:_t.getTransfer(me);K===r.FLOAT&&(de=r.RGBA32F),K===r.HALF_FLOAT&&(de=r.RGBA16F),K===r.UNSIGNED_BYTE&&(de=Ge===Ct?r.SRGB8_ALPHA8:r.RGBA8),K===r.UNSIGNED_SHORT_4_4_4_4&&(de=r.RGBA4),K===r.UNSIGNED_SHORT_5_5_5_1&&(de=r.RGB5_A1)}return(de===r.R16F||de===r.R32F||de===r.RG16F||de===r.RG32F||de===r.RGBA16F||de===r.RGBA32F)&&e.get("EXT_color_buffer_float"),de}function R(N,T){let K;return N?T===null||T===rs||T===na?K=r.DEPTH24_STENCIL8:T===ji?K=r.DEPTH32F_STENCIL8:T===Qa&&(K=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===rs||T===na?K=r.DEPTH_COMPONENT24:T===ji?K=r.DEPTH_COMPONENT32F:T===Qa&&(K=r.DEPTH_COMPONENT16),K}function $(N,T){return y(N)===!0||N.isFramebufferTexture&&N.minFilter!==hi&&N.minFilter!==Si?Math.log2(Math.max(T.width,T.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?T.mipmaps.length:1}function B(N){const T=N.target;T.removeEventListener("dispose",B),X(T),T.isVideoTexture&&x.delete(T)}function O(N){const T=N.target;T.removeEventListener("dispose",O),C(T)}function X(N){const T=s.get(N);if(T.__webglInit===void 0)return;const K=N.source,me=S.get(K);if(me){const ve=me[T.__cacheKey];ve.usedTimes--,ve.usedTimes===0&&P(N),Object.keys(me).length===0&&S.delete(K)}s.remove(N)}function P(N){const T=s.get(N);r.deleteTexture(T.__webglTexture);const K=N.source,me=S.get(K);delete me[T.__cacheKey],u.memory.textures--}function C(N){const T=s.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),s.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let ve=0;ve<T.__webglFramebuffer[me].length;ve++)r.deleteFramebuffer(T.__webglFramebuffer[me][ve]);else r.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)r.deleteFramebuffer(T.__webglFramebuffer[me]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const K=N.textures;for(let me=0,ve=K.length;me<ve;me++){const de=s.get(K[me]);de.__webglTexture&&(r.deleteTexture(de.__webglTexture),u.memory.textures--),s.remove(K[me])}s.remove(N)}let z=0;function oe(){z=0}function te(){const N=z;return N>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+o.maxTextures),z+=1,N}function fe(N){const T=[];return T.push(N.wrapS),T.push(N.wrapT),T.push(N.wrapR||0),T.push(N.magFilter),T.push(N.minFilter),T.push(N.anisotropy),T.push(N.internalFormat),T.push(N.format),T.push(N.type),T.push(N.generateMipmaps),T.push(N.premultiplyAlpha),T.push(N.flipY),T.push(N.unpackAlignment),T.push(N.colorSpace),T.join()}function pe(N,T){const K=s.get(N);if(N.isVideoTexture&&$e(N),N.isRenderTargetTexture===!1&&N.version>0&&K.__version!==N.version){const me=N.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(K,N,T);return}}n.bindTexture(r.TEXTURE_2D,K.__webglTexture,r.TEXTURE0+T)}function ae(N,T){const K=s.get(N);if(N.version>0&&K.__version!==N.version){Z(K,N,T);return}n.bindTexture(r.TEXTURE_2D_ARRAY,K.__webglTexture,r.TEXTURE0+T)}function ce(N,T){const K=s.get(N);if(N.version>0&&K.__version!==N.version){Z(K,N,T);return}n.bindTexture(r.TEXTURE_3D,K.__webglTexture,r.TEXTURE0+T)}function k(N,T){const K=s.get(N);if(N.version>0&&K.__version!==N.version){ue(K,N,T);return}n.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture,r.TEXTURE0+T)}const le={[wd]:r.REPEAT,[ns]:r.CLAMP_TO_EDGE,[Ad]:r.MIRRORED_REPEAT},se={[hi]:r.NEAREST,[Y_]:r.NEAREST_MIPMAP_NEAREST,[hl]:r.NEAREST_MIPMAP_LINEAR,[Si]:r.LINEAR,[Iu]:r.LINEAR_MIPMAP_NEAREST,[is]:r.LINEAR_MIPMAP_LINEAR},I={[J_]:r.NEVER,[sy]:r.ALWAYS,[ey]:r.LESS,[Rg]:r.LEQUAL,[ty]:r.EQUAL,[ry]:r.GEQUAL,[ny]:r.GREATER,[iy]:r.NOTEQUAL};function ne(N,T){if(T.type===ji&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Si||T.magFilter===Iu||T.magFilter===hl||T.magFilter===is||T.minFilter===Si||T.minFilter===Iu||T.minFilter===hl||T.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(N,r.TEXTURE_WRAP_S,le[T.wrapS]),r.texParameteri(N,r.TEXTURE_WRAP_T,le[T.wrapT]),(N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY)&&r.texParameteri(N,r.TEXTURE_WRAP_R,le[T.wrapR]),r.texParameteri(N,r.TEXTURE_MAG_FILTER,se[T.magFilter]),r.texParameteri(N,r.TEXTURE_MIN_FILTER,se[T.minFilter]),T.compareFunction&&(r.texParameteri(N,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(N,r.TEXTURE_COMPARE_FUNC,I[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hi||T.minFilter!==hl&&T.minFilter!==is||T.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||s.get(T).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");r.texParameterf(N,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,o.getMaxAnisotropy())),s.get(T).__currentAnisotropy=T.anisotropy}}}function Ue(N,T){let K=!1;N.__webglInit===void 0&&(N.__webglInit=!0,T.addEventListener("dispose",B));const me=T.source;let ve=S.get(me);ve===void 0&&(ve={},S.set(me,ve));const de=fe(T);if(de!==N.__cacheKey){ve[de]===void 0&&(ve[de]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,K=!0),ve[de].usedTimes++;const Ge=ve[N.__cacheKey];Ge!==void 0&&(ve[N.__cacheKey].usedTimes--,Ge.usedTimes===0&&P(T)),N.__cacheKey=de,N.__webglTexture=ve[de].texture}return K}function Z(N,T,K){let me=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=r.TEXTURE_3D);const ve=Ue(N,T),de=T.source;n.bindTexture(me,N.__webglTexture,r.TEXTURE0+K);const Ge=s.get(de);if(de.version!==Ge.__version||ve===!0){n.activeTexture(r.TEXTURE0+K);const Ce=_t.getPrimaries(_t.workingColorSpace),Fe=T.colorSpace===Mr?null:_t.getPrimaries(T.colorSpace),ct=T.colorSpace===Mr||Ce===Fe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let Se=A(T.image,!1,o.maxTextureSize);Se=wt(T,Se);const ke=c.convert(T.format,T.colorSpace),Je=c.convert(T.type);let et=L(T.internalFormat,ke,Je,T.colorSpace,T.isVideoTexture);ne(me,T);let Be;const dt=T.mipmaps,rt=T.isVideoTexture!==!0,Tt=Ge.__version===void 0||ve===!0,V=de.dataReady,Re=$(T,Se);if(T.isDepthTexture)et=R(T.format===ia,T.type),Tt&&(rt?n.texStorage2D(r.TEXTURE_2D,1,et,Se.width,Se.height):n.texImage2D(r.TEXTURE_2D,0,et,Se.width,Se.height,0,ke,Je,null));else if(T.isDataTexture)if(dt.length>0){rt&&Tt&&n.texStorage2D(r.TEXTURE_2D,Re,et,dt[0].width,dt[0].height);for(let re=0,he=dt.length;re<he;re++)Be=dt[re],rt?V&&n.texSubImage2D(r.TEXTURE_2D,re,0,0,Be.width,Be.height,ke,Je,Be.data):n.texImage2D(r.TEXTURE_2D,re,et,Be.width,Be.height,0,ke,Je,Be.data);T.generateMipmaps=!1}else rt?(Tt&&n.texStorage2D(r.TEXTURE_2D,Re,et,Se.width,Se.height),V&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,Se.width,Se.height,ke,Je,Se.data)):n.texImage2D(r.TEXTURE_2D,0,et,Se.width,Se.height,0,ke,Je,Se.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){rt&&Tt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Re,et,dt[0].width,dt[0].height,Se.depth);for(let re=0,he=dt.length;re<he;re++)if(Be=dt[re],T.format!==di)if(ke!==null)if(rt){if(V)if(T.layerUpdates.size>0){const Le=Zm(Be.width,Be.height,T.format,T.type);for(const Ne of T.layerUpdates){const st=Be.data.subarray(Ne*Le/Be.data.BYTES_PER_ELEMENT,(Ne+1)*Le/Be.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,Ne,Be.width,Be.height,1,ke,st)}T.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,Se.depth,ke,Be.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,re,et,Be.width,Be.height,Se.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?V&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,re,0,0,0,Be.width,Be.height,Se.depth,ke,Je,Be.data):n.texImage3D(r.TEXTURE_2D_ARRAY,re,et,Be.width,Be.height,Se.depth,0,ke,Je,Be.data)}else{rt&&Tt&&n.texStorage2D(r.TEXTURE_2D,Re,et,dt[0].width,dt[0].height);for(let re=0,he=dt.length;re<he;re++)Be=dt[re],T.format!==di?ke!==null?rt?V&&n.compressedTexSubImage2D(r.TEXTURE_2D,re,0,0,Be.width,Be.height,ke,Be.data):n.compressedTexImage2D(r.TEXTURE_2D,re,et,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?V&&n.texSubImage2D(r.TEXTURE_2D,re,0,0,Be.width,Be.height,ke,Je,Be.data):n.texImage2D(r.TEXTURE_2D,re,et,Be.width,Be.height,0,ke,Je,Be.data)}else if(T.isDataArrayTexture)if(rt){if(Tt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Re,et,Se.width,Se.height,Se.depth),V)if(T.layerUpdates.size>0){const re=Zm(Se.width,Se.height,T.format,T.type);for(const he of T.layerUpdates){const Le=Se.data.subarray(he*re/Se.data.BYTES_PER_ELEMENT,(he+1)*re/Se.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,Se.width,Se.height,1,ke,Je,Le)}T.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,ke,Je,Se.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,et,Se.width,Se.height,Se.depth,0,ke,Je,Se.data);else if(T.isData3DTexture)rt?(Tt&&n.texStorage3D(r.TEXTURE_3D,Re,et,Se.width,Se.height,Se.depth),V&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,ke,Je,Se.data)):n.texImage3D(r.TEXTURE_3D,0,et,Se.width,Se.height,Se.depth,0,ke,Je,Se.data);else if(T.isFramebufferTexture){if(Tt)if(rt)n.texStorage2D(r.TEXTURE_2D,Re,et,Se.width,Se.height);else{let re=Se.width,he=Se.height;for(let Le=0;Le<Re;Le++)n.texImage2D(r.TEXTURE_2D,Le,et,re,he,0,ke,Je,null),re>>=1,he>>=1}}else if(dt.length>0){if(rt&&Tt){const re=Ye(dt[0]);n.texStorage2D(r.TEXTURE_2D,Re,et,re.width,re.height)}for(let re=0,he=dt.length;re<he;re++)Be=dt[re],rt?V&&n.texSubImage2D(r.TEXTURE_2D,re,0,0,ke,Je,Be):n.texImage2D(r.TEXTURE_2D,re,et,ke,Je,Be);T.generateMipmaps=!1}else if(rt){if(Tt){const re=Ye(Se);n.texStorage2D(r.TEXTURE_2D,Re,et,re.width,re.height)}V&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,ke,Je,Se)}else n.texImage2D(r.TEXTURE_2D,0,et,ke,Je,Se);y(T)&&g(me),Ge.__version=de.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function ue(N,T,K){if(T.image.length!==6)return;const me=Ue(N,T),ve=T.source;n.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+K);const de=s.get(ve);if(ve.version!==de.__version||me===!0){n.activeTexture(r.TEXTURE0+K);const Ge=_t.getPrimaries(_t.workingColorSpace),Ce=T.colorSpace===Mr?null:_t.getPrimaries(T.colorSpace),Fe=T.colorSpace===Mr||Ge===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Fe);const ct=T.isCompressedTexture||T.image[0].isCompressedTexture,Se=T.image[0]&&T.image[0].isDataTexture,ke=[];for(let he=0;he<6;he++)!ct&&!Se?ke[he]=A(T.image[he],!0,o.maxCubemapSize):ke[he]=Se?T.image[he].image:T.image[he],ke[he]=wt(T,ke[he]);const Je=ke[0],et=c.convert(T.format,T.colorSpace),Be=c.convert(T.type),dt=L(T.internalFormat,et,Be,T.colorSpace),rt=T.isVideoTexture!==!0,Tt=de.__version===void 0||me===!0,V=ve.dataReady;let Re=$(T,Je);ne(r.TEXTURE_CUBE_MAP,T);let re;if(ct){rt&&Tt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Re,dt,Je.width,Je.height);for(let he=0;he<6;he++){re=ke[he].mipmaps;for(let Le=0;Le<re.length;Le++){const Ne=re[Le];T.format!==di?et!==null?rt?V&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Ne.width,Ne.height,et,Ne.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,dt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):rt?V&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,0,0,Ne.width,Ne.height,et,Be,Ne.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le,dt,Ne.width,Ne.height,0,et,Be,Ne.data)}}}else{if(re=T.mipmaps,rt&&Tt){re.length>0&&Re++;const he=Ye(ke[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Re,dt,he.width,he.height)}for(let he=0;he<6;he++)if(Se){rt?V&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,ke[he].width,ke[he].height,et,Be,ke[he].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,ke[he].width,ke[he].height,0,et,Be,ke[he].data);for(let Le=0;Le<re.length;Le++){const st=re[Le].image[he].image;rt?V&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,st.width,st.height,et,Be,st.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,dt,st.width,st.height,0,et,Be,st.data)}}else{rt?V&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,et,Be,ke[he]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,dt,et,Be,ke[he]);for(let Le=0;Le<re.length;Le++){const Ne=re[Le];rt?V&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,0,0,et,Be,Ne.image[he]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Le+1,dt,et,Be,Ne.image[he])}}}y(T)&&g(r.TEXTURE_CUBE_MAP),de.__version=ve.version,T.onUpdate&&T.onUpdate(T)}N.__version=T.version}function Ee(N,T,K,me,ve,de){const Ge=c.convert(K.format,K.colorSpace),Ce=c.convert(K.type),Fe=L(K.internalFormat,Ge,Ce,K.colorSpace),ct=s.get(T),Se=s.get(K);if(Se.__renderTarget=T,!ct.__hasExternalTextures){const ke=Math.max(1,T.width>>de),Je=Math.max(1,T.height>>de);ve===r.TEXTURE_3D||ve===r.TEXTURE_2D_ARRAY?n.texImage3D(ve,de,Fe,ke,Je,T.depth,0,Ge,Ce,null):n.texImage2D(ve,de,Fe,ke,Je,0,Ge,Ce,null)}n.bindFramebuffer(r.FRAMEBUFFER,N),ut(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,me,ve,Se.__webglTexture,0,ht(T)):(ve===r.TEXTURE_2D||ve>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ve<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,me,ve,Se.__webglTexture,de),n.bindFramebuffer(r.FRAMEBUFFER,null)}function _e(N,T,K){if(r.bindRenderbuffer(r.RENDERBUFFER,N),T.depthBuffer){const me=T.depthTexture,ve=me&&me.isDepthTexture?me.type:null,de=R(T.stencilBuffer,ve),Ge=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=ht(T);ut(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,de,T.width,T.height):K?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,de,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,de,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ge,r.RENDERBUFFER,N)}else{const me=T.textures;for(let ve=0;ve<me.length;ve++){const de=me[ve],Ge=c.convert(de.format,de.colorSpace),Ce=c.convert(de.type),Fe=L(de.internalFormat,Ge,Ce,de.colorSpace),ct=ht(T);K&&ut(T)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,ct,Fe,T.width,T.height):ut(T)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ct,Fe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Fe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ae(N,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(r.FRAMEBUFFER,N),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=s.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),pe(T.depthTexture,0);const ve=me.__webglTexture,de=ht(T);if(T.depthTexture.format===Zs)ut(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,ve,0);else if(T.depthTexture.format===ia)ut(T)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0,de):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ie(N){const T=s.get(N),K=N.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==N.depthTexture){const me=N.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const ve=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",ve)};me.addEventListener("dispose",ve),T.__depthDisposeCallback=ve}T.__boundDepthTexture=me}if(N.depthTexture&&!T.__autoAllocateDepthBuffer){if(K)throw new Error("target.depthTexture not supported in Cube render targets");Ae(T.__webglFramebuffer,N)}else if(K){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=r.createRenderbuffer(),_e(T.__webglDepthbuffer[me],N,!1);else{const ve=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,de=T.__webglDepthbuffer[me];r.bindRenderbuffer(r.RENDERBUFFER,de),r.framebufferRenderbuffer(r.FRAMEBUFFER,ve,r.RENDERBUFFER,de)}}else if(n.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),_e(T.__webglDepthbuffer,N,!1);else{const me=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ve=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ve),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,ve)}n.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(N,T,K){const me=s.get(N);T!==void 0&&Ee(me.__webglFramebuffer,N,N.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),K!==void 0&&Ie(N)}function bt(N){const T=N.texture,K=s.get(N),me=s.get(T);N.addEventListener("dispose",O);const ve=N.textures,de=N.isWebGLCubeRenderTarget===!0,Ge=ve.length>1;if(Ge||(me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture()),me.__version=T.version,u.memory.textures++),de){K.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer[Ce]=[];for(let Fe=0;Fe<T.mipmaps.length;Fe++)K.__webglFramebuffer[Ce][Fe]=r.createFramebuffer()}else K.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){K.__webglFramebuffer=[];for(let Ce=0;Ce<T.mipmaps.length;Ce++)K.__webglFramebuffer[Ce]=r.createFramebuffer()}else K.__webglFramebuffer=r.createFramebuffer();if(Ge)for(let Ce=0,Fe=ve.length;Ce<Fe;Ce++){const ct=s.get(ve[Ce]);ct.__webglTexture===void 0&&(ct.__webglTexture=r.createTexture(),u.memory.textures++)}if(N.samples>0&&ut(N)===!1){K.__webglMultisampledFramebuffer=r.createFramebuffer(),K.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ve.length;Ce++){const Fe=ve[Ce];K.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,K.__webglColorRenderbuffer[Ce]);const ct=c.convert(Fe.format,Fe.colorSpace),Se=c.convert(Fe.type),ke=L(Fe.internalFormat,ct,Se,Fe.colorSpace,N.isXRRenderTarget===!0),Je=ht(N);r.renderbufferStorageMultisample(r.RENDERBUFFER,Je,ke,N.width,N.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,K.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),N.depthBuffer&&(K.__webglDepthRenderbuffer=r.createRenderbuffer(),_e(K.__webglDepthRenderbuffer,N,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(de){n.bindTexture(r.TEXTURE_CUBE_MAP,me.__webglTexture),ne(r.TEXTURE_CUBE_MAP,T);for(let Ce=0;Ce<6;Ce++)if(T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)Ee(K.__webglFramebuffer[Ce][Fe],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Fe);else Ee(K.__webglFramebuffer[Ce],N,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(T)&&g(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ge){for(let Ce=0,Fe=ve.length;Ce<Fe;Ce++){const ct=ve[Ce],Se=s.get(ct);n.bindTexture(r.TEXTURE_2D,Se.__webglTexture),ne(r.TEXTURE_2D,ct),Ee(K.__webglFramebuffer,N,ct,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),y(ct)&&g(r.TEXTURE_2D)}n.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Ce=N.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(Ce,me.__webglTexture),ne(Ce,T),T.mipmaps&&T.mipmaps.length>0)for(let Fe=0;Fe<T.mipmaps.length;Fe++)Ee(K.__webglFramebuffer[Fe],N,T,r.COLOR_ATTACHMENT0,Ce,Fe);else Ee(K.__webglFramebuffer,N,T,r.COLOR_ATTACHMENT0,Ce,0);y(T)&&g(Ce),n.unbindTexture()}N.depthBuffer&&Ie(N)}function pt(N){const T=N.textures;for(let K=0,me=T.length;K<me;K++){const ve=T[K];if(y(ve)){const de=U(N),Ge=s.get(ve).__webglTexture;n.bindTexture(de,Ge),g(de),n.unbindTexture()}}}const Lt=[],W=[];function mn(N){if(N.samples>0){if(ut(N)===!1){const T=N.textures,K=N.width,me=N.height;let ve=r.COLOR_BUFFER_BIT;const de=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ge=s.get(N),Ce=T.length>1;if(Ce)for(let Fe=0;Fe<T.length;Fe++)n.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglFramebuffer);for(let Fe=0;Fe<T.length;Fe++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ve|=r.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ve|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ct=s.get(T[Fe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ct,0)}r.blitFramebuffer(0,0,K,me,0,0,K,me,ve,r.NEAREST),h===!0&&(Lt.length=0,W.length=0,Lt.push(r.COLOR_ATTACHMENT0+Fe),N.depthBuffer&&N.resolveDepthBuffer===!1&&(Lt.push(de),W.push(de),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,W)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Lt))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Fe=0;Fe<T.length;Fe++){n.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.RENDERBUFFER,Ge.__webglColorRenderbuffer[Fe]);const ct=s.get(T[Fe]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Fe,r.TEXTURE_2D,ct,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ge.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.resolveDepthBuffer===!1&&h){const T=N.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function ht(N){return Math.min(o.maxSamples,N.samples)}function ut(N){const T=s.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function $e(N){const T=u.render.frame;x.get(N)!==T&&(x.set(N,T),N.update())}function wt(N,T){const K=N.colorSpace,me=N.format,ve=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||K!==aa&&K!==Mr&&(_t.getTransfer(K)===Ct?(me!==di||ve!==qi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",K)),T}function Ye(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(m.width=N.naturalWidth||N.width,m.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(m.width=N.displayWidth,m.height=N.displayHeight):(m.width=N.width,m.height=N.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=oe,this.setTexture2D=pe,this.setTexture2DArray=ae,this.setTexture3D=ce,this.setTextureCube=k,this.rebindTextures=Qe,this.setupRenderTarget=bt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=mn,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ut}function dT(r,e){function n(s,o=Mr){let c;const u=_t.getTransfer(o);if(s===qi)return r.UNSIGNED_BYTE;if(s===of)return r.UNSIGNED_SHORT_4_4_4_4;if(s===lf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Sg)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===_g)return r.BYTE;if(s===yg)return r.SHORT;if(s===Qa)return r.UNSIGNED_SHORT;if(s===af)return r.INT;if(s===rs)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===no)return r.HALF_FLOAT;if(s===Mg)return r.ALPHA;if(s===Eg)return r.RGB;if(s===di)return r.RGBA;if(s===Tg)return r.LUMINANCE;if(s===wg)return r.LUMINANCE_ALPHA;if(s===Zs)return r.DEPTH_COMPONENT;if(s===ia)return r.DEPTH_STENCIL;if(s===Ag)return r.RED;if(s===cf)return r.RED_INTEGER;if(s===bg)return r.RG;if(s===uf)return r.RG_INTEGER;if(s===df)return r.RGBA_INTEGER;if(s===Il||s===Fl||s===Ol||s===kl)if(u===Ct)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Il)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Fl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Ol)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===kl)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Il)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Fl)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Ol)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===kl)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===bd||s===Cd||s===Rd||s===Pd)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===bd)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Cd)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Rd)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Pd)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Nd||s===Ld||s===Dd)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===Nd||s===Ld)return u===Ct?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Dd)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Ud||s===Id||s===Fd||s===Od||s===kd||s===Bd||s===zd||s===Hd||s===Vd||s===Gd||s===jd||s===Wd||s===Xd||s===qd)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Ud)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Id)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Fd)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Od)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===kd)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Bd)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zd)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Hd)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Vd)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gd)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===jd)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Wd)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Xd)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===qd)return u===Ct?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Bl||s===Yd||s===$d)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Bl)return u===Ct?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Yd)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===$d)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===Cg||s===Kd||s===Zd||s===Qd)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Bl)return c.COMPRESSED_RED_RGTC1_EXT;if(s===Kd)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Zd)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Qd)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===na?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:n}}class fT extends Hn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ul extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hT={type:"move"};class ud{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ul,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ul,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ul,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const s of e.hand.values())this._getHandJoint(n,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,s){let o=null,c=null,u=null;const d=this._targetRay,h=this._grip,m=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const A of e.hand.values()){const y=n.getJointPose(A,s),g=this._getHandJoint(m,A);y!==null&&(g.matrix.fromArray(y.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=y.radius),g.visible=y!==null}const x=m.joints["index-finger-tip"],_=m.joints["thumb-tip"],S=x.position.distanceTo(_.position),M=.02,w=.005;m.inputState.pinching&&S>M+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=M-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(c=n.getPose(e.gripSpace,s),c!==null&&(h.matrix.fromArray(c.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,c.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(c.linearVelocity)):h.hasLinearVelocity=!1,c.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(c.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(o=n.getPose(e.targetRaySpace,s),o===null&&c!==null&&(o=c),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(hT)))}return d!==null&&(d.visible=o!==null),h!==null&&(h.visible=c!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const s=new Ul;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[n.jointName]=s,e.add(s)}return e.joints[n.jointName]}}const pT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mT=`
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

}`;class gT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,s){if(this.texture===null){const o=new Un,c=e.properties.get(o);c.__webglTexture=n.texture,(n.depthNear!=s.depthNear||n.depthFar!=s.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,s=new Rr({vertexShader:pT,fragmentShader:mT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new fi(new $l(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class vT extends oa{constructor(e,n){super();const s=this;let o=null,c=1,u=null,d="local-floor",h=1,m=null,x=null,_=null,S=null,M=null,w=null;const A=new gT,y=n.getContextAttributes();let g=null,U=null;const L=[],R=[],$=new Nt;let B=null;const O=new Hn;O.viewport=new Gt;const X=new Hn;X.viewport=new Gt;const P=[O,X],C=new fT;let z=null,oe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let ue=L[Z];return ue===void 0&&(ue=new ud,L[Z]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(Z){let ue=L[Z];return ue===void 0&&(ue=new ud,L[Z]=ue),ue.getGripSpace()},this.getHand=function(Z){let ue=L[Z];return ue===void 0&&(ue=new ud,L[Z]=ue),ue.getHandSpace()};function te(Z){const ue=R.indexOf(Z.inputSource);if(ue===-1)return;const Ee=L[ue];Ee!==void 0&&(Ee.update(Z.inputSource,Z.frame,m||u),Ee.dispatchEvent({type:Z.type,data:Z.inputSource}))}function fe(){o.removeEventListener("select",te),o.removeEventListener("selectstart",te),o.removeEventListener("selectend",te),o.removeEventListener("squeeze",te),o.removeEventListener("squeezestart",te),o.removeEventListener("squeezeend",te),o.removeEventListener("end",fe),o.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<L.length;Z++){const ue=R[Z];ue!==null&&(R[Z]=null,L[Z].disconnect(ue))}z=null,oe=null,A.reset(),e.setRenderTarget(g),M=null,S=null,_=null,o=null,U=null,Ue.stop(),s.isPresenting=!1,e.setPixelRatio(B),e.setSize($.width,$.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){c=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){d=Z,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(Z){m=Z},this.getBaseLayer=function(){return S!==null?S:M},this.getBinding=function(){return _},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(g=e.getRenderTarget(),o.addEventListener("select",te),o.addEventListener("selectstart",te),o.addEventListener("selectend",te),o.addEventListener("squeeze",te),o.addEventListener("squeezestart",te),o.addEventListener("squeezeend",te),o.addEventListener("end",fe),o.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await n.makeXRCompatible(),B=e.getPixelRatio(),e.getSize($),o.renderState.layers===void 0){const ue={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(o,n,ue),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),U=new ss(M.framebufferWidth,M.framebufferHeight,{format:di,type:qi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ue=null,Ee=null,_e=null;y.depth&&(_e=y.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ue=y.stencil?ia:Zs,Ee=y.stencil?na:rs);const Ae={colorFormat:n.RGBA8,depthFormat:_e,scaleFactor:c};_=new XRWebGLBinding(o,n),S=_.createProjectionLayer(Ae),o.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),U=new ss(S.textureWidth,S.textureHeight,{format:di,type:qi,depthTexture:new Vg(S.textureWidth,S.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1})}U.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await o.requestReferenceSpace(d),Ue.setContext(o),Ue.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function pe(Z){for(let ue=0;ue<Z.removed.length;ue++){const Ee=Z.removed[ue],_e=R.indexOf(Ee);_e>=0&&(R[_e]=null,L[_e].disconnect(Ee))}for(let ue=0;ue<Z.added.length;ue++){const Ee=Z.added[ue];let _e=R.indexOf(Ee);if(_e===-1){for(let Ie=0;Ie<L.length;Ie++)if(Ie>=R.length){R.push(Ee),_e=Ie;break}else if(R[Ie]===null){R[Ie]=Ee,_e=Ie;break}if(_e===-1)break}const Ae=L[_e];Ae&&Ae.connect(Ee)}}const ae=new ie,ce=new ie;function k(Z,ue,Ee){ae.setFromMatrixPosition(ue.matrixWorld),ce.setFromMatrixPosition(Ee.matrixWorld);const _e=ae.distanceTo(ce),Ae=ue.projectionMatrix.elements,Ie=Ee.projectionMatrix.elements,Qe=Ae[14]/(Ae[10]-1),bt=Ae[14]/(Ae[10]+1),pt=(Ae[9]+1)/Ae[5],Lt=(Ae[9]-1)/Ae[5],W=(Ae[8]-1)/Ae[0],mn=(Ie[8]+1)/Ie[0],ht=Qe*W,ut=Qe*mn,$e=_e/(-W+mn),wt=$e*-W;if(ue.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(wt),Z.translateZ($e),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ye=Qe+$e,N=bt+$e,T=ht-wt,K=ut+(_e-wt),me=pt*bt/N*Ye,ve=Lt*bt/N*Ye;Z.projectionMatrix.makePerspective(T,K,me,ve,Ye,N),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function le(Z,ue){ue===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(ue.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let ue=Z.near,Ee=Z.far;A.texture!==null&&(A.depthNear>0&&(ue=A.depthNear),A.depthFar>0&&(Ee=A.depthFar)),C.near=X.near=O.near=ue,C.far=X.far=O.far=Ee,(z!==C.near||oe!==C.far)&&(o.updateRenderState({depthNear:C.near,depthFar:C.far}),z=C.near,oe=C.far),O.layers.mask=Z.layers.mask|2,X.layers.mask=Z.layers.mask|4,C.layers.mask=O.layers.mask|X.layers.mask;const _e=Z.parent,Ae=C.cameras;le(C,_e);for(let Ie=0;Ie<Ae.length;Ie++)le(Ae[Ie],_e);Ae.length===2?k(C,O,X):C.projectionMatrix.copy(O.projectionMatrix),se(Z,C,_e)};function se(Z,ue,Ee){Ee===null?Z.matrix.copy(ue.matrixWorld):(Z.matrix.copy(Ee.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(ue.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(ue.projectionMatrix),Z.projectionMatrixInverse.copy(ue.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Jd*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(S===null&&M===null))return h},this.setFoveation=function(Z){h=Z,S!==null&&(S.fixedFoveation=Z),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=Z)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(C)};let I=null;function ne(Z,ue){if(x=ue.getViewerPose(m||u),w=ue,x!==null){const Ee=x.views;M!==null&&(e.setRenderTargetFramebuffer(U,M.framebuffer),e.setRenderTarget(U));let _e=!1;Ee.length!==C.cameras.length&&(C.cameras.length=0,_e=!0);for(let Ie=0;Ie<Ee.length;Ie++){const Qe=Ee[Ie];let bt=null;if(M!==null)bt=M.getViewport(Qe);else{const Lt=_.getViewSubImage(S,Qe);bt=Lt.viewport,Ie===0&&(e.setRenderTargetTextures(U,Lt.colorTexture,S.ignoreDepthValues?void 0:Lt.depthStencilTexture),e.setRenderTarget(U))}let pt=P[Ie];pt===void 0&&(pt=new Hn,pt.layers.enable(Ie),pt.viewport=new Gt,P[Ie]=pt),pt.matrix.fromArray(Qe.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Qe.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(bt.x,bt.y,bt.width,bt.height),Ie===0&&(C.matrix.copy(pt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),_e===!0&&C.cameras.push(pt)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ie=_.getDepthInformation(Ee[0]);Ie&&Ie.isValid&&Ie.texture&&A.init(e,Ie,o.renderState)}}for(let Ee=0;Ee<L.length;Ee++){const _e=R[Ee],Ae=L[Ee];_e!==null&&Ae!==void 0&&Ae.update(_e,ue,m||u)}I&&I(Z,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),w=null}const Ue=new Hg;Ue.setAnimationLoop(ne),this.setAnimationLoop=function(Z){I=Z},this.dispose=function(){}}}const Zr=new Yi,xT=new qt;function _T(r,e){function n(y,g){y.matrixAutoUpdate===!0&&y.updateMatrix(),g.value.copy(y.matrix)}function s(y,g){g.color.getRGB(y.fogColor.value,Og(r)),g.isFog?(y.fogNear.value=g.near,y.fogFar.value=g.far):g.isFogExp2&&(y.fogDensity.value=g.density)}function o(y,g,U,L,R){g.isMeshBasicMaterial||g.isMeshLambertMaterial?c(y,g):g.isMeshToonMaterial?(c(y,g),_(y,g)):g.isMeshPhongMaterial?(c(y,g),x(y,g)):g.isMeshStandardMaterial?(c(y,g),S(y,g),g.isMeshPhysicalMaterial&&M(y,g,R)):g.isMeshMatcapMaterial?(c(y,g),w(y,g)):g.isMeshDepthMaterial?c(y,g):g.isMeshDistanceMaterial?(c(y,g),A(y,g)):g.isMeshNormalMaterial?c(y,g):g.isLineBasicMaterial?(u(y,g),g.isLineDashedMaterial&&d(y,g)):g.isPointsMaterial?h(y,g,U,L):g.isSpriteMaterial?m(y,g):g.isShadowMaterial?(y.color.value.copy(g.color),y.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function c(y,g){y.opacity.value=g.opacity,g.color&&y.diffuse.value.copy(g.color),g.emissive&&y.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.bumpMap&&(y.bumpMap.value=g.bumpMap,n(g.bumpMap,y.bumpMapTransform),y.bumpScale.value=g.bumpScale,g.side===Dn&&(y.bumpScale.value*=-1)),g.normalMap&&(y.normalMap.value=g.normalMap,n(g.normalMap,y.normalMapTransform),y.normalScale.value.copy(g.normalScale),g.side===Dn&&y.normalScale.value.negate()),g.displacementMap&&(y.displacementMap.value=g.displacementMap,n(g.displacementMap,y.displacementMapTransform),y.displacementScale.value=g.displacementScale,y.displacementBias.value=g.displacementBias),g.emissiveMap&&(y.emissiveMap.value=g.emissiveMap,n(g.emissiveMap,y.emissiveMapTransform)),g.specularMap&&(y.specularMap.value=g.specularMap,n(g.specularMap,y.specularMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest);const U=e.get(g),L=U.envMap,R=U.envMapRotation;L&&(y.envMap.value=L,Zr.copy(R),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,L.isCubeTexture&&L.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),y.envMapRotation.value.setFromMatrix4(xT.makeRotationFromEuler(Zr)),y.flipEnvMap.value=L.isCubeTexture&&L.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=g.reflectivity,y.ior.value=g.ior,y.refractionRatio.value=g.refractionRatio),g.lightMap&&(y.lightMap.value=g.lightMap,y.lightMapIntensity.value=g.lightMapIntensity,n(g.lightMap,y.lightMapTransform)),g.aoMap&&(y.aoMap.value=g.aoMap,y.aoMapIntensity.value=g.aoMapIntensity,n(g.aoMap,y.aoMapTransform))}function u(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform))}function d(y,g){y.dashSize.value=g.dashSize,y.totalSize.value=g.dashSize+g.gapSize,y.scale.value=g.scale}function h(y,g,U,L){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.size.value=g.size*U,y.scale.value=L*.5,g.map&&(y.map.value=g.map,n(g.map,y.uvTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function m(y,g){y.diffuse.value.copy(g.color),y.opacity.value=g.opacity,y.rotation.value=g.rotation,g.map&&(y.map.value=g.map,n(g.map,y.mapTransform)),g.alphaMap&&(y.alphaMap.value=g.alphaMap,n(g.alphaMap,y.alphaMapTransform)),g.alphaTest>0&&(y.alphaTest.value=g.alphaTest)}function x(y,g){y.specular.value.copy(g.specular),y.shininess.value=Math.max(g.shininess,1e-4)}function _(y,g){g.gradientMap&&(y.gradientMap.value=g.gradientMap)}function S(y,g){y.metalness.value=g.metalness,g.metalnessMap&&(y.metalnessMap.value=g.metalnessMap,n(g.metalnessMap,y.metalnessMapTransform)),y.roughness.value=g.roughness,g.roughnessMap&&(y.roughnessMap.value=g.roughnessMap,n(g.roughnessMap,y.roughnessMapTransform)),g.envMap&&(y.envMapIntensity.value=g.envMapIntensity)}function M(y,g,U){y.ior.value=g.ior,g.sheen>0&&(y.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),y.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(y.sheenColorMap.value=g.sheenColorMap,n(g.sheenColorMap,y.sheenColorMapTransform)),g.sheenRoughnessMap&&(y.sheenRoughnessMap.value=g.sheenRoughnessMap,n(g.sheenRoughnessMap,y.sheenRoughnessMapTransform))),g.clearcoat>0&&(y.clearcoat.value=g.clearcoat,y.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(y.clearcoatMap.value=g.clearcoatMap,n(g.clearcoatMap,y.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,n(g.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(y.clearcoatNormalMap.value=g.clearcoatNormalMap,n(g.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Dn&&y.clearcoatNormalScale.value.negate())),g.dispersion>0&&(y.dispersion.value=g.dispersion),g.iridescence>0&&(y.iridescence.value=g.iridescence,y.iridescenceIOR.value=g.iridescenceIOR,y.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(y.iridescenceMap.value=g.iridescenceMap,n(g.iridescenceMap,y.iridescenceMapTransform)),g.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=g.iridescenceThicknessMap,n(g.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),g.transmission>0&&(y.transmission.value=g.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),g.transmissionMap&&(y.transmissionMap.value=g.transmissionMap,n(g.transmissionMap,y.transmissionMapTransform)),y.thickness.value=g.thickness,g.thicknessMap&&(y.thicknessMap.value=g.thicknessMap,n(g.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=g.attenuationDistance,y.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(y.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(y.anisotropyMap.value=g.anisotropyMap,n(g.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=g.specularIntensity,y.specularColor.value.copy(g.specularColor),g.specularColorMap&&(y.specularColorMap.value=g.specularColorMap,n(g.specularColorMap,y.specularColorMapTransform)),g.specularIntensityMap&&(y.specularIntensityMap.value=g.specularIntensityMap,n(g.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,g){g.matcap&&(y.matcap.value=g.matcap)}function A(y,g){const U=e.get(g).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:o}}function yT(r,e,n,s){let o={},c={},u=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(U,L){const R=L.program;s.uniformBlockBinding(U,R)}function m(U,L){let R=o[U.id];R===void 0&&(w(U),R=x(U),o[U.id]=R,U.addEventListener("dispose",y));const $=L.program;s.updateUBOMapping(U,$);const B=e.render.frame;c[U.id]!==B&&(S(U),c[U.id]=B)}function x(U){const L=_();U.__bindingPointIndex=L;const R=r.createBuffer(),$=U.__size,B=U.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,$,B),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,L,R),R}function _(){for(let U=0;U<d;U++)if(u.indexOf(U)===-1)return u.push(U),U;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(U){const L=o[U.id],R=U.uniforms,$=U.__cache;r.bindBuffer(r.UNIFORM_BUFFER,L);for(let B=0,O=R.length;B<O;B++){const X=Array.isArray(R[B])?R[B]:[R[B]];for(let P=0,C=X.length;P<C;P++){const z=X[P];if(M(z,B,P,$)===!0){const oe=z.__offset,te=Array.isArray(z.value)?z.value:[z.value];let fe=0;for(let pe=0;pe<te.length;pe++){const ae=te[pe],ce=A(ae);typeof ae=="number"||typeof ae=="boolean"?(z.__data[0]=ae,r.bufferSubData(r.UNIFORM_BUFFER,oe+fe,z.__data)):ae.isMatrix3?(z.__data[0]=ae.elements[0],z.__data[1]=ae.elements[1],z.__data[2]=ae.elements[2],z.__data[3]=0,z.__data[4]=ae.elements[3],z.__data[5]=ae.elements[4],z.__data[6]=ae.elements[5],z.__data[7]=0,z.__data[8]=ae.elements[6],z.__data[9]=ae.elements[7],z.__data[10]=ae.elements[8],z.__data[11]=0):(ae.toArray(z.__data,fe),fe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,oe,z.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function M(U,L,R,$){const B=U.value,O=L+"_"+R;if($[O]===void 0)return typeof B=="number"||typeof B=="boolean"?$[O]=B:$[O]=B.clone(),!0;{const X=$[O];if(typeof B=="number"||typeof B=="boolean"){if(X!==B)return $[O]=B,!0}else if(X.equals(B)===!1)return X.copy(B),!0}return!1}function w(U){const L=U.uniforms;let R=0;const $=16;for(let O=0,X=L.length;O<X;O++){const P=Array.isArray(L[O])?L[O]:[L[O]];for(let C=0,z=P.length;C<z;C++){const oe=P[C],te=Array.isArray(oe.value)?oe.value:[oe.value];for(let fe=0,pe=te.length;fe<pe;fe++){const ae=te[fe],ce=A(ae),k=R%$,le=k%ce.boundary,se=k+le;R+=le,se!==0&&$-se<ce.storage&&(R+=$-se),oe.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),oe.__offset=R,R+=ce.storage}}}const B=R%$;return B>0&&(R+=$-B),U.__size=R,U.__cache={},this}function A(U){const L={boundary:0,storage:0};return typeof U=="number"||typeof U=="boolean"?(L.boundary=4,L.storage=4):U.isVector2?(L.boundary=8,L.storage=8):U.isVector3||U.isColor?(L.boundary=16,L.storage=12):U.isVector4?(L.boundary=16,L.storage=16):U.isMatrix3?(L.boundary=48,L.storage=48):U.isMatrix4?(L.boundary=64,L.storage=64):U.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",U),L}function y(U){const L=U.target;L.removeEventListener("dispose",y);const R=u.indexOf(L.__bindingPointIndex);u.splice(R,1),r.deleteBuffer(o[L.id]),delete o[L.id],delete c[L.id]}function g(){for(const U in o)r.deleteBuffer(o[U]);u=[],o={},c={}}return{bind:h,update:m,dispose:g}}class qg{constructor(e={}){const{canvas:n=oy(),context:s=null,depth:o=!0,stencil:c=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:S=!1}=e;this.isWebGLRenderer=!0;let M;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=s.getContextAttributes().alpha}else M=u;const w=new Uint32Array(4),A=new Int32Array(4);let y=null,g=null;const U=[],L=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Qn,this.toneMapping=br,this.toneMappingExposure=1;const R=this;let $=!1,B=0,O=0,X=null,P=-1,C=null;const z=new Gt,oe=new Gt;let te=null;const fe=new Rt(0);let pe=0,ae=n.width,ce=n.height,k=1,le=null,se=null;const I=new Gt(0,0,ae,ce),ne=new Gt(0,0,ae,ce);let Ue=!1;const Z=new zg;let ue=!1,Ee=!1;const _e=new qt,Ae=new qt,Ie=new ie,Qe=new Gt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Lt(){return X===null?k:1}let W=s;function mn(b,G){return n.getContext(b,G)}try{const b={alpha:!0,depth:o,stencil:c,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:x,failIfMajorPerformanceCaveat:_};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${sf}`),n.addEventListener("webglcontextlost",he,!1),n.addEventListener("webglcontextrestored",Le,!1),n.addEventListener("webglcontextcreationerror",Ne,!1),W===null){const G="webgl2";if(W=mn(G,b),W===null)throw mn(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let ht,ut,$e,wt,Ye,N,T,K,me,ve,de,Ge,Ce,Fe,ct,Se,ke,Je,et,Be,dt,rt,Tt,V;function Re(){ht=new AE(W),ht.init(),rt=new dT(W,ht),ut=new _E(W,ht,e,rt),$e=new lT(W,ht),ut.reverseDepthBuffer&&S&&$e.buffers.depth.setReversed(!0),wt=new RE(W),Ye=new q1,N=new uT(W,ht,$e,Ye,ut,rt,wt),T=new SE(R),K=new wE(R),me=new Iy(W),Tt=new vE(W,me),ve=new bE(W,me,wt,Tt),de=new NE(W,ve,me,wt),et=new PE(W,ut,N),Se=new yE(Ye),Ge=new X1(R,T,K,ht,ut,Tt,Se),Ce=new _T(R,Ye),Fe=new $1,ct=new tT(ht),Je=new gE(R,T,K,$e,de,M,h),ke=new aT(R,de,ut),V=new yT(W,wt,ut,$e),Be=new xE(W,ht,wt),dt=new CE(W,ht,wt),wt.programs=Ge.programs,R.capabilities=ut,R.extensions=ht,R.properties=Ye,R.renderLists=Fe,R.shadowMap=ke,R.state=$e,R.info=wt}Re();const re=new vT(R,W);this.xr=re,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const b=ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(b){b!==void 0&&(k=b,this.setSize(ae,ce,!1))},this.getSize=function(b){return b.set(ae,ce)},this.setSize=function(b,G,J=!0){if(re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ae=b,ce=G,n.width=Math.floor(b*k),n.height=Math.floor(G*k),J===!0&&(n.style.width=b+"px",n.style.height=G+"px"),this.setViewport(0,0,b,G)},this.getDrawingBufferSize=function(b){return b.set(ae*k,ce*k).floor()},this.setDrawingBufferSize=function(b,G,J){ae=b,ce=G,k=J,n.width=Math.floor(b*J),n.height=Math.floor(G*J),this.setViewport(0,0,b,G)},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(I)},this.setViewport=function(b,G,J,ee){b.isVector4?I.set(b.x,b.y,b.z,b.w):I.set(b,G,J,ee),$e.viewport(z.copy(I).multiplyScalar(k).round())},this.getScissor=function(b){return b.copy(ne)},this.setScissor=function(b,G,J,ee){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,G,J,ee),$e.scissor(oe.copy(ne).multiplyScalar(k).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(b){$e.setScissorTest(Ue=b)},this.setOpaqueSort=function(b){le=b},this.setTransparentSort=function(b){se=b},this.getClearColor=function(b){return b.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor.apply(Je,arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha.apply(Je,arguments)},this.clear=function(b=!0,G=!0,J=!0){let ee=0;if(b){let j=!1;if(X!==null){const we=X.texture.format;j=we===df||we===uf||we===cf}if(j){const we=X.texture.type,Me=we===qi||we===rs||we===Qa||we===na||we===of||we===lf,je=Je.getClearColor(),He=Je.getClearAlpha(),tt=je.r,it=je.g,We=je.b;Me?(w[0]=tt,w[1]=it,w[2]=We,w[3]=He,W.clearBufferuiv(W.COLOR,0,w)):(A[0]=tt,A[1]=it,A[2]=We,A[3]=He,W.clearBufferiv(W.COLOR,0,A))}else ee|=W.COLOR_BUFFER_BIT}G&&(ee|=W.DEPTH_BUFFER_BIT),J&&(ee|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",he,!1),n.removeEventListener("webglcontextrestored",Le,!1),n.removeEventListener("webglcontextcreationerror",Ne,!1),Fe.dispose(),ct.dispose(),Ye.dispose(),T.dispose(),K.dispose(),de.dispose(),Tt.dispose(),V.dispose(),Ge.dispose(),re.dispose(),re.removeEventListener("sessionstart",os),re.removeEventListener("sessionend",$i),wi.stop()};function he(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),$=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),$=!1;const b=wt.autoReset,G=ke.enabled,J=ke.autoUpdate,ee=ke.needsUpdate,j=ke.type;Re(),wt.autoReset=b,ke.enabled=G,ke.autoUpdate=J,ke.needsUpdate=ee,ke.type=j}function Ne(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function st(b){const G=b.target;G.removeEventListener("dispose",st),Ut(G)}function Ut(b){Yt(b),Ye.remove(b)}function Yt(b){const G=Ye.get(b).programs;G!==void 0&&(G.forEach(function(J){Ge.releaseProgram(J)}),b.isShaderMaterial&&Ge.releaseShaderCache(b))}this.renderBufferDirect=function(b,G,J,ee,j,we){G===null&&(G=bt);const Me=j.isMesh&&j.matrixWorld.determinant()<0,je=lo(b,G,J,ee,j);$e.setMaterial(ee,Me);let He=J.index,tt=1;if(ee.wireframe===!0){if(He=ve.getWireframeAttribute(J),He===void 0)return;tt=2}const it=J.drawRange,We=J.attributes.position;let gt=it.start*tt,Et=(it.start+it.count)*tt;we!==null&&(gt=Math.max(gt,we.start*tt),Et=Math.min(Et,(we.start+we.count)*tt)),He!==null?(gt=Math.max(gt,0),Et=Math.min(Et,He.count)):We!=null&&(gt=Math.max(gt,0),Et=Math.min(Et,We.count));const mt=Et-gt;if(mt<0||mt===1/0)return;Tt.setup(j,ee,je,J,He);let on,at=Be;if(He!==null&&(on=me.get(He),at=dt,at.setIndex(on)),j.isMesh)ee.wireframe===!0?($e.setLineWidth(ee.wireframeLinewidth*Lt()),at.setMode(W.LINES)):at.setMode(W.TRIANGLES);else if(j.isLine){let qe=ee.linewidth;qe===void 0&&(qe=1),$e.setLineWidth(qe*Lt()),j.isLineSegments?at.setMode(W.LINES):j.isLineLoop?at.setMode(W.LINE_LOOP):at.setMode(W.LINE_STRIP)}else j.isPoints?at.setMode(W.POINTS):j.isSprite&&at.setMode(W.TRIANGLES);if(j.isBatchedMesh)if(j._multiDrawInstances!==null)at.renderMultiDrawInstances(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount,j._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))at.renderMultiDraw(j._multiDrawStarts,j._multiDrawCounts,j._multiDrawCount);else{const qe=j._multiDrawStarts,Jn=j._multiDrawCounts,yt=j._multiDrawCount,ln=He?me.get(He).bytesPerElement:1,ei=Ye.get(ee).currentProgram.getUniforms();for(let $t=0;$t<yt;$t++)ei.setValue(W,"_gl_DrawID",$t),at.render(qe[$t]/ln,Jn[$t])}else if(j.isInstancedMesh)at.renderInstances(gt,mt,j.count);else if(J.isInstancedBufferGeometry){const qe=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Jn=Math.min(J.instanceCount,qe);at.renderInstances(gt,mt,Jn)}else at.render(gt,mt)};function vt(b,G,J){b.transparent===!0&&b.side===Gi&&b.forceSinglePass===!1?(b.side=Dn,b.needsUpdate=!0,ls(b,G,J),b.side=Cr,b.needsUpdate=!0,ls(b,G,J),b.side=Gi):ls(b,G,J)}this.compile=function(b,G,J=null){J===null&&(J=b),g=ct.get(J),g.init(G),L.push(g),J.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),b!==J&&b.traverseVisible(function(j){j.isLight&&j.layers.test(G.layers)&&(g.pushLight(j),j.castShadow&&g.pushShadow(j))}),g.setupLights();const ee=new Set;return b.traverse(function(j){if(!(j.isMesh||j.isPoints||j.isLine||j.isSprite))return;const we=j.material;if(we)if(Array.isArray(we))for(let Me=0;Me<we.length;Me++){const je=we[Me];vt(je,J,j),ee.add(je)}else vt(we,J,j),ee.add(we)}),L.pop(),g=null,ee},this.compileAsync=function(b,G,J=null){const ee=this.compile(b,G,J);return new Promise(j=>{function we(){if(ee.forEach(function(Me){Ye.get(Me).currentProgram.isReady()&&ee.delete(Me)}),ee.size===0){j(b);return}setTimeout(we,10)}ht.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Mn=null;function gn(b){Mn&&Mn(b)}function os(){wi.stop()}function $i(){wi.start()}const wi=new Hg;wi.setAnimationLoop(gn),typeof self<"u"&&wi.setContext(self),this.setAnimationLoop=function(b){Mn=b,re.setAnimationLoop(b),b===null?wi.stop():wi.start()},re.addEventListener("sessionstart",os),re.addEventListener("sessionend",$i),this.render=function(b,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if($===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(re.cameraAutoUpdate===!0&&re.updateCamera(G),G=re.getCamera()),b.isScene===!0&&b.onBeforeRender(R,b,G,X),g=ct.get(b,L.length),g.init(G),L.push(g),Ae.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Z.setFromProjectionMatrix(Ae),Ee=this.localClippingEnabled,ue=Se.init(this.clippingPlanes,Ee),y=Fe.get(b,U.length),y.init(),U.push(y),re.enabled===!0&&re.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&Ai(we,G,-1/0,R.sortObjects)}Ai(b,G,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(le,se),pt=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,pt&&Je.addToRenderList(y,b),this.info.render.frame++,ue===!0&&Se.beginShadows();const J=g.state.shadowsArray;ke.render(J,b,G),ue===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const ee=y.opaque,j=y.transmissive;if(g.setupLights(),G.isArrayCamera){const we=G.cameras;if(j.length>0)for(let Me=0,je=we.length;Me<je;Me++){const He=we[Me];Dr(ee,j,b,He)}pt&&Je.render(b);for(let Me=0,je=we.length;Me<je;Me++){const He=we[Me];Lr(y,b,He,He.viewport)}}else j.length>0&&Dr(ee,j,b,G),pt&&Je.render(b),Lr(y,b,G);X!==null&&(N.updateMultisampleRenderTarget(X),N.updateRenderTargetMipmap(X)),b.isScene===!0&&b.onAfterRender(R,b,G),Tt.resetDefaultState(),P=-1,C=null,L.pop(),L.length>0?(g=L[L.length-1],ue===!0&&Se.setGlobalState(R.clippingPlanes,g.state.camera)):g=null,U.pop(),U.length>0?y=U[U.length-1]:y=null};function Ai(b,G,J,ee){if(b.visible===!1)return;if(b.layers.test(G.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(G);else if(b.isLight)g.pushLight(b),b.castShadow&&g.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Z.intersectsSprite(b)){ee&&Qe.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ae);const Me=de.update(b),je=b.material;je.visible&&y.push(b,Me,je,J,Qe.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Z.intersectsObject(b))){const Me=de.update(b),je=b.material;if(ee&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Qe.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Qe.copy(Me.boundingSphere.center)),Qe.applyMatrix4(b.matrixWorld).applyMatrix4(Ae)),Array.isArray(je)){const He=Me.groups;for(let tt=0,it=He.length;tt<it;tt++){const We=He[tt],gt=je[We.materialIndex];gt&&gt.visible&&y.push(b,Me,gt,J,Qe.z,We)}}else je.visible&&y.push(b,Me,je,J,Qe.z,null)}}const we=b.children;for(let Me=0,je=we.length;Me<je;Me++)Ai(we[Me],G,J,ee)}function Lr(b,G,J,ee){const j=b.opaque,we=b.transmissive,Me=b.transparent;g.setupLightsView(J),ue===!0&&Se.setGlobalState(R.clippingPlanes,J),ee&&$e.viewport(z.copy(ee)),j.length>0&&Ki(j,G,J),we.length>0&&Ki(we,G,J),Me.length>0&&Ki(Me,G,J),$e.buffers.depth.setTest(!0),$e.buffers.depth.setMask(!0),$e.buffers.color.setMask(!0),$e.setPolygonOffset(!1)}function Dr(b,G,J,ee){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[ee.id]===void 0&&(g.state.transmissionRenderTarget[ee.id]=new ss(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?no:qi,minFilter:is,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:_t.workingColorSpace}));const we=g.state.transmissionRenderTarget[ee.id],Me=ee.viewport||z;we.setSize(Me.z,Me.w);const je=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(fe),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),pt&&Je.render(J);const He=R.toneMapping;R.toneMapping=br;const tt=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),g.setupLightsView(ee),ue===!0&&Se.setGlobalState(R.clippingPlanes,ee),Ki(b,J,ee),N.updateMultisampleRenderTarget(we),N.updateRenderTargetMipmap(we),ht.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let We=0,gt=G.length;We<gt;We++){const Et=G[We],mt=Et.object,on=Et.geometry,at=Et.material,qe=Et.group;if(at.side===Gi&&mt.layers.test(ee.layers)){const Jn=at.side;at.side=Dn,at.needsUpdate=!0,ao(mt,J,ee,on,at,qe),at.side=Jn,at.needsUpdate=!0,it=!0}}it===!0&&(N.updateMultisampleRenderTarget(we),N.updateRenderTargetMipmap(we))}R.setRenderTarget(je),R.setClearColor(fe,pe),tt!==void 0&&(ee.viewport=tt),R.toneMapping=He}function Ki(b,G,J){const ee=G.isScene===!0?G.overrideMaterial:null;for(let j=0,we=b.length;j<we;j++){const Me=b[j],je=Me.object,He=Me.geometry,tt=ee===null?Me.material:ee,it=Me.group;je.layers.test(J.layers)&&ao(je,G,J,He,tt,it)}}function ao(b,G,J,ee,j,we){b.onBeforeRender(R,G,J,ee,j,we),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),j.onBeforeRender(R,G,J,ee,b,we),j.transparent===!0&&j.side===Gi&&j.forceSinglePass===!1?(j.side=Dn,j.needsUpdate=!0,R.renderBufferDirect(J,G,ee,j,b,we),j.side=Cr,j.needsUpdate=!0,R.renderBufferDirect(J,G,ee,j,b,we),j.side=Gi):R.renderBufferDirect(J,G,ee,j,b,we),b.onAfterRender(R,G,J,ee,j,we)}function ls(b,G,J){G.isScene!==!0&&(G=bt);const ee=Ye.get(b),j=g.state.lights,we=g.state.shadowsArray,Me=j.state.version,je=Ge.getParameters(b,j.state,we,G,J),He=Ge.getProgramCacheKey(je);let tt=ee.programs;ee.environment=b.isMeshStandardMaterial?G.environment:null,ee.fog=G.fog,ee.envMap=(b.isMeshStandardMaterial?K:T).get(b.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&b.envMap===null?G.environmentRotation:b.envMapRotation,tt===void 0&&(b.addEventListener("dispose",st),tt=new Map,ee.programs=tt);let it=tt.get(He);if(it!==void 0){if(ee.currentProgram===it&&ee.lightsStateVersion===Me)return pi(b,je),it}else je.uniforms=Ge.getUniforms(b),b.onBeforeCompile(je,R),it=Ge.acquireProgram(je,He),tt.set(He,it),ee.uniforms=je.uniforms;const We=ee.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(We.clippingPlanes=Se.uniform),pi(b,je),ee.needsLights=Zl(b),ee.lightsStateVersion=Me,ee.needsLights&&(We.ambientLightColor.value=j.state.ambient,We.lightProbe.value=j.state.probe,We.directionalLights.value=j.state.directional,We.directionalLightShadows.value=j.state.directionalShadow,We.spotLights.value=j.state.spot,We.spotLightShadows.value=j.state.spotShadow,We.rectAreaLights.value=j.state.rectArea,We.ltc_1.value=j.state.rectAreaLTC1,We.ltc_2.value=j.state.rectAreaLTC2,We.pointLights.value=j.state.point,We.pointLightShadows.value=j.state.pointShadow,We.hemisphereLights.value=j.state.hemi,We.directionalShadowMap.value=j.state.directionalShadowMap,We.directionalShadowMatrix.value=j.state.directionalShadowMatrix,We.spotShadowMap.value=j.state.spotShadowMap,We.spotLightMatrix.value=j.state.spotLightMatrix,We.spotLightMap.value=j.state.spotLightMap,We.pointShadowMap.value=j.state.pointShadowMap,We.pointShadowMatrix.value=j.state.pointShadowMatrix),ee.currentProgram=it,ee.uniformsList=null,it}function oo(b){if(b.uniformsList===null){const G=b.currentProgram.getUniforms();b.uniformsList=zl.seqWithValue(G.seq,b.uniforms)}return b.uniformsList}function pi(b,G){const J=Ye.get(b);J.outputColorSpace=G.outputColorSpace,J.batching=G.batching,J.batchingColor=G.batchingColor,J.instancing=G.instancing,J.instancingColor=G.instancingColor,J.instancingMorph=G.instancingMorph,J.skinning=G.skinning,J.morphTargets=G.morphTargets,J.morphNormals=G.morphNormals,J.morphColors=G.morphColors,J.morphTargetsCount=G.morphTargetsCount,J.numClippingPlanes=G.numClippingPlanes,J.numIntersection=G.numClipIntersection,J.vertexAlphas=G.vertexAlphas,J.vertexTangents=G.vertexTangents,J.toneMapping=G.toneMapping}function lo(b,G,J,ee,j){G.isScene!==!0&&(G=bt),N.resetTextureUnits();const we=G.fog,Me=ee.isMeshStandardMaterial?G.environment:null,je=X===null?R.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:aa,He=(ee.isMeshStandardMaterial?K:T).get(ee.envMap||Me),tt=ee.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,it=!!J.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),We=!!J.morphAttributes.position,gt=!!J.morphAttributes.normal,Et=!!J.morphAttributes.color;let mt=br;ee.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(mt=R.toneMapping);const on=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,at=on!==void 0?on.length:0,qe=Ye.get(ee),Jn=g.state.lights;if(ue===!0&&(Ee===!0||b!==C)){const vn=b===C&&ee.id===P;Se.setState(ee,b,vn)}let yt=!1;ee.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Jn.state.version||qe.outputColorSpace!==je||j.isBatchedMesh&&qe.batching===!1||!j.isBatchedMesh&&qe.batching===!0||j.isBatchedMesh&&qe.batchingColor===!0&&j.colorTexture===null||j.isBatchedMesh&&qe.batchingColor===!1&&j.colorTexture!==null||j.isInstancedMesh&&qe.instancing===!1||!j.isInstancedMesh&&qe.instancing===!0||j.isSkinnedMesh&&qe.skinning===!1||!j.isSkinnedMesh&&qe.skinning===!0||j.isInstancedMesh&&qe.instancingColor===!0&&j.instanceColor===null||j.isInstancedMesh&&qe.instancingColor===!1&&j.instanceColor!==null||j.isInstancedMesh&&qe.instancingMorph===!0&&j.morphTexture===null||j.isInstancedMesh&&qe.instancingMorph===!1&&j.morphTexture!==null||qe.envMap!==He||ee.fog===!0&&qe.fog!==we||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==Se.numPlanes||qe.numIntersection!==Se.numIntersection)||qe.vertexAlphas!==tt||qe.vertexTangents!==it||qe.morphTargets!==We||qe.morphNormals!==gt||qe.morphColors!==Et||qe.toneMapping!==mt||qe.morphTargetsCount!==at)&&(yt=!0):(yt=!0,qe.__version=ee.version);let ln=qe.currentProgram;yt===!0&&(ln=ls(ee,G,j));let ei=!1,$t=!1,mi=!1;const Pt=ln.getUniforms(),Gn=qe.uniforms;if($e.useProgram(ln.program)&&(ei=!0,$t=!0,mi=!0),ee.id!==P&&(P=ee.id,$t=!0),ei||C!==b){$e.buffers.depth.getReversed()?(_e.copy(b.projectionMatrix),cy(_e),uy(_e),Pt.setValue(W,"projectionMatrix",_e)):Pt.setValue(W,"projectionMatrix",b.projectionMatrix),Pt.setValue(W,"viewMatrix",b.matrixWorldInverse);const jn=Pt.map.cameraPosition;jn!==void 0&&jn.setValue(W,Ie.setFromMatrixPosition(b.matrixWorld)),ut.logarithmicDepthBuffer&&Pt.setValue(W,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&Pt.setValue(W,"isOrthographic",b.isOrthographicCamera===!0),C!==b&&(C=b,$t=!0,mi=!0)}if(j.isSkinnedMesh){Pt.setOptional(W,j,"bindMatrix"),Pt.setOptional(W,j,"bindMatrixInverse");const vn=j.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),Pt.setValue(W,"boneTexture",vn.boneTexture,N))}j.isBatchedMesh&&(Pt.setOptional(W,j,"batchingTexture"),Pt.setValue(W,"batchingTexture",j._matricesTexture,N),Pt.setOptional(W,j,"batchingIdTexture"),Pt.setValue(W,"batchingIdTexture",j._indirectTexture,N),Pt.setOptional(W,j,"batchingColorTexture"),j._colorsTexture!==null&&Pt.setValue(W,"batchingColorTexture",j._colorsTexture,N));const bi=J.morphAttributes;if((bi.position!==void 0||bi.normal!==void 0||bi.color!==void 0)&&et.update(j,J,ln),($t||qe.receiveShadow!==j.receiveShadow)&&(qe.receiveShadow=j.receiveShadow,Pt.setValue(W,"receiveShadow",j.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Gn.envMap.value=He,Gn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&G.environment!==null&&(Gn.envMapIntensity.value=G.environmentIntensity),$t&&(Pt.setValue(W,"toneMappingExposure",R.toneMappingExposure),qe.needsLights&&co(Gn,mi),we&&ee.fog===!0&&Ce.refreshFogUniforms(Gn,we),Ce.refreshMaterialUniforms(Gn,ee,k,ce,g.state.transmissionRenderTarget[b.id]),zl.upload(W,oo(qe),Gn,N)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(zl.upload(W,oo(qe),Gn,N),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&Pt.setValue(W,"center",j.center),Pt.setValue(W,"modelViewMatrix",j.modelViewMatrix),Pt.setValue(W,"normalMatrix",j.normalMatrix),Pt.setValue(W,"modelMatrix",j.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const vn=ee.uniformsGroups;for(let jn=0,En=vn.length;jn<En;jn++){const uo=vn[jn];V.update(uo,ln),V.bind(uo,ln)}}return ln}function co(b,G){b.ambientLightColor.needsUpdate=G,b.lightProbe.needsUpdate=G,b.directionalLights.needsUpdate=G,b.directionalLightShadows.needsUpdate=G,b.pointLights.needsUpdate=G,b.pointLightShadows.needsUpdate=G,b.spotLights.needsUpdate=G,b.spotLightShadows.needsUpdate=G,b.rectAreaLights.needsUpdate=G,b.hemisphereLights.needsUpdate=G}function Zl(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return B},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(b,G,J){Ye.get(b.texture).__webglTexture=G,Ye.get(b.depthTexture).__webglTexture=J;const ee=Ye.get(b);ee.__hasExternalTextures=!0,ee.__autoAllocateDepthBuffer=J===void 0,ee.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ee.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,G){const J=Ye.get(b);J.__webglFramebuffer=G,J.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(b,G=0,J=0){X=b,B=G,O=J;let ee=!0,j=null,we=!1,Me=!1;if(b){const He=Ye.get(b);if(He.__useDefaultFramebuffer!==void 0)$e.bindFramebuffer(W.FRAMEBUFFER,null),ee=!1;else if(He.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(He.__hasExternalTextures)N.rebindTextures(b,Ye.get(b.texture).__webglTexture,Ye.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const We=b.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&Ye.has(We)&&(b.width!==We.image.width||b.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const tt=b.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(Me=!0);const it=Ye.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(it[G])?j=it[G][J]:j=it[G],we=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?j=Ye.get(b).__webglMultisampledFramebuffer:Array.isArray(it)?j=it[J]:j=it,z.copy(b.viewport),oe.copy(b.scissor),te=b.scissorTest}else z.copy(I).multiplyScalar(k).floor(),oe.copy(ne).multiplyScalar(k).floor(),te=Ue;if($e.bindFramebuffer(W.FRAMEBUFFER,j)&&ee&&$e.drawBuffers(b,j),$e.viewport(z),$e.scissor(oe),$e.setScissorTest(te),we){const He=Ye.get(b.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,He.__webglTexture,J)}else if(Me){const He=Ye.get(b.texture),tt=G||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,He.__webglTexture,J||0,tt)}P=-1},this.readRenderTargetPixels=function(b,G,J,ee,j,we,Me){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(je=je[Me]),je){$e.bindFramebuffer(W.FRAMEBUFFER,je);try{const He=b.texture,tt=He.format,it=He.type;if(!ut.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ut.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=b.width-ee&&J>=0&&J<=b.height-j&&W.readPixels(G,J,ee,j,rt.convert(tt),rt.convert(it),we)}finally{const He=X!==null?Ye.get(X).__webglFramebuffer:null;$e.bindFramebuffer(W.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(b,G,J,ee,j,we,Me){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let je=Ye.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(je=je[Me]),je){const He=b.texture,tt=He.format,it=He.type;if(!ut.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ut.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=b.width-ee&&J>=0&&J<=b.height-j){$e.bindFramebuffer(W.FRAMEBUFFER,je);const We=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,We),W.bufferData(W.PIXEL_PACK_BUFFER,we.byteLength,W.STREAM_READ),W.readPixels(G,J,ee,j,rt.convert(tt),rt.convert(it),0);const gt=X!==null?Ye.get(X).__webglFramebuffer:null;$e.bindFramebuffer(W.FRAMEBUFFER,gt);const Et=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await ly(W,Et,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,We),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,we),W.deleteBuffer(We),W.deleteSync(Et),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,G=null,J=0){b.isTexture!==!0&&(Ya("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,b=arguments[1]);const ee=Math.pow(2,-J),j=Math.floor(b.image.width*ee),we=Math.floor(b.image.height*ee),Me=G!==null?G.x:0,je=G!==null?G.y:0;N.setTexture2D(b,0),W.copyTexSubImage2D(W.TEXTURE_2D,J,0,0,Me,je,j,we),$e.unbindTexture()},this.copyTextureToTexture=function(b,G,J=null,ee=null,j=0){b.isTexture!==!0&&(Ya("WebGLRenderer: copyTextureToTexture function signature has changed."),ee=arguments[0]||null,b=arguments[1],G=arguments[2],j=arguments[3]||0,J=null);let we,Me,je,He,tt,it,We,gt,Et;const mt=b.isCompressedTexture?b.mipmaps[j]:b.image;J!==null?(we=J.max.x-J.min.x,Me=J.max.y-J.min.y,je=J.isBox3?J.max.z-J.min.z:1,He=J.min.x,tt=J.min.y,it=J.isBox3?J.min.z:0):(we=mt.width,Me=mt.height,je=mt.depth||1,He=0,tt=0,it=0),ee!==null?(We=ee.x,gt=ee.y,Et=ee.z):(We=0,gt=0,Et=0);const on=rt.convert(G.format),at=rt.convert(G.type);let qe;G.isData3DTexture?(N.setTexture3D(G,0),qe=W.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(N.setTexture2DArray(G,0),qe=W.TEXTURE_2D_ARRAY):(N.setTexture2D(G,0),qe=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,G.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,G.unpackAlignment);const Jn=W.getParameter(W.UNPACK_ROW_LENGTH),yt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),ln=W.getParameter(W.UNPACK_SKIP_PIXELS),ei=W.getParameter(W.UNPACK_SKIP_ROWS),$t=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,mt.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,mt.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,He),W.pixelStorei(W.UNPACK_SKIP_ROWS,tt),W.pixelStorei(W.UNPACK_SKIP_IMAGES,it);const mi=b.isDataArrayTexture||b.isData3DTexture,Pt=G.isDataArrayTexture||G.isData3DTexture;if(b.isRenderTargetTexture||b.isDepthTexture){const Gn=Ye.get(b),bi=Ye.get(G),vn=Ye.get(Gn.__renderTarget),jn=Ye.get(bi.__renderTarget);$e.bindFramebuffer(W.READ_FRAMEBUFFER,vn.__webglFramebuffer),$e.bindFramebuffer(W.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let En=0;En<je;En++)mi&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.get(b).__webglTexture,j,it+En),b.isDepthTexture?(Pt&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Ye.get(G).__webglTexture,j,Et+En),W.blitFramebuffer(He,tt,we,Me,We,gt,we,Me,W.DEPTH_BUFFER_BIT,W.NEAREST)):Pt?W.copyTexSubImage3D(qe,j,We,gt,Et+En,He,tt,we,Me):W.copyTexSubImage2D(qe,j,We,gt,Et+En,He,tt,we,Me);$e.bindFramebuffer(W.READ_FRAMEBUFFER,null),$e.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Pt?b.isDataTexture||b.isData3DTexture?W.texSubImage3D(qe,j,We,gt,Et,we,Me,je,on,at,mt.data):G.isCompressedArrayTexture?W.compressedTexSubImage3D(qe,j,We,gt,Et,we,Me,je,on,mt.data):W.texSubImage3D(qe,j,We,gt,Et,we,Me,je,on,at,mt):b.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,j,We,gt,we,Me,on,at,mt.data):b.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,j,We,gt,mt.width,mt.height,on,mt.data):W.texSubImage2D(W.TEXTURE_2D,j,We,gt,we,Me,on,at,mt);W.pixelStorei(W.UNPACK_ROW_LENGTH,Jn),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,yt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,ln),W.pixelStorei(W.UNPACK_SKIP_ROWS,ei),W.pixelStorei(W.UNPACK_SKIP_IMAGES,$t),j===0&&G.generateMipmaps&&W.generateMipmap(qe),$e.unbindTexture()},this.copyTextureToTexture3D=function(b,G,J=null,ee=null,j=0){return b.isTexture!==!0&&(Ya("WebGLRenderer: copyTextureToTexture3D function signature has changed."),J=arguments[0]||null,ee=arguments[1]||null,b=arguments[2],G=arguments[3],j=arguments[4]||0),Ya('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(b,G,J,ee,j)},this.initRenderTarget=function(b){Ye.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),$e.unbindTexture()},this.resetState=function(){B=0,O=0,X=null,$e.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=_t._getDrawingBufferColorSpace(e),n.unpackColorSpace=_t._getUnpackColorSpace()}}class Yg extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yi,this.environmentIntensity=1,this.environmentRotation=new Yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class pf extends Nr{constructor(e=1,n=32,s=16,o=0,c=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:s,phiStart:o,phiLength:c,thetaStart:u,thetaLength:d},n=Math.max(3,Math.floor(n)),s=Math.max(2,Math.floor(s));const h=Math.min(u+d,Math.PI);let m=0;const x=[],_=new ie,S=new ie,M=[],w=[],A=[],y=[];for(let g=0;g<=s;g++){const U=[],L=g/s;let R=0;g===0&&u===0?R=.5/n:g===s&&h===Math.PI&&(R=-.5/n);for(let $=0;$<=n;$++){const B=$/n;_.x=-e*Math.cos(o+B*c)*Math.sin(u+L*d),_.y=e*Math.cos(u+L*d),_.z=e*Math.sin(o+B*c)*Math.sin(u+L*d),w.push(_.x,_.y,_.z),S.copy(_).normalize(),A.push(S.x,S.y,S.z),y.push(B+R,1-L),U.push(m++)}x.push(U)}for(let g=0;g<s;g++)for(let U=0;U<n;U++){const L=x[g][U+1],R=x[g][U],$=x[g+1][U],B=x[g+1][U+1];(g!==0||u>0)&&M.push(L,R,B),(g!==s-1||h<Math.PI)&&M.push(R,$,B)}this.setIndex(M),this.setAttribute("position",new Ei(w,3)),this.setAttribute("normal",new Ei(A,3)),this.setAttribute("uv",new Ei(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pf(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sf);const ST=()=>{const r=be.useRef(null);return be.useEffect(()=>{if(!r.current)return;const e=new Yg,n=new Hn(75,1,.1,1e3),s=new qg({alpha:!0,antialias:!0});s.setSize(300,300),r.current.appendChild(s.domElement);const o=new la(2,2,2),c=new Yl({color:16739115,wireframe:!0}),u=new fi(o,c);e.add(u),n.position.z=5;const d=()=>{requestAnimationFrame(d),u.rotation.x+=.01,u.rotation.y+=.01,s.render(e,n)};return d(),()=>{r.current&&r.current.removeChild(s.domElement)}},[]),v.jsx("div",{ref:r,className:"w-[300px] h-[300px]"})},MT=()=>v.jsxs("div",{className:"bg-black",children:[v.jsx(m_,{}),v.jsx(v_,{}),v.jsx("section",{className:"py-20",children:v.jsx("div",{className:"container mx-auto px-4",children:v.jsxs(Mt,{className:"flex flex-col md:flex-row items-center justify-between p-12 gap-8",children:[v.jsxs("div",{className:"md:w-1/2",children:[v.jsx("h2",{className:"text-3xl font-bold mb-6",children:"Innovation Through Technology"}),v.jsx("p",{className:"text-gray-400 mb-4",children:"We leverage cutting-edge technology to create solutions that drive business growth and innovation."}),v.jsx("p",{className:"text-gray-400",children:"Our team of experts is dedicated to delivering excellence in every project we undertake."})]}),v.jsx("div",{className:"md:w-1/2 flex justify-center",children:v.jsx(ST,{})})]})})})]}),Ti=({title:r,subtitle:e})=>v.jsxs("div",{className:"text-center max-w-3xl mx-auto mb-16",children:[v.jsx("h1",{className:"text-3xl md:text-4xl font-bold mb-4",children:r}),v.jsx("div",{className:"w-20 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto mb-6"}),v.jsx("p",{className:"text-gray-400 text-lg",children:e})]}),ET=[{label:"Years of Experience",value:"1+"},{label:"Projects Completed",value:"5"},{label:"Team Members",value:"5"},{label:"Global Clients",value:"2"}],TT=[{name:"Radhika Bhut",role:"Lead Developer",image:"r.png"},{name:"Kevin Topiya",role:"CEO & Founder",image:"k.png"},{name:"Viraj Parsana",role:" COO & Co-Founder",image:"v.png"},{name:"Heli Chauhan",role:"Design Director",image:"h.png"}],wT=()=>v.jsx("div",{className:"min-h-screen bg-black pt-20 pb-16",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ti,{title:"About Us",subtitle:"We're a team of passionate technologists building the future of digital solutions"}),v.jsx("div",{className:"mb-20",children:v.jsxs(Mt,{className:"max-w-4xl mx-auto",children:[v.jsx("h2",{className:"text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",children:"Our Story"}),v.jsx("p",{className:"text-gray-300 mb-4",children:"Founded in 2025 by Kevin, our journey began with a vision to empower businesses through technology. Built from the ground up with passion and purpose, we’re laying the foundation for a company that delivers impactful digital solutions. We’re driven by a culture of friendliness and excellence — where creativity meets problem-solving, and every project is a chance to grow. Our focus is on providing smart, adaptable IT services for businesses ready to evolve in a digital-first world. We're just getting started — and we're building with intention."}),v.jsx("p",{className:"text-gray-300",children:"Today, we're proud to serve clients worldwide, delivering cutting-edge solutions that drive innovation and growth. Our commitment to excellence and customer satisfaction remains at the heart of everything we do."})]})}),v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6 mb-20",children:ET.map((r,e)=>v.jsxs(Mt,{className:"text-center",children:[v.jsx("div",{className:"text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2",children:r.value}),v.jsx("div",{className:"text-gray-400 text-sm",children:r.label})]},e))}),v.jsxs("div",{className:"grid md:grid-cols-3 gap-8 mb-20",children:[v.jsxs(Mt,{className:"text-center",children:[v.jsx(a_,{className:"w-12 h-12 text-blue-400 mx-auto mb-4"}),v.jsx("h3",{className:"text-xl font-bold mb-3",children:"Innovation"}),v.jsx("p",{className:"text-gray-400",children:"Pushing boundaries and exploring new technologies to deliver cutting-edge solutions."})]}),v.jsxs(Mt,{className:"text-center",children:[v.jsx(c_,{className:"w-12 h-12 text-purple-400 mx-auto mb-4"}),v.jsx("h3",{className:"text-xl font-bold mb-3",children:"Excellence"}),v.jsx("p",{className:"text-gray-400",children:"Committed to delivering the highest quality in everything we do."})]}),v.jsxs(Mt,{className:"text-center",children:[v.jsx(d_,{className:"w-12 h-12 text-green-400 mx-auto mb-4"}),v.jsx("h3",{className:"text-xl font-bold mb-3",children:"Collaboration"}),v.jsx("p",{className:"text-gray-400",children:"Working together with our clients to achieve extraordinary results."})]})]}),v.jsxs("div",{className:"mb-20",children:[v.jsx("h2",{className:"text-2xl font-bold text-center mb-12",children:"Our Leadership Team"}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",children:TT.map((r,e)=>v.jsxs(Mt,{className:"text-center",children:[v.jsx("div",{className:"w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 border-2 border-gray-800",children:v.jsx("img",{src:r.image,alt:r.name,className:"w-full h-full object-cover"})}),v.jsx("h3",{className:"text-lg font-semibold mb-1",children:r.name}),v.jsx("p",{className:"text-gray-400 text-sm",children:r.role})]},e))})]})]})}),AT=["React","Node.js","Python","AWS","Azure","Docker","Kubernetes","MongoDB","PostgreSQL","TypeScript"],bT=[{title:"Web Development",path:"/kavyata/services/web-development",description:"Crafting responsive and dynamic websites to enhance your online presence.",imageUrl:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",features:["Custom Website Design","Responsive Layouts","SEO Optimization","Content Management Systems"]},{title:"Software Development",path:"/kavyata/services/software-development",description:"Developing robust software solutions to streamline your business operations.",imageUrl:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4",features:["Custom Software Solutions","Enterprise Applications","API Development","System Integration"]},{title:"Mobile App Development",path:"/kavyata/services/mobile-app-development",description:"Creating user-friendly mobile applications for iOS and Android platforms.",imageUrl:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",features:["iOS App Development","Android App Development","Cross-Platform Solutions","App Store Deployment"]},{title:"IT Consulting",path:"/kavyata/services/it-consulting",description:"Providing expert guidance to optimize your IT strategies and infrastructure.",imageUrl:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",features:["IT Strategy Development","Technology Assessment","Process Improvement","Project Management"]}],CT=[{title:"Discovery",description:"We begin by understanding your business needs and objectives"},{title:"Planning",description:"Creating detailed project roadmap and technical specifications"},{title:"Development",description:"Building your solution using cutting-edge technologies"},{title:"Testing",description:"Rigorous testing to ensure quality and performance"},{title:"Deployment",description:"Smooth deployment and transition to production"},{title:"Support",description:"Ongoing maintenance and support services"}],RT=()=>v.jsx("div",{className:"min-h-screen bg-black pt-20 pb-16",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ti,{title:"Our Services",subtitle:"Comprehensive IT solutions tailored to your business needs"}),bT.map((r,e)=>v.jsx(Mt,{className:"mb-8 p-8",children:v.jsxs("div",{className:"flex flex-col md:flex-row items-start gap-8",children:[v.jsxs("div",{className:"md:w-2/3",children:[v.jsx("h3",{className:"text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",children:r.title}),v.jsx("p",{className:"text-gray-300 mb-6",children:r.description}),v.jsx("ul",{className:"grid grid-cols-1 md:grid-cols-2 gap-3 mb-6",children:r.features.map((n,s)=>v.jsxs("li",{className:"flex items-center text-gray-400",children:[v.jsx(to,{className:"w-5 h-5 text-blue-400 mr-2"}),v.jsx("span",{children:n})]},s))}),v.jsx(wr,{to:r.path,children:v.jsxs(Sn,{children:["Learn More",v.jsx(pg,{className:"ml-2 w-4 h-4"})]})})]}),v.jsx("div",{className:"md:w-1/3",children:v.jsx("div",{className:"w-full h-48 rounded-lg overflow-hidden",children:v.jsx("img",{src:`${r.imageUrl}?auto=format&fit=crop&w=800&q=80`,alt:r.title,className:"w-full h-full object-cover"})})})]})},e)),v.jsxs("div",{className:"my-20",children:[v.jsx("h2",{className:"text-2xl font-bold text-center mb-12",children:"Our Process"}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:CT.map((r,e)=>v.jsxs(Mt,{className:"text-center",hoverable:!0,children:[v.jsx("div",{className:"text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-4",children:e+1}),v.jsx("h3",{className:"text-xl font-bold mb-3",children:r.title}),v.jsx("p",{className:"text-gray-400",children:r.description})]},e))})]}),v.jsxs("div",{className:"mb-20",children:[v.jsx("h2",{className:"text-2xl font-bold text-center mb-12",children:"Technologies We Use"}),v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-4",children:AT.map((r,e)=>v.jsx(Mt,{className:"text-center py-4",hoverable:!0,children:v.jsx("span",{className:"text-gray-300",children:r})},e))})]})]})}),PT=({title:r,description:e,image:n,category:s,technologies:o})=>v.jsxs(Mt,{hoverable:!0,className:"overflow-hidden group",children:[v.jsxs("div",{className:"relative overflow-hidden mb-4",children:[v.jsx("img",{src:n,alt:r,className:"w-full h-48 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"}),v.jsx("div",{className:"absolute top-2 right-2",children:v.jsx("span",{className:"bg-gray-900/80 backdrop-blur-sm text-blue-400 text-xs px-3 py-1 rounded-full",children:s})})]}),v.jsx("h3",{className:"text-xl font-bold mb-2",children:r}),v.jsx("p",{className:"text-gray-400 text-sm mb-4",children:e}),v.jsx("div",{className:"flex flex-wrap gap-2",children:o.map((c,u)=>v.jsx("span",{className:"text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded",children:c},u))})]}),NT=["All","Web","Mobile","Desktop","Cloud"],Qm=[{title:"E-Commerce Platform",description:"A full-featured online shopping platform with real-time inventory management.",image:"https://picsum.photos/seed/ecom/400/300",category:"Web",technologies:["React","Node.js","MongoDB"]},{title:"Health & Fitness App",description:"Mobile application for tracking workouts and nutrition with AI recommendations.",image:"https://picsum.photos/seed/health/400/300",category:"Mobile",technologies:["React Native","Firebase","TensorFlow"]},{title:"Cloud Migration Solution",description:"Enterprise-level cloud migration and infrastructure management system.",image:"https://picsum.photos/seed/cloud/400/300",category:"Cloud",technologies:["AWS","Docker","Kubernetes"]},{title:"Inventory Management",description:"Desktop application for managing warehouse inventory and logistics.",image:"https://picsum.photos/seed/inventory/400/300",category:"Desktop",technologies:["Electron","React","SQLite"]},{title:"Social Media Dashboard",description:"Comprehensive social media management and analytics platform.",image:"https://picsum.photos/seed/social/400/300",category:"Web",technologies:["React","GraphQL","PostgreSQL"]},{title:"IoT Control Center",description:"Centralized management system for IoT devices and data analytics.",image:"https://picsum.photos/seed/iot/400/300",category:"Desktop",technologies:["Python","React","MQTT"]}],LT=()=>{const[r,e]=be.useState("All"),n=r==="All"?Qm:Qm.filter(s=>s.category===r);return v.jsx("div",{className:"min-h-screen bg-black pt-20 pb-16",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ti,{title:"Our Portfolio",subtitle:"Explore our latest projects and success stories"}),v.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:NT.map(s=>v.jsx(Sn,{variant:r===s?"primary":"outline",onClick:()=>e(s),children:s},s))}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map((s,o)=>v.jsx(PT,{...s},o))})]})})},DT=({content:r,author:e,role:n,company:s,image:o})=>v.jsxs(Mt,{hoverable:!0,className:"relative",children:[v.jsx(s_,{className:"absolute top-4 right-4 w-8 h-8 text-gray-700"}),v.jsx("div",{className:"mb-6",children:v.jsx("p",{className:"text-gray-300 italic",children:r})}),v.jsxs("div",{className:"flex items-center",children:[v.jsx("img",{src:o,alt:e,className:"w-12 h-12 rounded-full mr-4"}),v.jsxs("div",{children:[v.jsx("div",{className:"font-semibold",children:e}),v.jsx("div",{className:"text-sm text-gray-400",children:n}),v.jsx("div",{className:"text-sm text-blue-400",children:s})]})]})]}),UT=[{content:"TechNova transformed our business with their innovative solutions. Their team's expertise and dedication were invaluable to our digital transformation journey.",author:"Sarah Williams",role:"CEO",company:"InnovateTech Inc",image:"https://randomuser.me/api/portraits/women/3.jpg"},{content:"Working with TechNova was a game-changer for our company. Their cloud solutions helped us scale efficiently while reducing operational costs.",author:"Michael Chen",role:"CTO",company:"CloudScale Solutions",image:"https://randomuser.me/api/portraits/men/4.jpg"},{content:"The mobile app developed by TechNova exceeded our expectations. Their attention to detail and user experience expertise is unmatched.",author:"Emily Rodriguez",role:"Product Manager",company:"MobileFirst Apps",image:"https://randomuser.me/api/portraits/women/5.jpg"},{content:"TechNova's cybersecurity solutions gave us peace of mind. Their proactive approach to security has protected our business from numerous threats.",author:"David Thompson",role:"Security Director",company:"SecureNet Systems",image:"https://randomuser.me/api/portraits/men/6.jpg"}],IT=["TechCorp","InnovateLabs","FutureScale","CloudNine","DataFlow","SmartSystems","NextGen","DigitalPrime"],FT=()=>v.jsx("div",{className:"min-h-screen bg-black pt-20 pb-16",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ti,{title:"Client Testimonials",subtitle:"Hear what our clients say about working with us"}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 mb-20",children:UT.map((r,e)=>v.jsx(DT,{...r},e))}),v.jsxs("div",{className:"mb-20",children:[v.jsx("h2",{className:"text-2xl font-bold text-center mb-12",children:"Trusted By Leading Companies"}),v.jsx("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:IT.map((r,e)=>v.jsx(Mt,{className:"p-8 text-center",hoverable:!0,children:v.jsx("span",{className:"text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent",children:r})},e))})]}),v.jsxs(Mt,{className:"text-center p-12",children:[v.jsx("h2",{className:"text-2xl font-bold mb-8",children:"Our Impact"}),v.jsxs("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-8",children:[v.jsxs("div",{children:[v.jsx("div",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2",children:"98%"}),v.jsx("div",{className:"text-gray-400",children:"Client Satisfaction"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2",children:"500+"}),v.jsx("div",{className:"text-gray-400",children:"Projects Delivered"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2",children:"50+"}),v.jsx("div",{className:"text-gray-400",children:"Countries Served"})]}),v.jsxs("div",{children:[v.jsx("div",{className:"text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent mb-2",children:"15+"}),v.jsx("div",{className:"text-gray-400",children:"Years Experience"})]})]})]})]})}),OT=()=>{const r=be.useRef(null);return be.useEffect(()=>{if(!r.current)return;const e=new Yg,n=new Hn(75,1,.1,1e3),s=new qg({alpha:!0,antialias:!0});s.setSize(300,300),r.current.appendChild(s.domElement);const o=new pf(1.5,10,10),c=new Yl({color:16739115,wireframe:!0}),u=new fi(o,c);e.add(u),n.position.z=5;const d=()=>{requestAnimationFrame(d),u.rotation.y+=.01,s.render(e,n)};return d(),()=>{r.current&&r.current.removeChild(s.domElement)}},[]),v.jsx("div",{ref:r,className:"w-[300px] h-[300px]"})},kT=()=>{const r=e=>{e.preventDefault()};return v.jsx("div",{className:"min-h-screen bg-black pt-20 pb-16",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ti,{title:"Contact Us",subtitle:"Get in touch with our team for any inquiries or support"}),v.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20",children:[v.jsx(Mt,{className:"p-8",children:v.jsxs("form",{onSubmit:r,className:"space-y-6",children:[v.jsxs("div",{children:[v.jsx("label",{className:"block text-gray-300 mb-2",children:"Name"}),v.jsx("input",{type:"text",className:"w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500",placeholder:"Your name"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-gray-300 mb-2",children:"Email"}),v.jsx("input",{type:"email",className:"w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500",placeholder:"Your email"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-gray-300 mb-2",children:"Subject"}),v.jsx("input",{type:"text",className:"w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500",placeholder:"Message subject"})]}),v.jsxs("div",{children:[v.jsx("label",{className:"block text-gray-300 mb-2",children:"Message"}),v.jsx("textarea",{className:"w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500 h-32",placeholder:"Your message"})]}),v.jsx(Sn,{type:"submit",size:"lg",className:"w-full",children:"Send Message"})]})}),v.jsxs("div",{className:"space-y-6",children:[v.jsxs(Mt,{className:"p-8",children:[v.jsxs("div",{className:"flex items-center mb-6",children:[v.jsx(n_,{className:"w-6 h-6 text-blue-400 mr-4"}),v.jsxs("div",{children:[v.jsx("h3",{className:"font-semibold mb-1",children:"Visit Us"}),v.jsx("p",{className:"text-gray-400",children:"Rajkot"})]})]}),v.jsxs("div",{className:"flex items-center mb-6",children:[v.jsx(r_,{className:"w-6 h-6 text-blue-400 mr-4"}),v.jsxs("div",{children:[v.jsx("h3",{className:"font-semibold mb-1",children:"Call Us"}),v.jsx("p",{className:"text-gray-400",children:v.jsx("a",{href:"tel:+916356893665",children:"+91 6356893665"})})]})]}),v.jsxs("div",{className:"flex items-center mb-6",children:[v.jsx(mg,{className:"w-6 h-6 text-blue-400 mr-4"}),v.jsxs("div",{children:[v.jsx("h3",{className:"font-semibold mb-1",children:"Email Us"}),v.jsx("p",{className:"text-gray-400",children:v.jsx("a",{href:"kavyata914@gmail.com",children:"info@lupa.com"})})]})]}),v.jsxs("div",{className:"flex items-center",children:[v.jsx(Yx,{className:"w-6 h-6 text-blue-400 mr-4"}),v.jsxs("div",{children:[v.jsx("h3",{className:"font-semibold mb-1",children:"Working Hours"}),v.jsx("p",{className:"text-gray-400",children:"Monday - Friday: 9:00 AM - 6:00 PM"})]})]})]}),v.jsx("div",{className:"flex justify-center",children:v.jsx(OT,{})})]})]}),v.jsx(Mt,{className:"p-8 mb-20",children:v.jsx("div",{className:"aspect-w-16 aspect-h-9",children:v.jsx("iframe",{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d691.335966142331!2d70.82905946667762!3d22.304822193903863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959b5e2265eaa6d%3A0xbf8824163cb9fbd3!2s3-6-7%2C%20Rd%20Number%201%2C%20near%20Meera%20complex%2C%20Gujarat%20Society%2C%20Arya%20Nagar%2C%20Rajkot%2C%20Gujarat%20360002!5e0!3m2!1sen!2sin!4v1744098643266!5m2!1sen!2sin",width:"100%",height:"450",style:{border:0},allowFullScreen:!0,loading:"lazy",className:"rounded-lg",title:"Google Map"})})})]})})},BT=({id:r,title:e,excerpt:n,image:s,date:o,readTime:c,category:u})=>v.jsx(Mt,{hoverable:!0,className:"overflow-hidden group",children:v.jsxs(wr,{to:`/blog/${r}`,children:[v.jsxs("div",{className:"relative overflow-hidden mb-4",children:[v.jsx("img",{src:s,alt:e,className:"w-full h-48 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-110"}),v.jsx("div",{className:"absolute top-2 right-2",children:v.jsx("span",{className:"bg-gray-900/80 backdrop-blur-sm text-blue-400 text-xs px-3 py-1 rounded-full",children:u})})]}),v.jsx("h3",{className:"text-xl font-bold mb-2 group-hover:text-blue-400 transition-colors",children:e}),v.jsx("p",{className:"text-gray-400 text-sm mb-4",children:n}),v.jsxs("div",{className:"flex items-center text-sm text-gray-500",children:[v.jsx(Wx,{size:14,className:"mr-1"}),v.jsx("span",{className:"mr-4",children:o}),v.jsx(qx,{size:14,className:"mr-1"}),v.jsx("span",{children:c})]})]})}),zT=["All","Technology","Development","Design","Business","Security"],Jm=[{id:"1",title:"The Future of Web Development in 2024",excerpt:"Explore the latest trends and technologies shaping the future of web development.",image:"https://picsum.photos/seed/web/400/300",date:"Feb 15, 2024",readTime:"5 min read",category:"Development"},{id:"2",title:"Cybersecurity Best Practices for Businesses",excerpt:"Essential security measures every business should implement to protect their digital assets.",image:"https://picsum.photos/seed/security/400/300",date:"Feb 12, 2024",readTime:"8 min read",category:"Security"},{id:"3",title:"AI in Modern Business Applications",excerpt:"How artificial intelligence is transforming business operations and decision-making.",image:"https://picsum.photos/seed/ai/400/300",date:"Feb 10, 2024",readTime:"6 min read",category:"Technology"},{id:"4",title:"UI/UX Design Trends for 2024",excerpt:"Latest design trends and practices for creating engaging user experiences.",image:"https://picsum.photos/seed/design/400/300",date:"Feb 8, 2024",readTime:"4 min read",category:"Design"},{id:"5",title:"Cloud Computing: A Comprehensive Guide",excerpt:"Understanding cloud computing and its impact on modern businesses.",image:"https://picsum.photos/seed/cloud/400/300",date:"Feb 5, 2024",readTime:"7 min read",category:"Technology"},{id:"6",title:"Digital Transformation Strategies",excerpt:"Key strategies for successful digital transformation in your organization.",image:"https://picsum.photos/seed/digital/400/300",date:"Feb 1, 2024",readTime:"5 min read",category:"Business"}],HT=()=>{const[r,e]=be.useState("All"),n=r==="All"?Jm:Jm.filter(s=>s.category===r);return v.jsx("div",{className:"min-h-screen bg-black pt-20 pb-16",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ti,{title:"Our Blog",subtitle:"Insights and updates from our team of experts"}),v.jsx(Mt,{className:"mb-12 overflow-hidden",children:v.jsxs("div",{className:"flex flex-col md:flex-row gap-8",children:[v.jsx("div",{className:"md:w-1/2",children:v.jsx("img",{src:"https://picsum.photos/seed/featured/800/600",alt:"Featured post",className:"w-full h-[300px] object-cover rounded-lg"})}),v.jsxs("div",{className:"md:w-1/2",children:[v.jsx("span",{className:"text-blue-400 text-sm mb-2 block",children:"Featured Post"}),v.jsx("h2",{className:"text-2xl font-bold mb-4",children:"The Evolution of Technology: Past, Present, and Future"}),v.jsx("p",{className:"text-gray-400 mb-4",children:"A comprehensive look at how technology has evolved over the decades and what the future holds for innovation and digital transformation."}),v.jsxs("div",{className:"flex items-center text-sm text-gray-500 mb-6",children:[v.jsx("span",{className:"mr-4",children:"Feb 20, 2024"}),v.jsx("span",{children:"10 min read"})]}),v.jsx(Sn,{href:"/blog/featured",children:"Read More"})]})]})}),v.jsx("div",{className:"flex flex-wrap justify-center gap-4 mb-12",children:zT.map(s=>v.jsx(Sn,{variant:r===s?"primary":"outline",onClick:()=>e(s),children:s},s))}),v.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:n.map(s=>v.jsx(BT,{...s},s.id))})]})})},VT=()=>{const{id:r}=mx();return v.jsx("div",{className:"min-h-screen bg-black pt-20 pb-16",children:v.jsxs("div",{className:"container mx-auto px-4 py-16",children:[v.jsxs("h1",{className:"text-3xl md:text-4xl font-bold mb-8 text-center",children:["Blog Post ",r]}),v.jsx("p",{className:"text-gray-400 text-center mb-12",children:"Blog post content coming soon"})]})})},Ws={title:"Web Development",subtitle:"Crafting responsive and dynamic websites to enhance your online presence.",imageUrl:"https://images.unsplash.com/photo-1467232004584-a241de8bcf5d",features:["Custom Website Design","Responsive Layouts","SEO Optimization","Content Management Systems"],costing:[{plan:"Starter",price:"$800",features:["1 Page","Basic SEO"]},{plan:"Professional",price:"$2000",features:["5 Pages","Advanced SEO","CMS"]},{plan:"Enterprise",price:"$4000",features:["Unlimited Pages","Full SEO","E-commerce"]}],technologies:["HTML5","CSS3","JavaScript","React","Next.js"]},GT=()=>v.jsx("div",{className:"min-h-screen pt-20 pb-16 bg-black text-white",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ti,{title:Ws.title,subtitle:Ws.subtitle}),v.jsxs("section",{className:"mb-12 flex flex-col md:flex-row gap-8 items-center",children:[v.jsx("div",{className:"md:w-1/2",children:v.jsx("img",{src:`${Ws.imageUrl}?auto=format&fit=crop&w=800&q=80`,alt:"Web Development",className:"rounded-lg shadow-lg object-cover w-full h-64 md:h-96"})}),v.jsxs("div",{className:"md:w-1/2",children:[v.jsx("p",{className:"text-gray-300 mb-6",children:"We design and develop modern websites tailored to your brand identity. From single-page designs to complex portals, we ensure high performance, responsiveness, and engaging UI/UX."}),v.jsx(Sn,{children:"Start Your Project"})]})]}),v.jsxs("section",{className:"my-12",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Key Features"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:Ws.features.map((r,e)=>v.jsxs(Mt,{className:"group p-6 flex flex-col items-start justify-between h-full hover:shadow-xl transition duration-300 border border-gray-800 hover:border-blue-500",children:[v.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[v.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-blue-500 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition duration-300",children:v.jsx(to,{className:"w-5 h-5 text-white"})}),v.jsx("h3",{className:"text-lg font-semibold text-white",children:r})]}),v.jsx("p",{className:"text-gray-400 text-sm",children:`We ensure high quality in "${r}" using modern web technologies and best practices.`})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Pricing Plans"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Ws.costing.map((r,e)=>v.jsxs(Mt,{className:"p-6",children:[v.jsx("h3",{className:"text-lg font-bold mb-2",children:r.plan}),v.jsx("p",{className:"text-2xl font-semibold text-purple-400 mb-4",children:r.price}),v.jsx("ul",{className:"text-gray-300 space-y-1",children:r.features.map((n,s)=>v.jsxs("li",{children:["• ",n]},s))})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Technologies We Use"}),v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",children:Ws.technologies.map((r,e)=>v.jsx(Mt,{className:"py-4 text-center",hoverable:!0,children:v.jsx("span",{className:"text-gray-200",children:r})},e))})]}),v.jsxs("section",{className:"text-center mt-20",children:[v.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Need a Stunning Website?"}),v.jsx("p",{className:"text-gray-400 mb-6",children:"Let's build your online presence together."}),v.jsx(Sn,{children:"Request a Demo"})]})]})}),Xs={title:"Software Development",subtitle:"Developing robust software solutions to streamline your business operations.",imageUrl:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4",features:["Custom Software Solutions","Enterprise Applications","API Development","System Integration"],costing:[{plan:"Basic",price:"$1000",features:["1 Module","Basic Support"]},{plan:"Standard",price:"$2500",features:["3 Modules","Priority Support"]},{plan:"Premium",price:"$5000",features:["All Modules","24/7 Support","Maintenance"]}],technologies:["Node.js","Python","MongoDB","MySQL","Docker"]},jT=()=>v.jsx("div",{className:"min-h-screen pt-20 pb-16 bg-black text-white",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ti,{title:Xs.title,subtitle:Xs.subtitle}),v.jsxs("section",{className:"mb-12 flex flex-col md:flex-row gap-8 items-center",children:[v.jsx("div",{className:"md:w-1/2",children:v.jsx("img",{src:`${Xs.imageUrl}?auto=format&fit=crop&w=800&q=80`,alt:"Software Development",className:"rounded-lg shadow-lg object-cover w-full h-64 md:h-96"})}),v.jsxs("div",{className:"md:w-1/2",children:[v.jsx("p",{className:"text-gray-300 mb-6",children:"We offer end-to-end software development tailored to your business processes. From planning to deployment, our team ensures seamless functionality, clean architecture, and scalable systems."}),v.jsx(Sn,{children:"Start Your Project"})]})]}),v.jsxs("section",{className:"my-12",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Key Features"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:Xs.features.map((r,e)=>v.jsxs(Mt,{className:"group p-6 flex flex-col items-start justify-between h-full hover:shadow-xl transition duration-300 border border-gray-800 hover:border-blue-500",children:[v.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[v.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-blue-500 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition duration-300",children:v.jsx(to,{className:"w-5 h-5 text-white"})}),v.jsx("h3",{className:"text-lg font-semibold text-white",children:r})]}),v.jsx("p",{className:"text-gray-400 text-sm",children:`We ensure high quality in "${r}" using modern practices and scalable architecture.`})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Pricing Plans"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Xs.costing.map((r,e)=>v.jsxs(Mt,{className:"p-6",children:[v.jsx("h3",{className:"text-lg font-bold mb-2",children:r.plan}),v.jsx("p",{className:"text-2xl font-semibold text-purple-400 mb-4",children:r.price}),v.jsx("ul",{className:"text-gray-300 space-y-1",children:r.features.map((n,s)=>v.jsxs("li",{children:["• ",n]},s))})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Technologies We Use"}),v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",children:Xs.technologies.map((r,e)=>v.jsx(Mt,{className:"py-4 text-center",hoverable:!0,children:v.jsx("span",{className:"text-gray-200",children:r})},e))})]}),v.jsxs("section",{className:"text-center mt-20",children:[v.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Ready to Start?"}),v.jsx("p",{className:"text-gray-400 mb-6",children:"Request a live demo or talk to our experts now."}),v.jsx(Sn,{children:"Request a Demo"})]})]})}),qs={title:"Mobile App Development",subtitle:"Creating user-friendly mobile applications for iOS and Android platforms.",imageUrl:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",features:["iOS App Development","Android App Development","Cross-Platform Solutions","App Store Deployment"],costing:[{plan:"Basic",price:"$1500",features:["1 Platform","Simple UI"]},{plan:"Advanced",price:"$3000",features:["Both Platforms","Modern UI/UX","API Integration"]},{plan:"Enterprise",price:"$6000",features:["Custom Features","Maintenance","Analytics Integration"]}],technologies:["React Native","Flutter","Swift","Kotlin","Firebase"]},WT=()=>v.jsx("div",{className:"min-h-screen pt-20 pb-16 bg-black text-white",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ti,{title:qs.title,subtitle:qs.subtitle}),v.jsxs("section",{className:"mb-12 flex flex-col md:flex-row gap-8 items-center",children:[v.jsx("div",{className:"md:w-1/2",children:v.jsx("img",{src:`${qs.imageUrl}?auto=format&fit=crop&w=800&q=80`,alt:"Mobile App Development",className:"rounded-lg shadow-lg object-cover w-full h-64 md:h-96"})}),v.jsxs("div",{className:"md:w-1/2",children:[v.jsx("p",{className:"text-gray-300 mb-6",children:"We design and develop high-performance mobile apps tailored to your business needs. Our team builds seamless, engaging apps across platforms, ensuring smooth performance and beautiful UI."}),v.jsx(Sn,{children:"Start Your Project"})]})]}),v.jsxs("section",{className:"my-12",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Key Features"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:qs.features.map((r,e)=>v.jsxs(Mt,{className:"group p-6 flex flex-col items-start justify-between h-full hover:shadow-xl transition duration-300 border border-gray-800 hover:border-blue-500",children:[v.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[v.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-blue-500 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition duration-300",children:v.jsx(to,{className:"w-5 h-5 text-white"})}),v.jsx("h3",{className:"text-lg font-semibold text-white",children:r})]}),v.jsx("p",{className:"text-gray-400 text-sm",children:`Delivering excellence in "${r}" with the latest mobile technologies and best-in-class user experience.`})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Pricing Plans"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:qs.costing.map((r,e)=>v.jsxs(Mt,{className:"p-6",children:[v.jsx("h3",{className:"text-lg font-bold mb-2",children:r.plan}),v.jsx("p",{className:"text-2xl font-semibold text-purple-400 mb-4",children:r.price}),v.jsx("ul",{className:"text-gray-300 space-y-1",children:r.features.map((n,s)=>v.jsxs("li",{children:["• ",n]},s))})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Technologies We Use"}),v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",children:qs.technologies.map((r,e)=>v.jsx(Mt,{className:"py-4 text-center",hoverable:!0,children:v.jsx("span",{className:"text-gray-200",children:r})},e))})]}),v.jsxs("section",{className:"text-center mt-20",children:[v.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Have a Mobile App Idea?"}),v.jsx("p",{className:"text-gray-400 mb-6",children:"Let’s bring your vision to the App Store and Google Play."}),v.jsx(Sn,{children:"Request a Demo"})]})]})}),Ys={title:"IT Consulting",subtitle:"Providing expert guidance to optimize your IT strategies and infrastructure.",imageUrl:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",features:["IT Strategy Development","Technology Assessment","Process Improvement","Project Management"],costing:[{plan:"Basic",price:"$1000/mo",features:["Initial Audit","Strategy Session"]},{plan:"Standard",price:"$2500/mo",features:["Monthly Check-ins","Tech Planning","Documentation"]},{plan:"Premium",price:"$5000/mo",features:["Dedicated Consultant","Full IT Strategy","Implementation Support"]}],technologies:["Azure","AWS","GCP","Docker","Kubernetes"]},XT=()=>v.jsx("div",{className:"min-h-screen pt-20 pb-16 bg-black text-white",children:v.jsxs("div",{className:"container mx-auto px-4",children:[v.jsx(Ti,{title:Ys.title,subtitle:Ys.subtitle}),v.jsxs("section",{className:"mb-12 flex flex-col md:flex-row gap-8 items-center",children:[v.jsx("div",{className:"md:w-1/2",children:v.jsx("img",{src:`${Ys.imageUrl}?auto=format&fit=crop&w=800&q=80`,alt:"IT Consulting",className:"rounded-lg shadow-lg object-cover w-full h-64 md:h-96"})}),v.jsxs("div",{className:"md:w-1/2",children:[v.jsx("p",{className:"text-gray-300 mb-6",children:"We help businesses evolve with expert IT strategies, planning, and execution. Our consultants align your tech stack with your goals to deliver efficiency and innovation."}),v.jsx(Sn,{children:"Start Your Consultation"})]})]}),v.jsxs("section",{className:"my-12",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Key Features"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12",children:Ys.features.map((r,e)=>v.jsxs(Mt,{className:"group p-6 flex flex-col items-start justify-between h-full hover:shadow-xl transition duration-300 border border-gray-800 hover:border-blue-500",children:[v.jsxs("div",{className:"flex items-center gap-3 mb-4",children:[v.jsx("div",{className:"bg-gradient-to-br from-purple-600 to-blue-500 p-2 rounded-full shadow-lg transform group-hover:scale-110 transition duration-300",children:v.jsx(to,{className:"w-5 h-5 text-white"})}),v.jsx("h3",{className:"text-lg font-semibold text-white",children:r})]}),v.jsx("p",{className:"text-gray-400 text-sm",children:`Our consultants provide unmatched expertise in "${r}" to drive innovation.`})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Pricing Plans"}),v.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",children:Ys.costing.map((r,e)=>v.jsxs(Mt,{className:"p-6",children:[v.jsx("h3",{className:"text-lg font-bold mb-2",children:r.plan}),v.jsx("p",{className:"text-2xl font-semibold text-purple-400 mb-4",children:r.price}),v.jsx("ul",{className:"text-gray-300 space-y-1",children:r.features.map((n,s)=>v.jsxs("li",{children:["• ",n]},s))})]},e))})]}),v.jsxs("section",{className:"mb-16",children:[v.jsx("h2",{className:"text-xl font-bold mb-6 text-blue-400",children:"Technologies We Use"}),v.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4",children:Ys.technologies.map((r,e)=>v.jsx(Mt,{className:"py-4 text-center",hoverable:!0,children:v.jsx("span",{className:"text-gray-200",children:r})},e))})]}),v.jsxs("section",{className:"text-center mt-20",children:[v.jsx("h2",{className:"text-2xl font-bold mb-4",children:"Transform Your IT Operations"}),v.jsx("p",{className:"text-gray-400 mb-6",children:"Partner with us for strategic success."}),v.jsx(Sn,{children:"Request a Free Consultation"})]})]})}),qT=()=>v.jsxs("div",{className:"flex flex-col items-center justify-center text-center py-20",children:[v.jsx("h1",{className:"text-4xl font-bold mb-4",children:"404 - Page Not Found"}),v.jsx("p",{className:"text-lg text-gray-400 mb-6",children:"Oops! The page you're looking for doesn't exist."}),v.jsx(wr,{to:"/",className:"px-6 py-2 bg-white text-black rounded-xl hover:bg-gray-200 transition-all",children:"Go Back Home"})]}),YT=()=>v.jsx(kx,{children:v.jsxs("div",{className:"flex flex-col min-h-screen bg-black text-white",children:[v.jsx(h_,{}),v.jsx("main",{className:"flex-grow",children:v.jsxs(Nx,{children:[v.jsx(Nn,{path:"/kavyata/",element:v.jsx(MT,{})}),v.jsx(Nn,{path:"/kavyata/about",element:v.jsx(wT,{})}),v.jsx(Nn,{path:"/kavyata/services",element:v.jsx(RT,{})}),v.jsx(Nn,{path:"/kavyata/portfolio",element:v.jsx(LT,{})}),v.jsx(Nn,{path:"/kavyata/testimonials",element:v.jsx(FT,{})}),v.jsx(Nn,{path:"/kavyata/contact",element:v.jsx(kT,{})}),v.jsx(Nn,{path:"/kavyata/blog",element:v.jsx(HT,{})}),v.jsx(Nn,{path:"/kavyata/blog/:id",element:v.jsx(VT,{})}),v.jsx(Nn,{path:"/kavyata/services/web-development",element:v.jsx(GT,{})}),v.jsx(Nn,{path:"/kavyata/services/software-development",element:v.jsx(jT,{})}),v.jsx(Nn,{path:"/kavyata/services/mobile-app-development",element:v.jsx(WT,{})}),v.jsx(Nn,{path:"/kavyata/services/it-consulting",element:v.jsx(XT,{})}),v.jsx(Nn,{path:"/kavyata/*",element:v.jsx(qT,{})})]})}),v.jsx(p_,{})]})}),$T=document.getElementById("root"),KT=k0.createRoot($T);KT.render(v.jsx(YT,{}));
