import { store } from "@/store";
import { NOTIFY } from "@/store/mutation.type";
import type { NotificationType } from "@/types/notification";

export const notificar = {
  methods:{
    notificar(title: string, text: string, type: NotificationType){
      store.commit(NOTIFY, {
          title,
          text,
          type
        });
    }
  }
}
