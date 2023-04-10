import{v as p,r as c,y,j as e,N as g,P as x,m as A,F as L,L as E,C as S,G as w,H as z}from"./index-6d5923ec.js";import{M,g as U,s as j}from"./MyForm-d3a391c5.js";import{d as v}from"./ArrowBackIos-972d658a.js";const k=()=>{const t=p(),[d,a]=c.useState(!1),[i,m]=c.useState(null);let o=null;const h=async s=>{var n,l,u;try{a(!0),o=!1;const r=U();if(await j(r,s.email,s.password).catch(f=>{o=!0,m(f.code)}),o){a(!1);return}t(w({name:(n=r.currentUser)==null?void 0:n.displayName,email:(l=r.currentUser)==null?void 0:l.email,id:(u=r.currentUser)==null?void 0:u.uid})),a(!1)}catch(r){alert(r)}};return y(s=>s.user.isAuthorized)?e(g,{to:"/"}):d?e(x,{}):A(L,{children:[e(E,{to:"/",children:e(v,{sx:{fontSize:"28px"}})}),e(F,{myerror:i,severity:"error",children:i}),e(M,{title:"Log In",onSubmit:h})]})},F=S(z)`
	width: 70%;
	display: ${t=>t.myerror?"flex":"none"} !important;
	margin: 0px auto;
`;export{k as default};
