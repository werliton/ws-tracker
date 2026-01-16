<script lang="ts">
import { defineComponent } from "vue";
import ThemeSwitch from "./ThemeSwitch.vue";

export default defineComponent({
  name: "SidebarComponent",
  components: {
    ThemeSwitch,
  },
  emits: ["switch-theme"],
});
</script>

<template>
  <div class="sidebar">
    <h1>Sidebar</h1>
    <ThemeSwitch @switch-theme="$emit('switch-theme', $event)" />
  </div>
</template>

<style scoped>
.sidebar {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}
@media only screen and (max-width: 768px) {
  .sidebar {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
