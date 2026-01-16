<template>
  <div class="notificacoes">
    <article class="message is-success">
      <div class="message-header">Atenção!</div>
      <div class="message-body">Aqui vai um texto de notificação bem bacana</div>
    </article>

    <article class="message is-warning">
      <div class="message-header">Atenção!</div>
      <div class="message-body">Aqui vai um texto de notificação bem bacana</div>
    </article>

    <article class="message is-danger">
      <div class="message-header">Atenção!</div>
      <div class="message-body">Aqui vai um texto de notificação bem bacana</div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NotificationComponent",
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
