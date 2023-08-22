/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ^9.6.0, @magento/upward-security-headers: ~1.0.9, @magento/upward-js: ^5.3.2, @magento/pwa-theme-venia: ~1.3.0, @magento/pwa-buildpack: ^11.4.0, @magento/peregrine: ^12.5.1, @magento/pagebuilder: ^7.4.1, @magento/eslint-config: ^1.5.3, @magento/babel-preset-peregrine: ~1.2.1, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{HTR8:function(e,t,n){"use strict"
t.a=(e=>{if(null==e||!Array.isArray(e))throw new Error("Expected `callbacks` to be array.")
return(t,n)=>{for(var r=null,c=0;c<e.length;c++){var a=e[c]
if(null==a||!Array.isArray(a)&&"function"!=typeof a)throw new Error("Expected `callbacks["+c+"]` to be array or function.")
if(Array.isArray(a)){var[o,s]=a
if("function"!=typeof o)throw new Error("Expected `callbacks["+c+"][0]` to be function.")
r=o(t,n,s)}else r=a(t,n)
if(r)break}return r}})},YQ8e:function(e,t,n){"use strict"
n.r(t),n.d(t,"default",function(){return w})
var r=n("q1tI"),c=n.n(r),a=n("17x9"),o=n("dDsW"),s=n("kriW"),i=n("lSNA"),u=n.n(i),l=n("Ty5D"),g=n("FITH")
function ownKeys(e,t){var n=Object.keys(e)
if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e)
t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(n),!0).forEach(function(t){u()(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var d=["email","firstName","lastName"],p=e=>{var{signedInRedirectUrl:t,signInPageUrl:n}=e,c=Object(l.useHistory)(),[{isSignedIn:a}]=Object(g.b)(),{search:o}=Object(l.useLocation)(),s=Object(r.useMemo)(()=>c&&c.location.state?c.location.state:{},[c]),i=s.from||null
Object(r.useEffect)(()=>{a&&(i||t)&&c.push(i||t)},[i,c,a,t])
var u=Object(r.useCallback)(()=>{n&&c.push(n,s)},[c,s,n])
return{createAccountProps:{initialValues:Object(r.useMemo)(()=>(e=>{var t=new URLSearchParams(e)
return d.reduce((e,n)=>_objectSpread(_objectSpread({},e),{},{[n]:t.get(n)}),{})})(o),[o]),isCancelButtonHidden:!1,onCancel:u}}},b=n("y1Xp"),f=n("gq/D"),y=n("rLZa"),m=n("LboF"),A=n.n(m),h=n("n4HV"),j={injectType:"singletonStyleTag",insert:"head",singleton:!0},O=(A()(h.a,j),h.a.locals||{}),P=e=>{var t=Object(b.a)(O,e.classes),{createAccountProps:n}=p(e),{formatMessage:r}=Object(o.a)()
return c.a.createElement("div",{className:t.root},c.a.createElement(y.b,null,r({id:"createAccountPage.title",defaultMessage:"Create an Account"})),c.a.createElement("h1",{className:t.header},c.a.createElement(s.a,{id:"createAccountPage.header",defaultMessage:"Create an Account"})),c.a.createElement("div",{className:t.contentContainer},c.a.createElement(f.a,n)))}
P.defaultProps={signedInRedirectUrl:"/order-history",signInPageUrl:"/sign-in"},P.propTypes={classes:Object(a.shape)({root:a.string,header:a.string,contentContainer:a.string}),signedInRedirectUrl:a.string,signInPageUrl:a.string}
var w=P},kItZ:function(e,t,n){"use strict"
var r=n("JPst"),c=n.n(r),a=n("sARL"),o=c()(function(e){return e[1]})
o.i(a.a,"",!0),o.push([e.i,".createAccount-root-0KV {\n}\n\n.createAccount-message-oLV {\n}\n\n/* TODO @TW: cannot compose */\n.createAccount-message-oLV:empty {\n    display: none;\n}\n\n.createAccount-actions-UUv {\n}\n\n.createAccount-cancelButton-92E {\n}\n\n.createAccount-submitButton-tNK {\n}\n\n.createAccount-subscribe-I-6 {\n}\n",""]),o.locals={root:"createAccount-root-0KV gap-xs grid justify-items-stretch px-sm py-xs",message:"createAccount-message-oLV bg-subtle leading-tight p-xs rounded text-sm",actions:"createAccount-actions-UUv gap-xs grid grid-flow-row justify-center mt-xs text-center lg_grid-flow-col",cancelButton:"createAccount-cancelButton-92E "+a.a.locals.root_lowPriority,submitButton:"createAccount-submitButton-tNK "+a.a.locals.root_highPriority+" col-start-auto lg_col-start-2",subscribe:"createAccount-subscribe-I-6 -ml-1.5"},t.a=o},n4HV:function(e,t,n){"use strict"
var r=n("JPst"),c=n.n(r)()(function(e){return e[1]})
c.push([e.i,".createAccountPage-root-5tc {\n    grid-template-columns: minmax(auto, 512px);\n}\n\n.createAccountPage-header-77p {\n}\n\n.createAccountPage-contentContainer-0Td {\n}\n",""]),c.locals={root:"createAccountPage-root-5tc gap-y-md grid justify-center px-0 py-md text-center",header:"createAccountPage-header-77p font-serif",contentContainer:"createAccountPage-contentContainer-0Td lg_border-2 lg_border-solid lg_border-subtle lg_pb-md lg_rounded-md"},t.a=c},vxNc:function(e,t,n){"use strict"
var r=n("LboF"),c=n.n(r),a=n("kItZ"),o={injectType:"singletonStyleTag",insert:"head",singleton:!0}
c()(a.a,o)
t.a=a.a.locals||{}}}])
