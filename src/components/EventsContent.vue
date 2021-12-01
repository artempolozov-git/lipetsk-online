<template>
  <div class="content__block" @click="goToPage(id)">
    <div class="content-background" :style="inlineStyle"></div>
    <div class="content-filling">
      <div class="main__title__wrapper">
        <div class="title__block">
          <span class="additional-content">{{info}}</span>
          <h2 class="title-content">{{title}}</h2>
        </div>
        <div class="more-icon__button"><img :src="image"></div>
      </div>
      <div class="additional-info">{{time}}</div>
      <div class="additional-info">{{price}}</div>
      <div class="additional-info">{{discount}}</div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "EventsContent",
        props: {
          info: String,
          title: String,
          time: String,
          price: String,
          discount: String,
          background: String,
          image: String,
          id: String,
        },
        computed: {
            inlineStyle () {
                return {
                    backgroundImage: `url(${this.background})`
                }
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
  .content__block {
    border-radius: 30px;
    background-color: #ffffff;
    -webkit-box-shadow: 2px 2px 1px 0px rgba(0, 114, 185, 1);
    -moz-box-shadow: 2px 2px 1px 0px rgba(0, 114, 185, 1);
    box-shadow: 2px 2px 1px 0px rgba(0, 114, 185, 1);
  }
  .content-background {
    width: 100%;
    height: 160px;
    border-radius: 30px 30px 0 0;
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
</style>