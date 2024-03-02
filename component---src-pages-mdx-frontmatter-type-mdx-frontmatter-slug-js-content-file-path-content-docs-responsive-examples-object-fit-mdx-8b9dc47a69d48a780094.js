"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[8288],{8236:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var l=a(4552),n=a(1504),c=a(9360),r=a(2528),s=a.p+"static/cat-resized-2ec747eea85cbd774bc0c06734ec57d8.png";function o(e){const t=Object.assign({h1:"h1",h4:"h4",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",code:"code",pre:"pre"},(0,l.MN)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h1,null,"Object Fit"),"\n",n.createElement(t.h4,null,"How to use Object Fit"),"\n",n.createElement(t.p,null,"There are a few different classes for Object Fit:"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,{align:"left"},"Class"),n.createElement(t.th,{align:"left"},"CSS rule"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"object-contain"),n.createElement(t.td,{align:"left"},"object-fit: contain;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"object-cover"),n.createElement(t.td,{align:"left"},"object-fit: cover;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"object-fill"),n.createElement(t.td,{align:"left"},"object-fit: fill;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"object-none"),n.createElement(t.td,{align:"left"},"object-fit: none;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"object-scale-down"),n.createElement(t.td,{align:"left"},"object-fit: scale-down;")))),"\n",n.createElement(t.p,null,"Let's look at a few examples. In each example, a perfectly square cat-imge is being put into a rectangular container:"),"\n",n.createElement("div",{className:"center p-lg"},n.createElement("figure",null,n.createElement("img",{src:s,alt:"Cat"}),n.createElement("figcaption",null,n.createElement(c.gZ,{className:"text-lg py-md align-center",text:"Origonal Img 512x512"})))),"\n",n.createElement("div",{className:"row gap-lg max-mob:max-h-16 max-h-16 lg:max-h-20 lg:mb-2xl"},n.createElement("div",{className:"col-6"},n.createElement("div",{className:"border-lg border-dashed bg-background-dkr ratio-16/9 center p-xl sizing-border"},n.createElement(c.gZ,{className:"text-lg py-md align-center",text:"In each case, the above square photo has been fit into this not-quite-so-square container!"}))),n.createElement("div",{className:"col-6"},n.createElement("figure",null,n.createElement("div",{className:"border-lg border-dashed bg-background-dkr ratio-16/9"},n.createElement("img",{className:"w-full h-full object-fill",src:s,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(c.gZ,{className:"text-lg py-md",text:"object-fit: fill; (default)"}))))),"\n",n.createElement("div",{className:"row gap-lg max-mob:max-h-16 max-h-16 lg:max-h-20 lg:mb-2xl"},n.createElement("div",{className:"col-6"},n.createElement("figure",null,n.createElement("div",{className:"border-lg border-dashed bg-background-dkr ratio-16/9"},n.createElement("img",{className:"w-full h-full object-contain",src:s,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(c.gZ,{className:"text-lg py-md",text:"object-fit: contain"})))),n.createElement("div",{className:"col-6"},n.createElement("figure",null,n.createElement("div",{className:"border-lg border-dashed bg-background-dkr ratio-16/9"},n.createElement("img",{className:"w-full h-full object-cover",src:s,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(c.gZ,{className:"text-lg py-md",text:"object-fit: cover;"}))))),"\n",n.createElement("div",{className:"row gap-lg max-mob:max-h-16 max-h-16 lg:max-h-24"},n.createElement("div",{className:"col-6"},n.createElement("figure",null,n.createElement("div",{className:"border-lg border-dashed bg-background-dkr ratio-16/9"},n.createElement("img",{className:"w-full h-full object-none",src:s,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(c.gZ,{className:"text-lg py-md",text:"object-fit: none"})))),n.createElement("div",{className:"col-6"},n.createElement("figure",null,n.createElement("div",{className:"border-lg border-dashed bg-background-dkr ratio-16/9"},n.createElement("img",{className:"w-full h-full object-scale-down",src:s,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(c.gZ,{className:"text-lg py-md",text:"object-fit: scale-down"}))))),"\n",n.createElement(t.p,null,"You'll notice ",n.createElement(t.code,null,"contain")," and ",n.createElement(t.code,null,"scale-down")," look similar, because ",n.createElement(t.code,null,"scale-down")," looks at either ",n.createElement(t.code,null,"contain")," and ",n.createElement(t.code,null,"cover")," and chosses the smallest version. Here, ",n.createElement(t.code,null,"contain")," is smaller, so it chooses that to size the image."),"\n",n.createElement(t.p,null,"On larger sizes, ",n.createElement(t.code,null,"cover")," looks like ",n.createElement(t.code,null,"none"),", that's becasue ",n.createElement(t.code,null,"none")," doesn't resize the image, and as the screen gets bigger (somewhere around 1400px for this size) the ",n.createElement(t.code,null,"cover")," image size actually gets close enough to the natural 512px width of the image to where it starts to match."),"\n",n.createElement(t.p,null,"And for ",n.createElement(t.code,null,"object-fit: fill")," it's easy to see shows how it's been stretched out by the broweser. TAll images are sized to width:100% and height 100% of it's container (aspect ration 16/9) but the object-fit property has significant effects on how it's presented!"),"\n",n.createElement(t.p,null,"Here is the html for the last row:"),"\n",n.createElement(r.c,{title:"HTML"},n.createElement(t.pre,null,n.createElement(t.code,{className:"language-HTML"},'\x3c!-- the <img> tags recieve the object-fit classes: --\x3e\r\n<div class="row gap-lg max-mob:max-h-16 max-h-16 lg:max-h-24">\r\n  <div class="col-6">\r\n    <figure>\r\n      <div class="border-lg border-dashed bg-background-dkr ratio-16/9">\r\n        <img class="w-full h-full object-none"\r\n          src="static/cat-resized-2ec747eea85cbd774bc0c06734ec57d8.png"\r\n          alt="Cat" />\r\n      </div>\r\n      <figcaption>\r\n        <p class="text-lg py-md">object-fit: none</p>\r\n      </figcaption>\r\n    </figure>\r\n  </div>\r\n  <div class="col-6">\r\n    <figure>\r\n      <div class="border-lg border-dashed bg-background-dkr ratio-16/9">\r\n        <img\r\n          class="w-full h-full object-scale-down"\r\n          src="static/cat-resized-2ec747eea85cbd774bc0c06734ec57d8.png"\r\n          alt="Cat"\r\n        />\r\n      </div>\r\n      <figcaption>\r\n        <p class="text-lg py-md">object-fit: scale-down</p>\r\n      </figcaption>\r\n    </figure>\r\n  </div>\r\n</div>\n'))),"\n",n.createElement(t.p,null,"And yes these classes are responsive too. As just an example, here's the image changing it's object-fit in response to various screen widths. If you're on a browser you can resize the screen (might have to close the sidebar on small widths):"),"\n",n.createElement("div",{className:"mb-xl center h-20"},n.createElement("figure",null,n.createElement("div",{className:"border-lg border-dashed bg-background-dkr ratio-16/9"},n.createElement("img",{className:"w-full h-full \r\nlg:object-fill\r\nscr:object-cover\r\ntab:object-contain\r\nobject-none\r\n",src:catImg,alt:"Cat"})),n.createElement("figcaption",null,n.createElement(c.gZ,{className:"align-center text-lg display-none radius-md lg:display-block",text:"Break Point: lg Object-fit: fill (default)"}),n.createElement(c.gZ,{className:"align-center text-lg display-none scr:display-block lg:display-none",text:"Break Point: scr Object-fit: cover"}),n.createElement(c.gZ,{className:"align-center text-lg display-none tab:display-block scr:display-none",text:"Break Point: tab  ( < 768px ) Object-fit: contain;"}),n.createElement(c.gZ,{className:"align-center text-lg display-block tab:display-none",text:"Break Point: max-mob ( < 640px ) Object-fit: none;"})))),"\n",n.createElement(t.p,null,"And here's the HTML:"),"\n",n.createElement(r.c,{title:"HTML"},n.createElement(t.pre,null,n.createElement(t.code,{className:"language-HTML"},'<div class="mb-xl center h-20">\r\n  <figure>\r\n    <div class="border-lg border-dashed bg-background-dkr ratio-16/9">\r\n      <img\r\n        class="w-full h-full\r\n          lg:object-fill\r\n          scr:object-cover\r\n          tab:object-contain\r\n          object-none"\r\n        src="static/cat-resized-2ec747eea85cbd774bc0c06734ec57d8.png"\r\n        alt="Cat" />\r\n    </div>\r\n\r\n    <figcaption>\r\n      \x3c!-- caption text here --\x3e\r\n    </figcaption>\r\n  </figure>\r\n</div>\n'))),"\n",n.createElement(t.p,null,"So that wraps it for Object-fit. Happy Coding!"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,l.MN)(),e.components);return t?n.createElement(t,e,n.createElement(o,e)):o(e)},m=(a(4056),a(896)),d=a(2496);const u=e=>{let{location:t,data:{mdx:a},children:l}=e;const{pathname:c}=t;return c.includes("/page/")?n.createElement(n.Fragment,null,l):n.createElement(m.c,{onSideBarPage:!0},n.createElement(d.c,{pathname:c},n.createElement("main",null,l)))};function g(e){return n.createElement(u,e,n.createElement(i,e))}},2496:function(e,t,a){a.d(t,{c:function(){return f}});var l=a(1504),n=a(8632),c=a(8764),r=a(4056),s=a(5184);var o=(0,l.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:a,to:n}=e;const c=(0,s.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:d,setHasScrolled:u}=(0,l.useContext)(o),{0:g,1:h}=(0,l.useState)(!1),{pathname:f}=c;return(0,l.useEffect)((()=>{h(i=="/simple-scss-utilities-docs"+a+" "+n)}),[i]),l.createElement("p",{className:(g?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+a+"/"==f){document.getElementById(n).scrollIntoView({behavior:"smooth"}),u(!1),m("/simple-scss-utilities-docs"+a+" "+n)}else(0,r.navigate)(a+"?anchor="+n)}},t)},m=a(3616),d=a(792),u=a(5896),g=a(7264);var h=e=>{let{sidebarData:t}=e;const{setActiveAnchor:a,hasScrolled:n}=(0,l.useContext)(o),{sidebarOpen:h,setSidebarOpen:f}=(0,l.useContext)(m.c),{0:b,1:p}=(0,l.useState)([]),{0:E,1:x}=(0,l.useState)(!1),{0:v,1:N}=(0,l.useState)([]),{0:k,1:w}=(0,l.useState)(!1),{0:y,1:j}=(0,l.useState)(!1),{width:S}=(0,g.c)(),C=(0,s.useLocation)(),{pathname:A}=C;if((0,l.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,a)=>{const l=[];e.forEach(((e,t)=>{const a=e.target.href.split("#")[1],n=A.slice(0,-1)+" "+a;e.isIntersecting?l.push({anchorString:n,inView:!0,offsetTop:e.target.offsetTop}):l.push({anchorString:n,inView:!1,offsetTop:e.target.offsetTop})})),N(l)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,l.useEffect)((()=>{v.length&&!E&&(p(v),x(!0))}),[v,E]),(0,l.useEffect)((()=>{if(E&&v.length){let e=(0,c.c)(b);if(v.forEach((t=>{const a=b.findIndex((e=>t.anchorString==e.anchorString));a>=0&&e.splice(a,1,t)})),p(e),N([]),n){let t=Number.POSITIVE_INFINITY,l=-1;if(e.forEach(((e,a)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,l=a)})),l>=0){const t=e[l];a(t.anchorString)}else a("")}}}),[b,v,E,n]),(0,l.useEffect)((()=>{if(C.search&&!k){const e=new URLSearchParams(C.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const l=A.slice(0,-1);a(l+" "+e)}}w(!0)}else if(E&&!k){let e=b[0];e.inView&&a(e.anchorString),w(!0)}}),[E,b,k]),(0,l.useEffect)((()=>{j(S>768)}),[S]),(0,l.useEffect)((()=>{f(!0)}),[y]),!t)return l.createElement(l.Fragment,null,"No sidebar data for path "+A);const{path:z,nodes:I}=t,L=[],O=[],T={};I.forEach((e=>{const{frontmatter:{category:t,title:a,slug:l,order:n,isCategoryRoot:c,anchorLinks:r}}=e;if(t)T[t]||(T[t]=[]),c?O.push({title:a,categoryName:t,isCategoryRoot:!0,path:"/"+z+"/"+l,sublinks:null,order:n,anchorLinks:r}):T[t].push({title:a,path:"/"+z+"/"+l,order:n,anchorLinks:r});else{const e="index"===l?"/"+z:"/"+z+"/"+l;L.push({title:a,path:e,sublinks:null,order:n,anchorLinks:r})}})),O.forEach((e=>{const t=e.categoryName;e.sublinks=T[t]})),L.sort(((e,t)=>e.order-t.order)),O.sort(((e,t)=>e.order-t.order)),O.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const H=[].concat(L,O);return l.createElement(l.Fragment,null,l.createElement("div",{className:"w-0"},l.createElement("div",{onClick:()=>f(!0),className:(h?"display-none":"display-flex")+" text-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-magenta-lg hover:shadow-blue-lg bg-background-ltr items-center justify-center bg-background z-5 text-magenta hover:text-blue"},l.createElement(d.u,{icon:u.mIU}))),l.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(h?"":"display-none")},l.createElement("nav",{className:"p-md"},l.createElement("span",{className:(y?"display-none":"")+" "},l.createElement(d.u,{className:"cursor-pointer hover:text-magenta text-magenta hover:text-blue text-lg py-sm",onClick:()=>f(!1),icon:u.kvG})),l.createElement("ul",{className:"display-flex flex-col line-height-lg"},H.map((e=>{const{isCategoryRoot:t,categoryName:a,path:n,title:c,sublinks:s,anchorLinks:o}=e;if(t){const e=c.charAt(0).toUpperCase()+c.slice(1),t="/simple-scss-utilities-docs"+n+"/"===A;return l.createElement("li",{key:n+" "+c},l.createElement("span",{className:(t?"text-magenta":"")+" font-large hover:text-magenta "},l.createElement(r.Link,{to:n},e)),o&&l.createElement("ul",{className:"line-height-md "},o.map(((e,t)=>{const{title:a,link:c}=e;return l.createElement("li",{key:a+" "+c,className:"pl-md text-md "+(t==o.length-1?"mb-xs":"")+" "},l.createElement(i,{path:n,to:c},a))}))),s&&l.createElement("ul",null,s.map(((e,t)=>{const{title:a,path:n,anchorLinks:c}=e,o="/simple-scss-utilities-docs"+n+"/"===A;return l.createElement("li",{key:a+" "+n,className:"pl-md font-normal   "+(t==s.length-1?"mb-xs":"")},l.createElement("span",{className:(o?"text-magenta":"")+" font-bold hover:text-magenta"},l.createElement(r.Link,{to:n},a)),c&&l.createElement("ul",{className:"line-height-md "},c.map((e=>{const{title:t,link:a}=e;return l.createElement("li",{key:t+" "+a,className:"pl-md text-md hover:text-magenta"},l.createElement(i,{path:n,to:a},t))}))))}))))}c.charAt(0).toUpperCase(),c.slice(1);const m="/simple-scss-utilities-docs"+n+"/"===A;return l.createElement("li",{key:n+" "+c},l.createElement("span",{className:(m?"text-magenta":"")+" font-large hover:text-magenta"},l.createElement(r.Link,{to:n},c)))}))))))};var f=e=>{let{pathname:t,children:a}=e;const{sidebarOpen:c,setSidebarOpen:s}=(0,l.useContext)(m.c),{0:i,1:d}=(0,l.useState)(!1),{0:u,1:g}=(0,l.useState)(""),{docs:f,components:b,customize:p}=(0,r.useStaticQuery)("2241216091");let E;return t.startsWith("/simple-scss-utilities-docs/docs")?E={path:"docs",...f}:t.startsWith("/simple-scss-utilities-docs/customize")&&(E={path:"customize",...p}),l.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},l.createElement(o.Provider,{value:{activeAnchor:u,setActiveAnchor:g,hasScrolled:i,setHasScrolled:d}},l.createElement(h,{sidebarData:E}),l.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{d(!0)},onTouchStart:()=>{d(!0)}},l.createElement("div",{id:"small-width-overlay",className:"display-none "+(c?"max-tab:display-block":"")+" position-fixed top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),l.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg w-19/20 max-w-container lg:mx-auto   "+(c?"max-tab:filter-blur-md":"")},a),l.createElement(n.c,null))))}},2528:function(e,t,a){var l=a(1504);t.c=e=>{let{children:t,title:a,isFile:n}=e;return l.createElement("div",{className:"mt-lg mb-2xl mr-2"},l.createElement("h6",{className:"font-large text-lg position-relative left-1px mb-xs"},n?"File: ":"",a),l.createElement("div",{className:"mr-md"},t))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-responsive-examples-object-fit-mdx-8b9dc47a69d48a780094.js.map