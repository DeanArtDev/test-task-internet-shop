<template>
  <div class="goods-item-list">
    <goods-item-cart
      v-for="item in goodsItemList"
      :key="item.name"
      :goods-item="item"
      :count="getCount(item.name)"
      @click:cart-add="handleCartAdd"
      @click:cart-remove="handleCartRemove"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { GoodsItem } from "@/types";
import { storeNamespace } from "@/store/consts";
import GoodsItemCart from "./components/GoodsItemCart";

export default Vue.extend({
  name: "GoodsItemList",
  components: { GoodsItemCart },
  props: {
    goodsItemList: { type: Array as () => GoodsItem[], default: () => [] },
  },
  // повторяющаяся логки, можно вынести в миксин или компоузабл (composition-api)
  computed: {
    ...mapGetters(storeNamespace.CART, ["cartGoodsItemsMap"]),
  },
  methods: {
    getCount(goodsItemName: GoodsItem["name"]): number {
      return this.cartGoodsItemsMap?.[goodsItemName] ?? 0;
    },

    handleCartAdd(goodsItems: GoodsItem[]): void {
      this.$emit("click:cart-add", goodsItems);
    },

    handleCartRemove(goodsItems: GoodsItem[]): void {
      this.$emit("click:cart-remove", goodsItems);
    },
  },
});
</script>

<style lang="scss" scoped>
.goods-item-list {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
}
</style>
