<script lang="ts">
import { defineComponent } from "vue";
import Timer from "./Timer.vue";

export default defineComponent({
  name: "StopWatchComponent",
  data() {
    return {
      timer: 0,
      timerId: 0,
      isActiveTimer: false,
    };
  },
  methods: {
    startTimer() {
      this.timerId = setInterval(() => {
        this.timer++;
      }, 1000);
      this.isActiveTimer = true;
    },
    stopTimer() {
      clearInterval(this.timerId);
      this.isActiveTimer = false;
      this.$emit("isTimerFinished", this.timer);
      this.timer = 0;
    },
  },
  components: {
    Timer,
  },
  emits: ["isTimerFinished"],
});
</script>

<template>
  <div class="column is-4 is-flex is-align-items-center is-justify-content-space-between">
    <Timer :timer="timer" />

    <button class="button" @click="startTimer" :disabled="isActiveTimer">
      <span class="icon">
        <i class="fas fa-play"></i>
      </span>
      <span>play</span>
    </button>
    <button class="button" @click="stopTimer" :disabled="!isActiveTimer">
      <span class="icon">
        <i class="fas fa-stop"></i>
      </span>
      <span>stop</span>
    </button>
  </div>
</template>
