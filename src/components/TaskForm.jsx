import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/tasks";
import "./TaskForm.css";

const TaskForm = () => {
  const [taskText, setTaskText] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    setTaskText(event.target.value);
  };
  const handleAddTask = () => {
    if (taskText.trim() !== "") {
      const newTask = {
        id: new Date().getTime(),
        text: taskText,
        complete: false,
        timestamp: new Date().toLocaleString("en-US", {
          year: "numeric",
          month: "numeric",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }),
      };

      console.log(newTask); // Add this line for debugging

      dispatch(addTask(newTask));
      setTaskText("");
    }
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTask();
    }
  };

  return (
    <div className="taskForm">
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="btnAddTask" onClick={handleAddTask}>
        Add Task
      </button>
    </div>
  );
};

export default TaskForm;
