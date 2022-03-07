import { ActionTree } from "vuex";
import { GoodsItem } from "@/types";
import { StateCart } from "./state";
import { cartActions, cartMutation } from "@/store/cart/consts";
import { StateRoot } from "@/store/state";
import { getCartCount, getCartMap, saveCartData } from "@/utils/localStorageManager";

const INITIAL_COUNT_VALUE = 1;
const CART_COUNT_STEP = 1;
const GOODS_COUNT_STEP = 1;

export const createActions = (): ActionTree<StateCart, StateRoot> => ({
  [cartActions.ADD_GOODS]: async function ({ state, commit }, payload: GoodsItem[]): Promise<void> {
    payload.forEach(({ name }) => {
      if (state.cartGoodsItemsMap[name] === undefined) {
        commit(cartMutation.SET_GOODS_COUNT, { name, count: INITIAL_COUNT_VALUE });
        commit(cartMutation.SET_COUNT, state.cartGoodsCount + payload.length);
        saveCartData(state.cartGoodsItemsMap, state.cartGoodsCount);
      } else {
        commit(cartMutation.SET_GOODS_COUNT, { name, count: state.cartGoodsItemsMap[name] + GOODS_COUNT_STEP });
        saveCartData(state.cartGoodsItemsMap);
      }
    });
  },

  [cartActions.REMOVE_GOODS]: async function ({ state, commit }, payload: GoodsItem[]): Promise<void> {
    payload.forEach(({ name }) => {
      if (state.cartGoodsItemsMap[name] > 0) {
        commit(cartMutation.SET_GOODS_COUNT, { name, count: state.cartGoodsItemsMap[name] - GOODS_COUNT_STEP });
      }
      if (state.cartGoodsItemsMap[name] === 0) {
        commit(cartMutation.SET_COUNT, state.cartGoodsCount - CART_COUNT_STEP);
        commit(cartMutation.DELETE_GOODS_POSITION, name);
      }

      saveCartData(state.cartGoodsItemsMap, state.cartGoodsCount);
    });
  },

  [cartActions.REMOVE_GOODS_POSITION]: async function ({ state, commit }, payload: GoodsItem["name"]): Promise<void> {
    commit(cartMutation.SET_GOODS_COUNT, { name: payload, count: 0 });
    commit(cartMutation.DELETE_GOODS_POSITION, payload);
    commit(cartMutation.SET_COUNT, state.cartGoodsCount - CART_COUNT_STEP);
    saveCartData(state.cartGoodsItemsMap, state.cartGoodsCount);
  },

  [cartActions.STATE_INITIALISATION]: async function ({ commit }): Promise<void> {
    const count = getCartCount();
    const cartMap = getCartMap();
    count !== null && commit(cartMutation.SET_COUNT, count);
    cartMap && commit(cartMutation.SET_GOODS_ITEM_MAP, cartMap);
  },

  [cartActions.CLEAR_CART]: async function ({ state, commit }): Promise<void> {
    commit(cartMutation.SET_GOODS_ITEM_MAP, {});
    commit(cartMutation.SET_COUNT, 0);
    saveCartData(state.cartGoodsItemsMap, state.cartGoodsCount);
  },
});
