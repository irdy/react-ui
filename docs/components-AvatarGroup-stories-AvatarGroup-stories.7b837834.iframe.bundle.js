"use strict";(self.webpackChunk_admiral_ds_react_ui=self.webpackChunk_admiral_ds_react_ui||[]).push([[795],{"./src/components/AvatarGroup/stories/AvatarGroup.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AvatarGroupPlayground:()=>AvatarGroupPlayground,AvatarGroupWidth:()=>AvatarGroupWidth,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AvatarGroup_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),AvatarBaseGroup=__webpack_require__("./src/components/AvatarBaseGroup/index.tsx");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){_define_property(target,key,source[key])})}return target}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}var AvatarGroup=function(_param){var items=_param.items,props=_object_without_properties(_param,["items"]),itemsBase=items.map(function(item){return _object_spread_props(_object_spread({},item),{withActivityRing:!1,showActivityRing:!1})});return/*#__PURE__*/(0,jsx_runtime.jsx)(AvatarBaseGroup.W,_object_spread_props(_object_spread({},props),{items:itemsBase,withActivityRing:!1}))};AvatarGroup.displayName="AvatarGroup";try{AvatarGroup.displayName="AvatarGroup",AvatarGroup.__docgenInfo={description:"",displayName:"AvatarGroup",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AvatarProps[]"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},appearance:{defaultValue:null,description:"Внешний вид компонента (цвет заливки и текста) - можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов",name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},onAvatarSelect:{defaultValue:null,description:"Колбек на выбор аватара (по клику или нажатию клавиши). Возвращает id выбранного аватара",name:"onAvatarSelect",required:!1,type:{name:"((id: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarGroup/index.tsx#AvatarGroup"]={docgenInfo:AvatarGroup.__docgenInfo,name:"AvatarGroup",path:"src/components/AvatarGroup/index.tsx#AvatarGroup"})}catch(__react_docgen_typescript_loader_error){}var styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),NotificationItem=__webpack_require__("./src/components/NotificationItem/index.tsx"),PersonSolid=__webpack_require__("./node_modules/@admiral-ds/icons/build/system/PersonSolid.svg");function AvatarGroupWidth_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AvatarGroupWidth_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){AvatarGroupWidth_template_define_property(target,key,source[key])})}return target}function AvatarGroupWidth_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function AvatarGroupWidth_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):AvatarGroupWidth_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function _tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function _templateObject(){var data=_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]);return _templateObject=function _templateObject(){return data},data}function _templateObject1(){var data=_tagged_template_literal(["\n  width: 100%;\n"]);return _templateObject1=function _templateObject(){return data},data}function _templateObject2(){var data=_tagged_template_literal(["\n  height: ","px;\n"]);return _templateObject2=function _templateObject(){return data},data}var Wrapper=styled_components_browser_esm.Ay.div(_templateObject()),StyledNotificationItem=(0,styled_components_browser_esm.Ay)(NotificationItem.rn)(_templateObject1()),Separator=styled_components_browser_esm.Ay.div(_templateObject2(),function(p){return p.height}),imageURL="https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg",onSelectAvatar=function(id){console.log("Select item with id: ",id)},items1=[{userName:"Lena Ivanova",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"1"},{userName:"Petr Lesov",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"2"},{userName:"Agata Petrova",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"3"},{userName:"Arina Leskova",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"4"},{userName:"Rita",id:"5"},{userName:"Важный Кот",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),href:imageURL,id:"6"},{userName:"Lisa Kotova",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"7"},{userName:"Ирина Глушко",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"8"},{userName:"Rosa Farrel",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"9"},{userName:"Tom Hidlton",id:"10"}],items2=[{userName:"Lena Ivanova",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"1",appearance:{background:"#3F7DFE",icon:"#001157"}},{userName:"Petr Lesov",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"2"},{userName:"Agata Petrova",id:"3",appearance:{background:"#D92020",text:"#FFFFFF"}},{userName:"Arina Leskova",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"4"},{userName:"Rita",appearance:"neutral2",id:"5"},{userName:"Важный Кот",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),href:imageURL,id:"6"},{userName:"Lisa Kotova",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"7"},{userName:"Ирина Глушко",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"8"},{userName:"Rosa Farrel",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"9"},{userName:"Tom Hidlton",appearance:"neutral2",id:"10"}],AvatarGroupWidthTemplate=function(props){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Wrapper,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledNotificationItem,{displayStatusIcon:!0,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Avatar Group."}),/*#__PURE__*/(0,jsx_runtime.jsxs)(NotificationItem.Yg,{children:["При достижении условного максимума отображаемых аватаров, последним ставится аватар с отображением количества скрытых элементов.",/*#__PURE__*/(0,jsx_runtime.jsx)(Separator,{height:8}),"Чтобы задать для всех аватаров, входящих в группу, единый внешний вид, достаточно задать для компонента AvatarGroup соответствующее значение параметра appearance. Если для каких-то аватаров нужно задать отличный от остальных внешний вид, необходимо задать параметр appearance непосредственно для компонента Avatar. Параметр appearance, заданный для Avatar, имеет больший приоритет, чем параметр appearance, заданный для AvatarGroup.",/*#__PURE__*/(0,jsx_runtime.jsx)(Separator,{height:8}),"Пример AvatarGroup с единым для всех аватаров внешним видом (appearance)."]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(AvatarGroup,AvatarGroupWidth_template_object_spread_props(AvatarGroupWidth_template_object_spread({},props),{style:{width:"300px"},items:items1,onAvatarSelect:onSelectAvatar,dropContainerClassName:"dropContainerClass"})),/*#__PURE__*/(0,jsx_runtime.jsxs)(StyledNotificationItem,{displayStatusIcon:!0,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Avatar Group."}),/*#__PURE__*/(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:"Пример AvatarGroup с различными по внешнему виду (appearance) аватарами."})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(AvatarGroup,AvatarGroupWidth_template_object_spread_props(AvatarGroupWidth_template_object_spread({},props),{style:{width:"300px"},items:items2,onAvatarSelect:onSelectAvatar,appearance:"neutral4",dropContainerClassName:"dropContainerClass",dropContainerStyle:{width:"250px"}}))]})};try{AvatarGroupWidthTemplate.displayName="AvatarGroupWidthTemplate",AvatarGroupWidthTemplate.__docgenInfo={description:"",displayName:"AvatarGroupWidthTemplate",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AvatarProps[]"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},appearance:{defaultValue:null,description:"Внешний вид компонента (цвет заливки и текста) - можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов",name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},onAvatarSelect:{defaultValue:null,description:"Колбек на выбор аватара (по клику или нажатию клавиши). Возвращает id выбранного аватара",name:"onAvatarSelect",required:!1,type:{name:"((id: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarGroup/stories/AvatarGroupWidth.template.tsx#AvatarGroupWidthTemplate"]={docgenInfo:AvatarGroupWidthTemplate.__docgenInfo,name:"AvatarGroupWidthTemplate",path:"src/components/AvatarGroup/stories/AvatarGroupWidth.template.tsx#AvatarGroupWidthTemplate"})}catch(__react_docgen_typescript_loader_error){}function AvatarGroupPlayground_template_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AvatarGroupPlayground_template_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){AvatarGroupPlayground_template_define_property(target,key,source[key])})}return target}function AvatarGroupPlayground_template_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter(function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable})),keys.push.apply(keys,symbols)}return keys}function AvatarGroupPlayground_template_object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):AvatarGroupPlayground_template_ownKeys(Object(source)).forEach(function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}),target}function AvatarGroupPlayground_template_object_without_properties(source,excluded){if(null==source)return{};var key,i,target=AvatarGroupPlayground_template_object_without_properties_loose(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],!(excluded.indexOf(key)>=0)&&Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function AvatarGroupPlayground_template_object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}function AvatarGroupPlayground_template_tagged_template_literal(strings,raw){return raw||(raw=strings.slice(0)),Object.freeze(Object.defineProperties(strings,{raw:{value:Object.freeze(raw)}}))}function AvatarGroupPlayground_template_templateObject(){var data=AvatarGroupPlayground_template_tagged_template_literal(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n"]);return AvatarGroupPlayground_template_templateObject=function _templateObject(){return data},data}function AvatarGroupPlayground_template_templateObject1(){var data=AvatarGroupPlayground_template_tagged_template_literal(["\n  width: 100%;\n"]);return AvatarGroupPlayground_template_templateObject1=function _templateObject(){return data},data}var AvatarGroupPlayground_template_Wrapper=styled_components_browser_esm.Ay.div(AvatarGroupPlayground_template_templateObject()),AvatarGroupPlayground_template_StyledNotificationItem=(0,styled_components_browser_esm.Ay)(NotificationItem.rn)(AvatarGroupPlayground_template_templateObject1()),AvatarGroupPlayground_template_onSelectAvatar=function(id){console.log("Select item with id: ",id)},items=[{userName:"Lena Ivanova",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"1"},{userName:"Petr Lesov",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"2"},{userName:"Agata Petrova",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"3"},{userName:"Arina Leskova",appearance:"neutral3",id:"4"},{userName:"Rita",appearance:"neutral4",id:"5"},{userName:"Важный Кот",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),href:"https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg",id:"6"},{userName:"Lisa Kotova",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"7"},{userName:"Ирина Глушко",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"8"},{userName:"Rosa Farrel",icon:/*#__PURE__*/(0,jsx_runtime.jsx)(PersonSolid.h,{}),id:"9"},{userName:"Tom Hidlton",appearance:{background:"#3F7DFE",text:"#001157"},id:"10"}],AvatarGroupPlaygroundTemplate=function(_param){var onAvatarSelect=_param.onAvatarSelect,props=AvatarGroupPlayground_template_object_without_properties(_param,["onAvatarSelect"]);return/*#__PURE__*/(0,jsx_runtime.jsxs)(AvatarGroupPlayground_template_Wrapper,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(AvatarGroupPlayground_template_StyledNotificationItem,{displayStatusIcon:!0,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(NotificationItem.Tf,{children:"Группировка. Компонент AvatarGroup."}),/*#__PURE__*/(0,jsx_runtime.jsx)(NotificationItem.Yg,{children:"Компоненты выстраиваются по горизонтали с отрицательным отступом -2px и внешней обводкой 2px в цвет фона страницы. При группировке статусы не отображаются."})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(AvatarGroup,AvatarGroupPlayground_template_object_spread_props(AvatarGroupPlayground_template_object_spread({},props),{items:items,onAvatarSelect:onAvatarSelect||AvatarGroupPlayground_template_onSelectAvatar,"data-dropdown-container-id":"avatar-group-with-dropdown",className:"avatar-group-class"}))]})};try{AvatarGroupPlaygroundTemplate.displayName="AvatarGroupPlaygroundTemplate",AvatarGroupPlaygroundTemplate.__docgenInfo={description:"",displayName:"AvatarGroupPlaygroundTemplate",props:{items:{defaultValue:null,description:"",name:"items",required:!0,type:{name:"AvatarProps[]"}},dimension:{defaultValue:null,description:"Размер компонента",name:"dimension",required:!1,type:{name:"enum",value:[{value:'"s"'},{value:'"m"'},{value:'"xl"'},{value:'"l"'},{value:'"xs"'}]}},dropContainerCssMixin:{defaultValue:null,description:"Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css",name:"dropContainerCssMixin",required:!1,type:{name:"RuleSet<object>"}},dropContainerClassName:{defaultValue:null,description:"Позволяет добавлять класс на контейнер выпадающего меню",name:"dropContainerClassName",required:!1,type:{name:"string"}},dropContainerStyle:{defaultValue:null,description:"Позволяет добавлять стили на контейнер выпадающего меню",name:"dropContainerStyle",required:!1,type:{name:"CSSProperties"}},menuWidth:{defaultValue:null,description:"Ширина меню",name:"menuWidth",required:!1,type:{name:"string"}},menuMaxHeight:{defaultValue:null,description:"Задает максимальную высоту меню",name:"menuMaxHeight",required:!1,type:{name:"string | number"}},appearance:{defaultValue:null,description:"Внешний вид компонента (цвет заливки и текста) - можно выбрать один из четырех исходных вариантов, либо задать свою комбинацию цветов",name:"appearance",required:!1,type:{name:"AvatarAppearance | { background?: string; text?: string; icon?: string | undefined; } | undefined"}},onAvatarSelect:{defaultValue:null,description:"Колбек на выбор аватара (по клику или нажатию клавиши). Возвращает id выбранного аватара",name:"onAvatarSelect",required:!1,type:{name:"((id: string) => void)"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/AvatarGroup/stories/AvatarGroupPlayground.template.tsx#AvatarGroupPlaygroundTemplate"]={docgenInfo:AvatarGroupPlaygroundTemplate.__docgenInfo,name:"AvatarGroupPlaygroundTemplate",path:"src/components/AvatarGroup/stories/AvatarGroupPlayground.template.tsx#AvatarGroupPlaygroundTemplate"})}catch(__react_docgen_typescript_loader_error){}function AvatarGroup_stories_define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function AvatarGroup_stories_object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable}))),ownKeys.forEach(function(key){AvatarGroup_stories_define_property(target,key,source[key])})}return target}let AvatarGroup_stories={title:"Admiral-2.1/AvatarGroup",component:AvatarGroup,parameters:{docs:{source:{code:null}},design:{type:"figma",url:"https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A32367"}},argTypes:{dimension:{options:["xl","l","m","s","xs"],control:{type:"radio"}},items:{control:!1},appearance:{options:["neutral1","neutral2","neutral3","neutral4"],control:{type:"radio"}},dropContainerCssMixin:{control:!1},dropContainerClassName:{control:!1},dropContainerStyle:{control:!1},menuWidth:{control:!1},menuMaxHeight:{control:!1}}};var AvatarGroupPlayground={render:function(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AvatarGroupPlaygroundTemplate,AvatarGroup_stories_object_spread({},props))},parameters:{docs:{source:{code:"import styled from 'styled-components';\n\nimport { AvatarGroup, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';\nimport type { AvatarGroupProps } from '@admiral-ds/react-ui';\nimport { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';\n\nconst Wrapper = styled.div`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n`;\nconst StyledNotificationItem = styled(NotificationItem)`\n  width: 100%;\n`;\n\nconst imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';\n\nconst onSelectAvatar = (id: string) => {\n  // eslint-disable-next-line no-console\n  console.log('Select item with id: ', id);\n};\n\nconst items: AvatarGroupProps['items'] = [\n  { userName: 'Lena Ivanova', icon: <PersonSolid />, id: '1' },\n  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },\n  { userName: 'Agata Petrova', icon: <PersonSolid />, id: '3' },\n  { userName: 'Arina Leskova', appearance: 'neutral3', id: '4' },\n  { userName: 'Rita', appearance: 'neutral4', id: '5' },\n  { userName: 'Важный Кот', icon: <PersonSolid />, href: imageURL, id: '6' },\n  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },\n  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },\n  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },\n  { userName: 'Tom Hidlton', appearance: { background: '#3F7DFE', text: '#001157' }, id: '10' },\n];\n\nexport const AvatarGroupPlaygroundTemplate = ({ onAvatarSelect, ...props }: AvatarGroupProps) => {\n  return (\n    <Wrapper>\n      <StyledNotificationItem displayStatusIcon>\n        <NotificationItemTitle>Группировка. Компонент AvatarGroup.</NotificationItemTitle>\n        <NotificationItemContent>\n          Компоненты выстраиваются по горизонтали с отрицательным отступом -2px и внешней обводкой 2px в цвет фона\n          страницы. При группировке статусы не отображаются.\n        </NotificationItemContent>\n      </StyledNotificationItem>\n      <AvatarGroup\n        {...props}\n        items={items}\n        onAvatarSelect={onAvatarSelect || onSelectAvatar}\n        data-dropdown-container-id=\"avatar-group-with-dropdown\"\n        className=\"avatar-group-class\"\n      />\n    </Wrapper>\n  );\n};\n"}}},name:"AvatarGroup. Playground"},AvatarGroupWidth={render:function(props){return/*#__PURE__*/(0,jsx_runtime.jsx)(AvatarGroupWidthTemplate,AvatarGroup_stories_object_spread({},props))},parameters:{docs:{source:{code:"import styled from 'styled-components';\n\nimport { AvatarGroup, NotificationItem, NotificationItemContent, NotificationItemTitle } from '@admiral-ds/react-ui';\nimport type { AvatarGroupProps } from '@admiral-ds/react-ui';\nimport { ReactComponent as PersonSolid } from '@admiral-ds/icons/build/system/PersonSolid.svg';\n\nconst Wrapper = styled.div`\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 20px;\n`;\nconst StyledNotificationItem = styled(NotificationItem)`\n  width: 100%;\n`;\nconst Separator = styled.div<{ height: number }>`\n  height: ${(p) => p.height}px;\n`;\n\nconst imageURL = 'https://avavatar.ru/images/full/3/Ya4mRgF2LYW9hNdk.jpg';\n\nconst onSelectAvatar = (id: string) => {\n  // eslint-disable-next-line no-console\n  console.log('Select item with id: ', id);\n};\n\nconst items1: AvatarGroupProps['items'] = [\n  { userName: 'Lena Ivanova', icon: <PersonSolid />, id: '1' },\n  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },\n  { userName: 'Agata Petrova', icon: <PersonSolid />, id: '3' },\n  { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4' },\n  { userName: 'Rita', id: '5' },\n  { userName: 'Важный Кот', icon: <PersonSolid />, href: imageURL, id: '6' },\n  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },\n  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },\n  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },\n  { userName: 'Tom Hidlton', id: '10' },\n];\n\nconst items2: AvatarGroupProps['items'] = [\n  {\n    userName: 'Lena Ivanova',\n    icon: <PersonSolid />,\n    id: '1',\n    appearance: { background: '#3F7DFE', icon: '#001157' },\n  },\n  { userName: 'Petr Lesov', icon: <PersonSolid />, id: '2' },\n  { userName: 'Agata Petrova', id: '3', appearance: { background: '#D92020', text: '#FFFFFF' } },\n  { userName: 'Arina Leskova', icon: <PersonSolid />, id: '4' },\n  { userName: 'Rita', appearance: 'neutral2', id: '5' },\n  { userName: 'Важный Кот', icon: <PersonSolid />, href: imageURL, id: '6' },\n  { userName: 'Lisa Kotova', icon: <PersonSolid />, id: '7' },\n  { userName: 'Ирина Глушко', icon: <PersonSolid />, id: '8' },\n  { userName: 'Rosa Farrel', icon: <PersonSolid />, id: '9' },\n  { userName: 'Tom Hidlton', appearance: 'neutral2', id: '10' },\n];\n\nexport const AvatarGroupWidthTemplate = (props: AvatarGroupProps) => {\n  return (\n    <Wrapper>\n      <StyledNotificationItem displayStatusIcon>\n        <NotificationItemTitle>Avatar Group.</NotificationItemTitle>\n        <NotificationItemContent>\n          При достижении условного максимума отображаемых аватаров, последним ставится аватар с отображением количества\n          скрытых элементов.\n          <Separator height={8} />\n          Чтобы задать для всех аватаров, входящих в группу, единый внешний вид, достаточно задать для компонента\n          AvatarGroup соответствующее значение параметра appearance. Если для каких-то аватаров нужно задать отличный от\n          остальных внешний вид, необходимо задать параметр appearance непосредственно для компонента Avatar. Параметр\n          appearance, заданный для Avatar, имеет больший приоритет, чем параметр appearance, заданный для AvatarGroup.\n          <Separator height={8} />\n          Пример AvatarGroup с единым для всех аватаров внешним видом (appearance).\n        </NotificationItemContent>\n      </StyledNotificationItem>\n      <AvatarGroup\n        {...props}\n        style={{ width: '300px' }}\n        items={items1}\n        onAvatarSelect={onSelectAvatar}\n        dropContainerClassName=\"dropContainerClass\"\n      />\n      <StyledNotificationItem displayStatusIcon>\n        <NotificationItemTitle>Avatar Group.</NotificationItemTitle>\n        <NotificationItemContent>\n          Пример AvatarGroup с различными по внешнему виду (appearance) аватарами.\n        </NotificationItemContent>\n      </StyledNotificationItem>\n      <AvatarGroup\n        {...props}\n        style={{ width: '300px' }}\n        items={items2}\n        onAvatarSelect={onSelectAvatar}\n        appearance=\"neutral4\"\n        dropContainerClassName=\"dropContainerClass\"\n        dropContainerStyle={{ width: '250px' }}\n      />\n    </Wrapper>\n  );\n};\n"}}},name:"AvatarGroup. Пример с ограниченной шириной"};AvatarGroupPlayground.parameters={...AvatarGroupPlayground.parameters,docs:{...AvatarGroupPlayground.parameters?.docs,source:{originalSource:"{\n  render: AvatarGroupPlaygroundStory,\n  parameters: {\n    docs: {\n      source: {\n        code: AvatarGroupPlaygroundRaw\n      }\n    }\n  },\n  name: 'AvatarGroup. Playground'\n}",...AvatarGroupPlayground.parameters?.docs?.source}}},AvatarGroupWidth.parameters={...AvatarGroupWidth.parameters,docs:{...AvatarGroupWidth.parameters?.docs,source:{originalSource:"{\n  render: AvatarGroupWidthStory,\n  parameters: {\n    docs: {\n      source: {\n        code: AvatarGroupWidthRaw\n      }\n    }\n  },\n  name: 'AvatarGroup. Пример с ограниченной шириной'\n}",...AvatarGroupWidth.parameters?.docs?.source}}};let __namedExportsOrder=["AvatarGroupPlayground","AvatarGroupWidth"]}}]);