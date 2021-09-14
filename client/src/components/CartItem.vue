<template>
  <div class="cart-item">
    <div class="cart-item__image">
      <img :src="require(`../images/catalog/${product.img}`)" alt="" />
    </div>
    <div class="cart-item__info">
      <p class="cart-item__info-name">
        {{ product.title }}
      </p>
      <b class="cart-item__info-price">{{ product.price }} Р</b>
    </div>

    <div class="cart-item__buttons">
      <app-button @click.native="$emit('removeProduct', product.id, true)">
        Удалить</app-button
      >

      <div class="cart-item__count">
        <app-button @click.native="addProduct">+</app-button>
        <p class="cart-item__quantity">{{ product.count }}</p>
        <app-button @click.native="removeProduct" :disabled="product.count == 1"
          >-</app-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    addProduct() {
      this.$emit("addProduct", this.product.id);
    },
    removeProduct() {
      this.$emit("removeProduct", this.product.id);
    },
  },
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
