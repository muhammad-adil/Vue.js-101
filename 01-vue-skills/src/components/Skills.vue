<template>
  <div class="hello">
    {{ name }}
    <br>
    {{ btnState ? 'The button is disabled' : 'The button is Active'}}
    <br>
    <button v-on:click="changeName" v-bind:disabled="btnState">Disabled button</button>

    <div class="holder">
      <ul>
        <li v-for="(data, index) in skills" :key="index">{{ index }}. {{ data.skill }}</li>
      </ul>
      <p v-if="skills.length >= 1">You have more than 1 skills</p>
      <p v-else>You have less than or equal to 1 skill</p>
    </div>
    <div v-bind:class="{ alert: showAlert }">Alert</div>
    <div v-bind:class="{ alert: !showAlert }">Not Alert</div>
    <div v-bind:class="{ alert: showAlert, 'another-class': showClass }">Alert with Border</div>
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      name: "I am new to vue",
      btnState: true,
      skills: [
        { skill: "Vue.js" },
        { skill: "JavaScript" },
        { skill: "Angular" }
      ],
      showAlert: true,
      showClass: true
    };
  }
  // props: {
  //   msg: String
  // }
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
.alert {
  background-color: crimson;
  width: 100%;
  height: auto;
}
.another-class {
  border: 5px solid #505050;
}
</style>
