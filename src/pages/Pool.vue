<template>
  <div class="inner-page__container">
    <div class="page__background-image"></div>
    <div class="page__content">
      <!--title and button-->
      <div class="main__title__wrapper">
        <div class="title__block">
          <h2 class="title-content">Бассейн</h2>
          <span class="additional-content">Школа 27</span>
        </div>
        <div class="favorites-icon__button"><img src="@/assets/icons/favorites-button.svg"></div>
      </div>
      <div class="button">Посмотреть расписание</div>
      <!--information-->
      <div class="information__blocks indent-top">
        <div class="icons"><img src="@/assets/icons/location-blue.svg"></div>
        <div class="information">
          <p>г. Липецк, ул. Лутова, 15</p>
        </div>
      </div>
      <div class="information__blocks">
        <div class="icons"><img src="@/assets/icons/phone.svg"></div>
        <div class="information">
          <p>Контактные телефоны:</p>
          <p>+7(4742) 37-07-27</p>
          <p>(c 8:00 до 17:00, по будням)</p>
        </div>
      </div>
      <div class="information__blocks">
        <div class="icons"><img src="@/assets/icons/email.svg"></div>
        <div class="information">
          <p>Email: sc27intech@yandex.ru</p>
        </div>
      </div>
      <div class="information__blocks about-organization">
        <div class="icons"><img src="@/assets/icons/star.svg"></div>
        <div class="information">
          <p>Инженерно-технологическая школа №27 начала работу 1 сентября 2020 года. Спортивно-оздоровительный комплекс Манеж-центр,
          открыт на базе школы, включает в себя бассейны, тренажерные залы, зоны фитнеса и отдыха, кабинеты для оздоровительных процедур.
          Для всех жителей города доступны стадион с футбольным полем, баскетбольная и волейбольная площадки, а так же игровые зоны для малышей.</p>
        </div>
      </div>
      <div class="information__blocks contact-information">
        <div class="icons"><img src="@/assets/icons/envelope.svg"></div>
        <div class="information">
          <p>МАУО Инженерно-технологическая школа №27 г.Липецка</p>
          <p>ИНН/КПП: 4824098150/482401001</p>
          <p>ОГРН: 1194827011081</p>
          <p>Фактический адрес: г. Липецк, ул. Лутова, 15</p>
          <p>Юридический адрес:  398008, Липецкая область, город Липецк, улица Лутова, дом 15</p>
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
    </div>
  </div>
</template>

<script>
    export default {
        name: "PoolPage"
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
  background: url(../assets/images/pool.jpg);
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
  font-size: 8vw;
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
  margin: 0 40px;
}
.information__blocks {
  display: flex;
  align-items: center;
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