"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[408],{930:function(e,t,l){l.r(t),l.d(t,{default:function(){return d}});var n=l(4552),a=l(1504),s=l(9360),c=l(2528);function i(e){const t=Object.assign({h1:"h1",h4:"h4",p:"p",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",a:"a",pre:"pre",code:"code",h3:"h3"},(0,n.MN)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Outline"),"\n",a.createElement(t.h4,null,"How to use"),"\n",a.createElement(t.p,null,"Outline Width gets pretty much the same values as border, but there's no direction, making this section shorter to document. Hey, less work for me! But outline also has a property called offset, so let's handle that here as well"),"\n",a.createElement(t.h2,null,"Classes"),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"left"},"Class"),a.createElement(t.th,{align:"left"},"CSS rule"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-0"),a.createElement(t.td,{align:"left"},"outline-width: 0px;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-sm"),a.createElement(t.td,{align:"left"},"outline-width: 1px;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-md"),a.createElement(t.td,{align:"left"},"outline-width: 3px;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-lg"),a.createElement(t.td,{align:"left"},"outline-width: 5px;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-xl"),a.createElement(t.td,{align:"left"},"outline-width: 7px;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-2xl"),a.createElement(t.td,{align:"left"},"outline-width: 11px;")))),"\n",a.createElement(t.p,null,"However, note that to be displayed, outlines have to ALSO have a style class:"),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"left"},"Class"),a.createElement(t.th,{align:"left"},"CSS rule"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-none"),a.createElement(t.td,{align:"left"},"outline-style: none;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-dotted"),a.createElement(t.td,{align:"left"},"outline-style: dotted;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-solid"),a.createElement(t.td,{align:"left"},"outline-style: solid;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-groove"),a.createElement(t.td,{align:"left"},"outline-style: groove;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-inset"),a.createElement(t.td,{align:"left"},"outline-style: inset;")))),"\n",a.createElement(t.h2,null,"Outline Offset Classes"),"\n",a.createElement(t.p,null,"And here's the values for outline offset:"),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"left"},"Class"),a.createElement(t.th,{align:"left"},"CSS rule"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-offset-0"),a.createElement(t.td,{align:"left"},"outline-offset: 0px;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-offset-sm"),a.createElement(t.td,{align:"left"},"outline-offset: 1px;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-offset-md"),a.createElement(t.td,{align:"left"},"outline-offset: 3px;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-offset-lg"),a.createElement(t.td,{align:"left"},"outline-offset: 5px;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-offset-xl"),a.createElement(t.td,{align:"left"},"outline-offset: 7px;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"outline-offset-2xl"),a.createElement(t.td,{align:"left"},"outline-offset: 11px;")))),"\n",a.createElement(t.p,null,"Let's get into some examples."),"\n",a.createElement(t.h2,null,"Examples"),"\n",a.createElement(t.p,null,"Here I'm mostly covering outline and offset size, but they can also be given ",a.createElement(t.a,{href:"/simple-scss-utilities-docs/docs/classes-with-colors/?anchor=outline-color"},"Color")," classes and ",a.createElement(t.a,{href:"/simple-scss-utilities-docs/docs/outline-styles"},"Styles")," Styles, these are covered in the linked sections in more depth, but I included some of these here. Note that the outlines arn't really inlcluded in the browser calculations on element sizes, something which I had forgot (you can see the outlines kind of encroaching on the margines in these examples:)"),"\n",a.createElement("div",{className:"row h-10 gap-md align-center"},a.createElement("div",{className:"col-2"},a.createElement("div",{className:"display-flex flex-col justify-center "},a.createElement("div",{className:"display-flex center"},a.createElement("div",{className:"w-3 h-3 bg-blue outline-solid outline-0"})),a.createElement("div",{className:"display-flex flex-col mt-sm"},a.createElement("p",null,".outline-solid"),a.createElement("p",null,".outline-0")))),a.createElement("div",{className:"col-2"},a.createElement("div",{className:"display-flex flex-col justify-center "},a.createElement("div",{className:"display-flex center"},a.createElement("div",{className:"w-3 h-3 bg-blue outline-solid outline-sm"})),a.createElement("div",{className:"display-flex flex-col mt-sm"},a.createElement("p",null,".outline-solid"),a.createElement("p",null,".outline-sm")))),a.createElement("div",{className:"col-2"},a.createElement("div",{className:"display-flex flex-col justify-center "},a.createElement("div",{className:"display-flex center"},a.createElement("div",{className:"w-3 h-3 bg-blue outline-solid outline-med"})),a.createElement("div",{className:"display-flex flex-col mt-sm"},a.createElement("p",null,".outline-solid"),a.createElement("p",null,".outline-med")))),a.createElement("div",{className:"col-2"},a.createElement("div",{className:"display-flex flex-col justify-center "},a.createElement("div",{className:"display-flex center"},a.createElement("div",{className:"w-3 h-3 bg-blue outline-solid outline-lg"})),a.createElement("div",{className:"display-flex flex-col mt-sm"},a.createElement("p",null,".outline-solid"),a.createElement("p",null,".outline-lg")))),a.createElement("div",{className:"col-2"},a.createElement("div",{className:"display-flex flex-col justify-center "},a.createElement("div",{className:"display-flex center"},a.createElement("div",{className:"w-3 h-3 bg-blue outline-solid outline-xl"})),a.createElement("div",{className:"display-flex flex-col mt-sm"},a.createElement("p",null,".outline-solid"),a.createElement("p",null,".outline-xl")))),a.createElement("div",{className:"col-2"},a.createElement("div",{className:"display-flex flex-col justify-center "},a.createElement("div",{className:"display-flex center"},a.createElement("div",{className:"w-3 h-3 bg-blue outline-solid outline-2xl"})),a.createElement("div",{className:"display-flex flex-col mt-sm"},a.createElement("p",null,".outline-solid"),a.createElement("p",null,".outline-2xl"))))),"\n",a.createElement("div",{className:"row h-16 gap-md align-center"},a.createElement("div",{className:"col-2"},a.createElement("div",{className:"display-flex flex-col justify-center "},a.createElement("div",{className:"display-flex center"},a.createElement("div",{className:"w-3 h-3 bg-blue outline-solid outline-offset-md outline-sm"})),a.createElement("div",{className:"display-flex flex-col mt-sm"},a.createElement("p",null,".outline-solid"),a.createElement("p",null,".outline-offset-md"),a.createElement("p",null,".outline-sm")))),a.createElement("div",{className:"col-2"},a.createElement("div",{className:"display-flex flex-col justify-center "},a.createElement("div",{className:"display-flex center"},a.createElement("div",{className:"w-3 h-3 bg-blue outline-solid outline-offset-lg outline-lg radius-full"})),a.createElement("div",{className:"display-flex flex-col mt-sm"},a.createElement("p",null,".outline-solid"),a.createElement("p",null,".outline-offset-lg"),a.createElement("p",null,".outline-lg"),a.createElement("p",null,".radius-full")))),a.createElement("div",{className:"col-2"},a.createElement("div",{className:"display-flex flex-col justify-center "},a.createElement("div",{className:"display-flex center"},a.createElement("div",{className:"w-3 h-3 bg-blue outline-solid outline-magenta outline-lg outline-offset-lg"})),a.createElement("div",{className:"display-flex flex-col mt-sm"},a.createElement("p",null,".outline-solid"),a.createElement("p",null,".outline-lg"),a.createElement("p",null,".outline-magenta"),a.createElement("p",null,".outline-offset-lg")))),a.createElement("div",{className:"col-2"},a.createElement("div",{className:"display-flex flex-col justify-center "},a.createElement("div",{className:"display-flex center"},a.createElement("div",{className:"w-3 h-3 bg-blue outline-dotted outline-blue outline-lg outline-offset-lg radius-full"})),a.createElement("div",{className:"display-flex flex-col mt-sm"},a.createElement("p",null,".outline-dotted"),a.createElement("p",null,".outline-lg"),a.createElement("p",null,".outline-blue"),a.createElement("p",null,".radius-full"),a.createElement("p",null,".outline-offset-lg")))),a.createElement("div",{className:"col-2"},a.createElement("div",{className:"display-flex flex-col justify-center "},a.createElement("div",{className:"display-flex center"},a.createElement("div",{className:"w-3 h-3 bg-blue outline-groove outline-red outline-2xl outline-offset-lg radius-md"})),a.createElement("div",{className:"display-flex flex-col mt-sm"},a.createElement("p",null,".outline-groove"),a.createElement("p",null,".outline-lg"),a.createElement("p",null,".outline-red"),a.createElement("p",null,".radius-md"),a.createElement("p",null,".outline-offset-lg")))),a.createElement("div",{className:"col-2"},a.createElement("div",{className:"display-flex flex-col justify-center "},a.createElement("div",{className:"display-flex center"},a.createElement("div",{className:"w-3 h-3 bg-blue outline-inset outline-green outline-2xl outline-offset-lg radius-md"})),a.createElement("div",{className:"display-flex flex-col mt-sm"},a.createElement("p",null,".outline-inset"),a.createElement("p",null,".outline-lg"),a.createElement("p",null,".outline-green"),a.createElement("p",null,".radius-md"),a.createElement("p",null,".outline-offset-lg"))))),"\n",a.createElement(t.p,null,"In case you're wondering what the full html looks like, here's the markup for the last example:"),"\n",a.createElement(c.c,{title:"HTML"},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html"},'<div className="display-flex flex-col justify-center ">\r\n  <div className="display-flex center">\r\n    <div\r\n      className="w-3 h-3 bg-blue outline-inset outline-green outline-2xl outline-offset-lg radius-md"\r\n    ></div>\r\n  </div>\r\n  <div className="display-flex flex-col mt-sm">\r\n    <p>.outline-inset</p>\r\n    <p>.outline-lg</p>\r\n    <p>.outline-green</p>\r\n    <p>.radius-md</p>\r\n    <p>.outline-offset-lg</p>\r\n  </div>\r\n</div>\n'))),"\n",a.createElement(t.h3,null,"Responsive Examples"),"\n",a.createElement(t.p,null,"Let's move onto some responsive examples. I made only things that have to do with size really get the responsive treatment, if you need responsive outline colors or colors, that's a good opportuity for some custom scss. Both outline offset and size can respond to screen widths, if you're on a browser go ahead and change the screen widths to see them respond (for small widths you'll have to close the sidebar):"),"\n",a.createElement("div",{className:"center m-lg mb-xl flex-col my-2xl"},a.createElement("div",{className:"w-5 h-5 bg-blue radius-md outline-solid outline-offset-md outline-md tab:outline-lg tab:outline-offset-lg scr:outline-xl scr:outline-offset-xl lg:outline-2xl lg:outline-offset-2xl mb-xl"}),a.createElement(s.gZ,{className:"display-none max-mob:display-block",text:".outline-md .outline-offset-md"}),a.createElement(s.gZ,{className:"display-none tab:display-block scr:display-none",text:".tab:outline-lg .tab:outline-offset-lg"}),a.createElement(s.gZ,{className:"display-none scr:display-block lg:display-none",text:".scr:outline-xl .scr:outline-offset-xl"}),a.createElement(s.gZ,{className:"display-none lg:display-block",text:".lg:outline-2xl .lg:outline-offset-2xl"})),"\n",a.createElement(t.p,null,"Here's the HTML:"),"\n",a.createElement(c.c,{title:"HTML"},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html"},'<div\r\n  class="w-5 h-5 bg-blue radius-md mb-xl\r\n    outline-solid outline-offset-md outline-md \r\n    tab:outline-lg tab:outline-offset-lg \r\n    scr:outline-xl scr:outline-offset-xl \r\n    lg:outline-2xl lg:outline-offset-2xl"\r\n/>\n'))),"\n",a.createElement(t.p,null,"And as one more example, here's a border with a ",a.createElement(t.code,null,".max-scr")," class, so the outline is ",a.createElement(t.code,null,"lg")," up to 1024px (the break point between ",a.createElement(t.code,null,"scr")," and ",a.createElement(t.code,null,"lg"),") and ",a.createElement(t.code,null,"2xl")," above that:"),"\n",a.createElement("div",{className:"center m-lg mb-xl flex-col my-xl"},a.createElement("div",{className:"w-5 h-5 bg-blue radius-md outline-solid outline-2xl max-scr:outline-lg mb-lg"}),a.createElement(s.gZ,{className:"display-none max-scr:display-block",text:".max-scr:outline-lg"}),a.createElement(s.gZ,{className:"display-none lg:display-block",text:".outline-2xl"})),"\n",a.createElement(c.c,{title:"HTML"},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-html"},'<div\r\n  class="w-5 h-5 bg-blue radius-md outline-solid outline-2xl max-scr:outline-lg mb-lg"\r\n/>\n'))),"\n",a.createElement(t.p,null,"Happy Coding!"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.MN)(),e.components);return t?a.createElement(t,e,a.createElement(i,e)):i(e)},r=(l(4056),l(896)),m=l(2496);const u=e=>{let{location:t,data:{mdx:l},children:n}=e;const{pathname:s}=t;return s.includes("/page/")?a.createElement(a.Fragment,null,n):a.createElement(r.c,{onSideBarPage:!0},a.createElement(m.c,{pathname:s},a.createElement("main",null,n)))};function d(e){return a.createElement(u,e,a.createElement(o,e))}},2496:function(e,t,l){l.d(t,{c:function(){return p}});var n=l(1504),a=l(8632),s=l(8764),c=l(4056),i=l(5184);var o=(0,n.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var r=e=>{let{children:t,path:l,to:a}=e;const s=(0,i.useLocation)(),{activeAnchor:r,setActiveAnchor:m,hasScrolled:u,setHasScrolled:d}=(0,n.useContext)(o),{0:f,1:E}=(0,n.useState)(!1),{pathname:p}=s;return(0,n.useEffect)((()=>{E(r=="/simple-scss-utilities-docs"+l+" "+a)}),[r]),n.createElement("p",{className:(f?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+l+"/"==p){document.getElementById(a).scrollIntoView({behavior:"smooth"}),d(!1),m("/simple-scss-utilities-docs"+l+" "+a)}else(0,c.navigate)(l+"?anchor="+a)}},t)},m=l(3616),u=l(792),d=l(5896),f=l(7264);var E=e=>{let{sidebarData:t}=e;const{setActiveAnchor:l,hasScrolled:a}=(0,n.useContext)(o),{sidebarOpen:E,setSidebarOpen:p}=(0,n.useContext)(m.c),{0:h,1:g}=(0,n.useState)([]),{0:x,1:v}=(0,n.useState)(!1),{0:y,1:b}=(0,n.useState)([]),{0:N,1:w}=(0,n.useState)(!1),{0:k,1:S}=(0,n.useState)(!1),{width:C}=(0,f.c)(),L=(0,i.useLocation)(),{pathname:I}=L;if((0,n.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,l)=>{const n=[];e.forEach(((e,t)=>{const l=e.target.href.split("#")[1],a=I.slice(0,-1)+" "+l;e.isIntersecting?n.push({anchorString:a,inView:!0,offsetTop:e.target.offsetTop}):n.push({anchorString:a,inView:!1,offsetTop:e.target.offsetTop})})),b(n)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,n.useEffect)((()=>{y.length&&!x&&(g(y),v(!0))}),[y,x]),(0,n.useEffect)((()=>{if(x&&y.length){let e=(0,s.c)(h);if(y.forEach((t=>{const l=h.findIndex((e=>t.anchorString==e.anchorString));l>=0&&e.splice(l,1,t)})),g(e),b([]),a){let t=Number.POSITIVE_INFINITY,n=-1;if(e.forEach(((e,l)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,n=l)})),n>=0){const t=e[n];l(t.anchorString)}else l("")}}}),[h,y,x,a]),(0,n.useEffect)((()=>{if(L.search&&!N){const e=new URLSearchParams(L.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const n=I.slice(0,-1);l(n+" "+e)}}w(!0)}else if(x&&!N){let e=h[0];e.inView&&l(e.anchorString),w(!0)}}),[x,h,N]),(0,n.useEffect)((()=>{S(C>768)}),[C]),(0,n.useEffect)((()=>{p(!0)}),[k]),!t)return n.createElement(n.Fragment,null,"No sidebar data for path "+I);const{path:A,nodes:j}=t,H=[],O=[],T={};j.forEach((e=>{const{frontmatter:{category:t,title:l,slug:n,order:a,isCategoryRoot:s,anchorLinks:c}}=e;if(t)T[t]||(T[t]=[]),s?O.push({title:l,categoryName:t,isCategoryRoot:!0,path:"/"+A+"/"+n,sublinks:null,order:a,anchorLinks:c}):T[t].push({title:l,path:"/"+A+"/"+n,order:a,anchorLinks:c});else{const e="index"===n?"/"+A:"/"+A+"/"+n;H.push({title:l,path:e,sublinks:null,order:a,anchorLinks:c})}})),O.forEach((e=>{const t=e.categoryName;e.sublinks=T[t]})),H.sort(((e,t)=>e.order-t.order)),O.sort(((e,t)=>e.order-t.order)),O.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const z=[].concat(H,O);return n.createElement(n.Fragment,null,n.createElement("div",{className:"w-0"},n.createElement("div",{onClick:()=>p(!0),className:(E?"display-none":"display-flex")+" text-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-magenta-lg hover:shadow-blue-lg bg-background-ltr items-center justify-center bg-background z-5 text-magenta hover:text-blue"},n.createElement(u.u,{icon:d.mIU}))),n.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(E?"":"display-none")},n.createElement("nav",{className:"p-md"},n.createElement("span",{className:(k?"display-none":"")+" "},n.createElement(u.u,{className:"cursor-pointer hover:text-magenta text-magenta hover:text-blue text-lg py-sm",onClick:()=>p(!1),icon:d.kvG})),n.createElement("ul",{className:"display-flex flex-col line-height-lg"},z.map((e=>{const{isCategoryRoot:t,categoryName:l,path:a,title:s,sublinks:i,anchorLinks:o}=e;if(t){const e=s.charAt(0).toUpperCase()+s.slice(1),t="/simple-scss-utilities-docs"+a+"/"===I;return n.createElement("li",{key:a+" "+s},n.createElement("span",{className:(t?"text-magenta":"")+" font-large hover:text-magenta "},n.createElement(c.Link,{to:a},e)),o&&n.createElement("ul",{className:"line-height-md "},o.map(((e,t)=>{const{title:l,link:s}=e;return n.createElement("li",{key:l+" "+s,className:"pl-md text-md "+(t==o.length-1?"mb-xs":"")+" "},n.createElement(r,{path:a,to:s},l))}))),i&&n.createElement("ul",null,i.map(((e,t)=>{const{title:l,path:a,anchorLinks:s}=e,o="/simple-scss-utilities-docs"+a+"/"===I;return n.createElement("li",{key:l+" "+a,className:"pl-md font-normal   "+(t==i.length-1?"mb-xs":"")},n.createElement("span",{className:(o?"text-magenta":"")+" font-bold hover:text-magenta"},n.createElement(c.Link,{to:a},l)),s&&n.createElement("ul",{className:"line-height-md "},s.map((e=>{const{title:t,link:l}=e;return n.createElement("li",{key:t+" "+l,className:"pl-md text-md hover:text-magenta"},n.createElement(r,{path:a,to:l},t))}))))}))))}s.charAt(0).toUpperCase(),s.slice(1);const m="/simple-scss-utilities-docs"+a+"/"===I;return n.createElement("li",{key:a+" "+s},n.createElement("span",{className:(m?"text-magenta":"")+" font-large hover:text-magenta"},n.createElement(c.Link,{to:a},s)))}))))))};var p=e=>{let{pathname:t,children:l}=e;const{sidebarOpen:s,setSidebarOpen:i}=(0,n.useContext)(m.c),{0:r,1:u}=(0,n.useState)(!1),{0:d,1:f}=(0,n.useState)(""),{docs:p,components:h,customize:g}=(0,c.useStaticQuery)("2241216091");let x;return t.startsWith("/simple-scss-utilities-docs/docs")?x={path:"docs",...p}:t.startsWith("/simple-scss-utilities-docs/customize")&&(x={path:"customize",...g}),n.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},n.createElement(o.Provider,{value:{activeAnchor:d,setActiveAnchor:f,hasScrolled:r,setHasScrolled:u}},n.createElement(E,{sidebarData:x}),n.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{u(!0)},onTouchStart:()=>{u(!0)}},n.createElement("div",{id:"small-width-overlay",className:"display-none "+(s?"max-tab:display-block":"")+" position-fixed top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),n.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg w-19/20 max-w-container lg:mx-auto   "+(s?"max-tab:filter-blur-md":"")},l),n.createElement(a.c,null))))}},2528:function(e,t,l){var n=l(1504);t.c=e=>{let{children:t,title:l,isFile:a}=e;return n.createElement("div",{className:"mt-lg mb-2xl mr-2"},n.createElement("h6",{className:"font-large text-lg position-relative left-1px mb-xs"},a?"File: ":"",l),n.createElement("div",{className:"mr-md"},t))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-responsive-examples-outline-mdx-e95a6acdda1f1a5e0224.js.map