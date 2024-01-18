import Task from "../task/Task";
import { useGlobalContext } from "../../context/TasksContext";
import AddTask from "../addTask/AddTask";

const Tasks = () =>{

    const {tasks, isOpen, handleFormOpen} = useGlobalContext();

    return(
        <div className="container">
            <h2 className="m5 text-center">Tasks list</h2>
            <div className="m-3 text-center">
                <button type="button" className="btn btn-primary" onClick={ ()=>{handleFormOpen(!isOpen);}}>{isOpen ? 'Close form': 'Open form'}</button>
            </div>
            { isOpen ? (<AddTask/>): (
            <ul className="list-group">
                {tasks && tasks.map( (task)=>
                    <Task key={task.id} task={task}/>
                 )}
            </ul> ) }
        </div>
    )
}

export default Tasks;