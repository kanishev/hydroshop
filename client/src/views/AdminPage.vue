<template>
  <div class="container">
    <h1>Страница администратора</h1>

    <form @submit.prevent="submitForm" enctype="multipart/form-data">
      <fieldset>
        <legend>Создать продукт:</legend>

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
            <optgroup label="brand">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </optgroup>
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
          <span>Аватар</span>
          <input ref="file" type="file" name="product" />
        </div>

        <button type="submit" class="btn" @click="type = 'create'">
          Создать
        </button>
        <button type="submit" class="btn" @click="type = 'edit'">
          Изменить
        </button>
      </fieldset>
    </form>

    <form @submit.prevent="removeProduct">
      <fieldset>
        <legend>Удалить продукт</legend>
        <div>
          <input
            type="text"
            placeholder=""
            name="title"
            id="title"
            v-model="removeName"
          />
          <label for="title">Название продукта</label>
        </div>
        <app-button type="submit">удалить продукт</app-button>
      </fieldset>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      type: "",

      productName: "",
      productPrice: "",
      productRate: "",
      productBrand: "",
      productSale: "",
      productAvailable: "",
      productImage: "",

      removeName: "",
    };
  },
  methods: {
    async submitForm() {
      let file = this.$refs.file.files[0];
      let fd = new FormData();
      fd.append("product", file);

      await axios.post(`/admin/${this.type}`, {
        title: this.productName,
        price: this.productPrice,
        rate: this.productRate,
        brand: this.productBrand,
        sale: this.productSale === "sale" ? true : false,
        available: this.productAvailable === "available" ? true : false,
        img: this.productImage,
      });

      await axios.post("admin/image", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });
    },
    async removeProduct() {
      const res = await axios.post("/admin/remove", {
        id: "611c0f1130639a317465aca7",
      });

      console.log(res);
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
</style>
