import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { nanoid } from 'nanoid'

import './plugs/element'



Vue.config.productionTip = false;
Vue.prototype.$axios = axios;
Vue.prototype.$nanoid = nanoid;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
