<template>
  <div class="hello">
    <!-- {{ name }} -->
    <!-- {{ btnState ? 'The button is disabled' : 'The button is Active'}}
    <br>
    <button v-on:click="changeName" v-bind:disabled="btnState">Disabled button</button>-->
    <div class="holder">
      <form @submit.prevent="addSkill">
        <input
          type="text"
          placeholder="Enter a skill you have..."
          v-model="skill"
          v-validate="'min:5'"
          name="skill"
        >
        <transition
          name="alert-in"
          enter-active-class="animated flipInX"
          leave-active-class="animated flipOutX"
        >
          <p class="alert-white" v-if="errors.has('skill')">{{ errors.first('skill') }}</p>
          <!-- <input type="checkbox" id="checkbox" v-model="checked"> -->
        </transition>
      </form>

      <ul>
        <transition
          name="alert-in"
          enter-active-class="animated bounceInUp"
          leave-active-class="animated bounceOutDown"
        >
          <li v-for="(data, index) in skills" :key="index">{{ index }}. {{ data.skill }}</li>
          <li>{{skill}}</li>
        </transition>
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
      this.$validator.validateAll().then(result => {
        if (result) {
          this.skills.push({ skill: this.skill });
          this.skill = ""
        } else {
          // console.warning("Not valid", this.skills)
        }
      });
      // console.log("this checkbox value is:" + this.checked);
    }
  }
  // props: {
  //   msg: String
  // }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";

h3 {
  margin: 40px 0 0;
}
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
.alert {
  background: #fdf2ce;
  font-weight: bold;
  display: inline-block;
  padding: 5px;
  margin-top: -20px;
}
input {
  width: calc(100% - 40px);
  border: 0;
  padding: 20px;
  font-size: 1.3em;
  background-color: #323333;
  color: #687f7f;
}

/* Animation */
.alert-in-enter-active {
  animation: bounce-in 0.5s;
}
.alert-in-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>
