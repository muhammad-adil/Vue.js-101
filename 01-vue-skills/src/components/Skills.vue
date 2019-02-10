<template>
  <div class="hello">
    <!-- {{ name }} -->
    <!-- {{ btnState ? 'The button is disabled' : 'The button is Active'}}
    <br>
    <button v-on:click="changeName" v-bind:disabled="btnState">Disabled button</button>-->
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input type="text" placeholder="Enter a skill you have..." v-model="skill">
        <input type="checkbox" id="checkbox" v-model="checked">
      </form>

      <ul>
        <li v-for="(data, index) in skills" :key="index">{{ index }}. {{ data.skill }}</li>
        <li>{{skill}}</li>
      </ul>

      <div class="pg__footer">
        <p>These are the skills that you posses.</p>
        <p v-if="skills.length >= 1">You have more than 1 skills</p>
        <p v-else>You have less than or equal to 1 skill</p>
      </div>
    </div>
    <!-- <div v-bind:class="{ alert: showAlert }">Alert</div>
    <div v-bind:class="{ alert: !showAlert }">Not Alert</div>
    <div v-bind:class="{ alert: showAlert, 'another-class': showClass }">Alert with Border</div>
    <br>
    <div v-bind:class="alertObject">Alert using Object</div>
    <br>
    <div
      v-bind:class="{ backgroundColor: bgColor, width: bgWidth, height: bgHeight }"
    >Alert using Object in component logic</div>-->
  </div>
</template>

<script>
export default {
  name: "Skills",
  data() {
    return {
      name: "I am new to vue",
      btnState: true,
      skill: "",
      checked: false,
      skills: [
        { skill: "Vue.js" },
        { skill: "JavaScript" },
        { skill: "Angular" }
      ],
      showAlert: true,
      showClass: true,
      alertObject: {
        alert: true
      },
      bgColor: "#eee",
      bgWidth: "100%",
      bgHeight: "36px"
    };
  },
  methods: {
    addSkill() {
      this.skills.push({ skill: this.skill });
      this.skill = "";
      console.log("this checkbox value is:" + this.checked);
    }
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
/* ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
.alert {
  background-color: crimson;
  width: 100%;
  height: auto;
}
.another-class {
  border: 5px solid #505050;
}

.holder {
  background: #fff;
}

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  padding: 20px;
  font-size: 1.3em;
  background-color: #e0edf4;
  border-left: 5px solid #3eb3f6;
  margin-bottom: 2px;
  color: #3e5252;
}

p {
  text-align: center;
  padding: 30px 0;
  color: gray;
}

.pg__footer p {
  padding: 5px;
}

.container {
  box-shadow: 0px 0px 40px lightgray;
}
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}
</style>
