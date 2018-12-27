import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueI18n from 'vue-i18n'
import messages from './lang'

// Fontawesome
library.add(faCoffee)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// I18n
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'en',
  messages,
})


Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
