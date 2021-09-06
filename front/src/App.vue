<template>
  <div id="app">
    <Navbar/>
    <main role="main" class="container">
      <router-view />
    </main>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex"
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Navbar from './components/Navbar.vue'
library.add(faBell);
Vue.component('font-awesome-icon', FontAwesomeIcon);
export default {
  components: {
    Navbar
  },
  computed: {

  },

  mounted() {

  },

  methods: {

  }
};
</script>

<style>
body > div > .container {
  padding: 0px 15px 0;
}
</style>
