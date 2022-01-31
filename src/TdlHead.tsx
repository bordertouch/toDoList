import React from "react";

type TdlHeadPropsType = {
    title: string
    toDoListId: string
    deleteToDoList: (toDoListId: string) => void
}

export const TdlHead:React.FC<TdlHeadPropsType> = ({toDoListId ,title, deleteToDoList}) => {

    return <div className={'tdl_head'}>
        <h3>{title}</h3>
        <button onClick={() => deleteToDoList(toDoListId)}>x</button>
    </div>
}