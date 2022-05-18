import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
function TodoFilters(props) {
  return (
    <div
      className="btn-group fixed-bottom w-10"
      role="group"
      aria-label="Basic example"
    >
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => {
          props.changeFilter("all");
        }}
      >
        All
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => {
          props.changeFilter("todo");
        }}
      >
        Todo
      </button>
      <button
        type="button"
        className="btn btn-dark"
        onClick={() => {
          props.changeFilter("done");
        }}
      >
        Done
      </button>
    </div>
  );
}

export default TodoFilters;
