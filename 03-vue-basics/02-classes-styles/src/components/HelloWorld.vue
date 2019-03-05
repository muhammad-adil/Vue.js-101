<template>
  <div id="card">
    <h1>{{ msg }}</h1>
    <header>{{ title }}</header>
    <button
      v-bind:class="[sizeToggle ? 'large' : '', {'rounded': isRounded}]"
      v-bind:style="styles"
      v-bind:disabled="disabled"
    >Start Tour</button>
    <hr />
    <h4>Options</h4>
    <ul>
      <li>
        <input type="checkbox" v-model="sizeToggle" />
        <label>Large</label>
      </li>
      <li>
        <input type="checkbox" id="round" v-model="isRounded" />
        <label for="round">Rounded</label>
      </li>
      <li>
        <input type="checkbox" v-model="disabled" />
        <label>Disabled</label>
      </li>
      <li>
        <input type="text" v-model="backgroundColor" />
        <label>Background Color</label>
      </li>
      <li>
        <input type="text" v-model="fontColor" />
        <label>Font Color</label>
      </li>
      <li>
        <input type="range" v-model="range" min="15" max="85" />
        <label>Position</label>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      title: "Style Bindings",
      isRounded: false,
      sizeToggle: false,
      disabled: false,
      backgroundColor: "#CCCCCC",
      fontColor: "#000000",
      range: 50
    };
  },
  computed: {
    styles: function() {
      return {
        color: this.fontColor,
        background: this.backgroundColor,
        "margin-left": this.range + "%"
      };
    }
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
body {
  padding: 2em;
  font-family: sans-serif;
}

#card {
  border: 2px solid Gray;
  border-radius: 10px;
}
.rounded {
  border-radius: 10px;
}
.large {
  font-size: 2em;
}
label {
  margin-left: 1em;
}
button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
#card header {
  display: block;
  border-radius: 8px 8px 0 0;
  background: orange;
  padding: 10px;
  color: white;
  font-size: 1.5em;
  margin-bottom: 1em;
}

#card div,
#card p {
  padding: 1em;
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
