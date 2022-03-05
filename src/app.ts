import App from "./App.vue";
import Vue from "vue";
import store from "./store";
Vue.config.productionTip = false;

type Dealer = string;

const createApp = (dealers: Dealer[]) => {
  store.commit("add dealers", { dealers });
  
  new Vue({
    store,
    render: (h) => h(App),
  }).$mount("#root");
};
const app = {
  start: function ({ dealers }: { dealers: Dealer[] }) {
    createApp(dealers);
  },
};
//@ts-ignore
window.app = app;
