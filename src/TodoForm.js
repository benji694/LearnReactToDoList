import React from 'react';
function TodoForm(props) {
    
    return (
      <div>
          <input value={props.value} type='text' name='todo' onChange={props.change} autoComplete='off'/>
          <button type='submit' onClick={props.submit}>ADD</button>
      </div>
    );
  }
  
  export default TodoForm;