import React from 'react'
import {initialState, reducer} from './reducers/reducer'
import { useState, useReducer } from "react";


function Todo(props){

    return (
        <div>
            <h1>{props.state.todo}</h1>
            
        
        </div>)
        
    
}

export default Todo