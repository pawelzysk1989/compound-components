import React, { memo, useCallback, useMemo } from "react";
import { PropsWithChildren } from "react";
import { TabContext } from "./Tabs";

function Label({ children }: PropsWithChildren<{}>) {
  const tabContext = React.useContext(TabContext);
  const isSelected = tabContext?.tabIndex === tabContext?.selectedTab;
  const tabIndex = tabContext?.tabIndex;
  const setSelectedTab = tabContext?.setSelectedTab;
  const setSelectedTabCallback = useCallback(() => {
    tabIndex !== undefined && setSelectedTab && setSelectedTab(tabIndex);
  }, [tabIndex, setSelectedTab]);

  const memoizedView = useMemo(
    () => (
      <div onClick={setSelectedTabCallback}>
        {isSelected ? <strong>{children}</strong> : children}
      </div>
    ),
    [children, isSelected, setSelectedTabCallback]
  );

  return memoizedView;
}

export default memo(Label);
