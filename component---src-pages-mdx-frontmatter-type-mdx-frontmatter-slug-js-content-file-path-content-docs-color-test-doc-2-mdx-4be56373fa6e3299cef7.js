"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[7594],{6981:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var n=s(1151),a=s(7294);function c(e){const t=Object.assign({h1:"h1",h2:"h2"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Text"),"\n",a.createElement(t.h2,null,"This is an anchor on this page"),"\n",a.createElement("p",{className:"h-screen"},"stuff"),"\n",a.createElement(t.h2,null,"This is also Anchor"),"\n",a.createElement("p",{className:"h-screen"},"stuff"),"\n",a.createElement(t.h2,null,"Third Anchor"))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(c,e)):c(e)},r=(s(1883),s(5705)),o=s(2525);const i=e=>{let{location:t,data:{mdx:s},children:n}=e;const{pathname:c}=t;return c.includes("/page/")?a.createElement(a.Fragment,null,n):a.createElement(r.Z,{onSideBarPage:!0},a.createElement(o.Z,{pathname:c},a.createElement("main",null,n)))};function m(e){return a.createElement(i,e,a.createElement(l,e))}},2525:function(e,t,s){s.d(t,{Z:function(){return h}});var n=s(7294),a=s(8419),c=s(5785),l=s(1883),r=s(7896);var o=(0,n.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:s,to:a}=e;const c=(0,r.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:h,setHasScrolled:u}=(0,n.useContext)(o),{0:d,1:p}=(0,n.useState)(!1),{pathname:f}=c;return(0,n.useEffect)((()=>{p(i=="/simple-scss-utilities-docs"+s+" "+a)}),[i]),console.log("path: "+s+" to: "+a+" pathname: "+f+" prefix with path: /simple-scss-utilities-docs"+s),n.createElement("p",{className:(d?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+s+"/"==f){document.getElementById(a).scrollIntoView({behavior:"smooth"}),u(!1),m(s+" "+a)}else(0,l.navigate)(s+"?anchor="+a)}},t)};var m=e=>{let{sidebarData:t}=e;const{setActiveAnchor:s,hasScrolled:a}=(0,n.useContext)(o),{0:m,1:h}=(0,n.useState)([]),{0:u,1:d}=(0,n.useState)(!1),{0:p,1:f}=(0,n.useState)([]),{0:E,1:g}=(0,n.useState)(!1),b=(0,r.useLocation)(),{pathname:v}=b;if((0,n.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,s)=>{const n=[];e.forEach(((e,t)=>{const s=e.target.href.split("#")[1],a=v.slice(0,-1)+" "+s;e.isIntersecting?n.push({anchorString:a,inView:!0,offsetTop:e.target.offsetTop}):n.push({anchorString:a,inView:!1,offsetTop:e.target.offsetTop})})),f(n)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,n.useEffect)((()=>{p.length&&!u&&(h(p),d(!0))}),[p,u]),(0,n.useEffect)((()=>{if(u&&p.length){let e=(0,c.Z)(m);if(p.forEach((t=>{const s=m.findIndex((e=>t.anchorString==e.anchorString));s>=0&&e.splice(s,1,t)})),h(e),f([]),a){let t=Number.POSITIVE_INFINITY,n=-1;if(e.forEach(((e,s)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,n=s)})),n>=0){const t=e[n];s(t.anchorString)}else s("")}}}),[m,p,u,a]),(0,n.useEffect)((()=>{if(b.search&&!E){const e=new URLSearchParams(b.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const n=v.slice(0,-1);s(n+" "+e)}}g(!0)}else if(u&&!E){let e=m[0];e.inView&&s(e.anchorString),g(!0)}}),[u,m,E]),!t)return n.createElement(n.Fragment,null,"No sidebar data for path "+v);const{path:S,nodes:k}=t,y=[],N=[],w={};k.forEach((e=>{const{frontmatter:{category:t,title:s,slug:n,order:a,isCategoryRoot:c,anchorLinks:l}}=e;if(t)w[t]||(w[t]=[]),c?N.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+S+"/"+n,sublinks:null,anchorLinks:l}):w[t].push({title:s,path:"/"+S+"/"+n,order:a,anchorLinks:l});else{const e="index"===n?"/"+S:"/"+S+"/"+n;y.push({title:s,path:e,sublinks:null,order:a,anchorLinks:l})}})),N.forEach((e=>{const t=e.categoryName;e.sublinks=w[t]})),y.sort(((e,t)=>e.order-t.order)),N.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),N.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const x=[].concat(y,N);return n.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},n.createElement("h1",null,"This is the sidebar"),n.createElement("nav",{className:"display-flex flex-col"},n.createElement("ul",{className:"p-md"},x.map((e=>{const{isCategoryRoot:t,categoryName:s,path:a,title:c,sublinks:r}=e;if(t){const e=c.charAt(0).toUpperCase()+c.slice(1),t="/simple-scss-utilities-docs"+a+"/"===v;return n.createElement("li",{key:a+" "+c,className:"font-bold"},n.createElement("span",{className:t?"text-blue":""},n.createElement(l.Link,{to:a},e)),r&&n.createElement("ul",null,r.map((e=>{const{title:t,path:s,anchorLinks:a}=e,c="/simple-scss-utilities-docs"+s+"/"===v;return n.createElement("li",{key:t+" "+s,className:"pl-md font-normal"},n.createElement("span",{className:c?"text-blue":""},n.createElement(l.Link,{to:s},t)),a&&n.createElement("ul",null,a.map((e=>{const{title:t,link:a}=e;return n.createElement("li",{key:t+" "+a,className:"pl-md font-md"},n.createElement(i,{path:s,to:a},t))}))))}))))}c.charAt(0).toUpperCase(),c.slice(1);const o="/simple-scss-utilities-docs"+a+"/"===v;return n.createElement("li",{key:a+" "+c},n.createElement("span",{className:o?"text-blue":""},n.createElement(l.Link,{to:a},c)))})))))};var h=e=>{let{pathname:t,children:s}=e;const{0:c,1:r}=(0,n.useState)(!1),{0:i,1:h}=(0,n.useState)(""),{docs:u,components:d,customize:p}=(0,l.useStaticQuery)("543507817");let f;return t.startsWith("/simple-scss-utilities-docs/docs")?f={path:"docs",...u}:t.startsWith("/simple-scss-utilities-docs/components")?f={path:"components",...d}:t.startsWith("/simple-scss-utilities-docs/customize")&&(f={path:"customize",...p}),n.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},n.createElement(o.Provider,{value:{activeAnchor:i,setActiveAnchor:h,hasScrolled:c,setHasScrolled:r}},n.createElement(m,{sidebarData:f}),n.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{r(!0)},onTouchStart:()=>{r(!0)}},n.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},s),n.createElement(a.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-color-test-doc-2-mdx-4be56373fa6e3299cef7.js.map