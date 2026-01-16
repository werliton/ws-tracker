<template>
  <div class="notificacoes">
    <article
      class="message is-success"
      :class="context[notification.tipo]"
      v-for="notification in notifications"
      :key="notification.id"
    >
      <div class="message-header">{{ notification.title }}</div>
      <div class="message-body">{{ notification.text }}</div>
    </article>
  </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { NotificationType } from "@/types/notification";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "NotificationComponent",
  data() {
    return {
      context: {
        [NotificationType.SUCCESS]: "is-success",
        [NotificationType.ERROR]: "is-danger",
        [NotificationType.WARNNING]: "is-warning",
      },
    };
  },
  setup() {
    const store = useStore();

    return {
      store,
      notifications: computed(() => store.state.notifications),
    };
  },
});
</script>

<style scoped>
.notificacoes {
  padding: 1rem;
  position: absolute;
  right: 0;
  z-index: 10;
}
</style>
