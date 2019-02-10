<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Skills/>
  </div>
</template>

<script>
import Skills from "./components/Skills.vue";

export default {
  name: "app",
  components: {
    Skills
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat:400,700");

body {
  background-color: #eeeeee;
  font-family: "Montserrat", sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  align-items: center;
}
body,
html {
  margin: 0;
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 50%;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
