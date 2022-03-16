import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState('');

  const handleChange = e =>{
    setInput(e.target.value);
  };

  let element = {id: Math.floor(Math.random()*10000), filter: 'todo', balise: <li><span>{input}</span> <button onClick={()=>{
    todo.splice(todo.indexOf(this));
  }}>delete</button></li>};
  return (
    <div className="App">
      <input value={input} type="text" placeholder='add a todo' name='text' onChange={handleChange}/>
      <button onClick={()=>{
        setTodo([...todo, element]);
        setInput('');
      }}>ADD</button>
      <ul>
        {todo.map((e)=>{return e.balise})}
      </ul>
      
    </div>
  );
}

export default App;
