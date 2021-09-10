<template>
  <div class="product-item__wrapper">
    <button
      :class="
        isFavourite
          ? 'product-item__favourite product-item__favourite--active'
          : 'product-item__favourite'
      "
      @click="toggleFavourite(product._id)"
      ref="favourite"
    ></button>
    <button class="product-item__cart" @click="addToCart(product._id)">
      <img src="../assets/icons/cart-white.svg" alt="cart" />
    </button>
    <a
      :class="product.sale ? 'product-item product-item--sale' : 'product-item'"
      href="#"
      @click.prevent="openProduct(product._id)"
    >
      <a class="product-item__hover-text">посмотреть товар</a>
      <img
        :src="require('../images/catalog/' + product.img)"
        alt=""
        class="product-item__img"
      />
      <h4 class="product-item__title">{{ product.title }}</h4>

      <slot></slot>
    </a>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["product"],
  name: "catalog-item",
  computed: {
    isFavourite() {
      const favouriteList = this.$store.getters.getUser.favour.items;

      let favour = false;

      favouriteList.forEach((el) => {
        if (el.productId == this.product._id) {
          favour = true;
        }
      });

      return favour;
    },
  },
  methods: {
    openProduct(id) {
      this.$router.push(`products/${id}`);
    },
    async addToCart(id) {
      let user = this.$store.getters.getUser;

      const { data } = await axios.post("/cart/add", { id });

      user.cart = data.cart;

      this.$store.commit("setUser", Object.assign({}, user));
      this.$store.commit("setMessage", data.message);
    },
    async toggleFavourite(id) {
      const toggled = this.$refs.favourite.classList.contains(
        "product-item__favourite--active"
      );

      if (toggled) {
        await axios.post("/favourite/remove", { id });
      } else {
        await axios.post("/favourite/add", { id });
      }
    },
  },
};
</script>
