"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[5916],{5036:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var a=s(4552),n=s(1504);function l(e){const t=Object.assign({h1:"h1",h4:"h4",p:"p",h3:"h3"},(0,a.MN)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h1,null,"Quickstart"),"\n",n.createElement(t.h4,null,"A couple brief examples to get you started"),"\n",n.createElement(t.p,null,"So, you've skimmed the overview, maybe the front page or the about section, and kind of know what this is all about. Maybe you've even looked at how to install! Let's start with a few brief examples of the classes in action!"),"\n",n.createElement(t.h3,null,"Fonts and Colors"),"\n",n.createElement(t.p,null,"The framework comes with a few default colors and fonts. Most likely you will want to Customize them to your theme. Let's take a look at the default colors."),"\n",n.createElement(t.p,null,"The two special colors are white and black. Every other color comes in 5 shades:"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.MN)(),e.components);return t?n.createElement(t,e,n.createElement(l,e)):l(e)},r=(s(4056),s(1548)),c=s(2496);const i=e=>{let{location:t,data:{mdx:s},children:a}=e;const{pathname:l}=t;return l.includes("/page/")?n.createElement(n.Fragment,null,a):n.createElement(r.c,{onSideBarPage:!0},n.createElement(c.c,{pathname:l},n.createElement("main",null,a)))};function u(e){return n.createElement(i,e,n.createElement(o,e))}},2496:function(e,t,s){s.d(t,{c:function(){return f}});var a=s(1504),n=s(8632),l=s(8764),o=s(4056),r=s(5184);var c=(0,a.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:s,to:n}=e;const l=(0,r.useLocation)(),{activeAnchor:i,setActiveAnchor:u,hasScrolled:m,setHasScrolled:d}=(0,a.useContext)(c),{0:h,1:p}=(0,a.useState)(!1),{pathname:f}=l;return(0,a.useEffect)((()=>{p(i=="/simple-scss-utilities-docs"+s+" "+n)}),[i]),a.createElement("p",{className:(h?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+s+"/"==f){document.getElementById(n).scrollIntoView({behavior:"smooth"}),d(!1),u("/simple-scss-utilities-docs"+s+" "+n)}else(0,o.navigate)(s+"?anchor="+n)}},t)},u=s(3616),m=s(6542),d=s(5896),h=s(7264);var p=e=>{let{sidebarData:t}=e;const{setActiveAnchor:s,hasScrolled:n}=(0,a.useContext)(c),{sidebarOpen:p,setSidebarOpen:f}=(0,a.useContext)(u.c),{0:E,1:b}=(0,a.useState)([]),{0:g,1:k}=(0,a.useState)(!1),{0:v,1:y}=(0,a.useState)([]),{0:w,1:S}=(0,a.useState)(!1),{0:x,1:N}=(0,a.useState)(!1),{width:C}=(0,h.c)(),A=(0,r.useLocation)(),{pathname:L}=A;if((0,a.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,s)=>{const a=[];e.forEach(((e,t)=>{const s=e.target.href.split("#")[1],n=L.slice(0,-1)+" "+s;e.isIntersecting?a.push({anchorString:n,inView:!0,offsetTop:e.target.offsetTop}):a.push({anchorString:n,inView:!1,offsetTop:e.target.offsetTop})})),y(a)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,a.useEffect)((()=>{v.length&&!g&&(b(v),k(!0))}),[v,g]),(0,a.useEffect)((()=>{if(g&&v.length){let e=(0,l.c)(E);if(v.forEach((t=>{const s=E.findIndex((e=>t.anchorString==e.anchorString));s>=0&&e.splice(s,1,t)})),b(e),y([]),n){let t=Number.POSITIVE_INFINITY,a=-1;if(e.forEach(((e,s)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,a=s)})),a>=0){const t=e[a];s(t.anchorString)}else s("")}}}),[E,v,g,n]),(0,a.useEffect)((()=>{if(A.search&&!w){const e=new URLSearchParams(A.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const a=L.slice(0,-1);s(a+" "+e)}}S(!0)}else if(g&&!w){let e=E[0];e.inView&&s(e.anchorString),S(!0)}}),[g,E,w]),(0,a.useEffect)((()=>{N(C>768)}),[C]),(0,a.useEffect)((()=>{f(!0)}),[x]),!t)return a.createElement(a.Fragment,null,"No sidebar data for path "+L);const{path:I,nodes:T}=t,O=[],z=[],V={};T.forEach((e=>{const{frontmatter:{category:t,title:s,slug:a,order:n,isCategoryRoot:l,anchorLinks:o}}=e;if(t)V[t]||(V[t]=[]),l?z.push({title:s,categoryName:t,isCategoryRoot:!0,path:"/"+I+"/"+a,sublinks:null,order:n,anchorLinks:o}):V[t].push({title:s,path:"/"+I+"/"+a,order:n,anchorLinks:o});else{const e="index"===a?"/"+I:"/"+I+"/"+a;O.push({title:s,path:e,sublinks:null,order:n,anchorLinks:o})}})),z.forEach((e=>{const t=e.categoryName;e.sublinks=V[t]})),O.sort(((e,t)=>e.order-t.order)),z.sort(((e,t)=>e.order-t.order)),z.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const F=[].concat(O,z);return a.createElement(a.Fragment,null,a.createElement("div",{className:"w-0"},a.createElement("div",{onClick:()=>f(!0),className:(p?"display-none":"display-flex")+" font-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-lg bg-background-ltr items-center justify-content-center bg-background z-5"},a.createElement(m.u,{icon:d.mIU}))),a.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(p?"":"display-none")},a.createElement("nav",{className:"p-md"},a.createElement(m.u,{className:(x?"display-none":"")+" cursor-pointer hover:text-blue-ltr font-lg py-sm",onClick:()=>f(!1),icon:d.kvG}),a.createElement("ul",{className:"display-flex flex-col"},F.map((e=>{const{isCategoryRoot:t,categoryName:s,path:n,title:l,sublinks:r,anchorLinks:c}=e;if(t){const e=l.charAt(0).toUpperCase()+l.slice(1),t="/simple-scss-utilities-docs"+n+"/"===L;return a.createElement("li",{key:n+" "+l},a.createElement("span",{className:(t?"text-blue":"")+" font-bold"},a.createElement(o.Link,{to:n},e)),c&&a.createElement("ul",null,c.map((e=>{const{title:t,link:s}=e;return a.createElement("li",{key:t+" "+s,className:"pl-md font-md"},a.createElement(i,{path:n,to:s},t))}))),r&&a.createElement("ul",null,r.map((e=>{const{title:t,path:s,anchorLinks:n}=e,l="/simple-scss-utilities-docs"+s+"/"===L;return a.createElement("li",{key:t+" "+s,className:"pl-md font-normal"},a.createElement("span",{className:l?"text-blue":""},a.createElement(o.Link,{to:s},t)),n&&a.createElement("ul",null,n.map((e=>{const{title:t,link:n}=e;return a.createElement("li",{key:t+" "+n,className:"pl-md font-md"},a.createElement(i,{path:s,to:n},t))}))))}))))}l.charAt(0).toUpperCase(),l.slice(1);const u="/simple-scss-utilities-docs"+n+"/"===L;return a.createElement("li",{key:n+" "+l},a.createElement("span",{className:u?"text-blue":""},a.createElement(o.Link,{to:n},l)))}))))))};var f=e=>{let{pathname:t,children:s}=e;const{sidebarOpen:l,setSidebarOpen:r}=(0,a.useContext)(u.c),{0:i,1:m}=(0,a.useState)(!1),{0:d,1:h}=(0,a.useState)(""),{docs:f,components:E,customize:b}=(0,o.useStaticQuery)("2241216091");let g;return t.startsWith("/simple-scss-utilities-docs/docs")?g={path:"docs",...f}:t.startsWith("/simple-scss-utilities-docs/customize")&&(g={path:"customize",...b}),a.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},a.createElement(c.Provider,{value:{activeAnchor:d,setActiveAnchor:h,hasScrolled:i,setHasScrolled:m}},a.createElement(p,{sidebarData:g}),a.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{m(!0)},onTouchStart:()=>{m(!0)}},a.createElement("div",{id:"small-width-overlay",className:"display-none "+(l?"max-tab:display-block":"")+" position-absolute top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),a.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg "+(l?"max-tab:filter-blur-md":"")},s),a.createElement(n.c,null))))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-quickstart-mdx-25077fada215707b8ba1.js.map