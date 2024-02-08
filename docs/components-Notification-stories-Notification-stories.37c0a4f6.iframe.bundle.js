"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[8772],{"./src/components/Notification/stories/Notification.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{StaticNotificationBase:()=>StaticNotificationBase,StaticNotificationBaseStatus:()=>StaticNotificationBaseStatus,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Notification_stories});__webpack_require__("./node_modules/react/index.js");var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),InfoSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg"),ErrorSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/ErrorSolid.svg"),CheckSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CheckSolid.svg"),CloseSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseSolid.svg"),light=__webpack_require__("./src/components/themes/light/index.ts"),typography=__webpack_require__("./src/components/Typography/typography.ts"),Link=__webpack_require__("./src/components/Link/index.tsx"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),IconPlacement=__webpack_require__("./src/components/IconPlacement/index.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const backGroundColorMixin=(0,styled_components_browser_esm.gV)(["background-color:",";"],(({theme,$status})=>"warning"===$status?theme.color["Warning/Warning 10"]:"error"===$status?theme.color["Error/Error 10"]:"success"===$status?theme.color["Success/Success 10"]:theme.color["Primary/Primary 10"])),borderColorMixin=(0,styled_components_browser_esm.gV)(["border-color:",";"],(({theme,$status})=>"warning"===$status?theme.color["Warning/Warning 50 Main"]:"error"===$status?theme.color["Error/Error 60 Main"]:"success"===$status?theme.color["Success/Success 50 Main"]:theme.color["Primary/Primary 60 Main"])),NotificationWrapper=styled_components_browser_esm.cp.div.withConfig({displayName:"Notification__NotificationWrapper",componentId:"sc-fu9gez-0"})(["overflow:hidden;position:relative;box-sizing:border-box;border-radius:",";padding:12px 44px 12px 52px;"," "," border-width:1px;border-style:solid;",";",";"],(p=>(0,borderRadius.Af)(p.theme.shape)),(p=>p.$displayStatusIcon?"":"padding-left: 16px;"),(p=>p.$isClosable?"":"padding-right: 16px;"),borderColorMixin,backGroundColorMixin),Content=styled_components_browser_esm.cp.div.withConfig({displayName:"Notification__Content",componentId:"sc-fu9gez-1"})(["display:flex;flex-direction:column;padding:2px 0;"]),Title=styled_components_browser_esm.cp.div.withConfig({displayName:"Notification__Title",componentId:"sc-fu9gez-2"})([""," color:",";margin-bottom:4px;"],typography.eO["Subtitle/Subtitle 3"],(({theme})=>theme.color["Neutral/Neutral 90"])),CustomBody=styled_components_browser_esm.cp.div.withConfig({displayName:"Notification__CustomBody",componentId:"sc-fu9gez-3"})([""," color:",";"],typography.eO["Body/Body 2 Long"],(({theme})=>theme.color["Neutral/Neutral 90"])),CloseButton=(0,styled_components_browser_esm.cp)(IconPlacement.a).withConfig({displayName:"Notification__CloseButton",componentId:"sc-fu9gez-4"})(["position:absolute;top:10px;right:8px;"]),IconWrapper=styled_components_browser_esm.cp.div.withConfig({displayName:"Notification__IconWrapper",componentId:"sc-fu9gez-5"})(["position:absolute;top:12px;left:16px;width:24px;height:24px;& svg{width:24px;height:24px;& *[fill^='#']{fill:",";}}"],(({theme,$status})=>"warning"===$status?theme.color["Warning/Warning 50 Main"]:"error"===$status?theme.color["Error/Error 60 Main"]:"success"===$status?theme.color["Success/Success 50 Main"]:theme.color["Primary/Primary 60 Main"])),LinkWrapper=(0,styled_components_browser_esm.cp)(Link.c).withConfig({displayName:"Notification__LinkWrapper",componentId:"sc-fu9gez-6"})(["margin-top:4px;",""],typography.eO["Button/Button 2"]);NotificationWrapper.defaultProps={theme:light.R};const Notification=({status="info",title,linkText="",href="",displayStatusIcon=!1,isClosable=!1,onClose,children,...props})=>{const NotificationIcon=(status=>{switch(status){case"info":return InfoSolid._;case"error":return CloseSolid._;case"success":return CheckSolid._;default:return ErrorSolid._}})(status),isAlert="info"!==status;return(0,jsx_runtime.jsxs)(NotificationWrapper,{role:isAlert?"alert":"status","aria-live":isAlert?"assertive":"polite",$status:status,$displayStatusIcon:displayStatusIcon,$isClosable:isClosable,...props,children:[displayStatusIcon&&(0,jsx_runtime.jsx)(IconWrapper,{$status:status,children:(0,jsx_runtime.jsx)(NotificationIcon,{})}),(0,jsx_runtime.jsxs)(Content,{children:[title&&(0,jsx_runtime.jsx)(Title,{children:title}),(0,jsx_runtime.jsx)(CustomBody,{children}),linkText&&(0,jsx_runtime.jsx)(LinkWrapper,{href,children:linkText||href})]}),isClosable&&(0,jsx_runtime.jsx)(CloseButton,{dimension:"mSmall",highlightFocus:!1,onClick:onClose})]})};Notification.displayName="Notification",Notification.displayName="Notification";try{Notification.displayName="Notification",Notification.__docgenInfo={description:"",displayName:"Notification",props:{status:{defaultValue:{value:"info"},description:"Статус notification",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},title:{defaultValue:null,description:"Заголовок notification",name:"title",required:!1,type:{name:"ReactNode"}},linkText:{defaultValue:{value:""},description:"Название для ссылки",name:"linkText",required:!1,type:{name:"string"}},href:{defaultValue:{value:""},description:"Url ссылки",name:"href",required:!1,type:{name:"string"}},isClosable:{defaultValue:{value:"false"},description:'Переключатель видимости иконки "Close"',name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Закрытие notification",name:"onClose",required:!1,type:{name:"(() => void)"}},displayStatusIcon:{defaultValue:{value:"false"},description:"Переключатель видимости статусных иконок",name:"displayStatusIcon",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Notification/index.tsx#Notification"]={docgenInfo:Notification.__docgenInfo,name:"Notification",path:"src/components/Notification/index.tsx#Notification"})}catch(__react_docgen_typescript_loader_error){}var createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");const StaticNotificationBaseTemplate=({status="info",title="Заголовок оповещения",linkText="Link",href="https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531",displayStatusIcon=!0,isClosable=!0,themeBorderKind,...props})=>(0,jsx_runtime.jsx)(styled_components_browser_esm.Mp,{theme:(0,createBorderRadiusSwapper.M)(themeBorderKind),children:(0,jsx_runtime.jsx)(Notification,{...props,status,title,linkText,href,displayStatusIcon,isClosable,children:"Тут находится текст короткого оповещения"})});StaticNotificationBaseTemplate.displayName="StaticNotificationBaseTemplate";try{StaticNotificationBaseTemplate.displayName="StaticNotificationBaseTemplate",StaticNotificationBaseTemplate.__docgenInfo={description:"",displayName:"StaticNotificationBaseTemplate",props:{status:{defaultValue:{value:"info"},description:"Статус notification",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},title:{defaultValue:{value:"Заголовок оповещения"},description:"Заголовок notification",name:"title",required:!1,type:{name:"ReactNode"}},linkText:{defaultValue:{value:"Link"},description:"Название для ссылки",name:"linkText",required:!1,type:{name:"string"}},href:{defaultValue:{value:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531"},description:"Url ссылки",name:"href",required:!1,type:{name:"string"}},isClosable:{defaultValue:{value:"true"},description:'Переключатель видимости иконки "Close"',name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Закрытие notification",name:"onClose",required:!1,type:{name:"(() => void)"}},displayStatusIcon:{defaultValue:{value:"true"},description:"Переключатель видимости статусных иконок",name:"displayStatusIcon",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Notification/stories/StaticNotificationBase.template.tsx#StaticNotificationBaseTemplate"]={docgenInfo:StaticNotificationBaseTemplate.__docgenInfo,name:"StaticNotificationBaseTemplate",path:"src/components/Notification/stories/StaticNotificationBase.template.tsx#StaticNotificationBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}const Layout=styled_components_browser_esm.cp.div.withConfig({displayName:"StaticNotificationBaseStatustemplate__Layout",componentId:"sc-lohmjk-0"})(["margin:20px;"]),StaticNotificationBaseStatusTemplate=({title="Заголовок оповещения",linkText="Link",href="https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531",displayStatusIcon=!0,isClosable=!0,...props})=>(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsx)(Notification,{...props,status:"info",title,linkText,href,displayStatusIcon,isClosable,children:"Тут находится текст короткого оповещения"})}),(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsx)(Notification,{...props,status:"warning",title,linkText,href,displayStatusIcon,isClosable,children:"Тут находится текст короткого оповещения"})}),(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsx)(Notification,{...props,status:"error",title,linkText,href,displayStatusIcon,isClosable,children:"Тут находится текст короткого оповещения"})}),(0,jsx_runtime.jsx)(Layout,{children:(0,jsx_runtime.jsx)(Notification,{...props,status:"success",title,linkText,href,displayStatusIcon,isClosable,children:"Тут находится текст короткого оповещения"})})]});try{StaticNotificationBaseStatusTemplate.displayName="StaticNotificationBaseStatusTemplate",StaticNotificationBaseStatusTemplate.__docgenInfo={description:"",displayName:"StaticNotificationBaseStatusTemplate",props:{status:{defaultValue:null,description:"Статус notification",name:"status",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},title:{defaultValue:{value:"Заголовок оповещения"},description:"Заголовок notification",name:"title",required:!1,type:{name:"ReactNode"}},linkText:{defaultValue:{value:"Link"},description:"Название для ссылки",name:"linkText",required:!1,type:{name:"string"}},href:{defaultValue:{value:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531"},description:"Url ссылки",name:"href",required:!1,type:{name:"string"}},isClosable:{defaultValue:{value:"true"},description:'Переключатель видимости иконки "Close"',name:"isClosable",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"Закрытие notification",name:"onClose",required:!1,type:{name:"(() => void)"}},displayStatusIcon:{defaultValue:{value:"true"},description:"Переключатель видимости статусных иконок",name:"displayStatusIcon",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Notification/stories/StaticNotificationBaseStatus.template.tsx#StaticNotificationBaseStatusTemplate"]={docgenInfo:StaticNotificationBaseStatusTemplate.__docgenInfo,name:"StaticNotificationBaseStatusTemplate",path:"src/components/Notification/stories/StaticNotificationBaseStatus.template.tsx#StaticNotificationBaseStatusTemplate"})}catch(__react_docgen_typescript_loader_error){}const Desc=styled_components_browser_esm.cp.div.withConfig({displayName:"Notificationstories__Desc",componentId:"sc-1c5l0fg-0"})(["font-family:'VTB Group UI';font-size:16px;line-height:24px;"]),Description=()=>(0,jsx_runtime.jsx)(Desc,{children:"Компонент служит для демонстрации статических нотификаций. Существует в четырех типа нотификаций: Информационное сообщение, предупреждение, ошибка и положительные действия. Применяется как самостоятельный элемент."});Description.displayName="Description";const Notification_stories={title:"Deprecated/Notification (Deprecated используйте NotificationItem компонент)",decorators:void 0,component:Notification,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(Description,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27484"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A27651"}]},argTypes:{title:{control:{type:"text"}},linkText:{control:{type:"text"}},href:{control:{type:"text"}},displayStatusIcon:{type:"boolean"},isClosable:{type:"boolean"},onClose:{action:"clicked"},themeBorderKind:{options:borderRadius.LX,control:{type:"radio"}}}},StaticNotificationBaseStory=props=>(0,jsx_runtime.jsx)(StaticNotificationBaseTemplate,{...props});StaticNotificationBaseStory.displayName="StaticNotificationBaseStory";const StaticNotificationBase={render:StaticNotificationBaseStory,parameters:{docs:{source:{code:"import * as React from 'react';\nimport { ThemeProvider } from 'styled-components';\n\nimport { Notification } from '@admiral-ds/react-ui';\nimport type { NotificationProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';\n\nconst bodyDefault = 'Тут находится текст короткого оповещения';\nconst titleDefault = 'Заголовок оповещения';\nconst linkTextDefault = 'Link';\nconst hrefDefault = 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531';\n\nexport const StaticNotificationBaseTemplate = ({\n  status = 'info',\n  title = titleDefault,\n  linkText = linkTextDefault,\n  href = hrefDefault,\n  displayStatusIcon = true,\n  isClosable = true,\n  themeBorderKind,\n  ...props\n}: NotificationProps & { themeBorderKind?: BorderRadiusType }) => {\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>\n      <Notification\n        {...props}\n        status={status}\n        title={title}\n        linkText={linkText}\n        href={href}\n        displayStatusIcon={displayStatusIcon}\n        isClosable={isClosable}\n      >\n        {bodyDefault}\n      </Notification>\n    </ThemeProvider>\n  );\n};\n"}}},name:"Статическая нотификация. Базовый пример."},StaticNotificationBaseStatusStory=props=>(0,jsx_runtime.jsx)(StaticNotificationBaseStatusTemplate,{...props});StaticNotificationBaseStatusStory.displayName="StaticNotificationBaseStatusStory";const StaticNotificationBaseStatus={render:StaticNotificationBaseStatusStory,parameters:{docs:{source:{code:"import styled from 'styled-components';\nimport { Notification } from '@admiral-ds/react-ui';\nimport type { NotificationProps } from '@admiral-ds/react-ui';\n\nconst Layout = styled.div`\n  margin: 20px;\n`;\n\nconst bodyDefault = 'Тут находится текст короткого оповещения';\nconst titleDefault = 'Заголовок оповещения';\nconst linkTextDefault = 'Link';\nconst hrefDefault = 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A26531';\n\nexport const StaticNotificationBaseStatusTemplate = ({\n  title = titleDefault,\n  linkText = linkTextDefault,\n  href = hrefDefault,\n  displayStatusIcon = true,\n  isClosable = true,\n  ...props\n}: NotificationProps) => {\n  return (\n    <>\n      <Layout>\n        <Notification\n          {...props}\n          status=\"info\"\n          title={title}\n          linkText={linkText}\n          href={href}\n          displayStatusIcon={displayStatusIcon}\n          isClosable={isClosable}\n        >\n          {bodyDefault}\n        </Notification>\n      </Layout>\n      <Layout>\n        <Notification\n          {...props}\n          status=\"warning\"\n          title={title}\n          linkText={linkText}\n          href={href}\n          displayStatusIcon={displayStatusIcon}\n          isClosable={isClosable}\n        >\n          {bodyDefault}\n        </Notification>\n      </Layout>\n      <Layout>\n        <Notification\n          {...props}\n          status=\"error\"\n          title={title}\n          linkText={linkText}\n          href={href}\n          displayStatusIcon={displayStatusIcon}\n          isClosable={isClosable}\n        >\n          {bodyDefault}\n        </Notification>\n      </Layout>\n      <Layout>\n        <Notification\n          {...props}\n          status=\"success\"\n          title={title}\n          linkText={linkText}\n          href={href}\n          displayStatusIcon={displayStatusIcon}\n          isClosable={isClosable}\n        >\n          {bodyDefault}\n        </Notification>\n      </Layout>\n    </>\n  );\n};\n"}}},name:"Статусы статических нотификаций"};StaticNotificationBase.parameters={...StaticNotificationBase.parameters,docs:{...StaticNotificationBase.parameters?.docs,source:{originalSource:"{\n  render: StaticNotificationBaseStory,\n  parameters: {\n    docs: {\n      source: {\n        code: StaticNotificationBaseRaw\n      }\n    }\n  },\n  name: 'Статическая нотификация. Базовый пример.'\n}",...StaticNotificationBase.parameters?.docs?.source}}},StaticNotificationBaseStatus.parameters={...StaticNotificationBaseStatus.parameters,docs:{...StaticNotificationBaseStatus.parameters?.docs,source:{originalSource:"{\n  render: StaticNotificationBaseStatusStory,\n  parameters: {\n    docs: {\n      source: {\n        code: StaticNotificationBaseStatusRaw\n      }\n    }\n  },\n  name: 'Статусы статических нотификаций'\n}",...StaticNotificationBaseStatus.parameters?.docs?.source}}};const __namedExportsOrder=["StaticNotificationBase","StaticNotificationBaseStatus"]},"./node_modules/@admiral-ds/icons/build/service/CheckSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>SvgCheckSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgCheckSolid=function SvgCheckSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m7.79 3.29c.28.28.74.27 1.01-.02l4.42-4.8c.24-.27.22-.68-.04-.92a.65.65 0 0 0-.92.04l-3.99 4.34-2.4-2.4a.66.66 0 0 0-.92 0c-.25.25-.25.67 0 .92z",clipRule:"evenodd"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M6.41 5.49a.65.65 0 1 0-.92.92L11.08 12l-5.49 5.49a.65.65 0 0 0 .92.92L12 12.92l5.49 5.49a.65.65 0 0 0 .92-.92L12.92 12l5.59-5.59a.65.65 0 0 0-.92-.92L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>SvgCloseSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgCloseSolid=function SvgCloseSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m13-3.92A.65.65 0 0 1 16 9l-3.08 3 3 3.08A.65.65 0 1 1 15 16l-3-3.08L9 16a.65.65 0 1 1-.92-.92l3-3.08-3-3A.65.65 0 0 1 9 8.08l3 3 3.08-3a.65.65 0 0 1 .92 0",clipRule:"evenodd"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/ErrorSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>SvgErrorSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgErrorSolid=function SvgErrorSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18m0 10.695a.65.65 0 0 0 .65-.65V7.9a.65.65 0 1 0-1.3 0v5.146c0 .36.291.65.65.65m.85 2.206a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0",clipRule:"evenodd"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>SvgInfoSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-4.75a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7M14.1 16a.75.75 0 0 1-.75.75h-.05a2.05 2.05 0 0 1-2.05-2.05v-3.75a.75.75 0 0 1 1.5 0v3.75c0 .304.246.55.55.55h.05a.75.75 0 0 1 .75.75",clipRule:"evenodd"})))};__webpack_require__.p},"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts");function createBorderRadiusSwapper(borderRadiusKind){return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.R.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.R.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.R)}}},"./src/components/IconPlacement/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>IconPlacement,a:()=>CloseIconPlacementButton});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/themes/borderRadius.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const IconSizeL=24,IconSizeM=20,IconSizeS=16,HighlighterOffsetBig=6,HighlighterOffsetSmall=4;function getIconSize(dimension){switch(dimension){case"lSmall":case"lBig":default:return IconSizeL;case"mSmall":case"mBig":return IconSizeM;case"s":return IconSizeS}}function getHighlighterOffset(dimension){switch(dimension){case"lBig":case"mBig":default:return HighlighterOffsetBig;case"lSmall":case"mSmall":case"s":return HighlighterOffsetSmall}}function getHighlighterSize(dimension){return getIconSize(dimension)+2*getHighlighterOffset(dimension)}const IconColor=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.gV)(["& *[fill^='#']{fill:",";}"],(p=>{switch(p.$iconColor){case"primary":return p.theme.color["Primary/Primary 60 Main"];case"secondary":return p.theme.color["Neutral/Neutral 50"];default:return p.$iconColor}})),IconPlacementContent=styled_components__WEBPACK_IMPORTED_MODULE_3__.cp.div.withConfig({displayName:"IconPlacement__IconPlacementContent",componentId:"sc-144koov-0"})(["position:absolute;top:0;left:0;height:100%;"," & > svg{height:","px;width:","px;}"],IconColor,(p=>getIconSize(p.$dimension)),(p=>getIconSize(p.$dimension))),ActivityHighlighter=styled_components__WEBPACK_IMPORTED_MODULE_3__.cp.div.withConfig({displayName:"IconPlacement__ActivityHighlighter",componentId:"sc-144koov-1"})(["width:","px;height:","px;border-radius:50%;background-color:transparent;pointer-events:none;position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);"],(p=>getHighlighterSize(p.$dimension)),(p=>getHighlighterSize(p.$dimension))),IconPlacementButton=styled_components__WEBPACK_IMPORTED_MODULE_3__.cp.button.withConfig({displayName:"IconPlacement__IconPlacementButton",componentId:"sc-144koov-2"})(["position:relative;padding:0;margin:","px;box-sizing:border-box;border:none;background-color:transparent;appearance:none;flex:0 0 auto;height:","px;width:","px;border-radius:",";overflow:visible;cursor:pointer;> *{pointer-events:none;}&:disabled{cursor:default;pointer-events:none;& *[fill^='#']{fill:",";}}&:focus-visible{outline-offset:2px;outline:"," solid 2px;}&:focus{> ","{background-color:",";}}&:hover{> ","{background-color:",";}}&:active{> ","{background-color:",";}}&:focus-visible{> ","{background-color:transparent;}}"],(p=>getHighlighterOffset(p.$dimension)),(p=>getIconSize(p.$dimension)),(p=>getIconSize(p.$dimension)),(p=>(0,_src_components_themes_borderRadius__WEBPACK_IMPORTED_MODULE_4__.KY)(p.theme.shape)),(({theme})=>theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Primary/Primary 60 Main"]),ActivityHighlighter,(p=>p.$highlightFocus?p.theme.color["Opacity/Focus"]:"transparent"),ActivityHighlighter,(({theme})=>theme.color["Opacity/Hover"]),ActivityHighlighter,(({theme})=>theme.color["Opacity/Press"]),ActivityHighlighter),IconPlacement=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({type="button",dimension="lBig",disabled=!1,highlightFocus=!0,appearance,children,...props},ref)=>{const iconColor="object"==typeof appearance?appearance.iconColor?appearance.iconColor:"secondary":appearance;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(IconPlacementButton,{ref,type,$dimension:dimension,disabled,$highlightFocus:highlightFocus,...props,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(ActivityHighlighter,{$dimension:dimension,"aria-hidden":!0}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconPlacementContent,{$dimension:dimension,$iconColor:iconColor,"aria-hidden":!0,children})]})})),CloseIconPlacementButton=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({className,...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(IconPlacement,{ref,className:`close-button ${className||""}`,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_1__._,{"aria-hidden":!0})})));try{IconPlacement.displayName="IconPlacement",IconPlacement.__docgenInfo={description:"",displayName:"IconPlacement",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#IconPlacement"]={docgenInfo:IconPlacement.__docgenInfo,name:"IconPlacement",path:"src/components/IconPlacement/index.tsx#IconPlacement"})}catch(__react_docgen_typescript_loader_error){}try{CloseIconPlacementButton.displayName="CloseIconPlacementButton",CloseIconPlacementButton.__docgenInfo={description:"",displayName:"CloseIconPlacementButton",props:{dimension:{defaultValue:{value:"lBig"},description:"Размер кнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"lBig"'},{value:'"lSmall"'},{value:'"mBig"'},{value:'"mSmall"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},highlightFocus:{defaultValue:{value:"true"},description:"Позволяет управлять подсветкой в состоянии фокуса, по умолчанию состояние фокуса подсвечивается",name:"highlightFocus",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"Внешний вид кнопки",name:"appearance",required:!1,type:{name:"IconPlacementAppearance | { iconColor: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/IconPlacement/index.tsx#CloseIconPlacementButton"]={docgenInfo:CloseIconPlacementButton.__docgenInfo,name:"CloseIconPlacementButton",path:"src/components/IconPlacement/index.tsx#CloseIconPlacementButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Link/LinkComponent.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>LinkComponent,e:()=>LinkComponentCssMixin});var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");const styleDisabledMixin=(0,styled_components_browser_esm.gV)(["color:",";& *[fill^='#']{fill:",";}user-select:none;"],(({theme})=>theme.color["Neutral/Neutral 30"]),(({theme})=>theme.color["Neutral/Neutral 30"])),styleColorMixin=(0,styled_components_browser_esm.gV)(["color:",";& *[fill^='#']{fill:",";}"],(({theme,$appearance})=>"secondary"===$appearance?theme.color["Neutral/Neutral 90"]:theme.color["Primary/Primary 60 Main"]),(({theme,$appearance})=>"secondary"===$appearance?theme.color["Neutral/Neutral 90"]:theme.color["Primary/Primary 60 Main"])),styleMixin=(0,styled_components_browser_esm.gV)(["border-radius:",";&:hover{color:",";& *[fill^='#']{fill:",";}}&:focus{color:",";& *[fill^='#']{fill:",";}outline-color:",";}&:active{color:",";& *[fill^='#']{fill:",";}}&:focus-visible{outline-offset:2px;outline:"," solid 2px;}"],(p=>(0,borderRadius.Af)(p.theme.shape)),(({theme})=>theme.color["Primary/Primary 70"]),(({theme})=>theme.color["Primary/Primary 70"]),(({theme})=>theme.color["Primary/Primary 70"]),(({theme})=>theme.color["Primary/Primary 70"]),(({theme})=>theme.color["Primary/Primary 70"]),(({theme})=>theme.color["Primary/Primary 80"]),(({theme})=>theme.color["Primary/Primary 80"]),(p=>p.theme.color["Primary/Primary 60 Main"])),styleTextMixin=(0,styled_components_browser_esm.gV)(["",""],(({$dimension})=>"s"===$dimension?typography.eO["Body/Body 2 Long"]:typography.eO["Body/Body 1 Long"])),LinkComponentCssMixin=(0,styled_components_browser_esm.gV)(["cursor:",";display:flex;pointer-events:",";align-items:center;width:fit-content;text-decoration:none;position:relative;",";",";",";",""],(props=>props.disabled?"default":"pointer"),(props=>props.disabled?"none":"auto"),styleMixin,styleColorMixin,styleTextMixin,(props=>props.disabled?styleDisabledMixin:"")),LinkComponent=styled_components_browser_esm.cp.a.withConfig({displayName:"LinkComponent",componentId:"sc-1c25cc2-0"})(["",""],LinkComponentCssMixin)},"./src/components/Link/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{c:()=>Link});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_LinkComponent__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Link/LinkComponent.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Link=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({disabled=!1,appearance="primary",dimension="m",...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_LinkComponent__WEBPACK_IMPORTED_MODULE_2__.M,{$dimension:dimension,ref,tabIndex:disabled?-1:props.tabIndex,disabled,$appearance:appearance,...props})));Link.displayName="Link";try{Link.displayName="Link",Link.__docgenInfo={description:"",displayName:"Link",props:{children:{defaultValue:null,description:"Текст ссылки",name:"children",required:!1,type:{name:"ReactNode"}},appearance:{defaultValue:{value:"primary"},description:"Вид ссылки",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}},disabled:{defaultValue:{value:"false"},description:"Отключение ссылки",name:"disabled",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"m"},description:"Размер ссылки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"ElementType<any, keyof IntrinsicElements>"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Link/index.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/Link/index.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Af:()=>mediumGroupBorderRadius,KY:()=>smallGroupBorderRadius,LX:()=>ALL_BORDER_RADIUS_VALUES,au:()=>largeGroupBorderRadius});const ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);