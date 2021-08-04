<template>
  <div>
    <section class="product-card">
      <div class="container">
        <product-card></product-card>
      </div>
    </section>

    <section class="card__tabs">
      <div class="container">
        <div class="tabs-wrapper">
          <div class="tabs card__tabs-box mobile-overflow">
            <app-tab class="card__tab tab--active" href="#product-card__tab-1"
              >О товаре</app-tab
            >

            <app-tab class="card__tab" href="#product-card__tab-2"
              >Характеристики</app-tab
            >
            <app-tab class="card__tab" href="#product-card__tab-3"
              >Отзывы</app-tab
            >
            <app-tab class="card__tab" href="#product-card__tab-4"
              >Самовывоз</app-tab
            >
            <app-tab class="card__tab" href="#product-card__tab-5"
              >Доставка</app-tab
            >
            <app-tab class="card__tab" href="#product-card__tab-6"
              >Сервис</app-tab
            >
          </div>
        </div>
        <div class="tabs-container">
          <div
            id="product-card__tab-1"
            class="card__tab-content tabs-content tabs-content--active"
          >
            <product-table></product-table>
          </div>
          <div
            id="product-card__tab-2"
            class="product-card__tab-content tabs-content"
          >
            <product-info></product-info>
          </div>
          <div
            id="product-card__tab-3"
            class="product-card__tab-content tabs-content"
          >
            content
          </div>
          <div
            id="product-card__tab-4"
            class="product-card__tab-content tabs-content"
          >
            content
          </div>
          <div
            id="product-card__tab-5"
            class="product-card__tab-content tabs-content"
          >
            content
          </div>
          <div
            id="product-card__tab-6"
            class="product-card__tab-content tabs-content"
          >
            content
          </div>
          <div
            id="product-card__tab-7"
            class="product-card__tab-content tabs-content"
          >
            content
          </div>
          <div
            id="product-card__tab-8"
            class="product-card__tab-content tabs-content"
          >
            content
          </div>
        </div>
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
  </div>
</template>

<script>
import ProductCard from "../components/Product/ProductCard.vue";
import ProductSlider from "../components/Product/ProductSlider.vue";
import ProductTable from "../components/Product/ProductTable.vue";
import ProductInfo from "../components/Product/ProductInfo.vue";

export default {
  data() {
    return {
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
          title: "Водонипроницаемый рюкзак 1",
          src: ".../../images/content/product-1.png",
          price: 98000,
          available: true,
          sale: true,
        },
      ],
    };
  },
  components: { ProductSlider, ProductTable, ProductCard, ProductInfo },
};
</script>

