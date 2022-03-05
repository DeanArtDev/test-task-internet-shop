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
    const linkItem = (link: NavigationItem) =>
      h("li", { class: "nav-list__item" }, [
        h(
          "button",
          {
            class: "nav-list__btn",
          },
          [link.text]
        ),
      ]);

    return h("nav", { class: "base-navigation" }, [
      h("ul", { class: "nav-list" }, [ctx.props.links.map((i) => linkItem(i))]),
    ]);
  },
};
