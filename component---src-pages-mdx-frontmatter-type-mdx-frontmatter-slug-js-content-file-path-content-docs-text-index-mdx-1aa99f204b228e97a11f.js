"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[9151],{5364:function(e,t,n){n.r(t),n.d(t,{default:function(){return m}});var l=n(1151),a=n(7294);function o(e){const t=Object.assign({h1:"h1",h3:"h3",ul:"ul",li:"li",p:"p"},(0,l.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Text"),"\n",a.createElement(t.h3,null,"This is a h3"),"\n",a.createElement(t.ul,null,"\n",a.createElement(t.li,null,"List Item Onn"),"\n",a.createElement(t.li,null,"List Item Two"),"\n",a.createElement(t.li,null,"List Item Three"),"\n"),"\n",a.createElement(t.p,null,"Some more text and stuff here!"))}var s=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.ah)(),e.components);return t?a.createElement(t,e,a.createElement(o,e)):o(e)},c=(n(1883),n(5705)),r=n(2525);const i=e=>{let{location:t,data:{mdx:n},children:l}=e;const{pathname:o}=t;return console.log("IN the frontmatter__Slug template"),o.includes("/page/")?a.createElement(a.Fragment,null,l):(console.log("WHY ISNT THIS WORKING"),console.log(n),a.createElement(c.Z,{onSideBarPage:!0},a.createElement(a.Fragment,null,a.createElement("p",null,"Inside mdx.fontmatter.slug"),a.createElement(r.Z,{pathname:o},a.createElement("main",null,l)))))};function m(e){return a.createElement(i,e,a.createElement(s,e))}},2525:function(e,t,n){n.d(t,{Z:function(){return u}});var l=n(7294),a=n(8419),o=n(5785),s=n(1883),c=n(7896);var r=(0,l.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:n,to:a}=e;const o=(0,c.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:h}=(0,l.useContext)(r),{0:d,1:p}=(0,l.useState)(!1),{pathname:f}=o;return(0,l.useEffect)((()=>{p(i==n+" "+a)}),[i]),l.createElement("p",{className:(d?"font-bold":"")+" cursor-pointer",onClick:()=>{if(n+"/"==f){document.getElementById(a).scrollIntoView({behavior:"smooth"}),h(!1),m(n+" "+a)}else(0,s.navigate)(n+"?anchor="+a)}},t)};var m=e=>{let{sidebarData:t}=e;const{setActiveAnchor:n,hasScrolled:a}=(0,l.useContext)(r),{0:m,1:u}=(0,l.useState)([]),{0:h,1:d}=(0,l.useState)(!1),{0:p,1:f}=(0,l.useState)([]),{0:E,1:g}=(0,l.useState)(!1),b=(0,c.useLocation)(),{pathname:S}=b;if((0,l.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,n)=>{const l=[];e.forEach(((e,t)=>{const n=e.target.href.split("#")[1],a=S.slice(0,-1)+" "+n;e.isIntersecting?l.push({anchorString:a,inView:!0,offsetTop:e.target.offsetTop}):l.push({anchorString:a,inView:!1,offsetTop:e.target.offsetTop})})),f(l)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,l.useEffect)((()=>{p.length&&!h&&(u(p),d(!0))}),[p,h]),(0,l.useEffect)((()=>{if(h&&p.length){let e=(0,o.Z)(m);if(p.forEach((t=>{const n=m.findIndex((e=>t.anchorString==e.anchorString));n>=0&&e.splice(n,1,t)})),u(e),f([]),a){let t=Number.POSITIVE_INFINITY,l=-1;if(e.forEach(((e,n)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,l=n)})),l>=0){const t=e[l];n(t.anchorString)}else n("")}}}),[m,p,h,a]),(0,l.useEffect)((()=>{if(b.search&&!E){const e=new URLSearchParams(b.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const l=S.slice(0,-1);n(l+" "+e)}}g(!0)}else if(h&&!E){let e=m[0];e.inView&&n(e.anchorString),g(!0)}}),[h,m,E]),!t)return;const{path:v,nodes:k}=t,y=[],N=[],I={};k.forEach((e=>{const{frontmatter:{category:t,title:n,slug:l,order:a,isCategoryRoot:o,anchorLinks:s}}=e;if(t)I[t]||(I[t]=[]),o?N.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+v+"/"+l,sublinks:null,anchorLinks:s}):I[t].push({title:n,path:"/"+v+"/"+l,order:a,anchorLinks:s});else{const e="index"===l?"/"+v:"/"+v+"/"+l;y.push({title:n,path:e,sublinks:null,order:a,anchorLinks:s})}})),N.forEach((e=>{const t=e.categoryName;e.sublinks=I[t]})),y.sort(((e,t)=>e.order-t.order)),N.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),N.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const w=[].concat(y,N);return l.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},l.createElement("h1",null,"This is the sidebar"),l.createElement("nav",{className:"display-flex flex-col"},l.createElement("ul",{className:"p-md"},w.map((e=>{const{isCategoryRoot:t,categoryName:n,path:a,title:o,sublinks:c}=e;if(t){const e=o.charAt(0).toUpperCase()+o.slice(1),t=a+"/"===S;return l.createElement("li",{key:a+" "+o,className:"font-bold"},l.createElement("span",{className:t?"text-blue":""},l.createElement(s.Link,{to:a},e)),c&&l.createElement("ul",null,c.map((e=>{const{title:t,path:n,anchorLinks:a}=e,o=n+"/"===S;return l.createElement("li",{key:t+" "+n,className:"pl-md font-normal"},l.createElement("span",{className:o?"text-blue":""},l.createElement(s.Link,{to:n},t)),a&&l.createElement("ul",null,a.map((e=>{const{title:t,link:a}=e;return l.createElement("li",{key:t+" "+a,className:"pl-md font-md"},l.createElement(i,{path:n,to:a},t))}))))}))))}o.charAt(0).toUpperCase(),o.slice(1);const r=a+"/"===S;return l.createElement("li",{key:a+" "+o},l.createElement("span",{className:r?"text-blue":""},l.createElement(s.Link,{to:a},o)))})))))};var u=e=>{let{pathname:t,children:n}=e;const{0:o,1:c}=(0,l.useState)(!1),{0:i,1:u}=(0,l.useState)(""),h=t.split("/"),{docs:d,components:p,customize:f}=(0,s.useStaticQuery)("543507817");console.log("PATHNAME IS"),console.log(t),console.log(h),console.log("------------");const E=t.split("/");let g,b;switch(g=E.includes("docs")?"docs":E.includes("components")?"components":"customize",g){case"docs":b={path:"docs",...d};break;case"components":b={path:"components",...p};break;case"customize":b={path:"customize",...f}}return l.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},l.createElement(l.Fragment,null,l.createElement("p",null,"Inside sidebar layout"),l.createElement(r.Provider,{value:{activeAnchor:i,setActiveAnchor:u,hasScrolled:o,setHasScrolled:c}},l.createElement(m,{sidebarData:b}),l.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{c(!0)},onTouchStart:()=>{c(!0)}},l.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},n),l.createElement(a.Z,null)))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-text-index-mdx-1aa99f204b228e97a11f.js.map