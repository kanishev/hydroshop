<template>
  <div class="product-slider">
    <div
      class="prodcut-slider-item"
      v-for="product in products"
      :key="product.title"
    >
      <product-item :product="product">
        <p v-if="product.available" class="product-item__notify">
          нет в наличии
        </p>
        <p v-else class="price product-item__price">{{ product.price }} Р</p>
      </product-item>
    </div>
  </div>
</template>

<script>
import ProductItem from "./ProdutItem.vue";

export default {
  props: ["products"],
  components: { ProductItem },
};
</script>