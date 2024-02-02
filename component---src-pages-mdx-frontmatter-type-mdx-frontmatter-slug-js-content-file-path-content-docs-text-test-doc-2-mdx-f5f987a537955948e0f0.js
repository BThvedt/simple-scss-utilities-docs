"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[1363],{636:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var a=n(1151),s=n(7294);function r(e){const t=Object.assign({h1:"h1",h2:"h2"},(0,a.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(t.h1,null,"Text"),"\n",s.createElement("p",{className:"h-screen"},"stuff"),"\n",s.createElement(t.h2,null,"This is an Anchor"),"\n",s.createElement("p",{className:"h-screen"},"stuff"),"\n",s.createElement(t.h2,null,"This is also Anchor"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?s.createElement(t,e,s.createElement(r,e)):r(e)},l=(n(1883),n(5705)),o=n(2525);const i=e=>{let{location:t,data:{mdx:n},children:a}=e;const{pathname:r}=t;return r.includes("/page/")?s.createElement(s.Fragment,null,a):s.createElement(l.Z,{onSideBarPage:!0},s.createElement(o.Z,{pathname:r},s.createElement("main",null,a)))};function m(e){return s.createElement(i,e,s.createElement(c,e))}},2525:function(e,t,n){n.d(t,{Z:function(){return h}});var a=n(7294),s=n(8419),r=n(5785),c=n(1883),l=n(7896);var o=(0,a.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:n,to:s}=e;const r=(0,l.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:h,setHasScrolled:u}=(0,a.useContext)(o),{0:d,1:f}=(0,a.useState)(!1),{pathname:p}=r;return(0,a.useEffect)((()=>{f(i==n+" "+s)}),[i]),a.createElement("p",{className:(d?"font-bold":"")+" cursor-pointer",onClick:()=>{if(n+"/"==p){document.getElementById(s).scrollIntoView({behavior:"smooth"}),u(!1),m(n+" "+s)}else(0,c.navigate)(n+"?anchor="+s)}},t)};var m=e=>{let{sidebarData:t}=e;const{setActiveAnchor:n,hasScrolled:s}=(0,a.useContext)(o),{0:m,1:h}=(0,a.useState)([]),{0:u,1:d}=(0,a.useState)(!1),{0:f,1:p}=(0,a.useState)([]),{0:E,1:g}=(0,a.useState)(!1),b=(0,l.useLocation)(),{pathname:v}=b;if((0,a.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,n)=>{const a=[];e.forEach(((e,t)=>{const n=e.target.href.split("#")[1],s=v.slice(0,-1)+" "+n;e.isIntersecting?a.push({anchorString:s,inView:!0,offsetTop:e.target.offsetTop}):a.push({anchorString:s,inView:!1,offsetTop:e.target.offsetTop})})),p(a)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,a.useEffect)((()=>{f.length&&!u&&(h(f),d(!0))}),[f,u]),(0,a.useEffect)((()=>{if(u&&f.length){let e=(0,r.Z)(m);if(f.forEach((t=>{const n=m.findIndex((e=>t.anchorString==e.anchorString));n>=0&&e.splice(n,1,t)})),h(e),p([]),s){let t=Number.POSITIVE_INFINITY,a=-1;if(e.forEach(((e,n)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,a=n)})),a>=0){const t=e[a];n(t.anchorString)}else n("")}}}),[m,f,u,s]),(0,a.useEffect)((()=>{if(b.search&&!E){const e=new URLSearchParams(b.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const a=v.slice(0,-1);n(a+" "+e)}}g(!0)}else if(u&&!E){let e=m[0];e.inView&&n(e.anchorString),g(!0)}}),[u,m,E]),!t)return a.createElement(a.Fragment,null,"No sidebar data and path is "+v);const{path:k,nodes:S}=t,y=[],N=[],w={};S.forEach((e=>{const{frontmatter:{category:t,title:n,slug:a,order:s,isCategoryRoot:r,anchorLinks:c}}=e;if(t)w[t]||(w[t]=[]),r?N.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+k+"/"+a,sublinks:null,anchorLinks:c}):w[t].push({title:n,path:"/"+k+"/"+a,order:s,anchorLinks:c});else{const e="index"===a?"/"+k:"/"+k+"/"+a;y.push({title:n,path:e,sublinks:null,order:s,anchorLinks:c})}})),N.forEach((e=>{const t=e.categoryName;e.sublinks=w[t]})),y.sort(((e,t)=>e.order-t.order)),N.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),N.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const x=[].concat(y,N);return a.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},a.createElement("h1",null,"This is the sidebar"),a.createElement("nav",{className:"display-flex flex-col"},a.createElement("ul",{className:"p-md"},x.map((e=>{const{isCategoryRoot:t,categoryName:n,path:s,title:r,sublinks:l}=e;if(t){const e=r.charAt(0).toUpperCase()+r.slice(1),t=s+"/"===v;return a.createElement("li",{key:s+" "+r,className:"font-bold"},a.createElement("span",{className:t?"text-blue":""},a.createElement(c.Link,{to:s},e)),l&&a.createElement("ul",null,l.map((e=>{const{title:t,path:n,anchorLinks:s}=e,r=n+"/"===v;return a.createElement("li",{key:t+" "+n,className:"pl-md font-normal"},a.createElement("span",{className:r?"text-blue":""},a.createElement(c.Link,{to:n},t)),s&&a.createElement("ul",null,s.map((e=>{const{title:t,link:s}=e;return a.createElement("li",{key:t+" "+s,className:"pl-md font-md"},a.createElement(i,{path:n,to:s},t))}))))}))))}r.charAt(0).toUpperCase(),r.slice(1);const o=s+"/"===v;return a.createElement("li",{key:s+" "+r},a.createElement("span",{className:o?"text-blue":""},a.createElement(c.Link,{to:s},r)))})))))};var h=e=>{let{pathname:t,children:n}=e;const{0:r,1:l}=(0,a.useState)(!1),{0:i,1:h}=(0,a.useState)(""),u=t.split("/"),{docs:d,components:f,customize:p}=(0,c.useStaticQuery)("543507817");let E;switch(u.length&&t.split("/")[1]){case"docs":E={path:"docs",...d};break;case"components":E={path:"components",...f};break;case"customize":E={path:"customize",...p}}return a.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},a.createElement(o.Provider,{value:{activeAnchor:i,setActiveAnchor:h,hasScrolled:r,setHasScrolled:l}},a.createElement(m,{sidebarData:E}),a.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{l(!0)},onTouchStart:()=>{l(!0)}},a.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},n),a.createElement(s.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-text-test-doc-2-mdx-f5f987a537955948e0f0.js.map