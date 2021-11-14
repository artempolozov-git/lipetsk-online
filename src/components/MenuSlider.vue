<template>
  <section>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="select-page__button">
          <span class="button-content">Мастер-класс</span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="select-page__button">
          <span class="button-content">Концерт</span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="select-page__button">
          <span class="button-content">Творчество</span>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="select-page__button">
          <span class="button-content">Спорт</span>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "MenuSlider",
        components: {
            Swiper,
            SwiperSlide
        },
        data() {
            return {
                swiperOption: {
                    slidesPerView: 'auto',
                    centeredSlides: true,
                    spaceBetween: 20,
                }
            }
        }
    }
</script>

<style scoped>
@media only screen and (max-width : 768px) {
  .swiper-slide {
    flex-shrink: inherit;
  }
  .swiper-container {
    height: 70px;
  }
  .select-page__button {
    width: max-content;
    padding: 15px 20px;
    box-sizing: border-box;
    background-color: #ffffff;
    border-radius: 50px;
    -webkit-box-shadow: 3px 3px 1px 0px rgba(0, 114, 185, 1);
    -moz-box-shadow: 3px 3px 1px 0px rgba(0, 114, 185, 1);
    box-shadow: 3px 3px 1px 0px rgba(0, 114, 185, 1);
  }

  .button-content {
    text-transform: uppercase;
    color: #0072B9;
  }
}
</style>