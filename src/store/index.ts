import { NotificationType, type TNotification } from "@/types/notification";
import type { TProject } from "@/types/project";
import type { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface State {
  projects: TProject[];
  notifications: TNotification[];
}
// Configura uma chave de acesso para os consumidores
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projects: [],
    notifications: [
      {
        id: 1,
        text: "teste",
        tipo: NotificationType.SUCCESS,
        title: "ere",
      },
    ] as TNotification[],
  },
  mutations: {
    ADD_PROJECT(state: State, projectName: string) {
      const project = {
        id: new Date().toISOString(),
        name: projectName,
      } as TProject;

      state.projects.push(project);
    },
    EDIT_PROJECT(state: State, project: TProject) {
      const foundProject = state.projects.findIndex((item) => item.id === project.id);
      state.projects[foundProject] = project;
    },
    REMOVE_PROJECT(state: State, projectId: string) {
      state.projects = state.projects.filter((item) => item.id != projectId);
    },
  },
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
