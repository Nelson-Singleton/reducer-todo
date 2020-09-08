import React, { useState, useReducer } from "react";
import {initialState, reducer} from './reducers/reducer'
import './App.css';
import TodoList from './Todolist'


const Todo = () => {

} 

function App() {
  const [currentTodo, setCurrentTodo] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState)
  

  const handleChanges = e => {
    setCurrentTodo(e.target.value)

  }

  const updateTodo = () => {
    dispatch({ type: "UPDATE_TODO", payload: currentTodo})
  }

  return (
    <div className="App">
      <h1>Add to do:</h1>
      <input
      type = "text"
      name = "currentTodo"
      value = {currentTodo} 
      onChange = {handleChanges}
      />
      <button onClick = {updateTodo}>Add</button>
      <button>Clear</button>
      
      <h2>To do list</h2>
      {/* <TodoList 
      todos = {state.todos}
      /> */}

    </div>
  );
}

export default App;
