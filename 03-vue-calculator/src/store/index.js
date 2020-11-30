import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    packageVersion: process.env.PACKAGE_VERSION || "0"
    // packageVersion: JSON.parse(unescape(process.env.PACKAGE_JSON || '%7Bversion%3A0%7D')).version
    // the rest of your state here
  },
  getters: {
    appVersion: state => {
      return state.packageVersion;
    },
    vueVersion() {
      return Vue.version;
    }
    // the rest of your getters here
  },

  mutations: {},
  actions: {},
  modules: {}
});
