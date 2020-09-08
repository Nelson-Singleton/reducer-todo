import React from 'react'
import {initialState, reducer} from './reducers/reducer'
import { useState, useReducer } from "react";
import Todo from './Todo'

function TodoList(props){


    


    return (
        <div>           
            {
                props.state.todos.map( someTodo => (
                                    
                        <div 
                            onClick = {props.updateCompleted}
                            key = {someTodo.id}
                            >                        
                            <p>{someTodo.item}</p>
                        </div>         
        
                 ))
            }
            

            
            
        
        </div>
    )
        
    
}

export default TodoList