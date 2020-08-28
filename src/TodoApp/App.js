import React, { useState, useEffect } from "react";
import "./App.css";

import TodoCreate from "./TodoCreate";
import TodoList from "./TodoList";

import { format } from "date-fns";

function App() {
  const storedTodos = localStorage.getItem("todos");
  const [todos, setTodos] = useState(
    storedTodos ? JSON.parse(storedTodos) : []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  });

  const now = new Date();
  return (
    <>
      <h2>{`${format(now, "d")} ${format(now, "MMM")}, ${format(
        now,
        "y"
      )}`}</h2>
      <div className="todo-app">
        <TodoCreate setTodos={setTodos} todos={todos} />
        <TodoList todos={todos} setTodos={setTodos} />
        <div className="helper">
          <div className="overflow"></div>
        </div>
      </div>
    </>
  );
}

export default App;
