export default function ToDo({ toDoList, removeToDo }) {
  console.log(toDoList);
  return (
    <ul>
      {toDoList.map((item) => (
        <div className="ToDo-item">
          <p key={item}>{item}</p>
          <button onClick={() => removeToDo(item)}>remove</button>
        </div>
      ))}
    </ul>
  );
}
