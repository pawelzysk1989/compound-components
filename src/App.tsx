import "./App.scss";
import Tabs, { Tab, Label, Content } from "./components/tabs/Tabs";

function App() {
  return (
    <div>
      <Tabs>
        <Tab>
          <Label>Tab 1</Label>
          <Content>content 1</Content>
        </Tab>
        <Tab>
          <Label>Tab 2</Label>
          <Content>content 2</Content>
        </Tab>
        <Tab>
          <Label>Tab 3</Label>
          <Content>content 3</Content>
        </Tab>
      </Tabs>
    </div>
  );
}

export default App;
