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
              <app-tab class="search__tabs-item tab--active" href="#tab-1">
                Поиск по номеру</app-tab
              >
              <app-tab class="search__tabs-item" href="#tab-2">
                Поиск по марке</app-tab
              >
              <app-tab class="search__tabs-item" href="#tab-3">
                Поиск по названию товара</app-tab
              >
            </div>
          </div>
          <div class="search__content">
            <div
              id="tab-1"
              class="tabs-content search__content-item tabs-content--active"
            >
              <search-block searchTarget="Введите номер"></search-block>
            </div>
            <div id="tab-2" class="tabs-content search__content-item">
              <search-block searchTarget="Введите марку"></search-block>
            </div>
            <div id="tab-3" class="tabs-content search__content-item">
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
              <app-tab class="products__tab tab--active" href="#product-tab-1">
                запчасти</app-tab
              >
              <app-tab class="products__tab" href="#product-tab-2">
                моторы</app-tab
              >
              <app-tab class="products__tab" href="#product-tab-3">
                шины</app-tab
              >
              <app-tab class="products__tab" href="#product-tab-4">
                электроника</app-tab
              >
              <app-tab class="products__tab" href="#product-tab-5">
                инструменты</app-tab
              >
              <app-tab class="products__tab" href="#product-tab-6">
                аксессуары</app-tab
              >
            </div>
          </div>
          <div class="tabs-container products__container">
            <div
              v-for="(product, idx) in products"
              :key="idx"
              :id="'product-tab' + '-' + (idx + 1)"
              :class="
                idx === 0
                  ? 'tabs-content products__content tabs-content--active'
                  : 'tabs-content products__content'
              "
            >
              <product-slider :products="products"></product-slider>
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
            <div class="tabs products__tabs mobile-overflow">
              <app-tab class="products__tab tab--active" href="#popular-tab-1">
                запчасти</app-tab
              >
              <app-tab class="products__tab" href="#popular-tab-2">
                моторы</app-tab
              >
              <app-tab class="products__tab" href="#popular-tab-3">
                шины</app-tab
              >
              <app-tab class="products__tab" href="#popular-tab-4">
                электроника</app-tab
              >
              <app-tab class="products__tab" href="#popular-tab-5">
                инструменты</app-tab
              >
              <app-tab class="products__tab" href="#popular-tab-6">
                аксессуары</app-tab
              >
            </div>
          </div>
          <div class="tabs-container products__container">
            <div
              v-for="(product, idx) in additional"
              :key="idx"
              :id="'popular-tab' + '-' + (idx + 1)"
              :class="
                idx === 0
                  ? 'tabs-content products__content tabs-content--active'
                  : 'tabs-content products__content'
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
import BannerSlider from "../components/BannerSlider.vue";
import BannerSale from "../components/BannerSale.vue";
import Search from "../components/Search.vue";
import CategoriesList from "../components/CategoriesList.vue";
import ProductSlider from "../components/Product/ProductSlider.vue";
import AppButton from "../components/UI/AppButton.vue";
import Banner from "../components/Banner.vue";

export default {
  data() {
    return {
      products: [
        {
          title: "Водонипроницаемый рюкзак 1",
          src: "../../images/content/product-1.png",
          price: 9800,
          available: true,
          sale: false,
        },
        {
          title: "Водонипроницаемый рюкзак 2",
          src: "../../images/content/product-1.png",
          price: 9800,
          available: true,
          sale: false,
        },
        {
          title: "Водонипроницаемый рюкзак 3",
          src: "../../images/content/product-1.png",
          price: 9800,
          available: false,
          sale: true,
        },
        {
          title: "Водонипроницаемый рюкзак 4",
          src: "../../images/content/product-1.png",
          price: 9800,
          available: false,
          sale: true,
        },
        {
          title: "Водонипроницаемый рюкзак 5",
          src: "../../images/content/product-1.png",
          price: 9800,
          available: false,
          sale: true,
        },
        {
          title: "Водонипроницаемый рюкзак 6",
          src: "../../images/content/product-1.png",
          price: 9800,
          available: true,
          sale: true,
        },
      ],
      additional: [
        {
          title: "BRP Audio-портативная система",
          src: "../images/content/popular-1.png",
          price: 120000,
          available: true,
          sale: false,
        },
        {
          title: "Garmin Echomap Plus 62cv",
          src: "../images/content/popular-2.png",
          price: 10500,
          available: true,
          sale: false,
        },
        {
          title: "D.E.S.S.TM Key ",
          src: "../images/content/popular-3.png",
          price: 55200,
          available: false,
          sale: true,
        },
        {
          title: "Мужской костюм 3мм RF",
          src: "../images/content/popular-4.png",
          price: 15000,
          available: false,
          sale: true,
        },
        {
          title: "Водонипроницаемый рюкзак",
          src: "../../images/content/product-1.png",
          price: 45000,
          available: false,
          sale: true,
        },
        {
          title: "Водонипроницаемый рюкзак",
          src: ".../../images/content/product-1.png",
          price: 98000,
          available: true,
          sale: true,
        },
      ],
    };
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