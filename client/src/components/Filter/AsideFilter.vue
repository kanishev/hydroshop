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
        <form action="" class="aside-filter__form">
          <ul class="aside-filter__list">
            <app-filter
              type="checkbox"
              :fields="['В наличии', 'под заказ']"
              title="Наличие"
            ></app-filter>

            <app-filter
              type="radio"
              :fields="['Все', 'Акции', 'Новинки']"
              title="Акции"
            >
            </app-filter>

            <app-range></app-range>

            <li class="aside-filter__item-list">
              <filter-select title="Мощность"></filter-select>
              <filter-select title="Мощность двигателя л.с."></filter-select>
              <filter-select title="Макс. скорость л.с"></filter-select>
            </li>

            <app-filter
              type="checkbox"
              :fields="['BRP', 'Spark 2', 'Spark 3']"
              title="Бренд"
            >
              <template v-slot:more>
                <div class="filter-more">
                  <button class="filter-more__btn">показать еще</button>
                </div>
              </template>
            </app-filter>

            <app-filter
              type="checkbox"
              :fields="[' Модель 1', ' Модель 2', ' Модель 3']"
              title="Модели"
            >
              <input
                type="text"
                class="filter-search"
                placeholder="Введите модель"
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
  components: { FilterSelect, FilterSale },
};
</script>

<style>
.aside-filter__item-btn {
  text-align: left;
}
</style>
