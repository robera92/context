
const TodoReducer = (state, action) =>{

    switch(action.type){
        case "add-task":
            return {
                ...state,
                tasks: [...state.tasks, action.payload]
            }
            case "open-form":
            return {
                ...state,
                isOpen: action.payload
            }
            case "delete-task":
            const updatedTasks = state.tasks.filter(item => item.id !== action.payload);
            return {
                ...state,
                 tasks: updatedTasks
            }
        default:
            return state;
    }
}

export default TodoReducer;