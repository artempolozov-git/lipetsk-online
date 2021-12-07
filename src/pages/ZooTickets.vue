<template>
  <div class="ticket-page__container">
    <div class="ticket__wrapper">
      <h2 class="ticket-title">Билет в зоопарк</h2>
      <p class="ticket-description">Действует 10 дней с момента покупки. Вход для детей до 3 лет - бесплатный.
        Детский билет действует для детей с 3 до 12 лет. Пожалуйста, уточняйте график
        работы организации перед посещением.</p>
    </div>
    <div class="tickets__blocks">
      <zoo-price v-for="(item, zooTicket) in ticketsZoo"
               :key="zooTicket"
               :title="item.title"
               :sum="item.sum"
               :price="item.price"
               :image="item.image"
               :styleBlock="item.styleBlock">
    </zoo-price>
    </div>

    <div class="ticket__wrapper  indent-top">
      <h2 class="ticket-title">Билет в акватеррариум</h2>
      <p class="ticket-description">Действует 10 дней с момента покупки. Вход для детей до 3 лет - бесплатный.
        Детский билет действует для детей с 3 до 12 лет. Пожалуйста, уточняйте график
        работы организации перед посещением.</p>
    </div>
    <div class="tickets__blocks">
      <zoo-price v-for="(item, aquaTicket) in ticketsAqua"
               :key="aquaTicket"
               :title="item.title"
               :sum="item.sum"
               :price="item.price">
      </zoo-price>
    </div>

    <div class="ticket__wrapper  indent-top">
      <h2 class="ticket-title">Единый билет в зоопарк и акватеррариум</h2>
      <p class="ticket-description">Действует 10 дней с момента покупки. Вход для детей до 3 лет - бесплатный.
        Детский билет действует для детей с 3 до 12 лет. Пожалуйста, уточняйте график
        работы организации перед посещением.</p>
    </div>
    <div class="tickets__blocks">
      <zoo-price v-for="(item, generalTicket) in ticketsGeneral"
                                            :key="generalTicket"
                                            :title="item.title"
                                            :sum="item.sum"
                                            :price="item.price">
      </zoo-price>
    </div>

    <div class="button" @click="goToPage('payment')">Оплатить заказ</div>
  </div>
</template>

<script>
    import ZooPrice from "@/components/ZooPrice";
    export default {
        name: "ZooTickets",
        components: {
            ZooPrice
        },
        data () {
            return {
                ticketsZoo: [
                    {
                        title:"Взрослый билет",
                        sum: "250₽",
                        price: 250,
                    },
                    {
                        title:"Детский билет",
                        sum: "130₽",
                        price: 130,
                    },
                    {
                        title:"Льготный билет",
                        sum: "170₽",
                        price: 170,
                        image: require('../assets/icons/prompt.svg'),
                        styleBlock: "block",
                    },
                ],
                ticketsAqua: [
                    {
                        title:"Взрослый билет",
                        sum: "120₽",
                        price: 120,
                    },
                    {
                        title:"Детский билет",
                        sum: "60₽",
                        price: 60,
                    },
                ],
                ticketsGeneral: [
                    {
                        title:"Взрослый билет",
                        sum: "350₽",
                        price: 350,
                    },
                    {
                        title:"Детский билет",
                        sum: "170₽",
                        price: 170,
                    },
                ],
            }
        },
        methods: {
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        },
      }
</script>

<style scoped>
.ticket-page__container {
  padding: 40px;
}
.ticket-title {
  margin: 0;
}
.ticket-description {
  font-weight: normal;
  color: #a4a4a3;
}
.indent-top {
  margin-top: 50px;
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
  margin: 40px 40px 15px 40px;
}
</style>