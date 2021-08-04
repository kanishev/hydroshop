<template>
  <li class="categories__item">
    <div class="categories__item-info">
      <div class="categories__item-title">{{ title }}</div>
      <a class="categories__item-small">Подробнее</a>
    </div>
    <div class="categories__item-img">
      <img :src="`${src}`" alt="" />
    </div>
  </li>
</template>

<script>
export default {
  props: ["title", "src"],
};
</script>