import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios"

axios.defaults.baseURL = "http://localhost:4000/"
// axios.interceptors.response.use(undefined, function (error) {
//   if (error) {
//     const originalRequest = error.config;
//     if (error.response.status === 401 && !originalRequest._retry) {
  
//         originalRequest._retry = true;
//         store.dispatch('logout')
//         return router.push('/login')
//     }
//   }
// })

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
