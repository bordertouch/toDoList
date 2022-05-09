import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

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
            <TextField id="outlined-basic"
                       label={'Title is required'}
                       variant="outlined"
                       value={newTitle}
                       size={'small'}
                       error={!!error}
                       onChange={onChangeInputHandler}
                       onKeyPress={addPressHandler}
                       helperText={error}
                // className={error ? 'error' : ''}

            />
            <IconButton onClick={addHandler}
                        color={'primary'}>
                <AddBox/>
            </IconButton>
            {/*{error && <div className={'error-message'}>*/}
            {/*    {error}*/}
            {/*</div>}*/}
        </div>
    );
}