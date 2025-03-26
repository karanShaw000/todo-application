import { AppDispatch, RootState } from "@/state/store"
import { useDispatch, useSelector } from "react-redux"
import { Button } from "../ui/button"
import { logout } from "@/state/user/userSlice"
import { resetTodos } from "@/state/todos/todosSlice"

export default function LogoutButton() {
  const username = useSelector((state: RootState) => state.userState.username)
  const dispatch = useDispatch<AppDispatch>()
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2 className="text-2xl">{`Welcome ${username}`}</h2>
      <Button
        className="cursor-pointer hover:bg-destructive hover:text-white"
        onClick={() => {
          dispatch(logout())
          dispatch(resetTodos())
        }}>
        Logout</Button>
    </div>
  )
}
