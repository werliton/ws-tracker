<script lang="ts">
import { defineComponent } from "vue";
import FormComponent from "../components/Form.vue";
import TaskComponent from "../components/Task.vue";
import type { TTask } from "../types";
import Box from "../components/Box.vue";

export default defineComponent({
  name: "TasksComponent",
  data() {
    return {
      tasks: [] as TTask[],
    };
  },
  components: {
    FormComponent,
    TaskComponent,
    Box,
  },
  methods: {
    saveTask(task: TTask) {
      this.tasks.push(task);
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
  <FormComponent @started-task="saveTask" />
  <div class="column">
    <div class="list">
      <Box v-if="isEmptyList">Tarefa não cadastrada </Box>
      <TaskComponent v-for="(task, index) in tasks" :key="index" :task="task" />
    </div>
  </div>
</template>
