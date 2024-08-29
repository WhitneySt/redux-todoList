import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTask } from "../../store/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const todo = useSelector((store) => store.todo.todo);

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim()) {
      const task = {
        id: todo[todo.length - 1].id + 1,
        description: newTask,
        complete: false,
      };
      dispatch(createTask(task));
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Agregue nueva tarea"
        value={newTask}
        onChange={handleChange}
      />
      <button>Guardar</button>
    </form>
  );
};

export default TodoForm;
