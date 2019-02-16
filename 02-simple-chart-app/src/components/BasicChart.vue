<template>
  <div id="app">
    <canvas id="planet-chart"></canvas>
    <p>{{ name }}</p>
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "../assets/chart-data.js";
// import barChartData from "../assets/chart-data.js";

export default {
  name: "BasicChart",
  props: {
    msg: String
  },
  data() {
    return {
      name,
      // barChartData: barChartData
      planetChartData: planetChartData
    };
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  mounted() {
    this.createChart("planet-chart", this.planetChartData);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
