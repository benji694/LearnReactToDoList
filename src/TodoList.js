import React from 'react';
function TodoList(props) {
    return (
      <ul>
          {props.todoList.map((e) => {return <li key={e.id}><span>{e.valeur}</span><button onClick={() => props.deleteTodo(e.id)}>del</button></li>})}
      </ul>
    );
  }
  export default TodoList;