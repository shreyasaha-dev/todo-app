import React, { useState } from "react";
import "./taskInput.css";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/reducer/TodoReducer";
import { v4 as uuidv4 } from "uuid";
const TaskInput = () => {
  const [todoValue, setTodoValue] = useState("");
  const dispatch = useDispatch();
  //storing todo items in redux
  const handleSubmit = () => {
    if (!todoValue) {
      return toast.error("Please add a todo first");
    }
    dispatch(addTodo({ title: todoValue, id: uuidv4(), isMarked: false }));
    setTodoValue("");
  };
  return (
    <div className="todo-input-section">
      <input
        placeholder="Write your task here"
        value={todoValue}
        onChange={(e) => {
          setTodoValue(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSubmit();
          }
        }}
      />
      <button
        className="addButton"
        onClick={() => {
          handleSubmit();
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
