import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function TodoForm(props) {
  return (
    <header className="pt-3">
      <h1 className="mb-3 text-white">MyTodoList</h1>
      <form action="#" className="input-group mb-3">
        <input
          className="form-control"
          value={props.value}
          type="text"
          name="todo"
          onChange={props.change}
          autoComplete="off"
          placeholder="Add a todo..."
        />
        <button
          className="input-group-text"
          id="basic-addon2 button-submit"
          type="submit"
          onClick={props.submit}
        >
          ADD
        </button>
      </form>
    </header>
  );
}

export default TodoForm;
