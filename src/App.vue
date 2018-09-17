<template>
  <div id="app">
    <router-view/>
    <common-bar></common-bar>
    <CommonBar></CommonBar>
  </div>
</template>

<script>
export default {
  name: 'app'
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
</style>
