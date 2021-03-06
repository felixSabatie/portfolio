import Vue from 'vue'
import App from './App.vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEnvelope, faCode, faLink } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faAngular, faVuejs, faNode, faLaravel, faDocker, faYoutube, faReact, faAndroid, faApple, faGitlab} from '@fortawesome/free-brands-svg-icons'
import { faGem } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueI18n from 'vue-i18n'
import messages from './lang'

// Fontawesome
library.add(faEnvelope, faLinkedin, faGithub, faCode, faAngular, faVuejs, faNode, faLaravel,
  faDocker, faLink, faYoutube, faReact, faAndroid, faApple, faGem, faGitlab)
Vue.component('font-awesome-icon', FontAwesomeIcon)

// I18n
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'fr',
  fallbackLocale: 'en',
  messages,
})


Vue.config.productionTip = false

new Vue({
  i18n,
  render: h => h(App),
}).$mount('#app')
