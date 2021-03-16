 import React from 'react';
 import TodoListItem from '../todo-list-item';
 import './todo-list.css';

 const TodoList = ({todos, onDeleted}) => {

   const elemetns = todos.map((item)=>{

    const {id, ...itemProps} = item;
    return (
      <li key = {id} className= "list-group-item todo-list">
        <TodoListItem {...itemProps}
        onDeleted={()=>onDeleted(id)}
        />
      </li>)
   })

    return (
      <ul className ="list-group">
        {elemetns}
      </ul>
    );
  }

export default TodoList;
