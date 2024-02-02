"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[7594],{6981:function(e,t,s){s.r(t),s.d(t,{default:function(){return m}});var n=s(1151),a=s(7294);function l(e){const t=Object.assign({h1:"h1",h2:"h2"},(0,n.ah)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Text"),"\n",a.createElement(t.h2,null,"This is an anchor on this page"),"\n",a.createElement("p",{className:"h-screen"},"stuff"),"\n",a.createElement(t.h2,null,"This is also Anchor"),"\n",a.createElement("p",{className:"h-screen"},"stuff"),"\n",a.createElement(t.h2,null,"Third Anchor"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.ah)(),e.components);return t?a.createElement(t,e,a.createElement(l,e)):l(e)},o=(s(1883),s(5705)),r=s(2525);const i=e=>{let{location:t,data:{mdx:s},children:n}=e;const{pathname:l}=t;return l.includes("/page/")?a.createElement(a.Fragment,null,n):a.createElement(o.Z,{onSideBarPage:!0},a.createElement(a.Fragment,null,a.createElement(r.Z,{pathname:l},a.createElement("main",null,n))))};function m(e){return a.createElement(i,e,a.createElement(c,e))}},2525:function(e,t,s){s.d(t,{Z:function(){return u}});var n=s(7294),a=s(8419),l=s(5785),c=s(1883),o=s(7896);var r=(0,n.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:s,to:a}=e;const l=(0,o.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:u,setHasScrolled:h}=(0,n.useContext)(r),{0:p,1:d}=(0,n.useState)(!1),{pathname:f}=l;return(0,n.useEffect)((()=>{d(i==s+" "+a)}),[i]),n.createElement("p",{className:(p?"font-bold":"")+" cursor-pointer",onClick:()=>{if(s+"/"==f){document.getElementById(a).scrollIntoView({behavior:"smooth"}),h(!1),m(s+" "+a)}else(0,c.navigate)(s+"?anchor="+a)}},t)};var m=e=>{let{sidebarData:t}=e;const{setActiveAnchor:s,hasScrolled:a}=(0,n.useContext)(r),{0:m,1:u}=(0,n.useState)([]),{0:h,1:p}=(0,n.useState)(!1),{0:d,1:f}=(0,n.useState)([]),{0:E,1:g}=(0,n.useState)(!1),v=(0,o.useLocation)(),{pathname:b}=v;if((0,n.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,s)=>{const n=[];e.forEach(((e,t)=>{const s=e.target.href.split("#")[1],a=b.slice(0,-1)+" "+s;e.isIntersecting?n.push({anchorString:a,inView:!0,offsetTop:e.target.offsetTop}):n.push({anchorString:a,inView:!1,offsetTop:e.target.offsetTop})})),f(n)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,n.useEffect)((()=>{d.length&&!h&&(u(d),p(!0))}),[d,h]),(0,n.useEffect)((()=>{if(h&&d.length){let e=(0,l.Z)(m);if(d.forEach((t=>{const s=m.findIndex((e=>t.anchorString==e.anchorString));s>=0&&e.splice(s,1,t)})),u(e),f([]),a){let t=Number.POSITIVE_INFINITY,n=-1;if(e.forEach(((e,s)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,n=s)})),n>=0){const t=e[n];s(t.anchorString)}else s("")}}}),[m,d,h,a]),(0,n.useEffect)((()=>{if(v.search&&!E){const e=new URLSearchParams(v.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const n=b.slice(0,-1);s(n+" "+e)}}g(!0)}else if(h&&!E){let e=m[0];e.inView&&s(e.anchorString),g(!0)}}),[h,m,E]),!t)return;const{path:S,nodes:k}=t,y=[],N=[],w={};k.forEach((e=>{const{frontmatter:{category:t,title:s,slug:n,order:a,isCategoryRoot:l,anchorLinks:c}}=e;if(t)w[t]||(w[t]=[]),l?N.push({title:t,categoryName:t,isCategoryRoot:!0,path:"/"+S+"/"+n,sublinks:null,anchorLinks:c}):w[t].push({title:s,path:"/"+S+"/"+n,order:a,anchorLinks:c});else{const e="index"===n?"/"+S:"/"+S+"/"+n;y.push({title:s,path:e,sublinks:null,order:a,anchorLinks:c})}})),N.forEach((e=>{const t=e.categoryName;e.sublinks=w[t]})),y.sort(((e,t)=>e.order-t.order)),N.sort(((e,t)=>e.title.localeCompare(t.title,"en",{sensitivity:"base"}))),N.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const A=[].concat(y,N);return n.createElement("div",{id:"sidebar",className:"min-w-1/4 br-sm br-black"},n.createElement("nav",{className:"display-flex flex-col"},n.createElement("ul",{className:"p-md"},A.map((e=>{const{isCategoryRoot:t,categoryName:s,path:a,title:l,sublinks:o}=e;if(t){const e=l.charAt(0).toUpperCase()+l.slice(1),t=a===b;return console.log("PATHNAME IS "+b),console.log("path is "+a),n.createElement("li",{key:a+" "+l,className:"font-bold"},n.createElement("span",{className:t?"text-blue":""},n.createElement("p",null,"/simple-scss-utilities-docs/"+a+"/"),n.createElement(c.Link,{to:"/simple-scss-utilities-docs/"+a+"/"},"- ",e," -")),o&&n.createElement("ul",null,o.map((e=>{const{title:t,path:s,anchorLinks:l}=e,o=s===b;return console.log("subLinkPath IS "+s),console.log("path is "+a),n.createElement("li",{key:t+" "+s,className:"pl-md font-normal"},n.createElement("span",{className:o?"text-blue":""},n.createElement("p",null,"/simple-scss-utilities-docs/"+s+"/"),n.createElement(c.Link,{to:"/simple-scss-utilities-docs/"+s+"/"},"* ",t," *")),l&&n.createElement("ul",null,l.map((e=>{const{title:t,link:a}=e;return n.createElement("li",{key:t+" "+a,className:"pl-md font-md"},n.createElement(i,{path:"/simple-scss-utilities-docs/"+s+"/",to:a},"# ",t," #"))}))))}))))}l.charAt(0).toUpperCase(),l.slice(1);const r=a===b;return n.createElement("li",{key:a+" "+l},n.createElement("span",{className:r?"text-blue":""},n.createElement(c.Link,{to:"/simple-scss-utilities-docs/"+a+"/"},"@ ",l," @")))})))))};var u=e=>{let{pathname:t,children:s}=e;const{0:l,1:o}=(0,n.useState)(!1),{0:i,1:u}=(0,n.useState)(""),{docs:h,components:p,customize:d}=(0,c.useStaticQuery)("543507817");let f;return t.startsWith("/docs")?f={path:"docs",...h}:t.startsWith("/components")?f={path:"components",...p}:t.startsWith("/customize")&&(f={path:"customize",...d}),n.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},n.createElement(n.Fragment,null,n.createElement(r.Provider,{value:{activeAnchor:i,setActiveAnchor:u,hasScrolled:l,setHasScrolled:o}},n.createElement(m,{sidebarData:f}),n.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll layout-module--docs-section--ad6df",onWheel:()=>{o(!0)},onTouchStart:()=>{o(!0)}},n.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg"},s),n.createElement(a.Z,null)))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-color-test-doc-2-mdx-2977d980ede698583ead.js.map