import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import { nanoid } from 'nanoid'

import './plugs/element'



// 隐藏开发提示
Vue.config.productionTip = false;
// 挂载axios
Vue.prototype.$axios = axios;
// 挂载nanoid
Vue.prototype.$nanoid = nanoid;


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
