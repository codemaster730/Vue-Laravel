import axios from "axios";
export default {
  namespaced: true,

  state: {
    userData: null
  },

  getters: {
    user: state => state.userData
  },

  mutations: {
    setUserData(state, user) {
      state.userData = user;
    }
  },

  actions: {
    // getUserData({ commit }) {
    //   axios
    //     .get(process.env.VUE_APP_API + "user")
    //     .then(response => {
    //       commit("setUserData", response.data);
    //     })
    //     .catch(() => {
    //       localStorage.removeItem("authToken");
    //     });
    // },
    sendLoginRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post(process.env.VUE_APP_API + "login", data)
        .then(response => {
          commit("setUserData", response.data.user);
          localStorage.setItem("authToken", response.data.token);
        });
    },
    sendRegisterRequest({ commit }, data) {
      commit("setErrors", {}, { root: true });
      return axios
        .post(process.env.VUE_APP_API + "register", data)
        .then(response => {
          commit("setUserData", response.data.user);
          localStorage.setItem("authToken", response.data.token);
        });
    },
    sendLogoutRequest({ commit }) {
      // axios.post(process.env.VUE_APP_API + "logout").then(() => {
        commit("setUserData", null);
        localStorage.removeItem("authToken");
      // });
    },
    sendVerifyResendRequest() {
      return axios.get(process.env.VUE_APP_API + "email/resend");
    },
    sendVerifyRequest({ dispatch }, hash) {
      return axios
        .get(process.env.VUE_APP_API + "email/verify/" + hash)
        .then(() => {
          dispatch("getUserData");
        });
    }
  }
};
