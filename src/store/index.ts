import type { TProject } from "@/types/project";
import type { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface State {
  projects: TProject[];
}
// Configura uma chave de acesso para os consumidores
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projects: [],
  },
  mutations: {
    ADD_PROJECT(state: State, projectName: string) {
      const project = {
        id: new Date().toISOString(),
        name: projectName,
      } as TProject;

      state.projects.push(project);
    },
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
