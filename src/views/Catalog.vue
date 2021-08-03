<template>
  <section class="catalog">
        <div class="container">
            <h2 class="catalog__title">
                Гидроциклы
            </h2>
            <div class="catalog__filter">
                <div class="catalog__filter-wrapper">
                <div class="catalog__filter-items  mobile-overflow">
                    <button>Полноприводные</button>
                    <button>от 5000</button>
                    <button>BRP</button>
                    <button>еще</button>
                </div>
                </div>
                <div class="catalog__filter-btn">
                    <button class="catalog__filter-btn_grid catalog__filter-mode catalog__filter-mode--active">
                        <img src="images/icons/grid-mode.svg" alt="grid-mode">                  
                    </button>
                    <button class="catalog__filter-btn_line catalog__filter-mode">
                        <img src="images/icons/line-mode.svg" alt="line-mode">
                    </button>
                </div>
            </div>
            <div class="catalog__inner">
                <button class="aside__btn">
                  фильтр
                </button>
                <aside class="catalog__inner-aside aside-filter">
                  <div class="tabs-wrapper no-scroll">
                    <div class="tabs aside-filter__tabs">
                      <a class="tab aside-filter__tab tab--active" href="#filter-1"><span>Параметры</span></a>
                      <a class="tab aside-filter__tab " href="#filter-2"><span>по марке</span></a>
                    </div>
                   </div> 
                    <div class="tabs-container">
                      <div id="filter-1" class="tabs-content aside-filter__tabs-content tabs-content--active">
                        <form action="" class="aside-filter__form">
                          <ul class="aside-filter__list">

                            <li class="aside-filter__item-drop">
                              <p class="aside-filter__item-title filter__item-drop">Наличие</p>
                              <div class="aside-filter__content">

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    В наличии
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    Под заказ
                                  </label>
                                </div>
                                
                              </div>
                            </li>

                            <li class="aside-filter__item-drop">
                              <p class="aside-filter__item-title filter__item-drop">Новинки</p>
                              <div class="aside-filter__content aside-filter__content-radio">

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" name="content" type="radio">
                                    Все
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" name="content" type="radio">
                                    Новинки
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" name="content" type="radio">
                                    Акция
                                  </label>
                                </div>
                                
                              </div>
                            </li>

                            <li class="aside-filter__item-drop">
                              <p class="aside-filter__item-title filter__item-drop">Цена</p>
                              <div class="aside-filter__content aside-filter__content-radio">

                                <input type="text" class="js-range-slider" name="my_range" value=""/>
                                
                              </div>
                            </li>


                            
                            <li class="aside-filter__item-list">
                              <div class="filter__item-list">
                                <p class="filter__item-list_title">
                                  Мощность л.с.
                                </p>
                                <select class="filter-style filter__item-list_select" name="" id="">
                                  <option>90</option>
                                  <option>130</option>
                                  <option>154</option>
                                  <option>230</option>
                                </select>
                              </div>

                              <div class="filter__item-list">
                                <p class="filter__item-list_title">
                                  Мощность двигателя л.с.
                                </p>
                                <select class="filter-style filter__item-list_select" name="" id="">
                                  <option>90</option>
                                  <option>130</option>
                                  <option>154</option>
                                  <option>230</option>
                                </select>
                              </div>

                              <div class="filter__item-list">
                                <p class="filter__item-list_title">
                                  Макс. скорость л.с.
                                </p>
                                <select class="filter-style filter__item-list_select" name="" id="">
                                  <option>90</option>
                                  <option>130</option>
                                  <option>154</option>
                                  <option>230</option>
                                </select>
                              </div>
                            </li>

                            <li class="aside-filter__item-drop">
                              <p class="aside-filter__item-title filter__item-drop">Бренд</p>
                              <div class="aside-filter__content">

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox" checked>
                                    BRP
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox" checked>
                                    Spark 2 
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    Spark 3
                                  </label>
                                </div>

                                <div class="filter-more">
                                  <button class="filter-more__btn">показать еще</button>
                                </div>
                                
                              </div>

                            
                            </li>


                            <li class="aside-filter__item-drop">
                              <p class="aside-filter__item-title filter__item-drop">Бренд</p>
                              <div class="aside-filter__content">

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox" checked>
                                    BRP
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox" checked>
                                    Spark 2 
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    Spark 3
                                  </label>
                                </div>

                                <div class="filter-more">
                                  <button class="filter-more__btn">показать еще</button>
                                </div>
                                
                              </div>

                            
                            </li>

                            <li class="aside-filter__item-drop">
                              <p class="aside-filter__item-title filter__item-drop">Модели</p>
                              <div class="aside-filter__content">

                                <input type="text" class="filter-search" placeholder="Введите модель">

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    Модель 1
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    Модель 2
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    Модель 3
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    Модель 4ы
                                  </label>
                                </div>
                                
                              </div>
                            </li>

                            <li class="aside-filter__item-drop filter-sales">
                              <p class="aside-filter__item-title filter__item-drop">Акции</p>
                              <div class="aside-filter__content">

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    <span class="filter-sales__text">Sale</span> 
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    <span class="filter-sales__text">New</span> 
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    <span class="filter-sales__text">Hit</span> 
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    <span class="filter-sales__text">Дилер</span> 
                                  </label>
                                </div>
                                
                              </div>
                            </li>

                            <li class="aside-filter__item-drop">
                              <p class="aside-filter__item-title filter__item-drop">Страны</p>
                              <div class="aside-filter__content">

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    Россия
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    Германия 
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    Китай 
                                  </label>
                                </div>

                                <div class="aside-filter__content-box">
                                  <label class="aside-filter__content-label">
                                    <input class="filter-style" type="checkbox">
                                    США 
                                  </label>
                                </div>
                                
                              </div>
                            </li>

                            <li class="aside-filter__item-drop aside-filter__item-btn">
                              <button class="filter-btn__send filter-btn-send--active">Выбрать</button>
                              <button class="filter-btn__reset">Сбросить фильтр</button>
                            </li>


                          </ul>
                        </form>
                      </div>
                      <div id='filter-2' class="tabs-content aside-filter__tabs-content">content-2</div>
                  </div> 
                </aside>

                <div class="catalog__inner-list">
                    <div class="product-item__wrapper">
                        <button class="product-item__favourite">
                        </button>
                        <button class="product-item__cart">
                          <img src="images/icons/cart-white.svg" alt="cart">
                        </button>
                        <a class="product-item product-item--sale" href="#">
                          <p class="product-item__hover-text">посмотреть товар</p>
                          <img src="images/catalog/hydro-product-1.png" alt="" class="product-item__img">
                          <h4 class="product-item__title">Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango</h4>
                          <p class="price product-item__price">1 049 500 ₽</p>
                          <p class="product-item__notify">нет в наличии</p>
                        </a>
                    </div>
                      <div class="product-item__wrapper">
                        <button class="product-item__favourite">
                        </button>
                        <button class="product-item__cart">
                          <img src="images/icons/cart-white.svg" alt="cart">
                        </button>
                        <a class="product-item product-item--sale" href="#">
                          <p class="product-item__hover-text">посмотреть товар</p>
                          <img src="images/catalog/hydro-product-2.png" alt="" class="product-item__img">
                          <h4 class="product-item__title">Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</h4>
                          <p class="price product-item__price">1 100 475 ₽</p>
                          <p class="product-item__notify">нет в наличии</p>
                        </a>
                      </div>
                      <div class="product-item__wrapper">
                        <button class="product-item__favourite">
                        </button>
                        <button class="product-item__cart">
                          <img src="images/icons/cart-white.svg" alt="cart">
                        </button>
                        <a class="product-item" href="#">
                          <p class="product-item__hover-text">посмотреть товар</p>
                          <img src="images/catalog/hydro-product-3.png" alt="" class="product-item__img">
                          <h4 class="product-item__title">Гидроцикл BRP SeaDoo GTR 230hp X California green</h4>
                          <p class="price product-item__price">1 323 700 ₽</p>
                          <p class="product-item__notify">нет в наличии</p>
                        </a>
                      </div>
                      <div class="product-item__wrapper product-item__not-available">
                        <button class="product-item__favourite">
                        </button>
                        <button class="product-item__cart">
                          <img src="images/icons/cart-white.svg" alt="cart">
                        </button>
                        <a class="product-item" href="#">
                          <p class="product-item__hover-text">посмотреть товар</p>
                          <img src="images/catalog/hydro-product-4.png" alt="" class="product-item__img">
                          <h4 class="product-item__title">Гидроцикл BRP SeaDoo GTR 230hp STD Black / Gulfstream</h4>
                          <p class="price product-item__price">1 543 000 ₽</p>
                          <p class="product-item__notify">нет в наличии</p>
                        </a>
                      </div>
                      <div class="product-item__wrapper">
                        <button class="product-item__favourite">
                        </button>
                        <button class="product-item__cart">
                          <img src="images/icons/cart-white.svg" alt="cart">
                        </button>
                        <a class="product-item product-item--sale" href="#">
                          <p class="product-item__hover-text">посмотреть товар</p>
                          <img src="images/catalog/hydro-product-5.png" alt="" class="product-item__img">
                          <h4 class="product-item__title">Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal</h4>
                          <p class="price product-item__price">1 543 000 ₽</p>
                          <p class="product-item__notify">нет в наличии</p>
                        </a>
                      </div>
                      <div class="product-item__wrapper">
                        <button class="product-item__favourite">
                        </button>
                        <button class="product-item__cart">
                          <img src="images/icons/cart-white.svg" alt="cart">
                        </button>
                        <a class="product-item" href="#">
                          <p class="product-item__hover-text">посмотреть товар</p>
                          <img src="images/catalog/hydro-product-6.png" alt="" class="product-item__img">
                          <h4 class="product-item__title">Гидроцикл BRP SeaDoo Spark 60hp 2 up</h4>
                          <p class="price product-item__price">732 345 ₽</p>
                          <p class="product-item__notify">нет в наличии</p>
                        </a>
                      </div>
                      <div class="product-item__wrapper">
                        <button class="product-item__favourite">
                        </button>
                        <button class="product-item__cart">
                          <img src="images/icons/cart-white.svg" alt="cart">
                        </button>
                        <a class="product-item" href="#">
                          <p class="product-item__hover-text">посмотреть товар</p>
                          <img src="images/catalog/hydro-product-7.png" alt="" class="product-item__img">
                          <h4 class="product-item__title">Гидроцикл BRP SeaDoo Spark GTS 90hp Rental</h4>
                          <p class="price product-item__price">857 666 ₽</p>
                          <p class="product-item__notify">нет в наличии</p>
                        </a>
                      </div>
                      <div class="product-item__wrapper">
                        <button class="product-item__favourite">
                        </button>
                        <button class="product-item__cart">
                          <img src="images/icons/cart-white.svg" alt="cart">
                        </button>
                        <a class="product-item product-item--sale" href="#">
                          <p class="product-item__hover-text">посмотреть товар</p>
                          <img src="images/catalog/hydro-product-8.png" alt="" class="product-item__img">
                          <h4 class="product-item__title">Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue</h4>
                          <p class="price product-item__price">1 229 711 ₽</p>
                          <p class="product-item__notify">нет в наличии</p>
                        </a>
                      </div>
                      <div class="product-item__wrapper">
                        <button class="product-item__favourite">
                        </button>
                        <button class="product-item__cart">
                          <img src="images/icons/cart-white.svg" alt="cart">
                        </button>
                        <a class="product-item" href="#">
                          <p class="product-item__hover-text">посмотреть товар</p>
                          <img src="images/catalog/hydro-product-9.png" alt="" class="product-item__img">
                          <h4 class="product-item__title">Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper</h4>
                          <p class="price product-item__price">587 440 ₽</p>
                          <p class="product-item__notify">нет в наличии</p>
                        </a>
                      </div>
                      <div class="product-item__wrapper">
                        <button class="product-item__favourite">
                        </button>
                        <button class="product-item__cart">
                          <img src="images/icons/cart-white.svg" alt="cart">
                        </button>
                        <a class="product-item" href="#">
                          <p class="product-item__hover-text">посмотреть товар</p>
                          <img src="images/catalog/hydro-product-10.png" alt="" class="product-item__img">
                          <h4 class="product-item__title">Гидроцикл Spark 2-UP 900 Ho Ace Pineapple </h4>
                          <p class="price product-item__price">587 440 ₽</p>
                          <p class="product-item__notify">нет в наличии</p>
                        </a>
                      </div>
                      <div class="product-item__wrapper product-item__not-available">
                        <button class="product-item__favourite">
                        </button>
                        <button class="product-item__cart">
                          <img src="images/icons/cart-white.svg" alt="cart">
                        </button>
                        <a class="product-item" href="#">
                          <p class="product-item__hover-text">посмотреть товар</p>
                          <img src="images/catalog/hydro-product-11.png" alt="" class="product-item__img">
                          <h4 class="product-item__title">Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla </h4>
                          <p class="price product-item__price">587 440 ₽</p>
                          <p class="product-item__notify">нет в наличии</p>
                        </a>
                      </div>
                      <div class="product-item__wrapper product-item__not-available">
                        <button class="product-item__favourite">
                        </button>
                        <button class="product-item__cart">
                          <img src="images/icons/cart-white.svg" alt="cart">
                        </button>
                        <a class="product-item" href="#">
                          <p class="product-item__hover-text">посмотреть товар</p>
                          <img src="images/catalog/hydro-product-12.png" alt="" class="product-item__img">
                          <h4 class="product-item__title">Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry</h4>
                          <p class="price product-item__price">587 440 ₽</p>
                          <p class="product-item__notify">нет в наличии</p>
                        </a>
                      </div>
              
                </div>      
            </div>
            <div class="pagination">
                <ul class="pagination-list">
                    <li class="pagination-list__item pagination-list__item-active">
                        <a href="#">1</a>
                    </li>
                    <li class="pagination-list__item">
                        <a href="#">2</a>
                    </li>
                    <li class="pagination-list__item">
                        <a href="#">3</a>
                    </li> 
                    <li class="pagination-list__item">
                        <a href="#">4</a>
                    </li>
                    <li class="pagination-list__item">
                        <a href="#">5</a>
                    </li>
                    <li class="pagination-list__item">
                        <a href="#">...</a>
                    </li>
                    <li class="pagination-list__item">
                        <a href="#">7</a>
                    </li>
                </ul>
            </div>
        </div>
    </section> 

</template>

<script>
export default {

}
</script>

<style>

</style>