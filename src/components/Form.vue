<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "FormComponent",
});
</script>

<template>
  <div class="box has-background-white">
    <div class="columns">
      <form class="column is-flex" aria-label="Formulário para criacao de uma nova tarefa">
        <div class="column is-8">
          <input
            type="text"
            name="task"
            class="input"
            placeholder="Qual tarefa você deseja iniciar?"
          />
        </div>

        <div class="column is-4 is-flex is-align-items-center is-justify-content-space-between">
          <div>
            <strong class="timer">00:00:00</strong>
          </div>
          <button class="button">
            <span class="icon">
              <i class="fas fa-play"></i>
            </span>
            <span>play</span>
          </button>
          <button class="button">
            <span class="icon">
              <i class="fas fa-stop"></i>
            </span>
            <span>stop</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
