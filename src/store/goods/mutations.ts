import { MutationTree } from "vuex";
import { Dealer, GoodsItem } from "@/types";
import { StateGoods } from "./state";
import { goodsMutation } from "./consts";

export const createMutations = (): MutationTree<StateGoods> => ({
  [goodsMutation.ADD_DEALERS]: function (state: StateGoods, payload: Dealer[]): void {
    state.dealers = payload;
  },
  [goodsMutation.ADD_GOODS_ITEMS]: function (state: StateGoods, payload: GoodsItem[]): void {
    state.goodsItems = payload;
  },
});
