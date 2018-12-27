import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import VueI18n from 'vue-i18n'

library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(VueI18n)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
