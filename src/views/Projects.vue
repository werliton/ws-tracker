<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>

    <form @submit.prevent="salvar">
      <div class="field">
        <label for="projectName" class="label">Nome do Projeto</label>
        <input type="text" class="input" v-model="projectName" id="projectName" />
      </div>

      <div class="field">
        <button class="button is-black" type="submit">Salvar</button>
      </div>
    </form>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.name }}</td>
        </tr>
      </tbody>
    </table>
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
import { computed, defineComponent } from "vue";

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
    },
  },
  setup() {
    const store = useStore();
    return {
      store,
      projetos: computed(() => store.state.projects),
    };
  },
});
</script>
