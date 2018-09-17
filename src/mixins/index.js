const Mixins = {
  mounted () {
    if (this.$bar) this.$bar.start()
  },
  methods: {
    // $_mixin名称_方法名
    $_myGreatMixin_update: function () {
      // ...
    }
  }
}

export default Mixins
