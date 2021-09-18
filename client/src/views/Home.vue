<template>
  <main>
    <section class="banner-section">
      <div class="container">
        <div class="banner-section__inner">
          <banner-slider></banner-slider>
          <banner-sale></banner-sale>
        </div>
      </div>
    </section>

    <section class="search">
      <h1 style="display: none">section title</h1>
      <div class="container">
        <div class="search__inner">
          <div class="search__tabs tabs-wrapper">
            <div class="mobile-overflow">
              <app-tab
                class="search search__tabs-item tab--active"
                href="#search-1"
              >
                Поиск по номеру</app-tab
              >
              <app-tab class="search search__tabs-item" href="#search-2">
                Поиск по марке</app-tab
              >
              <app-tab class="search search__tabs-item" href="#search-3">
                Поиск по названию товара</app-tab
              >
            </div>
          </div>
          <div class="search__content">
            <div
              id="search-1"
              class="tabs-content search__content-item tabs-content--active"
            >
              <search-block searchTarget="Введите номер"></search-block>
            </div>
            <div id="search-2" class="tabs-content search__content-item">
              <search-block searchTarget="Введите марку"></search-block>
            </div>
            <div id="search-3" class="tabs-content search__content-item">
              <search-block
                searchTarget="Введите название товара"
              ></search-block>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="categories">
      <div class="container">
        <categories-list></categories-list>
      </div>
    </section>

    <section class="products">
      <div class="container">
        <div class="products__inner">
          <h3 class="product__title">Популярные товары</h3>
          <div class="tabs-wrapper">
            <div class="tabs products__tabs mobile-overflow">
              <app-tab class="products__tab tab--active" href="#product-1">
                запчасти</app-tab
              >
              <app-tab class="products__tab" href="#product-2"> моторы</app-tab>
              <app-tab class="products__tab" href="#product-3"> шины</app-tab>
              <app-tab class="products__tab" href="#product-4">
                электроника</app-tab
              >
              <app-tab class="products__tab" href="#product-5">
                инструменты</app-tab
              >
              <app-tab class="products__tab" href="#product-6">
                аксессуары</app-tab
              >
            </div>
          </div>
          <div class="tabs-container products__container">
            <div
              v-for="(product, idx) in popular"
              :key="idx"
              :id="'product' + '-' + (idx + 1)"
              :class="
                idx === 0
                  ? 'tabs-content products__content tabs-content--active'
                  : 'tabs-content products__content'
              "
            >
              <product-slider :products="popular"></product-slider>
            </div>
          </div>
          <div class="product__more">
            <app-button>Показать еще</app-button>
          </div>
        </div>
      </div>
    </section>

    <section class="banner">
      <div class="container">
        <Banner />
      </div>
    </section>

    <section class="popular">
      <div class="container">
        <div class="products__inner">
          <h3 class="product__title">С этим также покупают</h3>
          <div class="tabs-wrapper">
            <div class="tabs additional__tabs mobile-overflow">
              <app-tab class="additional__tab tab--active" href="#additional-1">
                запчасти</app-tab
              >
              <app-tab class="additional__tab" href="#additional-2">
                моторы</app-tab
              >
              <app-tab class="additional__tab" href="#additional-3">
                шины</app-tab
              >
              <app-tab class="additional__tab" href="#additional-4">
                электроника</app-tab
              >
              <app-tab class="additional__tab" href="#additional-5">
                инструменты</app-tab
              >
              <app-tab class="additional__tab" href="#additional-6">
                аксессуары</app-tab
              >
            </div>
          </div>
          <div class="tabs-container products__container">
            <div
              v-for="(product, idx) in additional"
              :key="idx"
              :id="'additional-' + (idx + 1)"
              :class="
                idx === 0
                  ? 'tabs-content additional__content tabs-content--active'
                  : 'tabs-content additional__content'
              "
            >
              <product-slider :products="additional"></product-slider>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import BannerSlider from "../components/Banner/BannerSlider.vue";
import BannerSale from "../components/Banner/BannerSale.vue";
import Search from "../components/Search.vue";
import CategoriesList from "../components/Categories/CategoriesList.vue";
import ProductSlider from "../components/Product/ProductSlider.vue";
import AppButton from "../components/UI/AppButton.vue";
import Banner from "../components/Banner/Banner.vue";

import mountScript from "../utils/tabs";

export default {
  updated() {
    mountScript();
  },
  computed: {
    additional() {
      const products = this.$store.getters.getProducts;
      if (!products) return [];
      return products.filter((p) => p.category === "additional");
    },
    popular() {
      const products = this.$store.getters.getProducts;
      if (!products) return [];
      return products.filter((p) => p.category === "popular");
    },
  },
  components: {
    BannerSlider,
    BannerSale,
    "search-block": Search,
    CategoriesList,
    ProductSlider,
    AppButton,
    Banner,
  },
};
</script>

<style>
</style>
