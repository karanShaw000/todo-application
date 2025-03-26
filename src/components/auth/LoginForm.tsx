import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/state/user/userSlice"
import { AppDispatch } from "@/state/store"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router"

export default function LoginForm() {
  const [username, setUsername] = useState("")
  const [error, setError] = useState(false)
  const dispatch = useDispatch<AppDispatch>()
  const navigate = useNavigate()
  const loginHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (username.trim() === "") {
      setError(true)
      return
    }
    setError(false)
    setUsername("")
    dispatch(login(username))
    navigate("/")
  }
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your username below to login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={loginHandler}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-4">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  value={username}
                  onChange={(e) => {
                    if (e.target.value.trim() === "") {
                      setError(true)
                    } else {
                      setError(false)
                    }
                    setUsername(e.target.value)
                  }}
                  placeholder="Enter your username"
                  required
                />
                {error && <Label className="text-destructive">Username Required</Label>}
              </div>
              <Button type="submit" className="cursor-pointer w-full">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

