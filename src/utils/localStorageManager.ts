import { CartGoodsItemMap, ResponseGoodsItem } from "@/types";
import { StateCart } from "@/store/cart/state";
// [reviewer] можно еще хранить изображения в кеше
export function saveCartData(map?: CartGoodsItemMap, count?: StateCart["cartGoodsCount"]): void {
  map && localStorage.setItem("cartGoodsItemsMap", JSON.stringify(map));
  count !== undefined && localStorage.setItem("cartGoodsCount", JSON.stringify(count));
}

export function getCartMap(): CartGoodsItemMap | null {
  const response = localStorage.getItem("cartGoodsItemsMap");
  if (response) {
    return JSON.parse(response);
  }
  return null;
}

export function getCartCount(): StateCart["cartGoodsCount"] | null {
  const response = localStorage.getItem("cartGoodsCount");
  if (response) {
    return JSON.parse(response);
  }
  return null;
}

export function saveGoods(goods: ResponseGoodsItem[]): void {
  localStorage.setItem("goodsItems", JSON.stringify(goods));
}

export function getGoods(): ResponseGoodsItem[] | null {
  const response = localStorage.getItem("goodsItems");
  if (response) {
    return JSON.parse(response);
  }
  return null;
}
