import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "./todos/todosSlice"
import userReducer from "./user/userSlice"
import weatherState from "./weather/weatherSlice"

export const store = configureStore({
  reducer: {
    todosState: todosReducer,
    userState: userReducer,
    weatherState: weatherState
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
