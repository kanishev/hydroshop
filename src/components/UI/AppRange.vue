<template>
  <li class="aside-filter__item-drop">
    <p class="aside-filter__item-title filter__item-drop">Цена</p>
    <div class="aside-filter__content aside-filter__content-radio">
      <input type="text" class="js-range-slider" name="my_range" value="" />
    </div>
  </li>
</template>

<script>
export default {
  name: "app-range",
};
</script>