"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[6280],{5124:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var s=n(4552),l=n(1504);function a(e){const t=Object.assign({h1:"h1",h2:"h2"},(0,s.MN)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"How to use the Flex Classes"),"\n",l.createElement(t.h2,null,"Flex Direction"),"\n",l.createElement(t.h2,null,"Flex Wrap"),"\n",l.createElement(t.h2,null,"Flex Shrink and Flex Grow"),"\n",l.createElement(t.h2,null,"Justify Items and Content"),"\n",l.createElement(t.h2,null,"Align Items and Content"),"\n",l.createElement(t.h2,null,"Align Self and Justify Self"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.MN)(),e.components);return t?l.createElement(t,e,l.createElement(a,e)):a(e)},o=(n(4056),n(1548)),r=n(2496);const i=e=>{let{location:t,data:{mdx:n},children:s}=e;const{pathname:a}=t;return a.includes("/page/")?l.createElement(l.Fragment,null,s):l.createElement(o.c,{onSideBarPage:!0},l.createElement(r.c,{pathname:a},l.createElement("main",null,s)))};function u(e){return l.createElement(i,e,l.createElement(c,e))}},2496:function(e,t,n){n.d(t,{c:function(){return f}});var s=n(1504),l=n(8632),a=n(8764),c=n(4056),o=n(5184);var r=(0,s.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:n,to:l}=e;const a=(0,o.useLocation)(),{activeAnchor:i,setActiveAnchor:u,hasScrolled:m,setHasScrolled:d}=(0,s.useContext)(r),{0:h,1:p}=(0,s.useState)(!1),{pathname:f}=a;return(0,s.useEffect)((()=>{p(i=="/simple-scss-utilities-docs"+n+" "+l)}),[i]),s.createElement("p",{className:(h?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+n+"/"==f){document.getElementById(l).scrollIntoView({behavior:"smooth"}),d(!1),u("/simple-scss-utilities-docs"+n+" "+l)}else(0,c.navigate)(n+"?anchor="+l)}},t)},u=n(3616),m=n(6542),d=n(5896),h=n(7264);var p=e=>{let{sidebarData:t}=e;const{setActiveAnchor:n,hasScrolled:l}=(0,s.useContext)(r),{sidebarOpen:p,setSidebarOpen:f}=(0,s.useContext)(u.c),{0:E,1:b}=(0,s.useState)([]),{0:g,1:v}=(0,s.useState)(!1),{0:k,1:y}=(0,s.useState)([]),{0:S,1:x}=(0,s.useState)(!1),{0:w,1:N}=(0,s.useState)(!1),{width:C}=(0,h.c)(),A=(0,o.useLocation)(),{pathname:I}=A;if((0,s.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,n)=>{const s=[];e.forEach(((e,t)=>{const n=e.target.href.split("#")[1],l=I.slice(0,-1)+" "+n;e.isIntersecting?s.push({anchorString:l,inView:!0,offsetTop:e.target.offsetTop}):s.push({anchorString:l,inView:!1,offsetTop:e.target.offsetTop})})),y(s)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,s.useEffect)((()=>{k.length&&!g&&(b(k),v(!0))}),[k,g]),(0,s.useEffect)((()=>{if(g&&k.length){let e=(0,a.c)(E);if(k.forEach((t=>{const n=E.findIndex((e=>t.anchorString==e.anchorString));n>=0&&e.splice(n,1,t)})),b(e),y([]),l){let t=Number.POSITIVE_INFINITY,s=-1;if(e.forEach(((e,n)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,s=n)})),s>=0){const t=e[s];n(t.anchorString)}else n("")}}}),[E,k,g,l]),(0,s.useEffect)((()=>{if(A.search&&!S){const e=new URLSearchParams(A.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const s=I.slice(0,-1);n(s+" "+e)}}x(!0)}else if(g&&!S){let e=E[0];e.inView&&n(e.anchorString),x(!0)}}),[g,E,S]),(0,s.useEffect)((()=>{N(C>768)}),[C]),(0,s.useEffect)((()=>{f(!0)}),[w]),!t)return s.createElement(s.Fragment,null,"No sidebar data for path "+I);const{path:L,nodes:F}=t,T=[],O=[],V={};F.forEach((e=>{const{frontmatter:{category:t,title:n,slug:s,order:l,isCategoryRoot:a,anchorLinks:c}}=e;if(t)V[t]||(V[t]=[]),a?O.push({title:n,categoryName:t,isCategoryRoot:!0,path:"/"+L+"/"+s,sublinks:null,order:l,anchorLinks:c}):V[t].push({title:n,path:"/"+L+"/"+s,order:l,anchorLinks:c});else{const e="index"===s?"/"+L:"/"+L+"/"+s;T.push({title:n,path:e,sublinks:null,order:l,anchorLinks:c})}})),O.forEach((e=>{const t=e.categoryName;e.sublinks=V[t]})),T.sort(((e,t)=>e.order-t.order)),O.sort(((e,t)=>e.order-t.order)),O.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const z=[].concat(T,O);return s.createElement(s.Fragment,null,s.createElement("div",{className:"w-0"},s.createElement("div",{onClick:()=>f(!0),className:(p?"display-none":"display-flex")+" font-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-lg bg-background-ltr items-center justify-content-center bg-background z-5"},s.createElement(m.u,{icon:d.mIU}))),s.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(p?"":"display-none")},s.createElement("nav",{className:"p-md"},s.createElement(m.u,{className:(w?"display-none":"")+" cursor-pointer hover:text-blue-ltr font-lg py-sm",onClick:()=>f(!1),icon:d.kvG}),s.createElement("ul",{className:"display-flex flex-col"},z.map((e=>{const{isCategoryRoot:t,categoryName:n,path:l,title:a,sublinks:o,anchorLinks:r}=e;if(t){const e=a.charAt(0).toUpperCase()+a.slice(1),t="/simple-scss-utilities-docs"+l+"/"===I;return s.createElement("li",{key:l+" "+a},s.createElement("span",{className:(t?"text-blue":"")+" font-bold"},s.createElement(c.Link,{to:l},e)),r&&s.createElement("ul",null,r.map((e=>{const{title:t,link:n}=e;return s.createElement("li",{key:t+" "+n,className:"pl-md font-md"},s.createElement(i,{path:l,to:n},t))}))),o&&s.createElement("ul",null,o.map((e=>{const{title:t,path:n,anchorLinks:l}=e,a="/simple-scss-utilities-docs"+n+"/"===I;return s.createElement("li",{key:t+" "+n,className:"pl-md font-normal"},s.createElement("span",{className:a?"text-blue":""},s.createElement(c.Link,{to:n},t)),l&&s.createElement("ul",null,l.map((e=>{const{title:t,link:l}=e;return s.createElement("li",{key:t+" "+l,className:"pl-md font-md"},s.createElement(i,{path:n,to:l},t))}))))}))))}a.charAt(0).toUpperCase(),a.slice(1);const u="/simple-scss-utilities-docs"+l+"/"===I;return s.createElement("li",{key:l+" "+a},s.createElement("span",{className:u?"text-blue":""},s.createElement(c.Link,{to:l},a)))}))))))};var f=e=>{let{pathname:t,children:n}=e;const{sidebarOpen:a,setSidebarOpen:o}=(0,s.useContext)(u.c),{0:i,1:m}=(0,s.useState)(!1),{0:d,1:h}=(0,s.useState)(""),{docs:f,components:E,customize:b}=(0,c.useStaticQuery)("2241216091");let g;return t.startsWith("/simple-scss-utilities-docs/docs")?g={path:"docs",...f}:t.startsWith("/simple-scss-utilities-docs/customize")&&(g={path:"customize",...b}),s.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},s.createElement(r.Provider,{value:{activeAnchor:d,setActiveAnchor:h,hasScrolled:i,setHasScrolled:m}},s.createElement(p,{sidebarData:g}),s.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{m(!0)},onTouchStart:()=>{m(!0)}},s.createElement("div",{id:"small-width-overlay",className:"display-none "+(a?"max-tab:display-block":"")+" position-absolute top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),s.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg "+(a?"max-tab:filter-blur-md":"")},n),s.createElement(l.c,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-responsive-examples-flex-mdx-2cde44bdb7131b662551.js.map