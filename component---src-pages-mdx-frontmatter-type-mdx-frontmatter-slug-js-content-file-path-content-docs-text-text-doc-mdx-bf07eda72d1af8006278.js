"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[3425],{5804:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var n=s(1151),a=s(7294);function c(e){const t=Object.assign({h1:"h1",p:"p"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Text DOc one"),"\n",a.createElement(t.p,null,"Some more text and stuff here"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(c,e)):c(e)},l=(s(1883),s(5705)),r=s(2525);const i=e=>{let{location:t,data:{mdx:s},children:n}=e;const{pathname:c}=t;return c.includes("/page/")?a.createElement(a.Fragment,null,n):a.createElement(l.Z,{onSideBarPage:!0},a.createElement(r.Z,{pathname:c},a.createElement("main",null,n)))};function m(e){return a.createElement(i,e,a.createElement(o,e))}},2525:function(e,t,s){s.d(t,{Z:function(){return u}});var n=s(7294),a=s(8419),c=s(5785),o=s(1883),l=s(7896);var r=(0,n.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:s,to:a}=e;const c=(0,l.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:h}=(0,n.useContext)(r),{0:d,1:p}=(0,n.useState)(!1),{pathname:f}=c;return(0,n.useEffect)((()=>{p(i==s+" "+a)}),[i]),console.log("path: "+s+" to: "+a+" pathname: "+f+" prefix with path: /simple-scss-utilities-docs"+s),n.createElement("p",{className:(d?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+s+"/"==f){document.getElementById(a).scrollIntoView({behavior:"smooth"}),h(!1),m(s+" "+a)}else(0,o.navigate)(s+"?anchor="+a)}},t)};var m=e=>{let{sidebarData:t}=e;const{setActiveAnchor:s,hasScrolled:a}=(0,n.useContext)(r),{0:m,1:u}=(0,n.useState)([]),{0:h,1:d}=(0,n.useState)(!1),{0:p,1:f}=(0,n.useState)([]),{0:E,1:g}=(0,n.useState)(!1),b=(0,l.useLocation)(),{pathname:v}=b;if((0,n.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,s)=>{const n=[];e.forEach(((e,t)=>{const s=e.target.href.split("#")[1],a=v.slice(0,-1)+" "+s;e.isIntersecting?n.push({anchorString:a,inView:!0,offsetTop:e.target.offsetTop}):n.push({anchorString:a,inView:!1,offsetTop:e.target.offsetTop})})),f(n)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,n.useEffect)((()=>{p.length&&!h&&(u(p),d(!0))}),[p,h]),(0,n.useEffect)((()=>{if(h&&p.length){let e=(0,c.Z)(m);if(p.forEach((t=>{const s=m.findIndex((e=>t.anchorString==e.anchorString));s>=0&&e.splice(s,1,t)})),u(e),f([]),a){let t=Number.POSITIVE_INFINITY,n=-1;if(e.forEach(((e,s)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,n=s)})),n>=0){const t=e[n];s(t.anchorString)}else s("")}}}),[m,p,h,a]),(0,n.useEffect)((()=>{if(b.search&&!E){const e=new URLSearchParams(b.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const n=v.slice(0,-1);s(n+" "+e)}}g(!0)}else if(h&&!E){let e=m[0];e.inView&&s(e.anchorString),g(!0)}}),[h,m,E]),!t)return n.createElement(n.Fragment,null,"No sidebar data for path "+v);const{path:S,nodes:k}=t,y=[],w=[],N={};k.forEach((e=>{const{frontmatter:{category:t,title:s,slug:n,order:a,isCategoryRoot:c,anchorLinks:o}}=e;if(t)N[t]||(N[t]=[]),c?w.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+S+"/"+n,sublinks:null,anchorLinks:o}):N[t].push({title:s,path:"/"+S+"/"+n,order:a,anchorLinks:o});else{const e="index"===n?"/"+S:"/"+S+"/"+n;y.push({title:s,path:e,sublinks:null,order:a,anchorLinks:o})}})),w.forEach((e=>{const t=e.categoryName;e.sublinks=N[t]})),y.sort(((e,t)=>e.order-t.order)),w.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),w.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const x=[].concat(y,w);return n.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},n.createElement("h1",null,"This is the sidebar"),n.createElement("nav",{className:"display-flex flex-col"},n.createElement("ul",{className:"p-md"},x.map((e=>{const{isCategoryRoot:t,categoryName:s,path:a,title:c,sublinks:l}=e;if(t){const e=c.charAt(0).toUpperCase()+c.slice(1),t="/simple-scss-utilities-docs"+a+"/"===v;return n.createElement("li",{key:a+" "+c,className:"font-bold"},n.createElement("span",{className:t?"text-blue":""},n.createElement(o.Link,{to:a},e)),l&&n.createElement("ul",null,l.map((e=>{const{title:t,path:s,anchorLinks:a}=e,c="/simple-scss-utilities-docs"+s+"/"===v;return n.createElement("li",{key:t+" "+s,className:"pl-md font-normal"},n.createElement("span",{className:c?"text-blue":""},n.createElement(o.Link,{to:s},t)),a&&n.createElement("ul",null,a.map((e=>{const{title:t,link:a}=e;return n.createElement("li",{key:t+" "+a,className:"pl-md font-md"},n.createElement(i,{path:s,to:a},t))}))))}))))}c.charAt(0).toUpperCase(),c.slice(1);const r="/simple-scss-utilities-docs"+a+"/"===v;return n.createElement("li",{key:a+" "+c},n.createElement("span",{className:r?"text-blue":""},n.createElement(o.Link,{to:a},c)))})))))};var u=e=>{let{pathname:t,children:s}=e;const{0:c,1:l}=(0,n.useState)(!1),{0:i,1:u}=(0,n.useState)(""),{docs:h,components:d,customize:p}=(0,o.useStaticQuery)("543507817");let f;return t.startsWith("/simple-scss-utilities-docs/docs")?f={path:"docs",...h}:t.startsWith("/simple-scss-utilities-docs/components")?f={path:"components",...d}:t.startsWith("/simple-scss-utilities-docs/customize")&&(f={path:"customize",...p}),n.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},n.createElement(r.Provider,{value:{activeAnchor:i,setActiveAnchor:u,hasScrolled:c,setHasScrolled:l}},n.createElement(m,{sidebarData:f}),n.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{l(!0)},onTouchStart:()=>{l(!0)}},n.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},s),n.createElement(a.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-text-text-doc-mdx-bf07eda72d1af8006278.js.map