import LoginForm from "@/components/auth/LoginForm"
import { RootState } from "@/state/store"
import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router"

const Auth = () => {
  const isAuthenticated = useSelector((state: RootState) => state.userState.isAuthenticated)
  const navigate = useNavigate()
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <LoginForm />
      </div>
    </div>
  )
}

export default Auth
