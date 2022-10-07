import React, { useState } from "react";
import './App.css';
// Importing Components
import Form from "./components/form";
import Todolist from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  return (
    <div className="App">
      <header>
        <h1>Suliman's Todo List</h1>
      </header>
      <Form />
      <Todolist />
    </div>
  );
}

export default App;
