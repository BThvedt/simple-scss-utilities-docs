"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[2696],{4824:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(4552),s=a(1504);function l(e){const t=Object.assign({h1:"h1",h2:"h2"},(0,n.MN)(),e.components);return s.createElement(s.Fragment,null,s.createElement(t.h1,null,"I just wanted to put box shadow in it's own category"),"\n",s.createElement(t.h2,null,"Box Shadow Size"),"\n",s.createElement(t.h2,null,"Box Shadow Color"),"\n",s.createElement(t.h2,null,"Box Shadow Responsive"),"\n",s.createElement(t.h2,null,"Psuedo States"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.MN)(),e.components);return t?s.createElement(t,e,s.createElement(l,e)):l(e)},r=(a(4056),a(896)),c=a(2496);const i=e=>{let{location:t,data:{mdx:a},children:n}=e;const{pathname:l}=t;return l.includes("/page/")?s.createElement(s.Fragment,null,n):s.createElement(r.c,{onSideBarPage:!0},s.createElement(c.c,{pathname:l},s.createElement("main",null,n)))};function m(e){return s.createElement(i,e,s.createElement(o,e))}},2496:function(e,t,a){a.d(t,{c:function(){return f}});var n=a(1504),s=a(8632),l=a(8764),o=a(4056),r=a(5184);var c=(0,n.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:a,to:s}=e;const l=(0,r.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:d}=(0,n.useContext)(c),{0:h,1:p}=(0,n.useState)(!1),{pathname:f}=l;return(0,n.useEffect)((()=>{p(i=="/simple-scss-utilities-docs"+a+" "+s)}),[i]),n.createElement("p",{className:(h?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+a+"/"==f){document.getElementById(s).scrollIntoView({behavior:"smooth"}),d(!1),m("/simple-scss-utilities-docs"+a+" "+s)}else(0,o.navigate)(a+"?anchor="+s)}},t)},m=a(3616),u=a(792),d=a(5896),h=a(7264);var p=e=>{let{sidebarData:t}=e;const{setActiveAnchor:a,hasScrolled:s}=(0,n.useContext)(c),{sidebarOpen:p,setSidebarOpen:f}=(0,n.useContext)(m.c),{0:g,1:E}=(0,n.useState)([]),{0:b,1:x}=(0,n.useState)(!1),{0:v,1:w}=(0,n.useState)([]),{0:k,1:y}=(0,n.useState)(!1),{0:S,1:N}=(0,n.useState)(!1),{width:C}=(0,h.c)(),A=(0,r.useLocation)(),{pathname:I}=A;if((0,n.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,a)=>{const n=[];e.forEach(((e,t)=>{const a=e.target.href.split("#")[1],s=I.slice(0,-1)+" "+a;e.isIntersecting?n.push({anchorString:s,inView:!0,offsetTop:e.target.offsetTop}):n.push({anchorString:s,inView:!1,offsetTop:e.target.offsetTop})})),w(n)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,n.useEffect)((()=>{v.length&&!b&&(E(v),x(!0))}),[v,b]),(0,n.useEffect)((()=>{if(b&&v.length){let e=(0,l.c)(g);if(v.forEach((t=>{const a=g.findIndex((e=>t.anchorString==e.anchorString));a>=0&&e.splice(a,1,t)})),E(e),w([]),s){let t=Number.POSITIVE_INFINITY,n=-1;if(e.forEach(((e,a)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,n=a)})),n>=0){const t=e[n];a(t.anchorString)}else a("")}}}),[g,v,b,s]),(0,n.useEffect)((()=>{if(A.search&&!k){const e=new URLSearchParams(A.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const n=I.slice(0,-1);a(n+" "+e)}}y(!0)}else if(b&&!k){let e=g[0];e.inView&&a(e.anchorString),y(!0)}}),[b,g,k]),(0,n.useEffect)((()=>{N(C>768)}),[C]),(0,n.useEffect)((()=>{f(!0)}),[S]),!t)return n.createElement(n.Fragment,null,"No sidebar data for path "+I);const{path:L,nodes:T}=t,O=[],z=[],V={};T.forEach((e=>{const{frontmatter:{category:t,title:a,slug:n,order:s,isCategoryRoot:l,anchorLinks:o}}=e;if(t)V[t]||(V[t]=[]),l?z.push({title:a,categoryName:t,isCategoryRoot:!0,path:"/"+L+"/"+n,sublinks:null,order:s,anchorLinks:o}):V[t].push({title:a,path:"/"+L+"/"+n,order:s,anchorLinks:o});else{const e="index"===n?"/"+L:"/"+L+"/"+n;O.push({title:a,path:e,sublinks:null,order:s,anchorLinks:o})}})),z.forEach((e=>{const t=e.categoryName;e.sublinks=V[t]})),O.sort(((e,t)=>e.order-t.order)),z.sort(((e,t)=>e.order-t.order)),z.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const B=[].concat(O,z);return n.createElement(n.Fragment,null,n.createElement("div",{className:"w-0"},n.createElement("div",{onClick:()=>f(!0),className:(p?"display-none":"display-flex")+" text-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-magenta-lg hover:shadow-blue-lg bg-background-ltr items-center justify-center bg-background z-5 text-magenta hover:text-blue"},n.createElement(u.u,{icon:d.mIU}))),n.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(p?"":"display-none")},n.createElement("nav",{className:"p-md"},n.createElement("span",{className:(S?"display-none":"")+" "},n.createElement(u.u,{className:"cursor-pointer hover:text-magenta text-magenta hover:text-blue text-lg py-sm",onClick:()=>f(!1),icon:d.kvG})),n.createElement("ul",{className:"display-flex flex-col line-height-lg"},B.map((e=>{const{isCategoryRoot:t,categoryName:a,path:s,title:l,sublinks:r,anchorLinks:c}=e;if(t){const e=l.charAt(0).toUpperCase()+l.slice(1),t="/simple-scss-utilities-docs"+s+"/"===I;return n.createElement("li",{key:s+" "+l},n.createElement("span",{className:(t?"text-magenta":"")+" font-large hover:text-magenta "},n.createElement(o.Link,{to:s},e)),c&&n.createElement("ul",{className:"line-height-md "},c.map(((e,t)=>{const{title:a,link:l}=e;return n.createElement("li",{key:a+" "+l,className:"pl-md text-md "+(t==c.length-1?"mb-xs":"")+" "},n.createElement(i,{path:s,to:l},a))}))),r&&n.createElement("ul",null,r.map(((e,t)=>{const{title:a,path:s,anchorLinks:l}=e,c="/simple-scss-utilities-docs"+s+"/"===I;return n.createElement("li",{key:a+" "+s,className:"pl-md font-normal   "+(t==r.length-1?"mb-xs":"")},n.createElement("span",{className:(c?"text-magenta":"")+" font-bold hover:text-magenta"},n.createElement(o.Link,{to:s},a)),l&&n.createElement("ul",{className:"line-height-md "},l.map((e=>{const{title:t,link:a}=e;return n.createElement("li",{key:t+" "+a,className:"pl-md text-md hover:text-magenta"},n.createElement(i,{path:s,to:a},t))}))))}))))}l.charAt(0).toUpperCase(),l.slice(1);const m="/simple-scss-utilities-docs"+s+"/"===I;return n.createElement("li",{key:s+" "+l},n.createElement("span",{className:(m?"text-magenta":"")+" font-large hover:text-magenta"},n.createElement(o.Link,{to:s},l)))}))))))};var f=e=>{let{pathname:t,children:a}=e;const{sidebarOpen:l,setSidebarOpen:r}=(0,n.useContext)(m.c),{0:i,1:u}=(0,n.useState)(!1),{0:d,1:h}=(0,n.useState)(""),{docs:f,components:g,customize:E}=(0,o.useStaticQuery)("2241216091");let b;return t.startsWith("/simple-scss-utilities-docs/docs")?b={path:"docs",...f}:t.startsWith("/simple-scss-utilities-docs/customize")&&(b={path:"customize",...E}),n.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},n.createElement(c.Provider,{value:{activeAnchor:d,setActiveAnchor:h,hasScrolled:i,setHasScrolled:u}},n.createElement(p,{sidebarData:b}),n.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{u(!0)},onTouchStart:()=>{u(!0)}},n.createElement("div",{id:"small-width-overlay",className:"display-none "+(l?"max-tab:display-block":"")+" position-fixed top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),n.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg w-19/20 max-w-container lg:mx-auto   "+(l?"max-tab:filter-blur-md":"")},a),n.createElement(s.c,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-box-shadow-index-mdx-9a7eec9e3b07608d8931.js.map