import { combineReducers } from '@reduxjs/toolkit';
import { todoReducer } from './todos/todo.reducer';

export const rootReducer = combineReducers({
  todo: todoReducer,
});
