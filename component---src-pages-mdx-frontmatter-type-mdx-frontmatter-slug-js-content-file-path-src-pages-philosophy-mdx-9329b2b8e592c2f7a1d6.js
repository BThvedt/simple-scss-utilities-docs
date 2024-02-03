"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[5504,5590],{1195:function(e,t,s){s.r(t);var n=s(1151),a=s(7294),l=s(5705);const c=function(e){let{children:t}=e;const s=Object.assign({main:"main"},(0,n.ah)());return a.createElement(l.Z,null,a.createElement(s.main,null,t))};function o(e){const t=Object.assign({h1:"h1",p:"p"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"This is the philosophy page"),"\n",a.createElement(t.p,null,"Philosophy info here"))}t.default=function(e){return void 0===e&&(e={}),a.createElement(c,e,a.createElement(o,e))}},5437:function(e,t,s){s.r(t),s.d(t,{default:function(){return r}});var n=s(1195),a=s(7294),l=(s(1883),s(5705)),c=s(2525);const o=e=>{let{location:t,data:{mdx:s},children:n}=e;const{pathname:o}=t;return o.includes("/page/")?a.createElement(a.Fragment,null,n):a.createElement(l.Z,{onSideBarPage:!0},a.createElement(c.Z,{pathname:o},a.createElement("main",null,n)))};function r(e){return a.createElement(o,e,a.createElement(n.default,e))}},2525:function(e,t,s){s.d(t,{Z:function(){return u}});var n=s(7294),a=s(8419),l=s(5785),c=s(1883),o=s(7896);var r=(0,n.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:s,to:a}=e;const l=(0,o.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:h}=(0,n.useContext)(r),{0:d,1:p}=(0,n.useState)(!1),{pathname:f}=l;return(0,n.useEffect)((()=>{p(i=="/simple-scss-utilities-docs"+s+" "+a)}),[i]),console.log("path: "+s+" to: "+a+" pathname: "+f+" prefix with path: /simple-scss-utilities-docs"+s),n.createElement("p",{className:(d?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+s+"/"==f){document.getElementById(a).scrollIntoView({behavior:"smooth"}),h(!1),m(s+" "+a)}else(0,c.navigate)(s+"?anchor="+a)}},t)};var m=e=>{let{sidebarData:t}=e;const{setActiveAnchor:s,hasScrolled:a}=(0,n.useContext)(r),{0:m,1:u}=(0,n.useState)([]),{0:h,1:d}=(0,n.useState)(!1),{0:p,1:f}=(0,n.useState)([]),{0:E,1:g}=(0,n.useState)(!1),b=(0,o.useLocation)(),{pathname:v}=b;if((0,n.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,s)=>{const n=[];e.forEach(((e,t)=>{const s=e.target.href.split("#")[1],a=v.slice(0,-1)+" "+s;e.isIntersecting?n.push({anchorString:a,inView:!0,offsetTop:e.target.offsetTop}):n.push({anchorString:a,inView:!1,offsetTop:e.target.offsetTop})})),f(n)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,n.useEffect)((()=>{p.length&&!h&&(u(p),d(!0))}),[p,h]),(0,n.useEffect)((()=>{if(h&&p.length){let e=(0,l.Z)(m);if(p.forEach((t=>{const s=m.findIndex((e=>t.anchorString==e.anchorString));s>=0&&e.splice(s,1,t)})),u(e),f([]),a){let t=Number.POSITIVE_INFINITY,n=-1;if(e.forEach(((e,s)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,n=s)})),n>=0){const t=e[n];s(t.anchorString)}else s("")}}}),[m,p,h,a]),(0,n.useEffect)((()=>{if(b.search&&!E){const e=new URLSearchParams(b.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const n=v.slice(0,-1);s(n+" "+e)}}g(!0)}else if(h&&!E){let e=m[0];e.inView&&s(e.anchorString),g(!0)}}),[h,m,E]),!t)return n.createElement(n.Fragment,null,"No sidebar data for path "+v);const{path:S,nodes:k}=t,y=[],N=[],w={};k.forEach((e=>{const{frontmatter:{category:t,title:s,slug:n,order:a,isCategoryRoot:l,anchorLinks:c}}=e;if(t)w[t]||(w[t]=[]),l?N.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+S+"/"+n,sublinks:null,anchorLinks:c}):w[t].push({title:s,path:"/"+S+"/"+n,order:a,anchorLinks:c});else{const e="index"===n?"/"+S:"/"+S+"/"+n;y.push({title:s,path:e,sublinks:null,order:a,anchorLinks:c})}})),N.forEach((e=>{const t=e.categoryName;e.sublinks=w[t]})),y.sort(((e,t)=>e.order-t.order)),N.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),N.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const x=[].concat(y,N);return n.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},n.createElement("h1",null,"This is the sidebar"),n.createElement("nav",{className:"display-flex flex-col"},n.createElement("ul",{className:"p-md"},x.map((e=>{const{isCategoryRoot:t,categoryName:s,path:a,title:l,sublinks:o}=e;if(t){const e=l.charAt(0).toUpperCase()+l.slice(1),t="/simple-scss-utilities-docs"+a+"/"===v;return n.createElement("li",{key:a+" "+l,className:"font-bold"},n.createElement("span",{className:t?"text-blue":""},n.createElement(c.Link,{to:a},e)),o&&n.createElement("ul",null,o.map((e=>{const{title:t,path:s,anchorLinks:a}=e,l="/simple-scss-utilities-docs"+s+"/"===v;return n.createElement("li",{key:t+" "+s,className:"pl-md font-normal"},n.createElement("span",{className:l?"text-blue":""},n.createElement(c.Link,{to:s},t)),a&&n.createElement("ul",null,a.map((e=>{const{title:t,link:a}=e;return n.createElement("li",{key:t+" "+a,className:"pl-md font-md"},n.createElement(i,{path:s,to:a},t))}))))}))))}l.charAt(0).toUpperCase(),l.slice(1);const r="/simple-scss-utilities-docs"+a+"/"===v;return n.createElement("li",{key:a+" "+l},n.createElement("span",{className:r?"text-blue":""},n.createElement(c.Link,{to:a},l)))})))))};var u=e=>{let{pathname:t,children:s}=e;const{0:l,1:o}=(0,n.useState)(!1),{0:i,1:u}=(0,n.useState)(""),{docs:h,components:d,customize:p}=(0,c.useStaticQuery)("543507817");let f;return t.startsWith("/simple-scss-utilities-docs/docs")?f={path:"docs",...h}:t.startsWith("/simple-scss-utilities-docs/components")?f={path:"components",...d}:t.startsWith("/simple-scss-utilities-docs/customize")&&(f={path:"customize",...p}),n.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},n.createElement(r.Provider,{value:{activeAnchor:i,setActiveAnchor:u,hasScrolled:l,setHasScrolled:o}},n.createElement(m,{sidebarData:f}),n.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{o(!0)},onTouchStart:()=>{o(!0)}},n.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},s),n.createElement(a.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-src-pages-philosophy-mdx-9329b2b8e592c2f7a1d6.js.map