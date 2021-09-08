<template>
  <div class="container">
    <h1 class="page__title">Страница избранных товаров</h1>

    <div
      v-for="(product, idx) in products"
      :key="idx"
      :id="'popular-' + (idx + 1)"
      :class="
        idx === 0
          ? 'tabs-content products__content tabs-content--active'
          : 'tabs-content products__content'
      "
    >
      <product-slider :products="products"></product-slider>
    </div>
  </div>
</template>

<script>
import ProductSlider from "../components/Product/ProductSlider.vue";

export default {
  data() {
    return {
      products: [
        {
          title: "Водонипроницаемый рюкзак 1",
          img: "product-1.png",
          price: 9800,
          available: true,
          sale: false,
        },
        {
          title: "Водонипроницаемый рюкзак 2",
          img: "product-1.png",
          price: 9800,
          available: true,
          sale: false,
        },
        {
          title: "Водонипроницаемый рюкзак 3",
          img: "product-1.png",
          price: 9800,
          available: false,
          sale: true,
        },
        {
          title: "Водонипроницаемый рюкзак 4",
          img: "product-1.png",
          price: 9800,
          available: false,
          sale: true,
        },
        {
          title: "Водонипроницаемый рюкзак 5",
          img: "product-1.png",
          price: 9800,
          available: false,
          sale: true,
        },
        {
          title: "Водонипроницаемый рюкзак 6",
          img: "product-1.png",
          price: 9800,
          available: true,
          sale: true,
        },
      ],
    };
  },
  components: { ProductSlider },
};
</script>
