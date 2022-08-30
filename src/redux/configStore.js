import { configureStore } from "@reduxjs/toolkit";
import { toDoSlice, commentSlice } from "./modules/slice";
import todo from "./modules/slice";
import todos from "./modules/todosSlice";

const store = configureStore({
  reducer: { todo: todo, comment: commentSlice.reducer, todos },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
