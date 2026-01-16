<script lang="ts">
import { defineComponent, type PropType } from "vue";
import Timer from "./Timer.vue";
import type { TTask } from "@/types";

export default defineComponent({
  name: "TaskComponent",
  components: {
    Timer,
  },
  props: {
    task: {
      type: Object as PropType<TTask>,
      required: true,
    },
  },
});
</script>
<template>
  <div class="box has-text-weight-bold">
    <div class="columns">
      <div class="column is-7">{{ task.description }}</div>
      <div class="column">
        <Timer :timer="task.timer || 0" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.box {
  background-color: #fafaf0;
}
</style>
