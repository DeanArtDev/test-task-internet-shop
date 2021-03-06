import { ActionTree } from "vuex";
import { Dealer, GoodsItem, ResponseGoodsItem } from "@/types";
import { StateGoods } from "./state";
import { goodsAction, goodsMutation } from "./consts";
import { rootMutation } from "@/store/consts";
import goodsItemAdapter from "@/utils/goodsItemAdaper";
import { StateRoot } from "@/store/state";
import { getGoods } from "@/utils/localStorageManager";
import api from "@/api";

export const createActions = (): ActionTree<StateGoods, StateRoot> => ({
  [goodsAction.GET_GOODS_ITEMS]: async function (context, payload: Dealer[]): Promise<GoodsItem[]> {
    let response: ResponseGoodsItem[];
    const localGoods = getGoods();

    try {
      if (!localGoods) {
        context.commit(rootMutation.SET_LOADING, true, { root: true });
        if (payload) {
          response = await api.goods.getByDealer(payload);
        } else {
          response = await api.goods.getAll();
        }
      } else {
        response = localGoods;
      }

      const data = response.map(goodsItemAdapter);
      context.commit(goodsMutation.ADD_DEALERS, payload);
      context.commit(goodsMutation.ADD_GOODS_ITEMS, data);

      return data;
    } finally {
      context.commit(rootMutation.SET_LOADING, false, { root: true });
    }
  },
});
