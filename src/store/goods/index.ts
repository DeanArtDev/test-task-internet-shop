import { Module } from "vuex";
import { createGoodsState, StateGoods } from "./state";
import { createGetters } from "./getters";
import { createActions } from "./actions";
import { createMutations } from "./mutations";
import {StateRoot} from "@/store/state";

const goodsModule: Module<StateGoods, StateRoot> = {
  namespaced: true,
  state: createGoodsState(),
  mutations: createMutations(),
  getters: createGetters(),
  actions: createActions(),
};

export default goodsModule;
