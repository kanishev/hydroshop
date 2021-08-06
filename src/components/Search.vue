<template>
  <form class="search__content-form">
    <input
      class="search__content-input"
      type="text"
      :placeholder="searchTarget"
    />
    <app-button>Искать</app-button>
  </form>
</template>

<script>
export default {
  props: ["searchTarget"],
};
</script>

