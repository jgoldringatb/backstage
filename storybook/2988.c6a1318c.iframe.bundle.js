"use strict";(self.webpackChunkstorybook=self.webpackChunkstorybook||[]).push([[2988],{"../plugins/home/src/homePageComponents/CompanyLogo/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CompanyLogo:()=>CompanyLogo});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Typography=__webpack_require__("../node_modules/@material-ui/core/esm/Typography/Typography.js"),useApi=__webpack_require__("../packages/core-plugin-api/src/apis/system/useApi.tsx"),ConfigApi=__webpack_require__("../packages/core-plugin-api/src/apis/definitions/ConfigApi.ts");__webpack_require__("./node_modules/react/index.js");const CompanyLogo=props=>{const{logo,className}=props,configApi=(0,useApi.gf)(ConfigApi.U);return(0,jsx_runtime.jsx)("div",{className,children:logo?(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:logo}):(0,jsx_runtime.jsx)(Typography.A,{variant:"h1",children:configApi.getString("app.title")})})};try{CompanyLogo.displayName="CompanyLogo",CompanyLogo.__docgenInfo={description:"A component to display a company logo for the user.",displayName:"CompanyLogo",props:{logo:{defaultValue:null,description:"",name:"logo",required:!1,type:{name:"React.ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["../plugins/home/src/homePageComponents/CompanyLogo/CompanyLogo.tsx#CompanyLogo"]={docgenInfo:CompanyLogo.__docgenInfo,name:"CompanyLogo",path:"../plugins/home/src/homePageComponents/CompanyLogo/CompanyLogo.tsx#CompanyLogo"})}catch(__react_docgen_typescript_loader_error){}}}]);