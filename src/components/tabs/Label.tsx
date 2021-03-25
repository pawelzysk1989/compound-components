import React, { ReactNode, useCallback } from "react";
import { isRenderFunction } from "utils";

import { TabContext } from "./Tabs";

interface RenderChildrenCallbackArg {
  isSelected: boolean;
  tabIndex: number;
}

type RenderChildrenCallback = (arg: RenderChildrenCallbackArg) => ReactNode;

interface LabelProps {
  children: ReactNode | RenderChildrenCallback;
}

export default function Label({ children }: LabelProps) {
  const tabContext = React.useContext(TabContext);
  const isSelected = tabContext?.tabIndex === tabContext?.selectedTab;
  const tabIndex = tabContext?.tabIndex ?? 0;
  const setSelectedTab = tabContext?.setSelectedTab;
  const setSelectedTabCallback = useCallback(() => {
    tabIndex !== undefined && setSelectedTab && setSelectedTab(tabIndex);
  }, [tabIndex, setSelectedTab]);

  return (
    <div onClick={setSelectedTabCallback}>
      {isRenderFunction(children)
        ? children({ isSelected, tabIndex })
        : children}
    </div>
  );
}
