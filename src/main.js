import Vue from 'vue'
import App from './App'
import router from '@/config/routes'
import { sync } from 'vuex-router-sync'
import { createStore } from '@/store'
import VueI18n from 'vue-i18n'
import messages from '@/config/i18n'
import ProgressBar from '@/components/ProgressBar.vue'
import plugins from '@/plugins'
import VModal from 'vue-js-modal'
import ZkTable from 'vue-table-with-tree-grid'
import 'animate.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/common/stylus/index.styl'
/* --------------使用插件-------------- */
Vue.use(VueI18n)
Vue.use(plugins)
Vue.use(VModal, { dynamic: true, injectModalsContainer: true })
Vue.use(ZkTable)
Vue.use(ElementUI)
/* --------------使用插件-------------- */
const store = createStore()
sync(store, router)
const i18n = new VueI18n({
  locale: 'zh',
  messages
})
const bar = Vue.prototype.$bar = new Vue(ProgressBar).$mount()
document.body.appendChild(bar.$el)

Vue.config.productionTip = false
Vue.config.devtools = true
Vue.config.debug = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  i18n,
  router,
  template: '<App/>',
  components: { App }
})
