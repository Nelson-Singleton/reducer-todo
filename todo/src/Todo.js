import React from 'react'
import {initialState, reducer} from './reducers/reducer'
import { useState, useReducer } from "react";


function Todo(props){

    return (
        <div onClick = {() => props.dispatch({ type: "TOGGLE_COMPLETED", payload: props.item.id })}>
            <h1>{props.item.item}</h1>
            
        
        </div>
    )
        
    
}

export default Todo