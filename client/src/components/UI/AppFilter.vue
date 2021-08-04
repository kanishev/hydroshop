<template>
  <li class="aside-filter__item-drop">
    <p class="aside-filter__item-title filter__item-drop">{{ title }}</p>
    <div class="aside-filter__content">
      <slot></slot>

      <div
        class="aside-filter__content-box"
        v-for="field in fields"
        :key="field"
      >
        <label class="aside-filter__content-label">
          <input
            class="filter-style"
            :type="type"
            :name="type === 'radio' && title"
          />
          {{ field }}
        </label>
        <slot name="span"></slot>
      </div>

      <slot name="more"></slot>
    </div>
  </li>
</template>

<script>
export default {
  props: ["type", "fields", "title"],
  name: "app-filter",
};
</script>