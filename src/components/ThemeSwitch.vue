<template>
  <div class="column">
    <button class="button" :class="{ switch: darkMode }" @click="changeTheme">
      {{ buttonText }}
    </button>
  </div>
</template>

<style scoped>
.switch {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ThemeSwitchComponent",
  data() {
    return {
      darkMode: false,
    };
  },
  methods: {
    changeTheme() {
      this.darkMode = !this.darkMode;
      this.$emit("switch-theme", this.darkMode);
    },
  },
  computed: {
    buttonText() {
      if (this.darkMode) return "Ativar Light Mode";
      return "Ativar Dark Mode";
    },
  },
  emits: ["switch-theme"],
});
</script>
