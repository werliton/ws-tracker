import type { TProject } from "@/types/project";
import type { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

interface State {
  projects: TProject[];
}
// Configura uma chave de acesso para os consumidores
export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    projects: [
      {
        id: new Date().toISOString(),
        name: "teste vuex2026",
      },
    ],
  },
});
