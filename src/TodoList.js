import React from 'react';
function TodoList(props) {
    return (
      <ul className='list-group'>
          {props.todoList.map((e) => {return <li className='list-group-item d-flex justify-content-between' key={e.id}>
            <span>{e.valeur}</span>
            <button className='btn btn-dark' onClick={() => props.deleteTodo(e.id)}>del</button>
          </li>})}
      </ul>
    );
  }
  export default TodoList;