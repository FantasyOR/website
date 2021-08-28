(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[9259],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=r.createContext({}),d=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(c.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,f=p["".concat(c,".").concat(m)]||p[m]||s[m]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=p;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},874:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=t(2122),i=t(9756),a=(t(7294),t(3905)),o=["components"],l={},c="Avoid late keyword",d={unversionedId:"rules/common/avoid-late-keyword",id:"rules/common/avoid-late-keyword",isDocsHomePage:!1,title:"Avoid late keyword",description:"Rule id",source:"@site/docs/rules/common/avoid-late-keyword.md",sourceDirName:"rules/common",slug:"/rules/common/avoid-late-keyword",permalink:"/docs/rules/common/avoid-late-keyword",editUrl:"https://github.com/dart-code-checker/website/blob/main/docs/rules/common/avoid-late-keyword.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Avoid ignoring return values",permalink:"/docs/rules/common/avoid-ignoring-return-values"},next:{title:"Avoid non null assertion",permalink:"/docs/rules/common/avoid-non-null-assertion"}},u=[{value:"Rule id",id:"rule-id",children:[]},{value:"Severity",id:"severity",children:[]},{value:"Description",id:"description",children:[{value:"Example",id:"example",children:[]}]}],s={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"avoid-late-keyword"},"Avoid late keyword"),(0,a.kt)("h2",{id:"rule-id"},"Rule id"),(0,a.kt)("p",null,"avoid-late-keyword"),(0,a.kt)("h2",{id:"severity"},"Severity"),(0,a.kt)("p",null,"Warning"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Warns when a field or variable is declared with a ",(0,a.kt)("inlineCode",{parentName:"p"},"late")," keyword."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"late")," keyword enforces a variable's constraints at runtime instead of at compile time and since the variable is not definitely initialized, every time it is read, a runtime check is inserted to make sure it has been assigned a value. If it hasn\u2019t, an exception will be thrown."),(0,a.kt)("p",null,"Use this rule if you want to avoid unexpected runtime exceptions."),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("p",null,"Bad:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class Test {\n  late final field = 'string'; // LINT\n\n  final String anotherField = '';\n\n  String? nullableField;\n\n  late String uninitializedField; // LINT\n\n  void method() {\n    late final variable = 'string'; // LINT\n\n    final anotherVariable = '';\n\n    String? nullableVariable;\n\n    late String uninitializedVariable; // LINT\n  }\n}\n")),(0,a.kt)("p",null,"Good:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-dart"},"class Test {\n  final field = 'string';\n\n  final String anotherField = '';\n\n  String? nullableField;\n\n  String uninitializedField;\n\n  void method() {\n    final variable = 'string';\n\n    final anotherVariable = '';\n\n    String? nullableVariable;\n\n    String uninitializedVariable;\n  }\n}\n")))}p.isMDXComponent=!0}}]);