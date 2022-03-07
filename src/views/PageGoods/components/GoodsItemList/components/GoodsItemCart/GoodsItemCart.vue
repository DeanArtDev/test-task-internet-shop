<template>
  <div class="goods-item">
    <img class="goods-item__img" :src="goodsItem.src" loading="lazy" :alt="goodsItem.name + ' logo'" />
    <h2 class="goods-item__title">
      {{ goodsItem.name }}:
      <span class="goods-item__price">{{ goodsItem.price }} $</span>
    </h2>
    <button class="goods-item__btn __add" @click="$emit('click:cart-add', [goodsItem])">+</button>
    <span class="goods-item__count">{{ count }}</span>
    <button class="goods-item__btn __remove" @click="$emit('click:cart-remove', [goodsItem])">-</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { GoodsItem } from "@/types";

export default Vue.extend({
  name: "GoodsItemCart",
  props: {
    goodsItem: { type: Object as () => GoodsItem, required: true },
    count: { type: Number, default: 0 },
  },
});
</script>

<style lang="scss" scoped>
.goods-item {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, min-content);
  grid-column-gap: 10px;
  grid-template-areas: "img img img" "title title title" "add-button count remove-button";
  border-radius: 14px;
  border: 1px solid #000000;
  padding: 10px;

  &__title {
    grid-area: title;
    text-align: center;
  }

  &__price {
    font-weight: normal;
  }

  &__img {
    width: 160px;
    height: 160px;
    margin: 0 auto;
    grid-area: img;
  }

  &__btn {
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
}
</style>
