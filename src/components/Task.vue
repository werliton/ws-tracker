<script lang="ts">
import { defineComponent, type PropType } from "vue";
import type { TTask } from "@/types";
import BoxComponent from "./Box.vue";
import Timer from "./Timer.vue";

export default defineComponent({
  name: "TaskComponent",
  components: {
    BoxComponent,
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
  <BoxComponent v-if="task.description">
    <div class="columns">
      <div class="column is-4">{{ task.description || "Tarefa nao cadastrada" }}</div>
      <div class="column is-3">{{ task.project.name }}</div>
      <div class="column ">
        <Timer :timer="task.timer || 0" />
      </div>
    </div>
  </BoxComponent>
</template>
