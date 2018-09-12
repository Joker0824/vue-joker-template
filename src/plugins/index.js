// 引入全局实例方法
import eventbus from '@/store/eventbus'
import { apistore } from '@/config/api/api.store'

// 引入自定义filter
import filters from '@/filters'

// 引入mixins
import mixins from '@/mixins'

// 引入自定义的指令
import directives from '@/directives'

// 引入全局组件
import components from '@/components'

export default {
  install (Vue, options) {
    // 全局实例方法
    Vue.prototype.$api = apistore
    Vue.prototype.$eventbus = eventbus

    // 全局注册组件
    Object.keys(components).forEach(key => {
      Vue.component(key, components[key])
    })

    // 全局注册filter
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })

    // 全局注册mixins
    Vue.mixin(mixins)

    // 全局注册directives
    Object.keys(directives).forEach(key => {
      console.log(directives[key])
      Vue.directive(key, directives[key])
    })
  }
}
