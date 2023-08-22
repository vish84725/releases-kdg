/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ^9.6.0, @magento/upward-security-headers: ~1.0.9, @magento/upward-js: ^5.3.2, @magento/pwa-theme-venia: ~1.3.0, @magento/pwa-buildpack: ^11.4.0, @magento/peregrine: ^12.5.1, @magento/pagebuilder: ^7.4.1, @magento/eslint-config: ^1.5.3, @magento/babel-preset-peregrine: ~1.2.1, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{NTxH:function(e,t,s){"use strict"
s.d(t,"a",function(){return d}),s.d(t,"b",function(){return c})
var i=s("q1tI"),n=s.n(i),r=s("TaHA")
function isObject(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function extend(e,t){const s=["__proto__","constructor","prototype"]
Object.keys(t).filter(e=>s.indexOf(e)<0).forEach(s=>{void 0===e[s]?e[s]=t[s]:isObject(t[s])&&isObject(e[s])&&Object.keys(t[s]).length>0?t[s].__swiper__?e[s]=t[s]:extend(e[s],t[s]):e[s]=t[s]})}function needsNavigation(e){return void 0===e&&(e={}),e.navigation&&void 0===e.navigation.nextEl&&void 0===e.navigation.prevEl}function needsPagination(e){return void 0===e&&(e={}),e.pagination&&void 0===e.pagination.el}function needsScrollbar(e){return void 0===e&&(e={}),e.scrollbar&&void 0===e.scrollbar.el}function uniqueClasses(e){void 0===e&&(e="")
const t=e.split(" ").map(e=>e.trim()).filter(e=>!!e),s=[]
return t.forEach(e=>{s.indexOf(e)<0&&s.push(e)}),s.join(" ")}const a=["modules","init","_direction","touchEventsTarget","initialSlide","_speed","cssMode","updateOnWindowResize","resizeObserver","nested","focusableElements","_enabled","_width","_height","preventInteractionOnTransition","userAgent","url","_edgeSwipeDetection","_edgeSwipeThreshold","_freeMode","_autoHeight","setWrapperSize","virtualTranslate","_effect","breakpoints","_spaceBetween","_slidesPerView","maxBackfaceHiddenSlides","_grid","_slidesPerGroup","_slidesPerGroupSkip","_slidesPerGroupAuto","_centeredSlides","_centeredSlidesBounds","_slidesOffsetBefore","_slidesOffsetAfter","normalizeSlideIndex","_centerInsufficientSlides","_watchOverflow","roundLengths","touchRatio","touchAngle","simulateTouch","_shortSwipes","_longSwipes","longSwipesRatio","longSwipesMs","_followFinger","allowTouchMove","_threshold","touchMoveStopPropagation","touchStartPreventDefault","touchStartForcePreventDefault","touchReleaseOnEdges","uniqueNavElements","_resistance","_resistanceRatio","_watchSlidesProgress","_grabCursor","preventClicks","preventClicksPropagation","_slideToClickedSlide","_preloadImages","updateOnImagesReady","_loop","_loopAdditionalSlides","_loopedSlides","_loopedSlidesLimit","_loopFillGroupWithBlank","loopPreventsSlide","_rewind","_allowSlidePrev","_allowSlideNext","_swipeHandler","_noSwiping","noSwipingClass","noSwipingSelector","passiveListeners","containerModifierClass","slideClass","slideBlankClass","slideActiveClass","slideDuplicateActiveClass","slideVisibleClass","slideDuplicateClass","slideNextClass","slideDuplicateNextClass","slidePrevClass","slideDuplicatePrevClass","wrapperClass","runCallbacksOnInit","observer","observeParents","observeSlideChildren","a11y","_autoplay","_controller","coverflowEffect","cubeEffect","fadeEffect","flipEffect","creativeEffect","cardsEffect","hashNavigation","history","keyboard","lazy","mousewheel","_navigation","_pagination","parallax","_scrollbar","_thumbs","virtual","zoom"]
function calcLoopedSlides(e,t){let s=t.slidesPerView
if(t.breakpoints){const e=r.d.prototype.getBreakpoint(t.breakpoints),i=e in t.breakpoints?t.breakpoints[e]:void 0
i&&i.slidesPerView&&(s=i.slidesPerView)}let i=Math.ceil(parseFloat(t.loopedSlides||s,10))
return(i+=t.loopAdditionalSlides)>e.length&&t.loopedSlidesLimit&&(i=e.length),i}function getChildren(e){const t=[],s={"container-start":[],"container-end":[],"wrapper-start":[],"wrapper-end":[]}
return n.a.Children.toArray(e).forEach(e=>{if(e.type&&"SwiperSlide"===e.type.displayName)t.push(e)
else if(e.props&&e.props.slot&&s[e.props.slot])s[e.props.slot].push(e)
else if(e.props&&e.props.children){const i=function processChildren(e){const t=[]
return n.a.Children.toArray(e).forEach(e=>{e.type&&"SwiperSlide"===e.type.displayName?t.push(e):e.props&&e.props.children&&processChildren(e.props.children).forEach(e=>t.push(e))}),t}(e.props.children)
i.length>0?i.forEach(e=>t.push(e)):s["container-end"].push(e)}else s["container-end"].push(e)}),{slides:t,slots:s}}function updateSwiper(e){let{swiper:t,slides:s,passedParams:i,changedParams:n,nextEl:r,prevEl:a,scrollbarEl:l,paginationEl:o}=e
const d=n.filter(e=>"children"!==e&&"direction"!==e),{params:c,pagination:p,navigation:u,scrollbar:h,virtual:f,thumbs:m}=t
let g,v,b,w,S
n.includes("thumbs")&&i.thumbs&&i.thumbs.swiper&&c.thumbs&&!c.thumbs.swiper&&(g=!0),n.includes("controller")&&i.controller&&i.controller.control&&c.controller&&!c.controller.control&&(v=!0),n.includes("pagination")&&i.pagination&&(i.pagination.el||o)&&(c.pagination||!1===c.pagination)&&p&&!p.el&&(b=!0),n.includes("scrollbar")&&i.scrollbar&&(i.scrollbar.el||l)&&(c.scrollbar||!1===c.scrollbar)&&h&&!h.el&&(w=!0),n.includes("navigation")&&i.navigation&&(i.navigation.prevEl||a)&&(i.navigation.nextEl||r)&&(c.navigation||!1===c.navigation)&&u&&!u.prevEl&&!u.nextEl&&(S=!0)
if(d.forEach(e=>{if(isObject(c[e])&&isObject(i[e]))extend(c[e],i[e])
else{const s=i[e]
!0!==s&&!1!==s||"navigation"!==e&&"pagination"!==e&&"scrollbar"!==e?c[e]=i[e]:!1===s&&(e=>{t[e]&&(t[e].destroy(),"navigation"===e?(c[e].prevEl=void 0,c[e].nextEl=void 0,t[e].prevEl=void 0,t[e].nextEl=void 0):(c[e].el=void 0,t[e].el=void 0))})(e)}}),d.includes("controller")&&!v&&t.controller&&t.controller.control&&c.controller&&c.controller.control&&(t.controller.control=c.controller.control),n.includes("children")&&s&&f&&c.virtual.enabled?(f.slides=s,f.update(!0)):n.includes("children")&&t.lazy&&t.params.lazy.enabled&&t.lazy.load(),g){m.init()&&m.update(!0)}v&&(t.controller.control=c.controller.control),b&&(o&&(c.pagination.el=o),p.init(),p.render(),p.update()),w&&(l&&(c.scrollbar.el=l),h.init(),h.updateSize(),h.setTranslate()),S&&(r&&(c.navigation.nextEl=r),a&&(c.navigation.prevEl=a),u.init(),u.update()),n.includes("allowSlideNext")&&(t.allowSlideNext=i.allowSlideNext),n.includes("allowSlidePrev")&&(t.allowSlidePrev=i.allowSlidePrev),n.includes("direction")&&t.changeDirection(i.direction,!1),t.update()}function useIsomorphicLayoutEffect(e,t){return"undefined"==typeof window?Object(i.useEffect)(e,t):Object(i.useLayoutEffect)(e,t)}const l=Object(i.createContext)(null),o=Object(i.createContext)(null)
function _extends(){return(_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t]
for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e}).apply(this,arguments)}const d=Object(i.forwardRef)(function(e,t){let{className:s,tag:l="div",wrapperTag:d="div",children:c,onSwiper:p,...u}=void 0===e?{}:e,h=!1
const[f,m]=Object(i.useState)("swiper"),[g,v]=Object(i.useState)(null),[b,w]=Object(i.useState)(!1),S=Object(i.useRef)(!1),C=Object(i.useRef)(null),y=Object(i.useRef)(null),E=Object(i.useRef)(null),T=Object(i.useRef)(null),x=Object(i.useRef)(null),$=Object(i.useRef)(null),P=Object(i.useRef)(null),k=Object(i.useRef)(null),{params:O,passedParams:M,rest:_,events:L}=function getParams(e,t){void 0===e&&(e={}),void 0===t&&(t=!0)
const s={on:{}},i={},n={}
extend(s,r.d.defaults),extend(s,r.d.extendedDefaults),s._emitClasses=!0,s.init=!1
const l={},o=a.map(e=>e.replace(/_/,"")),d=Object.assign({},e)
return Object.keys(d).forEach(r=>{void 0!==e[r]&&(o.indexOf(r)>=0?isObject(e[r])?(s[r]={},n[r]={},extend(s[r],e[r]),extend(n[r],e[r])):(s[r]=e[r],n[r]=e[r]):0===r.search(/on[A-Z]/)&&"function"==typeof e[r]?t?i[`${r[2].toLowerCase()}${r.substr(3)}`]=e[r]:s.on[`${r[2].toLowerCase()}${r.substr(3)}`]=e[r]:l[r]=e[r])}),["navigation","pagination","scrollbar"].forEach(e=>{!0===s[e]&&(s[e]={}),!1===s[e]&&delete s[e]}),{params:s,passedParams:n,rest:l,events:i}}(u),{slides:D,slots:z}=getChildren(c),A=()=>{w(!b)}
Object.assign(O.on,{_containerClasses(e,t){m(t)}})
const I=()=>{if(Object.assign(O.on,L),h=!0,y.current=new r.d(O),y.current.loopCreate=(()=>{}),y.current.loopDestroy=(()=>{}),O.loop&&(y.current.loopedSlides=calcLoopedSlides(D,O)),y.current.virtual&&y.current.params.virtual.enabled){y.current.virtual.slides=D
const e={cache:!1,slides:D,renderExternal:v,renderExternalUpdate:!1}
extend(y.current.params.virtual,e),extend(y.current.originalParams.virtual,e)}}
C.current||I(),y.current&&y.current.on("_beforeBreakpoint",A)
return Object(i.useEffect)(()=>()=>{y.current&&y.current.off("_beforeBreakpoint",A)}),Object(i.useEffect)(()=>{!S.current&&y.current&&(y.current.emitSlidesClasses(),S.current=!0)}),useIsomorphicLayoutEffect(()=>{if(t&&(t.current=C.current),C.current)return y.current.destroyed&&I(),function mountSwiper(e,t){let{el:s,nextEl:i,prevEl:n,paginationEl:r,scrollbarEl:a,swiper:l}=e
needsNavigation(t)&&i&&n&&(l.params.navigation.nextEl=i,l.originalParams.navigation.nextEl=i,l.params.navigation.prevEl=n,l.originalParams.navigation.prevEl=n),needsPagination(t)&&r&&(l.params.pagination.el=r,l.originalParams.pagination.el=r),needsScrollbar(t)&&a&&(l.params.scrollbar.el=a,l.originalParams.scrollbar.el=a),l.init(s)}({el:C.current,nextEl:x.current,prevEl:$.current,paginationEl:P.current,scrollbarEl:k.current,swiper:y.current},O),p&&p(y.current),()=>{y.current&&!y.current.destroyed&&y.current.destroy(!0,!1)}},[]),useIsomorphicLayoutEffect(()=>{!h&&L&&y.current&&Object.keys(L).forEach(e=>{y.current.on(e,L[e])})
const e=function getChangedParams(e,t,s,i,n){const r=[]
if(!t)return r
const l=e=>{r.indexOf(e)<0&&r.push(e)}
if(s&&i){const e=i.map(n),t=s.map(n)
e.join("")!==t.join("")&&l("children"),i.length!==s.length&&l("children")}return a.filter(e=>"_"===e[0]).map(e=>e.replace(/_/,"")).forEach(s=>{if(s in e&&s in t)if(isObject(e[s])&&isObject(t[s])){const i=Object.keys(e[s]),n=Object.keys(t[s])
i.length!==n.length?l(s):(i.forEach(i=>{e[s][i]!==t[s][i]&&l(s)}),n.forEach(i=>{e[s][i]!==t[s][i]&&l(s)}))}else e[s]!==t[s]&&l(s)}),r}(M,E.current,D,T.current,e=>e.key)
return E.current=M,T.current=D,e.length&&y.current&&!y.current.destroyed&&updateSwiper({swiper:y.current,slides:D,passedParams:M,changedParams:e,nextEl:x.current,prevEl:$.current,scrollbarEl:k.current,paginationEl:P.current}),()=>{L&&y.current&&Object.keys(L).forEach(e=>{y.current.off(e,L[e])})}}),useIsomorphicLayoutEffect(()=>{(e=>{!e||e.destroyed||!e.params.virtual||e.params.virtual&&!e.params.virtual.enabled||(e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.lazy&&e.params.lazy.enabled&&e.lazy.load(),e.parallax&&e.params.parallax&&e.params.parallax.enabled&&e.parallax.setTranslate())})(y.current)},[g]),n.a.createElement(l,_extends({ref:C,className:uniqueClasses(`${f}${s?` ${s}`:""}`)},_),n.a.createElement(o.Provider,{value:y.current},z["container-start"],n.a.createElement(d,{className:"swiper-wrapper"},z["wrapper-start"],function renderSlides(){return O.virtual?function renderVirtual(e,t,s){if(!s)return null
const i=e.isHorizontal()?{[e.rtlTranslate?"right":"left"]:`${s.offset}px`}:{top:`${s.offset}px`}
return t.filter((e,t)=>t>=s.from&&t<=s.to).map(t=>n.a.cloneElement(t,{swiper:e,style:i}))}(y.current,D,g):!O.loop||y.current&&y.current.destroyed?D.map(e=>n.a.cloneElement(e,{swiper:y.current})):function renderLoop(e,t,s){const i=t.map((t,s)=>n.a.cloneElement(t,{swiper:e,"data-swiper-slide-index":s}))
function duplicateSlide(e,t,i){return n.a.cloneElement(e,{key:`${e.key}-duplicate-${t}-${i}`,className:`${e.props.className||""} ${s.slideDuplicateClass}`})}if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-i.length%s.slidesPerGroup
if(e!==s.slidesPerGroup)for(let t=0;t<e;t+=1){const e=n.a.createElement("div",{className:`${s.slideClass} ${s.slideBlankClass}`})
i.push(e)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=i.length)
const r=calcLoopedSlides(i,s),a=[],l=[]
for(let e=0;e<r;e+=1){const t=e-Math.floor(e/i.length)*i.length
l.push(duplicateSlide(i[t],e,"append")),a.unshift(duplicateSlide(i[i.length-t-1],e,"prepend"))}return e&&(e.loopedSlides=r),[...a,...i,...l]}(y.current,D,O)}(),z["wrapper-end"]),needsNavigation(O)&&n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{ref:$,className:"swiper-button-prev"}),n.a.createElement("div",{ref:x,className:"swiper-button-next"})),needsScrollbar(O)&&n.a.createElement("div",{ref:k,className:"swiper-scrollbar"}),needsPagination(O)&&n.a.createElement("div",{ref:P,className:"swiper-pagination"}),z["container-end"]))})
function swiper_slide_extends(){return(swiper_slide_extends=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t]
for(var i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i])}return e}).apply(this,arguments)}d.displayName="Swiper"
const c=Object(i.forwardRef)(function(e,t){let{tag:s="div",children:r,className:a="",swiper:o,zoom:d,virtualIndex:c,...p}=void 0===e?{}:e
const u=Object(i.useRef)(null),[h,f]=Object(i.useState)("swiper-slide")
function updateClasses(e,t,s){t===u.current&&f(s)}useIsomorphicLayoutEffect(()=>{if(t&&(t.current=u.current),u.current&&o){if(!o.destroyed)return o.on("_slideClass",updateClasses),()=>{o&&o.off("_slideClass",updateClasses)}
"swiper-slide"!==h&&f("swiper-slide")}}),useIsomorphicLayoutEffect(()=>{o&&u.current&&!o.destroyed&&f(o.getSlideClasses(u.current))},[o])
const m={isActive:h.indexOf("swiper-slide-active")>=0||h.indexOf("swiper-slide-duplicate-active")>=0,isVisible:h.indexOf("swiper-slide-visible")>=0,isDuplicate:h.indexOf("swiper-slide-duplicate")>=0,isPrev:h.indexOf("swiper-slide-prev")>=0||h.indexOf("swiper-slide-duplicate-prev")>=0,isNext:h.indexOf("swiper-slide-next")>=0||h.indexOf("swiper-slide-duplicate-next")>=0},g=()=>"function"==typeof r?r(m):r
return n.a.createElement(s,swiper_slide_extends({ref:u,className:uniqueClasses(`${h}${a?` ${a}`:""}`),"data-swiper-slide-index":c},p),n.a.createElement(l.Provider,{value:m},d?n.a.createElement("div",{className:"swiper-zoom-container","data-swiper-zoom":"number"==typeof d?d:void 0},g()):g()))})
c.displayName="SwiperSlide"},TaHA:function(e,t,s){"use strict"
function isObject(e){return null!==e&&"object"==typeof e&&"constructor"in e&&e.constructor===Object}function extend(e={},t={}){Object.keys(t).forEach(s=>{void 0===e[s]?e[s]=t[s]:isObject(t[s])&&isObject(e[s])&&Object.keys(t[s]).length>0&&extend(e[s],t[s])})}s.d(t,"d",function(){return v}),s.d(t,"b",function(){return Navigation}),s.d(t,"c",function(){return Pagination}),s.d(t,"a",function(){return Autoplay})
const i={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector:()=>null,querySelectorAll:()=>[],getElementById:()=>null,createEvent:()=>({initEvent(){}}),createElement:()=>({children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName:()=>[]}),createElementNS:()=>({}),importNode:()=>null,location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""}}
function getDocument(){const e="undefined"!=typeof document?document:{}
return extend(e,i),e}const n={document:i,navigator:{userAgent:""},location:{hash:"",host:"",hostname:"",href:"",origin:"",pathname:"",protocol:"",search:""},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function CustomEvent(){return this},addEventListener(){},removeEventListener(){},getComputedStyle:()=>({getPropertyValue:()=>""}),Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia:()=>({}),requestAnimationFrame:e=>"undefined"==typeof setTimeout?(e(),null):setTimeout(e,0),cancelAnimationFrame(e){"undefined"!=typeof setTimeout&&clearTimeout(e)}}
function getWindow(){const e="undefined"!=typeof window?window:{}
return extend(e,n),e}class Dom7 extends Array{constructor(e){"number"==typeof e?super(e):(super(...e||[]),function makeReactive(e){const t=e.__proto__
Object.defineProperty(e,"__proto__",{get:()=>t,set(e){t.__proto__=e}})}(this))}}function arrayFlat(e=[]){const t=[]
return e.forEach(e=>{Array.isArray(e)?t.push(...arrayFlat(e)):t.push(e)}),t}function arrayFilter(e,t){return Array.prototype.filter.call(e,t)}function $(e,t){const s=getWindow(),i=getDocument()
let n=[]
if(!t&&e instanceof Dom7)return e
if(!e)return new Dom7(n)
if("string"==typeof e){const s=e.trim()
if(s.indexOf("<")>=0&&s.indexOf(">")>=0){let e="div"
0===s.indexOf("<li")&&(e="ul"),0===s.indexOf("<tr")&&(e="tbody"),0!==s.indexOf("<td")&&0!==s.indexOf("<th")||(e="tr"),0===s.indexOf("<tbody")&&(e="table"),0===s.indexOf("<option")&&(e="select")
const t=i.createElement(e)
t.innerHTML=s
for(let e=0;e<t.childNodes.length;e+=1)n.push(t.childNodes[e])}else n=function qsa(e,t){if("string"!=typeof e)return[e]
const s=[],i=t.querySelectorAll(e)
for(let e=0;e<i.length;e+=1)s.push(i[e])
return s}(e.trim(),t||i)}else if(e.nodeType||e===s||e===i)n.push(e)
else if(Array.isArray(e)){if(e instanceof Dom7)return e
n=e}return new Dom7(function arrayUnique(e){const t=[]
for(let s=0;s<e.length;s+=1)-1===t.indexOf(e[s])&&t.push(e[s])
return t}(n))}$.fn=Dom7.prototype
const r="resize scroll".split(" ")
function shortcut(e){return function eventHandler(...t){if(void 0===t[0]){for(let t=0;t<this.length;t+=1)r.indexOf(e)<0&&(e in this[t]?this[t][e]():$(this[t]).trigger(e))
return this}return this.on(e,...t)}}shortcut("click"),shortcut("blur"),shortcut("focus"),shortcut("focusin"),shortcut("focusout"),shortcut("keyup"),shortcut("keydown"),shortcut("keypress"),shortcut("submit"),shortcut("change"),shortcut("mousedown"),shortcut("mousemove"),shortcut("mouseup"),shortcut("mouseenter"),shortcut("mouseleave"),shortcut("mouseout"),shortcut("mouseover"),shortcut("touchstart"),shortcut("touchend"),shortcut("touchmove"),shortcut("resize"),shortcut("scroll")
const a={addClass:function addClass(...e){const t=arrayFlat(e.map(e=>e.split(" ")))
return this.forEach(e=>{e.classList.add(...t)}),this},removeClass:function removeClass(...e){const t=arrayFlat(e.map(e=>e.split(" ")))
return this.forEach(e=>{e.classList.remove(...t)}),this},hasClass:function hasClass(...e){const t=arrayFlat(e.map(e=>e.split(" ")))
return arrayFilter(this,e=>t.filter(t=>e.classList.contains(t)).length>0).length>0},toggleClass:function toggleClass(...e){const t=arrayFlat(e.map(e=>e.split(" ")))
this.forEach(e=>{t.forEach(t=>{e.classList.toggle(t)})})},attr:function attr(e,t){if(1===arguments.length&&"string"==typeof e)return this[0]?this[0].getAttribute(e):void 0
for(let s=0;s<this.length;s+=1)if(2===arguments.length)this[s].setAttribute(e,t)
else for(const t in e)this[s][t]=e[t],this[s].setAttribute(t,e[t])
return this},removeAttr:function removeAttr(e){for(let t=0;t<this.length;t+=1)this[t].removeAttribute(e)
return this},transform:function dom7_esm_transform(e){for(let t=0;t<this.length;t+=1)this[t].style.transform=e
return this},transition:function transition(e){for(let t=0;t<this.length;t+=1)this[t].style.transitionDuration="string"!=typeof e?`${e}ms`:e
return this},on:function dom7_esm_on(...e){let[t,s,i,n]=e
function handleLiveEvent(e){const t=e.target
if(!t)return
const n=e.target.dom7EventData||[]
if(n.indexOf(e)<0&&n.unshift(e),$(t).is(s))i.apply(t,n)
else{const e=$(t).parents()
for(let t=0;t<e.length;t+=1)$(e[t]).is(s)&&i.apply(e[t],n)}}function handleEvent(e){const t=e&&e.target&&e.target.dom7EventData||[]
t.indexOf(e)<0&&t.unshift(e),i.apply(this,t)}"function"==typeof e[1]&&([t,i,n]=e,s=void 0),n||(n=!1)
const r=t.split(" ")
let a
for(let e=0;e<this.length;e+=1){const t=this[e]
if(s)for(a=0;a<r.length;a+=1){const e=r[a]
t.dom7LiveListeners||(t.dom7LiveListeners={}),t.dom7LiveListeners[e]||(t.dom7LiveListeners[e]=[]),t.dom7LiveListeners[e].push({listener:i,proxyListener:handleLiveEvent}),t.addEventListener(e,handleLiveEvent,n)}else for(a=0;a<r.length;a+=1){const e=r[a]
t.dom7Listeners||(t.dom7Listeners={}),t.dom7Listeners[e]||(t.dom7Listeners[e]=[]),t.dom7Listeners[e].push({listener:i,proxyListener:handleEvent}),t.addEventListener(e,handleEvent,n)}}return this},off:function off(...e){let[t,s,i,n]=e
"function"==typeof e[1]&&([t,i,n]=e,s=void 0),n||(n=!1)
const r=t.split(" ")
for(let e=0;e<r.length;e+=1){const t=r[e]
for(let e=0;e<this.length;e+=1){const r=this[e]
let a
if(!s&&r.dom7Listeners?a=r.dom7Listeners[t]:s&&r.dom7LiveListeners&&(a=r.dom7LiveListeners[t]),a&&a.length)for(let e=a.length-1;e>=0;e-=1){const s=a[e]
i&&s.listener===i?(r.removeEventListener(t,s.proxyListener,n),a.splice(e,1)):i&&s.listener&&s.listener.dom7proxy&&s.listener.dom7proxy===i?(r.removeEventListener(t,s.proxyListener,n),a.splice(e,1)):i||(r.removeEventListener(t,s.proxyListener,n),a.splice(e,1))}}}return this},trigger:function trigger(...e){const t=getWindow(),s=e[0].split(" "),i=e[1]
for(let n=0;n<s.length;n+=1){const r=s[n]
for(let s=0;s<this.length;s+=1){const n=this[s]
if(t.CustomEvent){const s=new t.CustomEvent(r,{detail:i,bubbles:!0,cancelable:!0})
n.dom7EventData=e.filter((e,t)=>t>0),n.dispatchEvent(s),n.dom7EventData=[],delete n.dom7EventData}}}return this},transitionEnd:function transitionEnd(e){const t=this
return e&&t.on("transitionend",function fireCallBack(s){s.target===this&&(e.call(this,s),t.off("transitionend",fireCallBack))}),this},outerWidth:function dom7_esm_outerWidth(e){if(this.length>0){if(e){const e=this.styles()
return this[0].offsetWidth+parseFloat(e.getPropertyValue("margin-right"))+parseFloat(e.getPropertyValue("margin-left"))}return this[0].offsetWidth}return null},outerHeight:function dom7_esm_outerHeight(e){if(this.length>0){if(e){const e=this.styles()
return this[0].offsetHeight+parseFloat(e.getPropertyValue("margin-top"))+parseFloat(e.getPropertyValue("margin-bottom"))}return this[0].offsetHeight}return null},styles:function styles(){const e=getWindow()
return this[0]?e.getComputedStyle(this[0],null):{}},offset:function dom7_esm_offset(){if(this.length>0){const e=getWindow(),t=getDocument(),s=this[0],i=s.getBoundingClientRect(),n=t.body,r=s.clientTop||n.clientTop||0,a=s.clientLeft||n.clientLeft||0,l=s===e?e.scrollY:s.scrollTop,o=s===e?e.scrollX:s.scrollLeft
return{top:i.top+l-r,left:i.left+o-a}}return null},css:function css(e,t){const s=getWindow()
let i
if(1===arguments.length){if("string"!=typeof e){for(i=0;i<this.length;i+=1)for(const t in e)this[i].style[t]=e[t]
return this}if(this[0])return s.getComputedStyle(this[0],null).getPropertyValue(e)}if(2===arguments.length&&"string"==typeof e){for(i=0;i<this.length;i+=1)this[i].style[e]=t
return this}return this},each:function each(e){return e?(this.forEach((t,s)=>{e.apply(t,[t,s])}),this):this},html:function html(e){if(void 0===e)return this[0]?this[0].innerHTML:null
for(let t=0;t<this.length;t+=1)this[t].innerHTML=e
return this},text:function dom7_esm_text(e){if(void 0===e)return this[0]?this[0].textContent.trim():null
for(let t=0;t<this.length;t+=1)this[t].textContent=e
return this},is:function is(e){const t=getWindow(),s=getDocument(),i=this[0]
let n,r
if(!i||void 0===e)return!1
if("string"==typeof e){if(i.matches)return i.matches(e)
if(i.webkitMatchesSelector)return i.webkitMatchesSelector(e)
if(i.msMatchesSelector)return i.msMatchesSelector(e)
for(n=$(e),r=0;r<n.length;r+=1)if(n[r]===i)return!0
return!1}if(e===s)return i===s
if(e===t)return i===t
if(e.nodeType||e instanceof Dom7){for(n=e.nodeType?[e]:e,r=0;r<n.length;r+=1)if(n[r]===i)return!0
return!1}return!1},index:function dom7_esm_index(){let e,t=this[0]
if(t){for(e=0;null!==(t=t.previousSibling);)1===t.nodeType&&(e+=1)
return e}},eq:function eq(e){if(void 0===e)return this
const t=this.length
if(e>t-1)return $([])
if(e<0){const s=t+e
return $(s<0?[]:[this[s]])}return $([this[e]])},append:function append(...e){let t
const s=getDocument()
for(let i=0;i<e.length;i+=1){t=e[i]
for(let e=0;e<this.length;e+=1)if("string"==typeof t){const i=s.createElement("div")
for(i.innerHTML=t;i.firstChild;)this[e].appendChild(i.firstChild)}else if(t instanceof Dom7)for(let s=0;s<t.length;s+=1)this[e].appendChild(t[s])
else this[e].appendChild(t)}return this},prepend:function prepend(e){const t=getDocument()
let s,i
for(s=0;s<this.length;s+=1)if("string"==typeof e){const n=t.createElement("div")
for(n.innerHTML=e,i=n.childNodes.length-1;i>=0;i-=1)this[s].insertBefore(n.childNodes[i],this[s].childNodes[0])}else if(e instanceof Dom7)for(i=0;i<e.length;i+=1)this[s].insertBefore(e[i],this[s].childNodes[0])
else this[s].insertBefore(e,this[s].childNodes[0])
return this},next:function next(e){return this.length>0?e?this[0].nextElementSibling&&$(this[0].nextElementSibling).is(e)?$([this[0].nextElementSibling]):$([]):this[0].nextElementSibling?$([this[0].nextElementSibling]):$([]):$([])},nextAll:function nextAll(e){const t=[]
let s=this[0]
if(!s)return $([])
for(;s.nextElementSibling;){const i=s.nextElementSibling
e?$(i).is(e)&&t.push(i):t.push(i),s=i}return $(t)},prev:function prev(e){if(this.length>0){const t=this[0]
return e?t.previousElementSibling&&$(t.previousElementSibling).is(e)?$([t.previousElementSibling]):$([]):t.previousElementSibling?$([t.previousElementSibling]):$([])}return $([])},prevAll:function prevAll(e){const t=[]
let s=this[0]
if(!s)return $([])
for(;s.previousElementSibling;){const i=s.previousElementSibling
e?$(i).is(e)&&t.push(i):t.push(i),s=i}return $(t)},parent:function dom7_esm_parent(e){const t=[]
for(let s=0;s<this.length;s+=1)null!==this[s].parentNode&&(e?$(this[s].parentNode).is(e)&&t.push(this[s].parentNode):t.push(this[s].parentNode))
return $(t)},parents:function parents(e){const t=[]
for(let s=0;s<this.length;s+=1){let i=this[s].parentNode
for(;i;)e?$(i).is(e)&&t.push(i):t.push(i),i=i.parentNode}return $(t)},closest:function closest(e){let t=this
return void 0===e?$([]):(t.is(e)||(t=t.parents(e).eq(0)),t)},find:function find(e){const t=[]
for(let s=0;s<this.length;s+=1){const i=this[s].querySelectorAll(e)
for(let e=0;e<i.length;e+=1)t.push(i[e])}return $(t)},children:function children(e){const t=[]
for(let s=0;s<this.length;s+=1){const i=this[s].children
for(let s=0;s<i.length;s+=1)e&&!$(i[s]).is(e)||t.push(i[s])}return $(t)},filter:function filter(e){return $(arrayFilter(this,e))},remove:function remove(){for(let e=0;e<this.length;e+=1)this[e].parentNode&&this[e].parentNode.removeChild(this[e])
return this}}
Object.keys(a).forEach(e=>{Object.defineProperty($.fn,e,{value:a[e],writable:!0})})
var l=$
function nextTick(e,t){return void 0===t&&(t=0),setTimeout(e,t)}function now(){return Date.now()}function getTranslate(e,t){void 0===t&&(t="x")
const s=getWindow()
let i,n,r
const a=function utils_getComputedStyle(e){const t=getWindow()
let s
return t.getComputedStyle&&(s=t.getComputedStyle(e,null)),!s&&e.currentStyle&&(s=e.currentStyle),s||(s=e.style),s}(e)
return s.WebKitCSSMatrix?((n=a.transform||a.webkitTransform).split(",").length>6&&(n=n.split(", ").map(e=>e.replace(",",".")).join(", ")),r=new s.WebKitCSSMatrix("none"===n?"":n)):i=(r=a.MozTransform||a.OTransform||a.MsTransform||a.msTransform||a.transform||a.getPropertyValue("transform").replace("translate(","matrix(1, 0, 0, 1,")).toString().split(","),"x"===t&&(n=s.WebKitCSSMatrix?r.m41:16===i.length?parseFloat(i[12]):parseFloat(i[4])),"y"===t&&(n=s.WebKitCSSMatrix?r.m42:16===i.length?parseFloat(i[13]):parseFloat(i[5])),n||0}function utils_isObject(e){return"object"==typeof e&&null!==e&&e.constructor&&"Object"===Object.prototype.toString.call(e).slice(8,-1)}function utils_extend(){const e=Object(arguments.length<=0?void 0:arguments[0]),t=["__proto__","constructor","prototype"]
for(let i=1;i<arguments.length;i+=1){const n=i<0||arguments.length<=i?void 0:arguments[i]
if(null!=n&&(s=n,!("undefined"!=typeof window&&void 0!==window.HTMLElement?s instanceof HTMLElement:s&&(1===s.nodeType||11===s.nodeType)))){const s=Object.keys(Object(n)).filter(e=>t.indexOf(e)<0)
for(let t=0,i=s.length;t<i;t+=1){const i=s[t],r=Object.getOwnPropertyDescriptor(n,i)
void 0!==r&&r.enumerable&&(utils_isObject(e[i])&&utils_isObject(n[i])?n[i].__swiper__?e[i]=n[i]:utils_extend(e[i],n[i]):!utils_isObject(e[i])&&utils_isObject(n[i])?(e[i]={},n[i].__swiper__?e[i]=n[i]:utils_extend(e[i],n[i])):e[i]=n[i])}}}var s
return e}function setCSSProperty(e,t,s){e.style.setProperty(t,s)}function animateCSSModeScroll(e){let{swiper:t,targetPosition:s,side:i}=e
const n=getWindow(),r=-t.translate
let a,l=null
const o=t.params.speed
t.wrapperEl.style.scrollSnapType="none",n.cancelAnimationFrame(t.cssModeFrameID)
const d=s>r?"next":"prev",c=(e,t)=>"next"===d&&e>=t||"prev"===d&&e<=t,p=()=>{a=(new Date).getTime(),null===l&&(l=a)
const e=Math.max(Math.min((a-l)/o,1),0),d=.5-Math.cos(e*Math.PI)/2
let u=r+d*(s-r)
if(c(u,s)&&(u=s),t.wrapperEl.scrollTo({[i]:u}),c(u,s))return t.wrapperEl.style.overflow="hidden",t.wrapperEl.style.scrollSnapType="",setTimeout(()=>{t.wrapperEl.style.overflow="",t.wrapperEl.scrollTo({[i]:u})}),void n.cancelAnimationFrame(t.cssModeFrameID)
t.cssModeFrameID=n.requestAnimationFrame(p)}
p()}let o,d,c
function getSupport(){return o||(o=function calcSupport(){const e=getWindow(),t=getDocument()
return{smoothScroll:t.documentElement&&"scrollBehavior"in t.documentElement.style,touch:!!("ontouchstart"in e||e.DocumentTouch&&t instanceof e.DocumentTouch),passiveListener:function checkPassiveListener(){let t=!1
try{const s=Object.defineProperty({},"passive",{get(){t=!0}})
e.addEventListener("testPassiveListener",null,s)}catch(e){}return t}(),gestures:function checkGestures(){return"ongesturestart"in e}()}}()),o}function getDevice(e){return void 0===e&&(e={}),d||(d=function calcDevice(e){let{userAgent:t}=void 0===e?{}:e
const s=getSupport(),i=getWindow(),n=i.navigator.platform,r=t||i.navigator.userAgent,a={ios:!1,android:!1},l=i.screen.width,o=i.screen.height,d=r.match(/(Android);?[\s\/]+([\d.]+)?/)
let c=r.match(/(iPad).*OS\s([\d_]+)/)
const p=r.match(/(iPod)(.*OS\s([\d_]+))?/),u=!c&&r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),h="Win32"===n
let f="MacIntel"===n
return!c&&f&&s.touch&&["1024x1366","1366x1024","834x1194","1194x834","834x1112","1112x834","768x1024","1024x768","820x1180","1180x820","810x1080","1080x810"].indexOf(`${l}x${o}`)>=0&&((c=r.match(/(Version)\/([\d.]+)/))||(c=[0,1,"13_0_0"]),f=!1),d&&!h&&(a.os="android",a.android=!0),(c||u||p)&&(a.os="ios",a.ios=!0),a}(e)),d}function getBrowser(){return c||(c=function calcBrowser(){const e=getWindow()
return{isSafari:function isSafari(){const t=e.navigator.userAgent.toLowerCase()
return t.indexOf("safari")>=0&&t.indexOf("chrome")<0&&t.indexOf("android")<0}(),isWebView:/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)}}()),c}function transitionEmit(e){let{swiper:t,runCallbacks:s,direction:i,step:n}=e
const{activeIndex:r,previousIndex:a}=t
let l=i
if(l||(l=r>a?"next":r<a?"prev":"reset"),t.emit(`transition${n}`),s&&r!==a){if("reset"===l)return void t.emit(`slideResetTransition${n}`)
t.emit(`slideChangeTransition${n}`),"next"===l?t.emit(`slideNextTransition${n}`):t.emit(`slidePrevTransition${n}`)}}function onTouchStart_onTouchStart(e){const t=this,s=getDocument(),i=getWindow(),n=t.touchEventsData,{params:r,touches:a,enabled:o}=t
if(!o)return
if(t.animating&&r.preventInteractionOnTransition)return
!t.animating&&r.cssMode&&r.loop&&t.loopFix()
let d=e
d.originalEvent&&(d=d.originalEvent)
let c=l(d.target)
if("wrapper"===r.touchEventsTarget&&!c.closest(t.wrapperEl).length)return
if(n.isTouchEvent="touchstart"===d.type,!n.isTouchEvent&&"which"in d&&3===d.which)return
if(!n.isTouchEvent&&"button"in d&&d.button>0)return
if(n.isTouched&&n.isMoved)return
!!r.noSwipingClass&&""!==r.noSwipingClass&&d.target&&d.target.shadowRoot&&e.path&&e.path[0]&&(c=l(e.path[0]))
const p=r.noSwipingSelector?r.noSwipingSelector:`.${r.noSwipingClass}`,u=!(!d.target||!d.target.shadowRoot)
if(r.noSwiping&&(u?function closestElement(e,t){return void 0===t&&(t=this),function __closestFrom(t){if(!t||t===getDocument()||t===getWindow())return null
t.assignedSlot&&(t=t.assignedSlot)
const s=t.closest(e)
return s||t.getRootNode?s||__closestFrom(t.getRootNode().host):null}(t)}(p,c[0]):c.closest(p)[0]))return void(t.allowClick=!0)
if(r.swipeHandler&&!c.closest(r.swipeHandler)[0])return
a.currentX="touchstart"===d.type?d.targetTouches[0].pageX:d.pageX,a.currentY="touchstart"===d.type?d.targetTouches[0].pageY:d.pageY
const h=a.currentX,f=a.currentY,m=r.edgeSwipeDetection||r.iOSEdgeSwipeDetection,g=r.edgeSwipeThreshold||r.iOSEdgeSwipeThreshold
if(m&&(h<=g||h>=i.innerWidth-g)){if("prevent"!==m)return
e.preventDefault()}if(Object.assign(n,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),a.startX=h,a.startY=f,n.touchStartTime=now(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,r.threshold>0&&(n.allowThresholdMove=!1),"touchstart"!==d.type){let e=!0
c.is(n.focusableElements)&&(e=!1,"SELECT"===c[0].nodeName&&(n.isTouched=!1)),s.activeElement&&l(s.activeElement).is(n.focusableElements)&&s.activeElement!==c[0]&&s.activeElement.blur()
const i=e&&t.allowTouchMove&&r.touchStartPreventDefault
!r.touchStartForcePreventDefault&&!i||c[0].isContentEditable||d.preventDefault()}t.params.freeMode&&t.params.freeMode.enabled&&t.freeMode&&t.animating&&!r.cssMode&&t.freeMode.onTouchStart(),t.emit("touchStart",d)}function onResize(){const e=this,{params:t,el:s}=e
if(s&&0===s.offsetWidth)return
t.breakpoints&&e.setBreakpoint()
const{allowSlideNext:i,allowSlidePrev:n,snapGrid:r}=e
e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses(),("auto"===t.slidesPerView||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0),e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.run(),e.allowSlidePrev=n,e.allowSlideNext=i,e.params.watchOverflow&&r!==e.snapGrid&&e.checkOverflow()}let p=!1
function dummyEventListener(){}const u=(e,t)=>{const s=getDocument(),{params:i,touchEvents:n,el:r,wrapperEl:a,device:l,support:o}=e,d=!!i.nested,c="on"===t?"addEventListener":"removeEventListener",p=t
if(o.touch){const t=!("touchstart"!==n.start||!o.passiveListener||!i.passiveListeners)&&{passive:!0,capture:!1}
r[c](n.start,e.onTouchStart,t),r[c](n.move,e.onTouchMove,o.passiveListener?{passive:!1,capture:d}:d),r[c](n.end,e.onTouchEnd,t),n.cancel&&r[c](n.cancel,e.onTouchEnd,t)}else r[c](n.start,e.onTouchStart,!1),s[c](n.move,e.onTouchMove,d),s[c](n.end,e.onTouchEnd,!1);(i.preventClicks||i.preventClicksPropagation)&&r[c]("click",e.onClick,!0),i.cssMode&&a[c]("scroll",e.onScroll),i.updateOnWindowResize?e[p](l.ios||l.android?"resize orientationchange observerUpdate":"resize observerUpdate",onResize,!0):e[p]("observerUpdate",onResize,!0)}
const h=(e,t)=>e.grid&&t.grid&&t.grid.rows>1
var f={init:!0,direction:"horizontal",touchEventsTarget:"wrapper",initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,enabled:!0,focusableElements:"input, select, option, textarea, button, video, label",width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:"slide",breakpoints:void 0,breakpointsBase:"window",spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:0,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,preloadImages:!0,updateOnImagesReady:!0,loop:!1,loopAdditionalSlides:0,loopedSlides:null,loopedSlidesLimit:!0,loopFillGroupWithBlank:!1,loopPreventsSlide:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:"swiper-no-swiping",noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:"swiper-",slideClass:"swiper-slide",slideBlankClass:"swiper-slide-invisible-blank",slideActiveClass:"swiper-slide-active",slideDuplicateActiveClass:"swiper-slide-duplicate-active",slideVisibleClass:"swiper-slide-visible",slideDuplicateClass:"swiper-slide-duplicate",slideNextClass:"swiper-slide-next",slideDuplicateNextClass:"swiper-slide-duplicate-next",slidePrevClass:"swiper-slide-prev",slideDuplicatePrevClass:"swiper-slide-duplicate-prev",wrapperClass:"swiper-wrapper",runCallbacksOnInit:!0,_emitClasses:!1}
function moduleExtendParams(e,t){return function extendParams(s){void 0===s&&(s={})
const i=Object.keys(s)[0],n=s[i]
"object"==typeof n&&null!==n?(["navigation","pagination","scrollbar"].indexOf(i)>=0&&!0===e[i]&&(e[i]={auto:!0}),i in e&&"enabled"in n?(!0===e[i]&&(e[i]={enabled:!0}),"object"!=typeof e[i]||"enabled"in e[i]||(e[i].enabled=!0),e[i]||(e[i]={enabled:!1}),utils_extend(t,s)):utils_extend(t,s)):utils_extend(t,s)}}const m={eventsEmitter:{on(e,t,s){const i=this
if(!i.eventsListeners||i.destroyed)return i
if("function"!=typeof t)return i
const n=s?"unshift":"push"
return e.split(" ").forEach(e=>{i.eventsListeners[e]||(i.eventsListeners[e]=[]),i.eventsListeners[e][n](t)}),i},once(e,t,s){const i=this
if(!i.eventsListeners||i.destroyed)return i
if("function"!=typeof t)return i
function onceHandler(){i.off(e,onceHandler),onceHandler.__emitterProxy&&delete onceHandler.__emitterProxy
for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r]
t.apply(i,n)}return onceHandler.__emitterProxy=t,i.on(e,onceHandler,s)},onAny(e,t){const s=this
if(!s.eventsListeners||s.destroyed)return s
if("function"!=typeof e)return s
const i=t?"unshift":"push"
return s.eventsAnyListeners.indexOf(e)<0&&s.eventsAnyListeners[i](e),s},offAny(e){const t=this
if(!t.eventsListeners||t.destroyed)return t
if(!t.eventsAnyListeners)return t
const s=t.eventsAnyListeners.indexOf(e)
return s>=0&&t.eventsAnyListeners.splice(s,1),t},off(e,t){const s=this
return!s.eventsListeners||s.destroyed?s:s.eventsListeners?(e.split(" ").forEach(e=>{void 0===t?s.eventsListeners[e]=[]:s.eventsListeners[e]&&s.eventsListeners[e].forEach((i,n)=>{(i===t||i.__emitterProxy&&i.__emitterProxy===t)&&s.eventsListeners[e].splice(n,1)})}),s):s},emit(){const e=this
if(!e.eventsListeners||e.destroyed)return e
if(!e.eventsListeners)return e
let t,s,i
for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a]
return"string"==typeof r[0]||Array.isArray(r[0])?(t=r[0],s=r.slice(1,r.length),i=e):(t=r[0].events,s=r[0].data,i=r[0].context||e),s.unshift(i),(Array.isArray(t)?t:t.split(" ")).forEach(t=>{e.eventsAnyListeners&&e.eventsAnyListeners.length&&e.eventsAnyListeners.forEach(e=>{e.apply(i,[t,...s])}),e.eventsListeners&&e.eventsListeners[t]&&e.eventsListeners[t].forEach(e=>{e.apply(i,s)})}),e}},update:{updateSize:function updateSize_updateSize(){const e=this
let t,s
const i=e.$el
t=void 0!==e.params.width&&null!==e.params.width?e.params.width:i[0].clientWidth,s=void 0!==e.params.height&&null!==e.params.height?e.params.height:i[0].clientHeight,0===t&&e.isHorizontal()||0===s&&e.isVertical()||(t=t-parseInt(i.css("padding-left")||0,10)-parseInt(i.css("padding-right")||0,10),s=s-parseInt(i.css("padding-top")||0,10)-parseInt(i.css("padding-bottom")||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(s)&&(s=0),Object.assign(e,{width:t,height:s,size:e.isHorizontal()?t:s}))},updateSlides:function updateSlides(){const e=this
function getDirectionLabel(t){return e.isHorizontal()?t:{width:"height","margin-top":"margin-left","margin-bottom ":"margin-right","margin-left":"margin-top","margin-right":"margin-bottom","padding-left":"padding-top","padding-right":"padding-bottom",marginRight:"marginBottom"}[t]}function getDirectionPropertyValue(e,t){return parseFloat(e.getPropertyValue(getDirectionLabel(t))||0)}const t=e.params,{$wrapperEl:s,size:i,rtlTranslate:n,wrongRTL:r}=e,a=e.virtual&&t.virtual.enabled,l=a?e.virtual.slides.length:e.slides.length,o=s.children(`.${e.params.slideClass}`),d=a?e.virtual.slides.length:o.length
let c=[]
const p=[],u=[]
let h=t.slidesOffsetBefore
"function"==typeof h&&(h=t.slidesOffsetBefore.call(e))
let f=t.slidesOffsetAfter
"function"==typeof f&&(f=t.slidesOffsetAfter.call(e))
const m=e.snapGrid.length,g=e.slidesGrid.length
let v=t.spaceBetween,b=-h,w=0,S=0
if(void 0===i)return
"string"==typeof v&&v.indexOf("%")>=0&&(v=parseFloat(v.replace("%",""))/100*i),e.virtualSize=-v,n?o.css({marginLeft:"",marginBottom:"",marginTop:""}):o.css({marginRight:"",marginBottom:"",marginTop:""}),t.centeredSlides&&t.cssMode&&(setCSSProperty(e.wrapperEl,"--swiper-centered-offset-before",""),setCSSProperty(e.wrapperEl,"--swiper-centered-offset-after",""))
const C=t.grid&&t.grid.rows>1&&e.grid
let y
C&&e.grid.initSlides(d)
const E="auto"===t.slidesPerView&&t.breakpoints&&Object.keys(t.breakpoints).filter(e=>void 0!==t.breakpoints[e].slidesPerView).length>0
for(let s=0;s<d;s+=1){y=0
const n=o.eq(s)
if(C&&e.grid.updateSlide(s,n,d,getDirectionLabel),"none"!==n.css("display")){if("auto"===t.slidesPerView){E&&(o[s].style[getDirectionLabel("width")]="")
const i=getComputedStyle(n[0]),r=n[0].style.transform,a=n[0].style.webkitTransform
if(r&&(n[0].style.transform="none"),a&&(n[0].style.webkitTransform="none"),t.roundLengths)y=e.isHorizontal()?n.outerWidth(!0):n.outerHeight(!0)
else{const e=getDirectionPropertyValue(i,"width"),t=getDirectionPropertyValue(i,"padding-left"),s=getDirectionPropertyValue(i,"padding-right"),r=getDirectionPropertyValue(i,"margin-left"),a=getDirectionPropertyValue(i,"margin-right"),l=i.getPropertyValue("box-sizing")
if(l&&"border-box"===l)y=e+r+a
else{const{clientWidth:i,offsetWidth:l}=n[0]
y=e+t+s+r+a+(l-i)}}r&&(n[0].style.transform=r),a&&(n[0].style.webkitTransform=a),t.roundLengths&&(y=Math.floor(y))}else y=(i-(t.slidesPerView-1)*v)/t.slidesPerView,t.roundLengths&&(y=Math.floor(y)),o[s]&&(o[s].style[getDirectionLabel("width")]=`${y}px`)
o[s]&&(o[s].swiperSlideSize=y),u.push(y),t.centeredSlides?(b=b+y/2+w/2+v,0===w&&0!==s&&(b=b-i/2-v),0===s&&(b=b-i/2-v),Math.abs(b)<.001&&(b=0),t.roundLengths&&(b=Math.floor(b)),S%t.slidesPerGroup==0&&c.push(b),p.push(b)):(t.roundLengths&&(b=Math.floor(b)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup==0&&c.push(b),p.push(b),b=b+y+v),e.virtualSize+=y+v,w=y,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,i)+f,n&&r&&("slide"===t.effect||"coverflow"===t.effect)&&s.css({width:`${e.virtualSize+t.spaceBetween}px`}),t.setWrapperSize&&s.css({[getDirectionLabel("width")]:`${e.virtualSize+t.spaceBetween}px`}),C&&e.grid.updateWrapperSize(y,c,getDirectionLabel),!t.centeredSlides){const s=[]
for(let n=0;n<c.length;n+=1){let r=c[n]
t.roundLengths&&(r=Math.floor(r)),c[n]<=e.virtualSize-i&&s.push(r)}c=s,Math.floor(e.virtualSize-i)-Math.floor(c[c.length-1])>1&&c.push(e.virtualSize-i)}if(0===c.length&&(c=[0]),0!==t.spaceBetween){const s=e.isHorizontal()&&n?"marginLeft":getDirectionLabel("marginRight")
o.filter((e,s)=>!t.cssMode||s!==o.length-1).css({[s]:`${v}px`})}if(t.centeredSlides&&t.centeredSlidesBounds){let e=0
u.forEach(s=>{e+=s+(t.spaceBetween?t.spaceBetween:0)})
const s=(e-=t.spaceBetween)-i
c=c.map(e=>e<0?-h:e>s?s+f:e)}if(t.centerInsufficientSlides){let e=0
if(u.forEach(s=>{e+=s+(t.spaceBetween?t.spaceBetween:0)}),(e-=t.spaceBetween)<i){const t=(i-e)/2
c.forEach((e,s)=>{c[s]=e-t}),p.forEach((e,s)=>{p[s]=e+t})}}if(Object.assign(e,{slides:o,snapGrid:c,slidesGrid:p,slidesSizesGrid:u}),t.centeredSlides&&t.cssMode&&!t.centeredSlidesBounds){setCSSProperty(e.wrapperEl,"--swiper-centered-offset-before",`${-c[0]}px`),setCSSProperty(e.wrapperEl,"--swiper-centered-offset-after",`${e.size/2-u[u.length-1]/2}px`)
const t=-e.snapGrid[0],s=-e.slidesGrid[0]
e.snapGrid=e.snapGrid.map(e=>e+t),e.slidesGrid=e.slidesGrid.map(e=>e+s)}if(d!==l&&e.emit("slidesLengthChange"),c.length!==m&&(e.params.watchOverflow&&e.checkOverflow(),e.emit("snapGridLengthChange")),p.length!==g&&e.emit("slidesGridLengthChange"),t.watchSlidesProgress&&e.updateSlidesOffset(),!(a||t.cssMode||"slide"!==t.effect&&"fade"!==t.effect)){const s=`${t.containerModifierClass}backface-hidden`,i=e.$el.hasClass(s)
d<=t.maxBackfaceHiddenSlides?i||e.$el.addClass(s):i&&e.$el.removeClass(s)}},updateAutoHeight:function updateAutoHeight(e){const t=this,s=[],i=t.virtual&&t.params.virtual.enabled
let n,r=0
"number"==typeof e?t.setTransition(e):!0===e&&t.setTransition(t.params.speed)
const a=e=>i?t.slides.filter(t=>parseInt(t.getAttribute("data-swiper-slide-index"),10)===e)[0]:t.slides.eq(e)[0]
if("auto"!==t.params.slidesPerView&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||l([])).each(e=>{s.push(e)})
else for(n=0;n<Math.ceil(t.params.slidesPerView);n+=1){const e=t.activeIndex+n
if(e>t.slides.length&&!i)break
s.push(a(e))}else s.push(a(t.activeIndex))
for(n=0;n<s.length;n+=1)if(void 0!==s[n]){const e=s[n].offsetHeight
r=e>r?e:r}(r||0===r)&&t.$wrapperEl.css("height",`${r}px`)},updateSlidesOffset:function updateSlidesOffset(){const e=this,t=e.slides
for(let s=0;s<t.length;s+=1)t[s].swiperSlideOffset=e.isHorizontal()?t[s].offsetLeft:t[s].offsetTop},updateSlidesProgress:function updateSlidesProgress(e){void 0===e&&(e=this&&this.translate||0)
const t=this,s=t.params,{slides:i,rtlTranslate:n,snapGrid:r}=t
if(0===i.length)return
void 0===i[0].swiperSlideOffset&&t.updateSlidesOffset()
let a=-e
n&&(a=e),i.removeClass(s.slideVisibleClass),t.visibleSlidesIndexes=[],t.visibleSlides=[]
for(let e=0;e<i.length;e+=1){const l=i[e]
let o=l.swiperSlideOffset
s.cssMode&&s.centeredSlides&&(o-=i[0].swiperSlideOffset)
const d=(a+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),c=(a-r[0]+(s.centeredSlides?t.minTranslate():0)-o)/(l.swiperSlideSize+s.spaceBetween),p=-(a-o),u=p+t.slidesSizesGrid[e];(p>=0&&p<t.size-1||u>1&&u<=t.size||p<=0&&u>=t.size)&&(t.visibleSlides.push(l),t.visibleSlidesIndexes.push(e),i.eq(e).addClass(s.slideVisibleClass)),l.progress=n?-d:d,l.originalProgress=n?-c:c}t.visibleSlides=l(t.visibleSlides)},updateProgress:function updateProgress(e){const t=this
if(void 0===e){const s=t.rtlTranslate?-1:1
e=t&&t.translate&&t.translate*s||0}const s=t.params,i=t.maxTranslate()-t.minTranslate()
let{progress:n,isBeginning:r,isEnd:a}=t
const l=r,o=a
0===i?(n=0,r=!0,a=!0):(r=(n=(e-t.minTranslate())/i)<=0,a=n>=1),Object.assign(t,{progress:n,isBeginning:r,isEnd:a}),(s.watchSlidesProgress||s.centeredSlides&&s.autoHeight)&&t.updateSlidesProgress(e),r&&!l&&t.emit("reachBeginning toEdge"),a&&!o&&t.emit("reachEnd toEdge"),(l&&!r||o&&!a)&&t.emit("fromEdge"),t.emit("progress",n)},updateSlidesClasses:function updateSlidesClasses(){const e=this,{slides:t,params:s,$wrapperEl:i,activeIndex:n,realIndex:r}=e,a=e.virtual&&s.virtual.enabled
let l
t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`),(l=a?e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${n}"]`):t.eq(n)).addClass(s.slideActiveClass),s.loop&&(l.hasClass(s.slideDuplicateClass)?i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass):i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass))
let o=l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass)
s.loop&&0===o.length&&(o=t.eq(0)).addClass(s.slideNextClass)
let d=l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass)
s.loop&&0===d.length&&(d=t.eq(-1)).addClass(s.slidePrevClass),s.loop&&(o.hasClass(s.slideDuplicateClass)?i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass):i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass),d.hasClass(s.slideDuplicateClass)?i.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass):i.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)),e.emitSlidesClasses()},updateActiveIndex:function updateActiveIndex(e){const t=this,s=t.rtlTranslate?t.translate:-t.translate,{slidesGrid:i,snapGrid:n,params:r,activeIndex:a,realIndex:l,snapIndex:o}=t
let d,c=e
if(void 0===c){for(let e=0;e<i.length;e+=1)void 0!==i[e+1]?s>=i[e]&&s<i[e+1]-(i[e+1]-i[e])/2?c=e:s>=i[e]&&s<i[e+1]&&(c=e+1):s>=i[e]&&(c=e)
r.normalizeSlideIndex&&(c<0||void 0===c)&&(c=0)}if(n.indexOf(s)>=0)d=n.indexOf(s)
else{const e=Math.min(r.slidesPerGroupSkip,c)
d=e+Math.floor((c-e)/r.slidesPerGroup)}if(d>=n.length&&(d=n.length-1),c===a)return void(d!==o&&(t.snapIndex=d,t.emit("snapIndexChange")))
const p=parseInt(t.slides.eq(c).attr("data-swiper-slide-index")||c,10)
Object.assign(t,{snapIndex:d,realIndex:p,previousIndex:a,activeIndex:c}),t.emit("activeIndexChange"),t.emit("snapIndexChange"),l!==p&&t.emit("realIndexChange"),(t.initialized||t.params.runCallbacksOnInit)&&t.emit("slideChange")},updateClickedSlide:function updateClickedSlide(e){const t=this,s=t.params,i=l(e).closest(`.${s.slideClass}`)[0]
let n,r=!1
if(i)for(let e=0;e<t.slides.length;e+=1)if(t.slides[e]===i){r=!0,n=e
break}if(!i||!r)return t.clickedSlide=void 0,void(t.clickedIndex=void 0)
t.clickedSlide=i,t.virtual&&t.params.virtual.enabled?t.clickedIndex=parseInt(l(i).attr("data-swiper-slide-index"),10):t.clickedIndex=n,s.slideToClickedSlide&&void 0!==t.clickedIndex&&t.clickedIndex!==t.activeIndex&&t.slideToClickedSlide()}},translate:{getTranslate:function getSwiperTranslate(e){void 0===e&&(e=this.isHorizontal()?"x":"y")
const{params:t,rtlTranslate:s,translate:i,$wrapperEl:n}=this
if(t.virtualTranslate)return s?-i:i
if(t.cssMode)return i
let r=getTranslate(n[0],e)
return s&&(r=-r),r||0},setTranslate:function setTranslate_setTranslate(e,t){const s=this,{rtlTranslate:i,params:n,$wrapperEl:r,wrapperEl:a,progress:l}=s
let o,d=0,c=0
s.isHorizontal()?d=i?-e:e:c=e,n.roundLengths&&(d=Math.floor(d),c=Math.floor(c)),n.cssMode?a[s.isHorizontal()?"scrollLeft":"scrollTop"]=s.isHorizontal()?-d:-c:n.virtualTranslate||r.transform(`translate3d(${d}px, ${c}px, 0px)`),s.previousTranslate=s.translate,s.translate=s.isHorizontal()?d:c
const p=s.maxTranslate()-s.minTranslate();(o=0===p?0:(e-s.minTranslate())/p)!==l&&s.updateProgress(e),s.emit("setTranslate",s.translate,t)},minTranslate:function minTranslate_minTranslate(){return-this.snapGrid[0]},maxTranslate:function maxTranslate_maxTranslate(){return-this.snapGrid[this.snapGrid.length-1]},translateTo:function translateTo(e,t,s,i,n){void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),void 0===i&&(i=!0)
const r=this,{params:a,wrapperEl:l}=r
if(r.animating&&a.preventInteractionOnTransition)return!1
const o=r.minTranslate(),d=r.maxTranslate()
let c
if(c=i&&e>o?o:i&&e<d?d:e,r.updateProgress(c),a.cssMode){const e=r.isHorizontal()
if(0===t)l[e?"scrollLeft":"scrollTop"]=-c
else{if(!r.support.smoothScroll)return animateCSSModeScroll({swiper:r,targetPosition:-c,side:e?"left":"top"}),!0
l.scrollTo({[e?"left":"top"]:-c,behavior:"smooth"})}return!0}return 0===t?(r.setTransition(0),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,n),r.emit("transitionEnd"))):(r.setTransition(t),r.setTranslate(c),s&&(r.emit("beforeTransitionStart",t,n),r.emit("transitionStart")),r.animating||(r.animating=!0,r.onTranslateToWrapperTransitionEnd||(r.onTranslateToWrapperTransitionEnd=function transitionEnd(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd),r.onTranslateToWrapperTransitionEnd=null,delete r.onTranslateToWrapperTransitionEnd,s&&r.emit("transitionEnd"))}),r.$wrapperEl[0].addEventListener("transitionend",r.onTranslateToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onTranslateToWrapperTransitionEnd))),!0}},transition:{setTransition:function setTransition_setTransition(e,t){const s=this
s.params.cssMode||s.$wrapperEl.transition(e),s.emit("setTransition",e,t)},transitionStart:function transitionStart(e,t){void 0===e&&(e=!0)
const s=this,{params:i}=s
i.cssMode||(i.autoHeight&&s.updateAutoHeight(),transitionEmit({swiper:s,runCallbacks:e,direction:t,step:"Start"}))},transitionEnd:function transitionEnd_transitionEnd(e,t){void 0===e&&(e=!0)
const{params:s}=this
this.animating=!1,s.cssMode||(this.setTransition(0),transitionEmit({swiper:this,runCallbacks:e,direction:t,step:"End"}))}},slide:{slideTo:function slideTo(e,t,s,i,n){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"number"!=typeof e&&"string"!=typeof e)throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`)
if("string"==typeof e){const t=parseInt(e,10)
if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`)
e=t}const r=this
let a=e
a<0&&(a=0)
const{params:l,snapGrid:o,slidesGrid:d,previousIndex:c,activeIndex:p,rtlTranslate:u,wrapperEl:h,enabled:f}=r
if(r.animating&&l.preventInteractionOnTransition||!f&&!i&&!n)return!1
const m=Math.min(r.params.slidesPerGroupSkip,a)
let g=m+Math.floor((a-m)/r.params.slidesPerGroup)
g>=o.length&&(g=o.length-1),(p||l.initialSlide||0)===(c||0)&&s&&r.emit("beforeSlideChangeStart")
const v=-o[g]
if(r.updateProgress(v),l.normalizeSlideIndex)for(let e=0;e<d.length;e+=1){const t=-Math.floor(100*v),s=Math.floor(100*d[e]),i=Math.floor(100*d[e+1])
void 0!==d[e+1]?t>=s&&t<i-(i-s)/2?a=e:t>=s&&t<i&&(a=e+1):t>=s&&(a=e)}if(r.initialized&&a!==p){if(!r.allowSlideNext&&v<r.translate&&v<r.minTranslate())return!1
if(!r.allowSlidePrev&&v>r.translate&&v>r.maxTranslate()&&(p||0)!==a)return!1}let b
if(b=a>p?"next":a<p?"prev":"reset",u&&-v===r.translate||!u&&v===r.translate)return r.updateActiveIndex(a),l.autoHeight&&r.updateAutoHeight(),r.updateSlidesClasses(),"slide"!==l.effect&&r.setTranslate(v),"reset"!==b&&(r.transitionStart(s,b),r.transitionEnd(s,b)),!1
if(l.cssMode){const e=r.isHorizontal(),s=u?v:-v
if(0===t){const t=r.virtual&&r.params.virtual.enabled
t&&(r.wrapperEl.style.scrollSnapType="none",r._immediateVirtual=!0),h[e?"scrollLeft":"scrollTop"]=s,t&&requestAnimationFrame(()=>{r.wrapperEl.style.scrollSnapType="",r._swiperImmediateVirtual=!1})}else{if(!r.support.smoothScroll)return animateCSSModeScroll({swiper:r,targetPosition:s,side:e?"left":"top"}),!0
h.scrollTo({[e?"left":"top"]:s,behavior:"smooth"})}return!0}return r.setTransition(t),r.setTranslate(v),r.updateActiveIndex(a),r.updateSlidesClasses(),r.emit("beforeTransitionStart",t,i),r.transitionStart(s,b),0===t?r.transitionEnd(s,b):r.animating||(r.animating=!0,r.onSlideToWrapperTransitionEnd||(r.onSlideToWrapperTransitionEnd=function transitionEnd(e){r&&!r.destroyed&&e.target===this&&(r.$wrapperEl[0].removeEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].removeEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd),r.onSlideToWrapperTransitionEnd=null,delete r.onSlideToWrapperTransitionEnd,r.transitionEnd(s,b))}),r.$wrapperEl[0].addEventListener("transitionend",r.onSlideToWrapperTransitionEnd),r.$wrapperEl[0].addEventListener("webkitTransitionEnd",r.onSlideToWrapperTransitionEnd)),!0},slideToLoop:function slideToLoop(e,t,s,i){if(void 0===e&&(e=0),void 0===t&&(t=this.params.speed),void 0===s&&(s=!0),"string"==typeof e){const t=parseInt(e,10)
if(!isFinite(t))throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`)
e=t}const n=this
let r=e
return n.params.loop&&(r+=n.loopedSlides),n.slideTo(r,t,s,i)},slideNext:function slideNext(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0)
const i=this,{animating:n,enabled:r,params:a}=i
if(!r)return i
let l=a.slidesPerGroup
"auto"===a.slidesPerView&&1===a.slidesPerGroup&&a.slidesPerGroupAuto&&(l=Math.max(i.slidesPerViewDynamic("current",!0),1))
const o=i.activeIndex<a.slidesPerGroupSkip?1:l
if(a.loop){if(n&&a.loopPreventsSlide)return!1
i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}return a.rewind&&i.isEnd?i.slideTo(0,e,t,s):i.slideTo(i.activeIndex+o,e,t,s)},slidePrev:function slidePrev(e,t,s){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0)
const i=this,{params:n,animating:r,snapGrid:a,slidesGrid:l,rtlTranslate:o,enabled:d}=i
if(!d)return i
if(n.loop){if(r&&n.loopPreventsSlide)return!1
i.loopFix(),i._clientLeft=i.$wrapperEl[0].clientLeft}function normalize(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}const c=normalize(o?i.translate:-i.translate),p=a.map(e=>normalize(e))
let u=a[p.indexOf(c)-1]
if(void 0===u&&n.cssMode){let e
a.forEach((t,s)=>{c>=t&&(e=s)}),void 0!==e&&(u=a[e>0?e-1:e])}let h=0
if(void 0!==u&&((h=l.indexOf(u))<0&&(h=i.activeIndex-1),"auto"===n.slidesPerView&&1===n.slidesPerGroup&&n.slidesPerGroupAuto&&(h=h-i.slidesPerViewDynamic("previous",!0)+1,h=Math.max(h,0))),n.rewind&&i.isBeginning){const n=i.params.virtual&&i.params.virtual.enabled&&i.virtual?i.virtual.slides.length-1:i.slides.length-1
return i.slideTo(n,e,t,s)}return i.slideTo(h,e,t,s)},slideReset:function slideReset(e,t,s){return void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),this.slideTo(this.activeIndex,e,t,s)},slideToClosest:function slideToClosest(e,t,s,i){void 0===e&&(e=this.params.speed),void 0===t&&(t=!0),void 0===i&&(i=.5)
const n=this
let r=n.activeIndex
const a=Math.min(n.params.slidesPerGroupSkip,r),l=a+Math.floor((r-a)/n.params.slidesPerGroup),o=n.rtlTranslate?n.translate:-n.translate
if(o>=n.snapGrid[l]){const e=n.snapGrid[l]
o-e>(n.snapGrid[l+1]-e)*i&&(r+=n.params.slidesPerGroup)}else{const e=n.snapGrid[l-1]
o-e<=(n.snapGrid[l]-e)*i&&(r-=n.params.slidesPerGroup)}return r=Math.max(r,0),r=Math.min(r,n.slidesGrid.length-1),n.slideTo(r,e,t,s)},slideToClickedSlide:function slideToClickedSlide(){const e=this,{params:t,$wrapperEl:s}=e,i="auto"===t.slidesPerView?e.slidesPerViewDynamic():t.slidesPerView
let n,r=e.clickedIndex
if(t.loop){if(e.animating)return
n=parseInt(l(e.clickedSlide).attr("data-swiper-slide-index"),10),t.centeredSlides?r<e.loopedSlides-i/2||r>e.slides.length-e.loopedSlides+i/2?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),nextTick(()=>{e.slideTo(r)})):e.slideTo(r):r>e.slides.length-i?(e.loopFix(),r=s.children(`.${t.slideClass}[data-swiper-slide-index="${n}"]:not(.${t.slideDuplicateClass})`).eq(0).index(),nextTick(()=>{e.slideTo(r)})):e.slideTo(r)}else e.slideTo(r)}},loop:{loopCreate:function loopCreate(){const e=this,t=getDocument(),{params:s,$wrapperEl:i}=e,n=i.children().length>0?l(i.children()[0].parentNode):i
n.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove()
let r=n.children(`.${s.slideClass}`)
if(s.loopFillGroupWithBlank){const e=s.slidesPerGroup-r.length%s.slidesPerGroup
if(e!==s.slidesPerGroup){for(let i=0;i<e;i+=1){const e=l(t.createElement("div")).addClass(`${s.slideClass} ${s.slideBlankClass}`)
n.append(e)}r=n.children(`.${s.slideClass}`)}}"auto"!==s.slidesPerView||s.loopedSlides||(s.loopedSlides=r.length),e.loopedSlides=Math.ceil(parseFloat(s.loopedSlides||s.slidesPerView,10)),e.loopedSlides+=s.loopAdditionalSlides,e.loopedSlides>r.length&&e.params.loopedSlidesLimit&&(e.loopedSlides=r.length)
const a=[],o=[]
r.each((e,t)=>{l(e).attr("data-swiper-slide-index",t)})
for(let t=0;t<e.loopedSlides;t+=1){const e=t-Math.floor(t/r.length)*r.length
o.push(r.eq(e)[0]),a.unshift(r.eq(r.length-e-1)[0])}for(let e=0;e<o.length;e+=1)n.append(l(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass))
for(let e=a.length-1;e>=0;e-=1)n.prepend(l(a[e].cloneNode(!0)).addClass(s.slideDuplicateClass))},loopFix:function loopFix(){const e=this
e.emit("beforeLoopFix")
const{activeIndex:t,slides:s,loopedSlides:i,allowSlidePrev:n,allowSlideNext:r,snapGrid:a,rtlTranslate:l}=e
let o
e.allowSlidePrev=!0,e.allowSlideNext=!0
const d=-a[t]-e.getTranslate()
t<i?(o=s.length-3*i+t,o+=i,e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d)):t>=s.length-i&&(o=-s.length+t+i,o+=i,e.slideTo(o,0,!1,!0)&&0!==d&&e.setTranslate((l?-e.translate:e.translate)-d))
e.allowSlidePrev=n,e.allowSlideNext=r,e.emit("loopFix")},loopDestroy:function loopDestroy(){const{$wrapperEl:e,params:t,slides:s}=this
e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(),s.removeAttr("data-swiper-slide-index")}},grabCursor:{setGrabCursor:function setGrabCursor(e){if(this.support.touch||!this.params.simulateTouch||this.params.watchOverflow&&this.isLocked||this.params.cssMode)return
const t="container"===this.params.touchEventsTarget?this.el:this.wrapperEl
t.style.cursor="move",t.style.cursor=e?"grabbing":"grab"},unsetGrabCursor:function unsetGrabCursor(){this.support.touch||this.params.watchOverflow&&this.isLocked||this.params.cssMode||(this["container"===this.params.touchEventsTarget?"el":"wrapperEl"].style.cursor="")}},events:{attachEvents:function attachEvents(){const e=this,t=getDocument(),{params:s,support:i}=e
e.onTouchStart=onTouchStart_onTouchStart.bind(e),e.onTouchMove=function onTouchMove_onTouchMove(e){const t=getDocument(),s=this,i=s.touchEventsData,{params:n,touches:r,rtlTranslate:a,enabled:o}=s
if(!o)return
let d=e
if(d.originalEvent&&(d=d.originalEvent),!i.isTouched)return void(i.startMoving&&i.isScrolling&&s.emit("touchMoveOpposite",d))
if(i.isTouchEvent&&"touchmove"!==d.type)return
const c="touchmove"===d.type&&d.targetTouches&&(d.targetTouches[0]||d.changedTouches[0]),p="touchmove"===d.type?c.pageX:d.pageX,u="touchmove"===d.type?c.pageY:d.pageY
if(d.preventedByNestedSwiper)return r.startX=p,void(r.startY=u)
if(!s.allowTouchMove)return l(d.target).is(i.focusableElements)||(s.allowClick=!1),void(i.isTouched&&(Object.assign(r,{startX:p,startY:u,currentX:p,currentY:u}),i.touchStartTime=now()))
if(i.isTouchEvent&&n.touchReleaseOnEdges&&!n.loop)if(s.isVertical()){if(u<r.startY&&s.translate<=s.maxTranslate()||u>r.startY&&s.translate>=s.minTranslate())return i.isTouched=!1,void(i.isMoved=!1)}else if(p<r.startX&&s.translate<=s.maxTranslate()||p>r.startX&&s.translate>=s.minTranslate())return
if(i.isTouchEvent&&t.activeElement&&d.target===t.activeElement&&l(d.target).is(i.focusableElements))return i.isMoved=!0,void(s.allowClick=!1)
if(i.allowTouchCallbacks&&s.emit("touchMove",d),d.targetTouches&&d.targetTouches.length>1)return
r.currentX=p,r.currentY=u
const h=r.currentX-r.startX,f=r.currentY-r.startY
if(s.params.threshold&&Math.sqrt(h**2+f**2)<s.params.threshold)return
if(void 0===i.isScrolling){let e
s.isHorizontal()&&r.currentY===r.startY||s.isVertical()&&r.currentX===r.startX?i.isScrolling=!1:h*h+f*f>=25&&(e=180*Math.atan2(Math.abs(f),Math.abs(h))/Math.PI,i.isScrolling=s.isHorizontal()?e>n.touchAngle:90-e>n.touchAngle)}if(i.isScrolling&&s.emit("touchMoveOpposite",d),void 0===i.startMoving&&(r.currentX===r.startX&&r.currentY===r.startY||(i.startMoving=!0)),i.isScrolling)return void(i.isTouched=!1)
if(!i.startMoving)return
s.allowClick=!1,!n.cssMode&&d.cancelable&&d.preventDefault(),n.touchMoveStopPropagation&&!n.nested&&d.stopPropagation(),i.isMoved||(n.loop&&!n.cssMode&&s.loopFix(),i.startTranslate=s.getTranslate(),s.setTransition(0),s.animating&&s.$wrapperEl.trigger("webkitTransitionEnd transitionend"),i.allowMomentumBounce=!1,!n.grabCursor||!0!==s.allowSlideNext&&!0!==s.allowSlidePrev||s.setGrabCursor(!0),s.emit("sliderFirstMove",d)),s.emit("sliderMove",d),i.isMoved=!0
let m=s.isHorizontal()?h:f
r.diff=m,m*=n.touchRatio,a&&(m=-m),s.swipeDirection=m>0?"prev":"next",i.currentTranslate=m+i.startTranslate
let g=!0,v=n.resistanceRatio
if(n.touchReleaseOnEdges&&(v=0),m>0&&i.currentTranslate>s.minTranslate()?(g=!1,n.resistance&&(i.currentTranslate=s.minTranslate()-1+(-s.minTranslate()+i.startTranslate+m)**v)):m<0&&i.currentTranslate<s.maxTranslate()&&(g=!1,n.resistance&&(i.currentTranslate=s.maxTranslate()+1-(s.maxTranslate()-i.startTranslate-m)**v)),g&&(d.preventedByNestedSwiper=!0),!s.allowSlideNext&&"next"===s.swipeDirection&&i.currentTranslate<i.startTranslate&&(i.currentTranslate=i.startTranslate),!s.allowSlidePrev&&"prev"===s.swipeDirection&&i.currentTranslate>i.startTranslate&&(i.currentTranslate=i.startTranslate),s.allowSlidePrev||s.allowSlideNext||(i.currentTranslate=i.startTranslate),n.threshold>0){if(!(Math.abs(m)>n.threshold||i.allowThresholdMove))return void(i.currentTranslate=i.startTranslate)
if(!i.allowThresholdMove)return i.allowThresholdMove=!0,r.startX=r.currentX,r.startY=r.currentY,i.currentTranslate=i.startTranslate,void(r.diff=s.isHorizontal()?r.currentX-r.startX:r.currentY-r.startY)}n.followFinger&&!n.cssMode&&((n.freeMode&&n.freeMode.enabled&&s.freeMode||n.watchSlidesProgress)&&(s.updateActiveIndex(),s.updateSlidesClasses()),s.params.freeMode&&n.freeMode.enabled&&s.freeMode&&s.freeMode.onTouchMove(),s.updateProgress(i.currentTranslate),s.setTranslate(i.currentTranslate))}.bind(e),e.onTouchEnd=function onTouchEnd_onTouchEnd(e){const t=this,s=t.touchEventsData,{params:i,touches:n,rtlTranslate:r,slidesGrid:a,enabled:l}=t
if(!l)return
let o=e
if(o.originalEvent&&(o=o.originalEvent),s.allowTouchCallbacks&&t.emit("touchEnd",o),s.allowTouchCallbacks=!1,!s.isTouched)return s.isMoved&&i.grabCursor&&t.setGrabCursor(!1),s.isMoved=!1,void(s.startMoving=!1)
i.grabCursor&&s.isMoved&&s.isTouched&&(!0===t.allowSlideNext||!0===t.allowSlidePrev)&&t.setGrabCursor(!1)
const d=now(),c=d-s.touchStartTime
if(t.allowClick){const e=o.path||o.composedPath&&o.composedPath()
t.updateClickedSlide(e&&e[0]||o.target),t.emit("tap click",o),c<300&&d-s.lastClickTime<300&&t.emit("doubleTap doubleClick",o)}if(s.lastClickTime=now(),nextTick(()=>{t.destroyed||(t.allowClick=!0)}),!s.isTouched||!s.isMoved||!t.swipeDirection||0===n.diff||s.currentTranslate===s.startTranslate)return s.isTouched=!1,s.isMoved=!1,void(s.startMoving=!1)
let p
if(s.isTouched=!1,s.isMoved=!1,s.startMoving=!1,p=i.followFinger?r?t.translate:-t.translate:-s.currentTranslate,i.cssMode)return
if(t.params.freeMode&&i.freeMode.enabled)return void t.freeMode.onTouchEnd({currentPos:p})
let u=0,h=t.slidesSizesGrid[0]
for(let e=0;e<a.length;e+=e<i.slidesPerGroupSkip?1:i.slidesPerGroup){const t=e<i.slidesPerGroupSkip-1?1:i.slidesPerGroup
void 0!==a[e+t]?p>=a[e]&&p<a[e+t]&&(u=e,h=a[e+t]-a[e]):p>=a[e]&&(u=e,h=a[a.length-1]-a[a.length-2])}let f=null,m=null
i.rewind&&(t.isBeginning?m=t.params.virtual&&t.params.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(f=0))
const g=(p-a[u])/h,v=u<i.slidesPerGroupSkip-1?1:i.slidesPerGroup
if(c>i.longSwipesMs){if(!i.longSwipes)return void t.slideTo(t.activeIndex)
"next"===t.swipeDirection&&(g>=i.longSwipesRatio?t.slideTo(i.rewind&&t.isEnd?f:u+v):t.slideTo(u)),"prev"===t.swipeDirection&&(g>1-i.longSwipesRatio?t.slideTo(u+v):null!==m&&g<0&&Math.abs(g)>i.longSwipesRatio?t.slideTo(m):t.slideTo(u))}else{if(!i.shortSwipes)return void t.slideTo(t.activeIndex)
!t.navigation||o.target!==t.navigation.nextEl&&o.target!==t.navigation.prevEl?("next"===t.swipeDirection&&t.slideTo(null!==f?f:u+v),"prev"===t.swipeDirection&&t.slideTo(null!==m?m:u)):o.target===t.navigation.nextEl?t.slideTo(u+v):t.slideTo(u)}}.bind(e),s.cssMode&&(e.onScroll=function onScroll(){const e=this,{wrapperEl:t,rtlTranslate:s,enabled:i}=e
if(!i)return
let n
e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,0===e.translate&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses()
const r=e.maxTranslate()-e.minTranslate();(n=0===r?0:(e.translate-e.minTranslate())/r)!==e.progress&&e.updateProgress(s?-e.translate:e.translate),e.emit("setTranslate",e.translate,!1)}.bind(e)),e.onClick=function onClick_onClick(e){const t=this
t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}.bind(e),i.touch&&!p&&(t.addEventListener("touchstart",dummyEventListener),p=!0),u(e,"on")},detachEvents:function detachEvents(){u(this,"off")}},breakpoints:{setBreakpoint:function setBreakpoint(){const e=this,{activeIndex:t,initialized:s,loopedSlides:i=0,params:n,$el:r}=e,a=n.breakpoints
if(!a||a&&0===Object.keys(a).length)return
const l=e.getBreakpoint(a,e.params.breakpointsBase,e.el)
if(!l||e.currentBreakpoint===l)return
const o=(l in a?a[l]:void 0)||e.originalParams,d=h(e,n),c=h(e,o),p=n.enabled
d&&!c?(r.removeClass(`${n.containerModifierClass}grid ${n.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&c&&(r.addClass(`${n.containerModifierClass}grid`),(o.grid.fill&&"column"===o.grid.fill||!o.grid.fill&&"column"===n.grid.fill)&&r.addClass(`${n.containerModifierClass}grid-column`),e.emitContainerClasses()),["navigation","pagination","scrollbar"].forEach(t=>{const s=n[t]&&n[t].enabled,i=o[t]&&o[t].enabled
s&&!i&&e[t].disable(),!s&&i&&e[t].enable()})
const u=o.direction&&o.direction!==n.direction,f=n.loop&&(o.slidesPerView!==n.slidesPerView||u)
u&&s&&e.changeDirection(),utils_extend(e.params,o)
const m=e.params.enabled
Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),p&&!m?e.disable():!p&&m&&e.enable(),e.currentBreakpoint=l,e.emit("_beforeBreakpoint",o),f&&s&&(e.loopDestroy(),e.loopCreate(),e.updateSlides(),e.slideTo(t-i+e.loopedSlides,0,!1)),e.emit("breakpoint",o)},getBreakpoint:function getBreakpoint(e,t,s){if(void 0===t&&(t="window"),!e||"container"===t&&!s)return
let i=!1
const n=getWindow(),r="window"===t?n.innerHeight:s.clientHeight,a=Object.keys(e).map(e=>{if("string"==typeof e&&0===e.indexOf("@")){const t=parseFloat(e.substr(1))
return{value:r*t,point:e}}return{value:e,point:e}})
a.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10))
for(let e=0;e<a.length;e+=1){const{point:r,value:l}=a[e]
"window"===t?n.matchMedia(`(min-width: ${l}px)`).matches&&(i=r):l<=s.clientWidth&&(i=r)}return i||"max"}},checkOverflow:{checkOverflow:function checkOverflow(){const e=this,{isLocked:t,params:s}=e,{slidesOffsetBefore:i}=s
if(i){const t=e.slides.length-1,s=e.slidesGrid[t]+e.slidesSizesGrid[t]+2*i
e.isLocked=e.size>s}else e.isLocked=1===e.snapGrid.length
!0===s.allowSlideNext&&(e.allowSlideNext=!e.isLocked),!0===s.allowSlidePrev&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?"lock":"unlock")}},classes:{addClasses:function addClasses(){const{classNames:e,params:t,rtl:s,$el:i,device:n,support:r}=this,a=function prepareClasses(e,t){const s=[]
return e.forEach(e=>{"object"==typeof e?Object.keys(e).forEach(i=>{e[i]&&s.push(t+i)}):"string"==typeof e&&s.push(t+e)}),s}(["initialized",t.direction,{"pointer-events":!r.touch},{"free-mode":this.params.freeMode&&t.freeMode.enabled},{autoheight:t.autoHeight},{rtl:s},{grid:t.grid&&t.grid.rows>1},{"grid-column":t.grid&&t.grid.rows>1&&"column"===t.grid.fill},{android:n.android},{ios:n.ios},{"css-mode":t.cssMode},{centered:t.cssMode&&t.centeredSlides},{"watch-progress":t.watchSlidesProgress}],t.containerModifierClass)
e.push(...a),i.addClass([...e].join(" ")),this.emitContainerClasses()},removeClasses:function removeClasses(){const{$el:e,classNames:t}=this
e.removeClass(t.join(" ")),this.emitContainerClasses()}},images:{loadImage:function loadImage(e,t,s,i,n,r){const a=getWindow()
let o
function onReady(){r&&r()}l(e).parent("picture")[0]||e.complete&&n?onReady():t?((o=new a.Image).onload=onReady,o.onerror=onReady,i&&(o.sizes=i),s&&(o.srcset=s),t&&(o.src=t)):onReady()},preloadImages:function preloadImages(){const e=this
function onReady(){null!=e&&e&&!e.destroyed&&(void 0!==e.imagesLoaded&&(e.imagesLoaded+=1),e.imagesLoaded===e.imagesToLoad.length&&(e.params.updateOnImagesReady&&e.update(),e.emit("imagesReady")))}e.imagesToLoad=e.$el.find("img")
for(let t=0;t<e.imagesToLoad.length;t+=1){const s=e.imagesToLoad[t]
e.loadImage(s,s.currentSrc||s.getAttribute("src"),s.srcset||s.getAttribute("srcset"),s.sizes||s.getAttribute("sizes"),!0,onReady)}}}},g={}
class core_Swiper{constructor(){let e,t
for(var s=arguments.length,i=new Array(s),n=0;n<s;n++)i[n]=arguments[n]
if(1===i.length&&i[0].constructor&&"Object"===Object.prototype.toString.call(i[0]).slice(8,-1)?t=i[0]:[e,t]=i,t||(t={}),t=utils_extend({},t),e&&!t.el&&(t.el=e),t.el&&l(t.el).length>1){const e=[]
return l(t.el).each(s=>{const i=utils_extend({},t,{el:s})
e.push(new core_Swiper(i))}),e}const r=this
r.__swiper__=!0,r.support=getSupport(),r.device=getDevice({userAgent:t.userAgent}),r.browser=getBrowser(),r.eventsListeners={},r.eventsAnyListeners=[],r.modules=[...r.__modules__],t.modules&&Array.isArray(t.modules)&&r.modules.push(...t.modules)
const a={}
r.modules.forEach(e=>{e({swiper:r,extendParams:moduleExtendParams(t,a),on:r.on.bind(r),once:r.once.bind(r),off:r.off.bind(r),emit:r.emit.bind(r)})})
const o=utils_extend({},f,a)
return r.params=utils_extend({},o,g,t),r.originalParams=utils_extend({},r.params),r.passedParams=utils_extend({},t),r.params&&r.params.on&&Object.keys(r.params.on).forEach(e=>{r.on(e,r.params.on[e])}),r.params&&r.params.onAny&&r.onAny(r.params.onAny),r.$=l,Object.assign(r,{enabled:r.params.enabled,el:e,classNames:[],slides:l(),slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal:()=>"horizontal"===r.params.direction,isVertical:()=>"vertical"===r.params.direction,activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,allowSlideNext:r.params.allowSlideNext,allowSlidePrev:r.params.allowSlidePrev,touchEvents:function touchEvents(){const e=["touchstart","touchmove","touchend","touchcancel"],t=["pointerdown","pointermove","pointerup"]
return r.touchEventsTouch={start:e[0],move:e[1],end:e[2],cancel:e[3]},r.touchEventsDesktop={start:t[0],move:t[1],end:t[2]},r.support.touch||!r.params.simulateTouch?r.touchEventsTouch:r.touchEventsDesktop}(),touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:r.params.focusableElements,lastClickTime:now(),clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,isTouchEvent:void 0,startMoving:void 0},allowClick:!0,allowTouchMove:r.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),r.emit("_swiper"),r.params.init&&r.init(),r}enable(){const e=this
e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit("enable"))}disable(){const e=this
e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit("disable"))}setProgress(e,t){e=Math.min(Math.max(e,0),1)
const s=this.minTranslate(),i=(this.maxTranslate()-s)*e+s
this.translateTo(i,void 0===t?0:t),this.updateActiveIndex(),this.updateSlidesClasses()}emitContainerClasses(){const e=this
if(!e.params._emitClasses||!e.el)return
const t=e.el.className.split(" ").filter(t=>0===t.indexOf("swiper")||0===t.indexOf(e.params.containerModifierClass))
e.emit("_containerClasses",t.join(" "))}getSlideClasses(e){const t=this
return t.destroyed?"":e.className.split(" ").filter(e=>0===e.indexOf("swiper-slide")||0===e.indexOf(t.params.slideClass)).join(" ")}emitSlidesClasses(){const e=this
if(!e.params._emitClasses||!e.el)return
const t=[]
e.slides.each(s=>{const i=e.getSlideClasses(s)
t.push({slideEl:s,classNames:i}),e.emit("_slideClass",s,i)}),e.emit("_slideClasses",t)}slidesPerViewDynamic(e,t){void 0===e&&(e="current"),void 0===t&&(t=!1)
const{params:s,slides:i,slidesGrid:n,slidesSizesGrid:r,size:a,activeIndex:l}=this
let o=1
if(s.centeredSlides){let e,t=i[l].swiperSlideSize
for(let s=l+1;s<i.length;s+=1)i[s]&&!e&&(o+=1,(t+=i[s].swiperSlideSize)>a&&(e=!0))
for(let s=l-1;s>=0;s-=1)i[s]&&!e&&(o+=1,(t+=i[s].swiperSlideSize)>a&&(e=!0))}else if("current"===e)for(let e=l+1;e<i.length;e+=1){(t?n[e]+r[e]-n[l]<a:n[e]-n[l]<a)&&(o+=1)}else for(let e=l-1;e>=0;e-=1){n[l]-n[e]<a&&(o+=1)}return o}update(){const e=this
if(!e||e.destroyed)return
const{snapGrid:t,params:s}=e
function setTranslate(){const t=e.rtlTranslate?-1*e.translate:e.translate,s=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate())
e.setTranslate(s),e.updateActiveIndex(),e.updateSlidesClasses()}let i
s.breakpoints&&e.setBreakpoint(),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses(),e.params.freeMode&&e.params.freeMode.enabled?(setTranslate(),e.params.autoHeight&&e.updateAutoHeight()):(i=("auto"===e.params.slidesPerView||e.params.slidesPerView>1)&&e.isEnd&&!e.params.centeredSlides?e.slideTo(e.slides.length-1,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0))||setTranslate(),s.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit("update")}changeDirection(e,t){void 0===t&&(t=!0)
const s=this,i=s.params.direction
return e||(e="horizontal"===i?"vertical":"horizontal"),e===i||"horizontal"!==e&&"vertical"!==e?s:(s.$el.removeClass(`${s.params.containerModifierClass}${i}`).addClass(`${s.params.containerModifierClass}${e}`),s.emitContainerClasses(),s.params.direction=e,s.slides.each(t=>{"vertical"===e?t.style.width="":t.style.height=""}),s.emit("changeDirection"),t&&s.update(),s)}changeLanguageDirection(e){const t=this
t.rtl&&"rtl"===e||!t.rtl&&"ltr"===e||(t.rtl="rtl"===e,t.rtlTranslate="horizontal"===t.params.direction&&t.rtl,t.rtl?(t.$el.addClass(`${t.params.containerModifierClass}rtl`),t.el.dir="rtl"):(t.$el.removeClass(`${t.params.containerModifierClass}rtl`),t.el.dir="ltr"),t.update())}mount(e){const t=this
if(t.mounted)return!0
const s=l(e||t.params.el)
if(!(e=s[0]))return!1
e.swiper=t
const i=()=>`.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`
let n=(()=>{if(e&&e.shadowRoot&&e.shadowRoot.querySelector){const t=l(e.shadowRoot.querySelector(i()))
return t.children=(e=>s.children(e)),t}return s.children?s.children(i()):l(s).children(i())})()
if(0===n.length&&t.params.createElements){const e=getDocument().createElement("div")
n=l(e),e.className=t.params.wrapperClass,s.append(e),s.children(`.${t.params.slideClass}`).each(e=>{n.append(e)})}return Object.assign(t,{$el:s,el:e,$wrapperEl:n,wrapperEl:n[0],mounted:!0,rtl:"rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction"),rtlTranslate:"horizontal"===t.params.direction&&("rtl"===e.dir.toLowerCase()||"rtl"===s.css("direction")),wrongRTL:"-webkit-box"===n.css("display")}),!0}init(e){const t=this
return t.initialized?t:!1===t.mount(e)?t:(t.emit("beforeInit"),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.params.loop&&t.loopCreate(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.preloadImages&&t.preloadImages(),t.params.loop?t.slideTo(t.params.initialSlide+t.loopedSlides,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.attachEvents(),t.initialized=!0,t.emit("init"),t.emit("afterInit"),t)}destroy(e,t){void 0===e&&(e=!0),void 0===t&&(t=!0)
const s=this,{params:i,$el:n,$wrapperEl:r,slides:a}=s
return void 0===s.params||s.destroyed?null:(s.emit("beforeDestroy"),s.initialized=!1,s.detachEvents(),i.loop&&s.loopDestroy(),t&&(s.removeClasses(),n.removeAttr("style"),r.removeAttr("style"),a&&a.length&&a.removeClass([i.slideVisibleClass,i.slideActiveClass,i.slideNextClass,i.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")),s.emit("destroy"),Object.keys(s.eventsListeners).forEach(e=>{s.off(e)}),!1!==e&&(s.$el[0].swiper=null,function deleteProps(e){const t=e
Object.keys(t).forEach(e=>{try{t[e]=null}catch(e){}try{delete t[e]}catch(e){}})}(s)),s.destroyed=!0,null)}static extendDefaults(e){utils_extend(g,e)}static get extendedDefaults(){return g}static get defaults(){return f}static installModule(e){core_Swiper.prototype.__modules__||(core_Swiper.prototype.__modules__=[])
const t=core_Swiper.prototype.__modules__
"function"==typeof e&&t.indexOf(e)<0&&t.push(e)}static use(e){return Array.isArray(e)?(e.forEach(e=>core_Swiper.installModule(e)),core_Swiper):(core_Swiper.installModule(e),core_Swiper)}}Object.keys(m).forEach(e=>{Object.keys(m[e]).forEach(t=>{core_Swiper.prototype[t]=m[e][t]})}),core_Swiper.use([function Resize(e){let{swiper:t,on:s,emit:i}=e
const n=getWindow()
let r=null,a=null
const l=()=>{t&&!t.destroyed&&t.initialized&&(i("beforeResize"),i("resize"))},o=()=>{t&&!t.destroyed&&t.initialized&&i("orientationchange")}
s("init",()=>{t.params.resizeObserver&&void 0!==n.ResizeObserver?t&&!t.destroyed&&t.initialized&&(r=new ResizeObserver(e=>{a=n.requestAnimationFrame(()=>{const{width:s,height:i}=t
let n=s,r=i
e.forEach(e=>{let{contentBoxSize:s,contentRect:i,target:a}=e
a&&a!==t.el||(n=i?i.width:(s[0]||s).inlineSize,r=i?i.height:(s[0]||s).blockSize)}),n===s&&r===i||l()})})).observe(t.el):(n.addEventListener("resize",l),n.addEventListener("orientationchange",o))}),s("destroy",()=>{a&&n.cancelAnimationFrame(a),r&&r.unobserve&&t.el&&(r.unobserve(t.el),r=null),n.removeEventListener("resize",l),n.removeEventListener("orientationchange",o)})},function Observer(e){let{swiper:t,extendParams:s,on:i,emit:n}=e
const r=[],a=getWindow(),l=function(e,t){void 0===t&&(t={})
const s=new(a.MutationObserver||a.WebkitMutationObserver)(e=>{if(1===e.length)return void n("observerUpdate",e[0])
const t=function observerUpdate(){n("observerUpdate",e[0])}
a.requestAnimationFrame?a.requestAnimationFrame(t):a.setTimeout(t,0)})
s.observe(e,{attributes:void 0===t.attributes||t.attributes,childList:void 0===t.childList||t.childList,characterData:void 0===t.characterData||t.characterData}),r.push(s)}
s({observer:!1,observeParents:!1,observeSlideChildren:!1}),i("init",()=>{if(t.params.observer){if(t.params.observeParents){const e=t.$el.parents()
for(let t=0;t<e.length;t+=1)l(e[t])}l(t.$el[0],{childList:t.params.observeSlideChildren}),l(t.$wrapperEl[0],{attributes:!1})}}),i("destroy",()=>{r.forEach(e=>{e.disconnect()}),r.splice(0,r.length)})}])
var v=core_Swiper
function createElementIfNotDefined(e,t,s,i){const n=getDocument()
return e.params.createElements&&Object.keys(i).forEach(r=>{if(!s[r]&&!0===s.auto){let a=e.$el.children(`.${i[r]}`)[0]
a||((a=n.createElement("div")).className=i[r],e.$el.append(a)),s[r]=a,t[r]=a}}),s}function Navigation(e){let{swiper:t,extendParams:s,on:i,emit:n}=e
function getEl(e){let s
return e&&(s=l(e),t.params.uniqueNavElements&&"string"==typeof e&&s.length>1&&1===t.$el.find(e).length&&(s=t.$el.find(e))),s}function toggleEl(e,s){const i=t.params.navigation
e&&e.length>0&&(e[s?"addClass":"removeClass"](i.disabledClass),e[0]&&"BUTTON"===e[0].tagName&&(e[0].disabled=s),t.params.watchOverflow&&t.enabled&&e[t.isLocked?"addClass":"removeClass"](i.lockClass))}function update(){if(t.params.loop)return
const{$nextEl:e,$prevEl:s}=t.navigation
toggleEl(s,t.isBeginning&&!t.params.rewind),toggleEl(e,t.isEnd&&!t.params.rewind)}function onPrevClick(e){e.preventDefault(),(!t.isBeginning||t.params.loop||t.params.rewind)&&(t.slidePrev(),n("navigationPrev"))}function onNextClick(e){e.preventDefault(),(!t.isEnd||t.params.loop||t.params.rewind)&&(t.slideNext(),n("navigationNext"))}function init(){const e=t.params.navigation
if(t.params.navigation=createElementIfNotDefined(t,t.originalParams.navigation,t.params.navigation,{nextEl:"swiper-button-next",prevEl:"swiper-button-prev"}),!e.nextEl&&!e.prevEl)return
const s=getEl(e.nextEl),i=getEl(e.prevEl)
s&&s.length>0&&s.on("click",onNextClick),i&&i.length>0&&i.on("click",onPrevClick),Object.assign(t.navigation,{$nextEl:s,nextEl:s&&s[0],$prevEl:i,prevEl:i&&i[0]}),t.enabled||(s&&s.addClass(e.lockClass),i&&i.addClass(e.lockClass))}function destroy(){const{$nextEl:e,$prevEl:s}=t.navigation
e&&e.length&&(e.off("click",onNextClick),e.removeClass(t.params.navigation.disabledClass)),s&&s.length&&(s.off("click",onPrevClick),s.removeClass(t.params.navigation.disabledClass))}s({navigation:{nextEl:null,prevEl:null,hideOnClick:!1,disabledClass:"swiper-button-disabled",hiddenClass:"swiper-button-hidden",lockClass:"swiper-button-lock",navigationDisabledClass:"swiper-navigation-disabled"}}),t.navigation={nextEl:null,$nextEl:null,prevEl:null,$prevEl:null},i("init",()=>{!1===t.params.navigation.enabled?r():(init(),update())}),i("toEdge fromEdge lock unlock",()=>{update()}),i("destroy",()=>{destroy()}),i("enable disable",()=>{const{$nextEl:e,$prevEl:s}=t.navigation
e&&e[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass),s&&s[t.enabled?"removeClass":"addClass"](t.params.navigation.lockClass)}),i("click",(e,s)=>{const{$nextEl:i,$prevEl:r}=t.navigation,a=s.target
if(t.params.navigation.hideOnClick&&!l(a).is(r)&&!l(a).is(i)){if(t.pagination&&t.params.pagination&&t.params.pagination.clickable&&(t.pagination.el===a||t.pagination.el.contains(a)))return
let e
i?e=i.hasClass(t.params.navigation.hiddenClass):r&&(e=r.hasClass(t.params.navigation.hiddenClass)),n(!0===e?"navigationShow":"navigationHide"),i&&i.toggleClass(t.params.navigation.hiddenClass),r&&r.toggleClass(t.params.navigation.hiddenClass)}})
const r=()=>{t.$el.addClass(t.params.navigation.navigationDisabledClass),destroy()}
Object.assign(t.navigation,{enable:()=>{t.$el.removeClass(t.params.navigation.navigationDisabledClass),init(),update()},disable:r,update,init,destroy})}function classesToSelector(e){return void 0===e&&(e=""),`.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`}function Pagination(e){let{swiper:t,extendParams:s,on:i,emit:n}=e
const r="swiper-pagination"
let a
s({pagination:{el:null,bulletElement:"span",clickable:!1,hideOnClick:!1,renderBullet:null,renderProgressbar:null,renderFraction:null,renderCustom:null,progressbarOpposite:!1,type:"bullets",dynamicBullets:!1,dynamicMainBullets:1,formatFractionCurrent:e=>e,formatFractionTotal:e=>e,bulletClass:`${r}-bullet`,bulletActiveClass:`${r}-bullet-active`,modifierClass:`${r}-`,currentClass:`${r}-current`,totalClass:`${r}-total`,hiddenClass:`${r}-hidden`,progressbarFillClass:`${r}-progressbar-fill`,progressbarOppositeClass:`${r}-progressbar-opposite`,clickableClass:`${r}-clickable`,lockClass:`${r}-lock`,horizontalClass:`${r}-horizontal`,verticalClass:`${r}-vertical`,paginationDisabledClass:`${r}-disabled`}}),t.pagination={el:null,$el:null,bullets:[]}
let o=0
function isPaginationDisabled(){return!t.params.pagination.el||!t.pagination.el||!t.pagination.$el||0===t.pagination.$el.length}function setSideBullets(e,s){const{bulletActiveClass:i}=t.params.pagination
e[s]().addClass(`${i}-${s}`)[s]().addClass(`${i}-${s}-${s}`)}function update(){const e=t.rtl,s=t.params.pagination
if(isPaginationDisabled())return
const i=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,r=t.pagination.$el
let d
const c=t.params.loop?Math.ceil((i-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length
if(t.params.loop?((d=Math.ceil((t.activeIndex-t.loopedSlides)/t.params.slidesPerGroup))>i-1-2*t.loopedSlides&&(d-=i-2*t.loopedSlides),d>c-1&&(d-=c),d<0&&"bullets"!==t.params.paginationType&&(d=c+d)):d=void 0!==t.snapIndex?t.snapIndex:t.activeIndex||0,"bullets"===s.type&&t.pagination.bullets&&t.pagination.bullets.length>0){const i=t.pagination.bullets
let n,c,p
if(s.dynamicBullets&&(a=i.eq(0)[t.isHorizontal()?"outerWidth":"outerHeight"](!0),r.css(t.isHorizontal()?"width":"height",`${a*(s.dynamicMainBullets+4)}px`),s.dynamicMainBullets>1&&void 0!==t.previousIndex&&((o+=d-(t.previousIndex-t.loopedSlides||0))>s.dynamicMainBullets-1?o=s.dynamicMainBullets-1:o<0&&(o=0)),n=Math.max(d-o,0),p=((c=n+(Math.min(i.length,s.dynamicMainBullets)-1))+n)/2),i.removeClass(["","-next","-next-next","-prev","-prev-prev","-main"].map(e=>`${s.bulletActiveClass}${e}`).join(" ")),r.length>1)i.each(e=>{const t=l(e),i=t.index()
i===d&&t.addClass(s.bulletActiveClass),s.dynamicBullets&&(i>=n&&i<=c&&t.addClass(`${s.bulletActiveClass}-main`),i===n&&setSideBullets(t,"prev"),i===c&&setSideBullets(t,"next"))})
else{const e=i.eq(d),r=e.index()
if(e.addClass(s.bulletActiveClass),s.dynamicBullets){const e=i.eq(n),a=i.eq(c)
for(let e=n;e<=c;e+=1)i.eq(e).addClass(`${s.bulletActiveClass}-main`)
if(t.params.loop)if(r>=i.length){for(let e=s.dynamicMainBullets;e>=0;e-=1)i.eq(i.length-e).addClass(`${s.bulletActiveClass}-main`)
i.eq(i.length-s.dynamicMainBullets-1).addClass(`${s.bulletActiveClass}-prev`)}else setSideBullets(e,"prev"),setSideBullets(a,"next")
else setSideBullets(e,"prev"),setSideBullets(a,"next")}}if(s.dynamicBullets){const n=Math.min(i.length,s.dynamicMainBullets+4),r=(a*n-a)/2-p*a,l=e?"right":"left"
i.css(t.isHorizontal()?l:"top",`${r}px`)}}if("fraction"===s.type&&(r.find(classesToSelector(s.currentClass)).text(s.formatFractionCurrent(d+1)),r.find(classesToSelector(s.totalClass)).text(s.formatFractionTotal(c))),"progressbar"===s.type){let e
e=s.progressbarOpposite?t.isHorizontal()?"vertical":"horizontal":t.isHorizontal()?"horizontal":"vertical"
const i=(d+1)/c
let n=1,a=1
"horizontal"===e?n=i:a=i,r.find(classesToSelector(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${n}) scaleY(${a})`).transition(t.params.speed)}"custom"===s.type&&s.renderCustom?(r.html(s.renderCustom(t,d+1,c)),n("paginationRender",r[0])):n("paginationUpdate",r[0]),t.params.watchOverflow&&t.enabled&&r[t.isLocked?"addClass":"removeClass"](s.lockClass)}function render(){const e=t.params.pagination
if(isPaginationDisabled())return
const s=t.virtual&&t.params.virtual.enabled?t.virtual.slides.length:t.slides.length,i=t.pagination.$el
let r=""
if("bullets"===e.type){let n=t.params.loop?Math.ceil((s-2*t.loopedSlides)/t.params.slidesPerGroup):t.snapGrid.length
t.params.freeMode&&t.params.freeMode.enabled&&!t.params.loop&&n>s&&(n=s)
for(let s=0;s<n;s+=1)e.renderBullet?r+=e.renderBullet.call(t,s,e.bulletClass):r+=`<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`
i.html(r),t.pagination.bullets=i.find(classesToSelector(e.bulletClass))}"fraction"===e.type&&(r=e.renderFraction?e.renderFraction.call(t,e.currentClass,e.totalClass):`<span class="${e.currentClass}"></span>`+" / "+`<span class="${e.totalClass}"></span>`,i.html(r)),"progressbar"===e.type&&(r=e.renderProgressbar?e.renderProgressbar.call(t,e.progressbarFillClass):`<span class="${e.progressbarFillClass}"></span>`,i.html(r)),"custom"!==e.type&&n("paginationRender",t.pagination.$el[0])}function init(){t.params.pagination=createElementIfNotDefined(t,t.originalParams.pagination,t.params.pagination,{el:"swiper-pagination"})
const e=t.params.pagination
if(!e.el)return
let s=l(e.el)
0!==s.length&&(t.params.uniqueNavElements&&"string"==typeof e.el&&s.length>1&&(s=t.$el.find(e.el)).length>1&&(s=s.filter(e=>l(e).parents(".swiper")[0]===t.el)),"bullets"===e.type&&e.clickable&&s.addClass(e.clickableClass),s.addClass(e.modifierClass+e.type),s.addClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),"bullets"===e.type&&e.dynamicBullets&&(s.addClass(`${e.modifierClass}${e.type}-dynamic`),o=0,e.dynamicMainBullets<1&&(e.dynamicMainBullets=1)),"progressbar"===e.type&&e.progressbarOpposite&&s.addClass(e.progressbarOppositeClass),e.clickable&&s.on("click",classesToSelector(e.bulletClass),function onClick(e){e.preventDefault()
let s=l(this).index()*t.params.slidesPerGroup
t.params.loop&&(s+=t.loopedSlides),t.slideTo(s)}),Object.assign(t.pagination,{$el:s,el:s[0]}),t.enabled||s.addClass(e.lockClass))}function destroy(){const e=t.params.pagination
if(isPaginationDisabled())return
const s=t.pagination.$el
s.removeClass(e.hiddenClass),s.removeClass(e.modifierClass+e.type),s.removeClass(t.isHorizontal()?e.horizontalClass:e.verticalClass),t.pagination.bullets&&t.pagination.bullets.removeClass&&t.pagination.bullets.removeClass(e.bulletActiveClass),e.clickable&&s.off("click",classesToSelector(e.bulletClass))}i("init",()=>{!1===t.params.pagination.enabled?d():(init(),render(),update())}),i("activeIndexChange",()=>{t.params.loop?update():void 0===t.snapIndex&&update()}),i("snapIndexChange",()=>{t.params.loop||update()}),i("slidesLengthChange",()=>{t.params.loop&&(render(),update())}),i("snapGridLengthChange",()=>{t.params.loop||(render(),update())}),i("destroy",()=>{destroy()}),i("enable disable",()=>{const{$el:e}=t.pagination
e&&e[t.enabled?"removeClass":"addClass"](t.params.pagination.lockClass)}),i("lock unlock",()=>{update()}),i("click",(e,s)=>{const i=s.target,{$el:r}=t.pagination
if(t.params.pagination.el&&t.params.pagination.hideOnClick&&r&&r.length>0&&!l(i).hasClass(t.params.pagination.bulletClass)){if(t.navigation&&(t.navigation.nextEl&&i===t.navigation.nextEl||t.navigation.prevEl&&i===t.navigation.prevEl))return
const e=r.hasClass(t.params.pagination.hiddenClass)
n(!0===e?"paginationShow":"paginationHide"),r.toggleClass(t.params.pagination.hiddenClass)}})
const d=()=>{t.$el.addClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass),destroy()}
Object.assign(t.pagination,{enable:()=>{t.$el.removeClass(t.params.pagination.paginationDisabledClass),t.pagination.$el&&t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass),init(),render(),update()},disable:d,render,update,init,destroy})}function Autoplay(e){let t,{swiper:s,extendParams:i,on:n,emit:r}=e
function run(){if(!s.size)return s.autoplay.running=!1,void(s.autoplay.paused=!1)
const e=s.slides.eq(s.activeIndex)
let i=s.params.autoplay.delay
e.attr("data-swiper-autoplay")&&(i=e.attr("data-swiper-autoplay")||s.params.autoplay.delay),clearTimeout(t),t=nextTick(()=>{let e
s.params.autoplay.reverseDirection?s.params.loop?(s.loopFix(),e=s.slidePrev(s.params.speed,!0,!0),r("autoplay")):s.isBeginning?s.params.autoplay.stopOnLastSlide?stop():(e=s.slideTo(s.slides.length-1,s.params.speed,!0,!0),r("autoplay")):(e=s.slidePrev(s.params.speed,!0,!0),r("autoplay")):s.params.loop?(s.loopFix(),e=s.slideNext(s.params.speed,!0,!0),r("autoplay")):s.isEnd?s.params.autoplay.stopOnLastSlide?stop():(e=s.slideTo(0,s.params.speed,!0,!0),r("autoplay")):(e=s.slideNext(s.params.speed,!0,!0),r("autoplay")),s.params.cssMode&&s.autoplay.running?run():!1===e&&run()},i)}function start(){return void 0===t&&(!s.autoplay.running&&(s.autoplay.running=!0,r("autoplayStart"),run(),!0))}function stop(){return!!s.autoplay.running&&(void 0!==t&&(t&&(clearTimeout(t),t=void 0),s.autoplay.running=!1,r("autoplayStop"),!0))}function pause(e){s.autoplay.running&&(s.autoplay.paused||(t&&clearTimeout(t),s.autoplay.paused=!0,0!==e&&s.params.autoplay.waitForTransition?["transitionend","webkitTransitionEnd"].forEach(e=>{s.$wrapperEl[0].addEventListener(e,onTransitionEnd)}):(s.autoplay.paused=!1,run())))}function onVisibilityChange(){const e=getDocument()
"hidden"===e.visibilityState&&s.autoplay.running&&pause(),"visible"===e.visibilityState&&s.autoplay.paused&&(run(),s.autoplay.paused=!1)}function onTransitionEnd(e){s&&!s.destroyed&&s.$wrapperEl&&e.target===s.$wrapperEl[0]&&(["transitionend","webkitTransitionEnd"].forEach(e=>{s.$wrapperEl[0].removeEventListener(e,onTransitionEnd)}),s.autoplay.paused=!1,s.autoplay.running?run():stop())}function onMouseEnter(){s.params.autoplay.disableOnInteraction?stop():(r("autoplayPause"),pause()),["transitionend","webkitTransitionEnd"].forEach(e=>{s.$wrapperEl[0].removeEventListener(e,onTransitionEnd)})}function onMouseLeave(){s.params.autoplay.disableOnInteraction||(s.autoplay.paused=!1,r("autoplayResume"),run())}s.autoplay={running:!1,paused:!1},i({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!0,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}}),n("init",()=>{if(s.params.autoplay.enabled){start(),getDocument().addEventListener("visibilitychange",onVisibilityChange),function attachMouseEvents(){s.params.autoplay.pauseOnMouseEnter&&(s.$el.on("mouseenter",onMouseEnter),s.$el.on("mouseleave",onMouseLeave))}()}}),n("beforeTransitionStart",(e,t,i)=>{s.autoplay.running&&(i||!s.params.autoplay.disableOnInteraction?s.autoplay.pause(t):stop())}),n("sliderFirstMove",()=>{s.autoplay.running&&(s.params.autoplay.disableOnInteraction?stop():pause())}),n("touchEnd",()=>{s.params.cssMode&&s.autoplay.paused&&!s.params.autoplay.disableOnInteraction&&run()}),n("destroy",()=>{!function detachMouseEvents(){s.$el.off("mouseenter",onMouseEnter),s.$el.off("mouseleave",onMouseLeave)}(),s.autoplay.running&&stop(),getDocument().removeEventListener("visibilitychange",onVisibilityChange)}),Object.assign(s.autoplay,{pause,run,start,stop})}}}])
