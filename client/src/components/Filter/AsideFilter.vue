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
              @input="(v) => (isSale = v)"
              type="radio"
              :fields="['Все', 'Акции', 'Новинки']"
              title="Акции"
            >
            </app-filter>

            <app-range @input="(arr) => (price = arr)"></app-range>

            <li class="aside-filter__item-list">
              <filter-select
                title="Мощность"
                :model="engine"
                @change="(v) => (engine = v)"
              ></filter-select>
              <filter-select
                title="Мощность двигателя л.с."
                :model="engine_hp"
                @change="(v) => (engine_hp = v)"
              ></filter-select>
              <filter-select
                title="Макс. скорость л.с"
                :model="speed"
                @change="(v) => (speed = v)"
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
              :fields="[' Модель 1', ' Модель 2', ' Модель 3']"
              title="Модели"
              :model="model"
            >
              <input
                type="text"
                class="filter-search"
                placeholder="Введите модель"
                :model="title"
                @input="(v) => (title = v.target.value)"
              />
            </app-filter>

            <li class="aside-filter__item-drop filter-sales">
              <p class="aside-filter__item-title filter__item-drop">Акции</p>
              <div class="aside-filter__content">
                <filter-sale title="Sale"></filter-sale>
                <filter-sale title="New"></filter-sale>
                <filter-sale title="Hit"></filter-sale>
                <filter-sale title="Дилер"></filter-sale>
              </div>
            </li>

            <app-filter
              :model="country"
              @input="
                (v) =>
                  country.includes(v)
                    ? (country = country.filter((p) => p !== v))
                    : country.push(v)
              "
              type="checkbox"
              :fields="[' Россия', ' Германия', ' Китай', 'США']"
              title="Страны"
            >
            </app-filter>

            <li class="aside-filter__item-drop aside-filter__item-btn">
              <button class="filter-btn__send filter-btn-send--active">
                Выбрать
              </button>
              <button class="filter-btn__reset">Сбросить фильтр</button>
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
import FilterSale from "../Filter/FilterSale.vue";
export default {
  name: "aside-filter",
  data() {
    return {
      available: [],
      isSale: "",
      price: 0,
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
      console.log(
        this.available,
        this.isSale,
        this.price,
        this.speed,
        this.engine,
        this.engine_hp,
        this.brand,
        this.title,
        this.country,
        this.model
      );
    },
  },
  components: { FilterSelect, FilterSale },
};
</script>

<style>
.aside-filter__item-btn {
  text-align: left;
}
</style>
