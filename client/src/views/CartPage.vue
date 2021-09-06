<template>
  <div class="container">
    <div class="cart-title">
      <h1>Корзина</h1>
      <p>{{ totalPrice }}</p>
    </div>

    <app-loader v-if="isLoading"></app-loader>

    <cart-item
      v-else
      v-for="(product, idx) in cart"
      :key="idx"
      :product="product"
      @addProduct="addProduct"
      @removeProduct="removeProduct"
    ></cart-item>
  </div>
</template>

<script>
import CartItem from "../components/CartItem.vue";
import { computePrice } from "../utils/computePrice";
import axios from "axios";

export default {
  mounted() {
    this.fetchCartData();
  },
  data() {
    return {
      isLoading: true,
      totalPrice: 0,
      cart: [],
    };
  },
  methods: {
    async fetchCartData() {
      this.isLoading = true;
      const { data } = await axios.get("/cart");
      this.cart = data;
      this.totalPrice = computePrice(data);
      this.isLoading = false;
    },
    async addProduct(id) {
      this.cart = this.cart.map((p) => {
        if (p.id == id) {
          p.count++;
        }
        return p;
      });
      this.totalPrice = computePrice(this.cart);
      await axios.post("/cart/add", { id });
    },
    async removeProduct(id, exact) {
      if (exact) {
        this.cart = this.cart.filter((p) => p.id !== id);

        this.totalPrice = computePrice(this.cart);
        await axios.post("/cart/remove", { id, exact });
      } else {
        this.cart = this.cart.map((p) => {
          if (p.id == id) {
            p.count--;
          }
          return p;
        });

        this.totalPrice = computePrice(this.cart);
        await axios.post("/cart/remove", { id });
      }
    },
  },
  components: { CartItem },
};
</script>

<style>
.cart-title {
  margin: 30px 0;
  display: flex;
  justify-content: space-between;
}

.cart-title p {
  font-size: 34px;
  font-weight: bold;
}
</style>
