import { useContext, useReducer, createContext } from "react";
import TodoReducer from "../reducers/TodoReducer";
import { addNewTask, deleteTask, openForm } from "../actions/TodoActions";

const AppContext = createContext();

const initialState = {
    tasks: [
        {
            id:1,
            title: "Test 1",
            desc: "Test 1 desc"
        },
        {
            id:2,
            title: "Test 2",
            desc: "Test 2 desc"
        }
    ],
    isOpen: false
}


const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(TodoReducer, initialState);

    const newTask = (data) =>{
        dispatch(addNewTask(data))
    }

    const handleFormOpen = (status) =>{
        dispatch(openForm(status))
    }

    const handleDeleteTask = (id) =>{
        dispatch(deleteTask(id))
    }

    return(
        <AppContext.Provider value={
            {...state, newTask, handleDeleteTask, handleFormOpen}
        }>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {
    AppContext,
    AppProvider
}