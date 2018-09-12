<template>
  <div class="element-test">
    <button @click="force">force</button>
  </div>
</template>
<script>
// 导入创建Vuex模块的函数
// import { createNamespacedHelpers } from 'vuex'
// 从Vuex导入映射函数
// const { mapState, mapActions, mapGetters ,mapMutations } = createNamespacedHelpers('vuex对应的模块名')
// 导入需要的通用的工具函数
// import { say } from '@/common/utils'
export default {
  name: 'element-test',
  components: {
    // 按需加载组件
    // demo: () => import('@/components/')
  },
  props: ['PascalCase(驼峰式)'],
  data () {
    return {}
  },
  computed: {
    // 映射Vuex里面的 State
    // ...mapState(['']),
    // 映射Vuex里面的 getters
    // ...mapGetters(['']),
  },
  watch: {},
  methods: {
    // 映射Vuex里面的 Actions
    // ...mapActions(['']),
    // 映射Vuex里面的 Mutations
    // ...mapMutations(['']),
    force () {
      this.$forceUpdate()
    }
  },
  created () {
    // console.log('element-test-组件-created')
  },
  mounted () {
    // console.log('element-test-组件-mounted')
    // eventbus接收别的组件传过来的值
    this.$eventbus.on('otherComponent-click', data => {
      // console.log('监听eventbus-otherComponent-click...')
      // console.log(data)
    })
  },
  // 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作
  updated () {
    // console.log('element-test-组件-updated')
    // 等到所有的子组件都被重绘
    this.$nextTick(function () {})
  },
  beforeRouteUpdate (to, from, next) {
    // console.log('element-test-组件-beforeRouteUpdate')
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  },
  destroyed () {
    // console.log('element-test-组件-destroyed')
  },
  // keep-alive 组件激活时调用
  activated () {
    // console.log('element-test-组件-activated')
  },
  // keep-alive 组件停用时调用。
  deactivated () {
    // console.log('element-test-组件-deactivated')
  }
}
</script>
<style lang="stylus" scoped>
// 导入stylus css工具函数
// @import '../../common/stylus/mixin'
.element-test
  line-height 1
</style>