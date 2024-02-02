"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[5504,5590],{1195:function(e,t,n){n.r(t);var a=n(1151),s=n(7294),c=n(5705);const l=function(e){let{children:t}=e;const n=Object.assign({main:"main"},(0,a.ah)());return s.createElement(c.Z,null,s.createElement(n.main,null,t))};function o(e){const t=Object.assign({h1:"h1",p:"p"},(0,a.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(t.h1,null,"This is the philosophy page"),"\n",s.createElement(t.p,null,"Philosophy info here"))}t.default=function(e){return void 0===e&&(e={}),s.createElement(l,e,s.createElement(o,e))}},5437:function(e,t,n){n.r(t),n.d(t,{default:function(){return r}});var a=n(1195),s=n(7294),c=(n(1883),n(5705)),l=n(2525);const o=e=>{let{location:t,data:{mdx:n},children:a}=e;const{pathname:o}=t;return o.includes("/page/")?s.createElement(s.Fragment,null,a):s.createElement(c.Z,{onSideBarPage:!0},s.createElement(s.Fragment,null,s.createElement(l.Z,{pathname:o},s.createElement("main",null,a))))};function r(e){return s.createElement(o,e,s.createElement(a.default,e))}},2525:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),s=n(8419),c=n(5785),l=n(1883),o=n(7896);var r=(0,a.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:n,to:s}=e;const c=(0,o.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:h}=(0,a.useContext)(r),{0:d,1:p}=(0,a.useState)(!1),{pathname:f}=c;return(0,a.useEffect)((()=>{p(i==n+" "+s)}),[i]),a.createElement("p",{className:(d?"font-bold":"")+" cursor-pointer",onClick:()=>{if(n+"/"==f){document.getElementById(s).scrollIntoView({behavior:"smooth"}),h(!1),m(n+" "+s)}else(0,l.navigate)(n+"?anchor="+s)}},t)};var m=e=>{let{sidebarData:t}=e;const{setActiveAnchor:n,hasScrolled:s}=(0,a.useContext)(r),{0:m,1:u}=(0,a.useState)([]),{0:h,1:d}=(0,a.useState)(!1),{0:p,1:f}=(0,a.useState)([]),{0:E,1:g}=(0,a.useState)(!1),b=(0,o.useLocation)(),{pathname:v}=b;if((0,a.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,n)=>{const a=[];e.forEach(((e,t)=>{const n=e.target.href.split("#")[1],s=v.slice(0,-1)+" "+n;e.isIntersecting?a.push({anchorString:s,inView:!0,offsetTop:e.target.offsetTop}):a.push({anchorString:s,inView:!1,offsetTop:e.target.offsetTop})})),f(a)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,a.useEffect)((()=>{p.length&&!h&&(u(p),d(!0))}),[p,h]),(0,a.useEffect)((()=>{if(h&&p.length){let e=(0,c.Z)(m);if(p.forEach((t=>{const n=m.findIndex((e=>t.anchorString==e.anchorString));n>=0&&e.splice(n,1,t)})),u(e),f([]),s){let t=Number.POSITIVE_INFINITY,a=-1;if(e.forEach(((e,n)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,a=n)})),a>=0){const t=e[a];n(t.anchorString)}else n("")}}}),[m,p,h,s]),(0,a.useEffect)((()=>{if(b.search&&!E){const e=new URLSearchParams(b.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const a=v.slice(0,-1);n(a+" "+e)}}g(!0)}else if(h&&!E){let e=m[0];e.inView&&n(e.anchorString),g(!0)}}),[h,m,E]),!t)return;const{path:k,nodes:S}=t,y=[],w=[],N={};S.forEach((e=>{const{frontmatter:{category:t,title:n,slug:a,order:s,isCategoryRoot:c,anchorLinks:l}}=e;if(t)N[t]||(N[t]=[]),c?w.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+k+"/"+a,sublinks:null,anchorLinks:l}):N[t].push({title:n,path:"/"+k+"/"+a,order:s,anchorLinks:l});else{const e="index"===a?"/"+k:"/"+k+"/"+a;y.push({title:n,path:e,sublinks:null,order:s,anchorLinks:l})}})),w.forEach((e=>{const t=e.categoryName;e.sublinks=N[t]})),y.sort(((e,t)=>e.order-t.order)),w.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),w.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const x=[].concat(y,w),A="//simple-scss-utilities-docs";return a.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},a.createElement("nav",{className:"display-flex flex-col"},a.createElement("ul",{className:"p-md"},x.map((e=>{const{isCategoryRoot:t,categoryName:n,path:s,title:c,sublinks:o}=e;if(t){const e=c.charAt(0).toUpperCase()+c.slice(1),t=""+A+s+"/"===v;return a.createElement("li",{key:s+" "+c,className:"font-bold"},a.createElement("span",{className:t?"text-blue":""},a.createElement(l.Link,{to:s},e)),o&&a.createElement("ul",null,o.map((e=>{const{title:t,path:n,anchorLinks:s}=e,c=""+A+n+"/"===v;return a.createElement("li",{key:t+" "+n,className:"pl-md font-normal"},a.createElement("span",{className:c?"text-blue":""},a.createElement(l.Link,{to:n},t)),s&&a.createElement("ul",null,s.map((e=>{const{title:t,link:s}=e;return a.createElement("li",{key:t+" "+s,className:"pl-md font-md"},a.createElement(i,{path:n,to:s},t))}))))}))))}c.charAt(0).toUpperCase(),c.slice(1);const r=""+A+s+"/"===v;return a.createElement("li",{key:s+" "+c},a.createElement("span",{className:r?"text-blue":""},a.createElement(l.Link,{to:s},c)))})))))};var u=e=>{let{pathname:t,children:n}=e;const{0:c,1:o}=(0,a.useState)(!1),{0:i,1:u}=(0,a.useState)(""),{docs:h,components:d,customize:p}=(t.split("/"),(0,l.useStaticQuery)("543507817")),f=t.split("/");let E,g;switch(E=f.includes("docs")?"docs":f.includes("components")?"components":"customize",E){case"docs":g={path:"docs",...h};break;case"components":g={path:"components",...d};break;case"customize":g={path:"customize",...p}}return a.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},a.createElement(a.Fragment,null,a.createElement(r.Provider,{value:{activeAnchor:i,setActiveAnchor:u,hasScrolled:c,setHasScrolled:o}},a.createElement(m,{sidebarData:g}),a.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{o(!0)},onTouchStart:()=>{o(!0)}},a.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},n),a.createElement(s.Z,null)))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-src-pages-philosophy-mdx-0795c974c9d456e02045.js.map