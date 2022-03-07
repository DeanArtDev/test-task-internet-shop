import { StateCart } from "./state";
import { CartGoodsItemMap, GoodsItem } from "@/types";
import { GetterTree } from "vuex";
import { storeNamespace } from "@/store/consts";

export const createGetters = (): GetterTree<StateCart, any> => ({
  cartGoodsItemsMap: function (state: StateCart): CartGoodsItemMap {
    return state.cartGoodsItemsMap ?? {};
  },

  cartGoodsCount: function (state: StateCart): StateCart["cartGoodsCount"] {
    return state.cartGoodsCount;
  },

  cartGoodsList: function (state: StateCart, getters, rootGetters): GoodsItem[] {
    const cartGoodsMap: CartGoodsItemMap = getters.cartGoodsItemsMap;
    const goodsList: GoodsItem[] = rootGetters[storeNamespace.GOODS].goodsItems;

    return goodsList.filter((i) => !!cartGoodsMap[i.name]);
  },
});
