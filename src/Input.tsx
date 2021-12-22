import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type ErrorType = '' | 'Task title could not be empty!'

type InputPropsType = {
    toDoListId: string
    addTask: (title: string, toDoListId: string) => void
}

export const Input: React.FC<InputPropsType> = ({toDoListId, addTask}) => {

    const [newTaskTitle, setTaskTitle] = useState('')
    const [error, setError] = useState<ErrorType>('')

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }

    const addPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        console.log(e.key)
        if (e.key === 'Enter' && newTaskTitle.trim() !== '') {
            addTask(newTaskTitle, toDoListId)
            setTaskTitle('')
        } else if (e.key === 'Enter' && newTaskTitle.trim() === '') {
            setError('Task title could not be empty!')
        }
    }

    const addHandler = () => {
        if (newTaskTitle.trim() !== '') {
            addTask(newTaskTitle, toDoListId)
            setTaskTitle('')
        } else {
            setError('Task title could not be empty!')
        }
    }

    return (
        <div>
            <input value={newTaskTitle}
                   onChange={onChangeInputHandler}
                   onKeyPress={addPressHandler}
                   className={error ? 'error' : ''}
            />
            <button onClick={addHandler}>+</button>
            {error && <div className={'error-message'}>
                {error}
            </div>}
        </div>
    )
}