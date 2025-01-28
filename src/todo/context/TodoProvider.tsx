import { useReducer } from "react";
import { TodoState } from "../interface/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
  todos: [
    {
      id: "1",
      desc: "Learn React",
      completed: false,
    },
    {
      id: "2",
      desc: "Learn TypeScript",
      completed: false,
    },
    {
      id: "3",
      desc: "Learn Next.js",
      completed: false,
    },
  ],
  todoCount: 0,
  completed: 0,
  pending: 0,
};

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  const toggleTodo = (id: string) => {
    dispatch({ type: "TOGGLE_TODO", payload: { id } });
  };
  return (
    <TodoContext.Provider
      value={{
        todoState,
        toggleTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
export default TodoProvider;
