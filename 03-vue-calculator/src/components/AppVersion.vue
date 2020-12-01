<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <!-- eslint-disable-next-line -->
    <h2 class="app-version-text">AppVersion {{ version }}, VueVersion {{ $store.getters.vueVersion }}</h2>
  </div>
</template>
<script>
export default {
  name: "AppVersion",
  props: {
    msg: String
  },
  data() {
    return {
      // vueVersion
      // process.env.VUE_APP_VERSION = require('./package.json').version,
      version: process.env.VUE_APP_VERSION,
      title: process.env.VUE_APP_TITLE
    };
  },
   
  computed: {
    appVersion () {
      return this.$store.getters.appVersion;
    } 
    // other computed values here
  },
  mounted () {
    console.info('App version ' + this.$store.getters.appVersion)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-version-text{
  font-size: 22px;
}
</style>
