<template>
  <div class="aside-filter__content-box">
    <label class="aside-filter__content-label">
      <input class="filter-style" type="checkbox" />
      <span class="filter-sales__text">{{ title }}</span>
    </label>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>