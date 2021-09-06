import axios from "axios";
export default {
  namespaced: true,

  state: {
    users: []
  },

  getters: {
    users: state => state.users,
  },

  mutations: {
    getUsers(state, users) {
      state.users = users;
    }
  },

  actions: {
    getUsers({commit}){
      return axios
        .get(process.env.VUE_APP_API + "users")
        .then((response) => {
          commit("getUsers", response.data.users);
        });
    }
  }
};
