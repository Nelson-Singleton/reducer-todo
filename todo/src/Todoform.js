
import React from 'react'

const Todoform = props => {
    return (
        <div><h1>Add Todo</h1>
            <form>
                <input 
                type = "text"
                name = "currentTodo"
                value = {props.currentTodo} 
                onChange = {props.handleChanges}
                />
                
                <button onClick = {props.updateTodo}>Add</button>
                 <button>Clear</button>
                    
            </form>
        </div>
    )
}

export default Todoform