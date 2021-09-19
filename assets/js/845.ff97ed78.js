(self.webpackChunknabe_docs=self.webpackChunknabe_docs||[]).push([[845],{6845:function(e,t,n){"use strict";n.d(t,{Z:function(){return U}});var r=n(7462),o=n(3366),l=n(7294),a=n(9105),s=n(6742),c=n(6010),i={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},p={Prism:n(7410).default,theme:i};function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function y(){return y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},y.apply(this,arguments)}var d=/\r\n|\r|\n/,h=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},m=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},g=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=y({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=y({},n,{backgroundColor:null}),o};function f(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var v=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),u(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?g(e.theme,e.language):void 0;return t.themeDict=n})),u(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,l=y({},f(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),a=t.getThemeDict(t.props);return void 0!==a&&(l.style=a.plain),void 0!==o&&(l.style=void 0!==l.style?y({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),u(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return l[n[0]];var a=r?{display:"inline-block"}:{},s=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[a].concat(s))}})),u(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,l=e.token,a=y({},f(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(a.style=void 0!==a.style?y({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),u(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,l=this.getThemeDict(this.props),a=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],l=0,a=0,s=[],c=[s];a>-1;){for(;(l=r[a]++)<o[a];){var i=void 0,p=t[a],u=n[a][l];if("string"==typeof u?(p=a>0?p:["plain"],i=u):(p=m(p,u.type),u.alias&&(p=m(p,u.alias)),i=u.content),"string"==typeof i){var y=i.split(d),g=y.length;s.push({types:p,content:y[0]});for(var f=1;f<g;f++)h(s),c.push(s=[]),s.push({types:p,content:y[f]})}else a++,t.push(p),n.push(i),r.push(0),o.push(i.length)}a--,t.pop(),n.pop(),r.pop(),o.pop()}return h(s),c}(void 0!==a?this.tokenize(t,r,a,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(l.Component),b=v;var k=n(7594),j=n.n(k),E={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]},T=n(5350),x=n(941),Z=function(){var e=(0,x.LU)().prism,t=(0,T.Z)().isDarkTheme,n=e.theme||E,r=e.darkTheme||n;return t?r:n},N=n(4973),C="codeBlockContainer_K1bP",B="codeBlockContent_hGly",P="codeBlockTitle_eoMF",L="codeBlock_23N8",O="copyButton_Ue-o",_="codeBlockLines_39YC",D=/{([\d,-]+)}/,S=["js","jsBlock","jsx","python","html"],w={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},A=["highlight-next-line","highlight-start","highlight-end"],z=function(e){void 0===e&&(e=S);var t=e.map((function(e){var t=w[e],n=t.start,r=t.end;return"(?:"+n+"\\s*("+A.join("|")+")\\s*"+r+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function I(e){var t=e.children,n=e.className,o=e.metastring,a=e.title,s=(0,x.LU)().prism,i=(0,l.useState)(!1),u=i[0],y=i[1],d=(0,l.useState)(!1),h=d[0],m=d[1];(0,l.useEffect)((function(){m(!0)}),[]);var g=(0,x.bc)(o)||a,f=(0,l.useRef)(null),v=[],k=Z(),E=Array.isArray(t)?t.join(""):t;if(o&&D.test(o)){var T=o.match(D)[1];v=j()(T).filter((function(e){return e>0}))}var S=null==n?void 0:n.replace(/language-/,"");!S&&s.defaultLanguage&&(S=s.defaultLanguage);var w=E.replace(/\n$/,"");if(0===v.length&&void 0!==S){for(var A,I="",R=function(e){switch(e){case"js":case"javascript":case"ts":case"typescript":return z(["js","jsBlock"]);case"jsx":case"tsx":return z(["js","jsBlock","jsx"]);case"html":return z(["js","jsBlock","html"]);case"python":case"py":return z(["python"]);default:return z()}}(S),F=E.replace(/\n$/,"").split("\n"),V=0;V<F.length;){var $=V+1,U=F[V].match(R);if(null!==U){switch(U.slice(1).reduce((function(e,t){return e||t}),void 0)){case"highlight-next-line":I+=$+",";break;case"highlight-start":A=$;break;case"highlight-end":I+=A+"-"+($-1)+","}F.splice(V,1)}else V+=1}v=j()(I),w=F.join("\n")}var G=function(){!function(e,t){var n=(void 0===t?{}:t).target,r=void 0===n?document.body:n,o=document.createElement("textarea"),l=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";var a=document.getSelection(),s=!1;a.rangeCount>0&&(s=a.getRangeAt(0)),r.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;var c=!1;try{c=document.execCommand("copy")}catch(i){}o.remove(),s&&(a.removeAllRanges(),a.addRange(s)),l&&l.focus()}(w),y(!0),setTimeout((function(){return y(!1)}),2e3)};return l.createElement(b,(0,r.Z)({},p,{key:String(h),theme:k,code:w,language:S}),(function(e){var t=e.className,n=e.style,o=e.tokens,a=e.getLineProps,s=e.getTokenProps;return l.createElement("div",{className:C},g&&l.createElement("div",{style:n,className:P},g),l.createElement("div",{className:(0,c.Z)(B,S)},l.createElement("pre",{tabIndex:0,className:(0,c.Z)(t,L,"thin-scrollbar"),style:n},l.createElement("code",{className:_},o.map((function(e,t){1===e.length&&""===e[0].content&&(e[0].content="\n");var n=a({line:e,key:t});return v.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),l.createElement("span",(0,r.Z)({key:t},n),e.map((function(e,t){return l.createElement("span",(0,r.Z)({key:t},s({token:e,key:t})))})))})))),l.createElement("button",{ref:f,type:"button","aria-label":(0,N.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,c.Z)(O,"clean-btn"),onClick:G},u?l.createElement(N.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):l.createElement(N.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}var R=n(6159),F="details_1VDD";function V(e){var t=Object.assign({},e);return l.createElement(x.PO,(0,r.Z)({},t,{className:(0,c.Z)("alert alert--info",F,t.className)}))}var $=["mdxType","originalType"];var U={head:function(e){var t=l.Children.map(e.children,(function(e){return function(e){var t,n;if(null!=e&&null!=(t=e.props)&&t.mdxType&&null!=e&&null!=(n=e.props)&&n.originalType){var r=e.props,a=(r.mdxType,r.originalType,(0,o.Z)(r,$));return l.createElement(e.props.originalType,a)}return e}(e)}));return l.createElement(a.Z,e,t)},code:function(e){var t=e.children;return(0,l.isValidElement)(t)?t:t.includes("\n")?l.createElement(I,e):l.createElement("code",e)},a:function(e){return l.createElement(s.Z,e)},pre:function(e){var t,n=e.children;return(0,l.isValidElement)(n)&&(0,l.isValidElement)(null==n||null==(t=n.props)?void 0:t.children)?n.props.children:l.createElement(I,(0,l.isValidElement)(n)?null==n?void 0:n.props:Object.assign({},e))},details:function(e){var t=l.Children.toArray(e.children),n=t.find((function(e){var t;return"summary"===(null==e||null==(t=e.props)?void 0:t.mdxType)})),o=l.createElement(l.Fragment,null,t.filter((function(e){return e!==n})));return l.createElement(V,(0,r.Z)({},e,{summary:n}),o)},h1:(0,R.Z)("h1"),h2:(0,R.Z)("h2"),h3:(0,R.Z)("h3"),h4:(0,R.Z)("h4"),h5:(0,R.Z)("h5"),h6:(0,R.Z)("h6")}},7594:function(e,t){function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);