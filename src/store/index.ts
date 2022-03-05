import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initialStore = new Vuex.Store({
  state: {
    name: "hello",
  },
  mutations: {},
  actions: {},
  modules: {},
});

export default initialStore;
