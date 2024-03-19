"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[812],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),c=r,f=u["".concat(s,".").concat(c)]||u[c]||m[c]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},728:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],l={id:"masonry",title:"Masonry Layout"},s=void 0,p={unversionedId:"guides/masonry",id:"guides/masonry",title:"Masonry Layout",description:"Masonry Layout allows you to create a grid of items with different heights. It is a great way to display a collection of images with different sizes.",source:"@site/docs/guides/masonry-layout.md",sourceDirName:"guides",slug:"/guides/masonry",permalink:"/flash-list/docs/guides/masonry",editUrl:"https://github.com/Shopify/flash-list/blob/main/documentation/docs/guides/masonry-layout.md",tags:[],version:"current",lastUpdatedBy:"Guilherme Varandas",lastUpdatedAt:1710891035,formattedLastUpdatedAt:"3/19/2024",frontMatter:{id:"masonry",title:"Masonry Layout"},sidebar:"autoSidebar",previous:{title:"Manual linking",permalink:"/flash-list/docs/guides/manual-linking"},next:{title:"React Native Reanimated",permalink:"/flash-list/docs/guides/reanimated"}},d=[{value:"Unsupported Props",id:"unsupported-props",children:[],level:2},{value:"Additional Props",id:"additional-props",children:[{value:"<code>optimizeItemArrangement</code>",id:"optimizeitemarrangement",children:[],level:3},{value:"<code>getColumnFlex</code>",id:"getcolumnflex",children:[],level:3}],level:2},{value:"Additional information in <code>renderItem</code> arguments",id:"additional-information-in-renderitem-arguments",children:[],level:2},{value:"Methods",id:"methods",children:[{value:"<code>scrollToEnd()</code>",id:"scrolltoend",children:[],level:3},{value:"<code>scrollToOffset()</code>",id:"scrolltooffset",children:[],level:3}],level:2}],m={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Masonry Layout allows you to create a grid of items with different heights. It is a great way to display a collection of images with different sizes."),(0,i.kt)("div",{align:"center"},(0,i.kt)("img",{src:"https://user-images.githubusercontent.com/7811728/188055598-41f5c961-0dd0-4bb9-bc6e-22d78596a036.png",height:"500"})),(0,i.kt)("p",null,"To get started, import ",(0,i.kt)("inlineCode",{parentName:"p"},"MasonryFlashList")," from ",(0,i.kt)("inlineCode",{parentName:"p"},"@shopify/flash-list")," and use it just like you would use ",(0,i.kt)("inlineCode",{parentName:"p"},"FlashList"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import React from "react";\nimport { View, Text, StatusBar } from "react-native";\nimport { MasonryFlashList } from "@shopify/flash-list";\nimport { DATA } from "./data";\n\nconst MyMasonryList = () => {\n  return (\n    <MasonryFlashList\n      data={DATA}\n      numColumns={2}\n      renderItem={({ item }) => <Text>{item.title}</Text>}\n      estimatedItemSize={200}\n    />\n  );\n};\n')),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," If you want ",(0,i.kt)("inlineCode",{parentName:"p"},"MasonryFlashList")," to optimize item arrangement, enable ",(0,i.kt)("inlineCode",{parentName:"p"},"optimizeItemArrangement")," and pass a valid ",(0,i.kt)("a",{parentName:"p",href:"/flash-list/docs/usage#overrideitemlayout"},(0,i.kt)("inlineCode",{parentName:"a"},"overrideItemLayout"))," function."),(0,i.kt)("h2",{id:"unsupported-props"},"Unsupported Props"),(0,i.kt)("p",null,"There are some props that ",(0,i.kt)("inlineCode",{parentName:"p"},"MasonryFlashList")," does not support when compared to ",(0,i.kt)("inlineCode",{parentName:"p"},"FlashList"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/flash-list/docs/usage#horizontal"},(0,i.kt)("inlineCode",{parentName:"a"},"horizontal"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/flash-list/docs/usage#inverted"},(0,i.kt)("inlineCode",{parentName:"a"},"inverted"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/flash-list/docs/usage#initialscrollindex"},(0,i.kt)("inlineCode",{parentName:"a"},"initialScrollIndex"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/flash-list/docs/usage#viewabilityconfigcallbackpairs"},(0,i.kt)("inlineCode",{parentName:"a"},"viewabilityConfigCallbackPairs"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/flash-list/docs/usage#onblankarea"},(0,i.kt)("inlineCode",{parentName:"a"},"onBlankArea")))),(0,i.kt)("h2",{id:"additional-props"},"Additional Props"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MasonryFlashList")," supports these additional props on top of ",(0,i.kt)("inlineCode",{parentName:"p"},"FlashList"),":"),(0,i.kt)("h3",{id:"optimizeitemarrangement"},(0,i.kt)("inlineCode",{parentName:"h3"},"optimizeItemArrangement")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"optimizeItemArrangement?: boolean;\n")),(0,i.kt)("p",null,"If enabled, MasonryFlashList will try to reduce difference in column height by modifying item order. If ",(0,i.kt)("inlineCode",{parentName:"p"},"true"),", specifying ",(0,i.kt)("a",{parentName:"p",href:"/flash-list/docs/usage#overrideitemlayout"},(0,i.kt)("inlineCode",{parentName:"a"},"overrideItemLayout"))," is required. Default value is ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,i.kt)("h3",{id:"getcolumnflex"},(0,i.kt)("inlineCode",{parentName:"h3"},"getColumnFlex")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"getColumnFlex?: (\n  items: T[],\n  columnIndex: number,\n  maxColumns: number,\n  extraData?: any\n) => number;\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"getColumnFlex")," allows you to change the column widths of the list. This is helpful if you want some columns to be wider than the others."),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// if `numColumns` is `3`, you can return `2` for `index 1` and `1` for the rest to achieve a `1:2:1` split by width.\ngetColumnFlex={(items, index, maxColumns, extraData) => {\n    return index === 1 ? 2 : 1;\n}}\n")),(0,i.kt)("h2",{id:"additional-information-in-renderitem-arguments"},"Additional information in ",(0,i.kt)("inlineCode",{parentName:"h2"},"renderItem")," arguments"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"export interface MasonryListRenderItemInfo<TItem>\n  extends ListRenderItemInfo<TItem> {\n  columnSpan: number;\n  columnIndex: number;\n}\n")),(0,i.kt)("p",null,"When using ",(0,i.kt)("inlineCode",{parentName:"p"},"MasonryFlashList")," the ",(0,i.kt)("inlineCode",{parentName:"p"},"renderItem")," prop callback will be called with two additional properties on the ",(0,i.kt)("inlineCode",{parentName:"p"},"info")," object."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"columnIndex"),": A number representing the index of the column in which the item is rendered. When using ",(0,i.kt)("inlineCode",{parentName:"p"},"optimizeItemArrangement")," this becomes more important as the items are no longer spread linearly across the columns."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"columnSpan"),": A number representing how many columns a given item may span, for now this will always return ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),"."),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"MasonryFlashList")," exposes the some methods that ",(0,i.kt)("inlineCode",{parentName:"p"},"FlashList")," does. These are:"),(0,i.kt)("h3",{id:"scrolltoend"},(0,i.kt)("inlineCode",{parentName:"h3"},"scrollToEnd()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"scrollToEnd?: (params?: { animated?: boolean | null | undefined });\n")),(0,i.kt)("p",null,"Scrolls to the end of the content."),(0,i.kt)("h3",{id:"scrolltooffset"},(0,i.kt)("inlineCode",{parentName:"h3"},"scrollToOffset()")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"scrollToOffset(params: {\n  animated?: boolean | null | undefined;\n  offset: number;\n});\n")),(0,i.kt)("p",null,"Scroll to a specific content pixel offset in the list."),(0,i.kt)("p",null,"Parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"offset")," expects the offset to scroll to."),(0,i.kt)("p",null,"Parameter ",(0,i.kt)("inlineCode",{parentName:"p"},"animated")," (",(0,i.kt)("inlineCode",{parentName:"p"},"false")," by default) defines whether the list should animate while scrolling."))}u.isMDXComponent=!0}}]);