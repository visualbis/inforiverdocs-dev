"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[9514,6035],{63616:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ee});var n=a(67294),l=a(3905),r=a(52263),s=a(46291),o=a(64543),i=a(87462),c=a(86010),d=a(86700),u=a(80944),m=a(31839),b=a(93783),p=a(77898),h=a(36742),f=a(13919),E=a(55537);const v=e=>n.createElement("svg",(0,i.Z)({width:"20",height:"20",role:"img"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})));var g=a(84478),_=a(24973);const k="sidebar_15mo",C="sidebarWithHideableNavbar_267A",N="sidebarHidden_2kNb",S="sidebarLogo_3h0W",Z="menu_Bmed",I="menuLinkText_2aKo",x="menuWithAnnouncementBar_2WvA",y="collapseSidebarButton_1CGd",B="collapseSidebarButtonIcon_3E-R",T="sidebarMenuIcon_fgN0",R="sidebarMenuCloseIcon_1lpH",w="menuLinkExternal_1OhN";const A=(e,t)=>"link"===e.type?(0,d.Mg)(e.href,t):"category"===e.type&&e.items.some((e=>A(e,t))),M=(0,n.memo)((function(e){let{items:t,...a}=e;return t.map(((e,t)=>n.createElement(P,(0,i.Z)({key:t,item:e},a))))}));function P(e){return"category"===e.item.type?n.createElement(L,e):n.createElement(D,e)}function L(e){let{item:t,onItemClick:a,collapsible:l,activePath:r,...s}=e;const{items:o,label:d}=t,u=A(t,r),m=function(e){const t=(0,n.useRef)(e);return(0,n.useEffect)((()=>{t.current=e}),[e]),t.current}(u),[b,p]=(0,n.useState)((()=>!!l&&(!u&&t.collapsed))),h=(0,n.useRef)(null),[f,E]=(0,n.useState)(void 0),v=function(e){var t;void 0===e&&(e=!0),E(e?`${null==(t=h.current)?void 0:t.scrollHeight}px`:void 0)};(0,n.useEffect)((()=>{u&&!m&&b&&p(!1)}),[u,m,b]);const g=(0,n.useCallback)((e=>{e.preventDefault(),f||v(),setTimeout((()=>p((e=>!e))),100)}),[f]);return 0===o.length?null:n.createElement("li",{className:(0,c.Z)("menu__list-item",{"menu__list-item--collapsed":b})},n.createElement("a",(0,i.Z)({className:(0,c.Z)("menu__link",{"menu__link--sublist":l,"menu__link--active":l&&u,[I]:!l}),onClick:l?g:void 0,href:l?"#!":void 0},s),d),n.createElement("ul",{className:"menu__list",ref:h,style:{height:f},onTransitionEnd:()=>{b||v(!1)}},n.createElement(M,{items:o,tabIndex:b?"-1":"0",onItemClick:a,collapsible:l,activePath:r})))}function D(e){let{item:t,onItemClick:a,activePath:l,collapsible:r,...s}=e;const{href:o,label:d}=t,u=A(t,l);return n.createElement("li",{className:"menu__list-item",key:d},n.createElement(h.Z,(0,i.Z)({className:(0,c.Z)("menu__link",{"menu__link--active":u,[w]:!(0,f.Z)(o)}),to:o},(0,f.Z)(o)&&{isNavLink:!0,exact:!0,onClick:a},s),d))}function H(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,_.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,c.Z)("button button--secondary button--outline",y),onClick:t},n.createElement(v,{className:B}))}function F(e){let{responsiveSidebarOpened:t,onClick:a}=e;return n.createElement("button",{"aria-label":t?(0,_.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,_.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,c.Z)(T,R)},"\xd7"):n.createElement(g.Z,{className:T,height:24,width:24}))}const O=function(e){let{path:t,sidebar:a,sidebarCollapsible:l=!0,onCollapse:r,isHidden:s}=e;const o=function(){const{isAnnouncementBarClosed:e}=(0,u.Z)(),[t,a]=(0,n.useState)(!e);return(0,p.Z)((t=>{let{scrollY:n}=t;e||a(0===n)})),t}(),{navbar:{hideOnScroll:i},hideableSidebar:h}=(0,d.LU)(),{isAnnouncementBarClosed:f}=(0,u.Z)(),{showResponsiveSidebar:v,closeResponsiveSidebar:g,toggleResponsiveSidebar:_}=function(){const[e,t]=(0,n.useState)(!1);(0,m.Z)(e);const a=(0,b.Z)();return(0,n.useEffect)((()=>{a===b.D.desktop&&t(!1)}),[a]),{showResponsiveSidebar:e,closeResponsiveSidebar:(0,n.useCallback)((e=>{e.target.blur(),t(!1)}),[t]),toggleResponsiveSidebar:(0,n.useCallback)((()=>{t((e=>!e))}),[t])}}();return n.createElement("div",{className:(0,c.Z)(k,{[C]:i,[N]:s})},i&&n.createElement(E.Z,{tabIndex:-1,className:S}),n.createElement("div",{className:(0,c.Z)("menu","menu--responsive","thin-scrollbar",Z,{"menu--show":v,[x]:!f&&o})},n.createElement(F,{responsiveSidebarOpened:v,onClick:_}),n.createElement("ul",{className:"menu__list"},n.createElement(M,{items:a,onItemClick:g,collapsible:l,activePath:t}))),h&&n.createElement(H,{onClick:r}))};var W=a(44927),$=a(24608),K=a(5977);const U="docPage_31aa",j="docMainContainer_3ufF",z="docMainContainerEnhanced_3NYZ",J="docSidebarContainer_3Kbt",Y="docSidebarContainerHidden_3pA8",G="collapsedDocSidebar_2JMH",Q="expandSidebarButtonIcon_1naQ",X="docItemWrapperEnhanced_2vyJ",q="docItemWrapper_3FMP";function V(e){var t;let{currentDocRoute:a,versionMetadata:s,children:i}=e;const{siteConfig:u,isClient:m}=(0,r.default)(),{pluginId:b,permalinkToSidebar:p,docsSidebars:h,version:f}=s,E=p[a.path],g=h[E],[k,C]=(0,n.useState)(!1),[N,S]=(0,n.useState)(!1),Z=(0,n.useCallback)((()=>{N&&S(!1),C(!k)}),[N]);return n.createElement(o.Z,{key:m,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:f,tag:(0,d.os)(b,f)}},n.createElement("div",{className:U},g&&n.createElement("div",{className:(0,c.Z)(J,{[Y]:k}),onTransitionEnd:e=>{e.currentTarget.classList.contains(J)&&k&&S(!0)},role:"complementary"},n.createElement(O,{key:E,sidebar:g,path:a.path,sidebarCollapsible:(null==(t=u.themeConfig)?void 0:t.sidebarCollapsible)??!0,onCollapse:Z,isHidden:N}),N&&n.createElement("div",{className:G,title:(0,_.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,_.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:Z,onClick:Z},n.createElement(v,{className:Q}))),n.createElement("main",{className:(0,c.Z)(j,{[z]:k||!g})},n.createElement("div",{className:(0,c.Z)("container padding-vert--lg",q,{[X]:k})},n.createElement(l.Zo,{components:W.Z},i)))))}const ee=function(e){const{route:{routes:t},versionMetadata:a,location:l}=e,r=t.find((e=>(0,K.LX)(l.pathname,e)));return r?n.createElement(V,{currentDocRoute:r,versionMetadata:a},(0,s.Z)(t)):n.createElement($.default,e)}},24608:(e,t,a)=>{a.r(t),a.d(t,{default:()=>s});var n=a(67294),l=a(64543),r=a(24973);const s=function(){return n.createElement(l.Z,{title:"Page Not Found"},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},6979:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),l=a(94184),r=a.n(l),s=a(5977),o=a(52263),i=a(28084);const c=e=>{const t=(0,n.useRef)(!1),l=(0,n.useRef)(null),c=(0,s.k6)(),{siteConfig:d={}}=(0,o.default)(),{baseUrl:u}=d,m=(0,i.usePluginData)("docusaurus-lunr-search"),b=()=>{t.current||(Promise.all([fetch(`${u}${m.fileNames.searchDoc}`).then((e=>e.json())),fetch(`${u}${m.fileNames.lunrIndex}`).then((e=>e.json())),Promise.all([a.e(9878),a.e(4452)]).then(a.bind(a,57780)),Promise.all([a.e(532),a.e(3343)]).then(a.bind(a,53343))]).then((e=>{let[t,a,{default:n}]=e;0!==t.length&&((e,t,a)=>{new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:(e,t,a)=>{const n=u+a.url;document.createElement("a").href=n,c.push(n)}})})(t,a,n)})),t.current=!0)},p=(0,n.useCallback)((t=>{l.current.contains(t.target)||l.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.createElement("div",{className:"navbar__search",key:"search-box"},n.createElement("span",{"aria-label":"expand searchbar",role:"button",className:r()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),n.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:r()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:b,onMouseOver:b,onFocus:p,onBlur:p,ref:l}))}}}]);