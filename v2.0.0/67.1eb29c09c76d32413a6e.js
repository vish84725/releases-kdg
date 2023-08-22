/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ^9.6.0, @magento/upward-security-headers: ~1.0.9, @magento/upward-js: ^5.3.2, @magento/pwa-theme-venia: ~1.3.0, @magento/pwa-buildpack: ^11.4.0, @magento/peregrine: ^12.5.1, @magento/pagebuilder: ^7.4.1, @magento/eslint-config: ^1.5.3, @magento/babel-preset-peregrine: ~1.2.1, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{BkQx:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return I})
var a=n("pVnL"),r=n.n(a),o=n("lSNA"),s=n.n(o),i=n("q1tI"),l=n.n(i)
function makeTypeChecker(e){return function(t){return!!t.type&&t.type.tabsRole===e}}var c=makeTypeChecker("Tab"),d=makeTypeChecker("TabList"),b=makeTypeChecker("TabPanel")
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function deepMap(e,t){return i.Children.map(e,function(e){return null===e?null:function isTabChild(e){return c(e)||d(e)||b(e)}(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children?Object(i.cloneElement)(e,_objectSpread(_objectSpread({},e.props),{},{children:deepMap(e.props.children,t)})):e})}function deepForEach(e,t){return i.Children.forEach(e,function(e){null!==e&&(c(e)||b(e)?t(e):e.props&&e.props.children&&"object"==typeof e.props.children&&(d(e)&&t(e),deepForEach(e.props.children,t)))})}var u,p=n("iuhU"),f=0
function uuid(){return"react-tabs-"+f++}function count_getTabsCount(e){var t=0
return deepForEach(e,function(e){c(e)&&t++}),t}function _extends(){return(_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function isNode(e){return e&&"getAttribute"in e}function isTabNode(e){return isNode(e)&&"tab"===e.getAttribute("role")}function isTabDisabled(e){return isNode(e)&&"true"===e.getAttribute("aria-disabled")}try{u=!("undefined"==typeof window||!window.document||!window.document.activeElement)}catch(e){u=!1}var g=function(e){function UncontrolledTabs(){for(var t,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r]
return(t=e.call.apply(e,[this].concat(a))||this).tabNodes=[],t.handleKeyDown=function(e){var n=t.props.direction
if(t.isTabFromContainer(e.target)){var a=t.props.selectedIndex,r=!1,o=!1
32!==e.keyCode&&13!==e.keyCode||(r=!0,o=!1,t.handleClick(e)),37===e.keyCode||38===e.keyCode?(a="rtl"===n?t.getNextTab(a):t.getPrevTab(a),r=!0,o=!0):39===e.keyCode||40===e.keyCode?(a="rtl"===n?t.getPrevTab(a):t.getNextTab(a),r=!0,o=!0):35===e.keyCode?(a=t.getLastTab(),r=!0,o=!0):36===e.keyCode&&(a=t.getFirstTab(),r=!0,o=!0),r&&e.preventDefault(),o&&t.setSelected(a,e)}},t.handleClick=function(e){var n=e.target
do{if(t.isTabFromContainer(n)){if(isTabDisabled(n))return
var a=[].slice.call(n.parentNode.children).filter(isTabNode).indexOf(n)
return void t.setSelected(a,e)}}while(null!=(n=n.parentNode))},t}!function _inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(UncontrolledTabs,e)
var t=UncontrolledTabs.prototype
return t.setSelected=function setSelected(e,t){if(!(e<0||e>=this.getTabsCount())){var n=this.props;(0,n.onSelect)(e,n.selectedIndex,t)}},t.getNextTab=function getNextTab(e){for(var t=this.getTabsCount(),n=e+1;n<t;n++)if(!isTabDisabled(this.getTab(n)))return n
for(var a=0;a<e;a++)if(!isTabDisabled(this.getTab(a)))return a
return e},t.getPrevTab=function getPrevTab(e){for(var t=e;t--;)if(!isTabDisabled(this.getTab(t)))return t
for(t=this.getTabsCount();t-- >e;)if(!isTabDisabled(this.getTab(t)))return t
return e},t.getFirstTab=function getFirstTab(){for(var e=this.getTabsCount(),t=0;t<e;t++)if(!isTabDisabled(this.getTab(t)))return t
return null},t.getLastTab=function getLastTab(){for(var e=this.getTabsCount();e--;)if(!isTabDisabled(this.getTab(e)))return e
return null},t.getTabsCount=function getTabsCount(){return count_getTabsCount(this.props.children)},t.getPanelsCount=function getPanelsCount(){return function count_getPanelsCount(e){var t=0
return deepForEach(e,function(e){b(e)&&t++}),t}(this.props.children)},t.getTab=function getTab(e){return this.tabNodes["tabs-"+e]},t.getChildren=function getChildren(){var e=this,t=0,n=this.props,a=n.children,r=n.disabledTabClassName,o=n.focus,s=n.forceRenderTabPanel,p=n.selectedIndex,f=n.selectedTabClassName,g=n.selectedTabPanelClassName
this.tabIds=this.tabIds||[],this.panelIds=this.panelIds||[]
for(var h=this.tabIds.length-this.getTabsCount();h++<0;)this.tabIds.push(uuid()),this.panelIds.push(uuid())
return deepMap(a,function(n){var a=n
if(d(n)){var h=0,m=!1
u&&(m=l.a.Children.toArray(n.props.children).filter(c).some(function(t,n){return document.activeElement===e.getTab(n)})),a=Object(i.cloneElement)(n,{children:deepMap(n.props.children,function(t){var n="tabs-"+h,a=p===h,s={tabRef:function tabRef(t){e.tabNodes[n]=t},id:e.tabIds[h],panelId:e.panelIds[h],selected:a,focus:a&&(o||m)}
return f&&(s.selectedClassName=f),r&&(s.disabledClassName=r),h++,Object(i.cloneElement)(t,s)})})}else if(b(n)){var v={id:e.panelIds[t],tabId:e.tabIds[t],selected:p===t}
s&&(v.forceRender=s),g&&(v.selectedClassName=g),t++,a=Object(i.cloneElement)(n,v)}return a})},t.isTabFromContainer=function isTabFromContainer(e){if(!isTabNode(e))return!1
var t=e.parentElement
do{if(t===this.node)return!0
if(t.getAttribute("data-tabs"))break
t=t.parentElement}while(t)
return!1},t.render=function render(){var e=this,t=this.props,n=(t.children,t.className),a=(t.disabledTabClassName,t.domRef),r=(t.focus,t.forceRenderTabPanel,t.onSelect,t.selectedIndex,t.selectedTabClassName,t.selectedTabPanelClassName,function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,a,r={},o=Object.keys(e)
for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n])
return r}(t,["children","className","disabledTabClassName","domRef","focus","forceRenderTabPanel","onSelect","selectedIndex","selectedTabClassName","selectedTabPanelClassName"]))
return l.a.createElement("div",_extends({},r,{className:Object(p.a)(n),onClick:this.handleClick,onKeyDown:this.handleKeyDown,ref:function ref(t){e.node=t,a&&a(t)},"data-tabs":!0}),this.getChildren())},UncontrolledTabs}(i.Component)
g.defaultProps={className:"react-tabs",focus:!1},g.propTypes={}
var h=1,m=function(e){function Tabs(t){var n
return(n=e.call(this,t)||this).handleSelected=function(e,t,a){var r=n.props.onSelect,o=n.state.mode
if("function"!=typeof r||!1!==r(e,t,a)){var s={focus:"keydown"===a.type}
o===h&&(s.selectedIndex=e),n.setState(s)}},n.state=Tabs.copyPropsToState(n.props,{},t.defaultFocus),n}return function Tabs_inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(Tabs,e),Tabs.getDerivedStateFromProps=function getDerivedStateFromProps(e,t){return Tabs.copyPropsToState(e,t)},Tabs.getModeFromProps=function getModeFromProps(e){return null===e.selectedIndex?h:0},Tabs.copyPropsToState=function copyPropsToState(e,t,n){void 0===n&&(n=!1)
var a={focus:n,mode:Tabs.getModeFromProps(e)}
if(a.mode===h){var r=count_getTabsCount(e.children)-1,o=null
o=null!=t.selectedIndex?Math.min(t.selectedIndex,r):e.defaultIndex||0,a.selectedIndex=o}return a},Tabs.prototype.render=function render(){var e=this.props,t=e.children,n=(e.defaultIndex,e.defaultFocus,function Tabs_objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,a,r={},o=Object.keys(e)
for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n])
return r}(e,["children","defaultIndex","defaultFocus"])),a=this.state,r=a.focus,o=a.selectedIndex
return n.focus=r,n.onSelect=this.handleSelected,null!=o&&(n.selectedIndex=o),l.a.createElement(g,n,t)},Tabs}(i.Component)
function TabList_extends(){return(TabList_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}m.defaultProps={defaultFocus:!1,forceRenderTabPanel:!1,selectedIndex:null,defaultIndex:null},m.propTypes={},m.tabsRole="Tabs"
var v=function(e){function TabList(){return e.apply(this,arguments)||this}return function TabList_inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(TabList,e),TabList.prototype.render=function render(){var e=this.props,t=e.children,n=e.className,a=function TabList_objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,a,r={},o=Object.keys(e)
for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n])
return r}(e,["children","className"])
return l.a.createElement("ul",TabList_extends({},a,{className:Object(p.a)(n),role:"tablist"}),t)},TabList}(i.Component)
function Tab_extends(){return(Tab_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}v.defaultProps={className:"react-tabs__tab-list"},v.propTypes={},v.tabsRole="TabList"
var y=function(e){function Tab(){return e.apply(this,arguments)||this}!function Tab_inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(Tab,e)
var t=Tab.prototype
return t.componentDidMount=function componentDidMount(){this.checkFocus()},t.componentDidUpdate=function componentDidUpdate(){this.checkFocus()},t.checkFocus=function checkFocus(){var e=this.props,t=e.selected,n=e.focus
t&&n&&this.node.focus()},t.render=function render(){var e,t=this,n=this.props,a=n.children,r=n.className,o=n.disabled,s=n.disabledClassName,i=(n.focus,n.id),c=n.panelId,d=n.selected,b=n.selectedClassName,u=n.tabIndex,f=n.tabRef,g=function Tab_objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,a,r={},o=Object.keys(e)
for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n])
return r}(n,["children","className","disabled","disabledClassName","focus","id","panelId","selected","selectedClassName","tabIndex","tabRef"])
return l.a.createElement("li",Tab_extends({},g,{className:Object(p.a)(r,(e={},e[b]=d,e[s]=o,e)),ref:function ref(e){t.node=e,f&&f(e)},role:"tab",id:i,"aria-selected":d?"true":"false","aria-disabled":o?"true":"false","aria-controls":c,tabIndex:u||(d?"0":null)}),a)},Tab}(i.Component)
function TabPanel_extends(){return(TabPanel_extends=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}y.defaultProps={className:"react-tabs__tab",disabledClassName:"react-tabs__tab--disabled",focus:!1,id:null,panelId:null,selected:!1,selectedClassName:"react-tabs__tab--selected"},y.propTypes={},y.tabsRole="Tab"
var T=function(e){function TabPanel(){return e.apply(this,arguments)||this}return function TabPanel_inheritsLoose(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}(TabPanel,e),TabPanel.prototype.render=function render(){var e,t=this.props,n=t.children,a=t.className,r=t.forceRender,o=t.id,s=t.selected,i=t.selectedClassName,c=t.tabId,d=function TabPanel_objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,a,r={},o=Object.keys(e)
for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n])
return r}(t,["children","className","forceRender","id","selected","selectedClassName","tabId"])
return l.a.createElement("div",TabPanel_extends({},d,{className:Object(p.a)(a,(e={},e[i]=s,e)),role:"tabpanel",id:o,"aria-labelledby":c}),r||s?n:null)},TabPanel}(i.Component)
T.defaultProps={className:"react-tabs__tab-panel",forceRender:!1,selectedClassName:"react-tabs__tab-panel--selected"},T.propTypes={},T.tabsRole="TabPanel"
var O=n("LboF"),C=n.n(O),j=n("TUNL"),x={injectType:"singletonStyleTag",insert:"head",singleton:!0},w=(C()(j.a,x),j.a.locals||{}),N=n("y1Xp"),P=n("OBO2"),_=n("17x9")
function tabs_ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
t&&(a=a.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,a)}return n}function tabs_objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?tabs_ownKeys(Object(n),!0).forEach(function(t){s()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):tabs_ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var k=e=>{if(e)return e.charAt(0).toUpperCase()+e.slice(1)},L=e=>{var t=Object(N.a)(w,e.classes),n=Object(i.useRef)(null),[a,o]=Object(i.useState)(null),[s,c]=Object(i.useState)(null),d=Object(i.useRef)(!1),b=Object(i.useRef)(0),u=Object(i.useRef)(0),{tabNavigationAlignment:p="left",minHeight:f,defaultIndex:g=0,headers:h=[],textAlign:O,border:C,borderColor:j,borderWidth:x,borderRadius:_,marginTop:L,marginRight:I,marginBottom:R,marginLeft:S,mediaQueries:E,paddingTop:F,paddingRight:D,paddingBottom:G,paddingLeft:M,cssClasses:K=[],children:U}=e,{styles:W}=Object(P.a)({mediaQueries:E}),B=Object(i.useCallback)(e=>{d.current=!0,b.current=e.clientX},[]),A=Object(i.useCallback)(()=>{d.current=!1},[]),Q=Object(i.useCallback)(e=>{d.current&&a&&(a.scrollLeft=u.current+(b.current-e.clientX),u.current=a.scrollLeft,b.current=e.clientX)},[a]),J=Object(i.useCallback)(e=>{var t=e.target
u.current=e.target.scrollLeft,t.scrollLeft>0?t.scrollLeft+t.offsetWidth+1>=t.scrollWidth?c("left"):c("both"):c("right")},[c])
if(Object(i.useEffect)(()=>{var e,t=n.current
return t&&"UL"===t.childNodes[0].nodeName&&(e=t.childNodes[0],o(e),e.scrollWidth>e.offsetWidth&&c("right"),e.addEventListener("scroll",J)),()=>{e&&e.removeEventListener("scroll",J)}},[J]),!h.length)return null
var z={marginTop:L,marginRight:I,marginBottom:R,marginLeft:S,paddingTop:F,paddingRight:D,paddingBottom:G,paddingLeft:M},X={minHeight:f,textAlign:O},H={defaultIndex:g}
C&&(z["--tabs-border"]=C,z["--tabs-border-color"]=j),x&&(z["--tabs-border-width"]=x),_&&(z["--tabs-border-radius"]=_)
var V=h.map((e,n)=>l.a.createElement(y,{className:t.header,key:n},e)),q=i.Children.map(U,(e,n)=>l.a.createElement(T,{key:n,className:t.panel,selectedClassName:t.panelSelected},e)),Y=t["navigation".concat(k(p))],Z=t["content".concat(k(p))],$=s?t["navigationGradient".concat(k(s))]:null
return l.a.createElement(m,r()({style:z,className:[t.root,...K].join(" "),disabledTabClassName:t.disabled,selectedTabClassName:t.selected},H),l.a.createElement("div",{className:$,ref:n},l.a.createElement(v,{onMouseDown:B,onMouseUp:A,onMouseMove:Q,onMouseLeave:A,className:Y},V)),l.a.createElement("div",{className:Z,style:tabs_objectSpread(tabs_objectSpread({},X),W)},q))}
L.propTypes={classes:Object(_.shape)({header:_.string,panelSelected:_.string,panel:_.string,contentLeft:_.string,contentCenter:_.string,contentRight:_.string,navigationLeft:_.string,navigationCenter:_.string,navigationRight:_.string,navigationGradientLeft:_.string,navigationGradientRight:_.string,navigationGradientBoth:_.string,disabled:_.string,selected:_.string,item:_.string}),tabNavigationAlignment:Object(_.oneOf)(["left","center","right"]),minHeight:_.string,defaultIndex:_.number,headers:Object(_.arrayOf)(_.string),textAlign:_.string,border:_.string,borderColor:_.string,borderWidth:_.string,borderRadius:_.string,marginTop:_.string,marginRight:_.string,marginBottom:_.string,marginLeft:_.string,mediaQueries:Object(_.arrayOf)(Object(_.shape)({media:_.string,style:_.object})),paddingTop:_.string,paddingRight:_.string,paddingBottom:_.string,paddingLeft:_.string,cssClasses:Object(_.arrayOf)(_.string)}
var I=L},TUNL:function(e,t,n){"use strict"
var a=n("JPst"),r=n.n(a)()(function(e){return e[1]})
r.push([e.i,".tabs-root-QaI {\n    -webkit-tap-highlight-color: transparent;\n    --tabs-border: solid;\n    --tabs-border-color: #ccc;\n    --tabs-border-width: 1px;\n    --tabs-border-radius: 0px;\n}\n\n.tabs-root-QaI ul li.tabs-header-JeG.tabs-selected-MvP {\n    background: #fff;\n    z-index: 3;\n}\n\n.tabs-root-QaI ul.tabs-navigation--lK {\n    display: block;\n    font-size: 0;\n    margin: 0 0 calc(var(--tabs-border-width) * -1);\n    white-space: nowrap;\n    overflow-x: scroll;\n    overflow-y: hidden;\n    -ms-overflow-style: none;\n    scrollbar-width: none;\n    position: relative;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n}\nul.tabs-navigation--lK::-webkit-scrollbar {\n    display: none;\n}\n.tabs-navigationLeft-sdO {\n    text-align: left;\n}\n.tabs-navigationCenter-eCI {\n    text-align: center;\n}\n.tabs-navigationRight-FuV {\n    text-align: right;\n}\n\n.tabs-navigationGradientLeft-g9D,\n.tabs-navigationGradientBoth-g-a,\n.tabs-navigationGradientRight-6rc {\n    position: relative;\n}\n.tabs-navigationGradientLeft-g9D:before,\n.tabs-navigationGradientBoth-g-a:before {\n    pointer-events: none;\n    opacity: 1;\n    position: absolute;\n    left: 0;\n    top: 0;\n    bottom: var(--tabs-border-width);\n    content: '';\n    display: block;\n    width: 100px;\n    z-index: 4;\n    background: linear-gradient(\n        90deg,\n        rgba(255, 255, 255, 1) 0%,\n        rgba(255, 255, 255, 0) 100%\n    );\n}\n.tabs-navigationGradientRight-6rc:after,\n.tabs-navigationGradientBoth-g-a:after {\n    pointer-events: none;\n    opacity: 1;\n    position: absolute;\n    right: 0;\n    top: 0;\n    bottom: var(--tabs-border-width);\n    content: '';\n    display: block;\n    width: 100px;\n    z-index: 4;\n    background: linear-gradient(\n        90deg,\n        rgba(255, 255, 255, 0) 0%,\n        rgba(255, 255, 255, 1) 100%\n    );\n}\n\n.tabs-root-QaI ul li.tabs-header-JeG {\n    list-style: none;\n    background: rgb(var(--venia-global-color-gray));\n    border: var(--tabs-border-width) var(--tabs-border) var(--tabs-border-color);\n    border-bottom: 0;\n    border-top-left-radius: var(--tabs-border-radius);\n    border-top-right-radius: var(--tabs-border-radius);\n    display: inline-block;\n    margin: 0;\n    max-width: 100%;\n    overflow-wrap: break-word;\n    position: relative;\n    word-wrap: break-word;\n    z-index: 1;\n    color: rgb(var(--venia-global-color-text));\n    cursor: pointer !important;\n    font-size: 14px;\n    font-weight: 600;\n    padding: 0.875rem 1.25rem;\n    transition: background-color 0.3s;\n    vertical-align: bottom;\n    white-space: normal;\n}\n\n.tabs-root-QaI ul li.tabs-header-JeG:focus {\n    outline: 0;\n}\n\n.tabs-root-QaI ul li.tabs-header-JeG:focus:after {\n    content: '';\n    position: absolute;\n    height: 5px;\n    left: -4px;\n    right: -4px;\n    bottom: -5px;\n    background: #fff;\n}\n\n.tabs-root-QaI ul li.tabs-header-JeG:not(:first-child) {\n    margin-left: calc(var(--tabs-border-width) * -1);\n}\n\n.tabs-panel-tic {\n    min-height: inherit;\n}\n\n.tabs-panelSelected-S6o {\n    display: block;\n}\n\n.tabs-panel-tic:empty {\n    display: none !important; /* Necessary because of inline styles; to be fixed in MC-18326 */\n}\n\n.tabs-content-hl5 {\n    border: var(--tabs-border-width) var(--tabs-border) var(--tabs-border-color);\n    overflow: hidden;\n    position: relative;\n    z-index: 2;\n    border-radius: var(--tabs-border-radius);\n}\n.tabs-contentLeft-NTf {\n    border-top-left-radius: 0px;\n}\n.tabs-contentCenter-kyF {\n}\n.tabs-contentRight-Frh {\n    border-top-right-radius: 0px;\n}\n\n.tabs-root-QaI ul.tabs-navigation--lK li:first-child {\n    margin-left: 0 !important;\n}\n\n.tabs-disabled-fOX {\n    color: GrayText;\n    cursor: default;\n}\n\n.tabs-item-W1U {\n    min-height: inherit;\n}\n\n.tabs-item-W1U:not(:first-child) {\n    display: none;\n}\n\n@media only screen and (max-width: 768px) {\n    .tabs-item-W1U {\n        background-attachment: scroll !important;\n    }\n}\n",""]),r.locals={root:"tabs-root-QaI",header:"tabs-header-JeG",selected:"tabs-selected-MvP",navigation:"tabs-navigation--lK",navigationLeft:"tabs-navigationLeft-sdO tabs-navigation--lK",navigationCenter:"tabs-navigationCenter-eCI tabs-navigation--lK",navigationRight:"tabs-navigationRight-FuV tabs-navigation--lK",navigationGradientLeft:"tabs-navigationGradientLeft-g9D",navigationGradientBoth:"tabs-navigationGradientBoth-g-a",navigationGradientRight:"tabs-navigationGradientRight-6rc",panel:"tabs-panel-tic",panelSelected:"tabs-panelSelected-S6o",content:"tabs-content-hl5",contentLeft:"tabs-contentLeft-NTf tabs-content-hl5",contentCenter:"tabs-contentCenter-kyF tabs-content-hl5",contentRight:"tabs-contentRight-Frh tabs-content-hl5",disabled:"tabs-disabled-fOX",item:"tabs-item-W1U"},t.a=r}}])
