<template>
  <div id="app">
    <header class="header">
      <div class="header__top">
        <div class="container">
          <div class="header__top-inner">
            <Navbar />

            <a class="logo" href="#">
              <img class="logo__img" src="../assets/icons/logo.svg" alt="" />
            </a>
            <div class="header__box">
              <a class="header__adress" href="">Москва, ул. Науки 25</a>
              <ul class="user-list">
                <li class="user-list__item">
                  <a class="user-list__link" href="#">
                    <img src="../assets/icons/heart.svg" alt="" />
                  </a>
                </li>
                <li class="user-list__item" v-if="!user">
                  <router-link class="user-list__link" to="/auth">
                    <img src="../assets/icons/user.svg" alt="" />
                  </router-link>
                </li>
                <li class="user-list__item" v-if="user">
                  <a
                    class="user-list__link"
                    to="/auth/logout"
                    @click.prevent="logout"
                  >
                    <img src="../assets/icons/logout.svg" alt="" />
                  </a>
                </li>
                <li class="user-list__item">
                  <router-link class="user-list__link cart" to="cart">
                    <img src="../assets/icons/cart.svg" alt="" />
                    <p class="cart__num">1</p>
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="menu-mobile">
        <ul class="menu-mobile__list">
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <img
                class="menu-mobile__img"
                src="../assets/icons/user.svg"
                alt=""
              />
              <span>Войти</span>
            </a>
          </li>
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <img
                class="menu-mobile__img"
                src="../assets/icons/user.svg"
                alt=""
              />
              <span>Регистрация</span>
            </a>
          </li>
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <img
                class="menu-mobile__img"
                src="../assets/icons/heart.svg"
                alt=""
              />
              <span>Избранное</span>
            </a>
          </li>
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <img
                class="menu-mobile__img"
                src="../assets/icons/cart.svg"
                alt=""
              />
              <span>Корзина</span>
            </a>
          </li>
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <img
                class="menu-mobile__img"
                src="../assets/icons/shop.svg"
                alt=""
              />
              <span>Магазины</span>
            </a>
          </li>
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <img
                class="menu-mobile__img"
                src="../assets/icons/percent.svg"
                alt=""
              />
              <span>Акции</span>
            </a>
          </li>
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <img
                class="menu-mobile__img"
                src="../assets/icons/pay.svg"
                alt=""
              />
              <span>Доставка и оплата</span>
            </a>
          </li>

          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <span>Квадроциклы</span>
            </a>
          </li>
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <span>Катера</span>
            </a>
          </li>
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <span>Гидроциклы</span>
            </a>
          </li>
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <span>Лодки</span>
            </a>
          </li>
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <span>Вездеходы</span>
            </a>
          </li>
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <span>Снегоходы</span>
            </a>
          </li>
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <span>Двигатели</span>
            </a>
          </li>
          <li class="menu-mobile__item">
            <a class="menu-mobile__link" href="">
              <span>Запчасти</span>
            </a>
          </li>
        </ul>

        <div class="menu__mobile-line__wrapper">
          <ul class="menu-mobile__line">
            <li class="menu__item">
              <a class="menu__link" href="">
                <span>Магазины</span>
              </a>
            </li>
            <li class="menu__item">
              <a class="menu-__ink" href="">
                <span>Акции</span>
              </a>
            </li>
            <li class="menu__item">
              <a class="menu__link" href="">
                <span>Доставка и оплата</span>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div class="header__bottom">
        <div class="container">
          <menu-categories></menu-categories>
        </div>
      </div>
    </header>

    <router-view />

    <footer class="footer">
      <div class="container">
        <div class="footer__top">
          <div class="footer__top-item">
            <h6 class="footer__top-title">
              Подпишитесь на нашу рассылку и узнавайте о акциях быстрее
            </h6>
            <form class="footer-form">
              <input
                class="footer-form__input"
                type="text"
                placeholder="введите ваш email"
              />
              <button class="footer-form__btn" type="submit">отправить</button>
            </form>
          </div>
          <div class="footer__top-item footer__top-item__list">
            <h6 class="footer__top-title footer__top-drop">Информация</h6>
            <ul class="footer-list">
              <li class="footer-list__item"><a href="#">О компании</a></li>
              <li class="footer-list__item"><a href="#">Контакты</a></li>
              <li class="footer-list__item"><a href="#">Акции</a></li>
              <li class="footer-list__item"><a href="#">Магазины</a></li>
            </ul>
          </div>
          <div class="footer__top-item footer__top-item__list">
            <h6 class="footer__top-title footer__top-drop">Интернет-магазин</h6>
            <ul class="footer-list">
              <li class="footer-list__item">
                <a href="#">Доставка и самовывоз</a>
              </li>
              <li class="footer-list__item"><a href="#">Оплата</a></li>
              <li class="footer-list__item"><a href="#">Возврат-обмен</a></li>
              <li class="footer-list__item"><a href="#">Новости</a></li>
            </ul>
          </div>
          <div class="footer__top-item footer__top-socials">
            <ul class="social-list">
              <li class="social-list__item">
                <a href="#">
                  <img src="../assets/icons/instagram.svg" alt="instagram" />
                </a>
              </li>
              <li class="social-list__item">
                <a href="#">
                  <img src="../assets/icons/vk.svg" alt="vk" />
                </a>
              </li>
              <li class="social-list__item">
                <a href="#">
                  <img src="../assets/icons/facebook.svg" alt="facebook" />
                </a>
              </li>
              <li class="social-list__item">
                <a href="#">
                  <img src="../assets/icons/youtube.svg" alt="youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="footer__bottom">
          <a href="#" class="footer__bottom-link">Договор оферты</a>
          <a href="#" class="footer__bottom-link"
            >Политика обработки персональный данных</a
          >
        </div>
      </div>
    </footer>
  </div>
</template>


<script>
import Navbar from "../components/Navbar.vue";
import MenuCategories from "../components/MenuCategories.vue";

export default {
  async mounted() {
    // this.$store.dispatch("getUser");
  },
  computed: {
    user() {
      return this.$store.getters.getUser;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
  components: { Navbar, MenuCategories },
};
</script>
