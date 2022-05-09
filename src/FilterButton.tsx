import React from "react";
import {FilterValuesType} from "./App";
import {Button} from "@material-ui/core";


type FilterButtonPropsType = {
    toDoListId: string
    name: FilterValuesType
    filter: FilterValuesType
    changeFilter: (value: FilterValuesType, toDoListId: string) => void
}

export const FilterButton: React.FC<FilterButtonPropsType> = ({name, toDoListId, filter,...props}) => {

    const changeFilter = (filter: FilterValuesType, toDoListId: string) => props.changeFilter(filter, toDoListId)

    return (
        <Button onClick={() =>{changeFilter(name, toDoListId)}}
                className={filter.toLowerCase() === name.toLowerCase() ? 'active-filter' : ''}
                variant={filter.toLowerCase() === name.toLowerCase() ? 'contained' : 'outlined'}
                color={'primary'}
        >{name[0].toUpperCase() + name.slice(1)}</Button>
    )

}