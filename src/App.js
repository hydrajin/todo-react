import React, { useState } from "react";
import './App.css';
// Importing Components
import Form from "./components/Form";
import Todolist from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
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
      />
      <Todolist todos={todos} />
    </div>
  );
}

export default App;
