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
  })

});
