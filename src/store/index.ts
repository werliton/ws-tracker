import { NotificationType, type TNotification } from "@/types/notification";
import type { TProject } from "@/types/project";
import type { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";
import { DEFINE_PROJECTS, NOTIFY } from "./mutation.type";
import { ADD_PROJECT, EDIT_PROJECT, GET_PROJECTS, REMOVE_PROJECT } from "./action.type";
import httpClient from "@/http";

interface State {
  projects: TProject[];
  notifications: TNotification[];
}
// Configura uma chave de acesso para os consumidores
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projects: [],
    notifications: [],
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
    [NOTIFY](state: State, notification: TNotification) {
      notification.id = Date.now();
      state.notifications.push(notification);

      setTimeout(() => {
        state.notifications = state.notifications.filter((item) => item.id !== notification.id);
      }, 2000);
    },
    [DEFINE_PROJECTS](state: State, projects: TProject[]){
      state.projects = projects
    }
  },
  actions: {
    [GET_PROJECTS]({ commit }){
      httpClient.get('projects')
      .then(response => commit(DEFINE_PROJECTS, response.data))
    },
     [ADD_PROJECT](contexto, projectName){
      return httpClient.post('projects', {
        name: projectName
      })
    },
     [EDIT_PROJECT](contexto, project: TProject){
      return httpClient.put(`projects/${project.id}`, project)
    },
     [REMOVE_PROJECT]({ commit }, projectId: number){
       httpClient.delete(`projects/${projectId}`).then(() => {
        commit(REMOVE_PROJECT, projectId)
        commit(NOTIFY, {
        title: "Remoção de Projeto",
        text: "Projeto deletado com sucesso",
        type: NotificationType.WARNNING,
      })
       })
    }
  }
});

export function useStore(): Store<State> {
  return vuexUseStore(key);
}
