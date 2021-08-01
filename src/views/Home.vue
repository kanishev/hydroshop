<template>
  <main>
    <section class="banner-section">
      <div class="container">
        <div class="banner-section__inner">
          <div class="banner-section__slider">
            <a class="banner-section__slider-item" href="#">
              <img src="../images/content/banner-slider.jpg" alt="" />
            </a>
            <a class="banner-section__slider-item" href="#">
              <img src="../images/content/banner-slider.jpg" alt="" />
            </a>
            <a class="banner-section__slider-item" href="#">
              <img src="../images/content/banner-slider.jpg" alt="" />
            </a>
            <a class="banner-section__slider-item" href="#">
              <img src="../images/content/banner-slider.jpg" alt="" />
            </a>
            <a class="banner-section__slider-item" href="#">
              <img src="../images/content/banner-slider.jpg" alt="" />
            </a>
            <a class="banner-section__slider-item" href="#">
              <img src="../images/content/banner-slider.jpg" alt="" />
            </a>
            <a class="banner-section__slider-item" href="#">
              <img src="../images/content/banner-slider.jpg" alt="" />
            </a>
          </div>
          <div class="banner-section__item sale-item">
            <div class="sale-item__top">
              <p class="sale-item__info">акция</p>
              <div class="sale-item__price">
                <div class="sale-item__price-new price">190 000 Р</div>
                <div class="sale-item__price-old price">225 000 Р</div>
              </div>
            </div>
            <img
              class="sale-item__img"
              src="../images/content/sale-1.png"
              alt=""
            />
            <h5 class="sale-item__title">Лодочный мотор Suzuki DF9.9BRS</h5>
            <p class="sale-item__footer">
              Акция действует до
              <span>31.08.2021</span>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="search">
      <h1 style="display: none">section title</h1>
      <div class="container">
        <div class="search__inner">
          <div class="search__tabs tabs-wrapper">
            <div class="mobile-overflow">
              <a class="tab search__tabs-item tab--active" href="#tab-1">
                Поиск по номеру
              </a>
              <a class="tab search__tabs-item" href="#tab-2">
                Поиск по марке
              </a>
              <a class="tab search__tabs-item" href="#tab-3">
                Поиск по названию товара
              </a>
            </div>
          </div>
          <div class="search__content">
            <div
              id="tab-1"
              class="tabs-content search__content-item tabs-content--active"
            >
              <form class="search__content-form">
                <input
                  class="search__content-input"
                  type="text"
                  placeholder="Введите номер"
                />
                <button class="search__content-btn" type="submit">
                  искать
                </button>
              </form>
            </div>
            <div id="tab-2" class="tabs-content search__content-item">
              <form class="search__content-form">
                <input
                  class="search__content-input"
                  type="text"
                  placeholder="Введите марку"
                />
                <button class="search__content-btn" type="submit">
                  искать
                </button>
              </form>
            </div>
            <div id="tab-3" class="tabs-content search__content-item">
              <form class="search__content-form">
                <input
                  class="search__content-input"
                  type="text"
                  placeholder="Введите название товара"
                />
                <button class="search__content-btn" type="submit">
                  искать
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="categories">
      <div class="container">
        <div class="categories__inner">
          <a class="categories__item" href="#">
            <div class="categories__item-info">
              <div class="categories__item-title">Квадроциклы</div>
              <p class="categories__item-small">Подробнее</p>
            </div>
            <div class="categories__item-img">
              <img src="../images/content/categories-1.png" alt="" />
            </div>
          </a>
          <a class="categories__item" href="#">
            <div class="categories__item-info">
              <div class="categories__item-title">Гидроциклы</div>
              <p class="categories__item-small">Подробнее</p>
            </div>
            <div class="categories__item-img">
              <img src="../images/content/categories-2.png" alt="" />
            </div>
          </a>
          <a class="categories__item" href="#">
            <div class="categories__item-info">
              <div class="categories__item-title">Катера</div>
              <p class="categories__item-small">Подробнее</p>
            </div>
            <div class="categories__item-img">
              <img src="../images/content/categories-3.png" alt="" />
            </div>
          </a>
          <a class="categories__item" href="#">
            <div class="categories__item-info">
              <div class="categories__item-title">Снегоходы</div>
              <p class="categories__item-small">Подробнее</p>
            </div>
            <div class="categories__item-img">
              <img src="../images/content/categories-4.png" alt="" />
            </div>
          </a>
          <a class="categories__item" href="#">
            <div class="categories__item-info">
              <div class="categories__item-title">Вездеходы</div>
              <p class="categories__item-small">Подробнее</p>
            </div>
            <div class="categories__item-img">
              <img src="../images/content/categories-5.png" alt="" />
            </div>
          </a>
          <a class="categories__item" href="#">
            <div class="categories__item-info">
              <div class="categories__item-title">Двигатели</div>
              <p class="categories__item-small">Подробнее</p>
            </div>
            <div class="categories__item-img">
              <img src="../images/content/categories-6.png" alt="" />
            </div>
          </a>
        </div>
      </div>
    </section>

    <section class="products">
      <div class="container">
        <div class="products__inner">
          <h3 class="product__title">Популярные товары</h3>
          <div class="tabs-wrapper">
            <div class="tabs products__tabs mobile-overflow">
              <a class="tab products__tab tab--active" href="#product-tab-1"
                >запчасти</a
              >
              <a class="tab products__tab" href="#product-tab-2">моторы</a>
              <a class="tab products__tab" href="#product-tab-3">шины</a>
              <a class="tab products__tab" href="#product-tab-4">электроника</a>
              <a class="tab products__tab" href="#product-tab-5">инструменты</a>
              <a class="tab products__tab" href="#product-tab-6">аксессуары</a>
            </div>
          </div>
          <div class="tabs-container products__container">
            <div
              id="product-tab-1"
              class="tabs-content products__content tabs-content--active"
            >
              <div class="product-slider">
                <div class="product-slider__item">
                  <div
                    class="product-item__wrapper product-item__not-available"
                  >
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
                        alt=""
                        class="product-item__img"
                      />
                      <h4 class="product-item__title">
                        Водонепроницаемый Рюкзак
                      </h4>
                      <p class="price product-item__price">p9800Р</p>
                      <p class="product-item__notify">нет в наличии</p>
                    </a>
                  </div>
                </div>
                <div class="product-slider__item">
                  <div class="product-item__wrapper">
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
            <div id="product-tab-2" class="tabs-content products__content">
              <div class="product-slider">
                <div class="product-slider__item">
                  <div
                    class="product-item__wrapper product-item__not-available"
                  >
                    <button class="product-item__favourite"></button>
                    <button class="product-item__cart">
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
            <div id="product-tab-3" class="tabs-content products__content">
              slider-3
            </div>
            <div id="product-tab-4" class="tabs-content products__content">
              slider-4
            </div>
            <div id="product-tab-5" class="tabs-content products__content">
              slider-5
            </div>
            <div id="product-tab-6" class="tabs-content products__content">
              slider-6
            </div>
          </div>
          <div class="product__more">
            <button class="product__more-link" href="#">Показать еще</button>
          </div>
        </div>
      </div>
    </section>

    <section class="banner">
      <div class="container">
        <div class="banner-wrapper">
          <div class="banner__item banner-images">
            <img
              class="banner__img"
              src="../images/content/banner-image-1.png"
              alt="banner-image"
            />
            <img
              class="banner__img"
              src="../images/content/banner-image-2.png"
              alt="banner-image"
            />
          </div>
          <p class="banner__item banner__text">
            <span>скидки</span><br />
            на все запчасти до 70%
          </p>
          <button class="banner__button">посмотреть все</button>
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/popular-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/popular-2.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/popular-3.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/popular-4.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
                      <img src="../assets/icons/cart-white.svg" alt="cart" />
                    </button>
                    <a class="product-item product-item--sale" href="#">
                      <p class="product-item__hover-text">посмотреть товар</p>
                      <img
                        src="../images/content/product-1.png"
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
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>