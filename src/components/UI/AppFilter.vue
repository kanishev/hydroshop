<template>
  <li class="aside-filter__item-drop">
    <p class="aside-filter__item-title filter__item-drop active">{{ title }}</p>
    <div class="aside-filter__content active">
      <slot></slot>

      <div
        class="checkbox aside-filter__content-box"
        v-for="field in fields"
        :key="field"
      >
        <input
          :class="`${type}__input filter-style`"
          :type="type"
          :name="type == 'radio' && title"
          :id="field"
        />
        <label
          :class="`${type}__label aside-filter__content-label`"
          :for="field"
        >
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