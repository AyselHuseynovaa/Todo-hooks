  
import React, {useContext,memo} from 'react';
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import useTooglegleState from "./hooks/useToggleState";
import {DispatchContext, TodosContext } from "./contexts/TodosContext";


import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import EditTodoForm from "./EditTodoForm";

function Todo({id, task, completed}) {
    const [isEditing, toggle] = useTooglegleState(false)
    const dispatch=useContext(DispatchContext)
    return (
        <ListItem>
            {
                isEditing
                    ? (<EditTodoForm
                        id={id}
                        dispatch={{ type:"EDIT" }}
                        task={task}
                        toggleTodo={toggle}
                      
                    />)
                    : (
                        <>
                            <Checkbox checked={completed} onClick={() => {
                                dispatch({type:"TOGGLE", id : id})
                            }}/>
                            <ListItemText style={{textDecoration: completed ? "line-through" : "none"}}>
                                {task}
                              
                            </ListItemText>
                            <ListItemSecondaryAction>
                                <IconButton aria-label="Delete">
                                    <DeleteIcon onClick={() => dispatch({type:"REMOVE" ,id:id})}/>
                                </IconButton>
                                <IconButton aria-label="Edit">
                                    <EditIcon onClick={toggle}/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </>
                    )
            }
        </ListItem>
    )
}
export default memo(Todo)