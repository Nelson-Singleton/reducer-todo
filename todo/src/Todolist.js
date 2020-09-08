import React from 'react'
import {initialState, reducer} from './reducers/reducer'
import { useState, useReducer } from "react";
import Todo from './Todo'

const TodoList = props => {
 //const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div>
            <h2>Current Todos:</h2>
                                   
            {props.state.todos.map( todo => {
                    return (<Todo 
                        key = {todo.id} 
                        todo = {todo} 
                        dispatch = {props.dispatch}
                        updateCompleted = {props.updateCompleted}
                        />)                             
        
                })
            }
        </div>  
    )
        
    
}

export default  TodoList