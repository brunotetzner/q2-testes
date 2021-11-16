import "./App.css";
import React from "react";
import { useState } from "react";
function App() {
  const [randomNumber, setRandomNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const newRandomNumber = () =>
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  return (
    <div>
      <span>{randomNumber}</span>
      <button onClick={newRandomNumber}>new number</button>
    </div>
  );
}

export default App;
