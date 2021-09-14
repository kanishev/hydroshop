<template>
  <div class="filter__item-list">
    <p class="filter__item-list_title">{{ title }}</p>
    <div class="select">
      <select
        class="filter-style filter__item-list_select"
        name=""
        id=""
        @change="$emit('change', $event.target.value)"
      >
        <option>90</option>
        <option>130</option>
        <option>154</option>
        <option>230</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "model"],
};
</script>
