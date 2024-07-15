"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3429],{"./.storybook/createBorderRadiusSwapper.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>createBorderRadiusSwapper});var _admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/themes/light/index.ts");const getNumFromStr=str=>str.replace(/^\D+/g,"");function createBorderRadiusSwapper(borderRadiusKind,CSSCustomProps){if(borderRadiusKind&&CSSCustomProps){const cssPropValueSmall=`var(--admiral-border-kind-Small_${getNumFromStr(borderRadiusKind)})`,cssPropValueMedium=`var(--admiral-border-kind-Medium_${getNumFromStr(borderRadiusKind)})`,cssPropValueLarge=`var(--admiral-border-kind-Large_${getNumFromStr(borderRadiusKind)})`;document.body.style.setProperty("--admiral-border-radius-Small",cssPropValueSmall),document.body.style.setProperty("--admiral-border-radius-Medium",cssPropValueMedium),document.body.style.setProperty("--admiral-border-radius-Large",cssPropValueLarge)}else CSSCustomProps||(document.body.style.removeProperty("--admiral-border-radius-Small"),document.body.style.removeProperty("--admiral-border-radius-Medium"),document.body.style.removeProperty("--admiral-border-radius-Large"));return function swapBorder(theme){return theme?(theme.shape.borderRadiusKind=borderRadiusKind||theme.shape.borderRadiusKind,theme):(_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind=borderRadiusKind||_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d.shape.borderRadiusKind,_admiral_ds_react_ui__WEBPACK_IMPORTED_MODULE_0__.d)}}},"./src/components/Menu/CategoryMenuItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>CategoryMenuItem});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/MenuItem.tsx"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Typography/typography.ts"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const StyledMenuItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_MenuItem__WEBPACK_IMPORTED_MODULE_3__.D).withConfig({displayName:"CategoryMenuItem__StyledMenuItem",componentId:"sc-z81loj-0"})([""," cursor:default;"],(({$dimension})=>"s"===$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Subtitle/Subtitle 3"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Subtitle/Subtitle 2"])),CategoryMenuItem=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((({children,dimension="l",...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(StyledMenuItem,{ref,...props,dimension,hovered:!1,selected:!1,hasSubmenu:!1,$dimension:dimension,children})));try{CategoryMenuItem.displayName="CategoryMenuItem",CategoryMenuItem.__docgenInfo={description:"",displayName:"CategoryMenuItem",props:{dimension:{defaultValue:{value:"l"},description:"",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/CategoryMenuItem.tsx#CategoryMenuItem"]={docgenInfo:CategoryMenuItem.__docgenInfo,name:"CategoryMenuItem",path:"src/components/Menu/CategoryMenuItem.tsx#CategoryMenuItem"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Menu/MenuItemWithCheckbox.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{I:()=>MenuItemWithCheckbox,x:()=>checkboxTreeToMap});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/Menu/MenuItem.tsx"),_src_components_form__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/form/CheckboxField/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const checkboxTreeToMap=(checkboxTree,level=0,dependencies)=>checkboxTree.reduce(((acc,item)=>{const key=item.id,currentNode={level,node:item};if(acc.set(key,currentNode),dependencies&&!item.children&&dependencies.forEach((dependency=>dependency.push(key))),item.children){const allDependencies=dependencies?[...dependencies]:[],itemDependencies=[];currentNode.dependencies=itemDependencies,acc.set(key,currentNode),allDependencies.push(itemDependencies);const map=checkboxTreeToMap(item.children,level+1,allDependencies);return new Map([...acc,...map])}return acc}),new Map),paddingLeft=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.AH)(["padding-left:","px;"],(({dimension,$level=0})=>"s"===dimension?12+28*$level:16+32*$level)),CheckboxGroupMenuItem=(0,styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay)(_src_components_Menu_MenuItem__WEBPACK_IMPORTED_MODULE_3__.D).withConfig({displayName:"MenuItemWithCheckbox__CheckboxGroupMenuItem",componentId:"sc-aoffmn-0"})(["",""],paddingLeft),MenuItemWithCheckbox=react__WEBPACK_IMPORTED_MODULE_0__.forwardRef((({checked,indeterminate,checkboxRef,level=0,children,dimension="l",...props},ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(CheckboxGroupMenuItem,{dimension,$level:level,ref,...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_form__WEBPACK_IMPORTED_MODULE_4__.Y,{dimension:"s"===dimension?"s":"m",checked,indeterminate,hovered:props.hovered,disabled:props.disabled,readOnly:props.readOnly,ref:checkboxRef,onChange:()=>!1,children})})));try{MenuItemWithCheckbox.displayName="MenuItemWithCheckbox",MenuItemWithCheckbox.__docgenInfo={description:"",displayName:"MenuItemWithCheckbox",props:{checked:{defaultValue:null,description:"Значение Checkbox",name:"checked",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"Неопределенное состояние Checkbox",name:"indeterminate",required:!1,type:{name:"boolean"}},checkboxIsHovered:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 4.17.0, будет удалено в 10.x.x версии.\n\nСостояние hovered для Checkbox",name:"checkboxIsHovered",required:!1,type:{name:"boolean"}},checkboxRef:{defaultValue:null,description:"Ref на Checkbox",name:"checkboxRef",required:!1,type:{name:"RefObject<HTMLInputElement>"}},level:{defaultValue:{value:"0"},description:"Сдвиг внутри MenuItem при наличии нескольких уровней (например при использовании составной группы чекбоксов внутри Menu)",name:"level",required:!1,type:{name:"number"}},key:{defaultValue:null,description:"",name:"key",required:!1,type:{name:"string | number"}},selected:{defaultValue:null,description:"Активная секция MenuItems",name:"selected",required:!1,type:{name:"boolean"}},preselected:{defaultValue:null,description:"Секция в состоянии preselected",name:"preselected",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Акцентная секция MenuItems",name:"hovered",required:!1,type:{name:"boolean"}},onHover:{defaultValue:null,description:"Обработчик наведения мыши на item",name:"onHover",required:!1,type:{name:"(() => void)"}},onLeave:{defaultValue:null,description:"обработчик выхода мыши за пределы item",name:"onLeave",required:!1,type:{name:"MouseEventHandler<HTMLElement>"}},containerRef:{defaultValue:null,description:"ссылка на контейнер, в котором находится Menu",name:"containerRef",required:!1,type:{name:"RefObject<HTMLElement>"}},expandIcon:{defaultValue:null,description:"",name:"expandIcon",required:!1,type:{name:"ReactNode"}},hasSubmenu:{defaultValue:null,description:"",name:"hasSubmenu",required:!1,type:{name:"boolean"}},selfRef:{defaultValue:null,description:"",name:"selfRef",required:!1,type:{name:"RefObject<HTMLDivElement> | ((instance: HTMLDivElement | null) => void) | null"}},disabled:{defaultValue:null,description:"Отключение секции",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"l"},description:"Размер MenuItems",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"l"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Menu/MenuItemWithCheckbox.tsx#MenuItemWithCheckbox"]={docgenInfo:MenuItemWithCheckbox.__docgenInfo,name:"MenuItemWithCheckbox",path:"src/components/Menu/MenuItemWithCheckbox.tsx#MenuItemWithCheckbox"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/RadioButton/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>RadioButton});var react=__webpack_require__("./node_modules/react/index.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");const RadioButtonHover=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__RadioButtonHover",componentId:"sc-10rp66c-0"})(["visibility:hidden;pointer-events:none;position:absolute;background:var(--admiral-color-Opacity_Hover,",");left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;"," background-color:var(--admiral-color-Opacity_Hover,",");"],(p=>p.theme.color["Opacity/Hover"]),(p=>`\n        width: calc(100% + ${"s"===p.$dimension?14:16}px);\n        height: calc(100% + ${"s"===p.$dimension?14:16}px);\n      `),(p=>p.theme.color["Opacity/Hover"])),RadioButtonLabel=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__RadioButtonLabel",componentId:"sc-10rp66c-1"})(["display:flex;flex-direction:column;align-content:center;margin-left:",";"," "," color:",";fieldset:disabled &&{color:var(--admiral-color-Neutral_Neutral30,",");}fieldset[data-dimension='s'] &&{margin-left:",";margin-top:1px;","}"],(p=>"s"===p.$dimension?"9px":"10px"),(p=>"s"===p.$dimension?"margin-top: 1px;":""),(p=>"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral30, ${p.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${p.theme.color["Neutral/Neutral 90"]})`),(p=>p.theme.color["Neutral/Neutral 30"]),"9px",typography.Il["Body/Body 2 Short"]),disabledCss=(0,styled_components_browser_esm.AH)(["border-color:var(--admiral-color-Neutral_Neutral30,",");background-color:var(--admiral-color-Neutral_Neutral10,",");"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"])),Span=styled_components_browser_esm.Ay.span.withConfig({displayName:"style__Span",componentId:"sc-10rp66c-2"})(["display:inline-block;position:absolute;flex-shrink:0;margin:0;top:0;left:0;right:0;bottom:0;content:'';box-sizing:border-box;pointer-events:none;border-radius:50%;transition:all 0.25s ease-in-out;width:","px;height:","px;background-color:var(--admiral-color-Neutral_Neutral00,",");border:","px solid var(--admiral-color-Neutral_Neutral50,",");fieldset[data-dimension='s'] &{width:","px;height:","px;}"," "," fieldset:disabled &{border:","px solid var(--admiral-color-Neutral_Neutral30,",");}"],(p=>"s"===p.$dimension?18:20),(p=>"s"===p.$dimension?18:20),(p=>p.theme.color["Neutral/Neutral 00"]),1,(p=>p.theme.color["Neutral/Neutral 50"]),18,18,(p=>p.disabled?disabledCss:""),(p=>p.$error?`border-color: var(--admiral-color-Error_Error60Main, ${p.theme.color["Error/Error 60 Main"]});`:""),1,(p=>p.theme.color["Neutral/Neutral 30"])),InputContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__InputContainer",componentId:"sc-10rp66c-3"})(["pointer-events:none;position:relative;flex-shrink:0;border-radius:50%;"," fieldset[data-dimension='s'] &{width:","px;height:","px;}"],(p=>`\n    width: ${"s"===p.$dimension?18:20}px;\n    height: ${"s"===p.$dimension?18:20}px;\n  `),18,18),readOnlyCss=(0,styled_components_browser_esm.AH)(["pointer-events:none;&:not(:checked){& + div > span{background-color:var(--admiral-color-Neutral_Neutral10,",");}}&:checked{& + div > span{background-color:var(--admiral-color-Neutral_Neutral00,",");}}"],(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Neutral/Neutral 00"])),Input=styled_components_browser_esm.Ay.input.withConfig({displayName:"style__Input",componentId:"sc-10rp66c-4"})(["position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;padding:0;margin:0;opacity:0;box-sizing:border-box;",";&:disabled{cursor:not-allowed;}&:not(:checked):disabled{& + div > span{background-color:var(--admiral-color-Neutral_Neutral10,",");}}&:checked:disabled{& + div > span{border:","px solid var(--admiral-color-Primary_Primary30,",");background-color:var(--admiral-color-Neutral_Neutral00,",");}}&:checked:not(:disabled){& + div > span{border:",";}}&:not(:disabled){&:focus-visible + div{outline-offset:","px;outline:var(--admiral-color-Primary_Primary60Main,",") solid ","px;}&:hover{& + div > div{",";}&:focus-visible + div{outline:none;}}&:active{& + div > div{",";background:var(--admiral-color-Opacity_Press,",");}&:focus-visible + div{outline:none;}}}"],(p=>p.readOnly&&readOnlyCss),(p=>p.theme.color["Neutral/Neutral 10"]),5,(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Neutral/Neutral 00"]),(p=>p.readOnly?`5px solid var(--admiral-color_Primary_Primary30, ${p.theme.color["Primary/Primary 30"]})`:`5px solid var(--admiral-color_Primary_Primary60Main, ${p.theme.color["Primary/Primary 60 Main"]})`),2,(p=>p.theme.color["Primary/Primary 60 Main"]),2,(p=>!p.readOnly&&"visibility: visible"),(p=>!p.readOnly&&"visibility: visible"),(p=>p.theme.color["Opacity/Press"])),Hint=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__Hint",componentId:"sc-10rp66c-5"})(["margin-top:6px;"," color:",";fieldset[data-dimension='s'] &&{","}"],(p=>"s"===p.$dimension?typography.Il["Caption/Caption 1"]:typography.Il["Body/Body 2 Short"]),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral30, ${p.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),typography.Il["Caption/Caption 1"]),RadioButtonComponent=styled_components_browser_esm.Ay.label.withConfig({displayName:"style__RadioButtonComponent",componentId:"sc-10rp66c-6"})(["display:flex;align-items:flex-start;position:relative;box-sizing:content-box;padding:",";user-select:none;cursor:",";"," color:",";fieldset[data-dimension='s'] &&{padding:1px 0 1px 1px;",";}fieldset:disabled &&{color:var(--admiral-color-Neutral_Neutral30,",");cursor:not-allowed;}",";"],(p=>"s"===p.$dimension?"1px 0 1px 1px":"2px 0 2px 2px"),(p=>p.disabled?"not-allowed":p.readOnly?"default":"pointer"),(p=>"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral30, ${p.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${p.theme.color["Neutral/Neutral 90"]})`),typography.Il["Body/Body 2 Short"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.readOnly&&(0,styled_components_browser_esm.AH)(["& > *{pointer-events:none;}"])));var keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const RadioButton=(0,react.forwardRef)((({children,disabled=!1,readOnly,error=!1,dimension="m",extraText,className,...props},ref)=>(0,jsx_runtime.jsxs)(RadioButtonComponent,{disabled,readOnly,className,$dimension:dimension,children:[(0,jsx_runtime.jsx)(Input,{ref,type:"radio",disabled,readOnly,$dimension:dimension,...props,onKeyDown:e=>{if(readOnly){keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.preventDefault()}props.onKeyDown?.(e)}}),(0,jsx_runtime.jsxs)(InputContainer,{$dimension:dimension,children:[(0,jsx_runtime.jsx)(RadioButtonHover,{$dimension:dimension}),(0,jsx_runtime.jsx)(Span,{disabled:disabled||readOnly,$dimension:dimension,$error:error,"aria-hidden":!0})]}),children&&(0,jsx_runtime.jsxs)(RadioButtonLabel,{$dimension:dimension,disabled,children:[children,extraText&&(0,jsx_runtime.jsx)(Hint,{disabled,$dimension:dimension,children:extraText})]})]})));RadioButton.displayName="RadioButton";try{RadioButton.displayName="RadioButton",RadioButton.__docgenInfo={description:"",displayName:"RadioButton",props:{checked:{defaultValue:null,description:"Состояние кнопки, выбрана или нет",name:"checked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:{value:"false"},description:"Отключение кнопки",name:"disabled",required:!1,type:{name:"boolean"}},readOnly:{defaultValue:null,description:"Только для чтения",name:"readOnly",required:!1,type:{name:"boolean"}},dimension:{defaultValue:{value:"m"},description:"Размер радиокнопки",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},extraText:{defaultValue:null,description:"Дополнительный текст (подсказка), который выводится нижней строкой",name:"extraText",required:!1,type:{name:"ReactNode"}},error:{defaultValue:{value:"false"},description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/RadioButton/index.tsx#RadioButton"]={docgenInfo:RadioButton.__docgenInfo,name:"RadioButton",path:"src/components/RadioButton/index.tsx#RadioButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/TooltipHOC/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>TooltipHoc});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/Tooltip/index.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function TooltipHoc(Component){const WrappedComponent=props=>{const{forwardedRef,renderContent,container,withDelay,tooltipRef,tooltipPosition,...wrappedCompProps}=props,emptyContent=!renderContent()&&0!==renderContent(),anchorElementRef=react__WEBPACK_IMPORTED_MODULE_0__.useRef(null),[visible,setVisible]=react__WEBPACK_IMPORTED_MODULE_0__.useState(!1),[node,setNode]=react__WEBPACK_IMPORTED_MODULE_0__.useState(null),[timer,setTimer]=react__WEBPACK_IMPORTED_MODULE_0__.useState();return react__WEBPACK_IMPORTED_MODULE_0__.useEffect((()=>{function show(){setTimer(window.setTimeout((()=>setVisible(!0)),withDelay?_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__.w:0))}function hide(){clearTimeout(timer),setVisible(!1)}if(node)return node.addEventListener("mouseenter",show),node.addEventListener("focus",show),node.addEventListener("mouseleave",hide),node.addEventListener("blur",hide),()=>{timer&&clearTimeout(timer),node.removeEventListener("mouseenter",show),node.removeEventListener("focus",show),node.removeEventListener("mouseleave",hide),node.removeEventListener("blur",hide)}}),[node,setTimer,setVisible,timer]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(Component,{...wrappedCompProps,ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_3__.d)(forwardedRef,anchorElementRef,setNode)}),visible&&!emptyContent&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_src_components_Tooltip__WEBPACK_IMPORTED_MODULE_2__.m,{targetElement:anchorElementRef.current,renderContent,container,tooltipPosition,ref:tooltipRef})]})};return react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(((props,ref)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(WrappedComponent,{forwardedRef:ref,...props})))}try{TooltipHoc.displayName="TooltipHoc",TooltipHoc.__docgenInfo={description:"",displayName:"TooltipHoc",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/TooltipHOC/index.tsx#TooltipHoc"]={docgenInfo:TooltipHoc.__docgenInfo,name:"TooltipHoc",path:"src/components/TooltipHOC/index.tsx#TooltipHoc"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/common/uid.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function uid(){return(performance.now().toString(36)+Math.random().toString(36)).replace(/\./g,"")}__webpack_require__.d(__webpack_exports__,{L:()=>uid})},"./src/components/form/CheckboxField/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>CheckboxField});var _path,react=__webpack_require__("./node_modules/react/index.js"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts"),uid=__webpack_require__("./src/components/common/uid.ts"),keyboardKey=__webpack_require__("./src/components/common/keyboardKey.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),typography=__webpack_require__("./src/components/Typography/typography.ts");function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.p;var _rect;function Minus_extends(){return Minus_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},Minus_extends.apply(null,arguments)}__webpack_require__.p;var borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts");const CheckboxComponentWrapper=styled_components_browser_esm.Ay.label.withConfig({displayName:"style__CheckboxComponentWrapper",componentId:"sc-suyql9-0"})(["display:inline-flex;align-items:flex-start;position:relative;box-sizing:content-box;padding:0;user-select:none;cursor:",";"," color:",";fieldset[data-dimension='s'] &&{",";}fieldset:disabled &&{color:var(--admiral-color-Neutral_Neutral30,",");cursor:not-allowed;}",";"],(p=>p.disabled?"not-allowed":p.readOnly?"default":"pointer"),(p=>"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral30, ${p.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${p.theme.color["Neutral/Neutral 90"]})`),typography.Il["Body/Body 2 Short"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.readOnly?"pointer-events: none":"")),readOnlyCss=(0,styled_components_browser_esm.AH)(["pointer-events:none;cursor:default;&:not(:checked){& + div > span{border-color:var(--admiral-color-Neutral_Neutral30,",");background-color:var(--admiral-color-Neutral_Neutral10,",");}}&:checked{& + div > span{border-color:var(--admiral-color-Primary_Primary30,",");background-color:var(--admiral-color-Primary_Primary30,",");& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral00,",");}& > svg{visibility:visible;}}}"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Neutral/Neutral 00"])),indeterminateCss=(0,styled_components_browser_esm.AH)(["&:not(:checked) + div > span{border-color:var(--admiral-color-Primary_Primary60Main,",");background-color:var(--admiral-color-Primary_Primary60Main,",");}> *{display:block;}"],(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"])),hoveredCss=(0,styled_components_browser_esm.AH)(["&:not(:disabled){& + div > div{visibility:visible;}&:focus-visible + div{outline:none;}}"]),activeCss=(0,styled_components_browser_esm.AH)(["&:not(:disabled){"," & + div > div{background:var(--admiral-color-Opacity_Press,",");}}"],hoveredCss,(p=>p.theme.color["Opacity/Press"])),Input=styled_components_browser_esm.Ay.input.withConfig({displayName:"style__Input",componentId:"sc-suyql9-1"})(["appearance:none;::-ms-check{display:none;}position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;padding:0;margin:0;opacity:0;box-sizing:border-box;&:disabled{cursor:not-allowed;&:not(:checked){& + div > span{border-color:var(--admiral-color-Neutral_Neutral30,",");background-color:var(--admiral-color-Neutral_Neutral10,",");}}&:checked{& + div > span{border-color:var(--admiral-color-Primary_Primary30,",");background-color:var(--admiral-color-Primary_Primary30,",");& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral00,",");}& > svg{visibility:visible;}}}}&:checked:not(:disabled){& + div > span{border-color:var(--admiral-color-Primary_Primary60Main,",");background-color:var(--admiral-color-Primary_Primary60Main,",");& *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}& > svg{visibility:visible;}}}"," &:not(:disabled){&:focus-visible + div{outline-offset:","px;outline:var(--admiral-color-Primary_Primary60Main,",") solid ","px;}&:hover{","}&:active{","}",";",";}"],(p=>p.theme.color["Neutral/Neutral 30"]),(p=>p.theme.color["Neutral/Neutral 10"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Primary/Primary 30"]),(p=>p.theme.color["Neutral/Neutral 00"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Primary/Primary 60 Main"]),(p=>p.theme.color["Special/Static White"]),(p=>!p.readOnly&&p.$hovered&&hoveredCss),2,(p=>p.theme.color["Primary/Primary 60 Main"]),2,(p=>!p.readOnly&&hoveredCss),(p=>!p.readOnly&&activeCss),(p=>p.$indeterminate&&indeterminateCss),(p=>p.readOnly&&readOnlyCss)),InputContainer=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__InputContainer",componentId:"sc-suyql9-2"})(["box-sizing:border-box;padding:2px;pointer-events:none;position:relative;flex-shrink:0;"," fieldset[data-dimension='s'] &{width:","px;height:","px;}"],(p=>`\n    width: ${"s"===p.$dimension?20:24}px;\n    height: ${"s"===p.$dimension?20:24}px;\n  `),20,20),CheckboxComponentHover=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__CheckboxComponentHover",componentId:"sc-suyql9-3"})(["visibility:hidden;pointer-events:none;position:absolute;background:var(--admiral-color-Opacity_Hover,",");left:50%;top:50%;transform:translate(-50%,-50%);border-radius:50%;"," background-color:var(--admiral-color-Opacity_Hover,",");fieldset[data-dimension='s'] &&{width:32px;height:32px;}"],(p=>p.theme.color["Opacity/Hover"]),(p=>`\n        width: ${"s"===p.$dimension?32:36}px;\n        height: ${"s"===p.$dimension?32:36}px;\n      `),(p=>p.theme.color["Opacity/Hover"])),CheckboxComponentBackground=styled_components_browser_esm.Ay.span.withConfig({displayName:"style__CheckboxComponentBackground",componentId:"sc-suyql9-4"})(["box-sizing:border-box;pointer-events:none;display:inline-block;position:absolute;margin:0;top:50%;left:50%;transform:translate(-50%,-50%);border-radius:var(--admiral-border-radius-Small,",");"," outline:0;transition:background 0.1s ease-in;fieldset[data-dimension='s'] &&{width:16px;height:16px;}line-height:initial;background-color:var(--admiral-color-Neutral_Neutral00,",");border:1px solid ",";& *[fill^='#']{fill:",";}fieldset:disabled &&{& *[fill^='#']{fill:var(--admiral-color-Neutral_Neutral10,",");}}"],(p=>(0,borderRadius.r2)(p.theme.shape)),(p=>`\n    width: ${"s"===p.$dimension?16:20}px;\n    height: ${"s"===p.$dimension?16:20}px;\n  `),(p=>p.theme.color["Neutral/Neutral 00"]),(p=>p.$error?`var(--admiral-color-Error_Error60Main, ${p.theme.color["Error/Error 60 Main"]})`:`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral10, ${p.theme.color["Neutral/Neutral 10"]})`:`var(--admiral-color-Neutral_Neutral00, ${p.theme.color["Neutral/Neutral 00"]})`),(p=>p.theme.color["Neutral/Neutral 10"])),iconCss=(0,styled_components_browser_esm.AH)([""," position:absolute;margin:0;top:50%;left:50%;transform:translate(-50%,-50%);pointer-events:none;"],(p=>`\n    width: ${"s"===p.$dimension?16:20}px;\n    height: ${"s"===p.$dimension?16:20}px;\n  `)),Check=(0,styled_components_browser_esm.Ay)((function SvgSuccess(props){return react.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 16 16"},props),_path||(_path=react.createElement("path",{fill:"#fff",d:"M13.471 5.805a.667.667 0 1 0-.942-.943L7 10.39 4.138 7.53a.667.667 0 0 0-.943.942l3.334 3.334c.26.26.682.26.942 0z"})))})).withConfig({displayName:"style__Check",componentId:"sc-suyql9-5"})(["visibility:hidden;",""],iconCss),Indeterminate=(0,styled_components_browser_esm.Ay)((function SvgMinus(props){return react.createElement("svg",Minus_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"-5 -9 20 20"},props),_rect||(_rect=react.createElement("rect",{width:10,height:2,fill:"#fff",rx:1})))})).withConfig({displayName:"style__Indeterminate",componentId:"sc-suyql9-6"})([""," & *[fill^='#']{fill:var(--admiral-color-Special_StaticWhite,",");}"],iconCss,(p=>p.theme.color["Special/Static White"])),CheckboxComponentLabel=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__CheckboxComponentLabel",componentId:"sc-suyql9-7"})(["display:flex;flex-direction:column;align-content:center;margin-top:2px;margin-bottom:2px;margin-left:",";"," color:",";fieldset:disabled &&{color:var(--admiral-color-Neutral_Neutral30,",");}fieldset[data-dimension='s'] &&{","}"],"8px",(p=>"s"===p.$dimension?typography.Il["Body/Body 2 Short"]:typography.Il["Body/Body 1 Short"]),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral30, ${p.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral90, ${p.theme.color["Neutral/Neutral 90"]})`),(p=>p.theme.color["Neutral/Neutral 30"]),typography.Il["Body/Body 2 Short"]),CheckboxComponentHint=styled_components_browser_esm.Ay.div.withConfig({displayName:"style__CheckboxComponentHint",componentId:"sc-suyql9-8"})(["margin-top:4px;"," color:",";fieldset[data-dimension='s'] &&{","}"],(p=>"s"===p.$dimension?typography.Il["Caption/Caption 1"]:typography.Il["Body/Body 2 Short"]),(p=>p.disabled?`var(--admiral-color-Neutral_Neutral30, ${p.theme.color["Neutral/Neutral 30"]})`:`var(--admiral-color-Neutral_Neutral50, ${p.theme.color["Neutral/Neutral 50"]})`),typography.Il["Caption/Caption 1"]);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const CheckboxField=(0,react.forwardRef)((({children,disabled=!1,readOnly=!1,hovered,dimension="m",error,indeterminate=!1,extraText,className,id=(0,uid.L)(),name,...props},ref)=>{const fieldContainerProps={"data-field-id":id,"data-field-name":name};(0,splitDataAttributes.G)(props,fieldContainerProps);return(0,jsx_runtime.jsxs)(CheckboxComponentWrapper,{className,$dimension:dimension,disabled,readOnly,...fieldContainerProps,children:[(0,jsx_runtime.jsx)(Input,{...props,ref,disabled,readOnly,type:"checkbox",$indeterminate:indeterminate,onKeyDown:e=>{if(readOnly){keyboardKey.r.getCode(e)===keyboardKey.r[" "]&&e.preventDefault()}props.onKeyDown?.(e)},"data-hovered":hovered,$hovered:hovered,$dimension:dimension,id,name}),(0,jsx_runtime.jsxs)(InputContainer,{$dimension:dimension,children:[(0,jsx_runtime.jsx)(CheckboxComponentHover,{$dimension:dimension}),(0,jsx_runtime.jsx)(CheckboxComponentBackground,{$dimension:dimension,$error:error,disabled:disabled||readOnly,children:indeterminate?(0,jsx_runtime.jsx)(Indeterminate,{"aria-hidden":"true",focusable:"false",$dimension:dimension}):(0,jsx_runtime.jsx)(Check,{"aria-hidden":"true",focusable:"false",$dimension:dimension})})]}),children&&(0,jsx_runtime.jsxs)(CheckboxComponentLabel,{$dimension:dimension,disabled,children:[children,extraText&&(0,jsx_runtime.jsx)(CheckboxComponentHint,{disabled,$dimension:dimension,children:extraText})]})]})}));CheckboxField.displayName="CheckboxField";try{CheckboxField.displayName="CheckboxField",CheckboxField.__docgenInfo={description:"",displayName:"CheckboxField",props:{extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},dimension:{defaultValue:{value:"m"},description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'}]}},indeterminate:{defaultValue:{value:"false"},description:"Состояние частичного выбора",name:"indeterminate",required:!1,type:{name:"boolean"}},error:{defaultValue:null,description:"Состояние ошибки",name:"error",required:!1,type:{name:"boolean"}},hovered:{defaultValue:null,description:"Состояние hover",name:"hovered",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/CheckboxField/index.tsx#CheckboxField"]={docgenInfo:CheckboxField.__docgenInfo,name:"CheckboxField",path:"src/components/form/CheckboxField/index.tsx#CheckboxField"})}catch(__react_docgen_typescript_loader_error){}}}]);