import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import VueCompositionAPI from '@vue/composition-api'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  VueCompositionAPI,

  render: h => h(App)
}).$mount('#app')
