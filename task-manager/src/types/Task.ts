export interface Task {
  id: string;
  title: string;
  description: string;
  status: "pending" | "in-progress" | "completed";
  dueDate?: string;
  createdAt: Date;
  updatedAt: Date;
}
