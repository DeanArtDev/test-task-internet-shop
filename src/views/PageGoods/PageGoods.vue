<template>
  <div class="page-goods">
    <goods-item-list
      v-if="goodsItems.length"
      :goods-item-list="goodsItems"
      @click:cart-add="handleCartAdd"
      @click:cart-remove="handleCartRemove"
    />
    <empty-content v-else>{{ emptyText }}</empty-content>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { GoodsItem } from "@/types";
import { storeNamespace } from "@/store/consts";
import { cartActions } from "@/store/cart/consts";
import EmptyContent from "@/components/EmptyContent";
import GoodsItemList from "./components/GoodsItemList";

export default Vue.extend({
  name: "PageGoods",
  components: { GoodsItemList, EmptyContent },
  computed: {
    ...mapGetters(storeNamespace.GOODS, ["goodsItems"]),
    ...mapGetters(["loading"]),

    emptyText(): string {
      return this.loading ? "Loading..." : "There are no goods yet.";
    },
  },
  methods: {
    handleCartAdd(goodsItems: GoodsItem[]): void {
      this.$store.dispatch(`${storeNamespace.CART}/${cartActions.ADD_GOODS}`, goodsItems);
    },

    async handleCartRemove(goodsItems: GoodsItem[]): Promise<void> {
      await this.$store.dispatch(`${storeNamespace.CART}/${cartActions.REMOVE_GOODS}`, goodsItems);
    },
  },
});
</script>
<style lang="scss" scoped>
.page-goods {
  flex-grow: 1;
  height: 0;
  padding-top: 40px;
  padding-bottom: 40px;
}
</style>
