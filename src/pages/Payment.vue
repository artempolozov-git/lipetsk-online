<template>
  <div class="payment-page__container">
    <div class="title">Подтвердите заказ</div>
    <div class="payment__panel">
      <div class="about-payments__wrapper">
        <div class="payment-title">{{title}}</div>
        <div class="payment-details">
          <span id="order">{{order}}₽ </span>
          <span id="amount">x {{amount}}</span>
          <span id="total"> = {{total}}₽</span>
        </div>
      </div>
      <div class="information-payments__wrapper">
        <span class="payments-information" id="info">{{info}}</span>
        <span class="amount-information"> {{amount}}шт.</span>
      </div>
    </div>

    <div class="total-value__wrapper">
      <span>Итого: </span>
      <span class="amount-information">{{total}}₽</span>
    </div>

    <div class="choose-payments__wrapper">
      <div class="choose-payments-title">Выберите способ оплаты:</div>
      <div class="payment-buttons">
        <button type="button" class="sberbank-button">
          <img src="@/assets/icons/sberbank.svg" class="icon-button">
        </button>
        <button type="button" class="gpay-button">
          <img src="@/assets/icons/gpay.svg" class="icon-button">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Payment",
        data() {
            return {
                title: "Билет в зоопарк",
                order: 250,
                amount: 1,
                total: 250,
                info: "Взрослый билет:",
            }
        },
    }
</script>

<style scoped>
.payment-page__container {
  padding: 40px 30px;
  box-sizing: border-box;
  font-size: 4vw;
}
.title {
  text-align: center;
  font-weight: bold;
  font-size: 5vw;
  margin-bottom: 20px;
}
.payment__panel {
  padding: 20px;
  box-sizing: border-box;
  background-color: #ffffff;
  box-shadow: 0px 0px 13px 2px rgba(157, 157, 157, 0.2);
  border-radius: 10px;
}
.about-payments__wrapper {
  padding-bottom: 20px;
  border-bottom: 1px solid #a4a4a3;
}
.payment-details {
  color: #00B1D6;
  font-weight: bold;
}
.information-payments__wrapper {
  padding-top: 20px;
}
.amount-information {
  font-weight: bold;
  color: #00B1D6;
}
.total-value__wrapper {
  text-align: center;
  margin-top: 30px;
}
.choose-payments__wrapper {
  margin-top: 40px;
}
.choose-payments-title {
  text-align: center;
}
.payment-buttons {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-column-gap: 20px;
  margin-top: 20px;
}
.gpay-button, .sberbank-button {
  padding: 15px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 5px;
}
.gpay-button {
  background-color: #000000;
}
.sberbank-button {
  background-color: #21a038;
}
.icon-button {
  height: 5vw;
}
@media only screen and (max-width : 400px) {
  .payment-buttons {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  }
}
</style>