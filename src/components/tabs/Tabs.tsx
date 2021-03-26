import { LabelGroupWrapper } from "components/styles";
import React, { useState, useMemo, ReactElement, memo } from "react";
import { validateChildren } from "./helpers";
import { TabProps } from "./Tab";

interface TabsProps {
  children: ReactElement<TabProps>[];
}

export interface TabContextProps {
  tabIndex: number;
  selectedTab: number;
  disabled?: boolean;
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
        disabled: tab.props.disabled,
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
      <LabelGroupWrapper>{labels}</LabelGroupWrapper>
      <div className="tab-content">{tabs}</div>
    </div>
  );
}

export default memo(Tabs);
