import{w as m,r as h,z as f,j as t,N as g,P as p,G as A,H as L}from"./index-3ece5810.js";import{M as w,g as y,s as z}from"./MyForm-50673513.js";const I=()=>{const u=m(),[c,a]=h.useState(!1),l=async s=>{var i,o,n;try{a(!0);let e=!1;const r=y();if(await z(r,s.email,s.password).catch(d=>{e=!0,alert(d)}),e){a(!1);return}u(L({name:(i=r.currentUser)==null?void 0:i.displayName,email:(o=r.currentUser)==null?void 0:o.email,id:(n=r.currentUser)==null?void 0:n.uid})),a(!1)}catch(e){alert(e)}};return f(s=>s.user.isAuthorized)?t(g,{to:"/"}):c?t(p,{}):t(A,{children:t(w,{title:"Log In",onSubmit:l})})};export{I as default};
