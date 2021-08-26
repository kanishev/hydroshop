<template>
  <div v-if="product" class="product-card__inner">
    <div class="product-card__img-box" :class="{'product-item--sale' : product.sale }">
      <img
        class="product-card__img"
        :src="product.img"
        alt=""
      />
      <p class="product-card__price-old">1 200 475 Р</p>
      <p class="product-card__price-new">{{product.price}} Р</p>
      <a href="#" class="product-card__link"> Нашли дешевле? Снизим цену </a>
      <button class="product-card__buy product-card__buy-mobile">купить</button>
    </div>

    <div class="product-card__content">
      <h1 class="product-card__title">
        {{product.title}}
      </h1>
      <p class="product-card__code">Код товара: {{product._id}} </p>
      <div class="product-card__buttons">
        <a class="product-card__icon-favourite" href="#">
          <img src="@/assets/icons/heart.svg" alt="" />
        </a>
        <a class="product-card__icon-compression" href="#">
          <img src="@/assets/icons/compression.svg" alt="" />
        </a>
        <a class="rate" href="#">
          <div class="rate-yo" data-rateyo-rating="4"></div>
        </a>
      </div>

      <div class="tabs-wrapper product-card__tabs">
        <div class="tabs">
          <a class="tab product-card__tab tab--active" href="#product-1">
            Характеристики
          </a>
        </div>
        <div class="tabs-container">
          <div
            id="product-1"
            class="product-card__tab-content tabs-content tabs-content--active"
          >
            <product-info></product-info>
            <button class="product-card__buy">купить</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>No data</div>
</template>

<script>
import ProductInfo from "../Product/ProductInfo.vue";

export default {
  props:['product'],
  components: { ProductInfo },
};
</script>
