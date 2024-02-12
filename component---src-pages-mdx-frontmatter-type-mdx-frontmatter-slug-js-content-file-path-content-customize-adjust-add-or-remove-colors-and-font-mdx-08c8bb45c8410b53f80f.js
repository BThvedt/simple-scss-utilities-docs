"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[3528],{5860:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(4552),s=n(1504);function l(e){const t=Object.assign({h1:"h1",h4:"h4",p:"p"},(0,a.MN)(),e.components);return s.createElement(s.Fragment,null,s.createElement(t.h1,null,"Colors and Fonts"),"\n",s.createElement(t.h4,null,"Customizing Colors and Fonts"),"\n",s.createElement(t.p,null,"Not done yet!\r\nWorkin' on it.."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.MN)(),e.components);return t?s.createElement(t,e,s.createElement(l,e)):l(e)},r=(n(4056),n(1548)),c=n(2496);const i=e=>{let{location:t,data:{mdx:n},children:a}=e;const{pathname:l}=t;return l.includes("/page/")?s.createElement(s.Fragment,null,a):s.createElement(r.c,{onSideBarPage:!0},s.createElement(c.c,{pathname:l},s.createElement("main",null,a)))};function m(e){return s.createElement(i,e,s.createElement(o,e))}},2496:function(e,t,n){n.d(t,{c:function(){return f}});var a=n(1504),s=n(8632),l=n(8764),o=n(4056),r=n(5184);var c=(0,a.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:n,to:s}=e;const l=(0,r.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:d}=(0,a.useContext)(c),{0:h,1:p}=(0,a.useState)(!1),{pathname:f}=l;return(0,a.useEffect)((()=>{p(i=="/simple-scss-utilities-docs"+n+" "+s)}),[i]),a.createElement("p",{className:(h?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+n+"/"==f){document.getElementById(s).scrollIntoView({behavior:"smooth"}),d(!1),m("/simple-scss-utilities-docs"+n+" "+s)}else(0,o.navigate)(n+"?anchor="+s)}},t)},m=n(3616),u=n(6542),d=n(5896),h=n(7264);var p=e=>{let{sidebarData:t}=e;const{setActiveAnchor:n,hasScrolled:s}=(0,a.useContext)(c),{sidebarOpen:p,setSidebarOpen:f}=(0,a.useContext)(m.c),{0:g,1:E}=(0,a.useState)([]),{0:b,1:v}=(0,a.useState)(!1),{0:x,1:k}=(0,a.useState)([]),{0:y,1:w}=(0,a.useState)(!1),{0:N,1:S}=(0,a.useState)(!1),{width:C}=(0,h.c)(),A=(0,r.useLocation)(),{pathname:I}=A;if((0,a.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,n)=>{const a=[];e.forEach(((e,t)=>{const n=e.target.href.split("#")[1],s=I.slice(0,-1)+" "+n;e.isIntersecting?a.push({anchorString:s,inView:!0,offsetTop:e.target.offsetTop}):a.push({anchorString:s,inView:!1,offsetTop:e.target.offsetTop})})),k(a)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,a.useEffect)((()=>{x.length&&!b&&(E(x),v(!0))}),[x,b]),(0,a.useEffect)((()=>{if(b&&x.length){let e=(0,l.c)(g);if(x.forEach((t=>{const n=g.findIndex((e=>t.anchorString==e.anchorString));n>=0&&e.splice(n,1,t)})),E(e),k([]),s){let t=Number.POSITIVE_INFINITY,a=-1;if(e.forEach(((e,n)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,a=n)})),a>=0){const t=e[a];n(t.anchorString)}else n("")}}}),[g,x,b,s]),(0,a.useEffect)((()=>{if(A.search&&!y){const e=new URLSearchParams(A.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const a=I.slice(0,-1);n(a+" "+e)}}w(!0)}else if(b&&!y){let e=g[0];e.inView&&n(e.anchorString),w(!0)}}),[b,g,y]),(0,a.useEffect)((()=>{S(C>768)}),[C]),(0,a.useEffect)((()=>{f(!0)}),[N]),!t)return a.createElement(a.Fragment,null,"No sidebar data for path "+I);const{path:L,nodes:T}=t,O=[],z=[],F={};T.forEach((e=>{const{frontmatter:{category:t,title:n,slug:a,order:s,isCategoryRoot:l,anchorLinks:o}}=e;if(t)F[t]||(F[t]=[]),l?z.push({title:n,categoryName:t,isCategoryRoot:!0,path:"/"+L+"/"+a,sublinks:null,order:s,anchorLinks:o}):F[t].push({title:n,path:"/"+L+"/"+a,order:s,anchorLinks:o});else{const e="index"===a?"/"+L:"/"+L+"/"+a;O.push({title:n,path:e,sublinks:null,order:s,anchorLinks:o})}})),z.forEach((e=>{const t=e.categoryName;e.sublinks=F[t]})),O.sort(((e,t)=>e.order-t.order)),z.sort(((e,t)=>e.order-t.order)),z.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const V=[].concat(O,z);return a.createElement(a.Fragment,null,a.createElement("div",{className:"w-0"},a.createElement("div",{onClick:()=>f(!0),className:(p?"display-none":"display-flex")+" font-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-magenta-lg hover:shadow-blue-lg bg-background-ltr items-center justify-center bg-background z-5 text-magenta hover:text-blue"},a.createElement(u.u,{icon:d.mIU}))),a.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(p?"":"display-none")},a.createElement("nav",{className:"p-md"},a.createElement(u.u,{className:(N?"display-none":"")+" cursor-pointer hover:text-magenta text-magenta hover:text-blue font-lg py-sm",onClick:()=>f(!1),icon:d.kvG}),a.createElement("ul",{className:"display-flex flex-col line-height-lg"},V.map((e=>{const{isCategoryRoot:t,categoryName:n,path:s,title:l,sublinks:r,anchorLinks:c}=e;if(t){const e=l.charAt(0).toUpperCase()+l.slice(1),t="/simple-scss-utilities-docs"+s+"/"===I;return a.createElement("li",{key:s+" "+l,className:r.length?"mt-xs":""},a.createElement("span",{className:(t?"text-magenta":"")+" font-large hover:text-magenta "},a.createElement(o.Link,{to:s},e)),c&&a.createElement("ul",null,c.map((e=>{const{title:t,link:n}=e;return a.createElement("li",{key:t+" "+n,className:"pl-md font-md"},a.createElement(i,{path:s,to:n},t))}))),r&&a.createElement("ul",null,r.map(((e,t)=>{const{title:n,path:s,anchorLinks:l}=e,c="/simple-scss-utilities-docs"+s+"/"===I;return a.createElement("li",{key:n+" "+s,className:"pl-md font-normal "+(0==t?"mt-xs":"")+" "+(t==r.length-1?"mb-sm":"")},a.createElement("span",{className:(c?"text-magenta":"")+" font-bold hover:text-magenta"},a.createElement(o.Link,{to:s},n)),l&&a.createElement("ul",{className:"line-height-md "},l.map((e=>{const{title:t,link:n}=e;return a.createElement("li",{key:t+" "+n,className:"pl-md font-md hover:text-magenta"},a.createElement(i,{path:s,to:n},t))}))))}))))}l.charAt(0).toUpperCase(),l.slice(1);const m="/simple-scss-utilities-docs"+s+"/"===I;return a.createElement("li",{key:s+" "+l},a.createElement("span",{className:(m?"text-magenta":"")+" font-large hover:text-magenta"},a.createElement(o.Link,{to:s},l)))}))))))};var f=e=>{let{pathname:t,children:n}=e;const{sidebarOpen:l,setSidebarOpen:r}=(0,a.useContext)(m.c),{0:i,1:u}=(0,a.useState)(!1),{0:d,1:h}=(0,a.useState)(""),{docs:f,components:g,customize:E}=(0,o.useStaticQuery)("2241216091");let b;return t.startsWith("/simple-scss-utilities-docs/docs")?b={path:"docs",...f}:t.startsWith("/simple-scss-utilities-docs/customize")&&(b={path:"customize",...E}),a.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},a.createElement(c.Provider,{value:{activeAnchor:d,setActiveAnchor:h,hasScrolled:i,setHasScrolled:u}},a.createElement(p,{sidebarData:b}),a.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{u(!0)},onTouchStart:()=>{u(!0)}},a.createElement("div",{id:"small-width-overlay",className:"display-none "+(l?"max-tab:display-block":"")+" position-absolute top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),a.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg max-w-container lg:mx-auto   "+(l?"max-tab:filter-blur-md":"")},n),a.createElement(s.c,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-customize-adjust-add-or-remove-colors-and-font-mdx-08c8bb45c8410b53f80f.js.map