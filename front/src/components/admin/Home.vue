<template>

  <div class="mt-5">
    <div v-if="isShow && msgs.length!=0 && user.isAdmin" class="popover msg">
        <b-card v-for="msg in msgs" :key="msg.id" @click="readMsg(msg.id)">
          {{ msg.name }}, {{ msg.email }}
        </b-card>
    </div>
    <b-card v-for="user in users" :key="user.id"
      title=""
      style="max-width: 20rem;"
      class="mb-2"
    >
      <b-card-text>
        {{ user.name }}, {{ user.email }}
      </b-card-text>
      <b-button variant="primary" @click="sendMessage(user)">Notify</b-button>
      <b-button variant="warning" @click="playName(user.name)">Play</b-button>
    </b-card>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Home",
  data() {
    return {
      synth: window.speechSynthesis,
      nameSpeech: new window.SpeechSynthesisUtterance()
    };
  },

  computed: {
    ...mapGetters("auth", ["user"]),
    ...mapGetters("msg", ["msgs", "isShow"]),
    ...mapGetters("user", ["users"]),
  },

  mounted() {
    this.getMsgs();
    this.getUsers();
  },
  methods: {
    ...mapActions("msg", ["sendMsg", "getMsgs", "show", "removeMsg"]),
    ...mapActions("user", [ "getUsers"]),
    playName(name) {
      this.nameSpeech.text ="hello " + name;
      this.nameSpeech.voice = this.synth.getVoices()[1];
      this.synth.speak(this.nameSpeech);
    },
    sendMessage(user) {
      this.sendMsg(user);
    },
    readMsg(id){
      this.removeMsg(id);
    }
  }
}
</script>
<style>
.msg {
  top: 44px;
  left: 30px;
}
</style>
