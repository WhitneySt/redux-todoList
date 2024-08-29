import { useDispatch } from "react-redux";
import { filterTask } from "../../store/todoSlice";

const FilterButtons = () => {
  const dispatch = useDispatch();

  const handleFilter = (status) => {
    dispatch(filterTask(status));
  };

  return (
    <div>
      <button onClick={() => handleFilter("all")}>Todas</button>
      <button onClick={() => handleFilter(true)}>Completadas</button>
      <button onClick={() => handleFilter(false)}>Pendientes</button>
    </div>
  );
};

export default FilterButtons;
