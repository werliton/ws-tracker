<script lang="ts">
import { defineComponent, type PropType } from "vue";

export default defineComponent({
  name: "ButtonComponent",
  props: {
    action: {
      type: Function as PropType<((payload: PointerEvent) => void) | undefined>,
      required: true,
    },
    disabled: Boolean,
    text: String,
    icon: String,
  },
});
</script>
<template>
  <button class="button" @click="action" :disabled="disabled">
    <span class="icon">
      <i :class="icon"></i>
    </span>
    <span>{{ text }}</span>
  </button>
</template>
