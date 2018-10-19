<template>
	<div class="test-index">
		<BaseTableTree
			v-bind.sync="obj"
			v-model="text"
			:table-data="tableData"
			:caption-style="captionStyle"
			@cell-click="cellClick"
			@cell-edit="cellEdit"
			:columns="columns"
			checkbox
			border=""
		></BaseTableTree>
		{{todos}} {{doneTodosCount}} {{getTodoById(2)}}{{msg}}{{data}}
		<router-view></router-view>
	</div>
</template>
<script>
/* 从Vuex导入根State,Mutations,actions,getters的映射函数 */
import { createNamespacedHelpers, mapState } from 'vuex'
/* 导入需要的通用的工具函数 */
// import utils from '@/common/utils'
// const walk = utils.base.walk
/* 从Vuex导入test模块映射函数 */
const {
  mapState: mapTestState,
  mapGetters: mapTestGetters,
  mapMutations: mapTestMutations,
  mapActions: mapTestActions
} = createNamespacedHelpers('test')

/* 从Vuex导入test子模块testA模块的映射函数 */
const { mapState: mapTestAState } = createNamespacedHelpers('test/testA')
export default {
  name: 'TestIndex',
  components: {
    /* 按需加载组件 */
    // demo: () => import('@/components/')
  },
  props: {
    /*  <WelcomeMessage greetingText="hi"/> */
    //   'greeting-text': {
    //     type: String,
    //     required: true
    //  }
  },
  data () {
    return {
      tableData: {
        title: '我是表格的标题',
        data: [
          { id: '01', name: 'joker', age: 20147, weight: 140, height: 178 },
          { id: '02', name: 'Elias', age: 60776, weight: 140, height: 178 },
          { id: '03', name: 'Ansel', age: 21726, weight: 140, height: 178 },
          { id: '04', name: 'Quentin', age: 61217, weight: 140, height: 178 },
          { id: '05', name: 'Jocelyn', age: 46370, weight: 140, height: 178 }
        ]
      },
      columns: ['id', '姓名', '年龄', '体重', '身高'],
      captionStyle: {
        height: '40px',
        lineHeight: '40px'
      },
      post: {
        id: 1,
        title: 'My Journey with Vue'
      },
      text: 'i am text',
      obj: {
        name: 'joker',
        age: 18,
        hobby: ['swimming', 'loving']
      }
    }
  },
  computed: {
    /*  映射Vuex里面的 根State */
    ...mapState(['msg']),
    /*  映射Vuex里面的 test模块的State */
    ...mapTestState(['count', 'todos']),
    /*  映射Vuex里面的 getters */
    ...mapTestGetters(['doneTodosCount', 'getTodoById']),
    ...mapTestAState(['data'])
  },
  watch: {},
  methods: {
    /*  映射Vuex里面的 Actions */
    ...mapTestActions(['incrementA']),
    /*  映射Vuex里面的 Mutations */
    ...mapTestMutations(['increment']),
    cellClick (row, rowIndex, $event) {
      // console.log(rowIndex)
      // console.log(row)
      // console.log($event)
    },
    cellEdit (row, rowIndex, $event) {
      // console.log(rowIndex)
      // console.log(row)
      // console.log($event)
    }
  },
  created () {
    // console.log('TestIndex-组件-created')
    // this.incrementA({ amount: 100 })
    // console.log(this.$store.getters['demo/precode'])
    // walk()
  },
  mounted () {
    // console.log('TestIndex-组件-mounted')
    /*  eventbus接收别的组件传过来的值 */
    this.$eventbus.on('otherComponent-click', data => {
      console.log('监听eventbus-otherComponent-click...')
      console.log(data)
    })
  },
  /* 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作 */
  updated () {
    // console.log('TestIndex-组件-updated')
    /* 等到所有的子组件都被重绘 */
    this.$nextTick(function () {})
  },
  destroyed () {
    // console.log('TestIndex-组件-destroyed')
  },
  /* keep-alive 组件激活时调用 */
  activated () {
    // console.log('TestIndex-组件-activated')
  },
  /* keep-alive 组件停用时调用。 */
  deactivated () {
    // console.log('TestIndex-组件-deactivated')
  },
  /* 在导航完成前获取数据 */
  beforeRouteEnter (to, from, next) {
    // console.log('TestIndex-组件-beforeRouteEnter')
    // ...
    next(vm => {})
  },
  beforeRouteUpdate (to, from, next) {
    // console.log('TestIndex-组件-beforeRouteUpdate')
    /* 在当前路由改变，但是该组件被复用时调用 */
    /*  举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候， */
    /*  由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。 */
    /* 可以访问组件实例 `this` */
    next()
  }
}
</script>
<style lang="stylus" scoped>
/* 导入stylus css工具函数 */
.test-index
	line-height 1
</style>
