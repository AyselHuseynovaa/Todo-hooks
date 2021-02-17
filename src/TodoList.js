import React, {useContext} from 'react';
import List from "@material-ui/core/List";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Todo from "./Todo";
import {DispatchContext, TodosContext } from "./contexts/TodosContext";


export default function TodoList() {
    const state=useContext(TodosContext)
    const dispatch=useContext(DispatchContext)

    return (
        <Paper>
            {state.length ?
                <List>
                    {
                        state.map((todo, idx) => (
                            <>
                                <Todo
                                  
                                    {...todo}
                                    // task={todo.task}
                                    // key={todo.id}
                                    // completed={todo.completed}
                                    // id={todo.id}
                                />
                                {idx < state.length - 1 && <Divider/>}
                            </>
                        ))
                    }
                </List>
                : null
            }
        </Paper>
    )
}