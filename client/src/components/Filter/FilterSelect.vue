<template>
  <div class="filter__item-list">
    <p class="filter__item-list_title">{{ title }}</p>
    <div class="select">
      <select
        class="filter-style filter__item-list_select"
        name=""
        id=""
        @change="$emit('change', Number.parseInt($event.target.value))"
      >
        <option v-for="value in values" :key="value" :value="value">
          {{ value }}
        </option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "values"],
};
</script>
