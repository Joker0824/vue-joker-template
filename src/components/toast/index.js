import vue from 'vue'
import toastComponent from './toast'

// 使用vue的extend，以vue文件为基础组件，返回一个可以创建vue组件的特殊构造函数
const ToastConstructor = vue.extend(toastComponent)

function showToast (text, duration = 2000) {
  const toastDom = new ToastConstructor({
    el: document.createElement('div'),
    data () {
      return {
        text: text,
        show: true
      }
    }
  })
    // 在body中动态创建一个div元素，后面自动会把它替换成整个vue文件内的内容
  document.body.appendChild(toastDom.$el)
  setTimeout(() => { toastDom.show = false }, duration)
}

function registryToast () {
    // 把showToast这个方法添加到uve的原型中，可以直接调用，当调用的时候就是执行函数内的内容
  vue.prototype.$toast = showToast
}

// 用这个方法注册组件，所有vue页面都可以使用，不用再import
// 定义全局组件生成的有2个种方法，一种myPlugin={install(){...}},一种function myPlugin(){....}
// vue.use方法内部，会判断toastRegistry，如果是函数就直接执行，如果是object则执行它的install对象
// 因为导出的toastRegistry是一个函数，所以也可以直接执行toastRegistry()而不使用Vue.use进行组件注册

export default registryToast
