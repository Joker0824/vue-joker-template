<template>
  <div class="base-star">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <slot name="item" :item="item"></slot>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'BaseStar',
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
.base-star {
  width: 300px;
}
.base-star ul li {
  color: red;
}
</style>