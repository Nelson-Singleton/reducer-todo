import React from 'react'
import {initialState, reducer} from './reducers/reducer'
import { useState, useReducer } from "react";
import Todo from './Todo'

function TodoList(props){
const [state, dispatch] = useReducer(reducer, initialState)


    return (
        <div>           
            {
                props.state.todos.map( item => {
                    return <Todo key = {item.id} item = {item} dispatch = {dispatch} />
                        // <div 
                        //     onClick = {() => 
                        //     dispatch ({type: "UPDATE_COMPLETED", payload: someTodo.id})
                        // }>     
                        // </div>         
        
                })
            }
            

            
            
        
        </div>
    )
        
    
}

export default TodoList