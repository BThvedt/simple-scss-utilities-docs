"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[678],{1585:function(e,t,n){n.r(t),n.d(t,{default:function(){return h}});var a=n(1151),l=n(7294);function r(e){const t=Object.assign({h1:"h1",h2:"h2"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.h1,null,"Text"),"\n",l.createElement(t.h2,null,"anchor link one"),"\n",l.createElement("p",{style:{height:"25vh"}},"A paragraph"),"\n",l.createElement(t.h2,null,"anchor link two"),"\n",l.createElement("p",{style:{height:"25vh"}},"A paragraph"),"\n",l.createElement(t.h2,null,"anchor link three"),"\n",l.createElement("p",{style:{height:"33vh"}},"A paragraph"),"\n",l.createElement(t.h2,null,"anchor link four"),"\n",l.createElement("p",{style:{height:"33vh"}},"A paragraph"),"\n",l.createElement(t.h2,null,"anchor link five"),"\n",l.createElement("p",{style:{height:"10vh"}},"A paragraph"),"\n",l.createElement(t.h2,null,"anchor link six"),"\n",l.createElement("p",{style:{height:"10vh"}},"A paragraph"),"\n",l.createElement(t.h2,null,"anchor link seven"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?l.createElement(t,e,l.createElement(r,e)):r(e)},s=(n(1883),n(5705)),o=n(2525);const i=e=>{let{location:t,data:{mdx:n},children:a}=e;const{pathname:r}=t;return console.log("IN the frontmatter__Slug template"),r.includes("/page/")?l.createElement(l.Fragment,null,a):(console.log("WHY ISNT THIS WORKING"),console.log(n),l.createElement(s.Z,{onSideBarPage:!0},l.createElement(l.Fragment,null,l.createElement("p",null,"Inside mdx.fontmatter.slug"),l.createElement(o.Z,{pathname:r},l.createElement("main",null,a)))))};function h(e){return l.createElement(i,e,l.createElement(c,e))}},2525:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),l=n(8419),r=n(5785),c=n(1883),s=n(7896);var o=(0,a.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:n,to:l}=e;const r=(0,s.useLocation)(),{activeAnchor:i,setActiveAnchor:h,hasScrolled:m,setHasScrolled:u}=(0,a.useContext)(o),{0:p,1:d}=(0,a.useState)(!1),{pathname:f}=r;return(0,a.useEffect)((()=>{d(i==n+" "+l)}),[i]),a.createElement("p",{className:(p?"font-bold":"")+" cursor-pointer",onClick:()=>{if(n+"/"==f){document.getElementById(l).scrollIntoView({behavior:"smooth"}),u(!1),h(n+" "+l)}else(0,c.navigate)(n+"?anchor="+l)}},t)};var h=e=>{let{sidebarData:t}=e;const{setActiveAnchor:n,hasScrolled:l}=(0,a.useContext)(o),{0:h,1:m}=(0,a.useState)([]),{0:u,1:p}=(0,a.useState)(!1),{0:d,1:f}=(0,a.useState)([]),{0:E,1:g}=(0,a.useState)(!1),v=(0,s.useLocation)(),{pathname:k}=v;if((0,a.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,n)=>{const a=[];e.forEach(((e,t)=>{const n=e.target.href.split("#")[1],l=k.slice(0,-1)+" "+n;e.isIntersecting?a.push({anchorString:l,inView:!0,offsetTop:e.target.offsetTop}):a.push({anchorString:l,inView:!1,offsetTop:e.target.offsetTop})})),f(a)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,a.useEffect)((()=>{d.length&&!u&&(m(d),p(!0))}),[d,u]),(0,a.useEffect)((()=>{if(u&&d.length){let e=(0,r.Z)(h);if(d.forEach((t=>{const n=h.findIndex((e=>t.anchorString==e.anchorString));n>=0&&e.splice(n,1,t)})),m(e),f([]),l){let t=Number.POSITIVE_INFINITY,a=-1;if(e.forEach(((e,n)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,a=n)})),a>=0){const t=e[a];n(t.anchorString)}else n("")}}}),[h,d,u,l]),(0,a.useEffect)((()=>{if(v.search&&!E){const e=new URLSearchParams(v.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const a=k.slice(0,-1);n(a+" "+e)}}g(!0)}else if(u&&!E){let e=h[0];e.inView&&n(e.anchorString),g(!0)}}),[u,h,E]),!t)return;const{path:b,nodes:y}=t,S=[],N=[],w={};y.forEach((e=>{const{frontmatter:{category:t,title:n,slug:a,order:l,isCategoryRoot:r,anchorLinks:c}}=e;if(t)w[t]||(w[t]=[]),r?N.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+b+"/"+a,sublinks:null,anchorLinks:c}):w[t].push({title:n,path:"/"+b+"/"+a,order:l,anchorLinks:c});else{const e="index"===a?"/"+b:"/"+b+"/"+a;S.push({title:n,path:e,sublinks:null,order:l,anchorLinks:c})}})),N.forEach((e=>{const t=e.categoryName;e.sublinks=w[t]})),S.sort(((e,t)=>e.order-t.order)),N.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),N.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const A=[].concat(S,N);return a.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},a.createElement("h1",null,"This is the sidebar"),a.createElement("nav",{className:"display-flex flex-col"},a.createElement("ul",{className:"p-md"},A.map((e=>{const{isCategoryRoot:t,categoryName:n,path:l,title:r,sublinks:s}=e;if(t){const e=r.charAt(0).toUpperCase()+r.slice(1),t=l+"/"===k;return a.createElement("li",{key:l+" "+r,className:"font-bold"},a.createElement("span",{className:t?"text-blue":""},a.createElement(c.Link,{to:l},e)),s&&a.createElement("ul",null,s.map((e=>{const{title:t,path:n,anchorLinks:l}=e,r=n+"/"===k;return a.createElement("li",{key:t+" "+n,className:"pl-md font-normal"},a.createElement("span",{className:r?"text-blue":""},a.createElement(c.Link,{to:n},t)),l&&a.createElement("ul",null,l.map((e=>{const{title:t,link:l}=e;return a.createElement("li",{key:t+" "+l,className:"pl-md font-md"},a.createElement(i,{path:n,to:l},t))}))))}))))}r.charAt(0).toUpperCase(),r.slice(1);const o=l+"/"===k;return a.createElement("li",{key:l+" "+r},a.createElement("span",{className:o?"text-blue":""},a.createElement(c.Link,{to:l},r)))})))))};var m=e=>{let{pathname:t,children:n}=e;const{0:r,1:s}=(0,a.useState)(!1),{0:i,1:m}=(0,a.useState)(""),u=t.split("/"),{docs:p,components:d,customize:f}=(0,c.useStaticQuery)("543507817");let E;switch(u.length&&t.split("/")[1]){case"docs":E={path:"docs",...p};break;case"components":E={path:"components",...d};break;case"customize":E={path:"customize",...f}}return a.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},a.createElement(a.Fragment,null,a.createElement("p",null,"Inside sidebar layout"),a.createElement(o.Provider,{value:{activeAnchor:i,setActiveAnchor:m,hasScrolled:r,setHasScrolled:s}},a.createElement(h,{sidebarData:E}),a.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{s(!0)},onTouchStart:()=>{s(!0)}},a.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},n),a.createElement(l.Z,null)))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-color-test-doc-mdx-d955c45d0103670fcc28.js.map