"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[2316],{7008:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(4552),s=a(1504),l=a(9360),r=a.p+"static/SMB3-86cbc29b80cdbab42ee3d6d98fc48a79.png";function o(e){const t=Object.assign({h1:"h1",h4:"h4",p:"p",h3:"h3"},(0,n.MN)(),e.components);return s.createElement(s.Fragment,null,s.createElement(t.h1,null,"Important! Purge!"),"\n",s.createElement(t.h4,null,"Purging will give a nice, light CSS files"),"\n",s.createElement(t.p,null,"Like any Utiltiy class framework, the CSS files generate are large. The default generated file is over 600 KB. For comparison, the entire game of Super Mario 3 was 40 Kb - less than 1/10th the size! It's amazing what being efficient with data can do, isn't it?"),"\n",s.createElement("div",{className:"center mb-xl pt-md"},s.createElement("figure",{className:"w-20"},s.createElement("img",{src:r,alt:"Logo"}),s.createElement("figcaption",{className:"text-sm"},s.createElement(l.gZ,{className:"text-md py-md",text:"The entire game of SMB 3 was 40 KB - smaller than this image! (66 KB) (Yeah I could have compressed it but I'm just sayin')"})))),"\n",s.createElement(t.p,null,"Anyway. This page is just here to remind more than anythng:"),"\n",s.createElement(t.h3,null,"It's Important to Purge!"),"\n",s.createElement(t.p,null,"The Install instructions have everythng you need to know about purging. Save 100's of KB's of page load. Even in today's world of speedy internet it can still make a difference. I just wanted to stress the point!"),"\n",s.createElement(t.p,null,"Happy purging, and happy coding!"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.MN)(),e.components);return t?s.createElement(t,e,s.createElement(o,e)):o(e)},i=(a(4056),a(896)),m=a(2496);const u=e=>{let{location:t,data:{mdx:a},children:n}=e;const{pathname:l}=t;return l.includes("/page/")?s.createElement(s.Fragment,null,n):s.createElement(i.c,{onSideBarPage:!0},s.createElement(m.c,{pathname:l},s.createElement("main",null,n)))};function h(e){return s.createElement(u,e,s.createElement(c,e))}},2496:function(e,t,a){a.d(t,{c:function(){return f}});var n=a(1504),s=a(8632),l=a(8764),r=a(4056),o=a(5184);var c=(0,n.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:a,to:s}=e;const l=(0,o.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:h}=(0,n.useContext)(c),{0:d,1:p}=(0,n.useState)(!1),{pathname:f}=l;return(0,n.useEffect)((()=>{p(i=="/simple-scss-utilities-docs"+a+" "+s)}),[i]),n.createElement("p",{className:(d?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+a+"/"==f){document.getElementById(s).scrollIntoView({behavior:"smooth"}),h(!1),m("/simple-scss-utilities-docs"+a+" "+s)}else(0,r.navigate)(a+"?anchor="+s)}},t)},m=a(3616),u=a(6542),h=a(5896),d=a(7264);var p=e=>{let{sidebarData:t}=e;const{setActiveAnchor:a,hasScrolled:s}=(0,n.useContext)(c),{sidebarOpen:p,setSidebarOpen:f}=(0,n.useContext)(m.c),{0:g,1:E}=(0,n.useState)([]),{0:b,1:v}=(0,n.useState)(!1),{0:y,1:x}=(0,n.useState)([]),{0:w,1:k}=(0,n.useState)(!1),{0:S,1:N}=(0,n.useState)(!1),{width:I}=(0,d.c)(),C=(0,o.useLocation)(),{pathname:A}=C;if((0,n.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,a)=>{const n=[];e.forEach(((e,t)=>{const a=e.target.href.split("#")[1],s=A.slice(0,-1)+" "+a;e.isIntersecting?n.push({anchorString:s,inView:!0,offsetTop:e.target.offsetTop}):n.push({anchorString:s,inView:!1,offsetTop:e.target.offsetTop})})),x(n)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,n.useEffect)((()=>{y.length&&!b&&(E(y),v(!0))}),[y,b]),(0,n.useEffect)((()=>{if(b&&y.length){let e=(0,l.c)(g);if(y.forEach((t=>{const a=g.findIndex((e=>t.anchorString==e.anchorString));a>=0&&e.splice(a,1,t)})),E(e),x([]),s){let t=Number.POSITIVE_INFINITY,n=-1;if(e.forEach(((e,a)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,n=a)})),n>=0){const t=e[n];a(t.anchorString)}else a("")}}}),[g,y,b,s]),(0,n.useEffect)((()=>{if(C.search&&!w){const e=new URLSearchParams(C.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const n=A.slice(0,-1);a(n+" "+e)}}k(!0)}else if(b&&!w){let e=g[0];e.inView&&a(e.anchorString),k(!0)}}),[b,g,w]),(0,n.useEffect)((()=>{N(I>768)}),[I]),(0,n.useEffect)((()=>{f(!0)}),[S]),!t)return n.createElement(n.Fragment,null,"No sidebar data for path "+A);const{path:L,nodes:T}=t,B=[],z=[],O={};T.forEach((e=>{const{frontmatter:{category:t,title:a,slug:n,order:s,isCategoryRoot:l,anchorLinks:r}}=e;if(t)O[t]||(O[t]=[]),l?z.push({title:a,categoryName:t,isCategoryRoot:!0,path:"/"+L+"/"+n,sublinks:null,order:s,anchorLinks:r}):O[t].push({title:a,path:"/"+L+"/"+n,order:s,anchorLinks:r});else{const e="index"===n?"/"+L:"/"+L+"/"+n;B.push({title:a,path:e,sublinks:null,order:s,anchorLinks:r})}})),z.forEach((e=>{const t=e.categoryName;e.sublinks=O[t]})),B.sort(((e,t)=>e.order-t.order)),z.sort(((e,t)=>e.order-t.order)),z.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const P=[].concat(B,z);return n.createElement(n.Fragment,null,n.createElement("div",{className:"w-0"},n.createElement("div",{onClick:()=>f(!0),className:(p?"display-none":"display-flex")+" text-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-magenta-lg hover:shadow-blue-lg bg-background-ltr items-center justify-center bg-background z-5 text-magenta hover:text-blue"},n.createElement(u.u,{icon:h.mIU}))),n.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(p?"":"display-none")},n.createElement("nav",{className:"p-md"},n.createElement(u.u,{className:(S?"display-none":"")+" cursor-pointer hover:text-magenta text-magenta hover:text-blue text-lg py-sm",onClick:()=>f(!1),icon:h.kvG}),n.createElement("ul",{className:"display-flex flex-col line-height-lg"},P.map((e=>{const{isCategoryRoot:t,categoryName:a,path:s,title:l,sublinks:o,anchorLinks:c}=e;if(t){const e=l.charAt(0).toUpperCase()+l.slice(1),t="/simple-scss-utilities-docs"+s+"/"===A;return n.createElement("li",{key:s+" "+l},n.createElement("span",{className:(t?"text-magenta":"")+" font-large hover:text-magenta "},n.createElement(r.Link,{to:s},e)),c&&n.createElement("ul",{className:"line-height-md "},c.map(((e,t)=>{const{title:a,link:l}=e;return n.createElement("li",{key:a+" "+l,className:"pl-md text-md "+(t==c.length-1?"mb-xs":"")+" "},n.createElement(i,{path:s,to:l},a))}))),o&&n.createElement("ul",null,o.map(((e,t)=>{const{title:a,path:s,anchorLinks:l}=e,c="/simple-scss-utilities-docs"+s+"/"===A;return n.createElement("li",{key:a+" "+s,className:"pl-md font-normal   "+(t==o.length-1?"mb-xs":"")},n.createElement("span",{className:(c?"text-magenta":"")+" font-bold hover:text-magenta"},n.createElement(r.Link,{to:s},a)),l&&n.createElement("ul",{className:"line-height-md "},l.map((e=>{const{title:t,link:a}=e;return n.createElement("li",{key:t+" "+a,className:"pl-md text-md hover:text-magenta"},n.createElement(i,{path:s,to:a},t))}))))}))))}l.charAt(0).toUpperCase(),l.slice(1);const m="/simple-scss-utilities-docs"+s+"/"===A;return n.createElement("li",{key:s+" "+l},n.createElement("span",{className:(m?"text-magenta":"")+" font-large hover:text-magenta"},n.createElement(r.Link,{to:s},l)))}))))))};var f=e=>{let{pathname:t,children:a}=e;const{sidebarOpen:l,setSidebarOpen:o}=(0,n.useContext)(m.c),{0:i,1:u}=(0,n.useState)(!1),{0:h,1:d}=(0,n.useState)(""),{docs:f,components:g,customize:E}=(0,r.useStaticQuery)("2241216091");let b;return t.startsWith("/simple-scss-utilities-docs/docs")?b={path:"docs",...f}:t.startsWith("/simple-scss-utilities-docs/customize")&&(b={path:"customize",...E}),n.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},n.createElement(c.Provider,{value:{activeAnchor:h,setActiveAnchor:d,hasScrolled:i,setHasScrolled:u}},n.createElement(p,{sidebarData:b}),n.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{u(!0)},onTouchStart:()=>{u(!0)}},n.createElement("div",{id:"small-width-overlay",className:"display-none "+(l?"max-tab:display-block":"")+" position-fixed top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),n.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg w-19/20 max-w-container lg:mx-auto   "+(l?"max-tab:filter-blur-md":"")},a),n.createElement(s.c,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-important-mdx-db3ab788ee0a29c88232.js.map