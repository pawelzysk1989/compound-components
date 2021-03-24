import { ReactElement } from "react";
import Content from "../Content";
import Label from "../Label";
import Tab, { TabProps } from "../Tab";

export function validateChildren(children: ReactElement<TabProps>[]) {
  children.forEach((child) => {
    if (child.type !== Tab) {
      throw new Error("Invalid Tabs Children Element. Expected Tab");
    }
  });

  children.forEach((tab) => {
    const firstChildType = tab.props.children[0].type;
    if (firstChildType !== Label) {
      throw new Error("Invalid Tab Children Element. Expected Label");
    }
    const secondChildType = tab.props.children[1].type;
    if (secondChildType !== Content) {
      throw new Error("Invalid Tab Children Element. Expected Content");
    }
  });
}
