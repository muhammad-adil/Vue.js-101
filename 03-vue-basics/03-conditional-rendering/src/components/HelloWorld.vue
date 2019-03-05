<template>
  <div id="card">
    <header>{{ title }}</header>
    <form v-on:submit.prevent="addItem">
      <input id="itemForm" v-model="input" />
      <button>Add Dinosaur</button>
    </form>
    <template v-if="dinos.length > 0">
      <h4>Dinosaur List</h4>
      <ul>
        <li v-for="dino in dinos">
          <button v-show="dino.quantity < 5" v-on:click="dino.quantity += 1">+</button>
          {{ dino.quantity }}
          <button v-show="dino.quantity > 1" v-on:click="dino.quantity -= 1">-</button>
          {{ dino.name }}
          <button v-on:click="removeItem" class="extinct">Make Extinct</button>
        </li>
      </ul>
    </template>
    <p v-else>You have no Dinosaurs yet</p>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Epic Dinosaur Counter",
      input: "",
      dinos: [
        { name: "Triceratops", quantity: 4 },
        { name: "Velociraptor", quantity: 3 }
      ]
    };
  },
  props: {
    msg: String
  },
  methods: {
    addItem: function() {
      if (!this.input) return;

      this.dinos.push({ name: this.input, quantity: 1 });
      this.input = "";
    },
    removeItem: function(dino) {
      this.dinos.splice(dino, 1);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  padding: 2em;
  font-family: sans-serif;
}

#card {
  border: 2px solid Gray;
  border-radius: 10px;
}

#card header {
  display: block;
  border-radius: 8px 8px 0 0;
  background: orange;
  padding: 10px;
  color: white;
  font-size: 1.5em;
}

#card div,
#card p,
form {
  padding: 1em;
}
.extinct {
  float: right;
}

h4 {
  margin-left: 1em;
}

#card ul {
  list-style: none;
  margin: 0;
  padding: 0 1em 1em;
}

#card ul li {
  padding: 0.25em;
  border: 1px solid gray;
  margin: 0.5em 0;
  border-radius: 3px;
}
</style>
