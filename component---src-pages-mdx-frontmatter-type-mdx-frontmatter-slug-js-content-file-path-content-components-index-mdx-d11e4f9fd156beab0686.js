"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[634],{5248:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var a=s(1151),n=s(7294);function l(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,a.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h1,null,"This is a test page - Components"),"\n",n.createElement(t.h2,null,"Still learning Gatsby and MDx haha. Only a couple days behind :)"),"\n",n.createElement(t.p,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Commodo ullamcorper a lacus vestibulum sed arcu non. Rhoncus aenean vel elit scelerisque. Duis tristique sollicitudin nibh sit. Tincidunt ornare massa eget egestas purus viverra accumsan. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Euismod lacinia at quis risus sed vulputate. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Et netus et malesuada fames ac turpis egestas sed tempus. Habitasse platea dictumst quisque sagittis purus. Turpis egestas sed tempus urna et pharetra pharetra massa. Aliquet porttitor lacus luctus accumsan tortor."))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?n.createElement(t,e,n.createElement(l,e)):l(e)},r=(s(1883),s(5705)),c=s(2525);const i=e=>{let{location:t,data:{mdx:s},children:a}=e;const{pathname:l}=t;return l.includes("/page/")?n.createElement(n.Fragment,null,a):n.createElement(r.Z,{onSideBarPage:!0},n.createElement(n.Fragment,null,n.createElement(c.Z,{pathname:l},n.createElement("main",null,a))))};function u(e){return n.createElement(i,e,n.createElement(o,e))}},2525:function(e,t,s){s.d(t,{Z:function(){return m}});var a=s(7294),n=s(8419),l=s(5785),o=s(1883),r=s(7896);var c=(0,a.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:s,to:n}=e;const l=(0,r.useLocation)(),{activeAnchor:i,setActiveAnchor:u,hasScrolled:m,setHasScrolled:h}=(0,a.useContext)(c),{0:d,1:p}=(0,a.useState)(!1),{pathname:f}=l;return(0,a.useEffect)((()=>{p(i==s+" "+n)}),[i]),a.createElement("p",{className:(d?"font-bold":"")+" cursor-pointer",onClick:()=>{if(s+"/"==f){document.getElementById(n).scrollIntoView({behavior:"smooth"}),h(!1),u(s+" "+n)}else(0,o.navigate)(s+"?anchor="+n)}},t)};var u=e=>{let{sidebarData:t}=e;const{setActiveAnchor:s,hasScrolled:n}=(0,a.useContext)(c),{0:u,1:m}=(0,a.useState)([]),{0:h,1:d}=(0,a.useState)(!1),{0:p,1:f}=(0,a.useState)([]),{0:E,1:g}=(0,a.useState)(!1),b=(0,r.useLocation)(),{pathname:v}=b;if((0,a.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,s)=>{const a=[];e.forEach(((e,t)=>{const s=e.target.href.split("#")[1],n=v.slice(0,-1)+" "+s;e.isIntersecting?a.push({anchorString:n,inView:!0,offsetTop:e.target.offsetTop}):a.push({anchorString:n,inView:!1,offsetTop:e.target.offsetTop})})),f(a)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,a.useEffect)((()=>{p.length&&!h&&(m(p),d(!0))}),[p,h]),(0,a.useEffect)((()=>{if(h&&p.length){let e=(0,l.Z)(u);if(p.forEach((t=>{const s=u.findIndex((e=>t.anchorString==e.anchorString));s>=0&&e.splice(s,1,t)})),m(e),f([]),n){let t=Number.POSITIVE_INFINITY,a=-1;if(e.forEach(((e,s)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,a=s)})),a>=0){const t=e[a];s(t.anchorString)}else s("")}}}),[u,p,h,n]),(0,a.useEffect)((()=>{if(b.search&&!E){const e=new URLSearchParams(b.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const a=v.slice(0,-1);s(a+" "+e)}}g(!0)}else if(h&&!E){let e=u[0];e.inView&&s(e.anchorString),g(!0)}}),[h,u,E]),!t)return;const{path:S,nodes:k}=t,y=[],N=[],w={};k.forEach((e=>{const{frontmatter:{category:t,title:s,slug:a,order:n,isCategoryRoot:l,anchorLinks:o}}=e;if(t)w[t]||(w[t]=[]),l?N.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+S+"/"+a,sublinks:null,anchorLinks:o}):w[t].push({title:s,path:"/"+S+"/"+a,order:n,anchorLinks:o});else{const e="index"===a?"/"+S:"/"+S+"/"+a;y.push({title:s,path:e,sublinks:null,order:n,anchorLinks:o})}})),N.forEach((e=>{const t=e.categoryName;e.sublinks=w[t]})),y.sort(((e,t)=>e.order-t.order)),N.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),N.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const A=[].concat(y,N),x="/simple-scss-utilities-docs";return a.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},a.createElement("nav",{className:"display-flex flex-col"},a.createElement("ul",{className:"p-md"},A.map((e=>{const{isCategoryRoot:t,categoryName:s,path:n,title:l,sublinks:r}=e;if(t){const e=l.charAt(0).toUpperCase()+l.slice(1),t=n===v;return console.log("PATHNAME IS "+v),console.log("path is "+n),a.createElement("li",{key:n+" "+l,className:"font-bold"},a.createElement("span",{className:t?"text-blue":""},a.createElement(o.Link,{to:x+"/"+n+"/"},e)),r&&a.createElement("ul",null,r.map((e=>{const{title:t,path:s,anchorLinks:l}=e,r=s===v;return console.log("subLinkPath IS "+s),console.log("path is "+n),a.createElement("li",{key:t+" "+s,className:"pl-md font-normal"},a.createElement("span",{className:r?"text-blue":""},a.createElement(o.Link,{to:x+"/"+s+"/"},t)),l&&a.createElement("ul",null,l.map((e=>{const{title:t,link:n}=e;return a.createElement("li",{key:t+" "+n,className:"pl-md font-md"},a.createElement(i,{path:x+"/"+s+"/",to:n},t))}))))}))))}l.charAt(0).toUpperCase(),l.slice(1);const c=n===v;return a.createElement("li",{key:n+" "+l},a.createElement("span",{className:c?"text-blue":""},a.createElement(o.Link,{to:"/"+x+"/"+n+"/"},l)))})))))};var m=e=>{let{pathname:t,children:s}=e;const{0:l,1:r}=(0,a.useState)(!1),{0:i,1:m}=(0,a.useState)(""),{docs:h,components:d,customize:p}=(0,o.useStaticQuery)("543507817");let f;return t.startsWith("/docs")?f={path:"docs",...h}:t.startsWith("/components")?f={path:"components",...d}:t.startsWith("/customize")&&(f={path:"customize",...p}),a.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},a.createElement(a.Fragment,null,a.createElement(c.Provider,{value:{activeAnchor:i,setActiveAnchor:m,hasScrolled:l,setHasScrolled:r}},a.createElement(u,{sidebarData:f}),a.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{r(!0)},onTouchStart:()=>{r(!0)}},a.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},s),a.createElement(n.Z,null)))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-components-index-mdx-d11e4f9fd156beab0686.js.map