<template>
  <div class="filter__item-list">
    <p class="filter__item-list_title">{{ title }}</p>
    <select class="filter-style filter__item-list_select" name="" id="">
      <option>90</option>
      <option>130</option>
      <option>154</option>
      <option>230</option>
    </select>
  </div>
</template>

<script>
export default {
  props: ["title"],
};
</script>