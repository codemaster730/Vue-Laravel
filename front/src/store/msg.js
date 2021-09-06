import axios from "axios";
export default {
  namespaced: true,

  state: {
    notifications: [],
    isShow: false
  },

  getters: {
    msgs: state => state.notifications,
    isShow: state => state.isShow
  },

  mutations: {
    setMsgs(state, msg) {
      state.notifications.push(msg);
    },
    setShow(state) {
      state.isShow = !state.isShow;
    },
    getMsgs(state, msgs) {
      state.notifications = msgs;
    },
    removeMsg(state, id){
      state.notifications = state.notifications.filter(msg => id!=msg.id);
    }
  },

  actions: {
    sendMsg({ commit }, data) {
      return axios
        .post(process.env.VUE_APP_API + "message", data)
        .then(() => {
          commit("setMsgs", data);
        });
    },
    getMsgs({commit}){
      return axios
        .get(process.env.VUE_APP_API + "messages")
        .then((response) => {
          commit("getMsgs", response.data.messages);
        });
    },
    show({commit}){
      commit("setShow");
    },
    removeMsg({commit}, id){
      return axios
        .delete(process.env.VUE_APP_API + "message/"+id)
        .then(() => {
          commit("removeMsg",id);
        });
    }
  }
};
