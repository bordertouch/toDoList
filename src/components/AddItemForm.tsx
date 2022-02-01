import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type ErrorType = '' | 'Task title could not be empty!'
type InputPropsType = {
    addItem: (title: string) => void
}
export const AddItemForm: React.FC<InputPropsType> = ({addItem}) => {

    const [newTitle, setNewTitle] = useState('')
    const [error, setError] = useState<ErrorType>('')

    const addHandler = () => {
        if (newTitle.trim() !== '') {
            addItem(newTitle)
            setNewTitle('')
        } else {
            setError('Task title could not be empty!')
        }
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    const addPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError('')
        console.log(e.key)
        if (e.key === 'Enter' && newTitle.trim() !== '') {
            addItem(newTitle)
            setNewTitle('')
        } else if (e.key === 'Enter' && newTitle.trim() === '') {
            setError('Task title could not be empty!')
        }
    }

    return (
        <div>
            <input value={newTitle}
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