// AddTodo.js
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  updateTodo,
  setEditMode,
  setInputText,
} from "../features/todo/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const i = useSelector((state) => state.i);
  const editMode = useSelector((state) => state.editMode);
  const editId = useSelector((state) => state.editId);

  const handleAddOrUpdate = () => {
    if (editMode) {
      console.log(i, editMode, editId);
      dispatch(updateTodo({ id: editId, text: i }));
      dispatch(setEditMode({ editMode: false, editId: null, i: "" }));
    } else {
      dispatch(addTodo(i));
      dispatch(setInputText(""));
      dispatch(setEditMode({ editMode: false, editId: null, i: "" }));
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={i}
        onChange={(e) => dispatch(setInputText({ i: e.target.value }))}
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
      <button
        onClick={handleAddOrUpdate}
        className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md ml-2"
      >
        {editMode ? "Update Todo" : "Add Todo"}
      </button>
    </div>
  );
}

export default AddTodo;
