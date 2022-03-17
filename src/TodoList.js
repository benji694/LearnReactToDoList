import React from 'react';
function TodoList(props) {
    return (
      <ul className='list-group'>
          {props.todoList.map((e) => {return <li className='list-group-item d-flex align-items-center justify-content-between bg-light' key={e.id}>
            <span>{e.valeur}</span>
            <div className='d-flex align-items-center'>
              <button className='btn btn-outline-dark' onClick={() => props.completed(e.id)}>{props.btnTodo}</button>
              <button className='btn btn-dark' onClick={() => props.deleteTodo(e.id)}>del</button>
            </div>
          </li>})}
      </ul>
    );
  }
  export default TodoList;