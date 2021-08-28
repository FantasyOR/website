(self.webpackChunkdart_code_metrics_website=self.webpackChunkdart_code_metrics_website||[]).push([[7024],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function a(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),d=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=d(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,L=p["".concat(l,".").concat(m)]||p[m]||c[m]||s;return t?r.createElement(L,o(o({ref:n},u),{},{components:t})):r.createElement(L,o({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var s=t.length,o=new Array(s);o[0]=p;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,o[1]=a;for(var d=2;d<s;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5139:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return u},default:function(){return p}});var r=t(2122),i=t(9756),s=(t(7294),t(3905)),o=["components"],a={},l="Always remove listener",d={unversionedId:"rules/flutter/always-remove-listener",id:"rules/flutter/always-remove-listener",isDocsHomePage:!1,title:"Always remove listener",description:"Rule id",source:"@site/docs/rules/flutter/always-remove-listener.md",sourceDirName:"rules/flutter",slug:"/rules/flutter/always-remove-listener",permalink:"/docs/rules/flutter/always-remove-listener",editUrl:"https://github.com/dart-code-checker/website/blob/main/docs/rules/flutter/always-remove-listener.md",tags:[],version:"current",frontMatter:{},sidebar:"sidebar",previous:{title:"Prefer trailing comma",permalink:"/docs/rules/common/prefer-trailing-comma"},next:{title:"Avoid returning widgets",permalink:"/docs/rules/flutter/avoid-returning-widgets"}},u=[{value:"Rule id",id:"rule-id",children:[]},{value:"Severity",id:"severity",children:[]},{value:"Description",id:"description",children:[{value:"Example",id:"example",children:[]}]}],c={toc:u};function p(e){var n=e.components,t=(0,i.Z)(e,o);return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"always-remove-listener"},"Always remove listener"),(0,s.kt)("h2",{id:"rule-id"},"Rule id"),(0,s.kt)("p",null,"always-remove-listener"),(0,s.kt)("h2",{id:"severity"},"Severity"),(0,s.kt)("p",null,"Warning"),(0,s.kt)("h2",{id:"description"},"Description"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Note")," the rule is ",(0,s.kt)("em",{parentName:"p"},"experimental")," and only checks for ",(0,s.kt)("inlineCode",{parentName:"p"},"Listenable")," (and subclasses)."),(0,s.kt)("p",null,"Warns when an event listener is added but never removed."),(0,s.kt)("p",null,"StatefulWidget classes sometimes add event listeners but fail to remove them. This results in memory leaks if the valueListenable lifecycle is significantly longer than the widget."),(0,s.kt)("p",null,"Every listener added manually needs to be removed typically in the dispose method.\nIf listeners are added in ",(0,s.kt)("inlineCode",{parentName:"p"},"didUpdateWidget")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"updateDependencies")," then they also need to be removed from those methods as otherwise widgets end up with multiple listeners."),(0,s.kt)("h3",{id:"example"},"Example"),(0,s.kt)("p",null,"Bad:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"class ShinyWidget {\n  final someListener = Listener();\n  final anotherListener = Listener();\n\n  const ShinyWidget();\n}\n\nclass _ShinyWidgetState extends State {\n  final _someListener = Listener();\n  final _anotherListener = Listener();\n  final _thirdListener = Listener();\n  final _disposedListener = Listener();\n\n  const _ShinyWidgetState();\n\n  @override\n  void initState() {\n    super.initState();\n\n    _someListener.addListener(listener);\n    _anotherListener.addListener(listener); // LINT\n    _thirdListener.addListener(listener); // LINT\n    _disposedListener.addListener(listener);\n\n    widget.someListener.addListener(listener); // LINT\n\n    widget.anotherListener\n      ..addListener(listener)\n      ..addListener(listener)\n      ..addListener(() {}); // LINT\n  }\n\n  @override\n  didUpdateWidget(ShinyWidget oldWidget) {\n    widget.someListener.addListener(listener);\n    oldWidget.someListener.removeListener(listener);\n\n    widget.anotherListener.addListener(listener); // LINT\n\n    _someListener.addListener(listener); // LINT\n\n    _anotherListener.removeListener(listener);\n    _anotherListener.addListener(listener);\n  }\n\n  void dispose() {\n    _someListener.removeListener(listener);\n    _thirdListener.removeListener(wrongListener);\n\n    _disposedListener.dispose();\n\n    widget.anotherListener.removeListener(listener);\n\n    super.dispose();\n  }\n  \n  void listener() {\n    // ...\n  }\n  \n  void wrongListener() {\n    // ...\n  }\n}\n")),(0,s.kt)("p",null,"Good:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-dart"},"class ShinyWidget {\n  final someListener = Listener();\n  final anotherListener = Listener();\n\n  const ShinyWidget();\n}\n\nclass _ShinyWidgetState extends State {\n  final _someListener = Listener();\n  final _disposedListener = Listener();\n\n  const _ShinyWidgetState();\n\n  @override\n  void initState() {\n    super.initState();\n\n    _someListener.addListener(listener);\n\n    _disposedListener.addListener(listener);\n\n    widget.anotherListener.addListener(listener);\n  }\n\n  @override\n  didUpdateWidget(ShinyWidget oldWidget) {\n    widget.someListener.addListener(listener);\n    oldWidget.someListener.removeListener(listener);\n\n    widget.anotherListener.removeListener(listener);\n    widget.anotherListener.addListener(listener);\n    \n    _someListener.removeListener(listener);\n    _someListener.addListener(listener);\n  }\n\n  void dispose() {\n    _someListener.removeListener(listener);\n\n    _disposedListener.dispose();\n\n    widget.anotherListener.removeListener(listener);\n\n    super.dispose();\n  }\n\n  void listener() {\n    // ...\n  }\n}\n")))}p.isMDXComponent=!0}}]);