<template>
    <div class="price__container">
      <div class="title-price__wrapper">
        <div class="price__block">
          <div class="price-title">{{title}}</div>
          <div class="price-sum">{{sum}}</div>
        </div>
        <div class="popper-price" :style="{display: styleBlock}">
          <img :src="image" ref="anchorEl" @click="showPopper">
          <Popper placement="bottom" :is-open="show" :anchor-el="$refs.anchorEl" :on-close="hidePopper" :has-arrow="true">
            <aside id="popper-content">
              Категории граждан, которые имеют право входа по льготному
              билету и документы, необходимые для подтверждения статуса:
              <br>• Инвалиды 3 группы (по справке МСЭ и паспорту);
              <br>• Пенсионеры (пенсионное удостоверение);
              <br>• Школьники с 12-и лет и студенты (дневное отделение,
              по студенческим билетам);
              <br>• Участники ликвидации аварии на Чернобыльской АЭС
              (по удостоверению ликвидатора);
              <br>• Ветераны боевых действий Афганистана и Чечни (по удостоверению).
              <br>Категории граждан, которые имеют право бесплатного входа
              и документы, необходимые для подтверждения статуса:
              <br>• Герои Советского Союза (по удостоверению);
              <br>• Герои РФ и полные кавалеры Ордена Славы (по удостоверению);
              <br>• Участники и инвалиды ВОВ (по удостоверению о праве на льготы);
              <br>• Инвалиды 1 или 2 групп (РАЗ В МЕСЯЦ по справке МСЭ и паспорту);
              <br>• Сопровождающий, без помощи которого, инвалид 1 или 2 группы
              не может самостоятельно передвигаться;
              <br>• Дети до 3-х лет;
              <br>• Детские дома и интернаты (с сопроводительным письмом);
              <br>• Многодетные семьи (паспорта родителей, справка
              или удостоверения о праве на льготы): дети из многодетных
              семей в возрасте
              до 16 лет имеют право в любой день один раз в месяц
              (при предъявлении удостоверения).
              Льготное посещение осуществляется семьями
              с тремя и более детьми в сопровождении одного родителя.
            </aside>
          </Popper>
        </div>
      </div>
      <div class="counter__container">
        <button class="counter-button" @click="decrement">-</button>
        <div class="counter">{{count}}</div>
        <button class="counter-button" @click="increment">+</button>
      </div>
    </div>
</template>

<script>
    import { Popper } from 'popper-vue'
    import 'popper-vue/dist/popper-vue.css'
    export default {
        name: "ZooPrice",
        components: {
            Popper
        },
        data() {
            return {
                count: 0,
                show: false,
            }
        },
        props: {
            title: String,
            sum: String,
            price: Number,
            image: String,
            styleBlock: String,
        },
        methods: {
            decrement () {
                if (this.count === 0) return;
                this.count -= 1
            },
            increment () {
                this.count += 1
            },
            showPopper () {
                this.show = !this.show
            },
            hidePopper () {
                this.show = false
            },
        }
    }
</script>

<style scoped>
.price__container {
  display: flex;
  align-items: center;
  padding: 30px 0;
  border-bottom: 1px solid #a4a4a3;
}
.title-price__wrapper {
  display: flex;
  align-items: center;
  font-size: 4vw;
}
.price-sum {
  color: #00b1d6;
}
.counter__container {
  display: flex;
  align-items: center;
  margin-left: auto;
}
.counter {
  margin: 0 15px;
  font-size: 5vw;
}
.counter-button {
  border: none;
  outline: none;
  background: transparent;
  color: #00b1d6;
  font-size: 6vw;
}
.popper-price {
  display: none;
  width: 5vw;
  margin-left: 15px;
}
.popper-vue {
  background-color: #ffffff;
  box-shadow: 0px 0px 13px 2px rgba(157, 157, 157, 0.2);
  font-size: 3vw;
  padding: 25px;
  box-sizing: border-box;
  width: 90%;
  border-radius: 10px;
}
</style>