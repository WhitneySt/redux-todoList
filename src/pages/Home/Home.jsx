import FilterButtons from "../../components/FilterButtons/FilterButtons"
import TodoForm from "../../components/TodoForm/TodoForm"
import TodoList from "../../components/TodoList/TodoList"

const Home = () => {
  return (
      <main>
          <h1>Mi lista de tareas</h1>
          <TodoForm />
          <FilterButtons/>
          <TodoList/>
    </main>
  )
}

export default Home