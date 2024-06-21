"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[9426],{"./src/components/form/CheckboxField/stories/CheckboxField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CheckboxFieldBase:()=>CheckboxFieldBase,__namedExportsOrder:()=>__namedExportsOrder,default:()=>CheckboxField_stories});var react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),CheckboxField=__webpack_require__("./src/components/form/CheckboxField/index.tsx"),CheckboxDimension=__webpack_require__("./src/components/Checkbox/CheckboxDimension.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),Hint=__webpack_require__("./src/components/Hint/index.tsx"),InfoSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Container=styled_components_browser_esm.Ay.div.withConfig({displayName:"CheckboxFieldBasetemplate__Container",componentId:"sc-48edip-0"})(["display:flex;flex-direction:column;> *{margin-top:16px;}"]),CheckboxFieldBase_template_InfoSolid=(0,styled_components_browser_esm.Ay)(InfoSolid.h).withConfig({displayName:"CheckboxFieldBasetemplate__InfoSolid",componentId:"sc-48edip-1"})(["margin-left:5px;width:",";& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral50,",");}[data-focus-within] & *[fill^='#']{fill:var(--admiral-color-Primary_Primary70,",");}&:hover *[fill^='#']{fill:var(--admiral-color-Primary_Primary70,",");}"],(props=>"m"===props.$dimension?"24px":"20px"),(p=>p.theme.color["Neutral/Neutral 50"]),(p=>p.theme.color["Primary/Primary 70"]),(p=>p.theme.color["Primary/Primary 70"])),CheckboxWithInformer=styled_components_browser_esm.Ay.div.withConfig({displayName:"CheckboxFieldBasetemplate__CheckboxWithInformer",componentId:"sc-48edip-2"})(["display:flex;align-items:flex-start;"]),CheckboxFieldBaseTemplate=({themeBorderKind,CSSCustomProps,...props})=>{const[checked,setChecked]=react.useState(props.checked??!1),[visible1,setVisible1]=react.useState(!1),[visible2,setVisible2]=react.useState(!1);return react.useEffect((()=>{setChecked(Boolean(props.checked))}),[props.checked]),(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsxs)(Container,{children:[(0,jsx_runtime.jsx)(CheckboxField.Y,{...props,checked,onChange:e=>{setChecked(e.target.checked)},"data-container-id":"checkboxFieldIdOne",id:"checkboxFieldId",name:"checkboxFieldName",children:"Управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{dimension:"s","data-container-id":"checkboxFieldIdTwo",children:"Не управляемый маленький чекбокс"}),(0,jsx_runtime.jsxs)(CheckboxField.Y,{dimension:"m","data-container-id":"checkboxFieldIdThree",children:["Двойная",(0,jsx_runtime.jsx)("br",{}),"строка"]}),(0,jsx_runtime.jsx)(CheckboxField.Y,{disabled:!0,defaultChecked:!0,extraText:"Дополнительный текст. Additional text","data-container-id":"checkboxFieldIdFour",children:"Disabled не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{disabled:!0,"data-container-id":"checkboxFieldIdFive",children:"Disabled не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{readOnly:!0,defaultChecked:!0,"data-container-id":"checkboxFieldIdSix",children:"Readonly не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{readOnly:!0,extraText:"Дополнительный текст. Additional text","data-container-id":"checkboxFieldIdSeven",children:"Readonly не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{error:!0,extraText:(0,jsx_runtime.jsxs)("span",{children:["Вариация с ",(0,jsx_runtime.jsx)("i",{children:"дополнительно"})," декорированным ",(0,jsx_runtime.jsx)("b",{children:"текстом"})]}),"data-container-id":"checkboxFieldIdEight",children:"Error не управляемый чекбокс"}),(0,jsx_runtime.jsx)(CheckboxField.Y,{dimension:"s",indeterminate:!0,extraText:"Вариация с дополнительным текстом","data-container-id":"checkboxFieldIdNine",children:"Не управляемый маленький чекбокс indeterminate"}),(0,jsx_runtime.jsxs)(CheckboxWithInformer,{children:[(0,jsx_runtime.jsx)(CheckboxField.Y,{dimension:"m",extraText:"Вариация с информером","data-container-id":"checkboxFieldIdTen",children:"Чекбокс с информером"}),(0,jsx_runtime.jsx)(Hint.C,{...props,visible:visible1,onVisibilityChange:visible=>setVisible1(visible),renderContent:()=>"At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.",children:(0,jsx_runtime.jsx)(CheckboxFieldBase_template_InfoSolid,{$dimension:"m","aria-hidden":!0})})]}),(0,jsx_runtime.jsxs)(CheckboxWithInformer,{children:[(0,jsx_runtime.jsx)(CheckboxField.Y,{dimension:"s",extraText:"Вариация с информером","data-container-id":"checkboxFieldIdEleven",children:"Маленький чекбокс с информером"}),(0,jsx_runtime.jsx)(Hint.C,{...props,visible:visible2,onVisibilityChange:visible=>setVisible2(visible),renderContent:()=>"At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.",children:(0,jsx_runtime.jsx)(CheckboxFieldBase_template_InfoSolid,{$dimension:"s","aria-hidden":!0})})]})]})})};CheckboxFieldBaseTemplate.displayName="CheckboxFieldBaseTemplate";try{CheckboxFieldBaseTemplate.displayName="CheckboxFieldBaseTemplate",CheckboxFieldBaseTemplate.__docgenInfo={description:"",displayName:"CheckboxFieldBaseTemplate",props:{extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},indeterminate:{defaultValue:null,description:"Состояние частичного выбора",name:"indeterminate",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Состояние hover",name:"hovered",required:!1,type:{name:"boolean"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/CheckboxField/stories/CheckboxFieldBase.template.tsx#CheckboxFieldBaseTemplate"]={docgenInfo:CheckboxFieldBaseTemplate.__docgenInfo,name:"CheckboxFieldBaseTemplate",path:"src/components/form/CheckboxField/stories/CheckboxFieldBase.template.tsx#CheckboxFieldBaseTemplate"})}catch(__react_docgen_typescript_loader_error){}const CheckboxField_stories={title:"Admiral-2.1/Form Field/CheckboxField",decorators:void 0,component:CheckboxField.Y,parameters:{docs:{source:{code:null}},design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21143"}]},argTypes:{dimension:{options:CheckboxDimension.n,control:{type:"radio"}},indeterminate:{control:{type:"boolean"}},checked:{control:{type:"boolean"}},disabled:{control:{type:"boolean"}},readOnly:{control:{type:"boolean"}},error:{control:{type:"boolean"}},hovered:{control:{type:"boolean"}},extraText:{control:{type:"text"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},children:{control:!1}}},CheckboxFieldBaseStory=props=>{const[{CSSCustomProps}]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)();return(0,jsx_runtime.jsx)(CheckboxFieldBaseTemplate,{...props,CSSCustomProps})};CheckboxFieldBaseStory.displayName="CheckboxFieldBaseStory";const CheckboxFieldBase={render:CheckboxFieldBaseStory,parameters:{docs:{source:{code:'import * as React from \'react\';\nimport styled, { ThemeProvider } from \'styled-components\';\n\nimport { CheckboxField, Hint } from \'@admiral-ds/react-ui\';\nimport type { CheckboxFieldProps, CheckboxDimension, BorderRadiusType } from \'@admiral-ds/react-ui\';\nimport { ReactComponent as InfoSolidSVG } from \'@admiral-ds/icons/build/service/InfoSolid.svg\';\nimport { createBorderRadiusSwapper } from \'../../../../../.storybook/createBorderRadiusSwapper\';\n\nconst Container = styled.div`\n  display: flex;\n  flex-direction: column;\n\n  > * {\n    margin-top: 16px;\n  }\n`;\n\nconst InfoSolid = styled(InfoSolidSVG)<{ $dimension: CheckboxDimension }>`\n  margin-left: 5px;\n  width: ${(props) => (props.$dimension === \'m\' ? \'24px\' : \'20px\')};\n\n  & *[fill^=\'#\'] {\n    fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color[\'Neutral/Neutral 50\']});\n  }\n  [data-focus-within] & *[fill^=\'#\'] {\n    fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color[\'Primary/Primary 70\']});\n  }\n  &:hover *[fill^=\'#\'] {\n    fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color[\'Primary/Primary 70\']});\n  }\n`;\n\nconst CheckboxWithInformer = styled.div`\n  display: flex;\n  align-items: flex-start;\n`;\n\nexport const CheckboxFieldBaseTemplate = ({\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: CheckboxFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  const [checked, setChecked] = React.useState<boolean>(props.checked ?? false);\n\n  const [visible1, setVisible1] = React.useState(false);\n  const [visible2, setVisible2] = React.useState(false);\n  const handleHintChange1 = (visible: boolean) => setVisible1(visible);\n  const handleHintChange2 = (visible: boolean) => setVisible2(visible);\n\n  React.useEffect(() => {\n    setChecked(Boolean(props.checked));\n  }, [props.checked]);\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <Container>\n        <CheckboxField\n          {...props}\n          checked={checked}\n          onChange={(e) => {\n            setChecked(e.target.checked);\n          }}\n          data-container-id="checkboxFieldIdOne"\n          id="checkboxFieldId"\n          name="checkboxFieldName"\n        >\n          Управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField dimension="s" data-container-id="checkboxFieldIdTwo">\n          Не управляемый маленький чекбокс\n        </CheckboxField>\n        <CheckboxField dimension="m" data-container-id="checkboxFieldIdThree">\n          Двойная\n          <br />\n          строка\n        </CheckboxField>\n        <CheckboxField\n          disabled\n          defaultChecked\n          extraText="Дополнительный текст. Additional text"\n          data-container-id="checkboxFieldIdFour"\n        >\n          Disabled не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField disabled data-container-id="checkboxFieldIdFive">\n          Disabled не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField readOnly defaultChecked data-container-id="checkboxFieldIdSix">\n          Readonly не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField\n          readOnly\n          extraText="Дополнительный текст. Additional text"\n          data-container-id="checkboxFieldIdSeven"\n        >\n          Readonly не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField\n          error\n          extraText={\n            <span>\n              Вариация с <i>дополнительно</i> декорированным <b>текстом</b>\n            </span>\n          }\n          data-container-id="checkboxFieldIdEight"\n        >\n          Error не управляемый чекбокс\n        </CheckboxField>\n        <CheckboxField\n          dimension="s"\n          indeterminate\n          extraText="Вариация с дополнительным текстом"\n          data-container-id="checkboxFieldIdNine"\n        >\n          Не управляемый маленький чекбокс indeterminate\n        </CheckboxField>\n        <CheckboxWithInformer>\n          <CheckboxField dimension="m" extraText="Вариация с информером" data-container-id="checkboxFieldIdTen">\n            Чекбокс с информером\n          </CheckboxField>\n          <Hint\n            {...props}\n            visible={visible1}\n            onVisibilityChange={handleHintChange1}\n            renderContent={() =>\n              \'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.\'\n            }\n          >\n            <InfoSolid $dimension="m" aria-hidden />\n          </Hint>\n        </CheckboxWithInformer>\n        <CheckboxWithInformer>\n          <CheckboxField dimension="s" extraText="Вариация с информером" data-container-id="checkboxFieldIdEleven">\n            Маленький чекбокс с информером\n          </CheckboxField>\n          <Hint\n            {...props}\n            visible={visible2}\n            onVisibilityChange={handleHintChange2}\n            renderContent={() =>\n              \'At breakpoint boundaries, mini units divide the screen into a fixed master grid, and multiples of mini units map to fluid grid column widths and row heights.\'\n            }\n          >\n            <InfoSolid $dimension="s" aria-hidden />\n          </Hint>\n        </CheckboxWithInformer>\n      </Container>\n    </ThemeProvider>\n  );\n};\n'}}},name:"CheckboxField example"};CheckboxFieldBase.parameters={...CheckboxFieldBase.parameters,docs:{...CheckboxFieldBase.parameters?.docs,source:{originalSource:"{\n  render: CheckboxFieldBaseStory,\n  parameters: {\n    docs: {\n      source: {\n        code: CheckboxFieldBaseRaw\n      }\n    }\n  },\n  name: 'CheckboxField example'\n}",...CheckboxFieldBase.parameters?.docs?.source}}};const __namedExportsOrder=["CheckboxFieldBase"]},"./node_modules/@admiral-ds/icons/build/service/InfoSolid.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgInfoSolid});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}var SvgInfoSolid=function SvgInfoSolid(props){return react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",fillRule:"evenodd",d:"M3 12c0-4.98 4.02-9 9-9 4.97 0 9 4.02 9 9a9 9 0 0 1-9 9c-4.98 0-9-4.03-9-9m9-4.75c-.47 0-.86.38-.86.84 0 .47.39.86.86.86.46 0 .85-.39.85-.86 0-.46-.39-.84-.85-.84M14.1 16c0 .41-.34.75-.75.75h-.06c-1.13 0-2.04-.92-2.04-2.05v-3.75c0-.42.33-.75.75-.75.41 0 .75.33.75.75v3.75c0 .3.24.55.54.55h.06c.41 0 .75.33.75.75"})))};__webpack_require__.p},"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts");const getNumFromStr=str=>str.replace(/^\D+/g,"");function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){const cssPropValueSmall=`var(--admiral-border-kind-Small_${getNumFromStr(borderRadiusKind)})`,cssPropValueMedium=`var(--admiral-border-kind-Medium_${getNumFromStr(borderRadiusKind)})`,cssPropValueLarge=`var(--admiral-border-kind-Large_${getNumFromStr(borderRadiusKind)})`;document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/Checkbox/CheckboxDimension.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>ALL_DIMENSIONS_VALUES});const ALL_DIMENSIONS_VALUES=["m","s"]},"./src/components/PositionInPortal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>PositionInPortal});var styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/common/observeRect.ts"),react_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-dom/index.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const PositionedPortalContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div.withConfig({displayName:"PositionInPortal__PositionedPortalContainer",componentId:"sc-e6ntdu-0"})(["pointer-events:none;position:fixed;overflow:visible;z-index:var(--admiral-z-index-dropdown,",");"],(({theme})=>theme.zIndex.dropdown)),PositionInPortal=({targetRef,targetElement,rootRef,fullContainerWidth,...props})=>{const positionedPortalContainerRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{const node=positionedPortalContainerRef.current,targetNode=targetElement??targetRef?.current;if(node&&targetNode){const observer=(0,_src_components_common_observeRect__WEBPACK_IMPORTED_MODULE_4__.A)(targetNode,(rect=>{if(rect){const{x,y,height,width}=rect,{style}=node;style.top=`${y}px`,style.left=fullContainerWidth?"0px":`${x}px`,style.height=`${height}px`,style.width=fullContainerWidth?"100%":`${width}px`}}));return observer.observe(),()=>{observer.unobserve()}}}),[targetRef,targetElement,fullContainerWidth]),(0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(PositionedPortalContainer,{ref:positionedPortalContainerRef,...props}),rootRef?.current||document.body)};try{PositionedPortalContainer.displayName="PositionedPortalContainer",PositionedPortalContainer.__docgenInfo={description:"",displayName:"PositionedPortalContainer",props:{theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"void | WebTarget"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"void | WebTarget"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionedPortalContainer"]={docgenInfo:PositionedPortalContainer.__docgenInfo,name:"PositionedPortalContainer",path:"src/components/PositionInPortal.tsx#PositionedPortalContainer"})}catch(__react_docgen_typescript_loader_error){}try{PositionInPortal.displayName="PositionInPortal",PositionInPortal.__docgenInfo={description:"При фиксированном позиционировании (как у PositionedPortalContainer) элемент позиционируется\nвсегда относительно исходного содержащего блока (окна браузера).\nИсключение, когда один из его предков имеет свойство transform, perspective, или filter,\nустановленное на что-то иное, кроме none, в этом случае этот предок ведет\nсебя как содержащий блок. Тогда top, right, bottom и left элемента рассчитываются относительно этого содержащего блока.\nЕсли у такого предка кроме transform задано свойство overflow: hidden, то элемент будет обрезаться по его краям.\n\nВ связи с вышеописанным в качестве контейнера для портала рекомендуется выбирать элемент, у предков которого нет свойств\ntransform, perspective, или filter отличных от none. Также рекомендуется размещать контейнер портала в самом низу dom-дерева,\nчтобы избежать возможных конфликтов стилей.",displayName:"PositionInPortal",props:{targetRef:{defaultValue:null,description:"@deprecated Будет удалено в 8.x.x версии.\nВзамен используйте параметр targetElement.\n\nRef на элемент, относительно которого позиционируется портал",name:"targetRef",required:!1,type:{name:"RefObject<HTMLElement>"}},targetElement:{defaultValue:null,description:"Элемент, относительно которого позиционируется портал\nВ 8.x.x версии данный параметр станет обязательным, заменив собой targetRef",name:"targetElement",required:!1,type:{name:"Element | null"}},rootRef:{defaultValue:null,description:"Контейнер, внутри которого будет отрисован портал, по умолчанию портал рендерится в document.body",name:"rootRef",required:!1,type:{name:"RefObject<HTMLElement>"}},fullContainerWidth:{defaultValue:null,description:"Отрисовка портала на всю ширину контейнера",name:"fullContainerWidth",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/PositionInPortal.tsx#PositionInPortal"]={docgenInfo:PositionInPortal.__docgenInfo,name:"PositionInPortal",path:"src/components/PositionInPortal.tsx#PositionInPortal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/observeRect.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>observeRect});const props=["bottom","height","left","right","top","width"],rectChanged=(a={},b={})=>props.some((prop=>a[prop]!==b[prop]));function observeRect(node,cb){const state={};return{observe(){state.rafId&&cancelAnimationFrame(state.rafId);const run=()=>{if(state.isObserving){const{bottom,height,left,right,top,width,x,y}=node.getBoundingClientRect(),newRect={bottom,height,left,right,top,width,x:x||left,y:y||top};rectChanged(newRect,state.rect)&&(state.rect=newRect,cb(state.rect)),state.rafId=requestAnimationFrame(run)}};state.rafId=requestAnimationFrame(run),state.isObserving=!0},unobserve(){state.rafId&&cancelAnimationFrame(state.rafId),state.isObserving&&(state.isObserving=!1)}}}},"./src/components/common/utils/parseShadowFromTheme.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{C:()=>parseShadow});const parseShadow=token=>{let result=token;return result=result.replace("box-shadow: ",""),result=result.replace(";",""),result}},"./src/components/common/utils/splitDataAttributes.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$e:()=>passFormFieldDataAttributes,CR:()=>passMenuDataAttributes,D9:()=>passDataAttributes,G:()=>passFormFieldContainerDataAttributes,G$:()=>FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,c$:()=>passDropdownDataAttributes});const FORM_FIELD_DATA_CONTAINER_ATTRIBUTE="data-container",FORM_FIELD_DATA_ATTRIBUTE="data-field",DROPDOWN_DATA_ATTRIBUTE="data-dropdown-container",MENU_DATA_ATTRIBUTE="data-menu";function passFormFieldContainerDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_CONTAINER_ATTRIBUTE,!0)}function passFormFieldDataAttributes(initialProps,containerProps){passDataAttributes(initialProps,containerProps,FORM_FIELD_DATA_ATTRIBUTE,!1)}function passDropdownDataAttributes(initialProps){const dropMenuProps={};return passDataAttributes(initialProps,dropMenuProps,DROPDOWN_DATA_ATTRIBUTE,!0),dropMenuProps}function passMenuDataAttributes(initialProps){const menuProps={};return passDataAttributes(initialProps,menuProps,MENU_DATA_ATTRIBUTE,!0),menuProps}function passDataAttributes(sourceProps,destinationProps,dataAttributesStart,deleteProp){Object.keys(sourceProps).forEach((key=>{"string"==typeof key&&key.startsWith(dataAttributesStart)&&(destinationProps[key]=sourceProps[key],deleteProp&&delete sourceProps[key])}))}},"./src/components/form/CheckboxField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CheckboxField});var _path,react=__webpack_require__("./node_modules/react/index.js"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),uid=__webpack_require__("./src/components/common/uid.ts"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.p;var _rect;function Minus_extends(){return Minus_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Minus_extends.apply(null,arguments)}__webpack_require__.p;var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");const CheckboxComponentWrapper=styled_components_browser_esm.Ay.label.withConfig({displayName:"style__CheckboxComponentWrapper",componentId:"sc-suyql9-0"})(["display:inline-flex;align-items:flex-start;position:relative;box-sizing:content-box;padding:0;user-select:none;cursor:",";"," color:",";fieldset[data-dimension='s'] &&{",";}fieldset:disabled &&{color:var(--admiral-color-Neutral_Neutral30,",");cursor:not-allowed;}",";"],(p=>p.disabled?"not-allowed":p.readOnly?"default":"pointer"),(p=>"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral30, ${p.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${p.theme.color["Neutral/Neutral 90"]})`),typography.Il["Body/Body 2 Short"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.readOnly?"pointer-events: none":"")),readOnlyCss=(0,styled_components_browser_esm.AH)(["pointer-events:none;cursor:default;&:not(:checked){& + div > span{border-color:var(--admiral-color-Neutral_Neutral30,",");background-color:var(--admiral-color-Neutral_Neutral10,",");}}&:checked{& + div > span{border-color:var(--admiral-color-Primary_Primary30,",");background-color:var(--admiral-color-Primary_Primary30,",");& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral00,",");}& > svg{visibility:visible;}}}"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Neutral/Neutral 00"])),indeterminateCss=(0,styled_components_browser_esm.AH)(["&:not(:checked) + div > span{border-color:var(--admiral-color-Primary_Primary60Main,",");background-color:var(--admiral-color-Primary_Primary60Main,",");}> *{display:block;}"],(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"])),hoveredCss=(0,styled_components_browser_esm.AH)(["&:not(:disabled){& + div > div{visibility:visible;}&:focus-visible + div{outline:none;}}"]),activeCss=(0,styled_components_browser_esm.AH)(["&:not(:disabled){"," & + div > div{background:var(--admiral-color-Opacity_Press,",");}}"],hoveredCss,(p=>p.theme.color["Opacity/Press"])),Input=styled_components_browser_esm.Ay.input.withConfig({displayName:"style__Input",componentId:"sc-suyql9-1"})(["appearance:none;::-ms-check{display:none;}position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;padding:0;margin:0;opacity:0;box-sizing:border-box;&:disabled{cursor:not-allowed;&:not(:checked){& + div > span{border-color:var(--admiral-color-Neutral_Neutral30,",");background-color:var(--admiral-color-Neutral_Neutral10,",");}}&:checked{& + div > span{border-color:var(--admiral-color-Primary_Primary30,",");background-color:var(--admiral-color-Primary_Primary30,",");& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral00,",");}& > svg{visibility:visible;}}}}&:checked:not(:disabled){& + div > span{border-color:var(--admiral-color-Primary_Primary60Main,",");background-color:var(--admiral-color-Primary_Primary60Main,",");& *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}& > svg{visibility:visible;}}}"," &:not(:disabled){&:focus-visible + div{outline-offset:","px;outline:var(--admiral-color-Primary_Primary60Main,",") solid ","px;}&:hover{","}&:active{","}",";",";}"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Neutral/Neutral 00"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Special/Static White"]),(p=>!p.readOnly&&p.$hovered&&hoveredCss),2,(p=>p.theme.color["Primary/Primary 60 Main"]),2,(p=>!p.readOnly&&hoveredCss),(p=>!p.readOnly&&activeCss),(p=>p.$indeterminate&&indeterminateCss),(p=>p.readOnly&&readOnlyCss)),InputContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__InputContainer",componentId:"sc-suyql9-2"})(["box-sizing:border-box;padding:2px;pointer-events:none;position:relative;flex-shrink:0;"," fieldset[data-dimension='s'] &{width:","px;height:","px;}"],(p=>`\n    width: ${"s"===p.$dimension?20:24}px;\n    height: ${"s"===p.$dimension?20:24}px;\n  `),20,20),CheckboxComponentHover=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__CheckboxComponentHover",componentId:"sc-suyql9-3"})(["visibility:hidden;pointer-events:none;position:absolute;background:var(--admiral-color-Opacity_Hover,",");left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;"," background-color:var(--admiral-color-Opacity_Hover,",");fieldset[data-dimension='s'] &&{width:32px;height:32px;}"],(p=>p.theme.color["Opacity/Hover"]),(p=>`\n        width: ${"s"===p.$dimension?32:36}px;\n        height: ${"s"===p.$dimension?32:36}px;\n      `),(p=>p.theme.color["Opacity/Hover"])),CheckboxComponentBackground=styled_components_browser_esm.Ay.span.withConfig({displayName:"style__CheckboxComponentBackground",componentId:"sc-suyql9-4"})(["box-sizing:border-box;pointer-events:none;display:inline-block;position:absolute;margin:0;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:var(--admiral-border-radius-Small,",");"," outline:0;transition:background 0.1s ease-in;fieldset[data-dimension='s'] &&{width:16px;height:16px;}line-height:initial;background-color:var(--admiral-color-Neutral_Neutral00,",");border:1px solid ",";& *[fill^='#']{fill:",";}fieldset:disabled &&{& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral10,",");}}"],(p=>(0,borderRadius.r2)(p.theme.shape)),(p=>`\n    width: ${"s"===p.$dimension?16:20}px;\n    height: ${"s"===p.$dimension?16:20}px;\n  `),(p=>p.theme.color["Neutral/Neutral 00"]),(p=>p.$error?`var(--admiral-color-Error_Error60Main, ${p.theme.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral10, ${p.theme.color["Neutral/Neutral 10"]})`:`var(--admiral-color-Neutral_Neutral00, ${p.theme.color["Neutral/Neutral 00"]})`),(p=>p.theme.color["Neutral/Neutral 10"])),iconCss=(0,styled_components_browser_esm.AH)([""," position:absolute;margin:0;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;"],(p=>`\n    width: ${"s"===p.$dimension?16:20}px;\n    height: ${"s"===p.$dimension?16:20}px;\n  `)),Check=(0,styled_components_browser_esm.Ay)((function SvgSuccess(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},props),_path||(_path=react.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))})).withConfig({displayName:"style__Check",componentId:"sc-suyql9-5"})(["visibility:hidden;",""],iconCss),Indeterminate=(0,styled_components_browser_esm.Ay)((function SvgMinus(props){return react.createElement("svg",Minus_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},props),_rect||(_rect=react.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))})).withConfig({displayName:"style__Indeterminate",componentId:"sc-suyql9-6"})([""," & *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}"],iconCss,(p=>p.theme.color["Special/Static White"])),CheckboxComponentLabel=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__CheckboxComponentLabel",componentId:"sc-suyql9-7"})(["display:flex;flex-direction:column;align-content:center;margin-top:2px;margin-bottom:2px;margin-left:",";"," color:",";fieldset:disabled &&{color:var(--admiral-color-Neutral_Neutral30,",");}fieldset[data-dimension='s'] &&{","}"],"8px",(p=>"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral30, ${p.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${p.theme.color["Neutral/Neutral 90"]})`),(p=>p.theme.color["Neutral/Neutral 30"]),typography.Il["Body/Body 2 Short"]),CheckboxComponentHint=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__CheckboxComponentHint",componentId:"sc-suyql9-8"})(["margin-top:4px;"," color:",";fieldset[data-dimension='s'] &&{","}"],(p=>"s"===p.$dimension?typography.Il["Caption/Caption 1"]:typography.Il["Body/Body 2 Short"]),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral30, ${p.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),typography.Il["Caption/Caption 1"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CheckboxField=(0,react.forwardRef)((({children,disabled=!1,readOnly=!1,hovered,dimension="m",error,indeterminate=!1,extraText,className,id=(0,uid.L)(),name,...props},ref)=>{const fieldContainerProps={"data-field-id":id,"data-field-name":name};(0,splitDataAttributes.G)(props,fieldContainerProps);return(0,jsx_runtime.jsxs)(CheckboxComponentWrapper,{className,$dimension:dimension,disabled,readOnly,...fieldContainerProps,children:[(0,jsx_runtime.jsx)(Input,{...props,ref,disabled,readOnly,type:"checkbox",$indeterminate:indeterminate,onKeyDown:e=>{if(readOnly){keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.preventDefault()}props.onKeyDown?.(e)},"data-hovered":hovered,$hovered:hovered,$dimension:dimension,id,name}),(0,jsx_runtime.jsxs)(InputContainer,{$dimension:dimension,children:[(0,jsx_runtime.jsx)(CheckboxComponentHover,{$dimension:dimension}),(0,jsx_runtime.jsx)(CheckboxComponentBackground,{$dimension:dimension,$error:error,disabled:disabled||readOnly,children:indeterminate?(0,jsx_runtime.jsx)(Indeterminate,{"aria-hidden":"true",focusable:"false",$dimension:dimension}):(0,jsx_runtime.jsx)(Check,{"aria-hidden":"true",focusable:"false",$dimension:dimension})})]}),children&&(0,jsx_runtime.jsxs)(CheckboxComponentLabel,{$dimension:dimension,disabled,children:[children,extraText&&(0,jsx_runtime.jsx)(CheckboxComponentHint,{disabled,$dimension:dimension,children:extraText})]})]})}));CheckboxField.displayName="CheckboxField";try{CheckboxField.displayName="CheckboxField",CheckboxField.__docgenInfo={description:"",displayName:"CheckboxField",props:{extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},indeterminate:{defaultValue:{value:"false"},description:"Состояние частичного выбора",name:"indeterminate",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Состояние hover",name:"hovered",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/CheckboxField/index.tsx#CheckboxField"]={docgenInfo:CheckboxField.__docgenInfo,name:"CheckboxField",path:"src/components/form/CheckboxField/index.tsx#CheckboxField"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/themes/borderRadius.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$t:()=>ALL_BORDER_RADIUS_VALUES,VM:()=>mediumGroupBorderRadius,Z3:()=>largeGroupBorderRadius,r2:()=>smallGroupBorderRadius});const ALL_BORDER_RADIUS_VALUES=["Border radius 0","Border radius 2","Border radius 4","Border radius 6","Border radius 8","Border radius 10"];function smallGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";default:return"4px"}}function mediumGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"2px";case"Border radius 4":default:return"4px";case"Border radius 6":return"6px";case"Border radius 8":return"8px";case"Border radius 10":return"10px"}}function largeGroupBorderRadius(shape){switch(shape.borderRadiusKind){case"Border radius 0":return"0";case"Border radius 2":return"4px";case"Border radius 4":default:return"8px";case"Border radius 6":return"12px";case"Border radius 8":return"16px";case"Border radius 10":return"20px"}}}}]);