import Vue from "vue";
import { CreateElement, RenderContext, VNode } from "vue";
import formatCount from "@/utils/formatCount";

import "./style.scss";

type Props = {
  count: number;
};

export default Vue.extend({
  name: "Cart",
  functional: true,
  props: {
    count: { type: Number, default: 0 },
  },
  render(h: CreateElement, ctx: RenderContext<Props>): VNode {
    const on = ctx.listeners["click"] ? { click: ctx.listeners["click"] } : undefined;

    const iconCart = () =>
      h("img", {
        class: "cart__icon",
        attrs: { src: "./cart-icon.svg", alt: "The cart icon" },
      });
    const count = () => {
      return ctx.props.count > 0 ? h("div", { class: "cart__count" }, [formatCount(ctx.props.count)]) : undefined;
    };

    return h("div", { class: "cart", on }, [iconCart(), count()]);
  },
});
