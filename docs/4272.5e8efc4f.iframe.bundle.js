"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[4272],{"./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{h:()=>SvgCloseOutline});var _path,react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");function _extends(){return(_extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(null,arguments)}var SvgCloseOutline=function SvgCloseOutline(props){return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg",_extends({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24"},props),_path||(_path=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path",{fill:"#717681",d:"M6.4 5.49a.63.63 0 0 0-.91 0c-.26.25-.26.66 0 .91l5.59 5.59-5.49 5.5c-.26.25-.26.66 0 .91.25.26.66.26.91 0l5.5-5.49 5.49 5.49c.25.26.66.26.91 0 .26-.25.26-.66 0-.91l-5.49-5.5L18.5 6.4c.26-.25.26-.66 0-.91a.63.63 0 0 0-.91 0L12 11.08z"})))};__webpack_require__.p},"./src/components/input/TextArea/index.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>TextArea});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),styled_components__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/common/dom/changeInputData.ts"),_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./src/components/common/utils/refSetter.ts"),_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/Typography/typography.ts"),_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@admiral-ds/icons/build/service/CloseOutline.svg"),_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/InputIconButton.tsx"),_Container__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/input/Container.tsx"),_src_components_Scrollbar__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/Scrollbar/index.tsx");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal(["\n  padding-right: ","px;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  background-color: var(--admiral-color-Neutral_Neutral10, ",");\n  border-color: transparent;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  pointer-events: none;\n  overflow: hidden;\n  min-width: 0;\n\n  background: none;\n  border: 1px solid var(--admiral-color-Neutral_Neutral40, ",");\n  border-radius: inherit;\n\n  [data-status='error'] &&& {\n    border: 1px solid var(--admiral-color-Error_Error60Main, ",");\n  }\n\n  [data-status='success'] &&& {\n    border: 1px solid var(--admiral-color-Success_Success50Main, ",");\n  }\n\n  [data-read-only] &&& {\n    border-color: transparent;\n  }\n"]);return _templateObject2=function _templateObject(){return data},data}function _templateObject3(){var data=_tagged_template_literal(["\n  background-color: var(--admiral-color-Neutral_Neutral00, ",");\n\n  &:focus + "," {\n    border: 2px solid var(--admiral-color-Primary_Primary60Main, ",");\n  }\n\n  &&&:disabled + ",", [data-read-only] &&& + "," {\n    border-color: transparent;\n  }\n\n  &:hover:not(:focus) + "," {\n    border-color: ",";\n  }\n\n  &:user-invalid + ",", &:user-invalid:hover + "," {\n    border: 1px solid var(--admiral-color-Error_Error60Main, ",");\n  }\n\n  [data-status='error']\n    &&&:hover:not(:disabled)\n    + ",",\n    &:user-invalid:hover:not(:disabled)\n    + "," {\n    border: 1px solid var(--admiral-color-Error_Error70, ",");\n  }\n\n  [data-status='success'] &&&:hover:not(:disabled) + "," {\n    border: 1px solid var(--admiral-color-Success_Success60, ",");\n  }\n\n  [data-status='error']\n    &&&:focus:not(:disabled)\n    + ",",\n    &:user-invalid:focus:not(:disabled)\n    + "," {\n    border: 2px solid var(--admiral-color-Error_Error60Main, ",");\n  }\n\n  [data-status='success'] &&&:focus:not(:disabled) + "," {\n    border: 2px solid var(--admiral-color-Success_Success50Main, ",");\n  }\n\n  [data-read-only] &&&,\n  &&&:disabled {\n    ","\n  }\n\n  [data-read-only] &&&:hover + ",", [data-read-only] &&&:focus + "," {\n    border-color: transparent;\n  }\n"]);return _templateObject3=function _templateObject(){return data},data}function _templateObject4(){var data=_tagged_template_literal(["\n  ::-ms-clear,\n  ::-ms-reveal {\n    display: none;\n  }\n"]);return _templateObject4=function _templateObject(){return data},data}function _templateObject5(){var data=_tagged_template_literal(["\n  outline: none;\n  appearance: none;\n  border-radius: inherit;\n  border: none;\n  box-sizing: border-box;\n  margin: 0;\n  padding: ","px ","px;\n  overflow-wrap: break-word;\n\n  ","\n  ","\n  ","\n"]);return _templateObject5=function _templateObject(){return data},data}function _templateObject6(){var data=_tagged_template_literal(["\n  ","\n  ","\n\n  [data-disable-copying] & {\n    cursor: default;\n  }\n"]);return _templateObject6=function _templateObject(){return data},data}function _templateObject7(){var data=_tagged_template_literal(["\n  ","\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  resize: none;\n\n  flex: 1 1 auto;\n  min-width: 10px;\n  background: transparent;\n\n  color: var(--admiral-color-Neutral_Neutral90, ",");\n\n  ","\n  &::placeholder {\n    color: var(--admiral-color-Neutral_Neutral50, ",");\n  }\n\n  &:disabled::placeholder,\n  &:disabled {\n    cursor: not-allowed;\n    color: var(--admiral-color-Neutral_Neutral30, ",");\n  }\n\n  [data-disable-copying] & {\n    user-select: none;\n    pointer-events: none;\n  }\n\n  ","\n  ","\n"]);return _templateObject7=function _templateObject(){return data},data}function _templateObject8(){var data=_tagged_template_literal(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n\n  margin-right: ","px;\n  padding-top: ","px;\n\n  & > * {\n    display: block;\n    width: ","px;\n  }\n"]);return _templateObject8=function _templateObject(){return data},data}function _templateObject9(){var data=_tagged_template_literal(["\n  min-height: ","px;\n  ","\n  ","\n  ","\n"]);return _templateObject9=function _templateObject(){return data},data}var iconSizeValue=function(props){switch(props.$dimension){case"xl":default:return 24;case"s":return 20}},verticalPaddingValue=function(props){switch(props.$dimension){case"xl":return 16;case"m":default:return 8;case"s":return 6}},horizontalPaddingValue=function(props){switch(props.$dimension){case"xl":case"m":default:return 16;case"s":return 12}},extraPadding=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject(),function(props){return horizontalPaddingValue(props)+(props.$iconsAfterCount?iconSizeValue(props)+8:0)}),disabledColors=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject1(),function(p){return p.theme.color["Neutral/Neutral 10"]}),BorderedDiv=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject2(),function(p){return p.theme.color["Neutral/Neutral 40"]},function(p){return p.theme.color["Error/Error 60 Main"]},function(p){return p.theme.color["Success/Success 50 Main"]}),colorsBorderAndBackground=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject3(),function(p){return p.theme.color["Neutral/Neutral 00"]},BorderedDiv,function(p){return p.theme.color["Primary/Primary 60 Main"]},BorderedDiv,BorderedDiv,BorderedDiv,function(p){return p.disabled?"transparent":"var(--admiral-color-Neutral_Neutral60, ".concat(p.theme.color["Neutral/Neutral 60"],")")},BorderedDiv,BorderedDiv,function(p){return p.theme.color["Error/Error 60 Main"]},BorderedDiv,BorderedDiv,function(p){return p.theme.color["Error/Error 70"]},BorderedDiv,function(p){return p.theme.color["Success/Success 60"]},BorderedDiv,BorderedDiv,function(p){return p.theme.color["Error/Error 60 Main"]},BorderedDiv,function(p){return p.theme.color["Success/Success 50 Main"]},disabledColors,BorderedDiv,BorderedDiv),ieFixes=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject4()),textBlockStyleMixin=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.AH)(_templateObject5(),verticalPaddingValue,horizontalPaddingValue,function(props){return"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 1 Long"]},colorsBorderAndBackground,extraPadding),HiddenSpanContainer=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject6(),_src_components_Scrollbar__WEBPACK_IMPORTED_MODULE_5__.A5,textBlockStyleMixin),Text=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.textarea(_templateObject7(),_src_components_Scrollbar__WEBPACK_IMPORTED_MODULE_5__.A5,function(p){return p.theme.color["Neutral/Neutral 90"]},function(props){return"s"===props.$dimension?_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 2 Long"]:_src_components_Typography__WEBPACK_IMPORTED_MODULE_4__.Il["Body/Body 1 Long"]},function(p){return p.theme.color["Neutral/Neutral 50"]},function(p){return p.theme.color["Neutral/Neutral 30"]},textBlockStyleMixin,ieFixes),IconPanel=styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay.div(_templateObject8(),horizontalPaddingValue,verticalPaddingValue,iconSizeValue);function defaultHandleInput(newInputData){return newInputData}var stopEvent=function(e){return e.preventDefault()},textAreaHeight=function(rows,$dimension){return rows*("s"===$dimension?20:24)+2*verticalPaddingValue({$dimension:$dimension})},StyledContainer=(0,styled_components__WEBPACK_IMPORTED_MODULE_3__.Ay)(_Container__WEBPACK_IMPORTED_MODULE_6__.mc)(_templateObject9(),function(p){return textAreaHeight(p.$rows,p.$dimension)},function(p){return p.$maxRows?"max-height: ".concat(textAreaHeight(p.$maxRows,p.$dimension),"px;"):""},function(p){return p.$autoHeight?"":"height: ".concat(textAreaHeight(p.$rows,p.$dimension),"px;")},function(p){return p.disabled?"cursor: not-allowed;":""});function toHtmlString(value){return String(value||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/(\r?\n)$/g,"<br /><br />").replace(/\r?\n/g,"<br /> ")}var TextArea=/*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_1__.forwardRef)(function(_param,ref){var _param_rows=_param.rows,maxRows=_param.maxRows,value=_param.value,displayClearIcon=_param.displayClearIcon,status=_param.status,_param_handleInput=_param.handleInput,handleInput=void 0===_param_handleInput?defaultHandleInput:_param_handleInput,containerRef=_param.containerRef,icons=_param.icons,iconsAfter=_param.iconsAfter,children=_param.children,className=_param.className,autoHeight=_param.autoHeight,_param_skeleton=_param.skeleton,_param_dimension=_param.dimension,dimension=void 0===_param_dimension?"m":_param_dimension,disableCopying=_param.disableCopying,props=_object_without_properties(_param,["rows","maxRows","value","displayClearIcon","status","handleInput","containerRef","icons","iconsAfter","children","className","autoHeight","skeleton","dimension","disableCopying"]),inputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),_useState=_sliced_to_array((0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),2),contentNode=_useState[0],setContentNode=_useState[1],hiddenDivRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),iconArray=react__WEBPACK_IMPORTED_MODULE_1__.Children.toArray(iconsAfter||icons);!props.readOnly&&displayClearIcon&&iconArray.unshift(/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_InputIconButton__WEBPACK_IMPORTED_MODULE_7__.G,{icon:_admiral_ds_icons_build_service_CloseOutline_svg__WEBPACK_IMPORTED_MODULE_2__.h,onClick:function(){inputRef.current&&(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_8__.B)(inputRef.current,{value:""})},"aria-hidden":!0},"clear-icon"));var iconCount=iconArray.length,inputData=null!=value?handleInput({value:String(value)}):{};return(0,react__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(function(){var oninput=function oninput(){var inputData=handleInput({value:this.value,selectionStart:this.selectionStart,selectionEnd:this.selectionEnd});(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_8__.B)(this,inputData)};if(inputRef.current){var node=inputRef.current;node.addEventListener("input",oninput);var inputData=handleInput({value:node.value,selectionStart:node.selectionStart,selectionEnd:node.selectionEnd});return(0,_src_components_common_dom_changeInputData__WEBPACK_IMPORTED_MODULE_8__.B)(node,inputData),function(){node.removeEventListener("input",oninput)}}},[handleInput]),(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function(){var oninput=function oninput(){var value=this.value,hiddenDiv=hiddenDivRef.current;hiddenDiv&&(hiddenDiv.innerHTML=toHtmlString(value),this.style.overflowY=hiddenDiv.clientHeight<hiddenDiv.scrollHeight?"":"hidden")};if(autoHeight&&inputRef.current&&hiddenDivRef.current){var node=inputRef.current;return hiddenDivRef.current.innerHTML=toHtmlString(node.value),node.addEventListener("input",oninput),node.style.overflowY=hiddenDivRef.current.clientHeight<hiddenDivRef.current.scrollHeight?"":"hidden",function(){node.removeEventListener("input",oninput),node.style.overflowY=""}}},[autoHeight,inputData.value,props.defaultValue]),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(StyledContainer,_object_spread_props(_object_spread({className:className,ref:containerRef,"data-read-only":!!props.readOnly||void 0,"data-status":status,$skeleton:void 0!==_param_skeleton&&_param_skeleton,disabled:props.disabled,"data-disable-copying":!!disableCopying||void 0,$autoHeight:!!autoHeight,$rows:void 0===_param_rows?3:_param_rows,$maxRows:maxRows,$dimension:dimension},disableCopying&&{onMouseDown:stopEvent}),{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(HiddenSpanContainer,{ref:hiddenDivRef,$dimension:dimension,disabled:props.disabled,$iconsAfterCount:iconCount}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Text,_object_spread_props(_object_spread({ref:(0,_src_components_common_utils_refSetter__WEBPACK_IMPORTED_MODULE_9__.d)(ref,inputRef,function(node){return setContentNode(node)})},props),{$dimension:dimension,$iconsAfterCount:iconCount,$autoHeight:autoHeight,value:inputData.value})),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_src_components_Scrollbar__WEBPACK_IMPORTED_MODULE_5__.ur,{contentNode:contentNode}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(BorderedDiv,{}),iconCount>0&&/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(IconPanel,{disabled:props.disabled,$dimension:dimension,children:iconArray}),children]}))});TextArea.displayName="TextArea";try{TextArea.displayName="TextArea",TextArea.__docgenInfo={description:"",displayName:"TextArea",props:{maxLength:{defaultValue:null,description:"Максимальное количество символов для ввода",name:"maxLength",required:!1,type:{name:"number"}},rows:{defaultValue:{value:"3"},description:"Начальная высота компонента в количествах строк",name:"rows",required:!1,type:{name:"number"}},maxRows:{defaultValue:null,description:"Максимальная высота компонента в количествах строк",name:"maxRows",required:!1,type:{name:"number"}},dimension:{defaultValue:{value:"m"},description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},icons:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.\nВзамен используйте iconsAfter\n\nИконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"ForwardedRef<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},autoHeight:{defaultValue:null,description:"Включает автоматическое изменение высоты компонента в зависимости от количества текста",name:"autoHeight",required:!1,type:{name:"boolean"}},skeleton:{defaultValue:{value:"false"},description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/input/TextArea/index.tsx#TextArea"]={docgenInfo:TextArea.__docgenInfo,name:"TextArea",path:"src/components/input/TextArea/index.tsx#TextArea"})}catch(__react_docgen_typescript_loader_error){}}}]);