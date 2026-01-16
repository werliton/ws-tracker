<script lang="ts">
import { defineComponent } from "vue";
import Timer from "./Timer.vue";

export default defineComponent({
  name: "TaskComponent",
  components: {
    Timer,
  },
  props: {
    timer: Number,
    description: String,
  },
});
</script>
<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">{{ description }}</div>
      <div class="column">
        <Timer :timer="timer || 0" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.BOX {
  background-color: #fafaf0;
}
</style>
