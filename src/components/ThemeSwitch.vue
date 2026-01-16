<template>
  <div class="column container">
    <button class="button is-black" :class="{ switch: darkMode }" @click="changeTheme">
      <i class="fas" :class="{ 'fas fa-sun': darkMode, 'fas fa-moon': !darkMode }"></i>
      {{ buttonText }}
    </button>
  </div>
</template>

<style scoped>
.container {
  padding: 1rem 0;
}
.switch {
  background-color: #fff;
  color: #000;
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
