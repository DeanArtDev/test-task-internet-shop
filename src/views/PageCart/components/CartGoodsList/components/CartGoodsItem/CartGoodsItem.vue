<template>
  <div class="cart-goods-item">
    <img class="cart-goods-item__img" :src="cartGoodsItem.src" loading="lazy" :alt="cartGoodsItem.name + ' logo'" />
    <h2 class="cart-goods-item__title">
      {{ cartGoodsItem.name }}:
      <span class="cart-goods-item__price">{{ cartGoodsItem.price }} $</span>
    </h2>
    <button class="cart-goods-item__btn __add" @click="$emit('click:cart-add', [cartGoodsItem])">+</button>
    <span class="cart-goods-item__count">{{ count }}</span>
    <button class="cart-goods-item__btn __remove" @click="$emit('click:cart-remove', [cartGoodsItem])">-</button>
    <button class="cart-goods-item__btn __remove-all" @click="$emit('click:cart-remove:all', cartGoodsItem.name)">
      +
    </button>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { GoodsItem } from "@/types";

export default Vue.extend({
  name: "CartGoodsItem",
  props: {
    cartGoodsItem: { type: Object as () => GoodsItem, required: true },
    count: { type: Number, default: 0 },
  },
});
</script>

<style lang="scss" scoped>
.cart-goods-item {
  display: grid;
  grid-template-rows: repeat(3, min-content);
  grid-column-gap: 10px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-areas:
    "img title title title remove-all-button"
    "img add-button count remove-button remove-all-button"
    "img add-button count remove-button remove-all-button";
  justify-items: center;
  border-radius: 14px;
  border: 1px solid #000000;
  padding: 10px;
  margin-bottom: 20px;

  @media screen and (min-width: 568px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "img title add-button remove-all-button"
      "img title count remove-all-button"
      "img title remove-button remove-all-button";
  }

  &__title {
    grid-area: title;
    text-align: center;
    align-self: center;
  }

  &__price {
    font-weight: normal;
  }

  &__img {
    width: 70px;
    height: 70px;
    margin: auto;
    grid-area: img;

    @media screen and (min-width: 768px) {
      width: 100px;
      height: 100px;
    }
  }

  &__btn {
    width: 50px;
    height: 50px;
    border-width: 1px;
    border-style: solid;
    border-radius: 14px;
    padding: 5px;
    background-color: transparent;
    font-size: 20px;

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

  &__count {
    grid-area: count;
    align-self: center;
  }

  &__btn.__add {
    border-color: green;
    color: #ffffff;
    background-color: green;
    grid-area: add-button;
  }

  &__btn.__remove {
    color: #ffffff;
    background-color: darkred;
    border-color: darkred;
    grid-area: remove-button;
  }

  &__btn.__remove-all {
    border: none;
    font-size: 55px;
    transform: rotateZ(135deg);
    grid-area: remove-all-button;
  }
}
</style>
