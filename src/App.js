import './App.css';
import React from 'react';
import { useState } from 'react';
import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

function App() {
  const [todos, setTodos] = useState([]);
  const [identity, setIdentity] = useState(0);
  const [input, setInput] = useState('');
  const handleChange = (e) => {
      setInput(e.target.value);
  }
  const handleSubmit = () => {
    const element = {valeur: input, id: identity, completed: false};
    setTodos([...todos, element]);
    setIdentity(identity + 1);
    setInput('');
    console.log(element)
  }
  const deleteTodo = (num) => {
    setTodos(todos.filter((e) => {return e.id !== num}));
  }


  return (
    <div className="App">
      <TodoForm value={input} submit={handleSubmit} change={handleChange}/>
      <TodoList todoList={todos} deleteTodo={deleteTodo}/>
    </div>
  );
}

export default App;
