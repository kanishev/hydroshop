<template>
  <div class="product-card__inner">
    <div class="product-card__img-box product-item--sale">
      <img
        class="product-card__img"
        src="../../images/product/product-page__item.png"
        alt=""
      />
      <p class="product-card__price-old">1 200 475 Р</p>
      <p class="product-card__price-new">1 100 475 Р</p>
      <a href="#" class="product-card__link"> Нашли дешевле? Снизим цену </a>
      <button class="product-card__buy product-card__buy-mobile">купить</button>
    </div>

    <div class="product-card__content">
      <h1 class="product-card__title">
        Гидроцикл BRP SeaDao GTI 155hp SE Long Blue Metallic
      </h1>
      <p class="product-card__code">Код товара: 21221-2</p>
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
</template>

<script>
import ProductInfo from "../Product/ProductInfo.vue";

export default {
  components: { ProductInfo },
};
</script>