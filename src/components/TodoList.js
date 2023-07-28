import React, { useState } from "react";
import TodoListItem from "./TodoListItem";

function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", selected: false, completed: true },
    { id: 2, title: "Learn JSX", selected: false, completed: false },
    { id: 3, title: "Build a React App", selected: false, completed: false },
  ]);

  function onClickedTodoItem(id) {
    console.log("onClickedTodoItem", id);

    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.selected = !todo.selected;
    setTodos(newTodos);
  }

  return (
    <div className="TodoListContainer">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onClick={onClickedTodoItem} />
      ))}
      <div className="DeleteButton">
        <p>Delete</p>
      </div>
    </div>
  );
}

export default TodoList;
