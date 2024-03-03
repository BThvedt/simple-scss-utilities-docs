"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[5420],{1728:function(e,t,l){l.r(t),l.d(t,{default:function(){return g}});var a=l(4552),n=l(1504),r=l(9360),c=l(2528),s=l(6460);function i(e){const t=Object.assign({h1:"h1",h4:"h4",p:"p",code:"code",a:"a",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",pre:"pre"},(0,a.MN)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h1,null,"Filter"),"\n",n.createElement(t.h4,null,"How to use"),"\n",n.createElement(t.p,null,"The 4 filters included by default are blur, contrast, grayscale, and saturate. Each of these can be specfied as sm, md, and lg, like paddings and margins for exmaple but with only a few values. While low, md, hi probably make more sense, stayed with sm, md lg just because it's used with so many other things. However, names can be chagned and filters can be added in ",n.createElement(t.code,null,"variables.scss"),", so if don't like the values, or wanted to add a drop-shadow for example, it's totally possible! See the ",n.createElement(t.a,{href:"/simple-scss-utilities-docs/customize/"},"Customize")," section for more info."),"\n",n.createElement(t.p,null,"The default filter classes are:"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,{align:"left"},"Class"),n.createElement(t.th,{align:"left"},"CSS rule"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"blur-sm"),n.createElement(t.td,{align:"left"},"filter: blur(2px);")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"blur-md"),n.createElement(t.td,{align:"left"},"filter: blur(4px);")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"blur-lg"),n.createElement(t.td,{align:"left"},"filter: blur(6px);")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"contrast-sm"),n.createElement(t.td,{align:"left"},"filter: contrast(0.75);")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"contrast-md"),n.createElement(t.td,{align:"left"},"filter: contrast(1.25);")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"contrast-lg"),n.createElement(t.td,{align:"left"},"filter: contrast(1.75);")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"grayscale-sm"),n.createElement(t.td,{align:"left"},"filter: grayscale(0.33);")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"grayscale-md"),n.createElement(t.td,{align:"left"},"filter: grayscale(0.67);")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"grayscale-lg"),n.createElement(t.td,{align:"left"},"filter: grayscale();")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"saturate-sm"),n.createElement(t.td,{align:"left"},"filter: saturate(0.5);")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"saturate-md"),n.createElement(t.td,{align:"left"},"filter: saturate(2);")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"saturate-lg"),n.createElement(t.td,{align:"left"},"filter: saturate(3);")))),"\n",n.createElement(t.p,null,"these can be prefixed with responsive classes liks ",n.createElement(t.code,null,"scr:")," or ",n.createElement(t.code,null,"max-tab")," like the other classes in this category. Let's jump into some examples!"),"\n",n.createElement(t.h3,null,"Examples:"),"\n",n.createElement(t.p,null,"Let's see how these filters alter this photo:"),"\n",n.createElement("div",{className:"center p-lg"},n.createElement("figure",null,n.createElement("img",{src:s.c,alt:"Cat"}),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"text-lg py-md align-center",text:"Origonal Img 512x512"})))),"\n",n.createElement("div",{className:"row gap-lg"},n.createElement("div",{className:"col-4"},n.createElement("figure",null,n.createElement("div",{className:"ratio-4/3"},n.createElement("img",{className:"w-full h-full object-fill blur-sm ",src:s.c,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"text-lg py-md",text:".blur-sm"})))),n.createElement("div",{className:"col-4"},n.createElement("figure",null,n.createElement("div",{className:"ratio-4/3"},n.createElement("img",{className:"w-full h-full object-fill blur-md ",src:s.c,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"text-lg py-md",text:".blur-md"})))),n.createElement("div",{className:"col-4"},n.createElement("figure",null,n.createElement("div",{className:"ratio-4/3"},n.createElement("img",{className:"w-full h-full object-fill blur-lg ",src:s.c,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"text-lg py-md",text:".blur-lg"}))))),"\n",n.createElement("div",{className:"row gap-lg"},n.createElement("div",{className:"col-4"},n.createElement("figure",null,n.createElement("div",{className:"ratio-4/3"},n.createElement("img",{className:"w-full h-full object-fill contrast-sm ",src:s.c,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"text-lg py-md",text:".contrast-sm"})))),n.createElement("div",{className:"col-4"},n.createElement("figure",null,n.createElement("div",{className:"ratio-4/3"},n.createElement("img",{className:"w-full h-full object-fill contrast-md ",src:s.c,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"text-lg py-md",text:".contrast-md"})))),n.createElement("div",{className:"col-4"},n.createElement("figure",null,n.createElement("div",{className:"ratio-4/3"},n.createElement("img",{className:"w-full h-full object-fill contrast-lg ",src:s.c,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"text-lg py-md",text:".contrast-lg"}))))),"\n",n.createElement("div",{className:"row gap-lg"},n.createElement("div",{className:"col-4"},n.createElement("figure",null,n.createElement("div",{className:"ratio-4/3"},n.createElement("img",{className:"w-full h-full object-fill grayscale-sm ",src:s.c,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"text-lg py-md",text:".grayscale-sm"})))),n.createElement("div",{className:"col-4"},n.createElement("figure",null,n.createElement("div",{className:"ratio-4/3"},n.createElement("img",{className:"w-full h-full object-fill grayscale-md ",src:s.c,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"text-lg py-md",text:".grayscale-md"})))),n.createElement("div",{className:"col-4"},n.createElement("figure",null,n.createElement("div",{className:"ratio-4/3"},n.createElement("img",{className:"w-full h-full object-fill grayscale-lg ",src:s.c,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"text-lg py-md",text:".grayscale-lg"}))))),"\n",n.createElement("div",{className:"row gap-lg"},n.createElement("div",{className:"col-4"},n.createElement("figure",null,n.createElement("div",{className:"ratio-4/3"},n.createElement("img",{className:"w-full h-full object-fill saturate-sm ",src:s.c,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"text-lg py-md",text:".saturate-sm"})))),n.createElement("div",{className:"col-4"},n.createElement("figure",null,n.createElement("div",{className:"ratio-4/3"},n.createElement("img",{className:"w-full h-full object-fill saturate-md ",src:s.c,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"text-lg py-md",text:".saturate-md"})))),n.createElement("div",{className:"col-4"},n.createElement("figure",null,n.createElement("div",{className:"ratio-4/3"},n.createElement("img",{className:"w-full h-full object-fill saturate-lg ",src:s.c,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"text-lg py-md",text:".saturate-lg"}))))),"\n",n.createElement(t.p,null,"Here is the html for the Saturate row to provide a working example:"),"\n",n.createElement(c.c,{title:"HTML"},n.createElement(t.pre,null,n.createElement(t.code,{className:"language-HTML"},'\x3c!-- the <img> tags recieve the object-fit classes: --\x3e\r\n<div class="row gap-lg">\r\n  <div class="col-4">\r\n    <figure>\r\n      <div class="ratio-4/3">\r\n        <img\r\n          class="w-full h-full object-fill saturate-sm "\r\n          src="static/cat-resized-2ec747eea85cbd774bc0c06734ec57d8.png"\r\n          alt="Cat"\r\n        />\r\n      </div>\r\n      <figcaption>\r\n        <p class="text-lg py-md">.saturate-sm</p>\r\n      </figcaption>\r\n    </figure>\r\n  </div>\r\n  <div class="col-4">\r\n    <figure>\r\n      <div class="ratio-4/3">\r\n        <img\r\n          class="w-full h-full object-fill saturate-md "\r\n          src="static/cat-resized-2ec747eea85cbd774bc0c06734ec57d8.png"\r\n          alt="Cat"\r\n        />\r\n      </div>\r\n      <figcaption>\r\n        <p class="text-lg py-md">.saturate-md</p>\r\n      </figcaption>\r\n    </figure>\r\n  </div>\r\n  <div class="col-4">\r\n    <figure>\r\n      <div class="ratio-4/3">\r\n        <img\r\n          class="w-full h-full object-fill saturate-lg "\r\n          src="static/cat-resized-2ec747eea85cbd774bc0c06734ec57d8.png"\r\n          alt="Cat"\r\n        />\r\n      </div>\r\n      <figcaption>\r\n        <p class="text-lg py-md">.saturate-lg</p>\r\n      </figcaption>\r\n    </figure>\r\n  </div>\r\n</div>\n'))),"\n",n.createElement(t.p,null,"And of course these are all responsive. Here's a responsive exmaple that changes filter on screen width, if you're in a browser you can resize to see it react to the default breakpoints (might have to close the sidebar on smaller withs)"),"\n",n.createElement("div",{className:"center p-lg"},n.createElement("figure",null,n.createElement("img",{className:"w-full h-full \r\nlg:contrast-lg\r\nscr:saturate-lg\r\ntab:grayscale-lg\r\nblur-lg\r\n",src:s.c,alt:"Cat"}),n.createElement("figcaption",null,n.createElement(r.gZ,{className:"align-center text-lg display-none radius-md lg:display-block",text:"Break Point: lg Filter: contrast-lg"}),n.createElement(r.gZ,{className:"align-center text-lg display-none scr:display-block lg:display-none",text:"Break Point: scr Filter: saturate-lg"}),n.createElement(r.gZ,{className:"align-center text-lg display-none tab:display-block scr:display-none",text:"Break Point: tab Filter: grayscale-lg"}),n.createElement(r.gZ,{className:"align-center text-lg display-block tab:display-none",text:"Break Point: tab Filter: blur-lg"})))),"\n",n.createElement(t.p,null,"That does it for filters. Happy coding!"))}var m=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.MN)(),e.components);return t?n.createElement(t,e,n.createElement(i,e)):i(e)},o=(l(4056),l(896)),u=l(2496);const d=e=>{let{location:t,data:{mdx:l},children:a}=e;const{pathname:r}=t;return r.includes("/page/")?n.createElement(n.Fragment,null,a):n.createElement(o.c,{onSideBarPage:!0},n.createElement(u.c,{pathname:r},n.createElement("main",null,a)))};function g(e){return n.createElement(d,e,n.createElement(m,e))}},2496:function(e,t,l){l.d(t,{c:function(){return E}});var a=l(1504),n=l(8632),r=l(8764),c=l(4056),s=l(5184);var i=(0,a.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var m=e=>{let{children:t,path:l,to:n}=e;const r=(0,s.useLocation)(),{activeAnchor:m,setActiveAnchor:o,hasScrolled:u,setHasScrolled:d}=(0,a.useContext)(i),{0:g,1:f}=(0,a.useState)(!1),{pathname:E}=r;return(0,a.useEffect)((()=>{f(m=="/simple-scss-utilities-docs"+l+" "+n)}),[m]),a.createElement("p",{className:(g?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+l+"/"==E){document.getElementById(n).scrollIntoView({behavior:"smooth"}),d(!1),o("/simple-scss-utilities-docs"+l+" "+n)}else(0,c.navigate)(l+"?anchor="+n)}},t)},o=l(3616),u=l(792),d=l(5896),g=l(7264);var f=e=>{let{sidebarData:t}=e;const{setActiveAnchor:l,hasScrolled:n}=(0,a.useContext)(i),{sidebarOpen:f,setSidebarOpen:E}=(0,a.useContext)(o.c),{0:p,1:h}=(0,a.useState)([]),{0:b,1:v}=(0,a.useState)(!1),{0:x,1:N}=(0,a.useState)([]),{0:y,1:w}=(0,a.useState)(!1),{0:k,1:C}=(0,a.useState)(!1),{width:S}=(0,g.c)(),j=(0,s.useLocation)(),{pathname:Z}=j;if((0,a.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,l)=>{const a=[];e.forEach(((e,t)=>{const l=e.target.href.split("#")[1],n=Z.slice(0,-1)+" "+l;e.isIntersecting?a.push({anchorString:n,inView:!0,offsetTop:e.target.offsetTop}):a.push({anchorString:n,inView:!1,offsetTop:e.target.offsetTop})})),N(a)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,a.useEffect)((()=>{x.length&&!b&&(h(x),v(!0))}),[x,b]),(0,a.useEffect)((()=>{if(b&&x.length){let e=(0,r.c)(p);if(x.forEach((t=>{const l=p.findIndex((e=>t.anchorString==e.anchorString));l>=0&&e.splice(l,1,t)})),h(e),N([]),n){let t=Number.POSITIVE_INFINITY,a=-1;if(e.forEach(((e,l)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,a=l)})),a>=0){const t=e[a];l(t.anchorString)}else l("")}}}),[p,x,b,n]),(0,a.useEffect)((()=>{if(j.search&&!y){const e=new URLSearchParams(j.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const a=Z.slice(0,-1);l(a+" "+e)}}w(!0)}else if(b&&!y){let e=p[0];e.inView&&l(e.anchorString),w(!0)}}),[b,p,y]),(0,a.useEffect)((()=>{C(S>768)}),[S]),(0,a.useEffect)((()=>{E(!0)}),[k]),!t)return a.createElement(a.Fragment,null,"No sidebar data for path "+Z);const{path:L,nodes:A}=t,I=[],T=[],z={};A.forEach((e=>{const{frontmatter:{category:t,title:l,slug:a,order:n,isCategoryRoot:r,anchorLinks:c}}=e;if(t)z[t]||(z[t]=[]),r?T.push({title:l,categoryName:t,isCategoryRoot:!0,path:"/"+L+"/"+a,sublinks:null,order:n,anchorLinks:c}):z[t].push({title:l,path:"/"+L+"/"+a,order:n,anchorLinks:c});else{const e="index"===a?"/"+L:"/"+L+"/"+a;I.push({title:l,path:e,sublinks:null,order:n,anchorLinks:c})}})),T.forEach((e=>{const t=e.categoryName;e.sublinks=z[t]})),I.sort(((e,t)=>e.order-t.order)),T.sort(((e,t)=>e.order-t.order)),T.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const F=[].concat(I,T);return a.createElement(a.Fragment,null,a.createElement("div",{className:"w-0"},a.createElement("div",{onClick:()=>E(!0),className:(f?"display-none":"display-flex")+" text-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-magenta-lg hover:shadow-blue-lg bg-background-ltr items-center justify-center bg-background z-5 text-magenta hover:text-blue"},a.createElement(u.u,{icon:d.mIU}))),a.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(f?"":"display-none")},a.createElement("nav",{className:"p-md"},a.createElement("span",{className:(k?"display-none":"")+" "},a.createElement(u.u,{className:"cursor-pointer hover:text-magenta text-magenta hover:text-blue text-lg py-sm",onClick:()=>E(!1),icon:d.kvG})),a.createElement("ul",{className:"display-flex flex-col line-height-lg"},F.map((e=>{const{isCategoryRoot:t,categoryName:l,path:n,title:r,sublinks:s,anchorLinks:i}=e;if(t){const e=r.charAt(0).toUpperCase()+r.slice(1),t="/simple-scss-utilities-docs"+n+"/"===Z;return a.createElement("li",{key:n+" "+r},a.createElement("span",{className:(t?"text-magenta":"")+" font-large hover:text-magenta "},a.createElement(c.Link,{to:n},e)),i&&a.createElement("ul",{className:"line-height-md "},i.map(((e,t)=>{const{title:l,link:r}=e;return a.createElement("li",{key:l+" "+r,className:"pl-md text-md "+(t==i.length-1?"mb-xs":"")+" "},a.createElement(m,{path:n,to:r},l))}))),s&&a.createElement("ul",null,s.map(((e,t)=>{const{title:l,path:n,anchorLinks:r}=e,i="/simple-scss-utilities-docs"+n+"/"===Z;return a.createElement("li",{key:l+" "+n,className:"pl-md font-normal   "+(t==s.length-1?"mb-xs":"")},a.createElement("span",{className:(i?"text-magenta":"")+" font-bold hover:text-magenta"},a.createElement(c.Link,{to:n},l)),r&&a.createElement("ul",{className:"line-height-md "},r.map((e=>{const{title:t,link:l}=e;return a.createElement("li",{key:t+" "+l,className:"pl-md text-md hover:text-magenta"},a.createElement(m,{path:n,to:l},t))}))))}))))}r.charAt(0).toUpperCase(),r.slice(1);const o="/simple-scss-utilities-docs"+n+"/"===Z;return a.createElement("li",{key:n+" "+r},a.createElement("span",{className:(o?"text-magenta":"")+" font-large hover:text-magenta"},a.createElement(c.Link,{to:n},r)))}))))))};var E=e=>{let{pathname:t,children:l}=e;const{sidebarOpen:r,setSidebarOpen:s}=(0,a.useContext)(o.c),{0:m,1:u}=(0,a.useState)(!1),{0:d,1:g}=(0,a.useState)(""),{docs:E,components:p,customize:h}=(0,c.useStaticQuery)("2241216091");let b;return t.startsWith("/simple-scss-utilities-docs/docs")?b={path:"docs",...E}:t.startsWith("/simple-scss-utilities-docs/customize")&&(b={path:"customize",...h}),a.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},a.createElement(i.Provider,{value:{activeAnchor:d,setActiveAnchor:g,hasScrolled:m,setHasScrolled:u}},a.createElement(f,{sidebarData:b}),a.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{u(!0)},onTouchStart:()=>{u(!0)}},a.createElement("div",{id:"small-width-overlay",className:"display-none "+(r?"max-tab:display-block":"")+" position-fixed top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),a.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg w-19/20 max-w-container lg:mx-auto   "+(r?"max-tab:filter-blur-md":"")},l),a.createElement(n.c,null))))}},2528:function(e,t,l){var a=l(1504);t.c=e=>{let{children:t,title:l,isFile:n}=e;return a.createElement("div",{className:"mt-lg mb-2xl mr-2"},a.createElement("h6",{className:"font-large text-lg position-relative left-1px mb-xs"},n?"File: ":"",l),a.createElement("div",{className:"mr-md"},t))}},6460:function(e,t,l){t.c=l.p+"static/cat-resized-2ec747eea85cbd774bc0c06734ec57d8.png"}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-responsive-examples-filter-mdx-ada96357cebba85de943.js.map