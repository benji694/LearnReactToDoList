import React from "react";
function TodoList(props) {
  return (
    <ul className="list-group">
      {props.todoList.map((e) => {
        return (
          <li
            className="list-group-item d-flex align-items-center justify-content-between bg-light"
            key={e.id}
          >
            <span>{e.valeur}</span>
            <div className="d-flex align-items-center">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  defaultChecked={e.completed ? true : false}
                  onChange={() => props.completed(e.id)}
                />
              </div>
              <button
                className="btn btn-dark"
                onClick={() => props.deleteTodo(e.id)}
              >
                del
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
export default TodoList;
