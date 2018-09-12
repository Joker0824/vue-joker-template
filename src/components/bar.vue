<template>
  <div class="bar">
  </div>
</template>
<script>
export default {
  name: 'bar',
  props: [],
  data () {
    return {}
  },
  methods: {},
  computed: {},
  created () {
    this.$eventbus.on('bar', data => {
      console.log(data)
    })
  },
  mounted () {},
  components: {}
}
</script>
<style>
</style>