import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "indexView",
  },
  {
    path: "/indexView",
    name: "indexView",
    component: () => import("../views/indexView/indexView.vue"),
  },
  {
    path: "/testView",
    name: "testView",
    component: () => import("../views/testView/testView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
