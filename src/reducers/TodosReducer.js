import uuid from "uuid/v4";


export default function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: uuid(), task: action.task, completed: false }];

    case "REMOVE":
      return state.filter((todo) => todo.id !== action.id);
      case "TOGGLE":
          return  state.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
          case "EDIT":
              return state.map(todo => todo.id === action.id ? {...todo, task: action.task} : todo)
              default :
              return state
  }
}

// todos,


// toggleTodo: todoID => {
//     const updateTodoList = todos.map(todo => todo.id === todoID ? {...todo, completed: !todo.completed} : todo)
//     setTodos(updateTodoList)
// },

// editTodo: (todoID, newTask) => {
//     const updateTodoList = todos.map(todo => todo.id === todoID ? {...todo, task: newTask} : todo)
//     setTodos(updateTodoList)
// }
