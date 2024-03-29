import React from "react";
import "./todoCard.css";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
const TodoCard = ({ task, deleteHandler, markHandler, isMarked }) => {
  return (
    <div className="todo-card-section">
      <h4 style={isMarked ? { textDecoration: "line-through" } : {}}>{task}</h4>
      <div className="todo-card-icons">
        <button onClick={markHandler}>
          <IoMdCheckmarkCircleOutline />
        </button>
        <button onClick={deleteHandler}>
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
