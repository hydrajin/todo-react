import React from "react";
// import components
import Todo from "./Todo";

const Todolist = (props) => {
  console.log(props.todos);
  return (
  <div className="todo-container">
    <ul className="todo-list">
      {props.todos.map(todos =>(
        <Todo text={todos.text} />
      ))}
    </ul>
  </div>
  );
}

export default Todolist;