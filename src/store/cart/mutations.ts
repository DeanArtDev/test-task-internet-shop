import { MutationTree } from "vuex";
import { CartGoodsItemMap, GoodsItem } from "@/types";
import { StateCart } from "./state";
import { cartMutation } from "@/store/cart/consts";

export const createMutations = (): MutationTree<StateCart> => ({
  [cartMutation.SET_GOODS_ITEM_MAP]: function (state: StateCart, payload: CartGoodsItemMap): void {
    state.cartGoodsItemsMap = payload;
  },

  [cartMutation.DELETE_GOODS_POSITION]: function (state: StateCart, payload: GoodsItem["name"]): void {
    const cartGoodsMap = state.cartGoodsItemsMap;
    delete cartGoodsMap[payload];
    state.cartGoodsItemsMap = cartGoodsMap;
  },

  [cartMutation.SET_COUNT]: function (state: StateCart, payload: StateCart["cartGoodsCount"]): void {
    state.cartGoodsCount = payload;
  },

  [cartMutation.SET_GOODS_COUNT]: function (
    state: StateCart,
    payload: { name: GoodsItem["name"]; count: number }
  ): void {
    state.cartGoodsItemsMap = {
      ...state.cartGoodsItemsMap,
      [payload.name]: payload.count,
    };
  },
});

