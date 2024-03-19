"use strict";(self.webpackChunkflash_list=self.webpackChunkflash_list||[]).push([[295],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2416:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],l={id:"performance-troubleshooting",title:"Performance troubleshooting",slug:"/performance-troubleshooting",sidebar_position:1},s=void 0,c={unversionedId:"fundamentals/performance-troubleshooting",id:"fundamentals/performance-troubleshooting",title:"Performance troubleshooting",description:"Profiling",source:"@site/docs/fundamentals/performance-troubleshooting.md",sourceDirName:"fundamentals",slug:"/performance-troubleshooting",permalink:"/flash-list/docs/performance-troubleshooting",editUrl:"https://github.com/Shopify/flash-list/blob/main/documentation/docs/fundamentals/performance-troubleshooting.md",tags:[],version:"current",lastUpdatedBy:"Guilherme Varandas",lastUpdatedAt:1710891035,formattedLastUpdatedAt:"3/19/2024",sidebarPosition:1,frontMatter:{id:"performance-troubleshooting",title:"Performance troubleshooting",slug:"/performance-troubleshooting",sidebar_position:1},sidebar:"autoSidebar",previous:{title:"Metrics",permalink:"/flash-list/docs/metrics"},next:{title:"Estimated Item Size Prop",permalink:"/flash-list/docs/estimated-item-size"}},p=[{value:"Profiling",id:"profiling",children:[],level:2},{value:"How to improve performance",id:"how-to-improve-performance",children:[],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"profiling"},"Profiling"),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Before assessing your list's performance, make sure you are in release mode. On Android, you can disable JS dev mode inside the developer menu, whereas you need to run the release configuration on iOS.\nFlashList can appear to be slower than FlatList in dev mode. The primary reason is a much smaller and fixed ",(0,a.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/virtualizedlist#windowsize"},"window size")," equivalent. Click ",(0,a.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/performance#running-in-development-mode-devtrue"},"here")," to know more about why you shouldn't profile with dev mode on."))),(0,a.kt)("p",null,"The following metrics can be used for profiling the list's overall performance:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"blank area - a size of a visible blank area on scroll.")," Use the built-in ",(0,a.kt)("a",{parentName:"li",href:"/usage#onblankarea"},(0,a.kt)("inlineCode",{parentName:"a"},"onBlankArea"))," event to get it reported. You can also use this event for tracking this metric in production. Alternatively, you can use ",(0,a.kt)("a",{parentName:"li",href:"https://shopify.github.io/react-native-performance/docs/guides/react-native-performance-lists-profiler/"},"react-native-performance-lists-profiler")," package which also comes with a Flipper plugin."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"TTI - time-to-interactive of the list.")," Comes along with blank area as part of ",(0,a.kt)("a",{parentName:"li",href:"https://shopify.github.io/react-native-performance/docs/guides/react-native-performance-lists-profiler/"},"react-native-performance-lists-profiler")," package. This is a great option for local profiling - however, we do not recommend using it currently in production."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"FPS - frames per second.")," For both native and JS FPS, you can either use the built-in performance monitor or we recommend ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/bamlab/react-native-performance"},"this")," opensource plugin. Using native profilers in Xcode and Android Studio is a yet-another option but they track only the native FPS.")),(0,a.kt)("h2",{id:"how-to-improve-performance"},"How to improve performance"),(0,a.kt)("p",null,"If the numbers indicate that the performance is not good enough, you should act - ",(0,a.kt)("strong",{parentName:"p"},"continue ",(0,a.kt)("a",{parentName:"strong",href:"/fundamentals/performant-components"},"here")," to learn more about how to optimize your list.")))}m.isMDXComponent=!0}}]);