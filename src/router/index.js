import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import("../views/About.vue"),

  },
  {
    path: "/menus",
    name: "Menus",
    component: () =>
      import("../views/Menus.vue"),
  },
  {
    path: "/gallery",
    name: "Gallery",
    component: () =>
      import("../views/Gallery.vue"),
  },
  {
    path: "/friends",
    name: "Friends",
    component: () =>
      import("../views/Friends.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import("../views/Contact.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
