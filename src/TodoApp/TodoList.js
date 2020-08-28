import React from "react";

import Todo from "./Todo";

function TodoList({ setTodos, todos }) {
  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo todo={todo} setTodos={setTodos} key={todo.id} todos={todos} />
      ))}
    </div>
  );
}

export default TodoList;
