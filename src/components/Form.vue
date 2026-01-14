<script lang="ts">
import { defineComponent } from "vue";
import Timer from "./Timer.vue";

export default defineComponent({
  name: "FormComponent",
  data() {
    return {
      timer: 0,
      timerId: 0,
    };
  },
  methods: {
    startTimer() {
      this.timerId = setInterval(() => {
        this.timer++;
      }, 1000);
    },
    stopTimer() {
      clearInterval(this.timerId);
      this.timer = 0;
    },
  },
  components: {
    Timer,
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
          />
        </div>

        <div class="column is-4 is-flex is-align-items-center is-justify-content-space-between">
          <Timer :timer="timer" />

          <button class="button" @click="startTimer">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button" @click="stopTimer">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
