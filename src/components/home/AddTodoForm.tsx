import priorities, { Priority } from "@/lib/priorities"
import { Input } from "../ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "@/state/store"
import { addTodo } from "@/state/todos/todosSlice"
import { Activity } from "@/lib/activity"

const AddTodoForm = () => {
  const [todoTitle, setTodoTitle] = useState("")
  const [todoPriority, setTodoPriority] = useState<Priority>("medium")
  const [todoActivity, setTodoActivity] = useState<Activity>("indoor")
  const dispatch = useDispatch<AppDispatch>()

  const submitTodo = () => {
    dispatch(addTodo({
      priority: todoPriority,
      title: todoTitle,
      completed: false,
      activity: todoActivity,
    }))
    setTodoTitle("")
    setTodoPriority("medium")
    setTodoActivity("indoor")
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg md:text-xl text-center">Todo Application</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Input
          placeholder="Add a new task..."
          className="flex-1"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitTodo()
            }
          }}
        />
        <div className="flex gap-2">
          <Select value={todoActivity} onValueChange={(value) => setTodoActivity(value as Activity)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Activity" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="indoor">Indoor</SelectItem>
              <SelectItem value="outdoor">Outdoor</SelectItem>
            </SelectContent>
          </Select>
          <Select value={todoPriority} onValueChange={(val) => setTodoPriority(val as Priority)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Priority" />
            </SelectTrigger>
            <SelectContent>
              {
                priorities.map(priority => <SelectItem key={priority.value} value={priority.value}>{priority.label}</SelectItem>)
              }
            </SelectContent>
          </Select>
        </div>
        <Button onClick={submitTodo}  className="cursor-pointer ">
          Add Todo
        </Button>
      </CardContent>
    </Card>
  )
}

export default AddTodoForm
