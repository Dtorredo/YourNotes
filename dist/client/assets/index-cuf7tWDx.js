var jd=Object.defineProperty;var Gd=(n,e,t)=>e in n?jd(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var qe=(n,e,t)=>Gd(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const zd=()=>{};var Na={};/**
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
 */const uc={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const g=function(n,e){if(!n)throw _n(e)},_n=function(n){return new Error("Firebase Database ("+uc.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const dc=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},qd=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},ro={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,h=r>>2,u=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),s.push(t[h],t[u],t[d],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(dc(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):qd(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const u=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||u==null)throw new Kd;const d=r<<2|a>>4;if(s.push(d),c!==64){const f=a<<4&240|c>>2;if(s.push(f),u!==64){const p=c<<6&192|u;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Kd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const fc=function(n){const e=dc(n);return ro.encodeByteArray(e,!0)},Ws=function(n){return fc(n).replace(/\./g,"")},Hs=function(n){try{return ro.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Yd(n){return pc(void 0,n)}function pc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Jd(t)||(n[t]=pc(n[t],e[t]));return n}function Jd(n){return n!=="__proto__"}/**
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
 */function Qd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Xd=()=>Qd().__FIREBASE_DEFAULTS__,Zd=()=>{if(typeof process>"u"||typeof Na>"u")return;const n=Na.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ef=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Hs(n[1]);return e&&JSON.parse(e)},oo=()=>{try{return zd()||Xd()||Zd()||ef()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},gc=n=>{var e,t;return(t=(e=oo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},tf=n=>{const e=gc(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},_c=()=>{var n;return(n=oo())===null||n===void 0?void 0:n.config},mc=n=>{var e;return(e=oo())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class as{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mn(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function yc(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function nf(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n);return[Ws(JSON.stringify(t)),Ws(JSON.stringify(o)),""].join(".")}const On={};function sf(){const n={prod:[],emulator:[]};for(const e of Object.keys(On))On[e]?n.emulator.push(e):n.prod.push(e);return n}function rf(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Ra=!1;function wc(n,e){if(typeof window>"u"||typeof document>"u"||!mn(window.location.host)||On[n]===e||On[n]||Ra)return;On[n]=e;function t(d){return`__firebase__banner__${d}`}const s="__firebase__banner",r=sf().prod.length>0;function o(){const d=document.getElementById(s);d&&d.remove()}function a(d){d.style.display="flex",d.style.background="#7faaf0",d.style.position="fixed",d.style.bottom="5px",d.style.left="5px",d.style.padding=".5em",d.style.borderRadius="5px",d.style.alignItems="center"}function l(d,f){d.setAttribute("width","24"),d.setAttribute("id",f),d.setAttribute("height","24"),d.setAttribute("viewBox","0 0 24 24"),d.setAttribute("fill","none"),d.style.marginLeft="-6px"}function c(){const d=document.createElement("span");return d.style.cursor="pointer",d.style.marginLeft="16px",d.style.fontSize="24px",d.innerHTML=" &times;",d.onclick=()=>{Ra=!0,o()},d}function h(d,f){d.setAttribute("id",f),d.innerText="Learn more",d.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",d.setAttribute("target","__blank"),d.style.paddingLeft="5px",d.style.textDecoration="underline"}function u(){const d=rf(s),f=t("text"),p=document.getElementById(f)||document.createElement("span"),_=t("learnmore"),S=document.getElementById(_)||document.createElement("a"),Q=t("preprendIcon"),le=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(d.created){const pe=d.element;a(pe),h(S,_);const Wt=c();l(le,Q),pe.append(le,p,S,Wt),document.body.appendChild(pe)}r?(p.innerText="Preview backend disconnected.",le.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(le.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,p.innerText="Preview backend running in this workspace."),p.setAttribute("id",f)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",u):u()}/**
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
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ao(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())}function of(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function af(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function vc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function lf(){const n=se();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function cf(){return uc.NODE_ADMIN===!0}function hf(){try{return typeof indexedDB=="object"}catch{return!1}}function uf(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const df="FirebaseError";class _t extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=df,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ls.prototype.create)}}class ls{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?ff(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new _t(i,a,s)}}function ff(n,e){return n.replace(pf,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const pf=/\{\$([^}]+)}/g;/**
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
 */function $n(n){return JSON.parse(n)}function W(n){return JSON.stringify(n)}/**
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
 */const bc=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=$n(Hs(r[0])||""),t=$n(Hs(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},gf=function(n){const e=bc(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},_f=function(n){const e=bc(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Ae(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function tn(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function vr(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $s(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function kt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(Da(r)&&Da(o)){if(!kt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function Da(n){return n!==null&&typeof n=="object"}/**
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
 */function yn(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class mf{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let u=0;u<16;u++)s[u]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let u=0;u<16;u++)s[u]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let u=16;u<80;u++){const d=s[u-3]^s[u-8]^s[u-14]^s[u-16];s[u]=(d<<1|d>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let u=0;u<80;u++){u<40?u<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):u<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const d=(i<<5|i>>>27)+c+l+h+s[u]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=d}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function yf(n,e){const t=new wf(n,e);return t.subscribe.bind(t)}class wf{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,s){let i;if(e===void 0&&t===void 0&&s===void 0)throw new Error("Missing Observer.");vf(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:s},i.next===void 0&&(i.next=Ki),i.error===void 0&&(i.error=Ki),i.complete===void 0&&(i.complete=Ki);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function vf(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ki(){}function bi(n,e){return`${n} failed: ${e} argument `}/**
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
 */const bf=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,g(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ci=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ie(n){return n&&n._delegate?n._delegate:n}class At{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const yt="[DEFAULT]";/**
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
 */class Cf{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new as;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(If(e))try{this.getOrInitializeService({instanceIdentifier:yt})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=yt){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=yt){return this.instances.has(e)}getOptions(e=yt){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){var s;const i=this.normalizeInstanceIdentifier(t),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:Ef(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=yt){return this.component?this.component.multipleInstances?e:yt:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Ef(n){return n===yt?void 0:n}function If(n){return n.instantiationMode==="EAGER"}/**
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
 */class Sf{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Cf(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var R;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(R||(R={}));const Tf={debug:R.DEBUG,verbose:R.VERBOSE,info:R.INFO,warn:R.WARN,error:R.ERROR,silent:R.SILENT},kf=R.INFO,Af={[R.DEBUG]:"log",[R.VERBOSE]:"log",[R.INFO]:"info",[R.WARN]:"warn",[R.ERROR]:"error"},Nf=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=Af[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class lo{constructor(e){this.name=e,this._logLevel=kf,this._logHandler=Nf,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in R))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tf[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,R.DEBUG,...e),this._logHandler(this,R.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,R.VERBOSE,...e),this._logHandler(this,R.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,R.INFO,...e),this._logHandler(this,R.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,R.WARN,...e),this._logHandler(this,R.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,R.ERROR,...e),this._logHandler(this,R.ERROR,...e)}}const Rf=(n,e)=>e.some(t=>n instanceof t);let Oa,Pa;function Df(){return Oa||(Oa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Of(){return Pa||(Pa=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Cc=new WeakMap,br=new WeakMap,Ec=new WeakMap,Yi=new WeakMap,co=new WeakMap;function Pf(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(st(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Cc.set(t,n)}).catch(()=>{}),co.set(e,n),e}function Lf(n){if(br.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});br.set(n,e)}let Cr={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return br.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Ec.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return st(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Mf(n){Cr=n(Cr)}function xf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Ji(this),e,...t);return Ec.set(s,e.sort?e.sort():[e]),st(s)}:Of().includes(n)?function(...e){return n.apply(Ji(this),e),st(Cc.get(this))}:function(...e){return st(n.apply(Ji(this),e))}}function Uf(n){return typeof n=="function"?xf(n):(n instanceof IDBTransaction&&Lf(n),Rf(n,Df())?new Proxy(n,Cr):n)}function st(n){if(n instanceof IDBRequest)return Pf(n);if(Yi.has(n))return Yi.get(n);const e=Uf(n);return e!==n&&(Yi.set(n,e),co.set(e,n)),e}const Ji=n=>co.get(n);function Ff(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=st(o);return s&&o.addEventListener("upgradeneeded",l=>{s(st(o.result),l.oldVersion,l.newVersion,st(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Bf=["get","getKey","getAll","getAllKeys","count"],Vf=["put","add","delete","clear"],Qi=new Map;function La(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Qi.get(e))return Qi.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Vf.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Bf.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Qi.set(e,r),r}Mf(n=>({...n,get:(e,t,s)=>La(e,t)||n.get(e,t,s),has:(e,t)=>!!La(e,t)||n.has(e,t)}));/**
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
 */class Wf{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Hf(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Hf(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Er="@firebase/app",Ma="0.13.2";/**
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
 */const Be=new lo("@firebase/app"),$f="@firebase/app-compat",jf="@firebase/analytics-compat",Gf="@firebase/analytics",zf="@firebase/app-check-compat",qf="@firebase/app-check",Kf="@firebase/auth",Yf="@firebase/auth-compat",Jf="@firebase/database",Qf="@firebase/data-connect",Xf="@firebase/database-compat",Zf="@firebase/functions",ep="@firebase/functions-compat",tp="@firebase/installations",np="@firebase/installations-compat",sp="@firebase/messaging",ip="@firebase/messaging-compat",rp="@firebase/performance",op="@firebase/performance-compat",ap="@firebase/remote-config",lp="@firebase/remote-config-compat",cp="@firebase/storage",hp="@firebase/storage-compat",up="@firebase/firestore",dp="@firebase/ai",fp="@firebase/firestore-compat",pp="firebase",gp="11.10.0";/**
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
 */const Ir="[DEFAULT]",_p={[Er]:"fire-core",[$f]:"fire-core-compat",[Gf]:"fire-analytics",[jf]:"fire-analytics-compat",[qf]:"fire-app-check",[zf]:"fire-app-check-compat",[Kf]:"fire-auth",[Yf]:"fire-auth-compat",[Jf]:"fire-rtdb",[Qf]:"fire-data-connect",[Xf]:"fire-rtdb-compat",[Zf]:"fire-fn",[ep]:"fire-fn-compat",[tp]:"fire-iid",[np]:"fire-iid-compat",[sp]:"fire-fcm",[ip]:"fire-fcm-compat",[rp]:"fire-perf",[op]:"fire-perf-compat",[ap]:"fire-rc",[lp]:"fire-rc-compat",[cp]:"fire-gcs",[hp]:"fire-gcs-compat",[up]:"fire-fst",[fp]:"fire-fst-compat",[dp]:"fire-vertex","fire-js":"fire-js",[pp]:"fire-js-all"};/**
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
 */const js=new Map,mp=new Map,Sr=new Map;function xa(n,e){try{n.container.addComponent(e)}catch(t){Be.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function nn(n){const e=n.name;if(Sr.has(e))return Be.debug(`There were multiple attempts to register component ${e}.`),!1;Sr.set(e,n);for(const t of js.values())xa(t,n);for(const t of mp.values())xa(t,n);return!0}function ho(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ge(n){return n==null?!1:n.settings!==void 0}/**
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
 */const yp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},it=new ls("app","Firebase",yp);/**
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
 */class wp{constructor(e,t,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new At("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw it.create("app-deleted",{appName:this._name})}}/**
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
 */const wn=gp;function Ic(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ir,automaticDataCollectionEnabled:!0},e),i=s.name;if(typeof i!="string"||!i)throw it.create("bad-app-name",{appName:String(i)});if(t||(t=_c()),!t)throw it.create("no-options");const r=js.get(i);if(r){if(kt(t,r.options)&&kt(s,r.config))return r;throw it.create("duplicate-app",{appName:i})}const o=new Sf(i);for(const l of Sr.values())o.addComponent(l);const a=new wp(t,s,o);return js.set(i,a),a}function Sc(n=Ir){const e=js.get(n);if(!e&&n===Ir&&_c())return Ic();if(!e)throw it.create("no-app",{appName:n});return e}function rt(n,e,t){var s;let i=(s=_p[n])!==null&&s!==void 0?s:n;t&&(i+=`-${t}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Be.warn(a.join(" "));return}nn(new At(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const vp="firebase-heartbeat-database",bp=1,jn="firebase-heartbeat-store";let Xi=null;function Tc(){return Xi||(Xi=Ff(vp,bp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(jn)}catch(t){console.warn(t)}}}}).catch(n=>{throw it.create("idb-open",{originalErrorMessage:n.message})})),Xi}async function Cp(n){try{const t=(await Tc()).transaction(jn),s=await t.objectStore(jn).get(kc(n));return await t.done,s}catch(e){if(e instanceof _t)Be.warn(e.message);else{const t=it.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Be.warn(t.message)}}}async function Ua(n,e){try{const s=(await Tc()).transaction(jn,"readwrite");await s.objectStore(jn).put(e,kc(n)),await s.done}catch(t){if(t instanceof _t)Be.warn(t.message);else{const s=it.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Be.warn(s.message)}}}function kc(n){return`${n.name}!${n.options.appId}`}/**
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
 */const Ep=1024,Ip=30;class Sp{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new kp(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Fa();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>Ip){const o=Ap(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){Be.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Fa(),{heartbeatsToSend:s,unsentEntries:i}=Tp(this._heartbeatsCache.heartbeats),r=Ws(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return Be.warn(t),""}}}function Fa(){return new Date().toISOString().substring(0,10)}function Tp(n,e=Ep){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Ba(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),Ba(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class kp{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return hf()?uf().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Cp(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ua(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ua(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Ba(n){return Ws(JSON.stringify({version:2,heartbeats:n})).length}function Ap(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function Np(n){nn(new At("platform-logger",e=>new Wf(e),"PRIVATE")),nn(new At("heartbeat",e=>new Sp(e),"PRIVATE")),rt(Er,Ma,n),rt(Er,Ma,"esm2017"),rt("fire-js","")}Np("");var Rp="firebase",Dp="11.10.0";/**
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
 */rt(Rp,Dp,"app");function uo(n,e){var t={};for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&e.indexOf(s)<0&&(t[s]=n[s]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(n);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(n,s[i])&&(t[s[i]]=n[s[i]]);return t}function Ac(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Op=Ac,Nc=new ls("auth","Firebase",Ac());/**
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
 */const Gs=new lo("@firebase/auth");function Pp(n,...e){Gs.logLevel<=R.WARN&&Gs.warn(`Auth (${wn}): ${n}`,...e)}function Os(n,...e){Gs.logLevel<=R.ERROR&&Gs.error(`Auth (${wn}): ${n}`,...e)}/**
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
 */function Ie(n,...e){throw po(n,...e)}function we(n,...e){return po(n,...e)}function fo(n,e,t){const s=Object.assign(Object.assign({},Op()),{[e]:t});return new ls("auth","Firebase",s).create(e,{appName:n.name})}function It(n){return fo(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function Lp(n,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&Ie(n,"argument-error"),fo(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function po(n,...e){if(typeof n!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=n.name),n._errorFactory.create(t,...s)}return Nc.create(n,...e)}function w(n,e,...t){if(!n)throw po(e,...t)}function Pe(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Os(e),new Error(e)}function Ve(n,e){n||Pe(e)}/**
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
 */function Tr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Mp(){return Va()==="http:"||Va()==="https:"}function Va(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function xp(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Mp()||af()||"connection"in navigator)?navigator.onLine:!0}function Up(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class cs{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ve(t>e,"Short delay should be less than long delay!"),this.isMobile=ao()||vc()}get(){return xp()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function go(n,e){Ve(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Rc{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Pe("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Pe("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Pe("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Fp={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const Bp=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],Vp=new cs(3e4,6e4);function _o(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function vn(n,e,t,s,i={}){return Dc(n,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=yn(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode);const c=Object.assign({method:e,headers:l},r);return of()||(c.referrerPolicy="no-referrer"),n.emulatorConfig&&mn(n.emulatorConfig.host)&&(c.credentials="include"),Rc.fetch()(await Oc(n,n.config.apiHost,t,a),c)})}async function Dc(n,e,t){n._canInitEmulator=!1;const s=Object.assign(Object.assign({},Fp),e);try{const i=new Hp(n),r=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Ts(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ts(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ts(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ts(n,"user-disabled",o);const h=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw fo(n,h,c);Ie(n,h)}}catch(i){if(i instanceof _t)throw i;Ie(n,"network-request-failed",{message:String(i)})}}async function Wp(n,e,t,s,i={}){const r=await vn(n,e,t,s,i);return"mfaPendingCredential"in r&&Ie(n,"multi-factor-auth-required",{_serverResponse:r}),r}async function Oc(n,e,t,s){const i=`${e}${t}?${s}`,r=n,o=r.config.emulator?go(n.config,i):`${n.config.apiScheme}://${i}`;return Bp.includes(t)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class Hp{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(we(this.auth,"network-request-failed")),Vp.get())})}}function Ts(n,e,t){const s={appName:n.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const i=we(n,e,s);return i.customData._tokenResponse=t,i}/**
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
 */async function $p(n,e){return vn(n,"POST","/v1/accounts:delete",e)}async function zs(n,e){return vn(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Pn(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jp(n,e=!1){const t=ie(n),s=await t.getIdToken(e),i=mo(s);w(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Pn(Zi(i.auth_time)),issuedAtTime:Pn(Zi(i.iat)),expirationTime:Pn(Zi(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Zi(n){return Number(n)*1e3}function mo(n){const[e,t,s]=n.split(".");if(e===void 0||t===void 0||s===void 0)return Os("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hs(t);return i?JSON.parse(i):(Os("Failed to decode base64 JWT payload"),null)}catch(i){return Os("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Wa(n){const e=mo(n);return w(e,"internal-error"),w(typeof e.exp<"u","internal-error"),w(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Gn(n,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof _t&&Gp(s)&&n.auth.currentUser===n&&await n.auth.signOut(),s}}function Gp({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class zp{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class kr{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Pn(this.lastLoginAt),this.creationTime=Pn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function qs(n){var e;const t=n.auth,s=await n.getIdToken(),i=await Gn(n,zs(t,{idToken:s}));w(i==null?void 0:i.users.length,t,"internal-error");const r=i.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Pc(r.providerUserInfo):[],a=Kp(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),h=l?c:!1,u={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new kr(r.createdAt,r.lastLoginAt),isAnonymous:h};Object.assign(n,u)}async function qp(n){const e=ie(n);await qs(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Kp(n,e){return[...n.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Pc(n){return n.map(e=>{var{providerId:t}=e,s=uo(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Yp(n,e){const t=await Dc(n,{},async()=>{const s=yn({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=n.config,o=await Oc(n,i,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();a["Content-Type"]="application/x-www-form-urlencoded";const l={method:"POST",headers:a,body:s};return n.emulatorConfig&&mn(n.emulatorConfig.host)&&(l.credentials="include"),Rc.fetch()(o,l)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Jp(n,e){return vn(n,"POST","/v2/accounts:revokeToken",_o(n,e))}/**
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
 */class qt{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){w(e.idToken,"internal-error"),w(typeof e.idToken<"u","internal-error"),w(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wa(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){w(e.length!==0,"internal-error");const t=Wa(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(w(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:i,expiresIn:r}=await Yp(e,t);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:i,expirationTime:r}=t,o=new qt;return s&&(w(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(w(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(w(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qt,this.toJSON())}_performRefresh(){return Pe("not implemented")}}/**
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
 */function Ke(n,e){w(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class me{constructor(e){var{uid:t,auth:s,stsTokenManager:i}=e,r=uo(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new zp(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new kr(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await Gn(this,this.stsTokenManager.getToken(this.auth,e));return w(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return jp(this,e)}reload(){return qp(this)}_assign(e){this!==e&&(w(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new me(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){w(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await qs(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ge(this.auth.app))return Promise.reject(It(this.auth));const e=await this.getIdToken();return await Gn(this,$p(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,i,r,o,a,l,c,h;const u=(s=t.displayName)!==null&&s!==void 0?s:void 0,d=(i=t.email)!==null&&i!==void 0?i:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,p=(o=t.photoURL)!==null&&o!==void 0?o:void 0,_=(a=t.tenantId)!==null&&a!==void 0?a:void 0,S=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,Q=(c=t.createdAt)!==null&&c!==void 0?c:void 0,le=(h=t.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:pe,emailVerified:Wt,isAnonymous:ka,providerData:zi,stsTokenManager:Aa}=t;w(pe&&Aa,e,"internal-error");const Hd=qt.fromJSON(this.name,Aa);w(typeof pe=="string",e,"internal-error"),Ke(u,e.name),Ke(d,e.name),w(typeof Wt=="boolean",e,"internal-error"),w(typeof ka=="boolean",e,"internal-error"),Ke(f,e.name),Ke(p,e.name),Ke(_,e.name),Ke(S,e.name),Ke(Q,e.name),Ke(le,e.name);const qi=new me({uid:pe,auth:e,email:d,emailVerified:Wt,displayName:u,isAnonymous:ka,photoURL:p,phoneNumber:f,tenantId:_,stsTokenManager:Hd,createdAt:Q,lastLoginAt:le});return zi&&Array.isArray(zi)&&(qi.providerData=zi.map($d=>Object.assign({},$d))),S&&(qi._redirectEventId=S),qi}static async _fromIdTokenResponse(e,t,s=!1){const i=new qt;i.updateFromServerResponse(t);const r=new me({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await qs(r),r}static async _fromGetAccountInfoResponse(e,t,s){const i=t.users[0];w(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Pc(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new qt;a.updateFromIdToken(s);const l=new me({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new kr(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Ha=new Map;function Le(n){Ve(n instanceof Function,"Expected a class definition");let e=Ha.get(n);return e?(Ve(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ha.set(n,e),e)}/**
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
 */class Lc{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Lc.type="NONE";const $a=Lc;/**
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
 */function Ps(n,e,t){return`firebase:${n}:${e}:${t}`}class Kt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Ps(this.userKey,i.apiKey,r),this.fullPersistenceKey=Ps("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await zs(this.auth,{idToken:e}).catch(()=>{});return t?me._fromGetAccountInfoResponse(this.auth,t,e):null}return me._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new Kt(Le($a),e,s);const i=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||Le($a);const o=Ps(s,e.config.apiKey,e.name);let a=null;for(const c of t)try{const h=await c._get(o);if(h){let u;if(typeof h=="string"){const d=await zs(e,{idToken:h}).catch(()=>{});if(!d)break;u=await me._fromGetAccountInfoResponse(e,d,h)}else u=me._fromJSON(e,h);c!==r&&(a=u),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Kt(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Kt(r,e,s))}}/**
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
 */function ja(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Fc(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mc(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Vc(e))return"Blackberry";if(Wc(e))return"Webos";if(xc(e))return"Safari";if((e.includes("chrome/")||Uc(e))&&!e.includes("edge/"))return"Chrome";if(Bc(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=n.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Mc(n=se()){return/firefox\//i.test(n)}function xc(n=se()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Uc(n=se()){return/crios\//i.test(n)}function Fc(n=se()){return/iemobile/i.test(n)}function Bc(n=se()){return/android/i.test(n)}function Vc(n=se()){return/blackberry/i.test(n)}function Wc(n=se()){return/webos/i.test(n)}function yo(n=se()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Qp(n=se()){var e;return yo(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Xp(){return lf()&&document.documentMode===10}function Hc(n=se()){return yo(n)||Bc(n)||Wc(n)||Vc(n)||/windows phone/i.test(n)||Fc(n)}/**
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
 */function $c(n,e=[]){let t;switch(n){case"Browser":t=ja(se());break;case"Worker":t=`${ja(se())}-${n}`;break;default:t=n}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${wn}/${s}`}/**
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
 */class Zp{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=t,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function eg(n,e={}){return vn(n,"GET","/v2/passwordPolicy",_o(n,e))}/**
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
 */const tg=6;class ng{constructor(e){var t,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:tg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class sg{constructor(e,t,s,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ga(this),this.idTokenSubscription=new Ga(this),this.beforeStateQueue=new Zp(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Nc,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Le(t)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await Kt.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await zs(this,{idToken:e}),s=await me._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(ge(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return w(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await qs(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Up()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ge(this.app))return Promise.reject(It(this));const t=e?ie(e):null;return t&&w(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&w(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ge(this.app)?Promise.reject(It(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ge(this.app)?Promise.reject(It(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Le(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await eg(this),t=new ng(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new ls("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await Jp(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Le(e)||this._popupRedirectResolver;w(t,this,"argument-error"),this.redirectPersistenceManager=await Kt.create(this,[Le(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,i){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(w(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return w(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$c(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(t["X-Firebase-AppCheck"]=i),t}async _getAppCheckToken(){var e;if(ge(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&Pp(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ei(n){return ie(n)}class Ga{constructor(e){this.auth=e,this.observer=null,this.addObserver=yf(t=>this.observer=t)}get next(){return w(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function ig(n){wo=n}function rg(n){return wo.loadJS(n)}function og(){return wo.gapiScript}function ag(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function lg(n,e){const t=ho(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),r=t.getOptions();if(kt(r,e??{}))return i;Ie(i,"already-initialized")}return t.initialize({options:e})}function cg(n,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(Le);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function hg(n,e,t){const s=Ei(n);w(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=jc(e),{host:o,port:a}=ug(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},h=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){w(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),w(kt(c,s.config.emulator)&&kt(h,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=h,s.settings.appVerificationDisabledForTesting=!0,mn(o)?(yc(`${r}//${o}${l}`),wc("Auth",!0)):dg()}function jc(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ug(n){const e=jc(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:za(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:za(o)}}}function za(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function dg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Gc{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Pe("not implemented")}_getIdTokenResponse(e){return Pe("not implemented")}_linkToIdToken(e,t){return Pe("not implemented")}_getReauthenticationResolver(e){return Pe("not implemented")}}/**
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
 */async function Yt(n,e){return Wp(n,"POST","/v1/accounts:signInWithIdp",_o(n,e))}/**
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
 */const fg="http://localhost";class Nt extends Gc{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ie("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=t,r=uo(t,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Nt(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Yt(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,Yt(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Yt(e,t)}buildRequest(){const e={requestUri:fg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=yn(t)}return e}}/**
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
 */class vo{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class hs extends vo{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Ye extends hs{constructor(){super("facebook.com")}static credential(e){return Nt._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch{return null}}}Ye.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ye.PROVIDER_ID="facebook.com";/**
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
 */class Oe extends hs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nt._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Oe.credentialFromTaggedObject(e)}static credentialFromError(e){return Oe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return Oe.credential(t,s)}catch{return null}}}Oe.GOOGLE_SIGN_IN_METHOD="google.com";Oe.PROVIDER_ID="google.com";/**
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
 */class Je extends hs{constructor(){super("github.com")}static credential(e){return Nt._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Je.credential(e.oauthAccessToken)}catch{return null}}}Je.GITHUB_SIGN_IN_METHOD="github.com";Je.PROVIDER_ID="github.com";/**
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
 */class Qe extends hs{constructor(){super("twitter.com")}static credential(e,t){return Nt._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return Qe.credential(t,s)}catch{return null}}}Qe.TWITTER_SIGN_IN_METHOD="twitter.com";Qe.PROVIDER_ID="twitter.com";/**
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
 */class sn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,i=!1){const r=await me._fromIdTokenResponse(e,s,i),o=qa(s);return new sn({user:r,providerId:o,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const i=qa(s);return new sn({user:e,providerId:i,_tokenResponse:s,operationType:t})}}function qa(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Ks extends _t{constructor(e,t,s,i){var r;super(t.code,t.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Ks.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,i){return new Ks(e,t,s,i)}}function zc(n,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Ks._fromErrorAndOperation(n,r,e,s):r})}async function pg(n,e,t=!1){const s=await Gn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return sn._forOperation(n,"link",s)}/**
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
 */async function gg(n,e,t=!1){const{auth:s}=n;if(ge(s.app))return Promise.reject(It(s));const i="reauthenticate";try{const r=await Gn(n,zc(s,i,e,n),t);w(r.idToken,s,"internal-error");const o=mo(r.idToken);w(o,s,"internal-error");const{sub:a}=o;return w(n.uid===a,s,"user-mismatch"),sn._forOperation(n,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Ie(s,"user-mismatch"),r}}/**
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
 */async function _g(n,e,t=!1){if(ge(n.app))return Promise.reject(It(n));const s="signIn",i=await zc(n,s,e),r=await sn._fromIdTokenResponse(n,s,i);return t||await n._updateCurrentUser(r.user),r}/**
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
 */function mg(n,e){return ie(n).setPersistence(e)}function yg(n,e,t,s){return ie(n).onIdTokenChanged(e,t,s)}function wg(n,e,t){return ie(n).beforeAuthStateChanged(e,t)}function vg(n,e,t,s){return ie(n).onAuthStateChanged(e,t,s)}function bg(n){return ie(n).signOut()}const Ys="__sak";/**
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
 */class qc{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Ys,"1"),this.storage.removeItem(Ys),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const Cg=1e3,Eg=10;class Kc extends qc{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Hc(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),i=this.localCache[t];s!==i&&e(t,i,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!t&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);Xp()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Eg):i()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},Cg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kc.type="LOCAL";const Yc=Kc;/**
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
 */class Jc extends qc{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Jc.type="SESSION";const Qc=Jc;/**
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
 */function Ig(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Ii{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const s=new Ii(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:i,data:r}=t.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await Ig(a);t.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ii.receivers=[];/**
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
 */function bo(n="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class Sg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=bo("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(u){const d=u;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(h),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(h),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Ce(){return window}function Tg(n){Ce().location.href=n}/**
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
 */function Xc(){return typeof Ce().WorkerGlobalScope<"u"&&typeof Ce().importScripts=="function"}async function kg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ag(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Ng(){return Xc()?self:null}/**
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
 */const Zc="firebaseLocalStorageDb",Rg=1,Js="firebaseLocalStorage",eh="fbase_key";class us{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Si(n,e){return n.transaction([Js],e?"readwrite":"readonly").objectStore(Js)}function Dg(){const n=indexedDB.deleteDatabase(Zc);return new us(n).toPromise()}function Ar(){const n=indexedDB.open(Zc,Rg);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const s=n.result;try{s.createObjectStore(Js,{keyPath:eh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const s=n.result;s.objectStoreNames.contains(Js)?e(s):(s.close(),await Dg(),e(await Ar()))})})}async function Ka(n,e,t){const s=Si(n,!0).put({[eh]:e,value:t});return new us(s).toPromise()}async function Og(n,e){const t=Si(n,!1).get(e),s=await new us(t).toPromise();return s===void 0?null:s.value}function Ya(n,e){const t=Si(n,!0).delete(e);return new us(t).toPromise()}const Pg=800,Lg=3;class th{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ar(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Lg)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xc()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ii._getInstance(Ng()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await kg(),!this.activeServiceWorker)return;this.sender=new Sg(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ag()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ar();return await Ka(e,Ys,"1"),await Ya(e,Ys),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Ka(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Og(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Ya(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Si(i,!1).getAll();return new us(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Pg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}th.type="LOCAL";const Mg=th;new cs(3e4,6e4);/**
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
 */function nh(n,e){return e?Le(e):(w(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Co extends Gc{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Yt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Yt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Yt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xg(n){return _g(n.auth,new Co(n),n.bypassAuthState)}function Ug(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),gg(t,new Co(n),n.bypassAuthState)}async function Fg(n){const{auth:e,user:t}=n;return w(t,e,"internal-error"),pg(t,new Co(n),n.bypassAuthState)}/**
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
 */class sh{constructor(e,t,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xg;case"linkViaPopup":case"linkViaRedirect":return Fg;case"reauthViaPopup":case"reauthViaRedirect":return Ug;default:Ie(this.auth,"internal-error")}}resolve(e){Ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ve(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Bg=new cs(2e3,1e4);async function Vg(n,e,t){if(ge(n.app))return Promise.reject(we(n,"operation-not-supported-in-this-environment"));const s=Ei(n);Lp(n,e,vo);const i=nh(s,t);return new vt(s,"signInViaPopup",e,i).executeNotNull()}class vt extends sh{constructor(e,t,s,i,r){super(e,t,i,r),this.provider=s,this.authWindow=null,this.pollId=null,vt.currentPopupAction&&vt.currentPopupAction.cancel(),vt.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return w(e,this.auth,"internal-error"),e}async onExecution(){Ve(this.filter.length===1,"Popup operations only handle one event");const e=bo();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(we(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(we(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,vt.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(we(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Bg.get())};e()}}vt.currentPopupAction=null;/**
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
 */const Wg="pendingRedirect",Ls=new Map;class Hg extends sh{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Ls.get(this.auth._key());if(!e){try{const s=await $g(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Ls.set(this.auth._key(),e)}return this.bypassAuthState||Ls.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function $g(n,e){const t=zg(e),s=Gg(n);if(!await s._isAvailable())return!1;const i=await s._get(t)==="true";return await s._remove(t),i}function jg(n,e){Ls.set(n._key(),e)}function Gg(n){return Le(n._redirectPersistence)}function zg(n){return Ps(Wg,n.config.apiKey,n.name)}async function qg(n,e,t=!1){if(ge(n.app))return Promise.reject(It(n));const s=Ei(n),i=nh(s,e),o=await new Hg(s,i,t).execute();return o&&!t&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Kg=600*1e3;class Yg{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Jg(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!ih(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(we(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Kg&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ja(e))}saveEventToCache(e){this.cachedEventUids.add(Ja(e)),this.lastProcessedEventTime=Date.now()}}function Ja(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ih({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Jg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ih(n);default:return!1}}/**
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
 */async function Qg(n,e={}){return vn(n,"GET","/v1/projects",e)}/**
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
 */const Xg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Zg=/^https?/;async function e_(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Qg(n);for(const t of e)try{if(t_(t))return}catch{}Ie(n,"unauthorized-domain")}function t_(n){const e=Tr(),{protocol:t,hostname:s}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&s===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===s}if(!Zg.test(t))return!1;if(Xg.test(n))return s===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const n_=new cs(3e4,6e4);function Qa(){const n=Ce().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function s_(n){return new Promise((e,t)=>{var s,i,r;function o(){Qa(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Qa(),t(we(n,"network-request-failed"))},timeout:n_.get()})}if(!((i=(s=Ce().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Ce().gapi)===null||r===void 0)&&r.load)o();else{const a=ag("iframefcb");return Ce()[a]=()=>{gapi.load?o():t(we(n,"network-request-failed"))},rg(`${og()}?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Ms=null,e})}let Ms=null;function i_(n){return Ms=Ms||s_(n),Ms}/**
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
 */const r_=new cs(5e3,15e3),o_="__/auth/iframe",a_="emulator/auth/iframe",l_={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},c_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function h_(n){const e=n.config;w(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?go(e,a_):`https://${n.config.authDomain}/${o_}`,s={apiKey:e.apiKey,appName:n.name,v:wn},i=c_.get(n.config.apiHost);i&&(s.eid=i);const r=n._getFrameworks();return r.length&&(s.fw=r.join(",")),`${t}?${yn(s).slice(1)}`}async function u_(n){const e=await i_(n),t=Ce().gapi;return w(t,n,"internal-error"),e.open({where:document.body,url:h_(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:l_,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=we(n,"network-request-failed"),a=Ce().setTimeout(()=>{r(o)},r_.get());function l(){Ce().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const d_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},f_=500,p_=600,g_="_blank",__="http://localhost";class Xa{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function m_(n,e,t,s=f_,i=p_){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},d_),{width:s.toString(),height:i.toString(),top:r,left:o}),c=se().toLowerCase();t&&(a=Uc(c)?g_:t),Mc(c)&&(e=e||__,l.scrollbars="yes");const h=Object.entries(l).reduce((d,[f,p])=>`${d}${f}=${p},`,"");if(Qp(c)&&a!=="_self")return y_(e||"",a),new Xa(null);const u=window.open(e||"",a,h);w(u,n,"popup-blocked");try{u.focus()}catch{}return new Xa(u)}function y_(n,e){const t=document.createElement("a");t.href=n,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const w_="__/auth/handler",v_="emulator/auth/handler",b_=encodeURIComponent("fac");async function Za(n,e,t,s,i,r){w(n.config.authDomain,n,"auth-domain-config-required"),w(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:s,v:wn,eventId:i};if(e instanceof vo){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",vr(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[h,u]of Object.entries({}))o[h]=u}if(e instanceof hs){const h=e.getScopes().filter(u=>u!=="");h.length>0&&(o.scopes=h.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const h of Object.keys(a))a[h]===void 0&&delete a[h];const l=await n._getAppCheckToken(),c=l?`#${b_}=${encodeURIComponent(l)}`:"";return`${C_(n)}?${yn(a).slice(1)}${c}`}function C_({config:n}){return n.emulator?go(n,v_):`https://${n.authDomain}/${w_}`}/**
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
 */const er="webStorageSupport";class E_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qc,this._completeRedirectFn=qg,this._overrideRedirectResult=jg}async _openPopup(e,t,s,i){var r;Ve((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Za(e,t,s,Tr(),i);return m_(e,o,bo())}async _openRedirect(e,t,s,i){await this._originValidation(e);const r=await Za(e,t,s,Tr(),i);return Tg(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:r}=this.eventManagers[t];return i?Promise.resolve(i):(Ve(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await u_(e),s=new Yg(e);return t.register("authEvent",i=>(w(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(er,{type:er},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[er];o!==void 0&&t(!!o),Ie(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=e_(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Hc()||xc()||yo()}}const I_=E_;var el="@firebase/auth",tl="1.10.8";/**
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
 */class S_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){w(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function T_(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function k_(n){nn(new At("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;w(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$c(n)},c=new sg(s,i,r,l);return cg(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),nn(new At("auth-internal",e=>{const t=Ei(e.getProvider("auth").getImmediate());return(s=>new S_(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),rt(el,tl,T_(n)),rt(el,tl,"esm2017")}/**
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
 */const A_=300,N_=mc("authIdTokenMaxAge")||A_;let nl=null;const R_=n=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>N_)return;const i=t==null?void 0:t.token;nl!==i&&(nl=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function D_(n=Sc()){const e=ho(n,"auth");if(e.isInitialized())return e.getImmediate();const t=lg(n,{popupRedirectResolver:I_,persistence:[Mg,Yc,Qc]}),s=mc("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=R_(r.toString());wg(t,o,()=>o(t.currentUser)),yg(t,a=>o(a))}}const i=gc("auth");return i&&hg(t,`http://${i}`),t}function O_(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}ig({loadJS(n){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",n),s.onload=e,s.onerror=i=>{const r=we("internal-error");r.customData=i,t(r)},s.type="text/javascript",s.charset="UTF-8",O_().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});k_("Browser");var sl={};const il="@firebase/database",rl="1.0.20";/**
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
 */let rh="";function P_(n){rh=n}/**
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
 */class L_{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),W(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:$n(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class M_{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ae(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const oh=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new L_(e)}}catch{}return new M_},bt=oh("localStorage"),x_=oh("sessionStorage");/**
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
 */const Jt=new lo("@firebase/database"),U_=(function(){let n=1;return function(){return n++}})(),ah=function(n){const e=bf(n),t=new mf;t.update(e);const s=t.digest();return ro.encodeByteArray(s)},ds=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=ds.apply(null,s):typeof s=="object"?e+=W(s):e+=s,e+=" "}return e};let Ln=null,ol=!0;const F_=function(n,e){g(!0,"Can't turn on custom loggers persistently."),Jt.logLevel=R.VERBOSE,Ln=Jt.log.bind(Jt)},K=function(...n){if(ol===!0&&(ol=!1,Ln===null&&x_.get("logging_enabled")===!0&&F_()),Ln){const e=ds.apply(null,n);Ln(e)}},fs=function(n){return function(...e){K(n,...e)}},Nr=function(...n){const e="FIREBASE INTERNAL ERROR: "+ds(...n);Jt.error(e)},We=function(...n){const e=`FIREBASE FATAL ERROR: ${ds(...n)}`;throw Jt.error(e),new Error(e)},ne=function(...n){const e="FIREBASE WARNING: "+ds(...n);Jt.warn(e)},B_=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ne("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Eo=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},V_=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},rn="[MIN_NAME]",Rt="[MAX_NAME]",Ut=function(n,e){if(n===e)return 0;if(n===rn||e===Rt)return-1;if(e===rn||n===Rt)return 1;{const t=al(n),s=al(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},W_=function(n,e){return n===e?0:n<e?-1:1},An=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+W(e))},Io=function(n){if(typeof n!="object"||n===null)return W(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=W(e[s]),t+=":",t+=Io(n[e[s]]);return t+="}",t},lh=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function J(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const ch=function(n){g(!Eo(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let u="";for(l=0;l<64;l+=8){let d=parseInt(h.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),u=u+d}return u.toLowerCase()},H_=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$_=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function j_(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const G_=new RegExp("^-?(0*)\\d{1,10}$"),z_=-2147483648,q_=2147483647,al=function(n){if(G_.test(n)){const e=Number(n);if(e>=z_&&e<=q_)return e}return null},bn=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw ne("Exception was thrown by user callback.",t),e},Math.floor(0))}},K_=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Mn=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Y_{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ge(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ne(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class J_{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(K("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ne(e)}}class xs{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}xs.OWNER="owner";/**
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
 */const So="5",hh="v",uh="s",dh="r",fh="f",ph=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,gh="ls",_h="p",Rr="ac",mh="websocket",yh="long_polling";/**
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
 */class wh{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=bt.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&bt.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Q_(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function vh(n,e,t){g(typeof e=="string","typeof type must == string"),g(typeof t=="object","typeof params must == object");let s;if(e===mh)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===yh)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Q_(n)&&(t.ns=n.namespace);const i=[];return J(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class X_{constructor(){this.counters_={}}incrementCounter(e,t=1){Ae(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Yd(this.counters_)}}/**
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
 */const tr={},nr={};function To(n){const e=n.toString();return tr[e]||(tr[e]=new X_),tr[e]}function Z_(n,e){const t=n.toString();return nr[t]||(nr[t]=e()),nr[t]}/**
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
 */class em{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&bn(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const ll="start",tm="close",nm="pLPCommand",sm="pRTLPCB",bh="id",Ch="pw",Eh="ser",im="cb",rm="seg",om="ts",am="d",lm="dframe",Ih=1870,Sh=30,cm=Ih-Sh,hm=25e3,um=3e4;class Gt{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=fs(e),this.stats_=To(t),this.urlFn=l=>(this.appCheckToken&&(l[Rr]=this.appCheckToken),vh(t,yh,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new em(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(um)),V_(()=>{if(this.isClosed_)return;this.scriptTagHolder=new ko((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ll)this.id=a,this.password=l;else if(o===tm)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[ll]="t",s[Eh]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[im]=this.scriptTagHolder.uniqueCallbackIdentifier),s[hh]=So,this.transportSessionId&&(s[uh]=this.transportSessionId),this.lastSessionId&&(s[gh]=this.lastSessionId),this.applicationId&&(s[_h]=this.applicationId),this.appCheckToken&&(s[Rr]=this.appCheckToken),typeof location<"u"&&location.hostname&&ph.test(location.hostname)&&(s[dh]=fh);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Gt.forceAllow_=!0}static forceDisallow(){Gt.forceDisallow_=!0}static isAvailable(){return Gt.forceAllow_?!0:!Gt.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!H_()&&!$_()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=W(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=fc(t),i=lh(s,cm);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[lm]="t",s[bh]=e,s[Ch]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=W(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class ko{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=U_(),window[nm+this.uniqueCallbackIdentifier]=e,window[sm+this.uniqueCallbackIdentifier]=t,this.myIFrame=ko.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){K("frame writing exception"),a.stack&&K(a.stack),K(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||K("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[bh]=this.myID,e[Ch]=this.myPW,e[Eh]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Sh+s.length<=Ih;){const o=this.pendingSegs.shift();s=s+"&"+rm+i+"="+o.seg+"&"+om+i+"="+o.ts+"&"+am+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(hm)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{K("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const dm=16384,fm=45e3;let Qs=null;typeof MozWebSocket<"u"?Qs=MozWebSocket:typeof WebSocket<"u"&&(Qs=WebSocket);class _e{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=fs(this.connId),this.stats_=To(t),this.connURL=_e.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[hh]=So,typeof location<"u"&&location.hostname&&ph.test(location.hostname)&&(o[dh]=fh),t&&(o[uh]=t),s&&(o[gh]=s),i&&(o[Rr]=i),r&&(o[_h]=r),vh(e,mh,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,bt.set("previous_websocket_failure",!0);try{let s;cf(),this.mySock=new Qs(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){_e.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Qs!==null&&!_e.forceDisallow_}static previouslyFailed(){return bt.isInMemoryStorage||bt.get("previous_websocket_failure")===!0}markConnectionHealthy(){bt.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=$n(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(g(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=W(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=lh(t,dm);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(fm))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}_e.responsesRequiredToBeHealthy=2;_e.healthyTimeout=3e4;/**
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
 */class zn{static get ALL_TRANSPORTS(){return[Gt,_e]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=_e&&_e.isAvailable();let s=t&&!_e.previouslyFailed();if(e.webSocketOnly&&(t||ne("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[_e];else{const i=this.transports_=[];for(const r of zn.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);zn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}zn.globalTransportInitialized_=!1;/**
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
 */const pm=6e4,gm=5e3,_m=10*1024,mm=100*1024,sr="t",cl="d",ym="s",hl="r",wm="e",ul="o",dl="a",fl="n",pl="p",vm="h";class bm{constructor(e,t,s,i,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=fs("c:"+this.id+":"),this.transportManager_=new zn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Mn(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>mm?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>_m?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(sr in e){const t=e[sr];t===dl?this.upgradeIfSecondaryHealthy_():t===hl?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===ul&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=An("t",e),s=An("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:pl,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:dl,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fl,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=An("t",e),s=An("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=An(sr,e);if(cl in e){const s=e[cl];if(t===vm){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===fl){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===ym?this.onConnectionShutdown_(s):t===hl?this.onReset_(s):t===wm?Nr("Server Error: "+s):t===ul?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Nr("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),So!==s&&ne("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Mn(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(pm))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Mn(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(gm))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:pl,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(bt.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class Th{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class kh{constructor(e){this.allowedEvents_=e,this.listeners_={},g(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){g(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class Xs extends kh{static getInstance(){return new Xs}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!ao()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return g(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const gl=32,_l=768;class D{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function N(){return new D("")}function C(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function ct(n){return n.pieces_.length-n.pieceNum_}function P(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new D(n.pieces_,e)}function Ao(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function Cm(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function qn(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Ah(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new D(e,0)}function U(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof D)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new D(t,0)}function I(n){return n.pieceNum_>=n.pieces_.length}function te(n,e){const t=C(n),s=C(e);if(t===null)return e;if(t===s)return te(P(n),P(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Em(n,e){const t=qn(n,0),s=qn(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Ut(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function No(n,e){if(ct(n)!==ct(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function de(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(ct(n)>ct(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class Im{constructor(e,t){this.errorPrefix_=t,this.parts_=qn(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ci(this.parts_[s]);Nh(this)}}function Sm(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Ci(e),Nh(n)}function Tm(n){const e=n.parts_.pop();n.byteLength_-=Ci(e),n.parts_.length>0&&(n.byteLength_-=1)}function Nh(n){if(n.byteLength_>_l)throw new Error(n.errorPrefix_+"has a key path longer than "+_l+" bytes ("+n.byteLength_+").");if(n.parts_.length>gl)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+gl+") or object contains a cycle "+wt(n))}function wt(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Ro extends kh{static getInstance(){return new Ro}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return g(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Nn=1e3,km=300*1e3,ml=30*1e3,Am=1.3,Nm=3e4,Rm="server_kill",yl=3;class Ue extends Th{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Ue.nextPersistentConnectionId_++,this.log_=fs("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Nn,this.maxReconnectDelay_=km,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ro.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Xs.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(W(r)),g(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new as,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),g(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Ue.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ae(e,"w")){const s=tn(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();ne(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||_f(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ml)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=gf(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),g(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+W(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Nr("Unrecognized action received from server: "+W(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){g(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Nn,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Nn,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Nm&&(this.reconnectDelay_=Nn),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Am)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ue.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(u){g(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(u)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[u,d]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?K("getToken() completed but was canceled"):(K("getToken() completed. Creating connection."),this.authToken_=u&&u.accessToken,this.appCheckToken_=d&&d.token,a=new bm(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{ne(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(Rm)},r))}catch(u){this.log_("Failed to get token: "+u),o||(this.repoInfo_.nodeAdmin&&ne(u),l())}}}interrupt(e){K("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){K("Resuming connection for reason: "+e),delete this.interruptReasons_[e],vr(this.interruptReasons_)&&(this.reconnectDelay_=Nn,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Io(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new D(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){K("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=yl&&(this.reconnectDelay_=ml,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){K("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=yl&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+rh.replace(/\./g,"-")]=1,ao()?e["framework.cordova"]=1:vc()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Xs.getInstance().currentlyOnline();return vr(this.interruptReasons_)&&e}}Ue.nextPersistentConnectionId_=0;Ue.nextConnectionId_=0;/**
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
 */class E{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new E(e,t)}}/**
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
 */class Ti{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new E(rn,e),i=new E(rn,t);return this.compare(s,i)!==0}minPost(){return E.MIN}}/**
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
 */let ks;class Rh extends Ti{static get __EMPTY_NODE(){return ks}static set __EMPTY_NODE(e){ks=e}compare(e,t){return Ut(e.name,t.name)}isDefinedOn(e){throw _n("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return E.MIN}maxPost(){return new E(Rt,ks)}makePost(e,t){return g(typeof e=="string","KeyIndex indexValue must always be a string."),new E(e,ks)}toString(){return".key"}}const Qt=new Rh;/**
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
 */class As{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class z{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??z.RED,this.left=i??re.EMPTY_NODE,this.right=r??re.EMPTY_NODE}copy(e,t,s,i,r){return new z(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return re.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return re.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,z.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,z.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}z.RED=!0;z.BLACK=!1;class Dm{copy(e,t,s,i,r){return this}insert(e,t,s){return new z(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class re{constructor(e,t=re.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new re(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,z.BLACK,null,null))}remove(e){return new re(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,z.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new As(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new As(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new As(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new As(this.root_,null,this.comparator_,!0,e)}}re.EMPTY_NODE=new Dm;/**
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
 */function Om(n,e){return Ut(n.name,e.name)}function Do(n,e){return Ut(n,e)}/**
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
 */let Dr;function Pm(n){Dr=n}const Dh=function(n){return typeof n=="number"?"number:"+ch(n):"string:"+n},Oh=function(n){if(n.isLeafNode()){const e=n.val();g(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ae(e,".sv"),"Priority must be a string or number.")}else g(n===Dr||n.isEmpty(),"priority of unexpected type.");g(n===Dr||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let wl;class G{static set __childrenNodeConstructor(e){wl=e}static get __childrenNodeConstructor(){return wl}constructor(e,t=G.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,g(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Oh(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new G(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return I(e)?this:C(e)===".priority"?this.priorityNode_:G.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:G.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=C(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(g(s!==".priority"||ct(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,G.__childrenNodeConstructor.EMPTY_NODE.updateChild(P(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Dh(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=ch(this.value_):e+=this.value_,this.lazyHash_=ah(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===G.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof G.__childrenNodeConstructor?-1:(g(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=G.VALUE_TYPE_ORDER.indexOf(t),r=G.VALUE_TYPE_ORDER.indexOf(s);return g(i>=0,"Unknown leaf type: "+t),g(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}G.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Ph,Lh;function Lm(n){Ph=n}function Mm(n){Lh=n}class xm extends Ti{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Ut(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return E.MIN}maxPost(){return new E(Rt,new G("[PRIORITY-POST]",Lh))}makePost(e,t){const s=Ph(e);return new E(t,new G("[PRIORITY-POST]",s))}toString(){return".priority"}}const F=new xm;/**
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
 */const Um=Math.log(2);class Fm{constructor(e){const t=r=>parseInt(Math.log(r)/Um,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Zs=function(n,e,t,s){n.sort(e);const i=function(l,c){const h=c-l;let u,d;if(h===0)return null;if(h===1)return u=n[l],d=t?t(u):u,new z(d,u.node,z.BLACK,null,null);{const f=parseInt(h/2,10)+l,p=i(l,f),_=i(f+1,c);return u=n[f],d=t?t(u):u,new z(d,u.node,z.BLACK,p,_)}},r=function(l){let c=null,h=null,u=n.length;const d=function(p,_){const S=u-p,Q=u;u-=p;const le=i(S+1,Q),pe=n[S],Wt=t?t(pe):pe;f(new z(Wt,pe.node,_,null,le))},f=function(p){c?(c.left=p,c=p):(h=p,c=p)};for(let p=0;p<l.count;++p){const _=l.nextBitIsOne(),S=Math.pow(2,l.count-(p+1));_?d(S,z.BLACK):(d(S,z.BLACK),d(S,z.RED))}return h},o=new Fm(n.length),a=r(o);return new re(s||e,a)};/**
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
 */let ir;const Ht={};class Me{static get Default(){return g(Ht&&F,"ChildrenNode.ts has not been loaded"),ir=ir||new Me({".priority":Ht},{".priority":F}),ir}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=tn(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof re?t:null}hasIndex(e){return Ae(this.indexSet_,e.toString())}addIndex(e,t){g(e!==Qt,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(E.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Zs(s,e.getCompare()):a=Ht;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const h=Object.assign({},this.indexes_);return h[l]=a,new Me(h,c)}addToIndexes(e,t){const s=$s(this.indexes_,(i,r)=>{const o=tn(this.indexSet_,r);if(g(o,"Missing index implementation for "+r),i===Ht)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(E.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Zs(a,o.getCompare())}else return Ht;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new E(e.name,a))),l.insert(e,e.node)}});return new Me(s,this.indexSet_)}removeFromIndexes(e,t){const s=$s(this.indexes_,i=>{if(i===Ht)return i;{const r=t.get(e.name);return r?i.remove(new E(e.name,r)):i}});return new Me(s,this.indexSet_)}}/**
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
 */let Rn;class y{static get EMPTY_NODE(){return Rn||(Rn=new y(new re(Do),null,Me.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Oh(this.priorityNode_),this.children_.isEmpty()&&g(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Rn}updatePriority(e){return this.children_.isEmpty()?this:new y(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Rn:t}}getChild(e){const t=C(e);return t===null?this:this.getImmediateChild(t).getChild(P(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(g(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new E(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Rn:this.priorityNode_;return new y(i,o,r)}}updateChild(e,t){const s=C(e);if(s===null)return t;{g(C(e)!==".priority"||ct(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(P(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(F,(o,a)=>{t[o]=a.val(e),s++,r&&y.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Dh(this.getPriority().val())+":"),this.forEachChild(F,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":ah(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new E(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new E(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new E(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,E.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ps?-1:0}withIndex(e){if(e===Qt||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new y(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Qt||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(F),i=t.getIterator(F);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Qt?null:this.indexMap_.get(e.toString())}}y.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Bm extends y{constructor(){super(new re(Do),y.EMPTY_NODE,Me.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return y.EMPTY_NODE}isEmpty(){return!1}}const ps=new Bm;Object.defineProperties(E,{MIN:{value:new E(rn,y.EMPTY_NODE)},MAX:{value:new E(Rt,ps)}});Rh.__EMPTY_NODE=y.EMPTY_NODE;G.__childrenNodeConstructor=y;Pm(ps);Mm(ps);/**
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
 */const Vm=!0;function V(n,e=null){if(n===null)return y.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),g(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new G(t,V(e))}if(!(n instanceof Array)&&Vm){const t=[];let s=!1;if(J(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=V(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new E(o,l)))}}),t.length===0)return y.EMPTY_NODE;const r=Zs(t,Om,o=>o.name,Do);if(s){const o=Zs(t,F.getCompare());return new y(r,V(e),new Me({".priority":o},{".priority":F}))}else return new y(r,V(e),Me.Default)}else{let t=y.EMPTY_NODE;return J(n,(s,i)=>{if(Ae(n,s)&&s.substring(0,1)!=="."){const r=V(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(V(e))}}Lm(V);/**
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
 */class Wm extends Ti{constructor(e){super(),this.indexPath_=e,g(!I(e)&&C(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Ut(e.name,t.name):r}makePost(e,t){const s=V(e),i=y.EMPTY_NODE.updateChild(this.indexPath_,s);return new E(t,i)}maxPost(){const e=y.EMPTY_NODE.updateChild(this.indexPath_,ps);return new E(Rt,e)}toString(){return qn(this.indexPath_,0).join("/")}}/**
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
 */class Hm extends Ti{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ut(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return E.MIN}maxPost(){return E.MAX}makePost(e,t){const s=V(e);return new E(t,s)}toString(){return".value"}}const $m=new Hm;/**
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
 */function Mh(n){return{type:"value",snapshotNode:n}}function on(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function Kn(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function Yn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function jm(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Oo{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){g(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(Kn(t,a)):g(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(on(t,s)):o.trackChildChange(Yn(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(F,(i,r)=>{t.hasChild(i)||s.trackChildChange(Kn(i,r))}),t.isLeafNode()||t.forEachChild(F,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Yn(i,r,o))}else s.trackChildChange(on(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?y.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Jn{constructor(e){this.indexedFilter_=new Oo(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Jn.getStartPost_(e),this.endPost_=Jn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new E(t,s))||(s=y.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=y.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(y.EMPTY_NODE);const r=this;return t.forEachChild(F,(o,a)=>{r.matches(new E(o,a))||(i=i.updateImmediateChild(o,y.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class Gm{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Jn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new E(t,s))||(s=y.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=y.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=y.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(y.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,y.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const u=this.index_.getCompare();o=(d,f)=>u(f,d)}else o=this.index_.getCompare();const a=e;g(a.numChildren()===this.limit_,"");const l=new E(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const u=a.getImmediateChild(t);let d=i.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=i.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(h&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(Yn(t,s,u)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(Kn(t,u));const _=a.updateImmediateChild(t,y.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(on(d.name,d.node)),_.updateImmediateChild(d.name,d.node)):_}}else return s.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Kn(c.name,c.node)),r.trackChildChange(on(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,y.EMPTY_NODE)):e}}/**
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
 */class Po{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=F}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return g(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return g(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:rn}hasEnd(){return this.endSet_}getIndexEndValue(){return g(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return g(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Rt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return g(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===F}copy(){const e=new Po;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function zm(n){return n.loadsAllData()?new Oo(n.getIndex()):n.hasLimit()?new Gm(n):new Jn(n)}function vl(n){const e={};if(n.isDefault())return e;let t;if(n.index_===F?t="$priority":n.index_===$m?t="$value":n.index_===Qt?t="$key":(g(n.index_ instanceof Wm,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=W(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=W(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+W(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=W(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+W(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function bl(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==F&&(e.i=n.index_.toString()),e}/**
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
 */class ei extends Th{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(g(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=fs("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ei.getListenId_(e,s),a={};this.listens_[o]=a;const l=vl(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let u=h;if(c===404&&(u=null,c=null),c===null&&this.onDataUpdate_(r,u,!1,s),tn(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",i(d,null)}})}unlisten(e,t){const s=ei.getListenId_(e,t);delete this.listens_[s]}get(e){const t=vl(e._queryParams),s=e._path.toString(),i=new as;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+yn(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=$n(a.responseText)}catch{ne("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ne("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class qm{constructor(){this.rootNode_=y.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function ti(){return{value:null,children:new Map}}function xh(n,e,t){if(I(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=C(e);n.children.has(s)||n.children.set(s,ti());const i=n.children.get(s);e=P(e),xh(i,e,t)}}function Or(n,e,t){n.value!==null?t(e,n.value):Km(n,(s,i)=>{const r=new D(e.toString()+"/"+s);Or(i,r,t)})}function Km(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Ym{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&J(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Cl=10*1e3,Jm=30*1e3,Qm=300*1e3;class Xm{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ym(e);const s=Cl+(Jm-Cl)*Math.random();Mn(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;J(e,(i,r)=>{r>0&&Ae(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Mn(this.reportStats_.bind(this),Math.floor(Math.random()*2*Qm))}}/**
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
 */var ye;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ye||(ye={}));function Lo(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Mo(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function xo(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class ni{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=ye.ACK_USER_WRITE,this.source=Lo()}operationForChild(e){if(I(this.path)){if(this.affectedTree.value!=null)return g(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new D(e));return new ni(N(),t,this.revert)}}else return g(C(this.path)===e,"operationForChild called for unrelated child."),new ni(P(this.path),this.affectedTree,this.revert)}}/**
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
 */class Qn{constructor(e,t){this.source=e,this.path=t,this.type=ye.LISTEN_COMPLETE}operationForChild(e){return I(this.path)?new Qn(this.source,N()):new Qn(this.source,P(this.path))}}/**
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
 */class Dt{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=ye.OVERWRITE}operationForChild(e){return I(this.path)?new Dt(this.source,N(),this.snap.getImmediateChild(e)):new Dt(this.source,P(this.path),this.snap)}}/**
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
 */class an{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=ye.MERGE}operationForChild(e){if(I(this.path)){const t=this.children.subtree(new D(e));return t.isEmpty()?null:t.value?new Dt(this.source,N(),t.value):new an(this.source,N(),t)}else return g(C(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new an(this.source,P(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ht{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(I(e))return this.isFullyInitialized()&&!this.filtered_;const t=C(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Zm{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function ey(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(jm(o.childName,o.snapshotNode))}),Dn(n,i,"child_removed",e,s,t),Dn(n,i,"child_added",e,s,t),Dn(n,i,"child_moved",r,s,t),Dn(n,i,"child_changed",e,s,t),Dn(n,i,"value",e,s,t),i}function Dn(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>ny(n,a,l)),o.forEach(a=>{const l=ty(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function ty(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function ny(n,e,t){if(e.childName==null||t.childName==null)throw _n("Should only compare child_ events.");const s=new E(e.childName,e.snapshotNode),i=new E(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function ki(n,e){return{eventCache:n,serverCache:e}}function xn(n,e,t,s){return ki(new ht(e,t,s),n.serverCache)}function Uh(n,e,t,s){return ki(n.eventCache,new ht(e,t,s))}function si(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function Ot(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let rr;const sy=()=>(rr||(rr=new re(W_)),rr);class O{static fromObject(e){let t=new O(null);return J(e,(s,i)=>{t=t.set(new D(s),i)}),t}constructor(e,t=sy()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:N(),value:this.value};if(I(e))return null;{const s=C(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(P(e),t);return r!=null?{path:U(new D(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(I(e))return this;{const t=C(e),s=this.children.get(t);return s!==null?s.subtree(P(e)):new O(null)}}set(e,t){if(I(e))return new O(t,this.children);{const s=C(e),r=(this.children.get(s)||new O(null)).set(P(e),t),o=this.children.insert(s,r);return new O(this.value,o)}}remove(e){if(I(e))return this.children.isEmpty()?new O(null):new O(null,this.children);{const t=C(e),s=this.children.get(t);if(s){const i=s.remove(P(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new O(null):new O(this.value,r)}else return this}}get(e){if(I(e))return this.value;{const t=C(e),s=this.children.get(t);return s?s.get(P(e)):null}}setTree(e,t){if(I(e))return t;{const s=C(e),r=(this.children.get(s)||new O(null)).setTree(P(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new O(this.value,o)}}fold(e){return this.fold_(N(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(U(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,N(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(I(e))return null;{const r=C(e),o=this.children.get(r);return o?o.findOnPath_(P(e),U(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,N(),t)}foreachOnPath_(e,t,s){if(I(e))return this;{this.value&&s(t,this.value);const i=C(e),r=this.children.get(i);return r?r.foreachOnPath_(P(e),U(t,i),s):new O(null)}}foreach(e){this.foreach_(N(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(U(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class ve{constructor(e){this.writeTree_=e}static empty(){return new ve(new O(null))}}function Un(n,e,t){if(I(e))return new ve(new O(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=te(i,e);return r=r.updateChild(o,t),new ve(n.writeTree_.set(i,r))}else{const i=new O(t),r=n.writeTree_.setTree(e,i);return new ve(r)}}}function Pr(n,e,t){let s=n;return J(t,(i,r)=>{s=Un(s,U(e,i),r)}),s}function El(n,e){if(I(e))return ve.empty();{const t=n.writeTree_.setTree(e,new O(null));return new ve(t)}}function Lr(n,e){return Ft(n,e)!=null}function Ft(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(te(t.path,e)):null}function Il(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(F,(s,i)=>{e.push(new E(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new E(s,i.value))}),e}function ot(n,e){if(I(e))return n;{const t=Ft(n,e);return t!=null?new ve(new O(t)):new ve(n.writeTree_.subtree(e))}}function Mr(n){return n.writeTree_.isEmpty()}function ln(n,e){return Fh(N(),n.writeTree_,e)}function Fh(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(g(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=Fh(U(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(U(n,".priority"),s)),t}}/**
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
 */function Ai(n,e){return Hh(e,n)}function iy(n,e,t,s,i){g(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Un(n.visibleWrites,e,t)),n.lastWriteId=s}function ry(n,e,t,s){g(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=Pr(n.visibleWrites,e,t),n.lastWriteId=s}function oy(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function ay(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);g(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&ly(a,s.path)?i=!1:de(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return cy(n),!0;if(s.snap)n.visibleWrites=El(n.visibleWrites,s.path);else{const a=s.children;J(a,l=>{n.visibleWrites=El(n.visibleWrites,U(s.path,l))})}return!0}else return!1}function ly(n,e){if(n.snap)return de(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&de(U(n.path,t),e))return!0;return!1}function cy(n){n.visibleWrites=Bh(n.allWrites,hy,N()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function hy(n){return n.visible}function Bh(n,e,t){let s=ve.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)de(t,o)?(a=te(t,o),s=Un(s,a,r.snap)):de(o,t)&&(a=te(o,t),s=Un(s,N(),r.snap.getChild(a)));else if(r.children){if(de(t,o))a=te(t,o),s=Pr(s,a,r.children);else if(de(o,t))if(a=te(o,t),I(a))s=Pr(s,N(),r.children);else{const l=tn(r.children,C(a));if(l){const c=l.getChild(P(a));s=Un(s,N(),c)}}}else throw _n("WriteRecord should have .snap or .children")}}return s}function Vh(n,e,t,s,i){if(!s&&!i){const r=Ft(n.visibleWrites,e);if(r!=null)return r;{const o=ot(n.visibleWrites,e);if(Mr(o))return t;if(t==null&&!Lr(o,N()))return null;{const a=t||y.EMPTY_NODE;return ln(o,a)}}}else{const r=ot(n.visibleWrites,e);if(!i&&Mr(r))return t;if(!i&&t==null&&!Lr(r,N()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(de(c.path,e)||de(e,c.path))},a=Bh(n.allWrites,o,e),l=t||y.EMPTY_NODE;return ln(a,l)}}}function uy(n,e,t){let s=y.EMPTY_NODE;const i=Ft(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(F,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=ot(n.visibleWrites,e);return t.forEachChild(F,(o,a)=>{const l=ln(ot(r,new D(o)),a);s=s.updateImmediateChild(o,l)}),Il(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=ot(n.visibleWrites,e);return Il(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function dy(n,e,t,s,i){g(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=U(e,t);if(Lr(n.visibleWrites,r))return null;{const o=ot(n.visibleWrites,r);return Mr(o)?i.getChild(t):ln(o,i.getChild(t))}}function fy(n,e,t,s){const i=U(e,t),r=Ft(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=ot(n.visibleWrites,i);return ln(o,s.getNode().getImmediateChild(t))}else return null}function py(n,e){return Ft(n.visibleWrites,e)}function gy(n,e,t,s,i,r,o){let a;const l=ot(n.visibleWrites,e),c=Ft(l,N());if(c!=null)a=c;else if(t!=null)a=ln(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],u=o.getCompare(),d=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=d.getNext();for(;f&&h.length<i;)u(f,s)!==0&&h.push(f),f=d.getNext();return h}else return[]}function _y(){return{visibleWrites:ve.empty(),allWrites:[],lastWriteId:-1}}function ii(n,e,t,s){return Vh(n.writeTree,n.treePath,e,t,s)}function Uo(n,e){return uy(n.writeTree,n.treePath,e)}function Sl(n,e,t,s){return dy(n.writeTree,n.treePath,e,t,s)}function ri(n,e){return py(n.writeTree,U(n.treePath,e))}function my(n,e,t,s,i,r){return gy(n.writeTree,n.treePath,e,t,s,i,r)}function Fo(n,e,t){return fy(n.writeTree,n.treePath,e,t)}function Wh(n,e){return Hh(U(n.treePath,e),n.writeTree)}function Hh(n,e){return{treePath:n,writeTree:e}}/**
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
 */class yy{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;g(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),g(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,Yn(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,Kn(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,on(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,Yn(s,e.snapshotNode,i.oldSnap));else throw _n("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class wy{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const $h=new wy;class Bo{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ht(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Fo(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Ot(this.viewCache_),r=my(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function vy(n){return{filter:n}}function by(n,e){g(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),g(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function Cy(n,e,t,s,i){const r=new yy;let o,a;if(t.type===ye.OVERWRITE){const c=t;c.source.fromUser?o=xr(n,e,c.path,c.snap,s,i,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!I(c.path),o=oi(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===ye.MERGE){const c=t;c.source.fromUser?o=Iy(n,e,c.path,c.children,s,i,r):(g(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ur(n,e,c.path,c.children,s,i,a,r))}else if(t.type===ye.ACK_USER_WRITE){const c=t;c.revert?o=ky(n,e,c.path,s,i,r):o=Sy(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===ye.LISTEN_COMPLETE)o=Ty(n,e,t.path,s,r);else throw _n("Unknown operation type: "+t.type);const l=r.getChanges();return Ey(e,o,l),{viewCache:o,changes:l}}function Ey(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=si(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(Mh(si(e)))}}function jh(n,e,t,s,i,r){const o=e.eventCache;if(ri(s,t)!=null)return e;{let a,l;if(I(t))if(g(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=Ot(e),h=c instanceof y?c:y.EMPTY_NODE,u=Uo(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),u,r)}else{const c=ii(s,Ot(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=C(t);if(c===".priority"){g(ct(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const u=Sl(s,t,h,l);u!=null?a=n.filter.updatePriority(h,u):a=o.getNode()}else{const h=P(t);let u;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=Sl(s,t,o.getNode(),l);d!=null?u=o.getNode().getImmediateChild(c).updateChild(h,d):u=o.getNode().getImmediateChild(c)}else u=Fo(s,c,e.serverCache);u!=null?a=n.filter.updateChild(o.getNode(),c,u,h,i,r):a=o.getNode()}}return xn(e,a,o.isFullyInitialized()||I(t),n.filter.filtersNodes())}}function oi(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(I(t))c=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=h.updateFullNode(l.getNode(),f,null)}else{const f=C(t);if(!l.isCompleteForPath(t)&&ct(t)>1)return e;const p=P(t),S=l.getNode().getImmediateChild(f).updateChild(p,s);f===".priority"?c=h.updatePriority(l.getNode(),S):c=h.updateChild(l.getNode(),f,S,p,$h,null)}const u=Uh(e,c,l.isFullyInitialized()||I(t),h.filtersNodes()),d=new Bo(i,u,r);return jh(n,u,t,i,d,a)}function xr(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const h=new Bo(i,e,r);if(I(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=xn(e,c,!0,n.filter.filtersNodes());else{const u=C(t);if(u===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=xn(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=P(t),f=a.getNode().getImmediateChild(u);let p;if(I(d))p=s;else{const _=h.getCompleteChild(u);_!=null?Ao(d)===".priority"&&_.getChild(Ah(d)).isEmpty()?p=_:p=_.updateChild(d,s):p=y.EMPTY_NODE}if(f.equals(p))l=e;else{const _=n.filter.updateChild(a.getNode(),u,p,d,h,o);l=xn(e,_,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Tl(n,e){return n.eventCache.isCompleteForChild(e)}function Iy(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const h=U(t,l);Tl(e,C(h))&&(a=xr(n,a,h,c,i,r,o))}),s.foreach((l,c)=>{const h=U(t,l);Tl(e,C(h))||(a=xr(n,a,h,c,i,r,o))}),a}function kl(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ur(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;I(t)?c=s:c=new O(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((u,d)=>{if(h.hasChild(u)){const f=e.serverCache.getNode().getImmediateChild(u),p=kl(n,f,d);l=oi(n,l,new D(u),p,i,r,o,a)}}),c.children.inorderTraversal((u,d)=>{const f=!e.serverCache.isCompleteForChild(u)&&d.value===null;if(!h.hasChild(u)&&!f){const p=e.serverCache.getNode().getImmediateChild(u),_=kl(n,p,d);l=oi(n,l,new D(u),_,i,r,o,a)}}),l}function Sy(n,e,t,s,i,r,o){if(ri(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(I(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return oi(n,e,t,l.getNode().getChild(t),i,r,a,o);if(I(t)){let c=new O(null);return l.getNode().forEachChild(Qt,(h,u)=>{c=c.set(new D(h),u)}),Ur(n,e,t,c,i,r,a,o)}else return e}else{let c=new O(null);return s.foreach((h,u)=>{const d=U(t,h);l.isCompleteForPath(d)&&(c=c.set(h,l.getNode().getChild(d)))}),Ur(n,e,t,c,i,r,a,o)}}function Ty(n,e,t,s,i){const r=e.serverCache,o=Uh(e,r.getNode(),r.isFullyInitialized()||I(t),r.isFiltered());return jh(n,o,t,s,$h,i)}function ky(n,e,t,s,i,r){let o;if(ri(s,t)!=null)return e;{const a=new Bo(s,e,i),l=e.eventCache.getNode();let c;if(I(t)||C(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=ii(s,Ot(e));else{const u=e.serverCache.getNode();g(u instanceof y,"serverChildren would be complete if leaf node"),h=Uo(s,u)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=C(t);let u=Fo(s,h,e.serverCache);u==null&&e.serverCache.isCompleteForChild(h)&&(u=l.getImmediateChild(h)),u!=null?c=n.filter.updateChild(l,h,u,P(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,y.EMPTY_NODE,P(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=ii(s,Ot(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ri(s,N())!=null,xn(e,c,o,n.filter.filtersNodes())}}/**
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
 */class Ay{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Oo(s.getIndex()),r=zm(s);this.processor_=vy(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(y.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(y.EMPTY_NODE,a.getNode(),null),h=new ht(l,o.isFullyInitialized(),i.filtersNodes()),u=new ht(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=ki(u,h),this.eventGenerator_=new Zm(this.query_)}get query(){return this.query_}}function Ny(n){return n.viewCache_.serverCache.getNode()}function Ry(n){return si(n.viewCache_)}function Dy(n,e){const t=Ot(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!I(e)&&!t.getImmediateChild(C(e)).isEmpty())?t.getChild(e):null}function Al(n){return n.eventRegistrations_.length===0}function Oy(n,e){n.eventRegistrations_.push(e)}function Nl(n,e,t){const s=[];if(t){g(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Rl(n,e,t,s){e.type===ye.MERGE&&e.source.queryId!==null&&(g(Ot(n.viewCache_),"We should always have a full cache before handling merges"),g(si(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=Cy(n.processor_,i,e,t,s);return by(n.processor_,r.viewCache),g(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,Gh(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Py(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(F,(r,o)=>{s.push(on(r,o))}),t.isFullyInitialized()&&s.push(Mh(t.getNode())),Gh(n,s,t.getNode(),e)}function Gh(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return ey(n.eventGenerator_,e,t,i)}/**
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
 */let ai;class zh{constructor(){this.views=new Map}}function Ly(n){g(!ai,"__referenceConstructor has already been defined"),ai=n}function My(){return g(ai,"Reference.ts has not been loaded"),ai}function xy(n){return n.views.size===0}function Vo(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return g(r!=null,"SyncTree gave us an op for an invalid query."),Rl(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Rl(o,e,t,s));return r}}function qh(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=ii(t,i?s:null),l=!1;a?l=!0:s instanceof y?(a=Uo(t,s),l=!1):(a=y.EMPTY_NODE,l=!1);const c=ki(new ht(a,l,!1),new ht(s,i,!1));return new Ay(e,c)}return o}function Uy(n,e,t,s,i,r){const o=qh(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Oy(o,t),Py(o,t)}function Fy(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=ut(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Nl(c,t,s)),Al(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Nl(l,t,s)),Al(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!ut(n)&&r.push(new(My())(e._repo,e._path)),{removed:r,events:o}}function Kh(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function at(n,e){let t=null;for(const s of n.views.values())t=t||Dy(s,e);return t}function Yh(n,e){if(e._queryParams.loadsAllData())return Ni(n);{const s=e._queryIdentifier;return n.views.get(s)}}function Jh(n,e){return Yh(n,e)!=null}function ut(n){return Ni(n)!=null}function Ni(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let li;function By(n){g(!li,"__referenceConstructor has already been defined"),li=n}function Vy(){return g(li,"Reference.ts has not been loaded"),li}let Wy=1;class Dl{constructor(e){this.listenProvider_=e,this.syncPointTree_=new O(null),this.pendingWriteTree_=_y(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Qh(n,e,t,s,i){return iy(n.pendingWriteTree_,e,t,s,i),i?Cn(n,new Dt(Lo(),e,t)):[]}function Hy(n,e,t,s){ry(n.pendingWriteTree_,e,t,s);const i=O.fromObject(t);return Cn(n,new an(Lo(),e,i))}function et(n,e,t=!1){const s=oy(n.pendingWriteTree_,e);if(ay(n.pendingWriteTree_,e)){let r=new O(null);return s.snap!=null?r=r.set(N(),!0):J(s.children,o=>{r=r.set(new D(o),!0)}),Cn(n,new ni(s.path,r,t))}else return[]}function gs(n,e,t){return Cn(n,new Dt(Mo(),e,t))}function $y(n,e,t){const s=O.fromObject(t);return Cn(n,new an(Mo(),e,s))}function jy(n,e){return Cn(n,new Qn(Mo(),e))}function Gy(n,e,t){const s=Ho(n,t);if(s){const i=$o(s),r=i.path,o=i.queryId,a=te(r,e),l=new Qn(xo(o),a);return jo(n,r,l)}else return[]}function ci(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Jh(o,e))){const l=Fy(o,e,t,s);xy(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,u=n.syncPointTree_.findOnPath(r,(d,f)=>ut(f));if(h&&!u){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Ky(d);for(let p=0;p<f.length;++p){const _=f[p],S=_.query,Q=tu(n,_);n.listenProvider_.startListening(Fn(S),Xn(n,S),Q.hashFn,Q.onComplete)}}}!u&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(Fn(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(Ri(d));n.listenProvider_.stopListening(Fn(d),f)}))}Yy(n,c)}return a}function Xh(n,e,t,s){const i=Ho(n,s);if(i!=null){const r=$o(i),o=r.path,a=r.queryId,l=te(o,e),c=new Dt(xo(a),l,t);return jo(n,o,c)}else return[]}function zy(n,e,t,s){const i=Ho(n,s);if(i){const r=$o(i),o=r.path,a=r.queryId,l=te(o,e),c=O.fromObject(t),h=new an(xo(a),l,c);return jo(n,o,h)}else return[]}function Fr(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(d,f)=>{const p=te(d,i);r=r||at(f,p),o=o||ut(f)});let a=n.syncPointTree_.get(i);a?(o=o||ut(a),r=r||at(a,N())):(a=new zh,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=y.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,p)=>{const _=at(p,N());_&&(r=r.updateImmediateChild(f,_))}));const c=Jh(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ri(e);g(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=Jy();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const h=Ai(n.pendingWriteTree_,i);let u=Uy(a,e,t,h,r,l);if(!c&&!o&&!s){const d=Yh(a,e);u=u.concat(Qy(n,e,d))}return u}function Wo(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=te(o,e),c=at(a,l);if(c)return c});return Vh(i,e,r,t,!0)}function qy(n,e){const t=e._path;let s=null;n.syncPointTree_.foreachOnPath(t,(c,h)=>{const u=te(c,t);s=s||at(h,u)});let i=n.syncPointTree_.get(t);i?s=s||at(i,N()):(i=new zh,n.syncPointTree_=n.syncPointTree_.set(t,i));const r=s!=null,o=r?new ht(s,!0,!1):null,a=Ai(n.pendingWriteTree_,e._path),l=qh(i,e,a,r?o.getNode():y.EMPTY_NODE,r);return Ry(l)}function Cn(n,e){return Zh(e,n.syncPointTree_,null,Ai(n.pendingWriteTree_,N()))}function Zh(n,e,t,s){if(I(n.path))return eu(n,e,t,s);{const i=e.get(N());t==null&&i!=null&&(t=at(i,N()));let r=[];const o=C(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=Wh(s,o);r=r.concat(Zh(a,l,c,h))}return i&&(r=r.concat(Vo(i,n,s,t))),r}}function eu(n,e,t,s){const i=e.get(N());t==null&&i!=null&&(t=at(i,N()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Wh(s,o),h=n.operationForChild(o);h&&(r=r.concat(eu(h,a,l,c)))}),i&&(r=r.concat(Vo(i,n,s,t))),r}function tu(n,e){const t=e.query,s=Xn(n,t);return{hashFn:()=>(Ny(e)||y.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Gy(n,t._path,s):jy(n,t._path);{const r=j_(i,t);return ci(n,t,null,r)}}}}function Xn(n,e){const t=Ri(e);return n.queryToTagMap.get(t)}function Ri(n){return n._path.toString()+"$"+n._queryIdentifier}function Ho(n,e){return n.tagToQueryMap.get(e)}function $o(n){const e=n.indexOf("$");return g(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new D(n.substr(0,e))}}function jo(n,e,t){const s=n.syncPointTree_.get(e);g(s,"Missing sync point for query tag that we're tracking");const i=Ai(n.pendingWriteTree_,e);return Vo(s,t,i,null)}function Ky(n){return n.fold((e,t,s)=>{if(t&&ut(t))return[Ni(t)];{let i=[];return t&&(i=Kh(t)),J(s,(r,o)=>{i=i.concat(o)}),i}})}function Fn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Vy())(n._repo,n._path):n}function Yy(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Ri(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Jy(){return Wy++}function Qy(n,e,t){const s=e._path,i=Xn(n,e),r=tu(n,t),o=n.listenProvider_.startListening(Fn(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)g(!ut(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,u)=>{if(!I(c)&&h&&ut(h))return[Ni(h).query];{let d=[];return h&&(d=d.concat(Kh(h).map(f=>f.query))),J(u,(f,p)=>{d=d.concat(p)}),d}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(Fn(h),Xn(n,h))}}return o}/**
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
 */class Go{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Go(t)}node(){return this.node_}}class zo{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=U(this.path_,e);return new zo(this.syncTree_,t)}node(){return Wo(this.syncTree_,this.path_)}}const Xy=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},Ol=function(n,e,t){if(!n||typeof n!="object")return n;if(g(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Zy(n[".sv"],e,t);if(typeof n[".sv"]=="object")return ew(n[".sv"],e);g(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Zy=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:g(!1,"Unexpected server value: "+n)}},ew=function(n,e,t){n.hasOwnProperty("increment")||g(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&g(!1,"Unexpected increment value: "+s);const i=e.node();if(g(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},nu=function(n,e,t,s){return qo(e,new zo(t,n),s)},su=function(n,e,t){return qo(n,new Go(e),t)};function qo(n,e,t){const s=n.getPriority().val(),i=Ol(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=Ol(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new G(a,V(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new G(i))),o.forEachChild(F,(a,l)=>{const c=qo(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class Ko{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function Yo(n,e){let t=e instanceof D?e:new D(e),s=n,i=C(t);for(;i!==null;){const r=tn(s.node.children,i)||{children:{},childCount:0};s=new Ko(i,s,r),t=P(t),i=C(t)}return s}function En(n){return n.node.value}function iu(n,e){n.node.value=e,Br(n)}function ru(n){return n.node.childCount>0}function tw(n){return En(n)===void 0&&!ru(n)}function Di(n,e){J(n.node.children,(t,s)=>{e(new Ko(t,n,s))})}function ou(n,e,t,s){t&&e(n),Di(n,i=>{ou(i,e,!0)})}function nw(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function _s(n){return new D(n.parent===null?n.name:_s(n.parent)+"/"+n.name)}function Br(n){n.parent!==null&&sw(n.parent,n.name,n)}function sw(n,e,t){const s=tw(t),i=Ae(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,Br(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,Br(n))}/**
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
 */const iw=/[\[\].#$\/\u0000-\u001F\u007F]/,rw=/[\[\].#$\u0000-\u001F\u007F]/,or=10*1024*1024,Jo=function(n){return typeof n=="string"&&n.length!==0&&!iw.test(n)},au=function(n){return typeof n=="string"&&n.length!==0&&!rw.test(n)},ow=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),au(n)},aw=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!Eo(n)||n&&typeof n=="object"&&Ae(n,".sv")},lw=function(n,e,t,s){Oi(bi(n,"value"),e,t)},Oi=function(n,e,t){const s=t instanceof D?new Im(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+wt(s));if(typeof e=="function")throw new Error(n+"contains a function "+wt(s)+" with contents = "+e.toString());if(Eo(e))throw new Error(n+"contains "+e.toString()+" "+wt(s));if(typeof e=="string"&&e.length>or/3&&Ci(e)>or)throw new Error(n+"contains a string greater than "+or+" utf8 bytes "+wt(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(J(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!Jo(o)))throw new Error(n+" contains an invalid key ("+o+") "+wt(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);Sm(s,o),Oi(n,a,s),Tm(s)}),i&&r)throw new Error(n+' contains ".value" child '+wt(s)+" in addition to actual children.")}},cw=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=qn(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!Jo(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Em);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&de(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},hw=function(n,e,t,s){const i=bi(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];J(e,(o,a)=>{const l=new D(o);if(Oi(i,a,U(t,l)),Ao(l)===".priority"&&!aw(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),cw(i,r)},lu=function(n,e,t,s){if(!au(t))throw new Error(bi(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},uw=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lu(n,e,t)},dw=function(n,e){if(C(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},fw=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Jo(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ow(t))throw new Error(bi(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class pw{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Pi(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!No(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function cu(n,e,t){Pi(n,t),hu(n,s=>No(s,e))}function fe(n,e,t){Pi(n,t),hu(n,s=>de(s,e)||de(e,s))}function hu(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(gw(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function gw(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();Ln&&K("event: "+t.toString()),bn(s)}}}/**
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
 */const _w="repo_interrupt",mw=25;class yw{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new pw,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=ti(),this.transactionQueueTree_=new Ko,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ww(n,e,t){if(n.stats_=To(n.repoInfo_),n.forceRestClient_||K_())n.server_=new ei(n.repoInfo_,(s,i,r,o)=>{Pl(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Ll(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{W(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new Ue(n.repoInfo_,e,(s,i,r,o)=>{Pl(n,s,i,r,o)},s=>{Ll(n,s)},s=>{bw(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Z_(n.repoInfo_,()=>new Xm(n.stats_,n.server_)),n.infoData_=new qm,n.infoSyncTree_=new Dl({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=gs(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),Qo(n,"connected",!1),n.serverSyncTree_=new Dl({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);fe(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function vw(n){const t=n.infoData_.getNode(new D(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Li(n){return Xy({timestamp:vw(n)})}function Pl(n,e,t,s,i){n.dataUpdateCount++;const r=new D(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=$s(t,c=>V(c));o=zy(n.serverSyncTree_,r,l,i)}else{const l=V(t);o=Xh(n.serverSyncTree_,r,l,i)}else if(s){const l=$s(t,c=>V(c));o=$y(n.serverSyncTree_,r,l)}else{const l=V(t);o=gs(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=cn(n,r)),fe(n.eventQueue_,a,o)}function Ll(n,e){Qo(n,"connected",e),e===!1&&Sw(n)}function bw(n,e){J(e,(t,s)=>{Qo(n,t,s)})}function Qo(n,e,t){const s=new D("/.info/"+e),i=V(t);n.infoData_.updateSnapshot(s,i);const r=gs(n.infoSyncTree_,s,i);fe(n.eventQueue_,s,r)}function Xo(n){return n.nextWriteId_++}function Cw(n,e,t){const s=qy(n.serverSyncTree_,e);return s!=null?Promise.resolve(s):n.server_.get(e).then(i=>{const r=V(i).withIndex(e._queryParams.getIndex());Fr(n.serverSyncTree_,e,t,!0);let o;if(e._queryParams.loadsAllData())o=gs(n.serverSyncTree_,e._path,r);else{const a=Xn(n.serverSyncTree_,e);o=Xh(n.serverSyncTree_,e._path,r,a)}return fe(n.eventQueue_,e._path,o),ci(n.serverSyncTree_,e,t,null,!0),r},i=>(ms(n,"get for query "+W(e)+" failed: "+i),Promise.reject(new Error(i))))}function Ew(n,e,t,s,i){ms(n,"set",{path:e.toString(),value:t,priority:s});const r=Li(n),o=V(t,s),a=Wo(n.serverSyncTree_,e),l=su(o,a,r),c=Xo(n),h=Qh(n.serverSyncTree_,e,l,c,!0);Pi(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const p=d==="ok";p||ne("set at "+e+" failed: "+d);const _=et(n.serverSyncTree_,c,!p);fe(n.eventQueue_,e,_),Vr(n,i,d,f)});const u=ea(n,e);cn(n,u),fe(n.eventQueue_,u,[])}function Iw(n,e,t,s){ms(n,"update",{path:e.toString(),value:t});let i=!0;const r=Li(n),o={};if(J(t,(a,l)=>{i=!1,o[a]=nu(U(e,a),V(l),n.serverSyncTree_,r)}),i)K("update() called with empty data.  Don't do anything."),Vr(n,s,"ok",void 0);else{const a=Xo(n),l=Hy(n.serverSyncTree_,e,o,a);Pi(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{const u=c==="ok";u||ne("update at "+e+" failed: "+c);const d=et(n.serverSyncTree_,a,!u),f=d.length>0?cn(n,e):e;fe(n.eventQueue_,f,d),Vr(n,s,c,h)}),J(t,c=>{const h=ea(n,U(e,c));cn(n,h)}),fe(n.eventQueue_,e,[])}}function Sw(n){ms(n,"onDisconnectEvents");const e=Li(n),t=ti();Or(n.onDisconnect_,N(),(i,r)=>{const o=nu(i,r,n.serverSyncTree_,e);xh(t,i,o)});let s=[];Or(t,N(),(i,r)=>{s=s.concat(gs(n.serverSyncTree_,i,r));const o=ea(n,i);cn(n,o)}),n.onDisconnect_=ti(),fe(n.eventQueue_,N(),s)}function Tw(n,e,t){let s;C(e._path)===".info"?s=Fr(n.infoSyncTree_,e,t):s=Fr(n.serverSyncTree_,e,t),cu(n.eventQueue_,e._path,s)}function kw(n,e,t){let s;C(e._path)===".info"?s=ci(n.infoSyncTree_,e,t):s=ci(n.serverSyncTree_,e,t),cu(n.eventQueue_,e._path,s)}function Aw(n){n.persistentConnection_&&n.persistentConnection_.interrupt(_w)}function ms(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),K(t,...e)}function Vr(n,e,t,s){e&&bn(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function uu(n,e,t){return Wo(n.serverSyncTree_,e,t)||y.EMPTY_NODE}function Zo(n,e=n.transactionQueueTree_){if(e||Mi(n,e),En(e)){const t=fu(n,e);g(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&Nw(n,_s(e),t)}else ru(e)&&Di(e,t=>{Zo(n,t)})}function Nw(n,e,t){const s=t.map(c=>c.currentWriteId),i=uu(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];g(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const u=te(e,h.path);r=r.updateChild(u,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{ms(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const u=[];for(let d=0;d<t.length;d++)t[d].status=2,h=h.concat(et(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&u.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Mi(n,Yo(n.transactionQueueTree_,e)),Zo(n,n.transactionQueueTree_),fe(n.eventQueue_,e,h);for(let d=0;d<u.length;d++)bn(u[d])}else{if(c==="datastale")for(let u=0;u<t.length;u++)t[u].status===3?t[u].status=4:t[u].status=0;else{ne("transaction at "+l.toString()+" failed: "+c);for(let u=0;u<t.length;u++)t[u].status=4,t[u].abortReason=c}cn(n,e)}},o)}function cn(n,e){const t=du(n,e),s=_s(t),i=fu(n,t);return Rw(n,i,s),s}function Rw(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=te(t,l.path);let h=!1,u;if(g(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,u=l.abortReason,i=i.concat(et(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=mw)h=!0,u="maxretry",i=i.concat(et(n.serverSyncTree_,l.currentWriteId,!0));else{const d=uu(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){Oi("transaction failed: Data returned ",f,l.path);let p=V(f);typeof f=="object"&&f!=null&&Ae(f,".priority")||(p=p.updatePriority(d.getPriority()));const S=l.currentWriteId,Q=Li(n),le=su(p,d,Q);l.currentOutputSnapshotRaw=p,l.currentOutputSnapshotResolved=le,l.currentWriteId=Xo(n),o.splice(o.indexOf(S),1),i=i.concat(Qh(n.serverSyncTree_,l.path,le,l.currentWriteId,l.applyLocally)),i=i.concat(et(n.serverSyncTree_,S,!0))}else h=!0,u="nodata",i=i.concat(et(n.serverSyncTree_,l.currentWriteId,!0))}fe(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,(function(d){setTimeout(d,Math.floor(0))})(e[a].unwatcher),e[a].onComplete&&(u==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(u),!1,null))))}Mi(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)bn(s[a]);Zo(n,n.transactionQueueTree_)}function du(n,e){let t,s=n.transactionQueueTree_;for(t=C(e);t!==null&&En(s)===void 0;)s=Yo(s,t),e=P(e),t=C(e);return s}function fu(n,e){const t=[];return pu(n,e,t),t.sort((s,i)=>s.order-i.order),t}function pu(n,e,t){const s=En(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Di(e,i=>{pu(n,i,t)})}function Mi(n,e){const t=En(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,iu(e,t.length>0?t:void 0)}Di(e,s=>{Mi(n,s)})}function ea(n,e){const t=_s(du(n,e)),s=Yo(n.transactionQueueTree_,e);return nw(s,i=>{ar(n,i)}),ar(n,s),ou(s,i=>{ar(n,i)}),t}function ar(n,e){const t=En(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(g(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(g(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(et(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?iu(e,void 0):t.length=r+1,fe(n.eventQueue_,_s(e),i);for(let o=0;o<s.length;o++)bn(s[o])}}/**
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
 */function Dw(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function Ow(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ne(`Invalid query segment '${t}' in query '${n}'`)}return e}const Ml=function(n,e){const t=Pw(n),s=t.namespace;t.domain==="firebase.com"&&We(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&We("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||B_();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new wh(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new D(t.pathString)}},Pw=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let u=n.indexOf("?");u===-1&&(u=n.length),e=n.substring(0,Math.min(h,u)),h<u&&(i=Dw(n.substring(h,u)));const d=Ow(n.substring(Math.min(n.length,u)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const p=e.indexOf(".");s=e.substring(0,p).toLowerCase(),t=e.substring(p+1),r=s}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class Lw{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+W(this.snapshot.exportVal())}}class Mw{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class gu{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return g(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class ta{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return I(this._path)?null:Ao(this._path)}get ref(){return new je(this._repo,this._path)}get _queryIdentifier(){const e=bl(this._queryParams),t=Io(e);return t==="{}"?"default":t}get _queryObject(){return bl(this._queryParams)}isEqual(e){if(e=ie(e),!(e instanceof ta))return!1;const t=this._repo===e._repo,s=No(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Cm(this._path)}}class je extends ta{constructor(e,t){super(e,t,new Po,!1)}get parent(){const e=Ah(this._path);return e===null?null:new je(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Zn{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new D(e),s=Wr(this.ref,e);return new Zn(this._node.getChild(t),s,F)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Zn(i,Wr(this.ref,s),F)))}hasChild(e){const t=new D(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ys(n,e){return n=ie(n),n._checkNotDeleted("ref"),e!==void 0?Wr(n._root,e):n._root}function Wr(n,e){return n=ie(n),C(n._path)===null?uw("child","path",e):lu("child","path",e),new je(n._repo,U(n._path,e))}function xw(n,e){n=ie(n),dw("set",n._path),lw("set",e,n._path);const t=new as;return Ew(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Uw(n,e){hw("update",e,n._path);const t=new as;return Iw(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}function _u(n){n=ie(n);const e=new gu(()=>{}),t=new xi(e);return Cw(n._repo,n,t).then(s=>new Zn(s,new je(n._repo,n._path),n._queryParams.getIndex()))}class xi{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new Lw("value",this,new Zn(e.snapshotNode,new je(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new Mw(this,e,t):null}matches(e){return e instanceof xi?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Fw(n,e,t,s,i){const r=new gu(t,void 0),o=new xi(r);return Tw(n._repo,n,o),()=>kw(n._repo,n,o)}function Bw(n,e,t,s){return Fw(n,"value",e)}Ly(je);By(je);/**
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
 */const Vw="FIREBASE_DATABASE_EMULATOR_HOST",Hr={};let Ww=!1;function Hw(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=mn(r);n.repoInfo_=new wh(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function $w(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||We("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),K("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Ml(r,i),a=o.repoInfo,l;typeof process<"u"&&sl&&(l=sl[Vw]),l?(r=`http://${l}?ns=${a.namespace}`,o=Ml(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new J_(n.name,n.options,e);fw("Invalid Firebase Database URL",o),I(o.path)||We("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Gw(a,n,c,new Y_(n,t));return new zw(h,n)}function jw(n,e){const t=Hr[e];(!t||t[n.key]!==n)&&We(`Database ${e}(${n.repoInfo_}) has already been deleted.`),Aw(n),delete t[n.key]}function Gw(n,e,t,s){let i=Hr[e.name];i||(i={},Hr[e.name]=i);let r=i[n.toURLString()];return r&&We("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new yw(n,Ww,t,s),i[n.toURLString()]=r,r}class zw{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ww(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new je(this._repo,N())),this._rootInternal}_delete(){return this._rootInternal!==null&&(jw(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&We("Cannot call "+e+" on a deleted database.")}}function qw(n=Sc(),e){const t=ho(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=tf("database");s&&Kw(t,...s)}return t}function Kw(n,e,t,s={}){n=ie(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&kt(s,r.repoInfo_.emulatorOptions))return;We("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&We('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new xs(xs.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:nf(s.mockUserToken,n.app.options.projectId);o=new xs(a)}mn(e)&&(yc(e),wc("Database",!0)),Hw(r,i,s,o)}/**
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
 */function Yw(n){P_(wn),nn(new At("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return $w(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),rt(il,rl,n),rt(il,rl,"esm2017")}Ue.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Ue.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Yw();const Jw={apiKey:"AIzaSyBV-GHwBk1Bibx9xolT7IdvsQ8mjgO-fkU",authDomain:"notes-uno.firebaseapp.com",databaseURL:"https://notes-uno-default-rtdb.firebaseio.com",projectId:"notes-uno",storageBucket:"notes-uno.firebasestorage.app",messagingSenderId:"1025777646528",appId:"1:1025777646528:web:2f6bc79f92a5ca04256625",measurementId:"G-G17GF41EWB"},mu=Ic(Jw),hi=D_(mu),In=qw(mu),yu=new Oe;yu.setCustomParameters({prompt:"select_account"});const oe=()=>new Map,$r=n=>{const e=oe();return n.forEach((t,s)=>{e.set(s,t)}),e},Ne=(n,e,t)=>{let s=n.get(e);return s===void 0&&n.set(e,s=t()),s},Qw=(n,e)=>{const t=[];for(const[s,i]of n)t.push(e(i,s));return t},Xw=(n,e)=>{for(const[t,s]of n)if(e(s,t))return!0;return!1},dt=()=>new Set,lr=n=>n[n.length-1],Zw=(n,e)=>{for(let t=0;t<e.length;t++)n.push(e[t])},He=Array.from,ev=Array.isArray;class wu{constructor(){this._observers=oe()}on(e,t){return Ne(this._observers,e,dt).add(t),t}once(e,t){const s=(...i)=>{this.off(e,s),t(...i)};this.on(e,s)}off(e,t){const s=this._observers.get(e);s!==void 0&&(s.delete(t),s.size===0&&this._observers.delete(e))}emit(e,t){return He((this._observers.get(e)||oe()).values()).forEach(s=>s(...t))}destroy(){this._observers=oe()}}class tv{constructor(){this._observers=oe()}on(e,t){Ne(this._observers,e,dt).add(t)}once(e,t){const s=(...i)=>{this.off(e,s),t(...i)};this.on(e,s)}off(e,t){const s=this._observers.get(e);s!==void 0&&(s.delete(t),s.size===0&&this._observers.delete(e))}emit(e,t){return He((this._observers.get(e)||oe()).values()).forEach(s=>s(...t))}destroy(){this._observers=oe()}}const $e=Math.floor,Us=Math.abs,na=(n,e)=>n<e?n:e,Bt=(n,e)=>n>e?n:e,nv=Math.pow,vu=n=>n!==0?n<0:1/n<0,xl=1,Ul=2,cr=4,hr=8,es=32,Fe=64,ae=128,Ui=31,jr=63,St=127,sv=2147483647,bu=Number.MAX_SAFE_INTEGER,iv=Number.isInteger||(n=>typeof n=="number"&&isFinite(n)&&$e(n)===n),rv=String.fromCharCode,ov=n=>n.toLowerCase(),av=/^\s*/g,lv=n=>n.replace(av,""),cv=/([A-Z])/g,Fl=(n,e)=>lv(n.replace(cv,t=>`${e}${ov(t)}`)),hv=n=>{const e=unescape(encodeURIComponent(n)),t=e.length,s=new Uint8Array(t);for(let i=0;i<t;i++)s[i]=e.codePointAt(i);return s},ts=typeof TextEncoder<"u"?new TextEncoder:null,uv=n=>ts.encode(n),dv=ts?uv:hv;let Bn=typeof TextDecoder>"u"?null:new TextDecoder("utf-8",{fatal:!0,ignoreBOM:!0});Bn&&Bn.decode(new Uint8Array).length===1&&(Bn=null);class ws{constructor(){this.cpos=0,this.cbuf=new Uint8Array(100),this.bufs=[]}}const Z=()=>new ws,sa=n=>{let e=n.cpos;for(let t=0;t<n.bufs.length;t++)e+=n.bufs[t].length;return e},x=n=>{const e=new Uint8Array(sa(n));let t=0;for(let s=0;s<n.bufs.length;s++){const i=n.bufs[s];e.set(i,t),t+=i.length}return e.set(new Uint8Array(n.cbuf.buffer,0,n.cpos),t),e},fv=(n,e)=>{const t=n.cbuf.length;t-n.cpos<e&&(n.bufs.push(new Uint8Array(n.cbuf.buffer,0,n.cpos)),n.cbuf=new Uint8Array(Bt(t,e)*2),n.cpos=0)},j=(n,e)=>{const t=n.cbuf.length;n.cpos===t&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(t*2),n.cpos=0),n.cbuf[n.cpos++]=e},Gr=j,m=(n,e)=>{for(;e>St;)j(n,ae|St&e),e=$e(e/128);j(n,St&e)},ia=(n,e)=>{const t=vu(e);for(t&&(e=-e),j(n,(e>jr?ae:0)|(t?Fe:0)|jr&e),e=$e(e/64);e>0;)j(n,(e>St?ae:0)|St&e),e=$e(e/128)},zr=new Uint8Array(3e4),pv=zr.length/3,gv=(n,e)=>{if(e.length<pv){const t=ts.encodeInto(e,zr).written||0;m(n,t);for(let s=0;s<t;s++)j(n,zr[s])}else B(n,dv(e))},_v=(n,e)=>{const t=unescape(encodeURIComponent(e)),s=t.length;m(n,s);for(let i=0;i<s;i++)j(n,t.codePointAt(i))},Tt=ts&&ts.encodeInto?gv:_v,Fi=(n,e)=>{const t=n.cbuf.length,s=n.cpos,i=na(t-s,e.length),r=e.length-i;n.cbuf.set(e.subarray(0,i),s),n.cpos+=i,r>0&&(n.bufs.push(n.cbuf),n.cbuf=new Uint8Array(Bt(t*2,r)),n.cbuf.set(e.subarray(i)),n.cpos=r)},B=(n,e)=>{m(n,e.byteLength),Fi(n,e)},ra=(n,e)=>{fv(n,e);const t=new DataView(n.cbuf.buffer,n.cpos,e);return n.cpos+=e,t},mv=(n,e)=>ra(n,4).setFloat32(0,e,!1),yv=(n,e)=>ra(n,8).setFloat64(0,e,!1),wv=(n,e)=>ra(n,8).setBigInt64(0,e,!1),Bl=new DataView(new ArrayBuffer(4)),vv=n=>(Bl.setFloat32(0,n),Bl.getFloat32(0)===n),ns=(n,e)=>{switch(typeof e){case"string":j(n,119),Tt(n,e);break;case"number":iv(e)&&Us(e)<=sv?(j(n,125),ia(n,e)):vv(e)?(j(n,124),mv(n,e)):(j(n,123),yv(n,e));break;case"bigint":j(n,122),wv(n,e);break;case"object":if(e===null)j(n,126);else if(ev(e)){j(n,117),m(n,e.length);for(let t=0;t<e.length;t++)ns(n,e[t])}else if(e instanceof Uint8Array)j(n,116),B(n,e);else{j(n,118);const t=Object.keys(e);m(n,t.length);for(let s=0;s<t.length;s++){const i=t[s];Tt(n,i),ns(n,e[i])}}break;case"boolean":j(n,e?120:121);break;default:j(n,127)}};class Vl extends ws{constructor(e){super(),this.w=e,this.s=null,this.count=0}write(e){this.s===e?this.count++:(this.count>0&&m(this,this.count-1),this.count=1,this.w(this,e),this.s=e)}}const Wl=n=>{n.count>0&&(ia(n.encoder,n.count===1?n.s:-n.s),n.count>1&&m(n.encoder,n.count-2))};class Fs{constructor(){this.encoder=new ws,this.s=0,this.count=0}write(e){this.s===e?this.count++:(Wl(this),this.count=1,this.s=e)}toUint8Array(){return Wl(this),x(this.encoder)}}const Hl=n=>{if(n.count>0){const e=n.diff*2+(n.count===1?0:1);ia(n.encoder,e),n.count>1&&m(n.encoder,n.count-2)}};class ur{constructor(){this.encoder=new ws,this.s=0,this.count=0,this.diff=0}write(e){this.diff===e-this.s?(this.s=e,this.count++):(Hl(this),this.count=1,this.diff=e-this.s,this.s=e)}toUint8Array(){return Hl(this),x(this.encoder)}}class bv{constructor(){this.sarr=[],this.s="",this.lensE=new Fs}write(e){this.s+=e,this.s.length>19&&(this.sarr.push(this.s),this.s=""),this.lensE.write(e.length)}toUint8Array(){const e=new ws;return this.sarr.push(this.s),this.s="",Tt(e,this.sarr.join("")),Fi(e,this.lensE.toUint8Array()),x(e)}}const ft=n=>new Error(n),Ee=()=>{throw ft("Method unimplemented")},Se=()=>{throw ft("Unexpected case")},Cu=ft("Unexpected end of array"),Eu=ft("Integer out of Range");class Bi{constructor(e){this.arr=e,this.pos=0}}const mt=n=>new Bi(n),Cv=n=>n.pos!==n.arr.length,Ev=(n,e)=>{const t=new Uint8Array(n.arr.buffer,n.pos+n.arr.byteOffset,e);return n.pos+=e,t},X=n=>Ev(n,v(n)),hn=n=>n.arr[n.pos++],v=n=>{let e=0,t=1;const s=n.arr.length;for(;n.pos<s;){const i=n.arr[n.pos++];if(e=e+(i&St)*t,t*=128,i<ae)return e;if(e>bu)throw Eu}throw Cu},oa=n=>{let e=n.arr[n.pos++],t=e&jr,s=64;const i=(e&Fe)>0?-1:1;if((e&ae)===0)return i*t;const r=n.arr.length;for(;n.pos<r;){if(e=n.arr[n.pos++],t=t+(e&St)*s,s*=128,e<ae)return i*t;if(t>bu)throw Eu}throw Cu},Iv=n=>{let e=v(n);if(e===0)return"";{let t=String.fromCodePoint(hn(n));if(--e<100)for(;e--;)t+=String.fromCodePoint(hn(n));else for(;e>0;){const s=e<1e4?e:1e4,i=n.arr.subarray(n.pos,n.pos+s);n.pos+=s,t+=String.fromCodePoint.apply(null,i),e-=s}return decodeURIComponent(escape(t))}},Sv=n=>Bn.decode(X(n)),lt=Bn?Sv:Iv,aa=(n,e)=>{const t=new DataView(n.arr.buffer,n.arr.byteOffset+n.pos,e);return n.pos+=e,t},Tv=n=>aa(n,4).getFloat32(0,!1),kv=n=>aa(n,8).getFloat64(0,!1),Av=n=>aa(n,8).getBigInt64(0,!1),Nv=[n=>{},n=>null,oa,Tv,kv,Av,n=>!1,n=>!0,lt,n=>{const e=v(n),t={};for(let s=0;s<e;s++){const i=lt(n);t[i]=ss(n)}return t},n=>{const e=v(n),t=[];for(let s=0;s<e;s++)t.push(ss(n));return t},X],ss=n=>Nv[127-hn(n)](n);class $l extends Bi{constructor(e,t){super(e),this.reader=t,this.s=null,this.count=0}read(){return this.count===0&&(this.s=this.reader(this),Cv(this)?this.count=v(this)+1:this.count=-1),this.count--,this.s}}class Bs extends Bi{constructor(e){super(e),this.s=0,this.count=0}read(){if(this.count===0){this.s=oa(this);const e=vu(this.s);this.count=1,e&&(this.s=-this.s,this.count=v(this)+2)}return this.count--,this.s}}class dr extends Bi{constructor(e){super(e),this.s=0,this.count=0,this.diff=0}read(){if(this.count===0){const e=oa(this),t=e&1;this.diff=$e(e/2),this.count=1,t&&(this.count=v(this)+2)}return this.s+=this.diff,this.count--,this.s}}class Rv{constructor(e){this.decoder=new Bs(e),this.str=lt(this.decoder),this.spos=0}read(){const e=this.spos+this.decoder.read(),t=this.str.slice(this.spos,e);return this.spos=e,t}}const Dv=crypto.getRandomValues.bind(crypto),Iu=()=>Dv(new Uint32Array(1))[0],Ov="10000000-1000-4000-8000"+-1e11,Pv=()=>Ov.replace(/[018]/g,n=>(n^Iu()&15>>n/4).toString(16)),Pt=Date.now,jl=n=>new Promise(n);Promise.all.bind(Promise);const Gl=n=>n===void 0?null:n;class Lv{constructor(){this.map=new Map}setItem(e,t){this.map.set(e,t)}getItem(e){return this.map.get(e)}}let Su=new Lv,la=!0;try{typeof localStorage<"u"&&localStorage&&(Su=localStorage,la=!1)}catch{}const Tu=Su,Mv=n=>la||addEventListener("storage",n),xv=n=>la||removeEventListener("storage",n),Uv=Object.assign,ku=Object.keys,Fv=(n,e)=>{for(const t in n)e(n[t],t)},Bv=(n,e)=>{const t=[];for(const s in n)t.push(e(n[s],s));return t},zl=n=>ku(n).length,ql=n=>ku(n).length,Vv=n=>{for(const e in n)return!1;return!0},Wv=(n,e)=>{for(const t in n)if(!e(n[t],t))return!1;return!0},Au=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),Hv=(n,e)=>n===e||ql(n)===ql(e)&&Wv(n,(t,s)=>(t!==void 0||Au(e,s))&&e[s]===t),$v=Object.freeze,Nu=n=>{for(const e in n){const t=n[e];(typeof t=="object"||typeof t=="function")&&Nu(n[e])}return $v(n)},Kl=Symbol("Equality"),ca=(n,e,t=0)=>{try{for(;t<n.length;t++)n[t](...e)}finally{t<n.length&&ca(n,e,t+1)}},jv=n=>n,Vn=(n,e)=>{if(n===e)return!0;if(n==null||e==null||n.constructor!==e.constructor)return!1;if(n[Kl]!=null)return n[Kl](e);switch(n.constructor){case ArrayBuffer:n=new Uint8Array(n),e=new Uint8Array(e);case Uint8Array:{if(n.byteLength!==e.byteLength)return!1;for(let t=0;t<n.length;t++)if(n[t]!==e[t])return!1;break}case Set:{if(n.size!==e.size)return!1;for(const t of n)if(!e.has(t))return!1;break}case Map:{if(n.size!==e.size)return!1;for(const t of n.keys())if(!e.has(t)||!Vn(n.get(t),e.get(t)))return!1;break}case Object:if(zl(n)!==zl(e))return!1;for(const t in n)if(!Au(n,t)||!Vn(n[t],e[t]))return!1;break;case Array:if(n.length!==e.length)return!1;for(let t=0;t<n.length;t++)if(!Vn(n[t],e[t]))return!1;break;default:return!1}return!0},Gv=(n,e)=>e.includes(n);var Ru={};const pt=typeof process<"u"&&process.release&&/node|io\.js/.test(process.release.name)&&Object.prototype.toString.call(typeof process<"u"?process:0)==="[object process]",Du=typeof window<"u"&&typeof document<"u"&&!pt;let be;const zv=()=>{if(be===void 0)if(pt){be=oe();const n=process.argv;let e=null;for(let t=0;t<n.length;t++){const s=n[t];s[0]==="-"?(e!==null&&be.set(e,""),e=s):e!==null&&(be.set(e,s),e=null)}e!==null&&be.set(e,"")}else typeof location=="object"?(be=oe(),(location.search||"?").slice(1).split("&").forEach(n=>{if(n.length!==0){const[e,t]=n.split("=");be.set(`--${Fl(e,"-")}`,t),be.set(`-${Fl(e,"-")}`,t)}})):be=oe();return be},qr=n=>zv().has(n),ui=n=>Gl(pt?Ru[n.toUpperCase().replaceAll("-","_")]:Tu.getItem(n)),Ou=n=>qr("--"+n)||ui(n)!==null;Ou("production");const qv=pt&&Gv(Ru.FORCE_COLOR,["true","1","2"]),Kv=qv||!qr("--no-colors")&&!Ou("no-color")&&(!pt||process.stdout.isTTY)&&(!pt||qr("--color")||ui("COLORTERM")!==null||(ui("TERM")||"").includes("color")),Pu=n=>new Uint8Array(n),Yv=(n,e,t)=>new Uint8Array(n,e,t),Jv=n=>new Uint8Array(n),Qv=n=>{let e="";for(let t=0;t<n.byteLength;t++)e+=rv(n[t]);return btoa(e)},Xv=n=>Buffer.from(n.buffer,n.byteOffset,n.byteLength).toString("base64"),Zv=n=>{const e=atob(n),t=Pu(e.length);for(let s=0;s<e.length;s++)t[s]=e.charCodeAt(s);return t},eb=n=>{const e=Buffer.from(n,"base64");return Yv(e.buffer,e.byteOffset,e.byteLength)},tb=Du?Qv:Xv,nb=Du?Zv:eb,sb=n=>{const e=Pu(n.byteLength);return e.set(n),e};class ib{constructor(e,t){this.left=e,this.right=t}}const Re=(n,e)=>new ib(n,e);typeof DOMParser<"u"&&new DOMParser;const rb=n=>Qw(n,(e,t)=>`${t}:${e};`).join(""),Ge=Symbol,Lu=Ge(),Mu=Ge(),ob=Ge(),ab=Ge(),lb=Ge(),xu=Ge(),cb=Ge(),ha=Ge(),hb=Ge(),ub=n=>{var i;n.length===1&&((i=n[0])==null?void 0:i.constructor)===Function&&(n=n[0]());const e=[],t=[];let s=0;for(;s<n.length;s++){const r=n[s];if(r===void 0)break;if(r.constructor===String||r.constructor===Number)e.push(r);else if(r.constructor===Object)break}for(s>0&&t.push(e.join(""));s<n.length;s++){const r=n[s];r instanceof Symbol||t.push(r)}return t},db={[Lu]:Re("font-weight","bold"),[Mu]:Re("font-weight","normal"),[ob]:Re("color","blue"),[lb]:Re("color","green"),[ab]:Re("color","grey"),[xu]:Re("color","red"),[cb]:Re("color","purple"),[ha]:Re("color","orange"),[hb]:Re("color","black")},fb=n=>{var o;n.length===1&&((o=n[0])==null?void 0:o.constructor)===Function&&(n=n[0]());const e=[],t=[],s=oe();let i=[],r=0;for(;r<n.length;r++){const a=n[r],l=db[a];if(l!==void 0)s.set(l.left,l.right);else{if(a===void 0)break;if(a.constructor===String||a.constructor===Number){const c=rb(s);r>0||c.length>0?(e.push("%c"+a),t.push(c)):e.push(a)}else break}}for(r>0&&(i=t,i.unshift(e.join("")));r<n.length;r++){const a=n[r];a instanceof Symbol||i.push(a)}return i},Uu=Kv?fb:ub,pb=(...n)=>{console.log(...Uu(n)),Fu.forEach(e=>e.print(n))},gb=(...n)=>{console.warn(...Uu(n)),n.unshift(ha),Fu.forEach(e=>e.print(n))},Fu=dt(),Bu=n=>({[Symbol.iterator](){return this},next:n}),_b=(n,e)=>Bu(()=>{let t;do t=n.next();while(!t.done&&!e(t.value));return t}),fr=(n,e)=>Bu(()=>{const{done:t,value:s}=n.next();return{done:t,value:t?void 0:e(s)}});class ua{constructor(e,t){this.clock=e,this.len=t}}class vs{constructor(){this.clients=new Map}}const Vu=(n,e,t)=>e.clients.forEach((s,i)=>{const r=n.doc.store.clients.get(i);if(r!=null){const o=r[r.length-1],a=o.id.clock+o.length;for(let l=0,c=s[l];l<s.length&&c.clock<a;c=s[++l])Zu(n,r,c.clock,c.len,t)}}),mb=(n,e)=>{let t=0,s=n.length-1;for(;t<=s;){const i=$e((t+s)/2),r=n[i],o=r.clock;if(o<=e){if(e<o+r.len)return i;t=i+1}else s=i-1}return null},Wu=(n,e)=>{const t=n.clients.get(e.client);return t!==void 0&&mb(t,e.clock)!==null},da=n=>{n.clients.forEach(e=>{e.sort((i,r)=>i.clock-r.clock);let t,s;for(t=1,s=1;t<e.length;t++){const i=e[s-1],r=e[t];i.clock+i.len>=r.clock?i.len=Bt(i.len,r.clock+r.len-i.clock):(s<t&&(e[s]=r),s++)}e.length=s})},yb=n=>{const e=new vs;for(let t=0;t<n.length;t++)n[t].clients.forEach((s,i)=>{if(!e.clients.has(i)){const r=s.slice();for(let o=t+1;o<n.length;o++)Zw(r,n[o].clients.get(i)||[]);e.clients.set(i,r)}});return da(e),e},di=(n,e,t,s)=>{Ne(n.clients,e,()=>[]).push(new ua(t,s))},wb=()=>new vs,vb=n=>{const e=wb();return n.clients.forEach((t,s)=>{const i=[];for(let r=0;r<t.length;r++){const o=t[r];if(o.deleted){const a=o.id.clock;let l=o.length;if(r+1<t.length)for(let c=t[r+1];r+1<t.length&&c.deleted;c=t[++r+1])l+=c.length;i.push(new ua(a,l))}}i.length>0&&e.clients.set(s,i)}),e},Sn=(n,e)=>{m(n.restEncoder,e.clients.size),He(e.clients.entries()).sort((t,s)=>s[0]-t[0]).forEach(([t,s])=>{n.resetDsCurVal(),m(n.restEncoder,t);const i=s.length;m(n.restEncoder,i);for(let r=0;r<i;r++){const o=s[r];n.writeDsClock(o.clock),n.writeDsLen(o.len)}})},fa=n=>{const e=new vs,t=v(n.restDecoder);for(let s=0;s<t;s++){n.resetDsCurVal();const i=v(n.restDecoder),r=v(n.restDecoder);if(r>0){const o=Ne(e.clients,i,()=>[]);for(let a=0;a<r;a++)o.push(new ua(n.readDsClock(),n.readDsLen()))}}return e},Yl=(n,e,t)=>{const s=new vs,i=v(n.restDecoder);for(let r=0;r<i;r++){n.resetDsCurVal();const o=v(n.restDecoder),a=v(n.restDecoder),l=t.clients.get(o)||[],c=q(t,o);for(let h=0;h<a;h++){const u=n.readDsClock(),d=u+n.readDsLen();if(u<c){c<d&&di(s,o,c,d-c);let f=Te(l,u),p=l[f];for(!p.deleted&&p.id.clock<u&&(l.splice(f+1,0,wi(e,p,u-p.id.clock)),f++);f<l.length&&(p=l[f++],p.id.clock<d);)p.deleted||(d<p.id.clock+p.length&&l.splice(f,0,wi(e,p,d-p.id.clock)),p.delete(e))}else di(s,o,u,d-u)}}if(s.clients.size>0){const r=new Lt;return m(r.restEncoder,0),Sn(r,s),r.toUint8Array()}return null},Hu=Iu;class Tn extends wu{constructor({guid:e=Pv(),collectionid:t=null,gc:s=!0,gcFilter:i=()=>!0,meta:r=null,autoLoad:o=!1,shouldLoad:a=!0}={}){super(),this.gc=s,this.gcFilter=i,this.clientID=Hu(),this.guid=e,this.collectionid=t,this.share=new Map,this.store=new Qu,this._transaction=null,this._transactionCleanups=[],this.subdocs=new Set,this._item=null,this.shouldLoad=a,this.autoLoad=o,this.meta=r,this.isLoaded=!1,this.isSynced=!1,this.isDestroyed=!1,this.whenLoaded=jl(c=>{this.on("load",()=>{this.isLoaded=!0,c(this)})});const l=()=>jl(c=>{const h=u=>{(u===void 0||u===!0)&&(this.off("sync",h),c())};this.on("sync",h)});this.on("sync",c=>{c===!1&&this.isSynced&&(this.whenSynced=l()),this.isSynced=c===void 0||c===!0,this.isSynced&&!this.isLoaded&&this.emit("load",[this])}),this.whenSynced=l()}load(){const e=this._item;e!==null&&!this.shouldLoad&&L(e.parent.doc,t=>{t.subdocsLoaded.add(this)},null,!0),this.shouldLoad=!0}getSubdocs(){return this.subdocs}getSubdocGuids(){return new Set(He(this.subdocs).map(e=>e.guid))}transact(e,t=null){return L(this,e,t)}get(e,t=Y){const s=Ne(this.share,e,()=>{const r=new t;return r._integrate(this,null),r}),i=s.constructor;if(t!==Y&&i!==t)if(i===Y){const r=new t;r._map=s._map,s._map.forEach(o=>{for(;o!==null;o=o.left)o.parent=r}),r._start=s._start;for(let o=r._start;o!==null;o=o.right)o.parent=r;return r._length=s._length,this.share.set(e,r),r._integrate(this,null),r}else throw new Error(`Type with the name ${e} has already been defined with a different constructor`);return s}getArray(e=""){return this.get(e,Zt)}getText(e=""){return this.get(e,fn)}getMap(e=""){return this.get(e,dn)}getXmlElement(e=""){return this.get(e,pn)}getXmlFragment(e=""){return this.get(e,Mt)}toJSON(){const e={};return this.share.forEach((t,s)=>{e[s]=t.toJSON()}),e}destroy(){this.isDestroyed=!0,He(this.subdocs).forEach(t=>t.destroy());const e=this._item;if(e!==null){this._item=null;const t=e.content;t.doc=new Tn({guid:this.guid,...t.opts,shouldLoad:!1}),t.doc._item=e,L(e.parent.doc,s=>{const i=t.doc;e.deleted||s.subdocsAdded.add(i),s.subdocsRemoved.add(this)},null,!0)}this.emit("destroyed",[!0]),this.emit("destroy",[this]),super.destroy()}}class $u{constructor(e){this.restDecoder=e}resetDsCurVal(){}readDsClock(){return v(this.restDecoder)}readDsLen(){return v(this.restDecoder)}}class ju extends $u{readLeftID(){return T(v(this.restDecoder),v(this.restDecoder))}readRightID(){return T(v(this.restDecoder),v(this.restDecoder))}readClient(){return v(this.restDecoder)}readInfo(){return hn(this.restDecoder)}readString(){return lt(this.restDecoder)}readParentInfo(){return v(this.restDecoder)===1}readTypeRef(){return v(this.restDecoder)}readLen(){return v(this.restDecoder)}readAny(){return ss(this.restDecoder)}readBuf(){return sb(X(this.restDecoder))}readJSON(){return JSON.parse(lt(this.restDecoder))}readKey(){return lt(this.restDecoder)}}class bb{constructor(e){this.dsCurrVal=0,this.restDecoder=e}resetDsCurVal(){this.dsCurrVal=0}readDsClock(){return this.dsCurrVal+=v(this.restDecoder),this.dsCurrVal}readDsLen(){const e=v(this.restDecoder)+1;return this.dsCurrVal+=e,e}}class un extends bb{constructor(e){super(e),this.keys=[],v(e),this.keyClockDecoder=new dr(X(e)),this.clientDecoder=new Bs(X(e)),this.leftClockDecoder=new dr(X(e)),this.rightClockDecoder=new dr(X(e)),this.infoDecoder=new $l(X(e),hn),this.stringDecoder=new Rv(X(e)),this.parentInfoDecoder=new $l(X(e),hn),this.typeRefDecoder=new Bs(X(e)),this.lenDecoder=new Bs(X(e))}readLeftID(){return new Xt(this.clientDecoder.read(),this.leftClockDecoder.read())}readRightID(){return new Xt(this.clientDecoder.read(),this.rightClockDecoder.read())}readClient(){return this.clientDecoder.read()}readInfo(){return this.infoDecoder.read()}readString(){return this.stringDecoder.read()}readParentInfo(){return this.parentInfoDecoder.read()===1}readTypeRef(){return this.typeRefDecoder.read()}readLen(){return this.lenDecoder.read()}readAny(){return ss(this.restDecoder)}readBuf(){return X(this.restDecoder)}readJSON(){return ss(this.restDecoder)}readKey(){const e=this.keyClockDecoder.read();if(e<this.keys.length)return this.keys[e];{const t=this.stringDecoder.read();return this.keys.push(t),t}}}class Gu{constructor(){this.restEncoder=Z()}toUint8Array(){return x(this.restEncoder)}resetDsCurVal(){}writeDsClock(e){m(this.restEncoder,e)}writeDsLen(e){m(this.restEncoder,e)}}class bs extends Gu{writeLeftID(e){m(this.restEncoder,e.client),m(this.restEncoder,e.clock)}writeRightID(e){m(this.restEncoder,e.client),m(this.restEncoder,e.clock)}writeClient(e){m(this.restEncoder,e)}writeInfo(e){Gr(this.restEncoder,e)}writeString(e){Tt(this.restEncoder,e)}writeParentInfo(e){m(this.restEncoder,e?1:0)}writeTypeRef(e){m(this.restEncoder,e)}writeLen(e){m(this.restEncoder,e)}writeAny(e){ns(this.restEncoder,e)}writeBuf(e){B(this.restEncoder,e)}writeJSON(e){Tt(this.restEncoder,JSON.stringify(e))}writeKey(e){Tt(this.restEncoder,e)}}class zu{constructor(){this.restEncoder=Z(),this.dsCurrVal=0}toUint8Array(){return x(this.restEncoder)}resetDsCurVal(){this.dsCurrVal=0}writeDsClock(e){const t=e-this.dsCurrVal;this.dsCurrVal=e,m(this.restEncoder,t)}writeDsLen(e){e===0&&Se(),m(this.restEncoder,e-1),this.dsCurrVal+=e}}class Lt extends zu{constructor(){super(),this.keyMap=new Map,this.keyClock=0,this.keyClockEncoder=new ur,this.clientEncoder=new Fs,this.leftClockEncoder=new ur,this.rightClockEncoder=new ur,this.infoEncoder=new Vl(Gr),this.stringEncoder=new bv,this.parentInfoEncoder=new Vl(Gr),this.typeRefEncoder=new Fs,this.lenEncoder=new Fs}toUint8Array(){const e=Z();return m(e,0),B(e,this.keyClockEncoder.toUint8Array()),B(e,this.clientEncoder.toUint8Array()),B(e,this.leftClockEncoder.toUint8Array()),B(e,this.rightClockEncoder.toUint8Array()),B(e,x(this.infoEncoder)),B(e,this.stringEncoder.toUint8Array()),B(e,x(this.parentInfoEncoder)),B(e,this.typeRefEncoder.toUint8Array()),B(e,this.lenEncoder.toUint8Array()),Fi(e,x(this.restEncoder)),x(e)}writeLeftID(e){this.clientEncoder.write(e.client),this.leftClockEncoder.write(e.clock)}writeRightID(e){this.clientEncoder.write(e.client),this.rightClockEncoder.write(e.clock)}writeClient(e){this.clientEncoder.write(e)}writeInfo(e){this.infoEncoder.write(e)}writeString(e){this.stringEncoder.write(e)}writeParentInfo(e){this.parentInfoEncoder.write(e?1:0)}writeTypeRef(e){this.typeRefEncoder.write(e)}writeLen(e){this.lenEncoder.write(e)}writeAny(e){ns(this.restEncoder,e)}writeBuf(e){B(this.restEncoder,e)}writeJSON(e){ns(this.restEncoder,e)}writeKey(e){const t=this.keyMap.get(e);t===void 0?(this.keyClockEncoder.write(this.keyClock++),this.stringEncoder.write(e)):this.keyClockEncoder.write(t)}}const Cb=(n,e,t,s)=>{s=Bt(s,e[0].id.clock);const i=Te(e,s);m(n.restEncoder,e.length-i),n.writeClient(t),m(n.restEncoder,s);const r=e[i];r.write(n,s-r.id.clock);for(let o=i+1;o<e.length;o++)e[o].write(n,0)},pa=(n,e,t)=>{const s=new Map;t.forEach((i,r)=>{q(e,r)>i&&s.set(r,i)}),Vi(e).forEach((i,r)=>{t.has(r)||s.set(r,0)}),m(n.restEncoder,s.size),He(s.entries()).sort((i,r)=>r[0]-i[0]).forEach(([i,r])=>{Cb(n,e.clients.get(i),i,r)})},Eb=(n,e)=>{const t=oe(),s=v(n.restDecoder);for(let i=0;i<s;i++){const r=v(n.restDecoder),o=new Array(r),a=n.readClient();let l=v(n.restDecoder);t.set(a,{i:0,refs:o});for(let c=0;c<r;c++){const h=n.readInfo();switch(Ui&h){case 0:{const u=n.readLen();o[c]=new he(T(a,l),u),l+=u;break}case 10:{const u=v(n.restDecoder);o[c]=new ue(T(a,l),u),l+=u;break}default:{const u=(h&(Fe|ae))===0,d=new H(T(a,l),null,(h&ae)===ae?n.readLeftID():null,null,(h&Fe)===Fe?n.readRightID():null,u?n.readParentInfo()?e.get(n.readString()):n.readLeftID():null,u&&(h&es)===es?n.readString():null,yd(n,h));o[c]=d,l+=d.length}}}}return t},Ib=(n,e,t)=>{const s=[];let i=He(t.keys()).sort((f,p)=>f-p);if(i.length===0)return null;const r=()=>{if(i.length===0)return null;let f=t.get(i[i.length-1]);for(;f.refs.length===f.i;)if(i.pop(),i.length>0)f=t.get(i[i.length-1]);else return null;return f};let o=r();if(o===null)return null;const a=new Qu,l=new Map,c=(f,p)=>{const _=l.get(f);(_==null||_>p)&&l.set(f,p)};let h=o.refs[o.i++];const u=new Map,d=()=>{for(const f of s){const p=f.id.client,_=t.get(p);_?(_.i--,a.clients.set(p,_.refs.slice(_.i)),t.delete(p),_.i=0,_.refs=[]):a.clients.set(p,[f]),i=i.filter(S=>S!==p)}s.length=0};for(;;){if(h.constructor!==ue){const p=Ne(u,h.id.client,()=>q(e,h.id.client))-h.id.clock;if(p<0)s.push(h),c(h.id.client,h.id.clock-1),d();else{const _=h.getMissing(n,e);if(_!==null){s.push(h);const S=t.get(_)||{refs:[],i:0};if(S.refs.length===S.i)c(_,q(e,_)),d();else{h=S.refs[S.i++];continue}}else(p===0||p<h.length)&&(h.integrate(n,p),u.set(h.id.client,h.id.clock+h.length))}}if(s.length>0)h=s.pop();else if(o!==null&&o.i<o.refs.length)h=o.refs[o.i++];else{if(o=r(),o===null)break;h=o.refs[o.i++]}}if(a.clients.size>0){const f=new Lt;return pa(f,a,new Map),m(f.restEncoder,0),{missing:l,update:f.toUint8Array()}}return null},Sb=(n,e)=>pa(n,e.doc.store,e.beforeState),Tb=(n,e,t,s=new un(n))=>L(e,i=>{i.local=!1;let r=!1;const o=i.doc,a=o.store,l=Eb(s,o),c=Ib(i,a,l),h=a.pendingStructs;if(h){for(const[d,f]of h.missing)if(f<q(a,d)){r=!0;break}if(c){for(const[d,f]of c.missing){const p=h.missing.get(d);(p==null||p>f)&&h.missing.set(d,f)}h.update=fi([h.update,c.update])}}else a.pendingStructs=c;const u=Yl(s,i,a);if(a.pendingDs){const d=new un(mt(a.pendingDs));v(d.restDecoder);const f=Yl(d,i,a);u&&f?a.pendingDs=fi([u,f]):a.pendingDs=u||f}else a.pendingDs=u;if(r){const d=a.pendingStructs.update;a.pendingStructs=null,qu(i.doc,d)}},t,!1),qu=(n,e,t,s=un)=>{const i=mt(e);Tb(i,n,t,new s(i))},kb=(n,e,t)=>qu(n,e,t,ju),Ab=(n,e,t=new Map)=>{pa(n,e.store,t),Sn(n,vb(e.store))},Nb=(n,e=new Uint8Array([0]),t=new Lt)=>{const s=Ku(e);Ab(t,n,s);const i=[t.toUint8Array()];if(n.store.pendingDs&&i.push(n.store.pendingDs),n.store.pendingStructs&&i.push(Gb(n.store.pendingStructs.update,e)),i.length>1){if(t.constructor===bs)return $b(i.map((r,o)=>o===0?r:qb(r)));if(t.constructor===Lt)return fi(i)}return i[0]},Rb=(n,e)=>Nb(n,e,new bs),Db=n=>{const e=new Map,t=v(n.restDecoder);for(let s=0;s<t;s++){const i=v(n.restDecoder),r=v(n.restDecoder);e.set(i,r)}return e},Ku=n=>Db(new $u(mt(n))),Yu=(n,e)=>(m(n.restEncoder,e.size),He(e.entries()).sort((t,s)=>s[0]-t[0]).forEach(([t,s])=>{m(n.restEncoder,t),m(n.restEncoder,s)}),n),Ob=(n,e)=>Yu(n,Vi(e.store)),Pb=(n,e=new zu)=>(n instanceof Map?Yu(e,n):Ob(e,n),e.toUint8Array()),Lb=n=>Pb(n,new Gu);class Mb{constructor(){this.l=[]}}const Jl=()=>new Mb,Ql=(n,e)=>n.l.push(e),Xl=(n,e)=>{const t=n.l,s=t.length;n.l=t.filter(i=>e!==i),s===n.l.length&&console.error("[yjs] Tried to remove event handler that doesn't exist.")},Ju=(n,e,t)=>ca(n.l,[e,t]);class Xt{constructor(e,t){this.client=e,this.clock=t}}const Ns=(n,e)=>n===e||n!==null&&e!==null&&n.client===e.client&&n.clock===e.clock,T=(n,e)=>new Xt(n,e),xb=n=>{for(const[e,t]of n.doc.share.entries())if(t===n)return e;throw Se()},$t=(n,e)=>e===void 0?!n.deleted:e.sv.has(n.id.client)&&(e.sv.get(n.id.client)||0)>n.id.clock&&!Wu(e.ds,n.id),Kr=(n,e)=>{const t=Ne(n.meta,Kr,dt),s=n.doc.store;t.has(e)||(e.sv.forEach((i,r)=>{i<q(s,r)&&gt(n,T(r,i))}),Vu(n,e.ds,i=>{}),t.add(e))};class Qu{constructor(){this.clients=new Map,this.pendingStructs=null,this.pendingDs=null}}const Vi=n=>{const e=new Map;return n.clients.forEach((t,s)=>{const i=t[t.length-1];e.set(s,i.id.clock+i.length)}),e},q=(n,e)=>{const t=n.clients.get(e);if(t===void 0)return 0;const s=t[t.length-1];return s.id.clock+s.length},Xu=(n,e)=>{let t=n.clients.get(e.id.client);if(t===void 0)t=[],n.clients.set(e.id.client,t);else{const s=t[t.length-1];if(s.id.clock+s.length!==e.id.clock)throw Se()}t.push(e)},Te=(n,e)=>{let t=0,s=n.length-1,i=n[s],r=i.id.clock;if(r===e)return s;let o=$e(e/(r+i.length-1)*s);for(;t<=s;){if(i=n[o],r=i.id.clock,r<=e){if(e<r+i.length)return o;t=o+1}else s=o-1;o=$e((t+s)/2)}throw Se()},Ub=(n,e)=>{const t=n.clients.get(e.client);return t[Te(t,e.clock)]},pr=Ub,Yr=(n,e,t)=>{const s=Te(e,t),i=e[s];return i.id.clock<t&&i instanceof H?(e.splice(s+1,0,wi(n,i,t-i.id.clock)),s+1):s},gt=(n,e)=>{const t=n.doc.store.clients.get(e.client);return t[Yr(n,t,e.clock)]},Zl=(n,e,t)=>{const s=e.clients.get(t.client),i=Te(s,t.clock),r=s[i];return t.clock!==r.id.clock+r.length-1&&r.constructor!==he&&s.splice(i+1,0,wi(n,r,t.clock-r.id.clock+1)),r},Fb=(n,e,t)=>{const s=n.clients.get(e.id.client);s[Te(s,e.id.clock)]=t},Zu=(n,e,t,s,i)=>{if(s===0)return;const r=t+s;let o=Yr(n,e,t),a;do a=e[o++],r<a.id.clock+a.length&&Yr(n,e,r),i(a);while(o<e.length&&e[o].id.clock<r)};class Bb{constructor(e,t,s){this.doc=e,this.deleteSet=new vs,this.beforeState=Vi(e.store),this.afterState=new Map,this.changed=new Map,this.changedParentTypes=new Map,this._mergeStructs=[],this.origin=t,this.meta=new Map,this.local=s,this.subdocsAdded=new Set,this.subdocsRemoved=new Set,this.subdocsLoaded=new Set,this._needFormattingCleanup=!1}}const ec=(n,e)=>e.deleteSet.clients.size===0&&!Xw(e.afterState,(t,s)=>e.beforeState.get(s)!==t)?!1:(da(e.deleteSet),Sb(n,e),Sn(n,e.deleteSet),!0),tc=(n,e,t)=>{const s=e._item;(s===null||s.id.clock<(n.beforeState.get(s.id.client)||0)&&!s.deleted)&&Ne(n.changed,e,dt).add(t)},Vs=(n,e)=>{let t=n[e],s=n[e-1],i=e;for(;i>0;t=s,s=n[--i-1]){if(s.deleted===t.deleted&&s.constructor===t.constructor&&s.mergeWith(t)){t instanceof H&&t.parentSub!==null&&t.parent._map.get(t.parentSub)===t&&t.parent._map.set(t.parentSub,s);continue}break}const r=e-i;return r&&n.splice(e+1-r,r),r},Vb=(n,e,t)=>{for(const[s,i]of n.clients.entries()){const r=e.clients.get(s);for(let o=i.length-1;o>=0;o--){const a=i[o],l=a.clock+a.len;for(let c=Te(r,a.clock),h=r[c];c<r.length&&h.id.clock<l;h=r[++c]){const u=r[c];if(a.clock+a.len<=u.id.clock)break;u instanceof H&&u.deleted&&!u.keep&&t(u)&&u.gc(e,!1)}}}},Wb=(n,e)=>{n.clients.forEach((t,s)=>{const i=e.clients.get(s);for(let r=t.length-1;r>=0;r--){const o=t[r],a=na(i.length-1,1+Te(i,o.clock+o.len-1));for(let l=a,c=i[l];l>0&&c.id.clock>=o.clock;c=i[l])l-=1+Vs(i,l)}})},ed=(n,e)=>{if(e<n.length){const t=n[e],s=t.doc,i=s.store,r=t.deleteSet,o=t._mergeStructs;try{da(r),t.afterState=Vi(t.doc.store),s.emit("beforeObserverCalls",[t,s]);const a=[];t.changed.forEach((l,c)=>a.push(()=>{(c._item===null||!c._item.deleted)&&c._callObserver(t,l)})),a.push(()=>{t.changedParentTypes.forEach((l,c)=>{c._dEH.l.length>0&&(c._item===null||!c._item.deleted)&&(l=l.filter(h=>h.target._item===null||!h.target._item.deleted),l.forEach(h=>{h.currentTarget=c,h._path=null}),l.sort((h,u)=>h.path.length-u.path.length),Ju(c._dEH,l,t))})}),a.push(()=>s.emit("afterTransaction",[t,s])),ca(a,[]),t._needFormattingCleanup&&aC(t)}finally{s.gc&&Vb(r,i,s.gcFilter),Wb(r,i),t.afterState.forEach((h,u)=>{const d=t.beforeState.get(u)||0;if(d!==h){const f=i.clients.get(u),p=Bt(Te(f,d),1);for(let _=f.length-1;_>=p;)_-=1+Vs(f,_)}});for(let h=o.length-1;h>=0;h--){const{client:u,clock:d}=o[h].id,f=i.clients.get(u),p=Te(f,d);p+1<f.length&&Vs(f,p+1)>1||p>0&&Vs(f,p)}if(!t.local&&t.afterState.get(s.clientID)!==t.beforeState.get(s.clientID)&&(pb(ha,Lu,"[yjs] ",Mu,xu,"Changed the client-id because another client seems to be using it."),s.clientID=Hu()),s.emit("afterTransactionCleanup",[t,s]),s._observers.has("update")){const h=new bs;ec(h,t)&&s.emit("update",[h.toUint8Array(),t.origin,s,t])}if(s._observers.has("updateV2")){const h=new Lt;ec(h,t)&&s.emit("updateV2",[h.toUint8Array(),t.origin,s,t])}const{subdocsAdded:a,subdocsLoaded:l,subdocsRemoved:c}=t;(a.size>0||c.size>0||l.size>0)&&(a.forEach(h=>{h.clientID=s.clientID,h.collectionid==null&&(h.collectionid=s.collectionid),s.subdocs.add(h)}),c.forEach(h=>s.subdocs.delete(h)),s.emit("subdocs",[{loaded:l,added:a,removed:c},s,t]),c.forEach(h=>h.destroy())),n.length<=e+1?(s._transactionCleanups=[],s.emit("afterAllTransactions",[s,n])):ed(n,e+1)}}},L=(n,e,t=null,s=!0)=>{const i=n._transactionCleanups;let r=!1,o=null;n._transaction===null&&(r=!0,n._transaction=new Bb(n,t,s),i.push(n._transaction),i.length===1&&n.emit("beforeAllTransactions",[n]),n.emit("beforeTransaction",[n._transaction,n]));try{o=e(n._transaction)}finally{if(r){const a=n._transaction===i[0];n._transaction=null,a&&ed(i,0)}}return o};function*Hb(n){const e=v(n.restDecoder);for(let t=0;t<e;t++){const s=v(n.restDecoder),i=n.readClient();let r=v(n.restDecoder);for(let o=0;o<s;o++){const a=n.readInfo();if(a===10){const l=v(n.restDecoder);yield new ue(T(i,r),l),r+=l}else if((Ui&a)!==0){const l=(a&(Fe|ae))===0,c=new H(T(i,r),null,(a&ae)===ae?n.readLeftID():null,null,(a&Fe)===Fe?n.readRightID():null,l?n.readParentInfo()?n.readString():n.readLeftID():null,l&&(a&es)===es?n.readString():null,yd(n,a));yield c,r+=c.length}else{const l=n.readLen();yield new he(T(i,r),l),r+=l}}}}class ga{constructor(e,t){this.gen=Hb(e),this.curr=null,this.done=!1,this.filterSkips=t,this.next()}next(){do this.curr=this.gen.next().value||null;while(this.filterSkips&&this.curr!==null&&this.curr.constructor===ue);return this.curr}}class _a{constructor(e){this.currClient=0,this.startClock=0,this.written=0,this.encoder=e,this.clientStructs=[]}}const $b=n=>fi(n,ju,bs),jb=(n,e)=>{if(n.constructor===he){const{client:t,clock:s}=n.id;return new he(T(t,s+e),n.length-e)}else if(n.constructor===ue){const{client:t,clock:s}=n.id;return new ue(T(t,s+e),n.length-e)}else{const t=n,{client:s,clock:i}=t.id;return new H(T(s,i+e),null,T(s,i+e-1),null,t.rightOrigin,t.parent,t.parentSub,t.content.splice(e))}},fi=(n,e=un,t=Lt)=>{if(n.length===1)return n[0];const s=n.map(h=>new e(mt(h)));let i=s.map(h=>new ga(h,!0)),r=null;const o=new t,a=new _a(o);for(;i=i.filter(d=>d.curr!==null),i.sort((d,f)=>{if(d.curr.id.client===f.curr.id.client){const p=d.curr.id.clock-f.curr.id.clock;return p===0?d.curr.constructor===f.curr.constructor?0:d.curr.constructor===ue?1:-1:p}else return f.curr.id.client-d.curr.id.client}),i.length!==0;){const h=i[0],u=h.curr.id.client;if(r!==null){let d=h.curr,f=!1;for(;d!==null&&d.id.clock+d.length<=r.struct.id.clock+r.struct.length&&d.id.client>=r.struct.id.client;)d=h.next(),f=!0;if(d===null||d.id.client!==u||f&&d.id.clock>r.struct.id.clock+r.struct.length)continue;if(u!==r.struct.id.client)Xe(a,r.struct,r.offset),r={struct:d,offset:0},h.next();else if(r.struct.id.clock+r.struct.length<d.id.clock)if(r.struct.constructor===ue)r.struct.length=d.id.clock+d.length-r.struct.id.clock;else{Xe(a,r.struct,r.offset);const p=d.id.clock-r.struct.id.clock-r.struct.length;r={struct:new ue(T(u,r.struct.id.clock+r.struct.length),p),offset:0}}else{const p=r.struct.id.clock+r.struct.length-d.id.clock;p>0&&(r.struct.constructor===ue?r.struct.length-=p:d=jb(d,p)),r.struct.mergeWith(d)||(Xe(a,r.struct,r.offset),r={struct:d,offset:0},h.next())}}else r={struct:h.curr,offset:0},h.next();for(let d=h.curr;d!==null&&d.id.client===u&&d.id.clock===r.struct.id.clock+r.struct.length&&d.constructor!==ue;d=h.next())Xe(a,r.struct,r.offset),r={struct:d,offset:0}}r!==null&&(Xe(a,r.struct,r.offset),r=null),ma(a);const l=s.map(h=>fa(h)),c=yb(l);return Sn(o,c),o.toUint8Array()},Gb=(n,e,t=un,s=Lt)=>{const i=Ku(e),r=new s,o=new _a(r),a=new t(mt(n)),l=new ga(a,!1);for(;l.curr;){const h=l.curr,u=h.id.client,d=i.get(u)||0;if(l.curr.constructor===ue){l.next();continue}if(h.id.clock+h.length>d)for(Xe(o,h,Bt(d-h.id.clock,0)),l.next();l.curr&&l.curr.id.client===u;)Xe(o,l.curr,0),l.next();else for(;l.curr&&l.curr.id.client===u&&l.curr.id.clock+l.curr.length<=d;)l.next()}ma(o);const c=fa(a);return Sn(r,c),r.toUint8Array()},td=n=>{n.written>0&&(n.clientStructs.push({written:n.written,restEncoder:x(n.encoder.restEncoder)}),n.encoder.restEncoder=Z(),n.written=0)},Xe=(n,e,t)=>{n.written>0&&n.currClient!==e.id.client&&td(n),n.written===0&&(n.currClient=e.id.client,n.encoder.writeClient(e.id.client),m(n.encoder.restEncoder,e.id.clock+t)),e.write(n.encoder,t),n.written++},ma=n=>{td(n);const e=n.encoder.restEncoder;m(e,n.clientStructs.length);for(let t=0;t<n.clientStructs.length;t++){const s=n.clientStructs[t];m(e,s.written),Fi(e,s.restEncoder)}},zb=(n,e,t,s)=>{const i=new t(mt(n)),r=new ga(i,!1),o=new s,a=new _a(o);for(let c=r.curr;c!==null;c=r.next())Xe(a,e(c),0);ma(a);const l=fa(i);return Sn(o,l),o.toUint8Array()},qb=n=>zb(n,jv,un,bs),nc="You must not compute changes after the event-handler fired.";class Wi{constructor(e,t){this.target=e,this.currentTarget=e,this.transaction=t,this._changes=null,this._keys=null,this._delta=null,this._path=null}get path(){return this._path||(this._path=Kb(this.currentTarget,this.target))}deletes(e){return Wu(this.transaction.deleteSet,e.id)}get keys(){if(this._keys===null){if(this.transaction.doc._transactionCleanups.length===0)throw ft(nc);const e=new Map,t=this.target;this.transaction.changed.get(t).forEach(i=>{if(i!==null){const r=t._map.get(i);let o,a;if(this.adds(r)){let l=r.left;for(;l!==null&&this.adds(l);)l=l.left;if(this.deletes(r))if(l!==null&&this.deletes(l))o="delete",a=lr(l.content.getContent());else return;else l!==null&&this.deletes(l)?(o="update",a=lr(l.content.getContent())):(o="add",a=void 0)}else if(this.deletes(r))o="delete",a=lr(r.content.getContent());else return;e.set(i,{action:o,oldValue:a})}}),this._keys=e}return this._keys}get delta(){return this.changes.delta}adds(e){return e.id.clock>=(this.transaction.beforeState.get(e.id.client)||0)}get changes(){let e=this._changes;if(e===null){if(this.transaction.doc._transactionCleanups.length===0)throw ft(nc);const t=this.target,s=dt(),i=dt(),r=[];if(e={added:s,deleted:i,delta:r,keys:this.keys},this.transaction.changed.get(t).has(null)){let a=null;const l=()=>{a&&r.push(a)};for(let c=t._start;c!==null;c=c.right)c.deleted?this.deletes(c)&&!this.adds(c)&&((a===null||a.delete===void 0)&&(l(),a={delete:0}),a.delete+=c.length,i.add(c)):this.adds(c)?((a===null||a.insert===void 0)&&(l(),a={insert:[]}),a.insert=a.insert.concat(c.content.getContent()),s.add(c)):((a===null||a.retain===void 0)&&(l(),a={retain:0}),a.retain+=c.length);a!==null&&a.retain===void 0&&l()}this._changes=e}return e}}const Kb=(n,e)=>{const t=[];for(;e._item!==null&&e!==n;){if(e._item.parentSub!==null)t.unshift(e._item.parentSub);else{let s=0,i=e._item.parent._start;for(;i!==e._item&&i!==null;)!i.deleted&&i.countable&&(s+=i.length),i=i.right;t.unshift(s)}e=e._item.parent}return t},ee=()=>{gb("Invalid access: Add Yjs type to a document before reading data.")},nd=80;let ya=0;class Yb{constructor(e,t){e.marker=!0,this.p=e,this.index=t,this.timestamp=ya++}}const Jb=n=>{n.timestamp=ya++},sd=(n,e,t)=>{n.p.marker=!1,n.p=e,e.marker=!0,n.index=t,n.timestamp=ya++},Qb=(n,e,t)=>{if(n.length>=nd){const s=n.reduce((i,r)=>i.timestamp<r.timestamp?i:r);return sd(s,e,t),s}else{const s=new Yb(e,t);return n.push(s),s}},Hi=(n,e)=>{if(n._start===null||e===0||n._searchMarker===null)return null;const t=n._searchMarker.length===0?null:n._searchMarker.reduce((r,o)=>Us(e-r.index)<Us(e-o.index)?r:o);let s=n._start,i=0;for(t!==null&&(s=t.p,i=t.index,Jb(t));s.right!==null&&i<e;){if(!s.deleted&&s.countable){if(e<i+s.length)break;i+=s.length}s=s.right}for(;s.left!==null&&i>e;)s=s.left,!s.deleted&&s.countable&&(i-=s.length);for(;s.left!==null&&s.left.id.client===s.id.client&&s.left.id.clock+s.left.length===s.id.clock;)s=s.left,!s.deleted&&s.countable&&(i-=s.length);return t!==null&&Us(t.index-i)<s.parent.length/nd?(sd(t,s,i),t):Qb(n._searchMarker,s,i)},is=(n,e,t)=>{for(let s=n.length-1;s>=0;s--){const i=n[s];if(t>0){let r=i.p;for(r.marker=!1;r&&(r.deleted||!r.countable);)r=r.left,r&&!r.deleted&&r.countable&&(i.index-=r.length);if(r===null||r.marker===!0){n.splice(s,1);continue}i.p=r,r.marker=!0}(e<i.index||t>0&&e===i.index)&&(i.index=Bt(e,i.index+t))}},$i=(n,e,t)=>{const s=n,i=e.changedParentTypes;for(;Ne(i,n,()=>[]).push(t),n._item!==null;)n=n._item.parent;Ju(s._eH,t,e)};class Y{constructor(){this._item=null,this._map=new Map,this._start=null,this.doc=null,this._length=0,this._eH=Jl(),this._dEH=Jl(),this._searchMarker=null}get parent(){return this._item?this._item.parent:null}_integrate(e,t){this.doc=e,this._item=t}_copy(){throw Ee()}clone(){throw Ee()}_write(e){}get _first(){let e=this._start;for(;e!==null&&e.deleted;)e=e.right;return e}_callObserver(e,t){!e.local&&this._searchMarker&&(this._searchMarker.length=0)}observe(e){Ql(this._eH,e)}observeDeep(e){Ql(this._dEH,e)}unobserve(e){Xl(this._eH,e)}unobserveDeep(e){Xl(this._dEH,e)}toJSON(){}}const id=(n,e,t)=>{n.doc??ee(),e<0&&(e=n._length+e),t<0&&(t=n._length+t);let s=t-e;const i=[];let r=n._start;for(;r!==null&&s>0;){if(r.countable&&!r.deleted){const o=r.content.getContent();if(o.length<=e)e-=o.length;else{for(let a=e;a<o.length&&s>0;a++)i.push(o[a]),s--;e=0}}r=r.right}return i},rd=n=>{n.doc??ee();const e=[];let t=n._start;for(;t!==null;){if(t.countable&&!t.deleted){const s=t.content.getContent();for(let i=0;i<s.length;i++)e.push(s[i])}t=t.right}return e},rs=(n,e)=>{let t=0,s=n._start;for(n.doc??ee();s!==null;){if(s.countable&&!s.deleted){const i=s.content.getContent();for(let r=0;r<i.length;r++)e(i[r],t++,n)}s=s.right}},od=(n,e)=>{const t=[];return rs(n,(s,i)=>{t.push(e(s,i,n))}),t},Xb=n=>{let e=n._start,t=null,s=0;return{[Symbol.iterator](){return this},next:()=>{if(t===null){for(;e!==null&&e.deleted;)e=e.right;if(e===null)return{done:!0,value:void 0};t=e.content.getContent(),s=0,e=e.right}const i=t[s++];return t.length<=s&&(t=null),{done:!1,value:i}}}},ad=(n,e)=>{n.doc??ee();const t=Hi(n,e);let s=n._start;for(t!==null&&(s=t.p,e-=t.index);s!==null;s=s.right)if(!s.deleted&&s.countable){if(e<s.length)return s.content.getContent()[e];e-=s.length}},pi=(n,e,t,s)=>{let i=t;const r=n.doc,o=r.clientID,a=r.store,l=t===null?e._start:t.right;let c=[];const h=()=>{c.length>0&&(i=new H(T(o,q(a,o)),i,i&&i.lastId,l,l&&l.id,e,null,new xt(c)),i.integrate(n,0),c=[])};s.forEach(u=>{if(u===null)c.push(u);else switch(u.constructor){case Number:case Object:case Boolean:case Array:case String:c.push(u);break;default:switch(h(),u.constructor){case Uint8Array:case ArrayBuffer:i=new H(T(o,q(a,o)),i,i&&i.lastId,l,l&&l.id,e,null,new Cs(new Uint8Array(u))),i.integrate(n,0);break;case Tn:i=new H(T(o,q(a,o)),i,i&&i.lastId,l,l&&l.id,e,null,new Es(u)),i.integrate(n,0);break;default:if(u instanceof Y)i=new H(T(o,q(a,o)),i,i&&i.lastId,l,l&&l.id,e,null,new ze(u)),i.integrate(n,0);else throw new Error("Unexpected content type in insert operation")}}}),h()},ld=()=>ft("Length exceeded!"),cd=(n,e,t,s)=>{if(t>e._length)throw ld();if(t===0)return e._searchMarker&&is(e._searchMarker,t,s.length),pi(n,e,null,s);const i=t,r=Hi(e,t);let o=e._start;for(r!==null&&(o=r.p,t-=r.index,t===0&&(o=o.prev,t+=o&&o.countable&&!o.deleted?o.length:0));o!==null;o=o.right)if(!o.deleted&&o.countable){if(t<=o.length){t<o.length&&gt(n,T(o.id.client,o.id.clock+t));break}t-=o.length}return e._searchMarker&&is(e._searchMarker,i,s.length),pi(n,e,o,s)},Zb=(n,e,t)=>{let i=(e._searchMarker||[]).reduce((r,o)=>o.index>r.index?o:r,{index:0,p:e._start}).p;if(i)for(;i.right;)i=i.right;return pi(n,e,i,t)},hd=(n,e,t,s)=>{if(s===0)return;const i=t,r=s,o=Hi(e,t);let a=e._start;for(o!==null&&(a=o.p,t-=o.index);a!==null&&t>0;a=a.right)!a.deleted&&a.countable&&(t<a.length&&gt(n,T(a.id.client,a.id.clock+t)),t-=a.length);for(;s>0&&a!==null;)a.deleted||(s<a.length&&gt(n,T(a.id.client,a.id.clock+s)),a.delete(n),s-=a.length),a=a.right;if(s>0)throw ld();e._searchMarker&&is(e._searchMarker,i,-r+s)},gi=(n,e,t)=>{const s=e._map.get(t);s!==void 0&&s.delete(n)},wa=(n,e,t,s)=>{const i=e._map.get(t)||null,r=n.doc,o=r.clientID;let a;if(s==null)a=new xt([s]);else switch(s.constructor){case Number:case Object:case Boolean:case Array:case String:case Date:case BigInt:a=new xt([s]);break;case Uint8Array:a=new Cs(s);break;case Tn:a=new Es(s);break;default:if(s instanceof Y)a=new ze(s);else throw new Error("Unexpected content type")}new H(T(o,q(r.store,o)),i,i&&i.lastId,null,null,e,t,a).integrate(n,0)},va=(n,e)=>{n.doc??ee();const t=n._map.get(e);return t!==void 0&&!t.deleted?t.content.getContent()[t.length-1]:void 0},ud=n=>{const e={};return n.doc??ee(),n._map.forEach((t,s)=>{t.deleted||(e[s]=t.content.getContent()[t.length-1])}),e},dd=(n,e)=>{n.doc??ee();const t=n._map.get(e);return t!==void 0&&!t.deleted},eC=(n,e)=>{const t={};return n._map.forEach((s,i)=>{let r=s;for(;r!==null&&(!e.sv.has(r.id.client)||r.id.clock>=(e.sv.get(r.id.client)||0));)r=r.left;r!==null&&$t(r,e)&&(t[i]=r.content.getContent()[r.length-1])}),t},Rs=n=>(n.doc??ee(),_b(n._map.entries(),e=>!e[1].deleted));class tC extends Wi{}class Zt extends Y{constructor(){super(),this._prelimContent=[],this._searchMarker=[]}static from(e){const t=new Zt;return t.push(e),t}_integrate(e,t){super._integrate(e,t),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new Zt}clone(){const e=new Zt;return e.insert(0,this.toArray().map(t=>t instanceof Y?t.clone():t)),e}get length(){return this.doc??ee(),this._length}_callObserver(e,t){super._callObserver(e,t),$i(this,e,new tC(this,e))}insert(e,t){this.doc!==null?L(this.doc,s=>{cd(s,this,e,t)}):this._prelimContent.splice(e,0,...t)}push(e){this.doc!==null?L(this.doc,t=>{Zb(t,this,e)}):this._prelimContent.push(...e)}unshift(e){this.insert(0,e)}delete(e,t=1){this.doc!==null?L(this.doc,s=>{hd(s,this,e,t)}):this._prelimContent.splice(e,t)}get(e){return ad(this,e)}toArray(){return rd(this)}slice(e=0,t=this.length){return id(this,e,t)}toJSON(){return this.map(e=>e instanceof Y?e.toJSON():e)}map(e){return od(this,e)}forEach(e){rs(this,e)}[Symbol.iterator](){return Xb(this)}_write(e){e.writeTypeRef(TC)}}const nC=n=>new Zt;class sC extends Wi{constructor(e,t,s){super(e,t),this.keysChanged=s}}class dn extends Y{constructor(e){super(),this._prelimContent=null,e===void 0?this._prelimContent=new Map:this._prelimContent=new Map(e)}_integrate(e,t){super._integrate(e,t),this._prelimContent.forEach((s,i)=>{this.set(i,s)}),this._prelimContent=null}_copy(){return new dn}clone(){const e=new dn;return this.forEach((t,s)=>{e.set(s,t instanceof Y?t.clone():t)}),e}_callObserver(e,t){$i(this,e,new sC(this,e,t))}toJSON(){this.doc??ee();const e={};return this._map.forEach((t,s)=>{if(!t.deleted){const i=t.content.getContent()[t.length-1];e[s]=i instanceof Y?i.toJSON():i}}),e}get size(){return[...Rs(this)].length}keys(){return fr(Rs(this),e=>e[0])}values(){return fr(Rs(this),e=>e[1].content.getContent()[e[1].length-1])}entries(){return fr(Rs(this),e=>[e[0],e[1].content.getContent()[e[1].length-1]])}forEach(e){this.doc??ee(),this._map.forEach((t,s)=>{t.deleted||e(t.content.getContent()[t.length-1],s,this)})}[Symbol.iterator](){return this.entries()}delete(e){this.doc!==null?L(this.doc,t=>{gi(t,this,e)}):this._prelimContent.delete(e)}set(e,t){return this.doc!==null?L(this.doc,s=>{wa(s,this,e,t)}):this._prelimContent.set(e,t),t}get(e){return va(this,e)}has(e){return dd(this,e)}clear(){this.doc!==null?L(this.doc,e=>{this.forEach(function(t,s,i){gi(e,i,s)})}):this._prelimContent.clear()}_write(e){e.writeTypeRef(kC)}}const iC=n=>new dn,tt=(n,e)=>n===e||typeof n=="object"&&typeof e=="object"&&n&&e&&Hv(n,e);class Jr{constructor(e,t,s,i){this.left=e,this.right=t,this.index=s,this.currentAttributes=i}forward(){switch(this.right===null&&Se(),this.right.content.constructor){case $:this.right.deleted||kn(this.currentAttributes,this.right.content);break;default:this.right.deleted||(this.index+=this.right.length);break}this.left=this.right,this.right=this.right.right}}const sc=(n,e,t)=>{for(;e.right!==null&&t>0;){switch(e.right.content.constructor){case $:e.right.deleted||kn(e.currentAttributes,e.right.content);break;default:e.right.deleted||(t<e.right.length&&gt(n,T(e.right.id.client,e.right.id.clock+t)),e.index+=e.right.length,t-=e.right.length);break}e.left=e.right,e.right=e.right.right}return e},Ds=(n,e,t,s)=>{const i=new Map,r=s?Hi(e,t):null;if(r){const o=new Jr(r.p.left,r.p,r.index,i);return sc(n,o,t-r.index)}else{const o=new Jr(null,e._start,0,i);return sc(n,o,t)}},fd=(n,e,t,s)=>{for(;t.right!==null&&(t.right.deleted===!0||t.right.content.constructor===$&&tt(s.get(t.right.content.key),t.right.content.value));)t.right.deleted||s.delete(t.right.content.key),t.forward();const i=n.doc,r=i.clientID;s.forEach((o,a)=>{const l=t.left,c=t.right,h=new H(T(r,q(i.store,r)),l,l&&l.lastId,c,c&&c.id,e,null,new $(a,o));h.integrate(n,0),t.right=h,t.forward()})},kn=(n,e)=>{const{key:t,value:s}=e;s===null?n.delete(t):n.set(t,s)},pd=(n,e)=>{for(;n.right!==null;){if(!(n.right.deleted||n.right.content.constructor===$&&tt(e[n.right.content.key]??null,n.right.content.value)))break;n.forward()}},gd=(n,e,t,s)=>{const i=n.doc,r=i.clientID,o=new Map;for(const a in s){const l=s[a],c=t.currentAttributes.get(a)??null;if(!tt(c,l)){o.set(a,c);const{left:h,right:u}=t;t.right=new H(T(r,q(i.store,r)),h,h&&h.lastId,u,u&&u.id,e,null,new $(a,l)),t.right.integrate(n,0),t.forward()}}return o},gr=(n,e,t,s,i)=>{t.currentAttributes.forEach((d,f)=>{i[f]===void 0&&(i[f]=null)});const r=n.doc,o=r.clientID;pd(t,i);const a=gd(n,e,t,i),l=s.constructor===String?new ke(s):s instanceof Y?new ze(s):new Vt(s);let{left:c,right:h,index:u}=t;e._searchMarker&&is(e._searchMarker,t.index,l.getLength()),h=new H(T(o,q(r.store,o)),c,c&&c.lastId,h,h&&h.id,e,null,l),h.integrate(n,0),t.right=h,t.index=u,t.forward(),fd(n,e,t,a)},ic=(n,e,t,s,i)=>{const r=n.doc,o=r.clientID;pd(t,i);const a=gd(n,e,t,i);e:for(;t.right!==null&&(s>0||a.size>0&&(t.right.deleted||t.right.content.constructor===$));){if(!t.right.deleted)switch(t.right.content.constructor){case $:{const{key:l,value:c}=t.right.content,h=i[l];if(h!==void 0){if(tt(h,c))a.delete(l);else{if(s===0)break e;a.set(l,c)}t.right.delete(n)}else t.currentAttributes.set(l,c);break}default:s<t.right.length&&gt(n,T(t.right.id.client,t.right.id.clock+s)),s-=t.right.length;break}t.forward()}if(s>0){let l="";for(;s>0;s--)l+=`
`;t.right=new H(T(o,q(r.store,o)),t.left,t.left&&t.left.lastId,t.right,t.right&&t.right.id,e,null,new ke(l)),t.right.integrate(n,0),t.forward()}fd(n,e,t,a)},_d=(n,e,t,s,i)=>{let r=e;const o=oe();for(;r&&(!r.countable||r.deleted);){if(!r.deleted&&r.content.constructor===$){const c=r.content;o.set(c.key,c)}r=r.right}let a=0,l=!1;for(;e!==r;){if(t===e&&(l=!0),!e.deleted){const c=e.content;switch(c.constructor){case $:{const{key:h,value:u}=c,d=s.get(h)??null;(o.get(h)!==c||d===u)&&(e.delete(n),a++,!l&&(i.get(h)??null)===u&&d!==u&&(d===null?i.delete(h):i.set(h,d))),!l&&!e.deleted&&kn(i,c);break}}}e=e.right}return a},rC=(n,e)=>{for(;e&&e.right&&(e.right.deleted||!e.right.countable);)e=e.right;const t=new Set;for(;e&&(e.deleted||!e.countable);){if(!e.deleted&&e.content.constructor===$){const s=e.content.key;t.has(s)?e.delete(n):t.add(s)}e=e.left}},oC=n=>{let e=0;return L(n.doc,t=>{let s=n._start,i=n._start,r=oe();const o=$r(r);for(;i;){if(i.deleted===!1)switch(i.content.constructor){case $:kn(o,i.content);break;default:e+=_d(t,s,i,r,o),r=$r(o),s=i;break}i=i.right}}),e},aC=n=>{const e=new Set,t=n.doc;for(const[s,i]of n.afterState.entries()){const r=n.beforeState.get(s)||0;i!==r&&Zu(n,t.store.clients.get(s),r,i,o=>{!o.deleted&&o.content.constructor===$&&o.constructor!==he&&e.add(o.parent)})}L(t,s=>{Vu(n,n.deleteSet,i=>{if(i instanceof he||!i.parent._hasFormatting||e.has(i.parent))return;const r=i.parent;i.content.constructor===$?e.add(r):rC(s,i)});for(const i of e)oC(i)})},rc=(n,e,t)=>{const s=t,i=$r(e.currentAttributes),r=e.right;for(;t>0&&e.right!==null;){if(e.right.deleted===!1)switch(e.right.content.constructor){case ze:case Vt:case ke:t<e.right.length&&gt(n,T(e.right.id.client,e.right.id.clock+t)),t-=e.right.length,e.right.delete(n);break}e.forward()}r&&_d(n,r,e.right,i,e.currentAttributes);const o=(e.left||e.right).parent;return o._searchMarker&&is(o._searchMarker,e.index,-s+t),e};class lC extends Wi{constructor(e,t,s){super(e,t),this.childListChanged=!1,this.keysChanged=new Set,s.forEach(i=>{i===null?this.childListChanged=!0:this.keysChanged.add(i)})}get changes(){if(this._changes===null){const e={keys:this.keys,delta:this.delta,added:new Set,deleted:new Set};this._changes=e}return this._changes}get delta(){if(this._delta===null){const e=this.target.doc,t=[];L(e,s=>{const i=new Map,r=new Map;let o=this.target._start,a=null;const l={};let c="",h=0,u=0;const d=()=>{if(a!==null){let f=null;switch(a){case"delete":u>0&&(f={delete:u}),u=0;break;case"insert":(typeof c=="object"||c.length>0)&&(f={insert:c},i.size>0&&(f.attributes={},i.forEach((p,_)=>{p!==null&&(f.attributes[_]=p)}))),c="";break;case"retain":h>0&&(f={retain:h},Vv(l)||(f.attributes=Uv({},l))),h=0;break}f&&t.push(f),a=null}};for(;o!==null;){switch(o.content.constructor){case ze:case Vt:this.adds(o)?this.deletes(o)||(d(),a="insert",c=o.content.getContent()[0],d()):this.deletes(o)?(a!=="delete"&&(d(),a="delete"),u+=1):o.deleted||(a!=="retain"&&(d(),a="retain"),h+=1);break;case ke:this.adds(o)?this.deletes(o)||(a!=="insert"&&(d(),a="insert"),c+=o.content.str):this.deletes(o)?(a!=="delete"&&(d(),a="delete"),u+=o.length):o.deleted||(a!=="retain"&&(d(),a="retain"),h+=o.length);break;case $:{const{key:f,value:p}=o.content;if(this.adds(o)){if(!this.deletes(o)){const _=i.get(f)??null;tt(_,p)?p!==null&&o.delete(s):(a==="retain"&&d(),tt(p,r.get(f)??null)?delete l[f]:l[f]=p)}}else if(this.deletes(o)){r.set(f,p);const _=i.get(f)??null;tt(_,p)||(a==="retain"&&d(),l[f]=_)}else if(!o.deleted){r.set(f,p);const _=l[f];_!==void 0&&(tt(_,p)?_!==null&&o.delete(s):(a==="retain"&&d(),p===null?delete l[f]:l[f]=p))}o.deleted||(a==="insert"&&d(),kn(i,o.content));break}}o=o.right}for(d();t.length>0;){const f=t[t.length-1];if(f.retain!==void 0&&f.attributes===void 0)t.pop();else break}}),this._delta=t}return this._delta}}class fn extends Y{constructor(e){super(),this._pending=e!==void 0?[()=>this.insert(0,e)]:[],this._searchMarker=[],this._hasFormatting=!1}get length(){return this.doc??ee(),this._length}_integrate(e,t){super._integrate(e,t);try{this._pending.forEach(s=>s())}catch(s){console.error(s)}this._pending=null}_copy(){return new fn}clone(){const e=new fn;return e.applyDelta(this.toDelta()),e}_callObserver(e,t){super._callObserver(e,t);const s=new lC(this,e,t);$i(this,e,s),!e.local&&this._hasFormatting&&(e._needFormattingCleanup=!0)}toString(){this.doc??ee();let e="",t=this._start;for(;t!==null;)!t.deleted&&t.countable&&t.content.constructor===ke&&(e+=t.content.str),t=t.right;return e}toJSON(){return this.toString()}applyDelta(e,{sanitize:t=!0}={}){this.doc!==null?L(this.doc,s=>{const i=new Jr(null,this._start,0,new Map);for(let r=0;r<e.length;r++){const o=e[r];if(o.insert!==void 0){const a=!t&&typeof o.insert=="string"&&r===e.length-1&&i.right===null&&o.insert.slice(-1)===`
`?o.insert.slice(0,-1):o.insert;(typeof a!="string"||a.length>0)&&gr(s,this,i,a,o.attributes||{})}else o.retain!==void 0?ic(s,this,i,o.retain,o.attributes||{}):o.delete!==void 0&&rc(s,i,o.delete)}}):this._pending.push(()=>this.applyDelta(e))}toDelta(e,t,s){this.doc??ee();const i=[],r=new Map,o=this.doc;let a="",l=this._start;function c(){if(a.length>0){const u={};let d=!1;r.forEach((p,_)=>{d=!0,u[_]=p});const f={insert:a};d&&(f.attributes=u),i.push(f),a=""}}const h=()=>{for(;l!==null;){if($t(l,e)||t!==void 0&&$t(l,t))switch(l.content.constructor){case ke:{const u=r.get("ychange");e!==void 0&&!$t(l,e)?(u===void 0||u.user!==l.id.client||u.type!=="removed")&&(c(),r.set("ychange",s?s("removed",l.id):{type:"removed"})):t!==void 0&&!$t(l,t)?(u===void 0||u.user!==l.id.client||u.type!=="added")&&(c(),r.set("ychange",s?s("added",l.id):{type:"added"})):u!==void 0&&(c(),r.delete("ychange")),a+=l.content.str;break}case ze:case Vt:{c();const u={insert:l.content.getContent()[0]};if(r.size>0){const d={};u.attributes=d,r.forEach((f,p)=>{d[p]=f})}i.push(u);break}case $:$t(l,e)&&(c(),kn(r,l.content));break}l=l.right}c()};return e||t?L(o,u=>{e&&Kr(u,e),t&&Kr(u,t),h()},"cleanup"):h(),i}insert(e,t,s){if(t.length<=0)return;const i=this.doc;i!==null?L(i,r=>{const o=Ds(r,this,e,!s);s||(s={},o.currentAttributes.forEach((a,l)=>{s[l]=a})),gr(r,this,o,t,s)}):this._pending.push(()=>this.insert(e,t,s))}insertEmbed(e,t,s){const i=this.doc;i!==null?L(i,r=>{const o=Ds(r,this,e,!s);gr(r,this,o,t,s||{})}):this._pending.push(()=>this.insertEmbed(e,t,s||{}))}delete(e,t){if(t===0)return;const s=this.doc;s!==null?L(s,i=>{rc(i,Ds(i,this,e,!0),t)}):this._pending.push(()=>this.delete(e,t))}format(e,t,s){if(t===0)return;const i=this.doc;i!==null?L(i,r=>{const o=Ds(r,this,e,!1);o.right!==null&&ic(r,this,o,t,s)}):this._pending.push(()=>this.format(e,t,s))}removeAttribute(e){this.doc!==null?L(this.doc,t=>{gi(t,this,e)}):this._pending.push(()=>this.removeAttribute(e))}setAttribute(e,t){this.doc!==null?L(this.doc,s=>{wa(s,this,e,t)}):this._pending.push(()=>this.setAttribute(e,t))}getAttribute(e){return va(this,e)}getAttributes(){return ud(this)}_write(e){e.writeTypeRef(AC)}}const cC=n=>new fn;class _r{constructor(e,t=()=>!0){this._filter=t,this._root=e,this._currentNode=e._start,this._firstCall=!0,e.doc??ee()}[Symbol.iterator](){return this}next(){let e=this._currentNode,t=e&&e.content&&e.content.type;if(e!==null&&(!this._firstCall||e.deleted||!this._filter(t)))do if(t=e.content.type,!e.deleted&&(t.constructor===pn||t.constructor===Mt)&&t._start!==null)e=t._start;else for(;e!==null;){const s=e.next;if(s!==null){e=s;break}else e.parent===this._root?e=null:e=e.parent._item}while(e!==null&&(e.deleted||!this._filter(e.content.type)));return this._firstCall=!1,e===null?{value:void 0,done:!0}:(this._currentNode=e,{value:e.content.type,done:!1})}}class Mt extends Y{constructor(){super(),this._prelimContent=[]}get firstChild(){const e=this._first;return e?e.content.getContent()[0]:null}_integrate(e,t){super._integrate(e,t),this.insert(0,this._prelimContent),this._prelimContent=null}_copy(){return new Mt}clone(){const e=new Mt;return e.insert(0,this.toArray().map(t=>t instanceof Y?t.clone():t)),e}get length(){return this.doc??ee(),this._prelimContent===null?this._length:this._prelimContent.length}createTreeWalker(e){return new _r(this,e)}querySelector(e){e=e.toUpperCase();const s=new _r(this,i=>i.nodeName&&i.nodeName.toUpperCase()===e).next();return s.done?null:s.value}querySelectorAll(e){return e=e.toUpperCase(),He(new _r(this,t=>t.nodeName&&t.nodeName.toUpperCase()===e))}_callObserver(e,t){$i(this,e,new dC(this,t,e))}toString(){return od(this,e=>e.toString()).join("")}toJSON(){return this.toString()}toDOM(e=document,t={},s){const i=e.createDocumentFragment();return s!==void 0&&s._createAssociation(i,this),rs(this,r=>{i.insertBefore(r.toDOM(e,t,s),null)}),i}insert(e,t){this.doc!==null?L(this.doc,s=>{cd(s,this,e,t)}):this._prelimContent.splice(e,0,...t)}insertAfter(e,t){if(this.doc!==null)L(this.doc,s=>{const i=e&&e instanceof Y?e._item:e;pi(s,this,i,t)});else{const s=this._prelimContent,i=e===null?0:s.findIndex(r=>r===e)+1;if(i===0&&e!==null)throw ft("Reference item not found");s.splice(i,0,...t)}}delete(e,t=1){this.doc!==null?L(this.doc,s=>{hd(s,this,e,t)}):this._prelimContent.splice(e,t)}toArray(){return rd(this)}push(e){this.insert(this.length,e)}unshift(e){this.insert(0,e)}get(e){return ad(this,e)}slice(e=0,t=this.length){return id(this,e,t)}forEach(e){rs(this,e)}_write(e){e.writeTypeRef(RC)}}const hC=n=>new Mt;class pn extends Mt{constructor(e="UNDEFINED"){super(),this.nodeName=e,this._prelimAttrs=new Map}get nextSibling(){const e=this._item?this._item.next:null;return e?e.content.type:null}get prevSibling(){const e=this._item?this._item.prev:null;return e?e.content.type:null}_integrate(e,t){super._integrate(e,t),this._prelimAttrs.forEach((s,i)=>{this.setAttribute(i,s)}),this._prelimAttrs=null}_copy(){return new pn(this.nodeName)}clone(){const e=new pn(this.nodeName),t=this.getAttributes();return Fv(t,(s,i)=>{typeof s=="string"&&e.setAttribute(i,s)}),e.insert(0,this.toArray().map(s=>s instanceof Y?s.clone():s)),e}toString(){const e=this.getAttributes(),t=[],s=[];for(const a in e)s.push(a);s.sort();const i=s.length;for(let a=0;a<i;a++){const l=s[a];t.push(l+'="'+e[l]+'"')}const r=this.nodeName.toLocaleLowerCase(),o=t.length>0?" "+t.join(" "):"";return`<${r}${o}>${super.toString()}</${r}>`}removeAttribute(e){this.doc!==null?L(this.doc,t=>{gi(t,this,e)}):this._prelimAttrs.delete(e)}setAttribute(e,t){this.doc!==null?L(this.doc,s=>{wa(s,this,e,t)}):this._prelimAttrs.set(e,t)}getAttribute(e){return va(this,e)}hasAttribute(e){return dd(this,e)}getAttributes(e){return e?eC(this,e):ud(this)}toDOM(e=document,t={},s){const i=e.createElement(this.nodeName),r=this.getAttributes();for(const o in r){const a=r[o];typeof a=="string"&&i.setAttribute(o,a)}return rs(this,o=>{i.appendChild(o.toDOM(e,t,s))}),s!==void 0&&s._createAssociation(i,this),i}_write(e){e.writeTypeRef(NC),e.writeKey(this.nodeName)}}const uC=n=>new pn(n.readKey());class dC extends Wi{constructor(e,t,s){super(e,s),this.childListChanged=!1,this.attributesChanged=new Set,t.forEach(i=>{i===null?this.childListChanged=!0:this.attributesChanged.add(i)})}}class _i extends dn{constructor(e){super(),this.hookName=e}_copy(){return new _i(this.hookName)}clone(){const e=new _i(this.hookName);return this.forEach((t,s)=>{e.set(s,t)}),e}toDOM(e=document,t={},s){const i=t[this.hookName];let r;return i!==void 0?r=i.createDom(this):r=document.createElement(this.hookName),r.setAttribute("data-yjs-hook",this.hookName),s!==void 0&&s._createAssociation(r,this),r}_write(e){e.writeTypeRef(DC),e.writeKey(this.hookName)}}const fC=n=>new _i(n.readKey());class mi extends fn{get nextSibling(){const e=this._item?this._item.next:null;return e?e.content.type:null}get prevSibling(){const e=this._item?this._item.prev:null;return e?e.content.type:null}_copy(){return new mi}clone(){const e=new mi;return e.applyDelta(this.toDelta()),e}toDOM(e=document,t,s){const i=e.createTextNode(this.toString());return s!==void 0&&s._createAssociation(i,this),i}toString(){return this.toDelta().map(e=>{const t=[];for(const i in e.attributes){const r=[];for(const o in e.attributes[i])r.push({key:o,value:e.attributes[i][o]});r.sort((o,a)=>o.key<a.key?-1:1),t.push({nodeName:i,attrs:r})}t.sort((i,r)=>i.nodeName<r.nodeName?-1:1);let s="";for(let i=0;i<t.length;i++){const r=t[i];s+=`<${r.nodeName}`;for(let o=0;o<r.attrs.length;o++){const a=r.attrs[o];s+=` ${a.key}="${a.value}"`}s+=">"}s+=e.insert;for(let i=t.length-1;i>=0;i--)s+=`</${t[i].nodeName}>`;return s}).join("")}toJSON(){return this.toString()}_write(e){e.writeTypeRef(OC)}}const pC=n=>new mi;class ba{constructor(e,t){this.id=e,this.length=t}get deleted(){throw Ee()}mergeWith(e){return!1}write(e,t,s){throw Ee()}integrate(e,t){throw Ee()}}const gC=0;class he extends ba{get deleted(){return!0}delete(){}mergeWith(e){return this.constructor!==e.constructor?!1:(this.length+=e.length,!0)}integrate(e,t){t>0&&(this.id.clock+=t,this.length-=t),Xu(e.doc.store,this)}write(e,t){e.writeInfo(gC),e.writeLen(this.length-t)}getMissing(e,t){return null}}class Cs{constructor(e){this.content=e}getLength(){return 1}getContent(){return[this.content]}isCountable(){return!0}copy(){return new Cs(this.content)}splice(e){throw Ee()}mergeWith(e){return!1}integrate(e,t){}delete(e){}gc(e){}write(e,t){e.writeBuf(this.content)}getRef(){return 3}}const _C=n=>new Cs(n.readBuf());class os{constructor(e){this.len=e}getLength(){return this.len}getContent(){return[]}isCountable(){return!1}copy(){return new os(this.len)}splice(e){const t=new os(this.len-e);return this.len=e,t}mergeWith(e){return this.len+=e.len,!0}integrate(e,t){di(e.deleteSet,t.id.client,t.id.clock,this.len),t.markDeleted()}delete(e){}gc(e){}write(e,t){e.writeLen(this.len-t)}getRef(){return 1}}const mC=n=>new os(n.readLen()),md=(n,e)=>new Tn({guid:n,...e,shouldLoad:e.shouldLoad||e.autoLoad||!1});class Es{constructor(e){e._item&&console.error("This document was already integrated as a sub-document. You should create a second instance instead with the same guid."),this.doc=e;const t={};this.opts=t,e.gc||(t.gc=!1),e.autoLoad&&(t.autoLoad=!0),e.meta!==null&&(t.meta=e.meta)}getLength(){return 1}getContent(){return[this.doc]}isCountable(){return!0}copy(){return new Es(md(this.doc.guid,this.opts))}splice(e){throw Ee()}mergeWith(e){return!1}integrate(e,t){this.doc._item=t,e.subdocsAdded.add(this.doc),this.doc.shouldLoad&&e.subdocsLoaded.add(this.doc)}delete(e){e.subdocsAdded.has(this.doc)?e.subdocsAdded.delete(this.doc):e.subdocsRemoved.add(this.doc)}gc(e){}write(e,t){e.writeString(this.doc.guid),e.writeAny(this.opts)}getRef(){return 9}}const yC=n=>new Es(md(n.readString(),n.readAny()));class Vt{constructor(e){this.embed=e}getLength(){return 1}getContent(){return[this.embed]}isCountable(){return!0}copy(){return new Vt(this.embed)}splice(e){throw Ee()}mergeWith(e){return!1}integrate(e,t){}delete(e){}gc(e){}write(e,t){e.writeJSON(this.embed)}getRef(){return 5}}const wC=n=>new Vt(n.readJSON());class ${constructor(e,t){this.key=e,this.value=t}getLength(){return 1}getContent(){return[]}isCountable(){return!1}copy(){return new $(this.key,this.value)}splice(e){throw Ee()}mergeWith(e){return!1}integrate(e,t){const s=t.parent;s._searchMarker=null,s._hasFormatting=!0}delete(e){}gc(e){}write(e,t){e.writeKey(this.key),e.writeJSON(this.value)}getRef(){return 6}}const vC=n=>new $(n.readKey(),n.readJSON());class yi{constructor(e){this.arr=e}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new yi(this.arr)}splice(e){const t=new yi(this.arr.slice(e));return this.arr=this.arr.slice(0,e),t}mergeWith(e){return this.arr=this.arr.concat(e.arr),!0}integrate(e,t){}delete(e){}gc(e){}write(e,t){const s=this.arr.length;e.writeLen(s-t);for(let i=t;i<s;i++){const r=this.arr[i];e.writeString(r===void 0?"undefined":JSON.stringify(r))}}getRef(){return 2}}const bC=n=>{const e=n.readLen(),t=[];for(let s=0;s<e;s++){const i=n.readString();i==="undefined"?t.push(void 0):t.push(JSON.parse(i))}return new yi(t)},CC=ui("node_env")==="development";class xt{constructor(e){this.arr=e,CC&&Nu(e)}getLength(){return this.arr.length}getContent(){return this.arr}isCountable(){return!0}copy(){return new xt(this.arr)}splice(e){const t=new xt(this.arr.slice(e));return this.arr=this.arr.slice(0,e),t}mergeWith(e){return this.arr=this.arr.concat(e.arr),!0}integrate(e,t){}delete(e){}gc(e){}write(e,t){const s=this.arr.length;e.writeLen(s-t);for(let i=t;i<s;i++){const r=this.arr[i];e.writeAny(r)}}getRef(){return 8}}const EC=n=>{const e=n.readLen(),t=[];for(let s=0;s<e;s++)t.push(n.readAny());return new xt(t)};class ke{constructor(e){this.str=e}getLength(){return this.str.length}getContent(){return this.str.split("")}isCountable(){return!0}copy(){return new ke(this.str)}splice(e){const t=new ke(this.str.slice(e));this.str=this.str.slice(0,e);const s=this.str.charCodeAt(e-1);return s>=55296&&s<=56319&&(this.str=this.str.slice(0,e-1)+"�",t.str="�"+t.str.slice(1)),t}mergeWith(e){return this.str+=e.str,!0}integrate(e,t){}delete(e){}gc(e){}write(e,t){e.writeString(t===0?this.str:this.str.slice(t))}getRef(){return 4}}const IC=n=>new ke(n.readString()),SC=[nC,iC,cC,uC,hC,fC,pC],TC=0,kC=1,AC=2,NC=3,RC=4,DC=5,OC=6;class ze{constructor(e){this.type=e}getLength(){return 1}getContent(){return[this.type]}isCountable(){return!0}copy(){return new ze(this.type._copy())}splice(e){throw Ee()}mergeWith(e){return!1}integrate(e,t){this.type._integrate(e.doc,t)}delete(e){let t=this.type._start;for(;t!==null;)t.deleted?t.id.clock<(e.beforeState.get(t.id.client)||0)&&e._mergeStructs.push(t):t.delete(e),t=t.right;this.type._map.forEach(s=>{s.deleted?s.id.clock<(e.beforeState.get(s.id.client)||0)&&e._mergeStructs.push(s):s.delete(e)}),e.changed.delete(this.type)}gc(e){let t=this.type._start;for(;t!==null;)t.gc(e,!0),t=t.right;this.type._start=null,this.type._map.forEach(s=>{for(;s!==null;)s.gc(e,!0),s=s.left}),this.type._map=new Map}write(e,t){this.type._write(e)}getRef(){return 7}}const PC=n=>new ze(SC[n.readTypeRef()](n)),wi=(n,e,t)=>{const{client:s,clock:i}=e.id,r=new H(T(s,i+t),e,T(s,i+t-1),e.right,e.rightOrigin,e.parent,e.parentSub,e.content.splice(t));return e.deleted&&r.markDeleted(),e.keep&&(r.keep=!0),e.redone!==null&&(r.redone=T(e.redone.client,e.redone.clock+t)),e.right=r,r.right!==null&&(r.right.left=r),n._mergeStructs.push(r),r.parentSub!==null&&r.right===null&&r.parent._map.set(r.parentSub,r),e.length=t,r};class H extends ba{constructor(e,t,s,i,r,o,a,l){super(e,l.getLength()),this.origin=s,this.left=t,this.right=i,this.rightOrigin=r,this.parent=o,this.parentSub=a,this.redone=null,this.content=l,this.info=this.content.isCountable()?Ul:0}set marker(e){(this.info&hr)>0!==e&&(this.info^=hr)}get marker(){return(this.info&hr)>0}get keep(){return(this.info&xl)>0}set keep(e){this.keep!==e&&(this.info^=xl)}get countable(){return(this.info&Ul)>0}get deleted(){return(this.info&cr)>0}set deleted(e){this.deleted!==e&&(this.info^=cr)}markDeleted(){this.info|=cr}getMissing(e,t){if(this.origin&&this.origin.client!==this.id.client&&this.origin.clock>=q(t,this.origin.client))return this.origin.client;if(this.rightOrigin&&this.rightOrigin.client!==this.id.client&&this.rightOrigin.clock>=q(t,this.rightOrigin.client))return this.rightOrigin.client;if(this.parent&&this.parent.constructor===Xt&&this.id.client!==this.parent.client&&this.parent.clock>=q(t,this.parent.client))return this.parent.client;if(this.origin&&(this.left=Zl(e,t,this.origin),this.origin=this.left.lastId),this.rightOrigin&&(this.right=gt(e,this.rightOrigin),this.rightOrigin=this.right.id),this.left&&this.left.constructor===he||this.right&&this.right.constructor===he)this.parent=null;else if(!this.parent)this.left&&this.left.constructor===H?(this.parent=this.left.parent,this.parentSub=this.left.parentSub):this.right&&this.right.constructor===H&&(this.parent=this.right.parent,this.parentSub=this.right.parentSub);else if(this.parent.constructor===Xt){const s=pr(t,this.parent);s.constructor===he?this.parent=null:this.parent=s.content.type}return null}integrate(e,t){if(t>0&&(this.id.clock+=t,this.left=Zl(e,e.doc.store,T(this.id.client,this.id.clock-1)),this.origin=this.left.lastId,this.content=this.content.splice(t),this.length-=t),this.parent){if(!this.left&&(!this.right||this.right.left!==null)||this.left&&this.left.right!==this.right){let s=this.left,i;if(s!==null)i=s.right;else if(this.parentSub!==null)for(i=this.parent._map.get(this.parentSub)||null;i!==null&&i.left!==null;)i=i.left;else i=this.parent._start;const r=new Set,o=new Set;for(;i!==null&&i!==this.right;){if(o.add(i),r.add(i),Ns(this.origin,i.origin)){if(i.id.client<this.id.client)s=i,r.clear();else if(Ns(this.rightOrigin,i.rightOrigin))break}else if(i.origin!==null&&o.has(pr(e.doc.store,i.origin)))r.has(pr(e.doc.store,i.origin))||(s=i,r.clear());else break;i=i.right}this.left=s}if(this.left!==null){const s=this.left.right;this.right=s,this.left.right=this}else{let s;if(this.parentSub!==null)for(s=this.parent._map.get(this.parentSub)||null;s!==null&&s.left!==null;)s=s.left;else s=this.parent._start,this.parent._start=this;this.right=s}this.right!==null?this.right.left=this:this.parentSub!==null&&(this.parent._map.set(this.parentSub,this),this.left!==null&&this.left.delete(e)),this.parentSub===null&&this.countable&&!this.deleted&&(this.parent._length+=this.length),Xu(e.doc.store,this),this.content.integrate(e,this),tc(e,this.parent,this.parentSub),(this.parent._item!==null&&this.parent._item.deleted||this.parentSub!==null&&this.right!==null)&&this.delete(e)}else new he(this.id,this.length).integrate(e,0)}get next(){let e=this.right;for(;e!==null&&e.deleted;)e=e.right;return e}get prev(){let e=this.left;for(;e!==null&&e.deleted;)e=e.left;return e}get lastId(){return this.length===1?this.id:T(this.id.client,this.id.clock+this.length-1)}mergeWith(e){if(this.constructor===e.constructor&&Ns(e.origin,this.lastId)&&this.right===e&&Ns(this.rightOrigin,e.rightOrigin)&&this.id.client===e.id.client&&this.id.clock+this.length===e.id.clock&&this.deleted===e.deleted&&this.redone===null&&e.redone===null&&this.content.constructor===e.content.constructor&&this.content.mergeWith(e.content)){const t=this.parent._searchMarker;return t&&t.forEach(s=>{s.p===e&&(s.p=this,!this.deleted&&this.countable&&(s.index-=this.length))}),e.keep&&(this.keep=!0),this.right=e.right,this.right!==null&&(this.right.left=this),this.length+=e.length,!0}return!1}delete(e){if(!this.deleted){const t=this.parent;this.countable&&this.parentSub===null&&(t._length-=this.length),this.markDeleted(),di(e.deleteSet,this.id.client,this.id.clock,this.length),tc(e,t,this.parentSub),this.content.delete(e)}}gc(e,t){if(!this.deleted)throw Se();this.content.gc(e),t?Fb(e,this,new he(this.id,this.length)):this.content=new os(this.length)}write(e,t){const s=t>0?T(this.id.client,this.id.clock+t-1):this.origin,i=this.rightOrigin,r=this.parentSub,o=this.content.getRef()&Ui|(s===null?0:ae)|(i===null?0:Fe)|(r===null?0:es);if(e.writeInfo(o),s!==null&&e.writeLeftID(s),i!==null&&e.writeRightID(i),s===null&&i===null){const a=this.parent;if(a._item!==void 0){const l=a._item;if(l===null){const c=xb(a);e.writeParentInfo(!0),e.writeString(c)}else e.writeParentInfo(!1),e.writeLeftID(l.id)}else a.constructor===String?(e.writeParentInfo(!0),e.writeString(a)):a.constructor===Xt?(e.writeParentInfo(!1),e.writeLeftID(a)):Se();r!==null&&e.writeString(r)}this.content.write(e,t)}}const yd=(n,e)=>LC[e&Ui](n),LC=[()=>{Se()},mC,bC,_C,IC,wC,vC,PC,EC,yC,()=>{Se()}],MC=10;class ue extends ba{get deleted(){return!0}delete(){}mergeWith(e){return this.constructor!==e.constructor?!1:(this.length+=e.length,!0)}integrate(e,t){Se()}write(e,t){e.writeInfo(MC),m(e.restEncoder,this.length-t)}getMissing(e,t){return null}}const wd=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:{},vd="__ $YJS$ __";wd[vd]===!0&&console.error("Yjs was already imported. This breaks constructor checks and will lead to issues! - https://github.com/yjs/yjs/issues/438");wd[vd]=!0;const bd=new Map;class xC{constructor(e){this.room=e,this.onmessage=null,this._onChange=t=>t.key===e&&this.onmessage!==null&&this.onmessage({data:nb(t.newValue||"")}),Mv(this._onChange)}postMessage(e){Tu.setItem(this.room,tb(Jv(e)))}close(){xv(this._onChange)}}const UC=typeof BroadcastChannel>"u"?xC:BroadcastChannel,Ca=n=>Ne(bd,n,()=>{const e=dt(),t=new UC(n);return t.onmessage=s=>e.forEach(i=>i(s.data,"broadcastchannel")),{bc:t,subs:e}}),FC=(n,e)=>(Ca(n).subs.add(e),e),BC=(n,e)=>{const t=Ca(n),s=t.subs.delete(e);return s&&t.subs.size===0&&(t.bc.close(),bd.delete(n)),s},jt=(n,e,t=null)=>{const s=Ca(n);s.bc.postMessage(e),s.subs.forEach(i=>i(e,t))},Cd=0,Ea=1,Ed=2,Qr=(n,e)=>{m(n,Cd);const t=Lb(e);B(n,t)},Id=(n,e,t)=>{m(n,Ea),B(n,Rb(e,t))},VC=(n,e,t)=>Id(e,t,X(n)),Sd=(n,e,t)=>{try{kb(e,X(n),t)}catch(s){console.error("Caught error while handling a Yjs update",s)}},WC=(n,e)=>{m(n,Ed),B(n,e)},HC=Sd,$C=(n,e,t,s)=>{const i=v(n);switch(i){case Cd:VC(n,e,t);break;case Ea:Sd(n,t,s);break;case Ed:HC(n,t,s);break;default:throw new Error("Unknown message type")}return i},jC=0,GC=(n,e,t)=>{switch(v(n)){case jC:t(e,lt(n))}},mr=3e4;class zC extends tv{constructor(e){super(),this.doc=e,this.clientID=e.clientID,this.states=new Map,this.meta=new Map,this._checkInterval=setInterval(()=>{const t=Pt();this.getLocalState()!==null&&mr/2<=t-this.meta.get(this.clientID).lastUpdated&&this.setLocalState(this.getLocalState());const s=[];this.meta.forEach((i,r)=>{r!==this.clientID&&mr<=t-i.lastUpdated&&this.states.has(r)&&s.push(r)}),s.length>0&&Ia(this,s,"timeout")},$e(mr/10)),e.on("destroy",()=>{this.destroy()}),this.setLocalState({})}destroy(){this.emit("destroy",[this]),this.setLocalState(null),super.destroy(),clearInterval(this._checkInterval)}getLocalState(){return this.states.get(this.clientID)||null}setLocalState(e){const t=this.clientID,s=this.meta.get(t),i=s===void 0?0:s.clock+1,r=this.states.get(t);e===null?this.states.delete(t):this.states.set(t,e),this.meta.set(t,{clock:i,lastUpdated:Pt()});const o=[],a=[],l=[],c=[];e===null?c.push(t):r==null?e!=null&&o.push(t):(a.push(t),Vn(r,e)||l.push(t)),(o.length>0||l.length>0||c.length>0)&&this.emit("change",[{added:o,updated:l,removed:c},"local"]),this.emit("update",[{added:o,updated:a,removed:c},"local"])}setLocalStateField(e,t){const s=this.getLocalState();s!==null&&this.setLocalState({...s,[e]:t})}getStates(){return this.states}}const Ia=(n,e,t)=>{const s=[];for(let i=0;i<e.length;i++){const r=e[i];if(n.states.has(r)){if(n.states.delete(r),r===n.clientID){const o=n.meta.get(r);n.meta.set(r,{clock:o.clock+1,lastUpdated:Pt()})}s.push(r)}}s.length>0&&(n.emit("change",[{added:[],updated:[],removed:s},t]),n.emit("update",[{added:[],updated:[],removed:s},t]))},Wn=(n,e,t=n.states)=>{const s=e.length,i=Z();m(i,s);for(let r=0;r<s;r++){const o=e[r],a=t.get(o)||null,l=n.meta.get(o).clock;m(i,o),m(i,l),Tt(i,JSON.stringify(a))}return x(i)},qC=(n,e,t)=>{const s=mt(e),i=Pt(),r=[],o=[],a=[],l=[],c=v(s);for(let h=0;h<c;h++){const u=v(s);let d=v(s);const f=JSON.parse(lt(s)),p=n.meta.get(u),_=n.states.get(u),S=p===void 0?0:p.clock;(S<d||S===d&&f===null&&n.states.has(u))&&(f===null?u===n.clientID&&n.getLocalState()!=null?d++:n.states.delete(u):n.states.set(u,f),n.meta.set(u,{clock:d,lastUpdated:i}),p===void 0&&f!==null?r.push(u):p!==void 0&&f===null?l.push(u):f!==null&&(Vn(f,_)||a.push(u),o.push(u)))}(r.length>0||a.length>0||l.length>0)&&n.emit("change",[{added:r,updated:a,removed:l},t]),(r.length>0||o.length>0||l.length>0)&&n.emit("update",[{added:r,updated:o,removed:l},t])},KC=n=>Bv(n,(e,t)=>`${encodeURIComponent(t)}=${encodeURIComponent(e)}`).join("&"),Ct=0,Td=3,en=1,YC=2,Is=[];Is[Ct]=(n,e,t,s,i)=>{m(n,Ct);const r=$C(e,n,t.doc,t);s&&r===Ea&&!t.synced&&(t.synced=!0)};Is[Td]=(n,e,t,s,i)=>{m(n,en),B(n,Wn(t.awareness,Array.from(t.awareness.getStates().keys())))};Is[en]=(n,e,t,s,i)=>{qC(t.awareness,X(e),t)};Is[YC]=(n,e,t,s,i)=>{GC(e,t.doc,(r,o)=>JC(t,o))};const oc=3e4,JC=(n,e)=>console.warn(`Permission denied to access ${n.url}.
${e}`),kd=(n,e,t)=>{const s=mt(e),i=Z(),r=v(s),o=n.messageHandlers[r];return o?o(i,s,n,t,r):console.error("Unable to compute message"),i},Xr=(n,e,t)=>{e===n.ws&&(n.emit("connection-close",[t,n]),n.ws=null,e.close(),n.wsconnecting=!1,n.wsconnected?(n.wsconnected=!1,n.synced=!1,Ia(n.awareness,Array.from(n.awareness.getStates().keys()).filter(s=>s!==n.doc.clientID),n),n.emit("status",[{status:"disconnected"}])):n.wsUnsuccessfulReconnects++,setTimeout(Ad,na(nv(2,n.wsUnsuccessfulReconnects)*100,n.maxBackoffTime),n))},Ad=n=>{if(n.shouldConnect&&n.ws===null){const e=new n._WS(n.url,n.protocols);e.binaryType="arraybuffer",n.ws=e,n.wsconnecting=!0,n.wsconnected=!1,n.synced=!1,e.onmessage=t=>{n.wsLastMessageReceived=Pt();const s=kd(n,new Uint8Array(t.data),!0);sa(s)>1&&e.send(x(s))},e.onerror=t=>{n.emit("connection-error",[t,n])},e.onclose=t=>{Xr(n,e,t)},e.onopen=()=>{n.wsLastMessageReceived=Pt(),n.wsconnecting=!1,n.wsconnected=!0,n.wsUnsuccessfulReconnects=0,n.emit("status",[{status:"connected"}]);const t=Z();if(m(t,Ct),Qr(t,n.doc),e.send(x(t)),n.awareness.getLocalState()!==null){const s=Z();m(s,en),B(s,Wn(n.awareness,[n.doc.clientID])),e.send(x(s))}},n.emit("status",[{status:"connecting"}])}},yr=(n,e)=>{const t=n.ws;n.wsconnected&&t&&t.readyState===t.OPEN&&t.send(e),n.bcconnected&&jt(n.bcChannel,e,n)};class QC extends wu{constructor(e,t,s,{connect:i=!0,awareness:r=new zC(s),params:o={},protocols:a=[],WebSocketPolyfill:l=WebSocket,resyncInterval:c=-1,maxBackoffTime:h=2500,disableBc:u=!1}={}){for(super();e[e.length-1]==="/";)e=e.slice(0,e.length-1);this.serverUrl=e,this.bcChannel=e+"/"+t,this.maxBackoffTime=h,this.params=o,this.protocols=a,this.roomname=t,this.doc=s,this._WS=l,this.awareness=r,this.wsconnected=!1,this.wsconnecting=!1,this.bcconnected=!1,this.disableBc=u,this.wsUnsuccessfulReconnects=0,this.messageHandlers=Is.slice(),this._synced=!1,this.ws=null,this.wsLastMessageReceived=0,this.shouldConnect=i,this._resyncInterval=0,c>0&&(this._resyncInterval=setInterval(()=>{if(this.ws&&this.ws.readyState===WebSocket.OPEN){const d=Z();m(d,Ct),Qr(d,s),this.ws.send(x(d))}},c)),this._bcSubscriber=(d,f)=>{if(f!==this){const p=kd(this,new Uint8Array(d),!1);sa(p)>1&&jt(this.bcChannel,x(p),this)}},this._updateHandler=(d,f)=>{if(f!==this){const p=Z();m(p,Ct),WC(p,d),yr(this,x(p))}},this.doc.on("update",this._updateHandler),this._awarenessUpdateHandler=({added:d,updated:f,removed:p},_)=>{const S=d.concat(f).concat(p),Q=Z();m(Q,en),B(Q,Wn(r,S)),yr(this,x(Q))},this._exitHandler=()=>{Ia(this.awareness,[s.clientID],"app closed")},pt&&typeof process<"u"&&process.on("exit",this._exitHandler),r.on("update",this._awarenessUpdateHandler),this._checkInterval=setInterval(()=>{this.wsconnected&&oc<Pt()-this.wsLastMessageReceived&&Xr(this,this.ws,null)},oc/10),i&&this.connect()}get url(){const e=KC(this.params);return this.serverUrl+"/"+this.roomname+(e.length===0?"":"?"+e)}get synced(){return this._synced}set synced(e){this._synced!==e&&(this._synced=e,this.emit("synced",[e]),this.emit("sync",[e]))}destroy(){this._resyncInterval!==0&&clearInterval(this._resyncInterval),clearInterval(this._checkInterval),this.disconnect(),pt&&typeof process<"u"&&process.off("exit",this._exitHandler),this.awareness.off("update",this._awarenessUpdateHandler),this.doc.off("update",this._updateHandler),super.destroy()}connectBc(){if(this.disableBc)return;this.bcconnected||(FC(this.bcChannel,this._bcSubscriber),this.bcconnected=!0);const e=Z();m(e,Ct),Qr(e,this.doc),jt(this.bcChannel,x(e),this);const t=Z();m(t,Ct),Id(t,this.doc),jt(this.bcChannel,x(t),this);const s=Z();m(s,Td),jt(this.bcChannel,x(s),this);const i=Z();m(i,en),B(i,Wn(this.awareness,[this.doc.clientID])),jt(this.bcChannel,x(i),this)}disconnectBc(){const e=Z();m(e,en),B(e,Wn(this.awareness,[this.doc.clientID],new Map)),yr(this,x(e)),this.bcconnected&&(BC(this.bcChannel,this._bcSubscriber),this.bcconnected=!1)}disconnect(){this.shouldConnect=!1,this.disconnectBc(),this.ws!==null&&Xr(this,this.ws,null)}connect(){this.shouldConnect=!0,!this.wsconnected&&this.ws===null&&(Ad(this),this.connectBc())}}class XC{constructor(e,t,s){qe(this,"noteId");qe(this,"firebaseDatabase");qe(this,"currentUser");qe(this,"doc");qe(this,"provider");qe(this,"yText");qe(this,"binding");this.noteId=e,this.firebaseDatabase=t,this.currentUser=s,this.doc=new Tn,this.provider=null,this.yText=this.doc.getText("content")}async init(e){const t=window.location.protocol==="https:"?"wss:":"ws:",s=window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"ws://localhost:4000":`${t}//${window.location.host}`;return this.provider=new QC(s,this.noteId,this.doc,{params:{note:this.noteId}}),this.provider.on("status",i=>{console.log("Y.js connection status:",i.status)}),this.bindTextarea(e),this}bindTextarea(e){this.yText.toString()?e.value=this.yText.toString():e.value&&this.yText.insert(0,e.value);let t=!1;e.addEventListener("input",()=>{t=!0;const s=e.value,i=this.yText.toString();s!==i&&this.doc.transact(()=>{this.yText.delete(0,this.yText.length),this.yText.insert(0,s)}),t=!1}),this.yText.observe(s=>{if(!t){const i=e.selectionStart,r=e.value,o=this.yText.toString();if(r!==o){e.value=o;const a=Math.min(i,o.length);e.setSelectionRange(a,a)}}})}setContent(e){e&&!this.yText.toString()&&this.yText.insert(0,e)}getContent(){return this.yText.toString()}destroy(){this.provider&&(this.provider.disconnect(),this.provider.destroy()),this.doc.destroy()}}const gn=n=>`${window.location.origin+window.location.pathname}?note=${n}`,Zr=()=>new URLSearchParams(window.location.search).get("note");window.getNoteIdFromUrl=Zr;window.getShareableLink=gn;let Et=null,eo=null;const ZC=(n,e)=>{Et=n,eo=e};let M=null,Ze=null,k={};const Ss={"_new note":{content:""}},b={title:Object.keys(Ss)[0],isCollaborative:!1,noteId:null,lockedTitle:!1},Nd=()=>"note_"+Date.now()+"_"+Math.random().toString(36).substr(2,9);window.generateNoteId=Nd;console.log("store.ts loaded");try{mg(hi,Yc).catch(n=>console.warn("Persistence error",n))}catch(n){console.warn("Auth persistence not supported, continuing without it:",n)}vg(hi,n=>{M=n||null,n?(tE(n.uid),to(n)):to(null)});const to=n=>{let e=0;const t=50,s=()=>{const i=document.getElementById("user-profile-floating"),r=document.getElementById("user-profile-pic"),o=document.getElementById("user-logout-btn"),a=document.getElementById("user-name");if(!i||!r||!o||!a){e++,e<t?setTimeout(s,100):console.warn("Profile UI elements not found after retries");return}if(n){if(n.photoURL)r.src=n.photoURL,r.style.display="block",i.removeAttribute("data-initial");else{const l=(n.displayName||n.email||"U").charAt(0).toUpperCase();r.style.display="none",i.setAttribute("data-initial",l)}a.textContent=n.displayName||n.email||"Signed in",o.style.display="block",o.innerHTML='<img src="/assets/log-out.png" alt="Logout" />',o.title=`Logout ${n.displayName||n.email}`,i.style.display="flex"}else r.style.display="none",i.removeAttribute("data-initial"),a.textContent="Not signed in",o.style.display="block",o.innerHTML='<img src="/assets/login.png" alt="Login" />',o.title="Sign in with Google",i.removeAttribute("data-initial"),i.style.display="flex"};s()};window.addEventListener("load",()=>{setTimeout(()=>{M&&to(M)},1e3)});const eE=async()=>{if(!M){try{await Vg(hi,yu)}catch(n){console.error("Login error:",n),n.code!=="auth/popup-closed-by-user"&&alert("Failed to login: "+n.message)}return}try{await bg(hi),M=null;const n=document.querySelector("textarea");n&&(n.value=""),k=Object.assign({},Ss),window.location.reload()}catch(n){console.error("Logout error:",n),alert("Failed to logout: "+n.message)}},tE=n=>{nE()},ac=(n,e)=>{let t=Object.assign({},Ss);return new Set([...Object.keys(n),...Object.keys(e)]).forEach(i=>{e[i]?n[i]&&n[i].modified>e[i].modified?t[i]=n[i]:t[i]=e[i]:t[i]=n[i]}),t},nE=()=>{sE().then(n=>{k=ac(k,n),Et&&Et(k),so(k),iE(e=>{k=ac(k,e),Et&&Et(k),so(k),k[b.title]&&eo&&eo(b.title)})})},no=n=>{if(!M)return;const e=ys(In,`/${M.uid}/notes`);xw(e,n)},so=n=>{if(!M)return;const e=`notes_${M.uid}`;localStorage.setItem(e,JSON.stringify(n))};window.persist=no;window.logoutUser=eE;const sE=()=>{if(!M)return Promise.resolve({});const n=ys(In,`/${M.uid}/notes`);return _u(n).then(e=>e.exists()?e.val():{})},iE=n=>{if(!M)return;const e=ys(In,`/${M.uid}/notes`);Bw(e,t=>{t.exists()&&n(t.val())})},wr=new Map,Rd=async(n,e)=>{if(!M)return console.error("User not authenticated"),null;if(Ze&&Ze.destroy(),wr.has(n))return Ze=wr.get(n),Ze;const t=new XC(n,In,M);return await t.init(e),wr.set(n,t),Ze=t,t},rE=async(n,e="")=>{const t=Nd(),s=await Rd(t,n);e&&typeof s.setContent=="function"&&s.setContent(e);const i=window.getShareableLink?window.getShareableLink(t):`${window.location.origin}${window.location.pathname}?note=${t}`;return await Dd(t,i),t},Dd=async(n,e)=>{if(!M)return;const t=ys(In,`collaborative-notes/${n}/metadata`),s={title:e,modified:Date.now()};return s[`collaborators/${M.uid}`]={email:M.email,displayName:M.displayName,role:"owner"},Uw(t,s)},oE=async()=>{if(!M)return{};const e=(await _u(ys(In,"collaborative-notes"))).val()||{},t={};return Object.keys(e).forEach(s=>{const i=e[s];if(i.metadata&&i.metadata.collaborators){const r=i.metadata.collaborators;(r[M.uid]||r[M.email])&&(t[s]={title:i.metadata.title||"_untitled",modified:i.metadata.modified||0,isCollaborative:!0})}}),t};k=Object.assign({},Ss);const aE=()=>{if(Et&&M){const n=`notes_${M.uid}`,e=JSON.parse(localStorage.getItem(n)||"null");e&&(k=Object.assign({},Ss,e)),Et(k)}},A=document.getElementsByTagName("textarea")[0],lc=document.getElementsByTagName("sidebar")[0],Od=document.getElementsByTagName("list")[0],De=document.getElementsByTagName("toggle")[0],Pd=document.getElementsByTagName("night")[0],xe=document.getElementById("ai-selection-toolbar"),zt=document.getElementById("ai-selection-prompt"),nt=document.getElementById("ai-edit-toggle"),cc=document.getElementById("new-collab-btn");console.log("ui.ts loaded");let ce=null;const ji=(n,e={})=>{let t="",s=Object.keys(n).sort();for(let r of s)t+=`<div class="note-item legacy" data-title="${r}" data-type="legacy">${r}</div>`;let i=Object.keys(e).sort((r,o)=>(e[o].modified||0)-(e[r].modified||0));for(let r of i){const o=e[r],a=o.summary||o.title||"_untitled";t+=`<div class="note-item collaborative" data-note-id="${r}" data-type="collaborative">👥 ${a}</div>`}Od.innerHTML=t};Od.addEventListener("click",n=>{const t=n.target.closest(".note-item");if(t){const s=t.getAttribute("data-type");if(s==="legacy"){const i=t.getAttribute("data-title");i&&Sa(i)}else if(s==="collaborative"){const i=t.getAttribute("data-note-id");i&&lE(i)}}});const lE=async n=>{const e=gn(n);window.open(e,"_blank")};function Ld(){const n=document.getElementById("share-btn");n&&(b.isCollaborative?n.style.display="block":n.style.display="none")}const Sa=n=>{b.title=n,b.isCollaborative=!1,b.noteId=null,b.lockedTitle=!!(k[n]&&k[n].lockedTitle),Ze&&Ze.destroy(),A.value=k[n].content,Hn||Ta(),A.focus(),A.removeEventListener("keyup",vi),A.addEventListener("keyup",vi),Ld()},cE=async n=>{b.isCollaborative=!0,b.noteId=n,b.lockedTitle=!1;const e=`${window.location.origin}${window.location.pathname}?note=${n}`;window.history.pushState({noteId:n},"",e),A.removeEventListener("keyup",vi);try{await Rd(n,A)}catch(t){console.error("Error loading collaborative note:",t),alert("Failed to load collaborative note. Please try again.");return}Hn||Ta(),A.focus(),Ld()},Md=()=>{if(b.isCollaborative)return;const n=A.value,e=k[b.title],t=b.lockedTitle||e&&e.lockedTitle;let s=t?b.title:hE(n)||b.title;if(b.title!=="_new note"&&k[b.title]&&delete k[b.title],n.trim()){b.title=s||"_new note";const i=new Date().getTime();k[b.title]={content:n,modified:i,lockedTitle:t},b.lockedTitle=t}else b.lockedTitle=!1;xd()},xd=()=>{so(k),typeof no=="function"&&no(k),ji(k)},hE=n=>n.trim().split(/\s+/).slice(0,4).join(" "),uE=n=>{let e;return(...t)=>{let s,i=()=>{e=null,n.apply(s,t)};clearTimeout(e),e=setTimeout(i,500)}};let Hn=!0;const Ta=()=>{lc.style.display=lc.style.display==="block"?"none":"block",A.style.display=A.style.display==="none"?"block":"none",Hn=!Hn,Hn?(De.innerHTML="☰☰",De.style.float="left",De.style.top="-20px",De.style.left="-7px",A.focus()):(De.innerHTML="✕",De.style.top="-7px",De.style.left="-20px",De.style.float="right")},Ud=()=>{let n,e;localStorage.night?(n={backgroundColor:"#778873",color:"#EFEFEF"},e="☀️"):(n={backgroundColor:"#EFEFEF",color:"#333"},e="🌚"),Object.assign(document.body.style,n),Object.assign(A.style,n),Pd.innerHTML=e},dE=()=>{localStorage.night?delete localStorage.night:localStorage.night="true",Ud()},vi=uE(Md);A.addEventListener("keyup",vi);De.addEventListener("click",Ta);Pd.addEventListener("click",dE);Ud();let io=null;typeof Zr=="function"&&(io=Zr());io&&setTimeout(()=>{M&&cE(io)},1e3);"serviceWorker"in navigator&&(window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?navigator.serviceWorker.getRegistrations().then(n=>n.forEach(e=>e.unregister())).catch(n=>console.warn("Failed to unregister service workers:",n)):navigator.serviceWorker.register("/sw.js",{scope:"/"}));const Fd=async()=>{if(!M){alert("Please wait for authentication to complete");return}try{console.log("Creating new collaborative note...");const n=await rE(A,"");console.log("Note created with ID:",n);const e=await oE();if(ji(k,e),typeof gn=="function"){const t=gn(n);console.log("Opening collaborative note in new tab:",t),window.open(t,"_blank")}}catch(n){console.error("Error creating collaborative note:",n),alert("Failed to create collaborative note: "+n.message)}},fE=()=>{if(!b.isCollaborative||!b.noteId){alert("Please select a collaborative note to share");return}let n;typeof gn=="function"?n=gn(b.noteId):n=`${window.location.origin+window.location.pathname}?note=${b.noteId}`,navigator.clipboard&&navigator.clipboard.writeText?navigator.clipboard.writeText(n).then(()=>{alert(`✅ Share link copied to clipboard!

`+n)}).catch(e=>{console.error("Clipboard error:",e),prompt("Share this link with collaborators:",n)}):prompt("Share this link with collaborators:",n)},hc=()=>{if(!A)return;const n=A.selectionStart,e=A.selectionEnd;n!==e?(ce={start:n,end:e},nt&&nt.classList.remove("disabled")):(ce=null,nt&&nt.classList.add("disabled"),Gi())},Gi=()=>{xe&&xe.classList.add("hidden")},pE=()=>{if(!(!nt||!xe)){if(!ce||ce.start===ce.end){alert("Highlight some text first, then click the AI icon.");return}xe.classList.contains("hidden")?(xe.classList.remove("hidden"),zt&&zt.focus(),ce&&A&&setTimeout(()=>{A.setSelectionRange(ce.start,ce.end),A.focus(),setTimeout(()=>{zt&&zt.focus()},100)},50)):Gi()}};nt&&(nt.classList.add("disabled"),nt.addEventListener("click",pE));const Bd=async n=>{const e=await fetch("/api/ai",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)});if(!e.ok){const t=await e.text();throw new Error(t||"AI request failed")}return e.json()},gE=async()=>{if(!ce||ce.start===ce.end){alert("Please highlight the text you want to transform first.");return}const{start:n,end:e}=ce,t=A.value.substring(n,e),s=zt&&zt.value.trim()||"Rewrite the selected text to improve clarity.";if(!t.trim()){alert("Selected text is empty.");return}try{xe&&xe.classList.add("loading");const{result:i}=await Bd({type:"edit",selection:t,prompt:s,content:A.value});if(!i){alert("AI did not return any changes.");return}const r=A.value.substring(0,n)+i+A.value.substring(e);A.value=r,Gi(),b.isCollaborative&&typeof Ze<"u"?A.dispatchEvent(new Event("input",{bubbles:!0})):Md()}catch(i){console.error("AI edit error:",i),alert("Failed to apply AI edit: "+i.message)}finally{xe&&xe.classList.remove("loading")}},Vd=async()=>{const n=k[b.title];if(b.lockedTitle||n&&n.lockedTitle)return;const e=A.value.trim();if(e)try{const{result:t}=await Bd({type:"summary",content:e});if(!t)return;b.isCollaborative&&b.noteId?Dd(b.noteId,t.trim()):Wd(t.trim())}catch(t){console.error("AI summary error:",t)}},Wd=n=>{if(!n)return;const e=n.replace(/\s+/g," ").replace(/[#/\\]/g,"").trim();if(!e)return;const t=e.slice(0,80);if(k[t]&&t!==b.title){let i=2,r=`${t} (${i})`;for(;k[r];)i+=1,r=`${t} (${i})`;return Wd(r)}if(!k[b.title])return;const s=k[b.title];delete k[b.title],k[t]={...s,lockedTitle:!0},b.title=t,b.lockedTitle=!0,xd(),ji(k),Sa(t)};if(A){A.addEventListener("mouseup",hc),A.addEventListener("keyup",hc);let n=null;A.addEventListener("input",()=>{const e=k[b.title],t=b.lockedTitle||e&&e.lockedTitle;n&&clearTimeout(n),!t&&A.value.trim().length>10&&(n=setTimeout(()=>{Vd()},2e4))})}window.applyAiEdit=gE;window.hideAiToolbar=Gi;window.generateAiSummary=Vd;window.createNewCollaborativeNote=Fd;window.shareCurrentNote=fE;cc&&cc.addEventListener("click",Fd);ZC(ji,Sa);aE();console.log("App initialized");
