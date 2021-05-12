(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[6022],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),f=c(t),m=a,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||i;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2602:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return u}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),o={id:"cumprinc",title:"CUMPRINC"},p={unversionedId:"references/formulas/cumprinc",id:"references/formulas/cumprinc",isDocsHomePage:!1,title:"CUMPRINC",description:"The CUMPRINC function returns cumulative principal paid on a loan between two periods.",source:"@site/docs/references/formulas/cumprinc.mdx",sourceDirName:"references/formulas",slug:"/references/formulas/cumprinc",permalink:"/inforiver/references/formulas/cumprinc",version:"current",frontMatter:{id:"cumprinc",title:"CUMPRINC"},sidebar:"functionSideBar",previous:{title:"CUMIPMT",permalink:"/inforiver/references/formulas/cumipmt"},next:{title:"RATE",permalink:"/inforiver/references/formulas/rate"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],c={toc:l};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"CUMPRINC")," function returns cumulative principal paid on a loan between two periods."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"CUMPRINC (Rate, Nper, PV, start_period, end_period, Type)\n")),(0,i.kt)("h2",{id:"arguments"},"Arguments"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Rate")," \u2013 The interest rate per period. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Nper")," \u2013 The total number of periods."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"PV")," \u2013 The present value of the loan. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"start_period")," \u2013 The first payment period. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"end_period")," \u2013  The last payment period."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"Type")," \u2013 Indicates when the payments are made. Type is zero if payments are made at the end of the period and non-zero if payments are made at the start of the period. "),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("p",null,"Consider a $10,000 loan at an annual rate of 10% that is to be paid off in 3 years. All payments are made at the beginning of the month."),(0,i.kt)("p",null,"To calculate the principal payment for a specified range of periods, say between period 12 and 18, the formula should be"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"CUMPRINC (Rate/12, Number of Years*12, Loan Amount, 12, 18, 0)\n")),(0,i.kt)("p",null,"The cumulative principal payments between 12th and 18th months is calculated to be ",(0,i.kt)("inlineCode",{parentName:"p"},"$1882.04")),(0,i.kt)("h2",{id:"excel-equivalent"},"Excel Equivalent"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://support.office.com/en-us/article/CUMPRINC-function-94A4516D-BD65-41A1-BC16-053A6AF4C04D"},"CUMPRINC")))}u.isMDXComponent=!0}}]);