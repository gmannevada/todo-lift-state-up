import React, { useState } from "react";

function getClassName(selected) {
  if (selected) {
    return "TodoListIteContainer selected";
  } else {
    return "TodoListIteContainer";
  }
}

export default function TodoListItem({ todo, onClick }) {
  const [completed, setCompleted] = useState(todo.completed);
  
  function onChange() {
    setCompleted((value) => !value);
  }

  return (
    <div>
      <div className={getClassName(todo.selected)} onClick={() => onClick (todo.id)}>
        {todo.title}{" "}
      </div>
    </div>
  );
}

//<input type="checkbox" checked={todo.completed} onChange={onChange} />
