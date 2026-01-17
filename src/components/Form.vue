<script lang="ts">
import { computed, defineComponent } from "vue";

import Stopwatch from "./Stopwatch.vue";
import { key } from "@/store";
import { useStore } from "vuex";
import { NOTIFY } from "@/store/mutation.type";
import { NotificationType } from "@/types/notification";

export default defineComponent({
  name: "FormComponent",
  data() {
    return {
      inputTask: "",
      projectId: "",
    };
  },
  components: {
    Stopwatch,
  },
  emits: ["startedTask"],
  methods: {
    saveTask(timer: string) {
      if(this.projectId){
        this.$emit("startedTask", {
          timer,
          description: this.inputTask,
          project: this.projects.find((item) => item.id == this.projectId),
        });
        this.inputTask = "";
        this.projectId = ''
      } else {
        this.store.commit(NOTIFY, {
          title: "Verifique isso.",
          text: "Sua tarefa precisa estar vinculada com um Projeto)",
          type: NotificationType.ERROR,
        });
      }
    },
  },
  setup() {
    const store = useStore(key);

    return {
      projects: computed(() => store.state.projects),
      store
    };
  },
});
</script>

<template>
  <div class="box form">
    <div class="columns">
      <div class="column is-flex" aria-label="Formulário para criacao de uma nova tarefa">
        <div class="column is-5">
          <input
            type="text"
            name="task"
            class="input"
            placeholder="Qual tarefa você deseja iniciar?"
            v-model="inputTask"
          />
        </div>

        <div class="column is-3">
          <div class="select">
            <select v-model="projectId">
              <option value="">Selecione o projeto</option>
              <option :value="project.id" v-for="project in projects" :key="project.id">
                {{ project.name }}
              </option>
            </select>
          </div>
        </div>

        <Stopwatch @is-timer-finished="saveTask" />
      </div>
    </div>
  </div>
</template>

<style>
input {
  background-color: var(--bg-primario);
  color: var(--texto-primario);
}
.form {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
