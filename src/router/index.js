import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import Profile from "../components/Profile.vue"
import EditAccount from "../components/EditAccount.vue"
import ChangePassword from "../components/ChangePassword.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    component: () =>
      import(/* webpackChunkName: "dashboard" */ "../views/Dashboard.vue"),
    children: [
      {
        path: "/",
        name: "Dashboard",
        component: Profile
      },
      {
        path: "edit_account",
        component: EditAccount
      },
      {
        path: "change_password",
        component: ChangePassword
      }
    ],
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    meta: { guest: true }
  },
  {
    path: "/register",
    name: "Register",
    component: () =>
      import(/* webpackChunkName: "register" */ "../views/Register.vue"),
    meta: { guest: true }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isAuthenticated) {
      next()
      return
    }
    next("/login")
  } else {
    next()
  }
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.guest)) {
    if (store.getters.isAuthenticated) {
      next("/dashboard")
      return
    }
    next()
  } else {
    next()
  }
})

export default router;
