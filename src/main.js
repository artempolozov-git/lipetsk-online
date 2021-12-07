import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false;

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper);

import { Popper } from 'popper-vue'
import 'popper-vue/dist/popper-vue.css'
Vue.component('Popper', Popper);

import {Tabs, Tab} from 'vue-tabs-component';
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
