import server from "@/utils/http";
import { Dealer, ResponseGoodsItem } from "@/types";

export default {
  async getAll(): Promise<ResponseGoodsItem[]> {
    let { data } = await server.get<ResponseGoodsItem[]>("/api/goods");
    return data;
  },

  async getByDealer(dealers: Dealer[]): Promise<ResponseGoodsItem[]> {
    let { data } = await server.get<ResponseGoodsItem[]>("/api/goods", {
      params: { dealers: dealers.join(",") },
    });
    return data;
  },
};
