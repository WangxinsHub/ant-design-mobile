webpackJsonp([32,141],{6:function(n,a,s){"use strict";s(14),s(13),s(12)},11:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var p=s(15),e=t(p);a["default"]=function(n){if(Array.isArray(n)){for(var a=0,s=Array(n.length);a<n.length;a++)s[a]=n[a];return s}return(0,e["default"])(n)}},12:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=s(11);t(p)},13:function(n,a){},14:function(n,a){},15:function(n,a,s){n.exports={"default":s(16),__esModule:!0}},16:function(n,a,s){s(30),s(18),n.exports=s(20).Array.from},17:function(n,a,s){"use strict";var t=s(25),p=s(29);n.exports=function(n,a,s){a in n?t.f(n,a,p(0,s)):n[a]=s}},18:function(n,a,s){"use strict";var t=s(28),p=s(22),e=s(26),o=s(34),c=s(33),l=s(31),u=s(17),i=s(32);p(p.S+p.F*!s(35)(function(n){Array.from(n)}),"Array",{from:function(n){var a,s,p,k,r=e(n),d="function"==typeof this?this:Array,m=arguments.length,g=m>1?arguments[1]:void 0,f=void 0!==g,v=0,y=i(r);if(f&&(g=t(g,m>2?arguments[2]:void 0,2)),void 0==y||d==Array&&c(y))for(a=l(r.length),s=new d(a);a>v;v++)u(s,v,f?g(r[v],v):r[v]);else for(k=y.call(r),s=new d;!(p=k.next()).done;v++)u(s,v,f?o(k,g,[p.value,v],!0):p.value);return s.length=v,s}})},23:function(n,a,s){"use strict";s(36)},27:function(n,a,s){"use strict";s(6),s(37)},36:function(n,a){},37:function(n,a){},42:function(n,a,s){"use strict";s(6),s(44)},43:function(n,a,s){"use strict";s(6),s(23),s(50)},44:function(n,a){},50:function(n,a){},216:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(10),e=t(p),o=s(3),c=t(o),l=s(5),u=t(l),i=s(4),k=t(i),r=s(1),d=t(r),m=s(7),g=t(m),f=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.className,p=a.animating,o=a.toast,c=a.size,l=a.text,u=(0,g["default"])(s,t,(n={},(0,e["default"])(n,s+"-lg","large"===c),(0,e["default"])(n,s+"-sm","small"===c),(0,e["default"])(n,s+"-toast",!!o),n)),i=(0,g["default"])(s+"-spinner",(0,e["default"])({},s+"-spinner-lg",!!o||"large"===c));return p?o?d["default"].createElement("div",{className:u},l?d["default"].createElement("div",{className:s+"-content"},d["default"].createElement("span",{className:i,"aria-hidden":"true"}),d["default"].createElement("span",{className:s+"-toast"},l)):d["default"].createElement("div",{className:s+"-content"},d["default"].createElement("span",{className:i,"aria-label":"Loading"}))):l?d["default"].createElement("div",{className:u},d["default"].createElement("span",{className:i,"aria-hidden":"true"}),d["default"].createElement("span",{className:s+"-tip"},l)):d["default"].createElement("div",{className:u},d["default"].createElement("span",{className:i,"aria-label":"loading"})):null},a}(d["default"].Component);a["default"]=f,f.defaultProps={prefixCls:"am-activity-indicator",animating:!0,size:"small",panelColor:"rgba(34,34,34,0.6)",toast:!1},n.exports=a["default"]},217:function(n,a,s){"use strict";s(6),s(327)},327:function(n,a){},571:function(n,a,s){n.exports={content:[["p","Basic usage"]],meta:{order:0,title:{"zh-CN":"\u57fa\u672c","en-US":"Basic"},filename:"components/activity-indicator/demo/basic.md",id:"components-activity-indicator-demo-basic"},highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ActivityIndicator<span class="token punctuation">,</span> WingBlank<span class="token punctuation">,</span> WhiteSpace<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'antd-mobile\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">App</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token punctuation">{</span>\n      animating<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>closeTimer<span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  showToast <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> animating<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>animating <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span>closeTimer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> animating<span class="token punctuation">:</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>animating <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WingBlank</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Without text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span> <span class="token attr-name">animating</span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>With text<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span>\n                <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Loading...<span class="token punctuation">"</span></span>\n              <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sub-title<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>With large size and customized text style<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>loading-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>align<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>large<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n                <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">style</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> marginTop<span class="token punctuation">:</span> <span class="token number">8</span> <span class="token punctuation">}</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span>Loading<span class="token operator">...</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toast-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>WhiteSpace</span> <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>xl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showToast<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>click to show Toast<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>toast-example<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n              <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ActivityIndicator</span>\n                <span class="token attr-name">toast</span>\n                <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Loading...<span class="token punctuation">"</span></span>\n                <span class="token attr-name">animating</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>animating<span class="token punctuation">}</span></span>\n              <span class="token punctuation">/></span></span>\n            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>WingBlank</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'}],preview:function(){function n(n){return n&&n.__esModule?n:{"default":n}}function a(n,a){for(var s=Object.getOwnPropertyNames(a),t=0;t<s.length;t++){var p=s[t],e=Object.getOwnPropertyDescriptor(a,p);e&&e.configurable&&void 0===n[p]&&Object.defineProperty(n,p,e)}return n}function t(n,a){if(!(n instanceof a))throw new TypeError("Cannot call a class as a function")}function p(n,a){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?n:a}function e(n,s){if("function"!=typeof s&&null!==s)throw new TypeError("Super expression must either be null or a function, not "+typeof s);n.prototype=Object.create(s&&s.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),s&&(Object.setPrototypeOf?Object.setPrototypeOf(n,s):a(n,s))}var o=s(1),c=(s(1),s(42),s(65)),l=n(c),u=(s(43),s(64)),i=n(u),k=(s(27),s(41)),r=n(k),d=(s(217),s(216)),m=n(d),g=function(n){function a(s){t(this,a);var e=p(this,n.call(this,s));return e.showToast=function(){e.setState({animating:!e.state.animating}),e.closeTimer=setTimeout(function(){e.setState({animating:!e.state.animating})},1e3)},e.state={animating:!1},e}return e(a,n),a.prototype.componentWillUnmount=function(){clearTimeout(this.closeTimer)},a.prototype.render=function(){return o.createElement("div",null,o.createElement(l["default"],null,o.createElement("div",{className:"loading-container"},o.createElement("p",{className:"sub-title"},"Without text"),o.createElement("div",{className:"loading-example"},o.createElement(m["default"],{animating:!0})),o.createElement("p",{className:"sub-title"},"With text"),o.createElement("div",{className:"loading-example"},o.createElement(m["default"],{text:"Loading..."})),o.createElement("p",{className:"sub-title"},"With large size and customized text style"),o.createElement("div",{className:"loading-example"},o.createElement("div",{className:"align"},o.createElement(m["default"],{size:"large"}),o.createElement("span",{style:{marginTop:8}},"Loading...")))),o.createElement("div",{className:"toast-container"},o.createElement(r["default"],{size:"xl"}),o.createElement(i["default"],{onClick:this.showToast},"click to show Toast"),o.createElement("div",{className:"toast-example"},o.createElement(m["default"],{toast:!0,text:"Loading...",animating:this.state.animating})))))},a}(o.Component);return o.createElement(g,null)},style:".loading-example {\n  display: flex;\n  justify-content: flex-start;\n}\n.align {\n  display: flex;\n  flex-direction: column;\n}\n.sub-title {\n  color: #888;\n  font-size: 14px;\n  padding: 30px 0 18px 0;\n}",highlightedStyle:'<span class="token selector"><span class="token class">.loading-example</span> </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">justify-content</span><span class="token punctuation">:</span> flex-start<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.align</span> </span><span class="token punctuation">{</span>\n  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>\n  <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n<span class="token selector"><span class="token class">.sub-title</span> </span><span class="token punctuation">{</span>\n  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token hexcode">#888</span><span class="token punctuation">;</span>\n  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token number">14</span>px<span class="token punctuation">;</span>\n  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token number">30</span>px <span class="token number">0</span> <span class="token number">18</span>px <span class="token number">0</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>'}},735:function(n,a,s){n.exports={basic:s(571)}}});