import { Todo } from "../interface/interfaces";
import { useTodos } from "../hooks/useTodos";
interface props {
  todo: Todo;
}

const TodoItem = ({ todo }: props) => {
  const { toggleTodo } = useTodos();
  const handelDblclick = () => {
    toggleTodo(todo.id);
  };
  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "",
        cursor: "pointer",
      }}
      onDoubleClick={handelDblclick}
    >
      {todo.desc}
    </li>
  );
};
export default TodoItem;
