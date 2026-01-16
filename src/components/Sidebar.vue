<script lang="ts">
import { defineComponent } from "vue";
import ThemeSwitch from "./ThemeSwitch.vue";
import Navbar from "./Navbar.vue";

export default defineComponent({
  name: "SidebarComponent",
  components: {
    ThemeSwitch,
    Navbar,
  },
  emits: ["switch-theme"],
});
</script>

<template>
  <div class="sidebar">
    <h1>Sidebar</h1>
    <ThemeSwitch @switch-theme="$emit('switch-theme', $event)" />
    <Navbar />
  </div>
</template>

<style scoped>
.sidebar {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  .sidebar {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
