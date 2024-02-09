"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[8808],{2272:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var n=s(4552),a=s(1504);function l(e){const t=Object.assign({h1:"h1"},(0,n.MN)(),e.components);return a.createElement(t.h1,null,"How to use the visibility classes")}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.MN)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},c=(s(4056),s(1548)),r=s(2496);const i=e=>{let{location:t,data:{mdx:s},children:n}=e;const{pathname:l}=t;return l.includes("/page/")?a.createElement(a.Fragment,null,n):a.createElement(c.c,{onSideBarPage:!0},a.createElement(r.c,{pathname:l},a.createElement("main",null,n)))};function u(e){return a.createElement(i,e,a.createElement(o,e))}},2496:function(e,t,s){s.d(t,{c:function(){return f}});var n=s(1504),a=s(8632),l=s(8764),o=s(4056),c=s(5184);var r=(0,n.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:s,to:a}=e;const l=(0,c.useLocation)(),{activeAnchor:i,setActiveAnchor:u,hasScrolled:m,setHasScrolled:d}=(0,n.useContext)(r),{0:h,1:p}=(0,n.useState)(!1),{pathname:f}=l;return(0,n.useEffect)((()=>{p(i=="/simple-scss-utilities-docs"+s+" "+a)}),[i]),n.createElement("p",{className:(h?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+s+"/"==f){document.getElementById(a).scrollIntoView({behavior:"smooth"}),d(!1),u("/simple-scss-utilities-docs"+s+" "+a)}else(0,o.navigate)(s+"?anchor="+a)}},t)},u=s(3616),m=s(6542),d=s(5896),h=s(7264);var p=e=>{let{sidebarData:t}=e;const{setActiveAnchor:s,hasScrolled:a}=(0,n.useContext)(r),{sidebarOpen:p,setSidebarOpen:f}=(0,n.useContext)(u.c),{0:E,1:b}=(0,n.useState)([]),{0:g,1:v}=(0,n.useState)(!1),{0:k,1:y}=(0,n.useState)([]),{0:S,1:w}=(0,n.useState)(!1),{0:N,1:x}=(0,n.useState)(!1),{width:C}=(0,h.c)(),A=(0,c.useLocation)(),{pathname:I}=A;if((0,n.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,s)=>{const n=[];e.forEach(((e,t)=>{const s=e.target.href.split("#")[1],a=I.slice(0,-1)+" "+s;e.isIntersecting?n.push({anchorString:a,inView:!0,offsetTop:e.target.offsetTop}):n.push({anchorString:a,inView:!1,offsetTop:e.target.offsetTop})})),y(n)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,n.useEffect)((()=>{k.length&&!g&&(b(k),v(!0))}),[k,g]),(0,n.useEffect)((()=>{if(g&&k.length){let e=(0,l.c)(E);if(k.forEach((t=>{const s=E.findIndex((e=>t.anchorString==e.anchorString));s>=0&&e.splice(s,1,t)})),b(e),y([]),a){let t=Number.POSITIVE_INFINITY,n=-1;if(e.forEach(((e,s)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,n=s)})),n>=0){const t=e[n];s(t.anchorString)}else s("")}}}),[E,k,g,a]),(0,n.useEffect)((()=>{if(A.search&&!S){const e=new URLSearchParams(A.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const n=I.slice(0,-1);s(n+" "+e)}}w(!0)}else if(g&&!S){let e=E[0];e.inView&&s(e.anchorString),w(!0)}}),[g,E,S]),(0,n.useEffect)((()=>{x(C>768)}),[C]),(0,n.useEffect)((()=>{f(!0)}),[N]),!t)return n.createElement(n.Fragment,null,"No sidebar data for path "+I);const{path:L,nodes:T}=t,O=[],V=[],z={};T.forEach((e=>{const{frontmatter:{category:t,title:s,slug:n,order:a,isCategoryRoot:l,anchorLinks:o}}=e;if(t)z[t]||(z[t]=[]),l?V.push({title:s,categoryName:t,isCategoryRoot:!0,path:"/"+L+"/"+n,sublinks:null,order:a,anchorLinks:o}):z[t].push({title:s,path:"/"+L+"/"+n,order:a,anchorLinks:o});else{const e="index"===n?"/"+L:"/"+L+"/"+n;O.push({title:s,path:e,sublinks:null,order:a,anchorLinks:o})}})),V.forEach((e=>{const t=e.categoryName;e.sublinks=z[t]})),O.sort(((e,t)=>e.order-t.order)),V.sort(((e,t)=>e.order-t.order)),V.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const _=[].concat(O,V);return n.createElement(n.Fragment,null,n.createElement("div",{className:"w-0"},n.createElement("div",{onClick:()=>f(!0),className:(p?"display-none":"display-flex")+" font-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-lg bg-background-ltr items-center justify-content-center bg-background z-5"},n.createElement(m.u,{icon:d.mIU}))),n.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(p?"":"display-none")},n.createElement("nav",{className:"p-md"},n.createElement(m.u,{className:(N?"display-none":"")+" cursor-pointer hover:text-blue-ltr font-lg py-sm",onClick:()=>f(!1),icon:d.kvG}),n.createElement("ul",{className:"display-flex flex-col"},_.map((e=>{const{isCategoryRoot:t,categoryName:s,path:a,title:l,sublinks:c,anchorLinks:r}=e;if(t){const e=l.charAt(0).toUpperCase()+l.slice(1),t="/simple-scss-utilities-docs"+a+"/"===I;return n.createElement("li",{key:a+" "+l},n.createElement("span",{className:(t?"text-blue":"")+" font-bold"},n.createElement(o.Link,{to:a},e)),r&&n.createElement("ul",null,r.map((e=>{const{title:t,link:s}=e;return n.createElement("li",{key:t+" "+s,className:"pl-md font-md"},n.createElement(i,{path:a,to:s},t))}))),c&&n.createElement("ul",null,c.map((e=>{const{title:t,path:s,anchorLinks:a}=e,l="/simple-scss-utilities-docs"+s+"/"===I;return n.createElement("li",{key:t+" "+s,className:"pl-md font-normal"},n.createElement("span",{className:l?"text-blue":""},n.createElement(o.Link,{to:s},t)),a&&n.createElement("ul",null,a.map((e=>{const{title:t,link:a}=e;return n.createElement("li",{key:t+" "+a,className:"pl-md font-md"},n.createElement(i,{path:s,to:a},t))}))))}))))}l.charAt(0).toUpperCase(),l.slice(1);const u="/simple-scss-utilities-docs"+a+"/"===I;return n.createElement("li",{key:a+" "+l},n.createElement("span",{className:u?"text-blue":""},n.createElement(o.Link,{to:a},l)))}))))))};var f=e=>{let{pathname:t,children:s}=e;const{sidebarOpen:l,setSidebarOpen:c}=(0,n.useContext)(u.c),{0:i,1:m}=(0,n.useState)(!1),{0:d,1:h}=(0,n.useState)(""),{docs:f,components:E,customize:b}=(0,o.useStaticQuery)("2241216091");let g;return t.startsWith("/simple-scss-utilities-docs/docs")?g={path:"docs",...f}:t.startsWith("/simple-scss-utilities-docs/customize")&&(g={path:"customize",...b}),n.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},n.createElement(r.Provider,{value:{activeAnchor:d,setActiveAnchor:h,hasScrolled:i,setHasScrolled:m}},n.createElement(p,{sidebarData:g}),n.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{m(!0)},onTouchStart:()=>{m(!0)}},n.createElement("div",{id:"small-width-overlay",className:"display-none "+(l?"max-tab:display-block":"")+" position-absolute top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),n.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg "+(l?"max-tab:filter-blur-md":"")},s),n.createElement(a.c,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-other-utilities-visibility-mdx-6683b30d593d2a90a1e2.js.map