import Vue from "vue";
import { storeNamespace } from "@/store/consts";
import { goodsAction } from "@/store/goods/consts";
import { Dealer } from "./types";
import store from "./store";
import App from "./App.vue";

Vue.config.productionTip = false;

const createApp = (dealers: Dealer[] = []) => {
  store.dispatch(`${storeNamespace.GOODS}/${goodsAction.GET_GOODS_ITEMS}`, dealers);

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
