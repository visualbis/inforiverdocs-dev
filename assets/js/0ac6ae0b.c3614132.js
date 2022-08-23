"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[4198],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return v}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(t),v=a,d=p["".concat(c,".").concat(v)]||p[v]||f[v]||i;return t?n.createElement(d,o(o({ref:r},s),{},{components:t})):n.createElement(d,o({ref:r},s))}));function v(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=p;var u={};for(var c in r)hasOwnProperty.call(r,c)&&(u[c]=r[c]);u.originalType=e,u.mdxType="string"==typeof e?e:a,o[1]=u;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6742:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(9756),a=t(7294),i=t(3727),o=t(3919),u=t(412),c=(0,a.createContext)({collectLink:function(){}}),l=t(4996),s=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];var f=function(e){var r,t,f,p=e.isNavLink,v=e.to,d=e.href,m=e.activeClassName,h=e.isActive,y=e["data-noBrokenLinkCheck"],b=e.autoAddBaseUrl,k=void 0===b||b,g=(0,n.Z)(e,s),N=(0,l.C)().withBaseUrl,O=(0,a.useContext)(c),w=v||d,x=(0,o.Z)(w),A=null==w?void 0:w.replace("pathname://",""),C=void 0!==A?(t=A,k&&function(e){return e.startsWith("/")}(t)?N(t):t):void 0,j=(0,a.useRef)(!1),P=p?i.OL:i.rU,E=u.Z.canUseIntersectionObserver;(0,a.useEffect)((function(){return!E&&x&&null!=C&&window.docusaurus.prefetch(C),function(){E&&f&&f.disconnect()}}),[C,E,x]);var I=null!==(r=null==C?void 0:C.startsWith("#"))&&void 0!==r&&r,T=!C||!x||I;return C&&x&&!I&&!y&&O.collectLink(C),T?a.createElement("a",Object.assign({href:C},w&&!x&&{target:"_blank",rel:"noopener noreferrer"},g)):a.createElement(P,Object.assign({},g,{onMouseEnter:function(){j.current||null==C||(window.docusaurus.preload(C),j.current=!0)},innerRef:function(e){var r,t;E&&e&&x&&(r=e,t=function(){null!=C&&window.docusaurus.prefetch(C)},(f=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(f.unobserve(r),f.disconnect(),t())}))}))).observe(r))},to:C||""},p&&{isActive:h,activeClassName:m}))}},3919:function(e,r,t){function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}t.d(r,{b:function(){return n},Z:function(){return a}})},4996:function(e,r,t){t.d(r,{C:function(){return i},Z:function(){return o}});var n=t(2263),a=t(3919);function i(){var e=(0,n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,i=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,u=void 0!==o&&o,c=i.absolute,l=void 0!==c&&c;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(u)return r+t;var s=t.startsWith(r)?t:r+t.replace(/^\//,"");return l?e+s:s}(i,t,e,r)}}}function o(e,r){return void 0===r&&(r={}),(0,i().withBaseUrl)(e,r)}},5487:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return f}});var n=t(2122),a=t(9756),i=(t(7294),t(3905)),o=(t(4996),t(6742),["components"]),u={id:"ifna",title:"IFNA"},c={unversionedId:"references/formulas/ifna",id:"references/formulas/ifna",isDocsHomePage:!1,title:"IFNA",description:"The IFNA function returns the value you specify if a formula returns the #N/A error value; otherwise it returns the result of the formula.",source:"@site/docs/references/formulas/ifna.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/ifna",permalink:"/references/formulas/ifna",version:"current",frontMatter:{id:"ifna",title:"IFNA"},sidebar:"functionSideBar",previous:{title:"ISNUMBER",permalink:"/references/formulas/isnumber"},next:{title:"IN",permalink:"/references/formulas/in"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],s={toc:l};function f(e){var r=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},s,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IFNA")," function returns the value you specify if a formula returns the #N/A error value; otherwise it returns the result of the formula."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"IFNA(value, value_if_na)\n")),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"value"),": The argument that is checked for the #N/A error value."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"value_if_na"),": The value to return if the formula evaluates to the #N/A error value.")),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Returns the result of the calculation ",(0,i.kt)("inlineCode",{parentName:"p"},"(AC-PY)/PY")," if the value is a number else in case of an error it returns 0."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"IFNA((AC-PY)/PY, 0)\n")))}f.isMDXComponent=!0}}]);