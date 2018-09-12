const Mixins = {
  mounted () {
    if (this.$bar) this.$bar.start()
    console.log(22)
  }
}

export default Mixins
