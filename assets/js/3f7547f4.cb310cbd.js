"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[1152],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},10983:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var n=r(22122),a=r(19756),l=(r(67294),r(3905)),i=["components"],o={id:"additional_series",title:"DSSERIES"},u={unversionedId:"references/formulas/additional_series",id:"references/formulas/additional_series",isDocsHomePage:!1,title:"DSSERIES",description:"Syntax",source:"@site/docs/references/formulas/additional_series.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/additional_series",permalink:"/references/formulas/additional_series",version:"current",frontMatter:{id:"additional_series",title:"DSSERIES"}},p=[{value:"Syntax",id:"syntax",children:[]},{value:"Example",id:"example",children:[]}],c={toc:p};function s(e){var t=e.components,r=(0,a.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"syntax"},"Syntax"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"DSSERIES[seriesid]")," - will represent the respective series data."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Consider the data in the following structure:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Series 1"),(0,l.kt)("th",{parentName:"tr",align:null},"Series 2"),(0,l.kt)("th",{parentName:"tr",align:null},"Series 3"),(0,l.kt)("th",{parentName:"tr",align:null},"Series 4"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"US"),(0,l.kt)("td",{parentName:"tr",align:null},"110"),(0,l.kt)("td",{parentName:"tr",align:null},"95"),(0,l.kt)("td",{parentName:"tr",align:null},"75"),(0,l.kt)("td",{parentName:"tr",align:null},"78")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"India"),(0,l.kt)("td",{parentName:"tr",align:null},"85"),(0,l.kt)("td",{parentName:"tr",align:null},"70"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"80")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Germany"),(0,l.kt)("td",{parentName:"tr",align:null},"25"),(0,l.kt)("td",{parentName:"tr",align:null},"25"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"0")))),(0,l.kt)("p",null,"Here you can access the Series 3 value of India using the following formula:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"SUM(DSSERIES3.India)\n")),(0,l.kt)("p",null,"The result will be: 100."))}s.isMDXComponent=!0}}]);