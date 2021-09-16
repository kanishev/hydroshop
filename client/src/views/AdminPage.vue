<template>
  <div class="container">
    <h1 class="page__title">Страница администратора</h1>

    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <fieldset>
        <legend>Создать / Редактировать продукт:</legend>

        <div>
          <select name="product" @change="selectProduct" v-model="select">
            <option disabled selected>Выберите товар</option>
            <option
              v-for="product in products"
              :key="product.item"
              :value="product.title"
            >
              {{ product.title }}
            </option>
          </select>
        </div>

        <div>
          <label for="title">Название продукта:</label>
          <input
            type="text"
            placeholder=""
            name="title"
            id="title"
            v-model="productName"
          />
        </div>
        <div>
          <label for="price">Цена продукта:</label>
          <input
            type="number"
            placeholder=""
            name="price"
            id="price"
            v-model="productPrice"
          />
        </div>

        <div>
          <label for="brand">Бренд продукта:</label>
          <select id="brand" name="brand" v-model="productBrand">
            <option value="BRP">BRP</option>
            <option value="Spark 2">Spark 2</option>
            <option value="Spark 3">Spark 3</option>
          </select>
        </div>

        <div>
          <label for="model">Модель продукта:</label>
          <select id="model" name="model" v-model="productModel">
            <option value="Модель 1">Модель 1</option>
            <option value="Модель 2">Модель 2</option>
            <option value="Модель 3">Модель 3</option>
          </select>
        </div>

        <div>
          <label for="country">Страна производитель:</label>
          <select id="country" name="country" v-model="productCountry">
            <option value="CША">CША</option>
            <option value="Россия">Россия</option>
            <option value="Германия 3">Германия</option>
            <option value="Китай">Китай</option>
          </select>
        </div>

        <div>
          <label for="engine">Мощность:</label>
          <select id="engine" name="engine" v-model="productEngine">
            <option value="CША">90</option>
            <option value="Россия">130</option>
            <option value="Германия 3">154</option>
            <option value="Китай">230</option>
          </select>
        </div>

        <div>
          <label for="engine_hp">Мощность двигателя л.с:</label>
          <select id="engine_hp" name="engine_hp" v-model="productEngine_hp">
            <option value="20">20</option>
            <option value="60">60</option>
            <option value="100">100</option>
            <option value="120">120</option>
          </select>
        </div>

        <div>
          <label for="speed">Максимальная скорость:</label>
          <select id="speed" name="speed" v-model="productSpeed">
            <option value="60">60</option>
            <option value="110">110</option>
            <option value="160">160</option>
            <option value="180">180</option>
          </select>
        </div>

        <div>
          <label for="category">Категория продукта:</label>
          <select id="category" name="category" v-model="productCategory">
            <option value="product">Продукт</option>
            <option value="popular">Популярное</option>
            <option value="additional">Дополнительный</option>
          </select>
        </div>

        <div>
          <label for="rate">Рейтинг товара:</label>
          <select id="rate" name="rate" v-model="productRate">
            <optgroup label="rate">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </optgroup>
          </select>
        </div>

        <div>
          <label>Available:</label>
          <input
            type="radio"
            id="available"
            value="available"
            name="available"
            v-model="productAvailable"
            checked
          />
          <label for="available" class="light">В наличии</label> <br />

          <input
            type="radio"
            id="notAvailable"
            value="notAvailable"
            v-model="productAvailable"
            name="available"
          />
          <label for="notAvailable" class="light">Не в наличии</label>
        </div>

        <div>
          <label>Sale:</label>
          <input
            type="radio"
            id="sale"
            value="sale"
            name="sale"
            checked
            v-model="productSale"
          />
          <label for="sale" class="light">Распродажа</label> <br />

          <input
            type="radio"
            id="primary"
            value="primary"
            name="sale"
            v-model="productSale"
          />
          <label for="primary" class="light">Обычная цена</label>
        </div>

        <div>
          <span>Избражение</span>
          <input ref="file" type="file" name="product" @change="setImage" />
        </div>

        <div class="form-btn">
          <button
            type="submit"
            class="btn"
            @click="type = 'create'"
            :disabled="isLoading"
          >
            Создать
          </button>
          <button
            type="submit"
            class="btn"
            @click="type = 'edit'"
            :disabled="isLoading"
          >
            Изменить
          </button>
        </div>
      </fieldset>
    </form>

    <form @submit.prevent="removeProduct">
      <fieldset>
        <legend>Удалить продукт</legend>
        <div>
          <select
            name="removeProduct"
            @change="selectToRemove"
            v-model="removeSelect"
          >
            <option disabled selected>Выберите товар</option>
            <option
              v-for="product in products"
              :key="product.item"
              :value="product.title"
            >
              {{ product.title }}
            </option>
          </select>
        </div>
        <app-button type="submit">удалить продукт</app-button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  mounted() {
    const products = this.$store.getters.getProducts;

    if (!products) {
      this.$store.dispatch("getProducts");
    }
  },
  data() {
    return {
      type: null,
      select: "Выберите товар",
      isLoading: false,

      removeSelect: "Выберите товар",
      removeProductId: null,

      productName: "",
      productPrice: "",
      productRate: "",
      productBrand: "",
      productSale: "",
      productAvailable: "",
      productImage: "",
      productId: "",
      productCategory: "",
      productModel: "",
      productCountry: "",
      productEngine: "",
      productEngine_hp: "",
      productSpeed: "",

      removeName: "",
    };
  },
  computed: {
    products() {
      console.log(this.$store.getters.getProducts);
      return this.$store.getters.getProducts;
    },
  },
  methods: {
    async submitForm() {
      this.isLoading = true;
      let file = this.$refs.file.files[0];
      let fd = new FormData();
      fd.append("product", file);

      let { data } = await axios.post(`/admin/${this.type}`, {
        title: this.productName,
        price: this.productPrice,
        rate: this.productRate,
        brand: this.productBrand,
        sale: this.productSale === "sale" ? true : false,
        available: this.productAvailable === "available" ? true : false,
        img: this.productImage,
        id: this.productId,
        engine: Number.parseInt(this.productEngine),
        engine_hp: Number.parseInt(this.productEngine_hp),
        speed: Number.parseInt(this.productSpeed),
        country: this.productCountry,
        category: this.productCategory,
      });

      await axios.post("admin/image", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data.message) {
        this.$store.commit("setMessage", data.message);
      }

      const products = this.$store.getters.getProducts;

      if (this.type == "create") {
        products.push({
          _id: this.productId,
          title: this.productName,
          brand: this.productBrand,
          rate: this.productRate,
          sale: this.productSale,
          available: this.productAvailable,
          img: this.productImage,
          price: this.productPrice,
          engine: this.productEngine,
          engine_hp: this.productEngine_hp,
          speed: this.productSpeed,
          country: this.productCountry,
          category: this.productCategory,
        });
        this.$store.commit("setProducts", products);
      } else {
        this.$store.commit("setProducts", data.products);
        this.select = this.productName;
      }

      this.isLoading = false;
    },
    async removeProduct() {
      this.isLoading = true;
      const { data } = await axios.post("/admin/remove", {
        id: this.removeProductId,
      });
      console.log(data);
      this.$store.commit("setProducts", data.products);
      this.isLoading = false;
    },
    selectProduct() {
      const products = this.$store.getters.getProducts;
      const product = products.find((el) => el.title == this.select);

      this.productName = product.title;
      this.productPrice = product.price;
      this.productRate = product.rate;
      this.productBrand = product.brand;
      this.productModel = product.model;
      this.productCategory = product.category;
      this.productSale = product.sale == true ? "sale" : "primary";
      this.productAvailable =
        product.available == true ? "available" : "notAvailable";
      this.productId = product._id;
    },
    setImage() {
      this.productImage = this.$refs.file.files[0].name || null;
    },
    selectToRemove() {
      const products = this.$store.getters.getProducts;
      const product = products.find((el) => el.title == this.removeSelect);
      this.removeProductId = product._id;
    },
  },
};
</script>

<style scoped>
h1 {
  margin: 30px 0;
}

div {
  margin-bottom: 15px;
}

select {
  padding: 6px;
  height: 32px;
  border-radius: 2px;
}

label {
  display: block;
}

label.light {
  font-weight: 300;
  display: inline;
}

button {
  margin-right: 10px;
}
</style>
