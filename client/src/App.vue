<template>
  <div id="app">
    <app-alert
      v-if="message.value"
      :message="message.value"
      :type="message.type"
    ></app-alert>

    <component :is="layout"> </component>
  </div>
</template>

<style>
</style>

<script>
import MainLayout from "./layouts/main.vue";
import EmptyLayout from "./layouts/empty.vue";
import AppAlert from "./components/UI/AppAlert.vue";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
    message() {
      return this.$store.getters.getMessage;
    },
  },

  components: { EmptyLayout, MainLayout, AppAlert },
};
</script>
