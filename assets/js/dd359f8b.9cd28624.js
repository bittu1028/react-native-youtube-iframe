(self.webpackChunkreact_native_youtube_iframe=self.webpackChunkreact_native_youtube_iframe||[]).push([[601],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return v}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(n),v=o,h=m["".concat(u,".").concat(v)]||m[v]||p[v]||a;return n?r.createElement(h,i(i({ref:t},s),{},{components:n})):r.createElement(h,i({ref:t},s))}));function v(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9078:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(4034),o=n(9973),a=(n(7294),n(3905)),i={id:"remove-context-share",title:"Remove Context Menu"},l=void 0,u={unversionedId:"remove-context-share",id:"remove-context-share",isDocsHomePage:!1,title:"Remove Context Menu",description:"---",source:"@site/../docs/remove-context-share.mdx",sourceDirName:".",slug:"/remove-context-share",permalink:"/react-native-youtube-iframe/remove-context-share",version:"current",frontMatter:{id:"remove-context-share",title:"Remove Context Menu"},sidebar:"sideBar",previous:{title:"Google Play Store",permalink:"/react-native-youtube-iframe/play-store-compatibility"},next:{title:"Show elapsed time",permalink:"/react-native-youtube-iframe/elapsed-time"}},c=[{value:"Removing context menu on long-press:",id:"removing-context-menu-on-long-press",children:[]},{value:"Removing context menu on kebab menu (prevent share):",id:"removing-context-menu-on-kebab-menu-prevent-share",children:[]}],s={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"removing-context-menu-on-long-press"},"Removing context menu on long-press:"),(0,a.kt)("p",null,"Wrap the ",(0,a.kt)("inlineCode",{parentName:"p"},"<YoutubePlayer />")," in a View that has ",(0,a.kt)("inlineCode",{parentName:"p"},'pointerEvents="none"')," to disable app touch-events to the player."),(0,a.kt)("p",null,"Then react-native's ",(0,a.kt)("a",{parentName:"p",href:"https://reactnative.dev/docs/pressable"},"Pressable API")," or any of the touchables to intercept presses."),(0,a.kt)("p",null,"example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Pressable\n  onPress={() => {\n    // handle or ignore\n  }}\n  onLongPress={() => {\n    // handle or ignore\n  }}>\n\n  <View pointerEvents="none">\n    <YoutubePlayer (...) />\n  </View>\n\n</Pressable>\n')),(0,a.kt)("h3",{id:"removing-context-menu-on-kebab-menu-prevent-share"},"Removing context menu on kebab menu (prevent share):"),(0,a.kt)("p",null,"It is not possible to change to UI of the player. You can however achieve this by placing an absolutely positioned view on the player (either fully covering the player or just tall enough to cover the title) to prevent the webview from receiving user touches. This will not remove the logo or three dots, but will make it un-interactable."),(0,a.kt)("p",null,"example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<View>\n  <YoutubePlayer height={300} videoId={'XSqi5s3rfqk'} />\n  <TouchableOpacity\n    // TouchableOpacity to \"steal\" taps\n    // absolutely positioned to the top\n    // height must be adjusted to\n    // just cover the top 3 dots\n    style={{\n      top: 0,\n      height: 50,\n      width: '100%',\n      position: 'absolute',\n    }}\n  />\n</View>\n")))}p.isMDXComponent=!0}}]);