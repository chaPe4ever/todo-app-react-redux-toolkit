import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState: INITIAL_STATE,
  reducers: {
    setTodos(state, action) {
      state.todos = action.payload;
    },
  },
});

export const { setTodos } = todosSlice.actions;

export const todosReducer = todosSlice.reducer;
