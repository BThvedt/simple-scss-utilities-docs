"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[7291],{1570:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var s=n(1151),a=n(7294);function o(e){const t=Object.assign({h1:"h1",h2:"h2",p:"p"},(0,s.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"This is a test page - Customize"),"\n",a.createElement(t.h2,null,"Still learning Gatsby and MDx haha. Only a couple days behind :)"),"\n",a.createElement(t.p,null,"Lorem ipsum dolor sit amet,urpis egestas sed tempus urna et pharetra pharetra massa. Aliquet porttitor lacus luctus accumsan tortor. Ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at. Imperdiet proin fermentum leo vel. Nunc non blandit massa enim nec dui nunc mattis enim. Semper viverra nam libero justo laoreet sit amet. Proin sagittis nisl rhoncus mattis rhoncus urna neque."))}var r=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,s.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},c=(n(1883),n(5705)),l=n(2525);const i=e=>{let{location:t,data:{mdx:n},children:s}=e;const{pathname:o}=t;return o.includes("/page/")?a.createElement(a.Fragment,null,s):a.createElement(c.Z,{onSideBarPage:!0},a.createElement(a.Fragment,null,a.createElement(l.Z,{pathname:o},a.createElement("main",null,s))))};function m(e){return a.createElement(i,e,a.createElement(r,e))}},2525:function(e,t,n){n.d(t,{Z:function(){return u}});var s=n(7294),a=n(8419),o=n(5785),r=n(1883),c=n(7896);var l=(0,s.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:n,to:a}=e;const o=(0,c.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:h}=(0,s.useContext)(l),{0:p,1:d}=(0,s.useState)(!1),{pathname:f}=o;return(0,s.useEffect)((()=>{d(i==n+" "+a)}),[i]),s.createElement("p",{className:(p?"font-bold":"")+" cursor-pointer",onClick:()=>{if(n+"/"==f){document.getElementById(a).scrollIntoView({behavior:"smooth"}),h(!1),m(n+" "+a)}else(0,r.navigate)(n+"?anchor="+a)}},t)};var m=e=>{let{sidebarData:t}=e;const{setActiveAnchor:n,hasScrolled:a}=(0,s.useContext)(l),{0:m,1:u}=(0,s.useState)([]),{0:h,1:p}=(0,s.useState)(!1),{0:d,1:f}=(0,s.useState)([]),{0:E,1:g}=(0,s.useState)(!1),b=(0,c.useLocation)(),{pathname:v}=b;if((0,s.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,n)=>{const s=[];e.forEach(((e,t)=>{const n=e.target.href.split("#")[1],a=v.slice(0,-1)+" "+n;e.isIntersecting?s.push({anchorString:a,inView:!0,offsetTop:e.target.offsetTop}):s.push({anchorString:a,inView:!1,offsetTop:e.target.offsetTop})})),f(s)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,s.useEffect)((()=>{d.length&&!h&&(u(d),p(!0))}),[d,h]),(0,s.useEffect)((()=>{if(h&&d.length){let e=(0,o.Z)(m);if(d.forEach((t=>{const n=m.findIndex((e=>t.anchorString==e.anchorString));n>=0&&e.splice(n,1,t)})),u(e),f([]),a){let t=Number.POSITIVE_INFINITY,s=-1;if(e.forEach(((e,n)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,s=n)})),s>=0){const t=e[s];n(t.anchorString)}else n("")}}}),[m,d,h,a]),(0,s.useEffect)((()=>{if(b.search&&!E){const e=new URLSearchParams(b.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const s=v.slice(0,-1);n(s+" "+e)}}g(!0)}else if(h&&!E){let e=m[0];e.inView&&n(e.anchorString),g(!0)}}),[h,m,E]),!t)return;const{path:S,nodes:k}=t,y=[],N=[],w={};k.forEach((e=>{const{frontmatter:{category:t,title:n,slug:s,order:a,isCategoryRoot:o,anchorLinks:r}}=e;if(t)w[t]||(w[t]=[]),o?N.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+S+"/"+s,sublinks:null,anchorLinks:r}):w[t].push({title:n,path:"/"+S+"/"+s,order:a,anchorLinks:r});else{const e="index"===s?"/"+S:"/"+S+"/"+s;y.push({title:n,path:e,sublinks:null,order:a,anchorLinks:r})}})),N.forEach((e=>{const t=e.categoryName;e.sublinks=w[t]})),y.sort(((e,t)=>e.order-t.order)),N.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),N.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const A=[].concat(y,N),I="//simple-scss-utilities-docs";return s.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},s.createElement("h1",null,"first path part"),s.createElement("nav",{className:"display-flex flex-col"},s.createElement("ul",{className:"p-md"},A.map((e=>{const{isCategoryRoot:t,categoryName:n,path:a,title:o,sublinks:c}=e;if(t){const e=o.charAt(0).toUpperCase()+o.slice(1),t=""+I+a+"/"===v;return s.createElement("li",{key:a+" "+o,className:"font-bold"},s.createElement("span",{className:t?"text-blue":""},s.createElement(r.Link,{to:a},e)),c&&s.createElement("ul",null,c.map((e=>{const{title:t,path:n,anchorLinks:a}=e,o=""+I+n+"/"===v;return s.createElement("li",{key:t+" "+n,className:"pl-md font-normal"},s.createElement("span",{className:o?"text-blue":""},s.createElement(r.Link,{to:n},t)),a&&s.createElement("ul",null,a.map((e=>{const{title:t,link:a}=e;return s.createElement("li",{key:t+" "+a,className:"pl-md font-md"},s.createElement(i,{path:n,to:a},t))}))))}))))}o.charAt(0).toUpperCase(),o.slice(1);const l=""+I+a+"/"===v;return s.createElement("li",{key:a+" "+o},s.createElement("span",{className:l?"text-blue":""},s.createElement(r.Link,{to:a},o)))})))))};var u=e=>{let{pathname:t,children:n}=e;const{0:o,1:c}=(0,s.useState)(!1),{0:i,1:u}=(0,s.useState)("");let h,p="/simple-scss-utilities-docs/";t.startsWith(p+"/docs")?h="docs":t.startsWith(p+"/components")?h="components":t.startsWith(p+"/customize")&&(h="customize"),console.log("SECTION IS "+h),console.log("FIRST PATH PART IS "+p),console.log("StARTS With is "+t.startsWith(p));const{docs:d,components:f,customize:E}=(0,r.useStaticQuery)("543507817");let g;switch(console.log({docs:d,components:f,customize:E}),h){case"docs":g={path:"docs",...d};break;case"components":g={path:"components",...f};break;case"customize":g={path:"customize",...E}}return s.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},s.createElement(s.Fragment,null,s.createElement(l.Provider,{value:{activeAnchor:i,setActiveAnchor:u,hasScrolled:o,setHasScrolled:c}},s.createElement(m,{sidebarData:g}),s.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{c(!0)},onTouchStart:()=>{c(!0)}},s.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},n),s.createElement(a.Z,null)))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-customize-index-mdx-0f57eec8d93c365944fe.js.map