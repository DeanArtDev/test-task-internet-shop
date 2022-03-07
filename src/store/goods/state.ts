import { Dealer, GoodsItem } from "@/types";

export type StateGoods = {
  dealers: Dealer[];
  goodsItems: GoodsItem[];
};

export const createGoodsState = (): StateGoods => ({
  dealers: [],
  goodsItems: [],
});
