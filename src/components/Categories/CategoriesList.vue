<template>
  <ul class="categories__inner">
    <categories-item
      v-for="category in categories"
      :key="category.title"
      :title="category.title"
      :src="category.path"
    ></categories-item>
  </ul>
</template>


<script>
import CategoriesItem from "../Categories/CategoriesItem.vue";

export default {
  data() {
    return {
      categories: [
        { title: "Квадроциклы", path: "../../images/content/categories-1.png" },
        { title: "Гидроциклы", path: "../../images/content/categories-2.png" },
        { title: "Катера", path: "../../images/content/categories-3.png" },
        { title: "Снегоходы", path: "../../images/content/categories-4.png" },
        { title: "Вездеходы", path: "../../images/content/categories-5.png" },
        { title: "Двигатели", path: "../../images/content/categories-6.png" },
      ],
    };
  },
  components: { CategoriesItem },
};
</script>