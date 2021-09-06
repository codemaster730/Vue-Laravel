import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const guest = (to, from, next) => {
  if (!localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/");
  }
};
const auth = (to, from, next) => {
  if (localStorage.getItem("authToken")) {
    return next();
  } else {
    return next("/login");
  }
};

const routes = [
  {
    path: "/",
    beforeEnter: guest,
    component: () => import(/* webpackChunkName: "home" */ "../components/Auth/Login.vue")
  },
  {
    path: "/home",
    name: "Home",
    beforeEnter: auth,
    component: () => import(/* webpackChunkName: "home" */ "../components/admin/Home.vue")
  },
  {
    path: "/login",
    name: "Login",
    beforeEnter: guest,
    component: () =>
      import(/* webpackChunkName: "login" */ "../components/Auth/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    beforeEnter: guest,
    component: () =>
      import(/* webpackChunkName: "register" */ "../components/Auth/Register.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
