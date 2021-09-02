<template>
  <div class="catalog__inner">
    <button class="aside__btn">фильтр</button>

    <aside-filter></aside-filter>

    <div class="catalog__inner-list">
      <catalog-item
        v-for="product in products"
        :key="product.id"
        :product="product"
      >
        <p v-if="!product.available" class="product-item__notify">
          нет в наличии
        </p>
        <p v-else class="price product-item__price">{{ product.price }} Р</p>
      </catalog-item>
    </div>
  </div>
</template>

<script>
import AsideFilter from "../components/Filter/AsideFilter.vue";
import CatalogItem from "../components/CatalogItem.vue";

export default {
  props: ["products"],
  components: {
    AsideFilter,
    CatalogItem,
  },
};
</script>
