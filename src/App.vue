<template>
  <div>
    <header class="header">
      <base-navigation :links="navLinks" />
      <cart />
    </header>

    <main>
      <div class="container"></div>
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { NavigationItem } from "@/types";
import BaseNavigation from "@/components/BaseNavigation";
import Cart from "@/components/Cart";
import "@/style/app.scss";

export default Vue.extend({
  components: { BaseNavigation, Cart },
  data() {
    return {
      navLinks: [
        {
          text: "PageCart",
          path: "cart",
        },
        {
          text: "PageGoods",
          path: "goods",
        },
      ] as NavigationItem[],
    };
  },
});
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
}
</style>
