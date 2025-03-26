import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  isAuthenticated: boolean
  username: string
}

const loadAuthState = (): boolean => {
  const authStatus = localStorage.getItem("isAuthenticated");
  return authStatus ? JSON.parse(authStatus) : false
}
const loadUsername = (): string => {
  const username = localStorage.getItem("username");
  return username ? JSON.parse(username) : ""
}

const initialState: IUser = {
  isAuthenticated: loadAuthState(),
  username: loadUsername()
}

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.isAuthenticated = true
      state.username = action.payload
      localStorage.setItem("isAuthenticated", JSON.stringify(state.isAuthenticated));
      localStorage.setItem("username", JSON.stringify(state.username));
    },
    logout: (state) => {
      state.isAuthenticated = false
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("username");
    }
  }
})

export const { logout, login } = userSlice.actions
export default userSlice.reducer
