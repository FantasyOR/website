(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[7773],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return m},kt:function(){return d}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=n.createContext({}),c=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},m=function(e){var r=c(e.components);return n.createElement(u.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,m=a(e,["components","mdxType","originalType","parentName"]),s=c(t),d=i,f=s["".concat(u,".").concat(d)]||s[d]||p[d]||o;return t?n.createElement(f,l(l({ref:r},m),{},{components:t})):n.createElement(f,l({ref:r},m))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=t.length,l=new Array(o);l[0]=s;var a={};for(var u in r)hasOwnProperty.call(r,u)&&(a[u]=r[u]);a.originalType=e,a.mdxType="string"==typeof e?e:i,l[1]=a;for(var c=2;c<o;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},7625:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return m},default:function(){return s}});var n=t(2122),i=t(9756),o=(t(7294),t(3905)),l=["components"],a={},u="Member ordering",c={unversionedId:"rules/common/member-ordering",id:"rules/common/member-ordering",isDocsHomePage:!1,title:"Member ordering",description:"Configurable",source:"@site/docs/rules/common/member-ordering.md",sourceDirName:"rules/common",slug:"/rules/common/member-ordering",permalink:"/docs/rules/common/member-ordering",editUrl:"https://github.com/dart-code-checker/website/blob/main/docs/rules/common/member-ordering.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Member ordering extended",permalink:"/docs/rules/common/member-ordering-extended"},next:{title:"New line before return",permalink:"/docs/rules/common/newline-before-return"}},m=[{value:"Rule id",id:"rule-id",children:[]},{value:"Severity",id:"severity",children:[]},{value:"Description",id:"description",children:[{value:"Config example",id:"config-example",children:[]}]}],p={toc:m};function s(e){var r=e.components,t=(0,i.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"member-ordering"},"Member ordering"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/-configurable-informational",alt:"Configurable"})),(0,o.kt)("h2",{id:"rule-id"},"Rule id"),(0,o.kt)("p",null,"member-ordering"),(0,o.kt)("h2",{id:"severity"},"Severity"),(0,o.kt)("p",null,"Style"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Enforces member ordering."),(0,o.kt)("p",null,"The value for ",(0,o.kt)("inlineCode",{parentName:"p"},"order")," may be an array consisting of the following strings (default order listed):"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"public-fields"),(0,o.kt)("li",{parentName:"ul"},"private-fields"),(0,o.kt)("li",{parentName:"ul"},"public-getters"),(0,o.kt)("li",{parentName:"ul"},"private-getters"),(0,o.kt)("li",{parentName:"ul"},"public-setters"),(0,o.kt)("li",{parentName:"ul"},"private-setters"),(0,o.kt)("li",{parentName:"ul"},"constructors"),(0,o.kt)("li",{parentName:"ul"},"public-methods"),(0,o.kt)("li",{parentName:"ul"},"private-methods"),(0,o.kt)("li",{parentName:"ul"},"angular-inputs"),(0,o.kt)("li",{parentName:"ul"},"angular-outputs"),(0,o.kt)("li",{parentName:"ul"},"angular-host-bindings"),(0,o.kt)("li",{parentName:"ul"},"angular-host-listeners"),(0,o.kt)("li",{parentName:"ul"},"angular-view-children"),(0,o.kt)("li",{parentName:"ul"},"angular-content-children")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"alphabetize")," option will enforce that members within the same category should be alphabetically sorted by name."),(0,o.kt)("h3",{id:"config-example"},"Config example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"dart_code_metrics:\n  ...\n  rules:\n    ...\n    - member-ordering:\n        alphabetize: true\n        order:\n          - public-fields\n          - private-fields\n          - constructors\n")))}s.isMDXComponent=!0}}]);