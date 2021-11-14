<template>
  <div id="app">
    <router-view name="header"></router-view>
    <router-view name="menu"></router-view>
    <div id="app-content">
      <transition name="app-router-fade" mode="out-in">
        <router-view :key="defaultViewKey"></router-view>
      </transition>
    </div>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>

export default {
    name: 'App',
    computed: {
        defaultViewKey: function() {
            return this.$route.name;
        }
    }
}
</script>

<style>
    html, body {
      height: 100%;
    }
    body {
      margin: initial;
      font-family: Roboto;
      font-size: 3vw;
      font-weight: normal;
    }
    #app {
      display: flex;
      flex-direction: column;
      min-height: 100%;
      background-color: white;
    }
    @font-face {
      font-family: Roboto;
      src: url('./assets/Roboto-Bold.ttf');
      font-weight: bold;
    }
    @font-face {
      font-family: Roboto;
      src: url('./assets/Roboto-Regular.ttf');
      font-weight: normal;
    }
    #app-content {
      flex: 1 0 auto;
      max-width: 768px;
      align-self: center;
      width: -webkit-fill-available;
    }
</style>
