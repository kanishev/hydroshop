$(function () {

  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="slick-btn slick-btn__prev"><img src="images/arrow-left.svg" alt="leftArrow"></button>',
    nextArrow:
      '<button class="slick-btn slick-btn__next"><img src="images/arrow-right.svg" alt="nextArrow"></button>',
  });

  $(".tab").on("click", function (e) {
    e.preventDefault();

    $($(this).siblings()).removeClass("tab--active");
    $($(this).parent().siblings().find('div')).removeClass("tabs-content--active");

    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");
  });

  $('.product-item__favourite').on('click', function(){
    $(this).toggleClass('product-item__favourite--active')
  })

  $(".product-slider").slick({
    slidesToShow:4,
    slidesToScroll: 1,
    prevArrow:
    '<button class="product-btn product-btn__prev"><img src="images/arrow-black-left.svg" alt="leftArrow"></button>',
  nextArrow:
    '<button class="product-btn product-btn__next"><img src="images/arrow-black-right.svg" alt="nextArrow"></button>',
  });

  $('.filter-style').styler()

  $(".filter__item-drop, .filter-add").on('click', function(){
    $(this).toggleClass('filter__item-drop--active')
    $(this).next().slideToggle()
  })

  $(".catalog__filter-btn_line").on('click', function(){
    $(this).addClass('catalog__filter-mode--active')
    $(".catalog__filter-btn_grid").removeClass('catalog__filter-mode--active')
    $(".product-item__wrapper").addClass('product-item__wrapper--list')

  })

  $(".catalog__filter-btn_grid").on('click', function(){
    $(this).addClass('catalog__filter-mode--active')
    $(".catalog__filter-btn_line").removeClass('catalog__filter-mode--active')
    $(".product-item__wrapper").removeClass('product-item__wrapper--list')

  })

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
    from: 150000,
    grid: false
});
   
});
