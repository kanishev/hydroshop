<template>
  <div class="product-item__wrapper">
    <button class="product-item__favourite"></button>
    <button class="product-item__cart">
      <img src="../../assets/icons/cart-white.svg" alt="cart" />
    </button>
    <a
      :class="product.sale ? 'product-item product-item--sale' : 'product-item'"
      href="#"
      @click.prevent="openProduct(product._id)"
    >
      <a class="product-item__hover-text">посмотреть товар</a>
      <img
        :src="require(`../../images/catalog/${product.img}`)"
        alt=""
        class="product-item__img"
      />
      <h4 class="product-item__title">{{ product.title }}</h4>

      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    openProduct(id) {
      this.$router.push(`products/${id}`);
    },
  },
};
</script>
