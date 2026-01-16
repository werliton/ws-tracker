<script lang="ts">
import { defineComponent } from "vue";
import FormComponent from "./components/Form.vue";
import SidebarComponent from "./components/Sidebar.vue";

type Task = { time: string; task: string };

export default defineComponent({
  name: "App",
  data() {
    return {
      tasks: [] as Task[],
    };
  },
  components: {
    FormComponent,
    SidebarComponent,
  },
  methods: {
    listTask(task: Task) {
      console.log("Tarefa cadastrada:", task);
      this.tasks.push(task);
    },
  },
});
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SidebarComponent />
    </div>
    <div class="column is-three-quarters has-background-white">
      <FormComponent @started-task="listTask" />
      <div class="column">
        <ul>
          <li v-for="task in tasks" :key="task.task">{{ task.time }} - {{ task.task }}</li>
        </ul>
      </div>
    </div>
  </main>
</template>
