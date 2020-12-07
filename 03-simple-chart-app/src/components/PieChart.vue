<template>
  <div class="container m-t-20 m-b-20">
    <h3>Chances of Life</h3>
    <canvas id="pie-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";
import pieChartData from "../assets/pieChart-data.js";

export default {
  name: "PieChart",
  props: {
    msg: String
  },
  data() {
    return {
      name,
      pieChartData: pieChartData
    };
  },
  methods: {
    createChart(chartId, chartData) {
      const ctx = document.getElementById(chartId);
      const myPieChart = new Chart(ctx, {
        type: chartData.type,
        data: chartData.data,
        options: chartData.options
      });
    }
  },
  mounted() {
    this.createChart("pie-chart", this.pieChartData);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
