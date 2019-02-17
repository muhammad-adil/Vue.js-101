<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <BasicChart msg="Welcome to My Basic Chart.js Vue App">
      <!-- <p>{{ name }}</p> -->
    </BasicChart>
    <br>
    <PieChart/>
  </div>
</template>

<script>
import BasicChart from "./components/BasicChart.vue";
import PieChart from "./components/PieChart.vue";

export default {
  name: "app",
  components: {
    BasicChart,
    PieChart
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
