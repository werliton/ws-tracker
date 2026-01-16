<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>

    <router-link to="/projects/new" class="button">
      <span class="icon is-smal">
        <i class="fas fa-plus"></i>
      </span>
      <span>Novo projeto</span>
    </router-link>

    <table class="table is-fullwidth is-striped is-primary">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="projeto in projetos" :key="projeto.id">
          <td>{{ projeto.id }}</td>
          <td>{{ projeto.name }}</td>
          <td>
            <router-link :to="`/projects/${projeto.id}`" class="button">
              <span class="icon is-smal">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </router-link>
            <button class="button ml-2 is-danger" @click="remove(projeto.id)">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
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
import { REMOVE_PROJECT } from "@/store/mutation.type";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "ListComponent",
  setup() {
    const store = useStore();
    return {
      projetos: computed(() => store.state.projects),
      store,
    };
  },
  methods: {
    remove(id: string) {
      this.store.commit(REMOVE_PROJECT, id);
    },
  },
});
</script>
