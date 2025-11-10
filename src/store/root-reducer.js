import { combineReducers } from '@reduxjs/toolkit';
import { todosReducer } from './todos/todo.reducer';

export const rootReducer = combineReducers({
  todos: todosReducer,
});
