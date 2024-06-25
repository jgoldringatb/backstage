/*! For license information please see 49a36033.134aa948.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[842402],{879879:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var t=r(824246),c=r(511151);const s={id:"plugin-search-backend-node.lunrsearchengine",title:"LunrSearchEngine",description:"API reference for LunrSearchEngine"},o=void 0,i={id:"reference/plugin-search-backend-node.lunrsearchengine",title:"LunrSearchEngine",description:"API reference for LunrSearchEngine",source:"@site/../docs/reference/plugin-search-backend-node.lunrsearchengine.md",sourceDirName:"reference",slug:"/reference/plugin-search-backend-node.lunrsearchengine",permalink:"/docs/reference/plugin-search-backend-node.lunrsearchengine",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/reference/plugin-search-backend-node.lunrsearchengine.md",tags:[],version:"current",frontMatter:{id:"plugin-search-backend-node.lunrsearchengine",title:"LunrSearchEngine",description:"API reference for LunrSearchEngine"}},a={},u=[{value:"Constructors",id:"constructors",level:2},{value:"Properties",id:"properties",level:2},{value:"Methods",id:"methods",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/reference/",children:"Home"})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node",children:(0,t.jsx)(n.code,{children:"@backstage/plugin-search-backend-node"})})," > ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine",children:(0,t.jsx)(n.code,{children:"LunrSearchEngine"})})]}),"\n",(0,t.jsx)(n.p,{children:"Lunr specific search engine implementation."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Signature:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-typescript",children:"class LunrSearchEngine implements SearchEngine \n"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Implements:"})," ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.searchengine",children:"SearchEngine"})]}),"\n",(0,t.jsx)(n.h2,{id:"constructors",children:"Constructors"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constructor"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine._constructor_",children:"(constructor)(options)"})}),(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["Constructs a new instance of the ",(0,t.jsx)(n.code,{children:"LunrSearchEngine"})," class"]})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.docstore",children:"docStore"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"protected"})}),(0,t.jsxs)(n.td,{children:["Record<string, ",(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-common.indexabledocument",children:"IndexableDocument"}),">"]}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.highlightposttag",children:"highlightPostTag"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"protected"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.highlightpretag",children:"highlightPreTag"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"protected"})}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.logger",children:"logger"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"protected"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/backend-plugin-api.loggerservice",children:"LoggerService"})}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.lunrindices",children:"lunrIndices"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"protected"})}),(0,t.jsx)(n.td,{children:"Record<string, lunr.Index>"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.translator",children:"translator"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"protected"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.querytranslator",children:"QueryTranslator"})}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Method"}),(0,t.jsx)(n.th,{children:"Modifiers"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.getindexer",children:"getIndexer(type)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.query",children:"query(query)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"/docs/reference/plugin-search-backend-node.lunrsearchengine.settranslator",children:"setTranslator(translator)"})}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]})]})]})]})}function d(e={}){const{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},371426:(e,n,r)=>{var t=r(827378),c=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,n,r){var t,s={},u=null,l=null;for(t in void 0!==r&&(u=""+r),void 0!==n.key&&(u=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,t)&&!a.hasOwnProperty(t)&&(s[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===s[t]&&(s[t]=n[t]);return{$$typeof:c,type:e,key:u,ref:l,props:s,_owner:i.current}}n.Fragment=s,n.jsx=u,n.jsxs=u},541535:(e,n)=>{var r=Symbol.for("react.element"),t=Symbol.for("react.portal"),c=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),a=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),h=Symbol.for("react.lazy"),f=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},x=Object.assign,j={};function y(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}function g(){}function b(e,n,r){this.props=e,this.context=n,this.refs=j,this.updater=r||p}y.prototype.isReactComponent={},y.prototype.setState=function(e,n){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,n,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var m=b.prototype=new g;m.constructor=b,x(m,y.prototype),m.isPureReactComponent=!0;var _=Array.isArray,v=Object.prototype.hasOwnProperty,k={current:null},S={key:!0,ref:!0,__self:!0,__source:!0};function E(e,n,t){var c,s={},o=null,i=null;if(null!=n)for(c in void 0!==n.ref&&(i=n.ref),void 0!==n.key&&(o=""+n.key),n)v.call(n,c)&&!S.hasOwnProperty(c)&&(s[c]=n[c]);var a=arguments.length-2;if(1===a)s.children=t;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];s.children=u}if(e&&e.defaultProps)for(c in a=e.defaultProps)void 0===s[c]&&(s[c]=a[c]);return{$$typeof:r,type:e,key:o,ref:i,props:s,_owner:k.current}}function w(e){return"object"==typeof e&&null!==e&&e.$$typeof===r}var C=/\/+/g;function R(e,n){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var n={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return n[e]}))}(""+e.key):n.toString(36)}function P(e,n,c,s,o){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case r:case t:a=!0}}if(a)return o=o(a=e),e=""===s?"."+R(a,0):s,_(o)?(c="",null!=e&&(c=e.replace(C,"$&/")+"/"),P(o,n,c,"",(function(e){return e}))):null!=o&&(w(o)&&(o=function(e,n){return{$$typeof:r,type:e.type,key:n,ref:e.ref,props:e.props,_owner:e._owner}}(o,c+(!o.key||a&&a.key===o.key?"":(""+o.key).replace(C,"$&/")+"/")+e)),n.push(o)),1;if(a=0,s=""===s?".":s+":",_(e))for(var u=0;u<e.length;u++){var l=s+R(i=e[u],u);a+=P(i,n,c,l,o)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)a+=P(i=i.value,n,c,l=s+R(i,u++),o);else if("object"===i)throw n=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n)+"). If you meant to render a collection of children, use an array instead.");return a}function $(e,n,r){if(null==e)return e;var t=[],c=0;return P(e,t,"","",(function(e){return n.call(r,e,c++)})),t}function I(e){if(-1===e._status){var n=e._result;(n=n()).then((function(n){0!==e._status&&-1!==e._status||(e._status=1,e._result=n)}),(function(n){0!==e._status&&-1!==e._status||(e._status=2,e._result=n)})),-1===e._status&&(e._status=0,e._result=n)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},L={transition:null},T={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:L,ReactCurrentOwner:k};n.Children={map:$,forEach:function(e,n,r){$(e,(function(){n.apply(this,arguments)}),r)},count:function(e){var n=0;return $(e,(function(){n++})),n},toArray:function(e){return $(e,(function(e){return e}))||[]},only:function(e){if(!w(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},n.Component=y,n.Fragment=c,n.Profiler=o,n.PureComponent=b,n.StrictMode=s,n.Suspense=l,n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T,n.cloneElement=function(e,n,t){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var c=x({},e.props),s=e.key,o=e.ref,i=e._owner;if(null!=n){if(void 0!==n.ref&&(o=n.ref,i=k.current),void 0!==n.key&&(s=""+n.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in n)v.call(n,u)&&!S.hasOwnProperty(u)&&(c[u]=void 0===n[u]&&void 0!==a?a[u]:n[u])}var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];c.children=a}return{$$typeof:r,type:e.type,key:s,ref:o,props:c,_owner:i}},n.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},n.createElement=E,n.createFactory=function(e){var n=E.bind(null,e);return n.type=e,n},n.createRef=function(){return{current:null}},n.forwardRef=function(e){return{$$typeof:u,render:e}},n.isValidElement=w,n.lazy=function(e){return{$$typeof:h,_payload:{_status:-1,_result:e},_init:I}},n.memo=function(e,n){return{$$typeof:d,type:e,compare:void 0===n?null:n}},n.startTransition=function(e){var n=L.transition;L.transition={};try{e()}finally{L.transition=n}},n.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},n.useCallback=function(e,n){return O.current.useCallback(e,n)},n.useContext=function(e){return O.current.useContext(e)},n.useDebugValue=function(){},n.useDeferredValue=function(e){return O.current.useDeferredValue(e)},n.useEffect=function(e,n){return O.current.useEffect(e,n)},n.useId=function(){return O.current.useId()},n.useImperativeHandle=function(e,n,r){return O.current.useImperativeHandle(e,n,r)},n.useInsertionEffect=function(e,n){return O.current.useInsertionEffect(e,n)},n.useLayoutEffect=function(e,n){return O.current.useLayoutEffect(e,n)},n.useMemo=function(e,n){return O.current.useMemo(e,n)},n.useReducer=function(e,n,r){return O.current.useReducer(e,n,r)},n.useRef=function(e){return O.current.useRef(e)},n.useState=function(e){return O.current.useState(e)},n.useSyncExternalStore=function(e,n,r){return O.current.useSyncExternalStore(e,n,r)},n.useTransition=function(){return O.current.useTransition()},n.version="18.2.0"},827378:(e,n,r)=>{e.exports=r(541535)},824246:(e,n,r)=>{e.exports=r(371426)},511151:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>o});var t=r(667294);const c={},s=t.createContext(c);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);