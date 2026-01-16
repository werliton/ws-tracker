<template>
  <div>
    <strong class="timer">{{ formattedTimer }}</strong>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TimerComponent",
  computed: {
    formattedTimer() {
      return new Date(this.timer * 1000).toISOString().slice(11, 19);
    },
  },
  props: {
    timer: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style scoped>
.timer {
  font-variant-numeric: tabular-nums;
  color: var(--texto-primario);
}
</style>
