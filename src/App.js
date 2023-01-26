import "./App.css";
import ClickCounter from "./Components/HigherOrderComponent/ClickCounter";
import MouseOverCounter from "./Components/HigherOrderComponent/MouseOverCounter";

function App() {
  return (
    <div className="App">
      <h1>React Pure Component and Higher Order Component</h1>
      <ClickCounter />
      <MouseOverCounter />
    </div>
  );
}

export default App;
