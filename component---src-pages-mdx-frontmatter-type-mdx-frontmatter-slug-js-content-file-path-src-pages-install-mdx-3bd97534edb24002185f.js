"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[1736,322],{6505:function(e,t,n){n.r(t);var a=n(1151),l=n(7294),s=n(5705);const r=function(e){let{children:t}=e;const n=Object.assign({main:"main"},(0,a.ah)());return l.createElement(s.Z,null,l.createElement(n.main,null,t))};function c(e){const t=Object.assign({h1:"h1",p:"p"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"This is the install page"),"\n",l.createElement(t.p,null,"Install info here"))}t.default=function(e){return void 0===e&&(e={}),l.createElement(r,e,l.createElement(c,e))}},6372:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});var a=n(6505),l=n(7294),s=(n(1883),n(5705)),r=n(2525);const c=e=>{let{location:t,data:{mdx:n},children:a}=e;const{pathname:c}=t;return c.includes("/page/")?l.createElement(l.Fragment,null,a):l.createElement(s.Z,{onSideBarPage:!0},l.createElement(l.Fragment,null,l.createElement(r.Z,{pathname:c},l.createElement("main",null,a))))};function o(e){return l.createElement(c,e,l.createElement(a.default,e))}},2525:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),l=n(8419),s=n(5785),r=n(1883),c=n(7896);var o=(0,a.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:n,to:l}=e;const s=(0,c.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:h}=(0,a.useContext)(o),{0:d,1:f}=(0,a.useState)(!1),{pathname:p}=s;return(0,a.useEffect)((()=>{f(i==n+" "+l)}),[i]),a.createElement("p",{className:(d?"font-bold":"")+" cursor-pointer",onClick:()=>{if(n+"/"==p){document.getElementById(l).scrollIntoView({behavior:"smooth"}),h(!1),m(n+" "+l)}else(0,r.navigate)(n+"?anchor="+l)}},t)};var m=e=>{let{sidebarData:t}=e;const{setActiveAnchor:n,hasScrolled:l}=(0,a.useContext)(o),{0:m,1:u}=(0,a.useState)([]),{0:h,1:d}=(0,a.useState)(!1),{0:f,1:p}=(0,a.useState)([]),{0:E,1:g}=(0,a.useState)(!1),v=(0,c.useLocation)(),{pathname:b}=v;if((0,a.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,n)=>{const a=[];e.forEach(((e,t)=>{const n=e.target.href.split("#")[1],l=b.slice(0,-1)+" "+n;e.isIntersecting?a.push({anchorString:l,inView:!0,offsetTop:e.target.offsetTop}):a.push({anchorString:l,inView:!1,offsetTop:e.target.offsetTop})})),p(a)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,a.useEffect)((()=>{f.length&&!h&&(u(f),d(!0))}),[f,h]),(0,a.useEffect)((()=>{if(h&&f.length){let e=(0,s.Z)(m);if(f.forEach((t=>{const n=m.findIndex((e=>t.anchorString==e.anchorString));n>=0&&e.splice(n,1,t)})),u(e),p([]),l){let t=Number.POSITIVE_INFINITY,a=-1;if(e.forEach(((e,n)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,a=n)})),a>=0){const t=e[a];n(t.anchorString)}else n("")}}}),[m,f,h,l]),(0,a.useEffect)((()=>{if(v.search&&!E){const e=new URLSearchParams(v.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const a=b.slice(0,-1);n(a+" "+e)}}g(!0)}else if(h&&!E){let e=m[0];e.inView&&n(e.anchorString),g(!0)}}),[h,m,E]),!t)return;const{path:S,nodes:k}=t,y=[],N=[],w={};k.forEach((e=>{const{frontmatter:{category:t,title:n,slug:a,order:l,isCategoryRoot:s,anchorLinks:r}}=e;if(t)w[t]||(w[t]=[]),s?N.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+S+"/"+a,sublinks:null,anchorLinks:r}):w[t].push({title:n,path:"/"+S+"/"+a,order:l,anchorLinks:r});else{const e="index"===a?"/"+S:"/"+S+"/"+a;y.push({title:n,path:e,sublinks:null,order:l,anchorLinks:r})}})),N.forEach((e=>{const t=e.categoryName;e.sublinks=w[t]})),y.sort(((e,t)=>e.order-t.order)),N.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),N.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const x=[].concat(y,N),A="//simple-scss-utilities-docs";return a.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},a.createElement("h1",null,"first path part"),a.createElement("nav",{className:"display-flex flex-col"},a.createElement("ul",{className:"p-md"},x.map((e=>{const{isCategoryRoot:t,categoryName:n,path:l,title:s,sublinks:c}=e;if(t){const e=s.charAt(0).toUpperCase()+s.slice(1),t=""+A+l+"/"===b;return a.createElement("li",{key:l+" "+s,className:"font-bold"},a.createElement("span",{className:t?"text-blue":""},a.createElement(r.Link,{to:l},e)),c&&a.createElement("ul",null,c.map((e=>{const{title:t,path:n,anchorLinks:l}=e,s=""+A+n+"/"===b;return a.createElement("li",{key:t+" "+n,className:"pl-md font-normal"},a.createElement("span",{className:s?"text-blue":""},a.createElement(r.Link,{to:n},t)),l&&a.createElement("ul",null,l.map((e=>{const{title:t,link:l}=e;return a.createElement("li",{key:t+" "+l,className:"pl-md font-md"},a.createElement(i,{path:n,to:l},t))}))))}))))}s.charAt(0).toUpperCase(),s.slice(1);const o=""+A+l+"/"===b;return a.createElement("li",{key:l+" "+s},a.createElement("span",{className:o?"text-blue":""},a.createElement(r.Link,{to:l},s)))})))))};var u=e=>{let{pathname:t,children:n}=e;const{0:s,1:c}=(0,a.useState)(!1),{0:i,1:u}=(0,a.useState)(""),{docs:h,components:d,customize:f}=(0,r.useStaticQuery)("543507817");let p;return t.startsWith("/docs")?p={path:"docs",...h}:t.startsWith("/components")?p={path:"components",...d}:t.startsWith("/customize")&&(p={path:"customize",...f}),console.log(p),a.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},a.createElement(a.Fragment,null,a.createElement(o.Provider,{value:{activeAnchor:i,setActiveAnchor:u,hasScrolled:s,setHasScrolled:c}},a.createElement(m,{sidebarData:p}),a.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{c(!0)},onTouchStart:()=>{c(!0)}},a.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},n),a.createElement(l.Z,null)))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-src-pages-install-mdx-3bd97534edb24002185f.js.map