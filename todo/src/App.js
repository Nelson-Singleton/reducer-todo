import React, { useState, useReducer } from "react";
import {initialState, reducer} from './reducers/reducer'
import './App.css';


const Todo = () => {
  
} 

function App() {
  return (
    <div className="App">
      {initialState.item}
    </div>
  );
}

export default App;
