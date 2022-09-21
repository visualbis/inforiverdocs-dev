"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[2606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(n),d=a,m=f["".concat(c,".").concat(d)]||f[d]||p[d]||o;return n?r.createElement(m,l(l({ref:t},s),{},{components:n})):r.createElement(m,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36742:(e,t,n)=>{n.d(t,{Z:()=>u});var r=n(67294),a=n(73727),o=n(13919),l=n(10412);const i=(0,r.createContext)({collectLink:()=>{}});var c=n(44996);const u=function(e){let{isNavLink:t,to:n,href:u,activeClassName:s,isActive:p,"data-noBrokenLinkCheck":f,autoAddBaseUrl:d=!0,...m}=e;var v;const{withBaseUrl:g}=(0,c.C)(),h=(0,r.useContext)(i),k=n||u,b=(0,o.Z)(k),y=null==k?void 0:k.replace("pathname://",""),N=void 0!==y?(O=y,d&&(e=>e.startsWith("/"))(O)?g(O):O):void 0;var O;const w=(0,r.useRef)(!1),C=t?a.OL:a.rU,x=l.Z.canUseIntersectionObserver;let E;(0,r.useEffect)((()=>(!x&&b&&null!=N&&window.docusaurus.prefetch(N),()=>{x&&E&&E.disconnect()})),[N,x,b]);const j=null!==(v=null==N?void 0:N.startsWith("#"))&&void 0!==v&&v,T=!N||!b||j;return N&&b&&!j&&!f&&h.collectLink(N),T?r.createElement("a",Object.assign({href:N},k&&!b&&{target:"_blank",rel:"noopener noreferrer"},m)):r.createElement(C,Object.assign({},m,{onMouseEnter:()=>{w.current||null==N||(window.docusaurus.preload(N),w.current=!0)},innerRef:e=>{var t,n;x&&e&&b&&(t=e,n=()=>{null!=N&&window.docusaurus.prefetch(N)},E=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(E.unobserve(t),E.disconnect(),n())}))})),E.observe(t))},to:N||""},t&&{isActive:p,activeClassName:s}))}},13919:(e,t,n)=>{function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,{Z:()=>a,b:()=>r})},44996:(e,t,n)=>{n.d(t,{C:()=>o,Z:()=>l});var r=n(52263),a=n(13919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,r){let{forcePrependBaseUrl:o=!1,absolute:l=!1}=void 0===r?{}:r;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(o)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+i:i}(t,e,n,r)}}function l(e,t){void 0===t&&(t={});const{withBaseUrl:n}=o();return n(e,t)}},85692:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var r=n(87462),a=(n(67294),n(3905));n(44996),n(36742);const o={id:"countif",title:"COUNTIF"},l={unversionedId:"references/formulas/countif",id:"references/formulas/countif",isDocsHomePage:!1,title:"COUNTIF",description:"The COUNTIF function returns the count of item matching the condition.",source:"@site/docs/references/formulas/countif.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/countif",permalink:"/references/formulas/countif",version:"current",frontMatter:{id:"countif",title:"COUNTIF"},sidebar:"functionSideBar",previous:{title:"AVERAGEEXZERONEG",permalink:"/references/formulas/averageexzeroneg"},next:{title:"ABS",permalink:"/references/formulas/abs"}},i=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]},{value:"Returns",id:"returns",children:[]}],c={toc:i};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"COUNTIF")," function returns the count of item matching the condition."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"COUNTIF([list],condition)\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"To get the count of columns with value lesser than 200, use the formula as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'COUNTIF([Sales,Finance,Inventory],"<200")\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Sales"),(0,a.kt)("th",{parentName:"tr",align:null},"Finance"),(0,a.kt)("th",{parentName:"tr",align:null},"Inventory"),(0,a.kt)("th",{parentName:"tr",align:null},"COUNTIF"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"-389"),(0,a.kt)("td",{parentName:"tr",align:null},"100"),(0,a.kt)("td",{parentName:"tr",align:null},"199"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"201"),(0,a.kt)("td",{parentName:"tr",align:null},"1000"),(0,a.kt)("td",{parentName:"tr",align:null},"145"),(0,a.kt)("td",{parentName:"tr",align:null},"1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"783"),(0,a.kt)("td",{parentName:"tr",align:null},"150"),(0,a.kt)("td",{parentName:"tr",align:null},"9091"),(0,a.kt)("td",{parentName:"tr",align:null},"1")))),(0,a.kt)("h2",{id:"returns"},"Returns"),(0,a.kt)("p",null,"The formula returns an integer."))}u.isMDXComponent=!0}}]);