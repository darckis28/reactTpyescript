export interface Todo {
  id: string;
  desc: string;
  completed: boolean;
}
export interface TodoState {
  todos: Todo[];
  todoCount: number;
  completed: number;
  pending: number;
}
