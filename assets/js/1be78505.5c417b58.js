"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[9514,6035],{3616:function(e,t,a){a.r(t),a.d(t,{default:function(){return re}});var n=a(7294),r=a(3905),i=a(2263),l=a(6291),o=a(5421),c=a(2122),s=a(9756),u=a(6010),d=a(6700),m=a(944),b=a(1839),p=a(3783),h=a(7898),f=a(6742),v=a(3919),E=a(5537),g=function(e){return n.createElement("svg",(0,c.Z)({width:"20",height:"20",role:"img"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},_=a(4478),k=a(4973),C="sidebar_15mo",N="sidebarWithHideableNavbar_267A",Z="sidebarHidden_2kNb",S="sidebarLogo_3h0W",I="menu_Bmed",x="menuLinkText_2aKo",y="menuWithAnnouncementBar_2WvA",B="collapseSidebarButton_1CGd",T="collapseSidebarButtonIcon_3E-R",w="sidebarMenuIcon_fgN0",R="sidebarMenuCloseIcon_1lpH",A="menuLinkExternal_1OhN",P=["items"],M=["item","onItemClick","collapsible","activePath"],L=["item","onItemClick","activePath","collapsible"];var D=function e(t,a){return"link"===t.type?(0,d.Mg)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))},H=(0,n.memo)((function(e){var t=e.items,a=(0,s.Z)(e,P);return t.map((function(e,t){return n.createElement(F,(0,c.Z)({key:t,item:e},a))}))}));function F(e){switch(e.item.type){case"category":return n.createElement(O,e);case"link":default:return n.createElement(W,e)}}function O(e){var t,a,r,i=e.item,l=e.onItemClick,o=e.collapsible,d=e.activePath,m=(0,s.Z)(e,M),b=i.items,p=i.label,h=D(i,d),f=(a=h,r=(0,n.useRef)(a),(0,n.useEffect)((function(){r.current=a}),[a]),r.current),v=(0,n.useState)((function(){return!!o&&(!h&&i.collapsed)})),E=v[0],g=v[1],_=(0,n.useRef)(null),k=(0,n.useState)(void 0),C=k[0],N=k[1],Z=function(e){var t;void 0===e&&(e=!0),N(e?(null==(t=_.current)?void 0:t.scrollHeight)+"px":void 0)};(0,n.useEffect)((function(){h&&!f&&E&&g(!1)}),[h,f,E]);var S=(0,n.useCallback)((function(e){e.preventDefault(),C||Z(),setTimeout((function(){return g((function(e){return!e}))}),100)}),[C]);return 0===b.length?null:n.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":E})},n.createElement("a",(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--sublist":o,"menu__link--active":o&&h},t[x]=!o,t)),onClick:o?S:void 0,href:o?"#!":void 0},m),p),n.createElement("ul",{className:"menu__list",ref:_,style:{height:C},onTransitionEnd:function(){E||Z(!1)}},n.createElement(H,{items:b,tabIndex:E?"-1":"0",onItemClick:l,collapsible:o,activePath:d})))}function W(e){var t,a=e.item,r=e.onItemClick,i=e.activePath,l=(e.collapsible,(0,s.Z)(e,L)),o=a.href,d=a.label,m=D(a,i);return n.createElement("li",{className:"menu__list-item",key:d},n.createElement(f.Z,(0,c.Z)({className:(0,u.Z)("menu__link",(t={"menu__link--active":m},t[A]=!(0,v.Z)(o),t)),to:o},(0,v.Z)(o)&&{isNavLink:!0,exact:!0,onClick:r},l),d))}function K(e){var t=e.onClick;return n.createElement("button",{type:"button",title:(0,k.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",B),onClick:t},n.createElement(g,{className:T}))}function U(e){var t=e.responsiveSidebarOpened,a=e.onClick;return n.createElement("button",{"aria-label":t?(0,k.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,k.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:a},t?n.createElement("span",{className:(0,u.Z)(w,R)},"\xd7"):n.createElement(_.Z,{className:w,height:24,width:24}))}var j=function(e){var t,a,r=e.path,i=e.sidebar,l=e.sidebarCollapsible,o=void 0===l||l,c=e.onCollapse,s=e.isHidden,f=function(){var e=(0,m.Z)().isAnnouncementBarClosed,t=(0,n.useState)(!e),a=t[0],r=t[1];return(0,h.Z)((function(t){var a=t.scrollY;e||r(0===a)})),a}(),v=(0,d.LU)(),g=v.navbar.hideOnScroll,_=v.hideableSidebar,k=(0,m.Z)().isAnnouncementBarClosed,x=function(){var e=(0,n.useState)(!1),t=e[0],a=e[1];(0,b.Z)(t);var r=(0,p.Z)();return(0,n.useEffect)((function(){r===p.D.desktop&&a(!1)}),[r]),{showResponsiveSidebar:t,closeResponsiveSidebar:(0,n.useCallback)((function(e){e.target.blur(),a(!1)}),[a]),toggleResponsiveSidebar:(0,n.useCallback)((function(){a((function(e){return!e}))}),[a])}}(),B=x.showResponsiveSidebar,T=x.closeResponsiveSidebar,w=x.toggleResponsiveSidebar;return n.createElement("div",{className:(0,u.Z)(C,(t={},t[N]=g,t[Z]=s,t))},g&&n.createElement(E.Z,{tabIndex:-1,className:S}),n.createElement("div",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",I,(a={"menu--show":B},a[y]=!k&&f,a))},n.createElement(U,{responsiveSidebarOpened:B,onClick:w}),n.createElement("ul",{className:"menu__list"},n.createElement(H,{items:i,onItemClick:T,collapsible:o,activePath:r}))),_&&n.createElement(K,{onClick:c}))},z=a(3541),J=a(4608),Y=a(5977),G="docPage_31aa",Q="docMainContainer_3ufF",X="docMainContainerEnhanced_3NYZ",q="docSidebarContainer_3Kbt",V="docSidebarContainerHidden_3pA8",$="collapsedDocSidebar_2JMH",ee="expandSidebarButtonIcon_1naQ",te="docItemWrapperEnhanced_2vyJ",ae="docItemWrapper_3FMP";function ne(e){var t,a,l,c,s,m=e.currentDocRoute,b=e.versionMetadata,p=e.children,h=(0,i.default)(),f=h.siteConfig,v=h.isClient,E=b.pluginId,_=b.permalinkToSidebar,C=b.docsSidebars,N=b.version,Z=_[m.path],S=C[Z],I=(0,n.useState)(!1),x=I[0],y=I[1],B=(0,n.useState)(!1),T=B[0],w=B[1],R=(0,n.useCallback)((function(){T&&w(!1),y(!x)}),[T]);return n.createElement(o.Z,{key:v,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:N,tag:(0,d.os)(E,N)}},n.createElement("div",{className:G},S&&n.createElement("div",{className:(0,u.Z)(q,(t={},t[V]=x,t)),onTransitionEnd:function(e){e.currentTarget.classList.contains(q)&&x&&w(!0)},role:"complementary"},n.createElement(j,{key:Z,sidebar:S,path:m.path,sidebarCollapsible:null==(a=null==(l=f.themeConfig)?void 0:l.sidebarCollapsible)||a,onCollapse:R,isHidden:T}),T&&n.createElement("div",{className:$,title:(0,k.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,k.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:R,onClick:R},n.createElement(g,{className:ee}))),n.createElement("main",{className:(0,u.Z)(Q,(c={},c[X]=x||!S,c))},n.createElement("div",{className:(0,u.Z)("container padding-vert--lg",ae,(s={},s[te]=x,s))},n.createElement(r.Zo,{components:z.Z},p)))))}var re=function(e){var t=e.route.routes,a=e.versionMetadata,r=e.location,i=t.find((function(e){return(0,Y.LX)(r.pathname,e)}));return i?n.createElement(ne,{currentDocRoute:i,versionMetadata:a},(0,l.Z)(t)):n.createElement(J.default,e)}},4608:function(e,t,a){a.r(t);var n=a(7294),r=a(5421),i=a(4973);t.default=function(){return n.createElement(r.Z,{title:"Page Not Found"},n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(i.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(i.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(i.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},6979:function(e,t,a){var n=a(7294),r=a(4184),i=a.n(r),l=a(5977),o=a(2263),c=a(8084);t.Z=function(e){var t=(0,n.useRef)(!1),r=(0,n.useRef)(null),s=(0,l.k6)(),u=(0,o.default)().siteConfig,d=(void 0===u?{}:u).baseUrl,m=(0,c.usePluginData)("docusaurus-lunr-search"),b=function(){t.current||(Promise.all([fetch(""+d+m.fileNames.searchDoc).then((function(e){return e.json()})),fetch(""+d+m.fileNames.lunrIndex).then((function(e){return e.json()})),Promise.all([a.e(9878),a.e(4452)]).then(a.bind(a,7780)),Promise.all([a.e(532),a.e(3343)]).then(a.bind(a,3343))]).then((function(e){var t=e[0],a=e[1],n=e[2].default;0!==t.length&&function(e,t,a){new a({searchDocs:e,searchIndex:t,inputSelector:"#search_input_react",handleSelected:function(e,t,a){var n=d+a.url;document.createElement("a").href=n,s.push(n)}})}(t,a,n)})),t.current=!0)},p=(0,n.useCallback)((function(t){r.current.contains(t.target)||r.current.focus(),e.handleSearchBarToggle&&e.handleSearchBarToggle(!e.isSearchBarExpanded)}),[e.isSearchBarExpanded]);return n.createElement("div",{className:"navbar__search",key:"search-box"},n.createElement("span",{"aria-label":"expand searchbar",role:"button",className:i()("search-icon",{"search-icon-hidden":e.isSearchBarExpanded}),onClick:p,onKeyDown:p,tabIndex:0}),n.createElement("input",{id:"search_input_react",type:"search",placeholder:"Search","aria-label":"Search",className:i()("navbar__search-input",{"search-bar-expanded":e.isSearchBarExpanded},{"search-bar":!e.isSearchBarExpanded}),onClick:b,onMouseOver:b,onFocus:p,onBlur:p,ref:r}))}}}]);