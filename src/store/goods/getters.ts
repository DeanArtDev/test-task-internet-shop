import { StateGoods } from "./state";
import { Dealer, GoodsItem } from "@/types";
import { GetterTree } from "vuex";
import {StateRoot} from "@/store/state";

export const createGetters = (): GetterTree<StateGoods, StateRoot> => ({
  dealers: function (state: StateGoods): Dealer[] {
    return state.dealers;
  },

  goodsItems: function (state: StateGoods): GoodsItem[] {
    return state.goodsItems;
  },
});
