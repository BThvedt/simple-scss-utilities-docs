"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[7832],{9426:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var n=a(1151),s=a(7294);function r(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,n.ah)(),e.components);return s.createElement(s.Fragment,null,s.createElement(t.h1,null,"This is a test page - Docs"),"\n",s.createElement(t.h2,null,"Still learning Gatsby and MDx haha. Only a couple days behind :)"),"\n",s.createElement(t.p,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Commodo ullamcorper a lacus vestibulum sed arcu non. Rhoncus aenean vel elit scelerisque. Duis tristique sollicitudin nibh sit. Tincidunt ornare massa eget egestas purus viverra accumsan. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Euismod lacinia at quis risus sed vulputate. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Et netus et malesuada fames ac turpis egestas sed tempus. Habitasse platea dictumst quisque sagittis purus. Turpis egestas sed tempus urna et pharetra pharetra massa. Aliquet porttitor lacus luctus accumsan tortor. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Imperdiet proin fermentum leo vel. Nunc non blandit massa enim nec dui nunc mattis enim. Semper viverra nam libero justo laoreet sit amet. Proin sagittis nisl rhoncus mattis rhoncus urna neque."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?s.createElement(t,e,s.createElement(r,e)):r(e)},o=(a(1883),a(5705)),i=a(2525);const c=e=>{let{location:t,data:{mdx:a},children:n}=e;const{pathname:r}=t;return r.includes("/page/")?s.createElement(s.Fragment,null,n):s.createElement(o.Z,{onSideBarPage:!0},s.createElement(i.Z,{pathname:r},s.createElement("main",null,n)))};function u(e){return s.createElement(c,e,s.createElement(l,e))}},2525:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),s=a(8419),r=a(5785),l=a(1883),o=a(7896);var i=(0,n.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var c=e=>{let{children:t,path:a,to:s}=e;const r=(0,o.useLocation)(),{activeAnchor:c,setActiveAnchor:u,hasScrolled:m,setHasScrolled:d}=(0,n.useContext)(i),{0:h,1:p}=(0,n.useState)(!1),{pathname:f}=r;return(0,n.useEffect)((()=>{p(c==a+" "+s)}),[c]),n.createElement("p",{className:(h?"font-bold":"")+" cursor-pointer",onClick:()=>{if(a+"/"==f){document.getElementById(s).scrollIntoView({behavior:"smooth"}),d(!1),u(a+" "+s)}else(0,l.navigate)(a+"?anchor="+s)}},t)};var u=e=>{let{sidebarData:t}=e;const{setActiveAnchor:a,hasScrolled:s}=(0,n.useContext)(i),{0:u,1:m}=(0,n.useState)([]),{0:d,1:h}=(0,n.useState)(!1),{0:p,1:f}=(0,n.useState)([]),{0:E,1:g}=(0,n.useState)(!1),b=(0,o.useLocation)(),{pathname:v}=b;if((0,n.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,a)=>{const n=[];e.forEach(((e,t)=>{const a=e.target.href.split("#")[1],s=v.slice(0,-1)+" "+a;e.isIntersecting?n.push({anchorString:s,inView:!0,offsetTop:e.target.offsetTop}):n.push({anchorString:s,inView:!1,offsetTop:e.target.offsetTop})})),f(n)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,n.useEffect)((()=>{p.length&&!d&&(m(p),h(!0))}),[p,d]),(0,n.useEffect)((()=>{if(d&&p.length){let e=(0,r.Z)(u);if(p.forEach((t=>{const a=u.findIndex((e=>t.anchorString==e.anchorString));a>=0&&e.splice(a,1,t)})),m(e),f([]),s){let t=Number.POSITIVE_INFINITY,n=-1;if(e.forEach(((e,a)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,n=a)})),n>=0){const t=e[n];a(t.anchorString)}else a("")}}}),[u,p,d,s]),(0,n.useEffect)((()=>{if(b.search&&!E){const e=new URLSearchParams(b.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const n=v.slice(0,-1);a(n+" "+e)}}g(!0)}else if(d&&!E){let e=u[0];e.inView&&a(e.anchorString),g(!0)}}),[d,u,E]),!t)return n.createElement(n.Fragment,null,"No sidebar data and path is "+v);const{path:S,nodes:k}=t,y=[],N=[],w={};k.forEach((e=>{const{frontmatter:{category:t,title:a,slug:n,order:s,isCategoryRoot:r,anchorLinks:l}}=e;if(t)w[t]||(w[t]=[]),r?N.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+S+"/"+n,sublinks:null,anchorLinks:l}):w[t].push({title:a,path:"/"+S+"/"+n,order:s,anchorLinks:l});else{const e="index"===n?"/"+S:"/"+S+"/"+n;y.push({title:a,path:e,sublinks:null,order:s,anchorLinks:l})}})),N.forEach((e=>{const t=e.categoryName;e.sublinks=w[t]})),y.sort(((e,t)=>e.order-t.order)),N.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),N.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const x=[].concat(y,N);return n.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},n.createElement("h1",null,"This is the sidebar"),n.createElement("nav",{className:"display-flex flex-col"},n.createElement("ul",{className:"p-md"},x.map((e=>{const{isCategoryRoot:t,categoryName:a,path:s,title:r,sublinks:o}=e;if(t){const e=r.charAt(0).toUpperCase()+r.slice(1),t=s+"/"===v;return n.createElement("li",{key:s+" "+r,className:"font-bold"},n.createElement("span",{className:t?"text-blue":""},n.createElement(l.Link,{to:s},e)),o&&n.createElement("ul",null,o.map((e=>{const{title:t,path:a,anchorLinks:s}=e,r=a+"/"===v;return n.createElement("li",{key:t+" "+a,className:"pl-md font-normal"},n.createElement("span",{className:r?"text-blue":""},n.createElement(l.Link,{to:a},t)),s&&n.createElement("ul",null,s.map((e=>{const{title:t,link:s}=e;return n.createElement("li",{key:t+" "+s,className:"pl-md font-md"},n.createElement(c,{path:a,to:s},t))}))))}))))}r.charAt(0).toUpperCase(),r.slice(1);const i=s+"/"===v;return n.createElement("li",{key:s+" "+r},n.createElement("span",{className:i?"text-blue":""},n.createElement(l.Link,{to:s},r)))})))))};var m=e=>{let{pathname:t,children:a}=e;const{0:r,1:o}=(0,n.useState)(!1),{0:c,1:m}=(0,n.useState)(""),{docs:d,components:h,customize:p}=(0,l.useStaticQuery)("543507817");return n.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},n.createElement(i.Provider,{value:{activeAnchor:c,setActiveAnchor:m,hasScrolled:r,setHasScrolled:o}},n.createElement(u,{sidebarData:sidebarData}),n.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{o(!0)},onTouchStart:()=>{o(!0)}},n.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},a),n.createElement(s.Z,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-index-mdx-f9a4925549d4e4cf8878.js.map