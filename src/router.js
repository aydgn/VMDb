import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: () => import("@/pages/Detail.vue"),
      props: true,
    },
  ],
});
export default router;
