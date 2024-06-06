(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
* @vue/shared v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Pf(i,e){const t=new Set(i.split(","));return n=>t.has(n)}const yt={},oo=[],Nn=()=>{},Jy=()=>!1,nh=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&(i.charCodeAt(2)>122||i.charCodeAt(2)<97),Ff=i=>i.startsWith("onUpdate:"),qt=Object.assign,Uf=(i,e)=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)},Zy=Object.prototype.hasOwnProperty,tt=(i,e)=>Zy.call(i,e),ze=Array.isArray,_a=i=>ih(i)==="[object Map]",ex=i=>ih(i)==="[object Set]",$e=i=>typeof i=="function",Kt=i=>typeof i=="string",Va=i=>typeof i=="symbol",Ut=i=>i!==null&&typeof i=="object",G_=i=>(Ut(i)||$e(i))&&$e(i.then)&&$e(i.catch),tx=Object.prototype.toString,ih=i=>tx.call(i),nx=i=>ih(i).slice(8,-1),ix=i=>ih(i)==="[object Object]",Nf=i=>Kt(i)&&i!=="NaN"&&i[0]!=="-"&&""+parseInt(i,10)===i,Ea=Pf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),sh=i=>{const e=Object.create(null);return t=>e[t]||(e[t]=i(t))},sx=/-(\w)/g,po=sh(i=>i.replace(sx,(e,t)=>t?t.toUpperCase():"")),rx=/\B([A-Z])/g,bo=sh(i=>i.replace(rx,"-$1").toLowerCase()),H_=sh(i=>i.charAt(0).toUpperCase()+i.slice(1)),Ch=sh(i=>i?`on${H_(i)}`:""),vs=(i,e)=>!Object.is(i,e),Mh=(i,e)=>{for(let t=0;t<i.length;t++)i[t](e)},V_=(i,e,t,n=!1)=>{Object.defineProperty(i,e,{configurable:!0,enumerable:!1,writable:n,value:t})},ox=i=>{const e=parseFloat(i);return isNaN(e)?i:e};let PA;const z_=()=>PA||(PA=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ao(i){if(ze(i)){const e={};for(let t=0;t<i.length;t++){const n=i[t],s=Kt(n)?hx(n):ao(n);if(s)for(const r in s)e[r]=s[r]}return e}else if(Kt(i)||Ut(i))return i}const ax=/;(?![^(]*\))/g,lx=/:([^]+)/,cx=/\/\*[^]*?\*\//g;function hx(i){const e={};return i.replace(cx,"").split(ax).forEach(t=>{if(t){const n=t.split(lx);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e}function Of(i){let e="";if(Kt(i))e=i;else if(ze(i))for(let t=0;t<i.length;t++){const n=Of(i[t]);n&&(e+=n+" ")}else if(Ut(i))for(const t in i)i[t]&&(e+=t+" ");return e.trim()}const ux="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",dx=Pf(ux);function W_(i){return!!i||i===""}/**
* @vue/reactivity v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let qn;class fx{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=qn,!e&&qn&&(this.index=(qn.scopes||(qn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=qn;try{return qn=this,e()}finally{qn=t}}}on(){qn=this}off(){qn=this.parent}stop(e){if(this._active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Ax(i,e=qn){e&&e.active&&e.effects.push(i)}function px(){return qn}let tr;class Qf{constructor(e,t,n,s){this.fn=e,this.trigger=t,this.scheduler=n,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Ax(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Is();for(let e=0;e<this._depsLength;e++){const t=this.deps[e];if(t.computed&&(mx(t.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Cs()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=ms,t=tr;try{return ms=!0,tr=this,this._runnings++,FA(this),this.fn()}finally{UA(this),this._runnings--,tr=t,ms=e}}stop(){this.active&&(FA(this),UA(this),this.onStop&&this.onStop(),this.active=!1)}}function mx(i){return i.value}function FA(i){i._trackId++,i._depsLength=0}function UA(i){if(i.deps.length>i._depsLength){for(let e=i._depsLength;e<i.deps.length;e++)q_(i.deps[e],i);i.deps.length=i._depsLength}}function q_(i,e){const t=i.get(e);t!==void 0&&e._trackId!==t&&(i.delete(e),i.size===0&&i.cleanup())}let ms=!0,Qd=0;const $_=[];function Is(){$_.push(ms),ms=!1}function Cs(){const i=$_.pop();ms=i===void 0?!0:i}function kf(){Qd++}function Gf(){for(Qd--;!Qd&&kd.length;)kd.shift()()}function X_(i,e,t){if(e.get(i)!==i._trackId){e.set(i,i._trackId);const n=i.deps[i._depsLength];n!==e?(n&&q_(n,i),i.deps[i._depsLength++]=e):i._depsLength++}}const kd=[];function Y_(i,e,t){kf();for(const n of i.keys()){let s;n._dirtyLevel<e&&(s??(s=i.get(n)===n._trackId))&&(n._shouldSchedule||(n._shouldSchedule=n._dirtyLevel===0),n._dirtyLevel=e),n._shouldSchedule&&(s??(s=i.get(n)===n._trackId))&&(n.trigger(),(!n._runnings||n.allowRecurse)&&n._dirtyLevel!==2&&(n._shouldSchedule=!1,n.scheduler&&kd.push(n.scheduler)))}Gf()}const K_=(i,e)=>{const t=new Map;return t.cleanup=i,t.computed=e,t},Gd=new WeakMap,nr=Symbol(""),Hd=Symbol("");function En(i,e,t){if(ms&&tr){let n=Gd.get(i);n||Gd.set(i,n=new Map);let s=n.get(t);s||n.set(t,s=K_(()=>n.delete(t))),X_(tr,s)}}function Gi(i,e,t,n,s,r){const o=Gd.get(i);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ze(i)){const l=Number(n);o.forEach((c,h)=>{(h==="length"||!Va(h)&&h>=l)&&a.push(c)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ze(i)?Nf(t)&&a.push(o.get("length")):(a.push(o.get(nr)),_a(i)&&a.push(o.get(Hd)));break;case"delete":ze(i)||(a.push(o.get(nr)),_a(i)&&a.push(o.get(Hd)));break;case"set":_a(i)&&a.push(o.get(nr));break}kf();for(const l of a)l&&Y_(l,4);Gf()}const gx=Pf("__proto__,__v_isRef,__isVue"),j_=new Set(Object.getOwnPropertyNames(Symbol).filter(i=>i!=="arguments"&&i!=="caller").map(i=>Symbol[i]).filter(Va)),NA=_x();function _x(){const i={};return["includes","indexOf","lastIndexOf"].forEach(e=>{i[e]=function(...t){const n=ot(this);for(let r=0,o=this.length;r<o;r++)En(n,"get",r+"");const s=n[e](...t);return s===-1||s===!1?n[e](...t.map(ot)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{i[e]=function(...t){Is(),kf();const n=ot(this)[e].apply(this,t);return Gf(),Cs(),n}}),i}function Ex(i){Va(i)||(i=String(i));const e=ot(this);return En(e,"has",i),e.hasOwnProperty(i)}class J_{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,n){const s=this._isReadonly,r=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return r;if(t==="__v_raw")return n===(s?r?Dx:nE:r?tE:eE).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(n)?e:void 0;const o=ze(e);if(!s){if(o&&tt(NA,t))return Reflect.get(NA,t,n);if(t==="hasOwnProperty")return Ex}const a=Reflect.get(e,t,n);return(Va(t)?j_.has(t):gx(t))||(s||En(e,"get",t),r)?a:vn(a)?o&&Nf(t)?a:a.value:Ut(a)?s?iE(a):zf(a):a}}class Z_ extends J_{constructor(e=!1){super(!1,e)}set(e,t,n,s){let r=e[t];if(!this._isShallow){const l=Ta(r);if(!Pc(n)&&!Ta(n)&&(r=ot(r),n=ot(n)),!ze(e)&&vn(r)&&!vn(n))return l?!1:(r.value=n,!0)}const o=ze(e)&&Nf(t)?Number(t)<e.length:tt(e,t),a=Reflect.set(e,t,n,s);return e===ot(s)&&(o?vs(n,r)&&Gi(e,"set",t,n):Gi(e,"add",t,n)),a}deleteProperty(e,t){const n=tt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&Gi(e,"delete",t,void 0),s}has(e,t){const n=Reflect.has(e,t);return(!Va(t)||!j_.has(t))&&En(e,"has",t),n}ownKeys(e){return En(e,"iterate",ze(e)?"length":nr),Reflect.ownKeys(e)}}class vx extends J_{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const yx=new Z_,xx=new vx,Sx=new Z_(!0);const Hf=i=>i,rh=i=>Reflect.getPrototypeOf(i);function nl(i,e,t=!1,n=!1){i=i.__v_raw;const s=ot(i),r=ot(e);t||(vs(e,r)&&En(s,"get",e),En(s,"get",r));const{has:o}=rh(s),a=n?Hf:t?qf:Ba;if(o.call(s,e))return a(i.get(e));if(o.call(s,r))return a(i.get(r));i!==s&&i.get(e)}function il(i,e=!1){const t=this.__v_raw,n=ot(t),s=ot(i);return e||(vs(i,s)&&En(n,"has",i),En(n,"has",s)),i===s?t.has(i):t.has(i)||t.has(s)}function sl(i,e=!1){return i=i.__v_raw,!e&&En(ot(i),"iterate",nr),Reflect.get(i,"size",i)}function OA(i){i=ot(i);const e=ot(this);return rh(e).has.call(e,i)||(e.add(i),Gi(e,"add",i,i)),this}function QA(i,e){e=ot(e);const t=ot(this),{has:n,get:s}=rh(t);let r=n.call(t,i);r||(i=ot(i),r=n.call(t,i));const o=s.call(t,i);return t.set(i,e),r?vs(e,o)&&Gi(t,"set",i,e):Gi(t,"add",i,e),this}function kA(i){const e=ot(this),{has:t,get:n}=rh(e);let s=t.call(e,i);s||(i=ot(i),s=t.call(e,i)),n&&n.call(e,i);const r=e.delete(i);return s&&Gi(e,"delete",i,void 0),r}function GA(){const i=ot(this),e=i.size!==0,t=i.clear();return e&&Gi(i,"clear",void 0,void 0),t}function rl(i,e){return function(n,s){const r=this,o=r.__v_raw,a=ot(o),l=e?Hf:i?qf:Ba;return!i&&En(a,"iterate",nr),o.forEach((c,h)=>n.call(s,l(c),l(h),r))}}function ol(i,e,t){return function(...n){const s=this.__v_raw,r=ot(s),o=_a(r),a=i==="entries"||i===Symbol.iterator&&o,l=i==="keys"&&o,c=s[i](...n),h=t?Hf:e?qf:Ba;return!e&&En(r,"iterate",l?Hd:nr),{next(){const{value:u,done:d}=c.next();return d?{value:u,done:d}:{value:a?[h(u[0]),h(u[1])]:h(u),done:d}},[Symbol.iterator](){return this}}}}function $i(i){return function(...e){return i==="delete"?!1:i==="clear"?void 0:this}}function Ix(){const i={get(r){return nl(this,r)},get size(){return sl(this)},has:il,add:OA,set:QA,delete:kA,clear:GA,forEach:rl(!1,!1)},e={get(r){return nl(this,r,!1,!0)},get size(){return sl(this)},has:il,add:OA,set:QA,delete:kA,clear:GA,forEach:rl(!1,!0)},t={get(r){return nl(this,r,!0)},get size(){return sl(this,!0)},has(r){return il.call(this,r,!0)},add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear"),forEach:rl(!0,!1)},n={get(r){return nl(this,r,!0,!0)},get size(){return sl(this,!0)},has(r){return il.call(this,r,!0)},add:$i("add"),set:$i("set"),delete:$i("delete"),clear:$i("clear"),forEach:rl(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{i[r]=ol(r,!1,!1),t[r]=ol(r,!0,!1),e[r]=ol(r,!1,!0),n[r]=ol(r,!0,!0)}),[i,t,e,n]}const[Cx,Mx,wx,bx]=Ix();function Vf(i,e){const t=e?i?bx:wx:i?Mx:Cx;return(n,s,r)=>s==="__v_isReactive"?!i:s==="__v_isReadonly"?i:s==="__v_raw"?n:Reflect.get(tt(t,s)&&s in n?t:n,s,r)}const Tx={get:Vf(!1,!1)},Bx={get:Vf(!1,!0)},Rx={get:Vf(!0,!1)};const eE=new WeakMap,tE=new WeakMap,nE=new WeakMap,Dx=new WeakMap;function Lx(i){switch(i){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Px(i){return i.__v_skip||!Object.isExtensible(i)?0:Lx(nx(i))}function zf(i){return Ta(i)?i:Wf(i,!1,yx,Tx,eE)}function Fx(i){return Wf(i,!1,Sx,Bx,tE)}function iE(i){return Wf(i,!0,xx,Rx,nE)}function Wf(i,e,t,n,s){if(!Ut(i)||i.__v_raw&&!(e&&i.__v_isReactive))return i;const r=s.get(i);if(r)return r;const o=Px(i);if(o===0)return i;const a=new Proxy(i,o===2?n:t);return s.set(i,a),a}function va(i){return Ta(i)?va(i.__v_raw):!!(i&&i.__v_isReactive)}function Ta(i){return!!(i&&i.__v_isReadonly)}function Pc(i){return!!(i&&i.__v_isShallow)}function sE(i){return i?!!i.__v_raw:!1}function ot(i){const e=i&&i.__v_raw;return e?ot(e):i}function Ux(i){return Object.isExtensible(i)&&V_(i,"__v_skip",!0),i}const Ba=i=>Ut(i)?zf(i):i,qf=i=>Ut(i)?iE(i):i;class rE{constructor(e,t,n,s){this.getter=e,this._setter=t,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Qf(()=>e(this._value),()=>hc(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=n}get value(){const e=ot(this);return(!e._cacheable||e.effect.dirty)&&vs(e._value,e._value=e.effect.run())&&hc(e,4),oE(e),e.effect._dirtyLevel>=2&&hc(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function Nx(i,e,t=!1){let n,s;const r=$e(i);return r?(n=i,s=Nn):(n=i.get,s=i.set),new rE(n,s,r||!s,t)}function oE(i){var e;ms&&tr&&(i=ot(i),X_(tr,(e=i.dep)!=null?e:i.dep=K_(()=>i.dep=void 0,i instanceof rE?i:void 0)))}function hc(i,e=4,t){i=ot(i);const n=i.dep;n&&Y_(n,e)}function vn(i){return!!(i&&i.__v_isRef===!0)}function Vd(i){return Ox(i,!1)}function Ox(i,e){return vn(i)?i:new Qx(i,e)}class Qx{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:ot(e),this._value=t?e:Ba(e)}get value(){return oE(this),this._value}set value(e){const t=this.__v_isShallow||Pc(e)||Ta(e);e=t?e:ot(e),vs(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ba(e),hc(this,4))}}function kx(i){return vn(i)?i.value:i}const Gx={get:(i,e,t)=>kx(Reflect.get(i,e,t)),set:(i,e,t,n)=>{const s=i[e];return vn(s)&&!vn(t)?(s.value=t,!0):Reflect.set(i,e,t,n)}};function aE(i){return va(i)?i:new Proxy(i,Gx)}/**
* @vue/runtime-core v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function gs(i,e,t,n){try{return n?i(...n):i()}catch(s){oh(s,e,t)}}function jn(i,e,t,n){if($e(i)){const s=gs(i,e,t,n);return s&&G_(s)&&s.catch(r=>{oh(r,e,t)}),s}if(ze(i)){const s=[];for(let r=0;r<i.length;r++)s.push(jn(i[r],e,t,n));return s}}function oh(i,e,t,n=!0){const s=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${t}`;for(;r;){const c=r.ec;if(c){for(let h=0;h<c.length;h++)if(c[h](i,o,a)===!1)return}r=r.parent}const l=e.appContext.config.errorHandler;if(l){Is(),gs(l,null,10,[i,o,a]),Cs();return}}Hx(i,t,s,n)}function Hx(i,e,t,n=!0){console.error(i)}let Ra=!1,zd=!1;const sn=[];let hi=0;const lo=[];let ss=null,Ys=0;const lE=Promise.resolve();let $f=null;function Vx(i){const e=$f||lE;return i?e.then(this?i.bind(this):i):e}function zx(i){let e=hi+1,t=sn.length;for(;e<t;){const n=e+t>>>1,s=sn[n],r=Da(s);r<i||r===i&&s.pre?e=n+1:t=n}return e}function Xf(i){(!sn.length||!sn.includes(i,Ra&&i.allowRecurse?hi+1:hi))&&(i.id==null?sn.push(i):sn.splice(zx(i.id),0,i),cE())}function cE(){!Ra&&!zd&&(zd=!0,$f=lE.then(uE))}function Wx(i){const e=sn.indexOf(i);e>hi&&sn.splice(e,1)}function qx(i){ze(i)?lo.push(...i):(!ss||!ss.includes(i,i.allowRecurse?Ys+1:Ys))&&lo.push(i),cE()}function HA(i,e,t=Ra?hi+1:0){for(;t<sn.length;t++){const n=sn[t];if(n&&n.pre){if(i&&n.id!==i.uid)continue;sn.splice(t,1),t--,n()}}}function hE(i){if(lo.length){const e=[...new Set(lo)].sort((t,n)=>Da(t)-Da(n));if(lo.length=0,ss){ss.push(...e);return}for(ss=e,Ys=0;Ys<ss.length;Ys++)ss[Ys]();ss=null,Ys=0}}const Da=i=>i.id==null?1/0:i.id,$x=(i,e)=>{const t=Da(i)-Da(e);if(t===0){if(i.pre&&!e.pre)return-1;if(e.pre&&!i.pre)return 1}return t};function uE(i){zd=!1,Ra=!0,sn.sort($x);try{for(hi=0;hi<sn.length;hi++){const e=sn[hi];e&&e.active!==!1&&gs(e,null,14)}}finally{hi=0,sn.length=0,hE(),Ra=!1,$f=null,(sn.length||lo.length)&&uE()}}function Xx(i,e,...t){if(i.isUnmounted)return;const n=i.vnode.props||yt;let s=t;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in n){const h=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:d}=n[h]||yt;d&&(s=t.map(f=>Kt(f)?f.trim():f)),u&&(s=t.map(ox))}let a,l=n[a=Ch(e)]||n[a=Ch(po(e))];!l&&r&&(l=n[a=Ch(bo(e))]),l&&jn(l,i,6,s);const c=n[a+"Once"];if(c){if(!i.emitted)i.emitted={};else if(i.emitted[a])return;i.emitted[a]=!0,jn(c,i,6,s)}}function dE(i,e,t=!1){const n=e.emitsCache,s=n.get(i);if(s!==void 0)return s;const r=i.emits;let o={},a=!1;if(!$e(i)){const l=c=>{const h=dE(c,e,!0);h&&(a=!0,qt(o,h))};!t&&e.mixins.length&&e.mixins.forEach(l),i.extends&&l(i.extends),i.mixins&&i.mixins.forEach(l)}return!r&&!a?(Ut(i)&&n.set(i,null),null):(ze(r)?r.forEach(l=>o[l]=null):qt(o,r),Ut(i)&&n.set(i,o),o)}function ah(i,e){return!i||!nh(e)?!1:(e=e.slice(2).replace(/Once$/,""),tt(i,e[0].toLowerCase()+e.slice(1))||tt(i,bo(e))||tt(i,e))}let di=null,fE=null;function Fc(i){const e=di;return di=i,fE=i&&i.type.__scopeId||null,e}function Yx(i,e=di,t){if(!e||i._n)return i;const n=(...s)=>{n._d&&JA(-1);const r=Fc(e);let o;try{o=i(...s)}finally{Fc(r),n._d&&JA(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function wh(i){const{type:e,vnode:t,proxy:n,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:h,props:u,data:d,setupState:f,ctx:m,inheritAttrs:g}=i,A=Fc(i);let p,x;try{if(t.shapeFlag&4){const C=s||n,M=C;p=li(c.call(M,C,h,u,f,d,m)),x=a}else{const C=e;p=li(C.length>1?C(u,{attrs:a,slots:o,emit:l}):C(u,null)),x=e.props?a:Kx(a)}}catch(C){Sa.length=0,oh(C,i,1),p=_s(La)}let _=p;if(x&&g!==!1){const C=Object.keys(x),{shapeFlag:M}=_;C.length&&M&7&&(r&&C.some(Ff)&&(x=jx(x,r)),_=mo(_,x,!1,!0))}return t.dirs&&(_=mo(_,null,!1,!0),_.dirs=_.dirs?_.dirs.concat(t.dirs):t.dirs),t.transition&&(_.transition=t.transition),p=_,Fc(A),p}const Kx=i=>{let e;for(const t in i)(t==="class"||t==="style"||nh(t))&&((e||(e={}))[t]=i[t]);return e},jx=(i,e)=>{const t={};for(const n in i)(!Ff(n)||!(n.slice(9)in e))&&(t[n]=i[n]);return t};function Jx(i,e,t){const{props:n,children:s,component:r}=i,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return n?VA(n,o,c):!!o;if(l&8){const h=e.dynamicProps;for(let u=0;u<h.length;u++){const d=h[u];if(o[d]!==n[d]&&!ah(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:n===o?!1:n?o?VA(n,o,c):!0:!!o;return!1}function VA(i,e,t){const n=Object.keys(e);if(n.length!==Object.keys(i).length)return!0;for(let s=0;s<n.length;s++){const r=n[s];if(e[r]!==i[r]&&!ah(t,r))return!0}return!1}function Zx({vnode:i,parent:e},t){for(;e;){const n=e.subTree;if(n.suspense&&n.suspense.activeBranch===i&&(n.el=i.el),n===i)(i=e.vnode).el=t,e=e.parent;else break}}const eS=Symbol.for("v-ndc"),tS=i=>i.__isSuspense;function nS(i,e){e&&e.pendingBranch?ze(i)?e.effects.push(...i):e.effects.push(i):qx(i)}const iS=Symbol.for("v-scx"),sS=()=>fc(iS),al={};function uc(i,e,t){return AE(i,e,t)}function AE(i,e,{immediate:t,deep:n,flush:s,once:r,onTrack:o,onTrigger:a}=yt){if(e&&r){const I=e;e=(...w)=>{I(...w),M()}}const l=An,c=I=>n===!0?I:jr(I,n===!1?1:void 0);let h,u=!1,d=!1;if(vn(i)?(h=()=>i.value,u=Pc(i)):va(i)?(h=()=>c(i),u=!0):ze(i)?(d=!0,u=i.some(I=>va(I)||Pc(I)),h=()=>i.map(I=>{if(vn(I))return I.value;if(va(I))return c(I);if($e(I))return gs(I,l,2)})):$e(i)?e?h=()=>gs(i,l,2):h=()=>(f&&f(),jn(i,l,3,[m])):h=Nn,e&&n){const I=h;h=()=>jr(I())}let f,m=I=>{f=_.onStop=()=>{gs(I,l,4),f=_.onStop=void 0}},g;if(hh)if(m=Nn,e?t&&jn(e,l,3,[h(),d?[]:void 0,m]):h(),s==="sync"){const I=sS();g=I.__watcherHandles||(I.__watcherHandles=[])}else return Nn;let A=d?new Array(i.length).fill(al):al;const p=()=>{if(!(!_.active||!_.dirty))if(e){const I=_.run();(n||u||(d?I.some((w,B)=>vs(w,A[B])):vs(I,A)))&&(f&&f(),jn(e,l,3,[I,A===al?void 0:d&&A[0]===al?[]:A,m]),A=I)}else _.run()};p.allowRecurse=!!e;let x;s==="sync"?x=p:s==="post"?x=()=>gn(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),x=()=>Xf(p));const _=new Qf(h,Nn,x),C=px(),M=()=>{_.stop(),C&&Uf(C.effects,_)};return e?t?p():A=_.run():s==="post"?gn(_.run.bind(_),l&&l.suspense):_.run(),g&&g.push(M),M}function rS(i,e,t){const n=this.proxy,s=Kt(i)?i.includes(".")?pE(n,i):()=>n[i]:i.bind(n,n);let r;$e(e)?r=e:(r=e.handler,t=e);const o=za(this),a=AE(s,r.bind(n),t);return o(),a}function pE(i,e){const t=e.split(".");return()=>{let n=i;for(let s=0;s<t.length&&n;s++)n=n[t[s]];return n}}function jr(i,e=1/0,t){if(e<=0||!Ut(i)||i.__v_skip||(t=t||new Set,t.has(i)))return i;if(t.add(i),e--,vn(i))jr(i.value,e,t);else if(ze(i))for(let n=0;n<i.length;n++)jr(i[n],e,t);else if(ex(i)||_a(i))i.forEach(n=>{jr(n,e,t)});else if(ix(i))for(const n in i)jr(i[n],e,t);return i}function bs(i,e,t,n){const s=i.dirs,r=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[n];l&&(Is(),jn(l,t,8,[i.el,a,i,e]),Cs())}}/*! #__NO_SIDE_EFFECTS__ */function mE(i,e){return $e(i)?qt({name:i.name},e,{setup:i}):i}const dc=i=>!!i.type.__asyncLoader,gE=i=>i.type.__isKeepAlive;function oS(i,e){_E(i,"a",e)}function aS(i,e){_E(i,"da",e)}function _E(i,e,t=An){const n=i.__wdc||(i.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return i()});if(lh(e,n,t),t){let s=t.parent;for(;s&&s.parent;)gE(s.parent.vnode)&&lS(n,e,t,s),s=s.parent}}function lS(i,e,t,n){const s=lh(e,i,n,!0);EE(()=>{Uf(n[e],s)},t)}function lh(i,e,t=An,n=!1){if(t){const s=t[i]||(t[i]=[]),r=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;Is();const a=za(t),l=jn(e,t,i,o);return a(),Cs(),l});return n?s.unshift(r):s.push(r),r}}const zi=i=>(e,t=An)=>(!hh||i==="sp")&&lh(i,(...n)=>e(...n),t),cS=zi("bm"),hS=zi("m"),uS=zi("bu"),dS=zi("u"),fS=zi("bum"),EE=zi("um"),AS=zi("sp"),pS=zi("rtg"),mS=zi("rtc");function gS(i,e=An){lh("ec",i,e)}const Wd=i=>i?FE(i)?Jf(i)||i.proxy:Wd(i.parent):null,ya=qt(Object.create(null),{$:i=>i,$el:i=>i.vnode.el,$data:i=>i.data,$props:i=>i.props,$attrs:i=>i.attrs,$slots:i=>i.slots,$refs:i=>i.refs,$parent:i=>Wd(i.parent),$root:i=>Wd(i.root),$emit:i=>i.emit,$options:i=>Yf(i),$forceUpdate:i=>i.f||(i.f=()=>{i.effect.dirty=!0,Xf(i.update)}),$nextTick:i=>i.n||(i.n=Vx.bind(i.proxy)),$watch:i=>rS.bind(i)}),bh=(i,e)=>i!==yt&&!i.__isScriptSetup&&tt(i,e),_S={get({_:i},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:n,data:s,props:r,accessCache:o,type:a,appContext:l}=i;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return n[e];case 2:return s[e];case 4:return t[e];case 3:return r[e]}else{if(bh(n,e))return o[e]=1,n[e];if(s!==yt&&tt(s,e))return o[e]=2,s[e];if((c=i.propsOptions[0])&&tt(c,e))return o[e]=3,r[e];if(t!==yt&&tt(t,e))return o[e]=4,t[e];qd&&(o[e]=0)}}const h=ya[e];let u,d;if(h)return e==="$attrs"&&En(i.attrs,"get",""),h(i);if((u=a.__cssModules)&&(u=u[e]))return u;if(t!==yt&&tt(t,e))return o[e]=4,t[e];if(d=l.config.globalProperties,tt(d,e))return d[e]},set({_:i},e,t){const{data:n,setupState:s,ctx:r}=i;return bh(s,e)?(s[e]=t,!0):n!==yt&&tt(n,e)?(n[e]=t,!0):tt(i.props,e)||e[0]==="$"&&e.slice(1)in i?!1:(r[e]=t,!0)},has({_:{data:i,setupState:e,accessCache:t,ctx:n,appContext:s,propsOptions:r}},o){let a;return!!t[o]||i!==yt&&tt(i,o)||bh(e,o)||(a=r[0])&&tt(a,o)||tt(n,o)||tt(ya,o)||tt(s.config.globalProperties,o)},defineProperty(i,e,t){return t.get!=null?i._.accessCache[e]=0:tt(t,"value")&&this.set(i,e,t.value,null),Reflect.defineProperty(i,e,t)}};function zA(i){return ze(i)?i.reduce((e,t)=>(e[t]=null,e),{}):i}let qd=!0;function ES(i){const e=Yf(i),t=i.proxy,n=i.ctx;qd=!1,e.beforeCreate&&WA(e.beforeCreate,i,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:h,beforeMount:u,mounted:d,beforeUpdate:f,updated:m,activated:g,deactivated:A,beforeDestroy:p,beforeUnmount:x,destroyed:_,unmounted:C,render:M,renderTracked:I,renderTriggered:w,errorCaptured:B,serverPrefetch:y,expose:v,inheritAttrs:U,components:V,directives:D,filters:G}=e;if(c&&vS(c,n,null),o)for(const q in o){const Q=o[q];$e(Q)&&(n[q]=Q.bind(t))}if(s){const q=s.call(t,t);Ut(q)&&(i.data=zf(q))}if(qd=!0,r)for(const q in r){const Q=r[q],te=$e(Q)?Q.bind(t,t):$e(Q.get)?Q.get.bind(t,t):Nn,ne=!$e(Q)&&$e(Q.set)?Q.set.bind(t):Nn,ae=pc({get:te,set:ne});Object.defineProperty(n,q,{enumerable:!0,configurable:!0,get:()=>ae.value,set:ge=>ae.value=ge})}if(a)for(const q in a)vE(a[q],n,t,q);if(l){const q=$e(l)?l.call(t):l;Reflect.ownKeys(q).forEach(Q=>{MS(Q,q[Q])})}h&&WA(h,i,"c");function X(q,Q){ze(Q)?Q.forEach(te=>q(te.bind(t))):Q&&q(Q.bind(t))}if(X(cS,u),X(hS,d),X(uS,f),X(dS,m),X(oS,g),X(aS,A),X(gS,B),X(mS,I),X(pS,w),X(fS,x),X(EE,C),X(AS,y),ze(v))if(v.length){const q=i.exposed||(i.exposed={});v.forEach(Q=>{Object.defineProperty(q,Q,{get:()=>t[Q],set:te=>t[Q]=te})})}else i.exposed||(i.exposed={});M&&i.render===Nn&&(i.render=M),U!=null&&(i.inheritAttrs=U),V&&(i.components=V),D&&(i.directives=D)}function vS(i,e,t=Nn){ze(i)&&(i=$d(i));for(const n in i){const s=i[n];let r;Ut(s)?"default"in s?r=fc(s.from||n,s.default,!0):r=fc(s.from||n):r=fc(s),vn(r)?Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[n]=r}}function WA(i,e,t){jn(ze(i)?i.map(n=>n.bind(e.proxy)):i.bind(e.proxy),e,t)}function vE(i,e,t,n){const s=n.includes(".")?pE(t,n):()=>t[n];if(Kt(i)){const r=e[i];$e(r)&&uc(s,r)}else if($e(i))uc(s,i.bind(t));else if(Ut(i))if(ze(i))i.forEach(r=>vE(r,e,t,n));else{const r=$e(i.handler)?i.handler.bind(t):e[i.handler];$e(r)&&uc(s,r,i)}}function Yf(i){const e=i.type,{mixins:t,extends:n}=e,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=i.appContext,a=r.get(e);let l;return a?l=a:!s.length&&!t&&!n?l=e:(l={},s.length&&s.forEach(c=>Uc(l,c,o,!0)),Uc(l,e,o)),Ut(e)&&r.set(e,l),l}function Uc(i,e,t,n=!1){const{mixins:s,extends:r}=e;r&&Uc(i,r,t,!0),s&&s.forEach(o=>Uc(i,o,t,!0));for(const o in e)if(!(n&&o==="expose")){const a=yS[o]||t&&t[o];i[o]=a?a(i[o],e[o]):e[o]}return i}const yS={data:qA,props:$A,emits:$A,methods:ca,computed:ca,beforeCreate:un,created:un,beforeMount:un,mounted:un,beforeUpdate:un,updated:un,beforeDestroy:un,beforeUnmount:un,destroyed:un,unmounted:un,activated:un,deactivated:un,errorCaptured:un,serverPrefetch:un,components:ca,directives:ca,watch:SS,provide:qA,inject:xS};function qA(i,e){return e?i?function(){return qt($e(i)?i.call(this,this):i,$e(e)?e.call(this,this):e)}:e:i}function xS(i,e){return ca($d(i),$d(e))}function $d(i){if(ze(i)){const e={};for(let t=0;t<i.length;t++)e[i[t]]=i[t];return e}return i}function un(i,e){return i?[...new Set([].concat(i,e))]:e}function ca(i,e){return i?qt(Object.create(null),i,e):e}function $A(i,e){return i?ze(i)&&ze(e)?[...new Set([...i,...e])]:qt(Object.create(null),zA(i),zA(e??{})):e}function SS(i,e){if(!i)return e;if(!e)return i;const t=qt(Object.create(null),i);for(const n in e)t[n]=un(i[n],e[n]);return t}function yE(){return{app:null,config:{isNativeTag:Jy,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let IS=0;function CS(i,e){return function(n,s=null){$e(n)||(n=qt({},n)),s!=null&&!Ut(s)&&(s=null);const r=yE(),o=new WeakSet;let a=!1;const l=r.app={_uid:IS++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:JS,get config(){return r.config},set config(c){},use(c,...h){return o.has(c)||(c&&$e(c.install)?(o.add(c),c.install(l,...h)):$e(c)&&(o.add(c),c(l,...h))),l},mixin(c){return r.mixins.includes(c)||r.mixins.push(c),l},component(c,h){return h?(r.components[c]=h,l):r.components[c]},directive(c,h){return h?(r.directives[c]=h,l):r.directives[c]},mount(c,h,u){if(!a){const d=_s(n,s);return d.appContext=r,u===!0?u="svg":u===!1&&(u=void 0),h&&e?e(d,c):i(d,c,u),a=!0,l._container=c,c.__vue_app__=l,Jf(d.component)||d.component.proxy}},unmount(){a&&(i(null,l._container),delete l._container.__vue_app__)},provide(c,h){return r.provides[c]=h,l},runWithContext(c){const h=xa;xa=l;try{return c()}finally{xa=h}}};return l}}let xa=null;function MS(i,e){if(An){let t=An.provides;const n=An.parent&&An.parent.provides;n===t&&(t=An.provides=Object.create(n)),t[i]=e}}function fc(i,e,t=!1){const n=An||di;if(n||xa){const s=n?n.parent==null?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:xa._context.provides;if(s&&i in s)return s[i];if(arguments.length>1)return t&&$e(e)?e.call(n&&n.proxy):e}}const xE={},SE=()=>Object.create(xE),IE=i=>Object.getPrototypeOf(i)===xE;function wS(i,e,t,n=!1){const s={},r=SE();i.propsDefaults=Object.create(null),CE(i,e,s,r);for(const o in i.propsOptions[0])o in s||(s[o]=void 0);t?i.props=n?s:Fx(s):i.type.props?i.props=s:i.props=r,i.attrs=r}function bS(i,e,t,n){const{props:s,attrs:r,vnode:{patchFlag:o}}=i,a=ot(s),[l]=i.propsOptions;let c=!1;if((n||o>0)&&!(o&16)){if(o&8){const h=i.vnode.dynamicProps;for(let u=0;u<h.length;u++){let d=h[u];if(ah(i.emitsOptions,d))continue;const f=e[d];if(l)if(tt(r,d))f!==r[d]&&(r[d]=f,c=!0);else{const m=po(d);s[m]=Xd(l,a,m,f,i,!1)}else f!==r[d]&&(r[d]=f,c=!0)}}}else{CE(i,e,s,r)&&(c=!0);let h;for(const u in a)(!e||!tt(e,u)&&((h=bo(u))===u||!tt(e,h)))&&(l?t&&(t[u]!==void 0||t[h]!==void 0)&&(s[u]=Xd(l,a,u,void 0,i,!0)):delete s[u]);if(r!==a)for(const u in r)(!e||!tt(e,u))&&(delete r[u],c=!0)}c&&Gi(i.attrs,"set","")}function CE(i,e,t,n){const[s,r]=i.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ea(l))continue;const c=e[l];let h;s&&tt(s,h=po(l))?!r||!r.includes(h)?t[h]=c:(a||(a={}))[h]=c:ah(i.emitsOptions,l)||(!(l in n)||c!==n[l])&&(n[l]=c,o=!0)}if(r){const l=ot(t),c=a||yt;for(let h=0;h<r.length;h++){const u=r[h];t[u]=Xd(s,l,u,c[u],i,!tt(c,u))}}return o}function Xd(i,e,t,n,s,r){const o=i[t];if(o!=null){const a=tt(o,"default");if(a&&n===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&$e(l)){const{propsDefaults:c}=s;if(t in c)n=c[t];else{const h=za(s);n=c[t]=l.call(null,e),h()}}else n=l}o[0]&&(r&&!a?n=!1:o[1]&&(n===""||n===bo(t))&&(n=!0))}return n}function ME(i,e,t=!1){const n=e.propsCache,s=n.get(i);if(s)return s;const r=i.props,o={},a=[];let l=!1;if(!$e(i)){const h=u=>{l=!0;const[d,f]=ME(u,e,!0);qt(o,d),f&&a.push(...f)};!t&&e.mixins.length&&e.mixins.forEach(h),i.extends&&h(i.extends),i.mixins&&i.mixins.forEach(h)}if(!r&&!l)return Ut(i)&&n.set(i,oo),oo;if(ze(r))for(let h=0;h<r.length;h++){const u=po(r[h]);XA(u)&&(o[u]=yt)}else if(r)for(const h in r){const u=po(h);if(XA(u)){const d=r[h],f=o[u]=ze(d)||$e(d)?{type:d}:qt({},d);if(f){const m=jA(Boolean,f.type),g=jA(String,f.type);f[0]=m>-1,f[1]=g<0||m<g,(m>-1||tt(f,"default"))&&a.push(u)}}}const c=[o,a];return Ut(i)&&n.set(i,c),c}function XA(i){return i[0]!=="$"&&!Ea(i)}function YA(i){return i===null?"null":typeof i=="function"?i.name||"":typeof i=="object"&&i.constructor&&i.constructor.name||""}function KA(i,e){return YA(i)===YA(e)}function jA(i,e){return ze(e)?e.findIndex(t=>KA(t,i)):$e(e)&&KA(e,i)?0:-1}const wE=i=>i[0]==="_"||i==="$stable",Kf=i=>ze(i)?i.map(li):[li(i)],TS=(i,e,t)=>{if(e._n)return e;const n=Yx((...s)=>Kf(e(...s)),t);return n._c=!1,n},bE=(i,e,t)=>{const n=i._ctx;for(const s in i){if(wE(s))continue;const r=i[s];if($e(r))e[s]=TS(s,r,n);else if(r!=null){const o=Kf(r);e[s]=()=>o}}},TE=(i,e)=>{const t=Kf(e);i.slots.default=()=>t},BS=(i,e)=>{const t=i.slots=SE();if(i.vnode.shapeFlag&32){const n=e._;n?(qt(t,e),V_(t,"_",n,!0)):bE(e,t)}else e&&TE(i,e)},RS=(i,e,t)=>{const{vnode:n,slots:s}=i;let r=!0,o=yt;if(n.shapeFlag&32){const a=e._;a?t&&a===1?r=!1:(qt(s,e),!t&&a===1&&delete s._):(r=!e.$stable,bE(e,s)),o=e}else e&&(TE(i,e),o={default:1});if(r)for(const a in s)!wE(a)&&o[a]==null&&delete s[a]};function Yd(i,e,t,n,s=!1){if(ze(i)){i.forEach((d,f)=>Yd(d,e&&(ze(e)?e[f]:e),t,n,s));return}if(dc(n)&&!s)return;const r=n.shapeFlag&4?Jf(n.component)||n.component.proxy:n.el,o=s?null:r,{i:a,r:l}=i,c=e&&e.r,h=a.refs===yt?a.refs={}:a.refs,u=a.setupState;if(c!=null&&c!==l&&(Kt(c)?(h[c]=null,tt(u,c)&&(u[c]=null)):vn(c)&&(c.value=null)),$e(l))gs(l,a,12,[o,h]);else{const d=Kt(l),f=vn(l);if(d||f){const m=()=>{if(i.f){const g=d?tt(u,l)?u[l]:h[l]:l.value;s?ze(g)&&Uf(g,r):ze(g)?g.includes(r)||g.push(r):d?(h[l]=[r],tt(u,l)&&(u[l]=h[l])):(l.value=[r],i.k&&(h[i.k]=l.value))}else d?(h[l]=o,tt(u,l)&&(u[l]=o)):f&&(l.value=o,i.k&&(h[i.k]=o))};o?(m.id=-1,gn(m,t)):m()}}}const gn=nS;function DS(i){return LS(i)}function LS(i,e){const t=z_();t.__VUE__=!0;const{insert:n,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:h,parentNode:u,nextSibling:d,setScopeId:f=Nn,insertStaticContent:m}=i,g=(T,P,z,ee=null,S=null,E=null,F=void 0,N=null,k=!!P.dynamicChildren)=>{if(T===P)return;T&&!Fo(T,P)&&(ee=fe(T),ge(T,S,E,!0),T=null),P.patchFlag===-2&&(k=!1,P.dynamicChildren=null);const{type:O,ref:ie,shapeFlag:K}=P;switch(O){case ch:A(T,P,z,ee);break;case La:p(T,P,z,ee);break;case Bh:T==null&&x(P,z,ee,F);break;case Ni:V(T,P,z,ee,S,E,F,N,k);break;default:K&1?M(T,P,z,ee,S,E,F,N,k):K&6?D(T,P,z,ee,S,E,F,N,k):(K&64||K&128)&&O.process(T,P,z,ee,S,E,F,N,k,Ne)}ie!=null&&S&&Yd(ie,T&&T.ref,E,P||T,!P)},A=(T,P,z,ee)=>{if(T==null)n(P.el=a(P.children),z,ee);else{const S=P.el=T.el;P.children!==T.children&&c(S,P.children)}},p=(T,P,z,ee)=>{T==null?n(P.el=l(P.children||""),z,ee):P.el=T.el},x=(T,P,z,ee)=>{[T.el,T.anchor]=m(T.children,P,z,ee,T.el,T.anchor)},_=({el:T,anchor:P},z,ee)=>{let S;for(;T&&T!==P;)S=d(T),n(T,z,ee),T=S;n(P,z,ee)},C=({el:T,anchor:P})=>{let z;for(;T&&T!==P;)z=d(T),s(T),T=z;s(P)},M=(T,P,z,ee,S,E,F,N,k)=>{P.type==="svg"?F="svg":P.type==="math"&&(F="mathml"),T==null?I(P,z,ee,S,E,F,N,k):y(T,P,S,E,F,N,k)},I=(T,P,z,ee,S,E,F,N)=>{let k,O;const{props:ie,shapeFlag:K,transition:re,dirs:le}=T;if(k=T.el=o(T.type,E,ie&&ie.is,ie),K&8?h(k,T.children):K&16&&B(T.children,k,null,ee,S,Th(T,E),F,N),le&&bs(T,null,ee,"created"),w(k,T,T.scopeId,F,ee),ie){for(const ce in ie)ce!=="value"&&!Ea(ce)&&r(k,ce,null,ie[ce],E,T.children,ee,S,de);"value"in ie&&r(k,"value",null,ie.value,E),(O=ie.onVnodeBeforeMount)&&ri(O,ee,T)}le&&bs(T,null,ee,"beforeMount");const se=PS(S,re);se&&re.beforeEnter(k),n(k,P,z),((O=ie&&ie.onVnodeMounted)||se||le)&&gn(()=>{O&&ri(O,ee,T),se&&re.enter(k),le&&bs(T,null,ee,"mounted")},S)},w=(T,P,z,ee,S)=>{if(z&&f(T,z),ee)for(let E=0;E<ee.length;E++)f(T,ee[E]);if(S){let E=S.subTree;if(P===E){const F=S.vnode;w(T,F,F.scopeId,F.slotScopeIds,S.parent)}}},B=(T,P,z,ee,S,E,F,N,k=0)=>{for(let O=k;O<T.length;O++){const ie=T[O]=N?rs(T[O]):li(T[O]);g(null,ie,P,z,ee,S,E,F,N)}},y=(T,P,z,ee,S,E,F)=>{const N=P.el=T.el;let{patchFlag:k,dynamicChildren:O,dirs:ie}=P;k|=T.patchFlag&16;const K=T.props||yt,re=P.props||yt;let le;if(z&&Ts(z,!1),(le=re.onVnodeBeforeUpdate)&&ri(le,z,P,T),ie&&bs(P,T,z,"beforeUpdate"),z&&Ts(z,!0),O?v(T.dynamicChildren,O,N,z,ee,Th(P,S),E):F||Q(T,P,N,null,z,ee,Th(P,S),E,!1),k>0){if(k&16)U(N,P,K,re,z,ee,S);else if(k&2&&K.class!==re.class&&r(N,"class",null,re.class,S),k&4&&r(N,"style",K.style,re.style,S),k&8){const se=P.dynamicProps;for(let ce=0;ce<se.length;ce++){const ve=se[ce],Ae=K[ve],Ee=re[ve];(Ee!==Ae||ve==="value")&&r(N,ve,Ae,Ee,S,T.children,z,ee,de)}}k&1&&T.children!==P.children&&h(N,P.children)}else!F&&O==null&&U(N,P,K,re,z,ee,S);((le=re.onVnodeUpdated)||ie)&&gn(()=>{le&&ri(le,z,P,T),ie&&bs(P,T,z,"updated")},ee)},v=(T,P,z,ee,S,E,F)=>{for(let N=0;N<P.length;N++){const k=T[N],O=P[N],ie=k.el&&(k.type===Ni||!Fo(k,O)||k.shapeFlag&70)?u(k.el):z;g(k,O,ie,null,ee,S,E,F,!0)}},U=(T,P,z,ee,S,E,F)=>{if(z!==ee){if(z!==yt)for(const N in z)!Ea(N)&&!(N in ee)&&r(T,N,z[N],null,F,P.children,S,E,de);for(const N in ee){if(Ea(N))continue;const k=ee[N],O=z[N];k!==O&&N!=="value"&&r(T,N,O,k,F,P.children,S,E,de)}"value"in ee&&r(T,"value",z.value,ee.value,F)}},V=(T,P,z,ee,S,E,F,N,k)=>{const O=P.el=T?T.el:a(""),ie=P.anchor=T?T.anchor:a("");let{patchFlag:K,dynamicChildren:re,slotScopeIds:le}=P;le&&(N=N?N.concat(le):le),T==null?(n(O,z,ee),n(ie,z,ee),B(P.children||[],z,ie,S,E,F,N,k)):K>0&&K&64&&re&&T.dynamicChildren?(v(T.dynamicChildren,re,z,S,E,F,N),(P.key!=null||S&&P===S.subTree)&&BE(T,P,!0)):Q(T,P,z,ie,S,E,F,N,k)},D=(T,P,z,ee,S,E,F,N,k)=>{P.slotScopeIds=N,T==null?P.shapeFlag&512?S.ctx.activate(P,z,ee,F,k):G(P,z,ee,S,E,F,k):H(T,P,k)},G=(T,P,z,ee,S,E,F)=>{const N=T.component=qS(T,ee,S);if(gE(T)&&(N.ctx.renderer=Ne),$S(N),N.asyncDep){if(S&&S.registerDep(N,X),!T.el){const k=N.subTree=_s(La);p(null,k,P,z)}}else X(N,T,P,z,S,E,F)},H=(T,P,z)=>{const ee=P.component=T.component;if(Jx(T,P,z))if(ee.asyncDep&&!ee.asyncResolved){q(ee,P,z);return}else ee.next=P,Wx(ee.update),ee.effect.dirty=!0,ee.update();else P.el=T.el,ee.vnode=P},X=(T,P,z,ee,S,E,F)=>{const N=()=>{if(T.isMounted){let{next:ie,bu:K,u:re,parent:le,vnode:se}=T;{const ke=RE(T);if(ke){ie&&(ie.el=se.el,q(T,ie,F)),ke.asyncDep.then(()=>{T.isUnmounted||N()});return}}let ce=ie,ve;Ts(T,!1),ie?(ie.el=se.el,q(T,ie,F)):ie=se,K&&Mh(K),(ve=ie.props&&ie.props.onVnodeBeforeUpdate)&&ri(ve,le,ie,se),Ts(T,!0);const Ae=wh(T),Ee=T.subTree;T.subTree=Ae,g(Ee,Ae,u(Ee.el),fe(Ee),T,S,E),ie.el=Ae.el,ce===null&&Zx(T,Ae.el),re&&gn(re,S),(ve=ie.props&&ie.props.onVnodeUpdated)&&gn(()=>ri(ve,le,ie,se),S)}else{let ie;const{el:K,props:re}=P,{bm:le,m:se,parent:ce}=T,ve=dc(P);if(Ts(T,!1),le&&Mh(le),!ve&&(ie=re&&re.onVnodeBeforeMount)&&ri(ie,ce,P),Ts(T,!0),K&&Oe){const Ae=()=>{T.subTree=wh(T),Oe(K,T.subTree,T,S,null)};ve?P.type.__asyncLoader().then(()=>!T.isUnmounted&&Ae()):Ae()}else{const Ae=T.subTree=wh(T);g(null,Ae,z,ee,T,S,E),P.el=Ae.el}if(se&&gn(se,S),!ve&&(ie=re&&re.onVnodeMounted)){const Ae=P;gn(()=>ri(ie,ce,Ae),S)}(P.shapeFlag&256||ce&&dc(ce.vnode)&&ce.vnode.shapeFlag&256)&&T.a&&gn(T.a,S),T.isMounted=!0,P=z=ee=null}},k=T.effect=new Qf(N,Nn,()=>Xf(O),T.scope),O=T.update=()=>{k.dirty&&k.run()};O.id=T.uid,Ts(T,!0),O()},q=(T,P,z)=>{P.component=T;const ee=T.vnode.props;T.vnode=P,T.next=null,bS(T,P.props,ee,z),RS(T,P.children,z),Is(),HA(T),Cs()},Q=(T,P,z,ee,S,E,F,N,k=!1)=>{const O=T&&T.children,ie=T?T.shapeFlag:0,K=P.children,{patchFlag:re,shapeFlag:le}=P;if(re>0){if(re&128){ne(O,K,z,ee,S,E,F,N,k);return}else if(re&256){te(O,K,z,ee,S,E,F,N,k);return}}le&8?(ie&16&&de(O,S,E),K!==O&&h(z,K)):ie&16?le&16?ne(O,K,z,ee,S,E,F,N,k):de(O,S,E,!0):(ie&8&&h(z,""),le&16&&B(K,z,ee,S,E,F,N,k))},te=(T,P,z,ee,S,E,F,N,k)=>{T=T||oo,P=P||oo;const O=T.length,ie=P.length,K=Math.min(O,ie);let re;for(re=0;re<K;re++){const le=P[re]=k?rs(P[re]):li(P[re]);g(T[re],le,z,null,S,E,F,N,k)}O>ie?de(T,S,E,!0,!1,K):B(P,z,ee,S,E,F,N,k,K)},ne=(T,P,z,ee,S,E,F,N,k)=>{let O=0;const ie=P.length;let K=T.length-1,re=ie-1;for(;O<=K&&O<=re;){const le=T[O],se=P[O]=k?rs(P[O]):li(P[O]);if(Fo(le,se))g(le,se,z,null,S,E,F,N,k);else break;O++}for(;O<=K&&O<=re;){const le=T[K],se=P[re]=k?rs(P[re]):li(P[re]);if(Fo(le,se))g(le,se,z,null,S,E,F,N,k);else break;K--,re--}if(O>K){if(O<=re){const le=re+1,se=le<ie?P[le].el:ee;for(;O<=re;)g(null,P[O]=k?rs(P[O]):li(P[O]),z,se,S,E,F,N,k),O++}}else if(O>re)for(;O<=K;)ge(T[O],S,E,!0),O++;else{const le=O,se=O,ce=new Map;for(O=se;O<=re;O++){const Xe=P[O]=k?rs(P[O]):li(P[O]);Xe.key!=null&&ce.set(Xe.key,O)}let ve,Ae=0;const Ee=re-se+1;let ke=!1,Ke=0;const Je=new Array(Ee);for(O=0;O<Ee;O++)Je[O]=0;for(O=le;O<=K;O++){const Xe=T[O];if(Ae>=Ee){ge(Xe,S,E,!0);continue}let ye;if(Xe.key!=null)ye=ce.get(Xe.key);else for(ve=se;ve<=re;ve++)if(Je[ve-se]===0&&Fo(Xe,P[ve])){ye=ve;break}ye===void 0?ge(Xe,S,E,!0):(Je[ye-se]=O+1,ye>=Ke?Ke=ye:ke=!0,g(Xe,P[ye],z,null,S,E,F,N,k),Ae++)}const et=ke?FS(Je):oo;for(ve=et.length-1,O=Ee-1;O>=0;O--){const Xe=se+O,ye=P[Xe],R=Xe+1<ie?P[Xe+1].el:ee;Je[O]===0?g(null,ye,z,R,S,E,F,N,k):ke&&(ve<0||O!==et[ve]?ae(ye,z,R,2):ve--)}}},ae=(T,P,z,ee,S=null)=>{const{el:E,type:F,transition:N,children:k,shapeFlag:O}=T;if(O&6){ae(T.component.subTree,P,z,ee);return}if(O&128){T.suspense.move(P,z,ee);return}if(O&64){F.move(T,P,z,Ne);return}if(F===Ni){n(E,P,z);for(let K=0;K<k.length;K++)ae(k[K],P,z,ee);n(T.anchor,P,z);return}if(F===Bh){_(T,P,z);return}if(ee!==2&&O&1&&N)if(ee===0)N.beforeEnter(E),n(E,P,z),gn(()=>N.enter(E),S);else{const{leave:K,delayLeave:re,afterLeave:le}=N,se=()=>n(E,P,z),ce=()=>{K(E,()=>{se(),le&&le()})};re?re(E,se,ce):ce()}else n(E,P,z)},ge=(T,P,z,ee=!1,S=!1)=>{const{type:E,props:F,ref:N,children:k,dynamicChildren:O,shapeFlag:ie,patchFlag:K,dirs:re}=T;if(N!=null&&Yd(N,null,z,T,!0),ie&256){P.ctx.deactivate(T);return}const le=ie&1&&re,se=!dc(T);let ce;if(se&&(ce=F&&F.onVnodeBeforeUnmount)&&ri(ce,P,T),ie&6)oe(T.component,z,ee);else{if(ie&128){T.suspense.unmount(z,ee);return}le&&bs(T,null,P,"beforeUnmount"),ie&64?T.type.remove(T,P,z,S,Ne,ee):O&&(E!==Ni||K>0&&K&64)?de(O,P,z,!1,!0):(E===Ni&&K&384||!S&&ie&16)&&de(k,P,z),ee&&Me(T)}(se&&(ce=F&&F.onVnodeUnmounted)||le)&&gn(()=>{ce&&ri(ce,P,T),le&&bs(T,null,P,"unmounted")},z)},Me=T=>{const{type:P,el:z,anchor:ee,transition:S}=T;if(P===Ni){Z(z,ee);return}if(P===Bh){C(T);return}const E=()=>{s(z),S&&!S.persisted&&S.afterLeave&&S.afterLeave()};if(T.shapeFlag&1&&S&&!S.persisted){const{leave:F,delayLeave:N}=S,k=()=>F(z,E);N?N(T.el,E,k):k()}else E()},Z=(T,P)=>{let z;for(;T!==P;)z=d(T),s(T),T=z;s(P)},oe=(T,P,z)=>{const{bum:ee,scope:S,update:E,subTree:F,um:N}=T;ee&&Mh(ee),S.stop(),E&&(E.active=!1,ge(F,T,P,z)),N&&gn(N,P),gn(()=>{T.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&T.asyncDep&&!T.asyncResolved&&T.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},de=(T,P,z,ee=!1,S=!1,E=0)=>{for(let F=E;F<T.length;F++)ge(T[F],P,z,ee,S)},fe=T=>T.shapeFlag&6?fe(T.component.subTree):T.shapeFlag&128?T.suspense.next():d(T.anchor||T.el);let be=!1;const Fe=(T,P,z)=>{T==null?P._vnode&&ge(P._vnode,null,null,!0):g(P._vnode||null,T,P,null,null,null,z),be||(be=!0,HA(),hE(),be=!1),P._vnode=T},Ne={p:g,um:ge,m:ae,r:Me,mt:G,mc:B,pc:Q,pbc:v,n:fe,o:i};let $,Oe;return{render:Fe,hydrate:$,createApp:CS(Fe,$)}}function Th({type:i,props:e},t){return t==="svg"&&i==="foreignObject"||t==="mathml"&&i==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Ts({effect:i,update:e},t){i.allowRecurse=e.allowRecurse=t}function PS(i,e){return(!i||i&&!i.pendingBranch)&&e&&!e.persisted}function BE(i,e,t=!1){const n=i.children,s=e.children;if(ze(n)&&ze(s))for(let r=0;r<n.length;r++){const o=n[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=rs(s[r]),a.el=o.el),t||BE(o,a)),a.type===ch&&(a.el=o.el)}}function FS(i){const e=i.slice(),t=[0];let n,s,r,o,a;const l=i.length;for(n=0;n<l;n++){const c=i[n];if(c!==0){if(s=t[t.length-1],i[s]<c){e[n]=s,t.push(n);continue}for(r=0,o=t.length-1;r<o;)a=r+o>>1,i[t[a]]<c?r=a+1:o=a;c<i[t[r]]&&(r>0&&(e[n]=t[r-1]),t[r]=n)}}for(r=t.length,o=t[r-1];r-- >0;)t[r]=o,o=e[o];return t}function RE(i){const e=i.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:RE(e)}const US=i=>i.__isTeleport,Ni=Symbol.for("v-fgt"),ch=Symbol.for("v-txt"),La=Symbol.for("v-cmt"),Bh=Symbol.for("v-stc"),Sa=[];let Yn=null;function DE(i=!1){Sa.push(Yn=i?null:[])}function NS(){Sa.pop(),Yn=Sa[Sa.length-1]||null}let Pa=1;function JA(i){Pa+=i}function OS(i){return i.dynamicChildren=Pa>0?Yn||oo:null,NS(),Pa>0&&Yn&&Yn.push(i),i}function LE(i,e,t,n,s,r){return OS(Ia(i,e,t,n,s,r,!0))}function QS(i){return i?i.__v_isVNode===!0:!1}function Fo(i,e){return i.type===e.type&&i.key===e.key}const PE=({key:i})=>i??null,Ac=({ref:i,ref_key:e,ref_for:t})=>(typeof i=="number"&&(i=""+i),i!=null?Kt(i)||vn(i)||$e(i)?{i:di,r:i,k:e,f:!!t}:i:null);function Ia(i,e=null,t=null,n=0,s=null,r=i===Ni?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:i,props:e,key:e&&PE(e),ref:e&&Ac(e),scopeId:fE,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:n,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:di};return a?(jf(l,t),r&128&&i.normalize(l)):t&&(l.shapeFlag|=Kt(t)?8:16),Pa>0&&!o&&Yn&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&Yn.push(l),l}const _s=kS;function kS(i,e=null,t=null,n=0,s=null,r=!1){if((!i||i===eS)&&(i=La),QS(i)){const a=mo(i,e,!0);return t&&jf(a,t),Pa>0&&!r&&Yn&&(a.shapeFlag&6?Yn[Yn.indexOf(i)]=a:Yn.push(a)),a.patchFlag|=-2,a}if(jS(i)&&(i=i.__vccOpts),e){e=GS(e);let{class:a,style:l}=e;a&&!Kt(a)&&(e.class=Of(a)),Ut(l)&&(sE(l)&&!ze(l)&&(l=qt({},l)),e.style=ao(l))}const o=Kt(i)?1:tS(i)?128:US(i)?64:Ut(i)?4:$e(i)?2:0;return Ia(i,e,t,n,s,o,r,!0)}function GS(i){return i?sE(i)||IE(i)?qt({},i):i:null}function mo(i,e,t=!1,n=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=i,c=e?VS(s||{},e):s,h={__v_isVNode:!0,__v_skip:!0,type:i.type,props:c,key:c&&PE(c),ref:e&&e.ref?t&&r?ze(r)?r.concat(Ac(e)):[r,Ac(e)]:Ac(e):r,scopeId:i.scopeId,slotScopeIds:i.slotScopeIds,children:a,target:i.target,targetAnchor:i.targetAnchor,staticCount:i.staticCount,shapeFlag:i.shapeFlag,patchFlag:e&&i.type!==Ni?o===-1?16:o|16:o,dynamicProps:i.dynamicProps,dynamicChildren:i.dynamicChildren,appContext:i.appContext,dirs:i.dirs,transition:l,component:i.component,suspense:i.suspense,ssContent:i.ssContent&&mo(i.ssContent),ssFallback:i.ssFallback&&mo(i.ssFallback),el:i.el,anchor:i.anchor,ctx:i.ctx,ce:i.ce};return l&&n&&(h.transition=l.clone(h)),h}function HS(i=" ",e=0){return _s(ch,null,i,e)}function li(i){return i==null||typeof i=="boolean"?_s(La):ze(i)?_s(Ni,null,i.slice()):typeof i=="object"?rs(i):_s(ch,null,String(i))}function rs(i){return i.el===null&&i.patchFlag!==-1||i.memo?i:mo(i)}function jf(i,e){let t=0;const{shapeFlag:n}=i;if(e==null)e=null;else if(ze(e))t=16;else if(typeof e=="object")if(n&65){const s=e.default;s&&(s._c&&(s._d=!1),jf(i,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!IE(e)?e._ctx=di:s===3&&di&&(di.slots._===1?e._=1:(e._=2,i.patchFlag|=1024))}else $e(e)?(e={default:e,_ctx:di},t=32):(e=String(e),n&64?(t=16,e=[HS(e)]):t=8);i.children=e,i.shapeFlag|=t}function VS(...i){const e={};for(let t=0;t<i.length;t++){const n=i[t];for(const s in n)if(s==="class")e.class!==n.class&&(e.class=Of([e.class,n.class]));else if(s==="style")e.style=ao([e.style,n.style]);else if(nh(s)){const r=e[s],o=n[s];o&&r!==o&&!(ze(r)&&r.includes(o))&&(e[s]=r?[].concat(r,o):o)}else s!==""&&(e[s]=n[s])}return e}function ri(i,e,t,n=null){jn(i,e,7,[t,n])}const zS=yE();let WS=0;function qS(i,e,t){const n=i.type,s=(e?e.appContext:i.appContext)||zS,r={uid:WS++,vnode:i,type:n,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new fx(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ME(n,s),emitsOptions:dE(n,s),emit:null,emitted:null,propsDefaults:yt,inheritAttrs:n.inheritAttrs,ctx:yt,data:yt,props:yt,attrs:yt,slots:yt,refs:yt,setupState:yt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Xx.bind(null,r),i.ce&&i.ce(r),r}let An=null,Nc,Kd;{const i=z_(),e=(t,n)=>{let s;return(s=i[t])||(s=i[t]=[]),s.push(n),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};Nc=e("__VUE_INSTANCE_SETTERS__",t=>An=t),Kd=e("__VUE_SSR_SETTERS__",t=>hh=t)}const za=i=>{const e=An;return Nc(i),i.scope.on(),()=>{i.scope.off(),Nc(e)}},ZA=()=>{An&&An.scope.off(),Nc(null)};function FE(i){return i.vnode.shapeFlag&4}let hh=!1;function $S(i,e=!1){e&&Kd(e);const{props:t,children:n}=i.vnode,s=FE(i);wS(i,t,s,e),BS(i,n);const r=s?XS(i,e):void 0;return e&&Kd(!1),r}function XS(i,e){const t=i.type;i.accessCache=Object.create(null),i.proxy=new Proxy(i.ctx,_S);const{setup:n}=t;if(n){const s=i.setupContext=n.length>1?KS(i):null,r=za(i);Is();const o=gs(n,i,0,[i.props,s]);if(Cs(),r(),G_(o)){if(o.then(ZA,ZA),e)return o.then(a=>{ep(i,a,e)}).catch(a=>{oh(a,i,0)});i.asyncDep=o}else ep(i,o,e)}else UE(i,e)}function ep(i,e,t){$e(e)?i.type.__ssrInlineRender?i.ssrRender=e:i.render=e:Ut(e)&&(i.setupState=aE(e)),UE(i,t)}let tp;function UE(i,e,t){const n=i.type;if(!i.render){if(!e&&tp&&!n.render){const s=n.template||Yf(i).template;if(s){const{isCustomElement:r,compilerOptions:o}=i.appContext.config,{delimiters:a,compilerOptions:l}=n,c=qt(qt({isCustomElement:r,delimiters:a},o),l);n.render=tp(s,c)}}i.render=n.render||Nn}{const s=za(i);Is();try{ES(i)}finally{Cs(),s()}}}const YS={get(i,e){return En(i,"get",""),i[e]}};function KS(i){const e=t=>{i.exposed=t||{}};return{attrs:new Proxy(i.attrs,YS),slots:i.slots,emit:i.emit,expose:e}}function Jf(i){if(i.exposed)return i.exposeProxy||(i.exposeProxy=new Proxy(aE(Ux(i.exposed)),{get(e,t){if(t in e)return e[t];if(t in ya)return ya[t](i)},has(e,t){return t in e||t in ya}}))}function jS(i){return $e(i)&&"__vccOpts"in i}const pc=(i,e)=>Nx(i,e,hh),JS="3.4.27";/**
* @vue/runtime-dom v3.4.27
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const ZS="http://www.w3.org/2000/svg",eI="http://www.w3.org/1998/Math/MathML",os=typeof document<"u"?document:null,np=os&&os.createElement("template"),tI={insert:(i,e,t)=>{e.insertBefore(i,t||null)},remove:i=>{const e=i.parentNode;e&&e.removeChild(i)},createElement:(i,e,t,n)=>{const s=e==="svg"?os.createElementNS(ZS,i):e==="mathml"?os.createElementNS(eI,i):os.createElement(i,t?{is:t}:void 0);return i==="select"&&n&&n.multiple!=null&&s.setAttribute("multiple",n.multiple),s},createText:i=>os.createTextNode(i),createComment:i=>os.createComment(i),setText:(i,e)=>{i.nodeValue=e},setElementText:(i,e)=>{i.textContent=e},parentNode:i=>i.parentNode,nextSibling:i=>i.nextSibling,querySelector:i=>os.querySelector(i),setScopeId(i,e){i.setAttribute(e,"")},insertStaticContent(i,e,t,n,s,r){const o=t?t.previousSibling:e.lastChild;if(s&&(s===r||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===r||!(s=s.nextSibling)););else{np.innerHTML=n==="svg"?`<svg>${i}</svg>`:n==="mathml"?`<math>${i}</math>`:i;const a=np.content;if(n==="svg"||n==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},nI=Symbol("_vtc");function iI(i,e,t){const n=i[nI];n&&(e=(e?[e,...n]:[...n]).join(" ")),e==null?i.removeAttribute("class"):t?i.setAttribute("class",e):i.className=e}const ip=Symbol("_vod"),sI=Symbol("_vsh"),rI=Symbol(""),oI=/(^|;)\s*display\s*:/;function aI(i,e,t){const n=i.style,s=Kt(t);let r=!1;if(t&&!s){if(e)if(Kt(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();t[a]==null&&mc(n,a,"")}else for(const o in e)t[o]==null&&mc(n,o,"");for(const o in t)o==="display"&&(r=!0),mc(n,o,t[o])}else if(s){if(e!==t){const o=n[rI];o&&(t+=";"+o),n.cssText=t,r=oI.test(t)}}else e&&i.removeAttribute("style");ip in i&&(i[ip]=r?n.display:"",i[sI]&&(n.display="none"))}const sp=/\s*!important$/;function mc(i,e,t){if(ze(t))t.forEach(n=>mc(i,e,n));else if(t==null&&(t=""),e.startsWith("--"))i.setProperty(e,t);else{const n=lI(i,e);sp.test(t)?i.setProperty(bo(n),t.replace(sp,""),"important"):i[n]=t}}const rp=["Webkit","Moz","ms"],Rh={};function lI(i,e){const t=Rh[e];if(t)return t;let n=po(e);if(n!=="filter"&&n in i)return Rh[e]=n;n=H_(n);for(let s=0;s<rp.length;s++){const r=rp[s]+n;if(r in i)return Rh[e]=r}return e}const op="http://www.w3.org/1999/xlink";function cI(i,e,t,n,s){if(n&&e.startsWith("xlink:"))t==null?i.removeAttributeNS(op,e.slice(6,e.length)):i.setAttributeNS(op,e,t);else{const r=dx(e);t==null||r&&!W_(t)?i.removeAttribute(e):i.setAttribute(e,r?"":t)}}function hI(i,e,t,n,s,r,o){if(e==="innerHTML"||e==="textContent"){n&&o(n,s,r),i[e]=t??"";return}const a=i.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?i.getAttribute("value")||"":i.value,h=t??"";(c!==h||!("_value"in i))&&(i.value=h),t==null&&i.removeAttribute(e),i._value=t;return}let l=!1;if(t===""||t==null){const c=typeof i[e];c==="boolean"?t=W_(t):t==null&&c==="string"?(t="",l=!0):c==="number"&&(t=0,l=!0)}try{i[e]=t}catch{}l&&i.removeAttribute(e)}function uI(i,e,t,n){i.addEventListener(e,t,n)}function dI(i,e,t,n){i.removeEventListener(e,t,n)}const ap=Symbol("_vei");function fI(i,e,t,n,s=null){const r=i[ap]||(i[ap]={}),o=r[e];if(n&&o)o.value=n;else{const[a,l]=AI(e);if(n){const c=r[e]=gI(n,s);uI(i,a,c,l)}else o&&(dI(i,a,o,l),r[e]=void 0)}}const lp=/(?:Once|Passive|Capture)$/;function AI(i){let e;if(lp.test(i)){e={};let n;for(;n=i.match(lp);)i=i.slice(0,i.length-n[0].length),e[n[0].toLowerCase()]=!0}return[i[2]===":"?i.slice(3):bo(i.slice(2)),e]}let Dh=0;const pI=Promise.resolve(),mI=()=>Dh||(pI.then(()=>Dh=0),Dh=Date.now());function gI(i,e){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;jn(_I(n,t.value),e,5,[n])};return t.value=i,t.attached=mI(),t}function _I(i,e){if(ze(e)){const t=i.stopImmediatePropagation;return i.stopImmediatePropagation=()=>{t.call(i),i._stopped=!0},e.map(n=>s=>!s._stopped&&n&&n(s))}else return e}const cp=i=>i.charCodeAt(0)===111&&i.charCodeAt(1)===110&&i.charCodeAt(2)>96&&i.charCodeAt(2)<123,EI=(i,e,t,n,s,r,o,a,l)=>{const c=s==="svg";e==="class"?iI(i,n,c):e==="style"?aI(i,t,n):nh(e)?Ff(e)||fI(i,e,t,n,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):vI(i,e,n,c))?hI(i,e,n,r,o,a,l):(e==="true-value"?i._trueValue=n:e==="false-value"&&(i._falseValue=n),cI(i,e,n,c))};function vI(i,e,t,n){if(n)return!!(e==="innerHTML"||e==="textContent"||e in i&&cp(e)&&$e(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&i.tagName==="INPUT"||e==="type"&&i.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=i.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return cp(e)&&Kt(t)?!1:e in i}const yI=qt({patchProp:EI},tI);let hp;function xI(){return hp||(hp=DS(yI))}const SI=(...i)=>{const e=xI().createApp(...i),{mount:t}=e;return e.mount=n=>{const s=CI(n);if(!s)return;const r=e._component;!$e(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,II(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function II(i){if(i instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&i instanceof MathMLElement)return"mathml"}function CI(i){return Kt(i)?document.querySelector(i):i}const MI="/assets/yasuo-B4lzGzhs.glb",wI="/assets/yi-qVium9YN.glb",bI="/assets/miss-fortune-DZKkMAGQ.glb",TI={class:"progress-container"},BI=["src","camera-orbit","animation-name","camera-target"],RI=mE({__name:"LolProgress",props:{hero:{type:String,default:"yasuo"},percentage:{type:Number,default:100},strokeWidth:{type:Number,default:10},heroSize:{type:Number,default:150}},setup(i){const e=i,t=Vd(null),n={yasuo:{src:MI,cameraOrbit:"-90deg 90deg",progressAnimation:"Run2",finishAnimationIn:"yasuo_skin02_dance_in",finishAnimation:"yasuo_skin02_dance_loop",cameraTarget:"auto auto 0m",finishDelay:2e3},yi:{src:wI,cameraOrbit:"-90deg 90deg",progressAnimation:"Run",finishAnimationIn:"Dance",finishAnimation:"Dance",cameraTarget:"auto auto 0m",finishDelay:500},missFortune:{src:bI,cameraOrbit:"-90deg 90deg",progressAnimation:"Run",finishAnimationIn:"Dance",finishAnimation:"Dance",cameraTarget:"auto auto 0m",finishDelay:500}},s=pc(()=>({left:`calc(${(e.percentage>100?100:e.percentage)+"%"} - ${e.heroSize/2}px)`,bottom:-e.heroSize/15+"px",height:e.heroSize+"px",width:e.heroSize+"px"})),r=pc(()=>{const l=e.percentage>100?100:e.percentage;return{borderRadius:`calc(${e.strokeWidth/2}px - 1px)`,width:l+"%"}}),o=pc(()=>n[e.hero]),a=Vd("");return uc(()=>e.percentage,l=>{l<100?a.value=o.value.progressAnimation:l===100&&(a.value=o.value.finishAnimationIn,setTimeout(()=>{a.value=o.value.finishAnimation},o.value.finishDelay))}),(l,c)=>(DE(),LE("div",TI,[Ia("model-viewer",{src:o.value.src,"disable-zoom":"","shadow-intensity":"1","camera-orbit":o.value.cameraOrbit,class:"model-viewer",style:ao(s.value),"animation-name":a.value,"camera-target":o.value.cameraTarget,autoplay:"",ref_key:"modelViewer",ref:t},null,12,BI),Ia("div",{class:"progress-bar",style:ao({height:i.strokeWidth+"px",borderRadius:i.strokeWidth/2+"px"})},[Ia("div",{class:"progress-percent",style:ao(r.value)},null,4)],4)]))}}),DI=(i,e)=>{const t=i.__vccOpts||i;for(const[n,s]of e)t[n]=s;return t},LI=DI(RI,[["__scopeId","data-v-f42a4d16"]]),PI=mE({__name:"App",setup(i){const e=Vd(0);return setInterval(()=>{e.value=e.value+1},100),(t,n)=>(DE(),LE("main",null,[_s(LI,{style:{width:"200px"},percentage:e.value,heroSize:200,hero:"missFortune"},null,8,["percentage"])]))}});/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const FI=(i,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,i)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,i)}},UI=(i,e,t)=>{e.constructor.createProperty(t,i)};function we(i){return(e,t)=>t!==void 0?UI(i,e,t):FI(i,e)}/**
 * @license
 * Copyright 2021 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var Lh;((Lh=window.HTMLSlotElement)===null||Lh===void 0?void 0:Lh.prototype.assignedElements)!=null;/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zf="163",NI=0,up=1,OI=2,NE=1,QI=2,Fi=3,ei=0,Yt=1,rn=2,pi=0,co=1,dp=2,fp=3,Ap=4,kI=5,Ks=100,GI=101,HI=102,VI=103,zI=104,WI=200,qI=201,$I=202,XI=203,jd=204,Jd=205,YI=206,KI=207,jI=208,JI=209,ZI=210,eC=211,tC=212,nC=213,iC=214,sC=0,rC=1,oC=2,Oc=3,aC=4,lC=5,cC=6,hC=7,OE=0,uC=1,dC=2,Hi=0,fC=1,AC=2,pC=3,uh=4,mC=5,QE=6,eA=7,pp="attached",gC="detached",go=300,rr=301,_o=302,Qc=303,Zd=304,dh=306,ti=1e3,Bt=1001,or=1002,Pt=1003,Wa=1004,ds=1005,nt=1006,ir=1007,_n=1008,mp=1008,Tt=1009,kE=1010,GE=1011,HE=1012,tA=1013,ar=1014,Ft=1015,Xt=1016,VE=1017,zE=1018,qa=1020,_C=35902,EC=1021,vC=1022,It=1023,yC=1024,xC=1025,ho=1026,Fa=1027,Zs=1028,WE=1029,Jr=1030,qE=1031,$E=1033,gc=33776,Ph=33777,Fh=33778,_c=33779,ef=35840,gp=35841,tf=35842,_p=35843,nA=36196,nf=37492,sf=37496,rf=37808,Ep=37809,vp=37810,yp=37811,kc=37812,xp=37813,Sp=37814,Ip=37815,Cp=37816,Mp=37817,wp=37818,bp=37819,Tp=37820,Bp=37821,Ec=36492,Rp=36494,Dp=36495,SC=36283,Lp=36284,Pp=36285,Fp=36286,XE=2200,iA=2201,sA=2202,Eo=2300,lr=2301,Uh=2302,Zr=2400,eo=2401,Gc=2402,rA=2500,IC=2501,CC=0,YE=1,of=2,MC=3200,wC=3201,KE=0,bC=1,Fn="",St="srgb",ct="srgb-linear",fh="display-p3",$a="display-p3-linear",Hc="linear",mt="srgb",Vc="rec709",zc="p3",pr=7680,Up=519,TC=512,BC=513,RC=514,jE=515,DC=516,LC=517,PC=518,FC=519,af=35044,Np="300 es",Qi=2e3,Wc=2001;class ni{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Op=1234567;const Ca=Math.PI/180,vo=180/Math.PI;function Jn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[i&255]+Zt[i>>8&255]+Zt[i>>16&255]+Zt[i>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Ht(i,e,t){return Math.max(e,Math.min(t,i))}function oA(i,e){return(i%e+e)%e}function UC(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function NC(i,e,t){return i!==e?(t-i)/(e-i):0}function Ma(i,e,t){return(1-t)*i+t*e}function OC(i,e,t,n){return Ma(i,e,1-Math.exp(-t*n))}function QC(i,e=1){return e-Math.abs(oA(i,e*2)-e)}function kC(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function GC(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function HC(i,e){return i+Math.floor(Math.random()*(e-i+1))}function VC(i,e){return i+Math.random()*(e-i)}function zC(i){return i*(.5-Math.random())}function WC(i){i!==void 0&&(Op=i);let e=Op+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qC(i){return i*Ca}function $C(i){return i*vo}function XC(i){return(i&i-1)===0&&i!==0}function YC(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function KC(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function jC(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*m,l*f,a*c);break;case"YXY":i.set(l*f,a*h,l*m,a*c);break;case"ZYZ":i.set(l*m,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function lt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const qc={DEG2RAD:Ca,RAD2DEG:vo,generateUUID:Jn,clamp:Ht,euclideanModulo:oA,mapLinear:UC,inverseLerp:NC,lerp:Ma,damp:OC,pingpong:QC,smoothstep:kC,smootherstep:GC,randInt:HC,randFloat:VC,randFloatSpread:zC,seededRandom:WC,degToRad:qC,radToDeg:$C,isPowerOfTwo:XC,ceilPowerOfTwo:YC,floorPowerOfTwo:KC,setQuaternionFromProperEuler:jC,normalize:lt,denormalize:$n};class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,s,r,o,a,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],g=s[0],A=s[3],p=s[6],x=s[1],_=s[4],C=s[7],M=s[2],I=s[5],w=s[8];return r[0]=o*g+a*x+l*M,r[3]=o*A+a*_+l*I,r[6]=o*p+a*C+l*w,r[1]=c*g+h*x+u*M,r[4]=c*A+h*_+u*I,r[7]=c*p+h*C+u*w,r[2]=d*g+f*x+m*M,r[5]=d*A+f*_+m*I,r[8]=d*p+f*C+m*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,m=t*u+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=u*g,e[1]=(s*c-h*n)*g,e[2]=(a*n-s*o)*g,e[3]=d*g,e[4]=(h*t-s*l)*g,e[5]=(s*r-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Nh.makeScale(e,t)),this}rotate(e){return this.premultiply(Nh.makeRotation(-e)),this}translate(e,t){return this.premultiply(Nh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Nh=new Ue;function JE(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function JC(){const i=Ua("canvas");return i.style.display="block",i}const Qp={};function ZE(i){i in Qp||(Qp[i]=!0,console.warn(i))}const kp=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gp=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),ll={[ct]:{transfer:Hc,primaries:Vc,toReference:i=>i,fromReference:i=>i},[St]:{transfer:mt,primaries:Vc,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[$a]:{transfer:Hc,primaries:zc,toReference:i=>i.applyMatrix3(Gp),fromReference:i=>i.applyMatrix3(kp)},[fh]:{transfer:mt,primaries:zc,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gp),fromReference:i=>i.applyMatrix3(kp).convertLinearToSRGB()}},ZC=new Set([ct,$a]),st={enabled:!0,_workingColorSpace:ct,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!ZC.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=ll[e].toReference,s=ll[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return ll[i].primaries},getTransfer:function(i){return i===Fn?Hc:ll[i].transfer}};function uo(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Oh(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let mr;class eM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{mr===void 0&&(mr=Ua("canvas")),mr.width=e.width,mr.height=e.height;const n=mr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=mr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ua("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=uo(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(uo(t[n]/255)*255):t[n]=uo(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let tM=0;class aA{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Jn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Qh(s[o].image)):r.push(Qh(s[o]))}else r=Qh(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Qh(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let nM=0,_t=class vc extends ni{constructor(e=vc.DEFAULT_IMAGE,t=vc.DEFAULT_MAPPING,n=Bt,s=Bt,r=nt,o=_n,a=It,l=Tt,c=vc.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=Jn(),this.name="",this.source=new aA(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==go)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ti:e.x=e.x-Math.floor(e.x);break;case Bt:e.x=e.x<0?0:1;break;case or:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ti:e.y=e.y-Math.floor(e.y);break;case Bt:e.y=e.y<0?0:1;break;case or:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};_t.DEFAULT_IMAGE=null;_t.DEFAULT_MAPPING=go;_t.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,t=0,n=0,s=1){ht.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],g=l[2],A=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-A)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+A)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,C=(f+1)/2,M=(p+1)/2,I=(h+d)/4,w=(u+g)/4,B=(m+A)/4;return _>C&&_>M?_<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(_),s=I/n,r=w/n):C>M?C<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(C),n=I/s,r=B/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=w/r,s=B/r),this.set(n,s,r,t),this}let x=Math.sqrt((A-m)*(A-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(A-m)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class iM extends ni{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ht(0,0,e,t),this.scissorTest=!1,this.viewport=new ht(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},n);const r=new _t(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new aA(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qn extends iM{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ev extends _t{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class tv extends _t{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=Bt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class bn{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],f=r[o+1],m=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=m,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==m){let A=1-a;const p=l*d+c*f+h*m+u*g,x=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const M=Math.sqrt(_),I=Math.atan2(M,p*x);A=Math.sin(A*I)/M,a=Math.sin(a*I)/M}const C=a*x;if(l=l*A+d*C,c=c*A+f*C,h=h*A+m*C,u=u*A+g*C,A===1-a){const M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],f=r[o+2],m=r[o+3];return e[t]=a*m+h*u+l*f-c*d,e[t+1]=l*m+h*d+c*u-a*f,e[t+2]=c*m+h*f+a*d-l*u,e[t+3]=h*m-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),f=l(s/2),m=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-s)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(s+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(s+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ht(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*s+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return kh.copy(this).projectOnVector(e),this.sub(kh)}reflect(e){return this.sub(kh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Ht(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kh=new L,Hp=new bn;class pn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Hn):Hn.fromBufferAttribute(r,o),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),cl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),cl.copy(n.boundingBox)),cl.applyMatrix4(e.matrixWorld),this.union(cl)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Uo),hl.subVectors(this.max,Uo),gr.subVectors(e.a,Uo),_r.subVectors(e.b,Uo),Er.subVectors(e.c,Uo),Xi.subVectors(_r,gr),Yi.subVectors(Er,_r),Bs.subVectors(gr,Er);let t=[0,-Xi.z,Xi.y,0,-Yi.z,Yi.y,0,-Bs.z,Bs.y,Xi.z,0,-Xi.x,Yi.z,0,-Yi.x,Bs.z,0,-Bs.x,-Xi.y,Xi.x,0,-Yi.y,Yi.x,0,-Bs.y,Bs.x,0];return!Gh(t,gr,_r,Er,hl)||(t=[1,0,0,0,1,0,0,0,1],!Gh(t,gr,_r,Er,hl))?!1:(ul.crossVectors(Xi,Yi),t=[ul.x,ul.y,ul.z],Gh(t,gr,_r,Er,hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const yi=[new L,new L,new L,new L,new L,new L,new L,new L],Hn=new L,cl=new pn,gr=new L,_r=new L,Er=new L,Xi=new L,Yi=new L,Bs=new L,Uo=new L,hl=new L,ul=new L,Rs=new L;function Gh(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Rs.fromArray(i,r);const a=s.x*Math.abs(Rs.x)+s.y*Math.abs(Rs.y)+s.z*Math.abs(Rs.z),l=e.dot(Rs),c=t.dot(Rs),h=n.dot(Rs);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const sM=new pn,No=new L,Hh=new L;class Gn{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):sM.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;No.subVectors(e,this.center);const t=No.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(No,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(No.copy(e.center).add(Hh)),this.expandByPoint(No.copy(e.center).sub(Hh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const xi=new L,Vh=new L,dl=new L,Ki=new L,zh=new L,fl=new L,Wh=new L;class Xa{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=xi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,t),xi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Vh.copy(e).add(t).multiplyScalar(.5),dl.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(Vh);const r=e.distanceTo(t)*.5,o=-this.direction.dot(dl),a=Ki.dot(this.direction),l=-Ki.dot(dl),c=Ki.lengthSq(),h=Math.abs(1-o*o);let u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=r*h,u>=0)if(d>=-m)if(d<=m){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Vh).addScaledVector(dl,d),f}intersectSphere(e,t){xi.subVectors(e.center,this.origin);const n=xi.dot(this.direction),s=xi.dot(xi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,t,n,s,r){zh.subVectors(t,e),fl.subVectors(n,e),Wh.crossVectors(zh,fl);let o=this.direction.dot(Wh),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const l=a*this.direction.dot(fl.crossVectors(Ki,fl));if(l<0)return null;const c=a*this.direction.dot(zh.cross(Ki));if(c<0||l+c>o)return null;const h=-a*Ki.dot(Wh);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Le{constructor(e,t,n,s,r,o,a,l,c,h,u,d,f,m,g,A){Le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,g,A)}set(e,t,n,s,r,o,a,l,c,h,u,d,f,m,g,A){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Le().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/vr.setFromMatrixColumn(e,0).length(),r=1/vr.setFromMatrixColumn(e,1).length(),o=1/vr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,m=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+m*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=m+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d+g*a,t[4]=m*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-m,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,m=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=m+f*a,t[1]=f+m*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,m=a*h,g=a*u;t[0]=l*h,t[4]=m*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=m*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+m,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*l,f=o*c,m=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-m,t[2]=m*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rM,e,oM)}lookAt(e,t,n){const s=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),ji.crossVectors(n,Sn),ji.lengthSq()===0&&(Math.abs(n.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),ji.crossVectors(n,Sn)),ji.normalize(),Al.crossVectors(Sn,ji),s[0]=ji.x,s[4]=Al.x,s[8]=Sn.x,s[1]=ji.y,s[5]=Al.y,s[9]=Sn.y,s[2]=ji.z,s[6]=Al.z,s[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],g=n[6],A=n[10],p=n[14],x=n[3],_=n[7],C=n[11],M=n[15],I=s[0],w=s[4],B=s[8],y=s[12],v=s[1],U=s[5],V=s[9],D=s[13],G=s[2],H=s[6],X=s[10],q=s[14],Q=s[3],te=s[7],ne=s[11],ae=s[15];return r[0]=o*I+a*v+l*G+c*Q,r[4]=o*w+a*U+l*H+c*te,r[8]=o*B+a*V+l*X+c*ne,r[12]=o*y+a*D+l*q+c*ae,r[1]=h*I+u*v+d*G+f*Q,r[5]=h*w+u*U+d*H+f*te,r[9]=h*B+u*V+d*X+f*ne,r[13]=h*y+u*D+d*q+f*ae,r[2]=m*I+g*v+A*G+p*Q,r[6]=m*w+g*U+A*H+p*te,r[10]=m*B+g*V+A*X+p*ne,r[14]=m*y+g*D+A*q+p*ae,r[3]=x*I+_*v+C*G+M*Q,r[7]=x*w+_*U+C*H+M*te,r[11]=x*B+_*V+C*X+M*ne,r[15]=x*y+_*D+C*q+M*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],m=e[3],g=e[7],A=e[11],p=e[15];return m*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*f-n*l*f)+g*(+t*l*f-t*c*d+r*o*d-s*o*f+s*c*h-r*l*h)+A*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],m=e[12],g=e[13],A=e[14],p=e[15],x=u*A*c-g*d*c+g*l*f-a*A*f-u*l*p+a*d*p,_=m*d*c-h*A*c-m*l*f+o*A*f+h*l*p-o*d*p,C=h*g*c-m*u*c+m*a*f-o*g*f-h*a*p+o*u*p,M=m*u*l-h*g*l-m*a*d+o*g*d+h*a*A-o*u*A,I=t*x+n*_+s*C+r*M;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/I;return e[0]=x*w,e[1]=(g*d*r-u*A*r-g*s*f+n*A*f+u*s*p-n*d*p)*w,e[2]=(a*A*r-g*l*r+g*s*c-n*A*c-a*s*p+n*l*p)*w,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*f-n*l*f)*w,e[4]=_*w,e[5]=(h*A*r-m*d*r+m*s*f-t*A*f-h*s*p+t*d*p)*w,e[6]=(m*l*r-o*A*r-m*s*c+t*A*c+o*s*p-t*l*p)*w,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*f+t*l*f)*w,e[8]=C*w,e[9]=(m*u*r-h*g*r-m*n*f+t*g*f+h*n*p-t*u*p)*w,e[10]=(o*g*r-m*a*r+m*n*c-t*g*c-o*n*p+t*a*p)*w,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*w,e[12]=M*w,e[13]=(h*g*s-m*u*s+m*n*d-t*g*d-h*n*A+t*u*A)*w,e[14]=(m*a*s-o*g*s-m*n*l+t*g*l+o*n*A-t*a*A)*w,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*w,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,m=r*u,g=o*h,A=o*u,p=a*u,x=l*c,_=l*h,C=l*u,M=n.x,I=n.y,w=n.z;return s[0]=(1-(g+p))*M,s[1]=(f+C)*M,s[2]=(m-_)*M,s[3]=0,s[4]=(f-C)*I,s[5]=(1-(d+p))*I,s[6]=(A+x)*I,s[7]=0,s[8]=(m+_)*w,s[9]=(A-x)*w,s[10]=(1-(d+g))*w,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=vr.set(s[0],s[1],s[2]).length();const o=vr.set(s[4],s[5],s[6]).length(),a=vr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vn.copy(this);const c=1/r,h=1/o,u=1/a;return Vn.elements[0]*=c,Vn.elements[1]*=c,Vn.elements[2]*=c,Vn.elements[4]*=h,Vn.elements[5]*=h,Vn.elements[6]*=h,Vn.elements[8]*=u,Vn.elements[9]*=u,Vn.elements[10]*=u,t.setFromRotationMatrix(Vn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Qi){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let f,m;if(a===Qi)f=-(o+r)/(o-r),m=-2*o*r/(o-r);else if(a===Wc)f=-o/(o-r),m=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Qi){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,f=(n+s)*h;let m,g;if(a===Qi)m=(o+r)*u,g=-2*u;else if(a===Wc)m=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const vr=new L,Vn=new Le,rM=new L(0,0,0),oM=new L(1,1,1),ji=new L,Al=new L,Sn=new L,Vp=new Le,zp=new bn;class kn{constructor(e=0,t=0,n=0,s=kn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vp,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zp.setFromEuler(this),this.setFromQuaternion(zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}kn.DEFAULT_ORDER="XYZ";class lA{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let aM=0;const Wp=new L,yr=new bn,Si=new Le,pl=new L,Oo=new L,lM=new L,cM=new bn,qp=new L(1,0,0),$p=new L(0,1,0),Xp=new L(0,0,1),Yp={type:"added"},hM={type:"removed"},xr={type:"childadded",child:null},qh={type:"childremoved",child:null};class ft extends ni{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:aM++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ft.DEFAULT_UP.clone();const e=new L,t=new kn,n=new bn,s=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Le},normalMatrix:{value:new Ue}}),this.matrix=new Le,this.matrixWorld=new Le,this.matrixAutoUpdate=ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lA,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.multiply(yr),this}rotateOnWorldAxis(e,t){return yr.setFromAxisAngle(e,t),this.quaternion.premultiply(yr),this}rotateX(e){return this.rotateOnAxis(qp,e)}rotateY(e){return this.rotateOnAxis($p,e)}rotateZ(e){return this.rotateOnAxis(Xp,e)}translateOnAxis(e,t){return Wp.copy(e).applyQuaternion(this.quaternion),this.position.add(Wp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qp,e)}translateY(e){return this.translateOnAxis($p,e)}translateZ(e){return this.translateOnAxis(Xp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Si.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?pl.copy(e):pl.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Si.lookAt(Oo,pl,this.up):Si.lookAt(pl,Oo,this.up),this.quaternion.setFromRotationMatrix(Si),s&&(Si.extractRotation(s.matrixWorld),yr.setFromRotationMatrix(Si),this.quaternion.premultiply(yr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yp),xr.child=e,this.dispatchEvent(xr),xr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hM),qh.child=e,this.dispatchEvent(qh),qh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Si.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Si.multiply(e.parent.matrixWorld)),e.applyMatrix4(Si),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yp),xr.child=e,this.dispatchEvent(xr),xr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,e,lM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oo,cM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++){const a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}ft.DEFAULT_UP=new L(0,1,0);ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new L,Ii=new L,$h=new L,Ci=new L,Sr=new L,Ir=new L,Kp=new L,Xh=new L,Yh=new L,Kh=new L;class Un{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),zn.subVectors(e,t),s.cross(zn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){zn.subVectors(s,t),Ii.subVectors(n,t),$h.subVectors(e,t);const o=zn.dot(zn),a=zn.dot(Ii),l=zn.dot($h),c=Ii.dot(Ii),h=Ii.dot($h),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Ci)===null?!1:Ci.x>=0&&Ci.y>=0&&Ci.x+Ci.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ci.x),l.addScaledVector(o,Ci.y),l.addScaledVector(a,Ci.z),l)}static isFrontFacing(e,t,n,s){return zn.subVectors(n,t),Ii.subVectors(e,t),zn.cross(Ii).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),Ii.subVectors(this.a,this.b),zn.cross(Ii).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Un.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Un.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return Un.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return Un.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Un.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;Sr.subVectors(s,n),Ir.subVectors(r,n),Xh.subVectors(e,n);const l=Sr.dot(Xh),c=Ir.dot(Xh);if(l<=0&&c<=0)return t.copy(n);Yh.subVectors(e,s);const h=Sr.dot(Yh),u=Ir.dot(Yh);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Sr,o);Kh.subVectors(e,r);const f=Sr.dot(Kh),m=Ir.dot(Kh);if(m>=0&&f<=m)return t.copy(r);const g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(Ir,a);const A=h*m-f*u;if(A<=0&&u-h>=0&&f-m>=0)return Kp.subVectors(r,s),a=(u-h)/(u-h+(f-m)),t.copy(s).addScaledVector(Kp,a);const p=1/(A+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(Sr,o).addScaledVector(Ir,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ji={h:0,s:0,l:0},ml={h:0,s:0,l:0};function jh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class De{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=St){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=st.workingColorSpace){if(e=oA(e,1),t=Ht(t,0,1),n=Ht(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=jh(o,r,e+1/3),this.g=jh(o,r,e),this.b=jh(o,r,e-1/3)}return st.toWorkingColorSpace(this,s),this}setStyle(e,t=St){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=St){const n=nv[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}copyLinearToSRGB(e){return this.r=Oh(e.r),this.g=Oh(e.g),this.b=Oh(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=St){return st.fromWorkingColorSpace(en.copy(this),e),Math.round(Ht(en.r*255,0,255))*65536+Math.round(Ht(en.g*255,0,255))*256+Math.round(Ht(en.b*255,0,255))}getHexString(e=St){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.fromWorkingColorSpace(en.copy(this),t);const n=en.r,s=en.g,r=en.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=st.workingColorSpace){return st.fromWorkingColorSpace(en.copy(this),t),e.r=en.r,e.g=en.g,e.b=en.b,e}getStyle(e=St){st.fromWorkingColorSpace(en.copy(this),e);const t=en.r,n=en.g,s=en.b;return e!==St?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Ji),this.setHSL(Ji.h+e,Ji.s+t,Ji.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ji),e.getHSL(ml);const n=Ma(Ji.h,ml.h,t),s=Ma(Ji.s,ml.s,t),r=Ma(Ji.l,ml.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const en=new De;De.NAMES=nv;let uM=0,Zn=class extends ni{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:uM++}),this.uuid=Jn(),this.name="",this.type="Material",this.blending=co,this.side=ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=Jd,this.blendEquation=Ks,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Oc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Up,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pr,this.stencilZFail=pr,this.stencilZPass=pr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(n.blending=this.blending),this.side!==ei&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jd&&(n.blendSrc=this.blendSrc),this.blendDst!==Jd&&(n.blendDst=this.blendDst),this.blendEquation!==Ks&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Oc&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Up&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==pr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==pr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};class On extends Zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.combine=OE,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Oi=dM();function dM(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function fM(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ht(i,-65504,65504),Oi.floatView[0]=i;const e=Oi.uint32View[0],t=e>>23&511;return Oi.baseTable[t]+((e&8388607)>>Oi.shiftTable[t])}function AM(i){const e=i>>10;return Oi.uint32View[0]=Oi.mantissaTable[Oi.offsetTable[e]+(i&1023)]+Oi.exponentTable[e],Oi.floatView[0]}const gl={toHalfFloat:fM,fromHalfFloat:AM},Dt=new L,_l=new Re;class Ct{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=af,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Ft,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ZE("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_l.fromBufferAttribute(this,t),_l.applyMatrix3(e),this.setXY(t,_l.x,_l.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix3(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyMatrix4(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.applyNormalMatrix(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dt.fromBufferAttribute(this,t),Dt.transformDirection(e),this.setXYZ(t,Dt.x,Dt.y,Dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$n(t,this.array)),t}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$n(t,this.array)),t}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$n(t,this.array)),t}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$n(t,this.array)),t}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==af&&(e.usage=this.usage),e}}class iv extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class sv extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Tn extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}}let pM=0;const Dn=new Le,Jh=new ft,Cr=new L,In=new pn,Qo=new pn,kt=new L;class Bn extends ni{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(JE(e)?sv:iv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Dn.makeRotationFromQuaternion(e),this.applyMatrix4(Dn),this}rotateX(e){return Dn.makeRotationX(e),this.applyMatrix4(Dn),this}rotateY(e){return Dn.makeRotationY(e),this.applyMatrix4(Dn),this}rotateZ(e){return Dn.makeRotationZ(e),this.applyMatrix4(Dn),this}translate(e,t,n){return Dn.makeTranslation(e,t,n),this.applyMatrix4(Dn),this}scale(e,t,n){return Dn.makeScale(e,t,n),this.applyMatrix4(Dn),this}lookAt(e){return Jh.lookAt(e),Jh.updateMatrix(),this.applyMatrix4(Jh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Cr).negate(),this.translate(Cr.x,Cr.y,Cr.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Tn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];In.setFromBufferAttribute(r),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qo.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(In.min,Qo.min),In.expandByPoint(kt),kt.addVectors(In.max,Qo.max),In.expandByPoint(kt)):(In.expandByPoint(Qo.min),In.expandByPoint(Qo.max))}In.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)kt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(kt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)kt.fromBufferAttribute(a,c),l&&(Cr.fromBufferAttribute(e,c),kt.add(Cr)),s=Math.max(s,n.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let B=0;B<n.count;B++)a[B]=new L,l[B]=new L;const c=new L,h=new L,u=new L,d=new Re,f=new Re,m=new Re,g=new L,A=new L;function p(B,y,v){c.fromBufferAttribute(n,B),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),d.fromBufferAttribute(r,B),f.fromBufferAttribute(r,y),m.fromBufferAttribute(r,v),h.sub(c),u.sub(c),f.sub(d),m.sub(d);const U=1/(f.x*m.y-m.x*f.y);isFinite(U)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(U),A.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(U),a[B].add(g),a[y].add(g),a[v].add(g),l[B].add(A),l[y].add(A),l[v].add(A))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let B=0,y=x.length;B<y;++B){const v=x[B],U=v.start,V=v.count;for(let D=U,G=U+V;D<G;D+=3)p(e.getX(D+0),e.getX(D+1),e.getX(D+2))}const _=new L,C=new L,M=new L,I=new L;function w(B){M.fromBufferAttribute(s,B),I.copy(M);const y=a[B];_.copy(y),_.sub(M.multiplyScalar(M.dot(y))).normalize(),C.crossVectors(I,y);const U=C.dot(l[B])<0?-1:1;o.setXYZW(B,_.x,_.y,_.z,U)}for(let B=0,y=x.length;B<y;++B){const v=x[B],U=v.start,V=v.count;for(let D=U,G=U+V;D<G;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),g=e.getX(d+1),A=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,A),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,A),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(A,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,m=0;for(let g=0,A=l.length;g<A;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new Ct(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jp=new Le,Ds=new Xa,El=new Gn,Jp=new L,Mr=new L,wr=new L,br=new L,Zh=new L,vl=new L,yl=new Re,xl=new Re,Sl=new Re,Zp=new L,em=new L,tm=new L,Il=new L,Cl=new L;class ut extends ft{constructor(e=new Bn,t=new On){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){vl.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Zh.fromBufferAttribute(u,e),o?vl.addScaledVector(Zh,h):vl.addScaledVector(Zh.sub(t),h))}t.add(vl)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),El.copy(n.boundingSphere),El.applyMatrix4(r),Ds.copy(e.ray).recast(e.near),!(El.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(El,Jp)===null||Ds.origin.distanceToSquared(Jp)>(e.far-e.near)**2))&&(jp.copy(r).invert(),Ds.copy(e.ray).applyMatrix4(jp),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const A=d[m],p=o[A.materialIndex],x=Math.max(A.start,f.start),_=Math.min(a.count,Math.min(A.start+A.count,f.start+f.count));for(let C=x,M=_;C<M;C+=3){const I=a.getX(C),w=a.getX(C+1),B=a.getX(C+2);s=Ml(this,p,e,n,c,h,u,I,w,B),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=A.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let A=m,p=g;A<p;A+=3){const x=a.getX(A),_=a.getX(A+1),C=a.getX(A+2);s=Ml(this,o,e,n,c,h,u,x,_,C),s&&(s.faceIndex=Math.floor(A/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){const A=d[m],p=o[A.materialIndex],x=Math.max(A.start,f.start),_=Math.min(l.count,Math.min(A.start+A.count,f.start+f.count));for(let C=x,M=_;C<M;C+=3){const I=C,w=C+1,B=C+2;s=Ml(this,p,e,n,c,h,u,I,w,B),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=A.materialIndex,t.push(s))}}else{const m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let A=m,p=g;A<p;A+=3){const x=A,_=A+1,C=A+2;s=Ml(this,o,e,n,c,h,u,x,_,C),s&&(s.faceIndex=Math.floor(A/3),t.push(s))}}}}function mM(i,e,t,n,s,r,o,a){let l;if(e.side===Yt?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ei,a),l===null)return null;Cl.copy(a),Cl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Cl);return c<t.near||c>t.far?null:{distance:c,point:Cl.clone(),object:i}}function Ml(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Mr),i.getVertexPosition(l,wr),i.getVertexPosition(c,br);const h=mM(i,e,t,n,Mr,wr,br,Il);if(h){s&&(yl.fromBufferAttribute(s,a),xl.fromBufferAttribute(s,l),Sl.fromBufferAttribute(s,c),h.uv=Un.getInterpolation(Il,Mr,wr,br,yl,xl,Sl,new Re)),r&&(yl.fromBufferAttribute(r,a),xl.fromBufferAttribute(r,l),Sl.fromBufferAttribute(r,c),h.uv1=Un.getInterpolation(Il,Mr,wr,br,yl,xl,Sl,new Re)),o&&(Zp.fromBufferAttribute(o,a),em.fromBufferAttribute(o,l),tm.fromBufferAttribute(o,c),h.normal=Un.getInterpolation(Il,Mr,wr,br,Zp,em,tm,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a,b:l,c,normal:new L,materialIndex:0};Un.getNormal(Mr,wr,br,u.normal),h.face=u}return h}class Ar extends Bn{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Tn(c,3)),this.setAttribute("normal",new Tn(h,3)),this.setAttribute("uv",new Tn(u,2));function m(g,A,p,x,_,C,M,I,w,B,y){const v=C/w,U=M/B,V=C/2,D=M/2,G=I/2,H=w+1,X=B+1;let q=0,Q=0;const te=new L;for(let ne=0;ne<X;ne++){const ae=ne*U-D;for(let ge=0;ge<H;ge++){const Me=ge*v-V;te[g]=Me*x,te[A]=ae*_,te[p]=G,c.push(te.x,te.y,te.z),te[g]=0,te[A]=0,te[p]=I>0?1:-1,h.push(te.x,te.y,te.z),u.push(ge/w),u.push(1-ne/B),q+=1}}for(let ne=0;ne<B;ne++)for(let ae=0;ae<w;ae++){const ge=d+ae+H*ne,Me=d+ae+H*(ne+1),Z=d+(ae+1)+H*(ne+1),oe=d+(ae+1)+H*ne;l.push(ge,Me,oe),l.push(Me,Z,oe),Q+=6}a.addGroup(f,Q,y),f+=Q,d+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ar(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function yo(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function dn(i){const e={};for(let t=0;t<i.length;t++){const n=yo(i[t]);for(const s in n)e[s]=n[s]}return e}function gM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function rv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const _M={clone:yo,merge:dn};var EM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class yn extends Zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=EM,this.fragmentShader=vM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yo(e.uniforms),this.uniformsGroups=gM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ov extends ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Le,this.projectionMatrix=new Le,this.projectionMatrixInverse=new Le,this.coordinateSystem=Qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Zi=new L,nm=new Re,im=new Re;class Vt extends ov{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ca*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vo*2*Math.atan(Math.tan(Ca*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z),Zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zi.x,Zi.y).multiplyScalar(-e/Zi.z)}getViewSize(e,t){return this.getViewBounds(e,nm,im),t.subVectors(im,nm)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ca*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Tr=-90,Br=1;class lf extends ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vt(Tr,Br,e,t);s.layers=this.layers,this.add(s);const r=new Vt(Tr,Br,e,t);r.layers=this.layers,this.add(r);const o=new Vt(Tr,Br,e,t);o.layers=this.layers,this.add(o);const a=new Vt(Tr,Br,e,t);a.layers=this.layers,this.add(a);const l=new Vt(Tr,Br,e,t);l.layers=this.layers,this.add(l);const c=new Vt(Tr,Br,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Qi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wc)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class av extends _t{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:rr,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class cA extends Qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new av(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ar(5,5,5),r=new yn({name:"CubemapFromEquirect",uniforms:yo(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Yt,blending:pi});r.uniforms.tEquirect.value=t;const o=new ut(s,r),a=t.minFilter;return t.minFilter===_n&&(t.minFilter=nt),new lf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const eu=new L,yM=new L,xM=new Ue;class Hs{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=eu.subVectors(n,t).cross(yM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(eu),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||xM.getNormalMatrix(e),s=this.coplanarPoint(eu).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ls=new Gn,wl=new L;class hA{constructor(e=new Hs,t=new Hs,n=new Hs,s=new Hs,r=new Hs,o=new Hs){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],f=s[8],m=s[9],g=s[10],A=s[11],p=s[12],x=s[13],_=s[14],C=s[15];if(n[0].setComponents(l-r,d-c,A-f,C-p).normalize(),n[1].setComponents(l+r,d+c,A+f,C+p).normalize(),n[2].setComponents(l+o,d+h,A+m,C+x).normalize(),n[3].setComponents(l-o,d-h,A-m,C-x).normalize(),n[4].setComponents(l-a,d-u,A-g,C-_).normalize(),t===Qi)n[5].setComponents(l+a,d+u,A+g,C+_).normalize();else if(t===Wc)n[5].setComponents(a,u,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){return Ls.center.set(0,0,0),Ls.radius=.7071067811865476,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(wl.x=s.normal.x>0?e.max.x:e.min.x,wl.y=s.normal.y>0?e.max.y:e.min.y,wl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(wl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lv(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function SM(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,a),u.count===-1&&d.length===0&&i.bufferSubData(c,0,h),d.length!==0){for(let f=0,m=d.length;f<m;f++){const g=d[f];i.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}u.count!==-1&&(i.bufferSubData(c,u.offset*h.BYTES_PER_ELEMENT,h,u.offset,u.count),u.count=-1),l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class gi extends Bn{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,f=[],m=[],g=[],A=[];for(let p=0;p<h;p++){const x=p*d-o;for(let _=0;_<c;_++){const C=_*u-r;m.push(C,-x,0),g.push(0,0,1),A.push(_/a),A.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const _=x+c*p,C=x+c*(p+1),M=x+1+c*(p+1),I=x+1+c*p;f.push(_,C,I),f.push(C,M,I)}this.setIndex(f),this.setAttribute("position",new Tn(m,3)),this.setAttribute("normal",new Tn(g,3)),this.setAttribute("uv",new Tn(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gi(e.width,e.height,e.widthSegments,e.heightSegments)}}var IM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CM=`#ifdef USE_ALPHAHASH
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
#endif`,MM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,TM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BM=`#ifdef USE_AOMAP
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
#endif`,RM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
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
#endif`,LM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,PM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,UM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,NM=`#ifdef USE_IRIDESCENCE
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
#endif`,OM=`#ifdef USE_BUMPMAP
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,VM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,$M=`#define PI 3.141592653589793
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,XM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,YM=`vec3 transformedNormal = objectNormal;
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
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ZM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ew="gl_FragColor = linearToOutputTexel( gl_FragColor );",tw=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,nw=`#ifdef USE_ENVMAP
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
#endif`,iw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sw=`#ifdef USE_ENVMAP
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
#endif`,rw=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ow=`#ifdef USE_ENVMAP
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
#endif`,aw=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,uw=`#ifdef USE_GRADIENTMAP
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
}`,dw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,fw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Aw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mw=`uniform bool receiveShadow;
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
#endif`,gw=`#ifdef USE_ENVMAP
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
#endif`,_w=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ew=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yw=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xw=`PhysicalMaterial material;
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
#endif`,Sw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
}`,Iw=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Cw=`#if defined( RE_IndirectDiffuse )
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
#endif`,Mw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ww=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Pw=`#if defined( USE_POINTS_UV )
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
#endif`,Fw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Uw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Nw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ow=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Qw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,kw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
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
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Gw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Hw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Vw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ww=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$w=`#ifdef USE_NORMALMAP
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
#endif`,Xw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Yw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Kw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,jw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Jw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Zw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,eb=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,ib=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ob=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return shadow;
	}
#endif`,ab=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,hb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ub=`#ifdef USE_SKINNING
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
#endif`,db=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fb=`#ifdef USE_SKINNING
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
#endif`,Ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gb=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, newPeak * vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_b=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Eb=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,vb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sb=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ib=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Cb=`uniform sampler2D t2D;
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
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wb=`#ifdef ENVMAP_TYPE_CUBE
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
}`,bb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bb=`#include <common>
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
}`,Rb=`#if DEPTH_PACKING == 3200
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
	#endif
}`,Db=`#define DISTANCE
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
}`,Lb=`#define DISTANCE
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
}`,Pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ub=`uniform float scale;
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
}`,Nb=`uniform vec3 diffuse;
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
}`,Ob=`#include <common>
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
}`,Qb=`uniform vec3 diffuse;
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
}`,kb=`#define LAMBERT
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
}`,Gb=`#define LAMBERT
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
}`,Hb=`#define MATCAP
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
}`,Vb=`#define MATCAP
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
}`,zb=`#define NORMAL
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
}`,Wb=`#define NORMAL
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
}`,qb=`#define PHONG
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
}`,$b=`#define PHONG
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
}`,Xb=`#define STANDARD
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
}`,Yb=`#define STANDARD
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
}`,Kb=`#define TOON
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
}`,jb=`#define TOON
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
}`,Jb=`uniform float size;
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
}`,Zb=`uniform vec3 diffuse;
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
}`,eT=`#include <common>
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
}`,tT=`uniform vec3 color;
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
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,iT=`uniform vec3 diffuse;
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
}`,qe={alphahash_fragment:IM,alphahash_pars_fragment:CM,alphamap_fragment:MM,alphamap_pars_fragment:wM,alphatest_fragment:bM,alphatest_pars_fragment:TM,aomap_fragment:BM,aomap_pars_fragment:RM,batching_pars_vertex:DM,batching_vertex:LM,begin_vertex:PM,beginnormal_vertex:FM,bsdfs:UM,iridescence_fragment:NM,bumpmap_pars_fragment:OM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:kM,clipping_planes_pars_vertex:GM,clipping_planes_vertex:HM,color_fragment:VM,color_pars_fragment:zM,color_pars_vertex:WM,color_vertex:qM,common:$M,cube_uv_reflection_fragment:XM,defaultnormal_vertex:YM,displacementmap_pars_vertex:KM,displacementmap_vertex:jM,emissivemap_fragment:JM,emissivemap_pars_fragment:ZM,colorspace_fragment:ew,colorspace_pars_fragment:tw,envmap_fragment:nw,envmap_common_pars_fragment:iw,envmap_pars_fragment:sw,envmap_pars_vertex:rw,envmap_physical_pars_fragment:gw,envmap_vertex:ow,fog_vertex:aw,fog_pars_vertex:lw,fog_fragment:cw,fog_pars_fragment:hw,gradientmap_pars_fragment:uw,lightmap_fragment:dw,lightmap_pars_fragment:fw,lights_lambert_fragment:Aw,lights_lambert_pars_fragment:pw,lights_pars_begin:mw,lights_toon_fragment:_w,lights_toon_pars_fragment:Ew,lights_phong_fragment:vw,lights_phong_pars_fragment:yw,lights_physical_fragment:xw,lights_physical_pars_fragment:Sw,lights_fragment_begin:Iw,lights_fragment_maps:Cw,lights_fragment_end:Mw,logdepthbuf_fragment:ww,logdepthbuf_pars_fragment:bw,logdepthbuf_pars_vertex:Tw,logdepthbuf_vertex:Bw,map_fragment:Rw,map_pars_fragment:Dw,map_particle_fragment:Lw,map_particle_pars_fragment:Pw,metalnessmap_fragment:Fw,metalnessmap_pars_fragment:Uw,morphinstance_vertex:Nw,morphcolor_vertex:Ow,morphnormal_vertex:Qw,morphtarget_pars_vertex:kw,morphtarget_vertex:Gw,normal_fragment_begin:Hw,normal_fragment_maps:Vw,normal_pars_fragment:zw,normal_pars_vertex:Ww,normal_vertex:qw,normalmap_pars_fragment:$w,clearcoat_normal_fragment_begin:Xw,clearcoat_normal_fragment_maps:Yw,clearcoat_pars_fragment:Kw,iridescence_pars_fragment:jw,opaque_fragment:Jw,packing:Zw,premultiplied_alpha_fragment:eb,project_vertex:tb,dithering_fragment:nb,dithering_pars_fragment:ib,roughnessmap_fragment:sb,roughnessmap_pars_fragment:rb,shadowmap_pars_fragment:ob,shadowmap_pars_vertex:ab,shadowmap_vertex:lb,shadowmask_pars_fragment:cb,skinbase_vertex:hb,skinning_pars_vertex:ub,skinning_vertex:db,skinnormal_vertex:fb,specularmap_fragment:Ab,specularmap_pars_fragment:pb,tonemapping_fragment:mb,tonemapping_pars_fragment:gb,transmission_fragment:_b,transmission_pars_fragment:Eb,uv_pars_fragment:vb,uv_pars_vertex:yb,uv_vertex:xb,worldpos_vertex:Sb,background_vert:Ib,background_frag:Cb,backgroundCube_vert:Mb,backgroundCube_frag:wb,cube_vert:bb,cube_frag:Tb,depth_vert:Bb,depth_frag:Rb,distanceRGBA_vert:Db,distanceRGBA_frag:Lb,equirect_vert:Pb,equirect_frag:Fb,linedashed_vert:Ub,linedashed_frag:Nb,meshbasic_vert:Ob,meshbasic_frag:Qb,meshlambert_vert:kb,meshlambert_frag:Gb,meshmatcap_vert:Hb,meshmatcap_frag:Vb,meshnormal_vert:zb,meshnormal_frag:Wb,meshphong_vert:qb,meshphong_frag:$b,meshphysical_vert:Xb,meshphysical_frag:Yb,meshtoon_vert:Kb,meshtoon_frag:jb,points_vert:Jb,points_frag:Zb,shadow_vert:eT,shadow_frag:tT,sprite_vert:nT,sprite_frag:iT},me={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},ci={basic:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new De(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:dn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:dn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:dn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new De(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:dn([me.points,me.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:dn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:dn([me.common,me.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:dn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:dn([me.sprite,me.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:dn([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:dn([me.lights,me.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ci.physical={uniforms:dn([ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const bl={r:0,b:0,g:0},Ps=new kn,sT=new Le;function rT(i,e,t,n,s,r,o){const a=new De(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function m(A,p){let x=!1,_=p.isScene===!0?p.background:null;_&&_.isTexture&&(_=(p.backgroundBlurriness>0?t:e).get(_)),_===null?g(a,l):_&&_.isColor&&(g(_,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||x)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===dh)?(h===void 0&&(h=new ut(new Ar(1,1,1),new yn({name:"BackgroundCubeMaterial",uniforms:yo(ci.backgroundCube.uniforms),vertexShader:ci.backgroundCube.vertexShader,fragmentShader:ci.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(M,I,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Ps.copy(p.backgroundRotation),Ps.x*=-1,Ps.y*=-1,Ps.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Ps.y*=-1,Ps.z*=-1),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(sT.makeRotationFromEuler(Ps)),h.material.toneMapped=st.getTransfer(_.colorSpace)!==mt,(u!==_||d!==_.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new ut(new gi(2,2),new yn({name:"BackgroundMaterial",uniforms:yo(ci.background.uniforms),vertexShader:ci.background.vertexShader,fragmentShader:ci.background.fragmentShader,side:ei,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=st.getTransfer(_.colorSpace)!==mt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function g(A,p){A.getRGB(bl,rv(i)),n.buffers.color.setClear(bl.r,bl.g,bl.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(A,p=1){a.set(A),l=p,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,g(a,l)},render:m}}function oT(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(v,U,V,D,G){let H=!1;const X=u(D,V,U);r!==X&&(r=X,c(r.object)),H=f(v,D,V,G),H&&m(v,D,V,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,C(v,U,V,D),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,U,V){const D=V.wireframe===!0;let G=n[v.id];G===void 0&&(G={},n[v.id]=G);let H=G[U.id];H===void 0&&(H={},G[U.id]=H);let X=H[D];return X===void 0&&(X=d(l()),H[D]=X),X}function d(v){const U=[],V=[],D=[];for(let G=0;G<t;G++)U[G]=0,V[G]=0,D[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:D,object:v,attributes:{},index:null}}function f(v,U,V,D){const G=r.attributes,H=U.attributes;let X=0;const q=V.getAttributes();for(const Q in q)if(q[Q].location>=0){const ne=G[Q];let ae=H[Q];if(ae===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(ae=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(ae=v.instanceColor)),ne===void 0||ne.attribute!==ae||ae&&ne.data!==ae.data)return!0;X++}return r.attributesNum!==X||r.index!==D}function m(v,U,V,D){const G={},H=U.attributes;let X=0;const q=V.getAttributes();for(const Q in q)if(q[Q].location>=0){let ne=H[Q];ne===void 0&&(Q==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),Q==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor));const ae={};ae.attribute=ne,ne&&ne.data&&(ae.data=ne.data),G[Q]=ae,X++}r.attributes=G,r.attributesNum=X,r.index=D}function g(){const v=r.newAttributes;for(let U=0,V=v.length;U<V;U++)v[U]=0}function A(v){p(v,0)}function p(v,U){const V=r.newAttributes,D=r.enabledAttributes,G=r.attributeDivisors;V[v]=1,D[v]===0&&(i.enableVertexAttribArray(v),D[v]=1),G[v]!==U&&(i.vertexAttribDivisor(v,U),G[v]=U)}function x(){const v=r.newAttributes,U=r.enabledAttributes;for(let V=0,D=U.length;V<D;V++)U[V]!==v[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function _(v,U,V,D,G,H,X){X===!0?i.vertexAttribIPointer(v,U,V,G,H):i.vertexAttribPointer(v,U,V,D,G,H)}function C(v,U,V,D){g();const G=D.attributes,H=V.getAttributes(),X=U.defaultAttributeValues;for(const q in H){const Q=H[q];if(Q.location>=0){let te=G[q];if(te===void 0&&(q==="instanceMatrix"&&v.instanceMatrix&&(te=v.instanceMatrix),q==="instanceColor"&&v.instanceColor&&(te=v.instanceColor)),te!==void 0){const ne=te.normalized,ae=te.itemSize,ge=e.get(te);if(ge===void 0)continue;const Me=ge.buffer,Z=ge.type,oe=ge.bytesPerElement,de=Z===i.INT||Z===i.UNSIGNED_INT||te.gpuType===tA;if(te.isInterleavedBufferAttribute){const fe=te.data,be=fe.stride,Fe=te.offset;if(fe.isInstancedInterleavedBuffer){for(let Ne=0;Ne<Q.locationSize;Ne++)p(Q.location+Ne,fe.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Ne=0;Ne<Q.locationSize;Ne++)A(Q.location+Ne);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let Ne=0;Ne<Q.locationSize;Ne++)_(Q.location+Ne,ae/Q.locationSize,Z,ne,be*oe,(Fe+ae/Q.locationSize*Ne)*oe,de)}else{if(te.isInstancedBufferAttribute){for(let fe=0;fe<Q.locationSize;fe++)p(Q.location+fe,te.meshPerAttribute);v.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let fe=0;fe<Q.locationSize;fe++)A(Q.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Me);for(let fe=0;fe<Q.locationSize;fe++)_(Q.location+fe,ae/Q.locationSize,Z,ne,ae*oe,ae/Q.locationSize*fe*oe,de)}}else if(X!==void 0){const ne=X[q];if(ne!==void 0)switch(ne.length){case 2:i.vertexAttrib2fv(Q.location,ne);break;case 3:i.vertexAttrib3fv(Q.location,ne);break;case 4:i.vertexAttrib4fv(Q.location,ne);break;default:i.vertexAttrib1fv(Q.location,ne)}}}}x()}function M(){B();for(const v in n){const U=n[v];for(const V in U){const D=U[V];for(const G in D)h(D[G].object),delete D[G];delete U[V]}delete n[v]}}function I(v){if(n[v.id]===void 0)return;const U=n[v.id];for(const V in U){const D=U[V];for(const G in D)h(D[G].object),delete D[G];delete U[V]}delete n[v.id]}function w(v){for(const U in n){const V=n[U];if(V[v.id]===void 0)continue;const D=V[v.id];for(const G in D)h(D[G].object),delete D[G];delete V[v.id]}}function B(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:B,resetDefaultState:y,dispose:M,releaseStatesOfGeometry:I,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:A,disableUnusedAttributes:x}}function aT(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function o(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function a(l,c,h){if(h===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let d=0;d<h;d++)this.render(l[d],c[d]);else{u.multiDrawArraysWEBGL(n,l,0,c,0,h);let d=0;for(let f=0;f<h;f++)d+=c[f];t.update(d,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function lT(i,e,t){let n;function s(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const _=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=t.precision!==void 0?t.precision:"highp";const a=r(o);a!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",a,"instead."),o=a);const l=t.logarithmicDepthBuffer===!0,c=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),u=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),g=i.getParameter(i.MAX_VARYING_VECTORS),A=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),p=h>0,x=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:l,maxTextures:c,maxVertexTextures:h,maxTextureSize:u,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:m,maxVaryings:g,maxFragmentUniforms:A,vertexTextures:p,maxSamples:x}}function cT(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Hs,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||s;return s=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,g=u.clipIntersection,A=u.clipShadows,p=i.get(u);if(!s||m===null||m.length===0||r&&!A)r?h(null):c();else{const x=r?0:n,_=x*4;let C=p.clippingState||null;l.value=C,C=h(m,d,_,f);for(let M=0;M!==_;++M)C[M]=t[M];p.clippingState=C,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,m){const g=u!==null?u.length:0;let A=null;if(g!==0){if(A=l.value,m!==!0||A===null){const p=f+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(A===null||A.length<p)&&(A=new Float32Array(p));for(let _=0,C=f;_!==g;++_,C+=4)o.copy(u[_]).applyMatrix4(x,a),o.normal.toArray(A,C),A[C+3]=o.constant}l.value=A,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,A}}function hT(i){let e=new WeakMap;function t(o,a){return a===Qc?o.mapping=rr:a===Zd&&(o.mapping=_o),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Qc||a===Zd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new cA(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class To extends ov{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const to=4,sm=[.125,.215,.35,.446,.526,.582],js=20,tu=new To,rm=new De;let nu=null,iu=0,su=0,ru=!1;const Vs=(1+Math.sqrt(5))/2,Rr=1/Vs,om=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Vs,Rr),new L(0,Vs,-Rr),new L(Rr,0,Vs),new L(-Rr,0,Vs),new L(Vs,Rr,0),new L(-Vs,Rr,0)];class am{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(nu,iu,su),this._renderer.xr.enabled=ru,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rr||e.mapping===_o?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nu=this._renderer.getRenderTarget(),iu=this._renderer.getActiveCubeFace(),su=this._renderer.getActiveMipmapLevel(),ru=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nt,minFilter:nt,generateMipmaps:!1,type:Xt,format:It,colorSpace:ct,depthBuffer:!1},s=lm(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lm(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=uT(r)),this._blurMaterial=dT(r,e,t)}return s}_compileMaterial(e){const t=new ut(this._lodPlanes[0],e);this._renderer.compile(t,tu)}_sceneToCubeUV(e,t,n,s){const a=new Vt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(rm),h.toneMapping=Hi,h.autoClear=!1;const f=new On({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1}),m=new ut(new Ar,f);let g=!1;const A=e.background;A?A.isColor&&(f.color.copy(A),e.background=null,g=!0):(f.color.copy(rm),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;Tl(s,x*_,p>2?_:0,_,_),h.setRenderTarget(s),g&&h.render(m,a),h.render(e,a)}m.geometry.dispose(),m.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=A}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===rr||e.mapping===_o;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cm());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new ut(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Tl(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,tu)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){const r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=om[(s-1)%om.length];this._blur(e,s-1,s,r,o)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new ut(this._lodPlanes[s],c),d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*js-1),g=r/m,A=isFinite(r)?1+Math.floor(h*g):js;A>js&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${js}`);const p=[];let x=0;for(let w=0;w<js;++w){const B=w/g,y=Math.exp(-B*B/2);p.push(y),w===0?x+=y:w<A&&(x+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;d.envMap.value=e.texture,d.samples.value=A,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=m,d.mipInt.value=_-n;const C=this._sizeLods[s],M=3*C*(s>_-to?s-_+to:0),I=4*(this._cubeSize-C);Tl(t,M,I,3*C,2*C),l.setRenderTarget(t),l.render(u,tu)}}function uT(i){const e=[],t=[],n=[];let s=i;const r=i-to+1+sm.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-to?l=sm[o-i+to-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,g=3,A=2,p=1,x=new Float32Array(g*m*f),_=new Float32Array(A*m*f),C=new Float32Array(p*m*f);for(let I=0;I<f;I++){const w=I%3*2/3-1,B=I>2?0:-1,y=[w,B,0,w+2/3,B,0,w+2/3,B+1,0,w,B,0,w+2/3,B+1,0,w,B+1,0];x.set(y,g*m*I),_.set(d,A*m*I);const v=[I,I,I,I,I,I];C.set(v,p*m*I)}const M=new Bn;M.setAttribute("position",new Ct(x,g)),M.setAttribute("uv",new Ct(_,A)),M.setAttribute("faceIndex",new Ct(C,p)),e.push(M),s>to&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lm(i,e,t){const n=new Qn(i,e,t);return n.texture.mapping=dh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Tl(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function dT(i,e,t){const n=new Float32Array(js),s=new L(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:uA(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function cm(){return new yn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:uA(),fragmentShader:`

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
		`,blending:pi,depthTest:!1,depthWrite:!1})}function hm(){return new yn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:uA(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pi,depthTest:!1,depthWrite:!1})}function uA(){return`

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
	`}function fT(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Qc||l===Zd,h=l===rr||l===_o;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new am(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&s(f)?(t===null&&(t=new am(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function AT(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function pT(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const g=d.morphAttributes[m];for(let A=0,p=g.length;A<p;A++)e.remove(g[A])}d.removeEventListener("dispose",o),delete s[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const m in d)e.update(d[m],i.ARRAY_BUFFER);const f=u.morphAttributes;for(const m in f){const g=f[m];for(let A=0,p=g.length;A<p;A++)e.update(g[A],i.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,m=u.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let _=0,C=x.length;_<C;_+=3){const M=x[_+0],I=x[_+1],w=x[_+2];d.push(M,I,I,w,w,M)}}else if(m!==void 0){const x=m.array;g=m.version;for(let _=0,C=x.length/3-1;_<C;_+=3){const M=_+0,I=_+1,w=_+2;d.push(M,I,I,w,w,M)}}else return;const A=new(JE(d)?sv:iv)(d,1);A.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,A)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function mT(i,e,t){let n;function s(u){n=u}let r,o;function a(u){r=u.type,o=u.bytesPerElement}function l(u,d){i.drawElements(n,d,r,u*o),t.update(d,n,1)}function c(u,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,u*o,f),t.update(d,n,f))}function h(u,d,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<f;g++)this.render(u[g]/o,d[g]);else{m.multiDrawElementsWEBGL(n,d,0,r,u,0,f);let g=0;for(let A=0;A<f;A++)g+=d[A];t.update(g,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gT(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _T(i,e,t){const n=new WeakMap,s=new ht;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let v=function(){B.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var f=v;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,A=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],x=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let C=0;m===!0&&(C=1),g===!0&&(C=2),A===!0&&(C=3);let M=a.attributes.position.count*C,I=1;M>e.maxTextureSize&&(I=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const w=new Float32Array(M*I*4*u),B=new ev(w,M,I,u);B.type=Ft,B.needsUpdate=!0;const y=C*4;for(let U=0;U<u;U++){const V=p[U],D=x[U],G=_[U],H=M*I*4*U;for(let X=0;X<V.count;X++){const q=X*y;m===!0&&(s.fromBufferAttribute(V,X),w[H+q+0]=s.x,w[H+q+1]=s.y,w[H+q+2]=s.z,w[H+q+3]=0),g===!0&&(s.fromBufferAttribute(D,X),w[H+q+4]=s.x,w[H+q+5]=s.y,w[H+q+6]=s.z,w[H+q+7]=0),A===!0&&(s.fromBufferAttribute(G,X),w[H+q+8]=s.x,w[H+q+9]=s.y,w[H+q+10]=s.z,w[H+q+11]=G.itemSize===4?s.w:1)}}d={count:u,texture:B,size:new Re(M,I)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let m=0;for(let A=0;A<c.length;A++)m+=c[A];const g=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function ET(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class cv extends _t{constructor(e,t,n,s,r,o,a,l,c,h){if(h=h!==void 0?h:ho,h!==ho&&h!==Fa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===ho&&(n=ar),n===void 0&&h===Fa&&(n=qa),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const hv=new _t,uv=new cv(1,1);uv.compareFunction=jE;const dv=new ev,fv=new tv,Av=new av,um=[],dm=[],fm=new Float32Array(16),Am=new Float32Array(9),pm=new Float32Array(4);function Bo(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=um[s];if(r===void 0&&(r=new Float32Array(s),um[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Nt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Ot(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ah(i,e){let t=dm[e];t===void 0&&(t=new Int32Array(e),dm[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function vT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function yT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2fv(this.addr,e),Ot(t,e)}}function xT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Nt(t,e))return;i.uniform3fv(this.addr,e),Ot(t,e)}}function ST(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4fv(this.addr,e),Ot(t,e)}}function IT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;pm.set(n),i.uniformMatrix2fv(this.addr,!1,pm),Ot(t,n)}}function CT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;Am.set(n),i.uniformMatrix3fv(this.addr,!1,Am),Ot(t,n)}}function MT(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Nt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ot(t,e)}else{if(Nt(t,n))return;fm.set(n),i.uniformMatrix4fv(this.addr,!1,fm),Ot(t,n)}}function wT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function bT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2iv(this.addr,e),Ot(t,e)}}function TT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3iv(this.addr,e),Ot(t,e)}}function BT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4iv(this.addr,e),Ot(t,e)}}function RT(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function DT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Nt(t,e))return;i.uniform2uiv(this.addr,e),Ot(t,e)}}function LT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Nt(t,e))return;i.uniform3uiv(this.addr,e),Ot(t,e)}}function PT(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Nt(t,e))return;i.uniform4uiv(this.addr,e),Ot(t,e)}}function FT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?uv:hv;t.setTexture2D(e||r,s)}function UT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||fv,s)}function NT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Av,s)}function OT(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||dv,s)}function QT(i){switch(i){case 5126:return vT;case 35664:return yT;case 35665:return xT;case 35666:return ST;case 35674:return IT;case 35675:return CT;case 35676:return MT;case 5124:case 35670:return wT;case 35667:case 35671:return bT;case 35668:case 35672:return TT;case 35669:case 35673:return BT;case 5125:return RT;case 36294:return DT;case 36295:return LT;case 36296:return PT;case 35678:case 36198:case 36298:case 36306:case 35682:return FT;case 35679:case 36299:case 36307:return UT;case 35680:case 36300:case 36308:case 36293:return NT;case 36289:case 36303:case 36311:case 36292:return OT}}function kT(i,e){i.uniform1fv(this.addr,e)}function GT(i,e){const t=Bo(e,this.size,2);i.uniform2fv(this.addr,t)}function HT(i,e){const t=Bo(e,this.size,3);i.uniform3fv(this.addr,t)}function VT(i,e){const t=Bo(e,this.size,4);i.uniform4fv(this.addr,t)}function zT(i,e){const t=Bo(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function WT(i,e){const t=Bo(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qT(i,e){const t=Bo(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function $T(i,e){i.uniform1iv(this.addr,e)}function XT(i,e){i.uniform2iv(this.addr,e)}function YT(i,e){i.uniform3iv(this.addr,e)}function KT(i,e){i.uniform4iv(this.addr,e)}function jT(i,e){i.uniform1uiv(this.addr,e)}function JT(i,e){i.uniform2uiv(this.addr,e)}function ZT(i,e){i.uniform3uiv(this.addr,e)}function eB(i,e){i.uniform4uiv(this.addr,e)}function tB(i,e,t){const n=this.cache,s=e.length,r=Ah(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||hv,r[o])}function nB(i,e,t){const n=this.cache,s=e.length,r=Ah(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||fv,r[o])}function iB(i,e,t){const n=this.cache,s=e.length,r=Ah(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Av,r[o])}function sB(i,e,t){const n=this.cache,s=e.length,r=Ah(t,s);Nt(n,r)||(i.uniform1iv(this.addr,r),Ot(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||dv,r[o])}function rB(i){switch(i){case 5126:return kT;case 35664:return GT;case 35665:return HT;case 35666:return VT;case 35674:return zT;case 35675:return WT;case 35676:return qT;case 5124:case 35670:return $T;case 35667:case 35671:return XT;case 35668:case 35672:return YT;case 35669:case 35673:return KT;case 5125:return jT;case 36294:return JT;case 36295:return ZT;case 36296:return eB;case 35678:case 36198:case 36298:case 36306:case 35682:return tB;case 35679:case 36299:case 36307:return nB;case 35680:case 36300:case 36308:case 36293:return iB;case 36289:case 36303:case 36311:case 36292:return sB}}class oB{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=QT(t.type)}}class aB{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rB(t.type)}}class lB{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const ou=/(\w+)(\])?(\[|\.)?/g;function mm(i,e){i.seq.push(e),i.map[e.id]=e}function cB(i,e,t){const n=i.name,s=n.length;for(ou.lastIndex=0;;){const r=ou.exec(n),o=ou.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){mm(t,c===void 0?new oB(a,i,e):new aB(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new lB(a),mm(t,u)),t=u}}}class yc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);cB(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function gm(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const hB=37297;let uB=0;function dB(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function fB(i){const e=st.getPrimaries(st.workingColorSpace),t=st.getPrimaries(i);let n;switch(e===t?n="":e===zc&&t===Vc?n="LinearDisplayP3ToLinearSRGB":e===Vc&&t===zc&&(n="LinearSRGBToLinearDisplayP3"),i){case ct:case $a:return[n,"LinearTransferOETF"];case St:case fh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function _m(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+dB(i.getShaderSource(e),o)}else return s}function AB(i,e){const t=fB(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function pB(i,e){let t;switch(e){case fC:t="Linear";break;case AC:t="Reinhard";break;case pC:t="OptimizedCineon";break;case uh:t="ACESFilmic";break;case QE:t="AgX";break;case eA:t="Neutral";break;case mC:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function mB(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ha).join(`
`)}function gB(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function _B(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ha(i){return i!==""}function Em(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function vm(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const EB=/^[ \t]*#include +<([\w\d./]+)>/gm;function cf(i){return i.replace(EB,yB)}const vB=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function yB(i,e){let t=qe[e];if(t===void 0){const n=vB.get(e);if(n!==void 0)t=qe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cf(t)}const xB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ym(i){return i.replace(xB,SB)}function SB(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function xm(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function IB(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===NE?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===QI?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function CB(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case rr:case _o:e="ENVMAP_TYPE_CUBE";break;case dh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function MB(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case _o:e="ENVMAP_MODE_REFRACTION";break}return e}function wB(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case OE:e="ENVMAP_BLENDING_MULTIPLY";break;case uC:e="ENVMAP_BLENDING_MIX";break;case dC:e="ENVMAP_BLENDING_ADD";break}return e}function bB(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function TB(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=IB(t),c=CB(t),h=MB(t),u=wB(t),d=bB(t),f=mB(t),m=gB(r),g=s.createProgram();let A,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ha).join(`
`),A.length>0&&(A+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(ha).join(`
`),p.length>0&&(p+=`
`)):(A=[xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ha).join(`
`),p=[xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?qe.tonemapping_pars_fragment:"",t.toneMapping!==Hi?pB("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,AB("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ha).join(`
`)),o=cf(o),o=Em(o,t),o=vm(o,t),a=cf(a),a=Em(a,t),a=vm(a,t),o=ym(o),a=ym(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,A=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,p=["#define varying in",t.glslVersion===Np?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Np?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=x+A+o,C=x+p+a,M=gm(s,s.VERTEX_SHADER,_),I=gm(s,s.FRAGMENT_SHADER,C);s.attachShader(g,M),s.attachShader(g,I),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function w(U){if(i.debug.checkShaderErrors){const V=s.getProgramInfoLog(g).trim(),D=s.getShaderInfoLog(M).trim(),G=s.getShaderInfoLog(I).trim();let H=!0,X=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,M,I);else{const q=_m(s,M,"vertex"),Q=_m(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+V+`
`+q+`
`+Q)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(D===""||G==="")&&(X=!1);X&&(U.diagnostics={runnable:H,programLog:V,vertexShader:{log:D,prefix:A},fragmentShader:{log:G,prefix:p}})}s.deleteShader(M),s.deleteShader(I),B=new yc(s,g),y=_B(s,g)}let B;this.getUniforms=function(){return B===void 0&&w(this),B};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(g,hB)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=uB++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=I,this}let BB=0;class RB{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new DB(e),t.set(e,n)),n}}class DB{constructor(e){this.id=BB++,this.code=e,this.usedTimes=0}}function LB(i,e,t,n,s,r,o){const a=new lA,l=new RB,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.vertexTextures;let f=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(y){return c.add(y),y===0?"uv":`uv${y}`}function A(y,v,U,V,D){const G=V.fog,H=D.geometry,X=y.isMeshStandardMaterial?V.environment:null,q=(y.isMeshStandardMaterial?t:e).get(y.envMap||X),Q=q&&q.mapping===dh?q.image.height:null,te=m[y.type];y.precision!==null&&(f=s.getMaxPrecision(y.precision),f!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",f,"instead."));const ne=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,ae=ne!==void 0?ne.length:0;let ge=0;H.morphAttributes.position!==void 0&&(ge=1),H.morphAttributes.normal!==void 0&&(ge=2),H.morphAttributes.color!==void 0&&(ge=3);let Me,Z,oe,de;if(te){const jt=ci[te];Me=jt.vertexShader,Z=jt.fragmentShader}else Me=y.vertexShader,Z=y.fragmentShader,l.update(y),oe=l.getVertexShaderID(y),de=l.getFragmentShaderID(y);const fe=i.getRenderTarget(),be=D.isInstancedMesh===!0,Fe=D.isBatchedMesh===!0,Ne=!!y.map,$=!!y.matcap,Oe=!!q,T=!!y.aoMap,P=!!y.lightMap,z=!!y.bumpMap,ee=!!y.normalMap,S=!!y.displacementMap,E=!!y.emissiveMap,F=!!y.metalnessMap,N=!!y.roughnessMap,k=y.anisotropy>0,O=y.clearcoat>0,ie=y.iridescence>0,K=y.sheen>0,re=y.transmission>0,le=k&&!!y.anisotropyMap,se=O&&!!y.clearcoatMap,ce=O&&!!y.clearcoatNormalMap,ve=O&&!!y.clearcoatRoughnessMap,Ae=ie&&!!y.iridescenceMap,Ee=ie&&!!y.iridescenceThicknessMap,ke=K&&!!y.sheenColorMap,Ke=K&&!!y.sheenRoughnessMap,Je=!!y.specularMap,et=!!y.specularColorMap,Xe=!!y.specularIntensityMap,ye=re&&!!y.transmissionMap,R=re&&!!y.thicknessMap,pe=!!y.gradientMap,ue=!!y.alphaMap,Ie=y.alphaTest>0,Ce=!!y.alphaHash,dt=!!y.extensions;let Et=Hi;y.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(Et=i.toneMapping);const Mt={shaderID:te,shaderType:y.type,shaderName:y.name,vertexShader:Me,fragmentShader:Z,defines:y.defines,customVertexShaderID:oe,customFragmentShaderID:de,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:f,batching:Fe,instancing:be,instancingColor:be&&D.instanceColor!==null,instancingMorph:be&&D.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:ct,alphaToCoverage:!!y.alphaToCoverage,map:Ne,matcap:$,envMap:Oe,envMapMode:Oe&&q.mapping,envMapCubeUVHeight:Q,aoMap:T,lightMap:P,bumpMap:z,normalMap:ee,displacementMap:d&&S,emissiveMap:E,normalMapObjectSpace:ee&&y.normalMapType===bC,normalMapTangentSpace:ee&&y.normalMapType===KE,metalnessMap:F,roughnessMap:N,anisotropy:k,anisotropyMap:le,clearcoat:O,clearcoatMap:se,clearcoatNormalMap:ce,clearcoatRoughnessMap:ve,iridescence:ie,iridescenceMap:Ae,iridescenceThicknessMap:Ee,sheen:K,sheenColorMap:ke,sheenRoughnessMap:Ke,specularMap:Je,specularColorMap:et,specularIntensityMap:Xe,transmission:re,transmissionMap:ye,thicknessMap:R,gradientMap:pe,opaque:y.transparent===!1&&y.blending===co&&y.alphaToCoverage===!1,alphaMap:ue,alphaTest:Ie,alphaHash:Ce,combine:y.combine,mapUv:Ne&&g(y.map.channel),aoMapUv:T&&g(y.aoMap.channel),lightMapUv:P&&g(y.lightMap.channel),bumpMapUv:z&&g(y.bumpMap.channel),normalMapUv:ee&&g(y.normalMap.channel),displacementMapUv:S&&g(y.displacementMap.channel),emissiveMapUv:E&&g(y.emissiveMap.channel),metalnessMapUv:F&&g(y.metalnessMap.channel),roughnessMapUv:N&&g(y.roughnessMap.channel),anisotropyMapUv:le&&g(y.anisotropyMap.channel),clearcoatMapUv:se&&g(y.clearcoatMap.channel),clearcoatNormalMapUv:ce&&g(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&g(y.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&g(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ee&&g(y.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&g(y.sheenColorMap.channel),sheenRoughnessMapUv:Ke&&g(y.sheenRoughnessMap.channel),specularMapUv:Je&&g(y.specularMap.channel),specularColorMapUv:et&&g(y.specularColorMap.channel),specularIntensityMapUv:Xe&&g(y.specularIntensityMap.channel),transmissionMapUv:ye&&g(y.transmissionMap.channel),thicknessMapUv:R&&g(y.thicknessMap.channel),alphaMapUv:ue&&g(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(ee||k),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!H.attributes.uv&&(Ne||ue),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:D.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ge,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Et,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Ne&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===mt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===rn,flipSided:y.side===Yt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:dt&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:dt&&y.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Mt.vertexUv1s=c.has(1),Mt.vertexUv2s=c.has(2),Mt.vertexUv3s=c.has(3),c.clear(),Mt}function p(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const U in y.defines)v.push(U),v.push(y.defines[U]);return y.isRawShaderMaterial===!1&&(x(v,y),_(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function x(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function _(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.skinning&&a.enable(4),v.morphTargets&&a.enable(5),v.morphNormals&&a.enable(6),v.morphColors&&a.enable(7),v.premultipliedAlpha&&a.enable(8),v.shadowMapEnabled&&a.enable(9),v.useLegacyLights&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.alphaToCoverage&&a.enable(20),y.push(a.mask)}function C(y){const v=m[y.type];let U;if(v){const V=ci[v];U=_M.clone(V.uniforms)}else U=y.uniforms;return U}function M(y,v){let U;for(let V=0,D=h.length;V<D;V++){const G=h[V];if(G.cacheKey===v){U=G,++U.usedTimes;break}}return U===void 0&&(U=new TB(i,v,y,r),h.push(U)),U}function I(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function w(y){l.remove(y)}function B(){l.dispose()}return{getParameters:A,getProgramCacheKey:p,getUniforms:C,acquireProgram:M,releaseProgram:I,releaseShaderCache:w,programs:h,dispose:B}}function PB(){let i=new WeakMap;function e(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function t(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:s}}function FB(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Sm(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Im(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,f,m,g,A){let p=i[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:A},i[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=A),e++,p}function a(u,d,f,m,g,A){const p=o(u,d,f,m,g,A);f.transmission>0?n.push(p):f.transparent===!0?s.push(p):t.push(p)}function l(u,d,f,m,g,A){const p=o(u,d,f,m,g,A);f.transmission>0?n.unshift(p):f.transparent===!0?s.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||FB),n.length>1&&n.sort(d||Sm),s.length>1&&s.sort(d||Sm)}function h(){for(let u=e,d=i.length;u<d;u++){const f=i[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function UB(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Im,i.set(n,[o])):s>=r.length?(o=new Im,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function NB(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new De};break;case"SpotLight":t={position:new L,direction:new L,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new L,halfWidth:new L,halfHeight:new L};break}return i[e.id]=t,t}}}function OB(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let QB=0;function kB(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function GB(i){const e=new NB,t=OB(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new Le,o=new Le;function a(c,h){let u=0,d=0,f=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let m=0,g=0,A=0,p=0,x=0,_=0,C=0,M=0,I=0,w=0,B=0;c.sort(kB);const y=h===!0?Math.PI:1;for(let U=0,V=c.length;U<V;U++){const D=c[U],G=D.color,H=D.intensity,X=D.distance,q=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=G.r*H*y,d+=G.g*H*y,f+=G.b*H*y;else if(D.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(D.sh.coefficients[Q],H);B++}else if(D.isDirectionalLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*y),D.castShadow){const te=D.shadow,ne=t.get(D);ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.directionalShadow[m]=ne,n.directionalShadowMap[m]=q,n.directionalShadowMatrix[m]=D.shadow.matrix,_++}n.directional[m]=Q,m++}else if(D.isSpotLight){const Q=e.get(D);Q.position.setFromMatrixPosition(D.matrixWorld),Q.color.copy(G).multiplyScalar(H*y),Q.distance=X,Q.coneCos=Math.cos(D.angle),Q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Q.decay=D.decay,n.spot[A]=Q;const te=D.shadow;if(D.map&&(n.spotLightMap[I]=D.map,I++,te.updateMatrices(D),D.castShadow&&w++),n.spotLightMatrix[A]=te.matrix,D.castShadow){const ne=t.get(D);ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,n.spotShadow[A]=ne,n.spotShadowMap[A]=q,M++}A++}else if(D.isRectAreaLight){const Q=e.get(D);Q.color.copy(G).multiplyScalar(H),Q.halfWidth.set(D.width*.5,0,0),Q.halfHeight.set(0,D.height*.5,0),n.rectArea[p]=Q,p++}else if(D.isPointLight){const Q=e.get(D);if(Q.color.copy(D.color).multiplyScalar(D.intensity*y),Q.distance=D.distance,Q.decay=D.decay,D.castShadow){const te=D.shadow,ne=t.get(D);ne.shadowBias=te.bias,ne.shadowNormalBias=te.normalBias,ne.shadowRadius=te.radius,ne.shadowMapSize=te.mapSize,ne.shadowCameraNear=te.camera.near,ne.shadowCameraFar=te.camera.far,n.pointShadow[g]=ne,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=D.shadow.matrix,C++}n.point[g]=Q,g++}else if(D.isHemisphereLight){const Q=e.get(D);Q.skyColor.copy(D.color).multiplyScalar(H*y),Q.groundColor.copy(D.groundColor).multiplyScalar(H*y),n.hemi[x]=Q,x++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=f;const v=n.hash;(v.directionalLength!==m||v.pointLength!==g||v.spotLength!==A||v.rectAreaLength!==p||v.hemiLength!==x||v.numDirectionalShadows!==_||v.numPointShadows!==C||v.numSpotShadows!==M||v.numSpotMaps!==I||v.numLightProbes!==B)&&(n.directional.length=m,n.spot.length=A,n.rectArea.length=p,n.point.length=g,n.hemi.length=x,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=C,n.pointShadowMap.length=C,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=C,n.spotLightMatrix.length=M+I-w,n.spotLightMap.length=I,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=B,v.directionalLength=m,v.pointLength=g,v.spotLength=A,v.rectAreaLength=p,v.hemiLength=x,v.numDirectionalShadows=_,v.numPointShadows=C,v.numSpotShadows=M,v.numSpotMaps=I,v.numLightProbes=B,n.version=QB++)}function l(c,h){let u=0,d=0,f=0,m=0,g=0;const A=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const _=c[p];if(_.isDirectionalLight){const C=n.directional[u];C.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(A),u++}else if(_.isSpotLight){const C=n.spot[f];C.position.setFromMatrixPosition(_.matrixWorld),C.position.applyMatrix4(A),C.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),C.direction.sub(s),C.direction.transformDirection(A),f++}else if(_.isRectAreaLight){const C=n.rectArea[m];C.position.setFromMatrixPosition(_.matrixWorld),C.position.applyMatrix4(A),o.identity(),r.copy(_.matrixWorld),r.premultiply(A),o.extractRotation(r),C.halfWidth.set(_.width*.5,0,0),C.halfHeight.set(0,_.height*.5,0),C.halfWidth.applyMatrix4(o),C.halfHeight.applyMatrix4(o),m++}else if(_.isPointLight){const C=n.point[d];C.position.setFromMatrixPosition(_.matrixWorld),C.position.applyMatrix4(A),d++}else if(_.isHemisphereLight){const C=n.hemi[g];C.direction.setFromMatrixPosition(_.matrixWorld),C.direction.transformDirection(A),g++}}}return{setup:a,setupView:l,state:n}}function Cm(i){const e=new GB(i),t=[],n=[];function s(){t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(h){e.setup(t,h)}function l(h){e.setupView(t,h)}return{init:s,state:{lightsArray:t,shadowsArray:n,lights:e,transmissionRenderTarget:null},setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function HB(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Cm(i),e.set(s,[a])):r>=o.length?(a=new Cm(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class pv extends Zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=MC,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class VB extends Zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const zB=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,WB=`uniform sampler2D shadow_pass;
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
}`;function qB(i,e,t){let n=new hA;const s=new Re,r=new Re,o=new ht,a=new pv({depthPacking:wC}),l=new VB,c={},h=t.maxTextureSize,u={[ei]:Yt,[Yt]:ei,[rn]:rn},d=new yn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:zB,fragmentShader:WB}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Bn;m.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new ut(m,d),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=NE;let p=this.type;this.render=function(I,w,B){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||I.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),V=i.state;V.setBlending(pi),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const D=p!==Fi&&this.type===Fi,G=p===Fi&&this.type!==Fi;for(let H=0,X=I.length;H<X;H++){const q=I[H],Q=q.shadow;if(Q===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(Q.autoUpdate===!1&&Q.needsUpdate===!1)continue;s.copy(Q.mapSize);const te=Q.getFrameExtents();if(s.multiply(te),r.copy(Q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,Q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,Q.mapSize.y=r.y)),Q.map===null||D===!0||G===!0){const ae=this.type!==Fi?{minFilter:Pt,magFilter:Pt}:{};Q.map!==null&&Q.map.dispose(),Q.map=new Qn(s.x,s.y,ae),Q.map.texture.name=q.name+".shadowMap",Q.camera.updateProjectionMatrix()}i.setRenderTarget(Q.map),i.clear();const ne=Q.getViewportCount();for(let ae=0;ae<ne;ae++){const ge=Q.getViewport(ae);o.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),V.viewport(o),Q.updateMatrices(q,ae),n=Q.getFrustum(),C(w,B,Q.camera,q,this.type)}Q.isPointLightShadow!==!0&&this.type===Fi&&x(Q,B),Q.needsUpdate=!1}p=this.type,A.needsUpdate=!1,i.setRenderTarget(y,v,U)};function x(I,w){const B=e.update(g);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,f.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new Qn(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(w,null,B,d,g,null),f.uniforms.shadow_pass.value=I.mapPass.texture,f.uniforms.resolution.value=I.mapSize,f.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(w,null,B,f,g,null)}function _(I,w,B,y){let v=null;const U=B.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(U!==void 0)v=U;else if(v=B.isPointLight===!0?l:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const V=v.uuid,D=w.uuid;let G=c[V];G===void 0&&(G={},c[V]=G);let H=G[D];H===void 0&&(H=v.clone(),G[D]=H,w.addEventListener("dispose",M)),v=H}if(v.visible=w.visible,v.wireframe=w.wireframe,y===Fi?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:u[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,B.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const V=i.properties.get(v);V.light=B}return v}function C(I,w,B,y,v){if(I.visible===!1)return;if(I.layers.test(w.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&v===Fi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,I.matrixWorld);const D=e.update(I),G=I.material;if(Array.isArray(G)){const H=D.groups;for(let X=0,q=H.length;X<q;X++){const Q=H[X],te=G[Q.materialIndex];if(te&&te.visible){const ne=_(I,te,y,v);I.onBeforeShadow(i,I,w,B,D,ne,Q),i.renderBufferDirect(B,null,D,ne,I,Q),I.onAfterShadow(i,I,w,B,D,ne,Q)}}}else if(G.visible){const H=_(I,G,y,v);I.onBeforeShadow(i,I,w,B,D,H,null),i.renderBufferDirect(B,null,D,H,I,null),I.onAfterShadow(i,I,w,B,D,H,null)}}const V=I.children;for(let D=0,G=V.length;D<G;D++)C(V[D],w,B,y,v)}function M(I){I.target.removeEventListener("dispose",M);for(const B in c){const y=c[B],v=I.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}function $B(i){function e(){let R=!1;const pe=new ht;let ue=null;const Ie=new ht(0,0,0,0);return{setMask:function(Ce){ue!==Ce&&!R&&(i.colorMask(Ce,Ce,Ce,Ce),ue=Ce)},setLocked:function(Ce){R=Ce},setClear:function(Ce,dt,Et,Mt,jt){jt===!0&&(Ce*=Mt,dt*=Mt,Et*=Mt),pe.set(Ce,dt,Et,Mt),Ie.equals(pe)===!1&&(i.clearColor(Ce,dt,Et,Mt),Ie.copy(pe))},reset:function(){R=!1,ue=null,Ie.set(-1,0,0,0)}}}function t(){let R=!1,pe=null,ue=null,Ie=null;return{setTest:function(Ce){Ce?de(i.DEPTH_TEST):fe(i.DEPTH_TEST)},setMask:function(Ce){pe!==Ce&&!R&&(i.depthMask(Ce),pe=Ce)},setFunc:function(Ce){if(ue!==Ce){switch(Ce){case sC:i.depthFunc(i.NEVER);break;case rC:i.depthFunc(i.ALWAYS);break;case oC:i.depthFunc(i.LESS);break;case Oc:i.depthFunc(i.LEQUAL);break;case aC:i.depthFunc(i.EQUAL);break;case lC:i.depthFunc(i.GEQUAL);break;case cC:i.depthFunc(i.GREATER);break;case hC:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=Ce}},setLocked:function(Ce){R=Ce},setClear:function(Ce){Ie!==Ce&&(i.clearDepth(Ce),Ie=Ce)},reset:function(){R=!1,pe=null,ue=null,Ie=null}}}function n(){let R=!1,pe=null,ue=null,Ie=null,Ce=null,dt=null,Et=null,Mt=null,jt=null;return{setTest:function(At){R||(At?de(i.STENCIL_TEST):fe(i.STENCIL_TEST))},setMask:function(At){pe!==At&&!R&&(i.stencilMask(At),pe=At)},setFunc:function(At,ii,si){(ue!==At||Ie!==ii||Ce!==si)&&(i.stencilFunc(At,ii,si),ue=At,Ie=ii,Ce=si)},setOp:function(At,ii,si){(dt!==At||Et!==ii||Mt!==si)&&(i.stencilOp(At,ii,si),dt=At,Et=ii,Mt=si)},setLocked:function(At){R=At},setClear:function(At){jt!==At&&(i.clearStencil(At),jt=At)},reset:function(){R=!1,pe=null,ue=null,Ie=null,Ce=null,dt=null,Et=null,Mt=null,jt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],f=null,m=!1,g=null,A=null,p=null,x=null,_=null,C=null,M=null,I=new De(0,0,0),w=0,B=!1,y=null,v=null,U=null,V=null,D=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,X=0;const q=i.getParameter(i.VERSION);q.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(q)[1]),H=X>=1):q.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),H=X>=2);let Q=null,te={};const ne=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),ge=new ht().fromArray(ne),Me=new ht().fromArray(ae);function Z(R,pe,ue,Ie){const Ce=new Uint8Array(4),dt=i.createTexture();i.bindTexture(R,dt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Et=0;Et<ue;Et++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(pe,0,i.RGBA,1,1,Ie,0,i.RGBA,i.UNSIGNED_BYTE,Ce):i.texImage2D(pe+Et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ce);return dt}const oe={};oe[i.TEXTURE_2D]=Z(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Z(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Z(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Z(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),de(i.DEPTH_TEST),r.setFunc(Oc),z(!1),ee(up),de(i.CULL_FACE),T(pi);function de(R){c[R]!==!0&&(i.enable(R),c[R]=!0)}function fe(R){c[R]!==!1&&(i.disable(R),c[R]=!1)}function be(R,pe){return h[R]!==pe?(i.bindFramebuffer(R,pe),h[R]=pe,R===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=pe),R===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=pe),!0):!1}function Fe(R,pe){let ue=d,Ie=!1;if(R){ue=u.get(pe),ue===void 0&&(ue=[],u.set(pe,ue));const Ce=R.textures;if(ue.length!==Ce.length||ue[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Et=Ce.length;dt<Et;dt++)ue[dt]=i.COLOR_ATTACHMENT0+dt;ue.length=Ce.length,Ie=!0}}else ue[0]!==i.BACK&&(ue[0]=i.BACK,Ie=!0);Ie&&i.drawBuffers(ue)}function Ne(R){return f!==R?(i.useProgram(R),f=R,!0):!1}const $={[Ks]:i.FUNC_ADD,[GI]:i.FUNC_SUBTRACT,[HI]:i.FUNC_REVERSE_SUBTRACT};$[VI]=i.MIN,$[zI]=i.MAX;const Oe={[WI]:i.ZERO,[qI]:i.ONE,[$I]:i.SRC_COLOR,[jd]:i.SRC_ALPHA,[ZI]:i.SRC_ALPHA_SATURATE,[jI]:i.DST_COLOR,[YI]:i.DST_ALPHA,[XI]:i.ONE_MINUS_SRC_COLOR,[Jd]:i.ONE_MINUS_SRC_ALPHA,[JI]:i.ONE_MINUS_DST_COLOR,[KI]:i.ONE_MINUS_DST_ALPHA,[eC]:i.CONSTANT_COLOR,[tC]:i.ONE_MINUS_CONSTANT_COLOR,[nC]:i.CONSTANT_ALPHA,[iC]:i.ONE_MINUS_CONSTANT_ALPHA};function T(R,pe,ue,Ie,Ce,dt,Et,Mt,jt,At){if(R===pi){m===!0&&(fe(i.BLEND),m=!1);return}if(m===!1&&(de(i.BLEND),m=!0),R!==kI){if(R!==g||At!==B){if((A!==Ks||_!==Ks)&&(i.blendEquation(i.FUNC_ADD),A=Ks,_=Ks),At)switch(R){case co:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dp:i.blendFunc(i.ONE,i.ONE);break;case fp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ap:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case co:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case dp:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case fp:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ap:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}p=null,x=null,C=null,M=null,I.set(0,0,0),w=0,g=R,B=At}return}Ce=Ce||pe,dt=dt||ue,Et=Et||Ie,(pe!==A||Ce!==_)&&(i.blendEquationSeparate($[pe],$[Ce]),A=pe,_=Ce),(ue!==p||Ie!==x||dt!==C||Et!==M)&&(i.blendFuncSeparate(Oe[ue],Oe[Ie],Oe[dt],Oe[Et]),p=ue,x=Ie,C=dt,M=Et),(Mt.equals(I)===!1||jt!==w)&&(i.blendColor(Mt.r,Mt.g,Mt.b,jt),I.copy(Mt),w=jt),g=R,B=!1}function P(R,pe){R.side===rn?fe(i.CULL_FACE):de(i.CULL_FACE);let ue=R.side===Yt;pe&&(ue=!ue),z(ue),R.blending===co&&R.transparent===!1?T(pi):T(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),r.setFunc(R.depthFunc),r.setTest(R.depthTest),r.setMask(R.depthWrite),s.setMask(R.colorWrite);const Ie=R.stencilWrite;o.setTest(Ie),Ie&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),E(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?de(i.SAMPLE_ALPHA_TO_COVERAGE):fe(i.SAMPLE_ALPHA_TO_COVERAGE)}function z(R){y!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),y=R)}function ee(R){R!==NI?(de(i.CULL_FACE),R!==v&&(R===up?i.cullFace(i.BACK):R===OI?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):fe(i.CULL_FACE),v=R}function S(R){R!==U&&(H&&i.lineWidth(R),U=R)}function E(R,pe,ue){R?(de(i.POLYGON_OFFSET_FILL),(V!==pe||D!==ue)&&(i.polygonOffset(pe,ue),V=pe,D=ue)):fe(i.POLYGON_OFFSET_FILL)}function F(R){R?de(i.SCISSOR_TEST):fe(i.SCISSOR_TEST)}function N(R){R===void 0&&(R=i.TEXTURE0+G-1),Q!==R&&(i.activeTexture(R),Q=R)}function k(R,pe,ue){ue===void 0&&(Q===null?ue=i.TEXTURE0+G-1:ue=Q);let Ie=te[ue];Ie===void 0&&(Ie={type:void 0,texture:void 0},te[ue]=Ie),(Ie.type!==R||Ie.texture!==pe)&&(Q!==ue&&(i.activeTexture(ue),Q=ue),i.bindTexture(R,pe||oe[R]),Ie.type=R,Ie.texture=pe)}function O(){const R=te[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function ie(){try{i.compressedTexImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function le(){try{i.texSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ce(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ve(){try{i.texStorage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ae(){try{i.texStorage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ee(){try{i.texImage2D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ke(){try{i.texImage3D.apply(i,arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function Ke(R){ge.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),ge.copy(R))}function Je(R){Me.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Me.copy(R))}function et(R,pe){let ue=l.get(pe);ue===void 0&&(ue=new WeakMap,l.set(pe,ue));let Ie=ue.get(R);Ie===void 0&&(Ie=i.getUniformBlockIndex(pe,R.name),ue.set(R,Ie))}function Xe(R,pe){const Ie=l.get(pe).get(R);a.get(pe)!==Ie&&(i.uniformBlockBinding(pe,Ie,R.__bindingPointIndex),a.set(pe,Ie))}function ye(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Q=null,te={},h={},u=new WeakMap,d=[],f=null,m=!1,g=null,A=null,p=null,x=null,_=null,C=null,M=null,I=new De(0,0,0),w=0,B=!1,y=null,v=null,U=null,V=null,D=null,ge.set(0,0,i.canvas.width,i.canvas.height),Me.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:de,disable:fe,bindFramebuffer:be,drawBuffers:Fe,useProgram:Ne,setBlending:T,setMaterial:P,setFlipSided:z,setCullFace:ee,setLineWidth:S,setPolygonOffset:E,setScissorTest:F,activeTexture:N,bindTexture:k,unbindTexture:O,compressedTexImage2D:ie,compressedTexImage3D:K,texImage2D:Ee,texImage3D:ke,updateUBOMapping:et,uniformBlockBinding:Xe,texStorage2D:ve,texStorage3D:Ae,texSubImage2D:re,texSubImage3D:le,compressedTexSubImage2D:se,compressedTexSubImage3D:ce,scissor:Ke,viewport:Je,reset:ye}}function XB(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(S,E){return f?new OffscreenCanvas(S,E):Ua("canvas")}function g(S,E,F){let N=1;const k=ee(S);if((k.width>F||k.height>F)&&(N=F/Math.max(k.width,k.height)),N<1)if(typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&S instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&S instanceof ImageBitmap||typeof VideoFrame<"u"&&S instanceof VideoFrame){const O=Math.floor(N*k.width),ie=Math.floor(N*k.height);u===void 0&&(u=m(O,ie));const K=E?m(O,ie):u;return K.width=O,K.height=ie,K.getContext("2d").drawImage(S,0,0,O,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+k.width+"x"+k.height+") to ("+O+"x"+ie+")."),K}else return"data"in S&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+k.width+"x"+k.height+")."),S;return S}function A(S){return S.generateMipmaps&&S.minFilter!==Pt&&S.minFilter!==nt}function p(S){i.generateMipmap(S)}function x(S,E,F,N,k=!1){if(S!==null){if(i[S]!==void 0)return i[S];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+S+"'")}let O=E;if(E===i.RED&&(F===i.FLOAT&&(O=i.R32F),F===i.HALF_FLOAT&&(O=i.R16F),F===i.UNSIGNED_BYTE&&(O=i.R8)),E===i.RED_INTEGER&&(F===i.UNSIGNED_BYTE&&(O=i.R8UI),F===i.UNSIGNED_SHORT&&(O=i.R16UI),F===i.UNSIGNED_INT&&(O=i.R32UI),F===i.BYTE&&(O=i.R8I),F===i.SHORT&&(O=i.R16I),F===i.INT&&(O=i.R32I)),E===i.RG&&(F===i.FLOAT&&(O=i.RG32F),F===i.HALF_FLOAT&&(O=i.RG16F),F===i.UNSIGNED_BYTE&&(O=i.RG8)),E===i.RG_INTEGER&&(F===i.UNSIGNED_BYTE&&(O=i.RG8UI),F===i.UNSIGNED_SHORT&&(O=i.RG16UI),F===i.UNSIGNED_INT&&(O=i.RG32UI),F===i.BYTE&&(O=i.RG8I),F===i.SHORT&&(O=i.RG16I),F===i.INT&&(O=i.RG32I)),E===i.RGB&&F===i.UNSIGNED_INT_5_9_9_9_REV&&(O=i.RGB9_E5),E===i.RGBA){const ie=k?Hc:st.getTransfer(N);F===i.FLOAT&&(O=i.RGBA32F),F===i.HALF_FLOAT&&(O=i.RGBA16F),F===i.UNSIGNED_BYTE&&(O=ie===mt?i.SRGB8_ALPHA8:i.RGBA8),F===i.UNSIGNED_SHORT_4_4_4_4&&(O=i.RGBA4),F===i.UNSIGNED_SHORT_5_5_5_1&&(O=i.RGB5_A1)}return(O===i.R16F||O===i.R32F||O===i.RG16F||O===i.RG32F||O===i.RGBA16F||O===i.RGBA32F)&&e.get("EXT_color_buffer_float"),O}function _(S,E){return A(S)===!0||S.isFramebufferTexture&&S.minFilter!==Pt&&S.minFilter!==nt?Math.log2(Math.max(E.width,E.height))+1:S.mipmaps!==void 0&&S.mipmaps.length>0?S.mipmaps.length:S.isCompressedTexture&&Array.isArray(S.image)?E.mipmaps.length:1}function C(S){const E=S.target;E.removeEventListener("dispose",C),I(E),E.isVideoTexture&&h.delete(E)}function M(S){const E=S.target;E.removeEventListener("dispose",M),B(E)}function I(S){const E=n.get(S);if(E.__webglInit===void 0)return;const F=S.source,N=d.get(F);if(N){const k=N[E.__cacheKey];k.usedTimes--,k.usedTimes===0&&w(S),Object.keys(N).length===0&&d.delete(F)}n.remove(S)}function w(S){const E=n.get(S);i.deleteTexture(E.__webglTexture);const F=S.source,N=d.get(F);delete N[E.__cacheKey],o.memory.textures--}function B(S){const E=n.get(S);if(S.depthTexture&&S.depthTexture.dispose(),S.isWebGLCubeRenderTarget)for(let N=0;N<6;N++){if(Array.isArray(E.__webglFramebuffer[N]))for(let k=0;k<E.__webglFramebuffer[N].length;k++)i.deleteFramebuffer(E.__webglFramebuffer[N][k]);else i.deleteFramebuffer(E.__webglFramebuffer[N]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[N])}else{if(Array.isArray(E.__webglFramebuffer))for(let N=0;N<E.__webglFramebuffer.length;N++)i.deleteFramebuffer(E.__webglFramebuffer[N]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let N=0;N<E.__webglColorRenderbuffer.length;N++)E.__webglColorRenderbuffer[N]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[N]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const F=S.textures;for(let N=0,k=F.length;N<k;N++){const O=n.get(F[N]);O.__webglTexture&&(i.deleteTexture(O.__webglTexture),o.memory.textures--),n.remove(F[N])}n.remove(S)}let y=0;function v(){y=0}function U(){const S=y;return S>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+S+" texture units while this GPU supports only "+s.maxTextures),y+=1,S}function V(S){const E=[];return E.push(S.wrapS),E.push(S.wrapT),E.push(S.wrapR||0),E.push(S.magFilter),E.push(S.minFilter),E.push(S.anisotropy),E.push(S.internalFormat),E.push(S.format),E.push(S.type),E.push(S.generateMipmaps),E.push(S.premultiplyAlpha),E.push(S.flipY),E.push(S.unpackAlignment),E.push(S.colorSpace),E.join()}function D(S,E){const F=n.get(S);if(S.isVideoTexture&&P(S),S.isRenderTargetTexture===!1&&S.version>0&&F.__version!==S.version){const N=S.image;if(N===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(N.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ge(F,S,E);return}}t.bindTexture(i.TEXTURE_2D,F.__webglTexture,i.TEXTURE0+E)}function G(S,E){const F=n.get(S);if(S.version>0&&F.__version!==S.version){ge(F,S,E);return}t.bindTexture(i.TEXTURE_2D_ARRAY,F.__webglTexture,i.TEXTURE0+E)}function H(S,E){const F=n.get(S);if(S.version>0&&F.__version!==S.version){ge(F,S,E);return}t.bindTexture(i.TEXTURE_3D,F.__webglTexture,i.TEXTURE0+E)}function X(S,E){const F=n.get(S);if(S.version>0&&F.__version!==S.version){Me(F,S,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+E)}const q={[ti]:i.REPEAT,[Bt]:i.CLAMP_TO_EDGE,[or]:i.MIRRORED_REPEAT},Q={[Pt]:i.NEAREST,[Wa]:i.NEAREST_MIPMAP_NEAREST,[ds]:i.NEAREST_MIPMAP_LINEAR,[nt]:i.LINEAR,[ir]:i.LINEAR_MIPMAP_NEAREST,[_n]:i.LINEAR_MIPMAP_LINEAR},te={[TC]:i.NEVER,[FC]:i.ALWAYS,[BC]:i.LESS,[jE]:i.LEQUAL,[RC]:i.EQUAL,[PC]:i.GEQUAL,[DC]:i.GREATER,[LC]:i.NOTEQUAL};function ne(S,E){if(E.type===Ft&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===nt||E.magFilter===ir||E.magFilter===ds||E.magFilter===_n||E.minFilter===nt||E.minFilter===ir||E.minFilter===ds||E.minFilter===_n)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(S,i.TEXTURE_WRAP_S,q[E.wrapS]),i.texParameteri(S,i.TEXTURE_WRAP_T,q[E.wrapT]),(S===i.TEXTURE_3D||S===i.TEXTURE_2D_ARRAY)&&i.texParameteri(S,i.TEXTURE_WRAP_R,q[E.wrapR]),i.texParameteri(S,i.TEXTURE_MAG_FILTER,Q[E.magFilter]),i.texParameteri(S,i.TEXTURE_MIN_FILTER,Q[E.minFilter]),E.compareFunction&&(i.texParameteri(S,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(S,i.TEXTURE_COMPARE_FUNC,te[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Pt||E.minFilter!==ds&&E.minFilter!==_n||E.type===Ft&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");i.texParameterf(S,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function ae(S,E){let F=!1;S.__webglInit===void 0&&(S.__webglInit=!0,E.addEventListener("dispose",C));const N=E.source;let k=d.get(N);k===void 0&&(k={},d.set(N,k));const O=V(E);if(O!==S.__cacheKey){k[O]===void 0&&(k[O]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,F=!0),k[O].usedTimes++;const ie=k[S.__cacheKey];ie!==void 0&&(k[S.__cacheKey].usedTimes--,ie.usedTimes===0&&w(E)),S.__cacheKey=O,S.__webglTexture=k[O].texture}return F}function ge(S,E,F){let N=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(N=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(N=i.TEXTURE_3D);const k=ae(S,E),O=E.source;t.bindTexture(N,S.__webglTexture,i.TEXTURE0+F);const ie=n.get(O);if(O.version!==ie.__version||k===!0){t.activeTexture(i.TEXTURE0+F);const K=st.getPrimaries(st.workingColorSpace),re=E.colorSpace===Fn?null:st.getPrimaries(E.colorSpace),le=E.colorSpace===Fn||K===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);let se=g(E.image,!1,s.maxTextureSize);se=z(E,se);const ce=r.convert(E.format,E.colorSpace),ve=r.convert(E.type);let Ae=x(E.internalFormat,ce,ve,E.colorSpace,E.isVideoTexture);ne(N,E);let Ee;const ke=E.mipmaps,Ke=E.isVideoTexture!==!0&&Ae!==nA,Je=ie.__version===void 0||k===!0,et=O.dataReady,Xe=_(E,se);if(E.isDepthTexture)Ae=i.DEPTH_COMPONENT16,E.type===Ft?Ae=i.DEPTH_COMPONENT32F:E.type===ar?Ae=i.DEPTH_COMPONENT24:E.type===qa&&(Ae=i.DEPTH24_STENCIL8),Je&&(Ke?t.texStorage2D(i.TEXTURE_2D,1,Ae,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,Ae,se.width,se.height,0,ce,ve,null));else if(E.isDataTexture)if(ke.length>0){Ke&&Je&&t.texStorage2D(i.TEXTURE_2D,Xe,Ae,ke[0].width,ke[0].height);for(let ye=0,R=ke.length;ye<R;ye++)Ee=ke[ye],Ke?et&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ee.width,Ee.height,ce,ve,Ee.data):t.texImage2D(i.TEXTURE_2D,ye,Ae,Ee.width,Ee.height,0,ce,ve,Ee.data);E.generateMipmaps=!1}else Ke?(Je&&t.texStorage2D(i.TEXTURE_2D,Xe,Ae,se.width,se.height),et&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,se.width,se.height,ce,ve,se.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,se.width,se.height,0,ce,ve,se.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Ke&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,Ae,ke[0].width,ke[0].height,se.depth);for(let ye=0,R=ke.length;ye<R;ye++)Ee=ke[ye],E.format!==It?ce!==null?Ke?et&&t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Ee.width,Ee.height,se.depth,ce,Ee.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ye,Ae,Ee.width,Ee.height,se.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?et&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ye,0,0,0,Ee.width,Ee.height,se.depth,ce,ve,Ee.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ye,Ae,Ee.width,Ee.height,se.depth,0,ce,ve,Ee.data)}else{Ke&&Je&&t.texStorage2D(i.TEXTURE_2D,Xe,Ae,ke[0].width,ke[0].height);for(let ye=0,R=ke.length;ye<R;ye++)Ee=ke[ye],E.format!==It?ce!==null?Ke?et&&t.compressedTexSubImage2D(i.TEXTURE_2D,ye,0,0,Ee.width,Ee.height,ce,Ee.data):t.compressedTexImage2D(i.TEXTURE_2D,ye,Ae,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ke?et&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,Ee.width,Ee.height,ce,ve,Ee.data):t.texImage2D(i.TEXTURE_2D,ye,Ae,Ee.width,Ee.height,0,ce,ve,Ee.data)}else if(E.isDataArrayTexture)Ke?(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Xe,Ae,se.width,se.height,se.depth),et&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ce,ve,se.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,se.width,se.height,se.depth,0,ce,ve,se.data);else if(E.isData3DTexture)Ke?(Je&&t.texStorage3D(i.TEXTURE_3D,Xe,Ae,se.width,se.height,se.depth),et&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ce,ve,se.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,se.width,se.height,se.depth,0,ce,ve,se.data);else if(E.isFramebufferTexture){if(Je)if(Ke)t.texStorage2D(i.TEXTURE_2D,Xe,Ae,se.width,se.height);else{let ye=se.width,R=se.height;for(let pe=0;pe<Xe;pe++)t.texImage2D(i.TEXTURE_2D,pe,Ae,ye,R,0,ce,ve,null),ye>>=1,R>>=1}}else if(ke.length>0){if(Ke&&Je){const ye=ee(ke[0]);t.texStorage2D(i.TEXTURE_2D,Xe,Ae,ye.width,ye.height)}for(let ye=0,R=ke.length;ye<R;ye++)Ee=ke[ye],Ke?et&&t.texSubImage2D(i.TEXTURE_2D,ye,0,0,ce,ve,Ee):t.texImage2D(i.TEXTURE_2D,ye,Ae,ce,ve,Ee);E.generateMipmaps=!1}else if(Ke){if(Je){const ye=ee(se);t.texStorage2D(i.TEXTURE_2D,Xe,Ae,ye.width,ye.height)}et&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce,ve,se)}else t.texImage2D(i.TEXTURE_2D,0,Ae,ce,ve,se);A(E)&&p(N),ie.__version=O.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function Me(S,E,F){if(E.image.length!==6)return;const N=ae(S,E),k=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,S.__webglTexture,i.TEXTURE0+F);const O=n.get(k);if(k.version!==O.__version||N===!0){t.activeTexture(i.TEXTURE0+F);const ie=st.getPrimaries(st.workingColorSpace),K=E.colorSpace===Fn?null:st.getPrimaries(E.colorSpace),re=E.colorSpace===Fn||ie===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);const le=E.isCompressedTexture||E.image[0].isCompressedTexture,se=E.image[0]&&E.image[0].isDataTexture,ce=[];for(let R=0;R<6;R++)!le&&!se?ce[R]=g(E.image[R],!0,s.maxCubemapSize):ce[R]=se?E.image[R].image:E.image[R],ce[R]=z(E,ce[R]);const ve=ce[0],Ae=r.convert(E.format,E.colorSpace),Ee=r.convert(E.type),ke=x(E.internalFormat,Ae,Ee,E.colorSpace),Ke=E.isVideoTexture!==!0,Je=O.__version===void 0||N===!0,et=k.dataReady;let Xe=_(E,ve);ne(i.TEXTURE_CUBE_MAP,E);let ye;if(le){Ke&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,ke,ve.width,ve.height);for(let R=0;R<6;R++){ye=ce[R].mipmaps;for(let pe=0;pe<ye.length;pe++){const ue=ye[pe];E.format!==It?Ae!==null?Ke?et&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,pe,0,0,ue.width,ue.height,Ae,ue.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,pe,ke,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,pe,0,0,ue.width,ue.height,Ae,Ee,ue.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,pe,ke,ue.width,ue.height,0,Ae,Ee,ue.data)}}}else{if(ye=E.mipmaps,Ke&&Je){ye.length>0&&Xe++;const R=ee(ce[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Xe,ke,R.width,R.height)}for(let R=0;R<6;R++)if(se){Ke?et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,ce[R].width,ce[R].height,Ae,Ee,ce[R].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,ke,ce[R].width,ce[R].height,0,Ae,Ee,ce[R].data);for(let pe=0;pe<ye.length;pe++){const Ie=ye[pe].image[R].image;Ke?et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,pe+1,0,0,Ie.width,Ie.height,Ae,Ee,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,pe+1,ke,Ie.width,Ie.height,0,Ae,Ee,Ie.data)}}else{Ke?et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,0,0,Ae,Ee,ce[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0,ke,Ae,Ee,ce[R]);for(let pe=0;pe<ye.length;pe++){const ue=ye[pe];Ke?et&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,pe+1,0,0,Ae,Ee,ue.image[R]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+R,pe+1,ke,Ae,Ee,ue.image[R])}}}A(E)&&p(i.TEXTURE_CUBE_MAP),O.__version=k.version,E.onUpdate&&E.onUpdate(E)}S.__version=E.version}function Z(S,E,F,N,k,O){const ie=r.convert(F.format,F.colorSpace),K=r.convert(F.type),re=x(F.internalFormat,ie,K,F.colorSpace);if(!n.get(E).__hasExternalTextures){const se=Math.max(1,E.width>>O),ce=Math.max(1,E.height>>O);k===i.TEXTURE_3D||k===i.TEXTURE_2D_ARRAY?t.texImage3D(k,O,re,se,ce,E.depth,0,ie,K,null):t.texImage2D(k,O,re,se,ce,0,ie,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,S),T(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,N,k,n.get(F).__webglTexture,0,Oe(E)):(k===i.TEXTURE_2D||k>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&k<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,N,k,n.get(F).__webglTexture,O),t.bindFramebuffer(i.FRAMEBUFFER,null)}function oe(S,E,F){if(i.bindRenderbuffer(i.RENDERBUFFER,S),E.depthBuffer&&!E.stencilBuffer){let N=i.DEPTH_COMPONENT24;if(F||T(E)){const k=E.depthTexture;k&&k.isDepthTexture&&(k.type===Ft?N=i.DEPTH_COMPONENT32F:k.type===ar&&(N=i.DEPTH_COMPONENT24));const O=Oe(E);T(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,O,N,E.width,E.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,O,N,E.width,E.height)}else i.renderbufferStorage(i.RENDERBUFFER,N,E.width,E.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,S)}else if(E.depthBuffer&&E.stencilBuffer){const N=Oe(E);F&&T(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,N,i.DEPTH24_STENCIL8,E.width,E.height):T(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,N,i.DEPTH24_STENCIL8,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,S)}else{const N=E.textures;for(let k=0;k<N.length;k++){const O=N[k],ie=r.convert(O.format,O.colorSpace),K=r.convert(O.type),re=x(O.internalFormat,ie,K,O.colorSpace),le=Oe(E);F&&T(E)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,le,re,E.width,E.height):T(E)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,le,re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,re,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(S,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,S),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),D(E.depthTexture,0);const N=n.get(E.depthTexture).__webglTexture,k=Oe(E);if(E.depthTexture.format===ho)T(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,N,0);else if(E.depthTexture.format===Fa)T(E)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0,k):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,N,0);else throw new Error("Unknown depthTexture format")}function fe(S){const E=n.get(S),F=S.isWebGLCubeRenderTarget===!0;if(S.depthTexture&&!E.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");de(E.__webglFramebuffer,S)}else if(F){E.__webglDepthbuffer=[];for(let N=0;N<6;N++)t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[N]),E.__webglDepthbuffer[N]=i.createRenderbuffer(),oe(E.__webglDepthbuffer[N],S,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=i.createRenderbuffer(),oe(E.__webglDepthbuffer,S,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function be(S,E,F){const N=n.get(S);E!==void 0&&Z(N.__webglFramebuffer,S,S.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),F!==void 0&&fe(S)}function Fe(S){const E=S.texture,F=n.get(S),N=n.get(E);S.addEventListener("dispose",M);const k=S.textures,O=S.isWebGLCubeRenderTarget===!0,ie=k.length>1;if(ie||(N.__webglTexture===void 0&&(N.__webglTexture=i.createTexture()),N.__version=E.version,o.memory.textures++),O){F.__webglFramebuffer=[];for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer[K]=[];for(let re=0;re<E.mipmaps.length;re++)F.__webglFramebuffer[K][re]=i.createFramebuffer()}else F.__webglFramebuffer[K]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){F.__webglFramebuffer=[];for(let K=0;K<E.mipmaps.length;K++)F.__webglFramebuffer[K]=i.createFramebuffer()}else F.__webglFramebuffer=i.createFramebuffer();if(ie)for(let K=0,re=k.length;K<re;K++){const le=n.get(k[K]);le.__webglTexture===void 0&&(le.__webglTexture=i.createTexture(),o.memory.textures++)}if(S.samples>0&&T(S)===!1){F.__webglMultisampledFramebuffer=i.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let K=0;K<k.length;K++){const re=k[K];F.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,F.__webglColorRenderbuffer[K]);const le=r.convert(re.format,re.colorSpace),se=r.convert(re.type),ce=x(re.internalFormat,le,se,re.colorSpace,S.isXRRenderTarget===!0),ve=Oe(S);i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,ce,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,F.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),S.depthBuffer&&(F.__webglDepthRenderbuffer=i.createRenderbuffer(),oe(F.__webglDepthRenderbuffer,S,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(O){t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture),ne(i.TEXTURE_CUBE_MAP,E);for(let K=0;K<6;K++)if(E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)Z(F.__webglFramebuffer[K][re],S,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,re);else Z(F.__webglFramebuffer[K],S,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);A(E)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ie){for(let K=0,re=k.length;K<re;K++){const le=k[K],se=n.get(le);t.bindTexture(i.TEXTURE_2D,se.__webglTexture),ne(i.TEXTURE_2D,le),Z(F.__webglFramebuffer,S,le,i.COLOR_ATTACHMENT0+K,i.TEXTURE_2D,0),A(le)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((S.isWebGL3DRenderTarget||S.isWebGLArrayRenderTarget)&&(K=S.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,N.__webglTexture),ne(K,E),E.mipmaps&&E.mipmaps.length>0)for(let re=0;re<E.mipmaps.length;re++)Z(F.__webglFramebuffer[re],S,E,i.COLOR_ATTACHMENT0,K,re);else Z(F.__webglFramebuffer,S,E,i.COLOR_ATTACHMENT0,K,0);A(E)&&p(K),t.unbindTexture()}S.depthBuffer&&fe(S)}function Ne(S){const E=S.textures;for(let F=0,N=E.length;F<N;F++){const k=E[F];if(A(k)){const O=S.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ie=n.get(k).__webglTexture;t.bindTexture(O,ie),p(O),t.unbindTexture()}}}function $(S){if(S.samples>0&&T(S)===!1){const E=S.textures,F=S.width,N=S.height;let k=i.COLOR_BUFFER_BIT;const O=[],ie=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=n.get(S),re=E.length>1;if(re)for(let le=0;le<E.length;le++)t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,K.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglFramebuffer);for(let le=0;le<E.length;le++){O.push(i.COLOR_ATTACHMENT0+le),S.depthBuffer&&O.push(ie);const se=K.__ignoreDepthValues!==void 0?K.__ignoreDepthValues:!1;if(se===!1&&(S.depthBuffer&&(k|=i.DEPTH_BUFFER_BIT),S.stencilBuffer&&K.__isTransmissionRenderTarget!==!0&&(k|=i.STENCIL_BUFFER_BIT)),re&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,K.__webglColorRenderbuffer[le]),se===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ie]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ie])),re){const ce=n.get(E[le]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ce,0)}i.blitFramebuffer(0,0,F,N,0,0,F,N,k,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,O)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),re)for(let le=0;le<E.length;le++){t.bindFramebuffer(i.FRAMEBUFFER,K.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.RENDERBUFFER,K.__webglColorRenderbuffer[le]);const se=n.get(E[le]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,K.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+le,i.TEXTURE_2D,se,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,K.__webglMultisampledFramebuffer)}}function Oe(S){return Math.min(s.maxSamples,S.samples)}function T(S){const E=n.get(S);return S.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function P(S){const E=o.render.frame;h.get(S)!==E&&(h.set(S,E),S.update())}function z(S,E){const F=S.colorSpace,N=S.format,k=S.type;return S.isCompressedTexture===!0||S.isVideoTexture===!0||F!==ct&&F!==Fn&&(st.getTransfer(F)===mt?(N!==It||k!==Tt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),E}function ee(S){return typeof HTMLImageElement<"u"&&S instanceof HTMLImageElement?(c.width=S.naturalWidth||S.width,c.height=S.naturalHeight||S.height):typeof VideoFrame<"u"&&S instanceof VideoFrame?(c.width=S.displayWidth,c.height=S.displayHeight):(c.width=S.width,c.height=S.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=v,this.setTexture2D=D,this.setTexture2DArray=G,this.setTexture3D=H,this.setTextureCube=X,this.rebindTextures=be,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=$,this.setupDepthRenderbuffer=fe,this.setupFrameBufferTexture=Z,this.useMultisampledRTT=T}function YB(i,e){function t(n,s=Fn){let r;const o=st.getTransfer(s);if(n===Tt)return i.UNSIGNED_BYTE;if(n===VE)return i.UNSIGNED_SHORT_4_4_4_4;if(n===zE)return i.UNSIGNED_SHORT_5_5_5_1;if(n===_C)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===kE)return i.BYTE;if(n===GE)return i.SHORT;if(n===HE)return i.UNSIGNED_SHORT;if(n===tA)return i.INT;if(n===ar)return i.UNSIGNED_INT;if(n===Ft)return i.FLOAT;if(n===Xt)return i.HALF_FLOAT;if(n===EC)return i.ALPHA;if(n===vC)return i.RGB;if(n===It)return i.RGBA;if(n===yC)return i.LUMINANCE;if(n===xC)return i.LUMINANCE_ALPHA;if(n===ho)return i.DEPTH_COMPONENT;if(n===Fa)return i.DEPTH_STENCIL;if(n===Zs)return i.RED;if(n===WE)return i.RED_INTEGER;if(n===Jr)return i.RG;if(n===qE)return i.RG_INTEGER;if(n===$E)return i.RGBA_INTEGER;if(n===gc||n===Ph||n===Fh||n===_c)if(o===mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===gc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ph)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Fh)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===_c)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===gc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ph)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Fh)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===_c)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ef||n===gp||n===tf||n===_p)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===ef)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===gp)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===tf)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_p)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===nA)return r=e.get("WEBGL_compressed_texture_etc1"),r!==null?r.COMPRESSED_RGB_ETC1_WEBGL:null;if(n===nf||n===sf)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===nf)return o===mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===sf)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===rf||n===Ep||n===vp||n===yp||n===kc||n===xp||n===Sp||n===Ip||n===Cp||n===Mp||n===wp||n===bp||n===Tp||n===Bp)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===rf)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ep)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===vp)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===yp)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===kc)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===xp)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Sp)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ip)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Cp)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mp)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===wp)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===bp)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Tp)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bp)return o===mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ec||n===Rp||n===Dp)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ec)return o===mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Rp)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Dp)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===SC||n===Lp||n===Pp||n===Fp)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ec)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Lp)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Pp)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fp)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===qa?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class KB extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class fs extends ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const jB={type:"move"};class au{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const A=t.getJointPose(g,n),p=this._getHandJoint(c,g);A!==null&&(p.matrix.fromArray(A.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=A.radius),p.visible=A!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(jB)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new fs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const JB=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,ZB=`
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

}`;class eR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new _t,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}render(e,t){if(this.texture!==null){if(this.mesh===null){const n=t.cameras[0].viewport,s=new yn({vertexShader:JB,fragmentShader:ZB,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ut(new gi(20,20),s)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class tR extends ni{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null;const g=new eR,A=t.getContextAttributes();let p=null,x=null;const _=[],C=[],M=new Re;let I=null;const w=new Vt;w.layers.enable(1),w.viewport=new ht;const B=new Vt;B.layers.enable(2),B.viewport=new ht;const y=[w,B],v=new KB;v.layers.enable(1),v.layers.enable(2);let U=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let oe=_[Z];return oe===void 0&&(oe=new au,_[Z]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Z){let oe=_[Z];return oe===void 0&&(oe=new au,_[Z]=oe),oe.getGripSpace()},this.getHand=function(Z){let oe=_[Z];return oe===void 0&&(oe=new au,_[Z]=oe),oe.getHandSpace()};function D(Z){const oe=C.indexOf(Z.inputSource);if(oe===-1)return;const de=_[oe];de!==void 0&&(de.update(Z.inputSource,Z.frame,c||o),de.dispatchEvent({type:Z.type,data:Z.inputSource}))}function G(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",H);for(let Z=0;Z<_.length;Z++){const oe=C[Z];oe!==null&&(C[Z]=null,_[Z].disconnect(oe))}U=null,V=null,g.reset(),e.setRenderTarget(p),f=null,d=null,u=null,s=null,x=null,Me.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",G),s.addEventListener("inputsourceschange",H),A.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(M),s.renderState.layers===void 0){const oe={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,oe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new Qn(f.framebufferWidth,f.framebufferHeight,{format:It,type:Tt,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil})}else{let oe=null,de=null,fe=null;A.depth&&(fe=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=A.stencil?Fa:ho,de=A.stencil?qa:ar);const be={colorFormat:t.RGBA8,depthFormat:fe,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer(be),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new Qn(d.textureWidth,d.textureHeight,{format:It,type:Tt,depthTexture:new cv(d.textureWidth,d.textureHeight,de,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0});const Fe=e.properties.get(x);Fe.__ignoreDepthValues=d.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Me.setContext(s),Me.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function H(Z){for(let oe=0;oe<Z.removed.length;oe++){const de=Z.removed[oe],fe=C.indexOf(de);fe>=0&&(C[fe]=null,_[fe].disconnect(de))}for(let oe=0;oe<Z.added.length;oe++){const de=Z.added[oe];let fe=C.indexOf(de);if(fe===-1){for(let Fe=0;Fe<_.length;Fe++)if(Fe>=C.length){C.push(de),fe=Fe;break}else if(C[Fe]===null){C[Fe]=de,fe=Fe;break}if(fe===-1)break}const be=_[fe];be&&be.connect(de)}}const X=new L,q=new L;function Q(Z,oe,de){X.setFromMatrixPosition(oe.matrixWorld),q.setFromMatrixPosition(de.matrixWorld);const fe=X.distanceTo(q),be=oe.projectionMatrix.elements,Fe=de.projectionMatrix.elements,Ne=be[14]/(be[10]-1),$=be[14]/(be[10]+1),Oe=(be[9]+1)/be[5],T=(be[9]-1)/be[5],P=(be[8]-1)/be[0],z=(Fe[8]+1)/Fe[0],ee=Ne*P,S=Ne*z,E=fe/(-P+z),F=E*-P;oe.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(F),Z.translateZ(E),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert();const N=Ne+E,k=$+E,O=ee-F,ie=S+(fe-F),K=Oe*$/k*N,re=T*$/k*N;Z.projectionMatrix.makePerspective(O,ie,K,re,N,k),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}function te(Z,oe){oe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(oe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;g.texture!==null&&(Z.near=g.depthNear,Z.far=g.depthFar),v.near=B.near=w.near=Z.near,v.far=B.far=w.far=Z.far,(U!==v.near||V!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),U=v.near,V=v.far,w.near=U,w.far=V,B.near=U,B.far=V,w.updateProjectionMatrix(),B.updateProjectionMatrix(),Z.updateProjectionMatrix());const oe=Z.parent,de=v.cameras;te(v,oe);for(let fe=0;fe<de.length;fe++)te(de[fe],oe);de.length===2?Q(v,w,B):v.projectionMatrix.copy(w.projectionMatrix),ne(Z,v,oe)};function ne(Z,oe,de){de===null?Z.matrix.copy(oe.matrixWorld):(Z.matrix.copy(de.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(oe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(oe.projectionMatrix),Z.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=vo*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Z){l=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null};let ae=null;function ge(Z,oe){if(h=oe.getViewerPose(c||o),m=oe,h!==null){const de=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let fe=!1;de.length!==v.cameras.length&&(v.cameras.length=0,fe=!0);for(let Fe=0;Fe<de.length;Fe++){const Ne=de[Fe];let $=null;if(f!==null)$=f.getViewport(Ne);else{const T=u.getViewSubImage(d,Ne);$=T.viewport,Fe===0&&(e.setRenderTargetTextures(x,T.colorTexture,d.ignoreDepthValues?void 0:T.depthStencilTexture),e.setRenderTarget(x))}let Oe=y[Fe];Oe===void 0&&(Oe=new Vt,Oe.layers.enable(Fe),Oe.viewport=new ht,y[Fe]=Oe),Oe.matrix.fromArray(Ne.transform.matrix),Oe.matrix.decompose(Oe.position,Oe.quaternion,Oe.scale),Oe.projectionMatrix.fromArray(Ne.projectionMatrix),Oe.projectionMatrixInverse.copy(Oe.projectionMatrix).invert(),Oe.viewport.set($.x,$.y,$.width,$.height),Fe===0&&(v.matrix.copy(Oe.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),fe===!0&&v.cameras.push(Oe)}const be=s.enabledFeatures;if(be&&be.includes("depth-sensing")){const Fe=u.getDepthInformation(de[0]);Fe&&Fe.isValid&&Fe.texture&&g.init(e,Fe,s.renderState)}}for(let de=0;de<_.length;de++){const fe=C[de],be=_[de];fe!==null&&be!==void 0&&be.update(fe,oe,c||o)}g.render(e,v),ae&&ae(Z,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),m=null}const Me=new lv;Me.setAnimationLoop(ge),this.setAnimationLoop=function(Z){ae=Z},this.dispose=function(){}}}const Fs=new kn,nR=new Le;function iR(i,e){function t(A,p){A.matrixAutoUpdate===!0&&A.updateMatrix(),p.value.copy(A.matrix)}function n(A,p){p.color.getRGB(A.fogColor.value,rv(i)),p.isFog?(A.fogNear.value=p.near,A.fogFar.value=p.far):p.isFogExp2&&(A.fogDensity.value=p.density)}function s(A,p,x,_,C){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(A,p):p.isMeshToonMaterial?(r(A,p),u(A,p)):p.isMeshPhongMaterial?(r(A,p),h(A,p)):p.isMeshStandardMaterial?(r(A,p),d(A,p),p.isMeshPhysicalMaterial&&f(A,p,C)):p.isMeshMatcapMaterial?(r(A,p),m(A,p)):p.isMeshDepthMaterial?r(A,p):p.isMeshDistanceMaterial?(r(A,p),g(A,p)):p.isMeshNormalMaterial?r(A,p):p.isLineBasicMaterial?(o(A,p),p.isLineDashedMaterial&&a(A,p)):p.isPointsMaterial?l(A,p,x,_):p.isSpriteMaterial?c(A,p):p.isShadowMaterial?(A.color.value.copy(p.color),A.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(A,p){A.opacity.value=p.opacity,p.color&&A.diffuse.value.copy(p.color),p.emissive&&A.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(A.map.value=p.map,t(p.map,A.mapTransform)),p.alphaMap&&(A.alphaMap.value=p.alphaMap,t(p.alphaMap,A.alphaMapTransform)),p.bumpMap&&(A.bumpMap.value=p.bumpMap,t(p.bumpMap,A.bumpMapTransform),A.bumpScale.value=p.bumpScale,p.side===Yt&&(A.bumpScale.value*=-1)),p.normalMap&&(A.normalMap.value=p.normalMap,t(p.normalMap,A.normalMapTransform),A.normalScale.value.copy(p.normalScale),p.side===Yt&&A.normalScale.value.negate()),p.displacementMap&&(A.displacementMap.value=p.displacementMap,t(p.displacementMap,A.displacementMapTransform),A.displacementScale.value=p.displacementScale,A.displacementBias.value=p.displacementBias),p.emissiveMap&&(A.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,A.emissiveMapTransform)),p.specularMap&&(A.specularMap.value=p.specularMap,t(p.specularMap,A.specularMapTransform)),p.alphaTest>0&&(A.alphaTest.value=p.alphaTest);const x=e.get(p),_=x.envMap,C=x.envMapRotation;if(_&&(A.envMap.value=_,Fs.copy(C),Fs.x*=-1,Fs.y*=-1,Fs.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(Fs.y*=-1,Fs.z*=-1),A.envMapRotation.value.setFromMatrix4(nR.makeRotationFromEuler(Fs)),A.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,A.reflectivity.value=p.reflectivity,A.ior.value=p.ior,A.refractionRatio.value=p.refractionRatio),p.lightMap){A.lightMap.value=p.lightMap;const M=i._useLegacyLights===!0?Math.PI:1;A.lightMapIntensity.value=p.lightMapIntensity*M,t(p.lightMap,A.lightMapTransform)}p.aoMap&&(A.aoMap.value=p.aoMap,A.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,A.aoMapTransform))}function o(A,p){A.diffuse.value.copy(p.color),A.opacity.value=p.opacity,p.map&&(A.map.value=p.map,t(p.map,A.mapTransform))}function a(A,p){A.dashSize.value=p.dashSize,A.totalSize.value=p.dashSize+p.gapSize,A.scale.value=p.scale}function l(A,p,x,_){A.diffuse.value.copy(p.color),A.opacity.value=p.opacity,A.size.value=p.size*x,A.scale.value=_*.5,p.map&&(A.map.value=p.map,t(p.map,A.uvTransform)),p.alphaMap&&(A.alphaMap.value=p.alphaMap,t(p.alphaMap,A.alphaMapTransform)),p.alphaTest>0&&(A.alphaTest.value=p.alphaTest)}function c(A,p){A.diffuse.value.copy(p.color),A.opacity.value=p.opacity,A.rotation.value=p.rotation,p.map&&(A.map.value=p.map,t(p.map,A.mapTransform)),p.alphaMap&&(A.alphaMap.value=p.alphaMap,t(p.alphaMap,A.alphaMapTransform)),p.alphaTest>0&&(A.alphaTest.value=p.alphaTest)}function h(A,p){A.specular.value.copy(p.specular),A.shininess.value=Math.max(p.shininess,1e-4)}function u(A,p){p.gradientMap&&(A.gradientMap.value=p.gradientMap)}function d(A,p){A.metalness.value=p.metalness,p.metalnessMap&&(A.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,A.metalnessMapTransform)),A.roughness.value=p.roughness,p.roughnessMap&&(A.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,A.roughnessMapTransform)),p.envMap&&(A.envMapIntensity.value=p.envMapIntensity)}function f(A,p,x){A.ior.value=p.ior,p.sheen>0&&(A.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),A.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(A.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,A.sheenColorMapTransform)),p.sheenRoughnessMap&&(A.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,A.sheenRoughnessMapTransform))),p.clearcoat>0&&(A.clearcoat.value=p.clearcoat,A.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(A.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,A.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(A.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&A.clearcoatNormalScale.value.negate())),p.iridescence>0&&(A.iridescence.value=p.iridescence,A.iridescenceIOR.value=p.iridescenceIOR,A.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(A.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,A.iridescenceMapTransform)),p.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),p.transmission>0&&(A.transmission.value=p.transmission,A.transmissionSamplerMap.value=x.texture,A.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(A.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,A.transmissionMapTransform)),A.thickness.value=p.thickness,p.thicknessMap&&(A.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=p.attenuationDistance,A.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(A.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(A.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=p.specularIntensity,A.specularColor.value.copy(p.specularColor),p.specularColorMap&&(A.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,A.specularColorMapTransform)),p.specularIntensityMap&&(A.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,A.specularIntensityMapTransform))}function m(A,p){p.matcap&&(A.matcap.value=p.matcap)}function g(A,p){const x=e.get(p).light;A.referencePosition.value.setFromMatrixPosition(x.matrixWorld),A.nearDistance.value=x.shadow.camera.near,A.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sR(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,_){const C=_.program;n.uniformBlockBinding(x,C)}function c(x,_){let C=s[x.id];C===void 0&&(m(x),C=h(x),s[x.id]=C,x.addEventListener("dispose",A));const M=_.program;n.updateUBOMapping(x,M);const I=e.render.frame;r[x.id]!==I&&(d(x),r[x.id]=I)}function h(x){const _=u();x.__bindingPointIndex=_;const C=i.createBuffer(),M=x.__size,I=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,M,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,C),C}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const _=s[x.id],C=x.uniforms,M=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let I=0,w=C.length;I<w;I++){const B=Array.isArray(C[I])?C[I]:[C[I]];for(let y=0,v=B.length;y<v;y++){const U=B[y];if(f(U,I,y,M)===!0){const V=U.__offset,D=Array.isArray(U.value)?U.value:[U.value];let G=0;for(let H=0;H<D.length;H++){const X=D[H],q=g(X);typeof X=="number"||typeof X=="boolean"?(U.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,V+G,U.__data)):X.isMatrix3?(U.__data[0]=X.elements[0],U.__data[1]=X.elements[1],U.__data[2]=X.elements[2],U.__data[3]=0,U.__data[4]=X.elements[3],U.__data[5]=X.elements[4],U.__data[6]=X.elements[5],U.__data[7]=0,U.__data[8]=X.elements[6],U.__data[9]=X.elements[7],U.__data[10]=X.elements[8],U.__data[11]=0):(X.toArray(U.__data,G),G+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(x,_,C,M){const I=x.value,w=_+"_"+C;if(M[w]===void 0)return typeof I=="number"||typeof I=="boolean"?M[w]=I:M[w]=I.clone(),!0;{const B=M[w];if(typeof I=="number"||typeof I=="boolean"){if(B!==I)return M[w]=I,!0}else if(B.equals(I)===!1)return B.copy(I),!0}return!1}function m(x){const _=x.uniforms;let C=0;const M=16;for(let w=0,B=_.length;w<B;w++){const y=Array.isArray(_[w])?_[w]:[_[w]];for(let v=0,U=y.length;v<U;v++){const V=y[v],D=Array.isArray(V.value)?V.value:[V.value];for(let G=0,H=D.length;G<H;G++){const X=D[G],q=g(X),Q=C%M;Q!==0&&M-Q<q.boundary&&(C+=M-Q),V.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=C,C+=q.storage}}}const I=C%M;return I>0&&(C+=M-I),x.__size=C,x.__cache={},this}function g(x){const _={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(_.boundary=4,_.storage=4):x.isVector2?(_.boundary=8,_.storage=8):x.isVector3||x.isColor?(_.boundary=16,_.storage=12):x.isVector4?(_.boundary=16,_.storage=16):x.isMatrix3?(_.boundary=48,_.storage=48):x.isMatrix4?(_.boundary=64,_.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),_}function A(x){const _=x.target;_.removeEventListener("dispose",A);const C=o.indexOf(_.__bindingPointIndex);o.splice(C,1),i.deleteBuffer(s[_.id]),delete s[_.id],delete r[_.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);o=[],s={},r={}}return{bind:l,update:c,dispose:p}}class dA{constructor(e={}){const{canvas:t=JC(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const f=new Uint32Array(4),m=new Int32Array(4);let g=null,A=null;const p=[],x=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=St,this._useLegacyLights=!1,this.toneMapping=Hi,this.toneMappingExposure=1;const _=this;let C=!1,M=0,I=0,w=null,B=-1,y=null;const v=new ht,U=new ht;let V=null;const D=new De(0);let G=0,H=t.width,X=t.height,q=1,Q=null,te=null;const ne=new ht(0,0,H,X),ae=new ht(0,0,H,X);let ge=!1;const Me=new hA;let Z=!1,oe=!1;const de=new Le,fe=new Re,be=new L,Fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return w===null?q:1}let $=n;function Oe(b,W){const j=t.getContext(b,W);return j!==null?j:null}try{const b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Zf}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",Ie,!1),$===null){const W="webgl2";if($=Oe(W,b),$===null)throw Oe(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let T,P,z,ee,S,E,F,N,k,O,ie,K,re,le,se,ce,ve,Ae,Ee,ke,Ke,Je,et,Xe;function ye(){T=new AT($),T.init(),P=new lT($,T,e),Je=new YB($,T),z=new $B($),ee=new gT($),S=new PB,E=new XB($,T,z,S,P,Je,ee),F=new hT(_),N=new fT(_),k=new SM($),et=new oT($,k),O=new pT($,k,ee,et),ie=new ET($,O,k,ee),Ee=new _T($,P,E),ce=new cT(S),K=new LB(_,F,N,T,P,et,ce),re=new iR(_,S),le=new UB,se=new HB(T),Ae=new rT(_,F,N,z,ie,d,l),ve=new qB(_,ie,P),Xe=new sR($,ee,P,z),ke=new aT($,T,ee),Ke=new mT($,T,ee),ee.programs=K.programs,_.capabilities=P,_.extensions=T,_.properties=S,_.renderLists=le,_.shadowMap=ve,_.state=z,_.info=ee}ye();const R=new tR(_,$);this.xr=R,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const b=T.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=T.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return q},this.setPixelRatio=function(b){b!==void 0&&(q=b,this.setSize(H,X,!1))},this.getSize=function(b){return b.set(H,X)},this.setSize=function(b,W,j=!0){if(R.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=b,X=W,t.width=Math.floor(b*q),t.height=Math.floor(W*q),j===!0&&(t.style.width=b+"px",t.style.height=W+"px"),this.setViewport(0,0,b,W)},this.getDrawingBufferSize=function(b){return b.set(H*q,X*q).floor()},this.setDrawingBufferSize=function(b,W,j){H=b,X=W,q=j,t.width=Math.floor(b*j),t.height=Math.floor(W*j),this.setViewport(0,0,b,W)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(ne)},this.setViewport=function(b,W,j,J){b.isVector4?ne.set(b.x,b.y,b.z,b.w):ne.set(b,W,j,J),z.viewport(v.copy(ne).multiplyScalar(q).round())},this.getScissor=function(b){return b.copy(ae)},this.setScissor=function(b,W,j,J){b.isVector4?ae.set(b.x,b.y,b.z,b.w):ae.set(b,W,j,J),z.scissor(U.copy(ae).multiplyScalar(q).round())},this.getScissorTest=function(){return ge},this.setScissorTest=function(b){z.setScissorTest(ge=b)},this.setOpaqueSort=function(b){Q=b},this.setTransparentSort=function(b){te=b},this.getClearColor=function(b){return b.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(b=!0,W=!0,j=!0){let J=0;if(b){let Y=!1;if(w!==null){const _e=w.texture.format;Y=_e===$E||_e===qE||_e===WE}if(Y){const _e=w.texture.type,Se=_e===Tt||_e===ar||_e===HE||_e===qa||_e===VE||_e===zE,Te=Ae.getClearColor(),Pe=Ae.getClearAlpha(),Ge=Te.r,Qe=Te.g,He=Te.b;Se?(f[0]=Ge,f[1]=Qe,f[2]=He,f[3]=Pe,$.clearBufferuiv($.COLOR,0,f)):(m[0]=Ge,m[1]=Qe,m[2]=He,m[3]=Pe,$.clearBufferiv($.COLOR,0,m))}else J|=$.COLOR_BUFFER_BIT}W&&(J|=$.DEPTH_BUFFER_BIT),j&&(J|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",Ie,!1),le.dispose(),se.dispose(),S.dispose(),F.dispose(),N.dispose(),ie.dispose(),et.dispose(),Xe.dispose(),K.dispose(),R.dispose(),R.removeEventListener("sessionstart",ii),R.removeEventListener("sessionend",si),Ms.stop()};function pe(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),C=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),C=!1;const b=ee.autoReset,W=ve.enabled,j=ve.autoUpdate,J=ve.needsUpdate,Y=ve.type;ye(),ee.autoReset=b,ve.enabled=W,ve.autoUpdate=j,ve.needsUpdate=J,ve.type=Y}function Ie(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Ce(b){const W=b.target;W.removeEventListener("dispose",Ce),dt(W)}function dt(b){Et(b),S.remove(b)}function Et(b){const W=S.get(b).programs;W!==void 0&&(W.forEach(function(j){K.releaseProgram(j)}),b.isShaderMaterial&&K.releaseShaderCache(b))}this.renderBufferDirect=function(b,W,j,J,Y,_e){W===null&&(W=Fe);const Se=Y.isMesh&&Y.matrixWorld.determinant()<0,Te=Xy(b,W,j,J,Y);z.setMaterial(J,Se);let Pe=j.index,Ge=1;if(J.wireframe===!0){if(Pe=O.getWireframeAttribute(j),Pe===void 0)return;Ge=2}const Qe=j.drawRange,He=j.attributes.position;let Rt=Qe.start*Ge,xn=(Qe.start+Qe.count)*Ge;_e!==null&&(Rt=Math.max(Rt,_e.start*Ge),xn=Math.min(xn,(_e.start+_e.count)*Ge)),Pe!==null?(Rt=Math.max(Rt,0),xn=Math.min(xn,Pe.count)):He!=null&&(Rt=Math.max(Rt,0),xn=Math.min(xn,He.count));const Qt=xn-Rt;if(Qt<0||Qt===1/0)return;et.setup(Y,J,Te,j,Pe);let vi,wt=ke;if(Pe!==null&&(vi=k.get(Pe),wt=Ke,wt.setIndex(vi)),Y.isMesh)J.wireframe===!0?(z.setLineWidth(J.wireframeLinewidth*Ne()),wt.setMode($.LINES)):wt.setMode($.TRIANGLES);else if(Y.isLine){let We=J.linewidth;We===void 0&&(We=1),z.setLineWidth(We*Ne()),Y.isLineSegments?wt.setMode($.LINES):Y.isLineLoop?wt.setMode($.LINE_LOOP):wt.setMode($.LINE_STRIP)}else Y.isPoints?wt.setMode($.POINTS):Y.isSprite&&wt.setMode($.TRIANGLES);if(Y.isBatchedMesh)wt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else if(Y.isInstancedMesh)wt.renderInstances(Rt,Qt,Y.count);else if(j.isInstancedBufferGeometry){const We=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,yh=Math.min(j.instanceCount,We);wt.renderInstances(Rt,Qt,yh)}else wt.render(Rt,Qt)};function Mt(b,W,j){b.transparent===!0&&b.side===rn&&b.forceSinglePass===!1?(b.side=Yt,b.needsUpdate=!0,tl(b,W,j),b.side=ei,b.needsUpdate=!0,tl(b,W,j),b.side=rn):tl(b,W,j)}this.compile=function(b,W,j=null){j===null&&(j=b),A=se.get(j),A.init(),x.push(A),j.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),b!==j&&b.traverseVisible(function(Y){Y.isLight&&Y.layers.test(W.layers)&&(A.pushLight(Y),Y.castShadow&&A.pushShadow(Y))}),A.setupLights(_._useLegacyLights);const J=new Set;return b.traverse(function(Y){const _e=Y.material;if(_e)if(Array.isArray(_e))for(let Se=0;Se<_e.length;Se++){const Te=_e[Se];Mt(Te,j,Y),J.add(Te)}else Mt(_e,j,Y),J.add(_e)}),x.pop(),A=null,J},this.compileAsync=function(b,W,j=null){const J=this.compile(b,W,j);return new Promise(Y=>{function _e(){if(J.forEach(function(Se){S.get(Se).currentProgram.isReady()&&J.delete(Se)}),J.size===0){Y(b);return}setTimeout(_e,10)}T.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let jt=null;function At(b){jt&&jt(b)}function ii(){Ms.stop()}function si(){Ms.start()}const Ms=new lv;Ms.setAnimationLoop(At),typeof self<"u"&&Ms.setContext(self),this.setAnimationLoop=function(b){jt=b,R.setAnimationLoop(b),b===null?Ms.stop():Ms.start()},R.addEventListener("sessionstart",ii),R.addEventListener("sessionend",si),this.render=function(b,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),R.enabled===!0&&R.isPresenting===!0&&(R.cameraAutoUpdate===!0&&R.updateCamera(W),W=R.getCamera()),b.isScene===!0&&b.onBeforeRender(_,b,W,w),A=se.get(b,x.length),A.init(),x.push(A),de.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),Me.setFromProjectionMatrix(de),oe=this.localClippingEnabled,Z=ce.init(this.clippingPlanes,oe),g=le.get(b,p.length),g.init(),p.push(g),wA(b,W,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(Q,te),this.info.render.frame++,Z===!0&&ce.beginShadows();const j=A.state.shadowsArray;if(ve.render(j,b,W),Z===!0&&ce.endShadows(),this.info.autoReset===!0&&this.info.reset(),(R.enabled===!1||R.isPresenting===!1||R.hasDepthSensing()===!1)&&Ae.render(g,b),A.setupLights(_._useLegacyLights),W.isArrayCamera){const J=W.cameras;for(let Y=0,_e=J.length;Y<_e;Y++){const Se=J[Y];bA(g,b,Se,Se.viewport)}}else bA(g,b,W);w!==null&&(E.updateMultisampleRenderTarget(w),E.updateRenderTargetMipmap(w)),b.isScene===!0&&b.onAfterRender(_,b,W),et.resetDefaultState(),B=-1,y=null,x.pop(),x.length>0?A=x[x.length-1]:A=null,p.pop(),p.length>0?g=p[p.length-1]:g=null};function wA(b,W,j,J){if(b.visible===!1)return;if(b.layers.test(W.layers)){if(b.isGroup)j=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(W);else if(b.isLight)A.pushLight(b),b.castShadow&&A.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Me.intersectsSprite(b)){J&&be.setFromMatrixPosition(b.matrixWorld).applyMatrix4(de);const Se=ie.update(b),Te=b.material;Te.visible&&g.push(b,Se,Te,j,be.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Me.intersectsObject(b))){const Se=ie.update(b),Te=b.material;if(J&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),be.copy(b.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),be.copy(Se.boundingSphere.center)),be.applyMatrix4(b.matrixWorld).applyMatrix4(de)),Array.isArray(Te)){const Pe=Se.groups;for(let Ge=0,Qe=Pe.length;Ge<Qe;Ge++){const He=Pe[Ge],Rt=Te[He.materialIndex];Rt&&Rt.visible&&g.push(b,Se,Rt,j,be.z,He)}}else Te.visible&&g.push(b,Se,Te,j,be.z,null)}}const _e=b.children;for(let Se=0,Te=_e.length;Se<Te;Se++)wA(_e[Se],W,j,J)}function bA(b,W,j,J){const Y=b.opaque,_e=b.transmissive,Se=b.transparent;A.setupLightsView(j),Z===!0&&ce.setGlobalState(_.clippingPlanes,j),_e.length>0&&$y(Y,_e,W,j),J&&z.viewport(v.copy(J)),Y.length>0&&el(Y,W,j),_e.length>0&&el(_e,W,j),Se.length>0&&el(Se,W,j),z.buffers.depth.setTest(!0),z.buffers.depth.setMask(!0),z.buffers.color.setMask(!0),z.setPolygonOffset(!1)}function $y(b,W,j,J){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget===null){A.state.transmissionRenderTarget=new Qn(1,1,{generateMipmaps:!0,type:T.has("EXT_color_buffer_half_float")||T.has("EXT_color_buffer_float")?Xt:Tt,minFilter:_n,samples:4,stencilBuffer:r});const Ge=S.get(A.state.transmissionRenderTarget);Ge.__isTransmissionRenderTarget=!0}const _e=A.state.transmissionRenderTarget;_.getDrawingBufferSize(fe),_e.setSize(fe.x,fe.y);const Se=_.getRenderTarget();_.setRenderTarget(_e),_.getClearColor(D),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear();const Te=_.toneMapping;_.toneMapping=Hi,el(b,j,J),E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e);let Pe=!1;for(let Ge=0,Qe=W.length;Ge<Qe;Ge++){const He=W[Ge],Rt=He.object,xn=He.geometry,Qt=He.material,vi=He.group;if(Qt.side===rn&&Rt.layers.test(J.layers)){const wt=Qt.side;Qt.side=Yt,Qt.needsUpdate=!0,TA(Rt,j,J,xn,Qt,vi),Qt.side=wt,Qt.needsUpdate=!0,Pe=!0}}Pe===!0&&(E.updateMultisampleRenderTarget(_e),E.updateRenderTargetMipmap(_e)),_.setRenderTarget(Se),_.setClearColor(D,G),_.toneMapping=Te}function el(b,W,j){const J=W.isScene===!0?W.overrideMaterial:null;for(let Y=0,_e=b.length;Y<_e;Y++){const Se=b[Y],Te=Se.object,Pe=Se.geometry,Ge=J===null?Se.material:J,Qe=Se.group;Te.layers.test(j.layers)&&TA(Te,W,j,Pe,Ge,Qe)}}function TA(b,W,j,J,Y,_e){b.onBeforeRender(_,W,j,J,Y,_e),b.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),Y.onBeforeRender(_,W,j,J,b,_e),Y.transparent===!0&&Y.side===rn&&Y.forceSinglePass===!1?(Y.side=Yt,Y.needsUpdate=!0,_.renderBufferDirect(j,W,J,Y,b,_e),Y.side=ei,Y.needsUpdate=!0,_.renderBufferDirect(j,W,J,Y,b,_e),Y.side=rn):_.renderBufferDirect(j,W,J,Y,b,_e),b.onAfterRender(_,W,j,J,Y,_e)}function tl(b,W,j){W.isScene!==!0&&(W=Fe);const J=S.get(b),Y=A.state.lights,_e=A.state.shadowsArray,Se=Y.state.version,Te=K.getParameters(b,Y.state,_e,W,j),Pe=K.getProgramCacheKey(Te);let Ge=J.programs;J.environment=b.isMeshStandardMaterial?W.environment:null,J.fog=W.fog,J.envMap=(b.isMeshStandardMaterial?N:F).get(b.envMap||J.environment),J.envMapRotation=J.environment!==null&&b.envMap===null?W.environmentRotation:b.envMapRotation,Ge===void 0&&(b.addEventListener("dispose",Ce),Ge=new Map,J.programs=Ge);let Qe=Ge.get(Pe);if(Qe!==void 0){if(J.currentProgram===Qe&&J.lightsStateVersion===Se)return RA(b,Te),Qe}else Te.uniforms=K.getUniforms(b),b.onBuild(j,Te,_),b.onBeforeCompile(Te,_),Qe=K.acquireProgram(Te,Pe),Ge.set(Pe,Qe),J.uniforms=Te.uniforms;const He=J.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(He.clippingPlanes=ce.uniform),RA(b,Te),J.needsLights=Ky(b),J.lightsStateVersion=Se,J.needsLights&&(He.ambientLightColor.value=Y.state.ambient,He.lightProbe.value=Y.state.probe,He.directionalLights.value=Y.state.directional,He.directionalLightShadows.value=Y.state.directionalShadow,He.spotLights.value=Y.state.spot,He.spotLightShadows.value=Y.state.spotShadow,He.rectAreaLights.value=Y.state.rectArea,He.ltc_1.value=Y.state.rectAreaLTC1,He.ltc_2.value=Y.state.rectAreaLTC2,He.pointLights.value=Y.state.point,He.pointLightShadows.value=Y.state.pointShadow,He.hemisphereLights.value=Y.state.hemi,He.directionalShadowMap.value=Y.state.directionalShadowMap,He.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,He.spotShadowMap.value=Y.state.spotShadowMap,He.spotLightMatrix.value=Y.state.spotLightMatrix,He.spotLightMap.value=Y.state.spotLightMap,He.pointShadowMap.value=Y.state.pointShadowMap,He.pointShadowMatrix.value=Y.state.pointShadowMatrix),J.currentProgram=Qe,J.uniformsList=null,Qe}function BA(b){if(b.uniformsList===null){const W=b.currentProgram.getUniforms();b.uniformsList=yc.seqWithValue(W.seq,b.uniforms)}return b.uniformsList}function RA(b,W){const j=S.get(b);j.outputColorSpace=W.outputColorSpace,j.batching=W.batching,j.instancing=W.instancing,j.instancingColor=W.instancingColor,j.instancingMorph=W.instancingMorph,j.skinning=W.skinning,j.morphTargets=W.morphTargets,j.morphNormals=W.morphNormals,j.morphColors=W.morphColors,j.morphTargetsCount=W.morphTargetsCount,j.numClippingPlanes=W.numClippingPlanes,j.numIntersection=W.numClipIntersection,j.vertexAlphas=W.vertexAlphas,j.vertexTangents=W.vertexTangents,j.toneMapping=W.toneMapping}function Xy(b,W,j,J,Y){W.isScene!==!0&&(W=Fe),E.resetTextureUnits();const _e=W.fog,Se=J.isMeshStandardMaterial?W.environment:null,Te=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:ct,Pe=(J.isMeshStandardMaterial?N:F).get(J.envMap||Se),Ge=J.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Qe=!!j.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),He=!!j.morphAttributes.position,Rt=!!j.morphAttributes.normal,xn=!!j.morphAttributes.color;let Qt=Hi;J.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Qt=_.toneMapping);const vi=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,wt=vi!==void 0?vi.length:0,We=S.get(J),yh=A.state.lights;if(Z===!0&&(oe===!0||b!==y)){const Rn=b===y&&J.id===B;ce.setState(J,b,Rn)}let vt=!1;J.version===We.__version?(We.needsLights&&We.lightsStateVersion!==yh.state.version||We.outputColorSpace!==Te||Y.isBatchedMesh&&We.batching===!1||!Y.isBatchedMesh&&We.batching===!0||Y.isInstancedMesh&&We.instancing===!1||!Y.isInstancedMesh&&We.instancing===!0||Y.isSkinnedMesh&&We.skinning===!1||!Y.isSkinnedMesh&&We.skinning===!0||Y.isInstancedMesh&&We.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&We.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&We.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&We.instancingMorph===!1&&Y.morphTexture!==null||We.envMap!==Pe||J.fog===!0&&We.fog!==_e||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==ce.numPlanes||We.numIntersection!==ce.numIntersection)||We.vertexAlphas!==Ge||We.vertexTangents!==Qe||We.morphTargets!==He||We.morphNormals!==Rt||We.morphColors!==xn||We.toneMapping!==Qt||We.morphTargetsCount!==wt)&&(vt=!0):(vt=!0,We.__version=J.version);let ws=We.currentProgram;vt===!0&&(ws=tl(J,W,Y));let DA=!1,Po=!1,xh=!1;const Jt=ws.getUniforms(),qi=We.uniforms;if(z.useProgram(ws.program)&&(DA=!0,Po=!0,xh=!0),J.id!==B&&(B=J.id,Po=!0),DA||y!==b){Jt.setValue($,"projectionMatrix",b.projectionMatrix),Jt.setValue($,"viewMatrix",b.matrixWorldInverse);const Rn=Jt.map.cameraPosition;Rn!==void 0&&Rn.setValue($,be.setFromMatrixPosition(b.matrixWorld)),P.logarithmicDepthBuffer&&Jt.setValue($,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&Jt.setValue($,"isOrthographic",b.isOrthographicCamera===!0),y!==b&&(y=b,Po=!0,xh=!0)}if(Y.isSkinnedMesh){Jt.setOptional($,Y,"bindMatrix"),Jt.setOptional($,Y,"bindMatrixInverse");const Rn=Y.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),Jt.setValue($,"boneTexture",Rn.boneTexture,E))}Y.isBatchedMesh&&(Jt.setOptional($,Y,"batchingTexture"),Jt.setValue($,"batchingTexture",Y._matricesTexture,E));const Sh=j.morphAttributes;if((Sh.position!==void 0||Sh.normal!==void 0||Sh.color!==void 0)&&Ee.update(Y,j,ws),(Po||We.receiveShadow!==Y.receiveShadow)&&(We.receiveShadow=Y.receiveShadow,Jt.setValue($,"receiveShadow",Y.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(qi.envMap.value=Pe,qi.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&W.environment!==null&&(qi.envMapIntensity.value=W.environmentIntensity),Po&&(Jt.setValue($,"toneMappingExposure",_.toneMappingExposure),We.needsLights&&Yy(qi,xh),_e&&J.fog===!0&&re.refreshFogUniforms(qi,_e),re.refreshMaterialUniforms(qi,J,q,X,A.state.transmissionRenderTarget),yc.upload($,BA(We),qi,E)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(yc.upload($,BA(We),qi,E),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&Jt.setValue($,"center",Y.center),Jt.setValue($,"modelViewMatrix",Y.modelViewMatrix),Jt.setValue($,"normalMatrix",Y.normalMatrix),Jt.setValue($,"modelMatrix",Y.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Rn=J.uniformsGroups;for(let Ih=0,jy=Rn.length;Ih<jy;Ih++){const LA=Rn[Ih];Xe.update(LA,ws),Xe.bind(LA,ws)}}return ws}function Yy(b,W){b.ambientLightColor.needsUpdate=W,b.lightProbe.needsUpdate=W,b.directionalLights.needsUpdate=W,b.directionalLightShadows.needsUpdate=W,b.pointLights.needsUpdate=W,b.pointLightShadows.needsUpdate=W,b.spotLights.needsUpdate=W,b.spotLightShadows.needsUpdate=W,b.rectAreaLights.needsUpdate=W,b.hemisphereLights.needsUpdate=W}function Ky(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return M},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(b,W,j){S.get(b.texture).__webglTexture=W,S.get(b.depthTexture).__webglTexture=j;const J=S.get(b);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=j===void 0,J.__autoAllocateDepthBuffer||T.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,W){const j=S.get(b);j.__webglFramebuffer=W,j.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(b,W=0,j=0){w=b,M=W,I=j;let J=!0,Y=null,_e=!1,Se=!1;if(b){const Pe=S.get(b);Pe.__useDefaultFramebuffer!==void 0?(z.bindFramebuffer($.FRAMEBUFFER,null),J=!1):Pe.__webglFramebuffer===void 0?E.setupRenderTarget(b):Pe.__hasExternalTextures&&E.rebindTextures(b,S.get(b.texture).__webglTexture,S.get(b.depthTexture).__webglTexture);const Ge=b.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Se=!0);const Qe=S.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?Y=Qe[W][j]:Y=Qe[W],_e=!0):b.samples>0&&E.useMultisampledRTT(b)===!1?Y=S.get(b).__webglMultisampledFramebuffer:Array.isArray(Qe)?Y=Qe[j]:Y=Qe,v.copy(b.viewport),U.copy(b.scissor),V=b.scissorTest}else v.copy(ne).multiplyScalar(q).floor(),U.copy(ae).multiplyScalar(q).floor(),V=ge;if(z.bindFramebuffer($.FRAMEBUFFER,Y)&&J&&z.drawBuffers(b,Y),z.viewport(v),z.scissor(U),z.setScissorTest(V),_e){const Pe=S.get(b.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+W,Pe.__webglTexture,j)}else if(Se){const Pe=S.get(b.texture),Ge=W||0;$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,Pe.__webglTexture,j||0,Ge)}B=-1},this.readRenderTargetPixels=function(b,W,j,J,Y,_e,Se){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=S.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Se!==void 0&&(Te=Te[Se]),Te){z.bindFramebuffer($.FRAMEBUFFER,Te);try{const Pe=b.texture,Ge=Pe.format,Qe=Pe.type;if(Ge!==It&&Je.convert(Ge)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Qe===Xt&&(T.has("EXT_color_buffer_half_float")||T.has("EXT_color_buffer_float"));if(Qe!==Tt&&Je.convert(Qe)!==$.getParameter($.IMPLEMENTATION_COLOR_READ_TYPE)&&Qe!==Ft&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=b.width-J&&j>=0&&j<=b.height-Y&&$.readPixels(W,j,J,Y,Je.convert(Ge),Je.convert(Qe),_e)}finally{const Pe=w!==null?S.get(w).__webglFramebuffer:null;z.bindFramebuffer($.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(b,W,j=0){const J=Math.pow(2,-j),Y=Math.floor(W.image.width*J),_e=Math.floor(W.image.height*J);E.setTexture2D(W,0),$.copyTexSubImage2D($.TEXTURE_2D,j,0,0,b.x,b.y,Y,_e),z.unbindTexture()},this.copyTextureToTexture=function(b,W,j,J=0){const Y=W.image.width,_e=W.image.height,Se=Je.convert(j.format),Te=Je.convert(j.type);E.setTexture2D(j,0),$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,j.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,j.unpackAlignment),W.isDataTexture?$.texSubImage2D($.TEXTURE_2D,J,b.x,b.y,Y,_e,Se,Te,W.image.data):W.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,J,b.x,b.y,W.mipmaps[0].width,W.mipmaps[0].height,Se,W.mipmaps[0].data):$.texSubImage2D($.TEXTURE_2D,J,b.x,b.y,Se,Te,W.image),J===0&&j.generateMipmaps&&$.generateMipmap($.TEXTURE_2D),z.unbindTexture()},this.copyTextureToTexture3D=function(b,W,j,J,Y=0){const _e=Math.round(b.max.x-b.min.x),Se=Math.round(b.max.y-b.min.y),Te=b.max.z-b.min.z+1,Pe=Je.convert(J.format),Ge=Je.convert(J.type);let Qe;if(J.isData3DTexture)E.setTexture3D(J,0),Qe=$.TEXTURE_3D;else if(J.isDataArrayTexture||J.isCompressedArrayTexture)E.setTexture2DArray(J,0),Qe=$.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}$.pixelStorei($.UNPACK_FLIP_Y_WEBGL,J.flipY),$.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,J.premultiplyAlpha),$.pixelStorei($.UNPACK_ALIGNMENT,J.unpackAlignment);const He=$.getParameter($.UNPACK_ROW_LENGTH),Rt=$.getParameter($.UNPACK_IMAGE_HEIGHT),xn=$.getParameter($.UNPACK_SKIP_PIXELS),Qt=$.getParameter($.UNPACK_SKIP_ROWS),vi=$.getParameter($.UNPACK_SKIP_IMAGES),wt=j.isCompressedTexture?j.mipmaps[Y]:j.image;$.pixelStorei($.UNPACK_ROW_LENGTH,wt.width),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,wt.height),$.pixelStorei($.UNPACK_SKIP_PIXELS,b.min.x),$.pixelStorei($.UNPACK_SKIP_ROWS,b.min.y),$.pixelStorei($.UNPACK_SKIP_IMAGES,b.min.z),j.isDataTexture||j.isData3DTexture?$.texSubImage3D(Qe,Y,W.x,W.y,W.z,_e,Se,Te,Pe,Ge,wt.data):J.isCompressedArrayTexture?$.compressedTexSubImage3D(Qe,Y,W.x,W.y,W.z,_e,Se,Te,Pe,wt.data):$.texSubImage3D(Qe,Y,W.x,W.y,W.z,_e,Se,Te,Pe,Ge,wt),$.pixelStorei($.UNPACK_ROW_LENGTH,He),$.pixelStorei($.UNPACK_IMAGE_HEIGHT,Rt),$.pixelStorei($.UNPACK_SKIP_PIXELS,xn),$.pixelStorei($.UNPACK_SKIP_ROWS,Qt),$.pixelStorei($.UNPACK_SKIP_IMAGES,vi),Y===0&&J.generateMipmaps&&$.generateMipmap(Qe),z.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?E.setTextureCube(b,0):b.isData3DTexture?E.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?E.setTexture2DArray(b,0):E.setTexture2D(b,0),z.unbindTexture()},this.resetState=function(){M=0,I=0,w=null,z.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===fh?"display-p3":"srgb",t.unpackColorSpace=st.workingColorSpace===$a?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class ys extends ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new kn,this.environmentIntensity=1,this.environmentRotation=new kn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class rR{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=af,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return ZE("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const cn=new L;class fA{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=$n(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=lt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=lt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=$n(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=$n(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=$n(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=$n(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=lt(t,this.array),n=lt(n,this.array),s=lt(s,this.array),r=lt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fA(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Mm=new L,wm=new ht,bm=new ht,oR=new L,Tm=new Le,Bl=new L,lu=new Gn,Bm=new Le,cu=new Xa;class aR extends ut{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=pp,this.bindMatrix=new Le,this.bindMatrixInverse=new Le,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bl),this.boundingBox.expandByPoint(Bl)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Gn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Bl),this.boundingSphere.expandByPoint(Bl)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),lu.copy(this.boundingSphere),lu.applyMatrix4(s),e.ray.intersectsSphere(lu)!==!1&&(Bm.copy(s).invert(),cu.copy(e.ray).applyMatrix4(Bm),!(this.boundingBox!==null&&cu.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,cu)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ht,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===pp?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===gC?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;wm.fromBufferAttribute(s.attributes.skinIndex,e),bm.fromBufferAttribute(s.attributes.skinWeight,e),Mm.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=bm.getComponent(r);if(o!==0){const a=wm.getComponent(r);Tm.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(oR.copy(Mm).applyMatrix4(Tm),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class mv extends ft{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ya extends _t{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Pt,h=Pt,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Rm=new Le,lR=new Le;class AA{constructor(e=[],t=[]){this.uuid=Jn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Le)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Le;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:lR;Rm.multiplyMatrices(a,t[r]),Rm.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new AA(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ya(t,e,e,It,Ft);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new mv),this.bones.push(o),this.boneInverses.push(new Le().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class hf extends Ct{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Dr=new Le,Dm=new Le,Rl=[],Lm=new pn,cR=new Le,ko=new ut,Go=new Gn;class hR extends ut{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hf(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,cR)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Dr),Lm.copy(e.boundingBox).applyMatrix4(Dr),this.boundingBox.union(Lm)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Dr),Go.copy(e.boundingSphere).applyMatrix4(Dr),this.boundingSphere.union(Go)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(ko.geometry=this.geometry,ko.material=this.material,ko.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Go.copy(this.boundingSphere),Go.applyMatrix4(n),e.ray.intersectsSphere(Go)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Dr),Dm.multiplyMatrices(n,Dr),ko.matrixWorld=Dm,ko.raycast(e,Rl);for(let o=0,a=Rl.length;o<a;o++){const l=Rl[o];l.instanceId=r,l.object=this,t.push(l)}Rl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hf(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ya(new Float32Array(s*this.count),s,this.count,Zs,Ft));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class gv extends Zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new De(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Pm=new L,Fm=new L,Um=new Le,hu=new Xa,Dl=new Gn;class pA extends ft{constructor(e=new Bn,t=new gv){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Pm.fromBufferAttribute(t,s-1),Fm.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Pm.distanceTo(Fm);e.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dl.copy(n.boundingSphere),Dl.applyMatrix4(s),Dl.radius+=r,e.ray.intersectsSphere(Dl)===!1)return;Um.copy(s).invert(),hu.copy(e.ray).applyMatrix4(Um);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new L,h=new L,u=new L,d=new L,f=this.isLineSegments?2:1,m=n.index,A=n.attributes.position;if(m!==null){const p=Math.max(0,o.start),x=Math.min(m.count,o.start+o.count);for(let _=p,C=x-1;_<C;_+=f){const M=m.getX(_),I=m.getX(_+1);if(c.fromBufferAttribute(A,M),h.fromBufferAttribute(A,I),hu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const B=e.ray.origin.distanceTo(d);B<e.near||B>e.far||t.push({distance:B,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const p=Math.max(0,o.start),x=Math.min(A.count,o.start+o.count);for(let _=p,C=x-1;_<C;_+=f){if(c.fromBufferAttribute(A,_),h.fromBufferAttribute(A,_+1),hu.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const I=e.ray.origin.distanceTo(d);I<e.near||I>e.far||t.push({distance:I,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const Nm=new L,Om=new L;class uR extends pA{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Nm.fromBufferAttribute(t,s),Om.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Nm.distanceTo(Om);e.setAttribute("lineDistance",new Tn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class dR extends pA{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class _v extends Zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new De(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Qm=new Le,uf=new Xa,Ll=new Gn,Pl=new L;class fR extends ft{constructor(e=new Bn,t=new _v){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(s),Ll.radius+=r,e.ray.intersectsSphere(Ll)===!1)return;Qm.copy(s).invert(),uf.copy(e.ray).applyMatrix4(Qm);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,g=f;m<g;m++){const A=c.getX(m);Pl.fromBufferAttribute(u,A),km(Pl,A,l,s,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,g=f;m<g;m++)Pl.fromBufferAttribute(u,m),km(Pl,m,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function km(i,e,t,n,s,r,o){const a=uf.distanceSqToPoint(i);if(a<t){const l=new L;uf.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:o})}}class AR extends _t{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:nt,this.magFilter=r!==void 0?r:nt,this.generateMipmaps=!1;const h=this;function u(){h.needsUpdate=!0,e.requestVideoFrameCallback(u)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(u)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class sr extends _t{constructor(e,t,n,s,r,o,a,l,c,h,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class pR extends sr{constructor(e,t,n,s,r,o){super(e,t,n,r,o),this.isCompressedArrayTexture=!0,this.image.depth=s,this.wrapR=Bt}}class mR extends sr{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,rr),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class Ev extends _t{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class mA extends Bn{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,d=new L,f=[],m=[],g=[],A=[];for(let p=0;p<=n;p++){const x=[],_=p/n;let C=0;p===0&&o===0?C=.5/t:p===n&&l===Math.PI&&(C=-.5/t);for(let M=0;M<=t;M++){const I=M/t;u.x=-e*Math.cos(s+I*r)*Math.sin(o+_*a),u.y=e*Math.cos(o+_*a),u.z=e*Math.sin(s+I*r)*Math.sin(o+_*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),A.push(I+C,1-_),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const _=h[p][x+1],C=h[p][x],M=h[p+1][x],I=h[p+1][x+1];(p!==0||o>0)&&f.push(_,C,I),(p!==n-1||l<Math.PI)&&f.push(C,M,I)}this.setIndex(f),this.setAttribute("position",new Tn(m,3)),this.setAttribute("normal",new Tn(g,3)),this.setAttribute("uv",new Tn(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mA(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Na extends Zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=KE,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new kn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends Na{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ht(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new De(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new De(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new De(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Fl(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function gR(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function _R(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function Gm(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function vv(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Ka{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class ER extends Ka{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zr,endingEnd:Zr}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case eo:r=e,a=2*t-n;break;case Gc:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case eo:o=e,l=2*n-t;break;case Gc:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-t)/(s-t),g=m*m,A=g*m,p=-d*A+2*d*g-d*m,x=(1+d)*A+(-1.5-2*d)*g+(-.5+d)*m+1,_=(-1-f)*A+(1.5+f)*g+.5*m,C=f*A-f*g;for(let M=0;M!==a;++M)r[M]=p*o[h+M]+x*o[c+M]+_*o[l+M]+C*o[u+M];return r}}class yv extends Ka{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class vR extends Ka{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class _i{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fl(t,this.TimeBufferType),this.values=Fl(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fl(e.times,Array),values:Fl(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new vR(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new yv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ER(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Eo:t=this.InterpolantFactoryMethodDiscrete;break;case lr:t=this.InterpolantFactoryMethodLinear;break;case Uh:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Eo;case this.InterpolantFactoryMethodLinear:return lr;case this.InterpolantFactoryMethodSmooth:return Uh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&gR(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Uh,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){const g=t[u+m];if(g!==t[d+m]||g!==t[f+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}_i.prototype.TimeBufferType=Float32Array;_i.prototype.ValueBufferType=Float32Array;_i.prototype.DefaultInterpolation=lr;class Ro extends _i{}Ro.prototype.ValueTypeName="bool";Ro.prototype.ValueBufferType=Array;Ro.prototype.DefaultInterpolation=Eo;Ro.prototype.InterpolantFactoryMethodLinear=void 0;Ro.prototype.InterpolantFactoryMethodSmooth=void 0;class xv extends _i{}xv.prototype.ValueTypeName="color";class xo extends _i{}xo.prototype.ValueTypeName="number";class yR extends Ka{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)bn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class cr extends _i{InterpolantFactoryMethodLinear(e){return new yR(this.times,this.values,this.getValueSize(),e)}}cr.prototype.ValueTypeName="quaternion";cr.prototype.DefaultInterpolation=lr;cr.prototype.InterpolantFactoryMethodSmooth=void 0;class Do extends _i{}Do.prototype.ValueTypeName="string";Do.prototype.ValueBufferType=Array;Do.prototype.DefaultInterpolation=Eo;Do.prototype.InterpolantFactoryMethodLinear=void 0;Do.prototype.InterpolantFactoryMethodSmooth=void 0;class So extends _i{}So.prototype.ValueTypeName="vector";class df{constructor(e="",t=-1,n=[],s=rA){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Jn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(SR(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(_i.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=_R(l);l=Gm(l,1,h),c=Gm(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new xo(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,m,g){if(f.length!==0){const A=[],p=[];vv(f,A,p,m),A.length!==0&&g.push(new u(d,A,p))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let m;for(m=0;m<d.length;m++)if(d[m].morphTargets)for(let g=0;g<d[m].morphTargets.length;g++)f[d[m].morphTargets[g]]=-1;for(const g in f){const A=[],p=[];for(let x=0;x!==d[m].morphTargets.length;++x){const _=d[m];A.push(_.time),p.push(_.morphTarget===g?1:0)}s.push(new xo(".morphTargetInfluence["+g+"]",A,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(So,f+".position",d,"pos",s),n(cr,f+".quaternion",d,"rot",s),n(So,f+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function xR(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xo;case"vector":case"vector2":case"vector3":case"vector4":return So;case"color":return xv;case"quaternion":return cr;case"bool":case"boolean":return Ro;case"string":return Do}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function SR(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=xR(i.type);if(i.times===void 0){const t=[],n=[];vv(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const As={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Sv{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null}}}const IR=new Sv;class Ei{constructor(e){this.manager=e!==void 0?e:IR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ei.DEFAULT_MATERIAL_NAME="__DEFAULT";const Mi={};class CR extends Error{constructor(e,t){super(e),this.response=t}}class Vi extends Ei{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=As.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Mi[e]!==void 0){Mi[e].push({onLoad:t,onProgress:n,onError:s});return}Mi[e]=[],Mi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Mi[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,m=f!==0;let g=0;const A=new ReadableStream({start(p){x();function x(){u.read().then(({done:_,value:C})=>{if(_)p.close();else{g+=C.byteLength;const M=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:f});for(let I=0,w=h.length;I<w;I++){const B=h[I];B.onProgress&&B.onProgress(M)}p.enqueue(C),x()}})}}});return new Response(A)}else throw new CR(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(m=>f.decode(m))}}}).then(c=>{As.add(e,c);const h=Mi[e];delete Mi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Mi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Mi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class MR extends Ei{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=As.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ua("img");function l(){h(),As.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class wR extends Ei{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Ya,a=new Vi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Bt,o.wrapT=c.wrapT!==void 0?c.wrapT:Bt,o.magFilter=c.magFilter!==void 0?c.magFilter:nt,o.minFilter=c.minFilter!==void 0?c.minFilter:nt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=_n),c.mipmapCount===1&&(o.minFilter=nt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,s),o}}class Iv extends Ei{constructor(e){super(e)}load(e,t,n,s){const r=new _t,o=new MR(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ph extends ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const uu=new Le,Hm=new L,Vm=new L;class gA{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.map=null,this.mapPass=null,this.matrix=new Le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hA,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Hm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hm),Vm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Vm),t.updateMatrixWorld(),uu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(uu),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(uu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class bR extends gA{constructor(){super(new Vt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=vo*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class TR extends ph{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new bR}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const zm=new Le,Ho=new L,du=new L;class BR extends gA{constructor(){super(new Vt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Re(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ho.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ho),du.copy(n.position),du.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(du),n.updateMatrixWorld(),s.makeTranslation(-Ho.x,-Ho.y,-Ho.z),zm.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zm)}}class Cv extends ph{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new BR}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class RR extends gA{constructor(){super(new To(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mv extends ph{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ft.DEFAULT_UP),this.updateMatrix(),this.target=new ft,this.shadow=new RR}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class DR{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new L)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,s=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.282095),t.addScaledVector(o[1],.488603*s),t.addScaledVector(o[2],.488603*r),t.addScaledVector(o[3],.488603*n),t.addScaledVector(o[4],1.092548*(n*s)),t.addScaledVector(o[5],1.092548*(s*r)),t.addScaledVector(o[6],.315392*(3*r*r-1)),t.addScaledVector(o[7],1.092548*(n*r)),t.addScaledVector(o[8],.546274*(n*n-s*s)),t}getIrradianceAt(e,t){const n=e.x,s=e.y,r=e.z,o=this.coefficients;return t.copy(o[0]).multiplyScalar(.886227),t.addScaledVector(o[1],2*.511664*s),t.addScaledVector(o[2],2*.511664*r),t.addScaledVector(o[3],2*.511664*n),t.addScaledVector(o[4],2*.429043*n*s),t.addScaledVector(o[5],2*.429043*s*r),t.addScaledVector(o[6],.743125*r*r-.247708),t.addScaledVector(o[7],2*.429043*n*r),t.addScaledVector(o[8],.429043*(n*n-s*s)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].fromArray(e,t+s*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let s=0;s<9;s++)n[s].toArray(e,t+s*3);return e}static getBasisAt(e,t){const n=e.x,s=e.y,r=e.z;t[0]=.282095,t[1]=.488603*s,t[2]=.488603*r,t[3]=.488603*n,t[4]=1.092548*n*s,t[5]=1.092548*s*r,t[6]=.315392*(3*r*r-1),t[7]=1.092548*n*r,t[8]=.546274*(n*n-s*s)}}class LR extends ph{constructor(e=new DR,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class wa{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class PR extends Ei{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=As.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return As.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),As.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});As.add(e,l),r.manager.itemStart(e)}}class FR{constructor(e,t,n){this.binding=e,this.valueSize=n;let s,r,o;switch(t){case"quaternion":s=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,s=this.valueSize,r=e*s+s;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==s;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,s)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,s,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,s=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,s,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,s);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,s=n*this._origIndex;e.getValue(t,s);for(let r=n,o=s;r!==o;++r)t[r]=t[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,s,r){if(s>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,s){bn.slerpFlat(e,t,e,t,e,n,s)}_slerpAdditive(e,t,n,s,r){const o=this._workIndex*r;bn.multiplyQuaternionsFlat(e,o,e,t,e,n),bn.slerpFlat(e,t,e,t,e,o,s)}_lerp(e,t,n,s,r){const o=1-s;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*s}}_lerpAdditive(e,t,n,s,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*s}}}const _A="\\[\\]\\.:\\/",UR=new RegExp("["+_A+"]","g"),EA="[^"+_A+"]",NR="[^"+_A.replace("\\.","")+"]",OR=/((?:WC+[\/:])*)/.source.replace("WC",EA),QR=/(WCOD+)?/.source.replace("WCOD",NR),kR=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",EA),GR=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",EA),HR=new RegExp("^"+OR+QR+kR+GR+"$"),VR=["material","materials","bones","map"];class zR{constructor(e,t,n){const s=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(UR,"")}static parseTrackName(e){const t=HR.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);VR.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=zR;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class WR{constructor(e,t,n=null,s=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=s;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:Zr,endingEnd:Zr};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=iA,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const s=this._clip.duration,r=e._clip.duration,o=r/s,a=s/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const s=this._mixer,r=s.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=s._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,s){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case IC:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case rA:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(s,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(e)[0];t*=s,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let s=this.time+e,r=this._loopCount;const o=n===sA;if(e===0)return r===-1?s:o&&(r&1)===1?t-s:s;if(n===XE){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(s>=t)s=t;else if(s<0)s=0;else{this.time=s;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),s>=t||s<0){const a=Math.floor(s/t);s-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=e>0?t:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=s;if(o&&(r&1)===1)return t-s}return s}_setEndings(e,t,n){const s=this._interpolantSettings;n?(s.endingStart=eo,s.endingEnd=eo):(e?s.endingStart=this.zeroSlopeAtStart?eo:Zr:s.endingStart=Gc,t?s.endingEnd=this.zeroSlopeAtEnd?eo:Zr:s.endingEnd=Gc)}_scheduleFading(e,t,n){const s=this._mixer,r=s.time;let o=this._weightInterpolant;o===null&&(o=s._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const qR=new Float32Array(1);class $R extends ni{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,s=e._clip.tracks,r=s.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=s[u],f=d.name;let m=h[f];if(m!==void 0)++m.referenceCount,o[u]=m;else{if(m=o[u],m!==void 0){m._cacheIndex===null&&(++m.referenceCount,this._addInactiveBinding(m,l,f));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;m=new FR(Ze.create(n,f,g),d.ValueTypeName,d.getValueSize()),++m.referenceCount,this._addInactiveBinding(m,l,f),o[u]=m}a[u].resultBuffer=m.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,s=e._clip.uuid,r=this._actionsByClip[s];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,s,n)}const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const s=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=s.length,s.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],s=e._cacheIndex;n._cacheIndex=s,t[s]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,s=t.length;n!==s;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,s=this._nActiveActions++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,s=--this._nActiveActions,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const s=this._bindingsByRootAndName,r=this._bindings;let o=s[t];o===void 0&&(o={},s[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,s=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[s],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[s]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,s=this._nActiveBindings++,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,s=--this._nActiveBindings,r=t[s];e._cacheIndex=s,t[s]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new yv(new Float32Array(2),new Float32Array(2),1,qR),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,s=--this._nActiveControlInterpolants,r=t[s];e.__cacheIndex=s,t[s]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const s=t||this._root,r=s.uuid;let o=typeof e=="string"?df.findByName(s,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=rA),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new WR(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,s=n.uuid,r=typeof e=="string"?df.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[s]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,s=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(s,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class vA{constructor(e){this.value=e}clone(){return new vA(this.value.clone===void 0?this.value:this.value.clone())}}const Wm=new Le;class XR{constructor(e,t,n=0,s=1/0){this.ray=new Xa(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new lA,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Wm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Wm),this}intersectObject(e,t=!0,n=[]){return ff(e,this,n,t),n.sort(qm),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ff(e[s],this,n,t);return n.sort(qm),n}}function qm(i,e){return i.distance-e.distance}function ff(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const s=i.children;for(let r=0,o=s.length;r<o;r++)ff(s[r],e,t,!0)}}class xc{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Ht(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zf);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Sc=window,yA=Sc.ShadowRoot&&(Sc.ShadyCSS===void 0||Sc.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,wv=Symbol(),$m=new WeakMap;let YR=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==wv)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(yA&&e===void 0){const n=t!==void 0&&t.length===1;n&&(e=$m.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&$m.set(t,e))}return e}toString(){return this.cssText}};const KR=i=>new YR(typeof i=="string"?i:i+"",void 0,wv),jR=(i,e)=>{yA?i.adoptedStyleSheets=e.map(t=>t instanceof CSSStyleSheet?t:t.styleSheet):e.forEach(t=>{const n=document.createElement("style"),s=Sc.litNonce;s!==void 0&&n.setAttribute("nonce",s),n.textContent=t.cssText,i.appendChild(n)})},Xm=yA?i=>i:i=>i instanceof CSSStyleSheet?(e=>{let t="";for(const n of e.cssRules)t+=n.cssText;return KR(t)})(i):i;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var fu;const $c=window,Ym=$c.trustedTypes,JR=Ym?Ym.emptyScript:"",Km=$c.reactiveElementPolyfillSupport,Af={toAttribute(i,e){switch(e){case Boolean:i=i?JR:null;break;case Object:case Array:i=i==null?i:JSON.stringify(i)}return i},fromAttribute(i,e){let t=i;switch(e){case Boolean:t=i!==null;break;case Number:t=i===null?null:Number(i);break;case Object:case Array:try{t=JSON.parse(i)}catch{t=null}}return t}},bv=(i,e)=>e!==i&&(e==e||i==i),Au={attribute:!0,type:String,converter:Af,reflect:!1,hasChanged:bv},pf="finalized";let Js=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();const e=[];return this.elementProperties.forEach((t,n)=>{const s=this._$Ep(n,t);s!==void 0&&(this._$Ev.set(s,n),e.push(s))}),e}static createProperty(e,t=Au){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){const n=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,n,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,n){return{get(){return this[t]},set(s){const r=this[e];this[t]=s,this.requestUpdate(e,r,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||Au}static finalize(){if(this.hasOwnProperty(pf))return!1;this[pf]=!0;const e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,n=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of n)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const n=new Set(e.flat(1/0).reverse());for(const s of n)t.unshift(Xm(s))}else e!==void 0&&t.push(Xm(e));return t}static _$Ep(e,t){const n=t.attribute;return n===!1?void 0:typeof n=="string"?n:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach(t=>t(this))}addController(e){var t,n;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((n=e.hostConnected)===null||n===void 0||n.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])})}createRenderRoot(){var e;const t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return jR(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostConnected)===null||n===void 0?void 0:n.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach(t=>{var n;return(n=t.hostDisconnected)===null||n===void 0?void 0:n.call(t)})}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$EO(e,t,n=Au){var s;const r=this.constructor._$Ep(e,n);if(r!==void 0&&n.reflect===!0){const o=(((s=n.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?n.converter:Af).toAttribute(t,n.type);this._$El=e,o==null?this.removeAttribute(r):this.setAttribute(r,o),this._$El=null}}_$AK(e,t){var n;const s=this.constructor,r=s._$Ev.get(e);if(r!==void 0&&this._$El!==r){const o=s.getPropertyOptions(r),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((n=o.converter)===null||n===void 0?void 0:n.fromAttribute)!==void 0?o.converter:Af;this._$El=r,this[r]=a.fromAttribute(t,o.type),this._$El=null}}requestUpdate(e,t,n){let s=!0;e!==void 0&&(((n=n||this.constructor.getPropertyOptions(e)).hasChanged||bv)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),n.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,n))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((s,r)=>this[r]=s),this._$Ei=void 0);let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),(e=this._$ES)===null||e===void 0||e.forEach(s=>{var r;return(r=s.hostUpdate)===null||r===void 0?void 0:r.call(s)}),this.update(n)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(n)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach(n=>{var s;return(s=n.hostUpdated)===null||s===void 0?void 0:s.call(n)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach((t,n)=>this._$EO(n,this[n],t)),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};Js[pf]=!0,Js.elementProperties=new Map,Js.elementStyles=[],Js.shadowRootOptions={mode:"open"},Km==null||Km({ReactiveElement:Js}),((fu=$c.reactiveElementVersions)!==null&&fu!==void 0?fu:$c.reactiveElementVersions=[]).push("1.6.3");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var pu;const Xc=window,Io=Xc.trustedTypes,jm=Io?Io.createPolicy("lit-html",{createHTML:i=>i}):void 0,mf="$lit$",cs=`lit$${(Math.random()+"").slice(9)}$`,Tv="?"+cs,ZR=`<${Tv}>`,hr=document,Oa=()=>hr.createComment(""),Qa=i=>i===null||typeof i!="object"&&typeof i!="function",Bv=Array.isArray,e1=i=>Bv(i)||typeof(i==null?void 0:i[Symbol.iterator])=="function",mu=`[ 	
\f\r]`,Vo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Jm=/-->/g,Zm=/>/g,Us=RegExp(`>|${mu}(?:([^\\s"'>=/]+)(${mu}*=${mu}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),eg=/'/g,tg=/"/g,Rv=/^(?:script|style|textarea|title)$/i,t1=i=>(e,...t)=>({_$litType$:i,strings:e,values:t}),mh=t1(1),Co=Symbol.for("lit-noChange"),zt=Symbol.for("lit-nothing"),ng=new WeakMap,er=hr.createTreeWalker(hr,129,null,!1);function Dv(i,e){if(!Array.isArray(i)||!i.hasOwnProperty("raw"))throw Error("invalid template strings array");return jm!==void 0?jm.createHTML(e):e}const n1=(i,e)=>{const t=i.length-1,n=[];let s,r=e===2?"<svg>":"",o=Vo;for(let a=0;a<t;a++){const l=i[a];let c,h,u=-1,d=0;for(;d<l.length&&(o.lastIndex=d,h=o.exec(l),h!==null);)d=o.lastIndex,o===Vo?h[1]==="!--"?o=Jm:h[1]!==void 0?o=Zm:h[2]!==void 0?(Rv.test(h[2])&&(s=RegExp("</"+h[2],"g")),o=Us):h[3]!==void 0&&(o=Us):o===Us?h[0]===">"?(o=s??Vo,u=-1):h[1]===void 0?u=-2:(u=o.lastIndex-h[2].length,c=h[1],o=h[3]===void 0?Us:h[3]==='"'?tg:eg):o===tg||o===eg?o=Us:o===Jm||o===Zm?o=Vo:(o=Us,s=void 0);const f=o===Us&&i[a+1].startsWith("/>")?" ":"";r+=o===Vo?l+ZR:u>=0?(n.push(c),l.slice(0,u)+mf+l.slice(u)+cs+f):l+cs+(u===-2?(n.push(void 0),a):f)}return[Dv(i,r+(i[t]||"<?>")+(e===2?"</svg>":"")),n]};class ka{constructor({strings:e,_$litType$:t},n){let s;this.parts=[];let r=0,o=0;const a=e.length-1,l=this.parts,[c,h]=n1(e,t);if(this.el=ka.createElement(c,n),er.currentNode=this.el.content,t===2){const u=this.el.content,d=u.firstChild;d.remove(),u.append(...d.childNodes)}for(;(s=er.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){const u=[];for(const d of s.getAttributeNames())if(d.endsWith(mf)||d.startsWith(cs)){const f=h[o++];if(u.push(d),f!==void 0){const m=s.getAttribute(f.toLowerCase()+mf).split(cs),g=/([.?@])?(.*)/.exec(f);l.push({type:1,index:r,name:g[2],strings:m,ctor:g[1]==="."?s1:g[1]==="?"?o1:g[1]==="@"?a1:gh})}else l.push({type:6,index:r})}for(const d of u)s.removeAttribute(d)}if(Rv.test(s.tagName)){const u=s.textContent.split(cs),d=u.length-1;if(d>0){s.textContent=Io?Io.emptyScript:"";for(let f=0;f<d;f++)s.append(u[f],Oa()),er.nextNode(),l.push({type:2,index:++r});s.append(u[d],Oa())}}}else if(s.nodeType===8)if(s.data===Tv)l.push({type:2,index:r});else{let u=-1;for(;(u=s.data.indexOf(cs,u+1))!==-1;)l.push({type:7,index:r}),u+=cs.length-1}r++}}static createElement(e,t){const n=hr.createElement("template");return n.innerHTML=e,n}}function Mo(i,e,t=i,n){var s,r,o,a;if(e===Co)return e;let l=n!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[n]:t._$Cl;const c=Qa(e)?void 0:e._$litDirective$;return(l==null?void 0:l.constructor)!==c&&((r=l==null?void 0:l._$AO)===null||r===void 0||r.call(l,!1),c===void 0?l=void 0:(l=new c(i),l._$AT(i,t,n)),n!==void 0?((o=(a=t)._$Co)!==null&&o!==void 0?o:a._$Co=[])[n]=l:t._$Cl=l),l!==void 0&&(e=Mo(i,l._$AS(i,e.values),l,n)),e}class i1{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;const{el:{content:n},parts:s}=this._$AD,r=((t=e==null?void 0:e.creationScope)!==null&&t!==void 0?t:hr).importNode(n,!0);er.currentNode=r;let o=er.nextNode(),a=0,l=0,c=s[0];for(;c!==void 0;){if(a===c.index){let h;c.type===2?h=new ja(o,o.nextSibling,this,e):c.type===1?h=new c.ctor(o,c.name,c.strings,this,e):c.type===6&&(h=new l1(o,this,e)),this._$AV.push(h),c=s[++l]}a!==(c==null?void 0:c.index)&&(o=er.nextNode(),a++)}return er.currentNode=hr,r}v(e){let t=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(e,n,t),t+=n.strings.length-2):n._$AI(e[t])),t++}}class ja{constructor(e,t,n,s){var r;this.type=2,this._$AH=zt,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=s,this._$Cp=(r=s==null?void 0:s.isConnected)===null||r===void 0||r}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode;const t=this._$AM;return t!==void 0&&(e==null?void 0:e.nodeType)===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Mo(this,e,t),Qa(e)?e===zt||e==null||e===""?(this._$AH!==zt&&this._$AR(),this._$AH=zt):e!==this._$AH&&e!==Co&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):e1(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==zt&&Qa(this._$AH)?this._$AA.nextSibling.data=e:this.$(hr.createTextNode(e)),this._$AH=e}g(e){var t;const{values:n,_$litType$:s}=e,r=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=ka.createElement(Dv(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===r)this._$AH.v(n);else{const o=new i1(r,this),a=o.u(this.options);o.v(n),this.$(a),this._$AH=o}}_$AC(e){let t=ng.get(e.strings);return t===void 0&&ng.set(e.strings,t=new ka(e)),t}T(e){Bv(this._$AH)||(this._$AH=[],this._$AR());const t=this._$AH;let n,s=0;for(const r of e)s===t.length?t.push(n=new ja(this.k(Oa()),this.k(Oa()),this,this.options)):n=t[s],n._$AI(r),s++;s<t.length&&(this._$AR(n&&n._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var n;for((n=this._$AP)===null||n===void 0||n.call(this,!1,!0,t);e&&e!==this._$AB;){const s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}}class gh{constructor(e,t,n,s,r){this.type=1,this._$AH=zt,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=r,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=zt}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,n,s){const r=this.strings;let o=!1;if(r===void 0)e=Mo(this,e,t,0),o=!Qa(e)||e!==this._$AH&&e!==Co,o&&(this._$AH=e);else{const a=e;let l,c;for(e=r[0],l=0;l<r.length-1;l++)c=Mo(this,a[n+l],t,l),c===Co&&(c=this._$AH[l]),o||(o=!Qa(c)||c!==this._$AH[l]),c===zt?e=zt:e!==zt&&(e+=(c??"")+r[l+1]),this._$AH[l]=c}o&&!s&&this.j(e)}j(e){e===zt?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class s1 extends gh{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===zt?void 0:e}}const r1=Io?Io.emptyScript:"";class o1 extends gh{constructor(){super(...arguments),this.type=4}j(e){e&&e!==zt?this.element.setAttribute(this.name,r1):this.element.removeAttribute(this.name)}}class a1 extends gh{constructor(e,t,n,s,r){super(e,t,n,s,r),this.type=5}_$AI(e,t=this){var n;if((e=(n=Mo(this,e,t,0))!==null&&n!==void 0?n:zt)===Co)return;const s=this._$AH,r=e===zt&&s!==zt||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,o=e!==zt&&(s===zt||r);r&&this.element.removeEventListener(this.name,this,s),o&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,n;typeof this._$AH=="function"?this._$AH.call((n=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&n!==void 0?n:this.element,e):this._$AH.handleEvent(e)}}class l1{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){Mo(this,e)}}const ig=Xc.litHtmlPolyfillSupport;ig==null||ig(ka,ja),((pu=Xc.litHtmlVersions)!==null&&pu!==void 0?pu:Xc.litHtmlVersions=[]).push("2.8.0");const Lv=(i,e,t)=>{var n,s;const r=(n=t==null?void 0:t.renderBefore)!==null&&n!==void 0?n:e;let o=r._$litPart$;if(o===void 0){const a=(s=t==null?void 0:t.renderBefore)!==null&&s!==void 0?s:null;r._$litPart$=o=new ja(e.insertBefore(Oa(),a),a,void 0,t??{})}return o._$AI(i),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */var gu,_u;class Ic extends Js{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;const n=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=n.firstChild),n}update(e){const t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Lv(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return Co}}Ic.finalized=!0,Ic._$litElement$=!0,(gu=globalThis.litElementHydrateSupport)===null||gu===void 0||gu.call(globalThis,{LitElement:Ic});const sg=globalThis.litElementPolyfillSupport;sg==null||sg({LitElement:Ic});((_u=globalThis.litElementVersions)!==null&&_u!==void 0?_u:globalThis.litElementVersions=[]).push("3.3.3");/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=navigator.xr!=null&&self.XRSession!=null&&navigator.xr.isSessionSupported!=null,Fv=Pv&&self.XRSession.prototype.requestHitTestSource!=null,Eu=self.ResizeObserver!=null,vu=self.IntersectionObserver!=null,Uv=Fv;(()=>{const i=navigator.userAgent||navigator.vendor||self.opera;let e=!1;return(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(i)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(i.substr(0,4)))&&(e=!0),e})();const c1=/android/i.test(navigator.userAgent),h1=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!self.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,u1=/firefox/i.test(navigator.userAgent),d1=/OculusBrowser/.test(navigator.userAgent),f1=c1&&!u1&&!d1,A1=!!(window.webkit&&window.webkit.messageHandlers),rg=(()=>{if(h1){if(A1)return!!/CriOS\/|EdgiOS\/|FxiOS\/|GSA\/|DuckDuckGo\//.test(navigator.userAgent);{const i=document.createElement("a");return!!(i.relList&&i.relList.supports&&i.relList.supports("ar"))}}else return!1})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nv=i=>i&&i!=="null"?p1(i):null,og=()=>{if(Uv)return;const i=[];throw Pv||i.push("WebXR Device API"),Fv||i.push("WebXR Hit Test API"),new Error(`The following APIs are required for AR, but are missing in this browser: ${i.join(", ")}`)},p1=i=>new URL(i,window.location.toString()).toString(),m1=(i,e)=>{let t=null;const n=(...s)=>{t==null&&(i(...s),t=self.setTimeout(()=>t=null,e))};return n.flush=()=>{t!=null&&(self.clearTimeout(t),t=null)},n},ag=(i,e)=>{let t=null;return(...n)=>{t!=null&&self.clearTimeout(t),t=self.setTimeout(()=>{t=null,i(...n)},e)}},ui=(i,e,t)=>Math.max(e,Math.min(t,i)),g1=1,gf=(()=>{const i=(()=>{var e;if(!((e=document.documentElement.getAttribute("itemtype"))===null||e===void 0)&&e.includes("schema.org/SearchResultsPage")||window.self!==window.top)return!0;const t=document.head!=null?Array.from(document.head.querySelectorAll("meta")):[];for(const n of t)if(n.name==="viewport")return!0;return!1})();return i||console.warn('No <meta name="viewport"> detected; <model-viewer> will cap pixel density at 1.'),()=>i?window.devicePixelRatio:g1})(),lg=(()=>{const i="model-viewer-debug-mode",e=new RegExp(`[?&]${i}(&|$)`);return()=>self.ModelViewerElement&&self.ModelViewerElement.debugMode||self.location&&self.location.search&&self.location.search.match(e)})(),_1=(i=0)=>new Promise(e=>setTimeout(e,i)),E1=(i,e,t=null)=>new Promise(n=>{function s(r){(!t||t(r))&&(n(r),i.removeEventListener(e,s))}i.addEventListener(e,s)});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ns=function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const v1=.5,y1=0,x1=1,S1=1,ua=Symbol("currentEnvironmentMap"),da=Symbol("currentBackground"),Yc=Symbol("updateEnvironment"),Ul=Symbol("cancelEnvironmentUpdate"),I1=i=>{var e,t,n;class s extends i{constructor(){super(...arguments),this.environmentImage=null,this.skyboxImage=null,this.shadowIntensity=y1,this.shadowSoftness=x1,this.exposure=S1,this.toneMapping="auto",this.skyboxHeight="0",this[e]=null,this[t]=null,this[n]=null}updated(o){super.updated(o),o.has("shadowIntensity")&&(this[he].setShadowIntensity(this.shadowIntensity*v1),this[on]()),o.has("shadowSoftness")&&(this[he].setShadowSoftness(this.shadowSoftness),this[on]()),o.has("exposure")&&(this[he].exposure=this.exposure,this[on]()),o.has("toneMapping")&&(this[he].toneMapping=this.toneMapping==="commerce"||this.toneMapping==="neutral"?eA:this.toneMapping==="agx"?QE:uh,this[on]()),(o.has("environmentImage")||o.has("skyboxImage"))&&this[wo]()&&this[Yc](),o.has("skyboxHeight")&&(this[he].setGroundedSkybox(),this[on]())}hasBakedShadow(){return this[he].bakedShadows.size>0}async[(e=ua,t=da,n=Ul,Yc)](){const{skyboxImage:o,environmentImage:a}=this;this[Ul]!=null&&(this[Ul](),this[Ul]=null);const{textureUtils:l}=this[rt];if(l==null)return;const c=this[ur].beginActivity("environment-update");try{const{environmentMap:h,skybox:u}=await l.generateEnvironmentMapAndSkybox(Nv(o),a,d=>c(ui(d,0,1)));this[ua]!==h&&(this[ua]=h,this.dispatchEvent(new CustomEvent("environment-change"))),u!=null?this[da]=u.name===h.name?h:u:this[da]=null,this[he].setEnvironmentAndSkybox(this[ua],this[da])}catch(h){if(h instanceof Error)throw this[he].setEnvironmentAndSkybox(null,null),h}finally{c(1)}}}return Ns([we({type:String,attribute:"environment-image"})],s.prototype,"environmentImage",void 0),Ns([we({type:String,attribute:"skybox-image"})],s.prototype,"skyboxImage",void 0),Ns([we({type:Number,attribute:"shadow-intensity"})],s.prototype,"shadowIntensity",void 0),Ns([we({type:Number,attribute:"shadow-softness"})],s.prototype,"shadowSoftness",void 0),Ns([we({type:Number})],s.prototype,"exposure",void 0),Ns([we({type:String,attribute:"tone-mapping"})],s.prototype,"toneMapping",void 0),Ns([we({type:String,attribute:"skybox-height"})],s.prototype,"skyboxHeight",void 0),s};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C1=mh`
<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" fill="#000000">
    <!-- NOTE(cdata): This SVG filter is a stop-gap until we can implement
         support for dynamic re-coloring of UI components -->
    <defs>
      <filter id="drop-shadow" x="-100%" y="-100%" width="300%" height="300%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="1"/>
        <feOffset dx="0" dy="0" result="offsetblur"/>
        <feFlood flood-color="#000000"/>
        <feComposite in2="offsetblur" operator="in"/>
        <feMerge>
          <feMergeNode/>
          <feMergeNode in="SourceGraphic"/>
        </feMerge>
      </filter>
    </defs>
    <path filter="url(#drop-shadow)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
    <path d="M0 0h24v24H0z" fill="none"/>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=mh`
<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">
    <defs>
        <path id="A" d="M.001.232h24.997V36H.001z" />
    </defs>
    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">
        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z" />
        <g transform="translate(11 3)">
            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4" />
            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000" />
            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff" />
            <g transform="translate(0 .769)">
                <mask id="B" fill="#fff">
                    <use xlink:href="#A" />
                </mask>
                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)" />
            </g>
        </g>
    </g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w1=mh`
<svg version="1.1" id="view_x5F_in_x5F_AR_x5F_icon"
	 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="24px"
	 viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve">
<rect id="Bounding_Box" x="0" y="0" fill="none" width="24" height="24"/>
<g id="Art_layer">
	<path d="M3,4c0-0.55,0.45-1,1-1h2V1H4C2.35,1,1,2.35,1,4v2h2V4z"/>
	<path d="M20,3c0.55,0,1,0.45,1,1v2h2V4c0-1.65-1.35-3-3-3h-2v2H20z"/>
	<path d="M4,21c-0.55,0-1-0.45-1-1v-2H1v2c0,1.65,1.35,3,3,3h2v-2H4z"/>
	<path d="M20,21c0.55,0,1-0.45,1-1v-2h2v2c0,1.65-1.35,3-3,3h-2v-2H20z"/>
	<g>
		<path d="M18.25,7.6l-5.5-3.18c-0.46-0.27-1.04-0.27-1.5,0L5.75,7.6C5.29,7.87,5,8.36,5,8.9v6.35c0,0.54,0.29,1.03,0.75,1.3
			l5.5,3.18c0.46,0.27,1.04,0.27,1.5,0l5.5-3.18c0.46-0.27,0.75-0.76,0.75-1.3V8.9C19,8.36,18.71,7.87,18.25,7.6z M7,14.96v-4.62
			l4,2.32v4.61L7,14.96z M12,10.93L8,8.61l4-2.31l4,2.31L12,10.93z M13,17.27v-4.61l4-2.32v4.62L13,17.27z"/>
	</g>
</g>
</svg>`;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b1=mh`
<style>
:host {
  display: block;
  position: relative;
  contain: strict;
  width: 300px;
  height: 150px;
}

.container {
  position: relative;
  overflow: hidden;
}

.userInput {
  width: 100%;
  height: 100%;
  display: none;
  position: relative;
  outline-offset: -1px;
  outline-width: 1px;
}

canvas {
  position: absolute;
  display: none;
  pointer-events: none;
  /* NOTE(cdata): Chrome 76 and below apparently have a bug
   * that causes our canvas not to display pixels unless it is
   * on its own render layer
   * @see https://github.com/google/model-viewer/pull/755#issuecomment-536597893
   */
  transform: translateZ(0);
}

.show {
  display: block;
}

/* Adapted from HTML5 Boilerplate
 *
 * @see https://github.com/h5bp/html5-boilerplate/blob/ceb4620c78fc82e13534fc44202a3f168754873f/dist/css/main.css#L122-L133 */
.screen-reader-only {
  border: 0;
  left: 0;
  top: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
  pointer-events: none;
}

.slot {
  position: absolute;
  pointer-events: none;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.slot > * {
  pointer-events: initial;
}

.annotation-wrapper ::slotted(*) {
  opacity: var(--max-hotspot-opacity, 1);
  transition: opacity 0.3s;
}

.pointer-tumbling .annotation-wrapper ::slotted(*) {
  pointer-events: none;
}

.annotation-wrapper ::slotted(*) {
  pointer-events: initial;
}

.annotation-wrapper.hide ::slotted(*) {
  opacity: var(--min-hotspot-opacity, 0.25);
}

.slot.poster {
  display: none;
  background-color: inherit;
}

.slot.poster.show {
  display: inherit;
}

.slot.poster > * {
  pointer-events: initial;
}

.slot.poster:not(.show) > * {
  pointer-events: none;
}

#default-poster {
  width: 100%;
  height: 100%;
  /* The default poster is a <button> so we need to set display
   * to prevent it from being affected by text-align: */
  display: block;
  position: absolute;
  border: none;
  padding: 0;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-color: #fff0;
}

#default-progress-bar {
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
  pointer-events: none;
  overflow: hidden;
}

#default-progress-bar > .bar {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: var(--progress-bar-height, 5px);
  background-color: var(--progress-bar-color, rgba(0, 0, 0, 0.4));
  transition: transform 0.09s;
  transform-origin: top left;
  transform: scaleX(0);
  overflow: hidden;
}

#default-progress-bar > .bar.hide {
  transition: opacity 0.3s 1s;
  opacity: 0;
}

.centered {
  align-items: center;
  justify-content: center;
}

.cover {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

.slot.interaction-prompt {
  display: var(--interaction-prompt-display, flex);
  overflow: hidden;
  opacity: 0;
  will-change: opacity;
  transition: opacity 0.3s;
}

.slot.interaction-prompt.visible {
  opacity: 1;
}

.animated-container {
  will-change: transform, opacity;
  opacity: 0;
  transition: opacity 0.3s;
}

.slot.interaction-prompt > * {
  pointer-events: none;
}

.slot.ar-button {
  -moz-user-select: none;
  -webkit-tap-highlight-color: transparent;
  user-select: none;

  display: var(--ar-button-display, block);
}

.slot.ar-button:not(.enabled) {
  display: none;
}

.fab {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 40px;
  height: 40px;
  cursor: pointer;
  background-color: #fff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
  border-radius: 100px;
}

.fab > * {
  opacity: 0.87;
}

#default-ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  transform: scale(var(--ar-button-scale, 1));
  transform-origin: bottom right;
}

.slot.pan-target {
  display: block;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  top: 50%;
  transform: translate3d(-50%, -50%, 0);
  background-color: transparent;
  opacity: 0;
  transition: opacity 0.3s;
}

#default-pan-target {
  width: 6px;
  height: 6px;
  border-radius: 6px;
  border: 1px solid white;
  box-shadow: 0px 0px 2px 1px rgba(0, 0, 0, 0.8);
}

.slot.default {
  pointer-events: none;
}

.slot.progress-bar {
  pointer-events: none;
}

.slot.exit-webxr-ar-button {
  pointer-events: none;
}

.slot.exit-webxr-ar-button:not(.enabled) {
  display: none;
}

#default-exit-webxr-ar-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: env(safe-area-inset-top, 16px);
  right: 16px;
  width: 40px;
  height: 40px;
  box-sizing: border-box;
}

#default-exit-webxr-ar-button > svg {
  fill: #fff;
}
</style>
<div class="container">
  <div class="userInput" tabindex="0" role="img"
      aria-label="3D model">
      <div class="slot canvas">
        <slot name="canvas">
          <canvas></canvas>
        </slot>
      </div>

  </div>

  <!-- NOTE(cdata): We need to wrap slots because browsers without ShadowDOM
        will have their <slot> elements removed by ShadyCSS -->
  <div class="slot poster">
    <slot name="poster">
      <button type="button" id="default-poster" aria-hidden="true" aria-label="Loading 3D model"></button>
    </slot>
  </div>

  <div class="slot ar-button">
    <slot name="ar-button">
      <a id="default-ar-button" part="default-ar-button" class="fab"
          tabindex="2"
          role="button"
          href="javascript:void(0);"
          aria-label="View in your space">
        ${w1}
      </a>
    </slot>
  </div>

  <div class="slot pan-target">
    <slot name="pan-target">
      <div id="default-pan-target">
      </div>
    </slot>
  </div>

  <div class="slot interaction-prompt cover centered">
    <div id="prompt" class="animated-container">
      <slot name="interaction-prompt" aria-hidden="true">
        ${M1}
      </slot>
    </div>
  </div>

  <div id="finger0" class="animated-container cover">
    <slot name="finger0" aria-hidden="true">
    </slot>
  </div>
  <div id="finger1" class="animated-container cover">
    <slot name="finger1" aria-hidden="true">
    </slot>
  </div>

  <div class="slot default">
    <slot></slot>

    <div class="slot progress-bar">
      <slot name="progress-bar">
        <div id="default-progress-bar" aria-hidden="true">
          <div class="bar" part="default-progress-bar"></div>
        </div>
      </slot>
    </div>

    <div class="slot exit-webxr-ar-button">
      <slot name="exit-webxr-ar-button">
        <a id="default-exit-webxr-ar-button" part="default-exit-webxr-ar-button"
            tabindex="3"
            aria-label="Exit AR"
            aria-hidden="true">
          ${C1}
        </a>
      </slot>
    </div>
  </div>
</div>
<div class="screen-reader-only" role="region" aria-label="Live announcements">
  <span id="status" role="status"></span>
</div>`,T1=i=>{Lv(b1,i)},yu=new WeakMap;class B1 extends Ei{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){const r=new Vi(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,St).catch(n)}decodeDracoFile(e,t,n,s,r=ct,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(yu.has(e)){const l=yu.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(s=l,new Promise((c,h)=>{s._callbacks[r]={resolve:c,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),yu.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Bn;e.index&&t.setIndex(new Ct(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,l=new Ct(o,a);r==="color"&&(this._assignVertexColorSpace(l,s.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==St)return;const n=new De;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s).convertSRGBToLinear(),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Vi(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=R1.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function R1(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const f=t(u,d,new Int8Array(l),c),m=f.attributes.map(g=>g.array.buffer);f.index&&m.push(f.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:f},m)}catch(f){console.error(f),self.postMessage({type:"error",id:a.id,error:f.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const m=a.GetEncodedGeometryType(l);if(m===o.TRIANGULAR_MESH)d=new o.Mesh,f=a.DecodeArrayToMesh(l,l.byteLength,d);else if(m===o.POINT_CLOUD)d=new o.PointCloud,f=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const g={index:null,attributes:[]};for(const A in h){const p=self[u[A]];let x,_;if(c.useUniqueIDs)_=h[A],x=a.GetAttributeByUniqueId(d,_);else{if(_=a.GetAttributeId(d,o[h[A]]),_===-1)continue;x=a.GetAttribute(d,_)}const C=s(o,a,d,A,p,x);A==="color"&&(C.vertexColorSpace=c.vertexColorSpace),g.attributes.push(C)}return m===o.TRIANGULAR_MESH&&(g.index=n(o,a,d)),o.destroy(d),g}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:f,itemSize:1}}function s(o,a,l,c,h,u){const d=u.num_components(),m=l.num_points()*d,g=m*h.BYTES_PER_ELEMENT,A=r(o,h),p=o._malloc(g);a.GetAttributeDataArrayForAllPoints(l,u,A,g,p);const x=new h(o.HEAPF32.buffer,p,m).slice();return o._free(p),{name:c,array:x,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}function cg(i,e){if(e===CC)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===of||e===YE){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===of)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class D1 extends Ei{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new N1(t)}),this.register(function(t){return new q1(t)}),this.register(function(t){return new $1(t)}),this.register(function(t){return new X1(t)}),this.register(function(t){return new Q1(t)}),this.register(function(t){return new k1(t)}),this.register(function(t){return new G1(t)}),this.register(function(t){return new H1(t)}),this.register(function(t){return new U1(t)}),this.register(function(t){return new V1(t)}),this.register(function(t){return new O1(t)}),this.register(function(t){return new W1(t)}),this.register(function(t){return new z1(t)}),this.register(function(t){return new P1(t)}),this.register(function(t){return new Y1(t)}),this.register(function(t){return new K1(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=wa.extractUrlBase(e);o=wa.resolveURL(c,this.path)}else o=wa.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Vi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Ov){try{o[je.KHR_BINARY_GLTF]=new j1(e)}catch(u){s&&s(u);return}r=JSON.parse(o[je.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new hD(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case je.KHR_MATERIALS_UNLIT:o[u]=new F1;break;case je.KHR_DRACO_MESH_COMPRESSION:o[u]=new J1(r,this.dracoLoader);break;case je.KHR_TEXTURE_TRANSFORM:o[u]=new Z1;break;case je.KHR_MESH_QUANTIZATION:o[u]=new eD;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function L1(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const je={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class P1{constructor(e){this.parser=e,this.name=je.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new De(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],ct);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Mv(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Cv(h),c.distance=u;break;case"spot":c=new TR(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,as(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}let F1=class{constructor(){this.name=je.KHR_MATERIALS_UNLIT}getMaterialType(){return On}extendParams(e,t,n){const s=[];e.color=new De(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],ct),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,St))}return Promise.all(s)}},U1=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},N1=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Re(a,a)}return Promise.all(r)}},O1=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},Q1=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new De(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],ct)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,St)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},k1=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},G1=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new De().setRGB(a[0],a[1],a[2],ct),Promise.all(r)}},H1=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},V1=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new De().setRGB(a[0],a[1],a[2],ct),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,St)),Promise.all(r)}},z1=class{constructor(e){this.parser=e,this.name=je.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},W1=class{constructor(e){this.parser=e,this.name=je.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}};class q1{constructor(e){this.parser=e,this.name=je.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class $1{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class X1{constructor(e){this.parser=e,this.name=je.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Y1{constructor(e){this.name=je.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}}let K1=class{constructor(e){this.name=je.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==Pn.TRIANGLES&&c.mode!==Pn.TRIANGLE_STRIP&&c.mode!==Pn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const m of u){const g=new Le,A=new L,p=new bn,x=new L(1,1,1),_=new hR(m.geometry,m.material,d);for(let C=0;C<d;C++)l.TRANSLATION&&A.fromBufferAttribute(l.TRANSLATION,C),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,C),l.SCALE&&x.fromBufferAttribute(l.SCALE,C),_.setMatrixAt(C,g.compose(A,p,x));for(const C in l)if(C==="_COLOR_0"){const M=l[C];_.instanceColor=new hf(M.array,M.itemSize,M.normalized)}else C!=="TRANSLATION"&&C!=="ROTATION"&&C!=="SCALE"&&m.geometry.setAttribute(C,l[C]);ft.prototype.copy.call(_,m),this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}};const Ov="glTF",zo=12,hg={JSON:1313821514,BIN:5130562};class j1{constructor(e){this.name=je.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,zo),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Ov)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-zo,r=new DataView(e,zo);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===hg.JSON){const c=new Uint8Array(e,zo+o,a);this.content=n.decode(c)}else if(l===hg.BIN){const c=zo+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class J1{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=je.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=_f[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=_f[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=fo[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(const m in f.attributes){const g=f.attributes[m],A=l[m];A!==void 0&&(g.normalized=A)}u(f)},a,c,ct,d)})})}}class Z1{constructor(){this.name=je.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class eD{constructor(){this.name=je.KHR_MESH_QUANTIZATION}}class Qv extends Ka{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,f=d*u,m=e*c,g=m-c,A=-2*f+3*d,p=f-d,x=1-A,_=p-d+u;for(let C=0;C!==a;C++){const M=o[g+C+a],I=o[g+C+l]*h,w=o[m+C+a],B=o[m+C]*h;r[C]=x*M+_*I+A*w+p*B}return r}}const tD=new bn;class nD extends Qv{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return tD.fromArray(r).normalize().toArray(r),r}}const Pn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ug={9728:Pt,9729:nt,9984:Wa,9985:ir,9986:ds,9987:_n},dg={33071:Bt,33648:or,10497:ti},xu={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},_f={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},es={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},iD={CUBICSPLINE:void 0,LINEAR:lr,STEP:Eo},Su={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function sD(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Na({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ei})),i.DefaultMaterial}function Os(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function as(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function rD(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function oD(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function aD(i){let e;const t=i.extensions&&i.extensions[je.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Iu(t.attributes):e=i.indices+":"+Iu(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+Iu(i.targets[n]);return e}function Iu(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Ef(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function lD(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const cD=new Le;class hD{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new L1,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,s=navigator.userAgent.indexOf("Firefox")>-1,r=s?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||s&&r<98?this.textureLoader=new Iv(this.options.manager):this.textureLoader=new PR(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Vi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Os(r,a,s),as(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[je.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(wa.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=xu[s.type],a=fo[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Ct(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=xu[s.type],c=fo[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0;let g,A;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count;let _=t.cache.get(x);_||(g=new c(a,p*f,s.count*f/h),_=new rR(g,f/h),t.cache.add(x,_)),A=new fA(_,l,d%f/h,m)}else a===null?g=new c(s.count*l):g=new c(a,d,s.count*l),A=new Ct(g,l,m);if(s.sparse!==void 0){const p=xu.SCALAR,x=fo[s.sparse.indices.componentType],_=s.sparse.indices.byteOffset||0,C=s.sparse.values.byteOffset||0,M=new x(o[1],_,s.sparse.count*p),I=new c(o[2],C,s.sparse.count*l);a!==null&&(A=new Ct(A.array.slice(),A.itemSize,A.normalized));for(let w=0,B=M.length;w<B;w++){const y=M[w];if(A.setX(y,I[w*l]),l>=2&&A.setY(y,I[w*l+1]),l>=3&&A.setZ(y,I[w*l+2]),l>=4&&A.setW(y,I[w*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return A})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=ug[d.magFilter]||nt,h.minFilter=ug[d.minFilter]||_n,h.wrapS=dg[d.wrapS]||ti,h.wrapT=dg[d.wrapT]||ti,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let m=d;t.isImageBitmapLoader===!0&&(m=function(g){const A=new _t(g);A.needsUpdate=!0,d(A)}),t.load(wa.resolveURL(u,r.path),m,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=o.mimeType||lD(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[je.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[je.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[je.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new _v,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new gv,Zn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Na}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[je.KHR_MATERIALS_UNLIT]){const u=s[je.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new De(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],ct),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,St)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=rn);const h=r.alphaMode||Su.OPAQUE;if(h===Su.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Su.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==On&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Re(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==On&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==On){const u=r.emissiveFactor;a.emissive=new De().setRGB(u[0],u[1],u[2],ct)}return r.emissiveTexture!==void 0&&o!==On&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,St)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),as(u,r),t.associations.set(u,{materials:e}),r.extensions&&Os(s,u,r),u})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[je.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return fg(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=aD(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[je.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=fg(new Bn,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?sD(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,m=h.length;f<m;f++){const g=h[f],A=o[f];let p;const x=c[f];if(A.mode===Pn.TRIANGLES||A.mode===Pn.TRIANGLE_STRIP||A.mode===Pn.TRIANGLE_FAN||A.mode===void 0)p=r.isSkinnedMesh===!0?new aR(g,x):new ut(g,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),A.mode===Pn.TRIANGLE_STRIP?p.geometry=cg(p.geometry,YE):A.mode===Pn.TRIANGLE_FAN&&(p.geometry=cg(p.geometry,of));else if(A.mode===Pn.LINES)p=new uR(g,x);else if(A.mode===Pn.LINE_STRIP)p=new pA(g,x);else if(A.mode===Pn.LINE_LOOP)p=new dR(g,x);else if(A.mode===Pn.POINTS)p=new fR(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+A.mode);Object.keys(p.geometry.morphAttributes).length>0&&oD(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),as(p,r),A.extensions&&Os(s,p,A),t.assignFinalMaterial(p),u.push(p)}for(let f=0,m=u.length;f<m;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&Os(s,u[0],r),u[0];const d=new fs;r.extensions&&Os(s,d,r),t.associations.set(d,{meshes:e});for(let f=0,m=u.length;f<m;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Vt(qc.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new To(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),as(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Le;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new AA(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const f=s.channels[u],m=s.samplers[f.sampler],g=f.target,A=g.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,x=s.parameters!==void 0?s.parameters[m.output]:m.output;g.node!==void 0&&(o.push(this.getDependency("node",A)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(m),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],m=u[2],g=u[3],A=u[4],p=[];for(let x=0,_=d.length;x<_;x++){const C=d[x],M=f[x],I=m[x],w=g[x],B=A[x];if(C===void 0)continue;C.updateMatrix&&C.updateMatrix();const y=n._createAnimationTracks(C,M,I,w,B);if(y)for(let v=0;v<y.length;v++)p.push(y[v])}return new df(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,cD)});for(let f=0,m=u.length;f<m;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new mv:c.length>1?h=new fs:c.length===1?h=c[0]:h=new ft,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),as(h,r),r.extensions&&Os(n,h,r),r.matrix!==void 0){const u=new Le;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new fs;n.name&&(r.name=s.createUniqueName(n.name)),as(r,n),n.extensions&&Os(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of s.associations)(d instanceof Zn||d instanceof _t)&&u.set(d,f);return h.traverse(d=>{const f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];es[r.path]===es.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(es[r.path]){case es.weights:c=xo;break;case es.rotation:c=cr;break;case es.position:case es.scale:c=So;break;default:switch(n.itemSize){case 1:c=xo;break;case 2:case 3:default:c=So;break}break}const h=s.interpolation!==void 0?iD[s.interpolation]:lr,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const m=new c(l[d]+"."+es[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(m),o.push(m)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ef(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof cr?nD:Qv;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function uD(i,e,t){const n=e.attributes,s=new pn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new L(l[0],l[1],l[2]),new L(c[0],c[1],c[2])),a.normalized){const h=Ef(fo[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,l=new L;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){const g=Ef(fo[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Gn;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function fg(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=_f[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return st.workingColorSpace!==ct&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${st.workingColorSpace}" not supported.`),as(i,e),uD(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?rD(i,e.targets,t):i})}class dD{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const n=this.workersResolve[e];if(n&&n(t),this.queue.length){const{resolve:s,msg:r,transfer:o}=this.queue.shift();this.workersResolve[e]=s,this.workers[e].postMessage(r,o)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(n=>{const s=this._getIdleWorker();s!==-1?(this._initWorker(s),this.workerStatus|=1<<s,this.workersResolve[s]=n,this.workers[s].postMessage(e,t)):this.queue.push({resolve:n,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const fD=0,Ag=2,AD=1,pg=2,pD=0,mD=1,gD=10,_D=0,kv=9,Gv=15,Hv=16,Vv=22,zv=37,Wv=43,qv=76,$v=83,Xv=97,Yv=100,Kv=103,jv=109,Jv=165,Zv=166;class ED{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class Wo{constructor(e,t,n,s){this._dataView=new DataView(e.buffer,e.byteOffset+t,n),this._littleEndian=s,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_skip(e){return this._offset+=e,this}_scan(e,t=0){const n=this._offset;let s=0;for(;this._dataView.getUint8(this._offset)!==t&&s<e;)s++,this._offset++;return s<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+n,s)}}const hn=[171,75,84,88,32,50,48,187,13,10,26,10];function mg(i){return typeof TextDecoder<"u"?new TextDecoder().decode(i):Buffer.from(i).toString("utf8")}function vD(i){const e=new Uint8Array(i.buffer,i.byteOffset,hn.length);if(e[0]!==hn[0]||e[1]!==hn[1]||e[2]!==hn[2]||e[3]!==hn[3]||e[4]!==hn[4]||e[5]!==hn[5]||e[6]!==hn[6]||e[7]!==hn[7]||e[8]!==hn[8]||e[9]!==hn[9]||e[10]!==hn[10]||e[11]!==hn[11])throw new Error("Missing KTX 2.0 identifier.");const t=new ED,n=17*Uint32Array.BYTES_PER_ELEMENT,s=new Wo(i,hn.length,n,!0);t.vkFormat=s._nextUint32(),t.typeSize=s._nextUint32(),t.pixelWidth=s._nextUint32(),t.pixelHeight=s._nextUint32(),t.pixelDepth=s._nextUint32(),t.layerCount=s._nextUint32(),t.faceCount=s._nextUint32();const r=s._nextUint32();t.supercompressionScheme=s._nextUint32();const o=s._nextUint32(),a=s._nextUint32(),l=s._nextUint32(),c=s._nextUint32(),h=s._nextUint64(),u=s._nextUint64(),d=new Wo(i,hn.length+n,3*r*8,!0);for(let q=0;q<r;q++)t.levels.push({levelData:new Uint8Array(i.buffer,i.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const f=new Wo(i,o,a,!0),m={vendorId:f._skip(4)._nextUint16(),descriptorType:f._nextUint16(),versionNumber:f._nextUint16(),descriptorBlockSize:f._nextUint16(),colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},g=(m.descriptorBlockSize/4-6)/4;for(let q=0;q<g;q++){const Q={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&Q.channelType?(Q.sampleLower=f._nextInt32(),Q.sampleUpper=f._nextInt32()):(Q.sampleLower=f._nextUint32(),Q.sampleUpper=f._nextUint32()),m.samples[q]=Q}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(m);const A=new Wo(i,l,c,!0);for(;A._offset<c;){const q=A._nextUint32(),Q=A._scan(q),te=mg(Q),ne=A._scan(q-Q.byteLength);t.keyValue[te]=te.match(/^ktx/i)?mg(ne):ne,A._offset%4&&A._skip(4-A._offset%4)}if(u<=0)return t;const p=new Wo(i,h,u,!0),x=p._nextUint16(),_=p._nextUint16(),C=p._nextUint32(),M=p._nextUint32(),I=p._nextUint32(),w=p._nextUint32(),B=[];for(let q=0;q<r;q++)B.push({imageFlags:p._nextUint32(),rgbSliceByteOffset:p._nextUint32(),rgbSliceByteLength:p._nextUint32(),alphaSliceByteOffset:p._nextUint32(),alphaSliceByteLength:p._nextUint32()});const y=h+p._offset,v=y+C,U=v+M,V=U+I,D=new Uint8Array(i.buffer,i.byteOffset+y,C),G=new Uint8Array(i.buffer,i.byteOffset+v,M),H=new Uint8Array(i.buffer,i.byteOffset+U,I),X=new Uint8Array(i.buffer,i.byteOffset+V,w);return t.globalData={endpointCount:x,selectorCount:_,imageDescs:B,endpointsData:D,selectorsData:G,tablesData:H,extendedData:X},t}let Cu,Ui,vf;const Mu={env:{emscripten_notify_memory_growth:function(i){vf=new Uint8Array(Ui.exports.memory.buffer)}}};class yD{init(){return Cu||(Cu=typeof fetch<"u"?fetch("data:application/wasm;base64,"+gg).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,Mu)).then(this._init):WebAssembly.instantiate(Buffer.from(gg,"base64"),Mu).then(this._init),Cu)}_init(e){Ui=e.instance,Mu.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!Ui)throw new Error("ZSTDDecoder: Await .init() before decoding.");const n=e.byteLength,s=Ui.exports.malloc(n);vf.set(e,s),t=t||Number(Ui.exports.ZSTD_findDecompressedSize(s,n));const r=Ui.exports.malloc(t),o=Ui.exports.ZSTD_decompress(r,t,s,n),a=vf.slice(r,r+o);return Ui.exports.free(s),Ui.exports.free(r),a}}const gg="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQhBSAGQQR2IQRBICAAdCIAQQFyIQkgASgCACEPQQAhAiADIQYCQANAIAlBAkggAiAPS3JFBEAgAiEHAkAgCARAA0AgBEH//wNxQf//A0YEQCAHQRhqIQcgBiAQSQR/IAZBAmoiBigAACAFdgUgBUEQaiEFIARBEHYLIQQMAQsLA0AgBEEDcSIIQQNGBEAgBUECaiEFIARBAnYhBCAHQQNqIQcMAQsLIAcgCGoiByAPSw0EIAVBAmohBQNAIAIgB0kEQCANIAJBAXRqQQA7AQAgAkEBaiECDAELCyAGIA5LQQAgBiAFQQN1aiIHIAxLG0UEQCAHKAAAIAVBB3EiBXYhBAwCCyAEQQJ2IQQLIAYhBwsCfyALQX9qIAQgAEF/anEiBiAAQQF0QX9qIgggCWsiEUkNABogBCAIcSIEQQAgESAEIABIG2shBiALCyEIIA0gAkEBdGogBkF/aiIEOwEAIAlBASAGayAEIAZBAUgbayEJA0AgCSAASARAIABBAXUhACALQX9qIQsMAQsLAn8gByAOS0EAIAcgBSAIaiIFQQN1aiIGIAxLG0UEQCAFQQdxDAELIAUgDCIGIAdrQQN0awshBSACQQFqIQIgBEUhCCAGKAAAIAVBH3F2IQQMAQsLQWwgCUEBRyAFQSBKcg0BGiABIAJBf2o2AgAgBiAFQQdqQQN1aiADawwBC0FQCyEAIApBEGokACAACwkAQQFBBSAAGwsMACAAIAEoAAA2AAALqgMBCn8jAEHwAGsiCiQAIAJBAWohDiAAQQhqIQtBgIAEIAVBf2p0QRB1IQxBACECQQEhBkEBIAV0IglBf2oiDyEIA0AgAiAORkUEQAJAIAEgAkEBdCINai8BACIHQf//A0YEQCALIAhBA3RqIAI2AgQgCEF/aiEIQQEhBwwBCyAGQQAgDCAHQRB0QRB1ShshBgsgCiANaiAHOwEAIAJBAWohAgwBCwsgACAFNgIEIAAgBjYCACAJQQN2IAlBAXZqQQNqIQxBACEAQQAhBkEAIQIDQCAGIA5GBEADQAJAIAAgCUYNACAKIAsgAEEDdGoiASgCBCIGQQF0aiICIAIvAQAiAkEBajsBACABIAUgAhAUayIIOgADIAEgAiAIQf8BcXQgCWs7AQAgASAEIAZBAnQiAmooAgA6AAIgASACIANqKAIANgIEIABBAWohAAwBCwsFIAEgBkEBdGouAQAhDUEAIQcDQCAHIA1ORQRAIAsgAkEDdGogBjYCBANAIAIgDGogD3EiAiAISw0ACyAHQQFqIQcMAQsLIAZBAWohBgwBCwsgCkHwAGokAAsjAEIAIAEQCSAAhUKHla+vmLbem55/fkLj3MqV/M7y9YV/fAsQACAAQn43AwggACABNgIACyQBAX8gAARAIAEoAgQiAgRAIAEoAgggACACEQEADwsgABAmCwsfACAAIAEgAi8BABAINgIAIAEQBBogACACQQRqNgIEC0oBAX9BoCAoAgAiASAAaiIAQX9MBEBBiCBBMDYCAEF/DwsCQCAAPwBBEHRNDQAgABBmDQBBiCBBMDYCAEF/DwtBoCAgADYCACABC9cBAQh/Qbp/IQoCQCACKAIEIgggAigCACIJaiIOIAEgAGtLDQBBbCEKIAkgBCADKAIAIgtrSw0AIAAgCWoiBCACKAIIIgxrIQ0gACABQWBqIg8gCyAJQQAQKSADIAkgC2o2AgACQAJAIAwgBCAFa00EQCANIQUMAQsgDCAEIAZrSw0CIAcgDSAFayIAaiIBIAhqIAdNBEAgBCABIAgQDxoMAgsgBCABQQAgAGsQDyEBIAIgACAIaiIINgIEIAEgAGshBAsgBCAPIAUgCEEBECkLIA4hCgsgCgubAgEBfyMAQYABayINJAAgDSADNgJ8AkAgAkEDSwRAQX8hCQwBCwJAAkACQAJAIAJBAWsOAwADAgELIAZFBEBBuH8hCQwEC0FsIQkgBS0AACICIANLDQMgACAHIAJBAnQiAmooAgAgAiAIaigCABA7IAEgADYCAEEBIQkMAwsgASAJNgIAQQAhCQwCCyAKRQRAQWwhCQwCC0EAIQkgC0UgDEEZSHINAUEIIAR0QQhqIQBBACECA0AgAiAATw0CIAJBQGshAgwAAAsAC0FsIQkgDSANQfwAaiANQfgAaiAFIAYQFSICEAMNACANKAJ4IgMgBEsNACAAIA0gDSgCfCAHIAggAxAYIAEgADYCACACIQkLIA1BgAFqJAAgCQsLACAAIAEgAhALGgsQACAALwAAIAAtAAJBEHRyCy8AAn9BuH8gAUEISQ0AGkFyIAAoAAQiAEF3Sw0AGkG4fyAAQQhqIgAgACABSxsLCwkAIAAgATsAAAsDAAELigYBBX8gACAAKAIAIgVBfnE2AgBBACAAIAVBAXZqQYQgKAIAIgQgAEYbIQECQAJAIAAoAgQiAkUNACACKAIAIgNBAXENACACQQhqIgUgA0EBdkF4aiIDQQggA0EISxtnQR9zQQJ0QYAfaiIDKAIARgRAIAMgAigCDDYCAAsgAigCCCIDBEAgAyACKAIMNgIECyACKAIMIgMEQCADIAIoAgg2AgALIAIgAigCACAAKAIAQX5xajYCAEGEICEAAkACQCABRQ0AIAEgAjYCBCABKAIAIgNBAXENASADQQF2QXhqIgNBCCADQQhLG2dBH3NBAnRBgB9qIgMoAgAgAUEIakYEQCADIAEoAgw2AgALIAEoAggiAwRAIAMgASgCDDYCBAsgASgCDCIDBEAgAyABKAIINgIAQYQgKAIAIQQLIAIgAigCACABKAIAQX5xajYCACABIARGDQAgASABKAIAQQF2akEEaiEACyAAIAI2AgALIAIoAgBBAXZBeGoiAEEIIABBCEsbZ0Efc0ECdEGAH2oiASgCACEAIAEgBTYCACACIAA2AgwgAkEANgIIIABFDQEgACAFNgIADwsCQCABRQ0AIAEoAgAiAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAigCACABQQhqRgRAIAIgASgCDDYCAAsgASgCCCICBEAgAiABKAIMNgIECyABKAIMIgIEQCACIAEoAgg2AgBBhCAoAgAhBAsgACAAKAIAIAEoAgBBfnFqIgI2AgACQCABIARHBEAgASABKAIAQQF2aiAANgIEIAAoAgAhAgwBC0GEICAANgIACyACQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgIoAgAhASACIABBCGoiAjYCACAAIAE2AgwgAEEANgIIIAFFDQEgASACNgIADwsgBUEBdkF4aiIBQQggAUEISxtnQR9zQQJ0QYAfaiICKAIAIQEgAiAAQQhqIgI2AgAgACABNgIMIABBADYCCCABRQ0AIAEgAjYCAAsLDgAgAARAIABBeGoQJQsLgAIBA38CQCAAQQ9qQXhxQYQgKAIAKAIAQQF2ayICEB1Bf0YNAAJAQYQgKAIAIgAoAgAiAUEBcQ0AIAFBAXZBeGoiAUEIIAFBCEsbZ0Efc0ECdEGAH2oiASgCACAAQQhqRgRAIAEgACgCDDYCAAsgACgCCCIBBEAgASAAKAIMNgIECyAAKAIMIgFFDQAgASAAKAIINgIAC0EBIQEgACAAKAIAIAJBAXRqIgI2AgAgAkEBcQ0AIAJBAXZBeGoiAkEIIAJBCEsbZ0Efc0ECdEGAH2oiAygCACECIAMgAEEIaiIDNgIAIAAgAjYCDCAAQQA2AgggAkUNACACIAM2AgALIAELtwIBA38CQAJAIABBASAAGyICEDgiAA0AAkACQEGEICgCACIARQ0AIAAoAgAiA0EBcQ0AIAAgA0EBcjYCACADQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgAgAEEIakYEQCABIAAoAgw2AgALIAAoAggiAQRAIAEgACgCDDYCBAsgACgCDCIBBEAgASAAKAIINgIACyACECchAkEAIQFBhCAoAgAhACACDQEgACAAKAIAQX5xNgIAQQAPCyACQQ9qQXhxIgMQHSICQX9GDQIgAkEHakF4cSIAIAJHBEAgACACaxAdQX9GDQMLAkBBhCAoAgAiAUUEQEGAICAANgIADAELIAAgATYCBAtBhCAgADYCACAAIANBAXRBAXI2AgAMAQsgAEUNAQsgAEEIaiEBCyABC7kDAQJ/IAAgA2ohBQJAIANBB0wEQANAIAAgBU8NAiAAIAItAAA6AAAgAEEBaiEAIAJBAWohAgwAAAsACyAEQQFGBEACQCAAIAJrIgZBB00EQCAAIAItAAA6AAAgACACLQABOgABIAAgAi0AAjoAAiAAIAItAAM6AAMgAEEEaiACIAZBAnQiBkHAHmooAgBqIgIQFyACIAZB4B5qKAIAayECDAELIAAgAhAMCyACQQhqIQIgAEEIaiEACwJAAkACQAJAIAUgAU0EQCAAIANqIQEgBEEBRyAAIAJrQQ9Kcg0BA0AgACACEAwgAkEIaiECIABBCGoiACABSQ0ACwwFCyAAIAFLBEAgACEBDAQLIARBAUcgACACa0EPSnINASAAIQMgAiEEA0AgAyAEEAwgBEEIaiEEIANBCGoiAyABSQ0ACwwCCwNAIAAgAhAHIAJBEGohAiAAQRBqIgAgAUkNAAsMAwsgACEDIAIhBANAIAMgBBAHIARBEGohBCADQRBqIgMgAUkNAAsLIAIgASAAa2ohAgsDQCABIAVPDQEgASACLQAAOgAAIAFBAWohASACQQFqIQIMAAALAAsLQQECfyAAIAAoArjgASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdBKGogACgCBBATQQAhBCAHQeAAaiEMIAdB5ABqIQoDQCAHQShqEARBAksgBCAXTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEJIAcoAkggBygCREEDdGopAgAiH0IgiKchCCAeQiCIISAgHUIgiKchAgJAIB9CEIinQf8BcSIDQQJPBEACQCAGRSADQRlJckUEQCAIIAdBKGogA0EgIAcoAixrIg0gDSADSxsiDRAFIAMgDWsiA3RqIQggB0EoahAEGiADRQ0BIAdBKGogAxAFIAhqIQgMAQsgB0EoaiADEAUgCGohCCAHQShqEAQaCyAHKQJUISEgByAINgJUIAcgITcDWAwBCwJAIANFBEAgAgRAIAcoAlQhCAwDCyAHKAJYIQgMAQsCQAJAIAdBKGpBARAFIAggAkVqaiIDQQNGBEAgBygCVEF/aiIDIANFaiEIDAELIANBAnQgB2ooAlQiCCAIRWohCCADQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAg2AlQLICCnIQMgCQRAIAdBKGogCRAFIANqIQMLIAkgC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgAmohAgsgB0EoahAEGiAHIAcoAmggAmoiCSADajYCaCAKIAwgCCAJSxsoAgAhDSAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogB0EoaiAfQhiIp0H/AXEQCCEOIAdB8ABqIARBBHRqIgsgCSANaiAIazYCDCALIAg2AgggCyADNgIEIAsgAjYCACAHIA4gH6dB//8DcWo2AkQgBEEBaiEEDAELCyAEIBdIDQEgEkFgaiEYIAdB4ABqIRogB0HkAGohGyABIQMDQCAHQShqEARBAksgBCAFTnJFBEAgBygCQCAHKAI8QQN0aikCACIdQhCIp0H/AXEhCyAHKAJQIAcoAkxBA3RqKQIAIh5CEIinQf8BcSEIIAcoAkggBygCREEDdGopAgAiH0IgiKchCSAeQiCIISAgHUIgiKchDAJAIB9CEIinQf8BcSICQQJPBEACQCAGRSACQRlJckUEQCAJIAdBKGogAkEgIAcoAixrIgogCiACSxsiChAFIAIgCmsiAnRqIQkgB0EoahAEGiACRQ0BIAdBKGogAhAFIAlqIQkMAQsgB0EoaiACEAUgCWohCSAHQShqEAQaCyAHKQJUISEgByAJNgJUIAcgITcDWAwBCwJAIAJFBEAgDARAIAcoAlQhCQwDCyAHKAJYIQkMAQsCQAJAIAdBKGpBARAFIAkgDEVqaiICQQNGBEAgBygCVEF/aiICIAJFaiEJDAELIAJBAnQgB2ooAlQiCSAJRWohCSACQQFGDQELIAcgBygCWDYCXAsLIAcgBygCVDYCWCAHIAk2AlQLICCnIRQgCARAIAdBKGogCBAFIBRqIRQLIAggC2pBFE8EQCAHQShqEAQaCyALBEAgB0EoaiALEAUgDGohDAsgB0EoahAEGiAHIAcoAmggDGoiGSAUajYCaCAbIBogCSAZSxsoAgAhHCAHIAdBKGogHUIYiKdB/wFxEAggHadB//8DcWo2AjwgByAHQShqIB5CGIinQf8BcRAIIB6nQf//A3FqNgJMIAdBKGoQBBogByAHQShqIB9CGIinQf8BcRAIIB+nQf//A3FqNgJEIAcgB0HwAGogBEEDcUEEdGoiDSkDCCIdNwPIASAHIA0pAwAiHjcDwAECQAJAAkAgBygCvAEiDiAepyICaiIWIBNLDQAgAyAHKALEASIKIAJqIgtqIBhLDQAgEiADayALQSBqTw0BCyAHIAcpA8gBNwMQIAcgBykDwAE3AwggAyASIAdBCGogB0G8AWogEyAPIBUgERAeIQsMAQsgAiADaiEIIAMgDhAHIAJBEU8EQCADQRBqIQIDQCACIA5BEGoiDhAHIAJBEGoiAiAISQ0ACwsgCCAdpyIOayECIAcgFjYCvAEgDiAIIA9rSwRAIA4gCCAVa0sEQEFsIQsMAgsgESACIA9rIgJqIhYgCmogEU0EQCAIIBYgChAPGgwCCyAIIBZBACACaxAPIQggByACIApqIgo2AsQBIAggAmshCCAPIQILIA5BEE8EQCAIIApqIQoDQCAIIAIQByACQRBqIQIgCEEQaiIIIApJDQALDAELAkAgDkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgDkECdCIKQcAeaigCAGoiAhAXIAIgCkHgHmooAgBrIQIgBygCxAEhCgwBCyAIIAIQDAsgCkEJSQ0AIAggCmohCiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAKSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAKSQ0ACwsgCxADBEAgCyEQDAQFIA0gDDYCACANIBkgHGogCWs2AgwgDSAJNgIIIA0gFDYCBCAEQQFqIQQgAyALaiEDDAILAAsLIAQgBUgNASAEIBdrIQtBACEEA0AgCyAFSARAIAcgB0HwAGogC0EDcUEEdGoiAikDCCIdNwPIASAHIAIpAwAiHjcDwAECQAJAAkAgBygCvAEiDCAepyICaiIKIBNLDQAgAyAHKALEASIJIAJqIhBqIBhLDQAgEiADayAQQSBqTw0BCyAHIAcpA8gBNwMgIAcgBykDwAE3AxggAyASIAdBGGogB0G8AWogEyAPIBUgERAeIRAMAQsgAiADaiEIIAMgDBAHIAJBEU8EQCADQRBqIQIDQCACIAxBEGoiDBAHIAJBEGoiAiAISQ0ACwsgCCAdpyIGayECIAcgCjYCvAEgBiAIIA9rSwRAIAYgCCAVa0sEQEFsIRAMAgsgESACIA9rIgJqIgwgCWogEU0EQCAIIAwgCRAPGgwCCyAIIAxBACACaxAPIQggByACIAlqIgk2AsQBIAggAmshCCAPIQILIAZBEE8EQCAIIAlqIQYDQCAIIAIQByACQRBqIQIgCEEQaiIIIAZJDQALDAELAkAgBkEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgBkECdCIGQcAeaigCAGoiAhAXIAIgBkHgHmooAgBrIQIgBygCxAEhCQwBCyAIIAIQDAsgCUEJSQ0AIAggCWohBiAIQQhqIgggAkEIaiICa0EPTARAA0AgCCACEAwgAkEIaiECIAhBCGoiCCAGSQ0ADAIACwALA0AgCCACEAcgAkEQaiECIAhBEGoiCCAGSQ0ACwsgEBADDQMgC0EBaiELIAMgEGohAwwBCwsDQCAEQQNHBEAgACAEQQJ0IgJqQazQAWogAiAHaigCVDYCACAEQQFqIQQMAQsLIAcoArwBIQgLQbp/IRAgEyAIayIAIBIgA2tLDQAgAwR/IAMgCCAAEAsgAGoFQQALIAFrIRALIAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY0AAQMyIFEAMiBg0AIANBHzYCfCADIANB/ABqIANB+ABqIAQgBCAFaiAGGyIEIAEgAmoiAiAEaxAVIgUQAw0AIAMoAnwiBkEfSw0AIAMoAngiB0EJTw0AIABBiCBqIAMgBkGAC0GADCAHEBggA0E0NgJ8IAMgA0H8AGogA0H4AGogBCAFaiIEIAIgBGsQFSIFEAMNACADKAJ8IgZBNEsNACADKAJ4IgdBCk8NACAAQZAwaiADIAZBgA1B4A4gBxAYIANBIzYCfCADIANB/ABqIANB+ABqIAQgBWoiBCACIARrEBUiBRADDQAgAygCfCIGQSNLDQAgAygCeCIHQQpPDQAgACADIAZBwBBB0BEgBxAYIAQgBWoiBEEMaiIFIAJLDQAgAiAFayEFQQAhAgNAIAJBA0cEQCAEKAAAIgZBf2ogBU8NAiAAIAJBAnRqQZzQAWogBjYCACACQQFqIQIgBEEEaiEEDAELCyAEIAFrIQgLIANBgAFqJAAgCAtGAQN/IABBCGohAyAAKAIEIQJBACEAA0AgACACdkUEQCABIAMgAEEDdGotAAJBFktqIQEgAEEBaiEADAELCyABQQggAmt0C4YDAQV/Qbh/IQcCQCADRQ0AIAItAAAiBEUEQCABQQA2AgBBAUG4fyADQQFGGw8LAn8gAkEBaiIFIARBGHRBGHUiBkF/Sg0AGiAGQX9GBEAgA0EDSA0CIAUvAABBgP4BaiEEIAJBA2oMAQsgA0ECSA0BIAItAAEgBEEIdHJBgIB+aiEEIAJBAmoLIQUgASAENgIAIAVBAWoiASACIANqIgNLDQBBbCEHIABBEGogACAFLQAAIgVBBnZBI0EJIAEgAyABa0HAEEHQEUHwEiAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBmCBqIABBCGogBUEEdkEDcUEfQQggASABIAZqIAgbIgEgAyABa0GAC0GADEGAFyAAKAKM4QEgACgCnOIBIAQQHyIGEAMiCA0AIABBoDBqIABBBGogBUECdkEDcUE0QQkgASABIAZqIAgbIgEgAyABa0GADUHgDkGQGSAAKAKM4QEgACgCnOIBIAQQHyIAEAMNACAAIAFqIAJrIQcLIAcLrQMBCn8jAEGABGsiCCQAAn9BUiACQf8BSw0AGkFUIANBDEsNABogAkEBaiELIABBBGohCUGAgAQgA0F/anRBEHUhCkEAIQJBASEEQQEgA3QiB0F/aiIMIQUDQCACIAtGRQRAAkAgASACQQF0Ig1qLwEAIgZB//8DRgRAIAkgBUECdGogAjoAAiAFQX9qIQVBASEGDAELIARBACAKIAZBEHRBEHVKGyEECyAIIA1qIAY7AQAgAkEBaiECDAELCyAAIAQ7AQIgACADOwEAIAdBA3YgB0EBdmpBA2ohBkEAIQRBACECA0AgBCALRkUEQCABIARBAXRqLgEAIQpBACEAA0AgACAKTkUEQCAJIAJBAnRqIAQ6AAIDQCACIAZqIAxxIgIgBUsNAAsgAEEBaiEADAELCyAEQQFqIQQMAQsLQX8gAg0AGkEAIQIDfyACIAdGBH9BAAUgCCAJIAJBAnRqIgAtAAJBAXRqIgEgAS8BACIBQQFqOwEAIAAgAyABEBRrIgU6AAMgACABIAVB/wFxdCAHazsBACACQQFqIQIMAQsLCyEFIAhBgARqJAAgBQvjBgEIf0FsIQcCQCACQQNJDQACQAJAAkACQCABLQAAIgNBA3EiCUEBaw4DAwEAAgsgACgCiOEBDQBBYg8LIAJBBUkNAkEDIQYgASgAACEFAn8CQAJAIANBAnZBA3EiCEF+aiIEQQFNBEAgBEEBaw0BDAILIAVBDnZB/wdxIQQgBUEEdkH/B3EhAyAIRQwCCyAFQRJ2IQRBBCEGIAVBBHZB//8AcSEDQQAMAQsgBUEEdkH//w9xIgNBgIAISw0DIAEtAARBCnQgBUEWdnIhBEEFIQZBAAshBSAEIAZqIgogAksNAgJAIANBgQZJDQAgACgCnOIBRQ0AQQAhAgNAIAJBg4ABSw0BIAJBQGshAgwAAAsACwJ/IAlBA0YEQCABIAZqIQEgAEHw4gFqIQIgACgCDCEGIAUEQCACIAMgASAEIAYQXwwCCyACIAMgASAEIAYQXQwBCyAAQbjQAWohAiABIAZqIQEgAEHw4gFqIQYgAEGo0ABqIQggBQRAIAggBiADIAEgBCACEF4MAQsgCCAGIAMgASAEIAIQXAsQAw0CIAAgAzYCgOIBIABBATYCiOEBIAAgAEHw4gFqNgLw4QEgCUECRgRAIAAgAEGo0ABqNgIMCyAAIANqIgBBiOMBakIANwAAIABBgOMBakIANwAAIABB+OIBakIANwAAIABB8OIBakIANwAAIAoPCwJ/AkACQAJAIANBAnZBA3FBf2oiBEECSw0AIARBAWsOAgACAQtBASEEIANBA3YMAgtBAiEEIAEvAABBBHYMAQtBAyEEIAEQIUEEdgsiAyAEaiIFQSBqIAJLBEAgBSACSw0CIABB8OIBaiABIARqIAMQCyEBIAAgAzYCgOIBIAAgATYC8OEBIAEgA2oiAEIANwAYIABCADcAECAAQgA3AAggAEIANwAAIAUPCyAAIAM2AoDiASAAIAEgBGo2AvDhASAFDwsCfwJAAkACQCADQQJ2QQNxQX9qIgRBAksNACAEQQFrDgIAAgELQQEhByADQQN2DAILQQIhByABLwAAQQR2DAELIAJBBEkgARAhIgJBj4CAAUtyDQFBAyEHIAJBBHYLIQIgAEHw4gFqIAEgB2otAAAgAkEgahAQIQEgACACNgKA4gEgACABNgLw4QEgB0EBaiEHCyAHC0sAIABC+erQ0OfJoeThADcDICAAQgA3AxggAELP1tO+0ser2UI3AxAgAELW64Lu6v2J9eAANwMIIABCADcDACAAQShqQQBBKBAQGgviAgICfwV+IABBKGoiASAAKAJIaiECAn4gACkDACIDQiBaBEAgACkDECIEQgeJIAApAwgiBUIBiXwgACkDGCIGQgyJfCAAKQMgIgdCEol8IAUQGSAEEBkgBhAZIAcQGQwBCyAAKQMYQsXP2bLx5brqJ3wLIAN8IQMDQCABQQhqIgAgAk0EQEIAIAEpAAAQCSADhUIbiUKHla+vmLbem55/fkLj3MqV/M7y9YV/fCEDIAAhAQwBCwsCQCABQQRqIgAgAksEQCABIQAMAQsgASgAAK1Ch5Wvr5i23puef34gA4VCF4lCz9bTvtLHq9lCfkL5893xmfaZqxZ8IQMLA0AgACACSQRAIAAxAABCxc/ZsvHluuonfiADhUILiUKHla+vmLbem55/fiEDIABBAWohAAwBCwsgA0IhiCADhULP1tO+0ser2UJ+IgNCHYggA4VC+fPd8Zn2masWfiIDQiCIIAOFC+8CAgJ/BH4gACAAKQMAIAKtfDcDAAJAAkAgACgCSCIDIAJqIgRBH00EQCABRQ0BIAAgA2pBKGogASACECAgACgCSCACaiEEDAELIAEgAmohAgJ/IAMEQCAAQShqIgQgA2ogAUEgIANrECAgACAAKQMIIAQpAAAQCTcDCCAAIAApAxAgACkAMBAJNwMQIAAgACkDGCAAKQA4EAk3AxggACAAKQMgIABBQGspAAAQCTcDICAAKAJIIQMgAEEANgJIIAEgA2tBIGohAQsgAUEgaiACTQsEQCACQWBqIQMgACkDICEFIAApAxghBiAAKQMQIQcgACkDCCEIA0AgCCABKQAAEAkhCCAHIAEpAAgQCSEHIAYgASkAEBAJIQYgBSABKQAYEAkhBSABQSBqIgEgA00NAAsgACAFNwMgIAAgBjcDGCAAIAc3AxAgACAINwMICyABIAJPDQEgAEEoaiABIAIgAWsiBBAgCyAAIAQ2AkgLCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQEBogAwVBun8LCy8BAX8gAEUEQEG2f0EAIAMbDwtBun8hBCADIAFNBH8gACACIAMQCxogAwVBun8LC6gCAQZ/IwBBEGsiByQAIABB2OABaikDAEKAgIAQViEIQbh/IQUCQCAEQf//B0sNACAAIAMgBBBCIgUQAyIGDQAgACgCnOIBIQkgACAHQQxqIAMgAyAFaiAGGyIKIARBACAFIAYbayIGEEAiAxADBEAgAyEFDAELIAcoAgwhBCABRQRAQbp/IQUgBEEASg0BCyAGIANrIQUgAyAKaiEDAkAgCQRAIABBADYCnOIBDAELAkACQAJAIARBBUgNACAAQdjgAWopAwBCgICACFgNAAwBCyAAQQA2ApziAQwBCyAAKAIIED8hBiAAQQA2ApziASAGQRRPDQELIAAgASACIAMgBSAEIAgQOSEFDAELIAAgASACIAMgBSAEIAgQOiEFCyAHQRBqJAAgBQtnACAAQdDgAWogASACIAAoAuzhARAuIgEQAwRAIAEPC0G4fyECAkAgAQ0AIABB7OABaigCACIBBEBBYCECIAAoApjiASABRw0BC0EAIQIgAEHw4AFqKAIARQ0AIABBkOEBahBDCyACCycBAX8QVyIERQRAQUAPCyAEIAAgASACIAMgBBBLEE8hACAEEFYgAAs/AQF/AkACQAJAIAAoAqDiAUEBaiIBQQJLDQAgAUEBaw4CAAECCyAAEDBBAA8LIABBADYCoOIBCyAAKAKU4gELvAMCB38BfiMAQRBrIgkkAEG4fyEGAkAgBCgCACIIQQVBCSAAKALs4QEiBRtJDQAgAygCACIHQQFBBSAFGyAFEC8iBRADBEAgBSEGDAELIAggBUEDakkNACAAIAcgBRBJIgYQAw0AIAEgAmohCiAAQZDhAWohCyAIIAVrIQIgBSAHaiEHIAEhBQNAIAcgAiAJECwiBhADDQEgAkF9aiICIAZJBEBBuH8hBgwCCyAJKAIAIghBAksEQEFsIQYMAgsgB0EDaiEHAn8CQAJAAkAgCEEBaw4CAgABCyAAIAUgCiAFayAHIAYQSAwCCyAFIAogBWsgByAGEEcMAQsgBSAKIAVrIActAAAgCSgCCBBGCyIIEAMEQCAIIQYMAgsgACgC8OABBEAgCyAFIAgQRQsgAiAGayECIAYgB2ohByAFIAhqIQUgCSgCBEUNAAsgACkD0OABIgxCf1IEQEFsIQYgDCAFIAFrrFINAQsgACgC8OABBEBBaiEGIAJBBEkNASALEEQhDCAHKAAAIAynRw0BIAdBBGohByACQXxqIQILIAMgBzYCACAEIAI2AgAgBSABayEGCyAJQRBqJAAgBgsuACAAECsCf0EAQQAQAw0AGiABRSACRXJFBEBBYiAAIAEgAhA9EAMNARoLQQALCzcAIAEEQCAAIAAoAsTgASABKAIEIAEoAghqRzYCnOIBCyAAECtBABADIAFFckUEQCAAIAEQWwsL0QIBB38jAEEQayIGJAAgBiAENgIIIAYgAzYCDCAFBEAgBSgCBCEKIAUoAgghCQsgASEIAkACQANAIAAoAuzhARAWIQsCQANAIAQgC0kNASADKAAAQXBxQdDUtMIBRgRAIAMgBBAiIgcQAw0EIAQgB2shBCADIAdqIQMMAQsLIAYgAzYCDCAGIAQ2AggCQCAFBEAgACAFEE5BACEHQQAQA0UNAQwFCyAAIAogCRBNIgcQAw0ECyAAIAgQUCAMQQFHQQAgACAIIAIgBkEMaiAGQQhqEEwiByIDa0EAIAMQAxtBCkdyRQRAQbh/IQcMBAsgBxADDQMgAiAHayECIAcgCGohCEEBIQwgBigCDCEDIAYoAgghBAwBCwsgBiADNgIMIAYgBDYCCEG4fyEHIAQNASAIIAFrIQcMAQsgBiADNgIMIAYgBDYCCAsgBkEQaiQAIAcLRgECfyABIAAoArjgASICRwRAIAAgAjYCxOABIAAgATYCuOABIAAoArzgASEDIAAgATYCvOABIAAgASADIAJrajYCwOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEEdCAAbiECCyAAQQh2IgEgAkEYbCIAQYwIaigCAGwgAEGICGooAgBqIgJBA3YgAmogAEGACGooAgAgAEGECGooAgAgAWxqSQs3ACAAIAMgBCAFQYAQEDMiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQMgVBuH8LC78DAQN/IwBBIGsiBSQAIAVBCGogAiADEAYiAhADRQRAIAAgAWoiB0F9aiEGIAUgBBAOIARBBGohAiAFLQACIQMDQEEAIAAgBkkgBUEIahAEGwRAIAAgAiAFQQhqIAMQAkECdGoiBC8BADsAACAFQQhqIAQtAAIQASAAIAQtAANqIgQgAiAFQQhqIAMQAkECdGoiAC8BADsAACAFQQhqIAAtAAIQASAEIAAtAANqIQAMAQUgB0F+aiEEA0AgBUEIahAEIAAgBEtyRQRAIAAgAiAFQQhqIAMQAkECdGoiBi8BADsAACAFQQhqIAYtAAIQASAAIAYtAANqIQAMAQsLA0AgACAES0UEQCAAIAIgBUEIaiADEAJBAnRqIgYvAQA7AAAgBUEIaiAGLQACEAEgACAGLQADaiEADAELCwJAIAAgB08NACAAIAIgBUEIaiADEAIiA0ECdGoiAC0AADoAACAALQADQQFGBEAgBUEIaiAALQACEAEMAQsgBSgCDEEfSw0AIAVBCGogAiADQQJ0ai0AAhABIAUoAgxBIUkNACAFQSA2AgwLIAFBbCAFQQhqEAobIQILCwsgBUEgaiQAIAILkgIBBH8jAEFAaiIJJAAgCSADQTQQCyEDAkAgBEECSA0AIAMgBEECdGooAgAhCSADQTxqIAgQIyADQQE6AD8gAyACOgA+QQAhBCADKAI8IQoDQCAEIAlGDQEgACAEQQJ0aiAKNgEAIARBAWohBAwAAAsAC0EAIQkDQCAGIAlGRQRAIAMgBSAJQQF0aiIKLQABIgtBAnRqIgwoAgAhBCADQTxqIAotAABBCHQgCGpB//8DcRAjIANBAjoAPyADIAcgC2siCiACajoAPiAEQQEgASAKa3RqIQogAygCPCELA0AgACAEQQJ0aiALNgEAIARBAWoiBCAKSQ0ACyAMIAo2AgAgCUEBaiEJDAELCyADQUBrJAALowIBCX8jAEHQAGsiCSQAIAlBEGogBUE0EAsaIAcgBmshDyAHIAFrIRADQAJAIAMgCkcEQEEBIAEgByACIApBAXRqIgYtAAEiDGsiCGsiC3QhDSAGLQAAIQ4gCUEQaiAMQQJ0aiIMKAIAIQYgCyAPTwRAIAAgBkECdGogCyAIIAUgCEE0bGogCCAQaiIIQQEgCEEBShsiCCACIAQgCEECdGooAgAiCEEBdGogAyAIayAHIA4QYyAGIA1qIQgMAgsgCUEMaiAOECMgCUEBOgAPIAkgCDoADiAGIA1qIQggCSgCDCELA0AgBiAITw0CIAAgBkECdGogCzYBACAGQQFqIQYMAAALAAsgCUHQAGokAA8LIAwgCDYCACAKQQFqIQoMAAALAAs0ACAAIAMgBCAFEDYiBRADBEAgBQ8LIAUgBEkEfyABIAIgAyAFaiAEIAVrIAAQNAVBuH8LCyMAIAA/AEEQdGtB//8DakEQdkAAQX9GBEBBAA8LQQAQAEEBCzsBAX8gAgRAA0AgACABIAJBgCAgAkGAIEkbIgMQCyEAIAFBgCBqIQEgAEGAIGohACACIANrIgINAAsLCwYAIAAQAwsLqBUJAEGICAsNAQAAAAEAAAACAAAAAgBBoAgLswYBAAAAAQAAAAIAAAACAAAAJgAAAIIAAAAhBQAASgAAAGcIAAAmAAAAwAEAAIAAAABJBQAASgAAAL4IAAApAAAALAIAAIAAAABJBQAASgAAAL4IAAAvAAAAygIAAIAAAACKBQAASgAAAIQJAAA1AAAAcwMAAIAAAACdBQAASgAAAKAJAAA9AAAAgQMAAIAAAADrBQAASwAAAD4KAABEAAAAngMAAIAAAABNBgAASwAAAKoKAABLAAAAswMAAIAAAADBBgAATQAAAB8NAABNAAAAUwQAAIAAAAAjCAAAUQAAAKYPAABUAAAAmQQAAIAAAABLCQAAVwAAALESAABYAAAA2gQAAIAAAABvCQAAXQAAACMUAABUAAAARQUAAIAAAABUCgAAagAAAIwUAABqAAAArwUAAIAAAAB2CQAAfAAAAE4QAAB8AAAA0gIAAIAAAABjBwAAkQAAAJAHAACSAAAAAAAAAAEAAAABAAAABQAAAA0AAAAdAAAAPQAAAH0AAAD9AAAA/QEAAP0DAAD9BwAA/Q8AAP0fAAD9PwAA/X8AAP3/AAD9/wEA/f8DAP3/BwD9/w8A/f8fAP3/PwD9/38A/f//AP3//wH9//8D/f//B/3//w/9//8f/f//P/3//38AAAAAAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABEAAAASAAAAEwAAABQAAAAVAAAAFgAAABcAAAAYAAAAGQAAABoAAAAbAAAAHAAAAB0AAAAeAAAAHwAAAAMAAAAEAAAABQAAAAYAAAAHAAAACAAAAAkAAAAKAAAACwAAAAwAAAANAAAADgAAAA8AAAAQAAAAEQAAABIAAAATAAAAFAAAABUAAAAWAAAAFwAAABgAAAAZAAAAGgAAABsAAAAcAAAAHQAAAB4AAAAfAAAAIAAAACEAAAAiAAAAIwAAACUAAAAnAAAAKQAAACsAAAAvAAAAMwAAADsAAABDAAAAUwAAAGMAAACDAAAAAwEAAAMCAAADBAAAAwgAAAMQAAADIAAAA0AAAAOAAAADAAEAQeAPC1EBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAEAAAABQAAAAcAAAAIAAAACQAAAAoAAAALAAAADAAAAA0AAAAOAAAADwAAABAAQcQQC4sBAQAAAAIAAAADAAAABAAAAAUAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAABIAAAAUAAAAFgAAABgAAAAcAAAAIAAAACgAAAAwAAAAQAAAAIAAAAAAAQAAAAIAAAAEAAAACAAAABAAAAAgAAAAQAAAAIAAAAAAAQBBkBIL5gQBAAAAAQAAAAEAAAABAAAAAgAAAAIAAAADAAAAAwAAAAQAAAAGAAAABwAAAAgAAAAJAAAACgAAAAsAAAAMAAAADQAAAA4AAAAPAAAAEAAAAAEAAAAEAAAACAAAAAAAAAABAAEBBgAAAAAAAAQAAAAAEAAABAAAAAAgAAAFAQAAAAAAAAUDAAAAAAAABQQAAAAAAAAFBgAAAAAAAAUHAAAAAAAABQkAAAAAAAAFCgAAAAAAAAUMAAAAAAAABg4AAAAAAAEFEAAAAAAAAQUUAAAAAAABBRYAAAAAAAIFHAAAAAAAAwUgAAAAAAAEBTAAAAAgAAYFQAAAAAAABwWAAAAAAAAIBgABAAAAAAoGAAQAAAAADAYAEAAAIAAABAAAAAAAAAAEAQAAAAAAAAUCAAAAIAAABQQAAAAAAAAFBQAAACAAAAUHAAAAAAAABQgAAAAgAAAFCgAAAAAAAAULAAAAAAAABg0AAAAgAAEFEAAAAAAAAQUSAAAAIAABBRYAAAAAAAIFGAAAACAAAwUgAAAAAAADBSgAAAAAAAYEQAAAABAABgRAAAAAIAAHBYAAAAAAAAkGAAIAAAAACwYACAAAMAAABAAAAAAQAAAEAQAAACAAAAUCAAAAIAAABQMAAAAgAAAFBQAAACAAAAUGAAAAIAAABQgAAAAgAAAFCQAAACAAAAULAAAAIAAABQwAAAAAAAAGDwAAACAAAQUSAAAAIAABBRQAAAAgAAIFGAAAACAAAgUcAAAAIAADBSgAAAAgAAQFMAAAAAAAEAYAAAEAAAAPBgCAAAAAAA4GAEAAAAAADQYAIABBgBcLhwIBAAEBBQAAAAAAAAUAAAAAAAAGBD0AAAAAAAkF/QEAAAAADwX9fwAAAAAVBf3/HwAAAAMFBQAAAAAABwR9AAAAAAAMBf0PAAAAABIF/f8DAAAAFwX9/38AAAAFBR0AAAAAAAgE/QAAAAAADgX9PwAAAAAUBf3/DwAAAAIFAQAAABAABwR9AAAAAAALBf0HAAAAABEF/f8BAAAAFgX9/z8AAAAEBQ0AAAAQAAgE/QAAAAAADQX9HwAAAAATBf3/BwAAAAEFAQAAABAABgQ9AAAAAAAKBf0DAAAAABAF/f8AAAAAHAX9//8PAAAbBf3//wcAABoF/f//AwAAGQX9//8BAAAYBf3//wBBkBkLhgQBAAEBBgAAAAAAAAYDAAAAAAAABAQAAAAgAAAFBQAAAAAAAAUGAAAAAAAABQgAAAAAAAAFCQAAAAAAAAULAAAAAAAABg0AAAAAAAAGEAAAAAAAAAYTAAAAAAAABhYAAAAAAAAGGQAAAAAAAAYcAAAAAAAABh8AAAAAAAAGIgAAAAAAAQYlAAAAAAABBikAAAAAAAIGLwAAAAAAAwY7AAAAAAAEBlMAAAAAAAcGgwAAAAAACQYDAgAAEAAABAQAAAAAAAAEBQAAACAAAAUGAAAAAAAABQcAAAAgAAAFCQAAAAAAAAUKAAAAAAAABgwAAAAAAAAGDwAAAAAAAAYSAAAAAAAABhUAAAAAAAAGGAAAAAAAAAYbAAAAAAAABh4AAAAAAAAGIQAAAAAAAQYjAAAAAAABBicAAAAAAAIGKwAAAAAAAwYzAAAAAAAEBkMAAAAAAAUGYwAAAAAACAYDAQAAIAAABAQAAAAwAAAEBAAAABAAAAQFAAAAIAAABQcAAAAgAAAFCAAAACAAAAUKAAAAIAAABQsAAAAAAAAGDgAAAAAAAAYRAAAAAAAABhQAAAAAAAAGFwAAAAAAAAYaAAAAAAAABh0AAAAAAAAGIAAAAAAAEAYDAAEAAAAPBgOAAAAAAA4GA0AAAAAADQYDIAAAAAAMBgMQAAAAAAsGAwgAAAAACgYDBABBpB0L2QEBAAAAAwAAAAcAAAAPAAAAHwAAAD8AAAB/AAAA/wAAAP8BAAD/AwAA/wcAAP8PAAD/HwAA/z8AAP9/AAD//wAA//8BAP//AwD//wcA//8PAP//HwD//z8A//9/AP///wD///8B////A////wf///8P////H////z////9/AAAAAAEAAAACAAAABAAAAAAAAAACAAAABAAAAAgAAAAAAAAAAQAAAAIAAAABAAAABAAAAAQAAAAEAAAABAAAAAgAAAAIAAAACAAAAAcAAAAIAAAACQAAAAoAAAALAEGgIAsDwBBQ",wu=new WeakMap;let bu=0,Tu;class fi extends Ei{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new dD,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}async detectSupportAsync(e){return this.workerConfig={astcSupported:await e.hasFeatureAsync("texture-compression-astc"),etc1Supported:await e.hasFeatureAsync("texture-compression-etc1"),etc2Supported:await e.hasFeatureAsync("texture-compression-etc2"),dxtSupported:await e.hasFeatureAsync("texture-compression-bc"),bptcSupported:await e.hasFeatureAsync("texture-compression-bptc"),pvrtcSupported:await e.hasFeatureAsync("texture-compression-pvrtc")},this}detectSupport(e){return e.isWebGPURenderer===!0?this.workerConfig={astcSupported:e.hasFeature("texture-compression-astc"),etc1Supported:e.hasFeature("texture-compression-etc1"),etc2Supported:e.hasFeature("texture-compression-etc2"),dxtSupported:e.hasFeature("texture-compression-bc"),bptcSupported:e.hasFeature("texture-compression-bptc"),pvrtcSupported:e.hasFeature("texture-compression-pvrtc")}:(this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},this.workerConfig.etc1Supported=!1),this}init(){if(!this.transcoderPending){const e=new Vi(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),n=new Vi(this.manager);n.setPath(this.transcoderPath),n.setResponseType("arraybuffer"),n.setWithCredentials(this.withCredentials);const s=n.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,s]).then(([r,o])=>{const a=fi.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(fi.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(fi.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(fi.BasisFormat),"/* basis_transcoder.js */",r,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=o,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),c})}),bu>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),bu++}return this.transcoderPending}load(e,t,n,s){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const r=new Vi(this.manager);r.setResponseType("arraybuffer"),r.setWithCredentials(this.withCredentials),r.load(e,o=>{if(wu.has(o))return wu.get(o).promise.then(t).catch(s);this._createTexture(o).then(a=>t?t(a):null).catch(s)},n,s)}_createTextureFrom(e,t){const{faces:n,width:s,height:r,format:o,type:a,error:l,dfdFlags:c}=e;if(a==="error")return Promise.reject(l);let h;if(t.faceCount===6)h=new mR(n,o,Tt);else{const u=n[0].mipmaps;h=t.layerCount>1?new pR(u,s,r,t.layerCount,o,Tt):new sr(u,s,r,o,Tt)}return h.minFilter=n[0].mipmaps.length===1?nt:_n,h.magFilter=nt,h.generateMipmaps=!1,h.needsUpdate=!0,h.colorSpace=ey(t),h.premultiplyAlpha=!!(c&AD),h}async _createTexture(e,t={}){const n=vD(new Uint8Array(e));if(n.vkFormat!==_D)return SD(n);const s=t,r=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:s},[e])).then(o=>this._createTextureFrom(o.data,n));return wu.set(e,{promise:r}),r}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),bu--,this}}fi.BasisFormat={ETC1S:0,UASTC_4x4:1};fi.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};fi.EngineFormat={RGBAFormat:It,RGBA_ASTC_4x4_Format:rf,RGBA_BPTC_Format:Ec,RGBA_ETC2_EAC_Format:sf,RGBA_PVRTC_4BPPV1_Format:tf,RGBA_S3TC_DXT5_Format:_c,RGB_ETC1_Format:nA,RGB_ETC2_Format:nf,RGB_PVRTC_4BPPV1_Format:ef,RGB_S3TC_DXT1_Format:gc};fi.BasisWorker=function(){let i,e,t;const n=_EngineFormat,s=_TranscoderFormat,r=_BasisFormat;self.addEventListener("message",function(m){const g=m.data;switch(g.type){case"init":i=g.config,o(g.transcoderBinary);break;case"transcode":e.then(()=>{try{const{faces:A,buffers:p,width:x,height:_,hasAlpha:C,format:M,dfdFlags:I}=a(g.buffer);self.postMessage({type:"transcode",id:g.id,faces:A,width:x,height:_,hasAlpha:C,format:M,dfdFlags:I},p)}catch(A){console.error(A),self.postMessage({type:"error",id:g.id,error:A.message})}});break}});function o(m){e=new Promise(g=>{t={wasmBinary:m,onRuntimeInitialized:g},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function a(m){const g=new t.KTX2File(new Uint8Array(m));function A(){g.close(),g.delete()}if(!g.isValid())throw A(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const p=g.isUASTC()?r.UASTC_4x4:r.ETC1S,x=g.getWidth(),_=g.getHeight(),C=g.getLayers()||1,M=g.getLevels(),I=g.getFaces(),w=g.getHasAlpha(),B=g.getDFDFlags(),{transcoderFormat:y,engineFormat:v}=u(p,x,_,w);if(!x||!_||!M)throw A(),new Error("THREE.KTX2Loader:	Invalid texture");if(!g.startTranscoding())throw A(),new Error("THREE.KTX2Loader: .startTranscoding failed");const U=[],V=[];for(let D=0;D<I;D++){const G=[];for(let H=0;H<M;H++){const X=[];let q,Q;for(let ne=0;ne<C;ne++){const ae=g.getImageLevelInfo(H,ne,D);D===0&&H===0&&ne===0&&(ae.origWidth%4!==0||ae.origHeight%4!==0)&&console.warn("THREE.KTX2Loader: ETC1S and UASTC textures should use multiple-of-four dimensions."),M>1?(q=ae.origWidth,Q=ae.origHeight):(q=ae.width,Q=ae.height);const ge=new Uint8Array(g.getImageTranscodedSizeInBytes(H,ne,0,y));if(!g.transcodeImage(ge,H,ne,D,y,0,-1,-1))throw A(),new Error("THREE.KTX2Loader: .transcodeImage failed.");X.push(ge)}const te=f(X);G.push({data:te,width:q,height:Q}),V.push(te.buffer)}U.push({mipmaps:G,width:x,height:_,format:v})}return A(),{faces:U,buffers:V,width:x,height:_,hasAlpha:w,format:v,dfdFlags:B}}const l=[{if:"astcSupported",basisFormat:[r.UASTC_4x4],transcoderFormat:[s.ASTC_4x4,s.ASTC_4x4],engineFormat:[n.RGBA_ASTC_4x4_Format,n.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[s.BC7_M5,s.BC7_M5],engineFormat:[n.RGBA_BPTC_Format,n.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[s.BC1,s.BC3],engineFormat:[n.RGB_S3TC_DXT1_Format,n.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[s.ETC1,s.ETC2],engineFormat:[n.RGB_ETC2_Format,n.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[s.ETC1],engineFormat:[n.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[r.ETC1S,r.UASTC_4x4],transcoderFormat:[s.PVRTC1_4_RGB,s.PVRTC1_4_RGBA],engineFormat:[n.RGB_PVRTC_4BPPV1_Format,n.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],c=l.sort(function(m,g){return m.priorityETC1S-g.priorityETC1S}),h=l.sort(function(m,g){return m.priorityUASTC-g.priorityUASTC});function u(m,g,A,p){let x,_;const C=m===r.ETC1S?c:h;for(let M=0;M<C.length;M++){const I=C[M];if(i[I.if]&&I.basisFormat.includes(m)&&!(p&&I.transcoderFormat.length<2)&&!(I.needsPowerOfTwo&&!(d(g)&&d(A))))return x=I.transcoderFormat[p?1:0],_=I.engineFormat[p?1:0],{transcoderFormat:x,engineFormat:_}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),x=s.RGBA32,_=n.RGBAFormat,{transcoderFormat:x,engineFormat:_}}function d(m){return m<=2?!0:(m&m-1)===0&&m!==0}function f(m){if(m.length===1)return m[0];let g=0;for(let x=0;x<m.length;x++){const _=m[x];g+=_.byteLength}const A=new Uint8Array(g);let p=0;for(let x=0;x<m.length;x++){const _=m[x];A.set(_,p),p+=_.byteLength}return A}};const xD=new Set([It,Jr,Zs]),Bu={[jv]:It,[Xv]:It,[zv]:It,[Wv]:It,[Kv]:Jr,[$v]:Jr,[Hv]:Jr,[Vv]:Jr,[Yv]:Zs,[qv]:Zs,[Gv]:Zs,[kv]:Zs,[Zv]:kc,[Jv]:kc},Ru={[jv]:Ft,[Xv]:Xt,[zv]:Tt,[Wv]:Tt,[Kv]:Ft,[$v]:Xt,[Hv]:Tt,[Vv]:Tt,[Yv]:Ft,[qv]:Xt,[Gv]:Tt,[kv]:Tt,[Zv]:Tt,[Jv]:Tt};async function SD(i){const{vkFormat:e}=i;if(Bu[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");let t;i.supercompressionScheme===Ag&&(Tu||(Tu=new Promise(async r=>{const o=new yD;await o.init(),r(o)})),t=await Tu);const n=[];for(let r=0;r<i.levels.length;r++){const o=Math.max(1,i.pixelWidth>>r),a=Math.max(1,i.pixelHeight>>r),l=i.pixelDepth?Math.max(1,i.pixelDepth>>r):0,c=i.levels[r];let h;if(i.supercompressionScheme===fD)h=c.levelData;else if(i.supercompressionScheme===Ag)h=t.decode(c.levelData,c.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");let u;Ru[e]===Ft?u=new Float32Array(h.buffer,h.byteOffset,h.byteLength/Float32Array.BYTES_PER_ELEMENT):Ru[e]===Xt?u=new Uint16Array(h.buffer,h.byteOffset,h.byteLength/Uint16Array.BYTES_PER_ELEMENT):u=h,n.push({data:u,width:o,height:a,depth:l})}let s;if(xD.has(Bu[e]))s=i.pixelDepth===0?new Ya(n[0].data,i.pixelWidth,i.pixelHeight):new tv(n[0].data,i.pixelWidth,i.pixelHeight,i.pixelDepth);else{if(i.pixelDepth>0)throw new Error("THREE.KTX2Loader: Unsupported pixelDepth.");s=new sr(n,i.pixelWidth,i.pixelHeight)}return s.mipmaps=n,s.type=Ru[e],s.format=Bu[e],s.colorSpace=ey(i),s.needsUpdate=!0,Promise.resolve(s)}function ey(i){const e=i.dataFormatDescriptor[0];return e.colorPrimaries===mD?e.transferFunction===pg?St:ct:e.colorPrimaries===gD?e.transferFunction===pg?fh:$a:(e.colorPrimaries===pD||console.warn(`THREE.KTX2Loader: Unsupported color primaries, "${e.colorPrimaries}"`),Fn)}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _g,Eg;const Wn=Symbol("retainerCount"),wi=Symbol("recentlyUsed"),Nl=Symbol("evict"),qo=Symbol("evictionThreshold"),Du=Symbol("cache");class ID{constructor(e,t=5){this[_g]=new Map,this[Eg]=[],this[Du]=e,this[qo]=t}set evictionThreshold(e){this[qo]=e,this[Nl]()}get evictionThreshold(){return this[qo]}get cache(){return this[Du]}retainerCount(e){return this[Wn].get(e)||0}reset(){this[Wn].clear(),this[wi]=[]}retain(e){this[Wn].has(e)||this[Wn].set(e,0),this[Wn].set(e,this[Wn].get(e)+1);const t=this[wi].indexOf(e);t!==-1&&this[wi].splice(t,1),this[wi].unshift(e),this[Nl]()}release(e){this[Wn].has(e)&&this[Wn].set(e,Math.max(this[Wn].get(e)-1,0)),this[Nl]()}[(_g=Wn,Eg=wi,Nl)](){if(!(this[wi].length<this[qo]))for(let e=this[wi].length-1;e>=this[qo];--e){const t=this[wi][e];this[Wn].get(t)===0&&(this[Du].delete(t),this[wi].splice(e,1))}}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CD=i=>{const e=[],t=new Set;for(const n of i){let s=n,r=0;for(;t.has(s);)s=n+"."+ ++r;t.add(s),e.push(s)}return e},MD=i=>{const e=new Map;for(const t of i.mappings)for(const n of t.variants)e.set(n,{material:null,gltfMaterialIndex:t.material});return e};class wD{constructor(e){this.parser=e,this.name="KHR_materials_variants"}afterRoot(e){const t=this.parser,n=t.json;if(n.extensions===void 0||n.extensions[this.name]===void 0)return null;const r=n.extensions[this.name].variants||[],o=CD(r.map(a=>a.name));for(const a of e.scenes)a.traverse(l=>{const c=l;if(!c.material)return;const h=t.associations.get(c);if(h==null||h.meshes==null||h.primitives==null)return;const m=n.meshes[h.meshes].primitives[h.primitives].extensions;!m||!m[this.name]||(c.userData.variantMaterials=MD(m[this.name]))});return e.userData.variants=o,Promise.resolve()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ty,vg;_t.DEFAULT_ANISOTROPY=4;const bD=(i,e,t=()=>{})=>{const n=s=>{const r=s.loaded/s.total;t(Math.max(0,Math.min(1,isFinite(r)?r:1)))};return new Promise((s,r)=>{e.load(i,s,n,r)})},TD=i=>new Promise((e,t)=>{const n=document.createElement("script");document.body.appendChild(n),n.onload=e,n.onerror=t,n.async=!0,n.src=i}),bi=new Map,Lu=new Map;let yg;const xg=new B1;let Sg;const Pu=new fi;let Fu,Uu;const zs=Symbol("loader"),ls=Symbol("evictionPolicy"),Ig=Symbol("GLTFInstance");class Gt extends ni{constructor(e){super(),this[vg]=new D1().register(t=>new wD(t)),this[Ig]=e,this[zs].setDRACOLoader(xg),this[zs].setKTX2Loader(Pu)}static setDRACODecoderLocation(e){yg=e,xg.setDecoderPath(e)}static getDRACODecoderLocation(){return yg}static setKTX2TranscoderLocation(e){Sg=e,Pu.setTranscoderPath(e)}static getKTX2TranscoderLocation(){return Sg}static setMeshoptDecoderLocation(e){Fu!==e&&(Fu=e,Uu=TD(e).then(()=>MeshoptDecoder.ready).then(()=>MeshoptDecoder))}static getMeshoptDecoderLocation(){return Fu}static initializeKTX2Loader(e){Pu.detectSupport(e)}static get cache(){return bi}static clearCache(){bi.forEach((e,t)=>{this.delete(t)}),this[ls].reset()}static has(e){return bi.has(e)}static async delete(e){if(!this.has(e))return;const t=bi.get(e);Lu.delete(e),bi.delete(e),(await t).dispose()}static hasFinishedLoading(e){return!!Lu.get(e)}get[(ty=ls,vg=zs,ls)](){return this.constructor[ls]}async preload(e,t,n=()=>{}){if(this[zs].setWithCredentials(Gt.withCredentials),this.dispatchEvent({type:"preload",element:t,src:e}),!bi.has(e)){Uu!=null&&this[zs].setMeshoptDecoder(await Uu);const s=bD(e,this[zs],a=>{n(a*.8)}),r=this[Ig],o=s.then(a=>r.prepare(a)).then(a=>(n(.9),new r(a))).catch(a=>(console.error(a),new r));bi.set(e,o)}await bi.get(e),Lu.set(e,!0),n&&n(1)}async load(e,t,n=()=>{}){await this.preload(e,t,n);const r=await(await bi.get(e)).clone();return this[ls].retain(e),r.dispose=()=>{this[ls].release(e)},r}}Gt[ty]=new ID(Gt);class BD extends ft{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new Re(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}}const Lr=new L,Cg=new Le,Mg=new Le,wg=new L,bg=new L;class RD{constructor(e={}){const t=this;let n,s,r,o;const a={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(f,m){f.matrixWorldAutoUpdate===!0&&f.updateMatrixWorld(),m.parent===null&&m.matrixWorldAutoUpdate===!0&&m.updateMatrixWorld(),Cg.copy(m.matrixWorldInverse),Mg.multiplyMatrices(m.projectionMatrix,Cg),c(f,f,m),d(f)},this.setSize=function(f,m){n=f,s=m,r=n/2,o=s/2,l.style.width=f+"px",l.style.height=m+"px"};function c(f,m,g){if(f.isCSS2DObject){Lr.setFromMatrixPosition(f.matrixWorld),Lr.applyMatrix4(Mg);const A=f.visible===!0&&Lr.z>=-1&&Lr.z<=1&&f.layers.test(g.layers)===!0;if(f.element.style.display=A===!0?"":"none",A===!0){f.onBeforeRender(t,m,g);const x=f.element;x.style.transform="translate("+-100*f.center.x+"%,"+-100*f.center.y+"%)translate("+(Lr.x*r+r)+"px,"+(-Lr.y*o+o)+"px)",x.parentNode!==l&&l.appendChild(x),f.onAfterRender(t,m,g)}const p={distanceToCameraSquared:h(g,f)};a.objects.set(f,p)}for(let A=0,p=f.children.length;A<p;A++)c(f.children[A],m,g)}function h(f,m){return wg.setFromMatrixPosition(f.matrixWorld),bg.setFromMatrixPosition(m.matrixWorld),wg.distanceToSquared(bg)}function u(f){const m=[];return f.traverse(function(g){g.isCSS2DObject&&m.push(g)}),m}function d(f){const m=u(f).sort(function(A,p){if(A.renderOrder!==p.renderOrder)return p.renderOrder-A.renderOrder;const x=a.objects.get(A).distanceToCameraSquared,_=a.objects.get(p).distanceToCameraSquared;return x-_}),g=m.length;for(let A=0,p=m.length;A<p;A++)m[A].element.style.zIndex=g-A}}}function Ol(i,e,t){let n=t;const s=new L;return i.updateWorldMatrix(!0,!0),i.traverseVisible(r=>{const{geometry:o}=r;if(o!==void 0){const{position:a}=o.attributes;if(a!==void 0)for(let l=0,c=a.count;l<c;l++)r.isMesh?r.getVertexPosition(l,s):s.fromBufferAttribute(a,l),r.isSkinnedMesh||s.applyMatrix4(r.matrixWorld),n=e(n,s)}}),n}let $o,Nu,Pr,Ql;function Cc(i,e=1/0,t=null){Nu||(Nu=new gi(2,2,1,1)),Pr||(Pr=new yn({uniforms:{blitTexture:new vA(i)},vertexShader:`
			varying vec2 vUv;
			void main(){
				vUv = uv;
				gl_Position = vec4(position.xy * 1.0,0.,.999999);
			}`,fragmentShader:`
			uniform sampler2D blitTexture; 
			varying vec2 vUv;

			void main(){ 
				gl_FragColor = vec4(vUv.xy, 0, 1);
				
				#ifdef IS_SRGB
				gl_FragColor = LinearTosRGB( texture2D( blitTexture, vUv) );
				#else
				gl_FragColor = texture2D( blitTexture, vUv);
				#endif
			}`})),Pr.uniforms.blitTexture.value=i,Pr.defines.IS_SRGB=i.colorSpace==St,Pr.needsUpdate=!0,Ql||(Ql=new ut(Nu,Pr),Ql.frustumCulled=!1);const n=new Vt,s=new ys;s.add(Ql),t===null&&(t=$o=new dA({antialias:!1}));const r=Math.min(i.image.width,e),o=Math.min(i.image.height,e);t.setSize(r,o),t.clear(),t.render(s,n);const a=document.createElement("canvas"),l=a.getContext("2d");a.width=r,a.height=o,l.drawImage(t.domElement,0,0,r,o);const c=new Ev(a);return c.minFilter=i.minFilter,c.magFilter=i.magFilter,c.wrapS=i.wrapS,c.wrapT=i.wrapT,c.name=i.name,$o&&($o.forceContextLoss(),$o.dispose(),$o=null),c}const Tg={POSITION:["byte","byte normalized","unsigned byte","unsigned byte normalized","short","short normalized","unsigned short","unsigned short normalized"],NORMAL:["byte normalized","short normalized"],TANGENT:["byte normalized","short normalized"],TEXCOORD:["byte","byte normalized","unsigned byte","short","short normalized","unsigned short"]};class xA{constructor(){this.pluginCallbacks=[],this.register(function(e){return new GD(e)}),this.register(function(e){return new HD(e)}),this.register(function(e){return new WD(e)}),this.register(function(e){return new qD(e)}),this.register(function(e){return new $D(e)}),this.register(function(e){return new XD(e)}),this.register(function(e){return new VD(e)}),this.register(function(e){return new zD(e)}),this.register(function(e){return new YD(e)}),this.register(function(e){return new KD(e)}),this.register(function(e){return new jD(e)}),this.register(function(e){return new JD(e)}),this.register(function(e){return new ZD(e)})}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){const r=new kD,o=[];for(let a=0,l=this.pluginCallbacks.length;a<l;a++)o.push(this.pluginCallbacks[a](r));r.setPlugins(o),r.write(e,t,s).catch(n)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,s,r,t)})}}const Ye={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,REPEAT:10497},Ou="KHR_mesh_quantization",Mn={};Mn[Pt]=Ye.NEAREST;Mn[Wa]=Ye.NEAREST_MIPMAP_NEAREST;Mn[ds]=Ye.NEAREST_MIPMAP_LINEAR;Mn[nt]=Ye.LINEAR;Mn[ir]=Ye.LINEAR_MIPMAP_NEAREST;Mn[_n]=Ye.LINEAR_MIPMAP_LINEAR;Mn[Bt]=Ye.CLAMP_TO_EDGE;Mn[ti]=Ye.REPEAT;Mn[or]=Ye.MIRRORED_REPEAT;const Bg={scale:"scale",position:"translation",quaternion:"rotation",morphTargetInfluences:"weights"},DD=new De,Rg=12,LD=1179937895,PD=2,Dg=8,FD=1313821514,UD=5130562;function fa(i,e){return i.length===e.length&&i.every(function(t,n){return t===e[n]})}function ND(i){return new TextEncoder().encode(i).buffer}function OD(i){return fa(i.elements,[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}function QD(i,e,t){const n={min:new Array(i.itemSize).fill(Number.POSITIVE_INFINITY),max:new Array(i.itemSize).fill(Number.NEGATIVE_INFINITY)};for(let s=e;s<e+t;s++)for(let r=0;r<i.itemSize;r++){let o;i.itemSize>4?o=i.array[s*i.itemSize+r]:(r===0?o=i.getX(s):r===1?o=i.getY(s):r===2?o=i.getZ(s):r===3&&(o=i.getW(s)),i.normalized===!0&&(o=qc.normalize(o,i.array))),n.min[r]=Math.min(n.min[r],o),n.max[r]=Math.max(n.max[r],o)}return n}function ny(i){return Math.ceil(i/4)*4}function Qu(i,e=0){const t=ny(i.byteLength);if(t!==i.byteLength){const n=new Uint8Array(t);if(n.set(new Uint8Array(i)),e!==0)for(let s=i.byteLength;s<t;s++)n[s]=e;return n.buffer}return i}function Lg(){return typeof document>"u"&&typeof OffscreenCanvas<"u"?new OffscreenCanvas(1,1):document.createElement("canvas")}function Pg(i,e){if(i.toBlob!==void 0)return new Promise(n=>i.toBlob(n,e));let t;return e==="image/jpeg"?t=.92:e==="image/webp"&&(t=.8),i.convertToBlob({type:e,quality:t})}class kD{constructor(){this.plugins=[],this.options={},this.pending=[],this.buffers=[],this.byteOffset=0,this.buffers=[],this.nodeMap=new Map,this.skins=[],this.extensionsUsed={},this.extensionsRequired={},this.uids=new Map,this.uid=0,this.json={asset:{version:"2.0",generator:"THREE.GLTFExporter"}},this.cache={meshes:new Map,attributes:new Map,attributesNormalized:new Map,materials:new Map,textures:new Map,images:new Map}}setPlugins(e){this.plugins=e}async write(e,t,n={}){this.options=Object.assign({binary:!1,trs:!1,onlyVisible:!0,maxTextureSize:1/0,animations:[],includeCustomExtensions:!1},n),this.options.animations.length>0&&(this.options.trs=!0),this.processInput(e),await Promise.all(this.pending);const s=this,r=s.buffers,o=s.json;n=s.options;const a=s.extensionsUsed,l=s.extensionsRequired,c=new Blob(r,{type:"application/octet-stream"}),h=Object.keys(a),u=Object.keys(l);if(h.length>0&&(o.extensionsUsed=h),u.length>0&&(o.extensionsRequired=u),o.buffers&&o.buffers.length>0&&(o.buffers[0].byteLength=c.size),n.binary===!0){const d=new FileReader;d.readAsArrayBuffer(c),d.onloadend=function(){const f=Qu(d.result),m=new DataView(new ArrayBuffer(Dg));m.setUint32(0,f.byteLength,!0),m.setUint32(4,UD,!0);const g=Qu(ND(JSON.stringify(o)),32),A=new DataView(new ArrayBuffer(Dg));A.setUint32(0,g.byteLength,!0),A.setUint32(4,FD,!0);const p=new ArrayBuffer(Rg),x=new DataView(p);x.setUint32(0,LD,!0),x.setUint32(4,PD,!0);const _=Rg+A.byteLength+g.byteLength+m.byteLength+f.byteLength;x.setUint32(8,_,!0);const C=new Blob([p,A,g,m,f],{type:"application/octet-stream"}),M=new FileReader;M.readAsArrayBuffer(C),M.onloadend=function(){t(M.result)}}}else if(o.buffers&&o.buffers.length>0){const d=new FileReader;d.readAsDataURL(c),d.onloadend=function(){const f=d.result;o.buffers[0].uri=f,t(o)}}else t(o)}serializeUserData(e,t){if(Object.keys(e.userData).length===0)return;const n=this.options,s=this.extensionsUsed;try{const r=JSON.parse(JSON.stringify(e.userData));if(n.includeCustomExtensions&&r.gltfExtensions){t.extensions===void 0&&(t.extensions={});for(const o in r.gltfExtensions)t.extensions[o]=r.gltfExtensions[o],s[o]=!0;delete r.gltfExtensions}Object.keys(r).length>0&&(t.extras=r)}catch(r){console.warn("THREE.GLTFExporter: userData of '"+e.name+"' won't be serialized because of JSON.stringify error - "+r.message)}}getUID(e,t=!1){if(this.uids.has(e)===!1){const s=new Map;s.set(!0,this.uid++),s.set(!1,this.uid++),this.uids.set(e,s)}return this.uids.get(e).get(t)}isNormalizedNormalAttribute(e){if(this.cache.attributesNormalized.has(e))return!1;const n=new L;for(let s=0,r=e.count;s<r;s++)if(Math.abs(n.fromBufferAttribute(e,s).length()-1)>5e-4)return!1;return!0}createNormalizedNormalAttribute(e){const t=this.cache;if(t.attributesNormalized.has(e))return t.attributesNormalized.get(e);const n=e.clone(),s=new L;for(let r=0,o=n.count;r<o;r++)s.fromBufferAttribute(n,r),s.x===0&&s.y===0&&s.z===0?s.setX(1):s.normalize(),n.setXYZ(r,s.x,s.y,s.z);return t.attributesNormalized.set(e,n),n}applyTextureTransform(e,t){let n=!1;const s={};(t.offset.x!==0||t.offset.y!==0)&&(s.offset=t.offset.toArray(),n=!0),t.rotation!==0&&(s.rotation=t.rotation,n=!0),(t.repeat.x!==1||t.repeat.y!==1)&&(s.scale=t.repeat.toArray(),n=!0),n&&(e.extensions=e.extensions||{},e.extensions.KHR_texture_transform=s,this.extensionsUsed.KHR_texture_transform=!0)}buildMetalRoughTexture(e,t){if(e===t)return e;function n(f){return f.colorSpace===St?function(g){return g<.04045?g*.0773993808:Math.pow(g*.9478672986+.0521327014,2.4)}:function(g){return g}}console.warn("THREE.GLTFExporter: Merged metalnessMap and roughnessMap textures."),e instanceof sr&&(e=Cc(e)),t instanceof sr&&(t=Cc(t));const s=e?e.image:null,r=t?t.image:null,o=Math.max(s?s.width:0,r?r.width:0),a=Math.max(s?s.height:0,r?r.height:0),l=Lg();l.width=o,l.height=a;const c=l.getContext("2d");c.fillStyle="#00ffff",c.fillRect(0,0,o,a);const h=c.getImageData(0,0,o,a);if(s){c.drawImage(s,0,0,o,a);const f=n(e),m=c.getImageData(0,0,o,a).data;for(let g=2;g<m.length;g+=4)h.data[g]=f(m[g]/256)*256}if(r){c.drawImage(r,0,0,o,a);const f=n(t),m=c.getImageData(0,0,o,a).data;for(let g=1;g<m.length;g+=4)h.data[g]=f(m[g]/256)*256}c.putImageData(h,0,0);const d=(e||t).clone();return d.source=new aA(l),d.colorSpace=Fn,d.channel=(e||t).channel,e&&t&&e.channel!==t.channel&&console.warn("THREE.GLTFExporter: UV channels for metalnessMap and roughnessMap textures must match."),d}processBuffer(e){const t=this.json,n=this.buffers;return t.buffers||(t.buffers=[{byteLength:0}]),n.push(e),0}processBufferView(e,t,n,s,r){const o=this.json;o.bufferViews||(o.bufferViews=[]);let a;switch(t){case Ye.BYTE:case Ye.UNSIGNED_BYTE:a=1;break;case Ye.SHORT:case Ye.UNSIGNED_SHORT:a=2;break;default:a=4}let l=e.itemSize*a;r===Ye.ARRAY_BUFFER&&(l=Math.ceil(l/4)*4);const c=ny(s*l),h=new DataView(new ArrayBuffer(c));let u=0;for(let m=n;m<n+s;m++){for(let g=0;g<e.itemSize;g++){let A;e.itemSize>4?A=e.array[m*e.itemSize+g]:(g===0?A=e.getX(m):g===1?A=e.getY(m):g===2?A=e.getZ(m):g===3&&(A=e.getW(m)),e.normalized===!0&&(A=qc.normalize(A,e.array))),t===Ye.FLOAT?h.setFloat32(u,A,!0):t===Ye.INT?h.setInt32(u,A,!0):t===Ye.UNSIGNED_INT?h.setUint32(u,A,!0):t===Ye.SHORT?h.setInt16(u,A,!0):t===Ye.UNSIGNED_SHORT?h.setUint16(u,A,!0):t===Ye.BYTE?h.setInt8(u,A):t===Ye.UNSIGNED_BYTE&&h.setUint8(u,A),u+=a}u%l!==0&&(u+=l-u%l)}const d={buffer:this.processBuffer(h.buffer),byteOffset:this.byteOffset,byteLength:c};return r!==void 0&&(d.target=r),r===Ye.ARRAY_BUFFER&&(d.byteStride=l),this.byteOffset+=c,o.bufferViews.push(d),{id:o.bufferViews.length-1,byteLength:0}}processBufferViewImage(e){const t=this,n=t.json;return n.bufferViews||(n.bufferViews=[]),new Promise(function(s){const r=new FileReader;r.readAsArrayBuffer(e),r.onloadend=function(){const o=Qu(r.result),a={buffer:t.processBuffer(o),byteOffset:t.byteOffset,byteLength:o.byteLength};t.byteOffset+=o.byteLength,s(n.bufferViews.push(a)-1)}})}processAccessor(e,t,n,s){const r=this.json,o={1:"SCALAR",2:"VEC2",3:"VEC3",4:"VEC4",9:"MAT3",16:"MAT4"};let a;if(e.array.constructor===Float32Array)a=Ye.FLOAT;else if(e.array.constructor===Int32Array)a=Ye.INT;else if(e.array.constructor===Uint32Array)a=Ye.UNSIGNED_INT;else if(e.array.constructor===Int16Array)a=Ye.SHORT;else if(e.array.constructor===Uint16Array)a=Ye.UNSIGNED_SHORT;else if(e.array.constructor===Int8Array)a=Ye.BYTE;else if(e.array.constructor===Uint8Array)a=Ye.UNSIGNED_BYTE;else throw new Error("THREE.GLTFExporter: Unsupported bufferAttribute component type: "+e.array.constructor.name);if(n===void 0&&(n=0),(s===void 0||s===1/0)&&(s=e.count),s===0)return null;const l=QD(e,n,s);let c;t!==void 0&&(c=e===t.index?Ye.ELEMENT_ARRAY_BUFFER:Ye.ARRAY_BUFFER);const h=this.processBufferView(e,a,n,s,c),u={bufferView:h.id,byteOffset:h.byteOffset,componentType:a,count:s,max:l.max,min:l.min,type:o[e.itemSize]};return e.normalized===!0&&(u.normalized=!0),r.accessors||(r.accessors=[]),r.accessors.push(u)-1}processImage(e,t,n,s="image/png"){if(e!==null){const r=this,o=r.cache,a=r.json,l=r.options,c=r.pending;o.images.has(e)||o.images.set(e,{});const h=o.images.get(e),u=s+":flipY/"+n.toString();if(h[u]!==void 0)return h[u];a.images||(a.images=[]);const d={mimeType:s},f=Lg();f.width=Math.min(e.width,l.maxTextureSize),f.height=Math.min(e.height,l.maxTextureSize);const m=f.getContext("2d");if(n===!0&&(m.translate(0,f.height),m.scale(1,-1)),e.data!==void 0){t!==It&&console.error("GLTFExporter: Only RGBAFormat is supported.",t),(e.width>l.maxTextureSize||e.height>l.maxTextureSize)&&console.warn("GLTFExporter: Image size is bigger than maxTextureSize",e);const A=new Uint8ClampedArray(e.height*e.width*4);for(let p=0;p<A.length;p+=4)A[p+0]=e.data[p+0],A[p+1]=e.data[p+1],A[p+2]=e.data[p+2],A[p+3]=e.data[p+3];m.putImageData(new ImageData(A,e.width,e.height),0,0)}else if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||typeof OffscreenCanvas<"u"&&e instanceof OffscreenCanvas)m.drawImage(e,0,0,f.width,f.height);else throw new Error("THREE.GLTFExporter: Invalid image type. Use HTMLImageElement, HTMLCanvasElement, ImageBitmap or OffscreenCanvas.");l.binary===!0?c.push(Pg(f,s).then(A=>r.processBufferViewImage(A)).then(A=>{d.bufferView=A})):f.toDataURL!==void 0?d.uri=f.toDataURL(s):c.push(Pg(f,s).then(A=>new FileReader().readAsDataURL(A)).then(A=>{d.uri=A}));const g=a.images.push(d)-1;return h[u]=g,g}else throw new Error("THREE.GLTFExporter: No valid image data found. Unable to process texture.")}processSampler(e){const t=this.json;t.samplers||(t.samplers=[]);const n={magFilter:Mn[e.magFilter],minFilter:Mn[e.minFilter],wrapS:Mn[e.wrapS],wrapT:Mn[e.wrapT]};return t.samplers.push(n)-1}processTexture(e){const n=this.options,s=this.cache,r=this.json;if(s.textures.has(e))return s.textures.get(e);r.textures||(r.textures=[]),e instanceof sr&&(e=Cc(e,n.maxTextureSize));let o=e.userData.mimeType;o==="image/webp"&&(o="image/png");const a={sampler:this.processSampler(e),source:this.processImage(e.image,e.format,e.flipY,o)};e.name&&(a.name=e.name),this._invokeAll(function(c){c.writeTexture&&c.writeTexture(e,a)});const l=r.textures.push(a)-1;return s.textures.set(e,l),l}processMaterial(e){const t=this.cache,n=this.json;if(t.materials.has(e))return t.materials.get(e);if(e.isShaderMaterial)return console.warn("GLTFExporter: THREE.ShaderMaterial not supported."),null;n.materials||(n.materials=[]);const s={pbrMetallicRoughness:{}};e.isMeshStandardMaterial!==!0&&e.isMeshBasicMaterial!==!0&&console.warn("GLTFExporter: Use MeshStandardMaterial or MeshBasicMaterial for best results.");const r=e.color.toArray().concat([e.opacity]);if(fa(r,[1,1,1,1])||(s.pbrMetallicRoughness.baseColorFactor=r),e.isMeshStandardMaterial?(s.pbrMetallicRoughness.metallicFactor=e.metalness,s.pbrMetallicRoughness.roughnessFactor=e.roughness):(s.pbrMetallicRoughness.metallicFactor=.5,s.pbrMetallicRoughness.roughnessFactor=.5),e.metalnessMap||e.roughnessMap){const a=this.buildMetalRoughTexture(e.metalnessMap,e.roughnessMap),l={index:this.processTexture(a),channel:a.channel};this.applyTextureTransform(l,a),s.pbrMetallicRoughness.metallicRoughnessTexture=l}if(e.map){const a={index:this.processTexture(e.map),texCoord:e.map.channel};this.applyTextureTransform(a,e.map),s.pbrMetallicRoughness.baseColorTexture=a}if(e.emissive){const a=e.emissive;if(Math.max(a.r,a.g,a.b)>0&&(s.emissiveFactor=e.emissive.toArray()),e.emissiveMap){const c={index:this.processTexture(e.emissiveMap),texCoord:e.emissiveMap.channel};this.applyTextureTransform(c,e.emissiveMap),s.emissiveTexture=c}}if(e.normalMap){const a={index:this.processTexture(e.normalMap),texCoord:e.normalMap.channel};e.normalScale&&e.normalScale.x!==1&&(a.scale=e.normalScale.x),this.applyTextureTransform(a,e.normalMap),s.normalTexture=a}if(e.aoMap){const a={index:this.processTexture(e.aoMap),texCoord:e.aoMap.channel};e.aoMapIntensity!==1&&(a.strength=e.aoMapIntensity),this.applyTextureTransform(a,e.aoMap),s.occlusionTexture=a}e.transparent?s.alphaMode="BLEND":e.alphaTest>0&&(s.alphaMode="MASK",s.alphaCutoff=e.alphaTest),e.side===rn&&(s.doubleSided=!0),e.name!==""&&(s.name=e.name),this.serializeUserData(e,s),this._invokeAll(function(a){a.writeMaterial&&a.writeMaterial(e,s)});const o=n.materials.push(s)-1;return t.materials.set(e,o),o}processMesh(e){const t=this.cache,n=this.json,s=[e.geometry.uuid];if(Array.isArray(e.material))for(let C=0,M=e.material.length;C<M;C++)s.push(e.material[C].uuid);else s.push(e.material.uuid);const r=s.join(":");if(t.meshes.has(r))return t.meshes.get(r);const o=e.geometry;let a;e.isLineSegments?a=Ye.LINES:e.isLineLoop?a=Ye.LINE_LOOP:e.isLine?a=Ye.LINE_STRIP:e.isPoints?a=Ye.POINTS:a=e.material.wireframe?Ye.LINES:Ye.TRIANGLES;const l={},c={},h=[],u=[],d={uv:"TEXCOORD_0",uv1:"TEXCOORD_1",uv2:"TEXCOORD_2",uv3:"TEXCOORD_3",color:"COLOR_0",skinWeight:"WEIGHTS_0",skinIndex:"JOINTS_0"},f=o.getAttribute("normal");f!==void 0&&!this.isNormalizedNormalAttribute(f)&&(console.warn("THREE.GLTFExporter: Creating normalized normal attribute from the non-normalized one."),o.setAttribute("normal",this.createNormalizedNormalAttribute(f)));let m=null;for(let C in o.attributes){if(C.slice(0,5)==="morph")continue;const M=o.attributes[C];if(C=d[C]||C.toUpperCase(),/^(POSITION|NORMAL|TANGENT|TEXCOORD_\d+|COLOR_\d+|JOINTS_\d+|WEIGHTS_\d+)$/.test(C)||(C="_"+C),t.attributes.has(this.getUID(M))){c[C]=t.attributes.get(this.getUID(M));continue}m=null;const w=M.array;C==="JOINTS_0"&&!(w instanceof Uint16Array)&&!(w instanceof Uint8Array)&&(console.warn('GLTFExporter: Attribute "skinIndex" converted to type UNSIGNED_SHORT.'),m=new Ct(new Uint16Array(w),M.itemSize,M.normalized));const B=this.processAccessor(m||M,o);B!==null&&(C.startsWith("_")||this.detectMeshQuantization(C,M),c[C]=B,t.attributes.set(this.getUID(M),B))}if(f!==void 0&&o.setAttribute("normal",f),Object.keys(c).length===0)return null;if(e.morphTargetInfluences!==void 0&&e.morphTargetInfluences.length>0){const C=[],M=[],I={};if(e.morphTargetDictionary!==void 0)for(const w in e.morphTargetDictionary)I[e.morphTargetDictionary[w]]=w;for(let w=0;w<e.morphTargetInfluences.length;++w){const B={};let y=!1;for(const v in o.morphAttributes){if(v!=="position"&&v!=="normal"){y||(console.warn("GLTFExporter: Only POSITION and NORMAL morph are supported."),y=!0);continue}const U=o.morphAttributes[v][w],V=v.toUpperCase(),D=o.attributes[v];if(t.attributes.has(this.getUID(U,!0))){B[V]=t.attributes.get(this.getUID(U,!0));continue}const G=U.clone();if(!o.morphTargetsRelative)for(let H=0,X=U.count;H<X;H++)for(let q=0;q<U.itemSize;q++)q===0&&G.setX(H,U.getX(H)-D.getX(H)),q===1&&G.setY(H,U.getY(H)-D.getY(H)),q===2&&G.setZ(H,U.getZ(H)-D.getZ(H)),q===3&&G.setW(H,U.getW(H)-D.getW(H));B[V]=this.processAccessor(G,o),t.attributes.set(this.getUID(D,!0),B[V])}u.push(B),C.push(e.morphTargetInfluences[w]),e.morphTargetDictionary!==void 0&&M.push(I[w])}l.weights=C,M.length>0&&(l.extras={},l.extras.targetNames=M)}const g=Array.isArray(e.material);if(g&&o.groups.length===0)return null;let A=!1;if(g&&o.index===null){const C=[];for(let M=0,I=o.attributes.position.count;M<I;M++)C[M]=M;o.setIndex(C),A=!0}const p=g?e.material:[e.material],x=g?o.groups:[{materialIndex:0,start:void 0,count:void 0}];for(let C=0,M=x.length;C<M;C++){const I={mode:a,attributes:c};if(this.serializeUserData(o,I),u.length>0&&(I.targets=u),o.index!==null){let B=this.getUID(o.index);(x[C].start!==void 0||x[C].count!==void 0)&&(B+=":"+x[C].start+":"+x[C].count),t.attributes.has(B)?I.indices=t.attributes.get(B):(I.indices=this.processAccessor(o.index,o,x[C].start,x[C].count),t.attributes.set(B,I.indices)),I.indices===null&&delete I.indices}const w=this.processMaterial(p[x[C].materialIndex]);w!==null&&(I.material=w),h.push(I)}A===!0&&o.setIndex(null),l.primitives=h,n.meshes||(n.meshes=[]),this._invokeAll(function(C){C.writeMesh&&C.writeMesh(e,l)});const _=n.meshes.push(l)-1;return t.meshes.set(r,_),_}detectMeshQuantization(e,t){if(this.extensionsUsed[Ou])return;let n;switch(t.array.constructor){case Int8Array:n="byte";break;case Uint8Array:n="unsigned byte";break;case Int16Array:n="short";break;case Uint16Array:n="unsigned short";break;default:return}t.normalized&&(n+=" normalized");const s=e.split("_",1)[0];Tg[s]&&Tg[s].includes(n)&&(this.extensionsUsed[Ou]=!0,this.extensionsRequired[Ou]=!0)}processCamera(e){const t=this.json;t.cameras||(t.cameras=[]);const n=e.isOrthographicCamera,s={type:n?"orthographic":"perspective"};return n?s.orthographic={xmag:e.right*2,ymag:e.top*2,zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near}:s.perspective={aspectRatio:e.aspect,yfov:qc.degToRad(e.fov),zfar:e.far<=0?.001:e.far,znear:e.near<0?0:e.near},e.name!==""&&(s.name=e.type),t.cameras.push(s)-1}processAnimation(e,t){const n=this.json,s=this.nodeMap;n.animations||(n.animations=[]),e=xA.Utils.mergeMorphTargetTracks(e.clone(),t);const r=e.tracks,o=[],a=[];for(let l=0;l<r.length;++l){const c=r[l],h=Ze.parseTrackName(c.name);let u=Ze.findNode(t,h.nodeName);const d=Bg[h.propertyName];if(h.objectName==="bones"&&(u.isSkinnedMesh===!0?u=u.skeleton.getBoneByName(h.objectIndex):u=void 0),!u||!d)return console.warn('THREE.GLTFExporter: Could not export animation track "%s".',c.name),null;const f=1;let m=c.values.length/c.times.length;d===Bg.morphTargetInfluences&&(m/=u.morphTargetInfluences.length);let g;c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline===!0?(g="CUBICSPLINE",m/=3):c.getInterpolation()===Eo?g="STEP":g="LINEAR",a.push({input:this.processAccessor(new Ct(c.times,f)),output:this.processAccessor(new Ct(c.values,m)),interpolation:g}),o.push({sampler:a.length-1,target:{node:s.get(u),path:d}})}return n.animations.push({name:e.name||"clip_"+n.animations.length,samplers:a,channels:o}),n.animations.length-1}processSkin(e){const t=this.json,n=this.nodeMap,s=t.nodes[n.get(e)],r=e.skeleton;if(r===void 0)return null;const o=e.skeleton.bones[0];if(o===void 0)return null;const a=[],l=new Float32Array(r.bones.length*16),c=new Le;for(let u=0;u<r.bones.length;++u)a.push(n.get(r.bones[u])),c.copy(r.boneInverses[u]),c.multiply(e.bindMatrix).toArray(l,u*16);return t.skins===void 0&&(t.skins=[]),t.skins.push({inverseBindMatrices:this.processAccessor(new Ct(l,16)),joints:a,skeleton:n.get(o)}),s.skin=t.skins.length-1}processNode(e){const t=this.json,n=this.options,s=this.nodeMap;t.nodes||(t.nodes=[]);const r={};if(n.trs){const a=e.quaternion.toArray(),l=e.position.toArray(),c=e.scale.toArray();fa(a,[0,0,0,1])||(r.rotation=a),fa(l,[0,0,0])||(r.translation=l),fa(c,[1,1,1])||(r.scale=c)}else e.matrixAutoUpdate&&e.updateMatrix(),OD(e.matrix)===!1&&(r.matrix=e.matrix.elements);if(e.name!==""&&(r.name=String(e.name)),this.serializeUserData(e,r),e.isMesh||e.isLine||e.isPoints){const a=this.processMesh(e);a!==null&&(r.mesh=a)}else e.isCamera&&(r.camera=this.processCamera(e));if(e.isSkinnedMesh&&this.skins.push(e),e.children.length>0){const a=[];for(let l=0,c=e.children.length;l<c;l++){const h=e.children[l];if(h.visible||n.onlyVisible===!1){const u=this.processNode(h);u!==null&&a.push(u)}}a.length>0&&(r.children=a)}this._invokeAll(function(a){a.writeNode&&a.writeNode(e,r)});const o=t.nodes.push(r)-1;return s.set(e,o),o}processScene(e){const t=this.json,n=this.options;t.scenes||(t.scenes=[],t.scene=0);const s={};e.name!==""&&(s.name=e.name),t.scenes.push(s);const r=[];for(let o=0,a=e.children.length;o<a;o++){const l=e.children[o];if(l.visible||n.onlyVisible===!1){const c=this.processNode(l);c!==null&&r.push(c)}}r.length>0&&(s.nodes=r),this.serializeUserData(e,s)}processObjects(e){const t=new ys;t.name="AuxScene";for(let n=0;n<e.length;n++)t.children.push(e[n]);this.processScene(t)}processInput(e){const t=this.options;e=e instanceof Array?e:[e],this._invokeAll(function(s){s.beforeParse&&s.beforeParse(e)});const n=[];for(let s=0;s<e.length;s++)e[s]instanceof ys?this.processScene(e[s]):n.push(e[s]);n.length>0&&this.processObjects(n);for(let s=0;s<this.skins.length;++s)this.processSkin(this.skins[s]);for(let s=0;s<t.animations.length;++s)this.processAnimation(t.animations[s],e[0]);this._invokeAll(function(s){s.afterParse&&s.afterParse(e)})}_invokeAll(e){for(let t=0,n=this.plugins.length;t<n;t++)e(this.plugins[t])}}class GD{constructor(e){this.writer=e,this.name="KHR_lights_punctual"}writeNode(e,t){if(!e.isLight)return;if(!e.isDirectionalLight&&!e.isPointLight&&!e.isSpotLight){console.warn("THREE.GLTFExporter: Only directional, point, and spot lights are supported.",e);return}const n=this.writer,s=n.json,r=n.extensionsUsed,o={};e.name&&(o.name=e.name),o.color=e.color.toArray(),o.intensity=e.intensity,e.isDirectionalLight?o.type="directional":e.isPointLight?(o.type="point",e.distance>0&&(o.range=e.distance)):e.isSpotLight&&(o.type="spot",e.distance>0&&(o.range=e.distance),o.spot={},o.spot.innerConeAngle=(1-e.penumbra)*e.angle,o.spot.outerConeAngle=e.angle),e.decay!==void 0&&e.decay!==2&&console.warn("THREE.GLTFExporter: Light decay may be lost. glTF is physically-based, and expects light.decay=2."),e.target&&(e.target.parent!==e||e.target.position.x!==0||e.target.position.y!==0||e.target.position.z!==-1)&&console.warn("THREE.GLTFExporter: Light direction may be lost. For best results, make light.target a child of the light with position 0,0,-1."),r[this.name]||(s.extensions=s.extensions||{},s.extensions[this.name]={lights:[]},r[this.name]=!0);const a=s.extensions[this.name].lights;a.push(o),t.extensions=t.extensions||{},t.extensions[this.name]={light:a.length-1}}}class HD{constructor(e){this.writer=e,this.name="KHR_materials_unlit"}writeMaterial(e,t){if(!e.isMeshBasicMaterial)return;const s=this.writer.extensionsUsed;t.extensions=t.extensions||{},t.extensions[this.name]={},s[this.name]=!0,t.pbrMetallicRoughness.metallicFactor=0,t.pbrMetallicRoughness.roughnessFactor=.9}}class VD{constructor(e){this.writer=e,this.name="KHR_materials_clearcoat"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.clearcoat===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.clearcoatFactor=e.clearcoat,e.clearcoatMap){const o={index:n.processTexture(e.clearcoatMap),texCoord:e.clearcoatMap.channel};n.applyTextureTransform(o,e.clearcoatMap),r.clearcoatTexture=o}if(r.clearcoatRoughnessFactor=e.clearcoatRoughness,e.clearcoatRoughnessMap){const o={index:n.processTexture(e.clearcoatRoughnessMap),texCoord:e.clearcoatRoughnessMap.channel};n.applyTextureTransform(o,e.clearcoatRoughnessMap),r.clearcoatRoughnessTexture=o}if(e.clearcoatNormalMap){const o={index:n.processTexture(e.clearcoatNormalMap),texCoord:e.clearcoatNormalMap.channel};n.applyTextureTransform(o,e.clearcoatNormalMap),r.clearcoatNormalTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class zD{constructor(e){this.writer=e,this.name="KHR_materials_iridescence"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.iridescence===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.iridescenceFactor=e.iridescence,e.iridescenceMap){const o={index:n.processTexture(e.iridescenceMap),texCoord:e.iridescenceMap.channel};n.applyTextureTransform(o,e.iridescenceMap),r.iridescenceTexture=o}if(r.iridescenceIor=e.iridescenceIOR,r.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],r.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1],e.iridescenceThicknessMap){const o={index:n.processTexture(e.iridescenceThicknessMap),texCoord:e.iridescenceThicknessMap.channel};n.applyTextureTransform(o,e.iridescenceThicknessMap),r.iridescenceThicknessTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class WD{constructor(e){this.writer=e,this.name="KHR_materials_transmission"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.transmissionFactor=e.transmission,e.transmissionMap){const o={index:n.processTexture(e.transmissionMap),texCoord:e.transmissionMap.channel};n.applyTextureTransform(o,e.transmissionMap),r.transmissionTexture=o}t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class qD{constructor(e){this.writer=e,this.name="KHR_materials_volume"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.transmission===0)return;const n=this.writer,s=n.extensionsUsed,r={};if(r.thicknessFactor=e.thickness,e.thicknessMap){const o={index:n.processTexture(e.thicknessMap),texCoord:e.thicknessMap.channel};n.applyTextureTransform(o,e.thicknessMap),r.thicknessTexture=o}r.attenuationDistance=e.attenuationDistance,r.attenuationColor=e.attenuationColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class $D{constructor(e){this.writer=e,this.name="KHR_materials_ior"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.ior===1.5)return;const s=this.writer.extensionsUsed,r={};r.ior=e.ior,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class XD{constructor(e){this.writer=e,this.name="KHR_materials_specular"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.specularIntensity===1&&e.specularColor.equals(DD)&&!e.specularIntensityMap&&!e.specularColorMap)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.specularIntensityMap){const o={index:n.processTexture(e.specularIntensityMap),texCoord:e.specularIntensityMap.channel};n.applyTextureTransform(o,e.specularIntensityMap),r.specularTexture=o}if(e.specularColorMap){const o={index:n.processTexture(e.specularColorMap),texCoord:e.specularColorMap.channel};n.applyTextureTransform(o,e.specularColorMap),r.specularColorTexture=o}r.specularFactor=e.specularIntensity,r.specularColorFactor=e.specularColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class YD{constructor(e){this.writer=e,this.name="KHR_materials_sheen"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.sheen==0)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.sheenRoughnessMap){const o={index:n.processTexture(e.sheenRoughnessMap),texCoord:e.sheenRoughnessMap.channel};n.applyTextureTransform(o,e.sheenRoughnessMap),r.sheenRoughnessTexture=o}if(e.sheenColorMap){const o={index:n.processTexture(e.sheenColorMap),texCoord:e.sheenColorMap.channel};n.applyTextureTransform(o,e.sheenColorMap),r.sheenColorTexture=o}r.sheenRoughnessFactor=e.sheenRoughness,r.sheenColorFactor=e.sheenColor.toArray(),t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class KD{constructor(e){this.writer=e,this.name="KHR_materials_anisotropy"}writeMaterial(e,t){if(!e.isMeshPhysicalMaterial||e.anisotropy==0)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.anisotropyMap){const o={index:n.processTexture(e.anisotropyMap)};n.applyTextureTransform(o,e.anisotropyMap),r.anisotropyTexture=o}r.anisotropyStrength=e.anisotropy,r.anisotropyRotation=e.anisotropyRotation,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class jD{constructor(e){this.writer=e,this.name="KHR_materials_emissive_strength"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.emissiveIntensity===1)return;const s=this.writer.extensionsUsed,r={};r.emissiveStrength=e.emissiveIntensity,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class JD{constructor(e){this.writer=e,this.name="EXT_materials_bump"}writeMaterial(e,t){if(!e.isMeshStandardMaterial||e.bumpScale===1&&!e.bumpMap)return;const n=this.writer,s=n.extensionsUsed,r={};if(e.bumpMap){const o={index:n.processTexture(e.bumpMap),texCoord:e.bumpMap.channel};n.applyTextureTransform(o,e.bumpMap),r.bumpTexture=o}r.bumpFactor=e.bumpScale,t.extensions=t.extensions||{},t.extensions[this.name]=r,s[this.name]=!0}}class ZD{constructor(e){this.writer=e,this.name="EXT_mesh_gpu_instancing"}writeNode(e,t){if(!e.isInstancedMesh)return;const n=this.writer,s=e,r=new Float32Array(s.count*3),o=new Float32Array(s.count*4),a=new Float32Array(s.count*3),l=new Le,c=new L,h=new bn,u=new L;for(let f=0;f<s.count;f++)s.getMatrixAt(f,l),l.decompose(c,h,u),c.toArray(r,f*3),h.toArray(o,f*4),u.toArray(a,f*3);const d={TRANSLATION:n.processAccessor(new Ct(r,3)),ROTATION:n.processAccessor(new Ct(o,4)),SCALE:n.processAccessor(new Ct(a,3))};s.instanceColor&&(d._COLOR_0=n.processAccessor(s.instanceColor)),t.extensions=t.extensions||{},t.extensions[this.name]={attributes:d},n.extensionsUsed[this.name]=!0,n.extensionsRequired[this.name]=!0}}xA.Utils={insertKeyframe:function(i,e){const n=i.getValueSize(),s=new i.TimeBufferType(i.times.length+1),r=new i.ValueBufferType(i.values.length+n),o=i.createInterpolant(new i.ValueBufferType(n));let a;if(i.times.length===0){s[0]=e;for(let l=0;l<n;l++)r[l]=0;a=0}else if(e<i.times[0]){if(Math.abs(i.times[0]-e)<.001)return 0;s[0]=e,s.set(i.times,1),r.set(o.evaluate(e),0),r.set(i.values,n),a=0}else if(e>i.times[i.times.length-1]){if(Math.abs(i.times[i.times.length-1]-e)<.001)return i.times.length-1;s[s.length-1]=e,s.set(i.times,0),r.set(i.values,0),r.set(o.evaluate(e),i.values.length),a=s.length-1}else for(let l=0;l<i.times.length;l++){if(Math.abs(i.times[l]-e)<.001)return l;if(i.times[l]<e&&i.times[l+1]>e){s.set(i.times.slice(0,l+1),0),s[l+1]=e,s.set(i.times.slice(l+1),l+2),r.set(i.values.slice(0,(l+1)*n),0),r.set(o.evaluate(e),(l+1)*n),r.set(i.values.slice((l+1)*n),(l+2)*n),a=l+1;break}}return i.times=s,i.values=r,a},mergeMorphTargetTracks:function(i,e){const t=[],n={},s=i.tracks;for(let r=0;r<s.length;++r){let o=s[r];const a=Ze.parseTrackName(o.name),l=Ze.findNode(e,a.nodeName);if(a.propertyName!=="morphTargetInfluences"||a.propertyIndex===void 0){t.push(o);continue}if(o.createInterpolant!==o.InterpolantFactoryMethodDiscrete&&o.createInterpolant!==o.InterpolantFactoryMethodLinear){if(o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline)throw new Error("THREE.GLTFExporter: Cannot merge tracks with glTF CUBICSPLINE interpolation.");console.warn("THREE.GLTFExporter: Morph target interpolation mode not yet supported. Using LINEAR instead."),o=o.clone(),o.setInterpolation(lr)}const c=l.morphTargetInfluences.length,h=l.morphTargetDictionary[a.propertyIndex];if(h===void 0)throw new Error("THREE.GLTFExporter: Morph target name not found: "+a.propertyIndex);let u;if(n[l.uuid]===void 0){u=o.clone();const f=new u.ValueBufferType(c*u.times.length);for(let m=0;m<u.times.length;m++)f[m*c+h]=u.values[m];u.name=(a.nodeName||"")+".morphTargetInfluences",u.values=f,n[l.uuid]=u,t.push(u);continue}const d=o.createInterpolant(new o.ValueBufferType(1));u=n[l.uuid];for(let f=0;f<u.times.length;f++)u.values[f*c+h]=d.evaluate(u.times[f]);for(let f=0;f<o.times.length;f++){const m=this.insertKeyframe(u,o.times[f]);u.values[m*c+h]=o.values[f]}}return i.tracks=t,i}};/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg=i=>i.material!==void 0&&i.userData&&i.userData.variantMaterials&&!!Array.from(i.userData.variantMaterials.values()).filter(e=>Mc(e.material)),Mc=i=>i&&i.isMaterial&&!Array.isArray(i);class eL{constructor(e){this.writer=e,this.name="KHR_materials_variants",this.variantNames=[]}beforeParse(e){const t=new Set;for(const n of e)n.traverse(s=>{if(!Fg(s))return;const r=s.userData.variantMaterials,o=s.userData.variantData;for(const[a,l]of o){const c=r.get(l.index);c&&Mc(c.material)&&t.add(a)}});t.forEach(n=>this.variantNames.push(n))}writeMesh(e,t){if(!Fg(e))return;const n=e.userData,s=n.variantMaterials,r=n.variantData,o=new Map,a=new Map,l=Array.from(r.values()).sort((u,d)=>u.index-d.index);for(const[u,d]of l.entries())a.set(d.index,u);for(const u of r.values()){const d=s.get(u.index);if(!d||!Mc(d.material))continue;const f=this.writer.processMaterial(d.material);o.has(f)||o.set(f,{material:f,variants:[]}),o.get(f).variants.push(a.get(u.index))}const c=Array.from(o.values()).map(u=>u.variants.sort((d,f)=>d-f)&&u).sort((u,d)=>u.material-d.material);if(c.length===0)return;const h=Mc(n.originalMaterial)?this.writer.processMaterial(n.originalMaterial):-1;for(const u of t.primitives)h>=0&&(u.material=h),u.extensions=u.extensions||{},u.extensions[this.name]={mappings:c}}afterParse(){if(this.variantNames.length===0)return;const e=this.writer.json;e.extensions=e.extensions||{};const t=this.variantNames.map(n=>({name:n}));e.extensions[this.name]={variants:t},this.writer.extensionsUsed[this.name]=!0}}class tL{constructor(e,t,n,s,r){this.xrLight=e,this.renderer=t,this.lightProbe=n,this.xrWebGLBinding=null,this.estimationStartCallback=r,this.frameCallback=this.onXRFrame.bind(this);const o=t.xr.getSession();if(s&&"XRWebGLBinding"in window){const a=new cA(16);e.environment=a.texture;const l=t.getContext();switch(o.preferredReflectionFormat){case"srgba8":l.getExtension("EXT_sRGB");break;case"rgba16f":l.getExtension("OES_texture_half_float");break}this.xrWebGLBinding=new XRWebGLBinding(o,l),this.lightProbe.addEventListener("reflectionchange",()=>{this.updateReflection()})}o.requestAnimationFrame(this.frameCallback)}updateReflection(){const e=this.renderer.properties.get(this.xrLight.environment);if(e){const t=this.xrWebGLBinding.getReflectionCubeMap(this.lightProbe);t&&(e.__webglTexture=t,this.xrLight.environment.needsPMREMUpdate=!0)}}onXRFrame(e,t){if(!this.xrLight)return;t.session.requestAnimationFrame(this.frameCallback);const s=t.getLightEstimate(this.lightProbe);if(s){this.xrLight.lightProbe.sh.fromArray(s.sphericalHarmonicsCoefficients),this.xrLight.lightProbe.intensity=1;const r=Math.max(1,Math.max(s.primaryLightIntensity.x,Math.max(s.primaryLightIntensity.y,s.primaryLightIntensity.z)));this.xrLight.directionalLight.color.setRGB(s.primaryLightIntensity.x/r,s.primaryLightIntensity.y/r,s.primaryLightIntensity.z/r),this.xrLight.directionalLight.intensity=r,this.xrLight.directionalLight.position.copy(s.primaryLightDirection),this.estimationStartCallback&&(this.estimationStartCallback(),this.estimationStartCallback=null)}}dispose(){this.xrLight=null,this.renderer=null,this.lightProbe=null,this.xrWebGLBinding=null}}class nL extends fs{constructor(e,t=!0){super(),this.lightProbe=new LR,this.lightProbe.intensity=0,this.add(this.lightProbe),this.directionalLight=new Mv,this.directionalLight.intensity=0,this.add(this.directionalLight),this.environment=null;let n=null,s=!1;e.xr.addEventListener("sessionstart",()=>{const r=e.xr.getSession();"requestLightProbe"in r&&r.requestLightProbe({reflectionFormat:r.preferredReflectionFormat}).then(o=>{n=new tL(this,e,o,t,()=>{s=!0,this.dispatchEvent({type:"estimationstart"})})})}),e.xr.addEventListener("sessionend",()=>{n&&(n.dispose(),n=null),s&&this.dispatchEvent({type:"estimationend"})}),this.dispose=()=>{n&&(n.dispose(),n=null),this.remove(this.lightProbe),this.lightProbe=null,this.remove(this.directionalLight),this.directionalLight=null,this.environment=null}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iy=1e4,iL=.001,sy=50;class Cn{constructor(e=sy){this.velocity=0,this.naturalFrequency=0,this.setDecayTime(e)}setDecayTime(e){this.naturalFrequency=1/Math.max(iL,e)}update(e,t,n,s){const r=2e-4*this.naturalFrequency;if(e==null||s===0||e===t&&this.velocity===0)return t;if(n<0)return e;const o=e-t,a=this.velocity+this.naturalFrequency*o,l=o+n*a,c=Math.exp(-this.naturalFrequency*n),h=(a-this.naturalFrequency*l)*c,u=-this.naturalFrequency*(h+a*c);return Math.abs(h)<r*Math.abs(s)&&u*o>=0?(this.velocity=0,t):(this.velocity=h,t+l*c)}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const no=.2,Ug=.03,sL=.75,ry=12,rL=Math.PI/(2*ry),Ng=new Re,kl=(i,e,t)=>{let n=e>0?t>0?0:-Math.PI/2:t>0?Math.PI/2:Math.PI;for(let s=0;s<=ry;++s)i.push(e+(no-Ug)*Math.cos(n),t+(no-Ug)*Math.sin(n),0,e+no*Math.cos(n),t+no*Math.sin(n),0),n+=rL};class Og extends ut{constructor(e,t){const n=new Bn,s=[],r=[],{size:o,boundingBox:a}=e,l=o.x/2,c=(t==="back"?o.y:o.z)/2;kl(r,l,c),kl(r,-l,c),kl(r,-l,-c),kl(r,l,-c);const h=r.length/3;for(let f=0;f<h-2;f+=2)s.push(f,f+1,f+3,f,f+3,f+2);const u=h-2;s.push(u,u+1,1,u,1,0),n.setAttribute("position",new Tn(r,3)),n.setIndex(s),super(n),this.side=t;const d=this.material;switch(d.side=rn,d.transparent=!0,d.opacity=0,this.goalOpacity=0,this.opacityDamper=new Cn,this.hitPlane=new ut(new gi(2*(l+no),2*(c+no))),this.hitPlane.visible=!1,this.hitPlane.material.side=rn,this.add(this.hitPlane),a.getCenter(this.position),t){case"bottom":this.rotateX(-Math.PI/2),this.shadowHeight=a.min.y,this.position.y=this.shadowHeight;break;case"back":this.shadowHeight=a.min.z,this.position.z=this.shadowHeight}e.target.add(this),this.offsetHeight=0}getHit(e,t,n){Ng.set(t,-n),this.hitPlane.visible=!0;const s=e.positionAndNormalFromPoint(Ng,this.hitPlane);return this.hitPlane.visible=!1,s==null?null:s.position}getExpandedHit(e,t,n){this.hitPlane.scale.set(1e3,1e3,1e3),this.hitPlane.updateMatrixWorld();const s=this.getHit(e,t,n);return this.hitPlane.scale.set(1,1,1),s}set offsetHeight(e){e-=.001,this.side==="back"?this.position.z=this.shadowHeight+e:this.position.y=this.shadowHeight+e}get offsetHeight(){return this.side==="back"?this.position.z-this.shadowHeight:this.position.y-this.shadowHeight}set show(e){this.goalOpacity=e?sL:0}updateOpacity(e){const t=this.material;t.opacity=this.opacityDamper.update(t.opacity,this.goalOpacity,e,1),this.visible=t.opacity>0}dispose(){var e;const{geometry:t,material:n}=this.hitPlane;t.dispose(),n.dispose(),this.geometry.dispose(),this.material.dispose(),(e=this.parent)===null||e===void 0||e.remove(this)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=(i,e)=>({type:"number",number:i,unit:e}),ki=(()=>{const i={};return t=>{const n=t;if(n in i)return i[n];const s=[];let r=0;for(;t;){if(++r>1e3){t="";break}const o=oy(t),a=o.nodes[0];if(a==null||a.terms.length===0)break;s.push(a),t=o.remainingInput}return i[n]=s}})(),oy=(()=>{const i=/^(\-\-|[a-z\u0240-\uffff])/i,e=/^([\*\+\/]|[\-]\s)/i,t=/^[\),]/,n="(",s="#";return r=>{const o=[];for(;r.length&&(r=r.trim(),!t.test(r));)if(r[0]===n){const{nodes:a,remainingInput:l}=Qg(r);r=l,o.push({type:"function",name:{type:"ident",value:"calc"},arguments:a})}else if(i.test(r)){const a=oL(r),l=a.nodes[0];if(r=a.remainingInput,r[0]===n){const{nodes:c,remainingInput:h}=Qg(r);o.push({type:"function",name:l,arguments:c}),r=h}else o.push(l)}else if(e.test(r))o.push({type:"operator",value:r[0]}),r=r.slice(1);else{const{nodes:a,remainingInput:l}=r[0]===s?lL(r):aL(r);if(a.length===0)break;o.push(a[0]),r=l}return{nodes:[{type:"expression",terms:o}],remainingInput:r}}})(),oL=(()=>{const i=/[^a-z0-9_\-\u0240-\uffff]/i;return e=>{const t=e.match(i),n=t==null?e:e.substr(0,t.index),s=t==null?"":e.substr(t.index);return{nodes:[{type:"ident",value:n}],remainingInput:s}}})(),aL=(()=>{const i=/[\+\-]?(\d+[\.]\d+|\d+|[\.]\d+)([eE][\+\-]?\d+)?/,e=/^[a-z%]+/i,t=/^(m|mm|cm|rad|deg|[%])$/;return n=>{const s=n.match(i),r=s==null?"0":s[0];n=r==null?n:n.slice(r.length);const o=n.match(e);let a=o!=null&&o[0]!==""?o[0]:null;const l=o==null?n:n.slice(a.length);return a!=null&&!t.test(a)&&(a=null),{nodes:[{type:"number",number:parseFloat(r)||0,unit:a}],remainingInput:l}}})(),lL=(()=>{const i=/^[a-f0-9]*/i;return e=>{e=e.slice(1).trim();const t=e.match(i);return{nodes:t==null?[]:[{type:"hex",value:t[0]}],remainingInput:t==null?e:e.slice(t[0].length)}}})(),Qg=i=>{const e=[];for(i=i.slice(1).trim();i.length;){const t=oy(i);if(e.push(t.nodes[0]),i=t.remainingInput.trim(),i[0]===",")i=i.slice(1).trim();else if(i[0]===")"){i=i.slice(1);break}}return{nodes:e,remainingInput:i}},kg=Symbol("visitedTypes");class cL{constructor(e){this[kg]=e}walk(e,t){const n=e.slice();for(;n.length;){const s=n.shift();switch(this[kg].indexOf(s.type)>-1&&t(s),s.type){case"expression":n.unshift(...s.terms);break;case"function":n.unshift(s.name,...s.arguments);break}}}}const xs=Object.freeze({type:"number",number:0,unit:null});/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h=(i,e=0)=>{let{number:t,unit:n}=i;if(!isFinite(t))t=e,n="rad";else if(i.unit==="rad"||i.unit==null)return i;return{type:"number",number:(n==="deg"&&t!=null?t:0)*Math.PI/180,unit:"rad"}},Gg=(i,e=0)=>{let{number:t,unit:n}=i;if(!isFinite(t))t=e,n="m";else if(i.unit==="m")return i;let s;switch(n){default:s=1;break;case"cm":s=1/100;break;case"mm":s=1/1e3;break}return{type:"number",number:s*t,unit:"m"}},Ai=(()=>{const i=t=>t,e={rad:i,deg:_h,m:i,mm:Gg,cm:Gg};return(t,n=xs)=>{isFinite(t.number)||(t.number=n.number,t.unit=n.unit);const{unit:s}=t;if(s==null)return t;const r=e[s];return r==null?n:r(t)}})();/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ay,Hg,Vg;const Lo=Symbol("evaluate"),wc=Symbol("lastValue");class xt{constructor(){this[ay]=null}static evaluatableFor(e,t=xs){if(e instanceof xt)return e;if(e.type==="number")return e.unit==="%"?new hL(e,t):e;switch(e.name.value){case"calc":return new fL(e,t);case"env":return new uL(e)}return xs}static evaluate(e){return e instanceof xt?e.evaluate():e}static isConstant(e){return e instanceof xt?e.isConstant:!0}static applyIntrinsics(e,t){const{basis:n,keywords:s}=t,{auto:r}=s;return n.map((o,a)=>{const l=r[a]==null?o:r[a];let c=e[a]?e[a]:l;if(c.type==="ident"){const h=c.value;h in s&&(c=s[h][a])}return(c==null||c.type==="ident")&&(c=l),c.unit==="%"?an(c.number/100*o.number,o.unit):(c=Ai(c,o),c.unit!==o.unit?o:c)})}get isConstant(){return!1}evaluate(){return(!this.isConstant||this[wc]==null)&&(this[wc]=this[Lo]()),this[wc]}}ay=wc;const zg=Symbol("percentage"),ku=Symbol("basis");class hL extends xt{constructor(e,t){super(),this[zg]=e,this[ku]=t}get isConstant(){return!0}[Lo](){return an(this[zg].number/100*this[ku].number,this[ku].unit)}}const Gl=Symbol("identNode");class uL extends xt{constructor(e){super(),this[Hg]=null;const t=e.arguments.length?e.arguments[0].terms[0]:null;t!=null&&t.type==="ident"&&(this[Gl]=t)}get isConstant(){return!1}[(Hg=Gl,Lo)](){if(this[Gl]!=null)switch(this[Gl].value){case"window-scroll-y":const e=window.pageYOffset,t=Math.max(document.body.scrollHeight,document.body.offsetHeight,document.documentElement.clientHeight,document.documentElement.scrollHeight,document.documentElement.offsetHeight);return{type:"number",number:e/(t-window.innerHeight)||0,unit:null}}return xs}}const dL=/[\*\/]/,Fr=Symbol("evaluator");class fL extends xt{constructor(e,t=xs){if(super(),this[Vg]=null,e.arguments.length!==1)return;const n=e.arguments[0].terms.slice(),s=[];for(;n.length;){const r=n.shift();if(s.length>0){const o=s[s.length-1];if(o.type==="operator"&&dL.test(o.value)){const a=s.pop(),l=s.pop();if(l==null)return;s.push(new qg(a,xt.evaluatableFor(l,t),xt.evaluatableFor(r,t)));continue}}s.push(r.type==="operator"?r:xt.evaluatableFor(r,t))}for(;s.length>2;){const[r,o,a]=s.splice(0,3);if(o.type!=="operator")return;s.unshift(new qg(o,xt.evaluatableFor(r,t),xt.evaluatableFor(a,t)))}s.length===1&&(this[Fr]=s[0])}get isConstant(){return this[Fr]==null||xt.isConstant(this[Fr])}[(Vg=Fr,Lo)](){return this[Fr]!=null?xt.evaluate(this[Fr]):xs}}const Wg=Symbol("operator"),Gu=Symbol("left"),Hu=Symbol("right");class qg extends xt{constructor(e,t,n){super(),this[Wg]=e,this[Gu]=t,this[Hu]=n}get isConstant(){return xt.isConstant(this[Gu])&&xt.isConstant(this[Hu])}[Lo](){const e=Ai(xt.evaluate(this[Gu])),t=Ai(xt.evaluate(this[Hu])),{number:n,unit:s}=e,{number:r,unit:o}=t;if(o!=null&&s!=null&&o!=s)return xs;const a=s||o;let l;switch(this[Wg].value){case"+":l=n+r;break;case"-":l=n-r;break;case"/":l=n/r;break;case"*":l=n*r;break;default:return xs}return{type:"number",number:l,unit:a}}}const Vu=Symbol("evaluatables"),$g=Symbol("intrinsics");class ly extends xt{constructor(e,t){super(),this[$g]=t;const n=e[0],s=n!=null?n.terms:[];this[Vu]=t.basis.map((r,o)=>{const a=s[o];return a==null?{type:"ident",value:"auto"}:a.type==="ident"?a:xt.evaluatableFor(a,r)})}get isConstant(){for(const e of this[Vu])if(!xt.isConstant(e))return!1;return!0}[Lo](){const e=this[Vu].map(t=>xt.evaluate(t));return xt.applyIntrinsics(e,this[$g]).map(t=>t.number)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var cy,hy,uy,dy;const Ur=Symbol("instances"),Xg=Symbol("activateListener"),Yg=Symbol("deactivateListener"),zu=Symbol("notifyInstances"),Kg=Symbol("notify"),jg=Symbol("callback");class ai{constructor(e){this[jg]=e}static[zu](){for(const e of ai[Ur])e[Kg]()}static[(cy=Ur,Xg)](){window.addEventListener("scroll",this[zu],{passive:!0})}static[Yg](){window.removeEventListener("scroll",this[zu])}observe(){ai[Ur].size===0&&ai[Xg](),ai[Ur].add(this)}disconnect(){ai[Ur].delete(this),ai[Ur].size===0&&ai[Yg]()}[Kg](){this[jg]()}}ai[cy]=new Set;const Jg=Symbol("computeStyleCallback"),fy=Symbol("astWalker"),Aa=Symbol("dependencies"),Ay=Symbol("onScroll");class AL{constructor(e){this[hy]={},this[uy]=new cL(["function"]),this[dy]=()=>{this[Jg]({relatedState:"window-scroll"})},this[Jg]=e}observeEffectsFor(e){const t={},n=this[Aa];this[fy].walk(e,s=>{const{name:r}=s,a=s.arguments[0].terms[0];if(!(r.value!=="env"||a==null||a.type!=="ident"))switch(a.value){case"window-scroll-y":if(t["window-scroll"]==null){const l="window-scroll"in n?n["window-scroll"]:new ai(this[Ay]);l.observe(),delete n["window-scroll"],t["window-scroll"]=l}break}});for(const s in n)n[s].disconnect();this[Aa]=t}dispose(){for(const e in this[Aa])this[Aa][e].disconnect()}}hy=Aa,uy=fy,dy=Ay;/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is=i=>{const e=i.observeEffects||!1,t=i.intrinsics instanceof Function?i.intrinsics:()=>i.intrinsics;return(n,s)=>{const r=n.updated,o=n.connectedCallback,a=n.disconnectedCallback,l=Symbol(`${s}StyleEffector`),c=Symbol(`${s}StyleEvaluator`),h=Symbol(`${s}UpdateEvaluator`),u=Symbol(`${s}EvaluateAndSync`);Object.defineProperties(n,{[l]:{value:null,writable:!0},[c]:{value:null,writable:!0},[h]:{value:function(){const d=ki(this[s]);this[c]=new ly(d,t(this)),this[l]==null&&e&&(this[l]=new AL(()=>this[u]())),this[l]!=null&&this[l].observeEffectsFor(d)}},[u]:{value:function(){if(this[c]==null)return;const d=this[c].evaluate();this[i.updateHandler](d)}},updated:{value:function(d){d.has(s)&&(this[h](),this[u]()),r.call(this,d)}},connectedCallback:{value:function(){o.call(this),this.requestUpdate(s,this[s])}},disconnectedCallback:{value:function(){a.call(this),this[l]!=null&&(this[l].dispose(),this[l]=null)}}})}};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py=i=>i<.5?2*i*i:-1+(4-2*i)*i,pL=(i,e,t=py)=>n=>i+(e-i)*t(n),mL=(i,e)=>{const t=s=>r=>s+=r,n=e.map(t(0));return s=>{s=ui(s,0,1),s*=n[n.length-1];const r=n.findIndex(l=>l>=s),o=r<1?0:n[r-1],a=n[r];return i[r]((s-o)/(a-o))}},io=i=>{const e=[],t=[];let n=i.initialValue;for(let s=0;s<i.keyframes.length;++s){const r=i.keyframes[s],{value:o,frames:a}=r,l=r.ease||py,c=pL(n,o,l);e.push(c),t.push(a),n=o}return mL(e,t)};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Lt=function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const gL=5e3,_L=io({initialValue:0,keyframes:[{frames:5,value:-1},{frames:1,value:-1},{frames:8,value:1},{frames:1,value:1},{frames:5,value:0},{frames:18,value:0}]}),EL=io({initialValue:0,keyframes:[{frames:1,value:1},{frames:5,value:1},{frames:1,value:0},{frames:6,value:0}]}),vL=30,yL=12,my="0deg 75deg 105%",xL="auto auto auto",SL="auto",IL=2.2,CL=["front","right","back","left"],ML=["upper-","","lower-"],wL=3e3,bL=". Use mouse, touch or arrow keys to move.",Hl={AUTO:"auto",NONE:"none"},Wu={BASIC:"basic",WIGGLE:"wiggle"},TL={PAN_Y:"pan-y",PAN_X:"pan-x",NONE:"none"},Zg=()=>({basis:[_h(an(vL,"deg"))],keywords:{auto:[null]}}),BL=()=>({basis:[_h(an(yL,"deg"))],keywords:{auto:[null]}}),gy=(()=>{const i=ki(my)[0].terms,e=Ai(i[0]),t=Ai(i[1]);return n=>{const s=n[he].idealCameraDistance();return{basis:[e,t,an(s,"m")],keywords:{auto:[null,null,an(105,"%")]}}}})(),RL=i=>{const e=IL*i[he].boundingSphere.radius;return{basis:[an(-1/0,"rad"),an(Math.PI/8,"rad"),an(e,"m")],keywords:{auto:[null,null,null]}}},DL=i=>{const e=gy(i),n=new ly([],e).evaluate()[2];return{basis:[an(1/0,"rad"),an(Math.PI-Math.PI/8,"rad"),an(n,"m")],keywords:{auto:[null,null,null]}}},LL=i=>{const e=i[he].boundingBox.getCenter(new L);return{basis:[an(e.x,"m"),an(e.y,"m"),an(e.z,"m")],keywords:{auto:[null,null,null]}}},_y=Math.PI/2,PL=Math.PI/3,FL=_y/2,UL=2*Math.PI,at=Symbol("controls"),bc=Symbol("panElement"),qu=Symbol("promptElement"),Vl=Symbol("promptAnimatedContainer"),$u=Symbol("fingerAnimatedContainers"),zl=Symbol("deferInteractionPrompt"),e0=Symbol("updateAria"),Ti=Symbol("a11y"),t0=Symbol("updateA11y"),n0=Symbol("updateCameraForRadius"),Nr=Symbol("cancelPrompts"),Xu=Symbol("onChange"),Xo=Symbol("onPointerChange"),Qs=Symbol("waitingToPromptUser"),Wl=Symbol("userHasInteracted"),Or=Symbol("promptElementVisibleTime"),Yo=Symbol("lastPromptOffset"),ql=Symbol("cancellationSource"),Yu=Symbol("lastSpherical"),Ko=Symbol("jumpCamera"),Ku=Symbol("initialized"),jo=Symbol("maintainThetaPhi"),i0=Symbol("syncCameraOrbit"),s0=Symbol("syncFieldOfView"),r0=Symbol("syncCameraTarget"),o0=Symbol("syncMinCameraOrbit"),a0=Symbol("syncMaxCameraOrbit"),l0=Symbol("syncMinFieldOfView"),c0=Symbol("syncMaxFieldOfView"),NL=i=>{var e,t,n,s,r,o,a,l,c,h,u,d,f,m,g,A,p,x;class _ extends i{constructor(){super(...arguments),this.cameraControls=!1,this.cameraOrbit=my,this.cameraTarget=xL,this.fieldOfView=SL,this.minCameraOrbit="auto",this.maxCameraOrbit="auto",this.minFieldOfView="auto",this.maxFieldOfView="auto",this.interactionPromptThreshold=wL,this.interactionPrompt=Hl.AUTO,this.interactionPromptStyle=Wu.WIGGLE,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.touchAction=TL.NONE,this.disableZoom=!1,this.disablePan=!1,this.disableTap=!1,this.interpolationDecay=sy,this.a11y=null,this[e]=this.shadowRoot.querySelector(".interaction-prompt"),this[t]=this.shadowRoot.querySelector("#prompt"),this[n]=[this.shadowRoot.querySelector("#finger0"),this.shadowRoot.querySelector("#finger1")],this[s]=this.shadowRoot.querySelector(".pan-target"),this[r]=0,this[o]=1/0,this[a]=!1,this[l]=!1,this[c]=bt.AUTOMATIC,this[h]=new GL(this[he].camera,this[Xn],this[he]),this[u]=new xc,this[d]=!1,this[f]=!1,this[m]=!1,this[g]={},this[A]=()=>{const M=this[at].changeSource;this[ql]=M,M===bt.USER_INTERACTION&&(this[Wl]=!0,this[zl]())},this[p]=()=>{this[e0](),this[on]();const M=this[at].changeSource;this.dispatchEvent(new CustomEvent("camera-change",{detail:{source:M}}))},this[x]=M=>{this[Lc].classList.toggle("pointer-tumbling",M.type==="pointer-change-start")}}get inputSensitivity(){return this[at].inputSensitivity}set inputSensitivity(M){this[at].inputSensitivity=M}getCameraOrbit(){const{theta:M,phi:I,radius:w}=this[Yu];return{theta:M,phi:I,radius:w,toString(){return`${this.theta}rad ${this.phi}rad ${this.radius}m`}}}getCameraTarget(){return us(this[rt].isPresenting?this[rt].arRenderer.target:this[he].getTarget())}getFieldOfView(){return this[at].getFieldOfView()}getMinimumFieldOfView(){return this[at].options.minimumFieldOfView}getMaximumFieldOfView(){return this[at].options.maximumFieldOfView}getIdealAspect(){return this[he].idealAspect}jumpCameraToGoal(){this[Ko]=!0,this.requestUpdate(Ko,!1)}resetInteractionPrompt(){this[Yo]=0,this[Or]=1/0,this[Wl]=!1,this[Qs]=this.interactionPrompt===Hl.AUTO&&this.cameraControls}zoom(M){const I=new WheelEvent("wheel",{deltaY:-30*M});this[Xn].dispatchEvent(I)}connectedCallback(){super.connectedCallback(),this[at].addEventListener("user-interaction",this[Nr]),this[at].addEventListener("pointer-change-start",this[Xo]),this[at].addEventListener("pointer-change-end",this[Xo])}disconnectedCallback(){super.disconnectedCallback(),this[at].removeEventListener("user-interaction",this[Nr]),this[at].removeEventListener("pointer-change-start",this[Xo]),this[at].removeEventListener("pointer-change-end",this[Xo])}updated(M){super.updated(M);const I=this[at],w=this[he];if(M.has("cameraControls")&&(this.cameraControls?(I.enableInteraction(),this.interactionPrompt===Hl.AUTO&&(this[Qs]=!0)):(I.disableInteraction(),this[zl]()),this[Xn].setAttribute("aria-label",this[ro])),M.has("disableZoom")&&(I.disableZoom=this.disableZoom),M.has("disablePan")&&(I.enablePan=!this.disablePan),M.has("disableTap")&&(I.enableTap=!this.disableTap),(M.has("interactionPrompt")||M.has("cameraControls")||M.has("src"))&&(this.interactionPrompt===Hl.AUTO&&this.cameraControls&&!this[Wl]?this[Qs]=!0:this[zl]()),M.has("interactionPromptStyle")&&(this[Vl].style.opacity=this.interactionPromptStyle==Wu.BASIC?"1":"0"),M.has("touchAction")){const B=this.touchAction;I.applyOptions({touchAction:B}),I.updateTouchActionStyle()}M.has("orbitSensitivity")&&(I.orbitSensitivity=this.orbitSensitivity),M.has("zoomSensitivity")&&(I.zoomSensitivity=this.zoomSensitivity),M.has("panSensitivity")&&(I.panSensitivity=this.panSensitivity),M.has("interpolationDecay")&&(I.setDamperDecayTime(this.interpolationDecay),w.setTargetDamperDecayTime(this.interpolationDecay)),M.has("a11y")&&this[t0](),this[Ko]===!0&&Promise.resolve().then(()=>{I.jumpToGoal(),w.jumpToGoal(),this[Xu](),this[Ko]=!1})}async updateFraming(){const M=this[he],I=M.adjustedFoV(M.framedFoVDeg);await M.updateFraming();const w=M.adjustedFoV(M.framedFoVDeg),B=this[at].getFieldOfView()/I;this[at].setFieldOfView(w*B),this[jo]=!0,this.requestUpdate("maxFieldOfView"),this.requestUpdate("fieldOfView"),this.requestUpdate("minCameraOrbit"),this.requestUpdate("maxCameraOrbit"),this.requestUpdate("cameraOrbit"),await this.updateComplete}interact(M,I,w){const B=this[Xn],y=this[$u];if(y[0].style.opacity==="1"){console.warn("interact() failed because an existing interaction is running.");return}const v=new Array;v.push({x:io(I.x),y:io(I.y)});const U=[{x:v[0].x(0),y:v[0].y(0)}];w!=null&&(v.push({x:io(w.x),y:io(w.y)}),U.push({x:v[1].x(0),y:v[1].y(0)}));let V=performance.now();const{width:D,height:G}=this[he],H=this.getBoundingClientRect(),X=te=>{for(const[ne,ae]of U.entries()){const{style:ge}=y[ne];ge.transform=`translateX(${D*ae.x}px) translateY(${G*ae.y}px)`,te==="pointerdown"?ge.opacity="1":te==="pointerup"&&(ge.opacity="0");const Me={pointerId:ne-5678,pointerType:"touch",target:B,clientX:D*ae.x+H.x,clientY:G*ae.y+H.y,altKey:!0};B.dispatchEvent(new PointerEvent(te,Me))}},q=()=>{const te=this[ql];if(te!==bt.AUTOMATIC||!B.isConnected){for(const ae of this[$u])ae.style.opacity="0";X("pointercancel"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:te}})),document.removeEventListener("visibilitychange",Q);return}const ne=Math.min(1,(performance.now()-V)/M);for(const[ae,ge]of U.entries())ge.x=v[ae].x(ne),ge.y=v[ae].y(ne);X("pointermove"),ne<1?requestAnimationFrame(q):(X("pointerup"),this.dispatchEvent(new CustomEvent("interact-stopped",{detail:{source:bt.AUTOMATIC}})),document.removeEventListener("visibilitychange",Q))},Q=()=>{let te=0;document.visibilityState==="hidden"?te=performance.now()-V:V=performance.now()-te};document.addEventListener("visibilitychange",Q),X("pointerdown"),this[ql]=bt.AUTOMATIC,requestAnimationFrame(q)}[(e=qu,t=Vl,n=$u,s=bc,r=Yo,o=Or,a=Wl,l=Qs,c=ql,h=at,u=Yu,d=Ko,f=Ku,m=jo,g=Ti,s0)](M){const I=this[at],w=this[he];w.framedFoVDeg=M[0]*180/Math.PI,I.changeSource=bt.NONE,I.setFieldOfView(w.adjustedFoV(w.framedFoVDeg)),this[Nr]()}[i0](M){const I=this[at];if(this[jo]){const{theta:w,phi:B}=this.getCameraOrbit();M[0]=w,M[1]=B,this[jo]=!1}I.changeSource=bt.NONE,I.setOrbit(M[0],M[1],M[2]),this[Nr]()}[o0](M){this[at].applyOptions({minimumAzimuthalAngle:M[0],minimumPolarAngle:M[1],minimumRadius:M[2]}),this.jumpCameraToGoal()}[a0](M){this[at].applyOptions({maximumAzimuthalAngle:M[0],maximumPolarAngle:M[1],maximumRadius:M[2]}),this[n0](M[2]),this.jumpCameraToGoal()}[l0](M){this[at].applyOptions({minimumFieldOfView:M[0]*180/Math.PI}),this.jumpCameraToGoal()}[c0](M){const I=this[he].adjustedFoV(M[0]*180/Math.PI);this[at].applyOptions({maximumFieldOfView:I}),this.jumpCameraToGoal()}[r0](M){const[I,w,B]=M;this[rt].arRenderer.isPresenting||this[he].setTarget(I,w,B),this[at].changeSource=bt.NONE,this[rt].arRenderer.updateTarget(),this[Nr]()}[mi](M,I){if(super[mi](M,I),this[rt].isPresenting||!this[dr]())return;const w=this[at],B=this[he],y=performance.now();if(this[Qs]&&this.loaded&&y>this[ga]+this.interactionPromptThreshold&&(this[Qs]=!1,this[Or]=y,this[qu].classList.add("visible")),isFinite(this[Or])&&this.interactionPromptStyle===Wu.WIGGLE){const V=(y-this[Or])/gL%1,D=_L(V),G=EL(V);if(this[Vl].style.opacity=`${G}`,D!==this[Yo]){const H=D*B.width*.05,X=(D-this[Yo])*Math.PI/16;this[Vl].style.transform=`translateX(${H}px)`,w.changeSource=bt.AUTOMATIC,w.adjustOrbit(X,0,0),this[Yo]=D}}const v=w.update(M,I),U=B.updateTarget(I);(v||U)&&this[Xu]()}[zl](){this[Qs]=!1,this[qu].classList.remove("visible"),this[Or]=1/0}[n0](M){const I=Math.max(this[he].farRadius(),M),w=0,B=Math.abs(2*I);this[at].updateNearFar(w,B)}[e0](){const{theta:M,phi:I}=this[at].getCameraSpherical(this[Yu]),w=(4+Math.floor((M%UL+FL)/_y))%4,B=Math.floor(I/PL),y=CL[w],U=`${ML[B]}${y}`,V=U;V in this[Ti]?this[Zc](this[Ti][V]):this[Zc](`View from stage ${U}`)}get[ro](){let M=bL;return"interaction-prompt"in this[Ti]&&(M=`. ${this[Ti]["interaction-prompt"]}`),super[ro].replace(/\.$/,"")+(this.cameraControls?M:"")}async[Ha](M){const I=this[at],w=this[he],B=w.adjustedFoV(w.framedFoVDeg);super[Ha](M);const y=w.adjustedFoV(w.framedFoVDeg)/B,v=I.getFieldOfView()*(isFinite(y)?y:1);I.updateAspect(this[he].aspect),this.requestUpdate("maxFieldOfView",this.maxFieldOfView),await this.updateComplete,this[at].setFieldOfView(v),this.jumpCameraToGoal()}[Ss](){super[Ss](),this[Ku]?this[jo]=!0:this[Ku]=!0,this.requestUpdate("maxFieldOfView",this.maxFieldOfView),this.requestUpdate("fieldOfView",this.fieldOfView),this.requestUpdate("minCameraOrbit",this.minCameraOrbit),this.requestUpdate("maxCameraOrbit",this.maxCameraOrbit),this.requestUpdate("cameraOrbit",this.cameraOrbit),this.requestUpdate("cameraTarget",this.cameraTarget),this.jumpCameraToGoal()}[(A=Nr,p=Xu,x=Xo,t0)](){if(typeof this.a11y=="string")if(this.a11y.startsWith("{"))try{this[Ti]=JSON.parse(this.a11y)}catch(M){console.warn("Error parsing a11y JSON:",M)}else this.a11y.length>0?console.warn("Error not supported format, should be a JSON string:",this.a11y):this[Ti]={};else typeof this.a11y=="object"&&this.a11y!=null?this[Ti]=Object.assign({},this.a11y):this[Ti]={};this[Xn].setAttribute("aria-label",this[ro])}}return Lt([we({type:Boolean,attribute:"camera-controls"})],_.prototype,"cameraControls",void 0),Lt([is({intrinsics:gy,observeEffects:!0,updateHandler:i0}),we({type:String,attribute:"camera-orbit",hasChanged:()=>!0})],_.prototype,"cameraOrbit",void 0),Lt([is({intrinsics:LL,observeEffects:!0,updateHandler:r0}),we({type:String,attribute:"camera-target",hasChanged:()=>!0})],_.prototype,"cameraTarget",void 0),Lt([is({intrinsics:Zg,observeEffects:!0,updateHandler:s0}),we({type:String,attribute:"field-of-view",hasChanged:()=>!0})],_.prototype,"fieldOfView",void 0),Lt([is({intrinsics:RL,updateHandler:o0}),we({type:String,attribute:"min-camera-orbit",hasChanged:()=>!0})],_.prototype,"minCameraOrbit",void 0),Lt([is({intrinsics:DL,updateHandler:a0}),we({type:String,attribute:"max-camera-orbit",hasChanged:()=>!0})],_.prototype,"maxCameraOrbit",void 0),Lt([is({intrinsics:BL,updateHandler:l0}),we({type:String,attribute:"min-field-of-view",hasChanged:()=>!0})],_.prototype,"minFieldOfView",void 0),Lt([is({intrinsics:Zg,updateHandler:c0}),we({type:String,attribute:"max-field-of-view",hasChanged:()=>!0})],_.prototype,"maxFieldOfView",void 0),Lt([we({type:Number,attribute:"interaction-prompt-threshold"})],_.prototype,"interactionPromptThreshold",void 0),Lt([we({type:String,attribute:"interaction-prompt"})],_.prototype,"interactionPrompt",void 0),Lt([we({type:String,attribute:"interaction-prompt-style"})],_.prototype,"interactionPromptStyle",void 0),Lt([we({type:Number,attribute:"orbit-sensitivity"})],_.prototype,"orbitSensitivity",void 0),Lt([we({type:Number,attribute:"zoom-sensitivity"})],_.prototype,"zoomSensitivity",void 0),Lt([we({type:Number,attribute:"pan-sensitivity"})],_.prototype,"panSensitivity",void 0),Lt([we({type:String,attribute:"touch-action"})],_.prototype,"touchAction",void 0),Lt([we({type:Boolean,attribute:"disable-zoom"})],_.prototype,"disableZoom",void 0),Lt([we({type:Boolean,attribute:"disable-pan"})],_.prototype,"disablePan",void 0),Lt([we({type:Boolean,attribute:"disable-tap"})],_.prototype,"disableTap",void 0),Lt([we({type:Number,attribute:"interpolation-decay"})],_.prototype,"interpolationDecay",void 0),Lt([we()],_.prototype,"a11y",void 0),_};/* @license
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OL=.018,h0=2,QL=300,kL=new Re,u0=new L,d0=Object.freeze({minimumRadius:0,maximumRadius:1/0,minimumPolarAngle:Math.PI/8,maximumPolarAngle:Math.PI-Math.PI/8,minimumAzimuthalAngle:-1/0,maximumAzimuthalAngle:1/0,minimumFieldOfView:10,maximumFieldOfView:45,touchAction:"none"}),$l=Math.PI/8,Xl=.04,Yl=10,bt={USER_INTERACTION:"user-interaction",NONE:"none",AUTOMATIC:"automatic"};class GL extends ni{constructor(e,t,n){super(),this.camera=e,this.element=t,this.scene=n,this.orbitSensitivity=1,this.zoomSensitivity=1,this.panSensitivity=1,this.inputSensitivity=1,this.changeSource=bt.NONE,this._interactionEnabled=!1,this._disableZoom=!1,this.isUserPointing=!1,this.enablePan=!0,this.enableTap=!0,this.panProjection=new Ue,this.panPerPixel=0,this.spherical=new xc,this.goalSpherical=new xc,this.thetaDamper=new Cn,this.phiDamper=new Cn,this.radiusDamper=new Cn,this.logFov=Math.log(d0.maximumFieldOfView),this.goalLogFov=this.logFov,this.fovDamper=new Cn,this.touchMode=null,this.pointers=[],this.startTime=0,this.startPointerPosition={clientX:0,clientY:0},this.lastSeparation=0,this.touchDecided=!1,this.onContext=s=>{if(this.enablePan)s.preventDefault();else for(const r of this.pointers)this.onPointerUp(new PointerEvent("pointercancel",Object.assign(Object.assign({},this.startPointerPosition),{pointerId:r.id})))},this.touchModeZoom=(s,r)=>{if(!this._disableZoom){const o=this.twoTouchDistance(this.pointers[0],this.pointers[1]),a=Xl*this.zoomSensitivity*(this.lastSeparation-o)*50/this.scene.height;this.lastSeparation=o,this.userAdjustOrbit(0,0,a)}this.panPerPixel>0&&this.movePan(s,r)},this.disableScroll=s=>{s.preventDefault()},this.touchModeRotate=(s,r)=>{const{touchAction:o}=this._options;if(!this.touchDecided&&o!=="none"){this.touchDecided=!0;const a=Math.abs(s),l=Math.abs(r);if(this.changeSource===bt.USER_INTERACTION&&(o==="pan-y"&&l>a||o==="pan-x"&&a>l)){this.touchMode=null;return}else this.element.addEventListener("touchmove",this.disableScroll,{passive:!1})}this.handleSinglePointerMove(s,r)},this.onPointerDown=s=>{if(this.pointers.length>2)return;const{element:r}=this;this.pointers.length===0&&(r.addEventListener("pointermove",this.onPointerMove),r.addEventListener("pointerup",this.onPointerUp),this.touchMode=null,this.touchDecided=!1,this.startPointerPosition.clientX=s.clientX,this.startPointerPosition.clientY=s.clientY,this.startTime=performance.now());try{r.setPointerCapture(s.pointerId)}catch{}this.pointers.push({clientX:s.clientX,clientY:s.clientY,id:s.pointerId}),this.isUserPointing=!1,s.pointerType==="touch"?(this.changeSource=s.altKey?bt.AUTOMATIC:bt.USER_INTERACTION,this.onTouchChange(s)):(this.changeSource=bt.USER_INTERACTION,this.onMouseDown(s)),this.changeSource===bt.USER_INTERACTION&&this.dispatchEvent({type:"user-interaction"})},this.onPointerMove=s=>{const r=this.pointers.find(c=>c.id===s.pointerId);if(r==null)return;if(s.pointerType==="mouse"&&s.buttons===0){this.onPointerUp(s);return}const o=this.pointers.length,a=(s.clientX-r.clientX)/o,l=(s.clientY-r.clientY)/o;a===0&&l===0||(r.clientX=s.clientX,r.clientY=s.clientY,s.pointerType==="touch"?(this.changeSource=s.altKey?bt.AUTOMATIC:bt.USER_INTERACTION,this.touchMode!==null&&this.touchMode(a,l)):(this.changeSource=bt.USER_INTERACTION,this.panPerPixel>0?this.movePan(a,l):this.handleSinglePointerMove(a,l)))},this.onPointerUp=s=>{const{element:r}=this,o=this.pointers.findIndex(a=>a.id===s.pointerId);o!==-1&&this.pointers.splice(o,1),this.panPerPixel>0&&!s.altKey&&this.resetRadius(),this.pointers.length===0?(r.removeEventListener("pointermove",this.onPointerMove),r.removeEventListener("pointerup",this.onPointerUp),r.removeEventListener("touchmove",this.disableScroll),this.enablePan&&this.enableTap&&this.recenter(s)):this.touchMode!==null&&this.onTouchChange(s),this.scene.element[bc].style.opacity=0,r.style.cursor="grab",this.panPerPixel=0,this.isUserPointing&&this.dispatchEvent({type:"pointer-change-end"})},this.onWheel=s=>{this.changeSource=bt.USER_INTERACTION;const r=s.deltaY*(s.deltaMode==1?18:1)*Xl*this.zoomSensitivity/30;this.userAdjustOrbit(0,0,r),s.preventDefault(),this.dispatchEvent({type:"user-interaction"})},this.onKeyDown=s=>{const{changeSource:r}=this;this.changeSource=bt.USER_INTERACTION,(s.shiftKey&&this.enablePan?this.panKeyCodeHandler(s):this.orbitZoomKeyCodeHandler(s))?(s.preventDefault(),this.dispatchEvent({type:"user-interaction"})):this.changeSource=r},this._options=Object.assign({},d0),this.setOrbit(0,Math.PI/2,1),this.setFieldOfView(100),this.jumpToGoal()}get interactionEnabled(){return this._interactionEnabled}enableInteraction(){if(this._interactionEnabled===!1){const{element:e}=this;e.addEventListener("pointerdown",this.onPointerDown),e.addEventListener("pointercancel",this.onPointerUp),this._disableZoom||e.addEventListener("wheel",this.onWheel),e.addEventListener("keydown",this.onKeyDown),e.addEventListener("touchmove",()=>{},{passive:!1}),e.addEventListener("contextmenu",this.onContext),this.element.style.cursor="grab",this._interactionEnabled=!0,this.updateTouchActionStyle()}}disableInteraction(){if(this._interactionEnabled===!0){const{element:e}=this;e.removeEventListener("pointerdown",this.onPointerDown),e.removeEventListener("pointermove",this.onPointerMove),e.removeEventListener("pointerup",this.onPointerUp),e.removeEventListener("pointercancel",this.onPointerUp),e.removeEventListener("wheel",this.onWheel),e.removeEventListener("keydown",this.onKeyDown),e.removeEventListener("contextmenu",this.onContext),e.style.cursor="",this.touchMode=null,this._interactionEnabled=!1,this.updateTouchActionStyle()}}get options(){return this._options}set disableZoom(e){this._disableZoom!=e&&(this._disableZoom=e,e===!0?this.element.removeEventListener("wheel",this.onWheel):this.element.addEventListener("wheel",this.onWheel),this.updateTouchActionStyle())}getCameraSpherical(e=new xc){return e.copy(this.spherical)}getFieldOfView(){return this.camera.fov}applyOptions(e){Object.assign(this._options,e),this.setOrbit(),this.setFieldOfView(Math.exp(this.goalLogFov))}updateNearFar(e,t){this.camera.far=t===0?2:t,this.camera.near=Math.max(e,this.camera.far/1e3),this.camera.updateProjectionMatrix()}updateAspect(e){this.camera.aspect=e,this.camera.updateProjectionMatrix()}setOrbit(e=this.goalSpherical.theta,t=this.goalSpherical.phi,n=this.goalSpherical.radius){const{minimumAzimuthalAngle:s,maximumAzimuthalAngle:r,minimumPolarAngle:o,maximumPolarAngle:a,minimumRadius:l,maximumRadius:c}=this._options,{theta:h,phi:u,radius:d}=this.goalSpherical,f=ui(e,s,r);!isFinite(s)&&!isFinite(r)&&(this.spherical.theta=this.wrapAngle(this.spherical.theta-f)+f);const m=ui(t,o,a),g=ui(n,l,c);return f===h&&m===u&&g===d||!isFinite(f)||!isFinite(m)||!isFinite(g)?!1:(this.goalSpherical.theta=f,this.goalSpherical.phi=m,this.goalSpherical.radius=g,this.goalSpherical.makeSafe(),!0)}setRadius(e){this.goalSpherical.radius=e,this.setOrbit()}setFieldOfView(e){const{minimumFieldOfView:t,maximumFieldOfView:n}=this._options;e=ui(e,t,n),this.goalLogFov=Math.log(e)}setDamperDecayTime(e){this.thetaDamper.setDecayTime(e),this.phiDamper.setDecayTime(e),this.radiusDamper.setDecayTime(e),this.fovDamper.setDecayTime(e)}adjustOrbit(e,t,n){const{theta:s,phi:r,radius:o}=this.goalSpherical,{minimumRadius:a,maximumRadius:l,minimumFieldOfView:c,maximumFieldOfView:h}=this._options,u=this.spherical.theta-s,d=Math.PI-.001,f=s-ui(e,-d-u,d-u),m=r-t,g=n===0?0:((n>0?l:a)-o)/(Math.log(n>0?h:c)-this.goalLogFov),A=o+n*(isFinite(g)?g:(l-a)*2);if(this.setOrbit(f,m,A),n!==0){const p=this.goalLogFov+n;this.setFieldOfView(Math.exp(p))}}jumpToGoal(){this.update(0,iy)}update(e,t){if(this.isStationary())return!1;const{maximumPolarAngle:n,maximumRadius:s}=this._options,r=this.spherical.theta-this.goalSpherical.theta;return Math.abs(r)>Math.PI&&!isFinite(this._options.minimumAzimuthalAngle)&&!isFinite(this._options.maximumAzimuthalAngle)&&(this.spherical.theta-=Math.sign(r)*2*Math.PI),this.spherical.theta=this.thetaDamper.update(this.spherical.theta,this.goalSpherical.theta,t,Math.PI),this.spherical.phi=this.phiDamper.update(this.spherical.phi,this.goalSpherical.phi,t,n),this.spherical.radius=this.radiusDamper.update(this.spherical.radius,this.goalSpherical.radius,t,s),this.logFov=this.fovDamper.update(this.logFov,this.goalLogFov,t,1),this.moveCamera(),!0}updateTouchActionStyle(){const{style:e}=this.element;if(this._interactionEnabled){const{touchAction:t}=this._options;this._disableZoom&&t!=="none"?e.touchAction="manipulation":e.touchAction=t}else e.touchAction=""}isStationary(){return this.goalSpherical.theta===this.spherical.theta&&this.goalSpherical.phi===this.spherical.phi&&this.goalSpherical.radius===this.spherical.radius&&this.goalLogFov===this.logFov}moveCamera(){this.spherical.makeSafe(),this.camera.position.setFromSpherical(this.spherical),this.camera.setRotationFromEuler(new kn(this.spherical.phi-Math.PI/2,this.spherical.theta,0,"YXZ")),this.camera.fov!==Math.exp(this.logFov)&&(this.camera.fov=Math.exp(this.logFov),this.camera.updateProjectionMatrix())}userAdjustOrbit(e,t,n){this.adjustOrbit(e*this.orbitSensitivity*this.inputSensitivity,t*this.orbitSensitivity*this.inputSensitivity,n*this.inputSensitivity)}wrapAngle(e){const t=(e+Math.PI)/(2*Math.PI);return(t-Math.floor(t))*2*Math.PI-Math.PI}pixelLengthToSphericalAngle(e){return 2*Math.PI*e/this.scene.height}twoTouchDistance(e,t){const{clientX:n,clientY:s}=e,{clientX:r,clientY:o}=t,a=r-n,l=o-s;return Math.sqrt(a*a+l*l)}handleSinglePointerMove(e,t){const n=this.pixelLengthToSphericalAngle(e),s=this.pixelLengthToSphericalAngle(t);this.isUserPointing===!1&&(this.isUserPointing=!0,this.dispatchEvent({type:"pointer-change-start"})),this.userAdjustOrbit(n,s,0)}initializePan(){const{theta:e,phi:t}=this.spherical,n=e-this.scene.yaw;this.panPerPixel=OL*this.panSensitivity/this.scene.height,this.panProjection.set(-Math.cos(n),-Math.cos(t)*Math.sin(n),0,0,Math.sin(t),0,Math.sin(n),-Math.cos(t)*Math.cos(n),0)}movePan(e,t){const{scene:n}=this,s=u0.set(e,t,0).multiplyScalar(this.inputSensitivity),r=this.spherical.radius*Math.exp(this.logFov)*this.panPerPixel;s.multiplyScalar(r);const o=n.getTarget();o.add(s.applyMatrix3(this.panProjection)),n.boundingSphere.clampPoint(o,o),n.setTarget(o.x,o.y,o.z)}recenter(e){if(performance.now()>this.startTime+QL||Math.abs(e.clientX-this.startPointerPosition.clientX)>h0||Math.abs(e.clientY-this.startPointerPosition.clientY)>h0)return;const{scene:t}=this,n=t.positionAndNormalFromPoint(t.getNDC(e.clientX,e.clientY));if(n==null){const{cameraTarget:s}=t.element;t.element.cameraTarget="",t.element.cameraTarget=s,this.userAdjustOrbit(0,0,1)}else t.target.worldToLocal(n.position),t.setTarget(n.position.x,n.position.y,n.position.z)}resetRadius(){const{scene:e}=this,t=e.positionAndNormalFromPoint(kL.set(0,0));if(t==null)return;e.target.worldToLocal(t.position);const n=e.getTarget(),{theta:s,phi:r}=this.spherical,o=s-e.yaw,a=u0.set(Math.sin(r)*Math.sin(o),Math.cos(r),Math.sin(r)*Math.cos(o)),l=a.dot(t.position.sub(n));n.add(a.multiplyScalar(l)),e.setTarget(n.x,n.y,n.z),this.setOrbit(void 0,void 0,this.goalSpherical.radius-l)}onTouchChange(e){if(this.pointers.length===1)this.touchMode=this.touchModeRotate;else{if(this._disableZoom){this.touchMode=null,this.element.removeEventListener("touchmove",this.disableScroll);return}this.touchMode=this.touchDecided&&this.touchMode===null?null:this.touchModeZoom,this.touchDecided=!0,this.element.addEventListener("touchmove",this.disableScroll,{passive:!1}),this.lastSeparation=this.twoTouchDistance(this.pointers[0],this.pointers[1]),this.enablePan&&this.touchMode!=null&&(this.initializePan(),e.altKey||(this.scene.element[bc].style.opacity=1))}}onMouseDown(e){this.panPerPixel=0,this.enablePan&&(e.button===2||e.ctrlKey||e.metaKey||e.shiftKey)&&(this.initializePan(),this.scene.element[bc].style.opacity=1),this.element.style.cursor="grabbing"}orbitZoomKeyCodeHandler(e){let t=!0;switch(e.key){case"PageUp":this.userAdjustOrbit(0,0,Xl*this.zoomSensitivity);break;case"PageDown":this.userAdjustOrbit(0,0,-1*Xl*this.zoomSensitivity);break;case"ArrowUp":this.userAdjustOrbit(0,-$l,0);break;case"ArrowDown":this.userAdjustOrbit(0,$l,0);break;case"ArrowLeft":this.userAdjustOrbit(-$l,0,0);break;case"ArrowRight":this.userAdjustOrbit($l,0,0);break;default:t=!1;break}return t}panKeyCodeHandler(e){this.initializePan();let t=!0;switch(e.key){case"ArrowUp":this.movePan(0,-1*Yl);break;case"ArrowDown":this.movePan(0,Yl);break;case"ArrowLeft":this.movePan(-1*Yl,0);break;case"ArrowRight":this.movePan(Yl,0);break;default:t=!1;break}return t}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HL=30,VL=.8,f0=1.5,zL=20,Ey=1.3,WL=1/Ey,qL=.25,$L=10,hs={NOT_PRESENTING:"not-presenting",SESSION_STARTED:"session-started",OBJECT_PLACED:"object-placed",FAILED:"failed"},yf={TRACKING:"tracking",NOT_TRACKING:"not-tracking"},Kl=new L,XL=new Le,YL=new L,KL=new Vt(45,1,.1,100);class jL extends ni{constructor(e){super(),this.renderer=e,this.currentSession=null,this.placeOnWall=!1,this.placementBox=null,this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.initialHitSource=null,this.transientHitTestSource=null,this.inputSource=null,this._presentedScene=null,this.resolveCleanup=null,this.exitWebXRButtonContainer=null,this.overlay=null,this.xrLight=null,this.tracking=!0,this.frames=0,this.initialized=!1,this.oldTarget=new L,this.placementComplete=!1,this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.lastDragPosition=new L,this.firstRatio=0,this.lastAngle=0,this.goalPosition=new L,this.goalYaw=0,this.goalScale=1,this.xDamper=new Cn,this.yDamper=new Cn,this.zDamper=new Cn,this.yawDamper=new Cn,this.scaleDamper=new Cn,this.onExitWebXRButtonContainerClick=()=>this.stopPresenting(),this.onUpdateScene=()=>{this.placementBox!=null&&this.isPresenting&&(this.placementBox.dispose(),this.placementBox=new Og(this.presentedScene,this.placeOnWall?"back":"bottom"))},this.onSelectStart=t=>{const n=this.transientHitTestSource;if(n==null)return;const s=this.frame.getHitTestResultsForTransientInput(n),r=this.presentedScene,o=this.placementBox;if(s.length===1){this.inputSource=t.inputSource;const{axes:a}=this.inputSource.gamepad,l=o.getHit(this.presentedScene,a[0],a[1]);o.show=!0,l!=null?(this.isTranslating=!0,this.lastDragPosition.copy(l)):this.placeOnWall===!1&&(this.isRotating=!0,this.lastAngle=a[0]*f0)}else if(s.length===2){o.show=!0,this.isTwoFingering=!0;const{separation:a}=this.fingerPolar(s);this.firstRatio=a/r.scale.x}},this.onSelectEnd=()=>{this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!1,this.inputSource=null,this.goalPosition.y+=this.placementBox.offsetHeight*this.presentedScene.scale.x,this.placementBox.show=!1},this.threeRenderer=e.threeRenderer,this.threeRenderer.xr.enabled=!0}async resolveARSession(){og();const e=await navigator.xr.requestSession("immersive-ar",{requiredFeatures:["hit-test"],optionalFeatures:["dom-overlay","light-estimation"],domOverlay:this.overlay?{root:this.overlay}:void 0});return this.threeRenderer.xr.setReferenceSpaceType("local"),await this.threeRenderer.xr.setSession(e),this.threeRenderer.xr.cameraAutoUpdate=!1,e}get presentedScene(){return this._presentedScene}async supportsPresentation(){try{return og(),await navigator.xr.isSessionSupported("immersive-ar")}catch(e){return console.warn("Request to present in WebXR denied:"),console.warn(e),console.warn("Falling back to next ar-mode"),!1}}async present(e,t=!1){this.isPresenting&&console.warn("Cannot present while a model is already presenting");let n=new Promise((c,h)=>{requestAnimationFrame(()=>c())});e.setHotspotsVisibility(!1),e.queueRender(),await n,this._presentedScene=e,this.overlay=e.element.shadowRoot.querySelector("div.default"),t===!0&&(this.xrLight=new nL(this.threeRenderer),this.xrLight.addEventListener("estimationstart",()=>{if(!this.isPresenting||this.xrLight==null)return;const c=this.presentedScene;c.add(this.xrLight),c.environment=this.xrLight.environment}));const s=await this.resolveARSession();s.addEventListener("end",()=>{this.postSessionCleanup()},{once:!0});const r=e.element.shadowRoot.querySelector(".slot.exit-webxr-ar-button");r.classList.add("enabled"),r.addEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=r;const o=await s.requestReferenceSpace("viewer");this.tracking=!0,this.frames=0,this.initialized=!1,this.turntableRotation=e.yaw,this.goalYaw=e.yaw,this.goalScale=1,e.setBackground(null),this.oldShadowIntensity=e.shadowIntensity,e.setShadowIntensity(.01),this.oldTarget.copy(e.getTarget()),e.element.addEventListener("load",this.onUpdateScene);const a=zL*Math.PI/180,l=this.placeOnWall===!0?void 0:new XRRay(new DOMPoint(0,0,0),{x:0,y:-Math.sin(a),z:-Math.cos(a)});s.requestHitTestSource({space:o,offsetRay:l}).then(c=>{this.initialHitSource=c}),this.currentSession=s,this.placementBox=new Og(e,this.placeOnWall?"back":"bottom"),this.placementComplete=!1,this.lastTick=performance.now(),this.dispatchEvent({type:"status",status:hs.SESSION_STARTED})}async stopPresenting(){if(!this.isPresenting)return;const e=new Promise(t=>{this.resolveCleanup=t});try{await this.currentSession.end(),await e}catch(t){console.warn("Error while trying to end WebXR AR session"),console.warn(t),this.postSessionCleanup()}}get isPresenting(){return this.presentedScene!=null}get target(){return this.oldTarget}updateTarget(){const e=this.presentedScene;if(e!=null){const t=e.getTarget();this.oldTarget.copy(t),this.placeOnWall?t.z=e.boundingBox.min.z:t.y=e.boundingBox.min.y,e.setTarget(t.x,t.y,t.z)}}postSessionCleanup(){const e=this.currentSession;e!=null&&(e.removeEventListener("selectstart",this.onSelectStart),e.removeEventListener("selectend",this.onSelectEnd),this.currentSession=null);const t=this.presentedScene;if(this._presentedScene=null,t!=null){const{element:o}=t;this.xrLight!=null&&(t.remove(this.xrLight),this.xrLight.dispose(),this.xrLight=null),t.position.set(0,0,0),t.scale.set(1,1,1),t.setShadowOffset(0);const a=this.turntableRotation;a!=null&&(t.yaw=a);const l=this.oldShadowIntensity;l!=null&&t.setShadowIntensity(l),t.setEnvironmentAndSkybox(o[ua],o[da]);const c=this.oldTarget;t.setTarget(c.x,c.y,c.z),t.xrCamera=null,t.element.removeEventListener("load",this.onUpdateScene),t.orientHotspots(0),o.requestUpdate("cameraTarget"),o.requestUpdate("maxCameraOrbit"),o[Ha](o.getBoundingClientRect()),requestAnimationFrame(()=>{t.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:bt.NONE}}))})}this.renderer.height=0;const n=this.exitWebXRButtonContainer;n!=null&&(n.classList.remove("enabled"),n.removeEventListener("click",this.onExitWebXRButtonContainerClick),this.exitWebXRButtonContainer=null);const s=this.transientHitTestSource;s!=null&&(s.cancel(),this.transientHitTestSource=null);const r=this.initialHitSource;r!=null&&(r.cancel(),this.initialHitSource=null),this.placementBox!=null&&(this.placementBox.dispose(),this.placementBox=null),this.lastTick=null,this.turntableRotation=null,this.oldShadowIntensity=null,this.frame=null,this.inputSource=null,this.overlay=null,this.resolveCleanup!=null&&this.resolveCleanup(),this.dispatchEvent({type:"status",status:hs.NOT_PRESENTING})}updateView(e){const t=this.presentedScene,n=this.threeRenderer.xr;n.updateCamera(KL),t.xrCamera=n.getCamera();const{elements:s}=t.getCamera().matrixWorld;if(t.orientHotspots(Math.atan2(s[1],s[5])),this.initialized||(this.placeInitially(),this.initialized=!0),e.requestViewportScale&&e.recommendedViewportScale){const o=e.recommendedViewportScale;e.requestViewportScale(Math.max(o,qL))}const r=n.getBaseLayer();if(r!=null){const o=r instanceof XRWebGLLayer?r.getViewport(e):n.getBinding().getViewSubImage(r,e).viewport;this.threeRenderer.setViewport(o.x,o.y,o.width,o.height)}}placeInitially(){const e=this.presentedScene,{position:t,element:n}=e,s=e.getCamera(),{width:r,height:o}=this.overlay.getBoundingClientRect();e.setSize(r,o),s.projectionMatrixInverse.copy(s.projectionMatrix).invert();const{theta:a,radius:l}=n.getCameraOrbit(),c=s.getWorldDirection(Kl);e.yaw=Math.atan2(-c.x,-c.z)-a,this.goalYaw=e.yaw,t.copy(s.position).add(c.multiplyScalar(l)),this.updateTarget();const h=e.getTarget();t.add(h).sub(this.oldTarget),this.goalPosition.copy(t),e.setHotspotsVisibility(!0);const{session:u}=this.frame;u.addEventListener("selectstart",this.onSelectStart),u.addEventListener("selectend",this.onSelectEnd),u.requestHitTestSourceForTransientInput({profile:"generic-touchscreen"}).then(d=>{this.transientHitTestSource=d})}getTouchLocation(){const{axes:e}=this.inputSource.gamepad;let t=this.placementBox.getExpandedHit(this.presentedScene,e[0],e[1]);return t!=null&&(Kl.copy(t).sub(this.presentedScene.getCamera().position),Kl.length()>$L)?null:t}getHitPoint(e){const t=this.threeRenderer.xr.getReferenceSpace(),n=e.getPose(t);if(n==null)return null;const s=XL.fromArray(n.transform.matrix);return this.placeOnWall===!0&&(this.goalYaw=Math.atan2(s.elements[4],s.elements[6])),s.elements[5]>.75!==this.placeOnWall?YL.setFromMatrixPosition(s):null}moveToFloor(e){const t=this.initialHitSource;if(t==null)return;const n=e.getHitTestResults(t);if(n.length==0)return;const s=n[0],r=this.getHitPoint(s);r!=null&&(this.placementBox.show=!0,this.isTranslating||(this.placeOnWall?this.goalPosition.copy(r):this.goalPosition.y=r.y),t.cancel(),this.initialHitSource=null,this.dispatchEvent({type:"status",status:hs.OBJECT_PLACED}))}fingerPolar(e){const t=e[0].inputSource.gamepad.axes,n=e[1].inputSource.gamepad.axes,s=n[0]-t[0],r=n[1]-t[1],o=Math.atan2(r,s);let a=this.lastAngle-o;return a>Math.PI?a-=2*Math.PI:a<-Math.PI&&(a+=2*Math.PI),this.lastAngle=o,{separation:Math.sqrt(s*s+r*r),deltaYaw:a}}processInput(e){const t=this.transientHitTestSource;if(t==null||!this.isTranslating&&!this.isTwoFingering&&!this.isRotating)return;const n=e.getHitTestResultsForTransientInput(t),s=this.presentedScene,r=s.scale.x;if(this.isTwoFingering){if(n.length<2)this.isTwoFingering=!1;else{const{separation:o,deltaYaw:a}=this.fingerPolar(n);if(this.placeOnWall===!1&&(this.goalYaw+=a),s.canScale){const l=o/this.firstRatio;this.goalScale=l<Ey&&l>WL?1:l}}return}else if(n.length===2){this.isTranslating=!1,this.isRotating=!1,this.isTwoFingering=!0;const{separation:o}=this.fingerPolar(n);this.firstRatio=o/r;return}if(this.isRotating){const o=this.inputSource.gamepad.axes[0]*f0;this.goalYaw+=o-this.lastAngle,this.lastAngle=o}else this.isTranslating&&n.forEach(o=>{if(o.inputSource!==this.inputSource)return;let a=null;if(o.results.length>0&&(a=this.getHitPoint(o.results[0])),a==null&&(a=this.getTouchLocation()),a!=null){if(this.goalPosition.sub(this.lastDragPosition),this.placeOnWall===!1){const l=a.y-this.lastDragPosition.y;if(l<0){this.placementBox.offsetHeight=l/r,this.presentedScene.setShadowOffset(l);const c=Kl.copy(s.getCamera().position),h=-l/(c.y-a.y);c.multiplyScalar(h),a.multiplyScalar(1-h).add(c)}}this.goalPosition.add(a),this.lastDragPosition.copy(a)}})}moveScene(e){const t=this.presentedScene,{position:n,yaw:s}=t,r=t.boundingSphere.radius,o=this.goalPosition,a=t.scale.x,l=this.placementBox;let c=bt.NONE;if(!o.equals(n)||this.goalScale!==a){c=bt.USER_INTERACTION;let{x:h,y:u,z:d}=n;h=this.xDamper.update(h,o.x,e,r),u=this.yDamper.update(u,o.y,e,r),d=this.zDamper.update(d,o.z,e,r),n.set(h,u,d);const f=this.scaleDamper.update(a,this.goalScale,e,1);if(t.scale.set(f,f,f),!this.isTranslating){const m=o.y-u;this.placementComplete&&this.placeOnWall===!1?(l.offsetHeight=m/f,t.setShadowOffset(m)):m===0&&(this.placementComplete=!0,l.show=!1,t.setShadowIntensity(VL))}}l.updateOpacity(e),t.updateTarget(e),t.yaw=this.yawDamper.update(s,this.goalYaw,e,Math.PI),t.element.dispatchEvent(new CustomEvent("camera-change",{detail:{source:c}}))}onWebXRFrame(e,t){this.frame=t,++this.frames;const n=this.threeRenderer.xr.getReferenceSpace(),s=t.getViewerPose(n);s==null&&this.tracking===!0&&this.frames>HL&&(this.tracking=!1,this.dispatchEvent({type:"tracking",status:yf.NOT_TRACKING}));const r=this.presentedScene;if(s==null||r==null||!r.element.loaded){this.threeRenderer.clear();return}this.tracking===!1&&(this.tracking=!0,this.dispatchEvent({type:"tracking",status:yf.TRACKING}));let o=!0;for(const a of s.views){if(this.updateView(a),o){this.moveToFloor(t),this.processInput(t);const l=e-this.lastTick;this.moveScene(l),this.renderer.preRender(r,e,l),this.lastTick=e,r.renderShadow(this.threeRenderer)}this.threeRenderer.render(r,r.getCamera()),o=!1}}}function JL(i){const e=new Map,t=new Map,n=i.clone();return vy(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;const r=s,o=e.get(s),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function vy(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)vy(i.children[n],e.children[n],t)}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A0=Symbol("prepared"),Kc=Symbol("prepare"),oi=Symbol("preparedGLTF"),jc=Symbol("clone");class ZL{constructor(e){this[oi]=e}static prepare(e){if(e.scene==null)throw new Error("Model does not have a scene");if(e[A0])return e;const t=this[Kc](e);return t[A0]=!0,t}static[Kc](e){const{scene:t}=e,n=[t];return Object.assign(Object.assign({},e),{scene:t,scenes:n})}get parser(){return this[oi].parser}get animations(){return this[oi].animations}get scene(){return this[oi].scene}get scenes(){return this[oi].scenes}get cameras(){return this[oi].cameras}get asset(){return this[oi].asset}get userData(){return this[oi].userData}clone(){const e=this.constructor,t=this[jc]();return new e(t)}dispose(){this.scenes.forEach(e=>{e.traverse(t=>{const n=t;if(!n.material)return;(Array.isArray(n.material)?n.material:[n.material]).forEach(r=>{for(const o in r){const a=r[o];if(a instanceof _t){const l=a.source.data;l.close!=null&&l.close(),a.dispose()}}r.dispose()}),n.geometry.dispose()})})}[jc](){const e=this[oi],t=JL(this.scene);e2(t,this.scene);const n=[t],s=e.userData?Object.assign({},e.userData):{};return Object.assign(Object.assign({},e),{scene:t,scenes:n,userData:s})}}const e2=(i,e)=>{yy(i,e,(t,n)=>{n.userData.variantMaterials!==void 0&&(t.userData.variantMaterials=new Map(n.userData.variantMaterials)),n.userData.variantData!==void 0&&(t.userData.variantData=n.userData.variantData),n.userData.originalMaterial!==void 0&&(t.userData.originalMaterial=n.userData.originalMaterial)})},yy=(i,e,t)=>{t(i,e);for(let n=0;n<i.children.length;n++)yy(i.children[n],e.children[n],t)},p0=Symbol("threeGLTF"),m0=Symbol("gltf"),g0=Symbol("gltfElementMap"),_0=Symbol("threeObjectMap"),E0=Symbol("parallelTraverseThreeScene"),v0=Symbol("correlateOriginalThreeGLTF"),y0=Symbol("correlateCloneThreeGLTF");class Ga{constructor(e,t,n,s){this[p0]=e,this[m0]=t,this[g0]=s,this[_0]=n}static from(e,t){return t!=null?this[y0](e,t):this[v0](e)}static[v0](e){const t=e.parser.json,n=e.parser.associations,s=new Map,r={name:"Default"},o={type:"materials",index:-1};for(const a of n.keys())a instanceof Zn&&n.get(a)==null&&(o.index<0&&(t.materials==null&&(t.materials=[]),o.index=t.materials.length,t.materials.push(r)),a.name=r.name,n.set(a,{materials:o.index}));for(const[a,l]of n){l&&(a.userData=a.userData||{},a.userData.associations=l);for(const c in l)if(c!=null&&c!=="primitives"){const h=c,d=(t[h]||[])[l[h]];if(d==null)continue;let f=s.get(d);f==null&&(f=new Set,s.set(d,f)),f.add(a)}}return new Ga(e,t,n,s)}static[y0](e,t){const n=t.threeGLTF,s=t.gltf,r=JSON.parse(JSON.stringify(s)),o=new Map,a=new Map;for(let l=0;l<n.scenes.length;l++)this[E0](n.scenes[l],e.scenes[l],(c,h)=>{const u=t.threeObjectMap.get(c);if(u!=null){for(const d in u)if(d!=null&&d!=="primitives"){const f=d,m=u[f],g=r[f][m],A=o.get(h)||{};A[f]=m,o.set(h,A);const p=a.get(g)||new Set;p.add(h),a.set(g,p)}}});return new Ga(e,r,o,a)}static[E0](e,t,n){const s=(r,o)=>{if(n(r,o),r.isObject3D){const a=r,l=o;if(a.material)if(Array.isArray(a.material))for(let c=0;c<a.material.length;++c)n(a.material[c],l.material[c]);else n(a.material,l.material);for(let c=0;c<r.children.length;++c)s(r.children[c],o.children[c])}};s(e,t)}get threeGLTF(){return this[p0]}get gltf(){return this[m0]}get gltfElementMap(){return this[g0]}get threeObjectMap(){return this[_0]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo=Symbol("correlatedSceneGraph");class t2 extends ZL{static[Kc](e){const t=super[Kc](e);t[Jo]==null&&(t[Jo]=Ga.from(t));const{scene:n}=t,s=new Gn(void 0,1/0);return n.traverse(r=>{r.renderOrder=1e3,r.frustumCulled=!1,r.name||(r.name=r.uuid);const o=r;if(o.material){const{geometry:a}=o;o.castShadow=!0,o.isSkinnedMesh&&(a.boundingSphere=s,a.boundingBox=null);const l=o.material;if(l.isMeshBasicMaterial===!0&&(l.toneMapped=!1),l.shadowSide=ei,l.aoMap){const{gltf:c,threeObjectMap:h}=t[Jo],u=h.get(l);if(c.materials!=null&&u!=null&&u.materials!=null){const d=c.materials[u.materials];d.occlusionTexture&&d.occlusionTexture.texCoord===0&&a.attributes.uv!=null&&a.setAttribute("uv2",a.attributes.uv)}}}}),t}get correlatedSceneGraph(){return this[oi][Jo]}[jc](){const e=super[jc](),t=new Map;return e.scene.traverse(n=>{const s=n;if(s.material){const o=s.material;if(o!=null){if(t.has(o.uuid)){s.material=t.get(o.uuid);return}s.material=o.clone(),t.set(o.uuid,s.material)}}const r=n;r.target!==void 0&&r.add(r.target)}),e[Jo]=Ga.from(e,this.correlatedSceneGraph),e}}const xy=(i,e,t)=>{let n;switch(i){case Tt:n=new Uint8ClampedArray(e*t*4);break;case Xt:n=new Uint16Array(e*t*4);break;case ar:n=new Uint32Array(e*t*4);break;case kE:n=new Int8Array(e*t*4);break;case GE:n=new Int16Array(e*t*4);break;case tA:n=new Int32Array(e*t*4);break;case Ft:n=new Float32Array(e*t*4);break;default:throw new Error("Unsupported data type")}return n};let jl;const n2=(i,e,t,n)=>{if(jl!==void 0)return jl;const s=new Qn(1,1,n);e.setRenderTarget(s);const r=new ut(new gi,new On({color:16777215}));e.render(r,t),e.setRenderTarget(null);const o=xy(i,s.width,s.height);return e.readRenderTargetPixels(s,0,0,s.width,s.height,o),s.dispose(),r.geometry.dispose(),r.material.dispose(),jl=o[0]!==0,jl};class SA{constructor(e){var t,n,s,r,o,a,l,c,h,u,d,f,m,g,A,p;this._rendererIsDisposable=!1,this._supportsReadPixels=!0,this.render=()=>{this._renderer.setRenderTarget(this._renderTarget);try{this._renderer.render(this._scene,this._camera)}catch(_){throw this._renderer.setRenderTarget(null),_}this._renderer.setRenderTarget(null)},this._width=e.width,this._height=e.height,this._type=e.type,this._colorSpace=e.colorSpace;const x={format:It,depthBuffer:!1,stencilBuffer:!1,type:this._type,colorSpace:this._colorSpace,anisotropy:((t=e.renderTargetOptions)===null||t===void 0?void 0:t.anisotropy)!==void 0?(n=e.renderTargetOptions)===null||n===void 0?void 0:n.anisotropy:1,generateMipmaps:((s=e.renderTargetOptions)===null||s===void 0?void 0:s.generateMipmaps)!==void 0?(r=e.renderTargetOptions)===null||r===void 0?void 0:r.generateMipmaps:!1,magFilter:((o=e.renderTargetOptions)===null||o===void 0?void 0:o.magFilter)!==void 0?(a=e.renderTargetOptions)===null||a===void 0?void 0:a.magFilter:nt,minFilter:((l=e.renderTargetOptions)===null||l===void 0?void 0:l.minFilter)!==void 0?(c=e.renderTargetOptions)===null||c===void 0?void 0:c.minFilter:nt,samples:((h=e.renderTargetOptions)===null||h===void 0?void 0:h.samples)!==void 0?(u=e.renderTargetOptions)===null||u===void 0?void 0:u.samples:void 0,wrapS:((d=e.renderTargetOptions)===null||d===void 0?void 0:d.wrapS)!==void 0?(f=e.renderTargetOptions)===null||f===void 0?void 0:f.wrapS:Bt,wrapT:((m=e.renderTargetOptions)===null||m===void 0?void 0:m.wrapT)!==void 0?(g=e.renderTargetOptions)===null||g===void 0?void 0:g.wrapT:Bt};if(this._material=e.material,e.renderer?this._renderer=e.renderer:(this._renderer=SA.instantiateRenderer(),this._rendererIsDisposable=!0),this._scene=new ys,this._camera=new To,this._camera.position.set(0,0,10),this._camera.left=-.5,this._camera.right=.5,this._camera.top=.5,this._camera.bottom=-.5,this._camera.updateProjectionMatrix(),!n2(this._type,this._renderer,this._camera,x)){let _;switch(this._type){case Xt:_=this._renderer.extensions.has("EXT_color_buffer_float")?Ft:void 0;break}_!==void 0?(console.warn(`This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${Ft}`),this._type=_):(this._supportsReadPixels=!1,console.warn("This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown"))}this._quad=new ut(new gi,this._material),this._quad.geometry.computeBoundingBox(),this._scene.add(this._quad),this._renderTarget=new Qn(this.width,this.height,x),this._renderTarget.texture.mapping=((A=e.renderTargetOptions)===null||A===void 0?void 0:A.mapping)!==void 0?(p=e.renderTargetOptions)===null||p===void 0?void 0:p.mapping:go}static instantiateRenderer(){const e=new dA;return e.setSize(128,128),e}toArray(){if(!this._supportsReadPixels)throw new Error("Can't read pixels in this browser");const e=xy(this._type,this._width,this._height);return this._renderer.readRenderTargetPixels(this._renderTarget,0,0,this._width,this._height,e),e}toDataTexture(e){const t=new Ya(this.toArray(),this.width,this.height,It,this._type,(e==null?void 0:e.mapping)||go,(e==null?void 0:e.wrapS)||Bt,(e==null?void 0:e.wrapT)||Bt,(e==null?void 0:e.magFilter)||nt,(e==null?void 0:e.minFilter)||nt,(e==null?void 0:e.anisotropy)||1,ct);return t.generateMipmaps=(e==null?void 0:e.generateMipmaps)!==void 0?e==null?void 0:e.generateMipmaps:!1,t}disposeOnDemandRenderer(){this._renderer.setRenderTarget(null),this._rendererIsDisposable&&(this._renderer.dispose(),this._renderer.forceContextLoss())}dispose(e){this.disposeOnDemandRenderer(),e&&this.renderTarget.dispose(),this.material instanceof yn&&Object.values(this.material.uniforms).forEach(t=>{t.value instanceof _t&&t.value.dispose()}),Object.values(this.material).forEach(t=>{t instanceof _t&&t.dispose()}),this.material.dispose(),this._quad.geometry.dispose()}get width(){return this._width}set width(e){this._width=e,this._renderTarget.setSize(this._width,this._height)}get height(){return this._height}set height(e){this._height=e,this._renderTarget.setSize(this._width,this._height)}get renderer(){return this._renderer}get renderTarget(){return this._renderTarget}set renderTarget(e){this._renderTarget=e,this._width=e.width,this._height=e.height}get material(){return this._material}get type(){return this._type}get colorSpace(){return this._colorSpace}}const i2=`
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,s2=`
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;class r2 extends yn{constructor({gamma:e,offsetHdr:t,offsetSdr:n,gainMapMin:s,gainMapMax:r,maxDisplayBoost:o,hdrCapacityMin:a,hdrCapacityMax:l,sdr:c,gainMap:h}){super({name:"GainMapDecoderMaterial",vertexShader:i2,fragmentShader:s2,uniforms:{sdr:{value:c},gainMap:{value:h},gamma:{value:new L(1/e[0],1/e[1],1/e[2])},offsetHdr:{value:new L().fromArray(t)},offsetSdr:{value:new L().fromArray(n)},gainMapMin:{value:new L().fromArray(s)},gainMapMax:{value:new L().fromArray(r)},weightFactor:{value:(Math.log2(o)-a)/(l-a)}},blending:pi,depthTest:!1,depthWrite:!1}),this._maxDisplayBoost=o,this._hdrCapacityMin=a,this._hdrCapacityMax=l,this.needsUpdate=!0,this.uniformsNeedUpdate=!0}get sdr(){return this.uniforms.sdr.value}set sdr(e){this.uniforms.sdr.value=e}get gainMap(){return this.uniforms.gainMap.value}set gainMap(e){this.uniforms.gainMap.value=e}get offsetHdr(){return this.uniforms.offsetHdr.value.toArray()}set offsetHdr(e){this.uniforms.offsetHdr.value.fromArray(e)}get offsetSdr(){return this.uniforms.offsetSdr.value.toArray()}set offsetSdr(e){this.uniforms.offsetSdr.value.fromArray(e)}get gainMapMin(){return this.uniforms.gainMapMin.value.toArray()}set gainMapMin(e){this.uniforms.gainMapMin.value.fromArray(e)}get gainMapMax(){return this.uniforms.gainMapMax.value.toArray()}set gainMapMax(e){this.uniforms.gainMapMax.value.fromArray(e)}get gamma(){const e=this.uniforms.gamma.value;return[1/e.x,1/e.y,1/e.z]}set gamma(e){const t=this.uniforms.gamma.value;t.x=1/e[0],t.y=1/e[1],t.z=1/e[2]}get hdrCapacityMin(){return this._hdrCapacityMin}set hdrCapacityMin(e){this._hdrCapacityMin=e,this.calculateWeight()}get hdrCapacityMax(){return this._hdrCapacityMax}set hdrCapacityMax(e){this._hdrCapacityMax=e,this.calculateWeight()}get maxDisplayBoost(){return this._maxDisplayBoost}set maxDisplayBoost(e){this._maxDisplayBoost=Math.max(1,Math.min(65504,e)),this.calculateWeight()}calculateWeight(){const e=(Math.log2(this._maxDisplayBoost)-this._hdrCapacityMin)/(this._hdrCapacityMax-this._hdrCapacityMin);this.uniforms.weightFactor.value=Math.max(0,Math.min(1,e))}}class Sy extends Error{}class Iy extends Error{}const Zo=(i,e,t)=>{var n;let s;const r=(n=i.attributes.getNamedItem(e))===null||n===void 0?void 0:n.nodeValue;if(r)s=r;else{const o=i.getElementsByTagName(e)[0];if(o){const a=o.getElementsByTagName("rdf:li");if(a.length===3)s=Array.from(a).map(l=>l.innerHTML);else throw new Error(`Gainmap metadata contains an array of items for ${e} but its length is not 3`)}else{if(t)return t;throw new Error(`Can't find ${e} in gainmap metadata`)}}return s},o2=i=>{var e,t;let n;typeof TextDecoder<"u"?n=new TextDecoder().decode(i):n=i.toString();let s=n.indexOf("<x:xmpmeta");const r=new DOMParser;for(;s!==-1;){const o=n.indexOf("x:xmpmeta>",s);n.slice(s,o+10);const a=n.slice(s,o+10);try{const c=r.parseFromString(a,"text/xml").getElementsByTagName("rdf:Description")[0],h=Zo(c,"hdrgm:GainMapMin","0"),u=Zo(c,"hdrgm:GainMapMax"),d=Zo(c,"hdrgm:Gamma","1"),f=Zo(c,"hdrgm:OffsetSDR","0.015625"),m=Zo(c,"hdrgm:OffsetHDR","0.015625");let g=(e=c.attributes.getNamedItem("hdrgm:HDRCapacityMin"))===null||e===void 0?void 0:e.nodeValue;g||(g="0");const A=(t=c.attributes.getNamedItem("hdrgm:HDRCapacityMax"))===null||t===void 0?void 0:t.nodeValue;if(!A)throw new Error("Incomplete gainmap metadata");return{gainMapMin:Array.isArray(h)?h.map(p=>parseFloat(p)):[parseFloat(h),parseFloat(h),parseFloat(h)],gainMapMax:Array.isArray(u)?u.map(p=>parseFloat(p)):[parseFloat(u),parseFloat(u),parseFloat(u)],gamma:Array.isArray(d)?d.map(p=>parseFloat(p)):[parseFloat(d),parseFloat(d),parseFloat(d)],offsetSdr:Array.isArray(f)?f.map(p=>parseFloat(p)):[parseFloat(f),parseFloat(f),parseFloat(f)],offsetHdr:Array.isArray(m)?m.map(p=>parseFloat(p)):[parseFloat(m),parseFloat(m),parseFloat(m)],hdrCapacityMin:parseFloat(g),hdrCapacityMax:parseFloat(A)}}catch{}s=n.indexOf("<x:xmpmeta",o)}};class a2{constructor(e){this.options={debug:e&&e.debug!==void 0?e.debug:!1,extractFII:e&&e.extractFII!==void 0?e.extractFII:!0,extractNonFII:e&&e.extractNonFII!==void 0?e.extractNonFII:!0}}extract(e){return new Promise((t,n)=>{const s=this.options.debug,r=new DataView(e.buffer);if(r.getUint16(0)!==65496){n(new Error("Not a valid jpeg"));return}const o=r.byteLength;let a=2,l=0,c;for(;a<o;){if(++l>250){n(new Error(`Found no marker after ${l} loops 😵`));return}if(r.getUint8(a)!==255){n(new Error(`Not a valid marker at offset 0x${a.toString(16)}, found: 0x${r.getUint8(a).toString(16)}`));return}if(c=r.getUint8(a+1),s&&console.log(`Marker: ${c.toString(16)}`),c===226){s&&console.log("Found APP2 marker (0xffe2)");const h=a+4;if(r.getUint32(h)===1297106432){const u=h+4;let d;if(r.getUint16(u)===18761)d=!1;else if(r.getUint16(u)===19789)d=!0;else{n(new Error("No valid endianness marker found in TIFF header"));return}if(r.getUint16(u+2,!d)!==42){n(new Error("Not valid TIFF data! (no 0x002A marker)"));return}const f=r.getUint32(u+4,!d);if(f<8){n(new Error("Not valid TIFF data! (First offset less than 8)"));return}const m=u+f,g=r.getUint16(m,!d),A=m+2;let p=0;for(let M=A;M<A+12*g;M+=12)r.getUint16(M,!d)===45057&&(p=r.getUint32(M+8,!d));const _=m+2+g*12+4,C=[];for(let M=_;M<_+p*16;M+=16){const I={MPType:r.getUint32(M,!d),size:r.getUint32(M+4,!d),dataOffset:r.getUint32(M+8,!d),dependantImages:r.getUint32(M+12,!d),start:-1,end:-1,isFII:!1};I.dataOffset?(I.start=u+I.dataOffset,I.isFII=!1):(I.start=0,I.isFII=!0),I.end=I.start+I.size,C.push(I)}if(this.options.extractNonFII&&C.length){const M=new Blob([r]),I=[];for(const w of C){if(w.isFII&&!this.options.extractFII)continue;const B=M.slice(w.start,w.end+1,"image/jpeg");I.push(B)}t(I)}}}a+=2+r.getUint16(a+2)}})}}const l2=async i=>{const e=o2(i);if(!e)throw new Iy("Gain map XMP metadata not found");const n=await new a2({extractFII:!0,extractNonFII:!0}).extract(i);if(n.length!==2)throw new Sy("Gain map recovery image not found");return{sdr:new Uint8Array(await n[0].arrayBuffer()),gainMap:new Uint8Array(await n[1].arrayBuffer()),metadata:e}},x0=i=>new Promise((e,t)=>{const n=document.createElement("img");n.onload=()=>{e(n)},n.onerror=s=>{t(s)},n.src=URL.createObjectURL(i)});class c2 extends Ei{constructor(e,t){super(t),e&&(this._renderer=e),this._internalLoadingManager=new Sv}setRenderer(e){return this._renderer=e,this}setRenderTargetOptions(e){return this._renderTargetOptions=e,this}prepareQuadRenderer(){this._renderer||console.warn("WARNING: An existing WebGL Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.");const e=new r2({gainMapMax:[1,1,1],gainMapMin:[0,0,0],gamma:[1,1,1],offsetHdr:[1,1,1],offsetSdr:[1,1,1],hdrCapacityMax:1,hdrCapacityMin:0,maxDisplayBoost:1,gainMap:new _t,sdr:new _t});return new SA({width:16,height:16,type:Xt,colorSpace:ct,material:e,renderer:this._renderer,renderTargetOptions:this._renderTargetOptions})}async render(e,t,n,s){const r=s?new Blob([s],{type:"image/jpeg"}):void 0,o=new Blob([n],{type:"image/jpeg"});let a,l,c=!1;if(typeof createImageBitmap>"u"){const d=await Promise.all([r?x0(r):Promise.resolve(void 0),x0(o)]);l=d[0],a=d[1],c=!0}else{const d=await Promise.all([r?createImageBitmap(r,{imageOrientation:"flipY"}):Promise.resolve(void 0),createImageBitmap(o,{imageOrientation:"flipY"})]);l=d[0],a=d[1]}const h=new _t(l||new ImageData(2,2),go,Bt,Bt,nt,mp,It,Tt,1,ct);h.flipY=c,h.needsUpdate=!0;const u=new _t(a,go,Bt,Bt,nt,mp,It,Tt,1,St);u.flipY=c,u.needsUpdate=!0,e.width=a.width,e.height=a.height,e.material.gainMap=h,e.material.sdr=u,e.material.gainMapMin=t.gainMapMin,e.material.gainMapMax=t.gainMapMax,e.material.offsetHdr=t.offsetHdr,e.material.offsetSdr=t.offsetSdr,e.material.gamma=t.gamma,e.material.hdrCapacityMin=t.hdrCapacityMin,e.material.hdrCapacityMax=t.hdrCapacityMax,e.material.maxDisplayBoost=Math.pow(2,t.hdrCapacityMax),e.material.needsUpdate=!0,e.render()}}class h2 extends c2{load(e,t,n,s){const r=this.prepareQuadRenderer(),o=new Vi(this._internalLoadingManager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(this.withCredentials),this.manager.itemStart(e),o.load(e,async a=>{if(typeof a=="string")throw new Error("Invalid buffer, received [string], was expecting [ArrayBuffer]");const l=new Uint8Array(a);let c,h,u;try{const d=await l2(l);c=d.sdr,h=d.gainMap,u=d.metadata}catch(d){if(d instanceof Iy||d instanceof Sy)console.warn(`Failure to reconstruct an HDR image from ${e}: Gain map metadata not found in the file, HDRJPGLoader will render the SDR jpeg`),u={gainMapMin:[0,0,0],gainMapMax:[1,1,1],gamma:[1,1,1],hdrCapacityMin:0,hdrCapacityMax:1,offsetHdr:[0,0,0],offsetSdr:[0,0,0]},c=l;else throw d}try{await this.render(r,u,c,h)}catch(d){this.manager.itemError(e),typeof s=="function"&&s(d),r.disposeOnDemandRenderer();return}typeof t=="function"&&t(r),this.manager.itemEnd(e),r.disposeOnDemandRenderer()},n,a=>{this.manager.itemError(e),typeof s=="function"&&s(a)}),r}}class u2 extends wR{constructor(e){super(e),this.type=Xt}parse(e){const o=function(B,y){switch(B){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(y||""))}},h=`
`,u=function(B,y,v){y=y||1024;let V=B.pos,D=-1,G=0,H="",X=String.fromCharCode.apply(null,new Uint16Array(B.subarray(V,V+128)));for(;0>(D=X.indexOf(h))&&G<y&&V<B.byteLength;)H+=X,G+=X.length,V+=128,X+=String.fromCharCode.apply(null,new Uint16Array(B.subarray(V,V+128)));return-1<D?(B.pos+=G+D+1,H+X.slice(0,D)):!1},d=function(B){const y=/^#\?(\S+)/,v=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,U=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,V=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,G={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let H,X;for((B.pos>=B.byteLength||!(H=u(B)))&&o(1,"no header found"),(X=H.match(y))||o(3,"bad initial token"),G.valid|=1,G.programtype=X[1],G.string+=H+`
`;H=u(B),H!==!1;){if(G.string+=H+`
`,H.charAt(0)==="#"){G.comments+=H+`
`;continue}if((X=H.match(v))&&(G.gamma=parseFloat(X[1])),(X=H.match(U))&&(G.exposure=parseFloat(X[1])),(X=H.match(V))&&(G.valid|=2,G.format=X[1]),(X=H.match(D))&&(G.valid|=4,G.height=parseInt(X[1],10),G.width=parseInt(X[2],10)),G.valid&2&&G.valid&4)break}return G.valid&2||o(3,"missing format specifier"),G.valid&4||o(3,"missing image size specifier"),G},f=function(B,y,v){const U=y;if(U<8||U>32767||B[0]!==2||B[1]!==2||B[2]&128)return new Uint8Array(B);U!==(B[2]<<8|B[3])&&o(3,"wrong scanline width");const V=new Uint8Array(4*y*v);V.length||o(4,"unable to allocate buffer space");let D=0,G=0;const H=4*U,X=new Uint8Array(4),q=new Uint8Array(H);let Q=v;for(;Q>0&&G<B.byteLength;){G+4>B.byteLength&&o(1),X[0]=B[G++],X[1]=B[G++],X[2]=B[G++],X[3]=B[G++],(X[0]!=2||X[1]!=2||(X[2]<<8|X[3])!=U)&&o(3,"bad rgbe scanline format");let te=0,ne;for(;te<H&&G<B.byteLength;){ne=B[G++];const ge=ne>128;if(ge&&(ne-=128),(ne===0||te+ne>H)&&o(3,"bad scanline data"),ge){const Me=B[G++];for(let Z=0;Z<ne;Z++)q[te++]=Me}else q.set(B.subarray(G,G+ne),te),te+=ne,G+=ne}const ae=U;for(let ge=0;ge<ae;ge++){let Me=0;V[D]=q[ge+Me],Me+=U,V[D+1]=q[ge+Me],Me+=U,V[D+2]=q[ge+Me],Me+=U,V[D+3]=q[ge+Me],D+=4}Q--}return V},m=function(B,y,v,U){const V=B[y+3],D=Math.pow(2,V-128)/255;v[U+0]=B[y+0]*D,v[U+1]=B[y+1]*D,v[U+2]=B[y+2]*D,v[U+3]=1},g=function(B,y,v,U){const V=B[y+3],D=Math.pow(2,V-128)/255;v[U+0]=gl.toHalfFloat(Math.min(B[y+0]*D,65504)),v[U+1]=gl.toHalfFloat(Math.min(B[y+1]*D,65504)),v[U+2]=gl.toHalfFloat(Math.min(B[y+2]*D,65504)),v[U+3]=gl.toHalfFloat(1)},A=new Uint8Array(e);A.pos=0;const p=d(A),x=p.width,_=p.height,C=f(A.subarray(A.pos),x,_);let M,I,w;switch(this.type){case Ft:w=C.length/4;const B=new Float32Array(w*4);for(let v=0;v<w;v++)m(C,v*4,B,v*4);M=B,I=Ft;break;case Xt:w=C.length/4;const y=new Uint16Array(w*4);for(let v=0;v<w;v++)g(C,v*4,y,v*4);M=y,I=Xt;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:x,height:_,data:M,header:p.string,gamma:p.gamma,exposure:p.exposure,type:I}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){switch(o.type){case Ft:case Xt:o.colorSpace=ct,o.minFilter=nt,o.magFilter=nt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,s)}}/* @license
 * Copyright 2021 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d2={topLight:{intensity:500,position:[.418,16.199,.3]},room:{position:[-.757,13.219,.717],scale:[31.713,28.305,28.591]},boxes:[{position:[-10.906,2.009,1.846],rotation:-.195,scale:[2.328,7.905,4.651]},{position:[-5.607,-.754,-.758],rotation:.994,scale:[1.97,1.534,3.955]},{position:[6.167,.857,7.803],rotation:.561,scale:[3.927,6.285,3.687]},{position:[-2.017,.018,6.124],rotation:.333,scale:[2.002,4.566,2.064]},{position:[2.291,-.756,-2.621],rotation:-.286,scale:[1.546,1.552,1.496]},{position:[-2.193,-.369,-5.547],rotation:.516,scale:[3.875,3.487,2.986]}],lights:[{intensity:50,position:[-16.116,14.37,8.208],scale:[.1,2.428,2.739]},{intensity:50,position:[-16.109,18.021,-8.207],scale:[.1,2.425,2.751]},{intensity:17,position:[14.904,12.198,-1.832],scale:[.15,4.265,6.331]},{intensity:43,position:[-.462,8.89,14.52],scale:[4.38,5.441,.088]},{intensity:20,position:[3.235,11.486,-12.541],scale:[2.5,2,.1]},{intensity:100,position:[0,20,0],scale:[1,.1,1]}]},f2={topLight:{intensity:400,position:[.5,14,.5]},room:{position:[0,13.2,0],scale:[31.5,28.5,31.5]},boxes:[{position:[-10.906,-1,1.846],rotation:-.195,scale:[2.328,7.905,4.651]},{position:[-5.607,-.754,-.758],rotation:.994,scale:[1.97,1.534,3.955]},{position:[6.167,-.16,7.803],rotation:.561,scale:[3.927,6.285,3.687]},{position:[-2.017,.018,6.124],rotation:.333,scale:[2.002,4.566,2.064]},{position:[2.291,-.756,-2.621],rotation:-.286,scale:[1.546,1.552,1.496]},{position:[-2.193,-.369,-5.547],rotation:.516,scale:[3.875,3.487,2.986]}],lights:[{intensity:80,position:[-14,10,8],scale:[.1,2.5,2.5]},{intensity:80,position:[-14,14,-4],scale:[.1,2.5,2.5]},{intensity:23,position:[14,12,0],scale:[.1,5,5]},{intensity:16,position:[0,9,14],scale:[5,5,.1]},{intensity:80,position:[7,8,-14],scale:[2.5,2.5,.1]},{intensity:80,position:[-7,16,-14],scale:[2.5,2.5,.1]},{intensity:1,position:[0,20,0],scale:[.1,.1,.1]}]};class S0 extends ys{constructor(e){super(),this.position.y=-3.5;const t=new Ar;t.deleteAttribute("uv");const n=new Na({metalness:0,side:Yt}),s=new Na({metalness:0}),r=e=="legacy"?d2:f2,o=new Cv(16777215,r.topLight.intensity,28,2);o.position.set(...r.topLight.position),this.add(o);const a=new ut(t,n);a.position.set(...r.room.position),a.scale.set(...r.room.scale),this.add(a);for(const l of r.boxes){const c=new ut(t,s);c.position.set(...l.position),c.rotation.set(0,l.rotation,0),c.scale.set(...l.scale),this.add(c)}for(const l of r.lights){const c=new ut(t,this.createAreaLightMaterial(l.intensity));c.position.set(...l.position),c.scale.set(...l.scale),this.add(c)}}createAreaLightMaterial(e){const t=new On;return t.color.setScalar(e),t}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A2=.04,Qr=20,p2=/\.hdr(\.js)?$/;class I0{constructor(e){this.threeRenderer=e,this.lottieLoaderUrl="",this.withCredentials=!1,this._ldrLoader=null,this._imageLoader=null,this._hdrLoader=null,this._lottieLoader=null,this.generatedEnvironmentMap=null,this.generatedEnvironmentMapAlt=null,this.skyboxCache=new Map,this.blurMaterial=null,this.blurScene=null}get ldrLoader(){return this._ldrLoader==null&&(this._ldrLoader=new Iv),this._ldrLoader.setWithCredentials(this.withCredentials),this._ldrLoader}get imageLoader(){return this._imageLoader==null&&(this._imageLoader=new h2(this.threeRenderer)),this._imageLoader.setWithCredentials(this.withCredentials),this._imageLoader}get hdrLoader(){return this._hdrLoader==null&&(this._hdrLoader=new u2,this._hdrLoader.setDataType(Xt)),this._hdrLoader.setWithCredentials(this.withCredentials),this._hdrLoader}async getLottieLoader(){if(this._lottieLoader==null){const{LottieLoader:e}=await import(this.lottieLoaderUrl);this._lottieLoader=new e}return this._lottieLoader.setWithCredentials(this.withCredentials),this._lottieLoader}async loadImage(e){const t=await new Promise((n,s)=>this.ldrLoader.load(e,n,()=>{},s));return t.name=e,t.flipY=!1,t}async loadLottie(e,t){const n=await this.getLottieLoader();n.setQuality(t);const s=await new Promise((r,o)=>n.load(e,r,()=>{},o));return s.name=e,s}async loadEquirect(e,t=()=>{}){try{const n=p2.test(e),s=n?this.hdrLoader:this.imageLoader,r=await new Promise((o,a)=>s.load(e,l=>{const{renderTarget:c}=l;if(c!=null){const{texture:h}=c;l.dispose(!1),o(h)}else o(l)},l=>{t(l.loaded/l.total*.9)},a));return t(1),r.name=e,r.mapping=Qc,n||(r.colorSpace=St),r}finally{t&&t(1)}}async generateEnvironmentMapAndSkybox(e=null,t=null,n=()=>{}){const s=t!=="legacy";(t==="legacy"||t==="neutral")&&(t=null),t=Nv(t);let r=Promise.resolve(null),o;e&&(r=this.loadEquirectFromUrl(e,n)),t?o=this.loadEquirectFromUrl(t,n):e?o=this.loadEquirectFromUrl(e,n):o=s?this.loadGeneratedEnvironmentMapAlt():this.loadGeneratedEnvironmentMap();const[a,l]=await Promise.all([o,r]);if(a==null)throw new Error("Failed to load environment map.");return{environmentMap:a,skybox:l}}async loadEquirectFromUrl(e,t){if(!this.skyboxCache.has(e)){const n=this.loadEquirect(e,t);this.skyboxCache.set(e,n)}return this.skyboxCache.get(e)}async GenerateEnvironmentMap(e,t){await _1();const n=this.threeRenderer,s=new cA(256,{generateMipmaps:!1,type:Xt,format:It,colorSpace:ct,depthBuffer:!0}),r=new lf(.1,100,s),o=r.renderTarget.texture;o.name=t;const a=n.outputColorSpace,l=n.toneMapping;return n.toneMapping=Hi,n.outputColorSpace=ct,r.update(n,e),this.blurCubemap(s,A2),n.toneMapping=l,n.outputColorSpace=a,o}async loadGeneratedEnvironmentMap(){return this.generatedEnvironmentMap==null&&(this.generatedEnvironmentMap=this.GenerateEnvironmentMap(new S0("legacy"),"legacy")),this.generatedEnvironmentMap}async loadGeneratedEnvironmentMapAlt(){return this.generatedEnvironmentMapAlt==null&&(this.generatedEnvironmentMapAlt=this.GenerateEnvironmentMap(new S0("neutral"),"neutral")),this.generatedEnvironmentMapAlt}blurCubemap(e,t){if(this.blurMaterial==null){this.blurMaterial=this.getBlurShader(Qr);const s=new Ar,r=new ut(s,this.blurMaterial);this.blurScene=new ys,this.blurScene.add(r)}const n=e.clone();this.halfblur(e,n,t,"latitudinal"),this.halfblur(n,e,t,"longitudinal")}halfblur(e,t,n,s){const o=e.width,a=isFinite(n)?Math.PI/(2*o):2*Math.PI/(2*Qr-1),l=n/a,c=isFinite(n)?1+Math.floor(3*l):Qr;c>Qr&&console.warn(`sigmaRadians, ${n}, is too large and will clip, as it requested ${c} samples when the maximum is set to ${Qr}`);const h=[];let u=0;for(let m=0;m<Qr;++m){const g=m/l,A=Math.exp(-g*g/2);h.push(A),m==0?u+=A:m<c&&(u+=2*A)}for(let m=0;m<h.length;m++)h[m]=h[m]/u;const d=this.blurMaterial.uniforms;d.envMap.value=e.texture,d.samples.value=c,d.weights.value=h,d.latitudinal.value=s==="latitudinal",d.dTheta.value=a,new lf(.1,100,t).update(this.threeRenderer,this.blurScene)}getBlurShader(e){const t=new Float32Array(e),n=new L(0,1,0);return new yn({name:"SphericalGaussianBlur",defines:{n:e},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:t},latitudinal:{value:!1},dTheta:{value:0},poleAxis:{value:n}},vertexShader:`
      
      varying vec3 vOutputDirection;
  
      void main() {
  
        vOutputDirection = vec3( position );
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
  
      }
    `,fragmentShader:`
        varying vec3 vOutputDirection;
  
        uniform samplerCube envMap;
        uniform int samples;
        uniform float weights[ n ];
        uniform bool latitudinal;
        uniform float dTheta;
        uniform vec3 poleAxis;
  
        vec3 getSample( float theta, vec3 axis ) {
  
          float cosTheta = cos( theta );
          // Rodrigues' axis-angle rotation
          vec3 sampleDirection = vOutputDirection * cosTheta
            + cross( axis, vOutputDirection ) * sin( theta )
            + axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );
  
          return vec3( textureCube( envMap, sampleDirection ) );
  
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
      `,blending:pi,depthTest:!1,depthWrite:!1,side:Yt})}async dispose(){for(const[,e]of this.skyboxCache)(await e).dispose();this.generatedEnvironmentMap!=null&&((await this.generatedEnvironmentMap).dispose(),this.generatedEnvironmentMap=null),this.generatedEnvironmentMapAlt!=null&&((await this.generatedEnvironmentMapAlt).dispose(),this.generatedEnvironmentMapAlt=null),this.blurMaterial!=null&&this.blurMaterial.dispose()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const m2=.2,ju=40,Ju=60,C0=5,kr=[1,.79,.62,.5,.4,.31,.25],g2=3,M0="high-performance",_2=1.3;class Kn extends ni{constructor(e){super(),this.loader=new Gt(t2),this.width=0,this.height=0,this.dpr=1,this.scenes=new Set,this.multipleScenesVisible=!1,this.lastTick=performance.now(),this.renderedLastFrame=!1,this.scaleStep=0,this.lastStep=g2,this.avgFrameDuration=(Ju+ju)/2,this.onWebGLContextLost=t=>{this.dispatchEvent({type:"contextlost",sourceEvent:t})},this.onWebGLContextRestored=()=>{var t;(t=this.textureUtils)===null||t===void 0||t.dispose(),this.textureUtils=new I0(this.threeRenderer);for(const n of this.scenes)n.element[Yc]()},this.dpr=gf(),this.canvas3D=document.createElement("canvas"),this.canvas3D.id="webgl-canvas",this.canvas3D.classList.add("show");try{this.threeRenderer=new dA({canvas:this.canvas3D,alpha:!0,antialias:!0,powerPreference:e.powerPreference,preserveDrawingBuffer:!0}),this.threeRenderer.autoClear=!0,this.threeRenderer.setPixelRatio(1),this.threeRenderer.debug={checkShaderErrors:!!e.debug,onShaderError:null},this.threeRenderer.toneMapping=uh}catch(t){console.warn(t)}this.arRenderer=new jL(this),this.textureUtils=this.canRender?new I0(this.threeRenderer):null,Gt.initializeKTX2Loader(this.threeRenderer),this.canvas3D.addEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.addEventListener("webglcontextrestored",this.onWebGLContextRestored),this.updateRendererSize()}static get singleton(){return this._singleton||(this._singleton=new Kn({powerPreference:(self.ModelViewerElement||{}).powerPreference||M0,debug:lg()})),this._singleton}static resetSingleton(){const e=this._singleton.dispose();for(const t of e)t.disconnectedCallback();this._singleton=new Kn({powerPreference:(self.ModelViewerElement||{}).powerPreference||M0,debug:lg()});for(const t of e)t.connectedCallback()}get canRender(){return this.threeRenderer!=null}get scaleFactor(){return kr[this.scaleStep]}set minScale(e){let t=1;for(;t<kr.length&&!(kr[t]<e);)++t;this.lastStep=t-1}registerScene(e){this.scenes.add(e),e.forceRescale();const t=new Re;this.threeRenderer.getSize(t),e.canvas.width=t.x,e.canvas.height=t.y,this.canRender&&this.scenes.size>0&&this.threeRenderer.setAnimationLoop((n,s)=>this.render(n,s))}unregisterScene(e){this.scenes.delete(e),this.canvas3D.parentElement===e.canvas.parentElement&&e.canvas.parentElement.removeChild(this.canvas3D),this.canRender&&this.scenes.size===0&&this.threeRenderer.setAnimationLoop(null)}displayCanvas(e){return e.element.modelIsVisible&&!this.multipleScenesVisible?this.canvas3D:e.element[wf]}countVisibleScenes(){const{canvas3D:e}=this;let t=0,n=null;for(const r of this.scenes){const{element:o}=r;o.modelIsVisible&&r.externalRenderer==null&&++t,e.parentElement===r.canvas.parentElement&&(n=r)}const s=t>1;if(n!=null){const r=s&&!this.multipleScenesVisible,o=!n.element.modelIsVisible;if(r||o){const{width:a,height:l}=this.sceneSize(n);this.copyPixels(n,a,l),e.parentElement.removeChild(e)}}this.multipleScenesVisible=s}updateRendererSize(){var e;const t=gf();if(t!==this.dpr)for(const r of this.scenes){const{element:o}=r;o[Kr](o.getBoundingClientRect())}let n=0,s=0;for(const r of this.scenes)n=Math.max(n,r.width),s=Math.max(s,r.height);if(!(n===this.width&&s===this.height&&t===this.dpr)){this.width=n,this.height=s,this.dpr=t,n=Math.ceil(n*t),s=Math.ceil(s*t),this.canRender&&this.threeRenderer.setSize(n,s,!1);for(const r of this.scenes){const{canvas:o}=r;o.width=n,o.height=s,r.forceRescale(),(e=r.effectRenderer)===null||e===void 0||e.setSize(n,s)}}}updateRendererScale(e){const t=this.scaleStep;this.avgFrameDuration+=ui(m2*(e-this.avgFrameDuration),-C0,C0),this.avgFrameDuration>Ju?++this.scaleStep:this.avgFrameDuration<ju&&this.scaleStep>0&&--this.scaleStep,this.scaleStep=Math.min(this.scaleStep,this.lastStep),t!==this.scaleStep&&(this.avgFrameDuration=(Ju+ju)/2)}shouldRender(e){if(e.shouldRender())e.scaleStep!=this.scaleStep&&(e.scaleStep=this.scaleStep,this.rescaleCanvas(e));else if(e.scaleStep!=0)e.scaleStep=0,this.rescaleCanvas(e);else return!1;return!0}rescaleCanvas(e){const t=kr[e.scaleStep],n=Math.ceil(this.width/t),s=Math.ceil(this.height/t),{style:r}=e.canvas;r.width=`${n}px`,r.height=`${s}px`,this.canvas3D.style.width=`${n}px`,this.canvas3D.style.height=`${s}px`;const o=this.dpr*t,a=t<1?"GPU throttling":this.dpr!==window.devicePixelRatio?"No meta viewport tag":"";e.element.dispatchEvent(new CustomEvent("render-scale",{detail:{reportedDpr:window.devicePixelRatio,renderedDpr:o,minimumDpr:this.dpr*kr[this.lastStep],pixelWidth:Math.ceil(e.width*o),pixelHeight:Math.ceil(e.height*o),reason:a}}))}sceneSize(e){const{dpr:t}=this,n=kr[e.scaleStep],s=Math.min(Math.ceil(e.width*n*t),this.canvas3D.width),r=Math.min(Math.ceil(e.height*n*t),this.canvas3D.height);return{width:s,height:r}}copyPixels(e,t,n){const s=e.context;if(s==null){console.log("could not acquire 2d context");return}s.clearRect(0,0,t,n),s.drawImage(this.canvas3D,0,0,t,n,0,0,t,n),e.canvas.classList.add("show")}orderedScenes(){const e=[];for(const t of[!1,!0])for(const n of this.scenes)n.element.modelIsVisible===t&&e.push(n);return e}get isPresenting(){return this.arRenderer.isPresenting}preRender(e,t,n){const{element:s,exposure:r,toneMapping:o}=e;s[mi](t,n);const a=typeof r=="number"&&!Number.isNaN(r),l=s.environmentImage,c=s.skyboxImage,h=o===eA&&(l==="neutral"||l==="legacy"||!l&&!c);this.threeRenderer.toneMappingExposure=(a?r:1)*(h?_2:1)}render(e,t){if(t!=null){this.arRenderer.onWebXRFrame(e,t);return}const n=e-this.lastTick;if(this.lastTick=e,!this.canRender||this.isPresenting)return;this.countVisibleScenes(),this.updateRendererSize(),this.renderedLastFrame&&(this.updateRendererScale(n),this.renderedLastFrame=!1);const{canvas3D:s}=this;for(const r of this.orderedScenes()){const{element:o}=r;if(!o.loaded||!o.modelIsVisible&&r.renderCount>0||(this.preRender(r,e,n),!this.shouldRender(r)))continue;if(r.externalRenderer!=null){const c=r.getCamera();c.updateMatrix();const{matrix:h,projectionMatrix:u}=c,d=h.elements.slice(),f=r.getTarget();d[12]+=f.x,d[13]+=f.y,d[14]+=f.z,r.externalRenderer.render({viewMatrix:d,projectionMatrix:u.elements});continue}if(!o.modelIsVisible&&!this.multipleScenesVisible)for(const c of this.scenes)c.element.modelIsVisible&&c.queueRender();const{width:a,height:l}=this.sceneSize(r);r.renderShadow(this.threeRenderer),this.threeRenderer.setRenderTarget(null),this.threeRenderer.setViewport(0,Math.ceil(this.height*this.dpr)-l,a,l),r.effectRenderer!=null?r.effectRenderer.render(n):(this.threeRenderer.autoClear=!0,this.threeRenderer.toneMapping=r.toneMapping,this.threeRenderer.render(r,r.camera)),this.multipleScenesVisible||!r.element.modelIsVisible&&r.renderCount===0?this.copyPixels(r,a,l):s.parentElement!==r.canvas.parentElement&&(r.canvas.parentElement.appendChild(s),r.canvas.classList.remove("show")),r.hasRendered(),++r.renderCount,this.renderedLastFrame=!0}}dispose(){this.textureUtils!=null&&this.textureUtils.dispose(),this.threeRenderer!=null&&this.threeRenderer.dispose(),this.textureUtils=null,this.threeRenderer=null;const e=[];for(const t of this.scenes)e.push(t.element);return this.canvas3D.removeEventListener("webglcontextlost",this.onWebGLContextLost),this.canvas3D.removeEventListener("webglcontextrestored",this.onWebGLContextRestored),e}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=Symbol("correlatedObjects"),it=Symbol("onUpdate");class Ja{constructor(e,t=null){this[it]=e,this[Ve]=t}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w0=new On,E2=new gi(2,2);let v2=0;const fn=Symbol("threeTexture"),b0=Symbol("threeTextures");let y2=class extends Ja{get[fn](){var e;return(e=this[Ve])===null||e===void 0?void 0:e.values().next().value}get[b0](){return this[Ve]}constructor(e,t){super(e,new Set(t?[t]:[])),this[fn].image.src||(this[fn].image.src=t.name?t.name:"adhoc_image"+v2++),this[fn].image.name||(this[fn].image.name=t&&t.image&&t.image.src?t.image.src.split("/").pop():"adhoc_image")}get name(){return this[fn].image.name||""}get uri(){return this[fn].image.src}get bufferView(){return this[fn].image.bufferView}get element(){const e=this[fn];if(e&&(e.isCanvasTexture||e.isVideoTexture))return e.image}get animation(){const e=this[fn];if(e&&e.isCanvasTexture&&e.animation)return e.animation}get type(){return this.uri!=null?"external":"embedded"}set name(e){for(const t of this[b0])t.image.name=e}update(){const e=this[fn];e&&e.isCanvasTexture&&!e.animation&&(this[fn].needsUpdate=!0,this[it]())}async createThumbnail(e,t){const n=new ys;w0.map=this[fn];const s=new ut(E2,w0);n.add(s);const r=new To(-1,1,1,-1,0,1),{threeRenderer:o}=Kn.singleton,a=new Qn(e,t);o.setRenderTarget(a),o.render(n,r),o.setRenderTarget(null);const l=new Uint8Array(e*t*4);o.readRenderTargetPixels(a,0,0,e,t,l),ps.width=e,ps.height=t;const c=ps.getContext("2d"),h=c.createImageData(e,t);return h.data.set(l),c.putImageData(h,0,0),new Promise(async(u,d)=>{ps.toBlob(f=>{if(!f)return d("Failed to capture thumbnail.");u(URL.createObjectURL(f))},"image/png")})}};var Wt;(function(i){i[i.Nearest=9728]="Nearest",i[i.Linear=9729]="Linear",i[i.NearestMipmapNearest=9984]="NearestMipmapNearest",i[i.LinearMipmapNearest=9985]="LinearMipmapNearest",i[i.NearestMipmapLinear=9986]="NearestMipmapLinear",i[i.LinearMipmapLinear=9987]="LinearMipmapLinear"})(Wt||(Wt={}));var Es;(function(i){i[i.ClampToEdge=33071]="ClampToEdge",i[i.MirroredRepeat=33648]="MirroredRepeat",i[i.Repeat=10497]="Repeat"})(Es||(Es={}));/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T0=new Map([[Es.Repeat,ti],[Es.ClampToEdge,Bt],[Es.MirroredRepeat,or]]),xf=new Map([[ti,Es.Repeat],[Bt,Es.ClampToEdge],[or,Es.MirroredRepeat]]),x2=new Map([[Wt.Nearest,Pt],[Wt.Linear,nt],[Wt.NearestMipmapNearest,Wa],[Wt.LinearMipmapNearest,ir],[Wt.NearestMipmapLinear,ds],[Wt.LinearMipmapLinear,_n]]),Cy=new Map([[Pt,Wt.Nearest],[nt,Wt.Linear],[Wa,Wt.NearestMipmapNearest],[ir,Wt.LinearMipmapNearest],[ds,Wt.NearestMipmapLinear],[_n,Wt.LinearMipmapLinear]]),S2=new Map([[Wt.Nearest,Pt],[Wt.Linear,nt]]),My=new Map([[Pt,Wt.Nearest],[nt,Wt.Linear]]),I2=i=>Cy.has(i),C2=i=>My.has(i),M2=i=>xf.has(i),w2=(i,e)=>{switch(i){case"minFilter":return I2(e);case"magFilter":return C2(e);case"wrapS":case"wrapT":return M2(e);case"rotation":case"repeat":case"offset":return!0;default:throw new Error(`Cannot configure property "${i}" on Sampler`)}},Bi=Symbol("threeTexture"),B0=Symbol("threeTextures"),ts=Symbol("setProperty");class b2 extends Ja{get[Bi](){var e;return(e=this[Ve])===null||e===void 0?void 0:e.values().next().value}get[B0](){return this[Ve]}constructor(e,t){super(e,new Set(t?[t]:[]))}get name(){return this[Bi].name||""}get minFilter(){return Cy.get(this[Bi].minFilter)}get magFilter(){return My.get(this[Bi].magFilter)}get wrapS(){return xf.get(this[Bi].wrapS)}get wrapT(){return xf.get(this[Bi].wrapT)}get rotation(){return this[Bi].rotation}get scale(){return bf(this[Bi].repeat)}get offset(){return bf(this[Bi].offset)}setMinFilter(e){this[ts]("minFilter",x2.get(e))}setMagFilter(e){this[ts]("magFilter",S2.get(e))}setWrapS(e){this[ts]("wrapS",T0.get(e))}setWrapT(e){this[ts]("wrapT",T0.get(e))}setRotation(e){e==null&&(e=0),this[ts]("rotation",e)}setScale(e){e==null&&(e={u:1,v:1}),this[ts]("repeat",new Re(e.u,e.v))}setOffset(e){e==null&&(e={u:0,v:0}),this[ts]("offset",new Re(e.u,e.v))}[ts](e,t){if(w2(e,t))for(const n of this[B0])n[e]=t,n.needsUpdate=!0;this[it]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=Symbol("image"),D0=Symbol("sampler"),L0=Symbol("threeTexture");class wy extends Ja{constructor(e,t){super(e,new Set(t?[t]:[])),this[D0]=new b2(e,t),this[R0]=new y2(e,t)}get[L0](){var e;return(e=this[Ve])===null||e===void 0?void 0:e.values().next().value}get name(){return this[L0].name||""}set name(e){for(const t of this[Ve])t.name=e}get sampler(){return this[D0]}get source(){return this[R0]}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var by,Ty,By;const Ws=Symbol("texture"),qs=Symbol("transform"),Zu=Symbol("materials"),P0=Symbol("usage"),Gr=Symbol("onUpdate"),pa=Symbol("activeVideo");var Be;(function(i){i[i.Base=0]="Base",i[i.MetallicRoughness=1]="MetallicRoughness",i[i.Normal=2]="Normal",i[i.Occlusion=3]="Occlusion",i[i.Emissive=4]="Emissive",i[i.Clearcoat=5]="Clearcoat",i[i.ClearcoatRoughness=6]="ClearcoatRoughness",i[i.ClearcoatNormal=7]="ClearcoatNormal",i[i.SheenColor=8]="SheenColor",i[i.SheenRoughness=9]="SheenRoughness",i[i.Transmission=10]="Transmission",i[i.Thickness=11]="Thickness",i[i.Specular=12]="Specular",i[i.SpecularColor=13]="SpecularColor",i[i.Iridescence=14]="Iridescence",i[i.IridescenceThickness=15]="IridescenceThickness",i[i.Anisotropy=16]="Anisotropy"})(Be||(Be={}));class so{constructor(e,t,n,s){this[by]=null,this[Ty]={rotation:0,scale:new Re(1,1),offset:new Re(0,0)},this[By]=!1,n&&(this[qs].rotation=n.rotation,this[qs].scale.copy(n.repeat),this[qs].offset.copy(n.offset),this[Ws]=new wy(e,n)),this[Gr]=e,this[Zu]=s,this[P0]=t}get texture(){return this[Ws]}setTexture(e){var t,n;const s=e!=null?e.source[fn]:null,r=(t=this[Ws])===null||t===void 0?void 0:t.source[fn];if(r!=null&&r.isVideoTexture?this[pa]=!1:!((n=this[Ws])===null||n===void 0)&&n.source.animation&&this[Ws].source.animation.removeEventListener("enterFrame",this[Gr]),this[Ws]=e,s!=null&&s.isVideoTexture){const a=s.image;if(this[pa]=!0,a.requestVideoFrameCallback!=null){const l=()=>{this[pa]&&(this[Gr](),a.requestVideoFrameCallback(l))};a.requestVideoFrameCallback(l)}else{const l=()=>{this[pa]&&(this[Gr](),requestAnimationFrame(l))};requestAnimationFrame(l)}}else(e==null?void 0:e.source.animation)!=null&&e.source.animation.addEventListener("enterFrame",this[Gr]);let o=St;if(this[Zu])for(const a of this[Zu]){switch(this[P0]){case Be.Base:a.map=s;break;case Be.MetallicRoughness:o=ct,a.metalnessMap=s,a.roughnessMap=s;break;case Be.Normal:o=ct,a.normalMap=s;break;case Be.Occlusion:o=ct,a.aoMap=s;break;case Be.Emissive:a.emissiveMap=s;break;case Be.Clearcoat:a.clearcoatMap=s;break;case Be.ClearcoatRoughness:a.clearcoatRoughnessMap=s;break;case Be.ClearcoatNormal:a.clearcoatNormalMap=s;break;case Be.SheenColor:a.sheenColorMap=s;break;case Be.SheenRoughness:a.sheenRoughnessMap=s;break;case Be.Transmission:a.transmissionMap=s;break;case Be.Thickness:a.thicknessMap=s;break;case Be.Specular:a.specularIntensityMap=s;break;case Be.SpecularColor:a.specularColorMap=s;break;case Be.Iridescence:a.iridescenceMap=s;break;case Be.IridescenceThickness:a.iridescenceThicknessMap=s;break;case Be.Anisotropy:a.anisotropyMap=s;break}a.needsUpdate=!0}s&&(s.colorSpace=o,s.rotation=this[qs].rotation,s.repeat=this[qs].scale,s.offset=this[qs].offset),this[Gr]()}}by=Ws,Ty=qs,By=pa;/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ea=Symbol("threeMaterial"),Jl=Symbol("threeMaterials"),F0=Symbol("baseColorTexture"),U0=Symbol("metallicRoughnessTexture");class T2 extends Ja{constructor(e,t){super(e,t);const{map:n,metalnessMap:s}=t.values().next().value;this[F0]=new so(e,Be.Base,n,t),this[U0]=new so(e,Be.MetallicRoughness,s,t)}get[Jl](){return this[Ve]}get[ea](){var e;return(e=this[Ve])===null||e===void 0?void 0:e.values().next().value}get baseColorFactor(){const e=[0,0,0,this[ea].opacity];return this[ea].color.toArray(e),e}get metallicFactor(){return this[ea].metalness}get roughnessFactor(){return this[ea].roughness}get baseColorTexture(){return this[F0]}get metallicRoughnessTexture(){return this[U0]}setBaseColorFactor(e){const t=new De;e instanceof Array?t.fromArray(e):t.set(e);for(const n of this[Jl])n.color.set(t),e instanceof Array&&e.length>3?n.opacity=e[3]:(e=[0,0,0,n.opacity],t.toArray(e));this[it]()}setMetallicFactor(e){for(const t of this[Jl])t.metalness=e;this[it]()}setRoughnessFactor(e){for(const t of this[Jl])t.roughness=e;this[it]()}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var N0,O0;const Q0=Symbol("pbrMetallicRoughness"),k0=Symbol("normalTexture"),G0=Symbol("occlusionTexture"),H0=Symbol("emissiveTexture"),pt=Symbol("backingThreeMaterial"),V0=Symbol("applyAlphaCutoff"),ed=Symbol("getAlphaMode"),Hr=Symbol("lazyLoadGLTFInfo"),td=Symbol("initialize"),Sf=Symbol("getLoadedMaterial"),xe=Symbol("ensureMaterialIsLoaded"),z0=Symbol("gltfIndex"),ma=Symbol("setActive"),Tc=Symbol("variantIndices"),nd=Symbol("isActive"),Bc=Symbol("variantSet"),W0=Symbol("modelVariants"),id=Symbol("name"),mn=Symbol("pbrTextures");class sd extends Ja{constructor(e,t,n,s,r,o,a=void 0){super(e,r),this[N0]=new Set,this[O0]=new Map,this[z0]=t,this[nd]=n,this[W0]=s,this[id]=o,a==null?this[td]():this[Hr]=a}get[(N0=Bc,O0=mn,pt)](){return this[Ve].values().next().value}[td](){const e=this[it],t=this[Ve];this[Q0]=new T2(e,t);const{normalMap:n,aoMap:s,emissiveMap:r}=t.values().next().value;this[k0]=new so(e,Be.Normal,n,t),this[G0]=new so(e,Be.Occlusion,s,t),this[H0]=new so(e,Be.Emissive,r,t);const o=a=>{this[mn].set(a,new so(e,a,null,t))};o(Be.Clearcoat),o(Be.ClearcoatRoughness),o(Be.ClearcoatNormal),o(Be.SheenColor),o(Be.SheenRoughness),o(Be.Transmission),o(Be.Thickness),o(Be.Specular),o(Be.SpecularColor),o(Be.Iridescence),o(Be.IridescenceThickness),o(Be.Anisotropy)}async[Sf](){if(this[Hr]!=null){const{set:e,material:t}=await this[Hr].doLazyLoad();return this[Ve]=e,this[td](),this[Hr]=void 0,this.ensureLoaded=async()=>{},t}return this[Ve].values().next().value}colorFromRgb(e){const t=new De;return e instanceof Array?t.fromArray(e):t.set(e),t}[xe](){if(this[Hr]!=null)throw new Error(`Material "${this.name}" has not been loaded, call 'await
    myMaterial.ensureLoaded()' before using an unloaded material.`)}async ensureLoaded(){await this[Sf]()}get isLoaded(){return this[Hr]==null}get isActive(){return this[nd]}[ma](e){this[nd]=e}get name(){return this[id]||""}set name(e){if(this[id]=e,this[Ve]!=null)for(const t of this[Ve])t.name=e}get pbrMetallicRoughness(){return this[xe](),this[Q0]}get normalTexture(){return this[xe](),this[k0]}get occlusionTexture(){return this[xe](),this[G0]}get emissiveTexture(){return this[xe](),this[H0]}get emissiveFactor(){return this[xe](),this[pt].emissive.toArray()}get index(){return this[z0]}[Tc](){return this[Bc]}hasVariant(e){const t=this[W0].get(e);return t!=null&&this[Bc].has(t.index)}setEmissiveFactor(e){this[xe]();const t=this.colorFromRgb(e);for(const n of this[Ve])n.emissive.set(t);this[it]()}[ed](){return this[pt].transparent?"BLEND":this[pt].alphaTest>0?"MASK":"OPAQUE"}[V0](){this[xe]();for(const e of this[Ve])this[ed]()==="MASK"?e.alphaTest==null&&(e.alphaTest=.5):e.alphaTest=void 0,e.needsUpdate=!0}setAlphaCutoff(e){this[xe]();for(const t of this[Ve])t.alphaTest=e,t.needsUpdate=!0;this[V0](),this[it]()}getAlphaCutoff(){return this[xe](),this[pt].alphaTest}setDoubleSided(e){this[xe]();for(const t of this[Ve])t.side=e?rn:ei,t.needsUpdate=!0;this[it]()}getDoubleSided(){return this[xe](),this[pt].side==rn}setAlphaMode(e){this[xe]();const t=(n,s)=>{n.transparent=s,n.depthWrite=!s};for(const n of this[Ve])t(n,e==="BLEND"),e==="MASK"?n.alphaTest=.5:n.alphaTest=void 0,n.needsUpdate=!0;this[it]()}getAlphaMode(){return this[xe](),this[ed]()}get emissiveStrength(){return this[xe](),this[pt].emissiveIntensity}setEmissiveStrength(e){this[xe]();for(const t of this[Ve])t.emissiveIntensity=e;this[it]()}get clearcoatFactor(){return this[xe](),this[pt].clearcoat}get clearcoatRoughnessFactor(){return this[xe](),this[pt].clearcoatRoughness}get clearcoatTexture(){return this[xe](),this[mn].get(Be.Clearcoat)}get clearcoatRoughnessTexture(){return this[xe](),this[mn].get(Be.ClearcoatRoughness)}get clearcoatNormalTexture(){return this[xe](),this[mn].get(Be.ClearcoatNormal)}get clearcoatNormalScale(){return this[xe](),this[pt].clearcoatNormalScale.x}setClearcoatFactor(e){this[xe]();for(const t of this[Ve])t.clearcoat=e;this[it]()}setClearcoatRoughnessFactor(e){this[xe]();for(const t of this[Ve])t.clearcoatRoughness=e;this[it]()}setClearcoatNormalScale(e){this[xe]();for(const t of this[Ve])t.clearcoatNormalScale=new Re(e,e);this[it]()}get ior(){return this[xe](),this[pt].ior}setIor(e){this[xe]();for(const t of this[Ve])t.ior=e;this[it]()}get sheenColorFactor(){return this[xe](),this[pt].sheenColor.toArray()}get sheenColorTexture(){return this[xe](),this[mn].get(Be.SheenColor)}get sheenRoughnessFactor(){return this[xe](),this[pt].sheenRoughness}get sheenRoughnessTexture(){return this[xe](),this[mn].get(Be.SheenRoughness)}setSheenColorFactor(e){this[xe]();const t=this.colorFromRgb(e);for(const n of this[Ve])n.sheenColor.set(t),n.sheen=1;this[it]()}setSheenRoughnessFactor(e){this[xe]();for(const t of this[Ve])t.sheenRoughness=e,t.sheen=1;this[it]()}get transmissionFactor(){return this[xe](),this[pt].transmission}get transmissionTexture(){return this[xe](),this[mn].get(Be.Transmission)}setTransmissionFactor(e){this[xe]();for(const t of this[Ve])t.transmission=e;this[it]()}get thicknessFactor(){return this[xe](),this[pt].thickness}get thicknessTexture(){return this[xe](),this[mn].get(Be.Thickness)}get attenuationDistance(){return this[xe](),this[pt].attenuationDistance}get attenuationColor(){return this[xe](),this[pt].attenuationColor.toArray()}setThicknessFactor(e){this[xe]();for(const t of this[Ve])t.thickness=e;this[it]()}setAttenuationDistance(e){this[xe]();for(const t of this[Ve])t.attenuationDistance=e;this[it]()}setAttenuationColor(e){this[xe]();const t=this.colorFromRgb(e);for(const n of this[Ve])n.attenuationColor.set(t);this[it]()}get specularFactor(){return this[xe](),this[pt].specularIntensity}get specularTexture(){return this[xe](),this[mn].get(Be.Specular)}get specularColorFactor(){return this[xe](),this[pt].specularColor.toArray()}get specularColorTexture(){return this[xe](),this[mn].get(Be.SheenColor)}setSpecularFactor(e){this[xe]();for(const t of this[Ve])t.specularIntensity=e;this[it]()}setSpecularColorFactor(e){this[xe]();const t=this.colorFromRgb(e);for(const n of this[Ve])n.specularColor.set(t);this[it]()}get iridescenceFactor(){return this[xe](),this[pt].iridescence}get iridescenceTexture(){return this[xe](),this[mn].get(Be.Iridescence)}get iridescenceIor(){return this[xe](),this[pt].iridescenceIOR}get iridescenceThicknessMinimum(){return this[xe](),this[pt].iridescenceThicknessRange[0]}get iridescenceThicknessMaximum(){return this[xe](),this[pt].iridescenceThicknessRange[1]}get iridescenceThicknessTexture(){return this[xe](),this[mn].get(Be.IridescenceThickness)}setIridescenceFactor(e){this[xe]();for(const t of this[Ve])t.iridescence=e;this[it]()}setIridescenceIor(e){this[xe]();for(const t of this[Ve])t.iridescenceIOR=e;this[it]()}setIridescenceThicknessMinimum(e){this[xe]();for(const t of this[Ve])t.iridescenceThicknessRange[0]=e;this[it]()}setIridescenceThicknessMaximum(e){this[xe]();for(const t of this[Ve])t.iridescenceThicknessRange[1]=e;this[it]()}get anisotropyStrength(){return this[xe](),this[pt].anisotropy}get anisotropyRotation(){return this[xe](),this[pt].anisotropyRotation}get anisotropyTexture(){return this[xe](),this[mn].get(Be.Anisotropy)}setAnisotropyStrength(e){this[xe]();for(const t of this[Ve])t.anisotropy=e;this[it]()}setAnisotropyRotation(e){this[xe]();for(const t of this[Ve])t.anisotropyRotation=e;this[it]()}}let Ry=class{constructor(e){this.name="",this.children=new Array,this.name=e}};class rd extends Ry{constructor(e,t,n,s){super(e.name),this.materials=new Map,this.variantToMaterialMap=new Map,this.initialMaterialIdx=0,this.activeMaterialIdx=0,this.mesh=e;const{gltf:r,threeGLTF:o,threeObjectMap:a}=s;this.parser=o.parser,this.modelVariants=n,this.mesh.userData.variantData=n;const l=a.get(e.material);l.materials!=null?this.initialMaterialIdx=this.activeMaterialIdx=l.materials:console.error(`Primitive (${e.name}) missing initial material reference.`);const c=e.userData.associations||{};if(c.meshes==null){console.error("Mesh is missing primitive index association");return}const d=((r.meshes||[])[c.meshes].primitives||[])[c.primitives];if(d==null){console.error("Mesh primitive definition is missing.");return}if(d.material!=null)this.materials.set(d.material,t[d.material]);else{const f=t.findIndex(m=>m.name==="Default");f>=0?this.materials.set(f,t[f]):console.warn("gltfPrimitive has no material!")}if(d.extensions&&d.extensions.KHR_materials_variants){const f=d.extensions.KHR_materials_variants,g=o.parser.json.extensions.KHR_materials_variants.variants;for(const A of f.mappings){const p=t[A.material];this.materials.set(A.material,p);for(const x of A.variants){const{name:_}=g[x];this.variantToMaterialMap.set(x,p),p[Tc]().add(x),n.has(_)||n.set(_,{name:_,index:x})}}}}async setActiveMaterial(e){const t=this.materials.get(e);if(t!=null&&e!==this.activeMaterialIdx){this.mesh.material=await t[Sf]();const{normalScale:n}=this.mesh.material;n!=null&&n.y*n.x<0!=(this.mesh.geometry.attributes.tangent==null)&&this.parser.assignFinalMaterial(this.mesh),this.activeMaterialIdx=e}return this.mesh.material}getActiveMaterial(){return this.materials.get(this.activeMaterialIdx)}getMaterial(e){return this.materials.get(e)}async enableVariant(e){if(e==null)return this.setActiveMaterial(this.initialMaterialIdx);if(this.variantToMaterialMap!=null&&this.modelVariants.has(e)){const t=this.modelVariants.get(e);return this.enableVariantHelper(t.index)}return null}async enableVariantHelper(e){if(this.variantToMaterialMap!=null&&e!=null){const t=this.variantToMaterialMap.get(e);if(t!=null)return this.setActiveMaterial(t.index)}return null}async instantiateVariants(){if(this.variantToMaterialMap!=null)for(const e of this.variantToMaterialMap.keys()){const t=this.mesh.userData.variantMaterials.get(e);if(t.material!=null)continue;const n=await this.enableVariantHelper(e);n!=null&&(t.material=n)}}get variantInfo(){return this.variantToMaterialMap}addVariant(e,t){if(!this.ensureVariantIsUnused(t))return!1;this.modelVariants.has(t)||this.modelVariants.set(t,{name:t,index:this.modelVariants.size});const s=this.modelVariants.get(t).index;return e[Tc]().add(s),this.variantToMaterialMap.set(s,e),this.materials.set(e.index,e),this.updateVariantUserData(s,e),!0}deleteVariant(e){if(this.variantInfo.has(e)){this.variantInfo.delete(e);const t=this.mesh.userData.variantMaterials;t!=null&&t.delete(e)}}updateVariantUserData(e,t){t[Tc]().add(e),this.mesh.userData.variantData=this.modelVariants,this.mesh.userData.variantMaterials=this.mesh.userData.variantMaterials||new Map,this.mesh.userData.variantMaterials.set(e,{material:t[Ve].values().next().value,gltfMaterialIndex:t.index})}ensureVariantIsUnused(e){const t=this.modelVariants.get(e);return t!=null&&this.variantInfo.has(t.index)?(console.warn(`Primitive cannot add variant '${e}' for this material, it already exists.`),!1):!0}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var q0,$0,X0,Y0,K0,j0;const ks=Symbol("materials"),Zl=Symbol("hierarchy"),J0=Symbol("roots"),Ri=Symbol("primitives"),Dy=Symbol("prepareVariantsForExport"),Ly=Symbol("switchVariant"),Py=Symbol("materialFromPoint"),If=Symbol("nodeFromPoint"),Fy=Symbol("nodeFromIndex"),tn=Symbol("variantData"),Cf=Symbol("availableVariants"),od=Symbol("modelOnUpdate"),Z0=Symbol("cloneMaterial");class B2{constructor(e,t,n,s){this.gltf=e,this.gltfElementMap=t,this.mapKey=n,this.doLazyLoad=s}}class R2{constructor(e,t=()=>{}){this[q0]=new Array,this[$0]=new Array,this[X0]=new Array,this[Y0]=new Array,this[K0]=()=>{},this[j0]=new Map,this[od]=t;const{gltf:n,threeGLTF:s,gltfElementMap:r}=e;for(const[l,c]of n.materials.entries()){const h=r.get(c);if(h!=null)this[ks].push(new sd(t,l,!0,this[tn],h,c.name));else{const d=(n.materials||[])[l],f=l,m=async()=>{const g=await s.parser.getDependency("material",f),A=new Set;return r.set(d,A),A.add(g),{set:A,material:g}};this[ks].push(new sd(t,l,!1,this[tn],h,c.name,new B2(n,r,d,m)))}}const o=new Map,a=new Array;for(const l of s.scene.children)a.push(l);for(;a.length>0;){const l=a.pop();let c=null;l instanceof ut?(c=new rd(l,this.materials,this[tn],e),this[Ri].push(c)):c=new Ry(l.name);const h=o.get(l);h!=null?h.children.push(c):this[J0].push(c),this[Zl].push(c);for(const u of l.children)a.push(u),o.set(l,c)}}get materials(){return this[ks]}[(q0=ks,$0=Zl,X0=J0,Y0=Ri,K0=od,j0=tn,Cf)](){const e=Array.from(this[tn].values());return e.sort((t,n)=>t.index-n.index),e.map(t=>t.name)}getMaterialByName(e){const t=this[ks].filter(n=>n.name===e);return t.length>0?t[0]:null}[Fy](e,t){const n=this[Zl].find(s=>{if(s instanceof rd){const{meshes:r,primitives:o}=s.mesh.userData.associations;if(r==e&&o==t)return!0}return!1});return n??null}[If](e){return this[Zl].find(t=>t instanceof rd&&t.mesh===e.object)}[Py](e){return this[If](e).getActiveMaterial()}async[Ly](e){for(const t of this[Ri])await t.enableVariant(e);for(const t of this.materials)t[ma](!1);for(const t of this[Ri])this.materials[t.getActiveMaterial().index][ma](!0)}async[Dy](){const e=new Array;for(const t of this[Ri])e.push(t.instantiateVariants());await Promise.all(e)}[Z0](e,t){const n=this.materials[e];n.isLoaded||console.error(`Cloning an unloaded material,
           call 'material.ensureLoaded() before cloning the material.`);const s=n[Ve],r=new Set;for(const[a,l]of s.entries()){const c=l.clone();c.name=t+(s.size>1?"_inst"+a:""),r.add(c)}const o=new sd(this[od],this[ks].length,!1,this[tn],r,t);return this[ks].push(o),o}createMaterialInstanceForVariant(e,t,n,s=!0){let r=null;for(const o of this[Ri]){const a=this[tn].get(n);a!=null&&o.variantInfo.has(a.index)||o.getMaterial(e)!=null&&(this.hasVariant(n)||this.createVariant(n),r==null&&(r=this[Z0](e,t)),o.addVariant(r,n))}if(s&&r!=null){r[ma](!0),this.materials[e][ma](!1);for(const o of this[Ri])o.enableVariant(n)}return r}createVariant(e){this[tn].has(e)?console.warn(`Variant '${e}'' already exists`):this[tn].set(e,{name:e,index:this[tn].size})}hasVariant(e){return this[tn].has(e)}setMaterialToVariant(e,t){if(this[Cf]().find(n=>n===t)==null){console.warn(`Can't add material to '${t}', the variant does not exist.'`);return}if(e<0||e>=this.materials.length){console.error("setMaterialToVariant(): materialIndex is out of bounds.");return}for(const n of this[Ri]){const s=n.getMaterial(e);s!=null&&n.addVariant(s,t)}}updateVariantName(e,t){const n=this[tn].get(e);n!=null&&(n.name=t,this[tn].set(t,n),this[tn].delete(e))}deleteVariant(e){const t=this[tn].get(e);if(t!=null){for(const n of this.materials)n.hasVariant(e)&&n[Bc].delete(t.index);for(const n of this[Ri])n.deleteVariant(t.index);this[tn].delete(e)}}}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ad=function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const Rc=Symbol("currentGLTF"),Dc=Symbol("originalGltfJson"),$s=Symbol("model"),ld=Symbol("getOnUpdateMethod"),ta=Symbol("buildTexture"),D2=i=>{var e,t,n;class s extends i{constructor(){super(...arguments),this[e]=void 0,this[t]=null,this[n]=null,this.variantName=null,this.orientation="0 0 0",this.scale="1 1 1"}get model(){return this[$s]}get availableVariants(){return this.model?this.model[Cf]():[]}get originalGltfJson(){return this[Dc]}[(e=$s,t=Rc,n=Dc,ld)](){return()=>{this[on]()}}[ta](o){return o.colorSpace=St,o.wrapS=ti,o.wrapT=ti,new wy(this[ld](),o)}async createTexture(o,a="image/png"){const{textureUtils:l}=this[rt],c=await l.loadImage(o);return c.userData.mimeType=a,this[ta](c)}async createLottieTexture(o,a=1){const{textureUtils:l}=this[rt],c=await l.loadLottie(o,a);return this[ta](c)}createVideoTexture(o){const a=document.createElement("video");a.crossOrigin=this.withCredentials?"use-credentials":"anonymous",a.src=o,a.muted=!0,a.playsInline=!0,a.loop=!0,a.play();const l=new AR(a);return this[ta](l)}createCanvasTexture(){const o=document.createElement("canvas"),a=new Ev(o);return this[ta](a)}async updated(o){if(super.updated(o),o.has("variantName")){const a=this[ur].beginActivity("variant-update");a(.1);const l=this[$s],{variantName:c}=this;l!=null&&(await l[Ly](c),this[on](),this.dispatchEvent(new CustomEvent("variant-applied"))),a(1)}if(o.has("orientation")||o.has("scale")){if(!this.loaded)return;const a=this[he];a.applyTransform(),a.updateBoundingBox(),a.updateShadow(),this[rt].arRenderer.onUpdateScene(),this[on]()}}[Ss](){super[Ss]();const{currentGLTF:o}=this[he];if(o!=null){const{correlatedSceneGraph:a}=o;a!=null&&o!==this[Rc]&&(this[$s]=new R2(a,this[ld]()),this[Dc]=JSON.parse(JSON.stringify(a.gltf))),"variants"in o.userData&&this.requestUpdate("variantName")}this[Rc]=o}async exportScene(o){const a=this[he];return new Promise(async(l,c)=>{const h={binary:!0,onlyVisible:!0,maxTextureSize:1/0,includeCustomExtensions:!1,forceIndices:!1};Object.assign(h,o),h.animations=a.animations,h.truncateDrawRange=!0;const u=a.shadow;let d=!1;u!=null&&(d=u.visible,u.visible=!1),await this[$s][Dy](),new xA().register(m=>new eL(m)).parse(a.model,m=>l(new Blob([h.binary?m:JSON.stringify(m)],{type:h.binary?"application/octet-stream":"application/json"})),()=>c("glTF export failed"),h),u!=null&&(u.visible=d)})}materialFromPoint(o,a){const l=this[$s];if(l==null)return null;const c=this[he],h=c.getNDC(o,a),u=c.hitFromPoint(h);return u==null||u.face==null?null:l[Py](u)}}return ad([we({type:String,attribute:"variant-name"})],s.prototype,"variantName",void 0),ad([we({type:String,attribute:"orientation"})],s.prototype,"orientation",void 0),ad([we({type:String,attribute:"scale"})],s.prototype,"scale",void 0),s};/* @license
 * Copyright 2023 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L2 extends ut{constructor(){super(void 0,new On({depthWrite:!1})),this.height=0,this.radius=0,this.resolution=0,this.userData.noHit=!0}get map(){return this.material.map}set map(e){this.material.map=e}isUsable(){return this.height>0&&this.radius>0&&this.geometry!=null&&this.map!=null}updateGeometry(e=this.height,t=this.radius,n=128){(e!=this.height||t!=this.radius||n!=this.resolution)&&(this.height=e,this.radius=t,this.resolution=n,e>0&&t>0&&(this.geometry.dispose(),this.geometry=P2(e,t,n)))}}function P2(i,e,t){const n=new mA(e,2*t,t);n.scale(1,1,-1);const s=n.getAttribute("position"),r=new L;for(let o=0;o<s.count;++o)if(r.fromBufferAttribute(s,o),r.y<0){const a=-i*3/2,l=r.y<a?-i/r.y:1-r.y*r.y/(3*a*a);r.multiplyScalar(l),r.toArray(s.array,3*o)}return s.needsUpdate=!0,n}/* @license
 * Copyright 2020 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ec=new L,cd=new L,hd=new L,tc=new Ue,e_=new Un,t_=new bn;class Uy extends BD{constructor(e){super(document.createElement("div")),this.normal=new L(0,1,0),this.initialized=!1,this.referenceCount=1,this.pivot=document.createElement("div"),this.slot=document.createElement("slot"),this.element.classList.add("annotation-wrapper"),this.slot.name=e.name,this.element.appendChild(this.pivot),this.pivot.appendChild(this.slot),this.updatePosition(e.position),this.updateNormal(e.normal),this.surface=e.surface}get facingCamera(){return!this.element.classList.contains("hide")}show(){(!this.facingCamera||!this.initialized)&&this.updateVisibility(!0)}hide(){(this.facingCamera||!this.initialized)&&this.updateVisibility(!1)}increment(){this.referenceCount++}decrement(){return this.referenceCount>0&&--this.referenceCount,this.referenceCount===0}updatePosition(e){if(e==null)return;const t=ki(e)[0].terms;for(let n=0;n<3;++n)this.position.setComponent(n,Ai(t[n]).number);this.updateMatrixWorld()}updateNormal(e){if(e==null)return;const t=ki(e)[0].terms;for(let n=0;n<3;++n)this.normal.setComponent(n,t[n].number)}updateSurface(e){if(!e&&this.initialized)return;const{mesh:t,tri:n,bary:s}=this;if(t==null||n==null||s==null)return;t.getVertexPosition(n.x,ec),t.getVertexPosition(n.y,cd),t.getVertexPosition(n.z,hd),ec.toArray(tc.elements,0),cd.toArray(tc.elements,3),hd.toArray(tc.elements,6),this.position.copy(s).applyMatrix3(tc);const r=this.parent;r.worldToLocal(t.localToWorld(this.position)),e_.set(ec,cd,hd),e_.getNormal(this.normal).transformDirection(t.matrixWorld);const o=r.parent;t_.setFromAxisAngle(ec.set(0,1,0),-o.yaw),this.normal.applyQuaternion(t_)}orient(e){this.pivot.style.transform=`rotate(${e}rad)`}updateVisibility(e){this.element.classList.toggle("hide",!e),this.slot.assignedNodes().forEach(t=>{if(t.nodeType!==Node.ELEMENT_NODE)return;const n=t,s=n.dataset.visibilityAttribute;if(s!=null){const r=`data-${s}`;n.toggleAttribute(r,e)}n.dispatchEvent(new CustomEvent("hotspot-visibility",{detail:{visible:e}}))}),this.initialized=!0}}const F2={name:"HorizontalBlurShader",uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float h;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

			gl_FragColor = sum;

		}`},U2={name:"VerticalBlurShader",uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform float v;

		varying vec2 vUv;

		void main() {

			vec4 sum = vec4( 0.0 );

			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
			sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

			gl_FragColor = sum;

		}`};function n_(i,e,t){return(1-t)*i+t*e}/* @license
 * Copyright 2022 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i_=9,N2=6,ud=2,O2=.3;class Q2 extends ft{constructor(e,t,n){super(),this.camera=new To,this.renderTarget=null,this.renderTargetBlur=null,this.depthMaterial=new pv,this.horizontalBlurMaterial=new yn(F2),this.verticalBlurMaterial=new yn(U2),this.intensity=0,this.softness=1,this.boundingBox=new pn,this.size=new L,this.maxDimension=0,this.isAnimated=!1,this.needsUpdate=!1;const{camera:s}=this;s.rotation.x=Math.PI/2,s.left=-.5,s.right=.5,s.bottom=-.5,s.top=.5,this.add(s);const r=new gi,o=new On({opacity:1,transparent:!0,side:Yt});this.floor=new ut(r,o),this.floor.userData.noHit=!0,s.add(this.floor),this.blurPlane=new ut(r),this.blurPlane.visible=!1,s.add(this.blurPlane),e.target.add(this),this.depthMaterial.onBeforeCompile=function(a){a.fragmentShader=a.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * opacity );")},this.horizontalBlurMaterial.depthTest=!1,this.verticalBlurMaterial.depthTest=!1,this.setScene(e,t,n)}setScene(e,t,n){const{boundingBox:s,size:r,rotation:o,position:a}=this;if(this.isAnimated=e.animationNames.length>0,this.boundingBox.copy(e.boundingBox),this.size.copy(e.size),this.maxDimension=Math.max(r.x,r.y,r.z)*(this.isAnimated?ud:1),this.boundingBox.getCenter(a),n==="back"){const{min:l,max:c}=s;[l.y,l.z]=[l.z,l.y],[c.y,c.z]=[c.z,c.y],[r.y,r.z]=[r.z,r.y],o.x=Math.PI/2,o.y=Math.PI}else o.x=0,o.y=0;if(this.isAnimated){const l=s.min.y,c=s.max.y;r.y=this.maxDimension,s.expandByVector(r.subScalar(this.maxDimension).multiplyScalar(-.5)),s.min.y=l,s.max.y=c,r.set(this.maxDimension,c-l,this.maxDimension)}n==="bottom"?a.y=s.min.y:a.z=s.min.y,this.setSoftness(t)}setSoftness(e){this.softness=e;const{size:t,camera:n}=this,s=this.isAnimated?ud:1,r=s*Math.pow(2,i_-e*(i_-N2));this.setMapSize(r);const o=t.y/2,a=t.y*s;n.near=0,n.far=n_(a,o,e),this.depthMaterial.opacity=1/e,n.updateProjectionMatrix(),this.setIntensity(this.intensity),this.setOffset(0)}setMapSize(e){const{size:t}=this;this.isAnimated&&(e*=ud);const n=Math.floor(t.x>t.z?e:e*t.x/t.z),s=Math.floor(t.x>t.z?e*t.z/t.x:e),r=10,o=r+n,a=r+s;if(this.renderTarget!=null&&(this.renderTarget.width!==o||this.renderTarget.height!==a)&&(this.renderTarget.dispose(),this.renderTarget=null,this.renderTargetBlur.dispose(),this.renderTargetBlur=null),this.renderTarget==null){const l={format:It};this.renderTarget=new Qn(o,a,l),this.renderTargetBlur=new Qn(o,a,l),this.floor.material.map=this.renderTarget.texture}this.camera.scale.set(t.x*(1+r/n),t.z*(1+r/s),1),this.needsUpdate=!0}setIntensity(e){this.intensity=e,e>0?(this.visible=!0,this.floor.visible=!0,this.floor.material.opacity=e*n_(O2,1,this.softness*this.softness)):(this.visible=!1,this.floor.visible=!1)}getIntensity(){return this.intensity}setOffset(e){this.floor.position.z=-e+this.gap()}gap(){return .001*this.maxDimension}render(e,t){t.overrideMaterial=this.depthMaterial;const n=e.getClearAlpha();e.setClearAlpha(0),this.floor.visible=!1;const s=e.xr.enabled;e.xr.enabled=!1;const r=e.getRenderTarget();e.setRenderTarget(this.renderTarget),e.render(t,this.camera),t.overrideMaterial=null,this.floor.visible=!0,this.blurShadow(e),e.xr.enabled=s,e.setRenderTarget(r),e.setClearAlpha(n)}blurShadow(e){const{camera:t,horizontalBlurMaterial:n,verticalBlurMaterial:s,renderTarget:r,renderTargetBlur:o,blurPlane:a}=this;a.visible=!0,a.material=n,n.uniforms.h.value=1/this.renderTarget.width,n.uniforms.tDiffuse.value=this.renderTarget.texture,e.setRenderTarget(o),e.render(a,t),a.material=s,s.uniforms.v.value=1/this.renderTarget.height,s.uniforms.tDiffuse.value=this.renderTargetBlur.texture,e.setRenderTarget(r),e.render(a,t),a.visible=!1}dispose(){this.renderTarget!=null&&this.renderTarget.dispose(),this.renderTargetBlur!=null&&this.renderTargetBlur.dispose(),this.depthMaterial.dispose(),this.horizontalBlurMaterial.dispose(),this.verticalBlurMaterial.dispose(),this.floor.material.dispose(),this.floor.geometry.dispose(),this.blurPlane.geometry.dispose(),this.removeFromParent()}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s_=10,dd=100,fd=new L,r_=new L,o_=new L,Ad=new XR,k2=new L,na=new Re;class G2 extends ys{constructor({canvas:e,element:t,width:n,height:s}){super(),this.annotationRenderer=new RD,this.effectRenderer=null,this.schemaElement=document.createElement("script"),this.width=1,this.height=1,this.aspect=1,this.scaleStep=0,this.renderCount=0,this.externalRenderer=null,this.camera=new Vt(45,1,.1,100),this.xrCamera=null,this.url=null,this.target=new ft,this.animationNames=[],this.boundingBox=new pn,this.boundingSphere=new Gn,this.size=new L,this.idealAspect=0,this.framedFoVDeg=0,this.shadow=null,this.shadowIntensity=0,this.shadowSoftness=1,this.bakedShadows=new Set,this.exposure=1,this.toneMapping=uh,this.canScale=!0,this.isDirty=!1,this.goalTarget=new L,this.targetDamperX=new Cn,this.targetDamperY=new Cn,this.targetDamperZ=new Cn,this._currentGLTF=null,this._model=null,this.cancelPendingSourceChange=null,this.animationsByName=new Map,this.currentAnimationAction=null,this.groundedSkybox=new L2,this.name="ModelScene",this.element=t,this.canvas=e,this.camera=new Vt(45,1,.1,100),this.camera.name="MainCamera",this.add(this.target),this.setSize(n,s),this.target.name="Target",this.mixer=new $R(this.target);const{domElement:r}=this.annotationRenderer,{style:o}=r;o.display="none",o.pointerEvents="none",o.position="absolute",o.top="0",this.element.shadowRoot.querySelector(".default").appendChild(r),this.schemaElement.setAttribute("type","application/ld+json")}get context(){return this.canvas.getContext("2d")}getCamera(){return this.xrCamera!=null?this.xrCamera:this.camera}queueRender(){this.isDirty=!0}shouldRender(){return this.isDirty}hasRendered(){this.isDirty=!1}forceRescale(){this.scaleStep=-1,this.queueRender()}async setObject(e){this.reset(),this._model=e,this.target.add(e),await this.setupScene()}async setSource(e,t=()=>{}){if(!e||e===this.url){t(1);return}if(this.reset(),this.url=e,this.externalRenderer!=null){const a=await this.externalRenderer.load(t);this.boundingSphere.radius=a.framedRadius,this.idealAspect=a.fieldOfViewAspect;return}this.cancelPendingSourceChange!=null&&(this.cancelPendingSourceChange(),this.cancelPendingSourceChange=null);let n;try{n=await new Promise(async(a,l)=>{this.cancelPendingSourceChange=()=>l();try{const c=await this.element[rt].loader.load(e,this.element,t);a(c)}catch(c){l(c)}})}catch(a){if(a==null)return;throw a}this.cancelPendingSourceChange=null,this.reset(),this.url=e,this._currentGLTF=n,n!=null&&(this._model=n.scene,this.target.add(n.scene));const{animations:s}=n,r=new Map,o=[];for(const a of s)r.set(a.name,a),o.push(a.name);this.animations=s,this.animationsByName=r,this.animationNames=o,await this.setupScene()}async setupScene(){this.applyTransform(),this.updateBoundingBox(),await this.updateFraming(),this.updateShadow(),this.setShadowIntensity(this.shadowIntensity),this.setGroundedSkybox()}reset(){this.url=null,this.renderCount=0,this.queueRender(),this.shadow!=null&&this.shadow.setIntensity(0),this.bakedShadows.clear();const{_model:e}=this;e!=null&&(e.removeFromParent(),this._model=null);const t=this._currentGLTF;t!=null&&(t.dispose(),this._currentGLTF=null),this.currentAnimationAction!=null&&(this.currentAnimationAction.stop(),this.currentAnimationAction=null),this.mixer.stopAllAction(),this.mixer.uncacheRoot(this)}dispose(){this.reset(),this.shadow!=null&&(this.shadow.dispose(),this.shadow=null),this.element[Rc]=null,this.element[Dc]=null,this.element[$s]=null}get currentGLTF(){return this._currentGLTF}setSize(e,t){if(!(this.width===e&&this.height===t)){if(this.width=Math.max(e,1),this.height=Math.max(t,1),this.annotationRenderer.setSize(e,t),this.aspect=this.width/this.height,this.externalRenderer!=null){const n=gf();this.externalRenderer.resize(e*n,t*n)}this.queueRender()}}markBakedShadow(e){e.userData.noHit=!0,this.bakedShadows.add(e)}unmarkBakedShadow(e){e.userData.noHit=!1,e.visible=!0,this.bakedShadows.delete(e),this.boundingBox.expandByObject(e)}findBakedShadows(e){const t=new pn;e.traverse(n=>{const s=n;if(!s.material||!s.material.transparent)return;t.setFromObject(s);const o=t.getSize(k2),a=Math.min(o.x,o.y,o.z);Math.max(o.x,o.y,o.z)<dd*a||this.markBakedShadow(s)})}checkBakedShadows(){const{min:e,max:t}=this.boundingBox,n=new pn;this.boundingBox.getSize(this.size);for(const s of this.bakedShadows)n.setFromObject(s),!(n.min.y<e.y+this.size.y/dd&&n.min.x<=e.x&&n.max.x>=t.x&&n.min.z<=e.z&&n.max.z>=t.z)&&(n.min.z<e.z+this.size.z/dd&&n.min.x<=e.x&&n.max.x>=t.x&&n.min.y<=e.y&&n.max.y>=t.y||this.unmarkBakedShadow(s))}applyTransform(){const{model:e}=this;if(e==null)return;const t=ki(this.element.orientation)[0].terms,n=Ai(t[0]).number,s=Ai(t[1]).number,r=Ai(t[2]).number;e.quaternion.setFromEuler(new kn(s,r,n,"YXZ"));const o=ki(this.element.scale)[0].terms;e.scale.set(o[0].number,o[1].number,o[2].number)}updateBoundingBox(){const{model:e}=this;if(e==null)return;this.target.remove(e),this.findBakedShadows(e);const t=(n,s)=>n.expandByPoint(s);this.setBakedShadowVisibility(!1),this.boundingBox=Ol(e,t,new pn),this.boundingBox.isEmpty()&&(this.setBakedShadowVisibility(!0),this.bakedShadows.forEach(n=>this.unmarkBakedShadow(n)),this.boundingBox=Ol(e,t,new pn)),this.checkBakedShadows(),this.setBakedShadowVisibility(),this.boundingBox.getSize(this.size),this.target.add(e)}async updateFraming(){const{model:e}=this;if(e==null)return;this.target.remove(e),this.setBakedShadowVisibility(!1);const{center:t}=this.boundingSphere;this.element.requestUpdate("cameraTarget"),await this.element.updateComplete,t.copy(this.getTarget());const n=(r,o)=>Math.max(r,t.distanceToSquared(o));this.boundingSphere.radius=Math.sqrt(Ol(e,n,0));const s=(r,o)=>{o.sub(t);const a=Math.sqrt(o.x*o.x+o.z*o.z);return Math.max(r,a/(this.idealCameraDistance()-Math.abs(o.y)))};this.idealAspect=Ol(e,s,0)/Math.tan(this.framedFoVDeg/2*Math.PI/180),this.setBakedShadowVisibility(),this.target.add(e)}setBakedShadowVisibility(e=this.shadowIntensity<=0){for(const t of this.bakedShadows)t.visible=e}idealCameraDistance(){const e=this.framedFoVDeg/2*Math.PI/180;return this.boundingSphere.radius/Math.sin(e)}adjustedFoV(e){const t=Math.tan(e/2*Math.PI/180)*Math.max(1,this.idealAspect/this.aspect);return 2*Math.atan(t)*180/Math.PI}getNDC(e,t){if(this.xrCamera!=null)na.set(e/window.screen.width,t/window.screen.height);else{const n=this.element.getBoundingClientRect();na.set((e-n.x)/this.width,(t-n.y)/this.height)}return na.multiplyScalar(2).subScalar(1),na.y*=-1,na}getSize(){return{width:this.width,height:this.height}}setEnvironmentAndSkybox(e,t){this.element[rt].arRenderer.presentedScene!==this&&(this.environment=e,this.setBackground(t),this.queueRender())}setBackground(e){this.groundedSkybox.map=e,this.groundedSkybox.isUsable()?(this.target.add(this.groundedSkybox),this.background=null):(this.target.remove(this.groundedSkybox),this.background=e)}farRadius(){return this.boundingSphere.radius*(this.groundedSkybox.parent!=null?s_:1)}setGroundedSkybox(){const e=ki(this.element.skyboxHeight)[0].terms[0],t=Ai(e).number,n=s_*this.boundingSphere.radius;this.groundedSkybox.updateGeometry(t,n),this.groundedSkybox.position.y=t-(this.shadow?2*this.shadow.gap():0),this.setBackground(this.groundedSkybox.map)}setTarget(e,t,n){this.goalTarget.set(-e,-t,-n)}setTargetDamperDecayTime(e){this.targetDamperX.setDecayTime(e),this.targetDamperY.setDecayTime(e),this.targetDamperZ.setDecayTime(e)}getTarget(){return this.goalTarget.clone().multiplyScalar(-1)}jumpToGoal(){this.updateTarget(iy)}updateTarget(e){const t=this.goalTarget,n=this.target.position;if(t.equals(n))return!1;{const s=this.boundingSphere.radius/10;let{x:r,y:o,z:a}=n;return r=this.targetDamperX.update(r,t.x,e,s),o=this.targetDamperY.update(o,t.y,e,s),a=this.targetDamperZ.update(a,t.z,e,s),this.groundedSkybox.position.x=-r,this.groundedSkybox.position.z=-a,this.target.position.set(r,o,a),this.target.updateMatrixWorld(),this.queueRender(),!0}}pointTowards(e,t){const{x:n,z:s}=this.position;this.yaw=Math.atan2(e-n,t-s)}get model(){return this._model}set yaw(e){this.rotation.y=e,this.groundedSkybox.rotation.y=-e,this.queueRender()}get yaw(){return this.rotation.y}set animationTime(e){this.mixer.setTime(e),this.queueShadowRender()}get animationTime(){if(this.currentAnimationAction!=null){const e=Math.max(this.currentAnimationAction._loopCount,0);return this.currentAnimationAction.loop===sA&&(e&1)===1?this.duration-this.currentAnimationAction.time:this.currentAnimationAction.time}return 0}set animationTimeScale(e){this.mixer.timeScale=e}get animationTimeScale(){return this.mixer.timeScale}get duration(){return this.currentAnimationAction!=null&&this.currentAnimationAction.getClip()?this.currentAnimationAction.getClip().duration:0}get hasActiveAnimation(){return this.currentAnimationAction!=null}playAnimation(e=null,t=0,n=iA,s=1/0){if(this._currentGLTF==null)return;const{animations:r}=this;if(r==null||r.length===0)return;let o=null;if(e!=null&&(o=this.animationsByName.get(e),o==null)){const a=parseInt(e);!isNaN(a)&&a>=0&&a<r.length&&(o=r[a])}o==null&&(o=r[0]);try{const{currentAnimationAction:a}=this,l=this.mixer.clipAction(o,this);this.currentAnimationAction=l,this.element.paused?this.mixer.stopAllAction():(l.paused=!1,a!=null&&l!==a?l.crossFadeFrom(a,t,!1):this.animationTimeScale>0&&this.animationTime==this.duration&&(this.animationTime=0)),l.setLoop(n,s),l.enabled=!0,l.clampWhenFinished=!0,l.play()}catch(a){console.error(a)}}stopAnimation(){this.currentAnimationAction=null,this.mixer.stopAllAction()}updateAnimation(e){this.mixer.update(e),this.queueShadowRender()}subscribeMixerEvent(e,t){this.mixer.addEventListener(e,t)}updateShadow(){const e=this.shadow;if(e!=null){const t=this.element.arPlacement==="wall"?"back":"bottom";e.setScene(this,this.shadowSoftness,t),e.needsUpdate=!0}}renderShadow(e){const t=this.shadow;t!=null&&t.needsUpdate==!0&&(t.render(e,this),t.needsUpdate=!1)}queueShadowRender(){this.shadow!=null&&(this.shadow.needsUpdate=!0)}setShadowIntensity(e){if(this.shadowIntensity=e,this._currentGLTF!=null&&(this.setBakedShadowVisibility(),!(e<=0&&this.shadow==null))){if(this.shadow==null){const t=this.element.arPlacement==="wall"?"back":"bottom";this.shadow=new Q2(this,this.shadowSoftness,t)}this.shadow.setIntensity(e)}}setShadowSoftness(e){this.shadowSoftness=e;const t=this.shadow;t!=null&&t.setSoftness(e)}setShadowOffset(e){const t=this.shadow;t!=null&&t.setOffset(e)}hitFromPoint(e,t=this){return Ad.setFromCamera(e,this.getCamera()),Ad.intersectObject(t,!0).find(s=>s.object.visible&&!s.object.userData.noHit)}positionAndNormalFromPoint(e,t=this){var n;const s=this.hitFromPoint(e,t);if(s==null)return null;const r=s.point,o=s.face!=null?s.face.normal.clone().applyNormalMatrix(new Ue().getNormalMatrix(s.object.matrixWorld)):Ad.ray.direction.clone().multiplyScalar(-1),a=(n=s.uv)!==null&&n!==void 0?n:null;return{position:r,normal:o,uv:a}}surfaceFromPoint(e,t=this){const n=this.element.model;if(n==null)return null;const s=this.hitFromPoint(e,t);if(s==null||s.face==null)return null;const r=n[If](s),{meshes:o,primitives:a}=r.mesh.userData.associations,l=new L,c=new L,h=new L,{a:u,b:d,c:f}=s.face,m=s.object;m.getVertexPosition(u,l),m.getVertexPosition(d,c),m.getVertexPosition(f,h);const g=new Un(l,c,h),A=new L;return g.getBarycoord(m.worldToLocal(s.point),A),`${o} ${a} ${u} ${d} ${f} ${A.x.toFixed(3)} ${A.y.toFixed(3)} ${A.z.toFixed(3)}`}addHotspot(e){this.target.add(e),this.annotationRenderer.domElement.appendChild(e.element)}removeHotspot(e){this.target.remove(e)}forHotspots(e){const{children:t}=this.target;for(let n=0,s=t.length;n<s;n++){const r=t[n];r instanceof Uy&&e(r)}}initializeSurface(e){if(e.surface!=null&&e.mesh==null){const t=ki(e.surface)[0].terms;if(t.length!=8){console.warn(e.surface+" does not have exactly 8 numbers.");return}const n=this.element.model[Fy](t[0].number,t[1].number),s=new L(t[2].number,t[3].number,t[4].number);if(n==null){console.warn(e.surface+" does not match a node/primitive in this glTF! Skipping this hotspot.");return}const r=n.mesh.geometry.attributes.position.count;if(s.x>=r||s.y>=r||s.z>=r){console.warn(e.surface+" vertex indices out of range in this glTF! Skipping this hotspot.");return}const o=new L(t[5].number,t[6].number,t[7].number);e.mesh=n.mesh,e.tri=s,e.bary=o}}updateSurfaceHotspots(){const e=!this.element.paused;this.forHotspots(t=>{this.initializeSurface(t),t.updateSurface(e)})}updateHotspotsVisibility(e){this.forHotspots(t=>{fd.copy(e),r_.setFromMatrixPosition(t.matrixWorld),fd.sub(r_),o_.copy(t.normal).transformDirection(this.target.matrixWorld),fd.dot(o_)<0?t.hide():t.show()})}orientHotspots(e){this.forHotspots(t=>{t.orient(e)})}setHotspotsVisibility(e){this.forHotspots(t=>{t.visible=e})}updateSchema(e){var t;const{schemaElement:n,element:s}=this,{alt:r,poster:o,iosSrc:a}=s;if(e!=null){const l=[{"@type":"MediaObject",contentUrl:e,encodingFormat:((t=e.split(".").pop())===null||t===void 0?void 0:t.toLowerCase())==="gltf"?"model/gltf+json":"model/gltf-binary"}];a&&l.push({"@type":"MediaObject",contentUrl:a,encodingFormat:"model/vnd.usdz+zip"});const c={"@context":"http://schema.org/","@type":"3DModel",image:o??void 0,name:r??void 0,encoding:l};n.textContent=JSON.stringify(c),document.head.appendChild(n)}else n.parentElement!=null&&n.parentElement.removeChild(n)}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H2 extends EventTarget{constructor(){super(...arguments),this.ongoingActivities=new Set,this.totalProgress=0}get ongoingActivityCount(){return this.ongoingActivities.size}beginActivity(e){const t={progress:0,completed:!1};return this.ongoingActivities.add(t),this.ongoingActivityCount===1&&this.announceTotalProgress(t,0,e),n=>{let s;return s=Math.max(ui(n,0,1),t.progress),s!==t.progress&&this.announceTotalProgress(t,s,e),t.progress}}announceTotalProgress(e,t,n){let s=0,r=0;t==1&&(e.completed=!0);for(const l of this.ongoingActivities){const{progress:c}=l;s+=1-c,l.completed&&r++}const o=e.progress;e.progress=t,this.totalProgress+=(t-o)*(1-this.totalProgress)/s;const a=r===this.ongoingActivityCount?1:this.totalProgress;this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:a,reason:n}})),r===this.ongoingActivityCount&&(this.totalProgress=0,this.ongoingActivities.clear())}}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Eh=function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r},a_,l_,c_,h_,u_,d_,f_,A_,p_,m_,g_,__,E_;const V2=10,z2=50,W2=0,q2=300,$2=150,ps=document.createElement("canvas"),pd=Symbol("fallbackResizeHandler"),v_=Symbol("defaultAriaLabel"),nc=Symbol("resizeObserver"),Vr=Symbol("clearModelTimeout"),md=Symbol("onContextLost"),zr=Symbol("loaded"),gd=Symbol("status"),_d=Symbol("onFocus"),Ed=Symbol("onBlur"),Kr=Symbol("updateSize"),ic=Symbol("intersectionObserver"),Xs=Symbol("isElementInViewport"),Jc=Symbol("announceModelVisibility"),ro=Symbol("ariaLabel"),Mf=Symbol("altDefaulted"),ia=Symbol("statusElement"),Zc=Symbol("updateStatus"),ga=Symbol("loadedTime"),Ao=Symbol("updateSource"),y_=Symbol("markLoaded"),Lc=Symbol("container"),Xn=Symbol("input"),wf=Symbol("canvas"),he=Symbol("scene"),on=Symbol("needsRender"),mi=Symbol("tick"),Ss=Symbol("onModelLoad"),Ha=Symbol("onResize"),rt=Symbol("renderer"),ur=Symbol("progressTracker"),x_=Symbol("getLoaded"),dr=Symbol("getModelIsVisible"),wo=Symbol("shouldAttemptPreload"),us=i=>({x:i.x,y:i.y,z:i.z,toString(){return`${this.x}m ${this.y}m ${this.z}m`}}),bf=i=>({u:i.x,v:i.y,toString(){return`${this.u} ${this.v}`}});class Za extends Js{constructor(){super(),this.alt=null,this.src=null,this.withCredentials=!1,this.generateSchema=!1,this[a_]=!1,this[l_]=!1,this[c_]=0,this[h_]="",this[u_]=null,this[d_]=ag(()=>{const s=this.getBoundingClientRect();this[Kr](s)},z2),this[f_]=ag(s=>{const r=this.modelIsVisible;r!==s&&this.dispatchEvent(new CustomEvent("model-visibility",{detail:{visible:r}}))},W2),this[A_]=null,this[p_]=null,this[m_]=new H2,this[g_]=()=>{this[ia].textContent=this[gd]},this[__]=()=>{this[ia].textContent=""},this[E_]=s=>{this.dispatchEvent(new CustomEvent("error",{detail:{type:"webglcontextlost",sourceError:s.sourceEvent}}))},this.attachShadow({mode:"open"});const e=this.shadowRoot;T1(e),this[Lc]=e.querySelector(".container"),this[Xn]=e.querySelector(".userInput"),this[wf]=e.querySelector("canvas"),this[ia]=e.querySelector("#status"),this[v_]=this[Xn].getAttribute("aria-label");let t,n;if(this.isConnected){const s=this.getBoundingClientRect();t=s.width,n=s.height}else t=q2,n=$2;this[he]=new G2({canvas:this[wf],element:this,width:t,height:n}),Promise.resolve().then(()=>{this[Kr](this.getBoundingClientRect())}),Eu&&(this[nc]=new ResizeObserver(s=>{if(!this[rt].isPresenting)for(let r of s)r.target===this&&this[Kr](r.contentRect)})),vu?this[ic]=new IntersectionObserver(s=>{for(let r of s)if(r.target===this){const o=this.modelIsVisible;this[Xs]=r.isIntersecting,this[Jc](o),this[Xs]&&!this.loaded&&this[Ao]()}},{root:null,rootMargin:"0px",threshold:1e-5}):this[Xs]=!0}static get is(){return"model-viewer"}static set modelCacheSize(e){Gt[ls].evictionThreshold=e}static get modelCacheSize(){return Gt[ls].evictionThreshold}static set minimumRenderScale(e){e>1&&console.warn("<model-viewer> minimumRenderScale has been clamped to a maximum value of 1."),e<=0&&console.warn("<model-viewer> minimumRenderScale has been clamped to a minimum value of 0.25."),Kn.singleton.minScale=e}static get minimumRenderScale(){return Kn.singleton.minScale}get loaded(){return this[x_]()}get[(a_=Xs,l_=zr,c_=ga,h_=gd,u_=Vr,d_=pd,f_=Jc,A_=nc,p_=ic,m_=ur,rt)](){return Kn.singleton}get modelIsVisible(){return this[dr]()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),Eu?this[nc].observe(this):self.addEventListener("resize",this[pd]),vu&&this[ic].observe(this),this.addEventListener("focus",this[_d]),this.addEventListener("blur",this[Ed]);const e=this[rt];e.addEventListener("contextlost",this[md]),e.registerScene(this[he]),this[Vr]!=null&&(self.clearTimeout(this[Vr]),this[Vr]=null,this.requestUpdate("src",null))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),Eu?this[nc].unobserve(this):self.removeEventListener("resize",this[pd]),vu&&this[ic].unobserve(this),this.removeEventListener("focus",this[_d]),this.removeEventListener("blur",this[Ed]);const e=this[rt];e.removeEventListener("contextlost",this[md]),e.unregisterScene(this[he]),this[Vr]=self.setTimeout(()=>{this[he].dispose(),this[Vr]=null},V2)}updated(e){super.updated(e),e.has("src")&&(this.src==null?(this[zr]=!1,this[ga]=0,this[he].reset()):this.src!==this[he].url&&(this[zr]=!1,this[ga]=0,this[Ao]())),e.has("alt")&&this[Xn].setAttribute("aria-label",this[ro]),e.has("withCredentials")&&(Gt.withCredentials=this.withCredentials,this[rt].textureUtils.withCredentials=this.withCredentials),e.has("generateSchema")&&(this.generateSchema?this[he].updateSchema(this.src):this[he].updateSchema(null))}toDataURL(e,t){return this[rt].displayCanvas(this[he]).toDataURL(e,t)}async toBlob(e){const t=e?e.mimeType:void 0,n=e?e.qualityArgument:void 0,s=e?e.idealAspect:void 0,{width:r,height:o,idealAspect:a,aspect:l}=this[he],{dpr:c,scaleFactor:h}=this[rt];let u=r*h*c,d=o*h*c,f=0,m=0;if(s===!0)if(a>l){const g=d;d=Math.round(u/a),m=(g-d)/2}else{const g=u;u=Math.round(d*a),f=(g-u)/2}ps.width=u,ps.height=d;try{return new Promise(async(g,A)=>{ps.getContext("2d").drawImage(this[rt].displayCanvas(this[he]),f,m,u,d,0,0,u,d),ps.toBlob(p=>{if(!p)return A(new Error("Unable to retrieve canvas blob"));g(p)},t,n)})}finally{this[Kr]({width:r,height:o})}}registerEffectComposer(e){e.setRenderer(this[rt].threeRenderer),e.setMainCamera(this[he].getCamera()),e.setMainScene(this[he]),this[he].effectRenderer=e}unregisterEffectComposer(){this[he].effectRenderer=null}registerRenderer(e){this[he].externalRenderer=e}unregisterRenderer(){this[he].externalRenderer=null}get[ro](){return this[Mf]}get[Mf](){return this.alt==null||this.alt==="null"?this[v_]:this.alt}[x_](){return this[zr]}[dr](){return this.loaded&&this[Xs]}[wo](){return!!this.src&&this[Xs]}[Kr]({width:e,height:t}){e===0||t===0||(this[Lc].style.width=`${e}px`,this[Lc].style.height=`${t}px`,this[Ha]({width:e,height:t}))}[mi](e,t){var n;(n=this[he].effectRenderer)===null||n===void 0||n.beforeRender(e,t)}[y_](){this[zr]||(this[zr]=!0,this[ga]=performance.now())}[on](){this[he].queueRender()}[Ss](){}[Zc](e){this[gd]=e;const t=this.getRootNode();t!=null&&t.activeElement===this&&this[ia].textContent!=e&&(this[ia].textContent=e)}[(g_=_d,__=Ed,Ha)](e){this[he].setSize(e.width,e.height)}async[(E_=md,Ao)](){const e=this[he];if(this.loaded||!this[wo]()||this.src===e.url)return;this.generateSchema&&e.updateSchema(this.src),this[Zc]("Loading"),e.stopAnimation();const t=this[ur].beginActivity("model-load"),n=this.src;try{const s=e.setSource(n,o=>t(ui(o,0,1)*.95)),r=this[Yc]();await Promise.all([s,r]),this[y_](),this[Ss](),this.updateComplete.then(()=>{this.dispatchEvent(new CustomEvent("before-render"))}),await new Promise(o=>{requestAnimationFrame(()=>{requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("load",{detail:{url:n}})),o()})})})}catch(s){this.dispatchEvent(new CustomEvent("error",{detail:{type:"loadfailure",sourceError:s}}))}finally{t(1)}}}Eh([we({type:String})],Za.prototype,"alt",void 0);Eh([we({type:String})],Za.prototype,"src",void 0);Eh([we({type:Boolean,attribute:"with-credentials"})],Za.prototype,"withCredentials",void 0);Eh([we({type:Boolean,attribute:"generate-schema"})],Za.prototype,"generateSchema",void 0);/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var vd=function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const S_=1e3,sc=Symbol("changeAnimation"),Di=Symbol("paused"),X2={repetitions:1/0,pingpong:!1},Y2=i=>{var e;class t extends i{constructor(...s){super(s),this.autoplay=!1,this.animationName=void 0,this.animationCrossfadeDuration=300,this[e]=!0,this[he].subscribeMixerEvent("loop",r=>{const o=r.action._loopCount;this.dispatchEvent(new CustomEvent("loop",{detail:{count:o}}))}),this[he].subscribeMixerEvent("finished",()=>{this[Di]=!0,this.dispatchEvent(new CustomEvent("finished"))})}get availableAnimations(){return this.loaded?this[he].animationNames:[]}get duration(){return this[he].duration}get paused(){return this[Di]}get currentTime(){return this[he].animationTime}set currentTime(s){this[he].animationTime=s,this[on]()}get timeScale(){return this[he].animationTimeScale}set timeScale(s){this[he].animationTimeScale=s}pause(){this[Di]||(this[Di]=!0,this.dispatchEvent(new CustomEvent("pause")))}play(s){this.availableAnimations.length>0&&(this[Di]=!1,this[sc](s),this.dispatchEvent(new CustomEvent("play")))}[(e=Di,Ss)](){super[Ss](),this[Di]=!0,this.animationName!=null&&this[sc](),this.autoplay&&this.play()}[mi](s,r){super[mi](s,r),!(this[Di]||!this[dr]()&&!this[rt].isPresenting)&&(this[he].updateAnimation(r/S_),this[on]())}updated(s){super.updated(s),s.has("autoplay")&&this.autoplay&&this.play(),s.has("animationName")&&this[sc]()}[sc](s=X2){var r;const o=(r=s.repetitions)!==null&&r!==void 0?r:1/0,a=s.pingpong?sA:o===1?XE:iA;this[he].playAnimation(this.animationName,this.animationCrossfadeDuration/S_,a,o),this[Di]&&(this[he].updateAnimation(0),this[on]())}}return vd([we({type:Boolean})],t.prototype,"autoplay",void 0),vd([we({type:String,attribute:"animation-name"})],t.prototype,"animationName",void 0),vd([we({type:Number,attribute:"animation-crossfade-duration"})],t.prototype,"animationCrossfadeDuration",void 0),t};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gs=Symbol("hotspotMap"),yd=Symbol("mutationCallback"),sa=Symbol("observer"),xd=Symbol("addHotspot"),I_=Symbol("removeHotspot"),Sd=new Le,K2=i=>{var e,t,n;class s extends i{constructor(){super(...arguments),this[e]=new Map,this[t]=o=>{o.forEach(a=>{(!(a instanceof MutationRecord)||a.type==="childList")&&(a.addedNodes.forEach(l=>{this[xd](l)}),a.removedNodes.forEach(l=>{this[I_](l)}),this[on]())})},this[n]=new MutationObserver(this[yd])}connectedCallback(){super.connectedCallback();for(let a=0;a<this.children.length;++a)this[xd](this.children[a]);const{ShadyDOM:o}=self;o==null?this[sa].observe(this,{childList:!0}):this[sa]=o.observeChildren(this,this[yd])}disconnectedCallback(){super.disconnectedCallback();const{ShadyDOM:o}=self;o==null?this[sa].disconnect():o.unobserveChildren(this[sa])}[(e=Gs,t=yd,n=sa,mi)](o,a){super[mi](o,a);const l=this[he],{annotationRenderer:c}=l,h=l.getCamera();l.shouldRender()&&(l.updateSurfaceHotspots(),l.updateHotspotsVisibility(h.position),c.domElement.style.display="",c.render(l,h))}updateHotspot(o){const a=this[Gs].get(o.name);a!=null&&(a.updatePosition(o.position),a.updateNormal(o.normal),a.surface=o.surface,this[on]())}queryHotspot(o){const a=this[Gs].get(o);if(a==null)return null;const l=us(a.position),c=us(a.normal),h=a.facingCamera,u=this[he],d=u.getCamera(),f=new L;f.setFromMatrixPosition(a.matrixWorld),f.project(d);const m=u.width/2,g=u.height/2;f.x=f.x*m+m,f.y=-(f.y*g)+g;const A=us(new L(f.x,f.y,f.z));return!Number.isFinite(A.x)||!Number.isFinite(A.y)?null:{position:l,normal:c,canvasPosition:A,facingCamera:h}}positionAndNormalFromPoint(o,a){const l=this[he],c=l.getNDC(o,a),h=l.positionAndNormalFromPoint(c);if(h==null)return null;Sd.copy(l.target.matrixWorld).invert();const u=us(h.position.applyMatrix4(Sd)),d=us(h.normal.transformDirection(Sd));let f=null;return h.uv!=null&&(f=bf(h.uv)),{position:u,normal:d,uv:f}}surfaceFromPoint(o,a){const l=this[he],c=l.getNDC(o,a);return l.surfaceFromPoint(c)}[xd](o){if(!(o instanceof HTMLElement&&o.slot.indexOf("hotspot")===0))return;let a=this[Gs].get(o.slot);a!=null?a.increment():(a=new Uy({name:o.slot,position:o.dataset.position,normal:o.dataset.normal,surface:o.dataset.surface}),this[Gs].set(o.slot,a),this[he].addHotspot(a)),this[he].queueRender()}[I_](o){if(!(o instanceof HTMLElement))return;const a=this[Gs].get(o.slot);a&&(a.decrement()&&(this[he].removeHotspot(a),this[Gs].delete(o.slot)),this[he].queueRender())}}return s};/*!
fflate - fast JavaScript compression/decompression
<https://101arrowz.github.io/fflate>
Licensed under MIT. https://github.com/101arrowz/fflate/blob/master/LICENSE
version 0.8.2
*/var ln=Uint8Array,wn=Uint16Array,IA=Int32Array,CA=new ln([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),MA=new ln([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),C_=new ln([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Ny=function(i,e){for(var t=new wn(31),n=0;n<31;++n)t[n]=e+=1<<i[n-1];for(var s=new IA(t[30]),n=1;n<30;++n)for(var r=t[n];r<t[n+1];++r)s[r]=r-t[n]<<5|n;return{b:t,r:s}},Oy=Ny(CA,2),j2=Oy.b,Tf=Oy.r;j2[28]=258,Tf[258]=28;var J2=Ny(MA,0),M_=J2.r,Bf=new wn(32768);for(var gt=0;gt<32768;++gt){var ns=(gt&43690)>>1|(gt&21845)<<1;ns=(ns&52428)>>2|(ns&13107)<<2,ns=(ns&61680)>>4|(ns&3855)<<4,Bf[gt]=((ns&65280)>>8|(ns&255)<<8)>>1}var ba=function(i,e,t){for(var n=i.length,s=0,r=new wn(e);s<n;++s)i[s]&&++r[i[s]-1];var o=new wn(e);for(s=1;s<e;++s)o[s]=o[s-1]+r[s-1]<<1;var a;if(t){a=new wn(1<<e);var l=15-e;for(s=0;s<n;++s)if(i[s])for(var c=s<<4|i[s],h=e-i[s],u=o[i[s]-1]++<<h,d=u|(1<<h)-1;u<=d;++u)a[Bf[u]>>l]=c}else for(a=new wn(n),s=0;s<n;++s)i[s]&&(a[s]=Bf[o[i[s]-1]++]>>15-i[s]);return a},fr=new ln(288);for(var gt=0;gt<144;++gt)fr[gt]=8;for(var gt=144;gt<256;++gt)fr[gt]=9;for(var gt=256;gt<280;++gt)fr[gt]=7;for(var gt=280;gt<288;++gt)fr[gt]=8;var eh=new ln(32);for(var gt=0;gt<32;++gt)eh[gt]=5;var Z2=ba(fr,9,0),eP=ba(eh,5,0),Qy=function(i){return(i+7)/8|0},ky=function(i,e,t){return(t==null||t>i.length)&&(t=i.length),new ln(i.subarray(e,t))},tP=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],vh=function(i,e,t){var n=new Error(e||tP[i]);if(n.code=i,Error.captureStackTrace&&Error.captureStackTrace(n,vh),!t)throw n;return n},Li=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8},ra=function(i,e,t){t<<=e&7;var n=e/8|0;i[n]|=t,i[n+1]|=t>>8,i[n+2]|=t>>16},Id=function(i,e){for(var t=[],n=0;n<i.length;++n)i[n]&&t.push({s:n,f:i[n]});var s=t.length,r=t.slice();if(!s)return{t:Hy,l:0};if(s==1){var o=new ln(t[0].s+1);return o[t[0].s]=1,{t:o,l:1}}t.sort(function(M,I){return M.f-I.f}),t.push({s:-1,f:25001});var a=t[0],l=t[1],c=0,h=1,u=2;for(t[0]={s:-1,f:a.f+l.f,l:a,r:l};h!=s-1;)a=t[t[c].f<t[u].f?c++:u++],l=t[c!=h&&t[c].f<t[u].f?c++:u++],t[h++]={s:-1,f:a.f+l.f,l:a,r:l};for(var d=r[0].s,n=1;n<s;++n)r[n].s>d&&(d=r[n].s);var f=new wn(d+1),m=Rf(t[h-1],f,0);if(m>e){var n=0,g=0,A=m-e,p=1<<A;for(r.sort(function(I,w){return f[w.s]-f[I.s]||I.f-w.f});n<s;++n){var x=r[n].s;if(f[x]>e)g+=p-(1<<m-f[x]),f[x]=e;else break}for(g>>=A;g>0;){var _=r[n].s;f[_]<e?g-=1<<e-f[_]++-1:++n}for(;n>=0&&g;--n){var C=r[n].s;f[C]==e&&(--f[C],++g)}m=e}return{t:new ln(f),l:m}},Rf=function(i,e,t){return i.s==-1?Math.max(Rf(i.l,e,t+1),Rf(i.r,e,t+1)):e[i.s]=t},w_=function(i){for(var e=i.length;e&&!i[--e];);for(var t=new wn(++e),n=0,s=i[0],r=1,o=function(l){t[n++]=l},a=1;a<=e;++a)if(i[a]==s&&a!=e)++r;else{if(!s&&r>2){for(;r>138;r-=138)o(32754);r>2&&(o(r>10?r-11<<5|28690:r-3<<5|12305),r=0)}else if(r>3){for(o(s),--r;r>6;r-=6)o(8304);r>2&&(o(r-3<<5|8208),r=0)}for(;r--;)o(s);r=1,s=i[a]}return{c:t.subarray(0,n),n:e}},oa=function(i,e){for(var t=0,n=0;n<e.length;++n)t+=i[n]*e[n];return t},Gy=function(i,e,t){var n=t.length,s=Qy(e+2);i[s]=n&255,i[s+1]=n>>8,i[s+2]=i[s]^255,i[s+3]=i[s+1]^255;for(var r=0;r<n;++r)i[s+r+4]=t[r];return(s+4+n)*8},b_=function(i,e,t,n,s,r,o,a,l,c,h){Li(e,h++,t),++s[256];for(var u=Id(s,15),d=u.t,f=u.l,m=Id(r,15),g=m.t,A=m.l,p=w_(d),x=p.c,_=p.n,C=w_(g),M=C.c,I=C.n,w=new wn(19),B=0;B<x.length;++B)++w[x[B]&31];for(var B=0;B<M.length;++B)++w[M[B]&31];for(var y=Id(w,7),v=y.t,U=y.l,V=19;V>4&&!v[C_[V-1]];--V);var D=c+5<<3,G=oa(s,fr)+oa(r,eh)+o,H=oa(s,d)+oa(r,g)+o+14+3*V+oa(w,v)+2*w[16]+3*w[17]+7*w[18];if(l>=0&&D<=G&&D<=H)return Gy(e,h,i.subarray(l,l+c));var X,q,Q,te;if(Li(e,h,1+(H<G)),h+=2,H<G){X=ba(d,f,0),q=d,Q=ba(g,A,0),te=g;var ne=ba(v,U,0);Li(e,h,_-257),Li(e,h+5,I-1),Li(e,h+10,V-4),h+=14;for(var B=0;B<V;++B)Li(e,h+3*B,v[C_[B]]);h+=3*V;for(var ae=[x,M],ge=0;ge<2;++ge)for(var Me=ae[ge],B=0;B<Me.length;++B){var Z=Me[B]&31;Li(e,h,ne[Z]),h+=v[Z],Z>15&&(Li(e,h,Me[B]>>5&127),h+=Me[B]>>12)}}else X=Z2,q=fr,Q=eP,te=eh;for(var B=0;B<a;++B){var oe=n[B];if(oe>255){var Z=oe>>18&31;ra(e,h,X[Z+257]),h+=q[Z+257],Z>7&&(Li(e,h,oe>>23&31),h+=CA[Z]);var de=oe&31;ra(e,h,Q[de]),h+=te[de],de>3&&(ra(e,h,oe>>5&8191),h+=MA[de])}else ra(e,h,X[oe]),h+=q[oe]}return ra(e,h,X[256]),h+q[256]},nP=new IA([65540,131080,131088,131104,262176,1048704,1048832,2114560,2117632]),Hy=new ln(0),iP=function(i,e,t,n,s,r){var o=r.z||i.length,a=new ln(n+o+5*(1+Math.ceil(o/7e3))+s),l=a.subarray(n,a.length-s),c=r.l,h=(r.r||0)&7;if(e){h&&(l[0]=r.r>>3);for(var u=nP[e-1],d=u>>13,f=u&8191,m=(1<<t)-1,g=r.p||new wn(32768),A=r.h||new wn(m+1),p=Math.ceil(t/3),x=2*p,_=function(P){return(i[P]^i[P+1]<<p^i[P+2]<<x)&m},C=new IA(25e3),M=new wn(288),I=new wn(32),w=0,B=0,y=r.i||0,v=0,U=r.w||0,V=0;y+2<o;++y){var D=_(y),G=y&32767,H=A[D];if(g[G]=H,A[D]=G,U<=y){var X=o-y;if((w>7e3||v>24576)&&(X>423||!c)){h=b_(i,l,0,C,M,I,B,v,V,y-V,h),v=w=B=0,V=y;for(var q=0;q<286;++q)M[q]=0;for(var q=0;q<30;++q)I[q]=0}var Q=2,te=0,ne=f,ae=G-H&32767;if(X>2&&D==_(y-ae))for(var ge=Math.min(d,X)-1,Me=Math.min(32767,y),Z=Math.min(258,X);ae<=Me&&--ne&&G!=H;){if(i[y+Q]==i[y+Q-ae]){for(var oe=0;oe<Z&&i[y+oe]==i[y+oe-ae];++oe);if(oe>Q){if(Q=oe,te=ae,oe>ge)break;for(var de=Math.min(ae,oe-2),fe=0,q=0;q<de;++q){var be=y-ae+q&32767,Fe=g[be],Ne=be-Fe&32767;Ne>fe&&(fe=Ne,H=be)}}}G=H,H=g[G],ae+=G-H&32767}if(te){C[v++]=268435456|Tf[Q]<<18|M_[te];var $=Tf[Q]&31,Oe=M_[te]&31;B+=CA[$]+MA[Oe],++M[257+$],++I[Oe],U=y+Q,++w}else C[v++]=i[y],++M[i[y]]}}for(y=Math.max(y,U);y<o;++y)C[v++]=i[y],++M[i[y]];h=b_(i,l,c,C,M,I,B,v,V,y-V,h),c||(r.r=h&7|l[h/8|0]<<3,h-=7,r.h=A,r.p=g,r.i=y,r.w=U)}else{for(var y=r.w||0;y<o+c;y+=65535){var T=y+65535;T>=o&&(l[h/8|0]=c,T=o),h=Gy(l,h+1,i.subarray(y,T))}r.i=o}return ky(a,0,n+Qy(h)+s)},sP=function(){for(var i=new Int32Array(256),e=0;e<256;++e){for(var t=e,n=9;--n;)t=(t&1&&-306674912)^t>>>1;i[e]=t}return i}(),rP=function(){var i=-1;return{p:function(e){for(var t=i,n=0;n<e.length;++n)t=sP[t&255^e[n]]^t>>>8;i=t},d:function(){return~i}}},oP=function(i,e,t,n,s){if(!s&&(s={l:1},e.dictionary)){var r=e.dictionary.subarray(-32768),o=new ln(r.length+i.length);o.set(r),o.set(i,r.length),i=o,s.w=r.length}return iP(i,e.level==null?6:e.level,e.mem==null?s.l?Math.ceil(Math.max(8,Math.min(13,Math.log(i.length)))*1.5):20:12+e.mem,t,n,s)},Vy=function(i,e){var t={};for(var n in i)t[n]=i[n];for(var n in e)t[n]=e[n];return t},$t=function(i,e,t){for(;t;++e)i[e]=t,t>>>=8};function aP(i,e){return oP(i,e||{},0,0)}var zy=function(i,e,t,n){for(var s in i){var r=i[s],o=e+s,a=n;Array.isArray(r)&&(a=Vy(n,r[1]),r=r[0]),r instanceof ln?t[o]=[r,a]:(t[o+="/"]=[new ln(0),a],zy(r,o,t,n))}},T_=typeof TextEncoder<"u"&&new TextEncoder,lP=typeof TextDecoder<"u"&&new TextDecoder,cP=0;try{lP.decode(Hy,{stream:!0}),cP=1}catch{}function th(i,e){var t;if(T_)return T_.encode(i);for(var n=i.length,s=new ln(i.length+(i.length>>1)),r=0,o=function(c){s[r++]=c},t=0;t<n;++t){if(r+5>s.length){var a=new ln(r+8+(n-t<<1));a.set(s),s=a}var l=i.charCodeAt(t);l<128||e?o(l):l<2048?(o(192|l>>6),o(128|l&63)):l>55295&&l<57344?(l=65536+(l&1047552)|i.charCodeAt(++t)&1023,o(240|l>>18),o(128|l>>12&63),o(128|l>>6&63),o(128|l&63)):(o(224|l>>12),o(128|l>>6&63),o(128|l&63))}return ky(s,0,r)}var Df=function(i){var e=0;if(i)for(var t in i){var n=i[t].length;n>65535&&vh(9),e+=n+4}return e},B_=function(i,e,t,n,s,r,o,a){var l=n.length,c=t.extra,h=a&&a.length,u=Df(c);$t(i,e,o!=null?33639248:67324752),e+=4,o!=null&&(i[e++]=20,i[e++]=t.os),i[e]=20,e+=2,i[e++]=t.flag<<1|(r<0&&8),i[e++]=s&&8,i[e++]=t.compression&255,i[e++]=t.compression>>8;var d=new Date(t.mtime==null?Date.now():t.mtime),f=d.getFullYear()-1980;if((f<0||f>119)&&vh(10),$t(i,e,f<<25|d.getMonth()+1<<21|d.getDate()<<16|d.getHours()<<11|d.getMinutes()<<5|d.getSeconds()>>1),e+=4,r!=-1&&($t(i,e,t.crc),$t(i,e+4,r<0?-r-2:r),$t(i,e+8,t.size)),$t(i,e+12,l),$t(i,e+14,u),e+=16,o!=null&&($t(i,e,h),$t(i,e+6,t.attrs),$t(i,e+10,o),e+=14),i.set(n,e),e+=l,u)for(var m in c){var g=c[m],A=g.length;$t(i,e,+m),$t(i,e+2,A),i.set(g,e+4),e+=4+A}return h&&(i.set(a,e),e+=h),e},hP=function(i,e,t,n,s){$t(i,e,101010256),$t(i,e+8,t),$t(i,e+10,t),$t(i,e+12,n),$t(i,e+16,s)};function uP(i,e){e||(e={});var t={},n=[];zy(i,"",t,e);var s=0,r=0;for(var o in t){var a=t[o],l=a[0],c=a[1],h=c.level==0?0:8,u=th(o),d=u.length,f=c.comment,m=f&&th(f),g=m&&m.length,A=Df(c.extra);d>65535&&vh(11);var p=h?aP(l,c):l,x=p.length,_=rP();_.p(l),n.push(Vy(c,{size:l.length,crc:_.d(),c:p,f:u,m,u:d!=o.length||m&&f.length!=g,o:s,compression:h})),s+=30+d+A+x,r+=76+2*(d+A)+(g||0)+x}for(var C=new ln(r+22),M=s,I=r-s,w=0;w<n.length;++w){var u=n[w];B_(C,u.o,u,u.f,u.u,u.c.length);var B=30+u.f.length+Df(u.extra);C.set(u.c,u.o+B),B_(C,s,u,u.f,u.u,u.c.length,u.o,u.m),s+=16+B+(u.m?u.m.length:0)}return hP(C,s,n.length,I,M),C}class dP{async parse(e,t={}){t=Object.assign({ar:{anchoring:{type:"plane"},planeAnchoring:{alignment:"horizontal"}},quickLookCompatible:!1,maxTextureSize:1024},t);const n={},s="model.usda";n[s]=null;let r=Wy();r+=AP(t);const o={},a={};e.traverseVisible(c=>{if(c.isMesh){const h=c.geometry,u=c.material;if(u.isMeshStandardMaterial){const d="geometries/Geometry_"+h.id+".usda";if(!(d in n)){const f=_P(h);n[d]=mP(f)}u.uuid in o||(o[u.uuid]=u),r+=gP(c,h,u)}else console.warn("THREE.USDZExporter: Unsupported material type (USDZ only supports MeshStandardMaterial)",c)}else c.isCamera&&(r+=wP(c))}),r+=pP(),r+=IP(o,a,t.quickLookCompatible),n[s]=th(r),r=null;for(const c in a){let h=a[c];h.isCompressedTexture===!0&&(h=Cc(h));const u=fP(h.image,h.flipY,t.maxTextureSize),d=await new Promise(f=>u.toBlob(f,"image/png",1));n[`textures/Texture_${c}.png`]=new Uint8Array(await d.arrayBuffer())}let l=0;for(const c in n){const h=n[c],u=34+c.length;l+=u;const d=l&63;if(d!==4){const f=64-d,m=new Uint8Array(f);n[c]=[h,{extra:{12345:m}}]}l=h.length}return uP(n,{level:0})}}function fP(i,e,t){if(typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof OffscreenCanvas<"u"&&i instanceof OffscreenCanvas||typeof ImageBitmap<"u"&&i instanceof ImageBitmap){const n=t/Math.max(i.width,i.height),s=document.createElement("canvas");s.width=i.width*Math.min(1,n),s.height=i.height*Math.min(1,n);const r=s.getContext("2d");return e===!0&&(r.translate(0,s.height),r.scale(1,-1)),r.drawImage(i,0,0,s.width,s.height),s}else throw new Error("THREE.USDZExporter: No valid image data found. Unable to process texture.")}const nn=7;function Wy(){return`#usda 1.0
(
	customLayerData = {
		string creator = "Three.js USDZExporter"
	}
	defaultPrim = "Root"
	metersPerUnit = 1
	upAxis = "Y"
)

`}function AP(i){return`def Xform "Root"
{
	def Scope "Scenes" (
		kind = "sceneLibrary"
	)
	{
		def Xform "Scene" (
			customData = {
				bool preliminary_collidesWithEnvironment = 0
				string sceneName = "Scene"
			}
			sceneName = "Scene"
		)
		{
		token preliminary:anchoring:type = "${i.ar.anchoring.type}"
		token preliminary:planeAnchoring:alignment = "${i.ar.planeAnchoring.alignment}"

`}function pP(){return`
		}
	}
}

`}function mP(i){let e=Wy();return e+=i,th(e)}function gP(i,e,t){const n="Object_"+i.id,s=qy(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),`def Xform "${n}" (
	prepend references = @./geometries/Geometry_${e.id}.usda@</Geometry>
	prepend apiSchemas = ["MaterialBindingAPI"]
)
{
	matrix4d xformOp:transform = ${s}
	uniform token[] xformOpOrder = ["xformOp:transform"]

	rel material:binding = </Materials/Material_${t.id}>
}

`}function qy(i){const e=i.elements;return`( ${rc(e,0)}, ${rc(e,4)}, ${rc(e,8)}, ${rc(e,12)} )`}function rc(i,e){return`(${i[e+0]}, ${i[e+1]}, ${i[e+2]}, ${i[e+3]})`}function _P(i){return`
def "Geometry"
{
${EP(i)}
}
`}function EP(i){const e="Geometry",t=i.attributes,n=t.position.count;return`
	def Mesh "${e}"
	{
		int[] faceVertexCounts = [${vP(i)}]
		int[] faceVertexIndices = [${yP(i)}]
		normal3f[] normals = [${Lf(t.normal,n)}] (
			interpolation = "vertex"
		)
		point3f[] points = [${Lf(t.position,n)}]
${SP(t)}
		uniform token subdivisionScheme = "none"
	}
`}function vP(i){const e=i.index!==null?i.index.count:i.attributes.position.count;return Array(e/3).fill(3).join(", ")}function yP(i){const e=i.index,t=[];if(e!==null)for(let n=0;n<e.count;n++)t.push(e.getX(n));else{const n=i.attributes.position.count;for(let s=0;s<n;s++)t.push(s)}return t.join(", ")}function Lf(i,e){if(i===void 0)return console.warn("USDZExporter: Normals missing."),Array(e).fill("(0, 0, 0)").join(", ");const t=[];for(let n=0;n<i.count;n++){const s=i.getX(n),r=i.getY(n),o=i.getZ(n);t.push(`(${s.toPrecision(nn)}, ${r.toPrecision(nn)}, ${o.toPrecision(nn)})`)}return t.join(", ")}function xP(i){const e=[];for(let t=0;t<i.count;t++){const n=i.getX(t),s=i.getY(t);e.push(`(${n.toPrecision(nn)}, ${1-s.toPrecision(nn)})`)}return e.join(", ")}function SP(i){let e="";for(let n=0;n<4;n++){const s=n>0?n:"",r=i["uv"+s];r!==void 0&&(e+=`
		texCoord2f[] primvars:st${s} = [${xP(r)}] (
			interpolation = "vertex"
		)`)}const t=i.color;if(t!==void 0){const n=t.count;e+=`
	color3f[] primvars:displayColor = [${Lf(t,n)}] (
		interpolation = "vertex"
		)`}return e}function IP(i,e,t=!1){const n=[];for(const s in i){const r=i[s];n.push(CP(r,e,t))}return`def "Materials"
{
${n.join("")}
}

`}function CP(i,e,t=!1){const n="			",s=[],r=[];function o(a,l,c){const h=a.source.id+"_"+a.flipY;e[h]=a;const u=a.channel>0?"st"+a.channel:"st",d={1e3:"repeat",1001:"clamp",1002:"mirror"},f=a.repeat.clone(),m=a.offset.clone(),g=a.rotation,A=Math.sin(g),p=Math.cos(g);return m.y=1-m.y-f.y,t?(m.x=m.x/f.x,m.y=m.y/f.y,m.x+=A/f.x,m.y+=p-1):(m.x+=A*f.x,m.y+=(1-p)*f.y),`
		def Shader "PrimvarReader_${l}"
		{
			uniform token info:id = "UsdPrimvarReader_float2"
			float2 inputs:fallback = (0.0, 0.0)
			token inputs:varname = "${u}"
			float2 outputs:result
		}

		def Shader "Transform2d_${l}"
		{
			uniform token info:id = "UsdTransform2d"
			token inputs:in.connect = </Materials/Material_${i.id}/PrimvarReader_${l}.outputs:result>
			float inputs:rotation = ${(g*(180/Math.PI)).toFixed(nn)}
			float2 inputs:scale = ${D_(f)}
			float2 inputs:translation = ${D_(m)}
			float2 outputs:result
		}

		def Shader "Texture_${a.id}_${l}"
		{
			uniform token info:id = "UsdUVTexture"
			asset inputs:file = @textures/Texture_${h}.png@
			float2 inputs:st.connect = </Materials/Material_${i.id}/Transform2d_${l}.outputs:result>
			${c!==void 0?"float4 inputs:scale = "+MP(c):""}
			token inputs:sourceColorSpace = "${a.colorSpace===Fn?"raw":"sRGB"}"
			token inputs:wrapS = "${d[a.wrapS]}"
			token inputs:wrapT = "${d[a.wrapT]}"
			float outputs:r
			float outputs:g
			float outputs:b
			float3 outputs:rgb
			${i.transparent||i.alphaTest>0?"float outputs:a":""}
		}`}return i.side===rn&&console.warn("THREE.USDZExporter: USDZ does not support double sided materials",i),i.map!==null?(s.push(`${n}color3f inputs:diffuseColor.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:rgb>`),i.transparent?s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`):i.alphaTest>0&&(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.map.id}_diffuse.outputs:a>`),s.push(`${n}float inputs:opacityThreshold = ${i.alphaTest}`)),r.push(o(i.map,"diffuse",i.color))):s.push(`${n}color3f inputs:diffuseColor = ${R_(i.color)}`),i.emissiveMap!==null?(s.push(`${n}color3f inputs:emissiveColor.connect = </Materials/Material_${i.id}/Texture_${i.emissiveMap.id}_emissive.outputs:rgb>`),r.push(o(i.emissiveMap,"emissive"))):i.emissive.getHex()>0&&s.push(`${n}color3f inputs:emissiveColor = ${R_(i.emissive)}`),i.normalMap!==null&&(s.push(`${n}normal3f inputs:normal.connect = </Materials/Material_${i.id}/Texture_${i.normalMap.id}_normal.outputs:rgb>`),r.push(o(i.normalMap,"normal"))),i.aoMap!==null&&(s.push(`${n}float inputs:occlusion.connect = </Materials/Material_${i.id}/Texture_${i.aoMap.id}_occlusion.outputs:r>`),r.push(o(i.aoMap,"occlusion"))),i.roughnessMap!==null&&i.roughness===1?(s.push(`${n}float inputs:roughness.connect = </Materials/Material_${i.id}/Texture_${i.roughnessMap.id}_roughness.outputs:g>`),r.push(o(i.roughnessMap,"roughness"))):s.push(`${n}float inputs:roughness = ${i.roughness}`),i.metalnessMap!==null&&i.metalness===1?(s.push(`${n}float inputs:metallic.connect = </Materials/Material_${i.id}/Texture_${i.metalnessMap.id}_metallic.outputs:b>`),r.push(o(i.metalnessMap,"metallic"))):s.push(`${n}float inputs:metallic = ${i.metalness}`),i.alphaMap!==null?(s.push(`${n}float inputs:opacity.connect = </Materials/Material_${i.id}/Texture_${i.alphaMap.id}_opacity.outputs:r>`),s.push(`${n}float inputs:opacityThreshold = 0.0001`),r.push(o(i.alphaMap,"opacity"))):s.push(`${n}float inputs:opacity = ${i.opacity}`),i.isMeshPhysicalMaterial&&(s.push(`${n}float inputs:clearcoat = ${i.clearcoat}`),s.push(`${n}float inputs:clearcoatRoughness = ${i.clearcoatRoughness}`),s.push(`${n}float inputs:ior = ${i.ior}`)),`
	def Material "Material_${i.id}"
	{
		def Shader "PreviewSurface"
		{
			uniform token info:id = "UsdPreviewSurface"
${s.join(`
`)}
			int inputs:useSpecularWorkflow = 0
			token outputs:surface
		}

		token outputs:surface.connect = </Materials/Material_${i.id}/PreviewSurface.outputs:surface>

${r.join(`
`)}

	}
`}function R_(i){return`(${i.r}, ${i.g}, ${i.b})`}function MP(i){return`(${i.r}, ${i.g}, ${i.b}, 1.0)`}function D_(i){return`(${i.x}, ${i.y})`}function wP(i){const e=i.name?i.name:"Camera_"+i.id,t=qy(i.matrixWorld);return i.matrixWorld.determinant()<0&&console.warn("THREE.USDZExporter: USDZ does not support negative scales",i),i.isOrthographicCamera?`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(nn)}, ${i.far.toPrecision(nn)})
			float horizontalAperture = ${((Math.abs(i.left)+Math.abs(i.right))*10).toPrecision(nn)}
			float verticalAperture = ${((Math.abs(i.top)+Math.abs(i.bottom))*10).toPrecision(nn)}
			token projection = "orthographic"
		}
	
	`:`def Camera "${e}"
		{
			matrix4d xformOp:transform = ${t}
			uniform token[] xformOpOrder = ["xformOp:transform"]

			float2 clippingRange = (${i.near.toPrecision(nn)}, ${i.far.toPrecision(nn)})
			float focalLength = ${i.getFocalLength().toPrecision(nn)}
			float focusDistance = ${i.focus.toPrecision(nn)}
			float horizontalAperture = ${i.getFilmWidth().toPrecision(nn)}
			token projection = "perspective"
			float verticalAperture = ${i.getFilmHeight().toPrecision(nn)}
		}
	
	`}/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bP=i=>e=>{try{const t=ki(e),n=(t.length?t[0].terms:[]).filter(s=>s&&s.type==="ident").map(s=>s.value).filter(s=>i.indexOf(s)>-1);return new Set(n)}catch{}return new Set};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Wr=function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};let L_=!1,P_=!1;const F_="#model-viewer-no-ar-fallback",TP=bP(["quick-look","scene-viewer","webxr","none"]),BP="webxr scene-viewer quick-look",Ln={QUICK_LOOK:"quick-look",SCENE_VIEWER:"scene-viewer",WEBXR:"webxr",NONE:"none"},Pi=Symbol("arButtonContainer"),U_=Symbol("enterARWithWebXR"),N_=Symbol("openSceneViewer"),O_=Symbol("openIOSARQuickLook"),RP=Symbol("canActivateAR"),oc=Symbol("arMode"),Cd=Symbol("arModes"),qr=Symbol("arAnchor"),ac=Symbol("preload"),lc=Symbol("onARButtonContainerClick"),Md=Symbol("onARStatus"),wd=Symbol("onARTracking"),bd=Symbol("onARTap"),aa=Symbol("selectARMode"),Td=Symbol("triggerLoad"),DP=i=>{var e,t,n,s,r,o,a,l,c,h;class u extends i{constructor(){super(...arguments),this.ar=!1,this.arScale="auto",this.arPlacement="floor",this.arModes=BP,this.iosSrc=null,this.xrEnvironment=!1,this[e]=!1,this[t]=this.shadowRoot.querySelector(".ar-button"),this[n]=document.createElement("a"),this[s]=new Set,this[r]=Ln.NONE,this[o]=!1,this[a]=f=>{f.preventDefault(),this.activateAR()},this[l]=({status:f})=>{(f===hs.NOT_PRESENTING||this[rt].arRenderer.presentedScene===this[he])&&(this.setAttribute("ar-status",f),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:f}})),f===hs.NOT_PRESENTING?this.removeAttribute("ar-tracking"):f===hs.SESSION_STARTED&&this.setAttribute("ar-tracking",yf.TRACKING))},this[c]=({status:f})=>{this.setAttribute("ar-tracking",f),this.dispatchEvent(new CustomEvent("ar-tracking",{detail:{status:f}}))},this[h]=f=>{f.data=="_apple_ar_quicklook_button_tapped"&&this.dispatchEvent(new CustomEvent("quick-look-button-tapped"))}}get canActivateAR(){return this[oc]!==Ln.NONE}connectedCallback(){super.connectedCallback(),this[rt].arRenderer.addEventListener("status",this[Md]),this.setAttribute("ar-status",hs.NOT_PRESENTING),this[rt].arRenderer.addEventListener("tracking",this[wd]),this[qr].addEventListener("message",this[bd])}disconnectedCallback(){super.disconnectedCallback(),this[rt].arRenderer.removeEventListener("status",this[Md]),this[rt].arRenderer.removeEventListener("tracking",this[wd]),this[qr].removeEventListener("message",this[bd])}update(f){super.update(f),f.has("arScale")&&(this[he].canScale=this.arScale!=="fixed"),f.has("arPlacement")&&(this[he].updateShadow(),this[on]()),f.has("arModes")&&(this[Cd]=TP(this.arModes)),(f.has("ar")||f.has("arModes")||f.has("src")||f.has("iosSrc"))&&this[aa]()}async activateAR(){switch(this[oc]){case Ln.QUICK_LOOK:await this[O_]();break;case Ln.WEBXR:await this[U_]();break;case Ln.SCENE_VIEWER:this[N_]();break;default:console.warn("No AR Mode can be activated. This is probably due to missing configuration or device capabilities");break}}async[(e=RP,t=Pi,n=qr,s=Cd,r=oc,o=ac,a=lc,l=Md,c=wd,h=bd,aa)](){var f;let m=Ln.NONE;if(this.ar){if(this.src!=null)for(const g of this[Cd]){if(g==="webxr"&&Uv&&!L_&&await this[rt].arRenderer.supportsPresentation()){m=Ln.WEBXR;break}if(g==="scene-viewer"&&!P_&&(f1||navigator.userAgentData&&navigator.userAgentData.getHighEntropyValues&&(!((f=(await navigator.userAgentData.getHighEntropyValues(["formFactor"])).formFactor)===null||f===void 0)&&f.includes("XR")))){m=Ln.SCENE_VIEWER;break}if(g==="quick-look"&&rg){m=Ln.QUICK_LOOK;break}}m===Ln.NONE&&this.iosSrc!=null&&rg&&(m=Ln.QUICK_LOOK)}if(m!==Ln.NONE)this[Pi].classList.add("enabled"),this[Pi].addEventListener("click",this[lc]);else if(this[Pi].classList.contains("enabled")){this[Pi].removeEventListener("click",this[lc]),this[Pi].classList.remove("enabled");const g=hs.FAILED;this.setAttribute("ar-status",g),this.dispatchEvent(new CustomEvent("ar-status",{detail:{status:g}}))}this[oc]=m}async[U_](){console.log("Attempting to present in AR with WebXR..."),await this[Td]();try{this[Pi].removeEventListener("click",this[lc]);const{arRenderer:f}=this[rt];f.placeOnWall=this.arPlacement==="wall",await f.present(this[he],this.xrEnvironment)}catch(f){console.warn("Error while trying to present in AR with WebXR"),console.error(f),await this[rt].arRenderer.stopPresenting(),L_=!0,console.warn("Falling back to next ar-mode"),await this[aa](),this.activateAR()}finally{this[aa]()}}async[Td](){this.loaded||(this[ac]=!0,this[Ao](),await E1(this,"load"),this[ac]=!1)}[wo](){return super[wo]()||this[ac]}[N_](){const f=self.location.toString(),m=new URL(f),g=new URL(this.src,f);g.hash&&(g.hash="");const A=new URLSearchParams(g.search);if(m.hash=F_,A.set("mode","ar_preferred"),A.has("disable_occlusion")||A.set("disable_occlusion","true"),this.arScale==="fixed"&&A.set("resizable","false"),this.arPlacement==="wall"&&A.set("enable_vertical_placement","true"),A.has("sound")){const _=new URL(A.get("sound"),f);A.set("sound",_.toString())}if(A.has("link")){const _=new URL(A.get("link"),f);A.set("link",_.toString())}const p=`intent://arvr.google.com/scene-viewer/1.2?${A.toString()+"&file="+encodeURIComponent(g.toString())}#Intent;scheme=https;package=com.google.android.googlequicksearchbox;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(m.toString())};end;`,x=()=>{self.location.hash===F_&&(P_=!0,self.history.back(),console.warn("Error while trying to present in AR with Scene Viewer"),console.warn("Falling back to next ar-mode"),this[aa]())};self.addEventListener("hashchange",x,{once:!0}),this[qr].setAttribute("href",p),console.log("Attempting to present in AR with Scene Viewer..."),this[qr].click()}async[O_](){const f=!this.iosSrc;this[Pi].classList.remove("enabled");const m=f?await this.prepareUSDZ():this.iosSrc,g=new URL(m,self.location.toString());if(f){const x=self.location.toString(),_=new URL(x),C=new URL(this.src,_);C.hash&&(g.hash=C.hash)}this.arScale==="fixed"&&(g.hash&&(g.hash+="&"),g.hash+="allowsContentScaling=0");const A=this[qr];A.setAttribute("rel","ar");const p=document.createElement("img");A.appendChild(p),A.setAttribute("href",g.toString()),f&&A.setAttribute("download","model.usdz"),A.style.display="none",A.isConnected||this.shadowRoot.appendChild(A),console.log("Attempting to present in AR with Quick Look..."),A.click(),A.removeChild(p),f&&URL.revokeObjectURL(m),this[Pi].classList.add("enabled")}async prepareUSDZ(){const f=this[ur].beginActivity("usdz-conversion");await this[Td]();const{model:m,shadow:g,target:A}=this[he];if(m==null)return"";let p=!1;g!=null&&(p=g.visible,g.visible=!1),f(.2);const x=new dP;A.remove(m),m.position.copy(A.position),m.updateWorldMatrix(!1,!0);const _=await x.parse(m);m.position.set(0,0,0),A.add(m);const C=new Blob([_],{type:"model/vnd.usdz+zip"}),M=URL.createObjectURL(C);return f(1),g!=null&&(g.visible=p),M}}return Wr([we({type:Boolean,attribute:"ar"})],u.prototype,"ar",void 0),Wr([we({type:String,attribute:"ar-scale"})],u.prototype,"arScale",void 0),Wr([we({type:String,attribute:"ar-placement"})],u.prototype,"arPlacement",void 0),Wr([we({type:String,attribute:"ar-modes"})],u.prototype,"arModes",void 0),Wr([we({type:String,attribute:"ios-src"})],u.prototype,"iosSrc",void 0),Wr([we({type:Boolean,attribute:"xr-environment"})],u.prototype,"xrEnvironment",void 0),u};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Bd=function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const LP=100,PP="https://www.gstatic.com/draco/versioned/decoders/1.5.6/",FP="https://www.gstatic.com/basis-universal/versioned/2021-04-15-ba1c3e4/",UP="https://cdn.jsdelivr.net/npm/three@0.149.0/examples/jsm/loaders/LottieLoader.js",Rd={AUTO:"auto",MANUAL:"manual"},Q_={AUTO:"auto",LAZY:"lazy",EAGER:"eager"},$r=Symbol("defaultProgressBarElement"),Dd=Symbol("posterContainerElement"),Xr=Symbol("defaultPosterElement"),la=Symbol("shouldDismissPoster"),Ld=Symbol("hidePoster"),cc=Symbol("modelIsRevealed"),Pd=Symbol("updateProgressBar"),NP=Symbol("ariaLabelCallToAction"),Fd=Symbol("onProgress"),OP=i=>{var e,t,n,s,r,o,a,l;class c extends i{constructor(...u){super(...u),this.poster=null,this.reveal=Rd.AUTO,this.loading=Q_.AUTO,this[e]=!1,this[t]=!1,this[n]=this.shadowRoot.querySelector(".slot.poster"),this[s]=this.shadowRoot.querySelector("#default-poster"),this[r]=this.shadowRoot.querySelector("#default-progress-bar > .bar"),this[o]=this[Xr].getAttribute("aria-label"),this[a]=m1(A=>{const p=this[$r].parentNode;requestAnimationFrame(()=>{this[$r].style.transform=`scaleX(${A})`,A===0&&(p.removeChild(this[$r]),p.appendChild(this[$r])),this[$r].classList.toggle("hide",A===1)})},LP),this[l]=A=>{const p=A.detail.totalProgress,x=A.detail.reason;p===1&&(this[Pd].flush(),this.loaded&&(this[la]||this.reveal===Rd.AUTO)&&this[Ld]()),this[Pd](p),this.dispatchEvent(new CustomEvent("progress",{detail:{totalProgress:p,reason:x}}))};const d=self.ModelViewerElement||{},f=d.dracoDecoderLocation||PP;Gt.setDRACODecoderLocation(f);const m=d.ktx2TranscoderLocation||FP;Gt.setKTX2TranscoderLocation(m),d.meshoptDecoderLocation&&Gt.setMeshoptDecoderLocation(d.meshoptDecoderLocation);const g=d.lottieLoaderLocation||UP;Kn.singleton.textureUtils.lottieLoaderUrl=g}static set dracoDecoderLocation(u){Gt.setDRACODecoderLocation(u)}static get dracoDecoderLocation(){return Gt.getDRACODecoderLocation()}static set ktx2TranscoderLocation(u){Gt.setKTX2TranscoderLocation(u)}static get ktx2TranscoderLocation(){return Gt.getKTX2TranscoderLocation()}static set meshoptDecoderLocation(u){Gt.setMeshoptDecoderLocation(u)}static get meshoptDecoderLocation(){return Gt.getMeshoptDecoderLocation()}static set lottieLoaderLocation(u){Kn.singleton.textureUtils.lottieLoaderUrl=u}static get lottieLoaderLocation(){return Kn.singleton.textureUtils.lottieLoaderUrl}static mapURLs(u){Kn.singleton.loader[zs].manager.setURLModifier(u)}dismissPoster(){this.loaded?this[Ld]():(this[la]=!0,this[Ao]())}showPoster(){const u=this[Dd];if(u.classList.contains("show"))return;u.classList.add("show"),this[Xn].classList.remove("show");const d=this[Xr];d.removeAttribute("tabindex"),d.removeAttribute("aria-hidden");const f=this.modelIsVisible;this[cc]=!1,this[Jc](f)}getDimensions(){return us(this[he].size)}getBoundingBoxCenter(){return us(this[he].boundingBox.getCenter(new L))}connectedCallback(){super.connectedCallback(),this.loaded||this.showPoster(),this[ur].addEventListener("progress",this[Fd])}disconnectedCallback(){super.disconnectedCallback(),this[ur].removeEventListener("progress",this[Fd])}async updated(u){super.updated(u),u.has("poster")&&this.poster!=null&&(this[Xr].style.backgroundImage=`url(${this.poster})`),u.has("alt")&&this[Xr].setAttribute("aria-label",this[Mf]),(u.has("reveal")||u.has("loading"))&&this[Ao]()}[(e=cc,t=la,n=Dd,s=Xr,r=$r,o=NP,a=Pd,l=Fd,wo)](){return!!this.src&&(this[la]||this.loading===Q_.EAGER||this.reveal===Rd.AUTO&&this[Xs])}[Ld](){this[la]=!1;const u=this[Dd];if(!u.classList.contains("show"))return;u.classList.remove("show"),this[Xn].classList.add("show");const d=this.modelIsVisible;this[cc]=!0,this[Jc](d);const f=this.getRootNode();f&&f.activeElement===this&&this[Xn].focus();const m=this[Xr];m.setAttribute("aria-hidden","true"),m.tabIndex=-1,this.dispatchEvent(new CustomEvent("poster-dismissed"))}[dr](){return super[dr]()&&this[cc]}}return Bd([we({type:String})],c.prototype,"poster",void 0),Bd([we({type:String})],c.prototype,"reveal",void 0),Bd([we({type:String})],c.prototype,"loading",void 0),c};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ud=function(i,e,t,n){var s=arguments.length,r=s<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,o;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(i,e,t,n);else for(var a=i.length-1;a>=0;a--)(o=i[a])&&(r=(s<3?o(r):s>3?o(e,t,r):o(e,t))||r);return s>3&&r&&Object.defineProperty(e,t,r),r};const QP=Math.PI/32,kP=3e3,GP={basis:[_h(an(QP,"rad"))],keywords:{auto:[null]}},Yr=Symbol("autoRotateStartTime"),Nd=Symbol("radiansPerSecond"),k_=Symbol("syncRotationRate"),Od=Symbol("onCameraChange"),HP=i=>{var e,t,n;class s extends i{constructor(){super(...arguments),this.autoRotate=!1,this.autoRotateDelay=kP,this.rotationPerSecond="auto",this[e]=performance.now(),this[t]=0,this[n]=o=>{this.autoRotate&&o.detail.source==="user-interaction"&&(this[Yr]=performance.now())}}connectedCallback(){super.connectedCallback(),this.addEventListener("camera-change",this[Od]),this[Yr]=performance.now()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("camera-change",this[Od]),this[Yr]=performance.now()}updated(o){super.updated(o),o.has("autoRotate")&&(this[Yr]=performance.now())}[(e=Yr,t=Nd,k_)](o){this[Nd]=o[0]}[mi](o,a){if(super[mi](o,a),!this.autoRotate||!this[dr]()||this[rt].isPresenting)return;const l=Math.min(a,o-this[Yr]-this.autoRotateDelay);l>0&&(this[he].yaw=this.turntableRotation+this[Nd]*l*.001)}get turntableRotation(){return this[he].yaw}resetTurntableRotation(o=0){this[he].yaw=o}}return n=Od,Ud([we({type:Boolean,attribute:"auto-rotate"})],s.prototype,"autoRotate",void 0),Ud([we({type:Number,attribute:"auto-rotate-delay"})],s.prototype,"autoRotateDelay",void 0),Ud([is({intrinsics:GP,updateHandler:k_}),we({type:String,attribute:"rotation-per-second"})],s.prototype,"rotationPerSecond",void 0),s};/* @license
 * Copyright 2019 Google LLC. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an 'AS IS' BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP=K2(D2(HP(I1(NL(DP(OP(Y2(Za))))))));customElements.define("model-viewer",VP);const zP=SI(PI);zP.mount("#app");
