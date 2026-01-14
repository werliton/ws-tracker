<script lang="ts">
import FormComponent from "./components/Form.vue";
import SidebarComponent from "./components/Sidebar.vue";
export default {
  name: "App",
  components: {
    FormComponent,
    SidebarComponent,
  },
};
</script>

<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <SidebarComponent />
    </div>
    <div class="column is-three-quarters has-background-white">
      <FormComponent />
    </div>
  </main>
</template>
