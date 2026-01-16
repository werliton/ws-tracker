<script lang="ts">
import { defineComponent } from "vue";
import SidebarComponent from "./components/Sidebar.vue";

export default defineComponent({
  name: "App",
  data() {
    return {
      activeDarkMode: false,
    };
  },
  components: {
    SidebarComponent,
  },
  methods: {
    switchTheme(darkMode: boolean) {
      this.activeDarkMode = darkMode;
    },
  },
});
</script>

<template>
  <main class="columns is-gapless is-multiline" :class="{ 'dark-mode': activeDarkMode }">
    <div class="column is-one-quarter">
      <SidebarComponent @switch-theme="switchTheme" />
    </div>
    <div class="column is-three-quarters conteudo">
      <router-view></router-view>
    </div>
  </main>
</template>

<style>
.input {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.dark-mode {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}
.conteudo {
  background-color: var(--bg-primario);
}
.list {
  padding: 0.5rem;
}
</style>
