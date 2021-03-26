import "./App.scss";
import Tabs from "./components/tabs/Tabs";
import Tab from "./components/tabs/Tab";
import { RenderLabelCallback } from "components/tabs/Label";
import { TitleWrapper } from "components/styles";

const renderLabel: RenderLabelCallback = ({
  tabIndex,
  disabled,
  isSelected,
}) => (
  <TitleWrapper disabled={disabled} isSelected={isSelected}>{`Tab ${
    tabIndex + 1
  }`}</TitleWrapper>
);

function App() {
  return (
    <Tabs>
      <Tab>
        <Tab.Label>{renderLabel}</Tab.Label>
        <Tab.Content>content 1</Tab.Content>
      </Tab>
      <Tab disabled>
        <Tab.Label>{renderLabel}</Tab.Label>
        <Tab.Content>content 2</Tab.Content>
      </Tab>
      <Tab>
        <Tab.Label>{renderLabel}</Tab.Label>
        <Tab.Content>content 3</Tab.Content>
      </Tab>
    </Tabs>
  );
}

export default App;
