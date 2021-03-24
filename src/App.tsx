import "./App.scss";
import Tabs from "./components/tabs/Tabs";
import Tab from "./components/tabs/Tab";

function App() {
  return (
    <Tabs>
      <Tab>
        <Tab.Label>Tab 1</Tab.Label>
        <Tab.Content>content 1</Tab.Content>
      </Tab>
      <Tab>
        <Tab.Label>Tab 2</Tab.Label>
        <Tab.Content>content 2</Tab.Content>
      </Tab>
      <Tab>
        <Tab.Label>Tab 3</Tab.Label>
        <Tab.Content>content 3</Tab.Content>
      </Tab>
    </Tabs>
  );
}

export default App;
