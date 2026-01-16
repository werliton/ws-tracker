<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>
    <router-view></router-view>
  </section>
</template>

<style scoped>
.projetos {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsComponent",
});
</script>
