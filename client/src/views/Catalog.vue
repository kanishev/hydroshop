<template>
  <section class="catalog">
    <div class="container">
      <h2 class="catalog__title">Гидроциклы</h2>

      <div class="catalog__filter">
        <div class="catalog__filter-wrapper">
          <div class="catalog__filter-items mobile-overflow">
            <button>Полноприводные</button>
            <button>от 5000</button>
            <button>BRP</button>
            <button>еще</button>
          </div>
        </div>
        <div class="catalog__filter-btn">
          <button
            class="
              catalog__filter-btn_grid
              catalog__filter-mode
              catalog__filter-mode--active
            "
          >
            <img src="images/icons/grid-mode.svg" alt="grid-mode" />
          </button>
          <button class="catalog__filter-btn_line catalog__filter-mode">
            <img src="images/icons/line-mode.svg" alt="line-mode" />
          </button>
        </div>
      </div>

      <div class="catalog__inner">
        <button class="aside__btn">фильтр</button>

        <aside-filter></aside-filter>

        <div class="catalog__inner-list">
          <product-item
            v-for="product in products"
            :key="product.title"
            :product="product"
          >
            <p v-if="!product.available" class="product-item__notify">
              нет в наличии
            </p>
            <p v-else class="price product-item__price">
              {{ product.price }} Р
            </p>
          </product-item>
        </div>
      </div>
      <Pagination />
    </div>
  </section>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import ProductItem from "../components/Product/ProdutItem.vue";
import AsideFilter from "../components/Filter/AsideFilter.vue";

export default {
  mounted() {
    this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
  data() {
    return {};
  },
  components: { Pagination, ProductItem, AsideFilter },
};
</script>

<style>
</style>
