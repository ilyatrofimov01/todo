import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import TodoList from '../todo-list';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';
import './app.css'

export default class App extends Component {

  createTodoItem=(label) =>{
      return  { 
        label, 
        important: false, 
        done: false,
        id: this.maxId++
      };
   }
  maxId = 100;
  
  state = {
     todoData : [
      this.createTodoItem ('Drink Coffee'),
       this.createTodoItem ('Make Awsome App'),
       this.createTodoItem ('Have a lunch')
      ],
      term : '',
    }

  findIdx = (arr,id) => {
    return arr.findIndex((el)=> el.id === id);
   }
   deleteItem =(id) =>{
    this.setState(({todoData})=>{

      const idx = this.findIdx(todoData,id);

      const newArray = [...todoData.slice (0,idx),...todoData.slice(idx+1)];


      return {
        todoData: newArray
      }

    });
   }
   addItem = (text) =>{
    const newItem = this.createTodoItem (text);
    this.setState(( { todoData } )=>{
      const newArr = [
        ...todoData,
        newItem];

      return{
        todoData: newArr
      }
    });
   }

   togglePropperty(arr, id, propName) {
    const idx = this.findIdx(arr,id);
    const oldItem = arr[idx];
    const newItem = {...oldItem, [propName]: !oldItem[propName]}

    return [...arr.slice(0,idx), newItem, ...arr.slice(idx + 1)];
    

   }
   onToggleDone = (id) => {
    this.setState (( {todoData })=>{
      return{
        todoData : this.togglePropperty(todoData,id,'done')
      }

    })
  }
  onToggleImportant = (id) => {
    this.setState (({ todoData } )=>{
     return {
      todoData :  this.togglePropperty(todoData,id,'important')
     }
    })
  }
  search (items,term) {
    if (term.length === 0){
      return items;
    }

      return items.filter((item) => {
        return item.label.toLowerCase()
        .indexOf(term.toLowerCase()) > 1;
      });

  }
  onSearchChange = (term) =>{
    this.setState({term});
  };

  render(){
    const {todoData,term} = this.state;
    const visibleItems = this.search(todoData,term);
    const doneCount = todoData.filter((el)=>el.done).length;
    const todoCount = todoData.length - doneCount;
    return (
      <div className ="todo-app">
        <AppHeader toDo ={doneCount} done ={todoCount} />
          <div className="top-panel d-flex">
            <SearchPanel  
              onSearchChange = {this.onSearchChange}/>
            <ItemStatusFilter/>
          </div> 
        <TodoList 
        todos = {visibleItems} 
        onToggleDone = {this.onToggleDone}
        onToggleImportant = {this.onToggleImportant}
        onDeleted ={this.deleteItem}
        />
        <ItemAddForm 
        onItemAdded = {this.addItem}
        />
      </div>
    );
  }
  }