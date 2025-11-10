import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  todoItems: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: INITIAL_STATE,
  reducers: {},
});

export const todoReducer = todoSlice.reducer;
