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
  computed: {
    products() {
      console.log(this.$store.getters.getProducts);

      return this.$store.getters.getProducts;
    },
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
  data() {
    return {
      catalog: [
        {
          title: "Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango ",
          src: "../../images/catalog/hydro-product-1.png",
          price: 1049500,
          available: false,
          sale: true,
        },
        {
          title: " Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic ",
          src: "../../images/catalog/hydro-product-1.png",
          price: 1049500,
          available: false,
          sale: false,
        },
        {
          title: " Гидроцикл BRP SeaDoo GTR 230hp X California green  ",
          src: "../../images/catalog/hydro-product-2.png",
          price: 1049500,
          available: false,
          sale: true,
        },
        {
          title: "  Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream ",
          src: "../../images/catalog/hydro-product-3.png",
          price: 1049500,
          available: false,
          sale: true,
        },
        {
          title: "  Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal   ",
          src: "../../images/catalog/hydro-product-4.png",
          price: 1049500,
          available: false,
          sale: true,
        },
        {
          title: "  Гидроцикл BRP SeaDoo Spark 60hp 2 up   ",
          src: "../../images/catalog/hydro-product-5.png",
          price: 1049500,
          available: false,
          sale: false,
        },

        {
          title: "   Гидроцикл BRP SeaDoo Spark GTS 90hp Rental  ",
          src: "../../images/catalog/hydro-product-6.png",
          price: 1049500,
          available: false,
          sale: false,
        },
        {
          title: "   Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue   ",
          src: "../../images/catalog/hydro-product-7.png",
          price: 1049500,
          available: false,
          sale: false,
        },
        {
          title: "   Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper   ",
          src: "../../images/catalog/hydro-product-8.png",
          price: 1049500,
          available: false,
          sale: true,
        },

        {
          title: "   Гидроцикл Spark 2-UP 900 Ho Ace Pineapple   ",
          src: "../../images/catalog/hydro-product-10.png",
          price: 1049500,
          available: false,
          sale: true,
        },
        {
          title: "    Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla ",
          src: "../../images/catalog/hydro-product-11.png",
          price: 1049500,
          available: false,
          sale: false,
        },
        {
          title: "   Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry  ",
          src: "../../images/catalog/hydro-product-12.png",
          price: 1049500,
          available: false,
          sale: false,
        },
      ],
    };
  },
  components: { Pagination, ProductItem, AsideFilter },
};
</script>

<style>
</style>