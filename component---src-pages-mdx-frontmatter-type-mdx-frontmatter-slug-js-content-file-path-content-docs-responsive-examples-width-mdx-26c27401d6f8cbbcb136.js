"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[4170],{6532:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(4552),s=a(1504);function l(e){const t=Object.assign({h1:"h1",h2:"h2"},(0,n.MN)(),e.components);return s.createElement(s.Fragment,null,s.createElement(t.h1,null,"How to use Width Classes"),"\n",s.createElement(t.h2,null,"Width Percentage Values"),"\n",s.createElement(t.h2,null,"Width Rem Values"),"\n",s.createElement(t.h2,null,"Screen Based Widths"),"\n",s.createElement(t.h2,null,"XS - XL"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.MN)(),e.components);return t?s.createElement(t,e,s.createElement(l,e)):l(e)},r=(a(4056),a(1548)),c=a(2496);const i=e=>{let{location:t,data:{mdx:a},children:n}=e;const{pathname:l}=t;return l.includes("/page/")?s.createElement(s.Fragment,null,n):s.createElement(r.c,{onSideBarPage:!0},s.createElement(c.c,{pathname:l},s.createElement("main",null,n)))};function m(e){return s.createElement(i,e,s.createElement(o,e))}},2496:function(e,t,a){a.d(t,{c:function(){return f}});var n=a(1504),s=a(8632),l=a(8764),o=a(4056),r=a(5184);var c=(0,n.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:a,to:s}=e;const l=(0,r.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:h}=(0,n.useContext)(c),{0:d,1:p}=(0,n.useState)(!1),{pathname:f}=l;return(0,n.useEffect)((()=>{p(i=="/simple-scss-utilities-docs"+a+" "+s)}),[i]),n.createElement("p",{className:(d?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+a+"/"==f){document.getElementById(s).scrollIntoView({behavior:"smooth"}),h(!1),m("/simple-scss-utilities-docs"+a+" "+s)}else(0,o.navigate)(a+"?anchor="+s)}},t)},m=a(3616),u=a(6542),h=a(5896),d=a(7264);var p=e=>{let{sidebarData:t}=e;const{setActiveAnchor:a,hasScrolled:s}=(0,n.useContext)(c),{sidebarOpen:p,setSidebarOpen:f}=(0,n.useContext)(m.c),{0:g,1:E}=(0,n.useState)([]),{0:b,1:v}=(0,n.useState)(!1),{0:x,1:k}=(0,n.useState)([]),{0:y,1:S}=(0,n.useState)(!1),{0:w,1:N}=(0,n.useState)(!1),{width:C}=(0,d.c)(),A=(0,r.useLocation)(),{pathname:I}=A;if((0,n.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,a)=>{const n=[];e.forEach(((e,t)=>{const a=e.target.href.split("#")[1],s=I.slice(0,-1)+" "+a;e.isIntersecting?n.push({anchorString:s,inView:!0,offsetTop:e.target.offsetTop}):n.push({anchorString:s,inView:!1,offsetTop:e.target.offsetTop})})),k(n)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,n.useEffect)((()=>{x.length&&!b&&(E(x),v(!0))}),[x,b]),(0,n.useEffect)((()=>{if(b&&x.length){let e=(0,l.c)(g);if(x.forEach((t=>{const a=g.findIndex((e=>t.anchorString==e.anchorString));a>=0&&e.splice(a,1,t)})),E(e),k([]),s){let t=Number.POSITIVE_INFINITY,n=-1;if(e.forEach(((e,a)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,n=a)})),n>=0){const t=e[n];a(t.anchorString)}else a("")}}}),[g,x,b,s]),(0,n.useEffect)((()=>{if(A.search&&!y){const e=new URLSearchParams(A.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const n=I.slice(0,-1);a(n+" "+e)}}S(!0)}else if(b&&!y){let e=g[0];e.inView&&a(e.anchorString),S(!0)}}),[b,g,y]),(0,n.useEffect)((()=>{N(C>768)}),[C]),(0,n.useEffect)((()=>{f(!0)}),[w]),!t)return n.createElement(n.Fragment,null,"No sidebar data for path "+I);const{path:L,nodes:T}=t,V=[],O=[],W={};T.forEach((e=>{const{frontmatter:{category:t,title:a,slug:n,order:s,isCategoryRoot:l,anchorLinks:o}}=e;if(t)W[t]||(W[t]=[]),l?O.push({title:a,categoryName:t,isCategoryRoot:!0,path:"/"+L+"/"+n,sublinks:null,order:s,anchorLinks:o}):W[t].push({title:a,path:"/"+L+"/"+n,order:s,anchorLinks:o});else{const e="index"===n?"/"+L:"/"+L+"/"+n;V.push({title:a,path:e,sublinks:null,order:s,anchorLinks:o})}})),O.forEach((e=>{const t=e.categoryName;e.sublinks=W[t]})),V.sort(((e,t)=>e.order-t.order)),O.sort(((e,t)=>e.order-t.order)),O.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const z=[].concat(V,O);return n.createElement(n.Fragment,null,n.createElement("div",{className:"w-0"},n.createElement("div",{onClick:()=>f(!0),className:(p?"display-none":"display-flex")+" font-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-magenta-lg hover:shadow-blue-lg bg-background-ltr items-center justify-center bg-background z-5 text-magenta hover:text-blue"},n.createElement(u.u,{icon:h.mIU}))),n.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(p?"":"display-none")},n.createElement("nav",{className:"p-md"},n.createElement(u.u,{className:(w?"display-none":"")+" cursor-pointer hover:text-magenta text-magenta hover:text-blue font-lg py-sm",onClick:()=>f(!1),icon:h.kvG}),n.createElement("ul",{className:"display-flex flex-col line-height-lg"},z.map((e=>{const{isCategoryRoot:t,categoryName:a,path:s,title:l,sublinks:r,anchorLinks:c}=e;if(t){const e=l.charAt(0).toUpperCase()+l.slice(1),t="/simple-scss-utilities-docs"+s+"/"===I;return n.createElement("li",{key:s+" "+l,className:r.length?"mt-xs":""},n.createElement("span",{className:(t?"text-magenta":"")+" font-large hover:text-magenta "},n.createElement(o.Link,{to:s},e)),c&&n.createElement("ul",null,c.map((e=>{const{title:t,link:a}=e;return n.createElement("li",{key:t+" "+a,className:"pl-md font-md"},n.createElement(i,{path:s,to:a},t))}))),r&&n.createElement("ul",null,r.map(((e,t)=>{const{title:a,path:s,anchorLinks:l}=e,c="/simple-scss-utilities-docs"+s+"/"===I;return n.createElement("li",{key:a+" "+s,className:"pl-md font-normal "+(0==t?"mt-xs":"")+" "+(t==r.length-1?"mb-sm":"")},n.createElement("span",{className:(c?"text-magenta":"")+" font-bold hover:text-magenta"},n.createElement(o.Link,{to:s},a)),l&&n.createElement("ul",{className:"line-height-md "},l.map((e=>{const{title:t,link:a}=e;return n.createElement("li",{key:t+" "+a,className:"pl-md font-md hover:text-magenta"},n.createElement(i,{path:s,to:a},t))}))))}))))}l.charAt(0).toUpperCase(),l.slice(1);const m="/simple-scss-utilities-docs"+s+"/"===I;return n.createElement("li",{key:s+" "+l},n.createElement("span",{className:(m?"text-magenta":"")+" font-large hover:text-magenta"},n.createElement(o.Link,{to:s},l)))}))))))};var f=e=>{let{pathname:t,children:a}=e;const{sidebarOpen:l,setSidebarOpen:r}=(0,n.useContext)(m.c),{0:i,1:u}=(0,n.useState)(!1),{0:h,1:d}=(0,n.useState)(""),{docs:f,components:g,customize:E}=(0,o.useStaticQuery)("2241216091");let b;return t.startsWith("/simple-scss-utilities-docs/docs")?b={path:"docs",...f}:t.startsWith("/simple-scss-utilities-docs/customize")&&(b={path:"customize",...E}),n.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},n.createElement(c.Provider,{value:{activeAnchor:h,setActiveAnchor:d,hasScrolled:i,setHasScrolled:u}},n.createElement(p,{sidebarData:b}),n.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{u(!0)},onTouchStart:()=>{u(!0)}},n.createElement("div",{id:"small-width-overlay",className:"display-none "+(l?"max-tab:display-block":"")+" position-absolute top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),n.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg max-w-container lg:mx-auto   "+(l?"max-tab:filter-blur-md":"")},a),n.createElement(s.c,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-responsive-examples-width-mdx-26c27401d6f8cbbcb136.js.map