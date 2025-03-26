import { Activity } from "@/lib/activity"
import { Priority, priorityOrder } from "@/lib/priorities"
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit"

export interface ITodo {
  id: string
  priority: Priority
  activity: Activity
  completed: boolean
  title: string
}



interface ITodos {
  todos: ITodo[]
}


const loadTodos = (): ITodo[] => {
  const storedTodos = localStorage.getItem("todos");
  return storedTodos ? JSON.parse(storedTodos) : [];
}

const initialState: ITodos = {
  todos: loadTodos()
}

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<Omit<ITodo, "id">>) => {
      state.todos.push({
        id: nanoid(),
        priority: action.payload.priority,
        activity: action.payload.activity,
        completed: action.payload.completed,
        title: action.payload.title,
      })
      //sort the todo list by priority order from high to low
      state.todos.sort((todo1, todo2) => priorityOrder[todo2.priority] - priorityOrder[todo1.priority])
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter(todo => todo.id != action.payload)
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    toggleTodoCompletion: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.map(
        todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
      )
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },

    resetTodos: (state) => {
      state.todos = []
      localStorage.removeItem("todos")
    }
  },

})


export const { toggleTodoCompletion, addTodo, removeTodo, resetTodos } = todosSlice.actions

export default todosSlice.reducer;



