(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b45f651"],{"09e0":function(t,a,n){},"2b56":function(t,a,n){"use strict";var s=n("09e0"),e=n.n(s);e.a},7277:function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"dashboard"},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-light bg-light"},[n("router-link",{staticClass:"navbar-brand",attrs:{to:{name:"Home"}}},[n("h1",{staticClass:"logo-fz logo-ff text-secondary mb-0"},[t._v(" 迴圈 ∞ 選框 ")])]),t._m(0),n("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[n("ul",{staticClass:"navbar-nav ml-auto"},[n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/admin/AdminProducts"}},[t._v("產品管理")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/admin/orders"}},[t._v("訂單管理")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/admin/images"}},[t._v("圖片管理")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/admin/coupons"}},[t._v("優惠券管理")])],1),n("button",{staticClass:"btn btn-primary ml-2",on:{click:function(a){return a.preventDefault(),t.signout(a)}}},[t._v("登出")])])])],1),t.checkSuccess?n("router-view",{attrs:{token:t.token}}):t._e()],1)},e=[function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])}],o=(n("ac1f"),n("5319"),{name:"Dashboard",data:function(){return{token:"",checkSuccess:!1}},created:function(){this.checkLogin()},methods:{checkLogin:function(){var t=this;this.token=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.$http.defaults.headers.common.Authorization="Bearer ".concat(this.token);var a="".concat("https://course-ec-api.hexschool.io/","api/auth/check");this.$http.post(a,{api_token:this.token}).then((function(a){console.log(a),t.checkSuccess=!0})).catch((function(a){console.log(a.response),t.$router.push("/login")}))},signout:function(){document.cookie="hexToken=;expires=;",console.log("token 已清除"),this.$router.push("/login")}}}),i=o,c=(n("2b56"),n("2877")),r=Object(c["a"])(i,s,e,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-6b45f651.ed4278f8.js.map