export const addNewTask = (data) => {
    return {
        type: 'add-task',
        payload: data
    }
}

export const deleteTask = (id) => {
    return {
        type: 'delete-task',
        payload: id
    }
}

export const openForm = (status) => {
    return {
        type: 'open-form',
        payload: status
    }
}