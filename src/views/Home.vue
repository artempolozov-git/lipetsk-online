<template>
  <section class="home__main__container">
    <div class="background-image__block"></div>
    <div class="home__wrapper__content">
      <menu-slider></menu-slider>
      <main-events></main-events>
    </div>
  </section>
</template>

<script>
    import MenuSlider from "@/components/MenuSlider";
    import MainEvents from "@/components/MainEvents";
    export default {
        name: "Home",
        components: {MainEvents, MenuSlider}
    }
</script>

<style scoped>
.home__main__container {

}
.background-image__block {
  width: 100%;
  height: 54vw;
  background: url(../assets/icons/home-background.svg);
  background-size: cover;
  background-position: center;
}
.home__wrapper__content {
  height: auto;
  background-color: #00B1D6;
}
</style>