import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";

const TodoList = () => {
  const { todo, isActiveFilter, filteredTodo } = useSelector(
    (store) => store.todo
  );
  return (
    <div>
      {isActiveFilter
        ? filteredTodo.map((item) => <TodoItem key={item.id} task={item} />)
        : todo.map((item) => <TodoItem key={item.id} task={item} />)}
    </div>
  );
};

export default TodoList;
