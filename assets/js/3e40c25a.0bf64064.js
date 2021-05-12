(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[8665],{3905:function(e,n,r){"use strict";r.d(n,{Zo:function(){return l},kt:function(){return p}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function u(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),f=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},l=function(e){var n=f(e.components);return t.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=f(r),p=i,y=d["".concat(c,".").concat(p)]||d[p]||s[p]||o;return r?t.createElement(y,a(a({ref:n},l),{},{components:r})):t.createElement(y,a({ref:n},l))}));function p(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var u={};for(var c in n)hasOwnProperty.call(n,c)&&(u[c]=n[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var f=2;f<o;f++)a[f]=r[f];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5242:function(e,n,r){"use strict";r.r(n),r.d(n,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return c},default:function(){return l}});var t=r(2122),i=r(9756),o=(r(7294),r(3905)),a={id:"findbyid",title:"findByID"},u={unversionedId:"references/formulas/findbyid",id:"references/formulas/findbyid",isDocsHomePage:!1,title:"findByID",description:"The findByID funtion can be used for tagging or grouping nodes by node ID.",source:"@site/docs/references/formulas/findbyid.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/findbyid",permalink:"/inforiver/references/formulas/findbyid",version:"current",frontMatter:{id:"findbyid",title:"findByID"},sidebar:"functionSideBar",previous:{title:"GETCURRENTRANGE",permalink:"/inforiver/references/formulas/getcurrentrange"},next:{title:"findByTitle",permalink:"/inforiver/references/formulas/findbytitle"}},c=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],f={toc:c};function l(e){var n=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},f,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The findByID funtion can be used for tagging or grouping nodes by node ID. "),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("p",null,'findByID("ID match string")'),(0,o.kt)("h2",{id:"arguments"},"Arguments"),(0,o.kt)("p",null,"ID match string - ID to match the node"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"Consider a scenario where you want to add all the nodes with Sales in their node ID."),(0,o.kt)("p",null,'If the nodes start with Sales, sum can be achieved by using the formula\nSUM(THIS.DESCENDANTS.findByID("^NSales"))   '),(0,o.kt)("p",null,'If the nodes end with Sales, sum can be achieved by using the formula\nSUM(THIS.DESCENDANTS.findByID("NSales$"))'))}l.isMDXComponent=!0}}]);