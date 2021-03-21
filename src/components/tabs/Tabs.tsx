import React, { useState, ReactElement, PropsWithChildren } from "react";

interface TabsProps {
  children: ReactElement<TabProps>[];
}

interface TabProps {
  children: [ReactElement, ReactElement];
  disabled?: boolean;
}

interface TabLabelContext {
  isSelected: boolean;
  onLabelClick: () => void;
}

const LabelContext = React.createContext<TabLabelContext | null>(null);

export default function Tabs({ children }: TabsProps) {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <div className="tabs-group">
      <div className="tab-labels">
        {children.map((tab, tabIndex) => (
          <LabelContext.Provider
            value={{
              isSelected: selectedTab === tabIndex,
              onLabelClick: () => setSelectedTab(tabIndex),
            }}
          >
            {tab.props.children[0]}
          </LabelContext.Provider>
        ))}
      </div>
      <div className="tab-content">
        {children
          .map((tab) => tab.props.children[1])
          .filter((_, tabIndex) => tabIndex === selectedTab)}
      </div>
    </div>
  );
}

export function Tab({ children }: TabProps) {
  return <div>{children}</div>;
}

interface LabelProps {}

export function Label({ children }: PropsWithChildren<LabelProps>) {
  const labelContext = React.useContext(LabelContext);
  return (
    <div onClick={labelContext?.onLabelClick}>
      {labelContext?.isSelected ? <strong>{children}</strong> : children}
    </div>
  );
}

interface ContentProps {}

export function Content({ children }: PropsWithChildren<ContentProps>) {
  return <div>{children}</div>;
}
