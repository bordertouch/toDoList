import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type ErrorType = '' | 'Task title could not be empty!'
type InputPropsType = {
    toDoListId: string
    addItem: (title: string, toDoListId: string) => void
}
export const AddItemForm: React.FC<InputPropsType> = ({toDoListId, addItem}) => {

    const [newTaskTitle, setTaskTitle] = useState('')
    const [error, setError] = useState<ErrorType>('')

    const addHandler = () => {
        if (newTaskTitle.trim() !== '') {
            addItem(newTaskTitle, toDoListId)
            setTaskTitle('')
        } else {
            setError('Task title could not be empty!')
        }
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }

    const addPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        console.log(e.key)
        if (e.key === 'Enter' && newTaskTitle.trim() !== '') {
            addItem(newTaskTitle, toDoListId)
            setTaskTitle('')
        } else if (e.key === 'Enter' && newTaskTitle.trim() === '') {
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