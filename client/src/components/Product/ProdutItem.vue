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
      <img src="../../assets/icons/cart-white.svg" alt="cart" />
    </button>
    <a
      :class="product.sale ? 'product-item product-item--sale' : 'product-item'"
      href="#"
      @click.prevent="openProduct(product._id)"
    >
      <a class="product-item__hover-text">посмотреть товар</a>
      <img
        :src="require('../../images/content/' + product.img)"
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
  computed: {
    isFavourite() {
      const user = this.$store.getters.getUser;
      if (!user || !user.favour) return false;

      let favour = false;

      user.favour.items.forEach((el) => {
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

      this.$store.commit("setUser", user);
      this.$store.commit("setMessage", data.message);
    },
    async toggleFavourite(id) {
      let user = this.$store.getters.getUser;

      const toggled = this.$refs.favourite.classList.contains(
        "product-item__favourite--active"
      );

      if (user.role == "NOT_AUTH") {
        this.$router.push("/auth");
      } else {
        if (toggled) {
          await axios.post("/favourite/remove", { id });
          user.favour.items = user.favour.items.filter(
            (p) => p.productId !== id
          );
          this.$store.commit("setUser", user);
        } else {
          await axios.post("/favourite/add", { id });
          user.favour.items.push({ productId: id });
          this.$store.commit("setUser", user);
        }
      }
    },
  },
};
</script>
