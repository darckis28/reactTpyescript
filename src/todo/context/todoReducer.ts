import { Todo, TodoState } from "../interface/interfaces";

type TodoAction =
  | { type: "ADD_TODO"; payload: Todo }
  | { type: "TOGGLE_TODO"; payload: { id: string } };

export const todoReducer = (
  state: TodoState,
  action: TodoAction
): TodoState => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(({ ...todo }) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
  }
};
