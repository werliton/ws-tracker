import Projects from "@/views/Projects.vue";
import Form from "@/views/Projects/Form.vue";
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
  {
    path: "/projects/new",
    name: "New Project",
    component: Form,
  },
  {
    path: "/projects/:id",
    name: "Edit Project",
    component: Form,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
