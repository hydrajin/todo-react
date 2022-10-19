import React from 'react'

export default function Todo(props) {
  // Events
  const deleteHandler = () => {
    props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
    /* filter() method creates a shallow copy of a portion of a given array
    we are filtering the elements that don't match the id of the element we clicked on
    (create a copy of everything except what we clicked on... hence it gets removed) */
    // console.log(props.todo);
    // console.log(props.setTodos);  
  };
  const completeHandler = () => {
    props.setTodos(props.todos.map(item => {
      if(item.id === props.todo.id){
        return {
          ...item, completed: !item.completed
        };
      }
      return item;
    }));
  }
  return (
    <div className="todo">
      <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>{props.text}</li>
      <button onClick={completeHandler} className="complete-btn">
        <i className="fas fa-check"></i>
      </button>
      <button onClick={deleteHandler} className="trash-btn">
        <i className="fas fa-trash"></i>
      </button>
    </div>
  )
}
