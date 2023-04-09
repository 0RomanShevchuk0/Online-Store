import{c as ue,j as t,g as Le,a as Me,s as Y,b as pe,_ as u,d as Pe,r as g,u as ke,e as fe,f as he,h as Ee,i as He,k as Te,l as Oe,m as c,n as K,o as $e,p as Ie,q as De,t as _e,v as Be,w as Ne,x as je,T as Ue,y as X,z as le,P as qe,L as We,A as Xe,M as ee,B as Ke,C as v,D as Ye,E as Ge}from"./index-fa15427d.js";import{d as Je}from"./ArrowBackIos-9b16b436.js";const Qe={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:-1,overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"},Ze=Qe,en=ue(t("path",{d:"M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"}),"Star"),nn=ue(t("path",{d:"M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");function tn(e){return Me("MuiRating",e)}const on=Le("MuiRating",["root","sizeSmall","sizeMedium","sizeLarge","readOnly","disabled","focusVisible","visuallyHidden","pristine","label","labelEmptyValueActive","icon","iconEmpty","iconFilled","iconHover","iconFocus","iconActive","decimal"]),B=on,an=["value"],sn=["className","defaultValue","disabled","emptyIcon","emptyLabelText","getLabelText","highlightSelectedOnly","icon","IconContainerComponent","max","name","onChange","onChangeActive","onMouseLeave","onMouseMove","precision","readOnly","size","value"];function rn(e,n,o){return e<n?n:e>o?o:e}function ln(e){const n=e.toString().split(".")[1];return n?n.length:0}function ne(e,n){if(e==null)return e;const o=Math.round(e/n)*n;return Number(o.toFixed(ln(n)))}const cn=e=>{const{classes:n,size:o,readOnly:p,disabled:i,emptyValueFocused:C,focusVisible:x}=e,R={root:["root",`size${pe(o)}`,i&&"disabled",x&&"focusVisible",p&&"readOnly"],label:["label","pristine"],labelEmptyValue:[C&&"labelEmptyValueActive"],icon:["icon"],iconEmpty:["iconEmpty"],iconFilled:["iconFilled"],iconHover:["iconHover"],iconFocus:["iconFocus"],iconActive:["iconActive"],decimal:["decimal"],visuallyHidden:["visuallyHidden"]};return $e(R,tn,n)},dn=Y("span",{name:"MuiRating",slot:"Root",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[{[`& .${B.visuallyHidden}`]:n.visuallyHidden},n.root,n[`size${pe(o.size)}`],o.readOnly&&n.readOnly]}})(({theme:e,ownerState:n})=>u({display:"inline-flex",position:"relative",fontSize:e.typography.pxToRem(24),color:"#faaf00",cursor:"pointer",textAlign:"left",WebkitTapHighlightColor:"transparent",[`&.${B.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity,pointerEvents:"none"},[`&.${B.focusVisible} .${B.iconActive}`]:{outline:"1px solid #999"},[`& .${B.visuallyHidden}`]:Ze},n.size==="small"&&{fontSize:e.typography.pxToRem(18)},n.size==="large"&&{fontSize:e.typography.pxToRem(30)},n.readOnly&&{pointerEvents:"none"})),ge=Y("label",{name:"MuiRating",slot:"Label",overridesResolver:({ownerState:e},n)=>[n.label,e.emptyValueFocused&&n.labelEmptyValueActive]})(({ownerState:e})=>u({cursor:"inherit"},e.emptyValueFocused&&{top:0,bottom:0,position:"absolute",outline:"1px solid #999",width:"100%"})),un=Y("span",{name:"MuiRating",slot:"Icon",overridesResolver:(e,n)=>{const{ownerState:o}=e;return[n.icon,o.iconEmpty&&n.iconEmpty,o.iconFilled&&n.iconFilled,o.iconHover&&n.iconHover,o.iconFocus&&n.iconFocus,o.iconActive&&n.iconActive]}})(({theme:e,ownerState:n})=>u({display:"flex",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest}),pointerEvents:"none"},n.iconActive&&{transform:"scale(1.2)"},n.iconEmpty&&{color:(e.vars||e).palette.action.disabled})),pn=Y("span",{name:"MuiRating",slot:"Decimal",shouldForwardProp:e=>Pe(e)&&e!=="iconActive",overridesResolver:(e,n)=>{const{iconActive:o}=e;return[n.decimal,o&&n.iconActive]}})(({iconActive:e})=>u({position:"relative"},e&&{transform:"scale(1.2)"}));function fn(e){const n=fe(e,an);return t("span",u({},n))}function ce(e){const{classes:n,disabled:o,emptyIcon:p,focus:i,getLabelText:C,highlightSelectedOnly:x,hover:R,icon:z,IconContainerComponent:A,isActive:m,itemValue:r,labelProps:F,name:f,onBlur:M,onChange:s,onClick:P,onFocus:N,readOnly:j,ownerState:d,ratingValue:y,ratingValueRounded:G}=e,k=x?r===y:r<=y,U=r<=R,E=r<=i,J=r===G,I=he(),V=t(un,{as:A,value:r,className:K(n.icon,k?n.iconFilled:n.iconEmpty,U&&n.iconHover,E&&n.iconFocus,m&&n.iconActive),ownerState:u({},d,{iconEmpty:!k,iconFilled:k,iconHover:U,iconFocus:E,iconActive:m}),children:p&&!k?p:z});return j?t("span",u({},F,{children:V})):c(g.Fragment,{children:[c(ge,u({ownerState:u({},d,{emptyValueFocused:void 0}),htmlFor:I},F,{children:[V,t("span",{className:n.visuallyHidden,children:C(r)})]})),t("input",{className:n.visuallyHidden,onFocus:N,onBlur:M,onChange:s,onClick:P,disabled:o,value:r,id:I,type:"radio",name:f,checked:J})]})}const hn=t(en,{fontSize:"inherit"}),gn=t(nn,{fontSize:"inherit"});function mn(e){return`${e} Star${e!==1?"s":""}`}const vn=g.forwardRef(function(n,o){const p=ke({name:"MuiRating",props:n}),{className:i,defaultValue:C=null,disabled:x=!1,emptyIcon:R=gn,emptyLabelText:z="Empty",getLabelText:A=mn,highlightSelectedOnly:m=!1,icon:r=hn,IconContainerComponent:F=fn,max:f=5,name:M,onChange:s,onChangeActive:P,onMouseLeave:N,onMouseMove:j,precision:d=1,readOnly:y=!1,size:G="medium",value:k}=p,U=fe(p,sn),E=he(M),[J,I]=Ee({controlled:k,default:C,name:"Rating"}),V=ne(J,d),ve=He(),[{hover:b,focus:q},D]=g.useState({hover:-1,focus:-1});let H=V;b!==-1&&(H=b),q!==-1&&(H=q);const{isFocusVisibleRef:oe,onBlur:xe,onFocus:ye,ref:be}=Te(),[we,Q]=g.useState(!1),ae=g.useRef(),Ce=Oe(be,ae,o),Re=a=>{j&&j(a);const l=ae.current,{right:h,left:W}=l.getBoundingClientRect(),{width:T}=l.firstChild.getBoundingClientRect();let O;ve.direction==="rtl"?O=(h-a.clientX)/(T*f):O=(a.clientX-W)/(T*f);let w=ne(f*O+d/2,d);w=rn(w,d,f),D(L=>L.hover===w&&L.focus===w?L:{hover:w,focus:w}),Q(!1),P&&b!==w&&P(a,w)},Fe=a=>{N&&N(a);const l=-1;D({hover:l,focus:l}),P&&b!==l&&P(a,l)},se=a=>{let l=a.target.value===""?null:parseFloat(a.target.value);b!==-1&&(l=b),I(l),s&&s(a,l)},Se=a=>{a.clientX===0&&a.clientY===0||(D({hover:-1,focus:-1}),I(null),s&&parseFloat(a.target.value)===V&&s(a,null))},ze=a=>{ye(a),oe.current===!0&&Q(!0);const l=parseFloat(a.target.value);D(h=>({hover:h.hover,focus:l}))},Ae=a=>{if(b!==-1)return;xe(a),oe.current===!1&&Q(!1);const l=-1;D(h=>({hover:h.hover,focus:l}))},[Ve,re]=g.useState(!1),_=u({},p,{defaultValue:C,disabled:x,emptyIcon:R,emptyLabelText:z,emptyValueFocused:Ve,focusVisible:we,getLabelText:A,icon:r,IconContainerComponent:F,max:f,precision:d,readOnly:y,size:G}),S=cn(_);return c(dn,u({ref:Ce,onMouseMove:Re,onMouseLeave:Fe,className:K(S.root,i,y&&"MuiRating-readOnly"),ownerState:_,role:y?"img":null,"aria-label":y?A(H):null},U,{children:[Array.from(new Array(f)).map((a,l)=>{const h=l+1,W={classes:S,disabled:x,emptyIcon:R,focus:q,getLabelText:A,highlightSelectedOnly:m,hover:b,icon:r,IconContainerComponent:F,name:E,onBlur:Ae,onChange:se,onClick:Se,onFocus:ze,ratingValue:H,ratingValueRounded:V,readOnly:y,ownerState:_},T=h===Math.ceil(H)&&(b!==-1||q!==-1);if(d<1){const O=Array.from(new Array(1/d));return t(pn,{className:K(S.decimal,T&&S.iconActive),ownerState:_,iconActive:T,children:O.map((w,L)=>{const Z=ne(h-1+(L+1)*d,d);return t(ce,u({},W,{isActive:!1,itemValue:Z,labelProps:{style:O.length-1===L?{}:{width:Z===H?`${(L+1)*d*100}%`:"0%",overflow:"hidden",position:"absolute"}}}),Z)})},h)}return t(ce,u({},W,{isActive:T,itemValue:h}),h)}),!y&&!x&&c(ge,{className:K(S.label,S.labelEmptyValue),ownerState:_,children:[t("input",{className:S.visuallyHidden,value:"",id:`${E}-empty`,type:"radio",name:E,checked:V==null,onFocus:()=>re(!0),onBlur:()=>re(!1),onChange:se}),t("span",{className:S.visuallyHidden,children:z})]})]}))}),xn=vn;var te={},yn=De;Object.defineProperty(te,"__esModule",{value:!0});var me=te.default=void 0,bn=yn(Ie()),wn=_e,Cn=(0,bn.default)((0,wn.jsx)("path",{d:"M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"}),"Done");me=te.default=Cn;const Rn="/Online-Store/assets/delivery-parcel-dark-9e0f9f56.svg",Fn="/Online-Store/assets/delivery-truck-dark-241edd6e.svg",Sn="/Online-Store/assets/store-search-dark-a399d163.svg",zn="/Online-Store/assets/delivery-parcel-light-59301001.svg",An="/Online-Store/assets/delivery-truck-light-bb1c9337.svg",Vn="/Online-Store/assets/store-search-light-8d118d3c.svg",In=()=>{var F,f,M;const e=Be(),n=Ne(),o=je(),{theme:p}=g.useContext(Ue),i=X(s=>s.products.currentProduct),C=X(s=>s.cart.cartProducts),x=X(s=>s.cart.totalPrice),R=X(s=>s.user.isAuthorized),z=C.some(s=>s.id===(i==null?void 0:i.id));g.useEffect(()=>(e(le(n.id)),()=>e(le(null))),[]);function A(){z||(e(Ye(x+i.price)),e(Ge(i)))}const m=g.useRef(),r=g.useRef();return g.useEffect(()=>{function s(){window.innerWidth>768?m.current&&r.current&&(m.current.style.display="none",r.current.style.display="block"):m.current&&r.current&&(m.current.style.display="block",r.current.style.display="none")}return s(),window.addEventListener("resize",s),()=>window.removeEventListener("resize",s)},[i]),i!=null&&i.id?c("div",{children:[t(We,{to:"/",children:t(Je,{sx:{fontSize:"28px"}})}),c(Ln,{children:[c("div",{children:[t(de,{ref:m,children:i==null?void 0:i.title}),t(Mn,{children:t(Pn,{src:i==null?void 0:i.image,alt:""})})]}),c("div",{children:[t(de,{ref:r,children:i==null?void 0:i.title}),t(kn,{children:Xe(i==null?void 0:i.price)}),c(En,{children:[t(xn,{value:(F=i==null?void 0:i.rating)==null?void 0:F.rate,precision:.1,readOnly:!0}),(f=i==null?void 0:i.rating)==null?void 0:f.rate]}),c(Hn,{children:[t(me,{sx:{fontSize:"28px"}}),(M=i==null?void 0:i.rating)!=null&&M.count?"In stock":"Out of stock"]}),R?z?t(ee,{clickHandler:()=>e(Ke(!0)),children:"To cart"}):t(ee,{clickHandler:A,children:"Add to Cart"}):t(ee,{clickHandler:()=>o("/login"),children:"Add to Cart"}),c(Tn,{children:[c(ie,{children:[p==="light"?t($,{src:Rn}):t($,{src:zn}),"Free delivery on orders over 20$"]}),c(ie,{children:[p==="light"?t($,{src:Fn}):t($,{src:An}),"Estimated delivery in United Kingdom on Apr 17"]}),c(ie,{children:[p==="light"?t($,{src:Sn}):t($,{src:Vn}),"Find in-store"]})]})]})]})]}):t(qe,{})},Ln=v.div`
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
`,Mn=v.div`
	width: 100%;
	background: #fff;
	border-radius: 12px;
`,Pn=v.img`
	width: 100%;
	height: 500px;
	padding: 20px;
	box-sizing: border-box;
	object-fit: contain;
`,$=v.img`
	margin-right: 20px;
	width: 28px;
`,de=v.div`
	font-size: 32px;
	line-height: 39px;
	font-weight: 400;

	@media screen and (max-width: 1100px) {
		font-size: 28px;
	}
`,kn=v.div`
	margin-top: 20px;
	font-size: 32px;
	line-height: 39px;
	font-weight: 500;

	@media screen and (max-width: 1100px) {
		font-size: 28px;
	}
`,En=v.div`
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
`,Hn=v.div`
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
`,Tn=v.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	margin-top: 45px;

	@media screen and (max-width: 1100px) {
		img {
			width: 28px;
		}
	}
`,ie=v.div`
	display: flex;
	align-items: center;
	font-size: 20px;
	line-height: 18px;
	font-weight: 400;

	@media screen and (max-width: 1100px) {
		font-size: 16px;
	}
`;export{In as default};
