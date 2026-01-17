<template>
  <section class="projetos">
    <h1 class="title">Cadastro de Projetos</h1>

    <form @submit.prevent="salvar">
      <div class="field">
        <label for="projectName" class="label">Nome do Projeto</label>
        <input type="text" class="input is-normal" v-model="projectName" id="projectName" />
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
  align-items: flex-start;
}
</style>

<script lang="ts">
import { useStore } from "@/store";
import { ADD_PROJECT, EDIT_PROJECT, NOTIFY } from "@/store/mutation.type";
import { NotificationType } from "@/types/notification";
import type { TProject } from "@/types/project";
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsComponent",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const project = this.store.state.projects.find(
        (item: TProject) => item.id === this.id
      ) as TProject;
      this.projectName = project?.name || "";
    }
  },
  data() {
    return {
      projectName: "",
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit(EDIT_PROJECT, {
          id: this.id,
          name: this.projectName,
        });
      } else {
        this.store.commit(ADD_PROJECT, this.projectName);
      }
      this.projectName = "";
      this.store.commit(NOTIFY, {
        title: "Projeto cadastrado!",
        text: "Seu projeto foi cadastrado com sucesso :)",
        type: NotificationType.SUCCESS,
      });
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
