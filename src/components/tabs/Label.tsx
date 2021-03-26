import { LabelWrapper } from "components/styles";
import React, { ReactNode, useCallback } from "react";
import { isRenderFunction } from "./helpers";

import { TabContext } from "./Tabs";

interface RenderLabelProps {
  isSelected: boolean;
  tabIndex: number;
  disabled?: boolean;
}

export type RenderLabelCallback = (props: RenderLabelProps) => ReactNode;

interface LabelProps {
  children: ReactNode | RenderLabelCallback;
}

export default function Label({ children }: LabelProps) {
  const tabContext = React.useContext(TabContext);
  const isSelected = tabContext?.tabIndex === tabContext?.selectedTab;
  const tabIndex = tabContext?.tabIndex ?? 0;
  const disabled = tabContext?.disabled;
  const setSelectedTab = tabContext?.setSelectedTab;
  const setSelectedTabCallback = useCallback(() => {
    tabIndex !== undefined &&
      setSelectedTab &&
      !disabled &&
      setSelectedTab(tabIndex);
  }, [tabIndex, setSelectedTab, disabled]);

  return (
    <LabelWrapper
      disabled={Boolean(disabled)}
      isSelected={Boolean(isSelected)}
      onClick={setSelectedTabCallback}
    >
      {isRenderFunction(children)
        ? children({ isSelected, tabIndex, disabled })
        : children}
    </LabelWrapper>
  );
}
