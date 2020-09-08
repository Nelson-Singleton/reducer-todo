import React, { useState, useReducer } from "react";
import {initialState, reducer} from './reducers/reducer'
import './App.css';


const Todo = () => {

} 

function App() {
  const [todo, SetTodo] = useState("")
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state, todo)

  const handleChanges = e => {
    SetTodo(e.target.value)

  }

  return (
    <div className="App">
      <h1>Add to do:</h1>
      <input
      type = "text"
      name = "todo"
      value = {todo} 
      onChange = {handleChanges}
      />
      <button>Add</button>
      <button>Clear</button>
      
      <h2>To do list</h2>
      {state.todos.item}
    </div>
  );
}

export default App;
