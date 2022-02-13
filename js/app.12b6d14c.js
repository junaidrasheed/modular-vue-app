(function(e){function t(t){for(var r,a,i=t[0],c=t[1],l=t[2],s=0,p=[];s<i.length;s++)a=i[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(p.length)p.shift()();return u.push.apply(u,l||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},u=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0aa1f6":"184180f6","chunk-2d0ab4d6":"b4b94767","chunk-2d0b9a05":"714c4968","chunk-2d23064b":"9f195b7a"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var u,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=a(e);var l=new Error;u=function(t){c.onerror=c.onload=null,clearTimeout(s);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),u=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+r+": "+u+")",l.name="ChunkLoadError",l.type=r,l.request=u,n[1](l)}o[e]=void 0}};var s=setTimeout((function(){u({type:"timeout",target:c})}),12e4);c.onerror=c.onload=u,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/modular-vue-app/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var s=0;s<c.length;s++)t(c[s]);var d=l;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"flex w-full bg-gray-100 justify-center py-1 space-x-1"},[e._l(e.navItems,(function(t,r){return[n("router-link",{key:r,attrs:{to:t.link}},[n("div",{staticClass:"rounded cursor-pointer transition duration-100 text-sm ease-in-out px-4 py-2 hover:bg-indigo-400 hover:text-blue-100",class:{"bg-gradient-to-r from-indigo-500 to-blue-500 text-blue-100":e.$route.path==t.link}},[e._v(" "+e._s(t.text)+" ")])])]}))],2),n("div",{staticClass:"bg-gray-200 h-screen"},[n("router-view")],1)])},u=[],a={name:"App",data:function(){return{navItems:[{link:"/",text:"Home"},{link:"/module_1",text:"Module 1"},{link:"/module_2",text:"Module 2"}]}}},i=a,c=n("2877"),l=Object(c["a"])(i,o,u,!1,null,null,null),s=l.exports,d=n("2f62");r["a"].use(d["a"]);var p=new d["a"].Store({state:{},mutations:{},actions:{},modules:{}}),f=n("8c4f"),h=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},b=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"flex flex-col items-center justify-center pt-16"},[n("div",{staticClass:"text-center space-y-8"},[n("span",{staticClass:"text-2xl uppercase"},[e._v(" A modular approach to Vue ")]),n("p",{staticClass:"leading-5 w-2/3 text-center mx-auto"},[e._v(' This app contains a sample application of how Vue can be used in modular way. Built using Vue 2 and Tailwind CSS. This is the Home.vue file which is serving as the Home component for the default "/" route. ')])])])}],m={name:"Home"},v=m,y=Object(c["a"])(v,h,b,!1,null,null,null),g=y.exports;r["a"].use(f["a"]);var x=[{path:"/",name:"Home",component:g}],w=new f["a"]({mode:"history",base:"/modular-vue-app",routes:x}),_=w,k=(n("db43"),n("ba8c"),n("d3b7"),n("3ca3"),n("ddb0"),function(){return n.e("chunk-2d0aa1f6").then(n.bind(null,"1056"))}),j=function(){return n.e("chunk-2d0ab4d6").then(n.bind(null,"1562"))},O={path:"/module_1",component:k,children:[{path:"/",component:j}]},C=function(e){e.addRoutes([O])},P={router:C},S=function(){return n.e("chunk-2d0b9a05").then(n.bind(null,"346d"))},T=function(){return n.e("chunk-2d23064b").then(n.bind(null,"eba9"))},E={path:"/module_2",component:S,children:[{path:"/",component:T}]},M=function(e){e.addRoutes([E])},H={router:M},$=(n("159b"),n("b64b"),function(e,t){t.store&&p.registerModule(e,t.store),t.router&&t.router(_)}),A=function(e){Object.keys(e).forEach((function(t){var n=e[t];$(t,n)}))};r["a"].config.productionTip=!1,A({first:P,second:H}),new r["a"]({store:p,router:_,render:function(e){return e(s)}}).$mount("#app")},ba8c:function(e,t,n){},db43:function(e,t,n){}});
//# sourceMappingURL=app.12b6d14c.js.map