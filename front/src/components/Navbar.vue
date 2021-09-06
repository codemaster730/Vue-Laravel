<template>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="warning">
        <b-container>
            <b-navbar-brand href="#" v-if="!user">
              PWA-PUSH
            </b-navbar-brand>
            <b-navbar-brand href="#" v-if="user">
              {{user.name}}
              <span v-if="user.isAdmin" @click="showMsg">
                <font-awesome-icon icon="bell" />
                <span class="badge badge-danger" v-if="msgs.length!=0 && !isShow">{{ msgs.length }}</span>
              </span>
            </b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
              <!-- Right aligned nav items -->
              <b-navbar-nav class="ml-auto">
                <b-nav-item right>
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item" v-show="!user">
                      <router-link class="nav-link" to="/login">Login</router-link>
                    </li>
                    <li class="nav-item" v-show="!user">
                      <router-link class="nav-link" to="/register"
                        >Register
                      </router-link>
                    </li>
                    <li class="nav-item" v-show="user">
                      <a class="nav-link" href="#" @click="logout">Logout</a>
                    </li>
                  </ul>
                </b-nav-item>
              </b-navbar-nav>
            </b-collapse>
          </b-container>
      </b-navbar>
    </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex"
import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faBell);
Vue.component('font-awesome-icon', FontAwesomeIcon);
export default {
    name: 'Navbar',
    computed: {
      ...mapGetters("auth", ["user"]),
      ...mapGetters('msg', ['msgs', 'isShow'])
    },

    mounted() {

    },

    methods: {
      ...mapActions("msg",["show"]),
      ...mapActions("auth",["sendLogoutRequest"]),
      logout() {
        this.sendLogoutRequest();
        this.$router.push({ name: "Login" });
      },
      showMsg() {
        this.show();
      }
    }
}
</script>
