<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Lh></Lh>
  </div>
</template>

<script>
import Lh from './components/Lh.vue'

export default {
  name: 'App',
  components: {
    Lh
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
