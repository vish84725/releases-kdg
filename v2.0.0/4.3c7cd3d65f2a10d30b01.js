/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ^9.6.0, @magento/upward-security-headers: ~1.0.9, @magento/upward-js: ^5.3.2, @magento/pwa-theme-venia: ~1.3.0, @magento/pwa-buildpack: ^11.4.0, @magento/peregrine: ^12.5.1, @magento/pagebuilder: ^7.4.1, @magento/eslint-config: ^1.5.3, @magento/babel-preset-peregrine: ~1.2.1, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/1Lp":function(e,t,n){"use strict"
var r=n("sGU5"),o=n("Z97s"),a=n("+y50")
function _objectWithoutProperties(e,t){if(null==e)return{}
var n,r,o=function _objectWithoutPropertiesLoose(e,t){if(null==e)return{}
var n,r,o={},a=Object.keys(e)
for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n])
return o}(e,t)
if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e)
for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=n("q1tI"),c=n.n(i),l=n("TSYQ"),s=n.n(l),u=n("IXZL"),f=n("rTrx"),d=n("AJpP"),p=n("Kwbf"),b=n("BU3w")
function isIconDefinition(e){return"object"===Object(f.a)(e)&&"string"==typeof e.name&&"string"==typeof e.theme&&("object"===Object(f.a)(e.icon)||"function"==typeof e.icon)}function normalizeAttrs(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}
return Object.keys(e).reduce(function(t,n){var r=e[n]
switch(n){case"class":t.className=r,delete t.class
break
default:t[n]=r}return t},{})}function getSecondaryColor(e){return Object(d.a)(e)[0]}function normalizeTwoToneColors(e){return e?Array.isArray(e)?e:[e]:[]}var y=["icon","className","onClick","style","primaryColor","secondaryColor"],m={primaryColor:"#333",secondaryColor:"#E6E6E6",calculated:!1}
var v=function IconBase(e){var t=e.icon,n=e.className,o=e.onClick,a=e.style,l=e.primaryColor,s=e.secondaryColor,f=_objectWithoutProperties(e,y),d=m
if(l&&(d={primaryColor:l,secondaryColor:s||getSecondaryColor(l)}),function useInsertStyles(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"\n.anticon {\n  display: inline-block;\n  color: inherit;\n  font-style: normal;\n  line-height: 0;\n  text-align: center;\n  text-transform: none;\n  vertical-align: -0.125em;\n  text-rendering: optimizeLegibility;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.anticon > * {\n  line-height: 1;\n}\n\n.anticon svg {\n  display: inline-block;\n}\n\n.anticon::before {\n  display: none;\n}\n\n.anticon .anticon-icon {\n  display: block;\n}\n\n.anticon[tabindex] {\n  cursor: pointer;\n}\n\n.anticon-spin::before,\n.anticon-spin {\n  display: inline-block;\n  -webkit-animation: loadingCircle 1s infinite linear;\n  animation: loadingCircle 1s infinite linear;\n}\n\n@-webkit-keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes loadingCircle {\n  100% {\n    -webkit-transform: rotate(360deg);\n    transform: rotate(360deg);\n  }\n}\n",t=Object(i.useContext)(u.a).csp
Object(i.useEffect)(function(){Object(b.a)(e,"@ant-design-icons",{prepend:!0,csp:t})},[])}(),function utils_warning(e,t){Object(p.a)(e,"[@ant-design/icons] ".concat(t))}(isIconDefinition(t),"icon should be icon definiton, but got ".concat(t)),!isIconDefinition(t))return null
var v=t
return v&&"function"==typeof v.icon&&(v=Object(r.a)(Object(r.a)({},v),{},{icon:v.icon(d.primaryColor,d.secondaryColor)})),function generate(e,t,n){return n?c.a.createElement(e.tag,Object(r.a)(Object(r.a)({key:t},normalizeAttrs(e.attrs)),n),(e.children||[]).map(function(n,r){return generate(n,"".concat(t,"-").concat(e.tag,"-").concat(r))})):c.a.createElement(e.tag,Object(r.a)({key:t},normalizeAttrs(e.attrs)),(e.children||[]).map(function(n,r){return generate(n,"".concat(t,"-").concat(e.tag,"-").concat(r))}))}(v.icon,"svg-".concat(v.name),Object(r.a)({className:n,onClick:o,style:a,"data-icon":v.name,width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true"},f))}
v.displayName="IconReact",v.getTwoToneColors=function getTwoToneColors(){return Object(r.a)({},m)},v.setTwoToneColors=function setTwoToneColors(e){var t=e.primaryColor,n=e.secondaryColor
m.primaryColor=t,m.secondaryColor=n||getSecondaryColor(t),m.calculated=!!n}
var g=v
function setTwoToneColor(e){var t=normalizeTwoToneColors(e),n=Object(o.a)(t,2),r=n[0],a=n[1]
return g.setTwoToneColors({primaryColor:r,secondaryColor:a})}var O=["className","icon","spin","rotate","tabIndex","onClick","twoToneColor"]
setTwoToneColor("#1890ff")
var h=i.forwardRef(function(e,t){var n,c=e.className,l=e.icon,f=e.spin,d=e.rotate,p=e.tabIndex,b=e.onClick,y=e.twoToneColor,m=_objectWithoutProperties(e,O),v=i.useContext(u.a).prefixCls,h=void 0===v?"anticon":v,j=s()(h,(n={},Object(a.a)(n,"".concat(h,"-").concat(l.name),!!l.name),Object(a.a)(n,"".concat(h,"-spin"),!!f||"loading"===l.name),n),c),C=p
void 0===C&&b&&(C=-1)
var w=d?{msTransform:"rotate(".concat(d,"deg)"),transform:"rotate(".concat(d,"deg)")}:void 0,E=normalizeTwoToneColors(y),T=Object(o.a)(E,2),P=T[0],x=T[1]
return i.createElement("span",Object(r.a)(Object(r.a)({role:"img","aria-label":l.name},m),{},{ref:t,tabIndex:C,onClick:b,className:j}),i.createElement(g,{icon:l,primaryColor:P,secondaryColor:x,style:w}))})
h.displayName="AntdIcon",h.getTwoToneColor=function getTwoToneColor(){var e=g.getTwoToneColors()
return e.calculated?[e.primaryColor,e.secondaryColor]:e.primaryColor},h.setTwoToneColor=setTwoToneColor
t.a=h},"2/Rp":function(e,t,n){"use strict"
var r=n("zvFY")
t.a=r.b},"3Nzz":function(e,t,n){"use strict"
n.d(t,"a",function(){return a})
var r=n("q1tI"),o=r.createContext(void 0),a=function SizeContextProvider(e){var t=e.children,n=e.size
return r.createElement(o.Consumer,null,function(e){return r.createElement(o.Provider,{value:n||e},t)})}
t.b=o},"Ek/p":function(e,t,n){"use strict"
function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(e,t){return e.__proto__=t,e})(e,t)}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function")
e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_setPrototypeOf(e,t)}n.d(t,"a",function(){return _inherits})},IXZL:function(e,t,n){"use strict"
var r=n("q1tI"),o=Object(r.createContext)({})
t.a=o},UvXy:function(e,t,n){"use strict"
function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",function(){return _createSuper})
var r=n("rTrx"),o=n("YuSC")
function _createSuper(e){var t=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1
if(Reflect.construct.sham)return!1
if("function"==typeof Proxy)return!0
try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}()
return function _createSuperInternal(){var n,a=_getPrototypeOf(e)
if(t){var i=_getPrototypeOf(this).constructor
n=Reflect.construct(a,arguments,i)}else n=a.apply(this,arguments)
return function _possibleConstructorReturn(e,t){if(t&&("object"===Object(r.a)(t)||"function"==typeof t))return t
if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined")
return Object(o.a)(e)}(this,n)}}},YuSC:function(e,t,n){"use strict"
function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
return e}n.d(t,"a",function(){return _assertThisInitialized})},Z9ki:function(e,t,n){"use strict"
var r=n("sGU5"),o=n("q1tI"),a={icon:{tag:"svg",attrs:{viewBox:"0 0 1024 1024",focusable:"false"},children:[{tag:"path",attrs:{d:"M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z"}}]},name:"loading",theme:"outlined"},i=n("/1Lp"),c=function LoadingOutlined(e,t){return o.createElement(i.a,Object(r.a)(Object(r.a)({},e),{},{ref:t,icon:a}))}
c.displayName="LoadingOutlined"
t.a=o.forwardRef(c)},bT9E:function(e,t,n){"use strict"
n.d(t,"a",function(){return omit})
var r=n("vdM+")
function omit(e,t){var n=Object(r.a)({},e)
return Array.isArray(t)&&t.forEach(function(e){delete n[e]}),n}},caoh:function(e,t,n){"use strict"
n.d(t,"a",function(){return a})
var r=n("q1tI"),o=r.createContext(!1),a=function DisabledContextProvider(e){var t=e.children,n=e.disabled,a=r.useContext(o)
return r.createElement(o.Provider,{value:n||a},t)}
t.b=o},cdhz:function(e,t,n){"use strict"
function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}n.d(t,"a",function(){return _classCallCheck})},rTrx:function(e,t,n){"use strict"
function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",function(){return _typeof})},sGU5:function(e,t,n){"use strict"
n.d(t,"a",function(){return _objectSpread2})
var r=n("+y50")
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){Object(r.a)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}},u13E:function(e,t,n){"use strict"
function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}n.d(t,"a",function(){return _createClass})},"vdM+":function(e,t,n){"use strict"
function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread2(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}n.d(t,"a",function(){return _objectSpread2})},zvFY:function(e,t,n){"use strict"
n.d(t,"a",function(){return convertLegacyProps})
var r,o=n("jiTG"),a=n("+y50"),i=n("Z97s"),c=n("rTrx"),l=n("TSYQ"),s=n.n(l),u=n("bT9E"),f=n("q1tI"),d=n.n(f),p=n("H84U"),b=n("caoh"),y=n("3Nzz"),m=n("0n0R"),v=n("CWQg"),g=n("cdhz"),O=n("u13E"),h=n("YuSC"),j=n("Ek/p"),C=n("UvXy"),w=n("BU3w"),E=n("c+Xe"),T=n("wgJM"),P=0,x={}
function wrapperRaf(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=P++,r=t
return x[n]=Object(T.a)(function internalCallback(){(r-=1)<=0?(e(),delete x[n]):x[n]=Object(T.a)(internalCallback)}),n}function isHidden(e){return!e||null===e.offsetParent||e.hidden}wrapperRaf.cancel=function cancel(e){void 0!==e&&(T.a.cancel(x[e]),delete x[e])},wrapperRaf.ids=x
var k=function(e){Object(j.a)(InternalWave,e)
var t=Object(C.a)(InternalWave)
function InternalWave(){var e
return Object(g.a)(this,InternalWave),(e=t.apply(this,arguments)).containerRef=f.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,n){var o,a,i=e.props,c=i.insertExtraNode
if(!(i.disabled||!t||isHidden(t)||t.className.indexOf("-leave")>=0)){e.extraNode=document.createElement("div")
var l=Object(h.a)(e).extraNode,s=e.context.getPrefixCls
l.className="".concat(s(""),"-click-animating-node")
var u=e.getAttributeName()
if(t.setAttribute(u,"true"),n&&"#ffffff"!==n&&"rgb(255, 255, 255)"!==n&&function isNotGrey(e){var t=(e||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/)
return!(t&&t[1]&&t[2]&&t[3]&&t[1]===t[2]&&t[2]===t[3])}(n)&&!/rgba\((?:\d*, ){3}0\)/.test(n)&&"transparent"!==n){l.style.borderColor=n
var f=(null===(o=t.getRootNode)||void 0===o?void 0:o.call(t))||t.ownerDocument,d=f instanceof Document?f.body:null!==(a=f.firstChild)&&void 0!==a?a:f
r=Object(w.a)("\n      [".concat(s(""),"-click-animating-without-extra-node='true']::after, .").concat(s(""),"-click-animating-node {\n        --antd-wave-shadow-color: ").concat(n,";\n      }"),"antd-wave",{csp:e.csp,attachTo:d})}c&&t.appendChild(l),["transition","animation"].forEach(function(n){t.addEventListener("".concat(n,"start"),e.onTransitionStart),t.addEventListener("".concat(n,"end"),e.onTransitionEnd)})}},e.onTransitionStart=function(t){if(!e.destroyed){var n=e.containerRef.current
t&&t.target===n&&!e.animationStart&&e.resetEffect(n)}},e.onTransitionEnd=function(t){t&&"fadeEffect"===t.animationName&&e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(t&&t.getAttribute&&!t.getAttribute("disabled")&&!(t.className.indexOf("disabled")>=0)){var n=function onClick(n){if("INPUT"!==n.target.tagName&&!isHidden(n.target)){e.resetEffect(t)
var r=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color")
e.clickWaveTimeoutId=window.setTimeout(function(){return e.onClick(t,r)},0),wrapperRaf.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=wrapperRaf(function(){e.animationStart=!1},10)}}
return t.addEventListener("click",n,!0),{cancel:function cancel(){t.removeEventListener("click",n,!0)}}}},e.renderWave=function(t){var n=t.csp,r=e.props.children
if(e.csp=n,!f.isValidElement(r))return r
var o=e.containerRef
return Object(E.c)(r)&&(o=Object(E.a)(r.ref,e.containerRef)),Object(m.a)(r,{ref:o})},e}return Object(O.a)(InternalWave,[{key:"componentDidMount",value:function componentDidMount(){this.destroyed=!1
var e=this.containerRef.current
e&&1===e.nodeType&&(this.instance=this.bindAnimationEvent(e))}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function getAttributeName(){var e=this.context.getPrefixCls,t=this.props.insertExtraNode
return"".concat(e(""),t?"-click-animating":"-click-animating-without-extra-node")}},{key:"resetEffect",value:function resetEffect(e){var t=this
if(e&&e!==this.extraNode&&e instanceof Element){var n=this.props.insertExtraNode,o=this.getAttributeName()
e.setAttribute(o,"false"),r&&(r.innerHTML=""),n&&this.extraNode&&e.contains(this.extraNode)&&e.removeChild(this.extraNode),["transition","animation"].forEach(function(n){e.removeEventListener("".concat(n,"start"),t.onTransitionStart),e.removeEventListener("".concat(n,"end"),t.onTransitionEnd)})}}},{key:"render",value:function render(){return f.createElement(p.a,null,this.renderWave)}}]),InternalWave}(f.Component)
k.contextType=p.b
var S=Object(f.forwardRef)(function(e,t){return f.createElement(k,Object(o.a)({ref:t},e))}),N=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},_=f.createContext(void 0),I=function ButtonGroup(e){var t,n=f.useContext(p.b),r=n.getPrefixCls,i=n.direction,c=e.prefixCls,l=e.size,u=e.className,d=N(e,["prefixCls","size","className"]),b=r("btn-group",c),y=""
switch(l){case"large":y="lg"
break
case"small":y="sm"}var m=s()(b,(t={},Object(a.a)(t,"".concat(b,"-").concat(y),y),Object(a.a)(t,"".concat(b,"-rtl"),"rtl"===i),t),u)
return f.createElement(_.Provider,{value:l},f.createElement("div",Object(o.a)({},d,{className:m})))},R=n("Z9ki"),z=n("8XRh"),A=function getCollapsedWidth(){return{width:0,opacity:0,transform:"scale(0)"}},L=function getRealWidth(e){return{width:e.scrollWidth,opacity:1,transform:"scale(1)"}},W=function LoadingIcon(e){var t=e.prefixCls,n=!!e.loading
return e.existIcon?d.a.createElement("span",{className:"".concat(t,"-loading-icon")},d.a.createElement(R.a,null)):d.a.createElement(z.b,{visible:n,motionName:"".concat(t,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:A,onAppearActive:L,onEnterStart:A,onEnterActive:L,onLeaveStart:L,onLeaveActive:A},function(e,n){var r=e.className,o=e.style
return d.a.createElement("span",{className:"".concat(t,"-loading-icon"),style:o,ref:n},d.a.createElement(R.a,{className:r}))})},B=function(e,t){var n={}
for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r])
if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0
for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},D=/^[\u4e00-\u9fa5]{2}$/,U=D.test.bind(D)
function isUnBorderedButtonType(e){return"text"===e||"link"===e}function insertSpace(e,t){if(null!=e){var n=t?" ":""
return"string"!=typeof e&&"number"!=typeof e&&function isString(e){return"string"==typeof e}(e.type)&&U(e.props.children)?Object(m.a)(e,{children:e.props.children.split("").join(n)}):"string"==typeof e?U(e)?f.createElement("span",null,e.split("").join(n)):f.createElement("span",null,e):function isReactFragment(e){return f.isValidElement(e)&&e.type===f.Fragment}(e)?f.createElement("span",null,e):e}}Object(v.a)("default","primary","ghost","dashed","link","text"),Object(v.a)("default","circle","round"),Object(v.a)("submit","button","reset")
function convertLegacyProps(e){return"danger"===e?{danger:!0}:{type:e}}var G=function InternalButton(e,t){var n,r=e.loading,l=void 0!==r&&r,d=e.prefixCls,m=e.type,v=void 0===m?"default":m,g=e.danger,O=e.shape,h=void 0===O?"default":O,j=e.size,C=e.disabled,w=e.className,E=e.children,T=e.icon,P=e.ghost,x=void 0!==P&&P,k=e.block,N=void 0!==k&&k,I=e.htmlType,R=void 0===I?"button":I,z=B(e,["loading","prefixCls","type","danger","shape","size","disabled","className","children","icon","ghost","block","htmlType"]),A=f.useContext(y.b),L=f.useContext(b.b),D=C||L,G=f.useContext(_),K=f.useState(!!l),M=Object(i.a)(K,2),Y=M[0],q=M[1],X=f.useState(!1),Z=Object(i.a)(X,2),H=Z[0],V=Z[1],F=f.useContext(p.b),J=F.getPrefixCls,Q=F.autoInsertSpaceInButton,$=F.direction,ee=t||f.createRef(),te=function isNeedInserted(){return 1===f.Children.count(E)&&!T&&!isUnBorderedButtonType(v)},ne="boolean"==typeof l?l:(null==l?void 0:l.delay)||!0
f.useEffect(function(){var e=null
return"number"==typeof ne?e=window.setTimeout(function(){e=null,q(ne)},ne):q(ne),function(){e&&(window.clearTimeout(e),e=null)}},[ne]),f.useEffect(function fixTwoCNChar(){if(ee&&ee.current&&!1!==Q){var e=ee.current.textContent
te()&&U(e)?H||V(!0):H&&V(!1)}},[ee])
var re=function handleClick(t){var n=e.onClick
Y||D?t.preventDefault():null==n||n(t)},oe=J("btn",d),ae=!1!==Q,ie=G||j||A,ce=ie&&{large:"lg",small:"sm",middle:void 0}[ie]||"",le=Y?"loading":T,se=Object(u.a)(z,["navigate"]),ue=s()(oe,(n={},Object(a.a)(n,"".concat(oe,"-").concat(h),"default"!==h&&h),Object(a.a)(n,"".concat(oe,"-").concat(v),v),Object(a.a)(n,"".concat(oe,"-").concat(ce),ce),Object(a.a)(n,"".concat(oe,"-icon-only"),!E&&0!==E&&!!le),Object(a.a)(n,"".concat(oe,"-background-ghost"),x&&!isUnBorderedButtonType(v)),Object(a.a)(n,"".concat(oe,"-loading"),Y),Object(a.a)(n,"".concat(oe,"-two-chinese-chars"),H&&ae&&!Y),Object(a.a)(n,"".concat(oe,"-block"),N),Object(a.a)(n,"".concat(oe,"-dangerous"),!!g),Object(a.a)(n,"".concat(oe,"-rtl"),"rtl"===$),Object(a.a)(n,"".concat(oe,"-disabled"),void 0!==se.href&&D),n),w),fe=T&&!Y?T:f.createElement(W,{existIcon:!!T,prefixCls:oe,loading:!!Y}),de=E||0===E?function spaceChildren(e,t){var n=!1,r=[]
return f.Children.forEach(e,function(e){var t=Object(c.a)(e),o="string"===t||"number"===t
if(n&&o){var a=r.length-1,i=r[a]
r[a]="".concat(i).concat(e)}else r.push(e)
n=o}),f.Children.map(r,function(e){return insertSpace(e,t)})}(E,te()&&ae):null
if(void 0!==se.href)return f.createElement("a",Object(o.a)({},se,{className:ue,onClick:re,ref:ee}),fe,de)
var pe=f.createElement("button",Object(o.a)({},z,{type:R,className:ue,onClick:re,disabled:D,ref:ee}),fe,de)
return isUnBorderedButtonType(v)?pe:f.createElement(S,{disabled:!!Y},pe)},K=f.forwardRef(G)
K.Group=I,K.__ANT_BUTTON=!0
t.b=K}}])
