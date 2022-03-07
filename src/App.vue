<template>
  <div class="app container">
    <header class="header">
      <base-navigation :links="navLinks" @click="isShowCart = false" />
      <cart :count="cartGoodsCount" @click="isShowCart = true" />
    </header>

    <page-cart v-if="isShowCart" />
    <page-goods v-else />
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";
import { NavigationItem } from "@/types";
import { storeNamespace } from "@/store/consts";
import BaseNavigation from "@/components/BaseNavigation";
import Cart from "@/components/Cart";
import PageGoods from "@/views/PageGoods";
import PageCart from "@/views/PageCart";

import "@/style/app.scss";

export default Vue.extend({
  components: { BaseNavigation, Cart, PageCart, PageGoods },
  data() {
    return {
      isShowCart: false,
    };
  },
  computed: {
    ...mapGetters(storeNamespace.CART, ["cartGoodsCount"]),

    navLinks(): NavigationItem[] {
      return [
        {
          text: "Goods",
          path: "goods",
          isActive: !this.isShowCart,
        },
      ];
    },
  },
});
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
}
</style>
