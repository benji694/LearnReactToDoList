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
  const changeCompleted = (num) => {
    todos[num].completed = !(todos[num].completed);
    console.log(todos)
  }


  return (
    <div className="App">
      <h1 className='mt-3 mb-3'>MyTodoList</h1>
      <TodoForm value={input} submit={handleSubmit} change={handleChange}/>
      <TodoList todoList={todos} deleteTodo={deleteTodo} completed={changeCompleted}/>
    </div>
  );
}

export default App;
