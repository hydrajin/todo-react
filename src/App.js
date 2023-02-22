import React, { useState, useEffect } from "react";
import './App.css';
// Importing Components
import Form from "./components/Form";
import Todolist from "./components/TodoList";

function App() {
  // State
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  // Functions
  const filteredHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false))
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }
  // Use Effect
  useEffect(() => {
    getLocalTodos();
  },[]);
  useEffect(() => {
    filteredHandler();
    saveLocalTodos();
  },[todos, status]);
// Save to local storage
const saveLocalTodos = () => {
  localStorage.setItem("todos", JSON.stringify(todos));
  console.log("Save: ",JSON.stringify(todos));
};
const getLocalTodos = () => {
  if (localStorage.getItem("todos") === null) {
    localStorage.setItem("todos", JSON.stringify([]));
  } else {
    let todoLocal = JSON.parse(localStorage.getItem("todos"));
    console.log(todoLocal);
    setTodos(todoLocal);
  }
};
  return (
    <div className="App">
      <header>
        <h1>Suliman's Todo List</h1>
      </header>
      <Form 
        inputText={inputText} 
        setInputText={setInputText} 
        todos={todos} 
        setTodos={setTodos}
        setStatus={setStatus}
      />
      <Todolist 
        todos={todos} 
        setTodos={setTodos}
        filteredTodos={filteredTodos} 
      />
    </div>
  );
}

export default App;
