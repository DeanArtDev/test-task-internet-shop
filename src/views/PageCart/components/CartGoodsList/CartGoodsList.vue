<template>
  <div class="cart-goods-list">
    <cart-goods-item
      v-for="item of goodsList"
      :cart-goods-item="item"
      :count="getCount(item.name)"
      :key="item.name"
      @click:cart-add="handleCartAdd"
      @click:cart-remove="handleCartRemove"
      @click:cart-remove:all="handleCartRemoveAll"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { GoodsItem } from "@/types";
import { storeNamespace } from "@/store/consts";
import CartGoodsItem from "./components/CartGoodsItem";

export default Vue.extend({
  name: "CartGoodsList",
  components: { CartGoodsItem },
  props: {
    goodsList: { type: Array as () => GoodsItem[], default: () => [] },
  },
  // [reviewer] повторяющаяся логки, можно вынести в миксин или компоузабл (composition-api)
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

    handleCartRemoveAll(goodsName: GoodsItem["name"]): void {
      this.$emit("click:cart-remove:all", goodsName);
    },
  },
});
</script>
<style lang="scss">
.cart-goods-list {
  @media screen and (min-width: 1000px) {
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
    &:active {
      opacity: 1;
    }
  }
}
</style>
