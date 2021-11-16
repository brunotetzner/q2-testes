import "./App.css";
import React from "react";
import { useState } from "react";
import WriteFruits from "./components/fruits";

function App() {
  const [fruits, setFruits] = useState([
    { name: "banana", color: "yellow", price: 2 },
    { name: "cherry", color: "red", price: 3 },
    { name: "strawberry", color: "red", price: 4 },
  ]);
  function filterFruits(color) {
    setFruits(fruits.filter((fruit) => fruit.color === color));
  }

  return (
    <div>
      <WriteFruits fruits={fruits} />
      <button onClick={() => filterFruits("red")}>apenas vermelhas</button>
      <button onClick={() => filterFruits("yellow")}>apenas amarelas</button>
      <p>
        Valor total:
        {fruits.reduce((acumulador, valorAtual) => {
          return acumulador + valorAtual.price;
        }, 0)}
      </p>
    </div>
  );
}

export default App;
