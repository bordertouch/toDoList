import React from "react";
import {EditableSpan} from "./components/EditableSpan";
import {IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

type TdlHeadPropsType = {
    title: string
    toDoListId: string
    deleteToDoList: (toDoListId: string) => void
    callBack: (toDoListId: string, title: string) => void
}

function DeleteIcon() {
    return null;
}

export const TdlHead:React.FC<TdlHeadPropsType> = ({toDoListId ,title, deleteToDoList, ...props}) => {

    const updateToDoListTitle = (title: string) => {
        props.callBack(toDoListId, title)
    }

    return <div className={'tdl_head'}>
        <h3>
            <EditableSpan title={title} callBack={updateToDoListTitle}/>
        </h3>
        <IconButton aria-label="delete" onClick={() => deleteToDoList(toDoListId)} >
            <Delete />
        </IconButton>
    </div>
}