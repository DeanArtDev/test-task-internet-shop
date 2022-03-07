import Vue from "vue";
import Vuex from "vuex";
import { storeNamespace } from "./consts";
import cartModule from "./cart";
import goodsModule from "./goods";
import { createRootMutations } from "./mutations";
import { createRootGetters } from "@/store/getters";
import { createRootState, StateRoot } from "@/store/state";

Vue.use(Vuex);

export default new Vuex.Store<StateRoot>({
  modules: {
    [storeNamespace.CART]: cartModule,
    [storeNamespace.GOODS]: goodsModule,
  },
  state: createRootState(),
  mutations: createRootMutations(),
  getters: createRootGetters(),
});
