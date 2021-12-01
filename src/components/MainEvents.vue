<template>
  <section class="home__main__container">
    <div class="events__container">
      <events-content v-for="(event, eventsContent) in events" :key="eventsContent"
                      :info="event.info"
                      :title="event.title"
                      :time="event.time"
                      :price="event.price"
                      :discount="event.discount"
                      :image="event.image"
                      :background="event.background"
                      :id="event.id">
      </events-content>
    </div>
  </section>
</template>

<script>
    import EventsContent from "@/components/EventsContent";
    export default {
        name: "MainEvents",
        components: {EventsContent},
        data () {
          return {
            events: [
                {
                    info:"скоро",
                    title: "Футбол",
                    time: "Время: 16:00",
                    image: require('../assets/icons/more-button.svg'),
                    background: require('../assets/images/sport.jpg'),
                },
                {
                    info:"скоро",
                    title: "Мастер-класс",
                    time: "Время: 10:00",
                    price: "Стоимость: 300₽",
                    discount: "Скидка: 10%",
                    image: require('../assets/icons/more-button.svg'),
                    background: require('../assets/images/masterclass.png'),
                },
                {
                    info:"Липецк",
                    title: "Импровизация",
                    time: "Время: 19:00",
                    image: require('../assets/icons/more-button.svg'),
                    background: require('../assets/images/improvisation.jpg'),
                },
                {
                    info:"Липецк",
                    title: "Бассейн",
                    time: "Время: 08:00",
                    price: "Стоимость: 500₽",
                    discount: "Скидка: 5%",
                    image: require('../assets/icons/more-button.svg'),
                    background: require('../assets/images/pool.jpg'),
                    id: 'pool',
                },
                {
                    info:"Липецк",
                    title: "Липецкий зоопарк",
                    time: "Время: 11:00",
                    price: "Стоимость: 250₽",
                    image: require('../assets/icons/more-button.svg'),
                    background: require('../assets/images/zoo.jpg'),
                    id: 'zoo',
                },
            ]
          }
        },
    }
</script>

<style scoped>
.home__main__container {
  padding: 20px 20px 60px;
  box-sizing: border-box;
}
.events__container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  grid-gap: 20px;
}
@media only screen and (max-width : 400px) {
  .events__container {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>