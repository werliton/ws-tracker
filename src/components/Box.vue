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
    <div class="columns">
      <div class="column is-7">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
