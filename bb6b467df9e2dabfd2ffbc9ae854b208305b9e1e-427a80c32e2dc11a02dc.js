(self.webpackChunksimple_scss_utilities=self.webpackChunksimple_scss_utilities||[]).push([[7016],{792:function(e,t,r){"use strict";r.d(t,{u:function(){return v}});var l=r(5620),n=r(3268),a=r.n(n),o=r(1504);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,l)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function m(e,t){if(null==e)return{};var r,l,n=function(e,t){if(null==e)return{};var r,l,n={},a=Object.keys(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)r=a[l],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function d(e){return function(e){if(Array.isArray(e))return p(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return p(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return p(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,l=new Array(t);r<t;r++)l[r]=e[r];return l}function f(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var g=["style"];var b=!1;try{b=!0}catch(A){}function h(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:l.parse.icon?l.parse.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function x(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var v=o.forwardRef((function(e,t){var r=e.icon,n=e.mask,a=e.symbol,o=e.className,i=e.title,c=e.titleId,m=e.maskId,p=h(r),f=x("classes",[].concat(d(function(e){var t,r=e.beat,l=e.fade,n=e.beatFade,a=e.bounce,o=e.shake,i=e.flash,s=e.spin,c=e.spinPulse,m=e.spinReverse,d=e.pulse,p=e.fixedWidth,f=e.inverse,g=e.border,b=e.listItem,h=e.flip,x=e.size,v=e.rotation,y=e.pull,A=(u(t={"fa-beat":r,"fa-fade":l,"fa-beat-fade":n,"fa-bounce":a,"fa-shake":o,"fa-flash":i,"fa-spin":s,"fa-spin-reverse":m,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":p,"fa-inverse":f,"fa-border":g,"fa-li":b,"fa-flip":!0===h,"fa-flip-horizontal":"horizontal"===h||"both"===h,"fa-flip-vertical":"vertical"===h||"both"===h},"fa-".concat(x),null!=x),u(t,"fa-rotate-".concat(v),null!=v&&0!==v),u(t,"fa-pull-".concat(y),null!=y),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(A).map((function(e){return A[e]?e:null})).filter((function(e){return e}))}(e)),d(o.split(" ")))),g=x("transform","string"==typeof e.transform?l.parse.transform(e.transform):e.transform),A=x("mask",h(n)),w=(0,l.icon)(p,s(s(s(s({},f),g),A),{},{symbol:a,title:i,titleId:c,maskId:m}));if(!w)return function(){var e;!b&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",p),null;var E=w.abstract,k={ref:t};return Object.keys(e).forEach((function(t){v.defaultProps.hasOwnProperty(t)||(k[t]=e[t])})),y(E[0],k)}));v.displayName="FontAwesomeIcon",v.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},v.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var y=function e(t,r){var l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var n=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var l=r.attributes[t];switch(t){case"class":e.attrs.className=l,delete r.attributes.class;break;case"style":e.attrs.style=l.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,l=t.indexOf(":"),n=f(t.slice(0,l)),a=t.slice(l+1).trim();return n.startsWith("webkit")?e[(r=n,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[n]=a,e}),{});break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=l:e.attrs[f(t)]=l}return e}),{attrs:{}}),o=l.style,i=void 0===o?{}:o,c=m(l,g);return a.attrs.style=s(s({},a.attrs.style),i),t.apply(void 0,[r.tag,s(s({},a.attrs),c)].concat(d(n)))}.bind(null,o.createElement)},8632:function(e,t,r){"use strict";var l=r(1504);t.c=()=>l.createElement("footer",{id:"#footer",className:"p-lg grow-0 shrink-0"},l.createElement("p",{className:"line-height-lg letter-spacing-md mb-md"},"© ",(new Date).getFullYear()," Simple Scss Utilities"))},896:function(e,t,r){"use strict";r.d(t,{c:function(){return h}});var l=r(1504),n=r(3616),a=r(4552),o=r(4056),i=r(792),s=r(5896),c=r(9472),u=r(7264);var m=()=>{const{themeMode:e,setThemeMode:t}=(0,l.useContext)(n.c),{0:r,1:a}=(0,l.useState)(!1),{0:m,1:d}=(0,l.useState)(!1),{width:p}=(0,u.c)();return(0,l.useEffect)((()=>{a(p>768)}),[p]),(0,l.useEffect)((()=>{r||d(!1)}),[r]),l.createElement("div",{id:"navBar",className:"p-lg shadow-sm z-index-1 grow-0 shrink-0 h-4xl sizing-border position-relative  z-5 bg-background"},l.createElement("nav",{className:"display-flex justify-between max-tab:h-0 pl-xl"},l.createElement("div",{className:"position-relative bottom-md pl-md"},l.createElement(o.Link,{to:"/"},l.createElement("img",{src:"data:image/png;base64,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"}))),l.createElement("div",{className:"display-flex justify-between w-1/2"},l.createElement("div",{className:"grow-1  display-flex justify-around max-tab:flex-row-reverse max-tab:justify-normal pr-lg max-tab:pr-2xl"},l.createElement(o.Link,{to:"/motivation",className:"display-inline max-tab:display-none font-large hover:text-magenta cursor-pointer"},"Motivation"),l.createElement(o.Link,{to:"/install",className:"display-inline max-tab:display-none font-large hover:text-magenta cursor-pointer"},"Install"),l.createElement(o.Link,{to:"/docs",className:"display-inline max-tab:display-none font-large hover:text-magenta cursor-pointer"},"Docs"),l.createElement(o.Link,{to:"/customize",className:"display-inline max-tab:display-none font-large hover:text-magenta cursor-pointer"},"Customize"),l.createElement("span",{className:"display-none max-tab:display-inline"},l.createElement(i.u,{icon:s.mIU,className:" text-2xl cursor-pointer hover:text-blue-lt position-relative bottom-xs text-magenta",onClick:()=>d(!0)}))),l.createElement("div",{className:"w-4 display-flex justify-between text-xl position-relative bottom-xs grow-0"},l.createElement("a",{href:"https://github.com/BThvedt/simple-scss-utilities"},l.createElement(i.u,{icon:c.eEK,className:"cursor-pointer hover:text-blue-lt text-magenta"})),"dark-mode"!=e&&l.createElement(i.u,{className:"cursor-pointer hover:text-blue-lt position-relative top-2px max-tab:top-3px text-magenta",onClick:()=>{t("dark-mode")},icon:s.c1X}),"dark-mode"==e&&l.createElement(i.u,{className:"cursor-pointer hover:text-blue-lt position-relative top-2px max-tab:top-3px text-magenta",onClick:()=>t("day"),icon:s.OLY})),l.createElement("div",{className:"display-none w-0 "+(m?"max-tab:display-block":"")+" position-relative right-2"},l.createElement("div",{className:"w-10  bg-background-ltr position-relative right-10 bottom-2px shadow-lg radius-md p-lg pt-xl"},l.createElement(i.u,{icon:s.kvG,className:"position-absolute top-sm right-sm text-lg hover:text-blue-lt cursor-pointer text-magenta hover:text-blue",onClick:()=>{d(!1)}}),l.createElement("nav",{className:"display-flex flex-col line-height-xl"},l.createElement(o.Link,{to:"/motivation",className:"font-large text-lg hover:text-magenta cursor-pointer mb-sm"},"Motivation"),l.createElement(o.Link,{to:"/install",className:"font-large text-lg hover:text-magenta cursor-pointer mb-sm"},"Install"),l.createElement(o.Link,{to:"/docs",className:"font-large text-lg hover:text-magenta cursor-pointer mb-sm"},"Docs"),l.createElement(o.Link,{to:"/customize",className:"font-large text-lg hover:text-magenta cursor-pointer mb-xs"},"Customize")))))))},d=r(8632),p=r(9360),f=r(2585);function g(e){const t=(e.children.props.className||"").match(/language-(?<lang>.*)/),r=e.children.props.lineNumbers;return l.createElement(f.gl,Object.assign({},f.defaultProps,{code:e.children.props.children.trim(),language:t&&t.groups&&t.groups.lang?t.groups.lang:""}),(e=>{let{className:t,style:n,tokens:a,getLineProps:o,getTokenProps:i}=e;return l.createElement("pre",{className:t+" overflow-auto radius-sm shadow-sm",style:{...n,padding:"1rem"}},a.map(((e,t)=>l.createElement("div",Object.assign({key:t},o({line:e,key:t})),r&&l.createElement("span",{className:"line-number"},t+1),e.map(((e,t)=>l.createElement("span",Object.assign({key:t},i({token:e,key:t})))))))))}))}var b=e=>{let{onSideBarPage:t,children:r}=e;const{themeMode:o,setThemeMode:i}=(0,l.useContext)(n.c);return(0,l.useEffect)((()=>{const e=localStorage.getItem("themeMode");"dark-mode"===e?i("dark-mode"):e?i("day"):(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&i("dark-mode"),console.log("no media query"))}),[]),(0,l.useEffect)((()=>{o&&localStorage.setItem("themeMode",o)}),[o]),l.createElement("div",{id:"wrapper",className:" overflow-x-hidden min-h-screen display-flex flex-col "+("dark-mode"==o?"dark-mode":"")},l.createElement("div",{id:"inner-wrapper",className:"display-flex flex-col grow-1 text-default bg-background"},l.createElement(m,{onSideBarPage:t}),l.createElement("div",{id:"site-content",className:"grow-1 display-flex flex-col"},l.createElement(a.Iu,{components:{h1:p.H1,h2:p.H2,h3:p.H3,h4:p.H4,ul:p.UL,li:p.LI,p:p.P,pre:g,table:p.oJ,a:p.A,code:p.Md}},r)),!t&&l.createElement(d.c,null)))};var h=e=>{let{children:t,onSideBarPage:r}=e;const{0:a,1:o}=(0,l.useState)(null),{0:i,1:s}=(0,l.useState)(null);return l.createElement(n.c.Provider,{value:{themeMode:a,setThemeMode:o,sidebarOpen:i,setSidebarOpen:s}},l.createElement(b,{onSideBarPage:r},t))}},3616:function(e,t,r){"use strict";const l=(0,r(1504).createContext)({themeMode:null,setThemeMode:()=>{},sidebarOpen:!0,setSidebarOpen:()=>{}});t.c=l},9360:function(e,t,r){"use strict";r.d(t,{A:function(){return b},H1:function(){return c},H2:function(){return u},H3:function(){return m},H4:function(){return d},LI:function(){return g},Md:function(){return h},P:function(){return p},UL:function(){return f},gZ:function(){return v},oJ:function(){return x}});var l=r(1504),n=r(792),a=r(5896),o=r(4056),i=r(7612),s=r.n(i);const c=e=>{let{children:t}=e;return l.createElement("header",{className:"mx-auto mt-md"},l.createElement("div",{className:"display-flex flex-col items-center position-relative h-3xl"},l.createElement("h3",{className:"font-header text-2xl display-inline bg-background z-2 position-relative px-xl"},"Simple Scss Utilities"),l.createElement("hr",{className:"border-solid border-md border-default position-relative bottom-1/2 w-17/20"})),l.createElement("h1",{className:"font-header text-3xl align-center"},t))},u=e=>{let{children:t}=e;const r=t.toLowerCase().replace(/[^a-z0-9 ]/g,"").replace(/[ ]/g,"-");const o="#"+r;return l.createElement("h2",{className:"mb-lg mt-xl font-large text-2xl",id:r},l.createElement("a",{href:o,className:"anchor-link mr-md text-blue"},l.createElement(n.u,{icon:a.Y$m})),t)},m=e=>{let{children:t}=e;return l.createElement("h3",{className:"mb-md mt-xl font-large text-xl"},t)},d=e=>{let{children:t}=e;return l.createElement("h3",{className:"font-large align-center text-xl mb-xl"},t)},p=e=>{let{children:t}=e;return l.createElement("p",{className:"mb-lg text-lg line-height-lg letter-spacing-sm"},t)},f=e=>{let{children:t}=e;return l.createElement("ul",{className:"text-lg list-disc pl-2xl py-sm"},t)},g=e=>{let{children:t}=e;return l.createElement("li",{className:"mb-md"},t)},b=e=>{let{children:t,href:r}=e;return l.createElement(o.Link,{to:r,className:"font-large font-bold text-blue hover:text-magenta cursor-pointer letter-spacing-md"},t)},h=e=>{let{children:t}=e;return l.createElement("code",{className:"bg-background-dk bg-dark-mode-only px-xs mx-xs text-base"},t)},x=e=>{var t,r,n,a,o,i,c,u,m,d,p,f,g,b,h,x,v,y,A,w;let{children:E}=e,{0:k,1:N}=(0,l.useState)(null);(0,l.useEffect)((()=>{"undefined"!=typeof window&&N(window)}),[]);let C={};C.className=null===(t=E[0])||void 0===t||null===(r=t.props)||void 0===r||null===(n=r.children)||void 0===n||null===(a=n.props)||void 0===a||null===(o=a.children[0])||void 0===o||null===(i=o.props)||void 0===i?void 0:i.children,C.property=null===(c=E[0])||void 0===c||null===(u=c.props)||void 0===u||null===(m=u.children)||void 0===m||null===(d=m.props)||void 0===d||null===(p=d.children[1])||void 0===p||null===(f=p.props)||void 0===f?void 0:f.children,C.thirdProperty=null===(g=E[0])||void 0===g||null===(b=g.props)||void 0===b||null===(h=b.children)||void 0===h||null===(x=h.props)||void 0===x||null===(v=x.children[2])||void 0===v||null===(y=v.props)||void 0===y?void 0:y.children;let O=[];return null===(A=E[1])||void 0===A||null===(w=A.props)||void 0===w||w.children.forEach((e=>{var t,r,n,a,o,i,c,u,m;let d={};d.className=null==e||null===(t=e.props)||void 0===t||null===(r=t.children[0])||void 0===r||null===(n=r.props)||void 0===n?void 0:n.children;let p=null==e||null===(a=e.props)||void 0===a||null===(o=a.children[1])||void 0===o||null===(i=o.props)||void 0===i?void 0:i.children,f=null==e||null===(c=e.props)||void 0===c||null===(u=c.children[2])||void 0===u||null===(m=u.props)||void 0===m?void 0:m.children,g=!0;if("string"==typeof p){let e=p.split(":");if(e.length>1){let t=e[0].trim(),r=e[1].trim().replace(";","");(null==k?void 0:k.CSS.supports(t,r))?d.cssVals=l.createElement("span",{key:s()(),className:"display-block"},l.createElement("span",{key:s()(),className:"text-red-lt"},t),": ",l.createElement("span",{key:s()(),className:"text-blue-lt"},r,";")):g=!1}else g=!1}else if("object"==typeof p){let t=[];p.forEach((r=>{if("string"==typeof r){let c=r.split(":");if(c.length>1){let r=c[0].trim(),o=c[1].trim().replace(";","");var l,n,a;if(null==k?void 0:k.CSS.supports(r,o))t.push([r,o]);else t.push(null==e||null===(l=e.props)||void 0===l||null===(n=l.children[1])||void 0===n||null===(a=n.props)||void 0===a?void 0:a.children)}else{var o,i,s;t.push(null==e||null===(o=e.props)||void 0===o||null===(i=o.children[1])||void 0===i||null===(s=i.props)||void 0===s?void 0:s.children)}}})),d.cssVals=l.createElement(l.Fragment,null,t.map((e=>"string"==typeof e?e:l.createElement("span",{key:s()(),className:"display-block"},l.createElement("span",{key:s()(),className:"text-red-lt"},e[0]),": ",l.createElement("span",{key:s()(),className:"text-blue-lt"},e[1],";")))))}else g=!1;var b,h,x;g||(d.cssVals=null==e||null===(b=e.props)||void 0===b||null===(h=b.children[1])||void 0===h||null===(x=h.props)||void 0===x?void 0:x.children);f&&(console.log(f),d.thirdCell=f),O.push(d)})),l.createElement("table",{className:"w-3/4 mx-auto max-scr:w-full max-scr:mx-0 mt-2xl mb-2xl"},l.createElement("thead",{className:"display-block letter-spacing-xl"},l.createElement("tr",{key:"head-row-1",className:"display-flex"},l.createElement("th",{className:"display-flex "+(C.thirdProperty?"w-1/3":"w-1/2")+" font-large text-lg"},C.className),l.createElement("th",{className:"display-flex "+(C.thirdProperty?"w-1/3 justify-center":"w-1/2")+" font-large text-lg  "},C.property),C.thirdProperty&&l.createElement("th",{className:"display-flex justify-center font-large text-lg  w-1/3"},C.thirdProperty))),l.createElement("tbody",{className:"display-block max-h-30 overflow-y-auto overflow-x-hidden pr-lg"},O.map(((e,t)=>l.createElement("tr",{className:'display-flex w-full p-sm border-dotted  "border-green-ltr" '+(t<O.length-1?"bb-sm":"")+" min-h-3",key:s()()},l.createElement("td",{className:"display-flex flex-col "+(e.thirdCell?"w-1/3":"w-1/2")+" justify-center text-magenta-lt"},".",e.className),l.createElement("td",{className:"display-flex flex-col "+(e.thirdCell?"w-1/3 items-center":"w-1/2")+" justify-center text-magenta-lt"},e.cssVals),e.thirdCell&&l.createElement("td",{className:"display-flex flex-col w-1/3 justify-center items-center cemter"},e.thirdCell))))))},v=e=>{let{className:t,text:r}=e;return l.createElement("p",{className:t},r)}},7264:function(e,t,r){"use strict";r.d(t,{c:function(){return a}});var l=r(1504);function n(){if("undefined"!=typeof window){const{innerWidth:e,innerHeight:t}=window;return{width:e,height:t}}return{width:0,height:0}}function a(){const{0:e,1:t}=(0,l.useState)(n());return(0,l.useEffect)((()=>{function e(){t(n())}return window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),e}},7612:function(e){e.exports=function(){const e=["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];let t=[];for(let r=0;r<36;r++)t[r]=8===r||13===r||18===r||23===r?"-":e[Math.ceil(Math.random()*e.length-1)];return t.join("")}},4552:function(e,t,r){"use strict";r.d(t,{Iu:function(){return i},MN:function(){return a}});var l=r(1504);const n=l.createContext({});function a(e){const t=l.useContext(n);return l.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const o={};function i({components:e,children:t,disableParentContext:r}){let i;return i=r?"function"==typeof e?e({}):e||o:a(e),l.createElement(n.Provider,{value:i},t)}}}]);
//# sourceMappingURL=bb6b467df9e2dabfd2ffbc9ae854b208305b9e1e-427a80c32e2dc11a02dc.js.map