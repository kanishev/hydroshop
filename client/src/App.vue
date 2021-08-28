<template>
  <div id="app">
    <component :is="layout"> </component>
  </div>
</template>

<style>
</style>

<script>
import MainLayout from "./layouts/main.vue";
import EmptyLayout from "./layouts/empty.vue";

export default {
  computed: {
    layout() {
      return (this.$route.meta.layout || "empty") + "-layout";
    },
  },

  components: { EmptyLayout, MainLayout },
};
</script>
