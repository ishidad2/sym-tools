(function(e){function t(t){for(var r,a,l=t[0],c=t[1],i=t[2],s=0,p=[];s<l.length;s++)a=l[s],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return u.push.apply(u,i||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(u.splice(t--,1),e=a(a.s=n[0]))}return e}var r={},o={app:0},u=[];function a(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var f=c;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Header"),n("b-container",[n("router-view")],1)],1)},u=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-nav",{attrs:{tabs:"",align:"center"}},e._l(e.links,(function(t,r){return n("b-nav-item",{key:r},[n("router-link",{attrs:{to:t.to}},[e._v(e._s(t.name))])],1)})),1)],1)},l=[],c={data:function(){return{links:[{to:"/demo1",name:"Demo1"},{to:"/demo2",name:"Demo2"}]}}},i=c,f=n("2877"),s=Object(f["a"])(i,a,l,!1,null,null,null),p=s.exports,d={components:{Header:p}},m=d,v=Object(f["a"])(m,o,u,!1,null,null,null),b=v.exports,h=n("8c4f"),_=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},y=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Demo1")])])}],O={},w=Object(f["a"])(O,_,y,!1,null,null,null),g=w.exports,j=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v("Demo2")])])}],k={},P=k,$=Object(f["a"])(P,j,x,!1,null,null,null),D=$.exports;r["default"].use(h["a"]);var E=[{path:"/demo1",name:"Demo1",component:g},{path:"/demo2",name:"Demo2",component:D}],S=new h["a"]({mode:"history",base:"",routes:E}),M=S,T=n("2f62");r["default"].use(T["a"]);var H=new T["a"].Store({state:{},mutations:{},actions:{},modules:{}}),J=n("5f5b"),q=n("b1e0");n("f9e3"),n("2dd8");r["default"].use(J["a"]),r["default"].use(q["a"]),r["default"].config.productionTip=!1,new r["default"]({router:M,store:H,render:function(e){return e(b)}}).$mount("#app")}});
//# sourceMappingURL=app.41bf8fbd.js.map