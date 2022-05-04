import React, {ChangeEvent, KeyboardEvent, useState} from "react";

type ErrorType = '' | 'Title could not be empty!' | 'Title is too long!'
type InputPropsType = {
    addItem: (title: string) => void
}
export const AddItemForm: React.FC<InputPropsType> = ({addItem}) => {

    const [newTitle, setNewTitle] = useState('')
    const [error, setError] = useState<ErrorType>('')

    const addHandler = () => {
        if (newTitle.trim() !== '' && newTitle.trim().length <= 50) {
            addItem(newTitle)
            setNewTitle('')
        } else if (newTitle.trim().length > 50) {
            setError('Title is too long!')
            setNewTitle('')
        } else {
            setError('Title could not be empty!')
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
            setError('Title could not be empty!')
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