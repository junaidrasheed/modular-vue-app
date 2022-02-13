import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router/index'
import './main.css'
import './assets/tailwind.css'

import firstModule from './modules/first_module'
import secondModule from './modules/second_module'
import { registerModules } from "./register-modules"


Vue.config.productionTip = false

registerModules({
  first: firstModule,
  second: secondModule
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
