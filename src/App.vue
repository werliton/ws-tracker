<script lang="ts">
import { defineComponent } from "vue";
import FormComponent from "./components/Form.vue";
import SidebarComponent from "./components/Sidebar.vue";
import TaskComponent from "./components/Task.vue";

type Task = { time: number; task: string };

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
    TaskComponent,
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
          <li v-for="task in tasks" :key="task.task" class="list">
            <TaskComponent :timer="task.time" :description="task.task" />
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped>
.list {
  padding: 0.5rem;
}
</style>
