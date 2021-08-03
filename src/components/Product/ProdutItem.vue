<template>
  <div class="product-item__wrapper">
    <button class="product-item__favourite"></button>
    <button class="product-item__cart">
      <img src="../../assets/icons/cart-white.svg" alt="cart" />
    </button>
    <a
      :class="product.sale ? 'product-item product-item--sale' : 'product-item'"
      href="#"
    >
      <p class="product-item__hover-text">посмотреть товар</p>
      <img :src="`${product.src}`" alt="" class="product-item__img" />
      <h4 class="product-item__title">{{ product.title }}</h4>

      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ["product"],
};
</script>
        

