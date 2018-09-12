<template>
  <div id="app">
    <router-link :to="{ name: 'demo', params: { user: 'joker' }}">ddd</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  methods: {}
}
</script>
<style >
#app {
  font-family: 'Fira Code', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.box {
  width: 1rem;
  height: 1rem;
}
</style>
