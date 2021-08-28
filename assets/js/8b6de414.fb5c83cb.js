(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[5284],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return m},kt:function(){return g}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),o=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=o(t),g=a,d=p["".concat(u,".").concat(g)]||p[g]||c[g]||i;return t?r.createElement(d,s(s({ref:n},m),{},{components:t})):r.createElement(d,s({ref:n},m))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=p;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=t[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},2002:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return o},toc:function(){return m},default:function(){return p}});var r=t(2122),a=t(9756),i=(t(7294),t(3905)),s=["components"],l={},u="Provide correct intl args",o={unversionedId:"rules/intl/provide-correct-intl-args",id:"rules/intl/provide-correct-intl-args",isDocsHomePage:!1,title:"Provide correct intl args",description:"Rule id",source:"@site/docs/rules/intl/provide-correct-intl-args.md",sourceDirName:"rules/intl",slug:"/rules/intl/provide-correct-intl-args",permalink:"/docs/rules/intl/provide-correct-intl-args",editUrl:"https://github.com/dart-code-checker/website/blob/main/docs/rules/intl/provide-correct-intl-args.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Prefer Intl name",permalink:"/docs/rules/intl/prefer-intl-name"},next:{title:"Avoid preserveWhitespace: false",permalink:"/docs/rules/angular/avoid-preserve-whitespace-false"}},m=[{value:"Rule id",id:"rule-id",children:[]},{value:"Severity",id:"severity",children:[]},{value:"Description",id:"description",children:[{value:"Example",id:"example",children:[]}]}],c={toc:m};function p(e){var n=e.components,t=(0,a.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"provide-correct-intl-args"},"Provide correct intl args"),(0,i.kt)("h2",{id:"rule-id"},"Rule id"),(0,i.kt)("p",null,"provide-correct-intl-args"),(0,i.kt)("h2",{id:"severity"},"Severity"),(0,i.kt)("p",null,"Warning"),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Warns when the ",(0,i.kt)("inlineCode",{parentName:"p"},"Intl.message()")," invocation has incorrect ",(0,i.kt)("inlineCode",{parentName:"p"},"args")," list."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("p",null,"Bad:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:intl/intl.dart';    \n\nclass SomeButtonClassI18n {\n  static const int value = 0;\n  static const String name = 'name';\n\n  static String simpleTitleNotExistArgsIssue(String name) {\n    return Intl.message(\n      'title',\n      name: 'SomeButtonClassI18n_simpleTitleNotExistArgsIssue',\n    );\n  }\n  \n  static String simpleTitleArgsMustBeOmittedIssue1() {\n    return Intl.message(\n      'title $name',\n      name: 'SomeButtonClassI18n_simpleTitleArgsMustBeOmittedIssue1',\n      args:  [name]\n    );\n  }  \n  \n  static String simpleTitleArgsMustBeOmittedIssue2() {\n    return Intl.message(\n      'title',\n      name: 'SomeButtonClassI18n_simpleTitleArgsMustBeOmittedIssue2',\n      args:  [name]\n    );\n  }  \n  \n  static String simpleArgsItemMustBeOmittedIssue(int value) {\n    return Intl.message(\n      'title $value',\n      name: 'SomeButtonClassI18n_simpleArgsItemMustBeOmittedIssue',\n      args:  [value, name]\n    );\n  }  \n  \n  static String simpleParameterMustBeOmittedIssue(String name, int value) {\n    return Intl.message(\n      'title $value',\n      name: 'SomeButtonClassI18n_simpleParameterMustBeOmittedIssue',\n      args:  [value, name]\n    );\n  }  \n  \n  static String simpleMustBeSimpleIdentifierIssue1(int value) {\n    return Intl.message(\n      'title ${value+1}',\n      name: 'SomeButtonClassI18n_simpleMustBeSimpleIdentifierIssue1',\n      args:  [value]\n    );\n  }  \n  \n  static String simpleMustBeSimpleIdentifierIssue2(int value) {\n    return Intl.message(\n      'title $value',\n      name: 'SomeButtonClassI18n_simpleMustBeSimpleIdentifierIssue2',\n      args:  [value+1]\n    );\n  }  \n  \n  static String simpleParameterMustBeInArgsIssue(int value, String name) {\n    return Intl.message(\n      'title $value, name: $name',\n      name: 'SomeButtonClassI18n_simpleParameterMustBeInArgsIssue',\n      args:  [value]\n    );\n  }\n  \n  static String simpleArgsMustBeInParameterIssue(int value) {\n    return Intl.message(\n      'title $value, name: $name',\n      name: 'SomeButtonClassI18n_simpleArgsMustBeInParameterIssue',\n      args:  [value, name]\n    );\n  }\n  \n  static String simpleInterpolationMustBeInArgsIssue(int value, String name) {\n    return Intl.message(\n      'title $value, name: $name',\n      name: 'SomeButtonClassI18n_simpleInterpolationMustBeInArgsIssue',\n      args:  [value]\n    );\n  }\n  \n  static String simpleInterpolationMustBeInParameterIssue(int value) {\n    return Intl.message(\n      'title $value, name: $name',\n      name: 'SomeButtonClassI18n_simpleInterpolationMustBeInParameterIssue',\n      args:  [value, name]\n    );\n  } \n}\n")),(0,i.kt)("p",null,"Good:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:intl/intl.dart';    \n\nclass SomeButtonClassI18n {\n\n  static String simpleTitle() {\n    return Intl.message(\n      'title',\n      name: 'SomeButtonClassI18n_simpleTitle',\n    );\n  }\n\n  static String titleWithParameter(String name) {\n    return Intl.message(\n      'title $name',\n      name: 'SomeButtonClassI18n_titleWithParameter',\n      args: [name],\n    );\n  }\n\n  static String titleWithManyParameter(String name, int value) {\n    return Intl.message(\n      'title $name, value: $value',\n      name: 'SomeButtonClassI18n_titleWithManyParameter',\n      args: [name, value],\n    );\n  }\n\n  static String titleWithOptionalParameter({String name}) {\n    return Intl.message(\n      'title $name',\n      name: 'SomeButtonClassI18n_titleWithOptionalParameter',\n      args: [name],\n    );\n  }\n\n  static String titleWithManyOptionalParameter({String name, int value}) {\n    return Intl.message(\n      'title $name, value: $value',\n      name: 'SomeButtonClassI18n_titleWithOptionalParameter',\n      args: [name, value],\n    );\n  }\n\n  static String titleWithPositionParameter([String name]) {\n    return Intl.message(\n      'title $name',\n      name: 'SomeButtonClassI18n_titleWithPositionParameter',\n      args: [name],\n    );\n  }\n\n  static String titleWithManyPositionParameter([String name, int value]) {\n    return Intl.message(\n      'title $name, value: $value',\n      name: 'SomeButtonClassI18n_titleWithManyPositionParameter',\n      args: [name, value],\n    );\n  }\n}\n")))}p.isMDXComponent=!0}}]);