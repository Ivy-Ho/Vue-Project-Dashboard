(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f7d3f35"],{"99af":function(t,n,o){"use strict";var a=o("23e7"),c=o("d039"),e=o("e8b5"),i=o("861d"),r=o("7b0b"),d=o("50c4"),u=o("8418"),s=o("65f0"),f=o("1dde"),l=o("b622"),p=o("2d00"),h=l("isConcatSpreadable"),v=9007199254740991,g="Maximum allowed index exceeded",b=p>=51||!c((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),w=f("concat"),_=function(t){if(!i(t))return!1;var n=t[h];return void 0!==n?!!n:e(t)},L=!b||!w;a({target:"Array",proto:!0,forced:L},{concat:function(t){var n,o,a,c,e,i=r(this),f=s(i,0),l=0;for(n=-1,a=arguments.length;n<a;n++)if(e=-1===n?i:arguments[n],_(e)){if(c=d(e.length),l+c>v)throw TypeError(g);for(o=0;o<c;o++,l++)o in e&&u(f,l,e[o])}else{if(l>=v)throw TypeError(g);u(f,l++,e)}return f.length=l,f}})},d2f1:function(t,n,o){"use strict";o.r(n);var a=function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"product"},[o("loading",{attrs:{active:t.isLoading},on:{"update:active":function(n){t.isLoading=n}}}),o("h2",[t._v("這裡是前台-單一產品頁面")]),o("h3",[t._v(t._s(t.product.title))]),o("h3",[t._v(t._s(t.product.description))])],1)},c=[],e=(o("99af"),{data:function(){return{product:{},isLoading:!1,fullPage:!0}},created:function(){var t=this;this.isLoading=!0;var n=this.$route.params.id;this.$http.get("".concat("https://course-ec-api.hexschool.io/","api/").concat("8a9d1554-1794-46f4-9f77-1517fa6cb261","/ec/product/").concat(n)).then((function(n){t.isLoading=!1,t.product=n.data.data})).catch((function(n){t.isLoading=!1,console.log(n)}))}}),i=e,r=o("2877"),d=Object(r["a"])(i,a,c,!1,null,null,null);n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-3f7d3f35.3240d3a3.js.map