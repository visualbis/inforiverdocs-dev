(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[6126],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},s=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=l(t),m=o,y=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return t?n.createElement(y,u(u({ref:r},s),{},{components:t})):n.createElement(y,u({ref:r},s))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=p;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,u[1]=i;for(var l=2;l<a;l++)u[l]=t[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},4602:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return u},metadata:function(){return i},toc:function(){return c},default:function(){return s}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),u={id:"getrowvalue",title:"GETROWVALUE"},i={unversionedId:"references/formulas/getrowvalue",id:"references/formulas/getrowvalue",isDocsHomePage:!1,title:"GETROWVALUE",description:"The GETROWVALUE function returns the value of the source key row.",source:"@site/docs/references/formulas/getrowvalue.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/getrowvalue",permalink:"/inforiver/references/formulas/getrowvalue",version:"current",frontMatter:{id:"getrowvalue",title:"GETROWVALUE"},sidebar:"functionSideBar",previous:{title:"FOREACH",permalink:"/inforiver/references/formulas/foreach"},next:{title:"GETCURRENTRANGE",permalink:"/inforiver/references/formulas/getcurrentrange"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Argument",id:"argument",children:[]},{value:"Example",id:"example",children:[]}],l={toc:c};function s(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The GETROWVALUE function returns the value of the source key row. "),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("p",null,"DS.(SERIES).GETROWVALUE(<source_key>)"),(0,a.kt)("h2",{id:"argument"},"Argument"),(0,a.kt)("p",null,"source_key - string that corresponds to the source key"),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,'SUM(DS.Comparison.GETROWVALUE("East")) returns the sum of the values of the data source key East from the\ncomparison series.'))}s.isMDXComponent=!0}}]);