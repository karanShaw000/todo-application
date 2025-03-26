import { useSelector } from "react-redux"
import { Card, CardContent } from "../ui/card"
import Todo from "./Todo"
import { RootState } from "@/state/store"

const DisplayTodos = () => {
  const todos = useSelector((state: RootState) => state.todosState.todos)

  return (
    <Card>
      <CardContent className="space-y-4">
        {
          todos.length === 0 ?
            (
              <p className="text-center text-muted-foreground py-4">No tasks yet. Add one above!</p>
            ) : (
              todos.map(todo => <Todo key={todo.id} id={todo.id} priority={todo.priority} completed={todo.completed} title={todo.title} activity={todo.activity} />)
            )
        }
      </CardContent>
    </Card>
  )
}

export default DisplayTodos
