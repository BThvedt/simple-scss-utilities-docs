"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[5722],{1669:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(1151),s=a(7294);function r(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,n.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(t.h1,null,"This is another root file test page"),"\n",s.createElement(t.h2,null,"Still learning Gatsby and MDx haha. Only a couple days behind :)"),"\n",s.createElement(t.p,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Commodo ullamcorper a lacus vestibulum sed arcu non. Rhoncus aenean vel elit scelerisque. Duis tristique sollicitudin nibh sit. Tincidunt ornare massa eget egestas purus viverra accumsan. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Euismod lacinia at quis risus sed vulputate. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Et netus et malesuada fames ac turpis egestas sed tempus. Habitasse platea dictumst quisque sagittis purus. Turpis egestas sed tempus urna et pharetra pharetra massa. Aliquet porttitor lacus luctus accumsan tortor. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Imperdiet proin fermentum leo vel. Nunc non blandit massa enim nec dui nunc mattis enim. Semper viverra nam libero justo laoreet sit amet. Proin sagittis nisl rhoncus mattis rhoncus urna neque."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?s.createElement(t,e,s.createElement(r,e)):r(e)},l=(a(1883),a(5705)),c=a(2525);const i=e=>{let{location:t,data:{mdx:a},children:n}=e;const{pathname:r}=t;return console.log("IN the frontmatter__Slug template"),r.includes("/page/")?s.createElement(s.Fragment,null,n):(console.log("WHY ISNT THIS WORKING"),console.log(mex),s.createElement(l.Z,{onSideBarPage:!0},s.createElement(c.Z,{pathname:r},s.createElement("main",null,n))))};function u(e){return s.createElement(i,e,s.createElement(o,e))}},2525:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),s=a(8419),r=a(5785),o=a(1883),l=a(7896);var c=(0,n.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:a,to:s}=e;const r=(0,l.useLocation)(),{activeAnchor:i,setActiveAnchor:u,hasScrolled:m,setHasScrolled:h}=(0,n.useContext)(c),{0:d,1:p}=(0,n.useState)(!1),{pathname:f}=r;return(0,n.useEffect)((()=>{p(i==a+" "+s)}),[i]),n.createElement("p",{className:(d?"font-bold":"")+" cursor-pointer",onClick:()=>{if(a+"/"==f){document.getElementById(s).scrollIntoView({behavior:"smooth"}),h(!1),u(a+" "+s)}else(0,o.navigate)(a+"?anchor="+s)}},t)};var u=e=>{let{sidebarData:t}=e;const{setActiveAnchor:a,hasScrolled:s}=(0,n.useContext)(c),{0:u,1:m}=(0,n.useState)([]),{0:h,1:d}=(0,n.useState)(!1),{0:p,1:f}=(0,n.useState)([]),{0:g,1:E}=(0,n.useState)(!1),b=(0,l.useLocation)(),{pathname:v}=b;if((0,n.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,a)=>{const n=[];e.forEach(((e,t)=>{const a=e.target.href.split("#")[1],s=v.slice(0,-1)+" "+a;e.isIntersecting?n.push({anchorString:s,inView:!0,offsetTop:e.target.offsetTop}):n.push({anchorString:s,inView:!1,offsetTop:e.target.offsetTop})})),f(n)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,n.useEffect)((()=>{p.length&&!h&&(m(p),d(!0))}),[p,h]),(0,n.useEffect)((()=>{if(h&&p.length){let e=(0,r.Z)(u);if(p.forEach((t=>{const a=u.findIndex((e=>t.anchorString==e.anchorString));a>=0&&e.splice(a,1,t)})),m(e),f([]),s){let t=Number.POSITIVE_INFINITY,n=-1;if(e.forEach(((e,a)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,n=a)})),n>=0){const t=e[n];a(t.anchorString)}else a("")}}}),[u,p,h,s]),(0,n.useEffect)((()=>{if(b.search&&!g){const e=new URLSearchParams(b.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const n=v.slice(0,-1);a(n+" "+e)}}E(!0)}else if(h&&!g){let e=u[0];e.inView&&a(e.anchorString),E(!0)}}),[h,u,g]),!t)return;const{path:S,nodes:k}=t,y=[],N=[],w={};k.forEach((e=>{const{frontmatter:{category:t,title:a,slug:n,order:s,isCategoryRoot:r,anchorLinks:o}}=e;if(t)w[t]||(w[t]=[]),r?N.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+S+"/"+n,sublinks:null,anchorLinks:o}):w[t].push({title:a,path:"/"+S+"/"+n,order:s,anchorLinks:o});else{const e="index"===n?"/"+S:"/"+S+"/"+n;y.push({title:a,path:e,sublinks:null,order:s,anchorLinks:o})}})),N.forEach((e=>{const t=e.categoryName;e.sublinks=w[t]})),y.sort(((e,t)=>e.order-t.order)),N.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),N.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const x=[].concat(y,N);return n.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},n.createElement("h1",null,"This is the sidebar"),n.createElement("nav",{className:"display-flex flex-col"},n.createElement("ul",{className:"p-md"},x.map((e=>{const{isCategoryRoot:t,categoryName:a,path:s,title:r,sublinks:l}=e;if(t){const e=r.charAt(0).toUpperCase()+r.slice(1),t=s+"/"===v;return n.createElement("li",{key:s+" "+r,className:"font-bold"},n.createElement("span",{className:t?"text-blue":""},n.createElement(o.Link,{to:s},e)),l&&n.createElement("ul",null,l.map((e=>{const{title:t,path:a,anchorLinks:s}=e,r=a+"/"===v;return n.createElement("li",{key:t+" "+a,className:"pl-md font-normal"},n.createElement("span",{className:r?"text-blue":""},n.createElement(o.Link,{to:a},t)),s&&n.createElement("ul",null,s.map((e=>{const{title:t,link:s}=e;return n.createElement("li",{key:t+" "+s,className:"pl-md font-md"},n.createElement(i,{path:a,to:s},t))}))))}))))}r.charAt(0).toUpperCase(),r.slice(1);const c=s+"/"===v;return n.createElement("li",{key:s+" "+r},n.createElement("span",{className:c?"text-blue":""},n.createElement(o.Link,{to:s},r)))})))))};var m=e=>{let{pathname:t,children:a}=e;const{0:r,1:l}=(0,n.useState)(!1),{0:i,1:m}=(0,n.useState)(""),h=t.split("/"),{docs:d,components:p,customize:f}=(0,o.useStaticQuery)("543507817");let g;switch(h.length&&t.split("/")[1]){case"docs":g={path:"docs",...d};break;case"components":g={path:"components",...p};break;case"customize":g={path:"customize",...f}}return n.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},n.createElement(c.Provider,{value:{activeAnchor:i,setActiveAnchor:m,hasScrolled:r,setHasScrolled:l}},n.createElement(u,{sidebarData:g}),n.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{l(!0)},onTouchStart:()=>{l(!0)}},n.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},a),n.createElement(s.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-another-rootfile-mdx-cee8f00fd3b52ec94426.js.map