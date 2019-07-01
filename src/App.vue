<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0 !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  text-align: center;
  color: #2c3e50;
}
ul,li {
  list-style:none;
  margin: 0;
  padding: 0;
}
</style>
