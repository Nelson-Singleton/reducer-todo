export const initialState = {
    todos: [{
        item: 'Learn about reducers',
        completed: false,
        id: new Date() 
    }]
}

export const reducer = (state, action) => {
    switch (action.type){

        case "UPDATE_TODO": 
        return {
            ...state, //return current state array 
            todos: [...state.todos, //return a copy of current todos array, but adds a new object
            
            //new object
            { 
            item: action.payload,
            completed: false,
            id: new Date()
            }]
        }
        

        case "UPDATE_COMPLETED":
            // return {
            //     ...state,
            //      completed: !state.completed,
            // } 

            return {
                todos: state.todos.map(todo => {
                    todo.completed = !todo.completed    
                })
            }
            
        default:
            return state
    }
}