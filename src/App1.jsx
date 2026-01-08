import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter.jsx";
import Conditional from "./components/Conditional.jsx";
import Props from "./components/Props.jsx";
import Input from "./components/Input.jsx";

function App() {

  const obj = {
    name: "Raj",
    age: 21
  };

  const userArray = ["Raj", "Ajeet", "Pawan", "Aditya", "Vikas"];

  const [fruit, setFruit] = useState("Apple");

  const names = ["Vikas", "Ajeet", "Aditya"];
  const [index, setIndex] = useState(0);

  return (
    <>
      <h1>Raj Srivastava</h1>

      {/* Fruit Example */}
      <h1>{fruit}</h1>
      <button onClick={() => setFruit("Mango")}>
        Change to Mango
      </button>

      {/* Counter & Conditional */}
      <Counter />
      <Conditional />


      {/* Change Names */}
      <button
        onClick={() => setIndex((prev) => (prev + 1) % names.length)}
      >
        Change names
      </button>

      <Props name={names[index]} />
      <Input></Input>
    </>
  );
}

export default App;
