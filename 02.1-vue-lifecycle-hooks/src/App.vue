<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <LifeCycleHooks></LifeCycleHooks>
  </div>
</template>

<script>
import LifeCycleHooks from './components/LifeCycleHooks.vue'

export default {
  name: 'App',
  components: {
    LifeCycleHooks
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
