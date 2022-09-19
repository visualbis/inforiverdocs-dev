"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[47],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,d=m["".concat(c,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},36742:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(67294),a=r(73727),o=r(13919),i=r(10412);const l=(0,n.createContext)({collectLink:()=>{}});var c=r(44996);const s=function(e){let{isNavLink:t,to:r,href:s,activeClassName:u,isActive:p,"data-noBrokenLinkCheck":m,autoAddBaseUrl:f=!0,...d}=e;var v;const{withBaseUrl:g}=(0,c.C)(),b=(0,n.useContext)(l),k=r||s,N=(0,o.Z)(k),h=null==k?void 0:k.replace("pathname://",""),y=void 0!==h?(O=h,f&&(e=>e.startsWith("/"))(O)?g(O):O):void 0;var O;const E=(0,n.useRef)(!1),T=t?a.OL:a.rU,w=i.Z.canUseIntersectionObserver;let x;(0,n.useEffect)((()=>(!w&&N&&null!=y&&window.docusaurus.prefetch(y),()=>{w&&x&&x.disconnect()})),[y,w,N]);const C=null!==(v=null==y?void 0:y.startsWith("#"))&&void 0!==v&&v,j=!y||!N||C;return y&&N&&!C&&!m&&b.collectLink(y),j?n.createElement("a",Object.assign({href:y},k&&!N&&{target:"_blank",rel:"noopener noreferrer"},d)):n.createElement(T,Object.assign({},d,{onMouseEnter:()=>{E.current||null==y||(window.docusaurus.preload(y),E.current=!0)},innerRef:e=>{var t,r;w&&e&&N&&(t=e,r=()=>{null!=y&&window.docusaurus.prefetch(y)},x=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(x.unobserve(t),x.disconnect(),r())}))})),x.observe(t))},to:y||""},t&&{isActive:p,activeClassName:u}))}},13919:(e,t,r)=>{function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}r.d(t,{Z:()=>a,b:()=>n})},44996:(e,t,r)=>{r.d(t,{C:()=>o,Z:()=>i});var n=r(52263),a=r(13919);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,n.default)();return{withBaseUrl:(r,n)=>function(e,t,r,n){let{forcePrependBaseUrl:o=!1,absolute:i=!1}=void 0===n?{}:n;if(!r)return r;if(r.startsWith("#"))return r;if((0,a.b)(r))return r;if(o)return t+r;const l=r.startsWith(t)?r:t+r.replace(/^\//,"");return i?e+l:l}(t,e,r,n)}}function i(e,t){void 0===t&&(t={});const{withBaseUrl:r}=o();return r(e,t)}},39314:(e,t,r)=>{r.r(t),r.d(t,{default:()=>s,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(87462),a=(r(67294),r(3905));r(44996),r(36742);const o={id:"concatenate",title:"CONCATENATE"},i={unversionedId:"references/formulas/concatenate",id:"references/formulas/concatenate",isDocsHomePage:!1,title:"CONCATENATE",description:"The CONCATENATE function is used to join two or more text strings or numbers or cell references into one string.",source:"@site/docs/references/formulas/concatenate.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/concatenate",permalink:"/references/formulas/concatenate",version:"current",frontMatter:{id:"concatenate",title:"CONCATENATE"},sidebar:"functionSideBar",previous:{title:"TEXT",permalink:"/references/formulas/text"},next:{title:"SUM",permalink:"/references/formulas/sum"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],c={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CONCATENATE")," function is used to join two or more text strings or numbers or cell references into one string."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"CONCATENATE(text1, [text2], ...)\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"text1"),": The first item to join. The item can be a text value, number, or cell reference."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"text2"),": Additional text items to join. You can have up to 255 items, up to a total of 8,192 characters.")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"To append the string 'Department is' to every column('DEPT_NAME') use the formula as:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'CONCATENATE("Department is:", DEPT_NAME)\n')),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"DEPT_NAME"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"th"},"Result")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Sales"),(0,a.kt)("td",{parentName:"tr",align:null},"Department is Sales")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"HR"),(0,a.kt)("td",{parentName:"tr",align:null},"Department is HR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Finance"),(0,a.kt)("td",{parentName:"tr",align:null},"Department is Finance")))))}s.isMDXComponent=!0}}]);