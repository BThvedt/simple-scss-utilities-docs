"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[634],{5248:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var a=s(1151),n=s(7294);function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,a.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h1,null,"This is a test page - Components"),"\n",n.createElement(t.h2,null,"Still learning Gatsby and MDx haha. Only a couple days behind :)"),"\n",n.createElement(t.p,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Commodo ullamcorper a lacus vestibulum sed arcu non. Rhoncus aenean vel elit scelerisque. Duis tristique sollicitudin nibh sit. Tincidunt ornare massa eget egestas purus viverra accumsan. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Euismod lacinia at quis risus sed vulputate. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Et netus et malesuada fames ac turpis egestas sed tempus. Habitasse platea dictumst quisque sagittis purus. Turpis egestas sed tempus urna et pharetra pharetra massa. Aliquet porttitor lacus luctus accumsan tortor."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?n.createElement(t,e,n.createElement(o,e)):o(e)},c=(s(1883),s(5705)),r=s(2525);const i=e=>{let{location:t,data:{mdx:s},children:a}=e;const{pathname:o}=t;return o.includes("/page/")?n.createElement(n.Fragment,null,a):n.createElement(c.Z,{onSideBarPage:!0},n.createElement(n.Fragment,null,n.createElement(r.Z,{pathname:o},n.createElement("main",null,a))))};function u(e){return n.createElement(i,e,n.createElement(l,e))}},2525:function(e,t,s){s.d(t,{Z:function(){return m}});var a=s(7294),n=s(8419),o=s(5785),l=s(1883),c=s(7896);var r=(0,a.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:s,to:n}=e;const o=(0,c.useLocation)(),{activeAnchor:i,setActiveAnchor:u,hasScrolled:m,setHasScrolled:d}=(0,a.useContext)(r),{0:h,1:p}=(0,a.useState)(!1),{pathname:f}=o;return(0,a.useEffect)((()=>{p(i==s+" "+n)}),[i]),a.createElement("p",{className:(h?"font-bold":"")+" cursor-pointer",onClick:()=>{if(s+"/"==f){document.getElementById(n).scrollIntoView({behavior:"smooth"}),d(!1),u(s+" "+n)}else(0,l.navigate)(s+"?anchor="+n)}},t)};var u=e=>{let{sidebarData:t}=e;const{setActiveAnchor:s,hasScrolled:n}=(0,a.useContext)(r),{0:u,1:m}=(0,a.useState)([]),{0:d,1:h}=(0,a.useState)(!1),{0:p,1:f}=(0,a.useState)([]),{0:E,1:g}=(0,a.useState)(!1),b=(0,c.useLocation)(),{pathname:v}=b;if((0,a.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,s)=>{const a=[];e.forEach(((e,t)=>{const s=e.target.href.split("#")[1],n=v.slice(0,-1)+" "+s;e.isIntersecting?a.push({anchorString:n,inView:!0,offsetTop:e.target.offsetTop}):a.push({anchorString:n,inView:!1,offsetTop:e.target.offsetTop})})),f(a)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,a.useEffect)((()=>{p.length&&!d&&(m(p),h(!0))}),[p,d]),(0,a.useEffect)((()=>{if(d&&p.length){let e=(0,o.Z)(u);if(p.forEach((t=>{const s=u.findIndex((e=>t.anchorString==e.anchorString));s>=0&&e.splice(s,1,t)})),m(e),f([]),n){let t=Number.POSITIVE_INFINITY,a=-1;if(e.forEach(((e,s)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,a=s)})),a>=0){const t=e[a];s(t.anchorString)}else s("")}}}),[u,p,d,n]),(0,a.useEffect)((()=>{if(b.search&&!E){const e=new URLSearchParams(b.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const a=v.slice(0,-1);s(a+" "+e)}}g(!0)}else if(d&&!E){let e=u[0];e.inView&&s(e.anchorString),g(!0)}}),[d,u,E]),!t)return;const{path:S,nodes:k}=t,y=[],w=[],N={};k.forEach((e=>{const{frontmatter:{category:t,title:s,slug:a,order:n,isCategoryRoot:o,anchorLinks:l}}=e;if(t)N[t]||(N[t]=[]),o?w.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+S+"/"+a,sublinks:null,anchorLinks:l}):N[t].push({title:s,path:"/"+S+"/"+a,order:n,anchorLinks:l});else{const e="index"===a?"/"+S:"/"+S+"/"+a;y.push({title:s,path:e,sublinks:null,order:n,anchorLinks:l})}})),w.forEach((e=>{const t=e.categoryName;e.sublinks=N[t]})),y.sort(((e,t)=>e.order-t.order)),w.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),w.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const A=[].concat(y,w),T="//simple-scss-utilities-docs";return a.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},a.createElement("h1",null,"first path part"),a.createElement("nav",{className:"display-flex flex-col"},a.createElement("ul",{className:"p-md"},A.map((e=>{const{isCategoryRoot:t,categoryName:s,path:n,title:o,sublinks:c}=e;if(t){const e=o.charAt(0).toUpperCase()+o.slice(1),t=""+T+n+"/"===v;return a.createElement("li",{key:n+" "+o,className:"font-bold"},a.createElement("span",{className:t?"text-blue":""},a.createElement(l.Link,{to:n},e)),c&&a.createElement("ul",null,c.map((e=>{const{title:t,path:s,anchorLinks:n}=e,o=""+T+s+"/"===v;return a.createElement("li",{key:t+" "+s,className:"pl-md font-normal"},a.createElement("span",{className:o?"text-blue":""},a.createElement(l.Link,{to:s},t)),n&&a.createElement("ul",null,n.map((e=>{const{title:t,link:n}=e;return a.createElement("li",{key:t+" "+n,className:"pl-md font-md"},a.createElement(i,{path:s,to:n},t))}))))}))))}o.charAt(0).toUpperCase(),o.slice(1);const r=""+T+n+"/"===v;return a.createElement("li",{key:n+" "+o},a.createElement("span",{className:r?"text-blue":""},a.createElement(l.Link,{to:n},o)))})))))};var m=e=>{let{pathname:t,children:s}=e;const{0:o,1:c}=(0,a.useState)(!1),{0:i,1:m}=(0,a.useState)("");let d,h="/simple-scss-utilities-docs/";t.startsWith(h+"docs")?d="docs":t.startsWith(h+"components")?d="components":t.startsWith(h+"customize")&&(d="customize"),console.log("SECTION IS "+d),console.log("FIRST PATH PART IS "+h),console.log(t),console.log(h+"docs"),console.log("StARTS With is "+t.startsWith(h));const{docs:p,components:f,customize:E}=(0,l.useStaticQuery)("543507817");let g;switch(console.log({docs:p,components:f,customize:E}),d){case"docs":g={path:"docs",...p};break;case"components":g={path:"components",...f};break;case"customize":g={path:"customize",...E}}return a.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},a.createElement(a.Fragment,null,a.createElement(r.Provider,{value:{activeAnchor:i,setActiveAnchor:m,hasScrolled:o,setHasScrolled:c}},a.createElement(u,{sidebarData:g}),a.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{c(!0)},onTouchStart:()=>{c(!0)}},a.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},s),a.createElement(n.Z,null)))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-components-index-mdx-1f057ac44873462f4236.js.map