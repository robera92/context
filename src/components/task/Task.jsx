import { useGlobalContext } from "../../context/TasksContext";

const Task = ({task}) => {

    const {handleDeleteTask} = useGlobalContext();

    return (
        <li className="list-group-item d-flex justify-content-between">
            <span>{task.title}: {task.desc}</span>
            <button type="btn" className="btn btn-danger" onClick={ ()=> { handleDeleteTask(task.id) } }>Remove</button>
        </li>
    )

}

export default Task