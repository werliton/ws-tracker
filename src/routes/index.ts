import Projects from "@/views/Projects.vue";
import Tasks from "@/views/Tasks.vue";
import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: Tasks,
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
