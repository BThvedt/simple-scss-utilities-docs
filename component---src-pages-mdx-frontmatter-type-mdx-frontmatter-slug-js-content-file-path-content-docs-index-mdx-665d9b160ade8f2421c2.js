"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[7832],{9426:function(e,t,a){a.r(t),a.d(t,{default:function(){return u}});var s=a(1151),n=a(7294);function r(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,s.ah)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h1,null,"This is a test page - Docs"),"\n",n.createElement(t.h2,null,"Still learning Gatsby and MDx haha. Only a couple days behind :)"),"\n",n.createElement(t.p,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ligula ullamcorper malesuada proin libero nunc consequat interdum. Commodo ullamcorper a lacus vestibulum sed arcu non. Rhoncus aenean vel elit scelerisque. Duis tristique sollicitudin nibh sit. Tincidunt ornare massa eget egestas purus viverra accumsan. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Euismod lacinia at quis risus sed vulputate. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Et netus et malesuada fames ac turpis egestas sed tempus. Habitasse platea dictumst quisque sagittis purus. Turpis egestas sed tempus urna et pharetra pharetra massa. Aliquet porttitor lacus luctus accumsan tortor. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Imperdiet proin fermentum leo vel. Nunc non blandit massa enim nec dui nunc mattis enim. Semper viverra nam libero justo laoreet sit amet. Proin sagittis nisl rhoncus mattis rhoncus urna neque."))}var l=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?n.createElement(t,e,n.createElement(r,e)):r(e)},o=(a(1883),a(5705)),c=a(2525);const i=e=>{let{location:t,data:{mdx:a},children:s}=e;const{pathname:r}=t;return r.includes("/page/")?n.createElement(n.Fragment,null,s):n.createElement(o.Z,{onSideBarPage:!0},n.createElement(n.Fragment,null,n.createElement(c.Z,{pathname:r},n.createElement("main",null,s))))};function u(e){return n.createElement(i,e,n.createElement(l,e))}},2525:function(e,t,a){a.d(t,{Z:function(){return m}});var s=a(7294),n=a(8419),r=a(5785),l=a(1883),o=a(7896);var c=(0,s.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:a,to:n}=e;const r=(0,o.useLocation)(),{activeAnchor:i,setActiveAnchor:u,hasScrolled:m,setHasScrolled:d}=(0,s.useContext)(c),{0:h,1:p}=(0,s.useState)(!1),{pathname:f}=r;return(0,s.useEffect)((()=>{p(i==a+" "+n)}),[i]),s.createElement("p",{className:(h?"font-bold":"")+" cursor-pointer",onClick:()=>{if(a+"/"==f){document.getElementById(n).scrollIntoView({behavior:"smooth"}),d(!1),u(a+" "+n)}else(0,l.navigate)(a+"?anchor="+n)}},t)};var u=e=>{let{sidebarData:t}=e;const{setActiveAnchor:a,hasScrolled:n}=(0,s.useContext)(c),{0:u,1:m}=(0,s.useState)([]),{0:d,1:h}=(0,s.useState)(!1),{0:p,1:f}=(0,s.useState)([]),{0:E,1:g}=(0,s.useState)(!1),v=(0,o.useLocation)(),{pathname:b}=v;if((0,s.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,a)=>{const s=[];e.forEach(((e,t)=>{const a=e.target.href.split("#")[1],n=b.slice(0,-1)+" "+a;e.isIntersecting?s.push({anchorString:n,inView:!0,offsetTop:e.target.offsetTop}):s.push({anchorString:n,inView:!1,offsetTop:e.target.offsetTop})})),f(s)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,s.useEffect)((()=>{p.length&&!d&&(m(p),h(!0))}),[p,d]),(0,s.useEffect)((()=>{if(d&&p.length){let e=(0,r.Z)(u);if(p.forEach((t=>{const a=u.findIndex((e=>t.anchorString==e.anchorString));a>=0&&e.splice(a,1,t)})),m(e),f([]),n){let t=Number.POSITIVE_INFINITY,s=-1;if(e.forEach(((e,a)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,s=a)})),s>=0){const t=e[s];a(t.anchorString)}else a("")}}}),[u,p,d,n]),(0,s.useEffect)((()=>{if(v.search&&!E){const e=new URLSearchParams(v.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const s=b.slice(0,-1);a(s+" "+e)}}g(!0)}else if(d&&!E){let e=u[0];e.inView&&a(e.anchorString),g(!0)}}),[d,u,E]),!t)return;const{path:S,nodes:k}=t,y=[],N=[],w={};k.forEach((e=>{const{frontmatter:{category:t,title:a,slug:s,order:n,isCategoryRoot:r,anchorLinks:l}}=e;if(t)w[t]||(w[t]=[]),r?N.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+S+"/"+s,sublinks:null,anchorLinks:l}):w[t].push({title:a,path:"/"+S+"/"+s,order:n,anchorLinks:l});else{const e="index"===s?"/"+S:"/"+S+"/"+s;y.push({title:a,path:e,sublinks:null,order:n,anchorLinks:l})}})),N.forEach((e=>{const t=e.categoryName;e.sublinks=w[t]})),y.sort(((e,t)=>e.order-t.order)),N.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),N.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const x=[].concat(y,N),A="//simple-scss-utilities-docs";return s.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},s.createElement("h1",null,"first path part"),s.createElement("nav",{className:"display-flex flex-col"},s.createElement("ul",{className:"p-md"},x.map((e=>{const{isCategoryRoot:t,categoryName:a,path:n,title:r,sublinks:o}=e;if(t){const e=r.charAt(0).toUpperCase()+r.slice(1),t=""+A+n+"/"===b;return s.createElement("li",{key:n+" "+r,className:"font-bold"},s.createElement("span",{className:t?"text-blue":""},s.createElement(l.Link,{to:n},e)),o&&s.createElement("ul",null,o.map((e=>{const{title:t,path:a,anchorLinks:n}=e,r=""+A+a+"/"===b;return s.createElement("li",{key:t+" "+a,className:"pl-md font-normal"},s.createElement("span",{className:r?"text-blue":""},s.createElement(l.Link,{to:a},t)),n&&s.createElement("ul",null,n.map((e=>{const{title:t,link:n}=e;return s.createElement("li",{key:t+" "+n,className:"pl-md font-md"},s.createElement(i,{path:a,to:n},t))}))))}))))}r.charAt(0).toUpperCase(),r.slice(1);const c=""+A+n+"/"===b;return s.createElement("li",{key:n+" "+r},s.createElement("span",{className:c?"text-blue":""},s.createElement(l.Link,{to:n},r)))})))))};var m=e=>{let{pathname:t,children:a}=e;const{0:r,1:o}=(0,s.useState)(!1),{0:i,1:m}=(0,s.useState)(""),{docs:d,components:h,customize:p}=(0,l.useStaticQuery)("543507817");let f;return t.startsWith("/docs")?f={path:"docs",...d}:t.startsWith("/components")?f={path:"components",...h}:t.startsWith("/customize")&&(f={path:"customize",...p}),console.log(f),s.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},s.createElement(s.Fragment,null,s.createElement(c.Provider,{value:{activeAnchor:i,setActiveAnchor:m,hasScrolled:r,setHasScrolled:o}},s.createElement(u,{sidebarData:f}),s.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{o(!0)},onTouchStart:()=>{o(!0)}},s.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},a),s.createElement(n.Z,null)))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-index-mdx-665d9b160ade8f2421c2.js.map