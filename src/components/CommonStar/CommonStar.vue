<template>
  <div class="common-star">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <slot name="item" :item="item"></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'CommonStar',
  props: [],
  data () {
    return {
      items: [
        '张三',
        'Kariane',
        'Pasquale',
        'Felicity',
        'Clovis',
        'Eino',
        'Myriam',
        'Bryon',
        'Davin'
      ]
    }
  },
  methods: {},
  computed: {},
  created () {},
  mounted () {},
  components: {}
}
</script>
<style scoped>
.common-star {
  width: 300px;
}
.common-star ul li {
  color: red;
}
</style>