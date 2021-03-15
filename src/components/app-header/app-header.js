import React from 'react'
import './app-header.css'


const AppHeader = ({toDo, done}) => {
    return (
    <div className= "app-header">
    <h1>My ToDo List</h1>
    <h2>{toDo} more todo, {done} things done</h2>
    </div>)
  }
export default AppHeader;