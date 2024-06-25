/*! For license information please see cca24db9.74d0b758.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[758989],{380007:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(824246),o=n(511151);const s={id:"setup-opentelemetry",title:"Setup OpenTelemetry",description:"Tutorial to setup OpenTelemetry metrics and traces exporters in Backstage"},a=void 0,i={id:"tutorials/setup-opentelemetry",title:"Setup OpenTelemetry",description:"Tutorial to setup OpenTelemetry metrics and traces exporters in Backstage",source:"@site/../docs/tutorials/setup-opentelemetry.md",sourceDirName:"tutorials",slug:"/tutorials/setup-opentelemetry",permalink:"/docs/tutorials/setup-opentelemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/tutorials/setup-opentelemetry.md",tags:[],version:"current",frontMatter:{id:"setup-opentelemetry",title:"Setup OpenTelemetry",description:"Tutorial to setup OpenTelemetry metrics and traces exporters in Backstage"},sidebar:"docs",previous:{title:"Enabling a public entry point",permalink:"/docs/tutorials/enable-public-entry"},next:{title:"Overview",permalink:"/docs/architecture-decisions/"}},c={},u=[{value:"Install dependencies",id:"install-dependencies",level:2},{value:"Configure",id:"configure",level:2},{value:"Local Development Setup",id:"local-development-setup",level:2},{value:"Production Setup",id:"production-setup",level:2},{value:"References",id:"references",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Backstage uses ",(0,r.jsx)(t.a,{href:"https://opentelemetry.io/",children:"OpenTelemetery"})," to instrument its components by reporting traces and metrics."]}),"\n",(0,r.jsxs)(t.p,{children:["This tutorial shows how to setup exporters in your Backstage backend package. For demonstration purposes we will use a Prometheus exporter, but you can adjust your solution to use another one that suits your needs; see for example the article on ",(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/js/exporters/",children:"OTLP exporters"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"install-dependencies",children:"Install dependencies"}),"\n",(0,r.jsxs)(t.p,{children:["We will use the OpenTelemetry Node SDK and the ",(0,r.jsx)(t.code,{children:"auto-instrumentations-node"})," packages."]}),"\n",(0,r.jsxs)(t.p,{children:["Backstage packages, such as the catalog, use the OpenTelemetry API to send custom traces and metrics.\nThe ",(0,r.jsx)(t.code,{children:"auto-instrumentations-node"})," will automatically create spans for code called in libraries like Express."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:"yarn --cwd packages/backend add \\\n    @opentelemetry/sdk-node \\\n    @opentelemetry/auto-instrumentations-node \\\n    @opentelemetry/exporter-prometheus\n"})}),"\n",(0,r.jsx)(t.h2,{id:"configure",children:"Configure"}),"\n",(0,r.jsxs)(t.p,{children:["In your ",(0,r.jsx)(t.code,{children:"packages/backend/src"})," folder, create an ",(0,r.jsx)(t.code,{children:"instrumentation.js"})," file."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",metastring:'title="in packages/backend/src/instrumentation.js"',children:"const { NodeSDK } = require('@opentelemetry/sdk-node');\nconst {\n  getNodeAutoInstrumentations,\n} = require('@opentelemetry/auto-instrumentations-node');\nconst { PrometheusExporter } = require('@opentelemetry/exporter-prometheus');\n\n// By default exports the metrics on localhost:9464/metrics\nconst prometheus = new PrometheusExporter();\nconst sdk = new NodeSDK({\n  // You can add a traceExporter field here too\n  metricReader: prometheus,\n  instrumentations: [getNodeAutoInstrumentations()],\n});\n\nsdk.start();\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You probably won't need all of the instrumentation inside ",(0,r.jsx)(t.code,{children:"getNodeAutoInstrumentations()"})," so make sure to\ncheck the ",(0,r.jsx)(t.a,{href:"https://www.npmjs.com/package/@opentelemetry/auto-instrumentations-node",children:"documentation"})," and tweak it properly."]}),"\n",(0,r.jsx)(t.h2,{id:"local-development-setup",children:"Local Development Setup"}),"\n",(0,r.jsxs)(t.p,{children:["It's important to setup the NodeSDK and the automatic instrumentation ",(0,r.jsx)(t.strong,{children:"before"}),"\nimporting any library. This is why we will use the nodejs\n",(0,r.jsx)(t.a,{href:"https://nodejs.org/api/cli.html#-r---require-module",children:(0,r.jsx)(t.code,{children:"--require"})})," flag when we\nstart up the application."]}),"\n",(0,r.jsxs)(t.p,{children:["For local development, you can add the required flag in your ",(0,r.jsx)(t.code,{children:"packages/backend/package.json"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-json",metastring:'title="packages/backend/package.json"',children:'"scripts": {\n  "start": "backstage-cli package start --require ./src/instrumentation.js",\n  ...\n'})}),"\n",(0,r.jsxs)(t.p,{children:["You can now start your Backstage instance as usual, using ",(0,r.jsx)(t.code,{children:"yarn dev"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"production-setup",children:"Production Setup"}),"\n",(0,r.jsxs)(t.p,{children:["In your ",(0,r.jsx)(t.code,{children:"Dockerfile"}),", copy ",(0,r.jsx)(t.code,{children:"instrumentation.js"})," file into the root of the working directory."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Dockerfile",children:"COPY --chown=${NOT_ROOT_USER}:${NOT_ROOT_USER} packages/backend/src/instrumentation.js ./\n"})}),"\n",(0,r.jsxs)(t.p,{children:["And then add the ",(0,r.jsx)(t.code,{children:"--require"})," flag that points to the file to the CMD array."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-Dockerfile",children:'// highlight-remove-next-line\nCMD ["node", "packages/backend", "--config", "app-config.yaml"]\n// highlight-add-next-line\nCMD ["node", "--require", "./instrumentation.js", "packages/backend", "--config", "app-config.yaml"]\n'})}),"\n",(0,r.jsxs)(t.p,{children:["If you need to disable/configure some OpenTelemetry feature there are lots of ",(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/specs/otel/configuration/sdk-environment-variables/",children:"environment variables"})," which you can tweak."]}),"\n",(0,r.jsx)(t.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://opentelemetry.io/docs/instrumentation/js/getting-started/nodejs/",children:"Getting started with OpenTelemetry Node.js"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://open-telemetry.github.io/opentelemetry-js/classes/_opentelemetry_sdk_node.NodeSDK.html",children:"OpenTelemetry NodeSDK API"})}),"\n"]})]})}function p(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,s={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,y={};function g(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}function j(){}function x(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||h}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},j.prototype=g.prototype;var k=x.prototype=new j;k.constructor=x,m(k,g.prototype),k.isPureReactComponent=!0;var b=Array.isArray,v=Object.prototype.hasOwnProperty,_={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,s={},a=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)v.call(t,o)&&!w.hasOwnProperty(o)&&(s[o]=t[o]);var c=arguments.length-2;if(1===c)s.children=r;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];s.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===s[o]&&(s[o]=c[o]);return{$$typeof:n,type:e,key:a,ref:i,props:s,_owner:_.current}}function O(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var E=/\/+/g;function R(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function T(e,t,o,s,a){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var c=!1;if(null===e)c=!0;else switch(i){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===s?"."+R(c,0):s,b(a)?(o="",null!=e&&(o=e.replace(E,"$&/")+"/"),T(a,t,o,"",(function(e){return e}))):null!=a&&(O(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(E,"$&/")+"/")+e)),t.push(a)),1;if(c=0,s=""===s?".":s+":",b(e))for(var u=0;u<e.length;u++){var l=s+R(i=e[u],u);c+=T(i,t,o,l,a)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=f&&e[f]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)c+=T(i=i.value,t,o,l=s+R(i,u++),a);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function C(e,t,n){if(null==e)return e;var r=[],o=0;return T(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function P(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var $={current:null},N={transition:null},I={ReactCurrentDispatcher:$,ReactCurrentBatchConfig:N,ReactCurrentOwner:_};t.Children={map:C,forEach:function(e,t,n){C(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return C(e,(function(){t++})),t},toArray:function(e){return C(e,(function(e){return e}))||[]},only:function(e){if(!O(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=a,t.PureComponent=x,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=m({},e.props),s=e.key,a=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(a=t.ref,i=_.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var c=e.type.defaultProps;for(u in t)v.call(t,u)&&!w.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==c?c[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){c=Array(u);for(var l=0;l<u;l++)c[l]=arguments[l+2];o.children=c}return{$$typeof:n,type:e.type,key:s,ref:a,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:c,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=O,t.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:P}},t.memo=function(e,t){return{$$typeof:p,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=N.transition;N.transition={};try{e()}finally{N.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return $.current.useCallback(e,t)},t.useContext=function(e){return $.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return $.current.useDeferredValue(e)},t.useEffect=function(e,t){return $.current.useEffect(e,t)},t.useId=function(){return $.current.useId()},t.useImperativeHandle=function(e,t,n){return $.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return $.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return $.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return $.current.useMemo(e,t)},t.useReducer=function(e,t,n){return $.current.useReducer(e,t,n)},t.useRef=function(e){return $.current.useRef(e)},t.useState=function(e){return $.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return $.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return $.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(667294);const o={},s=r.createContext(o);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);