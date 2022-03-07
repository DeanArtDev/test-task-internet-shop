import { GoodsItem, ResponseGoodsItem } from "@/types";
import config from "@/config";

export default function goodsItemAdapter(goodsItem: ResponseGoodsItem): GoodsItem {
  return {
    name: goodsItem.name,
    price: goodsItem.price,
    src: `${config.BASE_URL}/${goodsItem.image}`,
  };
}
