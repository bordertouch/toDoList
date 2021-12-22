import React, {ChangeEvent} from "react";
import {TaskType} from "./App";

type TaskPropsType = {
    task: TaskType
    toDoListId: string
    removeTask: (taskId: string, toDoListId: string) => void
    changeStatus: (taskId: string, isDone: boolean, toDoListId: string) => void
}

export const Task:React.FC<TaskPropsType> = ({toDoListId ,removeTask, changeStatus, task}) => {

    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeStatus(task.id, e.currentTarget.checked, toDoListId)
    }

    const removeHandler = () => removeTask(task.id, toDoListId)

    return <li key={task.id} className={task.isDone ? "is-done" : ''}>
        <input type="checkbox" onChange={onChangeCheckboxHandler} checked={task.isDone}/>
        <span>{task.title}</span>
        <button onClick={ removeHandler }>x</button>
    </li>
}