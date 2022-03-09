import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Record from "../views/record/RecordView.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "record",
    component: Record,
  },
  {
    path: "/statistic",
    name: "statistic",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(
        /* webpackChunkName: "about" */ "../views/statistic/StatisticView.vue"
      ),
  },
  {
    path: "/my",
    name: "my",
    component: () => import("../views/my/MyView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
