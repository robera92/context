import { useGlobalContext } from "../../context/TasksContext";
import {useId} from "react";

const AddTask = () => {

    const context = useGlobalContext();
    const id = useId(); 

    const handleSubmit = (e) => {
        e.preventDefault();

        let title = e.target.title.value;
        let desc = e.target.desc.value;
     
        const test = context.newTask({id: id, title: title, desc: desc});
        context.handleFormOpen(false);

    }

    return(
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-group">
                <input name="title" type="text" placeholder="Title" className="form-control"/>
            </div>
            <div className="form-group">
                <textarea type="text" name="desc" placeholder="Desc" className="form-control" ></textarea>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Add task</button>
            </div>
        </form>
    )

}

export default AddTask;