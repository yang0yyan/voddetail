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
  {
    path: "/tableView",
    name: "tableView",
    component: () => import("../views/tableView/tableView.vue"),
  },
  {
    path: "/gameView",
    name: "gameView",
    component: () => import("../views/gameView/gameView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
