import { combineReducers } from '@reduxjs/toolkit';
import { todosReducer } from './todos/todos.reducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
});
