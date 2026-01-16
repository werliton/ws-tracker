<script lang="ts">
import { defineComponent } from "vue";
import FormComponent from "./components/Form.vue";
import SidebarComponent from "./components/Sidebar.vue";
import TaskComponent from "./components/Task.vue";
import type { TTask } from "./types";
import Box from "./components/Box.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      tasks: [] as TTask[],
    };
  },
  components: {
    FormComponent,
    SidebarComponent,
    TaskComponent,
    Box,
  },
  methods: {
    saveTask(task: TTask) {
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
      <FormComponent @started-task="saveTask" />
      <div class="column">
        <div class="list" v-if="tasks.length">
          <TaskComponent v-for="(task, index) in tasks" :key="index" :task="task" />
        </div>

        <Box v-else>
          <div class="columns">
            <div class="column is-7">Tarefa nao cadastrada</div>
          </div>
        </Box>
      </div>
    </div>
  </main>
</template>

<style scoped>
.list {
  padding: 0.5rem;
}
</style>
