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
            { //new object. Payload is what's currently in state when dispatch is called.
            item: action.payload,
            completed: false,
            id: new Date()
            }]
        }
        

        case "UPDATE_COMPLETED":
            return {
                ...state,
                // todos: state.todos.map(someTodo => {
                //     if (action.payload === someTodo.id){
                //         return {
                //             ...someTodo,
                //             completed: !someTodo.completed
                //         }
                //     }
                // })

                 completed: !state.completed,
            }
        default:
            return state
    }
}