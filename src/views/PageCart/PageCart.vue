<template>
  <div class="page-cart">
    <template v-if="cartGoodsList.length > 0">
      <cart-goods-list
        :goods-list="cartGoodsList"
        @click:cart-add="handleCartAdd"
        @click:cart-remove="handleCartRemove"
        @click:cart-remove:all="handleCartRemoveAll"
      />
      <div class="page-cart__total-price">
        <p>Your total price</p>
        <span>{{ totalPrice }} $</span>
      </div>
    </template>
    <empty-content class="page-cart__empty" v-else>Your cart is currently empty.</empty-content>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { GoodsItem } from "@/types";
import { cartActions } from "@/store/cart/consts";
import { storeNamespace } from "@/store/consts";
import EmptyContent from "@/components/EmptyContent";
import CartGoodsList from "./components/CartGoodsList";

export default Vue.extend({
  name: "PageCart",
  components: { CartGoodsList, EmptyContent },
  data() {
    return {
      goodsList: [] as GoodsItem[],
    };
  },
  computed: {
    ...mapGetters(storeNamespace.CART, ["cartGoodsList", "cartGoodsItemsMap"]),

    totalPrice(): number {
      return this.cartGoodsList.reduce((acc: number, item: GoodsItem) => {
        if (this.cartGoodsItemsMap[item.name]) {
          acc += item.price * this.cartGoodsItemsMap[item.name];
        }
        return acc;
      }, 0);
    },
  },
  methods: {
    handleCartAdd(goodsItems: GoodsItem[]): void {
      this.$store.dispatch(`${storeNamespace.CART}/${cartActions.ADD_GOODS}`, goodsItems);
    },

    handleCartRemove(goodsItems: GoodsItem[]): void {
      this.$store.dispatch(`${storeNamespace.CART}/${cartActions.REMOVE_GOODS}`, goodsItems);
    },

    handleCartRemoveAll(goodsName: GoodsItem["name"]): void {
      this.$store.dispatch(`${storeNamespace.CART}/${cartActions.REMOVE_GOODS_POSITION}`, goodsName);
    },
  },
});
</script>
<style lang="scss" scoped>
.page-cart {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  flex-grow: 1;
  height: 0;
  padding-top: 40px;
  padding-bottom: 40px;

  &__empty {
    grid-column: 2 span;
  }
}
</style>
