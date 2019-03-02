<template>
  <div id="card">
    <header>
      <strong>{{ title }}</strong>
    </header>
    <p>{{ content }}</p>
    <div v-html="contentWithHtml"></div>

    <ul>
      <li v-for="(item, index) in dynoItems">
        <button v-on:click="item.quantity += 1">+</button>
        {{ item.quantity }}
        <button v-on:click="item.quantity -= 1">-</button>

        <!-- <button v-on:click="deleteItem(index)">X</button> -->
        <button v-on:click="removeDynoItem" class="extinct">Make Extinct</button>
        {{ item.text | capitalize }}, {{item.value}}
      </li>
    </ul>

    <br />
    <input id="itemForm" v-on:keypress.enter="addItem" />
    <button v-on:click="addItem">Add Anything in list</button>
    <br />
    <br />

    <ul>
      <li>Total Dinosaurs: {{ totalDinos }}</li>
      <li>Total Species: {{ totalSpecies }}</li>
    </ul>
    <ul>
      <li>
        Total Dinosaurs: {{ totalDinos }}
        <span>Updated: {{ dinosUpdated }}</span>
      </li>
      <li>
        Total Species: {{ totalSpecies }}
        <span>Updated: {{ speciesUpdated }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "Vue-basics",
      content: "Anything can come here....",
      contentWithHtml:
        "I am with html <strong>tags</strong>, Anything <i>can</i>....",
      //   totalDinos: 0,
      //   totalSpecies: 0,
      speciesUpdated: 0,
      dinosUpdated: 0,
      input: "",
      //   items: [
      //     { text: "Card 1", value: "15" },
      //     { text: "one more card 2", value: "05" },
      //     { text: "A new Card 3", value: "45" },
      //     { text: "another Card 4", value: "25" }
      //   ],
      // Dinosaurs
      dynoItems: [
        { text: "Tyrannosaurus", quantity: 15 },
        { text: "Triceratops", quantity: 7 },
        { text: "Stegosaurus", quantity: 23 }
      ]
    };
  },
  methods: {
    addDynoItem: function(e) {
      e.preventDefault();
      if (!this.input) return;

      this.dynoItems.push({ text: this.input, quantity: 1 });
      this.input = "";
    },

    removeDynoItem: function(item) {
      this.dynoItems.splice(item, 1);
    },

    addItem: function() {
      var input = document.getElementById("itemForm");
      if (input.value !== "") {
        this.items.push({
          text: input.value
        });
      }
      input.value = "";
    },

    // for simple todo items list funcs
    deleteItem: function(index) {
      this.items.splice(index, 1);
    },

    addItem: function(e) {
      e.preventDefault();
      if (!this.input) return;

      this.items.push({ text: this.input, quantity: 1 });
      this.input = "";
    },

    removeItem: function(item) {
      this.items.splice(item, 1);
    }
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    },
    undercase: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.toLowerCase();
    }
    //,
    // Url filter
    // url: function(value) {
    //   if (!value) return "";
    //   value = value.toString();
    //   return "https://en.wikipidea.org/wiki/" + value;
    // }
  },
  computed: {
    totalDinos: function() {
      this.dinosUpdated += 1;
      var sum = 0;
      var dynoItems = this.dynoItems;

      for (var i in dynoItems) {
        sum += dynoItems[i].quantity;
      }
      return sum;
    },

    totalSpecies: function() {
      this.speciesUpdated += 1;
      return this.dynoItems.length;
    }
    // totalDinos: function() {
    //   var sum = 0;
    //   var items = this.items;
    //   for (var i in DynoItems) {
    //     sum += items[i].quantity;
    //   }
    //   return sum;
    // },
    // // totlaSpecies Function
    // totalSpecies: function() {
    //   return this.items.length;
    // }
  }
};
</script>

<style scoped>
#card ul li {
  list-style-type: none;
}
</style>
