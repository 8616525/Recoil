"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[3590],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function c(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var l=n.createContext({}),u=function(t){var e=n.useContext(l),r=e;return t&&(r="function"==typeof t?t(e):a(a({},e),t)),r},p=function(t){var e=u(t.components);return n.createElement(l.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,i=t.originalType,l=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||s[m]||i;return r?n.createElement(d,a(a({ref:e},p),{},{components:r})):n.createElement(d,a({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=t,c.mdxType="string"==typeof t?t:o,a[1]=c;for(var u=2;u<i;u++)a[u]=r[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9409:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],c={title:"\u7b80\u4ecb"},l=void 0,u={unversionedId:"basic-tutorial/intro",id:"basic-tutorial/intro",title:"\u7b80\u4ecb",description:"\u672c\u7ae0\u8282\u5047\u5b9a\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86 Recoil \u548c React\u3002 \u6709\u5173\u5982\u4f55\u4ece\u5934\u5f00\u59cb\u4f7f\u7528 Recoil \u548c React \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u5feb\u901f\u4e0a\u624b\u9875\u9762\u3002 \u5047\u5b9a\u4ee5\u4e0b\u5404\u7ae0\u8282\u4e2d\u7684\u7ec4\u4ef6\u5728\u7ec4\u4ef6\u6811\u4e2d\u5df2\u5177\u6709 ``\u3002",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/basic-tutorial/intro.md",sourceDirName:"basic-tutorial",slug:"/basic-tutorial/intro",permalink:"/zh-hans/docs/basic-tutorial/intro",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/basic-tutorial/intro.md",tags:[],version:"current",frontMatter:{title:"\u7b80\u4ecb"},sidebar:"docs",previous:{title:"\u5feb\u901f\u4e0a\u624b",permalink:"/zh-hans/docs/introduction/getting-started"},next:{title:"Atom",permalink:"/zh-hans/docs/basic-tutorial/atoms"}},p=[],s={toc:p};function f(t){var e=t.components,r=(0,o.Z)(t,a);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u672c\u7ae0\u8282\u5047\u5b9a\u4f60\u5df2\u7ecf\u5b89\u88c5\u4e86 Recoil \u548c React\u3002 \u6709\u5173\u5982\u4f55\u4ece\u5934\u5f00\u59cb\u4f7f\u7528 Recoil \u548c React \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605",(0,i.kt)("a",{parentName:"p",href:"/docs/introduction/getting-started"},"\u5feb\u901f\u4e0a\u624b"),"\u9875\u9762\u3002 \u5047\u5b9a\u4ee5\u4e0b\u5404\u7ae0\u8282\u4e2d\u7684\u7ec4\u4ef6\u5728\u7ec4\u4ef6\u6811\u4e2d\u5df2\u5177\u6709 ",(0,i.kt)("inlineCode",{parentName:"p"},"<RecoilRoot />"),"\u3002"),(0,i.kt)("p",null,"\u5728\u672c\u6559\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u6784\u5efa\u4e00\u4e2a Todo List \u5e94\u7528\u7a0b\u5e8f\u3002 \u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u5c06\u80fd\u591f\u6267\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 Todo Item"),(0,i.kt)("li",{parentName:"ul"},"\u7f16\u8f91 Todo Item"),(0,i.kt)("li",{parentName:"ul"},"\u5220\u9664 Todo Item"),(0,i.kt)("li",{parentName:"ul"},"\u8fc7\u6ee4 Todo Item"),(0,i.kt)("li",{parentName:"ul"},"\u663e\u793a\u6709\u7528\u7684\u7edf\u8ba1\u4fe1\u606f")),(0,i.kt)("p",null,"\u5728\u6b64\u8fc7\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u4ecb\u7ecd atom\uff0cselector\uff0catom family \u4ee5\u53ca Recoil API \u7684 Hook\u3002 \u6211\u4eec\u8fd8\u5c06\u6db5\u76d6\u4f18\u5316\u7684\u5185\u5bb9\u3002"))}f.isMDXComponent=!0}}]);