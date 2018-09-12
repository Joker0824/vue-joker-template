<template>
  <div class="element-index">
    {{this.$route.params.user}}
    <ul>
      <li v-for="(item, index) in list" :key="item.id">
        {{item.name}}
      </li>
    </ul>
    <button @click="update">update</button>
    <demo></demo>
    <test></test>
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
  name: 'element-index',
  components: {
    // 按需加载组件
    demo: () => import('@/pages/test/element/demo'),
    test: () => import('@/pages/test/element/test')
  },
  props: ['PascalCase(驼峰式)'],
  data () {
    return {
      list: [
        { id: 1, name: 'joker' },
        { id: 2, name: 'pc' },
        { id: 3, name: 'zhansan' },
        { id: 4, name: 'lisi' }
      ]
    }
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
    update () {
      this.list = []
    }
  },
  created () {
    // console.log('element-index created')
  },
  mounted () {
    // console.log('element-index mounted')
  },
  updated () {
    // console.log('element-index updated')
  },
  beforeRouteUpdate (to, from, next) {
    // console.log('element-index beforeRouteUpdate')
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    next()
  },
  destroyed () {
    // console.log('element-index destroyed')
  },
  watch: {}
}
</script>
<style lang="stylus" scoped>
// 导入stylus css工具函数
// @import '../../common/stylus/mixin'
.element
  line-height 1
</style>