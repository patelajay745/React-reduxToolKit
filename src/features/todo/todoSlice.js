import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  editMode: false,
  editId: null,
  i: "",
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      console.log("state", state);
      console.log("action", action);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      console.log(action);
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text }
          : todo
      );
    },
    setEditMode: (state, action) => {
      console.log(action);

      state.editId = action.payload.id;
      state.editMode = action.payload.editMode;
      state.i = action.payload.i;
    },
    setInputText: (state, action) => {
      state.i = action.payload.i;
    },
  },
});

export default todoSlice.reducer;
export const { addTodo, removeTodo, updateTodo, setEditMode, setInputText } =
  todoSlice.actions;
