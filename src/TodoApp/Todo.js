import React from "react";
import checkmark from "./assets/checkmark.png";
import trashCan from "./assets/trash.png";

function Todo({ todo, setTodos, todos }) {
  const handleCheck = () => {
    let newTodos = todos.filter((t) => t.id !== todo.id);
    if (!todo.done) {
      let i = 0;
      for (i = 0; i < newTodos.length; i++) {
        if (newTodos[i].done) break;
      }
      newTodos = [
        ...newTodos.slice(0, i),
        { ...todo, done: true },
        ...newTodos.slice(i),
      ];
      setTodos(newTodos);
      return;
    }
    setTodos([{ ...todo, done: false }, ...newTodos]);
  };

  const handleDelete = () => {
    let newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };

  return (
    <div className={`todo ${todo.done ? "done" : ""}`}>
      <div className="todo-info">
        <div
          className={`check-box ${todo.done ? "checked" : ""}`}
          onClick={handleCheck}
        >
          <img src={checkmark} alt="" />
        </div>
        <p>{todo.content}</p>
      </div>
      {todo.done ? (
        <div onClick={handleDelete} className="trash">
          <img src={trashCan} alt="" />
        </div>
      ) : null}
    </div>
  );
}

export default Todo;
