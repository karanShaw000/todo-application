import getPriorityColor from "@/lib/getPriorityColor"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { Trash2 } from "lucide-react"
import { Checkbox } from "../ui/checkbox"
import { ITodo, removeTodo, toggleTodoCompletion } from "@/state/todos/todosSlice"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "@/state/store"
import { fetchWeather } from "@/state/weather/weatherSlice"
import { useEffect } from "react"

const Todo = ({ id, priority, completed, title, activity }: ITodo) => {
  const dispatch = useDispatch<AppDispatch>()
  const weatherCondition = useSelector((state: RootState) => state.weatherState.status)
  const loading = useSelector((state: RootState) => state.weatherState.loading)
  const error = useSelector((state: RootState) => state.weatherState.error)

  useEffect(() => {
    if (activity === "outdoor" && weatherCondition === null) {
      dispatch(fetchWeather());
    }
  }, [dispatch, weatherCondition]);

  return (
    <div
      className={cn(
        "flex items-center justify-between p-3 rounded-lg border",
        completed && "bg-muted/50",
      )}
    >
      <div className="flex items-center gap-3">
        <Checkbox checked={completed} onCheckedChange={() => dispatch(toggleTodoCompletion(id))} />
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <div className={cn("w-3 h-3 rounded-full", getPriorityColor(priority))} />
            <span className={cn("font-medium", completed && "line-through text-muted-foreground")}>
              {title}
            </span>
          </div>
          <div className="flex flex-col gap-2 text-xs text-muted-foreground">
            <span className="capitalize">{activity}</span>
            {
              activity === "outdoor" && !error && (<span className="capitalize">Weather: {loading ? "Loading..." : `${weatherCondition}`}</span>)
            }
            {
              activity === "outdoor" && error && (<span className="capitalize">No weather report</span>)
            }
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => dispatch(removeTodo(id))}
          className="h-8 w-8 text-muted-foreground hover:text-destructive"
        >
          <Trash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

export default Todo
