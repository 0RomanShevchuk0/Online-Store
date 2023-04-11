import{v as p,r as c,y,j as e,N as g,P as x,m as A,F as L,L as E,C as S,G as w,H as z,I,J as M}from"./index-3520d43e.js";import{M as U}from"./MyForm-40654e05.js";import{d as j}from"./ArrowBackIos-e9ffbb68.js";const k=()=>{const t=p(),[d,a]=c.useState(!1),[i,m]=c.useState(null);let o=null;const h=async s=>{var n,l,u;try{a(!0),o=!1;const r=w();if(await z(r,s.email,s.password).catch(f=>{o=!0,m(f.code)}),o){a(!1);return}t(I({name:(n=r.currentUser)==null?void 0:n.displayName,email:(l=r.currentUser)==null?void 0:l.email,id:(u=r.currentUser)==null?void 0:u.uid})),a(!1)}catch(r){alert(r)}};return y(s=>s.user.isAuthorized)?e(g,{to:"/"}):d?e(x,{}):A(L,{children:[e(E,{to:"/",children:e(j,{sx:{fontSize:"28px"}})}),e(v,{myerror:i,severity:"error",children:i}),e(U,{title:"Log In",onSubmit:h})]})},v=S(M)`
	width: 70%;
	display: ${t=>t.myerror?"flex":"none"} !important;
	margin: 0px auto;
`;export{k as default};
