/*! For license information please see 2e38d2bc.23982269.js.LICENSE.txt */
"use strict";(self.webpackChunkbackstage_microsite=self.webpackChunkbackstage_microsite||[]).push([[531931],{681122:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var r=n(824246),o=n(511151);const s={id:"troubleshooting",title:"Troubleshooting TechDocs",sidebar_label:"Troubleshooting",description:"Troubleshooting for TechDocs"},c=void 0,i={id:"features/techdocs/troubleshooting",title:"Troubleshooting TechDocs",description:"Troubleshooting for TechDocs",source:"@site/../docs/features/techdocs/troubleshooting.md",sourceDirName:"features/techdocs",slug:"/features/techdocs/troubleshooting",permalink:"/docs/features/techdocs/troubleshooting",draft:!1,unlisted:!1,editUrl:"https://github.com/backstage/backstage/edit/master/docs/../docs/features/techdocs/troubleshooting.md",tags:[],version:"current",frontMatter:{id:"troubleshooting",title:"Troubleshooting TechDocs",sidebar_label:"Troubleshooting",description:"Troubleshooting for TechDocs"},sidebar:"docs",previous:{title:"How-To guides",permalink:"/docs/features/techdocs/how-to-guides"},next:{title:"FAQ",permalink:"/docs/features/techdocs/faqs"}},a={},u=[{value:"Documentation not found when generating",id:"documentation-not-found-when-generating",level:2},{value:"MkDocs Build Errors",id:"mkdocs-build-errors",level:2},{value:"PlantUML with <code>svg_object</code> doesn&#39;t render",id:"plantuml-with-svg_object-doesnt-render",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"documentation-not-found-when-generating",children:"Documentation not found when generating"}),"\n",(0,r.jsx)(t.p,{children:'This may happen if you have TechDocs set up using the "out-of-the-box"\nconfiguration, wherein documentation is built dynamically by the TechDocs\nbackend, and your TechDocs files are being pulled from a git-based source\ncontrol management system (e.g. GitHub, BitBucket, etc).'}),"\n",(0,r.jsxs)(t.p,{children:["If you experience this, check that TechDocs-related files (e.g. markdown,\nassets, or the ",(0,r.jsx)(t.code,{children:"mkdocs.yml"})," file) are not matched by an ",(0,r.jsx)(t.code,{children:"export-ignore"}),"\nattribute in a ",(0,r.jsx)(t.code,{children:".gitattributes"})," file in the relevant repository."]}),"\n",(0,r.jsx)(t.p,{children:"TechDocs' backend is not able to see such files, and therefore may generate\npartial (or no) TechDocs as a result."}),"\n",(0,r.jsx)(t.p,{children:'You\'ll need to reconsider how you distribute tar archives based on your source\ncode (and how you prevent internal documentation from being included in those\narchives). Alternatively, you could consider switching to the "recommended"\nTechDocs architecture (documentation generated and published in CI/CD).'}),"\n",(0,r.jsx)(t.h2,{id:"mkdocs-build-errors",children:"MkDocs Build Errors"}),"\n",(0,r.jsxs)(t.p,{children:["Using the ",(0,r.jsx)(t.a,{href:"https://github.com/backstage/techdocs-cli",children:"TechDocs CLI"}),", you can\ntroubleshoot MkDocs build issues locally. Note this requires you have Docker\navailable to launch images. First, ",(0,r.jsx)(t.code,{children:"git clone"})," the target repository locally,\nthen in the root of the repository, run:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npx @techdocs/cli serve\n"})}),"\n",(0,r.jsx)(t.p,{children:"For example, if you have forgotten to put an MkDocs configuration file in your\nrepo, the resulting error will be:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npx: installed 278 in 9.089s\n[techdocs-preview-bundle] Running local version of Backstage at http://localhost:3000\nINFO    -  Building documentation...\n\nConfig file '/content/mkdocs.yml' does not exist.\n"})}),"\n",(0,r.jsx)(t.p,{children:"When it works, a local copy of both Backstage and your site will be launched\nlocally:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"npx: installed 278 in 9.682s\n[techdocs-preview-bundle] Running local version of Backstage at http://localhost:3000\nINFO    -  Building documentation...\nWARNING -  Config value: 'dev_addr'. Warning: The use of the IP address '0.0.0.0'\n  suggests a production environment or the use of a proxy to connect to the MkDocs\n  server. However, the MkDocs' server is intended for local development purposes only.\n  Please use a third party production-ready server instead.\nINFO    -  Cleaning site directory\nDEBUG   -  Successfully imported extension module \"plantuml_markdown\".\nDEBUG   -  Successfully loaded extension \"plantuml_markdown.PlantUMLMarkdownExtension\".\nINFO    -  Documentation built in 0.23 seconds\n[I 210115 19:00:45 server:335] Serving on http://0.0.0.0:8000\nINFO    -  Serving on http://0.0.0.0:8000\n[I 210115 19:00:45 handlers:62] Start watching changes\nINFO    -  Start watching changes\n[I 210115 19:00:45 handlers:64] Start detecting changes\nINFO    -  Start detecting changes\n"})}),"\n",(0,r.jsxs)(t.h2,{id:"plantuml-with-svg_object-doesnt-render",children:["PlantUML with ",(0,r.jsx)(t.code,{children:"svg_object"})," doesn't render"]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://pypi.org/project/plantuml-markdown/",children:"plantuml-markdown"})," MkDocs\nplugin available in\n",(0,r.jsx)(t.a,{href:"https://github.com/backstage/mkdocs-techdocs-core",children:(0,r.jsx)(t.code,{children:"mkdocs-techdocs-core"})}),"\nsupports different formats for rendering diagrams. TechDocs does however not\nsupport all of them."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"svg_object"})," format renders a diagram as an HTML ",(0,r.jsx)(t.code,{children:"<object>"})," tag but this is\nnot allowed as it enables bad actors to inject malicious content into\ndocumentation pages. See\n",(0,r.jsx)(t.a,{href:"https://github.com/advisories/GHSA-gg96-f8wr-p89f",children:"CVE-2021-32661"})," for more\ndetails."]}),"\n",(0,r.jsxs)(t.p,{children:["Instead use ",(0,r.jsx)(t.code,{children:"svg_inline"})," which renders as an ",(0,r.jsx)(t.code,{children:"<svg>"})," tag and provides the same\nbenefits as ",(0,r.jsx)(t.code,{children:"svg_object"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},371426:(e,t,n)=>{var r=n(827378),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,s={},u=null,l=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(l=t.ref),t)c.call(t,r)&&!a.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:u,ref:l,props:s,_owner:i.current}}t.Fragment=s,t.jsx=u,t.jsxs=u},541535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),c=Symbol.for("react.profiler"),i=Symbol.for("react.provider"),a=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),l=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),h=Symbol.iterator;var p={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y=Object.assign,m={};function g(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}function b(){}function v(e,t,n){this.props=e,this.context=t,this.refs=m,this.updater=n||p}g.prototype.isReactComponent={},g.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},g.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},b.prototype=g.prototype;var _=v.prototype=new b;_.constructor=v,y(_,g.prototype),_.isPureReactComponent=!0;var x=Array.isArray,k=Object.prototype.hasOwnProperty,j={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function S(e,t,r){var o,s={},c=null,i=null;if(null!=t)for(o in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(c=""+t.key),t)k.call(t,o)&&!w.hasOwnProperty(o)&&(s[o]=t[o]);var a=arguments.length-2;if(1===a)s.children=r;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];s.children=u}if(e&&e.defaultProps)for(o in a=e.defaultProps)void 0===s[o]&&(s[o]=a[o]);return{$$typeof:n,type:e,key:c,ref:i,props:s,_owner:j.current}}function T(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var D=/\/+/g;function E(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function C(e,t,o,s,c){var i=typeof e;"undefined"!==i&&"boolean"!==i||(e=null);var a=!1;if(null===e)a=!0;else switch(i){case"string":case"number":a=!0;break;case"object":switch(e.$$typeof){case n:case r:a=!0}}if(a)return c=c(a=e),e=""===s?"."+E(a,0):s,x(c)?(o="",null!=e&&(o=e.replace(D,"$&/")+"/"),C(c,t,o,"",(function(e){return e}))):null!=c&&(T(c)&&(c=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(c,o+(!c.key||a&&a.key===c.key?"":(""+c.key).replace(D,"$&/")+"/")+e)),t.push(c)),1;if(a=0,s=""===s?".":s+":",x(e))for(var u=0;u<e.length;u++){var l=s+E(i=e[u],u);a+=C(i,t,o,l,c)}else if(l=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=h&&e[h]||e["@@iterator"])?e:null}(e),"function"==typeof l)for(e=l.call(e),u=0;!(i=e.next()).done;)a+=C(i=i.value,t,o,l=s+E(i,u++),c);else if("object"===i)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return a}function R(e,t,n){if(null==e)return e;var r=[],o=0;return C(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O={current:null},$={transition:null},P={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:$,ReactCurrentOwner:j};t.Children={map:R,forEach:function(e,t,n){R(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return R(e,(function(){t++})),t},toArray:function(e){return R(e,(function(e){return e}))||[]},only:function(e){if(!T(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=g,t.Fragment=o,t.Profiler=c,t.PureComponent=v,t.StrictMode=s,t.Suspense=l,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P,t.cloneElement=function(e,t,r){if(null==e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var o=y({},e.props),s=e.key,c=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,i=j.current),void 0!==t.key&&(s=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)k.call(t,u)&&!w.hasOwnProperty(u)&&(o[u]=void 0===t[u]&&void 0!==a?a[u]:t[u])}var u=arguments.length-2;if(1===u)o.children=r;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];o.children=a}return{$$typeof:n,type:e.type,key:s,ref:c,props:o,_owner:i}},t.createContext=function(e){return(e={$$typeof:a,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=S,t.createFactory=function(e){var t=S.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=T,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:I}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=$.transition;$.transition={};try{e()}finally{$.transition=t}},t.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")},t.useCallback=function(e,t){return O.current.useCallback(e,t)},t.useContext=function(e){return O.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return O.current.useDeferredValue(e)},t.useEffect=function(e,t){return O.current.useEffect(e,t)},t.useId=function(){return O.current.useId()},t.useImperativeHandle=function(e,t,n){return O.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return O.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return O.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return O.current.useMemo(e,t)},t.useReducer=function(e,t,n){return O.current.useReducer(e,t,n)},t.useRef=function(e){return O.current.useRef(e)},t.useState=function(e){return O.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return O.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return O.current.useTransition()},t.version="18.2.0"},827378:(e,t,n)=>{e.exports=n(541535)},824246:(e,t,n)=>{e.exports=n(371426)},511151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>c});var r=n(667294);const o={},s=r.createContext(o);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);