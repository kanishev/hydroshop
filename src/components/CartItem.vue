<template>
  <div class="cart-item">
    <div class="cart-item__image">
      <img src="../images/catalog/hydro-product-1.png" alt="" />
    </div>
    <div class="cart-item__info">
      <p class="cart-item__info-name">
        Гидроцикл BRP SeaDoo GTI 130hp SE BlackMango
      </p>
      <p class="cart-item__info-price">1 100 475 Р</p>
    </div>
    <div class="cart-item__info-article">
      <product-info></product-info>
    </div>

    <div class="cart-item__buttons">
      <app-button>Удалить</app-button>

      <div class="cart-item__count">
        <app-button>+</app-button>
        <p class="cart-item__quantity">21</p>
        <app-button>-</app-button>
      </div>
    </div>
  </div>
</template>

<script>
import ProductInfo from "./Product/ProductInfo.vue";
export default {
  components: { ProductInfo },
};
</script>

<style scoped>
.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 3px solid #f0f0f4;
}

.cart-item__info-name {
  margin-bottom: 50px;
}

.cart-item__buttons,
.cart-item__info {
  flex-basis: 20%;
}

.cart-item__count {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 25px;
}
</style>