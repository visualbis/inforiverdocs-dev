"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[3817],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),s=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(d,".").concat(h)]||u[h]||p[h]||i;return n?r.createElement(m,o(o({ref:t},c),{},{components:n})):r.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},427:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=n(87462),a=(n(67294),n(3905));const i={title:"Audit",sidebar_position:2,slug:"Audit"},o={unversionedId:"learningpaths/AuditLogs",id:"learningpaths/AuditLogs",isDocsHomePage:!1,title:"Audit",description:"Inforiver provides a tool for auditing the data. Each step and the changes performed or updated in the data is recorded in the audit section",source:"@site/docs/learningpaths/AuditLogs.md",sourceDirName:"learningpaths",slug:"/learningpaths/Audit",permalink:"/learningpaths/Audit",version:"current",sidebarPosition:2,frontMatter:{title:"Audit",sidebar_position:2,slug:"Audit"},sidebar:"LearningPath",previous:{title:"ExportandImport",permalink:"/learningpaths/ExportandImport"},next:{title:"Themes",permalink:"/learningpaths/Theme"}},l=[],d={toc:l};function s(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Inforiver provides a tool for auditing the data. Each step and the changes performed or updated in the data is recorded in the audit section"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Untitled",src:n(35773).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can click on the Export button to download the audit file in excel format"),(0,a.kt)("li",{parentName:"ul"},"Click on the Reset all tab to remove the Audit. No logs will be generated after clicking on the Reset all tab")),(0,a.kt)("aside",null,"\ud83d\udca1 Once You click on the Reset all tab on the home page the Audit data is set to clear."),(0,a.kt)("p",null,"Audit Logs can be divided based on the category "),(0,a.kt)("p",null,"The tasks can be sorted into Data editing, Formatting and Data entry tabs"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot 2022-11-01 at 7.32.37 AM.png",src:n(36152).Z})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click on the filter button in the search"),(0,a.kt)("li",{parentName:"ul"},"You find the types of Audit: All, Data editing, Formatting, Data entry",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"All: All the data that is edited will be shown under this audit"),(0,a.kt)("li",{parentName:"ul"},"Data editing: Under this tab you will find the edits performed like creating measures, adding rows etc."),(0,a.kt)("li",{parentName:"ul"},"Formatting: Under this tab, the activities which are Number formatting performed under the Number section like percentage, Quick format, and decimal shifting changes will be captured."),(0,a.kt)("li",{parentName:"ul"},"Data entry: Under this tab, the Data input tool activities are captured."))),(0,a.kt)("li",{parentName:"ul"},"Date Range: You can specify the start date and the end date for checking the audit logs"),(0,a.kt)("li",{parentName:"ul"},"If you enable the checkbox then all the data cells with comments will be included in the logs during export")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Sample Audit report")),(0,a.kt)("p",null,"The report is generated by clicking on Export. "),(0,a.kt)("p",null,"The downloaded file appears in the download section. The file downloads in CSV format"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Screenshot 2022-11-01 at 10.10.57 AM.png",src:n(35904).Z})))}s.isMDXComponent=!0},35904:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/CSVsamplesheet-c941cb55bb69d7516a0c1ee2eb47f873.png"},36152:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/auditlogpanel-ea6c571d6d6322dda0bf105583549a7d.png"},35773:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/audittool-f5d943dcd05655e194b07bcf77db8f7e.png"}}]);