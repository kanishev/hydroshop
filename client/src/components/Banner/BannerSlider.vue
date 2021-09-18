<template>
  <div class="banner-section__slider">
    <carousel
      :perPage="1"
      paginationActiveColor="#1c62cd"
      :loop="true"
      :autoplay="true"
    >
      <slide>
        <a class="banner-section__slider-item" href="#" @click.prevent>
          <img src="../../images/content/banner-slider.jpg" alt="" />
        </a>
      </slide>
      <slide>
        <a class="banner-section__slider-item" href="#" @click.prevent>
          <img src="../../images/content/banner-slider.jpg" alt="" />
        </a>
      </slide>
      <slide>
        <a class="banner-section__slider-item" href="#" @click.prevent>
          <img src="../../images/content/banner-slider.jpg" alt="" />
        </a>
      </slide>
      <slide>
        <a class="banner-section__slider-item" href="#" @click.prevent>
          <img src="../../images/content/banner-slider.jpg" alt="" />
        </a>
      </slide>
      <slide>
        <a class="banner-section__slider-item" href="#" @click.prevent>
          <img src="../../images/content/banner-slider.jpg" alt="" />
        </a>
      </slide>
      <slide>
        <a class="banner-section__slider-item" href="#" @click.prevent>
          <img src="../../images/content/banner-slider.jpg" alt="" />
        </a>
      </slide>
      <slide>
        <a class="banner-section__slider-item" href="#" @click.prevent>
          <img src="../../images/content/banner-slider.jpg" alt="" />
        </a>
      </slide>
    </carousel>
  </div>
</template>
