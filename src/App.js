import "./App.css";
import React from "react";
import { useState } from "react";
import ToDo from "./components/todoList ";
//criar o input e o botão que recebe o valor e guardar
//Passar para como parametro apra um componente que ira criar esse elemento usando html

function App() {
  const [toDoList, setToDoList] = useState([]);
  const [inputValue, setInputValue] = useState();

  const addToDo = (newToDo) => setToDoList([...toDoList, newToDo]);
  const removeToDo = (itemToRemove) =>
    setToDoList(toDoList.filter((item) => item !== itemToRemove));
  return (
    <>
      <div>
        <ToDo toDoList={toDoList} removeToDo={removeToDo} />
        <input
          onChange={(event) => setInputValue(event.target.value)}
          placeholder="digite sua tarefa"
          type="text"
        ></input>
        <button onClick={() => addToDo(inputValue)}>add</button>
      </div>
    </>
  );
}
export default App;
