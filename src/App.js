import "./App.css";
import React from "react";
import { useState } from "react";
import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import TodoFilters from "./TodoFilters";

function App() {
  const [todos, setTodos] = useState([]);
  const [general, setGeneral] = useState([]);
  const [identity, setIdentity] = useState(0);
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = () => {
    const element = { valeur: input, id: identity, completed: false };
    setTodos([...todos, element]);
    setGeneral([...general, element]);
    setIdentity(identity + 1);
    setInput("");
  };
  const deleteTodo = (num) => {
    setTodos(
      todos.filter((e) => {
        return e.id !== num;
      })
    );
  };
  const changeCompleted = (num) => {
    todos[num].completed = !todos[num].completed;
    console.log(todos);
  };
  const changeFilters = (filter) => {
    if (filter === "todo") {
      setTodos(
        general.filter((e) => {
          return !e.completed;
        })
      );
    } else if (filter === "done") {
      setTodos(
        general.filter((e) => {
          return e.completed;
        })
      );
    } else if (filter === "all") {
      setTodos(general);
    }
  };

  return (
    <div className="App ">
      <TodoForm value={input} submit={handleSubmit} change={handleChange} />
      <TodoList
        todoList={todos}
        deleteTodo={deleteTodo}
        completed={changeCompleted}
      />
      <TodoFilters changeFilter={changeFilters} />
    </div>
  );
}

export default App;
