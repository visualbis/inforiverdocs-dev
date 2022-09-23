"use strict";(self.webpackChunkinforiver=self.webpackChunkinforiver||[]).push([[68],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),k=c(a),u=i,m=k["".concat(l,".").concat(u)]||k[u]||d[u]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=k;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var c=2;c<r;c++)s[c]=a[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},15407:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>o});var n=a(87462),i=(a(67294),a(3905));const r={title:"Writeback",sidebar_position:2,slug:"Writeback"},s={unversionedId:"enterprise/Writeback",id:"enterprise/Writeback",isDocsHomePage:!1,title:"Writeback",description:"Last Edited Time52 PM",source:"@site/docs/enterprise/Writeback.md",sourceDirName:"enterprise",slug:"/enterprise/Writeback",permalink:"/enterprise/Writeback",version:"current",sidebarPosition:2,frontMatter:{title:"Writeback",sidebar_position:2,slug:"Writeback"},sidebar:"Enterprise",previous:{title:"Themes",permalink:"/enterprise/Themes"}},o=[{value:"Configure Writeback",id:"configure-writeback",children:[]},{value:"Scenario",id:"scenario",children:[{value:"Create Scenario",id:"create-scenario",children:[]}]},{value:"Writeback Settings",id:"writeback-settings",children:[]},{value:"Writeback Destination",id:"writeback-destination",children:[]},{value:"Writeback Logs",id:"writeback-logs",children:[{value:"Following are the columns in the export format:",id:"following-are-the-columns-in-the-export-format",children:[]}]},{value:"Writeback in Read Mode",id:"writeback-in-read-mode",children:[]},{value:"Troubleshooting",id:"troubleshooting",children:[]}],l={toc:o};function c(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Last Edited Time: September 21, 2022 6:52 PM"),(0,i.kt)("h1",{id:"1-overview"},"1. Overview"),(0,i.kt)("p",null,"Writeback allows data from Inforiver Visual to be sent to multiple destinations. Data can either be exported as a file in CSV\xa0format or loaded into a database table."),(0,i.kt)("aside",null,"\ud83d\udca1 Writeback is an add-on service that is available only on the Inforiver\u2019s Enterprise edition."),(0,i.kt)("h3",{id:"configure-writeback"},"Configure Writeback"),(0,i.kt)("aside",null,"\ud83d\udca1 To configure the Writeback with Inforiver, you must be the report's owner and must open the report in edit mode in Power BI."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the ",(0,i.kt)("strong",{parentName:"p"},"Export")," tab from the top ribbon bar.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"From the\xa0",(0,i.kt)("strong",{parentName:"p"},"Writeback"),"\xa0section, select\xa0Writeback."),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Log in using your ",(0,i.kt)("strong",{parentName:"li"},"Office 365")," to configure writeback. "),(0,i.kt)("li",{parentName:"ol"},"Once you log in, select\xa0",(0,i.kt)("strong",{parentName:"li"},"Export > Writeback"),"\xa0again and now select\xa0",(0,i.kt)("strong",{parentName:"li"},"Configure Writeback"),"\xa0for first-time configurations.")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Fig Writeback (W)",src:a(23994).Z})),(0,i.kt)("p",{parentName:"li"},"Fig Writeback (W)"))),(0,i.kt)("p",null,"Along with Writeback tab, settings and logs are available "),(0,i.kt)("aside",null,"\ud83d\udca1 The writeback tab is visible only if users have access or they are added to a particular tenant."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"This Pop- up appears automatically once users sign in","  ",(0,i.kt)("img",{alt:"Screenshot 2022-08-25 at 9.25.16 AM.png",src:a(75982).Z})),(0,i.kt)("li",{parentName:"ul"},"Once successful sign in you can view the destination configuration, click on Continue","  ",(0,i.kt)("img",{alt:"Fig W 1.1",src:a(5470).Z}),"  Fig W 1.1\n"),(0,i.kt)("li",{parentName:"ul"},"Since there will be no configuration settings done for the first time, the user receives the above message."),(0,i.kt)("li",{parentName:"ul"},"Click on Continue and it will open the Writeback App. Select the New Destination button on the top right.","  ",(0,i.kt)("img",{alt:"Untitled",src:a(89816).Z}))),(0,i.kt)("p",null,"Scenario based settings"),(0,i.kt)("h2",{id:"scenario"},"Scenario"),(0,i.kt)("p",null,"Scenarios can be created through this tab, where host can provide access or restrict access to users."),(0,i.kt)("h3",{id:"create-scenario"},"Create Scenario"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Scenario Name: Assign name for your created scenario, by default name is New Scenario"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Untitled",src:a(97751).Z})),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Select Series/Measure: select the measure from all the available options"),(0,i.kt)("li",{parentName:"ol"},"Permission: Access can be given to individual or group or all the users within the enterprise. Click on the radio button and then add the email Ids of the users to provide access"),(0,i.kt)("li",{parentName:"ol"},"By enabling the check box user can writeback in Reading mode"),(0,i.kt)("li",{parentName:"ol"},"Click on Create to save.")),(0,i.kt)("h3",{parentName:"li",id:"view-scenario"},"View Scenario"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Untitled",src:a(25206).Z})),(0,i.kt)("p",{parentName:"li"},"Scenario sections shows 4 options Upload on Cloud, Edit, Delete and Lock your scenario"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Upload on Cloud: This tab will take to the destination database page where user can select the destination for writeback"),(0,i.kt)("li",{parentName:"ul"},"Edit: This tab enables to edit the created scenarios."),(0,i.kt)("li",{parentName:"ul"},"Delete: clicking on this tab user can delete the scenario"),(0,i.kt)("li",{parentName:"ul"},"Lock: This tab locks the scenario and  user cannot writeback then."),(0,i.kt)("li",{parentName:"ul"},"Click on New scenario to add scenarios")),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"All series is a default scenario, which cannot be edited or deleted but it can be locked."))),(0,i.kt)("h3",{parentName:"li",id:"edit-scenario"},"Edit Scenario"),(0,i.kt)("p",{parentName:"li"},"To update already created scenario select the scenario name from the list and update."),(0,i.kt)("p",{parentName:"li"},"Click on Update to save the changes"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Untitled",src:a(82498).Z})))),(0,i.kt)("h2",{id:"writeback-settings"},"Writeback Settings"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Inforiver>Writeback>Settings")),(0,i.kt)("p",null,"This section provides various options to configure the settings required for the user to perform Writeback."),(0,i.kt)("p",null,"A pop up opens up on click of WriteBack as below. "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot 2022-09-21 at 4.28.54 PM.png",src:a(41684).Z})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fig W 2.1",src:a(99278).Z})),(0,i.kt)("p",null,"Fig W 2.1"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"General")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Series Configuration"),": Select visual series to be written back. User can either\xa0",(0,i.kt)("strong",{parentName:"li"},"Select All"),"\xa0or check to select individual series. Columns or series chosen for Writeback will be written back to the database, and the remaining series will not be written back."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Writeback only changes"),": Using this option, only changes to the data are pushed to the databases. By default, the entire dataset is written back to the database if this option is not enabled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Exclude Totals and Subtotals"),": When the cell values are updated Total and subtotal values also change. These values are visible in the final result only if this box is checked to ",(0,i.kt)("strong",{parentName:"li"},"YES")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Filter"),": Users have 3 options to display the result",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Data with comments only"),(0,i.kt)("li",{parentName:"ul"},"Calculated row only"),(0,i.kt)("li",{parentName:"ul"},"Users can also customise the filters")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Destination")," "),(0,i.kt)("p",null,"In the Destination section, the user can view all the destinations selected from the configuration tab."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fig W 2.2",src:a(30501).Z})),(0,i.kt)("p",null,"Fig W 2.2"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"All the database added along with the details including the table name can be viewed from this tab."),(0,i.kt)("li",{parentName:"ul"},"User/Admin with power bi report edit access can also add more destinations by clicking on Manage destinations .")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Others")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fig W 2.3",src:a(28277).Z})),(0,i.kt)("p",null,"Fig W 2.3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Here users can update the Webhooks URL from Teams"),(0,i.kt)("li",{parentName:"ul"},"Copy and Enter a URL")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Permission")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Select the user(s) who can Writeback from this report. Select all users in the domain or specify certain users from the same domain."),(0,i.kt)("li",{parentName:"ul"},"Click on ",(0,i.kt)("strong",{parentName:"li"},"SAVE")," to confirm")),(0,i.kt)("h2",{id:"writeback-destination"},"Writeback Destination"),(0,i.kt)("p",null,"Database destinations can be selected from the list provided. You can add the destinations"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot 2022-09-21 at 4.40.16 PM.png",src:a(83449).Z})),(0,i.kt)("p",null,"Add database from the list. Select the database. Click on continue."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Screenshot 2022-09-21 at 4.40.32 PM.png",src:a(3632).Z})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Available Destinations:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5"},"SQL Server"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5"},"OneDrive"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5"},"SharePoint"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5"},"MySQL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5"},"Snowflake"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5"},"BigQuery"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5"},"PostgreSQL"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://www.notion.so/Destination-Types-and-Details-0de3de92906741eaa83a91ad6d7936f5"},"SAP HANA")))),(0,i.kt)("aside",null,"\ud83d\udca1 If users need to add any other destination, reach out to our support team"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users can select the destination from the available list and provide the required details"),(0,i.kt)("li",{parentName:"ul"},"The table name is user-specific and unique for the database. (table name must be without space)")),(0,i.kt)("aside",null,"\ud83d\udca1 Users can update only values and not the dimension members."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Sample Destination Added - Snowflake and Azure SQL")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fig W 1.3",src:a(19554).Z})),(0,i.kt)("p",null,"Fig W 1.3"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Clicking on ",(0,i.kt)("strong",{parentName:"li"},"Help")," user can view how to fill in the details for the selected database"),(0,i.kt)("li",{parentName:"ul"},"After filling in the details click on ",(0,i.kt)("strong",{parentName:"li"},"Save Destination")," to confirm."),(0,i.kt)("li",{parentName:"ul"},"Users can also configure multiple destinations for the same database.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("em",{parentName:"p"},"Enable collaboration is available only for the reading mode."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fig W 1.4",src:a(87203).Z})),(0,i.kt)("p",null,"Fig W 1.4"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Users can add more than one destination either from the same or different databases.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Click on Add destination"),(0,i.kt)("li",{parentName:"ul"},"Select from the list again and enter the details"))),(0,i.kt)("li",{parentName:"ul"},"Users can use tools for editing and deleting the selected database","  ",(0,i.kt)("img",{alt:"Fig W 1.5",src:a(42400).Z}),"  Fig W 1.5\n"),(0,i.kt)("li",{parentName:"ul"},"After the database is saved user can again click on the Writeback in Powerbi.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fig W 1.6",src:a(38868).Z})),(0,i.kt)("p",null,"Fig W 1.6"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Series"),": The columns added in the visuals are listed here. Visual series to be exported. Users can either\xa0",(0,i.kt)("strong",{parentName:"p"},"Select All"),"\xa0or check to select individual series. "),(0,i.kt)("p",{parentName:"li"},"There are 2 types of Writeback versions available "),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Users can update the new content on the existing file, version number remains the same."),(0,i.kt)("li",{parentName:"ol"},"Users can also create a new file with updates, the version number is updated every time a new file is created"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Destination"),": The databases added from the configuration page will be visible here. The user can choose the destination(s) for the write-back of the data by checking the box on that destination.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Settings"),": the current applied setting is visible from here. which shows the selections of what to include in the Writeback, changes, totals, filters etc. "))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Click on the Writeback tab to start the process of Writeback."),(0,i.kt)("li",{parentName:"ul"},"Click on Cancel to close the popup window with no action.")),(0,i.kt)("aside",null,"\ud83d\udca1 Updated data is shown only on the visual until the user performs a Writeback to the destination."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fig W 1.7",src:a(91654).Z})),(0,i.kt)("p",null,"Fig W 1.7"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The logs tab displays the history of Writeback jobs performed"),(0,i.kt)("li",{parentName:"ul"},"Click on the number ID to view all the below details","  ",(0,i.kt)("img",{alt:"Fig W 1.8",src:a(46801).Z}),"  Fig W 1.8\n"),(0,i.kt)("li",{parentName:"ul"},"Click on the Report name to view the sheet in power bi with updated values.")),(0,i.kt)("h2",{id:"writeback-logs"},"Writeback Logs"),(0,i.kt)("p",null,"Go to the Writeback Logs to access the config setup."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fig W 3.1",src:a(8024).Z})),(0,i.kt)("p",null,"Fig W 3.1"),(0,i.kt)("p",null,"For each Writeback operation that users perform, the logs are maintained in the\xa0",(0,i.kt)("strong",{parentName:"p"},"Logs"),"\xa0section with the following details:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the Logs section, users can view the history of all the Writeback performed and their status"),(0,i.kt)("li",{parentName:"ul"},"Clicking on the Logs, users will be redirected to the Logs tab in write back portal"),(0,i.kt)("li",{parentName:"ul"},"Click on the ID and users can view details about the particular Writeback action performed")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Writeback Logs")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Version"),": Latest Writeback version."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Started At"),": Timestamp of when the Writeback was triggered."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Started By"),": Name of the username who triggered Writeback."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Status"),": Status of the Writeback operation. The status message may be 'Success', 'Failure', or 'Partial Success' (when one of the destinations failed). If user has clicked on ",(0,i.kt)("strong",{parentName:"li"},"Run Now")," - Queued option is also available")),(0,i.kt)("p",null,"Select any of the version numbers to see the detailed logs for each Writeback destination configured."),(0,i.kt)("h3",{id:"following-are-the-columns-in-the-export-format"},"Following are the columns in the export format:"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(32018).Z},"Writeback export format (2)")),(0,i.kt)("h2",{id:"writeback-in-read-mode"},"Writeback in Read Mode"),(0,i.kt)("p",null,"When users want to perform writeback from the reading view of the report for data consolidation/capture, follow the below steps.  Inforiver Writeback configuration for Reading Mode involves a few additional steps apart from setting up Destination."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Configure Writeback destination:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select a database destination type that supports DirectQuery Mode in Power BI. At present, we recommend using the Azure SQL database for performing Writeback in reading mode.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When creating the scenario if owner has given access in the reading mode then user can perform writeback in reading mode also."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Untitled",src:a(65298).Z})),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"In Reading mode user can add")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Enable the Series for Writeback in Read mode:")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now, navigate to Writeback settings, and under the Collaboration tab, choose the series that needs to be enabled for Writeback in reading mode.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Publish the report to Power BI Service.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Now, if users open the same report using Power BI Service, there is a possibility that you may face a Gateway error. Users need to navigate to the Settings section of the Dataset and add the required gateways.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"As we are all set now, users who have access to this report, need to sign in to inforiver visual and would be able to edit the data in reading mode successfully by double-clicking on a cell.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Once the data is edited, you can navigate to the Export tab and click on the Writeback icon to perform the operation in Full Mode or click on the Save button in Minimal mode."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"Untitled",src:a(48041).Z})))),(0,i.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"If the user is not a part of the Workspace or Tenant then that user will not be able to log in - Users should get connected with Admin for the resolution ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fig W 5.1",src:a(51313).Z})),(0,i.kt)("p",null,"Fig W 5.1"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"In the Read Mode: If users need other visuals to refresh on data update, they can set up the page refresh on the report and select refresh mode as change detection based on the IR_Timestamp column for the desired refresh interval (say 5-10 secs)")))}c.isMDXComponent=!0},32018:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/Write21-d2f98d123a98dde28f11b1417ebd22e5.png"},23994:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write1-18b20574352f06b5a910d2fac75030f3.png"},30501:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write10-12fae6a35b9faaf75f95ae502885b11f.png"},28277:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write11-7890c33a58e8f303ac9faca98d672ed4.png"},83449:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write12-e72c588db85b0a93387678a5930e0c72.png"},3632:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write13-70a45f1e0c00eb584821c0383b9c0786.png"},19554:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write14-347cd26fac8a2135769d8e3374380784.png"},87203:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write15-c45cd90304d59d943dcc7cb5902aaeb2.png"},42400:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write16-13e1a4edcda680bdccc831c921f3bb87.png"},38868:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write17-b5133a0896aa764df239c7cc1e8cd4cc.png"},91654:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write18-5f01f8216e8c7d224d136ec6e322e980.png"},46801:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write19-b866fe32f0a1bcc5014934326c76e668.png"},75982:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write2-3072a597b060f5a1baaba5ad164fb8f6.png"},8024:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write20-7f98093e1d3cbdd73738cd076db0751e.png"},65298:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write22-848faddabcc46c358849e1ef0cf7d129.png"},48041:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write23-e933b1fe980e4162836a22f653855718.png"},51313:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write24-01d883c167254d00054e07dc346d5f2b.png"},5470:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write3-d72e1799f1f6a4ba4b02fbfb558a4cd1.png"},89816:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write4-5439f82522f39823d4d710f661846284.png"},97751:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write5-a7f95f6a2f5d73f6782be37bed98aae5.png"},25206:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write6-a6062e8c986388e63ef784f7c422ca62.png"},82498:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write7-abff3c93c8f081fa2b74d65f4ef5f927.png"},41684:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write8-387bda02b4350ebe466f3ebc309859e7.png"},99278:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/Write9-f3a6591e1c46cc5e8b94bbd7ba9236f4.png"}}]);