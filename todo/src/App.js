import React, { useState, useReducer } from "react";
import {initialState, reducer} from './reducers/reducer'
import './App.css';
import TodoList from './Todolist'
import Todoform from './Todoform'


const Todo = () => {

} 

function App() {
  const [currentTodo, setCurrentTodo] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState)
  

  const handleChanges = e => {
    e.preventDefault();
    setCurrentTodo(e.target.value)

  }

  const updateTodo = (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_TODO", payload: currentTodo})
  }

   const updateCompleted = (item) => {
     dispatch ({ type: "UPDATE_COMPLETED", payload: item})
   }

  return (
    <div className = "App">
      <Todoform 
      currentTodo = {currentTodo}
      handleChanges = {handleChanges}
      updateTodo = {updateTodo}
      />
           
      
      <TodoList 
      state = {state}
      updateCompleted = {updateCompleted}
      dispatch = {dispatch}
      />

      {/* {state.todos.map(someTodo => (
       <div> {someTodo.item} </div> 
      ))
        
      } */}

    </div>
  );
}

export default App;
