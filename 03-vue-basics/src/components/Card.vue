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
        {{ item.text }}
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
        { text: "Card 1" },
        { text: "Card 2" },
        { text: "Card 3" },
        { text: "Card 4" }
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
  }
};
</script>

<style scoped>
#card ul li {
  list-style-type: none;
}
</style>
