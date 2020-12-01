<template>
  <div id="app">
    <img class="app-logo" alt="Vue logo" src="./assets/logo.png" />
    <AppVersion />
    <Calculator />
  </div>
</template>

<script>
import AppVersion from "./components/AppVersion.vue";
import Calculator from "./components/Calculator.vue";

export default {
  name: "App",
  components: {
    Calculator,
    AppVersion
  }
};
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
.app-logo {
  width: 72px;
}
</style>
