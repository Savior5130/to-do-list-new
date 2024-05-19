export type TodoStatus = "COMPLETE" | "INCOMPLETE" | "OVERDUE";

export type Todo = {
  title: string;
  dueDate: Date;
  status: TodoStatus;
};

export interface TodolistProps {
  data: Todo[];
}
