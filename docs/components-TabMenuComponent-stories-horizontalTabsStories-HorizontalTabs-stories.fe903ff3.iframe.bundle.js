"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[390],{"./src/components/TabMenuComponent/stories/horizontalTabsStories/HorizontalTabs.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HorizontalTabsExample:()=>HorizontalTabsExample,__namedExportsOrder:()=>__namedExportsOrder,default:()=>HorizontalTabs_stories});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),src=__webpack_require__("./src/index.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),NotificationItem=__webpack_require__("./src/components/NotificationItem/index.tsx"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts"),MinusCircleOutline=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/MinusCircleOutline.svg"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CustomHorizontalTab=(0,react.forwardRef)((({dimension="l",disabled,selected,onSelectTab,tabId,text,icon,badge,...props},ref)=>(0,jsx_runtime.jsxs)(src.HorizontalTab,{...props,ref,tabId,dimension,disabled,selected,onSelectTab,children:[icon&&(0,jsx_runtime.jsx)(src.TabIcon,{$dimension:dimension,$disabled:disabled,children:icon}),(0,jsx_runtime.jsx)(src.TabText,{children:text}),badge&&(0,jsx_runtime.jsx)(src.TabBadge,{disabled,selected,children:badge})]}))),tabs=[{text:"Text1",tabId:"1",badge:1},{text:"Text22",tabId:"2",icon:(0,jsx_runtime.jsx)(MinusCircleOutline.h,{})},{text:"Text333",tabId:"3"},{text:"Text4444",tabId:"4",badge:4},{text:"Text55555",tabId:"5",disabled:!0,icon:(0,jsx_runtime.jsx)(MinusCircleOutline.h,{})},{text:"Text66666",tabId:"6"},{text:"Text7777 is very very very very long",tabId:"7"},{text:"Text888",tabId:"8",icon:(0,jsx_runtime.jsx)(MinusCircleOutline.h,{})},{text:"Text99",tabId:"9"}],Separator=styled_components_browser_esm.Ay.div.withConfig({displayName:"HorizontalTabsTemplate__Separator",componentId:"sc-kzec5b-0"})(["height:","px;"],(p=>p.height)),Wrapper=styled_components_browser_esm.Ay.div.withConfig({displayName:"HorizontalTabsTemplate__Wrapper",componentId:"sc-kzec5b-1"})(["display:flex;flex-direction:column;gap:10px;"]),HorizontalTabsTemplate=({dimension="l",showUnderline=!0,defaultSelectedTabId="3",themeBorderKind,CSSCustomProps,...props})=>{const tabsMap=(0,react.useMemo)((()=>tabs.map((tab=>tab.tabId))),[tabs]),[selectedTab,setSelectedTab]=(0,react.useState)(defaultSelectedTabId);return(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(Wrapper,{children:[(0,jsx_runtime.jsxs)(NotificationItem.rn,{displayStatusIcon:!0,children:[(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Горизонтальное TabMenu"}),(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:"Компонент настроен таким образом, что если закладки не помещаются в ширину экрана, то они “выходят” за область экрана и их можно прокручивать свайпом, в остальном, поведение такое же, как и у настольной версии. Рекомендуется использовать для мобильной версии."})]}),(0,jsx_runtime.jsx)(Separator,{height:40}),(0,jsx_runtime.jsx)(src.HorizontalTabs,{...props,showUnderline,selectedTabId:selectedTab,defaultSelectedTabId,onSelectTab:tabId=>setSelectedTab(tabId),tabsId:tabsMap,renderTab:(tabId,selected,onSelectTab)=>{const currentTab=tabs.find((tab=>tab.tabId===tabId)),text=currentTab?.text||"",disabled=!!currentTab?.disabled,badge=currentTab?.badge,icon=currentTab?.icon;return(0,jsx_runtime.jsx)(CustomHorizontalTab,{dimension,tabId,text,badge,icon,selected,disabled,onSelectTab},tabId)},tabIsDisabled:tabId=>{const currentTab=tabs.find((tab=>tab.tabId===tabId));return!!currentTab?.disabled}})]})})};HorizontalTabsTemplate.displayName="HorizontalTabsTemplate";try{HorizontalTabsTemplate.displayName="HorizontalTabsTemplate",HorizontalTabsTemplate.__docgenInfo={description:"",displayName:"HorizontalTabsTemplate",props:{dimension:{defaultValue:{value:"l"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"m"'},{value:'"l"'}]}},showUnderline:{defaultValue:{value:"true"},description:"Показывать серую полосу снизу",name:"showUnderline",required:!1,type:{name:"boolean"}},selectedTabId:{defaultValue:null,description:"ID выбранной вкладки",name:"selectedTabId",required:!1,type:{name:"string"}},defaultSelectedTabId:{defaultValue:{value:"3"},description:"ID выбранной по умолчанию вкладки",name:"defaultSelectedTabId",required:!1,type:{name:"string"}},onSelectTab:{defaultValue:null,description:"Коллбэк на изменение выбранной вкладки",name:"onSelectTab",required:!1,type:{name:"((tabId: string) => void)"}},tabsId:{defaultValue:null,description:"Массив из уникальных ID вкладок",name:"tabsId",required:!0,type:{name:"string[]"}},renderTab:{defaultValue:null,description:"Рендер-функция для отрисовки вкладки",name:"renderTab",required:!0,type:{name:"(tabId: string, selected: boolean, onSelectTab?: ((tabId: string) => void) | undefined) => ReactNode"}},tabIsDisabled:{defaultValue:null,description:"Коллбэк для определения, является ли вкладка disabled",name:"tabIsDisabled",required:!0,type:{name:"(tabId: string) => boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TabMenuComponent/stories/horizontalTabsStories/HorizontalTabsTemplate.tsx#HorizontalTabsTemplate"]={docgenInfo:HorizontalTabsTemplate.__docgenInfo,name:"HorizontalTabsTemplate",path:"src/components/TabMenuComponent/stories/horizontalTabsStories/HorizontalTabsTemplate.tsx#HorizontalTabsTemplate"})}catch(__react_docgen_typescript_loader_error){}const HorizontalTabs_stories={title:"Admiral-2.1/TabMenuComponent/HorizontalTabs",decorators:void 0,component:src.HorizontalTabs,parameters:{docs:{source:{code:null}}},argTypes:{dimension:{options:["l","m"],control:{type:"radio"}},showUnderline:{control:{type:"boolean"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},defaultSelectedTabId:{control:!1},renderTab:{control:!1},tabIsDisabled:{control:!1},tabsId:{control:!1},onSelectTab:{control:!1},selectedTabId:{control:!1}}},HorizontalTabsStory=props=>{const[{CSSCustomProps}]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)();return(0,jsx_runtime.jsx)(HorizontalTabsTemplate,{...props,CSSCustomProps})};HorizontalTabsStory.displayName="HorizontalTabsStory";const HorizontalTabsExample={render:HorizontalTabsStory,parameters:{docs:{source:{code:"import { forwardRef, useMemo, useState } from 'react';\nimport type { ReactNode } from 'react';\nimport styled, { ThemeProvider } from 'styled-components';\n\nimport type { BorderRadiusType, HorizontalTabProps, HorizontalTabsProps } from '@admiral-ds/react-ui';\nimport {\n  HorizontalTabs,\n  HorizontalTab,\n  TabIcon,\n  TabBadge,\n  TabText,\n  NotificationItem,\n  NotificationItemContent,\n  NotificationItemTitle,\n} from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\nimport { ReactComponent as MinusCircleOutline } from '@admiral-ds/icons/build/service/MinusCircleOutline.svg';\n\ninterface TabContentProps extends HorizontalTabProps {\n  text: string;\n  badge?: number;\n  disabled?: boolean;\n  icon?: ReactNode;\n}\n\ninterface CustomHorizontalTabProps extends TabContentProps {}\nconst CustomHorizontalTab = forwardRef<HTMLButtonElement, CustomHorizontalTabProps>(\n  (\n    { dimension = 'l', disabled, selected, onSelectTab, tabId, text, icon, badge, ...props }: CustomHorizontalTabProps,\n    ref,\n  ) => {\n    return (\n      <HorizontalTab\n        {...props}\n        ref={ref}\n        tabId={tabId}\n        dimension={dimension}\n        disabled={disabled}\n        selected={selected}\n        onSelectTab={onSelectTab}\n      >\n        {icon && (\n          <TabIcon $dimension={dimension} $disabled={disabled}>\n            {icon}\n          </TabIcon>\n        )}\n        <TabText>{text}</TabText>\n        {badge && (\n          <TabBadge disabled={disabled} selected={selected}>\n            {badge}\n          </TabBadge>\n        )}\n      </HorizontalTab>\n    );\n  },\n);\n\nconst tabs = [\n  { text: 'Text1', tabId: '1', badge: 1 },\n  { text: 'Text22', tabId: '2', icon: <MinusCircleOutline /> },\n  { text: 'Text333', tabId: '3' },\n  { text: 'Text4444', tabId: '4', badge: 4 },\n  { text: 'Text55555', tabId: '5', disabled: true, icon: <MinusCircleOutline /> },\n  { text: 'Text66666', tabId: '6' },\n  { text: 'Text7777 is very very very very long', tabId: '7' },\n  { text: 'Text888', tabId: '8', icon: <MinusCircleOutline /> },\n  { text: 'Text99', tabId: '9' },\n];\n\nconst Separator = styled.div<{ height: number }>`\n  height: ${(p) => p.height}px;\n`;\nconst Wrapper = styled.div`\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n`;\n\nexport const HorizontalTabsTemplate = ({\n  dimension = 'l',\n  showUnderline = true,\n  defaultSelectedTabId = '3',\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: HorizontalTabsProps & {\n  themeBorderKind?: BorderRadiusType;\n  CSSCustomProps?: boolean;\n}) => {\n  const tabsMap = useMemo(() => {\n    return tabs.map((tab) => tab.tabId);\n  }, [tabs]);\n\n  const [selectedTab, setSelectedTab] = useState<string | undefined>(defaultSelectedTabId);\n  const handleSelectTab = (tabId: string) => setSelectedTab(tabId);\n\n  const tabIsDisabled = (tabId: string) => {\n    const currentTab = tabs.find((tab) => tab.tabId === tabId);\n    return !!currentTab?.disabled;\n  };\n\n  const renderTab = (tabId: string, selected?: boolean, onSelectTab?: (tabId: string) => void) => {\n    const currentTab = tabs.find((tab) => tab.tabId === tabId);\n    const text = currentTab?.text || '';\n    const disabled = !!currentTab?.disabled;\n    const badge = currentTab?.badge;\n    const icon = currentTab?.icon;\n    return (\n      <CustomHorizontalTab\n        dimension={dimension}\n        tabId={tabId}\n        text={text}\n        badge={badge}\n        icon={icon}\n        key={tabId}\n        selected={selected}\n        disabled={disabled}\n        onSelectTab={onSelectTab}\n      />\n    );\n  };\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <Wrapper>\n        <NotificationItem displayStatusIcon>\n          <NotificationItemTitle>Горизонтальное TabMenu</NotificationItemTitle>\n          <NotificationItemContent>\n            Компонент настроен таким образом, что если закладки не помещаются в ширину экрана, то они “выходят” за\n            область экрана и их можно прокручивать свайпом, в остальном, поведение такое же, как и у настольной версии.\n            Рекомендуется использовать для мобильной версии.\n          </NotificationItemContent>\n        </NotificationItem>\n        <Separator height={40} />\n        <HorizontalTabs\n          {...props}\n          showUnderline={showUnderline}\n          selectedTabId={selectedTab}\n          defaultSelectedTabId={defaultSelectedTabId}\n          onSelectTab={handleSelectTab}\n          tabsId={tabsMap}\n          renderTab={renderTab}\n          tabIsDisabled={tabIsDisabled}\n        />\n      </Wrapper>\n    </ThemeProvider>\n  );\n};\n"}}},name:"HorizontalTabs."};HorizontalTabsExample.parameters={...HorizontalTabsExample.parameters,docs:{...HorizontalTabsExample.parameters?.docs,source:{originalSource:"{\n  render: HorizontalTabsStory,\n  parameters: {\n    docs: {\n      source: {\n        code: HorizontalTabsRaw\n      }\n    }\n  },\n  name: 'HorizontalTabs.'\n}",...HorizontalTabsExample.parameters?.docs?.source}}};const __namedExportsOrder=["HorizontalTabsExample"]},"./node_modules/@admiral-ds/icons/build/service/CheckSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCheckSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgCheckSolid=function SvgCheckSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m7.79 3.28c.27.28.73.27 1-.02l4.42-4.8c.24-.27.22-.68-.03-.92a.66.66 0 0 0-.93.04l-3.98 4.34-2.4-2.4a.67.67 0 0 0-.93 0c-.25.25-.25.67 0 .92z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/CloseSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgCloseSolid=function SvgCloseSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m13-3.92c.25.25.25.66 0 .92l-3.09 3 3 3.08c.26.25.26.66 0 .92-.25.25-.66.25-.91 0l-3-3.09L9 16c-.26.25-.67.25-.92 0a.64.64 0 0 1 0-.92l3-3.08-3-3a.64.64 0 0 1 0-.92.64.64 0 0 1 .92 0l3 3 3.08-3a.64.64 0 0 1 .92 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/ErrorSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgErrorSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgErrorSolid=function SvgErrorSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M12 3c-4.98 0-9 4.02-9 9 0 4.97 4.02 9 9 9a9 9 0 0 0 9-9c0-4.98-4.03-9-9-9m0 10.69c.35 0 .64-.29.64-.65V7.89c0-.35-.29-.65-.64-.65-.36 0-.65.3-.65.65v5.15c0 .36.29.65.65.65m.85 2.21a.856.856 0 0 1-1.71 0 .856.856 0 0 1 1.71 0"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgInfoSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m9-4.75c-.47 0-.86.38-.86.84 0 .47.39.86.86.86.46 0 .85-.39.85-.86 0-.46-.39-.84-.85-.84M14.1 16c0 .41-.34.75-.75.75h-.06c-1.13 0-2.04-.92-2.04-2.05v-3.75c0-.42.33-.75.75-.75.41 0 .75.33.75.75v3.75c0 .3.24.55.54.55h.06c.41 0 .75.33.75.75"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/MinusCircleOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgMinusCircleOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgMinusCircleOutline=function SvgMinusCircleOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m9-7.7a7.7 7.7 0 1 0 0 15.4c4.25 0 7.7-3.45 7.7-7.7 0-4.26-3.45-7.7-7.7-7.7M7 12c0-.36.29-.65.64-.65h8.71c.35 0 .65.29.65.65 0 .35-.3.65-.65.65H7.64c-.35 0-.64-.3-.64-.65"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/PlusOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgPlusOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgPlusOutline=function SvgPlusOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M12.64 4.99c0-.35-.29-.65-.64-.65-.36 0-.65.3-.65.65v6.36H5c-.36 0-.65.29-.65.65 0 .35.29.65.65.65h6.35V19c0 .35.29.65.65.65.35 0 .64-.3.64-.65v-6.35H19c.35 0 .64-.3.64-.65 0-.36-.29-.65-.64-.65h-6.36z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/service/SmallCloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgSmallCloseOutline=function SvgSmallCloseOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M15.8 9.11c.25-.25.26-.66.01-.92a.646.646 0 0 0-.91-.01L12 11.03 9.09 8.18a.646.646 0 0 0-.91.01c-.25.26-.24.67.01.92l2.88 2.83-2.88 2.82c-.25.25-.26.66-.01.92.24.26.65.27.91.02L12 12.84l2.9 2.86c.26.25.67.24.91-.02.25-.26.24-.67-.01-.92l-2.88-2.82z"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ArrowLeftOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgArrowLeftOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgArrowLeftOutline=function SvgArrowLeftOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M11.54 18.14c-.13.14-.3.21-.48.21-.16 0-.31-.05-.44-.17l-6.04-5.49a.7.7 0 0 1 0-1.04l6.04-5.49c.27-.24.68-.22.92.04.24.27.23.68-.04.92l-4.84 4.4h10.9c.36 0 .65.29.65.65s-.29.65-.65.65H6.66l4.84 4.4c.26.24.28.65.04.92"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgArrowRightOutline=function SvgArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M11.02 18.14c.12.14.3.21.48.21.16 0 .31-.05.43-.17l6.05-5.49c.31-.28.31-.76 0-1.04l-6.05-5.49a.646.646 0 0 0-.91.04.65.65 0 0 0 .04.92l4.83 4.4H5c-.36 0-.65.29-.65.65s.29.65.65.65h10.89l-4.83 4.4c-.26.24-.28.65-.04.92"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/ChevronDownOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgChevronDownOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgChevronDownOutline=function SvgChevronDownOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M5.22 8.56c0-.18.07-.35.21-.48.27-.24.68-.22.92.04l5.74 6.36 5.55-6.4a.65.65 0 0 1 .92-.04c.26.24.28.65.04.92l-5.99 6.89c-.28.31-.76.31-1.04 0L5.39 9a.63.63 0 0 1-.17-.44"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/MoreHorizontalOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgMoreHorizontalOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgMoreHorizontalOutline=function SvgMoreHorizontalOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M5 10a2 2 0 1 1-2 2c0-1.11.89-2 2-2m7 0a2 2 0 1 1-2 2c0-1.11.89-2 2-2m7 0a2 2 0 1 1-2 2c0-1.11.89-2 2-2"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/MoreVerticalOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgMoreVerticalOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgMoreVerticalOutline=function SvgMoreVerticalOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M10 19c0-1.11.89-2 2-2a2 2 0 1 1-2 2m0-7c0-1.11.89-2 2-2a2 2 0 1 1-2 2m0-7c0-1.11.89-2 2-2a2 2 0 1 1-2 2"})))};__webpack_require__.p},"./node_modules/@admiral-ds/icons/build/system/SmallArrowRightOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgSmallArrowRightOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgSmallArrowRightOutline=function SvgSmallArrowRightOutline(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M9.99 16.21c-.18 0-.35-.07-.48-.21a.66.66 0 0 1 .04-.92l3.49-3.15-3.48-3.02a.65.65 0 0 1-.04-.92c.24-.26.65-.28.92-.04l3.97 3.46c.31.28.31.76 0 1.04l-3.98 3.59c-.13.12-.28.17-.44.17"})))};__webpack_require__.p},"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts");const getNumFromStr=str=>str.replace(/^\D+/g,"");function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){const cssPropValueSmall=`var(--admiral-border-kind-Small_${getNumFromStr(borderRadiusKind)})`,cssPropValueMedium=`var(--admiral-border-kind-Medium_${getNumFromStr(borderRadiusKind)})`,cssPropValueLarge=`var(--admiral-border-kind-Large_${getNumFromStr(borderRadiusKind)})`;document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/Spinner/SpinnerIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{N:()=>SpinnerIcon});var _path,_path2,_path3,_path4,_path5,styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.p;const spin=(0,styled_components_browser_esm.i7)(["0%{transform:rotate(0deg);}100%{transform:rotate(360deg);}"]),SpinnerIcon=(0,styled_components_browser_esm.Ay)((function SvgSubtract(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none"},props),_path||(_path=react.createElement("path",{d:"M58.607 49.778a32 32 0 0 0 5.252-14.782C64.016 33.346 62.658 32 61 32s-2.982 1.349-3.17 2.995C56.343 47.944 45.346 58 32 58 17.64 58 6 46.36 6 32 6 18.654 16.056 7.656 29.005 6.17 30.651 5.983 32 4.658 32 3S30.654-.015 29.004.14a32 32 0 1 0 29.603 49.638",clipRule:"evenodd","data-dimension":"xl"})),_path2||(_path2=react.createElement("path",{d:"M43.955 37.334a24 24 0 0 0 3.915-10.838C48.014 25.122 46.88 24 45.5 24s-2.483 1.125-2.662 2.494C41.616 35.81 33.648 43 24 43 13.507 43 5 34.493 5 24c0-9.648 7.191-17.616 16.506-18.838C22.875 4.982 24 3.881 24 2.5c0-1.38-1.122-2.513-2.496-2.37a24 24 0 1 0 22.451 37.204",clipRule:"evenodd","data-dimension":"l"})),_path3||(_path3=react.createElement("path",{d:"M21.978 18.667a12 12 0 0 0 1.928-5.17C24.01 12.673 23.328 12 22.5 12s-1.487.677-1.623 1.494C20.165 17.754 16.462 21 12 21a9 9 0 0 1-1.494-17.877C11.323 2.987 12 2.328 12 1.5S11.326-.01 10.504.094a12 12 0 1 0 11.474 18.573",clipRule:"evenodd","data-dimension":"m"})),_path4||(_path4=react.createElement("path",{d:"M18.378 15.54a10 10 0 0 0 1.613-4.324c.087-.687-.483-1.25-1.176-1.25-.692 0-1.243.565-1.357 1.248a7.526 7.526 0 1 1-8.672-8.672c.683-.114 1.249-.665 1.249-1.357 0-.693-.564-1.263-1.251-1.176a10.035 10.035 0 1 0 9.594 15.531",clipRule:"evenodd","data-dimension":"ms"})),_path5||(_path5=react.createElement("path",{d:"M14.652 12.445a8 8 0 0 0 1.286-3.448C16.006 8.45 15.552 8 15 8s-.991.451-1.082.996A6.002 6.002 0 0 1 2 8a6 6 0 0 1 5.004-5.918C7.55 1.992 8 1.552 8 1S7.55-.006 7.003.062a8 8 0 1 0 7.649 12.383",clipRule:"evenodd","data-dimension":"s"})))})).withConfig({displayName:"SpinnerIcon",componentId:"sc-t3762f-0"})(["animation:"," 1s linear infinite;path{fill:",";}width:100%;height:100%;@container (min-width:64px){:not(path[data-dimension='xl']){display:none;}}@container (max-width:48px) and (min-width:25px){:not(path[data-dimension='l']){display:none;}}@container (max-width:24px) and (min-width:21px){:not(path[data-dimension='m']){display:none;}}@container (max-width:20px) and (min-width:17px){:not(path[data-dimension='ms']){display:none;}}@container (max-width:16px){:not(path[data-dimension='s']){display:none;}}"],spin,(({$inverse,theme})=>$inverse?`var(--admiral-color-Special_StaticWhite, ${theme.color["Special/Static White"]})`:`var(--admiral-color-Primary_Primary60Main, ${theme.color["Primary/Primary 60 Main"]})`))},"./src/components/skeleton/animation.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>skeletonAnimationMixin});var styled_components__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const skeletonAnimation=props=>(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.i7)(["0%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}50%{background-color:var(--admiral-color-Neutral_Neutral20,",");border-color:var(--admiral-color-Neutral_Neutral20,",");}100%{background-color:var(--admiral-color-Neutral_Neutral10,",");border-color:var(--admiral-color-Neutral_Neutral10,",");}"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 20"],props.theme.color["Neutral/Neutral 10"],props.theme.color["Neutral/Neutral 10"]),skeletonAnimationMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_0__.AH)(["animation:"," 2s ease infinite;"],(props=>skeletonAnimation(props)));try{skeletonAnimation.displayName="skeletonAnimation",skeletonAnimation.__docgenInfo={description:"",displayName:"skeletonAnimation",props:{as:{defaultValue:null,description:'Dynamically adjust the rendered component or HTML tag, e.g.\n```\nconst StyledButton = styled.button``\n\n<StyledButton as="a" href="/foo">\n  I\'m an anchor now\n</StyledButton>\n```',name:"as",required:!1,type:{name:"KnownTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"KnownTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/skeleton/animation.tsx#skeletonAnimation"]={docgenInfo:skeletonAnimation.__docgenInfo,name:"skeletonAnimation",path:"src/components/skeleton/animation.tsx#skeletonAnimation"})}catch(__react_docgen_typescript_loader_error){}}}]);