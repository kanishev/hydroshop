<template>
  <nav class="menu">
    <button class="menu__btn">
      <div class="menu__btn-line"></div>
      <div class="menu__btn-line"></div>
      <div class="menu__btn-line"></div>
    </button>

    <ul class="menu__list">
      <li class="menu__item">
        <router-link to="/" class="menu__link"> Магазин </router-link>
      </li>
      <li class="menu__item">
        <router-link to="/catalog" class="menu__link"> Каталог </router-link>
      </li>
      <li class="menu__item">
        <a class="menu__link" href=""> Доставка и оплата </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>