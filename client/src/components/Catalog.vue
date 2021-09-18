<template>
  <div class="catalog__inner">
    <aside-filter
      :products="products"
      @filter="(p) => updateProduct(p)"
    ></aside-filter>

    <div class="catalog__inner-list">
      <catalog-item
        v-for="product in productItems"
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
  data() {
    return {
      copy: this.products,
      filtered: [],
    };
  },
  computed: {
    productItems() {
      if (this.filtered.length == 0) {
        return this.products;
      } else {
        return this.filtered;
      }
    },
  },
  methods: {
    updateProduct(p) {
      this.filtered = p;
    },
  },
  components: {
    AsideFilter,
    CatalogItem,
  },
};
</script>
