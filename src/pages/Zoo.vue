<template>
  <div class="inner-page__container">
    <div class="page__background-image"></div>
    <div class="page__content">
      <!--title and button-->
      <div class="main__title__wrapper">
        <div class="title__block">
          <h2 class="title-content">Липецкий зоопарк</h2>
        </div>
        <div class="favorites-icon__button"><img src="@/assets/icons/favorites-button.svg"></div>
      </div>
      <div class="button">График работы</div>
      <!--information-->
      <div class="information__blocks indent-top">
        <div class="icons"><img src="@/assets/icons/location-blue.svg"></div>
        <div class="information">
          <p>г. Липецк, ул. Карла Маркса, вл. 9</p>
        </div>
      </div>
      <div class="information__blocks">
        <div class="icons"><img src="@/assets/icons/phone.svg"></div>
        <div class="information">
          <p>Контактные телефоны:</p>
          <p>+7 (4742) 23-54-17</p>
          <p>+7 (4742) 77-86-62</p>
          <p>(с 8:00 до 17:00, по будням)</p>
          <p>+7 (4742) 77-86-54</p>
          <p>(с 8:00 до 18:00, ежедневно)</p>
        </div>
      </div>
      <div class="information__blocks">
        <div class="icons"><img src="@/assets/icons/email.svg"></div>
        <div class="information">
          <p>Email: lipzoo@yandex.ru</p>
        </div>
      </div>
      <div class="information__blocks about-organization">
        <div class="icons"><img src="@/assets/icons/star.svg"></div>
        <div class="information">
          <p>Липецкий зоологический парк - это
            природоохранное, научно-исследовательское
            и культурно-образовательное учреждение,
            которое является искусственно созданным
            объектом общегосударственного значения.
            Количество видов животных составляет более
            300, около 3 000 экземпляров.</p>
        </div>
      </div>
      <div class="information__blocks contact-information">
        <div class="icons"><img src="@/assets/icons/envelope.svg"></div>
        <div class="information">
          <p>МАУК "Липецкий зоопарк" г.Липецка</p>
          <p>ИНН/КПП: 4825033928/482501001</p>
          <p>ОГРН: 1034800162946</p>
          <p>Фактический адрес: г. Липецк, ул. Карла Маркса, вл. 9</p>
          <p>Юридический адрес: 398059, Липецкая обл., г. Липецк, ул. Карла Маркса, 9</p>
        </div>
      </div>
      <div class="information__blocks contact-information">
        <div class="icons"><img src="@/assets/icons/card.svg"></div>
        <div class="information">
          <span class="additional-content color-black">Способы оплаты</span>
          <p>Вы можете оплатить заказ в кассе за наличные средства или оплатить онлайн в приложении Липецк Online.
            Банковской картой. Для выбора оплаты с помощью банковской карты необходимо нажать кнопку «Оплата заказа».
            Оплата происходит через ПАО СБЕРБАНК с использованием банковских карт следующих платежных систем:</p>
          <div class="payment-system">
            <div class="payment">
              <div class="icons"><img src="@/assets/icons/mir.png"></div>
              <span class="additional-content color-black">МИР</span>
            </div>
            <div class="payment">
              <div class="icons"><img src="@/assets/icons/visa.svg"></div>
              <span class="additional-content color-black">VISA International</span>
            </div>
            <div class="payment">
              <div class="icons"><img src="@/assets/icons/mastercard.png"></div>
              <span class="additional-content color-black">Mastercard Worldwide</span>
            </div>
          </div>
        </div>
      </div>
      <div class="button" @click="goToPage('zoo-tickets')">Оплатить онлайн</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Zoo",
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        },
    }
</script>

<style scoped>
  .inner-page__container {
    position: relative;
    bottom: 170px;
  }
  .page__background-image {
    width: 100%;
    height: 450px;
    background: url(../assets/images/zoo.jpg);
    background-size: cover;
    background-position: center;
  }
  .page__content {
    height: auto;
    padding-top: 60px;
    background-color: #ffffff;
    border-radius: 40px 40px 0 0;
    position: relative;
    bottom: 30px;
  }
  .main__title__wrapper {
    display: flex;
    margin-bottom: 15px;
    padding: 0 40px;
  }
  .favorites-icon__button {
    margin-left: auto;
  }
  .favorites-icon__button > img {
    width: 5vw;
  }
  .title-content {
    margin: 0;
    font-weight: normal;
    font-size: 6vw;
    text-transform: uppercase;
  }
  .additional-content {
    font-size: 5vw;
    color: #A4A4A3;
  }
  .color-black {
    color: #000000;
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    height: auto;
    border-radius: 50px;
    padding: 15px;
    background-color: #00B1D6;
    color: #ffffff;
    margin: 15px 40px;
  }
  .information__blocks {
    display: flex;
    padding: 20px 40px;
    border-top: 1px #A4A4A3 solid;
  }
  .about-organization {
    align-items: start;
    background-color: #00B1D6;
    color: #ffffff;
    border-top: 0;
  }
  .contact-information {
    align-items: start;
  }
  .indent-top {
    margin-top: 30px;
  }
  .icons > img {
    width: 7vw;
    margin-right: 15px;
  }
  .information > p {
    font-size: 4vw;
    margin: 5px 0 0 0;
  }
  .payment-system {
    margin-top: 30px;
  }
  .payment {
    display: flex;
    align-items: center;
    margin-top: 10px;
  }
</style>