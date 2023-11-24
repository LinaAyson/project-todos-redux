import { createSlice } from '@reduxjs/toolkit';

export const tasks = createSlice({
  name: 'tasks',
  initialState: [
  ],
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
    toggleComplete: (state, action) => {
      const { id } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.complete = !task.complete;
      }
    },
    removeTask: (state, action) => {
      const { id } = action.payload;
      return state.filter(task => task.id !== id);
    },
  },
});

export const { addTask, toggleComplete, removeTask } = tasks.actions;
export default tasks.reducer;