import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from "uuid";

export type FilterValuesType = "all" | "active" | "completed";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type ToDoListType = {
    id: string
    title: string
    filter: FilterValuesType
}

type AllTasksType = {
    [key: string]: TaskType[]
}

function App() {

    const toDoListID_1 = v1()
    const toDoListID_2 = v1()

    const [toDoLists, setToDoLists] = useState<ToDoListType[]>(
        [
            {id: toDoListID_1, title: 'What to learn', filter: "all"},
            {id: toDoListID_2, title: 'What to buy', filter: "all"}
        ]
    )

    const [allTasks, setAllTasks] = useState<AllTasksType>({
        [toDoListID_1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false}
        ],
        [toDoListID_2]: [
            {id: v1(), title: "Flat", isDone: false},
            {id: v1(), title: "Car", isDone: true},
            {id: v1(), title: "Bitcoin", isDone: false}
        ]
    })


    // const [tasks, setTasks] = useState<Array<TaskType>>([
    //     {id: v1(), title: "HTML&CSS", isDone: true},
    //     {id: v1(), title: "JS", isDone: true},
    //     {id: v1(), title: "ReactJS", isDone: false},
    //     {id: v1(), title: "Rest API", isDone: false},
    //     {id: v1(), title: "GraphQL", isDone: false},
    // ]);
    //
    // const [filter, setFilter] = useState<FilterValuesType>("all");


    const removeTask = (id: string, toDoListId: string) => {
        // let filteredTasks = tasks.filter(t => t.id != id);
        // setTasks(filteredTasks);
        setAllTasks({...allTasks, [toDoListId]: allTasks[toDoListId].filter(t => t.id != id)})
    }
    const addTask = (title: string, toDoListId: string) => {
        // let newTask = {id: v1(), title: title, isDone: false}
        // setTasks([newTask, ...tasks])
        setAllTasks({...allTasks, [toDoListId]: [{id: v1(), title: title, isDone: false}, ...allTasks[toDoListId]]})
    }
    const changeStatus = (taskId: string, isDone: boolean, toDoListId: string) => {
        // const changedTask = tasks.find(t => t.id === taskId)
        // if (changedTask) {
        //     changedTask.isDone = isDone
        // }
        // setTasks([...tasks])
        setAllTasks({...allTasks, [toDoListId]: allTasks[toDoListId].map(t => t.id === taskId ? {...t, isDone: isDone} : t)})

    }
    const changeFilter = (value: FilterValuesType, toDoListId: string) => {
        setToDoLists(toDoLists.map(tl => tl.id === toDoListId ? {...tl, filter: value} : tl));
    }

    // const getFilteredTasks = (): {id: string, isDone: boolean, title: string}[] => {
    //
    //     if (filter === "active") {
    //         return tasks.filter(t => !t.isDone); //[]
    //     }
    //     if (filter === "completed") {
    //         return tasks.filter(t => t.isDone);
    //     }
    //
    //     return tasks
    // }


    return (
        <div className="App">
            {toDoLists.map((tl) => {

                // let tasksForTodolist = allTasks[tl.id];
                // if (tl.filter === "active") {
                //     tasksForTodolist = allTasks[tl.id].filter(t => !t.isDone); //[]
                // }
                // if (tl.filter === "completed") {
                //     tasksForTodolist = allTasks[tl.id].filter(t => t.isDone);
                // }

                return <Todolist key={tl.id}
                                 toDoListId={tl.id}
                                 title={tl.title}
                                 tasks={allTasks[tl.id]}
                                 removeTask={removeTask}
                                 changeFilter={changeFilter}
                                 changeStatus={changeStatus}
                                 addTask={addTask}
                                 filter={tl.filter}
                />
            })}
        </div>
    );
}

export default App;

