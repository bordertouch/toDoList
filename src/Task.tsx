import React, {ChangeEvent, useEffect} from "react";
import {TaskType} from "./App";
import {EditableSpan} from "./components/EditableSpan";

type TaskPropsType = {
    task: TaskType
    toDoListId: string
    removeTask: (taskId: string, toDoListId: string) => void
    changeTaskStatus: (taskId: string, isDone: boolean, toDoListId: string) => void
    updateTaskTitle: (toDoListId: string, taskId: string, title: string) => void
}

export const Task: React.FC<TaskPropsType> = ({toDoListId, removeTask, changeTaskStatus, task, ...props}) => {

    useEffect(()=> {
        console.log(task)
    },[task.title])

    const onChangeCheckboxHandler = (e: ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus(task.id, e.currentTarget.checked, toDoListId)
    }

    const removeHandler = () => removeTask(task.id, toDoListId)

    const updateTaskTitle = (title: string) => {
        props.updateTaskTitle(toDoListId, task.id, title)
    }

    return <li key={task.id} className={task.isDone ? "is-done" : ''}>
        <input type="checkbox" onChange={onChangeCheckboxHandler} checked={task.isDone}/>
        {/*<span>{task.title}</span>*/}
        <EditableSpan title={task.title} callBack={updateTaskTitle}/>
        <button onClick={removeHandler}>x</button>
    </li>
}