<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button v-on:click="test">Update</button>
  </div>
</template>

<script>
export default {
  name: 'LifeCycleHooks',
  // props: {
  //   msg: String
  // }
  data() {
    return {
      msg: "Lifecycle hooks"
    };
  },

  methods: {
    test() {
      console.log(this.msg, "this.msg");
      this.msg = "Everything in updated now";
    }
  },
  beforeCreate() {
    alert("brefore created fired");
  },

  created() {
    alert("created fired");
  },

  beforeMount() {
    alert("before mount fired");
  },

  mounted() {
    alert("mounted fired");
  },

  beforeUpdate() {
    alert("before upadte fired");
  },

  updated() {
    alert("updated fired");
  }
}
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
