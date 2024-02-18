"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[56],{8260:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var s=a(4552),n=a(1504);function l(e){const t=Object.assign({h1:"h1",h2:"h2"},(0,s.MN)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h1,null,"How to use Height Classes"),"\n",n.createElement(t.h2,null,"Heights Percentage Values"),"\n",n.createElement(t.h2,null,"Heights Rem Values"),"\n",n.createElement(t.h2,null,"Screen Based Heightss"),"\n",n.createElement(t.h2,null,"XS - XL"))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.MN)(),e.components);return t?n.createElement(t,e,n.createElement(l,e)):l(e)},o=(a(4056),a(896)),c=a(2496);const i=e=>{let{location:t,data:{mdx:a},children:s}=e;const{pathname:l}=t;return l.includes("/page/")?n.createElement(n.Fragment,null,s):n.createElement(o.c,{onSideBarPage:!0},n.createElement(c.c,{pathname:l},n.createElement("main",null,s)))};function m(e){return n.createElement(i,e,n.createElement(r,e))}},2496:function(e,t,a){a.d(t,{c:function(){return f}});var s=a(1504),n=a(8632),l=a(8764),r=a(4056),o=a(5184);var c=(0,s.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:a,to:n}=e;const l=(0,o.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:h}=(0,s.useContext)(c),{0:d,1:p}=(0,s.useState)(!1),{pathname:f}=l;return(0,s.useEffect)((()=>{p(i=="/simple-scss-utilities-docs"+a+" "+n)}),[i]),s.createElement("p",{className:(d?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+a+"/"==f){document.getElementById(n).scrollIntoView({behavior:"smooth"}),h(!1),m("/simple-scss-utilities-docs"+a+" "+n)}else(0,r.navigate)(a+"?anchor="+n)}},t)},m=a(3616),u=a(6542),h=a(5896),d=a(7264);var p=e=>{let{sidebarData:t}=e;const{setActiveAnchor:a,hasScrolled:n}=(0,s.useContext)(c),{sidebarOpen:p,setSidebarOpen:f}=(0,s.useContext)(m.c),{0:g,1:E}=(0,s.useState)([]),{0:b,1:v}=(0,s.useState)(!1),{0:x,1:k}=(0,s.useState)([]),{0:y,1:w}=(0,s.useState)(!1),{0:S,1:N}=(0,s.useState)(!1),{width:C}=(0,d.c)(),A=(0,o.useLocation)(),{pathname:I}=A;if((0,s.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,a)=>{const s=[];e.forEach(((e,t)=>{const a=e.target.href.split("#")[1],n=I.slice(0,-1)+" "+a;e.isIntersecting?s.push({anchorString:n,inView:!0,offsetTop:e.target.offsetTop}):s.push({anchorString:n,inView:!1,offsetTop:e.target.offsetTop})})),k(s)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,s.useEffect)((()=>{x.length&&!b&&(E(x),v(!0))}),[x,b]),(0,s.useEffect)((()=>{if(b&&x.length){let e=(0,l.c)(g);if(x.forEach((t=>{const a=g.findIndex((e=>t.anchorString==e.anchorString));a>=0&&e.splice(a,1,t)})),E(e),k([]),n){let t=Number.POSITIVE_INFINITY,s=-1;if(e.forEach(((e,a)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,s=a)})),s>=0){const t=e[s];a(t.anchorString)}else a("")}}}),[g,x,b,n]),(0,s.useEffect)((()=>{if(A.search&&!y){const e=new URLSearchParams(A.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const s=I.slice(0,-1);a(s+" "+e)}}w(!0)}else if(b&&!y){let e=g[0];e.inView&&a(e.anchorString),w(!0)}}),[b,g,y]),(0,s.useEffect)((()=>{N(C>768)}),[C]),(0,s.useEffect)((()=>{f(!0)}),[S]),!t)return s.createElement(s.Fragment,null,"No sidebar data for path "+I);const{path:L,nodes:T}=t,V=[],H=[],O={};T.forEach((e=>{const{frontmatter:{category:t,title:a,slug:s,order:n,isCategoryRoot:l,anchorLinks:r}}=e;if(t)O[t]||(O[t]=[]),l?H.push({title:a,categoryName:t,isCategoryRoot:!0,path:"/"+L+"/"+s,sublinks:null,order:n,anchorLinks:r}):O[t].push({title:a,path:"/"+L+"/"+s,order:n,anchorLinks:r});else{const e="index"===s?"/"+L:"/"+L+"/"+s;V.push({title:a,path:e,sublinks:null,order:n,anchorLinks:r})}})),H.forEach((e=>{const t=e.categoryName;e.sublinks=O[t]})),V.sort(((e,t)=>e.order-t.order)),H.sort(((e,t)=>e.order-t.order)),H.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const z=[].concat(V,H);return s.createElement(s.Fragment,null,s.createElement("div",{className:"w-0"},s.createElement("div",{onClick:()=>f(!0),className:(p?"display-none":"display-flex")+" text-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-magenta-lg hover:shadow-blue-lg bg-background-ltr items-center justify-center bg-background z-5 text-magenta hover:text-blue"},s.createElement(u.u,{icon:h.mIU}))),s.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(p?"":"display-none")},s.createElement("nav",{className:"p-md"},s.createElement(u.u,{className:(S?"display-none":"")+" cursor-pointer hover:text-magenta text-magenta hover:text-blue text-lg py-sm",onClick:()=>f(!1),icon:h.kvG}),s.createElement("ul",{className:"display-flex flex-col line-height-lg"},z.map((e=>{const{isCategoryRoot:t,categoryName:a,path:n,title:l,sublinks:o,anchorLinks:c}=e;if(t){const e=l.charAt(0).toUpperCase()+l.slice(1),t="/simple-scss-utilities-docs"+n+"/"===I;return s.createElement("li",{key:n+" "+l,className:o.length?"mt-xs":""},s.createElement("span",{className:(t?"text-magenta":"")+" font-large hover:text-magenta "},s.createElement(r.Link,{to:n},e)),c&&s.createElement("ul",null,c.map((e=>{const{title:t,link:a}=e;return s.createElement("li",{key:t+" "+a,className:"pl-md text-md"},s.createElement(i,{path:n,to:a},t))}))),o&&s.createElement("ul",null,o.map(((e,t)=>{const{title:a,path:n,anchorLinks:l}=e,c="/simple-scss-utilities-docs"+n+"/"===I;return s.createElement("li",{key:a+" "+n,className:"pl-md font-normal "+(0==t?"mt-xs":"")+" "+(t==o.length-1?"mb-sm":"")},s.createElement("span",{className:(c?"text-magenta":"")+" font-bold hover:text-magenta"},s.createElement(r.Link,{to:n},a)),l&&s.createElement("ul",{className:"line-height-md "},l.map((e=>{const{title:t,link:a}=e;return s.createElement("li",{key:t+" "+a,className:"pl-md text-md hover:text-magenta"},s.createElement(i,{path:n,to:a},t))}))))}))))}l.charAt(0).toUpperCase(),l.slice(1);const m="/simple-scss-utilities-docs"+n+"/"===I;return s.createElement("li",{key:n+" "+l},s.createElement("span",{className:(m?"text-magenta":"")+" font-large hover:text-magenta"},s.createElement(r.Link,{to:n},l)))}))))))};var f=e=>{let{pathname:t,children:a}=e;const{sidebarOpen:l,setSidebarOpen:o}=(0,s.useContext)(m.c),{0:i,1:u}=(0,s.useState)(!1),{0:h,1:d}=(0,s.useState)(""),{docs:f,components:g,customize:E}=(0,r.useStaticQuery)("2241216091");let b;return t.startsWith("/simple-scss-utilities-docs/docs")?b={path:"docs",...f}:t.startsWith("/simple-scss-utilities-docs/customize")&&(b={path:"customize",...E}),s.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},s.createElement(c.Provider,{value:{activeAnchor:h,setActiveAnchor:d,hasScrolled:i,setHasScrolled:u}},s.createElement(p,{sidebarData:b}),s.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{u(!0)},onTouchStart:()=>{u(!0)}},s.createElement("div",{id:"small-width-overlay",className:"display-none "+(l?"max-tab:display-block":"")+" position-fixed top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),s.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg w-19/20 max-w-container lg:mx-auto   "+(l?"max-tab:filter-blur-md":"")},a),s.createElement(n.c,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-responsive-examples-height-mdx-3d69da9bac2c44277ee4.js.map