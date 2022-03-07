<template>
  <div class="page-cart">
    <template v-if="cartGoodsList.length > 0">
      <div class="page-cart__total-price">
        <p class="page-cart__price-text">Your total price</p>
        <span>{{ totalPrice }} $</span>
        <button class="page-cart__btn __remove" @click="handleCartClear">Clear The Cart</button>
      </div>
      <cart-goods-list
        class="page-cart__goods-list"
        :goods-list="cartGoodsList"
        @click:cart-add="handleCartAdd"
        @click:cart-remove="handleCartRemove"
        @click:cart-remove:all="handleCartRemoveAll"
      />
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
      const count = this.cartGoodsList.reduce((acc: number, item: GoodsItem) => {
        if (this.cartGoodsItemsMap[item.name]) {
          acc += item.price * this.cartGoodsItemsMap[item.name];
        }
        return acc;
      }, 0);
      return count.toFixed(2);
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

    handleCartClear(): void {
      this.$store.dispatch(`${storeNamespace.CART}/${cartActions.CLEAR_CART}`);
    },
  },
});
</script>
<style lang="scss" scoped>
.page-cart {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(2, min-content);
  flex-grow: 1;
  height: 0;
  padding-top: 40px;
  padding-bottom: 40px;
  grid-template-areas: "price price" "goods-list goods-list";
  grid-row-gap: 30px;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas: "goods-list price" "goods-list price";
  }

  &__goods-list {
    grid-area: goods-list;
  }

  &__empty {
    grid-column: 2 span;
  }

  &__total-price {
    grid-area: price;
    display: flex;
    flex-direction: column;
    max-height: 150px;
    margin-bottom: 40px;
  }

  &__price-text {
    margin-bottom: 20px;
    font-size: 20px;
  }

  &__btn {
    border-width: 1px;
    border-style: solid;
    border-radius: 14px;
    padding: 10px 30px;
    background-color: darkred;
    border-color: darkred;
    color: #ffffff;
    font-size: 20px;
    margin-top: 40px;
    margin-left: auto;
    margin-right: auto;
    max-width: 200px;
  }
}
</style>
