<template>
  <div class="product-slider">
    <carousel
      :perPage="4"
      paginationActiveColor="#1c62cd"
      :perPageCustom="[
        [1, 1],
        [590, 2],
        [870, 3],
        [1200, 4],
      ]"
    >
      <slide
        class="prodcut-slider-item"
        v-for="product in products"
        :key="product.title"
      >
        <product-item :product="product">
          <p v-if="!product.available" class="product-item__notify">
            нет в наличии
          </p>
          <p v-else class="price product-item__price">{{ product.price }} Р</p>
        </product-item>
      </slide>
    </carousel>
  </div>
</template>

<script>
import ProductItem from "./ProdutItem.vue";

export default {
  props: ["products"],
  components: { ProductItem },
};
</script>
