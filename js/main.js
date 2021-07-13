$(function () {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="slick-btn slick-btn__prev"><img src="images/arrow-left.svg" alt="leftArrow"></button>',
    nextArrow:
      '<button class="slick-btn slick-btn__next"><img src="images/arrow-right.svg" alt="nextArrow"></button>',
  })

  $(".search__tabs-item").on("click", function (e) {
    e.preventDefault()

    $(".search__tabs-item").removeClass("search__tabs-item--active")
    $(".search__content-item").removeClass("search__content-item--active")

    $(this).addClass("search__tabs-item--active")
    $($(this).data("tab")).addClass("search__content-item--active")
  })
})
