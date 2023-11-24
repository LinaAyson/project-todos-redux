// src/App.jsx

import React from "react";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import tasksReducer from "./reducers/tasks";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const reducer = combineReducers({
  tasks: tasksReducer,
});

const store = configureStore({ reducer });

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Todo App</h1>
        <TaskForm />
        <TaskList />
      </div>
    </Provider>
  );
};

export default App;
