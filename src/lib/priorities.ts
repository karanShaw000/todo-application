const priorities = [
  { label: "High", value: "high" },
  { label: "Medium", value: "medium" },
  { label: "Low", value: "low" },
]

export const priorityOrder = {
  "high": 3,
  "medium": 2,
  "low": 1,
}

export type Priority = "high" | "medium" | "low"

export default priorities
