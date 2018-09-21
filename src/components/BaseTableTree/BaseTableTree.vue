<template>
  <div class="base-table-tree" :style="tableWrapStyle">
    <table>
      <caption v-text="tableData.title" :style="captionStyle"></caption>
      <thead>
        <tr>
          <th v-for="column in columns" :class="{'border':border}" :key="column.id" v-html="column">
          </th>
        </tr>
      </thead>
      <tbody>
        <tr :style="rowStyle" v-for="(row, rowIndex) in tData.data" :key="row.id">
          <td v-for="(tdValue, key,columnIndex) in row" :key="columnIndex" :class="{'border':border}" @click="changeEdit(columnIndex,$event)">
            <input type="text" readonly v-model="tData.data[rowIndex][key]" @keydown.enter="blurHandler($event)" @blur="blurHandler($event)">
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
/* 导入创建Vuex模块的函数 */
// import { createNamespacedHelpers } from 'vuex'
/* 从Vuex导入映射函数 */
// const { mapState, mapActions, mapGetters ,mapMutations } = createNamespacedHelpers('vuex对应的模块名')
/* 导入需要的通用的工具函数 */
// import { say } from '@/common/utils'
export default {
  name: 'BaseTableTree',
  components: {
    /* 按需加载组件 */
    // demo: () => import('@/pages/')
  },
  props: {
    /*  <WelcomeMessage greeting-text="hi"/> */
    /* 表格数据 */
    tableData: {
      type: Object,
      required: true
    },
    /* 表格宽度 */
    tableWidth: {
      type: Number
    },
    /* td高度 */
    tdHeight: {
      type: Number
    },
    /* 标题style */
    captionStyle: {
      type: Object
    },
    /* 列数据 */
    columns: {
      type: Array
    },
    /* 是否启用checkbox */
    checkbox: {
      type: Boolean,
      default: false
    },
    /* 是否启用边框 */
    border: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {}
  },
  computed: {
    /*  映射Vuex里面的 State */
    // ...mapState(['']),
    /*  映射Vuex里面的 getters */
    // ...mapGetters(['']),
    tableWrapStyle () {
      return {
        width: this.tableWidth + 'px',
        margin: '50px auto'
      }
    },
    rowStyle () {
      let obj = {}
      if (this.tdHeight) {
        obj.height = this.tdHeight + 'px'
      }
      return obj
    },
    /* 深拷贝props里的object 防止污染父组件 */
    tData () {
      return Object.assign({}, this.tableData)
    }
  },
  watch: {},
  methods: {
    /*  映射Vuex里面的 Actions */
    // ...mapActions(['']),
    /*  映射Vuex里面的 Mutations */
    // ...mapMutations(['']),
    /* 点击单元格触发 */
    cellClick (row, rowIndex, $event) {
      // this.$emit('cell-click', row, rowIndex, $event)
    },
    inputDblclick (row, rowIndex, $event) {
      console.log(row, rowIndex, $event)

      // this.$emit('cell-dblclick', row, rowIndex, $event)
    },
    /* 单元格编辑 */
    changeEdit (columnIndex, event) {
      if (columnIndex === 0) {
        return
      }
      let target = event.target
      target.removeAttribute('readonly')
      console.log(target)
      console.log(columnIndex)
    },
    blurHandler (event) {
      let target = event.target
      target.setAttribute('readonly', true)
    }
  },
  created () {
    // console.log('BaseTableTree-组件-created')
    console.log(this.checkbox)
  },
  mounted () {
    // console.log('BaseTableTree-组件-mounted')
    /*  eventbus接收别的组件传过来的值 */
    this.$eventbus.on('otherComponent-click', data => {
      // console.log('监听eventbus-otherComponent-click...')
      // console.log(data)
    })
  },
  /* 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作 */
  updated () {
    // console.log('BaseTableTree-组件-updated')
    /* 等到所有的子组件都被重绘 */
    this.$nextTick(function () {})
  },
  destroyed () {
    // console.log('BaseTableTree-组件-destroyed')
  },
  /* keep-alive 组件激活时调用 */
  activated () {
    // console.log('BaseTableTree-组件-activated')
  },
  /* keep-alive 组件停用时调用。 */
  deactivated () {
    // console.log('BaseTableTree-组件-deactivated')
  },
  /* 在导航完成前获取数据 */
  beforeRouteEnter (to, from, next) {
    // console.log('BaseTableTree-组件-beforeRouteEnter')
    // ...
    next(vm => {})
  },
  beforeRouteUpdate (to, from, next) {
    // console.log('BaseTableTree-组件-beforeRouteUpdate')
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
.base-table-tree
  line-height 1

  table
    width 100%

    caption
      border 1px solid #2F8DFE
      border-bottom none

    tr
      th, td
        min-width 150px
        font-weight normal
        font-size 20px
        line-height 40px

        &.border
          border 1px solid #2F8DFE

        input
          width 100%
          border none
          text-align center
          line-height 40px
</style>