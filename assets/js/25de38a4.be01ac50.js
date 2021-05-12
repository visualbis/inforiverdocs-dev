(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[1342],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return f},kt:function(){return d}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},f=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,m=p["".concat(u,".").concat(d)]||p[d]||s[d]||a;return n?t.createElement(m,i(i({ref:r},f),{},{components:n})):t.createElement(m,i({ref:r},f))}));function d(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var c={};for(var u in r)hasOwnProperty.call(r,u)&&(c[u]=r[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8512:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return f}});var t=n(2122),o=n(9756),a=(n(7294),n(3905)),i={id:"getcurrentrange",title:"GETCURRENTRANGE"},c={unversionedId:"references/formulas/getcurrentrange",id:"references/formulas/getcurrentrange",isDocsHomePage:!1,title:"GETCURRENTRANGE",description:"The GETCURRENTRANGE funtion returns a range of value based on active period and period selection.",source:"@site/docs/references/formulas/getcurrentrange.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/getcurrentrange",permalink:"/inforiver/references/formulas/getcurrentrange",version:"current",frontMatter:{id:"getcurrentrange",title:"GETCURRENTRANGE"},sidebar:"functionSideBar",previous:{title:"GETROWVALUE",permalink:"/inforiver/references/formulas/getrowvalue"},next:{title:"findByID",permalink:"/inforiver/references/formulas/findbyid"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],l={toc:u};function f(e){var r=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,t.Z)({},l,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The GETCURRENTRANGE funtion returns a range of value based on active period and period selection."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"DS.(SERIES).GETCURRENTRANGE()"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Consider a scenario where you want the sum of baseline sales to change based on the selections in the\nNavigation Panel -(Simulation Period and Value Display)."),(0,a.kt)("p",null,"This can be achieved by using the formula\nSUM(DS.Baseline.GETCURRENTRANGE())"))}f.isMDXComponent=!0}}]);