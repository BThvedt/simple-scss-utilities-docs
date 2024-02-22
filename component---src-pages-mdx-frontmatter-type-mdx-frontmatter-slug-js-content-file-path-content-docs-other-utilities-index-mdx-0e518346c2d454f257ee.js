"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[4588],{8313:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var a=s(4552),n=s(1504);function l(e){const t=Object.assign({h1:"h1"},(0,a.MN)(),e.components);return n.createElement(t.h1,null,"Overview of the Non Responsive Utilities")}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.MN)(),e.components);return t?n.createElement(t,e,n.createElement(l,e)):l(e)},r=(s(4056),s(896)),c=s(2496);const i=e=>{let{location:t,data:{mdx:s},children:a}=e;const{pathname:l}=t;return l.includes("/page/")?n.createElement(n.Fragment,null,a):n.createElement(r.c,{onSideBarPage:!0},n.createElement(c.c,{pathname:l},n.createElement("main",null,a)))};function m(e){return n.createElement(i,e,n.createElement(o,e))}},2496:function(e,t,s){s.d(t,{c:function(){return f}});var a=s(1504),n=s(8632),l=s(8764),o=s(4056),r=s(5184);var c=(0,a.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:s,to:n}=e;const l=(0,r.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:d}=(0,a.useContext)(c),{0:h,1:p}=(0,a.useState)(!1),{pathname:f}=l;return(0,a.useEffect)((()=>{p(i=="/simple-scss-utilities-docs"+s+" "+n)}),[i]),a.createElement("p",{className:(h?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+s+"/"==f){document.getElementById(n).scrollIntoView({behavior:"smooth"}),d(!1),m("/simple-scss-utilities-docs"+s+" "+n)}else(0,o.navigate)(s+"?anchor="+n)}},t)},m=s(3616),u=s(6542),d=s(5896),h=s(7264);var p=e=>{let{sidebarData:t}=e;const{setActiveAnchor:s,hasScrolled:n}=(0,a.useContext)(c),{sidebarOpen:p,setSidebarOpen:f}=(0,a.useContext)(m.c),{0:g,1:E}=(0,a.useState)([]),{0:b,1:v}=(0,a.useState)(!1),{0:x,1:k}=(0,a.useState)([]),{0:y,1:w}=(0,a.useState)(!1),{0:N,1:S}=(0,a.useState)(!1),{width:C}=(0,h.c)(),A=(0,r.useLocation)(),{pathname:I}=A;if((0,a.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,s)=>{const a=[];e.forEach(((e,t)=>{const s=e.target.href.split("#")[1],n=I.slice(0,-1)+" "+s;e.isIntersecting?a.push({anchorString:n,inView:!0,offsetTop:e.target.offsetTop}):a.push({anchorString:n,inView:!1,offsetTop:e.target.offsetTop})})),k(a)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,a.useEffect)((()=>{x.length&&!b&&(E(x),v(!0))}),[x,b]),(0,a.useEffect)((()=>{if(b&&x.length){let e=(0,l.c)(g);if(x.forEach((t=>{const s=g.findIndex((e=>t.anchorString==e.anchorString));s>=0&&e.splice(s,1,t)})),E(e),k([]),n){let t=Number.POSITIVE_INFINITY,a=-1;if(e.forEach(((e,s)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,a=s)})),a>=0){const t=e[a];s(t.anchorString)}else s("")}}}),[g,x,b,n]),(0,a.useEffect)((()=>{if(A.search&&!y){const e=new URLSearchParams(A.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const a=I.slice(0,-1);s(a+" "+e)}}w(!0)}else if(b&&!y){let e=g[0];e.inView&&s(e.anchorString),w(!0)}}),[b,g,y]),(0,a.useEffect)((()=>{S(C>768)}),[C]),(0,a.useEffect)((()=>{f(!0)}),[N]),!t)return a.createElement(a.Fragment,null,"No sidebar data for path "+I);const{path:L,nodes:O}=t,T=[],V=[],z={};O.forEach((e=>{const{frontmatter:{category:t,title:s,slug:a,order:n,isCategoryRoot:l,anchorLinks:o}}=e;if(t)z[t]||(z[t]=[]),l?V.push({title:s,categoryName:t,isCategoryRoot:!0,path:"/"+L+"/"+a,sublinks:null,order:n,anchorLinks:o}):z[t].push({title:s,path:"/"+L+"/"+a,order:n,anchorLinks:o});else{const e="index"===a?"/"+L:"/"+L+"/"+a;T.push({title:s,path:e,sublinks:null,order:n,anchorLinks:o})}})),V.forEach((e=>{const t=e.categoryName;e.sublinks=z[t]})),T.sort(((e,t)=>e.order-t.order)),V.sort(((e,t)=>e.order-t.order)),V.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const R=[].concat(T,V);return a.createElement(a.Fragment,null,a.createElement("div",{className:"w-0"},a.createElement("div",{onClick:()=>f(!0),className:(p?"display-none":"display-flex")+" text-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-magenta-lg hover:shadow-blue-lg bg-background-ltr items-center justify-center bg-background z-5 text-magenta hover:text-blue"},a.createElement(u.u,{icon:d.mIU}))),a.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(p?"":"display-none")},a.createElement("nav",{className:"p-md"},a.createElement(u.u,{className:(N?"display-none":"")+" cursor-pointer hover:text-magenta text-magenta hover:text-blue text-lg py-sm",onClick:()=>f(!1),icon:d.kvG}),a.createElement("ul",{className:"display-flex flex-col line-height-lg"},R.map((e=>{const{isCategoryRoot:t,categoryName:s,path:n,title:l,sublinks:r,anchorLinks:c}=e;if(t){const e=l.charAt(0).toUpperCase()+l.slice(1),t="/simple-scss-utilities-docs"+n+"/"===I;return a.createElement("li",{key:n+" "+l},a.createElement("span",{className:(t?"text-magenta":"")+" font-large hover:text-magenta "},a.createElement(o.Link,{to:n},e)),c&&a.createElement("ul",{className:"line-height-md "},c.map(((e,t)=>{const{title:s,link:l}=e;return a.createElement("li",{key:s+" "+l,className:"pl-md text-md "+(t==c.length-1?"mb-xs":"")+" "},a.createElement(i,{path:n,to:l},s))}))),r&&a.createElement("ul",null,r.map(((e,t)=>{const{title:s,path:n,anchorLinks:l}=e,c="/simple-scss-utilities-docs"+n+"/"===I;return a.createElement("li",{key:s+" "+n,className:"pl-md font-normal   "+(t==r.length-1?"mb-xs":"")},a.createElement("span",{className:(c?"text-magenta":"")+" font-bold hover:text-magenta"},a.createElement(o.Link,{to:n},s)),l&&a.createElement("ul",{className:"line-height-md "},l.map((e=>{const{title:t,link:s}=e;return a.createElement("li",{key:t+" "+s,className:"pl-md text-md hover:text-magenta"},a.createElement(i,{path:n,to:s},t))}))))}))))}l.charAt(0).toUpperCase(),l.slice(1);const m="/simple-scss-utilities-docs"+n+"/"===I;return a.createElement("li",{key:n+" "+l},a.createElement("span",{className:(m?"text-magenta":"")+" font-large hover:text-magenta"},a.createElement(o.Link,{to:n},l)))}))))))};var f=e=>{let{pathname:t,children:s}=e;const{sidebarOpen:l,setSidebarOpen:r}=(0,a.useContext)(m.c),{0:i,1:u}=(0,a.useState)(!1),{0:d,1:h}=(0,a.useState)(""),{docs:f,components:g,customize:E}=(0,o.useStaticQuery)("2241216091");let b;return t.startsWith("/simple-scss-utilities-docs/docs")?b={path:"docs",...f}:t.startsWith("/simple-scss-utilities-docs/customize")&&(b={path:"customize",...E}),a.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},a.createElement(c.Provider,{value:{activeAnchor:d,setActiveAnchor:h,hasScrolled:i,setHasScrolled:u}},a.createElement(p,{sidebarData:b}),a.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{u(!0)},onTouchStart:()=>{u(!0)}},a.createElement("div",{id:"small-width-overlay",className:"display-none "+(l?"max-tab:display-block":"")+" position-fixed top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),a.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg w-19/20 max-w-container lg:mx-auto   "+(l?"max-tab:filter-blur-md":"")},s),a.createElement(n.c,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-other-utilities-index-mdx-0e518346c2d454f257ee.js.map