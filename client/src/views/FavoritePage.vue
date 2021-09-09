<template>
  <div class="container">
    <h1 class="page__title">Страница избранных товаров</h1>
    <app-loader v-if="isLoading"></app-loader>

    <div
      v-for="(product, idx) in products"
      :key="idx"
      :id="'popular-' + (idx + 1)"
      :class="
        idx === 0
          ? 'tabs-content products__content tabs-content--active'
          : 'tabs-content products__content'
      "
    >
      <product-slider :products="products"></product-slider>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductSlider from "../components/Product/ProductSlider.vue";
import AppLoader from "../components/UI/AppLoader.vue";

export default {
  mounted() {
    this.isLoading = true;
    this.fetchFavourite();
  },
  methods: {
    async fetchFavourite() {
      const { data } = await axios.get("/favourite");
      this.products = data.products;

      this.isLoading = false;
    },
  },
  data() {
    return {
      isLoading: false,
      products: [],
    };
  },
  components: { ProductSlider, AppLoader },
};
</script>
