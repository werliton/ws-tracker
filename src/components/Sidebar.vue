<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SidebarComponent",
});
</script>

<template>
  <div class="sidebar">
    <h1>Sidebar</h1>
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
