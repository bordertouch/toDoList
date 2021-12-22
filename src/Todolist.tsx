import React from 'react';
import {FilterValuesType, TaskType} from './App';
import './App.css'
import {Task} from "./Task";
import {FilterButton} from "./FilterButton";
import {Input} from "./Input";


type PropsType = {
    toDoListId: string
    title: string
    filter: FilterValuesType
    tasks: Array<TaskType>
    removeTask: (taskId: string, toDoListId: string) => void
    changeFilter: (value: FilterValuesType, toDoListId: string) => void
    changeStatus: (taskId: string, isDone: boolean, toDoListId: string) => void
    addTask: (title: string, toDoListId: string) => void
}


export function Todolist(props: PropsType) {


    let tasksForTodolist = props.tasks
    if (props.filter === "active") {
        tasksForTodolist = props.tasks.filter(t => !t.isDone); //[]
    }
    if (props.filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone);
    }


    return <div>
        <h3>{props.title}</h3>
        <Input toDoListId={props.toDoListId} addTask={props.addTask}/>
            <ul>
            {
                tasksForTodolist.map(t => {
                    return <Task
                        toDoListId={props.toDoListId}
                        removeTask={props.removeTask}
                        changeStatus={props.changeStatus}
                        task={t}/>})
                }
            </ul>
        <div>
            <FilterButton toDoListId={props.toDoListId} name={'all'} filter={props.filter} changeFilter={props.changeFilter}/>
            <FilterButton toDoListId={props.toDoListId} name={'active'} filter={props.filter} changeFilter={props.changeFilter}/>
            <FilterButton toDoListId={props.toDoListId} name={'completed'} filter={props.filter} changeFilter={props.changeFilter}/>
        </div>
    </div>
}