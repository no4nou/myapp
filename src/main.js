import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from './config/setting'
import loader from 'vue-ui-preloader'

Vue.config.productionTip = false
Vue.use(initializeApp(firebaseConfig))
Vue.use(loader)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
