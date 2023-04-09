import{Q as Pr,R as An,S as Rn,U as er,V as tr,W as rr,X as On,Y as ht,Z as fe,$ as Nt,a0 as Pn,a1 as Nr,a2 as Nn,a3 as Cn,a4 as Ln,a5 as Ct,a6 as V,a7 as Dn,a8 as Fe,a9 as Ve,aa as Mn,ab as He,ac as Un,ad as xn,ae as Fn,af as me,C as ie,v as Vn,m as ce,j as M,O as Wn,r as qn,T as Bn,L as nr}from"./index-131161ad.js";function Lt(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,n=Object.getOwnPropertySymbols(t);i<n.length;i++)e.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(t,n[i])&&(r[n[i]]=t[n[i]]);return r}function Cr(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Hn=Cr,Lr=new Nt("auth","Firebase",Cr());/**
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
 */const ir=new Mn("@firebase/auth");function Ze(t,...e){ir.logLevel<=Dn.ERROR&&ir.error(`Auth (${ht}): ${t}`,...e)}/**
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
 */function j(t,...e){throw Dt(t,...e)}function G(t,...e){return Dt(t,...e)}function Dr(t,e,r){const n=Object.assign(Object.assign({},Hn()),{[e]:r});return new Nt("auth","Firebase",n).create(e,{appName:t.name})}function jn(t,e,r){const n=r;if(!(e instanceof n))throw n.name!==e.constructor.name&&j(t,"argument-error"),Dr(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dt(t,...e){if(typeof t!="string"){const r=e[0],n=[...e.slice(1)];return n[0]&&(n[0].appName=t.name),t._errorFactory.create(r,...n)}return Lr.create(t,...e)}function v(t,e,...r){if(!t)throw Dt(e,...r)}function te(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ze(e),new Error(e)}function ne(t,e){t||te(e)}/**
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
 */const sr=new Map;function re(t){ne(t instanceof Function,"Expected a class definition");let e=sr.get(t);return e?(ne(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,sr.set(t,e),e)}/**
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
 */function $n(t,e){const r=Nr(t,"auth");if(r.isInitialized()){const i=r.getImmediate(),s=r.getOptions();if(Ln(s,e??{}))return i;j(i,"already-initialized")}return r.initialize({options:e})}function zn(t,e){const r=(e==null?void 0:e.persistence)||[],n=(Array.isArray(r)?r:[r]).map(re);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(n,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function Rt(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Kn(){return or()==="http:"||or()==="https:"}function or(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function Gn(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Kn()||On()||"connection"in navigator)?navigator.onLine:!0}function Jn(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class je{constructor(e,r){this.shortDelay=e,this.longDelay=r,ne(r>e,"Short delay should be less than long delay!"),this.isMobile=An()||Rn()}get(){return Gn()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Mt(t,e){ne(t.emulator,"Emulator should always be set here");const{url:r}=t.emulator;return e?`${r}${e.startsWith("/")?e.slice(1):e}`:r}/**
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
 */class Mr{static initialize(e,r,n){this.fetchImpl=e,r&&(this.headersImpl=r),n&&(this.responseImpl=n)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;te("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;te("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;te("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const Yn={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Xn=new je(3e4,6e4);function $e(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Ne(t,e,r,n,i={}){return Ur(t,i,async()=>{let s={},o={};n&&(e==="GET"?o=n:s={body:JSON.stringify(n)});const d=He(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Mr.fetch()(xr(t,t.config.apiHost,r,d),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Ur(t,e,r){t._canInitEmulator=!1;const n=Object.assign(Object.assign({},Yn),e);try{const i=new Qn(t),s=await Promise.race([r(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xe(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const d=s.ok?o.errorMessage:o.error.message,[u,m]=d.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xe(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Xe(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw Xe(t,"user-disabled",o);const k=n[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(m)throw Dr(t,k,m);j(t,k)}}catch(i){if(i instanceof Ct)throw i;j(t,"internal-error",{message:String(i)})}}async function ze(t,e,r,n,i={}){const s=await Ne(t,e,r,n,i);return"mfaPendingCredential"in s&&j(t,"multi-factor-auth-required",{_serverResponse:s}),s}function xr(t,e,r,n){const i=`${e}${r}?${n}`;return t.config.emulator?Mt(t.config,i):`${t.config.apiScheme}://${i}`}class Qn{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((r,n)=>{this.timer=setTimeout(()=>n(G(this.auth,"network-request-failed")),Xn.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xe(t,e,r){const n={appName:t.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);const i=G(t,e,n);return i.customData._tokenResponse=r,i}/**
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
 */async function Zn(t,e){return Ne(t,"POST","/v1/accounts:delete",e)}async function ei(t,e){return Ne(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function We(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ti(t,e=!1){const r=fe(t),n=await r.getIdToken(e),i=Ut(n);v(i&&i.exp&&i.auth_time&&i.iat,r.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:n,authTime:We(It(i.auth_time)),issuedAtTime:We(It(i.iat)),expirationTime:We(It(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function It(t){return Number(t)*1e3}function Ut(t){const[e,r,n]=t.split(".");if(e===void 0||r===void 0||n===void 0)return Ze("JWT malformed, contained fewer than 3 sections"),null;try{const i=Un(r);return i?JSON.parse(i):(Ze("Failed to decode base64 JWT payload"),null)}catch(i){return Ze("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ri(t){const e=Ut(t);return v(e,"internal-error"),v(typeof e.exp<"u","internal-error"),v(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Pe(t,e,r=!1){if(r)return e;try{return await e}catch(n){throw n instanceof Ct&&ni(n)&&t.auth.currentUser===t&&await t.auth.signOut(),n}}function ni({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class ii{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var r;if(e){const n=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),n}else{this.errorBackoff=3e4;const i=((r=this.user.stsTokenManager.expirationTime)!==null&&r!==void 0?r:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const r=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},r)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Fr{constructor(e,r){this.createdAt=e,this.lastLoginAt=r,this._initializeTime()}_initializeTime(){this.lastSignInTime=We(this.lastLoginAt),this.creationTime=We(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function it(t){var e;const r=t.auth,n=await t.getIdToken(),i=await Pe(t,ei(r,{idToken:n}));v(i==null?void 0:i.users.length,r,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?ai(s.providerUserInfo):[],d=oi(t.providerData,o),u=t.isAnonymous,m=!(t.email&&s.passwordHash)&&!(d!=null&&d.length),k=u?m:!1,w={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:d,metadata:new Fr(s.createdAt,s.lastLoginAt),isAnonymous:k};Object.assign(t,w)}async function si(t){const e=fe(t);await it(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function oi(t,e){return[...t.filter(n=>!e.some(i=>i.providerId===n.providerId)),...e]}function ai(t){return t.map(e=>{var{providerId:r}=e,n=Lt(e,["providerId"]);return{providerId:r,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}/**
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
 */async function ci(t,e){const r=await Ur(t,{},async()=>{const n=He({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=xr(t,i,"/v1/token",`key=${s}`),d=await t._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",Mr.fetch()(o,{method:"POST",headers:d,body:n})});return{accessToken:r.access_token,expiresIn:r.expires_in,refreshToken:r.refresh_token}}/**
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
 */class qe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v(typeof e.idToken<"u","internal-error"),v(typeof e.refreshToken<"u","internal-error");const r="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ri(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,r)}async getToken(e,r=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),!r&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,r){const{accessToken:n,refreshToken:i,expiresIn:s}=await ci(e,r);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(e,r,n){this.refreshToken=r||null,this.accessToken=e||null,this.expirationTime=Date.now()+n*1e3}static fromJSON(e,r){const{refreshToken:n,accessToken:i,expirationTime:s}=r,o=new qe;return n&&(v(typeof n=="string","internal-error",{appName:e}),o.refreshToken=n),i&&(v(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(v(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qe,this.toJSON())}_performRefresh(){return te("not implemented")}}/**
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
 */function ae(t,e){v(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class ye{constructor(e){var{uid:r,auth:n,stsTokenManager:i}=e,s=Lt(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ii(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=r,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Fr(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const r=await Pe(this,this.stsTokenManager.getToken(this.auth,e));return v(r,this.auth,"internal-error"),this.accessToken!==r&&(this.accessToken=r,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),r}getIdTokenResult(e){return ti(this,e)}reload(){return si(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(r=>Object.assign({},r)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const r=new ye(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return r.metadata._copy(this.metadata),r}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,r=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),r&&await it(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Pe(this,Zn(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,r){var n,i,s,o,d,u,m,k;const w=(n=r.displayName)!==null&&n!==void 0?n:void 0,y=(i=r.email)!==null&&i!==void 0?i:void 0,W=(s=r.phoneNumber)!==null&&s!==void 0?s:void 0,C=(o=r.photoURL)!==null&&o!==void 0?o:void 0,Te=(d=r.tenantId)!==null&&d!==void 0?d:void 0,se=(u=r._redirectEventId)!==null&&u!==void 0?u:void 0,ke=(m=r.createdAt)!==null&&m!==void 0?m:void 0,I=(k=r.lastLoginAt)!==null&&k!==void 0?k:void 0,{uid:D,emailVerified:q,isAnonymous:A,providerData:Y,stsTokenManager:oe}=r;v(D&&oe,e,"internal-error");const De=qe.fromJSON(this.name,oe);v(typeof D=="string",e,"internal-error"),ae(w,e.name),ae(y,e.name),v(typeof q=="boolean",e,"internal-error"),v(typeof A=="boolean",e,"internal-error"),ae(W,e.name),ae(C,e.name),ae(Te,e.name),ae(se,e.name),ae(ke,e.name),ae(I,e.name);const x=new ye({uid:D,auth:e,email:y,emailVerified:q,displayName:w,isAnonymous:A,photoURL:C,phoneNumber:W,tenantId:Te,stsTokenManager:De,createdAt:ke,lastLoginAt:I});return Y&&Array.isArray(Y)&&(x.providerData=Y.map(X=>Object.assign({},X))),se&&(x._redirectEventId=se),x}static async _fromIdTokenResponse(e,r,n=!1){const i=new qe;i.updateFromServerResponse(r);const s=new ye({uid:r.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await it(s),s}}/**
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
 */class Vr{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,r){this.storage[e]=r}async _get(e){const r=this.storage[e];return r===void 0?null:r}async _remove(e){delete this.storage[e]}_addListener(e,r){}_removeListener(e,r){}}Vr.type="NONE";const ar=Vr;/**
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
 */function et(t,e,r){return`firebase:${t}:${e}:${r}`}class Ae{constructor(e,r,n){this.persistence=e,this.auth=r,this.userKey=n;const{config:i,name:s}=this.auth;this.fullUserKey=et(this.userKey,i.apiKey,s),this.fullPersistenceKey=et("persistence",i.apiKey,s),this.boundEventHandler=r._onStorageEvent.bind(r),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ye._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const r=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,r)return this.setCurrentUser(r)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,r,n="authUser"){if(!r.length)return new Ae(re(ar),e,n);const i=(await Promise.all(r.map(async m=>{if(await m._isAvailable())return m}))).filter(m=>m);let s=i[0]||re(ar);const o=et(n,e.config.apiKey,e.name);let d=null;for(const m of r)try{const k=await m._get(o);if(k){const w=ye._fromJSON(e,k);m!==s&&(d=w),s=m;break}}catch{}const u=i.filter(m=>m._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ae(s,e,n):(s=u[0],d&&await s._set(o,d.toJSON()),await Promise.all(r.map(async m=>{if(m!==s)try{await m._remove(o)}catch{}})),new Ae(s,e,n))}}/**
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
 */function cr(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Br(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Wr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jr(e))return"Blackberry";if($r(e))return"Webos";if(xt(e))return"Safari";if((e.includes("chrome/")||qr(e))&&!e.includes("edge/"))return"Chrome";if(Hr(e))return"Android";{const r=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(r);if((n==null?void 0:n.length)===2)return n[1]}return"Other"}function Wr(t=V()){return/firefox\//i.test(t)}function xt(t=V()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function qr(t=V()){return/crios\//i.test(t)}function Br(t=V()){return/iemobile/i.test(t)}function Hr(t=V()){return/android/i.test(t)}function jr(t=V()){return/blackberry/i.test(t)}function $r(t=V()){return/webos/i.test(t)}function ft(t=V()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function li(t=V()){var e;return ft(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ui(){return xn()&&document.documentMode===10}function zr(t=V()){return ft(t)||Hr(t)||$r(t)||jr(t)||/windows phone/i.test(t)||Br(t)}function di(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function Kr(t,e=[]){let r;switch(t){case"Browser":r=cr(V());break;case"Worker":r=`${cr(V())}-${t}`;break;default:r=t}const n=e.length?e.join(","):"FirebaseCore-web";return`${r}/JsCore/${ht}/${n}`}/**
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
 */class hi{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,r){const n=s=>new Promise((o,d)=>{try{const u=e(s);o(u)}catch(u){d(u)}});n.onAbort=r,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const r=[];try{for(const n of this.queue)await n(e),n.onAbort&&r.push(n.onAbort)}catch(n){r.reverse();for(const i of r)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:n==null?void 0:n.message})}}}/**
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
 */class fi{constructor(e,r,n){this.app=e,this.heartbeatServiceProvider=r,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lr(this),this.idTokenSubscription=new lr(this),this.beforeStateQueue=new hi(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Lr,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,r){return r&&(this._popupRedirectResolver=re(r)),this._initializationPromise=this.queue(async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await Ae.create(this,e),!this._deleted)){if(!((n=this._popupRedirectResolver)===null||n===void 0)&&n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(r),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var r;const n=await this.assertedPersistence.getCurrentUser();let i=n,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId,d=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===d)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=n,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let r=null;try{r=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return r}async reloadAndSetCurrentUserOrClear(e){try{await it(e)}catch(r){if((r==null?void 0:r.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Jn()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const r=e?fe(e):null;return r&&v(r.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(r&&r._clone(this))}async _updateCurrentUser(e,r=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),r||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(re(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Nt("auth","Firebase",e())}onAuthStateChanged(e,r,n){return this.registerStateListener(this.authStateSubscription,e,r,n)}beforeAuthStateChanged(e,r){return this.beforeStateQueue.pushCallback(e,r)}onIdTokenChanged(e,r,n){return this.registerStateListener(this.idTokenSubscription,e,r,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,r){const n=await this.getOrInitRedirectPersistenceManager(r);return e===null?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const r=e&&re(e)||this._popupRedirectResolver;v(r,this,"argument-error"),this.redirectPersistenceManager=await Ae.create(this,[re(r._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var r,n;return this._isInitialized&&await this.queue(async()=>{}),((r=this._currentUser)===null||r===void 0?void 0:r._redirectEventId)===e?this._currentUser:((n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,r;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=(r=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&r!==void 0?r:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,r,n,i){if(this._deleted)return()=>{};const s=typeof r=="function"?r:r.next.bind(r),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof r=="function"?e.addObserver(r,n,i):e.addObserver(r)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Kr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const r={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(r["X-Firebase-gmpid"]=this.app.options.appId);const n=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return n&&(r["X-Firebase-Client"]=n),r}}function Ce(t){return fe(t)}class lr{constructor(e){this.auth=e,this.observer=null,this.addObserver=Pn(r=>this.observer=r)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function gi(t,e,r){const n=Ce(t);v(n._canInitEmulator,n,"emulator-config-failed"),v(/^https?:\/\//.test(e),n,"invalid-emulator-scheme");const i=!!(r!=null&&r.disableWarnings),s=Gr(e),{host:o,port:d}=pi(e),u=d===null?"":`:${d}`;n.config.emulator={url:`${s}//${o}${u}/`},n.settings.appVerificationDisabledForTesting=!0,n.emulatorConfig=Object.freeze({host:o,port:d,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||mi()}function Gr(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function pi(t){const e=Gr(t),r=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!r)return{host:"",port:null};const n=r[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(n);if(i){const s=i[1];return{host:s,port:ur(n.substr(s.length+1))}}else{const[s,o]=n.split(":");return{host:s,port:ur(o)}}}function ur(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function mi(){function t(){const e=document.createElement("p"),r=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",r.position="fixed",r.width="100%",r.backgroundColor="#ffffff",r.border=".1em solid #000000",r.color="#b50000",r.bottom="0px",r.left="0px",r.margin="0px",r.zIndex="10000",r.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Ft{constructor(e,r){this.providerId=e,this.signInMethod=r}toJSON(){return te("not implemented")}_getIdTokenResponse(e){return te("not implemented")}_linkToIdToken(e,r){return te("not implemented")}_getReauthenticationResolver(e){return te("not implemented")}}async function _i(t,e){return Ne(t,"POST","/v1/accounts:update",e)}/**
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
 */async function vi(t,e){return ze(t,"POST","/v1/accounts:signInWithPassword",$e(t,e))}/**
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
 */async function yi(t,e){return ze(t,"POST","/v1/accounts:signInWithEmailLink",$e(t,e))}async function Ii(t,e){return ze(t,"POST","/v1/accounts:signInWithEmailLink",$e(t,e))}/**
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
 */class Be extends Ft{constructor(e,r,n,i=null){super("password",n),this._email=e,this._password=r,this._tenantId=i}static _fromEmailAndPassword(e,r){return new Be(e,r,"password")}static _fromEmailAndCode(e,r,n=null){return new Be(e,r,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e;if(r!=null&&r.email&&(r!=null&&r.password)){if(r.signInMethod==="password")return this._fromEmailAndPassword(r.email,r.password);if(r.signInMethod==="emailLink")return this._fromEmailAndCode(r.email,r.password,r.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return vi(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return yi(e,{email:this._email,oobCode:this._password});default:j(e,"internal-error")}}async _linkToIdToken(e,r){switch(this.signInMethod){case"password":return _i(e,{idToken:r,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ii(e,{idToken:r,email:this._email,oobCode:this._password});default:j(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function Re(t,e){return ze(t,"POST","/v1/accounts:signInWithIdp",$e(t,e))}/**
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
 */const wi="http://localhost";class Ie extends Ft{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const r=new Ie(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(r.idToken=e.idToken),e.accessToken&&(r.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(r.nonce=e.nonce),e.pendingToken&&(r.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(r.accessToken=e.oauthToken,r.secret=e.oauthTokenSecret):j("argument-error"),r}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const r=typeof e=="string"?JSON.parse(e):e,{providerId:n,signInMethod:i}=r,s=Lt(r,["providerId","signInMethod"]);if(!n||!i)return null;const o=new Ie(n,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const r=this.buildRequest();return Re(e,r)}_linkToIdToken(e,r){const n=this.buildRequest();return n.idToken=r,Re(e,n)}_getReauthenticationResolver(e){const r=this.buildRequest();return r.autoCreate=!1,Re(e,r)}buildRequest(){const e={requestUri:wi,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const r={};this.idToken&&(r.id_token=this.idToken),this.accessToken&&(r.access_token=this.accessToken),this.secret&&(r.oauth_token_secret=this.secret),r.providerId=this.providerId,this.nonce&&!this.pendingToken&&(r.nonce=this.nonce),e.postBody=He(r)}return e}}/**
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
 */function Ti(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ki(t){const e=Fe(Ve(t)).link,r=e?Fe(Ve(e)).deep_link_id:null,n=Fe(Ve(t)).deep_link_id;return(n?Fe(Ve(n)).link:null)||n||r||e||t}class Vt{constructor(e){var r,n,i,s,o,d;const u=Fe(Ve(e)),m=(r=u.apiKey)!==null&&r!==void 0?r:null,k=(n=u.oobCode)!==null&&n!==void 0?n:null,w=Ti((i=u.mode)!==null&&i!==void 0?i:null);v(m&&k&&w,"argument-error"),this.apiKey=m,this.operation=w,this.code=k,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(d=u.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const r=ki(e);try{return new Vt(r)}catch{return null}}}/**
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
 */class Le{constructor(){this.providerId=Le.PROVIDER_ID}static credential(e,r){return Be._fromEmailAndPassword(e,r)}static credentialWithLink(e,r){const n=Vt.parseLink(r);return v(n,"argument-error"),Be._fromEmailAndCode(e,n.code,n.tenantId)}}Le.PROVIDER_ID="password";Le.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Le.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class Wt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ke extends Wt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class le extends Ke{constructor(){super("facebook.com")}static credential(e){return Ie._fromParams({providerId:le.PROVIDER_ID,signInMethod:le.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return le.credentialFromTaggedObject(e)}static credentialFromError(e){return le.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return le.credential(e.oauthAccessToken)}catch{return null}}}le.FACEBOOK_SIGN_IN_METHOD="facebook.com";le.PROVIDER_ID="facebook.com";/**
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
 */class ee extends Ke{constructor(){super("google.com"),this.addScope("profile")}static credential(e,r){return Ie._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:r})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:r,oauthAccessToken:n}=e;if(!r&&!n)return null;try{return ee.credential(r,n)}catch{return null}}}ee.GOOGLE_SIGN_IN_METHOD="google.com";ee.PROVIDER_ID="google.com";/**
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
 */class ue extends Ke{constructor(){super("github.com")}static credential(e){return Ie._fromParams({providerId:ue.PROVIDER_ID,signInMethod:ue.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ue.credentialFromTaggedObject(e)}static credentialFromError(e){return ue.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ue.credential(e.oauthAccessToken)}catch{return null}}}ue.GITHUB_SIGN_IN_METHOD="github.com";ue.PROVIDER_ID="github.com";/**
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
 */class de extends Ke{constructor(){super("twitter.com")}static credential(e,r){return Ie._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:r})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:r,oauthTokenSecret:n}=e;if(!r||!n)return null;try{return de.credential(r,n)}catch{return null}}}de.TWITTER_SIGN_IN_METHOD="twitter.com";de.PROVIDER_ID="twitter.com";/**
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
 */async function Ei(t,e){return ze(t,"POST","/v1/accounts:signUp",$e(t,e))}/**
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
 */class we{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,r,n,i=!1){const s=await ye._fromIdTokenResponse(e,n,i),o=dr(n);return new we({user:s,providerId:o,_tokenResponse:n,operationType:r})}static async _forOperation(e,r,n){await e._updateTokensIfNecessary(n,!0);const i=dr(n);return new we({user:e,providerId:i,_tokenResponse:n,operationType:r})}}function dr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class st extends Ct{constructor(e,r,n,i){var s;super(r.code,r.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,st.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:r.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,r,n,i){return new st(e,r,n,i)}}function Jr(t,e,r,n){return(e==="reauthenticate"?r._getReauthenticationResolver(t):r._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?st._fromErrorAndOperation(t,s,e,n):s})}async function bi(t,e,r=!1){const n=await Pe(t,e._linkToIdToken(t.auth,await t.getIdToken()),r);return we._forOperation(t,"link",n)}/**
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
 */async function Si(t,e,r=!1){const{auth:n}=t,i="reauthenticate";try{const s=await Pe(t,Jr(n,i,e,t),r);v(s.idToken,n,"internal-error");const o=Ut(s.idToken);v(o,n,"internal-error");const{sub:d}=o;return v(t.uid===d,n,"user-mismatch"),we._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&j(n,"user-mismatch"),s}}/**
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
 */async function Yr(t,e,r=!1){const n="signIn",i=await Jr(t,n,e),s=await we._fromIdTokenResponse(t,n,i);return r||await t._updateCurrentUser(s.user),s}async function Ai(t,e){return Yr(Ce(t),e)}async function To(t,e,r){const n=Ce(t),i=await Ei(n,{returnSecureToken:!0,email:e,password:r}),s=await we._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(s.user),s}function ko(t,e,r){return Ai(fe(t),Le.credential(e,r))}/**
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
 */async function Ri(t,e){return Ne(t,"POST","/v1/accounts:update",e)}/**
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
 */async function Eo(t,{displayName:e,photoURL:r}){if(e===void 0&&r===void 0)return;const n=fe(t),s={idToken:await n.getIdToken(),displayName:e,photoUrl:r,returnSecureToken:!0},o=await Pe(n,Ri(n.auth,s));n.displayName=o.displayName||null,n.photoURL=o.photoUrl||null;const d=n.providerData.find(({providerId:u})=>u==="password");d&&(d.displayName=n.displayName,d.photoURL=n.photoURL),await n._updateTokensIfNecessary(o)}function Oi(t,e,r,n){return fe(t).onIdTokenChanged(e,r,n)}function Pi(t,e,r){return fe(t).beforeAuthStateChanged(e,r)}const ot="__sak";/**
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
 */class Xr{constructor(e,r){this.storageRetriever=e,this.type=r}_isAvailable(){try{return this.storage?(this.storage.setItem(ot,"1"),this.storage.removeItem(ot),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,r){return this.storage.setItem(e,JSON.stringify(r)),Promise.resolve()}_get(e){const r=this.storage.getItem(e);return Promise.resolve(r?JSON.parse(r):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Ni(){const t=V();return xt(t)||ft(t)}const Ci=1e3,Li=10;class Qr extends Xr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,r)=>this.onStorageEvent(e,r),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ni()&&di(),this.fallbackToPolling=zr(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const r of Object.keys(this.listeners)){const n=this.storage.getItem(r),i=this.localCache[r];n!==i&&e(r,i,n)}}onStorageEvent(e,r=!1){if(!e.key){this.forAllChangedKeys((o,d,u)=>{this.notifyListeners(o,u)});return}const n=e.key;if(r?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(n);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!r)return}const i=()=>{const o=this.storage.getItem(n);!r&&this.localCache[n]===o||this.notifyListeners(n,o)},s=this.storage.getItem(n);ui()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Li):i()}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r&&JSON.parse(r))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,r,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)})},Ci)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,r){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,r){await super._set(e,r),this.localCache[e]=JSON.stringify(r)}async _get(e){const r=await super._get(e);return this.localCache[e]=JSON.stringify(r),r}async _remove(e){await super._remove(e),delete this.localCache[e]}}Qr.type="LOCAL";const Di=Qr;/**
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
 */class Zr extends Xr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,r){}_removeListener(e,r){}}Zr.type="SESSION";const en=Zr;/**
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
 */function Mi(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(r){return{fulfilled:!1,reason:r}}}))}/**
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
 */class gt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const r=this.receivers.find(i=>i.isListeningto(e));if(r)return r;const n=new gt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const r=e,{eventId:n,eventType:i,data:s}=r.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;r.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const d=Array.from(o).map(async m=>m(r.origin,s)),u=await Mi(d);r.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:u})}_subscribe(e,r){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(r)}_unsubscribe(e,r){this.handlersMap[e]&&r&&this.handlersMap[e].delete(r),(!r||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}gt.receivers=[];/**
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
 */function qt(t="",e=10){let r="";for(let n=0;n<e;n++)r+=Math.floor(Math.random()*10);return t+r}/**
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
 */class Ui{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,r,n=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((d,u)=>{const m=qt("",20);i.port1.start();const k=setTimeout(()=>{u(new Error("unsupported_event"))},n);o={messageChannel:i,onMessage(w){const y=w;if(y.data.eventId===m)switch(y.data.status){case"ack":clearTimeout(k),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),d(y.data.response);break;default:clearTimeout(k),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:m,data:r},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function J(){return window}function xi(t){J().location.href=t}/**
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
 */function tn(){return typeof J().WorkerGlobalScope<"u"&&typeof J().importScripts=="function"}async function Fi(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Vi(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Wi(){return tn()?self:null}/**
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
 */const rn="firebaseLocalStorageDb",qi=1,at="firebaseLocalStorage",nn="fbase_key";class Ge{constructor(e){this.request=e}toPromise(){return new Promise((e,r)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{r(this.request.error)})})}}function pt(t,e){return t.transaction([at],e?"readwrite":"readonly").objectStore(at)}function Bi(){const t=indexedDB.deleteDatabase(rn);return new Ge(t).toPromise()}function Ot(){const t=indexedDB.open(rn,qi);return new Promise((e,r)=>{t.addEventListener("error",()=>{r(t.error)}),t.addEventListener("upgradeneeded",()=>{const n=t.result;try{n.createObjectStore(at,{keyPath:nn})}catch(i){r(i)}}),t.addEventListener("success",async()=>{const n=t.result;n.objectStoreNames.contains(at)?e(n):(n.close(),await Bi(),e(await Ot()))})})}async function hr(t,e,r){const n=pt(t,!0).put({[nn]:e,value:r});return new Ge(n).toPromise()}async function Hi(t,e){const r=pt(t,!1).get(e),n=await new Ge(r).toPromise();return n===void 0?null:n.value}function fr(t,e){const r=pt(t,!0).delete(e);return new Ge(r).toPromise()}const ji=800,$i=3;class sn{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ot(),this.db)}async _withRetries(e){let r=0;for(;;)try{const n=await this._openDb();return await e(n)}catch(n){if(r++>$i)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=gt._getInstance(Wi()),this.receiver._subscribe("keyChanged",async(e,r)=>({keyProcessed:(await this._poll()).includes(r.key)})),this.receiver._subscribe("ping",async(e,r)=>["keyChanged"])}async initializeSender(){var e,r;if(this.activeServiceWorker=await Fi(),!this.activeServiceWorker)return;this.sender=new Ui(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&!((e=n[0])===null||e===void 0)&&e.fulfilled&&!((r=n[0])===null||r===void 0)&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Vi()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ot();return await hr(e,ot,"1"),await fr(e,ot),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,r){return this._withPendingWrite(async()=>(await this._withRetries(n=>hr(n,e,r)),this.localCache[e]=r,this.notifyServiceWorker(e)))}async _get(e){const r=await this._withRetries(n=>Hi(n,e));return this.localCache[e]=r,r}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(r=>fr(r,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=pt(i,!1).getAll();return new Ge(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const r=[],n=new Set;for(const{fbase_key:i,value:s}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),r.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),r.push(i));return r}notifyListeners(e,r){this.localCache[e]=r;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(r)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ji)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,r){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(r)}_removeListener(e,r){this.listeners[e]&&(this.listeners[e].delete(r),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sn.type="LOCAL";const zi=sn;/**
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
 */function Ki(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function Gi(t){return new Promise((e,r)=>{const n=document.createElement("script");n.setAttribute("src",t),n.onload=e,n.onerror=i=>{const s=G("internal-error");s.customData=i,r(s)},n.type="text/javascript",n.charset="UTF-8",Ki().appendChild(n)})}function Ji(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new je(3e4,6e4);/**
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
 */function on(t,e){return e?re(e):(v(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Bt extends Ft{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Re(e,this._buildIdpRequest())}_linkToIdToken(e,r){return Re(e,this._buildIdpRequest(r))}_getReauthenticationResolver(e){return Re(e,this._buildIdpRequest())}_buildIdpRequest(e){const r={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(r.idToken=e),r}}function Yi(t){return Yr(t.auth,new Bt(t),t.bypassAuthState)}function Xi(t){const{auth:e,user:r}=t;return v(r,e,"internal-error"),Si(r,new Bt(t),t.bypassAuthState)}async function Qi(t){const{auth:e,user:r}=t;return v(r,e,"internal-error"),bi(r,new Bt(t),t.bypassAuthState)}/**
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
 */class an{constructor(e,r,n,i,s=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(r)?r:[r]}execute(){return new Promise(async(e,r)=>{this.pendingPromise={resolve:e,reject:r};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:r,sessionId:n,postBody:i,tenantId:s,error:o,type:d}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:r,sessionId:n,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(u))}catch(m){this.reject(m)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yi;case"linkViaPopup":case"linkViaRedirect":return Qi;case"reauthViaPopup":case"reauthViaRedirect":return Xi;default:j(this.auth,"internal-error")}}resolve(e){ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ne(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const Zi=new je(2e3,1e4);async function es(t,e,r){const n=Ce(t);jn(t,e,Wt);const i=on(n,r);return new _e(n,"signInViaPopup",e,i).executeNotNull()}class _e extends an{constructor(e,r,n,i,s){super(e,r,i,s),this.provider=n,this.authWindow=null,this.pollId=null,_e.currentPopupAction&&_e.currentPopupAction.cancel(),_e.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){ne(this.filter.length===1,"Popup operations only handle one event");const e=qt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(r=>{this.reject(r)}),this.resolver._isIframeWebStorageSupported(this.auth,r=>{r||this.reject(G(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(G(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_e.currentPopupAction=null}pollUserCancellation(){const e=()=>{var r,n;if(!((n=(r=this.authWindow)===null||r===void 0?void 0:r.window)===null||n===void 0)&&n.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(G(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,Zi.get())};e()}}_e.currentPopupAction=null;/**
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
 */const ts="pendingRedirect",tt=new Map;class rs extends an{constructor(e,r,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],r,void 0,n),this.eventId=null}async execute(){let e=tt.get(this.auth._key());if(!e){try{const n=await ns(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(n)}catch(r){e=()=>Promise.reject(r)}tt.set(this.auth._key(),e)}return this.bypassAuthState||tt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const r=await this.auth._redirectUserForId(e.eventId);if(r)return this.user=r,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function ns(t,e){const r=os(e),n=ss(t);if(!await n._isAvailable())return!1;const i=await n._get(r)==="true";return await n._remove(r),i}function is(t,e){tt.set(t._key(),e)}function ss(t){return re(t._redirectPersistence)}function os(t){return et(ts,t.config.apiKey,t.name)}async function as(t,e,r=!1){const n=Ce(t),i=on(n,e),o=await new rs(n,i,r).execute();return o&&!r&&(delete o.user._redirectEventId,await n._persistUserIfCurrent(o.user),await n._setRedirectUser(null,e)),o}/**
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
 */const cs=10*60*1e3;class ls{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let r=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(r=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!us(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}sendToConsumer(e,r){var n;if(e.error&&!cn(e)){const i=((n=e.error.code)===null||n===void 0?void 0:n.split("auth/")[1])||"internal-error";r.onError(G(this.auth,i))}else r.onAuthEvent(e)}isEventForConsumer(e,r){const n=r.eventId===null||!!e.eventId&&e.eventId===r.eventId;return r.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=cs&&this.cachedEventUids.clear(),this.cachedEventUids.has(gr(e))}saveEventToCache(e){this.cachedEventUids.add(gr(e)),this.lastProcessedEventTime=Date.now()}}function gr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function cn({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function us(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return cn(t);default:return!1}}/**
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
 */async function ds(t,e={}){return Ne(t,"GET","/v1/projects",e)}/**
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
 */const hs=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fs=/^https?/;async function gs(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ds(t);for(const r of e)try{if(ps(r))return}catch{}j(t,"unauthorized-domain")}function ps(t){const e=Rt(),{protocol:r,hostname:n}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&n===""?r==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):r==="chrome-extension:"&&o.hostname===n}if(!fs.test(r))return!1;if(hs.test(t))return n===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(n)}/**
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
 */const ms=new je(3e4,6e4);function pr(){const t=J().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let r=0;r<t.CP.length;r++)t.CP[r]=null}}function _s(t){return new Promise((e,r)=>{var n,i,s;function o(){pr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{pr(),r(G(t,"network-request-failed"))},timeout:ms.get()})}if(!((i=(n=J().gapi)===null||n===void 0?void 0:n.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=J().gapi)===null||s===void 0)&&s.load)o();else{const d=Ji("iframefcb");return J()[d]=()=>{gapi.load?o():r(G(t,"network-request-failed"))},Gi(`https://apis.google.com/js/api.js?onload=${d}`).catch(u=>r(u))}}).catch(e=>{throw rt=null,e})}let rt=null;function vs(t){return rt=rt||_s(t),rt}/**
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
 */const ys=new je(5e3,15e3),Is="__/auth/iframe",ws="emulator/auth/iframe",Ts={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ks=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Es(t){const e=t.config;v(e.authDomain,t,"auth-domain-config-required");const r=e.emulator?Mt(e,ws):`https://${t.config.authDomain}/${Is}`,n={apiKey:e.apiKey,appName:t.name,v:ht},i=ks.get(t.config.apiHost);i&&(n.eid=i);const s=t._getFrameworks();return s.length&&(n.fw=s.join(",")),`${r}?${He(n).slice(1)}`}async function bs(t){const e=await vs(t),r=J().gapi;return v(r,t,"internal-error"),e.open({where:document.body,url:Es(t),messageHandlersFilter:r.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ts,dontclear:!0},n=>new Promise(async(i,s)=>{await n.restyle({setHideOnLeave:!1});const o=G(t,"network-request-failed"),d=J().setTimeout(()=>{s(o)},ys.get());function u(){J().clearTimeout(d),i(n)}n.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Ss={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},As=500,Rs=600,Os="_blank",Ps="http://localhost";class mr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Ns(t,e,r,n=As,i=Rs){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-n)/2,0).toString();let d="";const u=Object.assign(Object.assign({},Ss),{width:n.toString(),height:i.toString(),top:s,left:o}),m=V().toLowerCase();r&&(d=qr(m)?Os:r),Wr(m)&&(e=e||Ps,u.scrollbars="yes");const k=Object.entries(u).reduce((y,[W,C])=>`${y}${W}=${C},`,"");if(li(m)&&d!=="_self")return Cs(e||"",d),new mr(null);const w=window.open(e||"",d,k);v(w,t,"popup-blocked");try{w.focus()}catch{}return new mr(w)}function Cs(t,e){const r=document.createElement("a");r.href=t,r.target=e;const n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}/**
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
 */const Ls="__/auth/handler",Ds="emulator/auth/handler";function _r(t,e,r,n,i,s){v(t.config.authDomain,t,"auth-domain-config-required"),v(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:r,redirectUrl:n,v:ht,eventId:i};if(e instanceof Wt){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Fn(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,m]of Object.entries(s||{}))o[u]=m}if(e instanceof Ke){const u=e.getScopes().filter(m=>m!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const d=o;for(const u of Object.keys(d))d[u]===void 0&&delete d[u];return`${Ms(t)}?${He(d).slice(1)}`}function Ms({config:t}){return t.emulator?Mt(t,Ds):`https://${t.authDomain}/${Ls}`}/**
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
 */const wt="webStorageSupport";class Us{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=en,this._completeRedirectFn=as,this._overrideRedirectResult=is}async _openPopup(e,r,n,i){var s;ne((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=_r(e,r,n,Rt(),i);return Ns(e,o,qt())}async _openRedirect(e,r,n,i){return await this._originValidation(e),xi(_r(e,r,n,Rt(),i)),new Promise(()=>{})}_initialize(e){const r=e._key();if(this.eventManagers[r]){const{manager:i,promise:s}=this.eventManagers[r];return i?Promise.resolve(i):(ne(s,"If manager is not set, promise should be"),s)}const n=this.initAndGetManager(e);return this.eventManagers[r]={promise:n},n.catch(()=>{delete this.eventManagers[r]}),n}async initAndGetManager(e){const r=await bs(e),n=new ls(e);return r.register("authEvent",i=>(v(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:n.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=r,n}_isIframeWebStorageSupported(e,r){this.iframes[e._key()].send(wt,{type:wt},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[wt];o!==void 0&&r(!!o),j(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const r=e._key();return this.originValidationPromises[r]||(this.originValidationPromises[r]=gs(e)),this.originValidationPromises[r]}get _shouldInitProactively(){return zr()||xt()||ft()}}const xs=Us;var vr="@firebase/auth",yr="0.21.5";/**
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
 */class Fs{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const r=this.auth.onIdTokenChanged(n=>{e((n==null?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,r),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const r=this.internalListeners.get(e);r&&(this.internalListeners.delete(e),r(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Vs(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Ws(t){er(new tr("auth",(e,{options:r})=>{const n=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=n.options;return((d,u)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:d.name}),v(!(o!=null&&o.includes(":")),"argument-error",{appName:d.name});const m={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Kr(t)},k=new fi(d,u,m);return zn(k,r),k})(n,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,r,n)=>{e.getProvider("auth-internal").initialize()})),er(new tr("auth-internal",e=>{const r=Ce(e.getProvider("auth").getImmediate());return(n=>new Fs(n))(r)},"PRIVATE").setInstantiationMode("EXPLICIT")),rr(vr,yr,Vs(t)),rr(vr,yr,"esm2017")}/**
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
 */const qs=5*60,Bs=Pr("authIdTokenMaxAge")||qs;let Ir=null;const Hs=t=>async e=>{const r=e&&await e.getIdTokenResult(),n=r&&(new Date().getTime()-Date.parse(r.issuedAtTime))/1e3;if(n&&n>Bs)return;const i=r==null?void 0:r.token;Ir!==i&&(Ir=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function js(t=Cn()){const e=Nr(t,"auth");if(e.isInitialized())return e.getImmediate();const r=$n(t,{popupRedirectResolver:xs,persistence:[zi,Di,en]}),n=Pr("authTokenSyncURL");if(n){const s=Hs(n);Pi(r,s,()=>s(r.currentUser)),Oi(r,o=>s(o))}const i=Nn("auth");return i&&gi(r,`http://${i}`),r}Ws("Browser");var Je=t=>t.type==="checkbox",Se=t=>t instanceof Date,U=t=>t==null;const ln=t=>typeof t=="object";var N=t=>!U(t)&&!Array.isArray(t)&&ln(t)&&!Se(t),$s=t=>N(t)&&t.target?Je(t.target)?t.target.checked:t.target.value:t,zs=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,Ks=(t,e)=>t.has(zs(e)),Gs=t=>{const e=t.constructor&&t.constructor.prototype;return N(e)&&e.hasOwnProperty("isPrototypeOf")},Ht=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function pe(t){let e;const r=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Ht&&(t instanceof Blob||t instanceof FileList))&&(r||N(t)))if(e=r?[]:{},!Array.isArray(t)&&!Gs(t))e=t;else for(const n in t)e[n]=pe(t[n]);else return t;return e}var Ye=t=>Array.isArray(t)?t.filter(Boolean):[],P=t=>t===void 0,p=(t,e,r)=>{if(!e||!N(t))return r;const n=Ye(e.split(/[,[\].]+?/)).reduce((i,s)=>U(i)?i:i[s],t);return P(n)||n===t?P(t[e])?r:t[e]:n};const wr={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},$={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},Z={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};me.createContext(null);var Js=(t,e,r,n=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==$.all&&(e._proxyFormState[o]=!n||$.all),r&&(r[o]=!0),t[o]}});return i},H=t=>N(t)&&!Object.keys(t).length,Ys=(t,e,r,n)=>{r(t);const{name:i,...s}=t;return H(s)||Object.keys(s).length>=Object.keys(e).length||Object.keys(s).find(o=>e[o]===(!n||$.all))},Tt=t=>Array.isArray(t)?t:[t];function Xs(t){const e=me.useRef(t);e.current=t,me.useEffect(()=>{const r=!t.disabled&&e.current.subject&&e.current.subject.subscribe({next:e.current.next});return()=>{r&&r.unsubscribe()}},[t.disabled])}var K=t=>typeof t=="string",Qs=(t,e,r,n,i)=>K(t)?(n&&e.watch.add(t),p(r,t,i)):Array.isArray(t)?t.map(s=>(n&&e.watch.add(s),p(r,s))):(n&&(e.watchAll=!0),r),jt=t=>/^\w*$/.test(t),un=t=>Ye(t.replace(/["|']|\]/g,"").split(/\.|\[/));function b(t,e,r){let n=-1;const i=jt(e)?[e]:un(e),s=i.length,o=s-1;for(;++n<s;){const d=i[n];let u=r;if(n!==o){const m=t[d];u=N(m)||Array.isArray(m)?m:isNaN(+i[n+1])?{}:[]}t[d]=u,t=t[d]}return t}var Zs=(t,e,r,n,i)=>e?{...r[t],types:{...r[t]&&r[t].types?r[t].types:{},[n]:i||!0}}:{};const Pt=(t,e,r)=>{for(const n of r||Object.keys(t)){const i=p(t,n);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else N(o)&&Pt(o,e)}}};var Tr=t=>({isOnSubmit:!t||t===$.onSubmit,isOnBlur:t===$.onBlur,isOnChange:t===$.onChange,isOnAll:t===$.all,isOnTouch:t===$.onTouched}),kr=(t,e,r)=>!r&&(e.watchAll||e.watch.has(t)||[...e.watch].some(n=>t.startsWith(n)&&/^\.\w+/.test(t.slice(n.length)))),eo=(t,e,r)=>{const n=Ye(p(t,r));return b(n,"root",e[r]),b(t,r,n),t},Oe=t=>typeof t=="boolean",$t=t=>t.type==="file",he=t=>typeof t=="function",ct=t=>{if(!Ht)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},nt=t=>K(t),zt=t=>t.type==="radio",lt=t=>t instanceof RegExp;const Er={value:!1,isValid:!1},br={value:!0,isValid:!0};var dn=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(r=>r&&r.checked&&!r.disabled).map(r=>r.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!P(t[0].attributes.value)?P(t[0].value)||t[0].value===""?br:{value:t[0].value,isValid:!0}:br:Er}return Er};const Sr={isValid:!1,value:null};var hn=t=>Array.isArray(t)?t.reduce((e,r)=>r&&r.checked&&!r.disabled?{isValid:!0,value:r.value}:e,Sr):Sr;function Ar(t,e,r="validate"){if(nt(t)||Array.isArray(t)&&t.every(nt)||Oe(t)&&!t)return{type:r,message:nt(t)?t:"",ref:e}}var be=t=>N(t)&&!lt(t)?t:{value:t,message:""},Rr=async(t,e,r,n,i)=>{const{ref:s,refs:o,required:d,maxLength:u,minLength:m,min:k,max:w,pattern:y,validate:W,name:C,valueAsNumber:Te,mount:se,disabled:ke}=t._f,I=p(e,C);if(!se||ke)return{};const D=o?o[0]:s,q=E=>{n&&D.reportValidity&&(D.setCustomValidity(Oe(E)?"":E||""),D.reportValidity())},A={},Y=zt(s),oe=Je(s),De=Y||oe,x=(Te||$t(s))&&P(s.value)&&P(I)||ct(s)&&s.value===""||I===""||Array.isArray(I)&&!I.length,X=Zs.bind(null,C,r,A),Q=(E,T,R,F=Z.maxLength,B=Z.minLength)=>{const z=E?T:R;A[C]={type:E?F:B,message:z,ref:s,...X(E?F:B,z)}};if(i?!Array.isArray(I)||!I.length:d&&(!De&&(x||U(I))||Oe(I)&&!I||oe&&!dn(o).isValid||Y&&!hn(o).isValid)){const{value:E,message:T}=nt(d)?{value:!!d,message:d}:be(d);if(E&&(A[C]={type:Z.required,message:T,ref:D,...X(Z.required,T)},!r))return q(T),A}if(!x&&(!U(k)||!U(w))){let E,T;const R=be(w),F=be(k);if(!U(I)&&!isNaN(I)){const B=s.valueAsNumber||I&&+I;U(R.value)||(E=B>R.value),U(F.value)||(T=B<F.value)}else{const B=s.valueAsDate||new Date(I),z=Ue=>new Date(new Date().toDateString()+" "+Ue),ge=s.type=="time",Me=s.type=="week";K(R.value)&&I&&(E=ge?z(I)>z(R.value):Me?I>R.value:B>new Date(R.value)),K(F.value)&&I&&(T=ge?z(I)<z(F.value):Me?I<F.value:B<new Date(F.value))}if((E||T)&&(Q(!!E,R.message,F.message,Z.max,Z.min),!r))return q(A[C].message),A}if((u||m)&&!x&&(K(I)||i&&Array.isArray(I))){const E=be(u),T=be(m),R=!U(E.value)&&I.length>+E.value,F=!U(T.value)&&I.length<+T.value;if((R||F)&&(Q(R,E.message,T.message),!r))return q(A[C].message),A}if(y&&!x&&K(I)){const{value:E,message:T}=be(y);if(lt(E)&&!I.match(E)&&(A[C]={type:Z.pattern,message:T,ref:s,...X(Z.pattern,T)},!r))return q(T),A}if(W){if(he(W)){const E=await W(I,e),T=Ar(E,D);if(T&&(A[C]={...T,...X(Z.validate,T.message)},!r))return q(T.message),A}else if(N(W)){let E={};for(const T in W){if(!H(E)&&!r)break;const R=Ar(await W[T](I,e),D,T);R&&(E={...R,...X(T,R.message)},q(R.message),r&&(A[C]=E))}if(!H(E)&&(A[C]={ref:D,...E},!r))return A}}return q(!0),A};function to(t,e){const r=e.slice(0,-1).length;let n=0;for(;n<r;)t=P(t)?n++:t[e[n++]];return t}function ro(t){for(const e in t)if(!P(t[e]))return!1;return!0}function L(t,e){const r=Array.isArray(e)?e:jt(e)?[e]:un(e),n=r.length===1?t:to(t,r),i=r.length-1,s=r[i];return n&&delete n[s],i!==0&&(N(n)&&H(n)||Array.isArray(n)&&ro(n))&&L(t,r.slice(0,-1)),t}function kt(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next&&s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var ut=t=>U(t)||!ln(t);function ve(t,e){if(ut(t)||ut(e))return t===e;if(Se(t)&&Se(e))return t.getTime()===e.getTime();const r=Object.keys(t),n=Object.keys(e);if(r.length!==n.length)return!1;for(const i of r){const s=t[i];if(!n.includes(i))return!1;if(i!=="ref"){const o=e[i];if(Se(s)&&Se(o)||N(s)&&N(o)||Array.isArray(s)&&Array.isArray(o)?!ve(s,o):s!==o)return!1}}return!0}var fn=t=>t.type==="select-multiple",no=t=>zt(t)||Je(t),Et=t=>ct(t)&&t.isConnected,gn=t=>{for(const e in t)if(he(t[e]))return!0;return!1};function dt(t,e={}){const r=Array.isArray(t);if(N(t)||r)for(const n in t)Array.isArray(t[n])||N(t[n])&&!gn(t[n])?(e[n]=Array.isArray(t[n])?[]:{},dt(t[n],e[n])):U(t[n])||(e[n]=!0);return e}function pn(t,e,r){const n=Array.isArray(t);if(N(t)||n)for(const i in t)Array.isArray(t[i])||N(t[i])&&!gn(t[i])?P(e)||ut(r[i])?r[i]=Array.isArray(t[i])?dt(t[i],[]):{...dt(t[i])}:pn(t[i],U(e)?{}:e[i],r[i]):r[i]=!ve(t[i],e[i]);return r}var bt=(t,e)=>pn(t,e,dt(e)),mn=(t,{valueAsNumber:e,valueAsDate:r,setValueAs:n})=>P(t)?t:e?t===""?NaN:t&&+t:r&&K(t)?new Date(t):n?n(t):t;function St(t){const e=t.ref;if(!(t.refs?t.refs.every(r=>r.disabled):e.disabled))return $t(e)?e.files:zt(e)?hn(t.refs).value:fn(e)?[...e.selectedOptions].map(({value:r})=>r):Je(e)?dn(t.refs).value:mn(P(e.value)?t.ref.value:e.value,t)}var io=(t,e,r,n)=>{const i={};for(const s of t){const o=p(e,s);o&&b(i,s,o._f)}return{criteriaMode:r,names:[...t],fields:i,shouldUseNativeValidation:n}},xe=t=>P(t)?t:lt(t)?t.source:N(t)?lt(t.value)?t.value.source:t.value:t,so=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function Or(t,e,r){const n=p(t,r);if(n||jt(r))return{error:n,name:r};const i=r.split(".");for(;i.length;){const s=i.join("."),o=p(e,s),d=p(t,s);if(o&&!Array.isArray(o)&&r!==s)return{name:r};if(d&&d.type)return{name:s,error:d};i.pop()}return{name:r}}var oo=(t,e,r,n,i)=>i.isOnAll?!1:!r&&i.isOnTouch?!(e||t):(r?n.isOnBlur:i.isOnBlur)?!t:(r?n.isOnChange:i.isOnChange)?t:!0,ao=(t,e)=>!Ye(p(t,e)).length&&L(t,e);const co={mode:$.onSubmit,reValidateMode:$.onChange,shouldFocusError:!0};function lo(t={},e){let r={...co,...t},n={submitCount:0,isDirty:!1,isLoading:he(r.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},i={},s=N(r.defaultValues)||N(r.values)?pe(r.defaultValues||r.values)||{}:{},o=r.shouldUnregister?{}:pe(s),d={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},m,k=0;const w={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},y={values:kt(),array:kt(),state:kt()},W=t.resetOptions&&t.resetOptions.keepDirtyValues,C=Tr(r.mode),Te=Tr(r.reValidateMode),se=r.criteriaMode===$.all,ke=a=>c=>{clearTimeout(k),k=setTimeout(a,c)},I=async a=>{if(w.isValid||a){const c=r.resolver?H((await x()).errors):await Q(i,!0);c!==n.isValid&&y.state.next({isValid:c})}},D=a=>w.isValidating&&y.state.next({isValidating:a}),q=(a,c=[],l,g,f=!0,h=!0)=>{if(g&&l){if(d.action=!0,h&&Array.isArray(p(i,a))){const _=l(p(i,a),g.argA,g.argB);f&&b(i,a,_)}if(h&&Array.isArray(p(n.errors,a))){const _=l(p(n.errors,a),g.argA,g.argB);f&&b(n.errors,a,_),ao(n.errors,a)}if(w.touchedFields&&h&&Array.isArray(p(n.touchedFields,a))){const _=l(p(n.touchedFields,a),g.argA,g.argB);f&&b(n.touchedFields,a,_)}w.dirtyFields&&(n.dirtyFields=bt(s,o)),y.state.next({name:a,isDirty:T(a,c),dirtyFields:n.dirtyFields,errors:n.errors,isValid:n.isValid})}else b(o,a,c)},A=(a,c)=>{b(n.errors,a,c),y.state.next({errors:n.errors})},Y=(a,c,l,g)=>{const f=p(i,a);if(f){const h=p(o,a,P(l)?p(s,a):l);P(h)||g&&g.defaultChecked||c?b(o,a,c?h:St(f._f)):B(a,h),d.mount&&I()}},oe=(a,c,l,g,f)=>{let h=!1,_=!1;const S={name:a};if(!l||g){w.isDirty&&(_=n.isDirty,n.isDirty=S.isDirty=T(),h=_!==S.isDirty);const O=ve(p(s,a),c);_=p(n.dirtyFields,a),O?L(n.dirtyFields,a):b(n.dirtyFields,a,!0),S.dirtyFields=n.dirtyFields,h=h||w.dirtyFields&&_!==!O}if(l){const O=p(n.touchedFields,a);O||(b(n.touchedFields,a,l),S.touchedFields=n.touchedFields,h=h||w.touchedFields&&O!==l)}return h&&f&&y.state.next(S),h?S:{}},De=(a,c,l,g)=>{const f=p(n.errors,a),h=w.isValid&&Oe(c)&&n.isValid!==c;if(t.delayError&&l?(m=ke(()=>A(a,l)),m(t.delayError)):(clearTimeout(k),m=null,l?b(n.errors,a,l):L(n.errors,a)),(l?!ve(f,l):f)||!H(g)||h){const _={...g,...h&&Oe(c)?{isValid:c}:{},errors:n.errors,name:a};n={...n,..._},y.state.next(_)}D(!1)},x=async a=>r.resolver(o,r.context,io(a||u.mount,i,r.criteriaMode,r.shouldUseNativeValidation)),X=async a=>{const{errors:c}=await x();if(a)for(const l of a){const g=p(c,l);g?b(n.errors,l,g):L(n.errors,l)}else n.errors=c;return c},Q=async(a,c,l={valid:!0})=>{for(const g in a){const f=a[g];if(f){const{_f:h,..._}=f;if(h){const S=u.array.has(h.name),O=await Rr(f,o,se,r.shouldUseNativeValidation&&!c,S);if(O[h.name]&&(l.valid=!1,c))break;!c&&(p(O,h.name)?S?eo(n.errors,O,h.name):b(n.errors,h.name,O[h.name]):L(n.errors,h.name))}_&&await Q(_,c,l)}}return l.valid},E=()=>{for(const a of u.unMount){const c=p(i,a);c&&(c._f.refs?c._f.refs.every(l=>!Et(l)):!Et(c._f.ref))&&mt(a)}u.unMount=new Set},T=(a,c)=>(a&&c&&b(o,a,c),!ve(Kt(),s)),R=(a,c,l)=>Qs(a,u,{...d.mount?o:P(c)?s:K(a)?{[a]:c}:c},l,c),F=a=>Ye(p(d.mount?o:s,a,t.shouldUnregister?p(s,a,[]):[])),B=(a,c,l={})=>{const g=p(i,a);let f=c;if(g){const h=g._f;h&&(!h.disabled&&b(o,a,mn(c,h)),f=ct(h.ref)&&U(c)?"":c,fn(h.ref)?[...h.ref.options].forEach(_=>_.selected=f.includes(_.value)):h.refs?Je(h.ref)?h.refs.length>1?h.refs.forEach(_=>(!_.defaultChecked||!_.disabled)&&(_.checked=Array.isArray(f)?!!f.find(S=>S===_.value):f===_.value)):h.refs[0]&&(h.refs[0].checked=!!f):h.refs.forEach(_=>_.checked=_.value===f):$t(h.ref)?h.ref.value="":(h.ref.value=f,h.ref.type||y.values.next({name:a,values:{...o}})))}(l.shouldDirty||l.shouldTouch)&&oe(a,f,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&Ue(a)},z=(a,c,l)=>{for(const g in c){const f=c[g],h=`${a}.${g}`,_=p(i,h);(u.array.has(a)||!ut(f)||_&&!_._f)&&!Se(f)?z(h,f,l):B(h,f,l)}},ge=(a,c,l={})=>{const g=p(i,a),f=u.array.has(a),h=pe(c);b(o,a,h),f?(y.array.next({name:a,values:{...o}}),(w.isDirty||w.dirtyFields)&&l.shouldDirty&&y.state.next({name:a,dirtyFields:bt(s,o),isDirty:T(a,h)})):g&&!g._f&&!U(h)?z(a,h,l):B(a,h,l),kr(a,u)&&y.state.next({...n}),y.values.next({name:a,values:{...o}}),!d.mount&&e()},Me=async a=>{const c=a.target;let l=c.name,g=!0;const f=p(i,l),h=()=>c.type?St(f._f):$s(a);if(f){let _,S;const O=h(),Ee=a.type===wr.BLUR||a.type===wr.FOCUS_OUT,En=!so(f._f)&&!r.resolver&&!p(n.errors,l)&&!f._f.deps||oo(Ee,p(n.touchedFields,l),n.isSubmitted,Te,C),vt=kr(l,u,Ee);b(o,l,O),Ee?(f._f.onBlur&&f._f.onBlur(a),m&&m(0)):f._f.onChange&&f._f.onChange(a);const yt=oe(l,O,Ee,!1),bn=!H(yt)||vt;if(!Ee&&y.values.next({name:l,type:a.type,values:{...o}}),En)return w.isValid&&I(),bn&&y.state.next({name:l,...vt?{}:yt});if(!Ee&&vt&&y.state.next({...n}),D(!0),r.resolver){const{errors:Qt}=await x([l]),Sn=Or(n.errors,i,l),Zt=Or(Qt,i,Sn.name||l);_=Zt.error,l=Zt.name,S=H(Qt)}else _=(await Rr(f,o,se,r.shouldUseNativeValidation))[l],g=isNaN(O)||O===p(o,l,O),g&&(_?S=!1:w.isValid&&(S=await Q(i,!0)));g&&(f._f.deps&&Ue(f._f.deps),De(l,S,_,yt))}},Ue=async(a,c={})=>{let l,g;const f=Tt(a);if(D(!0),r.resolver){const h=await X(P(a)?a:f);l=H(h),g=a?!f.some(_=>p(h,_)):l}else a?(g=(await Promise.all(f.map(async h=>{const _=p(i,h);return await Q(_&&_._f?{[h]:_}:_)}))).every(Boolean),!(!g&&!n.isValid)&&I()):g=l=await Q(i);return y.state.next({...!K(a)||w.isValid&&l!==n.isValid?{}:{name:a},...r.resolver||!a?{isValid:l}:{},errors:n.errors,isValidating:!1}),c.shouldFocus&&!g&&Pt(i,h=>h&&p(n.errors,h),a?f:u.mount),g},Kt=a=>{const c={...s,...d.mount?o:{}};return P(a)?c:K(a)?p(c,a):a.map(l=>p(c,l))},Gt=(a,c)=>({invalid:!!p((c||n).errors,a),isDirty:!!p((c||n).dirtyFields,a),isTouched:!!p((c||n).touchedFields,a),error:p((c||n).errors,a)}),_n=a=>{a&&Tt(a).forEach(c=>L(n.errors,c)),y.state.next({errors:a?n.errors:{}})},vn=(a,c,l)=>{const g=(p(i,a,{_f:{}})._f||{}).ref;b(n.errors,a,{...c,ref:g}),y.state.next({name:a,errors:n.errors,isValid:!1}),l&&l.shouldFocus&&g&&g.focus&&g.focus()},yn=(a,c)=>he(a)?y.values.subscribe({next:l=>a(R(void 0,c),l)}):R(a,c,!0),mt=(a,c={})=>{for(const l of a?Tt(a):u.mount)u.mount.delete(l),u.array.delete(l),c.keepValue||(L(i,l),L(o,l)),!c.keepError&&L(n.errors,l),!c.keepDirty&&L(n.dirtyFields,l),!c.keepTouched&&L(n.touchedFields,l),!r.shouldUnregister&&!c.keepDefaultValue&&L(s,l);y.values.next({values:{...o}}),y.state.next({...n,...c.keepDirty?{isDirty:T()}:{}}),!c.keepIsValid&&I()},_t=(a,c={})=>{let l=p(i,a);const g=Oe(c.disabled);return b(i,a,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:a}},name:a,mount:!0,...c}}),u.mount.add(a),l?g&&b(o,a,c.disabled?void 0:p(o,a,St(l._f))):Y(a,!0,c.value),{...g?{disabled:c.disabled}:{},...r.shouldUseNativeValidation?{required:!!c.required,min:xe(c.min),max:xe(c.max),minLength:xe(c.minLength),maxLength:xe(c.maxLength),pattern:xe(c.pattern)}:{},name:a,onChange:Me,onBlur:Me,ref:f=>{if(f){_t(a,c),l=p(i,a);const h=P(f.value)&&f.querySelectorAll&&f.querySelectorAll("input,select,textarea")[0]||f,_=no(h),S=l._f.refs||[];if(_?S.find(O=>O===h):h===l._f.ref)return;b(i,a,{_f:{...l._f,..._?{refs:[...S.filter(Et),h,...Array.isArray(p(s,a))?[{}]:[]],ref:{type:h.type,name:a}}:{ref:h}}}),Y(a,!1,void 0,h)}else l=p(i,a,{}),l._f&&(l._f.mount=!1),(r.shouldUnregister||c.shouldUnregister)&&!(Ks(u.array,a)&&d.action)&&u.unMount.add(a)}}},Jt=()=>r.shouldFocusError&&Pt(i,a=>a&&p(n.errors,a),u.mount),In=(a,c)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let g=pe(o);if(y.state.next({isSubmitting:!0}),r.resolver){const{errors:f,values:h}=await x();n.errors=f,g=h}else await Q(i);L(n.errors,"root"),H(n.errors)?(y.state.next({errors:{}}),await a(g,l)):(c&&await c({...n.errors},l),Jt(),setTimeout(Jt)),y.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:H(n.errors),submitCount:n.submitCount+1,errors:n.errors})},wn=(a,c={})=>{p(i,a)&&(P(c.defaultValue)?ge(a,p(s,a)):(ge(a,c.defaultValue),b(s,a,c.defaultValue)),c.keepTouched||L(n.touchedFields,a),c.keepDirty||(L(n.dirtyFields,a),n.isDirty=c.defaultValue?T(a,p(s,a)):T()),c.keepError||(L(n.errors,a),w.isValid&&I()),y.state.next({...n}))},Yt=(a,c={})=>{const l=a||s,g=pe(l),f=a&&!H(a)?g:s;if(c.keepDefaultValues||(s=l),!c.keepValues){if(c.keepDirtyValues||W)for(const h of u.mount)p(n.dirtyFields,h)?b(f,h,p(o,h)):ge(h,p(f,h));else{if(Ht&&P(a))for(const h of u.mount){const _=p(i,h);if(_&&_._f){const S=Array.isArray(_._f.refs)?_._f.refs[0]:_._f.ref;if(ct(S)){const O=S.closest("form");if(O){O.reset();break}}}}i={}}o=t.shouldUnregister?c.keepDefaultValues?pe(s):{}:g,y.array.next({values:{...f}}),y.values.next({values:{...f}})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!d.mount&&e(),d.mount=!w.isValid||!!c.keepIsValid,d.watch=!!t.shouldUnregister,y.state.next({submitCount:c.keepSubmitCount?n.submitCount:0,isDirty:c.keepDirty?n.isDirty:!!(c.keepDefaultValues&&!ve(a,s)),isSubmitted:c.keepIsSubmitted?n.isSubmitted:!1,dirtyFields:c.keepDirtyValues?n.dirtyFields:c.keepDefaultValues&&a?bt(s,a):{},touchedFields:c.keepTouched?n.touchedFields:{},errors:c.keepErrors?n.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},Xt=(a,c)=>Yt(he(a)?a(o):a,c),Tn=(a,c={})=>{const l=p(i,a),g=l&&l._f;if(g){const f=g.refs?g.refs[0]:g.ref;f.focus&&(f.focus(),c.shouldSelect&&f.select())}},kn=a=>{n={...n,...a}};return he(r.defaultValues)&&r.defaultValues().then(a=>{Xt(a,r.resetOptions),y.state.next({isLoading:!1})}),{control:{register:_t,unregister:mt,getFieldState:Gt,_executeSchema:x,_getWatch:R,_getDirty:T,_updateValid:I,_removeUnmounted:E,_updateFieldArray:q,_getFieldArray:F,_reset:Yt,_updateFormState:kn,_subjects:y,_proxyFormState:w,get _fields(){return i},get _formValues(){return o},get _state(){return d},set _state(a){d=a},get _defaultValues(){return s},get _names(){return u},set _names(a){u=a},get _formState(){return n},set _formState(a){n=a},get _options(){return r},set _options(a){r={...r,...a}}},trigger:Ue,register:_t,handleSubmit:In,watch:yn,setValue:ge,getValues:Kt,reset:Xt,resetField:wn,clearErrors:_n,unregister:mt,setError:vn,setFocus:Tn,getFieldState:Gt}}function uo(t={}){const e=me.useRef(),[r,n]=me.useState({isDirty:!1,isValidating:!1,isLoading:he(t.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:he(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...lo(t,()=>n(s=>({...s}))),formState:r});const i=e.current.control;return i._options=t,Xs({subject:i._subjects.state,next:s=>{Ys(s,i._proxyFormState,i._updateFormState,!0)&&n({...i._formState})}}),me.useEffect(()=>{t.values&&!ve(t.values,i._defaultValues)&&i._reset(t.values,i._options.resetOptions)},[t.values,i]),me.useEffect(()=>{i._state.mount||(i._updateValid(),i._state.mount=!0),i._state.watch&&(i._state.watch=!1,i._subjects.state.next({...i._formState})),i._removeUnmounted()}),e.current.formState=Js(r,i),e.current}const ho="/Online-Store/assets/google-icon-12dc077c.svg",fo=()=>{const t=Vn();return ce(go,{children:[M(po,{children:"or"}),M("div",{children:M(mo,{src:ho,onClick:async()=>{try{const r=new ee,n=js(),s=(await es(n,r)).user;t(Wn({name:s.displayName,email:s.email,id:s.uid}))}catch(r){alert(r)}},alt:"google-icon"})})]})},go=ie.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`,po=ie.div`
	position: relative;
	width: 360px;
	margin: 10px 0;
	text-align: center;

	&::before, 
	&::after {
		content: '';
		position: absolute;
		top: 50%;
		height: 1px;
		width: 46%;
		background-color: #c4afaf;
	}
	&::before {
		left: 0;
	}
	&::after {
		right: 0;
	}
`,mo=ie.img`
	cursor: pointer;
	border-radius: 12px;
	transition: .2s;

	&:hover {
		transform: translate(0px, -4px);
	}
`,bo=({title:t,onSubmit:e,registration:r})=>{var d,u,m;const{theme:n}=qn.useContext(Bn),{register:i,handleSubmit:s,formState:{errors:o}}=uo();return ce(_o,{children:[M(vo,{children:t}),ce(yo,{onSubmit:s(e),children:[r&&ce("div",{children:[M(At,{type:"text",placeholder:"Name",...i("name",{required:!0})}),((d=o.name)==null?void 0:d.type)==="required"&&M(Qe,{children:"Name is required"})]}),ce("div",{children:[M(At,{type:"email",placeholder:"Email",...i("email",{required:!0})}),((u=o.email)==null?void 0:u.type)==="required"&&M(Qe,{children:"Email is required"})]}),ce("div",{children:[M(At,{type:"password",placeholder:"Password",...i("password",{required:!0,minLength:6})}),((m=o.password)==null?void 0:m.type)==="required"&&M(Qe,{children:"Password is required"}),o.password&&o.password.type==="minLength"&&M(Qe,{children:"Password must be at least 6 characters long"})]}),M(Io,{type:"submit",mytheme:n,children:t}),r?ce("div",{children:["Already a user? ",M(nr,{to:"/login",children:"Log In"})]}):ce("div",{children:["Don't have an account? ",M(nr,{to:"/sign-up",children:"Sign up"})]})]}),M(fo,{})]})},_o=ie.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,vo=ie.h1`
  font-size: 36px;
  margin: 20px 0px;
`,yo=ie.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,At=ie.input`
  height: 53px;
  width: 360px;
  border-radius: 50px;
  border: none;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgb(232, 240, 254);
  font-size: 20px;
`,Io=ie.button`
  height: 53px;
  width: 360px;
  border-radius: 50px;
  background-color: ${t=>t.mytheme==="light"?"var(--light-accent)":"var(--dark-accent)"};
  color: ${t=>t.mytheme==="light"?"var(--dark)":"var(--light)"};
  font-size: 20px;

	&:hover {
		background-color: ${t=>t.mytheme==="light"?"var(--light-accent-hover)":"var(--dark-accent-hover)"};
	}
`,Qe=ie.div`
	margin-left: 10px;
	color: #ce1d1d;
`;export{bo as M,To as c,js as g,ko as s,Eo as u};
