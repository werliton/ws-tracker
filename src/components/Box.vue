<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BoxComponent",
  data() {
    return {
      estilos: {
        "background-color": "#faf0ca",
      },
    };
  },
});
</script>
<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot></slot>
  </div>
</template>
