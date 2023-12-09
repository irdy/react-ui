"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[9479],{"./src/components/form/CheckboxField/stories/CheckboxField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxFieldBase:()=>CheckboxFieldBase,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CheckboxField_stories});var react=__webpack_require__("./node_modules/react/index.js"),CheckboxField=__webpack_require__("./src/components/form/CheckboxField/index.tsx"),CheckboxDimension=__webpack_require__("./src/components/Checkbox/CheckboxDimension.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Hint=__webpack_require__("./src/components/Hint/index.tsx"),InfoSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=styled_components_browser_esm.ZP.div.withConfig({displayName:"CheckboxFieldBasetemplate__Container",componentId:"sc-48edip-0"})(["display:flex;flex-direction:column;> *{margin-top:16px;}"]),CheckboxFieldBase_template_InfoSolid=(0,styled_components_browser_esm.ZP)(InfoSolid.r).withConfig({displayName:"CheckboxFieldBasetemplate__InfoSolid",componentId:"sc-48edip-1"})(["margin-left:5px;width:",";& *[fill^='#']{fill:",";}[data-focus-within] & *[fill^='#']{fill:",";}&:hover *[fill^='#']{fill:",";}"],(props=>"m"===props.$dimension?"24px":"20px"),(p=>p.theme.color["Neutral/Neutral 50"]),(props=>props.theme.color["Primary/Primary 70"]),(props=>props.theme.color["Primary/Primary 70"])),CheckboxWithInformer=styled_components_browser_esm.ZP.div.withConfig({displayName:"CheckboxFieldBasetemplate__CheckboxWithInformer",componentId:"sc-48edip-2"})(["display:flex;align-items:flex-start;"]),CheckboxFieldBaseTemplate=({themeBorderKind,...props})=>{const[checked,setChecked]=react.useState(props.checked??!1),[visible1,setVisible1]=react.useState(!1),[visible2,setVisible2]=react.useState(!1);return react.useEffect((()=>{setChecked(Boolean(props.checked))}),[props.checked]),(0,jsx_runtime.jsx)(styled_components_browser_esm.f6,{theme:(0,createBorderRadiusSwapper.z)(themeBorderKind),children:(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(CheckboxField.j,{...props,checked,onChange:e=>{setChecked(e.target.checked)},"data-container-id":"checkboxFieldIdOne",id:"checkboxFieldId",name:"checkboxFieldName",children:"Управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.j,{dimension:"s","data-container-id":"checkboxFieldIdTwo",children:"Не управляемый маленький чекбокс"}),(0,jsx_runtime.jsxs)(CheckboxField.j,{dimension:"m","data-container-id":"checkboxFieldIdThree",children:["Двойная",(0,jsx_runtime.jsx)("br",{}),"строка"]}),(0,jsx_runtime.jsx)(CheckboxField.j,{disabled:!0,defaultChecked:!0,extraText:"Дополнительный текст. Additional text","data-container-id":"checkboxFieldIdFour",children:"Disabled не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.j,{disabled:!0,"data-container-id":"checkboxFieldIdFive",children:"Disabled не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.j,{readOnly:!0,defaultChecked:!0,"data-container-id":"checkboxFieldIdSix",children:"Readonly не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.j,{readOnly:!0,extraText:"Дополнительный текст. Additional text","data-container-id":"checkboxFieldIdSeven",children:"Readonly не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.j,{error:!0,extraText:(0,jsx_runtime.jsxs)("span",{children:["Вариация с ",(0,jsx_runtime.jsx)("i",{children:"дополнительно"})," декорированным ",(0,jsx_runtime.jsx)("b",{children:"текстом"})]}),"data-container-id":"checkboxFieldIdEight",children:"Error не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.j,{dimension:"s",indeterminate:!0,extraText:"Вариация с дополнительным текстом","data-container-id":"checkboxFieldIdNine",children:"Не управляемый маленький чекбокс indeterminate"}),(0,jsx_runtime.jsxs)(CheckboxWithInformer,{children:[(0,jsx_runtime.jsx)(CheckboxField.j,{dimension:"m",extraText:"Вариация с информером","data-container-id":"checkboxFieldIdTen",children:"Чекбокс с информером"}),(0,jsx_runtime.jsx)(Hint.k,{...props,visible:visible1,onVisibilityChange:visible=>setVisible1(visible),renderContent:()=>"At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.",children:(0,jsx_runtime.jsx)(CheckboxFieldBase_template_InfoSolid,{$dimension:"m","aria-hidden":!0})})]}),(0,jsx_runtime.jsxs)(CheckboxWithInformer,{children:[(0,jsx_runtime.jsx)(CheckboxField.j,{dimension:"s",extraText:"Вариация с информером","data-container-id":"checkboxFieldIdEleven",children:"Маленький чекбокс с информером"}),(0,jsx_runtime.jsx)(Hint.k,{...props,visible:visible2,onVisibilityChange:visible=>setVisible2(visible),renderContent:()=>"At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.",children:(0,jsx_runtime.jsx)(CheckboxFieldBase_template_InfoSolid,{$dimension:"s","aria-hidden":!0})})]})]})})};CheckboxFieldBaseTemplate.displayName="CheckboxFieldBaseTemplate";try{CheckboxFieldBaseTemplate.displayName="CheckboxFieldBaseTemplate",CheckboxFieldBaseTemplate.__docgenInfo={description:"",displayName:"CheckboxFieldBaseTemplate",props:{extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},indeterminate:{defaultValue:null,description:"Состояние частичного выбора",name:"indeterminate",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Состояние hover",name:"hovered",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/CheckboxField/stories/CheckboxFieldBase.template.tsx#CheckboxFieldBaseTemplate"]={docgenInfo:CheckboxFieldBaseTemplate.__docgenInfo,name:"CheckboxFieldBaseTemplate",path:"src/components/form/CheckboxField/stories/CheckboxFieldBase.template.tsx#CheckboxFieldBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}const CheckboxField_stories={title:"Admiral-2.1/Form Field/CheckboxField",decorators:void 0,component:CheckboxField.j,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21143"}]},argTypes:{dimension:{options:CheckboxDimension.F,control:{type:"radio"}},indeterminate:{control:{type:"boolean"}},checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},hovered:{control:{type:"boolean"}},extraText:{control:{type:"text"}},themeBorderKind:{options:borderRadius.g2,control:{type:"radio"}},children:{control:!1}}},CheckboxFieldBaseStory=props=>(0,jsx_runtime.jsx)(CheckboxFieldBaseTemplate,{...props});CheckboxFieldBaseStory.displayName="CheckboxFieldBaseStory";const CheckboxFieldBase={render:CheckboxFieldBaseStory,parameters:{docs:{source:{code:'import * as React from \'react\';\nimport styled, { ThemeProvider } from \'styled-components\';\n\nimport { CheckboxField, Hint } from \'@admiral-ds/react-ui\';\nimport type { CheckboxFieldProps, CheckboxDimension, BorderRadiusType } from \'@admiral-ds/react-ui\';\nimport { ReactComponent as InfoSolidSVG } from \'@admiral-ds/icons/build/service/InfoSolid.svg\';\nimport { createBorderRadiusSwapper } from \'../../../../../.storybook/createBorderRadiusSwapper\';\n\nconst Container = styled.div`\n  display: flex;\n  flex-direction: column;\n\n  > * {\n    margin-top: 16px;\n  }\n`;\n\nconst InfoSolid = styled(InfoSolidSVG)<{ $dimension: CheckboxDimension }>`\n  margin-left: 5px;\n  width: ${(props) => (props.$dimension === \'m\' ? \'24px\' : \'20px\')};\n\n  & *[fill^=\'#\'] {\n    fill: ${(p) => p.theme.color[\'Neutral/Neutral 50\']};\n  }\n  [data-focus-within] & *[fill^=\'#\'] {\n    fill: ${(props) => props.theme.color[\'Primary/Primary 70\']};\n  }\n  &:hover *[fill^=\'#\'] {\n    fill: ${(props) => props.theme.color[\'Primary/Primary 70\']};\n  }\n`;\n\nconst CheckboxWithInformer = styled.div`\n  display: flex;\n  align-items: flex-start;\n`;\n\nexport const CheckboxFieldBaseTemplate = ({\n  themeBorderKind,\n  ...props\n}: CheckboxFieldProps & { themeBorderKind?: BorderRadiusType }) => {\n  const [checked, setChecked] = React.useState<boolean>(props.checked ?? false);\n\n  const [visible1, setVisible1] = React.useState(false);\n  const [visible2, setVisible2] = React.useState(false);\n  const handleHintChange1 = (visible: boolean) => setVisible1(visible);\n  const handleHintChange2 = (visible: boolean) => setVisible2(visible);\n\n  React.useEffect(() => {\n    setChecked(Boolean(props.checked));\n  }, [props.checked]);\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>\n      <Container>\n        <CheckboxField\n          {...props}\n          checked={checked}\n          onChange={(e) => {\n            setChecked(e.target.checked);\n          }}\n          data-container-id="checkboxFieldIdOne"\n          id="checkboxFieldId"\n          name="checkboxFieldName"\n        >\n          Управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField dimension="s" data-container-id="checkboxFieldIdTwo">\n          Не управляемый маленький чекбокс\n        </CheckboxField>\n        <CheckboxField dimension="m" data-container-id="checkboxFieldIdThree">\n          Двойная\n          <br />\n          строка\n        </CheckboxField>\n        <CheckboxField\n          disabled\n          defaultChecked\n          extraText="Дополнительный текст. Additional text"\n          data-container-id="checkboxFieldIdFour"\n        >\n          Disabled не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField disabled data-container-id="checkboxFieldIdFive">\n          Disabled не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField readOnly defaultChecked data-container-id="checkboxFieldIdSix">\n          Readonly не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField\n          readOnly\n          extraText="Дополнительный текст. Additional text"\n          data-container-id="checkboxFieldIdSeven"\n        >\n          Readonly не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField\n          error\n          extraText={\n            <span>\n              Вариация с <i>дополнительно</i> декорированным <b>текстом</b>\n            </span>\n          }\n          data-container-id="checkboxFieldIdEight"\n        >\n          Error не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField\n          dimension="s"\n          indeterminate\n          extraText="Вариация с дополнительным текстом"\n          data-container-id="checkboxFieldIdNine"\n        >\n          Не управляемый маленький чекбокс indeterminate\n        </CheckboxField>\n        <CheckboxWithInformer>\n          <CheckboxField dimension="m" extraText="Вариация с информером" data-container-id="checkboxFieldIdTen">\n            Чекбокс с информером\n          </CheckboxField>\n          <Hint\n            {...props}\n            visible={visible1}\n            onVisibilityChange={handleHintChange1}\n            renderContent={() =>\n              \'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.\'\n            }\n          >\n            <InfoSolid $dimension="m" aria-hidden />\n          </Hint>\n        </CheckboxWithInformer>\n        <CheckboxWithInformer>\n          <CheckboxField dimension="s" extraText="Вариация с информером" data-container-id="checkboxFieldIdEleven">\n            Маленький чекбокс с информером\n          </CheckboxField>\n          <Hint\n            {...props}\n            visible={visible2}\n            onVisibilityChange={handleHintChange2}\n            renderContent={() =>\n              \'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.\'\n            }\n          >\n            <InfoSolid $dimension="s" aria-hidden />\n          </Hint>\n        </CheckboxWithInformer>\n      </Container>\n    </ThemeProvider>\n  );\n};\n'}}},name:"CheckboxField example"};CheckboxFieldBase.parameters={...CheckboxFieldBase.parameters,docs:{...CheckboxFieldBase.parameters?.docs,source:{originalSource:"{\n  render: CheckboxFieldBaseStory,\n  parameters: {\n    docs: {\n      source: {\n        code: CheckboxFieldBaseRaw\n      }\n    }\n  },\n  name: 'CheckboxField example'\n}",...CheckboxFieldBase.parameters?.docs?.source}}};const __namedExportsOrder=["CheckboxFieldBase"]},"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>SvgInfoSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0m9-4.75a.85.85 0 1 0 0 1.7.85.85 0 0 0 0-1.7M14.1 16a.75.75 0 0 1-.75.75h-.05a2.05 2.05 0 0 1-2.05-2.05v-3.75a.75.75 0 0 1 1.5 0v3.75c0 .304.246.55.55.55h.05a.75.75 0 0 1 .75.75",clipRule:"evenodd"})))};__webpack_require__.p},"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts");function createBorderRadiusSwapper(borderRadiusKind){return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.f.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.f.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.f)}}},"./src/components/Checkbox/CheckboxDimension.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>ALL_DIMENSIONS_VALUES});const ALL_DIMENSIONS_VALUES=["m","s"]},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$l:()=>passFormFieldDataAttributes,Od:()=>passFormFieldContainerDataAttributes,R_:()=>passMenuDataAttributes,cP:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,l$:()=>passDataAttributes,wP:()=>passDropdownDataAttributes});const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container",FORM_FIELD_DATA_ATTRIBUTE="data-field",DROPDOWN_DATA_ATTRIBUTE="data-dropdown-container",MENU_DATA_ATTRIBUTE="data-menu";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_ATTRIBUTE,!1)}function passDropdownDataAttributes(initialProps){const dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,DROPDOWN_DATA_ATTRIBUTE,!0),dropMenuProps}function passMenuDataAttributes(initialProps){const menuProps={};return passDataAttributes(initialProps,menuProps,MENU_DATA_ATTRIBUTE,!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach((key=>{"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])}))}},"./src/components/form/CheckboxField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>CheckboxField});var _path,react=__webpack_require__("./node_modules/react/index.js"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),uid=__webpack_require__("./src/components/common/uid.ts"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}__webpack_require__.p;var _rect;function Minus_extends(){return Minus_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},Minus_extends.apply(this,arguments)}__webpack_require__.p;var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");const CheckboxComponentWrapper=styled_components_browser_esm.ZP.label.withConfig({displayName:"style__CheckboxComponentWrapper",componentId:"sc-suyql9-0"})(["display:inline flex;align-items:flex-start;position:relative;box-sizing:content-box;padding:0;user-select:none;cursor:",";"," color:",";fieldset[data-dimension='s'] &&{",";}fieldset:disabled &&{color:",";cursor:default;}",";"],(p=>p.disabled||p.readOnly?"default":"pointer"),(p=>"s"===p.$dimension?typography.c["Body/Body 2 Short"]:typography.c["Body/Body 1 Short"]),(p=>p.disabled?p.theme.color["Neutral/Neutral 30"]:p.theme.color["Neutral/Neutral 90"]),typography.c["Body/Body 2 Short"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.readOnly?"pointer-events: none":"")),readOnlyCss=(0,styled_components_browser_esm.iv)(["pointer-events:none;cursor:default;&:not(:checked){& + div > span{border-color:",";background-color:",";}}&:checked{& + div > span{border-color:",";background-color:",";& *[fill^='#']{fill:",";}& > svg{visibility:visible;}}}"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Neutral/Neutral 00"])),indeterminateCss=(0,styled_components_browser_esm.iv)(["&:not(:checked) + div > span{border-color:",";background-color:",";}> *{display:block;}"],(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"])),hoveredCss=(0,styled_components_browser_esm.iv)(["&:not(:disabled){& + div > div{visibility:visible;}&:focus-visible + div{outline:none;}}"]),activeCss=(0,styled_components_browser_esm.iv)(["&:not(:disabled){"," & + div > div{background:",";}}"],hoveredCss,(p=>p.theme.color["Opacity/Press"])),Input=styled_components_browser_esm.ZP.input.withConfig({displayName:"style__Input",componentId:"sc-suyql9-1"})(["appearance:none;::-ms-check{display:none;}position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;padding:0;margin:0;opacity:0;box-sizing:border-box;&:disabled{cursor:default;&:not(:checked){& + div > span{border-color:",";background-color:",";}}&:checked{& + div > span{border-color:",";background-color:",";& *[fill^='#']{fill:",";}& > svg{visibility:visible;}}}}&:checked:not(:disabled){& + div > span{border-color:",";background-color:",";& *[fill^='#']{fill:",";}& > svg{visibility:visible;}}}"," &:not(:disabled){&:focus-visible + div{outline-offset:","px;outline:"," solid ","px;}&:hover{","}&:active{","}",";",";}"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Neutral/Neutral 00"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Special/Static White"]),(p=>!p.readOnly&&p.$hovered&&hoveredCss),2,(p=>p.theme.color["Primary/Primary 60 Main"]),2,(p=>!p.readOnly&&hoveredCss),(p=>!p.readOnly&&activeCss),(p=>p.$indeterminate&&indeterminateCss),(p=>p.readOnly&&readOnlyCss)),InputContainer=styled_components_browser_esm.ZP.div.withConfig({displayName:"style__InputContainer",componentId:"sc-suyql9-2"})(["box-sizing:border-box;padding:2px;pointer-events:none;position:relative;flex-shrink:0;"," fieldset[data-dimension='s'] &{width:","px;height:","px;}"],(p=>`\n    width: ${"s"===p.$dimension?20:24}px;\n    height: ${"s"===p.$dimension?20:24}px;\n  `),20,20),CheckboxComponentHover=styled_components_browser_esm.ZP.div.withConfig({displayName:"style__CheckboxComponentHover",componentId:"sc-suyql9-3"})(["visibility:hidden;pointer-events:none;position:absolute;background:",";left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;"," background-color:",";fieldset[data-dimension='s'] &&{width:32px;height:32px;}"],(p=>p.theme.color["Opacity/Hover"]),(p=>`\n        width: ${"s"===p.$dimension?32:36}px;\n        height: ${"s"===p.$dimension?32:36}px;\n      `),(p=>p.theme.color["Opacity/Hover"])),CheckboxComponentBackground=styled_components_browser_esm.ZP.span.withConfig({displayName:"style__CheckboxComponentBackground",componentId:"sc-suyql9-4"})(["box-sizing:border-box;pointer-events:none;display:inline-block;position:absolute;margin:0;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:",";"," outline:0;transition:background 0.1s ease-in;fieldset[data-dimension='s'] &&{width:16px;height:16px;}line-height:initial;background-color:",";border:1px solid ",";& *[fill^='#']{fill:",";}fieldset:disabled &&{& *[fill^='#']{fill:",";}}"],(p=>(0,borderRadius.pk)(p.theme.shape)),(p=>`\n    width: ${"s"===p.$dimension?16:20}px;\n    height: ${"s"===p.$dimension?16:20}px;\n  `),(p=>p.theme.color["Neutral/Neutral 00"]),(p=>p.$error?p.theme.color["Error/Error 60 Main"]:p.theme.color["Neutral/Neutral 50"]),(p=>p.disabled?p.theme.color["Neutral/Neutral 10"]:p.theme.color["Neutral/Neutral 00"]),(p=>p.theme.color["Neutral/Neutral 10"])),iconCss=(0,styled_components_browser_esm.iv)([""," position:absolute;margin:0;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;"],(p=>`\n    width: ${"s"===p.$dimension?16:20}px;\n    height: ${"s"===p.$dimension?16:20}px;\n  `)),Check=(0,styled_components_browser_esm.ZP)((function SvgSuccess(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},props),_path||(_path=react.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))})).withConfig({displayName:"style__Check",componentId:"sc-suyql9-5"})(["visibility:hidden;",""],iconCss),Indeterminate=(0,styled_components_browser_esm.ZP)((function SvgMinus(props){return react.createElement("svg",Minus_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},props),_rect||(_rect=react.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))})).withConfig({displayName:"style__Indeterminate",componentId:"sc-suyql9-6"})([""," & *[fill^='#']{fill:",";}"],iconCss,(p=>p.theme.color["Special/Static White"])),CheckboxComponentLabel=styled_components_browser_esm.ZP.div.withConfig({displayName:"style__CheckboxComponentLabel",componentId:"sc-suyql9-7"})(["display:flex;flex-direction:column;align-content:center;margin-top:2px;margin-bottom:2px;margin-left:",";"," color:",";fieldset:disabled &&{color:",";}fieldset[data-dimension='s'] &&{","}"],"8px",(p=>"s"===p.$dimension?typography.c["Body/Body 2 Short"]:typography.c["Body/Body 1 Short"]),(p=>p.disabled?p.theme.color["Neutral/Neutral 30"]:p.theme.color["Neutral/Neutral 90"]),(p=>p.theme.color["Neutral/Neutral 30"]),typography.c["Body/Body 2 Short"]),CheckboxComponentHint=styled_components_browser_esm.ZP.div.withConfig({displayName:"style__CheckboxComponentHint",componentId:"sc-suyql9-8"})(["margin-top:4px;"," color:",";fieldset[data-dimension='s'] &&{","}"],(p=>"s"===p.$dimension?typography.c["Caption/Caption 1"]:typography.c["Body/Body 2 Short"]),(p=>p.disabled?p.theme.color["Neutral/Neutral 30"]:p.theme.color["Neutral/Neutral 50"]),typography.c["Caption/Caption 1"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CheckboxField=(0,react.forwardRef)((({children,disabled=!1,readOnly=!1,hovered,dimension="m",error,indeterminate=!1,extraText,className,id=(0,uid.h)(),name,...props},ref)=>{const fieldContainerProps={"data-field-id":id,"data-field-name":name};(0,splitDataAttributes.Od)(props,fieldContainerProps);return(0,jsx_runtime.jsxs)(CheckboxComponentWrapper,{className,$dimension:dimension,disabled,readOnly,...fieldContainerProps,children:[(0,jsx_runtime.jsx)(Input,{...props,ref,disabled,readOnly,type:"checkbox",$indeterminate:indeterminate,onKeyDown:e=>{if(readOnly){keyboardKey.y.getCode(e)===keyboardKey.y[" "]&&e.preventDefault()}props.onKeyDown?.(e)},"data-hovered":hovered,$hovered:hovered,$dimension:dimension,id,name}),(0,jsx_runtime.jsxs)(InputContainer,{$dimension:dimension,children:[(0,jsx_runtime.jsx)(CheckboxComponentHover,{$dimension:dimension}),(0,jsx_runtime.jsx)(CheckboxComponentBackground,{$dimension:dimension,$error:error,disabled:disabled||readOnly,children:indeterminate?(0,jsx_runtime.jsx)(Indeterminate,{"aria-hidden":"true",focusable:"false",$dimension:dimension}):(0,jsx_runtime.jsx)(Check,{"aria-hidden":"true",focusable:"false",$dimension:dimension})})]}),children&&(0,jsx_runtime.jsxs)(CheckboxComponentLabel,{$dimension:dimension,disabled,children:[children,extraText&&(0,jsx_runtime.jsx)(CheckboxComponentHint,{disabled,$dimension:dimension,children:extraText})]})]})}));CheckboxField.displayName="CheckboxField";try{CheckboxField.displayName="CheckboxField",CheckboxField.__docgenInfo={description:"",displayName:"CheckboxField",props:{extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},indeterminate:{defaultValue:{value:"false"},description:"Состояние частичного выбора",name:"indeterminate",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Состояние hover",name:"hovered",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/CheckboxField/index.tsx#CheckboxField"]={docgenInfo:CheckboxField.__docgenInfo,name:"CheckboxField",path:"src/components/form/CheckboxField/index.tsx#CheckboxField"})}catch(__react_docgen_typescript_loader_error){}}}]);