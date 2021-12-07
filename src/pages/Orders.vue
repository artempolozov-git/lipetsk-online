<template>
  <div class="orders-page__container">
    <h2 class="title-orders">Мои заказы</h2>
    <div class="select-state__wrapper">
      <tabs>
        <tab name="Активные">
          <active-orders v-for="(item, active) in activeOrder"
                         :key="active"
                         :title="item.title"
                         :image="item.image"
                         :number="item.number"
                         :date="item.date"
                         :named="item.named"
                         :validity="item.validity"
                         :info="item.info"
                         :amount="item.amount"></active-orders>
        </tab>
        <tab name="История">
          <history-orders v-for="(item, history) in historyOrder"
                          :key="history"
                          :title="item.title"
                          :image="item.image"
                          :number="item.number"
                          :date="item.date"
                          :named="item.named"
                          :validity="item.validity"
                          :info="item.info"
                          :amount="item.amount"></history-orders>
        </tab>
      </tabs>
    </div>
  </div>
</template>

<script>
    import ActiveOrders from "@/components/ActiveOrders";
    import HistoryOrders from "@/components/HistoryOrders";
    export default {
        name: "Orders",
        components: {
            HistoryOrders,
            ActiveOrders
        },
        data () {
            return {
              activeOrder: [
                {
                  title: "Липецкий зоопарк",
                  number: 420,
                  date: "05.11.2021",
                  named: "Билет в зоопарк",
                  validity: "срок действия до 04.12.2021",
                  info: "Взрослый билет:",
                  amount: 1,
                  image: require('../assets/icons/dropdown-arrow.svg'),
                },
              ],
              historyOrder: [
                  {
                    title: "Липецкий зоопарк",
                    number: 420,
                    date: "05.11.2021",
                    named: "Билет в зоопарк",
                    validity: "срок действия до 04.12.2021",
                    info: "Взрослый билет:",
                    amount: 1,
                    image: require('../assets/icons/dropdown-arrow.svg'),
                  }
              ],
            }
        },
    }
</script>

<style>
.orders-page__container {
  padding: 40px 30px;
  box-sizing: border-box;
}
.title-orders {
  text-align: center;
  font-weight: bold;
  font-size: 5vw;
  margin-bottom: 20px;
}

.tabs-component {
  margin-top: 30px;
}
.tabs-component-tabs {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-column-gap: 20px;
  padding: 0;
}
.tabs-component-tab {
  color: #7a7a79;
  list-style: none;
}
.tabs-component-tab.is-active {
  color: #ffffff;
  background-color: #00b1d6;
  border-radius: 50px;
  -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  -webkit-tap-highlight-color: transparent;
}
.tabs-component-tab-a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  border: 2px solid #00B1D6;
  border-radius: 50px;
  padding: 10px;
  box-sizing: border-box;
  text-decoration: none;
}
@media only screen and (max-width : 400px) {
  .tabs-component-tabs {
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: 20px;
  }
}
</style>