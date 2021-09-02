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

      <Catalog :products="products" />

      <Pagination />
    </div>
  </section>
</template>

<script>
import Pagination from "../components/Pagination.vue";
import Catalog from "../components/Catalog.vue";

export default {
  mounted() {
    const products = this.$store.getters.getProducts;

    if (!products) {
      this.$store.dispatch("getProducts");
    } else {
      this.$store.getters.getProducts;
    }
  },
  computed: {
    products() {
      return this.$store.getters.getProducts;
    },
  },
  data() {
    return {};
  },
  components: { Pagination, Catalog },
};
</script>

<style>
</style>
