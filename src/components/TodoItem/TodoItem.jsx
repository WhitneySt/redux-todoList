import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../store/todoSlice";

const TodoItem = ({ task = null }) => {
  const dispatch = useDispatch();

  const handleUpdateStatus = (todo) => {
    const updatedTodo = {
      ...todo,
      complete: !todo.complete,
    };
    dispatch(updateTask(updatedTodo));
  };

  const handleDelete = () => {
    const confirmDelete = confirm("Está seguro de eliminar esta tarea?");
    if (confirmDelete) {
      dispatch(deleteTask(task.id));
    }
  };

  return (
    <label>
      <input
        type="checkbox"
        checked={task?.complete}
        onChange={() => handleUpdateStatus(task)}
      />
      <span>{task?.description}</span>
      <button onClick={handleDelete}>Eliminar</button>
    </label>
  );
};

TodoItem.propTypes = {
  task: PropTypes.object,
};

export default TodoItem;
