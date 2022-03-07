import { CartGoodsItemMap } from "@/types";

export type StateCart = {
  cartGoodsItemsMap: CartGoodsItemMap;
  cartGoodsCount: number;
};

export const createCartState = (): StateCart => ({
  cartGoodsItemsMap: {},
  cartGoodsCount: 0,
});
