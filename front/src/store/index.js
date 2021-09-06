import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import msg from "./msg";
import user from './user'
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    errors: []
  },

  getters: {
    errors: state => state.errors
  },

  mutations: {
    setErrors(state, errors) {
      state.errors = errors;
    }
  },

  actions: {},

  modules: {
    auth,
    msg,
    user
  }
});
