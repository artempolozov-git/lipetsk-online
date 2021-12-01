<template>
  <section class="menu__main__container">
    <div class="menu-icon"><img src="@/assets/icons/settings.svg"></div>
    <div class="menu__wrapper">
      <div class="menu-icon"><img src="@/assets/icons/search.svg"></div>
      <div class="menu-icon indent"><img src="@/assets/icons/menu.svg"></div>
    </div>
  </section>
</template>

<script>
    export default {
        name: "Menu"
    }
</script>

<style scoped>
@media only screen and (max-width : 768px) {
  .menu__main__container {
    display: flex;
    align-items: center;
    padding: 0 20px;
    position: relative;
    bottom: 30px;
  }
  .menu-icon > img {
    width: 5vw;
  }
  .menu__wrapper {
    display: flex;
    align-items: center;
    margin-left: auto;
  }
  .indent > img {
    margin-left: 20px;
  }
}
@media only screen and (max-width : 400px) {
  .menu__main__container {
    bottom: 15px;
  }
}
</style>