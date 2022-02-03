import React from "react";
import {EditableSpan} from "./components/EditableSpan";

type TdlHeadPropsType = {
    title: string
    toDoListId: string
    deleteToDoList: (toDoListId: string) => void
    callBack: (toDoListId: string, title: string) => void
}

export const TdlHead:React.FC<TdlHeadPropsType> = ({toDoListId ,title, deleteToDoList, ...props}) => {

    const updateToDoListTitle = (title: string) => {
        props.callBack(toDoListId, title)
    }

    return <div className={'tdl_head'}>
        <h3>
            <EditableSpan title={title} callBack={updateToDoListTitle}/>
        </h3>
        <button onClick={() => deleteToDoList(toDoListId)}>x</button>
    </div>
}