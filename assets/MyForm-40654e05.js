import{R as Y,C as G,v as br,m as z,j as O,Q as pr,G as mr,S as Ar,I as Vr,r as _r,T as wr,L as He}from"./index-3520d43e.js";var ce=e=>e.type==="checkbox",se=e=>e instanceof Date,T=e=>e==null;const er=e=>typeof e=="object";var D=e=>!T(e)&&!Array.isArray(e)&&er(e)&&!se(e),Fr=e=>D(e)&&e.target?ce(e.target)?e.target.checked:e.target.value:e,kr=e=>e.substring(0,e.search(/\.\d+(\.|$)/))||e,Dr=(e,i)=>e.has(kr(i)),Sr=e=>{const i=e.constructor&&e.constructor.prototype;return D(i)&&i.hasOwnProperty("isPrototypeOf")},Ce=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function X(e){let i;const s=Array.isArray(e);if(e instanceof Date)i=new Date(e);else if(e instanceof Set)i=new Set(e);else if(!(Ce&&(e instanceof Blob||e instanceof FileList))&&(s||D(e)))if(i=s?[]:{},!Array.isArray(e)&&!Sr(e))i=e;else for(const t in e)i[t]=X(e[t]);else return e;return i}var fe=e=>Array.isArray(e)?e.filter(Boolean):[],F=e=>e===void 0,y=(e,i,s)=>{if(!i||!D(e))return s;const t=fe(i.split(/[,[\].]+?/)).reduce((a,o)=>T(a)?a:a[o],e);return F(t)||t===e?F(e[i])?s:e[i]:t};const Ge={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},P={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},H={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};Y.createContext(null);var Er=(e,i,s,t=!0)=>{const a={defaultValues:i._defaultValues};for(const o in e)Object.defineProperty(a,o,{get:()=>{const f=o;return i._proxyFormState[f]!==P.all&&(i._proxyFormState[f]=!t||P.all),s&&(s[f]=!0),e[f]}});return a},N=e=>D(e)&&!Object.keys(e).length,Lr=(e,i,s,t)=>{s(e);const{name:a,...o}=e;return N(o)||Object.keys(o).length>=Object.keys(i).length||Object.keys(o).find(f=>i[f]===(!t||P.all))},ke=e=>Array.isArray(e)?e:[e];function Or(e){const i=Y.useRef(e);i.current=e,Y.useEffect(()=>{const s=!e.disabled&&i.current.subject&&i.current.subject.subscribe({next:i.current.next});return()=>{s&&s.unsubscribe()}},[e.disabled])}var q=e=>typeof e=="string",Tr=(e,i,s,t,a)=>q(e)?(t&&i.watch.add(e),y(s,e,a)):Array.isArray(e)?e.map(o=>(t&&i.watch.add(o),y(s,o))):(t&&(i.watchAll=!0),s),Ue=e=>/^\w*$/.test(e),rr=e=>fe(e.replace(/["|']|\]/g,"").split(/\.|\[/));function A(e,i,s){let t=-1;const a=Ue(i)?[i]:rr(i),o=a.length,f=o-1;for(;++t<o;){const m=a[t];let b=s;if(t!==f){const L=e[m];b=D(L)||Array.isArray(L)?L:isNaN(+a[t+1])?{}:[]}e[m]=b,e=e[m]}return e}var Cr=(e,i,s,t,a)=>i?{...s[e],types:{...s[e]&&s[e].types?s[e].types:{},[t]:a||!0}}:{};const Te=(e,i,s)=>{for(const t of s||Object.keys(e)){const a=y(e,t);if(a){const{_f:o,...f}=a;if(o&&i(o.name)){if(o.ref.focus){o.ref.focus();break}else if(o.refs&&o.refs[0].focus){o.refs[0].focus();break}}else D(f)&&Te(f,i)}}};var je=e=>({isOnSubmit:!e||e===P.onSubmit,isOnBlur:e===P.onBlur,isOnChange:e===P.onChange,isOnAll:e===P.all,isOnTouch:e===P.onTouched}),ze=(e,i,s)=>!s&&(i.watchAll||i.watch.has(e)||[...i.watch].some(t=>e.startsWith(t)&&/^\.\w+/.test(e.slice(t.length)))),Ur=(e,i,s)=>{const t=fe(y(e,s));return A(t,"root",i[s]),A(e,s,t),e},ie=e=>typeof e=="boolean",Me=e=>e.type==="file",K=e=>typeof e=="function",ge=e=>{if(!Ce)return!1;const i=e?e.ownerDocument:0;return e instanceof(i&&i.defaultView?i.defaultView.HTMLElement:HTMLElement)},he=e=>q(e),Ne=e=>e.type==="radio",ve=e=>e instanceof RegExp;const Ke={value:!1,isValid:!1},Qe={value:!0,isValid:!0};var tr=e=>{if(Array.isArray(e)){if(e.length>1){const i=e.filter(s=>s&&s.checked&&!s.disabled).map(s=>s.value);return{value:i,isValid:!!i.length}}return e[0].checked&&!e[0].disabled?e[0].attributes&&!F(e[0].attributes.value)?F(e[0].value)||e[0].value===""?Qe:{value:e[0].value,isValid:!0}:Qe:Ke}return Ke};const Je={isValid:!1,value:null};var sr=e=>Array.isArray(e)?e.reduce((i,s)=>s&&s.checked&&!s.disabled?{isValid:!0,value:s.value}:i,Je):Je;function Xe(e,i,s="validate"){if(he(e)||Array.isArray(e)&&e.every(he)||ie(e)&&!e)return{type:s,message:he(e)?e:"",ref:i}}var te=e=>D(e)&&!ve(e)?e:{value:e,message:""},Ye=async(e,i,s,t,a)=>{const{ref:o,refs:f,required:m,maxLength:b,minLength:L,min:ee,max:k,pattern:x,validate:j,name:U,valueAsNumber:pe,mount:de,disabled:me}=e._f,g=y(i,U);if(!de||me)return{};const R=f?f[0]:o,W=p=>{t&&R.reportValidity&&(R.setCustomValidity(ie(p)?"":p||""),R.reportValidity())},S={},ne=Ne(o),ae=ce(o),Ae=ne||ae,B=(pe||Me(o))&&F(o.value)&&F(g)||ge(o)&&o.value===""||g===""||Array.isArray(g)&&!g.length,Q=Cr.bind(null,U,s,S),$=(p,v,_,C=H.maxLength,M=H.minLength)=>{const I=p?v:_;S[U]={type:p?C:M,message:I,ref:o,...Q(p?C:M,I)}};if(a?!Array.isArray(g)||!g.length:m&&(!Ae&&(B||T(g))||ie(g)&&!g||ae&&!tr(f).isValid||ne&&!sr(f).isValid)){const{value:p,message:v}=he(m)?{value:!!m,message:m}:te(m);if(p&&(S[U]={type:H.required,message:v,ref:R,...Q(H.required,v)},!s))return W(v),S}if(!B&&(!T(ee)||!T(k))){let p,v;const _=te(k),C=te(ee);if(!T(g)&&!isNaN(g)){const M=o.valueAsNumber||g&&+g;T(_.value)||(p=M>_.value),T(C.value)||(v=M<C.value)}else{const M=o.valueAsDate||new Date(g),I=oe=>new Date(new Date().toDateString()+" "+oe),J=o.type=="time",le=o.type=="week";q(_.value)&&g&&(p=J?I(g)>I(_.value):le?g>_.value:M>new Date(_.value)),q(C.value)&&g&&(v=J?I(g)<I(C.value):le?g<C.value:M<new Date(C.value))}if((p||v)&&($(!!p,_.message,C.message,H.max,H.min),!s))return W(S[U].message),S}if((b||L)&&!B&&(q(g)||a&&Array.isArray(g))){const p=te(b),v=te(L),_=!T(p.value)&&g.length>+p.value,C=!T(v.value)&&g.length<+v.value;if((_||C)&&($(_,p.message,v.message),!s))return W(S[U].message),S}if(x&&!B&&q(g)){const{value:p,message:v}=te(x);if(ve(p)&&!g.match(p)&&(S[U]={type:H.pattern,message:v,ref:o,...Q(H.pattern,v)},!s))return W(v),S}if(j){if(K(j)){const p=await j(g,i),v=Xe(p,R);if(v&&(S[U]={...v,...Q(H.validate,v.message)},!s))return W(v.message),S}else if(D(j)){let p={};for(const v in j){if(!N(p)&&!s)break;const _=Xe(await j[v](g,i),R,v);_&&(p={..._,...Q(v,_.message)},W(_.message),s&&(S[U]=p))}if(!N(p)&&(S[U]={ref:R,...p},!s))return S}}return W(!0),S};function Mr(e,i){const s=i.slice(0,-1).length;let t=0;for(;t<s;)e=F(e)?t++:e[i[t++]];return e}function Nr(e){for(const i in e)if(!F(e[i]))return!1;return!0}function E(e,i){const s=Array.isArray(i)?i:Ue(i)?[i]:rr(i),t=s.length===1?e:Mr(e,s),a=s.length-1,o=s[a];return t&&delete t[o],a!==0&&(D(t)&&N(t)||Array.isArray(t)&&Nr(t))&&E(e,s.slice(0,-1)),e}function De(){let e=[];return{get observers(){return e},next:a=>{for(const o of e)o.next&&o.next(a)},subscribe:a=>(e.push(a),{unsubscribe:()=>{e=e.filter(o=>o!==a)}}),unsubscribe:()=>{e=[]}}}var xe=e=>T(e)||!er(e);function Z(e,i){if(xe(e)||xe(i))return e===i;if(se(e)&&se(i))return e.getTime()===i.getTime();const s=Object.keys(e),t=Object.keys(i);if(s.length!==t.length)return!1;for(const a of s){const o=e[a];if(!t.includes(a))return!1;if(a!=="ref"){const f=i[a];if(se(o)&&se(f)||D(o)&&D(f)||Array.isArray(o)&&Array.isArray(f)?!Z(o,f):o!==f)return!1}}return!0}var ir=e=>e.type==="select-multiple",Rr=e=>Ne(e)||ce(e),Se=e=>ge(e)&&e.isConnected,nr=e=>{for(const i in e)if(K(e[i]))return!0;return!1};function be(e,i={}){const s=Array.isArray(e);if(D(e)||s)for(const t in e)Array.isArray(e[t])||D(e[t])&&!nr(e[t])?(i[t]=Array.isArray(e[t])?[]:{},be(e[t],i[t])):T(e[t])||(i[t]=!0);return i}function ar(e,i,s){const t=Array.isArray(e);if(D(e)||t)for(const a in e)Array.isArray(e[a])||D(e[a])&&!nr(e[a])?F(i)||xe(s[a])?s[a]=Array.isArray(e[a])?be(e[a],[]):{...be(e[a])}:ar(e[a],T(i)?{}:i[a],s[a]):s[a]=!Z(e[a],i[a]);return s}var Ee=(e,i)=>ar(e,i,be(i)),lr=(e,{valueAsNumber:i,valueAsDate:s,setValueAs:t})=>F(e)?e:i?e===""?NaN:e&&+e:s&&q(e)?new Date(e):t?t(e):e;function Le(e){const i=e.ref;if(!(e.refs?e.refs.every(s=>s.disabled):i.disabled))return Me(i)?i.files:Ne(i)?sr(e.refs).value:ir(i)?[...i.selectedOptions].map(({value:s})=>s):ce(i)?tr(e.refs).value:lr(F(i.value)?e.ref.value:i.value,e)}var Pr=(e,i,s,t)=>{const a={};for(const o of e){const f=y(i,o);f&&A(a,o,f._f)}return{criteriaMode:s,names:[...e],fields:a,shouldUseNativeValidation:t}},ue=e=>F(e)?e:ve(e)?e.source:D(e)?ve(e.value)?e.value.source:e.value:e,Br=e=>e.mount&&(e.required||e.min||e.max||e.maxLength||e.minLength||e.pattern||e.validate);function Ze(e,i,s){const t=y(e,s);if(t||Ue(s))return{error:t,name:s};const a=s.split(".");for(;a.length;){const o=a.join("."),f=y(i,o),m=y(e,o);if(f&&!Array.isArray(f)&&s!==o)return{name:s};if(m&&m.type)return{name:o,error:m};a.pop()}return{name:s}}var Ir=(e,i,s,t,a)=>a.isOnAll?!1:!s&&a.isOnTouch?!(i||e):(s?t.isOnBlur:a.isOnBlur)?!e:(s?t.isOnChange:a.isOnChange)?e:!0,qr=(e,i)=>!fe(y(e,i)).length&&E(e,i);const Wr={mode:P.onSubmit,reValidateMode:P.onChange,shouldFocusError:!0};function $r(e={},i){let s={...Wr,...e},t={submitCount:0,isDirty:!1,isLoading:K(s.defaultValues),isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},a={},o=D(s.defaultValues)||D(s.values)?X(s.defaultValues||s.values)||{}:{},f=s.shouldUnregister?{}:X(o),m={action:!1,mount:!1,watch:!1},b={mount:new Set,unMount:new Set,array:new Set,watch:new Set},L,ee=0;const k={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},x={values:De(),array:De(),state:De()},j=e.resetOptions&&e.resetOptions.keepDirtyValues,U=je(s.mode),pe=je(s.reValidateMode),de=s.criteriaMode===P.all,me=r=>n=>{clearTimeout(ee),ee=setTimeout(r,n)},g=async r=>{if(k.isValid||r){const n=s.resolver?N((await B()).errors):await $(a,!0);n!==t.isValid&&x.state.next({isValid:n})}},R=r=>k.isValidating&&x.state.next({isValidating:r}),W=(r,n=[],l,d,c=!0,u=!0)=>{if(d&&l){if(m.action=!0,u&&Array.isArray(y(a,r))){const h=l(y(a,r),d.argA,d.argB);c&&A(a,r,h)}if(u&&Array.isArray(y(t.errors,r))){const h=l(y(t.errors,r),d.argA,d.argB);c&&A(t.errors,r,h),qr(t.errors,r)}if(k.touchedFields&&u&&Array.isArray(y(t.touchedFields,r))){const h=l(y(t.touchedFields,r),d.argA,d.argB);c&&A(t.touchedFields,r,h)}k.dirtyFields&&(t.dirtyFields=Ee(o,f)),x.state.next({name:r,isDirty:v(r,n),dirtyFields:t.dirtyFields,errors:t.errors,isValid:t.isValid})}else A(f,r,n)},S=(r,n)=>{A(t.errors,r,n),x.state.next({errors:t.errors})},ne=(r,n,l,d)=>{const c=y(a,r);if(c){const u=y(f,r,F(l)?y(o,r):l);F(u)||d&&d.defaultChecked||n?A(f,r,n?u:Le(c._f)):M(r,u),m.mount&&g()}},ae=(r,n,l,d,c)=>{let u=!1,h=!1;const V={name:r};if(!l||d){k.isDirty&&(h=t.isDirty,t.isDirty=V.isDirty=v(),u=h!==V.isDirty);const w=Z(y(o,r),n);h=y(t.dirtyFields,r),w?E(t.dirtyFields,r):A(t.dirtyFields,r,!0),V.dirtyFields=t.dirtyFields,u=u||k.dirtyFields&&h!==!w}if(l){const w=y(t.touchedFields,r);w||(A(t.touchedFields,r,l),V.touchedFields=t.touchedFields,u=u||k.touchedFields&&w!==l)}return u&&c&&x.state.next(V),u?V:{}},Ae=(r,n,l,d)=>{const c=y(t.errors,r),u=k.isValid&&ie(n)&&t.isValid!==n;if(e.delayError&&l?(L=me(()=>S(r,l)),L(e.delayError)):(clearTimeout(ee),L=null,l?A(t.errors,r,l):E(t.errors,r)),(l?!Z(c,l):c)||!N(d)||u){const h={...d,...u&&ie(n)?{isValid:n}:{},errors:t.errors,name:r};t={...t,...h},x.state.next(h)}R(!1)},B=async r=>s.resolver(f,s.context,Pr(r||b.mount,a,s.criteriaMode,s.shouldUseNativeValidation)),Q=async r=>{const{errors:n}=await B();if(r)for(const l of r){const d=y(n,l);d?A(t.errors,l,d):E(t.errors,l)}else t.errors=n;return n},$=async(r,n,l={valid:!0})=>{for(const d in r){const c=r[d];if(c){const{_f:u,...h}=c;if(u){const V=b.array.has(u.name),w=await Ye(c,f,de,s.shouldUseNativeValidation&&!n,V);if(w[u.name]&&(l.valid=!1,n))break;!n&&(y(w,u.name)?V?Ur(t.errors,w,u.name):A(t.errors,u.name,w[u.name]):E(t.errors,u.name))}h&&await $(h,n,l)}}return l.valid},p=()=>{for(const r of b.unMount){const n=y(a,r);n&&(n._f.refs?n._f.refs.every(l=>!Se(l)):!Se(n._f.ref))&&Ve(r)}b.unMount=new Set},v=(r,n)=>(r&&n&&A(f,r,n),!Z(Re(),o)),_=(r,n,l)=>Tr(r,b,{...m.mount?f:F(n)?o:q(r)?{[r]:n}:n},l,n),C=r=>fe(y(m.mount?f:o,r,e.shouldUnregister?y(o,r,[]):[])),M=(r,n,l={})=>{const d=y(a,r);let c=n;if(d){const u=d._f;u&&(!u.disabled&&A(f,r,lr(n,u)),c=ge(u.ref)&&T(n)?"":n,ir(u.ref)?[...u.ref.options].forEach(h=>h.selected=c.includes(h.value)):u.refs?ce(u.ref)?u.refs.length>1?u.refs.forEach(h=>(!h.defaultChecked||!h.disabled)&&(h.checked=Array.isArray(c)?!!c.find(V=>V===h.value):c===h.value)):u.refs[0]&&(u.refs[0].checked=!!c):u.refs.forEach(h=>h.checked=h.value===c):Me(u.ref)?u.ref.value="":(u.ref.value=c,u.ref.type||x.values.next({name:r,values:{...f}})))}(l.shouldDirty||l.shouldTouch)&&ae(r,c,l.shouldTouch,l.shouldDirty,!0),l.shouldValidate&&oe(r)},I=(r,n,l)=>{for(const d in n){const c=n[d],u=`${r}.${d}`,h=y(a,u);(b.array.has(r)||!xe(c)||h&&!h._f)&&!se(c)?I(u,c,l):M(u,c,l)}},J=(r,n,l={})=>{const d=y(a,r),c=b.array.has(r),u=X(n);A(f,r,u),c?(x.array.next({name:r,values:{...f}}),(k.isDirty||k.dirtyFields)&&l.shouldDirty&&x.state.next({name:r,dirtyFields:Ee(o,f),isDirty:v(r,u)})):d&&!d._f&&!T(u)?I(r,u,l):M(r,u,l),ze(r,b)&&x.state.next({...t}),x.values.next({name:r,values:{...f}}),!m.mount&&i()},le=async r=>{const n=r.target;let l=n.name,d=!0;const c=y(a,l),u=()=>n.type?Le(c._f):Fr(r);if(c){let h,V;const w=u(),re=r.type===Ge.BLUR||r.type===Ge.FOCUS_OUT,gr=!Br(c._f)&&!s.resolver&&!y(t.errors,l)&&!c._f.deps||Ir(re,y(t.touchedFields,l),t.isSubmitted,pe,U),we=ze(l,b,re);A(f,l,w),re?(c._f.onBlur&&c._f.onBlur(r),L&&L(0)):c._f.onChange&&c._f.onChange(r);const Fe=ae(l,w,re,!1),vr=!N(Fe)||we;if(!re&&x.values.next({name:l,type:r.type,values:{...f}}),gr)return k.isValid&&g(),vr&&x.state.next({name:l,...we?{}:Fe});if(!re&&we&&x.state.next({...t}),R(!0),s.resolver){const{errors:We}=await B([l]),xr=Ze(t.errors,a,l),$e=Ze(We,a,xr.name||l);h=$e.error,l=$e.name,V=N(We)}else h=(await Ye(c,f,de,s.shouldUseNativeValidation))[l],d=isNaN(w)||w===y(f,l,w),d&&(h?V=!1:k.isValid&&(V=await $(a,!0)));d&&(c._f.deps&&oe(c._f.deps),Ae(l,V,h,Fe))}},oe=async(r,n={})=>{let l,d;const c=ke(r);if(R(!0),s.resolver){const u=await Q(F(r)?r:c);l=N(u),d=r?!c.some(h=>y(u,h)):l}else r?(d=(await Promise.all(c.map(async u=>{const h=y(a,u);return await $(h&&h._f?{[u]:h}:h)}))).every(Boolean),!(!d&&!t.isValid)&&g()):d=l=await $(a);return x.state.next({...!q(r)||k.isValid&&l!==t.isValid?{}:{name:r},...s.resolver||!r?{isValid:l}:{},errors:t.errors,isValidating:!1}),n.shouldFocus&&!d&&Te(a,u=>u&&y(t.errors,u),r?c:b.mount),d},Re=r=>{const n={...o,...m.mount?f:{}};return F(r)?n:q(r)?y(n,r):r.map(l=>y(n,l))},Pe=(r,n)=>({invalid:!!y((n||t).errors,r),isDirty:!!y((n||t).dirtyFields,r),isTouched:!!y((n||t).touchedFields,r),error:y((n||t).errors,r)}),or=r=>{r&&ke(r).forEach(n=>E(t.errors,n)),x.state.next({errors:r?t.errors:{}})},ur=(r,n,l)=>{const d=(y(a,r,{_f:{}})._f||{}).ref;A(t.errors,r,{...n,ref:d}),x.state.next({name:r,errors:t.errors,isValid:!1}),l&&l.shouldFocus&&d&&d.focus&&d.focus()},cr=(r,n)=>K(r)?x.values.subscribe({next:l=>r(_(void 0,n),l)}):_(r,n,!0),Ve=(r,n={})=>{for(const l of r?ke(r):b.mount)b.mount.delete(l),b.array.delete(l),n.keepValue||(E(a,l),E(f,l)),!n.keepError&&E(t.errors,l),!n.keepDirty&&E(t.dirtyFields,l),!n.keepTouched&&E(t.touchedFields,l),!s.shouldUnregister&&!n.keepDefaultValue&&E(o,l);x.values.next({values:{...f}}),x.state.next({...t,...n.keepDirty?{isDirty:v()}:{}}),!n.keepIsValid&&g()},_e=(r,n={})=>{let l=y(a,r);const d=ie(n.disabled);return A(a,r,{...l||{},_f:{...l&&l._f?l._f:{ref:{name:r}},name:r,mount:!0,...n}}),b.mount.add(r),l?d&&A(f,r,n.disabled?void 0:y(f,r,Le(l._f))):ne(r,!0,n.value),{...d?{disabled:n.disabled}:{},...s.shouldUseNativeValidation?{required:!!n.required,min:ue(n.min),max:ue(n.max),minLength:ue(n.minLength),maxLength:ue(n.maxLength),pattern:ue(n.pattern)}:{},name:r,onChange:le,onBlur:le,ref:c=>{if(c){_e(r,n),l=y(a,r);const u=F(c.value)&&c.querySelectorAll&&c.querySelectorAll("input,select,textarea")[0]||c,h=Rr(u),V=l._f.refs||[];if(h?V.find(w=>w===u):u===l._f.ref)return;A(a,r,{_f:{...l._f,...h?{refs:[...V.filter(Se),u,...Array.isArray(y(o,r))?[{}]:[]],ref:{type:u.type,name:r}}:{ref:u}}}),ne(r,!1,void 0,u)}else l=y(a,r,{}),l._f&&(l._f.mount=!1),(s.shouldUnregister||n.shouldUnregister)&&!(Dr(b.array,r)&&m.action)&&b.unMount.add(r)}}},Be=()=>s.shouldFocusError&&Te(a,r=>r&&y(t.errors,r),b.mount),fr=(r,n)=>async l=>{l&&(l.preventDefault&&l.preventDefault(),l.persist&&l.persist());let d=X(f);if(x.state.next({isSubmitting:!0}),s.resolver){const{errors:c,values:u}=await B();t.errors=c,d=u}else await $(a);E(t.errors,"root"),N(t.errors)?(x.state.next({errors:{}}),await r(d,l)):(n&&await n({...t.errors},l),Be(),setTimeout(Be)),x.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:N(t.errors),submitCount:t.submitCount+1,errors:t.errors})},dr=(r,n={})=>{y(a,r)&&(F(n.defaultValue)?J(r,y(o,r)):(J(r,n.defaultValue),A(o,r,n.defaultValue)),n.keepTouched||E(t.touchedFields,r),n.keepDirty||(E(t.dirtyFields,r),t.isDirty=n.defaultValue?v(r,y(o,r)):v()),n.keepError||(E(t.errors,r),k.isValid&&g()),x.state.next({...t}))},Ie=(r,n={})=>{const l=r||o,d=X(l),c=r&&!N(r)?d:o;if(n.keepDefaultValues||(o=l),!n.keepValues){if(n.keepDirtyValues||j)for(const u of b.mount)y(t.dirtyFields,u)?A(c,u,y(f,u)):J(u,y(c,u));else{if(Ce&&F(r))for(const u of b.mount){const h=y(a,u);if(h&&h._f){const V=Array.isArray(h._f.refs)?h._f.refs[0]:h._f.ref;if(ge(V)){const w=V.closest("form");if(w){w.reset();break}}}}a={}}f=e.shouldUnregister?n.keepDefaultValues?X(o):{}:d,x.array.next({values:{...c}}),x.values.next({values:{...c}})}b={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!m.mount&&i(),m.mount=!k.isValid||!!n.keepIsValid,m.watch=!!e.shouldUnregister,x.state.next({submitCount:n.keepSubmitCount?t.submitCount:0,isDirty:n.keepDirty?t.isDirty:!!(n.keepDefaultValues&&!Z(r,o)),isSubmitted:n.keepIsSubmitted?t.isSubmitted:!1,dirtyFields:n.keepDirtyValues?t.dirtyFields:n.keepDefaultValues&&r?Ee(o,r):{},touchedFields:n.keepTouched?t.touchedFields:{},errors:n.keepErrors?t.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},qe=(r,n)=>Ie(K(r)?r(f):r,n),yr=(r,n={})=>{const l=y(a,r),d=l&&l._f;if(d){const c=d.refs?d.refs[0]:d.ref;c.focus&&(c.focus(),n.shouldSelect&&c.select())}},hr=r=>{t={...t,...r}};return K(s.defaultValues)&&s.defaultValues().then(r=>{qe(r,s.resetOptions),x.state.next({isLoading:!1})}),{control:{register:_e,unregister:Ve,getFieldState:Pe,_executeSchema:B,_getWatch:_,_getDirty:v,_updateValid:g,_removeUnmounted:p,_updateFieldArray:W,_getFieldArray:C,_reset:Ie,_updateFormState:hr,_subjects:x,_proxyFormState:k,get _fields(){return a},get _formValues(){return f},get _state(){return m},set _state(r){m=r},get _defaultValues(){return o},get _names(){return b},set _names(r){b=r},get _formState(){return t},set _formState(r){t=r},get _options(){return s},set _options(r){s={...s,...r}}},trigger:oe,register:_e,handleSubmit:fr,watch:cr,setValue:J,getValues:Re,reset:qe,resetField:dr,clearErrors:or,unregister:Ve,setError:ur,setFocus:yr,getFieldState:Pe}}function Hr(e={}){const i=Y.useRef(),[s,t]=Y.useState({isDirty:!1,isValidating:!1,isLoading:K(e.defaultValues),isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:K(e.defaultValues)?void 0:e.defaultValues});i.current||(i.current={...$r(e,()=>t(o=>({...o}))),formState:s});const a=i.current.control;return a._options=e,Or({subject:a._subjects.state,next:o=>{Lr(o,a._proxyFormState,a._updateFormState,!0)&&t({...a._formState})}}),Y.useEffect(()=>{e.values&&!Z(e.values,a._defaultValues)&&a._reset(e.values,a._options.resetOptions)},[e.values,a]),Y.useEffect(()=>{a._state.mount||(a._updateValid(),a._state.mount=!0),a._state.watch&&(a._state.watch=!1,a._subjects.state.next({...a._formState})),a._removeUnmounted()}),i.current.formState=Er(s,a),i.current}const Gr="/Online-Store/assets/google-icon-12dc077c.svg",jr=()=>{const e=br();return z(zr,{children:[O(Kr,{children:"or"}),O("div",{children:O(Qr,{src:Gr,onClick:async()=>{try{const s=new pr,t=mr(),o=(await Ar(t,s)).user;e(Vr({name:o.displayName,email:o.email,id:o.uid}))}catch(s){alert(s)}},alt:"google-icon"})})]})},zr=G.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`,Kr=G.div`
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
`,Qr=G.img`
	cursor: pointer;
	border-radius: 12px;
	transition: .2s;

	&:hover {
		transform: translate(0px, -4px);
	}
`,rt=({title:e,onSubmit:i,registration:s})=>{var m,b,L;const{theme:t}=_r.useContext(wr),{register:a,handleSubmit:o,formState:{errors:f}}=Hr();return z(Jr,{children:[O(Xr,{children:e}),z(Yr,{onSubmit:o(i),children:[s&&z("div",{children:[O(Oe,{type:"text",placeholder:"Name",...a("name",{required:!0})}),((m=f.name)==null?void 0:m.type)==="required"&&O(ye,{children:"Name is required"})]}),z("div",{children:[O(Oe,{type:"email",placeholder:"Email",...a("email",{required:!0})}),((b=f.email)==null?void 0:b.type)==="required"&&O(ye,{children:"Email is required"})]}),z("div",{children:[O(Oe,{type:"password",placeholder:"Password",...a("password",{required:!0,minLength:6})}),((L=f.password)==null?void 0:L.type)==="required"&&O(ye,{children:"Password is required"}),f.password&&f.password.type==="minLength"&&O(ye,{children:"Password must be at least 6 characters long"})]}),O(Zr,{type:"submit",mytheme:t,children:e}),s?z("div",{children:["Already a user? ",O(He,{to:"/login",children:"Log In"})]}):z("div",{children:["Don't have an account? ",O(He,{to:"/sign-up",children:"Sign up"})]})]}),O(jr,{})]})},Jr=G.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`,Xr=G.h1`
  font-size: 36px;
  margin: 20px 0px;
`,Yr=G.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`,Oe=G.input`
  height: 53px;
  width: 360px;
  border-radius: 50px;
  border: none;
  padding: 20px;
  box-sizing: border-box;
  background-color: rgb(232, 240, 254);
  font-size: 20px;
`,Zr=G.button`
  height: 53px;
  width: 360px;
  border-radius: 50px;
  background-color: ${e=>e.mytheme==="light"?"var(--light-accent)":"var(--dark-accent)"};
  color: ${e=>e.mytheme==="light"?"var(--dark)":"var(--light)"};
  font-size: 20px;

	&:hover {
		background-color: ${e=>e.mytheme==="light"?"var(--light-accent-hover)":"var(--dark-accent-hover)"};
	}
`,ye=G.div`
	margin-left: 10px;
	color: #ce1d1d;
`;export{rt as M};