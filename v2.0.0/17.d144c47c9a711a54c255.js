/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ^9.6.0, @magento/upward-security-headers: ~1.0.9, @magento/upward-js: ^5.3.2, @magento/pwa-theme-venia: ~1.3.0, @magento/pwa-buildpack: ^11.4.0, @magento/peregrine: ^12.5.1, @magento/pagebuilder: ^7.4.1, @magento/eslint-config: ^1.5.3, @magento/babel-preset-peregrine: ~1.2.1, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{P2xv:function(e,t,a){"use strict"
a.r(t),a.d(t,"default",function(){return R}),a.d(t,"FilterSidebarShimmer",function(){return A.a})
var r=a("q1tI"),n=a.n(r),l=a("kriW"),o=a("17x9"),i=a("+TN3"),s=a("Ty5D"),c=a("OlZo"),u=a("y1Xp"),m=a("0LUN"),p=a("5suJ"),f=a("qykw"),d=a("6QXU"),b=a("dDsW"),g=a("wHH0"),v=a("oTwF"),y=a("bNDk"),O=a("LboF"),h=a.n(O),j=a("oIux"),k={injectType:"singletonStyleTag",insert:"head",singleton:!0},w=(h()(j.a,k),j.a.locals||{}),M=e=>{var{group:t,item:a,removeItem:l,removeGroup:o,onRemove:i}=e,s=Object(u.a)(w,e.classes),{formatMessage:c}=Object(b.a)(),m=Object(r.useCallback)(()=>{if("year"===t)return o({group:"year"}),void("function"==typeof i&&i(t,a))
l({group:t,item:a}),"function"==typeof i&&i(t,a)},[t,a,l,i]),p=c({id:"filterModal.action.clearFilterItem.ariaLabel",defaultMessage:'Clear filter "{name}"'},{name:a.label?a.label:a.title})
return n.a.createElement("span",{className:s.root,style:{backgroundColor:"#12805c"}},n.a.createElement(y.a,{action:m,ariaLabel:p},n.a.createElement(v.a,{size:14,src:g.a})),n.a.createElement("span",{className:s.text,style:{fontSize:"14px"}},(a.label?a.label:a.title).toLowerCase()))},F=M
M.defaultProps={onRemove:null},M.propTypes={classes:Object(o.shape)({root:o.string}),onRemove:o.func}
var E=a("aX5L"),x={injectType:"singletonStyleTag",insert:"head",singleton:!0},C=(h()(E.a,x),E.a.locals||{}),T=e=>{var{filterApi:t,filterState:a,onRemove:l}=e,{removeItem:o,removeGroup:i}=t,s=Object(u.a)(C,e.classes),{formatMessage:c}=Object(b.a)(),m=Object(r.useMemo)(()=>{var e=[]
for(var[t,r]of a)if("year"!==t)for(var c of r){var{title:u,value:m}=c||{},p="".concat(t,"::").concat(u,"_").concat(m)
e.push(n.a.createElement("li",{key:p,className:s.item},n.a.createElement(F,{group:t,item:c,removeItem:o,onRemove:l})))}else{var f="".concat(t),d=Math.max(...Array.from(r.values()).map(e=>parseInt(e.title))),b=Math.min(...Array.from(r.values()).map(e=>parseInt(e.title)))
e.push(n.a.createElement("li",{key:f,className:s.item},n.a.createElement(F,{group:t,item:{title:"".concat(b," - ").concat(d),value:"".concat(b," - ").concat(d)},removeItem:o,onRemove:l,removeGroup:i})))}return e},[s.item,a,o,l]),p=c({id:"filterModal.currentFilters.ariaLabel",defaultMessage:"Current Filters"})
return n.a.createElement("ul",{className:s.root,"aria-label":p},m)}
T.defaultProps={onRemove:null},T.propTypes={classes:Object(o.shape)({root:o.string,item:o.string,button:o.string,icon:o.string}),onRemove:o.func}
var N=T,S=a("yZeJ"),_=a("VetJ"),I=e=>{var{filters:t,filterCountToOpen:a}=e,o=(e=>{var{filters:t}=e,a=Object(u.a)(f.a,e.operations),{getFilterInputsQuery:n}=a,[l,o]=Object(r.useState)(!1),[{drawer:d},{toggleDrawer:b,closeDrawer:g}]=Object(c.b)(),[v,y]=Object(m.a)(),O=Object(r.useRef)(null),h="filter"===d,j=Object(s.useHistory)(),{pathname:k,search:w}=Object(s.useLocation)(),{data:M}=Object(i.a)(n),F=Object(r.useMemo)(()=>t.map(e=>{var{attribute_code:t}=e
return t}),[t]),E=Object(r.useMemo)(()=>{var e=new Set
return"/search.html"!==k&&(e.add("category_id"),e.add("category_uid")),e},[k]),x=Object(r.useMemo)(()=>{var e=new Set,t=M?M.__type.inputFields:[],a=["milage"]
for(var{name:r}of t){var n=F.includes(r),l=!E.has(r);(n&&l||a.includes(r))&&e.add(r)}return e},[E,F,M]),C=e=>{var t=JSON.stringify(e)
return e.length<=2&&(t.includes(JSON.stringify({__typename:"AggregationOption",label:"0",value:"0"}))||t.includes(JSON.stringify({__typename:"AggregationOption",label:"1",value:"1"})))},[T,N,S,_]=Object(r.useMemo)(()=>{var e=new Map,a=new Set,r=new Map,n=new Map,l=Object(p.f)([...t])
for(var o of l){var{options:i,label:s,attribute_code:c}=o
if(x.has(c)||"milage_bucket"===c){var u=[]
if(e.set(c,s),"milage_bucket"===c?a.add("milage_bucket[filter]"):a.add("".concat(c,"[filter]")),C(i))r.set(c,"boolean"),u.push({title:"No",value:"0",label:s+":No"}),u.push({title:"Yes",value:"1",label:s+":Yes"})
else for(var{label:m,value:f}of(r.set(c,null),i))u.push({title:Object(p.g)(m),value:f})
n.set(c,u)}}return[e,a,n,r]},[t,x])
Object(r.useEffect)(()=>{if(l){var e=Object(p.d)(w,N,v)
j.push({pathname:k,search:e}),o(!1)}},[N,v,j,l,k,w])
var I=Object(r.useCallback)(()=>{b("filter")},[b]),R=Object(r.useCallback)(()=>{g()},[g]),A=Object(r.useCallback)(()=>{o(!0),R()},[R]),J=Object(r.useCallback)(()=>{y.clear(),o(!0)},[y,o]),L=Object(r.useCallback)(e=>{if(h)switch(e.keyCode){case 27:R()}},[h,R])
return Object(r.useEffect)(()=>{var e=null===O.current&&"filter"===d,t="filter"===O.current&&null===d
if(e||t){var a=Object(p.e)(w,N,S)
y.setItems(a)}t&&R(),O.current=d},[d,y,S,N,w,R]),Object(r.useEffect)(()=>{var e=Object(p.e)(w,N,S)
y.setItems(e)},[y,S,N,w]),{filterApi:y,filterItems:S,filterKeys:N,filterNames:T,filterFrontendInput:_,filterState:v,handleApply:A,handleClose:R,handleKeyDownActions:L,handleOpen:I,handleReset:J,isApplying:l,isOpen:h}})({filters:t}),[b,g]=Object(r.useState)([]),{filterApi:v,filterItems:y,filterNames:O,filterFrontendInput:h,filterState:j,handleApply:k,handleReset:w}=o,M=Object(r.useRef)(),F=Object(u.a)(_.a,e.classes),{pathname:E,search:x}=Object(s.useLocation)()
Object(r.useEffect)(()=>{var e=E.split("/")
if(e.includes("by-area")&&g(["Location"]),e.includes("by-make")&&g(["Model","Make"]),e.includes("by-year-range")&&g(["MFG Year"]),e.includes("by-type")&&g(["Body Type"]),x){var t=Array.from(new URLSearchParams(x).keys())
t.includes("By Make")&&g(["Make"]),t.includes("By Model")&&g(["Model","Make"])}},[E,x])
var C=Object(r.useCallback)(function(){var e=M.current
if(e&&"function"==typeof e.getBoundingClientRect){var t=e.getBoundingClientRect().top,a=window.scrollY+t-150
window.scrollTo(0,a)}k(...arguments)},[k,M]),T=e=>{var t={"MFG Year":"Year",milage_bucket:"Mileage"}
return Object.keys(t).includes(e)?t[e]:e},I=["Category","Price"],R=Object(r.useMemo)(()=>{var e=Array.from(y),t=["make","model","body_type","location","transmission","milage_bucket","year","fuel","steering","drive"]
return e.sort((e,a)=>t.indexOf(e[0])>t.indexOf(a[0])?1:-1).map(e=>{var[t,a]=e,r=j.get(t),l=O.get(t),o=h.get(t)
return I.includes(l)||b.includes(l)?n.a.createElement(n.a.Fragment,null):n.a.createElement(n.a.Fragment,null,n.a.createElement(S.a,{key:t,filterApi:v,filterState:r,filterFrontendInput:o,group:t,items:a,name:T(l),onApply:C,initialOpen:!1}))})},[v,y,O,h,j,a,C,b]),A=j.size?n.a.createElement("div",{className:F.action},n.a.createElement(d.a,{type:"button",onClick:w},n.a.createElement(l.a,{id:"filterModal.action",defaultMessage:"Clear all"}))):null
return n.a.createElement("aside",{className:F.root,ref:M,"aria-live":"polite","aria-busy":"false",style:{backgroundColor:"#F4FBF6",width:"250px",marginRight:"5px"}},n.a.createElement("div",{className:F.body,style:{backgroundColor:"#F4FBF6",paddingBottom:"20px",marginTop:"3px",fontSize:"14px",borderRadius:"5px"}},n.a.createElement("div",{className:F.header},n.a.createElement("h2",{className:F.headerTitle},n.a.createElement(l.a,{id:"filterModal.headerTitle",defaultMessage:"Filters"}))),n.a.createElement(N,{filterApi:v,filterNames:O,filterState:j,onRemove:C}),A,n.a.createElement("ul",{className:F.blocks},R)))}
I.defaultProps={filterCountToOpen:3},I.propTypes={classes:Object(o.shape)({action:o.string,blocks:o.string,body:o.string,header:o.string,headerTitle:o.string,root:o.string,root_open:o.string}),filters:Object(o.arrayOf)(Object(o.shape)({attribute_code:o.string,items:o.array})),filterCountToOpen:o.number}
var R=I,A=a("QS6f")},aX5L:function(e,t,a){"use strict"
var r=a("JPst"),n=a.n(r)()(function(e){return e[1]})
n.push([e.i,".currentFilters-root-KYZ {\n}\n\n/* TODO @TW: cannot compose */\n.currentFilters-root-KYZ:empty {\n    display: none;\n}\n\n.currentFilters-item-9OB {\n}\n",""]),n.locals={root:"currentFilters-root-KYZ px-xs py-0 overflow-auto",item:"currentFilters-item-9OB float-left pb-0 pl-0 pr-xs pt-xs"},t.a=n},oIux:function(e,t,a){"use strict"
var r=a("JPst"),n=a.n(r)()(function(e){return e[1]})
n.push([e.i,".currentFilter-root-7dJ {\n    min-height: 2.5rem;\n    font-size: 12px;\n    text-transform: capitalize;\n}\n\n/* TODO @TW: cannot compose */\n.currentFilter-root-7dJ svg {\n    /* composes: stroke-white from global; */\n    stroke: rgb(var(--venia-global-color-gray-50));\n}",""]),n.locals={root:"currentFilter-root-7dJ bg-gray-700 font-semibold gap-2xs grid-flow-col inline-grid items-center justify-center pl-2 pr-3 py-2.5 rounded-md text-white"},t.a=n}}])
