import Vue from "vue";
import { CreateElement, RenderContext, VNode } from "vue";
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
    const iconCart = () =>
      h("img", {
        class: "cart__icon",
        attrs: { src: "./cart-icon.svg", alt: "The cart icon" },
      });
    const count = h("div", { class: "cart__count" }, [String(ctx.props.count)]);

    return h("div", { class: "cart" }, [iconCart(), count]);
  },
});
