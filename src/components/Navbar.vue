<template>
  <ul class="painel mt-5">
    <li class="link">
      <router-link to="/">
        <i class="fas fa-tasks"></i>
        Tarefas
      </router-link>
    </li>
    <li class="link">
      <router-link to="projects">
        <i class="fas fa-tasks"></i>
        Projetos
      </router-link>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NavbarComponent",
});
</script>

<style scoped>
.panel li {
  margin: 8px 0;
}
.link {
  color: #fff;
}
.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}
</style>
