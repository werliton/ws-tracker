<script lang="ts">
import { defineComponent, type InputHTMLAttributes } from "vue";

import Stopwatch from "./Stopwatch.vue";

export default defineComponent({
  name: "FormComponent",
  data() {
    return {
      isfinished: false,
      inputTask: "",
    };
  },
  components: {
    Stopwatch,
  },
  emits: ["startedTask"],
  methods: {
    finishTask(timer: string) {
      this.$emit("startedTask", {
        time: timer,
        task: this.inputTask,
      });
      this.inputTask = "";
    },
  },
});
</script>

<template>
  <div class="box has-background-white">
    <div class="columns">
      <div class="column is-flex" aria-label="Formulário para criacao de uma nova tarefa">
        <div class="column is-8">
          <input
            type="text"
            name="task"
            class="input"
            placeholder="Qual tarefa você deseja iniciar?"
            v-model="inputTask"
          />
        </div>
        <Stopwatch @is-timer-finished="finishTask" />
      </div>
    </div>
  </div>
</template>
