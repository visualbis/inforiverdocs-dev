"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[3540],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},41043:(e,t,n)=>{n.r(t),n.d(t,{default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={id:"switch",title:"SWITCH"},i={unversionedId:"references/formulas/switch",id:"references/formulas/switch",isDocsHomePage:!1,title:"SWITCH",description:"A SWITCH statement evaluates an expression against a list of values and returns the result corresponding to the first matching value.",source:"@site/docs/references/formulas/switch.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/switch",permalink:"/references/formulas/switch",version:"current",frontMatter:{id:"switch",title:"SWITCH"},sidebar:"functionSideBar",previous:{title:"IF",permalink:"/references/formulas/if"},next:{title:"AND",permalink:"/references/formulas/and"}},o=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Remark",id:"remark",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],s={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"SWITCH")," statement evaluates an expression against a list of values and returns the result corresponding to the first matching value.\nIf there is no match, an optional default value is returned."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"SWITCH ( expression, value1, result1, value2, result2, ... value_n, result_n, [default] )\n")),(0,a.kt)("h2",{id:"arguments"},"Arguments"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expression")," \u2013 The statement to be evaluated."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value1, value2, \u2026 value_n")," \u2013 The list of values to be compared against the expression."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"result1, result2, \u2026 result_n")," \u2013 The result to be returned if the expression matches with the corresponding value in the argument list."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default")," \u2013 The default value to be returned if the expression does not match with any of the values in the argument list. This is an optional argument.")),(0,a.kt)("h2",{id:"return-value"},"Return value"),(0,a.kt)("p",null,"Returns the corresponding result when the expression matches with value, default in case there was no match."),(0,a.kt)("h2",{id:"remark"},"Remark"),(0,a.kt)("p",null,"All result expressions and the else expression must be of the same data type."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Consider a scenario where you have the rank for Total Sales for different regions and want to assign Sales Commission accordingly. Sales Commission for 1st, 2nd and 3rd regions should be 20%, 15% and 10%."),(0,a.kt)("p",null,"The formula should be:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"SWITCH(Total Sales \u2013 Rank,1,0.2,2,0.15,3,0.1)\n")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Account"),(0,a.kt)("th",{parentName:"tr",align:null},"US"),(0,a.kt)("th",{parentName:"tr",align:null},"APAC"),(0,a.kt)("th",{parentName:"tr",align:null},"EMEA"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Total Sales - Rank"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("b",null,"Sales Commission")),(0,a.kt)("td",{parentName:"tr",align:null},"20%"),(0,a.kt)("td",{parentName:"tr",align:null},"10%"),(0,a.kt)("td",{parentName:"tr",align:null},"15%")))),(0,a.kt)("p",null,"The result is the in the 'Sales Commission' row."),(0,a.kt)("h2",{id:"excel-equivalent"},"Excel Equivalent"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://support.office.com/en-us/article/SWITCH-function-47ab33c0-28ce-4530-8a45-d532ec4aa25e"},"SWITCH")))}u.isMDXComponent=!0}}]);