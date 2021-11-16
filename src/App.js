import "./App.css";
import React from "react";
import Developer from "./components/developers";

function App() {
  const dev1 = { name: "Gabriel", age: 19, country: "Brasil" };
  const dev2 = { name: "Filipe", age: 28, country: "Brasil" };
  const dev3 = { name: "maria", age: 30, country: "Italia" };

  return (
    <div>
      <Developer name={dev1.name} age={dev1.age} country={dev1.country} />
      <Developer name={dev2.name} age={dev2.age} country={dev2.country} />
      <Developer name={dev3.name} age={dev3.age} country={dev3.country} />
    </div>
  );
}
export default App;
