import { React } from 'react';
// import Todolist from "./TodoList";

function Form(props) {
  // We want to console.log the event-> target -> input (nested objects)
  const inputTextHandler = (e) => {
    // console.log(e.target.value);
    props.setInputText(e.target.value)
  }
  const submitTodoHandler = (e) => {
    e.preventDefault();
    const trimmedText = props.inputText.trim();
    if (trimmedText !== "") {
      props.setTodos([...props.todos, { text: trimmedText, completed: false, id: Math.random() * 1000}]);
    }
    props.setInputText("");
  };
  const statusHandler = (e) => {
    // console.log(e.target.value);
    props.setStatus(e.target.value);
  }
  return(
    <form>
      <input 
        value={props.inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input" />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;