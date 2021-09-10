<template>
  <div class="container">
    <h1 class="page__title">Страница избранных товаров</h1>
    <app-loader v-if="isLoading"></app-loader>

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
import axios from "axios";
import CatalogItem from "../components/CatalogItem.vue";
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
  components: { AppLoader, CatalogItem },
};
</script>
