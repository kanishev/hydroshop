<template>
  <aside class="catalog__inner-aside aside-filter">
    <div class="tabs-wrapper no-scroll">
      <div class="tabs aside-filter__tabs">
        <app-tab class="aside-filter__tab tab--active" href="#filter-1">
          Параметры
        </app-tab>
        <app-tab class="aside-filter__tab" href="#filter-2"> по марке</app-tab>
      </div>
    </div>
    <div class="tabs-container">
      <div
        id="filter-1"
        class="tabs-content aside-filter__tabs-content tabs-content--active"
      >
        <form action="" class="aside-filter__form" @submit.prevent="filter">
          <ul class="aside-filter__list">
            <li class="aside-filter__item-drop">
              <p class="aside-filter__item-title filter__item-drop active">
                Поиск по названию марки
              </p>
              <div class="aside-filter__content active">
                <input
                  type="text"
                  v-model="title"
                  placeholder="Введиите название марки"
                />
              </div>
            </li>

            <app-filter
              :model="available"
              @input="
                (v) =>
                  available.includes(v)
                    ? (available = available.filter((p) => p !== v))
                    : available.push(v)
              "
              type="checkbox"
              :fields="['В наличии', 'под заказ']"
              title="Наличие"
            ></app-filter>

            <app-filter
              :model="isSale"
              @input="(v) => (v == 'Все' ? (isSale = false) : (isSale = true))"
              type="radio"
              :fields="['Все', 'Акции']"
              title="Акции"
            >
            </app-filter>

            <app-range
              :model="price"
              @input="(arr) => (price = arr)"
            ></app-range>

            <li class="aside-filter__item-list">
              <filter-select
                title="Мощность"
                :model="engine"
                @change="(v) => (engine = v)"
                :values="[0, 90, 130, 154, 230]"
              ></filter-select>
              <filter-select
                title="Мощность двигателя л.с."
                :model="engine_hp"
                @change="(v) => (engine_hp = v)"
                :values="[0, 20, 60, 100, 120]"
              ></filter-select>
              <filter-select
                title="Макс. скорость л.с"
                :model="speed"
                @change="(v) => (speed = v)"
                :values="[0, 60, 110, 160, 180]"
              ></filter-select>
            </li>

            <app-filter
              :model="brand"
              @input="
                (v) =>
                  brand.includes(v)
                    ? (brand = brand.filter((p) => p !== v))
                    : brand.push(v)
              "
              :fields="['BRP', 'Spark 2', 'Spark 3']"
              type="checkbox"
              title="Бренд"
            >
            </app-filter>

            <app-filter
              type="checkbox"
              @input="
                (v) =>
                  model.includes(v)
                    ? (model = model.filter((p) => p !== v))
                    : model.push(v)
              "
              :fields="['Модель 1', 'Модель 2', 'Модель 3']"
              title="Модели"
              :model="model"
            >
            </app-filter>

            <app-filter
              :model="country"
              @input="
                (v) =>
                  country.includes(v)
                    ? (country = country.filter((p) => p !== v))
                    : country.push(v)
              "
              type="checkbox"
              :fields="['Россия', 'Германия', 'Китай', 'США']"
              title="Страны"
            >
            </app-filter>

            <li class="aside-filter__item-drop aside-filter__item-btn">
              <button class="filter-btn__send filter-btn-send--active">
                Выбрать
              </button>
              <button class="filter-btn__reset" @click="resetFilter">
                Сбросить фильтр
              </button>
            </li>
          </ul>
        </form>
      </div>
      <div id="filter-2" class="tabs-content aside-filter__tabs-content">
        content-2
      </div>
    </div>
  </aside>
</template>

<script>
import FilterSelect from "../Filter/FilterSelect.vue";
import AppFilter from "../UI/AppFilter.vue";
export default {
  name: "aside-filter",
  props: ["products"],
  data() {
    return {
      available: [],
      isSale: false,
      price: [10000, 500000],
      speed: 0,
      engine: 0,
      engine_hp: 0,
      brand: [],
      title: "",
      country: [],
      model: [],
    };
  },
  methods: {
    filter() {
      let products = this.products;

      products = products
        .filter((p) => p.category === "product")
        .filter((p) => p.price >= this.price[0] && p.price <= this.price[1])
        .filter((p) => p.title.includes(this.title))
        .filter((p) => (this.isSale == true ? p.sale == this.isSale : products))
        .filter((p) => {
          if (this.speed == 0) {
            return products;
          } else {
            if (this.speed == p.speed) return p;
          }
        })
        .filter((p) => {
          if (this.engine == 0) {
            return products;
          } else {
            if (this.engine == p.engine) return p;
          }
        })
        .filter((p) => {
          if (this.engine_hp == 0) {
            return products;
          } else {
            if (this.engine_hp == p.engine_hp) return p;
          }
        })
        .filter((p) => {
          if (this.brand.length == 0) {
            return products;
          } else {
            if (this.brand.includes(p.brand)) return p;
          }
        })
        .filter((p) => {
          if (this.model.length == 0) {
            return products;
          } else {
            if (this.model.includes(p.model)) return p;
          }
        })
        .filter((p) => {
          if (this.country.length == 0) {
            return products;
          } else {
            if (this.country.includes(p.country)) return p;
          }
        });

      console.log(products);
      if (products.length == this.products.length || products.length == 0) {
        this.$store.commit("setMessage", {
          value: "Товары с такими характеристиками не найдены",
          type: "warn",
        });
      } else {
        this.$emit("filter", products);
      }
    },
    resetFilter() {
      this.available = [];
      this.isSale = false;
      this.price = [10000, 500000];
      this.speed = 0;
      this.engine = 0;
      this.engine_hp = 0;
      this.brand = [];
      this.title = "";
      this.country = [];
      this.model = [];
      this.$emit("filter", []);
    },
  },
  components: { FilterSelect, AppFilter },
};
</script>

<style>
.aside-filter__item-btn {
  text-align: left;
}
</style>
