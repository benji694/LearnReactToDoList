import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
function TodoForm(props) {
    
    return (
      <div className="input-group mb-3">
          <input className='form-control' value={props.value} type='text' name='todo' onChange={props.change} autoComplete='off' placeholder='Add a todo...'/>
          <button className='input-group-text' id='basic-addon2' type='submit' onClick={props.submit}>ADD</button>
      </div>
    );
  }
  
  export default TodoForm;