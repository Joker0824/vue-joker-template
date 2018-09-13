import Vue from 'vue'
import App from './App'
import router from '@/config/routes'
import { sync } from 'vuex-router-sync'
import { createStore } from '@/store'
import VueI18n from 'vue-i18n'
import messages from '@/config/i18n'
import ProgressBar from '@/components/ProgressBar.vue'

/* 导入plugins实现全局的directives,mixins,全局方法 */
import plugins from '@/plugins'

/* 弹窗组件 */
import VModal from 'vue-js-modal'

/* 使用animate动画库 */
import 'animate.css'

/* 引入element-ui */
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

/* 引入全局样式 */
import '@/common/stylus/index.styl'

/* --------------使用插件-------------- */
Vue.use(VueI18n)
Vue.use(plugins)
Vue.use(VModal, { dynamic: true, injectModalsContainer: true })
Vue.use(ElementUI)

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
