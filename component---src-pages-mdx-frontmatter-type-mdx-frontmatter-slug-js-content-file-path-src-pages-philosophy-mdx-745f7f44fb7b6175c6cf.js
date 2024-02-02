"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[5504,5590],{1195:function(e,t,n){n.r(t);var s=n(1151),a=n(7294),l=n(5705);const r=function(e){let{children:t}=e;const n=Object.assign({main:"main"},(0,s.ah)());return a.createElement(l.Z,null,a.createElement(n.main,null,t))};function c(e){const t=Object.assign({h1:"h1",p:"p"},(0,s.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"This is the philosophy page"),"\n",a.createElement(t.p,null,"Philosophy info here"))}t.default=function(e){return void 0===e&&(e={}),a.createElement(r,e,a.createElement(c,e))}},5437:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var s=n(1195),a=n(7294),l=(n(1883),n(5705)),r=n(2525);const c=e=>{let{location:t,data:{mdx:n},children:s}=e;const{pathname:c}=t;return c.includes("/page/")?a.createElement(a.Fragment,null,s):a.createElement(l.Z,{onSideBarPage:!0},a.createElement(r.Z,{pathname:c},a.createElement("main",null,s)))};function o(e){return a.createElement(c,e,a.createElement(s.default,e))}},2525:function(e,t,n){n.d(t,{Z:function(){return u}});var s=n(7294),a=n(8419),l=n(5785),r=n(1883),c=n(7896);var o=(0,s.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:n,to:a}=e;const l=(0,c.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:h}=(0,s.useContext)(o),{0:d,1:p}=(0,s.useState)(!1),{pathname:f}=l;return(0,s.useEffect)((()=>{p(i==n+" "+a)}),[i]),s.createElement("p",{className:(d?"font-bold":"")+" cursor-pointer",onClick:()=>{if(n+"/"==f){document.getElementById(a).scrollIntoView({behavior:"smooth"}),h(!1),m(n+" "+a)}else(0,r.navigate)(n+"?anchor="+a)}},t)};var m=e=>{let{sidebarData:t}=e;const{setActiveAnchor:n,hasScrolled:a}=(0,s.useContext)(o),{0:m,1:u}=(0,s.useState)([]),{0:h,1:d}=(0,s.useState)(!1),{0:p,1:f}=(0,s.useState)([]),{0:E,1:g}=(0,s.useState)(!1),b=(0,c.useLocation)(),{pathname:v}=b;if((0,s.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,n)=>{const s=[];e.forEach(((e,t)=>{const n=e.target.href.split("#")[1],a=v.slice(0,-1)+" "+n;e.isIntersecting?s.push({anchorString:a,inView:!0,offsetTop:e.target.offsetTop}):s.push({anchorString:a,inView:!1,offsetTop:e.target.offsetTop})})),f(s)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,s.useEffect)((()=>{p.length&&!h&&(u(p),d(!0))}),[p,h]),(0,s.useEffect)((()=>{if(h&&p.length){let e=(0,l.Z)(m);if(p.forEach((t=>{const n=m.findIndex((e=>t.anchorString==e.anchorString));n>=0&&e.splice(n,1,t)})),u(e),f([]),a){let t=Number.POSITIVE_INFINITY,s=-1;if(e.forEach(((e,n)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,s=n)})),s>=0){const t=e[s];n(t.anchorString)}else n("")}}}),[m,p,h,a]),(0,s.useEffect)((()=>{if(b.search&&!E){const e=new URLSearchParams(b.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const s=v.slice(0,-1);n(s+" "+e)}}g(!0)}else if(h&&!E){let e=m[0];e.inView&&n(e.anchorString),g(!0)}}),[h,m,E]),!t)return s.createElement(s.Fragment,null,"No sidebar data for path "+v);const{path:S,nodes:k}=t,y=[],N=[],w={};k.forEach((e=>{const{frontmatter:{category:t,title:n,slug:s,order:a,isCategoryRoot:l,anchorLinks:r}}=e;if(t)w[t]||(w[t]=[]),l?N.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+S+"/"+s,sublinks:null,anchorLinks:r}):w[t].push({title:n,path:"/"+S+"/"+s,order:a,anchorLinks:r});else{const e="index"===s?"/"+S:"/"+S+"/"+s;y.push({title:n,path:e,sublinks:null,order:a,anchorLinks:r})}})),N.forEach((e=>{const t=e.categoryName;e.sublinks=w[t]})),y.sort(((e,t)=>e.order-t.order)),N.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),N.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const x=[].concat(y,N);return s.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},s.createElement("h1",null,"This is the sidebar"),s.createElement("nav",{className:"display-flex flex-col"},s.createElement("ul",{className:"p-md"},x.map((e=>{const{isCategoryRoot:t,categoryName:n,path:a,title:l,sublinks:c}=e;if(t){const e=l.charAt(0).toUpperCase()+l.slice(1),t=a+"/"===v;return s.createElement("li",{key:a+" "+l,className:"font-bold"},s.createElement("span",{className:t?"text-blue":""},s.createElement(r.Link,{to:a},e)),c&&s.createElement("ul",null,c.map((e=>{const{title:t,path:n,anchorLinks:a}=e,l=n+"/"===v;return s.createElement("li",{key:t+" "+n,className:"pl-md font-normal"},s.createElement("span",{className:l?"text-blue":""},s.createElement(r.Link,{to:n},t)),a&&s.createElement("ul",null,a.map((e=>{const{title:t,link:a}=e;return s.createElement("li",{key:t+" "+a,className:"pl-md font-md"},s.createElement(i,{path:n,to:a},t))}))))}))))}l.charAt(0).toUpperCase(),l.slice(1);const o=a+"/"===v;return s.createElement("li",{key:a+" "+l},s.createElement("span",{className:o?"text-blue":""},s.createElement(r.Link,{to:a},l)))})))))};var u=e=>{let{pathname:t,children:n}=e;const{0:l,1:c}=(0,s.useState)(!1),{0:i,1:u}=(0,s.useState)(""),{docs:h,components:d,customize:p}=(0,r.useStaticQuery)("543507817");t.split("/").length&&t.split("/")[1];let f;return t.startsWith("/simple-scss-utilities-docs/docs")?f={path:"docs",...h}:t.startsWith("/simple-scss-utilities-docs/components")?f={path:"components",...d}:t.startsWith("/simple-scss-utilities-docs/customize")&&(f={path:"customize",...p}),s.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},s.createElement(o.Provider,{value:{activeAnchor:i,setActiveAnchor:u,hasScrolled:l,setHasScrolled:c}},s.createElement(m,{sidebarData:f}),s.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{c(!0)},onTouchStart:()=>{c(!0)}},s.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},n),s.createElement(a.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-src-pages-philosophy-mdx-745f7f44fb7b6175c6cf.js.map