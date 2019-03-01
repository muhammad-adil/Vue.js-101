<template>
  <div id="card">
    <header>
      <strong>{{ title }}</strong>
    </header>
    <p>{{ content }}</p>
    <div v-html="contentWithHtml"></div>
    <ul>
      <li v-for="(item, index) in items">
        <button v-on:click="deleteItem(index)">X</button>
        {{ item.text | capitalize }}, {{item.value}}
      </li>
    </ul>
    <br />
    <input id="itemForm" v-on:keypress.enter="addItem" />
    <button v-on:click="addItem">Add Anything in list</button>
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
      items: [
        { text: "Card 1", value: "15" },
        { text: "one more card 2", value: "05" },
        { text: "A new Card 3", value: "45" },
        { text: "another Card 4", value: "25" }
      ]
    };
  },
  methods: {
    addItem: function() {
      var input = document.getElementById("itemForm");
      if (input.value !== "") {
        this.items.push({
          text: input.value
        });
      }
      input.value = "";
    },
    deleteItem: function(index) {
      this.items.splice(index, 1);
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
  }
};
</script>

<style scoped>
#card ul li {
  list-style-type: none;
}
</style>
