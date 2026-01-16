<script lang="ts">
import { defineComponent } from "vue";
import Timer from "./Timer.vue";
import ButtonComponent from "./Button.vue";

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
    ButtonComponent,
  },
  emits: ["isTimerFinished"],
});
</script>

<template>
  <div class="column is-4 is-flex is-align-items-center is-justify-content-space-between">
    <Timer :timer="timer" />

    <ButtonComponent
      :action="startTimer"
      icon="fas fa-play"
      text="play"
      :disabled="isActiveTimer"
    />
    <ButtonComponent
      :action="stopTimer"
      icon="fas fa-stop"
      text="stop"
      :disabled="!isActiveTimer"
    />
  </div>
</template>
