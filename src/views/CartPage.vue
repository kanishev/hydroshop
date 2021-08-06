<template>
  <div class="container">
    <h1 class="cart-title">Корзина</h1>

    <cart-item v-for="(i, idx) in 3" :key="idx"></cart-item>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
export default {
  components: { CartItem },
};
</script>

<style>
.cart-title {
  margin-bottom: 30px;
}
</style>