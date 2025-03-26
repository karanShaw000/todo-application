import LogoutButton from "@/components/auth/LogoutButton"
import AddTodoForm from "@/components/home/AddTodoForm"
import DisplayTodos from "@/components/home/DisplayTodos"
import { RootState } from "@/state/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

function Home() {
  const isAuthenticated = useSelector((state: RootState) => state.userState.isAuthenticated)
  const navigate = useNavigate()
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/auth')
    }
  }, [isAuthenticated])

  return (
    <div className="flex min-h-svh w-full items-start justify-center p-6 md:p-10">
      <div className="w-full max-w-lg space-y-4">
        <LogoutButton />
        <AddTodoForm />
        <DisplayTodos />
      </div>
    </div>
  )
}

export default Home
