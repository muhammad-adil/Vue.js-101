<template>
  <div class="container">
    <h3>Number of Moons &amp; Investment on Planets</h3>
    <canvas id="planet-chart"></canvas>
    <!-- <p>{{ name }}</p> -->
  </div>
</template>

<script>
import Chart from "chart.js";
import planetChartData from "../assets/chart-data.js";

export default {
  name: "BasicChart",
  props: {
    msg: String
  },
  data() {
    return {
      name,
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
</style>
