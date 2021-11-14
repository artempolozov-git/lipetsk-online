<template>
  <div class="content__container">
    <!--first column-->
    <div class="content__column indent-right">
      <!--first block-->
      <div class="content__block">
        <div class="content-background first_block"></div>
        <div class="content-filling">
          <div class="main__title__wrapper">
            <div class="title__block">
              <span class="additional-content">скоро</span>
              <h2 class="title-content">Футбол</h2>
            </div>
            <div class="more-icon__button"><img src="@/assets/icons/more-button.svg"></div>
          </div>
          <div class="additional-info">16:00</div>
        </div>
      </div>
      <!--second block-->
      <div class="content__block indent-top">
        <div class="content-background second_block"></div>
        <div class="content-filling">
          <div class="main__title__wrapper">
            <div class="title__block">
              <span class="additional-content">липецк</span>
              <h2 class="title-content">Импровизация</h2>
            </div>
            <div class="more-icon__button"><img src="@/assets/icons/more-button.svg"></div>
          </div>
          <div class="additional-info">19:00</div>
        </div>
      </div>
    </div>
    <!--second column-->
    <div class="content__column top">
      <!--three block-->
      <div class="content__block">
        <div class="content-background third_block"></div>
        <div class="content-filling">
          <div class="main__title__wrapper">
            <div class="title__block">
              <span class="additional-content">скоро</span>
              <h2 class="title-content">Мастер-класс</h2>
            </div>
            <div class="more-icon__button"><img src="@/assets/icons/more-button.svg"></div>
          </div>
          <div class="additional-info">10:00</div>
          <div class="additional-info">Стоимость: 300₽</div>
          <div class="additional-info">Скидка: 10%</div>
        </div>
      </div>
      <!--fourth block-->
      <div class="content__block indent-top" v-on:click="goToPage('pool')">
        <div class="content-background fourth_block"></div>
        <div class="content-filling">
          <div class="main__title__wrapper">
            <div class="title__block">
              <span class="additional-content">липецк</span>
              <h2 class="title-content">Бассейн</h2>
            </div>
            <div class="more-icon__button"><img src="@/assets/icons/more-button.svg"></div>
          </div>
          <div class="additional-info">08:00</div>
          <div class="additional-info">Стоимость: 500₽</div>
          <div class="additional-info">Скидка: 5%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HomeContent",
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        }
    }
</script>

<style scoped>
  .content__container {
    display: flex;
    padding: 20px 20px 60px;
    box-sizing: border-box;
  }
  .content__column {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .content__block {
    border-radius: 30px;
    background-color: #ffffff;
    -webkit-box-shadow: 2px 2px 1px 0px rgba(0, 114, 185, 1);
    -moz-box-shadow: 2px 2px 1px 0px rgba(0, 114, 185, 1);
    box-shadow: 2px 2px 1px 0px rgba(0, 114, 185, 1);
  }
  .indent-top {
    margin-top: 30px;
  }
  .indent-right {
    margin-right: 20px;
  }
  .content-background {
    width: 100%;
    height: 160px;
    border-radius: 30px 30px 0 0;
  }
  .first_block {
    background: url(../assets/images/sport.jpg);
    background-size: cover;
    background-position: center;
  }
  .second_block {
    background: url(../assets/images/improvisation.jpg);
    background-size: cover;
    background-position: center;
  }
  .third_block {
    background: url(../assets/images/masterclass.png);
    background-size: cover;
    background-position: center;
  }
  .fourth_block {
    background: url(../assets/images/pool.jpg);
    background-size: cover;
    background-position: center;
  }
  .main__title__wrapper {
    display: flex;
    margin-bottom: 15px;
  }
  .more-icon__button {
    margin-left: auto;
  }
  .more-icon__button > img {
    width: 4vw;
  }
  .content-filling {
    padding: 15px;
  }
  .title-content {
    margin: 0;
    font-weight: bold;
    font-size: 4vw;
    text-transform: uppercase;
  }
  .additional-info {
    color: #A4A4A3;
    margin-top: 5px;
  }
  @media only screen and (max-width : 400px) {
    .content__container {
      display: block;
    }
    .top {
      margin-top: 30px;
    }
  }
</style>