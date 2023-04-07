import{c as ue,j as t,g as Me,a as Le,s as K,b as pe,_ as u,d as Pe,r as v,u as Ee,e as fe,f as he,h as He,i as Te,k as Oe,l as ke,m as c,n as X,o as $e,p as Ie,q as _e,t as Be,v as Ne,w as De,x as je,y as W,z as le,P as Ue,L as qe,A as We,M as Z,B as Xe,C as g,D as Ke,E as Ye}from"./index-b0a3d99b.js";import{d as Ge}from"./ArrowBackIos-ee68288a.js";const Je={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Qe=Je,Ze=ue(t("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),en=ue(t("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function nn(e){return Le("MuiRating",e)}const tn=Me("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),B=tn,on=["value"],an=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function sn(e,n,o){return e<n?n:e>o?o:e}function rn(e){const n=e.toString().split(".")[1];return n?n.length:0}function ee(e,n){if(e==null)return e;const o=Math.round(e/n)*n;return Number(o.toFixed(rn(n)))}const ln=e=>{const{classes:n,size:o,readOnly:i,disabled:S,emptyValueFocused:F,focusVisible:x}=e,y={root:["root",`size${pe(o)}`,S&&"disabled",x&&"focusVisible",i&&"readOnly"],label:["label","pristine"],labelEmptyValue:[F&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return $e(y,nn,n)},cn=K("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[{[`& .${B.visuallyHidden}`]:n.visuallyHidden},n.root,n[`size${pe(o.size)}`],o.readOnly&&n.readOnly]}})(({theme:e,ownerState:n})=>u({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${B.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${B.focusVisible} .${B.iconActive}`]:{outline:"1px solid #999"},[`& .${B.visuallyHidden}`]:Qe},n.size==="small"&&{fontSize:e.typography.pxToRem(18)},n.size==="large"&&{fontSize:e.typography.pxToRem(30)},n.readOnly&&{pointerEvents:"none"})),ge=K("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},n)=>[n.label,e.emptyValueFocused&&n.labelEmptyValueActive]})(({ownerState:e})=>u({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),dn=K("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.icon,o.iconEmpty&&n.iconEmpty,o.iconFilled&&n.iconFilled,o.iconHover&&n.iconHover,o.iconFocus&&n.iconFocus,o.iconActive&&n.iconActive]}})(({theme:e,ownerState:n})=>u({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},n.iconActive&&{transform:"scale(1.2)"},n.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),un=K("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>Pe(e)&&e!=="iconActive",overridesResolver:(e,n)=>{const{iconActive:o}=e;return[n.decimal,o&&n.iconActive]}})(({iconActive:e})=>u({position:"relative"},e&&{transform:"scale(1.2)"}));function pn(e){const n=fe(e,on);return t("span",u({},n))}function ce(e){const{classes:n,disabled:o,emptyIcon:i,focus:S,getLabelText:F,highlightSelectedOnly:x,hover:y,icon:M,IconContainerComponent:p,isActive:m,itemValue:l,labelProps:C,name:f,onBlur:s,onChange:L,onClick:P,onFocus:N,readOnly:D,ownerState:d,ratingValue:b,ratingValueRounded:Y}=e,E=x?l===b:l<=b,j=l<=y,H=l<=S,G=l===Y,$=he(),A=t(dn,{as:p,value:l,className:X(n.icon,E?n.iconFilled:n.iconEmpty,j&&n.iconHover,H&&n.iconFocus,m&&n.iconActive),ownerState:u({},d,{iconEmpty:!E,iconFilled:E,iconHover:j,iconFocus:H,iconActive:m}),children:i&&!E?i:M});return D?t("span",u({},C,{children:A})):c(v.Fragment,{children:[c(ge,u({ownerState:u({},d,{emptyValueFocused:void 0}),htmlFor:$},C,{children:[A,t("span",{className:n.visuallyHidden,children:F(l)})]})),t("input",{className:n.visuallyHidden,onFocus:N,onBlur:s,onChange:L,onClick:P,disabled:o,value:l,id:$,type:"radio",name:f,checked:G})]})}const fn=t(Ze,{fontSize:"inherit"}),hn=t(en,{fontSize:"inherit"});function gn(e){return`${e} Star${e!==1?"s":""}`}const mn=v.forwardRef(function(n,o){const i=Ee({name:"MuiRating",props:n}),{className:S,defaultValue:F=null,disabled:x=!1,emptyIcon:y=hn,emptyLabelText:M="Empty",getLabelText:p=gn,highlightSelectedOnly:m=!1,icon:l=fn,IconContainerComponent:C=pn,max:f=5,name:s,onChange:L,onChangeActive:P,onMouseLeave:N,onMouseMove:D,precision:d=1,readOnly:b=!1,size:Y="medium",value:E}=i,j=fe(i,an),H=he(s),[G,$]=He({controlled:E,default:F,name:"Rating"}),A=ee(G,d),ve=Te(),[{hover:w,focus:U},I]=v.useState({hover:-1,focus:-1});let T=A;w!==-1&&(T=w),U!==-1&&(T=U);const{isFocusVisibleRef:oe,onBlur:xe,onFocus:ye,ref:be}=Oe(),[we,J]=v.useState(!1),ae=v.useRef(),Re=ke(be,ae,o),Fe=a=>{D&&D(a);const r=ae.current,{right:h,left:q}=r.getBoundingClientRect(),{width:O}=r.firstChild.getBoundingClientRect();let k;ve.direction==="rtl"?k=(h-a.clientX)/(O*f):k=(a.clientX-q)/(O*f);let R=ee(f*k+d/2,d);R=sn(R,d,f),I(V=>V.hover===R&&V.focus===R?V:{hover:R,focus:R}),J(!1),P&&w!==R&&P(a,R)},Ce=a=>{N&&N(a);const r=-1;I({hover:r,focus:r}),P&&w!==r&&P(a,r)},se=a=>{let r=a.target.value===""?null:parseFloat(a.target.value);w!==-1&&(r=w),$(r),L&&L(a,r)},ze=a=>{a.clientX===0&&a.clientY===0||(I({hover:-1,focus:-1}),$(null),L&&parseFloat(a.target.value)===A&&L(a,null))},Se=a=>{ye(a),oe.current===!0&&J(!0);const r=parseFloat(a.target.value);I(h=>({hover:h.hover,focus:r}))},Ae=a=>{if(w!==-1)return;xe(a),oe.current===!1&&J(!1);const r=-1;I(h=>({hover:h.hover,focus:r}))},[Ve,re]=v.useState(!1),_=u({},i,{defaultValue:F,disabled:x,emptyIcon:y,emptyLabelText:M,emptyValueFocused:Ve,focusVisible:we,getLabelText:p,icon:l,IconContainerComponent:C,max:f,precision:d,readOnly:b,size:Y}),z=ln(_);return c(cn,u({ref:Re,onMouseMove:Fe,onMouseLeave:Ce,className:X(z.root,S,b&&"MuiRating-readOnly"),ownerState:_,role:b?"img":null,"aria-label":b?p(T):null},j,{children:[Array.from(new Array(f)).map((a,r)=>{const h=r+1,q={classes:z,disabled:x,emptyIcon:y,focus:U,getLabelText:p,highlightSelectedOnly:m,hover:w,icon:l,IconContainerComponent:C,name:H,onBlur:Ae,onChange:se,onClick:ze,onFocus:Se,ratingValue:T,ratingValueRounded:A,readOnly:b,ownerState:_},O=h===Math.ceil(T)&&(w!==-1||U!==-1);if(d<1){const k=Array.from(new Array(1/d));return t(un,{className:X(z.decimal,O&&z.iconActive),ownerState:_,iconActive:O,children:k.map((R,V)=>{const Q=ee(h-1+(V+1)*d,d);return t(ce,u({},q,{isActive:!1,itemValue:Q,labelProps:{style:k.length-1===V?{}:{width:Q===T?`${(V+1)*d*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),Q)})},h)}return t(ce,u({},q,{isActive:O,itemValue:h}),h)}),!b&&!x&&c(ge,{className:X(z.label,z.labelEmptyValue),ownerState:_,children:[t("input",{className:z.visuallyHidden,value:"",id:`${H}-empty`,type:"radio",name:H,checked:A==null,onFocus:()=>re(!0),onBlur:()=>re(!1),onChange:se}),t("span",{className:z.visuallyHidden,children:M})]})]}))}),vn=mn,xn="/Online-Store/assets/delivery-parcel-9e0f9f56.svg",yn="/Online-Store/assets/delivery-truck-241edd6e.svg",bn="/Online-Store/assets/store-search-a399d163.svg";var te={},wn=_e;Object.defineProperty(te,"__esModule",{value:!0});var me=te.default=void 0,Rn=wn(Ie()),Fn=Be,Cn=(0,Rn.default)((0,Fn.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");me=te.default=Cn;const Tn=()=>{var l,C,f;const e=Ne(),n=De(),o=je(),i=W(s=>s.products.currentProduct),S=W(s=>s.cart.cartProducts),F=W(s=>s.cart.totalPrice),x=W(s=>s.user.isAuthorized),y=S.some(s=>s.id===(i==null?void 0:i.id));v.useEffect(()=>(e(le(n.id)),()=>e(le(null))),[]);function M(){y||(e(Ke(F+i.price)),e(Ye(i)))}const p=v.useRef(),m=v.useRef();return v.useEffect(()=>{function s(){window.innerWidth>768?p.current&&m.current&&(p.current.style.display="none",m.current.style.display="block"):p.current&&m.current&&(p.current.style.display="block",m.current.style.display="none")}return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[i]),i!=null&&i.id?c("div",{children:[t(qe,{to:"/",children:t(Ge,{sx:{fontSize:"28px"}})}),c(zn,{children:[c("div",{children:[t(de,{ref:p,children:i==null?void 0:i.title}),t(Sn,{children:t(An,{src:i==null?void 0:i.image,alt:""})})]}),c("div",{children:[t(de,{ref:m,children:i==null?void 0:i.title}),t(Vn,{children:We(i==null?void 0:i.price)}),c(Mn,{children:[t(vn,{value:(l=i==null?void 0:i.rating)==null?void 0:l.rate,precision:.1,readOnly:!0}),(C=i==null?void 0:i.rating)==null?void 0:C.rate]}),c(Ln,{children:[t(me,{sx:{fontSize:"28px"}}),(f=i==null?void 0:i.rating)!=null&&f.count?"In stock":"Out of stock"]}),x?y?t(Z,{clickHandler:()=>e(Xe(!0)),children:"To cart"}):t(Z,{clickHandler:M,children:"Add to Cart"}):t(Z,{clickHandler:()=>o("/login"),children:"Add to Cart"}),c(Pn,{children:[c(ie,{children:[t(ne,{src:xn})," Free delivery on orders over 20$"]}),c(ie,{children:[t(ne,{src:yn})," Estimated delivery in United Kingdom on Apr 17"]}),c(ie,{children:[t(ne,{src:bn})," Find in-store"]})]})]})]})]}):t(Ue,{})},zn=g.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	box-sizing: border-box;
	padding: 10px 30px;
	gap: 80px;
	justify-content: space-between;
	box-sizing: border-box;
	height: 100%;

	@media screen and (max-width: 1100px) {
		grid-template-columns: 1fr 1fr ;
		gap: 40px;
	}

	@media screen and (max-width: 768px) {
		grid-template-columns: 1fr;
		gap: 0;
	}
`,Sn=g.div`
	width: 100%;
	background: #fff;
	border-radius: 12px;
`,An=g.img`
	width: 100%;
	height: 500px;
	padding: 20px;
	box-sizing: border-box;
	object-fit: contain;
`,ne=g.img`
	margin-right: 20px;
	width: 28px;
`,de=g.div`
	font-size: 32px;
	line-height: 39px;
	font-weight: 400;

	@media screen and (max-width: 1100px) {
		font-size: 28px;
	}
`,Vn=g.div`
	margin-top: 20px;
	font-size: 32px;
	line-height: 39px;
	font-weight: 500;

	@media screen and (max-width: 1100px) {
		font-size: 28px;
	}
`,Mn=g.div`
	display: flex;
	align-items: center;
	gap: 12px;

	margin-top: 30px;
	font-size: 24px;
	line-height: 18px;
	font-weight: 500;

	@media screen and (max-width: 1100px) {
		font-size: 20px;
	}
`,Ln=g.div`
	display: flex;
	align-items: center;
	gap: 10px;

	margin-top: 44px;
	margin-bottom: 84px;
	font-size: 24px;
	line-height: 18px;
	font-weight: 500;

	@media screen and (max-width: 1100px) {
		font-size: 20px;
		margin-top: 24px;
		margin-bottom: 44px;
	}
`,Pn=g.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-top: 45px;

	@media screen and (max-width: 1100px) {
		img {
			width: 28px;
		}
	}
`,ie=g.div`
	display: flex;
	align-items: center;
	font-size: 20px;
	line-height: 18px;
	font-weight: 400;

	@media screen and (max-width: 1100px) {
		font-size: 16px;
	}
`;g.div`
	
`;export{Tn as default};
