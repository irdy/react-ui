"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[3382],{"./src/components/form/TimeField/stories/TimeField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{TimeFieldInput:()=>TimeFieldInput,__namedExportsOrder:()=>__namedExportsOrder,default:()=>TimeField_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),react=__webpack_require__("./node_modules/react/index.js"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),TimeInput=__webpack_require__("./src/components/input/TimeInput/index.tsx"),Field=__webpack_require__("./src/components/Field/index.tsx"),uid=__webpack_require__("./src/components/common/uid.ts"),splitDataAttributes=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var TimeField=react.forwardRef(function(props,ref){var fieldRef=react.useRef(null),className=props.className,displayInline=props.displayInline,status=props.status,required=props.required,extraText=props.extraText,label=props.label,_props_id=props.id,id=void 0===_props_id?(0,uid.L)():_props_id,disabled=props.disabled,displayCharacterCounter=props.displayCharacterCounter,characterCounterVisibilityThreshold=props.characterCounterVisibilityThreshold,skeleton=props.skeleton,restProps=_object_without_properties(props,["className","displayInline","status","required","extraText","label","id","disabled","displayCharacterCounter","characterCounterVisibilityThreshold","skeleton"]),fieldContainerProps={className:className,extraText:extraText,status:status,required:required,label:label,id:id,displayInline:displayInline,disabled:disabled,displayCharacterCounter:displayCharacterCounter,characterCounterVisibilityThreshold:characterCounterVisibilityThreshold,ref:fieldRef,skeleton:skeleton,"data-field-id":id,"data-field-name":restProps.name};(0,splitDataAttributes.$e)(restProps,fieldContainerProps),(0,splitDataAttributes.G)(restProps,fieldContainerProps);var TimeProps=_object_spread({ref:ref,id:id,"aria-required":required,status:status,disabled:disabled,skeleton:skeleton},restProps);return(0,jsx_runtime.jsx)(Field.D0,_object_spread_props(_object_spread({},fieldContainerProps),{children:(0,jsx_runtime.jsx)(TimeInput.c,_object_spread({},TimeProps))}))});TimeField.displayName="TimeField";try{TimeField.displayName="TimeField",TimeField.__docgenInfo={description:"",displayName:"TimeField",props:{value:{defaultValue:null,description:"Выбранное значение времени",name:"value",required:!1,type:{name:"string"}},startTime:{defaultValue:null,description:"Начало временного диапазона",name:"startTime",required:!1,type:{name:"string"}},endTime:{defaultValue:null,description:"Конец временного диапазона",name:"endTime",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Задизейбленный инпут",name:"disabled",required:!1,type:{name:"boolean"}},disabledSlots:{defaultValue:null,description:"Задизейбленное значение временного диапозона",name:"disabledSlots",required:!1,type:{name:"string[]"}},icon:{defaultValue:null,description:"Альтернативная иконка компонента",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},parser:{defaultValue:null,description:"Позволяет обрабатывать введенные значения",name:"parser",required:!1,type:{name:"((time?: string) => string)"}},alignDropdown:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.\nВзамен используйте alignSelf\n\nПозволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.\nВзамен используйте iconsAfter\n\nИконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:null,description:"Позволяет выравнивать контейнер с компонентами относительно тарджет компонента\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},label:{defaultValue:null,description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:"Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:\n0 - всегда видим\n1 - всегда невидим\nпо умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества",name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TimeField/index.tsx#TimeField"]={docgenInfo:TimeField.__docgenInfo,name:"TimeField",path:"src/components/form/TimeField/index.tsx#TimeField"})}catch(__react_docgen_typescript_loader_error){}var types=__webpack_require__("./src/components/input/types.ts"),borderRadius=__webpack_require__("./src/components/themes/borderRadius.ts"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),createBorderRadiusSwapper=__webpack_require__("./.storybook/createBorderRadiusSwapper.ts");function _array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _array_with_holes(arr){if(Array.isArray(arr))return arr}function TimeFieldInput_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function _non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TimeFieldInput_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TimeFieldInput_template_define_property(target,key,source[key])})}return target}function TimeFieldInput_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TimeFieldInput_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TimeFieldInput_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TimeFieldInput_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=TimeFieldInput_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function TimeFieldInput_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function _sliced_to_array(arr,i){return _array_with_holes(arr)||_iterable_to_array_limit(arr,i)||_unsupported_iterable_to_array(arr,i)||_non_iterable_rest()}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return _array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _array_like_to_array(o,minLen)}}function _templateObject(){var data=_tagged_template_literal(["\n  max-width: 320px;\n  > * {\n    margin-bottom: 24px;\n  }\n"]);return _templateObject=function _templateObject(){return data},data}var DisplayContainer=styled_components_browser_esm.Ay.div(_templateObject()),TimeFieldInputTemplate=function(_param){var _String,_param_placeholder=_param.placeholder,_param_label=_param.label,themeBorderKind=_param.themeBorderKind,CSSCustomProps=_param.CSSCustomProps,props=TimeFieldInput_template_object_without_properties(_param,["placeholder","label","themeBorderKind","CSSCustomProps"]),_React_useState=_sliced_to_array(react.useState(null!==(_String=String(props.value))&&void 0!==_String?_String:""),2),localValue=_React_useState[0],setValue=_React_useState[1];return react.useEffect(function(){void 0!==props.value&&setValue(String(props.value))},[props.value]),(0,jsx_runtime.jsx)(styled_components_browser_esm.NP,{theme:(0,createBorderRadiusSwapper.j)(themeBorderKind,CSSCustomProps),children:(0,jsx_runtime.jsx)(DisplayContainer,{children:(0,jsx_runtime.jsx)(TimeField,TimeFieldInput_template_object_spread_props(TimeFieldInput_template_object_spread({"data-container-id":"timeFieldIdOne"},props),{startTime:"09:00",endTime:"18:00",value:localValue,onChange:function(e){var _props_onChange;setValue(e.currentTarget.value),null===(_props_onChange=props.onChange)||void 0===_props_onChange||_props_onChange.call(props,e)},dropContainerClassName:"dropContainerClass",placeholder:void 0===_param_placeholder?"Наберите несколько символов...":_param_placeholder,label:void 0===_param_label?"Поле ввода времени":_param_label}))})})};try{TimeFieldInputTemplate.displayName="TimeFieldInputTemplate",TimeFieldInputTemplate.__docgenInfo={description:"",displayName:"TimeFieldInputTemplate",props:{value:{defaultValue:null,description:"Выбранное значение времени",name:"value",required:!1,type:{name:"string"}},startTime:{defaultValue:null,description:"Начало временного диапазона",name:"startTime",required:!1,type:{name:"string"}},endTime:{defaultValue:null,description:"Конец временного диапазона",name:"endTime",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Задизейбленный инпут",name:"disabled",required:!1,type:{name:"boolean"}},disabledSlots:{defaultValue:null,description:"Задизейбленное значение временного диапозона",name:"disabledSlots",required:!1,type:{name:"string[]"}},icon:{defaultValue:null,description:"Альтернативная иконка компонента",name:"icon",required:!1,type:{name:"FunctionComponent<SVGProps<SVGSVGElement>>"}},parser:{defaultValue:null,description:"Позволяет обрабатывать введенные значения",name:"parser",required:!1,type:{name:"((time?: string) => string)"}},alignDropdown:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.10.0, будет удалено в 10.x.x версии.\nВзамен используйте alignSelf\n\nПозволяет выравнивать позицию дропдаун контейнера относительно селекта.\nПринимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)",name:"alignDropdown",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dimension:{defaultValue:null,description:"Делает высоту компонента больше или меньше обычной",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'}]}},status:{defaultValue:null,description:"Статус поля",name:"status",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'}]}},skeleton:{defaultValue:null,description:"Состояние skeleton",name:"skeleton",required:!1,type:{name:"boolean"}},icons:{defaultValue:null,description:"@deprecated Помечено как deprecated в версии 8.13.0, будет удалено в 10.x.x версии.\nВзамен используйте iconsAfter\n\nИконки для отображения в правом углу поля",name:"icons",required:!1,type:{name:"ReactNode"}},iconsAfter:{defaultValue:null,description:"Иконки для отображения в конце поля",name:"iconsAfter",required:!1,type:{name:"ReactNode"}},displayClearIcon:{defaultValue:null,description:"Отображать иконку очистки поля",name:"displayClearIcon",required:!1,type:{name:"boolean"}},isLoading:{defaultValue:null,description:"Отображать статус загрузки данных",name:"isLoading",required:!1,type:{name:"boolean"}},containerRef:{defaultValue:null,description:"Ref контейнера компонента",name:"containerRef",required:!1,type:{name:"RefObject<HTMLDivElement>"}},handleInput:{defaultValue:null,description:"Дает возможность изменить значение поля ввода и позицию курсора до момента отображения при следующем цикле рендеринга.\nИспользуется для создания масок ввода",name:"handleInput",required:!1,type:{name:"CustomInputHandler"}},disableCopying:{defaultValue:null,description:"Наличие этого атрибута отключает возможность выделения и копирования значения поля",name:"disableCopying",required:!1,type:{name:"boolean"}},showTooltip:{defaultValue:null,description:"Отображение тултипа, по умолчанию true",name:"showTooltip",required:!1,type:{name:"boolean"}},alignSelf:{defaultValue:null,description:"Позволяет выравнивать контейнер с компонентами относительно тарджет компонента\nhttps://developer.mozilla.org/en-US/docs/Web/CSS/align-self",name:"alignSelf",required:!1,type:{name:"enum",value:[{value:'"center"'},{value:'"auto"'},{value:'"flex-start"'},{value:'"flex-end"'},{value:'"baseline"'},{value:'"stretch"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},label:{defaultValue:{value:"Поле ввода времени"},description:"Имя поля формы",name:"label",required:!1,type:{name:"ReactNode"}},extraText:{defaultValue:null,description:"Текст будет виден ниже компонента",name:"extraText",required:!1,type:{name:"ReactNode"}},displayInline:{defaultValue:null,description:"Отображать лейбл в одну строчку с инпутом",name:"displayInline",required:!1,type:{name:"boolean"}},displayCharacterCounter:{defaultValue:null,description:"Позволяет отключать появление счетчика символов при задании maxLength",name:"displayCharacterCounter",required:!1,type:{name:"boolean"}},characterCounterVisibilityThreshold:{defaultValue:null,description:"Коэффициент влияющий на появление счетчика при заданном максимальном количестве символов:\n0 - всегда видим\n1 - всегда невидим\nпо умолчанию 0.8 - становится видимым при наборе более 80% символов от максимально допустимого количества",name:"characterCounterVisibilityThreshold",required:!1,type:{name:"number"}},themeBorderKind:{defaultValue:null,description:"",name:"themeBorderKind",required:!1,type:{name:"enum",value:[{value:'"Border radius 0"'},{value:'"Border radius 2"'},{value:'"Border radius 4"'},{value:'"Border radius 6"'},{value:'"Border radius 8"'},{value:'"Border radius 10"'}]}},CSSCustomProps:{defaultValue:null,description:"",name:"CSSCustomProps",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/form/TimeField/stories/TimeFieldInput.template.tsx#TimeFieldInputTemplate"]={docgenInfo:TimeFieldInputTemplate.__docgenInfo,name:"TimeFieldInputTemplate",path:"src/components/form/TimeField/stories/TimeFieldInput.template.tsx#TimeFieldInputTemplate"})}catch(__react_docgen_typescript_loader_error){}var common=__webpack_require__("./src/components/form/common.tsx");function TimeField_stories_array_like_to_array(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function TimeField_stories_array_with_holes(arr){if(Array.isArray(arr))return arr}function TimeField_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function TimeField_stories_iterable_to_array_limit(arr,i){var _s,_e,_i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _arr=[],_n=!0,_d=!1;try{for(_i=_i.call(arr);!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}}function TimeField_stories_non_iterable_rest(){throw TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function TimeField_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){TimeField_stories_define_property(target,key,source[key])})}return target}function TimeField_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function TimeField_stories_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):TimeField_stories_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function TimeField_stories_sliced_to_array(arr,i){return TimeField_stories_array_with_holes(arr)||TimeField_stories_iterable_to_array_limit(arr,i)||TimeField_stories_unsupported_iterable_to_array(arr,i)||TimeField_stories_non_iterable_rest()}function TimeField_stories_unsupported_iterable_to_array(o,minLen){if(o){if("string"==typeof o)return TimeField_stories_array_like_to_array(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if("Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return TimeField_stories_array_like_to_array(o,minLen)}}let TimeField_stories={title:"Admiral-2.1/Form Field/TimeField",component:TimeField,decorators:void 0,parameters:{docs:{source:{code:null}},componentSubtitle:(0,jsx_runtime.jsx)(common.u,{}),design:[{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60618"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60644"},{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60669"}]},argTypes:{dimension:{options:types.o,control:{type:"radio"}},status:{control:{type:"radio"},options:types.j},disabled:{control:{type:"boolean"}},displayClearIcon:{control:{type:"boolean"}},disableCopying:{control:{type:"boolean"}},displayCharacterCounter:{control:{type:"boolean"}},displayInline:{control:{type:"boolean"}},showTooltip:{control:{type:"boolean"}},isLoading:{control:{type:"boolean"}},startTime:{control:{type:"text"}},endTime:{control:{type:"text"}},label:{control:{type:"text"}},disabledSlots:{control:!1},value:{control:{type:"text"}},containerRef:{control:!1},handleInput:{control:!1},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},icon:{control:!1},icons:{control:!1},extraText:{control:{type:"text"}},themeBorderKind:{options:borderRadius.$t,control:{type:"radio"}},skeleton:{control:{type:"boolean"}}}};var TimeFieldInput={render:function(props){var CSSCustomProps=TimeField_stories_sliced_to_array((0,external_STORYBOOK_MODULE_PREVIEW_API_.useGlobals)(),1)[0].CSSCustomProps;return(0,jsx_runtime.jsx)(TimeFieldInputTemplate,TimeField_stories_object_spread_props(TimeField_stories_object_spread({},props),{CSSCustomProps:CSSCustomProps}))},parameters:{docs:{source:{code:"import * as React from 'react';\nimport type { ChangeEvent } from 'react';\nimport styled, { ThemeProvider } from 'styled-components';\n\nimport { TimeField } from '@admiral-ds/react-ui';\nimport type { TimeFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';\nimport { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';\n\nconst DisplayContainer = styled.div`\n  max-width: 320px;\n  > * {\n    margin-bottom: 24px;\n  }\n`;\n\nexport const TimeFieldInputTemplate = ({\n  placeholder = 'Наберите несколько символов...',\n  label = 'Поле ввода времени',\n  themeBorderKind,\n  CSSCustomProps,\n  ...props\n}: TimeFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {\n  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');\n\n  React.useEffect(() => {\n    if (props.value !== undefined) {\n      setValue(String(props.value));\n    }\n  }, [props.value]);\n  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {\n    const inputValue = e.currentTarget.value;\n    setValue(inputValue);\n    props.onChange?.(e);\n  };\n\n  return (\n    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>\n      <DisplayContainer>\n        <TimeField\n          data-container-id=\"timeFieldIdOne\"\n          {...props}\n          startTime=\"09:00\"\n          endTime=\"18:00\"\n          value={localValue}\n          onChange={handleChange}\n          dropContainerClassName=\"dropContainerClass\"\n          placeholder={placeholder}\n          label={label}\n        />\n      </DisplayContainer>\n    </ThemeProvider>\n  );\n};\n"}}},name:"TimeField example"};TimeFieldInput.parameters={...TimeFieldInput.parameters,docs:{...TimeFieldInput.parameters?.docs,source:{originalSource:"{\n  render: TimeFieldInputStory,\n  parameters: {\n    docs: {\n      source: {\n        code: TimeFieldInputRaw\n      }\n    }\n  },\n  name: 'TimeField example'\n}",...TimeFieldInput.parameters?.docs?.source}}};let __namedExportsOrder=["TimeFieldInput"]},"./src/components/common/utils/splice.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>splice});function splice(oldString,start,delCount,newSubStr){return oldString.slice(0,start)+newSubStr+oldString.slice(start+Math.abs(delCount))}},"./src/components/form/common.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{u:()=>DataAttributesDescription});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_require__("./node_modules/react/index.js");var styled_components__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/common/utils/splitDataAttributes.ts");function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  font-family: 'VTB Group UI';\n  font-size: 16px;\n  line-height: 24px;\n"]);return _templateObject=function _templateObject(){return data},data}var Desc=styled_components__WEBPACK_IMPORTED_MODULE_2__.Ay.div(_templateObject()),DataAttributesDescription=function(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Desc,{children:["Компоненту можно прокидывать дата аттрибуты вида [",_src_components_common_utils_splitDataAttributes__WEBPACK_IMPORTED_MODULE_3__.G$,"-...]. Этот аттрибут попадет только на контейнер самого компонента.",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("br",{}),' Например: data-container-id="fieldIdOne" - контейнер компонента получит аттрибут data-container-id="fieldIdOne", на нативный input этот аттрибут прокинут не будет.']})}}}]);