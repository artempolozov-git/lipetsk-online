<template>
  <footer class="footer__main__container">
    <div class="footer-buttons" v-on:click="goToPage('/')">
      <div class="image-button"><img src="@/assets/icons/main.svg"></div>
      <p class="button-content color-blue">Главная</p>
    </div>
    <div class="footer-buttons indent" v-on:click="goToPage('orders')">
      <div class="image-button"><img src="@/assets/icons/favorites.svg"></div>
      <p class="button-content">Избранное</p>
    </div>
    <div class="footer-buttons indent">
      <div class="image-button"><img src="@/assets/icons/location.svg"></div>
      <p class="button-content">Карты</p>
    </div>
    <div class="footer-buttons indent">
      <div class="image-button" v-on:click="goToPage('payment')"><img src="@/assets/icons/basket.svg"></div>
      <p class="button-content">Корзина</p>
    </div>
    <div class="footer-buttons indent" v-on:click="goToPage('registration')">
      <div class="image-button"><img src="@/assets/icons/profile.svg"></div>
      <p class="button-content">Профиль</p>
    </div>
  </footer>
</template>

<script>
    export default {
        name: "Footer",
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        }
    }
</script>

<style scoped>
  @media only screen and (max-width : 768px) {
    .footer__main__container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: auto;
      padding: 20px;
      background-color: #ffffff;
      -webkit-box-shadow: 0px -8px 5px -5px rgba(164, 164, 163, 0.8);
      -moz-box-shadow: 0px -8px 5px -5px rgba(164, 164, 163, 0.8);
      box-shadow: 0px -8px 5px -5px rgba(164, 164, 163, 0.8);
      position: sticky;
      bottom: 0;
      z-index: 2;
    }

    .footer-buttons {
      width: max-content;
    }

    .indent {
      margin-left: auto;
    }

    .image-button {
      display: flex;
      justify-content: center;
    }

    .image-button > img {
      width: 6vw;
      margin-bottom: 5px;
    }

    .button-content {
      margin: 0;
      color: #8EB4B4;
    }

    .color-blue {
      color: #0072B9;
    }
  }
@media only screen and (max-width : 450px) {
  .footer__main__container {
    padding: 25px 15px;
  }
}
</style>