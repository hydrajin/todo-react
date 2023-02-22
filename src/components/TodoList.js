import React from "react";
// import components
import Todo from "./Todo";

const Todolist = (props) => {
  // console.log(props.todos);
  // console.log(props.filteredTodos);
  return (
  <div className="todo-container">
    <ul className="todo-list">
      {props.filteredTodos.map(todo => (
        <Todo 
          key={todo.id}
          text={todo.text}
          setTodos={props.setTodos}
          todos={props.todos}
          todo={todo}
        />
      ))}
    </ul>
  </div>
  );
}

export default Todolist;