"use strict";(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[872],{5368:function(e,t,l){l.r(t),l.d(t,{default:function(){return u}});var a=l(4552),n=l(1504),r=l(9360),c=l(2528);function s(e){const t=Object.assign({h1:"h1",h4:"h4",p:"p",code:"code",a:"a",h2:"h2",table:"table",thead:"thead",tr:"tr",th:"th",tbody:"tbody",td:"td",pre:"pre"},(0,a.MN)(),e.components);return n.createElement(n.Fragment,null,n.createElement(t.h1,null,"The Grid System"),"\n",n.createElement(t.h4,null,"How to Use the Grid"),"\n",n.createElement(t.p,null,"Not to be confused with CSS-grid, I personally perfer to do as much as I can with flexbox, but a col-based grid system is pretty simple to make and still comes in handy so one is included. I actually didn't includ css-grid in this framework, one because I never really use it much myself, but also because it doesn't really make sense to handle the complexity and unique use cases with a framework which to me seems more cumbersome than writing it yourself!"),"\n",n.createElement(t.p,null,"However, I do have a this greatly simplified col-based grid system, which I think is useful enough for a lot of use cases!"),"\n",n.createElement(t.p,null,"It's a pretty standard 12 column system and the column classes ",n.createElement(t.code,null,".col-1"),", ",n.createElement(t.code,null,".col-2"),", etc determine how many columns an element takes up in the container. The classes are definately made to be responsive, so if you're on a browser try changing the screen widths to see how elements react!"),"\n",n.createElement(t.p,null,"So to use these classes wrap them in a ",n.createElement(t.code,null,"row")," class, which pretty much applies a display flex, and there's ",n.createElement(t.code,null,"gap")," classes for column gaps which supplies padding to the direct children, as well as negitive margins to the row. Like everything else, the column gap values can be modified in ",n.createElement(t.code,null,"_varialbes.css")," (see ",n.createElement(t.a,{href:"/simple-scss-utilities-docs/customize/"},"Customize")," section for more details). Here's a listing of all the grid classes, and see below for a few examples:"),"\n",n.createElement(t.h2,null,"Class Definitions"),"\n",n.createElement(t.p,null,"(note: gap classes are applied to the children of the row)"),"\n",n.createElement(t.table,null,n.createElement(t.thead,null,n.createElement(t.tr,null,n.createElement(t.th,{align:"left"},"Class"),n.createElement(t.th,{align:"left"},"CSS rule"))),n.createElement(t.tbody,null,n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"row"),n.createElement(t.td,{align:"left"},"display: flex;",n.createElement("br"),"flex-flow: row wrap;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"gap-none"),n.createElement(t.td,{align:"left"},"padding: 0")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"gap-xs"),n.createElement(t.td,{align:"left"},"padding: .25rem")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"gap-sm"),n.createElement(t.td,{align:"left"},"padding: .5rem")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"gap-md"),n.createElement(t.td,{align:"left"},"padding: 1rem")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"gap-lg"),n.createElement(t.td,{align:"left"},"padding: 1.5rem")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"gap-xl"),n.createElement(t.td,{align:"left"},"padding: 2rem")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"gap-2xl"),n.createElement(t.td,{align:"left"},"padding: 3rem")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"col-1"),n.createElement(t.td,{align:"left"},"box-sizing: border-box;",n.createElement("br"),"flex-grow: 0;",n.createElement("br"),"width: 8.3333333333%;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"col-2"),n.createElement(t.td,{align:"left"},"box-sizing: border-box;",n.createElement("br"),"flex-grow: 0;",n.createElement("br"),"width: 16.6666666667%;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"col-3"),n.createElement(t.td,{align:"left"},"box-sizing: border-box;",n.createElement("br"),"flex-grow: 0;",n.createElement("br"),"width: 25%;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"col-4"),n.createElement(t.td,{align:"left"},"box-sizing: border-box;",n.createElement("br"),"flex-grow: 0;",n.createElement("br"),"width: 33.3333333333%;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"col-5"),n.createElement(t.td,{align:"left"},"box-sizing: border-box;",n.createElement("br"),"flex-grow: 0;",n.createElement("br"),"width: 41.6666666667%;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"col-6"),n.createElement(t.td,{align:"left"},"box-sizing: border-box;",n.createElement("br"),"flex-grow: 0;",n.createElement("br"),"width: 50%;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"col-7"),n.createElement(t.td,{align:"left"},"box-sizing: border-box;",n.createElement("br"),"flex-grow: 0;",n.createElement("br"),"width: 58.3333333333%;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"col-8"),n.createElement(t.td,{align:"left"},"box-sizing: border-box;",n.createElement("br"),"flex-grow: 0;",n.createElement("br"),"width: 66.6666666667%;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"col-9"),n.createElement(t.td,{align:"left"},"box-sizing: border-box;",n.createElement("br"),"flex-grow: 0;",n.createElement("br"),"width: 75%;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"col-10"),n.createElement(t.td,{align:"left"},"box-sizing: border-box;",n.createElement("br"),"flex-grow: 0;",n.createElement("br"),"width: 83.3333333333%;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"col-11"),n.createElement(t.td,{align:"left"},"box-sizing: border-box;",n.createElement("br"),"flex-grow: 0;",n.createElement("br"),"width: 91.6666666667%;")),n.createElement(t.tr,null,n.createElement(t.td,{align:"left"},"col-12"),n.createElement(t.td,{align:"left"},"box-sizing: border-box;",n.createElement("br"),"flex-grow: 0;",n.createElement("br"),"width: 100%;")))),"\n",n.createElement(t.h2,null,"Responsive Examples"),"\n",n.createElement(t.p,null,"Here is a simple example that's not responsive, but just fills the screen width."),"\n",n.createElement(t.p,null,'Medium gap, 4 cols (each column take up 3 "column slots" out of 12, making each a quarter width):'),"\n",n.createElement("div",{className:"row h-8 gap-md"},n.createElement("div",{className:"col-3  br-sm border-dotted"},n.createElement("div",{className:"bg-blue center h-full radius-md"},n.createElement(r.gZ,{className:"text-white",text:".col-3"}))),n.createElement("div",{className:"col-3 x br-sm border-dotted"},n.createElement("div",{className:"bg-blue center h-full radius-md"},n.createElement(r.gZ,{className:"text-white",text:".col-3"}))),n.createElement("div",{className:"col-3  br-sm border-dotted"},n.createElement("div",{className:"bg-blue center h-full radius-md"},n.createElement(r.gZ,{className:"text-white",text:".col-3"}))),n.createElement("div",{className:"col-3 "},n.createElement("div",{className:"bg-blue center h-full radius-md"},n.createElement(r.gZ,{className:"text-white",text:".col-3"})))),"\n",n.createElement(c.c,{title:"Html"},n.createElement(t.pre,null,n.createElement(t.code,{className:"language-html"},'\x3c!-- row container and gap --\x3e\r\n<div className="row h-8 gap-md">\r\n  \x3c!-- each child div is 3 container widths out of 12, or 1/4 width total --\x3e\r\n  <div className="col-3 br-sm border-dotted">\r\n    \x3c!-- the gap-md class on the row provides a consistant inner padding --\x3e\r\n    <div className="bg-blue center h-full radius-md">\r\n      <p className="text-white">col-3</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div className="col-3 br-sm border-dotted">\r\n    <div className="bg-blue center h-full radius-md">\r\n      <p className="text-white">col-3</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div className="col-3 br-sm border-dotted">\r\n    <div className="bg-blue center h-full radius-md">\r\n      <p className="text-white">col-3</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div className="col-3">\r\n    <div className="bg-blue center h-full radius-md">\r\n      <p className="text-white">col-3</p>\r\n    </div>\r\n  </div>\r\n</div>\n'))),"\n",n.createElement(t.p,null,'Now let\'s take a look at an example that changes from large screens to mobile according to the default breakpoints. If you change the screen width, you might have to get the sidebar out of the way on 768px or smaller (the default "tablet" or "tab" break point). The additional classes make it a bit more complitcated, but not too much more. Notice that in this case it\'s also best to switch the height classes to the inner grid items themselves.'),"\n",n.createElement("div",{className:"row gap-sm mb-xl"},n.createElement("div",{className:"h-8 col-12 lg:col-3 scr:col-6 scr:br-sm border-dotted"},n.createElement("div",{className:"bg-blue text-white center flex-col h-full radius-md"},n.createElement(r.gZ,{text:"col-12"}),n.createElement(r.gZ,{text:".lg:col-3"}),n.createElement(r.gZ,{text:".scr:col-6"}))),n.createElement("div",{className:"h-8 col-12 lg:col-3 scr:col-6 lg:br-sm border-dotted"},n.createElement("div",{className:"bg-blue text-white center flex-col  h-full radius-md"},n.createElement(r.gZ,{text:"col-12"}),n.createElement(r.gZ,{text:".lg:col-3"}),n.createElement(r.gZ,{text:".scr:col-6"}))),n.createElement("div",{className:"h-8 col-12 lg:col-3 scr:col-6 scr:br-sm border-dotted"},n.createElement("div",{className:"bg-blue text-white center flex-col  h-full radius-md"},n.createElement(r.gZ,{text:"col-12"}),n.createElement(r.gZ,{text:".lg:col-3"}),n.createElement(r.gZ,{text:".scr:col-6"}))),n.createElement("div",{className:"h-8 col-12 lg:col-3 scr:col-6"},n.createElement("div",{className:"bg-blue text-white center flex-col  h-full radius-md"},n.createElement(r.gZ,{text:"col-12"}),n.createElement(r.gZ,{text:".lg:col-3"}),n.createElement(r.gZ,{text:".scr:col-6"})))),"\n",n.createElement(t.p,null,"I switched the gap class to be a bit smaller and element has a default width of 12, but on screen sizes (denoted by the ",n.createElement(t.code,null,"scr:")," prefix) which by default is anything over 768px wide, the width becomes 6 for a 2 column layout, and on large sizes (denoted by the ",n.createElement(t.code,null,"lg:")," prefix), the width becomes 3 for a 4 column layout."),"\n",n.createElement(t.p,null,"Also, note that this is only one way of using the responsive classes. For more info on how they work see the ",n.createElement(t.a,{href:"/simple-scss-utilities-docs/responsive-classes/"},"Responsive")," section."),"\n",n.createElement(t.p,null,"And as a final note: the ",n.createElement(t.code,null,"center")," class has a display of flex built in, so all I need is a ",n.createElement(t.code,null,"flex-col")," class to get inner text paragraphs in a column, and the HTML is as follows."),"\n",n.createElement(c.c,{title:"Html"},n.createElement(t.pre,null,n.createElement(t.code,{className:"language-html"},'<div className="row gap-sm">\r\n  <div className="h-8 col-12 lg:col-3 scr:col-6 scr:br-sm border-dotted">\r\n    <div className="bg-blue text-white center flex-col h-full radius-md">\r\n      <p>.col-12</p>\r\n      <p>.scr:col-6</p>\r\n      <p>.lg:col-3</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div className="h-8 col-12 lg:col-3 scr:col-6 lg:br-sm border-dotted">\r\n    <div className="bg-blue text-white center flex-col h-full radius-md">\r\n      <p>.col-12</p>\r\n      <p>.scr:col-6</p>\r\n      <p>.lg:col-3</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div className="h-8 col-12 lg:col-3 scr:col-6 scr:br-sm border-dotted">\r\n    <div className="bg-blue text-white center flex-col h-full radius-md">\r\n      <p>.col-12</p>\r\n      <p>.scr:col-6</p>\r\n      <p>.lg:col-3</p>\r\n    </div>\r\n  </div>\r\n\r\n  <div className="h-8 col-12 lg:col-3 scr:col-6">\r\n    <div className="bg-blue text-white center flex-col h-full radius-md">\r\n      <p>.col-12</p>\r\n      <p>.scr:col-6</p>\r\n      <p>.lg:col-3</p>\r\n    </div>\r\n  </div>\r\n</div>\n'))),"\n",n.createElement(t.p,null,"Hopefully this shows how easy it is to add some basic columns to a layout with these utility classes!"))}var o=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.MN)(),e.components);return t?n.createElement(t,e,n.createElement(s,e)):s(e)},i=(l(4056),l(896)),m=l(2496);const d=e=>{let{location:t,data:{mdx:l},children:a}=e;const{pathname:r}=t;return r.includes("/page/")?n.createElement(n.Fragment,null,a):n.createElement(i.c,{onSideBarPage:!0},n.createElement(m.c,{pathname:r},n.createElement("main",null,a)))};function u(e){return n.createElement(d,e,n.createElement(o,e))}},2496:function(e,t,l){l.d(t,{c:function(){return E}});var a=l(1504),n=l(8632),r=l(8764),c=l(4056),s=l(5184);var o=(0,a.createContext)({hasScrolled:!1,setHasScrolled:()=>{},activeAnchor:"",setActiveAnchor:()=>{}});var i=e=>{let{children:t,path:l,to:n}=e;const r=(0,s.useLocation)(),{activeAnchor:i,setActiveAnchor:m,hasScrolled:d,setHasScrolled:u}=(0,a.useContext)(o),{0:h,1:g}=(0,a.useState)(!1),{pathname:E}=r;return(0,a.useEffect)((()=>{g(i=="/simple-scss-utilities-docs"+l+" "+n)}),[i]),a.createElement("p",{className:(h?"font-bold":"")+" cursor-pointer",onClick:()=>{if("/simple-scss-utilities-docs"+l+"/"==E){document.getElementById(n).scrollIntoView({behavior:"smooth"}),u(!1),m("/simple-scss-utilities-docs"+l+" "+n)}else(0,c.navigate)(l+"?anchor="+n)}},t)},m=l(3616),d=l(792),u=l(5896),h=l(7264);var g=e=>{let{sidebarData:t}=e;const{setActiveAnchor:l,hasScrolled:n}=(0,a.useContext)(o),{sidebarOpen:g,setSidebarOpen:E}=(0,a.useContext)(m.c),{0:p,1:f}=(0,a.useState)([]),{0:b,1:x}=(0,a.useState)(!1),{0:w,1:v}=(0,a.useState)([]),{0:N,1:y}=(0,a.useState)(!1),{0:k,1:S}=(0,a.useState)(!1),{width:I}=(0,h.c)(),z=(0,s.useLocation)(),{pathname:C}=z;if((0,a.useEffect)((()=>{const e=document.querySelectorAll(".anchor-link"),t=new window.IntersectionObserver(((e,t,l)=>{const a=[];e.forEach(((e,t)=>{const l=e.target.href.split("#")[1],n=C.slice(0,-1)+" "+l;e.isIntersecting?a.push({anchorString:n,inView:!0,offsetTop:e.target.offsetTop}):a.push({anchorString:n,inView:!1,offsetTop:e.target.offsetTop})})),v(a)}),{root:null,threshold:.5});e.forEach((e=>{t.observe(e)}))}),[]),(0,a.useEffect)((()=>{w.length&&!b&&(f(w),x(!0))}),[w,b]),(0,a.useEffect)((()=>{if(b&&w.length){let e=(0,r.c)(p);if(w.forEach((t=>{const l=p.findIndex((e=>t.anchorString==e.anchorString));l>=0&&e.splice(l,1,t)})),f(e),v([]),n){let t=Number.POSITIVE_INFINITY,a=-1;if(e.forEach(((e,l)=>{e.inView&&e.offsetTop<t&&(t=e.offsetTop,a=l)})),a>=0){const t=e[a];l(t.anchorString)}else l("")}}}),[p,w,b,n]),(0,a.useEffect)((()=>{if(z.search&&!N){const e=new URLSearchParams(z.search).get("anchor");if(e){const t=document.getElementById(e);if(t){t.scrollIntoView({behavior:"smooth"});const a=C.slice(0,-1);l(a+" "+e)}}y(!0)}else if(b&&!N){let e=p[0];e.inView&&l(e.anchorString),y(!0)}}),[b,p,N]),(0,a.useEffect)((()=>{S(I>768)}),[I]),(0,a.useEffect)((()=>{E(!0)}),[k]),!t)return a.createElement(a.Fragment,null,"No sidebar data for path "+C);const{path:A,nodes:Z}=t,L=[],T=[],H={};Z.forEach((e=>{const{frontmatter:{category:t,title:l,slug:a,order:n,isCategoryRoot:r,anchorLinks:c}}=e;if(t)H[t]||(H[t]=[]),r?T.push({title:l,categoryName:t,isCategoryRoot:!0,path:"/"+A+"/"+a,sublinks:null,order:n,anchorLinks:c}):H[t].push({title:l,path:"/"+A+"/"+a,order:n,anchorLinks:c});else{const e="index"===a?"/"+A:"/"+A+"/"+a;L.push({title:l,path:e,sublinks:null,order:n,anchorLinks:c})}})),T.forEach((e=>{const t=e.categoryName;e.sublinks=H[t]})),L.sort(((e,t)=>e.order-t.order)),T.sort(((e,t)=>e.order-t.order)),T.forEach((e=>{const{sublinks:t}=e;t&&t.sort(((e,t)=>e.order-t.order))}));const F=[].concat(L,T);return a.createElement(a.Fragment,null,a.createElement("div",{className:"w-0"},a.createElement("div",{onClick:()=>E(!0),className:(g?"display-none":"display-flex")+" text-xl w-3 h-3 position-relative top-1 left-1 radius-full cursor-pointer shadow-magenta-lg hover:shadow-blue-lg bg-background-ltr items-center justify-center bg-background z-5 text-magenta hover:text-blue"},a.createElement(d.u,{icon:u.mIU}))),a.createElement("div",{id:"sidebar",className:"layout-module--sidebar--b7658  max-tab:position-absolute max-tab:h-full min-w-1/4 max-tab:w-20 overflow-y-scroll bg-background z-4  "+(g?"":"display-none")},a.createElement("nav",{className:"p-md"},a.createElement("span",{className:(k?"display-none":"")+" "},a.createElement(d.u,{className:"cursor-pointer hover:text-magenta text-magenta hover:text-blue text-lg py-sm",onClick:()=>E(!1),icon:u.kvG})),a.createElement("ul",{className:"display-flex flex-col line-height-lg"},F.map((e=>{const{isCategoryRoot:t,categoryName:l,path:n,title:r,sublinks:s,anchorLinks:o}=e;if(t){const e=r.charAt(0).toUpperCase()+r.slice(1),t="/simple-scss-utilities-docs"+n+"/"===C;return a.createElement("li",{key:n+" "+r},a.createElement("span",{className:(t?"text-magenta":"")+" font-large hover:text-magenta "},a.createElement(c.Link,{to:n},e)),o&&a.createElement("ul",{className:"line-height-md "},o.map(((e,t)=>{const{title:l,link:r}=e;return a.createElement("li",{key:l+" "+r,className:"pl-md text-md "+(t==o.length-1?"mb-xs":"")+" "},a.createElement(i,{path:n,to:r},l))}))),s&&a.createElement("ul",null,s.map(((e,t)=>{const{title:l,path:n,anchorLinks:r}=e,o="/simple-scss-utilities-docs"+n+"/"===C;return a.createElement("li",{key:l+" "+n,className:"pl-md font-normal   "+(t==s.length-1?"mb-xs":"")},a.createElement("span",{className:(o?"text-magenta":"")+" font-bold hover:text-magenta"},a.createElement(c.Link,{to:n},l)),r&&a.createElement("ul",{className:"line-height-md "},r.map((e=>{const{title:t,link:l}=e;return a.createElement("li",{key:t+" "+l,className:"pl-md text-md hover:text-magenta"},a.createElement(i,{path:n,to:l},t))}))))}))))}r.charAt(0).toUpperCase(),r.slice(1);const m="/simple-scss-utilities-docs"+n+"/"===C;return a.createElement("li",{key:n+" "+r},a.createElement("span",{className:(m?"text-magenta":"")+" font-large hover:text-magenta"},a.createElement(c.Link,{to:n},r)))}))))))};var E=e=>{let{pathname:t,children:l}=e;const{sidebarOpen:r,setSidebarOpen:s}=(0,a.useContext)(m.c),{0:i,1:d}=(0,a.useState)(!1),{0:u,1:h}=(0,a.useState)(""),{docs:E,components:p,customize:f}=(0,c.useStaticQuery)("2241216091");let b;return t.startsWith("/simple-scss-utilities-docs/docs")?b={path:"docs",...E}:t.startsWith("/simple-scss-utilities-docs/customize")&&(b={path:"customize",...f}),a.createElement("div",{id:"sidebar-layout",className:"display-flex min-w-full grow-1"},a.createElement(o.Provider,{value:{activeAnchor:u,setActiveAnchor:h,hasScrolled:i,setHasScrolled:d}},a.createElement(g,{sidebarData:b}),a.createElement("div",{id:"docs-section",className:"display-flex flex-col grow-1 overflow-y-scroll position-relative layout-module--docs-section--ad6df",onWheel:()=>{d(!0)},onTouchStart:()=>{d(!0)}},a.createElement("div",{id:"small-width-overlay",className:"display-none "+(r?"max-tab:display-block":"")+" position-fixed top-0 left-0 w-full h-full z-3 bg-black opacity-10"}),a.createElement("div",{id:"the-document",className:"grow-1 pl-xl p-lg w-19/20 max-w-container lg:mx-auto   "+(r?"max-tab:filter-blur-md":"")},l),a.createElement(n.c,null))))}},2528:function(e,t,l){var a=l(1504);t.c=e=>{let{children:t,title:l,isFile:n}=e;return a.createElement("div",{className:"mt-lg mb-2xl mr-2"},a.createElement("h6",{className:"font-large text-lg position-relative left-1px mb-xs"},n?"File: ":"",l),a.createElement("div",{className:"mr-md"},t))}}}]);
//# sourceMappingURL=component---src-pages-mdx-frontmatter-type-mdx-frontmatter-slug-js-content-file-path-content-docs-grid-index-mdx-02c43e27d1d311004ffb.js.map