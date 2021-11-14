<template>
  <header class="header__main__container">
  </header>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
@media only screen and (max-width : 768px) {
  .header__main__container {
    width: 100%;
    height: 45vw;
    z-index: 2;
    position: sticky;
    top: 0;
    background: url(../assets/icons/header.svg);
    background-size: cover;
    background-position: center;
  }
}
</style>