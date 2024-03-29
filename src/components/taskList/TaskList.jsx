import React from "react";
import TodoCard from "../todoCard/TodoCard";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, markTodo } from "../../store/reducer/TodoReducer";

const TaskList = () => {
  const todo = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  //deteleting each todo item
  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };
  //mark as completed each todo item
  const markHandler = (id) => {
    dispatch(markTodo(id));
  };
  //displaying all todos
  return todo.map((item) => {
    return (
      <TodoCard
        key={item.id}
        task={item.title}
        isMarked={item.isMarked}
        deleteHandler={() => {
          deleteHandler(item.id);
        }}
        markHandler={() => {
          markHandler(item.id);
        }}
      />
    );
  });
};

export default TaskList;
