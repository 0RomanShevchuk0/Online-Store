import{u as $e,d as Te,c as pe,j as t,g as ke,a as Oe,s as K,b as fe,_ as u,e as _e,r as v,f as Ie,h as he,i as ge,k as Be,l as Ne,m as je,n as c,o as X,p as De,q as me,t as ve,v as xe,w as qe,x as Ue,y as We,z as W,A as ce,P as Xe,L as Ke,B as Ye,M as Z,C as Ge,D as g,E as Je,F as Qe}from"./index-3ece5810.js";const Ze={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},en=Ze,nn="/Online-Store/assets/delivery-parcel-9e0f9f56.svg",tn="/Online-Store/assets/delivery-truck-241edd6e.svg",on="/Online-Store/assets/store-search-a399d163.svg";function an(){return $e(Te)}const sn=pe(t("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),rn=pe(t("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function ln(e){return Oe("MuiRating",e)}const cn=ke("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),B=cn,dn=["value"],un=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function pn(e,n,o){return e<n?n:e>o?o:e}function fn(e){const n=e.toString().split(".")[1];return n?n.length:0}function ee(e,n){if(e==null)return e;const o=Math.round(e/n)*n;return Number(o.toFixed(fn(n)))}const hn=e=>{const{classes:n,size:o,readOnly:i,disabled:S,emptyValueFocused:F,focusVisible:x}=e,y={root:["root",`size${fe(o)}`,S&&"disabled",x&&"focusVisible",i&&"readOnly"],label:["label","pristine"],labelEmptyValue:[F&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return De(y,ln,n)},gn=K("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[{[`& .${B.visuallyHidden}`]:n.visuallyHidden},n.root,n[`size${fe(o.size)}`],o.readOnly&&n.readOnly]}})(({theme:e,ownerState:n})=>u({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${B.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${B.focusVisible} .${B.iconActive}`]:{outline:"1px solid #999"},[`& .${B.visuallyHidden}`]:en},n.size==="small"&&{fontSize:e.typography.pxToRem(18)},n.size==="large"&&{fontSize:e.typography.pxToRem(30)},n.readOnly&&{pointerEvents:"none"})),ye=K("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},n)=>[n.label,e.emptyValueFocused&&n.labelEmptyValueActive]})(({ownerState:e})=>u({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),mn=K("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.icon,o.iconEmpty&&n.iconEmpty,o.iconFilled&&n.iconFilled,o.iconHover&&n.iconHover,o.iconFocus&&n.iconFocus,o.iconActive&&n.iconActive]}})(({theme:e,ownerState:n})=>u({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},n.iconActive&&{transform:"scale(1.2)"},n.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),vn=K("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>_e(e)&&e!=="iconActive",overridesResolver:(e,n)=>{const{iconActive:o}=e;return[n.decimal,o&&n.iconActive]}})(({iconActive:e})=>u({position:"relative"},e&&{transform:"scale(1.2)"}));function xn(e){const n=he(e,dn);return t("span",u({},n))}function de(e){const{classes:n,disabled:o,emptyIcon:i,focus:S,getLabelText:F,highlightSelectedOnly:x,hover:y,icon:M,IconContainerComponent:p,isActive:m,itemValue:l,labelProps:C,name:f,onBlur:s,onChange:L,onClick:P,onFocus:N,readOnly:j,ownerState:d,ratingValue:b,ratingValueRounded:Y}=e,E=x?l===b:l<=b,D=l<=y,H=l<=S,G=l===Y,O=ge(),A=t(mn,{as:p,value:l,className:X(n.icon,E?n.iconFilled:n.iconEmpty,D&&n.iconHover,H&&n.iconFocus,m&&n.iconActive),ownerState:u({},d,{iconEmpty:!E,iconFilled:E,iconHover:D,iconFocus:H,iconActive:m}),children:i&&!E?i:M});return j?t("span",u({},C,{children:A})):c(v.Fragment,{children:[c(ye,u({ownerState:u({},d,{emptyValueFocused:void 0}),htmlFor:O},C,{children:[A,t("span",{className:n.visuallyHidden,children:F(l)})]})),t("input",{className:n.visuallyHidden,onFocus:N,onBlur:s,onChange:L,onClick:P,disabled:o,value:l,id:O,type:"radio",name:f,checked:G})]})}const yn=t(sn,{fontSize:"inherit"}),bn=t(rn,{fontSize:"inherit"});function wn(e){return`${e} Star${e!==1?"s":""}`}const Rn=v.forwardRef(function(n,o){const i=Ie({name:"MuiRating",props:n}),{className:S,defaultValue:F=null,disabled:x=!1,emptyIcon:y=bn,emptyLabelText:M="Empty",getLabelText:p=wn,highlightSelectedOnly:m=!1,icon:l=yn,IconContainerComponent:C=xn,max:f=5,name:s,onChange:L,onChangeActive:P,onMouseLeave:N,onMouseMove:j,precision:d=1,readOnly:b=!1,size:Y="medium",value:E}=i,D=he(i,un),H=ge(s),[G,O]=Be({controlled:E,default:F,name:"Rating"}),A=ee(G,d),Re=an(),[{hover:w,focus:q},_]=v.useState({hover:-1,focus:-1});let $=A;w!==-1&&($=w),q!==-1&&($=q);const{isFocusVisibleRef:ae,onBlur:Fe,onFocus:Ce,ref:ze}=Ne(),[Se,J]=v.useState(!1),se=v.useRef(),Ae=je(ze,se,o),Ve=a=>{j&&j(a);const r=se.current,{right:h,left:U}=r.getBoundingClientRect(),{width:T}=r.firstChild.getBoundingClientRect();let k;Re.direction==="rtl"?k=(h-a.clientX)/(T*f):k=(a.clientX-U)/(T*f);let R=ee(f*k+d/2,d);R=pn(R,d,f),_(V=>V.hover===R&&V.focus===R?V:{hover:R,focus:R}),J(!1),P&&w!==R&&P(a,R)},Me=a=>{N&&N(a);const r=-1;_({hover:r,focus:r}),P&&w!==r&&P(a,r)},re=a=>{let r=a.target.value===""?null:parseFloat(a.target.value);w!==-1&&(r=w),O(r),L&&L(a,r)},Le=a=>{a.clientX===0&&a.clientY===0||(_({hover:-1,focus:-1}),O(null),L&&parseFloat(a.target.value)===A&&L(a,null))},Pe=a=>{Ce(a),ae.current===!0&&J(!0);const r=parseFloat(a.target.value);_(h=>({hover:h.hover,focus:r}))},Ee=a=>{if(w!==-1)return;Fe(a),ae.current===!1&&J(!1);const r=-1;_(h=>({hover:h.hover,focus:r}))},[He,le]=v.useState(!1),I=u({},i,{defaultValue:F,disabled:x,emptyIcon:y,emptyLabelText:M,emptyValueFocused:He,focusVisible:Se,getLabelText:p,icon:l,IconContainerComponent:C,max:f,precision:d,readOnly:b,size:Y}),z=hn(I);return c(gn,u({ref:Ae,onMouseMove:Ve,onMouseLeave:Me,className:X(z.root,S,b&&"MuiRating-readOnly"),ownerState:I,role:b?"img":null,"aria-label":b?p($):null},D,{children:[Array.from(new Array(f)).map((a,r)=>{const h=r+1,U={classes:z,disabled:x,emptyIcon:y,focus:q,getLabelText:p,highlightSelectedOnly:m,hover:w,icon:l,IconContainerComponent:C,name:H,onBlur:Ee,onChange:re,onClick:Le,onFocus:Pe,ratingValue:$,ratingValueRounded:A,readOnly:b,ownerState:I},T=h===Math.ceil($)&&(w!==-1||q!==-1);if(d<1){const k=Array.from(new Array(1/d));return t(vn,{className:X(z.decimal,T&&z.iconActive),ownerState:I,iconActive:T,children:k.map((R,V)=>{const Q=ee(h-1+(V+1)*d,d);return t(de,u({},U,{isActive:!1,itemValue:Q,labelProps:{style:k.length-1===V?{}:{width:Q===$?`${(V+1)*d*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),Q)})},h)}return t(de,u({},U,{isActive:T,itemValue:h}),h)}),!b&&!x&&c(ye,{className:X(z.label,z.labelEmptyValue),ownerState:I,children:[t("input",{className:z.visuallyHidden,value:"",id:`${H}-empty`,type:"radio",name:H,checked:A==null,onFocus:()=>le(!0),onBlur:()=>le(!1),onChange:re}),t("span",{className:z.visuallyHidden,children:M})]})]}))}),Fn=Rn;var te={},Cn=ve;Object.defineProperty(te,"__esModule",{value:!0});var be=te.default=void 0,zn=Cn(me()),Sn=xe,An=(0,zn.default)((0,Sn.jsx)("path",{d:"M11.67 3.87 9.9 2.1 0 12l9.9 9.9 1.77-1.77L3.54 12z"}),"ArrowBackIos");be=te.default=An;var oe={},Vn=ve;Object.defineProperty(oe,"__esModule",{value:!0});var we=oe.default=void 0,Mn=Vn(me()),Ln=xe,Pn=(0,Mn.default)((0,Ln.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");we=oe.default=Pn;const Bn=()=>{var l,C,f;const e=qe(),n=Ue(),o=We(),i=W(s=>s.products.currentProduct),S=W(s=>s.cart.cartProducts),F=W(s=>s.cart.totalPrice),x=W(s=>s.user.isAuthorized),y=S.some(s=>s.id===(i==null?void 0:i.id));v.useEffect(()=>(e(ce(n.id)),()=>e(ce(null))),[]);function M(){y||(e(Je(F+i.price)),e(Qe(i)))}const p=v.useRef(),m=v.useRef();return v.useEffect(()=>{function s(){window.innerWidth>768?p.current&&m.current&&(p.current.style.display="none",m.current.style.display="block"):p.current&&m.current&&(p.current.style.display="block",m.current.style.display="none")}return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[i]),i!=null&&i.id?c("div",{children:[t(Ke,{to:"/",children:t(be,{sx:{fontSize:"28px"}})}),c(En,{children:[c("div",{children:[t(ue,{ref:p,children:i==null?void 0:i.title}),t(Hn,{children:t($n,{src:i==null?void 0:i.image,alt:""})})]}),c("div",{children:[t(ue,{ref:m,children:i==null?void 0:i.title}),t(Tn,{children:Ye(i==null?void 0:i.price)}),c(kn,{children:[t(Fn,{value:(l=i==null?void 0:i.rating)==null?void 0:l.rate,precision:.1,readOnly:!0}),(C=i==null?void 0:i.rating)==null?void 0:C.rate]}),c(On,{children:[t(we,{sx:{fontSize:"28px"}}),(f=i==null?void 0:i.rating)!=null&&f.count?"In stock":"Out of stock"]}),x?y?t(Z,{clickHandler:()=>e(Ge(!0)),children:"To cart"}):t(Z,{clickHandler:M,children:"Add to Cart"}):t(Z,{clickHandler:()=>o("/login"),children:"Add to Cart"}),c(_n,{children:[c(ie,{children:[t(ne,{src:nn})," Free delivery on orders over 20$"]}),c(ie,{children:[t(ne,{src:tn})," Estimated delivery in United Kingdom on Apr 17"]}),c(ie,{children:[t(ne,{src:on})," Find in-store"]})]})]})]})]}):t(Xe,{})},En=g.div`
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
`,Hn=g.div`
	width: 100%;
	background: #fff;
	border-radius: 12px;
`,$n=g.img`
	width: 100%;
	height: 500px;
	padding: 20px;
	box-sizing: border-box;
	object-fit: contain;
`,ne=g.img`
	margin-right: 20px;
	width: 28px;
`,ue=g.div`
	font-size: 32px;
	line-height: 39px;
	font-weight: 400;

	@media screen and (max-width: 1100px) {
		font-size: 28px;
	}
`,Tn=g.div`
	margin-top: 20px;
	font-size: 32px;
	line-height: 39px;
	font-weight: 500;

	@media screen and (max-width: 1100px) {
		font-size: 28px;
	}
`,kn=g.div`
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
`,On=g.div`
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
`,_n=g.div`
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
	
`;export{Bn as default};
