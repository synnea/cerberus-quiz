(function(t){function n(n){for(var r,i,c=n[0],a=n[1],s=n[2],f=0,p=[];f<c.length;f++)i=c[f],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&p.push(o[i][0]),o[i]=0;for(r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r]);l&&l(n);while(p.length)p.shift()();return u.push.apply(u,s||[]),e()}function e(){for(var t,n=0;n<u.length;n++){for(var e=u[n],r=!0,c=1;c<e.length;c++){var a=e[c];0!==o[a]&&(r=!1)}r&&(u.splice(n--,1),t=i(i.s=e[0]))}return t}var r={},o={app:0},u=[];function i(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=t,i.c=r,i.d=function(t,n,e){i.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,n){if(1&n&&(t=i(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(i.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)i.d(e,r,function(n){return t[n]}.bind(null,r));return e},i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,"a",n),n},i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},i.p="/cerberus-quiz/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],a=c.push.bind(c);c.push=n,c=c.slice();for(var s=0;s<c.length;s++)n(c[s]);var l=a;u.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var r=e("85ec"),o=e.n(r);o.a},"0a86":function(t,n,e){"use strict";var r=e("79be"),o=e.n(r);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("quiz")],1)},u=[],i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container"},[e("div",{staticClass:"jumbotron"},[e("h1",[t._v("Cerberus Team Quiz Results")]),e("div",[e("ul",t._l(t.content,(function(n){return e("div",{key:n,staticClass:"result"},t._l(n,(function(n){return e("div",{key:n.value},[t._v(" "+t._s(n)+" ")])})),0)})),0)])])])},c=[],a=(e("d3b7"),e("bc3a")),s=e.n(a),l={name:"Quiz",data:function(){return{content:null}},created:function(){this.fetchPosts()},methods:{fetchPosts:function(){var t=this;s.a.get("https://sheet.best/api/sheets/8a4c70cc-2d42-4c74-9deb-38bd48f3588f").then((function(n){t.content=n.data,t.renderRanking()})).catch((function(n){console.log(n),t.errored=!0})).finally((function(){return t.loading=!1}))},renderRanking:function(){var t=this.content.length-1,n=this.content[t];delete n.Datum;var e=this.sortRanking(n);this.content=e},sortRanking:function(t){var n=[];for(var e in t)n.push([e,t[e]]);return n.sort((function(t,n){return t[1]-n[1]})),n=n.reverse(),console.log(n),n}}},f=l,p=(e("0a86"),e("2877")),d=Object(p["a"])(f,i,c,!1,null,null,null),v=d.exports,h={name:"app",components:{Quiz:v}},b=h,g=(e("034f"),Object(p["a"])(b,o,u,!1,null,null,null)),y=g.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(y)}}).$mount("#app")},"79be":function(t,n,e){},"85ec":function(t,n,e){}});
//# sourceMappingURL=app.40fbd009.js.map