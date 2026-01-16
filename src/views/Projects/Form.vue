<template>
  <section class="projetos">
    <h1 class="title">Cadastro de Projetos</h1>

    <form @submit.prevent="salvar">
      <div class="field">
        <label for="projectName" class="label">Nome do Projeto</label>
        <input type="text" class="input" v-model="projectName" id="projectName" />
      </div>

      <div class="field">
        <button class="button is-black" type="submit">Salvar</button>
      </div>
    </form>
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
import { useStore } from "@/store";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsComponent",
  data() {
    return {
      projectName: "",
    };
  },
  methods: {
    salvar() {
      this.store.commit("ADD_PROJECT", this.projectName);
      this.projectName = "";
      this.$router.push("/projects");
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
});
</script>
