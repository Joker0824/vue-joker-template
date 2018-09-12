<template>
  <div class="demo">
    <button @click="postData">postData</button>
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
  name: 'element-demo',
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
  methods: {
    // 映射Vuex里面的 Actions
    // ...mapActions(['']),
    // 映射Vuex里面的 Mutations
    // ...mapMutations(['']),
    postData () {
      this.$eventbus.emit('demo-click', Math.random(100))
    }
  },
  created () {
    console.log('element-demoComponent created')
  },
  mounted () {
    console.log('element-demoComponent mounted')
  },
  updated () {
    console.log('element-demoComponent updated')
  },
  beforeRouteUpdate (to, from, next) {
    console.log('element-demoComponent beforeRouteUpdate')
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  },
  destroyed () {
    console.log('element-demoComponent destroyed')
  },
  watch: {}
}
</script>
<style lang="stylus" scoped>
// 导入stylus css工具函数
// @import '../../common/stylus/mixin'
.demo
  line-height 1
</style>