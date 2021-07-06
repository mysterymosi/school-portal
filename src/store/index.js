import Vue from "vue";
import Vuex from "vuex";
import createdPersistedState from "vuex-persistedstate"
import axios from "axios"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
  	profile: null
  },
  mutations: {
  	SET_PROFILE(state, payload) {
  		Vue.set(state, "profile", payload)
  	},
  	LOG_OUT(state, payload) {
  		Vue.set(state, "profile", payload)
  	}
  },
  actions: {
  	async register({ dispatch }, payload) {
  		await axios.post("register.php", payload, {headers: {"Content-Type": "multipart/form-data", "processData": "false"}})
  		await dispatch("login", {
  			email: payload.get("email"),
  			password: payload.get("password")
  		})
  	},

  	async login({ commit }, payload) {
  		let res = await axios.post("login.php", payload)
  		await commit("SET_PROFILE", res.data.user)
  	}
  },
  getters: {
  	isAuthenticated: state => !!state.profile,
  	getprofile: state => state.profile
  },
  modules: {},
  plugins: [createdPersistedState()]
});
