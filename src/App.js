import React from "react";
import "./app.css";
import TaskInput from "./components/taskInput/TaskInput";
import { Toaster } from "react-hot-toast";
import TaskList from "./components/taskList/TaskList";
const App = () => {
  return (
    <div className="all-todo">
      <TaskInput />
      <TaskList />
      <Toaster />
    </div>
  );
};

export default App;
