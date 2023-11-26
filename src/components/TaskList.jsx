import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleComplete, removeTask } from "../reducers/tasks";
import TaskCount from "./TaskCount";
import "./TaskList.css";

const TaskList = ({ showCompleted }) => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = showCompleted
    ? tasks.filter((task) => task.complete)
    : tasks;

  const handleToggleComplete = (id) => {
    dispatch(toggleComplete({ id }));
  };

  const handleRemoveTask = (id) => {
    dispatch(removeTask({ id }));
  };

  return (
    <>
      <div className="taskList">
        <h2>TaskList</h2>
        <ul>
          {filteredTasks.map((task) => (
            <li key={task.id} className={task.complete ? "completed" : ""}>
              <input
                type="checkbox"
                checked={task.complete}
                onChange={() => handleToggleComplete(task.id)}
              />
              <span className="task-text">{task.text}</span>
              <span className="timestamp">Created at: {task.timestamp}</span>
              <button
                className="btnRmvTask"
                onClick={() => handleRemoveTask(task.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
      <div className="taskCount">
        <TaskCount />
      </div>
    </>
  );
};

export default TaskList;
