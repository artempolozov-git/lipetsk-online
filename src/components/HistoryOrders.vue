<template>
  <div class="order-page__container">
    <div class="order-title__information" @click="panelHistory">
      <h2 class="title">{{title}}</h2>
      <img :src="image" class="dropdown-icon">
    </div>

    <div class="order__panel" id="show-panel-history">
      <div class="about-order__wrapper">
        <div class="payment-title">Заказ {{number}} от {{date}}</div>
      </div>
      <div class="named-order__wrapper">
        <div class="named-information">{{named}}</div>
        <div class="validity-information">{{validity}}</div>
      </div>
      <div class="about-payments__wrapper">
        <span>{{info}} </span>
        <span class="amount-order">{{amount}}шт.</span>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "HistoryOrders",
        props: {
            title: String,
            number: Number,
            date: String,
            named: String,
            validity: String,
            info: String,
            amount: Number,
            image: String,
        },
        methods:{
            panelHistory(){
                var form = document.getElementById("show-panel-history");
                form.style.display = (form.style.display == 'block') ? 'none' : 'block'
            },
        },
    }
</script>

<style scoped>
  .order-page__container {
    margin-top: 30px;
  }
  .order-title__information {
    display: flex;
    align-items: center;
    margin-top: 30px;
  }
  .title {
    margin: 0;
    font-weight: bold;
  }
  .dropdown-icon {
    width: 4vw;
    margin-left: auto;
  }
  .order__panel {
    display: none;
    padding: 20px;
    box-sizing: border-box;
    margin-top: 15px;
    background-color: #ffffff;
    box-shadow: 0px 0px 13px 2px rgba(157, 157, 157, 0.2);
    border-radius: 10px;
  }
  .about-order__wrapper {
    display: flex;
    align-items: center;
    padding-bottom: 20px;
    border-bottom: 1px solid #a4a4a3;
  }
  .named-order__wrapper {
    padding-top: 20px;
  }
  .order-button {
    outline: none;
    border: none;
    background-color: #00B1D6;
    color: #ffffff;
    padding: 10px 20px;
    margin-left: auto;
    border-radius: 50px;
  }
  .validity-information {
    color: #a4a4a3;
    font-size: 2vw;
  }
  .about-payments__wrapper {
    margin-top: 15px;
  }
  .amount-order {
    font-weight: bold;
    color: #00B1D6;
  }
</style>