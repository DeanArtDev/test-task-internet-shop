import { Module } from "vuex";
import { createCartState, StateCart } from "./state";
import { createGetters } from "@/store/cart/getters";
import { createMutations } from "@/store/cart/mutations";
import { createActions } from "@/store/cart/actions";
import {StateRoot} from "@/store/state";

const cartModule: Module<StateCart, StateRoot> = {
  namespaced: true,
  state: createCartState(),
  actions: createActions(),
  getters: createGetters(),
  mutations: createMutations(),
};

export default cartModule;
