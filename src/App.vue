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
      activeDarkMode: false,
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
    switchTheme(darkMode: boolean) {
      this.activeDarkMode = darkMode;
    },
  },
  computed: {
    isEmptyList() {
      return this.tasks.length === 0;
    },
  },
});
</script>

<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': activeDarkMode }">
    <div class="column is-one-quarter">
      <SidebarComponent @switch-theme="switchTheme" />
    </div>
    <div class="column is-three-quarters conteudo">
      <FormComponent @started-task="saveTask" />
      <div class="column">
        <div class="list">
          <TaskComponent v-for="(task, index) in tasks" :key="index" :task="task" />
        </div>

        <Box v-if="isEmptyList">
          <div class="columns">
            <div class="column is-7">Tarefa não cadastrada</div>
          </div>
        </Box>
      </div>
    </div>
  </main>
</template>

<style>
.input {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.dark-mode {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
.list {
  padding: 0.5rem;
}
</style>
