import React, { useState } from "react";
import { v4 as uuid } from "uuid";

import Todo from "./Todo";

function TodoCreate({ setTodos, todos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todo) return;
    unfocus();
    setCreating(true);
    document.querySelector(".todo-create input").value = "";
    setTimeout(() => {
      setTodos([{ content: todo, done: false, id: uuid() }, ...todos]);
      setCreating(false);
      setTodo("");
    }, 1500);
  };
  const focus = () => {
    document.querySelector(".todo-create").classList.add("focus");
    document.querySelector(".todo-create input").focus();
  };
  const unfocus = () => {
    document.querySelector(".todo-create").classList.remove("focus");
    document.querySelector(".todo-create input").blur();
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const [todo, setTodo] = useState("");
  const [creating, setCreating] = useState(false);
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`todo-create ${creating ? "creating" : ""}`}
        autoComplete="off"
        onChange={handleChange}
      >
        <div className="field">
          <span className="plus" onClick={focus}></span>
          <input
            type="text"
            id="todo"
            name="todo"
            onFocus={focus}
            placeholder="Add a new goal"
            onBlur={unfocus}
          />
        </div>
        <button type="submit" className={todo ? "" : "disabled"}>
          Add
        </button>
      </form>
      {creating ? (
        <div className="created-todo">
          <Todo
            todo={{
              content: todo,
            }}
          />
        </div>
      ) : null}
    </>
  );
}

export default TodoCreate;
