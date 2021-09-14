<template>
  <div class="catalog__inner">
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
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      const products = this.$store.getters.getProducts;
      if (!products) return [];
      return products.filter((p) => p.category === "product");
    },
  },
  components: {
    AsideFilter,
    CatalogItem,
  },
};
</script>
