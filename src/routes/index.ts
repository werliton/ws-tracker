import Projects from "@/views/Projects.vue";
import Form from "@/views/Projects/Form.vue";
import List from "@/views/Projects/List.vue";
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
    children: [
      {
        path: "",
        name: "Projetos",
        component: List,
      },
      {
        path: "new",
        name: "New Project",
        component: Form,
      },
      {
        path: ":id",
        name: "Edit Project",
        component: Form,
        props: true,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
