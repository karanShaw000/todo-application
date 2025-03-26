import { Priority } from "./priorities"

const getPriorityColor = (priority: Priority) => {
  switch (priority) {
    case "high":
      return "bg-red-500"
    case "medium":
      return "bg-yellow-500"
    case "low":
      return "bg-blue-500"
    default:
      return "bg-gray-500"
  }
}
export default getPriorityColor
