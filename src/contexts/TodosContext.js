import React, { createContext, useReducer } from "react";
import useTodoState, { TodosState } from "../hooks/useTodoState";
import TodosReducer from "../reducers/TodosReducer";
import {useLocalStorageState} from "../hooks/useLocalStorageReducer"

const initialTodos = [{ id: 1, task: "Read a book", completed: true }];
export const TodosContext = createContext();
export const DispatchContext=createContext()

export function TodosProvider(props) {
  const [state, dispatch] = useLocalStorageState( "todos",TodosReducer,initialTodos);
  return (
    <TodosContext.Provider value={state}>
    <DispatchContext.Provider value={dispatch}>
    {props.children}
    </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}
