(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard"],{"6e76":function(t,a,s){t.exports=s.p+"img/school-portal-2.b0459b8c.png"},7277:function(t,a,s){"use strict";s.r(a);var e=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"wrapper"},[s("TheHeader"),s("TheSidebar"),s("main",{staticClass:"main-content",attrs:{role:"main"}},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row justify-content-center"},[s("div",{staticClass:"col-12 col-lg-10 col-xl-10"},[s("router-view")],1)])])])],1)},l=[],i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("nav",{staticClass:"topnav navbar navbar-light"},[t._m(0),t._m(1),s("ul",{staticClass:"nav"},[s("li",{staticClass:"nav-item dropdown"},[s("a",{staticClass:"nav-link dropdown-toggle text-muted pr-0",attrs:{href:"#",id:"navbarDropdownMenuLink",role:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[s("span",{staticClass:"avatar avatar-sm mt-2"},[s("img",{staticClass:"avatar-img rounded-circle",attrs:{src:"http://localhost:4000/media/"+t.profile.passport,alt:"..."}})])]),s("div",{staticClass:"dropdown-menu dropdown-menu-right",attrs:{"aria-labelledby":"navbarDropdownMenuLink"}},[s("a",{staticClass:"dropdown-item",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.logout.apply(null,arguments)}}},[t._v("Log out")])])])])])},n=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler text-muted mt-2 p-0 mr-3 collapseSidebar",attrs:{type:"button"}},[s("i",{staticClass:"fe fe-menu navbar-toggler-icon"})])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("form",{staticClass:"form-inline mr-auto searchform text-muted"},[s("input",{staticClass:"form-control mr-sm-2 bg-transparent border-0 pl-4 text-muted",attrs:{type:"search",placeholder:"Type something...","aria-label":"Search"}})])}],r={computed:{profile:function(){return this.$store.getters.getprofile}},methods:{logout:function(){this.$store.commit("LOG_OUT",null),this.$router.push("/login")}}},o=r,c=s("2877"),u=Object(c["a"])(o,i,n,!1,null,null,null),d=u.exports,m=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("aside",{staticClass:"sidebar-left border-right bg-white shadow",attrs:{id:"leftSidebar","data-simplebar":""}},[t._m(0),s("nav",{staticClass:"vertnav navbar navbar-light"},[t._m(1),s("ul",{staticClass:"navbar-nav flex-fill w-100 mb-2"},[s("li",{staticClass:"nav-item w-100"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/dashboard"}},[s("i",{staticClass:"fe fe-user fe-16"}),s("span",{staticClass:"ml-3 item-text"},[t._v("Profile")])])],1),s("li",{staticClass:"nav-item dropdown"},[t._m(2),s("ul",{staticClass:"collapse list-unstyled pl-4 w-100",attrs:{id:"dashboard"}},[s("li",{staticClass:"nav-item active"},[s("router-link",{staticClass:"nav-link pl-3",attrs:{to:"/dashboard/edit_account"}},[s("span",{staticClass:"ml-1 item-text"},[t._v("Edit account")])])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link pl-3",attrs:{to:"/dashboard/change_password"}},[s("span",{staticClass:"ml-1 item-text"},[t._v("change password")])])],1)])]),s("li",{staticClass:"nav-item w-100"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/dashboard"}},[s("i",{staticClass:"fe fe-book-open fe-16"}),s("span",{staticClass:"ml-3 item-text"},[t._v("Register Courses")])])],1),s("li",{staticClass:"nav-item w-100"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/dashboard"}},[s("i",{staticClass:"fe fe-eye fe-16"}),s("span",{staticClass:"ml-3 item-text"},[t._v("Check Results")])])],1)]),s("ul",{staticClass:"navbar-nav flex-fill w-100 mb-2"},[s("li",{staticClass:"nav-item w-100"},[s("a",{staticClass:"nav-link",attrs:{href:"calendar.html"},on:{click:function(a){return a.preventDefault(),t.logout.apply(null,arguments)}}},[s("i",{staticClass:"fe fe-log-out fe-16"}),s("span",{staticClass:"ml-3 item-text"},[t._v("Logout")])])])]),s("div",{staticClass:"btn-box w-100 mt-4 mb-1"},[s("button",{staticClass:"btn mb-2 btn-primary btn-lg btn-block",attrs:{type:"button"},on:{click:t.logout}},[s("i",{staticClass:"fe fe-home fe-12 mr-2"}),s("span",{staticClass:"small"},[t._v("Go home")])])])])])},p=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"btn collapseSidebar toggle-btn d-lg-none text-muted ml-2 mt-3",attrs:{href:"#","data-toggle":"toggle"}},[s("i",{staticClass:"fe fe-x"},[s("span",{staticClass:"sr-only"})])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"w-100 mb-4 d-flex"},[e("a",{staticClass:"navbar-brand mx-auto mt-2 flex-fill text-center",attrs:{href:"./index.html"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:s("6e76")}})])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"dropdown-toggle nav-link",attrs:{href:"#dashboard","data-toggle":"collapse","aria-expanded":"false"}},[s("i",{staticClass:"fe fe-settings fe-16"}),s("span",{staticClass:"ml-3 item-text"},[t._v("Account Settings")]),s("span",{staticClass:"sr-only"},[t._v("(current)")])])}],f={methods:{logout:function(){this.$store.commit("LOG_OUT",null),this.$router.push("/login")}}},v=f,b=Object(c["a"])(v,m,p,!1,null,null,null),C=b.exports,h={components:{TheHeader:d,TheSidebar:C}},g=h,_=Object(c["a"])(g,e,l,!1,null,null,null);a["default"]=_.exports}}]);
//# sourceMappingURL=dashboard.060f1ff1.js.map