(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();new UR;function UR(){var i=[],e=[],t="className",n="getElementsByClassName",r="length",s="display",a="transition",c="style",u="height",h="scrollTop",d="offsetHeight",p="fixed",_=document,g=document.documentElement,E=function(H,_e,F){H.addEventListener?H.addEventListener(_e,F,!1):H.attachEvent&&H.attachEvent("on"+_e,F)},x=function(H,_e){if(typeof getComputedStyle<"u")var F=getComputedStyle(H,null);else F=H.currentStyle;return F?F[_e]:p},y=function(){var H=_.body;return Math.max(H.scrollHeight,H[d],g.clientHeight,g.scrollHeight,g[d])},m=function(H,_e){for(var F=H[r];F--;)if(H[F]===_e)return!0;return!1},w=function(H,_e){return m(H[t].split(" "),_e)},T=function(H,_e){w(H,_e)||(H[t]?H[t]+=" "+_e:H[t]=_e)},C=function(H,_e){if(H[t]&&w(H,_e)){for(var F="",Pe=H[t].split(" "),Ce=0,Ee=Pe[r];Ce<Ee;Ce++)Pe[Ce]!==_e&&(F+=Pe[Ce]+" ");H[t]=F.replace(/^\s+|\s+$/g,"")}},b=function(){return window.pageYOffset||g[h]},I=function(H){return H.getBoundingClientRect().top},O=function(H){var _e=b();_e>H.oS&&!w(H,p)?T(H,p):w(H,p)&&_e<H.oS&&C(H,p)},B=function(){for(var H=0;H<e[r];H++)M(e[H])},M=function(H){H.oS?(H.fT&&clearTimeout(H.fT),H.fT=setTimeout(function(){H.aF?O(H):Q(H)},50)):Q(H)},L=function(H,_e,F){C(H,p),_e[s]="none",F.position=F.top=""},Q=function(H){var _e=I(H),F=H[d],Pe=H[c],Ce=H.pH[c],Ee=b();if(_e<H.oT&&Ee>H.oS&&!w(H,p)&&(window.innerHeight||g.clientHeight)>F){H.tP=Ee+_e-H.oT;var ze=y();if(F>ze-H.tP-F)var st=F;else st=0;Ce[s]="block",Ce[a]="none",Ce[u]=F+1+"px",H.pH[d],Ce[a]="height .3s",Ce[u]=st+"px",T(H,p),Pe.position=p,Pe.top=H.oT+"px",x(H,"position")!=p&&(Ce[s]="none")}else if(w(H,p)&&(Ee<H.tP||Ee<H.oS)){var Ue=x(H,"animation");if(H.oS&&H.classList&&Ue.indexOf("slide-down")!=-1){var Ge=x(H,"animationDuration");H.classList.remove(p),Pe.animationDirection="reverse",Pe.animationDuration="300ms",H[d],H.classList.add(p),setTimeout(function(){L(H,Ce,Pe),Pe.animationDirection="normal",Pe.animationDuration=Ge},300)}else L(H,Ce,Pe)}},te=function(){var H=[],_e,F;if(_[n])H=_[n]("float-panel"),i=_[n]("slideanim");else{var Pe=_.getElementsByTagName("*");for(_e=Pe[r];_e--;)w(Pe[_e],"float-panel")&&H.push(Pe[_e])}_e=H[r];for(var Ce=0;Ce<_e;Ce++)F=e[Ce]=H[Ce],F.oT=parseInt(F.getAttribute("data-top")||0),F.oS=parseInt(F.getAttribute("data-scroll")||0),F.oS>20&&x(F,"position")==p&&(F.aF=1),F.pH=_.createElement("div"),F.pH[c].width=F.offsetWidth+"px",F.pH[c][s]="none",F.parentNode.insertBefore(F.pH,F.nextSibling);e[r]&&(setTimeout(B,160),E(window,"scroll",B))},W,$=200,j=0,le,J,ne=function(){return window.innerWidth||g.clientWidth||_.body.clientWidth};function ge(){le||(le=setInterval(function(){var H=_.body;H[h]<3?H[h]=0:H[h]=H[h]/1.3,g[h]<3?g[h]=0:g[h]=g[h]/1.3,b()||(clearInterval(le),le=null)},14))}function he(){clearTimeout(J),b()>$&&ne()>j?(J=setTimeout(function(){C(W,"mcOut")},60),W[c][s]="block"):(T(W,"mcOut"),J=setTimeout(function(){W[c][s]="none"},500))}var Ie=function(){if(W=_.getElementById("backtop"),W){var H=W.getAttribute("data-v-w");H&&(H=H.replace(/\s/g,"").split(","),$=parseInt(H[0]),H[r]>1&&(j=parseInt(H[1]))),E(W,"click",ge),E(window,"scroll",he),he()}},ye=function(){for(var H=b(),_e=H+window.innerHeight,F=i[r],Pe,Ce,Ee=0;Ee<F;Ee++)Pe=H+I(i[Ee]),Ce=Pe+i[Ee][d],Pe<_e?T(i[Ee],"slide"):C(i[Ee],"slide")},ie=function(){i[r]&&(E(window,"scroll",ye),ye())},ce=function(){te(),Ie(),ie()};E(window,"load",ce),E(document,"touchstart",function(){})}/**
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
 */const yy={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const Me=function(i,e){if(!i)throw tl(e)},tl=function(i){return new Error("Firebase Database ("+yy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)};/**
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
 */const Ey=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):(r&64512)===55296&&n+1<i.length&&(i.charCodeAt(n+1)&64512)===56320?(r=65536+((r&1023)<<10)+(i.charCodeAt(++n)&1023),e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},FR=function(i){const e=[];let t=0,n=0;for(;t<i.length;){const r=i[t++];if(r<128)e[n++]=String.fromCharCode(r);else if(r>191&&r<224){const s=i[t++];e[n++]=String.fromCharCode((r&31)<<6|s&63)}else if(r>239&&r<365){const s=i[t++],a=i[t++],c=i[t++],u=((r&7)<<18|(s&63)<<12|(a&63)<<6|c&63)-65536;e[n++]=String.fromCharCode(55296+(u>>10)),e[n++]=String.fromCharCode(56320+(u&1023))}else{const s=i[t++],a=i[t++];e[n++]=String.fromCharCode((r&15)<<12|(s&63)<<6|a&63)}}return e.join("")},c_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(i,e){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let r=0;r<i.length;r+=3){const s=i[r],a=r+1<i.length,c=a?i[r+1]:0,u=r+2<i.length,h=u?i[r+2]:0,d=s>>2,p=(s&3)<<4|c>>4;let _=(c&15)<<2|h>>6,g=h&63;u||(g=64,a||(_=64)),n.push(t[d],t[p],t[_],t[g])}return n.join("")},encodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(i):this.encodeByteArray(Ey(i),e)},decodeString(i,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(i):FR(this.decodeStringToByteArray(i,e))},decodeStringToByteArray(i,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let r=0;r<i.length;){const s=t[i.charAt(r++)],c=r<i.length?t[i.charAt(r)]:0;++r;const h=r<i.length?t[i.charAt(r)]:64;++r;const p=r<i.length?t[i.charAt(r)]:64;if(++r,s==null||c==null||h==null||p==null)throw new BR;const _=s<<2|c>>4;if(n.push(_),h!==64){const g=c<<4&240|h>>2;if(n.push(g),p!==64){const E=h<<6&192|p;n.push(E)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};class BR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sy=function(i){const e=Ey(i);return c_.encodeByteArray(e,!0)},Qu=function(i){return Sy(i).replace(/\./g,"")},pp=function(i){try{return c_.decodeString(i,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kR(i){return Zl(void 0,i)}function Zl(i,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:i===void 0&&(i={});break;case Array:i=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!zR(t)||(i[t]=Zl(i[t],e[t]));return i}function zR(i){return i!=="__proto__"}/**
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
 */function HR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const GR=()=>HR().__FIREBASE_DEFAULTS__,WR=()=>{if(typeof process>"u"||typeof process.env>"u")return;const i={}.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},VR=()=>{if(typeof document>"u")return;let i;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=i&&pp(i[1]);return e&&JSON.parse(e)},XR=()=>{try{return GR()||WR()||VR()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},My=()=>{var i;return(i=XR())===null||i===void 0?void 0:i.config};/**
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
 */class ei{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,n))}}}/**
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
 */function qR(i,e){if(i.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},n=e||"demo-project",r=i.iat||0,s=i.sub||i.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},i),c="";return[Qu(JSON.stringify(t)),Qu(JSON.stringify(a)),c].join(".")}/**
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
 */function YR(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ty(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(YR())}function $R(){return typeof self=="object"&&self.self===self}function KR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function wy(){return yy.NODE_ADMIN===!0}function jR(){try{return typeof indexedDB=="object"}catch{return!1}}function ZR(){return new Promise((i,e)=>{try{let t=!0;const n="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(n);r.onsuccess=()=>{r.result.close(),t||self.indexedDB.deleteDatabase(n),i(!0)},r.onupgradeneeded=()=>{t=!1},r.onerror=()=>{var s;e(((s=r.error)===null||s===void 0?void 0:s.message)||"")}}catch(t){e(t)}})}/**
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
 */const QR="FirebaseError";class nl extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=QR,Object.setPrototypeOf(this,nl.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,bh.prototype.create)}}class bh{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,s=this.errors[e],a=s?JR(s,n):"Error",c=`${this.serviceName}: ${a} (${r}).`;return new nl(r,c,n)}}function JR(i,e){return i.replace(eP,(t,n)=>{const r=e[n];return r!=null?String(r):`<${n}?>`})}const eP=/\{\$([^}]+)}/g;/**
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
 */function Ql(i){return JSON.parse(i)}function dn(i){return JSON.stringify(i)}/**
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
 */const by=function(i){let e={},t={},n={},r="";try{const s=i.split(".");e=Ql(pp(s[0])||""),t=Ql(pp(s[1])||""),r=s[2],n=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:n,signature:r}},tP=function(i){const e=by(i),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},nP=function(i){const e=by(i).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function bi(i,e){return Object.prototype.hasOwnProperty.call(i,e)}function Ao(i,e){if(Object.prototype.hasOwnProperty.call(i,e))return i[e]}function _p(i){for(const e in i)if(Object.prototype.hasOwnProperty.call(i,e))return!1;return!0}function Ju(i,e,t){const n={};for(const r in i)Object.prototype.hasOwnProperty.call(i,r)&&(n[r]=e.call(t,i[r],r,i));return n}function mp(i,e){if(i===e)return!0;const t=Object.keys(i),n=Object.keys(e);for(const r of t){if(!n.includes(r))return!1;const s=i[r],a=e[r];if(Hv(s)&&Hv(a)){if(!mp(s,a))return!1}else if(s!==a)return!1}for(const r of n)if(!t.includes(r))return!1;return!0}function Hv(i){return i!==null&&typeof i=="object"}/**
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
 */function iP(i){const e=[];for(const[t,n]of Object.entries(i))Array.isArray(n)?n.forEach(r=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(r))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(n));return e.length?"&"+e.join("&"):""}/**
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
 */class rP{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const n=this.W_;if(typeof e=="string")for(let p=0;p<16;p++)n[p]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let p=0;p<16;p++)n[p]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let p=16;p<80;p++){const _=n[p-3]^n[p-8]^n[p-14]^n[p-16];n[p]=(_<<1|_>>>31)&4294967295}let r=this.chain_[0],s=this.chain_[1],a=this.chain_[2],c=this.chain_[3],u=this.chain_[4],h,d;for(let p=0;p<80;p++){p<40?p<20?(h=c^s&(a^c),d=1518500249):(h=s^a^c,d=1859775393):p<60?(h=s&a|c&(s|a),d=2400959708):(h=s^a^c,d=3395469782);const _=(r<<5|r>>>27)+h+u+d+n[p]&4294967295;u=c,c=a,a=(s<<30|s>>>2)&4294967295,s=r,r=_}this.chain_[0]=this.chain_[0]+r&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+a&4294967295,this.chain_[3]=this.chain_[3]+c&4294967295,this.chain_[4]=this.chain_[4]+u&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const n=t-this.blockSize;let r=0;const s=this.buf_;let a=this.inbuf_;for(;r<t;){if(a===0)for(;r<=n;)this.compress_(e,r),r+=this.blockSize;if(typeof e=="string"){for(;r<t;)if(s[a]=e.charCodeAt(r),++a,++r,a===this.blockSize){this.compress_(s),a=0;break}}else for(;r<t;)if(s[a]=e[r],++a,++r,a===this.blockSize){this.compress_(s),a=0;break}}this.inbuf_=a,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let r=this.blockSize-1;r>=56;r--)this.buf_[r]=t&255,t/=256;this.compress_(this.buf_);let n=0;for(let r=0;r<5;r++)for(let s=24;s>=0;s-=8)e[n]=this.chain_[r]>>s&255,++n;return e}}function sP(i,e){const t=new oP(i,e);return t.subscribe.bind(t)}class oP{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(n=>{this.error(n)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(e===void 0&&t===void 0&&n===void 0)throw new Error("Missing Observer.");aP(e,["next","error","complete"])?r=e:r={next:e,error:t,complete:n},r.next===void 0&&(r.next=pd),r.error===void 0&&(r.error=pd),r.complete===void 0&&(r.complete=pd);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(n){typeof console<"u"&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function aP(i,e){if(typeof i!="object"||i===null)return!1;for(const t of e)if(t in i&&typeof i[t]=="function")return!0;return!1}function pd(){}/**
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
 */const $e=function(i,e,t,n){let r;if(n<e?r="at least "+e:n>t&&(r=t===0?"none":"no more than "+t),r){const s=i+" failed: Was called with "+n+(n===1?" argument.":" arguments.")+" Expects "+r+".";throw new Error(s)}};function ii(i,e){return`${i} failed: ${e} argument `}function En(i,e,t,n){if(!(n&&!t)&&typeof t!="function")throw new Error(ii(i,e)+"must be a valid function.")}function Gv(i,e,t,n){if(!(n&&!t)&&(typeof t!="object"||t===null))throw new Error(ii(i,e)+"must be a valid context object.")}/**
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
 */const lP=function(i){const e=[];let t=0;for(let n=0;n<i.length;n++){let r=i.charCodeAt(n);if(r>=55296&&r<=56319){const s=r-55296;n++,Me(n<i.length,"Surrogate pair missing trail surrogate.");const a=i.charCodeAt(n)-56320;r=65536+(s<<10)+a}r<128?e[t++]=r:r<2048?(e[t++]=r>>6|192,e[t++]=r&63|128):r<65536?(e[t++]=r>>12|224,e[t++]=r>>6&63|128,e[t++]=r&63|128):(e[t++]=r>>18|240,e[t++]=r>>12&63|128,e[t++]=r>>6&63|128,e[t++]=r&63|128)}return e},Ah=function(i){let e=0;for(let t=0;t<i.length;t++){const n=i.charCodeAt(t);n<128?e++:n<2048?e+=2:n>=55296&&n<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function Ri(i){return i&&i._delegate?i._delegate:i}class Ns{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const co="[DEFAULT]";/**
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
 */class Ay{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const n=new ei;if(this.instancesDeferred.set(t,n),this.isInitialized(t)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:t});r&&n.resolve(r)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(n)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:n})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(uP(e))try{this.getOrInitializeService({instanceIdentifier:co})}catch{}for(const[t,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(t);try{const s=this.getOrInitializeService({instanceIdentifier:r});n.resolve(s)}catch{}}}}clearInstance(e=co){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=co){return this.instances.has(e)}getOptions(e=co){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[s,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(s);n===c&&a.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),s=(n=this.onInitCallbacks.get(r))!==null&&n!==void 0?n:new Set;s.add(e),this.onInitCallbacks.set(r,s);const a=this.instances.get(r);return a&&e(a,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:cP(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch{}return n||null}normalizeInstanceIdentifier(e=co){return this.component?this.component.multipleInstances?e:co:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function cP(i){return i===co?void 0:i}function uP(i){return i.instantiationMode==="EAGER"}/**
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
 */class Cy{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Ay(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const u_=[];var Ut;(function(i){i[i.DEBUG=0]="DEBUG",i[i.VERBOSE=1]="VERBOSE",i[i.INFO=2]="INFO",i[i.WARN=3]="WARN",i[i.ERROR=4]="ERROR",i[i.SILENT=5]="SILENT"})(Ut||(Ut={}));const Ry={debug:Ut.DEBUG,verbose:Ut.VERBOSE,info:Ut.INFO,warn:Ut.WARN,error:Ut.ERROR,silent:Ut.SILENT},hP=Ut.INFO,fP={[Ut.DEBUG]:"log",[Ut.VERBOSE]:"log",[Ut.INFO]:"info",[Ut.WARN]:"warn",[Ut.ERROR]:"error"},dP=(i,e,...t)=>{if(e<i.logLevel)return;const n=new Date().toISOString(),r=fP[e];if(r)console[r](`[${n}]  ${i.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ch{constructor(e){this.name=e,this._logLevel=hP,this._logHandler=dP,this._userLogHandler=null,u_.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ut))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Ry[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ut.DEBUG,...e),this._logHandler(this,Ut.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ut.VERBOSE,...e),this._logHandler(this,Ut.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ut.INFO,...e),this._logHandler(this,Ut.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ut.WARN,...e),this._logHandler(this,Ut.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ut.ERROR,...e),this._logHandler(this,Ut.ERROR,...e)}}function pP(i){u_.forEach(e=>{e.setLogLevel(i)})}function _P(i,e){for(const t of u_){let n=null;e&&e.level&&(n=Ry[e.level]),i===null?t.userLogHandler=null:t.userLogHandler=(r,s,...a)=>{const c=a.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(n??r.logLevel)&&i({level:Ut[s].toLowerCase(),message:c,args:a,type:r.name})}}}const mP=(i,e)=>e.some(t=>i instanceof t);let Wv,Vv;function gP(){return Wv||(Wv=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vP(){return Vv||(Vv=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Py=new WeakMap,gp=new WeakMap,Iy=new WeakMap,_d=new WeakMap,h_=new WeakMap;function xP(i){const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("success",s),i.removeEventListener("error",a)},s=()=>{t(bs(i.result)),r()},a=()=>{n(i.error),r()};i.addEventListener("success",s),i.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Py.set(t,i)}).catch(()=>{}),h_.set(e,i),e}function yP(i){if(gp.has(i))return;const e=new Promise((t,n)=>{const r=()=>{i.removeEventListener("complete",s),i.removeEventListener("error",a),i.removeEventListener("abort",a)},s=()=>{t(),r()},a=()=>{n(i.error||new DOMException("AbortError","AbortError")),r()};i.addEventListener("complete",s),i.addEventListener("error",a),i.addEventListener("abort",a)});gp.set(i,e)}let vp={get(i,e,t){if(i instanceof IDBTransaction){if(e==="done")return gp.get(i);if(e==="objectStoreNames")return i.objectStoreNames||Iy.get(i);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return bs(i[e])},set(i,e,t){return i[e]=t,!0},has(i,e){return i instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in i}};function EP(i){vp=i(vp)}function SP(i){return i===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const n=i.call(md(this),e,...t);return Iy.set(n,e.sort?e.sort():[e]),bs(n)}:vP().includes(i)?function(...e){return i.apply(md(this),e),bs(Py.get(this))}:function(...e){return bs(i.apply(md(this),e))}}function MP(i){return typeof i=="function"?SP(i):(i instanceof IDBTransaction&&yP(i),mP(i,gP())?new Proxy(i,vp):i)}function bs(i){if(i instanceof IDBRequest)return xP(i);if(_d.has(i))return _d.get(i);const e=MP(i);return e!==i&&(_d.set(i,e),h_.set(e,i)),e}const md=i=>h_.get(i);function TP(i,e,{blocked:t,upgrade:n,blocking:r,terminated:s}={}){const a=indexedDB.open(i,e),c=bs(a);return n&&a.addEventListener("upgradeneeded",u=>{n(bs(a.result),u.oldVersion,u.newVersion,bs(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{s&&u.addEventListener("close",()=>s()),r&&u.addEventListener("versionchange",h=>r(h.oldVersion,h.newVersion,h))}).catch(()=>{}),c}const wP=["get","getKey","getAll","getAllKeys","count"],bP=["put","add","delete","clear"],gd=new Map;function Xv(i,e){if(!(i instanceof IDBDatabase&&!(e in i)&&typeof e=="string"))return;if(gd.get(e))return gd.get(e);const t=e.replace(/FromIndex$/,""),n=e!==t,r=bP.includes(t);if(!(t in(n?IDBIndex:IDBObjectStore).prototype)||!(r||wP.includes(t)))return;const s=async function(a,...c){const u=this.transaction(a,r?"readwrite":"readonly");let h=u.store;return n&&(h=h.index(c.shift())),(await Promise.all([h[t](...c),r&&u.done]))[0]};return gd.set(e,s),s}EP(i=>({...i,get:(e,t,n)=>Xv(e,t)||i.get(e,t,n),has:(e,t)=>!!Xv(e,t)||i.has(e,t)}));/**
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
 */class AP{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(CP(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(t=>t).join(" ")}}function CP(i){const e=i.getComponent();return(e==null?void 0:e.type)==="VERSION"}const xp="@firebase/app",qv="0.9.11";/**
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
 */const Co=new Ch("@firebase/app"),RP="@firebase/app-compat",PP="@firebase/analytics-compat",IP="@firebase/analytics",LP="@firebase/app-check-compat",DP="@firebase/app-check",NP="@firebase/auth",OP="@firebase/auth-compat",UP="@firebase/database",FP="@firebase/database-compat",BP="@firebase/functions",kP="@firebase/functions-compat",zP="@firebase/installations",HP="@firebase/installations-compat",GP="@firebase/messaging",WP="@firebase/messaging-compat",VP="@firebase/performance",XP="@firebase/performance-compat",qP="@firebase/remote-config",YP="@firebase/remote-config-compat",$P="@firebase/storage",KP="@firebase/storage-compat",jP="@firebase/firestore",ZP="@firebase/firestore-compat",QP="firebase",JP="9.22.1";/**
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
 */const Os="[DEFAULT]",eI={[xp]:"fire-core",[RP]:"fire-core-compat",[IP]:"fire-analytics",[PP]:"fire-analytics-compat",[DP]:"fire-app-check",[LP]:"fire-app-check-compat",[NP]:"fire-auth",[OP]:"fire-auth-compat",[UP]:"fire-rtdb",[FP]:"fire-rtdb-compat",[BP]:"fire-fn",[kP]:"fire-fn-compat",[zP]:"fire-iid",[HP]:"fire-iid-compat",[GP]:"fire-fcm",[WP]:"fire-fcm-compat",[VP]:"fire-perf",[XP]:"fire-perf-compat",[qP]:"fire-rc",[YP]:"fire-rc-compat",[$P]:"fire-gcs",[KP]:"fire-gcs-compat",[jP]:"fire-fst",[ZP]:"fire-fst-compat","fire-js":"fire-js",[QP]:"fire-js-all"};/**
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
 */const Us=new Map,Jl=new Map;function eh(i,e){try{i.container.addComponent(e)}catch(t){Co.debug(`Component ${e.name} failed to register with FirebaseApp ${i.name}`,t)}}function Ly(i,e){i.container.addOrOverwriteComponent(e)}function Ba(i){const e=i.name;if(Jl.has(e))return Co.debug(`There were multiple attempts to register component ${e}.`),!1;Jl.set(e,i);for(const t of Us.values())eh(t,i);return!0}function Dy(i,e){const t=i.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),i.container.getProvider(e)}function tI(i,e,t=Os){Dy(i,e).clearInstance(t)}function nI(){Jl.clear()}/**
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
 */const iI={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},es=new bh("app","Firebase",iI);/**
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
 */let rI=class{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new Ns("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw es.create("app-deleted",{appName:this._name})}};/**
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
 */const f_=JP;function d_(i,e={}){let t=i;typeof e!="object"&&(e={name:e});const n=Object.assign({name:Os,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw es.create("bad-app-name",{appName:String(r)});if(t||(t=My()),!t)throw es.create("no-options");const s=Us.get(r);if(s){if(mp(t,s.options)&&mp(n,s.config))return s;throw es.create("duplicate-app",{appName:r})}const a=new Cy(r);for(const u of Jl.values())a.addComponent(u);const c=new rI(t,n,a);return Us.set(r,c),c}function sI(i=Os){const e=Us.get(i);if(!e&&i===Os&&My())return d_();if(!e)throw es.create("no-app",{appName:i});return e}function oI(){return Array.from(Us.values())}async function Ny(i){const e=i.name;Us.has(e)&&(Us.delete(e),await Promise.all(i.container.getProviders().map(t=>t.delete())),i.isDeleted=!0)}function As(i,e,t){var n;let r=(n=eI[i])!==null&&n!==void 0?n:i;t&&(r+=`-${t}`);const s=r.match(/\s|\//),a=e.match(/\s|\//);if(s||a){const c=[`Unable to register library "${r}" with version "${e}":`];s&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Co.warn(c.join(" "));return}Ba(new Ns(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}function Oy(i,e){if(i!==null&&typeof i!="function")throw es.create("invalid-log-argument");_P(i,e)}function Uy(i){pP(i)}/**
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
 */const aI="firebase-heartbeat-database",lI=1,ec="firebase-heartbeat-store";let vd=null;function Fy(){return vd||(vd=TP(aI,lI,{upgrade:(i,e)=>{switch(e){case 0:i.createObjectStore(ec)}}}).catch(i=>{throw es.create("idb-open",{originalErrorMessage:i.message})})),vd}async function cI(i){try{return await(await Fy()).transaction(ec).objectStore(ec).get(By(i))}catch(e){if(e instanceof nl)Co.warn(e.message);else{const t=es.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Co.warn(t.message)}}}async function Yv(i,e){try{const n=(await Fy()).transaction(ec,"readwrite");await n.objectStore(ec).put(e,By(i)),await n.done}catch(t){if(t instanceof nl)Co.warn(t.message);else{const n=es.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Co.warn(n.message)}}}function By(i){return`${i.name}!${i.options.appId}`}/**
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
 */const uI=1024,hI=30*24*60*60*1e3;class fI{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new pI(t),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=$v();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===n||this._heartbeatsCache.heartbeats.some(r=>r.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(r=>{const s=new Date(r.date).valueOf();return Date.now()-s<=hI}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$v(),{heartbeatsToSend:t,unsentEntries:n}=dI(this._heartbeatsCache.heartbeats),r=Qu(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function $v(){return new Date().toISOString().substring(0,10)}function dI(i,e=uI){const t=[];let n=i.slice();for(const r of i){const s=t.find(a=>a.agent===r.agent);if(s){if(s.dates.push(r.date),Kv(t)>e){s.dates.pop();break}}else if(t.push({agent:r.agent,dates:[r.date]}),Kv(t)>e){t.pop();break}n=n.slice(1)}return{heartbeatsToSend:t,unsentEntries:n}}class pI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jR()?ZR().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await cI(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const r=await this.read();return Yv(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Kv(i){return Qu(JSON.stringify({version:2,heartbeats:i})).length}/**
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
 */function _I(i){Ba(new Ns("platform-logger",e=>new AP(e),"PRIVATE")),Ba(new Ns("heartbeat",e=>new fI(e),"PRIVATE")),As(xp,qv,i),As(xp,qv,"esm2017"),As("fire-js","")}_I("");const mI=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:nl,SDK_VERSION:f_,_DEFAULT_ENTRY_NAME:Os,_addComponent:eh,_addOrOverwriteComponent:Ly,_apps:Us,_clearComponents:nI,_components:Jl,_getProvider:Dy,_registerComponent:Ba,_removeServiceInstance:tI,deleteApp:Ny,getApp:sI,getApps:oI,initializeApp:d_,onLog:Oy,registerVersion:As,setLogLevel:Uy},Symbol.toStringTag,{value:"Module"}));/**
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
 */class gI{constructor(e,t){this._delegate=e,this.firebase=t,eh(e,new Ns("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Ny(this._delegate)))}_getService(e,t=Os){var n;this._delegate.checkDestroyed();const r=this._delegate.container.getProvider(e);return!r.isInitialized()&&((n=r.getComponent())===null||n===void 0?void 0:n.instantiationMode)==="EXPLICIT"&&r.initialize(),r.getImmediate({identifier:t})}_removeServiceInstance(e,t=Os){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){eh(this._delegate,e)}_addOrOverwriteComponent(e){Ly(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const vI={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},jv=new bh("app-compat","Firebase",vI);/**
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
 */function xI(i){const e={},t={__esModule:!0,initializeApp:s,app:r,registerVersion:As,setLogLevel:Uy,onLog:Oy,apps:null,SDK_VERSION:f_,INTERNAL:{registerComponent:c,removeApp:n,useAsService:u,modularAPIs:mI}};t.default=t,Object.defineProperty(t,"apps",{get:a});function n(h){delete e[h]}function r(h){if(h=h||Os,!bi(e,h))throw jv.create("no-app",{appName:h});return e[h]}r.App=i;function s(h,d={}){const p=d_(h,d);if(bi(e,p.name))return e[p.name];const _=new i(p,t);return e[p.name]=_,_}function a(){return Object.keys(e).map(h=>e[h])}function c(h){const d=h.name,p=d.replace("-compat","");if(Ba(h)&&h.type==="PUBLIC"){const _=(g=r())=>{if(typeof g[p]!="function")throw jv.create("invalid-app-argument",{appName:d});return g[p]()};h.serviceProps!==void 0&&Zl(_,h.serviceProps),t[p]=_,i.prototype[p]=function(...g){return this._getService.bind(this,d).apply(this,h.multipleInstances?g:[])}}return h.type==="PUBLIC"?t[p]:null}function u(h,d){return d==="serverAuth"?null:d}return t}/**
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
 */function ky(){const i=xI(gI);i.INTERNAL=Object.assign(Object.assign({},i.INTERNAL),{createFirebaseNamespace:ky,extendNamespace:e,createSubscribe:sP,ErrorFactory:bh,deepExtend:Zl});function e(t){Zl(i,t)}return i}const yI=ky();/**
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
 */const Zv=new Ch("@firebase/app-compat"),EI="@firebase/app-compat",SI="0.2.11";/**
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
 */function MI(i){As(EI,SI,i)}/**
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
 */if($R()&&self.firebase!==void 0){Zv.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const i=self.firebase.SDK_VERSION;i&&i.indexOf("LITE")>=0&&Zv.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Rh=yI;MI();var TI="firebase",wI="9.22.1";/**
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
 */Rh.registerVersion(TI,wI,"app-compat");const Qv="@firebase/database",Jv="0.14.4";/**
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
 */let zy="";function Hy(i){zy=i}/**
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
 */class bI{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),dn(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Ql(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class AI{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return bi(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Gy=function(i){try{if(typeof window<"u"&&typeof window[i]<"u"){const e=window[i];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new bI(e)}}catch{}return new AI},mo=Gy("localStorage"),yp=Gy("sessionStorage");/**
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
 */const Pa=new Ch("@firebase/database"),Wy=function(){let i=1;return function(){return i++}}(),Vy=function(i){const e=lP(i),t=new rP;t.update(e);const n=t.digest();return c_.encodeByteArray(n)},xc=function(...i){let e="";for(let t=0;t<i.length;t++){const n=i[t];Array.isArray(n)||n&&typeof n=="object"&&typeof n.length=="number"?e+=xc.apply(null,n):typeof n=="object"?e+=dn(n):e+=n,e+=" "}return e};let yo=null,e0=!0;const Xy=function(i,e){Me(!e||i===!0||i===!1,"Can't turn on custom loggers persistently."),i===!0?(Pa.logLevel=Ut.VERBOSE,yo=Pa.log.bind(Pa),e&&yp.set("logging_enabled",!0)):typeof i=="function"?yo=i:(yo=null,yp.remove("logging_enabled"))},Mn=function(...i){if(e0===!0&&(e0=!1,yo===null&&yp.get("logging_enabled")===!0&&Xy(!0)),yo){const e=xc.apply(null,i);yo(e)}},yc=function(i){return function(...e){Mn(i,...e)}},Ep=function(...i){const e="FIREBASE INTERNAL ERROR: "+xc(...i);Pa.error(e)},Ar=function(...i){const e=`FIREBASE FATAL ERROR: ${xc(...i)}`;throw Pa.error(e),new Error(e)},Bn=function(...i){const e="FIREBASE WARNING: "+xc(...i);Pa.warn(e)},CI=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Bn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ph=function(i){return typeof i=="number"&&(i!==i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},RI=function(i){if(document.readyState==="complete")i();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Fs="[MIN_NAME]",is="[MAX_NAME]",Bo=function(i,e){if(i===e)return 0;if(i===Fs||e===is)return-1;if(e===Fs||i===is)return 1;{const t=t0(i),n=t0(e);return t!==null?n!==null?t-n===0?i.length-e.length:t-n:-1:n!==null?1:i<e?-1:1}},PI=function(i,e){return i===e?0:i<e?-1:1},Rl=function(i,e){if(e&&i in e)return e[i];throw new Error("Missing required key ("+i+") in object: "+dn(e))},p_=function(i){if(typeof i!="object"||i===null)return dn(i);const e=[];for(const n in i)e.push(n);e.sort();let t="{";for(let n=0;n<e.length;n++)n!==0&&(t+=","),t+=dn(e[n]),t+=":",t+=p_(i[e[n]]);return t+="}",t},qy=function(i,e){const t=i.length;if(t<=e)return[i];const n=[];for(let r=0;r<t;r+=e)r+e>t?n.push(i.substring(r,t)):n.push(i.substring(r,r+e));return n};function wn(i,e){for(const t in i)i.hasOwnProperty(t)&&e(t,i[t])}const Yy=function(i){Me(!Ph(i),"Invalid JSON number");const e=11,t=52,n=(1<<e-1)-1;let r,s,a,c,u;i===0?(s=0,a=0,r=1/i===-1/0?1:0):(r=i<0,i=Math.abs(i),i>=Math.pow(2,1-n)?(c=Math.min(Math.floor(Math.log(i)/Math.LN2),n),s=c+n,a=Math.round(i*Math.pow(2,t-c)-Math.pow(2,t))):(s=0,a=Math.round(i/Math.pow(2,1-n-t))));const h=[];for(u=t;u;u-=1)h.push(a%2?1:0),a=Math.floor(a/2);for(u=e;u;u-=1)h.push(s%2?1:0),s=Math.floor(s/2);h.push(r?1:0),h.reverse();const d=h.join("");let p="";for(u=0;u<64;u+=8){let _=parseInt(d.substr(u,8),2).toString(16);_.length===1&&(_="0"+_),p=p+_}return p.toLowerCase()},II=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},LI=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function DI(i,e){let t="Unknown Error";i==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":i==="permission_denied"?t="Client doesn't have permission to access the desired data.":i==="unavailable"&&(t="The service is unavailable");const n=new Error(i+" at "+e._path.toString()+": "+t);return n.code=i.toUpperCase(),n}const NI=new RegExp("^-?(0*)\\d{1,10}$"),OI=-2147483648,UI=2147483647,t0=function(i){if(NI.test(i)){const e=Number(i);if(e>=OI&&e<=UI)return e}return null},il=function(i){try{i()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Bn("Exception was thrown by user callback.",t),e},Math.floor(0))}},FI=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Wl=function(i,e){const t=setTimeout(i,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class BI{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(n=>this.appCheck=n)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,n)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(n=>n.addTokenListener(e))}notifyForInvalidToken(){Bn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class kI{constructor(e,t,n){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=n,this.auth_=null,this.auth_=n.getImmediate({optional:!0}),this.auth_||n.onInit(r=>this.auth_=r)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Mn("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,n)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,n):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Bn(e)}}class Ia{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Ia.OWNER="owner";/**
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
 */const __="5",$y="v",Ky="s",jy="r",Zy="f",Qy=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Jy="ls",eE="p",Sp="ac",tE="websocket",nE="long_polling";/**
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
 */class iE{constructor(e,t,n,r,s=!1,a="",c=!1,u=!1){this.secure=t,this.namespace=n,this.webSocketOnly=r,this.nodeAdmin=s,this.persistenceKey=a,this.includeNamespaceInQueryParams=c,this.isUsingEmulator=u,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=mo.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&mo.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function zI(i){return i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams}function rE(i,e,t){Me(typeof e=="string","typeof type must == string"),Me(typeof t=="object","typeof params must == object");let n;if(e===tE)n=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(e===nE)n=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);zI(i)&&(t.ns=i.namespace);const r=[];return wn(t,(s,a)=>{r.push(s+"="+a)}),n+r.join("&")}/**
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
 */class HI{constructor(){this.counters_={}}incrementCounter(e,t=1){bi(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return kR(this.counters_)}}/**
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
 */const xd={},yd={};function m_(i){const e=i.toString();return xd[e]||(xd[e]=new HI),xd[e]}function GI(i,e){const t=i.toString();return yd[t]||(yd[t]=e()),yd[t]}/**
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
 */class WI{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const n=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let r=0;r<n.length;++r)n[r]&&il(()=>{this.onMessage_(n[r])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const n0="start",VI="close",XI="pLPCommand",qI="pRTLPCB",sE="id",oE="pw",aE="ser",YI="cb",$I="seg",KI="ts",jI="d",ZI="dframe",lE=1870,cE=30,QI=lE-cE,JI=25e3,eL=3e4;class Es{constructor(e,t,n,r,s,a,c){this.connId=e,this.repoInfo=t,this.applicationId=n,this.appCheckToken=r,this.authToken=s,this.transportSessionId=a,this.lastSessionId=c,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=yc(e),this.stats_=m_(t),this.urlFn=u=>(this.appCheckToken&&(u[Sp]=this.appCheckToken),rE(t,nE,u))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new WI(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(eL)),RI(()=>{if(this.isClosed_)return;this.scriptTagHolder=new g_((...s)=>{const[a,c,u,h,d]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,a===n0)this.id=c,this.password=u;else if(a===VI)c?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(c,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+a)},(...s)=>{const[a,c]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(a,c)},()=>{this.onClosed_()},this.urlFn);const n={};n[n0]="t",n[aE]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(n[YI]=this.scriptTagHolder.uniqueCallbackIdentifier),n[$y]=__,this.transportSessionId&&(n[Ky]=this.transportSessionId),this.lastSessionId&&(n[Jy]=this.lastSessionId),this.applicationId&&(n[eE]=this.applicationId),this.appCheckToken&&(n[Sp]=this.appCheckToken),typeof location<"u"&&location.hostname&&Qy.test(location.hostname)&&(n[jy]=Zy);const r=this.urlFn(n);this.log_("Connecting via long-poll to "+r),this.scriptTagHolder.addTag(r,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Es.forceAllow_=!0}static forceDisallow(){Es.forceDisallow_=!0}static isAvailable(){return Es.forceAllow_?!0:!Es.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!II()&&!LI()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=dn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=Sy(t),r=qy(n,QI);for(let s=0;s<r.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,r.length,r[s]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const n={};n[ZI]="t",n[sE]=e,n[oE]=t,this.myDisconnFrame.src=this.urlFn(n),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=dn(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class g_{constructor(e,t,n,r){this.onDisconnect=n,this.urlFn=r,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Wy(),window[XI+this.uniqueCallbackIdentifier]=e,window[qI+this.uniqueCallbackIdentifier]=t,this.myIFrame=g_.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const a="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(a),this.myIFrame.doc.close()}catch(c){Mn("frame writing exception"),c.stack&&Mn(c.stack),Mn(c)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Mn("No IE domain setting required")}catch{const n=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+n+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[sE]=this.myID,e[oE]=this.myPW,e[aE]=this.currentSerial;let t=this.urlFn(e),n="",r=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cE+n.length<=lE;){const a=this.pendingSegs.shift();n=n+"&"+$I+r+"="+a.seg+"&"+KI+r+"="+a.ts+"&"+jI+r+"="+a.d,r++}return t=t+n,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,n){this.pendingSegs.push({seg:e,ts:t,d:n}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const n=()=>{this.outstandingRequests.delete(t),this.newRequest_()},r=setTimeout(n,Math.floor(JI)),s=()=>{clearTimeout(r),n()};this.addTag(e,s)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const n=this.myIFrame.doc.createElement("script");n.type="text/javascript",n.async=!0,n.src=e,n.onload=n.onreadystatechange=function(){const r=n.readyState;(!r||r==="loaded"||r==="complete")&&(n.onload=n.onreadystatechange=null,n.parentNode&&n.parentNode.removeChild(n),t())},n.onerror=()=>{Mn("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(n)}catch{}},Math.floor(1))}}/**
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
 */const tL=16384,nL=45e3;let th=null;typeof MozWebSocket<"u"?th=MozWebSocket:typeof WebSocket<"u"&&(th=WebSocket);class Xi{constructor(e,t,n,r,s,a,c){this.connId=e,this.applicationId=n,this.appCheckToken=r,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=yc(this.connId),this.stats_=m_(t),this.connURL=Xi.connectionURL_(t,a,c,r,n),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,n,r,s){const a={};return a[$y]=__,typeof location<"u"&&location.hostname&&Qy.test(location.hostname)&&(a[jy]=Zy),t&&(a[Ky]=t),n&&(a[Jy]=n),r&&(a[Sp]=r),s&&(a[eE]=s),rE(e,tE,a)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,mo.set("previous_websocket_failure",!0);try{let n;wy(),this.mySock=new th(this.connURL,[],n)}catch(n){this.log_("Error instantiating WebSocket.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=n=>{this.handleIncomingFrame(n)},this.mySock.onerror=n=>{this.log_("WebSocket error.  Closing connection.");const r=n.message||n.data;r&&this.log_(r),this.onClosed_()}}start(){}static forceDisallow(){Xi.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,n=navigator.userAgent.match(t);n&&n.length>1&&parseFloat(n[1])<4.4&&(e=!0)}return!e&&th!==null&&!Xi.forceDisallow_}static previouslyFailed(){return mo.isInMemoryStorage||mo.get("previous_websocket_failure")===!0}markConnectionHealthy(){mo.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const n=Ql(t);this.onMessage(n)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(Me(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const n=this.extractFrameCount_(t);n!==null&&this.appendFrame_(n)}}send(e){this.resetKeepAlive();const t=dn(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const n=qy(t,tL);n.length>1&&this.sendString_(String(n.length));for(let r=0;r<n.length;r++)this.sendString_(n[r])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(nL))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Xi.responsesRequiredToBeHealthy=2;Xi.healthyTimeout=3e4;/**
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
 */class ka{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Es,Xi]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=Xi&&Xi.isAvailable();let n=t&&!Xi.previouslyFailed();if(e.webSocketOnly&&(t||Bn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),n=!0),n)this.transports_=[Xi];else{const r=this.transports_=[];for(const s of ka.ALL_TRANSPORTS)s&&s.isAvailable()&&r.push(s);ka.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}ka.globalTransportInitialized_=!1;/**
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
 */const iL=6e4,rL=5e3,sL=10*1024,oL=100*1024,Ed="t",i0="d",aL="s",r0="r",lL="e",s0="o",o0="a",a0="n",l0="p",cL="h";class uL{constructor(e,t,n,r,s,a,c,u,h,d){this.id=e,this.repoInfo_=t,this.applicationId_=n,this.appCheckToken_=r,this.authToken_=s,this.onMessage_=a,this.onReady_=c,this.onDisconnect_=u,this.onKill_=h,this.lastSessionId=d,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=yc("c:"+this.id+":"),this.transportManager_=new ka(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),n=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,n)},Math.floor(0));const r=e.healthyTimeout||0;r>0&&(this.healthyTimeout_=Wl(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>oL?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sL?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(r)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(Ed in e){const t=e[Ed];t===o0?this.upgradeIfSecondaryHealthy_():t===r0?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===s0&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Rl("t",e),n=Rl("d",e);if(t==="c")this.onSecondaryControl_(n);else if(t==="d")this.pendingDataMessages.push(n);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:l0,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:o0,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:a0,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Rl("t",e),n=Rl("d",e);t==="c"?this.onControl_(n):t==="d"&&this.onDataMessage_(n)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Rl(Ed,e);if(i0 in e){const n=e[i0];if(t===cL){const r=Object.assign({},n);this.repoInfo_.isUsingEmulator&&(r.h=this.repoInfo_.host),this.onHandshake_(r)}else if(t===a0){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let r=0;r<this.pendingDataMessages.length;++r)this.onDataMessage_(this.pendingDataMessages[r]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===aL?this.onConnectionShutdown_(n):t===r0?this.onReset_(n):t===lL?Ep("Server Error: "+n):t===s0?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ep("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,n=e.v,r=e.h;this.sessionId=e.s,this.repoInfo_.host=r,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),__!==n&&Bn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),n=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,n),Wl(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(iL))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Wl(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(rL))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:l0,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(mo.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class uE{put(e,t,n,r){}merge(e,t,n,r){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,n){}onDisconnectMerge(e,t,n){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class hE{constructor(e){this.allowedEvents_=e,this.listeners_={},Me(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const n=[...this.listeners_[e]];for(let r=0;r<n.length;r++)n[r].callback.apply(n[r].context,t)}}on(e,t,n){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:n});const r=this.getInitialEvent(e);r&&t.apply(n,r)}off(e,t,n){this.validateEventType_(e);const r=this.listeners_[e]||[];for(let s=0;s<r.length;s++)if(r[s].callback===t&&(!n||n===r[s].context)){r.splice(s,1);return}}validateEventType_(e){Me(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class nh extends hE{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Ty()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new nh}getInitialEvent(e){return Me(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const c0=32,u0=768;class Ct{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let n=0;for(let r=0;r<this.pieces_.length;r++)this.pieces_[r].length>0&&(this.pieces_[n]=this.pieces_[r],n++);this.pieces_.length=n,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function St(){return new Ct("")}function ut(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function Bs(i){return i.pieces_.length-i.pieceNum_}function Ft(i){let e=i.pieceNum_;return e<i.pieces_.length&&e++,new Ct(i.pieces_,e)}function v_(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function hL(i){let e="";for(let t=i.pieceNum_;t<i.pieces_.length;t++)i.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(i.pieces_[t])));return e||"/"}function tc(i,e=0){return i.pieces_.slice(i.pieceNum_+e)}function fE(i){if(i.pieceNum_>=i.pieces_.length)return null;const e=[];for(let t=i.pieceNum_;t<i.pieces_.length-1;t++)e.push(i.pieces_[t]);return new Ct(e,0)}function qt(i,e){const t=[];for(let n=i.pieceNum_;n<i.pieces_.length;n++)t.push(i.pieces_[n]);if(e instanceof Ct)for(let n=e.pieceNum_;n<e.pieces_.length;n++)t.push(e.pieces_[n]);else{const n=e.split("/");for(let r=0;r<n.length;r++)n[r].length>0&&t.push(n[r])}return new Ct(t,0)}function ht(i){return i.pieceNum_>=i.pieces_.length}function $n(i,e){const t=ut(i),n=ut(e);if(t===null)return e;if(t===n)return $n(Ft(i),Ft(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+i+")")}function fL(i,e){const t=tc(i,0),n=tc(e,0);for(let r=0;r<t.length&&r<n.length;r++){const s=Bo(t[r],n[r]);if(s!==0)return s}return t.length===n.length?0:t.length<n.length?-1:1}function x_(i,e){if(Bs(i)!==Bs(e))return!1;for(let t=i.pieceNum_,n=e.pieceNum_;t<=i.pieces_.length;t++,n++)if(i.pieces_[t]!==e.pieces_[n])return!1;return!0}function qi(i,e){let t=i.pieceNum_,n=e.pieceNum_;if(Bs(i)>Bs(e))return!1;for(;t<i.pieces_.length;){if(i.pieces_[t]!==e.pieces_[n])return!1;++t,++n}return!0}class dL{constructor(e,t){this.errorPrefix_=t,this.parts_=tc(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let n=0;n<this.parts_.length;n++)this.byteLength_+=Ah(this.parts_[n]);dE(this)}}function pL(i,e){i.parts_.length>0&&(i.byteLength_+=1),i.parts_.push(e),i.byteLength_+=Ah(e),dE(i)}function _L(i){const e=i.parts_.pop();i.byteLength_-=Ah(e),i.parts_.length>0&&(i.byteLength_-=1)}function dE(i){if(i.byteLength_>u0)throw new Error(i.errorPrefix_+"has a key path longer than "+u0+" bytes ("+i.byteLength_+").");if(i.parts_.length>c0)throw new Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+c0+") or object contains a cycle "+uo(i))}function uo(i){return i.parts_.length===0?"":"in property '"+i.parts_.join(".")+"'"}/**
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
 */class y_ extends hE{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const n=!document[e];n!==this.visible_&&(this.visible_=n,this.trigger("visible",n))},!1)}static getInstance(){return new y_}getInitialEvent(e){return Me(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const Pl=1e3,mL=60*5*1e3,h0=30*1e3,gL=1.3,vL=3e4,xL="server_kill",f0=3;class ts extends uE{constructor(e,t,n,r,s,a,c,u){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=n,this.onConnectStatus_=r,this.onServerInfoUpdate_=s,this.authTokenProvider_=a,this.appCheckTokenProvider_=c,this.authOverride_=u,this.id=ts.nextPersistentConnectionId_++,this.log_=yc("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=Pl,this.maxReconnectDelay_=mL,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,u&&!wy())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");y_.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&nh.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,n){const r=++this.requestNumber_,s={r,a:e,b:t};this.log_(dn(s)),Me(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),n&&(this.requestCBHash_[r]=n)}get(e){this.initConnection_();const t=new ei,r={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:a=>{const c=a.d;a.s==="ok"?t.resolve(c):t.reject(c)}};this.outstandingGets_.push(r),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),t.promise}listen(e,t,n,r){this.initConnection_();const s=e._queryIdentifier,a=e._path.toString();this.log_("Listen called for "+a+" "+s),this.listens.has(a)||this.listens.set(a,new Map),Me(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),Me(!this.listens.get(a).has(s),"listen() called twice for same path/queryId.");const c={onComplete:r,hashFn:t,query:e,tag:n};this.listens.get(a).set(s,c),this.connected_&&this.sendListen_(c)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,n=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(n)})}sendListen_(e){const t=e.query,n=t._path.toString(),r=t._queryIdentifier;this.log_("Listen on "+n+" for "+r);const s={p:n},a="q";e.tag&&(s.q=t._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(a,s,c=>{const u=c.d,h=c.s;ts.warnOnListenWarnings_(u,t),(this.listens.get(n)&&this.listens.get(n).get(r))===e&&(this.log_("listen response",c),h!=="ok"&&this.removeListen_(n,r),e.onComplete&&e.onComplete(h,u))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&bi(e,"w")){const n=Ao(e,"w");if(Array.isArray(n)&&~n.indexOf("no_index")){const r='".indexOn": "'+t._queryParams.getIndex().toString()+'"',s=t._path.toString();Bn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${r} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||nP(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=h0)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=tP(e)?"auth":"gauth",n={cred:e};this.authOverride_===null?n.noauth=!0:typeof this.authOverride_=="object"&&(n.authvar=this.authOverride_),this.sendRequest(t,n,r=>{const s=r.s,a=r.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,a))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,n=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,n)})}unlisten(e,t){const n=e._path.toString(),r=e._queryIdentifier;this.log_("Unlisten called for "+n+" "+r),Me(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(n,r)&&this.connected_&&this.sendUnlisten_(n,r,e._queryObject,t)}sendUnlisten_(e,t,n,r){this.log_("Unlisten on "+e+" for "+t);const s={p:e},a="n";r&&(s.q=n,s.t=r),this.sendRequest(a,s)}onDisconnectPut(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:n})}onDisconnectMerge(e,t,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:n})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,n,r){const s={p:t,d:n};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,a=>{r&&setTimeout(()=>{r(a.s,a.d)},Math.floor(0))})}put(e,t,n,r){this.putInternal("p",e,t,n,r)}merge(e,t,n,r){this.putInternal("m",e,t,n,r)}putInternal(e,t,n,r,s){this.initConnection_();const a={p:t,d:n};s!==void 0&&(a.h=s),this.outstandingPuts_.push({action:e,request:a,onComplete:r}),this.outstandingPutCount_++;const c=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(c):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,n=this.outstandingPuts_[e].request,r=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,n,s=>{this.log_(t+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),r&&r(s.s,s.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,n=>{if(n.s!=="ok"){const s=n.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+dn(e));const t=e.r,n=this.requestCBHash_[t];n&&(delete this.requestCBHash_[t],n(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):Ep("Unrecognized action received from server: "+dn(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){Me(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=Pl,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=Pl,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vL&&(this.reconnectDelay_=Pl),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gL)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),n=this.onRealtimeDisconnect_.bind(this),r=this.id+":"+ts.nextConnectionId_++,s=this.lastSessionId;let a=!1,c=null;const u=function(){c?c.close():(a=!0,n())},h=function(p){Me(c,"sendRequest call when we're not connected not allowed."),c.sendRequest(p)};this.realtime_={close:u,sendRequest:h};const d=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[p,_]=await Promise.all([this.authTokenProvider_.getToken(d),this.appCheckTokenProvider_.getToken(d)]);a?Mn("getToken() completed but was canceled"):(Mn("getToken() completed. Creating connection."),this.authToken_=p&&p.accessToken,this.appCheckToken_=_&&_.token,c=new uL(r,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,n,g=>{Bn(g+" ("+this.repoInfo_.toString()+")"),this.interrupt(xL)},s))}catch(p){this.log_("Failed to get token: "+p),a||(this.repoInfo_.nodeAdmin&&Bn(p),u())}}}interrupt(e){Mn("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Mn("Resuming connection for reason: "+e),delete this.interruptReasons_[e],_p(this.interruptReasons_)&&(this.reconnectDelay_=Pl,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let n;t?n=t.map(s=>p_(s)).join("$"):n="default";const r=this.removeListen_(e,n);r&&r.onComplete&&r.onComplete("permission_denied")}removeListen_(e,t){const n=new Ct(e).toString();let r;if(this.listens.has(n)){const s=this.listens.get(n);r=s.get(t),s.delete(t),s.size===0&&this.listens.delete(n)}else r=void 0;return r}onAuthRevoked_(e,t){Mn("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=f0&&(this.reconnectDelay_=h0,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Mn("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=f0&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+zy.replace(/\./g,"-")]=1,Ty()?e["framework.cordova"]=1:KR()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=nh.getInstance().currentlyOnline();return _p(this.interruptReasons_)&&e}}ts.nextPersistentConnectionId_=0;ts.nextConnectionId_=0;/**
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
 */class dt{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new dt(e,t)}}/**
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
 */class Ih{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const n=new dt(Fs,e),r=new dt(Fs,t);return this.compare(n,r)!==0}minPost(){return dt.MIN}}/**
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
 */let Eu;class pE extends Ih{static get __EMPTY_NODE(){return Eu}static set __EMPTY_NODE(e){Eu=e}compare(e,t){return Bo(e.name,t.name)}isDefinedOn(e){throw tl("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return dt.MIN}maxPost(){return new dt(is,Eu)}makePost(e,t){return Me(typeof e=="string","KeyIndex indexValue must always be a string."),new dt(e,Eu)}toString(){return".key"}}const Tr=new pE;/**
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
 */class Su{constructor(e,t,n,r,s=null){this.isReverse_=r,this.resultGenerator_=s,this.nodeStack_=[];let a=1;for(;!e.isEmpty();)if(e=e,a=t?n(e.key,t):1,r&&(a*=-1),a<0)this.isReverse_?e=e.left:e=e.right;else if(a===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Sn{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=n??Sn.RED,this.left=r??ni.EMPTY_NODE,this.right=s??ni.EMPTY_NODE}copy(e,t,n,r,s){return new Sn(e??this.key,t??this.value,n??this.color,r??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return s<0?r=r.copy(null,null,null,r.left.insert(e,t,n),null):s===0?r=r.copy(null,t,null,null,null):r=r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp_()}removeMin_(){if(this.left.isEmpty())return ni.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let n,r;if(n=this,t(e,n.key)<0)!n.left.isEmpty()&&!n.left.isRed_()&&!n.left.left.isRed_()&&(n=n.moveRedLeft_()),n=n.copy(null,null,null,n.left.remove(e,t),null);else{if(n.left.isRed_()&&(n=n.rotateRight_()),!n.right.isEmpty()&&!n.right.isRed_()&&!n.right.left.isRed_()&&(n=n.moveRedRight_()),t(e,n.key)===0){if(n.right.isEmpty())return ni.EMPTY_NODE;r=n.right.min_(),n=n.copy(r.key,r.value,null,null,n.right.removeMin_())}n=n.copy(null,null,null,null,n.right.remove(e,t))}return n.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Sn.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Sn.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Sn.RED=!0;Sn.BLACK=!1;class yL{copy(e,t,n,r,s){return this}insert(e,t,n){return new Sn(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ni{constructor(e,t=ni.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ni(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,Sn.BLACK,null,null))}remove(e){return new ni(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Sn.BLACK,null,null))}get(e){let t,n=this.root_;for(;!n.isEmpty();){if(t=this.comparator_(e,n.key),t===0)return n.value;t<0?n=n.left:t>0&&(n=n.right)}return null}getPredecessorKey(e){let t,n=this.root_,r=null;for(;!n.isEmpty();)if(t=this.comparator_(e,n.key),t===0){if(n.left.isEmpty())return r?r.key:null;for(n=n.left;!n.right.isEmpty();)n=n.right;return n.key}else t<0?n=n.left:t>0&&(r=n,n=n.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Su(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Su(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Su(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Su(this.root_,null,this.comparator_,!0,e)}}ni.EMPTY_NODE=new yL;/**
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
 */function EL(i,e){return Bo(i.name,e.name)}function E_(i,e){return Bo(i,e)}/**
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
 */let Mp;function SL(i){Mp=i}const _E=function(i){return typeof i=="number"?"number:"+Yy(i):"string:"+i},mE=function(i){if(i.isLeafNode()){const e=i.val();Me(typeof e=="string"||typeof e=="number"||typeof e=="object"&&bi(e,".sv"),"Priority must be a string or number.")}else Me(i===Mp||i.isEmpty(),"priority of unexpected type.");Me(i===Mp||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let d0;class yn{constructor(e,t=yn.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,Me(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),mE(this.priorityNode_)}static set __childrenNodeConstructor(e){d0=e}static get __childrenNodeConstructor(){return d0}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new yn(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:yn.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return ht(e)?this:ut(e)===".priority"?this.priorityNode_:yn.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:yn.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const n=ut(e);return n===null?t:t.isEmpty()&&n!==".priority"?this:(Me(n!==".priority"||Bs(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(n,yn.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ft(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+_E(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Yy(this.value_):e+=this.value_,this.lazyHash_=Vy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===yn.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof yn.__childrenNodeConstructor?-1:(Me(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,n=typeof this.value_,r=yn.VALUE_TYPE_ORDER.indexOf(t),s=yn.VALUE_TYPE_ORDER.indexOf(n);return Me(r>=0,"Unknown leaf type: "+t),Me(s>=0,"Unknown leaf type: "+n),r===s?n==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-r}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}yn.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let gE,vE;function ML(i){gE=i}function TL(i){vE=i}class wL extends Ih{compare(e,t){const n=e.node.getPriority(),r=t.node.getPriority(),s=n.compareTo(r);return s===0?Bo(e.name,t.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return dt.MIN}maxPost(){return new dt(is,new yn("[PRIORITY-POST]",vE))}makePost(e,t){const n=gE(e);return new dt(t,new yn("[PRIORITY-POST]",n))}toString(){return".priority"}}const Ht=new wL;/**
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
 */const bL=Math.log(2);class AL{constructor(e){const t=s=>parseInt(Math.log(s)/bL,10),n=s=>parseInt(Array(s+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const r=n(this.count);this.bits_=e+1&r}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ih=function(i,e,t,n){i.sort(e);const r=function(u,h){const d=h-u;let p,_;if(d===0)return null;if(d===1)return p=i[u],_=t?t(p):p,new Sn(_,p.node,Sn.BLACK,null,null);{const g=parseInt(d/2,10)+u,E=r(u,g),x=r(g+1,h);return p=i[g],_=t?t(p):p,new Sn(_,p.node,Sn.BLACK,E,x)}},s=function(u){let h=null,d=null,p=i.length;const _=function(E,x){const y=p-E,m=p;p-=E;const w=r(y+1,m),T=i[y],C=t?t(T):T;g(new Sn(C,T.node,x,null,w))},g=function(E){h?(h.left=E,h=E):(d=E,h=E)};for(let E=0;E<u.count;++E){const x=u.nextBitIsOne(),y=Math.pow(2,u.count-(E+1));x?_(y,Sn.BLACK):(_(y,Sn.BLACK),_(y,Sn.RED))}return d},a=new AL(i.length),c=s(a);return new ni(n||e,c)};/**
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
 */let Sd;const sa={};class Zr{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return Me(sa&&Ht,"ChildrenNode.ts has not been loaded"),Sd=Sd||new Zr({".priority":sa},{".priority":Ht}),Sd}get(e){const t=Ao(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ni?t:null}hasIndex(e){return bi(this.indexSet_,e.toString())}addIndex(e,t){Me(e!==Tr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const n=[];let r=!1;const s=t.getIterator(dt.Wrap);let a=s.getNext();for(;a;)r=r||e.isDefinedOn(a.node),n.push(a),a=s.getNext();let c;r?c=ih(n,e.getCompare()):c=sa;const u=e.toString(),h=Object.assign({},this.indexSet_);h[u]=e;const d=Object.assign({},this.indexes_);return d[u]=c,new Zr(d,h)}addToIndexes(e,t){const n=Ju(this.indexes_,(r,s)=>{const a=Ao(this.indexSet_,s);if(Me(a,"Missing index implementation for "+s),r===sa)if(a.isDefinedOn(e.node)){const c=[],u=t.getIterator(dt.Wrap);let h=u.getNext();for(;h;)h.name!==e.name&&c.push(h),h=u.getNext();return c.push(e),ih(c,a.getCompare())}else return sa;else{const c=t.get(e.name);let u=r;return c&&(u=u.remove(new dt(e.name,c))),u.insert(e,e.node)}});return new Zr(n,this.indexSet_)}removeFromIndexes(e,t){const n=Ju(this.indexes_,r=>{if(r===sa)return r;{const s=t.get(e.name);return s?r.remove(new dt(e.name,s)):r}});return new Zr(n,this.indexSet_)}}/**
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
 */let Il;class Ye{constructor(e,t,n){this.children_=e,this.priorityNode_=t,this.indexMap_=n,this.lazyHash_=null,this.priorityNode_&&mE(this.priorityNode_),this.children_.isEmpty()&&Me(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return Il||(Il=new Ye(new ni(E_),null,Zr.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Il}updatePriority(e){return this.children_.isEmpty()?this:new Ye(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Il:t}}getChild(e){const t=ut(e);return t===null?this:this.getImmediateChild(t).getChild(Ft(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(Me(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const n=new dt(e,t);let r,s;t.isEmpty()?(r=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(n,this.children_)):(r=this.children_.insert(e,t),s=this.indexMap_.addToIndexes(n,this.children_));const a=r.isEmpty()?Il:this.priorityNode_;return new Ye(r,a,s)}}updateChild(e,t){const n=ut(e);if(n===null)return t;{Me(ut(e)!==".priority"||Bs(e)===1,".priority must be the last token in a path");const r=this.getImmediateChild(n).updateChild(Ft(e),t);return this.updateImmediateChild(n,r)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let n=0,r=0,s=!0;if(this.forEachChild(Ht,(a,c)=>{t[a]=c.val(e),n++,s&&Ye.INTEGER_REGEXP_.test(a)?r=Math.max(r,Number(a)):s=!1}),!e&&s&&r<2*n){const a=[];for(const c in t)a[c]=t[c];return a}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+_E(this.getPriority().val())+":"),this.forEachChild(Ht,(t,n)=>{const r=n.hash();r!==""&&(e+=":"+t+":"+r)}),this.lazyHash_=e===""?"":Vy(e)}return this.lazyHash_}getPredecessorChildName(e,t,n){const r=this.resolveIndex_(n);if(r){const s=r.getPredecessorKey(new dt(e,t));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.minKey();return n&&n.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new dt(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const n=t.maxKey();return n&&n.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new dt(t,this.children_.get(t)):null}forEachChild(e,t){const n=this.resolveIndex_(e);return n?n.inorderTraversal(r=>t(r.name,r.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getIteratorFrom(e,r=>r);{const r=this.children_.getIteratorFrom(e.name,dt.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)<0;)r.getNext(),s=r.peek();return r}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const n=this.resolveIndex_(t);if(n)return n.getReverseIteratorFrom(e,r=>r);{const r=this.children_.getReverseIteratorFrom(e.name,dt.Wrap);let s=r.peek();for(;s!=null&&t.compare(s,e)>0;)r.getNext(),s=r.peek();return r}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ec?-1:0}withIndex(e){if(e===Tr||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new Ye(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Tr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const n=this.getIterator(Ht),r=t.getIterator(Ht);let s=n.getNext(),a=r.getNext();for(;s&&a;){if(s.name!==a.name||!s.node.equals(a.node))return!1;s=n.getNext(),a=r.getNext()}return s===null&&a===null}else return!1;else return!1}}resolveIndex_(e){return e===Tr?null:this.indexMap_.get(e.toString())}}Ye.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class CL extends Ye{constructor(){super(new ni(E_),Ye.EMPTY_NODE,Zr.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return Ye.EMPTY_NODE}isEmpty(){return!1}}const Ec=new CL;Object.defineProperties(dt,{MIN:{value:new dt(Fs,Ye.EMPTY_NODE)},MAX:{value:new dt(is,Ec)}});pE.__EMPTY_NODE=Ye.EMPTY_NODE;yn.__childrenNodeConstructor=Ye;SL(Ec);TL(Ec);/**
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
 */const RL=!0;function Zt(i,e=null){if(i===null)return Ye.EMPTY_NODE;if(typeof i=="object"&&".priority"in i&&(e=i[".priority"]),Me(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof i=="object"&&".value"in i&&i[".value"]!==null&&(i=i[".value"]),typeof i!="object"||".sv"in i){const t=i;return new yn(t,Zt(e))}if(!(i instanceof Array)&&RL){const t=[];let n=!1;if(wn(i,(a,c)=>{if(a.substring(0,1)!=="."){const u=Zt(c);u.isEmpty()||(n=n||!u.getPriority().isEmpty(),t.push(new dt(a,u)))}}),t.length===0)return Ye.EMPTY_NODE;const s=ih(t,EL,a=>a.name,E_);if(n){const a=ih(t,Ht.getCompare());return new Ye(s,Zt(e),new Zr({".priority":a},{".priority":Ht}))}else return new Ye(s,Zt(e),Zr.Default)}else{let t=Ye.EMPTY_NODE;return wn(i,(n,r)=>{if(bi(i,n)&&n.substring(0,1)!=="."){const s=Zt(r);(s.isLeafNode()||!s.isEmpty())&&(t=t.updateImmediateChild(n,s))}}),t.updatePriority(Zt(e))}}ML(Zt);/**
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
 */class S_ extends Ih{constructor(e){super(),this.indexPath_=e,Me(!ht(e)&&ut(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const n=this.extractChild(e.node),r=this.extractChild(t.node),s=n.compareTo(r);return s===0?Bo(e.name,t.name):s}makePost(e,t){const n=Zt(e),r=Ye.EMPTY_NODE.updateChild(this.indexPath_,n);return new dt(t,r)}maxPost(){const e=Ye.EMPTY_NODE.updateChild(this.indexPath_,Ec);return new dt(is,e)}toString(){return tc(this.indexPath_,0).join("/")}}/**
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
 */class PL extends Ih{compare(e,t){const n=e.node.compareTo(t.node);return n===0?Bo(e.name,t.name):n}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return dt.MIN}maxPost(){return dt.MAX}makePost(e,t){const n=Zt(e);return new dt(t,n)}toString(){return".value"}}const M_=new PL;/**
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
 */function xE(i){return{type:"value",snapshotNode:i}}function za(i,e){return{type:"child_added",snapshotNode:e,childName:i}}function nc(i,e){return{type:"child_removed",snapshotNode:e,childName:i}}function ic(i,e,t){return{type:"child_changed",snapshotNode:e,childName:i,oldSnap:t}}function IL(i,e){return{type:"child_moved",snapshotNode:e,childName:i}}/**
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
 */class T_{constructor(e){this.index_=e}updateChild(e,t,n,r,s,a){Me(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const c=e.getImmediateChild(t);return c.getChild(r).equals(n.getChild(r))&&c.isEmpty()===n.isEmpty()||(a!=null&&(n.isEmpty()?e.hasChild(t)?a.trackChildChange(nc(t,c)):Me(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):c.isEmpty()?a.trackChildChange(za(t,n)):a.trackChildChange(ic(t,n,c))),e.isLeafNode()&&n.isEmpty())?e:e.updateImmediateChild(t,n).withIndex(this.index_)}updateFullNode(e,t,n){return n!=null&&(e.isLeafNode()||e.forEachChild(Ht,(r,s)=>{t.hasChild(r)||n.trackChildChange(nc(r,s))}),t.isLeafNode()||t.forEachChild(Ht,(r,s)=>{if(e.hasChild(r)){const a=e.getImmediateChild(r);a.equals(s)||n.trackChildChange(ic(r,s,a))}else n.trackChildChange(za(r,s))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?Ye.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class rc{constructor(e){this.indexedFilter_=new T_(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rc.getStartPost_(e),this.endPost_=rc.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,n=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&n}updateChild(e,t,n,r,s,a){return this.matches(new dt(t,n))||(n=Ye.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,n,r,s,a)}updateFullNode(e,t,n){t.isLeafNode()&&(t=Ye.EMPTY_NODE);let r=t.withIndex(this.index_);r=r.updatePriority(Ye.EMPTY_NODE);const s=this;return t.forEachChild(Ht,(a,c)=>{s.matches(new dt(a,c))||(r=r.updateImmediateChild(a,Ye.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class LL{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const n=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?n<=0:n<0},this.withinEndPost=t=>{const n=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?n<=0:n<0},this.rangedFilter_=new rc(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,n,r,s,a){return this.rangedFilter_.matches(new dt(t,n))||(n=Ye.EMPTY_NODE),e.getImmediateChild(t).equals(n)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,n,r,s,a):this.fullLimitUpdateChild_(e,t,n,s,a)}updateFullNode(e,t,n){let r;if(t.isLeafNode()||t.isEmpty())r=Ye.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){r=Ye.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let a=0;for(;s.hasNext()&&a<this.limit_;){const c=s.getNext();if(this.withinDirectionalStart(c))if(this.withinDirectionalEnd(c))r=r.updateImmediateChild(c.name,c.node),a++;else break;else continue}}else{r=t.withIndex(this.index_),r=r.updatePriority(Ye.EMPTY_NODE);let s;this.reverse_?s=r.getReverseIterator(this.index_):s=r.getIterator(this.index_);let a=0;for(;s.hasNext();){const c=s.getNext();a<this.limit_&&this.withinDirectionalStart(c)&&this.withinDirectionalEnd(c)?a++:r=r.updateImmediateChild(c.name,Ye.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,r,n)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,n,r,s){let a;if(this.reverse_){const p=this.index_.getCompare();a=(_,g)=>p(g,_)}else a=this.index_.getCompare();const c=e;Me(c.numChildren()===this.limit_,"");const u=new dt(t,n),h=this.reverse_?c.getFirstChild(this.index_):c.getLastChild(this.index_),d=this.rangedFilter_.matches(u);if(c.hasChild(t)){const p=c.getImmediateChild(t);let _=r.getChildAfterChild(this.index_,h,this.reverse_);for(;_!=null&&(_.name===t||c.hasChild(_.name));)_=r.getChildAfterChild(this.index_,_,this.reverse_);const g=_==null?1:a(_,u);if(d&&!n.isEmpty()&&g>=0)return s!=null&&s.trackChildChange(ic(t,n,p)),c.updateImmediateChild(t,n);{s!=null&&s.trackChildChange(nc(t,p));const x=c.updateImmediateChild(t,Ye.EMPTY_NODE);return _!=null&&this.rangedFilter_.matches(_)?(s!=null&&s.trackChildChange(za(_.name,_.node)),x.updateImmediateChild(_.name,_.node)):x}}else return n.isEmpty()?e:d&&a(h,u)>=0?(s!=null&&(s.trackChildChange(nc(h.name,h.node)),s.trackChildChange(za(t,n))),c.updateImmediateChild(t,n).updateImmediateChild(h.name,Ye.EMPTY_NODE)):e}}/**
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
 */class Lh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Ht}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return Me(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return Me(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Fs}hasEnd(){return this.endSet_}getIndexEndValue(){return Me(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return Me(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:is}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return Me(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Ht}copy(){const e=new Lh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function DL(i){return i.loadsAllData()?new T_(i.getIndex()):i.hasLimit()?new LL(i):new rc(i)}function NL(i,e){const t=i.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="l",t}function OL(i,e){const t=i.copy();return t.limitSet_=!0,t.limit_=e,t.viewFrom_="r",t}function Tp(i,e,t){const n=i.copy();return n.startSet_=!0,e===void 0&&(e=null),n.indexStartValue_=e,t!=null?(n.startNameSet_=!0,n.indexStartName_=t):(n.startNameSet_=!1,n.indexStartName_=""),n}function UL(i,e,t){let n;return i.index_===Tr||t?n=Tp(i,e,t):n=Tp(i,e,is),n.startAfterSet_=!0,n}function wp(i,e,t){const n=i.copy();return n.endSet_=!0,e===void 0&&(e=null),n.indexEndValue_=e,t!==void 0?(n.endNameSet_=!0,n.indexEndName_=t):(n.endNameSet_=!1,n.indexEndName_=""),n}function FL(i,e,t){let n;return i.index_===Tr||t?n=wp(i,e,t):n=wp(i,e,Fs),n.endBeforeSet_=!0,n}function Dh(i,e){const t=i.copy();return t.index_=e,t}function p0(i){const e={};if(i.isDefault())return e;let t;if(i.index_===Ht?t="$priority":i.index_===M_?t="$value":i.index_===Tr?t="$key":(Me(i.index_ instanceof S_,"Unrecognized index type!"),t=i.index_.toString()),e.orderBy=dn(t),i.startSet_){const n=i.startAfterSet_?"startAfter":"startAt";e[n]=dn(i.indexStartValue_),i.startNameSet_&&(e[n]+=","+dn(i.indexStartName_))}if(i.endSet_){const n=i.endBeforeSet_?"endBefore":"endAt";e[n]=dn(i.indexEndValue_),i.endNameSet_&&(e[n]+=","+dn(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?e.limitToFirst=i.limit_:e.limitToLast=i.limit_),e}function _0(i){const e={};if(i.startSet_&&(e.sp=i.indexStartValue_,i.startNameSet_&&(e.sn=i.indexStartName_),e.sin=!i.startAfterSet_),i.endSet_&&(e.ep=i.indexEndValue_,i.endNameSet_&&(e.en=i.indexEndName_),e.ein=!i.endBeforeSet_),i.limitSet_){e.l=i.limit_;let t=i.viewFrom_;t===""&&(i.isViewFromLeft()?t="l":t="r"),e.vf=t}return i.index_!==Ht&&(e.i=i.index_.toString()),e}/**
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
 */class rh extends uE{constructor(e,t,n,r){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=n,this.appCheckTokenProvider_=r,this.log_=yc("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(Me(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,n,r){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const a=rh.getListenId_(e,n),c={};this.listens_[a]=c;const u=p0(e._queryParams);this.restRequest_(s+".json",u,(h,d)=>{let p=d;if(h===404&&(p=null,h=null),h===null&&this.onDataUpdate_(s,p,!1,n),Ao(this.listens_,a)===c){let _;h?h===401?_="permission_denied":_="rest_error:"+h:_="ok",r(_,null)}})}unlisten(e,t){const n=rh.getListenId_(e,t);delete this.listens_[n]}get(e){const t=p0(e._queryParams),n=e._path.toString(),r=new ei;return this.restRequest_(n+".json",t,(s,a)=>{let c=a;s===404&&(c=null,s=null),s===null?(this.onDataUpdate_(n,c,!1,null),r.resolve(c)):r.reject(new Error(c))}),r.promise}refreshAuthToken(e){}restRequest_(e,t={},n){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([r,s])=>{r&&r.accessToken&&(t.auth=r.accessToken),s&&s.token&&(t.ac=s.token);const a=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+iP(t);this.log_("Sending REST request for "+a);const c=new XMLHttpRequest;c.onreadystatechange=()=>{if(n&&c.readyState===4){this.log_("REST Response for "+a+" received. status:",c.status,"response:",c.responseText);let u=null;if(c.status>=200&&c.status<300){try{u=Ql(c.responseText)}catch{Bn("Failed to parse JSON response for "+a+": "+c.responseText)}n(null,u)}else c.status!==401&&c.status!==404&&Bn("Got unsuccessful REST response for "+a+" Status: "+c.status),n(c.status);n=null}},c.open("GET",a,!0),c.send()})}}/**
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
 */class BL{constructor(){this.rootNode_=Ye.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function sh(){return{value:null,children:new Map}}function rl(i,e,t){if(ht(e))i.value=t,i.children.clear();else if(i.value!==null)i.value=i.value.updateChild(e,t);else{const n=ut(e);i.children.has(n)||i.children.set(n,sh());const r=i.children.get(n);e=Ft(e),rl(r,e,t)}}function bp(i,e){if(ht(e))return i.value=null,i.children.clear(),!0;if(i.value!==null){if(i.value.isLeafNode())return!1;{const t=i.value;return i.value=null,t.forEachChild(Ht,(n,r)=>{rl(i,new Ct(n),r)}),bp(i,e)}}else if(i.children.size>0){const t=ut(e);return e=Ft(e),i.children.has(t)&&bp(i.children.get(t),e)&&i.children.delete(t),i.children.size===0}else return!0}function Ap(i,e,t){i.value!==null?t(e,i.value):kL(i,(n,r)=>{const s=new Ct(e.toString()+"/"+n);Ap(r,s,t)})}function kL(i,e){i.children.forEach((t,n)=>{e(n,t)})}/**
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
 */class zL{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&wn(this.last_,(n,r)=>{t[n]=t[n]-r}),this.last_=e,t}}/**
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
 */const m0=10*1e3,HL=30*1e3,GL=5*60*1e3;class WL{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new zL(e);const n=m0+(HL-m0)*Math.random();Wl(this.reportStats_.bind(this),Math.floor(n))}reportStats_(){const e=this.statsListener_.get(),t={};let n=!1;wn(e,(r,s)=>{s>0&&bi(this.statsToReport_,r)&&(t[r]=s,n=!0)}),n&&this.server_.reportStats(t),Wl(this.reportStats_.bind(this),Math.floor(Math.random()*2*GL))}}/**
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
 */var fr;(function(i){i[i.OVERWRITE=0]="OVERWRITE",i[i.MERGE=1]="MERGE",i[i.ACK_USER_WRITE=2]="ACK_USER_WRITE",i[i.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(fr||(fr={}));function w_(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function b_(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function A_(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}/**
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
 */class oh{constructor(e,t,n){this.path=e,this.affectedTree=t,this.revert=n,this.type=fr.ACK_USER_WRITE,this.source=w_()}operationForChild(e){if(ht(this.path)){if(this.affectedTree.value!=null)return Me(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new Ct(e));return new oh(St(),t,this.revert)}}else return Me(ut(this.path)===e,"operationForChild called for unrelated child."),new oh(Ft(this.path),this.affectedTree,this.revert)}}/**
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
 */class sc{constructor(e,t){this.source=e,this.path=t,this.type=fr.LISTEN_COMPLETE}operationForChild(e){return ht(this.path)?new sc(this.source,St()):new sc(this.source,Ft(this.path))}}/**
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
 */class Ro{constructor(e,t,n){this.source=e,this.path=t,this.snap=n,this.type=fr.OVERWRITE}operationForChild(e){return ht(this.path)?new Ro(this.source,St(),this.snap.getImmediateChild(e)):new Ro(this.source,Ft(this.path),this.snap)}}/**
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
 */class Ha{constructor(e,t,n){this.source=e,this.path=t,this.children=n,this.type=fr.MERGE}operationForChild(e){if(ht(this.path)){const t=this.children.subtree(new Ct(e));return t.isEmpty()?null:t.value?new Ro(this.source,St(),t.value):new Ha(this.source,St(),t)}else return Me(ut(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ha(this.source,Ft(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ks{constructor(e,t,n){this.node_=e,this.fullyInitialized_=t,this.filtered_=n}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(ht(e))return this.isFullyInitialized()&&!this.filtered_;const t=ut(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class VL{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function XL(i,e,t,n){const r=[],s=[];return e.forEach(a=>{a.type==="child_changed"&&i.index_.indexedValueChanged(a.oldSnap,a.snapshotNode)&&s.push(IL(a.childName,a.snapshotNode))}),Ll(i,r,"child_removed",e,n,t),Ll(i,r,"child_added",e,n,t),Ll(i,r,"child_moved",s,n,t),Ll(i,r,"child_changed",e,n,t),Ll(i,r,"value",e,n,t),r}function Ll(i,e,t,n,r,s){const a=n.filter(c=>c.type===t);a.sort((c,u)=>YL(i,c,u)),a.forEach(c=>{const u=qL(i,c,s);r.forEach(h=>{h.respondsTo(c.type)&&e.push(h.createEvent(u,i.query_))})})}function qL(i,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,i.index_)),e}function YL(i,e,t){if(e.childName==null||t.childName==null)throw tl("Should only compare child_ events.");const n=new dt(e.childName,e.snapshotNode),r=new dt(t.childName,t.snapshotNode);return i.index_.compare(n,r)}/**
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
 */function Nh(i,e){return{eventCache:i,serverCache:e}}function Vl(i,e,t,n){return Nh(new ks(e,t,n),i.serverCache)}function yE(i,e,t,n){return Nh(i.eventCache,new ks(e,t,n))}function ah(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function Po(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}/**
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
 */let Md;const $L=()=>(Md||(Md=new ni(PI)),Md);class zt{constructor(e,t=$L()){this.value=e,this.children=t}static fromObject(e){let t=new zt(null);return wn(e,(n,r)=>{t=t.set(new Ct(n),r)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:St(),value:this.value};if(ht(e))return null;{const n=ut(e),r=this.children.get(n);if(r!==null){const s=r.findRootMostMatchingPathAndValue(Ft(e),t);return s!=null?{path:qt(new Ct(n),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(ht(e))return this;{const t=ut(e),n=this.children.get(t);return n!==null?n.subtree(Ft(e)):new zt(null)}}set(e,t){if(ht(e))return new zt(t,this.children);{const n=ut(e),s=(this.children.get(n)||new zt(null)).set(Ft(e),t),a=this.children.insert(n,s);return new zt(this.value,a)}}remove(e){if(ht(e))return this.children.isEmpty()?new zt(null):new zt(null,this.children);{const t=ut(e),n=this.children.get(t);if(n){const r=n.remove(Ft(e));let s;return r.isEmpty()?s=this.children.remove(t):s=this.children.insert(t,r),this.value===null&&s.isEmpty()?new zt(null):new zt(this.value,s)}else return this}}get(e){if(ht(e))return this.value;{const t=ut(e),n=this.children.get(t);return n?n.get(Ft(e)):null}}setTree(e,t){if(ht(e))return t;{const n=ut(e),s=(this.children.get(n)||new zt(null)).setTree(Ft(e),t);let a;return s.isEmpty()?a=this.children.remove(n):a=this.children.insert(n,s),new zt(this.value,a)}}fold(e){return this.fold_(St(),e)}fold_(e,t){const n={};return this.children.inorderTraversal((r,s)=>{n[r]=s.fold_(qt(e,r),t)}),t(e,this.value,n)}findOnPath(e,t){return this.findOnPath_(e,St(),t)}findOnPath_(e,t,n){const r=this.value?n(t,this.value):!1;if(r)return r;if(ht(e))return null;{const s=ut(e),a=this.children.get(s);return a?a.findOnPath_(Ft(e),qt(t,s),n):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,St(),t)}foreachOnPath_(e,t,n){if(ht(e))return this;{this.value&&n(t,this.value);const r=ut(e),s=this.children.get(r);return s?s.foreachOnPath_(Ft(e),qt(t,r),n):new zt(null)}}foreach(e){this.foreach_(St(),e)}foreach_(e,t){this.children.inorderTraversal((n,r)=>{r.foreach_(qt(e,n),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,n)=>{n.value&&e(t,n.value)})}}/**
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
 */class dr{constructor(e){this.writeTree_=e}static empty(){return new dr(new zt(null))}}function Xl(i,e,t){if(ht(e))return new dr(new zt(t));{const n=i.writeTree_.findRootMostValueAndPath(e);if(n!=null){const r=n.path;let s=n.value;const a=$n(r,e);return s=s.updateChild(a,t),new dr(i.writeTree_.set(r,s))}else{const r=new zt(t),s=i.writeTree_.setTree(e,r);return new dr(s)}}}function Cp(i,e,t){let n=i;return wn(t,(r,s)=>{n=Xl(n,qt(e,r),s)}),n}function g0(i,e){if(ht(e))return dr.empty();{const t=i.writeTree_.setTree(e,new zt(null));return new dr(t)}}function Rp(i,e){return ko(i,e)!=null}function ko(i,e){const t=i.writeTree_.findRootMostValueAndPath(e);return t!=null?i.writeTree_.get(t.path).getChild($n(t.path,e)):null}function v0(i){const e=[],t=i.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(Ht,(n,r)=>{e.push(new dt(n,r))}):i.writeTree_.children.inorderTraversal((n,r)=>{r.value!=null&&e.push(new dt(n,r.value))}),e}function Cs(i,e){if(ht(e))return i;{const t=ko(i,e);return t!=null?new dr(new zt(t)):new dr(i.writeTree_.subtree(e))}}function Pp(i){return i.writeTree_.isEmpty()}function Ga(i,e){return EE(St(),i.writeTree_,e)}function EE(i,e,t){if(e.value!=null)return t.updateChild(i,e.value);{let n=null;return e.children.inorderTraversal((r,s)=>{r===".priority"?(Me(s.value!==null,"Priority writes must always be leaf nodes"),n=s.value):t=EE(qt(i,r),s,t)}),!t.getChild(i).isEmpty()&&n!==null&&(t=t.updateChild(qt(i,".priority"),n)),t}}/**
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
 */function Oh(i,e){return wE(e,i)}function KL(i,e,t,n,r){Me(n>i.lastWriteId,"Stacking an older write on top of newer ones"),r===void 0&&(r=!0),i.allWrites.push({path:e,snap:t,writeId:n,visible:r}),r&&(i.visibleWrites=Xl(i.visibleWrites,e,t)),i.lastWriteId=n}function jL(i,e,t,n){Me(n>i.lastWriteId,"Stacking an older merge on top of newer ones"),i.allWrites.push({path:e,children:t,writeId:n,visible:!0}),i.visibleWrites=Cp(i.visibleWrites,e,t),i.lastWriteId=n}function ZL(i,e){for(let t=0;t<i.allWrites.length;t++){const n=i.allWrites[t];if(n.writeId===e)return n}return null}function QL(i,e){const t=i.allWrites.findIndex(c=>c.writeId===e);Me(t>=0,"removeWrite called with nonexistent writeId.");const n=i.allWrites[t];i.allWrites.splice(t,1);let r=n.visible,s=!1,a=i.allWrites.length-1;for(;r&&a>=0;){const c=i.allWrites[a];c.visible&&(a>=t&&JL(c,n.path)?r=!1:qi(n.path,c.path)&&(s=!0)),a--}if(r){if(s)return eD(i),!0;if(n.snap)i.visibleWrites=g0(i.visibleWrites,n.path);else{const c=n.children;wn(c,u=>{i.visibleWrites=g0(i.visibleWrites,qt(n.path,u))})}return!0}else return!1}function JL(i,e){if(i.snap)return qi(i.path,e);for(const t in i.children)if(i.children.hasOwnProperty(t)&&qi(qt(i.path,t),e))return!0;return!1}function eD(i){i.visibleWrites=SE(i.allWrites,tD,St()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1}function tD(i){return i.visible}function SE(i,e,t){let n=dr.empty();for(let r=0;r<i.length;++r){const s=i[r];if(e(s)){const a=s.path;let c;if(s.snap)qi(t,a)?(c=$n(t,a),n=Xl(n,c,s.snap)):qi(a,t)&&(c=$n(a,t),n=Xl(n,St(),s.snap.getChild(c)));else if(s.children){if(qi(t,a))c=$n(t,a),n=Cp(n,c,s.children);else if(qi(a,t))if(c=$n(a,t),ht(c))n=Cp(n,St(),s.children);else{const u=Ao(s.children,ut(c));if(u){const h=u.getChild(Ft(c));n=Xl(n,St(),h)}}}else throw tl("WriteRecord should have .snap or .children")}}return n}function ME(i,e,t,n,r){if(!n&&!r){const s=ko(i.visibleWrites,e);if(s!=null)return s;{const a=Cs(i.visibleWrites,e);if(Pp(a))return t;if(t==null&&!Rp(a,St()))return null;{const c=t||Ye.EMPTY_NODE;return Ga(a,c)}}}else{const s=Cs(i.visibleWrites,e);if(!r&&Pp(s))return t;if(!r&&t==null&&!Rp(s,St()))return null;{const a=function(h){return(h.visible||r)&&(!n||!~n.indexOf(h.writeId))&&(qi(h.path,e)||qi(e,h.path))},c=SE(i.allWrites,a,e),u=t||Ye.EMPTY_NODE;return Ga(c,u)}}}function nD(i,e,t){let n=Ye.EMPTY_NODE;const r=ko(i.visibleWrites,e);if(r)return r.isLeafNode()||r.forEachChild(Ht,(s,a)=>{n=n.updateImmediateChild(s,a)}),n;if(t){const s=Cs(i.visibleWrites,e);return t.forEachChild(Ht,(a,c)=>{const u=Ga(Cs(s,new Ct(a)),c);n=n.updateImmediateChild(a,u)}),v0(s).forEach(a=>{n=n.updateImmediateChild(a.name,a.node)}),n}else{const s=Cs(i.visibleWrites,e);return v0(s).forEach(a=>{n=n.updateImmediateChild(a.name,a.node)}),n}}function iD(i,e,t,n,r){Me(n||r,"Either existingEventSnap or existingServerSnap must exist");const s=qt(e,t);if(Rp(i.visibleWrites,s))return null;{const a=Cs(i.visibleWrites,s);return Pp(a)?r.getChild(t):Ga(a,r.getChild(t))}}function rD(i,e,t,n){const r=qt(e,t),s=ko(i.visibleWrites,r);if(s!=null)return s;if(n.isCompleteForChild(t)){const a=Cs(i.visibleWrites,r);return Ga(a,n.getNode().getImmediateChild(t))}else return null}function sD(i,e){return ko(i.visibleWrites,e)}function oD(i,e,t,n,r,s,a){let c;const u=Cs(i.visibleWrites,e),h=ko(u,St());if(h!=null)c=h;else if(t!=null)c=Ga(u,t);else return[];if(c=c.withIndex(a),!c.isEmpty()&&!c.isLeafNode()){const d=[],p=a.getCompare(),_=s?c.getReverseIteratorFrom(n,a):c.getIteratorFrom(n,a);let g=_.getNext();for(;g&&d.length<r;)p(g,n)!==0&&d.push(g),g=_.getNext();return d}else return[]}function aD(){return{visibleWrites:dr.empty(),allWrites:[],lastWriteId:-1}}function lh(i,e,t,n){return ME(i.writeTree,i.treePath,e,t,n)}function C_(i,e){return nD(i.writeTree,i.treePath,e)}function x0(i,e,t,n){return iD(i.writeTree,i.treePath,e,t,n)}function ch(i,e){return sD(i.writeTree,qt(i.treePath,e))}function lD(i,e,t,n,r,s){return oD(i.writeTree,i.treePath,e,t,n,r,s)}function R_(i,e,t){return rD(i.writeTree,i.treePath,e,t)}function TE(i,e){return wE(qt(i.treePath,e),i.writeTree)}function wE(i,e){return{treePath:i,writeTree:e}}/**
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
 */class cD{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,n=e.childName;Me(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),Me(n!==".priority","Only non-priority child changes can be tracked.");const r=this.changeMap.get(n);if(r){const s=r.type;if(t==="child_added"&&s==="child_removed")this.changeMap.set(n,ic(n,e.snapshotNode,r.snapshotNode));else if(t==="child_removed"&&s==="child_added")this.changeMap.delete(n);else if(t==="child_removed"&&s==="child_changed")this.changeMap.set(n,nc(n,r.oldSnap));else if(t==="child_changed"&&s==="child_added")this.changeMap.set(n,za(n,e.snapshotNode));else if(t==="child_changed"&&s==="child_changed")this.changeMap.set(n,ic(n,e.snapshotNode,r.oldSnap));else throw tl("Illegal combination of changes: "+e+" occurred after "+r)}else this.changeMap.set(n,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class uD{getCompleteChild(e){return null}getChildAfterChild(e,t,n){return null}}const bE=new uD;class P_{constructor(e,t,n=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=n}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const n=this.optCompleteServerCache_!=null?new ks(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return R_(this.writes_,e,n)}}getChildAfterChild(e,t,n){const r=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:Po(this.viewCache_),s=lD(this.writes_,r,t,1,n,e);return s.length===0?null:s[0]}}/**
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
 */function hD(i){return{filter:i}}function fD(i,e){Me(e.eventCache.getNode().isIndexed(i.filter.getIndex()),"Event snap not indexed"),Me(e.serverCache.getNode().isIndexed(i.filter.getIndex()),"Server snap not indexed")}function dD(i,e,t,n,r){const s=new cD;let a,c;if(t.type===fr.OVERWRITE){const h=t;h.source.fromUser?a=Ip(i,e,h.path,h.snap,n,r,s):(Me(h.source.fromServer,"Unknown source."),c=h.source.tagged||e.serverCache.isFiltered()&&!ht(h.path),a=uh(i,e,h.path,h.snap,n,r,c,s))}else if(t.type===fr.MERGE){const h=t;h.source.fromUser?a=_D(i,e,h.path,h.children,n,r,s):(Me(h.source.fromServer,"Unknown source."),c=h.source.tagged||e.serverCache.isFiltered(),a=Lp(i,e,h.path,h.children,n,r,c,s))}else if(t.type===fr.ACK_USER_WRITE){const h=t;h.revert?a=vD(i,e,h.path,n,r,s):a=mD(i,e,h.path,h.affectedTree,n,r,s)}else if(t.type===fr.LISTEN_COMPLETE)a=gD(i,e,t.path,n,s);else throw tl("Unknown operation type: "+t.type);const u=s.getChanges();return pD(e,a,u),{viewCache:a,changes:u}}function pD(i,e,t){const n=e.eventCache;if(n.isFullyInitialized()){const r=n.getNode().isLeafNode()||n.getNode().isEmpty(),s=ah(i);(t.length>0||!i.eventCache.isFullyInitialized()||r&&!n.getNode().equals(s)||!n.getNode().getPriority().equals(s.getPriority()))&&t.push(xE(ah(e)))}}function AE(i,e,t,n,r,s){const a=e.eventCache;if(ch(n,t)!=null)return e;{let c,u;if(ht(t))if(Me(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const h=Po(e),d=h instanceof Ye?h:Ye.EMPTY_NODE,p=C_(n,d);c=i.filter.updateFullNode(e.eventCache.getNode(),p,s)}else{const h=lh(n,Po(e));c=i.filter.updateFullNode(e.eventCache.getNode(),h,s)}else{const h=ut(t);if(h===".priority"){Me(Bs(t)===1,"Can't have a priority with additional path components");const d=a.getNode();u=e.serverCache.getNode();const p=x0(n,t,d,u);p!=null?c=i.filter.updatePriority(d,p):c=a.getNode()}else{const d=Ft(t);let p;if(a.isCompleteForChild(h)){u=e.serverCache.getNode();const _=x0(n,t,a.getNode(),u);_!=null?p=a.getNode().getImmediateChild(h).updateChild(d,_):p=a.getNode().getImmediateChild(h)}else p=R_(n,h,e.serverCache);p!=null?c=i.filter.updateChild(a.getNode(),h,p,d,r,s):c=a.getNode()}}return Vl(e,c,a.isFullyInitialized()||ht(t),i.filter.filtersNodes())}}function uh(i,e,t,n,r,s,a,c){const u=e.serverCache;let h;const d=a?i.filter:i.filter.getIndexedFilter();if(ht(t))h=d.updateFullNode(u.getNode(),n,null);else if(d.filtersNodes()&&!u.isFiltered()){const g=u.getNode().updateChild(t,n);h=d.updateFullNode(u.getNode(),g,null)}else{const g=ut(t);if(!u.isCompleteForPath(t)&&Bs(t)>1)return e;const E=Ft(t),y=u.getNode().getImmediateChild(g).updateChild(E,n);g===".priority"?h=d.updatePriority(u.getNode(),y):h=d.updateChild(u.getNode(),g,y,E,bE,null)}const p=yE(e,h,u.isFullyInitialized()||ht(t),d.filtersNodes()),_=new P_(r,p,s);return AE(i,p,t,r,_,c)}function Ip(i,e,t,n,r,s,a){const c=e.eventCache;let u,h;const d=new P_(r,e,s);if(ht(t))h=i.filter.updateFullNode(e.eventCache.getNode(),n,a),u=Vl(e,h,!0,i.filter.filtersNodes());else{const p=ut(t);if(p===".priority")h=i.filter.updatePriority(e.eventCache.getNode(),n),u=Vl(e,h,c.isFullyInitialized(),c.isFiltered());else{const _=Ft(t),g=c.getNode().getImmediateChild(p);let E;if(ht(_))E=n;else{const x=d.getCompleteChild(p);x!=null?v_(_)===".priority"&&x.getChild(fE(_)).isEmpty()?E=x:E=x.updateChild(_,n):E=Ye.EMPTY_NODE}if(g.equals(E))u=e;else{const x=i.filter.updateChild(c.getNode(),p,E,_,d,a);u=Vl(e,x,c.isFullyInitialized(),i.filter.filtersNodes())}}}return u}function y0(i,e){return i.eventCache.isCompleteForChild(e)}function _D(i,e,t,n,r,s,a){let c=e;return n.foreach((u,h)=>{const d=qt(t,u);y0(e,ut(d))&&(c=Ip(i,c,d,h,r,s,a))}),n.foreach((u,h)=>{const d=qt(t,u);y0(e,ut(d))||(c=Ip(i,c,d,h,r,s,a))}),c}function E0(i,e,t){return t.foreach((n,r)=>{e=e.updateChild(n,r)}),e}function Lp(i,e,t,n,r,s,a,c){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let u=e,h;ht(t)?h=n:h=new zt(null).setTree(t,n);const d=e.serverCache.getNode();return h.children.inorderTraversal((p,_)=>{if(d.hasChild(p)){const g=e.serverCache.getNode().getImmediateChild(p),E=E0(i,g,_);u=uh(i,u,new Ct(p),E,r,s,a,c)}}),h.children.inorderTraversal((p,_)=>{const g=!e.serverCache.isCompleteForChild(p)&&_.value===null;if(!d.hasChild(p)&&!g){const E=e.serverCache.getNode().getImmediateChild(p),x=E0(i,E,_);u=uh(i,u,new Ct(p),x,r,s,a,c)}}),u}function mD(i,e,t,n,r,s,a){if(ch(r,t)!=null)return e;const c=e.serverCache.isFiltered(),u=e.serverCache;if(n.value!=null){if(ht(t)&&u.isFullyInitialized()||u.isCompleteForPath(t))return uh(i,e,t,u.getNode().getChild(t),r,s,c,a);if(ht(t)){let h=new zt(null);return u.getNode().forEachChild(Tr,(d,p)=>{h=h.set(new Ct(d),p)}),Lp(i,e,t,h,r,s,c,a)}else return e}else{let h=new zt(null);return n.foreach((d,p)=>{const _=qt(t,d);u.isCompleteForPath(_)&&(h=h.set(d,u.getNode().getChild(_)))}),Lp(i,e,t,h,r,s,c,a)}}function gD(i,e,t,n,r){const s=e.serverCache,a=yE(e,s.getNode(),s.isFullyInitialized()||ht(t),s.isFiltered());return AE(i,a,t,n,bE,r)}function vD(i,e,t,n,r,s){let a;if(ch(n,t)!=null)return e;{const c=new P_(n,e,r),u=e.eventCache.getNode();let h;if(ht(t)||ut(t)===".priority"){let d;if(e.serverCache.isFullyInitialized())d=lh(n,Po(e));else{const p=e.serverCache.getNode();Me(p instanceof Ye,"serverChildren would be complete if leaf node"),d=C_(n,p)}d=d,h=i.filter.updateFullNode(u,d,s)}else{const d=ut(t);let p=R_(n,d,e.serverCache);p==null&&e.serverCache.isCompleteForChild(d)&&(p=u.getImmediateChild(d)),p!=null?h=i.filter.updateChild(u,d,p,Ft(t),c,s):e.eventCache.getNode().hasChild(d)?h=i.filter.updateChild(u,d,Ye.EMPTY_NODE,Ft(t),c,s):h=u,h.isEmpty()&&e.serverCache.isFullyInitialized()&&(a=lh(n,Po(e)),a.isLeafNode()&&(h=i.filter.updateFullNode(h,a,s)))}return a=e.serverCache.isFullyInitialized()||ch(n,St())!=null,Vl(e,h,a,i.filter.filtersNodes())}}/**
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
 */class xD{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const n=this.query_._queryParams,r=new T_(n.getIndex()),s=DL(n);this.processor_=hD(s);const a=t.serverCache,c=t.eventCache,u=r.updateFullNode(Ye.EMPTY_NODE,a.getNode(),null),h=s.updateFullNode(Ye.EMPTY_NODE,c.getNode(),null),d=new ks(u,a.isFullyInitialized(),r.filtersNodes()),p=new ks(h,c.isFullyInitialized(),s.filtersNodes());this.viewCache_=Nh(p,d),this.eventGenerator_=new VL(this.query_)}get query(){return this.query_}}function yD(i){return i.viewCache_.serverCache.getNode()}function ED(i){return ah(i.viewCache_)}function SD(i,e){const t=Po(i.viewCache_);return t&&(i.query._queryParams.loadsAllData()||!ht(e)&&!t.getImmediateChild(ut(e)).isEmpty())?t.getChild(e):null}function S0(i){return i.eventRegistrations_.length===0}function MD(i,e){i.eventRegistrations_.push(e)}function M0(i,e,t){const n=[];if(t){Me(e==null,"A cancel should cancel all event registrations.");const r=i.query._path;i.eventRegistrations_.forEach(s=>{const a=s.createCancelEvent(t,r);a&&n.push(a)})}if(e){let r=[];for(let s=0;s<i.eventRegistrations_.length;++s){const a=i.eventRegistrations_[s];if(!a.matches(e))r.push(a);else if(e.hasAnyCallback()){r=r.concat(i.eventRegistrations_.slice(s+1));break}}i.eventRegistrations_=r}else i.eventRegistrations_=[];return n}function T0(i,e,t,n){e.type===fr.MERGE&&e.source.queryId!==null&&(Me(Po(i.viewCache_),"We should always have a full cache before handling merges"),Me(ah(i.viewCache_),"Missing event cache, even though we have a server cache"));const r=i.viewCache_,s=dD(i.processor_,r,e,t,n);return fD(i.processor_,s.viewCache),Me(s.viewCache.serverCache.isFullyInitialized()||!r.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=s.viewCache,CE(i,s.changes,s.viewCache.eventCache.getNode(),null)}function TD(i,e){const t=i.viewCache_.eventCache,n=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(Ht,(s,a)=>{n.push(za(s,a))}),t.isFullyInitialized()&&n.push(xE(t.getNode())),CE(i,n,t.getNode(),e)}function CE(i,e,t,n){const r=n?[n]:i.eventRegistrations_;return XL(i.eventGenerator_,e,t,r)}/**
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
 */let hh;class RE{constructor(){this.views=new Map}}function wD(i){Me(!hh,"__referenceConstructor has already been defined"),hh=i}function bD(){return Me(hh,"Reference.ts has not been loaded"),hh}function AD(i){return i.views.size===0}function I_(i,e,t,n){const r=e.source.queryId;if(r!==null){const s=i.views.get(r);return Me(s!=null,"SyncTree gave us an op for an invalid query."),T0(s,e,t,n)}else{let s=[];for(const a of i.views.values())s=s.concat(T0(a,e,t,n));return s}}function PE(i,e,t,n,r){const s=e._queryIdentifier,a=i.views.get(s);if(!a){let c=lh(t,r?n:null),u=!1;c?u=!0:n instanceof Ye?(c=C_(t,n),u=!1):(c=Ye.EMPTY_NODE,u=!1);const h=Nh(new ks(c,u,!1),new ks(n,r,!1));return new xD(e,h)}return a}function CD(i,e,t,n,r,s){const a=PE(i,e,n,r,s);return i.views.has(e._queryIdentifier)||i.views.set(e._queryIdentifier,a),MD(a,t),TD(a,t)}function RD(i,e,t,n){const r=e._queryIdentifier,s=[];let a=[];const c=zs(i);if(r==="default")for(const[u,h]of i.views.entries())a=a.concat(M0(h,t,n)),S0(h)&&(i.views.delete(u),h.query._queryParams.loadsAllData()||s.push(h.query));else{const u=i.views.get(r);u&&(a=a.concat(M0(u,t,n)),S0(u)&&(i.views.delete(r),u.query._queryParams.loadsAllData()||s.push(u.query)))}return c&&!zs(i)&&s.push(new(bD())(e._repo,e._path)),{removed:s,events:a}}function IE(i){const e=[];for(const t of i.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Rs(i,e){let t=null;for(const n of i.views.values())t=t||SD(n,e);return t}function LE(i,e){if(e._queryParams.loadsAllData())return Uh(i);{const n=e._queryIdentifier;return i.views.get(n)}}function DE(i,e){return LE(i,e)!=null}function zs(i){return Uh(i)!=null}function Uh(i){for(const e of i.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let fh;function PD(i){Me(!fh,"__referenceConstructor has already been defined"),fh=i}function ID(){return Me(fh,"Reference.ts has not been loaded"),fh}let LD=1;class w0{constructor(e){this.listenProvider_=e,this.syncPointTree_=new zt(null),this.pendingWriteTree_=aD(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function L_(i,e,t,n,r){return KL(i.pendingWriteTree_,e,t,n,r),r?sl(i,new Ro(w_(),e,t)):[]}function DD(i,e,t,n){jL(i.pendingWriteTree_,e,t,n);const r=zt.fromObject(t);return sl(i,new Ha(w_(),e,r))}function Ss(i,e,t=!1){const n=ZL(i.pendingWriteTree_,e);if(QL(i.pendingWriteTree_,e)){let s=new zt(null);return n.snap!=null?s=s.set(St(),!0):wn(n.children,a=>{s=s.set(new Ct(a),!0)}),sl(i,new oh(n.path,s,t))}else return[]}function Sc(i,e,t){return sl(i,new Ro(b_(),e,t))}function ND(i,e,t){const n=zt.fromObject(t);return sl(i,new Ha(b_(),e,n))}function OD(i,e){return sl(i,new sc(b_(),e))}function UD(i,e,t){const n=D_(i,t);if(n){const r=N_(n),s=r.path,a=r.queryId,c=$n(s,e),u=new sc(A_(a),c);return O_(i,s,u)}else return[]}function dh(i,e,t,n,r=!1){const s=e._path,a=i.syncPointTree_.get(s);let c=[];if(a&&(e._queryIdentifier==="default"||DE(a,e))){const u=RD(a,e,t,n);AD(a)&&(i.syncPointTree_=i.syncPointTree_.remove(s));const h=u.removed;if(c=u.events,!r){const d=h.findIndex(_=>_._queryParams.loadsAllData())!==-1,p=i.syncPointTree_.findOnPath(s,(_,g)=>zs(g));if(d&&!p){const _=i.syncPointTree_.subtree(s);if(!_.isEmpty()){const g=kD(_);for(let E=0;E<g.length;++E){const x=g[E],y=x.query,m=FE(i,x);i.listenProvider_.startListening(ql(y),oc(i,y),m.hashFn,m.onComplete)}}}!p&&h.length>0&&!n&&(d?i.listenProvider_.stopListening(ql(e),null):h.forEach(_=>{const g=i.queryToTagMap.get(Bh(_));i.listenProvider_.stopListening(ql(_),g)}))}zD(i,h)}return c}function NE(i,e,t,n){const r=D_(i,n);if(r!=null){const s=N_(r),a=s.path,c=s.queryId,u=$n(a,e),h=new Ro(A_(c),u,t);return O_(i,a,h)}else return[]}function FD(i,e,t,n){const r=D_(i,n);if(r){const s=N_(r),a=s.path,c=s.queryId,u=$n(a,e),h=zt.fromObject(t),d=new Ha(A_(c),u,h);return O_(i,a,d)}else return[]}function Dp(i,e,t,n=!1){const r=e._path;let s=null,a=!1;i.syncPointTree_.foreachOnPath(r,(_,g)=>{const E=$n(_,r);s=s||Rs(g,E),a=a||zs(g)});let c=i.syncPointTree_.get(r);c?(a=a||zs(c),s=s||Rs(c,St())):(c=new RE,i.syncPointTree_=i.syncPointTree_.set(r,c));let u;s!=null?u=!0:(u=!1,s=Ye.EMPTY_NODE,i.syncPointTree_.subtree(r).foreachChild((g,E)=>{const x=Rs(E,St());x&&(s=s.updateImmediateChild(g,x))}));const h=DE(c,e);if(!h&&!e._queryParams.loadsAllData()){const _=Bh(e);Me(!i.queryToTagMap.has(_),"View does not exist, but we have a tag");const g=HD();i.queryToTagMap.set(_,g),i.tagToQueryMap.set(g,_)}const d=Oh(i.pendingWriteTree_,r);let p=CD(c,e,t,d,s,u);if(!h&&!a&&!n){const _=LE(c,e);p=p.concat(GD(i,e,_))}return p}function Fh(i,e,t){const r=i.pendingWriteTree_,s=i.syncPointTree_.findOnPath(e,(a,c)=>{const u=$n(a,e),h=Rs(c,u);if(h)return h});return ME(r,e,s,t,!0)}function BD(i,e){const t=e._path;let n=null;i.syncPointTree_.foreachOnPath(t,(h,d)=>{const p=$n(h,t);n=n||Rs(d,p)});let r=i.syncPointTree_.get(t);r?n=n||Rs(r,St()):(r=new RE,i.syncPointTree_=i.syncPointTree_.set(t,r));const s=n!=null,a=s?new ks(n,!0,!1):null,c=Oh(i.pendingWriteTree_,e._path),u=PE(r,e,c,s?a.getNode():Ye.EMPTY_NODE,s);return ED(u)}function sl(i,e){return OE(e,i.syncPointTree_,null,Oh(i.pendingWriteTree_,St()))}function OE(i,e,t,n){if(ht(i.path))return UE(i,e,t,n);{const r=e.get(St());t==null&&r!=null&&(t=Rs(r,St()));let s=[];const a=ut(i.path),c=i.operationForChild(a),u=e.children.get(a);if(u&&c){const h=t?t.getImmediateChild(a):null,d=TE(n,a);s=s.concat(OE(c,u,h,d))}return r&&(s=s.concat(I_(r,i,n,t))),s}}function UE(i,e,t,n){const r=e.get(St());t==null&&r!=null&&(t=Rs(r,St()));let s=[];return e.children.inorderTraversal((a,c)=>{const u=t?t.getImmediateChild(a):null,h=TE(n,a),d=i.operationForChild(a);d&&(s=s.concat(UE(d,c,u,h)))}),r&&(s=s.concat(I_(r,i,n,t))),s}function FE(i,e){const t=e.query,n=oc(i,t);return{hashFn:()=>(yD(e)||Ye.EMPTY_NODE).hash(),onComplete:r=>{if(r==="ok")return n?UD(i,t._path,n):OD(i,t._path);{const s=DI(r,t);return dh(i,t,null,s)}}}}function oc(i,e){const t=Bh(e);return i.queryToTagMap.get(t)}function Bh(i){return i._path.toString()+"$"+i._queryIdentifier}function D_(i,e){return i.tagToQueryMap.get(e)}function N_(i){const e=i.indexOf("$");return Me(e!==-1&&e<i.length-1,"Bad queryKey."),{queryId:i.substr(e+1),path:new Ct(i.substr(0,e))}}function O_(i,e,t){const n=i.syncPointTree_.get(e);Me(n,"Missing sync point for query tag that we're tracking");const r=Oh(i.pendingWriteTree_,e);return I_(n,t,r,null)}function kD(i){return i.fold((e,t,n)=>{if(t&&zs(t))return[Uh(t)];{let r=[];return t&&(r=IE(t)),wn(n,(s,a)=>{r=r.concat(a)}),r}})}function ql(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new(ID())(i._repo,i._path):i}function zD(i,e){for(let t=0;t<e.length;++t){const n=e[t];if(!n._queryParams.loadsAllData()){const r=Bh(n),s=i.queryToTagMap.get(r);i.queryToTagMap.delete(r),i.tagToQueryMap.delete(s)}}}function HD(){return LD++}function GD(i,e,t){const n=e._path,r=oc(i,e),s=FE(i,t),a=i.listenProvider_.startListening(ql(e),r,s.hashFn,s.onComplete),c=i.syncPointTree_.subtree(n);if(r)Me(!zs(c.value),"If we're adding a query, it shouldn't be shadowed");else{const u=c.fold((h,d,p)=>{if(!ht(h)&&d&&zs(d))return[Uh(d).query];{let _=[];return d&&(_=_.concat(IE(d).map(g=>g.query))),wn(p,(g,E)=>{_=_.concat(E)}),_}});for(let h=0;h<u.length;++h){const d=u[h];i.listenProvider_.stopListening(ql(d),oc(i,d))}}return a}/**
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
 */class U_{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new U_(t)}node(){return this.node_}}class F_{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=qt(this.path_,e);return new F_(this.syncTree_,t)}node(){return Fh(this.syncTree_,this.path_)}}const WD=function(i){return i=i||{},i.timestamp=i.timestamp||new Date().getTime(),i},b0=function(i,e,t){if(!i||typeof i!="object")return i;if(Me(".sv"in i,"Unexpected leaf node or priority contents"),typeof i[".sv"]=="string")return VD(i[".sv"],e,t);if(typeof i[".sv"]=="object")return XD(i[".sv"],e);Me(!1,"Unexpected server value: "+JSON.stringify(i,null,2))},VD=function(i,e,t){switch(i){case"timestamp":return t.timestamp;default:Me(!1,"Unexpected server value: "+i)}},XD=function(i,e,t){i.hasOwnProperty("increment")||Me(!1,"Unexpected server value: "+JSON.stringify(i,null,2));const n=i.increment;typeof n!="number"&&Me(!1,"Unexpected increment value: "+n);const r=e.node();if(Me(r!==null&&typeof r<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!r.isLeafNode())return n;const a=r.getValue();return typeof a!="number"?n:a+n},BE=function(i,e,t,n){return k_(e,new F_(t,i),n)},B_=function(i,e,t){return k_(i,new U_(e),t)};function k_(i,e,t){const n=i.getPriority().val(),r=b0(n,e.getImmediateChild(".priority"),t);let s;if(i.isLeafNode()){const a=i,c=b0(a.getValue(),e,t);return c!==a.getValue()||r!==a.getPriority().val()?new yn(c,Zt(r)):i}else{const a=i;return s=a,r!==a.getPriority().val()&&(s=s.updatePriority(new yn(r))),a.forEachChild(Ht,(c,u)=>{const h=k_(u,e.getImmediateChild(c),t);h!==u&&(s=s.updateImmediateChild(c,h))}),s}}/**
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
 */class z_{constructor(e="",t=null,n={children:{},childCount:0}){this.name=e,this.parent=t,this.node=n}}function kh(i,e){let t=e instanceof Ct?e:new Ct(e),n=i,r=ut(t);for(;r!==null;){const s=Ao(n.node.children,r)||{children:{},childCount:0};n=new z_(r,n,s),t=Ft(t),r=ut(t)}return n}function zo(i){return i.node.value}function H_(i,e){i.node.value=e,Np(i)}function kE(i){return i.node.childCount>0}function qD(i){return zo(i)===void 0&&!kE(i)}function zh(i,e){wn(i.node.children,(t,n)=>{e(new z_(t,i,n))})}function zE(i,e,t,n){t&&!n&&e(i),zh(i,r=>{zE(r,e,!0,n)}),t&&n&&e(i)}function YD(i,e,t){let n=t?i:i.parent;for(;n!==null;){if(e(n))return!0;n=n.parent}return!1}function Mc(i){return new Ct(i.parent===null?i.name:Mc(i.parent)+"/"+i.name)}function Np(i){i.parent!==null&&$D(i.parent,i.name,i)}function $D(i,e,t){const n=qD(t),r=bi(i.node.children,e);n&&r?(delete i.node.children[e],i.node.childCount--,Np(i)):!n&&!r&&(i.node.children[e]=t.node,i.node.childCount++,Np(i))}/**
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
 */const KD=/[\[\].#$\/\u0000-\u001F\u007F]/,jD=/[\[\].#$\u0000-\u001F\u007F]/,Td=10*1024*1024,Hh=function(i){return typeof i=="string"&&i.length!==0&&!KD.test(i)},HE=function(i){return typeof i=="string"&&i.length!==0&&!jD.test(i)},ZD=function(i){return i&&(i=i.replace(/^\/*\.info(\/|$)/,"/")),HE(i)},ac=function(i){return i===null||typeof i=="string"||typeof i=="number"&&!Ph(i)||i&&typeof i=="object"&&bi(i,".sv")},Cr=function(i,e,t,n){n&&e===void 0||Tc(ii(i,"value"),e,t)},Tc=function(i,e,t){const n=t instanceof Ct?new dL(t,i):t;if(e===void 0)throw new Error(i+"contains undefined "+uo(n));if(typeof e=="function")throw new Error(i+"contains a function "+uo(n)+" with contents = "+e.toString());if(Ph(e))throw new Error(i+"contains "+e.toString()+" "+uo(n));if(typeof e=="string"&&e.length>Td/3&&Ah(e)>Td)throw new Error(i+"contains a string greater than "+Td+" utf8 bytes "+uo(n)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let r=!1,s=!1;if(wn(e,(a,c)=>{if(a===".value")r=!0;else if(a!==".priority"&&a!==".sv"&&(s=!0,!Hh(a)))throw new Error(i+" contains an invalid key ("+a+") "+uo(n)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);pL(n,a),Tc(i,c,n),_L(n)}),r&&s)throw new Error(i+' contains ".value" child '+uo(n)+" in addition to actual children.")}},QD=function(i,e){let t,n;for(t=0;t<e.length;t++){n=e[t];const s=tc(n);for(let a=0;a<s.length;a++)if(!(s[a]===".priority"&&a===s.length-1)){if(!Hh(s[a]))throw new Error(i+"contains an invalid key ("+s[a]+") in path "+n.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(fL);let r=null;for(t=0;t<e.length;t++){if(n=e[t],r!==null&&qi(r,n))throw new Error(i+"contains a path "+r.toString()+" that is ancestor of another path "+n.toString());r=n}},GE=function(i,e,t,n){if(n&&e===void 0)return;const r=ii(i,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(r+" must be an object containing the children to replace.");const s=[];wn(e,(a,c)=>{const u=new Ct(a);if(Tc(r,c,qt(t,u)),v_(u)===".priority"&&!ac(c))throw new Error(r+"contains an invalid value for '"+u.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");s.push(u)}),QD(r,s)},G_=function(i,e,t){if(!(t&&e===void 0)){if(Ph(e))throw new Error(ii(i,"priority")+"is "+e.toString()+", but must be a valid Firebase priority (a string, finite number, server value, or null).");if(!ac(e))throw new Error(ii(i,"priority")+"must be a valid Firebase priority (a string, finite number, server value, or null).")}},wc=function(i,e,t,n){if(!(n&&t===void 0)&&!Hh(t))throw new Error(ii(i,e)+'was an invalid key = "'+t+`".  Firebase keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]").`)},lc=function(i,e,t,n){if(!(n&&t===void 0)&&!HE(t))throw new Error(ii(i,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},JD=function(i,e,t,n){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),lc(i,e,t,n)},Yi=function(i,e){if(ut(e)===".info")throw new Error(i+" failed = Can't modify data under /.info/")},WE=function(i,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Hh(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!ZD(t))throw new Error(ii(i,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class eN{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Gh(i,e){let t=null;for(let n=0;n<e.length;n++){const r=e[n],s=r.getPath();t!==null&&!x_(s,t.path)&&(i.eventLists_.push(t),t=null),t===null&&(t={events:[],path:s}),t.events.push(r)}t&&i.eventLists_.push(t)}function VE(i,e,t){Gh(i,t),XE(i,n=>x_(n,e))}function Ai(i,e,t){Gh(i,t),XE(i,n=>qi(n,e)||qi(e,n))}function XE(i,e){i.recursionDepth_++;let t=!0;for(let n=0;n<i.eventLists_.length;n++){const r=i.eventLists_[n];if(r){const s=r.path;e(s)?(tN(i.eventLists_[n]),i.eventLists_[n]=null):t=!1}}t&&(i.eventLists_=[]),i.recursionDepth_--}function tN(i){for(let e=0;e<i.events.length;e++){const t=i.events[e];if(t!==null){i.events[e]=null;const n=t.getEventRunner();yo&&Mn("event: "+t.toString()),il(n)}}}/**
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
 */const qE="repo_interrupt",nN=25;class iN{constructor(e,t,n,r){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=n,this.appCheckProvider_=r,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new eN,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=sh(),this.transactionQueueTree_=new z_,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function rN(i,e,t){if(i.stats_=m_(i.repoInfo_),i.forceRestClient_||FI())i.server_=new rh(i.repoInfo_,(n,r,s,a)=>{A0(i,n,r,s,a)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>C0(i,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{dn(t)}catch(n){throw new Error("Invalid authOverride provided: "+n)}}i.persistentConnection_=new ts(i.repoInfo_,e,(n,r,s,a)=>{A0(i,n,r,s,a)},n=>{C0(i,n)},n=>{sN(i,n)},i.authTokenProvider_,i.appCheckProvider_,t),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(n=>{i.server_.refreshAuthToken(n)}),i.appCheckProvider_.addTokenChangeListener(n=>{i.server_.refreshAppCheckToken(n.token)}),i.statsReporter_=GI(i.repoInfo_,()=>new WL(i.stats_,i.server_)),i.infoData_=new BL,i.infoSyncTree_=new w0({startListening:(n,r,s,a)=>{let c=[];const u=i.infoData_.getNode(n._path);return u.isEmpty()||(c=Sc(i.infoSyncTree_,n._path,u),setTimeout(()=>{a("ok")},0)),c},stopListening:()=>{}}),W_(i,"connected",!1),i.serverSyncTree_=new w0({startListening:(n,r,s,a)=>(i.server_.listen(n,s,r,(c,u)=>{const h=a(c,u);Ai(i.eventQueue_,n._path,h)}),[]),stopListening:(n,r)=>{i.server_.unlisten(n,r)}})}function YE(i){const t=i.infoData_.getNode(new Ct(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function bc(i){return WD({timestamp:YE(i)})}function A0(i,e,t,n,r){i.dataUpdateCount++;const s=new Ct(e);t=i.interceptServerDataCallback_?i.interceptServerDataCallback_(e,t):t;let a=[];if(r)if(n){const u=Ju(t,h=>Zt(h));a=FD(i.serverSyncTree_,s,u,r)}else{const u=Zt(t);a=NE(i.serverSyncTree_,s,u,r)}else if(n){const u=Ju(t,h=>Zt(h));a=ND(i.serverSyncTree_,s,u)}else{const u=Zt(t);a=Sc(i.serverSyncTree_,s,u)}let c=s;a.length>0&&(c=Wa(i,s)),Ai(i.eventQueue_,c,a)}function C0(i,e){W_(i,"connected",e),e===!1&&lN(i)}function sN(i,e){wn(e,(t,n)=>{W_(i,t,n)})}function W_(i,e,t){const n=new Ct("/.info/"+e),r=Zt(t);i.infoData_.updateSnapshot(n,r);const s=Sc(i.infoSyncTree_,n,r);Ai(i.eventQueue_,n,s)}function Wh(i){return i.nextWriteId_++}function oN(i,e,t){const n=BD(i.serverSyncTree_,e);return n!=null?Promise.resolve(n):i.server_.get(e).then(r=>{const s=Zt(r).withIndex(e._queryParams.getIndex());Dp(i.serverSyncTree_,e,t,!0);let a;if(e._queryParams.loadsAllData())a=Sc(i.serverSyncTree_,e._path,s);else{const c=oc(i.serverSyncTree_,e);a=NE(i.serverSyncTree_,e._path,s,c)}return Ai(i.eventQueue_,e._path,a),dh(i.serverSyncTree_,e,t,null,!0),s},r=>(ol(i,"get for query "+dn(e)+" failed: "+r),Promise.reject(new Error(r))))}function V_(i,e,t,n,r){ol(i,"set",{path:e.toString(),value:t,priority:n});const s=bc(i),a=Zt(t,n),c=Fh(i.serverSyncTree_,e),u=B_(a,c,s),h=Wh(i),d=L_(i.serverSyncTree_,e,u,h,!0);Gh(i.eventQueue_,d),i.server_.put(e.toString(),a.val(!0),(_,g)=>{const E=_==="ok";E||Bn("set at "+e+" failed: "+_);const x=Ss(i.serverSyncTree_,h,!E);Ai(i.eventQueue_,e,x),Hs(i,r,_,g)});const p=q_(i,e);Wa(i,p),Ai(i.eventQueue_,p,[])}function aN(i,e,t,n){ol(i,"update",{path:e.toString(),value:t});let r=!0;const s=bc(i),a={};if(wn(t,(c,u)=>{r=!1,a[c]=BE(qt(e,c),Zt(u),i.serverSyncTree_,s)}),r)Mn("update() called with empty data.  Don't do anything."),Hs(i,n,"ok",void 0);else{const c=Wh(i),u=DD(i.serverSyncTree_,e,a,c);Gh(i.eventQueue_,u),i.server_.merge(e.toString(),t,(h,d)=>{const p=h==="ok";p||Bn("update at "+e+" failed: "+h);const _=Ss(i.serverSyncTree_,c,!p),g=_.length>0?Wa(i,e):e;Ai(i.eventQueue_,g,_),Hs(i,n,h,d)}),wn(t,h=>{const d=q_(i,qt(e,h));Wa(i,d)}),Ai(i.eventQueue_,e,[])}}function lN(i){ol(i,"onDisconnectEvents");const e=bc(i),t=sh();Ap(i.onDisconnect_,St(),(r,s)=>{const a=BE(r,s,i.serverSyncTree_,e);rl(t,r,a)});let n=[];Ap(t,St(),(r,s)=>{n=n.concat(Sc(i.serverSyncTree_,r,s));const a=q_(i,r);Wa(i,a)}),i.onDisconnect_=sh(),Ai(i.eventQueue_,St(),n)}function cN(i,e,t){i.server_.onDisconnectCancel(e.toString(),(n,r)=>{n==="ok"&&bp(i.onDisconnect_,e),Hs(i,t,n,r)})}function R0(i,e,t,n){const r=Zt(t);i.server_.onDisconnectPut(e.toString(),r.val(!0),(s,a)=>{s==="ok"&&rl(i.onDisconnect_,e,r),Hs(i,n,s,a)})}function uN(i,e,t,n,r){const s=Zt(t,n);i.server_.onDisconnectPut(e.toString(),s.val(!0),(a,c)=>{a==="ok"&&rl(i.onDisconnect_,e,s),Hs(i,r,a,c)})}function hN(i,e,t,n){if(_p(t)){Mn("onDisconnect().update() called with empty data.  Don't do anything."),Hs(i,n,"ok",void 0);return}i.server_.onDisconnectMerge(e.toString(),t,(r,s)=>{r==="ok"&&wn(t,(a,c)=>{const u=Zt(c);rl(i.onDisconnect_,qt(e,a),u)}),Hs(i,n,r,s)})}function fN(i,e,t){let n;ut(e._path)===".info"?n=Dp(i.infoSyncTree_,e,t):n=Dp(i.serverSyncTree_,e,t),VE(i.eventQueue_,e._path,n)}function Op(i,e,t){let n;ut(e._path)===".info"?n=dh(i.infoSyncTree_,e,t):n=dh(i.serverSyncTree_,e,t),VE(i.eventQueue_,e._path,n)}function $E(i){i.persistentConnection_&&i.persistentConnection_.interrupt(qE)}function dN(i){i.persistentConnection_&&i.persistentConnection_.resume(qE)}function ol(i,...e){let t="";i.persistentConnection_&&(t=i.persistentConnection_.id+":"),Mn(t,...e)}function Hs(i,e,t,n){e&&il(()=>{if(t==="ok")e(null);else{const r=(t||"error").toUpperCase();let s=r;n&&(s+=": "+n);const a=new Error(s);a.code=r,e(a)}})}function pN(i,e,t,n,r,s){ol(i,"transaction on "+e);const a={path:e,update:t,onComplete:n,status:null,order:Wy(),applyLocally:s,retryCount:0,unwatcher:r,abortReason:null,currentWriteId:null,currentInputSnapshot:null,currentOutputSnapshotRaw:null,currentOutputSnapshotResolved:null},c=X_(i,e,void 0);a.currentInputSnapshot=c;const u=a.update(c.val());if(u===void 0)a.unwatcher(),a.currentOutputSnapshotRaw=null,a.currentOutputSnapshotResolved=null,a.onComplete&&a.onComplete(null,!1,a.currentInputSnapshot);else{Tc("transaction failed: Data returned ",u,a.path),a.status=0;const h=kh(i.transactionQueueTree_,e),d=zo(h)||[];d.push(a),H_(h,d);let p;typeof u=="object"&&u!==null&&bi(u,".priority")?(p=Ao(u,".priority"),Me(ac(p),"Invalid priority returned by transaction. Priority must be a valid string, finite number, server value, or null.")):p=(Fh(i.serverSyncTree_,e)||Ye.EMPTY_NODE).getPriority().val();const _=bc(i),g=Zt(u,p),E=B_(g,c,_);a.currentOutputSnapshotRaw=g,a.currentOutputSnapshotResolved=E,a.currentWriteId=Wh(i);const x=L_(i.serverSyncTree_,e,E,a.currentWriteId,a.applyLocally);Ai(i.eventQueue_,e,x),Vh(i,i.transactionQueueTree_)}}function X_(i,e,t){return Fh(i.serverSyncTree_,e,t)||Ye.EMPTY_NODE}function Vh(i,e=i.transactionQueueTree_){if(e||Xh(i,e),zo(e)){const t=jE(i,e);Me(t.length>0,"Sending zero length transaction queue"),t.every(r=>r.status===0)&&_N(i,Mc(e),t)}else kE(e)&&zh(e,t=>{Vh(i,t)})}function _N(i,e,t){const n=t.map(h=>h.currentWriteId),r=X_(i,e,n);let s=r;const a=r.hash();for(let h=0;h<t.length;h++){const d=t[h];Me(d.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),d.status=1,d.retryCount++;const p=$n(e,d.path);s=s.updateChild(p,d.currentOutputSnapshotRaw)}const c=s.val(!0),u=e;i.server_.put(u.toString(),c,h=>{ol(i,"transaction put response",{path:u.toString(),status:h});let d=[];if(h==="ok"){const p=[];for(let _=0;_<t.length;_++)t[_].status=2,d=d.concat(Ss(i.serverSyncTree_,t[_].currentWriteId)),t[_].onComplete&&p.push(()=>t[_].onComplete(null,!0,t[_].currentOutputSnapshotResolved)),t[_].unwatcher();Xh(i,kh(i.transactionQueueTree_,e)),Vh(i,i.transactionQueueTree_),Ai(i.eventQueue_,e,d);for(let _=0;_<p.length;_++)il(p[_])}else{if(h==="datastale")for(let p=0;p<t.length;p++)t[p].status===3?t[p].status=4:t[p].status=0;else{Bn("transaction at "+u.toString()+" failed: "+h);for(let p=0;p<t.length;p++)t[p].status=4,t[p].abortReason=h}Wa(i,e)}},a)}function Wa(i,e){const t=KE(i,e),n=Mc(t),r=jE(i,t);return mN(i,r,n),n}function mN(i,e,t){if(e.length===0)return;const n=[];let r=[];const a=e.filter(c=>c.status===0).map(c=>c.currentWriteId);for(let c=0;c<e.length;c++){const u=e[c],h=$n(t,u.path);let d=!1,p;if(Me(h!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),u.status===4)d=!0,p=u.abortReason,r=r.concat(Ss(i.serverSyncTree_,u.currentWriteId,!0));else if(u.status===0)if(u.retryCount>=nN)d=!0,p="maxretry",r=r.concat(Ss(i.serverSyncTree_,u.currentWriteId,!0));else{const _=X_(i,u.path,a);u.currentInputSnapshot=_;const g=e[c].update(_.val());if(g!==void 0){Tc("transaction failed: Data returned ",g,u.path);let E=Zt(g);typeof g=="object"&&g!=null&&bi(g,".priority")||(E=E.updatePriority(_.getPriority()));const y=u.currentWriteId,m=bc(i),w=B_(E,_,m);u.currentOutputSnapshotRaw=E,u.currentOutputSnapshotResolved=w,u.currentWriteId=Wh(i),a.splice(a.indexOf(y),1),r=r.concat(L_(i.serverSyncTree_,u.path,w,u.currentWriteId,u.applyLocally)),r=r.concat(Ss(i.serverSyncTree_,y,!0))}else d=!0,p="nodata",r=r.concat(Ss(i.serverSyncTree_,u.currentWriteId,!0))}Ai(i.eventQueue_,t,r),r=[],d&&(e[c].status=2,function(_){setTimeout(_,Math.floor(0))}(e[c].unwatcher),e[c].onComplete&&(p==="nodata"?n.push(()=>e[c].onComplete(null,!1,e[c].currentInputSnapshot)):n.push(()=>e[c].onComplete(new Error(p),!1,null))))}Xh(i,i.transactionQueueTree_);for(let c=0;c<n.length;c++)il(n[c]);Vh(i,i.transactionQueueTree_)}function KE(i,e){let t,n=i.transactionQueueTree_;for(t=ut(e);t!==null&&zo(n)===void 0;)n=kh(n,t),e=Ft(e),t=ut(e);return n}function jE(i,e){const t=[];return ZE(i,e,t),t.sort((n,r)=>n.order-r.order),t}function ZE(i,e,t){const n=zo(e);if(n)for(let r=0;r<n.length;r++)t.push(n[r]);zh(e,r=>{ZE(i,r,t)})}function Xh(i,e){const t=zo(e);if(t){let n=0;for(let r=0;r<t.length;r++)t[r].status!==2&&(t[n]=t[r],n++);t.length=n,H_(e,t.length>0?t:void 0)}zh(e,n=>{Xh(i,n)})}function q_(i,e){const t=Mc(KE(i,e)),n=kh(i.transactionQueueTree_,e);return YD(n,r=>{wd(i,r)}),wd(i,n),zE(n,r=>{wd(i,r)}),t}function wd(i,e){const t=zo(e);if(t){const n=[];let r=[],s=-1;for(let a=0;a<t.length;a++)t[a].status===3||(t[a].status===1?(Me(s===a-1,"All SENT items should be at beginning of queue."),s=a,t[a].status=3,t[a].abortReason="set"):(Me(t[a].status===0,"Unexpected transaction status in abort"),t[a].unwatcher(),r=r.concat(Ss(i.serverSyncTree_,t[a].currentWriteId,!0)),t[a].onComplete&&n.push(t[a].onComplete.bind(null,new Error("set"),!1,null))));s===-1?H_(e,void 0):t.length=s+1,Ai(i.eventQueue_,Mc(e),r);for(let a=0;a<n.length;a++)il(n[a])}}/**
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
 */function gN(i){let e="";const t=i.split("/");for(let n=0;n<t.length;n++)if(t[n].length>0){let r=t[n];try{r=decodeURIComponent(r.replace(/\+/g," "))}catch{}e+="/"+r}return e}function vN(i){const e={};i.charAt(0)==="?"&&(i=i.substring(1));for(const t of i.split("&")){if(t.length===0)continue;const n=t.split("=");n.length===2?e[decodeURIComponent(n[0])]=decodeURIComponent(n[1]):Bn(`Invalid query segment '${t}' in query '${i}'`)}return e}const Up=function(i,e){const t=xN(i),n=t.namespace;t.domain==="firebase.com"&&Ar(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!n||n==="undefined")&&t.domain!=="localhost"&&Ar("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||CI();const r=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new iE(t.host,t.secure,n,r,e,"",n!==t.subdomain),path:new Ct(t.pathString)}},xN=function(i){let e="",t="",n="",r="",s="",a=!0,c="https",u=443;if(typeof i=="string"){let h=i.indexOf("//");h>=0&&(c=i.substring(0,h-1),i=i.substring(h+2));let d=i.indexOf("/");d===-1&&(d=i.length);let p=i.indexOf("?");p===-1&&(p=i.length),e=i.substring(0,Math.min(d,p)),d<p&&(r=gN(i.substring(d,p)));const _=vN(i.substring(Math.min(i.length,p)));h=e.indexOf(":"),h>=0?(a=c==="https"||c==="wss",u=parseInt(e.substring(h+1),10)):h=e.length;const g=e.slice(0,h);if(g.toLowerCase()==="localhost")t="localhost";else if(g.split(".").length<=2)t=g;else{const E=e.indexOf(".");n=e.substring(0,E).toLowerCase(),t=e.substring(E+1),s=n}"ns"in _&&(s=_.ns)}return{host:e,port:u,domain:t,subdomain:n,secure:a,scheme:c,pathString:r,namespace:s}};/**
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
 */const P0="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",yN=function(){let i=0;const e=[];return function(t){const n=t===i;i=t;let r;const s=new Array(8);for(r=7;r>=0;r--)s[r]=P0.charAt(t%64),t=Math.floor(t/64);Me(t===0,"Cannot push at time == 0");let a=s.join("");if(n){for(r=11;r>=0&&e[r]===63;r--)e[r]=0;e[r]++}else for(r=0;r<12;r++)e[r]=Math.floor(Math.random()*64);for(r=0;r<12;r++)a+=P0.charAt(e[r]);return Me(a.length===20,"nextPushId: Length should be 20."),a}}();/**
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
 */class QE{constructor(e,t,n,r){this.eventType=e,this.eventRegistration=t,this.snapshot=n,this.prevName=r}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+dn(this.snapshot.exportVal())}}class JE{constructor(e,t,n){this.eventRegistration=e,this.error=t,this.path=n}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Y_{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return Me(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */let EN=class{constructor(e,t){this._repo=e,this._path=t}cancel(){const e=new ei;return cN(this._repo,this._path,e.wrapCallback(()=>{})),e.promise}remove(){Yi("OnDisconnect.remove",this._path);const e=new ei;return R0(this._repo,this._path,null,e.wrapCallback(()=>{})),e.promise}set(e){Yi("OnDisconnect.set",this._path),Cr("OnDisconnect.set",e,this._path,!1);const t=new ei;return R0(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}setWithPriority(e,t){Yi("OnDisconnect.setWithPriority",this._path),Cr("OnDisconnect.setWithPriority",e,this._path,!1),G_("OnDisconnect.setWithPriority",t,!1);const n=new ei;return uN(this._repo,this._path,e,t,n.wrapCallback(()=>{})),n.promise}update(e){Yi("OnDisconnect.update",this._path),GE("OnDisconnect.update",e,this._path,!1);const t=new ei;return hN(this._repo,this._path,e,t.wrapCallback(()=>{})),t.promise}};/**
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
 */class ci{constructor(e,t,n,r){this._repo=e,this._path=t,this._queryParams=n,this._orderByCalled=r}get key(){return ht(this._path)?null:v_(this._path)}get ref(){return new Qi(this._repo,this._path)}get _queryIdentifier(){const e=_0(this._queryParams),t=p_(e);return t==="{}"?"default":t}get _queryObject(){return _0(this._queryParams)}isEqual(e){if(e=Ri(e),!(e instanceof ci))return!1;const t=this._repo===e._repo,n=x_(this._path,e._path),r=this._queryIdentifier===e._queryIdentifier;return t&&n&&r}toJSON(){return this.toString()}toString(){return this._repo.toString()+hL(this._path)}}function qh(i,e){if(i._orderByCalled===!0)throw new Error(e+": You can't combine multiple orderBy calls.")}function Xs(i){let e=null,t=null;if(i.hasStart()&&(e=i.getIndexStartValue()),i.hasEnd()&&(t=i.getIndexEndValue()),i.getIndex()===Tr){const n="Query: When ordering by key, you may only pass one argument to startAt(), endAt(), or equalTo().",r="Query: When ordering by key, the argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() must be a string.";if(i.hasStart()){if(i.getIndexStartName()!==Fs)throw new Error(n);if(typeof e!="string")throw new Error(r)}if(i.hasEnd()){if(i.getIndexEndName()!==is)throw new Error(n);if(typeof t!="string")throw new Error(r)}}else if(i.getIndex()===Ht){if(e!=null&&!ac(e)||t!=null&&!ac(t))throw new Error("Query: When ordering by priority, the first argument passed to startAt(), startAfter() endAt(), endBefore(), or equalTo() must be a valid priority value (null, a number, or a string).")}else if(Me(i.getIndex()instanceof S_||i.getIndex()===M_,"unknown index type."),e!=null&&typeof e=="object"||t!=null&&typeof t=="object")throw new Error("Query: First argument passed to startAt(), startAfter(), endAt(), endBefore(), or equalTo() cannot be an object.")}function Yh(i){if(i.hasStart()&&i.hasEnd()&&i.hasLimit()&&!i.hasAnchoredLimit())throw new Error("Query: Can't combine startAt(), startAfter(), endAt(), endBefore(), and limit(). Use limitToFirst() or limitToLast() instead.")}class Qi extends ci{constructor(e,t){super(e,t,new Lh,!1)}get parent(){const e=fE(this._path);return e===null?null:new Qi(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}let $h=class Fp{constructor(e,t,n){this._node=e,this.ref=t,this._index=n}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new Ct(e),n=Io(this.ref,e);return new Fp(this._node.getChild(t),n,Ht)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(n,r)=>e(new Fp(r,Io(this.ref,n),Ht)))}hasChild(e){const t=new Ct(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function eS(i,e){return i=Ri(i),i._checkNotDeleted("ref"),e!==void 0?Io(i._root,e):i._root}function I0(i,e){i=Ri(i),i._checkNotDeleted("refFromURL");const t=Up(e,i._repo.repoInfo_.nodeAdmin);WE("refFromURL",t);const n=t.repoInfo;return!i._repo.repoInfo_.isCustomHost()&&n.host!==i._repo.repoInfo_.host&&Ar("refFromURL: Host name does not match the current database: (found "+n.host+" but expected "+i._repo.repoInfo_.host+")"),eS(i,t.path.toString())}function Io(i,e){return i=Ri(i),ut(i._path)===null?JD("child","path",e,!1):lc("child","path",e,!1),new Qi(i._repo,qt(i._path,e))}function SN(i,e){i=Ri(i),Yi("push",i._path),Cr("push",e,i._path,!0);const t=YE(i._repo),n=yN(t),r=Io(i,n),s=Io(i,n);let a;return e!=null?a=$_(s,e).then(()=>s):a=Promise.resolve(s),r.then=a.then.bind(a),r.catch=a.then.bind(a,void 0),r}function MN(i){return Yi("remove",i._path),$_(i,null)}function $_(i,e){i=Ri(i),Yi("set",i._path),Cr("set",e,i._path,!1);const t=new ei;return V_(i._repo,i._path,e,null,t.wrapCallback(()=>{})),t.promise}function TN(i,e){i=Ri(i),Yi("setPriority",i._path),G_("setPriority",e,!1);const t=new ei;return V_(i._repo,qt(i._path,".priority"),e,null,t.wrapCallback(()=>{})),t.promise}function wN(i,e,t){if(Yi("setWithPriority",i._path),Cr("setWithPriority",e,i._path,!1),G_("setWithPriority",t,!1),i.key===".length"||i.key===".keys")throw"setWithPriority failed: "+i.key+" is a read-only object.";const n=new ei;return V_(i._repo,i._path,e,t,n.wrapCallback(()=>{})),n.promise}function bN(i,e){GE("update",e,i._path,!1);const t=new ei;return aN(i._repo,i._path,e,t.wrapCallback(()=>{})),t.promise}function AN(i){i=Ri(i);const e=new Y_(()=>{}),t=new Ac(e);return oN(i._repo,i,t).then(n=>new $h(n,new Qi(i._repo,i._path),i._queryParams.getIndex()))}class Ac{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const n=t._queryParams.getIndex();return new QE("value",this,new $h(e.snapshotNode,new Qi(t._repo,t._path),n))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new JE(this,e,t):null}matches(e){return e instanceof Ac?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class Kh{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new JE(this,e,t):null}createEvent(e,t){Me(e.childName!=null,"Child events should have a childName.");const n=Io(new Qi(t._repo,t._path),e.childName),r=t._queryParams.getIndex();return new QE(e.type,this,new $h(e.snapshotNode,n,r),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof Kh?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Cc(i,e,t,n,r){let s;if(typeof n=="object"&&(s=void 0,r=n),typeof n=="function"&&(s=n),r&&r.onlyOnce){const u=t,h=(d,p)=>{Op(i._repo,i,c),u(d,p)};h.userCallback=t.userCallback,h.context=t.context,t=h}const a=new Y_(t,s||void 0),c=e==="value"?new Ac(a):new Kh(e,a);return fN(i._repo,i,c),()=>Op(i._repo,i,c)}function Bp(i,e,t,n){return Cc(i,"value",e,t,n)}function L0(i,e,t,n){return Cc(i,"child_added",e,t,n)}function D0(i,e,t,n){return Cc(i,"child_changed",e,t,n)}function N0(i,e,t,n){return Cc(i,"child_moved",e,t,n)}function O0(i,e,t,n){return Cc(i,"child_removed",e,t,n)}function U0(i,e,t){let n=null;const r=t?new Y_(t):null;e==="value"?n=new Ac(r):e&&(n=new Kh(e,r)),Op(i._repo,i,n)}class _r{}class tS extends _r{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Cr("endAt",this._value,e._path,!0);const t=wp(e._queryParams,this._value,this._key);if(Yh(t),Xs(t),e._queryParams.hasEnd())throw new Error("endAt: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ci(e._repo,e._path,t,e._orderByCalled)}}function CN(i,e){return wc("endAt","key",e,!0),new tS(i,e)}class RN extends _r{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Cr("endBefore",this._value,e._path,!1);const t=FL(e._queryParams,this._value,this._key);if(Yh(t),Xs(t),e._queryParams.hasEnd())throw new Error("endBefore: Starting point was already set (by another call to endAt, endBefore or equalTo).");return new ci(e._repo,e._path,t,e._orderByCalled)}}function PN(i,e){return wc("endBefore","key",e,!0),new RN(i,e)}class nS extends _r{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Cr("startAt",this._value,e._path,!0);const t=Tp(e._queryParams,this._value,this._key);if(Yh(t),Xs(t),e._queryParams.hasStart())throw new Error("startAt: Starting point was already set (by another call to startAt, startBefore or equalTo).");return new ci(e._repo,e._path,t,e._orderByCalled)}}function IN(i=null,e){return wc("startAt","key",e,!0),new nS(i,e)}class LN extends _r{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){Cr("startAfter",this._value,e._path,!1);const t=UL(e._queryParams,this._value,this._key);if(Yh(t),Xs(t),e._queryParams.hasStart())throw new Error("startAfter: Starting point was already set (by another call to startAt, startAfter, or equalTo).");return new ci(e._repo,e._path,t,e._orderByCalled)}}function DN(i,e){return wc("startAfter","key",e,!0),new LN(i,e)}class NN extends _r{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToFirst: Limit was already set (by another call to limitToFirst or limitToLast).");return new ci(e._repo,e._path,NL(e._queryParams,this._limit),e._orderByCalled)}}function ON(i){if(typeof i!="number"||Math.floor(i)!==i||i<=0)throw new Error("limitToFirst: First argument must be a positive integer.");return new NN(i)}class UN extends _r{constructor(e){super(),this._limit=e}_apply(e){if(e._queryParams.hasLimit())throw new Error("limitToLast: Limit was already set (by another call to limitToFirst or limitToLast).");return new ci(e._repo,e._path,OL(e._queryParams,this._limit),e._orderByCalled)}}function FN(i){if(typeof i!="number"||Math.floor(i)!==i||i<=0)throw new Error("limitToLast: First argument must be a positive integer.");return new UN(i)}class BN extends _r{constructor(e){super(),this._path=e}_apply(e){qh(e,"orderByChild");const t=new Ct(this._path);if(ht(t))throw new Error("orderByChild: cannot pass in empty path. Use orderByValue() instead.");const n=new S_(t),r=Dh(e._queryParams,n);return Xs(r),new ci(e._repo,e._path,r,!0)}}function kN(i){if(i==="$key")throw new Error('orderByChild: "$key" is invalid.  Use orderByKey() instead.');if(i==="$priority")throw new Error('orderByChild: "$priority" is invalid.  Use orderByPriority() instead.');if(i==="$value")throw new Error('orderByChild: "$value" is invalid.  Use orderByValue() instead.');return lc("orderByChild","path",i,!1),new BN(i)}class zN extends _r{_apply(e){qh(e,"orderByKey");const t=Dh(e._queryParams,Tr);return Xs(t),new ci(e._repo,e._path,t,!0)}}function HN(){return new zN}class GN extends _r{_apply(e){qh(e,"orderByPriority");const t=Dh(e._queryParams,Ht);return Xs(t),new ci(e._repo,e._path,t,!0)}}function WN(){return new GN}class VN extends _r{_apply(e){qh(e,"orderByValue");const t=Dh(e._queryParams,M_);return Xs(t),new ci(e._repo,e._path,t,!0)}}function XN(){return new VN}class qN extends _r{constructor(e,t){super(),this._value=e,this._key=t}_apply(e){if(Cr("equalTo",this._value,e._path,!1),e._queryParams.hasStart())throw new Error("equalTo: Starting point was already set (by another call to startAt/startAfter or equalTo).");if(e._queryParams.hasEnd())throw new Error("equalTo: Ending point was already set (by another call to endAt/endBefore or equalTo).");return new tS(this._value,this._key)._apply(new nS(this._value,this._key)._apply(e))}}function YN(i,e){return wc("equalTo","key",e,!0),new qN(i,e)}function rr(i,...e){let t=Ri(i);for(const n of e)t=n._apply(t);return t}wD(Qi);PD(Qi);/**
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
 */const $N="FIREBASE_DATABASE_EMULATOR_HOST",kp={};let KN=!1;function jN(i,e,t,n){i.repoInfo_=new iE(`${e}:${t}`,!1,i.repoInfo_.namespace,i.repoInfo_.webSocketOnly,i.repoInfo_.nodeAdmin,i.repoInfo_.persistenceKey,i.repoInfo_.includeNamespaceInQueryParams,!0),n&&(i.authTokenProvider_=n)}function iS(i,e,t,n,r){let s=n||i.options.databaseURL;s===void 0&&(i.options.projectId||Ar("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Mn("Using default host for project ",i.options.projectId),s=`${i.options.projectId}-default-rtdb.firebaseio.com`);let a=Up(s,r),c=a.repoInfo,u,h;typeof process<"u"&&process.env&&(h=process.env[$N]),h?(u=!0,s=`http://${h}?ns=${c.namespace}`,a=Up(s,r),c=a.repoInfo):u=!a.repoInfo.secure;const d=r&&u?new Ia(Ia.OWNER):new kI(i.name,i.options,e);WE("Invalid Firebase Database URL",a),ht(a.path)||Ar("Database URL must point to the root of a Firebase Database (not including a child path).");const p=QN(c,i,d,new BI(i.name,t));return new JN(p,i)}function ZN(i,e){const t=kp[e];(!t||t[i.key]!==i)&&Ar(`Database ${e}(${i.repoInfo_}) has already been deleted.`),$E(i),delete t[i.key]}function QN(i,e,t,n){let r=kp[e.name];r||(r={},kp[e.name]=r);let s=r[i.toURLString()];return s&&Ar("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new iN(i,KN,t,n),r[i.toURLString()]=s,s}let JN=class{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(rN(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Qi(this._repo,St())),this._rootInternal}_delete(){return this._rootInternal!==null&&(ZN(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Ar("Cannot call "+e+" on a deleted database.")}};function rS(){ka.IS_TRANSPORT_INITIALIZED&&Bn("Transport has already been initialized. Please call this function before calling ref or setting up a listener")}function e2(){rS(),Es.forceDisallow()}function t2(){rS(),Xi.forceDisallow(),Es.forceAllow()}function n2(i,e,t,n={}){i=Ri(i),i._checkNotDeleted("useEmulator"),i._instanceStarted&&Ar("Cannot call useEmulator() after instance has already been initialized.");const r=i._repoInternal;let s;if(r.repoInfo_.nodeAdmin)n.mockUserToken&&Ar('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new Ia(Ia.OWNER);else if(n.mockUserToken){const a=typeof n.mockUserToken=="string"?n.mockUserToken:qR(n.mockUserToken,i.app.options.projectId);s=new Ia(a)}jN(r,e,t,s)}function i2(i){i=Ri(i),i._checkNotDeleted("goOffline"),$E(i._repo)}function r2(i){i=Ri(i),i._checkNotDeleted("goOnline"),dN(i._repo)}function s2(i,e){Xy(i,e)}/**
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
 */function o2(i){Hy(f_),Ba(new Ns("database",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return iS(n,r,s,t)},"PUBLIC").setMultipleInstances(!0)),As(Qv,Jv,i),As(Qv,Jv,"esm2017")}/**
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
 */const a2={".sv":"timestamp"};function l2(){return a2}function c2(i){return{".sv":{increment:i}}}/**
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
 */let u2=class{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return{committed:this.committed,snapshot:this.snapshot.toJSON()}}};function h2(i,e,t){var n;if(i=Ri(i),Yi("Reference.transaction",i._path),i.key===".length"||i.key===".keys")throw"Reference.transaction failed: "+i.key+" is a read-only object.";const r=(n=t==null?void 0:t.applyLocally)!==null&&n!==void 0?n:!0,s=new ei,a=(u,h,d)=>{let p=null;u?s.reject(u):(p=new $h(d,new Qi(i._repo,i._path),Ht),s.resolve(new u2(h,p)))},c=Bp(i,()=>{});return pN(i._repo,i._path,e,a,c,r),s.promise}ts.prototype.simpleListen=function(i,e){this.sendRequest("q",{p:i},e)};ts.prototype.echo=function(i,e){this.sendRequest("echo",{d:i},e)};o2();const f2="@firebase/database-compat",d2="0.3.4";/**
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
 */const p2=new Ch("@firebase/database-compat"),sS=function(i){const e="FIREBASE WARNING: "+i;p2.warn(e)};/**
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
 */const _2=function(i,e,t,n){if(!(n&&t===void 0)&&typeof t!="boolean")throw new Error(ii(i,e)+"must be a boolean.")},m2=function(i,e,t){if(!(t&&e===void 0))switch(e){case"value":case"child_added":case"child_removed":case"child_changed":case"child_moved":break;default:throw new Error(ii(i,"eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}};/**
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
 */class g2{constructor(e){this._delegate=e}cancel(e){$e("OnDisconnect.cancel",0,1,arguments.length),En("OnDisconnect.cancel","onComplete",e,!0);const t=this._delegate.cancel();return e&&t.then(()=>e(null),n=>e(n)),t}remove(e){$e("OnDisconnect.remove",0,1,arguments.length),En("OnDisconnect.remove","onComplete",e,!0);const t=this._delegate.remove();return e&&t.then(()=>e(null),n=>e(n)),t}set(e,t){$e("OnDisconnect.set",1,2,arguments.length),En("OnDisconnect.set","onComplete",t,!0);const n=this._delegate.set(e);return t&&n.then(()=>t(null),r=>t(r)),n}setWithPriority(e,t,n){$e("OnDisconnect.setWithPriority",2,3,arguments.length),En("OnDisconnect.setWithPriority","onComplete",n,!0);const r=this._delegate.setWithPriority(e,t);return n&&r.then(()=>n(null),s=>n(s)),r}update(e,t){if($e("OnDisconnect.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,sS("Passing an Array to firebase.database.onDisconnect().update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}En("OnDisconnect.update","onComplete",t,!0);const n=this._delegate.update(e);return t&&n.then(()=>t(null),r=>t(r)),n}}/**
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
 */class v2{constructor(e,t){this.committed=e,this.snapshot=t}toJSON(){return $e("TransactionResult.toJSON",0,1,arguments.length),{committed:this.committed,snapshot:this.snapshot.toJSON()}}}/**
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
 */class Ps{constructor(e,t){this._database=e,this._delegate=t}val(){return $e("DataSnapshot.val",0,0,arguments.length),this._delegate.val()}exportVal(){return $e("DataSnapshot.exportVal",0,0,arguments.length),this._delegate.exportVal()}toJSON(){return $e("DataSnapshot.toJSON",0,1,arguments.length),this._delegate.toJSON()}exists(){return $e("DataSnapshot.exists",0,0,arguments.length),this._delegate.exists()}child(e){return $e("DataSnapshot.child",0,1,arguments.length),e=String(e),lc("DataSnapshot.child","path",e,!1),new Ps(this._database,this._delegate.child(e))}hasChild(e){return $e("DataSnapshot.hasChild",1,1,arguments.length),lc("DataSnapshot.hasChild","path",e,!1),this._delegate.hasChild(e)}getPriority(){return $e("DataSnapshot.getPriority",0,0,arguments.length),this._delegate.priority}forEach(e){return $e("DataSnapshot.forEach",1,1,arguments.length),En("DataSnapshot.forEach","action",e,!1),this._delegate.forEach(t=>e(new Ps(this._database,t)))}hasChildren(){return $e("DataSnapshot.hasChildren",0,0,arguments.length),this._delegate.hasChildren()}get key(){return this._delegate.key}numChildren(){return $e("DataSnapshot.numChildren",0,0,arguments.length),this._delegate.size}getRef(){return $e("DataSnapshot.ref",0,0,arguments.length),new Ei(this._database,this._delegate.ref)}get ref(){return this.getRef()}}class Pn{constructor(e,t){this.database=e,this._delegate=t}on(e,t,n,r){var s;$e("Query.on",2,4,arguments.length),En("Query.on","callback",t,!1);const a=Pn.getCancelAndContextArgs_("Query.on",n,r),c=(h,d)=>{t.call(a.context,new Ps(this.database,h),d)};c.userCallback=t,c.context=a.context;const u=(s=a.cancel)===null||s===void 0?void 0:s.bind(a.context);switch(e){case"value":return Bp(this._delegate,c,u),t;case"child_added":return L0(this._delegate,c,u),t;case"child_removed":return O0(this._delegate,c,u),t;case"child_changed":return D0(this._delegate,c,u),t;case"child_moved":return N0(this._delegate,c,u),t;default:throw new Error(ii("Query.on","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}}off(e,t,n){if($e("Query.off",0,3,arguments.length),m2("Query.off",e,!0),En("Query.off","callback",t,!0),Gv("Query.off","context",n,!0),t){const r=()=>{};r.userCallback=t,r.context=n,U0(this._delegate,e,r)}else U0(this._delegate,e)}get(){return AN(this._delegate).then(e=>new Ps(this.database,e))}once(e,t,n,r){$e("Query.once",1,4,arguments.length),En("Query.once","callback",t,!0);const s=Pn.getCancelAndContextArgs_("Query.once",n,r),a=new ei,c=(h,d)=>{const p=new Ps(this.database,h);t&&t.call(s.context,p,d),a.resolve(p)};c.userCallback=t,c.context=s.context;const u=h=>{s.cancel&&s.cancel.call(s.context,h),a.reject(h)};switch(e){case"value":Bp(this._delegate,c,u,{onlyOnce:!0});break;case"child_added":L0(this._delegate,c,u,{onlyOnce:!0});break;case"child_removed":O0(this._delegate,c,u,{onlyOnce:!0});break;case"child_changed":D0(this._delegate,c,u,{onlyOnce:!0});break;case"child_moved":N0(this._delegate,c,u,{onlyOnce:!0});break;default:throw new Error(ii("Query.once","eventType")+'must be a valid event type = "value", "child_added", "child_removed", "child_changed", or "child_moved".')}return a.promise}limitToFirst(e){return $e("Query.limitToFirst",1,1,arguments.length),new Pn(this.database,rr(this._delegate,ON(e)))}limitToLast(e){return $e("Query.limitToLast",1,1,arguments.length),new Pn(this.database,rr(this._delegate,FN(e)))}orderByChild(e){return $e("Query.orderByChild",1,1,arguments.length),new Pn(this.database,rr(this._delegate,kN(e)))}orderByKey(){return $e("Query.orderByKey",0,0,arguments.length),new Pn(this.database,rr(this._delegate,HN()))}orderByPriority(){return $e("Query.orderByPriority",0,0,arguments.length),new Pn(this.database,rr(this._delegate,WN()))}orderByValue(){return $e("Query.orderByValue",0,0,arguments.length),new Pn(this.database,rr(this._delegate,XN()))}startAt(e=null,t){return $e("Query.startAt",0,2,arguments.length),new Pn(this.database,rr(this._delegate,IN(e,t)))}startAfter(e=null,t){return $e("Query.startAfter",0,2,arguments.length),new Pn(this.database,rr(this._delegate,DN(e,t)))}endAt(e=null,t){return $e("Query.endAt",0,2,arguments.length),new Pn(this.database,rr(this._delegate,CN(e,t)))}endBefore(e=null,t){return $e("Query.endBefore",0,2,arguments.length),new Pn(this.database,rr(this._delegate,PN(e,t)))}equalTo(e,t){return $e("Query.equalTo",1,2,arguments.length),new Pn(this.database,rr(this._delegate,YN(e,t)))}toString(){return $e("Query.toString",0,0,arguments.length),this._delegate.toString()}toJSON(){return $e("Query.toJSON",0,1,arguments.length),this._delegate.toJSON()}isEqual(e){if($e("Query.isEqual",1,1,arguments.length),!(e instanceof Pn)){const t="Query.isEqual failed: First argument must be an instance of firebase.database.Query.";throw new Error(t)}return this._delegate.isEqual(e._delegate)}static getCancelAndContextArgs_(e,t,n){const r={cancel:void 0,context:void 0};if(t&&n)r.cancel=t,En(e,"cancel",r.cancel,!0),r.context=n,Gv(e,"context",r.context,!0);else if(t)if(typeof t=="object"&&t!==null)r.context=t;else if(typeof t=="function")r.cancel=t;else throw new Error(ii(e,"cancelOrContext")+" must either be a cancel callback or a context object.");return r}get ref(){return new Ei(this.database,new Qi(this._delegate._repo,this._delegate._path))}}class Ei extends Pn{constructor(e,t){super(e,new ci(t._repo,t._path,new Lh,!1)),this.database=e,this._delegate=t}getKey(){return $e("Reference.key",0,0,arguments.length),this._delegate.key}child(e){return $e("Reference.child",1,1,arguments.length),typeof e=="number"&&(e=String(e)),new Ei(this.database,Io(this._delegate,e))}getParent(){$e("Reference.parent",0,0,arguments.length);const e=this._delegate.parent;return e?new Ei(this.database,e):null}getRoot(){return $e("Reference.root",0,0,arguments.length),new Ei(this.database,this._delegate.root)}set(e,t){$e("Reference.set",1,2,arguments.length),En("Reference.set","onComplete",t,!0);const n=$_(this._delegate,e);return t&&n.then(()=>t(null),r=>t(r)),n}update(e,t){if($e("Reference.update",1,2,arguments.length),Array.isArray(e)){const r={};for(let s=0;s<e.length;++s)r[""+s]=e[s];e=r,sS("Passing an Array to Firebase.update() is deprecated. Use set() if you want to overwrite the existing data, or an Object with integer keys if you really do want to only update some of the children.")}Yi("Reference.update",this._delegate._path),En("Reference.update","onComplete",t,!0);const n=bN(this._delegate,e);return t&&n.then(()=>t(null),r=>t(r)),n}setWithPriority(e,t,n){$e("Reference.setWithPriority",2,3,arguments.length),En("Reference.setWithPriority","onComplete",n,!0);const r=wN(this._delegate,e,t);return n&&r.then(()=>n(null),s=>n(s)),r}remove(e){$e("Reference.remove",0,1,arguments.length),En("Reference.remove","onComplete",e,!0);const t=MN(this._delegate);return e&&t.then(()=>e(null),n=>e(n)),t}transaction(e,t,n){$e("Reference.transaction",1,3,arguments.length),En("Reference.transaction","transactionUpdate",e,!1),En("Reference.transaction","onComplete",t,!0),_2("Reference.transaction","applyLocally",n,!0);const r=h2(this._delegate,e,{applyLocally:n}).then(s=>new v2(s.committed,new Ps(this.database,s.snapshot)));return t&&r.then(s=>t(null,s.committed,s.snapshot),s=>t(s,!1,null)),r}setPriority(e,t){$e("Reference.setPriority",1,2,arguments.length),En("Reference.setPriority","onComplete",t,!0);const n=TN(this._delegate,e);return t&&n.then(()=>t(null),r=>t(r)),n}push(e,t){$e("Reference.push",0,2,arguments.length),En("Reference.push","onComplete",t,!0);const n=SN(this._delegate,e),r=n.then(a=>new Ei(this.database,a));t&&r.then(()=>t(null),a=>t(a));const s=new Ei(this.database,n);return s.then=r.then.bind(r),s.catch=r.catch.bind(r,void 0),s}onDisconnect(){return Yi("Reference.onDisconnect",this._delegate._path),new g2(new EN(this._delegate._repo,this._delegate._path))}get key(){return this.getKey()}get parent(){return this.getParent()}get root(){return this.getRoot()}}/**
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
 */class cc{constructor(e,t){this._delegate=e,this.app=t,this.INTERNAL={delete:()=>this._delegate._delete(),forceWebSockets:e2,forceLongPolling:t2}}useEmulator(e,t,n={}){n2(this._delegate,e,t,n)}ref(e){if($e("database.ref",0,1,arguments.length),e instanceof Ei){const t=I0(this._delegate,e.toString());return new Ei(this,t)}else{const t=eS(this._delegate,e);return new Ei(this,t)}}refFromURL(e){$e("database.refFromURL",1,1,arguments.length);const n=I0(this._delegate,e);return new Ei(this,n)}goOffline(){return $e("database.goOffline",0,0,arguments.length),i2(this._delegate)}goOnline(){return $e("database.goOnline",0,0,arguments.length),r2(this._delegate)}}cc.ServerValue={TIMESTAMP:l2(),increment:i=>c2(i)};/**
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
 */function x2({app:i,url:e,version:t,customAuthImpl:n,namespace:r,nodeAdmin:s=!1}){Hy(t);const a=new Ay("auth-internal",new Cy("database-standalone"));return a.setComponent(new Ns("auth-internal",()=>n,"PRIVATE")),{instance:new cc(iS(i,a,void 0,e,s),i),namespace:r}}var y2=Object.freeze({__proto__:null,initStandalone:x2});/**
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
 */const E2=cc.ServerValue;function S2(i){i.INTERNAL.registerComponent(new Ns("database-compat",(e,{instanceIdentifier:t})=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("database").getImmediate({identifier:t});return new cc(r,n)},"PUBLIC").setServiceProps({Reference:Ei,Query:Pn,Database:cc,DataSnapshot:Ps,enableLogging:s2,INTERNAL:y2,ServerValue:E2}).setMultipleInstances(!0)),i.registerVersion(f2,d2)}S2(Rh);const M2={apiKey:"AIzaSyDrUN_FEwAo-Wf2nKirc8AU0mMWOf0kJgM",authDomain:"portfolio-d5782.firebaseapp.com",databaseURL:"https://portfolio-d5782-default-rtdb.firebaseio.com",projectId:"portfolio-d5782",storageBucket:"portfolio-d5782.appspot.com",messagingSenderId:"1036193806181",appId:"1:1036193806181:web:f59d88c245355a7e17938c",measurementId:"G-Z2EDCNJ3KV"};Rh.initializeApp(M2);const Yu=document.getElementById("message-form"),T2=Rh.database();Yu.addEventListener("submit",i=>{i.preventDefault();const e=new FormData(Yu),t={name:e.get("name"),email:e.get("email"),message:e.get("message")};T2.ref("userInputs").push(t).then(()=>{Yu.reset(),w2()}).catch(n=>{console.error("Error storing user input:",n)})});function w2(){const i=document.createElement("div");i.textContent="Thank you for your submission!",i.classList.add("confirmation-message"),Yu.parentNode.appendChild(i),setTimeout(()=>{i.remove()},5e3)}/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const K_="152",oa={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},aa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},b2=0,F0=1,A2=2,oS=1,C2=2,Yr=3,Gs=0,ri=1,jr=2,Is=0,La=1,B0=2,k0=3,z0=4,R2=5,wa=100,P2=101,I2=102,H0=103,G0=104,L2=200,D2=201,N2=202,O2=203,aS=204,lS=205,U2=206,F2=207,B2=208,k2=209,z2=210,H2=0,G2=1,W2=2,zp=3,V2=4,X2=5,q2=6,Y2=7,j_=0,$2=1,K2=2,ns=0,j2=1,Z2=2,Q2=3,J2=4,eO=5,cS=300,Va=301,Xa=302,Hp=303,Gp=304,jh=306,Wp=1e3,ur=1001,Vp=1002,qn=1003,W0=1004,bd=1005,Wi=1006,tO=1007,uc=1008,Lo=1009,nO=1010,iO=1011,uS=1012,rO=1013,go=1014,vo=1015,hc=1016,sO=1017,oO=1018,Da=1020,aO=1021,hr=1023,lO=1024,cO=1025,Eo=1026,qa=1027,uO=1028,hO=1029,fO=1030,dO=1031,pO=1033,Ad=33776,Cd=33777,Rd=33778,Pd=33779,V0=35840,X0=35841,q0=35842,Y0=35843,_O=36196,$0=37492,K0=37496,j0=37808,Z0=37809,Q0=37810,J0=37811,ex=37812,tx=37813,nx=37814,ix=37815,rx=37816,sx=37817,ox=37818,ax=37819,lx=37820,cx=37821,Id=36492,mO=36283,ux=36284,hx=36285,fx=36286,hS=3e3,So=3001,gO=3200,vO=3201,Z_=0,xO=1,Mo="",rt="srgb",Rr="srgb-linear",fS="display-p3",Ld=7680,yO=519,dx=35044,px="300 es",Xp=1035;class Ho{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Dd=Math.PI/180,qp=180/Math.PI;function Rc(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(On[i&255]+On[i>>8&255]+On[i>>16&255]+On[i>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[t&63|128]+On[t>>8&255]+"-"+On[t>>16&255]+On[t>>24&255]+On[n&255]+On[n>>8&255]+On[n>>16&255]+On[n>>24&255]).toLowerCase()}function Yn(i,e,t){return Math.max(e,Math.min(t,i))}function EO(i,e){return(i%e+e)%e}function Nd(i,e,t){return(1-t)*i+t*e}function _x(i){return(i&i-1)===0&&i!==0}function SO(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Mu(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function gi(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class et{constructor(e=0,t=0){et.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class vt{constructor(){vt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,a,c,u,h){const d=this.elements;return d[0]=e,d[1]=r,d[2]=c,d[3]=t,d[4]=s,d[5]=u,d[6]=n,d[7]=a,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],c=n[3],u=n[6],h=n[1],d=n[4],p=n[7],_=n[2],g=n[5],E=n[8],x=r[0],y=r[3],m=r[6],w=r[1],T=r[4],C=r[7],b=r[2],I=r[5],O=r[8];return s[0]=a*x+c*w+u*b,s[3]=a*y+c*T+u*I,s[6]=a*m+c*C+u*O,s[1]=h*x+d*w+p*b,s[4]=h*y+d*T+p*I,s[7]=h*m+d*C+p*O,s[2]=_*x+g*w+E*b,s[5]=_*y+g*T+E*I,s[8]=_*m+g*C+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],d=e[8];return t*a*d-t*c*h-n*s*d+n*c*u+r*s*h-r*a*u}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],d=e[8],p=d*a-c*h,_=c*u-d*s,g=h*s-a*u,E=t*p+n*_+r*g;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/E;return e[0]=p*x,e[1]=(r*h-d*n)*x,e[2]=(c*n-r*a)*x,e[3]=_*x,e[4]=(d*t-r*u)*x,e[5]=(r*s-c*t)*x,e[6]=g*x,e[7]=(n*u-h*t)*x,e[8]=(a*t-n*s)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,c){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*a+h*c)+a+e,-r*h,r*u,-r*(-h*a+u*c)+c+t,0,0,1),this}scale(e,t){return this.premultiply(Od.makeScale(e,t)),this}rotate(e){return this.premultiply(Od.makeRotation(-e)),this}translate(e,t){return this.premultiply(Od.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Od=new vt;function dS(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ph(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}const mx={};function Yl(i){i in mx||(mx[i]=!0,console.warn(i))}function Na(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ud(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const MO=new vt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),TO=new vt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function wO(i){return i.convertSRGBToLinear().applyMatrix3(TO)}function bO(i){return i.applyMatrix3(MO).convertLinearToSRGB()}const AO={[Rr]:i=>i,[rt]:i=>i.convertSRGBToLinear(),[fS]:wO},CO={[Rr]:i=>i,[rt]:i=>i.convertLinearToSRGB(),[fS]:bO},sr={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return Rr},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=AO[e],r=CO[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let la;class pS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{la===void 0&&(la=ph("canvas")),la.width=e.width,la.height=e.height;const n=la.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=la}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ph("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Na(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Na(t[n]/255)*255):t[n]=Na(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class _S{constructor(e=null){this.isSource=!0,this.uuid=Rc(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,c=r.length;a<c;a++)r[a].isDataTexture?s.push(Fd(r[a].image)):s.push(Fd(r[a]))}else s=Fd(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Fd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?pS.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RO=0;class Mi extends Ho{constructor(e=Mi.DEFAULT_IMAGE,t=Mi.DEFAULT_MAPPING,n=ur,r=ur,s=Wi,a=uc,c=hr,u=Lo,h=Mi.DEFAULT_ANISOTROPY,d=Mo){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RO++}),this.uuid=Rc(),this.name="",this.source=new _S(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=h,this.format=c,this.internalFormat=null,this.type=u,this.offset=new et(0,0),this.repeat=new et(1,1),this.center=new et(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new vt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof d=="string"?this.colorSpace=d:(Yl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=d===So?rt:Mo),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wp:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case Vp:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wp:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case Vp:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Yl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===rt?So:hS}set encoding(e){Yl("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===So?rt:Mo}}Mi.DEFAULT_IMAGE=null;Mi.DEFAULT_MAPPING=cS;Mi.DEFAULT_ANISOTROPY=1;class Tn{constructor(e=0,t=0,n=0,r=1){Tn.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const u=e.elements,h=u[0],d=u[4],p=u[8],_=u[1],g=u[5],E=u[9],x=u[2],y=u[6],m=u[10];if(Math.abs(d-_)<.01&&Math.abs(p-x)<.01&&Math.abs(E-y)<.01){if(Math.abs(d+_)<.1&&Math.abs(p+x)<.1&&Math.abs(E+y)<.1&&Math.abs(h+g+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(h+1)/2,C=(g+1)/2,b=(m+1)/2,I=(d+_)/4,O=(p+x)/4,B=(E+y)/4;return T>C&&T>b?T<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(T),r=I/n,s=O/n):C>b?C<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(C),n=I/r,s=B/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=O/s,r=B/s),this.set(n,r,s,t),this}let w=Math.sqrt((y-E)*(y-E)+(p-x)*(p-x)+(_-d)*(_-d));return Math.abs(w)<.001&&(w=1),this.x=(y-E)/w,this.y=(p-x)/w,this.z=(_-d)/w,this.w=Math.acos((h+g+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Do extends Ho{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Tn(0,0,e,t),this.scissorTest=!1,this.viewport=new Tn(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(Yl("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===So?rt:Mo),this.texture=new Mi(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wi,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new _S(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mS extends Mi{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class PO extends Mi{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=qn,this.minFilter=qn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class No{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,c){let u=n[r+0],h=n[r+1],d=n[r+2],p=n[r+3];const _=s[a+0],g=s[a+1],E=s[a+2],x=s[a+3];if(c===0){e[t+0]=u,e[t+1]=h,e[t+2]=d,e[t+3]=p;return}if(c===1){e[t+0]=_,e[t+1]=g,e[t+2]=E,e[t+3]=x;return}if(p!==x||u!==_||h!==g||d!==E){let y=1-c;const m=u*_+h*g+d*E+p*x,w=m>=0?1:-1,T=1-m*m;if(T>Number.EPSILON){const b=Math.sqrt(T),I=Math.atan2(b,m*w);y=Math.sin(y*I)/b,c=Math.sin(c*I)/b}const C=c*w;if(u=u*y+_*C,h=h*y+g*C,d=d*y+E*C,p=p*y+x*C,y===1-c){const b=1/Math.sqrt(u*u+h*h+d*d+p*p);u*=b,h*=b,d*=b,p*=b}}e[t]=u,e[t+1]=h,e[t+2]=d,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const c=n[r],u=n[r+1],h=n[r+2],d=n[r+3],p=s[a],_=s[a+1],g=s[a+2],E=s[a+3];return e[t]=c*E+d*p+u*g-h*_,e[t+1]=u*E+d*_+h*p-c*g,e[t+2]=h*E+d*g+c*_-u*p,e[t+3]=d*E-c*p-u*_-h*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,c=Math.cos,u=Math.sin,h=c(n/2),d=c(r/2),p=c(s/2),_=u(n/2),g=u(r/2),E=u(s/2);switch(a){case"XYZ":this._x=_*d*p+h*g*E,this._y=h*g*p-_*d*E,this._z=h*d*E+_*g*p,this._w=h*d*p-_*g*E;break;case"YXZ":this._x=_*d*p+h*g*E,this._y=h*g*p-_*d*E,this._z=h*d*E-_*g*p,this._w=h*d*p+_*g*E;break;case"ZXY":this._x=_*d*p-h*g*E,this._y=h*g*p+_*d*E,this._z=h*d*E+_*g*p,this._w=h*d*p-_*g*E;break;case"ZYX":this._x=_*d*p-h*g*E,this._y=h*g*p+_*d*E,this._z=h*d*E-_*g*p,this._w=h*d*p+_*g*E;break;case"YZX":this._x=_*d*p+h*g*E,this._y=h*g*p+_*d*E,this._z=h*d*E-_*g*p,this._w=h*d*p-_*g*E;break;case"XZY":this._x=_*d*p-h*g*E,this._y=h*g*p-_*d*E,this._z=h*d*E+_*g*p,this._w=h*d*p+_*g*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],c=t[5],u=t[9],h=t[2],d=t[6],p=t[10],_=n+c+p;if(_>0){const g=.5/Math.sqrt(_+1);this._w=.25/g,this._x=(d-u)*g,this._y=(s-h)*g,this._z=(a-r)*g}else if(n>c&&n>p){const g=2*Math.sqrt(1+n-c-p);this._w=(d-u)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+h)/g}else if(c>p){const g=2*Math.sqrt(1+c-n-p);this._w=(s-h)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(u+d)/g}else{const g=2*Math.sqrt(1+p-n-c);this._w=(a-r)/g,this._x=(s+h)/g,this._y=(u+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Yn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,c=t._x,u=t._y,h=t._z,d=t._w;return this._x=n*d+a*c+r*h-s*u,this._y=r*d+a*u+s*c-n*h,this._z=s*d+a*h+n*u-r*c,this._w=a*d-n*c-r*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let c=a*e._w+n*e._x+r*e._y+s*e._z;if(c<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,c=-c):this.copy(e),c>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const u=1-c*c;if(u<=Number.EPSILON){const g=1-t;return this._w=g*a+t*this._w,this._x=g*n+t*this._x,this._y=g*r+t*this._y,this._z=g*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(u),d=Math.atan2(h,c),p=Math.sin((1-t)*d)/h,_=Math.sin(t*d)/h;return this._w=a*p+this._w*_,this._x=n*p+this._x*_,this._y=r*p+this._y*_,this._z=s*p+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Y{constructor(e=0,t=0,n=0){Y.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gx.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gx.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,c=e.z,u=e.w,h=u*t+a*r-c*n,d=u*n+c*t-s*r,p=u*r+s*n-a*t,_=-s*t-a*n-c*r;return this.x=h*u+_*-s+d*-c-p*-a,this.y=d*u+_*-a+p*-s-h*-c,this.z=p*u+_*-c+h*-a-d*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,c=t.y,u=t.z;return this.x=r*u-s*c,this.y=s*a-n*u,this.z=n*c-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Bd.copy(this).projectOnVector(e),this.sub(Bd)}reflect(e){return this.sub(Bd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Yn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bd=new Y,gx=new No;class Pc{constructor(e=new Y(1/0,1/0,1/0),t=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Gr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Gr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Gr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),ca.copy(e.boundingBox),ca.applyMatrix4(e.matrixWorld),this.union(ca);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,c=s.count;a<c;a++)Gr.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Gr)}else r.boundingBox===null&&r.computeBoundingBox(),ca.copy(r.boundingBox),ca.applyMatrix4(e.matrixWorld),this.union(ca)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Gr),Gr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Dl),Tu.subVectors(this.max,Dl),ua.subVectors(e.a,Dl),ha.subVectors(e.b,Dl),fa.subVectors(e.c,Dl),gs.subVectors(ha,ua),vs.subVectors(fa,ha),ro.subVectors(ua,fa);let t=[0,-gs.z,gs.y,0,-vs.z,vs.y,0,-ro.z,ro.y,gs.z,0,-gs.x,vs.z,0,-vs.x,ro.z,0,-ro.x,-gs.y,gs.x,0,-vs.y,vs.x,0,-ro.y,ro.x,0];return!kd(t,ua,ha,fa,Tu)||(t=[1,0,0,0,1,0,0,0,1],!kd(t,ua,ha,fa,Tu))?!1:(wu.crossVectors(gs,vs),t=[wu.x,wu.y,wu.z],kd(t,ua,ha,fa,Tu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Gr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Gr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Hr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Hr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Hr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Hr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Hr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Hr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Hr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Hr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Hr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Hr=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],Gr=new Y,ca=new Pc,ua=new Y,ha=new Y,fa=new Y,gs=new Y,vs=new Y,ro=new Y,Dl=new Y,Tu=new Y,wu=new Y,so=new Y;function kd(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){so.fromArray(i,s);const c=r.x*Math.abs(so.x)+r.y*Math.abs(so.y)+r.z*Math.abs(so.z),u=e.dot(so),h=t.dot(so),d=n.dot(so);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>c)return!1}return!0}const IO=new Pc,Nl=new Y,zd=new Y;class Q_{constructor(e=new Y,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):IO.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nl.subVectors(e,this.center);const t=Nl.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(Nl,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nl.copy(e.center).add(zd)),this.expandByPoint(Nl.copy(e.center).sub(zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wr=new Y,Hd=new Y,bu=new Y,xs=new Y,Gd=new Y,Au=new Y,Wd=new Y;class LO{constructor(e=new Y,t=new Y(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wr.copy(this.origin).addScaledVector(this.direction,t),Wr.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Hd.copy(e).add(t).multiplyScalar(.5),bu.copy(t).sub(e).normalize(),xs.copy(this.origin).sub(Hd);const s=e.distanceTo(t)*.5,a=-this.direction.dot(bu),c=xs.dot(this.direction),u=-xs.dot(bu),h=xs.lengthSq(),d=Math.abs(1-a*a);let p,_,g,E;if(d>0)if(p=a*u-c,_=a*c-u,E=s*d,p>=0)if(_>=-E)if(_<=E){const x=1/d;p*=x,_*=x,g=p*(p+a*_+2*c)+_*(a*p+_+2*u)+h}else _=s,p=Math.max(0,-(a*_+c)),g=-p*p+_*(_+2*u)+h;else _=-s,p=Math.max(0,-(a*_+c)),g=-p*p+_*(_+2*u)+h;else _<=-E?(p=Math.max(0,-(-a*s+c)),_=p>0?-s:Math.min(Math.max(-s,-u),s),g=-p*p+_*(_+2*u)+h):_<=E?(p=0,_=Math.min(Math.max(-s,-u),s),g=_*(_+2*u)+h):(p=Math.max(0,-(a*s+c)),_=p>0?s:Math.min(Math.max(-s,-u),s),g=-p*p+_*(_+2*u)+h);else _=a>0?-s:s,p=Math.max(0,-(a*_+c)),g=-p*p+_*(_+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(Hd).addScaledVector(bu,_),g}intersectSphere(e,t){Wr.subVectors(e.center,this.origin);const n=Wr.dot(this.direction),r=Wr.dot(Wr)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),c=n-a,u=n+a;return u<0?null:c<0?this.at(u,t):this.at(c,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,c,u;const h=1/this.direction.x,d=1/this.direction.y,p=1/this.direction.z,_=this.origin;return h>=0?(n=(e.min.x-_.x)*h,r=(e.max.x-_.x)*h):(n=(e.max.x-_.x)*h,r=(e.min.x-_.x)*h),d>=0?(s=(e.min.y-_.y)*d,a=(e.max.y-_.y)*d):(s=(e.max.y-_.y)*d,a=(e.min.y-_.y)*d),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(c=(e.min.z-_.z)*p,u=(e.max.z-_.z)*p):(c=(e.max.z-_.z)*p,u=(e.min.z-_.z)*p),n>u||c>r)||((c>n||n!==n)&&(n=c),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Wr)!==null}intersectTriangle(e,t,n,r,s){Gd.subVectors(t,e),Au.subVectors(n,e),Wd.crossVectors(Gd,Au);let a=this.direction.dot(Wd),c;if(a>0){if(r)return null;c=1}else if(a<0)c=-1,a=-a;else return null;xs.subVectors(this.origin,e);const u=c*this.direction.dot(Au.crossVectors(xs,Au));if(u<0)return null;const h=c*this.direction.dot(Gd.cross(xs));if(h<0||u+h>a)return null;const d=-c*xs.dot(Wd);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class pn{constructor(){pn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,a,c,u,h,d,p,_,g,E,x,y){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=c,m[13]=u,m[2]=h,m[6]=d,m[10]=p,m[14]=_,m[3]=g,m[7]=E,m[11]=x,m[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new pn().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/da.setFromMatrixColumn(e,0).length(),s=1/da.setFromMatrixColumn(e,1).length(),a=1/da.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),c=Math.sin(n),u=Math.cos(r),h=Math.sin(r),d=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const _=a*d,g=a*p,E=c*d,x=c*p;t[0]=u*d,t[4]=-u*p,t[8]=h,t[1]=g+E*h,t[5]=_-x*h,t[9]=-c*u,t[2]=x-_*h,t[6]=E+g*h,t[10]=a*u}else if(e.order==="YXZ"){const _=u*d,g=u*p,E=h*d,x=h*p;t[0]=_+x*c,t[4]=E*c-g,t[8]=a*h,t[1]=a*p,t[5]=a*d,t[9]=-c,t[2]=g*c-E,t[6]=x+_*c,t[10]=a*u}else if(e.order==="ZXY"){const _=u*d,g=u*p,E=h*d,x=h*p;t[0]=_-x*c,t[4]=-a*p,t[8]=E+g*c,t[1]=g+E*c,t[5]=a*d,t[9]=x-_*c,t[2]=-a*h,t[6]=c,t[10]=a*u}else if(e.order==="ZYX"){const _=a*d,g=a*p,E=c*d,x=c*p;t[0]=u*d,t[4]=E*h-g,t[8]=_*h+x,t[1]=u*p,t[5]=x*h+_,t[9]=g*h-E,t[2]=-h,t[6]=c*u,t[10]=a*u}else if(e.order==="YZX"){const _=a*u,g=a*h,E=c*u,x=c*h;t[0]=u*d,t[4]=x-_*p,t[8]=E*p+g,t[1]=p,t[5]=a*d,t[9]=-c*d,t[2]=-h*d,t[6]=g*p+E,t[10]=_-x*p}else if(e.order==="XZY"){const _=a*u,g=a*h,E=c*u,x=c*h;t[0]=u*d,t[4]=-p,t[8]=h*d,t[1]=_*p+x,t[5]=a*d,t[9]=g*p-E,t[2]=E*p-g,t[6]=c*d,t[10]=x*p+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DO,e,NO)}lookAt(e,t,n){const r=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),ys.crossVectors(n,vi),ys.lengthSq()===0&&(Math.abs(n.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),ys.crossVectors(n,vi)),ys.normalize(),Cu.crossVectors(vi,ys),r[0]=ys.x,r[4]=Cu.x,r[8]=vi.x,r[1]=ys.y,r[5]=Cu.y,r[9]=vi.y,r[2]=ys.z,r[6]=Cu.z,r[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],c=n[4],u=n[8],h=n[12],d=n[1],p=n[5],_=n[9],g=n[13],E=n[2],x=n[6],y=n[10],m=n[14],w=n[3],T=n[7],C=n[11],b=n[15],I=r[0],O=r[4],B=r[8],M=r[12],L=r[1],Q=r[5],te=r[9],W=r[13],$=r[2],j=r[6],le=r[10],J=r[14],ne=r[3],ge=r[7],he=r[11],Ie=r[15];return s[0]=a*I+c*L+u*$+h*ne,s[4]=a*O+c*Q+u*j+h*ge,s[8]=a*B+c*te+u*le+h*he,s[12]=a*M+c*W+u*J+h*Ie,s[1]=d*I+p*L+_*$+g*ne,s[5]=d*O+p*Q+_*j+g*ge,s[9]=d*B+p*te+_*le+g*he,s[13]=d*M+p*W+_*J+g*Ie,s[2]=E*I+x*L+y*$+m*ne,s[6]=E*O+x*Q+y*j+m*ge,s[10]=E*B+x*te+y*le+m*he,s[14]=E*M+x*W+y*J+m*Ie,s[3]=w*I+T*L+C*$+b*ne,s[7]=w*O+T*Q+C*j+b*ge,s[11]=w*B+T*te+C*le+b*he,s[15]=w*M+T*W+C*J+b*Ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],c=e[5],u=e[9],h=e[13],d=e[2],p=e[6],_=e[10],g=e[14],E=e[3],x=e[7],y=e[11],m=e[15];return E*(+s*u*p-r*h*p-s*c*_+n*h*_+r*c*g-n*u*g)+x*(+t*u*g-t*h*_+s*a*_-r*a*g+r*h*d-s*u*d)+y*(+t*h*p-t*c*g-s*a*p+n*a*g+s*c*d-n*h*d)+m*(-r*c*d-t*u*p+t*c*_+r*a*p-n*a*_+n*u*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],c=e[5],u=e[6],h=e[7],d=e[8],p=e[9],_=e[10],g=e[11],E=e[12],x=e[13],y=e[14],m=e[15],w=p*y*h-x*_*h+x*u*g-c*y*g-p*u*m+c*_*m,T=E*_*h-d*y*h-E*u*g+a*y*g+d*u*m-a*_*m,C=d*x*h-E*p*h+E*c*g-a*x*g-d*c*m+a*p*m,b=E*p*u-d*x*u-E*c*_+a*x*_+d*c*y-a*p*y,I=t*w+n*T+r*C+s*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=w*O,e[1]=(x*_*s-p*y*s-x*r*g+n*y*g+p*r*m-n*_*m)*O,e[2]=(c*y*s-x*u*s+x*r*h-n*y*h-c*r*m+n*u*m)*O,e[3]=(p*u*s-c*_*s-p*r*h+n*_*h+c*r*g-n*u*g)*O,e[4]=T*O,e[5]=(d*y*s-E*_*s+E*r*g-t*y*g-d*r*m+t*_*m)*O,e[6]=(E*u*s-a*y*s-E*r*h+t*y*h+a*r*m-t*u*m)*O,e[7]=(a*_*s-d*u*s+d*r*h-t*_*h-a*r*g+t*u*g)*O,e[8]=C*O,e[9]=(E*p*s-d*x*s-E*n*g+t*x*g+d*n*m-t*p*m)*O,e[10]=(a*x*s-E*c*s+E*n*h-t*x*h-a*n*m+t*c*m)*O,e[11]=(d*c*s-a*p*s-d*n*h+t*p*h+a*n*g-t*c*g)*O,e[12]=b*O,e[13]=(d*x*r-E*p*r+E*n*_-t*x*_-d*n*y+t*p*y)*O,e[14]=(E*c*r-a*x*r-E*n*u+t*x*u+a*n*y-t*c*y)*O,e[15]=(a*p*r-d*c*r+d*n*u-t*p*u-a*n*_+t*c*_)*O,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,c=e.y,u=e.z,h=s*a,d=s*c;return this.set(h*a+n,h*c-r*u,h*u+r*c,0,h*c+r*u,d*c+n,d*u-r*a,0,h*u-r*c,d*u+r*a,s*u*u+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,c=t._z,u=t._w,h=s+s,d=a+a,p=c+c,_=s*h,g=s*d,E=s*p,x=a*d,y=a*p,m=c*p,w=u*h,T=u*d,C=u*p,b=n.x,I=n.y,O=n.z;return r[0]=(1-(x+m))*b,r[1]=(g+C)*b,r[2]=(E-T)*b,r[3]=0,r[4]=(g-C)*I,r[5]=(1-(_+m))*I,r[6]=(y+w)*I,r[7]=0,r[8]=(E+T)*O,r[9]=(y-w)*O,r[10]=(1-(_+x))*O,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=da.set(r[0],r[1],r[2]).length();const a=da.set(r[4],r[5],r[6]).length(),c=da.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],or.copy(this);const h=1/s,d=1/a,p=1/c;return or.elements[0]*=h,or.elements[1]*=h,or.elements[2]*=h,or.elements[4]*=d,or.elements[5]*=d,or.elements[6]*=d,or.elements[8]*=p,or.elements[9]*=p,or.elements[10]*=p,t.setFromRotationMatrix(or),n.x=s,n.y=a,n.z=c,this}makePerspective(e,t,n,r,s,a){const c=this.elements,u=2*s/(t-e),h=2*s/(n-r),d=(t+e)/(t-e),p=(n+r)/(n-r),_=-(a+s)/(a-s),g=-2*a*s/(a-s);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,r,s,a){const c=this.elements,u=1/(t-e),h=1/(n-r),d=1/(a-s),p=(t+e)*u,_=(n+r)*h,g=(a+s)*d;return c[0]=2*u,c[4]=0,c[8]=0,c[12]=-p,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-_,c[2]=0,c[6]=0,c[10]=-2*d,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const da=new Y,or=new pn,DO=new Y(0,0,0),NO=new Y(1,1,1),ys=new Y,Cu=new Y,vi=new Y,vx=new pn,xx=new No;class Zh{constructor(e=0,t=0,n=0,r=Zh.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],c=r[8],u=r[1],h=r[5],d=r[9],p=r[2],_=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(Yn(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(_,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Yn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(Yn(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Yn(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(_,g),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Yn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(c,g));break;case"XZY":this._z=Math.asin(-Yn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(_,h),this._y=Math.atan2(c,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vx.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vx,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xx.setFromEuler(this),this.setFromQuaternion(xx,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zh.DEFAULT_ORDER="XYZ";class gS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OO=0;const yx=new Y,pa=new No,Vr=new pn,Ru=new Y,Ol=new Y,UO=new Y,FO=new No,Ex=new Y(1,0,0),Sx=new Y(0,1,0),Mx=new Y(0,0,1),BO={type:"added"},Tx={type:"removed"};class kn extends Ho{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OO++}),this.uuid=Rc(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kn.DEFAULT_UP.clone();const e=new Y,t=new Zh,n=new No,r=new Y(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pn},normalMatrix:{value:new vt}}),this.matrix=new pn,this.matrixWorld=new pn,this.matrixAutoUpdate=kn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new gS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return pa.setFromAxisAngle(e,t),this.quaternion.multiply(pa),this}rotateOnWorldAxis(e,t){return pa.setFromAxisAngle(e,t),this.quaternion.premultiply(pa),this}rotateX(e){return this.rotateOnAxis(Ex,e)}rotateY(e){return this.rotateOnAxis(Sx,e)}rotateZ(e){return this.rotateOnAxis(Mx,e)}translateOnAxis(e,t){return yx.copy(e).applyQuaternion(this.quaternion),this.position.add(yx.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ex,e)}translateY(e){return this.translateOnAxis(Sx,e)}translateZ(e){return this.translateOnAxis(Mx,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ru.copy(e):Ru.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ol.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vr.lookAt(Ol,Ru,this.up):Vr.lookAt(Ru,Ol,this.up),this.quaternion.setFromRotationMatrix(Vr),r&&(Vr.extractRotation(r.matrixWorld),pa.setFromRotationMatrix(Vr),this.quaternion.premultiply(pa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(BO)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Tx)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Tx)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Vr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vr),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,e,UO),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ol,FO,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const c=r[s];c.matrixWorldAutoUpdate===!0&&c.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(c,u){return c[u.uuid]===void 0&&(c[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){const u=c.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const p=u[h];s(e.shapes,p)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const c=[];for(let u=0,h=this.material.length;u<h;u++)c.push(s(e.materials,this.material[u]));r.material=c}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let c=0;c<this.children.length;c++)r.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let c=0;c<this.animations.length;c++){const u=this.animations[c];r.animations.push(s(e.animations,u))}}if(t){const c=a(e.geometries),u=a(e.materials),h=a(e.textures),d=a(e.images),p=a(e.shapes),_=a(e.skeletons),g=a(e.animations),E=a(e.nodes);c.length>0&&(n.geometries=c),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),p.length>0&&(n.shapes=p),_.length>0&&(n.skeletons=_),g.length>0&&(n.animations=g),E.length>0&&(n.nodes=E)}return n.object=r,n;function a(c){const u=[];for(const h in c){const d=c[h];delete d.metadata,u.push(d)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}kn.DEFAULT_UP=new Y(0,1,0);kn.DEFAULT_MATRIX_AUTO_UPDATE=!0;kn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ar=new Y,Xr=new Y,Vd=new Y,qr=new Y,_a=new Y,ma=new Y,wx=new Y,Xd=new Y,qd=new Y,Yd=new Y;let Pu=!1;class cr{constructor(e=new Y,t=new Y,n=new Y){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),ar.subVectors(e,t),r.cross(ar);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){ar.subVectors(r,t),Xr.subVectors(n,t),Vd.subVectors(e,t);const a=ar.dot(ar),c=ar.dot(Xr),u=ar.dot(Vd),h=Xr.dot(Xr),d=Xr.dot(Vd),p=a*h-c*c;if(p===0)return s.set(-2,-1,-1);const _=1/p,g=(h*u-c*d)*_,E=(a*d-c*u)*_;return s.set(1-g-E,E,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,qr),qr.x>=0&&qr.y>=0&&qr.x+qr.y<=1}static getUV(e,t,n,r,s,a,c,u){return Pu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pu=!0),this.getInterpolation(e,t,n,r,s,a,c,u)}static getInterpolation(e,t,n,r,s,a,c,u){return this.getBarycoord(e,t,n,r,qr),u.setScalar(0),u.addScaledVector(s,qr.x),u.addScaledVector(a,qr.y),u.addScaledVector(c,qr.z),u}static isFrontFacing(e,t,n,r){return ar.subVectors(n,t),Xr.subVectors(e,t),ar.cross(Xr).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ar.subVectors(this.c,this.b),Xr.subVectors(this.a,this.b),ar.cross(Xr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return cr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return cr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Pu===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Pu=!0),cr.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return cr.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return cr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return cr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,c;_a.subVectors(r,n),ma.subVectors(s,n),Xd.subVectors(e,n);const u=_a.dot(Xd),h=ma.dot(Xd);if(u<=0&&h<=0)return t.copy(n);qd.subVectors(e,r);const d=_a.dot(qd),p=ma.dot(qd);if(d>=0&&p<=d)return t.copy(r);const _=u*p-d*h;if(_<=0&&u>=0&&d<=0)return a=u/(u-d),t.copy(n).addScaledVector(_a,a);Yd.subVectors(e,s);const g=_a.dot(Yd),E=ma.dot(Yd);if(E>=0&&g<=E)return t.copy(s);const x=g*h-u*E;if(x<=0&&h>=0&&E<=0)return c=h/(h-E),t.copy(n).addScaledVector(ma,c);const y=d*E-g*p;if(y<=0&&p-d>=0&&g-E>=0)return wx.subVectors(s,r),c=(p-d)/(p-d+(g-E)),t.copy(r).addScaledVector(wx,c);const m=1/(y+x+_);return a=x*m,c=_*m,t.copy(n).addScaledVector(_a,a).addScaledVector(ma,c)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let kO=0;class al extends Ho{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kO++}),this.uuid=Rc(),this.name="",this.type="Material",this.blending=La,this.side=Gs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=aS,this.blendDst=lS,this.blendEquation=wa,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=zp,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yO,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ld,this.stencilZFail=Ld,this.stencilZPass=Ld,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==La&&(n.blending=this.blending),this.side!==Gs&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const c in s){const u=s[c];delete u.metadata,a.push(u)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const vS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Iu={h:0,s:0,l:0};function $d(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class At{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=rt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,sr.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=sr.workingColorSpace){return this.r=e,this.g=t,this.b=n,sr.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=sr.workingColorSpace){if(e=EO(e,1),t=Yn(t,0,1),n=Yn(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=$d(a,s,e+1/3),this.g=$d(a,s,e),this.b=$d(a,s,e-1/3)}return sr.toWorkingColorSpace(this,r),this}setStyle(e,t=rt){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],c=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(c))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=rt){const n=vS[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Na(e.r),this.g=Na(e.g),this.b=Na(e.b),this}copyLinearToSRGB(e){return this.r=Ud(e.r),this.g=Ud(e.g),this.b=Ud(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=rt){return sr.fromWorkingColorSpace(Un.copy(this),e),Math.round(Yn(Un.r*255,0,255))*65536+Math.round(Yn(Un.g*255,0,255))*256+Math.round(Yn(Un.b*255,0,255))}getHexString(e=rt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=sr.workingColorSpace){sr.fromWorkingColorSpace(Un.copy(this),t);const n=Un.r,r=Un.g,s=Un.b,a=Math.max(n,r,s),c=Math.min(n,r,s);let u,h;const d=(c+a)/2;if(c===a)u=0,h=0;else{const p=a-c;switch(h=d<=.5?p/(a+c):p/(2-a-c),a){case n:u=(r-s)/p+(r<s?6:0);break;case r:u=(s-n)/p+2;break;case s:u=(n-r)/p+4;break}u/=6}return e.h=u,e.s=h,e.l=d,e}getRGB(e,t=sr.workingColorSpace){return sr.fromWorkingColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=rt){sr.fromWorkingColorSpace(Un.copy(this),e);const t=Un.r,n=Un.g,r=Un.b;return e!==rt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(lr),lr.h+=e,lr.s+=t,lr.l+=n,this.setHSL(lr.h,lr.s,lr.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(Iu);const n=Nd(lr.h,Iu.h,t),r=Nd(lr.s,Iu.s,t),s=Nd(lr.l,Iu.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new At;At.NAMES=vS;class xS extends al{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=j_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ln=new Y,Lu=new et;class wr{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=dx,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Lu.fromBufferAttribute(this,t),Lu.applyMatrix3(e),this.setXY(t,Lu.x,Lu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mu(t,this.array)),t}setX(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mu(t,this.array)),t}setY(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mu(t,this.array)),t}setZ(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mu(t,this.array)),t}setW(e,t){return this.normalized&&(t=gi(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=gi(t,this.array),n=gi(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=gi(t,this.array),n=gi(n,this.array),r=gi(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=gi(t,this.array),n=gi(n,this.array),r=gi(r,this.array),s=gi(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==dx&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class yS extends wr{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ES extends wr{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ti extends wr{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zO=0;const zi=new pn,Kd=new kn,ga=new Y,xi=new Pc,Ul=new Pc,xn=new Y;class os extends Ho{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zO++}),this.uuid=Rc(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(dS(e)?ES:yS)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new vt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zi.makeRotationFromQuaternion(e),this.applyMatrix4(zi),this}rotateX(e){return zi.makeRotationX(e),this.applyMatrix4(zi),this}rotateY(e){return zi.makeRotationY(e),this.applyMatrix4(zi),this}rotateZ(e){return zi.makeRotationZ(e),this.applyMatrix4(zi),this}translate(e,t,n){return zi.makeTranslation(e,t,n),this.applyMatrix4(zi),this}scale(e,t,n){return zi.makeScale(e,t,n),this.applyMatrix4(zi),this}lookAt(e){return Kd.lookAt(e),Kd.updateMatrix(),this.applyMatrix4(Kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ga).negate(),this.translate(ga.x,ga.y,ga.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ti(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];xi.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,xi.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,xi.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(xi.min),this.boundingBox.expandByPoint(xi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Q_);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new Y,1/0);return}if(e){const n=this.boundingSphere.center;if(xi.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const c=t[s];Ul.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(xi.min,Ul.min),xi.expandByPoint(xn),xn.addVectors(xi.max,Ul.max),xi.expandByPoint(xn)):(xi.expandByPoint(Ul.min),xi.expandByPoint(Ul.max))}xi.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)xn.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(xn));if(t)for(let s=0,a=t.length;s<a;s++){const c=t[s],u=this.morphTargetsRelative;for(let h=0,d=c.count;h<d;h++)xn.fromBufferAttribute(c,h),u&&(ga.fromBufferAttribute(e,h),xn.add(ga)),r=Math.max(r,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,c=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wr(new Float32Array(4*c),4));const u=this.getAttribute("tangent").array,h=[],d=[];for(let L=0;L<c;L++)h[L]=new Y,d[L]=new Y;const p=new Y,_=new Y,g=new Y,E=new et,x=new et,y=new et,m=new Y,w=new Y;function T(L,Q,te){p.fromArray(r,L*3),_.fromArray(r,Q*3),g.fromArray(r,te*3),E.fromArray(a,L*2),x.fromArray(a,Q*2),y.fromArray(a,te*2),_.sub(p),g.sub(p),x.sub(E),y.sub(E);const W=1/(x.x*y.y-y.x*x.y);isFinite(W)&&(m.copy(_).multiplyScalar(y.y).addScaledVector(g,-x.y).multiplyScalar(W),w.copy(g).multiplyScalar(x.x).addScaledVector(_,-y.x).multiplyScalar(W),h[L].add(m),h[Q].add(m),h[te].add(m),d[L].add(w),d[Q].add(w),d[te].add(w))}let C=this.groups;C.length===0&&(C=[{start:0,count:n.length}]);for(let L=0,Q=C.length;L<Q;++L){const te=C[L],W=te.start,$=te.count;for(let j=W,le=W+$;j<le;j+=3)T(n[j+0],n[j+1],n[j+2])}const b=new Y,I=new Y,O=new Y,B=new Y;function M(L){O.fromArray(s,L*3),B.copy(O);const Q=h[L];b.copy(Q),b.sub(O.multiplyScalar(O.dot(Q))).normalize(),I.crossVectors(B,Q);const W=I.dot(d[L])<0?-1:1;u[L*4]=b.x,u[L*4+1]=b.y,u[L*4+2]=b.z,u[L*4+3]=W}for(let L=0,Q=C.length;L<Q;++L){const te=C[L],W=te.start,$=te.count;for(let j=W,le=W+$;j<le;j+=3)M(n[j+0]),M(n[j+1]),M(n[j+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new wr(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let _=0,g=n.count;_<g;_++)n.setXYZ(_,0,0,0);const r=new Y,s=new Y,a=new Y,c=new Y,u=new Y,h=new Y,d=new Y,p=new Y;if(e)for(let _=0,g=e.count;_<g;_+=3){const E=e.getX(_+0),x=e.getX(_+1),y=e.getX(_+2);r.fromBufferAttribute(t,E),s.fromBufferAttribute(t,x),a.fromBufferAttribute(t,y),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),c.fromBufferAttribute(n,E),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,y),c.add(d),u.add(d),h.add(d),n.setXYZ(E,c.x,c.y,c.z),n.setXYZ(x,u.x,u.y,u.z),n.setXYZ(y,h.x,h.y,h.z)}else for(let _=0,g=t.count;_<g;_+=3)r.fromBufferAttribute(t,_+0),s.fromBufferAttribute(t,_+1),a.fromBufferAttribute(t,_+2),d.subVectors(a,s),p.subVectors(r,s),d.cross(p),n.setXYZ(_+0,d.x,d.y,d.z),n.setXYZ(_+1,d.x,d.y,d.z),n.setXYZ(_+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xn.fromBufferAttribute(e,t),xn.normalize(),e.setXYZ(t,xn.x,xn.y,xn.z)}toNonIndexed(){function e(c,u){const h=c.array,d=c.itemSize,p=c.normalized,_=new h.constructor(u.length*d);let g=0,E=0;for(let x=0,y=u.length;x<y;x++){c.isInterleavedBufferAttribute?g=u[x]*c.data.stride+c.offset:g=u[x]*d;for(let m=0;m<d;m++)_[E++]=h[g++]}return new wr(_,d,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new os,n=this.index.array,r=this.attributes;for(const c in r){const u=r[c],h=e(u,n);t.setAttribute(c,h)}const s=this.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++){const _=h[d],g=e(_,n);u.push(g)}t.morphAttributes[c]=u}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const u in n){const h=n[u];e.data.attributes[u]=h.toJSON(e.data)}const r={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let p=0,_=h.length;p<_;p++){const g=h[p];d.push(g.toJSON(e.data))}d.length>0&&(r[u]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const c=this.boundingSphere;return c!==null&&(e.data.boundingSphere={center:c.center.toArray(),radius:c.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(t))}const s=e.morphAttributes;for(const h in s){const d=[],p=s[h];for(let _=0,g=p.length;_<g;_++)d.push(p[_].clone(t));this.morphAttributes[h]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let h=0,d=a.length;h<d;h++){const p=a[h];this.addGroup(p.start,p.count,p.materialIndex)}const c=e.boundingBox;c!==null&&(this.boundingBox=c.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bx=new pn,yr=new LO,Du=new Q_,Ax=new Y,va=new Y,xa=new Y,ya=new Y,jd=new Y,Nu=new Y,Ou=new et,Uu=new et,Fu=new et,Cx=new Y,Rx=new Y,Px=new Y,Bu=new Y,ku=new Y;class Qr extends kn{constructor(e=new os,t=new xS){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const c=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[c]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const c=this.morphTargetInfluences;if(s&&c){Nu.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const d=c[u],p=s[u];d!==0&&(jd.fromBufferAttribute(p,e),a?Nu.addScaledVector(jd,d):Nu.addScaledVector(jd.sub(t),d))}t.add(Nu)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Du.copy(n.boundingSphere),Du.applyMatrix4(s),yr.copy(e.ray).recast(e.near),!(Du.containsPoint(yr.origin)===!1&&(yr.intersectSphere(Du,Ax)===null||yr.origin.distanceToSquared(Ax)>(e.far-e.near)**2))&&(bx.copy(s).invert(),yr.copy(e.ray).applyMatrix4(bx),!(n.boundingBox!==null&&yr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t)))}_computeIntersections(e,t){let n;const r=this.geometry,s=this.material,a=r.index,c=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,p=r.groups,_=r.drawRange;if(a!==null)if(Array.isArray(s))for(let g=0,E=p.length;g<E;g++){const x=p[g],y=s[x.materialIndex],m=Math.max(x.start,_.start),w=Math.min(a.count,Math.min(x.start+x.count,_.start+_.count));for(let T=m,C=w;T<C;T+=3){const b=a.getX(T),I=a.getX(T+1),O=a.getX(T+2);n=zu(this,y,e,yr,u,h,d,b,I,O),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=x.materialIndex,t.push(n))}}else{const g=Math.max(0,_.start),E=Math.min(a.count,_.start+_.count);for(let x=g,y=E;x<y;x+=3){const m=a.getX(x),w=a.getX(x+1),T=a.getX(x+2);n=zu(this,s,e,yr,u,h,d,m,w,T),n&&(n.faceIndex=Math.floor(x/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(s))for(let g=0,E=p.length;g<E;g++){const x=p[g],y=s[x.materialIndex],m=Math.max(x.start,_.start),w=Math.min(c.count,Math.min(x.start+x.count,_.start+_.count));for(let T=m,C=w;T<C;T+=3){const b=T,I=T+1,O=T+2;n=zu(this,y,e,yr,u,h,d,b,I,O),n&&(n.faceIndex=Math.floor(T/3),n.face.materialIndex=x.materialIndex,t.push(n))}}else{const g=Math.max(0,_.start),E=Math.min(c.count,_.start+_.count);for(let x=g,y=E;x<y;x+=3){const m=x,w=x+1,T=x+2;n=zu(this,s,e,yr,u,h,d,m,w,T),n&&(n.faceIndex=Math.floor(x/3),t.push(n))}}}}function HO(i,e,t,n,r,s,a,c){let u;if(e.side===ri?u=n.intersectTriangle(a,s,r,!0,c):u=n.intersectTriangle(r,s,a,e.side===Gs,c),u===null)return null;ku.copy(c),ku.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(ku);return h<t.near||h>t.far?null:{distance:h,point:ku.clone(),object:i}}function zu(i,e,t,n,r,s,a,c,u,h){i.getVertexPosition(c,va),i.getVertexPosition(u,xa),i.getVertexPosition(h,ya);const d=HO(i,e,t,n,va,xa,ya,Bu);if(d){r&&(Ou.fromBufferAttribute(r,c),Uu.fromBufferAttribute(r,u),Fu.fromBufferAttribute(r,h),d.uv=cr.getInterpolation(Bu,va,xa,ya,Ou,Uu,Fu,new et)),s&&(Ou.fromBufferAttribute(s,c),Uu.fromBufferAttribute(s,u),Fu.fromBufferAttribute(s,h),d.uv1=cr.getInterpolation(Bu,va,xa,ya,Ou,Uu,Fu,new et),d.uv2=d.uv1),a&&(Cx.fromBufferAttribute(a,c),Rx.fromBufferAttribute(a,u),Px.fromBufferAttribute(a,h),d.normal=cr.getInterpolation(Bu,va,xa,ya,Cx,Rx,Px,new Y),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const p={a:c,b:u,c:h,normal:new Y,materialIndex:0};cr.getNormal(va,xa,ya,p.normal),d.face=p}return d}class Ic extends os{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const c=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const u=[],h=[],d=[],p=[];let _=0,g=0;E("z","y","x",-1,-1,n,t,e,a,s,0),E("z","y","x",1,-1,n,t,-e,a,s,1),E("x","z","y",1,1,e,n,t,r,a,2),E("x","z","y",1,-1,e,n,-t,r,a,3),E("x","y","z",1,-1,e,t,n,r,s,4),E("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new Ti(h,3)),this.setAttribute("normal",new Ti(d,3)),this.setAttribute("uv",new Ti(p,2));function E(x,y,m,w,T,C,b,I,O,B,M){const L=C/O,Q=b/B,te=C/2,W=b/2,$=I/2,j=O+1,le=B+1;let J=0,ne=0;const ge=new Y;for(let he=0;he<le;he++){const Ie=he*Q-W;for(let ye=0;ye<j;ye++){const ie=ye*L-te;ge[x]=ie*w,ge[y]=Ie*T,ge[m]=$,h.push(ge.x,ge.y,ge.z),ge[x]=0,ge[y]=0,ge[m]=I>0?1:-1,d.push(ge.x,ge.y,ge.z),p.push(ye/O),p.push(1-he/B),J+=1}}for(let he=0;he<B;he++)for(let Ie=0;Ie<O;Ie++){const ye=_+Ie+j*he,ie=_+Ie+j*(he+1),ce=_+(Ie+1)+j*(he+1),H=_+(Ie+1)+j*he;u.push(ye,ie,H),u.push(ie,ce,H),ne+=6}c.addGroup(g,ne,M),g+=ne,_+=J}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ic(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ya(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Xn(i){const e={};for(let t=0;t<i.length;t++){const n=Ya(i[t]);for(const r in n)e[r]=n[r]}return e}function GO(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function SS(i){return i.getRenderTarget()===null?i.outputColorSpace:Rr}const WO={clone:Ya,merge:Xn};var VO=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,XO=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Oo extends al{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=VO,this.fragmentShader=XO,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ya(e.uniforms),this.uniformsGroups=GO(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class MS extends kn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pn,this.projectionMatrix=new pn,this.projectionMatrixInverse=new pn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Vi extends MS{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=qp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Dd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return qp*2*Math.atan(Math.tan(Dd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Dd*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const u=a.fullWidth,h=a.fullHeight;s+=a.offsetX*r/u,t-=a.offsetY*n/h,r*=a.width/u,n*=a.height/h}const c=this.filmOffset;c!==0&&(s+=e*c/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ea=-90,Sa=1;class qO extends kn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new Vi(Ea,Sa,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Vi(Ea,Sa,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Vi(Ea,Sa,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const c=new Vi(Ea,Sa,e,t);c.layers=this.layers,c.up.set(0,0,1),c.lookAt(0,-1,0),this.add(c);const u=new Vi(Ea,Sa,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const h=new Vi(Ea,Sa,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,a,c,u,h]=this.children,d=e.getRenderTarget(),p=e.toneMapping,_=e.xr.enabled;e.toneMapping=ns,e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,c),e.setRenderTarget(n,4),e.render(t,u),n.texture.generateMipmaps=g,e.setRenderTarget(n,5),e.render(t,h),e.setRenderTarget(d),e.toneMapping=p,e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class TS extends Mi{constructor(e,t,n,r,s,a,c,u,h,d){e=e!==void 0?e:[],t=t!==void 0?t:Va,super(e,t,n,r,s,a,c,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class YO extends Do{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(Yl("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===So?rt:Mo),this.texture=new TS(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Wi}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ic(5,5,5),s=new Oo({name:"CubemapFromEquirect",uniforms:Ya(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ri,blending:Is});s.uniforms.tEquirect.value=t;const a=new Qr(r,s),c=t.minFilter;return t.minFilter===uc&&(t.minFilter=Wi),new qO(1,10,this).update(e,a),t.minFilter=c,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Zd=new Y,$O=new Y,KO=new vt;class ho{constructor(e=new Y(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Zd.subVectors(n,t).cross($O.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Zd),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||KO.getNormalMatrix(e),r=this.coplanarPoint(Zd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oo=new Q_,Hu=new Y;class J_{constructor(e=new ho,t=new ho,n=new ho,r=new ho,s=new ho,a=new ho){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const c=this.planes;return c[0].copy(e),c[1].copy(t),c[2].copy(n),c[3].copy(r),c[4].copy(s),c[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],a=n[2],c=n[3],u=n[4],h=n[5],d=n[6],p=n[7],_=n[8],g=n[9],E=n[10],x=n[11],y=n[12],m=n[13],w=n[14],T=n[15];return t[0].setComponents(c-r,p-u,x-_,T-y).normalize(),t[1].setComponents(c+r,p+u,x+_,T+y).normalize(),t[2].setComponents(c+s,p+h,x+g,T+m).normalize(),t[3].setComponents(c-s,p-h,x-g,T-m).normalize(),t[4].setComponents(c-a,p-d,x-E,T-w).normalize(),t[5].setComponents(c+a,p+d,x+E,T+w).normalize(),this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),oo.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),oo.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(oo)}intersectsSprite(e){return oo.center.set(0,0,0),oo.radius=.7071067811865476,oo.applyMatrix4(e.matrixWorld),this.intersectsSphere(oo)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Hu.x=r.normal.x>0?e.max.x:e.min.x,Hu.y=r.normal.y>0?e.max.y:e.min.y,Hu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Hu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function wS(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function jO(i,e){const t=e.isWebGL2,n=new WeakMap;function r(h,d){const p=h.array,_=h.usage,g=i.createBuffer();i.bindBuffer(d,g),i.bufferData(d,p,_),h.onUploadCallback();let E;if(p instanceof Float32Array)E=i.FLOAT;else if(p instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)E=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else E=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)E=i.SHORT;else if(p instanceof Uint32Array)E=i.UNSIGNED_INT;else if(p instanceof Int32Array)E=i.INT;else if(p instanceof Int8Array)E=i.BYTE;else if(p instanceof Uint8Array)E=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)E=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:E,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version}}function s(h,d,p){const _=d.array,g=d.updateRange;i.bindBuffer(p,h),g.count===-1?i.bufferSubData(p,0,_):(t?i.bufferSubData(p,g.offset*_.BYTES_PER_ELEMENT,_,g.offset,g.count):i.bufferSubData(p,g.offset*_.BYTES_PER_ELEMENT,_.subarray(g.offset,g.offset+g.count)),g.count=-1),d.onUploadCallback()}function a(h){return h.isInterleavedBufferAttribute&&(h=h.data),n.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=n.get(h);d&&(i.deleteBuffer(d.buffer),n.delete(h))}function u(h,d){if(h.isGLBufferAttribute){const _=n.get(h);(!_||_.version<h.version)&&n.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=n.get(h);p===void 0?n.set(h,r(h,d)):p.version<h.version&&(s(p.buffer,h,d),p.version=h.version)}return{get:a,remove:c,update:u}}class em extends os{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,c=Math.floor(n),u=Math.floor(r),h=c+1,d=u+1,p=e/c,_=t/u,g=[],E=[],x=[],y=[];for(let m=0;m<d;m++){const w=m*_-a;for(let T=0;T<h;T++){const C=T*p-s;E.push(C,-w,0),x.push(0,0,1),y.push(T/c),y.push(1-m/u)}}for(let m=0;m<u;m++)for(let w=0;w<c;w++){const T=w+h*m,C=w+h*(m+1),b=w+1+h*(m+1),I=w+1+h*m;g.push(T,C,I),g.push(C,b,I)}this.setIndex(g),this.setAttribute("position",new Ti(E,3)),this.setAttribute("normal",new Ti(x,3)),this.setAttribute("uv",new Ti(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new em(e.width,e.height,e.widthSegments,e.heightSegments)}}var ZO=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,QO=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JO=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,eU=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,tU=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,nU=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,iU="vec3 transformed = vec3( position );",rU=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sU=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,oU=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,aU=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lU=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,cU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,uU=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hU=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fU=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pU=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_U=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,mU=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
} // validated`,gU=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,vU=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xU=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,yU=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,EU=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SU=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,MU="gl_FragColor = linearToOutputTexel( gl_FragColor );",TU=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,wU=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,bU=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,AU=`#ifdef USE_ENVMAP
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
#endif`,CU=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RU=`#ifdef USE_ENVMAP
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
#endif`,PU=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IU=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,LU=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,DU=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NU=`#ifdef USE_GRADIENTMAP
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
}`,OU=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,UU=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FU=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BU=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kU=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,zU=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,HU=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,GU=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,WU=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VU=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,XU=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
#endif`,qU=`struct PhysicalMaterial {
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,YU=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,$U=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KU=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ZU=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,JU=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,eF=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,tF=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nF=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iF=`#if defined( USE_POINTS_UV )
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
#endif`,rF=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sF=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,oF=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aF=`#ifdef USE_MORPHNORMALS
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
#endif`,lF=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
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
#endif`,cF=`#ifdef USE_MORPHTARGETS
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
#endif`,uF=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
#ifdef USE_NORMALMAP_TANGENTSPACE
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,hF=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dF=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pF=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_F=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
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
#endif`,mF=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gF=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vF=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xF=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yF=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,EF=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SF=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MF=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TF=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wF=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bF=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AF=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,RF=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PF=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IF=`float getShadowMask() {
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
}`,LF=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DF=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,NF=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,OF=`#ifdef USE_SKINNING
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
#endif`,UF=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,FF=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BF=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kF=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zF=`#ifdef USE_TRANSMISSION
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
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,HF=`#ifdef USE_TRANSMISSION
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
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
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,GF=`#ifdef USE_UV
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
#endif`,WF=`#ifdef USE_UV
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
#endif`,VF=`#ifdef USE_UV
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
#endif`,XF=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qF=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YF=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$F=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KF=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jF=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ZF=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,QF=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,JF=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,e3=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,t3=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,n3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,r3=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,s3=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o3=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,a3=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l3=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,c3=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u3=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,h3=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f3=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,d3=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p3=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,_3=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m3=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,g3=`#define STANDARD
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
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v3=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,x3=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y3=`uniform float size;
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
}`,E3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S3=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,M3=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,T3=`uniform float rotation;
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
}`,w3=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ct={alphamap_fragment:ZO,alphamap_pars_fragment:QO,alphatest_fragment:JO,alphatest_pars_fragment:eU,aomap_fragment:tU,aomap_pars_fragment:nU,begin_vertex:iU,beginnormal_vertex:rU,bsdfs:sU,iridescence_fragment:oU,bumpmap_pars_fragment:aU,clipping_planes_fragment:lU,clipping_planes_pars_fragment:cU,clipping_planes_pars_vertex:uU,clipping_planes_vertex:hU,color_fragment:fU,color_pars_fragment:dU,color_pars_vertex:pU,color_vertex:_U,common:mU,cube_uv_reflection_fragment:gU,defaultnormal_vertex:vU,displacementmap_pars_vertex:xU,displacementmap_vertex:yU,emissivemap_fragment:EU,emissivemap_pars_fragment:SU,encodings_fragment:MU,encodings_pars_fragment:TU,envmap_fragment:wU,envmap_common_pars_fragment:bU,envmap_pars_fragment:AU,envmap_pars_vertex:CU,envmap_physical_pars_fragment:zU,envmap_vertex:RU,fog_vertex:PU,fog_pars_vertex:IU,fog_fragment:LU,fog_pars_fragment:DU,gradientmap_pars_fragment:NU,lightmap_fragment:OU,lightmap_pars_fragment:UU,lights_lambert_fragment:FU,lights_lambert_pars_fragment:BU,lights_pars_begin:kU,lights_toon_fragment:HU,lights_toon_pars_fragment:GU,lights_phong_fragment:WU,lights_phong_pars_fragment:VU,lights_physical_fragment:XU,lights_physical_pars_fragment:qU,lights_fragment_begin:YU,lights_fragment_maps:$U,lights_fragment_end:KU,logdepthbuf_fragment:jU,logdepthbuf_pars_fragment:ZU,logdepthbuf_pars_vertex:QU,logdepthbuf_vertex:JU,map_fragment:eF,map_pars_fragment:tF,map_particle_fragment:nF,map_particle_pars_fragment:iF,metalnessmap_fragment:rF,metalnessmap_pars_fragment:sF,morphcolor_vertex:oF,morphnormal_vertex:aF,morphtarget_pars_vertex:lF,morphtarget_vertex:cF,normal_fragment_begin:uF,normal_fragment_maps:hF,normal_pars_fragment:fF,normal_pars_vertex:dF,normal_vertex:pF,normalmap_pars_fragment:_F,clearcoat_normal_fragment_begin:mF,clearcoat_normal_fragment_maps:gF,clearcoat_pars_fragment:vF,iridescence_pars_fragment:xF,output_fragment:yF,packing:EF,premultiplied_alpha_fragment:SF,project_vertex:MF,dithering_fragment:TF,dithering_pars_fragment:wF,roughnessmap_fragment:bF,roughnessmap_pars_fragment:AF,shadowmap_pars_fragment:CF,shadowmap_pars_vertex:RF,shadowmap_vertex:PF,shadowmask_pars_fragment:IF,skinbase_vertex:LF,skinning_pars_vertex:DF,skinning_vertex:NF,skinnormal_vertex:OF,specularmap_fragment:UF,specularmap_pars_fragment:FF,tonemapping_fragment:BF,tonemapping_pars_fragment:kF,transmission_fragment:zF,transmission_pars_fragment:HF,uv_pars_fragment:GF,uv_pars_vertex:WF,uv_vertex:VF,worldpos_vertex:XF,background_vert:qF,background_frag:YF,backgroundCube_vert:$F,backgroundCube_frag:KF,cube_vert:jF,cube_frag:ZF,depth_vert:QF,depth_frag:JF,distanceRGBA_vert:e3,distanceRGBA_frag:t3,equirect_vert:n3,equirect_frag:i3,linedashed_vert:r3,linedashed_frag:s3,meshbasic_vert:o3,meshbasic_frag:a3,meshlambert_vert:l3,meshlambert_frag:c3,meshmatcap_vert:u3,meshmatcap_frag:h3,meshnormal_vert:f3,meshnormal_frag:d3,meshphong_vert:p3,meshphong_frag:_3,meshphysical_vert:m3,meshphysical_frag:g3,meshtoon_vert:v3,meshtoon_frag:x3,points_vert:y3,points_frag:E3,shadow_vert:S3,shadow_frag:M3,sprite_vert:T3,sprite_frag:w3},be={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaMapTransform:{value:new vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new vt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new vt},normalScale:{value:new et(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new vt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new et(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new vt},alphaMap:{value:null},alphaTest:{value:0}}},Er={basic:{uniforms:Xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.fog]),vertexShader:ct.meshbasic_vert,fragmentShader:ct.meshbasic_frag},lambert:{uniforms:Xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new At(0)}}]),vertexShader:ct.meshlambert_vert,fragmentShader:ct.meshlambert_frag},phong:{uniforms:Xn([be.common,be.specularmap,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.fog,be.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:ct.meshphong_vert,fragmentShader:ct.meshphong_frag},standard:{uniforms:Xn([be.common,be.envmap,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.roughnessmap,be.metalnessmap,be.fog,be.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag},toon:{uniforms:Xn([be.common,be.aomap,be.lightmap,be.emissivemap,be.bumpmap,be.normalmap,be.displacementmap,be.gradientmap,be.fog,be.lights,{emissive:{value:new At(0)}}]),vertexShader:ct.meshtoon_vert,fragmentShader:ct.meshtoon_frag},matcap:{uniforms:Xn([be.common,be.bumpmap,be.normalmap,be.displacementmap,be.fog,{matcap:{value:null}}]),vertexShader:ct.meshmatcap_vert,fragmentShader:ct.meshmatcap_frag},points:{uniforms:Xn([be.points,be.fog]),vertexShader:ct.points_vert,fragmentShader:ct.points_frag},dashed:{uniforms:Xn([be.common,be.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ct.linedashed_vert,fragmentShader:ct.linedashed_frag},depth:{uniforms:Xn([be.common,be.displacementmap]),vertexShader:ct.depth_vert,fragmentShader:ct.depth_frag},normal:{uniforms:Xn([be.common,be.bumpmap,be.normalmap,be.displacementmap,{opacity:{value:1}}]),vertexShader:ct.meshnormal_vert,fragmentShader:ct.meshnormal_frag},sprite:{uniforms:Xn([be.sprite,be.fog]),vertexShader:ct.sprite_vert,fragmentShader:ct.sprite_frag},background:{uniforms:{uvTransform:{value:new vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ct.background_vert,fragmentShader:ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ct.backgroundCube_vert,fragmentShader:ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ct.cube_vert,fragmentShader:ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ct.equirect_vert,fragmentShader:ct.equirect_frag},distanceRGBA:{uniforms:Xn([be.common,be.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ct.distanceRGBA_vert,fragmentShader:ct.distanceRGBA_frag},shadow:{uniforms:Xn([be.lights,be.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:ct.shadow_vert,fragmentShader:ct.shadow_frag}};Er.physical={uniforms:Xn([Er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new vt},clearcoatNormalScale:{value:new et(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new vt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new vt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new vt},transmissionSamplerSize:{value:new et},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new vt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new vt}}]),vertexShader:ct.meshphysical_vert,fragmentShader:ct.meshphysical_frag};const Gu={r:0,b:0,g:0};function b3(i,e,t,n,r,s,a){const c=new At(0);let u=s===!0?0:1,h,d,p=null,_=0,g=null;function E(y,m){let w=!1,T=m.isScene===!0?m.background:null;switch(T&&T.isTexture&&(T=(m.backgroundBlurriness>0?t:e).get(T)),T===null?x(c,u):T&&T.isColor&&(x(T,1),w=!0),i.xr.getEnvironmentBlendMode()){case"opaque":w=!0;break;case"additive":n.buffers.color.setClear(0,0,0,1,a),w=!0;break;case"alpha-blend":n.buffers.color.setClear(0,0,0,0,a),w=!0;break}(i.autoClear||w)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),T&&(T.isCubeTexture||T.mapping===jh)?(d===void 0&&(d=new Qr(new Ic(1,1,1),new Oo({name:"BackgroundCubeMaterial",uniforms:Ya(Er.backgroundCube.uniforms),vertexShader:Er.backgroundCube.vertexShader,fragmentShader:Er.backgroundCube.fragmentShader,side:ri,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(I,O,B){this.matrixWorld.copyPosition(B.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),d.material.uniforms.envMap.value=T,d.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,d.material.toneMapped=T.colorSpace!==rt,(p!==T||_!==T.version||g!==i.toneMapping)&&(d.material.needsUpdate=!0,p=T,_=T.version,g=i.toneMapping),d.layers.enableAll(),y.unshift(d,d.geometry,d.material,0,0,null)):T&&T.isTexture&&(h===void 0&&(h=new Qr(new em(2,2),new Oo({name:"BackgroundMaterial",uniforms:Ya(Er.background.uniforms),vertexShader:Er.background.vertexShader,fragmentShader:Er.background.fragmentShader,side:Gs,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=T,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=T.colorSpace!==rt,T.matrixAutoUpdate===!0&&T.updateMatrix(),h.material.uniforms.uvTransform.value.copy(T.matrix),(p!==T||_!==T.version||g!==i.toneMapping)&&(h.material.needsUpdate=!0,p=T,_=T.version,g=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function x(y,m){y.getRGB(Gu,SS(i)),n.buffers.color.setClear(Gu.r,Gu.g,Gu.b,m,a)}return{getClearColor:function(){return c},setClearColor:function(y,m=1){c.set(y),u=m,x(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(y){u=y,x(c,u)},render:E}}function A3(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,c={},u=y(null);let h=u,d=!1;function p($,j,le,J,ne){let ge=!1;if(a){const he=x(J,le,j);h!==he&&(h=he,g(h.object)),ge=m($,J,le,ne),ge&&w($,J,le,ne)}else{const he=j.wireframe===!0;(h.geometry!==J.id||h.program!==le.id||h.wireframe!==he)&&(h.geometry=J.id,h.program=le.id,h.wireframe=he,ge=!0)}ne!==null&&t.update(ne,i.ELEMENT_ARRAY_BUFFER),(ge||d)&&(d=!1,B($,j,le,J),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(ne).buffer))}function _(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function g($){return n.isWebGL2?i.bindVertexArray($):s.bindVertexArrayOES($)}function E($){return n.isWebGL2?i.deleteVertexArray($):s.deleteVertexArrayOES($)}function x($,j,le){const J=le.wireframe===!0;let ne=c[$.id];ne===void 0&&(ne={},c[$.id]=ne);let ge=ne[j.id];ge===void 0&&(ge={},ne[j.id]=ge);let he=ge[J];return he===void 0&&(he=y(_()),ge[J]=he),he}function y($){const j=[],le=[],J=[];for(let ne=0;ne<r;ne++)j[ne]=0,le[ne]=0,J[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:le,attributeDivisors:J,object:$,attributes:{},index:null}}function m($,j,le,J){const ne=h.attributes,ge=j.attributes;let he=0;const Ie=le.getAttributes();for(const ye in Ie)if(Ie[ye].location>=0){const ce=ne[ye];let H=ge[ye];if(H===void 0&&(ye==="instanceMatrix"&&$.instanceMatrix&&(H=$.instanceMatrix),ye==="instanceColor"&&$.instanceColor&&(H=$.instanceColor)),ce===void 0||ce.attribute!==H||H&&ce.data!==H.data)return!0;he++}return h.attributesNum!==he||h.index!==J}function w($,j,le,J){const ne={},ge=j.attributes;let he=0;const Ie=le.getAttributes();for(const ye in Ie)if(Ie[ye].location>=0){let ce=ge[ye];ce===void 0&&(ye==="instanceMatrix"&&$.instanceMatrix&&(ce=$.instanceMatrix),ye==="instanceColor"&&$.instanceColor&&(ce=$.instanceColor));const H={};H.attribute=ce,ce&&ce.data&&(H.data=ce.data),ne[ye]=H,he++}h.attributes=ne,h.attributesNum=he,h.index=J}function T(){const $=h.newAttributes;for(let j=0,le=$.length;j<le;j++)$[j]=0}function C($){b($,0)}function b($,j){const le=h.newAttributes,J=h.enabledAttributes,ne=h.attributeDivisors;le[$]=1,J[$]===0&&(i.enableVertexAttribArray($),J[$]=1),ne[$]!==j&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"]($,j),ne[$]=j)}function I(){const $=h.newAttributes,j=h.enabledAttributes;for(let le=0,J=j.length;le<J;le++)j[le]!==$[le]&&(i.disableVertexAttribArray(le),j[le]=0)}function O($,j,le,J,ne,ge){n.isWebGL2===!0&&(le===i.INT||le===i.UNSIGNED_INT)?i.vertexAttribIPointer($,j,le,ne,ge):i.vertexAttribPointer($,j,le,J,ne,ge)}function B($,j,le,J){if(n.isWebGL2===!1&&($.isInstancedMesh||J.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;T();const ne=J.attributes,ge=le.getAttributes(),he=j.defaultAttributeValues;for(const Ie in ge){const ye=ge[Ie];if(ye.location>=0){let ie=ne[Ie];if(ie===void 0&&(Ie==="instanceMatrix"&&$.instanceMatrix&&(ie=$.instanceMatrix),Ie==="instanceColor"&&$.instanceColor&&(ie=$.instanceColor)),ie!==void 0){const ce=ie.normalized,H=ie.itemSize,_e=t.get(ie);if(_e===void 0)continue;const F=_e.buffer,Pe=_e.type,Ce=_e.bytesPerElement;if(ie.isInterleavedBufferAttribute){const Ee=ie.data,ze=Ee.stride,st=ie.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ue=0;Ue<ye.locationSize;Ue++)b(ye.location+Ue,Ee.meshPerAttribute);$.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ue=0;Ue<ye.locationSize;Ue++)C(ye.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,F);for(let Ue=0;Ue<ye.locationSize;Ue++)O(ye.location+Ue,H/ye.locationSize,Pe,ce,ze*Ce,(st+H/ye.locationSize*Ue)*Ce)}else{if(ie.isInstancedBufferAttribute){for(let Ee=0;Ee<ye.locationSize;Ee++)b(ye.location+Ee,ie.meshPerAttribute);$.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ee=0;Ee<ye.locationSize;Ee++)C(ye.location+Ee);i.bindBuffer(i.ARRAY_BUFFER,F);for(let Ee=0;Ee<ye.locationSize;Ee++)O(ye.location+Ee,H/ye.locationSize,Pe,ce,H*Ce,H/ye.locationSize*Ee*Ce)}}else if(he!==void 0){const ce=he[Ie];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(ye.location,ce);break;case 3:i.vertexAttrib3fv(ye.location,ce);break;case 4:i.vertexAttrib4fv(ye.location,ce);break;default:i.vertexAttrib1fv(ye.location,ce)}}}}I()}function M(){te();for(const $ in c){const j=c[$];for(const le in j){const J=j[le];for(const ne in J)E(J[ne].object),delete J[ne];delete j[le]}delete c[$]}}function L($){if(c[$.id]===void 0)return;const j=c[$.id];for(const le in j){const J=j[le];for(const ne in J)E(J[ne].object),delete J[ne];delete j[le]}delete c[$.id]}function Q($){for(const j in c){const le=c[j];if(le[$.id]===void 0)continue;const J=le[$.id];for(const ne in J)E(J[ne].object),delete J[ne];delete le[$.id]}}function te(){W(),d=!0,h!==u&&(h=u,g(h.object))}function W(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:p,reset:te,resetDefaultState:W,dispose:M,releaseStatesOfGeometry:L,releaseStatesOfProgram:Q,initAttributes:T,enableAttribute:C,disableUnusedAttributes:I}}function C3(i,e,t,n){const r=n.isWebGL2;let s;function a(h){s=h}function c(h,d){i.drawArrays(s,h,d),t.update(d,s,1)}function u(h,d,p){if(p===0)return;let _,g;if(r)_=i,g="drawArraysInstanced";else if(_=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",_===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}_[g](s,h,d,p),t.update(d,s,p)}this.setMode=a,this.render=c,this.renderInstances=u}function R3(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(O){if(O==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let c=t.precision!==void 0?t.precision:"highp";const u=s(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=a||e.has("WEBGL_draw_buffers"),d=t.logarithmicDepthBuffer===!0,p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),E=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),m=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=_>0,C=a||e.has("OES_texture_float"),b=T&&C,I=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:h,getMaxAnisotropy:r,getMaxPrecision:s,precision:c,logarithmicDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:E,maxAttributes:x,maxVertexUniforms:y,maxVaryings:m,maxFragmentUniforms:w,vertexTextures:T,floatFragmentTextures:C,floatVertexTextures:b,maxSamples:I}}function P3(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new ho,c=new vt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(p,_){const g=p.length!==0||_||n!==0||r;return r=_,n=p.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,_){t=d(p,_,0)},this.setState=function(p,_,g){const E=p.clippingPlanes,x=p.clipIntersection,y=p.clipShadows,m=i.get(p);if(!r||E===null||E.length===0||s&&!y)s?d(null):h();else{const w=s?0:n,T=w*4;let C=m.clippingState||null;u.value=C,C=d(E,_,T,g);for(let b=0;b!==T;++b)C[b]=t[b];m.clippingState=C,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(p,_,g,E){const x=p!==null?p.length:0;let y=null;if(x!==0){if(y=u.value,E!==!0||y===null){const m=g+x*4,w=_.matrixWorldInverse;c.getNormalMatrix(w),(y===null||y.length<m)&&(y=new Float32Array(m));for(let T=0,C=g;T!==x;++T,C+=4)a.copy(p[T]).applyMatrix4(w,c),a.normal.toArray(y,C),y[C+3]=a.constant}u.value=y,u.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,y}}function I3(i){let e=new WeakMap;function t(a,c){return c===Hp?a.mapping=Va:c===Gp&&(a.mapping=Xa),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const c=a.mapping;if(c===Hp||c===Gp)if(e.has(a)){const u=e.get(a).texture;return t(u,a.mapping)}else{const u=a.image;if(u&&u.height>0){const h=new YO(u.height/2);return h.fromEquirectangularTexture(i,a),e.set(a,h),a.addEventListener("dispose",r),t(h.texture,a.mapping)}else return null}}return a}function r(a){const c=a.target;c.removeEventListener("dispose",r);const u=e.get(c);u!==void 0&&(e.delete(c),u.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class bS extends MS{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,c=r+t,u=r-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,a=s+h*this.view.width,c-=d*this.view.offsetY,u=c-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,c,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ba=4,Ix=[.125,.215,.35,.446,.526,.582],_o=20,Qd=new bS,Lx=new At;let Jd=null;const fo=(1+Math.sqrt(5))/2,Ma=1/fo,Dx=[new Y(1,1,1),new Y(-1,1,1),new Y(1,1,-1),new Y(-1,1,-1),new Y(0,fo,Ma),new Y(0,fo,-Ma),new Y(Ma,0,fo),new Y(-Ma,0,fo),new Y(fo,Ma,0),new Y(-fo,Ma,0)];class Nx{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Jd=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fx(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ux(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jd),e.scissorTest=!1,Wu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Va||e.mapping===Xa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jd=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Wi,minFilter:Wi,generateMipmaps:!1,type:hc,format:hr,colorSpace:Rr,depthBuffer:!1},r=Ox(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ox(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=L3(s)),this._blurMaterial=D3(s,e,t)}return r}_compileMaterial(e){const t=new Qr(this._lodPlanes[0],e);this._renderer.compile(t,Qd)}_sceneToCubeUV(e,t,n,r){const c=new Vi(90,1,t,n),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,p=d.autoClear,_=d.toneMapping;d.getClearColor(Lx),d.toneMapping=ns,d.autoClear=!1;const g=new xS({name:"PMREM.Background",side:ri,depthWrite:!1,depthTest:!1}),E=new Qr(new Ic,g);let x=!1;const y=e.background;y?y.isColor&&(g.color.copy(y),e.background=null,x=!0):(g.color.copy(Lx),x=!0);for(let m=0;m<6;m++){const w=m%3;w===0?(c.up.set(0,u[m],0),c.lookAt(h[m],0,0)):w===1?(c.up.set(0,0,u[m]),c.lookAt(0,h[m],0)):(c.up.set(0,u[m],0),c.lookAt(0,0,h[m]));const T=this._cubeSize;Wu(r,w*T,m>2?T:0,T,T),d.setRenderTarget(r),x&&d.render(E,c),d.render(e,c)}E.geometry.dispose(),E.material.dispose(),d.toneMapping=_,d.autoClear=p,e.background=y}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Va||e.mapping===Xa;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fx()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ux());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Qr(this._lodPlanes[0],s),c=s.uniforms;c.envMap.value=e;const u=this._cubeSize;Wu(t,0,0,3*u,2*u),n.setRenderTarget(t),n.render(a,Qd)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dx[(r-1)%Dx.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,c){const u=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,p=new Qr(this._lodPlanes[r],h),_=h.uniforms,g=this._sizeLods[n]-1,E=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*_o-1),x=s/E,y=isFinite(s)?1+Math.floor(d*x):_o;y>_o&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${_o}`);const m=[];let w=0;for(let O=0;O<_o;++O){const B=O/x,M=Math.exp(-B*B/2);m.push(M),O===0?w+=M:O<y&&(w+=2*M)}for(let O=0;O<m.length;O++)m[O]=m[O]/w;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=m,_.latitudinal.value=a==="latitudinal",c&&(_.poleAxis.value=c);const{_lodMax:T}=this;_.dTheta.value=E,_.mipInt.value=T-n;const C=this._sizeLods[r],b=3*C*(r>T-ba?r-T+ba:0),I=4*(this._cubeSize-C);Wu(t,b,I,3*C,2*C),u.setRenderTarget(t),u.render(p,Qd)}}function L3(i){const e=[],t=[],n=[];let r=i;const s=i-ba+1+Ix.length;for(let a=0;a<s;a++){const c=Math.pow(2,r);t.push(c);let u=1/c;a>i-ba?u=Ix[a-i+ba-1]:a===0&&(u=0),n.push(u);const h=1/(c-2),d=-h,p=1+h,_=[d,d,p,d,p,p,d,d,p,p,d,p],g=6,E=6,x=3,y=2,m=1,w=new Float32Array(x*E*g),T=new Float32Array(y*E*g),C=new Float32Array(m*E*g);for(let I=0;I<g;I++){const O=I%3*2/3-1,B=I>2?0:-1,M=[O,B,0,O+2/3,B,0,O+2/3,B+1,0,O,B,0,O+2/3,B+1,0,O,B+1,0];w.set(M,x*E*I),T.set(_,y*E*I);const L=[I,I,I,I,I,I];C.set(L,m*E*I)}const b=new os;b.setAttribute("position",new wr(w,x)),b.setAttribute("uv",new wr(T,y)),b.setAttribute("faceIndex",new wr(C,m)),e.push(b),r>ba&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ox(i,e,t){const n=new Do(i,e,t);return n.texture.mapping=jh,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wu(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function D3(i,e,t){const n=new Float32Array(_o),r=new Y(0,1,0);return new Oo({name:"SphericalGaussianBlur",defines:{n:_o,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:tm(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function Ux(){return new Oo({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:tm(),fragmentShader:`

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
		`,blending:Is,depthTest:!1,depthWrite:!1})}function Fx(){return new Oo({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:tm(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Is,depthTest:!1,depthWrite:!1})}function tm(){return`

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
	`}function N3(i){let e=new WeakMap,t=null;function n(c){if(c&&c.isTexture){const u=c.mapping,h=u===Hp||u===Gp,d=u===Va||u===Xa;if(h||d)if(c.isRenderTargetTexture&&c.needsPMREMUpdate===!0){c.needsPMREMUpdate=!1;let p=e.get(c);return t===null&&(t=new Nx(i)),p=h?t.fromEquirectangular(c,p):t.fromCubemap(c,p),e.set(c,p),p.texture}else{if(e.has(c))return e.get(c).texture;{const p=c.image;if(h&&p&&p.height>0||d&&p&&r(p)){t===null&&(t=new Nx(i));const _=h?t.fromEquirectangular(c):t.fromCubemap(c);return e.set(c,_),c.addEventListener("dispose",s),_.texture}else return null}}}return c}function r(c){let u=0;const h=6;for(let d=0;d<h;d++)c[d]!==void 0&&u++;return u===h}function s(c){const u=c.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function O3(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function U3(i,e,t,n){const r={},s=new WeakMap;function a(p){const _=p.target;_.index!==null&&e.remove(_.index);for(const E in _.attributes)e.remove(_.attributes[E]);_.removeEventListener("dispose",a),delete r[_.id];const g=s.get(_);g&&(e.remove(g),s.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function c(p,_){return r[_.id]===!0||(_.addEventListener("dispose",a),r[_.id]=!0,t.memory.geometries++),_}function u(p){const _=p.attributes;for(const E in _)e.update(_[E],i.ARRAY_BUFFER);const g=p.morphAttributes;for(const E in g){const x=g[E];for(let y=0,m=x.length;y<m;y++)e.update(x[y],i.ARRAY_BUFFER)}}function h(p){const _=[],g=p.index,E=p.attributes.position;let x=0;if(g!==null){const w=g.array;x=g.version;for(let T=0,C=w.length;T<C;T+=3){const b=w[T+0],I=w[T+1],O=w[T+2];_.push(b,I,I,O,O,b)}}else{const w=E.array;x=E.version;for(let T=0,C=w.length/3-1;T<C;T+=3){const b=T+0,I=T+1,O=T+2;_.push(b,I,I,O,O,b)}}const y=new(dS(_)?ES:yS)(_,1);y.version=x;const m=s.get(p);m&&e.remove(m),s.set(p,y)}function d(p){const _=s.get(p);if(_){const g=p.index;g!==null&&_.version<g.version&&h(p)}else h(p);return s.get(p)}return{get:c,update:u,getWireframeAttribute:d}}function F3(i,e,t,n){const r=n.isWebGL2;let s;function a(_){s=_}let c,u;function h(_){c=_.type,u=_.bytesPerElement}function d(_,g){i.drawElements(s,g,c,_*u),t.update(g,s,1)}function p(_,g,E){if(E===0)return;let x,y;if(r)x=i,y="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),y="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[y](s,g,c,_*u,E),t.update(g,s,E)}this.setMode=a,this.setIndex=h,this.render=d,this.renderInstances=p}function B3(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,c){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=c*(s/3);break;case i.LINES:t.lines+=c*(s/2);break;case i.LINE_STRIP:t.lines+=c*(s-1);break;case i.LINE_LOOP:t.lines+=c*s;break;case i.POINTS:t.points+=c*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function k3(i,e){return i[0]-e[0]}function z3(i,e){return Math.abs(e[1])-Math.abs(i[1])}function H3(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Tn,c=[];for(let h=0;h<8;h++)c[h]=[h,0];function u(h,d,p){const _=h.morphTargetInfluences;if(e.isWebGL2===!0){const E=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=E!==void 0?E.length:0;let y=s.get(d);if(y===void 0||y.count!==x){let j=function(){W.dispose(),s.delete(d),d.removeEventListener("dispose",j)};var g=j;y!==void 0&&y.texture.dispose();const T=d.morphAttributes.position!==void 0,C=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,I=d.morphAttributes.position||[],O=d.morphAttributes.normal||[],B=d.morphAttributes.color||[];let M=0;T===!0&&(M=1),C===!0&&(M=2),b===!0&&(M=3);let L=d.attributes.position.count*M,Q=1;L>e.maxTextureSize&&(Q=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const te=new Float32Array(L*Q*4*x),W=new mS(te,L,Q,x);W.type=vo,W.needsUpdate=!0;const $=M*4;for(let le=0;le<x;le++){const J=I[le],ne=O[le],ge=B[le],he=L*Q*4*le;for(let Ie=0;Ie<J.count;Ie++){const ye=Ie*$;T===!0&&(a.fromBufferAttribute(J,Ie),te[he+ye+0]=a.x,te[he+ye+1]=a.y,te[he+ye+2]=a.z,te[he+ye+3]=0),C===!0&&(a.fromBufferAttribute(ne,Ie),te[he+ye+4]=a.x,te[he+ye+5]=a.y,te[he+ye+6]=a.z,te[he+ye+7]=0),b===!0&&(a.fromBufferAttribute(ge,Ie),te[he+ye+8]=a.x,te[he+ye+9]=a.y,te[he+ye+10]=a.z,te[he+ye+11]=ge.itemSize===4?a.w:1)}}y={count:x,texture:W,size:new et(L,Q)},s.set(d,y),d.addEventListener("dispose",j)}let m=0;for(let T=0;T<_.length;T++)m+=_[T];const w=d.morphTargetsRelative?1:1-m;p.getUniforms().setValue(i,"morphTargetBaseInfluence",w),p.getUniforms().setValue(i,"morphTargetInfluences",_),p.getUniforms().setValue(i,"morphTargetsTexture",y.texture,t),p.getUniforms().setValue(i,"morphTargetsTextureSize",y.size)}else{const E=_===void 0?0:_.length;let x=n[d.id];if(x===void 0||x.length!==E){x=[];for(let C=0;C<E;C++)x[C]=[C,0];n[d.id]=x}for(let C=0;C<E;C++){const b=x[C];b[0]=C,b[1]=_[C]}x.sort(z3);for(let C=0;C<8;C++)C<E&&x[C][1]?(c[C][0]=x[C][0],c[C][1]=x[C][1]):(c[C][0]=Number.MAX_SAFE_INTEGER,c[C][1]=0);c.sort(k3);const y=d.morphAttributes.position,m=d.morphAttributes.normal;let w=0;for(let C=0;C<8;C++){const b=c[C],I=b[0],O=b[1];I!==Number.MAX_SAFE_INTEGER&&O?(y&&d.getAttribute("morphTarget"+C)!==y[I]&&d.setAttribute("morphTarget"+C,y[I]),m&&d.getAttribute("morphNormal"+C)!==m[I]&&d.setAttribute("morphNormal"+C,m[I]),r[C]=O,w+=O):(y&&d.hasAttribute("morphTarget"+C)===!0&&d.deleteAttribute("morphTarget"+C),m&&d.hasAttribute("morphNormal"+C)===!0&&d.deleteAttribute("morphNormal"+C),r[C]=0)}const T=d.morphTargetsRelative?1:1-w;p.getUniforms().setValue(i,"morphTargetBaseInfluence",T),p.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:u}}function G3(i,e,t,n){let r=new WeakMap;function s(u){const h=n.render.frame,d=u.geometry,p=e.get(u,d);return r.get(p)!==h&&(e.update(p),r.set(p,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",c)===!1&&u.addEventListener("dispose",c),t.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&t.update(u.instanceColor,i.ARRAY_BUFFER)),p}function a(){r=new WeakMap}function c(u){const h=u.target;h.removeEventListener("dispose",c),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:a}}const AS=new Mi,CS=new mS,RS=new PO,PS=new TS,Bx=[],kx=[],zx=new Float32Array(16),Hx=new Float32Array(9),Gx=new Float32Array(4);function ll(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=Bx[r];if(s===void 0&&(s=new Float32Array(r),Bx[r]=s),e!==0){n.toArray(s,0);for(let a=1,c=0;a!==e;++a)c+=t,i[a].toArray(s,c)}return s}function _n(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function mn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qh(i,e){let t=kx[e];t===void 0&&(t=new Int32Array(e),kx[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function W3(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function V3(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2fv(this.addr,e),mn(t,e)}}function X3(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(_n(t,e))return;i.uniform3fv(this.addr,e),mn(t,e)}}function q3(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4fv(this.addr,e),mn(t,e)}}function Y3(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),mn(t,e)}else{if(_n(t,n))return;Gx.set(n),i.uniformMatrix2fv(this.addr,!1,Gx),mn(t,n)}}function $3(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),mn(t,e)}else{if(_n(t,n))return;Hx.set(n),i.uniformMatrix3fv(this.addr,!1,Hx),mn(t,n)}}function K3(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(_n(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),mn(t,e)}else{if(_n(t,n))return;zx.set(n),i.uniformMatrix4fv(this.addr,!1,zx),mn(t,n)}}function j3(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Z3(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2iv(this.addr,e),mn(t,e)}}function Q3(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;i.uniform3iv(this.addr,e),mn(t,e)}}function J3(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4iv(this.addr,e),mn(t,e)}}function eB(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tB(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(_n(t,e))return;i.uniform2uiv(this.addr,e),mn(t,e)}}function nB(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(_n(t,e))return;i.uniform3uiv(this.addr,e),mn(t,e)}}function iB(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(_n(t,e))return;i.uniform4uiv(this.addr,e),mn(t,e)}}function rB(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||AS,r)}function sB(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||RS,r)}function oB(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||PS,r)}function aB(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||CS,r)}function lB(i){switch(i){case 5126:return W3;case 35664:return V3;case 35665:return X3;case 35666:return q3;case 35674:return Y3;case 35675:return $3;case 35676:return K3;case 5124:case 35670:return j3;case 35667:case 35671:return Z3;case 35668:case 35672:return Q3;case 35669:case 35673:return J3;case 5125:return eB;case 36294:return tB;case 36295:return nB;case 36296:return iB;case 35678:case 36198:case 36298:case 36306:case 35682:return rB;case 35679:case 36299:case 36307:return sB;case 35680:case 36300:case 36308:case 36293:return oB;case 36289:case 36303:case 36311:case 36292:return aB}}function cB(i,e){i.uniform1fv(this.addr,e)}function uB(i,e){const t=ll(e,this.size,2);i.uniform2fv(this.addr,t)}function hB(i,e){const t=ll(e,this.size,3);i.uniform3fv(this.addr,t)}function fB(i,e){const t=ll(e,this.size,4);i.uniform4fv(this.addr,t)}function dB(i,e){const t=ll(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function pB(i,e){const t=ll(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _B(i,e){const t=ll(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mB(i,e){i.uniform1iv(this.addr,e)}function gB(i,e){i.uniform2iv(this.addr,e)}function vB(i,e){i.uniform3iv(this.addr,e)}function xB(i,e){i.uniform4iv(this.addr,e)}function yB(i,e){i.uniform1uiv(this.addr,e)}function EB(i,e){i.uniform2uiv(this.addr,e)}function SB(i,e){i.uniform3uiv(this.addr,e)}function MB(i,e){i.uniform4uiv(this.addr,e)}function TB(i,e,t){const n=this.cache,r=e.length,s=Qh(t,r);_n(n,s)||(i.uniform1iv(this.addr,s),mn(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||AS,s[a])}function wB(i,e,t){const n=this.cache,r=e.length,s=Qh(t,r);_n(n,s)||(i.uniform1iv(this.addr,s),mn(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||RS,s[a])}function bB(i,e,t){const n=this.cache,r=e.length,s=Qh(t,r);_n(n,s)||(i.uniform1iv(this.addr,s),mn(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||PS,s[a])}function AB(i,e,t){const n=this.cache,r=e.length,s=Qh(t,r);_n(n,s)||(i.uniform1iv(this.addr,s),mn(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||CS,s[a])}function CB(i){switch(i){case 5126:return cB;case 35664:return uB;case 35665:return hB;case 35666:return fB;case 35674:return dB;case 35675:return pB;case 35676:return _B;case 5124:case 35670:return mB;case 35667:case 35671:return gB;case 35668:case 35672:return vB;case 35669:case 35673:return xB;case 5125:return yB;case 36294:return EB;case 36295:return SB;case 36296:return MB;case 35678:case 36198:case 36298:case 36306:case 35682:return TB;case 35679:case 36299:case 36307:return wB;case 35680:case 36300:case 36308:case 36293:return bB;case 36289:case 36303:case 36311:case 36292:return AB}}class RB{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=lB(t.type)}}class PB{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=CB(t.type)}}class IB{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const c=r[s];c.setValue(e,t[c.id],n)}}}const ep=/(\w+)(\])?(\[|\.)?/g;function Wx(i,e){i.seq.push(e),i.map[e.id]=e}function LB(i,e,t){const n=i.name,r=n.length;for(ep.lastIndex=0;;){const s=ep.exec(n),a=ep.lastIndex;let c=s[1];const u=s[2]==="]",h=s[3];if(u&&(c=c|0),h===void 0||h==="["&&a+2===r){Wx(t,h===void 0?new RB(c,i,e):new PB(c,i,e));break}else{let p=t.map[c];p===void 0&&(p=new IB(c),Wx(t,p)),t=p}}}class $u{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);LB(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const c=t[s],u=n[c.id];u.needsUpdate!==!1&&c.setValue(e,u.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function Vx(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let DB=0;function NB(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const c=a+1;n.push(`${c===e?">":" "} ${c}: ${t[a]}`)}return n.join(`
`)}function OB(i){switch(i){case Rr:return["Linear","( value )"];case rt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function Xx(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+NB(i.getShaderSource(e),a)}else return r}function UB(i,e){const t=OB(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function FB(i,e){let t;switch(e){case j2:t="Linear";break;case Z2:t="Reinhard";break;case Q2:t="OptimizedCineon";break;case J2:t="ACESFilmic";break;case eO:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function BB(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(zl).join(`
`)}function kB(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function zB(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let c=1;s.type===i.FLOAT_MAT2&&(c=2),s.type===i.FLOAT_MAT3&&(c=3),s.type===i.FLOAT_MAT4&&(c=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:c}}return t}function zl(i){return i!==""}function qx(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yx(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const HB=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yp(i){return i.replace(HB,GB)}function GB(i,e){const t=ct[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Yp(t)}const WB=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $x(i){return i.replace(WB,VB)}function VB(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Kx(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function XB(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===oS?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===C2?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yr&&(e="SHADOWMAP_TYPE_VSM"),e}function qB(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Va:case Xa:e="ENVMAP_TYPE_CUBE";break;case jh:e="ENVMAP_TYPE_CUBE_UV";break}return e}function YB(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Xa:e="ENVMAP_MODE_REFRACTION";break}return e}function $B(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case j_:e="ENVMAP_BLENDING_MULTIPLY";break;case $2:e="ENVMAP_BLENDING_MIX";break;case K2:e="ENVMAP_BLENDING_ADD";break}return e}function KB(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function jB(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,c=t.fragmentShader;const u=XB(t),h=qB(t),d=YB(t),p=$B(t),_=KB(t),g=t.isWebGL2?"":BB(t),E=kB(s),x=r.createProgram();let y,m,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=[E].filter(zl).join(`
`),y.length>0&&(y+=`
`),m=[g,E].filter(zl).join(`
`),m.length>0&&(m+=`
`)):(y=[Kx(t),"#define SHADER_NAME "+t.shaderName,E,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zl).join(`
`),m=[g,Kx(t),"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMap?"#define "+p:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ns?"#define TONE_MAPPING":"",t.toneMapping!==ns?ct.tonemapping_pars_fragment:"",t.toneMapping!==ns?FB("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ct.encodings_pars_fragment,UB("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(zl).join(`
`)),a=Yp(a),a=qx(a,t),a=Yx(a,t),c=Yp(c),c=qx(c,t),c=Yx(c,t),a=$x(a),c=$x(c),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,y=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,m=["#define varying in",t.glslVersion===px?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===px?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const T=w+y+a,C=w+m+c,b=Vx(r,r.VERTEX_SHADER,T),I=Vx(r,r.FRAGMENT_SHADER,C);if(r.attachShader(x,b),r.attachShader(x,I),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x),i.debug.checkShaderErrors){const M=r.getProgramInfoLog(x).trim(),L=r.getShaderInfoLog(b).trim(),Q=r.getShaderInfoLog(I).trim();let te=!0,W=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,x,b,I);else{const $=Xx(r,b,"vertex"),j=Xx(r,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+$+`
`+j)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(L===""||Q==="")&&(W=!1);W&&(this.diagnostics={runnable:te,programLog:M,vertexShader:{log:L,prefix:y},fragmentShader:{log:Q,prefix:m}})}r.deleteShader(b),r.deleteShader(I);let O;this.getUniforms=function(){return O===void 0&&(O=new $u(r,x)),O};let B;return this.getAttributes=function(){return B===void 0&&(B=zB(r,x)),B},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.name=t.shaderName,this.id=DB++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=I,this}let ZB=0;class QB{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new JB(e),t.set(e,n)),n}}class JB{constructor(e){this.id=ZB++,this.code=e,this.usedTimes=0}}function ek(i,e,t,n,r,s,a){const c=new gS,u=new QB,h=[],d=r.isWebGL2,p=r.logarithmicDepthBuffer,_=r.vertexTextures;let g=r.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===1?"uv1":M===2?"uv2":M===3?"uv3":"uv"}function y(M,L,Q,te,W){const $=te.fog,j=W.geometry,le=M.isMeshStandardMaterial?te.environment:null,J=(M.isMeshStandardMaterial?t:e).get(M.envMap||le),ne=J&&J.mapping===jh?J.image.height:null,ge=E[M.type];M.precision!==null&&(g=r.getMaxPrecision(M.precision),g!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",g,"instead."));const he=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,Ie=he!==void 0?he.length:0;let ye=0;j.morphAttributes.position!==void 0&&(ye=1),j.morphAttributes.normal!==void 0&&(ye=2),j.morphAttributes.color!==void 0&&(ye=3);let ie,ce,H,_e;if(ge){const Rt=Er[ge];ie=Rt.vertexShader,ce=Rt.fragmentShader}else ie=M.vertexShader,ce=M.fragmentShader,u.update(M),H=u.getVertexShaderID(M),_e=u.getFragmentShaderID(M);const F=i.getRenderTarget(),Pe=W.isInstancedMesh===!0,Ce=!!M.map,Ee=!!M.matcap,ze=!!J,st=!!M.aoMap,Ue=!!M.lightMap,Ge=!!M.bumpMap,Lt=!!M.normalMap,Gt=!!M.displacementMap,Tt=!!M.emissiveMap,Vt=!!M.metalnessMap,yt=!!M.roughnessMap,Et=M.clearcoat>0,Dt=M.iridescence>0,N=M.sheen>0,P=M.transmission>0,re=Et&&!!M.clearcoatMap,ve=Et&&!!M.clearcoatNormalMap,Se=Et&&!!M.clearcoatRoughnessMap,Te=Dt&&!!M.iridescenceMap,k=Dt&&!!M.iridescenceThicknessMap,fe=N&&!!M.sheenColorMap,ee=N&&!!M.sheenRoughnessMap,we=!!M.specularMap,De=!!M.specularColorMap,Fe=!!M.specularIntensityMap,Re=P&&!!M.transmissionMap,Oe=P&&!!M.thicknessMap,Ke=!!M.gradientMap,Je=!!M.alphaMap,Yt=M.alphaTest>0,G=!!M.extensions,se=!!j.attributes.uv1,xe=!!j.attributes.uv2,Le=!!j.attributes.uv3;return{isWebGL2:d,shaderID:ge,shaderName:M.type,vertexShader:ie,fragmentShader:ce,defines:M.defines,customVertexShaderID:H,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:g,instancing:Pe,instancingColor:Pe&&W.instanceColor!==null,supportsVertexTextures:_,outputColorSpace:F===null?i.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Rr,map:Ce,matcap:Ee,envMap:ze,envMapMode:ze&&J.mapping,envMapCubeUVHeight:ne,aoMap:st,lightMap:Ue,bumpMap:Ge,normalMap:Lt,displacementMap:_&&Gt,emissiveMap:Tt,normalMapObjectSpace:Lt&&M.normalMapType===xO,normalMapTangentSpace:Lt&&M.normalMapType===Z_,metalnessMap:Vt,roughnessMap:yt,clearcoat:Et,clearcoatMap:re,clearcoatNormalMap:ve,clearcoatRoughnessMap:Se,iridescence:Dt,iridescenceMap:Te,iridescenceThicknessMap:k,sheen:N,sheenColorMap:fe,sheenRoughnessMap:ee,specularMap:we,specularColorMap:De,specularIntensityMap:Fe,transmission:P,transmissionMap:Re,thicknessMap:Oe,gradientMap:Ke,opaque:M.transparent===!1&&M.blending===La,alphaMap:Je,alphaTest:Yt,combine:M.combine,mapUv:Ce&&x(M.map.channel),aoMapUv:st&&x(M.aoMap.channel),lightMapUv:Ue&&x(M.lightMap.channel),bumpMapUv:Ge&&x(M.bumpMap.channel),normalMapUv:Lt&&x(M.normalMap.channel),displacementMapUv:Gt&&x(M.displacementMap.channel),emissiveMapUv:Tt&&x(M.emissiveMap.channel),metalnessMapUv:Vt&&x(M.metalnessMap.channel),roughnessMapUv:yt&&x(M.roughnessMap.channel),clearcoatMapUv:re&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Se&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:k&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:ee&&x(M.sheenRoughnessMap.channel),specularMapUv:we&&x(M.specularMap.channel),specularColorMapUv:De&&x(M.specularColorMap.channel),specularIntensityMapUv:Fe&&x(M.specularIntensityMap.channel),transmissionMapUv:Re&&x(M.transmissionMap.channel),thicknessMapUv:Oe&&x(M.thicknessMap.channel),alphaMapUv:Je&&x(M.alphaMap.channel),vertexTangents:Lt&&!!j.attributes.tangent,vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,vertexUv1s:se,vertexUv2s:xe,vertexUv3s:Le,pointsUvs:W.isPoints===!0&&!!j.attributes.uv&&(Ce||Je),fog:!!$,useFog:M.fog===!0,fogExp2:$&&$.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:p,skinning:W.isSkinnedMesh===!0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:Ie,morphTextureStride:ye,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&Q.length>0,shadowMapType:i.shadowMap.type,toneMapping:M.toneMapped?i.toneMapping:ns,useLegacyLights:i.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===jr,flipSided:M.side===ri,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:G&&M.extensions.derivatives===!0,extensionFragDepth:G&&M.extensions.fragDepth===!0,extensionDrawBuffers:G&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:G&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:d||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:d||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:d||n.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function m(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const Q in M.defines)L.push(Q),L.push(M.defines[Q]);return M.isRawShaderMaterial===!1&&(w(L,M),T(L,M),L.push(i.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function w(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function T(M,L){c.disableAll(),L.isWebGL2&&c.enable(0),L.supportsVertexTextures&&c.enable(1),L.instancing&&c.enable(2),L.instancingColor&&c.enable(3),L.matcap&&c.enable(4),L.envMap&&c.enable(5),L.normalMapObjectSpace&&c.enable(6),L.normalMapTangentSpace&&c.enable(7),L.clearcoat&&c.enable(8),L.iridescence&&c.enable(9),L.alphaTest&&c.enable(10),L.vertexColors&&c.enable(11),L.vertexAlphas&&c.enable(12),L.vertexUv1s&&c.enable(13),L.vertexUv2s&&c.enable(14),L.vertexUv3s&&c.enable(15),L.vertexTangents&&c.enable(16),M.push(c.mask),c.disableAll(),L.fog&&c.enable(0),L.useFog&&c.enable(1),L.flatShading&&c.enable(2),L.logarithmicDepthBuffer&&c.enable(3),L.skinning&&c.enable(4),L.morphTargets&&c.enable(5),L.morphNormals&&c.enable(6),L.morphColors&&c.enable(7),L.premultipliedAlpha&&c.enable(8),L.shadowMapEnabled&&c.enable(9),L.useLegacyLights&&c.enable(10),L.doubleSided&&c.enable(11),L.flipSided&&c.enable(12),L.useDepthPacking&&c.enable(13),L.dithering&&c.enable(14),L.transmission&&c.enable(15),L.sheen&&c.enable(16),L.opaque&&c.enable(17),L.pointsUvs&&c.enable(18),M.push(c.mask)}function C(M){const L=E[M.type];let Q;if(L){const te=Er[L];Q=WO.clone(te.uniforms)}else Q=M.uniforms;return Q}function b(M,L){let Q;for(let te=0,W=h.length;te<W;te++){const $=h[te];if($.cacheKey===L){Q=$,++Q.usedTimes;break}}return Q===void 0&&(Q=new jB(i,L,M,s),h.push(Q)),Q}function I(M){if(--M.usedTimes===0){const L=h.indexOf(M);h[L]=h[h.length-1],h.pop(),M.destroy()}}function O(M){u.remove(M)}function B(){u.dispose()}return{getParameters:y,getProgramCacheKey:m,getUniforms:C,acquireProgram:b,releaseProgram:I,releaseShaderCache:O,programs:h,dispose:B}}function tk(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,c){i.get(s)[a]=c}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function nk(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function jx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zx(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(p,_,g,E,x,y){let m=i[e];return m===void 0?(m={id:p.id,object:p,geometry:_,material:g,groupOrder:E,renderOrder:p.renderOrder,z:x,group:y},i[e]=m):(m.id=p.id,m.object=p,m.geometry=_,m.material=g,m.groupOrder=E,m.renderOrder=p.renderOrder,m.z=x,m.group=y),e++,m}function c(p,_,g,E,x,y){const m=a(p,_,g,E,x,y);g.transmission>0?n.push(m):g.transparent===!0?r.push(m):t.push(m)}function u(p,_,g,E,x,y){const m=a(p,_,g,E,x,y);g.transmission>0?n.unshift(m):g.transparent===!0?r.unshift(m):t.unshift(m)}function h(p,_){t.length>1&&t.sort(p||nk),n.length>1&&n.sort(_||jx),r.length>1&&r.sort(_||jx)}function d(){for(let p=e,_=i.length;p<_;p++){const g=i[p];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:u,finish:d,sort:h}}function ik(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new Zx,i.set(n,[a])):r>=s.length?(a=new Zx,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function rk(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new Y,color:new At};break;case"SpotLight":t={position:new Y,direction:new Y,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Y,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Y,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return i[e.id]=t,t}}}function sk(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new et,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ok=0;function ak(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function lk(i,e){const t=new rk,n=sk(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let d=0;d<9;d++)r.probe.push(new Y);const s=new Y,a=new pn,c=new pn;function u(d,p){let _=0,g=0,E=0;for(let Q=0;Q<9;Q++)r.probe[Q].set(0,0,0);let x=0,y=0,m=0,w=0,T=0,C=0,b=0,I=0,O=0,B=0;d.sort(ak);const M=p===!0?Math.PI:1;for(let Q=0,te=d.length;Q<te;Q++){const W=d[Q],$=W.color,j=W.intensity,le=W.distance,J=W.shadow&&W.shadow.map?W.shadow.map.texture:null;if(W.isAmbientLight)_+=$.r*j*M,g+=$.g*j*M,E+=$.b*j*M;else if(W.isLightProbe)for(let ne=0;ne<9;ne++)r.probe[ne].addScaledVector(W.sh.coefficients[ne],j);else if(W.isDirectionalLight){const ne=t.get(W);if(ne.color.copy(W.color).multiplyScalar(W.intensity*M),W.castShadow){const ge=W.shadow,he=n.get(W);he.shadowBias=ge.bias,he.shadowNormalBias=ge.normalBias,he.shadowRadius=ge.radius,he.shadowMapSize=ge.mapSize,r.directionalShadow[x]=he,r.directionalShadowMap[x]=J,r.directionalShadowMatrix[x]=W.shadow.matrix,C++}r.directional[x]=ne,x++}else if(W.isSpotLight){const ne=t.get(W);ne.position.setFromMatrixPosition(W.matrixWorld),ne.color.copy($).multiplyScalar(j*M),ne.distance=le,ne.coneCos=Math.cos(W.angle),ne.penumbraCos=Math.cos(W.angle*(1-W.penumbra)),ne.decay=W.decay,r.spot[m]=ne;const ge=W.shadow;if(W.map&&(r.spotLightMap[O]=W.map,O++,ge.updateMatrices(W),W.castShadow&&B++),r.spotLightMatrix[m]=ge.matrix,W.castShadow){const he=n.get(W);he.shadowBias=ge.bias,he.shadowNormalBias=ge.normalBias,he.shadowRadius=ge.radius,he.shadowMapSize=ge.mapSize,r.spotShadow[m]=he,r.spotShadowMap[m]=J,I++}m++}else if(W.isRectAreaLight){const ne=t.get(W);ne.color.copy($).multiplyScalar(j),ne.halfWidth.set(W.width*.5,0,0),ne.halfHeight.set(0,W.height*.5,0),r.rectArea[w]=ne,w++}else if(W.isPointLight){const ne=t.get(W);if(ne.color.copy(W.color).multiplyScalar(W.intensity*M),ne.distance=W.distance,ne.decay=W.decay,W.castShadow){const ge=W.shadow,he=n.get(W);he.shadowBias=ge.bias,he.shadowNormalBias=ge.normalBias,he.shadowRadius=ge.radius,he.shadowMapSize=ge.mapSize,he.shadowCameraNear=ge.camera.near,he.shadowCameraFar=ge.camera.far,r.pointShadow[y]=he,r.pointShadowMap[y]=J,r.pointShadowMatrix[y]=W.shadow.matrix,b++}r.point[y]=ne,y++}else if(W.isHemisphereLight){const ne=t.get(W);ne.skyColor.copy(W.color).multiplyScalar(j*M),ne.groundColor.copy(W.groundColor).multiplyScalar(j*M),r.hemi[T]=ne,T++}}w>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=be.LTC_FLOAT_1,r.rectAreaLTC2=be.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=be.LTC_HALF_1,r.rectAreaLTC2=be.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=E;const L=r.hash;(L.directionalLength!==x||L.pointLength!==y||L.spotLength!==m||L.rectAreaLength!==w||L.hemiLength!==T||L.numDirectionalShadows!==C||L.numPointShadows!==b||L.numSpotShadows!==I||L.numSpotMaps!==O)&&(r.directional.length=x,r.spot.length=m,r.rectArea.length=w,r.point.length=y,r.hemi.length=T,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=I,r.spotShadowMap.length=I,r.directionalShadowMatrix.length=C,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=I+O-B,r.spotLightMap.length=O,r.numSpotLightShadowsWithMaps=B,L.directionalLength=x,L.pointLength=y,L.spotLength=m,L.rectAreaLength=w,L.hemiLength=T,L.numDirectionalShadows=C,L.numPointShadows=b,L.numSpotShadows=I,L.numSpotMaps=O,r.version=ok++)}function h(d,p){let _=0,g=0,E=0,x=0,y=0;const m=p.matrixWorldInverse;for(let w=0,T=d.length;w<T;w++){const C=d[w];if(C.isDirectionalLight){const b=r.directional[_];b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),_++}else if(C.isSpotLight){const b=r.spot[E];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),b.direction.sub(s),b.direction.transformDirection(m),E++}else if(C.isRectAreaLight){const b=r.rectArea[x];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),c.identity(),a.copy(C.matrixWorld),a.premultiply(m),c.extractRotation(a),b.halfWidth.set(C.width*.5,0,0),b.halfHeight.set(0,C.height*.5,0),b.halfWidth.applyMatrix4(c),b.halfHeight.applyMatrix4(c),x++}else if(C.isPointLight){const b=r.point[g];b.position.setFromMatrixPosition(C.matrixWorld),b.position.applyMatrix4(m),g++}else if(C.isHemisphereLight){const b=r.hemi[y];b.direction.setFromMatrixPosition(C.matrixWorld),b.direction.transformDirection(m),y++}}}return{setup:u,setupView:h,state:r}}function Qx(i,e){const t=new lk(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(p){n.push(p)}function c(p){r.push(p)}function u(p){t.setup(n,p)}function h(p){t.setupView(n,p)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:u,setupLightsView:h,pushLight:a,pushShadow:c}}function ck(i,e){let t=new WeakMap;function n(s,a=0){const c=t.get(s);let u;return c===void 0?(u=new Qx(i,e),t.set(s,[u])):a>=c.length?(u=new Qx(i,e),c.push(u)):u=c[a],u}function r(){t=new WeakMap}return{get:n,dispose:r}}class uk extends al{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gO,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hk extends al{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const fk=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,dk=`uniform sampler2D shadow_pass;
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
}`;function pk(i,e,t){let n=new J_;const r=new et,s=new et,a=new Tn,c=new uk({depthPacking:vO}),u=new hk,h={},d=t.maxTextureSize,p={[Gs]:ri,[ri]:Gs,[jr]:jr},_=new Oo({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new et},radius:{value:4}},vertexShader:fk,fragmentShader:dk}),g=_.clone();g.defines.HORIZONTAL_PASS=1;const E=new os;E.setAttribute("position",new wr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Qr(E,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oS;let m=this.type;this.render=function(b,I,O){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||b.length===0)return;const B=i.getRenderTarget(),M=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),Q=i.state;Q.setBlending(Is),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const te=m!==Yr&&this.type===Yr,W=m===Yr&&this.type!==Yr;for(let $=0,j=b.length;$<j;$++){const le=b[$],J=le.shadow;if(J===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(J.autoUpdate===!1&&J.needsUpdate===!1)continue;r.copy(J.mapSize);const ne=J.getFrameExtents();if(r.multiply(ne),s.copy(J.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/ne.x),r.x=s.x*ne.x,J.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/ne.y),r.y=s.y*ne.y,J.mapSize.y=s.y)),J.map===null||te===!0||W===!0){const he=this.type!==Yr?{minFilter:qn,magFilter:qn}:{};J.map!==null&&J.map.dispose(),J.map=new Do(r.x,r.y,he),J.map.texture.name=le.name+".shadowMap",J.camera.updateProjectionMatrix()}i.setRenderTarget(J.map),i.clear();const ge=J.getViewportCount();for(let he=0;he<ge;he++){const Ie=J.getViewport(he);a.set(s.x*Ie.x,s.y*Ie.y,s.x*Ie.z,s.y*Ie.w),Q.viewport(a),J.updateMatrices(le,he),n=J.getFrustum(),C(I,O,J.camera,le,this.type)}J.isPointLightShadow!==!0&&this.type===Yr&&w(J,O),J.needsUpdate=!1}m=this.type,y.needsUpdate=!1,i.setRenderTarget(B,M,L)};function w(b,I){const O=e.update(x);_.defines.VSM_SAMPLES!==b.blurSamples&&(_.defines.VSM_SAMPLES=b.blurSamples,g.defines.VSM_SAMPLES=b.blurSamples,_.needsUpdate=!0,g.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Do(r.x,r.y)),_.uniforms.shadow_pass.value=b.map.texture,_.uniforms.resolution.value=b.mapSize,_.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(I,null,O,_,x,null),g.uniforms.shadow_pass.value=b.mapPass.texture,g.uniforms.resolution.value=b.mapSize,g.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(I,null,O,g,x,null)}function T(b,I,O,B){let M=null;const L=O.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(L!==void 0)M=L;else if(M=O.isPointLight===!0?u:c,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0){const Q=M.uuid,te=I.uuid;let W=h[Q];W===void 0&&(W={},h[Q]=W);let $=W[te];$===void 0&&($=M.clone(),W[te]=$),M=$}if(M.visible=I.visible,M.wireframe=I.wireframe,B===Yr?M.side=I.shadowSide!==null?I.shadowSide:I.side:M.side=I.shadowSide!==null?I.shadowSide:p[I.side],M.alphaMap=I.alphaMap,M.alphaTest=I.alphaTest,M.map=I.map,M.clipShadows=I.clipShadows,M.clippingPlanes=I.clippingPlanes,M.clipIntersection=I.clipIntersection,M.displacementMap=I.displacementMap,M.displacementScale=I.displacementScale,M.displacementBias=I.displacementBias,M.wireframeLinewidth=I.wireframeLinewidth,M.linewidth=I.linewidth,O.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const Q=i.properties.get(M);Q.light=O}return M}function C(b,I,O,B,M){if(b.visible===!1)return;if(b.layers.test(I.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&M===Yr)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld);const te=e.update(b),W=b.material;if(Array.isArray(W)){const $=te.groups;for(let j=0,le=$.length;j<le;j++){const J=$[j],ne=W[J.materialIndex];if(ne&&ne.visible){const ge=T(b,ne,B,M);i.renderBufferDirect(O,null,te,ge,b,J)}}}else if(W.visible){const $=T(b,W,B,M);i.renderBufferDirect(O,null,te,$,b,null)}}const Q=b.children;for(let te=0,W=Q.length;te<W;te++)C(Q[te],I,O,B,M)}}function _k(i,e,t){const n=t.isWebGL2;function r(){let G=!1;const se=new Tn;let xe=null;const Le=new Tn(0,0,0,0);return{setMask:function(ke){xe!==ke&&!G&&(i.colorMask(ke,ke,ke,ke),xe=ke)},setLocked:function(ke){G=ke},setClear:function(ke,Rt,Pt,gn,Ji){Ji===!0&&(ke*=gn,Rt*=gn,Pt*=gn),se.set(ke,Rt,Pt,gn),Le.equals(se)===!1&&(i.clearColor(ke,Rt,Pt,gn),Le.copy(se))},reset:function(){G=!1,xe=null,Le.set(-1,0,0,0)}}}function s(){let G=!1,se=null,xe=null,Le=null;return{setTest:function(ke){ke?F(i.DEPTH_TEST):Pe(i.DEPTH_TEST)},setMask:function(ke){se!==ke&&!G&&(i.depthMask(ke),se=ke)},setFunc:function(ke){if(xe!==ke){switch(ke){case H2:i.depthFunc(i.NEVER);break;case G2:i.depthFunc(i.ALWAYS);break;case W2:i.depthFunc(i.LESS);break;case zp:i.depthFunc(i.LEQUAL);break;case V2:i.depthFunc(i.EQUAL);break;case X2:i.depthFunc(i.GEQUAL);break;case q2:i.depthFunc(i.GREATER);break;case Y2:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=ke}},setLocked:function(ke){G=ke},setClear:function(ke){Le!==ke&&(i.clearDepth(ke),Le=ke)},reset:function(){G=!1,se=null,xe=null,Le=null}}}function a(){let G=!1,se=null,xe=null,Le=null,ke=null,Rt=null,Pt=null,gn=null,Ji=null;return{setTest:function($t){G||($t?F(i.STENCIL_TEST):Pe(i.STENCIL_TEST))},setMask:function($t){se!==$t&&!G&&(i.stencilMask($t),se=$t)},setFunc:function($t,Kn,Pi){(xe!==$t||Le!==Kn||ke!==Pi)&&(i.stencilFunc($t,Kn,Pi),xe=$t,Le=Kn,ke=Pi)},setOp:function($t,Kn,Pi){(Rt!==$t||Pt!==Kn||gn!==Pi)&&(i.stencilOp($t,Kn,Pi),Rt=$t,Pt=Kn,gn=Pi)},setLocked:function($t){G=$t},setClear:function($t){Ji!==$t&&(i.clearStencil($t),Ji=$t)},reset:function(){G=!1,se=null,xe=null,Le=null,ke=null,Rt=null,Pt=null,gn=null,Ji=null}}}const c=new r,u=new s,h=new a,d=new WeakMap,p=new WeakMap;let _={},g={},E=new WeakMap,x=[],y=null,m=!1,w=null,T=null,C=null,b=null,I=null,O=null,B=null,M=!1,L=null,Q=null,te=null,W=null,$=null;const j=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,J=0;const ne=i.getParameter(i.VERSION);ne.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(ne)[1]),le=J>=1):ne.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(ne)[1]),le=J>=2);let ge=null,he={};const Ie=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),ie=new Tn().fromArray(Ie),ce=new Tn().fromArray(ye);function H(G,se,xe,Le){const ke=new Uint8Array(4),Rt=i.createTexture();i.bindTexture(G,Rt),i.texParameteri(G,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(G,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Pt=0;Pt<xe;Pt++)n&&(G===i.TEXTURE_3D||G===i.TEXTURE_2D_ARRAY)?i.texImage3D(se,0,i.RGBA,1,1,Le,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(se+Pt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return Rt}const _e={};_e[i.TEXTURE_2D]=H(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=H(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(_e[i.TEXTURE_2D_ARRAY]=H(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=H(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),c.setClear(0,0,0,1),u.setClear(1),h.setClear(0),F(i.DEPTH_TEST),u.setFunc(zp),Gt(!1),Tt(F0),F(i.CULL_FACE),Ge(Is);function F(G){_[G]!==!0&&(i.enable(G),_[G]=!0)}function Pe(G){_[G]!==!1&&(i.disable(G),_[G]=!1)}function Ce(G,se){return g[G]!==se?(i.bindFramebuffer(G,se),g[G]=se,n&&(G===i.DRAW_FRAMEBUFFER&&(g[i.FRAMEBUFFER]=se),G===i.FRAMEBUFFER&&(g[i.DRAW_FRAMEBUFFER]=se)),!0):!1}function Ee(G,se){let xe=x,Le=!1;if(G)if(xe=E.get(se),xe===void 0&&(xe=[],E.set(se,xe)),G.isWebGLMultipleRenderTargets){const ke=G.texture;if(xe.length!==ke.length||xe[0]!==i.COLOR_ATTACHMENT0){for(let Rt=0,Pt=ke.length;Rt<Pt;Rt++)xe[Rt]=i.COLOR_ATTACHMENT0+Rt;xe.length=ke.length,Le=!0}}else xe[0]!==i.COLOR_ATTACHMENT0&&(xe[0]=i.COLOR_ATTACHMENT0,Le=!0);else xe[0]!==i.BACK&&(xe[0]=i.BACK,Le=!0);Le&&(t.isWebGL2?i.drawBuffers(xe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(xe))}function ze(G){return y!==G?(i.useProgram(G),y=G,!0):!1}const st={[wa]:i.FUNC_ADD,[P2]:i.FUNC_SUBTRACT,[I2]:i.FUNC_REVERSE_SUBTRACT};if(n)st[H0]=i.MIN,st[G0]=i.MAX;else{const G=e.get("EXT_blend_minmax");G!==null&&(st[H0]=G.MIN_EXT,st[G0]=G.MAX_EXT)}const Ue={[L2]:i.ZERO,[D2]:i.ONE,[N2]:i.SRC_COLOR,[aS]:i.SRC_ALPHA,[z2]:i.SRC_ALPHA_SATURATE,[B2]:i.DST_COLOR,[U2]:i.DST_ALPHA,[O2]:i.ONE_MINUS_SRC_COLOR,[lS]:i.ONE_MINUS_SRC_ALPHA,[k2]:i.ONE_MINUS_DST_COLOR,[F2]:i.ONE_MINUS_DST_ALPHA};function Ge(G,se,xe,Le,ke,Rt,Pt,gn){if(G===Is){m===!0&&(Pe(i.BLEND),m=!1);return}if(m===!1&&(F(i.BLEND),m=!0),G!==R2){if(G!==w||gn!==M){if((T!==wa||I!==wa)&&(i.blendEquation(i.FUNC_ADD),T=wa,I=wa),gn)switch(G){case La:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case B0:i.blendFunc(i.ONE,i.ONE);break;case k0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case z0:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case La:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case B0:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case k0:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case z0:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}C=null,b=null,O=null,B=null,w=G,M=gn}return}ke=ke||se,Rt=Rt||xe,Pt=Pt||Le,(se!==T||ke!==I)&&(i.blendEquationSeparate(st[se],st[ke]),T=se,I=ke),(xe!==C||Le!==b||Rt!==O||Pt!==B)&&(i.blendFuncSeparate(Ue[xe],Ue[Le],Ue[Rt],Ue[Pt]),C=xe,b=Le,O=Rt,B=Pt),w=G,M=!1}function Lt(G,se){G.side===jr?Pe(i.CULL_FACE):F(i.CULL_FACE);let xe=G.side===ri;se&&(xe=!xe),Gt(xe),G.blending===La&&G.transparent===!1?Ge(Is):Ge(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.premultipliedAlpha),u.setFunc(G.depthFunc),u.setTest(G.depthTest),u.setMask(G.depthWrite),c.setMask(G.colorWrite);const Le=G.stencilWrite;h.setTest(Le),Le&&(h.setMask(G.stencilWriteMask),h.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),h.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),yt(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?F(i.SAMPLE_ALPHA_TO_COVERAGE):Pe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Gt(G){L!==G&&(G?i.frontFace(i.CW):i.frontFace(i.CCW),L=G)}function Tt(G){G!==b2?(F(i.CULL_FACE),G!==Q&&(G===F0?i.cullFace(i.BACK):G===A2?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Pe(i.CULL_FACE),Q=G}function Vt(G){G!==te&&(le&&i.lineWidth(G),te=G)}function yt(G,se,xe){G?(F(i.POLYGON_OFFSET_FILL),(W!==se||$!==xe)&&(i.polygonOffset(se,xe),W=se,$=xe)):Pe(i.POLYGON_OFFSET_FILL)}function Et(G){G?F(i.SCISSOR_TEST):Pe(i.SCISSOR_TEST)}function Dt(G){G===void 0&&(G=i.TEXTURE0+j-1),ge!==G&&(i.activeTexture(G),ge=G)}function N(G,se,xe){xe===void 0&&(ge===null?xe=i.TEXTURE0+j-1:xe=ge);let Le=he[xe];Le===void 0&&(Le={type:void 0,texture:void 0},he[xe]=Le),(Le.type!==G||Le.texture!==se)&&(ge!==xe&&(i.activeTexture(xe),ge=xe),i.bindTexture(G,se||_e[G]),Le.type=G,Le.texture=se)}function P(){const G=he[ge];G!==void 0&&G.type!==void 0&&(i.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ve(){try{i.compressedTexImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Se(){try{i.texSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Te(){try{i.texSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function k(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ee(){try{i.texStorage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function we(){try{i.texStorage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{i.texImage2D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Fe(){try{i.texImage3D.apply(i,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(G){ie.equals(G)===!1&&(i.scissor(G.x,G.y,G.z,G.w),ie.copy(G))}function Oe(G){ce.equals(G)===!1&&(i.viewport(G.x,G.y,G.z,G.w),ce.copy(G))}function Ke(G,se){let xe=p.get(se);xe===void 0&&(xe=new WeakMap,p.set(se,xe));let Le=xe.get(G);Le===void 0&&(Le=i.getUniformBlockIndex(se,G.name),xe.set(G,Le))}function Je(G,se){const Le=p.get(se).get(G);d.get(se)!==Le&&(i.uniformBlockBinding(se,Le,G.__bindingPointIndex),d.set(se,Le))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),_={},ge=null,he={},g={},E=new WeakMap,x=[],y=null,m=!1,w=null,T=null,C=null,b=null,I=null,O=null,B=null,M=!1,L=null,Q=null,te=null,W=null,$=null,ie.set(0,0,i.canvas.width,i.canvas.height),ce.set(0,0,i.canvas.width,i.canvas.height),c.reset(),u.reset(),h.reset()}return{buffers:{color:c,depth:u,stencil:h},enable:F,disable:Pe,bindFramebuffer:Ce,drawBuffers:Ee,useProgram:ze,setBlending:Ge,setMaterial:Lt,setFlipSided:Gt,setCullFace:Tt,setLineWidth:Vt,setPolygonOffset:yt,setScissorTest:Et,activeTexture:Dt,bindTexture:N,unbindTexture:P,compressedTexImage2D:re,compressedTexImage3D:ve,texImage2D:De,texImage3D:Fe,updateUBOMapping:Ke,uniformBlockBinding:Je,texStorage2D:ee,texStorage3D:we,texSubImage2D:Se,texSubImage3D:Te,compressedTexSubImage2D:k,compressedTexSubImage3D:fe,scissor:Re,viewport:Oe,reset:Yt}}function mk(i,e,t,n,r,s,a){const c=r.isWebGL2,u=r.maxTextures,h=r.maxCubemapSize,d=r.maxTextureSize,p=r.maxSamples,_=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,g=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),E=new WeakMap;let x;const y=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function w(N,P){return m?new OffscreenCanvas(N,P):ph("canvas")}function T(N,P,re,ve){let Se=1;if((N.width>ve||N.height>ve)&&(Se=ve/Math.max(N.width,N.height)),Se<1||P===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const Te=P?SO:Math.floor,k=Te(Se*N.width),fe=Te(Se*N.height);x===void 0&&(x=w(k,fe));const ee=re?w(k,fe):x;return ee.width=k,ee.height=fe,ee.getContext("2d").drawImage(N,0,0,k,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+k+"x"+fe+")."),ee}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function C(N){return _x(N.width)&&_x(N.height)}function b(N){return c?!1:N.wrapS!==ur||N.wrapT!==ur||N.minFilter!==qn&&N.minFilter!==Wi}function I(N,P){return N.generateMipmaps&&P&&N.minFilter!==qn&&N.minFilter!==Wi}function O(N){i.generateMipmap(N)}function B(N,P,re,ve,Se=!1){if(c===!1)return P;if(N!==null){if(i[N]!==void 0)return i[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let Te=P;return P===i.RED&&(re===i.FLOAT&&(Te=i.R32F),re===i.HALF_FLOAT&&(Te=i.R16F),re===i.UNSIGNED_BYTE&&(Te=i.R8)),P===i.RG&&(re===i.FLOAT&&(Te=i.RG32F),re===i.HALF_FLOAT&&(Te=i.RG16F),re===i.UNSIGNED_BYTE&&(Te=i.RG8)),P===i.RGBA&&(re===i.FLOAT&&(Te=i.RGBA32F),re===i.HALF_FLOAT&&(Te=i.RGBA16F),re===i.UNSIGNED_BYTE&&(Te=ve===rt&&Se===!1?i.SRGB8_ALPHA8:i.RGBA8),re===i.UNSIGNED_SHORT_4_4_4_4&&(Te=i.RGBA4),re===i.UNSIGNED_SHORT_5_5_5_1&&(Te=i.RGB5_A1)),(Te===i.R16F||Te===i.R32F||Te===i.RG16F||Te===i.RG32F||Te===i.RGBA16F||Te===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Te}function M(N,P,re){return I(N,re)===!0||N.isFramebufferTexture&&N.minFilter!==qn&&N.minFilter!==Wi?Math.log2(Math.max(P.width,P.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?P.mipmaps.length:1}function L(N){return N===qn||N===W0||N===bd?i.NEAREST:i.LINEAR}function Q(N){const P=N.target;P.removeEventListener("dispose",Q),W(P),P.isVideoTexture&&E.delete(P)}function te(N){const P=N.target;P.removeEventListener("dispose",te),j(P)}function W(N){const P=n.get(N);if(P.__webglInit===void 0)return;const re=N.source,ve=y.get(re);if(ve){const Se=ve[P.__cacheKey];Se.usedTimes--,Se.usedTimes===0&&$(N),Object.keys(ve).length===0&&y.delete(re)}n.remove(N)}function $(N){const P=n.get(N);i.deleteTexture(P.__webglTexture);const re=N.source,ve=y.get(re);delete ve[P.__cacheKey],a.memory.textures--}function j(N){const P=N.texture,re=n.get(N),ve=n.get(P);if(ve.__webglTexture!==void 0&&(i.deleteTexture(ve.__webglTexture),a.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let Se=0;Se<6;Se++)i.deleteFramebuffer(re.__webglFramebuffer[Se]),re.__webglDepthbuffer&&i.deleteRenderbuffer(re.__webglDepthbuffer[Se]);else{if(i.deleteFramebuffer(re.__webglFramebuffer),re.__webglDepthbuffer&&i.deleteRenderbuffer(re.__webglDepthbuffer),re.__webglMultisampledFramebuffer&&i.deleteFramebuffer(re.__webglMultisampledFramebuffer),re.__webglColorRenderbuffer)for(let Se=0;Se<re.__webglColorRenderbuffer.length;Se++)re.__webglColorRenderbuffer[Se]&&i.deleteRenderbuffer(re.__webglColorRenderbuffer[Se]);re.__webglDepthRenderbuffer&&i.deleteRenderbuffer(re.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let Se=0,Te=P.length;Se<Te;Se++){const k=n.get(P[Se]);k.__webglTexture&&(i.deleteTexture(k.__webglTexture),a.memory.textures--),n.remove(P[Se])}n.remove(P),n.remove(N)}let le=0;function J(){le=0}function ne(){const N=le;return N>=u&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+u),le+=1,N}function ge(N){const P=[];return P.push(N.wrapS),P.push(N.wrapT),P.push(N.wrapR||0),P.push(N.magFilter),P.push(N.minFilter),P.push(N.anisotropy),P.push(N.internalFormat),P.push(N.format),P.push(N.type),P.push(N.generateMipmaps),P.push(N.premultiplyAlpha),P.push(N.flipY),P.push(N.unpackAlignment),P.push(N.colorSpace),P.join()}function he(N,P){const re=n.get(N);if(N.isVideoTexture&&Et(N),N.isRenderTargetTexture===!1&&N.version>0&&re.__version!==N.version){const ve=N.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(re,N,P);return}}t.bindTexture(i.TEXTURE_2D,re.__webglTexture,i.TEXTURE0+P)}function Ie(N,P){const re=n.get(N);if(N.version>0&&re.__version!==N.version){Pe(re,N,P);return}t.bindTexture(i.TEXTURE_2D_ARRAY,re.__webglTexture,i.TEXTURE0+P)}function ye(N,P){const re=n.get(N);if(N.version>0&&re.__version!==N.version){Pe(re,N,P);return}t.bindTexture(i.TEXTURE_3D,re.__webglTexture,i.TEXTURE0+P)}function ie(N,P){const re=n.get(N);if(N.version>0&&re.__version!==N.version){Ce(re,N,P);return}t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture,i.TEXTURE0+P)}const ce={[Wp]:i.REPEAT,[ur]:i.CLAMP_TO_EDGE,[Vp]:i.MIRRORED_REPEAT},H={[qn]:i.NEAREST,[W0]:i.NEAREST_MIPMAP_NEAREST,[bd]:i.NEAREST_MIPMAP_LINEAR,[Wi]:i.LINEAR,[tO]:i.LINEAR_MIPMAP_NEAREST,[uc]:i.LINEAR_MIPMAP_LINEAR};function _e(N,P,re){if(re?(i.texParameteri(N,i.TEXTURE_WRAP_S,ce[P.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,ce[P.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,ce[P.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,H[P.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,H[P.minFilter])):(i.texParameteri(N,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(N,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(P.wrapS!==ur||P.wrapT!==ur)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(N,i.TEXTURE_MAG_FILTER,L(P.magFilter)),i.texParameteri(N,i.TEXTURE_MIN_FILTER,L(P.minFilter)),P.minFilter!==qn&&P.minFilter!==Wi&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(P.magFilter===qn||P.minFilter!==bd&&P.minFilter!==uc||P.type===vo&&e.has("OES_texture_float_linear")===!1||c===!1&&P.type===hc&&e.has("OES_texture_half_float_linear")===!1)return;(P.anisotropy>1||n.get(P).__currentAnisotropy)&&(i.texParameterf(N,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(P.anisotropy,r.getMaxAnisotropy())),n.get(P).__currentAnisotropy=P.anisotropy)}}function F(N,P){let re=!1;N.__webglInit===void 0&&(N.__webglInit=!0,P.addEventListener("dispose",Q));const ve=P.source;let Se=y.get(ve);Se===void 0&&(Se={},y.set(ve,Se));const Te=ge(P);if(Te!==N.__cacheKey){Se[Te]===void 0&&(Se[Te]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,re=!0),Se[Te].usedTimes++;const k=Se[N.__cacheKey];k!==void 0&&(Se[N.__cacheKey].usedTimes--,k.usedTimes===0&&$(P)),N.__cacheKey=Te,N.__webglTexture=Se[Te].texture}return re}function Pe(N,P,re){let ve=i.TEXTURE_2D;(P.isDataArrayTexture||P.isCompressedArrayTexture)&&(ve=i.TEXTURE_2D_ARRAY),P.isData3DTexture&&(ve=i.TEXTURE_3D);const Se=F(N,P),Te=P.source;t.bindTexture(ve,N.__webglTexture,i.TEXTURE0+re);const k=n.get(Te);if(Te.version!==k.__version||Se===!0){t.activeTexture(i.TEXTURE0+re),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const fe=b(P)&&C(P.image)===!1;let ee=T(P.image,fe,!1,d);ee=Dt(P,ee);const we=C(ee)||c,De=s.convert(P.format,P.colorSpace);let Fe=s.convert(P.type),Re=B(P.internalFormat,De,Fe,P.colorSpace);_e(ve,P,we);let Oe;const Ke=P.mipmaps,Je=c&&P.isVideoTexture!==!0,Yt=k.__version===void 0||Se===!0,G=M(P,ee,we);if(P.isDepthTexture)Re=i.DEPTH_COMPONENT,c?P.type===vo?Re=i.DEPTH_COMPONENT32F:P.type===go?Re=i.DEPTH_COMPONENT24:P.type===Da?Re=i.DEPTH24_STENCIL8:Re=i.DEPTH_COMPONENT16:P.type===vo&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),P.format===Eo&&Re===i.DEPTH_COMPONENT&&P.type!==uS&&P.type!==go&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),P.type=go,Fe=s.convert(P.type)),P.format===qa&&Re===i.DEPTH_COMPONENT&&(Re=i.DEPTH_STENCIL,P.type!==Da&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),P.type=Da,Fe=s.convert(P.type))),Yt&&(Je?t.texStorage2D(i.TEXTURE_2D,1,Re,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Re,ee.width,ee.height,0,De,Fe,null));else if(P.isDataTexture)if(Ke.length>0&&we){Je&&Yt&&t.texStorage2D(i.TEXTURE_2D,G,Re,Ke[0].width,Ke[0].height);for(let se=0,xe=Ke.length;se<xe;se++)Oe=Ke[se],Je?t.texSubImage2D(i.TEXTURE_2D,se,0,0,Oe.width,Oe.height,De,Fe,Oe.data):t.texImage2D(i.TEXTURE_2D,se,Re,Oe.width,Oe.height,0,De,Fe,Oe.data);P.generateMipmaps=!1}else Je?(Yt&&t.texStorage2D(i.TEXTURE_2D,G,Re,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,De,Fe,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Re,ee.width,ee.height,0,De,Fe,ee.data);else if(P.isCompressedTexture)if(P.isCompressedArrayTexture){Je&&Yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,Re,Ke[0].width,Ke[0].height,ee.depth);for(let se=0,xe=Ke.length;se<xe;se++)Oe=Ke[se],P.format!==hr?De!==null?Je?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,ee.depth,De,Oe.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,Re,Oe.width,Oe.height,ee.depth,0,Oe.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,Oe.width,Oe.height,ee.depth,De,Fe,Oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,Re,Oe.width,Oe.height,ee.depth,0,De,Fe,Oe.data)}else{Je&&Yt&&t.texStorage2D(i.TEXTURE_2D,G,Re,Ke[0].width,Ke[0].height);for(let se=0,xe=Ke.length;se<xe;se++)Oe=Ke[se],P.format!==hr?De!==null?Je?t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,Oe.width,Oe.height,De,Oe.data):t.compressedTexImage2D(i.TEXTURE_2D,se,Re,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?t.texSubImage2D(i.TEXTURE_2D,se,0,0,Oe.width,Oe.height,De,Fe,Oe.data):t.texImage2D(i.TEXTURE_2D,se,Re,Oe.width,Oe.height,0,De,Fe,Oe.data)}else if(P.isDataArrayTexture)Je?(Yt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,G,Re,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,De,Fe,ee.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,Re,ee.width,ee.height,ee.depth,0,De,Fe,ee.data);else if(P.isData3DTexture)Je?(Yt&&t.texStorage3D(i.TEXTURE_3D,G,Re,ee.width,ee.height,ee.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,De,Fe,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Re,ee.width,ee.height,ee.depth,0,De,Fe,ee.data);else if(P.isFramebufferTexture){if(Yt)if(Je)t.texStorage2D(i.TEXTURE_2D,G,Re,ee.width,ee.height);else{let se=ee.width,xe=ee.height;for(let Le=0;Le<G;Le++)t.texImage2D(i.TEXTURE_2D,Le,Re,se,xe,0,De,Fe,null),se>>=1,xe>>=1}}else if(Ke.length>0&&we){Je&&Yt&&t.texStorage2D(i.TEXTURE_2D,G,Re,Ke[0].width,Ke[0].height);for(let se=0,xe=Ke.length;se<xe;se++)Oe=Ke[se],Je?t.texSubImage2D(i.TEXTURE_2D,se,0,0,De,Fe,Oe):t.texImage2D(i.TEXTURE_2D,se,Re,De,Fe,Oe);P.generateMipmaps=!1}else Je?(Yt&&t.texStorage2D(i.TEXTURE_2D,G,Re,ee.width,ee.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Fe,ee)):t.texImage2D(i.TEXTURE_2D,0,Re,De,Fe,ee);I(P,we)&&O(ve),k.__version=Te.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function Ce(N,P,re){if(P.image.length!==6)return;const ve=F(N,P),Se=P.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+re);const Te=n.get(Se);if(Se.version!==Te.__version||ve===!0){t.activeTexture(i.TEXTURE0+re),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,P.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,P.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const k=P.isCompressedTexture||P.image[0].isCompressedTexture,fe=P.image[0]&&P.image[0].isDataTexture,ee=[];for(let se=0;se<6;se++)!k&&!fe?ee[se]=T(P.image[se],!1,!0,h):ee[se]=fe?P.image[se].image:P.image[se],ee[se]=Dt(P,ee[se]);const we=ee[0],De=C(we)||c,Fe=s.convert(P.format,P.colorSpace),Re=s.convert(P.type),Oe=B(P.internalFormat,Fe,Re,P.colorSpace),Ke=c&&P.isVideoTexture!==!0,Je=Te.__version===void 0||ve===!0;let Yt=M(P,we,De);_e(i.TEXTURE_CUBE_MAP,P,De);let G;if(k){Ke&&Je&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,Oe,we.width,we.height);for(let se=0;se<6;se++){G=ee[se].mipmaps;for(let xe=0;xe<G.length;xe++){const Le=G[xe];P.format!==hr?Fe!==null?Ke?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,Le.width,Le.height,Fe,Le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,Oe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,0,0,Le.width,Le.height,Fe,Re,Le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe,Oe,Le.width,Le.height,0,Fe,Re,Le.data)}}}else{G=P.mipmaps,Ke&&Je&&(G.length>0&&Yt++,t.texStorage2D(i.TEXTURE_CUBE_MAP,Yt,Oe,ee[0].width,ee[0].height));for(let se=0;se<6;se++)if(fe){Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ee[se].width,ee[se].height,Fe,Re,ee[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Oe,ee[se].width,ee[se].height,0,Fe,Re,ee[se].data);for(let xe=0;xe<G.length;xe++){const ke=G[xe].image[se].image;Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,ke.width,ke.height,Fe,Re,ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,Oe,ke.width,ke.height,0,Fe,Re,ke.data)}}else{Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Fe,Re,ee[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Oe,Fe,Re,ee[se]);for(let xe=0;xe<G.length;xe++){const Le=G[xe];Ke?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,0,0,Fe,Re,Le.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,xe+1,Oe,Fe,Re,Le.image[se])}}}I(P,De)&&O(i.TEXTURE_CUBE_MAP),Te.__version=Se.version,P.onUpdate&&P.onUpdate(P)}N.__version=P.version}function Ee(N,P,re,ve,Se){const Te=s.convert(re.format,re.colorSpace),k=s.convert(re.type),fe=B(re.internalFormat,Te,k,re.colorSpace);n.get(P).__hasExternalTextures||(Se===i.TEXTURE_3D||Se===i.TEXTURE_2D_ARRAY?t.texImage3D(Se,0,fe,P.width,P.height,P.depth,0,Te,k,null):t.texImage2D(Se,0,fe,P.width,P.height,0,Te,k,null)),t.bindFramebuffer(i.FRAMEBUFFER,N),yt(P)?_.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,Se,n.get(re).__webglTexture,0,Vt(P)):(Se===i.TEXTURE_2D||Se>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Se<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ve,Se,n.get(re).__webglTexture,0),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ze(N,P,re){if(i.bindRenderbuffer(i.RENDERBUFFER,N),P.depthBuffer&&!P.stencilBuffer){let ve=i.DEPTH_COMPONENT16;if(re||yt(P)){const Se=P.depthTexture;Se&&Se.isDepthTexture&&(Se.type===vo?ve=i.DEPTH_COMPONENT32F:Se.type===go&&(ve=i.DEPTH_COMPONENT24));const Te=Vt(P);yt(P)?_.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Te,ve,P.width,P.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,Te,ve,P.width,P.height)}else i.renderbufferStorage(i.RENDERBUFFER,ve,P.width,P.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,N)}else if(P.depthBuffer&&P.stencilBuffer){const ve=Vt(P);re&&yt(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ve,i.DEPTH24_STENCIL8,P.width,P.height):yt(P)?_.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ve,i.DEPTH24_STENCIL8,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,N)}else{const ve=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let Se=0;Se<ve.length;Se++){const Te=ve[Se],k=s.convert(Te.format,Te.colorSpace),fe=s.convert(Te.type),ee=B(Te.internalFormat,k,fe,Te.colorSpace),we=Vt(P);re&&yt(P)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,we,ee,P.width,P.height):yt(P)?_.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,we,ee,P.width,P.height):i.renderbufferStorage(i.RENDERBUFFER,ee,P.width,P.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function st(N,P){if(P&&P.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(P.depthTexture&&P.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(P.depthTexture).__webglTexture||P.depthTexture.image.width!==P.width||P.depthTexture.image.height!==P.height)&&(P.depthTexture.image.width=P.width,P.depthTexture.image.height=P.height,P.depthTexture.needsUpdate=!0),he(P.depthTexture,0);const ve=n.get(P.depthTexture).__webglTexture,Se=Vt(P);if(P.depthTexture.format===Eo)yt(P)?_.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,ve,0);else if(P.depthTexture.format===qa)yt(P)?_.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0,Se):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Ue(N){const P=n.get(N),re=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!P.__autoAllocateDepthBuffer){if(re)throw new Error("target.depthTexture not supported in Cube render targets");st(P.__webglFramebuffer,N)}else if(re){P.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer[ve]),P.__webglDepthbuffer[ve]=i.createRenderbuffer(),ze(P.__webglDepthbuffer[ve],N,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,P.__webglFramebuffer),P.__webglDepthbuffer=i.createRenderbuffer(),ze(P.__webglDepthbuffer,N,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ge(N,P,re){const ve=n.get(N);P!==void 0&&Ee(ve.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D),re!==void 0&&Ue(N)}function Lt(N){const P=N.texture,re=n.get(N),ve=n.get(P);N.addEventListener("dispose",te),N.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture()),ve.__version=P.version,a.memory.textures++);const Se=N.isWebGLCubeRenderTarget===!0,Te=N.isWebGLMultipleRenderTargets===!0,k=C(N)||c;if(Se){re.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)re.__webglFramebuffer[fe]=i.createFramebuffer()}else{if(re.__webglFramebuffer=i.createFramebuffer(),Te)if(r.drawBuffers){const fe=N.texture;for(let ee=0,we=fe.length;ee<we;ee++){const De=n.get(fe[ee]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(c&&N.samples>0&&yt(N)===!1){const fe=Te?P:[P];re.__webglMultisampledFramebuffer=i.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let ee=0;ee<fe.length;ee++){const we=fe[ee];re.__webglColorRenderbuffer[ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,re.__webglColorRenderbuffer[ee]);const De=s.convert(we.format,we.colorSpace),Fe=s.convert(we.type),Re=B(we.internalFormat,De,Fe,we.colorSpace,N.isXRRenderTarget===!0),Oe=Vt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Oe,Re,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ee,i.RENDERBUFFER,re.__webglColorRenderbuffer[ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(re.__webglDepthRenderbuffer=i.createRenderbuffer(),ze(re.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Se){t.bindTexture(i.TEXTURE_CUBE_MAP,ve.__webglTexture),_e(i.TEXTURE_CUBE_MAP,P,k);for(let fe=0;fe<6;fe++)Ee(re.__webglFramebuffer[fe],N,P,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+fe);I(P,k)&&O(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Te){const fe=N.texture;for(let ee=0,we=fe.length;ee<we;ee++){const De=fe[ee],Fe=n.get(De);t.bindTexture(i.TEXTURE_2D,Fe.__webglTexture),_e(i.TEXTURE_2D,De,k),Ee(re.__webglFramebuffer,N,De,i.COLOR_ATTACHMENT0+ee,i.TEXTURE_2D),I(De,k)&&O(i.TEXTURE_2D)}t.unbindTexture()}else{let fe=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(c?fe=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(fe,ve.__webglTexture),_e(fe,P,k),Ee(re.__webglFramebuffer,N,P,i.COLOR_ATTACHMENT0,fe),I(P,k)&&O(fe),t.unbindTexture()}N.depthBuffer&&Ue(N)}function Gt(N){const P=C(N)||c,re=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let ve=0,Se=re.length;ve<Se;ve++){const Te=re[ve];if(I(Te,P)){const k=N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,fe=n.get(Te).__webglTexture;t.bindTexture(k,fe),O(k),t.unbindTexture()}}}function Tt(N){if(c&&N.samples>0&&yt(N)===!1){const P=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],re=N.width,ve=N.height;let Se=i.COLOR_BUFFER_BIT;const Te=[],k=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(N),ee=N.isWebGLMultipleRenderTargets===!0;if(ee)for(let we=0;we<P.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let we=0;we<P.length;we++){Te.push(i.COLOR_ATTACHMENT0+we),N.depthBuffer&&Te.push(k);const De=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(De===!1&&(N.depthBuffer&&(Se|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&(Se|=i.STENCIL_BUFFER_BIT)),ee&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[we]),De===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[k]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[k])),ee){const Fe=n.get(P[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Fe,0)}i.blitFramebuffer(0,0,re,ve,0,0,re,ve,Se,i.NEAREST),g&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Te)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ee)for(let we=0;we<P.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,fe.__webglColorRenderbuffer[we]);const De=n.get(P[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,De,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function Vt(N){return Math.min(p,N.samples)}function yt(N){const P=n.get(N);return c&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&P.__useRenderToTexture!==!1}function Et(N){const P=a.render.frame;E.get(N)!==P&&(E.set(N,P),N.update())}function Dt(N,P){const re=N.colorSpace,ve=N.format,Se=N.type;return N.isCompressedTexture===!0||N.format===Xp||re!==Rr&&re!==Mo&&(re===rt?c===!1?e.has("EXT_sRGB")===!0&&ve===hr?(N.format=Xp,N.minFilter=Wi,N.generateMipmaps=!1):P=pS.sRGBToLinear(P):(ve!==hr||Se!==Lo)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",re)),P}this.allocateTextureUnit=ne,this.resetTextureUnits=J,this.setTexture2D=he,this.setTexture2DArray=Ie,this.setTexture3D=ye,this.setTextureCube=ie,this.rebindTextures=Ge,this.setupRenderTarget=Lt,this.updateRenderTargetMipmap=Gt,this.updateMultisampleRenderTarget=Tt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=yt}function gk(i,e,t){const n=t.isWebGL2;function r(s,a=Mo){let c;if(s===Lo)return i.UNSIGNED_BYTE;if(s===sO)return i.UNSIGNED_SHORT_4_4_4_4;if(s===oO)return i.UNSIGNED_SHORT_5_5_5_1;if(s===nO)return i.BYTE;if(s===iO)return i.SHORT;if(s===uS)return i.UNSIGNED_SHORT;if(s===rO)return i.INT;if(s===go)return i.UNSIGNED_INT;if(s===vo)return i.FLOAT;if(s===hc)return n?i.HALF_FLOAT:(c=e.get("OES_texture_half_float"),c!==null?c.HALF_FLOAT_OES:null);if(s===aO)return i.ALPHA;if(s===hr)return i.RGBA;if(s===lO)return i.LUMINANCE;if(s===cO)return i.LUMINANCE_ALPHA;if(s===Eo)return i.DEPTH_COMPONENT;if(s===qa)return i.DEPTH_STENCIL;if(s===Xp)return c=e.get("EXT_sRGB"),c!==null?c.SRGB_ALPHA_EXT:null;if(s===uO)return i.RED;if(s===hO)return i.RED_INTEGER;if(s===fO)return i.RG;if(s===dO)return i.RG_INTEGER;if(s===pO)return i.RGBA_INTEGER;if(s===Ad||s===Cd||s===Rd||s===Pd)if(a===rt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===Ad)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Cd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Rd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pd)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===Ad)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Cd)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Rd)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pd)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===V0||s===X0||s===q0||s===Y0)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===V0)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===X0)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===q0)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Y0)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_O)return c=e.get("WEBGL_compressed_texture_etc1"),c!==null?c.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===$0||s===K0)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===$0)return a===rt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===K0)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===j0||s===Z0||s===Q0||s===J0||s===ex||s===tx||s===nx||s===ix||s===rx||s===sx||s===ox||s===ax||s===lx||s===cx)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===j0)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Z0)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Q0)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===J0)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ex)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===tx)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===nx)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ix)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===rx)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===sx)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ox)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===ax)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===lx)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===cx)return a===rt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Id)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===Id)return a===rt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===mO||s===ux||s===hx||s===fx)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===Id)return c.COMPRESSED_RED_RGTC1_EXT;if(s===ux)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===hx)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===fx)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Da?n?i.UNSIGNED_INT_24_8:(c=e.get("WEBGL_depth_texture"),c!==null?c.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class vk extends Vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Vu extends kn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xk={type:"move"};class tp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const c=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){a=!0;for(const x of e.hand.values()){const y=t.getJointPose(x,n),m=this._getHandJoint(h,x);y!==null&&(m.matrix.fromArray(y.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=y.radius),m.visible=y!==null}const d=h.joints["index-finger-tip"],p=h.joints["thumb-tip"],_=d.position.distanceTo(p.position),g=.02,E=.005;h.inputState.pinching&&_>g+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&_<=g-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));c!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,this.dispatchEvent(xk)))}return c!==null&&(c.visible=r!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vu;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class yk extends Mi{constructor(e,t,n,r,s,a,c,u,h,d){if(d=d!==void 0?d:Eo,d!==Eo&&d!==qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&d===Eo&&(n=go),n===void 0&&d===qa&&(n=Da),super(null,r,s,a,c,u,d,n,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=c!==void 0?c:qn,this.minFilter=u!==void 0?u:qn,this.flipY=!1,this.generateMipmaps=!1}}class Ek extends Ho{constructor(e,t){super();const n=this;let r=null,s=1,a=null,c="local-floor",u=1,h=null,d=null,p=null,_=null,g=null,E=null;const x=t.getContextAttributes();let y=null,m=null;const w=[],T=[],C=new Set,b=new Map,I=new Vi;I.layers.enable(1),I.viewport=new Tn;const O=new Vi;O.layers.enable(2),O.viewport=new Tn;const B=[I,O],M=new vk;M.layers.enable(1),M.layers.enable(2);let L=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let ce=w[ie];return ce===void 0&&(ce=new tp,w[ie]=ce),ce.getTargetRaySpace()},this.getControllerGrip=function(ie){let ce=w[ie];return ce===void 0&&(ce=new tp,w[ie]=ce),ce.getGripSpace()},this.getHand=function(ie){let ce=w[ie];return ce===void 0&&(ce=new tp,w[ie]=ce),ce.getHandSpace()};function te(ie){const ce=T.indexOf(ie.inputSource);if(ce===-1)return;const H=w[ce];H!==void 0&&(H.update(ie.inputSource,ie.frame,h||a),H.dispatchEvent({type:ie.type,data:ie.inputSource}))}function W(){r.removeEventListener("select",te),r.removeEventListener("selectstart",te),r.removeEventListener("selectend",te),r.removeEventListener("squeeze",te),r.removeEventListener("squeezestart",te),r.removeEventListener("squeezeend",te),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let ie=0;ie<w.length;ie++){const ce=T[ie];ce!==null&&(T[ie]=null,w[ie].disconnect(ce))}L=null,Q=null,e.setRenderTarget(y),g=null,_=null,p=null,r=null,m=null,ye.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){c=ie,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(ie){h=ie},this.getBaseLayer=function(){return _!==null?_:g},this.getBinding=function(){return p},this.getFrame=function(){return E},this.getSession=function(){return r},this.setSession=async function(ie){if(r=ie,r!==null){if(y=e.getRenderTarget(),r.addEventListener("select",te),r.addEventListener("selectstart",te),r.addEventListener("selectend",te),r.addEventListener("squeeze",te),r.addEventListener("squeezestart",te),r.addEventListener("squeezeend",te),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ce={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,ce),r.updateRenderState({baseLayer:g}),m=new Do(g.framebufferWidth,g.framebufferHeight,{format:hr,type:Lo,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let ce=null,H=null,_e=null;x.depth&&(_e=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ce=x.stencil?qa:Eo,H=x.stencil?Da:go);const F={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:s};p=new XRWebGLBinding(r,t),_=p.createProjectionLayer(F),r.updateRenderState({layers:[_]}),m=new Do(_.textureWidth,_.textureHeight,{format:hr,type:Lo,depthTexture:new yk(_.textureWidth,_.textureHeight,H,void 0,void 0,void 0,void 0,void 0,void 0,ce),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Pe=e.properties.get(m);Pe.__ignoreDepthValues=_.ignoreDepthValues}m.isXRRenderTarget=!0,this.setFoveation(u),h=null,a=await r.requestReferenceSpace(c),ye.setContext(r),ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(ie){for(let ce=0;ce<ie.removed.length;ce++){const H=ie.removed[ce],_e=T.indexOf(H);_e>=0&&(T[_e]=null,w[_e].disconnect(H))}for(let ce=0;ce<ie.added.length;ce++){const H=ie.added[ce];let _e=T.indexOf(H);if(_e===-1){for(let Pe=0;Pe<w.length;Pe++)if(Pe>=T.length){T.push(H),_e=Pe;break}else if(T[Pe]===null){T[Pe]=H,_e=Pe;break}if(_e===-1)break}const F=w[_e];F&&F.connect(H)}}const j=new Y,le=new Y;function J(ie,ce,H){j.setFromMatrixPosition(ce.matrixWorld),le.setFromMatrixPosition(H.matrixWorld);const _e=j.distanceTo(le),F=ce.projectionMatrix.elements,Pe=H.projectionMatrix.elements,Ce=F[14]/(F[10]-1),Ee=F[14]/(F[10]+1),ze=(F[9]+1)/F[5],st=(F[9]-1)/F[5],Ue=(F[8]-1)/F[0],Ge=(Pe[8]+1)/Pe[0],Lt=Ce*Ue,Gt=Ce*Ge,Tt=_e/(-Ue+Ge),Vt=Tt*-Ue;ce.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Vt),ie.translateZ(Tt),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert();const yt=Ce+Tt,Et=Ee+Tt,Dt=Lt-Vt,N=Gt+(_e-Vt),P=ze*Ee/Et*yt,re=st*Ee/Et*yt;ie.projectionMatrix.makePerspective(Dt,N,P,re,yt,Et),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}function ne(ie,ce){ce===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(ce.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(r===null)return;M.near=O.near=I.near=ie.near,M.far=O.far=I.far=ie.far,(L!==M.near||Q!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),L=M.near,Q=M.far);const ce=ie.parent,H=M.cameras;ne(M,ce);for(let _e=0;_e<H.length;_e++)ne(H[_e],ce);H.length===2?J(M,I,O):M.projectionMatrix.copy(I.projectionMatrix),ge(ie,M,ce)};function ge(ie,ce,H){H===null?ie.matrix.copy(ce.matrixWorld):(ie.matrix.copy(H.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(ce.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0);const _e=ie.children;for(let F=0,Pe=_e.length;F<Pe;F++)_e[F].updateMatrixWorld(!0);ie.projectionMatrix.copy(ce.projectionMatrix),ie.projectionMatrixInverse.copy(ce.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=qp*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(_===null&&g===null))return u},this.setFoveation=function(ie){u=ie,_!==null&&(_.fixedFoveation=ie),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=ie)},this.getPlanes=function(){return C};let he=null;function Ie(ie,ce){if(d=ce.getViewerPose(h||a),E=ce,d!==null){const H=d.views;g!==null&&(e.setRenderTargetFramebuffer(m,g.framebuffer),e.setRenderTarget(m));let _e=!1;H.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let F=0;F<H.length;F++){const Pe=H[F];let Ce=null;if(g!==null)Ce=g.getViewport(Pe);else{const ze=p.getViewSubImage(_,Pe);Ce=ze.viewport,F===0&&(e.setRenderTargetTextures(m,ze.colorTexture,_.ignoreDepthValues?void 0:ze.depthStencilTexture),e.setRenderTarget(m))}let Ee=B[F];Ee===void 0&&(Ee=new Vi,Ee.layers.enable(F),Ee.viewport=new Tn,B[F]=Ee),Ee.matrix.fromArray(Pe.transform.matrix),Ee.matrix.decompose(Ee.position,Ee.quaternion,Ee.scale),Ee.projectionMatrix.fromArray(Pe.projectionMatrix),Ee.projectionMatrixInverse.copy(Ee.projectionMatrix).invert(),Ee.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),F===0&&(M.matrix.copy(Ee.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(Ee)}}for(let H=0;H<w.length;H++){const _e=T[H],F=w[H];_e!==null&&F!==void 0&&F.update(_e,ce,h||a)}if(he&&he(ie,ce),ce.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:ce.detectedPlanes});let H=null;for(const _e of C)ce.detectedPlanes.has(_e)||(H===null&&(H=[]),H.push(_e));if(H!==null)for(const _e of H)C.delete(_e),b.delete(_e),n.dispatchEvent({type:"planeremoved",data:_e});for(const _e of ce.detectedPlanes)if(!C.has(_e))C.add(_e),b.set(_e,ce.lastChangedTime),n.dispatchEvent({type:"planeadded",data:_e});else{const F=b.get(_e);_e.lastChangedTime>F&&(b.set(_e,_e.lastChangedTime),n.dispatchEvent({type:"planechanged",data:_e}))}}E=null}const ye=new wS;ye.setAnimationLoop(Ie),this.setAnimationLoop=function(ie){he=ie},this.dispose=function(){}}}function Sk(i,e){function t(y,m){y.matrixAutoUpdate===!0&&y.updateMatrix(),m.value.copy(y.matrix)}function n(y,m){m.color.getRGB(y.fogColor.value,SS(i)),m.isFog?(y.fogNear.value=m.near,y.fogFar.value=m.far):m.isFogExp2&&(y.fogDensity.value=m.density)}function r(y,m,w,T,C){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(y,m):m.isMeshToonMaterial?(s(y,m),p(y,m)):m.isMeshPhongMaterial?(s(y,m),d(y,m)):m.isMeshStandardMaterial?(s(y,m),_(y,m),m.isMeshPhysicalMaterial&&g(y,m,C)):m.isMeshMatcapMaterial?(s(y,m),E(y,m)):m.isMeshDepthMaterial?s(y,m):m.isMeshDistanceMaterial?(s(y,m),x(y,m)):m.isMeshNormalMaterial?s(y,m):m.isLineBasicMaterial?(a(y,m),m.isLineDashedMaterial&&c(y,m)):m.isPointsMaterial?u(y,m,w,T):m.isSpriteMaterial?h(y,m):m.isShadowMaterial?(y.color.value.copy(m.color),y.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(y,m){y.opacity.value=m.opacity,m.color&&y.diffuse.value.copy(m.color),m.emissive&&y.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(y.map.value=m.map,t(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap,t(m.alphaMap,y.alphaMapTransform)),m.bumpMap&&(y.bumpMap.value=m.bumpMap,t(m.bumpMap,y.bumpMapTransform),y.bumpScale.value=m.bumpScale,m.side===ri&&(y.bumpScale.value*=-1)),m.normalMap&&(y.normalMap.value=m.normalMap,t(m.normalMap,y.normalMapTransform),y.normalScale.value.copy(m.normalScale),m.side===ri&&y.normalScale.value.negate()),m.displacementMap&&(y.displacementMap.value=m.displacementMap,t(m.displacementMap,y.displacementMapTransform),y.displacementScale.value=m.displacementScale,y.displacementBias.value=m.displacementBias),m.emissiveMap&&(y.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,y.emissiveMapTransform)),m.specularMap&&(y.specularMap.value=m.specularMap,t(m.specularMap,y.specularMapTransform)),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest);const w=e.get(m).envMap;if(w&&(y.envMap.value=w,y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=m.reflectivity,y.ior.value=m.ior,y.refractionRatio.value=m.refractionRatio),m.lightMap){y.lightMap.value=m.lightMap;const T=i.useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=m.lightMapIntensity*T,t(m.lightMap,y.lightMapTransform)}m.aoMap&&(y.aoMap.value=m.aoMap,y.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,y.aoMapTransform))}function a(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,m.map&&(y.map.value=m.map,t(m.map,y.mapTransform))}function c(y,m){y.dashSize.value=m.dashSize,y.totalSize.value=m.dashSize+m.gapSize,y.scale.value=m.scale}function u(y,m,w,T){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.size.value=m.size*w,y.scale.value=T*.5,m.map&&(y.map.value=m.map,t(m.map,y.uvTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function h(y,m){y.diffuse.value.copy(m.color),y.opacity.value=m.opacity,y.rotation.value=m.rotation,m.map&&(y.map.value=m.map,t(m.map,y.mapTransform)),m.alphaMap&&(y.alphaMap.value=m.alphaMap),m.alphaTest>0&&(y.alphaTest.value=m.alphaTest)}function d(y,m){y.specular.value.copy(m.specular),y.shininess.value=Math.max(m.shininess,1e-4)}function p(y,m){m.gradientMap&&(y.gradientMap.value=m.gradientMap)}function _(y,m){y.metalness.value=m.metalness,m.metalnessMap&&(y.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,y.metalnessMapTransform)),y.roughness.value=m.roughness,m.roughnessMap&&(y.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,y.roughnessMapTransform)),e.get(m).envMap&&(y.envMapIntensity.value=m.envMapIntensity)}function g(y,m,w){y.ior.value=m.ior,m.sheen>0&&(y.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),y.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(y.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,y.sheenColorMapTransform)),m.sheenRoughnessMap&&(y.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,y.sheenRoughnessMapTransform))),m.clearcoat>0&&(y.clearcoat.value=m.clearcoat,y.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(y.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,y.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(y.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===ri&&y.clearcoatNormalScale.value.negate())),m.iridescence>0&&(y.iridescence.value=m.iridescence,y.iridescenceIOR.value=m.iridescenceIOR,y.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(y.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,y.iridescenceMapTransform)),m.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),m.transmission>0&&(y.transmission.value=m.transmission,y.transmissionSamplerMap.value=w.texture,y.transmissionSamplerSize.value.set(w.width,w.height),m.transmissionMap&&(y.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,y.transmissionMapTransform)),y.thickness.value=m.thickness,m.thicknessMap&&(y.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=m.attenuationDistance,y.attenuationColor.value.copy(m.attenuationColor)),y.specularIntensity.value=m.specularIntensity,y.specularColor.value.copy(m.specularColor),m.specularColorMap&&(y.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,y.specularColorMapTransform)),m.specularIntensityMap&&(y.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,m){m.matcap&&(y.matcap.value=m.matcap)}function x(y,m){const w=e.get(m).light;y.referencePosition.value.setFromMatrixPosition(w.matrixWorld),y.nearDistance.value=w.shadow.camera.near,y.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Mk(i,e,t,n){let r={},s={},a=[];const c=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function u(w,T){const C=T.program;n.uniformBlockBinding(w,C)}function h(w,T){let C=r[w.id];C===void 0&&(E(w),C=d(w),r[w.id]=C,w.addEventListener("dispose",y));const b=T.program;n.updateUBOMapping(w,b);const I=e.render.frame;s[w.id]!==I&&(_(w),s[w.id]=I)}function d(w){const T=p();w.__bindingPointIndex=T;const C=i.createBuffer(),b=w.__size,I=w.usage;return i.bindBuffer(i.UNIFORM_BUFFER,C),i.bufferData(i.UNIFORM_BUFFER,b,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,C),C}function p(){for(let w=0;w<c;w++)if(a.indexOf(w)===-1)return a.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(w){const T=r[w.id],C=w.uniforms,b=w.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let I=0,O=C.length;I<O;I++){const B=C[I];if(g(B,I,b)===!0){const M=B.__offset,L=Array.isArray(B.value)?B.value:[B.value];let Q=0;for(let te=0;te<L.length;te++){const W=L[te],$=x(W);typeof W=="number"?(B.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,M+Q,B.__data)):W.isMatrix3?(B.__data[0]=W.elements[0],B.__data[1]=W.elements[1],B.__data[2]=W.elements[2],B.__data[3]=W.elements[0],B.__data[4]=W.elements[3],B.__data[5]=W.elements[4],B.__data[6]=W.elements[5],B.__data[7]=W.elements[0],B.__data[8]=W.elements[6],B.__data[9]=W.elements[7],B.__data[10]=W.elements[8],B.__data[11]=W.elements[0]):(W.toArray(B.__data,Q),Q+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,M,B.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(w,T,C){const b=w.value;if(C[T]===void 0){if(typeof b=="number")C[T]=b;else{const I=Array.isArray(b)?b:[b],O=[];for(let B=0;B<I.length;B++)O.push(I[B].clone());C[T]=O}return!0}else if(typeof b=="number"){if(C[T]!==b)return C[T]=b,!0}else{const I=Array.isArray(C[T])?C[T]:[C[T]],O=Array.isArray(b)?b:[b];for(let B=0;B<I.length;B++){const M=I[B];if(M.equals(O[B])===!1)return M.copy(O[B]),!0}}return!1}function E(w){const T=w.uniforms;let C=0;const b=16;let I=0;for(let O=0,B=T.length;O<B;O++){const M=T[O],L={boundary:0,storage:0},Q=Array.isArray(M.value)?M.value:[M.value];for(let te=0,W=Q.length;te<W;te++){const $=Q[te],j=x($);L.boundary+=j.boundary,L.storage+=j.storage}if(M.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=C,O>0){I=C%b;const te=b-I;I!==0&&te-L.boundary<0&&(C+=b-I,M.__offset=C)}C+=L.storage}return I=C%b,I>0&&(C+=b-I),w.__size=C,w.__cache={},this}function x(w){const T={boundary:0,storage:0};return typeof w=="number"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function y(w){const T=w.target;T.removeEventListener("dispose",y);const C=a.indexOf(T.__bindingPointIndex);a.splice(C,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function m(){for(const w in r)i.deleteBuffer(r[w]);a=[],r={},s={}}return{bind:u,update:h,dispose:m}}function Tk(){const i=ph("canvas");return i.style.display="block",i}class IS{constructor(e={}){const{canvas:t=Tk(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:c=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let _;n!==null?_=n.getContextAttributes().alpha:_=a;let g=null,E=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=rt,this.useLegacyLights=!0,this.toneMapping=ns,this.toneMappingExposure=1;const m=this;let w=!1,T=0,C=0,b=null,I=-1,O=null;const B=new Tn,M=new Tn;let L=null,Q=t.width,te=t.height,W=1,$=null,j=null;const le=new Tn(0,0,Q,te),J=new Tn(0,0,Q,te);let ne=!1;const ge=new J_;let he=!1,Ie=!1,ye=null;const ie=new pn,ce=new Y,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return b===null?W:1}let F=n;function Pe(D,K){for(let oe=0;oe<D.length;oe++){const q=D[oe],ue=t.getContext(q,K);if(ue!==null)return ue}return null}try{const D={alpha:!0,depth:r,stencil:s,antialias:c,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${K_}`),t.addEventListener("webglcontextlost",Oe,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",Je,!1),F===null){const K=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&K.shift(),F=Pe(K,D),F===null)throw Pe(K)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}F.getShaderPrecisionFormat===void 0&&(F.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let Ce,Ee,ze,st,Ue,Ge,Lt,Gt,Tt,Vt,yt,Et,Dt,N,P,re,ve,Se,Te,k,fe,ee,we,De;function Fe(){Ce=new O3(F),Ee=new R3(F,Ce,e),Ce.init(Ee),ee=new gk(F,Ce,Ee),ze=new _k(F,Ce,Ee),st=new B3(F),Ue=new tk,Ge=new mk(F,Ce,ze,Ue,Ee,ee,st),Lt=new I3(m),Gt=new N3(m),Tt=new jO(F,Ee),we=new A3(F,Ce,Tt,Ee),Vt=new U3(F,Tt,st,we),yt=new G3(F,Vt,Tt,st),Te=new H3(F,Ee,Ge),re=new P3(Ue),Et=new ek(m,Lt,Gt,Ce,Ee,we,re),Dt=new Sk(m,Ue),N=new ik,P=new ck(Ce,Ee),Se=new b3(m,Lt,Gt,ze,yt,_,u),ve=new pk(m,yt,Ee),De=new Mk(F,st,Ee,ze),k=new C3(F,Ce,st,Ee),fe=new F3(F,Ce,st,Ee),st.programs=Et.programs,m.capabilities=Ee,m.extensions=Ce,m.properties=Ue,m.renderLists=N,m.shadowMap=ve,m.state=ze,m.info=st}Fe();const Re=new Ek(m,F);this.xr=Re,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const D=Ce.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=Ce.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(D){D!==void 0&&(W=D,this.setSize(Q,te,!1))},this.getSize=function(D){return D.set(Q,te)},this.setSize=function(D,K,oe=!0){if(Re.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=D,te=K,t.width=Math.floor(D*W),t.height=Math.floor(K*W),oe===!0&&(t.style.width=D+"px",t.style.height=K+"px"),this.setViewport(0,0,D,K)},this.getDrawingBufferSize=function(D){return D.set(Q*W,te*W).floor()},this.setDrawingBufferSize=function(D,K,oe){Q=D,te=K,W=oe,t.width=Math.floor(D*oe),t.height=Math.floor(K*oe),this.setViewport(0,0,D,K)},this.getCurrentViewport=function(D){return D.copy(B)},this.getViewport=function(D){return D.copy(le)},this.setViewport=function(D,K,oe,q){D.isVector4?le.set(D.x,D.y,D.z,D.w):le.set(D,K,oe,q),ze.viewport(B.copy(le).multiplyScalar(W).floor())},this.getScissor=function(D){return D.copy(J)},this.setScissor=function(D,K,oe,q){D.isVector4?J.set(D.x,D.y,D.z,D.w):J.set(D,K,oe,q),ze.scissor(M.copy(J).multiplyScalar(W).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(D){ze.setScissorTest(ne=D)},this.setOpaqueSort=function(D){$=D},this.setTransparentSort=function(D){j=D},this.getClearColor=function(D){return D.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor.apply(Se,arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha.apply(Se,arguments)},this.clear=function(D=!0,K=!0,oe=!0){let q=0;D&&(q|=F.COLOR_BUFFER_BIT),K&&(q|=F.DEPTH_BUFFER_BIT),oe&&(q|=F.STENCIL_BUFFER_BIT),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Oe,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),N.dispose(),P.dispose(),Ue.dispose(),Lt.dispose(),Gt.dispose(),yt.dispose(),we.dispose(),De.dispose(),Et.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",ke),Re.removeEventListener("sessionend",Rt),ye&&(ye.dispose(),ye=null),Pt.stop()};function Oe(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function Ke(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const D=st.autoReset,K=ve.enabled,oe=ve.autoUpdate,q=ve.needsUpdate,ue=ve.type;Fe(),st.autoReset=D,ve.enabled=K,ve.autoUpdate=oe,ve.needsUpdate=q,ve.type=ue}function Je(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function Yt(D){const K=D.target;K.removeEventListener("dispose",Yt),G(K)}function G(D){se(D),Ue.remove(D)}function se(D){const K=Ue.get(D).programs;K!==void 0&&(K.forEach(function(oe){Et.releaseProgram(oe)}),D.isShaderMaterial&&Et.releaseShaderCache(D))}this.renderBufferDirect=function(D,K,oe,q,ue,He){K===null&&(K=H);const We=ue.isMesh&&ue.matrixWorld.determinant()<0,je=cl(D,K,oe,q,ue);ze.setMaterial(q,We);let tt=oe.index,ot=1;q.wireframe===!0&&(tt=Vt.getWireframeAttribute(oe),ot=2);const at=oe.drawRange,ft=oe.attributes.position;let wt=at.start*ot,an=(at.start+at.count)*ot;He!==null&&(wt=Math.max(wt,He.start*ot),an=Math.min(an,(He.start+He.count)*ot)),tt!==null?(wt=Math.max(wt,0),an=Math.min(an,tt.count)):ft!=null&&(wt=Math.max(wt,0),an=Math.min(an,ft.count));const ui=an-wt;if(ui<0||ui===1/0)return;we.setup(ue,q,je,oe,tt);let Ii,Jt=k;if(tt!==null&&(Ii=Tt.get(tt),Jt=fe,Jt.setIndex(Ii)),ue.isMesh)q.wireframe===!0?(ze.setLineWidth(q.wireframeLinewidth*_e()),Jt.setMode(F.LINES)):Jt.setMode(F.TRIANGLES);else if(ue.isLine){let _t=q.linewidth;_t===void 0&&(_t=1),ze.setLineWidth(_t*_e()),ue.isLineSegments?Jt.setMode(F.LINES):ue.isLineLoop?Jt.setMode(F.LINE_LOOP):Jt.setMode(F.LINE_STRIP)}else ue.isPoints?Jt.setMode(F.POINTS):ue.isSprite&&Jt.setMode(F.TRIANGLES);if(ue.isInstancedMesh)Jt.renderInstances(wt,ui,ue.count);else if(oe.isInstancedBufferGeometry){const _t=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,ul=Math.min(oe.instanceCount,_t);Jt.renderInstances(wt,ui,ul)}else Jt.render(wt,ui)},this.compile=function(D,K){function oe(q,ue,He){q.transparent===!0&&q.side===jr&&q.forceSinglePass===!1?(q.side=ri,q.needsUpdate=!0,as(q,ue,He),q.side=Gs,q.needsUpdate=!0,as(q,ue,He),q.side=jr):as(q,ue,He)}E=P.get(D),E.init(),y.push(E),D.traverseVisible(function(q){q.isLight&&q.layers.test(K.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(m.useLegacyLights),D.traverse(function(q){const ue=q.material;if(ue)if(Array.isArray(ue))for(let He=0;He<ue.length;He++){const We=ue[He];oe(We,D,q)}else oe(ue,D,q)}),y.pop(),E=null};let xe=null;function Le(D){xe&&xe(D)}function ke(){Pt.stop()}function Rt(){Pt.start()}const Pt=new wS;Pt.setAnimationLoop(Le),typeof self<"u"&&Pt.setContext(self),this.setAnimationLoop=function(D){xe=D,Re.setAnimationLoop(D),D===null?Pt.stop():Pt.start()},Re.addEventListener("sessionstart",ke),Re.addEventListener("sessionend",Rt),this.render=function(D,K){if(K!==void 0&&K.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),K.parent===null&&K.matrixWorldAutoUpdate===!0&&K.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(K),K=Re.getCamera()),D.isScene===!0&&D.onBeforeRender(m,D,K,b),E=P.get(D,y.length),E.init(),y.push(E),ie.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),ge.setFromProjectionMatrix(ie),Ie=this.localClippingEnabled,he=re.init(this.clippingPlanes,Ie),g=N.get(D,x.length),g.init(),x.push(g),gn(D,K,0,m.sortObjects),g.finish(),m.sortObjects===!0&&g.sort($,j),he===!0&&re.beginShadows();const oe=E.state.shadowsArray;if(ve.render(oe,D,K),he===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset(),Se.render(g,D),E.setupLights(m.useLegacyLights),K.isArrayCamera){const q=K.cameras;for(let ue=0,He=q.length;ue<He;ue++){const We=q[ue];Ji(g,D,We,We.viewport)}}else Ji(g,D,K);b!==null&&(Ge.updateMultisampleRenderTarget(b),Ge.updateRenderTargetMipmap(b)),D.isScene===!0&&D.onAfterRender(m,D,K),we.resetDefaultState(),I=-1,O=null,y.pop(),y.length>0?E=y[y.length-1]:E=null,x.pop(),x.length>0?g=x[x.length-1]:g=null};function gn(D,K,oe,q){if(D.visible===!1)return;if(D.layers.test(K.layers)){if(D.isGroup)oe=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(K);else if(D.isLight)E.pushLight(D),D.castShadow&&E.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||ge.intersectsSprite(D)){q&&ce.setFromMatrixPosition(D.matrixWorld).applyMatrix4(ie);const We=yt.update(D),je=D.material;je.visible&&g.push(D,We,je,oe,ce.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||ge.intersectsObject(D))){D.isSkinnedMesh&&D.skeleton.frame!==st.render.frame&&(D.skeleton.update(),D.skeleton.frame=st.render.frame);const We=yt.update(D),je=D.material;if(q&&(We.boundingSphere===null&&We.computeBoundingSphere(),ce.copy(We.boundingSphere.center).applyMatrix4(D.matrixWorld).applyMatrix4(ie)),Array.isArray(je)){const tt=We.groups;for(let ot=0,at=tt.length;ot<at;ot++){const ft=tt[ot],wt=je[ft.materialIndex];wt&&wt.visible&&g.push(D,We,wt,oe,ce.z,ft)}}else je.visible&&g.push(D,We,je,oe,ce.z,null)}}const He=D.children;for(let We=0,je=He.length;We<je;We++)gn(He[We],K,oe,q)}function Ji(D,K,oe,q){const ue=D.opaque,He=D.transmissive,We=D.transparent;E.setupLightsView(oe),he===!0&&re.setGlobalState(m.clippingPlanes,oe),He.length>0&&$t(ue,He,K,oe),q&&ze.viewport(B.copy(q)),ue.length>0&&Kn(ue,K,oe),He.length>0&&Kn(He,K,oe),We.length>0&&Kn(We,K,oe),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function $t(D,K,oe,q){if(ye===null){const je=Ee.isWebGL2;ye=new Do(1024,1024,{generateMipmaps:!0,type:Ce.has("EXT_color_buffer_half_float")?hc:Lo,minFilter:uc,samples:je&&c===!0?4:0})}const ue=m.getRenderTarget();m.setRenderTarget(ye),m.clear();const He=m.toneMapping;m.toneMapping=ns,Kn(D,oe,q),Ge.updateMultisampleRenderTarget(ye),Ge.updateRenderTargetMipmap(ye);let We=!1;for(let je=0,tt=K.length;je<tt;je++){const ot=K[je],at=ot.object,ft=ot.geometry,wt=ot.material,an=ot.group;if(wt.side===jr&&at.layers.test(q.layers)){const ui=wt.side;wt.side=ri,wt.needsUpdate=!0,Pi(at,oe,q,ft,wt,an),wt.side=ui,wt.needsUpdate=!0,We=!0}}We===!0&&(Ge.updateMultisampleRenderTarget(ye),Ge.updateRenderTargetMipmap(ye)),m.setRenderTarget(ue),m.toneMapping=He}function Kn(D,K,oe){const q=K.isScene===!0?K.overrideMaterial:null;for(let ue=0,He=D.length;ue<He;ue++){const We=D[ue],je=We.object,tt=We.geometry,ot=q===null?We.material:q,at=We.group;je.layers.test(oe.layers)&&Pi(je,K,oe,tt,ot,at)}}function Pi(D,K,oe,q,ue,He){D.onBeforeRender(m,K,oe,q,ue,He),D.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),ue.onBeforeRender(m,K,oe,q,D,He),ue.transparent===!0&&ue.side===jr&&ue.forceSinglePass===!1?(ue.side=ri,ue.needsUpdate=!0,m.renderBufferDirect(oe,K,q,ue,D,He),ue.side=Gs,ue.needsUpdate=!0,m.renderBufferDirect(oe,K,q,ue,D,He),ue.side=jr):m.renderBufferDirect(oe,K,q,ue,D,He),D.onAfterRender(m,K,oe,q,ue,He)}function as(D,K,oe){K.isScene!==!0&&(K=H);const q=Ue.get(D),ue=E.state.lights,He=E.state.shadowsArray,We=ue.state.version,je=Et.getParameters(D,ue.state,He,K,oe),tt=Et.getProgramCacheKey(je);let ot=q.programs;q.environment=D.isMeshStandardMaterial?K.environment:null,q.fog=K.fog,q.envMap=(D.isMeshStandardMaterial?Gt:Lt).get(D.envMap||q.environment),ot===void 0&&(D.addEventListener("dispose",Yt),ot=new Map,q.programs=ot);let at=ot.get(tt);if(at!==void 0){if(q.currentProgram===at&&q.lightsStateVersion===We)return Dc(D,je),at}else je.uniforms=Et.getUniforms(D),D.onBuild(oe,je,m),D.onBeforeCompile(je,m),at=Et.acquireProgram(je,tt),ot.set(tt,at),q.uniforms=je.uniforms;const ft=q.uniforms;(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(ft.clippingPlanes=re.uniform),Dc(D,je),q.needsLights=rf(D),q.lightsStateVersion=We,q.needsLights&&(ft.ambientLightColor.value=ue.state.ambient,ft.lightProbe.value=ue.state.probe,ft.directionalLights.value=ue.state.directional,ft.directionalLightShadows.value=ue.state.directionalShadow,ft.spotLights.value=ue.state.spot,ft.spotLightShadows.value=ue.state.spotShadow,ft.rectAreaLights.value=ue.state.rectArea,ft.ltc_1.value=ue.state.rectAreaLTC1,ft.ltc_2.value=ue.state.rectAreaLTC2,ft.pointLights.value=ue.state.point,ft.pointLightShadows.value=ue.state.pointShadow,ft.hemisphereLights.value=ue.state.hemi,ft.directionalShadowMap.value=ue.state.directionalShadowMap,ft.directionalShadowMatrix.value=ue.state.directionalShadowMatrix,ft.spotShadowMap.value=ue.state.spotShadowMap,ft.spotLightMatrix.value=ue.state.spotLightMatrix,ft.spotLightMap.value=ue.state.spotLightMap,ft.pointShadowMap.value=ue.state.pointShadowMap,ft.pointShadowMatrix.value=ue.state.pointShadowMatrix);const wt=at.getUniforms(),an=$u.seqWithValue(wt.seq,ft);return q.currentProgram=at,q.uniformsList=an,at}function Dc(D,K){const oe=Ue.get(D);oe.outputColorSpace=K.outputColorSpace,oe.instancing=K.instancing,oe.skinning=K.skinning,oe.morphTargets=K.morphTargets,oe.morphNormals=K.morphNormals,oe.morphColors=K.morphColors,oe.morphTargetsCount=K.morphTargetsCount,oe.numClippingPlanes=K.numClippingPlanes,oe.numIntersection=K.numClipIntersection,oe.vertexAlphas=K.vertexAlphas,oe.vertexTangents=K.vertexTangents,oe.toneMapping=K.toneMapping}function cl(D,K,oe,q,ue){K.isScene!==!0&&(K=H),Ge.resetTextureUnits();const He=K.fog,We=q.isMeshStandardMaterial?K.environment:null,je=b===null?m.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Rr,tt=(q.isMeshStandardMaterial?Gt:Lt).get(q.envMap||We),ot=q.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,at=!!q.normalMap&&!!oe.attributes.tangent,ft=!!oe.morphAttributes.position,wt=!!oe.morphAttributes.normal,an=!!oe.morphAttributes.color,ui=q.toneMapped?m.toneMapping:ns,Ii=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Jt=Ii!==void 0?Ii.length:0,_t=Ue.get(q),ul=E.state.lights;if(he===!0&&(Ie===!0||D!==O)){const Ln=D===O&&q.id===I;re.setState(q,D,Ln)}let nn=!1;q.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==ul.state.version||_t.outputColorSpace!==je||ue.isInstancedMesh&&_t.instancing===!1||!ue.isInstancedMesh&&_t.instancing===!0||ue.isSkinnedMesh&&_t.skinning===!1||!ue.isSkinnedMesh&&_t.skinning===!0||_t.envMap!==tt||q.fog===!0&&_t.fog!==He||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==re.numPlanes||_t.numIntersection!==re.numIntersection)||_t.vertexAlphas!==ot||_t.vertexTangents!==at||_t.morphTargets!==ft||_t.morphNormals!==wt||_t.morphColors!==an||_t.toneMapping!==ui||Ee.isWebGL2===!0&&_t.morphTargetsCount!==Jt)&&(nn=!0):(nn=!0,_t.__version=q.version);let mr=_t.currentProgram;nn===!0&&(mr=as(q,K,ue));let hl=!1,$s=!1,fl=!1;const An=mr.getUniforms(),Ir=_t.uniforms;if(ze.useProgram(mr.program)&&(hl=!0,$s=!0,fl=!0),q.id!==I&&(I=q.id,$s=!0),hl||O!==D){if(An.setValue(F,"projectionMatrix",D.projectionMatrix),Ee.logarithmicDepthBuffer&&An.setValue(F,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),O!==D&&(O=D,$s=!0,fl=!0),q.isShaderMaterial||q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshStandardMaterial||q.envMap){const Ln=An.map.cameraPosition;Ln!==void 0&&Ln.setValue(F,ce.setFromMatrixPosition(D.matrixWorld))}(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&An.setValue(F,"isOrthographic",D.isOrthographicCamera===!0),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial||q.isShadowMaterial||ue.isSkinnedMesh)&&An.setValue(F,"viewMatrix",D.matrixWorldInverse)}if(ue.isSkinnedMesh){An.setOptional(F,ue,"bindMatrix"),An.setOptional(F,ue,"bindMatrixInverse");const Ln=ue.skeleton;Ln&&(Ee.floatVertexTextures?(Ln.boneTexture===null&&Ln.computeBoneTexture(),An.setValue(F,"boneTexture",Ln.boneTexture,Ge),An.setValue(F,"boneTextureSize",Ln.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Wo=oe.morphAttributes;if((Wo.position!==void 0||Wo.normal!==void 0||Wo.color!==void 0&&Ee.isWebGL2===!0)&&Te.update(ue,oe,mr),($s||_t.receiveShadow!==ue.receiveShadow)&&(_t.receiveShadow=ue.receiveShadow,An.setValue(F,"receiveShadow",ue.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ir.envMap.value=tt,Ir.flipEnvMap.value=tt.isCubeTexture&&tt.isRenderTargetTexture===!1?-1:1),$s&&(An.setValue(F,"toneMappingExposure",m.toneMappingExposure),_t.needsLights&&nf(Ir,fl),He&&q.fog===!0&&Dt.refreshFogUniforms(Ir,He),Dt.refreshMaterialUniforms(Ir,q,W,te,ye),$u.upload(F,_t.uniformsList,Ir,Ge)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&($u.upload(F,_t.uniformsList,Ir,Ge),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&An.setValue(F,"center",ue.center),An.setValue(F,"modelViewMatrix",ue.modelViewMatrix),An.setValue(F,"normalMatrix",ue.normalMatrix),An.setValue(F,"modelMatrix",ue.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Ln=q.uniformsGroups;for(let Vo=0,dl=Ln.length;Vo<dl;Vo++)if(Ee.isWebGL2){const Nc=Ln[Vo];De.update(Nc,mr),De.bind(Nc,mr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return mr}function nf(D,K){D.ambientLightColor.needsUpdate=K,D.lightProbe.needsUpdate=K,D.directionalLights.needsUpdate=K,D.directionalLightShadows.needsUpdate=K,D.pointLights.needsUpdate=K,D.pointLightShadows.needsUpdate=K,D.spotLights.needsUpdate=K,D.spotLightShadows.needsUpdate=K,D.rectAreaLights.needsUpdate=K,D.hemisphereLights.needsUpdate=K}function rf(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(D,K,oe){Ue.get(D.texture).__webglTexture=K,Ue.get(D.depthTexture).__webglTexture=oe;const q=Ue.get(D);q.__hasExternalTextures=!0,q.__hasExternalTextures&&(q.__autoAllocateDepthBuffer=oe===void 0,q.__autoAllocateDepthBuffer||Ce.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(D,K){const oe=Ue.get(D);oe.__webglFramebuffer=K,oe.__useDefaultFramebuffer=K===void 0},this.setRenderTarget=function(D,K=0,oe=0){b=D,T=K,C=oe;let q=!0,ue=null,He=!1,We=!1;if(D){const tt=Ue.get(D);tt.__useDefaultFramebuffer!==void 0?(ze.bindFramebuffer(F.FRAMEBUFFER,null),q=!1):tt.__webglFramebuffer===void 0?Ge.setupRenderTarget(D):tt.__hasExternalTextures&&Ge.rebindTextures(D,Ue.get(D.texture).__webglTexture,Ue.get(D.depthTexture).__webglTexture);const ot=D.texture;(ot.isData3DTexture||ot.isDataArrayTexture||ot.isCompressedArrayTexture)&&(We=!0);const at=Ue.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(ue=at[K],He=!0):Ee.isWebGL2&&D.samples>0&&Ge.useMultisampledRTT(D)===!1?ue=Ue.get(D).__webglMultisampledFramebuffer:ue=at,B.copy(D.viewport),M.copy(D.scissor),L=D.scissorTest}else B.copy(le).multiplyScalar(W).floor(),M.copy(J).multiplyScalar(W).floor(),L=ne;if(ze.bindFramebuffer(F.FRAMEBUFFER,ue)&&Ee.drawBuffers&&q&&ze.drawBuffers(D,ue),ze.viewport(B),ze.scissor(M),ze.setScissorTest(L),He){const tt=Ue.get(D.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+K,tt.__webglTexture,oe)}else if(We){const tt=Ue.get(D.texture),ot=K||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,tt.__webglTexture,oe||0,ot)}I=-1},this.readRenderTargetPixels=function(D,K,oe,q,ue,He,We){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let je=Ue.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&We!==void 0&&(je=je[We]),je){ze.bindFramebuffer(F.FRAMEBUFFER,je);try{const tt=D.texture,ot=tt.format,at=tt.type;if(ot!==hr&&ee.convert(ot)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ft=at===hc&&(Ce.has("EXT_color_buffer_half_float")||Ee.isWebGL2&&Ce.has("EXT_color_buffer_float"));if(at!==Lo&&ee.convert(at)!==F.getParameter(F.IMPLEMENTATION_COLOR_READ_TYPE)&&!(at===vo&&(Ee.isWebGL2||Ce.has("OES_texture_float")||Ce.has("WEBGL_color_buffer_float")))&&!ft){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}K>=0&&K<=D.width-q&&oe>=0&&oe<=D.height-ue&&F.readPixels(K,oe,q,ue,ee.convert(ot),ee.convert(at),He)}finally{const tt=b!==null?Ue.get(b).__webglFramebuffer:null;ze.bindFramebuffer(F.FRAMEBUFFER,tt)}}},this.copyFramebufferToTexture=function(D,K,oe=0){const q=Math.pow(2,-oe),ue=Math.floor(K.image.width*q),He=Math.floor(K.image.height*q);Ge.setTexture2D(K,0),F.copyTexSubImage2D(F.TEXTURE_2D,oe,0,0,D.x,D.y,ue,He),ze.unbindTexture()},this.copyTextureToTexture=function(D,K,oe,q=0){const ue=K.image.width,He=K.image.height,We=ee.convert(oe.format),je=ee.convert(oe.type);Ge.setTexture2D(oe,0),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,oe.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,oe.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,oe.unpackAlignment),K.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,q,D.x,D.y,ue,He,We,je,K.image.data):K.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,q,D.x,D.y,K.mipmaps[0].width,K.mipmaps[0].height,We,K.mipmaps[0].data):F.texSubImage2D(F.TEXTURE_2D,q,D.x,D.y,We,je,K.image),q===0&&oe.generateMipmaps&&F.generateMipmap(F.TEXTURE_2D),ze.unbindTexture()},this.copyTextureToTexture3D=function(D,K,oe,q,ue=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=D.max.x-D.min.x+1,We=D.max.y-D.min.y+1,je=D.max.z-D.min.z+1,tt=ee.convert(q.format),ot=ee.convert(q.type);let at;if(q.isData3DTexture)Ge.setTexture3D(q,0),at=F.TEXTURE_3D;else if(q.isDataArrayTexture)Ge.setTexture2DArray(q,0),at=F.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,q.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,q.unpackAlignment);const ft=F.getParameter(F.UNPACK_ROW_LENGTH),wt=F.getParameter(F.UNPACK_IMAGE_HEIGHT),an=F.getParameter(F.UNPACK_SKIP_PIXELS),ui=F.getParameter(F.UNPACK_SKIP_ROWS),Ii=F.getParameter(F.UNPACK_SKIP_IMAGES),Jt=oe.isCompressedTexture?oe.mipmaps[0]:oe.image;F.pixelStorei(F.UNPACK_ROW_LENGTH,Jt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Jt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,D.min.x),F.pixelStorei(F.UNPACK_SKIP_ROWS,D.min.y),F.pixelStorei(F.UNPACK_SKIP_IMAGES,D.min.z),oe.isDataTexture||oe.isData3DTexture?F.texSubImage3D(at,ue,K.x,K.y,K.z,He,We,je,tt,ot,Jt.data):oe.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),F.compressedTexSubImage3D(at,ue,K.x,K.y,K.z,He,We,je,tt,Jt.data)):F.texSubImage3D(at,ue,K.x,K.y,K.z,He,We,je,tt,ot,Jt),F.pixelStorei(F.UNPACK_ROW_LENGTH,ft),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,wt),F.pixelStorei(F.UNPACK_SKIP_PIXELS,an),F.pixelStorei(F.UNPACK_SKIP_ROWS,ui),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ii),ue===0&&q.generateMipmaps&&F.generateMipmap(at),ze.unbindTexture()},this.initTexture=function(D){D.isCubeTexture?Ge.setTextureCube(D,0):D.isData3DTexture?Ge.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?Ge.setTexture2DArray(D,0):Ge.setTexture2D(D,0),ze.unbindTexture()},this.resetState=function(){T=0,C=0,b=null,ze.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===rt?So:hS}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===So?rt:Rr}}class wk extends IS{}wk.prototype.isWebGL1Renderer=!0;class Fl extends kn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class nm extends os{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];c(r),h(n),d(),this.setAttribute("position",new Ti(s,3)),this.setAttribute("normal",new Ti(s.slice(),3)),this.setAttribute("uv",new Ti(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function c(w){const T=new Y,C=new Y,b=new Y;for(let I=0;I<t.length;I+=3)g(t[I+0],T),g(t[I+1],C),g(t[I+2],b),u(T,C,b,w)}function u(w,T,C,b){const I=b+1,O=[];for(let B=0;B<=I;B++){O[B]=[];const M=w.clone().lerp(C,B/I),L=T.clone().lerp(C,B/I),Q=I-B;for(let te=0;te<=Q;te++)te===0&&B===I?O[B][te]=M:O[B][te]=M.clone().lerp(L,te/Q)}for(let B=0;B<I;B++)for(let M=0;M<2*(I-B)-1;M++){const L=Math.floor(M/2);M%2===0?(_(O[B][L+1]),_(O[B+1][L]),_(O[B][L])):(_(O[B][L+1]),_(O[B+1][L+1]),_(O[B+1][L]))}}function h(w){const T=new Y;for(let C=0;C<s.length;C+=3)T.x=s[C+0],T.y=s[C+1],T.z=s[C+2],T.normalize().multiplyScalar(w),s[C+0]=T.x,s[C+1]=T.y,s[C+2]=T.z}function d(){const w=new Y;for(let T=0;T<s.length;T+=3){w.x=s[T+0],w.y=s[T+1],w.z=s[T+2];const C=y(w)/2/Math.PI+.5,b=m(w)/Math.PI+.5;a.push(C,1-b)}E(),p()}function p(){for(let w=0;w<a.length;w+=6){const T=a[w+0],C=a[w+2],b=a[w+4],I=Math.max(T,C,b),O=Math.min(T,C,b);I>.9&&O<.1&&(T<.2&&(a[w+0]+=1),C<.2&&(a[w+2]+=1),b<.2&&(a[w+4]+=1))}}function _(w){s.push(w.x,w.y,w.z)}function g(w,T){const C=w*3;T.x=e[C+0],T.y=e[C+1],T.z=e[C+2]}function E(){const w=new Y,T=new Y,C=new Y,b=new Y,I=new et,O=new et,B=new et;for(let M=0,L=0;M<s.length;M+=9,L+=6){w.set(s[M+0],s[M+1],s[M+2]),T.set(s[M+3],s[M+4],s[M+5]),C.set(s[M+6],s[M+7],s[M+8]),I.set(a[L+0],a[L+1]),O.set(a[L+2],a[L+3]),B.set(a[L+4],a[L+5]),b.copy(w).add(T).add(C).divideScalar(3);const Q=y(b);x(I,L+0,w,Q),x(O,L+2,T,Q),x(B,L+4,C,Q)}}function x(w,T,C,b){b<0&&w.x===1&&(a[T]=w.x-1),C.x===0&&C.z===0&&(a[T]=b/2/Math.PI+.5)}function y(w){return Math.atan2(w.z,-w.x)}function m(w){return Math.atan2(-w.y,Math.sqrt(w.x*w.x+w.z*w.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nm(e.vertices,e.indices,e.radius,e.details)}}class im extends nm{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new im(e.radius,e.detail)}}class Aa extends os{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,c=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:c},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const u=Math.min(a+c,Math.PI);let h=0;const d=[],p=new Y,_=new Y,g=[],E=[],x=[],y=[];for(let m=0;m<=n;m++){const w=[],T=m/n;let C=0;m===0&&a===0?C=.5/t:m===n&&u===Math.PI&&(C=-.5/t);for(let b=0;b<=t;b++){const I=b/t;p.x=-e*Math.cos(r+I*s)*Math.sin(a+T*c),p.y=e*Math.cos(a+T*c),p.z=e*Math.sin(r+I*s)*Math.sin(a+T*c),E.push(p.x,p.y,p.z),_.copy(p).normalize(),x.push(_.x,_.y,_.z),y.push(I+C,1-T),w.push(h++)}d.push(w)}for(let m=0;m<n;m++)for(let w=0;w<t;w++){const T=d[m][w+1],C=d[m][w],b=d[m+1][w],I=d[m+1][w+1];(m!==0||a>0)&&g.push(T,C,I),(m!==n-1||u<Math.PI)&&g.push(C,b,I)}this.setIndex(g),this.setAttribute("position",new Ti(E,3)),this.setAttribute("normal",new Ti(x,3)),this.setAttribute("uv",new Ti(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Aa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Xu extends al{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Z_,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bk extends al{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new At(16777215),this.specular=new At(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Z_,this.normalScale=new et(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=j_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class LS extends kn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const np=new pn,Jx=new Y,ey=new Y;class Ak{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new et(512,512),this.map=null,this.mapPass=null,this.matrix=new pn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new J_,this._frameExtents=new et(1,1),this._viewportCount=1,this._viewports=[new Tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jx.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jx),ey.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ey),t.updateMatrixWorld(),np.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(np),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(np)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Ck extends Ak{constructor(){super(new bS(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class DS extends LS{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kn.DEFAULT_UP),this.updateMatrix(),this.target=new kn,this.shadow=new Ck}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Rk extends LS{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class ty{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Yn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:K_}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=K_);function $r(i){if(i===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return i}function NS(i,e){i.prototype=Object.create(e.prototype),i.prototype.constructor=i,i.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var wi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},$a={duration:.5,overwrite:!1,delay:0},rm,zn,cn,$i=1e8,Bt=1/$i,$p=Math.PI*2,Pk=$p/4,Ik=0,OS=Math.sqrt,Lk=Math.cos,Dk=Math.sin,bn=function(e){return typeof e=="string"},tn=function(e){return typeof e=="function"},rs=function(e){return typeof e=="number"},sm=function(e){return typeof e>"u"},Pr=function(e){return typeof e=="object"},si=function(e){return e!==!1},om=function(){return typeof window<"u"},qu=function(e){return tn(e)||bn(e)},US=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Hn=Array.isArray,Kp=/(?:-?\.?\d|\.)+/gi,FS=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ca=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,ip=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,BS=/[+-]=-?[.\d]+/,kS=/[^,'"\[\]\s]+/gi,Nk=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,jt,Gi,jp,am,Ci={},_h={},zS,HS=function(e){return(_h=Uo(e,Ci))&&li},lm=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},mh=function(e,t){return!t&&console.warn(e)},GS=function(e,t){return e&&(Ci[e]=t)&&_h&&(_h[e]=t)||Ci},fc=function(){return 0},Ok={suppressEvents:!0,isStart:!0,kill:!1},Ku={suppressEvents:!0,kill:!1},Uk={suppressEvents:!0},cm={},Ls=[],Zp={},WS,yi={},rp={},ny=30,ju=[],um="",hm=function(e){var t=e[0],n,r;if(Pr(t)||tn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(r=ju.length;r--&&!ju[r].targetTest(t););n=ju[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new dM(e[r],n)))||e.splice(r,1);return e},To=function(e){return e._gsap||hm(Ki(e))[0]._gsap},VS=function(e,t,n){return(n=e[t])&&tn(n)?e[t]():sm(n)&&e.getAttribute&&e.getAttribute(t)||n},oi=function(e,t){return(e=e.split(",")).forEach(t)||e},on=function(e){return Math.round(e*1e5)/1e5||0},In=function(e){return Math.round(e*1e7)/1e7||0},Oa=function(e,t){var n=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+r:n==="-"?e-r:n==="*"?e*r:e/r},Fk=function(e,t){for(var n=t.length,r=0;e.indexOf(t[r])<0&&++r<n;);return r<n},gh=function(){var e=Ls.length,t=Ls.slice(0),n,r;for(Zp={},Ls.length=0,n=0;n<e;n++)r=t[n],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},XS=function(e,t,n,r){Ls.length&&!zn&&gh(),e.render(t,n,r||zn&&t<0&&(e._initted||e._startAt)),Ls.length&&!zn&&gh()},qS=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(kS).length<2?t:bn(e)?e.trim():e},YS=function(e){return e},Zi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Bk=function(e){return function(t,n){for(var r in n)r in t||r==="duration"&&e||r==="ease"||(t[r]=n[r])}},Uo=function(e,t){for(var n in t)e[n]=t[n];return e},iy=function i(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Pr(t[n])?i(e[n]||(e[n]={}),t[n]):t[n]);return e},vh=function(e,t){var n={},r;for(r in e)r in t||(n[r]=e[r]);return n},$l=function(e){var t=e.parent||jt,n=e.keyframes?Bk(Hn(e.keyframes)):Zi;if(si(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},kk=function(e,t){for(var n=e.length,r=n===t.length;r&&n--&&e[n]===t[n];);return n<0},$S=function(e,t,n,r,s){n===void 0&&(n="_first"),r===void 0&&(r="_last");var a=e[r],c;if(s)for(c=t[s];a&&a[s]>c;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[r]=t,t._prev=a,t.parent=t._dp=e,t},Jh=function(e,t,n,r){n===void 0&&(n="_first"),r===void 0&&(r="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Ws=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},wo=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},zk=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Qp=function(e,t,n,r){return e._startAt&&(zn?e._startAt.revert(Ku):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Hk=function i(e){return!e||e._ts&&i(e.parent)},ry=function(e){return e._repeat?Ka(e._tTime,e=e.duration()+e._rDelay)*e:0},Ka=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},xh=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ef=function(e){return e._end=In(e._start+(e._tDur/Math.abs(e._ts||e._rts||Bt)||0))},tf=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=In(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ef(e),n._dirty||wo(n,e)),e},KS=function(e,t){var n;if((t._time||t._initted&&!t._dur)&&(n=xh(e.rawTime(),t),(!t._dur||Lc(0,t.totalDuration(),n)-t._tTime>Bt)&&t.render(n,!0)),wo(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Bt}},Sr=function(e,t,n,r){return t.parent&&Ws(t),t._start=In((rs(n)?n:n||e!==jt?Hi(e,n,t):e._time)+t._delay),t._end=In(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$S(e,t,"_first","_last",e._sort?"_start":0),Jp(t)||(e._recent=t),r||KS(e,t),e._ts<0&&tf(e,e._tTime),e},jS=function(e,t){return(Ci.ScrollTrigger||lm("scrollTrigger",t))&&Ci.ScrollTrigger.create(t,e)},ZS=function(e,t,n,r,s){if(dm(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!zn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&WS!==Si.frame)return Ls.push(e),e._lazy=[s,r],1},Gk=function i(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||i(t))},Jp=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Wk=function(e,t,n,r){var s=e.ratio,a=t<0||!t&&(!e._start&&Gk(e)&&!(!e._initted&&Jp(e))||(e._ts<0||e._dp._ts<0)&&!Jp(e))?0:1,c=e._rDelay,u=0,h,d,p;if(c&&e._repeat&&(u=Lc(0,e._tDur,t),d=Ka(u,c),e._yoyo&&d&1&&(a=1-a),d!==Ka(e._tTime,c)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||zn||r||e._zTime===Bt||!t&&e._zTime){if(!e._initted&&ZS(e,t,r,n,u))return;for(p=e._zTime,e._zTime=t||(n?Bt:0),n||(n=t&&!p),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=u,h=e._pt;h;)h.r(a,h.d),h=h._next;t<0&&Qp(e,t,n,!0),e._onUpdate&&!n&&ji(e,"onUpdate"),u&&e._repeat&&!n&&e.parent&&ji(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ws(e,1),!n&&!zn&&(ji(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Vk=function(e,t,n){var r;if(n>t)for(r=e._first;r&&r._start<=n;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=n;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},ja=function(e,t,n,r){var s=e._repeat,a=In(t)||0,c=e._tTime/e._tDur;return c&&!r&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:In(a*(s+1)+e._rDelay*s):a,c>0&&!r&&tf(e,e._tTime=e._tDur*c),e.parent&&ef(e),n||wo(e.parent,e),e},sy=function(e){return e instanceof ti?wo(e):ja(e,e._dur)},Xk={_start:0,endTime:fc,totalDuration:fc},Hi=function i(e,t,n){var r=e.labels,s=e._recent||Xk,a=e.duration()>=$i?s.endTime(!1):e._dur,c,u,h;return bn(t)&&(isNaN(t)||t in r)?(u=t.charAt(0),h=t.substr(-1)==="%",c=t.indexOf("="),u==="<"||u===">"?(c>=0&&(t=t.replace(/=/,"")),(u==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(c<0?s:n).totalDuration()/100:1)):c<0?(t in r||(r[t]=a),r[t]):(u=parseFloat(t.charAt(c-1)+t.substr(c+1)),h&&n&&(u=u/100*(Hn(n)?n[0]:n).totalDuration()),c>1?i(e,t.substr(0,c-1),n)+u:a+u)):t==null?a:+t},Kl=function(e,t,n){var r=rs(t[1]),s=(r?2:1)+(e<2?0:1),a=t[s],c,u;if(r&&(a.duration=t[1]),a.parent=n,e){for(c=a,u=n;u&&!("immediateRender"in c);)c=u.vars.defaults||{},u=si(u.vars.inherit)&&u.parent;a.immediateRender=si(c.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new fn(t[0],a,t[s+1])},qs=function(e,t){return e||e===0?t(e):t},Lc=function(e,t,n){return n<e?e:n>t?t:n},Fn=function(e,t){return!bn(e)||!(t=Nk.exec(e))?"":t[1]},qk=function(e,t,n){return qs(n,function(r){return Lc(e,t,r)})},e_=[].slice,QS=function(e,t){return e&&Pr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Pr(e[0]))&&!e.nodeType&&e!==Gi},Yk=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(r){var s;return bn(r)&&!t||QS(r,1)?(s=n).push.apply(s,Ki(r)):n.push(r)})||n},Ki=function(e,t,n){return cn&&!t&&cn.selector?cn.selector(e):bn(e)&&!n&&(jp||!Za())?e_.call((t||am).querySelectorAll(e),0):Hn(e)?Yk(e,n):QS(e)?e_.call(e,0):e?[e]:[]},t_=function(e){return e=Ki(e)[0]||mh("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ki(t,n.querySelectorAll?n:n===e?mh("Invalid scope")||am.createElement("div"):e)}},JS=function(e){return e.sort(function(){return .5-Math.random()})},eM=function(e){if(tn(e))return e;var t=Pr(e)?e:{each:e},n=bo(t.ease),r=t.from||0,s=parseFloat(t.base)||0,a={},c=r>0&&r<1,u=isNaN(r)||c,h=t.axis,d=r,p=r;return bn(r)?d=p={center:.5,edges:.5,end:1}[r]||0:!c&&u&&(d=r[0],p=r[1]),function(_,g,E){var x=(E||t).length,y=a[x],m,w,T,C,b,I,O,B,M;if(!y){if(M=t.grid==="auto"?0:(t.grid||[1,$i])[1],!M){for(O=-$i;O<(O=E[M++].getBoundingClientRect().left)&&M<x;);M--}for(y=a[x]=[],m=u?Math.min(M,x)*d-.5:r%M,w=M===$i?0:u?x*p/M-.5:r/M|0,O=0,B=$i,I=0;I<x;I++)T=I%M-m,C=w-(I/M|0),y[I]=b=h?Math.abs(h==="y"?C:T):OS(T*T+C*C),b>O&&(O=b),b<B&&(B=b);r==="random"&&JS(y),y.max=O-B,y.min=B,y.v=x=(parseFloat(t.amount)||parseFloat(t.each)*(M>x?x-1:h?h==="y"?x/M:M:Math.max(M,x/M))||0)*(r==="edges"?-1:1),y.b=x<0?s-x:s,y.u=Fn(t.amount||t.each)||0,n=n&&x<0?uM(n):n}return x=(y[_]-y.min)/y.max||0,In(y.b+(n?n(x):x)*y.v)+y.u}},n_=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var r=In(Math.round(parseFloat(n)/e)*e*t);return(r-r%1)/t+(rs(n)?0:Fn(n))}},tM=function(e,t){var n=Hn(e),r,s;return!n&&Pr(e)&&(r=n=e.radius||$i,e.values?(e=Ki(e.values),(s=!rs(e[0]))&&(r*=r)):e=n_(e.increment)),qs(t,n?tn(e)?function(a){return s=e(a),Math.abs(s-a)<=r?s:a}:function(a){for(var c=parseFloat(s?a.x:a),u=parseFloat(s?a.y:0),h=$i,d=0,p=e.length,_,g;p--;)s?(_=e[p].x-c,g=e[p].y-u,_=_*_+g*g):_=Math.abs(e[p]-c),_<h&&(h=_,d=p);return d=!r||h<=r?e[d]:a,s||d===a||rs(a)?d:d+Fn(a)}:n_(e))},nM=function(e,t,n,r){return qs(Hn(e)?!t:n===!0?!!(n=0):!r,function(){return Hn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(r=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*r)/r})},$k=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(r){return t.reduce(function(s,a){return a(s)},r)}},Kk=function(e,t){return function(n){return e(parseFloat(n))+(t||Fn(n))}},jk=function(e,t,n){return rM(e,t,0,1,n)},iM=function(e,t,n){return qs(n,function(r){return e[~~t(r)]})},Zk=function i(e,t,n){var r=t-e;return Hn(e)?iM(e,i(0,e.length),t):qs(n,function(s){return(r+(s-e)%r)%r+e})},Qk=function i(e,t,n){var r=t-e,s=r*2;return Hn(e)?iM(e,i(0,e.length-1),t):qs(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>r?s-a:a)})},dc=function(e){for(var t=0,n="",r,s,a,c;~(r=e.indexOf("random(",t));)a=e.indexOf(")",r),c=e.charAt(r+7)==="[",s=e.substr(r+7,a-r-7).match(c?kS:Kp),n+=e.substr(t,r-t)+nM(c?s:+s[0],c?0:+s[1],+s[2]||1e-5),t=a+1;return n+e.substr(t,e.length-t)},rM=function(e,t,n,r,s){var a=t-e,c=r-n;return qs(s,function(u){return n+((u-e)/a*c||0)})},Jk=function i(e,t,n,r){var s=isNaN(e+t)?0:function(g){return(1-g)*e+g*t};if(!s){var a=bn(e),c={},u,h,d,p,_;if(n===!0&&(r=1)&&(n=null),a)e={p:e},t={p:t};else if(Hn(e)&&!Hn(t)){for(d=[],p=e.length,_=p-2,h=1;h<p;h++)d.push(i(e[h-1],e[h]));p--,s=function(E){E*=p;var x=Math.min(_,~~E);return d[x](E-x)},n=t}else r||(e=Uo(Hn(e)?[]:{},e));if(!d){for(u in t)fm.call(c,e,u,"get",t[u]);s=function(E){return mm(E,c)||(a?e.p:e)}}}return qs(n,s)},oy=function(e,t,n){var r=e.labels,s=$i,a,c,u;for(a in r)c=r[a]-t,c<0==!!n&&c&&s>(c=Math.abs(c))&&(u=a,s=c);return u},ji=function(e,t,n){var r=e.vars,s=r[t],a=cn,c=e._ctx,u,h,d;if(s)return u=r[t+"Params"],h=r.callbackScope||e,n&&Ls.length&&gh(),c&&(cn=c),d=u?s.apply(h,u):s.call(h),cn=a,d},Hl=function(e){return Ws(e),e.scrollTrigger&&e.scrollTrigger.kill(!!zn),e.progress()<1&&ji(e,"onInterrupt"),e},Ra,sM=[],oM=function(e){if(!om()){sM.push(e);return}e=!e.name&&e.default||e;var t=e.name,n=tn(e),r=t&&!n&&e.init?function(){this._props=[]}:e,s={init:fc,render:mm,add:fm,kill:_z,modifier:pz,rawVars:0},a={targetTest:0,get:0,getSetter:_m,aliases:{},register:0};if(Za(),e!==r){if(yi[t])return;Zi(r,Zi(vh(e,s),a)),Uo(r.prototype,Uo(s,vh(e,a))),yi[r.prop=t]=r,e.targetTest&&(ju.push(r),cm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}GS(t,r),e.register&&e.register(li,r,ai)},Ot=255,Gl={aqua:[0,Ot,Ot],lime:[0,Ot,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ot],navy:[0,0,128],white:[Ot,Ot,Ot],olive:[128,128,0],yellow:[Ot,Ot,0],orange:[Ot,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ot,0,0],pink:[Ot,192,203],cyan:[0,Ot,Ot],transparent:[Ot,Ot,Ot,0]},sp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Ot+.5|0},aM=function(e,t,n){var r=e?rs(e)?[e>>16,e>>8&Ot,e&Ot]:0:Gl.black,s,a,c,u,h,d,p,_,g,E;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Gl[e])r=Gl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),c=e.charAt(3),e="#"+s+s+a+a+c+c+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Ot,r&Ot,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Ot,e&Ot]}else if(e.substr(0,3)==="hsl"){if(r=E=e.match(Kp),!t)u=+r[0]%360/360,h=+r[1]/100,d=+r[2]/100,a=d<=.5?d*(h+1):d+h-d*h,s=d*2-a,r.length>3&&(r[3]*=1),r[0]=sp(u+1/3,s,a),r[1]=sp(u,s,a),r[2]=sp(u-1/3,s,a);else if(~e.indexOf("="))return r=e.match(FS),n&&r.length<4&&(r[3]=1),r}else r=e.match(Kp)||Gl.transparent;r=r.map(Number)}return t&&!E&&(s=r[0]/Ot,a=r[1]/Ot,c=r[2]/Ot,p=Math.max(s,a,c),_=Math.min(s,a,c),d=(p+_)/2,p===_?u=h=0:(g=p-_,h=d>.5?g/(2-p-_):g/(p+_),u=p===s?(a-c)/g+(a<c?6:0):p===a?(c-s)/g+2:(s-a)/g+4,u*=60),r[0]=~~(u+.5),r[1]=~~(h*100+.5),r[2]=~~(d*100+.5)),n&&r.length<4&&(r[3]=1),r},lM=function(e){var t=[],n=[],r=-1;return e.split(Ds).forEach(function(s){var a=s.match(Ca)||[];t.push.apply(t,a),n.push(r+=a.length+1)}),t.c=n,t},ay=function(e,t,n){var r="",s=(e+r).match(Ds),a=t?"hsla(":"rgba(",c=0,u,h,d,p;if(!s)return e;if(s=s.map(function(_){return(_=aM(_,t,1))&&a+(t?_[0]+","+_[1]+"%,"+_[2]+"%,"+_[3]:_.join(","))+")"}),n&&(d=lM(e),u=n.c,u.join(r)!==d.c.join(r)))for(h=e.replace(Ds,"1").split(Ca),p=h.length-1;c<p;c++)r+=h[c]+(~u.indexOf(c)?s.shift()||a+"0,0,0,0)":(d.length?d:s.length?s:n).shift());if(!h)for(h=e.split(Ds),p=h.length-1;c<p;c++)r+=h[c]+s[c];return r+h[p]},Ds=function(){var i="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Gl)i+="|"+e+"\\b";return new RegExp(i+")","gi")}(),ez=/hsl[a]?\(/,cM=function(e){var t=e.join(" "),n;if(Ds.lastIndex=0,Ds.test(t))return n=ez.test(t),e[1]=ay(e[1],n),e[0]=ay(e[0],n,lM(e[1])),!0},pc,Si=function(){var i=Date.now,e=500,t=33,n=i(),r=n,s=1e3/240,a=s,c=[],u,h,d,p,_,g,E=function x(y){var m=i()-r,w=y===!0,T,C,b,I;if(m>e&&(n+=m-t),r+=m,b=r-n,T=b-a,(T>0||w)&&(I=++p.frame,_=b-p.time*1e3,p.time=b=b/1e3,a+=T+(T>=s?4:s-T),C=1),w||(u=h(x)),C)for(g=0;g<c.length;g++)c[g](b,_,I,y)};return p={time:0,frame:0,tick:function(){E(!0)},deltaRatio:function(y){return _/(1e3/(y||60))},wake:function(){zS&&(!jp&&om()&&(Gi=jp=window,am=Gi.document||{},Ci.gsap=li,(Gi.gsapVersions||(Gi.gsapVersions=[])).push(li.version),HS(_h||Gi.GreenSockGlobals||!Gi.gsap&&Gi||{}),d=Gi.requestAnimationFrame,sM.forEach(oM)),u&&p.sleep(),h=d||function(y){return setTimeout(y,a-p.time*1e3+1|0)},pc=1,E(2))},sleep:function(){(d?Gi.cancelAnimationFrame:clearTimeout)(u),pc=0,h=fc},lagSmoothing:function(y,m){e=y||1/0,t=Math.min(m||33,e)},fps:function(y){s=1e3/(y||240),a=p.time*1e3+s},add:function(y,m,w){var T=m?function(C,b,I,O){y(C,b,I,O),p.remove(T)}:y;return p.remove(y),c[w?"unshift":"push"](T),Za(),T},remove:function(y,m){~(m=c.indexOf(y))&&c.splice(m,1)&&g>=m&&g--},_listeners:c},p}(),Za=function(){return!pc&&Si.wake()},xt={},tz=/^[\d.\-M][\d.\-,\s]/,nz=/["']/g,iz=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),r=n[0],s=1,a=n.length,c,u,h;s<a;s++)u=n[s],c=s!==a-1?u.lastIndexOf(","):u.length,h=u.substr(0,c),t[r]=isNaN(h)?h.replace(nz,"").trim():+h,r=u.substr(c+1).trim();return t},rz=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<n?e.indexOf(")",n+1):n)},sz=function(e){var t=(e+"").split("("),n=xt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[iz(t[1])]:rz(e).split(",").map(qS)):xt._CE&&tz.test(e)?xt._CE("",e):n},uM=function(e){return function(t){return 1-e(1-t)}},hM=function i(e,t){for(var n=e._first,r;n;)n instanceof ti?i(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?i(n.timeline,t):(r=n._ease,n._ease=n._yEase,n._yEase=r,n._yoyo=t)),n=n._next},bo=function(e,t){return e&&(tn(e)?e:xt[e]||sz(e))||t},Go=function(e,t,n,r){n===void 0&&(n=function(u){return 1-t(1-u)}),r===void 0&&(r=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:r},a;return oi(e,function(c){xt[c]=Ci[c]=s,xt[a=c.toLowerCase()]=n;for(var u in s)xt[a+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=xt[c+"."+u]=s[u]}),s},fM=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},op=function i(e,t,n){var r=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/$p*(Math.asin(1/r)||0),c=function(d){return d===1?1:r*Math.pow(2,-10*d)*Dk((d-a)*s)+1},u=e==="out"?c:e==="in"?function(h){return 1-c(1-h)}:fM(c);return s=$p/s,u.config=function(h,d){return i(e,h,d)},u},ap=function i(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},r=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:fM(n);return r.config=function(s){return i(e,s)},r};oi("Linear,Quad,Cubic,Quart,Quint,Strong",function(i,e){var t=e<5?e+1:e;Go(i+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});xt.Linear.easeNone=xt.none=xt.Linear.easeIn;Go("Elastic",op("in"),op("out"),op());(function(i,e){var t=1/e,n=2*t,r=2.5*t,s=function(c){return c<t?i*c*c:c<n?i*Math.pow(c-1.5/e,2)+.75:c<r?i*(c-=2.25/e)*c+.9375:i*Math.pow(c-2.625/e,2)+.984375};Go("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Go("Expo",function(i){return i?Math.pow(2,10*(i-1)):0});Go("Circ",function(i){return-(OS(1-i*i)-1)});Go("Sine",function(i){return i===1?1:-Lk(i*Pk)+1});Go("Back",ap("in"),ap("out"),ap());xt.SteppedEase=xt.steps=Ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,r=e+(t?0:1),s=t?1:0,a=1-Bt;return function(c){return((r*Lc(0,a,c)|0)+s)*n}}};$a.ease=xt["quad.out"];oi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(i){return um+=i+","+i+"Params,"});var dM=function(e,t){this.id=Ik++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:VS,this.set=t?t.getSetter:_m},Qa=function(){function i(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,ja(this,+t.duration,1,1),this.data=t.data,cn&&(this._ctx=cn,cn.data.push(this)),pc||Si.wake()}var e=i.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,ja(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,r){if(Za(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(tf(this,n),!s._dp||s.parent||KS(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Sr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===Bt||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),XS(this,n,r)),this},e.time=function(n,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+ry(this))%(this._dur+this._rDelay)||(n?this._dur:0),r):this._time},e.totalProgress=function(n,r){return arguments.length?this.totalTime(this.totalDuration()*n,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(n,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+ry(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(n,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,r):this._repeat?Ka(this._tTime,s)+1:1},e.timeScale=function(n){if(!arguments.length)return this._rts===-Bt?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?xh(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Bt?0:this._rts,this.totalTime(Lc(-Math.abs(this._delay),this._tDur,r),!0),ef(this),zk(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Za(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Bt&&(this._tTime-=Bt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&Sr(r,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(si(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var r=this.parent||this._dp;return r?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?xh(r.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=Uk);var r=zn;return zn=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),zn=r,this},e.globalTime=function(n){for(var r=this,s=arguments.length?n:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,sy(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var r=this._time;return this._rDelay=n,sy(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,r){return this.totalTime(Hi(this,n),si(r))},e.restart=function(n,r){return this.play().totalTime(n?-this._delay:0,si(r))},e.play=function(n,r){return n!=null&&this.seek(n,r),this.reversed(!1).paused(!1)},e.reverse=function(n,r){return n!=null&&this.seek(n||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(n,r){return n!=null&&this.seek(n,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Bt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Bt,this},e.isActive=function(){var n=this.parent||this._dp,r=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=r&&s<this.endTime(!0)-Bt)},e.eventCallback=function(n,r,s){var a=this.vars;return arguments.length>1?(r?(a[n]=r,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=r)):delete a[n],this):a[n]},e.then=function(n){var r=this;return new Promise(function(s){var a=tn(n)?n:YS,c=function(){var h=r.then;r.then=null,tn(a)&&(a=a(r))&&(a.then||a===r)&&(r.then=h),s(a),r.then=h};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?c():r._prom=c})},e.kill=function(){Hl(this)},i}();Zi(Qa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Bt,_prom:0,_ps:!1,_rts:1});var ti=function(i){NS(e,i);function e(n,r){var s;return n===void 0&&(n={}),s=i.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=si(n.sortChildren),jt&&Sr(n.parent||jt,$r(s),r),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&jS($r(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,a){return Kl(0,arguments,this),this},t.from=function(r,s,a){return Kl(1,arguments,this),this},t.fromTo=function(r,s,a,c){return Kl(2,arguments,this),this},t.set=function(r,s,a){return s.duration=0,s.parent=this,$l(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new fn(r,s,Hi(this,a),1),this},t.call=function(r,s,a){return Sr(this,fn.delayedCall(0,r,s),a)},t.staggerTo=function(r,s,a,c,u,h,d){return a.duration=s,a.stagger=a.stagger||c,a.onComplete=h,a.onCompleteParams=d,a.parent=this,new fn(r,a,Hi(this,u)),this},t.staggerFrom=function(r,s,a,c,u,h,d){return a.runBackwards=1,$l(a).immediateRender=si(a.immediateRender),this.staggerTo(r,s,a,c,u,h,d)},t.staggerFromTo=function(r,s,a,c,u,h,d,p){return c.startAt=a,$l(c).immediateRender=si(c.immediateRender),this.staggerTo(r,s,c,u,h,d,p)},t.render=function(r,s,a){var c=this._time,u=this._dirty?this.totalDuration():this._tDur,h=this._dur,d=r<=0?0:In(r),p=this._zTime<0!=r<0&&(this._initted||!h),_,g,E,x,y,m,w,T,C,b,I,O;if(this!==jt&&d>u&&r>=0&&(d=u),d!==this._tTime||a||p){if(c!==this._time&&h&&(d+=this._time-c,r+=this._time-c),_=d,C=this._start,T=this._ts,m=!T,p&&(h||(c=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(I=this._yoyo,y=h+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(y*100+r,s,a);if(_=In(d%y),d===u?(x=this._repeat,_=h):(x=~~(d/y),x&&x===d/y&&(_=h,x--),_>h&&(_=h)),b=Ka(this._tTime,y),!c&&this._tTime&&b!==x&&this._tTime-b*y-this._dur<=0&&(b=x),I&&x&1&&(_=h-_,O=1),x!==b&&!this._lock){var B=I&&b&1,M=B===(I&&x&1);if(x<b&&(B=!B),c=B?0:h,this._lock=1,this.render(c||(O?0:In(x*y)),s,!h)._lock=0,this._tTime=d,!s&&this.parent&&ji(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1),c&&c!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,u=this._tDur,M&&(this._lock=2,c=B?h:-1e-4,this.render(c,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;hM(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(w=Vk(this,In(c),In(_)),w&&(d-=_-(_=w._start))),this._tTime=d,this._time=_,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,c=0),!c&&_&&!s&&!x&&(ji(this,"onStart"),this._tTime!==d))return this;if(_>=c&&r>=0)for(g=this._first;g;){if(E=g._next,(g._act||_>=g._start)&&g._ts&&w!==g){if(g.parent!==this)return this.render(r,s,a);if(g.render(g._ts>0?(_-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(_-g._start)*g._ts,s,a),_!==this._time||!this._ts&&!m){w=0,E&&(d+=this._zTime=-Bt);break}}g=E}else{g=this._last;for(var L=r<0?r:_;g;){if(E=g._prev,(g._act||L<=g._end)&&g._ts&&w!==g){if(g.parent!==this)return this.render(r,s,a);if(g.render(g._ts>0?(L-g._start)*g._ts:(g._dirty?g.totalDuration():g._tDur)+(L-g._start)*g._ts,s,a||zn&&(g._initted||g._startAt)),_!==this._time||!this._ts&&!m){w=0,E&&(d+=this._zTime=L?-Bt:Bt);break}}g=E}}if(w&&!s&&(this.pause(),w.render(_>=c?0:-Bt)._zTime=_>=c?1:-1,this._ts))return this._start=C,ef(this),this.render(r,s,a);this._onUpdate&&!s&&ji(this,"onUpdate",!0),(d===u&&this._tTime>=this.totalDuration()||!d&&c)&&(C===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((r||!h)&&(d===u&&this._ts>0||!d&&this._ts<0)&&Ws(this,1),!s&&!(r<0&&!c)&&(d||c||!u)&&(ji(this,d===u&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(d<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var a=this;if(rs(s)||(s=Hi(this,s,r)),!(r instanceof Qa)){if(Hn(r))return r.forEach(function(c){return a.add(c,s)}),this;if(bn(r))return this.addLabel(r,s);if(tn(r))r=fn.delayedCall(0,r);else return this}return this!==r?Sr(this,r,s):this},t.getChildren=function(r,s,a,c){r===void 0&&(r=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),c===void 0&&(c=-$i);for(var u=[],h=this._first;h;)h._start>=c&&(h instanceof fn?s&&u.push(h):(a&&u.push(h),r&&u.push.apply(u,h.getChildren(!0,s,a)))),h=h._next;return u},t.getById=function(r){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===r)return s[a]},t.remove=function(r){return bn(r)?this.removeLabel(r):tn(r)?this.killTweensOf(r):(Jh(this,r),r===this._recent&&(this._recent=this._last),wo(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=In(Si.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),i.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Hi(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,a){var c=fn.delayedCall(0,s||fc,a);return c.data="isPause",this._hasPause=1,Sr(this,c,Hi(this,r))},t.removePause=function(r){var s=this._first;for(r=Hi(this,r);s;)s._start===r&&s.data==="isPause"&&Ws(s),s=s._next},t.killTweensOf=function(r,s,a){for(var c=this.getTweensOf(r,a),u=c.length;u--;)Ms!==c[u]&&c[u].kill(r,s);return this},t.getTweensOf=function(r,s){for(var a=[],c=Ki(r),u=this._first,h=rs(s),d;u;)u instanceof fn?Fk(u._targets,c)&&(h?(!Ms||u._initted&&u._ts)&&u.globalTime(0)<=s&&u.globalTime(u.totalDuration())>s:!s||u.isActive())&&a.push(u):(d=u.getTweensOf(c,s)).length&&a.push.apply(a,d),u=u._next;return a},t.tweenTo=function(r,s){s=s||{};var a=this,c=Hi(a,r),u=s,h=u.startAt,d=u.onStart,p=u.onStartParams,_=u.immediateRender,g,E=fn.to(a,Zi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:c,overwrite:"auto",duration:s.duration||Math.abs((c-(h&&"time"in h?h.time:a._time))/a.timeScale())||Bt,onStart:function(){if(a.pause(),!g){var y=s.duration||Math.abs((c-(h&&"time"in h?h.time:a._time))/a.timeScale());E._dur!==y&&ja(E,y,0,1).render(E._time,!0,!0),g=1}d&&d.apply(E,p||[])}},s));return _?E.render(0):E},t.tweenFromTo=function(r,s,a){return this.tweenTo(s,Zi({startAt:{time:Hi(this,r)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),oy(this,Hi(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),oy(this,Hi(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+Bt)},t.shiftChildren=function(r,s,a){a===void 0&&(a=0);for(var c=this._first,u=this.labels,h;c;)c._start>=a&&(c._start+=r,c._end+=r),c=c._next;if(s)for(h in u)u[h]>=a&&(u[h]+=r);return wo(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return i.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),wo(this)},t.totalDuration=function(r){var s=0,a=this,c=a._last,u=$i,h,d,p;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-r:r));if(a._dirty){for(p=a.parent;c;)h=c._prev,c._dirty&&c.totalDuration(),d=c._start,d>u&&a._sort&&c._ts&&!a._lock?(a._lock=1,Sr(a,c,d-c._delay,1)._lock=0):u=d,d<0&&c._ts&&(s-=d,(!p&&!a._dp||p&&p.smoothChildTiming)&&(a._start+=d/a._ts,a._time-=d,a._tTime-=d),a.shiftChildren(-d,!1,-1/0),u=0),c._end>s&&c._ts&&(s=c._end),c=h;ja(a,a===jt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(r){if(jt._ts&&(XS(jt,xh(r,jt)),WS=Si.frame),Si.frame>=ny){ny+=wi.autoSleep||120;var s=jt._first;if((!s||!s._ts)&&wi.autoSleep&&Si._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Si.sleep()}}},e}(Qa);Zi(ti.prototype,{_lock:0,_hasPause:0,_forcing:0});var oz=function(e,t,n,r,s,a,c){var u=new ai(this._pt,e,t,0,1,xM,null,s),h=0,d=0,p,_,g,E,x,y,m,w;for(u.b=n,u.e=r,n+="",r+="",(m=~r.indexOf("random("))&&(r=dc(r)),a&&(w=[n,r],a(w,e,t),n=w[0],r=w[1]),_=n.match(ip)||[];p=ip.exec(r);)E=p[0],x=r.substring(h,p.index),g?g=(g+1)%5:x.substr(-5)==="rgba("&&(g=1),E!==_[d++]&&(y=parseFloat(_[d-1])||0,u._pt={_next:u._pt,p:x||d===1?x:",",s:y,c:E.charAt(1)==="="?Oa(y,E)-y:parseFloat(E)-y,m:g&&g<4?Math.round:0},h=ip.lastIndex);return u.c=h<r.length?r.substring(h,r.length):"",u.fp=c,(BS.test(r)||m)&&(u.e=0),this._pt=u,u},fm=function(e,t,n,r,s,a,c,u,h,d){tn(r)&&(r=r(s||0,e,a));var p=e[t],_=n!=="get"?n:tn(p)?h?e[t.indexOf("set")||!tn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():p,g=tn(p)?h?hz:gM:pm,E;if(bn(r)&&(~r.indexOf("random(")&&(r=dc(r)),r.charAt(1)==="="&&(E=Oa(_,r)+(Fn(_)||0),(E||E===0)&&(r=E))),!d||_!==r||i_)return!isNaN(_*r)&&r!==""?(E=new ai(this._pt,e,t,+_||0,r-(_||0),typeof p=="boolean"?dz:vM,0,g),h&&(E.fp=h),c&&E.modifier(c,this,e),this._pt=E):(!p&&!(t in e)&&lm(t,r),oz.call(this,e,t,_,r,g,u||wi.stringFilter,h))},az=function(e,t,n,r,s){if(tn(e)&&(e=jl(e,s,t,n,r)),!Pr(e)||e.style&&e.nodeType||Hn(e)||US(e))return bn(e)?jl(e,s,t,n,r):e;var a={},c;for(c in e)a[c]=jl(e[c],s,t,n,r);return a},pM=function(e,t,n,r,s,a){var c,u,h,d;if(yi[e]&&(c=new yi[e]).init(s,c.rawVars?t[e]:az(t[e],r,s,a,n),n,r,a)!==!1&&(n._pt=u=new ai(n._pt,s,e,0,1,c.render,c,0,c.priority),n!==Ra))for(h=n._ptLookup[n._targets.indexOf(s)],d=c._props.length;d--;)h[c._props[d]]=u;return c},Ms,i_,dm=function i(e,t,n){var r=e.vars,s=r.ease,a=r.startAt,c=r.immediateRender,u=r.lazy,h=r.onUpdate,d=r.onUpdateParams,p=r.callbackScope,_=r.runBackwards,g=r.yoyoEase,E=r.keyframes,x=r.autoRevert,y=e._dur,m=e._startAt,w=e._targets,T=e.parent,C=T&&T.data==="nested"?T.vars.targets:w,b=e._overwrite==="auto"&&!rm,I=e.timeline,O,B,M,L,Q,te,W,$,j,le,J,ne,ge;if(I&&(!E||!s)&&(s="none"),e._ease=bo(s,$a.ease),e._yEase=g?uM(bo(g===!0?s:g,$a.ease)):0,g&&e._yoyo&&!e._repeat&&(g=e._yEase,e._yEase=e._ease,e._ease=g),e._from=!I&&!!r.runBackwards,!I||E&&!r.stagger){if($=w[0]?To(w[0]).harness:0,ne=$&&r[$.prop],O=vh(r,cm),m&&(m._zTime<0&&m.progress(1),t<0&&_&&c&&!x?m.render(-1,!0):m.revert(_&&y?Ku:Ok),m._lazy=0),a){if(Ws(e._startAt=fn.set(w,Zi({data:"isStart",overwrite:!1,parent:T,immediateRender:!0,lazy:!m&&si(u),startAt:null,delay:0,onUpdate:h,onUpdateParams:d,callbackScope:p,stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zn||!c&&!x)&&e._startAt.revert(Ku),c&&y&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(_&&y&&!m){if(t&&(c=!1),M=Zi({overwrite:!1,data:"isFromStart",lazy:c&&!m&&si(u),immediateRender:c,stagger:0,parent:T},O),ne&&(M[$.prop]=ne),Ws(e._startAt=fn.set(w,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(zn?e._startAt.revert(Ku):e._startAt.render(-1,!0)),e._zTime=t,!c)i(e._startAt,Bt,Bt);else if(!t)return}for(e._pt=e._ptCache=0,u=y&&si(u)||u&&!y,B=0;B<w.length;B++){if(Q=w[B],W=Q._gsap||hm(w)[B]._gsap,e._ptLookup[B]=le={},Zp[W.id]&&Ls.length&&gh(),J=C===w?B:C.indexOf(Q),$&&(j=new $).init(Q,ne||O,e,J,C)!==!1&&(e._pt=L=new ai(e._pt,Q,j.name,0,1,j.render,j,0,j.priority),j._props.forEach(function(he){le[he]=L}),j.priority&&(te=1)),!$||ne)for(M in O)yi[M]&&(j=pM(M,O,e,J,Q,C))?j.priority&&(te=1):le[M]=L=fm.call(e,Q,M,"get",O[M],J,C,0,r.stringFilter);e._op&&e._op[B]&&e.kill(Q,e._op[B]),b&&e._pt&&(Ms=e,jt.killTweensOf(Q,le,e.globalTime(t)),ge=!e.parent,Ms=0),e._pt&&u&&(Zp[W.id]=1)}te&&yM(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!ge,E&&t<=0&&I.render($i,!0,!0)},lz=function(e,t,n,r,s,a,c){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,d,p,_;if(!u)for(u=e._ptCache[t]=[],p=e._ptLookup,_=e._targets.length;_--;){if(h=p[_][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return i_=1,e.vars[t]="+=0",dm(e,c),i_=0,1;u.push(h)}for(_=u.length;_--;)d=u[_],h=d._pt||d,h.s=(r||r===0)&&!s?r:h.s+(r||0)+a*h.c,h.c=n-h.s,d.e&&(d.e=on(n)+Fn(d.e)),d.b&&(d.b=h.s+Fn(d.b))},cz=function(e,t){var n=e[0]?To(e[0]).harness:0,r=n&&n.aliases,s,a,c,u;if(!r)return t;s=Uo({},t);for(a in r)if(a in s)for(u=r[a].split(","),c=u.length;c--;)s[u[c]]=s[a];return s},uz=function(e,t,n,r){var s=t.ease||r||"power1.inOut",a,c;if(Hn(t))c=n[e]||(n[e]=[]),t.forEach(function(u,h){return c.push({t:h/(t.length-1)*100,v:u,e:s})});else for(a in t)c=n[a]||(n[a]=[]),a==="ease"||c.push({t:parseFloat(e),v:t[a],e:s})},jl=function(e,t,n,r,s){return tn(e)?e.call(t,n,r,s):bn(e)&&~e.indexOf("random(")?dc(e):e},_M=um+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",mM={};oi(_M+",id,stagger,delay,duration,paused,scrollTrigger",function(i){return mM[i]=1});var fn=function(i){NS(e,i);function e(n,r,s,a){var c;typeof r=="number"&&(s.duration=r,r=s,s=null),c=i.call(this,a?r:$l(r))||this;var u=c.vars,h=u.duration,d=u.delay,p=u.immediateRender,_=u.stagger,g=u.overwrite,E=u.keyframes,x=u.defaults,y=u.scrollTrigger,m=u.yoyoEase,w=r.parent||jt,T=(Hn(n)||US(n)?rs(n[0]):"length"in r)?[n]:Ki(n),C,b,I,O,B,M,L,Q;if(c._targets=T.length?hm(T):mh("GSAP target "+n+" not found. https://greensock.com",!wi.nullTargetWarn)||[],c._ptLookup=[],c._overwrite=g,E||_||qu(h)||qu(d)){if(r=c.vars,C=c.timeline=new ti({data:"nested",defaults:x||{},targets:w&&w.data==="nested"?w.vars.targets:T}),C.kill(),C.parent=C._dp=$r(c),C._start=0,_||qu(h)||qu(d)){if(O=T.length,L=_&&eM(_),Pr(_))for(B in _)~_M.indexOf(B)&&(Q||(Q={}),Q[B]=_[B]);for(b=0;b<O;b++)I=vh(r,mM),I.stagger=0,m&&(I.yoyoEase=m),Q&&Uo(I,Q),M=T[b],I.duration=+jl(h,$r(c),b,M,T),I.delay=(+jl(d,$r(c),b,M,T)||0)-c._delay,!_&&O===1&&I.delay&&(c._delay=d=I.delay,c._start+=d,I.delay=0),C.to(M,I,L?L(b,M,T):0),C._ease=xt.none;C.duration()?h=d=0:c.timeline=0}else if(E){$l(Zi(C.vars.defaults,{ease:"none"})),C._ease=bo(E.ease||r.ease||"none");var te=0,W,$,j;if(Hn(E))E.forEach(function(le){return C.to(T,le,">")}),C.duration();else{I={};for(B in E)B==="ease"||B==="easeEach"||uz(B,E[B],I,E.easeEach);for(B in I)for(W=I[B].sort(function(le,J){return le.t-J.t}),te=0,b=0;b<W.length;b++)$=W[b],j={ease:$.e,duration:($.t-(b?W[b-1].t:0))/100*h},j[B]=$.v,C.to(T,j,te),te+=j.duration;C.duration()<h&&C.to({},{duration:h-C.duration()})}}h||c.duration(h=C.duration())}else c.timeline=0;return g===!0&&!rm&&(Ms=$r(c),jt.killTweensOf(T),Ms=0),Sr(w,$r(c),s),r.reversed&&c.reverse(),r.paused&&c.paused(!0),(p||!h&&!E&&c._start===In(w._time)&&si(p)&&Hk($r(c))&&w.data!=="nested")&&(c._tTime=-Bt,c.render(Math.max(0,-d)||0)),y&&jS($r(c),y),c}var t=e.prototype;return t.render=function(r,s,a){var c=this._time,u=this._tDur,h=this._dur,d=r<0,p=r>u-Bt&&!d?u:r<Bt?0:r,_,g,E,x,y,m,w,T,C;if(!h)Wk(this,r,s,a);else if(p!==this._tTime||!r||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==d){if(_=p,T=this.timeline,this._repeat){if(x=h+this._rDelay,this._repeat<-1&&d)return this.totalTime(x*100+r,s,a);if(_=In(p%x),p===u?(E=this._repeat,_=h):(E=~~(p/x),E&&E===p/x&&(_=h,E--),_>h&&(_=h)),m=this._yoyo&&E&1,m&&(C=this._yEase,_=h-_),y=Ka(this._tTime,x),_===c&&!a&&this._initted)return this._tTime=p,this;E!==y&&(T&&this._yEase&&hM(T,m),this.vars.repeatRefresh&&!m&&!this._lock&&(this._lock=a=1,this.render(In(x*E),!0).invalidate()._lock=0))}if(!this._initted){if(ZS(this,d?r:_,a,s,p))return this._tTime=0,this;if(c!==this._time)return this;if(h!==this._dur)return this.render(r,s,a)}if(this._tTime=p,this._time=_,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=w=(C||this._ease)(_/h),this._from&&(this.ratio=w=1-w),_&&!c&&!s&&!E&&(ji(this,"onStart"),this._tTime!==p))return this;for(g=this._pt;g;)g.r(w,g.d),g=g._next;T&&T.render(r<0?r:!_&&m?-Bt:T._dur*T._ease(_/this._dur),s,a)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(d&&Qp(this,r,s,a),ji(this,"onUpdate")),this._repeat&&E!==y&&this.vars.onRepeat&&!s&&this.parent&&ji(this,"onRepeat"),(p===this._tDur||!p)&&this._tTime===p&&(d&&!this._onUpdate&&Qp(this,r,!0,!0),(r||!h)&&(p===this._tDur&&this._ts>0||!p&&this._ts<0)&&Ws(this,1),!s&&!(d&&!c)&&(p||c||m)&&(ji(this,p===u?"onComplete":"onReverseComplete",!0),this._prom&&!(p<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),i.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,a,c){pc||Si.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||dm(this,u),h=this._ease(u/this._dur),lz(this,r,s,a,c,h,u)?this.resetTo(r,s,a,c):(tf(this,0),this.parent||$S(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Hl(this):this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,Ms&&Ms.vars.overwrite!==!0)._first||Hl(this),this.parent&&a!==this.timeline.totalDuration()&&ja(this,this._dur*this.timeline._tDur/a,0,1),this}var c=this._targets,u=r?Ki(r):c,h=this._ptLookup,d=this._pt,p,_,g,E,x,y,m;if((!s||s==="all")&&kk(c,u))return s==="all"&&(this._pt=0),Hl(this);for(p=this._op=this._op||[],s!=="all"&&(bn(s)&&(x={},oi(s,function(w){return x[w]=1}),s=x),s=cz(c,s)),m=c.length;m--;)if(~u.indexOf(c[m])){_=h[m],s==="all"?(p[m]=s,E=_,g={}):(g=p[m]=p[m]||{},E=s);for(x in E)y=_&&_[x],y&&((!("kill"in y.d)||y.d.kill(x)===!0)&&Jh(this,y,"_pt"),delete _[x]),g!=="all"&&(g[x]=1)}return this._initted&&!this._pt&&d&&Hl(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Kl(1,arguments)},e.delayedCall=function(r,s,a,c){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:c})},e.fromTo=function(r,s,a){return Kl(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,a){return jt.killTweensOf(r,s,a)},e}(Qa);Zi(fn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});oi("staggerTo,staggerFrom,staggerFromTo",function(i){fn[i]=function(){var e=new ti,t=e_.call(arguments,0);return t.splice(i==="staggerFromTo"?5:4,0,0),e[i].apply(e,t)}});var pm=function(e,t,n){return e[t]=n},gM=function(e,t,n){return e[t](n)},hz=function(e,t,n,r){return e[t](r.fp,n)},fz=function(e,t,n){return e.setAttribute(t,n)},_m=function(e,t){return tn(e[t])?gM:sm(e[t])&&e.setAttribute?fz:pm},vM=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},dz=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},xM=function(e,t){var n=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;n;)r=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+r,n=n._next;r+=t.c}t.set(t.t,t.p,r,t)},mm=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},pz=function(e,t,n,r){for(var s=this._pt,a;s;)a=s._next,s.p===r&&s.modifier(e,t,n),s=a},_z=function(e){for(var t=this._pt,n,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Jh(this,t,"_pt"):t.dep||(n=1),t=r;return!n},mz=function(e,t,n,r){r.mSet(e,t,r.m.call(r.tween,n,r.mt),r)},yM=function(e){for(var t=e._pt,n,r,s,a;t;){for(n=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:a)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:a=t,t=n}e._pt=s},ai=function(){function i(t,n,r,s,a,c,u,h,d){this.t=n,this.s=s,this.c=a,this.p=r,this.r=c||vM,this.d=u||this,this.set=h||pm,this.pr=d||0,this._next=t,t&&(t._prev=this)}var e=i.prototype;return e.modifier=function(n,r,s){this.mSet=this.mSet||this.set,this.set=mz,this.m=n,this.mt=s,this.tween=r},i}();oi(um+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(i){return cm[i]=1});Ci.TweenMax=Ci.TweenLite=fn;Ci.TimelineLite=Ci.TimelineMax=ti;jt=new ti({sortChildren:!1,defaults:$a,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});wi.stringFilter=cM;var Ja=[],Zu={},gz=[],ly=0,lp=function(e){return(Zu[e]||gz).map(function(t){return t()})},r_=function(){var e=Date.now(),t=[];e-ly>2&&(lp("matchMediaInit"),Ja.forEach(function(n){var r=n.queries,s=n.conditions,a,c,u,h;for(c in r)a=Gi.matchMedia(r[c]).matches,a&&(u=1),a!==s[c]&&(s[c]=a,h=1);h&&(n.revert(),u&&t.push(n))}),lp("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n)}),ly=e,lp("matchMedia"))},EM=function(){function i(t,n){this.selector=n&&t_(n),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=i.prototype;return e.add=function(n,r,s){tn(n)&&(s=r,r=n,n=tn);var a=this,c=function(){var h=cn,d=a.selector,p;return h&&h!==a&&h.data.push(a),s&&(a.selector=t_(s)),cn=a,p=r.apply(a,arguments),tn(p)&&a._r.push(p),cn=h,a.selector=d,a.isReverted=!1,p};return a.last=c,n===tn?c(a):n?a[n]=c:c},e.ignore=function(n){var r=cn;cn=null,n(this),cn=r},e.getTweens=function(){var n=[];return this.data.forEach(function(r){return r instanceof i?n.push.apply(n,r.getTweens()):r instanceof fn&&!(r.parent&&r.parent.data==="nested")&&n.push(r)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,r){var s=this;if(n){var a=this.getTweens();this.data.forEach(function(u){u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}))}),a.map(function(u){return{g:u.globalTime(0),t:u}}).sort(function(u,h){return h.g-u.g||-1}).forEach(function(u){return u.t.revert(n)}),this.data.forEach(function(u){return!(u instanceof Qa)&&u.revert&&u.revert(n)}),this._r.forEach(function(u){return u(n,s)}),this.isReverted=!0}else this.data.forEach(function(u){return u.kill&&u.kill()});if(this.clear(),r){var c=Ja.indexOf(this);~c&&Ja.splice(c,1)}},e.revert=function(n){this.kill(n||{})},i}(),vz=function(){function i(t){this.contexts=[],this.scope=t}var e=i.prototype;return e.add=function(n,r,s){Pr(n)||(n={matches:n});var a=new EM(0,s||this.scope),c=a.conditions={},u,h,d;this.contexts.push(a),r=a.add("onMatch",r),a.queries=n;for(h in n)h==="all"?d=1:(u=Gi.matchMedia(n[h]),u&&(Ja.indexOf(a)<0&&Ja.push(a),(c[h]=u.matches)&&(d=1),u.addListener?u.addListener(r_):u.addEventListener("change",r_)));return d&&r(a),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(r){return r.kill(n,!0)})},i}(),yh={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(r){return oM(r)})},timeline:function(e){return new ti(e)},getTweensOf:function(e,t){return jt.getTweensOf(e,t)},getProperty:function(e,t,n,r){bn(e)&&(e=Ki(e)[0]);var s=To(e||{}).get,a=n?YS:qS;return n==="native"&&(n=""),e&&(t?a((yi[t]&&yi[t].get||s)(e,t,n,r)):function(c,u,h){return a((yi[c]&&yi[c].get||s)(e,c,u,h))})},quickSetter:function(e,t,n){if(e=Ki(e),e.length>1){var r=e.map(function(d){return li.quickSetter(d,t,n)}),s=r.length;return function(d){for(var p=s;p--;)r[p](d)}}e=e[0]||{};var a=yi[t],c=To(e),u=c.harness&&(c.harness.aliases||{})[t]||t,h=a?function(d){var p=new a;Ra._pt=0,p.init(e,n?d+n:d,Ra,0,[e]),p.render(1,p),Ra._pt&&mm(1,Ra)}:c.set(e,u);return a?h:function(d){return h(e,u,n?d+n:d,c,1)}},quickTo:function(e,t,n){var r,s=li.to(e,Uo((r={},r[t]="+=0.1",r.paused=!0,r),n||{})),a=function(u,h,d){return s.resetTo(t,u,h,d)};return a.tween=s,a},isTweening:function(e){return jt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=bo(e.ease,$a.ease)),iy($a,e||{})},config:function(e){return iy(wi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,r=e.plugins,s=e.defaults,a=e.extendTimeline;(r||"").split(",").forEach(function(c){return c&&!yi[c]&&!Ci[c]&&mh(t+" effect requires "+c+" plugin.")}),rp[t]=function(c,u,h){return n(Ki(c),Zi(u||{},s),h)},a&&(ti.prototype[t]=function(c,u,h){return this.add(rp[t](c,Pr(u)?u:(h=u)&&{},this),h)})},registerEase:function(e,t){xt[e]=bo(t)},parseEase:function(e,t){return arguments.length?bo(e,t):xt},getById:function(e){return jt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new ti(e),r,s;for(n.smoothChildTiming=si(e.smoothChildTiming),jt.remove(n),n._dp=0,n._time=n._tTime=jt._time,r=jt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof fn&&r.vars.onComplete===r._targets[0]))&&Sr(n,r,r._start-r._delay),r=s;return Sr(jt,n,0),n},context:function(e,t){return e?new EM(e,t):cn},matchMedia:function(e){return new vz(e)},matchMediaRefresh:function(){return Ja.forEach(function(e){var t=e.conditions,n,r;for(r in t)t[r]&&(t[r]=!1,n=1);n&&e.revert()})||r_()},addEventListener:function(e,t){var n=Zu[e]||(Zu[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Zu[e],r=n&&n.indexOf(t);r>=0&&n.splice(r,1)},utils:{wrap:Zk,wrapYoyo:Qk,distribute:eM,random:nM,snap:tM,normalize:jk,getUnit:Fn,clamp:qk,splitColor:aM,toArray:Ki,selector:t_,mapRange:rM,pipe:$k,unitize:Kk,interpolate:Jk,shuffle:JS},install:HS,effects:rp,ticker:Si,updateRoot:ti.updateRoot,plugins:yi,globalTimeline:jt,core:{PropTween:ai,globals:GS,Tween:fn,Timeline:ti,Animation:Qa,getCache:To,_removeLinkedListItem:Jh,reverting:function(){return zn},context:function(e){return e&&cn&&(cn.data.push(e),e._ctx=cn),cn},suppressOverwrites:function(e){return rm=e}}};oi("to,from,fromTo,delayedCall,set,killTweensOf",function(i){return yh[i]=fn[i]});Si.add(ti.updateRoot);Ra=yh.to({},{duration:0});var xz=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},yz=function(e,t){var n=e._targets,r,s,a;for(r in t)for(s=n.length;s--;)a=e._ptLookup[s][r],a&&(a=a.d)&&(a._pt&&(a=xz(a,r)),a&&a.modifier&&a.modifier(t[r],e,n[s],r))},cp=function(e,t){return{name:e,rawVars:1,init:function(r,s,a){a._onInit=function(c){var u,h;if(bn(s)&&(u={},oi(s,function(d){return u[d]=1}),s=u),t){u={};for(h in s)u[h]=t(s[h]);s=u}yz(c,s)}}}},li=yh.registerPlugin({name:"attr",init:function(e,t,n,r,s){var a,c,u;this.tween=n;for(a in t)u=e.getAttribute(a)||"",c=this.add(e,"setAttribute",(u||0)+"",t[a],r,s,0,0,a),c.op=a,c.b=u,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)zn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},cp("roundProps",n_),cp("modifiers"),cp("snap",tM))||yh;fn.version=ti.version=li.version="3.11.5";zS=1;om()&&Za();xt.Power0;xt.Power1;xt.Power2;xt.Power3;xt.Power4;xt.Linear;xt.Quad;xt.Cubic;xt.Quart;xt.Quint;xt.Strong;xt.Elastic;xt.Back;xt.SteppedEase;xt.Bounce;xt.Sine;xt.Expo;xt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var cy,Ts,Ua,gm,xo,uy,vm,Ez=function(){return typeof window<"u"},ss={},po=180/Math.PI,Fa=Math.PI/180,Ta=Math.atan2,hy=1e8,xm=/([A-Z])/g,Sz=/(left|right|width|margin|padding|x)/i,Mz=/[\s,\(]\S/,Mr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},s_=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Tz=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wz=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},bz=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},SM=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},MM=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Az=function(e,t,n){return e.style[t]=n},Cz=function(e,t,n){return e.style.setProperty(t,n)},Rz=function(e,t,n){return e._gsap[t]=n},Pz=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Iz=function(e,t,n,r,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},Lz=function(e,t,n,r,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},Qt="transform",pr=Qt+"Origin",Dz=function i(e,t){var n=this,r=this.target,s=r.style;if(e in ss){if(this.tfm=this.tfm||{},e!=="transform")e=Mr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Kr(r,a)}):this.tfm[e]=r._gsap.x?r._gsap[e]:Kr(r,e);else return Mr.transform.split(",").forEach(function(a){return i.call(n,a,t)});if(this.props.indexOf(Qt)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(pr,t,"")),e=Qt}(s||t)&&this.props.push(e,t,s[e])},TM=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Nz=function(){var e=this.props,t=this.target,n=t.style,r=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(xm,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)r[a]=this.tfm[a];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=vm(),(!s||!s.isStart)&&!n[Qt]&&(TM(n),r.uncache=1)}},wM=function(e,t){var n={target:e,props:[],revert:Nz,save:Dz};return e._gsap||li.core.getCache(e),t&&t.split(",").forEach(function(r){return n.save(r)}),n},bM,o_=function(e,t){var n=Ts.createElementNS?Ts.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ts.createElement(e);return n.style?n:Ts.createElement(e)},br=function i(e,t,n){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(xm,"-$1").toLowerCase())||r.getPropertyValue(t)||!n&&i(e,el(t)||t,1)||""},fy="O,Moz,ms,Ms,Webkit".split(","),el=function(e,t,n){var r=t||xo,s=r.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(fy[a]+e in s););return a<0?null:(a===3?"ms":a>=0?fy[a]:"")+e},a_=function(){Ez()&&window.document&&(cy=window,Ts=cy.document,Ua=Ts.documentElement,xo=o_("div")||{style:{}},o_("div"),Qt=el(Qt),pr=Qt+"Origin",xo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bM=!!el("perspective"),vm=li.core.reverting,gm=1)},up=function i(e){var t=o_("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,r=this.nextSibling,s=this.style.cssText,a;if(Ua.appendChild(t),t.appendChild(this),this.style.display="block",e)try{a=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=i}catch{}else this._gsapBBox&&(a=this._gsapBBox());return n&&(r?n.insertBefore(this,r):n.appendChild(this)),Ua.removeChild(t),this.style.cssText=s,a},dy=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},AM=function(e){var t;try{t=e.getBBox()}catch{t=up.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===up||(t=up.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+dy(e,["x","cx","x1"])||0,y:+dy(e,["y","cy","y1"])||0,width:0,height:0}:t},CM=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&AM(e))},_c=function(e,t){if(t){var n=e.style;t in ss&&t!==pr&&(t=Qt),n.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(t.replace(xm,"-$1").toLowerCase())):n.removeAttribute(t)}},ws=function(e,t,n,r,s,a){var c=new ai(e._pt,t,n,0,1,a?MM:SM);return e._pt=c,c.b=r,c.e=s,e._props.push(n),c},py={deg:1,rad:1,turn:1},Oz={grid:1,flex:1},Vs=function i(e,t,n,r){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",c=xo.style,u=Sz.test(t),h=e.tagName.toLowerCase()==="svg",d=(h?"client":"offset")+(u?"Width":"Height"),p=100,_=r==="px",g=r==="%",E,x,y,m;return r===a||!s||py[r]||py[a]?s:(a!=="px"&&!_&&(s=i(e,t,n,"px")),m=e.getCTM&&CM(e),(g||a==="%")&&(ss[t]||~t.indexOf("adius"))?(E=m?e.getBBox()[u?"width":"height"]:e[d],on(g?s/E*p:s/100*E)):(c[u?"width":"height"]=p+(_?a:r),x=~t.indexOf("adius")||r==="em"&&e.appendChild&&!h?e:e.parentNode,m&&(x=(e.ownerSVGElement||{}).parentNode),(!x||x===Ts||!x.appendChild)&&(x=Ts.body),y=x._gsap,y&&g&&y.width&&u&&y.time===Si.time&&!y.uncache?on(s/y.width*p):((g||a==="%")&&!Oz[br(x,"display")]&&(c.position=br(e,"position")),x===e&&(c.position="static"),x.appendChild(xo),E=xo[d],x.removeChild(xo),c.position="absolute",u&&g&&(y=To(x),y.time=Si.time,y.width=x[d]),on(_?E*s/p:E&&s?p/E*s:0))))},Kr=function(e,t,n,r){var s;return gm||a_(),t in Mr&&t!=="transform"&&(t=Mr[t],~t.indexOf(",")&&(t=t.split(",")[0])),ss[t]&&t!=="transform"?(s=gc(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Sh(br(e,pr))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Eh[t]&&Eh[t](e,t,n)||br(e,t)||VS(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Vs(e,t,s,n)+n:s},Uz=function(e,t,n,r){if(!n||n==="none"){var s=el(t,e,1),a=s&&br(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=br(e,"borderTopColor"))}var c=new ai(this._pt,e.style,t,0,1,xM),u=0,h=0,d,p,_,g,E,x,y,m,w,T,C,b;if(c.b=n,c.e=r,n+="",r+="",r==="auto"&&(e.style[t]=r,r=br(e,t)||r,e.style[t]=n),d=[n,r],cM(d),n=d[0],r=d[1],_=n.match(Ca)||[],b=r.match(Ca)||[],b.length){for(;p=Ca.exec(r);)y=p[0],w=r.substring(u,p.index),E?E=(E+1)%5:(w.substr(-5)==="rgba("||w.substr(-5)==="hsla(")&&(E=1),y!==(x=_[h++]||"")&&(g=parseFloat(x)||0,C=x.substr((g+"").length),y.charAt(1)==="="&&(y=Oa(g,y)+C),m=parseFloat(y),T=y.substr((m+"").length),u=Ca.lastIndex-T.length,T||(T=T||wi.units[t]||C,u===r.length&&(r+=T,c.e+=T)),C!==T&&(g=Vs(e,t,x,T)||0),c._pt={_next:c._pt,p:w||h===1?w:",",s:g,c:m-g,m:E&&E<4||t==="zIndex"?Math.round:0});c.c=u<r.length?r.substring(u,r.length):""}else c.r=t==="display"&&r==="none"?MM:SM;return BS.test(r)&&(c.e=0),this._pt=c,c},_y={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Fz=function(e){var t=e.split(" "),n=t[0],r=t[1]||"50%";return(n==="top"||n==="bottom"||r==="left"||r==="right")&&(e=n,n=r,r=e),t[0]=_y[n]||n,t[1]=_y[r]||r,t.join(" ")},Bz=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,r=n.style,s=t.u,a=n._gsap,c,u,h;if(s==="all"||s===!0)r.cssText="",u=1;else for(s=s.split(","),h=s.length;--h>-1;)c=s[h],ss[c]&&(u=1,c=c==="transformOrigin"?pr:Qt),_c(n,c);u&&(_c(n,Qt),a&&(a.svg&&n.removeAttribute("transform"),gc(n,1),a.uncache=1,TM(r)))}},Eh={clearProps:function(e,t,n,r,s){if(s.data!=="isFromStart"){var a=e._pt=new ai(e._pt,t,n,0,0,Bz);return a.u=r,a.pr=-10,a.tween=s,e._props.push(n),1}}},mc=[1,0,0,1,0,0],RM={},PM=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},my=function(e){var t=br(e,Qt);return PM(t)?mc:t.substr(7).match(FS).map(on)},ym=function(e,t){var n=e._gsap||To(e),r=e.style,s=my(e),a,c,u,h;return n.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,s=[u.a,u.b,u.c,u.d,u.e,u.f],s.join(",")==="1,0,0,1,0,0"?mc:s):(s===mc&&!e.offsetParent&&e!==Ua&&!n.svg&&(u=r.display,r.display="block",a=e.parentNode,(!a||!e.offsetParent)&&(h=1,c=e.nextElementSibling,Ua.appendChild(e)),s=my(e),u?r.display=u:_c(e,"display"),h&&(c?a.insertBefore(e,c):a?a.appendChild(e):Ua.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},l_=function(e,t,n,r,s,a){var c=e._gsap,u=s||ym(e,!0),h=c.xOrigin||0,d=c.yOrigin||0,p=c.xOffset||0,_=c.yOffset||0,g=u[0],E=u[1],x=u[2],y=u[3],m=u[4],w=u[5],T=t.split(" "),C=parseFloat(T[0])||0,b=parseFloat(T[1])||0,I,O,B,M;n?u!==mc&&(O=g*y-E*x)&&(B=C*(y/O)+b*(-x/O)+(x*w-y*m)/O,M=C*(-E/O)+b*(g/O)-(g*w-E*m)/O,C=B,b=M):(I=AM(e),C=I.x+(~T[0].indexOf("%")?C/100*I.width:C),b=I.y+(~(T[1]||T[0]).indexOf("%")?b/100*I.height:b)),r||r!==!1&&c.smooth?(m=C-h,w=b-d,c.xOffset=p+(m*g+w*x)-m,c.yOffset=_+(m*E+w*y)-w):c.xOffset=c.yOffset=0,c.xOrigin=C,c.yOrigin=b,c.smooth=!!r,c.origin=t,c.originIsAbsolute=!!n,e.style[pr]="0px 0px",a&&(ws(a,c,"xOrigin",h,C),ws(a,c,"yOrigin",d,b),ws(a,c,"xOffset",p,c.xOffset),ws(a,c,"yOffset",_,c.yOffset)),e.setAttribute("data-svg-origin",C+" "+b)},gc=function(e,t){var n=e._gsap||new dM(e);if("x"in n&&!t&&!n.uncache)return n;var r=e.style,s=n.scaleX<0,a="px",c="deg",u=getComputedStyle(e),h=br(e,pr)||"0",d,p,_,g,E,x,y,m,w,T,C,b,I,O,B,M,L,Q,te,W,$,j,le,J,ne,ge,he,Ie,ye,ie,ce,H;return d=p=_=x=y=m=w=T=C=0,g=E=1,n.svg=!!(e.getCTM&&CM(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(r[Qt]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[Qt]!=="none"?u[Qt]:"")),r.scale=r.rotate=r.translate="none"),O=ym(e,n.svg),n.svg&&(n.uncache?(ne=e.getBBox(),h=n.xOrigin-ne.x+"px "+(n.yOrigin-ne.y)+"px",J=""):J=!t&&e.getAttribute("data-svg-origin"),l_(e,J||h,!!J||n.originIsAbsolute,n.smooth!==!1,O)),b=n.xOrigin||0,I=n.yOrigin||0,O!==mc&&(Q=O[0],te=O[1],W=O[2],$=O[3],d=j=O[4],p=le=O[5],O.length===6?(g=Math.sqrt(Q*Q+te*te),E=Math.sqrt($*$+W*W),x=Q||te?Ta(te,Q)*po:0,w=W||$?Ta(W,$)*po+x:0,w&&(E*=Math.abs(Math.cos(w*Fa))),n.svg&&(d-=b-(b*Q+I*W),p-=I-(b*te+I*$))):(H=O[6],ie=O[7],he=O[8],Ie=O[9],ye=O[10],ce=O[11],d=O[12],p=O[13],_=O[14],B=Ta(H,ye),y=B*po,B&&(M=Math.cos(-B),L=Math.sin(-B),J=j*M+he*L,ne=le*M+Ie*L,ge=H*M+ye*L,he=j*-L+he*M,Ie=le*-L+Ie*M,ye=H*-L+ye*M,ce=ie*-L+ce*M,j=J,le=ne,H=ge),B=Ta(-W,ye),m=B*po,B&&(M=Math.cos(-B),L=Math.sin(-B),J=Q*M-he*L,ne=te*M-Ie*L,ge=W*M-ye*L,ce=$*L+ce*M,Q=J,te=ne,W=ge),B=Ta(te,Q),x=B*po,B&&(M=Math.cos(B),L=Math.sin(B),J=Q*M+te*L,ne=j*M+le*L,te=te*M-Q*L,le=le*M-j*L,Q=J,j=ne),y&&Math.abs(y)+Math.abs(x)>359.9&&(y=x=0,m=180-m),g=on(Math.sqrt(Q*Q+te*te+W*W)),E=on(Math.sqrt(le*le+H*H)),B=Ta(j,le),w=Math.abs(B)>2e-4?B*po:0,C=ce?1/(ce<0?-ce:ce):0),n.svg&&(J=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!PM(br(e,Qt)),J&&e.setAttribute("transform",J))),Math.abs(w)>90&&Math.abs(w)<270&&(s?(g*=-1,w+=x<=0?180:-180,x+=x<=0?180:-180):(E*=-1,w+=w<=0?180:-180)),t=t||n.uncache,n.x=d-((n.xPercent=d&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-d)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=p-((n.yPercent=p&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-p)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=_+a,n.scaleX=on(g),n.scaleY=on(E),n.rotation=on(x)+c,n.rotationX=on(y)+c,n.rotationY=on(m)+c,n.skewX=w+c,n.skewY=T+c,n.transformPerspective=C+a,(n.zOrigin=parseFloat(h.split(" ")[2])||0)&&(r[pr]=Sh(h)),n.xOffset=n.yOffset=0,n.force3D=wi.force3D,n.renderTransform=n.svg?zz:bM?IM:kz,n.uncache=0,n},Sh=function(e){return(e=e.split(" "))[0]+" "+e[1]},hp=function(e,t,n){var r=Fn(t);return on(parseFloat(t)+parseFloat(Vs(e,"x",n+"px",r)))+r},kz=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,IM(e,t)},ao="0deg",Bl="0px",lo=") ",IM=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,c=n.y,u=n.z,h=n.rotation,d=n.rotationY,p=n.rotationX,_=n.skewX,g=n.skewY,E=n.scaleX,x=n.scaleY,y=n.transformPerspective,m=n.force3D,w=n.target,T=n.zOrigin,C="",b=m==="auto"&&e&&e!==1||m===!0;if(T&&(p!==ao||d!==ao)){var I=parseFloat(d)*Fa,O=Math.sin(I),B=Math.cos(I),M;I=parseFloat(p)*Fa,M=Math.cos(I),a=hp(w,a,O*M*-T),c=hp(w,c,-Math.sin(I)*-T),u=hp(w,u,B*M*-T+T)}y!==Bl&&(C+="perspective("+y+lo),(r||s)&&(C+="translate("+r+"%, "+s+"%) "),(b||a!==Bl||c!==Bl||u!==Bl)&&(C+=u!==Bl||b?"translate3d("+a+", "+c+", "+u+") ":"translate("+a+", "+c+lo),h!==ao&&(C+="rotate("+h+lo),d!==ao&&(C+="rotateY("+d+lo),p!==ao&&(C+="rotateX("+p+lo),(_!==ao||g!==ao)&&(C+="skew("+_+", "+g+lo),(E!==1||x!==1)&&(C+="scale("+E+", "+x+lo),w.style[Qt]=C||"translate(0, 0)"},zz=function(e,t){var n=t||this,r=n.xPercent,s=n.yPercent,a=n.x,c=n.y,u=n.rotation,h=n.skewX,d=n.skewY,p=n.scaleX,_=n.scaleY,g=n.target,E=n.xOrigin,x=n.yOrigin,y=n.xOffset,m=n.yOffset,w=n.forceCSS,T=parseFloat(a),C=parseFloat(c),b,I,O,B,M;u=parseFloat(u),h=parseFloat(h),d=parseFloat(d),d&&(d=parseFloat(d),h+=d,u+=d),u||h?(u*=Fa,h*=Fa,b=Math.cos(u)*p,I=Math.sin(u)*p,O=Math.sin(u-h)*-_,B=Math.cos(u-h)*_,h&&(d*=Fa,M=Math.tan(h-d),M=Math.sqrt(1+M*M),O*=M,B*=M,d&&(M=Math.tan(d),M=Math.sqrt(1+M*M),b*=M,I*=M)),b=on(b),I=on(I),O=on(O),B=on(B)):(b=p,B=_,I=O=0),(T&&!~(a+"").indexOf("px")||C&&!~(c+"").indexOf("px"))&&(T=Vs(g,"x",a,"px"),C=Vs(g,"y",c,"px")),(E||x||y||m)&&(T=on(T+E-(E*b+x*O)+y),C=on(C+x-(E*I+x*B)+m)),(r||s)&&(M=g.getBBox(),T=on(T+r/100*M.width),C=on(C+s/100*M.height)),M="matrix("+b+","+I+","+O+","+B+","+T+","+C+")",g.setAttribute("transform",M),w&&(g.style[Qt]=M)},Hz=function(e,t,n,r,s){var a=360,c=bn(s),u=parseFloat(s)*(c&&~s.indexOf("rad")?po:1),h=u-r,d=r+h+"deg",p,_;return c&&(p=s.split("_")[1],p==="short"&&(h%=a,h!==h%(a/2)&&(h+=h<0?a:-a)),p==="cw"&&h<0?h=(h+a*hy)%a-~~(h/a)*a:p==="ccw"&&h>0&&(h=(h-a*hy)%a-~~(h/a)*a)),e._pt=_=new ai(e._pt,t,n,r,h,Tz),_.e=d,_.u="deg",e._props.push(n),_},gy=function(e,t){for(var n in t)e[n]=t[n];return e},Gz=function(e,t,n){var r=gy({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,c,u,h,d,p,_,g,E;r.svg?(h=n.getAttribute("transform"),n.setAttribute("transform",""),a[Qt]=t,c=gc(n,1),_c(n,Qt),n.setAttribute("transform",h)):(h=getComputedStyle(n)[Qt],a[Qt]=t,c=gc(n,1),a[Qt]=h);for(u in ss)h=r[u],d=c[u],h!==d&&s.indexOf(u)<0&&(g=Fn(h),E=Fn(d),p=g!==E?Vs(n,u,h,E):parseFloat(h),_=parseFloat(d),e._pt=new ai(e._pt,c,u,p,_-p,s_),e._pt.u=E||0,e._props.push(u));gy(c,r)};oi("padding,margin,Width,Radius",function(i,e){var t="Top",n="Right",r="Bottom",s="Left",a=(e<3?[t,n,r,s]:[t+s,t+n,r+n,r+s]).map(function(c){return e<2?i+c:"border"+c+i});Eh[e>1?"border"+i:i]=function(c,u,h,d,p){var _,g;if(arguments.length<4)return _=a.map(function(E){return Kr(c,E,h)}),g=_.join(" "),g.split(_[0]).length===5?_[0]:g;_=(d+"").split(" "),g={},a.forEach(function(E,x){return g[E]=_[x]=_[x]||_[(x-1)/2|0]}),c.init(u,g,p)}});var LM={name:"css",register:a_,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,r,s){var a=this._props,c=e.style,u=n.vars.startAt,h,d,p,_,g,E,x,y,m,w,T,C,b,I,O,B;gm||a_(),this.styles=this.styles||wM(e),B=this.styles.props,this.tween=n;for(x in t)if(x!=="autoRound"&&(d=t[x],!(yi[x]&&pM(x,t,n,r,e,s)))){if(g=typeof d,E=Eh[x],g==="function"&&(d=d.call(n,r,e,s),g=typeof d),g==="string"&&~d.indexOf("random(")&&(d=dc(d)),E)E(this,e,x,d,n)&&(O=1);else if(x.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(x)+"").trim(),d+="",Ds.lastIndex=0,Ds.test(h)||(y=Fn(h),m=Fn(d)),m?y!==m&&(h=Vs(e,x,h,m)+m):y&&(d+=y),this.add(c,"setProperty",h,d,r,s,0,0,x),a.push(x),B.push(x,0,c[x]);else if(g!=="undefined"){if(u&&x in u?(h=typeof u[x]=="function"?u[x].call(n,r,e,s):u[x],bn(h)&&~h.indexOf("random(")&&(h=dc(h)),Fn(h+"")||(h+=wi.units[x]||Fn(Kr(e,x))||""),(h+"").charAt(1)==="="&&(h=Kr(e,x))):h=Kr(e,x),_=parseFloat(h),w=g==="string"&&d.charAt(1)==="="&&d.substr(0,2),w&&(d=d.substr(2)),p=parseFloat(d),x in Mr&&(x==="autoAlpha"&&(_===1&&Kr(e,"visibility")==="hidden"&&p&&(_=0),B.push("visibility",0,c.visibility),ws(this,c,"visibility",_?"inherit":"hidden",p?"inherit":"hidden",!p)),x!=="scale"&&x!=="transform"&&(x=Mr[x],~x.indexOf(",")&&(x=x.split(",")[0]))),T=x in ss,T){if(this.styles.save(x),C||(b=e._gsap,b.renderTransform&&!t.parseTransform||gc(e,t.parseTransform),I=t.smoothOrigin!==!1&&b.smooth,C=this._pt=new ai(this._pt,c,Qt,0,1,b.renderTransform,b,0,-1),C.dep=1),x==="scale")this._pt=new ai(this._pt,b,"scaleY",b.scaleY,(w?Oa(b.scaleY,w+p):p)-b.scaleY||0,s_),this._pt.u=0,a.push("scaleY",x),x+="X";else if(x==="transformOrigin"){B.push(pr,0,c[pr]),d=Fz(d),b.svg?l_(e,d,0,I,0,this):(m=parseFloat(d.split(" ")[2])||0,m!==b.zOrigin&&ws(this,b,"zOrigin",b.zOrigin,m),ws(this,c,x,Sh(h),Sh(d)));continue}else if(x==="svgOrigin"){l_(e,d,1,I,0,this);continue}else if(x in RM){Hz(this,b,x,_,w?Oa(_,w+d):d);continue}else if(x==="smoothOrigin"){ws(this,b,"smooth",b.smooth,d);continue}else if(x==="force3D"){b[x]=d;continue}else if(x==="transform"){Gz(this,d,e);continue}}else x in c||(x=el(x)||x);if(T||(p||p===0)&&(_||_===0)&&!Mz.test(d)&&x in c)y=(h+"").substr((_+"").length),p||(p=0),m=Fn(d)||(x in wi.units?wi.units[x]:y),y!==m&&(_=Vs(e,x,h,m)),this._pt=new ai(this._pt,T?b:c,x,_,(w?Oa(_,w+p):p)-_,!T&&(m==="px"||x==="zIndex")&&t.autoRound!==!1?bz:s_),this._pt.u=m||0,y!==m&&m!=="%"&&(this._pt.b=h,this._pt.r=wz);else if(x in c)Uz.call(this,e,x,h,w?w+d:d);else if(x in e)this.add(e,x,h||e[x],w?w+d:d,r,s);else if(x!=="parseTransform"){lm(x,d);continue}T||(x in c?B.push(x,0,c[x]):B.push(x,1,h||e[x])),a.push(x)}}O&&yM(this)},render:function(e,t){if(t.tween._time||!vm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Kr,aliases:Mr,getSetter:function(e,t,n){var r=Mr[t];return r&&r.indexOf(",")<0&&(t=r),t in ss&&t!==pr&&(e._gsap.x||Kr(e,"x"))?n&&uy===n?t==="scale"?Pz:Rz:(uy=n||{})&&(t==="scale"?Iz:Lz):e.style&&!sm(e.style[t])?Az:~t.indexOf("-")?Cz:_m(e,t)},core:{_removeProperty:_c,_getMatrix:ym}};li.utils.checkPrefix=el;li.core.getStyleSaver=wM;(function(i,e,t,n){var r=oi(i+","+e+","+t,function(s){ss[s]=1});oi(e,function(s){wi.units[s]="deg",RM[s]=1}),Mr[r[13]]=i+","+e,oi(n,function(s){var a=s.split(":");Mr[a[1]]=r[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");oi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(i){wi.units[i]="px"});li.registerPlugin(LM);var DM=li.registerPlugin(LM)||li;DM.core.Tween;const vy={type:"change"},fp={type:"start"},xy={type:"end"};class Wz extends Ho{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new Y,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:oa.ROTATE,MIDDLE:oa.DOLLY,RIGHT:oa.PAN},this.touches={ONE:aa.ROTATE,TWO:aa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return c.phi},this.getAzimuthalAngle=function(){return c.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",Et),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Et),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(vy),n.update(),s=r.NONE},this.update=function(){const k=new Y,fe=new No().setFromUnitVectors(e.up,new Y(0,1,0)),ee=fe.clone().invert(),we=new Y,De=new No,Fe=2*Math.PI;return function(){const Oe=n.object.position;k.copy(Oe).sub(n.target),k.applyQuaternion(fe),c.setFromVector3(k),n.autoRotate&&s===r.NONE&&M(O()),n.enableDamping?(c.theta+=u.theta*n.dampingFactor,c.phi+=u.phi*n.dampingFactor):(c.theta+=u.theta,c.phi+=u.phi);let Ke=n.minAzimuthAngle,Je=n.maxAzimuthAngle;return isFinite(Ke)&&isFinite(Je)&&(Ke<-Math.PI?Ke+=Fe:Ke>Math.PI&&(Ke-=Fe),Je<-Math.PI?Je+=Fe:Je>Math.PI&&(Je-=Fe),Ke<=Je?c.theta=Math.max(Ke,Math.min(Je,c.theta)):c.theta=c.theta>(Ke+Je)/2?Math.max(Ke,c.theta):Math.min(Je,c.theta)),c.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,c.phi)),c.makeSafe(),c.radius*=h,c.radius=Math.max(n.minDistance,Math.min(n.maxDistance,c.radius)),n.enableDamping===!0?n.target.addScaledVector(d,n.dampingFactor):n.target.add(d),k.setFromSpherical(c),k.applyQuaternion(ee),Oe.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,d.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),d.set(0,0,0)),h=1,p||we.distanceToSquared(n.object.position)>a||8*(1-De.dot(n.object.quaternion))>a?(n.dispatchEvent(vy),we.copy(n.object.position),De.copy(n.object.quaternion),p=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",P),n.domElement.removeEventListener("pointerdown",Ge),n.domElement.removeEventListener("pointercancel",Gt),n.domElement.removeEventListener("wheel",yt),n.domElement.removeEventListener("pointermove",Lt),n.domElement.removeEventListener("pointerup",Gt),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",Et),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,c=new ty,u=new ty;let h=1;const d=new Y;let p=!1;const _=new et,g=new et,E=new et,x=new et,y=new et,m=new et,w=new et,T=new et,C=new et,b=[],I={};function O(){return 2*Math.PI/60/60*n.autoRotateSpeed}function B(){return Math.pow(.95,n.zoomSpeed)}function M(k){u.theta-=k}function L(k){u.phi-=k}const Q=function(){const k=new Y;return function(ee,we){k.setFromMatrixColumn(we,0),k.multiplyScalar(-ee),d.add(k)}}(),te=function(){const k=new Y;return function(ee,we){n.screenSpacePanning===!0?k.setFromMatrixColumn(we,1):(k.setFromMatrixColumn(we,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(ee),d.add(k)}}(),W=function(){const k=new Y;return function(ee,we){const De=n.domElement;if(n.object.isPerspectiveCamera){const Fe=n.object.position;k.copy(Fe).sub(n.target);let Re=k.length();Re*=Math.tan(n.object.fov/2*Math.PI/180),Q(2*ee*Re/De.clientHeight,n.object.matrix),te(2*we*Re/De.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(Q(ee*(n.object.right-n.object.left)/n.object.zoom/De.clientWidth,n.object.matrix),te(we*(n.object.top-n.object.bottom)/n.object.zoom/De.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function $(k){n.object.isPerspectiveCamera?h/=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*k)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function j(k){n.object.isPerspectiveCamera?h*=k:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/k)),n.object.updateProjectionMatrix(),p=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function le(k){_.set(k.clientX,k.clientY)}function J(k){w.set(k.clientX,k.clientY)}function ne(k){x.set(k.clientX,k.clientY)}function ge(k){g.set(k.clientX,k.clientY),E.subVectors(g,_).multiplyScalar(n.rotateSpeed);const fe=n.domElement;M(2*Math.PI*E.x/fe.clientHeight),L(2*Math.PI*E.y/fe.clientHeight),_.copy(g),n.update()}function he(k){T.set(k.clientX,k.clientY),C.subVectors(T,w),C.y>0?$(B()):C.y<0&&j(B()),w.copy(T),n.update()}function Ie(k){y.set(k.clientX,k.clientY),m.subVectors(y,x).multiplyScalar(n.panSpeed),W(m.x,m.y),x.copy(y),n.update()}function ye(k){k.deltaY<0?j(B()):k.deltaY>0&&$(B()),n.update()}function ie(k){let fe=!1;switch(k.code){case n.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?L(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,n.keyPanSpeed),fe=!0;break;case n.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?L(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(0,-n.keyPanSpeed),fe=!0;break;case n.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?M(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(n.keyPanSpeed,0),fe=!0;break;case n.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?M(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):W(-n.keyPanSpeed,0),fe=!0;break}fe&&(k.preventDefault(),n.update())}function ce(){if(b.length===1)_.set(b[0].pageX,b[0].pageY);else{const k=.5*(b[0].pageX+b[1].pageX),fe=.5*(b[0].pageY+b[1].pageY);_.set(k,fe)}}function H(){if(b.length===1)x.set(b[0].pageX,b[0].pageY);else{const k=.5*(b[0].pageX+b[1].pageX),fe=.5*(b[0].pageY+b[1].pageY);x.set(k,fe)}}function _e(){const k=b[0].pageX-b[1].pageX,fe=b[0].pageY-b[1].pageY,ee=Math.sqrt(k*k+fe*fe);w.set(0,ee)}function F(){n.enableZoom&&_e(),n.enablePan&&H()}function Pe(){n.enableZoom&&_e(),n.enableRotate&&ce()}function Ce(k){if(b.length==1)g.set(k.pageX,k.pageY);else{const ee=Te(k),we=.5*(k.pageX+ee.x),De=.5*(k.pageY+ee.y);g.set(we,De)}E.subVectors(g,_).multiplyScalar(n.rotateSpeed);const fe=n.domElement;M(2*Math.PI*E.x/fe.clientHeight),L(2*Math.PI*E.y/fe.clientHeight),_.copy(g)}function Ee(k){if(b.length===1)y.set(k.pageX,k.pageY);else{const fe=Te(k),ee=.5*(k.pageX+fe.x),we=.5*(k.pageY+fe.y);y.set(ee,we)}m.subVectors(y,x).multiplyScalar(n.panSpeed),W(m.x,m.y),x.copy(y)}function ze(k){const fe=Te(k),ee=k.pageX-fe.x,we=k.pageY-fe.y,De=Math.sqrt(ee*ee+we*we);T.set(0,De),C.set(0,Math.pow(T.y/w.y,n.zoomSpeed)),$(C.y),w.copy(T)}function st(k){n.enableZoom&&ze(k),n.enablePan&&Ee(k)}function Ue(k){n.enableZoom&&ze(k),n.enableRotate&&Ce(k)}function Ge(k){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",Lt),n.domElement.addEventListener("pointerup",Gt)),re(k),k.pointerType==="touch"?Dt(k):Tt(k))}function Lt(k){n.enabled!==!1&&(k.pointerType==="touch"?N(k):Vt(k))}function Gt(k){ve(k),b.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",Lt),n.domElement.removeEventListener("pointerup",Gt)),n.dispatchEvent(xy),s=r.NONE}function Tt(k){let fe;switch(k.button){case 0:fe=n.mouseButtons.LEFT;break;case 1:fe=n.mouseButtons.MIDDLE;break;case 2:fe=n.mouseButtons.RIGHT;break;default:fe=-1}switch(fe){case oa.DOLLY:if(n.enableZoom===!1)return;J(k),s=r.DOLLY;break;case oa.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;ne(k),s=r.PAN}else{if(n.enableRotate===!1)return;le(k),s=r.ROTATE}break;case oa.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;le(k),s=r.ROTATE}else{if(n.enablePan===!1)return;ne(k),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(fp)}function Vt(k){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ge(k);break;case r.DOLLY:if(n.enableZoom===!1)return;he(k);break;case r.PAN:if(n.enablePan===!1)return;Ie(k);break}}function yt(k){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(k.preventDefault(),n.dispatchEvent(fp),ye(k),n.dispatchEvent(xy))}function Et(k){n.enabled===!1||n.enablePan===!1||ie(k)}function Dt(k){switch(Se(k),b.length){case 1:switch(n.touches.ONE){case aa.ROTATE:if(n.enableRotate===!1)return;ce(),s=r.TOUCH_ROTATE;break;case aa.PAN:if(n.enablePan===!1)return;H(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case aa.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;F(),s=r.TOUCH_DOLLY_PAN;break;case aa.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Pe(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(fp)}function N(k){switch(Se(k),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;Ce(k),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Ee(k),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;st(k),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Ue(k),n.update();break;default:s=r.NONE}}function P(k){n.enabled!==!1&&k.preventDefault()}function re(k){b.push(k)}function ve(k){delete I[k.pointerId];for(let fe=0;fe<b.length;fe++)if(b[fe].pointerId==k.pointerId){b.splice(fe,1);return}}function Se(k){let fe=I[k.pointerId];fe===void 0&&(fe=new et,I[k.pointerId]=fe),fe.set(k.pageX,k.pageY)}function Te(k){const fe=k.pointerId===b[0].pointerId?b[1]:b[0];return I[fe.pointerId]}n.domElement.addEventListener("contextmenu",P),n.domElement.addEventListener("pointerdown",Ge),n.domElement.addEventListener("pointercancel",Gt),n.domElement.addEventListener("wheel",yt,{passive:!1}),this.update()}}var kl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mh={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */Mh.exports;(function(i,e){(function(){var t,n="4.17.21",r=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",a="Expected a function",c="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",h=500,d="__lodash_placeholder__",p=1,_=2,g=4,E=1,x=2,y=1,m=2,w=4,T=8,C=16,b=32,I=64,O=128,B=256,M=512,L=30,Q="...",te=800,W=16,$=1,j=2,le=3,J=1/0,ne=9007199254740991,ge=17976931348623157e292,he=0/0,Ie=4294967295,ye=Ie-1,ie=Ie>>>1,ce=[["ary",O],["bind",y],["bindKey",m],["curry",T],["curryRight",C],["flip",M],["partial",b],["partialRight",I],["rearg",B]],H="[object Arguments]",_e="[object Array]",F="[object AsyncFunction]",Pe="[object Boolean]",Ce="[object Date]",Ee="[object DOMException]",ze="[object Error]",st="[object Function]",Ue="[object GeneratorFunction]",Ge="[object Map]",Lt="[object Number]",Gt="[object Null]",Tt="[object Object]",Vt="[object Promise]",yt="[object Proxy]",Et="[object RegExp]",Dt="[object Set]",N="[object String]",P="[object Symbol]",re="[object Undefined]",ve="[object WeakMap]",Se="[object WeakSet]",Te="[object ArrayBuffer]",k="[object DataView]",fe="[object Float32Array]",ee="[object Float64Array]",we="[object Int8Array]",De="[object Int16Array]",Fe="[object Int32Array]",Re="[object Uint8Array]",Oe="[object Uint8ClampedArray]",Ke="[object Uint16Array]",Je="[object Uint32Array]",Yt=/\b__p \+= '';/g,G=/\b(__p \+=) '' \+/g,se=/(__e\(.*?\)|\b__t\)) \+\n'';/g,xe=/&(?:amp|lt|gt|quot|#39);/g,Le=/[&<>"']/g,ke=RegExp(xe.source),Rt=RegExp(Le.source),Pt=/<%-([\s\S]+?)%>/g,gn=/<%([\s\S]+?)%>/g,Ji=/<%=([\s\S]+?)%>/g,$t=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Kn=/^\w*$/,Pi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,as=/[\\^$.*+?()[\]{}|]/g,Dc=RegExp(as.source),cl=/^\s+/,nf=/\s/,rf=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,D=/\{\n\/\* \[wrapped with (.+)\] \*/,K=/,? & /,oe=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,q=/[()=,{}\[\]\/\s]/,ue=/\\(\\)?/g,He=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,We=/\w*$/,je=/^[-+]0x[0-9a-f]+$/i,tt=/^0b[01]+$/i,ot=/^\[object .+?Constructor\]$/,at=/^0o[0-7]+$/i,ft=/^(?:0|[1-9]\d*)$/,wt=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,an=/($^)/,ui=/['\n\r\u2028\u2029\\]/g,Ii="\\ud800-\\udfff",Jt="\\u0300-\\u036f",_t="\\ufe20-\\ufe2f",ul="\\u20d0-\\u20ff",nn=Jt+_t+ul,mr="\\u2700-\\u27bf",hl="a-z\\xdf-\\xf6\\xf8-\\xff",$s="\\xac\\xb1\\xd7\\xf7",fl="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",An="\\u2000-\\u206f",Ir=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Wo="A-Z\\xc0-\\xd6\\xd8-\\xde",Ln="\\ufe0e\\ufe0f",Vo=$s+fl+An+Ir,dl="['’]",Nc="["+Ii+"]",Sm="["+Vo+"]",Oc="["+nn+"]",Mm="\\d+",FM="["+mr+"]",Tm="["+hl+"]",wm="[^"+Ii+Vo+Mm+mr+hl+Wo+"]",sf="\\ud83c[\\udffb-\\udfff]",BM="(?:"+Oc+"|"+sf+")",bm="[^"+Ii+"]",of="(?:\\ud83c[\\udde6-\\uddff]){2}",af="[\\ud800-\\udbff][\\udc00-\\udfff]",Xo="["+Wo+"]",Am="\\u200d",Cm="(?:"+Tm+"|"+wm+")",kM="(?:"+Xo+"|"+wm+")",Rm="(?:"+dl+"(?:d|ll|m|re|s|t|ve))?",Pm="(?:"+dl+"(?:D|LL|M|RE|S|T|VE))?",Im=BM+"?",Lm="["+Ln+"]?",zM="(?:"+Am+"(?:"+[bm,of,af].join("|")+")"+Lm+Im+")*",HM="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",GM="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Dm=Lm+Im+zM,WM="(?:"+[FM,of,af].join("|")+")"+Dm,VM="(?:"+[bm+Oc+"?",Oc,of,af,Nc].join("|")+")",XM=RegExp(dl,"g"),qM=RegExp(Oc,"g"),lf=RegExp(sf+"(?="+sf+")|"+VM+Dm,"g"),YM=RegExp([Xo+"?"+Tm+"+"+Rm+"(?="+[Sm,Xo,"$"].join("|")+")",kM+"+"+Pm+"(?="+[Sm,Xo+Cm,"$"].join("|")+")",Xo+"?"+Cm+"+"+Rm,Xo+"+"+Pm,GM,HM,Mm,WM].join("|"),"g"),$M=RegExp("["+Am+Ii+nn+Ln+"]"),KM=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,jM=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],ZM=-1,Wt={};Wt[fe]=Wt[ee]=Wt[we]=Wt[De]=Wt[Fe]=Wt[Re]=Wt[Oe]=Wt[Ke]=Wt[Je]=!0,Wt[H]=Wt[_e]=Wt[Te]=Wt[Pe]=Wt[k]=Wt[Ce]=Wt[ze]=Wt[st]=Wt[Ge]=Wt[Lt]=Wt[Tt]=Wt[Et]=Wt[Dt]=Wt[N]=Wt[ve]=!1;var kt={};kt[H]=kt[_e]=kt[Te]=kt[k]=kt[Pe]=kt[Ce]=kt[fe]=kt[ee]=kt[we]=kt[De]=kt[Fe]=kt[Ge]=kt[Lt]=kt[Tt]=kt[Et]=kt[Dt]=kt[N]=kt[P]=kt[Re]=kt[Oe]=kt[Ke]=kt[Je]=!0,kt[ze]=kt[st]=kt[ve]=!1;var QM={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},JM={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},eT={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},tT={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},nT=parseFloat,iT=parseInt,Nm=typeof kl=="object"&&kl&&kl.Object===Object&&kl,rT=typeof self=="object"&&self&&self.Object===Object&&self,Cn=Nm||rT||Function("return this")(),cf=e&&!e.nodeType&&e,Ks=cf&&!0&&i&&!i.nodeType&&i,Om=Ks&&Ks.exports===cf,uf=Om&&Nm.process,Li=function(){try{var V=Ks&&Ks.require&&Ks.require("util").types;return V||uf&&uf.binding&&uf.binding("util")}catch{}}(),Um=Li&&Li.isArrayBuffer,Fm=Li&&Li.isDate,Bm=Li&&Li.isMap,km=Li&&Li.isRegExp,zm=Li&&Li.isSet,Hm=Li&&Li.isTypedArray;function hi(V,ae,Z){switch(Z.length){case 0:return V.call(ae);case 1:return V.call(ae,Z[0]);case 2:return V.call(ae,Z[0],Z[1]);case 3:return V.call(ae,Z[0],Z[1],Z[2])}return V.apply(ae,Z)}function sT(V,ae,Z,Ne){for(var Ze=-1,Mt=V==null?0:V.length;++Ze<Mt;){var un=V[Ze];ae(Ne,un,Z(un),V)}return Ne}function Di(V,ae){for(var Z=-1,Ne=V==null?0:V.length;++Z<Ne&&ae(V[Z],Z,V)!==!1;);return V}function oT(V,ae){for(var Z=V==null?0:V.length;Z--&&ae(V[Z],Z,V)!==!1;);return V}function Gm(V,ae){for(var Z=-1,Ne=V==null?0:V.length;++Z<Ne;)if(!ae(V[Z],Z,V))return!1;return!0}function ls(V,ae){for(var Z=-1,Ne=V==null?0:V.length,Ze=0,Mt=[];++Z<Ne;){var un=V[Z];ae(un,Z,V)&&(Mt[Ze++]=un)}return Mt}function Uc(V,ae){var Z=V==null?0:V.length;return!!Z&&qo(V,ae,0)>-1}function hf(V,ae,Z){for(var Ne=-1,Ze=V==null?0:V.length;++Ne<Ze;)if(Z(ae,V[Ne]))return!0;return!1}function Xt(V,ae){for(var Z=-1,Ne=V==null?0:V.length,Ze=Array(Ne);++Z<Ne;)Ze[Z]=ae(V[Z],Z,V);return Ze}function cs(V,ae){for(var Z=-1,Ne=ae.length,Ze=V.length;++Z<Ne;)V[Ze+Z]=ae[Z];return V}function ff(V,ae,Z,Ne){var Ze=-1,Mt=V==null?0:V.length;for(Ne&&Mt&&(Z=V[++Ze]);++Ze<Mt;)Z=ae(Z,V[Ze],Ze,V);return Z}function aT(V,ae,Z,Ne){var Ze=V==null?0:V.length;for(Ne&&Ze&&(Z=V[--Ze]);Ze--;)Z=ae(Z,V[Ze],Ze,V);return Z}function df(V,ae){for(var Z=-1,Ne=V==null?0:V.length;++Z<Ne;)if(ae(V[Z],Z,V))return!0;return!1}var lT=pf("length");function cT(V){return V.split("")}function uT(V){return V.match(oe)||[]}function Wm(V,ae,Z){var Ne;return Z(V,function(Ze,Mt,un){if(ae(Ze,Mt,un))return Ne=Mt,!1}),Ne}function Fc(V,ae,Z,Ne){for(var Ze=V.length,Mt=Z+(Ne?1:-1);Ne?Mt--:++Mt<Ze;)if(ae(V[Mt],Mt,V))return Mt;return-1}function qo(V,ae,Z){return ae===ae?ST(V,ae,Z):Fc(V,Vm,Z)}function hT(V,ae,Z,Ne){for(var Ze=Z-1,Mt=V.length;++Ze<Mt;)if(Ne(V[Ze],ae))return Ze;return-1}function Vm(V){return V!==V}function Xm(V,ae){var Z=V==null?0:V.length;return Z?mf(V,ae)/Z:he}function pf(V){return function(ae){return ae==null?t:ae[V]}}function _f(V){return function(ae){return V==null?t:V[ae]}}function qm(V,ae,Z,Ne,Ze){return Ze(V,function(Mt,un,Nt){Z=Ne?(Ne=!1,Mt):ae(Z,Mt,un,Nt)}),Z}function fT(V,ae){var Z=V.length;for(V.sort(ae);Z--;)V[Z]=V[Z].value;return V}function mf(V,ae){for(var Z,Ne=-1,Ze=V.length;++Ne<Ze;){var Mt=ae(V[Ne]);Mt!==t&&(Z=Z===t?Mt:Z+Mt)}return Z}function gf(V,ae){for(var Z=-1,Ne=Array(V);++Z<V;)Ne[Z]=ae(Z);return Ne}function dT(V,ae){return Xt(ae,function(Z){return[Z,V[Z]]})}function Ym(V){return V&&V.slice(0,Zm(V)+1).replace(cl,"")}function fi(V){return function(ae){return V(ae)}}function vf(V,ae){return Xt(ae,function(Z){return V[Z]})}function pl(V,ae){return V.has(ae)}function $m(V,ae){for(var Z=-1,Ne=V.length;++Z<Ne&&qo(ae,V[Z],0)>-1;);return Z}function Km(V,ae){for(var Z=V.length;Z--&&qo(ae,V[Z],0)>-1;);return Z}function pT(V,ae){for(var Z=V.length,Ne=0;Z--;)V[Z]===ae&&++Ne;return Ne}var _T=_f(QM),mT=_f(JM);function gT(V){return"\\"+tT[V]}function vT(V,ae){return V==null?t:V[ae]}function Yo(V){return $M.test(V)}function xT(V){return KM.test(V)}function yT(V){for(var ae,Z=[];!(ae=V.next()).done;)Z.push(ae.value);return Z}function xf(V){var ae=-1,Z=Array(V.size);return V.forEach(function(Ne,Ze){Z[++ae]=[Ze,Ne]}),Z}function jm(V,ae){return function(Z){return V(ae(Z))}}function us(V,ae){for(var Z=-1,Ne=V.length,Ze=0,Mt=[];++Z<Ne;){var un=V[Z];(un===ae||un===d)&&(V[Z]=d,Mt[Ze++]=Z)}return Mt}function Bc(V){var ae=-1,Z=Array(V.size);return V.forEach(function(Ne){Z[++ae]=Ne}),Z}function ET(V){var ae=-1,Z=Array(V.size);return V.forEach(function(Ne){Z[++ae]=[Ne,Ne]}),Z}function ST(V,ae,Z){for(var Ne=Z-1,Ze=V.length;++Ne<Ze;)if(V[Ne]===ae)return Ne;return-1}function MT(V,ae,Z){for(var Ne=Z+1;Ne--;)if(V[Ne]===ae)return Ne;return Ne}function $o(V){return Yo(V)?wT(V):lT(V)}function er(V){return Yo(V)?bT(V):cT(V)}function Zm(V){for(var ae=V.length;ae--&&nf.test(V.charAt(ae)););return ae}var TT=_f(eT);function wT(V){for(var ae=lf.lastIndex=0;lf.test(V);)++ae;return ae}function bT(V){return V.match(lf)||[]}function AT(V){return V.match(YM)||[]}var CT=function V(ae){ae=ae==null?Cn:Ko.defaults(Cn.Object(),ae,Ko.pick(Cn,jM));var Z=ae.Array,Ne=ae.Date,Ze=ae.Error,Mt=ae.Function,un=ae.Math,Nt=ae.Object,yf=ae.RegExp,RT=ae.String,Ni=ae.TypeError,kc=Z.prototype,PT=Mt.prototype,jo=Nt.prototype,zc=ae["__core-js_shared__"],Hc=PT.toString,It=jo.hasOwnProperty,IT=0,Qm=function(){var o=/[^.]+$/.exec(zc&&zc.keys&&zc.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}(),Gc=jo.toString,LT=Hc.call(Nt),DT=Cn._,NT=yf("^"+Hc.call(It).replace(as,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Wc=Om?ae.Buffer:t,hs=ae.Symbol,Vc=ae.Uint8Array,Jm=Wc?Wc.allocUnsafe:t,Xc=jm(Nt.getPrototypeOf,Nt),eg=Nt.create,tg=jo.propertyIsEnumerable,qc=kc.splice,ng=hs?hs.isConcatSpreadable:t,_l=hs?hs.iterator:t,js=hs?hs.toStringTag:t,Yc=function(){try{var o=to(Nt,"defineProperty");return o({},"",{}),o}catch{}}(),OT=ae.clearTimeout!==Cn.clearTimeout&&ae.clearTimeout,UT=Ne&&Ne.now!==Cn.Date.now&&Ne.now,FT=ae.setTimeout!==Cn.setTimeout&&ae.setTimeout,$c=un.ceil,Kc=un.floor,Ef=Nt.getOwnPropertySymbols,BT=Wc?Wc.isBuffer:t,ig=ae.isFinite,kT=kc.join,zT=jm(Nt.keys,Nt),hn=un.max,Dn=un.min,HT=Ne.now,GT=ae.parseInt,rg=un.random,WT=kc.reverse,Sf=to(ae,"DataView"),ml=to(ae,"Map"),Mf=to(ae,"Promise"),Zo=to(ae,"Set"),gl=to(ae,"WeakMap"),vl=to(Nt,"create"),jc=gl&&new gl,Qo={},VT=no(Sf),XT=no(ml),qT=no(Mf),YT=no(Zo),$T=no(gl),Zc=hs?hs.prototype:t,xl=Zc?Zc.valueOf:t,sg=Zc?Zc.toString:t;function A(o){if(en(o)&&!Qe(o)&&!(o instanceof mt)){if(o instanceof Oi)return o;if(It.call(o,"__wrapped__"))return ov(o)}return new Oi(o)}var Jo=function(){function o(){}return function(l){if(!Kt(l))return{};if(eg)return eg(l);o.prototype=l;var f=new o;return o.prototype=t,f}}();function Qc(){}function Oi(o,l){this.__wrapped__=o,this.__actions__=[],this.__chain__=!!l,this.__index__=0,this.__values__=t}A.templateSettings={escape:Pt,evaluate:gn,interpolate:Ji,variable:"",imports:{_:A}},A.prototype=Qc.prototype,A.prototype.constructor=A,Oi.prototype=Jo(Qc.prototype),Oi.prototype.constructor=Oi;function mt(o){this.__wrapped__=o,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Ie,this.__views__=[]}function KT(){var o=new mt(this.__wrapped__);return o.__actions__=jn(this.__actions__),o.__dir__=this.__dir__,o.__filtered__=this.__filtered__,o.__iteratees__=jn(this.__iteratees__),o.__takeCount__=this.__takeCount__,o.__views__=jn(this.__views__),o}function jT(){if(this.__filtered__){var o=new mt(this);o.__dir__=-1,o.__filtered__=!0}else o=this.clone(),o.__dir__*=-1;return o}function ZT(){var o=this.__wrapped__.value(),l=this.__dir__,f=Qe(o),v=l<0,S=f?o.length:0,R=cb(0,S,this.__views__),U=R.start,z=R.end,X=z-U,de=v?z:U-1,pe=this.__iteratees__,me=pe.length,Ae=0,Be=Dn(X,this.__takeCount__);if(!f||!v&&S==X&&Be==X)return Rg(o,this.__actions__);var Xe=[];e:for(;X--&&Ae<Be;){de+=l;for(var it=-1,qe=o[de];++it<me;){var pt=pe[it],gt=pt.iteratee,_i=pt.type,Vn=gt(qe);if(_i==j)qe=Vn;else if(!Vn){if(_i==$)continue e;break e}}Xe[Ae++]=qe}return Xe}mt.prototype=Jo(Qc.prototype),mt.prototype.constructor=mt;function Zs(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var v=o[l];this.set(v[0],v[1])}}function QT(){this.__data__=vl?vl(null):{},this.size=0}function JT(o){var l=this.has(o)&&delete this.__data__[o];return this.size-=l?1:0,l}function ew(o){var l=this.__data__;if(vl){var f=l[o];return f===u?t:f}return It.call(l,o)?l[o]:t}function tw(o){var l=this.__data__;return vl?l[o]!==t:It.call(l,o)}function nw(o,l){var f=this.__data__;return this.size+=this.has(o)?0:1,f[o]=vl&&l===t?u:l,this}Zs.prototype.clear=QT,Zs.prototype.delete=JT,Zs.prototype.get=ew,Zs.prototype.has=tw,Zs.prototype.set=nw;function Lr(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var v=o[l];this.set(v[0],v[1])}}function iw(){this.__data__=[],this.size=0}function rw(o){var l=this.__data__,f=Jc(l,o);if(f<0)return!1;var v=l.length-1;return f==v?l.pop():qc.call(l,f,1),--this.size,!0}function sw(o){var l=this.__data__,f=Jc(l,o);return f<0?t:l[f][1]}function ow(o){return Jc(this.__data__,o)>-1}function aw(o,l){var f=this.__data__,v=Jc(f,o);return v<0?(++this.size,f.push([o,l])):f[v][1]=l,this}Lr.prototype.clear=iw,Lr.prototype.delete=rw,Lr.prototype.get=sw,Lr.prototype.has=ow,Lr.prototype.set=aw;function Dr(o){var l=-1,f=o==null?0:o.length;for(this.clear();++l<f;){var v=o[l];this.set(v[0],v[1])}}function lw(){this.size=0,this.__data__={hash:new Zs,map:new(ml||Lr),string:new Zs}}function cw(o){var l=hu(this,o).delete(o);return this.size-=l?1:0,l}function uw(o){return hu(this,o).get(o)}function hw(o){return hu(this,o).has(o)}function fw(o,l){var f=hu(this,o),v=f.size;return f.set(o,l),this.size+=f.size==v?0:1,this}Dr.prototype.clear=lw,Dr.prototype.delete=cw,Dr.prototype.get=uw,Dr.prototype.has=hw,Dr.prototype.set=fw;function Qs(o){var l=-1,f=o==null?0:o.length;for(this.__data__=new Dr;++l<f;)this.add(o[l])}function dw(o){return this.__data__.set(o,u),this}function pw(o){return this.__data__.has(o)}Qs.prototype.add=Qs.prototype.push=dw,Qs.prototype.has=pw;function tr(o){var l=this.__data__=new Lr(o);this.size=l.size}function _w(){this.__data__=new Lr,this.size=0}function mw(o){var l=this.__data__,f=l.delete(o);return this.size=l.size,f}function gw(o){return this.__data__.get(o)}function vw(o){return this.__data__.has(o)}function xw(o,l){var f=this.__data__;if(f instanceof Lr){var v=f.__data__;if(!ml||v.length<r-1)return v.push([o,l]),this.size=++f.size,this;f=this.__data__=new Dr(v)}return f.set(o,l),this.size=f.size,this}tr.prototype.clear=_w,tr.prototype.delete=mw,tr.prototype.get=gw,tr.prototype.has=vw,tr.prototype.set=xw;function og(o,l){var f=Qe(o),v=!f&&io(o),S=!f&&!v&&ms(o),R=!f&&!v&&!S&&ia(o),U=f||v||S||R,z=U?gf(o.length,RT):[],X=z.length;for(var de in o)(l||It.call(o,de))&&!(U&&(de=="length"||S&&(de=="offset"||de=="parent")||R&&(de=="buffer"||de=="byteLength"||de=="byteOffset")||Fr(de,X)))&&z.push(de);return z}function ag(o){var l=o.length;return l?o[Nf(0,l-1)]:t}function yw(o,l){return fu(jn(o),Js(l,0,o.length))}function Ew(o){return fu(jn(o))}function Tf(o,l,f){(f!==t&&!nr(o[l],f)||f===t&&!(l in o))&&Nr(o,l,f)}function yl(o,l,f){var v=o[l];(!(It.call(o,l)&&nr(v,f))||f===t&&!(l in o))&&Nr(o,l,f)}function Jc(o,l){for(var f=o.length;f--;)if(nr(o[f][0],l))return f;return-1}function Sw(o,l,f,v){return fs(o,function(S,R,U){l(v,S,f(S),U)}),v}function lg(o,l){return o&&vr(l,vn(l),o)}function Mw(o,l){return o&&vr(l,Qn(l),o)}function Nr(o,l,f){l=="__proto__"&&Yc?Yc(o,l,{configurable:!0,enumerable:!0,value:f,writable:!0}):o[l]=f}function wf(o,l){for(var f=-1,v=l.length,S=Z(v),R=o==null;++f<v;)S[f]=R?t:sd(o,l[f]);return S}function Js(o,l,f){return o===o&&(f!==t&&(o=o<=f?o:f),l!==t&&(o=o>=l?o:l)),o}function Ui(o,l,f,v,S,R){var U,z=l&p,X=l&_,de=l&g;if(f&&(U=S?f(o,v,S,R):f(o)),U!==t)return U;if(!Kt(o))return o;var pe=Qe(o);if(pe){if(U=hb(o),!z)return jn(o,U)}else{var me=Nn(o),Ae=me==st||me==Ue;if(ms(o))return Lg(o,z);if(me==Tt||me==H||Ae&&!S){if(U=X||Ae?{}:Zg(o),!z)return X?eb(o,Mw(U,o)):Jw(o,lg(U,o))}else{if(!kt[me])return S?o:{};U=fb(o,me,z)}}R||(R=new tr);var Be=R.get(o);if(Be)return Be;R.set(o,U),bv(o)?o.forEach(function(qe){U.add(Ui(qe,l,f,qe,o,R))}):Tv(o)&&o.forEach(function(qe,pt){U.set(pt,Ui(qe,l,f,pt,o,R))});var Xe=de?X?Xf:Vf:X?Qn:vn,it=pe?t:Xe(o);return Di(it||o,function(qe,pt){it&&(pt=qe,qe=o[pt]),yl(U,pt,Ui(qe,l,f,pt,o,R))}),U}function Tw(o){var l=vn(o);return function(f){return cg(f,o,l)}}function cg(o,l,f){var v=f.length;if(o==null)return!v;for(o=Nt(o);v--;){var S=f[v],R=l[S],U=o[S];if(U===t&&!(S in o)||!R(U))return!1}return!0}function ug(o,l,f){if(typeof o!="function")throw new Ni(a);return Al(function(){o.apply(t,f)},l)}function El(o,l,f,v){var S=-1,R=Uc,U=!0,z=o.length,X=[],de=l.length;if(!z)return X;f&&(l=Xt(l,fi(f))),v?(R=hf,U=!1):l.length>=r&&(R=pl,U=!1,l=new Qs(l));e:for(;++S<z;){var pe=o[S],me=f==null?pe:f(pe);if(pe=v||pe!==0?pe:0,U&&me===me){for(var Ae=de;Ae--;)if(l[Ae]===me)continue e;X.push(pe)}else R(l,me,v)||X.push(pe)}return X}var fs=Fg(gr),hg=Fg(Af,!0);function ww(o,l){var f=!0;return fs(o,function(v,S,R){return f=!!l(v,S,R),f}),f}function eu(o,l,f){for(var v=-1,S=o.length;++v<S;){var R=o[v],U=l(R);if(U!=null&&(z===t?U===U&&!pi(U):f(U,z)))var z=U,X=R}return X}function bw(o,l,f,v){var S=o.length;for(f=nt(f),f<0&&(f=-f>S?0:S+f),v=v===t||v>S?S:nt(v),v<0&&(v+=S),v=f>v?0:Cv(v);f<v;)o[f++]=l;return o}function fg(o,l){var f=[];return fs(o,function(v,S,R){l(v,S,R)&&f.push(v)}),f}function Rn(o,l,f,v,S){var R=-1,U=o.length;for(f||(f=pb),S||(S=[]);++R<U;){var z=o[R];l>0&&f(z)?l>1?Rn(z,l-1,f,v,S):cs(S,z):v||(S[S.length]=z)}return S}var bf=Bg(),dg=Bg(!0);function gr(o,l){return o&&bf(o,l,vn)}function Af(o,l){return o&&dg(o,l,vn)}function tu(o,l){return ls(l,function(f){return Br(o[f])})}function eo(o,l){l=ps(l,o);for(var f=0,v=l.length;o!=null&&f<v;)o=o[xr(l[f++])];return f&&f==v?o:t}function pg(o,l,f){var v=l(o);return Qe(o)?v:cs(v,f(o))}function Gn(o){return o==null?o===t?re:Gt:js&&js in Nt(o)?lb(o):Eb(o)}function Cf(o,l){return o>l}function Aw(o,l){return o!=null&&It.call(o,l)}function Cw(o,l){return o!=null&&l in Nt(o)}function Rw(o,l,f){return o>=Dn(l,f)&&o<hn(l,f)}function Rf(o,l,f){for(var v=f?hf:Uc,S=o[0].length,R=o.length,U=R,z=Z(R),X=1/0,de=[];U--;){var pe=o[U];U&&l&&(pe=Xt(pe,fi(l))),X=Dn(pe.length,X),z[U]=!f&&(l||S>=120&&pe.length>=120)?new Qs(U&&pe):t}pe=o[0];var me=-1,Ae=z[0];e:for(;++me<S&&de.length<X;){var Be=pe[me],Xe=l?l(Be):Be;if(Be=f||Be!==0?Be:0,!(Ae?pl(Ae,Xe):v(de,Xe,f))){for(U=R;--U;){var it=z[U];if(!(it?pl(it,Xe):v(o[U],Xe,f)))continue e}Ae&&Ae.push(Xe),de.push(Be)}}return de}function Pw(o,l,f,v){return gr(o,function(S,R,U){l(v,f(S),R,U)}),v}function Sl(o,l,f){l=ps(l,o),o=tv(o,l);var v=o==null?o:o[xr(Bi(l))];return v==null?t:hi(v,o,f)}function _g(o){return en(o)&&Gn(o)==H}function Iw(o){return en(o)&&Gn(o)==Te}function Lw(o){return en(o)&&Gn(o)==Ce}function Ml(o,l,f,v,S){return o===l?!0:o==null||l==null||!en(o)&&!en(l)?o!==o&&l!==l:Dw(o,l,f,v,Ml,S)}function Dw(o,l,f,v,S,R){var U=Qe(o),z=Qe(l),X=U?_e:Nn(o),de=z?_e:Nn(l);X=X==H?Tt:X,de=de==H?Tt:de;var pe=X==Tt,me=de==Tt,Ae=X==de;if(Ae&&ms(o)){if(!ms(l))return!1;U=!0,pe=!1}if(Ae&&!pe)return R||(R=new tr),U||ia(o)?$g(o,l,f,v,S,R):ob(o,l,X,f,v,S,R);if(!(f&E)){var Be=pe&&It.call(o,"__wrapped__"),Xe=me&&It.call(l,"__wrapped__");if(Be||Xe){var it=Be?o.value():o,qe=Xe?l.value():l;return R||(R=new tr),S(it,qe,f,v,R)}}return Ae?(R||(R=new tr),ab(o,l,f,v,S,R)):!1}function Nw(o){return en(o)&&Nn(o)==Ge}function Pf(o,l,f,v){var S=f.length,R=S,U=!v;if(o==null)return!R;for(o=Nt(o);S--;){var z=f[S];if(U&&z[2]?z[1]!==o[z[0]]:!(z[0]in o))return!1}for(;++S<R;){z=f[S];var X=z[0],de=o[X],pe=z[1];if(U&&z[2]){if(de===t&&!(X in o))return!1}else{var me=new tr;if(v)var Ae=v(de,pe,X,o,l,me);if(!(Ae===t?Ml(pe,de,E|x,v,me):Ae))return!1}}return!0}function mg(o){if(!Kt(o)||mb(o))return!1;var l=Br(o)?NT:ot;return l.test(no(o))}function Ow(o){return en(o)&&Gn(o)==Et}function Uw(o){return en(o)&&Nn(o)==Dt}function Fw(o){return en(o)&&vu(o.length)&&!!Wt[Gn(o)]}function gg(o){return typeof o=="function"?o:o==null?Jn:typeof o=="object"?Qe(o)?yg(o[0],o[1]):xg(o):kv(o)}function If(o){if(!bl(o))return zT(o);var l=[];for(var f in Nt(o))It.call(o,f)&&f!="constructor"&&l.push(f);return l}function Bw(o){if(!Kt(o))return yb(o);var l=bl(o),f=[];for(var v in o)v=="constructor"&&(l||!It.call(o,v))||f.push(v);return f}function Lf(o,l){return o<l}function vg(o,l){var f=-1,v=Zn(o)?Z(o.length):[];return fs(o,function(S,R,U){v[++f]=l(S,R,U)}),v}function xg(o){var l=Yf(o);return l.length==1&&l[0][2]?Jg(l[0][0],l[0][1]):function(f){return f===o||Pf(f,o,l)}}function yg(o,l){return Kf(o)&&Qg(l)?Jg(xr(o),l):function(f){var v=sd(f,o);return v===t&&v===l?od(f,o):Ml(l,v,E|x)}}function nu(o,l,f,v,S){o!==l&&bf(l,function(R,U){if(S||(S=new tr),Kt(R))kw(o,l,U,f,nu,v,S);else{var z=v?v(Zf(o,U),R,U+"",o,l,S):t;z===t&&(z=R),Tf(o,U,z)}},Qn)}function kw(o,l,f,v,S,R,U){var z=Zf(o,f),X=Zf(l,f),de=U.get(X);if(de){Tf(o,f,de);return}var pe=R?R(z,X,f+"",o,l,U):t,me=pe===t;if(me){var Ae=Qe(X),Be=!Ae&&ms(X),Xe=!Ae&&!Be&&ia(X);pe=X,Ae||Be||Xe?Qe(z)?pe=z:rn(z)?pe=jn(z):Be?(me=!1,pe=Lg(X,!0)):Xe?(me=!1,pe=Dg(X,!0)):pe=[]:Cl(X)||io(X)?(pe=z,io(z)?pe=Rv(z):(!Kt(z)||Br(z))&&(pe=Zg(X))):me=!1}me&&(U.set(X,pe),S(pe,X,v,R,U),U.delete(X)),Tf(o,f,pe)}function Eg(o,l){var f=o.length;if(f)return l+=l<0?f:0,Fr(l,f)?o[l]:t}function Sg(o,l,f){l.length?l=Xt(l,function(R){return Qe(R)?function(U){return eo(U,R.length===1?R[0]:R)}:R}):l=[Jn];var v=-1;l=Xt(l,fi(Ve()));var S=vg(o,function(R,U,z){var X=Xt(l,function(de){return de(R)});return{criteria:X,index:++v,value:R}});return fT(S,function(R,U){return Qw(R,U,f)})}function zw(o,l){return Mg(o,l,function(f,v){return od(o,v)})}function Mg(o,l,f){for(var v=-1,S=l.length,R={};++v<S;){var U=l[v],z=eo(o,U);f(z,U)&&Tl(R,ps(U,o),z)}return R}function Hw(o){return function(l){return eo(l,o)}}function Df(o,l,f,v){var S=v?hT:qo,R=-1,U=l.length,z=o;for(o===l&&(l=jn(l)),f&&(z=Xt(o,fi(f)));++R<U;)for(var X=0,de=l[R],pe=f?f(de):de;(X=S(z,pe,X,v))>-1;)z!==o&&qc.call(z,X,1),qc.call(o,X,1);return o}function Tg(o,l){for(var f=o?l.length:0,v=f-1;f--;){var S=l[f];if(f==v||S!==R){var R=S;Fr(S)?qc.call(o,S,1):Ff(o,S)}}return o}function Nf(o,l){return o+Kc(rg()*(l-o+1))}function Gw(o,l,f,v){for(var S=-1,R=hn($c((l-o)/(f||1)),0),U=Z(R);R--;)U[v?R:++S]=o,o+=f;return U}function Of(o,l){var f="";if(!o||l<1||l>ne)return f;do l%2&&(f+=o),l=Kc(l/2),l&&(o+=o);while(l);return f}function lt(o,l){return Qf(ev(o,l,Jn),o+"")}function Ww(o){return ag(ra(o))}function Vw(o,l){var f=ra(o);return fu(f,Js(l,0,f.length))}function Tl(o,l,f,v){if(!Kt(o))return o;l=ps(l,o);for(var S=-1,R=l.length,U=R-1,z=o;z!=null&&++S<R;){var X=xr(l[S]),de=f;if(X==="__proto__"||X==="constructor"||X==="prototype")return o;if(S!=U){var pe=z[X];de=v?v(pe,X,z):t,de===t&&(de=Kt(pe)?pe:Fr(l[S+1])?[]:{})}yl(z,X,de),z=z[X]}return o}var wg=jc?function(o,l){return jc.set(o,l),o}:Jn,Xw=Yc?function(o,l){return Yc(o,"toString",{configurable:!0,enumerable:!1,value:ld(l),writable:!0})}:Jn;function qw(o){return fu(ra(o))}function Fi(o,l,f){var v=-1,S=o.length;l<0&&(l=-l>S?0:S+l),f=f>S?S:f,f<0&&(f+=S),S=l>f?0:f-l>>>0,l>>>=0;for(var R=Z(S);++v<S;)R[v]=o[v+l];return R}function Yw(o,l){var f;return fs(o,function(v,S,R){return f=l(v,S,R),!f}),!!f}function iu(o,l,f){var v=0,S=o==null?v:o.length;if(typeof l=="number"&&l===l&&S<=ie){for(;v<S;){var R=v+S>>>1,U=o[R];U!==null&&!pi(U)&&(f?U<=l:U<l)?v=R+1:S=R}return S}return Uf(o,l,Jn,f)}function Uf(o,l,f,v){var S=0,R=o==null?0:o.length;if(R===0)return 0;l=f(l);for(var U=l!==l,z=l===null,X=pi(l),de=l===t;S<R;){var pe=Kc((S+R)/2),me=f(o[pe]),Ae=me!==t,Be=me===null,Xe=me===me,it=pi(me);if(U)var qe=v||Xe;else de?qe=Xe&&(v||Ae):z?qe=Xe&&Ae&&(v||!Be):X?qe=Xe&&Ae&&!Be&&(v||!it):Be||it?qe=!1:qe=v?me<=l:me<l;qe?S=pe+1:R=pe}return Dn(R,ye)}function bg(o,l){for(var f=-1,v=o.length,S=0,R=[];++f<v;){var U=o[f],z=l?l(U):U;if(!f||!nr(z,X)){var X=z;R[S++]=U===0?0:U}}return R}function Ag(o){return typeof o=="number"?o:pi(o)?he:+o}function di(o){if(typeof o=="string")return o;if(Qe(o))return Xt(o,di)+"";if(pi(o))return sg?sg.call(o):"";var l=o+"";return l=="0"&&1/o==-J?"-0":l}function ds(o,l,f){var v=-1,S=Uc,R=o.length,U=!0,z=[],X=z;if(f)U=!1,S=hf;else if(R>=r){var de=l?null:rb(o);if(de)return Bc(de);U=!1,S=pl,X=new Qs}else X=l?[]:z;e:for(;++v<R;){var pe=o[v],me=l?l(pe):pe;if(pe=f||pe!==0?pe:0,U&&me===me){for(var Ae=X.length;Ae--;)if(X[Ae]===me)continue e;l&&X.push(me),z.push(pe)}else S(X,me,f)||(X!==z&&X.push(me),z.push(pe))}return z}function Ff(o,l){return l=ps(l,o),o=tv(o,l),o==null||delete o[xr(Bi(l))]}function Cg(o,l,f,v){return Tl(o,l,f(eo(o,l)),v)}function ru(o,l,f,v){for(var S=o.length,R=v?S:-1;(v?R--:++R<S)&&l(o[R],R,o););return f?Fi(o,v?0:R,v?R+1:S):Fi(o,v?R+1:0,v?S:R)}function Rg(o,l){var f=o;return f instanceof mt&&(f=f.value()),ff(l,function(v,S){return S.func.apply(S.thisArg,cs([v],S.args))},f)}function Bf(o,l,f){var v=o.length;if(v<2)return v?ds(o[0]):[];for(var S=-1,R=Z(v);++S<v;)for(var U=o[S],z=-1;++z<v;)z!=S&&(R[S]=El(R[S]||U,o[z],l,f));return ds(Rn(R,1),l,f)}function Pg(o,l,f){for(var v=-1,S=o.length,R=l.length,U={};++v<S;){var z=v<R?l[v]:t;f(U,o[v],z)}return U}function kf(o){return rn(o)?o:[]}function zf(o){return typeof o=="function"?o:Jn}function ps(o,l){return Qe(o)?o:Kf(o,l)?[o]:sv(bt(o))}var $w=lt;function _s(o,l,f){var v=o.length;return f=f===t?v:f,!l&&f>=v?o:Fi(o,l,f)}var Ig=OT||function(o){return Cn.clearTimeout(o)};function Lg(o,l){if(l)return o.slice();var f=o.length,v=Jm?Jm(f):new o.constructor(f);return o.copy(v),v}function Hf(o){var l=new o.constructor(o.byteLength);return new Vc(l).set(new Vc(o)),l}function Kw(o,l){var f=l?Hf(o.buffer):o.buffer;return new o.constructor(f,o.byteOffset,o.byteLength)}function jw(o){var l=new o.constructor(o.source,We.exec(o));return l.lastIndex=o.lastIndex,l}function Zw(o){return xl?Nt(xl.call(o)):{}}function Dg(o,l){var f=l?Hf(o.buffer):o.buffer;return new o.constructor(f,o.byteOffset,o.length)}function Ng(o,l){if(o!==l){var f=o!==t,v=o===null,S=o===o,R=pi(o),U=l!==t,z=l===null,X=l===l,de=pi(l);if(!z&&!de&&!R&&o>l||R&&U&&X&&!z&&!de||v&&U&&X||!f&&X||!S)return 1;if(!v&&!R&&!de&&o<l||de&&f&&S&&!v&&!R||z&&f&&S||!U&&S||!X)return-1}return 0}function Qw(o,l,f){for(var v=-1,S=o.criteria,R=l.criteria,U=S.length,z=f.length;++v<U;){var X=Ng(S[v],R[v]);if(X){if(v>=z)return X;var de=f[v];return X*(de=="desc"?-1:1)}}return o.index-l.index}function Og(o,l,f,v){for(var S=-1,R=o.length,U=f.length,z=-1,X=l.length,de=hn(R-U,0),pe=Z(X+de),me=!v;++z<X;)pe[z]=l[z];for(;++S<U;)(me||S<R)&&(pe[f[S]]=o[S]);for(;de--;)pe[z++]=o[S++];return pe}function Ug(o,l,f,v){for(var S=-1,R=o.length,U=-1,z=f.length,X=-1,de=l.length,pe=hn(R-z,0),me=Z(pe+de),Ae=!v;++S<pe;)me[S]=o[S];for(var Be=S;++X<de;)me[Be+X]=l[X];for(;++U<z;)(Ae||S<R)&&(me[Be+f[U]]=o[S++]);return me}function jn(o,l){var f=-1,v=o.length;for(l||(l=Z(v));++f<v;)l[f]=o[f];return l}function vr(o,l,f,v){var S=!f;f||(f={});for(var R=-1,U=l.length;++R<U;){var z=l[R],X=v?v(f[z],o[z],z,f,o):t;X===t&&(X=o[z]),S?Nr(f,z,X):yl(f,z,X)}return f}function Jw(o,l){return vr(o,$f(o),l)}function eb(o,l){return vr(o,Kg(o),l)}function su(o,l){return function(f,v){var S=Qe(f)?sT:Sw,R=l?l():{};return S(f,o,Ve(v,2),R)}}function ea(o){return lt(function(l,f){var v=-1,S=f.length,R=S>1?f[S-1]:t,U=S>2?f[2]:t;for(R=o.length>3&&typeof R=="function"?(S--,R):t,U&&Wn(f[0],f[1],U)&&(R=S<3?t:R,S=1),l=Nt(l);++v<S;){var z=f[v];z&&o(l,z,v,R)}return l})}function Fg(o,l){return function(f,v){if(f==null)return f;if(!Zn(f))return o(f,v);for(var S=f.length,R=l?S:-1,U=Nt(f);(l?R--:++R<S)&&v(U[R],R,U)!==!1;);return f}}function Bg(o){return function(l,f,v){for(var S=-1,R=Nt(l),U=v(l),z=U.length;z--;){var X=U[o?z:++S];if(f(R[X],X,R)===!1)break}return l}}function tb(o,l,f){var v=l&y,S=wl(o);function R(){var U=this&&this!==Cn&&this instanceof R?S:o;return U.apply(v?f:this,arguments)}return R}function kg(o){return function(l){l=bt(l);var f=Yo(l)?er(l):t,v=f?f[0]:l.charAt(0),S=f?_s(f,1).join(""):l.slice(1);return v[o]()+S}}function ta(o){return function(l){return ff(Fv(Uv(l).replace(XM,"")),o,"")}}function wl(o){return function(){var l=arguments;switch(l.length){case 0:return new o;case 1:return new o(l[0]);case 2:return new o(l[0],l[1]);case 3:return new o(l[0],l[1],l[2]);case 4:return new o(l[0],l[1],l[2],l[3]);case 5:return new o(l[0],l[1],l[2],l[3],l[4]);case 6:return new o(l[0],l[1],l[2],l[3],l[4],l[5]);case 7:return new o(l[0],l[1],l[2],l[3],l[4],l[5],l[6])}var f=Jo(o.prototype),v=o.apply(f,l);return Kt(v)?v:f}}function nb(o,l,f){var v=wl(o);function S(){for(var R=arguments.length,U=Z(R),z=R,X=na(S);z--;)U[z]=arguments[z];var de=R<3&&U[0]!==X&&U[R-1]!==X?[]:us(U,X);if(R-=de.length,R<f)return Vg(o,l,ou,S.placeholder,t,U,de,t,t,f-R);var pe=this&&this!==Cn&&this instanceof S?v:o;return hi(pe,this,U)}return S}function zg(o){return function(l,f,v){var S=Nt(l);if(!Zn(l)){var R=Ve(f,3);l=vn(l),f=function(z){return R(S[z],z,S)}}var U=o(l,f,v);return U>-1?S[R?l[U]:U]:t}}function Hg(o){return Ur(function(l){var f=l.length,v=f,S=Oi.prototype.thru;for(o&&l.reverse();v--;){var R=l[v];if(typeof R!="function")throw new Ni(a);if(S&&!U&&uu(R)=="wrapper")var U=new Oi([],!0)}for(v=U?v:f;++v<f;){R=l[v];var z=uu(R),X=z=="wrapper"?qf(R):t;X&&jf(X[0])&&X[1]==(O|T|b|B)&&!X[4].length&&X[9]==1?U=U[uu(X[0])].apply(U,X[3]):U=R.length==1&&jf(R)?U[z]():U.thru(R)}return function(){var de=arguments,pe=de[0];if(U&&de.length==1&&Qe(pe))return U.plant(pe).value();for(var me=0,Ae=f?l[me].apply(this,de):pe;++me<f;)Ae=l[me].call(this,Ae);return Ae}})}function ou(o,l,f,v,S,R,U,z,X,de){var pe=l&O,me=l&y,Ae=l&m,Be=l&(T|C),Xe=l&M,it=Ae?t:wl(o);function qe(){for(var pt=arguments.length,gt=Z(pt),_i=pt;_i--;)gt[_i]=arguments[_i];if(Be)var Vn=na(qe),mi=pT(gt,Vn);if(v&&(gt=Og(gt,v,S,Be)),R&&(gt=Ug(gt,R,U,Be)),pt-=mi,Be&&pt<de){var sn=us(gt,Vn);return Vg(o,l,ou,qe.placeholder,f,gt,sn,z,X,de-pt)}var ir=me?f:this,zr=Ae?ir[o]:o;return pt=gt.length,z?gt=Sb(gt,z):Xe&&pt>1&&gt.reverse(),pe&&X<pt&&(gt.length=X),this&&this!==Cn&&this instanceof qe&&(zr=it||wl(zr)),zr.apply(ir,gt)}return qe}function Gg(o,l){return function(f,v){return Pw(f,o,l(v),{})}}function au(o,l){return function(f,v){var S;if(f===t&&v===t)return l;if(f!==t&&(S=f),v!==t){if(S===t)return v;typeof f=="string"||typeof v=="string"?(f=di(f),v=di(v)):(f=Ag(f),v=Ag(v)),S=o(f,v)}return S}}function Gf(o){return Ur(function(l){return l=Xt(l,fi(Ve())),lt(function(f){var v=this;return o(l,function(S){return hi(S,v,f)})})})}function lu(o,l){l=l===t?" ":di(l);var f=l.length;if(f<2)return f?Of(l,o):l;var v=Of(l,$c(o/$o(l)));return Yo(l)?_s(er(v),0,o).join(""):v.slice(0,o)}function ib(o,l,f,v){var S=l&y,R=wl(o);function U(){for(var z=-1,X=arguments.length,de=-1,pe=v.length,me=Z(pe+X),Ae=this&&this!==Cn&&this instanceof U?R:o;++de<pe;)me[de]=v[de];for(;X--;)me[de++]=arguments[++z];return hi(Ae,S?f:this,me)}return U}function Wg(o){return function(l,f,v){return v&&typeof v!="number"&&Wn(l,f,v)&&(f=v=t),l=kr(l),f===t?(f=l,l=0):f=kr(f),v=v===t?l<f?1:-1:kr(v),Gw(l,f,v,o)}}function cu(o){return function(l,f){return typeof l=="string"&&typeof f=="string"||(l=ki(l),f=ki(f)),o(l,f)}}function Vg(o,l,f,v,S,R,U,z,X,de){var pe=l&T,me=pe?U:t,Ae=pe?t:U,Be=pe?R:t,Xe=pe?t:R;l|=pe?b:I,l&=~(pe?I:b),l&w||(l&=~(y|m));var it=[o,l,S,Be,me,Xe,Ae,z,X,de],qe=f.apply(t,it);return jf(o)&&nv(qe,it),qe.placeholder=v,iv(qe,o,l)}function Wf(o){var l=un[o];return function(f,v){if(f=ki(f),v=v==null?0:Dn(nt(v),292),v&&ig(f)){var S=(bt(f)+"e").split("e"),R=l(S[0]+"e"+(+S[1]+v));return S=(bt(R)+"e").split("e"),+(S[0]+"e"+(+S[1]-v))}return l(f)}}var rb=Zo&&1/Bc(new Zo([,-0]))[1]==J?function(o){return new Zo(o)}:hd;function Xg(o){return function(l){var f=Nn(l);return f==Ge?xf(l):f==Dt?ET(l):dT(l,o(l))}}function Or(o,l,f,v,S,R,U,z){var X=l&m;if(!X&&typeof o!="function")throw new Ni(a);var de=v?v.length:0;if(de||(l&=~(b|I),v=S=t),U=U===t?U:hn(nt(U),0),z=z===t?z:nt(z),de-=S?S.length:0,l&I){var pe=v,me=S;v=S=t}var Ae=X?t:qf(o),Be=[o,l,f,v,S,pe,me,R,U,z];if(Ae&&xb(Be,Ae),o=Be[0],l=Be[1],f=Be[2],v=Be[3],S=Be[4],z=Be[9]=Be[9]===t?X?0:o.length:hn(Be[9]-de,0),!z&&l&(T|C)&&(l&=~(T|C)),!l||l==y)var Xe=tb(o,l,f);else l==T||l==C?Xe=nb(o,l,z):(l==b||l==(y|b))&&!S.length?Xe=ib(o,l,f,v):Xe=ou.apply(t,Be);var it=Ae?wg:nv;return iv(it(Xe,Be),o,l)}function qg(o,l,f,v){return o===t||nr(o,jo[f])&&!It.call(v,f)?l:o}function Yg(o,l,f,v,S,R){return Kt(o)&&Kt(l)&&(R.set(l,o),nu(o,l,t,Yg,R),R.delete(l)),o}function sb(o){return Cl(o)?t:o}function $g(o,l,f,v,S,R){var U=f&E,z=o.length,X=l.length;if(z!=X&&!(U&&X>z))return!1;var de=R.get(o),pe=R.get(l);if(de&&pe)return de==l&&pe==o;var me=-1,Ae=!0,Be=f&x?new Qs:t;for(R.set(o,l),R.set(l,o);++me<z;){var Xe=o[me],it=l[me];if(v)var qe=U?v(it,Xe,me,l,o,R):v(Xe,it,me,o,l,R);if(qe!==t){if(qe)continue;Ae=!1;break}if(Be){if(!df(l,function(pt,gt){if(!pl(Be,gt)&&(Xe===pt||S(Xe,pt,f,v,R)))return Be.push(gt)})){Ae=!1;break}}else if(!(Xe===it||S(Xe,it,f,v,R))){Ae=!1;break}}return R.delete(o),R.delete(l),Ae}function ob(o,l,f,v,S,R,U){switch(f){case k:if(o.byteLength!=l.byteLength||o.byteOffset!=l.byteOffset)return!1;o=o.buffer,l=l.buffer;case Te:return!(o.byteLength!=l.byteLength||!R(new Vc(o),new Vc(l)));case Pe:case Ce:case Lt:return nr(+o,+l);case ze:return o.name==l.name&&o.message==l.message;case Et:case N:return o==l+"";case Ge:var z=xf;case Dt:var X=v&E;if(z||(z=Bc),o.size!=l.size&&!X)return!1;var de=U.get(o);if(de)return de==l;v|=x,U.set(o,l);var pe=$g(z(o),z(l),v,S,R,U);return U.delete(o),pe;case P:if(xl)return xl.call(o)==xl.call(l)}return!1}function ab(o,l,f,v,S,R){var U=f&E,z=Vf(o),X=z.length,de=Vf(l),pe=de.length;if(X!=pe&&!U)return!1;for(var me=X;me--;){var Ae=z[me];if(!(U?Ae in l:It.call(l,Ae)))return!1}var Be=R.get(o),Xe=R.get(l);if(Be&&Xe)return Be==l&&Xe==o;var it=!0;R.set(o,l),R.set(l,o);for(var qe=U;++me<X;){Ae=z[me];var pt=o[Ae],gt=l[Ae];if(v)var _i=U?v(gt,pt,Ae,l,o,R):v(pt,gt,Ae,o,l,R);if(!(_i===t?pt===gt||S(pt,gt,f,v,R):_i)){it=!1;break}qe||(qe=Ae=="constructor")}if(it&&!qe){var Vn=o.constructor,mi=l.constructor;Vn!=mi&&"constructor"in o&&"constructor"in l&&!(typeof Vn=="function"&&Vn instanceof Vn&&typeof mi=="function"&&mi instanceof mi)&&(it=!1)}return R.delete(o),R.delete(l),it}function Ur(o){return Qf(ev(o,t,cv),o+"")}function Vf(o){return pg(o,vn,$f)}function Xf(o){return pg(o,Qn,Kg)}var qf=jc?function(o){return jc.get(o)}:hd;function uu(o){for(var l=o.name+"",f=Qo[l],v=It.call(Qo,l)?f.length:0;v--;){var S=f[v],R=S.func;if(R==null||R==o)return S.name}return l}function na(o){var l=It.call(A,"placeholder")?A:o;return l.placeholder}function Ve(){var o=A.iteratee||cd;return o=o===cd?gg:o,arguments.length?o(arguments[0],arguments[1]):o}function hu(o,l){var f=o.__data__;return _b(l)?f[typeof l=="string"?"string":"hash"]:f.map}function Yf(o){for(var l=vn(o),f=l.length;f--;){var v=l[f],S=o[v];l[f]=[v,S,Qg(S)]}return l}function to(o,l){var f=vT(o,l);return mg(f)?f:t}function lb(o){var l=It.call(o,js),f=o[js];try{o[js]=t;var v=!0}catch{}var S=Gc.call(o);return v&&(l?o[js]=f:delete o[js]),S}var $f=Ef?function(o){return o==null?[]:(o=Nt(o),ls(Ef(o),function(l){return tg.call(o,l)}))}:fd,Kg=Ef?function(o){for(var l=[];o;)cs(l,$f(o)),o=Xc(o);return l}:fd,Nn=Gn;(Sf&&Nn(new Sf(new ArrayBuffer(1)))!=k||ml&&Nn(new ml)!=Ge||Mf&&Nn(Mf.resolve())!=Vt||Zo&&Nn(new Zo)!=Dt||gl&&Nn(new gl)!=ve)&&(Nn=function(o){var l=Gn(o),f=l==Tt?o.constructor:t,v=f?no(f):"";if(v)switch(v){case VT:return k;case XT:return Ge;case qT:return Vt;case YT:return Dt;case $T:return ve}return l});function cb(o,l,f){for(var v=-1,S=f.length;++v<S;){var R=f[v],U=R.size;switch(R.type){case"drop":o+=U;break;case"dropRight":l-=U;break;case"take":l=Dn(l,o+U);break;case"takeRight":o=hn(o,l-U);break}}return{start:o,end:l}}function ub(o){var l=o.match(D);return l?l[1].split(K):[]}function jg(o,l,f){l=ps(l,o);for(var v=-1,S=l.length,R=!1;++v<S;){var U=xr(l[v]);if(!(R=o!=null&&f(o,U)))break;o=o[U]}return R||++v!=S?R:(S=o==null?0:o.length,!!S&&vu(S)&&Fr(U,S)&&(Qe(o)||io(o)))}function hb(o){var l=o.length,f=new o.constructor(l);return l&&typeof o[0]=="string"&&It.call(o,"index")&&(f.index=o.index,f.input=o.input),f}function Zg(o){return typeof o.constructor=="function"&&!bl(o)?Jo(Xc(o)):{}}function fb(o,l,f){var v=o.constructor;switch(l){case Te:return Hf(o);case Pe:case Ce:return new v(+o);case k:return Kw(o,f);case fe:case ee:case we:case De:case Fe:case Re:case Oe:case Ke:case Je:return Dg(o,f);case Ge:return new v;case Lt:case N:return new v(o);case Et:return jw(o);case Dt:return new v;case P:return Zw(o)}}function db(o,l){var f=l.length;if(!f)return o;var v=f-1;return l[v]=(f>1?"& ":"")+l[v],l=l.join(f>2?", ":" "),o.replace(rf,`{
/* [wrapped with `+l+`] */
`)}function pb(o){return Qe(o)||io(o)||!!(ng&&o&&o[ng])}function Fr(o,l){var f=typeof o;return l=l??ne,!!l&&(f=="number"||f!="symbol"&&ft.test(o))&&o>-1&&o%1==0&&o<l}function Wn(o,l,f){if(!Kt(f))return!1;var v=typeof l;return(v=="number"?Zn(f)&&Fr(l,f.length):v=="string"&&l in f)?nr(f[l],o):!1}function Kf(o,l){if(Qe(o))return!1;var f=typeof o;return f=="number"||f=="symbol"||f=="boolean"||o==null||pi(o)?!0:Kn.test(o)||!$t.test(o)||l!=null&&o in Nt(l)}function _b(o){var l=typeof o;return l=="string"||l=="number"||l=="symbol"||l=="boolean"?o!=="__proto__":o===null}function jf(o){var l=uu(o),f=A[l];if(typeof f!="function"||!(l in mt.prototype))return!1;if(o===f)return!0;var v=qf(f);return!!v&&o===v[0]}function mb(o){return!!Qm&&Qm in o}var gb=zc?Br:dd;function bl(o){var l=o&&o.constructor,f=typeof l=="function"&&l.prototype||jo;return o===f}function Qg(o){return o===o&&!Kt(o)}function Jg(o,l){return function(f){return f==null?!1:f[o]===l&&(l!==t||o in Nt(f))}}function vb(o){var l=mu(o,function(v){return f.size===h&&f.clear(),v}),f=l.cache;return l}function xb(o,l){var f=o[1],v=l[1],S=f|v,R=S<(y|m|O),U=v==O&&f==T||v==O&&f==B&&o[7].length<=l[8]||v==(O|B)&&l[7].length<=l[8]&&f==T;if(!(R||U))return o;v&y&&(o[2]=l[2],S|=f&y?0:w);var z=l[3];if(z){var X=o[3];o[3]=X?Og(X,z,l[4]):z,o[4]=X?us(o[3],d):l[4]}return z=l[5],z&&(X=o[5],o[5]=X?Ug(X,z,l[6]):z,o[6]=X?us(o[5],d):l[6]),z=l[7],z&&(o[7]=z),v&O&&(o[8]=o[8]==null?l[8]:Dn(o[8],l[8])),o[9]==null&&(o[9]=l[9]),o[0]=l[0],o[1]=S,o}function yb(o){var l=[];if(o!=null)for(var f in Nt(o))l.push(f);return l}function Eb(o){return Gc.call(o)}function ev(o,l,f){return l=hn(l===t?o.length-1:l,0),function(){for(var v=arguments,S=-1,R=hn(v.length-l,0),U=Z(R);++S<R;)U[S]=v[l+S];S=-1;for(var z=Z(l+1);++S<l;)z[S]=v[S];return z[l]=f(U),hi(o,this,z)}}function tv(o,l){return l.length<2?o:eo(o,Fi(l,0,-1))}function Sb(o,l){for(var f=o.length,v=Dn(l.length,f),S=jn(o);v--;){var R=l[v];o[v]=Fr(R,f)?S[R]:t}return o}function Zf(o,l){if(!(l==="constructor"&&typeof o[l]=="function")&&l!="__proto__")return o[l]}var nv=rv(wg),Al=FT||function(o,l){return Cn.setTimeout(o,l)},Qf=rv(Xw);function iv(o,l,f){var v=l+"";return Qf(o,db(v,Mb(ub(v),f)))}function rv(o){var l=0,f=0;return function(){var v=HT(),S=W-(v-f);if(f=v,S>0){if(++l>=te)return arguments[0]}else l=0;return o.apply(t,arguments)}}function fu(o,l){var f=-1,v=o.length,S=v-1;for(l=l===t?v:l;++f<l;){var R=Nf(f,S),U=o[R];o[R]=o[f],o[f]=U}return o.length=l,o}var sv=vb(function(o){var l=[];return o.charCodeAt(0)===46&&l.push(""),o.replace(Pi,function(f,v,S,R){l.push(S?R.replace(ue,"$1"):v||f)}),l});function xr(o){if(typeof o=="string"||pi(o))return o;var l=o+"";return l=="0"&&1/o==-J?"-0":l}function no(o){if(o!=null){try{return Hc.call(o)}catch{}try{return o+""}catch{}}return""}function Mb(o,l){return Di(ce,function(f){var v="_."+f[0];l&f[1]&&!Uc(o,v)&&o.push(v)}),o.sort()}function ov(o){if(o instanceof mt)return o.clone();var l=new Oi(o.__wrapped__,o.__chain__);return l.__actions__=jn(o.__actions__),l.__index__=o.__index__,l.__values__=o.__values__,l}function Tb(o,l,f){(f?Wn(o,l,f):l===t)?l=1:l=hn(nt(l),0);var v=o==null?0:o.length;if(!v||l<1)return[];for(var S=0,R=0,U=Z($c(v/l));S<v;)U[R++]=Fi(o,S,S+=l);return U}function wb(o){for(var l=-1,f=o==null?0:o.length,v=0,S=[];++l<f;){var R=o[l];R&&(S[v++]=R)}return S}function bb(){var o=arguments.length;if(!o)return[];for(var l=Z(o-1),f=arguments[0],v=o;v--;)l[v-1]=arguments[v];return cs(Qe(f)?jn(f):[f],Rn(l,1))}var Ab=lt(function(o,l){return rn(o)?El(o,Rn(l,1,rn,!0)):[]}),Cb=lt(function(o,l){var f=Bi(l);return rn(f)&&(f=t),rn(o)?El(o,Rn(l,1,rn,!0),Ve(f,2)):[]}),Rb=lt(function(o,l){var f=Bi(l);return rn(f)&&(f=t),rn(o)?El(o,Rn(l,1,rn,!0),t,f):[]});function Pb(o,l,f){var v=o==null?0:o.length;return v?(l=f||l===t?1:nt(l),Fi(o,l<0?0:l,v)):[]}function Ib(o,l,f){var v=o==null?0:o.length;return v?(l=f||l===t?1:nt(l),l=v-l,Fi(o,0,l<0?0:l)):[]}function Lb(o,l){return o&&o.length?ru(o,Ve(l,3),!0,!0):[]}function Db(o,l){return o&&o.length?ru(o,Ve(l,3),!0):[]}function Nb(o,l,f,v){var S=o==null?0:o.length;return S?(f&&typeof f!="number"&&Wn(o,l,f)&&(f=0,v=S),bw(o,l,f,v)):[]}function av(o,l,f){var v=o==null?0:o.length;if(!v)return-1;var S=f==null?0:nt(f);return S<0&&(S=hn(v+S,0)),Fc(o,Ve(l,3),S)}function lv(o,l,f){var v=o==null?0:o.length;if(!v)return-1;var S=v-1;return f!==t&&(S=nt(f),S=f<0?hn(v+S,0):Dn(S,v-1)),Fc(o,Ve(l,3),S,!0)}function cv(o){var l=o==null?0:o.length;return l?Rn(o,1):[]}function Ob(o){var l=o==null?0:o.length;return l?Rn(o,J):[]}function Ub(o,l){var f=o==null?0:o.length;return f?(l=l===t?1:nt(l),Rn(o,l)):[]}function Fb(o){for(var l=-1,f=o==null?0:o.length,v={};++l<f;){var S=o[l];v[S[0]]=S[1]}return v}function uv(o){return o&&o.length?o[0]:t}function Bb(o,l,f){var v=o==null?0:o.length;if(!v)return-1;var S=f==null?0:nt(f);return S<0&&(S=hn(v+S,0)),qo(o,l,S)}function kb(o){var l=o==null?0:o.length;return l?Fi(o,0,-1):[]}var zb=lt(function(o){var l=Xt(o,kf);return l.length&&l[0]===o[0]?Rf(l):[]}),Hb=lt(function(o){var l=Bi(o),f=Xt(o,kf);return l===Bi(f)?l=t:f.pop(),f.length&&f[0]===o[0]?Rf(f,Ve(l,2)):[]}),Gb=lt(function(o){var l=Bi(o),f=Xt(o,kf);return l=typeof l=="function"?l:t,l&&f.pop(),f.length&&f[0]===o[0]?Rf(f,t,l):[]});function Wb(o,l){return o==null?"":kT.call(o,l)}function Bi(o){var l=o==null?0:o.length;return l?o[l-1]:t}function Vb(o,l,f){var v=o==null?0:o.length;if(!v)return-1;var S=v;return f!==t&&(S=nt(f),S=S<0?hn(v+S,0):Dn(S,v-1)),l===l?MT(o,l,S):Fc(o,Vm,S,!0)}function Xb(o,l){return o&&o.length?Eg(o,nt(l)):t}var qb=lt(hv);function hv(o,l){return o&&o.length&&l&&l.length?Df(o,l):o}function Yb(o,l,f){return o&&o.length&&l&&l.length?Df(o,l,Ve(f,2)):o}function $b(o,l,f){return o&&o.length&&l&&l.length?Df(o,l,t,f):o}var Kb=Ur(function(o,l){var f=o==null?0:o.length,v=wf(o,l);return Tg(o,Xt(l,function(S){return Fr(S,f)?+S:S}).sort(Ng)),v});function jb(o,l){var f=[];if(!(o&&o.length))return f;var v=-1,S=[],R=o.length;for(l=Ve(l,3);++v<R;){var U=o[v];l(U,v,o)&&(f.push(U),S.push(v))}return Tg(o,S),f}function Jf(o){return o==null?o:WT.call(o)}function Zb(o,l,f){var v=o==null?0:o.length;return v?(f&&typeof f!="number"&&Wn(o,l,f)?(l=0,f=v):(l=l==null?0:nt(l),f=f===t?v:nt(f)),Fi(o,l,f)):[]}function Qb(o,l){return iu(o,l)}function Jb(o,l,f){return Uf(o,l,Ve(f,2))}function eA(o,l){var f=o==null?0:o.length;if(f){var v=iu(o,l);if(v<f&&nr(o[v],l))return v}return-1}function tA(o,l){return iu(o,l,!0)}function nA(o,l,f){return Uf(o,l,Ve(f,2),!0)}function iA(o,l){var f=o==null?0:o.length;if(f){var v=iu(o,l,!0)-1;if(nr(o[v],l))return v}return-1}function rA(o){return o&&o.length?bg(o):[]}function sA(o,l){return o&&o.length?bg(o,Ve(l,2)):[]}function oA(o){var l=o==null?0:o.length;return l?Fi(o,1,l):[]}function aA(o,l,f){return o&&o.length?(l=f||l===t?1:nt(l),Fi(o,0,l<0?0:l)):[]}function lA(o,l,f){var v=o==null?0:o.length;return v?(l=f||l===t?1:nt(l),l=v-l,Fi(o,l<0?0:l,v)):[]}function cA(o,l){return o&&o.length?ru(o,Ve(l,3),!1,!0):[]}function uA(o,l){return o&&o.length?ru(o,Ve(l,3)):[]}var hA=lt(function(o){return ds(Rn(o,1,rn,!0))}),fA=lt(function(o){var l=Bi(o);return rn(l)&&(l=t),ds(Rn(o,1,rn,!0),Ve(l,2))}),dA=lt(function(o){var l=Bi(o);return l=typeof l=="function"?l:t,ds(Rn(o,1,rn,!0),t,l)});function pA(o){return o&&o.length?ds(o):[]}function _A(o,l){return o&&o.length?ds(o,Ve(l,2)):[]}function mA(o,l){return l=typeof l=="function"?l:t,o&&o.length?ds(o,t,l):[]}function ed(o){if(!(o&&o.length))return[];var l=0;return o=ls(o,function(f){if(rn(f))return l=hn(f.length,l),!0}),gf(l,function(f){return Xt(o,pf(f))})}function fv(o,l){if(!(o&&o.length))return[];var f=ed(o);return l==null?f:Xt(f,function(v){return hi(l,t,v)})}var gA=lt(function(o,l){return rn(o)?El(o,l):[]}),vA=lt(function(o){return Bf(ls(o,rn))}),xA=lt(function(o){var l=Bi(o);return rn(l)&&(l=t),Bf(ls(o,rn),Ve(l,2))}),yA=lt(function(o){var l=Bi(o);return l=typeof l=="function"?l:t,Bf(ls(o,rn),t,l)}),EA=lt(ed);function SA(o,l){return Pg(o||[],l||[],yl)}function MA(o,l){return Pg(o||[],l||[],Tl)}var TA=lt(function(o){var l=o.length,f=l>1?o[l-1]:t;return f=typeof f=="function"?(o.pop(),f):t,fv(o,f)});function dv(o){var l=A(o);return l.__chain__=!0,l}function wA(o,l){return l(o),o}function du(o,l){return l(o)}var bA=Ur(function(o){var l=o.length,f=l?o[0]:0,v=this.__wrapped__,S=function(R){return wf(R,o)};return l>1||this.__actions__.length||!(v instanceof mt)||!Fr(f)?this.thru(S):(v=v.slice(f,+f+(l?1:0)),v.__actions__.push({func:du,args:[S],thisArg:t}),new Oi(v,this.__chain__).thru(function(R){return l&&!R.length&&R.push(t),R}))});function AA(){return dv(this)}function CA(){return new Oi(this.value(),this.__chain__)}function RA(){this.__values__===t&&(this.__values__=Av(this.value()));var o=this.__index__>=this.__values__.length,l=o?t:this.__values__[this.__index__++];return{done:o,value:l}}function PA(){return this}function IA(o){for(var l,f=this;f instanceof Qc;){var v=ov(f);v.__index__=0,v.__values__=t,l?S.__wrapped__=v:l=v;var S=v;f=f.__wrapped__}return S.__wrapped__=o,l}function LA(){var o=this.__wrapped__;if(o instanceof mt){var l=o;return this.__actions__.length&&(l=new mt(this)),l=l.reverse(),l.__actions__.push({func:du,args:[Jf],thisArg:t}),new Oi(l,this.__chain__)}return this.thru(Jf)}function DA(){return Rg(this.__wrapped__,this.__actions__)}var NA=su(function(o,l,f){It.call(o,f)?++o[f]:Nr(o,f,1)});function OA(o,l,f){var v=Qe(o)?Gm:ww;return f&&Wn(o,l,f)&&(l=t),v(o,Ve(l,3))}function UA(o,l){var f=Qe(o)?ls:fg;return f(o,Ve(l,3))}var FA=zg(av),BA=zg(lv);function kA(o,l){return Rn(pu(o,l),1)}function zA(o,l){return Rn(pu(o,l),J)}function HA(o,l,f){return f=f===t?1:nt(f),Rn(pu(o,l),f)}function pv(o,l){var f=Qe(o)?Di:fs;return f(o,Ve(l,3))}function _v(o,l){var f=Qe(o)?oT:hg;return f(o,Ve(l,3))}var GA=su(function(o,l,f){It.call(o,f)?o[f].push(l):Nr(o,f,[l])});function WA(o,l,f,v){o=Zn(o)?o:ra(o),f=f&&!v?nt(f):0;var S=o.length;return f<0&&(f=hn(S+f,0)),xu(o)?f<=S&&o.indexOf(l,f)>-1:!!S&&qo(o,l,f)>-1}var VA=lt(function(o,l,f){var v=-1,S=typeof l=="function",R=Zn(o)?Z(o.length):[];return fs(o,function(U){R[++v]=S?hi(l,U,f):Sl(U,l,f)}),R}),XA=su(function(o,l,f){Nr(o,f,l)});function pu(o,l){var f=Qe(o)?Xt:vg;return f(o,Ve(l,3))}function qA(o,l,f,v){return o==null?[]:(Qe(l)||(l=l==null?[]:[l]),f=v?t:f,Qe(f)||(f=f==null?[]:[f]),Sg(o,l,f))}var YA=su(function(o,l,f){o[f?0:1].push(l)},function(){return[[],[]]});function $A(o,l,f){var v=Qe(o)?ff:qm,S=arguments.length<3;return v(o,Ve(l,4),f,S,fs)}function KA(o,l,f){var v=Qe(o)?aT:qm,S=arguments.length<3;return v(o,Ve(l,4),f,S,hg)}function jA(o,l){var f=Qe(o)?ls:fg;return f(o,gu(Ve(l,3)))}function ZA(o){var l=Qe(o)?ag:Ww;return l(o)}function QA(o,l,f){(f?Wn(o,l,f):l===t)?l=1:l=nt(l);var v=Qe(o)?yw:Vw;return v(o,l)}function JA(o){var l=Qe(o)?Ew:qw;return l(o)}function eC(o){if(o==null)return 0;if(Zn(o))return xu(o)?$o(o):o.length;var l=Nn(o);return l==Ge||l==Dt?o.size:If(o).length}function tC(o,l,f){var v=Qe(o)?df:Yw;return f&&Wn(o,l,f)&&(l=t),v(o,Ve(l,3))}var nC=lt(function(o,l){if(o==null)return[];var f=l.length;return f>1&&Wn(o,l[0],l[1])?l=[]:f>2&&Wn(l[0],l[1],l[2])&&(l=[l[0]]),Sg(o,Rn(l,1),[])}),_u=UT||function(){return Cn.Date.now()};function iC(o,l){if(typeof l!="function")throw new Ni(a);return o=nt(o),function(){if(--o<1)return l.apply(this,arguments)}}function mv(o,l,f){return l=f?t:l,l=o&&l==null?o.length:l,Or(o,O,t,t,t,t,l)}function gv(o,l){var f;if(typeof l!="function")throw new Ni(a);return o=nt(o),function(){return--o>0&&(f=l.apply(this,arguments)),o<=1&&(l=t),f}}var td=lt(function(o,l,f){var v=y;if(f.length){var S=us(f,na(td));v|=b}return Or(o,v,l,f,S)}),vv=lt(function(o,l,f){var v=y|m;if(f.length){var S=us(f,na(vv));v|=b}return Or(l,v,o,f,S)});function xv(o,l,f){l=f?t:l;var v=Or(o,T,t,t,t,t,t,l);return v.placeholder=xv.placeholder,v}function yv(o,l,f){l=f?t:l;var v=Or(o,C,t,t,t,t,t,l);return v.placeholder=yv.placeholder,v}function Ev(o,l,f){var v,S,R,U,z,X,de=0,pe=!1,me=!1,Ae=!0;if(typeof o!="function")throw new Ni(a);l=ki(l)||0,Kt(f)&&(pe=!!f.leading,me="maxWait"in f,R=me?hn(ki(f.maxWait)||0,l):R,Ae="trailing"in f?!!f.trailing:Ae);function Be(sn){var ir=v,zr=S;return v=S=t,de=sn,U=o.apply(zr,ir),U}function Xe(sn){return de=sn,z=Al(pt,l),pe?Be(sn):U}function it(sn){var ir=sn-X,zr=sn-de,zv=l-ir;return me?Dn(zv,R-zr):zv}function qe(sn){var ir=sn-X,zr=sn-de;return X===t||ir>=l||ir<0||me&&zr>=R}function pt(){var sn=_u();if(qe(sn))return gt(sn);z=Al(pt,it(sn))}function gt(sn){return z=t,Ae&&v?Be(sn):(v=S=t,U)}function _i(){z!==t&&Ig(z),de=0,v=X=S=z=t}function Vn(){return z===t?U:gt(_u())}function mi(){var sn=_u(),ir=qe(sn);if(v=arguments,S=this,X=sn,ir){if(z===t)return Xe(X);if(me)return Ig(z),z=Al(pt,l),Be(X)}return z===t&&(z=Al(pt,l)),U}return mi.cancel=_i,mi.flush=Vn,mi}var rC=lt(function(o,l){return ug(o,1,l)}),sC=lt(function(o,l,f){return ug(o,ki(l)||0,f)});function oC(o){return Or(o,M)}function mu(o,l){if(typeof o!="function"||l!=null&&typeof l!="function")throw new Ni(a);var f=function(){var v=arguments,S=l?l.apply(this,v):v[0],R=f.cache;if(R.has(S))return R.get(S);var U=o.apply(this,v);return f.cache=R.set(S,U)||R,U};return f.cache=new(mu.Cache||Dr),f}mu.Cache=Dr;function gu(o){if(typeof o!="function")throw new Ni(a);return function(){var l=arguments;switch(l.length){case 0:return!o.call(this);case 1:return!o.call(this,l[0]);case 2:return!o.call(this,l[0],l[1]);case 3:return!o.call(this,l[0],l[1],l[2])}return!o.apply(this,l)}}function aC(o){return gv(2,o)}var lC=$w(function(o,l){l=l.length==1&&Qe(l[0])?Xt(l[0],fi(Ve())):Xt(Rn(l,1),fi(Ve()));var f=l.length;return lt(function(v){for(var S=-1,R=Dn(v.length,f);++S<R;)v[S]=l[S].call(this,v[S]);return hi(o,this,v)})}),nd=lt(function(o,l){var f=us(l,na(nd));return Or(o,b,t,l,f)}),Sv=lt(function(o,l){var f=us(l,na(Sv));return Or(o,I,t,l,f)}),cC=Ur(function(o,l){return Or(o,B,t,t,t,l)});function uC(o,l){if(typeof o!="function")throw new Ni(a);return l=l===t?l:nt(l),lt(o,l)}function hC(o,l){if(typeof o!="function")throw new Ni(a);return l=l==null?0:hn(nt(l),0),lt(function(f){var v=f[l],S=_s(f,0,l);return v&&cs(S,v),hi(o,this,S)})}function fC(o,l,f){var v=!0,S=!0;if(typeof o!="function")throw new Ni(a);return Kt(f)&&(v="leading"in f?!!f.leading:v,S="trailing"in f?!!f.trailing:S),Ev(o,l,{leading:v,maxWait:l,trailing:S})}function dC(o){return mv(o,1)}function pC(o,l){return nd(zf(l),o)}function _C(){if(!arguments.length)return[];var o=arguments[0];return Qe(o)?o:[o]}function mC(o){return Ui(o,g)}function gC(o,l){return l=typeof l=="function"?l:t,Ui(o,g,l)}function vC(o){return Ui(o,p|g)}function xC(o,l){return l=typeof l=="function"?l:t,Ui(o,p|g,l)}function yC(o,l){return l==null||cg(o,l,vn(l))}function nr(o,l){return o===l||o!==o&&l!==l}var EC=cu(Cf),SC=cu(function(o,l){return o>=l}),io=_g(function(){return arguments}())?_g:function(o){return en(o)&&It.call(o,"callee")&&!tg.call(o,"callee")},Qe=Z.isArray,MC=Um?fi(Um):Iw;function Zn(o){return o!=null&&vu(o.length)&&!Br(o)}function rn(o){return en(o)&&Zn(o)}function TC(o){return o===!0||o===!1||en(o)&&Gn(o)==Pe}var ms=BT||dd,wC=Fm?fi(Fm):Lw;function bC(o){return en(o)&&o.nodeType===1&&!Cl(o)}function AC(o){if(o==null)return!0;if(Zn(o)&&(Qe(o)||typeof o=="string"||typeof o.splice=="function"||ms(o)||ia(o)||io(o)))return!o.length;var l=Nn(o);if(l==Ge||l==Dt)return!o.size;if(bl(o))return!If(o).length;for(var f in o)if(It.call(o,f))return!1;return!0}function CC(o,l){return Ml(o,l)}function RC(o,l,f){f=typeof f=="function"?f:t;var v=f?f(o,l):t;return v===t?Ml(o,l,t,f):!!v}function id(o){if(!en(o))return!1;var l=Gn(o);return l==ze||l==Ee||typeof o.message=="string"&&typeof o.name=="string"&&!Cl(o)}function PC(o){return typeof o=="number"&&ig(o)}function Br(o){if(!Kt(o))return!1;var l=Gn(o);return l==st||l==Ue||l==F||l==yt}function Mv(o){return typeof o=="number"&&o==nt(o)}function vu(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=ne}function Kt(o){var l=typeof o;return o!=null&&(l=="object"||l=="function")}function en(o){return o!=null&&typeof o=="object"}var Tv=Bm?fi(Bm):Nw;function IC(o,l){return o===l||Pf(o,l,Yf(l))}function LC(o,l,f){return f=typeof f=="function"?f:t,Pf(o,l,Yf(l),f)}function DC(o){return wv(o)&&o!=+o}function NC(o){if(gb(o))throw new Ze(s);return mg(o)}function OC(o){return o===null}function UC(o){return o==null}function wv(o){return typeof o=="number"||en(o)&&Gn(o)==Lt}function Cl(o){if(!en(o)||Gn(o)!=Tt)return!1;var l=Xc(o);if(l===null)return!0;var f=It.call(l,"constructor")&&l.constructor;return typeof f=="function"&&f instanceof f&&Hc.call(f)==LT}var rd=km?fi(km):Ow;function FC(o){return Mv(o)&&o>=-ne&&o<=ne}var bv=zm?fi(zm):Uw;function xu(o){return typeof o=="string"||!Qe(o)&&en(o)&&Gn(o)==N}function pi(o){return typeof o=="symbol"||en(o)&&Gn(o)==P}var ia=Hm?fi(Hm):Fw;function BC(o){return o===t}function kC(o){return en(o)&&Nn(o)==ve}function zC(o){return en(o)&&Gn(o)==Se}var HC=cu(Lf),GC=cu(function(o,l){return o<=l});function Av(o){if(!o)return[];if(Zn(o))return xu(o)?er(o):jn(o);if(_l&&o[_l])return yT(o[_l]());var l=Nn(o),f=l==Ge?xf:l==Dt?Bc:ra;return f(o)}function kr(o){if(!o)return o===0?o:0;if(o=ki(o),o===J||o===-J){var l=o<0?-1:1;return l*ge}return o===o?o:0}function nt(o){var l=kr(o),f=l%1;return l===l?f?l-f:l:0}function Cv(o){return o?Js(nt(o),0,Ie):0}function ki(o){if(typeof o=="number")return o;if(pi(o))return he;if(Kt(o)){var l=typeof o.valueOf=="function"?o.valueOf():o;o=Kt(l)?l+"":l}if(typeof o!="string")return o===0?o:+o;o=Ym(o);var f=tt.test(o);return f||at.test(o)?iT(o.slice(2),f?2:8):je.test(o)?he:+o}function Rv(o){return vr(o,Qn(o))}function WC(o){return o?Js(nt(o),-ne,ne):o===0?o:0}function bt(o){return o==null?"":di(o)}var VC=ea(function(o,l){if(bl(l)||Zn(l)){vr(l,vn(l),o);return}for(var f in l)It.call(l,f)&&yl(o,f,l[f])}),Pv=ea(function(o,l){vr(l,Qn(l),o)}),yu=ea(function(o,l,f,v){vr(l,Qn(l),o,v)}),XC=ea(function(o,l,f,v){vr(l,vn(l),o,v)}),qC=Ur(wf);function YC(o,l){var f=Jo(o);return l==null?f:lg(f,l)}var $C=lt(function(o,l){o=Nt(o);var f=-1,v=l.length,S=v>2?l[2]:t;for(S&&Wn(l[0],l[1],S)&&(v=1);++f<v;)for(var R=l[f],U=Qn(R),z=-1,X=U.length;++z<X;){var de=U[z],pe=o[de];(pe===t||nr(pe,jo[de])&&!It.call(o,de))&&(o[de]=R[de])}return o}),KC=lt(function(o){return o.push(t,Yg),hi(Iv,t,o)});function jC(o,l){return Wm(o,Ve(l,3),gr)}function ZC(o,l){return Wm(o,Ve(l,3),Af)}function QC(o,l){return o==null?o:bf(o,Ve(l,3),Qn)}function JC(o,l){return o==null?o:dg(o,Ve(l,3),Qn)}function e1(o,l){return o&&gr(o,Ve(l,3))}function t1(o,l){return o&&Af(o,Ve(l,3))}function n1(o){return o==null?[]:tu(o,vn(o))}function i1(o){return o==null?[]:tu(o,Qn(o))}function sd(o,l,f){var v=o==null?t:eo(o,l);return v===t?f:v}function r1(o,l){return o!=null&&jg(o,l,Aw)}function od(o,l){return o!=null&&jg(o,l,Cw)}var s1=Gg(function(o,l,f){l!=null&&typeof l.toString!="function"&&(l=Gc.call(l)),o[l]=f},ld(Jn)),o1=Gg(function(o,l,f){l!=null&&typeof l.toString!="function"&&(l=Gc.call(l)),It.call(o,l)?o[l].push(f):o[l]=[f]},Ve),a1=lt(Sl);function vn(o){return Zn(o)?og(o):If(o)}function Qn(o){return Zn(o)?og(o,!0):Bw(o)}function l1(o,l){var f={};return l=Ve(l,3),gr(o,function(v,S,R){Nr(f,l(v,S,R),v)}),f}function c1(o,l){var f={};return l=Ve(l,3),gr(o,function(v,S,R){Nr(f,S,l(v,S,R))}),f}var u1=ea(function(o,l,f){nu(o,l,f)}),Iv=ea(function(o,l,f,v){nu(o,l,f,v)}),h1=Ur(function(o,l){var f={};if(o==null)return f;var v=!1;l=Xt(l,function(R){return R=ps(R,o),v||(v=R.length>1),R}),vr(o,Xf(o),f),v&&(f=Ui(f,p|_|g,sb));for(var S=l.length;S--;)Ff(f,l[S]);return f});function f1(o,l){return Lv(o,gu(Ve(l)))}var d1=Ur(function(o,l){return o==null?{}:zw(o,l)});function Lv(o,l){if(o==null)return{};var f=Xt(Xf(o),function(v){return[v]});return l=Ve(l),Mg(o,f,function(v,S){return l(v,S[0])})}function p1(o,l,f){l=ps(l,o);var v=-1,S=l.length;for(S||(S=1,o=t);++v<S;){var R=o==null?t:o[xr(l[v])];R===t&&(v=S,R=f),o=Br(R)?R.call(o):R}return o}function _1(o,l,f){return o==null?o:Tl(o,l,f)}function m1(o,l,f,v){return v=typeof v=="function"?v:t,o==null?o:Tl(o,l,f,v)}var Dv=Xg(vn),Nv=Xg(Qn);function g1(o,l,f){var v=Qe(o),S=v||ms(o)||ia(o);if(l=Ve(l,4),f==null){var R=o&&o.constructor;S?f=v?new R:[]:Kt(o)?f=Br(R)?Jo(Xc(o)):{}:f={}}return(S?Di:gr)(o,function(U,z,X){return l(f,U,z,X)}),f}function v1(o,l){return o==null?!0:Ff(o,l)}function x1(o,l,f){return o==null?o:Cg(o,l,zf(f))}function y1(o,l,f,v){return v=typeof v=="function"?v:t,o==null?o:Cg(o,l,zf(f),v)}function ra(o){return o==null?[]:vf(o,vn(o))}function E1(o){return o==null?[]:vf(o,Qn(o))}function S1(o,l,f){return f===t&&(f=l,l=t),f!==t&&(f=ki(f),f=f===f?f:0),l!==t&&(l=ki(l),l=l===l?l:0),Js(ki(o),l,f)}function M1(o,l,f){return l=kr(l),f===t?(f=l,l=0):f=kr(f),o=ki(o),Rw(o,l,f)}function T1(o,l,f){if(f&&typeof f!="boolean"&&Wn(o,l,f)&&(l=f=t),f===t&&(typeof l=="boolean"?(f=l,l=t):typeof o=="boolean"&&(f=o,o=t)),o===t&&l===t?(o=0,l=1):(o=kr(o),l===t?(l=o,o=0):l=kr(l)),o>l){var v=o;o=l,l=v}if(f||o%1||l%1){var S=rg();return Dn(o+S*(l-o+nT("1e-"+((S+"").length-1))),l)}return Nf(o,l)}var w1=ta(function(o,l,f){return l=l.toLowerCase(),o+(f?Ov(l):l)});function Ov(o){return ad(bt(o).toLowerCase())}function Uv(o){return o=bt(o),o&&o.replace(wt,_T).replace(qM,"")}function b1(o,l,f){o=bt(o),l=di(l);var v=o.length;f=f===t?v:Js(nt(f),0,v);var S=f;return f-=l.length,f>=0&&o.slice(f,S)==l}function A1(o){return o=bt(o),o&&Rt.test(o)?o.replace(Le,mT):o}function C1(o){return o=bt(o),o&&Dc.test(o)?o.replace(as,"\\$&"):o}var R1=ta(function(o,l,f){return o+(f?"-":"")+l.toLowerCase()}),P1=ta(function(o,l,f){return o+(f?" ":"")+l.toLowerCase()}),I1=kg("toLowerCase");function L1(o,l,f){o=bt(o),l=nt(l);var v=l?$o(o):0;if(!l||v>=l)return o;var S=(l-v)/2;return lu(Kc(S),f)+o+lu($c(S),f)}function D1(o,l,f){o=bt(o),l=nt(l);var v=l?$o(o):0;return l&&v<l?o+lu(l-v,f):o}function N1(o,l,f){o=bt(o),l=nt(l);var v=l?$o(o):0;return l&&v<l?lu(l-v,f)+o:o}function O1(o,l,f){return f||l==null?l=0:l&&(l=+l),GT(bt(o).replace(cl,""),l||0)}function U1(o,l,f){return(f?Wn(o,l,f):l===t)?l=1:l=nt(l),Of(bt(o),l)}function F1(){var o=arguments,l=bt(o[0]);return o.length<3?l:l.replace(o[1],o[2])}var B1=ta(function(o,l,f){return o+(f?"_":"")+l.toLowerCase()});function k1(o,l,f){return f&&typeof f!="number"&&Wn(o,l,f)&&(l=f=t),f=f===t?Ie:f>>>0,f?(o=bt(o),o&&(typeof l=="string"||l!=null&&!rd(l))&&(l=di(l),!l&&Yo(o))?_s(er(o),0,f):o.split(l,f)):[]}var z1=ta(function(o,l,f){return o+(f?" ":"")+ad(l)});function H1(o,l,f){return o=bt(o),f=f==null?0:Js(nt(f),0,o.length),l=di(l),o.slice(f,f+l.length)==l}function G1(o,l,f){var v=A.templateSettings;f&&Wn(o,l,f)&&(l=t),o=bt(o),l=yu({},l,v,qg);var S=yu({},l.imports,v.imports,qg),R=vn(S),U=vf(S,R),z,X,de=0,pe=l.interpolate||an,me="__p += '",Ae=yf((l.escape||an).source+"|"+pe.source+"|"+(pe===Ji?He:an).source+"|"+(l.evaluate||an).source+"|$","g"),Be="//# sourceURL="+(It.call(l,"sourceURL")?(l.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++ZM+"]")+`
`;o.replace(Ae,function(qe,pt,gt,_i,Vn,mi){return gt||(gt=_i),me+=o.slice(de,mi).replace(ui,gT),pt&&(z=!0,me+=`' +
__e(`+pt+`) +
'`),Vn&&(X=!0,me+=`';
`+Vn+`;
__p += '`),gt&&(me+=`' +
((__t = (`+gt+`)) == null ? '' : __t) +
'`),de=mi+qe.length,qe}),me+=`';
`;var Xe=It.call(l,"variable")&&l.variable;if(!Xe)me=`with (obj) {
`+me+`
}
`;else if(q.test(Xe))throw new Ze(c);me=(X?me.replace(Yt,""):me).replace(G,"$1").replace(se,"$1;"),me="function("+(Xe||"obj")+`) {
`+(Xe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(z?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+me+`return __p
}`;var it=Bv(function(){return Mt(R,Be+"return "+me).apply(t,U)});if(it.source=me,id(it))throw it;return it}function W1(o){return bt(o).toLowerCase()}function V1(o){return bt(o).toUpperCase()}function X1(o,l,f){if(o=bt(o),o&&(f||l===t))return Ym(o);if(!o||!(l=di(l)))return o;var v=er(o),S=er(l),R=$m(v,S),U=Km(v,S)+1;return _s(v,R,U).join("")}function q1(o,l,f){if(o=bt(o),o&&(f||l===t))return o.slice(0,Zm(o)+1);if(!o||!(l=di(l)))return o;var v=er(o),S=Km(v,er(l))+1;return _s(v,0,S).join("")}function Y1(o,l,f){if(o=bt(o),o&&(f||l===t))return o.replace(cl,"");if(!o||!(l=di(l)))return o;var v=er(o),S=$m(v,er(l));return _s(v,S).join("")}function $1(o,l){var f=L,v=Q;if(Kt(l)){var S="separator"in l?l.separator:S;f="length"in l?nt(l.length):f,v="omission"in l?di(l.omission):v}o=bt(o);var R=o.length;if(Yo(o)){var U=er(o);R=U.length}if(f>=R)return o;var z=f-$o(v);if(z<1)return v;var X=U?_s(U,0,z).join(""):o.slice(0,z);if(S===t)return X+v;if(U&&(z+=X.length-z),rd(S)){if(o.slice(z).search(S)){var de,pe=X;for(S.global||(S=yf(S.source,bt(We.exec(S))+"g")),S.lastIndex=0;de=S.exec(pe);)var me=de.index;X=X.slice(0,me===t?z:me)}}else if(o.indexOf(di(S),z)!=z){var Ae=X.lastIndexOf(S);Ae>-1&&(X=X.slice(0,Ae))}return X+v}function K1(o){return o=bt(o),o&&ke.test(o)?o.replace(xe,TT):o}var j1=ta(function(o,l,f){return o+(f?" ":"")+l.toUpperCase()}),ad=kg("toUpperCase");function Fv(o,l,f){return o=bt(o),l=f?t:l,l===t?xT(o)?AT(o):uT(o):o.match(l)||[]}var Bv=lt(function(o,l){try{return hi(o,t,l)}catch(f){return id(f)?f:new Ze(f)}}),Z1=Ur(function(o,l){return Di(l,function(f){f=xr(f),Nr(o,f,td(o[f],o))}),o});function Q1(o){var l=o==null?0:o.length,f=Ve();return o=l?Xt(o,function(v){if(typeof v[1]!="function")throw new Ni(a);return[f(v[0]),v[1]]}):[],lt(function(v){for(var S=-1;++S<l;){var R=o[S];if(hi(R[0],this,v))return hi(R[1],this,v)}})}function J1(o){return Tw(Ui(o,p))}function ld(o){return function(){return o}}function eR(o,l){return o==null||o!==o?l:o}var tR=Hg(),nR=Hg(!0);function Jn(o){return o}function cd(o){return gg(typeof o=="function"?o:Ui(o,p))}function iR(o){return xg(Ui(o,p))}function rR(o,l){return yg(o,Ui(l,p))}var sR=lt(function(o,l){return function(f){return Sl(f,o,l)}}),oR=lt(function(o,l){return function(f){return Sl(o,f,l)}});function ud(o,l,f){var v=vn(l),S=tu(l,v);f==null&&!(Kt(l)&&(S.length||!v.length))&&(f=l,l=o,o=this,S=tu(l,vn(l)));var R=!(Kt(f)&&"chain"in f)||!!f.chain,U=Br(o);return Di(S,function(z){var X=l[z];o[z]=X,U&&(o.prototype[z]=function(){var de=this.__chain__;if(R||de){var pe=o(this.__wrapped__),me=pe.__actions__=jn(this.__actions__);return me.push({func:X,args:arguments,thisArg:o}),pe.__chain__=de,pe}return X.apply(o,cs([this.value()],arguments))})}),o}function aR(){return Cn._===this&&(Cn._=DT),this}function hd(){}function lR(o){return o=nt(o),lt(function(l){return Eg(l,o)})}var cR=Gf(Xt),uR=Gf(Gm),hR=Gf(df);function kv(o){return Kf(o)?pf(xr(o)):Hw(o)}function fR(o){return function(l){return o==null?t:eo(o,l)}}var dR=Wg(),pR=Wg(!0);function fd(){return[]}function dd(){return!1}function _R(){return{}}function mR(){return""}function gR(){return!0}function vR(o,l){if(o=nt(o),o<1||o>ne)return[];var f=Ie,v=Dn(o,Ie);l=Ve(l),o-=Ie;for(var S=gf(v,l);++f<o;)l(f);return S}function xR(o){return Qe(o)?Xt(o,xr):pi(o)?[o]:jn(sv(bt(o)))}function yR(o){var l=++IT;return bt(o)+l}var ER=au(function(o,l){return o+l},0),SR=Wf("ceil"),MR=au(function(o,l){return o/l},1),TR=Wf("floor");function wR(o){return o&&o.length?eu(o,Jn,Cf):t}function bR(o,l){return o&&o.length?eu(o,Ve(l,2),Cf):t}function AR(o){return Xm(o,Jn)}function CR(o,l){return Xm(o,Ve(l,2))}function RR(o){return o&&o.length?eu(o,Jn,Lf):t}function PR(o,l){return o&&o.length?eu(o,Ve(l,2),Lf):t}var IR=au(function(o,l){return o*l},1),LR=Wf("round"),DR=au(function(o,l){return o-l},0);function NR(o){return o&&o.length?mf(o,Jn):0}function OR(o,l){return o&&o.length?mf(o,Ve(l,2)):0}return A.after=iC,A.ary=mv,A.assign=VC,A.assignIn=Pv,A.assignInWith=yu,A.assignWith=XC,A.at=qC,A.before=gv,A.bind=td,A.bindAll=Z1,A.bindKey=vv,A.castArray=_C,A.chain=dv,A.chunk=Tb,A.compact=wb,A.concat=bb,A.cond=Q1,A.conforms=J1,A.constant=ld,A.countBy=NA,A.create=YC,A.curry=xv,A.curryRight=yv,A.debounce=Ev,A.defaults=$C,A.defaultsDeep=KC,A.defer=rC,A.delay=sC,A.difference=Ab,A.differenceBy=Cb,A.differenceWith=Rb,A.drop=Pb,A.dropRight=Ib,A.dropRightWhile=Lb,A.dropWhile=Db,A.fill=Nb,A.filter=UA,A.flatMap=kA,A.flatMapDeep=zA,A.flatMapDepth=HA,A.flatten=cv,A.flattenDeep=Ob,A.flattenDepth=Ub,A.flip=oC,A.flow=tR,A.flowRight=nR,A.fromPairs=Fb,A.functions=n1,A.functionsIn=i1,A.groupBy=GA,A.initial=kb,A.intersection=zb,A.intersectionBy=Hb,A.intersectionWith=Gb,A.invert=s1,A.invertBy=o1,A.invokeMap=VA,A.iteratee=cd,A.keyBy=XA,A.keys=vn,A.keysIn=Qn,A.map=pu,A.mapKeys=l1,A.mapValues=c1,A.matches=iR,A.matchesProperty=rR,A.memoize=mu,A.merge=u1,A.mergeWith=Iv,A.method=sR,A.methodOf=oR,A.mixin=ud,A.negate=gu,A.nthArg=lR,A.omit=h1,A.omitBy=f1,A.once=aC,A.orderBy=qA,A.over=cR,A.overArgs=lC,A.overEvery=uR,A.overSome=hR,A.partial=nd,A.partialRight=Sv,A.partition=YA,A.pick=d1,A.pickBy=Lv,A.property=kv,A.propertyOf=fR,A.pull=qb,A.pullAll=hv,A.pullAllBy=Yb,A.pullAllWith=$b,A.pullAt=Kb,A.range=dR,A.rangeRight=pR,A.rearg=cC,A.reject=jA,A.remove=jb,A.rest=uC,A.reverse=Jf,A.sampleSize=QA,A.set=_1,A.setWith=m1,A.shuffle=JA,A.slice=Zb,A.sortBy=nC,A.sortedUniq=rA,A.sortedUniqBy=sA,A.split=k1,A.spread=hC,A.tail=oA,A.take=aA,A.takeRight=lA,A.takeRightWhile=cA,A.takeWhile=uA,A.tap=wA,A.throttle=fC,A.thru=du,A.toArray=Av,A.toPairs=Dv,A.toPairsIn=Nv,A.toPath=xR,A.toPlainObject=Rv,A.transform=g1,A.unary=dC,A.union=hA,A.unionBy=fA,A.unionWith=dA,A.uniq=pA,A.uniqBy=_A,A.uniqWith=mA,A.unset=v1,A.unzip=ed,A.unzipWith=fv,A.update=x1,A.updateWith=y1,A.values=ra,A.valuesIn=E1,A.without=gA,A.words=Fv,A.wrap=pC,A.xor=vA,A.xorBy=xA,A.xorWith=yA,A.zip=EA,A.zipObject=SA,A.zipObjectDeep=MA,A.zipWith=TA,A.entries=Dv,A.entriesIn=Nv,A.extend=Pv,A.extendWith=yu,ud(A,A),A.add=ER,A.attempt=Bv,A.camelCase=w1,A.capitalize=Ov,A.ceil=SR,A.clamp=S1,A.clone=mC,A.cloneDeep=vC,A.cloneDeepWith=xC,A.cloneWith=gC,A.conformsTo=yC,A.deburr=Uv,A.defaultTo=eR,A.divide=MR,A.endsWith=b1,A.eq=nr,A.escape=A1,A.escapeRegExp=C1,A.every=OA,A.find=FA,A.findIndex=av,A.findKey=jC,A.findLast=BA,A.findLastIndex=lv,A.findLastKey=ZC,A.floor=TR,A.forEach=pv,A.forEachRight=_v,A.forIn=QC,A.forInRight=JC,A.forOwn=e1,A.forOwnRight=t1,A.get=sd,A.gt=EC,A.gte=SC,A.has=r1,A.hasIn=od,A.head=uv,A.identity=Jn,A.includes=WA,A.indexOf=Bb,A.inRange=M1,A.invoke=a1,A.isArguments=io,A.isArray=Qe,A.isArrayBuffer=MC,A.isArrayLike=Zn,A.isArrayLikeObject=rn,A.isBoolean=TC,A.isBuffer=ms,A.isDate=wC,A.isElement=bC,A.isEmpty=AC,A.isEqual=CC,A.isEqualWith=RC,A.isError=id,A.isFinite=PC,A.isFunction=Br,A.isInteger=Mv,A.isLength=vu,A.isMap=Tv,A.isMatch=IC,A.isMatchWith=LC,A.isNaN=DC,A.isNative=NC,A.isNil=UC,A.isNull=OC,A.isNumber=wv,A.isObject=Kt,A.isObjectLike=en,A.isPlainObject=Cl,A.isRegExp=rd,A.isSafeInteger=FC,A.isSet=bv,A.isString=xu,A.isSymbol=pi,A.isTypedArray=ia,A.isUndefined=BC,A.isWeakMap=kC,A.isWeakSet=zC,A.join=Wb,A.kebabCase=R1,A.last=Bi,A.lastIndexOf=Vb,A.lowerCase=P1,A.lowerFirst=I1,A.lt=HC,A.lte=GC,A.max=wR,A.maxBy=bR,A.mean=AR,A.meanBy=CR,A.min=RR,A.minBy=PR,A.stubArray=fd,A.stubFalse=dd,A.stubObject=_R,A.stubString=mR,A.stubTrue=gR,A.multiply=IR,A.nth=Xb,A.noConflict=aR,A.noop=hd,A.now=_u,A.pad=L1,A.padEnd=D1,A.padStart=N1,A.parseInt=O1,A.random=T1,A.reduce=$A,A.reduceRight=KA,A.repeat=U1,A.replace=F1,A.result=p1,A.round=LR,A.runInContext=V,A.sample=ZA,A.size=eC,A.snakeCase=B1,A.some=tC,A.sortedIndex=Qb,A.sortedIndexBy=Jb,A.sortedIndexOf=eA,A.sortedLastIndex=tA,A.sortedLastIndexBy=nA,A.sortedLastIndexOf=iA,A.startCase=z1,A.startsWith=H1,A.subtract=DR,A.sum=NR,A.sumBy=OR,A.template=G1,A.times=vR,A.toFinite=kr,A.toInteger=nt,A.toLength=Cv,A.toLower=W1,A.toNumber=ki,A.toSafeInteger=WC,A.toString=bt,A.toUpper=V1,A.trim=X1,A.trimEnd=q1,A.trimStart=Y1,A.truncate=$1,A.unescape=K1,A.uniqueId=yR,A.upperCase=j1,A.upperFirst=ad,A.each=pv,A.eachRight=_v,A.first=uv,ud(A,function(){var o={};return gr(A,function(l,f){It.call(A.prototype,f)||(o[f]=l)}),o}(),{chain:!1}),A.VERSION=n,Di(["bind","bindKey","curry","curryRight","partial","partialRight"],function(o){A[o].placeholder=A}),Di(["drop","take"],function(o,l){mt.prototype[o]=function(f){f=f===t?1:hn(nt(f),0);var v=this.__filtered__&&!l?new mt(this):this.clone();return v.__filtered__?v.__takeCount__=Dn(f,v.__takeCount__):v.__views__.push({size:Dn(f,Ie),type:o+(v.__dir__<0?"Right":"")}),v},mt.prototype[o+"Right"]=function(f){return this.reverse()[o](f).reverse()}}),Di(["filter","map","takeWhile"],function(o,l){var f=l+1,v=f==$||f==le;mt.prototype[o]=function(S){var R=this.clone();return R.__iteratees__.push({iteratee:Ve(S,3),type:f}),R.__filtered__=R.__filtered__||v,R}}),Di(["head","last"],function(o,l){var f="take"+(l?"Right":"");mt.prototype[o]=function(){return this[f](1).value()[0]}}),Di(["initial","tail"],function(o,l){var f="drop"+(l?"":"Right");mt.prototype[o]=function(){return this.__filtered__?new mt(this):this[f](1)}}),mt.prototype.compact=function(){return this.filter(Jn)},mt.prototype.find=function(o){return this.filter(o).head()},mt.prototype.findLast=function(o){return this.reverse().find(o)},mt.prototype.invokeMap=lt(function(o,l){return typeof o=="function"?new mt(this):this.map(function(f){return Sl(f,o,l)})}),mt.prototype.reject=function(o){return this.filter(gu(Ve(o)))},mt.prototype.slice=function(o,l){o=nt(o);var f=this;return f.__filtered__&&(o>0||l<0)?new mt(f):(o<0?f=f.takeRight(-o):o&&(f=f.drop(o)),l!==t&&(l=nt(l),f=l<0?f.dropRight(-l):f.take(l-o)),f)},mt.prototype.takeRightWhile=function(o){return this.reverse().takeWhile(o).reverse()},mt.prototype.toArray=function(){return this.take(Ie)},gr(mt.prototype,function(o,l){var f=/^(?:filter|find|map|reject)|While$/.test(l),v=/^(?:head|last)$/.test(l),S=A[v?"take"+(l=="last"?"Right":""):l],R=v||/^find/.test(l);S&&(A.prototype[l]=function(){var U=this.__wrapped__,z=v?[1]:arguments,X=U instanceof mt,de=z[0],pe=X||Qe(U),me=function(pt){var gt=S.apply(A,cs([pt],z));return v&&Ae?gt[0]:gt};pe&&f&&typeof de=="function"&&de.length!=1&&(X=pe=!1);var Ae=this.__chain__,Be=!!this.__actions__.length,Xe=R&&!Ae,it=X&&!Be;if(!R&&pe){U=it?U:new mt(this);var qe=o.apply(U,z);return qe.__actions__.push({func:du,args:[me],thisArg:t}),new Oi(qe,Ae)}return Xe&&it?o.apply(this,z):(qe=this.thru(me),Xe?v?qe.value()[0]:qe.value():qe)})}),Di(["pop","push","shift","sort","splice","unshift"],function(o){var l=kc[o],f=/^(?:push|sort|unshift)$/.test(o)?"tap":"thru",v=/^(?:pop|shift)$/.test(o);A.prototype[o]=function(){var S=arguments;if(v&&!this.__chain__){var R=this.value();return l.apply(Qe(R)?R:[],S)}return this[f](function(U){return l.apply(Qe(U)?U:[],S)})}}),gr(mt.prototype,function(o,l){var f=A[l];if(f){var v=f.name+"";It.call(Qo,v)||(Qo[v]=[]),Qo[v].push({name:l,func:f})}}),Qo[ou(t,m).name]=[{name:"wrapper",func:t}],mt.prototype.clone=KT,mt.prototype.reverse=jT,mt.prototype.value=ZT,A.prototype.at=bA,A.prototype.chain=AA,A.prototype.commit=CA,A.prototype.next=RA,A.prototype.plant=IA,A.prototype.reverse=LA,A.prototype.toJSON=A.prototype.valueOf=A.prototype.value=DA,A.prototype.first=A.prototype.head,_l&&(A.prototype[_l]=PA),A},Ko=CT();Ks?((Ks.exports=Ko)._=Ko,cf._=Ko):Cn._=Ko}).call(kl)})(Mh,Mh.exports);var Vz=Mh.exports;const Ys=[new Fl,new Fl,new Fl,new Fl,new Fl],Xz=[new Aa(10,64,64),new Aa(10,64,64),new Aa(10,64,64),new Aa(10,64,64),new im(17.423)],qz=[new Xu({color:"#c8bcaf",roughness:.5}),new Xu({color:"#a25f30",roughness:.5}),new Xu({color:"#a25f30",roughness:.5}),new Xu({color:"#c8bcaf",roughness:.5}),new bk({color:12092939})],Th=[];for(let i=0;i<5;i++){const e=new Qr(Xz[i],qz[i]);Ys[i].add(e),Th.push(e)}for(let i=0;i<5;i++){const e=new DS(16777215,1,100);e.position.set(30,30,120),e.intensity=1.5,Ys[i].add(e)}const Yz=new Rk(16777215,.5);Ys[4].add(Yz);const NM=new DS(16777215,1);NM.position.set(0,1,0);Ys[4].add(NM);const wh=[{width:window.innerWidth,height:window.innerHeight},{width:window.innerWidth,height:window.innerHeight},{width:window.innerWidth,height:window.innerHeight},{width:window.innerWidth,height:window.innerHeight},{width:window.innerWidth,height:window.innerHeight}],Fo=[];for(let i=0;i<5;i++){const e=new Vi(i===4?75:60,wh[i].width/wh[i].height,.1,1e3);e.position.z=40,Ys[i].add(e),Fo.push(e)}const vc=[],Em=[document.getElementById("canvas1"),document.getElementById("canvas2"),document.getElementById("canvas3"),document.getElementById("canvas4"),document.getElementById("canvas5")];function $z(i,e,t,n){const r=new IS({canvas:t,antialias:!0,alpha:!0});return r.setPixelRatio(window.devicePixelRatio),r.setSize(n.width,n.height),r.render(i,e),r}for(let i=0;i<5;i++){const e=$z(Ys[i],Fo[i],Em[i],wh[i]);vc.push(e)}const Jr=new Wz(Fo[4],Em[4]);Jr.enablePan=!1;Jr.enableZoom=!1;Jr.autoRotate=!0;Jr.autoRotateSpeed=5;window.innerWidth>=915?(Jr.enableDamping=!0,Jr.enablePan=!0):(Jr.enableRotate=!1,Jr.enablePan=!0);window.innerWidth<=915&&Em[4].addEventListener("touchstart",i=>{i.stopPropagation()});const Kz=Vz.throttle(()=>{wh.forEach((i,e)=>{i.width=window.innerWidth,i.height=window.innerHeight,Fo[e].aspect=i.width/i.height,Fo[e].updateProjectionMatrix(),vc[e].setSize(i.width,i.height),vc[e].setPixelRatio(window.devicePixelRatio)})},200);window.addEventListener("resize",Kz);const OM=()=>{Jr.update();for(let i=0;i<5;i++)vc[i].render(Ys[i],Fo[i]);window.requestAnimationFrame(OM)};OM();const dp=DM.timeline({defaults:{duration:1}});window.innerWidth>500&&(Th.forEach(i=>{dp.fromTo(i.scale,{z:0,x:0,y:0},{z:1,x:1,y:1})}),dp.fromTo(".navbar",{y:"-100%"},{y:"0%"}),dp.fromTo(".heading",{opacity:0},{opacity:1}));function UM(){requestAnimationFrame(UM),Th[4].rotation.x+=.01,Th[4].rotation.y+=.01,vc[4].render(Ys[4],Fo[4])}UM();
