import React, { useContext } from "react";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import useInputState from "./hooks/useInputState";
import {DispatchContext, TodosContext } from "./contexts/TodosContext";

export default function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const  dispatch= useContext(DispatchContext);

  return (
    <Paper
      style={{
        margin: "1rem 0",
        padding: "0 1rem",
      }}
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({type:"ADD", task:value});
          reset();
        }}
      >
        <TextField
          margin="normal"
          labels="Add New Todo"
          fullWidth
          value={value}
          onChange={handleChange}
        />
      </form>
    </Paper>
  );
}
