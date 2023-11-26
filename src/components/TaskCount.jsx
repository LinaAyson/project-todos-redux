import React from "react";
import { useSelector } from "react-redux";

const TaskCount = () => {
  const tasks = useSelector((state) => state.tasks);

  const totalTasks = tasks.length;
  const uncompletedTasks = tasks.filter((task) => !task.complete).length;

  return (
    <div>
      <p>Total Tasks: {totalTasks}</p>
      <p>Uncompleted Tasks: {uncompletedTasks}</p>
    </div>
  );
};

export default TaskCount;
