"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[6560],{8049:function(e,t,l){l.r(t),l.d(t,{default:function(){return p}});var n=l(4552),a=l(1504),r=l(9360),o=l(2528);function c(e){const t=Object.assign({h1:"h1",h4:"h4",p:"p",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",h3:"h3",pre:"pre",code:"code",h2:"h2"},(0,n.MN)(),e.components);return a.createElement(a.Fragment,null,a.createElement(t.h1,null,"Position"),"\n",a.createElement(t.h4,null,"How to use"),"\n",a.createElement(t.p,null,"The position utility classes are:"),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"left"},"Class"),a.createElement(t.th,{align:"left"},"CSS rule"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"position-relative"),a.createElement(t.td,{align:"left"},"position: relative;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"position-absolute"),a.createElement(t.td,{align:"left"},"position: absolute;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"position-fixed"),a.createElement(t.td,{align:"left"},"position: fixed;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"position-static"),a.createElement(t.td,{align:"left"},"position: static;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"position-sticky"),a.createElement(t.td,{align:"left"},"position: sticky;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"position-inherit"),a.createElement(t.td,{align:"left"},"position: inherit;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"position-initial"),a.createElement(t.td,{align:"left"},"position: initial;")))),"\n",a.createElement(t.p,null,"These are all responsive, as well as the top, bottom, left, and right classes, and they take the same prefixes as all the other responsive classes. Here's a quick example of a div that changes it's position depending on the default breakpoint."),"\n",a.createElement(t.h3,null,"Example"),"\n",a.createElement(t.p,null,"If you're on a browser, change the screen width to see the blue block go from initial to relative to absolute on tab size or smaller (you'll have to close the sidebar)."),"\n",a.createElement("div",{className:"center flex-col p-lg m-lg mb-xl"},a.createElement("div",{className:"border-sm radius-md w-24 h-12 mb-md p-2xl sizing-border position-relative"},a.createElement("div",{className:"w-8 h-8 bg-blue radius-md right-2xl bottom-2xl lg:position-initial scr:position-relative max-tab:position-absolute"})),a.createElement(r.gZ,{className:"text-md display-none radius-md lg:display-block",text:"Break Point: lg Position: initial (static)"}),a.createElement(r.gZ,{className:"text-md display-none radius-md lg:display-block",text:"The large padding on the parent container has the block away from the sides."}),a.createElement(r.gZ,{className:"text-md display-none scr:display-block lg:display-none",text:"Break Point: scr Position: relative"}),a.createElement(r.gZ,{className:"text-md display-none scr:display-block lg:display-none",text:"At this break point the relative position moves the box to the upper left corner"}),a.createElement(r.gZ,{className:"text-md tab:display-block scr:display-none",text:"Break Point: tab or smaller ( < 768px ) Position: absolute"}),a.createElement(r.gZ,{className:"text-md tab:display-block scr:display-none",text:"At this break point, the absolute position moves the block to the right hand side of the container"})),"\n",a.createElement(t.p,null,"Here is the code for the blue box and the container:"),"\n",a.createElement(o.c,{title:"HTML"},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-HTML"},'<div class="border-sm radius-md w-24 h-12 mb-md p-2xl sizing-border position-relative">\r\n  <div class="w-8 h-8 bg-blue radius-md\r\n    right-2xl bottom-2xl\r\n    lg:position-initial\r\n    scr:position-relative\r\n    max-tab:position-absolute" />\r\n</div>\n'))),"\n",a.createElement(t.h2,null,"Top Left Right and Bottom"),"\n",a.createElement(t.p,null,"So now that we've seen what the position classes are, what about the values for top, right left and bottmm?"),"\n",a.createElement(t.p,null,"Well I don't know what you want to position, so I included as many values as I could! These get all the values that width and height get, plus a couple more for nudging a few pixels which I do sometimes, like for example, an icon's size or something makes it look out of place and just needs to be nudged, for example."),"\n",a.createElement(t.p,null,"Top classes are prefixed with ",a.createElement(t.code,null,"top-"),", left with ",a.createElement(t.code,null,"left-"),", right with ",a.createElement(t.code,null,"right-")," and bottom with ",a.createElement(t.code,null,"bottom-"),". Not that complicated! But there are a lot of classes. Here are the classes for ",a.createElement(t.code,null,"top"),", for example:"),"\n",a.createElement(t.table,null,a.createElement(t.thead,null,a.createElement(t.tr,null,a.createElement(t.th,{align:"left"},"Class"),a.createElement(t.th,{align:"left"},"CSS rule"))),a.createElement(t.tbody,null,a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-0"),a.createElement(t.td,{align:"left"},"top: 0;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-fuil"),a.createElement(t.td,{align:"left"},"top: 100%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-1px"),a.createElement(t.td,{align:"left"},"top: 1px;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-2px"),a.createElement(t.td,{align:"left"},"top: 2px;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-3px"),a.createElement(t.td,{align:"left"},"top: 3px;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-xxs"),a.createElement(t.td,{align:"left"},"top: 0.125rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-xs"),a.createElement(t.td,{align:"left"},"top: 0.25rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-sm"),a.createElement(t.td,{align:"left"},"top: 0.5rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-md"),a.createElement(t.td,{align:"left"},"top: 0.75rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-base"),a.createElement(t.td,{align:"left"},"top: 1rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-lg"),a.createElement(t.td,{align:"left"},"top: 1.25rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-xl"),a.createElement(t.td,{align:"left"},"top: 1.5rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-2xl"),a.createElement(t.td,{align:"left"},"top: 2rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-3xl"),a.createElement(t.td,{align:"left"},"top: 3rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-4xl"),a.createElement(t.td,{align:"left"},"top: 4rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-5xl"),a.createElement(t.td,{align:"left"},"top: 5rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-1"),a.createElement(t.td,{align:"left"},"top: 1rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-2"),a.createElement(t.td,{align:"left"},"top: 2rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-3"),a.createElement(t.td,{align:"left"},"top: 3rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-4"),a.createElement(t.td,{align:"left"},"top: 4rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-5"),a.createElement(t.td,{align:"left"},"top: 5rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-6"),a.createElement(t.td,{align:"left"},"top: 6rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-7"),a.createElement(t.td,{align:"left"},"top: 7rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-8"),a.createElement(t.td,{align:"left"},"top: 8rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-10"),a.createElement(t.td,{align:"left"},"top: 10rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-12"),a.createElement(t.td,{align:"left"},"top: 12rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-16"),a.createElement(t.td,{align:"left"},"top: 16rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-20"),a.createElement(t.td,{align:"left"},"top: 20rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-24"),a.createElement(t.td,{align:"left"},"top: 24rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-30"),a.createElement(t.td,{align:"left"},"top: 30rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-36"),a.createElement(t.td,{align:"left"},"top: 36rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-42"),a.createElement(t.td,{align:"left"},"top: 42rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-48"),a.createElement(t.td,{align:"left"},"top: 48rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-56"),a.createElement(t.td,{align:"left"},"top: 56rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-64"),a.createElement(t.td,{align:"left"},"top: 64rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-72"),a.createElement(t.td,{align:"left"},"top: 72rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-80"),a.createElement(t.td,{align:"left"},"top: 80rem;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-1/2"),a.createElement(t.td,{align:"left"},"top: 50%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-1/3"),a.createElement(t.td,{align:"left"},"top: 33.3%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-2/3"),a.createElement(t.td,{align:"left"},"top: 66.6%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-1/4"),a.createElement(t.td,{align:"left"},"top: 25%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-3/4"),a.createElement(t.td,{align:"left"},"top: 75%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-1/5"),a.createElement(t.td,{align:"left"},"top: 20%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-2/5"),a.createElement(t.td,{align:"left"},"top: 40%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-4/5"),a.createElement(t.td,{align:"left"},"top: 80%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-1/10"),a.createElement(t.td,{align:"left"},"top: 10%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-3/10"),a.createElement(t.td,{align:"left"},"top: 30%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-7/10"),a.createElement(t.td,{align:"left"},"top: 70%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-9/10"),a.createElement(t.td,{align:"left"},"top: 90%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-1/20"),a.createElement(t.td,{align:"left"},"top: 5%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-3/20"),a.createElement(t.td,{align:"left"},"top: 15%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-7/20"),a.createElement(t.td,{align:"left"},"top: 35%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-9/20"),a.createElement(t.td,{align:"left"},"top: 45%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-11/20"),a.createElement(t.td,{align:"left"},"top: 55%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-13/20"),a.createElement(t.td,{align:"left"},"top: 65%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-17/20"),a.createElement(t.td,{align:"left"},"top: 85%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-19/20"),a.createElement(t.td,{align:"left"},"top: 95%;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-1/4-screen"),a.createElement(t.td,{align:"left"},"top: 25vw;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-1/3-screen"),a.createElement(t.td,{align:"left"},"top: 33vw;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-1/2-screen"),a.createElement(t.td,{align:"left"},"top: 50vw;")),a.createElement(t.tr,null,a.createElement(t.td,{align:"left"},"top-screen"),a.createElement(t.td,{align:"left"},"top: 100vw;")))),"\n",a.createElement(t.p,null,"These are all repeated for ",a.createElement(t.code,null,"left"),", ",a.createElement(t.code,null,"right")," and ",a.createElement(t.code,null,"bottom"),"."),"\n",a.createElement(t.h3,null,"Examples:"),"\n",a.createElement(t.p,null,"Here's 4 divs, absolutely positioned via top, left, right, and bottom:"),"\n",a.createElement("div",{className:"center flex-col py-lg m-lg mb-xl"},a.createElement("div",{className:"border-sm radius-md w-30 h-30 mb-md sizing-border position-relative bg-background-dkr"},a.createElement("div",{className:"bg-blue text-white w-10 h-10 center flex-col radius-md position-absolute top-0 left-0"},a.createElement("p",null,".position-absolute"),a.createElement("p",null,".top-0 .left-0")),a.createElement("div",{className:"bg-blue text-white w-10 h-10 center flex-col radius-md position-absolute top-0 right-0"},a.createElement("p",null,".position-absolute"),a.createElement("p",null,".top-0 .right-0")),a.createElement("div",{className:"bg-blue text-white w-10 h-10 center flex-col radius-md position-absolute bottom-0 left-0"},a.createElement("p",null,".position-absolute"),a.createElement("p",null,".bottom-0 .left-0")),a.createElement("div",{className:"bg-blue text-white w-10 h-10 center flex-col radius-md position-absolute bottom-0 right-0"},a.createElement("p",null,".position-absolute"),a.createElement("p",null,".bottom-0 .right-0")))),"\n",a.createElement(t.h3,null,"Responsive Example:"),"\n",a.createElement(t.p,null,"Here's a div changing it's position by breakpoint. LIke the above example, on smaller breakpoints you'll have to close the browser"),"\n",a.createElement("div",{className:"center flex-col py-lg m-lg mb-xl"},a.createElement("div",{className:"border-sm radius-md w-30 h-6 mb-md sizing-border position-relative bg-background-dkr"},a.createElement("div",{className:"w-1/4 h-6 bg-blue radius-md position-relative lg:left-3/4 scr:left-1/2 tab:left-1/4 left-0 text-white center flex-col"},a.createElement("p",null,"Block width:"),a.createElement("p",null,"1/4 container"))),a.createElement(r.gZ,{className:"text-md display-none radius-md lg:display-block",text:"Break Point: lg Position: left-3/4"})," ",a.createElement(r.gZ,{className:"text-md display-none scr:display-block lg:display-none",text:"Break Point: scr Postition left-1/2"}),a.createElement(r.gZ,{className:"text-md display-none tab:display-block scr:display-none",text:"Break Point: tab Postion left-1/4"}),a.createElement(r.gZ,{className:"text-md display-block tab:display-none",text:"Break Point: mob Postion left-0"})),"\n",a.createElement(t.p,null,"The code exmaple:"),"\n",a.createElement(o.c,{title:"HTML"},a.createElement(t.pre,null,a.createElement(t.code,{className:"language-HTML"},'<div class="border-sm radius-md w-30 h-6 mb-md sizing-border position-relative bg-background-dkr">\r\n  <div class="w-1/4 h-6 bg-blue radius-md text-white center flex-col\r\n      position-relative\r\n      left-0\r\n      lg:left-3/4\r\n      scr:left-1/2\r\n      tab:left-1/4">\r\n    <p>Block width:</p>\r\n    <p>1/4 container</p>\r\n  </div>\r\n</div>\n'))),"\n",a.createElement(t.p,null,"Happy Coding!"))}var i=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,n.MN)(),e.components);return t?a.createElement(t,e,a.createElement(c,e)):c(e)},m=(l(4056),l(896)),s=l(2496);const d=e=>{let{location:t,data:{mdx:l},children:n}=e;const{pathname:r}=t;return r.includes("/page/")?a.createElement(a.Fragment,null,n):a.createElement(m.c,{onSideBarPage:!0},a.createElement(s.c,{pathname:r},a.createElement("main",null,n)))};function p(e){return a.createElement(d,e,a.createElement(i,e))}},2496:function(e,t,l){l.d(t,{c:function(){return g}});var n=l(1504),a=l(8632),r=l(8764),o=l(4056),c=l(5184);var i=(0,n.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var m=e=>{let{children:t,path:l,to:a}=e;const r=(0,c.useLocation)(),{activeAnchor:m,setActiveAnchor:s,hasScrolled:d,setHasScrolled:p}=(0,n.useContext)(i),{0:E,1:u}=(0,n.useState)(!1),{pathname:g}=r;return(0,n.useEffect)((()=>{u(m=="/simple-scss-utilities-docs"+l+" "+a)}),[m]),n.createElement("p",{className:(E?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+l+"/"==g){document.getElementById(a).scrollIntoView({behavior:"smooth"}),p(!1),s("/simple-scss-utilities-docs"+l+" "+a)}else(0,o.navigate)(l+"?anchor="+a)}},t)},s=l(3616),d=l(792),p=l(5896),E=l(7264);var u=e=>{let{sidebarData:t}=e;const{setActiveAnchor:l,hasScrolled:a}=(0,n.useContext)(i),{sidebarOpen:u,setSidebarOpen:g}=(0,n.useContext)(s.c),{0:f,1:h}=(0,n.useState)([]),{0:b,1:x}=(0,n.useState)(!1),{0:v,1:k}=(0,n.useState)([]),{0:y,1:w}=(0,n.useState)(!1),{0:N,1:S}=(0,n.useState)(!1),{width:T}=(0,E.c)(),C=(0,c.useLocation)(),{pathname:I}=C;if((0,n.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,l)=>{const n=[];e.forEach(((e,t)=>{const l=e.target.href.split("#")[1],a=I.slice(0,-1)+" "+l;e.isIntersecting?n.push({anchorString:a,inView:!0,offsetTop:e.target.offsetTop}):n.push({anchorString:a,inView:!1,offsetTop:e.target.offsetTop})})),k(n)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,n.useEffect)((()=>{v.length&&!b&&(h(v),x(!0))}),[v,b]),(0,n.useEffect)((()=>{if(b&&v.length){let e=(0,r.c)(f);if(v.forEach((t=>{const l=f.findIndex((e=>t.anchorString==e.anchorString));l>=0&&e.splice(l,1,t)})),h(e),k([]),a){let t=Number.POSITIVE_INFINITY,n=-1;if(e.forEach(((e,l)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,n=l)})),n>=0){const t=e[n];l(t.anchorString)}else l("")}}}),[f,v,b,a]),(0,n.useEffect)((()=>{if(C.search&&!y){const e=new URLSearchParams(C.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const n=I.slice(0,-1);l(n+" "+e)}}w(!0)}else if(b&&!y){let e=f[0];e.inView&&l(e.anchorString),w(!0)}}),[b,f,y]),(0,n.useEffect)((()=>{S(T>768)}),[T]),(0,n.useEffect)((()=>{g(!0)}),[N]),!t)return n.createElement(n.Fragment,null,"No sidebar data for path "+I);const{path:P,nodes:L}=t,A=[],B=[],H={};L.forEach((e=>{const{frontmatter:{category:t,title:l,slug:n,order:a,isCategoryRoot:r,anchorLinks:o}}=e;if(t)H[t]||(H[t]=[]),r?B.push({title:l,categoryName:t,isCategoryRoot:!0,path:"/"+P+"/"+n,sublinks:null,order:a,anchorLinks:o}):H[t].push({title:l,path:"/"+P+"/"+n,order:a,anchorLinks:o});else{const e="index"===n?"/"+P:"/"+P+"/"+n;A.push({title:l,path:e,sublinks:null,order:a,anchorLinks:o})}})),B.forEach((e=>{const t=e.categoryName;e.sublinks=H[t]})),A.sort(((e,t)=>e.order-t.order)),B.sort(((e,t)=>e.order-t.order)),B.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const z=[].concat(A,B);return n.createElement(n.Fragment,null,n.createElement("div",{className:"w-0"},n.createElement("div",{onClick:()=>g(!0),className:(u?"display-none":"display-flex")+" text-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-magenta-lg hover:shadow-blue-lg bg-background-ltr items-center justify-center bg-background z-5 text-magenta hover:text-blue"},n.createElement(d.u,{icon:p.mIU}))),n.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(u?"":"display-none")},n.createElement("nav",{className:"p-md"},n.createElement("span",{className:(N?"display-none":"")+" "},n.createElement(d.u,{className:"cursor-pointer hover:text-magenta text-magenta hover:text-blue text-lg py-sm",onClick:()=>g(!1),icon:p.kvG})),n.createElement("ul",{className:"display-flex flex-col line-height-lg"},z.map((e=>{const{isCategoryRoot:t,categoryName:l,path:a,title:r,sublinks:c,anchorLinks:i}=e;if(t){const e=r.charAt(0).toUpperCase()+r.slice(1),t="/simple-scss-utilities-docs"+a+"/"===I;return n.createElement("li",{key:a+" "+r},n.createElement("span",{className:(t?"text-magenta":"")+" font-large hover:text-magenta "},n.createElement(o.Link,{to:a},e)),i&&n.createElement("ul",{className:"line-height-md "},i.map(((e,t)=>{const{title:l,link:r}=e;return n.createElement("li",{key:l+" "+r,className:"pl-md text-md "+(t==i.length-1?"mb-xs":"")+" "},n.createElement(m,{path:a,to:r},l))}))),c&&n.createElement("ul",null,c.map(((e,t)=>{const{title:l,path:a,anchorLinks:r}=e,i="/simple-scss-utilities-docs"+a+"/"===I;return n.createElement("li",{key:l+" "+a,className:"pl-md font-normal   "+(t==c.length-1?"mb-xs":"")},n.createElement("span",{className:(i?"text-magenta":"")+" font-bold hover:text-magenta"},n.createElement(o.Link,{to:a},l)),r&&n.createElement("ul",{className:"line-height-md "},r.map((e=>{const{title:t,link:l}=e;return n.createElement("li",{key:t+" "+l,className:"pl-md text-md hover:text-magenta"},n.createElement(m,{path:a,to:l},t))}))))}))))}r.charAt(0).toUpperCase(),r.slice(1);const s="/simple-scss-utilities-docs"+a+"/"===I;return n.createElement("li",{key:a+" "+r},n.createElement("span",{className:(s?"text-magenta":"")+" font-large hover:text-magenta"},n.createElement(o.Link,{to:a},r)))}))))))};var g=e=>{let{pathname:t,children:l}=e;const{sidebarOpen:r,setSidebarOpen:c}=(0,n.useContext)(s.c),{0:m,1:d}=(0,n.useState)(!1),{0:p,1:E}=(0,n.useState)(""),{docs:g,components:f,customize:h}=(0,o.useStaticQuery)("2241216091");let b;return t.startsWith("/simple-scss-utilities-docs/docs")?b={path:"docs",...g}:t.startsWith("/simple-scss-utilities-docs/customize")&&(b={path:"customize",...h}),n.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},n.createElement(i.Provider,{value:{activeAnchor:p,setActiveAnchor:E,hasScrolled:m,setHasScrolled:d}},n.createElement(u,{sidebarData:b}),n.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{d(!0)},onTouchStart:()=>{d(!0)}},n.createElement("div",{id:"small-width-overlay",className:"display-none "+(r?"max-tab:display-block":"")+" position-fixed top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),n.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg w-19/20 max-w-container lg:mx-auto   "+(r?"max-tab:filter-blur-md":"")},l),n.createElement(a.c,null))))}},2528:function(e,t,l){var n=l(1504);t.c=e=>{let{children:t,title:l,isFile:a}=e;return n.createElement("div",{className:"mt-lg mb-2xl mr-2"},n.createElement("h6",{className:"font-large text-lg position-relative left-1px mb-xs"},a?"File: ":"",l),n.createElement("div",{className:"mr-md"},t))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-responsive-examples-position-mdx-9a9ad8e739be704af5d5.js.map