export type NavigationItem = {
  text: string;
  path: string;
  isActive: boolean;
};

export type Dealer = string;

export type GoodsItem = {
  name: string;
  price: number;
  src: string;
};

export type CartGoodsItemMap = Record<GoodsItem["name"], number>;
export type ResponseGoodsItem = Omit<GoodsItem, "src"> & { image: string }