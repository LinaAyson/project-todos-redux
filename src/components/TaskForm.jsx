import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../reducers/tasks";

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
        timestamp: new Date().toLocaleString(),
      };

      console.log(newTask); // Add this line for debugging

      dispatch(addTask(newTask));
      setTaskText("");
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task"
        value={taskText}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskForm;
