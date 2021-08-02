<template>
  <div>
    <section class="product-card">
      <div class="container">
        <div class="product-card__inner">
          <div class="product-card__img-box product-item--sale">
            <img
              class="product-card__img"
              src="images/product/product-page__item.png"
              alt=""
            />
            <p class="product-card__price-old">1 200 475 Р</p>
            <p class="product-card__price-new">1 100 475 Р</p>
            <a href="#" class="product-card__link">
              Нашли дешевле? Снизим цену
            </a>
            <button class="product-card__buy product-card__buy-mobile">
              купить
            </button>
          </div>

          <div class="product-card__content">
            <h1 class="product-card__title">
              Гидроцикл BRP SeaDao GTI 155hp SE Long Blue Metallic
            </h1>
            <p class="product-card__code">Код товара: 21221-2</p>
            <div class="product-card__buttons">
              <a class="product-card__icon-favourite" href="#">
                <img src="images/heart.svg" alt="" />
              </a>
              <a class="product-card__icon-compression" href="#">
                <img src="images/compression.svg" alt="" />
              </a>
              <a class="rate" href="#">
                <div class="rate-yo" data-rateyo-rating="4"></div>
              </a>
            </div>

            <div class="tabs-wrapper product-card__tabs">
              <div class="tabs">
                <a class="tab product-card__tab tab--active" href="#product-1">
                  Характеристики
                </a>
                <a class="tab product-card__tab" href="#product-2">
                  Наличие в магазине
                </a>
              </div>
              <div class="tabs-container">
                <div
                  id="product-1"
                  class="
                    product-card__tab-content
                    tabs-content tabs-content--active
                  "
                >
                  <ul class="product-card__list">
                    <li class="product-card__item">
                      <div class="product-card__item-left">Производитель</div>
                      <div class="product-card__item-right">Канада</div>
                    </li>
                    <li class="product-card__item">
                      <div class="product-card__item-left">
                        Количество мест, шт:
                      </div>
                      <div class="product-card__item-right">3</div>
                    </li>
                    <li class="product-card__item">
                      <div class="product-card__item-left">Мощность, л.с.</div>
                      <div class="product-card__item-right">155</div>
                    </li>
                    <li class="product-card__item">
                      <div class="product-card__item-left">Тип двигателя</div>
                      <div class="product-card__item-right">Бензиновый</div>
                    </li>
                    <li class="product-card__item">
                      <div class="product-card__item-left">Год выпуска</div>
                      <div class="product-card__item-right">2018</div>
                    </li>
                    <a class="product-card__more" href="#">Показать еще</a>
                  </ul>
                  <button class="product-card__buy">купить</button>
                </div>
                <div
                  id="product-2"
                  class="product-card__tab-content tabs-content"
                >
                  content 2
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="card__tabs">
      <div class="container">
        <div class="tabs-wrapper">
          <div class="tabs card__tabs-box mobile-overflow">
            <a class="tab card__tab tab--active" href="#product-card__tab-1"
              >О товаре</a
            >
            <a class="tab card__tab" href="#product-card__tab-2"
              >Характеристики</a
            >
            <a class="tab card__tab" href="#product-card__tab-3">Отзывы</a>
            <a class="tab card__tab" href="#product-card__tab-4">Самовывоз</a>
            <a class="tab card__tab" href="#product-card__tab-5">Доставка</a>
            <a class="tab card__tab" href="#product-card__tab-6">Сервис</a>
            <a class="tab card__tab" href="#product-card__tab-7">Гарантия</a>
          </div>
        </div>
        <div class="tabs-container">
          <div
            id="product-card__tab-1"
            class="card__tab-content tabs-content tabs-content--active"
          >
            <form action="">
              <div class="card__top">
                <label class="card__label-search" for=""
                  >Магазин
                  <input class="card__input-search" type="text" />
                </label>
                <label class="card__label-pickup" for="">
                  <input class="filter-style" type="radio" name="card" />
                  Забрать сегодня
                </label>
                <label class="card__label-pickup" for="">
                  <input
                    class="filter-style"
                    type="radio"
                    name="card"
                    checked
                  />
                  Забрать в течение недели
                </label>
              </div>

              <table>
                <thead>
                  <tr>
                    <th>Адрес</th>
                    <th>Режим работы</th>
                    <th>Доступно</th>
                    <th>Количество</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Москва, ул. Науки 25</td>
                    <td>
                      <p class="table-date">
                        пн-сб: <span class="table-time"> 08:00-19:00 </span>
                      </p>
                      <p class="table-date">
                        вс: <span class="table-time">09:00-17:00</span>
                      </p>
                    </td>
                    <td>В наличии</td>
                    <td>1</td>
                    <td>
                      <div class="card-list__btn">
                        <button type="submit">Купить</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Москва, ул. Южная 134</td>
                    <td>
                      <p class="table-date">
                        пн-сб: <span class="table-time"> 08:00-19:00 </span>
                      </p>
                      <p class="table-date">
                        вс: <span class="table-time">09:00-17:00</span>
                      </p>
                    </td>
                    <td>В наличии</td>
                    <td>2</td>
                    <td>
                      <div class="card-list__btn">
                        <button type="submit">Купить</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Санкт-Петербург, ул. Красная 19</td>
                    <td>
                      <p class="table-date">
                        пн-сб: <span class="table-time"> 08:00-19:00 </span>
                      </p>
                      <p class="table-date">
                        вс: <span class="table-time">09:00-17:00</span>
                      </p>
                    </td>
                    <td>Нет в наличии</td>
                    <td>0</td>
                    <td>
                      <div class="card-list__btn">
                        <button type="submit" disabled>Купить</button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>Киев, ул Шевченко 167</td>
                    <td>
                      <p class="table-date">
                        пн-сб: <span class="table-time"> 08:00-19:00 </span>
                      </p>
                      <p class="table-date">
                        вс: <span class="table-time">09:00-17:00</span>
                      </p>
                    </td>
                    <td>Нет в наличии</td>
                    <td>0</td>
                    <td>
                      <div class="card-list__btn">
                        <button type="submit" disabled>Купить</button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div
            id="product-card__tab-2"
            class="product-card__tab-content tabs-content"
          >
            content
          </div>
          <div
            id="product-card__tab-3"
            class="product-card__tab-content tabs-content"
          >
            content
          </div>
          <div
            id="product-card__tab-4"
            class="product-card__tab-content tabs-content"
          >
            content
          </div>
          <div
            id="product-card__tab-5"
            class="product-card__tab-content tabs-content"
          >
            content
          </div>
          <div
            id="product-card__tab-6"
            class="product-card__tab-content tabs-content"
          >
            content
          </div>
          <div
            id="product-card__tab-7"
            class="product-card__tab-content tabs-content"
          >
            content
          </div>
          <div
            id="product-card__tab-8"
            class="product-card__tab-content tabs-content"
          >
            content
          </div>
        </div>
      </div>
    </section>
    <section class="popular">
      <div class="container">
        <div class="products__inner">
          <h3 class="product__title">С этим также покупают</h3>
          <div class="tabs-wrapper">
            <div class="tabs products__tabs mobile-overflow">
              <a class="tab products__tab tab--active" href="#popular-tab-1"
                >запчасти</a
              >
              <a class="tab products__tab" href="#popular-tab-2">моторы</a>
              <a class="tab products__tab" href="#popular-tab-3">шины</a>
              <a class="tab products__tab" href="#popular-tab-4">электроника</a>
              <a class="tab products__tab" href="#popular-tab-5">инструменты</a>
              <a class="tab products__tab" href="#popular-tab-6">аксессуары</a>
            </div>
          </div>
          <div class="tabs-container products__container">
            <div
              id="popular-tab-1"
              class="tabs-content products__content tabs-content--active"
            >
              <div class="product-slider">
                <div class="product-slider__item">
                  <div
                    class="product-item__wrapper product-item__not-available"
                  >
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/popular-1.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">
                        BRP Audio-портативная система
                      </h4>
                      <p class="price product-item__price">9800Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
                <div class="product-slider__item">
                  <div class="product-item__wrapper">
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/popular-2.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">
                        Garmin Echomap Plus 62cv
                      </h4>
                      <p class="price product-item__price">45 800 Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
                <div class="product-slider__item">
                  <div
                    class="product-item__wrapper product-item__not-available"
                  >
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/popular-3.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">RF D.E.S.S.TM Key</h4>
                      <p class="price product-item__price">9800 Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
                <div class="product-slider__item">
                  <div class="product-item__wrapper">
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/popular-4.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">Мужской костюм 3мм</h4>
                      <p class="price product-item__price">7000 Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
                <div class="product-slider__item">
                  <div class="product-item__wrapper">
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/product-1.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">
                        Водонепроницаемый Рюкзак
                      </h4>
                      <p class="price product-item__price">9800Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
                <div class="product-slider__item">
                  <div
                    class="product-item__wrapper product-item__not-available"
                  >
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/product-1.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">
                        Водонепроницаемый Рюкзак
                      </h4>
                      <p class="price product-item__price">9800Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
                <div class="product-slider__item">
                  <div class="product-item__wrapper">
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/product-1.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">
                        Водонепроницаемый Рюкзак
                      </h4>
                      <p class="price product-item__price">9800Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="popular-tab-2" class="tabs-content products__content">
              <div class="product-slider">
                <div class="product-slider__item">
                  <div
                    class="product-item__wrapper product-item__not-available"
                  >
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/product-1.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">
                        Водонепроницаемый Рюкзак
                      </h4>
                      <p class="price product-item__price">9800Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
                <div class="product-slider__item">
                  <div class="product-item__wrapper">
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/product-1.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">
                        Водонепроницаемый Рюкзак
                      </h4>
                      <p class="price product-item__price">9800Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
                <div class="product-slider__item">
                  <div
                    class="product-item__wrapper product-item__not-available"
                  >
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/product-1.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">
                        Водонепроницаемый Рюкзак
                      </h4>
                      <p class="price product-item__price">9800Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
                <div class="product-slider__item">
                  <div class="product-item__wrapper">
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/product-1.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">
                        Водонепроницаемый Рюкзак
                      </h4>
                      <p class="price product-item__price">9800Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
                <div class="product-slider__item">
                  <div class="product-item__wrapper">
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/product-1.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">
                        Водонепроницаемый Рюкзак
                      </h4>
                      <p class="price product-item__price">9800Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
                <div class="product-slider__item">
                  <div
                    class="product-item__wrapper product-item__not-available"
                  >
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/product-1.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">
                        Водонепроницаемый Рюкзак
                      </h4>
                      <p class="price product-item__price">9800Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
                <div class="product-slider__item">
                  <div class="product-item__wrapper">
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="images/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="images/content/product-1.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">
                        Водонепроницаемый Рюкзак
                      </h4>
                      <p class="price product-item__price">9800Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div id="popular-tab-3" class="tabs-content products__content">
              slider-3
            </div>
            <div id="popular-tab-4" class="tabs-content products__content">
              slider-4
            </div>
            <div id="popular-tab-5" class="tabs-content products__content">
              slider-5
            </div>
            <div id="popular-tab-6" class="tabs-content products__content">
              slider-6
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

