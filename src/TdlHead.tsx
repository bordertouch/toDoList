import React from "react";
import {EditableSpan} from "./components/EditableSpan";
import IconButton from "@mui/material/IconButton";
import {Delete} from "@mui/icons-material";


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

    return <div className={'tdl_head'} style={{display: 'flex'}}>
        <h3>
            <EditableSpan title={title} callBack={updateToDoListTitle}/>
        </h3>
        <IconButton aria-label="delete" onClick={() => deleteToDoList(toDoListId)} >
            <Delete />
        </IconButton>
    </div>
}