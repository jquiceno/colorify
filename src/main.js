import Vue from 'vue'
import App from './App.vue'
import Fragment from 'vue-fragment'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faClipboard, faCalendar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.use(Fragment.Plugin)
Vue.config.productionTip = false

library.add([faClipboard, faChevronLeft, faChevronRight, faCalendar])

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
