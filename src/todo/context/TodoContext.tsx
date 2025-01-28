import { createContext } from "react";
import { Todo, TodoState } from "../interface/interfaces";
export type TodoContextProps = {
  todoState: TodoState;
  toggleTodo: (id: string) => void;
  // dispatch: () => Todo;
};

export const TodoContext = createContext<TodoContextProps>(
  {} as TodoContextProps
);
