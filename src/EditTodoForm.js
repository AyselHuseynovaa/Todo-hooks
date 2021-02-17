import React, {useContext} from 'react';
import TextField from '@material-ui/core/TextField';
import {DispatchContext, TodosContext } from "./contexts/TodosContext";
import useInputState from "./hooks/useInputState";

export default function EditTodoForm({id, task, editTodo, toggleTodo}) {
    const [value, handleChange, reset] = useInputState(task)
  const  dispatch= useContext(DispatchContext);
    return (
        <form onSubmit={(e) => {
            e.preventDefault()
           dispatch({type: "EDIT", id:id , task:value })
            reset();
            toggleTodo()
        }}
              style={{marginLeft: '1rem', width: "50%"}}
        >
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    )
}