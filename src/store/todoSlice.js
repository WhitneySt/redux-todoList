import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todo: [
    {
      id: 1,
      description: "Estudiar Redux toolkit",
      complete: false,
    },
    {
      id: 2,
      description: "Estudiar implementación de firebase",
      complete: true,
    },
    {
      id: 3,
      description: "Repasar protección de rutas",
      complete: false,
    },
    {
      id: 4,
      description: "Terminar primera entrega proyecto integrador",
      complete: true,
    },
  ],
  isActiveFilter: false,
  filteredTodo: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    createTask: (state, action) => {
      state.todo.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.todo = state.todo.filter((item) => item.id !== action.payload);
    },
    updateTask: (state, action) => {
      state.todo = state.todo.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
    },
    filterTask: (state, action) => {
      const filteredTask = state.todo.filter(
        (item) => item.complete === action.payload
      );

      state.isActiveFilter = action.payload === "all" ? false : true;
      state.filteredTodo =
        action.payload === "all" ? initialState.filteredTodo : filteredTask;
    },
  },
});

const todoReducer = todoSlice.reducer;
export default todoReducer;
export const { createTask, deleteTask, updateTask, filterTask } =
  todoSlice.actions;
