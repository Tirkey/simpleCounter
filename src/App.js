import "./App.css";
import SimpleCounter from "./components/SimpleCounter";
import ReverseCounter from "./components/ReverseCounter";

function App() {
  return (
    <div className="App">
      <h1>Counter</h1>
      <SimpleCounter />
      <ReverseCounter />
    </div>
  );
}

export default App;
