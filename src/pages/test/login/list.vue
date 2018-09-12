<template>
  <div class="list">
    <ul class="reset">
      <li v-for="item in list" :key="item.nodeId" class="counter">
        <span class="nodeName">{{item.nodeName}}</span>
        <list v-if="item.children" :list="item.children"></list>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'list',
  props: ['list'],
  data () {
    return {}
  },
  methods: {},
  computed: {},
  created () {},
  mounted () {},
  components: {}
}
</script>
<style lang="stylus" scoped>
// css使用了stylus预处理器
.reset
  counter-reset counter

.counter:before
  color #000
  content counters(counter, '-') '. '
  counter-increment counter
</style>