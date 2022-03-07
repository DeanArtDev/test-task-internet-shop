import { CreateElement, VNode, RenderContext } from "vue";
import { NavigationItem } from "@/types";

import "./style.scss";

type Props = {
  links: NavigationItem[];
};

export default {
  name: "BaseNavigation",
  functional: true,
  props: {
    links: { type: Array as () => NavigationItem[], default: () => [] },
  },
  render(h: CreateElement, ctx: RenderContext<Props>): VNode {
    const on = ctx.listeners["click"] ? { click: ctx.listeners["click"] } : undefined;
    const linkItem = (link: NavigationItem) =>
      h("li", { staticClass: "nav-list__item" }, [
        h(
          "button",
          {
            staticClass: "nav-list__btn",
            class: { __active: link.isActive },
            on,
          },
          [link.text]
        ),
      ]);

    return h("nav", { staticClass: "base-navigation" }, [
      h("ul", { staticClass: "nav-list" }, [
        ctx.props.links.map((i) => linkItem(i)),
      ]),
    ]);
  },
};
