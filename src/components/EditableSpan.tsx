import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    callBack: (title: string) => void
}

export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {

    const [editionMode, setEditionMode] = useState(false)
    const [title, setTitle] = useState(props.title)

    const onDoubleClickHandler = () => {
        setEditionMode(true)
    }

    const onBlurHandler = () => {
        setEditionMode(false)
        props.callBack(title)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        <span>
            {editionMode ? <input value={title} onBlur={onBlurHandler} onChange={onChangeHandler} autoFocus /> :
                <span onDoubleClick={onDoubleClickHandler}>{title}</span>}
        </span>
    )
}