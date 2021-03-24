import React, { useState, useMemo, ReactElement, memo } from "react";
import { validateChildren } from "./helpers";
import { TabProps } from "./Tab";

interface TabsProps {
  children: ReactElement<TabProps>[];
}

export interface TabContextProps {
  tabIndex: number;
  selectedTab: number;
  setSelectedTab: (tabIndex: number) => void;
}

export const TabContext = React.createContext<TabContextProps | null>(null);

function Tabs({ children }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(0);
  useMemo(() => validateChildren(children), [children]);

  const labels = children.map((tab, tabIndex) => (
    <TabContext.Provider
      key={tabIndex}
      value={{
        tabIndex,
        selectedTab,
        setSelectedTab,
      }}
    >
      {tab.props.children[0]}
    </TabContext.Provider>
  ));

  const tabs = children
    .map((tab, tabIndex) => (
      <div key={tabIndex} className="tab-content">
        {tab.props.children[1]}
      </div>
    ))
    .filter((_, tabIndex) => tabIndex === selectedTab);

  return (
    <div className="tabs-group">
      <div className="tab-labels">{labels}</div>
      <div className="tab-content">{tabs}</div>
    </div>
  );
}

export default memo(Tabs);
